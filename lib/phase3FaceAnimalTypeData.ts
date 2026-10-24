/**
 * 얼굴로 보는 나의 동물상 — phase3-face-animal-type
 * S 미소, E 눈 개방(EAR), R 얼굴 너비/높이.
 * 기획서 본문에 8칸 분류표가 빠져 있어, 각 동물상의 'AI가 읽은 인상'으로 칸을 고정했다.
 * 활짝·편안·은은한 미소 = S 높음, 담백한 표정 = S 낮음.
 * 또렷한 눈매 = E 높음, 차분·느긋한 눈매 = E 낮음.
 * 포근한 비율 = R 높음, 갸름한 윤곽 = R 낮음.
 * 임계값 ±0.02 안의 축이 있으면 그 축만 뒤집어 '함께 닮은 동물'로 보여 준다.
 */

import {
  averagePhase3FaceMetrics,
  measurePhase3FaceFrame,
  type Phase3FaceMetrics,
  type Phase3FaceQualityCode,
} from '@/lib/phase3FaceFirstImpressionData';

export { averagePhase3FaceMetrics, measurePhase3FaceFrame };
export type { Phase3FaceMetrics, Phase3FaceQualityCode };

export type Phase3FaceAnimalLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';

export type Phase3FaceAnimalText = Record<Phase3FaceAnimalLocaleKey, string>;

function T(ko: string, en: string, ja: string, zhCN: string, zhTW: string, vi: string, id: string): Phase3FaceAnimalText {
  return { ko, en, ja, 'zh-CN': zhCN, 'zh-TW': zhTW, vi, id };
}

export function faceAnimalText(text: Phase3FaceAnimalText, locale: string): string {
  const loc = locale as Phase3FaceAnimalLocaleKey;
  return text[loc] || text.ko;
}

export interface Phase3FaceAnimal {
  id: number;
  emoji: string;
  name: Phase3FaceAnimalText;
  aiRead: Phase3FaceAnimalText;
  quote: Phase3FaceAnimalText;
  mood: Phase3FaceAnimalText;
  charm: Phase3FaceAnimalText;
  love: Phase3FaceAnimalText;
  rebirth: Phase3FaceAnimalText;
  cardPhrase: Phase3FaceAnimalText;
  oneLiner: Phase3FaceAnimalText;
  shareLine: Phase3FaceAnimalText;
}

