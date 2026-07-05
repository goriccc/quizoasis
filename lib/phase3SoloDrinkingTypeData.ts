/**
 * 나의 혼술 유형과 술버릇 — 12문항 이미지 4지선다, A=0 B=1 C=2 D=3, 총점 0~36 → 6유형
 *
 * Supabase `tests-thumbnails` 업로드 파일명 규칙:
 * - 썸네일: p3_test_solo_drinking_type.webp
 * - 답변 이미지(1:1): p3_test_solo_drinking_type_q{n}a~d.webp (12문항 × 4 = 48장)
 */

function M(ko: string, en: string, ja: string, zhCN: string, zhTW: string, vi: string, id: string): Record<string, string> {
  return { ko, en, ja, 'zh-CN': zhCN, 'zh-TW': zhTW, vi, id };
}

export interface Phase3SoloDrinkingTypeQuestion {
  id: number;
  question: Record<string, string>;
  options: { image: string; label: Record<string, string>; score: number }[];
}

export interface Phase3SoloDrinkingTypeResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  soloDrinkingType: Record<string, string>;
  soloDrinkingKeywords: Record<string, string>;
  favoriteDrinks: Record<string, string>;
  favoriteSnacks: Record<string, string>;
  personalityTrait: Record<string, string>;
  drinkingHabit: Record<string, string>;
  drinkingTip: Record<string, string>;
  oneLineReview: Record<string, string>;
  shareSnippet: Record<string, string>;
}

export function calculatePhase3SoloDrinkingTypeResult(scores: number[]): string {
  const total = scores.reduce((a, b) => a + (b ?? 0), 0);
  if (total <= 5) return 'Type1';
  if (total <= 11) return 'Type2';
  if (total <= 19) return 'Type3';
  if (total <= 27) return 'Type4';
  if (total <= 33) return 'Type5';
  return 'Type6';
}

function makeQuestion(
  id: number,
  question: Record<string, string>,
  options: Record<string, string>[]
): Phase3SoloDrinkingTypeQuestion {
  const suffixes = ['a', 'b', 'c', 'd'] as const;
  return {
    id,
    question,
    options: options.map((label, i) => ({
      image: `p3_test_solo_drinking_type_q${id}${suffixes[i]}.webp`,
      label,
      score: i,
    })),
  };
}

