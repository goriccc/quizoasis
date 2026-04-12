/** 내가 환생한다면 어떤 직업? — A=0, B=1 합산 → 6유형 (공감 F 테스트와 동일 채점 구간) */

/** 7개 언어 동일 키 구조 */
export function M(
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

/** 자세한 이야기(description) 하위 섹션 구분 — 로케일별 문자열 (파싱·조립 공통) */
export const PHASE3_REBORN_DESC_MARKERS: Record<
  string,
  { day: string; quote: string; struggle: string; life: string }
> = {
  ko: {
    day: '\n\n환생한 나의 하루:',
    quote: '\n\n명대사:',
    struggle: '\n\n이 직업의 고충:',
    life: '\n\n현생과의 연결:',
  },
  en: {
    day: '\n\nA day in your reborn life:',
    quote: '\n\nSignature quote:',
    struggle: '\n\nThe hard side of this path:',
    life: '\n\nLink to this life:',
  },
  ja: {
    day: '\n\n転生した私の一日:',
    quote: '\n\n名台詞:',
    struggle: '\n\nこの道のつらさ:',
    life: '\n\n今世とのつながり:',
  },
  'zh-CN': {
    day: '\n\n重生后我的一天:',
    quote: '\n\n名台词:',
    struggle: '\n\n这份职业的难处:',
    life: '\n\n与今生的连接:',
  },
  'zh-TW': {
    day: '\n\n重生後我的一天:',
    quote: '\n\n名台詞:',
    struggle: '\n\n這份職業的難處:',
    life: '\n\n與今生的連結:',
  },
  vi: {
    day: '\n\nMột ngày sau khi đầu thai:',
    quote: '\n\nCâu nói ấn tượng:',
    struggle: '\n\nKhó khăn của nghề này:',
    life: '\n\nLiên hệ với đời này:',
  },
  id: {
    day: '\n\nHari dalam hidup yang terlahir kembali:',
    quote: '\n\nKutipan khas:',
    struggle: '\n\nSisi sulit jalur ini:',
    life: '\n\nHubungan dengan kehidupan sekarang:',
  },
};

export type RebornDescParts = {
  intro: string;
  day: string;
  quote: string;
  struggle: string;
  life: string;
};

export function buildRebornDescription(locale: string, parts: RebornDescParts): string {
  const m = PHASE3_REBORN_DESC_MARKERS[locale] ?? PHASE3_REBORN_DESC_MARKERS.ko;
  return (
    parts.intro.trim() +
    m.day +
    parts.day.trim() +
    m.quote +
    parts.quote.trim() +
    m.struggle +
    parts.struggle.trim() +
    m.life +
    parts.life.trim()
  );
}

/** 7개 로케일 각각의 본문 → description Record (마커는 로케일별로 buildRebornDescription에서 부착) */
function descFull7(parts: {
  ko: RebornDescParts;
  en: RebornDescParts;
  ja: RebornDescParts;
  zhCN: RebornDescParts;
  zhTW: RebornDescParts;
  vi: RebornDescParts;
  id: RebornDescParts;
}): Record<string, string> {
  return {
    ko: buildRebornDescription('ko', parts.ko),
    en: buildRebornDescription('en', parts.en),
    ja: buildRebornDescription('ja', parts.ja),
    'zh-CN': buildRebornDescription('zh-CN', parts.zhCN),
    'zh-TW': buildRebornDescription('zh-TW', parts.zhTW),
    vi: buildRebornDescription('vi', parts.vi),
    id: buildRebornDescription('id', parts.id),
  };
}

export interface Phase3ReincarnationJobQuestion {
  id: number;
  question: Record<string, string>;
  options: { text: Record<string, string>; score: number }[];
}

export interface Phase3ReincarnationJobResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  era: Record<string, string>;
  description: Record<string, string>;
  empathyLevel: Record<string, string>;
  characteristics: Record<string, string>;
  goodMatch: Record<string, string>;
  badMatch: Record<string, string>;
}