export const phase3FaceAnimals: Phase3FaceAnimal[] = [
  {
    id: 1,
    emoji: "🐶",
    name: T("강아지상", "Puppy face", "犬顔", "狗系", "狗系", "Mặt cún", "Wajah puppy"),
    aiRead: T("밝고 또렷한 표정에 포근한 얼굴 비율", "A bright, clear expression and a soft face shape", "明るくはっきりした表情に、やわらかい顔のバランス", "表情明亮清楚，脸型也软软的", "表情明亮清楚，臉型也軟軟的", "Nét mặt sáng, rõ, khuôn mặt tròn ấm", "Ekspresi cerah dan jelas, bentuk wajah yang lembut"),
    quote: T("당신의 인상에는 '보기만 해도 반가워지는 따뜻함'이 담겨 있어요.", "People feel glad the moment they see you. That warmth is right there on your face.", "顔を見ただけで嬉しくなる、そんなあたたかさがにじんでいます。", "你的脸上有一种看见就觉得亲切的暖意。", "你的臉上有一種看見就覺得親切的暖意。", "Nhìn bạn là thấy vui. Sự ấm áp ấy hiện rõ trên mặt.", "Melihatmu saja sudah bikin senang. Hangatnya kebaca di wajah."),
    mood: T("사람을 좋아하고 반갑게 맞이하는 다정한 에너지", "A friendly energy that greets people like you're actually glad to see them", "人好きで、会うと嬉しそうにしてくれる気配", "喜欢人，见面就会真心高兴的那种亲切", "喜歡人，見面就會真心高興的那種親切", "Năng lượng thân thiện, gặp ai cũng như mừng thật", "Energi ramah, ketemu orang langsung keliatan senang"),
    charm: T("처음 만난 사람도 편안하게 만드는 친화력", "You put people at ease, even the ones you just met", "初対面でも相手をほっとさせる親しみやすさ", "刚认识的人也会在你身边放松下来", "剛認識的人也會在你身邊放鬆下來", "Người mới gặp cũng thấy thoải mái khi ở bên bạn", "Orang yang baru kenal pun jadi merasa santai di dekatmu"),
    love: T("호감이 생기면 표현이 솔직하고 한결같음", "When you like someone, you show it plainly and stay steady", "好きになったら素直で、気持ちがぶれない", "有好感就说得明白，而且一直那样", "有好感就說得明白，而且一直那樣", "Thích ai thì nói thẳng, và giữ một mực", "Kalau suka, kamu tunjukkan dengan jujur dan tetap konsisten"),
    rebirth: T("다시 태어나도 사랑받으며 꼬리 치는 쪽이에요", "In another life, you'd still be the one wagging your tail and getting loved", "生まれ変わっても、愛されながらしっぽを振る側です", "再活一次，也还是那种被人疼着、摇尾巴的类型", "再活一次，也還是那種被人疼著、搖尾巴的類型", "Dù sinh ra lần nữa, bạn vẫn là kiểu được yêu và vẫy đuôi", "Lahir lagi pun, kamu tetap tipe yang disayang sambil menggoyangkan ekor"),
    cardPhrase: T("반가움이 얼굴에 먼저 나와요", "The hello shows up on my face first", "嬉しさが、先に顔に出ます", "高兴会先写在脸上", "高興會先寫在臉上", "Niềm vui lộ trên mặt trước đã", "Senangnya kebaca di wajah lebih dulu"),
    oneLiner: T("따뜻한 반가움은 큰 재능입니다. 그 온기를 그대로 간직하세요", "That warm hello is a real gift. Keep it just as it is.", "あたたかい嬉しさは、立派な才能です。そのままでいてください", "这种让人高兴的暖意很珍贵。留着就好", "這種讓人高興的暖意很珍貴。留著就好", "Cái chào ấm áp ấy là một tài năng. Cứ giữ nguyên", "Sambutan yang hangat itu bakat yang besar. Pertahankan saja"),
    shareLine: T("얼굴로 보는 나의 동물상: 강아지상 🐶 AI가 본 내 인상이래ㅋㅋ 이 카드로 프로필 바꿈! 너는 뭐 나와?", "Which animal does my face look like? Puppy face 🐶 They say I look glad to see people. Swapped my profile for this card. What did you get?", "顔で見る動物顔：犬顔 🐶 会うと嬉しそうな印象だって。このカードでプロフィール変えた！あなたは何？", "从脸看动物系：狗系 🐶 说我看着就让人高兴。用这张卡换头像了！你是哪种？", "從臉看動物系：狗系 🐶 說我看著就讓人高興。用這張卡換頭像了！你是哪種？", "Nhìn mặt ra loài nào: Mặt cún 🐶 Bảo nhìn mình là thấy vui. Đổi ảnh đại diện bằng thẻ này! Còn bạn?", "Hewan dari wajahku: Wajah puppy 🐶 Katanya aku keliatan senang ketemu orang. Foto profilnya aku ganti pakai kartu ini! Kamu dapat apa?"),
  },
  {
    id: 2,
    emoji: "🐰",
    name: T("토끼상", "Bunny face", "うさぎ顔", "兔系", "兔系", "Mặt thỏ", "Wajah kelinci"),
    aiRead: T("활짝 웃는 표정에 또렷한 눈매와 갸름한 윤곽", "A wide smile, clear eyes, and a slim outline", "にっこり笑う表情に、くっきりした目もととすっきりした輪郭", "笑得很开，眼睛清楚，轮廓也偏瘦长", "笑得很開，眼睛清楚，輪廓也偏瘦長", "Cười thật tươi, mắt rõ, khuôn mặt thon", "Senyum lebar, mata jernih, garis wajah yang ramping"),
    quote: T("당신의 인상에는 '맑고 산뜻한 생기'가 담겨 있어요.", "Your face has a clear, fresh kind of energy.", "顔に、澄んでいてさっぱりした生気が宿っています。", "你的脸上有一种清亮、利落的生气。", "你的臉上有一種清亮、俐落的生氣。", "Khuôn mặt bạn có một sức sống trong và tươi.", "Wajahmu punya energi yang jernih dan segar."),
    mood: T("눈이 반짝이고 표정이 풍부해 분위기를 밝히는 사람", "Bright eyes and a lively face that light up the room", "目がきらきらして表情が豊かで、その場を明るくする人", "眼睛亮、表情丰富，能把气氛点亮的人", "眼睛亮、表情豐富，能把氣氛點亮的人", "Mắt long lanh, nét mặt giàu cảm xúc, làm chỗ nào cũng sáng hơn", "Mata berkilau dan ekspresi yang hidup, suasana jadi terang"),
    charm: T("작은 것에도 크게 반응하는 순수함과 생기", "An open, lively way of reacting, even to small things", "小さなことにも大きく反応する、まっすぐな生気", "对小事也会认真高兴的那种纯粹和活力", "對小事也會認真高興的那種純粹和活力", "Sự trong trẻo khi phản ứng lớn với cả chuyện nhỏ", "Ketulusan yang ikut senang bahkan untuk hal kecil"),
    love: T("감정이 얼굴에 잘 드러나 마음이 투명하게 전해짐", "Your feelings show on your face, so your heart comes through clearly", "気持ちが顔に出て、心がそのまま伝わる", "情绪都写在脸上，心意传得很清楚", "情緒都寫在臉上，心意傳得很清楚", "Cảm xúc hiện trên mặt, nên lòng mình truyền đi rõ ràng", "Perasaanmu kebaca di wajah, jadi hatinya tersampaikan dengan jelas"),
    rebirth: T("폴짝폴짝 뛰며 주변을 환하게 만드는 쪽이에요", "You'd still be the one hopping around and brightening the people nearby", "ぴょんぴょん跳ねて、周りを明るくする側です", "再活一次，也是那种蹦蹦跳跳、把周围照亮的类型", "再活一次，也是那種蹦蹦跳跳、把周圍照亮的類型", "Dù sinh lại, bạn vẫn là kiểu nhảy nhót và làm xung quanh sáng lên", "Lahir lagi pun, kamu tetap tipe yang melompat-lompat dan menerangi sekeliling"),
    cardPhrase: T("반짝이는 눈이 제 마음이에요", "These bright eyes are my heart", "きらきらした目が、私の心です", "发亮的眼睛就是我的心", "發亮的眼睛就是我的心", "Đôi mắt long lanh chính là lòng mình", "Mata yang berkilau ini adalah hatiku"),
    oneLiner: T("산뜻한 생기는 큰 매력입니다. 오늘도 맑게 웃어 보세요", "That fresh energy is a real charm. Smile clearly again today.", "さっぱりした生気は、大きな魅力です。今日も澄んだ笑顔で", "这种清亮的生气很吸引人。今天也笑得明亮一点吧", "這種清亮的生氣很吸引人。今天也笑得明亮一點吧", "Sức sống tươi ấy rất cuốn. Hôm nay cũng cười thật trong", "Energi yang segar itu daya tarik yang besar. Hari ini juga tersenyum dengan jernih"),
    shareLine: T("얼굴로 보는 나의 동물상: 토끼상 🐰 맑고 산뜻한 인상이래ㅎㅎ 프로필 카드 저장! 너는 뭐 나와?", "Which animal does my face look like? Bunny face 🐰 A clear, fresh impression, apparently. Saved the profile card. What did you get?", "顔で見る動物顔：うさぎ顔 🐰 澄んですっきりした印象だって。プロフィールカード保存！あなたは何？", "从脸看动物系：兔系 🐰 说我看着清亮又利落。名片存好了！你是哪种？", "從臉看動物系：兔系 🐰 說我看著清亮又俐落。名片存好了！你是哪種？", "Nhìn mặt ra loài nào: Mặt thỏ 🐰 Bảo ấn tượng trong và tươi. Lưu thẻ rồi! Còn bạn?", "Hewan dari wajahku: Wajah kelinci 🐰 Katanya kesannya jernih dan segar. Kartunya sudah kusimpan! Kamu dapat apa?"),
  },
  {
    id: 3,
    emoji: "🐻",
    name: T("곰상", "Bear face", "クマ顔", "熊系", "熊系", "Mặt gấu", "Wajah beruang"),
    aiRead: T("편안한 미소에 차분한 눈매와 포근한 얼굴 비율", "An easy smile, calm eyes, and a soft face shape", "くつろいだ笑みに、落ち着いた目もととやわらかい顔のバランス", "笑容放松，眼神平静，脸型也软软的", "笑容放鬆，眼神平靜，臉型也軟軟的", "Nụ cười thoải mái, mắt điềm, khuôn mặt tròn ấm", "Senyum yang santai, mata yang tenang, bentuk wajah yang lembut"),
    quote: T("당신의 인상에는 '곁에 있으면 마음이 놓이는 푸근함'이 담겨 있어요.", "Being next to you makes people feel they can finally relax. That softness is in your face.", "そばにいると気が休まる、そんなふくよかさが顔にあります。", "你的脸上有一种“在旁边就安心”的厚实感。", "你的臉上有一種「在旁邊就安心」的厚實感。", "Ở cạnh bạn là thấy yên. Sự ấm áp ấy nằm trên khuôn mặt.", "Di sebelahmu orang jadi tenang. Kelembutan itu ada di wajahmu."),
    mood: T("느긋하고 믿음직해서 기대고 싶은 사람", "Unhurried and steady, the kind of person people want to lean on", "のんびりしていて頼りになり、寄りかかりたくなる人", "不急不躁，让人想靠一靠的那种可靠", "不急不躁，讓人想靠一靠的那種可靠", "Điềm đạm và đáng tin, kiểu người người ta muốn dựa vào", "Santai dan bisa diandalkan, orang yang ingin dijadikan sandaran"),
    charm: T("흔들리지 않는 안정감과 포용력", "A steadiness that does not wobble, and room for other people", "揺れない安定感と、受け止める広さ", "站得很稳的安定感，还有能接住别人的宽厚", "站得很穩的安定感，還有能接住別人的寬厚", "Sự vững vàng không lay, và chỗ để chứa người khác", "Kestabilan yang tidak goyah, dan ruang untuk orang lain"),
    love: T("말없이 곁을 지키며 든든하게 챙김", "You stay close without a lot of words, and look after them properly", "言葉は少なくてもそばにいて、しっかり守ってくれる", "话不多，但会守在身边，把人照顾得很稳", "話不多，但會守在身邊，把人照顧得很穩", "Ít nói nhưng ở bên, và lo cho người kia thật chắc", "Tidak banyak bicara, tapi tetap di samping dan menjaga dengan sungguh"),
    rebirth: T("따뜻한 굴에서 소중한 사람을 품어 주는 쪽이에요", "You'd still be the one keeping someone dear warm in a cozy den", "あたたかい巣で、大切な人を包んであげる側です", "再活一次，也是在暖和的窝里把重要的人揽在身边的类型", "再活一次，也是在暖和的窩裡把重要的人攬在身邊的類型", "Dù sinh lại, bạn vẫn là kiểu ôm người quan trọng trong hang ấm", "Lahir lagi pun, kamu tetap tipe yang memeluk orang tersayang di sarang yang hangat"),
    cardPhrase: T("곁에 있으면 마음이 놓인대요", "They say they can relax when I'm around", "そばにいると気が休まるそうです", "说有我在旁边就安心", "說有我在旁邊就安心", "Bảo ở cạnh mình là thấy yên", "Katanya di sebelahku hati jadi tenang"),
    oneLiner: T("푸근함은 큰 힘입니다. 나도 기댈 자리를 만들어 두세요", "That softness is a real strength. Leave yourself a place to lean, too.", "ふくよかさは大きな力です。自分も寄りかかれる場所を残しておきましょう", "这种厚实感是很大的力量。也给自己留一个能靠的地方", "這種厚實感是很大的力量。也給自己留一個能靠的地方", "Sự ấm áp ấy là sức mạnh. Cũng hãy để một chỗ cho chính mình dựa vào", "Kelembutan itu kekuatan yang besar. Sisakan juga tempat untuk kamu sendiri bersandar"),
    shareLine: T("얼굴로 보는 나의 동물상: 곰상 🐻 곁에 있으면 마음 놓이는 인상이래ㅎㅎ 프로필 카드 저장! 너는 뭐 나와?", "Which animal does my face look like? Bear face 🐻 They say people relax around me. Saved the profile card. What did you get?", "顔で見る動物顔：クマ顔 🐻 そばにいると気が休まる印象だって。プロフィールカード保存！あなたは何？", "从脸看动物系：熊系 🐻 说我在旁边就让人安心。名片存好了！你是哪种？", "從臉看動物系：熊系 🐻 說我在旁邊就讓人安心。名片存好了！你是哪種？", "Nhìn mặt ra loài nào: Mặt gấu 🐻 Bảo ở cạnh mình là thấy yên. Lưu thẻ rồi! Còn bạn?", "Hewan dari wajahku: Wajah beruang 🐻 Katanya di sebelahku orang jadi tenang. Kartunya sudah kusimpan! Kamu dapat apa?"),
  },
  {
    id: 4,
    emoji: "🦌",
    name: T("사슴상", "Deer face", "シカ顔", "鹿系", "鹿系", "Mặt hươu", "Wajah rusa"),
    aiRead: T("은은한 미소에 느긋한 눈매와 갸름한 윤곽", "A soft smile, unhurried eyes, and a slim outline", "ほのかな笑みに、ゆったりした目もととすっきりした輪郭", "微笑很淡，眼神不急，轮廓偏瘦长", "微笑很淡，眼神不急，輪廓偏瘦長", "Nụ cười nhẹ, mắt thong thả, khuôn mặt thon", "Senyum yang samar, mata yang tidak terburu, garis wajah yang ramping"),
    quote: T("당신의 인상에는 '맑고 고요한 감성'이 담겨 있어요.", "There is a clear, quiet feeling in the way you come across.", "澄んでいて静かな感性が、顔にあります。", "你的脸上有一种清澈又安静的感性。", "你的臉上有一種清澈又安靜的感性。", "Ấn tượng của bạn là một cảm xúc trong và lặng.", "Kesanmu punya rasa yang jernih dan tenang."),
    mood: T("조용하지만 눈빛에 이야기가 담긴 섬세한 사람", "Quiet, but your eyes look like they are holding a story", "静かだけど、目に物語が宿っている繊細な人", "话不多，但眼神里装着故事的细腻的人", "話不多，但眼神裡裝著故事的細膩的人", "Ít nói, nhưng ánh mắt như đang giữ một câu chuyện", "Pendiam, tapi matanya seperti menyimpan cerita"),
    charm: T("차분한 분위기와 깊은 감수성", "A calm air, and a feeling that goes deep", "落ち着いた空気と、深い感受性", "沉静的气氛，和很深的感受力", "沉靜的氣氛，和很深的感受力", "Không khí điềm tĩnh và cảm xúc sâu", "Suasana yang tenang dan rasa yang dalam"),
    love: T("조용히 마음을 키우고 진심을 오래 간직함", "You grow a feeling quietly and keep the real part for a long time", "静かに気持ちを育てて、本心を長くしまう", "会安静地把心意养大，把真心留很久", "會安靜地把心意養大，把真心留很久", "Bạn nuôi cảm xúc trong yên lặng và giữ lòng thật rất lâu", "Kamu menumbuhkan perasaan pelan-pelan dan menyimpan yang sungguh lama"),
    rebirth: T("숲속 맑은 물가에서 조용히 풍경을 담는 쪽이에요", "You'd still be the one quietly taking in the view by clear water in the woods", "森の澄んだ水辺で、静かに景色を見つめている側です", "再活一次，也是在林间清水边安静看着风景的类型", "再活一次，也是在林間清水邊安靜看著風景的類型", "Dù sinh lại, bạn vẫn là kiểu đứng yên bên suối trong và nhìn cảnh", "Lahir lagi pun, kamu tetap tipe yang diam-diam memandangi pemandangan di tepi air yang jernih"),
    cardPhrase: T("조용한 눈빛에 이야기가 있어요", "There is a story in these quiet eyes", "静かな目に、物語があります", "安静的眼神里有故事", "安靜的眼神裡有故事", "Ánh mắt yên này đang giữ một câu chuyện", "Di mata yang tenang ini ada ceritanya"),
    oneLiner: T("고요한 감성은 큰 매력입니다. 마음도 한 줄씩 꺼내 보세요", "That quiet feeling is a real charm. Try letting a line of it out.", "静かな感性は大きな魅力です。心も一行ずつ出してみてください", "这种安静的感性很吸引人。心里的话也可以一行一行拿出来", "這種安靜的感性很吸引人。心裡的話也可以一行一行拿出來", "Cảm xúc lặng ấy rất cuốn. Thử lấy ra từng dòng một", "Rasa yang tenang itu daya tarik yang besar. Coba keluarkan pelan-pelan, satu baris saja"),
    shareLine: T("얼굴로 보는 나의 동물상: 사슴상 🦌 맑고 고요한 인상이래... 프로필 카드 저장! 너는 뭐 나와?", "Which animal does my face look like? Deer face 🦌 A clear, quiet impression, they say. Saved the profile card. What did you get?", "顔で見る動物顔：シカ顔 🦌 澄んでいて静かな印象だって。プロフィールカード保存！あなたは何？", "从脸看动物系：鹿系 🦌 说我看着清澈又安静。名片存好了！你是哪种？", "從臉看動物系：鹿系 🦌 說我看著清澈又安靜。名片存好了！你是哪種？", "Nhìn mặt ra loài nào: Mặt hươu 🦌 Bảo ấn tượng trong và lặng. Lưu thẻ rồi! Còn bạn?", "Hewan dari wajahku: Wajah rusa 🦌 Katanya kesannya jernih dan tenang. Kartunya sudah kusimpan! Kamu dapat apa?"),
  },
  {
    id: 5,
    emoji: "🐺",
    name: T("늑대상", "Wolf face", "オオカミ顔", "狼系", "狼系", "Mặt sói", "Wajah serigala"),
    aiRead: T("담백한 표정에 또렷한 눈매와 포근한 얼굴 비율", "A plain expression, clear eyes, and a soft face shape", "あっさりした表情に、くっきりした目もととやわらかい顔のバランス", "表情很淡，眼睛清楚，脸型却软软的", "表情很淡，眼睛清楚，臉型卻軟軟的", "Nét mặt giản, mắt rõ, khuôn mặt vẫn tròn ấm", "Ekspresi yang polos, mata yang jernih, bentuk wajah yang lembut"),
    quote: T("당신의 인상에는 '한번 마음먹으면 곧게 가는 단단함'이 담겨 있어요.", "Once you decide, you go straight. That firmness shows.", "一度決めたらまっすぐ進む、そんな硬さが顔にあります。", "你的脸上有一种“下了决心就走直路”的硬气。", "你的臉上有一種「下了決心就走直路」的硬氣。", "Một khi đã quyết, bạn đi thẳng. Sự chắc ấy hiện trên mặt.", "Kalau sudah memutuskan, kamu jalan lurus. Keteguhan itu kebaca di wajah."),
    mood: T("쉽게 흔들리지 않는 카리스마와 의리가 있는 사람", "Hard to shake, with presence and a strong sense of loyalty", "簡単には揺れない存在感と、義理のある人", "不容易被晃动，有气场，也讲义气", "不容易被晃動，有氣場，也講義氣", "Khó lay chuyển, có khí chất và nghĩa khí", "Tidak mudah goyah, ada wibawa dan rasa setia"),
    charm: T("기준이 분명하고 한번 준 마음을 지키는 신뢰감", "Clear standards, and a trust that comes from keeping a promise you already made", "基準がはっきりしていて、一度向けた気持ちを守る信頼感", "标准清楚，给过的心意也会守住，让人放心", "標準清楚，給過的心意也會守住，讓人放心", "Tiêu chuẩn rõ, và sự tin cậy vì giữ lòng đã trao", "Standar yang jelas, dan rasa percaya karena kamu menjaga hati yang sudah diberikan"),
    love: T("겉은 담백해도 소중한 사람은 끝까지 지킴", "The outside stays plain, but you protect the people who matter until the end", "外はあっさりでも、大切な人は最後まで守る", "表面淡淡的，重要的人却会守到最后", "表面淡淡的，重要的人卻會守到最後", "Bên ngoài giản, nhưng người quan trọng thì giữ đến cùng", "Dari luar terlihat biasa, tapi orang yang penting kamu jaga sampai akhir"),
    rebirth: T("무리를 이끌며 소중한 이를 지키는 쪽이에요", "You'd still be the one leading the group and guarding the people you care about", "群れを率いて、大切な人を守る側です", "再活一次，也是带着一群人、守住重要的人的类型", "再活一次，也是帶著一群人、守住重要的人的類型", "Dù sinh lại, bạn vẫn là kiểu dẫn cả nhóm và giữ người quan trọng", "Lahir lagi pun, kamu tetap tipe yang memimpin kelompok dan menjaga orang yang penting"),
    cardPhrase: T("표현은 담백해도 의리는 진해요", "The words stay plain. The loyalty does not.", "表現はあっさりでも、義理は濃いです", "话说得淡，义气却很浓", "話說得淡，義氣卻很濃", "Lời thì giản, nghĩa thì đậm", "Ucapannya biasa, tapi kesetiaannya kental"),
    oneLiner: T("단단함은 큰 힘입니다. 부드러운 한마디가 더해지면 더 멋집니다", "That firmness is a real strength. One softer sentence makes it even better.", "硬さは大きな力です。やわらかい一言が加わると、もっと格好よくなります", "这种硬气是很大的力量。再加一句软话，会更好看", "這種硬氣是很大的力量。再加一句軟話，會更好看", "Sự chắc ấy là sức mạnh. Thêm một câu mềm là đẹp hơn", "Keteguhan itu kekuatan yang besar. Satu kalimat yang lebih lembut membuatnya makin bagus"),
    shareLine: T("얼굴로 보는 나의 동물상: 늑대상 🐺 단단하고 의리 있는 인상이래ㅋㅋ 프로필 카드 저장! 너는 뭐 나와?", "Which animal does my face look like? Wolf face 🐺 Firm, and loyal, apparently. Saved the profile card. What did you get?", "顔で見る動物顔：オオカミ顔 🐺 硬くて義理のある印象だって。プロフィールカード保存！あなたは何？", "从脸看动物系：狼系 🐺 说我看着又硬气又讲义气。名片存好了！你是哪种？", "從臉看動物系：狼系 🐺 說我看著又硬氣又講義氣。名片存好了！你是哪種？", "Nhìn mặt ra loài nào: Mặt sói 🐺 Bảo ấn tượng chắc và có nghĩa. Lưu thẻ rồi! Còn bạn?", "Hewan dari wajahku: Wajah serigala 🐺 Katanya kesannya tegas dan setia. Kartunya sudah kusimpan! Kamu dapat apa?"),
  },
  {
    id: 6,
    emoji: "🦊",
    name: T("여우상", "Fox face", "キツネ顔", "狐系", "狐系", "Mặt cáo", "Wajah rubah"),
    aiRead: T("담백한 표정에 또렷한 눈매와 갸름한 윤곽", "A plain expression, clear eyes, and a slim outline", "あっさりした表情に、くっきりした目もととすっきりした輪郭", "表情很淡，眼睛清楚，轮廓偏瘦长", "表情很淡，眼睛清楚，輪廓偏瘦長", "Nét mặt giản, mắt rõ, khuôn mặt thon", "Ekspresi yang polos, mata yang jernih, garis wajah yang ramping"),
    quote: T("당신의 인상에는 '영리하고 매력적인 분위기'가 담겨 있어요.", "You come across as quick, and attractive in a sharp way.", "賢くて魅力的な空気が、顔にあります。", "你的脸上有一种聪明、也好看的气氛。", "你的臉上有一種聰明、也好看的氣氛。", "Ấn tượng của bạn là thông minh và có sức hút.", "Kesanmu cerdas dan menarik."),
    mood: T("눈치가 빠르고 재치 있는 말로 시선을 끄는 사람", "Quick to read the room, and good at pulling attention with a clever line", "空気を読むのが早く、気の利いた一言で目を引く人", "很会看场合，一句话就能把目光拉过来", "很會看場合，一句話就能把目光拉過來", "Đọc tình huống nhanh, một câu khéo là kéo được ánh nhìn", "Cepat baca suasana, satu kalimat yang pas sudah menarik perhatian"),
    charm: T("상황을 읽는 센스와 반전 있는 매력", "A sense for the moment, and a charm that turns once people know you", "場を読むセンスと、知るとひっくり返る魅力", "会看场面的分寸，还有越了解越反转的吸引力", "會看場面的分寸，還有越了解越反轉的吸引力", "Biết đọc tình huống, và sức hút càng biết càng bất ngờ", "Peka membaca situasi, dan daya tarik yang berbalik begitu orang mengenalmu"),
    love: T("밀고 당김의 감각이 있고 대화가 재미있음", "You have a feel for when to lean in and when to step back, and talking with you is fun", "押したり引いたりの感覚があって、会話が楽しい", "进退有分寸，聊天也很有意思", "進退有分寸，聊天也很有意思", "Biết lúc tiến lúc lùi, và nói chuyện với bạn thì vui", "Punya rasa kapan mendekat dan kapan menjauh, obrolannya juga seru"),
    rebirth: T("영리하게 길을 찾으며 반짝이는 쪽이에요", "You'd still be the one finding the path cleverly and catching the light", "賢く道を見つけながら、きらきらしている側です", "再活一次，也是聪明找路、还闪着光的类型", "再活一次，也是聰明找路、還閃著光的類型", "Dù sinh lại, bạn vẫn là kiểu tìm đường khéo và vẫn lấp lánh", "Lahir lagi pun, kamu tetap tipe yang pintar mencari jalan dan tetap berkilau"),
    cardPhrase: T("알면 알수록 반전 매력이 있어요", "The more you know me, the more the twist shows", "知れば知るほど、反転の魅力があります", "越了解越有反转", "越了解越有反轉", "Càng biết càng thấy mặt khác", "Makin dikenal, makin kelihatan sisi baliknya"),
    oneLiner: T("센스는 큰 매력입니다. 진심 한 줄이 더해지면 더 빛납니다", "That sense of timing is a real charm. One honest line makes it shine more.", "センスは大きな魅力です。本心の一行が加わると、もっと光ります", "这种分寸感很吸引人。再加一句真心话，会更亮", "這種分寸感很吸引人。再加一句真心話，會更亮", "Sự tinh tế ấy rất cuốn. Thêm một câu thật lòng là sáng hơn", "Rasa timing itu daya tarik yang besar. Satu kalimat yang jujur membuatnya lebih bersinar"),
    shareLine: T("얼굴로 보는 나의 동물상: 여우상 🦊 영리하고 반전 있는 인상이래ㅋㅋ 프로필 카드 저장! 너는 뭐 나와?", "Which animal does my face look like? Fox face 🦊 Quick, with a twist, apparently. Saved the profile card. What did you get?", "顔で見る動物顔：キツネ顔 🦊 賢くて反転のある印象だって。プロフィールカード保存！あなたは何？", "从脸看动物系：狐系 🦊 说我看着聪明，还有反转。名片存好了！你是哪种？", "從臉看動物系：狐系 🦊 說我看著聰明，還有反轉。名片存好了！你是哪種？", "Nhìn mặt ra loài nào: Mặt cáo 🦊 Bảo ấn tượng tinh và có mặt khác. Lưu thẻ rồi! Còn bạn?", "Hewan dari wajahku: Wajah rubah 🦊 Katanya kesannya cerdas dan ada sisi baliknya. Kartunya sudah kusimpan! Kamu dapat apa?"),
  },
  {
    id: 7,
    emoji: "🦖",
    name: T("공룡상", "Dino face", "恐竜顔", "恐龙系", "恐龍系", "Mặt khủng long", "Wajah dino"),
    aiRead: T("담백한 표정에 차분한 눈매와 포근한 얼굴 비율", "A plain expression, calm eyes, and a soft face shape", "あっさりした表情に、落ち着いた目もととやわらかい顔のバランス", "表情很淡，眼神平静，脸型却软软的", "表情很淡，眼神平靜，臉型卻軟軟的", "Nét mặt giản, mắt điềm, khuôn mặt tròn ấm", "Ekspresi yang polos, mata yang tenang, bentuk wajah yang lembut"),
    quote: T("당신의 인상에는 '독특하고 개성 있는 존재감'이 담겨 있어요.", "You have a presence that is clearly your own.", "独特で個性のある存在感が、顔にあります。", "你的脸上有一种独特、很有个性的存在感。", "你的臉上有一種獨特、很有個性的存在感。", "Ấn tượng của bạn là một sự hiện diện riêng và rõ.", "Kesanmu punya kehadiran yang khas dan tidak biasa."),
    mood: T("무심한 듯 시크하지만 알고 보면 순한 개성파", "Cool, almost indifferent, and surprisingly gentle once people know you", "そっけなく見えるけど、知るとおとなしい個性派", "看着冷淡，了解了才知道其实很温和的个性派", "看著冷淡，了解了才知道其實很溫和的個性派", "Trông thờ ơ và lạnh, nhưng biết rồi thì hiền, kiểu rất riêng", "Kelihatan cuek, tapi begitu dikenal ternyata lembut dan khas"),
    charm: T("유행에 휘둘리지 않는 자기만의 색과 반전의 귀여움", "A color of your own that does not follow the trend, and a cute side that surprises people", "流行に流されない自分の色と、ひっくり返る可愛さ", "不跟风的自己的颜色，还有反转过来的可爱", "不跟風的自己的顏色，還有反轉過來的可愛", "Một màu riêng không chạy theo xu hướng, và sự dễ thương bất ngờ", "Warna sendiri yang tidak ikut tren, plus lucu yang muncul belakangan"),
    love: T("표현은 느리지만 한번 마음을 열면 진심이 큼", "Slow to show it, but once you open up, the feeling is big", "表現は遅いけど、一度心を開くと本心が大きい", "表达得慢，可一旦打开，真心很大", "表達得慢，可一旦打開，真心很大", "Bày tỏ chậm, nhưng một khi mở lòng thì rất thật", "Lambat menunjukkan, tapi begitu terbuka, perasaannya besar"),
    rebirth: T("당당하게 자기 길을 걷는 대형 개성파예요", "You'd still be the big, unmistakable one walking your own path", "堂々と自分の道を歩く、大型の個性派です", "再活一次，也是大大方方走自己的路的大型个性派", "再活一次，也是大大方方走自己的路的大型個性派", "Dù sinh lại, bạn vẫn là kiểu lớn, đi đường của mình một cách đường hoàng", "Lahir lagi pun, kamu tetap tipe besar yang berjalan di jalanmu sendiri dengan tenang"),
    cardPhrase: T("독특함이 제 매력 포인트예요", "Being unlike everyone else is the point", "独特なところが、私の魅力です", "独特就是我的魅力", "獨特就是我的魅力", "Sự khác biệt chính là điểm hút của mình", "Yang beda itu justru daya tarikku"),
    oneLiner: T("개성은 큰 자산입니다. 마음의 표현을 한 줄만 더해 보세요", "That individuality is a real asset. Try adding one line of what you feel.", "個性は大きな財産です。気持ちを一行だけ足してみてください", "个性是很大的本钱。心里的话再加一行就好", "個性是很大的本錢。心裡的話再加一行就好", "Cá tính ấy là vốn lớn. Thử thêm một dòng về lòng mình", "Kekhasan itu modal yang besar. Coba tambahkan satu baris tentang perasaanmu"),
    shareLine: T("얼굴로 보는 나의 동물상: 공룡상 🦖 개성파 인상이래ㅋㅋ 프로필 카드 저장! 너는 뭐 나와?", "Which animal does my face look like? Dino face 🦖 They say I have a look that is very much my own. Saved the profile card. What did you get?", "顔で見る動物顔：恐竜顔 🦖 個性派の印象だって。プロフィールカード保存！あなたは何？", "从脸看动物系：恐龙系 🦖 说我看着就很有自己的样子。名片存好了！你是哪种？", "從臉看動物系：恐龍系 🦖 說我看著就很有自己的樣子。名片存好了！你是哪種？", "Nhìn mặt ra loài nào: Mặt khủng long 🦖 Bảo ấn tượng rất riêng. Lưu thẻ rồi! Còn bạn?", "Hewan dari wajahku: Wajah dino 🦖 Katanya kesannya khas banget. Kartunya sudah kusimpan! Kamu dapat apa?"),
  },
  {
    id: 8,
    emoji: "🐱",
    name: T("고양이상", "Cat face", "猫顔", "猫系", "貓系", "Mặt mèo", "Wajah kucing"),
    aiRead: T("담백한 표정에 느긋한 눈매와 갸름한 윤곽", "A plain expression, unhurried eyes, and a slim outline", "あっさりした表情に、ゆったりした目もととすっきりした輪郭", "表情很淡，眼神不急，轮廓偏瘦长", "表情很淡，眼神不急，輪廓偏瘦長", "Nét mặt giản, mắt thong thả, khuôn mặt thon", "Ekspresi yang polos, mata yang tidak terburu, garis wajah yang ramping"),
    quote: T("당신의 인상에는 '자기 페이스를 지키는 도도한 매력'이 담겨 있어요.", "You keep your own pace, and that cool distance is part of the charm.", "自分のペースを守る、ちょっとツンとした魅力が顔にあります。", "你的脸上有一种守着自己节奏的、有点傲的魅力。", "你的臉上有一種守著自己節奏的、有點傲的魅力。", "Bạn giữ nhịp của mình, và sự hơi kiêu ấy lại hút.", "Kamu menjaga tempo sendiri, dan jarak yang sedikit angkuh itu justru menarik."),
    mood: T("쉽게 다가가기 어려운 듯 보이지만 알면 다정한 사람", "Hard to approach at first, and warm once people actually know you", "近づきにくく見えるけど、知ると優しい人", "看着不太好靠近，了解了却很温柔", "看著不太好靠近，了解了卻很溫柔", "Trông khó lại gần, nhưng biết rồi thì dịu", "Kelihatan susah didekati, tapi begitu dikenal ternyata hangat"),
    charm: T("자기 리듬을 지키는 여유와 은근한 반전 매력", "The ease of keeping your own rhythm, and a quiet twist once people stay", "自分のリズムを守る余裕と、じわっと来る反転の魅力", "守着自己节奏的从容，还有慢慢才露出来的反转", "守著自己節奏的從容，還有慢慢才露出來的反轉", "Sự thong thả khi giữ nhịp của mình, và sức hút lộ ra từ từ", "Ketenangan menjaga ritme sendiri, dan daya tarik yang muncul pelan-pelan"),
    love: T("천천히 마음을 열고 곁에 오면 깊이 아낌", "You open up slowly, and once someone is close, you care deeply", "ゆっくり心を開いて、そばに来た人は深く大切にする", "心开得很慢，可一旦靠近，就疼得很深", "心開得很慢，可一旦靠近，就疼得很深", "Mở lòng chậm, nhưng ai đã lại gần thì bạn quý rất sâu", "Kamu membuka hati pelan, tapi begitu seseorang dekat, kamu menyayanginya dalam"),
    rebirth: T("햇살 좋은 창가에서 내 페이스로 사는 쪽이에요", "You'd still be living at your own pace in a sunny window seat", "日当たりのいい窓辺で、自分のペースで暮らす側です", "再活一次，也是在有阳光的窗边按自己的节奏过的类型", "再活一次，也是在有陽光的窗邊按自己的節奏過的類型", "Dù sinh lại, bạn vẫn sống theo nhịp của mình bên cửa sổ nhiều nắng", "Lahir lagi pun, kamu tetap hidup sesuai tempomu di jendela yang kena matahari"),
    cardPhrase: T("천천히 마음 여는 중이에요", "Opening up, slowly", "ゆっくり心を開いているところです", "正在慢慢把心打开", "正在慢慢把心打開", "Đang mở lòng, từ từ thôi", "Lagi membuka hati, pelan-pelan"),
    oneLiner: T("여유는 큰 매력입니다. 작은 신호 하나가 마음을 이어 줍니다", "That ease is a real charm. One small signal is enough to connect.", "余裕は大きな魅力です。小さな合図ひとつで、心はつながります", "这种从容很吸引人。一个小信号就能把心接上", "這種從容很吸引人。一個小訊號就能把心接上", "Sự thong thả ấy rất cuốn. Một tín hiệu nhỏ là đủ để nối lòng", "Ketenangan itu daya tarik yang besar. Satu isyarat kecil sudah cukup untuk menyambungkan hati"),
    shareLine: T("얼굴로 보는 나의 동물상: 고양이상 🐱 자기 페이스 지키는 인상이래ㅋㅋ 프로필 카드 저장! 너는 뭐 나와?", "Which animal does my face look like? Cat face 🐱 They say I keep my own pace. Saved the profile card. What did you get?", "顔で見る動物顔：猫顔 🐱 自分のペースを守る印象だって。プロフィールカード保存！あなたは何？", "从脸看动物系：猫系 🐱 说我看着就是按自己的节奏来。名片存好了！你是哪种？", "從臉看動物系：貓系 🐱 說我看著就是按自己的節奏來。名片存好了！你是哪種？", "Nhìn mặt ra loài nào: Mặt mèo 🐱 Bảo ấn tượng giữ nhịp của mình. Lưu thẻ rồi! Còn bạn?", "Hewan dari wajahku: Wajah kucing 🐱 Katanya aku jaga tempo sendiri. Kartunya sudah kusimpan! Kamu dapat apa?"),
  },
];

