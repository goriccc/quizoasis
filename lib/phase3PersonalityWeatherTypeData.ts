/**
 * 내 성격은 어떤 날씨일까? — 12문항 이미지 2지선다, A=0 B=1, 총점 0~12 → 6유형
 *
 * Supabase `tests-thumbnails` 업로드 파일명 규칙:
 * - 썸네일: p3_test_personality_weather_type.webp
 * - 답변 이미지: p3_test_personality_weather_type_q{n}a~b.webp (12문항 × 2 = 24장)
 */

function M(ko: string, en: string, ja: string, zhCN: string, zhTW: string, vi: string, id: string): Record<string, string> {
  return { ko, en, ja, 'zh-CN': zhCN, 'zh-TW': zhTW, vi, id };
}

export const phase3PersonalityWeatherTypeTestFallback = {
  title: M(
    '내 성격은 어떤 날씨일까?',
    'What Weather Is My Personality?',
    'あなたの性格はどんな天気？',
    '我的性格是什么天气？',
    '我的性格是什麼天氣？',
    'Tính cách của bạn giống thời tiết nào?',
    'Kepribadianku Seperti Cuaca Apa?'
  ),
  description: M(
    '12문항 이미지 2지선다로 보는 성격 날씨 6유형. #성격 #날씨 #감성 #심리 #공유',
    '12 image A/B questions reveal 6 personality weather types. #personality #weather #emotion #psychology #share',
    '画像2択12問で見る性格天気6タイプ。#性格 #天気 #感性 #心理 #シェア',
    '12 道图片二选一，解读性格天气 6 种类型。#性格 #天气 #感性 #心理 #分享',
    '12 題圖片二選一，解讀性格天氣 6 種類型。#性格 #天氣 #感性 #心理 #分享',
    '12 câu chọn ảnh A/B khám phá 6 kiểu thời tiết tính cách. #tính_cách #thời_tiết #cảm_xúc #tâm_lý #chia_sẻ',
    '12 pertanyaan pilih gambar A/B: 6 tipe cuaca kepribadian. #kepribadian #cuaca #emosional #psikologi #share'
  ),
  tags: {
    ko: ['성격', '날씨', '감성', '심리', '공유'],
    en: ['Personality', 'Weather', 'Emotion', 'Psychology', 'Share'],
    ja: ['性格', '天気', '感性', '心理', 'シェア'],
    'zh-CN': ['性格', '天气', '感性', '心理', '分享'],
    'zh-TW': ['性格', '天氣', '感性', '心理', '分享'],
    vi: ['Tính cách', 'Thời tiết', 'Cảm xúc', 'Tâm lý', 'Chia sẻ'],
    id: ['Kepribadian', 'Cuaca', 'Emosional', 'Psikologi', 'Share'],
  },
} as const;

export interface Phase3PersonalityWeatherTypeQuestion {
  id: number;
  question: Record<string, string>;
  options: { image: string; label: Record<string, string>; score: number }[];
}

export interface Phase3PersonalityWeatherTypeResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  personalityWeather: Record<string, string>;
  weatherKeywords: Record<string, string>;
  weatherPersonTrait: Record<string, string>;
  weatherWeakness: Record<string, string>;
  goodMatchWeather: Record<string, string>;
  clashWeather: Record<string, string>;
  weatherMessage: Record<string, string>;
  weatherOneLiner: Record<string, string>;
  shareSnippet: Record<string, string>;
}

export function calculatePhase3PersonalityWeatherTypeResult(scores: number[]): string {
  const total = scores.reduce((a, b) => a + (b ?? 0), 0);
  if (total <= 1) return 'Type1';
  if (total <= 3) return 'Type2';
  if (total <= 6) return 'Type3';
  if (total <= 9) return 'Type4';
  if (total <= 11) return 'Type5';
  return 'Type6';
}

const base = 'p3_test_personality_weather_type';

function makeQuestion(
  id: number,
  question: Record<string, string>,
  optionA: Record<string, string>,
  optionB: Record<string, string>
): Phase3PersonalityWeatherTypeQuestion {
  return {
    id,
    question,
    options: [
      { image: `${base}_q${id}a.webp`, label: optionA, score: 0 },
      { image: `${base}_q${id}b.webp`, label: optionB, score: 1 },
    ],
  };
}

