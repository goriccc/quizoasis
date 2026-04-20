/** 세계 랜드마크 보고 도시 맞추기 — phase3-world-landmark-city-quiz */
function T(o: {
  ko: string;
  en: string;
  ja: string;
  'zh-CN': string;
  'zh-TW': string;
  vi: string;
  id: string;
}): Record<string, string> {
  return o;
}

const QUESTION_LEAD = T({
  ko: '이 랜드마크가 있는 도시는?',
  en: 'Which city is this landmark in?',
  ja: 'このランドマークがある都市はどこですか？',
  'zh-CN': '这座地标位于哪座城市？',
  'zh-TW': '這座地標位於哪座城市？',
  vi: 'Địa danh này nằm ở thành phố nào?',
  id: 'Landmark ini ada di kota mana?',
});

export interface Phase3WorldLandmarkCityQuizOption {
  text: Record<string, string>;
  isCorrect: boolean;
}

export interface Phase3WorldLandmarkCityQuizQuestion {
  id: number;
  imageFile: string;
  question: Record<string, string>;
  options: Phase3WorldLandmarkCityQuizOption[];
  correctExplanation: Record<string, string>;
  wrongTraps: Record<string, string>;
}

export interface Phase3WorldLandmarkCityQuizResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  levelLabel: Record<string, string>;
  honorTitle: Record<string, string>;
  oneLiner: Record<string, string>;
  todoToday: Record<string, string>;
  shareLine: Record<string, string>;
}

const EMPTY_TRAPS = T({ ko: '', en: '', ja: '', 'zh-CN': '', 'zh-TW': '', vi: '', id: '' });