const animalById = (id: number) => phase3FaceAnimals.find((item) => item.id === id) ?? phase3FaceAnimals[0];

export function getPhase3FaceAnimal(id: number): Phase3FaceAnimal {
  return animalById(id);
}

export const PHASE3_FACE_ANIMAL_THRESHOLDS = { S: 0.3, E: 0.28, R: 0.84 } as const;
export const PHASE3_FACE_ANIMAL_MARGIN = 0.02;

type Axis = 'S' | 'E' | 'R';
const AXIS_ORDER: Axis[] = ['S', 'E', 'R'];

export function phase3FaceAnimalId(sHigh: boolean, eHigh: boolean, rHigh: boolean): number {
  if (sHigh && eHigh && rHigh) return 1;
  if (sHigh && eHigh && !rHigh) return 2;
  if (sHigh && !eHigh && rHigh) return 3;
  if (sHigh && !eHigh && !rHigh) return 4;
  if (!sHigh && eHigh && rHigh) return 5;
  if (!sHigh && eHigh && !rHigh) return 6;
  if (!sHigh && !eHigh && rHigh) return 7;
  return 8;
}

export interface Phase3FaceAnimalResult {
  primaryId: number;
  companionId: number | null;
}

export function classifyPhase3FaceAnimal(metrics: Phase3FaceMetrics): Phase3FaceAnimalResult {
  const flags: Record<Axis, boolean> = {
    S: metrics.S >= PHASE3_FACE_ANIMAL_THRESHOLDS.S,
    E: metrics.E >= PHASE3_FACE_ANIMAL_THRESHOLDS.E,
    R: metrics.R >= PHASE3_FACE_ANIMAL_THRESHOLDS.R,
  };
  const primaryId = phase3FaceAnimalId(flags.S, flags.E, flags.R);
  const near = AXIS_ORDER.filter(
    (axis) => Math.abs(metrics[axis] - PHASE3_FACE_ANIMAL_THRESHOLDS[axis]) <= PHASE3_FACE_ANIMAL_MARGIN
  ).sort(
    (a, b) =>
      Math.abs(metrics[a] - PHASE3_FACE_ANIMAL_THRESHOLDS[a]) -
        Math.abs(metrics[b] - PHASE3_FACE_ANIMAL_THRESHOLDS[b]) ||
      AXIS_ORDER.indexOf(a) - AXIS_ORDER.indexOf(b)
  );
  if (near.length === 0) return { primaryId, companionId: null };
  const axis = near[0];
  const companionId = phase3FaceAnimalId(
    axis === 'S' ? !flags.S : flags.S,
    axis === 'E' ? !flags.E : flags.E,
    axis === 'R' ? !flags.R : flags.R
  );
  return { primaryId, companionId: companionId === primaryId ? null : companionId };
}

