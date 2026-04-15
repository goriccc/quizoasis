/** 나의 솔로 탈출 가능성 분석기 — 12문항 4지선다, A=0 B=1 C=2 D=3, 총점 0~36, 6유형. 7개 언어. */

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

function opt(
  score: number,
  ko: string,
  en: string,
  ja: string,
  zhCN: string,
  zhTW: string,
  vi: string,
  id: string
) {
  return { score, text: M(ko, en, ja, zhCN, zhTW, vi, id) };
}

export interface Phase3SoloEscapePossibilityQuestion {
  id: number;
  question: Record<string, string>;
  options: { text: Record<string, string>; score: number }[];
}

export interface Phase3SoloEscapePossibilityResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  currentStatus: Record<string, string>;
  realReason: Record<string, string>;
  prescription: Record<string, string>;
  escapeTiming: Record<string, string>;
  goodMatch: Record<string, string>;
  trapToAvoid: Record<string, string>;
  sharePercent: number;
  shareTypeName: Record<string, string>;
}

export function calculatePhase3SoloEscapePossibilityResult(scores: number[]): string {
  const total = scores.reduce((a, b) => a + (b ?? 0), 0);
  if (total <= 5) return 'Type1';
  if (total <= 11) return 'Type2';
  if (total <= 19) return 'Type3';
  if (total <= 27) return 'Type4';
  if (total <= 33) return 'Type5';
  return 'Type6';
}

