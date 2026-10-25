/**
 * 얼굴로 보는 나의 매력 포인트 TOP — phase3-face-charm-point
 * S 미소, E 눈 개방(EAR), R 얼굴 너비/높이.
 * 기획서에 8칸 분류표가 없어, 각 매력의 'AI가 읽은 인상'으로 칸을 고정했다.
 * 밝고 또렷·활짝·편안·은은한 미소 = S 높음, 담백 = S 낮음.
 * 또렷한 눈매 = E 높음, 차분·느긋한 눈매 = E 낮음.
 * 포근한 비율 = R 높음, 갸름한 윤곽 = R 낮음.
 * 임계값 ±0.02 안의 축이 있으면 그 축만 뒤집어 '함께 보이는 매력'으로 보여 준다.
 */

import {
  averagePhase3FaceMetrics,
  measurePhase3FaceFrame,
  type Phase3FaceMetrics,
  type Phase3FaceQualityCode,
} from '@/lib/phase3FaceFirstImpressionData';

export { averagePhase3FaceMetrics, measurePhase3FaceFrame };
export type { Phase3FaceMetrics, Phase3FaceQualityCode };

export type Phase3FaceCharmLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';
export type Phase3FaceCharmText = Record<Phase3FaceCharmLocaleKey, string>;

function T(ko: string, en: string, ja: string, zhCN: string, zhTW: string, vi: string, id: string): Phase3FaceCharmText {
  return { ko, en, ja, 'zh-CN': zhCN, 'zh-TW': zhTW, vi, id };
}

export function faceCharmText(text: Phase3FaceCharmText, locale: string): string {
  const loc = locale as Phase3FaceCharmLocaleKey;
  return text[loc] || text.ko;
}

export interface Phase3FaceCharm {
  id: number;
  emoji: string;
  name: Phase3FaceCharmText;
  aiRead: Phase3FaceCharmText;
  quote: Phase3FaceCharmText;
  keywords: Phase3FaceCharmText;
  shine: Phase3FaceCharmText;
  love: Phase3FaceCharmText;
  tip: Phase3FaceCharmText;
  cardPhrase: Phase3FaceCharmText;
  oneLiner: Phase3FaceCharmText;
  shareLine: Phase3FaceCharmText;
  pairLeft: Phase3FaceCharmText;
  pairRight: Phase3FaceCharmText;
  samePair: Phase3FaceCharmText;
}