export const phase3SoloDrinkingTypeQuestions: Phase3SoloDrinkingTypeQuestion[] = [
  makeQuestion(
    1,
    M(
      '혼술을 시작하기 전 나의 준비 과정은?',
      'What is my prep routine before solo drinking?',
      'お酒を始める前、私の準備は？',
      '开始独饮前，我的准备过程是？',
      '開始獨飲前，我的準備過程是？',
      'Trước khi uống một mình, tôi thường chuẩn bị như thế nào?',
      'Apa ritual persiapan saya sebelum mulai minum sendiri?'
    ),
    [
      M(
        '조명을 바꾸고 음악을 틀며 분위기를 세팅한다',
        'Change the lighting, play music, and set the mood',
        '照明を変えて音楽を流し、雰囲気を整える',
        '换灯光、放音乐，营造氛围',
        '換燈光、放音樂，營造氛圍',
        'Đổi đèn, bật nhạc và tạo không khí',
        'Ganti lampu, putar musik, dan siapkan suasana'
      ),
      M(
        '볼 영상이나 드라마를 미리 고른다',
        'Pick a video or drama to watch in advance',
        '見る動画やドラマを事前に選ぶ',
        '提前选好要看的视频或剧',
        '提前選好要看的影片或劇',
        'Chọn trước video hoặc phim để xem',
        'Pilih video atau drama yang akan ditonton terlebih dahulu'
      ),
      M(
        '안주를 정성스럽게 준비하거나 시킨다',
        'Carefully prepare or order snacks',
        'おつまみを丁寧に用意するか注文する',
        '精心准备或点下酒菜',
        '精心準備或點下酒菜',
        'Chuẩn bị kỹ hoặc gọi món nhắm',
        'Siapkan atau pesan camilan dengan teliti'
      ),
      M(
        '냉장고에서 바로 꺼낸다. 준비 같은 건 없다',
        'Grab it straight from the fridge. No prep needed',
        '冷蔵庫からそのまま出す。準備はなし',
        '直接从冰箱拿出来，不需要准备',
        '直接從冰箱拿出來，不需要準備',
        'Lấy thẳng từ tủ lạnh. Không cần chuẩn bị',
        'Ambil langsung dari kulkas. Tanpa persiapan'
      ),
    ]
  ),
  makeQuestion(
    2,
    M(
      '혼술할 때 가장 자주 마시는 술은?',
      'What do I drink most often when drinking alone?',
      '一人飲みで最もよく飲むお酒は？',
      '独饮时最常喝的酒是？',
      '獨飲時最常喝的酒是？',
      'Khi uống một mình, tôi thường uống gì nhất?',
      'Minuman apa yang paling sering saya minum saat minum sendiri?'
    ),
    [
      M(
        '와인 또는 위스키. 분위기 있는 술',
        'Wine or whiskey. Drinks with atmosphere',
        'ワインやウイスキー。雰囲気のあるお酒',
        '葡萄酒或威士忌，有氛围的酒',
        '葡萄酒或威士忌，有氛圍的酒',
        'Rượu vang hoặc whisky. Đồ uống có không khí',
        'Wine atau whiskey. Minuman beratmosfer'
      ),
      M(
        '맥주 또는 하이볼. 가볍고 부담 없는 술',
        'Beer or highball. Light and easy drinks',
        'ビールやハイボール。軽くて気軽なお酒',
        '啤酒或嗨棒，轻松无负担',
        '啤酒或嗨棒，輕鬆無負擔',
        'Bia hoặc highball. Nhẹ nhàng, dễ uống',
        'Beer atau highball. Ringan dan santai'
      ),
      M(
        '소주 또는 막걸리. 한국적인 정통 혼술',
        'Soju or makgeolli. Classic Korean solo drinking',
        '焼酎やマッコリ。韓国的な定番の一人飲み',
        '烧酒或马格利，正统韩式独饮',
        '燒酒或馬格利，正統韓式獨飲',
        'Soju hoặc makgeolli. Uống một mình kiểu Hàn truyền thống',
        'Soju atau makgeolli. Minum sendiri klasik ala Korea'
      ),
      M(
        '그날 기분에 따라 다르다. 장르 불문',
        'Depends on my mood that day. Any genre',
        'その日の気分次第。ジャンル不問',
        '看当天心情，不限种类',
        '看當天心情，不限種類',
        'Tùy tâm trạng hôm đó. Không giới hạn loại',
        'Tergantung mood hari itu. Semua jenis'
      ),
    ]
  ),
  makeQuestion(
    3,
    M(
      '혼술 안주를 고르는 나의 기준은?',
      'What is my criteria for choosing solo-drinking snacks?',
      '一人飲みのおつまみ選びの基準は？',
      '我选择独饮下酒菜的标准是？',
      '我選擇獨飲下酒菜的標準是？',
      'Tiêu chí chọn món nhắm khi uống một mình của tôi là gì?',
      'Apa kriteria saya memilih camilan saat minum sendiri?'
    ),
    [
      M(
        '술과 어울리는 페어링. 와인엔 치즈, 맥주엔 감자칩 등',
        'Pairing that matches the drink. Cheese with wine, chips with beer, etc.',
        'お酒に合うペアリング。ワインにはチーズ、ビールにはポテチなど',
        '与酒搭配的配对，如葡萄酒配奶酪、啤酒配薯片等',
        '與酒搭配的配對，如葡萄酒配起司、啤酒配洋芋片等',
        'Ghép đôi hợp với rượu. Phô mai với rượu vang, khoai tây chiên với bia, v.v.',
        'Pairing yang cocok dengan minuman. Keju untuk wine, keripik untuk beer, dll.'
      ),
      M(
        '먹기 편한 것. 영상 보면서 집어먹을 수 있는 것',
        'Easy to eat. Something I can grab while watching videos',
        '食べやすいもの。動画を見ながらつまめるもの',
        '方便吃的，看视频时能随手拿的东西',
        '方便吃的，看影片時能隨手拿的東西',
        'Dễ ăn. Có thể gắp trong lúc xem video',
        'Mudah dimakan. Bisa diambil sambil nonton video'
      ),
      M(
        '오늘 제일 먹고 싶은 것. 안주가 주인공이다',
        'Whatever I crave most today. Snacks are the star',
        '今日いちばん食べたいもの。おつまみが主役',
        '今天最想吃的，下酒菜才是主角',
        '今天最想吃的，下酒菜才是主角',
        'Món tôi thèm nhất hôm nay. Món nhắm mới là nhân vật chính',
        'Yang paling saya inginkan hari ini. Camilan jadi bintang utamanya'
      ),
      M(
        '냉장고에 있는 것. 없으면 그냥 술만 마신다',
        'Whatever is in the fridge. If none, I just drink',
        '冷蔵庫にあるもの。なければお酒だけ飲む',
        '冰箱里有什么就吃什么，没有就只喝酒',
        '冰箱裡有什麼就吃什麼，沒有就只喝酒',
        'Có gì trong tủ lạnh. Không có thì chỉ uống rượu',
        'Apa pun yang ada di kulkas. Kalau tidak ada, minum saja'
      ),
    ]
  ),
  makeQuestion(
    4,
    M(
      '혼술 중 가장 많이 하는 행동은?',
      'What do I do most while drinking alone?',
      '一人飲み中に最もよくしていることは？',
      '独饮时最常做的事是？',
      '獨飲時最常做的事是？',
      'Khi uống một mình, tôi hay làm gì nhất?',
      'Apa yang paling sering saya lakukan saat minum sendiri?'
    ),
    [
      M(
        '감성적인 음악을 들으며 생각에 잠긴다',
        'Listen to emotional music and get lost in thought',
        '感傷的な音楽を聴きながら考えにふける',
        '听感性的音乐，陷入沉思',
        '聽感性的音樂，陷入沉思',
        'Nghe nhạc cảm xúc và chìm vào suy nghĩ',
        'Mendengarkan musik emosional sambil tenggelam dalam pikiran'
      ),
      M(
        '영상이나 드라마를 보며 웃거나 운다',
        'Watch videos or dramas and laugh or cry',
        '動画やドラマを見て笑ったり泣いたりする',
        '看视频或剧，又笑又哭',
        '看影片或劇，又笑又哭',
        'Xem video hoặc phim, cười hoặc khóc',
        'Menonton video atau drama sambil tertawa atau menangis'
      ),
      M(
        '지인에게 메시지를 보내거나 전화한다',
        'Send messages or call people I know',
        '知人にメッセージを送ったり電話する',
        '给熟人发消息或打电话',
        '給熟人發訊息或打電話',
        'Nhắn tin hoặc gọi cho người quen',
        'Mengirim pesan atau menelepon kenalan'
      ),
      M(
        '아무것도 안 한다. 그냥 마신다',
        'Do nothing. Just drink',
        '何もしない。ただ飲む',
        '什么都不做，就是喝',
        '什麼都不做，就是喝',
        'Không làm gì cả. Chỉ uống thôi',
        'Tidak melakukan apa-apa. Hanya minum'
      ),
    ]
  ),
  makeQuestion(
    5,
    M(
      '나의 술버릇 중 가장 비슷한 것은?',
      'Which drinking habit sounds most like me?',
      '私の酒癖で最も近いのは？',
      '我的酒癖中最接近的是？',
      '我的酒癖中最接近的是？',
      'Thói uống nào giống tôi nhất?',
      'Kebiasaan minum mana yang paling mirip dengan saya?'
    ),
    [
      M(
        '취할수록 감성적이 된다. 혼자 울거나 노래를 흥얼거린다',
        'The drunker I get, the more emotional. I cry alone or hum songs',
        '酔うほど感傷的になる。一人で泣いたり歌を口ずさんだりする',
        '越喝越感性，独自流泪或哼歌',
        '越喝越感性，獨自流淚或哼歌',
        'Càng say càng cảm xúc. Khóc một mình hoặc ngân nga hát',
        'Semakin mabuk semakin emosional. Menangis sendiri atau bersenandung'
      ),
      M(
        '취할수록 수다스러워진다. 연락하지 말아야 할 사람에게 연락한다',
        'The drunker I get, the chattier I become. I contact people I should not',
        '酔うほどおしゃべりになる。連絡してはいけない人に連絡する',
        '越喝越话多，联系不该联系的人',
        '越喝越話多，聯絡不該聯絡的人',
        'Càng say càng nói nhiều. Liên lạc với người không nên liên lạc',
        'Semakin mabuk semakin cerewet. Menghubungi orang yang seharusnya tidak'
      ),
      M(
        '취할수록 식욕이 폭발한다. 안주를 계속 시킨다',
        'The drunker I get, the more my appetite explodes. I keep ordering snacks',
        '酔うほど食欲が爆発する。おつまみを次々注文する',
        '越喝食欲越爆发，不断点下酒菜',
        '越喝食慾越爆發，不斷點下酒菜',
        'Càng say càng thèm ăn. Liên tục gọi thêm món nhắm',
        'Semakin mabuk semakin lapar. Terus memesan camilan'
      ),
      M(
        '취하면 그냥 잠든다. 어느 순간 소파에서 자고 있다',
        'When drunk, I just fall asleep. Suddenly asleep on the sofa',
        '酔うとそのまま寝る。気づいたらソファで寝ている',
        '喝醉了就直接睡，不知不觉在沙发上睡着',
        '喝醉了就直接睡，不知不覺在沙發上睡著',
        'Say rồi cứ ngủ thôi. Bỗng dưng ngủ trên sofa',
        'Kalau mabuk langsung tidur. Tiba-tiba tertidur di sofa'
      ),
    ]
  ),
  makeQuestion(
    6,
    M(
      '혼술 장소는 주로 어디인가요?',
      'Where do I usually drink alone?',
      '一人飲みの場所は主にどこ？',
      '独饮地点主要在哪里？',
      '獨飲地點主要在哪裡？',
      'Tôi thường uống một mình ở đâu?',
      'Di mana saya biasanya minum sendiri?'
    ),
    [
      M(
        '침실. 이불 속이 최고의 혼술 공간이다',
        'Bedroom. Under the blanket is the best solo-drinking spot',
        '寝室。布団の中が最高の一人飲み空間',
        '卧室，被窝里是最好的独饮空间',
        '臥室，被窩裡是最好的獨飲空間',
        'Phòng ngủ. Trong chăn là không gian uống một mình tuyệt nhất',
        'Kamar tidur. Di bawah selimut adalah spot minum sendiri terbaik'
      ),
      M(
        '거실 소파. TV 앞이 기본 혼술 자리다',
        'Living room sofa. In front of the TV is my default spot',
        'リビングのソファ。TVの前が基本の一人飲み席',
        '客厅沙发，电视前是默认独饮位',
        '客廳沙發，電視前是預設獨飲位',
        'Sofa phòng khách. Trước TV là chỗ uống mặc định',
        'Sofa ruang tamu. Di depan TV adalah tempat minum standar'
      ),
      M(
        '주방 또는 식탁. 안주와 가까운 곳이 좋다',
        'Kitchen or dining table. Close to the snacks is best',
        'キッチンや食卓。おつまみに近い場所がいい',
        '厨房或餐桌，离下酒菜近的地方最好',
        '廚房或餐桌，離下酒菜近的地方最好',
        'Bếp hoặc bàn ăn. Gần món nhắm là tốt nhất',
        'Dapur atau meja makan. Dekat camilan paling enak'
      ),
      M(
        '베란다나 창가. 바람이나 야경이 있는 곳이 좋다',
        'Balcony or by the window. A place with breeze or night views',
        'ベランダや窓際。風や夜景のある場所がいい',
        '阳台或窗边，有风或夜景的地方最好',
        '陽台或窗邊，有風或夜景的地方最好',
        'Ban công hoặc cửa sổ. Nơi có gió hoặc view đêm',
        'Balkon atau dekat jendela. Tempat dengan angin atau pemandangan malam'
      ),
    ]
  ),
  makeQuestion(
    7,
    M(
      '혼술할 때 음악이나 콘텐츠 선택은?',
      'How do I choose music or content while drinking alone?',
      '一人飲み中の音楽やコンテンツの選び方は？',
      '独饮时如何选择音乐或内容？',
      '獨飲時如何選擇音樂或內容？',
      'Khi uống một mình, tôi chọn nhạc hoặc nội dung thế nào?',
      'Bagaimana saya memilih musik atau konten saat minum sendiri?'
    ),
    [
      M(
        '감성 플레이리스트. 재즈·인디·로파이 장르',
        'Emotional playlist. Jazz, indie, lo-fi genres',
        '感傷的プレイリスト。ジャズ・インディ・ローファイなど',
        '感性歌单，爵士、独立、Lo-fi 等',
        '感性歌單，爵士、獨立、Lo-fi 等',
        'Playlist cảm xúc. Jazz, indie, lo-fi',
        'Playlist emosional. Jazz, indie, lo-fi'
      ),
      M(
        '예능·드라마·유튜브. 재밌는 것이 최고',
        'Variety shows, dramas, YouTube. Fun content is best',
        'バラエティ・ドラマ・YouTube。面白いものが最高',
        '综艺、剧集、YouTube，有趣的内容最好',
        '綜藝、影集、YouTube，有趣的內容最好',
        'Show giải trí, phim, YouTube. Vui là nhất',
        'Variety show, drama, YouTube. Yang seru paling bagus'
      ),
      M(
        '아무것도 안 튼다. 조용한 게 좋다',
        'Play nothing. Quiet is best',
        '何も流さない。静かなのがいい',
        '什么都不放，安静最好',
        '什麼都不放，安靜最好',
        'Không bật gì cả. Yên tĩnh là tốt nhất',
        'Tidak memutar apa pun. Tenang paling enak'
      ),
      M(
        '그날 기분에 맞는 노래를 크게 튼다. 장르 불문',
        'Play mood-matching songs loudly. Any genre',
        'その日の気分に合う曲を大音量で。ジャンル不問',
        '按当天心情大声放歌，不限种类',
        '按當天心情大聲放歌，不限種類',
        'Bật nhạc hợp tâm trạng to lớn. Không giới hạn thể loại',
        'Putar lagu sesuai mood dengan volume keras. Semua genre'
      ),
    ]
  ),
  makeQuestion(
    8,
    M(
      '혼술의 양은 주로 어느 정도인가요?',
      'How much do I usually drink when alone?',
      '一人飲みの量は主にどのくらい？',
      '独饮的量通常是多少？',
      '獨飲的量通常是多少？',
      'Lượng rượu khi uống một mình thường là bao nhiêu?',
      'Berapa banyak saya biasanya minum saat sendirian?'
    ),
    [
      M(
        '소량. 1~2잔이면 충분하다. 분위기를 즐기는 것이 목적',
        'A small amount. 1–2 glasses is enough. I drink for the mood',
        '少量。1〜2杯で十分。雰囲気を楽しむのが目的',
        '少量，1–2杯就够，目的是享受氛围',
        '少量，1–2杯就夠，目的是享受氛圍',
        'Ít thôi. 1–2 ly là đủ. Mục tiêu là tận hưởng không khí',
        'Sedikit. 1–2 gelas sudah cukup. Tujuannya menikmati suasana'
      ),
      M(
        '적당량. 적당히 취기가 올 정도',
        'A moderate amount. Just enough to feel tipsy',
        '適量。ほどよく酔いが回る程度',
        '适量，喝到微醺刚好',
        '適量，喝到微醺剛好',
        'Vừa phải. Đủ say nhẹ',
        'Sedang. Cukup tipsy saja'
      ),
      M(
        '그때그때 다르다. 시작은 1잔인데 끝은 모른다',
        'It varies. Starts with one glass, ends who knows where',
        'その時々で違う。始まりは1杯だが終わりは分からない',
        '看情况，一开始一杯，结束未知',
        '看情況，一開始一杯，結束未知',
        'Tùy lúc. Bắt đầu 1 ly nhưng kết thúc thì không biết',
        'Tergantung situasi. Mulai 1 gelas, akhirnya siapa tahu'
      ),
      M(
        '마시다 보면 어느새 많이 마셨다. 페이스 조절이 어렵다',
        'Before I know it, I have drunk a lot. Hard to control the pace',
        '飲んでいるうちに気づいたらたくさん飲んでいる。ペース調整が難しい',
        '喝着喝着就喝很多，很难控制节奏',
        '喝著喝著就喝很多，很難控制節奏',
        'Uống mãi rồi bỗng uống rất nhiều. Khó kiểm soát nhịp độ',
        'Minum terus lalu tiba-tiba sudah banyak. Sulit mengatur tempo'
      ),
    ]
  ),
  makeQuestion(
    9,
    M(
      '혼술 중 갑자기 누군가와 마시고 싶어진다면?',
      'If I suddenly want to drink with someone while alone?',
      '一人飲み中、急に誰かと飲みたくなったら？',
      '独饮中突然想和人一起喝怎么办？',
      '獨飲中突然想和人一起喝怎麼辦？',
      'Nếu đang uống một mình mà đột nhiên muốn uống cùng ai đó?',
      'Kalau tiba-tiba ingin minum bersama seseorang saat minum sendiri?'
    ),
    [
      M(
        '그냥 혼자 즐긴다. 혼술이 더 편하다',
        'Just enjoy alone. Solo drinking is more comfortable',
        'そのまま一人で楽しむ。一人飲みの方が楽',
        '就独自享受，独饮更自在',
        '就獨自享受，獨飲更自在',
        'Cứ tận hưởng một mình. Uống một mình thoải mái hơn',
        'Nikmati sendiri saja. Minum sendiri lebih nyaman'
      ),
      M(
        '영상통화로 같이 마시는 척을 한다',
        'Pretend to drink together over video call',
        'ビデオ通話で一緒に飲んでいるふりをする',
        '视频通话假装一起喝',
        '視訊通話假裝一起喝',
        'Giả vờ uống cùng nhau qua video call',
        'Pura-pura minum bareng lewat video call'
      ),
      M(
        '바로 연락해서 "지금 올 수 있어?"라고 묻는다',
        'Contact someone right away and ask, "Can you come now?"',
        'すぐ連絡して「今来られる？」と聞く',
        '立刻联系问「你现在能来吗？」',
        '立刻聯絡問「你現在能來嗎？」',
        'Liên lạc ngay và hỏi "Bây giờ sang được không?"',
        'Langsung hubungi dan tanya "Bisa datang sekarang?"'
      ),
      M(
        'SNS에 혼술 인증샷을 올린다. 누군가 반응해주길',
        'Post a solo-drinking photo on SNS. Hoping someone reacts',
        'SNSに一人飲み認証ショットを上げる。誰か反応してほしい',
        '在社交媒体发独饮认证照，希望有人回应',
        '在社群媒體發獨飲認證照，希望有人回應',
        'Đăng ảnh uống một mình lên SNS. Mong ai đó phản hồi',
        'Unggah foto minum sendiri di SNS. Berharap ada yang merespons'
      ),
    ]
  ),
  makeQuestion(
    10,
    M(
      '혼술 후 다음 날 아침 기분은?',
      'How do I feel the morning after solo drinking?',
      '一人飲みの翌朝の気分は？',
      '独饮后第二天早上感觉如何？',
      '獨飲後第二天早上感覺如何？',
      'Sáng hôm sau uống một mình, tôi cảm thấy thế nào?',
      'Bagaimana perasaan saya pagi setelah minum sendiri?'
    ),
    [
      M(
        '개운하다. 적당히 마셔서 다음 날 아무 문제 없다',
        'Refreshed. Drank just enough, no problems the next day',
        'すっきり。適量なので翌日は問題なし',
        '很清爽，喝得刚好，第二天没问题',
        '很清爽，喝得剛好，第二天沒問題',
        'Sảng khoái. Uống vừa phải nên hôm sau không sao',
        'Segar. Minum secukupnya, besok tidak masalah'
      ),
      M(
        '약간 무겁다. 그래도 감수할 수 있는 수준이다',
        'A bit heavy. Still manageable',
        '少し重い。それでも許容できる程度',
        '有点沉，但还能接受',
        '有點沉，但還能接受',
        'Hơi nặng đầu. Nhưng vẫn chịu được',
        'Sedikit berat. Masih bisa ditoleransi'
      ),
      M(
        '어젯밤 기억이 약간 흐릿하다. 폰을 확인하게 된다',
        'Last night is a bit blurry. I end up checking my phone',
        '昨夜の記憶が少し曖昧。スマホを確認してしまう',
        '昨晚记忆有点模糊，会忍不住查手机',
        '昨晚記憶有點模糊，會忍不住查手機',
        'Ký ức đêm qua hơi mờ. Phải kiểm tra điện thoại',
        'Ingatan semalam agak kabur. Akhirnya cek HP'
      ),
      M(
        '후회가 밀려온다. 그래도 또 마실 것 같다',
        'Regret hits. But I will probably drink again',
        '後悔が押し寄せる。それでもまた飲みそう',
        '后悔涌上来，但大概还会再喝',
        '後悔湧上來，但大概還會再喝',
        'Hối hận ùa đến. Nhưng chắc vẫn sẽ uống lại',
        'Penyesalan datang. Tapi mungkin akan minum lagi'
      ),
    ]
  ),
  makeQuestion(
    11,
    M(
      '혼술을 시작하게 되는 가장 흔한 이유는?',
      'What is the most common reason I start solo drinking?',
      '一人飲みを始める最も多い理由は？',
      '开始独饮最常见的原因是？',
      '開始獨飲最常見的原因是？',
      'Lý do phổ biến nhất khiến tôi bắt đầu uống một mình là gì?',
      'Alasan paling umum saya mulai minum sendiri?'
    ),
    [
      M(
        '오늘 수고한 나를 위한 보상으로',
        'As a reward for working hard today',
        '今日頑張った自分へのご褒美として',
        '作为对今天辛苦工作的奖励',
        '作為對今天辛苦工作的獎勵',
        'Như phần thưởng cho bản thân đã cố gắng hôm nay',
        'Sebagai hadiah untuk diri sendiri yang sudah berusaha hari ini'
      ),
      M(
        '스트레스가 쌓여서. 오늘 하루 너무 힘들었다',
        'Stress has built up. Today was too hard',
        'ストレスが溜まって。今日は本当に大変だった',
        '压力堆积，今天太累了',
        '壓力堆積，今天太累了',
        'Stress tích tụ. Hôm nay quá mệt',
        'Stres menumpuk. Hari ini terlalu berat'
      ),
      M(
        '특별한 이유 없이. 그냥 마시고 싶어서',
        'No special reason. I just want a drink',
        '特別な理由はない。ただ飲みたいから',
        '没有特别理由，就是想喝',
        '沒有特別理由，就是想喝',
        'Không có lý do đặc biệt. Chỉ muốn uống thôi',
        'Tanpa alasan khusus. Hanya ingin minum'
      ),
      M(
        '좋아하는 안주가 생각나서. 안주 때문에 술을 마신다',
        'I crave my favorite snack. I drink because of the snacks',
        '好きなおつまみが思い浮かんで。おつまみのためにお酒を飲む',
        '想到喜欢的下酒菜，为了吃菜而喝酒',
        '想到喜歡的下酒菜，為了吃菜而喝酒',
        'Nghĩ đến món nhắm yêu thích. Uống vì món nhắm',
        'Muncul camilan favorit. Minum karena camilannya'
      ),
    ]
  ),
  makeQuestion(
    12,
    M(
      '나의 혼술을 한 장면으로 표현한다면?',
      'If I had to express my solo drinking in one scene?',
      '私の一人飲みを一場面で表すなら？',
      '如果用一帧画面表达我的独饮？',
      '如果用一幀畫面表達我的獨飲？',
      'Nếu diễn tả cảnh uống một mình của tôi bằng một khung hình?',
      'Jika solo drinking saya diekspresikan dalam satu adegan?'
    ),
    [
      M(
        '감성 조명 아래 술잔을 들고 혼자 건배하는 장면',
        'Raising a glass alone for a toast under mood lighting',
        '感傷的な照明の下、グラスを持って一人乾杯する場面',
        '在感性灯光下举杯独自干杯',
        '在感性燈光下舉杯獨自乾杯',
        'Giơ ly một mình dưới ánh đèn cảm xúc',
        'Mengangkat gelas sendirian di bawah lampu mood'
      ),
      M(
        '이불 속에서 맥주 마시며 넷플릭스 보는 장면',
        'Drinking beer under the blanket while watching Netflix',
        '布団の中でビールを飲みながらNetflixを見る場面',
        '在被窝里喝啤酒看 Netflix',
        '在被窩裡喝啤酒看 Netflix',
        'Uống bia trong chăn xem Netflix',
        'Minum beer di bawah selimut sambil nonton Netflix'
      ),
      M(
        '좋아하는 안주를 앞에 두고 소주잔을 채우는 장면',
        'Filling a soju glass with favorite snacks in front of me',
        '好きなおつまみを前に焼酎グラスを満たす場面',
        '面前摆着喜欢的下酒菜，倒满烧酒杯',
        '面前擺著喜歡的下酒菜，倒滿燒酒杯',
        'Đổ đầy ly soju với món nhắm yêu thích trước mặt',
        'Mengisi gelas soju dengan camilan favorit di depan'
      ),
      M(
        '음악 틀고 혼자 노래 부르며 술 마시는 장면',
        'Playing music, singing alone, and drinking',
        '音楽を流し、一人で歌いながらお酒を飲む場面',
        '放音乐，独自唱歌喝酒',
        '放音樂，獨自唱歌喝酒',
        'Bật nhạc, hát một mình và uống rượu',
        'Putar musik, bernyanyi sendiri, sambil minum'
      ),
    ]
  ),
];

