/**
 * 얼굴로 보는 성격 장점 TOP — phase3-face-strength
 * S 미소, E 눈 개방(EAR), R 얼굴 너비/높이.
 * 기획서에 8칸 분류표가 없어, 각 장점의 'AI가 읽은 인상'으로 칸을 고정했다.
 * 밝고 또렷·활짝·편안·은은한 미소 = S 높음, 담백 = S 낮음.
 * 또렷한 눈매 = E 높음, 차분·느긋한 눈매 = E 낮음.
 * 포근한 비율 = R 높음, 갸름한 윤곽 = R 낮음.
 * 임계값 ±0.02 안의 축이 있으면 그 축만 뒤집어 '함께 보이는 장점'으로 보여 준다.
 */

import {
  averagePhase3FaceMetrics,
  measurePhase3FaceFrame,
  type Phase3FaceMetrics,
  type Phase3FaceQualityCode,
} from '@/lib/phase3FaceFirstImpressionData';

export { averagePhase3FaceMetrics, measurePhase3FaceFrame };
export type { Phase3FaceMetrics, Phase3FaceQualityCode };

export type Phase3FaceStrengthLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';
export type Phase3FaceStrengthText = Record<Phase3FaceStrengthLocaleKey, string>;

function T(ko: string, en: string, ja: string, zhCN: string, zhTW: string, vi: string, id: string): Phase3FaceStrengthText {
  return { ko, en, ja, 'zh-CN': zhCN, 'zh-TW': zhTW, vi, id };
}

export function faceStrengthText(text: Phase3FaceStrengthText, locale: string): string {
  const loc = locale as Phase3FaceStrengthLocaleKey;
  return text[loc] || text.ko;
}

export interface Phase3FaceStrength {
  id: number;
  emoji: string;
  name: Phase3FaceStrengthText;
  aiRead: Phase3FaceStrengthText;
  quote: Phase3FaceStrengthText;
  keywords: Phase3FaceStrengthText;
  shine: Phase3FaceStrengthText;
  love: Phase3FaceStrengthText;
  tip: Phase3FaceStrengthText;
  reflect: Phase3FaceStrengthText;
  cardPhrase: Phase3FaceStrengthText;
  oneLiner: Phase3FaceStrengthText;
  shareLine: Phase3FaceStrengthText;
}