export const phase3FaceCharms: Phase3FaceCharm[] = [
  {
    id: 1,
    emoji: '😊',
    name: T("미소", "Smile", "微笑み", "微笑", "微笑", "Nụ cười", "Senyum"),
    aiRead: T("밝고 또렷한 표정에 포근한 얼굴 비율", "A bright, clear expression and a soft face shape", "明るくはっきりした表情と、やわらかい顔立ち", "表情明亮清楚，脸型偏圆润", "表情明亮清楚，臉型偏圓潤", "Nét mặt sáng, rõ, khuôn mặt tròn mềm", "Ekspresi cerah dan tegas, bentuk wajah yang lembut"),
    quote: T("당신의 가장 큰 매력은 보는 사람 기분까지 밝히는 미소 분위기예요.", "Your standout charm is a smile that lifts the mood of whoever is looking.", "いちばんの魅力は、見ている人の気分まで明るくする微笑みです。", "你最亮的魅力，是能把看的人的心情也点亮的微笑。", "你最亮的魅力，是能把看的人的心情也點亮的微笑。", "Điểm hút nhất của bạn là nụ cười làm vui cả người đang nhìn.", "Daya tarik paling terasa darimu adalah senyum yang ikut mencerahkan suasana orang yang melihat."),
    keywords: T("반가움·친화력·따뜻한 첫인사", "Warm hello·easy to approach·a kind first greeting", "親しさ・話しかけやすさ・あたたかい挨拶", "亲切·好接近·温暖的第一句", "親切·好接近·溫暖的第一句", "Niềm nở·dễ gần·lời chào ấm", "Rasa senang·mudah didekati·salam yang hangat"),
    shine: T("처음 만난 자리, 어색한 분위기를 풀 때", "A first meeting, or when the air feels awkward", "初対面の場、気まずい空気をほどくとき", "第一次见面，或气氛有点尴尬的时候", "第一次見面，或氣氛有點尷尬的時候", "Lần gặp đầu, hoặc khi không khí đang ngượng", "Pertemuan pertama, atau saat suasana masih canggung"),
    love: T("호감을 솔직하게 표현해 상대가 편안함을 느낌", "You show interest plainly, and the other person feels at ease", "好意をまっすぐ出して、相手がほっとする", "好感说得很直接，对方会觉得放松", "好感說得很直接，對方會覺得放鬆", "Bạn tỏ thiện cảm thẳng, người kia thấy dễ chịu", "Kamu menunjukkan rasa suka dengan jujur, dan lawan bicara jadi nyaman"),
    tip: T("진지한 순간엔 미소 뒤에 진심 한 줄 덧붙이기", "In a serious moment, add one honest line behind the smile", "まじめな場面では、微笑みのあとに本音を一行足して", "认真的时候，在微笑后面补一句真心话", "認真的時候，在微笑後面補一句真心話", "Lúc chuyện nghiêm, thêm một câu thật lòng sau nụ cười", "Saat suasana serius, tambahkan satu kalimat jujur di balik senyum"),
    cardPhrase: T("반가움이 제일 먼저 나와요", "Warmth shows up first", "親しさが、いちばん先に出ます", "亲切最先露出来", "親切最先露出來", "Niềm nở hiện ra trước nhất", "Rasa senang yang muncul lebih dulu"),
    oneLiner: T("미소는 가장 빠른 인사입니다. 오늘도 마음껏 웃어 보세요", "A smile is the fastest hello. Laugh as much as you want today.", "微笑みはいちばん速い挨拶です。今日も思いきり笑ってみて。", "微笑是最快的招呼。今天也尽情笑吧。", "微笑是最快的招呼。今天也盡情笑吧。", "Nụ cười là lời chào nhanh nhất. Hôm nay cứ cười thoải mái.", "Senyum adalah sapaan yang paling cepat. Hari ini tersenyumlah sepuasnya."),
    shareLine: T("얼굴로 보는 나의 매력 포인트: 미소 😊 AI가 사진 한 장으로 찾았대ㅋㅋ 너는 뭐 나와? 커플 카드도 만들어봐", "The charm that stands out on my face: Smile 😊 AI found it in one photo. What is yours? Make a couple card too", "顔から見える私の魅力: 微笑み 😊 写真一枚で見つかったって。あなたは？ カップルカードも作ってみて", "脸上最亮的魅力点: 微笑 😊 说一张照片就找到了。你是哪种？ 也做一张双人卡吧", "臉上最亮的魅力點: 微笑 😊 說一張照片就找到了。你是哪種？ 也做一張雙人卡吧", "Điểm cuốn hút trên mặt tôi: Nụ cười 😊 AI tìm ra từ một tấm ảnh. Còn bạn? Làm thẻ đôi nữa nha", "Daya tarik yang paling terasa di wajahku: Senyum 😊 AI menemukannya dari satu foto. Kamu yang mana? Bikin kartu berdua juga"),
    pairLeft: T("웃음과", "laughter", "笑い", "笑声", "笑聲", "tiếng cười", "tawa"),
    pairRight: T("웃음이", "laughter", "笑い", "笑声", "笑聲", "tiếng cười", "tawa"),
    samePair: T("같은 미소가 두 배로 겹치는 조합", "Two smiles, twice over", "同じ微笑みが二重に重なる組み合わせ", "同样的微笑叠成双倍", "同樣的微笑疊成雙倍", "Hai nụ cười chồng lên nhau", "Senyum yang sama, dua kali lipat"),
  },
  {
    id: 2,
    emoji: '🎭',
    name: T("표정", "Expression", "表情", "表情", "表情", "Biểu cảm", "Ekspresi"),
    aiRead: T("활짝 웃는 표정에 또렷한 눈매와 갸름한 윤곽", "A wide smile, clear eyes, and a slim outline", "満面の笑み、はっきりした目もと、すっきりした輪郭", "笑容开朗，眼睛清楚，轮廓偏瘦长", "笑容開朗，眼睛清楚，輪廓偏瘦長", "Cười rộng, mắt rõ, đường nét thon", "Senyum lebar, mata yang tegas, garis wajah yang ramping"),
    quote: T("당신의 가장 큰 매력은 마음이 그대로 전해지는 풍부한 표정 분위기예요.", "Your standout charm is an expressive face that lets people feel what you feel.", "いちばんの魅力は、気持ちがそのまま届く豊かな表情です。", "你最亮的魅力，是心情会原样传过去的丰富表情。", "你最亮的魅力，是心情會原樣傳過去的豐富表情。", "Điểm hút nhất của bạn là biểu cảm giàu, cảm xúc đi thẳng sang người kia.", "Daya tarik paling terasa darimu adalah ekspresi yang membuat perasaanmu langsung terasa."),
    keywords: T("생기·투명함·감정 전달력", "Liveliness·openness·feelings that come through", "活気・まっすぐさ・気持ちの伝わりやすさ", "有生气·坦率·情绪传得过去", "有生氣·坦率·情緒傳得過去", "Sức sống·rõ ràng·cảm xúc truyền được", "Sema·terbuka·perasaan yang sampai"),
    shine: T("이야기를 나누며 반응할 때", "When you react while talking", "話を聞いて反応しているとき", "聊天时有回应的时候", "聊天時有回應的時候", "Khi bạn phản ứng trong lúc trò chuyện", "Saat kamu menanggapi sambil mengobrol"),
    love: T("말보다 표정이 먼저 마음을 알려 줌", "Your face tells people how you feel before the words do", "言葉より先に、表情が気持ちを知らせる", "话还没到，表情先把心意说了", "話還沒到，表情先把心意說了", "Biểu cảm báo tâm trạng trước cả lời nói", "Ekspresi memberitahu isi hati sebelum kata-kata"),
    tip: T("속상한 날도 표정과 함께 말로 한 줄 전하기", "On a hard day, say one line along with the look on your face", "しんどい日も、表情といっしょに言葉で一行伝えて", "难受的日子，也用一句话把表情说清楚", "難受的日子，也用一句話把表情說清楚", "Ngày buồn cũng nói thêm một câu cùng với vẻ mặt", "Di hari yang berat, sampaikan satu kalimat bersama ekspresimu"),
    cardPhrase: T("표정이 제 마음의 통역사예요", "My face translates my heart", "表情が、私の心の通訳です", "表情是我心情的翻译", "表情是我心情的翻譯", "Biểu cảm là thông dịch viên của lòng mình", "Ekspresi adalah penerjemah hatiku"),
    oneLiner: T("투명한 표정은 큰 장점입니다. 말 한 줄이 더해지면 더 잘 닿습니다", "An open face is a real gift. One spoken line helps it land.", "素直な表情は大きな長所です。言葉が一行足されると、もっと届きます。", "坦率的表情是很大的优点。再补一句话，会更到对方心里。", "坦率的表情是很大的優點。再補一句話，會更到對方心裡。", "Vẻ mặt rõ là lợi thế lớn. Thêm một câu nói thì chạm hơn.", "Wajah yang terbuka itu kelebihan besar. Satu kalimat membuatnya lebih sampai."),
    shareLine: T("얼굴로 보는 나의 매력 포인트: 표정 🎭 마음이 그대로 전해지는 표정이래ㅎㅎ 너는 뭐 나와? 커플 카드도 만들어봐", "The charm that stands out on my face: Expression 🎭 They say my feelings show right on my face. What is yours? Make a couple card too", "顔から見える私の魅力: 表情 🎭 気持ちがそのまま届く表情だって。あなたは？ カップルカードも作ってみて", "脸上最亮的魅力点: 表情 🎭 说心情会原样写在脸上。你是哪种？ 也做一张双人卡吧", "臉上最亮的魅力點: 表情 🎭 說心情會原樣寫在臉上。你是哪種？ 也做一張雙人卡吧", "Điểm cuốn hút trên mặt tôi: Biểu cảm 🎭 Bảo cảm xúc hiện nguyên trên mặt. Còn bạn? Làm thẻ đôi nữa nha", "Daya tarik yang paling terasa di wajahku: Ekspresi 🎭 Katanya perasaanku langsung kebaca. Kamu yang mana? Bikin kartu berdua juga"),
    pairLeft: T("마음과", "feeling", "気持ち", "心意", "心意", "cảm xúc", "rasa"),
    pairRight: T("마음이", "feeling", "気持ち", "心意", "心意", "cảm xúc", "rasa"),
    samePair: T("같은 표정이 두 배로 겹치는 조합", "Two expressive faces, twice over", "同じ表情が二重に重なる組み合わせ", "同样的表情叠成双倍", "同樣的表情疊成雙倍", "Hai vẻ mặt giàu cảm xúc chồng lên nhau", "Ekspresi yang sama, dua kali lipat"),
  },
  {
    id: 3,
    emoji: '🎧',
    name: T("목소리 인상", "Warm voice", "声の印象", "声音印象", "聲音印象", "Ấn tượng giọng nói", "Kesan suara"),
    aiRead: T("편안한 미소에 차분한 눈매와 포근한 얼굴 비율", "An easy smile, calm eyes, and a soft face shape", "やわらかい笑み、落ち着いた目もと、丸みのある顔立ち", "笑容放松，眼神平静，脸型圆润", "笑容放鬆，眼神平靜，臉型圓潤", "Nụ cười thoải mái, mắt điềm, khuôn mặt mềm", "Senyum yang santai, mata yang tenang, bentuk wajah yang lembut"),
    quote: T("당신의 가장 큰 매력은 말을 걸면 편안할 것 같은 '목소리 인상'이에요. (사진으로 목소리를 듣는 것은 아니며 분위기로 풀이한 키워드예요)", "Your standout charm is the feeling that talking to you would be easy. This is a mood keyword. The photo does not hear a voice.", "いちばんの魅力は、話しかけると楽そうな「声の印象」です。（写真から声を聞いているわけではなく、雰囲気で読んだキーワードです）", "你最亮的魅力，是让人觉得一开口就会很舒服的「声音印象」。（并没有从照片里听声音，这是按氛围读出的关键词）", "你最亮的魅力，是讓人覺得一開口就會很舒服的「聲音印象」。（並沒有從照片裡聽聲音，這是按氛圍讀出的關鍵詞）", "Điểm hút nhất của bạn là cảm giác rằng nói chuyện với bạn sẽ dễ chịu. Đây là từ khóa theo không khí. Ảnh không nghe được giọng nói.", "Daya tarik paling terasa darimu adalah kesan bahwa mengajakmu bicara akan terasa mudah. Ini kata berdasarkan suasana. Fotonya tidak mendengar suara."),
    keywords: T("다정한 말투·안정감·경청", "A gentle way of speaking·a steady feeling·listening", "やさしい話し方・安心感・聞く力", "温柔的口气·安定感·会听", "溫柔的口氣·安定感·會聽", "Cách nói dịu·cảm giác vững·biết lắng nghe", "Cara bicara yang lembut·rasa tenang·mau mendengar"),
    shine: T("누군가의 이야기를 들어 줄 때", "When you listen to someone", "誰かの話を聞いているとき", "听别人说话的时候", "聽別人說話的時候", "Khi bạn lắng nghe một người", "Saat kamu mendengarkan seseorang"),
    love: T("차분히 들어 주고 따뜻한 한마디를 건넴", "You listen calmly and offer one warm line", "落ち着いて聞いて、あたたかい一言を添える", "安安静静听完，再送一句暖话", "安安靜靜聽完，再送一句暖話", "Bạn nghe điềm tĩnh rồi nói một câu ấm", "Kamu mendengarkan dengan tenang, lalu memberi satu kalimat yang hangat"),
    tip: T("내 이야기도 상대에게 같은 온도로 꺼내 보기", "Try offering your own story at the same temperature", "自分の話も、同じ温度で相手に出してみて", "自己的事，也用同样的温度说给对方", "自己的事，也用同樣的溫度說給對方", "Chuyện của mình cũng kể cho họ với cùng độ ấm đó", "Ceritamu sendiri juga coba dikeluarkan dengan suhu yang sama"),
    cardPhrase: T("들어 주는 사람이라는 인상이 있어요", "I come across as someone who listens", "聞いてくれる人、という印象があります", "给人一种会听的感觉", "給人一種會聽的感覺", "Mình để lại ấn tượng là người biết nghe", "Aku terkesan sebagai orang yang mau mendengar"),
    oneLiner: T("경청은 오래 가는 매력입니다. 내 이야기도 나눠 보세요", "Listening lasts. Share some of your own story too.", "聞く力は長く残る魅力です。自分の話も分けてみて。", "会听是留很久的魅力。你的事也分一点出去吧。", "會聽是留很久的魅力。你的事也分一點出去吧。", "Biết nghe là điểm hút để lâu. Chuyện của bạn cũng chia một chút.", "Mau mendengar itu daya tarik yang bertahan. Bagikan juga ceritamu."),
    shareLine: T("얼굴로 보는 나의 매력 포인트: 목소리 인상 🎧 편안하게 말 걸고 싶은 인상이래ㅎㅎ 너는 뭐 나와? 커플 카드도 만들어봐", "The charm that stands out on my face: Warm voice 🎧 They say I look easy to talk to. What is yours? Make a couple card too", "顔から見える私の魅力: 声の印象 🎧 安心して話しかけたくなる印象だって。あなたは？ カップルカードも作ってみて", "脸上最亮的魅力点: 声音印象 🎧 说让人想轻松开口。你是哪种？ 也做一张双人卡吧", "臉上最亮的魅力點: 聲音印象 🎧 說讓人想輕鬆開口。你是哪種？ 也做一張雙人卡吧", "Điểm cuốn hút trên mặt tôi: Ấn tượng giọng nói 🎧 Bảo trông dễ bắt chuyện. Còn bạn? Làm thẻ đôi nữa nha", "Daya tarik yang paling terasa di wajahku: Kesan suara 🎧 Katanya enak diajak bicara. Kamu yang mana? Bikin kartu berdua juga"),
    pairLeft: T("다정함과", "warmth", "やさしさ", "温柔", "溫柔", "sự dịu dàng", "kelembutan"),
    pairRight: T("다정함이", "warmth", "やさしさ", "温柔", "溫柔", "sự dịu dàng", "kelembutan"),
    samePair: T("같은 목소리 인상이 두 배로 겹치는 조합", "Two warm voices, twice over", "同じ声の印象が二重に重なる組み合わせ", "同样的声音印象叠成双倍", "同樣的聲音印象疊成雙倍", "Hai ấn tượng giọng nói chồng lên nhau", "Kesan suara yang sama, dua kali lipat"),
  },
  {
    id: 4,
    emoji: '🌸',
    name: T("분위기", "Mood", "雰囲気", "氛围", "氛圍", "Không khí", "Suasana"),
    aiRead: T("은은한 미소에 느긋한 눈매와 갸름한 윤곽", "A quiet smile, unhurried eyes, and a slim outline", "控えめな笑み、ゆったりした目もと、すっきりした輪郭", "笑容淡淡的，眼神不急，轮廓偏瘦长", "笑容淡淡的，眼神不急，輪廓偏瘦長", "Nụ cười nhẹ, mắt thong thả, đường nét thon", "Senyum yang samar, mata yang santai, garis wajah yang ramping"),
    quote: T("당신의 가장 큰 매력은 곁에 있으면 잔잔하게 번지는 분위기예요.", "Your standout charm is a mood that spreads quietly when someone is near you.", "いちばんの魅力は、そばにいると静かに広がる雰囲気です。", "你最亮的魅力，是人在旁边就会慢慢漾开的氛围。", "你最亮的魅力，是人在旁邊就會慢慢漾開的氛圍。", "Điểm hút nhất của bạn là không khí lan nhẹ khi có người ở cạnh.", "Daya tarik paling terasa darimu adalah suasana yang pelan-pelan menyebar saat seseorang ada di dekatmu."),
    keywords: T("섬세함·여운·고요한 감성", "Fineness·an aftertaste·a quiet feeling", "繊細さ・余韻・静かな感性", "细腻·余味·安静的感觉", "細膩·餘味·安靜的感覺", "Tinh tế·dư vị·cảm giác yên", "Halus·rasa yang tertinggal·perasaan yang tenang"),
    shine: T("조용한 공간, 단둘이 대화할 때", "A quiet place, when it is just the two of you", "静かな場所で、二人きりで話すとき", "安静的地方，两个人说话的时候", "安靜的地方，兩個人說話的時候", "Chỗ yên, khi chỉ có hai người nói chuyện", "Tempat yang sunyi, saat hanya berdua yang bicara"),
    love: T("천천히 마음을 키우고 진심을 오래 간직함", "You let feelings grow slowly and keep the real ones for a long time", "ゆっくり気持ちを育てて、本音を長く持つ", "慢慢把心意养大，真心留得很久", "慢慢把心意養大，真心留得很久", "Bạn nuôi cảm xúc từ từ và giữ lòng thật rất lâu", "Kamu menumbuhkan rasa pelan-pelan dan menyimpan ketulusan cukup lama"),
    tip: T("마음을 한 줄씩 말로 꺼내 보기", "Try saying how you feel, one line at a time", "気持ちを、一行ずつ言葉にしてみて", "心意试着一句一句说出来", "心意試著一句一句說出來", "Thử nói cảm xúc, mỗi lần một câu", "Coba keluarkan isi hati, satu kalimat setiap kali"),
    cardPhrase: T("조용히 스며드는 사람이에요", "I get under the skin quietly", "静かに染みていく人です", "是会悄悄渗进去的人", "是會悄悄滲進去的人", "Mình thấm vào người ta một cách lặng", "Aku masuk pelan-pelan"),
    oneLiner: T("잔잔한 분위기는 큰 매력입니다. 마음의 표현도 한 줄 더해 보세요", "A quiet mood is a real draw. Add one line about how you feel.", "静かな雰囲気は大きな魅力です。気持ちも一行足してみて。", "安静的氛围很加分。心情也补一句吧。", "安靜的氛圍很加分。心情也補一句吧。", "Không khí dịu là điểm hút lớn. Thêm một câu về lòng mình.", "Suasana yang tenang itu daya tarik besar. Tambahkan satu kalimat tentang perasaanmu."),
    shareLine: T("얼굴로 보는 나의 매력 포인트: 분위기 🌸 잔잔하게 스며드는 분위기래... 너는 뭐 나와? 커플 카드도 만들어봐", "The charm that stands out on my face: Mood 🌸 They say I settle in quietly. What is yours? Make a couple card too", "顔から見える私の魅力: 雰囲気 🌸 静かに染みていく雰囲気だって。あなたは？ カップルカードも作ってみて", "脸上最亮的魅力点: 氛围 🌸 说是会慢慢渗进去的感觉。你是哪种？ 也做一张双人卡吧", "臉上最亮的魅力點: 氛圍 🌸 說是會慢慢滲進去的感覺。你是哪種？ 也做一張雙人卡吧", "Điểm cuốn hút trên mặt tôi: Không khí 🌸 Bảo thấm vào người ta rất nhẹ. Còn bạn? Làm thẻ đôi nữa nha", "Daya tarik yang paling terasa di wajahku: Suasana 🌸 Katanya meresap pelan-pelan. Kamu yang mana? Bikin kartu berdua juga"),
    pairLeft: T("여운과", "aftertaste", "余韻", "余味", "餘味", "dư vị", "rasa yang tertinggal"),
    pairRight: T("여운이", "aftertaste", "余韻", "余味", "餘味", "dư vị", "rasa yang tertinggal"),
    samePair: T("같은 분위기가 두 배로 겹치는 조합", "Two quiet moods, twice over", "同じ雰囲気が二重に重なる組み合わせ", "同样的氛围叠成双倍", "同樣的氛圍疊成雙倍", "Hai không khí dịu chồng lên nhau", "Suasana yang sama, dua kali lipat"),
  },
  {
    id: 5,
    emoji: '🌗',
    name: T("옆모습", "Solid outline", "横顔の印象", "侧颜印象", "側顏印象", "Đường nét chắc", "Garis wajah yang kokoh"),
    aiRead: T("담백한 표정에 또렷한 눈매와 포근한 얼굴 비율", "An understated expression, clear eyes, and a soft face shape", "あっさりした表情、はっきりした目もと、丸みのある顔立ち", "表情淡然，眼睛清楚，脸型圆润", "表情淡然，眼睛清楚，臉型圓潤", "Nét mặt giản dị, mắt rõ, khuôn mặt mềm", "Ekspresi yang sederhana, mata yang tegas, bentuk wajah yang lembut"),
    quote: T("당신의 가장 큰 매력은 정면에서도 느껴지는 입체적이고 단단한 윤곽 분위기예요. (옆모습을 직접 분석하는 것은 아니며 분위기로 풀이한 키워드예요)", "Your standout charm is a solid, dimensional outline you can feel even from the front. This is a mood keyword. It does not analyze a side view.", "いちばんの魅力は、正面からでも感じる立体的でしっかりした輪郭の雰囲気です。（横顔を直接見ているわけではなく、雰囲気で読んだキーワードです）", "你最亮的魅力，是正面也能感到的立体、稳的轮廓氛围。（并没有直接分析侧脸，这是按氛围读出的关键词）", "你最亮的魅力，是正面也能感到的立體、穩的輪廓氛圍。（並沒有直接分析側臉，這是按氛圍讀出的關鍵詞）", "Điểm hút nhất của bạn là đường nét chắc, có khối, cảm được cả khi nhìn thẳng. Đây là từ khóa theo không khí, không phải phân tích góc nghiêng.", "Daya tarik paling terasa darimu adalah kesan garis wajah yang kokoh dan berdimensi, terasa bahkan dari depan. Ini kata berdasarkan suasana, bukan analisis sisi wajah."),
    keywords: T("단단함·존재감·곧은 중심", "Steadiness·presence·a straight center", "芯の強さ・存在感・まっすぐな軸", "稳·存在感·中心很正", "穩·存在感·中心很正", "Chắc·có mặt·trục thẳng", "Kukuh·kehadiran·pusat yang lurus"),
    shine: T("결정해야 할 때, 중심을 잡아야 할 때", "When a decision is needed, or someone has to hold the center", "決めなければならないとき、軸を保つとき", "要做决定、或需要有人稳住的时候", "要做決定、或需要有人穩住的時候", "Khi phải quyết, hoặc khi cần một người giữ nhịp", "Saat harus memutuskan, atau saat perlu ada yang menahan pusat"),
    love: T("겉은 담백해도 소중한 사람은 끝까지 지킴", "You look plain, and you stay with the people who matter", "見た目はあっさりでも、大切な人は最後まで守る", "看着淡，重要的人会守到最后", "看著淡，重要的人會守到最後", "Bên ngoài giản, người quan trọng thì giữ đến cùng", "Kelihatannya sederhana, tapi orang yang berarti dijaga sampai akhir"),
    tip: T("부드러운 한마디를 습관처럼 더하기", "Make one soft sentence a habit", "やさしい一言を、習慣のように足して", "把一句软话养成习惯", "把一句軟話養成習慣", "Thêm một câu mềm như một thói quen", "Jadikan satu kalimat lembut sebagai kebiasaan"),
    cardPhrase: T("중심이 단단한 사람이에요", "My center holds", "軸がしっかりしている人です", "是中心很稳的人", "是中心很穩的人", "Mình là người giữ được trục", "Pusatku cukup kokoh"),
    oneLiner: T("단단한 존재감은 큰 힘입니다. 따뜻한 한마디가 더해지면 완벽합니다", "A solid presence is real strength. One warm line completes it.", "しっかりした存在感は大きな力です。あたたかい一言が足されると、整います。", "稳的存在感是很大的力量。再加一句暖话就完整了。", "穩的存在感是很大的力量。再加一句暖話就完整了。", "Sự hiện diện chắc là sức mạnh. Thêm một câu ấm là đủ.", "Kehadiran yang kokoh itu kekuatan. Satu kalimat hangat membuatnya lengkap."),
    shareLine: T("얼굴로 보는 나의 매력 포인트: 옆모습 🌗 단단한 윤곽 분위기래ㅋㅋ 너는 뭐 나와? 커플 카드도 만들어봐", "The charm that stands out on my face: Solid outline 🌗 They say my outline feels steady. What is yours? Make a couple card too", "顔から見える私の魅力: 横顔の印象 🌗 しっかりした輪郭の雰囲気だって。あなたは？ カップルカードも作ってみて", "脸上最亮的魅力点: 侧颜印象 🌗 说轮廓很稳。你是哪种？ 也做一张双人卡吧", "臉上最亮的魅力點: 側顏印象 🌗 說輪廓很穩。你是哪種？ 也做一張雙人卡吧", "Điểm cuốn hút trên mặt tôi: Đường nét chắc 🌗 Bảo đường nét trông vững. Còn bạn? Làm thẻ đôi nữa nha", "Daya tarik yang paling terasa di wajahku: Garis wajah yang kokoh 🌗 Katanya garisnya terasa kuat. Kamu yang mana? Bikin kartu berdua juga"),
    pairLeft: T("단단함과", "steadiness", "芯の強さ", "稳重", "穩重", "sự chắc chắn", "kekokohan"),
    pairRight: T("단단함이", "steadiness", "芯の強さ", "稳重", "穩重", "sự chắc chắn", "kekokohan"),
    samePair: T("같은 옆모습이 두 배로 겹치는 조합", "Two solid outlines, twice over", "同じ横顔の印象が二重に重なる組み合わせ", "同样的侧颜印象叠成双倍", "同樣的側顏印象疊成雙倍", "Hai đường nét chắc chồng lên nhau", "Garis wajah yang sama, dua kali lipat"),
  },
  {
    id: 6,
    emoji: '✨',
    name: T("눈빛", "Gaze", "眼差し", "眼神", "眼神", "Ánh mắt", "Tatapan"),
    aiRead: T("담백한 표정에 또렷한 눈매와 갸름한 윤곽", "An understated expression, clear eyes, and a slim outline", "あっさりした表情、はっきりした目もと、すっきりした輪郭", "表情淡然，眼睛清楚，轮廓偏瘦长", "表情淡然，眼睛清楚，輪廓偏瘦長", "Nét mặt giản dị, mắt rõ, đường nét thon", "Ekspresi yang sederhana, mata yang tegas, garis wajah yang ramping"),
    quote: T("당신의 가장 큰 매력은 말보다 먼저 닿는 또렷한 눈빛 분위기예요.", "Your standout charm is a clear gaze that reaches people before words do.", "いちばんの魅力は、言葉より先に届くはっきりした眼差しです。", "你最亮的魅力，是比话先到的清楚眼神。", "你最亮的魅力，是比話先到的清楚眼神。", "Điểm hút nhất của bạn là ánh mắt rõ, chạm tới trước cả lời nói.", "Daya tarik paling terasa darimu adalah tatapan yang sampai lebih dulu daripada kata-kata."),
    keywords: T("집중력·관찰력·깊이", "Focus·noticing·depth", "集中力・観察力・深さ", "专注·会看·有深度", "專注·會看·有深度", "Tập trung·để ý·chiều sâu", "Fokus·jeli·kedalaman"),
    shine: T("상대의 이야기에 집중할 때", "When you focus on what the other person is saying", "相手の話に集中しているとき", "专心听对方说话的时候", "專心聽對方說話的時候", "Khi bạn tập trung vào chuyện họ kể", "Saat kamu fokus pada cerita lawan bicara"),
    love: T("신중하게 살피고 확신이 서면 깊게 다가감", "You look carefully, and once you are sure you come in close", "慎重に見て、確信が持てたら深く近づく", "先仔细看，确定了就走近", "先仔細看，確定了就走近", "Bạn nhìn kỹ, chắc rồi thì đến gần thật sự", "Kamu mengamati dulu, dan begitu yakin kamu mendekat dalam-dalam"),
    tip: T("눈빛으로 아낀 마음을 말로도 한 줄 전하기", "Say in one line the care your eyes already hold", "眼差しにしまっている気持ちを、言葉でも一行伝えて", "眼神里收着的心意，也用一句话说出来", "眼神裡收著的心意，也用一句話說出來", "Điều ánh mắt đang giữ, nói thêm một câu", "Rasa yang sudah ada di tatapan, sampaikan juga dalam satu kalimat"),
    cardPhrase: T("눈빛에 집중력이 담겨 있어요", "My gaze holds attention", "眼差しに集中力が入っています", "眼神里有专注", "眼神裡有專注", "Ánh mắt mình có sự tập trung", "Tatapanku menyimpan fokus"),
    oneLiner: T("또렷한 눈빛은 신뢰를 줍니다. 마음의 표현도 함께 꺼내 보세요", "A clear gaze builds trust. Bring the feeling out with it.", "はっきりした眼差しは信頼になります。気持ちもいっしょに出してみて。", "清楚的眼神让人放心。心意也一起拿出来吧。", "清楚的眼神讓人放心。心意也一起拿出來吧。", "Ánh mắt rõ tạo tin. Cảm xúc cũng đưa ra cùng.", "Tatapan yang jelas membuat orang percaya. Keluarkan juga perasaannya."),
    shareLine: T("얼굴로 보는 나의 매력 포인트: 눈빛 ✨ 또렷한 눈빛이 매력이래ㅋㅋ 너는 뭐 나와? 커플 카드도 만들어봐", "The charm that stands out on my face: Gaze ✨ They say a clear gaze is the charm. What is yours? Make a couple card too", "顔から見える私の魅力: 眼差し ✨ はっきりした眼差しが魅力だって。あなたは？ カップルカードも作ってみて", "脸上最亮的魅力点: 眼神 ✨ 说清楚的眼神就是魅力。你是哪种？ 也做一张双人卡吧", "臉上最亮的魅力點: 眼神 ✨ 說清楚的眼神就是魅力。你是哪種？ 也做一張雙人卡吧", "Điểm cuốn hút trên mặt tôi: Ánh mắt ✨ Bảo ánh mắt rõ là điểm hút. Còn bạn? Làm thẻ đôi nữa nha", "Daya tarik yang paling terasa di wajahku: Tatapan ✨ Katanya tatapan yang jelas itu daya tariknya. Kamu yang mana? Bikin kartu berdua juga"),
    pairLeft: T("깊이와", "depth", "深さ", "深意", "深意", "chiều sâu", "kedalaman"),
    pairRight: T("깊이가", "depth", "深さ", "深意", "深意", "chiều sâu", "kedalaman"),
    samePair: T("같은 눈빛이 두 배로 겹치는 조합", "Two clear gazes, twice over", "同じ眼差しが二重に重なる組み合わせ", "同样的眼神叠成双倍", "同樣的眼神疊成雙倍", "Hai ánh mắt rõ chồng lên nhau", "Tatapan yang sama, dua kali lipat"),
  },
  {
    id: 7,
    emoji: '⚖️',
    name: T("전체 균형", "Balance", "全体のバランス", "整体平衡", "整體平衡", "Cân bằng", "Keseimbangan"),
    aiRead: T("담백한 표정에 차분한 눈매와 포근한 얼굴 비율", "An understated expression, calm eyes, and a soft face shape", "あっさりした表情、落ち着いた目もと、丸みのある顔立ち", "表情淡然，眼神平静，脸型圆润", "表情淡然，眼神平靜，臉型圓潤", "Nét mặt giản dị, mắt điềm, khuôn mặt mềm", "Ekspresi yang sederhana, mata yang tenang, bentuk wajah yang lembut"),
    quote: T("당신의 가장 큰 매력은 어느 한 곳에 치우치지 않고 어우러지는 균형 잡힌 분위기예요.", "Your standout charm is a balanced mood that does not lean on just one thing.", "いちばんの魅力は、どこか一つに偏らず、うまく調和する雰囲気です。", "你最亮的魅力，是不偏在一处、整体很搭的氛围。", "你最亮的魅力，是不偏在一處、整體很搭的氛圍。", "Điểm hút nhất của bạn là không khí cân, không nghiêng về một chỗ.", "Daya tarik paling terasa darimu adalah suasana yang seimbang, tidak condong ke satu hal."),
    keywords: T("안정·조화·자기 색", "Steadiness·harmony·your own color", "安定・調和・自分の色", "安定·和谐·自己的颜色", "安定·和諧·自己的顏色", "Vững·hài hòa·màu của mình", "Stabil·selaras·warna sendiri"),
    shine: T("여러 사람과 함께 있을 때, 중재가 필요할 때", "In a group, or when someone needs to smooth things out", "何人かでいるとき、間に入る必要があるとき", "和好几个人在一起，或需要调和的时候", "和好幾個人在一起，或需要調和的時候", "Khi ở cùng nhiều người, hoặc khi cần người đứng giữa", "Saat bersama banyak orang, atau saat perlu ada yang menengahi"),
    love: T("표현은 느려도 한번 열면 진심이 큼", "You are slow to show it, and once you open up the feeling is large", "表現は遅くても、開くと本音が大きい", "表达慢，一打开真心很大", "表達慢，一打開真心很大", "Bạn tỏ ra chậm, nhưng mở ra thì lòng thật rất lớn", "Ekspresimu pelan, tapi begitu terbuka ketulusannya besar"),
    tip: T("내 취향과 바람을 하루 한 가지 말해 보기", "Say one thing you like, or one thing you want, each day", "自分の好みと願いを、一日ひとつ言ってみて", "每天说一件自己的喜好或愿望", "每天說一件自己的喜好或願望", "Mỗi ngày nói một sở thích hoặc một điều bạn muốn", "Setiap hari sebutkan satu selera atau satu harapanmu"),
    cardPhrase: T("균형 잡힌 편안함이 제 색이에요", "Balanced ease is my color", "バランスの取れた安心感が、私の色です", "平衡的舒服感就是我的颜色", "平衡的舒服感就是我的顏色", "Sự dễ chịu cân bằng là màu của mình", "Kenyamanan yang seimbang adalah warnaku"),
    oneLiner: T("조화는 큰 자산입니다. 내 목소리도 한 줄 더해 보세요", "Harmony is a real asset. Add one line in your own voice.", "調和は大きな財産です。自分の声も一行足してみて。", "和谐是很大的本钱。你自己的声音也补一句。", "和諧是很大的本錢。你自己的聲音也補一句。", "Sự hài hòa là vốn lớn. Thêm một câu bằng giọng của bạn.", "Keselarasan itu modal besar. Tambahkan satu kalimat dengan suaramu sendiri."),
    shareLine: T("얼굴로 보는 나의 매력 포인트: 전체 균형 ⚖️ 어우러지는 균형 잡힌 분위기래ㅎㅎ 너는 뭐 나와? 커플 카드도 만들어봐", "The charm that stands out on my face: Balance ⚖️ They say my vibe sits together well. What is yours? Make a couple card too", "顔から見える私の魅力: 全体のバランス ⚖️ うまく調和する雰囲気だって。あなたは？ カップルカードも作ってみて", "脸上最亮的魅力点: 整体平衡 ⚖️ 说整体很搭。你是哪种？ 也做一张双人卡吧", "臉上最亮的魅力點: 整體平衡 ⚖️ 說整體很搭。你是哪種？ 也做一張雙人卡吧", "Điểm cuốn hút trên mặt tôi: Cân bằng ⚖️ Bảo không khí rất ăn với nhau. Còn bạn? Làm thẻ đôi nữa nha", "Daya tarik yang paling terasa di wajahku: Keseimbangan ⚖️ Katanya suasananya duduk dengan pas. Kamu yang mana? Bikin kartu berdua juga"),
    pairLeft: T("조화와", "harmony", "調和", "和谐", "和諧", "sự hài hòa", "keselarasan"),
    pairRight: T("조화가", "harmony", "調和", "和谐", "和諧", "sự hài hòa", "keselarasan"),
    samePair: T("같은 전체 균형이 두 배로 겹치는 조합", "Two balanced moods, twice over", "同じ全体のバランスが二重に重なる組み合わせ", "同样的整体平衡叠成双倍", "同樣的整體平衡疊成雙倍", "Hai sự cân bằng chồng lên nhau", "Keseimbangan yang sama, dua kali lipat"),
  },
  {
    id: 8,
    emoji: '🌙',
    name: T("이마 라인", "Tidy ease", "整った余裕", "清爽从容", "清爽從容", "Gọn và thong thả", "Rapi dan santai"),
    aiRead: T("담백한 표정에 느긋한 눈매와 갸름한 윤곽", "An understated expression, unhurried eyes, and a slim outline", "あっさりした表情、ゆったりした目もと、すっきりした輪郭", "表情淡然，眼神不急，轮廓偏瘦长", "表情淡然，眼神不急，輪廓偏瘦長", "Nét mặt giản dị, mắt thong thả, đường nét thon", "Ekspresi yang sederhana, mata yang santai, garis wajah yang ramping"),
    quote: T("당신의 가장 큰 매력은 시원하고 깔끔하게 정돈된 이미지의 '이마 라인' 분위기예요. (헤어스타일에 따라 달라지는 인상 키워드이며 신체 평가가 아니에요)", "Your standout charm is a cool, tidy, put-together look. The impression changes with hair, and this is not a judgment of your body.", "いちばんの魅力は、すっきり整って見える「額のライン」の雰囲気です。（髪型で変わる印象のキーワードで、身体の評価ではありません）", "你最亮的魅力，是清爽、整齐的「额线」氛围。（这是会随发型变的印象关键词，不是身体评价）", "你最亮的魅力，是清爽、整齊的「額線」氛圍。（這是會隨髮型變的印象關鍵詞，不是身體評價）", "Điểm hút nhất của bạn là vẻ gọn, mát, được sắp xếp. Ấn tượng đổi theo tóc, và đây không phải đánh giá cơ thể.", "Daya tarik paling terasa darimu adalah kesan yang rapi, segar, dan tertata. Kesannya berubah mengikuti rambut, dan ini bukan penilaian tubuh."),
    keywords: T("깔끔함·여유·정돈된 느낌", "Neatness·ease·a put-together feeling", "きれいさ・余裕・整った感じ", "干净·从容·整齐的感觉", "乾淨·從容·整齊的感覺", "Gọn·thong thả·cảm giác đã sắp", "Rapi·santai·kesan yang tertata"),
    shine: T("단정하게 나선 자리, 첫 만남", "When you show up put together, or at a first meeting", "きちんと出ていく場、初対面", "打扮整齐出门的场合，第一次见面", "打扮整齊出門的場合，第一次見面", "Chỗ bạn xuất hiện chỉn chu, hoặc lần gặp đầu", "Saat kamu datang dengan rapi, atau pertemuan pertama"),
    love: T("천천히 마음을 열고 곁에 오면 깊이 아낌", "You open slowly, and once someone is close you care deeply", "ゆっくり心を開いて、そばに来た人は深く大切にする", "慢慢打开心，人靠近了就会很珍惜", "慢慢打開心，人靠近了就會很珍惜", "Bạn mở lòng chậm, và khi ai đó ở gần thì quý rất sâu", "Kamu membuka hati pelan, dan begitu seseorang dekat kamu menjaganya dalam-dalam"),
    tip: T("작은 안부 한 줄로 먼저 마음 신호 보내기", "Send a small check-in first, as a signal", "小さな近況を一行、先に気持ちの合図として送って", "先用一句小问候把心意递出去", "先用一句小問候把心意遞出去", "Gửi một câu hỏi thăm nhỏ trước, như một tín hiệu", "Kirim dulu satu sapaan kecil sebagai tanda"),
    cardPhrase: T("단정한 여유가 제 분위기예요", "Neat ease is my mood", "整った余裕が、私の雰囲気です", "整齐的从容就是我的感觉", "整齊的從容就是我的感覺", "Sự thong thả gọn gàng là không khí của mình", "Santai yang rapi adalah suasanaku"),
    oneLiner: T("여유는 큰 매력입니다. 작은 신호 하나가 마음을 이어 줍니다", "Ease is a real draw. One small signal connects people.", "余裕は大きな魅力です。小さな合図一つが心をつなぎます。", "从容很加分。一个小信号就能把心接上。", "從容很加分。一個小信號就能把心接上。", "Sự thong thả là điểm hút lớn. Một tín hiệu nhỏ nối được lòng người.", "Ketenangan itu daya tarik besar. Satu tanda kecil bisa menyambungkan hati."),
    shareLine: T("얼굴로 보는 나의 매력 포인트: 이마 라인 🌙 단정한 여유가 매력이래ㅋㅋ 너는 뭐 나와? 커플 카드도 만들어봐", "The charm that stands out on my face: Tidy ease 🌙 They say neat ease is the charm. What is yours? Make a couple card too", "顔から見える私の魅力: 整った余裕 🌙 整った余裕が魅力だって。あなたは？ カップルカードも作ってみて", "脸上最亮的魅力点: 清爽从容 🌙 说整齐的从容就是魅力。你是哪种？ 也做一张双人卡吧", "臉上最亮的魅力點: 清爽從容 🌙 說整齊的從容就是魅力。你是哪種？ 也做一張雙人卡吧", "Điểm cuốn hút trên mặt tôi: Gọn và thong thả 🌙 Bảo sự thong thả gọn là điểm hút. Còn bạn? Làm thẻ đôi nữa nha", "Daya tarik yang paling terasa di wajahku: Rapi dan santai 🌙 Katanya santai yang rapi itu daya tariknya. Kamu yang mana? Bikin kartu berdua juga"),
    pairLeft: T("여유와", "ease", "余裕", "从容", "從容", "sự thong thả", "ketenangan"),
    pairRight: T("여유가", "ease", "余裕", "从容", "從容", "sự thong thả", "ketenangan"),
    samePair: T("같은 이마 라인이 두 배로 겹치는 조합", "Two tidy moods, twice over", "同じ整った余裕が二重に重なる組み合わせ", "同样的清爽从容叠成双倍", "同樣的清爽從容疊成雙倍", "Hai vẻ gọn thong thả chồng lên nhau", "Rapi dan santai yang sama, dua kali lipat"),
  },
];