export const phase3SoloDrinkingTypeResults: Phase3SoloDrinkingTypeResult[] = [
  {
    type: 'Type1',
    emoji: '🕯️',
    title: M(
      '분위기가 전부인, 감성 홈 바 혼술러',
      'The Mood Is Everything: Emotional Home Bar Solo Drinker',
      '雰囲気がすべて、感性ホームバー一人飲み',
      '氛围就是一切，感性 Home Bar 独饮者',
      '氛圍就是一切，感性 Home Bar 獨飲者',
      'Không khí là tất cả: Người uống một mình kiểu home bar cảm xúc',
      'Suasana adalah segalanya: Solo drinker home bar emosional'
    ),
    shortDescription: M(
      '"당신의 혼술에는 분위기가 반입니다. 술보다 세팅이 더 중요할 때가 있습니다."',
      '"Mood is half your solo drinking. Sometimes the setup matters more than the drink."',
      '「あなたの一人飲みは雰囲気が半分。お酒よりセッティングが大事な時もある。」',
      '「你的独饮，氛围占一半。有时布置比酒更重要。」',
      '「你的獨飲，氛圍占一半。有時佈置比酒更重要。」',
      '"Không khí chiếm một nửa buổi uống một mình của bạn. Đôi khi setup quan trọng hơn rượu."',
      '"Suasana setengah dari minum sendiri Anda. Kadang setup lebih penting dari minumannya."'
    ),
    description: M(
      '조명을 바꾸고, 음악을 틀고, 안주를 페어링하는 것이 혼술의 시작입니다. 적게 마셔도 충분히 만족하고, 혼술 자체를 하나의 취미이자 의식처럼 즐기는 타입입니다. 집이 작은 홈 바가 되는 순간을 가장 좋아합니다.',
      'Changing the lighting, playing music, and pairing snacks is how solo drinking begins. You feel satisfied even with a little, and treat solo drinking like a hobby and ritual. You love the moment your home becomes a tiny bar.',
      '照明を変え、音楽を流し、おつまみをペアリングすることが一人飲みの始まりです。少なく飲んでも十分満足し、一人飲み自体を趣味であり儀式のように楽しむタイプです。家が小さなホームバーになる瞬間が一番好きです。',
      '换灯光、放音乐、搭配下酒菜，这就是独饮的开始。喝得少也很满足，把独饮当作爱好和仪式来享受。最喜欢家变成小酒吧的那一刻。',
      '換燈光、放音樂、搭配下酒菜，這就是獨飲的開始。喝得少也很滿足，把獨飲當作愛好和儀式來享受。最喜歡家變成小酒吧的那一刻。',
      'Đổi đèn, bật nhạc, ghép món nhắm là khởi đầu của uống một mình. Uống ít vẫn thấy đủ, coi việc uống một mình như sở thích và nghi thức. Bạn thích nhất khoảnh khắc nhà biến thành quán bar mini.',
      'Ganti lampu, putar musik, dan pairing camilan adalah awal minum sendiri. Sedikit pun sudah puas, menikmati minum sendiri seperti hobi dan ritual. Paling suka saat rumah jadi home bar kecil.'
    ),
    soloDrinkingType: M(
      '감성 홈 바 혼술러 🕯️',
      'Emotional Home Bar Solo Drinker 🕯️',
      '感性ホームバー一人飲み 🕯️',
      '感性 Home Bar 独饮者 🕯️',
      '感性 Home Bar 獨飲者 🕯️',
      'Người uống một mình home bar cảm xúc 🕯️',
      'Solo drinker home bar emosional 🕯️'
    ),
    soloDrinkingKeywords: M(
      '분위기·페어링·감성·절제·취향',
      'Mood·Pairing·Emotion·Moderation·Taste',
      '雰囲気・ペアリング・感性・節制・好み',
      '氛围·配对·感性·节制·品味',
      '氛圍·配對·感性·節制·品味',
      'Không khí·Ghép đôi·Cảm xúc·Tiết chế·Gu',
      'Suasana·Pairing·Emosi·Moderasi·Selera'
    ),
    favoriteDrinks: M(
      '와인·위스키·샴페인 등 분위기 있는 술',
      'Wine, whiskey, champagne, and other moody drinks',
      'ワイン・ウイスキー・シャンパンなど雰囲気のあるお酒',
      '葡萄酒、威士忌、香槟等有氛围的酒',
      '葡萄酒、威士忌、香檳等有氛圍的酒',
      'Rượu vang, whisky, champagne và các loại có không khí',
      'Wine, whiskey, champagne, dan minuman beratmosfer'
    ),
    favoriteSnacks: M(
      '치즈·과일·크래커·샤퀴테리 등 페어링 안주',
      'Cheese, fruit, crackers, charcuterie, and other pairing snacks',
      'チーズ・フルーツ・クラッカー・シャルキュトリーなどペアリングおつまみ',
      '奶酪、水果、 crackers、冷肉拼盘等配对下酒菜',
      '起司、水果、餅乾、冷肉拼盤等配對下酒菜',
      'Phô mai, trái cây, bánh quy, charcuterie và món nhắm ghép đôi',
      'Keju, buah, kraker, charcuterie, dan camilan pairing'
    ),
    personalityTrait: M(
      '심미안이 뛰어나고 일상을 특별하게 만드는 능력이 있음. 자신을 위한 작은 사치를 즐길 줄 아는 사람',
      'Strong aesthetic sense and a gift for making everyday life feel special. Knows how to enjoy small luxuries for yourself',
      '審美眼に優れ、日常を特別にする能力がある。自分への小さな贅沢を楽しめる人',
      '审美感强，能把日常变得特别，懂得享受给自己的小奢侈',
      '審美感強，能把日常變得特別，懂得享受給自己的小奢侈',
      'Thẩm mỹ tốt, biến đời thường thành đặc biệt. Biết tận hưởng chút xa xỉ cho bản thân',
      'Selera estetika kuat, bisa membuat hari biasa terasa spesial. Tahu menikmati kemewahan kecil untuk diri sendiri'
    ),
    drinkingHabit: M(
      '취할수록 감성에 젖어 혼자 노래를 흥얼거리거나 일기를 쓰게 됨. 아침에 전날 쓴 메모가 꽤 시적인 경우가 있음',
      'The drunker you get, the more emotional you become—humming alone or writing in a journal. Notes from the night before can read quite poetic in the morning',
      '酔うほど感性に浸り、一人で歌を口ずさんだり日記を書く。朝、前日のメモがかなり詩的なことも',
      '越喝越感性，独自哼歌或写日记。早上看前晚的笔记有时还挺诗意',
      '越喝越感性，獨自哼歌或寫日記。早上看前晚的筆記有時還挺詩意',
      'Càng say càng cảm xúc, ngân nga một mình hoặc viết nhật ký. Sáng hôm sau ghi chú đêm qua đôi khi khá thơ',
      'Semakin mabuk semakin emosional, bersenandung sendiri atau menulis jurnal. Catatan semalam kadang terdengar cukup puitis pagi hari'
    ),
    drinkingTip: M(
      '좋아하는 술에 맞는 음악 플레이리스트를 미리 만들어두세요. 혼술의 질이 올라갑니다',
      'Prepare a playlist that matches your favorite drink in advance. It elevates your solo drinking',
      '好きなお酒に合うプレイリストを事前に作っておきましょう。一人飲みの質が上がります',
      '提前为喜欢的酒准备匹配的歌单，独饮品质会提升',
      '提前為喜歡的酒準備匹配的歌單，獨飲品質會提升',
      'Chuẩn bị sẵn playlist hợp với rượu yêu thích. Chất lượng uống một mình sẽ tăng',
      'Siapkan playlist yang cocok dengan minuman favorit. Kualitas minum sendiri akan naik'
    ),
    oneLineReview: M(
      '집이 바가 된다. 나만의 단골 바이기도 하다',
      'Home becomes a bar. And your own regular spot too',
      '家がバーになる。自分だけの常連バーでもある',
      '家变成酒吧，也是自己的专属常去之地',
      '家變成酒吧，也是自己的專屬常去之地',
      'Nhà biến thành quán bar. Cũng là quán ruột của riêng bạn',
      'Rumah jadi bar. Sekaligus bar langganan pribadi'
    ),
    shareSnippet: M(
      '내 혼술 유형은 감성 홈 바 혼술러 🕯️ 조명·음악·페어링 다 세팅하는 유형 맞음... 술보다 분위기 더 중요한 사람들 공감 → 너는 어떤 혼술 유형이야?',
      'My solo drinking type is Emotional Home Bar Solo Drinker 🕯️ I set lighting, music, and pairing... mood over drink—who relates? → What is your solo drinking type?',
      '私の一人飲みタイプは感性ホームバー 🕯️ 照明・音楽・ペアリング全部セッティングするタイプ…お酒より雰囲気派、共感する人 → あなたはどんな一人飲みタイプ？',
      '我的独饮类型是感性 Home Bar 独饮者 🕯️ 灯光·音乐·配对全安排…氛围比酒重要的人共鸣 → 你是什么独饮类型？',
      '我的獨飲類型是感性 Home Bar 獨飲者 🕯️ 燈光·音樂·配對全安排…氛圍比酒重要的人共鳴 → 你是什麼獨飲類型？',
      'Kiểu uống một mình của tôi là home bar cảm xúc 🕯️ Setup đèn·nhạc·ghép đôi đầy đủ… ai coi không khí quan trọng hơn rượu? → Bạn thuộc kiểu nào?',
      'Tipe minum sendiri saya Emotional Home Bar Solo Drinker 🕯️ Setup lampu·musik·pairing lengkap… yang mood lebih penting dari minuman → tipe minum sendiri kamu apa?'
    ),
  },
  {
    type: 'Type2',
    emoji: '📺',
    title: M(
      '콘텐츠가 안주인, 넷플릭스 혼술러',
      'Content Is the Snack: Netflix Solo Drinker',
      'コンテンツがおつまみ、Netflix一人飲み',
      '内容是下酒菜，Netflix 独饮者',
      '內容是下酒菜，Netflix 獨飲者',
      'Nội dung là món nhắm: Người uống một mình kiểu Netflix',
      'Konten jadi camilan: Solo drinker Netflix'
    ),
    shortDescription: M(
      '"당신의 혼술 파트너는 넷플릭스·유튜브·예능입니다. 이어폰이 필수템입니다."',
      '"Your solo drinking partners are Netflix, YouTube, and variety shows. Earphones are essential."',
      '「あなたの一人飲みパートナーはNetflix・YouTube・バラエティ。イヤホンは必須。」',
      '「你的独饮伙伴是 Netflix、YouTube 和综艺。耳机是必备。」',
      '「你的獨飲夥伴是 Netflix、YouTube 和綜藝。耳機是必備。」',
      '"Bạn cùng uống một mình của bạn là Netflix, YouTube và show giải trí. Tai nghe là bắt buộc."',
      '"Partner minum sendiri Anda adalah Netflix, YouTube, dan variety show. Earphone wajib."'
    ),
    description: M(
      '술을 따르기 전에 볼 영상을 먼저 고릅니다. 감동적인 장면에서 울고, 웃긴 장면에서 맥주를 뿜을 뻔하고, 흥미진진한 장면에서는 술 마시는 것도 잊습니다. 콘텐츠와 술이 함께할 때 혼술이 완성됩니다.',
      'You pick what to watch before pouring a drink. You cry at emotional scenes, almost spit out beer at funny ones, and forget to drink during thrilling moments. Solo drinking is complete when content and alcohol come together.',
      'お酒を注ぐ前に見る動画を先に選びます。感動シーンで泣き、笑える場面でビールを吹きそうになり、盛り上がる場面では飲むのも忘れます。コンテンツとお酒が一緒の時、一人飲みが完成します。',
      '倒酒前先选好要看的视频。感动处会哭，搞笑处差点喷啤酒，紧张处连酒都忘了喝。内容和酒一起，独饮才完整。',
      '倒酒前先選好要看的影片。感動處會哭，搞笑處差點噴啤酒，緊張處連酒都忘了喝。內容和酒一起，獨飲才完整。',
      'Chọn video trước khi rót rượu. Khóc ở cảnh cảm động, suýt phun bia ở cảnh hài, quên uống ở cảnh hấp dẫn. Uống một mình hoàn chỉnh khi nội dung và rượu đi cùng nhau.',
      'Pilih video sebelum menuang minuman. Menangis di adegan emosional, hampir menyemprot beer di adegan lucu, lupa minum saat seru. Minum sendiri lengkap saat konten dan minuman bersama.'
    ),
    soloDrinkingType: M(
      '넷플릭스 혼술러 📺',
      'Netflix Solo Drinker 📺',
      'Netflix一人飲み 📺',
      'Netflix 独饮者 📺',
      'Netflix 獨飲者 📺',
      'Người uống một mình Netflix 📺',
      'Solo drinker Netflix 📺'
    ),
    soloDrinkingKeywords: M(
      '콘텐츠·몰입·이어폰·소파·편안함',
      'Content·Immersion·Earphones·Sofa·Comfort',
      'コンテンツ・没入・イヤホン・ソファ・快適さ',
      '内容·沉浸·耳机·沙发·舒适',
      '內容·沉浸·耳機·沙發·舒適',
      'Nội dung·Say mê·Tai nghe·Sofa·Thoải mái',
      'Konten·Imersi·Earphone·Sofa·Nyaman'
    ),
    favoriteDrinks: M(
      '맥주·하이볼·막걸리 등 편하게 마실 수 있는 술',
      'Beer, highball, makgeolli, and other easy drinks',
      'ビール・ハイボール・マッコリなど気軽に飲めるお酒',
      '啤酒、嗨棒、马格利等轻松好喝的酒',
      '啤酒、嗨棒、馬格利等輕鬆好喝的酒',
      'Bia, highball, makgeolli và đồ uống dễ uống',
      'Beer, highball, makgeolli, dan minuman santai'
    ),
    favoriteSnacks: M(
      '팝콘·과자·치킨·피자 등 먹기 편한 안주',
      'Popcorn, snacks, chicken, pizza, and other easy finger food',
      'ポップコーン・お菓子・チキン・ピザなど食べやすいおつまみ',
      '爆米花、零食、炸鸡、披萨等方便吃的下酒菜',
      '爆米花、零食、炸雞、披薩等方便吃的下酒菜',
      'Bỏng ngô, snack, gà rán, pizza và món nhắm dễ ăn',
      'Popcorn, camilan, ayam goreng, pizza, dan camilan praktis'
    ),
    personalityTrait: M(
      '콘텐츠 소비를 즐기는 미디어 친화적 성향. 혼자이지만 콘텐츠를 통해 풍부한 감정을 경험하는 사람',
      'Media-friendly and loves consuming content. Alone but experiences rich emotions through what you watch',
      'コンテンツ消費を楽しむメディア親和型。一人でもコンテンツを通じて豊かな感情を味わう人',
      '爱消费内容，媒体亲和型。虽独处，却能通过内容体验丰富情感',
      '愛消費內容，媒體親和型。雖獨處，卻能透過內容體驗豐富情感',
      'Thân thiện với media, thích tiêu thụ nội dung. Ở một mình nhưng trải nghiệm cảm xúc phong phú qua nội dung',
      'Media-friendly, suka konsumsi konten. Sendirian tapi merasakan emosi kaya lewat konten'
    ),
    drinkingHabit: M(
      '취할수록 화면에 몰입도가 올라감. 드라마 결말이 마음에 안 들면 혼자 격분하거나, 너무 슬프면 혼자 엉엉 울기도 함. 다음 날 아침 "내가 왜 울었지" 함',
      'The drunker you get, the more immersed you become. If you hate the ending, you rage alone; if it is too sad, you sob alone. Next morning: "Why did I cry?"',
      '酔うほど画面への没入度が上がる。ドラマの結末が気に入らなければ一人で激怒したり、悲しすぎれば一人で号泣したりする。翌朝「なんで泣いたんだろう」',
      '越喝越沉浸屏幕。结局不满意会独自发火，太悲伤会独自大哭。第二天早上会想「我为啥哭了」',
      '越喝越沉浸螢幕。結局不滿意會獨自發火，太悲傷會獨自大哭。第二天早上會想「我為啥哭了」',
      'Càng say càng chìm vào màn hình. Kết phim không ưng thì tức một mình, quá buồn thì khóc một mình. Sáng hôm sau: "Sao mình khóc nhỉ?"',
      'Semakin mabuk semakin fokus ke layar. Ending drama tidak suka langsung marah sendiri, terlalu sedih menangis sendiri. Pagi hari: "Kenapa aku nangis?"'
    ),
    drinkingTip: M(
      '혼술하며 볼 콘텐츠 위시리스트를 미리 만들어두세요. 뭐 볼지 고르는 데 소주 한 병이 비워지는 걸 방지할 수 있습니다',
      'Make a watchlist for solo drinking in advance. It prevents finishing a bottle of soju while choosing what to watch',
      '一人飲み中に見るコンテンツのウィッシュリストを事前に作りましょう。何を見るか選ぶ間に焼酎1本空になるのを防げます',
      '提前做好独饮观看清单，避免选片时就把一瓶烧酒喝光',
      '提前做好獨飲觀看清單，避免選片時就把一瓶燒酒喝光',
      'Lập danh sách xem trước khi uống một mình. Tránh uống hết chai soju trong lúc chọn xem gì',
      'Buat wishlist konten untuk minum sendiri. Cegah habis satu botol soju sambil memilih mau nonton apa'
    ),
    oneLineReview: M(
      '오늘 볼 것을 정하는 순간부터 혼술이 시작된다',
      'Solo drinking starts the moment you decide what to watch today',
      '今日見るものを決めた瞬間から一人飲みが始まる',
      '决定今天看什么的瞬间，独饮就开始了',
      '決定今天看什麼的瞬間，獨飲就開始了',
      'Uống một mình bắt đầu từ lúc quyết định hôm nay xem gì',
      'Minum sendiri dimulai saat memutuskan mau nonton apa hari ini'
    ),
    shareSnippet: M(
      '내 혼술 유형은 넷플릭스 혼술러 📺 뭐 볼지 고르다 소주 한 병 비운 경험자 손 ✋ 이어폰이 혼술 필수템인 유형 → 너는 어떤 혼술 유형이야?',
      'My solo drinking type is Netflix Solo Drinker 📺 Raised hand if you finished a bottle of soju while choosing what to watch ✋ Earphones are essential → What is your solo drinking type?',
      '私の一人飲みタイプはNetflix 📺 何を見るか選んでいる間に焼酎1本空にした人✋ イヤホン必須タイプ → あなたはどんな一人飲みタイプ？',
      '我的独饮类型是 Netflix 独饮者 📺 选片时喝光一瓶烧酒的人举手 ✋ 耳机是独饮必备 → 你是什么独饮类型？',
      '我的獨飲類型是 Netflix 獨飲者 📺 選片時喝光一瓶燒酒的人舉手 ✋ 耳機是獨飲必備 → 你是什麼獨飲類型？',
      'Kiểu uống một mình của tôi là Netflix 📺 Ai từng uống hết chai soju lúc chọn phim giơ tay ✋ Tai nghe là bắt buộc → Bạn thuộc kiểu nào?',
      'Tipe minum sendiri saya Netflix Solo Drinker 📺 Angkat tangan yang pernah habis 1 botol soju sambil milih nonton ✋ Earphone wajib → tipe minum sendiri kamu apa?'
    ),
  },
  {
    type: 'Type3',
    emoji: '🍖',
    title: M(
      '안주가 주인공인, 미식 탐구 혼술러',
      'Snacks Are the Star: Gourmet Explorer Solo Drinker',
      'おつまみが主役、美食探求一人飲み',
      '下酒菜是主角，美食探索独饮者',
      '下酒菜是主角，美食探索獨飲者',
      'Món nhắm là nhân vật chính: Người uống một mình khám phá ẩm thực',
      'Camilan jadi bintang: Solo drinker penjelajah kuliner'
    ),
    shortDescription: M(
      '"당신에게 혼술의 진짜 주인공은 안주입니다. 술은 안주를 먹기 위한 수단입니다."',
      '"The real star of your solo drinking is the snacks. Alcohol is just a means to eat them."',
      '「あなたの一人飲みの本当の主役はおつまみ。お酒は食べるための手段。」',
      '「你独饮的真正主角是下酒菜，酒只是为了吃菜。」',
      '「你獨飲的真正主角是下酒菜，酒只是為了吃菜。」',
      '"Nhân vật chính thật sự của uống một mình là món nhắm. Rượu chỉ là cách để ăn chúng."',
      '"Bintang sebenarnya minum sendiri Anda adalah camilan. Minuman hanya cara untuk memakannya."'
    ),
    description: M(
      '좋아하는 안주가 생각나서 술을 마시는 경우가 있습니다. 안주를 정성스럽게 준비하거나 제대로 시키고, 술과의 궁합을 고민하는 것 자체가 즐거움입니다. 안주 없이 술만 마시는 건 생각하기 어렵습니다.',
      'Sometimes you drink because you crave a favorite snack. Carefully preparing or properly ordering snacks—and thinking about pairings—is the fun part. Drinking without snacks is hard to imagine.',
      '好きなおつまみが思い浮かんでお酒を飲むことがあります。おつまみを丁寧に用意したりしっかり注文したり、お酒との相性を考えること自体が楽しみです。おつまみなしでお酒だけは考えにくい。',
      '有时因为想到喜欢的下酒菜而喝酒。精心准备或认真点单，思考与酒的搭配本身就是乐趣。很难想像没有下酒菜只喝酒。',
      '有時因為想到喜歡的下酒菜而喝酒。精心準備或認真點單，思考與酒的搭配本身就是樂趣。很難想像沒有下酒菜只喝酒。',
      'Đôi khi uống vì nghĩ đến món nhắm yêu thích. Chuẩn bị kỹ hoặc gọi món đàng hoàng, suy nghĩ ghép với rượu là niềm vui. Khó tưởng tượng chỉ uống không có món nhắm.',
      'Kadang minum karena kepikiran camilan favorit. Menyiapkan atau memesan camilan dengan serius, memikirkan pairing dengan minuman, itu yang seru. Sulit bayangkan minum tanpa camilan.'
    ),
    soloDrinkingType: M(
      '미식 탐구 혼술러 🍖',
      'Gourmet Explorer Solo Drinker 🍖',
      '美食探求一人飲み 🍖',
      '美食探索独饮者 🍖',
      '美食探索獨飲者 🍖',
      'Người uống một mình khám phá ẩm thực 🍖',
      'Solo drinker penjelajah kuliner 🍖'
    ),
    soloDrinkingKeywords: M(
      '안주·미식·페어링·탐구·포만감',
      'Snacks·Gourmet·Pairing·Exploration·Fullness',
      'おつまみ・美食・ペアリング・探求・満足感',
      '下酒菜·美食·配对·探索·满足感',
      '下酒菜·美食·配對·探索·滿足感',
      'Món nhắm·Ẩm thực·Ghép đôi·Khám phá·No bụng',
      'Camilan·Kuliner·Pairing·Eksplorasi·Kenyang'
    ),
    favoriteDrinks: M(
      '소주·막걸리·맥주 등 안주와 잘 어울리는 술',
      'Soju, makgeolli, beer, and other drinks that go well with snacks',
      '焼酎・マッコリ・ビールなどおつまみと相性のいいお酒',
      '烧酒、马格利、啤酒等与下酒菜很搭的酒',
      '燒酒、馬格利、啤酒等與下酒菜很搭的酒',
      'Soju, makgeolli, bia và rượu hợp món nhắm',
      'Soju, makgeolli, beer, dan minuman yang cocok dengan camilan'
    ),
    favoriteSnacks: M(
      '족발·삼겹살·골뱅이·두부김치 등 제대로 된 메인 안주',
      'Jokbal, samgyeopsal, golbaengi, dubu kimchi, and other proper main snacks',
      '豚足・サムギョプサル・ゴルベンイ・豆腐キムチなど本格的なメインおつまみ',
      '猪蹄、五花肉、螺肉、豆腐泡菜等正经主菜型下酒菜',
      '豬腳、五花肉、螺肉、豆腐泡菜等正經主菜型下酒菜',
      'Chân giò, ba chỉ, ốc, đậu phụ kimchi và món nhắm chính đàng hoàng',
      'Jokbal, samgyeopsal, golbaengi, dubu kimchi, dan camilan utama serius'
    ),
    personalityTrait: M(
      '먹는 것에 진지하고, 새로운 조합을 시도하는 것을 좋아함. 안주에 대한 높은 기준이 있는 사람',
      'Serious about food and loves trying new combinations. Has high standards for snacks',
      '食べることに真剣で、新しい組み合わせを試すのが好き。おつまみへの基準が高い人',
      '对吃很认真，喜欢尝试新组合，对下酒菜标准很高',
      '對吃很認真，喜歡嘗試新組合，對下酒菜標準很高',
      'Nghiêm túc với ăn uống, thích thử combo mới. Tiêu chuẩn món nhắm cao',
      'Serius soal makan, suka coba kombinasi baru. Standar camilan tinggi'
    ),
    drinkingHabit: M(
      '취할수록 안주가 더 먹고 싶어짐. 이미 안주가 충분한데 배달 앱을 또 열게 됨. 혼술보다 혼밥에 가까워지는 방향으로 진행됨',
      'The drunker you get, the more you want snacks. Even with enough food, you open delivery apps again. Solo drinking drifts toward solo dining',
      '酔うほどおつまみがもっと食べたくなる。すでに十分なのにデリバリーアプリをまた開く。一人飲みより一人食に近づく',
      '越喝越想吃下酒菜。已经够了还会再开外卖 App，独饮逐渐变成独食',
      '越喝越想吃下酒菜。已經夠了還會再開外送 App，獨飲逐漸變成獨食',
      'Càng say càng muốn ăn thêm món nhắm. Đủ rồi vẫn mở app giao đồ ăn. Uống một mình dần thành ăn một mình',
      'Semakin mabuk semakin ingin camilan. Sudah cukup tetap buka app delivery. Minum sendiri mendekati makan sendiri'
    ),
    drinkingTip: M(
      '나만의 술·안주 페어링 노트를 만들어보세요. 어떤 조합이 제일 맛있었는지 기록하면 다음 혼술이 더 맛있어집니다',
      'Try making your own drink-and-snack pairing notes. Recording the best combos makes your next solo drink even better',
      '自分だけのお酒・おつまみペアリングノートを作ってみましょう。一番おいしかった組み合わせを記録すると次の一人飲みがもっと美味しくなります',
      '试试做专属酒·菜配对笔记，记录最好吃的组合，下次独饮会更美味',
      '試試做專屬酒·菜配對筆記，記錄最好吃的組合，下次獨飲會更美味',
      'Thử ghi chú ghép rượu·món nhắm riêng. Ghi combo ngon nhất sẽ làm lần uống một mình sau ngon hơn',
      'Coba buat catatan pairing minuman·camilan. Catat combo terenak, minum sendiri berikutnya lebih nikmat'
    ),
    oneLineReview: M(
      '안주가 마음에 들면 술이 술술 넘어간다',
      'When the snacks hit right, the drinks go down easy',
      'おつまみが気に入ればお酒がスイスイ進む',
      '下酒菜对了，酒就顺顺下肚',
      '下酒菜對了，酒就順順下肚',
      'Món nhắm ưng ý thì rượu trôi xuống dễ dàng',
      'Kalau camilan pas, minumannya lancar'
    ),
    shareSnippet: M(
      '내 혼술 유형은 미식 탐구 혼술러 🍖 안주 때문에 술 마시는 유형 ㅋㅋ 이미 안주 가득한데 배달 앱 다시 여는 거 맞음 → 너는 어떤 혼술 유형이야?',
      'My solo drinking type is Gourmet Explorer Solo Drinker 🍖 I drink for the snacks lol Already full but reopening delivery apps—who relates? → What is your solo drinking type?',
      '私の一人飲みタイプは美食探求 🍖 おつまみのために飲むタイプｗ もう十分なのにデリバリーアプリまた開く人 → あなたはどんな一人飲みタイプ？',
      '我的独饮类型是美食探索独饮者 🍖 为了下酒菜而喝酒型 ㅋㅋ 菜已经够还再开外卖 App 的对吧 → 你是什么独饮类型？',
      '我的獨飲類型是美食探索獨飲者 🍖 為了下酒菜而喝酒型 ㅋㅋ 菜已經夠還再開外送 App 的對吧 → 你是什麼獨飲類型？',
      'Kiểu uống một mình của tôi là khám phá ẩm thực 🍖 Uống vì món nhắm ㅋㅋ Đủ rồi vẫn mở app giao đồ ăn đúng không? → Bạn thuộc kiểu nào?',
      'Tipe minum sendiri saya penjelajah kuliner 🍖 Minum karena camilan ㅋㅋ Camilan sudah penuh tapi buka app delivery lagi → tipe minum sendiri kamu apa?'
    ),
  },
  {
    type: 'Type4',
    emoji: '💨',
    title: M(
      '하루를 털어내는, 스트레스 해소 혼술러',
      'Shaking Off the Day: Stress-Relief Solo Drinker',
      '一日を振り払う、ストレス解消一人飲み',
      '卸下一天，解压独饮者',
      '卸下一天，解壓獨飲者',
      'Gác lại một ngày: Người uống một mình giải stress',
      'Melepas hari: Solo drinker pelepas stres'
    ),
    shortDescription: M(
      '"당신에게 혼술은 오늘 하루의 마침표입니다. 한 잔 하고 나면 내일 다시 시작할 수 있습니다."',
      '"Solo drinking is the period at the end of your day. One glass and you can start again tomorrow."',
      '「あなたにとって一人飲みは今日一日の終止符。一杯飲めば明日また始められる。」',
      '「对你而言，独饮是今天的句号。喝一杯，明天就能重新开始。」',
      '「對你而言，獨飲是今天的句號。喝一杯，明天就能重新開始。」',
      '"Uống một mình là dấu chấm hết cho ngày hôm nay. Một ly rồi mai lại bắt đầu được."',
      '"Minum sendiri adalah titik akhir hari ini. Satu gelas lalu besok bisa mulai lagi."'
    ),
    description: M(
      '특별한 이유 없이도 오늘 하루가 힘들었다는 이유로 혼술을 시작합니다. 마시면서 오늘 있었던 일들을 혼자 복기하고, 취기가 오르면 생각이 단순해지면서 풀리는 느낌이 납니다. 혼술이 하루의 스트레스를 해소하는 루틴이 된 타입입니다.',
      'You start solo drinking even without a special reason—just because today was hard. You replay the day while drinking, and as tipsiness sets in, thoughts simplify and things feel lighter. Solo drinking becomes your stress-relief routine.',
      '特別な理由がなくても、今日一日が大変だったという理由で一人飲みを始めます。飲みながら今日あったことを一人で振り返り、酔いが回ると思考が単純になってスッと解ける感じがします。一人飲みが一日のストレス解消ルーティンになったタイプです。',
      '即使没有特别理由，也会因为今天太累而开始独饮。边喝边独自复盘今天的事，微醺后思绪变简单，感觉松开了。独饮成了每日解压 routine。',
      '即使沒有特別理由，也會因為今天太累而開始獨飲。邊喝邊獨自複盤今天的事，微醺後思緒變簡單，感覺鬆開了。獨飲成了每日解壓 routine。',
      'Dù không có lý do đặc biệt, vẫn uống một mình vì hôm nay quá mệt. Uống rồi tự ôn lại chuyện trong ngày, say nhẹ thì suy nghĩ đơn giản và thấy nhẹ người. Uống một mình thành routine giải stress.',
      'Tanpa alasan khusus pun, minum sendiri karena hari ini berat. Sambil minum mengingat ulang hari ini, saat tipsy pikiran jadi sederhana dan terasa lega. Minum sendiri jadi rutinitas pelepas stres.'
    ),
    soloDrinkingType: M(
      '스트레스 해소 혼술러 💨',
      'Stress-Relief Solo Drinker 💨',
      'ストレス解消一人飲み 💨',
      '解压独饮者 💨',
      '解壓獨飲者 💨',
      'Người uống một mình giải stress 💨',
      'Solo drinker pelepas stres 💨'
    ),
    soloDrinkingKeywords: M(
      '해소·리셋·루틴·마침표·회복',
      'Relief·Reset·Routine·Period·Recovery',
      '解消・リセット・ルーティン・終止符・回復',
      '解压·重置·routine·句号·恢复',
      '解壓·重置·routine·句號·恢復',
      'Giải tỏa·Reset·Routine·Dấu chấm·Phục hồi',
      'Lega·Reset·Rutinitas·Titik akhir·Pemulihan'
    ),
    favoriteDrinks: M(
      '소주·맥주·막걸리 등 빠르게 취기가 오는 술',
      'Soju, beer, makgeolli, and other drinks that get you tipsy fast',
      '焼酎・ビール・マッコリなどすぐ酔いが回るお酒',
      '烧酒、啤酒、马格利等很快上头的酒',
      '燒酒、啤酒、馬格利等很快上頭的酒',
      'Soju, bia, makgeolli và rượu say nhanh',
      'Soju, beer, makgeolli, dan minuman yang cepat tipsy'
    ),
    favoriteSnacks: M(
      '그날 가장 먹고 싶은 것. 기분에 따라 다름',
      'Whatever you crave most that day. Depends on your mood',
      'その日いちばん食べたいもの。気分次第',
      '当天最想吃的，看心情',
      '當天最想吃的，看心情',
      'Món thèm nhất hôm đó. Tùy tâm trạng',
      'Yang paling ingin dimakan hari itu. Tergantung mood'
    ),
    personalityTrait: M(
      '스트레스를 내면에 쌓아두는 편이지만 혼술로 혼자 정리하는 자기 조절 능력이 있음. 다음 날 개운하게 다시 시작하는 회복력이 강한 사람',
      'Tends to hold stress inside but has self-regulation through solo drinking. Strong resilience to start fresh the next day',
      'ストレスを内に溜めがちだが、一人飲みで自分整理する自己調整力がある。翌日すっきり再スタートする回復力が強い人',
      '习惯把压力憋在心里，但会用独饮自我整理。第二天能清爽重启，恢复力强',
      '習慣把壓力憋在心裡，但會用獨飲自我整理。第二天能清爽重啟，恢復力強',
      'Hay giữ stress bên trong nhưng tự điều chỉnh bằng uống một mình. Phục hồi mạnh, sáng hôm sau bắt đầu lại sảng khoái',
      'Cenderung menahan stres tapi punya self-regulation lewat minum sendiri. Resiliensi kuat, besok bisa mulai segar lagi'
    ),
    drinkingHabit: M(
      '취할수록 오늘 힘들었던 일을 혼자 다시 생각하게 됨. 또는 아예 반대로 모든 생각이 사라지고 잠들어버림. 연락하면 안 될 사람에게 "야 나 힘들어" 하고 연락하는 경우도 있음',
      'The drunker you get, the more you replay what was hard today—or the opposite: all thoughts vanish and you fall asleep. Sometimes you text someone you should not: "Hey, I am struggling"',
      '酔うほど今日大変だったことを一人で思い返す。または逆にすべての思考が消えて寝てしまう。「連絡しちゃダメな人」に「や、きつい」と連絡することも',
      '越喝越独自回想今天难事，或相反一切念头消失直接睡着。有时也会联系不该联系的人说「我好累」',
      '越喝越獨自回想今天難事，或相反一切念頭消失直接睡著。有時也會聯絡不該聯絡的人說「我好累」',
      'Càng say càng tự nghĩ lại chuyện khó hôm nay, hoặc ngược lại hết suy nghĩ và ngủ luôn. Đôi khi nhắn người không nên: "Này, mình mệt quá"',
      'Semakin mabuk semakin mengingat hal berat hari ini, atau sebaliknya pikiran hilang dan langsung tidur. Kadang hubungi orang yang seharusnya tidak: "Hei, aku capek"'
    ),
    drinkingTip: M(
      '혼술 전 오늘의 감정을 딱 세 줄로 적어보세요. 글로 쓰면 뇌가 그 일을 정리했다고 인식해서 술 없이도 해소가 됩니다',
      'Before solo drinking, write today\'s emotions in exactly three lines. Writing helps your brain feel it is processed, relieving stress even without alcohol',
      '一人飲み前に今日の感情を3行だけ書いてみましょう。書くと脳が整理したと認識し、お酒なしでも解消されます',
      '独饮前把今天的情绪写成三行。写下来大脑会觉得已整理，不喝酒也能解压',
      '獨飲前把今天的情緒寫成三行。寫下來大腦會覺得已整理，不喝酒也能解壓',
      'Trước khi uống một mình, viết cảm xúc hôm nay đúng 3 dòng. Viết ra não sẽ coi là đã xử lý, giải tỏa cả khi không uống',
      'Sebelum minum sendiri, tulis emosi hari ini tepat 3 baris. Menulis membuat otak merasa sudah diproses, lega tanpa alkohol'
    ),
    oneLineReview: M(
      '오늘 수고했어. 한 잔 하고 내일 다시 가자',
      'You worked hard today. One drink, then tomorrow we go again',
      '今日お疲れさま。一杯飲んで明日また行こう',
      '今天辛苦了，喝一杯，明天再继续',
      '今天辛苦了，喝一杯，明天再繼續',
      'Hôm nay vất vả rồi. Một ly rồi mai tiếp tục',
      'Hari ini kerja keras. Satu gelas, besok lanjut lagi'
    ),
    shareSnippet: M(
      '내 혼술 유형은 스트레스 해소 혼술러 💨 힘든 날 혼술이 마침표인 유형... 취해서 연락하면 안 될 사람에게 연락한 경험자 공감 → 너는 어떤 혼술 유형이야?',
      'My solo drinking type is Stress-Relief Solo Drinker 💨 Solo drinking is the period on hard days... who has drunk-texted someone they should not? → What is your solo drinking type?',
      '私の一人飲みタイプはストレス解消 💨 つらい日の終止符タイプ…酔って連絡しちゃダメな人に連絡した人、共感 → あなたはどんな一人飲みタイプ？',
      '我的独饮类型是解压独饮者 💨 累的日子靠独饮画句号…喝醉联系不该联系的人，共鸣 → 你是什么独饮类型？',
      '我的獨飲類型是解壓獨飲者 💨 累的日子靠獨飲畫句號…喝醉聯絡不該聯絡的人，共鳴 → 你是什麼獨飲類型？',
      'Kiểu uống một mình của tôi là giải stress 💨 Ngày khó uống một mình là dấu chấm… ai từng say mà nhắn người không nên? → Bạn thuộc kiểu nào?',
      'Tipe minum sendiri saya pelepas stres 💨 Hari berat minum sendiri jadi titik akhir… pernah mabuk hubungi orang yang seharusnya tidak? → tipe minum sendiri kamu apa?'
    ),
  },
  {
    type: 'Type5',
    emoji: '🌙',
    title: M(
      '생각이 깊어지는, 철학적 사색 혼술러',
      'Thoughts Go Deep: Philosophical Reflective Solo Drinker',
      '思考が深まる、哲学的思索一人飲み',
      '思绪渐深，哲学沉思独饮者',
      '思緒漸深，哲學沉思獨飲者',
      'Suy nghĩ sâu dần: Người uống một mình trầm tư triết học',
      'Pikiran makin dalam: Solo drinker reflektif filosofis'
    ),
    shortDescription: M(
      '"당신의 혼술은 시간이 지날수록 혼자만의 철학 강의가 됩니다."',
      '"Your solo drinking slowly turns into a private philosophy lecture."',
      '「あなたの一人飲みは時間が経つほど、自分だけの哲学講義になる。」',
      '「你的独饮，越久越像一场只给自己的哲学讲座。」',
      '「你的獨飲，越久越像一場只給自己的哲學講座。」',
      '"Uống một mình của bạn càng lâu càng thành bài giảng triết học riêng."',
      '"Minum sendiri Anda lama-lama jadi kuliah filsafat pribadi."'
    ),
    description: M(
      '음악을 들으며 창밖을 바라보거나, 아무것도 없이 그냥 마시면서 생각에 잠기는 타입입니다. 취기가 오를수록 평소엔 떠올리지 못했던 깊은 생각들이 올라오고, 혼자 대화를 나누거나 노트에 뭔가를 적기도 합니다.',
      'You listen to music, gaze out the window, or simply drink and sink into thought. As tipsiness rises, deep thoughts you rarely have surface, and you may talk to yourself or jot notes.',
      '音楽を聴きながら窓の外を見たり、何もなくただ飲みながら考えにふけるタイプです。酔いが回るほど普段は思い浮かばない深い思考が湧き、一人で会話したりノートに書いたりします。',
      '听音乐看窗外，或什么都不做只是喝并沉思。越微醺越浮现平时想不到的深层想法，会自言自语或写笔记。',
      '聽音樂看窗外，或什麼都不做只是喝並沉思。越微醺越浮現平時想不到的深層想法，會自言自語或寫筆記。',
      'Nghe nhạc nhìn cửa sổ, hoặc chỉ uống và chìm vào suy nghĩ. Càng say nhẹ càng nảy ra suy nghĩ sâu hiếm khi có, tự nói chuyện hoặc ghi chú.',
      'Dengarkan musik, lihat jendela, atau hanya minum sambil tenggelam pikiran. Semakin tipsy, pikiran dalam yang jarang muncul naik, bicara sendiri atau tulis catatan.'
    ),
    soloDrinkingType: M(
      '철학적 사색 혼술러 🌙',
      'Philosophical Reflective Solo Drinker 🌙',
      '哲学的思索一人飲み 🌙',
      '哲学沉思独饮者 🌙',
      '哲學沉思獨飲者 🌙',
      'Người uống một mình trầm tư triết học 🌙',
      'Solo drinker reflektif filosofis 🌙'
    ),
    soloDrinkingKeywords: M(
      '사색·깊이·감성·고독·내면',
      'Reflection·Depth·Emotion·Solitude·Inner self',
      '思索・深さ・感性・孤独・内面',
      '沉思·深度·感性·孤独·内心',
      '沉思·深度·感性·孤獨·內心',
      'Trầm tư·Chiều sâu·Cảm xúc·Cô đơn·Nội tâm',
      'Refleksi·Kedalaman·Emosi·Kesendirian·Batin'
    ),
    favoriteDrinks: M(
      '위스키·와인·막걸리 등 천천히 마실 수 있는 술',
      'Whiskey, wine, makgeolli, and other drinks to sip slowly',
      'ウイスキー・ワイン・マッコリなどゆっくり飲めるお酒',
      '威士忌、葡萄酒、马格利等可以慢慢喝的酒',
      '威士忌、葡萄酒、馬格利等可以慢慢喝的酒',
      'Whisky, rượu vang, makgeolli và rượu uống chậm',
      'Whiskey, wine, makgeolli, dan minuman untuk diminum pelan'
    ),
    favoriteSnacks: M(
      '견과류·과일 등 먹으면서 생각을 방해하지 않는 간단한 안주',
      'Nuts, fruit, and other simple snacks that do not interrupt your thoughts',
      'ナッツ・フルーツなど食べながら思考を妨げないシンプルなおつまみ',
      '坚果、水果等不打扰思考的简单下酒菜',
      '堅果、水果等不打擾思考的簡單下酒菜',
      'Hạt, trái cây và món nhắm đơn giản không làm gián đoạn suy nghĩ',
      'Kacang, buah, dan camilan sederhana yang tidak mengganggu pikiran'
    ),
    personalityTrait: M(
      '내면이 깊고 자기 성찰을 즐기는 사람. 감수성이 풍부하고 혼자만의 시간에서 진짜 에너지를 얻는 타입',
      'Deep inner world and enjoys self-reflection. Sensitive and recharges in alone time',
      '内面が深く自己省察を楽しむ人。感受性が豊かで、一人の時間で本当のエネルギーを得るタイプ',
      '内心深，享受自我反省。感受力强，在独处中获得真正能量',
      '內心深，享受自我反省。感受力強，在獨處中獲得真正能量',
      'Nội tâm sâu, thích tự soi chiếu. Nhạy cảm, nạp năng lượng thật khi ở một mình',
      'Batin dalam, suka refleksi diri. Sensitif, dapat energi sejati saat sendiri'
    ),
    drinkingHabit: M(
      '취할수록 감성적인 글을 쓰거나 오래전 지인에게 뜬금없는 안부 문자를 보냄. 다음 날 아침 어젯밤에 적은 메모나 보낸 메시지를 보고 "이게 뭐야" 하는 경우가 많음',
      'The drunker you get, the more you write emotional texts or send random check-ins to old acquaintances. Next morning you look at last night\'s notes or messages and think, "What is this?"',
      '酔うほど感傷的な文章を書いたり、久しぶりの知人に唐突な挨拶メッセージを送る。翌朝昨夜のメモや送信メッセージを見て「これ何？」となることが多い',
      '越喝越写感性文字，或给很久没联系的人发突兀问候。第二天早上看昨晚笔记或消息常想「这啥啊」',
      '越喝越寫感性文字，或給很久沒聯絡的人發突兀問候。第二天早上看昨晚筆記或訊息常想「這啥啊」',
      'Càng say càng viết văn cảm xúc hoặc nhắn hỏi thăm bất chợt người quen cũ. Sáng hôm sau xem ghi chú hoặc tin nhắn đêm qua hay nghĩ "Cái gì đây?"',
      'Semakin mabuk semakin menulis teks emosional atau kirim salam random ke kenalan lama. Pagi hari lihat catatan atau pesan semalam sering bilang "Ini apa?"'
    ),
    drinkingTip: M(
      '혼술 중 좋은 생각이 났을 때 메모해두세요. 다음 날 읽으면 의외로 괜찮은 인사이트가 있을 수도 있습니다. 아닐 수도 있지만',
      'When a good thought hits during solo drinking, jot it down. You might find a surprisingly decent insight tomorrow—or maybe not',
      '一人飲み中にいい考えが浮かんだらメモしておきましょう。翌日読むと意外といい洞察があるかも。ないかもしれませんが',
      '独饮时有好想法就记下来。第二天读也许有意外的洞察，也可能没有',
      '獨飲時有好想法就記下來。第二天讀也許有意外的洞察，也可能沒有',
      'Khi uống một mình có ý hay thì ghi lại. Mai đọc có thể có insight khá ổn. Cũng có thể không',
      'Saat minum sendiri dapat ide bagus, catat. Besok dibaca mungkin ada insight lumayan. Atau mungkin tidak'
    ),
    oneLineReview: M(
      '술 한 잔이 생각의 문을 연다. 문이 너무 많이 열리는 게 문제지만',
      'One drink opens the door to thought. The problem is too many doors open',
      'お酒一杯が思考の扉を開く。扉が開きすぎるのが問題だが',
      '一杯酒打开思绪之门，问题是门开太多了',
      '一杯酒打開思緒之門，問題是門開太多了',
      'Một ly mở cánh cửa suy nghĩ. Vấn đề là mở quá nhiều cửa',
      'Satu gelas membuka pintu pikiran. Masalahnya terlalu banyak pintu terbuka'
    ),
    shareSnippet: M(
      '내 혼술 유형은 철학적 사색 혼술러 🌙 취하면 생각이 깊어지는 유형... 다음 날 아침 어젯밤 메모 보고 당황한 경험자 손 ✋ → 너는 어떤 혼술 유형이야?',
      'My solo drinking type is Philosophical Reflective Solo Drinker 🌙 Thoughts get deep when drunk... raised hand if you panicked reading last night\'s notes ✋ → What is your solo drinking type?',
      '私の一人飲みタイプは哲学的思索 🌙 酔うと考えが深くなるタイプ…翌朝昨夜のメモ見て慌てた人✋ → あなたはどんな一人飲みタイプ？',
      '我的独饮类型是哲学沉思独饮者 🌙 喝醉思绪变深型…第二天早上看昨晚笔记慌了的举手 ✋ → 你是什么独饮类型？',
      '我的獨飲類型是哲學沉思獨飲者 🌙 喝醉思緒變深型…第二天早上看昨晚筆記慌了的舉手 ✋ → 你是什麼獨飲類型？',
      'Kiểu uống một mình của tôi là trầm tư triết học 🌙 Say thì suy nghĩ sâu… ai từng hoảng khi đọc ghi chú đêm qua sáng hôm sau ✋ → Bạn thuộc kiểu nào?',
      'Tipe minum sendiri saya reflektif filosofis 🌙 Mabuk pikiran jadi dalam… angkat tangan yang panik baca catatan semalam pagi hari ✋ → tipe minum sendiri kamu apa?'
    ),
  },
  {
    type: 'Type6',
    emoji: '🎉',
    title: M(
      '혼자여도 신나는, 셀프 파티 혼술러',
      'Party Vibes Even Alone: Self-Party Solo Drinker',
      '一人でも盛り上がる、セルフパーティー一人飲み',
      '一个人也很嗨，自我派对独饮者',
      '一個人也很嗨，自我派對獨飲者',
      'Một mình vẫn cuồng nhiệt: Người uống một mình kiểu self-party',
      'Sendirian tetap seru: Solo drinker self-party'
    ),
    shortDescription: M(
      '"당신은 혼술인데 파티 분위기입니다. 음악을 크게 틀고 혼자 춤을 추는 것도 자연스럽습니다."',
      '"Your solo drinking feels like a party. Playing music loud and dancing alone is totally natural."',
      '「あなたの一人飲みはパーティー気分。音楽を大音量で流して一人で踊るのも自然。」',
      '「你的独饮是派对氛围，大声放音乐独自跳舞也很自然。」',
      '「你的獨飲是派對氛圍，大聲放音樂獨自跳舞也很自然。」',
      '"Uống một mình của bạn như party. Bật nhạc to và nhảy một mình cũng tự nhiên."',
      '"Minum sendiri Anda seperti pesta. Putar musik keras dan dance sendiri pun natural."'
    ),
    description: M(
      '음악을 크게 틀고, 좋아하는 노래가 나오면 따라 부르고, 술잔을 들고 혼자 건배합니다. 취할수록 더 신나고, 혼자인데 가장 에너지 넘치는 혼술을 즐기는 타입입니다. 혼술이 끝나면 주변이 꽤 달라져 있는 경우가 많습니다.',
      'You play music loud, sing along to favorites, and toast alone with a glass. The drunker you get, the more fun it is—the most energetic solo drinking even though you are alone. Afterward, your surroundings often look quite different.',
      '音楽を大音量で流し、好きな曲が出たら一緒に歌い、グラスを持って一人乾杯します。酔うほど盛り上がり、一人なのに最もエネルギッシュな一人飲みを楽しむタイプです。終わる頃には周りがかなり変わっていることも多い。',
      '大声放音乐，喜欢的歌就跟着唱，举杯独自干杯。越喝越嗨，虽独处却是最有能量的独饮。结束后周围常常变了个样。',
      '大聲放音樂，喜歡的歌就跟著唱，舉杯獨自乾杯。越喝越嗨，雖獨處卻是最有能量的獨飲。結束後周圍常常變了個樣。',
      'Bật nhạc to, hát theo bài yêu thích, giơ ly một mình. Càng say càng vui, uống một mình nhưng năng lượng nhất. Xong thì xung quanh thường khác hẳn.',
      'Putar musik keras, nyanyi lagu favorit, toast sendiri. Semakin mabuk semakin seru, minum sendiri tapi paling energik. Selesai, sekitar sering sudah berubah.'
    ),
    soloDrinkingType: M(
      '셀프 파티 혼술러 🎉',
      'Self-Party Solo Drinker 🎉',
      'セルフパーティー一人飲み 🎉',
      '自我派对独饮者 🎉',
      '自我派對獨飲者 🎉',
      'Người uống một mình self-party 🎉',
      'Solo drinker self-party 🎉'
    ),
    soloDrinkingKeywords: M(
      '에너지·자유·신남·음악·해방감',
      'Energy·Freedom·Excitement·Music·Liberation',
      'エネルギー・自由・盛り上がり・音楽・解放感',
      '能量·自由·嗨·音乐·解放感',
      '能量·自由·嗨·音樂·解放感',
      'Năng lượng·Tự do·Phấn khích·Nhạc·Cảm giác giải phóng',
      'Energi·Kebebasan·Seru·Musik·Rasa lepas'
    ),
    favoriteDrinks: M(
      '맥주·소주·하이볼 등 신나게 마실 수 있는 술',
      'Beer, soju, highball, and other fun party drinks',
      'ビール・焼酎・ハイボールなど盛り上がって飲めるお酒',
      '啤酒、烧酒、嗨棒等能嗨着喝的酒',
      '啤酒、燒酒、嗨棒等能嗨著喝的酒',
      'Bia, soju, highball và rượu uống vui kiểu party',
      'Beer, soju, highball, dan minuman party yang seru'
    ),
    favoriteSnacks: M(
      '치킨·피자·떡볶이 등 파티 분위기에 맞는 안주',
      'Chicken, pizza, tteokbokki, and other party-style snacks',
      'チキン・ピザ・トッポッキなどパーティー向きのおつまみ',
      '炸鸡、披萨、辣炒年糕等派对风下酒菜',
      '炸雞、披薩、辣炒年糕等派對風下酒菜',
      'Gà rán, pizza, tteokbokki và món nhắm kiểu party',
      'Ayam goreng, pizza, tteokbokki, dan camilan ala pesta'
    ),
    personalityTrait: M(
      '에너지가 넘치고 혼자여도 즐길 줄 아는 긍정적인 사람. 아무도 보지 않을 때 가장 자유로운 타입',
      'Full of energy and positive—even alone, you know how to have fun. Freest when no one is watching',
      'エネルギーに溢れ、一人でも楽しめる前向きな人。誰も見ていない時が最も自由なタイプ',
      '能量满满，独处也懂得享受，乐观积极。没人看时最自由',
      '能量滿滿，獨處也懂得享受，樂觀積極。沒人看時最自由',
      'Tràn năng lượng, lạc quan, biết vui khi một mình. Tự do nhất khi không ai nhìn',
      'Penuh energi, positif, tahu menikmati saat sendiri. Paling bebas saat tidak ada yang melihat'
    ),
    drinkingHabit: M(
      '취할수록 볼륨이 올라가고, 어느 순간 안무를 추고 있음. SNS에 혼술 인증샷을 올리거나 아무한테나 "야 지금 재밌다" 연락을 보냄. 다음 날 업로드된 스토리를 보고 비공개 처리함',
      'The drunker you get, the louder it gets—and suddenly you are choreographing. You post solo-drinking pics or text random people "Hey, this is fun." Next day you set those stories to private',
      '酔うほど音量が上がり、気づいたら振付を踊っている。SNSに一人飲み認証を上げたり誰かに「今楽しい」と連絡する。翌日アップしたストーリーを非公開にする',
      '越喝音量越大，不知不觉在编舞。发独饮认证或随便发「现在好嗨」。第二天把 story 设私密',
      '越喝音量越大，不知不覺在編舞。發獨飲認證或隨便發「現在好嗨」。第二天把 story 設私密',
      'Càng say càng to, bỗng dưng nhảy choreography. Đăng ảnh uống một mình hoặc nhắn ai đó "Này vui quá". Hôm sau set story về riêng tư',
      'Semakin mabuk volume naik, tiba-tiba lagi koreografi. Unggah foto minum sendiri atau chat "Hei seru banget". Besok story di-set private'
    ),
    drinkingTip: M(
      '이웃 민폐를 위해 이어폰 하나쯤은 준비해두세요. 혼술 파티는 자유롭게, 볼륨은 적당하게',
      'Keep earphones ready for your neighbors. Solo party freely, but keep the volume reasonable',
      '近所迷惑防止のためイヤホンは用意しておきましょう。一人飲みパーティーは自由に、音量は適度に',
      '为邻居着想，准备一副耳机。独饮派对要自由，音量要适度',
      '為鄰居著想，準備一副耳機。獨飲派對要自由，音量要適度',
      'Chuẩn bị tai nghe vì hàng xóm. Party uống một mình tự do, nhưng volume vừa phải',
      'Siapkan earphone demi tetangga. Pesta minum sendiri bebas, volume cukup saja'
    ),
    oneLineReview: M(
      '혼자인데 왜 이렇게 신나? 그게 이 유형의 매력',
      'Alone but why so hyped? That is this type\'s charm',
      '一人なのにこんなに盛り上がる？それがこのタイプの魅力',
      '一个人为什么这么嗨？这就是这类型的魅力',
      '一個人為什麼這麼嗨？這就是這類型的魅力',
      'Một mình mà sao vui thế? Đó là charm của kiểu này',
      'Sendirian tapi kok seru banget? Itu daya tarik tipe ini'
    ),
    shareSnippet: M(
      '내 혼술 유형은 셀프 파티 혼술러 🎉 혼자인데 제일 신나는 유형 ㅋㅋ 올린 스토리 다음 날 비공개 처리한 경험자 모여 → 너는 어떤 혼술 유형이야?',
      'My solo drinking type is Self-Party Solo Drinker 🎉 Most hype while alone lol Gather here if you set yesterday\'s story to private → What is your solo drinking type?',
      '私の一人飲みタイプはセルフパーティー 🎉 一人なのに一番盛り上がるタイプｗ 上げたストーリー翌日非公開にした人集合 → あなたはどんな一人飲みタイプ？',
      '我的独饮类型是自我派对独饮者 🎉 一个人却最嗨型 ㅋㅋ 发的 story 第二天设私密的集合 → 你是什么独饮类型？',
      '我的獨飲類型是自我派對獨飲者 🎉 一個人卻最嗨型 ㅋㅋ 發的 story 第二天設私密的集合 → 你是什麼獨飲類型？',
      'Kiểu uống một mình của tôi là self-party 🎉 Một mình mà vui nhất ㅋㅋ Ai từng set story hôm sau về riêng tư tụ lại → Bạn thuộc kiểu nào?',
      'Tipe minum sendiri saya self-party 🎉 Sendirian tapi paling hype ㅋㅋ Kumpul yang pernah set story private besoknya → tipe minum sendiri kamu apa?'
    ),
  },
];
