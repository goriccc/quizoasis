/**
 * 얼굴로 보는 내 첫인상 키워드 3가지
 * slug: phase3-face-first-impression
 * S 미소, E 눈 개방(EAR), R 얼굴 너비/높이. 각 축을 임계값으로 나눠 8칸 중 1순위.
 * 2·3순위는 임계값에 가까운 축을 하나씩 뒤집은 칸.
 * 시그마는 보정 사진 세트가 생기기 전의 시작값이다.
 */

export type Phase3FaceFirstImpressionLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';

type LocaleText = Record<Phase3FaceFirstImpressionLocaleKey, string>;

function L(text: LocaleText): LocaleText {
  return text;
}

export function pickPhase3FaceFirstImpressionText(text: LocaleText, locale: string): string {
  const value = text[locale as Phase3FaceFirstImpressionLocaleKey];
  return value || text.ko;
}

export const PHASE3_FACE_FIRST_IMPRESSION_SLUG = 'phase3-face-first-impression';

export const PHASE3_FACE_FIRST_IMPRESSION_META = {
  title: {
    ko: "얼굴로 보는 내 첫인상 키워드 3가지",
    en: "3 First-Impression Keywords from My Face",
    ja: "顔で見る、私の第一印象キーワード3つ",
    'zh-CN': "从脸看我的3个第一印象关键词",
    'zh-TW': "從臉看我的3個第一印象關鍵詞",
    vi: "3 từ khóa ấn tượng đầu tiên từ khuôn mặt",
    id: "3 kata kunci kesan pertama dari wajahku",
  },

  description: {
    ko: "처음 만난 사람이 나를 보고 떠올리는 키워드는? 사진 한 장에서 표정과 얼굴 비율을 읽고 첫인상 키워드 3가지를 골라 드립니다. 사진은 기기에만 남고 서버로 보내지 않습니다.",
    en: "What three words come to mind when someone meets you? One photo reads your expression and face shape, then picks three first-impression keywords. The photo stays on your device and is never sent to a server.",
    ja: "初対面の人があなたを見て思い浮かべる言葉は？写真1枚から表情と顔のバランスを読み、第一印象キーワードを3つ選びます。写真は端末の中だけに残り、サーバーには送られません。",
    'zh-CN': "初次见面的人看到你会想到哪些词？一张照片读出表情和脸型比例，选出3个第一印象关键词。照片只留在你的设备上，不会上传到服务器。",
    'zh-TW': "初次見面的人看到你會想到哪些詞？一張照片讀出表情和臉型比例，選出3個第一印象關鍵詞。照片只留在你的裝置上，不會上傳到伺服器。",
    vi: "Người mới gặp bạn sẽ nghĩ đến từ nào? Một tấm ảnh đọc nét mặt và tỷ lệ khuôn mặt, rồi chọn 3 từ khóa ấn tượng đầu tiên. Ảnh chỉ nằm trên thiết bị của bạn và không được gửi lên máy chủ.",
    id: "Kata apa yang terlintas saat orang baru bertemu denganmu? Satu foto membaca ekspresi dan proporsi wajah, lalu memilih 3 kata kunci kesan pertama. Foto tetap di perangkatmu dan tidak dikirim ke server.",
  },

  tags: {
    ko: ['얼굴'],
    en: ['face'],
    ja: ['顔'],
    'zh-CN': ['面相'],
    'zh-TW': ['面相'],
    vi: ['khuôn mặt'],
    id: ['wajah'],
  },
};

export interface Phase3FaceFirstImpressionKeyword {
  id: number;
  emoji: string;
  name: LocaleText;
  aiRead: LocaleText;
  quote: LocaleText;
  mood: LocaleText;
  charm: LocaleText;
  love: LocaleText;
  cardPhrase: LocaleText;
  oneLiner: LocaleText;
  shareLine: LocaleText;
}

/**
 * 8칸은 서로 겹치지 않게 고정한다.
 * 포근한 비율 = R 높음, 갸름한 윤곽 = R 낮음.
 * 또렷한 눈매 = E 높음, 차분·느긋한 눈매 = E 낮음.
 * 활짝·편안·은은한 미소 = S 높음, 담백한 표정 = S 낮음.
 * 청순한은 '은은한 미소'가 있어 S 높음 + E 낮음 + R 낮음.
 * 신비로운은 '담백한 표정'이라 S 낮음 + E 낮음 + R 낮음.
 */