export const phase3PersonalityWeatherTypeQuestions: Phase3PersonalityWeatherTypeQuestion[] = [
  makeQuestion(
    1,
    M(
      '오늘 아침 창문을 열었을 때 보고 싶은 풍경은?',
      'When you open the window this morning, what scene do you want to see?',
      '今朝窓を開けたとき、見たい景色は？',
      '今天早上打开窗户，你想看到什么景色？',
      '今天早上打開窗戶，你想看到什麼景色？',
      'Sáng nay mở cửa sổ, bạn muốn thấy cảnh gì?',
      'Saat membuka jendela pagi ini, pemandangan apa yang ingin kamu lihat?'
    ),
    M(
      '눈부시게 맑고 파란 하늘. 구름 한 점 없는 아침',
      'A dazzling clear blue sky. A cloudless morning',
      '眩しいほど晴れ渡った青空。雲一つない朝',
      '耀眼清澈的蓝天，万里无云的早晨',
      '耀眼清澈的藍天，萬里無雲的早晨',
      'Bầu trời xanh trong vắt, chói chang. Buổi sáng không một đám mây',
      'Langit biru cerah menyilaukan. Pagi tanpa awan'
    ),
    M(
      '부슬부슬 빗소리가 들리는 촉촉한 회색 아침',
      'A moist gray morning with the sound of gentle rain',
      'しとしと雨音が聞こえる、しっとりした灰色の朝',
      '细雨淅沥、湿润的灰色早晨',
      '細雨淅瀝、濕潤的灰色早晨',
      'Buổi sáng xám ẩm với tiếng mưa rơi lách tách',
      'Pagi abu-abu lembap dengan suara hujan gerimis'
    )
  ),
  makeQuestion(
    2,
    M(
      '친구와의 약속 당일 아침 내 모습은?',
      'On the morning of a meetup with a friend, what am I like?',
      '友達との約束当日の朝、私はどんな様子？',
      '和朋友有约的当天早上，我是什么样？',
      '和朋友有約的當天早上，我是什麼樣？',
      'Sáng ngày hẹn gặp bạn, tôi như thế nào?',
      'Pagi hari janjian dengan teman, seperti apa diriku?'
    ),
    M(
      '일찍 일어나 준비하고 약속 장소로 신나게 향한다',
      'Wake up early, get ready, and head excitedly to the meetup spot',
      '早起きして準備し、ワクワクしながら約束の場所へ向かう',
      '早早起床准备，兴奋地前往约定地点',
      '早早起床準備，興奮地前往約定地點',
      'Dậy sớm, chuẩn bị và hào hứng đi đến nơi hẹn',
      'Bangun pagi, siap-siap, dan antusias menuju tempat janjian'
    ),
    M(
      '막상 나가려니 집에 있고 싶다는 생각이 든다',
      'When it is time to leave, I suddenly want to stay home',
      'いざ出かけようとすると、家にいたいと思う',
      '真要出门时，反而想待在家里',
      '真要出門時，反而想待在家裡',
      'Đến lúc ra ngoài lại muốn ở nhà',
      'Saat mau keluar, tiba-tiba ingin tetap di rumah'
    )
  ),
  makeQuestion(
    3,
    M(
      '감정이 올라올 때 나는?',
      'When emotions rise, what do I do?',
      '感情が湧いてきたとき、私は？',
      '情绪涌上来时，我会？',
      '情緒湧上來時，我會？',
      'Khi cảm xúc dâng lên, tôi sẽ?',
      'Saat emosi naik, aku akan?'
    ),
    M(
      '바로 표현한다. 티가 나고 금방 알아챌 수 있다',
      'Express it right away. It shows clearly and people notice quickly',
      'すぐ表現する。顔に出て、すぐ気づかれる',
      '立刻表达出来，很明显，别人很快能察觉',
      '立刻表達出來，很明顯，別人很快能察覺',
      'Bộc lộ ngay. Rõ ràng và ai cũng nhận ra nhanh',
      'Langsung mengekspresikannya. Terlihat jelas dan cepat disadari'
    ),
    M(
      '혼자 삭힌다. 겉으로는 잘 드러나지 않는다',
      'Process it alone. It does not show much on the outside',
      '一人で抱え込む。外にはあまり出ない',
      '独自消化，外表不太显露',
      '獨自消化，外表不太顯露',
      'Tự xử lý một mình. Bên ngoài khó thấy',
      'Menahan sendiri. Tidak banyak terlihat di luar'
    )
  ),
  makeQuestion(
    4,
    M(
      '가장 끌리는 산책 시간대는?',
      'What walk time appeals to you most?',
      'いちばん惹かれる散歩の時間帯は？',
      '最吸引你的散步时段是？',
      '最吸引你的散步時段是？',
      'Khung giờ đi dạo nào hấp dẫn bạn nhất?',
      'Jam berjalan-jalan paling menarik bagimu?'
    ),
    M(
      '햇빛이 눈부신 오전 11시. 기온이 딱 좋은 맑은 낮',
      '11 a.m. with dazzling sunlight. A clear day with perfect temperature',
      '日差しが眩しい午前11時。気温がちょうどいい晴れた昼',
      '上午11点阳光耀眼，气温刚好的晴朗白天',
      '上午11點陽光耀眼，氣溫剛好的晴朗白天',
      '11 giờ sáng nắng chói chang. Ban ngày trong trẻo, nhiệt độ vừa phải',
      'Jam 11 pagi dengan sinar matahari menyilaukan. Siang cerah dengan suhu pas'
    ),
    M(
      '노을이 지는 오후 6시. 하늘이 황금빛으로 물드는 시간',
      '6 p.m. as the sun sets. When the sky turns golden',
      '夕日が沈む午後6時。空が黄金色に染まる時間',
      '傍晚6点日落时分，天空染上金色',
      '傍晚6點日落時分，天空染上金色',
      '6 giờ chiều lúc hoàng hôn. Khi bầu trời nhuộm vàng',
      'Jam 6 sore saat matahari terbenam. Langit berwarna keemasan'
    )
  ),
  makeQuestion(
    5,
    M(
      '지금 가장 끌리는 빗소리는?',
      'What rain sound appeals to you most right now?',
      '今いちばん惹かれる雨の音は？',
      '现在最吸引你的雨声是？',
      '現在最吸引你的雨聲是？',
      'Tiếng mưa nào hấp dẫn bạn nhất lúc này?',
      'Suara hujan apa yang paling menarik bagimu sekarang?'
    ),
    M(
      '거세게 쏟아지는 여름 소나기 빗소리',
      'The sound of a fierce summer downpour',
      '激しく降り注ぐ夏のにわか雨の音',
      '猛烈倾泻的夏日阵雨声',
      '猛烈傾瀉的夏日陣雨聲',
      'Tiếng mưa rào mùa hè đổ xối dữ dội',
      'Suara hujan deras musim panas yang mengguyur'
    ),
    M(
      '창문에 살살 맺히는 부슬비 빗소리',
      'The sound of drizzle gently tapping the window',
      '窓に静かに落ちる霧雨の音',
      '轻轻打在窗户上的毛毛雨声',
      '輕輕打在窗戶上的毛毛雨聲',
      'Tiếng mưa phùn rơi nhẹ trên cửa sổ',
      'Suara gerimis yang menetes lembut di jendela'
    )
  ),
  makeQuestion(
    6,
    M(
      '처음 만난 사람에게 나는?',
      'With someone I meet for the first time, I?',
      '初めて会った人に対して、私は？',
      '对第一次见面的人，我会？',
      '對第一次見面的人，我會？',
      'Với người mới gặp lần đầu, tôi sẽ?',
      'Dengan orang yang baru pertama kali kutemui, aku?'
    ),
    M(
      '먼저 말을 걸고 자연스럽게 분위기를 만든다',
      'Start the conversation first and naturally set the mood',
      '先に話しかけて、自然に雰囲気を作る',
      '先开口搭话，自然营造气氛',
      '先開口搭話，自然營造氣氛',
      'Chủ động bắt chuyện và tự nhiên tạo không khí',
      'Memulai percakapan dulu dan menciptakan suasana dengan natural'
    ),
    M(
      '조용히 있다가 상대가 다가오면 천천히 열린다',
      'Stay quiet and slowly open up when the other person approaches',
      '静かにいて、相手が近づいたらゆっくり心を開く',
      '安静待着，对方靠近后再慢慢打开心扉',
      '安靜待著，對方靠近後再慢慢打開心扉',
      'Im lặng, rồi từ từ mở lòng khi đối phương đến gần',
      'Diam dulu, lalu perlahan terbuka saat lawan mendekat'
    )
  ),
  makeQuestion(
    7,
    M(
      '지금 가장 끌리는 하늘 색감은?',
      'What sky color appeals to you most right now?',
      '今いちばん惹かれる空の色合いは？',
      '现在最吸引你的天空色彩是？',
      '現在最吸引你的天空色彩是？',
      'Tông màu bầu trời nào hấp dẫn bạn nhất lúc này?',
      'Nuansa langit apa yang paling menarik bagimu sekarang?'
    ),
    M(
      '구름 하나 없는 선명한 코발트 블루',
      'A vivid cobalt blue with not a cloud in sight',
      '雲一つない、鮮やかなコバルトブルー',
      '万里无云的鲜明钴蓝色',
      '萬里無雲的鮮明鈷藍色',
      'Xanh coban rực rỡ, không một đám mây',
      'Biru cobalt jernih tanpa awan'
    ),
    M(
      '보랏빛과 분홍이 섞인 황혼의 그라데이션',
      'A twilight gradient blending purple and pink',
      '紫とピンクが混ざった黄昏のグラデーション',
      '紫与粉交融的黄昏渐变',
      '紫與粉交融的黃昏漸層',
      'Gradient hoàng hôn pha tím và hồng',
      'Gradasi senja yang memadukan ungu dan pink'
    )
  ),
  makeQuestion(
    8,
    M(
      '힘든 일이 생겼을 때 나는?',
      'When something hard happens, what do I do?',
      'つらいことが起きたとき、私は？',
      '遇到难事时，我会？',
      '遇到難事時，我會？',
      'Khi gặp chuyện khó, tôi sẽ?',
      'Saat hal sulit terjadi, aku akan?'
    ),
    M(
      '빠르게 털고 다시 앞으로 나아간다',
      'Shake it off quickly and move forward again',
      'すぐ切り替えて、また前に進む',
      '快速振作，再次向前迈进',
      '快速振作，再次向前邁進',
      'Gạt nhanh và tiến lên phía trước',
      'Cepat move on dan melangkah maju lagi'
    ),
    M(
      '충분히 느끼고 혼자만의 시간을 갖는다',
      'Feel it fully and take time alone',
      '十分に感じて、一人の時間を持つ',
      '充分感受，并留出独处时间',
      '充分感受，並留出獨處時間',
      'Cảm nhận đủ đầy và dành thời gian một mình',
      'Merasakannya sepenuhnya dan meluangkan waktu sendiri'
    )
  ),
  makeQuestion(
    9,
    M(
      '지금 가장 끌리는 빛의 감각은?',
      'What kind of light appeals to you most right now?',
      '今いちばん惹かれる光の感覚は？',
      '现在最吸引你的光线感觉是？',
      '現在最吸引你的光線感覺是？',
      'Cảm giác ánh sáng nào hấp dẫn bạn nhất lúc này?',
      'Sensasi cahaya apa yang paling menarik bagimu sekarang?'
    ),
    M(
      '뜨겁게 내리쬐는 한낮의 직사광선',
      'Blazing midday direct sunlight',
      '灼熱に照りつける真昼の直射日光',
      '正午灼热直射的阳光',
      '正午灼熱直射的陽光',
      'Ánh nắng trực tiếp gay gắt giữa trưa',
      'Sinar matahari langsung terik di siang hari'
    ),
    M(
      '구름 사이로 새어 나오는 부드러운 간접광',
      'Soft indirect light filtering through the clouds',
      '雲の間から漏れる柔らかな間接光',
      '从云间透出的柔和间接光',
      '從雲間透出的柔和間接光',
      'Ánh sáng gián tiếp dịu nhẹ xuyên qua mây',
      'Cahaya tidak langsung lembut tembus awan'
    )
  ),
  makeQuestion(
    10,
    M(
      '가장 끌리는 계절 날씨는?',
      'What seasonal weather appeals to you most?',
      'いちばん惹かれる季節の天気は？',
      '最吸引你的季节天气是？',
      '最吸引你的季節天氣是？',
      'Thời tiết theo mùa nào hấp dẫn bạn nhất?',
      'Cuaca musiman apa yang paling menarik bagimu?'
    ),
    M(
      '쨍하고 뜨거운 한여름 맑은 날',
      'A blazing hot clear midsummer day',
      'ギンギンに照る真夏の晴れた日',
      '烈日当空的盛夏晴天',
      '烈日當空的盛夏晴天',
      'Ngày hè nắng gắt trong vắt',
      'Hari musim panas yang terik dan cerah'
    ),
    M(
      '포근하고 눈 오는 겨울 저녁',
      'A cozy winter evening with falling snow',
      'ほっこりと雪が降る冬の夜',
      '温馨飘雪的冬夜',
      '溫馨飄雪的冬夜',
      'Đêm đông ấm áp có tuyết rơi',
      'Malam musim dingin hangat dengan salju turun'
    )
  ),
  makeQuestion(
    11,
    M(
      '지금 나를 가장 잘 표현하는 날씨 소리는?',
      'What weather sound best represents you right now?',
      '今の自分をいちばんよく表す天気の音は？',
      '现在最能代表你的天气声音是？',
      '現在最能代表你的天氣聲音是？',
      'Tiếng thời tiết nào thể hiện bạn nhất lúc này?',
      'Suara cuaca apa yang paling mewakili dirimu sekarang?'
    ),
    M(
      '파도처럼 거세게 부는 바람 소리',
      'The sound of wind blowing fiercely like waves',
      '波のように激しく吹く風の音',
      '像海浪般猛烈吹拂的风声',
      '像海浪般猛烈吹拂的風聲',
      'Tiếng gió thổi mạnh như sóng biển',
      'Suara angin kencang seperti ombak'
    ),
    M(
      '먼 산에서 들려오는 고요한 천둥 소리',
      'The quiet sound of distant thunder from far mountains',
      '遠い山から聞こえる静かな雷の音',
      '从远山传来的安静雷声',
      '從遠山傳來的安靜雷聲',
      'Tiếng sấm yên lặng vọng từ núi xa',
      'Suara petir tenang dari gunung jauh'
    )
  ),
  makeQuestion(
    12,
    M(
      '나를 가장 잘 표현하는 날씨 한 장면은?',
      'What weather scene best represents you?',
      '自分をいちばんよく表す天気の一場面は？',
      '最能代表你的天气场景是？',
      '最能代表你的天氣場景是？',
      'Khung cảnh thời tiết nào thể hiện bạn nhất?',
      'Adegan cuaca apa yang paling mewakili dirimu?'
    ),
    M(
      '구름 하나 없이 눈부신 낮 12시의 맑은 하늘',
      'A dazzling clear sky at noon with not a cloud in sight',
      '雲一つない、眩しい正午12時の晴れた空',
      '万里无云、正午12点耀眼的晴朗天空',
      '萬里無雲、正午12點耀眼的晴朗天空',
      'Bầu trời trong vắt lúc trưa 12 giờ, không một đám mây',
      'Langit cerah menyilaukan jam 12 siang tanpa awan'
    ),
    M(
      '비 온 뒤 젖은 도로 위 반짝이는 가로등 불빛',
      'Streetlights glittering on wet roads after the rain',
      '雨上がりの濡れた道路に映る街灯の光',
      '雨后湿润路面上闪烁的路灯光',
      '雨後濕潤路面上閃爍的路燈光',
      'Ánh đèn đường lấp lánh trên mặt đường ướt sau mưa',
      'Cahaya lampu jalan berkilau di jalan basah setelah hujan'
    )
  ),
];