export const phase3SoloEscapePossibilityQuestions: Phase3SoloEscapePossibilityQuestion[] = [
  {
    id: 1,
    question: M(
      '일주일 중 집 밖으로 나가는 빈도는?',
      'How often do you go out in a week?',
      '一週間のうち、外に出る頻度は？',
      '你一周外出的频率是？',
      '你ㄧ週外出的頻率是？',
      'Trong một tuần, bạn ra ngoài bao nhiêu lần?',
      'Seberapa sering kamu keluar rumah dalam seminggu?'
    ),
    options: [
      opt(
        0,
        '거의 매일. 다양한 곳에서 다양한 사람을 만난다',
        'Almost every day—I meet different people in different places.',
        'ほぼ毎日。いろいろな場所でいろいろな人に会う。',
        '几乎每天，在不同地方见不同的人。',
        '幾乎每天，在不同地方見不同的人。',
        'Gần như mỗi ngày—gặp nhiều người ở nhiều nơi.',
        'Hampir setiap hari—bertemu banyak orang di banyak tempat.'
      ),
      opt(
        1,
        '주 3~4회. 주로 회사나 학교, 약속 장소 정도',
        '3–4 times a week—mostly work, school, or planned meetups.',
        '週3〜4回。主に会社・学校・約束の場所くらい。',
        '一周三四次，多半是公司、学校或约会地点。',
        '一週三四次，多半是公司、學校或約會地點。',
        '3–4 lần/tuần—chủ yếu công ty, trường hoặc chỗ hẹn.',
        '3–4 kali seminggu—biasanya kerja, sekolah, atau janjian.'
      ),
      opt(
        2,
        '주 1~2회. 필요할 때만 나가고 집에 있는 게 편하다',
        '1–2 times a week—I only go out when needed; home feels easier.',
        '週1〜2回。必要なときだけ。家が楽。',
        '一周一两次，有需要才出门，在家更舒服。',
        '一週一兩次，有需要才出門，在家更舒服。',
        '1–2 lần/tuần—chỉ ra khi cần; ở nhà thoải mái hơn.',
        '1–2 kali seminggu—keluar kalau perlu; di rumah lebih nyaman.'
      ),
      opt(
        3,
        '거의 안 나간다. 배달과 인터넷 쇼핑으로 해결 가능하다',
        'Rarely go out—delivery and online shopping cover most needs.',
        'ほとんど出ない。配達とネットで済む。',
        '几乎不出门，外卖和网购就能搞定。',
        '幾乎不出門，外送和網購就能搞定。',
        'Hiếm khi ra ngoài—đồ ăn và mua sắm online là đủ.',
        'Jarang keluar—pesan antar dan belanja online sudah cukup.'
      ),
    ],
  },
  {
    id: 2,
    question: M(
      '새로운 사람을 만날 수 있는 활동을 하고 있나요?',
      'Do you do activities where you can meet new people?',
      '新しい人に会える活動をしていますか？',
      '你有参加能认识新的人的活动吗？',
      '你有參加能認識新的人的活動嗎？',
      'Bạn có tham gia hoạt động nào để gặp người mới không?',
      'Apakah kamu ikut aktivitas yang bisa bertemu orang baru?'
    ),
    options: [
      opt(
        0,
        '동호회, 스터디, 모임 등 새로운 사람을 만나는 활동을 적극적으로 한다',
        'Yes—clubs, study groups, meetups; I actively seek new circles.',
        'はい。サークル、勉強会、交流会など積極的に。',
        '有，社团、读书会、聚会等，会积极参加。',
        '有，社團、讀書會、聚會等，會積極參加。',
        'Có—câu lạc bộ, nhóm học, offline; chủ động tìm người mới.',
        'Ya—klub, grup belajar, arisan; aktif cari lingkungan baru.'
      ),
      opt(
        1,
        '회사나 학교 외에 가끔 새로운 자리에 나가긴 한다',
        'Sometimes, outside work or school, I show up to new gatherings.',
        '会社・学校以外ではたまに新しい場に出る。',
        '除了公司或学校，偶尔会去新场合。',
        '除了公司或學校，偶爾會去新場合。',
        'Thỉnh thoảng, ngoài công ty/trường, vẫn đến chỗ mới.',
        'Kadang, di luar kerja/sekolah, ikut acara baru.'
      ),
      opt(
        2,
        '아는 사람들끼리만 주로 만나고 새로운 만남은 거의 없다',
        'Mostly the same friends—almost no new faces.',
        'だいたい顔見知り同士。新しい出会いはほぼない。',
        '多半只跟熟人聚，几乎没有新面孔。',
        '多半只跟熟人聚，幾乎沒有新面孔。',
        'Chủ yếu quen cũ—gần như không gặp người mới.',
        'Mayorannya teman lama—jarang ketemu orang baru.'
      ),
      opt(
        3,
        '새로운 사람 만나는 게 귀찮거나 불편해서 의도적으로 피하는 편이다',
        'Meeting new people feels tiring or awkward—I avoid it on purpose.',
        '新しい人は面倒・気まずいので、わざと避ける。',
        '认识新人很累或很尬，会刻意回避。',
        '認識新人很累或很尷尬，會刻意回避。',
        'Gặp người mới mệt/khó chịu—cố tình tránh.',
        'Bertemu orang baru melelahkan/canggung—sengaja menghindar.'
      ),
    ],
  },
  {
    id: 3,
    question: M(
      '요즘 이성을 만날 기회가 얼마나 있나요?',
      'How often do you get chances to meet potential partners?',
      '最近、異性に会うチャンスはどのくらいありますか？',
      '最近你有多少机会认识异性？',
      '最近你有多少機會認識異性？',
      'Dạo này bạn có bao nhiêu cơ hội gặp người khác giới?',
      'Belakangan ini seberapa sering ada kesempatan ketemu lawan jenis?'
    ),
    options: [
      opt(
        0,
        '꽤 있다. 일상에서 자연스럽게 이성을 접할 기회가 있다',
        'Quite a lot—I naturally cross paths with people in daily life.',
        '結構ある。日常で自然に異性と接する。',
        '挺多的，日常生活里会自然遇到异性。',
        '挺多的，日常生活裡會自然遇到異性。',
        'Khá nhiều—trong đời thường vẫn gặp tự nhiên.',
        'Cukup sering—di kehidupan sehari-hari sering ketemu.'
      ),
      opt(
        1,
        '가끔 있지만 연결로 이어지진 않는다',
        'Sometimes, but it never turns into a real connection.',
        'たまにあるが、続かない。',
        '偶尔有，但很难发展成关系。',
        '偶爾有，但很難發展成關係。',
        'Thỉnh thoảng có nhưng không thành mối quan hệ.',
        'Kadang ada tapi tidak berlanjut.'
      ),
      opt(
        2,
        '거의 없다. 주변이 다 아는 사람들이다',
        'Almost none—everyone around me is already familiar.',
        'ほぼない。周りは顔見知りばかり。',
        '几乎没有，周围都是熟人。',
        '幾乎沒有，周圍都是熟人。',
        'Gần như không—xung quanh toàn người quen.',
        'Hampir tidak—sekelilingnya orang yang sudah dikenal.'
      ),
      opt(
        3,
        '전혀 없다. 이성이라고는 TV 속 사람들뿐이다',
        'None at all—the only “opposite sex” I see is on a screen.',
        'まったくない。異性はテレビの中の人だけ。',
        '完全没有，异性只存在于电视里。',
        '完全沒有，異性只存在於電視裡。',
        'Không hề—chỉ thấy trên TV.',
        'Sama sekali tidak—cuma di layar TV.'
      ),
    ],
  },
  {
    id: 4,
    question: M(
      '처음 만난 사람과 대화할 때 나는?',
      'When talking to someone you just met, you tend to—',
      '初対面の人と話すとき、あなたは？',
      '和刚认识的人聊天时，你会？',
      '和剛認識的人聊天時，你會？',
      'Khi nói chuyện với người mới quen, bạn thường—',
      'Saat ngobrol dengan orang baru, kamu cenderung—'
    ),
    options: [
      opt(
        0,
        '자연스럽게 대화를 이어가고 분위기를 편하게 만드는 편이다',
        'Keep the chat flowing and make the vibe comfortable.',
        '自然に会話を続け、空気を和らげる。',
        '能自然接话，把气氛弄轻松。',
        '能自然接話，把氣氛弄輕鬆。',
        'Duy trì hội thoại và làm không khí dễ chịu.',
        'Lancar ngobrol dan membuat suasana nyaman.'
      ),
      opt(
        1,
        '처음엔 어색하지만 조금 지나면 괜찮아진다',
        'Awkward at first, but I settle in after a bit.',
        '最初はぎこちないが、少ししたら大丈夫。',
        '一开始有点尬，过一会儿就好。',
        '一開始有點尷尬，過一會兒就好。',
        'Lúc đầu ngượng, một lúc sau ổn hơn.',
        'Awalnya canggung, lama-lama lebih oke.'
      ),
      opt(
        2,
        '수동적인 편이다. 상대가 먼저 말 걸어주길 기다린다',
        'Pretty passive—I wait for them to speak first.',
        '受け身。相手から話しかけられるのを待つ。',
        '偏被动，等对方先开口。',
        '偏被動，等對方先開口。',
        'Thụ động—chờ đối phương chủ động trước.',
        'Pasif—menunggu lawan bicara duluan.'
      ),
      opt(
        3,
        '낯선 사람과의 대화가 매우 불편하고 빨리 끝내고 싶다',
        'Small talk with strangers feels painful—I want it over fast.',
        '初対面の会話は苦手。早く終わらせたい。',
        '和陌生人聊天很难受，想快点结束。',
        '和陌生人聊天很難受，想快點結束。',
        'Nói chuyện người lạ rất khó chịu—muốn kết thúc sớm.',
        'Ngobrol dengan orang asing sangat tidak nyaman—ingin cepat selesai.'
      ),
    ],
  },
  {
    id: 5,
    question: M(
      '마음에 드는 이성이 생겼을 때 나의 행동은?',
      'When you like someone, what do you usually do?',
      '気になる異性ができたとき、あなたの行動は？',
      '当你对某个异性有好感时，你的行动是？',
      '當你對某個異性有好感時，你的行動是？',
      'Khi thích ai đó, bạn thường làm gì?',
      'Kalau suka seseorang, biasanya kamu—'
    ),
    options: [
      opt(
        0,
        '자연스럽게 먼저 말을 걸거나 연락처를 물어볼 수 있다',
        'I can naturally start a chat or ask for contact info.',
        '自然に話しかけたり、連絡先を聞けたりする。',
        '能自然搭话或要联系方式。',
        '能自然搭話或要聯絡方式。',
        'Tự nhiên bắt chuyện hoặc xin liên lạc.',
        'Bisa mulai ngobrol atau minta kontak dengan natural.'
      ),
      opt(
        1,
        '기회를 보다가 타이밍이 맞으면 용기를 낸다',
        'I wait for the right moment, then try to make a move.',
        'タイミングを見て、勇気を出す。',
        '等时机对了再鼓起勇气。',
        '等時機對了再鼓起勇氣。',
        'Chờ thời điểm rồi mới thử tiến tới.',
        'Tunjuk waktu yang pas lalu beranikan diri.'
      ),
      opt(
        2,
        '마음속으로만 좋아하다가 기회를 놓치는 경우가 많다',
        'I only crush in silence and often miss the window.',
        '心の中だけ。チャンスを逃すことが多い。',
        '只敢在心里喜欢，常常错过机会。',
        '只敢在心裡喜歡，常常錯過機會。',
        'Chỉ thích trong đầu—hay bỏ lỡ cơ hội.',
        'Cuma naksir diam-diam—sering kelewatan momen.'
      ),
      opt(
        3,
        '어떻게 해야 할지 모르겠어서 그냥 아무것도 안 한다',
        'I freeze—I do not know what to do, so I do nothing.',
        'どうしていいか分からず、何もしない。',
        '不知道该怎么办，就什么都不做。',
        '不知道該怎麼辦，就什麼都不做。',
        'Không biết làm gì nên không làm gì cả.',
        'Bingung harus apa—jadi tidak melakukan apa-apa.'
      ),
    ],
  },
  {
    id: 6,
    question: M(
      '소개팅이나 미팅 제안이 들어왔을 때 나는?',
      'When someone suggests a blind date or group date, you—',
      '合コンやお見合いの誘いが来たら、あなたは？',
      '有人约相亲或联谊时，你会？',
      '有人約相親或聯誼時，你會？',
      'Khi được rủ hẹn hò giới thiệu hoặc nhóm, bạn—',
      'Kalau diajak kencan buta atau arisan kenalan, kamu—'
    ),
    options: [
      opt(
        0,
        '일단 나가본다. 안 맞아도 경험이 된다',
        'I go anyway—even a mismatch is experience.',
        'とりあえず行く。合わなくても経験。',
        '先去看看，不合适也算经验。',
        '先去看看，不合適也算經驗。',
        'Vẫn đi—không hợp cũng là trải nghiệm.',
        'Tetap datang—tidak cocok pun pengalaman.'
      ),
      opt(
        1,
        '상대 정보를 조금 듣고 괜찮으면 나간다',
        'I hear a bit about them; if it sounds okay, I go.',
        '少し情報を聞いて、良さそうなら行く。',
        '先听一点对方信息，觉得还行就去。',
        '先聽一點對方資訊，覺得還行就去。',
        'Nghe sơ qua—ổn thì đi.',
        'Dengar sedikit—kalau oke baru pergi.'
      ),
      opt(
        2,
        '고민을 많이 하다가 결국 안 나가는 경우가 많다',
        'I overthink for ages and often end up not going.',
        '悩みすぎて、結局行かないことが多い。',
        '纠结很久，最后常常没去。',
        '糾結很久，最後常常沒去。',
        'Nghĩ quá lâu rồi thường không đi.',
        'Overthinking lalu seringnya tidak jadi pergi.'
      ),
      opt(
        3,
        '거절한다. 소개팅 자체가 불편하거나 의미 없다고 생각한다',
        'I decline—I find blind dates uncomfortable or pointless.',
        '断る。合コン自体が苦手か意味がないと思う。',
        '拒绝，觉得相亲本身很尬或没意义。',
        '拒絕，覺得相親本身很尷尬或沒意義。',
        'Từ chối—thấy hẹn hò kiểu này khó chịu hoặc vô nghĩa.',
        'Menolak—kencan buta terasa canggung atau tidak berguna.'
      ),
    ],
  },
  {
    id: 7,
    question: M(
      '데이팅 앱이나 온라인 만남에 대해 나는?',
      'How do you feel about dating apps or meeting people online?',
      'マッチングアプリやオンライン出会いについて、あなたは？',
      '对交友软件或线上认识异性，你的态度是？',
      '對交友軟體或線上認識異性，你的態度是？',
      'Bạn nghĩ sao về app hẹn hò hoặc quen online?',
      'Bagaimana pandanganmu soal aplikasi kencan atau kenalan online?'
    ),
    options: [
      opt(
        0,
        '이미 쓰고 있거나 적극적으로 활용할 의향이 있다',
        'Already using them—or I would use them actively.',
        'すでに使っている、または積極的に使う意向がある。',
        '已经在用，或愿意积极使用。',
        '已經在用，或願意積極使用。',
        'Đang dùng hoặc sẵn sàng dùng tích cực.',
        'Sudah pakai atau bersedia pakai secara aktif.'
      ),
      opt(
        1,
        '써볼까 하는 생각은 있지만 아직 망설이고 있다',
        'I have thought about it, but I am still hesitating.',
        '使ってみようかと思うが、まだ迷っている。',
        '想过要试，但还在犹豫。',
        '想過要試，但還在猶豫。',
        'Có ý định nhưng vẫn do dự.',
        'Tertarik coba tapi masih ragu.'
      ),
      opt(
        2,
        '좀 꺼려지지만 상황에 따라 할 수도 있을 것 같다',
        'A bit reluctant, but I might try depending on the situation.',
        '少し抵抗はあるが、状況次第ではあり得る。',
        '有点排斥，但视情况也可能尝试。',
        '有點排斥，但視情況也可能嘗試。',
        'Hơi ngại nhưng tùy tình huống có thể thử.',
        'Agak enggan tapi tergantung situasi bisa dicoba.'
      ),
      opt(
        3,
        '절대 안 한다. 그런 방식은 맞지 않는다',
        'Never—that style is not for me.',
        '絶対にしない。その方式は合わない。',
        '绝对不会，那种方式不适合我。',
        '絕對不會，那種方式不適合我。',
        'Không bao giờ—cách đó không hợp với mình.',
        'Tidak akan—cara itu tidak cocok untukku.'
      ),
    ],
  },
  {
    id: 8,
    question: M(
      '평소 외출 시 외모 관리를 어느 정도 하나요?',
      'How much do you care about your looks when you go out?',
      '普段、外出時の身だしなみはどのくらい？',
      '平时出门时，你多在意仪容？',
      '平時出門時，你多在意儀容？',
      'Khi ra ngoài, bạn chăm sóc ngoại hình đến mức nào?',
      'Saat keluar rumah, seberapa kamu merawat penampilan?'
    ),
    options: [
      opt(
        0,
        '항상 신경 쓴다. 어디를 가도 나름대로 꾸미고 나간다',
        'I always put effort in—I dress up for wherever I go.',
        'いつも気にする。どこへ行くにもある程度整える。',
        '都会注意，去哪都会稍微打扮。',
        '都會注意，去哪都會稍微打扮。',
        'Luôn chỉn chu—đi đâu cũng cố gắng ăn mặc.',
        'Selalu diurus—ke mana pun tetap berpenampilan.'
      ),
      opt(
        1,
        '중요한 자리엔 신경 쓰고, 평소엔 편한 정도로 한다',
        'I dress up for important occasions; usually I keep it casual.',
        '大事な場は気を遣う。普段はラク。',
        '重要场合会讲究，平常就舒服为主。',
        '重要場合會講究，平常就舒服為主。',
        'Dịp quan trọng thì chỉn chu; thường ngày thoải mái.',
        'Acara penting rapi; sehari-hari santai.'
      ),
      opt(
        2,
        '그냥 깨끗한 정도. 특별히 꾸미진 않는다',
        'Clean is enough—I do not really style myself.',
        '清潔ならOK。特にコーデはしない。',
        '干净就行，不会特别打扮。',
        '乾淨就行，不會特別打扮。',
        'Chỉ cần sạch—không makeup nhiều.',
        'Cukup bersih—tidak terlalu styling.'
      ),
      opt(
        3,
        '씻고 나가면 된 거 아닌가. 외모 관리에 거의 신경 안 쓴다',
        'Shower and go—I barely think about grooming.',
        '洗えばいい。ほぼ無頓着。',
        '洗了澡就能出门，几乎不管外表。',
        '洗了澡就能出門，幾乎不管外表。',
        'Tắm là đủ—gần như không quan tâm ngoại hình.',
        'Mandi sudah cukup—hampir tidak peduli grooming.'
      ),
    ],
  },
  {
    id: 9,
    question: M(
      '지금 내 몸 상태나 건강 관리 수준은?',
      'How would you rate your body and health habits right now?',
      '今の体の状態・健康管理レベルは？',
      '你现在的身体状态和健康习惯如何？',
      '你現在的身體狀態和健康習慣如何？',
      'Mức độ chăm sóc sức khỏe và cơ thể hiện tại của bạn?',
      'Bagaimana kebiasaan kesehatan dan kondisi tubuhmu sekarang?'
    ),
    options: [
      opt(
        0,
        '운동도 하고 식단도 관리하는 편이다',
        'I exercise and watch what I eat.',
        '運動も食事管理もしている。',
        '有运动，也会控制饮食。',
        '有運動，也會控制飲食。',
        'Tập luyện và ăn uống có kiểm soát.',
        'Olahraga dan pola makan terjaga.'
      ),
      opt(
        1,
        '가끔 운동하고 크게 신경 쓰지는 않는다',
        'I work out sometimes, but I do not stress over it.',
        'たまに運動。そこまで気にしない。',
        '偶尔动动，不会太在意。',
        '偶爾動動，不會太在意。',
        'Thỉnh thoảng tập—không quá khắt khe.',
        'Kadang olahraga—tidak terlalu diperhitungkan.'
      ),
      opt(
        2,
        '거의 안 한다. 움직이기 귀찮다',
        'Rarely—I find moving around a hassle.',
        'ほぼしない。動くのが面倒。',
        '几乎不动，觉得动起来很麻烦。',
        '幾乎不動，覺得動起來很麻煩。',
        'Hiếm khi—lười vận động.',
        'Jarang gerak—malas bergerak.'
      ),
      opt(
        3,
        '건강 관리? 내일부터 하려고 했는데 오늘도 못 했다',
        'Health habits? I will start tomorrow—same as yesterday.',
        '健康管理？明日から…で今日もできず。',
        '健康管理？说明天开始，今天也没做到。',
        '健康管理？說明天開始，今天也沒做到。',
        'Sức khỏe? Định mai bắt đầu—hôm nay vẫn chưa.',
        'Sehat? Mau mulai besok—hari ini juga belum.'
      ),
    ],
  },
  {
    id: 10,
    question: M(
      '요즘 내 옷차림과 스타일에 대한 솔직한 평가는?',
      'Be honest—how do you feel about your clothes and style lately?',
      '最近の服装・スタイルを正直に評価すると？',
      '老实说，你最近对自己的穿搭和风格怎么看？',
      '老實說，你最近對自己的穿搭和風格怎麼看？',
      'Thật lòng mà nói, gần đây bạn thấy phong cách ăn mặc thế nào?',
      'Jujur—bagaimana menurutmu soal gaya berpakaianmu belakangan ini?'
    ),
    options: [
      opt(
        0,
        '트렌드도 어느 정도 반영하고 나름 신경 쓰는 편이다',
        'I follow trends a bit and put some care into outfits.',
        'トレンドも少し取り入れ、ある程度気を遣う。',
        '会跟一点流行，穿搭有用心。',
        '會跟一點流行，穿搭有用心。',
        'Có theo trend nhẹ—chăm chỉnh trang.',
        'Ikut tren sedikit—masih peduli outfit.'
      ),
      opt(
        1,
        '깔끔하고 단정한 편이지만 특별히 멋있진 않다',
        'Neat and tidy, but nothing flashy.',
        '清潔・整っているが、特別おしゃれではない。',
        '整洁利落，但不算特别时髦。',
        '整潔俐落，但不算特別時髦。',
        'Gọn gàng sạch sẽ—không quá nổi bật.',
        'Rapi bersih—tidak terlalu stylish.'
      ),
      opt(
        2,
        '편한 것 위주라 외출복과 집옷의 경계가 모호하다',
        'Comfort first—home clothes and “going out” blur together.',
        '楽さ優先。外出服と部屋着の境界が曖昧。',
        '舒服为主，出门服和家居服界线模糊。',
        '舒服為主，出門服和家居服界線模糊。',
        'Thoải mái trước—đồ ra đường và ở nhà gần giống nhau.',
        'Nyaman dulu—baju keluar dan di rumah nyaris sama.'
      ),
      opt(
        3,
        '5년째 같은 옷을 입고 있어도 크게 불편함이 없다',
        'I have worn the same stuff for years and I am fine with it.',
        '何年も同じ服でも平気。',
        '同一件衣服穿好几年也不觉得有问题。',
        '同一件衣服穿好幾年也不覺得有問題。',
        'Mặc đồ cũ nhiều năm vẫn không sao.',
        'Pakai baju yang sama bertahun-tahun—tidak masalah.'
      ),
    ],
  },
  {
    id: 11,
    question: M(
      '지금 연애에 대한 나의 솔직한 마음은?',
      'How do you honestly feel about dating right now?',
      '今、恋愛について本音を言うと？',
      '关于恋爱，你现在的心里话是？',
      '關於戀愛，你現在的心裡話是？',
      'Thật lòng thì bạn đang nghĩ gì về chuyện yêu đương?',
      'Secara jujur, bagaimana perasaanmu tentang pacaran sekarang?'
    ),
    options: [
      opt(
        0,
        '진짜 하고 싶다. 적극적으로 기회를 만들고 있다',
        'I really want it—I am actively creating chances.',
        '本当にしたい。積極的にチャンスを作っている。',
        '真的想谈，正在主动创造机会。',
        '真的想談，正在主動創造機會。',
        'Rất muốn—đang chủ động tạo cơ hội.',
        'Benar-benar ingin—aktif cari kesempatan.'
      ),
      opt(
        1,
        '하고 싶긴 한데 딱히 적극적으로 움직이고 있진 않다',
        'I want it, but I am not really moving on it.',
        'したい気はあるが、積極的ではない。',
        '想归想，但没有很积极行动。',
        '想歸想，但沒有很積極行動。',
        'Có muốn nhưng không chủ động lắm.',
        'Mau sih tapi tidak terlalu aktif.'
      ),
      opt(
        2,
        '하면 좋겠지만 혼자도 나쁘지 않아서 크게 애쓰고 싶지 않다',
        'Nice if it happens, but solo life is okay—I will not push.',
        'あればいいが、一人も悪くない。無理はしたくない。',
        '有也好，一个人也不错，不想太用力。',
        '有也好，一個人也不錯，不想太用力。',
        'Có thì tốt—ở một mình cũng ổn; không cố quá.',
        'Kalau ada ya bagus—sendiri juga oke; tidak mau memaksakan.'
      ),
      opt(
        3,
        '솔직히 지금은 연애할 준비가 안 된 것 같다',
        'Honestly, I do not feel ready to date.',
        '正直、今は恋愛の準備ができていない。',
        '老实说，我现在好像还没准备好恋爱。',
        '老實說，我現在好像還沒準備好戀愛。',
        'Thật ra mình chưa sẵn sàng yêu.',
        'Sejujurnya belum siap untuk pacaran.'
      ),
    ],
  },
  {
    id: 12,
    question: M(
      '마지막으로, 지금 내 삶에서 연애의 우선순위는?',
      'Last question—how high is dating on your priority list right now?',
      '最後に、今の人生で恋愛の優先度は？',
      '最后，恋爱在你现在的生活里排第几？',
      '最後，戀愛在你現在的生活裡排第幾？',
      'Cuối cùng, mức độ ưu tiên của chuyện yêu trong cuộc sống hiện tại?',
      'Terakhir—seberapa prioritas pacaran dalam hidupmu sekarang?'
    ),
    options: [
      opt(
        0,
        '높다. 올해 안에 꼭 연애를 시작하고 싶다',
        'High—I want to start dating within this year.',
        '高い。今年中に始めたい。',
        '很高，今年内一定要开始一段恋爱。',
        '很高，今年內一定要開始一段戀愛。',
        'Cao—muốn bắt đầu yêu trong năm nay.',
        'Tinggi—ingin mulai pacaran tahun ini.'
      ),
      opt(
        1,
        '중간이다. 되면 좋고 안 되면 어쩔 수 없다',
        'Middle—nice if it happens, fine if it does not.',
        '中くらい。あればラッキー。',
        '中等，有也好没有也罢。',
        '中等，有也好沒有也罷。',
        'Trung bình—có thì tốt, không cũng được.',
        'Sedang—kalau ada ya bagus, tidak apa-apa.'
      ),
      opt(
        2,
        '낮다. 다른 것들이 더 바쁘고 중요하다',
        'Low—other things keep me busier and matter more.',
        '低い。他のことが忙しくて大事。',
        '偏低，别的事更忙更重要。',
        '偏低，別的事更忙更重要。',
        'Thấp—việc khác bận và quan trọng hơn.',
        'Rendah—hal lain lebih sibuk dan penting.'
      ),
      opt(
        3,
        '없다. 지금 당장 연애는 생각도 없다',
        'None—I am not even thinking about dating now.',
        'なし。今は恋愛の予定ゼロ。',
        '没有，现在完全没想谈恋爱。',
        '沒有，現在完全沒想談戀愛。',
        'Không—hiện không nghĩ đến yêu đương.',
        'Tidak sama sekali—tidak memikirkan pacaran.'
      ),
    ],
  },
];