export const PHASE3_FACE_FIRST_IMPRESSION_KEYWORDS: Phase3FaceFirstImpressionKeyword[] = [
  {
    id: 1,
    emoji: "🎈",
    name: L({
      ko: "재미있는",
      en: "Fun",
      ja: "おもしろい",
      'zh-CN': "有趣",
      'zh-TW': "有趣",
      vi: "Vui tính",
      id: "Seru",
    }),
    aiRead: L({
      ko: "활짝 웃는 표정에 또렷한 눈매와 포근한 얼굴 비율",
      en: "A wide smile, clear eyes, and a soft, rounded face",
      ja: "にっこりした笑顔に、くっきりした目元、まるみのある顔立ち",
      'zh-CN': "笑容很开，眉眼清楚，脸型圆润",
      'zh-TW': "笑容很開，眉眼清楚，臉型圓潤",
      vi: "Nụ cười rộng, ánh mắt rõ, khuôn mặt tròn mềm",
      id: "Senyum lebar, mata yang tegas, dan wajah yang lembut",
    }),
    quote: L({
      ko: "처음 만난 사람은 '같이 있으면 웃게 되겠다'고 떠올려요.",
      en: "Someone meeting you for the first time thinks, \"I'd end up laughing if I hung out with them.\"",
      ja: "初対面の人は「一緒にいたら笑いそう」と思います。",
      'zh-CN': "初次见面的人会觉得：“跟这个人在一起，大概会忍不住笑。”",
      'zh-TW': "初次見面的人會覺得：「跟這個人在一起，大概會忍不住笑。」",
      vi: "Người mới gặp sẽ nghĩ: \"Ở cạnh người này chắc mình sẽ cười suốt.\"",
      id: "Orang yang baru bertemu akan berpikir, \"Kalau bareng orang ini, aku pasti ketawa.\"",
    }),
    mood: L({
      ko: "에너지 있고 분위기를 띄울 것 같은 사람",
      en: "Someone with energy who can lift the room",
      ja: "元気があって、場を明るくしそうな人",
      'zh-CN': "有活力，像是能把气氛带起来的人",
      'zh-TW': "有活力，像是能把氣氛帶起來的人",
      vi: "Người có năng lượng, dễ kéo không khí lên",
      id: "Orang yang berenergi dan bisa menghidupkan suasana",
    }),
    charm: L({
      ko: "어색함을 빠르게 푸는 친화력",
      en: "The ease that melts awkwardness fast",
      ja: "気まずい空気をすぐにほどく親しみやすさ",
      'zh-CN': "很快化解尴尬的亲和力",
      'zh-TW': "很快化解尷尬的親和力",
      vi: "Khả năng xua tan ngượng ngùng rất nhanh",
      id: "Kemampuan mencairkan suasana canggung dengan cepat",
    }),
    love: L({
      ko: "함께 웃는 시간을 중시하고 표현이 풍부함",
      en: "You care about time spent laughing together, and you show how you feel",
      ja: "一緒に笑う時間を大切にして、気持ちの表現が豊か",
      'zh-CN': "很在意一起笑的时间，表达也很丰富",
      'zh-TW': "很在意一起笑的時間，表達也很豐富",
      vi: "Bạn coi trọng những lúc cùng cười, và diễn đạt cảm xúc rất rõ",
      id: "Kamu menghargai waktu tertawa bersama, dan perasaanmu mudah terbaca",
    }),
    cardPhrase: L({
      ko: "웃음은 제 첫인사예요",
      en: "A laugh is my hello",
      ja: "笑いは、私のあいさつです",
      'zh-CN': "笑容就是我的打招呼",
      'zh-TW': "笑容就是我的打招呼",
      vi: "Nụ cười là lời chào của tôi",
      id: "Tawa adalah sapaan pertamaku",
    }),
    oneLiner: L({
      ko: "웃음은 큰 재능입니다. 진심 한 줄이 더해지면 더 오래 남습니다",
      en: "A good laugh is a real talent. Add one honest line, and it stays with people longer",
      ja: "笑いは大きな才能です。本音がひと言加わると、もっと長く残ります",
      'zh-CN': "这份笑是很大的才能。再补一句真心话，就会留得更久",
      'zh-TW': "這份笑是很大的才能。再補一句真心話，就會留得更久",
      vi: "Nụ cười là một tài năng. Thêm một dòng thật lòng, nó sẽ ở lại lâu hơn",
      id: "Tawa itu bakat besar. Tambahkan satu kalimat yang jujur, dan itu akan tinggal lebih lama",
    }),
    shareLine: L({
      ko: "얼굴로 보는 내 첫인상 키워드 3가지: 1위 재미있는 🎈 AI가 본 내 첫인상이래ㅋㅋ 너는 뭐 나와? 결과 비교해보자",
      en: "3 first-impression keywords from my face: #1 Fun 🎈 That's what AI saw. What do you get? Let's compare",
      ja: "顔で見る第一印象キーワード3つ：1位はおもしろい 🎈 AIが見た私の第一印象だって。あなたは何が出る？結果を比べよう",
      'zh-CN': "从脸看我的第一印象关键词：第一名是有趣 🎈 AI说这就是我给人的感觉。你呢？来对一下结果",
      'zh-TW': "從臉看我的第一印象關鍵詞：第一名是有趣 🎈 AI說這就是我給人的感覺。你呢？來對一下結果",
      vi: "3 từ khóa ấn tượng đầu tiên từ khuôn mặt: hạng 1 là Vui tính 🎈 AI bảo ấn tượng của mình là thế. Còn bạn? So kết quả nào",
      id: "3 kata kunci kesan pertama dari wajahku: nomor 1 Seru 🎈 Katanya ini kesan pertama yang AI lihat. Kamu dapat apa? Yuk bandingkan",
    }),
  },
  {
    id: 2,
    emoji: "🐣",
    name: L({
      ko: "귀여운",
      en: "Cute",
      ja: "かわいい",
      'zh-CN': "可爱",
      'zh-TW': "可愛",
      vi: "Dễ thương",
      id: "Imut",
    }),
    aiRead: L({
      ko: "활짝 웃는 표정에 또렷한 눈매와 갸름한 윤곽",
      en: "A wide smile, clear eyes, and a slim outline",
      ja: "にっこりした笑顔に、くっきりした目元、すっきりした輪郭",
      'zh-CN': "笑容很开，眉眼清楚，轮廓偏瘦长",
      'zh-TW': "笑容很開，眉眼清楚，輪廓偏瘦長",
      vi: "Nụ cười rộng, ánh mắt rõ, đường nét thon",
      id: "Senyum lebar, mata yang tegas, dan garis wajah yang ramping",
    }),
    quote: L({
      ko: "처음 만난 사람은 '맑고 순해 보인다'고 떠올려요.",
      en: "Someone meeting you thinks, \"They look bright and gentle.\"",
      ja: "初対面の人は「澄んでいて素直そう」と思います。",
      'zh-CN': "初次见面的人会觉得：“看起来干净又温和。”",
      'zh-TW': "初次見面的人會覺得：「看起來乾淨又溫和。」",
      vi: "Người mới gặp sẽ nghĩ: \"Trông trong trẻo và hiền.\"",
      id: "Orang yang baru bertemu akan berpikir, \"Kelihatannya bersih dan lembut.\"",
    }),
    mood: L({
      ko: "표정이 풍부하고 산뜻한 사람",
      en: "Someone with a lively face and a fresh feel",
      ja: "表情が豊かで、さわやかな人",
      'zh-CN': "表情丰富，给人清爽的感觉",
      'zh-TW': "表情豐富，給人清爽的感覺",
      vi: "Người giàu biểu cảm và trông tươi mới",
      id: "Orang dengan ekspresi yang hidup dan kesan yang segar",
    }),
    charm: L({
      ko: "작은 것에도 반응하는 순수한 생기",
      en: "A genuine spark that lights up at the little things",
      ja: "小さなことにも反応する、まっすぐな生気",
      'zh-CN': "连小事也会有反应的那股纯粹劲儿",
      'zh-TW': "連小事也會有反應的那股純粹勁",
      vi: "Nguồn năng lượng trong trẻo, dễ phản ứng với những điều nhỏ",
      id: "Semangat yang tulus, mudah bereaksi pada hal-hal kecil",
    }),
    love: L({
      ko: "감정이 투명하게 전해져 상대가 편안함을 느낌",
      en: "Your feelings come through clearly, so the other person feels at ease",
      ja: "気持ちがまっすぐ伝わって、相手がほっとする",
      'zh-CN': "情绪很透明，对方会觉得轻松",
      'zh-TW': "情緒很透明，對方會覺得輕鬆",
      vi: "Cảm xúc của bạn truyền đi rõ ràng, nên đối phương thấy nhẹ nhõm",
      id: "Perasaanmu terbaca jernih, jadi orang di sampingmu merasa nyaman",
    }),
    cardPhrase: L({
      ko: "반짝이는 눈이 제 마음이에요",
      en: "My bright eyes are where my heart shows",
      ja: "きらきらした目が、私の気持ちです",
      'zh-CN': "发亮的眼睛就是我的心",
      'zh-TW': "發亮的眼睛就是我的心",
      vi: "Đôi mắt sáng chính là lòng tôi",
      id: "Mata yang berbinar ini adalah hatiku",
    }),
    oneLiner: L({
      ko: "산뜻한 생기는 매력입니다. 오늘도 맑게 웃어 보세요",
      en: "That fresh spark is part of your charm. Smile brightly again today",
      ja: "さわやかな生気は魅力です。今日も澄んだ笑顔でいてください",
      'zh-CN': "这份清爽的朝气很有魅力。今天也笑得干净一点吧",
      'zh-TW': "這份清爽的朝氣很有魅力。今天也笑得乾淨一點吧",
      vi: "Nét tươi mới ấy là một sức hút. Hôm nay cũng hãy cười thật trong",
      id: "Kesegaran itu memang memikat. Hari ini juga, tersenyumlah dengan jernih",
    }),
    shareLine: L({
      ko: "얼굴로 보는 내 첫인상 키워드 3가지: 1위 귀여운 🐣 맑고 산뜻한 첫인상이래ㅎㅎ 너는 뭐 나와? 결과 비교해보자",
      en: "3 first-impression keywords from my face: #1 Cute 🐣 Bright and fresh, apparently. What do you get? Let's compare",
      ja: "顔で見る第一印象キーワード3つ：1位はかわいい 🐣 澄んでいてさわやかな第一印象だって。あなたは何が出る？結果を比べよう",
      'zh-CN': "从脸看我的第一印象关键词：第一名是可爱 🐣 说我看起来干净又清爽。你呢？来对一下结果",
      'zh-TW': "從臉看我的第一印象關鍵詞：第一名是可愛 🐣 說我看起來乾淨又清爽。你呢？來對一下結果",
      vi: "3 từ khóa ấn tượng đầu tiên: hạng 1 là Dễ thương 🐣 Bảo mình trông trong trẻo và tươi. Còn bạn? So kết quả nào",
      id: "3 kata kunci kesan pertama: nomor 1 Imut 🐣 Katanya kesanku bersih dan segar. Kamu dapat apa? Yuk bandingkan",
    }),
  },
  {
    id: 3,
    emoji: "☀️",
    name: L({
      ko: "따뜻한",
      en: "Warm",
      ja: "あたたかい",
      'zh-CN': "温暖",
      'zh-TW': "溫暖",
      vi: "Ấm áp",
      id: "Hangat",
    }),
    aiRead: L({
      ko: "편안한 미소에 차분한 눈매와 포근한 얼굴 비율",
      en: "An easy smile, calm eyes, and a soft, rounded face",
      ja: "やわらかな笑みに、落ち着いた目元、まるみのある顔立ち",
      'zh-CN': "笑容放松，眼神平静，脸型圆润",
      'zh-TW': "笑容放鬆，眼神平靜，臉型圓潤",
      vi: "Nụ cười thoải mái, ánh mắt điềm tĩnh, khuôn mặt tròn mềm",
      id: "Senyum yang santai, mata yang tenang, dan wajah yang lembut",
    }),
    quote: L({
      ko: "처음 만난 사람은 '곁에 있으면 마음이 놓이겠다'고 떠올려요.",
      en: "Someone meeting you thinks, \"I'd feel at ease next to them.\"",
      ja: "初対面の人は「そばにいると安心しそう」と思います。",
      'zh-CN': "初次见面的人会觉得：“待在这人身边，心会安下来。”",
      'zh-TW': "初次見面的人會覺得：「待在這人身邊，心會安下來。」",
      vi: "Người mới gặp sẽ nghĩ: \"Ở cạnh người này chắc lòng mình sẽ yên.\"",
      id: "Orang yang baru bertemu akan berpikir, \"Di dekat orang ini, hati rasanya tenang.\"",
    }),
    mood: L({
      ko: "푸근하고 믿음직한 사람",
      en: "Someone warm and easy to trust",
      ja: "ほっとする、信頼できそうな人",
      'zh-CN': "让人放松、值得信赖的人",
      'zh-TW': "讓人放鬆、值得信賴的人",
      vi: "Người ấm áp và đáng tin",
      id: "Orang yang hangat dan mudah dipercaya",
    }),
    charm: L({
      ko: "안정감과 포용력",
      en: "A steady calm, and room for other people",
      ja: "安定感と、人を受け入れる広さ",
      'zh-CN': "安定感，还有能接住别人的宽厚",
      'zh-TW': "安定感，還有能接住別人的寬厚",
      vi: "Cảm giác vững vàng và khả năng bao dung",
      id: "Rasa aman, dan ruang untuk menerima orang lain",
    }),
    love: L({
      ko: "말없이 곁을 지키며 챙김",
      en: "You stay close without many words, and you look after them",
      ja: "多くを語らずそばにいて、きちんと気にかける",
      'zh-CN': "话不多，却会守在身边，把人放在心上",
      'zh-TW': "話不多，卻會守在身邊，把人放在心上",
      vi: "Không nói nhiều, nhưng ở bên và để ý người ấy",
      id: "Tidak banyak bicara, tapi tetap di samping dan memperhatikan",
    }),
    cardPhrase: L({
      ko: "곁에 있으면 마음이 놓인대요",
      en: "People say they feel at ease beside me",
      ja: "そばにいると安心するそうです",
      'zh-CN': "听说待在我身边会安心",
      'zh-TW': "聽說待在我身邊會安心",
      vi: "Mọi người nói ở cạnh tôi thì lòng thấy yên",
      id: "Katanya, di dekatku hati jadi tenang",
    }),
    oneLiner: L({
      ko: "푸근함은 큰 힘입니다. 나도 기댈 자리를 만들어 두세요",
      en: "Warmth is a real strength. Leave a little room for yourself to lean on, too",
      ja: "あたたかさは大きな力です。自分も寄りかかれる場所を残しておいてください",
      'zh-CN': "这份暖意是很大的力量。也给自己留一个可以依靠的地方",
      'zh-TW': "這份暖意是很大的力量。也給自己留一個可以依靠的地方",
      vi: "Sự ấm áp là một sức mạnh. Hãy để lại một chỗ để chính mình cũng có thể dựa vào",
      id: "Kehangatan itu kekuatan besar. Sisakan juga tempat untuk dirimu bersandar",
    }),
    shareLine: L({
      ko: "얼굴로 보는 내 첫인상 키워드 3가지: 1위 따뜻한 ☀️ 곁에 있으면 마음 놓인대ㅎㅎ 너는 뭐 나와? 결과 비교해보자",
      en: "3 first-impression keywords from my face: #1 Warm ☀️ People would feel at ease next to me. What do you get? Let's compare",
      ja: "顔で見る第一印象キーワード3つ：1位はあたたかい ☀️ そばにいると安心するって。あなたは何が出る？結果を比べよう",
      'zh-CN': "从脸看我的第一印象关键词：第一名是温暖 ☀️ 说待在我身边会安心。你呢？来对一下结果",
      'zh-TW': "從臉看我的第一印象關鍵詞：第一名是溫暖 ☀️ 說待在我身邊會安心。你呢？來對一下結果",
      vi: "3 từ khóa ấn tượng đầu tiên: hạng 1 là Ấm áp ☀️ Bảo ở cạnh mình thì lòng sẽ yên. Còn bạn? So kết quả nào",
      id: "3 kata kunci kesan pertama: nomor 1 Hangat ☀️ Katanya di dekatku hati jadi tenang. Kamu dapat apa? Yuk bandingkan",
    }),
  },
  {
    id: 4,
    emoji: "🌸",
    name: L({
      ko: "청순한",
      en: "Pure",
      ja: "清純",
      'zh-CN': "清纯",
      'zh-TW': "清純",
      vi: "Trong trẻo",
      id: "Polos",
    }),
    aiRead: L({
      ko: "은은한 미소에 느긋한 눈매와 갸름한 윤곽",
      en: "A soft smile, unhurried eyes, and a slim outline",
      ja: "ほのかな笑みに、ゆったりした目元、すっきりした輪郭",
      'zh-CN': "笑容淡淡的，眼神从容，轮廓偏瘦长",
      'zh-TW': "笑容淡淡的，眼神從容，輪廓偏瘦長",
      vi: "Nụ cười khẽ, ánh mắt thong thả, đường nét thon",
      id: "Senyum yang samar, mata yang santai, dan garis wajah yang ramping",
    }),
    quote: L({
      ko: "처음 만난 사람은 '맑고 차분해 보인다'고 떠올려요.",
      en: "Someone meeting you thinks, \"They look clear and calm.\"",
      ja: "初対面の人は「澄んでいて落ち着いて見える」と思います。",
      'zh-CN': "初次见面的人会觉得：“看起来干净，也很安静。”",
      'zh-TW': "初次見面的人會覺得：「看起來乾淨，也很安靜。」",
      vi: "Người mới gặp sẽ nghĩ: \"Trông trong và điềm tĩnh.\"",
      id: "Orang yang baru bertemu akan berpikir, \"Kelihatannya jernih dan tenang.\"",
    }),
    mood: L({
      ko: "조용하고 깨끗한 느낌의 사람",
      en: "Someone who feels quiet and clean",
      ja: "静かで、きれいな印象の人",
      'zh-CN': "安静、干净的感觉",
      'zh-TW': "安靜、乾淨的感覺",
      vi: "Người mang cảm giác yên và trong",
      id: "Orang yang terasa tenang dan bersih",
    }),
    charm: L({
      ko: "잔잔한 분위기와 섬세한 감수성",
      en: "A quiet atmosphere, and a fine sensitivity",
      ja: "静かな空気と、細やかな感受性",
      'zh-CN': "安静的气质，还有细腻的感受力",
      'zh-TW': "安靜的氣質，還有細膩的感受力",
      vi: "Một không khí dịu, và cảm xúc rất tinh",
      id: "Suasana yang tenang, dan kepekaan yang halus",
    }),
    love: L({
      ko: "천천히 마음을 키우고 진심을 오래 간직함",
      en: "You let feelings grow slowly, and you keep them for a long time",
      ja: "気持ちをゆっくり育てて、本音を長く大切にする",
      'zh-CN': "感情慢慢长起来，真心会放很久",
      'zh-TW': "感情慢慢長起來，真心會放很久",
      vi: "Bạn để tình cảm lớn dần, và giữ lòng thành rất lâu",
      id: "Perasaanmu tumbuh pelan, dan ketulusan itu kamu simpan lama",
    }),
    cardPhrase: L({
      ko: "조용한 눈빛에 이야기가 있어요",
      en: "There's a story in my quiet eyes",
      ja: "静かなまなざしに、話があります",
      'zh-CN': "安静的眼神里有故事",
      'zh-TW': "安靜的眼神裡有故事",
      vi: "Ánh mắt yên ấy có một câu chuyện",
      id: "Di mata yang tenang ini ada sebuah cerita",
    }),
    oneLiner: L({
      ko: "고요한 매력은 오래 남습니다. 마음도 한 줄씩 꺼내 보세요",
      en: "A quiet charm stays with people. Try letting your heart out, one line at a time",
      ja: "静かな魅力は長く残ります。気持ちも一行ずつ出してみてください",
      'zh-CN': "安静的魅力会留很久。心里的话，也可以一行一行说出来",
      'zh-TW': "安靜的魅力會留很久。心裡的話，也可以一行一行說出來",
      vi: "Sức hút yên lặng ở lại rất lâu. Hãy thử lấy lòng mình ra, từng dòng một",
      id: "Daya tarik yang tenang itu bertahan lama. Coba keluarkan isi hatimu, satu baris demi satu baris",
    }),
    shareLine: L({
      ko: "얼굴로 보는 내 첫인상 키워드 3가지: 1위 청순한 🌸 맑고 차분한 첫인상이래... 너는 뭐 나와? 결과 비교해보자",
      en: "3 first-impression keywords from my face: #1 Pure 🌸 A clear, calm first impression. What do you get? Let's compare",
      ja: "顔で見る第一印象キーワード3つ：1位は清純 🌸 澄んでいて落ち着いた第一印象だって。あなたは何が出る？結果を比べよう",
      'zh-CN': "从脸看我的第一印象关键词：第一名是清纯 🌸 说我看起来干净又安静。你呢？来对一下结果",
      'zh-TW': "從臉看我的第一印象關鍵詞：第一名是清純 🌸 說我看起來乾淨又安靜。你呢？來對一下結果",
      vi: "3 từ khóa ấn tượng đầu tiên: hạng 1 là Trong trẻo 🌸 Bảo mình trông trong và điềm. Còn bạn? So kết quả nào",
      id: "3 kata kunci kesan pertama: nomor 1 Polos 🌸 Katanya kesanku jernih dan tenang. Kamu dapat apa? Yuk bandingkan",
    }),
  },
  {
    id: 5,
    emoji: "🛡️",
    name: L({
      ko: "강인한",
      en: "Reliable",
      ja: "頼もしい",
      'zh-CN': "靠谱",
      'zh-TW': "可靠",
      vi: "Đáng tin",
      id: "Tangguh",
    }),
    aiRead: L({
      ko: "담백한 표정에 또렷한 눈매와 포근한 얼굴 비율",
      en: "A quiet, unadorned look, clear eyes, and a soft face",
      ja: "飾らない表情に、くっきりした目元、まるみのある顔立ち",
      'zh-CN': "表情淡淡的，眉眼清楚，脸型圆润",
      'zh-TW': "表情淡淡的，眉眼清楚，臉型圓潤",
      vi: "Biểu cảm giản dị, ánh mắt rõ, khuôn mặt tròn mềm",
      id: "Ekspresi yang polos, mata yang tegas, dan wajah yang lembut",
    }),
    quote: L({
      ko: "처음 만난 사람은 '믿고 맡겨도 되겠다'고 떠올려요.",
      en: "Someone meeting you thinks, \"I could trust them with something important.\"",
      ja: "初対面の人は「任せて大丈夫そう」と思います。",
      'zh-CN': "初次见面的人会觉得：“把事情交给这个人，应该没问题。”",
      'zh-TW': "初次見面的人會覺得：「把事情交給這個人，應該沒問題。」",
      vi: "Người mới gặp sẽ nghĩ: \"Giao việc cho người này chắc cũng yên tâm.\"",
      id: "Orang yang baru bertemu akan berpikir, \"Kalau diserahkan ke orang ini, rasanya aman.\"",
    }),
    mood: L({
      ko: "중심이 단단하고 책임감 있어 보이는 사람",
      en: "Someone who looks grounded and responsible",
      ja: "芯がしっかりしていて、責任感がありそうな人",
      'zh-CN': "看起来很稳，也扛得住责任的人",
      'zh-TW': "看起來很穩，也扛得住責任的人",
      vi: "Người trông vững và có trách nhiệm",
      id: "Orang yang terlihat kokoh dan bertanggung jawab",
    }),
    charm: L({
      ko: "기준이 분명하고 흔들리지 않는 신뢰감",
      en: "Clear standards, and a trust that doesn't wobble",
      ja: "基準がはっきりしていて、揺れない信頼感",
      'zh-CN': "标准清楚，给人一种不晃的信任感",
      'zh-TW': "標準清楚，給人一種不晃的信任感",
      vi: "Tiêu chuẩn rõ ràng, và cảm giác tin cậy không lay",
      id: "Ukuran yang jelas, dan rasa percaya yang tidak goyah",
    }),
    love: L({
      ko: "겉은 담백해도 소중한 사람은 끝까지 지킴",
      en: "You may look low-key, but you protect the people who matter",
      ja: "見た目はあっさりでも、大切な人は最後まで守る",
      'zh-CN': "外表淡淡的，重要的人却会守到最后",
      'zh-TW': "外表淡淡的，重要的人卻會守到最後",
      vi: "Bên ngoài giản dị, nhưng người quan trọng thì bạn giữ đến cùng",
      id: "Dari luar terlihat sederhana, tapi orang yang penting kamu jaga sampai akhir",
    }),
    cardPhrase: L({
      ko: "표현은 담백해도 의리는 진해요",
      en: "I don't say much, but my loyalty runs deep",
      ja: "表現はあっさりでも、義理は濃いです",
      'zh-CN': "话不多，情义却很厚",
      'zh-TW': "話不多，情義卻很厚",
      vi: "Lời nói giản, nhưng nghĩa thì đậm",
      id: "Ucapannya sederhana, tapi kesetiaannya tebal",
    }),
    oneLiner: L({
      ko: "단단함은 큰 힘입니다. 부드러운 한마디가 더해지면 더 멋집니다",
      en: "Being solid is a real strength. One gentle sentence makes it even better",
      ja: "しっかりしていることは大きな力です。やわらかいひと言が加わると、もっと格好よくなります",
      'zh-CN': "这份稳是很大的力量。再加一句柔软的话，会更好看",
      'zh-TW': "這份穩是很大的力量。再加一句柔軟的話，會更好看",
      vi: "Sự vững vàng là sức mạnh. Thêm một câu dịu dàng sẽ đẹp hơn nữa",
      id: "Kekokohan itu kekuatan besar. Satu kalimat yang lembut membuatnya makin bagus",
    }),
    shareLine: L({
      ko: "얼굴로 보는 내 첫인상 키워드 3가지: 1위 강인한 🛡️ 믿고 맡길 첫인상이래ㅋㅋ 너는 뭐 나와? 결과 비교해보자",
      en: "3 first-impression keywords from my face: #1 Reliable 🛡️ The kind of person you'd trust with something important. What do you get? Let's compare",
      ja: "顔で見る第一印象キーワード3つ：1位は頼もしい 🛡️ 任せて大丈夫そうな第一印象だって。あなたは何が出る？結果を比べよう",
      'zh-CN': "从脸看我的第一印象关键词：第一名是靠谱 🛡️ 说把事情交给我也可以。你呢？来对一下结果",
      'zh-TW': "從臉看我的第一印象關鍵詞：第一名是可靠 🛡️ 說把事情交給我也可以。你呢？來對一下結果",
      vi: "3 từ khóa ấn tượng đầu tiên: hạng 1 là Đáng tin 🛡️ Bảo giao việc cho mình cũng yên. Còn bạn? So kết quả nào",
      id: "3 kata kunci kesan pertama: nomor 1 Tangguh 🛡️ Katanya aku orang yang bisa dipercaya. Kamu dapat apa? Yuk bandingkan",
    }),
  },
  {
    id: 6,
    emoji: "📚",
    name: L({
      ko: "똑똑한",
      en: "Smart",
      ja: "知的",
      'zh-CN': "聪明",
      'zh-TW': "聰明",
      vi: "Thông minh",
      id: "Cerdas",
    }),
    aiRead: L({
      ko: "담백한 표정에 또렷한 눈매와 갸름한 윤곽",
      en: "A quiet, unadorned look, clear eyes, and a slim outline",
      ja: "飾らない表情に、くっきりした目元、すっきりした輪郭",
      'zh-CN': "表情淡淡的，眉眼清楚，轮廓偏瘦长",
      'zh-TW': "表情淡淡的，眉眼清楚，輪廓偏瘦長",
      vi: "Biểu cảm giản dị, ánh mắt rõ, đường nét thon",
      id: "Ekspresi yang polos, mata yang tegas, dan garis wajah yang ramping",
    }),
    quote: L({
      ko: "처음 만난 사람은 '생각이 깊고 센스 있다'고 떠올려요.",
      en: "Someone meeting you thinks, \"They seem thoughtful, and they read a room well.\"",
      ja: "初対面の人は「考えが深くて、センスがありそう」と思います。",
      'zh-CN': "初次见面的人会觉得：“想得深，也挺有分寸。”",
      'zh-TW': "初次見面的人會覺得：「想得深，也挺有分寸。」",
      vi: "Người mới gặp sẽ nghĩ: \"Người này suy nghĩ sâu, lại có duyên.\"",
      id: "Orang yang baru bertemu akan berpikir, \"Orang ini dalam, dan punya selera.\"",
    }),
    mood: L({
      ko: "차분히 관찰하고 말을 고르는 사람",
      en: "Someone who watches quietly and chooses their words",
      ja: "静かに観察して、言葉を選ぶ人",
      'zh-CN': "会安静观察，说话也挑着用的人",
      'zh-TW': "會安靜觀察，說話也挑著用的人",
      vi: "Người quan sát điềm tĩnh và chọn lời",
      id: "Orang yang mengamati dengan tenang dan memilih kata",
    }),
    charm: L({
      ko: "상황을 읽는 센스와 깊이 있는 대화",
      en: "A sense for the room, and conversations with some depth",
      ja: "空気を読むセンスと、深みのある会話",
      'zh-CN': "会看场合的分寸，还有聊得进去的深度",
      'zh-TW': "會看場合的分寸，還有聊得進去的深度",
      vi: "Khiếu đọc tình huống, và những cuộc nói chuyện có chiều sâu",
      id: "Kepekaan membaca suasana, dan obrolan yang ada dalamnya",
    }),
    love: L({
      ko: "대화가 잘 통하고 신중하게 다가감",
      en: "You click in conversation, and you come closer carefully",
      ja: "会話がかみ合って、慎重に近づく",
      'zh-CN': "聊得来，靠近的时候也很慎重",
      'zh-TW': "聊得來，靠近的時候也很慎重",
      vi: "Nói chuyện hợp, và lại gần một cách cẩn thận",
      id: "Obrolannya nyambung, dan kamu mendekat dengan hati-hati",
    }),
    cardPhrase: L({
      ko: "알면 알수록 깊이가 있어요",
      en: "The more you know me, the more depth you find",
      ja: "知るほど、深さがあります",
      'zh-CN': "越了解，越有深度",
      'zh-TW': "越了解，越有深度",
      vi: "Càng hiểu, càng thấy chiều sâu",
      id: "Semakin dikenal, semakin terasa dalamnya",
    }),
    oneLiner: L({
      ko: "깊이는 큰 매력입니다. 감정 한 줄이 더해지면 더 가까워집니다",
      en: "Depth is a real charm. One honest line about how you feel brings people closer",
      ja: "深さは大きな魅力です。気持ちがひと言加わると、もっと近くなります",
      'zh-CN': "这份深度很有魅力。再补一句心里话，就会更靠近",
      'zh-TW': "這份深度很有魅力。再補一句心裡話，就會更靠近",
      vi: "Chiều sâu là một sức hút. Thêm một dòng cảm xúc, mọi người sẽ lại gần hơn",
      id: "Kedalaman itu daya tarik besar. Satu kalimat perasaan membuat orang jadi lebih dekat",
    }),
    shareLine: L({
      ko: "얼굴로 보는 내 첫인상 키워드 3가지: 1위 똑똑한 📚 생각 깊은 첫인상이래ㅋㅋ 너는 뭐 나와? 결과 비교해보자",
      en: "3 first-impression keywords from my face: #1 Smart 📚 A thoughtful first impression. What do you get? Let's compare",
      ja: "顔で見る第一印象キーワード3つ：1位は知的 📚 考えの深い第一印象だって。あなたは何が出る？結果を比べよう",
      'zh-CN': "从脸看我的第一印象关键词：第一名是聪明 📚 说我看起来想得深。你呢？来对一下结果",
      'zh-TW': "從臉看我的第一印象關鍵詞：第一名是聰明 📚 說我看起來想得深。你呢？來對一下結果",
      vi: "3 từ khóa ấn tượng đầu tiên: hạng 1 là Thông minh 📚 Bảo mình trông suy nghĩ sâu. Còn bạn? So kết quả nào",
      id: "3 kata kunci kesan pertama: nomor 1 Cerdas 📚 Katanya kesanku orang yang dalam. Kamu dapat apa? Yuk bandingkan",
    }),
  },
  {
    id: 7,
    emoji: "🖤",
    name: L({
      ko: "시크한",
      en: "Chic",
      ja: "クール",
      'zh-CN': "高冷",
      'zh-TW': "高冷",
      vi: "Lạnh lùng",
      id: "Chic",
    }),
    aiRead: L({
      ko: "담백한 표정에 차분한 눈매와 포근한 얼굴 비율",
      en: "A quiet, unadorned look, calm eyes, and a soft face",
      ja: "飾らない表情に、落ち着いた目元、まるみのある顔立ち",
      'zh-CN': "表情淡淡的，眼神平静，脸型圆润",
      'zh-TW': "表情淡淡的，眼神平靜，臉型圓潤",
      vi: "Biểu cảm giản dị, ánh mắt điềm tĩnh, khuôn mặt tròn mềm",
      id: "Ekspresi yang polos, mata yang tenang, dan wajah yang lembut",
    }),
    quote: L({
      ko: "처음 만난 사람은 '자기 색이 분명해 보인다'고 떠올려요.",
      en: "Someone meeting you thinks, \"They clearly have a style of their own.\"",
      ja: "初対面の人は「自分の色がはっきりしている」と思います。",
      'zh-CN': "初次见面的人会觉得：“这个人自己的风格很清楚。”",
      'zh-TW': "初次見面的人會覺得：「這個人自己的風格很清楚。」",
      vi: "Người mới gặp sẽ nghĩ: \"Người này có màu riêng rất rõ.\"",
      id: "Orang yang baru bertemu akan berpikir, \"Orang ini punya warna sendiri yang jelas.\"",
    }),
    mood: L({
      ko: "무심한 듯 여유 있고 자기 스타일이 있는 사람",
      en: "Someone who looks unbothered, at ease, and sure of their style",
      ja: "そっけないようで余裕があって、自分のスタイルがある人",
      'zh-CN': "看着淡淡的，其实很从容，也有自己的风格",
      'zh-TW': "看著淡淡的，其實很從容，也有自己的風格",
      vi: "Người trông hờ hững, nhưng thoải mái và có phong cách riêng",
      id: "Orang yang kelihatan cuek, tapi santai dan punya gaya sendiri",
    }),
    charm: L({
      ko: "유행에 휘둘리지 않는 개성과 반전의 따뜻함",
      en: "A style that doesn't chase trends, and a warmth that shows up when you least expect it",
      ja: "流行に流されない個性と、意外なあたたかさ",
      'zh-CN': "不被潮流带着走的个性，还有反差里的那点暖",
      'zh-TW': "不被潮流帶著走的個性，還有反差裡的那點暖",
      vi: "Cá tính không chạy theo trào lưu, và một sự ấm áp bất ngờ",
      id: "Kepribadian yang tidak ikut arus, dan kehangatan yang muncul di saat tak terduga",
    }),
    love: L({
      ko: "표현은 느리지만 한번 열면 진심이 큼",
      en: "You take your time to show it, but once you open up, it's real",
      ja: "表現はゆっくりでも、一度開くと本音が大きい",
      'zh-CN': "表达得慢，可一旦打开，真心很大",
      'zh-TW': "表達得慢，可一旦打開，真心很大",
      vi: "Bạn diễn đạt chậm, nhưng khi mở lòng thì rất thật",
      id: "Kamu lambat menunjukkan perasaan, tapi begitu terbuka, itu sungguh-sungguh",
    }),
    cardPhrase: L({
      ko: "무심한 듯 진심이에요",
      en: "I look unbothered. I mean it",
      ja: "そっけないようで、本音です",
      'zh-CN': "看着淡，其实是真心",
      'zh-TW': "看著淡，其實是真心",
      vi: "Trông hờ hững, nhưng là thật lòng",
      id: "Kelihatannya cuek, tapi ini sungguh",
    }),
    oneLiner: L({
      ko: "개성은 큰 자산입니다. 마음의 표현을 한 줄만 더해 보세요",
      en: "A style of your own is a real asset. Try adding just one line of how you feel",
      ja: "個性は大きな財産です。気持ちをひと言だけ足してみてください",
      'zh-CN': "个性是很大的本钱。心里的话，试着再加一行",
      'zh-TW': "個性是很大的本錢。心裡的話，試著再加一行",
      vi: "Cá tính là một vốn lớn. Hãy thử thêm một dòng về lòng mình",
      id: "Kepribadian itu modal besar. Coba tambahkan satu baris tentang perasaanmu",
    }),
    shareLine: L({
      ko: "얼굴로 보는 내 첫인상 키워드 3가지: 1위 시크한 🖤 자기 색 분명한 첫인상이래ㅋㅋ 너는 뭐 나와? 결과 비교해보자",
      en: "3 first-impression keywords from my face: #1 Chic 🖤 I look like someone with a style of their own. What do you get? Let's compare",
      ja: "顔で見る第一印象キーワード3つ：1位はクール 🖤 自分の色がはっきりした第一印象だって。あなたは何が出る？結果を比べよう",
      'zh-CN': "从脸看我的第一印象关键词：第一名是高冷 🖤 说我自己的风格很清楚。你呢？来对一下结果",
      'zh-TW': "從臉看我的第一印象關鍵詞：第一名是高冷 🖤 說我自己的風格很清楚。你呢？來對一下結果",
      vi: "3 từ khóa ấn tượng đầu tiên: hạng 1 là Lạnh lùng 🖤 Bảo mình có màu riêng rất rõ. Còn bạn? So kết quả nào",
      id: "3 kata kunci kesan pertama: nomor 1 Chic 🖤 Katanya aku punya gaya sendiri yang jelas. Kamu dapat apa? Yuk bandingkan",
    }),
  },
  {
    id: 8,
    emoji: "🌙",
    name: L({
      ko: "신비로운",
      en: "Mysterious",
      ja: "ミステリアス",
      'zh-CN': "神秘",
      'zh-TW': "神祕",
      vi: "Bí ẩn",
      id: "Misterius",
    }),
    aiRead: L({
      ko: "담백한 표정에 느긋한 눈매와 갸름한 윤곽",
      en: "A quiet, unadorned look, unhurried eyes, and a slim outline",
      ja: "飾らない表情に、ゆったりした目元、すっきりした輪郭",
      'zh-CN': "表情淡淡的，眼神从容，轮廓偏瘦长",
      'zh-TW': "表情淡淡的，眼神從容，輪廓偏瘦長",
      vi: "Biểu cảm giản dị, ánh mắt thong thả, đường nét thon",
      id: "Ekspresi yang polos, mata yang santai, dan garis wajah yang ramping",
    }),
    quote: L({
      ko: "처음 만난 사람은 '더 알고 싶어진다'고 떠올려요.",
      en: "Someone meeting you thinks, \"I want to know more.\"",
      ja: "初対面の人は「もっと知りたくなる」と思います。",
      'zh-CN': "初次见面的人会觉得：“还想再了解一点。”",
      'zh-TW': "初次見面的人會覺得：「還想再了解一點。」",
      vi: "Người mới gặp sẽ nghĩ: \"Muốn biết thêm về người này.\"",
      id: "Orang yang baru bertemu akan berpikir, \"Aku ingin tahu lebih banyak.\"",
    }),
    mood: L({
      ko: "말을 아끼지만 눈빛에 이야기가 있는 사람",
      en: "Someone who says little, but whose eyes seem to hold a story",
      ja: "言葉は少ないのに、まなざしに話がある人",
      'zh-CN': "话不多，眼神里却像有故事",
      'zh-TW': "話不多，眼神裡卻像有故事",
      vi: "Người ít nói, nhưng ánh mắt như có chuyện",
      id: "Orang yang hemat kata, tapi matanya seperti menyimpan cerita",
    }),
    charm: L({
      ko: "자기 페이스를 지키는 여유와 궁금증을 부르는 분위기",
      en: "You keep your own pace, and people get curious",
      ja: "自分のペースを守る余裕と、知りたくなる空気",
      'zh-CN': "守着自己的节奏，还让人想多看一眼",
      'zh-TW': "守著自己的節奏，還讓人想多看一眼",
      vi: "Sự thong thả giữ nhịp của mình, và một không khí khiến người ta tò mò",
      id: "Ketenangan menjaga ritmemu sendiri, dan suasana yang bikin orang penasaran",
    }),
    love: L({
      ko: "천천히 마음을 열고 곁에 오면 깊이 아낌",
      en: "You open up slowly, and once someone is close, you care deeply",
      ja: "心はゆっくり開いて、そばに来た人は深く大切にする",
      'zh-CN': "心开得很慢，一旦走近，就会很珍惜",
      'zh-TW': "心開得很慢，一旦走近，就會很珍惜",
      vi: "Bạn mở lòng chậm, và khi ai đó đến gần thì bạn quý rất sâu",
      id: "Kamu membuka hati pelan, dan begitu seseorang dekat, kamu menjaganya dalam-dalam",
    }),
    cardPhrase: L({
      ko: "천천히 알아 가는 사람이에요",
      en: "I'm someone you get to know slowly",
      ja: "ゆっくり知っていく人です",
      'zh-CN': "我是需要慢慢认识的人",
      'zh-TW': "我是需要慢慢認識的人",
      vi: "Tôi là người cần thời gian để hiểu",
      id: "Aku orang yang perlu dikenali pelan-pelan",
    }),
    oneLiner: L({
      ko: "여유는 큰 매력입니다. 작은 신호 하나가 마음을 이어 줍니다",
      en: "Taking your time is a real charm. One small signal is enough to connect",
      ja: "余裕は大きな魅力です。小さな合図ひとつで、気持ちはつながります",
      'zh-CN': "这份从容很有魅力。一个小小的信号，就能把心连上",
      'zh-TW': "這份從容很有魅力。一個小小的信號，就能把心連上",
      vi: "Sự thong thả là một sức hút. Một tín hiệu nhỏ cũng đủ để nối lòng",
      id: "Ketenangan itu daya tarik besar. Satu isyarat kecil sudah cukup untuk menyambungkan hati",
    }),
    shareLine: L({
      ko: "얼굴로 보는 내 첫인상 키워드 3가지: 1위 신비로운 🌙 더 알고 싶어지는 첫인상이래... 너는 뭐 나와? 결과 비교해보자",
      en: "3 first-impression keywords from my face: #1 Mysterious 🌙 People want to know more. What do you get? Let's compare",
      ja: "顔で見る第一印象キーワード3つ：1位はミステリアス 🌙 もっと知りたくなる第一印象だって。あなたは何が出る？結果を比べよう",
      'zh-CN': "从脸看我的第一印象关键词：第一名是神秘 🌙 说看了还想再了解我。你呢？来对一下结果",
      'zh-TW': "從臉看我的第一印象關鍵詞：第一名是神祕 🌙 說看了還想再了解我。你呢？來對一下結果",
      vi: "3 từ khóa ấn tượng đầu tiên: hạng 1 là Bí ẩn 🌙 Bảo nhìn mình xong muốn biết thêm. Còn bạn? So kết quả nào",
      id: "3 kata kunci kesan pertama: nomor 1 Misterius 🌙 Katanya orang jadi ingin tahu lebih banyak. Kamu dapat apa? Yuk bandingkan",
    }),
  },
];