export const phase3PersonalityWeatherTypeResults: Phase3PersonalityWeatherTypeResult[] = [
  {
    type: 'Type1',
    emoji: '☀️',
    title: M(
      '존재 자체가 에너지인, 쨍한 맑음',
      'Blazing Clear Skies: Pure Energy in Person',
      '存在そのものがエネルギー、ギンギンの晴れ',
      '存在本身就是能量，烈日当空的晴朗',
      '存在本身就是能量，烈日當空的晴朗',
      'Bản thân đã là năng lượng: Trời nắng chói chang',
      'Keberadaannya sendiri adalah energi: Cerah menyilaukan'
    ),
    shortDescription: M(
      '당신의 성격 날씨는 구름 한 점 없이 쨍한 맑음입니다.',
      'Your personality weather is blazing clear skies with not a cloud in sight.',
      'あなたの性格天気は、雲一つないギンギンの晴れです。',
      '你的性格天气是万里无云、烈日当空的晴朗。',
      '你的性格天氣是萬里無雲、烈日當空的晴朗。',
      'Thời tiết tính cách của bạn là trời nắng chói chang, không một đám mây.',
      'Cuaca kepribadianmu adalah cerah menyilaukan tanpa awan.'
    ),
    description: M(
      '당신이 있는 곳은 어디서든 밝아집니다. 감정을 숨기지 않고 솔직하게 표현하며, 먼저 다가가고 먼저 웃는 사람. 어두운 상황에서도 밝은 면을 먼저 보고, 주변 사람들에게 에너지를 나눠주는 것이 자연스러운 당신. 때로는 너무 강한 햇빛처럼 압도적으로 느껴질 수도 있지만, 그 밝음이 누군가에게는 오늘의 가장 큰 선물입니다.',
      'Wherever you are, things get brighter. You express emotions honestly without hiding them, approach first, and smile first. Even in dark situations, you see the bright side first, and sharing energy with others comes naturally. Sometimes you may feel overwhelming like strong sunlight, but that brightness can be the greatest gift of the day for someone.',
      'あなたがいる場所はどこでも明るくなります。感情を隠さず正直に表現し、先に近づき、先に笑う人。暗い状況でも明るい面を先に見て、周りにエネルギーを分け与えるのが自然なあなた。時には強すぎる日差しのように圧倒的に感じられることもありますが、その明るさは誰かにとって今日最大の贈り物です。',
      '有你在的地方都会变亮。你不隐藏情绪，坦率表达，主动靠近，主动微笑。即使在黑暗情境中也会先看光明的一面，自然地给周围的人分享能量。有时像过强的阳光一样让人喘不过气，但那份明亮可能是某人今天最大的礼物。',
      '有你在的地方都會變亮。你不隱藏情緒，坦率表達，主動靠近，主動微笑。即使在黑暗情境中也會先看光明的一面，自然地給周圍的人分享能量。有時像過強的陽光一樣讓人喘不過氣，但那份明亮可能是某人今天最大的禮物。',
      'Nơi bạn ở đâu cũng sáng lên. Bạn không giấu cảm xúc, bộc lộ thẳng thắn, chủ động đến gần và cười trước. Dù trong hoàn cảnh u ám vẫn nhìn mặt sáng trước, tự nhiên chia sẻ năng lượng cho mọi người. Đôi khi át đảo như nắng quá gắt, nhưng sự rạng rỡ đó có thể là món quà lớn nhất trong ngày của ai đó.',
      'Di mana pun kamu berada, semuanya jadi lebih terang. Kamu tidak menyembunyikan emosi, mengekspresikannya jujur, mendekat duluan, dan tersenyum duluan. Bahkan di situasi gelap, kamu melihat sisi terang lebih dulu dan secara alami berbagi energi. Terkadang terasa overwhelming seperti sinar matahari yang terlalu kuat, tapi kecerahan itu bisa jadi hadiah terbesar hari ini bagi seseorang.'
    ),
    personalityWeather: M(
      '쨍한 맑음 ☀️',
      'Blazing Clear Skies ☀️',
      'ギンギンの晴れ ☀️',
      '烈日晴朗 ☀️',
      '烈日晴朗 ☀️',
      'Nắng chói chang ☀️',
      'Cerah menyilaukan ☀️'
    ),
    weatherKeywords: M(
      '에너지·솔직함·밝음·적극성·선명한 존재감',
      'Energy·Honesty·Brightness·Proactivity·Clear presence',
      'エネルギー・正直さ・明るさ・積極性・はっきりした存在感',
      '能量·坦率·明亮·积极·鲜明存在感',
      '能量·坦率·明亮·積極·鮮明存在感',
      'Năng lượng·Thẳng thắn·Sáng·Chủ động·Sự hiện diện rõ ràng',
      'Energi·Kejujuran·Kecerahan·Proaktif·Kehadiran yang jelas'
    ),
    weatherPersonTrait: M(
      '방에 들어서는 순간 분위기를 바꾸는 사람. 지루할 틈을 안 주는 사람',
      'Someone who changes the mood the moment they enter. Someone who leaves no room for boredom',
      '部屋に入った瞬間雰囲気を変える人。退屈の隙を与えない人',
      '一进房间就改变气氛的人，不给人无聊机会的人',
      '一進房間就改變氣氛的人，不給人無聊機會的人',
      'Người vừa bước vào đã đổi không khí. Người không để ai cơ hội chán nản',
      'Orang yang mengubah suasana begitu masuk ruangan. Orang yang tidak memberi celah bosan'
    ),
    weatherWeakness: M(
      '쉬지 않고 달리다가 갑자기 지쳐버리는 날이 옴. 흐린 날의 감성을 이해하기 어려울 수 있음',
      'Days when you run without rest and suddenly burn out. You may find cloudy-day sensibilities hard to understand',
      '休まず走り続けて突然疲れ果てる日がある。曇りの日の感性を理解しにくいことも',
      '有不休息地奔跑然后突然精疲力尽的日子，可能难以理解阴天式的感性',
      '有不休息地奔跑然後突然精疲力盡的日子，可能難以理解陰天式的感性',
      'Có ngày chạy không nghỉ rồi đột ngột kiệt sức. Có thể khó hiểu cảm xúc kiểu ngày u ám',
      'Ada hari lari tanpa istirahat lalu tiba-tiba kehabisan tenaga. Sensibilitas hari mendung mungkin sulit dipahami'
    ),
    goodMatchWeather: M(
      'Type 3 소나기 (맑음이 소나기를 맞이하면 무지개가 생김)',
      'Type 3 Summer Shower (when clear skies meet a shower, a rainbow appears)',
      'Type 3 にわか雨（晴れがにわか雨を迎えると虹が生まれる）',
      'Type 3 阵雨（晴朗遇上阵雨会出现彩虹）',
      'Type 3 陣雨（晴朗遇上陣雨會出現彩虹）',
      'Type 3 Mưa rào mùa hè (trời nắng gặp mưa rào sẽ có cầu vồng)',
      'Type 3 Hujan deras musim panas (cerah bertemu hujan deras, pelangi muncul)'
    ),
    clashWeather: M(
      'Type 5 안개 (투명함과 불투명함의 충돌)',
      'Type 5 Dawn Fog (a clash of transparency and opacity)',
      'Type 5 朝霧（透明さと不透明さの衝突）',
      'Type 5 晨雾（透明与不透明的冲突）',
      'Type 5 晨霧（透明與不透明的衝突）',
      'Type 5 Sương mù bình minh (xung đột giữa trong suốt và mờ đục)',
      'Type 5 Kabut fajar (bentrokan transparansi dan ketidakjelasan)'
    ),
    weatherMessage: M(
      '오늘도 쨍하게 빛나주세요. 당신의 맑음이 누군가의 흐린 날을 바꿉니다',
      'Shine brightly again today. Your clear skies can change someone\'s cloudy day',
      '今日もギンギンに輝いてください。あなたの晴れが誰かの曇りの日を変えます',
      '今天也请耀眼地发光吧，你的晴朗能改变某人的阴天',
      '今天也請耀眼地發光吧，你的晴朗能改變某人的陰天',
      'Hôm nay cũng hãy tỏa sáng rực rỡ. Sự trong trẻo của bạn có thể đổi ngày u ám của ai đó',
      'Hari ini juga bersinarlah dengan cerah. Kejernihanmu bisa mengubah hari mendung seseorang'
    ),
    weatherOneLiner: M(
      '그늘 하나 없이 눈부신 사람',
      'A dazzling person with not a shadow in sight',
      '影ひとつない、眩しい人',
      '没有阴影、耀眼的人',
      '沒有陰影、耀眼的人',
      'Người rực rỡ không một bóng râm',
      'Orang menyilaukan tanpa bayangan'
    ),
    shareSnippet: M(
      '내 성격 날씨는 쨍한 맑음 ☀️ 어디서든 분위기 밝히는 사람. 이게 나였구나 → 너는 어떤 날씨야?',
      'My personality weather is blazing clear skies ☀️ Someone who brightens the mood anywhere. So this is me → What weather are you?',
      '私の性格天気はギンギンの晴れ ☀️ どこでも雰囲気を明るくする人。これが私だった → あなたはどんな天気？',
      '我的性格天气是烈日晴朗 ☀️ 到哪里都能点亮气氛的人。原来是我 → 你是什么天气？',
      '我的性格天氣是烈日晴朗 ☀️ 到哪裡都能點亮氣氛的人。原來是我 → 你是什麼天氣？',
      'Thời tiết tính cách tôi là nắng chói chang ☀️ Người làm sáng không khí ở đâu cũng vậy. Hóa ra là tôi → Bạn là thời tiết gì?',
      'Cuaca kepribadianku cerah menyilaukan ☀️ Orang yang mencerahkan suasana di mana pun. Ternyata ini aku → cuaca kamu apa?'
    ),
  },
  {
    type: 'Type2',
    emoji: '🌇',
    title: M(
      '따뜻하게 물드는, 황금빛 노을',
      'Warmly Blushing Golden Sunset',
      '温かく染まる、黄金の夕焼け',
      '温暖晕染的黄金晚霞',
      '溫暖暈染的黃金晚霞',
      'Hoàng hôn vàng ấm áp dần nhuộm trời',
      'Senja keemasan yang hangat memenuhi langit'
    ),
    shortDescription: M(
      '당신의 성격 날씨는 황금빛으로 물드는 저녁 노을입니다.',
      'Your personality weather is an evening sunset painted in gold.',
      'あなたの性格天気は、黄金色に染まる夕方の夕焼けです。',
      '你的性格天气是染上金色的傍晚晚霞。',
      '你的性格天氣是染上金色的傍晚晚霞。',
      'Thời tiết tính cách của bạn là hoàng hôn buổi tối nhuộm vàng.',
      'Cuaca kepribadianmu adalah senja sore yang berwarna keemasan.'
    ),
    description: M(
      '하루 중 가장 아름다운 순간은 정오가 아니라 노을이 지는 시간입니다. 화려하지 않지만 자꾸 바라보게 되는 따뜻한 빛, 오래 함께한 사람일수록 더 아름다워 보이는 매력. 당신은 처음보다 알수록 더 좋아지는 사람입니다. 감정이 풍부하고 서정적이며, 주변의 작은 것에서 아름다움을 발견하는 감수성을 가졌습니다.',
      'The most beautiful moment of the day is not noon but when the sun sets. A warm light that is not flashy but keeps drawing your gaze, a charm that grows more beautiful the longer you stay together. You are someone who gets better the more you are known. You are emotional and lyrical, with a sensitivity that finds beauty in small things around you.',
      '一日でいちばん美しい瞬間は正午ではなく、夕日が沈む時間です。派手ではないのについ見とれてしまう温かい光、一緒にいるほど美しく見える魅力。あなたは初めより知れば知るほど好きになる人です。感情が豊かで叙情的であり、周りの小さなものから美しさを見つける感性を持っています。',
      '一天中最美的时刻不是正午，而是日落时分。不华丽却让人忍不住一直看的温暖光芒，相处越久越显得美丽的魅力。你是越了解越喜欢的人。情感丰富、富有诗意，能在身边的小事中发现美的感性。',
      '一天中最美的時刻不是正午，而是日落時分。不華麗卻讓人忍不住一直看的溫暖光芒，相處越久越顯得美麗的魅力。你是越了解越喜歡的人。情感豐富、富有詩意，能在身邊的小事中發現美的感性。',
      'Khoảnh khắc đẹp nhất trong ngày không phải giữa trưa mà là lúc hoàng hôn. Ánh sáng ấm không lộng lẫy nhưng khiến người ta cứ nhìn mãi, sức hút càng đẹp hơn khi ở bên lâu. Bạn là người càng hiểu càng thích. Giàu cảm xúc, đầy chất thơ, có khả năng thấy vẻ đẹp trong những điều nhỏ bé xung quanh.',
      'Momen paling indah sehari bukan tengah hari, melainkan saat matahari terbenam. Cahaya hangat yang tidak mencolok tapi terus menarik pandangan, pesona yang makin indah seiring waktu bersama. Kamu orang yang makin dikenal makin disukai. Emosional, puitis, dan peka menemukan keindahan dalam hal-hal kecil di sekitarmu.'
    ),
    personalityWeather: M(
      '황금빛 노을 🌇',
      'Golden Sunset 🌇',
      '黄金の夕焼け 🌇',
      '黄金晚霞 🌇',
      '黃金晚霞 🌇',
      'Hoàng hôn vàng 🌇',
      'Senja keemasan 🌇'
    ),
    weatherKeywords: M(
      '따뜻함·감수성·오래가는 매력·서정성·깊이',
      'Warmth·Sensitivity·Lasting charm·Lyricism·Depth',
      '温かさ・感性・長く続く魅力・叙情性・深さ',
      '温暖·感性·持久魅力·诗意·深度',
      '溫暖·感性·持久魅力·詩意·深度',
      'Ấm áp·Cảm xúc·Sức hút bền·Chất thơ·Chiều sâu',
      'Kehangatan·Sensitivitas·Pesona tahan lama·Puitis·Kedalaman'
    ),
    weatherPersonTrait: M(
      '알면 알수록 좋아지는 사람. 오래 함께하고 싶은 사람',
      'Someone who gets better the more you know them. Someone you want to stay with for a long time',
      '知れば知るほど好きになる人。長く一緒にいたい人',
      '越了解越喜欢的人，想长久相伴的人',
      '越了解越喜歡的人，想長久相伴的人',
      'Người càng hiểu càng thích. Người muốn ở bên lâu dài',
      'Orang yang makin dikenal makin disukai. Orang yang ingin lama-lama ditemani'
    ),
    weatherWeakness: M(
      '감정에 오래 머무는 편이라 털어내는 데 시간이 걸림',
      'You tend to linger in emotions, so shaking them off takes time',
      '感情に長く留まる傾向があり、切り替えるのに時間がかかる',
      '容易在情绪里停留较久，需要时间才能释怀',
      '容易在情緒裡停留較久，需要時間才能釋懷',
      'Hay ở lại trong cảm xúc lâu nên cần thời gian để gạt bỏ',
      'Cenderung lama terjebak emosi, jadi butuh waktu untuk move on'
    ),
    goodMatchWeather: M(
      'Type 1 맑음 (맑음이 있어야 노을이 더 아름다워짐)',
      'Type 1 Clear Skies (clear skies make the sunset even more beautiful)',
      'Type 1 晴れ（晴れがあってこそ夕焼けがより美しくなる）',
      'Type 1 晴朗（有晴朗，晚霞才更美）',
      'Type 1 晴朗（有晴朗，晚霞才更美）',
      'Type 1 Trời nắng (cần nắng thì hoàng hôn mới đẹp hơn)',
      'Type 1 Cerah (butuh cerah agar senja makin indah)'
    ),
    clashWeather: M(
      'Type 4 흐림 (비슷한 조용함인데 에너지 방향이 달라 답답할 수 있음)',
      'Type 4 Cloudy Day (similar quietness but different energy direction can feel stifling)',
      'Type 4 曇り（似た静けさでもエネルギーの方向が違い息苦しく感じることも）',
      'Type 4 阴天（同样安静但能量方向不同，可能感到压抑）',
      'Type 4 陰天（同樣安靜但能量方向不同，可能感到壓抑）',
      'Type 4 Ngày u ám (cùng sự yên lặng nhưng hướng năng lượng khác, có thể bức bối)',
      'Type 4 Mendung (senyap serupa tapi arah energi berbeda, bisa terasa sesak)'
    ),
    weatherMessage: M(
      '가장 아름다운 빛은 지는 순간에 납니다. 당신처럼',
      'The most beautiful light appears at the moment of setting. Just like you',
      'いちばん美しい光は沈む瞬間に生まれます。あなたのように',
      '最美的光出现在落下的瞬间，就像你一样',
      '最美的光出現在落下的瞬間，就像你一樣',
      'Ánh sáng đẹp nhất sinh ra ở khoảnh khắc lặn. Giống như bạn',
      'Cahaya paling indah muncul saat terbenam. Seperti dirimu'
    ),
    weatherOneLiner: M(
      '볼수록 더 아름다워지는 황혼빛 사람',
      'A twilight person who grows more beautiful the more you look',
      '見れば見るほど美しくなる黄昏の人',
      '越看越美的黄昏之人',
      '越看越美的黃昏之人',
      'Người hoàng hôn càng nhìn càng đẹp',
      'Orang senja yang makin dilihat makin indah'
    ),
    shareSnippet: M(
      '내 성격 날씨는 황금빛 노을 🌇 알수록 따뜻해지는 사람. 이 감성 너무 좋다',
      'My personality weather is golden sunset 🌇 Someone who feels warmer the more you know them. Love this vibe',
      '私の性格天気は黄金の夕焼け 🌇 知れば知るほど温かくなる人。この感性が好き',
      '我的性格天气是黄金晚霞 🌇 越了解越温暖的人。这氛围太喜欢了',
      '我的性格天氣是黃金晚霞 🌇 越了解越溫暖的人。這氛圍太喜歡了',
      'Thời tiết tính cách tôi là hoàng hôn vàng 🌇 Người càng hiểu càng ấm. Cảm giác này quá thích',
      'Cuaca kepribadianku senja keemasan 🌇 Orang yang makin dikenal makin hangat. Vibe ini suka banget'
    ),
  },
  {
    type: 'Type3',
    emoji: '⛈️',
    title: M(
      '감정에 솔직한, 여름 소나기',
      'Emotionally Honest Summer Shower',
      '感情に正直な、夏のにわか雨',
      '对情感坦诚的夏日阵雨',
      '對情感坦誠的夏日陣雨',
      'Thẳng thắn với cảm xúc: Mưa rào mùa hè',
      'Jujur pada emosi: Hujan deras musim panas'
    ),
    shortDescription: M(
      '당신의 성격 날씨는 예고 없이 쏟아지는 여름 소나기입니다.',
      'Your personality weather is a summer shower that pours down without warning.',
      'あなたの性格天気は、予告なしに降り注ぐ夏のにわか雨です。',
      '你的性格天气是毫无预警倾泻而下的夏日阵雨。',
      '你的性格天氣是毫無預警傾瀉而下的夏日陣雨。',
      'Thời tiết tính cách của bạn là mưa rào mùa hè đổ xuống không báo trước.',
      'Cuaca kepribadianmu adalah hujan deras musim panas yang turun tanpa peringatan.'
    ),
    description: M(
      '맑다가 갑자기 쏟아지고, 쏟아지다가 또 언제 그랬냐는 듯 개는 소나기. 당신은 감정이 솔직합니다. 기쁠 때 기쁘고, 화날 때 화나고, 슬플 때 슬픔이 그대로 드러납니다. 감정을 쌓아두지 않고 바로 표현하기 때문에 시원하고 후련한 매력이 있습니다. 소나기 후 공기처럼, 당신 곁에 있으면 관계가 더 맑아지는 느낌이 듭니다.',
      'Clear one moment, then suddenly pouring, then clearing again as if nothing happened. You are honest with your emotions. Happy when happy, angry when angry, sad when sad. Because you express feelings right away instead of holding them in, you have a refreshing and liberating charm. Like the air after a shower, being near you makes relationships feel clearer.',
      '晴れていたかと思うと突然降り、降ったかと思うと何事もなかったかのように晴れるにわか雨。あなたは感情に正直です。嬉しい時は嬉しく、怒る時は怒り、悲しい時は悲しみがそのまま表れます。感情を溜め込まずすぐ表現するから、爽やかでスッキリした魅力があります。にわか雨後の空気のように、あなたのそばにいると関係がより澄む感じがします。',
      '刚才还晴朗，突然倾盆而下，又很快放晴，像什么都没发生过。你对情感很坦诚。开心就开心，生气就生气，悲伤就流露悲伤。因为不囤积情绪、立刻表达，所以有爽快、痛快的魅力。像阵雨后的空气一样，在你身边会让关系变得更清澈。',
      '剛才還晴朗，突然傾盆而下，又很快放晴，像什麼都沒發生過。你對情感很坦誠。開心就開心，生氣就生氣，悲傷就流露悲傷。因為不囤積情緒、立刻表達，所以有爽快、痛快的魅力。像陣雨後的空氣一樣，在你身邊會讓關係變得更清澈。',
      'Vừa nắng bỗng đổ xối, rồi lại tan nhanh như chưa từng có. Bạn thẳng thắn với cảm xúc. Vui thì vui, giận thì giận, buồn thì buồn lộ ra rõ. Vì không giữ lại mà bộc lộ ngay nên có sức hút mát mẻ, nhẹ nhõm. Như không khí sau mưa rào, ở bên bạn khiến mối quan hệ trong hơn.',
      'Cerah lalu tiba-tiba hujan deras, lalu reda lagi seolah tidak pernah terjadi. Kamu jujur pada emosi. Senang saat senang, marah saat marah, sedih saat sedih. Karena tidak menumpuk perasaan dan langsung mengekspresikannya, kamu punya pesona yang segar dan lega. Seperti udara setelah hujan, dekat denganmu membuat hubungan terasa lebih jernih.'
    ),
    personalityWeather: M(
      '여름 소나기 ⛈️',
      'Summer Shower ⛈️',
      '夏のにわか雨 ⛈️',
      '夏日阵雨 ⛈️',
      '夏日陣雨 ⛈️',
      'Mưa rào mùa hè ⛈️',
      'Hujan deras musim panas ⛈️'
    ),
    weatherKeywords: M(
      '감정 솔직함·즉각적 반응·에너지 폭발·빠른 회복·시원함',
      'Emotional honesty·Instant reaction·Energy burst·Quick recovery·Refreshment',
      '感情の正直さ・即時反応・エネルギー爆発・早い回復・爽やかさ',
      '情感坦诚·即时反应·能量爆发·快速恢复·清爽',
      '情感坦誠·即時反應·能量爆發·快速恢復·清爽',
      'Thẳng thắn cảm xúc·Phản ứng tức thì·Bùng nổ năng lượng·Hồi phục nhanh·Mát mẻ',
      'Kejujuran emosi·Reaksi instan·Ledakan energi·Pemulihan cepat·Kesegaran'
    ),
    weatherPersonTrait: M(
      '감정을 숨기지 않아서 함께 있으면 관계가 투명해지는 사람',
      'Someone who does not hide emotions, making relationships feel transparent when together',
      '感情を隠さないから一緒にいると関係が透明になる人',
      '不隐藏情绪，在一起会让关系变得透明的人',
      '不隱藏情緒，在一起會讓關係變得透明的人',
      'Người không giấu cảm xúc, ở bên nhau khiến mối quan hệ trong suốt hơn',
      'Orang yang tidak menyembunyikan emosi, sehingga hubungan terasa transparan saat bersama'
    ),
    weatherWeakness: M(
      '감정 기복이 크게 느껴질 수 있음. 주변이 갑작스러운 변화에 당황하는 경우가 있음',
      'Mood swings may feel intense. People around you may be startled by sudden changes',
      '感情の起伏が大きく感じられることがある。周りが急な変化に戸惑うことも',
      '情绪波动可能很明显，周围的人有时会对突然变化感到措手不及',
      '情緒波動可能很明顯，周圍的人有時會對突然變化感到措手不及',
      'Biến động cảm xúc có thể rất lớn. Mọi người quanh đôi khi bối rối vì thay đổi đột ngột',
      'Naik turun emosi bisa terasa besar. Orang sekitar kadang kaget dengan perubahan mendadak'
    ),
    goodMatchWeather: M(
      'Type 1 맑음 (소나기 후 무지개가 되는 조합)',
      'Type 1 Clear Skies (a combination that becomes a rainbow after the shower)',
      'Type 1 晴れ（にわか雨の後に虹になる組み合わせ）',
      'Type 1 晴朗（阵雨过后变成彩虹的组合）',
      'Type 1 晴朗（陣雨過後變成彩虹的組合）',
      'Type 1 Trời nắng (kết hợp thành cầu vồng sau mưa rào)',
      'Type 1 Cerah (kombinasi yang jadi pelangi setelah hujan deras)'
    ),
    clashWeather: M(
      'Type 5 안개 (솔직함과 불투명함이 충돌)',
      'Type 5 Dawn Fog (honesty clashes with opacity)',
      'Type 5 朝霧（正直さと不透明さが衝突）',
      'Type 5 晨雾（坦诚与不透明发生冲突）',
      'Type 5 晨霧（坦誠與不透明發生衝突）',
      'Type 5 Sương mù bình minh (sự thẳng thắn xung đột với sự mờ đục)',
      'Type 5 Kabut fajar (kejujuran bentrok dengan ketidakjelasan)'
    ),
    weatherMessage: M(
      '쏟아지고 나면 세상이 더 맑아집니다. 당신의 솔직함이 그렇습니다',
      'After the downpour, the world feels clearer. That is what your honesty does',
      '降り注いだ後、世界はより澄みます。あなたの正直さがそうです',
      '倾泻之后，世界会更清澈，你的坦诚就是这样',
      '傾瀉之後，世界會更清澈，你的坦誠就是這樣',
      'Sau cơn mưa rào, thế giới trong hơn. Sự thẳng thắn của bạn vậy đó',
      'Setelah hujan deras, dunia terasa lebih jernih. Kejujuranmu begitu'
    ),
    weatherOneLiner: M(
      '예고 없이 쏟아지지만 금방 개는, 솔직하고 시원한 사람',
      'Someone honest and refreshing who pours down without warning but clears quickly',
      '予告なしに降るがすぐ晴れる、正直で爽やかな人',
      '毫无预警倾泻而下却很快放晴，坦诚又爽快的人',
      '毫無預警傾瀉而下卻很快放晴，坦誠又爽快的人',
      'Người thẳng thắn, mát mẻ, đổ xối không báo trước nhưng tan nhanh',
      'Orang jujur dan segar, hujan deras tanpa peringatan tapi cepat reda'
    ),
    shareSnippet: M(
      '내 성격 날씨는 여름 소나기 ⛈️ 감정에 솔직하고 빠르게 개는 사람. 완전 맞아',
      'My personality weather is a summer shower ⛈️ Honest with emotions and clears quickly. Totally me',
      '私の性格天気は夏のにわか雨 ⛈️ 感情に正直ですぐ晴れる人。完全に当てはまる',
      '我的性格天气是夏日阵雨 ⛈️ 对情感坦诚、很快放晴的人。完全就是我',
      '我的性格天氣是夏日陣雨 ⛈️ 對情感坦誠、很快放晴的人。完全就是我',
      'Thời tiết tính cách tôi là mưa rào mùa hè ⛈️ Người thẳng thắn cảm xúc và tan nhanh. Đúng hết',
      'Cuaca kepribadianku hujan deras musim panas ⛈️ Jujur emosi dan cepat reda. Pas banget'
    ),
  },
  {
    type: 'Type4',
    emoji: '🌥️',
    title: M(
      '조용히 깊어지는, 흐린 날',
      'Quietly Deepening Cloudy Day',
      '静かに深まる、曇りの日',
      '安静渐深的阴天',
      '安靜漸深的陰天',
      'Ngày u ám âm thầm sâu dần',
      'Hari mendung yang perlahan makin dalam'
    ),
    shortDescription: M(
      '당신의 성격 날씨는 구름이 가득하지만 빛이 새어 나오는 흐린 날입니다.',
      'Your personality weather is a cloudy day full of clouds but with light filtering through.',
      'あなたの性格天気は、雲で覆われているのに光が漏れる曇りの日です。',
      '你的性格天气是云层密布却有光透出的阴天。',
      '你的性格天氣是雲層密布卻有光透出的陰天。',
      'Thời tiết tính cách của bạn là ngày u ám đầy mây nhưng vẫn có ánh sáng lọt qua.',
      'Cuaca kepribadianmu adalah hari mendung penuh awan tapi ada cahaya tembus.'
    ),
    description: M(
      '흐린 날은 나쁜 날이 아닙니다. 강렬하지 않지만 오래 있어도 피곤하지 않은 부드러운 빛. 말이 많지 않아도 옆에 있으면 편안한 사람, 겉으로는 조용해 보여도 속은 깊은 생각으로 가득한 사람. 당신은 오래 알수록 더 많은 것이 보이는 사람입니다. 흐린 날에만 보이는 아름다움이 있듯이, 당신만의 고유한 매력이 있습니다.',
      'A cloudy day is not a bad day. A soft light that is not intense but never tiring even over time. Someone comfortable to be near even without many words, quiet on the outside but full of deep thoughts within. The more time passes, the more of you becomes visible. Just as there is beauty only cloudy days reveal, you have a unique charm of your own.',
      '曇りの日は悪い日ではありません。強烈ではないのに長くいても疲れない柔らかな光。話が多くなくてもそばにいると心地よい人、外見は静かでも内側は深い思考で満ちた人。あなたは時間が経つほど多くが見えてくる人です。曇りの日にだけ見える美しさがあるように、あなただけの独特な魅力があります。',
      '阴天并不是坏天气。不强烈却久处也不累的柔和光线。话不多但待在旁边就舒服的人，外表安静内心却充满深思。你是越久越能看见更多的人。就像只有阴天才能看见的美，你也有独一无二的魅力。',
      '陰天並不是壞天氣。不強烈卻久處也不累的柔和光線。話不多但待在旁邊就舒服的人，外表安靜內心卻充滿深思。你是越久越能看見更多的人。就像只有陰天才能看見的美，你也有獨一無二的魅力。',
      'Ngày u ám không phải ngày xấu. Ánh sáng dịu không gay gắt nhưng ở lâu cũng không mệt. Người ít nói nhưng ở bên vẫn thoải mái, ngoài yên lặng nhưng bên trong đầy suy nghĩ sâu. Bạn là người càng lâu càng thấy nhiều hơn. Như vẻ đẹp chỉ ngày u ám mới có, bạn có sức hút riêng.',
      'Hari mendung bukan hari buruk. Cahaya lembut yang tidak intens tapi tidak melelahkan meski lama. Orang yang nyaman didekati meski tidak banyak bicara, tenang di luar tapi penuh pikiran dalam. Kamu orang yang makin lama makin banyak terlihat. Seperti keindahan yang hanya hari mendung tunjukkan, kamu punya pesona unik sendiri.'
    ),
    personalityWeather: M(
      '흐린 날 🌥️',
      'Cloudy Day 🌥️',
      '曇りの日 🌥️',
      '阴天 🌥️',
      '陰天 🌥️',
      'Ngày u ám 🌥️',
      'Hari mendung 🌥️'
    ),
    weatherKeywords: M(
      '조용한 깊이·내면의 풍요·편안함·신중함·오래가는 매력',
      'Quiet depth·Inner richness·Comfort·Caution·Lasting charm',
      '静かな深さ・内面の豊かさ・心地よさ・慎重さ・長く続く魅力',
      '安静的深度·内在丰富·舒适·谨慎·持久魅力',
      '安靜的深度·內在豐富·舒適·謹慎·持久魅力',
      'Chiều sâu yên lặng·Sự phong phú bên trong·Thoải mái·Thận trọng·Sức hút bền',
      'Kedalaman tenang·Kekayaan batin·Kenyamanan·Kehati-hatian·Pesona tahan lama'
    ),
    weatherPersonTrait: M(
      '첫인상보다 알수록 좋아지는 사람. 오래 있어도 피곤하지 않은 사람',
      'Someone better than first impressions suggest. Someone who never feels tiring over time',
      '第一印象より知れば知るほど好きになる人。長くいても疲れない人',
      '比第一印象更好的人，久处也不觉得累的人',
      '比第一印象更好的人，久處也不覺得累的人',
      'Người càng hiểu càng tốt hơn ấn tượng ban đầu. Người ở lâu cũng không mệt',
      'Orang yang makin dikenal makin lebih baik dari kesan pertama. Orang yang tidak melelahkan meski lama'
    ),
    weatherWeakness: M(
      '자신의 매력을 먼저 표현하지 않아서 오해받거나 지나쳐질 수 있음',
      'You may not express your charm first, so you can be misunderstood or overlooked',
      '自分の魅力を先に表さないため、誤解されたり見過ごされたりすることがある',
      '不先表达自己的魅力，可能被误解或被忽略',
      '不先表達自己的魅力，可能被誤解或被忽略',
      'Không thể hiện sức hút trước nên có thể bị hiểu lầm hoặc bị bỏ qua',
      'Tidak mengekspresikan pesona dulu, jadi bisa disalahpahami atau terlewat'
    ),
    goodMatchWeather: M(
      'Type 6 눈 (흐린 날과 눈이 만나면 가장 아름다운 겨울)',
      'Type 6 First Snow (when cloudy days meet snow, you get the most beautiful winter)',
      'Type 6 初雪（曇りの日と雪が出会うといちばん美しい冬）',
      'Type 6 初雪（阴天遇上雪是最美的冬天）',
      'Type 6 初雪（陰天遇上雪是最美的冬天）',
      'Type 6 Tuyết đầu mùa (ngày u ám gặp tuyết là mùa đông đẹp nhất)',
      'Type 6 Salju pertama (hari mendung bertemu salju jadi musim dingin paling indah)'
    ),
    clashWeather: M(
      'Type 1 맑음 (서로의 에너지가 너무 달라서 지칠 수 있음)',
      'Type 1 Clear Skies (your energies are so different that it can feel exhausting)',
      'Type 1 晴れ（互いのエネルギーが違いすぎて疲れることがある）',
      'Type 1 晴朗（彼此能量差异太大，可能感到疲惫）',
      'Type 1 晴朗（彼此能量差異太大，可能感到疲憊）',
      'Type 1 Trời nắng (năng lượng quá khác nhau nên có thể mệt)',
      'Type 1 Cerah (energi terlalu berbeda sehingga bisa melelahkan)'
    ),
    weatherMessage: M(
      '흐린 날에도 빛은 있습니다. 당신 안에 있는 그 빛을 꺼내 보여주세요',
      'Even on cloudy days, there is light. Show the light inside you',
      '曇りの日にも光はあります。あなたの中にあるその光を見せてください',
      '阴天也有光，请把你内心的那道光展现出来',
      '陰天也有光，請把你內心的那道光展現出來',
      'Ngày u ám vẫn có ánh sáng. Hãy để ánh sáng trong bạn lộ ra',
      'Hari mendung pun ada cahaya. Tunjukkan cahaya di dalam dirimu'
    ),
    weatherOneLiner: M(
      '구름 사이로 빛이 새어 나오듯, 알수록 더 빛나는 사람',
      'Like light filtering through clouds, someone who shines more the more you know them',
      '雲の間から光が漏れるように、知れば知るほど輝く人',
      '像云间透出的光，越了解越发光的人',
      '像雲間透出的光，越了解越發光的人',
      'Như ánh sáng lọt qua mây, người càng hiểu càng sáng',
      'Seperti cahaya tembus awan, orang yang makin dikenal makin bersinar'
    ),
    shareSnippet: M(
      '내 성격 날씨는 흐린 날 🌥️ 조용하지만 깊은 사람. 이 날씨 너무 내 스타일',
      'My personality weather is a cloudy day 🌥️ Quiet but deep. This weather is totally my style',
      '私の性格天気は曇りの日 🌥️ 静かだけど深い人。この天気が完全に好み',
      '我的性格天气是阴天 🌥️ 安静但有深度的人。这天气太对我胃口了',
      '我的性格天氣是陰天 🌥️ 安靜但有深度的人。這天氣太對我胃口了',
      'Thời tiết tính cách tôi là ngày u ám 🌥️ Người yên lặng nhưng sâu. Thời tiết này quá hợp gu',
      'Cuaca kepribadianku hari mendung 🌥️ Tenang tapi dalam. Cuaca ini banget style-ku'
    ),
  },
  {
    type: 'Type5',
    emoji: '🌫️',
    title: M(
      '신비롭고 독보적인, 새벽 안개',
      'Mysterious and One of a Kind: Dawn Fog',
      '神秘的で独自の存在、朝霧',
      '神秘而独特的清晨雾',
      '神秘而獨特的清晨霧',
      'Bí ẩn và độc nhất: Sương mù bình minh',
      'Misterius dan unik: Kabut fajar'
    ),
    shortDescription: M(
      '당신의 성격 날씨는 새벽에 내려앉은 신비로운 안개입니다.',
      'Your personality weather is mysterious fog that settles at dawn.',
      'あなたの性格天気は、夜明けに降りてくる神秘的な霧です。',
      '你的性格天气是清晨降临的神秘雾。',
      '你的性格天氣是清晨降臨的神秘霧。',
      'Thời tiết tính cách của bạn là sương mù bí ẩn buông xuống lúc bình minh.',
      'Cuaca kepribadianmu adalah kabut misterius yang turun saat fajar.'
    ),
    description: M(
      '안개는 모든 것을 완전히 가리지 않습니다. 흐릿하게 보이게 하면서 오히려 더 궁금하게 만드는 것이 안개의 매력입니다. 당신은 쉽게 파악되지 않습니다. 말이 적고, 감정을 쉽게 드러내지 않으며, 알면 알수록 새로운 면이 나옵니다. 처음에는 어렵게 느껴질 수 있지만, 안개가 걷히고 나면 그 아래 숨겨진 풍경이 가장 아름답습니다.',
      'Fog does not hide everything completely. Its charm is making things look hazy and therefore even more intriguing. You are not easy to read. You speak little, do not reveal emotions easily, and new sides appear the more you are known. At first you may feel hard to approach, but once the fog lifts, the landscape beneath is the most beautiful.',
      '霧はすべてを完全には隠しません。ぼんやり見せてかえってもっと気になるのが霧の魅力です。あなたは簡単には把握できません。言葉が少なく、感情を簡単には見せず、知れば知るほど新しい面が現れます。最初は距離を感じるかもしれませんが、霧が晴れた後の景色がいちばん美しい。',
      '雾并不会完全遮住一切。它的魅力在于把事物变得朦胧，反而更让人好奇。你不容易被看透。话不多，不轻易流露情绪，越了解越出现新的面貌。起初可能觉得难以接近，但雾散去后，下面的风景最美。',
      '霧並不會完全遮住一切。它的魅力在於把事物變得朦朧，反而更讓人好奇。你不容易被看透。話不多，不輕易流露情緒，越了解越出現新的面貌。起初可能覺得難以接近，但霧散去後，下面的風景最美。',
      'Sương mù không che khuất hoàn toàn mọi thứ. Sức hút của nó là làm mọi thứ mờ đi và khiến người ta càng tò mò. Bạn không dễ đoán. Ít nói, khó bộc lộ cảm xúc, càng hiểu càng thấy mặt mới. Ban đầu có thể khó gần, nhưng khi sương tan, cảnh bên dưới đẹp nhất.',
      'Kabut tidak menutupi semuanya sepenuhnya. Pesonanya membuat segalanya kabur sehingga makin membuat penasaran. Kamu tidak mudah dibaca. Sedikit bicara, tidak mudah menunjukkan emosi, dan makin dikenal makin muncul sisi baru. Awalnya mungkin terasa sulit didekati, tapi setelah kabut menghilang, pemandangan di bawahnya paling indah.'
    ),
    personalityWeather: M(
      '새벽 안개 🌫️',
      'Dawn Fog 🌫️',
      '朝霧 🌫️',
      '清晨雾 🌫️',
      '清晨霧 🌫️',
      'Sương mù bình minh 🌫️',
      'Kabut fajar 🌫️'
    ),
    weatherKeywords: M(
      '신비로움·독보적 매력·깊은 내면·불투명한 아름다움·섬세함',
      'Mystery·Unique charm·Deep inner world·Opaque beauty·Delicacy',
      '神秘性・独自の魅力・深い内面・不透明な美しさ・繊細さ',
      '神秘感·独特魅力·深层内心·不透明的美·细腻',
      '神秘感·獨特魅力·深層內心·不透明的美·細膩',
      'Bí ẩn·Sức hút độc nhất·Nội tâm sâu·Vẻ đẹp mờ đục·Tinh tế',
      'Misteri·Pesona unik·Batin dalam·Keindahan tidak transparan·Kehalusan'
    ),
    weatherPersonTrait: M(
      '쉽게 파악되지 않아서 오히려 더 끌리는 사람. 알면 알수록 새로운 사람',
      'Someone hard to read who is even more captivating because of it. Someone new every time you learn more',
      '簡単には把握できず、だからこそ惹かれる人。知れば知るほど新しい人',
      '不容易被看透，反而更有吸引力的人，越了解越新鲜的人',
      '不容易被看透，反而更有吸引力的人，越了解越新鮮的人',
      'Người khó đoán nên càng cuốn hút. Người càng hiểu càng mới mẻ',
      'Orang sulit dibaca sehingga makin menarik. Orang yang makin dikenal makin baru'
    ),
    weatherWeakness: M(
      '다가가기 어렵게 느껴져서 관계 형성이 느릴 수 있음',
      'You may feel hard to approach, so building relationships can take time',
      '近づきにくく感じられ、関係形成が遅くなることがある',
      '可能让人觉得难以接近，关系建立较慢',
      '可能讓人覺得難以接近，關係建立較慢',
      'Có thể khiến người khác thấy khó gần, hình thành mối quan hệ chậm',
      'Bisa terasa sulit didekati, jadi hubungan terbentuk lebih lambat'
    ),
    goodMatchWeather: M(
      'Type 4 흐린 날 (비슷한 결의 조용함이 서로를 이해함)',
      'Type 4 Cloudy Day (a similar quietness understands each other)',
      'Type 4 曇りの日（似た静けさが互いを理解する）',
      'Type 4 阴天（相似的安静彼此理解）',
      'Type 4 陰天（相似的安靜彼此理解）',
      'Type 4 Ngày u ám (sự yên lặng tương tự hiểu nhau)',
      'Type 4 Hari mendung (kesunyapan serupa saling memahami)'
    ),
    clashWeather: M(
      'Type 1 맑음 (투명함과 불투명함의 완전한 대비)',
      'Type 1 Clear Skies (a complete contrast of transparency and opacity)',
      'Type 1 晴れ（透明さと不透明さの完全な対比）',
      'Type 1 晴朗（透明与不透明的完全对比）',
      'Type 1 晴朗（透明與不透明的完全對比）',
      'Type 1 Trời nắng (tương phản hoàn toàn giữa trong suốt và mờ đục)',
      'Type 1 Cerah (kontras penuh transparansi dan ketidakjelasan)'
    ),
    weatherMessage: M(
      '안개가 걷히고 나면 가장 아름다운 풍경이 나옵니다. 당신이 그렇습니다',
      'Once the fog lifts, the most beautiful scenery appears. That is you',
      '霧が晴れた後、いちばん美しい景色が現れます。それがあなたです',
      '雾散去之后，最美的风景会出现，那就是你',
      '霧散去之後，最美的風景會出現，那就是你',
      'Khi sương tan, cảnh đẹp nhất hiện ra. Đó chính là bạn',
      'Setelah kabut menghilang, pemandangan paling indah muncul. Itu dirimu'
    ),
    weatherOneLiner: M(
      '볼수록 더 궁금해지는, 새벽 안개 같은 사람',
      'A dawn-fog person who grows more intriguing the more you look',
      '見れば見るほど気になる、朝霧のような人',
      '越看越好奇，像清晨雾一样的人',
      '越看越好奇，像清晨霧一樣的人',
      'Người như sương bình minh, càng nhìn càng tò mò',
      'Orang seperti kabut fajar, makin dilihat makin penasaran'
    ),
    shareSnippet: M(
      '내 성격 날씨는 새벽 안개 🌫️ 신비롭고 알수록 더 궁금해지는 사람. 저장각',
      'My personality weather is dawn fog 🌫️ Mysterious and more intriguing the more you know them. Save-worthy',
      '私の性格天気は朝霧 🌫️ 神秘的で知れば知るほど気になる人。保存必須',
      '我的性格天气是清晨雾 🌫️ 神秘、越了解越好奇的人。值得收藏',
      '我的性格天氣是清晨霧 🌫️ 神秘、越了解越好奇的人。值得收藏',
      'Thời tiết tính cách tôi là sương bình minh 🌫️ Người bí ẩn, càng hiểu càng tò mò. Đáng lưu',
      'Cuaca kepribadianku kabut fajar 🌫️ Misterius, makin dikenal makin penasaran. Worth save'
    ),
  },
  {
    type: 'Type6',
    emoji: '❄️',
    title: M(
      '조용히 모든 것을 덮는, 첫눈',
      'Quietly Covering Everything: First Snow',
      '静かにすべてを覆う、初雪',
      '安静覆盖一切的初雪',
      '安靜覆蓋一切的初雪',
      'Lặng lẽ phủ lên mọi thứ: Tuyết đầu mùa',
      'Menutupi segalanya dengan tenang: Salju pertama'
    ),
    shortDescription: M(
      '당신의 성격 날씨는 밤새 소리 없이 내린 첫눈입니다.',
      'Your personality weather is first snow that falls silently through the night.',
      'あなたの性格天気は、一晩中音もなく降り続けた初雪です。',
      '你的性格天气是整夜无声落下的初雪。',
      '你的性格天氣是整夜無聲落下的初雪。',
      'Thời tiết tính cách của bạn là tuyết đầu mùa rơi im lặng suốt đêm.',
      'Cuaca kepribadianmu adalah salju pertama yang turun diam sepanjang malam.'
    ),
    description: M(
      '첫눈은 소란스럽지 않습니다. 소리 없이 내려서 세상 모든 것을 조용히 덮고, 아침에 일어났을 때 모든 것이 새하얗게 변해 있는 것을 발견하게 됩니다. 당신은 그런 사람입니다. 크게 나서지 않지만 어느새 주변의 모든 것이 당신으로 인해 달라져 있는 사람. 함께 있는 것만으로 세상이 조금 더 조용하고 아름다워지는 사람. 가장 조용하지만 가장 오래 기억에 남는 날씨가 첫눈입니다.',
      'First snow is not loud. It falls silently, quietly covering everything, and when you wake in the morning you find the world turned pure white. That is the kind of person you are. You do not step forward loudly, yet before you know it everything around you has changed because of you. Simply being together makes the world a little quieter and more beautiful. First snow is the quietest weather, yet the one remembered the longest.',
      '初雪は騒がしくありません。音もなく降り、世界のすべてを静かに覆い、朝起きるとすべてが真っ白に変わっているのを発見します。あなたはそういう人です。大きく出てこないのに、気づけば周りのすべてがあなたのせいで変わっている人。一緒にいるだけで世界が少し静かで美しくなる人。いちばん静かだけどいちばん長く記憶に残る天気が初雪です。',
      '初雪并不喧闹。它无声落下，安静覆盖一切，早上醒来时发现世界已经变成纯白。你就是这样的人。不张扬地站出来，却不知不觉让周围的一切都因你而改变。仅仅在一起就让世界更安静、更美。最安静却最长久留在记忆里的天气，就是初雪。',
      '初雪並不喧鬧。它無聲落下，安靜覆蓋一切，早上醒來時發現世界已經變成純白。你就是這樣的人。不張揚地站出來，卻不知不覺讓周圍的一切都因你而改變。僅僅在一起就讓世界更安靜、更美。最安靜卻最長久留在記憶裡的天氣，就是初雪。',
      'Tuyết đầu mùa không ồn ào. Rơi lặng lẽ, phủ yên lặng mọi thứ, sáng dậy thấy thế giới đã trắng tinh. Bạn là người như vậy. Không nổi bật nhưng bỗng mọi thứ quanh đã thay đổi vì bạn. Chỉ cần ở bên đã khiến thế giới yên lặng và đẹp hơn. Thời tiết yên lặng nhất nhưng nhớ lâu nhất chính là tuyết đầu mùa.',
      'Salju pertama tidak ribut. Turun tanpa suara, menutupi segalanya dengan tenang, dan pagi hari kamu menemukan dunia sudah putih bersih. Kamu orang seperti itu. Tidak tampil keras, tapi tanpa sadar segalanya di sekitar berubah karena dirimu. Hanya dengan ada bersama, dunia jadi sedikit lebih tenang dan indah. Cuaca paling tenang tapi paling lama diingat adalah salju pertama.'
    ),
    personalityWeather: M(
      '첫눈 ❄️',
      'First Snow ❄️',
      '初雪 ❄️',
      '初雪 ❄️',
      '初雪 ❄️',
      'Tuyết đầu mùa ❄️',
      'Salju pertama ❄️'
    ),
    weatherKeywords: M(
      '고요함·순수함·오래 남는 여운·조용한 변화·잊히지 않는 존재',
      'Stillness·Purity·Lasting afterglow·Quiet change·Unforgettable presence',
      '静けさ・純粋さ・長く残る余韻・静かな変化・忘れられない存在',
      '宁静·纯粹·长久余韵·安静的变化·令人难忘的存在',
      '寧靜·純粹·長久餘韻·安靜的變化·令人難忘的存在',
      'Tĩnh lặng·Thuần khiết·Dư vị lâu dài·Thay đổi yên lặng·Sự hiện diện khó quên',
      'Ketenangan·Kemurnian·Sisa perasaan yang lama·Perubahan tenang·Kehadiran yang tak terlupakan'
    ),
    weatherPersonTrait: M(
      '말하지 않아도 공간을 바꾸는 사람. 가장 오래 기억에 남는 사람',
      'Someone who changes the space without saying a word. Someone remembered the longest',
      '言わなくても空間を変える人。いちばん長く記憶に残る人',
      '不用说话也能改变空间的人，最长久被记住的人',
      '不用說話也能改變空間的人，最長久被記住的人',
      'Người thay đổi không gian dù không nói gì. Người được nhớ lâu nhất',
      'Orang yang mengubah ruangan tanpa berkata apa-apa. Orang yang paling lama diingat'
    ),
    weatherWeakness: M(
      '너무 조용해서 자신의 존재와 감정을 충분히 표현하지 못할 수 있음',
      'You may be too quiet to fully express your presence and emotions',
      '静かすぎて、自分の存在や感情を十分に表現できないことがある',
      '可能因为太安静，无法充分表达自己的存在和情感',
      '可能因為太安靜，無法充分表達自己的存在和情感',
      'Có thể quá yên lặng nên không thể bộc lộ đủ sự hiện diện và cảm xúc',
      'Mungkin terlalu tenang sehingga tidak cukup mengekspresikan kehadiran dan emosi'
    ),
    goodMatchWeather: M(
      'Type 4 흐린 날 (흐린 날과 눈이 만나면 가장 아름다운 겨울)',
      'Type 4 Cloudy Day (when cloudy days meet snow, you get the most beautiful winter)',
      'Type 4 曇りの日（曇りの日と雪が出会うといちばん美しい冬）',
      'Type 4 阴天（阴天遇上雪是最美的冬天）',
      'Type 4 陰天（陰天遇上雪是最美的冬天）',
      'Type 4 Ngày u ám (ngày u ám gặp tuyết là mùa đông đẹp nhất)',
      'Type 4 Hari mendung (hari mendung bertemu salju jadi musim dingin paling indah)'
    ),
    clashWeather: M(
      'Type 3 소나기 (조용함과 요란함의 완전한 대비)',
      'Type 3 Summer Shower (a complete contrast of quietness and noise)',
      'Type 3 にわか雨（静けさと騒がしさの完全な対比）',
      'Type 3 阵雨（安静与喧闹的完全对比）',
      'Type 3 陣雨（安靜與喧鬧的完全對比）',
      'Type 3 Mưa rào mùa hè (tương phản hoàn toàn giữa yên lặng và ồn ào)',
      'Type 3 Hujan deras musim panas (kontras penuh ketenangan dan keributan)'
    ),
    weatherMessage: M(
      '소리 없이 내려 세상을 바꾸는 눈처럼, 당신의 존재가 그렇습니다',
      'Like snow that changes the world without a sound, your presence is the same',
      '音もなく降って世界を変える雪のように、あなたの存在もそうです',
      '像无声落下、改变世界的雪一样，你的存在也是如此',
      '像無聲落下、改變世界的雪一樣，你的存在也是如此',
      'Như tuyết thay đổi thế giới mà không có tiếng, sự hiện diện của bạn vậy',
      'Seperti salju yang mengubah dunia tanpa suara, kehadiranmu juga begitu'
    ),
    weatherOneLiner: M(
      '소란 없이 세상을 새하얗게 바꾸는, 첫눈 같은 사람',
      'A first-snow person who turns the world pure white without a fuss',
      '騒がずに世界を真っ白に変える、初雪のような人',
      '不喧闹就把世界变成纯白，像初雪一样的人',
      '不喧鬧就把世界變成純白，像初雪一樣的人',
      'Người như tuyết đầu mùa, biến thế giới thành trắng tinh mà không ồn ào',
      'Orang seperti salju pertama yang mengubah dunia jadi putih bersih tanpa ribut'
    ),
    shareSnippet: M(
      '내 성격 날씨는 첫눈 ❄️ 소리 없이 모든 것을 바꾸는 사람. 이 결과 너무 좋아서 저장함',
      'My personality weather is first snow ❄️ Someone who changes everything without a sound. Loved this result so much I saved it',
      '私の性格天気は初雪 ❄️ 音もなくすべてを変える人。この結果が好きすぎて保存した',
      '我的性格天气是初雪 ❄️ 无声改变一切的人。太喜欢这个结果所以收藏了',
      '我的性格天氣是初雪 ❄️ 無聲改變一切的人。太喜歡這個結果所以收藏了',
      'Thời tiết tính cách tôi là tuyết đầu mùa ❄️ Người thay đổi mọi thứ mà không có tiếng. Thích kết quả này quá nên đã lưu',
      'Cuaca kepribadianku salju pertama ❄️ Orang yang mengubah segalanya tanpa suara. Suka banget hasil ini jadi disimpan'
    ),
  },
];