export const phase3FaceStrengths: Phase3FaceStrength[] = [
  {
    id: 1,
    emoji: '☀️',
    name: T('낙천성', 'Optimism', '楽観', '乐观', '樂觀', 'Lạc quan', 'Optimisme'),
    aiRead: T('밝고 또렷한 표정에 포근한 얼굴 비율', 'A bright, clear expression and a soft face shape', '明るくはっきりした表情に、やわらかい顔のバランス', '明亮清楚的表情，脸型也偏柔和', '明亮清楚的表情，臉型也偏柔和', 'Nét mặt sáng và rõ, khuôn mặt mềm', 'Ekspresi cerah dan jelas, bentuk wajah yang lembut'),
    quote: T("당신의 인상에서는 '어려운 날에도 환하게 보는 낙천성'이 연상돼요.", 'Your face reads as an optimism that still looks for the light on a hard day.', '大変な日でも明るく見られる楽観が、印象から浮かびます。', '你的印象会让人想到：再难的日子也能看得亮一点的乐观。', '你的印象會讓人想到：再難的日子也能看得亮一點的樂觀。', 'Ấn tượng của bạn gợi một sự lạc quan, ngày khó vẫn nhìn ra phía sáng.', 'Kesan wajahmu mengingatkan pada optimisme yang tetap terang di hari yang berat.'),
    keywords: T('긍정·회복 탄력·밝은 시선', 'positivity, bounce-back, a bright view', '前向き、回復力、明るい見方', '积极、复原力、看得亮', '積極、復原力、看得亮', 'tích cực, hồi phục, nhìn về phía sáng', 'positif, cepat pulih, cara pandang yang terang'),
    shine: T('일이 꼬였을 때 분위기를 되살릴 때', 'When things get tangled and you bring the mood back.', '物事がこじれたとき、空気を立て直すとき。', '事情拧成一团时，把气氛重新带起来的时候。', '事情擰成一團時，把氣氛重新帶起來的時候。', 'Khi việc rối, lúc bạn kéo không khí trở lại.', 'Saat urusan kusut dan kamu menghidupkan suasana lagi.'),
    love: T('서운한 일도 가볍게 풀고 앞으로 나아감', 'You let a sting pass lightly and keep moving forward.', '寂しいことも軽くほどいて、前に進む。', '委屈也能轻轻放下，然后往前走。', '委屈也能輕輕放下，然後往前走。', 'Chuyện hụt hẫng cũng tháo nhẹ rồi đi tiếp.', 'Hal yang mengganjal dilepas dengan ringan, lalu maju lagi.'),
    tip: T('힘든 감정도 인정한 뒤 낙천을 쓰기', 'Name the hard feeling first, then use the optimism.', 'つらい気持ちも認めてから、楽観を使う。', '先承认难受的情绪，再用乐观。', '先承認難受的情緒，再用樂觀。', 'Nhận nỗi nặng trước, rồi mới dùng sự lạc quan.', 'Akui dulu perasaan yang berat, baru pakai optimisme.'),
    reflect: T('최근에 내가 분위기를 밝게 만든 순간은?', 'When did I last make a room feel brighter?', '最近、場の空気を明るくしたのはいつ？', '最近一次把气氛变亮，是什么时候？', '最近一次把氣氛變亮，是什麼時候？', 'Lần gần nhất mình làm không khí sáng lên là khi nào?', 'Kapan terakhir aku membuat suasana jadi lebih terang?'),
    cardPhrase: T('밝게 보는 눈이 제 장점이에요', 'Seeing the bright side is my strength.', '明るく見る目が、私の長所です。', '看得亮，是我的优点。', '看得亮，是我的優點。', 'Nhìn ra phía sáng là điểm mạnh của mình.', 'Melihat sisi terangnya adalah kekuatanku.'),
    oneLiner: T('낙천성은 큰 힘입니다. 속상한 마음도 한 번 인정해 주세요', 'Optimism is a real strength. Let the hurt have a moment too.', '楽観は大きな力です。傷ついた気持ちも、一度認めてあげて。', '乐观是很大的力气。难受的心情，也先承认一次。', '樂觀是很大的力氣。難受的心情，也先承認一次。', 'Lạc quan là sức mạnh. Nỗi buồn cũng cho nó một lần được công nhận.', 'Optimisme itu kekuatan. Perasaan yang sakit juga perlu diakui sekali.'),
    shareLine: T('얼굴로 보는 성격 장점 TOP: 낙천성 ☀️ 나 낙천성 나옴ㅋㅋ 밝게 보는 인상이래. 너는 뭐 나와?', 'The strength that shows on my face: Optimism ☀️ I got optimism. Apparently I see the bright side. What did you get?', '顔に出る長所：楽観 ☀️ 私、楽観って出た。明るく見る印象らしい。あなたは？', '脸上看出的性格优点：乐观 ☀️ 我是乐观。说我看起来看得亮。你是哪种？', '臉上看出的性格優點：樂觀 ☀️ 我是樂觀。說我看起來看得亮。你是哪種？', 'Điểm mạnh hiện trên mặt tôi: Lạc quan ☀️ Ra kiểu lạc quan. Bảo là nhìn về phía sáng. Bạn ra gì?', 'Kekuatan yang terbaca di wajahku: Optimisme ☀️ Aku yang optimis. Katanya kesannya melihat sisi terang. Kamu dapat apa?'),
  },
  {
    id: 2,
    emoji: '🎈',
    name: T('유머 감각', 'Humor', 'ユーモア', '幽默感', '幽默感', 'Khiếu hài', 'Selera humor'),
    aiRead: T('활짝 웃는 표정에 또렷한 눈매와 갸름한 윤곽', 'A wide smile, clear eyes, and a slim outline', '大きく笑う表情に、はっきりした目元とすっきりした輪郭', '笑得很开，眼神清楚，轮廓偏瘦长', '笑得很開，眼神清楚，輪廓偏瘦長', 'Cười rộng, mắt rõ, đường nét thon', 'Senyum lebar, mata yang jelas, garis wajah yang ramping'),
    quote: T("당신의 인상에서는 '함께 있으면 웃게 되는 유머 감각'이 연상돼요.", 'Your face reads as a sense of humor that makes people laugh just by being there.', '一緒にいると笑ってしまうユーモアが、印象から浮かびます。', '你的印象会让人想到：在一起就忍不住笑的幽默感。', '你的印象會讓人想到：在一起就忍不住笑的幽默感。', 'Ấn tượng của bạn gợi khiếu hài khiến người bên cạnh bật cười.', 'Kesan wajahmu mengingatkan pada selera humor yang bikin orang di sampingnya ikut tertawa.'),
    keywords: T('재치·센스·분위기 전환', 'wit, timing, turning the mood', '機転、センス、空気を変える力', '机智、分寸、带动气氛', '機智、分寸、帶動氣氛', 'nhanh trí, có duyên, đổi không khí', 'jenaka, peka momen, mengubah suasana'),
    shine: T('어색한 자리에서 웃음을 만들 때', 'When a room feels awkward and you make people laugh.', '気まずい場で、笑いを作るとき。', '场面尴尬时，把笑声带出来的时候。', '場面尷尬時，把笑聲帶出來的時候。', 'Khi chỗ đó ngượng, lúc bạn làm mọi người cười.', 'Saat suasana canggung dan kamu membuat orang tertawa.'),
    love: T('대화가 즐겁고 함께하는 시간이 가벼움', 'Talking with you is fun, and time together feels light.', '会話が楽しくて、一緒にいる時間が軽い。', '聊天很开心，在一起的时间也轻。', '聊天很開心，在一起的時間也輕。', 'Nói chuyện vui, thời gian bên nhau cũng nhẹ.', 'Bicaranya menyenangkan, dan waktu bersama terasa ringan.'),
    tip: T('진지한 순간엔 농담을 잠시 내려놓기', 'When the moment is serious, set the joke down for a bit.', '本気の場面では、冗談をいったん置く。', '认真的时候，先把玩笑放下。', '認真的時候，先把玩笑放下。', 'Lúc chuyện nghiêm, tạm để câu đùa xuống.', 'Saat momennya serius, taruh dulu leluconnya.'),
    reflect: T('최근에 누군가를 웃게 한 순간은?', 'When did I last make someone laugh?', '最近、誰かを笑わせたのはいつ？', '最近一次让人笑出来，是什么时候？', '最近一次讓人笑出來，是什麼時候？', 'Lần gần nhất mình làm ai đó cười là khi nào?', 'Kapan terakhir aku membuat seseorang tertawa?'),
    cardPhrase: T('웃음 만드는 게 특기예요', 'Making people laugh is my thing.', '笑いを作るのが得意です。', '逗人笑是我的拿手。', '逗人笑是我的拿手。', 'Làm người ta cười là sở trường.', 'Membuat orang tertawa itu keahlianku.'),
    oneLiner: T('유머는 큰 재능입니다. 진심 한 줄이 더해지면 더 오래 남습니다', 'Humor is a real gift. One sincere line makes it stay longer.', 'ユーモアは大きな才能です。本音の一行が加わると、もっと残ります。', '幽默是很大的才能。加上一句真心话，会留得更久。', '幽默是很大的才能。加上一句真心話，會留得更久。', 'Hài hước là tài năng. Thêm một câu thật lòng thì nó ở lại lâu hơn.', 'Humor itu bakat besar. Satu kalimat yang tulus membuatnya tinggal lebih lama.'),
    shareLine: T('얼굴로 보는 성격 장점 TOP: 유머 감각 🎈 나 유머 감각 나옴ㅋㅋ 웃게 만드는 인상이래. 너는 뭐 나와?', 'The strength that shows on my face: Humor 🎈 I got humor. Apparently I make people laugh. What did you get?', '顔に出る長所：ユーモア 🎈 私、ユーモアって出た。笑わせる印象らしい。あなたは？', '脸上看出的性格优点：幽默感 🎈 我是幽默感。说我看起来会逗人笑。你是哪种？', '臉上看出的性格優點：幽默感 🎈 我是幽默感。說我看起來會逗人笑。你是哪種？', 'Điểm mạnh hiện trên mặt tôi: Khiếu hài 🎈 Ra kiểu hài. Bảo là làm người ta cười. Bạn ra gì?', 'Kekuatan yang terbaca di wajahku: Selera humor 🎈 Aku yang humor. Katanya kesannya bikin orang tertawa. Kamu dapat apa?'),
  },
  {
    id: 3,
    emoji: '🕊️',
    name: T('공감 능력', 'Empathy', '共感力', '共情', '同理心', 'Thấu cảm', 'Empati'),
    aiRead: T('편안한 미소에 차분한 눈매와 포근한 얼굴 비율', 'An easy smile, calm eyes, and a soft face shape', 'くつろいだ笑みに、落ち着いた目元とやわらかい顔のバランス', '笑容放松，眼神安静，脸型偏柔和', '笑容放鬆，眼神安靜，臉型偏柔和', 'Nụ cười thoải mái, mắt điềm, khuôn mặt mềm', 'Senyum yang santai, mata yang tenang, bentuk wajah yang lembut'),
    quote: T("당신의 인상에서는 '마음을 먼저 알아주는 공감 능력'이 연상돼요.", 'Your face reads as an empathy that understands how someone feels before they explain it.', '気持ちを先にわかってくれる共感が、印象から浮かびます。', '你的印象会让人想到：先把对方的心读懂的共情。', '你的印象會讓人想到：先把對方的心讀懂的同理心。', 'Ấn tượng của bạn gợi khả năng thấu cảm, hiểu lòng người trước.', 'Kesan wajahmu mengingatkan pada empati yang mengerti hati orang lebih dulu.'),
    keywords: T('경청·다정함·정서적 안정', 'listening, warmth, a calm presence', '傾聴、やさしさ、心の安定', '会听、温柔、情绪安稳', '會聽、溫柔、情緒安穩', 'biết lắng nghe, dịu dàng, vững cảm xúc', 'mendengar, hangat, tenang secara emosional'),
    shine: T('누군가 힘든 이야기를 꺼낼 때', 'When someone starts to tell you something hard.', '誰かがつらい話を切り出したとき。', '有人开口说难处的时候。', '有人開口說難處的時候。', 'Khi ai đó bắt đầu kể chuyện nặng.', 'Saat seseorang mulai cerita yang berat.'),
    love: T('상대의 감정을 헤아리고 곁을 지킴', 'You read how they feel and stay beside them.', '相手の気持ちを汲んで、そばにいる。', '会揣摩对方的情绪，也守在旁边。', '會揣摩對方的情緒，也守在旁邊。', 'Hiểu cảm xúc của họ và ở lại bên cạnh.', 'Mengerti perasaannya dan tetap di samping.'),
    tip: T('남의 감정과 내 감정을 따로 한 줄씩 챙기기', 'Keep their feeling on one line, and yours on another.', '相手の気持ちと自分の気持ちを、一行ずつ分けて見る。', '别人的情绪和自己的情绪，各记一行。', '別人的情緒和自己的情緒，各記一行。', 'Cảm xúc của họ một dòng, của mình một dòng.', 'Perasaan orang lain satu baris, perasaanmu satu baris.'),
    reflect: T('최근에 누군가의 이야기를 끝까지 들어 준 순간은?', 'When did I last listen to someone all the way through?', '最近、誰かの話を最後まで聞いたのはいつ？', '最近一次把别人的话听到最后，是什么时候？', '最近一次把別人的話聽到最後，是什麼時候？', 'Lần gần nhất mình nghe ai đó kể đến hết là khi nào?', 'Kapan terakhir aku mendengarkan cerita seseorang sampai selesai?'),
    cardPhrase: T('마음을 먼저 알아주는 사람이에요', 'I understand how you feel first.', '気持ちを先にわかってくれる人です。', '我是会先懂你心意的人。', '我是會先懂你心意的人。', 'Mình là người hiểu lòng bạn trước.', 'Aku orang yang mengerti hatimu lebih dulu.'),
    oneLiner: T('공감은 큰 선물입니다. 내 마음도 함께 돌봐 주세요', 'Empathy is a real gift. Take care of your own heart too.', '共感は大きな贈り物です。自分の心も一緒に。', '共情是很大的礼物。自己的心也一起照顾。', '同理心是很大的禮物。自己的心也一起照顧。', 'Thấu cảm là món quà. Nhớ chăm lòng mình nữa.', 'Empati itu hadiah besar. Jaga juga hatimu sendiri.'),
    shareLine: T('얼굴로 보는 성격 장점 TOP: 공감 능력 🕊️ 나 공감 능력 나옴ㅋㅋ 마음 알아주는 인상이래. 너는 뭐 나와?', 'The strength that shows on my face: Empathy 🕊️ I got empathy. Apparently I understand how people feel. What did you get?', '顔に出る長所：共感力 🕊️ 私、共感力って出た。気持ちをわかってくれる印象らしい。あなたは？', '脸上看出的性格优点：共情 🕊️ 我是共情。说我看起来会懂人心。你是哪种？', '臉上看出的性格優點：同理心 🕊️ 我是同理心。說我看起來會懂人心。你是哪種？', 'Điểm mạnh hiện trên mặt tôi: Thấu cảm 🕊️ Ra kiểu thấu cảm. Bảo là hiểu lòng người. Bạn ra gì?', 'Kekuatan yang terbaca di wajahku: Empati 🕊️ Aku yang empati. Katanya kesannya mengerti hati orang. Kamu dapat apa?'),
  },
  {
    id: 4,
    emoji: '🎨',
    name: T('창의성', 'Creativity', '発想力', '创造力', '創造力', 'Sáng tạo', 'Kreativitas'),
    aiRead: T('은은한 미소에 느긋한 눈매와 갸름한 윤곽', 'A faint smile, unhurried eyes, and a slim outline', 'ほのかな笑みに、ゆったりした目元とすっきりした輪郭', '笑容很淡，眼神不急，轮廓偏瘦长', '笑容很淡，眼神不急，輪廓偏瘦長', 'Nụ cười nhẹ, mắt không vội, đường nét thon', 'Senyum yang samar, mata yang tidak terburu, garis wajah yang ramping'),
    quote: T("당신의 인상에서는 '남다른 시선으로 새로움을 만드는 창의성'이 연상돼요.", 'Your face reads as a creativity that makes something new from an angle other people miss.', '人とは違う目線で新しさを作る発想力が、印象から浮かびます。', '你的印象会让人想到：用不一样的眼光做出新东西的创造力。', '你的印象會讓人想到：用不一樣的眼光做出新東西的創造力。', 'Ấn tượng của bạn gợi sự sáng tạo, nhìn góc khác để làm ra điều mới.', 'Kesan wajahmu mengingatkan pada kreativitas yang membuat hal baru dari sudut yang beda.'),
    keywords: T('상상력·감성·자기만의 시선', 'imagination, feeling, a view of your own', '想像力、感性、自分だけの目線', '想象力、感性、只属于自己的眼光', '想像力、感性、只屬於自己的眼光', 'trí tưởng tượng, cảm xúc, góc nhìn riêng', 'imajinasi, rasa, cara melihat yang khas'),
    shine: T('아이디어가 필요한 순간, 이벤트를 준비할 때', 'When an idea is needed, or when you are planning something.', 'アイデアが要るとき、イベントを用意するとき。', '需要点子的时候，准备活动的时候。', '需要點子的時候，準備活動的時候。', 'Khi cần ý tưởng, lúc chuẩn bị một dịp.', 'Saat butuh ide, atau saat menyiapkan sebuah acara.'),
    love: T('일상을 특별한 이야기로 바꿈', 'You turn an ordinary day into a story.', '日常を特別な話に変える。', '把日常变成一段特别的故事。', '把日常變成一段特別的故事。', 'Biến ngày thường thành một câu chuyện riêng.', 'Mengubah hari biasa jadi cerita yang khusus.'),
    tip: T('아이디어를 작은 실행 한 가지로 옮겨 보기', 'Turn the idea into one small thing you actually do.', 'アイデアを、小さな実行ひとつに移してみる。', '把点子落到一件很小的行动上。', '把點子落到一件很小的行動上。', 'Đưa ý tưởng thành một việc nhỏ mình làm thật.', 'Pindahkan idenya ke satu langkah kecil yang benar-benar dikerjakan.'),
    reflect: T('최근에 내가 떠올린 색다른 아이디어는?', 'What unusual idea did I come up with lately?', '最近、自分が思いついたひねりのアイデアは？', '最近自己冒出来的不一样的点子是什么？', '最近自己冒出來的不一樣的點子是什麼？', 'Ý tưởng lạ mình vừa nghĩ ra gần đây là gì?', 'Ide yang beda apa yang baru aku pikirkan?'),
    cardPhrase: T('남다른 시선이 제 장점이에요', 'A different way of seeing is my strength.', '人と違う目線が、私の長所です。', '不一样的眼光，是我的优点。', '不一樣的眼光，是我的優點。', 'Góc nhìn khác là điểm mạnh của mình.', 'Cara melihat yang beda adalah kekuatanku.'),
    oneLiner: T('창의성은 큰 자산입니다. 작은 실행 하나가 아이디어를 현실로 만듭니다', 'Creativity is a real asset. One small step makes the idea real.', '発想力は大きな財産です。小さな実行ひとつが、アイデアを現実にします。', '创造力是很大的本钱。一个小行动，就能把点子变成真的。', '創造力是很大的本錢。一個小行動，就能把點子變成真的。', 'Sáng tạo là vốn lớn. Một việc nhỏ biến ý tưởng thành thật.', 'Kreativitas itu modal besar. Satu langkah kecil membuat ide jadi nyata.'),
    shareLine: T('얼굴로 보는 성격 장점 TOP: 창의성 🎨 나 창의성 나옴ㅋㅋ 남다른 시선의 인상이래. 너는 뭐 나와?', 'The strength that shows on my face: Creativity 🎨 I got creativity. Apparently I see things differently. What did you get?', '顔に出る長所：発想力 🎨 私、発想力って出た。目線が違う印象らしい。あなたは？', '脸上看出的性格优点：创造力 🎨 我是创造力。说我看起来眼光不一样。你是哪种？', '臉上看出的性格優點：創造力 🎨 我是創造力。說我看起來眼光不一樣。你是哪種？', 'Điểm mạnh hiện trên mặt tôi: Sáng tạo 🎨 Ra kiểu sáng tạo. Bảo là góc nhìn khác. Bạn ra gì?', 'Kekuatan yang terbaca di wajahku: Kreativitas 🎨 Aku yang kreatif. Katanya kesannya cara melihatnya beda. Kamu dapat apa?'),
  },
  {
    id: 5,
    emoji: '🚀',
    name: T('추진력', 'Drive', '推進力', '行动力', '行動力', 'Sức đẩy', 'Daya dorong'),
    aiRead: T('담백한 표정에 또렷한 눈매와 포근한 얼굴 비율', 'A plain expression, clear eyes, and a soft face shape', 'あっさりした表情に、はっきりした目元とやわらかい顔のバランス', '表情不多，眼神清楚，脸型偏柔和', '表情不多，眼神清楚，臉型偏柔和', 'Nét mặt giản, mắt rõ, khuôn mặt mềm', 'Ekspresi yang datar, mata yang jelas, bentuk wajah yang lembut'),
    quote: T("당신의 인상에서는 '마음먹으면 곧게 나아가는 추진력'이 연상돼요.", 'Your face reads as a drive that goes straight ahead once you decide.', '決めたらまっすぐ進む推進力が、印象から浮かびます。', '你的印象会让人想到：下了决心就一路往前的行动力。', '你的印象會讓人想到：下了決心就一路往前的行動力。', 'Ấn tượng của bạn gợi sức đẩy, đã quyết là đi thẳng.', 'Kesan wajahmu mengingatkan pada daya dorong yang jalan lurus begitu sudah memutuskan.'),
    keywords: T('결단·실행·책임 있게 이끎', 'deciding, doing, leading with care', '決断、実行、責任を持って引っ張る', '决断、行动、带着责任带人', '決斷、行動、帶著責任帶人', 'quyết đoán, làm thật, dẫn dắt có trách nhiệm', 'memutuskan, menjalankan, memimpin dengan tanggung jawab'),
    shine: T('결정을 미룰 수 없을 때, 팀을 움직일 때', 'When a decision cannot wait, or when a team needs to move.', '決断を先延ばしにできないとき、チームを動かすとき。', '决定不能再拖的时候，要带动一队人的时候。', '決定不能再拖的時候，要帶動一隊人的時候。', 'Khi không thể trì hoãn quyết định, lúc cần kéo cả nhóm đi.', 'Saat keputusan tidak bisa ditunda, atau saat tim perlu bergerak.'),
    love: T('필요한 일은 먼저 움직여 해결함', 'If something needs doing, you move first and sort it out.', '必要なことは先に動いて片づける。', '该做的事会先动起来，把它解决掉。', '該做的事會先動起來，把它解決掉。', 'Việc cần làm thì tự bước trước và giải quyết.', 'Yang perlu dikerjakan, kamu bergerak dulu dan menyelesaikannya.'),
    tip: T('속도를 낼 때 상대의 의견을 한 번 묻기', 'When you pick up speed, ask what they think once.', '速度を上げるときは、相手の意見を一度聞く。', '加快的时候，先问一次对方的想法。', '加快的時候，先問一次對方的想法。', 'Khi tăng tốc, hỏi một lần ý của họ.', 'Saat mempercepat, tanyakan sekali pendapatnya.'),
    reflect: T('최근에 내가 먼저 움직여 해낸 일은?', 'What did I move on first and actually finish lately?', '最近、先に動いてやり切ったことは？', '最近自己先动起来做成的事是什么？', '最近自己先動起來做成的事是什麼？', 'Việc gần đây mình bước trước và làm xong là gì?', 'Apa yang baru aku kerjakan duluan sampai selesai?'),
    cardPhrase: T('마음먹으면 곧게 가요', 'Once I decide, I go straight.', '決めたら、まっすぐ行きます。', '下了决心，我就走直。', '下了決心，我就走直。', 'Đã quyết là đi thẳng.', 'Sudah memutuskan, aku jalan lurus.'),
    oneLiner: T('추진력은 큰 힘입니다. 함께 가는 속도도 살펴보세요', 'Drive is a real strength. Keep an eye on the pace of the people with you.', '推進力は大きな力です。一緒に進む速度も見てみて。', '行动力是很大的力气。也看看一起走的人的速度。', '行動力是很大的力氣。也看看一起走的人的速度。', 'Sức đẩy là sức mạnh. Nhớ nhìn nhịp của người đi cùng.', 'Daya dorong itu kekuatan. Lihat juga tempo orang yang berjalan bersamamu.'),
    shareLine: T('얼굴로 보는 성격 장점 TOP: 추진력 🚀 나 추진력 나옴ㅋㅋ 곧게 나아가는 인상이래. 너는 뭐 나와?', 'The strength that shows on my face: Drive 🚀 I got drive. Apparently I go straight ahead. What did you get?', '顔に出る長所：推進力 🚀 私、推進力って出た。まっすぐ進む印象らしい。あなたは？', '脸上看出的性格优点：行动力 🚀 我是行动力。说我看起来一路往前。你是哪种？', '臉上看出的性格優點：行動力 🚀 我是行動力。說我看起來一路往前。你是哪種？', 'Điểm mạnh hiện trên mặt tôi: Sức đẩy 🚀 Ra kiểu sức đẩy. Bảo là đi thẳng tới. Bạn ra gì?', 'Kekuatan yang terbaca di wajahku: Daya dorong 🚀 Aku yang daya dorong. Katanya kesannya jalan lurus. Kamu dapat apa?'),
  },
  {
    id: 6,
    emoji: '🔎',
    name: T('섬세함', 'A fine eye', '繊細さ', '细腻', '細膩', 'Tinh tế', 'Mata yang jeli'),
    aiRead: T('담백한 표정에 또렷한 눈매와 갸름한 윤곽', 'A plain expression, clear eyes, and a slim outline', 'あっさりした表情に、はっきりした目元とすっきりした輪郭', '表情不多，眼神清楚，轮廓偏瘦长', '表情不多，眼神清楚，輪廓偏瘦長', 'Nét mặt giản, mắt rõ, đường nét thon', 'Ekspresi yang datar, mata yang jelas, garis wajah yang ramping'),
    quote: T("당신의 인상에서는 '작은 것을 놓치지 않는 섬세함'이 연상돼요.", 'Your face reads as a fine eye that does not miss the small things.', '小さなことを見逃さない繊細さが、印象から浮かびます。', '你的印象会让人想到：小事也不放过的细腻。', '你的印象會讓人想到：小事也不放過的細膩。', 'Ấn tượng của bạn gợi sự tinh tế, không bỏ sót điều nhỏ.', 'Kesan wajahmu mengingatkan pada mata yang jeli, hal kecil pun tidak terlewat.'),
    keywords: T('관찰력·배려·디테일', 'noticing, care, the details', '観察力、気配り、ディテール', '观察力、体贴、细节', '觀察力、體貼、細節', 'quan sát, quan tâm, chi tiết', 'mengamati, perhatian, detail'),
    shine: T('계획을 세울 때, 사람의 기분 변화를 알아챌 때', 'When you make a plan, or when you notice a shift in mood.', '計画を立てるとき、人の気分の変化に気づくとき。', '做计划的时候，察觉到别人心情变了的时候。', '做計畫的時候，察覺到別人心情變了的時候。', 'Khi lập kế hoạch, lúc nhận ra tâm trạng ai đó đổi.', 'Saat menyusun rencana, atau saat kamu menangkap perubahan suasana hati seseorang.'),
    love: T('상대의 작은 변화와 취향을 기억함', 'You remember the small changes and the things they like.', '相手の小さな変化と好みを覚えている。', '记得对方细小的变化和喜好。', '記得對方細小的變化和喜好。', 'Nhớ thay đổi nhỏ và sở thích của họ.', 'Mengingat perubahan kecil dan selera orang itu.'),
    tip: T('알아챈 것을 말로 꺼내 상대에게 알려 주기', 'Say the thing you noticed, so they know you saw it.', '気づいたことを言葉にして、相手に伝える。', '把察觉到的说出来，让对方知道。', '把察覺到的說出來，讓對方知道。', 'Nói ra điều mình nhận ra, để họ biết.', 'Ucapkan yang kamu perhatikan, supaya orang itu tahu.'),
    reflect: T('최근에 내가 알아챈 작은 변화는?', 'What small change did I notice lately?', '最近、自分が気づいた小さな変化は？', '最近自己察觉到的小变化是什么？', '最近自己察覺到的小變化是什麼？', 'Thay đổi nhỏ mình vừa nhận ra là gì?', 'Perubahan kecil apa yang baru aku sadari?'),
    cardPhrase: T('작은 것도 놓치지 않아요', 'I do not miss the small things.', '小さなことも見逃しません。', '小事我也不放过。', '小事我也不放過。', 'Chuyện nhỏ mình cũng không bỏ sót.', 'Hal kecil pun tidak aku lewatkan.'),
    oneLiner: T('섬세함은 큰 자산입니다. 알아챈 마음을 말로 전해 보세요', 'A fine eye is a real asset. Say the feeling you noticed.', '繊細さは大きな財産です。気づいた気持ちを言葉にしてみて。', '细腻是很大的本钱。把察觉到的心意说出来。', '細膩是很大的本錢。把察覺到的心意說出來。', 'Sự tinh tế là vốn lớn. Nói ra điều lòng mình đã nhận ra.', 'Mata yang jeli itu modal besar. Sampaikan perasaan yang kamu tangkap.'),
    shareLine: T('얼굴로 보는 성격 장점 TOP: 섬세함 🔎 나 섬세함 나옴ㅋㅋ 작은 것도 놓치지 않는 인상이래. 너는 뭐 나와?', 'The strength that shows on my face: A fine eye 🔎 I got the fine eye. Apparently I do not miss the small things. What did you get?', '顔に出る長所：繊細さ 🔎 私、繊細さって出た。小さなことも見逃さない印象らしい。あなたは？', '脸上看出的性格优点：细腻 🔎 我是细腻。说我看起来小事也不放过。你是哪种？', '臉上看出的性格優點：細膩 🔎 我是細膩。說我看起來小事也不放過。你是哪種？', 'Điểm mạnh hiện trên mặt tôi: Tinh tế 🔎 Ra kiểu tinh tế. Bảo là không bỏ sót điều nhỏ. Bạn ra gì?', 'Kekuatan yang terbaca di wajahku: Mata yang jeli 🔎 Aku yang jeli. Katanya hal kecil pun tidak terlewat. Kamu dapat apa?'),
  },
  {
    id: 7,
    emoji: '🏔️',
    name: T('신뢰감', 'Steadiness', '信頼感', '可靠', '可靠', 'Đáng tin', 'Bisa diandalkan'),
    aiRead: T('담백한 표정에 차분한 눈매와 포근한 얼굴 비율', 'A plain expression, calm eyes, and a soft face shape', 'あっさりした表情に、落ち着いた目元とやわらかい顔のバランス', '表情不多，眼神安静，脸型偏柔和', '表情不多，眼神安靜，臉型偏柔和', 'Nét mặt giản, mắt điềm, khuôn mặt mềm', 'Ekspresi yang datar, mata yang tenang, bentuk wajah yang lembut'),
    quote: T("당신의 인상에서는 '믿고 기댈 수 있는 신뢰감'이 연상돼요.", 'Your face reads as a steadiness people can lean on.', '信じて頼れる安心感が、印象から浮かびます。', '你的印象会让人想到：可以放心依靠的可靠。', '你的印象會讓人想到：可以放心依靠的可靠。', 'Ấn tượng của bạn gợi cảm giác đáng tin, có thể dựa vào.', 'Kesan wajahmu mengingatkan pada rasa percaya yang bisa dijadikan sandaran.'),
    keywords: T('일관성·약속 지킴·든든함', 'consistency, keeping promises, a solid presence', '一貫性、約束を守る、頼もしさ', '稳定、守约、让人安心', '穩定、守約、讓人安心', 'nhất quán, giữ lời, vững chãi', 'konsisten, menepati janji, bisa diandalkan'),
    shine: T('중요한 약속, 비밀을 지켜야 할 때', 'When a promise matters, or a secret needs keeping.', '大事な約束、秘密を守るべきとき。', '重要的约定，或需要守住秘密的时候。', '重要的約定，或需要守住秘密的時候。', 'Khi lời hứa quan trọng, lúc cần giữ một bí mật.', 'Saat janji itu penting, atau saat sebuah rahasia harus dijaga.'),
    love: T('말은 적어도 한결같은 태도로 곁을 지킴', 'You may say little, but you stay beside them in the same steady way.', '言葉は少なくても、変わらない態度でそばにいる。', '话不多，却用始终如一的态度守在旁边。', '話不多，卻用始終如一的態度守在旁邊。', 'Nói ít, nhưng ở bên với cùng một thái độ.', 'Katanya sedikit, tapi tetap di samping dengan sikap yang sama.'),
    tip: T('믿음직한 마음을 "고마워" 같은 한마디로 표현하기', 'Say the trust out loud, even with one word like thank you.', '頼もしい気持ちを、「ありがとう」のような一言で伝える。', '把这份可靠，用「谢谢」这样的一句话说出来。', '把這份可靠，用「謝謝」這樣的一句話說出來。', 'Nói cảm giác đáng tin ấy ra, dù chỉ một câu như cảm ơn.', 'Ucapkan rasa andal itu, meski hanya satu kata seperti terima kasih.'),
    reflect: T('최근에 약속을 끝까지 지킨 순간은?', 'When did I last keep a promise all the way?', '最近、約束を最後まで守ったのはいつ？', '最近一次把约定守到最后，是什么时候？', '最近一次把約定守到最後，是什麼時候？', 'Lần gần nhất mình giữ lời hứa đến cùng là khi nào?', 'Kapan terakhir aku menepati janji sampai akhir?'),
    cardPhrase: T('한결같음이 제 방식이에요', 'Staying the same is how I do things.', '変わらないことが、私のやり方です。', '始终如一，是我的方式。', '始終如一，是我的方式。', 'Một mực như vậy là cách của mình.', 'Tetap sama adalah caraku.'),
    oneLiner: T('신뢰감은 오래 가는 힘입니다. 마음의 표현도 한 줄 더해 보세요', 'Trust lasts. Add one line that says how you feel.', '信頼感は長く残る力です。気持ちの言葉も一行足してみて。', '可靠是能走很久的力气。心意也再补一句话。', '可靠是能走很久的力氣。心意也再補一句話。', 'Sự đáng tin là sức đi lâu. Thêm một câu cho cảm xúc nữa.', 'Rasa percaya itu kekuatan yang bertahan. Tambahkan satu kalimat untuk perasaanmu.'),
    shareLine: T('얼굴로 보는 성격 장점 TOP: 신뢰감 🏔️ 나 신뢰감 나옴ㅋㅋ 믿고 기댈 인상이래. 너는 뭐 나와?', 'The strength that shows on my face: Steadiness 🏔️ I got steadiness. Apparently people can lean on me. What did you get?', '顔に出る長所：信頼感 🏔️ 私、信頼感って出た。頼れる印象らしい。あなたは？', '脸上看出的性格优点：可靠 🏔️ 我是可靠。说我看起来可以依靠。你是哪种？', '臉上看出的性格優點：可靠 🏔️ 我是可靠。說我看起來可以依靠。你是哪種？', 'Điểm mạnh hiện trên mặt tôi: Đáng tin 🏔️ Ra kiểu đáng tin. Bảo là có thể dựa vào. Bạn ra gì?', 'Kekuatan yang terbaca di wajahku: Bisa diandalkan 🏔️ Aku yang bisa diandalkan. Katanya kesannya enak dijadikan sandaran. Kamu dapat apa?'),
  },
  {
    id: 8,
    emoji: '🛡️',
    name: T('책임감', 'Responsibility', '責任感', '责任感', '責任感', 'Trách nhiệm', 'Tanggung jawab'),
    aiRead: T('담백한 표정에 느긋한 눈매와 갸름한 윤곽', 'A plain expression, unhurried eyes, and a slim outline', 'あっさりした表情に、ゆったりした目元とすっきりした輪郭', '表情不多，眼神不急，轮廓偏瘦长', '表情不多，眼神不急，輪廓偏瘦長', 'Nét mặt giản, mắt không vội, đường nét thon', 'Ekspresi yang datar, mata yang tidak terburu, garis wajah yang ramping'),
    quote: T("당신의 인상에서는 '맡은 일을 끝까지 해내는 책임감'이 연상돼요.", 'Your face reads as a sense of responsibility that finishes what it takes on.', '引き受けたことを最後までやり切る責任感が、印象から浮かびます。', '你的印象会让人想到：接了的事就做到底的责任感。', '你的印象會讓人想到：接了的事就做到底的責任感。', 'Ấn tượng của bạn gợi tinh thần trách nhiệm, nhận việc là làm đến cùng.', 'Kesan wajahmu mengingatkan pada tanggung jawab yang menuntaskan apa yang sudah dipegang.'),
    keywords: T('성실·꾸준함·끝맺음', 'sincerity, staying with it, finishing', '誠実、コツコツ、最後まで', '认真、坚持、有始有终', '認真、堅持、有始有終', 'chăm chỉ, đều đặn, làm đến nơi', 'tekun, konsisten, menuntaskan'),
    shine: T('맡은 일의 마무리, 약속된 역할', 'Finishing what you took on, and the role you agreed to.', '引き受けた仕事の仕上げ、約束した役割。', '把接过的事收尾，守住说好的角色。', '把接過的事收尾，守住說好的角色。', 'Khâu cuối của việc đã nhận, vai đã hứa.', 'Menyelesaikan yang sudah dipegang, dan peran yang sudah disepakati.'),
    love: T('말은 차분해도 해야 할 일을 묵묵히 해냄', 'Your words stay calm, and you quietly do what needs doing.', '言葉は落ち着いていても、やるべきことを黙々とやる。', '话说得平静，该做的事却默默做完。', '話說得平靜，該做的事卻默默做完。', 'Lời nói điềm, việc phải làm thì lặng lẽ làm xong.', 'Ucapannya tenang, tapi yang harus dikerjakan diselesaikan tanpa banyak kata.'),
    tip: T('혼자 짊어지지 말고 도움을 먼저 요청하기', 'Do not carry it alone. Ask for help first.', '一人で背負わず、先に助けを頼む。', '别一个人扛，先开口求助。', '別一個人扛，先開口求助。', 'Đừng ôm một mình. Hãy xin giúp trước.', 'Jangan pikul sendiri. Minta bantuan lebih dulu.'),
    reflect: T('최근에 끝까지 책임진 일은?', 'What did I see through to the end lately?', '最近、最後まで責任を持ったことは？', '最近自己负责到最后的事是什么？', '最近自己負責到最後的事是什麼？', 'Việc gần đây mình chịu trách nhiệm đến cùng là gì?', 'Apa yang baru aku tanggung sampai selesai?'),
    cardPhrase: T('맡은 건 끝까지 해요', 'What I take on, I finish.', '引き受けたことは、最後までやります。', '接了的事，我会做到底。', '接了的事，我會做到底。', 'Việc đã nhận, mình làm đến cùng.', 'Yang sudah kupegang, kutuntaskan.'),
    oneLiner: T('책임감은 큰 자산입니다. 짐은 나눠도 괜찮습니다', 'Responsibility is a real asset. The load can be shared.', '責任感は大きな財産です。荷物は分けてもいい。', '责任感是很大的本钱。担子可以分着扛。', '責任感是很大的本錢。擔子可以分著扛。', 'Trách nhiệm là vốn lớn. Gánh có thể chia.', 'Tanggung jawab itu modal besar. Bebannya boleh dibagi.'),
    shareLine: T('얼굴로 보는 성격 장점 TOP: 책임감 🛡️ 나 책임감 나옴ㅋㅋ 끝까지 해내는 인상이래. 너는 뭐 나와?', 'The strength that shows on my face: Responsibility 🛡️ I got responsibility. Apparently I finish what I take on. What did you get?', '顔に出る長所：責任感 🛡️ 私、責任感って出た。最後までやり切る印象らしい。あなたは？', '脸上看出的性格优点：责任感 🛡️ 我是责任感。说我看起来会做到底。你是哪种？', '臉上看出的性格優點：責任感 🛡️ 我是責任感。說我看起來會做到底。你是哪種？', 'Điểm mạnh hiện trên mặt tôi: Trách nhiệm 🛡️ Ra kiểu trách nhiệm. Bảo là làm đến cùng. Bạn ra gì?', 'Kekuatan yang terbaca di wajahku: Tanggung jawab 🛡️ Aku yang tanggung jawab. Katanya kesannya menuntaskan. Kamu dapat apa?'),
  },
];