const KEYWORD_BY_ID = new Map(PHASE3_FACE_FIRST_IMPRESSION_KEYWORDS.map((item) => [item.id, item]));

export function getPhase3FaceFirstImpressionKeyword(id: number): Phase3FaceFirstImpressionKeyword {
  const found = KEYWORD_BY_ID.get(id);
  if (!found) throw new Error(`unknown keyword id ${id}`);
  return found;
}

export const PHASE3_FACE_FIRST_IMPRESSION_THRESHOLDS = { S: 0.3, E: 0.28, R: 0.84 } as const;

/** 보정 세트 표준편차가 생기기 전의 시작값. S는 0~1, E·R은 더 좁다. */
export const PHASE3_FACE_FIRST_IMPRESSION_SIGMA = { S: 0.15, E: 0.05, R: 0.06 } as const;

export type Phase3FaceAxis = 'S' | 'E' | 'R';

const AXIS_ORDER: Phase3FaceAxis[] = ['S', 'E', 'R'];

export interface Phase3FaceMetrics {
  S: number;
  E: number;
  R: number;
}

export interface Phase3FaceFirstImpressionResult {
  primaryId: number;
  alsoIds: [number, number];
  code: string;
  metrics: Phase3FaceMetrics;
}

function isHigh(axis: Phase3FaceAxis, value: number): boolean {
  return value >= PHASE3_FACE_FIRST_IMPRESSION_THRESHOLDS[axis];
}