export const phase3WorldLandmarkCityQuizQuestions: Phase3WorldLandmarkCityQuizQuestion[] = [
  {
    id: 1,
    imageFile: 'p3_quiz_world_landmark_city_match_q1.jpg',
    question: QUESTION_LEAD,
    options: [
      { text: T({ ko: '런던', en: 'London', ja: 'ロンドン', 'zh-CN': '伦敦', 'zh-TW': '倫敦', vi: 'Luân Đôn', id: 'London' }), isCorrect: false },
      { text: T({ ko: '베를린', en: 'Berlin', ja: 'ベルリン', 'zh-CN': '柏林', 'zh-TW': '柏林', vi: 'Berlin', id: 'Berlin' }), isCorrect: false },
      { text: T({ ko: '파리', en: 'Paris', ja: 'パリ', 'zh-CN': '巴黎', 'zh-TW': '巴黎', vi: 'Paris', id: 'Paris' }), isCorrect: true },
      { text: T({ ko: '브뤼셀', en: 'Brussels', ja: 'ブリュッセル', 'zh-CN': '布鲁塞尔', 'zh-TW': '布魯塞爾', vi: 'Brussels', id: 'Brussel' }), isCorrect: false },
    ],
    correctExplanation: T({
      ko: '에펠탑은 1889년 파리 만국박람회를 위해 건설된 프랑스 파리의 상징입니다. 높이 330m로 세계에서 가장 많이 방문하는 유료 관광지 중 하나입니다.',
      en: 'The Eiffel Tower was built for the 1889 Paris World’s Fair and is the symbol of Paris, France. At 330 m tall, it is one of the world’s most visited paid attractions.',
      ja: 'エッフェル塔は1889年パリ万博のために建てられ、フランス・パリの象徴です。高さ330mで世界でもっとも訪問者の多い有料観光地の一つです。',
      'zh-CN': '埃菲尔铁塔为1889年巴黎世博会而建，是法国巴黎的象征。高330米，是全球参观人数最多的付费景点之一。',
      'zh-TW': '艾菲爾鐵塔為1889年巴黎世博會而建，是法國巴黎的象徵。高330公尺，是全球參觀人數最多的付費景點之一。',
      vi: 'Tháp Eiffel được xây cho hội chợ thế giới Paris 1889 và là biểu tượng của Paris, Pháp. Cao 330 m, là một trong các điểm tham quan trả phí đông khách nhất thế giới.',
      id: 'Menara Eiffel dibangun untuk Pameran Dunia Paris 1889 dan menjadi simbol Paris, Prancis. Tinggi 330 m, salah satu objek wisata berbayar paling banyak dikunjungi di dunia.',
    }),
    wrongTraps: EMPTY_TRAPS,
  },
  {
    id: 2,
    imageFile: 'p3_quiz_world_landmark_city_match_q2.jpg',
    question: QUESTION_LEAD,
    options: [
      { text: T({ ko: '아테네', en: 'Athens', ja: 'アテネ', 'zh-CN': '雅典', 'zh-TW': '雅典', vi: 'Athens', id: 'Athena' }), isCorrect: false },
      { text: T({ ko: '로마', en: 'Rome', ja: 'ローマ', 'zh-CN': '罗马', 'zh-TW': '羅馬', vi: 'Rome', id: 'Roma' }), isCorrect: true },
      { text: T({ ko: '나폴리', en: 'Naples', ja: 'ナポリ', 'zh-CN': '那不勒斯', 'zh-TW': '拿坡里', vi: 'Naples', id: 'Napoli' }), isCorrect: false },
      { text: T({ ko: '이스탄불', en: 'Istanbul', ja: 'イスタンブール', 'zh-CN': '伊斯坦布尔', 'zh-TW': '伊斯坦堡', vi: 'Istanbul', id: 'Istanbul' }), isCorrect: false },
    ],
    correctExplanation: T({
      ko: '콜로세움은 서기 80년에 완공된 로마의 원형 경기장입니다. 약 5만~8만 명을 수용할 수 있었으며 검투사 경기가 열리던 곳으로 유네스코 세계문화유산입니다.',
      en: 'The Colosseum in Rome was completed around AD 80. It could hold about 50,000–80,000 spectators for gladiator games and is a UNESCO World Heritage Site.',
      ja: 'コロッセオは西暦80年頃に完成したローマの円形闘技場。約5〜8万人を収容でき、剣闘士の試合が行われたユネスコ世界遺産です。',
      'zh-CN': '罗马斗兽场约建于公元80年，可容纳约5万至8万人观看角斗士赛，是联合国教科文组织世界遗产。',
      'zh-TW': '羅馬競技場約建於西元80年，可容納約5萬至8萬人觀看角鬥士賽，是聯合國教科文組織世界遺產。',
      vi: 'Đấu trường La Mã hoàn thành khoảng năm 80 sau Công nguyên, chứa khoảng 50.000–80.000 khán giả, là di sản UNESCO.',
      id: 'Colosseum di Roma selesai sekitar 80 M, menampung sekitar 50.000–80.000 penonton, situs Warisan Dunia UNESCO.',
    }),
    wrongTraps: EMPTY_TRAPS,
  },
  {
    id: 3,
    imageFile: 'p3_quiz_world_landmark_city_match_q3.jpg',
    question: QUESTION_LEAD,
    options: [
      { text: T({ ko: '더블린', en: 'Dublin', ja: 'ダブリン', 'zh-CN': '都柏林', 'zh-TW': '都柏林', vi: 'Dublin', id: 'Dublin' }), isCorrect: false },
      { text: T({ ko: '에든버러', en: 'Edinburgh', ja: 'エディンバラ', 'zh-CN': '爱丁堡', 'zh-TW': '愛丁堡', vi: 'Edinburgh', id: 'Edinburgh' }), isCorrect: false },
      { text: T({ ko: '맨체스터', en: 'Manchester', ja: 'マンチェスター', 'zh-CN': '曼彻斯特', 'zh-TW': '曼徹斯特', vi: 'Manchester', id: 'Manchester' }), isCorrect: false },
      { text: T({ ko: '런던', en: 'London', ja: 'ロンドン', 'zh-CN': '伦敦', 'zh-TW': '倫敦', vi: 'Luân Đôn', id: 'London' }), isCorrect: true },
    ],
    correctExplanation: T({
      ko: '빅벤은 영국 런던 웨스트민스터 궁전의 시계탑 종입니다. 공식 명칭은 엘리자베스 타워이며 1859년부터 런던의 상징이 되었습니다.',
      en: '“Big Ben” is the bell in the clock tower of the Palace of Westminster in London, UK. Officially the Elizabeth Tower; it has symbolized London since 1859.',
      ja: 'ビッグ・ベンは英国ロンドン、ウェストミンスター宮殿の時計塔の鐘。正式名はエリザベスタワーで、1859年からロンドンの象徴です。',
      'zh-CN': '大本钟是英国伦敦威斯敏斯特宫钟塔的钟声；塔楼正式名称为伊丽莎白塔，自1859年起成为伦敦的象征。',
      'zh-TW': '大笨鐘是英國倫敦西敏宮鐘塔的鐘聲；塔樓正式名稱為伊莉莎白塔，自1859年起成為倫敦的象徵。',
      vi: 'Big Ben là quả chuông ở tháp đồng hồ Cung điện Westminster, London. Tên tháp là Elizabeth Tower, biểu tượng London từ 1859.',
      id: 'Big Ben adalah lonceng menara jam Istana Westminster di London. Menara resminya Elizabeth Tower, simbol London sejak 1859.',
    }),
    wrongTraps: EMPTY_TRAPS,
  },
  {
    id: 4,
    imageFile: 'p3_quiz_world_landmark_city_match_q4.jpg',
    question: QUESTION_LEAD,
    options: [
      { text: T({ ko: '마드리드', en: 'Madrid', ja: 'マドリード', 'zh-CN': '马德里', 'zh-TW': '馬德里', vi: 'Madrid', id: 'Madrid' }), isCorrect: false },
      { text: T({ ko: '발렌시아', en: 'Valencia', ja: 'バレンシア', 'zh-CN': '瓦伦西亚', 'zh-TW': '瓦倫西亞', vi: 'Valencia', id: 'Valencia' }), isCorrect: false },
      { text: T({ ko: '리스본', en: 'Lisbon', ja: 'リスボン', 'zh-CN': '里斯本', 'zh-TW': '里斯本', vi: 'Lisbon', id: 'Lisbon' }), isCorrect: false },
      { text: T({ ko: '바르셀로나', en: 'Barcelona', ja: 'バルセロナ', 'zh-CN': '巴塞罗那', 'zh-TW': '巴塞隆納', vi: 'Barcelona', id: 'Barcelona' }), isCorrect: true },
    ],
    correctExplanation: T({
      ko: '사그라다 파밀리아는 천재 건축가 안토니 가우디가 설계한 스페인 바르셀로나의 성당입니다. 1882년 착공 이후 현재도 건축 중이며 유네스코 세계문화유산입니다.',
      en: 'The Sagrada Família is Antoni Gaudí’s basilica in Barcelona, Spain. Construction began in 1882 and continues today; it is a UNESCO World Heritage Site.',
      ja: 'サグラダ・ファミリアはガウディが設計したスペイン・バルセロナの聖堂。1882年着工、現在も建設中でユネスコ世界遺産です。',
      'zh-CN': '圣家堂由高迪设计，位于西班牙巴塞罗那，1882年动工至今仍在修建，是世界遗产。',
      'zh-TW': '聖家堂由高第設計，位於西班牙巴塞隆納，1882年動工至今仍在修建，是世界遺產。',
      vi: 'Sagrada Família do Gaudí ở Barcelona, Tây Ban Nha, khởi công 1882, vẫn đang xây—di sản UNESCO.',
      id: 'Sagrada Família karya Gaudí di Barcelona, Spanyol, groundbreaking 1882, masih dibangun—warisan UNESCO.',
    }),
    wrongTraps: EMPTY_TRAPS,
  },
  {
    id: 5,
    imageFile: 'p3_quiz_world_landmark_city_match_q5.jpg',
    question: QUESTION_LEAD,
    options: [
      { text: T({ ko: '싱가포르', en: 'Singapore', ja: 'シンガポール', 'zh-CN': '新加坡', 'zh-TW': '新加坡', vi: 'Singapore', id: 'Singapura' }), isCorrect: false },
      { text: T({ ko: '자카르타', en: 'Jakarta', ja: 'ジャカルタ', 'zh-CN': '雅加达', 'zh-TW': '雅加達', vi: 'Jakarta', id: 'Jakarta' }), isCorrect: false },
      { text: T({ ko: '방콕', en: 'Bangkok', ja: 'バンコク', 'zh-CN': '曼谷', 'zh-TW': '曼谷', vi: 'Bangkok', id: 'Bangkok' }), isCorrect: false },
      { text: T({ ko: '쿠알라룸푸르', en: 'Kuala Lumpur', ja: 'クアラルンプール', 'zh-CN': '吉隆坡', 'zh-TW': '吉隆坡', vi: 'Kuala Lumpur', id: 'Kuala Lumpur' }), isCorrect: true },
    ],
    correctExplanation: T({
      ko: '페트로나스 트윈 타워는 말레이시아 쿠알라룸푸르에 위치한 452m 높이의 쌍둥이 초고층 빌딩입니다. 1998년 완공 당시 세계에서 가장 높은 건물이었습니다.',
      en: 'The Petronas Twin Towers in Kuala Lumpur, Malaysia, are 452 m tall. When completed in 1998 they were the tallest buildings in the world.',
      ja: 'ペトロナスツインタワーはマレーシア・クアラルンプールの452mの双子超高層。1998年完成時は世界一高い建物でした。',
      'zh-CN': '双子塔位于马来西亚吉隆坡，高452米，1998年落成时曾为世界最高建筑。',
      'zh-TW': '雙子塔位於馬來西亞吉隆坡，高452公尺，1998年落成時曾為世界最高建築。',
      vi: 'Tháp đôi Petronas ở Kuala Lumpur, Malaysia, cao 452 m; năm 1998 là tòa nhà cao nhất thế giới.',
      id: 'Menara kembar Petronas di Kuala Lumpur, Malaysia, setinggi 452 m; pada 1998 menjadi gedung tertinggi di dunia.',
    }),
    wrongTraps: EMPTY_TRAPS,
  },
  {
    id: 6,
    imageFile: 'p3_quiz_world_landmark_city_match_q6.jpg',
    question: QUESTION_LEAD,
    options: [
      { text: T({ ko: '스플리트', en: 'Split', ja: 'スプリト', 'zh-CN': '斯普利特', 'zh-TW': '斯普利特', vi: 'Split', id: 'Split' }), isCorrect: false },
      { text: T({ ko: '코토르', en: 'Kotor', ja: 'コトル', 'zh-CN': '科托尔', 'zh-TW': '科托爾', vi: 'Kotor', id: 'Kotor' }), isCorrect: false },
      { text: T({ ko: '사라예보', en: 'Sarajevo', ja: 'サラエボ', 'zh-CN': '萨拉热窝', 'zh-TW': '塞拉耶佛', vi: 'Sarajevo', id: 'Sarajevo' }), isCorrect: false },
      { text: T({ ko: '두브로브니크', en: 'Dubrovnik', ja: 'ドゥブロヴニク', 'zh-CN': '杜布罗夫尼克', 'zh-TW': '杜布羅夫尼克', vi: 'Dubrovnik', id: 'Dubrovnik' }), isCorrect: true },
    ],
    correctExplanation: T({
      ko: '두브로브니크는 크로아티아의 고대 항구 도시로 13~17세기에 건설된 완벽한 중세 성벽으로 유명합니다. 드라마 왕좌의 게임 촬영지로 더욱 유명해졌으며 유네스코 세계문화유산입니다.',
      en: 'Dubrovnik is an ancient port in Croatia, famous for its medieval walls (13th–17th c.). Filming location for Game of Thrones; UNESCO-listed.',
      ja: 'ドゥブロヴニクはクロアチアの港町で、13〜17世紀の城壁で有名。『ゲーム・オブ・スローンズ』のロケ地でも知られ、ユネスコ登録です。',
      'zh-CN': '杜布罗夫尼克是克罗地亚古城，以13至17世纪城墙闻名，也是《权力的游戏》取景地，世界遗产。',
      'zh-TW': '杜布羅夫尼克是克羅埃西亞古城，以13至17世紀城牆聞名，也是《權力遊戲》取景地，世界遺產。',
      vi: 'Dubrovnik là cổ cảng Croatia, nổi tiếng tường thành trung cổ, từng là bối cảnh Game of Thrones—UNESCO.',
      id: 'Dubrovnik kota pelabuhan Kroasia, terkenal benteng abad pertengahan, lokasi syuting Game of Thrones—UNESCO.',
    }),
    wrongTraps: EMPTY_TRAPS,
  },
  {
    id: 7,
    imageFile: 'p3_quiz_world_landmark_city_match_q7.jpg',
    question: QUESTION_LEAD,
    options: [
      { text: T({ ko: '오슬로', en: 'Oslo', ja: 'オスロ', 'zh-CN': '奥斯陆', 'zh-TW': '奧斯陸', vi: 'Oslo', id: 'Oslo' }), isCorrect: false },
      { text: T({ ko: '헬싱키', en: 'Helsinki', ja: 'ヘルシンキ', 'zh-CN': '赫尔辛基', 'zh-TW': '赫爾辛基', vi: 'Helsinki', id: 'Helsinki' }), isCorrect: false },
      { text: T({ ko: '스톡홀름', en: 'Stockholm', ja: 'ストックホルム', 'zh-CN': '斯德哥尔摩', 'zh-TW': '斯德哥爾摩', vi: 'Stockholm', id: 'Stockholm' }), isCorrect: false },
      { text: T({ ko: '레이캬비크', en: 'Reykjavík', ja: 'レイキャヴィーク', 'zh-CN': '雷克雅未克', 'zh-TW': '雷克雅維克', vi: 'Reykjavík', id: 'Reykjavík' }), isCorrect: true },
    ],
    correctExplanation: T({
      ko: '할그림스키르캬는 아이슬란드 레이캬비크의 루터교 교회로 높이 74.5m의 아이슬란드에서 가장 큰 교회입니다. 아이슬란드 특유의 화산 현무암 기둥에서 영감을 받은 독특한 파사드가 특징입니다.',
      en: 'Hallgrímskirkja is a Lutheran church in Reykjavík, Iceland—74.5 m tall, the country’s largest church, with a façade inspired by basalt columns.',
      ja: 'ハルグリムスキルキャ教会はアイスランド・レイキャヴィークのルター派教会。高さ74.5mで国内最大、玄武岩の柱状節理を模した外観が特徴です。',
      'zh-CN': '哈尔格林姆斯教堂位于冰岛雷克雅未克，高74.5米，为全国最大教堂，立面灵感来自玄武岩柱。',
      'zh-TW': '哈爾格林姆教堂位於冰島雷克雅維克，高74.5公尺，為全國最大教堂，立面靈感來自玄武岩柱。',
      vi: 'Hallgrímskirkja ở Reykjavík, Iceland, cao 74,5 m, nhà thờ lớn nhất nước, mặt tiền gợi cột bazan.',
      id: 'Hallgrímskirkja di Reykjavík, Islandia, setinggi 74,5 m, gereja terbesar, fasad terinspirasi basal.',
    }),
    wrongTraps: EMPTY_TRAPS,
  },
  {
    id: 8,
    imageFile: 'p3_quiz_world_landmark_city_match_q8.jpg',
    question: QUESTION_LEAD,
    options: [
      { text: T({ ko: '홍콩', en: 'Hong Kong', ja: '香港', 'zh-CN': '香港', 'zh-TW': '香港', vi: 'Hồng Kông', id: 'Hong Kong' }), isCorrect: false },
      { text: T({ ko: '두바이', en: 'Dubai', ja: 'ドバイ', 'zh-CN': '迪拜', 'zh-TW': '杜拜', vi: 'Dubai', id: 'Dubai' }), isCorrect: false },
      { text: T({ ko: '도쿄', en: 'Tokyo', ja: '東京', 'zh-CN': '东京', 'zh-TW': '東京', vi: 'Tokyo', id: 'Tokyo' }), isCorrect: false },
      { text: T({ ko: '싱가포르', en: 'Singapore', ja: 'シンガポール', 'zh-CN': '新加坡', 'zh-TW': '新加坡', vi: 'Singapore', id: 'Singapura' }), isCorrect: true },
    ],
    correctExplanation: T({
      ko: '수퍼트리 그로브는 싱가포르의 가든스 바이 더 베이에 위치한 18개의 인공 나무 구조물입니다. 매일 밤 빛과 음악의 쇼인 Garden Rhapsody가 열리며 싱가포르의 미래도시 이미지를 상징합니다.',
      en: 'The Supertree Grove at Gardens by the Bay, Singapore, has 18 artificial tree-like structures. The nightly Garden Rhapsody light-and-music show symbolizes the city’s futuristic image.',
      ja: 'スーパーツリー・グローブはシンガポール・ガーデンズ・バイ・ザ・ベイの人工樹18本。夜の「Garden Rhapsody」が未来都市の象徴です。',
      'zh-CN': '超级树位于新加坡滨海湾花园，共18棵人造树形结构；夜间“花园狂想曲”灯光音乐秀象征未来之城。',
      'zh-TW': '超級樹位於新加坡濱海灣花園，共18棵人造樹形結構；夜間「花園狂想曲」象徵未來之城。',
      vi: 'Supertree Grove ở Gardens by the Bay, Singapore—18 cấu trúc cây nhân tạo; show đêm Garden Rhapsody tượng trưng thành phố tương lai.',
      id: 'Supertree Grove di Gardens by the Bay, Singapura—18 struktur pohon buatan; pertunjukan malam Garden Rhapsody melambangkan kota futuristik.',
    }),
    wrongTraps: EMPTY_TRAPS,
  },
  {
    id: 9,
    imageFile: 'p3_quiz_world_landmark_city_match_q9.jpg',
    question: QUESTION_LEAD,
    options: [
      { text: T({ ko: '프라하', en: 'Prague', ja: 'プラハ', 'zh-CN': '布拉格', 'zh-TW': '布拉格', vi: 'Praha', id: 'Praha' }), isCorrect: false },
      { text: T({ ko: '브르노', en: 'Brno', ja: 'ブルノ', 'zh-CN': '布尔诺', 'zh-TW': '布爾諾', vi: 'Brno', id: 'Brno' }), isCorrect: false },
      { text: T({ ko: '브라티슬라바', en: 'Bratislava', ja: 'ブラチスラヴァ', 'zh-CN': '布拉迪斯拉发', 'zh-TW': '布拉提斯拉瓦', vi: 'Bratislava', id: 'Bratislava' }), isCorrect: false },
      { text: T({ ko: '체스키 크룸로프', en: 'Český Krumlov', ja: 'チェスキー・クルムロフ', 'zh-CN': '捷克克鲁姆洛夫', 'zh-TW': '捷克庫倫洛夫', vi: 'Český Krumlov', id: 'Český Krumlov' }), isCorrect: true },
    ],
    correctExplanation: T({
      ko: '체스키 크룸로프는 체코 남부의 작은 도시로 13세기에 건설된 성과 중세 구시가지가 완벽하게 보존된 곳입니다. 블타바강이 S자로 마을을 감싸는 독특한 지형으로 유명하며 유네스코 세계문화유산입니다.',
      en: 'Český Krumlov is a small Czech town with a 13th-century castle and well-preserved old town. The Vltava River bends around it in an S-shape—UNESCO-listed.',
      ja: 'チェスキー・クルムロフはチェコ南部の町。13世紀の城と旧市街がよく残り、ヴルタヴァ川がS字に曲がる景観で有名、ユネスコ登録です。',
      'zh-CN': '捷克克鲁姆洛夫有十三世纪城堡与保存完好的老城，伏尔塔瓦河呈S形绕城，世界遗产。',
      'zh-TW': '捷克庫倫洛夫有十三世紀城堡與保存完好的老城，伏爾塔瓦河呈S形繞城，世界遺產。',
      vi: 'Český Krumlov, Cộng hòa Séc—lâu đài thế kỷ 13 và phố cổ; sông Vltava uốn chữ S—UNESCO.',
      id: 'Český Krumlov, Ceko—kastil abad 13 dan kota tua; sungai Vltava berkelok S—UNESCO.',
    }),
    wrongTraps: EMPTY_TRAPS,
  },
  {
    id: 10,
    imageFile: 'p3_quiz_world_landmark_city_match_q10.jpg',
    question: QUESTION_LEAD,
    options: [
      { text: T({ ko: '피지', en: 'Fiji', ja: 'フィジー', 'zh-CN': '斐济', 'zh-TW': '斐濟', vi: 'Fiji', id: 'Fiji' }), isCorrect: false },
      { text: T({ ko: '하와이', en: 'Hawaii', ja: 'ハワイ', 'zh-CN': '夏威夷', 'zh-TW': '夏威夷', vi: 'Hawaii', id: 'Hawaii' }), isCorrect: false },
      { text: T({ ko: '타히티', en: 'Tahiti', ja: 'タヒチ', 'zh-CN': '塔希提', 'zh-TW': '大溪地', vi: 'Tahiti', id: 'Tahiti' }), isCorrect: false },
      { text: T({ ko: '이스터 섬 (칠레)', en: 'Easter Island (Chile)', ja: 'イースター島（チリ）', 'zh-CN': '复活节岛（智利）', 'zh-TW': '復活節島（智利）', vi: 'Đảo Phục Sinh (Chile)', id: 'Pulau Paskah (Chile)' }), isCorrect: true },
    ],
    correctExplanation: T({
      ko: '모아이는 칠레 영토인 이스터 섬에 세워진 거대한 석상입니다. 폴리네시아 원주민 라파 누이족이 약 13~16세기에 제작한 887개의 석상이 섬 전체에 분포하며 유네스코 세계문화유산입니다.',
      en: 'Moai are giant statues on Easter Island (Chile). The Rapa Nui people carved some 887 moai between the 13th and 16th centuries—UNESCO World Heritage.',
      ja: 'モアイはチリ領イースター島の巨大石像。13〜16世紀にラパ・ヌイ族が約887体を造り、ユネスコ世界遺産です。',
      'zh-CN': '摩艾石像位于智利复活节岛，拉帕努伊人于约13至16世纪雕刻约887尊，世界遗产。',
      'zh-TW': '摩艾石像位於智利復活節島，拉帕努伊人於約13至16世紀雕刻約887尊，世界遺產。',
      vi: 'Tượng Moai trên đảo Phục Sinh (Chile)—người Rapa Nui tạo khoảng 887 pho từ thế kỷ 13–16—di sản UNESCO.',
      id: 'Moai di Pulau Paskah (Chile)—suku Rapa Nui memahat ~887 patung abad ke-13–16—warisan UNESCO.',
    }),
    wrongTraps: EMPTY_TRAPS,
  },
  {
    id: 11,
    imageFile: 'p3_quiz_world_landmark_city_match_q11.jpg',
    question: QUESTION_LEAD,
    options: [
      { text: T({ ko: '오클랜드', en: 'Auckland', ja: 'オークランド', 'zh-CN': '奥克兰', 'zh-TW': '奧克蘭', vi: 'Auckland', id: 'Auckland' }), isCorrect: false },
      { text: T({ ko: '웰링턴', en: 'Wellington', ja: 'ウェリントン', 'zh-CN': '惠灵顿', 'zh-TW': '威靈頓', vi: 'Wellington', id: 'Wellington' }), isCorrect: false },
      { text: T({ ko: '크라이스트처치', en: 'Christchurch', ja: 'クライストチャーチ', 'zh-CN': '克赖斯特彻奇', 'zh-TW': '基督城', vi: 'Christchurch', id: 'Christchurch' }), isCorrect: false },
      { text: T({ ko: '파이히아 (베이 오브 아일랜즈)', en: 'Paihia (Bay of Islands)', ja: 'パイヒア（ベイ・オブ・アイランズ）', 'zh-CN': '派希亚（群岛湾）', 'zh-TW': '派希亞（群島灣）', vi: 'Paihia (Vịnh Bay of Islands)', id: 'Paihia (Teluk Bay of Islands)' }), isCorrect: true },
    ],
    correctExplanation: T({
      ko: '와이탕이 조약 기념관은 뉴질랜드 노스랜드 파이히아 인근에 위치한 유적지입니다. 1840년 영국과 마오리 족장들이 뉴질랜드 건국 조약인 와이탕이 조약에 서명한 역사적인 장소입니다.',
      en: 'The Waitangi Treaty Grounds near Paihia, New Zealand, is where the Treaty of Waitangi was signed in 1840 between the British Crown and Māori chiefs.',
      ja: 'ワイタンギ条約記念地はニュージーランド・ベイ・オブ・アイランズ近くのパイヒア付近。1840年に英国とマオリ族長がワイタンギ条約に調印した史跡です。',
      'zh-CN': '怀唐伊条约签署地位于新西兰群岛湾派希亚附近，1840年英国与毛利酋长在此签署《怀唐伊条约》。',
      'zh-TW': '懷唐伊條約簽署地位於紐西蘭群島灣派希亞附近，1840年英國與毛利酋長在此簽署《懷唐伊條約》。',
      vi: 'Khu Waitangi gần Paihia, New Zealand—nơi ký Hiệp ước Waitangi năm 1840 giữa Anh và thủ lĩnh Māori.',
      id: 'Taman Perjanjian Waitangi dekat Paihia, Selandia Baru—tempat penandatanganan Perjanjian Waitangi 1840 antara Mahkota Britania dan kepala suku Māori.',
    }),
    wrongTraps: EMPTY_TRAPS,
  },
  {
    id: 12,
    imageFile: 'p3_quiz_world_landmark_city_match_q12.jpg',
    question: QUESTION_LEAD,
    options: [
      { text: T({ ko: '아디스아바바', en: 'Addis Ababa', ja: 'アディスアベバ', 'zh-CN': '亚的斯亚贝巴', 'zh-TW': '阿迪斯阿貝巴', vi: 'Addis Ababa', id: 'Addis Ababa' }), isCorrect: false },
      { text: T({ ko: '카이로', en: 'Cairo', ja: 'カイロ', 'zh-CN': '开罗', 'zh-TW': '開羅', vi: 'Cairo', id: 'Kairo' }), isCorrect: false },
      { text: T({ ko: '나이로비', en: 'Nairobi', ja: 'ナイロビ', 'zh-CN': '内罗毕', 'zh-TW': '奈洛比', vi: 'Nairobi', id: 'Nairobi' }), isCorrect: false },
      { text: T({ ko: '랄리벨라 (에티오피아)', en: 'Lalibela (Ethiopia)', ja: 'ラリベラ（エチオピア）', 'zh-CN': '拉利贝拉（埃塞俄比亚）', 'zh-TW': '拉利貝拉（衣索比亞）', vi: 'Lalibela (Ethiopia)', id: 'Lalibela (Ethiopia)' }), isCorrect: true },
    ],
    correctExplanation: T({
      ko: '랄리벨라 암굴 교회는 에티오피아 북부 랄리벨라에 위치한 12~13세기 기독교 교회 군락입니다. 11개의 교회가 모두 단일한 화산암 암반을 깎아 만들었으며 인간이 만든 건축물 중 가장 경이로운 것 중 하나로 손꼽힙니다. 유네스코 세계문화유산입니다.',
      en: 'The rock-hewn churches of Lalibela, Ethiopia (12th–13th c.), were carved from living rock—11 churches in one volcanic complex, among humanity’s most remarkable sites—UNESCO.',
      ja: 'ラリベラの岩窟教会群はエチオピア北部の12〜13世紀の遺跡。11の教会が一つの岩盤から掘られ、ユネスコ世界遺産です。',
      'zh-CN': '拉利贝拉岩石教堂位于埃塞俄比亚北部，12至13世纪在整块火山岩上凿出11座教堂，世界遗产。',
      'zh-TW': '拉利貝拉岩石教堂位於衣索比亞北部，12至13世紀在整塊火山岩上鑿出11座教堂，世界遺產。',
      vi: 'Nhà thờ đục đá Lalibela, Ethiopia (thế kỷ 12–13)—11 nhà thờ từ một khối đá núi lửa—UNESCO.',
      id: 'Gereja batu Lalibela, Ethiopia (abad 12–13)—11 gereja dari satu batuan vulkanik—UNESCO.',
    }),
    wrongTraps: EMPTY_TRAPS,
  },
];