const charmById = (id: number) => phase3FaceCharms.find((item) => item.id === id) ?? phase3FaceCharms[0];

export function getPhase3FaceCharm(id: number): Phase3FaceCharm {
  return charmById(id);
}

export function parsePhase3FaceCharmCode(input: string): number | null {
  const text = input.trim();
  if (/^[1-8]$/.test(text)) return Number(text);
  const match = text.match(/(?:[?&#]|^)charm=([1-8])(?:\D|$)/);
  return match ? Number(match[1]) : null;
}

export const PHASE3_FACE_CHARM_THRESHOLDS = { S: 0.3, E: 0.28, R: 0.84 } as const;
export const PHASE3_FACE_CHARM_MARGIN = 0.02;

type Axis = 'S' | 'E' | 'R';
const AXIS_ORDER: Axis[] = ['S', 'E', 'R'];

export function phase3FaceCharmId(sHigh: boolean, eHigh: boolean, rHigh: boolean): number {
  if (sHigh && eHigh && rHigh) return 1;
  if (sHigh && eHigh && !rHigh) return 2;
  if (sHigh && !eHigh && rHigh) return 3;
  if (sHigh && !eHigh && !rHigh) return 4;
  if (!sHigh && eHigh && rHigh) return 5;
  if (!sHigh && eHigh && !rHigh) return 6;
  if (!sHigh && !eHigh && rHigh) return 7;
  return 8;
}

export interface Phase3FaceCharmResult {
  primaryId: number;
  companionId: number | null;
}

export function classifyPhase3FaceCharm(metrics: Phase3FaceMetrics): Phase3FaceCharmResult {
  const flags: Record<Axis, boolean> = {
    S: metrics.S >= PHASE3_FACE_CHARM_THRESHOLDS.S,
    E: metrics.E >= PHASE3_FACE_CHARM_THRESHOLDS.E,
    R: metrics.R >= PHASE3_FACE_CHARM_THRESHOLDS.R,
  };
  const primaryId = phase3FaceCharmId(flags.S, flags.E, flags.R);
  const near = AXIS_ORDER.filter(
    (axis) => Math.abs(metrics[axis] - PHASE3_FACE_CHARM_THRESHOLDS[axis]) <= PHASE3_FACE_CHARM_MARGIN
  ).sort(
    (a, b) =>
      Math.abs(metrics[a] - PHASE3_FACE_CHARM_THRESHOLDS[a]) -
        Math.abs(metrics[b] - PHASE3_FACE_CHARM_THRESHOLDS[b]) ||
      AXIS_ORDER.indexOf(a) - AXIS_ORDER.indexOf(b)
  );
  if (near.length === 0) return { primaryId, companionId: null };
  const axis = near[0];
  const companionId = phase3FaceCharmId(
    axis === 'S' ? !flags.S : flags.S,
    axis === 'E' ? !flags.E : flags.E,
    axis === 'R' ? !flags.R : flags.R
  );
  return { primaryId, companionId: companionId === primaryId ? null : companionId };
}

export const PHASE3_FACE_CHARM_POINT_META = {
  title: T("얼굴로 보는 나의 매력 포인트 TOP", "The charm that stands out on my face", "顔から見える、私の魅力", "脸上最亮的魅力点", "臉上最亮的魅力點", "Điểm cuốn hút trên khuôn mặt tôi", "Daya tarik yang paling terasa di wajahku"),
  description: T("사진 한 장에서 표정과 얼굴 비율을 읽고, 나를 가장 잘 설명하는 매력 키워드 8가지 중 하나를 골라 드립니다. 사진은 기기 안에서만 분석하고 저장하거나 전송하지 않습니다.", "One photo reads your expression and face shape, then picks the charm keyword that fits you best out of 8. The photo stays on your device. It is never saved or sent.", "写真1枚から表情と顔のバランスを読んで、あなたをいちばんよく表す魅力を8つから選びます。写真はこの端末の中だけで分析し、保存も送信もしません。", "一张照片读出表情和脸型，从8个魅力关键词里选出最像你的一个。照片只在这台设备里分析，不会保存，也不会上传。", "一張照片讀出表情和臉型，從8個魅力關鍵詞裡選出最像你的一個。照片只在這台裝置裡分析，不會保存，也不會上傳。", "Một tấm ảnh đọc nét mặt và khuôn mặt, rồi chọn từ khóa điểm hút hợp bạn nhất trong 8 từ. Ảnh chỉ được phân tích trên máy này, không lưu và không gửi đi.", "Satu foto membaca ekspresi dan bentuk wajah, lalu memilih kata daya tarik yang paling menggambarkanmu dari 8 pilihan. Foto hanya dianalisis di perangkat ini, tidak disimpan dan tidak dikirim."),
  tags: {
    "ko": [
      "얼굴",
      "얼굴테스트",
      "AI인상분석",
      "연애테스트"
    ],
    "en": [
      "face",
      "face test",
      "first impression",
      "dating"
    ],
    "ja": [
      "顔",
      "顔テスト",
      "印象",
      "恋愛"
    ],
    "zh-CN": [
      "脸",
      "脸测试",
      "印象",
      "恋爱"
    ],
    "zh-TW": [
      "臉",
      "臉測驗",
      "印象",
      "戀愛"
    ],
    "vi": [
      "khuôn mặt",
      "test khuôn mặt",
      "ấn tượng",
      "hẹn hò"
    ],
    "id": [
      "wajah",
      "tes wajah",
      "kesan",
      "kenalan"
    ]
  } as Record<Phase3FaceCharmLocaleKey, string[]>,
};