/** S/E/R 높낮이 → 키워드 번호 1~8 */
export function phase3FaceKeywordId(sHigh: boolean, eHigh: boolean, rHigh: boolean): number {
  if (sHigh && eHigh && rHigh) return 1;
  if (sHigh && eHigh && !rHigh) return 2;
  if (sHigh && !eHigh && rHigh) return 3;
  if (sHigh && !eHigh && !rHigh) return 4;
  if (!sHigh && eHigh && rHigh) return 5;
  if (!sHigh && eHigh && !rHigh) return 6;
  if (!sHigh && !eHigh && rHigh) return 7;
  return 8;
}

export function classifyPhase3FaceFirstImpression(metrics: Phase3FaceMetrics): Phase3FaceFirstImpressionResult {
  const flags: Record<Phase3FaceAxis, boolean> = {
    S: isHigh('S', metrics.S),
    E: isHigh('E', metrics.E),
    R: isHigh('R', metrics.R),
  };
  const distance = (axis: Phase3FaceAxis) =>
    Math.abs(metrics[axis] - PHASE3_FACE_FIRST_IMPRESSION_THRESHOLDS[axis]) / PHASE3_FACE_FIRST_IMPRESSION_SIGMA[axis];
  const ranked = [...AXIS_ORDER].sort((a, b) => distance(a) - distance(b) || AXIS_ORDER.indexOf(a) - AXIS_ORDER.indexOf(b));
  const flip = (axis: Phase3FaceAxis) => phase3FaceKeywordId(
    axis === 'S' ? !flags.S : flags.S,
    axis === 'E' ? !flags.E : flags.E,
    axis === 'R' ? !flags.R : flags.R,
  );
  const primaryId = phase3FaceKeywordId(flags.S, flags.E, flags.R);
  const secondId = flip(ranked[0]);
  const thirdId = flip(ranked[1]);
  return {
    primaryId,
    alsoIds: [secondId, thirdId],
    code: `${primaryId}-${secondId}-${thirdId}`,
    metrics,
  };
}