const strengthById = (id: number) => phase3FaceStrengths.find((item) => item.id === id) ?? phase3FaceStrengths[0];

export function getPhase3FaceStrength(id: number): Phase3FaceStrength {
  return strengthById(id);
}

export const PHASE3_FACE_STRENGTH_THRESHOLDS = { S: 0.3, E: 0.28, R: 0.84 } as const;
export const PHASE3_FACE_STRENGTH_MARGIN = 0.02;

type Axis = 'S' | 'E' | 'R';
const AXIS_ORDER: Axis[] = ['S', 'E', 'R'];

export function phase3FaceStrengthId(sHigh: boolean, eHigh: boolean, rHigh: boolean): number {
  if (sHigh && eHigh && rHigh) return 1;
  if (sHigh && eHigh && !rHigh) return 2;
  if (sHigh && !eHigh && rHigh) return 3;
  if (sHigh && !eHigh && !rHigh) return 4;
  if (!sHigh && eHigh && rHigh) return 5;
  if (!sHigh && eHigh && !rHigh) return 6;
  if (!sHigh && !eHigh && rHigh) return 7;
  return 8;
}

export interface Phase3FaceStrengthResult {
  primaryId: number;
  companionId: number | null;
}

export function classifyPhase3FaceStrength(metrics: Phase3FaceMetrics): Phase3FaceStrengthResult {
  const flags: Record<Axis, boolean> = {
    S: metrics.S >= PHASE3_FACE_STRENGTH_THRESHOLDS.S,
    E: metrics.E >= PHASE3_FACE_STRENGTH_THRESHOLDS.E,
    R: metrics.R >= PHASE3_FACE_STRENGTH_THRESHOLDS.R,
  };
  const primaryId = phase3FaceStrengthId(flags.S, flags.E, flags.R);
  const near = AXIS_ORDER.filter(
    (axis) => Math.abs(metrics[axis] - PHASE3_FACE_STRENGTH_THRESHOLDS[axis]) <= PHASE3_FACE_STRENGTH_MARGIN
  ).sort(
    (a, b) =>
      Math.abs(metrics[a] - PHASE3_FACE_STRENGTH_THRESHOLDS[a]) -
        Math.abs(metrics[b] - PHASE3_FACE_STRENGTH_THRESHOLDS[b]) ||
      AXIS_ORDER.indexOf(a) - AXIS_ORDER.indexOf(b)
  );
  if (near.length === 0) return { primaryId, companionId: null };
  const axis = near[0];
  const companionId = phase3FaceStrengthId(
    axis === 'S' ? !flags.S : flags.S,
    axis === 'E' ? !flags.E : flags.E,
    axis === 'R' ? !flags.R : flags.R
  );
  return { primaryId, companionId: companionId === primaryId ? null : companionId };
}

