/** 올여름 찰떡! 내 휴가지 유형 — phase3 — 7 locales */
export interface Phase3SummerVacationTypeQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    score: number;
  }[];
}

export interface Phase3SummerVacationTypeResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  vacationStyle: Record<string, string>;
  recommendedPlaces: Record<string, string>;
  budgetSense: Record<string, string>;
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

export const phase3SummerVacationTypeQuestions: Phase3SummerVacationTypeQuestion[] = [
  {
    id: 1,
    question: L(
      '여름 휴가의 첫 번째 목적은?',
      'What is the main purpose of your summer vacation?',
      '夏休みの一番の目的は？',
      '暑假的首要目的是什么？',
      '暑假的首要目的是什麼？',
      'Mục tiêu chính của kỳ nghỉ hè là gì?',
      'Apa tujuan utama liburan musim panasmu?'
    ),
    options: [
      {
        text: L(
          '완전한 휴식! 아무것도 안 하고 그냥 쉬고 싶다',
          'Full rest—I want to do nothing and just recharge.',
          '完全休息！何もせずただ休みたい。',
          '彻底休息！什么都不做，只想放空。',
          '徹底休息！什麼都不做，只想放空。',
          'Nghỉ hoàn toàn—chỉ muốn không làm gì và thư giãn.',
          'Istirahat total—tidak ingin melakukan apa pun, hanya recharge.'
        ),
        score: 0,
      },
      {
        text: L(
          '새로운 경험! 가보지 못한 곳, 먹어보지 못한 것을 체험하고 싶다',
          'New experiences—I want to visit new places and try new things.',
          '新しい体験！行ったことのない場所、食べたことのないものを楽しみたい。',
          '新体验！想去没去过的地方，吃没吃过的东西。',
          '新體驗！想去沒去過的地方，吃沒吃過的東西。',
          'Trải nghiệm mới—muốn đến nơi chưa từng đến và thử món chưa từng ăn.',
          'Pengalaman baru—ingin ke tempat baru dan mencoba hal baru.'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 2,
    question: L(
      '이상적인 숙소는?',
      'What does your ideal accommodation look like?',
      '理想の宿は？',
      '你理想中的住宿是？',
      '你理想中的住宿是？',
      'Chỗ nghỉ lý tưởng của bạn là gì?',
      'Akomodasi ideal versimu seperti apa?'
    ),
    options: [
      {
        text: L(
          '움직이기 귀찮으니 숙소 자체가 즐길 거리가 많은 리조트나 호텔',
          'A resort or hotel with plenty to do—I do not want to go far.',
          '動くのが面倒なので、施設内で楽しめるリゾートやホテル。',
          '懒得出门，住宿本身就要有很多可玩项目的度假村或酒店。',
          '懶得出門，住宿本身就要有很多可玩項目的度假村或飯店。',
          'Resort hoặc khách sạn có nhiều trò trong khuôn viên—không muốn đi xa.',
          'Resort atau hotel dengan banyak aktivitas di dalam—malas keluar jauh.'
        ),
        score: 0,
      },
      {
        text: L(
          '숙소는 잠만 자면 되니 가성비 좋고 위치 좋은 곳이면 충분하다',
          'A place to sleep is enough—good value and a good location matter most.',
          '宿は寝るだけ。コスパよくて立地が良ければ十分。',
          '住宿能睡就行，性价比高、位置好就够了。',
          '住宿能睡就行，性價比高、位置好就夠了。',
          'Chỉ cần chỗ ngủ—hợp túi tiền và thuận tiện là đủ.',
          'Cukup buat tidur—yang penting hemat dan lokasinya bagus.'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 3,
    question: L(
      '여행 예산 감각은?',
      'How do you feel about travel spending?',
      '旅行の予算感は？',
      '你对旅行预算的感觉是？',
      '你對旅行預算的感覺是？',
      'Bạn chi tiêu cho chuyến đi như thế nào?',
      'Bagaimana pendekatanmu soal budget traveling?'
    ),
    options: [
      {
        text: L(
          '여행만큼은 아끼지 않는다. 좋은 곳에서 제대로 즐기고 싶다',
          'I splurge on trips—I want to enjoy properly at a great place.',
          '旅行だけはケチらない。いい場所でちゃんと楽しみたい。',
          '旅行不省，想在好地方好好享受。',
          '旅行不省，想在好地方好好享受。',
          'Du lịch là đầu tư—muốn tận hưởng ở nơi tốt.',
          'Untuk traveling rela keluar uang—ingin menikmati di tempat yang mantap.'
        ),
        score: 0,
      },
      {
        text: L(
          '합리적으로 쓰고 싶다. 비용 대비 만족감이 중요하다',
          'I spend wisely—value for money matters most.',
          '合理的に使いたい。費用対効果が大事。',
          '想花得合理，重视性价比。',
          '想花得合理，重視性價比。',
          'Chi tiêu hợp lý—quan trọng là đáng đồng tiền.',
          'Hemat tapi masuk akal—yang penting puas dengan uang yang dikeluarkan.'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 4,
    question: L(
      '이번 여름 동행은?',
      'Who are you traveling with this summer?',
      '今回の夏の同行者は？',
      '今年夏天和谁一起？',
      '今年夏天和誰一起？',
      'Mùa hè này bạn đi cùng ai?',
      'Musim panas ini kamu traveling bareng siapa?'
    ),
    options: [
      {
        text: L(
          '연인이나 친한 친구 한두 명과 조용하게',
          'Quietly with a partner or one or two close friends.',
          '恋人や親しい友人1〜2人と、静かに。',
          '和恋人或一两个好友，安静出行。',
          '和戀人或一兩個好友，安靜出行。',
          'Đi nhỏ gọn với người yêu hoặc một hai người bạn thân.',
          'Tenang bersama pasangan atau satu dua teman dekat.'
        ),
        score: 0,
      },
      {
        text: L(
          '여러 명이 함께 왁자지껄하게',
          'A bigger group—loud, fun, and lively together.',
          '大人数でワイワイ賑やかに。',
          '一大群人一起热热闹闹。',
          '一大群人一起熱熱鬧鬧。',
          'Đông người—ồn ào vui vẻ cùng nhau.',
          'Rame-rame banyak orang—seru dan riuh.'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 5,
    question: L(
      '휴가 중 식사 스타일은?',
      'How do you like to eat on vacation?',
      '休暇中の食事スタイルは？',
      '度假时吃饭风格是？',
      '度假時吃飯風格是？',
      'Khi đi nghỉ bạn ăn uống kiểu gì?',
      'Gaya makan saat liburan seperti apa?'
    ),
    options: [
      {
        text: L(
          '현지 맛집, 로컬 음식 탐방이 여행의 반이다',
          'Local food hunts—great eats are half the trip.',
          '地元の名店、ローカルフード巡りが旅の半分。',
          '探当地美食、吃本地菜，占了旅行的一半。',
          '探當地美食、吃本地菜，占了旅行的一半。',
          'Săn quán địa phương—ăn uống là nửa chuyến đi.',
          'Jelajah makanan lokal—kuliner separuh dari perjalanan.'
        ),
        score: 0,
      },
      {
        text: L(
          '편하고 익숙한 음식이 좋다. 배불리 잘 먹으면 된다',
          'Comfort food is fine—as long as I eat well and feel full.',
          '楽で馴染みのある食事がいい。お腹いっぱいならOK。',
          '吃得舒服、熟悉就好，吃饱最重要。',
          '吃得舒服、熟悉就好，吃飽最重要。',
          'Ăn quen và thoải mái—miễn no là được.',
          'Yang penting nyaman dan kenyang—makanan familiar juga oke.'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 6,
    question: L(
      '바다 vs 산, 솔직한 내 취향은?',
      'Beach vs mountains—which do you honestly prefer?',
      '海 vs 山、正直な好みは？',
      '海边还是山里？你真实的偏好是？',
      '海邊還是山裡？你真實的偏好是？',
      'Biển hay núi—bạn thực sự thích gì?',
      'Pantai atau pegunungan—mana yang lebih kamu suka?'
    ),
    options: [
      {
        text: L(
          '바다! 파도 소리, 모래사장, 수영이 좋다',
          'The beach—waves, sand, and swimming.',
          '海！波の音、砂浜、泳ぎたい。',
          '大海！浪声、沙滩、游泳。',
          '大海！浪聲、沙灘、游泳。',
          'Biển—sóng, cát và bơi lội.',
          'Pantai—ombak, pasir, dan berenang.'
        ),
        score: 0,
      },
      {
        text: L(
          '산이나 계곡! 시원한 나무 그늘, 맑은 물이 좋다',
          'Mountains or valleys—cool shade and clear water.',
          '山や渓谷！木陰が涼しく、水がきれい。',
          '山或溪谷！树荫凉快、水清。',
          '山或溪谷！樹蔭涼快、水清。',
          'Núi hoặc thung lũng—bóng mát và nước trong.',
          'Gunung atau lembah—teduh dan air jernih.'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 7,
    question: L(
      '여행 중 이동은?',
      'How do you like to move around while traveling?',
      '旅行中の移動は？',
      '旅行时你怎么安排移动？',
      '旅行時你怎麼安排移動？',
      'Khi đi du lịch bạn thích di chuyển thế nào?',
      'Saat traveling, kamu lebih suka mobilitas seperti apa?'
    ),
    options: [
      {
        text: L(
          '한 곳에 오래 머무는 게 좋다. 짐 풀고 느긋하게',
          'Stay in one place longer—unpack and relax.',
          '一箇所に長く滞在。荷物を開いてゆったり。',
          '喜欢待在一个地方久一点，摊开行李慢慢玩。',
          '喜歡待在一個地方久一點，攤開行李慢慢玩。',
          'Ở một chỗ lâu—mở vali ra và thư giãn.',
          'Di satu tempat lebih lama—unpack dan santai.'
        ),
        score: 0,
      },
      {
        text: L(
          '여러 곳을 돌아다니며 다양하게 보는 게 좋다',
          'Hop around—I want to see many different spots.',
          'いろいろな場所を回って色々見たい。',
          '喜欢多走几个地方，看得丰富一点。',
          '喜歡多走幾個地方，看得豐富一點。',
          'Nhảy nhiều điểm—muốn xem đa dạng.',
          'Keliling banyak tempat—ingin variasi pengalaman.'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 8,
    question: L(
      '해외여행 vs 국내여행?',
      'International trip vs domestic trip?',
      '海外旅行 vs 国内旅行？',
      '出国玩还是国内玩？',
      '出國玩還是國內玩？',
      'Đi nước ngoài hay trong nước?',
      'Luar negeri atau dalam negeri?'
    ),
    options: [
      {
        text: L(
          '해외! 비행기 타고 완전히 다른 세계를 경험하고 싶다',
          'Abroad—I want a flight and a totally different world.',
          '海外！飛行機に乗って全く違う世界を体験したい。',
          '出国！想坐飞机体验完全不同的世界。',
          '出國！想搭飛機體驗完全不同的世界。',
          'Nước ngoài—máy bay và thế giới hoàn toàn khác.',
          'Luar negeri—pesawat dan dunia yang benar-benar beda.'
        ),
        score: 0,
      },
      {
        text: L(
          '국내! 이동 부담 없이 편하게 즐기고 싶다',
          'Domestic—less travel stress, easy and comfortable.',
          '国内！移動の負担が少なく楽に楽しみたい。',
          '国内！少折腾，轻松舒服地玩。',
          '國內！少折騰，輕鬆舒服地玩。',
          'Trong nước—ít căng thẳng di chuyển, thoải mái.',
          'Dalam negeri—perjalanan ringan dan nyaman.'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 9,
    question: L(
      '휴가 중 사진은?',
      'How do you feel about photos on vacation?',
      '休暇中の写真は？',
      '度假时拍照你怎么想？',
      '度假時拍照你怎麼想？',
      'Chụp ảnh khi đi nghỉ thế nào?',
      'Foto saat liburan—pendapatmu?'
    ),
    options: [
      {
        text: L(
          '감성 사진, 인생 사진 건지는 것도 여행의 즐거움이다',
          'Mood shots and “life photos” are part of the fun.',
          '感動的な写真、人生写真を撮るのも旅の楽しみ。',
          '拍氛围感、拍人生照片也是旅行的乐趣。',
          '拍氛圍感、拍人生照片也是旅行的樂趣。',
          'Chụp ảnh vibe, ảnh “để đời”—cũng là niềm vui.',
          'Foto estetik dan memorable—bagian dari keseruan.'
        ),
        score: 0,
      },
      {
        text: L(
          '즐기는 게 먼저. 사진은 그냥 폰으로 몇 장 찍으면 충분하다',
          'Enjoying comes first—a few phone snaps are enough.',
          '楽しむのが先。写真はスマホで数枚で十分。',
          '先玩痛快，手机随便拍几张就够。',
          '先玩痛快，手機隨便拍幾張就夠。',
          'Tận hưởng trước—vài ảnh điện thoại là đủ.',
          'Nikmati dulu—beberapa foto HP cukup.'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 10,
    question: L(
      '여름 더위에 대한 솔직한 생각은?',
      'What is your honest take on summer heat?',
      '夏の暑さについて正直な感想は？',
      '对夏天炎热你真实的想法是？',
      '對夏天炎熱你真實的想法是？',
      'Thật lòng bạn nghĩ sao về nóng mùa hè?',
      'Jujur, bagaimana pendapatmu tentang panas musim panas?'
    ),
    options: [
      {
        text: L(
          '더위는 여름의 낭만! 뜨거운 햇살도 즐길 수 있다',
          'Heat is summer romance—even hot sunshine can feel good.',
          '暑さは夏のロマン！熱い日差しも楽しめる。',
          '炎热是夏天的浪漫！烈日也能享受。',
          '炎熱是夏天的浪漫！烈日也能享受。',
          'Nóng là vibe mùa hè—nắng gắt cũng có thể thích.',
          'Panas itu romansa musim panas—matahari terik juga bisa dinikmati.'
        ),
        score: 0,
      },
      {
        text: L(
          '더위가 너무 싫다. 시원한 곳이 최고다',
          'I hate the heat—cool places are the best.',
          '暑さが苦手。涼しい場所が一番。',
          '受不了热，凉快的地方最好。',
          '受不了熱，涼快的地方最好。',
          'Ghét nóng—chỗ mát mới tuyệt nhất.',
          'Tidak suka panas—tempat sejuk yang terbaik.'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 11,
    question: L(
      '여행 계획 스타일은?',
      'What is your travel planning style?',
      '旅行の計画スタイルは？',
      '你做旅行计划的风格是？',
      '你做旅行計畫的風格是？',
      'Phong cách lập kế hoạch du lịch của bạn?',
      'Gaya merencanakan traveling seperti apa?'
    ),
    options: [
      {
        text: L(
          '숙소, 식당, 동선까지 꼼꼼하게 미리 계획한다',
          'I plan lodging, meals, and routes in detail ahead of time.',
          '宿、レストラン、ルートまで細かく事前に計画。',
          '住宿、餐厅、路线都会事先仔细计划。',
          '住宿、餐廳、路線都會事先仔細計畫。',
          'Lên kế hoạch chi tiết chỗ ở, ăn uống và lộ trình.',
          'Rencanakan detail: penginapan, makan, dan rute.'
        ),
        score: 0,
      },
      {
        text: L(
          '큰 틀만 잡고 현지에서 즉흥적으로 결정하는 게 좋다',
          'A loose outline—decide spontaneously on the spot.',
          '大枠だけ決めて、現地で即興的に決める。',
          '只定大方向，到当地再即兴决定。',
          '只定大方向，到當地再即興決定。',
          'Chỉ khung sườn—đến nơi mới quyết tức thì.',
          'Hanya kerangka besar—putuskan spontan di tempat.'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 12,
    question: L(
      '이번 여름 휴가, 가장 원하는 한 장면은?',
      'What one summer scene do you want most?',
      '今回の夏休み、いちばん望む一場面は？',
      '这次暑假，你最想要的一个画面是？',
      '這次暑假，你最想要的一個畫面是？',
      'Khoảnh khắc nào bạn mong nhất mùa hè này?',
      'Satu momen musim panas apa yang paling kamu inginkan?'
    ),
    options: [
      {
        text: L(
          '수평선이 보이는 곳에서 아무 생각 없이 멍때리는 장면',
          'Staring at the horizon with an empty mind.',
          '水平線が見える場所で、何も考えずぼーっとする。',
          '能看见海平线的地方，什么都不想发呆。',
          '能看見海平線的地方，什麼都不想發呆。',
          'Nhìn chân trời, đầu óc trống rỗng.',
          'Menatap cakrawala dengan pikiran kosong.'
        ),
        score: 0,
      },
      {
        text: L(
          '처음 보는 풍경 앞에서 와! 하고 탄성이 나오는 장면',
          'Gasping “wow!” in front of a view I have never seen.',
          '初めて見る景色の前で「わあ！」と声が出る。',
          '第一次见到眼前风景时忍不住“哇”出来。',
          '第一次見到眼前風景時忍不住「哇」出來。',
          'Thốt lên “wow!” trước cảnh chưa từng thấy.',
          'Terkesima “wow!” di depan pemandangan baru.'
        ),
        score: 1,
      },
    ],
  },
];

export const phase3SummerVacationTypeResults: Phase3SummerVacationTypeResult[] = [
  {
    type: 'Type1',
    emoji: '🏖️',
    title: L(
      '지친 몸과 마음을 위한 완전 충전, 풀빌라 & 리조트파',
      'Full recharge for body and mind—pool villa & resort type',
      '疲れた心と体のためのフル充電、プールヴィラ＆リゾート派',
      '给身心充满电，泳池别墅与度假村派',
      '給身心充滿電，泳池別墅與度假村派',
      'Sạc đầy tinh thần—kiểu pool villa & resort',
      'Recharge total—tipe pool villa & resort'
    ),
    shortDescription: L(
      '이번 여름, 당신에게 필요한 건 아무것도 안 해도 되는 곳입니다.',
      'This summer, what you need is a place where doing nothing is allowed.',
      'この夏、あなたに必要なのは「何もしなくていい」場所です。',
      '这个夏天，你需要的是一个“什么都不做也可以”的地方。',
      '這個夏天，你需要的是一個「什麼都不做也可以」的地方。',
      'Mùa hè này bạn cần nơi mà không làm gì cũng được.',
      'Musim panas ini kamu butuh tempat di mana tidak melakukan apa pun sudah cukup.'
    ),
    description: L(
      '움직이기 싫고, 새로운 자극보다는 완벽한 휴식이 필요한 당신. 체크인하고 나서 체크아웃할 때까지 수영장 선베드에 누워 있어도 충분한 여름이 필요합니다. 제주 프라이빗 풀빌라, 강원도 감성 리조트, 혹은 발리나 푸켓의 올인클루시브 리조트가 딱 맞습니다. 아무것도 안 하는 것도 실력입니다.',
      'You want rest more than stimulation—from check-in to check-out, lounging by the pool can be the whole trip. A private pool villa in Jeju, a mood resort in Gangwon, or an all-inclusive in Bali or Phuket fits you. Doing nothing is a skill too.',
      '動きたくなく、刺激より完璧な休息が欲しいあなた。チェックインからチェックアウトまでプールサイドで過ごすだけの夏で十分。済州のプライベートプールヴィラ、江原道の雰囲気リゾート、バリ・プーケットのオールインクルーシブがぴったり。「何もしない」も実力です。',
      '你懒得动，比起新鲜刺激更需要彻底休息。从入住到退房，躺在泳池边晒太阳的夏天就够了。济州私人泳池别墅、江原道氛围感度假村，或巴厘岛、普吉岛一价全包度假村都很合适。会“什么都不做”也是一种本事。',
      '你懶得動，比起新鮮刺激更需要徹底休息。從入住到退房，躺在泳池邊曬太陽的夏天就夠了。濟州私人泳池別墅、江原道氛圍感度假村，或峇里島、普吉島一價全包度假村都很合適。會「什麼都不做」也是一種本事。',
      'Bạn lười di chuyển và cần nghỉ hơn là kích thích—từ lúc nhận phòng đến trả phòng, nằm bên hồ đã đủ. Biệt villa Jeju, resort Gangwon, hoặc all-inclusive Bali/Phuket hợp bạn. “Không làm gì” cũng là một kỹ năng.',
      'Kamu malas bergerak dan butuh istirahat total—dari check-in sampai check-out, rebahan di kolam renang sudah cukup. Pool villa Jeju, resort Gangwon, atau all-inclusive Bali/Phuket cocok. “Tidak melakukan apa pun” juga sebuah skill.'
    ),
    vacationStyle: L(
      '완전 충전형 🔋',
      'Full recharge type 🔋',
      'フル充電タイプ 🔋',
      '满电充电型 🔋',
      '滿電充電型 🔋',
      'Kiểu sạc đầy 🔋',
      'Tipe recharge penuh 🔋'
    ),
    recommendedPlaces: L(
      '제주 풀빌라 / 강원 리조트 / 발리 우붓 / 푸켓 올인클루시브',
      'Jeju pool villa / Gangwon resort / Ubud, Bali / Phuket all-inclusive',
      '済州プールヴィラ / 江原リゾート / バリ・ウブド / プーケット・オールインクルーシブ',
      '济州泳池别墅 / 江原道度假村 / 巴厘岛乌布 / 普吉岛一价全包',
      '濟州泳池別墅 / 江原道度假村 / 峇里島烏布 / 普吉島一價全包',
      'Biệt villa Jeju / Resort Gangwon / Ubud Bali / Phuket trọn gói',
      'Pool villa Jeju / Resort Gangwon / Ubud Bali / Phuket all-inclusive'
    ),
    budgetSense: L(
      '숙소에 아낌없이 투자',
      'Invest generously in where you stay',
      '宿には惜しみなく投資',
      '住宿值得大方投入',
      '住宿值得大方投入',
      'Sẵn sàng chi mạnh cho chỗ ở',
      'Rela invest besar untuk penginapan'
    ),
    goodMatch: L(
      '아무 말 없이 같이 쉴 수 있는 사람',
      'Someone who can rest beside you in comfortable silence',
      '言葉なく一緒に休める人',
      '能一起安静待着、不用说太多话的人',
      '能一起安靜待著、不用說太多話的人',
      'Người có thể nghỉ cùng bạn mà không cần nói nhiều',
      'Orang yang bisa bareng rebahan tanpa banyak bicara'
    ),
    badMatch: L(
      '우리 어디 구경 가자!를 입에 달고 사는 사람',
      'Someone who always says “Let’s go sightseeing somewhere!”',
      '「どこか観光に行こう！」が口癖の人',
      '嘴上总挂着“我们去哪逛逛吧！”的人',
      '嘴上總掛著「我們去哪逛逛吧！」的人',
      'Người lúc nào cũng “Đi đâu đó tham quan đi!”',
      'Orang yang terus bilang “Ayo jalan-jalan ke mana gitu!”'
    ),
  },
  {
    type: 'Type2',
    emoji: '🏕️',
    title: L(
      '가성비 국내 힐링, 계곡 & 산속 캠핑파',
      'Budget-friendly domestic healing—valleys & mountain camping',
      'コスパ国内ヒーリング、渓谷＆山キャンプ派',
      '高性价比国内疗愈，溪谷与山野露营派',
      '高性價比國內療癒，溪谷與山野露營派',
      'Trong nước hợp túi—thung lũng & camping núi',
      'Healing domestik hemat—lembah & camping gunung'
    ),
    shortDescription: L(
      '멀리 가지 않아도 됩니다. 시원한 물소리만 있으면 충분합니다.',
      'You do not have to go far—the sound of cool water is enough.',
      '遠くへ行かなくていい。涼しい水の音があれば十分。',
      '不用去远方，有凉凉的水声就够了。',
      '不用去遠方，有涼涼的水聲就夠了。',
      'Không cần đi xa—chỉ cần tiếng nước mát là đủ.',
      'Tidak perlu jauh—cukup suara air yang sejuk.'
    ),
    description: L(
      '더위가 싫고 복잡한 것도 싫은 당신. 인파로 북적이는 유명 관광지보다는 조용한 계곡이나 캠핑장에서 발 담그고 고기 구워 먹는 여름이 훨씬 행복합니다. 예산도 합리적이고, 이동도 부담 없고, 자연 속에서 진짜 힐링을 얻는 타입입니다.',
      'You dislike heat and crowds—happier dipping your feet in a quiet valley or grilling at a campsite than fighting tourist hotspots. Budget-friendly, low travel stress, and real healing in nature.',
      '暑さも混雑も苦手なあなた。人混みの名所より、静かな渓谷やキャンプ場で足をつけて肉を焼く夏のほうが幸せ。予算も移動も楽で、自然の中で本当のヒーリングを得るタイプです。',
      '你怕热也怕折腾，比起人挤人的名胜，更爱在安静溪谷或露营地泡脚、烤肉的夏天。预算友好、出行轻松，在自然里真正疗愈。',
      '你怕熱也怕折騰，比起人擠人的名勝，更愛在安靜溪谷或露營地泡腳、烤肉的夏天。預算友善、出行輕鬆，在自然裡真正療癒。',
      'Bạn ghét nóng và đông đúc—thích thung lũng yên hoặc camping hơn điểm du lịch đông người. Hợp túi, ít stress di chuyển, healing thật trong thiên nhiên.',
      'Kamu tidak suka panas dan keramaian—lebih bahagia di lembah tenang atau camping daripada tempat wisata ramai. Hemat, ringan perjalanannya, healing di alam.'
    ),
    vacationStyle: L(
      '자연 힐링형 🌿',
      'Nature healing type 🌿',
      '自然ヒーリングタイプ 🌿',
      '自然疗愈型 🌿',
      '自然療癒型 🌿',
      'Kiểu chữa lành thiên nhiên 🌿',
      'Tipe healing alam 🌿'
    ),
    recommendedPlaces: L(
      '강원 인제 계곡 / 경북 청송 / 지리산 자락 캠핑장 / 양평 글램핑',
      'Inje valley, Gangwon / Cheongsong, Gyeongbuk / Jirisan foothill campsite / Yangpyeong glamping',
      '江原インジェ渓谷 / 慶北青松 / 智異山麓キャンプ場 / 楊平グランピング',
      '江原道麟蹄溪谷 / 庆北青松 / 智异山脚营地 / 杨平豪华露营',
      '江原道麟蹄溪谷 / 慶北青松 / 智異山腳營地 / 楊平豪華露營',
      'Thung lũng Inje Gangwon / Cheongsong Gyeongbuk / camping chân núi Jirisan / glamping Yangpyeong',
      'Lembah Inje Gangwon / Cheongsong Gyeongbuk / camping Jirisan / glamping Yangpyeong'
    ),
    budgetSense: L(
      '합리적 국내 여행',
      'Reasonable domestic travel budget',
      '合理的な国内旅行',
      '国内旅行预算理性可控',
      '國內旅行預算理性可控',
      'Ngân sách du lịch trong nước hợp lý',
      'Budget traveling domestik yang rasional'
    ),
    goodMatch: L(
      '같이 멍때리고 고기 구워줄 사람',
      'Someone who zones out with you and handles the grill',
      '一緒にぼーっとして肉を焼いてくれる人',
      '能一起发呆、还帮你烤肉的人',
      '能一起發呆、還幫你烤肉的人',
      'Người cùng “ngu ngơ” và nướng thịt cùng bạn',
      'Orang yang bisa melamun bareng dan urus pemanggangan'
    ),
    badMatch: L(
      '모기 한 마리에 패닉 오는 도시인',
      'A city person who panics at a single mosquito',
      '蚊一匹でパニックになる都会派',
      '一只蚊子就崩溃的都市人',
      '一隻蚊子就崩潰的都市人',
      'Người thành thị sợ đến mức hoảng vì một con muỗi',
      'Orang kota yang panik cuma karena satu nyamuk'
    ),
  },
  {
    type: 'Type3',
    emoji: '📸',
    title: L(
      '핫플 탐방 + 감성 사진, 국내 트렌디 여행파',
      'Hot spots & mood photos—trendy domestic travel',
      '話題スポット＋映え写真、国内トレンド旅派',
      '打卡热点与氛围感照片，国内潮流旅行派',
      '打卡熱點與氛圍感照片，國內潮流旅行派',
      'Check-in hot spot & ảnh vibe—du lịch trong nước trendy',
      'Hot spot & foto estetik—travel domestik yang kekinian'
    ),
    shortDescription: L(
      '여행도 콘텐츠다! 인생 사진과 맛집이 있으면 어디든 좋다.',
      'Travel is content—great photos and food make any place worth it.',
      '旅もコンテンツ！人生写真とグルメがあればどこでもOK。',
      '旅行也是内容！有人生照片和美食，去哪都行。',
      '旅行也是內容！有人生照片和美食，去哪都行。',
      'Du lịch cũng là content—có ảnh đẹp và đồ ngon là được.',
      'Traveling juga konten—ada foto keren dan makanan enak, mana saja oke.'
    ),
    description: L(
      '여행의 목적이 쉬는 것만은 아닌 당신. 요즘 뜨는 감성 카페, 숨겨진 맛집, 예쁜 포토스팟이 있는 곳이라면 국내 어디든 좋습니다. 부산 해운대 해변가 카페, 경주 감성 숙소, 전주 한옥마을, 여수 밤바다까지. 인스타그램에 올릴 사진 건지는 것도 여행의 중요한 목적입니다.',
      'Rest is not your only goal—trendy cafes, hidden foodie spots, and photo-worthy places anywhere in the country work for you. Think Haeundae cafes in Busan, mood stays in Gyeongju, Jeonju Hanok Village, or Yeosu at night. Getting a post-ready shot is a real purpose of the trip.',
      '休むだけが目的ではないあなた。今流行りのカフェ、隠れた名店、映えスポットなら国内どこでもOK。釜山ヘウンデの海辺カフェ、慶州の雰囲気宿、全州韓屋村、麗水の夜の海まで。SNS用の写真を撮るのも旅の大目的です。',
      '你不只为休息而旅行——氛围感咖啡厅、隐藏美食、出片点，国内哪里都行。釜山海云台海边咖啡、庆州情调住宿、全州韩屋村、丽水夜海。为社交平台拍出好照片也是旅行的重要目的。',
      '你不只為休息而旅行——氛圍感咖啡廳、隱藏美食、出片點，國內哪裡都行。釜山海雲臺海邊咖啡、慶州情調住宿、全州韓屋村、麗水夜海。為社群平台拍出好照片也是旅行的重要目的。',
      'Bạn không chỉ đi để ngủ—cafe hot, quán lạ, chỗ chụp ảnh đẹp ở đâu trong nước cũng được. Cafe biển Haeundae Busan, homestay vibe Gyeongju, làng hanok Jeonju, biển đêm Yeosu. Chụp ảnh đăng mạng cũng là mục tiêu thật.',
      'Bukan cuma istirahat—kafe hits, kuliner tersembunyi, spot foto di mana saja dalam negeri. Kafe pantai Haeundae, penginapan Gyeongju, desa hanok Jeonju, Yeosu malam. Foto untuk feed juga tujuan perjalanan.'
    ),
    vacationStyle: L(
      '트렌디 국내 탐방형 📍',
      'Trendy domestic explorer type 📍',
      'トレンド国内探索タイプ 📍',
      '国内潮流探店型 📍',
      '國內潮流探店型 📍',
      'Kiểu khám phá trong nước theo trend 📍',
      'Tipe jelajah domestik yang kekinian 📍'
    ),
    recommendedPlaces: L(
      '부산 해리단길 / 경주 황리단길 / 여수 돌산도 / 강릉 안목해변',
      'Haeridan-gil, Busan / Hwangridan-gil, Gyeongju / Dolsan Island, Yeosu / Anmok Beach, Gangneung',
      '釜山ヘリダンギル / 慶州ファンリダンギル / 麗水トルサンド / 江陵アンモクビーチ',
      '釜山海理团路 / 庆州黄理团路 / 丽水突山岛 / 江陵安木海边',
      '釜山海理團路 / 慶州黃理團路 / 麗水突山島 / 江陵安木海邊',
      'Haeridan-gil Busan / Hwangridan-gil Gyeongju / đảo Dolsan Yeosu / bãi Anmok Gangneung',
      'Haeridan-gil Busan / Hwangridan-gil Gyeongju / Yeosu Dolsan / pantai Anmok Gangneung'
    ),
    budgetSense: L(
      '중간, 맛집과 카페에 집중 투자',
      'Mid-range budget—invest mainly in food and cafes',
      '中くらい、グルメとカフェに集中投資',
      '中等预算，重点砸在美食和咖啡厅',
      '中等預算，重點砸在美食和咖啡廳',
      'Ngân sách tầm trung—ưu tiên quán ăn và cafe',
      'Budget menengah—fokus ke kuliner dan kafe'
    ),
    goodMatch: L(
      '사진 잘 찍어주고 맛집 리서치 열심히 하는 친구',
      'A friend who takes good photos and researches restaurants hard',
      '写真が上手で、グルメリサーチが熱心な友達',
      '会拍照、还认真做美食攻略的朋友',
      '會拍照、還認真做美食攻略的朋友',
      'Bạn chụp ảnh giỏi và nghiên cứu quán ăn chăm',
      'Teman yang jago foto dan rajin riset tempat makan'
    ),
    badMatch: L(
      '사진은 왜 이렇게 많이 찍어?라고 하는 사람',
      'Someone who asks “Why do you take so many photos?”',
      '「なんでそんなに写真撮るの？」という人',
      '总说“你怎么拍这么多照片？”的人',
      '總說「你怎麼拍這麼多照片？」的人',
      'Người hay hỏi “Sao chụp nhiều ảnh thế?”',
      'Orang yang bilang “Kok foto segini banyak?”'
    ),
  },
  {
    type: 'Type4',
    emoji: '🌊',
    title: L(
      '액티비티 가득한 에너지 폭발, 워터파크 & 바다 여행파',
      'High-energy activities—water parks & beach trips',
      'アクティビティ満載、ウォーターパーク＆海派',
      '活动拉满能量爆棚，水上乐园与海滩派',
      '活動拉滿能量爆棚，水上樂園與海灘派',
      'Năng lượng cao—công viên nước & biển',
      'Energi tinggi—water park & pantai'
    ),
    shortDescription: L(
      '이번 여름은 더 뜨겁게 놀아야 한다!',
      'This summer you have to play hotter and louder!',
      'この夏はもっと熱く遊ばなきゃ！',
      '这个夏天要玩得更热烈！',
      '這個夏天要玩得更熱烈！',
      'Mùa hè này phải chơi nhiệt hơn!',
      'Musim panas ini harus main lebih seru!'
    ),
    description: L(
      '가만히 쉬는 것보다 신나게 노는 게 더 좋은 당신. 워터파크 슬라이드, 스노클링, 서핑, 제트스키까지. 여름 액티비티를 하나도 빠짐없이 즐기고 싶은 에너지 넘치는 타입입니다. 여럿이 함께 갈수록 더 신나는 스타일이니 이번 여름은 대규모 그룹 여행도 좋습니다.',
      'You prefer playing hard over lounging—slides at a water park, snorkeling, surfing, jet skis. You want every summer activity on the list. Bigger groups make it more fun, so a large group trip fits this summer.',
      'じっと休むより全力で遊びたいあなた。ウォーターパークのスライド、シュノーケル、サーフィン、ジェットスキーまで。夏のアクティビティを全部楽しみたいエネルギー型。大人数ほど盛り上がるので、大規模グループ旅行も◎。',
      '比起躺着休息，你更爱尽情玩——水上乐园滑梯、浮潜、冲浪、摩托艇。想把夏日活动一项不落玩遍的能量型。人越多越嗨，大型团建式旅行也合适。',
      '比起躺著休息，你更愛盡情玩——水上樂園滑梯、浮潛、衝浪、摩托艇。想把夏日活動一項不落玩遍的能量型。人越多越嗨，大型團建式旅行也合適。',
      'Bạn thích chơi hơn là nằm—cầu trượt công viên nước, lặn ống thở, lướt sóng, mô tô nước. Muốn thử hết hoạt động mùa hè. Đông người càng vui—đi nhóm lớn hợp.',
      'Lebih suka main keras daripada rebahan—seluncuran water park, snorkeling, selancar, jet ski. Ingin coba semua aktivitas musim panas. Makin ramai makin seru—trip grup besar cocok.'
    ),
    vacationStyle: L(
      '액티비티 에너지형 ⚡',
      'Activity energy type ⚡',
      'アクティビティ・ハイエナジー型 ⚡',
      '动感活力型 ⚡',
      '動感活力型 ⚡',
      'Kiểu năng lượng hoạt động ⚡',
      'Tipe energi aktivitas ⚡'
    ),
    recommendedPlaces: L(
      '오션월드 / 캐리비안베이 / 제주 협재해변 / 속초 해수욕장 / 괌 투몬비치',
      'Ocean World / Caribbean Bay / Hyeopjae Beach, Jeju / Sokcho Beach / Tumon Beach, Guam',
      'オーシャンワールド / カリビアンベイ / 済州ヒョプチェビーチ / 束草海水浴場 / グアム・トゥモンビーチ',
      '爱宝海洋世界 / 加勒比海湾 / 济州挟才海边 / 束草海水浴场 / 关岛杜梦湾',
      '愛寶海洋世界 / 加勒比海灣 / 濟州挾才海邊 / 束草海水浴場 / 關島杜夢灣',
      'Ocean World / Caribbean Bay / bãi Hyeopjae Jeju / Sokcho / Tumon Guam',
      'Ocean World / Caribbean Bay / pantai Hyeopjae Jeju / Sokcho / Tumon Guam'
    ),
    budgetSense: L(
      '즐길거리에 아낌없이 투자',
      'Invest freely in things to do',
      '楽しみには惜しみなく投資',
      '玩乐项目值得大方花钱',
      '玩樂項目值得大方花錢',
      'Sẵn sàng chi cho trải nghiệm vui',
      'Rela keluar uang untuk keseruan'
    ),
    goodMatch: L(
      '같이 슬라이드 타고 소리 지를 수 있는 사람',
      'Someone who rides the slides and screams with you',
      '一緒にスライダーに乗って叫べる人',
      '能一起坐滑梯、一起尖叫的人',
      '能一起坐滑梯、一起尖叫的人',
      'Người cùng chơi cầu trượt và la hét với bạn',
      'Orang yang naik seluncuran dan teriak bareng'
    ),
    badMatch: L(
      '나 수영 못 해. 그냥 그늘에 있을게인 사람',
      'Someone who says “I cannot swim—I will just stay in the shade”',
      '「泳げないから日陰でいるね」な人',
      '总说“我不会游泳，就在树荫待着”的人',
      '總說「我不會游泳，就在樹蔭待著」的人',
      'Người nói “Tôi không biết bơi—tôi ngồi bóng râm thôi”',
      'Orang yang bilang “Aku tidak bisa renang—aku di teduh saja”'
    ),
  },
  {
    type: 'Type5',
    emoji: '✈️',
    title: L(
      '새로운 문화와 감성 흡수, 해외 도시 여행파',
      'Soak up new culture and vibes—international city travel',
      '新しい文化と感性を吸収、海外都市旅派',
      '吸收新文化新氛围，海外城市旅行派',
      '吸收新文化新氛圍，海外城市旅行派',
      'Hấp thụ văn hóa—du lịch đô thị nước ngoài',
      'Menyerap budaya—travel kota luar negeri'
    ),
    shortDescription: L(
      '비행기 타야 진짜 여행이죠. 완전히 다른 세계를 경험하고 싶습니다.',
      'A flight makes it feel like a real trip—I want a totally different world.',
      '飛行機に乗ってこそ本当の旅。まったく違う世界を体験したい。',
      '坐飞机才像真正的旅行，想体验完全不同的世界。',
      '搭飛機才像真正的旅行，想體驗完全不同的世界。',
      'Phải lên máy bay mới là chuyến đi thật—muốn thế giới khác hẳn.',
      'Naik pesawat baru kerasa traveling—ingin dunia yang benar-benar beda.'
    ),
    description: L(
      '국내는 왠지 여행 같지 않은 당신. 낯선 언어, 처음 보는 거리, 현지 음식과 문화를 직접 경험하는 것이 진짜 여름이라고 느끼는 타입입니다. 꼼꼼하게 일정 짜는 걸 즐기고, 현지 맛집 리서치도 이미 다 해두는 철저한 여행자입니다. 도쿄, 방콕, 파리, 바르셀로나가 당신을 기다리고 있습니다.',
      'Domestic trips never feel “travel” enough—you want foreign languages, new streets, and local food and culture. You enjoy detailed itineraries and restaurant research done in advance. Tokyo, Bangkok, Paris, and Barcelona are waiting.',
      '国内だとどうしても旅っぽく感じないあなた。言葉も景色も違う世界を味わうのが本当の夏。細かい日程とグルメリサーチを楽しむ徹底派。東京、バンコク、パリ、バルセロナが待っています。',
      '国内总觉得不够“像旅行”——陌生语言、陌生街道、当地饮食与文化才是你心中的真夏天。你爱做详细行程，提前搜好餐厅。东京、曼谷、巴黎、巴塞罗那在等你。',
      '國內總覺得不夠「像旅行」——陌生語言、陌生街道、當地飲食與文化才是你心中的真夏天。你愛做詳細行程，提前搜好餐廳。東京、曼谷、巴黎、巴塞隆納在等你。',
      'Trong nước chưa đủ “xịn”—bạn cần ngôn ngữ lạ, phố phường mới, ẩm thực và văn hóa bản địa. Thích lịch chi tiết và tìm quán trước. Tokyo, Bangkok, Paris, Barcelona đang chờ.',
      'Domestik kurang terasa “travel”—kamu mau bahasa asing, jalan baru, kuliner dan budaya lokal. Suka itinerary rapi dan riset restoran. Tokyo, Bangkok, Paris, Barcelona menunggu.'
    ),
    vacationStyle: L(
      '해외 문화 탐험형 🗺️',
      'International culture explorer type 🗺️',
      '海外文化探索タイプ 🗺️',
      '海外文化探索型 🗺️',
      '海外文化探索型 🗺️',
      'Kiểu khám phá văn hóa nước ngoài 🗺️',
      'Tipe eksplor budaya luar negeri 🗺️'
    ),
    recommendedPlaces: L(
      '도쿄 / 오사카 / 방콕 / 다낭 / 바르셀로나 / 파리',
      'Tokyo / Osaka / Bangkok / Da Nang / Barcelona / Paris',
      '東京 / 大阪 / バンコク / ダナン / バルセロナ / パリ',
      '东京 / 大阪 / 曼谷 / 岘港 / 巴塞罗那 / 巴黎',
      '東京 / 大阪 / 曼谷 / 岘港 / 巴塞隆納 / 巴黎',
      'Tokyo / Osaka / Bangkok / Đà Nẵng / Barcelona / Paris',
      'Tokyo / Osaka / Bangkok / Da Nang / Barcelona / Paris'
    ),
    budgetSense: L(
      '경험에 아낌없이 투자, 비용보다 만족감 우선',
      'Invest in experiences—satisfaction beats cost',
      '体験には惜しまず、費用より満足度優先',
      '为体验舍得花钱，满意比价格优先',
      '為體驗捨得花錢，滿意比價格優先',
      'Ưu tiên trải nghiệm—hài lòng hơn là giá',
      'Invest pengalaman—puas lebih penting dari harga'
    ),
    goodMatch: L(
      '같이 맛집 리서치하고 지도 앱 켜고 다닐 수 있는 사람',
      'Someone who researches food spots and navigates with you',
      '一緒にグルメを調べて地図アプリで歩ける人',
      '能一起搜美食、开着地图到处走的人',
      '能一起搜美食、開著地圖到處走的人',
      'Người cùng tìm quán và bật map đi khắp nơi',
      'Orang yang riset makanan dan jalan pakai maps bareng'
    ),
    badMatch: L(
      '해외에서도 한국 음식만 찾는 사람',
      'Someone who only looks for Korean food abroad',
      '海外でも韓国料理ばかり探す人',
      '到了国外还在只找韩餐的人',
      '到了國外還在只找韓餐的人',
      'Ra nước ngoài mà chỉ tìm đồ Hàn',
      'Di luar negeri tetap cari makanan Korea saja'
    ),
  },
  {
    type: 'Type6',
    emoji: '🎒',
    title: L(
      '완벽한 즉흥파, 가방 하나 메고 떠나는 자유 여행러',
      'Pure spontaneity—one bag and go, free traveler',
      '完全即興派、リュック一つで出発する自由旅派',
      '彻底即兴派，背包就走自由旅人',
      '徹底即興派，背包就走自由旅人',
      'Hoàn toàn tự phát—một balo là đi',
      'Spontan total—satu tas lalu jalan'
    ),
    shortDescription: L(
      '계획 없이 떠나는 것이 진짜 여행입니다.',
      'Leaving without a fixed plan is real travel.',
      '計画なしに出るのが本当の旅。',
      '没有固定计划就出发，才是真正的旅行。',
      '沒有固定計畫就出發，才是真正的旅行。',
      'Không kế hoạch cố định mới là du lịch thật.',
      'Berangkat tanpa rencana kaku—itulah traveling sesungguhnya.'
    ),
    description: L(
      '목적지도, 숙소도, 일정도 딱히 정하지 않는 당신. 발길 닿는 대로, 마음 가는 대로 움직이는 완전 자유 여행 스타일입니다. 어디가 됐든 처음 보는 풍경 앞에서 탄성이 나오는 순간이 여행의 전부입니다. 혼자 혹은 마음 잘 맞는 한 사람과 배낭 하나 메고 훌쩍 떠나는 여름이 당신에게 딱입니다.',
      'You barely lock in destination, lodging, or schedule—you move wherever your feet and mood take you. The whole trip is that “wow” moment in front of a new view. Summer with one backpack, solo or with one kindred soul, is perfect for you.',
      '行き先も宿も日程もあまり決めないあなた。足の向くまま、気の向くまま。どこでも初めての景色の前で「わあ」となる瞬間が旅のすべて。リュック一つで、一人か心が合う一人と飛び出す夏がぴったり。',
      '你不太锁定目的地、住宿和行程——随脚步和心情走。旅行就是站在陌生风景前脱口“哇”的瞬间。一个人或和一个合拍的人，背着包说走就走的夏天最适合你。',
      '你不太鎖定目的地、住宿和行程——隨腳步和心情走。旅行就是站在陌生風景前脫口「哇」的瞬間。一個人或和一個合拍的人，背著包說走就走的夏天最適合你。',
      'Bạn ít khi chốt đích, chỗ ở hay lịch—đi theo chân và cảm giác. Cả chuyến là khoảnh khắc “wow” trước cảnh lạ. Mùa hè một balo, đi một mình hoặc với một người hợp gu là nhất.',
      'Jarang patok tujuan, penginapan, jadwal—ikut langkah dan mood. Perjalanan adalah momen “wow” di depan pemandangan baru. Musim panas dengan satu tas, sendiri atau satu orang yang cocok—pas untukmu.'
    ),
    vacationStyle: L(
      '완전 자유 즉흥형 🌏',
      'Total freedom & spontaneity type 🌏',
      '完全フリー即興タイプ 🌏',
      '完全自由即兴型 🌏',
      '完全自由即興型 🌏',
      'Tự do & tự phát hoàn toàn 🌏',
      'Bebas & spontan total 🌏'
    ),
    recommendedPlaces: L(
      '정해두지 말고 그냥 떠나기 / 유럽 배낭여행 / 동남아 자유 여행',
      'Just go without deciding / Backpacking Europe / Free travel in Southeast Asia',
      '決めずにとにかく出る / ヨーロッパバックパック / 東南アジア自由旅行',
      '不设定目的地就出发 / 欧洲背包游 / 东南亚自由行',
      '不設定目的地就出發 / 歐洲背包遊 / 東南亞自由行',
      'Không cần chốt—cứ đi / Backpack châu Âu / Tự do Đông Nam Á',
      'Tanpa patokan—langsung berangkat / Backpack Eropa / bebas Asia Tenggara'
    ),
    budgetSense: L(
      '상황에 따라 유연하게, 경험이 최우선',
      'Flexible by situation—experiences come first',
      '状況に応じて柔軟に、体験が最優先',
      '随情况灵活调整，体验优先',
      '隨情況靈活調整，體驗優先',
      'Linh hoạt theo tình huống—trải nghiệm là nhất',
      'Fleksibel sesuai situasi—pengalaman nomor satu'
    ),
    goodMatch: L(
      '그래 어디든 가자를 외칠 수 있는 사람 혹은 혼자',
      'Someone who says “Sure, anywhere—let us go”—or going solo',
      '「よし、どこでも行こう」と言える人、または一人旅',
      '能说“好啊去哪都行”的人，或独自出发',
      '能說「好啊去哪都行」的人，或獨自出發',
      'Người nói “Được, đi đâu cũng được”—hoặc đi một mình',
      'Orang yang bilang “Ayo, ke mana saja”—atau solo'
    ),
    badMatch: L(
      '숙소 예약 안 했다는 말에 패닉 오는 사람',
      'Someone who panics when they hear you did not book lodging',
      '「宿泊予約してない」でパニックになる人',
      '听到没订住宿就崩溃的人',
      '聽到沒訂住宿就崩潰的人',
      'Người hoảng khi nghe chưa book chỗ ở',
      'Orang panik begitu dengar belum booking penginapan'
    ),
  },
];

export function calculatePhase3SummerVacationTypeResult(answers: number[]): string {
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
  return 'Type1';
}