export const phase3SoloEscapePossibilityResults: Phase3SoloEscapePossibilityResult[] = [
  {
    type: 'Type1',
    emoji: '💚',
    title: M(
      '솔로 탈출 가능성 85%, 사실 솔로인 게 신기한 수준 💚 (0~5점)',
      '85% solo escape odds—it is almost surprising you are still single 💚 (0–5 pts)',
      'ソロ脱出可能性85%—まだソロなのが不思議なくらい 💚（0〜5点）',
      '脱单可能性 85%，你还单身其实有点意外 💚（0~5 分）',
      '脫單可能性 85%，你還單身其實有點意外 💚（0~5 分）',
      '85% cơ hội thoát ế—vẫn độc thân hơi bất ngờ 💚 (0–5 điểm)',
      'Peluang lolos jomblo 85%—masih jomblo agak mengejutkan 💚 (0–5 poin)'
    ),
    shortDescription: M(
      '분석 결과, 당신이 아직 솔로인 건 솔직히 좀 의아합니다.',
      'Honestly, it is a little puzzling you are still single.',
      '正直、まだソロなのは少し不思議です。',
      '说实话，你还单身有点让人意外。',
      '說實話，你還單身有點讓人意外。',
      'Thật lòng mà nói, vẫn độc thân hơi khó hiểu.',
      'Sejujurnya, masih jomblo agak membingungkan.'
    ),
    description: M(
      '생활 반경도 넓고, 새로운 사람을 만날 기회도 있고, 외모 관리도 하고, 소통 능력도 갖추고 있습니다. 객관적인 조건은 이미 충분히 갖춰져 있는 상태입니다. 지금 솔로인 이유는 아직 인연을 못 만난 것이지, 당신에게 문제가 있어서가 아닙니다. 조금만 더 적극적으로 기회를 만들면 가능성이 매우 높습니다.',
      'You have a wide social radius, chances to meet people, grooming habits, and communication skills. On paper you are already set. Being single now is more about timing and luck—not because something is “wrong” with you. Push a little harder on opportunities and your odds jump fast.',
      '生活圏も広く、出会いもあり、身だしなみもコミュ力も揃っています。客観的には十分な状態です。今ソロなのはまだ縁に出会っていないからで、あなたのせいではありません。もう一歩だけ積極的にチャンスを作れば可能性はとても高いです。',
      '社交圈够广、有认识人的机会、会打理外表、也会沟通。客观条件已经够好了。现在还单身多半是缘分和时机，不是你不够好。再主动一点创造机会，可能性会很高。',
      '社交圈夠廣、有認識人的機會、會打理外表、也會溝通。客觀條件已經夠好了。現在還單身多半是緣分和時機，不是你不够好。再主動一點創造機會，可能性會很高。',
      'Bạn có vòng xã hội, cơ hội gặp người mới, chăm ngoại hình và giao tiếp tốt. Khách quan mà nói bạn đã đủ điều kiện. Độc thân giờ nhiều khi là thời điểm và may mắn—không phải vì bạn “có vấn đề”. Chủ động thêm một chút là tỉ lệ tăng mạnh.',
      'Kamu punya lingkaran sosial, kesempatan bertemu orang, perawatan diri, dan komunikasi. Secara objektif sudah cukup. Masih jomblo sekarang lebih ke timing dan keberuntungan—bukan karena kamu “salah”. Lebih proaktif sedikit, peluang naik cepat.'
    ),
    currentStatus: M(
      '준비 완료. 인연만 기다리는 중',
      'Ready—just waiting for the right connection.',
      '準備OK。あとは縁を待つ段階。',
      '准备就绪，只差缘分。',
      '準備就緒，只差緣分。',
      'Sẵn sàng—chỉ chờ đúng người.',
      'Sudah siap—tinggal menunggu orang yang tepat.'
    ),
    realReason: M(
      '타이밍과 운의 문제. 당신 탓이 아닙니다',
      'Timing and luck—not your fault.',
      'タイミングと運の問題。あなたのせいではありません。',
      '时机和运气的问题，不怪你。',
      '時機和運氣的問題，不怪你。',
      'Thời điểm và may mắn—không phải lỗi của bạn.',
      'Timing dan keberuntungan—bukan salahmu.'
    ),
    prescription: M(
      '지금보다 딱 한 가지만 더. 마음에 드는 사람이 생기면 기다리지 말고 먼저 말을 걸어보세요.',
      'Add just one more habit: when you like someone, do not wait—say hi first.',
      'もう一歩だけ。気になる人ができたら待たずに先に話しかけて。',
      '再多做一件事就好：心动就别等，先开口。',
      '再多做一件事就好：心動就別等，先開口。',
      'Chỉ cần thêm một bước: thích ai thì đừng chờ—chủ động chào trước.',
      'Tambah satu kebiasaan: kalau suka seseorang, jangan nunggu—sapa dulu.'
    ),
    escapeTiming: M(
      '적극적으로 움직이면 3개월 이내',
      'If you move actively—within about 3 months.',
      '積極的に動けば3か月以内。',
      '若积极行动，大约三个月内。',
      '若積極行動，大約三個月內。',
      'Nếu chủ động—trong khoảng 3 tháng.',
      'Kalau proaktif—sekitar 3 bulan.'
    ),
    goodMatch: M(
      'Type 2 (비슷한 준비도로 서로 자극이 됨)',
      'Type 2 (Similar readiness—you energize each other)',
      'Type 2（似た準備度でお互いを刺激し合える）',
      'Type 2（准备度相近，能互相带动）',
      'Type 2（準備度相近，能互相帶動）',
      'Type 2 (Mức “sẵn sàng” tương đương—thúc đẩy nhau)',
      'Type 2 (Kesiapan mirip—saling menyemangati)'
    ),
    trapToAvoid: M(
      '너무 기준을 높여서 기회를 흘려보내는 것',
      'Letting chances slip because the bar is unrealistically high.',
      '基準が高すぎてチャンスを逃すこと。',
      '标准太高，把机会都放走。',
      '標準太高，把機會都放走。',
      'Đặt tiêu chuẩn quá cao rồi lỡ mất cơ hội.',
      'Standar terlalu tinggi sehingga melewatkan peluang.'
    ),
    sharePercent: 85,
    shareTypeName: M(
      '사실 솔로인 게 신기한 수준 💚',
      'Surprisingly still single 💚',
      'ソロなのが不思議なくらい 💚',
      '单身到有点意外 💚',
      '單身到有點意外 💚',
      'Vẫn độc thân đến mức hơi lạ 💚',
      'Masih jomblo sampai agak mengejutkan 💚'
    ),
  },
  {
    type: 'Type2',
    emoji: '💛',
    title: M(
      '솔로 탈출 가능성 62%, 의지만 있으면 충분히 가능 💛 (6~11점)',
      '62% solo escape odds—willpower is enough if you act 💛 (6–11 pts)',
      'ソロ脱出62%—意志さえ行動に乗れば十分可能 💛（6〜11点）',
      '脱单可能性 62%，有意愿并行动就很有机会 💛（6~11 分）',
      '脫單可能性 62%，有意願並行動就很有機會 💛（6~11 分）',
      '62% thoát ế—chỉ cần ý chí được chuyển thành hành động 💛 (6–11 điểm)',
      '62% lolos jomblo—niat jadi tindakan sudah cukup 💛 (6–11 poin)'
    ),
    shortDescription: M(
      '분석 결과, 당신은 조건은 갖췄는데 행동이 살짝 부족합니다.',
      'You have the basics, but you hesitate when it counts.',
      '条件は揃っているのに、決定的な瞬間に一歩足りない。',
      '条件有了，关键时刻却少一步。',
      '條件有了，關鍵時刻卻少一步。',
      'Bạn có nền tảng nhưng lúc quyết định lại lùi một bước.',
      'Syarat sudah ada, tapi di momen penting sering mundur selangkah.'
    ),
    description: M(
      '생활 반경과 기본 소통 능력은 있지만 결정적인 순간에 한 발짝 물러서는 경향이 있습니다. 기회가 왔을 때 다음에를 선택하거나, 마음에 드는 사람이 있어도 먼저 움직이지 않는 패턴이 솔로를 연장시키고 있습니다. 마음속의 연애 의지를 행동으로 한 번만 옮겨보세요. 생각보다 훨씬 쉽게 달라질 수 있습니다.',
      'You can socialize, but at the moment of truth you step back. You pick “later” or wait for them to move first—and that pattern stretches single life. Translate your dating intent into one concrete action; it is easier than you think.',
      '生活圏も会話もあるのに、決め手で一歩引く傾向があります。「今度」や待ちのパターンがソロを延ばします。恋の意志を一度だけ行動に。思ったより簡単に変わります。',
      '有社交也会聊天，但关键时刻会退一步。总说“下次吧”或等对方先动，会把单身期拉长。把想恋爱的念头变成一次具体行动，会比你想的简单。',
      '有社交也會聊天，但關鍵時刻會退一步。總說「下次吧」或等對方先動，會把單身期拉長。把想戀愛的念頭變成一次具體行動，會比你想的簡單。',
      'Bạn giao tiếp được nhưng đến lúc quyết định lại lùi. Chọn “để sau” hoặc chờ đối phương—kéo dài độc thân. Chuyển ý định thành một hành động cụ thể—dễ hơn bạn nghĩ.',
      'Bisa sosialisasi, tapi di momen penting mundur. Pola “nanti saja” atau nunggu gebetan duluan memperpanjang jomblo. Ubah niat jadi satu tindakan konkret—lebih mudah dari kiraan.'
    ),
    currentStatus: M(
      '준비는 됐지만 발동이 안 걸린 상태',
      'Primed, but the engine has not started.',
      '準備はあるが、スイッチが入っていない状態。',
      '准备好了，但还没发动。',
      '準備好了，但還沒發動。',
      'Đã sẵn sàng nhưng chưa bật “công tắc”.',
      'Sudah siap tapi “mesin” belum nyala.'
    ),
    realReason: M(
      '행동력 부족. 기회를 보다가 놓치는 패턴',
      'Low follow-through—you watch chances pass.',
      '行動不足。「チャンスを見る」だけで逃すパターン。',
      '行动力不足，光看机会却错过。',
      '行動力不足，光看機會卻錯過。',
      'Thiếu hành động—hay để lỡ cơ hội.',
      'Kurang eksekusi—sering melewatkan momen.'
    ),
    prescription: M(
      '이번 달 안에 소개팅 한 번만 나가보세요. 첫 번째가 제일 어렵습니다.',
      'This month, go on one blind date—just one. The first step is the hardest.',
      '今月中に合コンかお見合いを一度だけ。最初の一歩が一番むずかしい。',
      '这个月约一次相亲或联谊就好，第一步最难。',
      '這個月約一次相親或聯誼就好，第一步最難。',
      'Tháng này đi một buổi hẹn giới thiệu—chỉ một. Bước đầu khó nhất.',
      'Bulan ini coba satu kali kencan buta—cukup satu. Langkah pertama yang tersulit.'
    ),
    escapeTiming: M(
      '의지를 행동으로 옮기면 6개월 이내',
      'If you act on your intent—within about 6 months.',
      '意志を行動に乗せれば6か月以内。',
      '把意愿变成行动，大约半年内。',
      '把意願變成行動，大約半年內。',
      'Chuyển ý chí thành hành động—trong khoảng 6 tháng.',
      'Ubah niat jadi tindakan—sekitar 6 bulan.'
    ),
    goodMatch: M(
      'Type 1 (적극적인 사람 옆에 있으면 자극이 됨)',
      'Type 1 (Being near someone proactive pushes you forward)',
      'Type 1（積極的な人のそばにいると刺激になる）',
      'Type 1（身边有主动型的人会带动你）',
      'Type 1（身邊有主動型的人會帶動你）',
      'Type 1 (Ở cạnh người chủ động sẽ bị “kéo” đi)',
      'Type 1 (Dekat orang proaktif bikin termotivasi)'
    ),
    trapToAvoid: M(
      '다음에를 반복하다 또 한 해가 가는 것',
      'Saying “next time” until another year vanishes.',
      '「今度」を繰り返してまた一年が終わること。',
      '一直说“下次”，结果又过了一年。',
      '一直說「下次」，結果又過了一年。',
      'Lặp lại “để sau” đến khi thêm một năm trôi.',
      'Mengulang “nanti” sampai satu tahun lagi hilang.'
    ),
    sharePercent: 62,
    shareTypeName: M(
      '의지만 있으면 충분히 가능 💛',
      'Enough will—if you move 💛',
      '意志さえ行動に乗れば十分 💛',
      '有意愿并行动就够 💛',
      '有意願並行動就夠 💛',
      'Đủ ý chí nếu bạn hành động 💛',
      'Cukup niat kalau dieksekusi 💛'
    ),
  },
  {
    type: 'Type3',
    emoji: '🟠',
    title: M(
      '솔로 탈출 가능성 41%, 지금 당장 뭔가를 바꿔야 합니다 🟠 (12~19점)',
      '41% odds—you need to change something now 🟠 (12–19 pts)',
      'ソロ脱出41%—今すぐ何かを変える必要あり 🟠（12〜19点）',
      '脱单可能性 41%，现在就得改点什么 🟠（12~19 分）',
      '脫單可能性 41%，現在就得改點什麼 🟠（12~19 分）',
      '41%—cần đổi gì đó ngay 🟠 (12–19 điểm)',
      '41%—perlu ubah sesuatu sekarang 🟠 (12–19 poin)'
    ),
    shortDescription: M(
      '분석 결과, 현재 생활 패턴으로는 새로운 인연을 만날 확률이 높지 않습니다.',
      'With your current routine, odds of a new romance are not high.',
      '今の生活パターンでは新しい出会いは期待しにくい。',
      '以现在的生活模式，很难遇到新缘分。',
      '以現在的生活模式，很難遇到新緣分。',
      'Với lối sống hiện tại, khó gặp mối mới.',
      'Dengan pola hidup sekarang, peluang asmara baru tidak tinggi.'
    ),
    description: M(
      '외출 빈도, 새로운 만남의 기회, 적극적인 소통 모두 지금보다 높아져야 합니다. 현재 생활 반경 안에서 새로운 인연을 만나기는 쉽지 않습니다. 집과 일터만 오가는 루틴, 새로운 사람을 만날 기회 없음, 연애에 대한 소극적인 태도가 솔로를 유지시키는 삼박자를 이루고 있습니다. 지금 당장 루틴을 하나라도 바꾸는 것이 시작입니다.',
      'Going out, meeting new people, and proactive communication all need to rise. Home–work loops, few new faces, and passive dating attitudes form a trio that keeps you single. Change one routine today—that is the start.',
      '外出、新しい出会い、積極的なコミュのすべてが今より必要です。家と職場の往復だけでは出会いにくい。ルーティン・出会いの欠如・消極の三つがソロを固定化します。今日、ルーティンを一つ変えることが始まりです。',
      '出门频率、认识新人的机会、主动沟通都要比现在更高。只在家和公司之间往返、缺少新面孔、对恋爱被动，这三件事会维持单身。今天就改一个日常习惯，就是开始。',
      '出門頻率、認識新人的機會、主動溝通都要比現在更高。只在家和公司之間往返、缺少新面孔、對戀愛被動，這三件事會維持單身。今天就改一個日常習慣，就是開始。',
      'Ra ngoài, gặp người mới, và chủ động giao tiếp đều cần tăng. Vòng nhà–cơ quan, ít người lạ, thụ động với yêu đương—bộ ba này giữ bạn độc thân. Đổi một thói quen hôm nay là khởi đầu.',
      'Keluar rumah, ketemu orang baru, dan komunikasi proaktif harus naik. Rutinitas rumah–kantor, sedikit wajah baru, pasif soal cinta—trio ini mempertahankan jomblo. Ubah satu rutinitas hari ini.'
    ),
    currentStatus: M(
      '솔로 유지에 최적화된 생활 패턴 중',
      'Your routine is optimized for staying single.',
      'ソロ維持に最適化された生活パターン。',
      '生活节奏几乎是为“维持单身”量身定做。',
      '生活節奏幾乎是為「維持單身」量身定做。',
      'Lối sống đang “tối ưu” cho việc ở độc thân.',
      'Pola hidup hampir dioptimalkan untuk tetap jomblo.'
    ),
    realReason: M(
      '인연을 만날 기회 자체가 부족한 구조',
      'The structure of your life leaves few chances to meet someone.',
      '出会いの機会そのものが少ない構造。',
      '生活结构里，遇见缘分的窗口太少。',
      '生活結構裡，遇見緣分的窗口太少。',
      'Cơ cấu cuộc sống ít tạo cơ hội gặp đúng người.',
      'Struktur hidup sedikit memberi kesempatan bertemu orang.'
    ),
    prescription: M(
      '이번 주에 새로운 사람을 만날 수 있는 활동 하나를 등록해보세요. 운동 모임, 독서 클럽, 뭐든 괜찮습니다.',
      'This week, sign up for one activity where you can meet new people—gym class, book club, anything.',
      '今週、新しい人に会える活動を一つ登録してください。スポーツ、読書会、何でもOK。',
      '这周报名一个能认识新的人的活动：运动、读书会，什么都可以。',
      '這週報名一個能認識新的人的活動：運動、讀書會，什麼都可以。',
      'Tuần này đăng ký một hoạt động để gặp người mới—thể thao, câu lạc bộ sách, gì cũng được.',
      'Minggu ini daftar satu aktivitas untuk ketemu orang baru—olahraga, klub buku, apa saja.'
    ),
    escapeTiming: M(
      '생활 패턴을 바꾸면 1년 이내 가능',
      'If you shift your pattern—possible within about a year.',
      '生活パターンを変えれば1年以内に可能性。',
      '改变生活模式，一年内有机会。',
      '改變生活模式，一年內有機會。',
      'Đổi mô hình sống—trong khoảng một năm có thể.',
      'Ubah pola hidup—dalam sekitar satu tahun mungkin.'
    ),
    goodMatch: M(
      'Type 4 (함께 변화를 시도할 수 있는 솔로 동지)',
      'Type 4 (A fellow single who can try change with you)',
      'Type 4（一緒に変化を試せるソロ仲間）',
      'Type 4（能一起尝试改变的单身战友）',
      'Type 4（能一起嘗試改變的單身戰友）',
      'Type 4 (Bạn độc thân cùng thử thay đổi)',
      'Type 4 (Partner jomblo yang bisa berubah bareng)'
    ),
    trapToAvoid: M(
      '집에서 이상형이 찾아오길 기다리는 것',
      'Waiting for your ideal type to knock on your door.',
      '家で理想の相手が来るのを待つこと。',
      '在家等理想型找上门。',
      '在家等理想型找上門。',
      'Ở nhà chờ “đúng gu” tự tìm đến.',
      'Menunggu tipe ideal datang sendiri ke rumah.'
    ),
    sharePercent: 41,
    shareTypeName: M(
      '지금 당장 뭔가를 바꿔야 함 🟠',
      'Change something now 🟠',
      '今すぐ何かを変える必要あり 🟠',
      '现在就得改点什么 🟠',
      '現在就得改點什麼 🟠',
      'Phải đổi gì đó ngay 🟠',
      'Harus ubah sesuatu sekarang 🟠'
    ),
  },
  {
    type: 'Type4',
    emoji: '🔴',
    title: M(
      '솔로 탈출 가능성 24%, 솔로 탈출을 원하는 게 맞나요? 🔴 (20~27점)',
      '24% odds—do you really want to stop being single? 🔴 (20–27 pts)',
      'ソロ脱出24%—本当に抜けたい？ 🔴（20〜27点）',
      '脱单可能性 24%，你真的想脱单吗？ 🔴（20~27 分）',
      '脫單可能性 24%，你真的想脫單嗎？ 🔴（20~27 分）',
      '24%—bạn có thật sự muốn thoát ế? 🔴 (20–27 điểm)',
      '24%—benarkah ingin berhenti jomblo? 🔴 (20–27 poin)'
    ),
    shortDescription: M(
      '분석 결과, 솔로 탈출 의지와 행동 사이에 상당한 간격이 있습니다.',
      'There is a big gap between wanting to date and what you actually do.',
      '脱出したい気持ちと行動のギャップが大きいです。',
      '想脱单的心意和实际行为差距很大。',
      '想脫單的心意和實際行為差距很大。',
      'Khoảng cách giữa muốn thoát ế và hành động rất lớn.',
      'Jarak antara ingin pacaran dan tindakan nyata sangat besar.'
    ),
    description: M(
      '연애하고 싶다는 마음은 있지만 실제 행동은 완전히 반대 방향으로 가고 있습니다. 새로운 만남을 피하고, 소개팅도 거절하고, 외모 관리도 잘 안 되고 있는 상태입니다. 이 상태로는 새로운 인연이 하늘에서 떨어지기를 기다리는 것과 같습니다. 솔로 탈출을 진짜 원한다면 지금 당장 생활에서 뭔가 하나를 바꿔야 합니다.',
      'You say you want love, but your behavior runs the other way—avoiding new people, turning down dates, letting grooming slide. In this mode you are waiting for romance to fall from the sky. If you truly want out, change one real thing in your life today.',
      '恋したい気持ちはあるのに行動は逆。新しい出会いを避け、合コンを断り、身だしなみもおざなり。このままでは縁が空から降ってくるのを待つようなもの。本気なら今日、生活の一つを変えてください。',
      '嘴上说想恋爱，行为却在回避新人、拒绝相亲、疏于打理自己。这样下去像在等缘分从天上掉下来。真想脱单，今天就改一件生活里的事。',
      '嘴上说想戀愛，行為卻在回避新人、拒絕相親、疏於打理自己。這樣下去像在等緣分從天上掉下來。真想脫單，今天就改一件生活裡的事。',
      'Muốn yêu nhưng hành vi ngược lại—tránh người mới, từ hẹn, bỏ bê ngoại hình. Kiểu này như chờ duyên rơi từ trời. Muốn thoát ế thật—đổi một điều cụ thể hôm nay.',
      'Mau pacaran tapi perilaku sebaliknya—hindari orang baru, tolak kencan, abai penampilan. Ini seperti menunggu jodoh jatuh dari langit. Serius ingin berubah—ubah satu hal nyata hari ini.'
    ),
    currentStatus: M(
      '솔로 탈출 의지와 행동의 괴리가 큰 상태',
      'Large mismatch between intent and behavior.',
      '脱出意志と行動のズレが大きい状態。',
      '意愿和行动严重不一致。',
      '意願和行動嚴重不一致。',
      'Ý định và hành động lệch nhau nhiều.',
      'Niat dan tindakan tidak selaras.'
    ),
    realReason: M(
      '연애를 원하면서 연애할 조건을 만들지 않고 있음',
      'You want love but are not building the conditions for it.',
      '恋愛はしたいが、条件を作っていない。',
      '想恋爱却不创造能恋爱的条件。',
      '想戀愛卻不創造能戀愛的條件。',
      'Muốn yêu nhưng không tạo điều kiện để yêu.',
      'Mau pacaran tapi tidak membangun kondisinya.'
    ),
    prescription: M(
      '오늘 당장 머리를 다듬거나 새 옷 하나를 사보세요. 작은 변화가 마음을 움직입니다.',
      'Today—get a trim or buy one new outfit. Small shifts move your mindset.',
      '今日、髪を整えるか服を一着。小さな変化が心を動かす。',
      '今天就理发或买一件新衣服，小改变能带动心态。',
      '今天就理髮或買一件新衣服，小改變能帶動心態。',
      'Hôm nay—cắt tóc hoặc mua một món đồ. Thay đổi nhỏ lay động tâm trí.',
      'Hari ini—potong rata atau beli satu pakaian. Perubahan kecil menggerakkan mental.'
    ),
    escapeTiming: M(
      '의지를 행동으로 옮기지 않으면 기약 없음',
      'No timeline until intent becomes action.',
      '意志が行動にならない限り、先は読めない。',
      '不把意愿变成行动，就没有时间表。',
      '不把意願變成行動，就沒有時間表。',
      'Không chuyển ý chí thành hành động thì không có hạn.',
      'Tanpa eksekusi niat—tidak ada perkiraan waktu.'
    ),
    goodMatch: M(
      'Type 3 (같이 변화를 시도할 솔로 동지)',
      'Type 3 (A single friend who tries change alongside you)',
      'Type 3（一緒に変化に挑むソロ仲間）',
      'Type 3（愿意一起尝试改变的单身伙伴）',
      'Type 3（願意一起嘗試改變的單身夥伴）',
      'Type 3 (Bạn độc thể cùng thử thay đổi)',
      'Type 3 (Teman jomblo yang sama-sama mencoba berubah)'
    ),
    trapToAvoid: M(
      '나 왜 솔로지? 생각만 하고 아무것도 안 하는 것',
      'Only thinking “why am I single?” without doing anything.',
      '「なぜ私はソロ？」と考えるだけで何もしないこと。',
      '只想“我为什么单身”却不行动。',
      '只想「我為什麼單身」卻不行動。',
      'Chỉ tự hỏi “sao mình ế” mà không làm gì.',
      'Hanya bertanya-tanya “kenapa jomblo” tanpa tindakan.'
    ),
    sharePercent: 24,
    shareTypeName: M(
      '솔로 탈출을 원하는 게 맞나요? 🔴',
      'Do you really want to date? 🔴',
      '本当に脱出したい？ 🔴',
      '真想脱单吗？ 🔴',
      '真想脫單嗎？ 🔴',
      'Có thật muốn thoát ế? 🔴',
      'Benar ingin berhenti jomblo? 🔴'
    ),
  },
  {
    type: 'Type5',
    emoji: '⚫',
    title: M(
      '솔로 탈출 가능성 9%, 현재 설정이 솔로 유지 모드입니다 ⚫ (28~33점)',
      '9% odds—your settings are in “stay single” mode ⚫ (28–33 pts)',
      'ソロ脱出9%—今の設定は「ソロ維持モード」 ⚫（28〜33点）',
      '脱单可能性 9%，当前几乎是“维持单身模式” ⚫（28~33 分）',
      '脫單可能性 9%，目前幾乎是「維持單身模式」 ⚫（28~33 分）',
      '9%—thiết lập đang ở chế độ “giữ độc thân” ⚫ (28–33 điểm)',
      '9%—setelan hidup mode “tetap jomblo” ⚫ (28–33 poin)'
    ),
    shortDescription: M(
      '분석 결과, 솔직히 말하면 지금 당신의 삶은 솔로에 최적화되어 있습니다.',
      'Frankly, your life is optimized for staying single.',
      '正直、今の生活はソロに最適化されています。',
      '老实说，你现在的生活几乎是为单身量身定做的。',
      '老實說，你現在的生活幾乎是為單身量身定做的。',
      'Thật lòng: lối sống đang tối ưu cho độc thân.',
      'Jujur: hidupmu dioptimalkan untuk tetap jomblo.'
    ),
    description: M(
      '외출도 거의 없고, 새로운 사람을 만날 기회도 없고, 외모 관리도 안 되고 있고, 소개팅도 거절하고, 연애 의지도 낮은 상태입니다. 이 모든 것이 동시에 해당된다면 새로운 인연이 들어올 통로 자체가 막혀 있는 것과 같습니다. 먼저 솔로 탈출을 진심으로 원하는지부터 확인해보세요.',
      'Rarely going out, few chances to meet anyone, grooming on pause, blind dates declined, low dating drive—if all of this is true at once, the pipeline for new romance is basically closed. First ask whether you truly want to leave single life.',
      '外出少、新しい出会いなし、身だしなみおざなり、合コン拒否、恋への意欲も低い。全部が同時なら、新しい縁が入る通路が塞がっているのと同じです。まず本気で脱出したいか確認してください。',
      '很少出门、没机会认识人、疏于打理、拒绝相亲、恋爱意愿也低——如果同时全中，新缘分几乎进不来。先确认你是不是真心想脱单。',
      '很少出門、沒機會認識人、疏於打理、拒絕相親、戀愛意願也低——如果同時全中，新緣分幾乎進不來。先確認你是不是真心想脫單。',
      'Ít ra ngoài, ít gặp người mới, bỏ bề ngoài, từ hẹn, ít muốn yêu—nếu tất cả cùng lúc, “đường ống” duyên mới gần như bịt. Hỏi bản thân có thật muốn thoát ế không.',
      'Jarang keluar, jarang ketemu orang baru, abai penampilan, tolak kencan, motivasi pacaran rendah—kalau semua bersamaan, jalur asmara baru hampir tertutup. Tanyakan dulu apakah benar ingin berhenti jomblo.'
    ),
    currentStatus: M(
      '솔로 유지 풀세트 완성',
      'Full “stay single” package unlocked.',
      'ソロ維持フルセット完成。',
      '维持单身的全套条件都齐了。',
      '維持單身的全套條件都齊了。',
      'Đủ bộ điều kiện để… ở độc thân.',
      'Paket lengkap untuk tetap jomblo.'
    ),
    realReason: M(
      '인연을 만날 모든 조건이 동시에 부족한 상태',
      'Every ingredient for meeting someone is low at once.',
      '出会いの条件が同時に全部足りない状態。',
      '认识缘分的条件同时都不足。',
      '認識緣分的條件同時都不足。',
      'Mọi điều kiện gặp người đều thiếu cùng lúc.',
      'Semua syarat bertemu orang kurang bersamaan.'
    ),
    prescription: M(
      '딱 하나만. 이번 주에 밖에 나가서 커피 한 잔 마시고 오세요. 진짜로. 그게 시작입니다.',
      'Just one thing: this week, go outside and drink one coffee. Seriously. That is the start.',
      '一つだけ。今週、外に出てコーヒーを一杯。本当に。それが始まりです。',
      '只做一件事：这周出门喝一杯咖啡。真的，那就是开始。',
      '只做一件事：這週出門喝一杯咖啡。真的，那就是開始。',
      'Một việc thôi: tuần này ra ngoài uống một cốc cà phê. Đó là khởi đầu.',
      'Satu hal: minggu ini keluar minum satu kopi. Itu awalnya.'
    ),
    escapeTiming: M(
      '지금 당장 변화하지 않으면 솔로 장기화 확정',
      'Without change now—long-term singlehood is likely.',
      '今変えなければソロ長期化が濃厚。',
      '现在不变，长期单身概率很高。',
      '現在不變，長期單身機率很高。',
      'Không đổi ngay—khả năng độc thân dài hạn cao.',
      'Tanpa perubahan sekarang—jomblo jangka panjang mungkin.'
    ),
    goodMatch: M(
      'Type 6 (같은 처지라 위로는 되지만 함께 변해야 함)',
      'Type 6 (Same boat—comforting, but you must change together)',
      'Type 6（同じ境遇で慰め合えるが、一緒に変わる必要あり）',
      'Type 6（同病相怜，但要一起改变）',
      'Type 6（同病相憐，但要一起改變）',
      'Type 6 (Cùng cảnh—an ủi được nhưng phải đổi cùng nhau)',
      'Type 6 (Senasib—bisa saling support tapi harus berubah bareng)'
    ),
    trapToAvoid: M(
      '나중에 살 빠지면, 나중에 자리 잡히면 같은 나중에 시리즈',
      'The “later” series—after I lose weight, after I get settled…',
      '「痩せたら」「落ち着いたら」の“後回しシリーズ”。',
      '“等瘦了再说”“等稳定再说”的无限延期。',
      '「等瘦了再說」「等穩定再說」的無限延期。',
      'Chuỗi “để sau”—khi gầy, khi ổn định… mãi không tới.',
      'Serial “nanti”—nanti kurus, nanti mapan… tak pernah datang.'
    ),
    sharePercent: 9,
    shareTypeName: M(
      '현재 설정이 솔로 유지 모드 ⚫',
      '“Stay single” mode ⚫',
      'ソロ維持モード ⚫',
      '维持单身模式 ⚫',
      '維持單身模式 ⚫',
      'Chế độ giữ độc thân ⚫',
      'Mode tetap jomblo ⚫'
    ),
  },
  {
    type: 'Type6',
    emoji: '🤍',
    title: M(
      '솔로 탈출 가능성 2%, 지금은 솔로가 천직인 상태 🤍 (34~36점)',
      '2% odds—right now single life fits you almost “too well” 🤍 (34–36 pts)',
      'ソロ脱出2%—今はソロが“天職”に近い 🤍（34〜36点）',
      '脱单可能性 2%，现在单身几乎像“本命状态” 🤍（34~36 分）',
      '脫單可能性 2%，現在單身幾乎像「本命狀態」 🤍（34~36 分）',
      '2%—hiện tại độc thân gần như “đúng gu” cuộc sống 🤍 (34–36 điểm)',
      '2%—jomblo sekarang hampir “cocok banget” 🤍 (34–36 poin)'
    ),
    shortDescription: M(
      '분석 결과를 말씀드리기 조심스럽지만... 솔직하게 드리겠습니다.',
      'This may sting—but here is the honest read.',
      '言いにくいですが…正直にお伝えします。',
      '这话可能有点扎心，但我们会如实说。',
      '這話可能有點扎心，但我們會如實說。',
      'Khó nói nhưng… mình sẽ thật lòng.',
      'Sulit diucapkan tapi… jujur saja.'
    ),
    description: M(
      '현재 모든 지표가 솔로 장기화를 가리키고 있습니다. 외출 거의 없음, 새로운 만남 전무, 외모 관리 포기, 소통 소극적, 연애 의지 없음. 사실 이 결과가 나왔다는 것은 지금 당신이 연애보다 혼자의 삶에 더 편안함을 느끼고 있다는 신호일 수 있습니다. 그게 나쁜 것이 아닙니다. 다만 솔로 탈출을 진심으로 원한다면 지금과는 완전히 다른 삶의 방식이 필요합니다.',
      'Every signal points to long-term single habits: rarely out, no new meetings, grooming on hold, passive socially, low dating motivation. This can also mean you feel more at ease alone than in romance right now—and that is not “bad.” But if you truly want to leave single life, you need a different lifestyle than today.',
      '指標はすべてソロ長期化寄り。外出ほぼゼロ、新しい出会いなし、身だしなみ放棄、コミュ消極、恋への意欲なし。この結果は、今は恋より一人が楽だというサインかもしれません。それが悪いわけではありません。ただ本気で脱出したいなら、今とは違う生き方が必要です。',
      '各项指标都指向长期单身：几乎不出门、没有新约会、放弃打理、社交被动、恋爱意愿低。这也可能表示你现在独处比恋爱更自在——这并不“错”。但若真想脱单，需要与现在完全不同的生活方式。',
      '各項指標都指向長期單身：幾乎不出門、沒有新約會、放棄打理、社交被動、戀愛意願低。這也可能表示你現在獨處比戀愛更自在——這並不「錯」。但若真想脫單，需要與現在完全不同的生活方式。',
      'Mọi chỉ số hướng tới độc thân kéo dài: hiếm ra ngoài, không gặp ai mới, bỏ grooming, thụ động, ít muốn yêu. Có thể bạn đang thoải mái hơn khi một mình—không xấu. Nhưng muốn thoát ế thật cần lối sống khác hẳn.',
      'Semua sinyal menunjuk jomblo jangka panjang: jarang keluar, tidak ketemu baru, abai penampilan, pasif, rendah motivasi. Mungkin kamu lebih nyaman sendiri—itu tidak salah. Tapi kalau benar ingin berubah, perlu gaya hidup yang sangat berbeda.'
    ),
    currentStatus: M(
      '연애보다 솔로가 더 자연스러운 라이프스타일',
      'Solo life feels more natural than dating right now.',
      '今は恋よりソロのほうが自然なライフスタイル。',
      '现在比起恋爱，单身更让你自在。',
      '現在比起戀愛，單身更讓你自在。',
      'Hiện tại sống độc thân tự nhiên hơn yêu đương.',
      'Saat ini hidup sendiri terasa lebih natural daripada pacaran.'
    ),
    realReason: M(
      '현재 생활 방식 자체가 새로운 인연을 차단하는 구조',
      'Your current lifestyle structurally blocks new romance.',
      '今の生き方そのものが新しい縁を遮っている構造。',
      '当前生活方式本身就在挡住新缘分。',
      '當前生活方式本身就在擋住新緣分。',
      'Lối sống hiện tại đang chặn duyên mới.',
      'Gaya hidup sekarang secara struktural menghalangi asmara baru.'
    ),
    prescription: M(
      '지금 당장 한 가지만. 데이팅 앱 하나만 깔아보세요. 설치만 해도 됩니다. 그게 2%를 10%로 만드는 첫 걸음입니다.',
      'Just one step: install one dating app. Even installing counts. That is how 2% can become 10%.',
      '今すぐ一つだけ。マッチングアプリを一つ入れる。インストールだけでもOK。2%を10%にする第一歩です。',
      '只做一件事：装一个交友软件，装上去也算。这是把 2% 变成 10% 的第一步。',
      '只做一件事：裝一個交友軟體，裝上去也算。這是把 2% 變成 10% 的第一步。',
      'Một bước: cài một app hẹn hò. Chỉ cài cũng được—đó là bước từ 2% lên 10%.',
      'Satu langkah: pasang satu aplikasi kencan. Pasang saja sudah hitung—langkah 2% menuju 10%.'
    ),
    escapeTiming: M(
      '삶의 방식 자체를 바꾸지 않으면 예측 불가',
      'No forecast until you change how you live.',
      '生き方を変えない限り、先は読めない。',
      '不改变生活方式，就无法预测。',
      '不改變生活方式，就無法預測。',
      'Không đổi cách sống thì không dự đoán được.',
      'Tanpa ubah gaya hidup—tidak ada perkiraan.'
    ),
    goodMatch: M(
      'Type 5 (같이 변화를 시도하면 서로에게 자극이 됨)',
      'Type 5 (If you try change together, you push each other)',
      'Type 5（一緒に変化を試すとお互いを刺激し合える）',
      'Type 5（一起尝试改变会互相带动）',
      'Type 5（一起嘗試改變會互相帶動）',
      'Type 5 (Cùng thử đổi sẽ thúc đẩy nhau)',
      'Type 5 (Kalau sama-sama berubah—saling dorong)'
    ),
    trapToAvoid: M(
      '이 결과를 보고 역시 나는 안 돼라고 결론 내리는 것. 2%도 0%는 아닙니다',
      'Do not conclude “I am hopeless” from this—2% is not 0%.',
      'この結果で「やっぱり無理」と決めつけないこと。2%も0%ではありません。',
      '别因这结果认定“我不行”，2% 也不是 0%。',
      '別因這結果認定「我不行」，2% 也不是 0%。',
      'Đừng kết luận “mình vô vọng”—2% vẫn khác 0%.',
      'Jangan menyimpulkan “tidak mungkin”—2% bukan 0%.'
    ),
    sharePercent: 2,
    shareTypeName: M(
      '지금은 솔로가 천직인 상태 🤍',
      'Solo life fits you right now 🤍',
      '今はソロが天職みたいな状態 🤍',
      '现在单身像本命状态 🤍',
      '現在單身像本命狀態 🤍',
      'Độc thân đang “hợp gu” lắm 🤍',
      'Jomblo pas banget sekarang 🤍'
    ),
  },
];