export const PHASE3_FACE_STRENGTH_META = {
  title: T('얼굴로 보는 성격 장점 TOP', 'What strength shows on my face?', '顔に出る長所、何？', '我的脸，藏着哪种优点？', '我的臉，藏著哪種優點？', 'Mặt tôi để lộ điểm mạnh nào?', 'Kekuatan apa yang kebaca dari wajahku?'),
  description: T(
    '표정과 얼굴 비율을 읽고, 인상에서 연상되는 장점 키워드 8가지 중 하나를 골라 드립니다. 사진은 기기 안에서만 분석하고 저장하거나 전송하지 않습니다.',
    'It reads your expression and face shape, then picks one of 8 strengths your look suggests. The photo stays on your device. It is never saved or sent.',
    '表情と顔のバランスを読んで、印象から連想される長所8つの中から一つを選びます。写真はこの端末の中だけで分析し、保存も送信もしません。',
    '读出表情和脸型，从印象联想到的8个优点里挑出一个。照片只在这台设备里分析，不会保存，也不会上传。',
    '讀出表情和臉型，從印象聯想到的8個優點裡挑出一個。照片只在這台裝置裡分析，不會保存，也不會上傳。',
    'Đọc nét mặt và khuôn mặt, rồi chọn một trong 8 điểm mạnh gợi ra từ ấn tượng. Ảnh chỉ được phân tích trên máy này, không lưu và không gửi đi.',
    'Membaca ekspresi dan bentuk wajah, lalu memilih satu dari 8 kekuatan yang terasa dari kesan wajah. Foto hanya dianalisis di perangkat ini, tidak disimpan dan tidak dikirim.'
  ),
  tags: {
    ko: ['얼굴', '얼굴테스트', 'AI인상분석', '연애테스트'],
    en: ['face', 'face test', 'strength', 'personality'],
    ja: ['顔', '顔テスト', '長所', '性格'],
    'zh-CN': ['脸', '脸测试', '优点', '性格'],
    'zh-TW': ['臉', '臉測驗', '優點', '性格'],
    vi: ['khuôn mặt', 'test khuôn mặt', 'điểm mạnh', 'tính cách'],
    id: ['wajah', 'tes wajah', 'kekuatan', 'kepribadian'],
  } as Record<Phase3FaceStrengthLocaleKey, string[]>,
};