export function averagePhase3FaceMetrics(list: Phase3FaceMetrics[]): Phase3FaceMetrics {
  const n = list.length || 1;
  return {
    S: list.reduce((sum, item) => sum + item.S, 0) / n,
    E: list.reduce((sum, item) => sum + item.E, 0) / n,
    R: list.reduce((sum, item) => sum + item.R, 0) / n,
  };
}

export type Phase3FaceLandmark = { x: number; y: number; z?: number };
export type Phase3FaceBlend = { categoryName?: string; score?: number };
export type Phase3FaceQualityCode = 'none' | 'count' | 'yaw' | 'eyes' | 'occluded' | 'resolution';

export type Phase3FaceFrameMeasure =
  | { ok: true; metrics: Phase3FaceMetrics }
  | { ok: false; code: Phase3FaceQualityCode };

function blendScore(blends: Phase3FaceBlend[], name: string): number | null {
  const found = blends.find((item) => (item.categoryName || '').toLowerCase() === name.toLowerCase());
  if (!found || typeof found.score !== 'number' || Number.isNaN(found.score)) return null;
  return found.score;
}

function dist(a: Phase3FaceLandmark, b: Phase3FaceLandmark): number {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function eyeAspect(lm: Phase3FaceLandmark[], outer: number, inner: number, upA: number, upB: number, loA: number, loB: number): number | null {
  const points = [outer, inner, upA, upB, loA, loB];
  if (points.some((index) => !lm[index])) return null;
  const horizontal = dist(lm[outer], lm[inner]);
  if (horizontal < 1e-6) return null;
  return (dist(lm[upA], lm[loA]) + dist(lm[upB], lm[loB])) / (2 * horizontal);
}

/** 열 우선 4x4에서 좌우 회전(도). 행렬이 없으면 코와 양 볼의 어긋남으로 추정한다. */
export function phase3FaceYawDegrees(lm: Phase3FaceLandmark[], matrix?: ArrayLike<number> | null): number | null {
  if (matrix && matrix.length >= 16) {
    const r02 = Number(matrix[8]);
    const r22 = Number(matrix[10]);
    if (Number.isFinite(r02) && Number.isFinite(r22)) {
      return (Math.atan2(r02, r22) * 180) / Math.PI;
    }
  }
  const left = lm[234];
  const right = lm[454];
  const nose = lm[1];
  if (!left || !right || !nose) return null;
  const half = Math.abs(right.x - left.x) / 2;
  if (half < 1e-6) return null;
  const offset = (nose.x - (left.x + right.x) / 2) / half;
  const clamped = Math.max(-1, Math.min(1, offset));
  return (Math.asin(clamped) * 180) / Math.PI;
}

export function measurePhase3FaceFrame(input: {
  faceCount: number;
  landmarks: Phase3FaceLandmark[] | null | undefined;
  blendshapes: Phase3FaceBlend[] | null | undefined;
  imageWidth: number;
  matrix?: ArrayLike<number> | null;
}): Phase3FaceFrameMeasure {
  if (input.faceCount === 0) return { ok: false, code: 'none' };
  if (input.faceCount !== 1) return { ok: false, code: 'count' };
  const lm = input.landmarks;
  if (!lm || lm.length < 468) return { ok: false, code: 'occluded' };
  const yaw = phase3FaceYawDegrees(lm, input.matrix);
  if (yaw == null || Math.abs(yaw) > 15) return { ok: false, code: 'yaw' };
  const blends = input.blendshapes || [];
  const blinkL = blendScore(blends, 'eyeBlinkLeft');
  const blinkR = blendScore(blends, 'eyeBlinkRight');
  if (blinkL == null || blinkR == null) return { ok: false, code: 'occluded' };
  if ((blinkL + blinkR) / 2 >= 0.5) return { ok: false, code: 'eyes' };
  const smileL = blendScore(blends, 'mouthSmileLeft');
  const smileR = blendScore(blends, 'mouthSmileRight');
  if (smileL == null || smileR == null) return { ok: false, code: 'occluded' };
  const leftEar = eyeAspect(lm, 33, 133, 159, 158, 145, 153);
  const rightEar = eyeAspect(lm, 263, 362, 386, 385, 374, 380);
  if (leftEar == null || rightEar == null || !lm[234] || !lm[454] || !lm[10] || !lm[152]) {
    return { ok: false, code: 'occluded' };
  }
  const faceWidthPx = Math.abs(lm[454].x - lm[234].x) * input.imageWidth;
  if (!Number.isFinite(faceWidthPx) || faceWidthPx < 160) return { ok: false, code: 'resolution' };
  const height = dist(lm[10], lm[152]);
  if (height < 1e-6) return { ok: false, code: 'occluded' };
  return {
    ok: true,
    metrics: {
      S: (smileL + smileR) / 2,
      E: (leftEar + rightEar) / 2,
      R: dist(lm[234], lm[454]) / height,
    },
  };
}

/** 친구 코드 3개. `3-4-1`, `3 4 1`, 공유 링크의 kw= 를 받는다. */
export function parsePhase3FaceFriendCode(raw: string): [number, number, number] | null {
  const trimmed = raw.trim();
  if (!trimmed) return null;
  const query = trimmed.match(/[?&]kw=([^&#\s]+)/i);
  const body = query ? decodeURIComponent(query[1]) : trimmed;
  const nums = body.split(/[^0-9]+/).filter(Boolean).map((part) => Number(part));
  if (nums.length !== 3 || nums.some((n) => !Number.isInteger(n) || n < 1 || n > 8)) return null;
  return [nums[0], nums[1], nums[2]];
}

export function overlapPhase3FaceKeywordIds(mine: number[], theirs: number[]): number[] {
  const theirsSet = new Set(theirs);
  const seen = new Set<number>();
  const overlap: number[] = [];
  for (const id of mine) {
    if (theirsSet.has(id) && !seen.has(id)) {
      seen.add(id);
      overlap.push(id);
    }
  }
  return overlap;
}