export const PHASE3_FACE_ANIMAL_TYPE_META = {
  title: T("얼굴로 보는 나의 동물상", "Which animal does my face look like?", "顔で見る、私の動物顔", "从脸看我的动物系", "從臉看我的動物系", "Nhìn mặt, tôi giống loài nào?", "Dari wajah, aku mirip hewan apa?"),
  description: T("사진 한 장에서 표정과 얼굴 비율을 읽고, 분위기가 닮은 동물상 8가지 중 하나를 골라 드립니다. 사진은 기기 안에서만 분석하고 저장하거나 전송하지 않습니다.", "One photo reads your expression and face shape, then picks the animal whose vibe matches you. The photo stays on your device. It is never saved or sent.", "写真1枚から表情と顔のバランスを読んで、雰囲気の近い動物顔を8つの中から選びます。写真はこの端末の中だけで分析し、保存も送信もしません。", "一张照片读出表情和脸型，从8种动物系里选出气质相近的一种。照片只在这台设备里分析，不会保存，也不会上传。", "一張照片讀出表情和臉型，從8種動物系裡選出氣質相近的一種。照片只在這台裝置裡分析，不會保存，也不會上傳。", "Một tấm ảnh đọc nét mặt và khuôn mặt, rồi chọn loài có khí chất gần bạn trong 8 kiểu. Ảnh chỉ được phân tích trên máy này, không lưu và không gửi đi.", "Satu foto membaca ekspresi dan bentuk wajah, lalu memilih hewan yang suasananya paling dekat dari 8 tipe. Foto hanya dianalisis di perangkat ini, tidak disimpan dan tidak dikirim."),
  tags: {
    ko: ["얼굴", "얼굴테스트", "AI인상분석", "연애테스트"],
    en: ["face", "face test", "first impression", "dating"],
    ja: ["顔", "顔テスト", "印象", "恋愛"],
    "zh-CN": ["脸", "脸测试", "印象", "恋爱"],
    "zh-TW": ["臉", "臉測驗", "印象", "戀愛"],
    vi: ["khuôn mặt", "test khuôn mặt", "ấn tượng", "tình yêu"],
    id: ["wajah", "tes wajah", "kesan", "cinta"],
  } as Record<Phase3FaceAnimalLocaleKey, string[]>,
};