export const phase3WorldLandmarkCityQuizResults: Phase3WorldLandmarkCityQuizResult[] = [
  {
    type: 'Type1',
    emoji: '🗺️',
    title: T({
      ko: '랜드마크 왕초보',
      en: 'Landmark Beginner',
      ja: 'ランドマーク初心者',
      'zh-CN': '地标小白',
      'zh-TW': '地標新手',
      vi: 'Tân binh địa danh',
      id: 'Pemula landmark',
    }),
    shortDescription: T({
      ko: '"에펠탑은 알겠는데 나머지는 좀..."',
      en: '"I know the Eiffel Tower… the rest, not so much."',
      ja: '「エッフェル塔はわかるけど、あとはちょっと…」',
      'zh-CN': '「埃菲尔铁塔认识，别的就……」',
      'zh-TW': '「艾菲爾鐵塔知道，其他的就……」',
      vi: '"Biết tháp Eiffel… còn lại hơi khoai."',
      id: '"Menara Eiffel tahu… sisanya agak susah."',
    }),
    description: T({
      ko: '세계 지리에 아직 발을 담그지 않은 단계입니다. 하지만 몰랐던 것을 알게 되는 게 여행의 시작 아닐까요? 이번 퀴즈에서 틀린 랜드마크들을 검색해보세요. 가고 싶은 여행지가 생길 수도 있습니다.',
      en: 'You’re just starting out with world geography—but discovering new places is what travel is about. Look up the landmarks you missed; you might find your next trip.',
      ja: '世界地理はこれから。でも「知らなかった」を「知った」に変えるのが旅。外れたランドマークを調べてみて—次の旅行先が見つかるかも。',
      'zh-CN': '世界地理还在起步阶段，但「不知道」变成「知道」就是旅行的乐趣。搜一搜错题里的地标，也许能发现想去的地方。',
      'zh-TW': '世界地理還在起步，但把「不知道」變成「知道」就是旅行。搜搜錯題裡的地標，也許能找到下一站。',
      vi: 'Bạn mới bắt đầu với địa lý thế giới—nhưng khám phá điều mới chính là điều hay. Tra các địa danh làm sai, biết đâu ra ý tưởng du lịch.',
      id: 'Geografi dunia baru mulai—tapi menemukan hal baru itu inti traveling. Cari landmark yang salah, siapa tahu dapat ide liburan.',
    }),
    levelLabel: T({
      ko: 'Lv.1 초보 여행자',
      en: 'Lv.1 Travel rookie',
      ja: 'Lv.1 旅行ビギナー',
      'zh-CN': 'Lv.1 旅行新手',
      'zh-TW': 'Lv.1 旅行新手',
      vi: 'Lv.1 Tân thủ du lịch',
      id: 'Lv.1 Pemula traveling',
    }),
    honorTitle: T({
      ko: '7개 이상 맞추기',
      en: 'Aim for 7+ correct',
      ja: '7問以上正解を目指す',
      'zh-CN': '目标答对7题以上',
      'zh-TW': '目標答對7題以上',
      vi: 'Mục tiêu đúng từ 7 câu trở lên',
      id: 'Target benar 7+ soal',
    }),
    oneLiner: T({
      ko: '몰라서 틀린 게 아니라 아직 안 가봤을 뿐입니다',
      en: 'You didn’t fail—you just haven’t been there yet.',
      ja: '知らなかっただけで、まだ行ってないだけです。',
      'zh-CN': '不是不会，只是还没去过。',
      'zh-TW': '不是不會，只是還沒去過。',
      vi: 'Không phải không biết—chỉ là chưa đi thôi.',
      id: 'Bukan tidak tahu—belum pernah ke sana saja.',
    }),
    todoToday: T({
      ko: '틀린 문제 랜드마크 인스타 검색해보기',
      en: 'Search Instagram for the landmarks you missed',
      ja: '外れたランドマークをインスタで検索してみる',
      'zh-CN': '上Instagram搜一搜做错题的地标',
      'zh-TW': '上Instagram搜做錯題的地標',
      vi: 'Lên Instagram tìm các địa danh làm sai',
      id: 'Cari di Instagram landmark yang salah',
    }),
    shareLine: T({
      ko: '랜드마크 퀴즈 {count}개 맞힘 🗺️ 마지막 3개는 진짜 너무 어렵지 않나요?? 너도 도전해봐',
      en: 'Landmark quiz: {count}/12 correct 🗺️ Those last 3 are brutal—try it yourself!',
      ja: 'ランドマーククイズ {count}/12 🗺️ 最後の3問ムズすぎ…あなたも挑戦して',
      'zh-CN': '地标测验对了{count}题 🗺️ 最后三题太难了，你也来试试',
      'zh-TW': '地標測驗對了{count}題 🗺️ 最後三題太難，你也來試試',
      vi: 'Quiz địa danh: {count}/12 🗺️ 3 câu cuối khó kinh—thử xem!',
      id: 'Kuis landmark: {count}/12 🗺️ 3 soal terakhir susah—coba sendiri!',
    }),
  },
  {
    type: 'Type2',
    emoji: '✈️',
    title: T({
      ko: '여행 입문자',
      en: 'Travel Explorer',
      ja: '旅行入門者',
      'zh-CN': '旅行入门者',
      'zh-TW': '旅行入門者',
      vi: 'Người mới du lịch',
      id: 'Pemula traveling',
    }),
    shortDescription: T({
      ko: '"기본은 알고 있어요. 근데 뒤로 갈수록 어렵더라고요."',
      en: '"I know the basics—it gets harder toward the end."',
      ja: '「基本はわかる。でも後半がキツい…」',
      'zh-CN': '「基础知道，后面越来越难。」',
      'zh-TW': '「基礎知道，後面越來越難。」',
      vi: '"Cơ bản biết—càng về sau càng khó."',
      id: '"Dasar tahu—belakangan makin susah."',
    }),
    description: T({
      ko: '유명 관광지는 어느 정도 알고 있지만 비교적 덜 알려진 랜드마크에서 막히는 단계입니다. 조금만 더 공부하면 다음 단계로 넘어갈 수 있습니다. 여행 유튜브나 여행 다큐멘터리를 자주 보는 타입에게 어울리는 점수입니다.',
      en: 'You know the famous spots but stumble on lesser-known landmarks. A little more curiosity—and travel videos—and you’ll level up.',
      ja: '有名スポットはわかるけど、マイナーなランドマークで止まりがち。あと一歩の好奇心と旅動画でレベルアップできます。',
      'zh-CN': '知名景点还行，冷门地标容易卡关。多看点旅行内容就能进阶。',
      'zh-TW': '知名景點還行，冷門地標容易卡關。多看看旅行內容就能進階。',
      vi: 'Bạn biết điểm nổi tiếng nhưng vấp ở địa danh ít người biết. Xem thêm video du lịch là lên level.',
      id: 'Tempat terkenal oke, landmark sepi sering bikin bingung. Tambah nonton travel bisa naik level.',
    }),
    levelLabel: T({
      ko: 'Lv.30 여행 입문자',
      en: 'Lv.30 Explorer',
      ja: 'Lv.30 旅行入門',
      'zh-CN': 'Lv.30 旅行入门',
      'zh-TW': 'Lv.30 旅行入門',
      vi: 'Lv.30 Người tìm hiểu',
      id: 'Lv.30 Penjelajah',
    }),
    honorTitle: T({
      ko: '9개 이상 맞추기',
      en: 'Aim for 9+ correct',
      ja: '9問以上正解を目指す',
      'zh-CN': '目标答对9题以上',
      'zh-TW': '目標答對9題以上',
      vi: 'Mục tiêu đúng từ 9 câu',
      id: 'Target benar 9+ soal',
    }),
    oneLiner: T({
      ko: '기본기는 있습니다. 조금만 더 파고들어보세요',
      en: 'You’ve got the basics—dig a little deeper.',
      ja: '基礎はある。もう一歩深掘りしてみよう。',
      'zh-CN': '有基础，再深挖一点。',
      'zh-TW': '有基礎，再深挖一點。',
      vi: 'Nền tảng có rồi—đào sâu thêm chút.',
      id: 'Dasarnya ada—gali sedikit lagi.',
    }),
    todoToday: T({
      ko: '국가별 대표 랜드마크 TOP5 검색해보기',
      en: 'Search “top 5 landmarks by country”',
      ja: '国別の代表的ランドマークTOP5を調べる',
      'zh-CN': '搜各国代表地标TOP5',
      'zh-TW': '搜各國代表地標TOP5',
      vi: 'Tìm “top 5 địa danh theo quốc gia”',
      id: 'Cari “5 landmark teratas per negara”',
    }),
    shareLine: T({
      ko: '랜드마크 퀴즈 {count}개 맞힘 ✈️ 앞에는 맞겠는데 뒤로 갈수록 모르겠다 → 이게 어딘지 알아?',
      en: 'Landmark quiz: {count}/12 ✈️ Fine at the start—lost me at the end. Know this place?',
      ja: 'ランドマーククイズ {count}/12 ✈️ 前半はいいけど後半わからん→ここどこ？',
      'zh-CN': '地标测验{count}/12 ✈️ 前面还行后面懵—这是哪儿？',
      'zh-TW': '地標測驗{count}/12 ✈️ 前面還行後面懵—這是哪？',
      vi: 'Quiz địa danh {count}/12 ✈️ Đầu ổn cuối loạn—đây là đâu?',
      id: 'Kuis landmark {count}/12 ✈️ Awal oke akhir bingung—ini di mana?',
    }),
  },
  {
    type: 'Type3',
    emoji: '🌏',
    title: T({
      ko: '세계 여행러',
      en: 'World Traveler',
      ja: '世界旅行マニア',
      'zh-CN': '世界旅行达人',
      'zh-TW': '世界旅行達人',
      vi: 'Nhà du lịch thế giới',
      id: 'Traveler dunia',
    }),
    shortDescription: T({
      ko: '"꽤 어려운 것들도 맞혔네요. 여행 좀 다녔거나 지리에 관심이 많은 분이군요."',
      en: '"You nailed some tough ones—you’ve traveled or you love geography."',
      ja: '「難問も当てたね。旅慣れか、地理好きか。」',
      'zh-CN': '「难题也对了，要么常旅行要么爱地理。」',
      'zh-TW': '「難題也對了，不是常旅行就是愛地理。」',
      vi: '"Khó mà vẫn đúng—hay đi chơi hay mê địa lý."',
      id: '"Yang susah juga benar—sering traveling atau suka geografi."',
    }),
    description: T({
      ko: '일반적인 수준보다 훨씬 넓은 지식을 가지고 있습니다. 유명 랜드마크를 넘어 비교적 덜 알려진 도시의 명소까지 알고 있는 진짜 여행 마니아 단계입니다. 친구들한테 여행 추천을 해주는 역할이 바로 당신입니다.',
      en: 'You know more than average—not just icons but harder sights too. You’re the friend people ask for travel tips.',
      ja: '平均より幅広い知識。有名どころだけでなくマイナーな名所もわかる、まさに旅マニア。友人の旅行相談役です。',
      'zh-CN': '知识面超过一般人，不只知名地标，冷门名胜也懂，朋友会来找你要攻略。',
      'zh-TW': '知識面超過一般人，不只知名地標，冷門名勝也懂，朋友會來問你攻略。',
      vi: 'Bạn biết nhiều hơn mức trung bình—cả địa danh khó. Bạn là người bạn bè hỏi gợi ý du lịch.',
      id: 'Kamu tahu lebih dari rata-rata—termasuk yang susah. Teman-teman minta rekomendasi ke kamu.',
    }),
    levelLabel: T({
      ko: 'Lv.60 세계 여행러',
      en: 'Lv.60 Globetrotter',
      ja: 'Lv.60 世界旅行マニア',
      'zh-CN': 'Lv.60 环球行者',
      'zh-TW': 'Lv.60 環球行者',
      vi: 'Lv.60 Dân du lịch',
      id: 'Lv.60 Pelancong dunia',
    }),
    honorTitle: T({
      ko: '11개 이상 맞추기',
      en: 'Aim for 11+ correct',
      ja: '11問以上正解を目指す',
      'zh-CN': '目标答对11题以上',
      'zh-TW': '目標答對11題以上',
      vi: 'Mục tiêu đúng từ 11 câu',
      id: 'Target benar 11+ soal',
    }),
    oneLiner: T({
      ko: '웬만한 랜드마크는 다 알고 있군요. 진짜 여행을 좋아하는 사람이네요',
      en: 'You really know your landmarks—you love travel.',
      ja: 'だいたいのランドマークわかってる。本物の旅好きだね。',
      'zh-CN': '大部分地标都懂，是真的爱旅行的人。',
      'zh-TW': '大部分地標都懂，是真的愛旅行的人。',
      vi: 'Địa danh nào cũng gần như biết—bạn yêu du lịch thật.',
      id: 'Landmark apa pun hampir tahu—kamu memang suka traveling.',
    }),
    todoToday: T({
      ko: '이번에 틀린 랜드마크가 있는 나라 위시리스트에 추가하기',
      en: 'Add countries of missed landmarks to your wish list',
      ja: '外れたランドマークの国をウィッシュリストに',
      'zh-CN': '把错题地标所在国加入愿望清单',
      'zh-TW': '把錯題地標所在國加入願望清單',
      vi: 'Thêm quốc gia của câu sai vào wish list',
      id: 'Tambahkan negara landmark yang salah ke wish list',
    }),
    shareLine: T({
      ko: '랜드마크 퀴즈 {count}개 맞힘 🌏 나름 여행 좀 다녔다고 생각했는데 마지막 3개서 막힘 → 너는 몇 개야?',
      en: 'Landmark quiz: {count}/12 🌏 Thought I traveled a lot—stuck on the last 3. Your score?',
      ja: 'ランドマーククイズ {count}/12 🌏 旅行したつもりだったのに最後の3問で詰まった→君は？',
      'zh-CN': '地标测验{count}/12 🌏 以为挺能跑结果被最后三题卡住—你几分？',
      'zh-TW': '地標測驗{count}/12 🌏 以為很會跑結果被最後三題卡住—你幾分？',
      vi: 'Quiz địa danh {count}/12 🌏 Tưởng đi nhiều rồi mà kẹt 3 câu cuối—bạn được mấy?',
      id: 'Kuis landmark {count}/12 🌏 Kirain sudah jalan-jalan banyak—nyangkut di 3 terakhir—kamu?',
    }),
  },
  {
    type: 'Type4',
    emoji: '🏆',
    title: T({
      ko: '랜드마크 박사',
      en: 'Landmark Scholar',
      ja: 'ランドマーク博士',
      'zh-CN': '地标博士',
      'zh-TW': '地標博士',
      vi: 'Bậc thầy địa danh',
      id: 'Ahli landmark',
    }),
    shortDescription: T({
      ko: '"이건 진짜 어려운 거 맞죠? 어떻게 이걸 알아요?"',
      en: '"These are seriously hard—how do you know this?"',
      ja: '「これマジ難しくない？どうやって知ってるの？」',
      'zh-CN': '「这也太难了，你怎么知道的？」',
      'zh-TW': '「這也太难了，你怎麼知道的？」',
      vi: '"Khó thật—sao bạn biết vậy?"',
      id: '"Ini susah—kok bisa tahu?"',
    }),
    description: T({
      ko: '극고난이도 문제까지 거의 맞힌 당신. 직접 가봤거나 엄청난 지식을 가지고 있는 수준입니다. 주변에서 여행 관련 질문이 생기면 당신에게 먼저 물어보는 그 사람. 세계 어느 도시를 가도 랜드마크를 먼저 알아보는 타입입니다.',
      en: 'You crushed almost everything, including the brutal questions—you’ve been there or you’ve studied the world. Friends ask you first about trips; you look up landmarks before you go.',
      ja: '超難問までほぼ正解。現地経験か、凄い知識。旅行の相談はまずあなた。行く前からランドマークを調べるタイプ。',
      'zh-CN': '超难题也几乎全对，要么去过要么博学。朋友旅行都先问你，出门前先查地标。',
      'zh-TW': '超難題也幾乎全對，不是去過就是博學。朋友旅行都先問你，出門前先查地標。',
      vi: 'Gần như full cả câu siêu khó—đã đi hoặc đọc rất nhiều. Bạn bè hỏi du lịch là nhớ đến bạn trước.',
      id: 'Hampir benar semua termasuk yang sangat susah—pernah ke sana atau banyak baca. Teman tanya traveling ke kamu dulu.',
    }),
    levelLabel: T({
      ko: 'Lv.88 랜드마크 박사',
      en: 'Lv.88 Landmark scholar',
      ja: 'Lv.88 ランドマーク博士',
      'zh-CN': 'Lv.88 地标学者',
      'zh-TW': 'Lv.88 地標學者',
      vi: 'Lv.88 Bậc thầy',
      id: 'Lv.88 Sarjana landmark',
    }),
    honorTitle: T({
      ko: '12개 퍼펙트 달성',
      en: 'Go for a perfect 12',
      ja: '12問満点を目指す',
      'zh-CN': '冲击12题满分',
      'zh-TW': '衝刺12題滿分',
      vi: 'Hướng tới 12/12',
      id: 'Kejar sempurna 12',
    }),
    oneLiner: T({
      ko: '직접 가보신 거 아닌가요? 이건 진짜 대단합니다',
      en: 'Have you actually been to all these? Incredible.',
      ja: '現地行きました？これは本当にすごい。',
      'zh-CN': '难道都去过？太强了。',
      'zh-TW': '難道都去過？太強了。',
      vi: 'Đi hết rồi à? Đỉnh thật.',
      id: 'Sudah ke semua? Luar biasa.',
    }),
    todoToday: T({
      ko: '틀린 그 한두 개, 꼭 검색하고 실제로 가보기',
      en: 'Look up the one or two you missed—and go see them',
      ja: '外れた1〜2問は必ず調べて、いつか現地へ',
      'zh-CN': '错的那一两题一定要搜一搜，有机会实地看看',
      'zh-TW': '錯的那一兩題一定要搜，有機會實地看看',
      vi: 'Tra lại 1–2 câu sai—rồi đi xem thật',
      id: 'Cari tahu 1–2 yang salah—lalu kunjungi sungguhan',
    }),
    shareLine: T({
      ko: '랜드마크 퀴즈 {count}개 맞힘 🏆 친구야 이 퀴즈 진짜 어려운 거 맞지? → 12개 도전해봐',
      en: 'Landmark quiz: {count}/12 🏆 This quiz is brutal—try for 12/12',
      ja: 'ランドマーククイズ {count}/12 🏆 マジ難しいから12満点挑戦して',
      'zh-CN': '地标测验{count}/12 🏆 这测验超难—来冲满分',
      'zh-TW': '地標測驗{count}/12 🏆 這測驗超難—來衝滿分',
      vi: 'Quiz địa danh {count}/12 🏆 Khó thật—thử full điểm đi',
      id: 'Kuis landmark {count}/12 🏆 Ini susah—coba skor sempurna',
    }),
  },
  {
    type: 'Type5',
    emoji: '🌟',
    title: T({
      ko: '퀴즈 마스터',
      en: 'Quiz Master',
      ja: 'クイズマスター',
      'zh-CN': '测验大师',
      'zh-TW': '測驗大師',
      vi: 'Bậc thầy quiz',
      id: 'Master kuis',
    }),
    shortDescription: T({
      ko: '"12개 전부 맞혔습니다. 당신은 세계 어디서든 살 수 있는 사람입니다."',
      en: '"12/12—you could live anywhere in the world."',
      ja: '「12問全問正解。どこにでも住める人。」',
      'zh-CN': '「12题全对，你在哪儿都能活。」',
      'zh-TW': '「12題全對，你在哪都能活。」',
      vi: '"12/12—ở đâu cũng được."',
      id: '"12/12—bisa tinggal di mana saja."',
    }),
    description: T({
      ko: '에티오피아 암굴 교회부터 뉴질랜드 와이탕이까지 전부 맞힌 당신. 세계 지리 지식이 교과서 수준을 완전히 초월했습니다. 혹시 세계 일주를 해보셨나요? 아니라면 지금 당장 버킷리스트에 추가해야 합니다. 당신의 지식이 아깝습니다.',
      en: 'You got everything—from Ethiopian rock churches to Waitangi. Your geography is beyond textbooks. Round-the-world trip yet? If not, add it now—this knowledge deserves it.',
      ja: 'エチオピアの岩窟からニュージーランドのワイタンギまで全問正解。教科書を超えた地理。世界一周は済み？まならバケットリストへ。',
      'zh-CN': '从埃塞俄比亚石窟到新西兰怀唐伊全对，地理已超越课本。环球旅行过了吗？没过就写进愿望单。',
      'zh-TW': '從衣索比亞石窟到紐西蘭懷唐伊全對，地理已超越課本。環球旅行過了嗎？沒過就寫進清單。',
      vi: 'Từ nhà thờ đá Ethiopia đến Waitangi, New Zealand—full điểm. Địa lý vượt sách giáo khoa. Đã đi vòng thế giới chưa?',
      id: 'Dari gereja batu Ethiopia sampai Waitangi, Selandia Baru—sempurna. Geografimu melampaui buku. Sudah keliling dunia?',
    }),
    levelLabel: T({
      ko: 'Lv.99 전설의 마스터',
      en: 'Lv.99 Legend',
      ja: 'Lv.99 伝説のマスター',
      'zh-CN': 'Lv.99 传说级',
      'zh-TW': 'Lv.99 傳說級',
      vi: 'Lv.99 Huyền thoại',
      id: 'Lv.99 Legenda',
    }),
    honorTitle: T({
      ko: '—',
      en: '—',
      ja: '—',
      'zh-CN': '—',
      'zh-TW': '—',
      vi: '—',
      id: '—',
    }),
    oneLiner: T({
      ko: '당신이 가보지 않은 곳이 있긴 한 건가요?',
      en: 'Is there anywhere you haven’t been?',
      ja: '行ったことない場所、本当にあります？',
      'zh-CN': '还有你没去过的地方吗？',
      'zh-TW': '還有你沒去過的地方嗎？',
      vi: 'Còn chỗ nào bạn chưa đi không?',
      id: 'Masih ada tempat yang belum kamu kunjungi?',
    }),
    todoToday: T({
      ko: '이 퀴즈 친구한테 공유해서 "나 12개 맞혔음ㅋ" 자랑하기',
      en: 'Share this quiz and flex your 12/12',
      ja: '友達にシェアして「12問満点」と自慢する',
      'zh-CN': '分享给朋友炫耀「我满分」',
      'zh-TW': '分享給朋友炫耀「我滿分」',
      vi: 'Chia sẻ và khoe “mình 12/12”',
      id: 'Bagikan dan bangga “aku 12/12”',
    }),
    shareLine: T({
      ko: '랜드마크 퀴즈 12개 전부 맞힘 🌟 에티오피아 암굴 교회까지 맞혔다... 친구야 너도 도전해봐 ㅋㅋ',
      en: 'Landmark quiz: 12/12 🌟 Even the Ethiopian rock churches—beat that!',
      ja: 'ランドマーククイズ 12問満点 🌟 エチオピアの岩窟まで当てた…君も挑戦して',
      'zh-CN': '地标测验12题全对 🌟 连埃塞俄比亚石窟都对了，你也来',
      'zh-TW': '地標測驗12題全對 🌟 連衣索比亞石窟都對了，你也來',
      vi: 'Quiz địa danh 12/12 🌟 Cả nhà thờ đá Ethiopia—thử đi!',
      id: 'Kuis landmark 12/12 🌟 Sampai gereja batu Ethiopia—coba!',
    }),
  },
];

export function calculatePhase3WorldLandmarkCityQuizResult(answers: number[]): string {
  const total = answers.reduce((s, v) => s + v, 0);
  if (total <= 2) return 'Type1';
  if (total <= 5) return 'Type2';
  if (total <= 8) return 'Type3';
  if (total <= 11) return 'Type4';
  return 'Type5';
}