export const phase3ReincarnationJobQuestions: Phase3ReincarnationJobQuestion[] = [
  {
    id: 1,
    question: M(
      '나는 어떤 상황에서 가장 살아있는 느낌이 드나요?',
      'When do you feel most alive?',
      'どんな状況でいちばん生きていると感じますか？',
      '你在什么情况下最有“活着”的感觉？',
      '你在什麼情況下最有「活著」的感覺？',
      'Bạn cảm thấy sống nhất trong tình huống nào?',
      'Kapan Anda merasa paling hidup?'
    ),
    options: [
      {
        text: M(
          '새로운 것을 탐험하거나 아무도 가지 않은 길을 갈 때',
          'When I explore something new or take a path no one else has',
          '新しいものを探検したり、誰も歩んでいない道を行くとき',
          '探索新事物或走没人走过的路时',
          '探索新事物或走沒人走過的路時',
          'Khi tôi khám phá điều mới hoặc đi con đường chưa ai đi',
          'Saat menjelajahi hal baru atau mengambil jalan yang belum dilalui orang lain'
        ),
        score: 0,
      },
      {
        text: M(
          '무언가를 깊이 탐구하거나 창조해낼 때',
          'When I deeply explore or create something',
          '何かを深く探究したり、創り出すとき',
          '深度探究或创造某物时',
          '深度探究或創造某物時',
          'Khi tôi khám phá sâu hoặc sáng tạo điều gì đó',
          'Saat mengeksplorasi secara mendalam atau menciptakan sesuatu'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 2,
    question: M(
      '나의 에너지는 어디서 나오나요?',
      'Where does your energy come from?',
      'あなたのエネルギーはどこから来ますか？',
      '你的能量来自哪里？',
      '你的能量來自哪裡？',
      'Năng lượng của bạn đến từ đâu?',
      'Dari mana energimu berasal?'
    ),
    options: [
      {
        text: M(
          '몸을 쓰거나 현장에서 직접 부딪힐 때. 실전에서 강해진다',
          'From using my body and being on the ground—I grow stronger in action',
          '体を動かし現場でぶつかるとき。実戦で強くなる',
          '动用身体、在现场碰撞时——在实战中变强',
          '動用身體、在現場碰撞時——在實戰中變強',
          'Từ cơ thể và hiện trường—tôi mạnh hơn khi hành động',
          'Dari tubuh dan lapangan—aku lebih kuat dalam tindakan'
        ),
        score: 0,
      },
      {
        text: M(
          '머리를 쓰거나 아이디어를 발전시킬 때. 사유에서 강해진다',
          'From thinking and developing ideas—I grow stronger in reflection',
          '頭を使いアイデアを育てるとき。思考で強くなる',
          '动脑、发展想法时——在思考中变强',
          '動腦、發展想法時——在思考中變強',
          'Từ suy nghĩ và phát triển ý tưởng—tôi mạnh hơn khi chiêm nghiệm',
          'Dari berpikir dan mengembangkan ide—aku lebih kuat dalam refleksi'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 3,
    question: M(
      '나를 가장 잘 표현하는 단어를 고른다면?',
      'Which words describe you best?',
      'あなたをいちばんよく表す言葉は？',
      '哪些词最能形容你？',
      '哪些詞最能形容你？',
      'Từ nào mô tả bạn nhất?',
      'Kata apa yang paling menggambarkanmu?'
    ),
    options: [
      {
        text: M(
          '행동·추진·도전·현장',
          'Action · drive · challenge · field',
          '行動・推進・挑戦・現場',
          '行动·推进·挑战·现场',
          '行動·推進·挑戰·現場',
          'Hành động · động lực · thử thách · hiện trường',
          'Aksi · dorongan · tantangan · lapangan'
        ),
        score: 0,
      },
      {
        text: M(
          '사유·탐구·창조·깊이',
          'Thought · inquiry · creation · depth',
          '思考・探究・創造・深み',
          '思考·探究·创造·深度',
          '思考·探究·創造·深度',
          'Suy ngẫm · khám phá · sáng tạo · chiều sâu',
          'Renungan · eksplorasi · kreasi · kedalaman'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 4,
    question: M(
      '내가 가장 끌리는 세계는?',
      'What kind of world pulls you in?',
      'あなたがいちばん惹かれる世界は？',
      '你最被哪种世界吸引？',
      '你最被哪種世界吸引？',
      'Thế giới nào hút bạn nhất?',
      'Dunia macam apa yang paling menarikmu?'
    ),
    options: [
      {
        text: M(
          '역동적이고 변화무쌍한 세계. 매 순간 결정해야 하는 상황',
          'A dynamic, ever-changing world—decisions every moment',
          '激動的で移り変わる世界。毎瞬判断が求められる',
          '动荡多变的世界——每时每刻都要做决定',
          '動盪多變的世界——每分每秒都要做決定',
          'Thế giới sôi động, luôn đổi—quyết định từng khoảnh khắc',
          'Dunia dinamis yang berubah—keputusan setiap saat'
        ),
        score: 0,
      },
      {
        text: M(
          '조용하고 깊이 있는 세계. 혼자 탐구하고 완성해가는 시간',
          'A quiet, deep world—time alone to explore and finish things',
          '静かで深い世界。一人で探究し完成させる時間',
          '安静深沉的世界——独自探索并完成的时间',
          '安靜深沉的世界——獨自探索並完成的時間',
          'Thế giới yên tĩnh, sâu—thời gian một mình khám phá và hoàn thiện',
          'Dunia tenang dan dalam—waktu sendiri untuk mengeksplorasi dan menyelesaikan'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 5,
    question: M(
      '사람들과의 관계에서 나는?',
      'How are you with people?',
      '人との関係であなたは？',
      '在人际关系中你是？',
      '在人際關係中你是？',
      'Bạn thế nào trong các mối quan hệ?',
      'Bagaimana kamu dalam hubungan dengan orang lain?'
    ),
    options: [
      {
        text: M(
          '이끌거나 함께 움직이는 것이 자연스럽다. 집단 안에서 역할이 있다',
          'Leading or moving with others feels natural—I have a role in the group',
          '導いたり一緒に動くのが自然。集団の中で役割がある',
          '带领或一起行动很自然——在群体中有角色',
          '帶領或一起行動很自然——在群體中有角色',
          'Dẫn dắt hoặc cùng chuyển động là tự nhiên—có vai trong nhóm',
          'Memimpin atau bergerak bersama terasa alami—punya peran dalam kelompok'
        ),
        score: 0,
      },
      {
        text: M(
          '소수와 깊게 연결되거나 혼자 있는 시간이 더 충전이 된다',
          'Deep ties with a few—or alone time recharges me most',
          '少数と深くつながるか、一人の時間がいちばん充電になる',
          '与少数人深交，或独处最能充电',
          '與少數人深交，或獨處最能充電',
          'Gắn sâu với vài người—hoặc thời gian một mình nạp pin nhất',
          'Terhubung dalam dengan sedikit orang—atau waktu sendiri yang mengisi ulang'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 6,
    question: M(
      '위기 상황에서 나는?',
      'In a crisis, you…',
      '危機の場面であなたは？',
      '在危机中你会？',
      '在危機中你會？',
      'Trong khủng hoảng, bạn…',
      'Dalam krisis, kamu…'
    ),
    options: [
      {
        text: M(
          '즉각적으로 판단하고 움직인다. 행동이 먼저다',
          'Judge and move fast—action first',
          '即座に判断して動く。行動が先',
          '快速判断和行动——行动优先',
          '快速判斷和行動——行動優先',
          'Phán đoán và hành động nhanh—hành động trước',
          'Menilai dan bergerak cepat—aksi dulu'
        ),
        score: 0,
      },
      {
        text: M(
          '상황을 분석하고 전략을 세운다. 생각이 먼저다',
          'Analyze the situation and plan—thought first',
          '状況を分析し戦略を立てる。思考が先',
          '分析形势、制定策略——思考优先',
          '分析形勢、制定策略——思考優先',
          'Phân tích tình huống và lập chiến lược—suy nghĩ trước',
          'Menganalisis situasi dan merencanakan—pikiran dulu'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 7,
    question: M(
      '나의 가장 큰 욕구는?',
      'What do you want most?',
      'あなたがいちばん望むものは？',
      '你最渴望什么？',
      '你最渴望什麼？',
      'Bạn khao khát điều gì nhất?',
      'Apa yang paling kamu inginkan?'
    ),
    options: [
      {
        text: M(
          '자유. 틀에 갇히지 않고 나만의 방식으로 살고 싶다',
          'Freedom—I want to live my way, not boxed in',
          '自由。型にはまらず自分のやり方で生きたい',
          '自由——不想被框住，按自己的方式活',
          '自由——不想被框住，按自己的方式活',
          'Tự do—sống theo cách mình, không bị giam trong khuôn',
          'Kebebasan—hidup dengan caraku sendiri, tidak terpenjara pola'
        ),
        score: 0,
      },
      {
        text: M(
          '의미. 내가 하는 일이 세상에 흔적을 남기길 바란다',
          'Meaning—I want what I do to leave a mark on the world',
          '意味。自分の仕事が世界に痕跡を残したい',
          '意义——希望做的事能在世上留下痕迹',
          '意義——希望做的事能在世上留下痕跡',
          'Ý nghĩa—muốn việc mình làm để lại dấu ấn trên thế giới',
          'Makna—ingin yang kulakukan meninggalkan jejak di dunia'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 8,
    question: M(
      '내가 가장 빛나는 순간은?',
      'When do you shine brightest?',
      'あなたがいちばん輝くのはいつ？',
      '你什么时候最闪耀？',
      '你什麼時候最閃耀？',
      'Khi nào bạn tỏa sáng nhất?',
      'Kapan kamu bersinar paling terang?'
    ),
    options: [
      {
        text: M(
          '아무도 해결하지 못한 문제를 내가 돌파했을 때',
          'When I break through a problem no one else could solve',
          '誰も解けなかった問題を自分が突破したとき',
          '当我突破没人能解决的问题时',
          '當我突破沒人能解決的問題時',
          'Khi tôi phá được vấn đề không ai giải được',
          'Saat menembus masalah yang tak bisa diselesaikan orang lain'
        ),
        score: 0,
      },
      {
        text: M(
          '내가 만든 무언가가 다른 사람에게 깊은 인상을 줬을 때',
          'When something I made deeply moves someone else',
          '自分が作ったものが誰かに深い印象を与えたとき',
          '当我创造的东西深深打动别人时',
          '當我創造的東西深深打動別人時',
          'Khi điều tôi tạo ra chạm sâu đến người khác',
          'Saat sesuatu yang kubuat benar-benar mengesankan orang lain'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 9,
    question: M(
      '나에게 가장 잘 맞는 시간대는?',
      'What time of day fits you best?',
      'あなたにいちばん合う時間帯は？',
      '哪个时段最适合你？',
      '哪個時段最適合你？',
      'Khung giờ nào hợp bạn nhất?',
      'Waktu sehari apa yang paling cocok untukmu?'
    ),
    options: [
      {
        text: M(
          '낮. 활동하고 움직이고 세상과 부딪히는 시간',
          'Day—moving, acting, colliding with the world',
          '昼。動き回り世界とぶつかる時間',
          '白天——活动、行动、与世界碰撞',
          '白天——活動、行動、與世界碰撞',
          'Ban ngày—hoạt động, va chạm với thế giới',
          'Siang—bergerak, bertindak, bertabrakan dengan dunia'
        ),
        score: 0,
      },
      {
        text: M(
          '밤. 조용히 생각하고 집중하고 창조하는 시간',
          'Night—thinking quietly, focusing, creating',
          '夜。静かに考え集中し創る時間',
          '夜晚——安静思考、专注、创造',
          '夜晚——安靜思考、專注、創造',
          'Đêm—suy nghĩ yên, tập trung, sáng tạo',
          'Malam—berpikir tenang, fokus, mencipta'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 10,
    question: M(
      '역사 속 어떤 장면에 내가 있다면?',
      'Which historical scene would you be in?',
      '歴史のどんな場面にあなたがいるとしたら？',
      '如果你出现在历史场景中，会是哪一种？',
      '如果你出現在歷史場景中，會是哪一種？',
      'Bạn sẽ ở cảnh lịch sử nào?',
      'Kamu akan ada di adegan sejarah yang mana?'
    ),
    options: [
      {
        text: M(
          '전장·탐험·혁명의 최전선. 세상이 바뀌는 순간의 현장',
          'Battlefield, exploration, revolution—the front line where the world changes',
          '戦場・探検・革命の最前線。世界が変わる瞬間の現場',
          '战场·探险·革命的最前线——世界改变的时刻',
          '戰場·探險·革命的最前線——世界改變的時刻',
          'Chiến trường, thám hiểm, cách mạng—nơi thế giới đổi thay',
          'Medan perang, eksplorasi, revolusi—garis depan saat dunia berubah'
        ),
        score: 0,
      },
      {
        text: M(
          '아틀리에·도서관·연구실. 무언가를 만들고 기록하는 공간',
          'Studio, library, lab—spaces to make and record',
          'アトリエ・図書館・研究室。何かを作り記録する場所',
          '画室·图书馆·实验室——创造与记录的空间',
          '畫室·圖書館·實驗室——創造與記錄的空間',
          'Xưởng, thư viện, phòng lab—nơi tạo và ghi lại',
          'Studio, perpustakaan, lab—ruang untuk membuat dan mencatat'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 11,
    question: M(
      '나는 어떤 방식으로 세상에 기여하고 싶나요?',
      'How do you want to contribute to the world?',
      '世界にどんな形で貢献したいですか？',
      '你想以什么方式贡献世界？',
      '你想以什麼方式貢獻世界？',
      'Bạn muốn đóng góp cho thế giới bằng cách nào?',
      'Bagaimana kamu ingin berkontribusi pada dunia?'
    ),
    options: [
      {
        text: M(
          '직접 행동으로. 내가 움직여야 세상이 바뀐다',
          'Through direct action—the world moves when I move',
          '直接行動で。自分が動かないと世界は変わらない',
          '通过直接行动——我动世界才变',
          '透過直接行動——我動世界才變',
          'Hành động trực tiếp—thế giới đổi khi tôi cử động',
          'Aksi langsung—dunia berubah saat aku bergerak'
        ),
        score: 0,
      },
      {
        text: M(
          '작품·지식·아이디어로. 내가 남긴 것이 세상을 바꾼다',
          'Through works, knowledge, ideas—what I leave behind changes the world',
          '作品・知識・アイデアで。残したものが世界を変える',
          '通过作品、知识、想法——我留下的改变世界',
          '透過作品、知識、想法——我留下的改變世界',
          'Tác phẩm, tri thức, ý tưởng—điều tôi để lại đổi thế giới',
          'Karya, pengetahuan, ide—yang kutinggalkan mengubah dunia'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 12,
    question: M(
      '다음 생에 나는 어떤 삶을 살고 싶나요?',
      'What life do you want in your next life?',
      '来世ではどんな人生を送りたいですか？',
      '来生你想过什么样的生活？',
      '來生你想過什麼樣的生活？',
      'Kiếp sau bạn muốn sống thế nào?',
      'Di kehidupan berikutnya, hidup seperti apa yang kamu inginkan?'
    ),
    options: [
      {
        text: M(
          '짧고 강렬하게. 역사에 한 줄이라도 남기는 삶',
          'Short and intense—leave at least one line in history',
          '短く激しく。歴史に一行でも残す人生',
          '短而炽烈——在历史上留下一行',
          '短而熾烈——在歷史上留下一行',
          'Ngắn mà mãnh liệt—để lại ít nhất một dòng trong lịch sử',
          'Singkat dan intens—meninggalkan setidaknya satu baris dalam sejarah'
        ),
        score: 0,
      },
      {
        text: M(
          '깊고 오래도록. 내가 만든 것이 오래 남는 삶',
          'Deep and lasting—what I make endures',
          '深く長く。自分が作ったものが残り続ける人生',
          '深而长久——我创造的东西长存',
          '深而長久——我創造的東西長存',
          'Sâu và lâu—điều tôi tạo ra còn mãi',
          'Dalam dan abadi—yang kuticipta bertahan lama'
        ),
        score: 1,
      },
    ],
  },
];

export const phase3ReincarnationJobResults: Phase3ReincarnationJobResult[] = [
  {
    type: 'Type1',
    emoji: '⚔️',
    title: M(
      '역사의 최전선에 선, 전설의 전사·무장',
      'Legendary warrior on history’s front line',
      '歴史の最前線に立つ、伝説の戦士・武将',
      '站在历史最前线的传奇战士与武将',
      '站在歷史最前線的傳奇戰士與武將',
      'Chiến binh huyền thoại ở tuyến đầu lịch sử',
      'Pendekar legendaris di garis depan sejarah'
    ),
    shortDescription: M(
      '다음 생의 당신은 역사의 가장 격렬한 순간들 한가운데 서 있습니다.',
      'In your next life you stand in history’s fiercest moments.',
      '来世のあなたは、歴史が最も激しい瞬間のど真ん中に立っています。',
      '来生你将站在历史最激烈的时刻中心。',
      '來生你將站在歷史最激烈的時刻中心。',
      'Kiếp sau bạn đứng giữa những khoảnh khắc dữ dội nhất của lịch sử.',
      'Di kehidupan berikutnya kamu berdiri di tengah momen paling sengit sejarah.'
    ),
    era: M(
      '중세 유럽(1100~1400년대) 또는 조선시대 무관',
      'Medieval Europe (1100s–1400s) or Joseon military official',
      '中世ヨーロッパ（12～15世紀）または朝鮮時代の武官',
      '中世纪欧洲（12–15 世纪）或朝鲜王朝武将',
      '中世紀歐洲（12–15 世紀）或朝鮮王朝武將',
      'Châu Âu thời Trung cổ (thế kỷ 12–15) hoặc võ quan triều Joseon',
      'Eropa abad pertengahan (abad 12–15) atau pejabat militer Joseon'
    ),
    description: descFull7({
      ko: {
        intro:
          '현생의 당신은 행동 지향적이고 도전을 두려워하지 않으며 위기 상황에서 오히려 빛나는 타입입니다. 이 에너지는 검과 창이 실력을 증명하던 시대에 가장 잘 어울립니다. 다음 생의 당신은 조선의 장수이거나 중세 유럽의 기사이거나 혁명의 최전선에 선 전사입니다.',
        day: '새벽부터 검술과 전술을 연마하고 낮에는 전장에서 결단을 내리고 밤에는 다음 전략을 구상합니다. 나를 따르는 사람들이 있고 나는 그들을 이끌어야 합니다.',
        quote: '"물러서는 것은 없다. 나아가거나 쓰러지거나 둘 중 하나다"',
        struggle:
          '전장에서 살아남는 것. 아끼는 사람을 잃는 것. 평화로운 시간이 오히려 낯선 것.',
        life: '지금의 당신이 리더십을 발휘하거나 위기 상황에서 오히려 강해지는 경험을 한 적 있다면 다음 생의 기억이 조금 남아있는 것일 수 있습니다.',
      },
      en: {
        intro:
          'In this life you move toward action, fear little from challenge, and shine brightest in crisis. That energy fits an age proved by steel. In your next life you are a Joseon commander, a medieval knight, or a fighter on revolution’s front line.',
        day: 'From dawn you drill sword and tactics; by day you decide on the field; by night you shape the next strategy. Others follow—and you must lead.',
        quote: '"No retreat. Only forward—or fall."',
        struggle:
          'Surviving the battlefield. Losing those you love. Peace feeling oddly alien.',
        life: 'If you lead today or feel stronger when things go wrong, a trace of that next life may still linger.',
      },
      ja: {
        intro:
          '今世のあなたは行動志向で挑戦を恐れず、危機の場面でいっそ輝くタイプです。そのエネルギーは剣と槍が実力を証明した時代にいちばん合います。来世のあなたは朝鮮の武将か、中世ヨーロッパの騎士か、革命の最前線に立つ戦士です。',
        day: '明け方から剣術と戦術を鍛え、昼は戦場で決断し、夜は次の戦略を練ります。あなたに従う者がいて、あなたは彼らを導かねばなりません。',
        quote: '「退くことはない。進むか倒れるか、その二つだけだ」',
        struggle:
          '戦場で生き残ること。大切な人を失うこと。平和な時間の方がむしろよそよそしいこと。',
        life: '今のあなたがリーダーシップを発揮したり、危機のときに強くなったりする経験があるなら、来世の記憶が少し残っているのかもしれません。',
      },
      zhCN: {
        intro:
          '今生的你偏向行动、不惧挑战，在危机中反而更加耀眼。这种气质最适配以剑与矛证明实力的时代。来世的你可能是朝鲜武将、中世纪骑士，或站在革命最前线的战士。',
        day: '从黎明操练剑术与战术，白天在沙场决断，夜晚筹划下一战。有人跟随你，而你必须带领他们。',
        quote: '「没有退路。只有前进——或倒下。」',
        struggle: '在战场上幸存。失去所爱。和平时光反而显得陌生。',
        life: '若你常展现领导力，或在困境中反而更强，也许是来世记忆的一缕残留。',
      },
      zhTW: {
        intro:
          '今生的你偏向行動、不怕挑戰，在危機中反而更加耀眼。這股氣質最適合以劍與矛證明實力的時代。來世的你可能是朝鮮武將、中世紀騎士，或站在革命最前線的戰士。',
        day: '從黎明操練劍術與戰術，白天在沙場決斷，夜晚策畫下一戰。有人跟隨你，而你必須帶領他們。',
        quote: '「沒有退路。只有前進——或倒下。」',
        struggle: '在戰場上存活。失去所愛。承平歲月反而顯得陌生。',
        life: '若你常展現領導力，或在困境中反而更強，也許是來世記憶的一絲殘留。',
      },
      vi: {
        intro:
          'Ở kiếp này bạn hướng đến hành động, ít sợ thử thách, và tỏa sáng nhất trong khủng hoảng. Năng lượng đó hợp thời mà thép chứng minh năng lực. Ở kiếp sau bạn là tướng Joseon, hiệp sĩ thời Trung cổ, hay chiến binh ở tuyến đầu cách mạng.',
        day: 'Từ sớm luyện kiếm và chiến thuật; ban ngày quyết định trên chiến trường; ban đêm vạch chiến lược kế. Người khác đi theo—và bạn phải dẫn dắt.',
        quote: '"Không lùi. Chỉ tiến—hoặc gục."',
        struggle: 'Sống sót nơi chiến trường. Mất người thương. Hòa bình lại lạ lẫm.',
        life: 'Nếu hôm nay bạn thường lãnh đạo hay mạnh hơn khi mọi chuyện sai, có thể còn vương chút ký ức kiếp sau.',
      },
      id: {
        intro:
          'Di kehidupan ini kamu mengutamakan aksi, tak gentar tantangan, dan bersinar di krisis. Energi itu cocok untuk zaman yang dibuktikan baja. Di kehidupan berikutnya kamu komandan Joseon, kesatria abad pertengahan, atau pejuang di garis depan revolusi.',
        day: 'Sejak fajar berlatih pedang dan taktik; siang memutuskan di medan; malam merencanakan langkah berikut. Orang mengikuti—dan kamu harus memimpin.',
        quote: '"Tidak ada mundur. Hanya maju—atau jatuh."',
        struggle: 'Bertahan di medan perang. Kehilangan yang dicintai. Damai terasa asing.',
        life: 'Jika kamu sering memimpin atau merasa lebih kuat saat sulit, mungkin jejak kehidupan berikutnya masih tersisa.',
      },
    }),
    empathyLevel: M(
      '⚔️ 전사·무장·혁명가',
      '⚔️ Warrior · Commander · Revolutionary',
      '⚔️ 戦士・武将・革命家',
      '⚔️ 战士·统帅·革命者',
      '⚔️ 戰士·統帥·革命者',
      '⚔️ Chiến binh · Tướng lĩnh · Người cách mạng',
      '⚔️ Prajurit · Komandan · Revolusioner'
    ),
    characteristics: M(
      '결단력·추진력·현장 장악력·카리스마',
      'Decisiveness · Drive · Command presence · Charisma',
      '決断力・推進力・現場掌握・カリスマ',
      '决断力·推动力·掌控局面·魅力',
      '決斷力·推動力·掌控局面·魅力',
      'Quyết đoán · Động lực · Chỉ huy tình huống · Uy tín',
      'Keputusan · Dorongan · Kendali lapangan · Karisma'
    ),
    goodMatch: M(
      '이순신 장군·잔 다르크·알렉산드로스 대왕',
      'Admiral Yi · Joan of Arc · Alexander the Great',
      '李舜臣・ジャンヌ・ダルク・アレクサンドロス大王',
      '李舜臣·圣女贞德·亚历山大大帝',
      '李舜臣·聖女貞德·亞歷山大大帝',
      'Đô đốc Yi · Jeanne d’Arc · Alexander Đại đế',
      'Laksamana Yi · Joan of Arc · Aleksander Agung'
    ),
    badMatch: M(
      '다음 생의 당신은 전장에서 가장 빛나는 사람입니다',
      'In your next life you shine brightest on the battlefield.',
      '来世のあなたは戦場でいちばん輝く人です。',
      '来生你在战场上最为闪耀。',
      '來生你在戰場上最為閃耀。',
      'Kiếp sau bạn tỏa sáng nhất trên chiến trường.',
      'Di kehidupan berikutnya kamu bersinar paling terang di medan perang.'
    ),
  },
  {
    type: 'Type2',
    emoji: '🧭',
    title: M(
      '아무도 가지 않은 곳으로, 위대한 탐험가·모험가',
      'Great explorer—toward lands no map yet names',
      '誰も行かない場所へ、偉大な探検家・冒険家',
      '驶向无人之境的伟大探险家与冒险家',
      '駛向無人之境的偉大探險家與冒險家',
      'Nhà thám hiểm vĩ đại—về nơi chưa có trên bản đồ',
      'Penjelajah hebat—menuju tanah yang belum ada di peta'
    ),
    shortDescription: M(
      '다음 생의 당신은 지도에 없는 땅을 향해 배를 띄웁니다.',
      'In your next life you set sail for lands beyond the map.',
      '来世のあなたは、地図にない土地へ向かって船を出します。',
      '来生你扬帆驶向地图之外的陆地。',
      '來生你揚帆駛向地圖之外的陸地。',
      'Kiếp sau bạn căng buồm về vùng đất ngoài bản đồ.',
      'Di kehidupan berikutnya kamu berlayar menuju daratan di luar peta.'
    ),
    era: M(
      '대항해시대 (1400~1600년대 포르투갈·스페인·영국)',
      'Age of Discovery (1400s–1600s Portugal, Spain, Britain)',
      '大航海時代（15～17世紀 ポルトガル・スペイン・イギリス）',
      '大航海时代（15–17 世纪，葡萄牙、西班牙、英国）',
      '大航海時代（15–17 世紀，葡萄牙、西班牙、英國）',
      'Thời Đại hàng hải (thế kỷ 15–17, Bồ Đào Nha, Tây Ban Nha, Anh)',
      'Zaman Penjelajahan (abad 15–17, Portugal, Spanyol, Inggris)'
    ),
    description: descFull7({
      ko: {
        intro:
          '현생의 당신은 새로운 것을 탐험하고 아무도 가지 않은 길을 걸을 때 가장 살아있는 느낌이 드는 타입입니다. 자유를 가장 중요하게 여기고 직접 현장에서 부딪히면서 강해집니다. 이 에너지는 전 세계를 탐험하던 대항해시대에 가장 잘 어울립니다.',
        day: '미지의 바다를 항해하며 별자리로 위치를 계산하고 새로운 땅에 발을 디디는 순간의 전율을 삶의 이유로 삼습니다. 지도에 없는 곳에 이름을 붙이는 것이 가장 큰 보람입니다.',
        quote: '"지도가 끝나는 곳에서 나의 이야기가 시작된다"',
        struggle: '몇 달씩 이어지는 항해. 언제 돌아올지 모르는 불확실함. 고향이 그리운 밤.',
        life: '지금의 당신이 새로운 환경에 빠르게 적응하거나 남들이 안 된다는 일을 시도하는 성향이 있다면 그것이 전생 탐험가의 흔적입니다.',
      },
      en: {
        intro:
          'In this life you feel most alive exploring the new and walking roads no one else takes. You prize freedom and grow stronger in the field. That energy fits the Age of Discovery.',
        day: 'You sail unknown seas, fix your position by the stars, and live for the thrill of first foot on new land. Naming what the map forgot is your greatest reward.',
        quote: '"Where the map ends, my story begins."',
        struggle: 'Months at sea. Not knowing when you’ll return. Nights homesick for shore.',
        life: 'If you adapt fast to new places or try what others won’t, that may be the explorer’s mark from a past life.',
      },
      ja: {
        intro:
          '今世のあなたは新しいものを探検し、誰も歩かない道を歩くときいちばん生きていると感じるタイプです。自由を何より尊び、現場でぶつかりながら強くなります。そのエネルギーは世界中を探検した大航海時代にいちばん合います。',
        day: '未知の海を航海し、星で位置を測り、新しい陸に初めて足を踏み入れた瞬間の震えを生きがいにします。地図にない場所に名前をつけることが最大のやりがいです。',
        quote: '「地図が終わるところから、私の物語が始まる」',
        struggle: '何ヶ月も続く航海。いつ帰れるか分からない不確かさ。故郷が恋しい夜。',
        life: '今のあなたが新しい環境にすぐ適応したり、人がしないことを試したりするなら、それは前世の探検家の痕跡かもしれません。',
      },
      zhCN: {
        intro:
          '今生的你在探索新鲜事物、走无人走过的路时最有活力。你最看重自由，在现场碰撞中成长。这种气质与大航海时代最相配。',
        day: '你航行未知海域，用星辰定位，为第一次踏上新陆地的悸动而活。给地图遗忘之地命名是你最大的回报。',
        quote: '「地图尽头，才是我故事的开始。」',
        struggle: '数月漂泊海上。不知何日能归。思念故乡的夜晚。',
        life: '若你很快适应新环境，或爱尝试别人不敢做的事，那或许是前世探险家的印记。',
      },
      zhTW: {
        intro:
          '今生的你在探索新鮮事物、走無人走過的路時最有活力。你最看重自由，在現場碰撞中成長。這股氣質與大航海時代最相配。',
        day: '你航行未知海域，用星辰定位，為第一次踏上新陸地的悸動而活。給地圖遺忘之地命名是你最大的回報。',
        quote: '「地圖盡頭，才是我故事的開始。」',
        struggle: '數月漂泊海上。不知何日能歸。思念故鄉的夜晚。',
        life: '若你很快適應新環境，或愛嘗試別人不敢做的事，那或許是前世探險家的印記。',
      },
      vi: {
        intro:
          'Ở kiếp này bạn cảm thấy sống nhất khi khám phá điều mới và đi con đường không ai chọn. Bạn trân trọng tự do và mạnh lên giữa thực địa. Năng lượng đó hợp Thời Đại Khám phá.',
        day: 'Bạn căng buồm biển lạ, định vị bằng sao, và sống vì khoảnh khắc chạm đất mới. Đặt tên cho chỗ bản đồ quên là phần thưởng lớn nhất.',
        quote: '"Nơi bản đồ chấm dứt, câu chuyện tôi bắt đầu."',
        struggle: 'Tháng trên biển. Không biết bao giờ về. Đêm nhớ bờ.',
        life: 'Nếu bạn thích nghi nhanh hoặc thử điều người khác không dám, có thể là dấu nhà thám hiểm kiếp trước.',
      },
      id: {
        intro:
          'Di kehidupan ini kamu paling hidup saat menjelajahi yang baru dan berjalan di jalan yang tak dipilih orang lain. Kamu menghargai kebebasan dan bertambah kuat di lapangan. Energi itu cocok untuk Zaman Penjelajahan.',
        day: 'Kamu berlayar di laut tak dikenal, menentukan posisi dengan bintang, dan hidup untuk getaran kaki pertama di daratan baru. Memberi nama pada yang dilupakan peta adalah hadiah terbesar.',
        quote: '"Di mana peta berakhir, ceritaku dimulai."',
        struggle: 'Bulan-bulan di laut. Tak tahu kapan pulang. Malam rindu pantai.',
        life: 'Jika kamu cepat beradaptasi atau mencoba yang orang lain tidak berani, mungkin itu jejak penjelajah di kehidupan lampau.',
      },
    }),
    empathyLevel: M(
      '🧭 탐험가·항해사·지리학자',
      '🧭 Explorer · Navigator · Geographer',
      '🧭 探検家・航海士・地理学者',
      '🧭 探险家·航海家·地理学者',
      '🧭 探險家·航海家·地理學者',
      '🧭 Nhà thám hiểm · Hoa tiêu · Nhà địa lý',
      '🧭 Penjelajah · Navigator · Ahli geografi'
    ),
    characteristics: M(
      '개척 정신·적응력·용기·결단력',
      'Pioneering spirit · Adaptability · Courage · Decisiveness',
      '開拓精神・適応力・勇気・決断力',
      '开拓精神·适应力·勇气·决断力',
      '開拓精神·適應力·勇氣·決斷力',
      'Tinh thần tiên phong · Thích nghi · Dũng khí · Quyết đoán',
      'Semangat perintis · Adaptasi · Keberanian · Keputusan'
    ),
    goodMatch: M(
      '마젤란·콜럼버스·정화·어니스트 섀클턴',
      'Magellan · Columbus · Zheng He · Shackleton',
      'マゼラン・コロンブス・鄭和・シャクルトン',
      '麦哲伦·哥伦布·郑和·沙克尔顿',
      '麥哲倫·哥倫布·鄭和·沙克爾頓',
      'Magellan · Columbus · Trịnh Hòa · Shackleton',
      'Magellan · Columbus · Zheng He · Shackleton'
    ),
    badMatch: M(
      '다음 생의 당신은 지도에 없는 곳에 이름을 새기는 사람입니다',
      'In your next life you carve names where no map goes.',
      '来世のあなたは、地図にない場所に名前を刻む人です。',
      '来生你会在地图之外刻下名字。',
      '來生你會在地圖之外刻下名字。',
      'Kiếp sau bạn khắc tên nơi bản đồ chưa tới.',
      'Di kehidupan berikutnya kamu menulis nama di tempat tanpa peta.'
    ),
  },
  {
    type: 'Type3',
    emoji: '📜',
    title: M(
      '세상을 바꾼 생각을 남긴, 철학자·사상가',
      'Philosopher—ideas that changed the world',
      '世界を変えた思想を残した哲学者・思想家',
      '留下改变世界的思想的哲学家',
      '留下改變世界的思想的哲學家',
      'Triết gia—những ý tưởng đổi cả thế giới',
      'Filsuf—gagasan yang mengubah dunia'
    ),
    shortDescription: M(
      '다음 생의 당신은 세상이 어떠해야 하는지를 생각하고 기록하고 가르칩니다.',
      'In your next life you think, write, and teach how the world ought to be.',
      '来世のあなたは、世界がどうあるべきかを考え、記し、教えます。',
      '来生你思考、书写并教导世界应当如何。',
      '來生你思考、書寫並教導世界應當如何。',
      'Kiếp sau bạn suy nghĩ, ghi chép và dạy thế giới nên ra sao.',
      'Di kehidupan berikutnya kamu berpikir, menulis, dan mengajar bagaimana dunia seharusnya.'
    ),
    era: M(
      '고대 그리스(기원전 5~4세기) 또는 조선시대 성리학자',
      'Ancient Greece (5th–4th c. BCE) or Joseon Neo-Confucian scholar',
      '古代ギリシア（紀元前5～4世紀）または朝鮮時代の性理学者',
      '古希腊（公元前 5–4 世纪）或朝鲜王朝性理学者',
      '古希臘（公元前 5–4 世紀）或朝鮮王朝性理學者',
      'Hy Lạp cổ đại (TK 5–4 TCN) hoặc học giả Nho giáo triều Joseon',
      'Yunani kuno (abad 5–4 SM) atau sarjana Neo-Konfusian Joseon'
    ),
    description: descFull7({
      ko: {
        intro:
          '현생의 당신은 머리를 쓰고 깊이 탐구할 때 에너지가 생기고 사유와 의미를 중요하게 여기는 타입입니다. 혼자 오래 생각하는 것이 불편하지 않고 자신이 이해한 것을 언어로 정밀하게 표현하고 싶어합니다. 이 에너지는 생각이 가장 강력한 무기였던 시대에 가장 잘 어울립니다.',
        day: '아고라에서 제자들과 대화하며 세상의 본질을 탐구하거나 서재에서 책을 읽고 논문을 씁니다. 내가 남긴 문장 하나가 수백 년 후에도 읽힙니다.',
        quote: '"나는 내가 아무것도 모른다는 것을 안다. 그래서 계속 묻는다"',
        struggle:
          '생각을 현실로 만드는 것이 늦거나 안 되는 경우. 시대를 앞서가서 오해받는 것.',
        life: '지금의 당신이 "왜?"라는 질문을 자주 하거나 설명하기 어려운 것을 언어로 정리하는 것을 좋아한다면 그것이 전생 철학자의 흔적입니다.',
      },
      en: {
        intro:
          'In this life you gain energy from deep thought and care about meaning and inquiry. Long solo reflection doesn’t bother you, and you want to say what you understand with precision. That fits an age when ideas were the sharpest weapons.',
        day: 'You debate with students in the agora or write in the study. A single sentence you leave behind may be read centuries later.',
        quote: '"I know that I know nothing. That is why I keep asking."',
        struggle: 'When thought turns to reality too slowly—or not at all. Being misunderstood for thinking ahead of your time.',
        life: 'If you often ask “why?” or enjoy turning the hard-to-say into words, that may be the philosopher’s trace.',
      },
      ja: {
        intro:
          '今世のあなたは深く考え探究するときにエネルギーが湧き、思索と意味を大切にするタイプです。長く一人で考えることに窮屈さを感じず、理解したことを言葉で精密に伝えたいと思います。そのエネルギーは「思想がいちばん強い武器」だった時代に合います。',
        day: 'アゴラで弟子たちと議論して世界の本質を探るか、書斎で読み書きします。残した一文が何百年後も読まれます。',
        quote: '「私は自分が何も知らないことを知っている。だから問い続ける」',
        struggle: '思考が現実になるのが遅い、またはならないこと。時代の先を行きすぎて誤解されること。',
        life: '今のあなたが「なぜ？」をよく問いかけ、言葉にしにくいことを言葉に整えるのが好きなら、それは前世の哲学者の痕跡かもしれません。',
      },
      zhCN: {
        intro:
          '今生的你在深度思考与探究时最有能量，重视意义与追问。长时间独处思考并不难受，想把理解精准说出。这种气质属于“思想即最强武器”的时代。',
        day: '你在广场与学生辩论探究本质，或在书房阅读写作。你留下的一句话可能被数百年后仍被阅读。',
        quote: '「我知道自己一无所知，所以才不断追问。」',
        struggle: '思想落地太慢或落不了地。因超前时代而被误解。',
        life: '若你常问“为什么”，或喜欢把难说清的事写成文字，也许是前世哲学家的痕迹。',
      },
      zhTW: {
        intro:
          '今生的你在深度思考與探究時最有能量，重視意義與追問。長時間獨處思考並不難受，想把理解精準說出。這股氣質屬於「思想即最強武器」的時代。',
        day: '你在廣場與學生辯論探究本質，或在書房閱讀寫作。你留下的一句話可能被數百年後仍被閱讀。',
        quote: '「我知道自己一無所知，所以才不斷追問。」',
        struggle: '思想落地太慢或落不了地。因超前時代而被誤解。',
        life: '若你常問「為什麼」，或喜歡把難說清的事寫成文字，也許是前世哲學家的痕跡。',
      },
      vi: {
        intro:
          'Ở kiếp này bạn nạp năng lượng từ tư duy sâu và trân trọng ý nghĩa cùng sự hỏi vặn. Ngồi một mình lâu không làm bạn khó chịu; bạn muốn nói điều mình hiểu một cách chính xác. Khí chất đó hợp thời mà ý tưởng là vũ khí sắc nhất.',
        day: 'Bạn tranh luận với học trò ở agora hoặc viết trong thư phòng. Một câu bạn để lại có thể được đọc nhiều thế kỷ sau.',
        quote: '"Tôi biết mình không biết gì. Vì vậy tôi cứ hỏi."',
        struggle: 'Tư duy thành hiện thực quá chậm—hoặc không thành. Bị hiểu lầm vì đi trước thời đại.',
        life: 'Nếu bạn hay hỏi “tại sao?” hoặc thích biến điều khó nói thành lời, có thể là dấu triết gia kiếp trước.',
      },
      id: {
        intro:
          'Di kehidupan ini kamu mendapat energi dari pemikiran mendalam dan menghargai makna serta pertanyaan. Merenung lama sendiri tidak mengganggu; kamu ingin mengucapkan pemahaman dengan tepat. Itu cocok zaman ketika ide adalah senjata paling tajam.',
        day: 'Kamu berdebat dengan murid di agora atau menulis di studi. Satu kalimat yang kamu tinggalkan bisa dibaca berabad-abad kemudian.',
        quote: '"Aku tahu bahwa aku tidak tahu apa-apa. Itulah sebabnya aku terus bertanya."',
        struggle: 'Pikiran jadi kenyataan terlalu lambat—atau tidak sama sekali. Disalahpahami karena berpikir di depan zaman.',
        life: 'Jika kamu sering bertanya “mengapa?” atau suka mengubah yang sulit diucapkan menjadi kata, mungkin itu jejak filosof di kehidupan lampau.',
      },
    }),
    empathyLevel: M(
      '📜 철학자·사상가·학자',
      '📜 Philosopher · Thinker · Scholar',
      '📜 哲学者・思想家・学者',
      '📜 哲学家·思想家·学者',
      '📜 哲學家·思想家·學者',
      '📜 Triết gia · Nhà tư tưởng · Học giả',
      '📜 Filsuf · Pemikir · Sarjana'
    ),
    characteristics: M(
      '깊이 있는 사고·언어 능력·논리적 설득·지식의 체계화',
      'Deep thought · Language skill · Logical persuasion · Systematizing knowledge',
      '深い思考・言語能力・論理的説得・知識の体系化',
      '深度思考·语言能力·逻辑说服·知识系统化',
      '深度思考·語言能力·邏輯說服·知識系統化',
      'Tư duy sâu · Ngôn ngữ · Thuyết phục logic · Hệ thống hóa tri thức',
      'Berpikir mendalam · Bahasa · Logika · Menyistemkan pengetahuan'
    ),
    goodMatch: M(
      '소크라테스·퇴계 이황·아리스토텔레스·공자',
      'Socrates · Yi Hwang · Aristotle · Confucius',
      'ソクラテス・退溪李滉・アリストテレス・孔子',
      '苏格拉底·李滉·亚里士多德·孔子',
      '蘇格拉底·李滉·亞里斯多德·孔子',
      'Socrates · Yi Hwang · Aristotle · Khổng Tử',
      'Socrates · Yi Hwang · Aristoteles · Kongzi'
    ),
    badMatch: M(
      '다음 생의 당신이 남긴 말 한 마디가 수백 년 동안 읽힐 것입니다',
      'A single line you leave will be read for centuries.',
      '来世のあなたが残した一言は何百年も読まれ続けます。',
      '来生你留下的一句话将被阅读数百年。',
      '來生你留下的一句話將被閱讀數百年。',
      'Một câu bạn để lại sẽ được đọc hàng thế kỷ.',
      'Satu kalimat yang kamu tinggalkan akan dibaca berabad-abad.'
    ),
  },
  {
    type: 'Type4',
    emoji: '🎨',
    title: M(
      '아름다움으로 시대를 기록한, 르네상스 예술가',
      'Renaissance artist—beauty that records an age',
      '美で時代を記録したルネサンスの芸術家',
      '以美记录时代的文艺复兴艺术家',
      '以美記錄時代的文藝復興藝術家',
      'Nghệ sĩ Phục hưng—vẻ đẹp ghi lại một thời đại',
      'Seniman Renaisans—keindahan yang merekam zaman'
    ),
    shortDescription: M(
      '다음 생의 당신은 붓과 끌로 세상이 기억할 것들을 만들어냅니다.',
      'In your next life you shape what the world will remember—with brush and chisel.',
      '来世のあなたは、筆とノミで世界が覚えているものを形にします。',
      '来生你用画笔与凿子塑造世界将铭记之物。',
      '來生你用畫筆與鑿子塑造世界將銘記之物。',
      'Kiếp sau bạn tạo nên điều thế giới sẽ nhớ—bằng cọ và đục.',
      'Di kehidupan berikutnya kamu membentuk yang akan diingat dunia—dengan kuas dan pahat.'
    ),
    era: M(
      '르네상스 이탈리아 (1400~1600년대 피렌체·베네치아·로마)',
      'Renaissance Italy (1400s–1600s Florence, Venice, Rome)',
      'ルネサンス期イタリア（15～17世紀 フィレンツェ・ヴェネツィア・ローマ）',
      '文艺复兴时期意大利（15–17 世纪，佛罗伦萨、威尼斯、罗马）',
      '文藝復興時期義大利（15–17 世紀，佛羅倫斯、威尼斯、羅馬）',
      'Phục hưng Ý (thế kỷ 15–17, Florence, Venice, Roma)',
      'Renaisans Italia (abad 15–17, Florence, Venesia, Roma)'
    ),
    description: descFull7({
      ko: {
        intro:
          '현생의 당신은 무언가를 창조해낼 때 가장 살아있는 느낌이 들고 자신이 만든 것이 사람들에게 깊은 인상을 줄 때 가장 큰 보람을 느끼는 타입입니다. 의미 있는 흔적을 남기고 싶고 깊고 오래도록 기억되는 삶을 원합니다. 이 에너지는 예술이 인류 최고의 언어였던 르네상스에 가장 잘 어울립니다.',
        day: '아틀리에에서 대작을 완성하거나 성당의 천장에 프레스코화를 그립니다. 후원자와 예술적 견해를 두고 협상하고 제자들을 가르치며 아름다움이란 무엇인가를 매일 묻습니다.',
        quote: '"예술은 진실을 거짓말로 말하는 방법이다"',
        struggle:
          '예술적 완성에 대한 끝없는 갈증. 후원자에게 의존해야 하는 현실. 인정받기까지의 긴 시간.',
        life: '지금의 당신이 무언가를 만들거나 표현할 때 시간 가는 줄 모르거나 자신이 만든 것에 유독 애착이 간다면 그것이 전생 예술가의 흔적입니다.',
      },
      en: {
        intro:
          'In this life you feel most alive when you create, and your deepest reward is when what you make moves people. You want a meaningful mark and a life remembered long and deep. That fits the Renaissance, when art was humanity’s highest language.',
        day: 'You finish masterworks in the studio or fresco cathedral ceilings. You negotiate with patrons over vision, teach apprentices, and ask every day what beauty is.',
        quote: '"Art is a way of telling the truth with lies."',
        struggle: 'Endless thirst for perfection. Dependence on patrons. Long years before recognition.',
        life: 'If you lose track of time making things or cling to what you’ve made, that may be the artist’s trace.',
      },
      ja: {
        intro:
          '今世のあなたは何かを創るときいちばん生きていて、自分の作品が人の心を動かすとき最大のやりがいを感じるタイプです。意味ある痕跡を残し、深く長く記憶される人生を望みます。そのエネルギーは芸術が人類最高の言語だったルネサンスに合います。',
        day: 'アトリエで大作を仕上げたり、聖堂の天井にフレスコを描きます。後援者とビジョンを巡って交渉し、弟子を教え、毎日「美とは何か」を問います。',
        quote: '「芸術は、嘘で真実を語る方法だ」',
        struggle: '完璧への尽きない渇き。後援者への依存。認められるまでの長い年月。',
        life: '今のあなたが創作や表現に没頭して時間を忘れたり、自分の作品に強く執着したりするなら、それは前世の芸術家の痕跡かもしれません。',
      },
      zhCN: {
        intro:
          '今生的你在创造时最有活力，作品打动他人时最有成就感。你想留下有意义的痕迹，被长久铭记。这种气质最配文艺复兴——艺术曾是人类最高的语言。',
        day: '你在画室完成巨作，或在教堂天顶绘制湿壁画。你与赞助人协商理念，教导学徒，每天追问美是什么。',
        quote: '「艺术是用谎言说出真相的方式。」',
        struggle: '对完美的无尽渴求。依赖赞助人。漫长等待被认可。',
        life: '若你创作时常忘记时间，或格外执着于自己的作品，也许是前世艺术家的印记。',
      },
      zhTW: {
        intro:
          '今生的你在創造時最有活力，作品打動他人時最有成就感。你想留下有意義的痕跡，被長久銘記。這股氣質最配文藝復興——藝術曾是人類最高的語言。',
        day: '你在畫室完成巨作，或在教堂天頂繪製濕壁畫。你與贊助人協商理念，教導學徒，每天追問美是什麼。',
        quote: '「藝術是用謊言說出真相的方式。」',
        struggle: '對完美的無盡渴求。依賴贊助人。漫長等待被認可。',
        life: '若你創作時常忘記時間，或格外執著於自己的作品，也許是前世藝術家的印記。',
      },
      vi: {
        intro:
          'Ở kiếp này bạn cảm thấy sống nhất khi sáng tạo, và thỏa mãn nhất khi tác phẩm chạm đến người khác. Bạn muốn để lại dấu ấn có ý nghĩa và được nhớ lâu sâu. Điều đó hợp Phục hưng—khi nghệ thuật là ngôn ngữ cao nhất của nhân loại.',
        day: 'Bạn hoàn thành kiệt tác trong xưởng hoặc vẽ trần nhà thờ. Đàm phán với nhà tài trợ, dạy học trò, mỗi ngày hỏi cái đẹp là gì.',
        quote: '"Nghệ thuật là cách nói sự thật bằng lời nói dối."',
        struggle: 'Khát khao hoàn hảo vô tận. Phụ thuộc nhà tài trợ. Nhiều năm mới được công nhận.',
        life: 'Nếu bạn quên thời gian khi làm ra điều gì đó hoặc bám vào tác phẩm của mình, có thể là dấu nghệ sĩ kiếp trước.',
      },
      id: {
        intro:
          'Di kehidupan ini kamu paling hidup saat mencipta, dan paling puas saat karyamu menyentuh orang lain. Kamu ingin meninggalkan jejak bermakna dan dikenang lama dan dalam. Itu cocok Renaisans—saat seni adalah bahasa tertinggi manusia.',
        day: 'Kamu menyelesaikan mahakarya di studio atau melukis langit-langit katedral. Bernegosiasi dengan pelindung, mengajar murid, setiap hari bertanya apa itu keindahan.',
        quote: '"Seni adalah cara mengatakan kebenaran dengan dusta."',
        struggle: 'Haus kesempurnaan tanpa akhir. Bergantung pada pelindung. Bertahun-tahun sebelum diakui.',
        life: 'Jika kamu lupa waktu saat berkarya atau melekat pada yang kamu buat, mungkin itu jejak seniman di kehidupan lampau.',
      },
    }),
    empathyLevel: M(
      '🎨 화가·조각가·건축가·음악가',
      '🎨 Painter · Sculptor · Architect · Musician',
      '🎨 画家・彫刻家・建築家・音楽家',
      '🎨 画家·雕塑家·建筑师·音乐家',
      '🎨 畫家·雕塑家·建築家·音樂家',
      '🎨 Họa sĩ · Điêu khắc · Kiến trúc sư · Nhạc sĩ',
      '🎨 Pelukis · Pemahat · Arsitek · Musisi'
    ),
    characteristics: M(
      '창의성·심미안·인내력·표현력·독창성',
      'Creativity · Aesthetic sense · Patience · Expression · Originality',
      '創造性・審美眼・忍耐・表現力・独創性',
      '创意·审美·耐心·表现力·独创性',
      '創意·審美·耐心·表現力·獨創性',
      'Sáng tạo · Thẩm mỹ · Kiên nhẫn · Biểu đạt · Độc đáo',
      'Kreativitas · Estetika · Kesabaran · Ekspresi · Orisinalitas'
    ),
    goodMatch: M(
      '레오나르도 다 빈치·미켈란젤로·모차르트·김홍도',
      'Leonardo da Vinci · Michelangelo · Mozart · Kim Hong-do',
      'レオナルド・ダ・ヴィンチ・ミケランジェロ・モーツァルト・金弘道',
      '达·芬奇·米开朗琪罗·莫扎特·金弘道',
      '達文西·米開朗基羅·莫札特·金弘道',
      'Leonardo · Michelangelo · Mozart · Kim Hong-do',
      'Leonardo da Vinci · Michelangelo · Mozart · Kim Hong-do'
    ),
    badMatch: M(
      '다음 생의 당신이 남긴 작품은 수백 년 뒤에도 미술관에 걸려 있을 것입니다',
      'What you leave will hang in museums centuries later.',
      '来世のあなたが残した作品は何百年後も美術館にかかっています。',
      '来生你的作品数百年后仍会挂在美术馆。',
      '來生你的作品數百年後仍會掛在美術館。',
      'Tác phẩm bạn để lại sẽ treo ở bảo tàng nhiều thế kỷ sau.',
      'Karya yang kamu tinggalkan akan dipajang di museum berabad-abad kemudian.'
    ),
  },
  {
    type: 'Type5',
    emoji: '🔭',
    title: M(
      '세상의 비밀을 풀어낸, 천재 발명가·과학자',
      'Genius inventor and scientist—secrets unlocked',
      '世界の秘密を解き明かした天才発明家・科学者',
      '揭开世界奥秘的天才发明家与科学家',
      '揭開世界奧祕的天才發明家與科學家',
      'Thiên tài phát minh và nhà khoa học—giải mã bí ẩn',
      'Penemu dan ilmuwan jenius—rahasia terbuka'
    ),
    shortDescription: M(
      '다음 생의 당신은 아무도 설명하지 못했던 것을 처음으로 설명해냅니다.',
      'In your next life you are first to explain what no one could.',
      '来世のあなたは、誰も説明できなかったことを初めて説明します。',
      '来生你第一个解释无人能解之物。',
      '來生你第一個解釋無人能解之物。',
      'Kiếp sau bạn là người đầu tiên giải thích điều chưa ai làm được.',
      'Di kehidupan berikutnya kamu pertama menjelaskan yang tak bisa dijelaskan siapa pun.'
    ),
    era: M(
      '과학혁명기(17세기) 또는 19세기 산업혁명 (영국·독일·프랑스)',
      'Scientific Revolution (17th c.) or Industrial Revolution (19th c. UK, Germany, France)',
      '科学革命期（17世紀）または産業革命（19世紀 英・独・仏）',
      '科学革命（17 世纪）或工业革命（19 世纪，英德法）',
      '科學革命（17 世紀）或工業革命（19 世紀，英德法）',
      'Cách mạng khoa học (TK 17) hoặc Cách mạng công nghiệp (TK 19, Anh, Đức, Pháp)',
      'Revolusi Ilmiah (abad 17) atau Revolusi Industri (abad 19, UK, Jerman, Prancis)'
    ),
    description: descFull7({
      ko: {
        intro:
          '현생의 당신은 아무도 해결하지 못한 문제를 자신이 돌파했을 때 가장 빛나고 자신이 남긴 것이 세상을 바꾸길 바라는 타입입니다. 혼자 깊이 탐구하는 시간이 편안하고 밤에 집중력이 올라가며 이론과 실험을 통해 진실을 찾아가는 것이 자연스럽습니다.',
        day: '밤새 실험실에서 가설을 검증하고 아무도 설명하지 못했던 현상에 대한 법칙을 발견합니다. 세상 사람들이 처음엔 믿지 않지만 결국 당신이 옳았다는 것이 밝혀집니다.',
        quote: '"나는 사과가 떨어지는 것을 봤다. 그리고 세상이 달라졌다"',
        struggle:
          '발견하기까지의 긴 시간. 당시 사회의 오해와 무시. 고독한 연구실의 밤.',
        life: '지금의 당신이 "왜 이게 이렇게 되지?"라는 질문을 멈추지 못하거나 한 분야를 완전히 이해할 때까지 파고드는 성향이 있다면 전생 과학자의 흔적입니다.',
      },
      en: {
        intro:
          'In this life you shine when you crack what no one else could, and you want what you leave to change the world. Solitary deep focus feels natural, concentration rises at night, and you chase truth through theory and experiment.',
        day: 'All night in the lab you test hypotheses and find laws for what no one could explain. At first the world doubts you—then proves you right.',
        quote: '"I saw an apple fall—and the world changed."',
        struggle: 'Long roads to discovery. Misunderstanding and neglect. Lonely nights in the lab.',
        life: 'If you can’t stop asking why things work as they do, or you tunnel into a field until it clicks, that may be the scientist’s trace.',
      },
      ja: {
        intro:
          '今世のあなたは誰も解けなかった問題を突破したときいちばん輝き、残したものが世界を変えてほしいと願うタイプです。一人で深く探る時間が心地よく、夜は集中が上がり、理論と実験で真理を追うのが自然です。',
        day: '一晩中ラボで仮説を検証し、誰も説明できなかった現象の法則を見つけます。最初は世界が疑う—やがてあなたが正しかったと示されます。',
        quote: '「リンゴが落ちるのを見た。そして世界が変わった」',
        struggle: '発見までの長い道のり。当時の社会の誤解と無視。孤独な研究室の夜。',
        life: '今のあなたが「なぜこうなるのか」をやめられないか、分野を「カチッ」と理解するまで掘り下げるなら、それは前世の科学者の痕跡かもしれません。',
      },
      zhCN: {
        intro:
          '今生的你在攻克无人能解的难题时最耀眼，希望留下的东西能改变世界。你享受独处深究，夜晚更专注，以理论与实验追寻真相。',
        day: '你通宵在实验室验证假设，为无人能解释的现象找到定律。世人起初不信——最终证明你是对的。',
        quote: '「我看见苹果落下——世界因此改变。」',
        struggle: '漫长的发现之路。时代的误解与忽视。实验室里孤独的夜。',
        life: '若你忍不住问“为什么会这样”，或钻研到豁然开朗，也许是前世科学家的印记。',
      },
      zhTW: {
        intro:
          '今生的你在攻克無人能解的難題時最耀眼，希望留下的東西能改變世界。你享受獨處深究，夜晚更專注，以理論與實驗追尋真相。',
        day: '你通宵在實驗室驗證假設，為無人能解釋的現象找到定律。世人起初不信——最終證明你是對的。',
        quote: '「我看見蘋果落下——世界因此改變。」',
        struggle: '漫長的發現之路。時代的誤解與忽視。實驗室裡孤獨的夜。',
        life: '若你忍不住問「為什麼會這樣」，或鑽研到豁然開朗，也許是前世科學家的印記。',
      },
      vi: {
        intro:
          'Ở kiếp này bạn tỏa sáng khi giải được điều không ai làm được, và muốn điều bạn để lại thay đổi thế giới. Tập trung sâu một mình thấy tự nhiên, ban đêm tỉnh hơn, bạn đuổi theo chân lý bằng lý thuyết và thí nghiệm.',
        day: 'Cả đêm trong lab bạn kiểm chứng giả thuyết và tìm quy luật cho hiện tượng không ai giải thích. Lúc đầu thế giới nghi ngờ—rồi chứng minh bạn đúng.',
        quote: '"Tôi thấy quả táo rơi—và thế giới đổi thay."',
        struggle: 'Đường dài đến khám phá. Hiểu lầm và bỏ qua. Đêm cô đơn trong lab.',
        life: 'Nếu bạn không ngừng hỏi vì sao mọi thứ vận hành như vậy, hoặc đào sâu một lĩnh vực đến khi tất cả “khớp”, có thể là dấu nhà khoa học kiếp trước.',
      },
      id: {
        intro:
          'Di kehidupan ini kamu bersinar saat memecahkan yang tak bisa orang lain pecahkan, dan ingin yang kamu tinggalkan mengubah dunia. Fokus mendalam sendiri terasa alami, malam hari lebih tajam, kamu mengejar kebenaran lewat teori dan percobaan.',
        day: 'Semalaman di lab kamu menguji hipotesis dan menemukan hukum untuk fenomena yang tak bisa dijelaskan. Awalnya dunia meragukan—lalu membuktikan kamu benar.',
        quote: '"Aku melihat apel jatuh—dan dunia berubah."',
        struggle: 'Jalan panjang menuju penemuan. Salah paham dan pengabaian. Malam sepi di lab.',
        life: 'Jika kamu tak bisa berhenti bertanya mengapa sesuatu berjalan begitu, atau menggali bidang sampai semuanya “klik”, mungkin itu jejak ilmuwan di kehidupan lampau.',
      },
    }),
    empathyLevel: M(
      '🔭 발명가·자연철학자·과학자',
      '🔭 Inventor · Natural philosopher · Scientist',
      '🔭 発明家・自然哲学者・科学者',
      '🔭 发明家·自然哲学家·科学家',
      '🔭 發明家·自然哲學家·科學家',
      '🔭 Nhà phát minh · Triết gia tự nhiên · Nhà khoa học',
      '🔭 Penemu · Filsuf alam · Ilmuwan'
    ),
    characteristics: M(
      '탐구심·집중력·논리적 사고·끈기·창의적 문제 해결',
      'Curiosity · Focus · Logical thinking · Tenacity · Creative problem-solving',
      '探究心・集中力・論理的思考・粘り・創造的問題解決',
      '好奇心·专注力·逻辑思维·坚持·创造性解决问题',
      '好奇心·專注力·邏輯思維·堅持·創造性解決問題',
      'Tò mò · Tập trung · Tư duy logic · Bền bỉ · Giải quyết sáng tạo',
      'Rasa ingin tahu · Fokus · Logika · Gigih · Pemecahan masalah kreatif'
    ),
    goodMatch: M(
      '뉴턴·다빈치·테슬라·마리 퀴리·장영실',
      'Newton · da Vinci · Tesla · Marie Curie · Jang Yeong-sil',
      'ニュートン・ダ・ヴィンチ・テスラ・マリー・キュリー・ジャン・ヨンシル',
      '牛顿·达·芬奇·特斯拉·居里夫人·蒋英实',
      '牛頓·達文西·特斯拉·居禮夫人·蔣英實',
      'Newton · da Vinci · Tesla · Marie Curie · Jang Yeong-sil',
      'Newton · da Vinci · Tesla · Marie Curie · Jang Yeong-sil'
    ),
    badMatch: M(
      '다음 생의 당신이 발견한 법칙은 교과서에 실릴 것입니다',
      'The law you discover will land in textbooks.',
      '来世のあなたが発見した法則は教科書に載ります。',
      '来生你发现的定律会写进教科书。',
      '來生你發現的定律會寫進教科書。',
      'Định luật bạn khám phá sẽ vào sách giáo khoa.',
      'Hukum yang kamu temukan akan masuk buku pelajaran.'
    ),
  },
  {
    type: 'Type6',
    emoji: '✍️',
    title: M(
      '글로 세상을 움직인, 전설의 작가·시인',
      'Legendary writer—moving the world with words',
      '言葉で世界を動かした伝説の作家・詩人',
      '以文字撼动世界的传奇作家与诗人',
      '以文字撼動世界的傳奇作家與詩人',
      'Nhà văn huyền thoại—lay động thế giới bằng chữ',
      'Penulis legendaris—menggerakkan dunia dengan kata'
    ),
    shortDescription: M(
      '다음 생의 당신은 펜 하나로 세상이 기억할 이야기를 만들어냅니다.',
      'In your next life one pen builds the stories the world will remember.',
      '来世のあなたは、一本のペンで世界が覚える物語をつくります。',
      '来生你用笔写出世界将铭记的故事。',
      '來生你用筆寫出世界將銘記的故事。',
      'Kiếp sau một cây bút dựng nên câu chuyện thế giới sẽ nhớ.',
      'Di kehidupan berikutnya satu pena menulis cerita yang dunia ingat.'
    ),
    era: M(
      '낭만주의 시대 (19세기 초 영국·프랑스) 또는 조선시대 문인',
      'Romantic era (early 19th c. Britain, France) or Joseon literati',
      'ロマン主義時代（19世紀初頭 英・仏）または朝鮮時代の文人',
      '浪漫主义时期（19 世纪初英法）或朝鲜王朝文人',
      '浪漫主義時期（19 世紀初英法）或朝鮮王朝文人',
      'Thời lãng mạn (đầu TK 19 Anh, Pháp) hoặc văn nhân triều Joseon',
      'Zaman Romantis (awal abad 19 Inggris, Prancis) atau sastrawan Joseon'
    ),
    description: descFull7({
      ko: {
        intro:
          '현생의 당신은 깊이 있는 창조와 탐구에서 에너지를 얻고 소수와 깊게 연결되며 자신이 남긴 것이 오래도록 남길 바라는 타입입니다. 밤의 조용한 시간에 가장 집중이 잘 되고 언어와 이야기에 특별한 감각이 있습니다. 이 에너지는 언어가 가장 강력한 무기였던 문학의 시대에 가장 잘 어울립니다.',
        day: '새벽의 고요함 속에서 펜을 들고 세상에서 가장 아름다운 문장을 씁니다. 독자들이 내 글을 읽고 울거나 웃거나 삶을 다르게 보게 됩니다. 내가 쓴 한 줄이 수백 년 후에도 사람들의 입에 오르내립니다.',
        quote: '"내가 쓰는 것이 아니다. 세상이 나를 통해 말하는 것이다"',
        struggle:
          '살아있을 때 인정받지 못하는 경우. 글이 나올 때까지의 고통. 세상과 혼자 떨어져 있는 느낌.',
        life: '지금의 당신이 일기를 쓰거나 감정을 언어로 표현하는 것이 자연스럽거나 책을 읽다 특정 문장에서 멈추는 경험이 많다면 그것이 전생 작가의 흔적입니다.',
      },
      en: {
        intro:
          'In this life you draw energy from deep creation and inquiry, bond deeply with a few, and want what you leave to endure. Quiet nights focus you best, and you have a special feel for language and story. That fits an age when words were the strongest weapons.',
        day: 'In dawn stillness you write the world’s most beautiful sentences. Readers weep, laugh, or see life anew. A single line of yours is quoted centuries later.',
        quote: '"I do not write—the world speaks through me."',
        struggle: 'No recognition in your lifetime. The pain before the page. Feeling apart from the world.',
        life: 'If journaling or naming feelings comes easily, or certain lines stop you cold when you read, that may be the writer’s trace.',
      },
      ja: {
        intro:
          '今世のあなたは深い創造と探究からエネルギーを得て、少数と深くつながり、残したものが長く残ることを望むタイプです。静かな夜にいちばん集中でき、言葉と物語に特別な感覚があります。そのエネルギーは言葉が最強の武器だった文学の時代に合います。',
        day: '夜明けの静けさの中でペンを取り、世界でいちばん美しい文を書きます。読者は泣き、笑い、人生を違って見ます。あなたの一行が何百年後も引用されます。',
        quote: '「私が書いているのではない。世界が私を通して語っている」',
        struggle: '生前に認められないこと。言葉が生まれるまでの苦しみ。世界から一人取り残された感覚。',
        life: '今のあなたが日記を書いたり感情を言葉にするのが自然だったり、読書中に特定の文で立ち止まることが多いなら、それは前世の作家の痕跡かもしれません。',
      },
      zhCN: {
        intro:
          '今生的你从深度创造与探究中汲取能量，与少数人深交，希望所留之物长久存续。深夜最易专注，你对语言与故事有特别的感觉。这种气质属于文学的时代——文字曾是最强的武器。',
        day: '在黎明的静谧里提笔，写下世间最美的句子。读者或哭或笑，或以新的眼光看待人生。你写下的某一行会在数百年后仍被引用。',
        quote: '「不是我执笔——是世界借我开口。」',
        struggle: '生前得不到认可。文字诞生前的痛苦。与世界疏离的感觉。',
        life: '若你习惯写日记、善于用语言表达情绪，或读书时常被某句击中停住，也许是前世作家的印记。',
      },
      zhTW: {
        intro:
          '今生的你從深度創造與探究中汲取能量，與少數人深交，希望所留之物長久存續。深夜最易專注，你對語言與故事有特別的感覺。這股氣質屬於文學的時代——文字曾是最強的武器。',
        day: '在黎明的靜謐裡提筆，寫下世間最美的句子。讀者或哭或笑，或以新的眼光看待人生。你寫下的某一行會在數百年後仍被引用。',
        quote: '「不是我執筆——是世界借我開口。」',
        struggle: '生前得不到認可。文字誕生前的痛苦。與世界疏離的感覺。',
        life: '若你習慣寫日記、善於用語言表達情緒，或讀書時常被某句擊中停住，也許是前世作家的印記。',
      },
      vi: {
        intro:
          'Ở kiếp này bạn lấy năng lượng từ sáng tạo và tìm tòi sâu, gắn bó với vài người, và muốn điều bạn để lại tồn tại lâu. Đêm yên tập trung nhất; bạn có cảm nhận đặc biệt với ngôn ngữ và câu chuyện. Điều đó hợp thời mà chữ là vũ khí mạnh nhất.',
        day: 'Trong lặng sớm mai bạn viết những câu đẹp nhất. Người đọc khóc, cười, hay nhìn đời khác đi. Một dòng của bạn được trích dẫn nhiều thế kỷ sau.',
        quote: '"Tôi không viết—thế giới nói qua tôi."',
        struggle: 'Không được công nhận khi còn sống. Nỗi đau trước khi chữ ra đời. Cảm giác tách khỏi thế giới.',
        life: 'Nếu nhật ký hay đặt tên cảm xúc dễ dàng, hoặc có câu khiến bạn dừng lại khi đọc, có thể là dấu nhà văn kiếp trước.',
      },
      id: {
        intro:
          'Di kehidupan ini kamu mengambil energi dari penciptaan dan penelusuran mendalam, terikat erat dengan sedikit orang, dan ingin yang kamu tinggalkan bertahan. Malam sunyi paling fokus; kamu punya rasa khusus untuk bahasa dan cerita. Itu cocok zaman ketika kata adalah senjata terkuat.',
        day: 'Di hening fajar kamu menulis kalimat tercantik. Pembaca menangis, tertawa, atau melihat hidup baru. Satu barismu dikutip berabad-abad kemudian.',
        quote: '"Aku tidak menulis—dunia berbicara lewat diriku."',
        struggle: 'Tak diakui seumur hidup. Sakit sebelum halaman terisi. Merasa terpisah dari dunia.',
        life: 'Jika jurnal atau menamai perasaan mudah, atau ada baris yang membuatmu berhenti saat membaca, mungkin itu jejak penulis di kehidupan lampau.',
      },
    }),
    empathyLevel: M(
      '✍️ 작가·시인·극작가·문인',
      '✍️ Writer · Poet · Playwright · Man of letters',
      '✍️ 作家・詩人・劇作家・文人',
      '✍️ 作家·诗人·剧作家·文人',
      '✍️ 作家·詩人·劇作家·文人',
      '✍️ Nhà văn · Nhà thơ · Kịch tác · Văn nhân',
      '✍️ Penulis · Penyair · Dramawan · Sastrawan'
    ),
    characteristics: M(
      '언어 감각·감수성·관찰력·내면의 깊이·공감 능력',
      'Language sense · Sensitivity · Observation · Inner depth · Empathy',
      '言語感覚・感受性・観察力・内面の深さ・共感力',
      '语感·敏感·观察·内心深度·共情',
      '語感·敏感·觀察·內心深度·共情',
      'Cảm ngôn ngữ · Nhạy cảm · Quan sát · Chiều sâu · Đồng cảm',
      'Rasa bahasa · Sensitivitas · Pengamatan · Kedalaman · Empati'
    ),
    goodMatch: M(
      '셰익스피어·윤동주·도스토옙스키·제인 오스틴·정철',
      'Shakespeare · Yun Dong-ju · Dostoevsky · Jane Austen · Jeong Cheol',
      'シェイクスピア・尹東柱・ドストエフスキー・ジェイン・オースティン・鄭澈',
      '莎士比亚·尹东柱·陀思妥耶夫斯基·简·奥斯汀·郑澈',
      '莎士比亞·尹東柱·杜斯妥也夫斯基·珍·奧斯汀·鄭澈',
      'Shakespeare · Yun Dong-ju · Dostoevsky · Jane Austen · Jeong Cheol',
      'Shakespeare · Yun Dong-ju · Dostoevsky · Jane Austen · Jeong Cheol'
    ),
    badMatch: M(
      '다음 생의 당신이 쓴 문장은 수백 년 뒤에도 사람들의 마음을 움직일 것입니다',
      'Your sentences will move hearts centuries from now.',
      '来世のあなたが書いた文は何百年後も人の心を動かします。',
      '来生你写下的句子数百年后仍会打动人心。',
      '來生你寫下的句子數百年後仍會打動人心。',
      'Câu bạn viết sẽ chạm tim người đọc nhiều thế kỷ sau.',
      'Kalimat yang kamu tulis akan menyentuh hati berabad-abad kemudian.'
    ),
  },
];

/** 결과 description에서 인트로와 4개 하위 섹션 분리 (로케일별 마커) */
export function parsePhase3ReincarnationDescription(
  desc: string,
  locale: string
): {
  intro: string;
  dayInLife: string;
  quote: string;
  struggles: string;
  lifeConnection: string;
} {
  const m = PHASE3_REBORN_DESC_MARKERS[locale] ?? PHASE3_REBORN_DESC_MARKERS.ko;
  const MARK_DAY = m.day;
  const MARK_QUOTE = m.quote;
  const MARK_STRUGGLE = m.struggle;
  const MARK_LIFE = m.life;

  const idxDay = desc.indexOf(MARK_DAY);
  if (idxDay === -1) {
    return { intro: desc.trim(), dayInLife: '', quote: '', struggles: '', lifeConnection: '' };
  }

  const intro = desc.slice(0, idxDay).trim();
  let rest = desc.slice(idxDay + MARK_DAY.length);

  const idxQuote = rest.indexOf(MARK_QUOTE);
  if (idxQuote === -1) {
    return { intro, dayInLife: rest.trim(), quote: '', struggles: '', lifeConnection: '' };
  }
  const dayInLife = rest.slice(0, idxQuote).trim();
  rest = rest.slice(idxQuote + MARK_QUOTE.length);

  const idxStruggle = rest.indexOf(MARK_STRUGGLE);
  if (idxStruggle === -1) {
    return { intro, dayInLife, quote: rest.trim(), struggles: '', lifeConnection: '' };
  }
  const quote = rest.slice(0, idxStruggle).trim();
  rest = rest.slice(idxStruggle + MARK_STRUGGLE.length);

  const idxLife = rest.indexOf(MARK_LIFE);
  if (idxLife === -1) {
    return { intro, dayInLife, quote, struggles: rest.trim(), lifeConnection: '' };
  }
  const struggles = rest.slice(0, idxLife).trim();
  const lifeConnection = rest.slice(idxLife + MARK_LIFE.length).trim();

  return { intro, dayInLife, quote, struggles, lifeConnection };
}

export function calculatePhase3ReincarnationJobResult(answers: number[]): string {
  const totalScore = answers.reduce((sum, score) => sum + score, 0);
  if (totalScore >= 0 && totalScore <= 1) return 'Type1';
  if (totalScore >= 2 && totalScore <= 3) return 'Type2';
  if (totalScore >= 4 && totalScore <= 6) return 'Type3';
  if (totalScore >= 7 && totalScore <= 9) return 'Type4';
  if (totalScore >= 10 && totalScore <= 11) return 'Type5';
  if (totalScore === 12) return 'Type6';
  return 'Type6';
}
