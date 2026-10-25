/**
 * 얼굴로 보는 나의 연애 약점 — phase3-face-love-weakness
 * S 미소, E 눈 개방(EAR), R 얼굴 너비/높이.
 * 기획서에 8칸 분류표가 없어, 각 유형의 'AI가 읽은 인상'으로 칸을 고정했다.
 * 밝고 또렷·활짝·편안·은은한 미소 = S 높음, 담백 = S 낮음.
 * 또렷한 눈매 = E 높음, 차분·느긋한 눈매 = E 낮음.
 * 포근한 비율 = R 높음, 갸름한 윤곽 = R 낮음.
 * 임계값 ±0.02 안의 축이 있으면 그 축만 뒤집어 '함께 보이는 습관'으로 보여 준다.
 */

import {
  averagePhase3FaceMetrics,
  measurePhase3FaceFrame,
  type Phase3FaceMetrics,
  type Phase3FaceQualityCode,
} from '@/lib/phase3FaceFirstImpressionData';

export { averagePhase3FaceMetrics, measurePhase3FaceFrame };
export type { Phase3FaceMetrics, Phase3FaceQualityCode };

export type Phase3FaceLoveWeaknessLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';
export type Phase3FaceLoveWeaknessText = Record<Phase3FaceLoveWeaknessLocaleKey, string>;

function T(ko: string, en: string, ja: string, zhCN: string, zhTW: string, vi: string, id: string): Phase3FaceLoveWeaknessText {
  return { ko, en, ja, 'zh-CN': zhCN, 'zh-TW': zhTW, vi, id };
}

export function faceLoveWeaknessText(text: Phase3FaceLoveWeaknessText, locale: string): string {
  const loc = locale as Phase3FaceLoveWeaknessLocaleKey;
  return text[loc] || text.ko;
}

export interface Phase3FaceLoveWeakness {
  id: number;
  emoji: string;
  name: Phase3FaceLoveWeaknessText;
  aiRead: Phase3FaceLoveWeaknessText;
  quote: Phase3FaceLoveWeaknessText;
  habit: Phase3FaceLoveWeaknessText;
  strength: Phase3FaceLoveWeaknessText;
  fix1: Phase3FaceLoveWeaknessText;
  fix2: Phase3FaceLoveWeaknessText;
  fix3: Phase3FaceLoveWeaknessText;
  cardPhrase: Phase3FaceLoveWeaknessText;
  oneLiner: Phase3FaceLoveWeaknessText;
  shareLine: Phase3FaceLoveWeaknessText;
}

export const phase3FaceLoveWeaknesses: Phase3FaceLoveWeakness[] = [
  {
    id: 1,
    emoji: '🚀',
    name: T('직진 과다', 'Rushes in', '直進が早い', '冲得太快', '衝得太快', 'Tiến quá nhanh', 'Terlalu cepat maju'),
    aiRead: T('밝고 또렷한 표정에 포근한 얼굴 비율', 'A bright, clear expression and a soft face shape', '明るくはっきりした表情に、やわらかい顔のバランス', '明亮清楚的表情，脸型也偏柔和', '明亮清楚的表情，臉型也偏柔和', 'Nét mặt sáng và rõ, khuôn mặt mềm', 'Ekspresi cerah dan jelas, bentuk wajah yang lembut'),
    quote: T('당신의 인상에는 \'마음이 가면 앞서 달리기 쉬운 열정\'이 담겨 있어요.', 'Your face reads as heat that runs ahead once you like someone.', 'あなたの印象には、好きになると先に走ってしまいやすい情熱があります。', '你的印象里有一种喜欢了就容易跑在前面的热。', '你的印象裡有一種喜歡了就容易跑在前面的熱。', 'Ấn tượng của bạn là nhiệt tình, thích rồi là chạy trước.', 'Kesanmu adalah semangat yang mudah lari duluan begitu suka.'),
    habit: T('호감이 생기면 속도가 빨라져 상대가 따라오기 벅찰 수 있음', 'Once you like someone, you speed up, and they can struggle to keep pace.', '気になると速度が上がって、相手がついてくるのが大変になることがある。', '一有好感速度就变快，对方可能跟不上。', '一有好感速度就變快，對方可能跟不上。', 'Vừa thích là tăng tốc, người kia có thể đuổi không kịp.', 'Begitu suka, kecepatannya naik, dan orangnya bisa kewalahan mengikuti.'),
    strength: T('마음을 숨기지 않는 솔직함과 실행력', 'You do not hide how you feel, and you actually do something about it.', '気持ちを隠さず、動ける正直さ。', '不藏心意，而且真的会去做。', '不藏心意，而且真的會去做。', 'Không giấu lòng, và làm được việc mình nghĩ.', 'Tidak menyembunyikan rasa, dan benar-benar bergerak.'),
    fix1: T('직진 뒤에 "부담되면 말해 줘" 한 문장 덧붙이기', 'After you move forward, add one line: tell me if this is too much.', '直進のあとで、負担なら言って、を一言足す。', '冲完之后补一句：如果有负担就告诉我。', '衝完之後補一句：如果有負擔就告訴我。', 'Sau khi tiến, thêm một câu: nếu nặng thì nói với mình.', 'Setelah maju, tambahkan satu kalimat: kalau keberatan, bilang saja.'),
    fix2: T('고백·제안 전에 상대의 반응을 한 번 더 살피기', 'Before a confession or a plan, look once more at how they respond.', '告白や提案の前に、相手の反応をもう一度見る。', '告白或提议之前，再看一次对方的反应。', '告白或提議之前，再看一次對方的反應。', 'Trước khi tỏ tình hay đề nghị, nhìn thêm một lần phản ứng của họ.', 'Sebelum mengaku atau mengajak, lihat sekali lagi responsnya.'),
    fix3: T('상대의 답장 속도를 내 속도와 비교하지 않기', 'Do not measure their reply speed against yours.', '相手の返信の速さを、自分の速度と比べない。', '别拿对方的回复速度和自己比。', '別拿對方的回覆速度和自己比。', 'Đừng so tốc độ trả lời của họ với tốc độ của mình.', 'Jangan bandingkan kecepatan balasnya dengan kecepatanmu.'),
    cardPhrase: T('열정은 큰 힘, 속도 확인은 한 줄이면 충분해요', 'The heat is a strength. One line to check the pace is enough.', '情熱は大きな力。速度の確認は一行で足りる。', '热情是力气。确认一下速度，一句话就够。', '熱情是力氣。確認一下速度，一句話就夠。', 'Nhiệt là sức. Một câu hỏi về nhịp là đủ.', 'Semangat itu kekuatan. Satu kalimat untuk cek tempo sudah cukup.'),
    oneLiner: T('솔직한 열정은 매력입니다. 상대의 속도만 함께 살펴보세요', 'Honest heat is attractive. Just keep an eye on their pace too.', '正直な情熱は魅力です。相手の速度も一緒に見てみて。', '坦白的热是吸引力。也一起看看对方的速度。', '坦白的熱是吸引力。也一起看看對方的速度。', 'Nhiệt tình thật là sức hút. Nhớ nhìn thêm nhịp của họ.', 'Semangat yang jujur itu daya tarik. Lihat juga tempo orangnya.'),
    shareLine: T('얼굴로 보는 나의 연애 약점: 직진 과다 🚀 나 직진 과다 나옴ㅋㅋ 열정 부자래... 너는 뭐 나와?', 'The dating habit that shows on my face: Rushes in 🚀 I got the fast one. Apparently I have a lot of heat. What did you get?', '顔に出る恋愛のクセ：直進が早い 🚀 私、直進が早いって出た。情熱が多いらしい。あなたは？', '脸上看出的恋爱习惯：冲得太快 🚀 我是冲得太快。说我热情很多。你是哪种？', '臉上看出的戀愛習慣：衝得太快 🚀 我是衝得太快。說我熱情很多。你是哪種？', 'Thói quen yêu hiện trên mặt tôi: Tiến quá nhanh 🚀 Ra kiểu tiến nhanh. Bảo là nhiều nhiệt. Bạn ra gì?', 'Kebiasaan dekat yang terbaca di wajahku: Terlalu cepat maju 🚀 Aku yang terlalu cepat. Katanya penuh semangat. Kamu dapat apa?'),
  },
  {
    id: 2,
    emoji: '👀',
    name: T('눈치 과다', 'Over-reads the room', '気を使いすぎ', '太会看脸色', '太會看臉色', 'Để ý quá mức', 'Terlalu peka suasana'),
    aiRead: T('활짝 웃는 표정에 또렷한 눈매와 갸름한 윤곽', 'A wide smile, clear eyes, and a slim outline', '大きく笑う表情に、はっきりした目元とすっきりした輪郭', '笑得很开，眼神清楚，轮廓偏瘦长', '笑得很開，眼神清楚，輪廓偏瘦長', 'Cười rộng, mắt rõ, đường nét thon', 'Senyum lebar, mata yang jelas, garis wajah yang ramping'),
    quote: T('당신의 인상에는 \'분위기를 먼저 읽는 섬세함\'이 담겨 있어요.', 'Your face reads as someone who notices the mood before anyone says it.', 'あなたの印象には、空気を先に読む繊細さがあります。', '你的印象里有一种先读懂气氛的细。', '你的印象裡有一種先讀懂氣氛的細。', 'Ấn tượng của bạn là sự tinh, đọc không khí trước.', 'Kesanmu adalah kepekaan yang membaca suasana lebih dulu.'),
    habit: T('상대의 기분을 살피다 내 마음을 뒤로 미루기 쉬움', 'You watch how they feel and put your own feeling second.', '相手の気分を見て、自分の気持ちを後回しにしがち。', '先看对方的心情，自己的心意容易往后放。', '先看對方的心情，自己的心意容易往後放。', 'Nhìn tâm trạng họ trước, lòng mình để sau.', 'Melihat suasana hatinya dulu, perasaan sendiri jadi belakangan.'),
    strength: T('상대가 편안함을 느끼게 하는 배려', 'People feel at ease around that kind of care.', '相手を安心させる気遣い。', '让对方觉得安心的体贴。', '讓對方覺得安心的體貼。', 'Sự để ý khiến người kia thấy dễ chịu.', 'Perhatian yang membuat orang di sampingnya merasa tenang.'),
    fix1: T('하루 한 번 내가 원하는 것을 한 문장으로 말해 보기', 'Once a day, say one thing you want, in one sentence.', '一日一回、欲しいことを一文で言ってみる。', '一天一次，用一句话把自己想要的说出来。', '一天一次，用一句話把自己想要的說出來。', 'Mỗi ngày một lần, nói một câu về điều mình muốn.', 'Sehari sekali, ucapkan satu kalimat tentang yang kamu inginkan.'),
    fix2: T('"상대 기분"과 "내 기분"을 따로 한 줄씩 적어 보기', 'Write their mood on one line, and yours on another.', '相手の気分と自分の気分を、一行ずつ書いてみる。', '把对方的心情和自己的心情各写一行。', '把對方的心情和自己的心情各寫一行。', 'Viết một dòng tâm trạng của họ, một dòng của mình.', 'Tulis suasana hatinya di satu baris, suasana hatimu di baris lain.'),
    fix3: T('서운한 일은 눈치 보지 말고 그날 안에 짧게 말하기', 'If something stung, say it briefly the same day. Do not wait for a hint.', '寂しいことは、空気を読まずにその日のうちに短く言う。', '委屈的事当天就短短说出来，别只靠眼色。', '委屈的事當天就短短說出來，別只靠眼色。', 'Chuyện hụt hẫng thì nói ngắn trong ngày, đừng chỉ nhìn sắc mặt.', 'Kalau ada yang mengganjal, katakan singkat di hari yang sama. Jangan hanya membaca suasana.'),
    cardPhrase: T('배려는 큰 장점, 내 마음도 같이 챙겨요', 'The care is a real strength. Keep a little room for your own feeling.', '気遣いは大きな長所。自分の気持ちも一緒に。', '体贴是优点。自己的心意也一起带着。', '體貼是優點。自己的心意也一起帶著。', 'Sự để ý là điểm mạnh. Lòng mình cũng nhớ mang theo.', 'Kepekaan itu kelebihan. Perasaanmu juga ikut dijaga.'),
    oneLiner: T('섬세함은 선물입니다. 내 몫의 마음도 말로 꺼내 보세요', 'That sensitivity is a gift. Say your share of the feeling out loud too.', '繊細さは贈り物です。自分の分の気持ちも言葉にしてみて。', '细是礼物。自己那一份心意也说出来。', '細是禮物。自己那一份心意也說出來。', 'Sự tinh là quà. Phần lòng của mình cũng nói ra.', 'Kepekaan itu hadiah. Bagian perasaanmu juga diucapkan.'),
    shareLine: T('얼굴로 보는 나의 연애 약점: 눈치 과다 👀 나 눈치 과다 나옴ㅋㅋ 섬세한 거래... 너는 뭐 나와?', 'The dating habit that shows on my face: Over-reads the room 👀 I got the sensitive one. Apparently I notice everything. What did you get?', '顔に出る恋愛のクセ：気を使いすぎ 👀 私、気を使いすぎって出た。繊細らしい。あなたは？', '脸上看出的恋爱习惯：太会看脸色 👀 我是太会看脸色。说我很细。你是哪种？', '臉上看出的戀愛習慣：太會看臉色 👀 我是太會看臉色。說我很細。你是哪種？', 'Thói quen yêu hiện trên mặt tôi: Để ý quá mức 👀 Ra kiểu tinh. Bạn ra gì?', 'Kebiasaan dekat yang terbaca di wajahku: Terlalu peka suasana 👀 Katanya aku yang terlalu membaca suasana. Kamu dapat apa?'),
  },
  {
    id: 3,
    emoji: '🤝',
    name: T('의존 경향', 'Leans on them', '頼りすぎがち', '容易依赖', '容易依賴', 'Dễ dựa dẫm', 'Cenderung bergantung'),
    aiRead: T('편안한 미소에 차분한 눈매와 포근한 얼굴 비율', 'An easy smile, calm eyes, and a soft face shape', 'くつろいだ笑みに、落ち着いた目元とやわらかい顔のバランス', '笑容放松，眼神安静，脸型偏柔和', '笑容放鬆，眼神安靜，臉型偏柔和', 'Nụ cười thoải mái, mắt điềm, khuôn mặt mềm', 'Senyum yang santai, mata yang tenang, bentuk wajah yang lembut'),
    quote: T('당신의 인상에는 \'함께일 때 가장 편안한 따뜻함\'이 담겨 있어요.', 'Your face reads as warmth that feels most at ease when someone is there.', 'あなたの印象には、一緒にいるときがいちばん安心するあたたかさがあります。', '你的印象里有一种在一起时最安心的暖。', '你的印象裡有一種在一起時最安心的暖。', 'Ấn tượng của bạn là sự ấm, có người bên cạnh là dễ chịu nhất.', 'Kesanmu adalah kehangatan yang paling tenang saat ada seseorang di samping.'),
    habit: T('연인에게 마음의 중심을 많이 두어 혼자 시간이 불안할 수 있음', 'You put a lot of your center on them, so time alone can feel uneasy.', '恋人に心の中心を置きすぎて、ひとりの時間が不安になることがある。', '心的重心放在对方身上太多，一个人的时候容易不安。', '心的重心放在對方身上太多，一個人的時候容易不安。', 'Đặt trọng tâm ở người ấy nhiều, lúc một mình dễ bất an.', 'Pusat hatinya terlalu banyak di orang itu, jadi waktu sendiri bisa terasa gelisah.'),
    strength: T('깊은 유대와 헌신을 소중히 여기는 마음', 'You take closeness and showing up for someone seriously.', '深い結びつきと献身を大切にする気持ち。', '很在意深的连接，也愿意付出。', '很在意深的連結，也願意付出。', 'Coi trọng sự gắn và việc ở lại vì người kia.', 'Menghargai kedekatan yang dalam dan kesediaan untuk ada.'),
    fix1: T('연인 없이도 즐거운 나만의 활동 한 가지 정해 두기', 'Pick one thing you enjoy even when they are not around.', '恋人がいなくても楽しい、自分だけのことを一つ決めておく。', '先定一件没有对方也开心的自己的事。', '先定一件沒有對方也開心的自己的事。', 'Chọn một việc mình vẫn vui dù không có người ấy.', 'Tentukan satu hal yang tetap menyenangkan meski orang itu tidak ada.'),
    fix2: T('외로움이 올라올 때 연락할 친구 한 명 정해 두기', 'Name one friend you can text when the loneliness shows up.', 'さびしさが上がってきたら連絡する友だちを一人決めておく。', '先定一个寂寞上来时可以联系的朋友。', '先定一個寂寞上來時可以聯絡的朋友。', 'Chọn một người bạn để nhắn khi thấy trống.', 'Tentukan satu teman yang bisa dihubungi saat sepi itu naik.'),
    fix3: T('일주일에 한 번은 각자 시간을 갖는 날로 정하기', 'Once a week, make a day where each of you has your own time.', '週に一度は、それぞれ自分の時間を持つ日にする。', '一周留一天，各自过自己的时间。', '一週留一天，各自過自己的時間。', 'Một lần mỗi tuần, để một ngày mỗi người có thời gian riêng.', 'Seminggu sekali, sisakan hari untuk waktu masing-masing.'),
    cardPhrase: T('함께도 좋고 혼자도 좋은 균형을 연습 중이에요', 'Together is good. Alone can be good too. That balance is the practice.', '一緒もいいし、ひとりもいい。そのバランスを練習中。', '在一起也好，一个人也好。这个平衡还在练。', '在一起也好，一個人也好。這個平衡還在練。', 'Có nhau cũng hay, một mình cũng được. Đang tập cái cân đó.', 'Bersama enak, sendiri juga boleh. Keseimbangan itu sedang dilatih.'),
    oneLiner: T('유대는 큰 힘입니다. 나를 채우는 시간도 함께 만들어 주세요', 'Closeness is a real strength. Leave some time that fills you, too.', '結びつきは大きな力です。自分を満たす時間も一緒に作って。', '连接是力量。也留一点把自己装满的时间。', '連結是力量。也留一點把自己裝滿的時間。', 'Sự gắn là sức. Cũng để thời gian lấp đầy mình.', 'Kedekatan itu kekuatan. Sisakan juga waktu yang mengisi dirimu.'),
    shareLine: T('얼굴로 보는 나의 연애 약점: 의존 경향 🤝 나 의존 경향 나옴ㅋㅋ 유대가 깊은 거래... 너는 뭐 나와?', 'The dating habit that shows on my face: Leans on them 🤝 I got the close one. Apparently the bond runs deep. What did you get?', '顔に出る恋愛のクセ：頼りすぎがち 🤝 私、頼りすぎがちって出た。結びつきが深いらしい。あなたは？', '脸上看出的恋爱习惯：容易依赖 🤝 我是容易依赖。说我连接很深。你是哪种？', '臉上看出的戀愛習慣：容易依賴 🤝 我是容易依賴。說我連結很深。你是哪種？', 'Thói quen yêu hiện trên mặt tôi: Dễ dựa dẫm 🤝 Ra kiểu gắn sâu. Bạn ra gì?', 'Kebiasaan dekat yang terbaca di wajahku: Cenderung bergantung 🤝 Katanya ikatannya dalam. Kamu dapat apa?'),
  },
  {
    id: 4,
    emoji: '🔒',
    name: T('표현 부족', 'Hard to say it', '言葉が少ない', '不太会说', '不太會說', 'Khó nói ra', 'Susah mengatakannya'),
    aiRead: T('은은한 미소에 느긋한 눈매와 갸름한 윤곽', 'A faint smile, unhurried eyes, and a slim outline', 'ほのかな笑みに、ゆったりした目元とすっきりした輪郭', '笑容很淡，眼神不急，轮廓偏瘦长', '笑容很淡，眼神不急，輪廓偏瘦長', 'Nụ cười nhẹ, mắt không vội, đường nét thon', 'Senyum yang samar, mata yang tidak terburu, garis wajah yang ramping'),
    quote: T('당신의 인상에는 \'마음은 깊은데 말은 아끼는 조용함\'이 담겨 있어요.', 'Your face reads as quiet: the feeling is deep, and the words stay few.', 'あなたの印象には、心は深いのに言葉は控える静けさがあります。', '你的印象里有一种心很深、话却很少的安静。', '你的印象裡有一種心很深、話卻很少的安靜。', 'Ấn tượng của bạn là sự yên: lòng sâu, lời thì ít.', 'Kesanmu adalah ketenangan: hatinya dalam, kata-katanya sedikit.'),
    habit: T('좋은 마음도 속에만 두어 상대가 확신을 못 가질 수 있음', 'Even a warm feeling can stay inside, so they may not feel sure.', 'いい気持ちも中だけに置いて、相手が確信を持てないことがある。', '好的心意也只放在心里，对方可能拿不准。', '好的心意也只放在心裡，對方可能拿不準。', 'Tình tốt cũng để trong lòng, người kia có thể không chắc.', 'Perasaan yang baik pun tinggal di dalam, jadi orangnya bisa tidak yakin.'),
    strength: T('말을 가볍게 하지 않는 진중함', 'You do not spend words lightly.', '言葉を軽くしない重み。', '不把话说轻的郑重。', '不把話說輕的鄭重。', 'Không nói cho có.', 'Tidak mengucapkan sesuatu dengan ringan.'),
    fix1: T('하루 한 번 "고마워" 또는 "좋았어" 한마디 꺼내기', 'Once a day, let out one thank you or one that was good.', '一日一回、ありがとうか、よかった、を一言出してみる。', '一天一次，说出一句谢谢或一句挺好的。', '一天一次，說出一句謝謝或一句挺好的。', 'Mỗi ngày một lần, nói một câu cảm ơn hoặc một câu thấy ổn.', 'Sehari sekali, keluarkan satu terima kasih atau satu kalimat bahwa itu enak.'),
    fix2: T('말이 어려우면 메시지나 이모티콘으로 먼저 표현하기', 'If speaking is hard, start with a message or a sticker.', '言葉が難しければ、メッセージやスタンプで先に出してみる。', '话说不出口，就先用消息或表情。', '話說不出口，就先用訊息或貼圖。', 'Nếu nói khó, nhắn tin hoặc gửi sticker trước.', 'Kalau bicara terasa sulit, mulai dari pesan atau stiker.'),
    fix3: T('"표현은 서툴지만 마음은 커"라고 미리 알려 두기', 'Tell them early: I am clumsy with words, and the feeling is big.', '表現は下手だけど、気持ちは大きい、と先に伝えておく。', '先告诉对方：我不太会说，可心意很大。', '先告訴對方：我不太會說，可心意很大。', 'Nói trước: mình vụng lời, nhưng lòng thì lớn.', 'Bilang dari awal: aku canggung mengatakannya, tapi rasanya besar.'),
    cardPhrase: T('마음은 큰데 표현이 서툴러요, 연습 중!', 'The feeling is big. The words are still in practice.', '気持ちは大きいのに、表現が不器用。練習中。', '心意很大，表达还笨。正在练。', '心意很大，表達還笨。正在練。', 'Lòng thì lớn, lời còn vụng. Đang tập.', 'Perasaannya besar, kata-katanya masih kaku. Sedang berlatih.'),
    oneLiner: T('진중함은 매력입니다. 한마디만 꺼내도 마음이 훨씬 잘 닿습니다', 'That weight is attractive. One sentence is enough for the feeling to land.', '重みは魅力です。一言出すだけでも、気持ちはずっと届きやすくなります。', '郑重是吸引力。拿出一句话，心就好到得多。', '鄭重是吸引力。拿出一句話，心就好到得多。', 'Sự kỹ là sức hút. Một câu thôi là lòng chạm dễ hơn nhiều.', 'Bobot itu daya tarik. Satu kalimat saja sudah membuat perasaan jauh lebih sampai.'),
    shareLine: T('얼굴로 보는 나의 연애 약점: 표현 부족 🔒 나 표현 부족 나옴ㅋㅋ 마음은 큰데 서툰 거래. 너는 뭐 나와?', 'The dating habit that shows on my face: Hard to say it 🔒 I got the quiet one. The feeling is big, the words are clumsy. What did you get?', '顔に出る恋愛のクセ：言葉が少ない 🔒 私、言葉が少ないって出た。気持ちは大きいのに不器用らしい。あなたは？', '脸上看出的恋爱习惯：不太会说 🔒 我是不太会说。心意大，嘴笨。你是哪种？', '臉上看出的戀愛習慣：不太會說 🔒 我是不太會說。心意大，嘴笨。你是哪種？', 'Thói quen yêu hiện trên mặt tôi: Khó nói ra 🔒 Lòng lớn mà lời vụng. Bạn ra gì?', 'Kebiasaan dekat yang terbaca di wajahku: Susah mengatakannya 🔒 Perasaannya besar, kata-katanya kaku. Kamu dapat apa?'),
  },
  {
    id: 5,
    emoji: '🌶️',
    name: T('질투 많음', 'Gets jealous', '嫉妬しやすい', '容易吃醋', '容易吃醋', 'Hay ghen', 'Mudah cemburu'),
    aiRead: T('담백한 표정에 또렷한 눈매와 포근한 얼굴 비율', 'A plain expression, clear eyes, and a soft face shape', 'あっさりした表情に、はっきりした目元とやわらかい顔のバランス', '表情不多，眼神清楚，脸型偏柔和', '表情不多，眼神清楚，臉型偏柔和', 'Nét mặt giản, mắt rõ, khuôn mặt mềm', 'Ekspresi yang datar, mata yang jelas, bentuk wajah yang lembut'),
    quote: T('당신의 인상에는 \'소중한 관계를 지키고 싶은 마음\'이 담겨 있어요.', 'Your face reads as someone who wants to keep a relationship that matters.', 'あなたの印象には、大切な関係を守りたい気持ちがあります。', '你的印象里有一种想守住重要关系的心。', '你的印象裡有一種想守住重要關係的心。', 'Ấn tượng của bạn là muốn giữ mối quan hệ mình quý.', 'Kesanmu adalah keinginan menjaga hubungan yang penting.'),
    habit: T('연인의 주변 관계에 마음이 쓰여 불안이 올라오기 쉬움', 'Their other connections can sit on your mind, and the worry comes up fast.', '恋人の周りの関係が気になって、不安が上がりやすい。', '对方身边的关系容易挂在心上，不安来得快。', '對方身邊的關係容易掛在心上，不安來得快。', 'Quan hệ quanh người ấy dễ mắc trong đầu, bất an lên nhanh.', 'Hubungan di sekitar orang itu mudah mengganjal, dan cemasnya naik cepat.'),
    strength: T('관계에 대한 애착과 책임감', 'You are attached, and you take the relationship seriously.', '関係への愛着と責任感。', '对这段关系有在意，也有责任。', '對這段關係有在意，也有責任。', 'Có gắn bó và trách nhiệm với mối quan hệ.', 'Ada keterikatan dan rasa tanggung jawab pada hubungan itu.'),
    fix1: T('불안할 때 "신경 쓰였어"라고 비난 없이 말하기', 'When it spikes, say it bothered you, without turning it into blame.', '不安なときは、責めずに、気になった、と言う。', '不安的时候，不指责，只说我在意了。', '不安的時候，不指責，只說我在意了。', 'Khi bất an, nói là mình để ý, không biến thành trách.', 'Saat gelisah, katakan bahwa itu mengganjal, tanpa menyalahkan.'),
    fix2: T('확인하고 싶은 마음이 들면 10분 뒤에 다시 생각하기', 'If you want to check, wait ten minutes and think again.', '確かめたくなったら、10分後にもう一度考えてみる。', '想确认的时候，先等十分钟再想。', '想確認的時候，先等十分鐘再想。', 'Muốn hỏi cho chắc thì đợi mười phút rồi nghĩ lại.', 'Kalau ingin memastikan, tunggu sepuluh menit lalu pikirkan lagi.'),
    fix3: T('확인된 사실과 내 상상을 나눠 적어 보기', 'Write what you actually know on one side, and what you imagined on the other.', '確認できた事実と、自分の想像を分けて書いてみる。', '把确认过的事实和自己的想象分开写。', '把確認過的事實和自己的想像分開寫。', 'Viết riêng việc đã rõ và phần mình tưởng tượng.', 'Tulis terpisah apa yang sudah pasti dan apa yang hanya kamu bayangkan.'),
    cardPhrase: T('질투는 소중하다는 신호, 말로 풀면 가벼워져요', 'Jealousy is a signal that someone matters. Saying it out loud makes it lighter.', '嫉妬は大切だという合図。言葉にすると軽くなる。', '吃醋是在意的信号。说出来就轻一点。', '吃醋是在意的信號。說出來就輕一點。', 'Ghen là dấu ai đó quan trọng. Nói ra thì nhẹ hơn.', 'Cemburu adalah tanda bahwa seseorang penting. Diucapkan, jadi lebih ringan.'),
    oneLiner: T('애착은 관계의 뿌리입니다. 불안을 말로 바꾸면 한결 가벼워집니다', 'Attachment is the root of a relationship. Turn the worry into words and it gets lighter.', '愛着は関係の根です。不安を言葉に変えると、ずっと軽くなります。', '在意是关系的根。把不安换成话说出来，会轻很多。', '在意是關係的根。把不安換成話說出來，會輕很多。', 'Sự gắn là gốc của quan hệ. Đổi bất an thành lời là nhẹ hơn hẳn.', 'Keterikatan adalah akar hubungan. Ubah cemas jadi kata, dan rasanya jauh lebih ringan.'),
    shareLine: T('얼굴로 보는 나의 연애 약점: 질투 많음 🌶️ 나 질투 많음 나옴ㅋㅋ 애착이 큰 거래... 너는 뭐 나와?', 'The dating habit that shows on my face: Gets jealous 🌶️ I got the jealous one. Apparently I care a lot. What did you get?', '顔に出る恋愛のクセ：嫉妬しやすい 🌶️ 私、嫉妬しやすいって出た。愛着が大きいらしい。あなたは？', '脸上看出的恋爱习惯：容易吃醋 🌶️ 我是容易吃醋。说我很在意。你是哪种？', '臉上看出的戀愛習慣：容易吃醋 🌶️ 我是容易吃醋。說我很在意。你是哪種？', 'Thói quen yêu hiện trên mặt tôi: Hay ghen 🌶️ Ra kiểu gắn nhiều. Bạn ra gì?', 'Kebiasaan dekat yang terbaca di wajahku: Mudah cemburu 🌶️ Katanya keterikatannya besar. Kamu dapat apa?'),
  },
  {
    id: 6,
    emoji: '🔍',
    name: T('의심 많음', 'Needs reassurance', '確認が多め', '想确认太多', '想確認太多', 'Hay cần xác nhận', 'Terlalu ingin memastikan'),
    aiRead: T('담백한 표정에 또렷한 눈매와 갸름한 윤곽', 'A plain expression, clear eyes, and a slim outline', 'あっさりした表情に、はっきりした目元とすっきりした輪郭', '表情不多，眼神清楚，轮廓偏瘦长', '表情不多，眼神清楚，輪廓偏瘦長', 'Nét mặt giản, mắt rõ, đường nét thon', 'Ekspresi yang datar, mata yang jelas, garis wajah yang ramping'),
    quote: T('당신의 인상에는 \'충분히 확인하고 믿고 싶은 신중함\'이 담겨 있어요.', 'Your face reads as caution: you want to check enough before you trust.', 'あなたの印象には、十分確かめてから信じたい慎重さがあります。', '你的印象里有一种想确认够了再相信的谨慎。', '你的印象裡有一種想確認夠了再相信的謹慎。', 'Ấn tượng của bạn là sự kỹ: muốn chắc rồi mới tin.', 'Kesanmu adalah kehati-hatian: ingin cukup yakin sebelum percaya.'),
    habit: T('확신이 설 때까지 확인하다 상대에게 의심으로 비칠 수 있음', 'You keep checking until you are sure, and it can look like doubt to them.', '確信がつくまで確認して、相手には疑いのように見えることがある。', '确认到自己放心为止，对方可能会觉得被怀疑。', '確認到自己放心為止，對方可能會覺得被懷疑。', 'Cứ xác nhận đến khi chắc, người kia có thể thấy như bị nghi.', 'Terus memastikan sampai yakin, dan bagi orangnya itu bisa terasa seperti curiga.'),
    strength: T('위험 신호를 잘 알아채는 신중한 판단', 'You notice warning signs, and you do not rush a judgment.', '危険のサインをよく見つけて、判断を急がない。', '看得出危险信号，判断也不急。', '看得出危險信號，判斷也不急。', 'Nhận ra dấu hiệu rủi ro, và không vội kết luận.', 'Pandai melihat tanda bahaya, dan tidak terburu menilai.'),
    fix1: T('의심 대신 "이 부분이 궁금해"라고 질문으로 바꾸기', 'Instead of a suspicion, turn it into a question: I am curious about this part.', '疑いの代わりに、ここが気になる、と質問に変える。', '别用怀疑，改成问题：这部分我想知道。', '別用懷疑，改成問題：這部分我想知道。', 'Đổi nghi thành câu hỏi: phần này mình muốn biết.', 'Alih-alih curiga, ubah jadi pertanyaan: bagian ini ingin kutahu.'),
    fix2: T('믿을 수 있었던 순간을 하루 한 가지 떠올려 적기', 'Once a day, write down one moment you were able to trust.', '信じられた瞬間を、一日一つ思い出して書いてみる。', '一天想起一件你曾经能相信的事，写下来。', '一天想起一件你曾經能相信的事，寫下來。', 'Mỗi ngày nhớ một lúc mình đã tin được, rồi ghi lại.', 'Sehari sekali, ingat satu momen saat kamu bisa percaya, lalu tulis.'),
    fix3: T('확인 횟수의 상한을 정해 두기', 'Decide a limit for how many times you will check.', '確認する回数の上限を決めておく。', '先给确认的次数定一个上限。', '先給確認的次數定一個上限。', 'Đặt sẵn mức tối đa cho số lần hỏi lại.', 'Tentukan batas berapa kali kamu boleh memastikan.'),
    cardPhrase: T('신중함은 장점, 질문으로 바꾸면 더 편해요', 'The caution is a strength. A question is easier to live with than a suspicion.', '慎重さは長所。質問に変えると、もっと楽になる。', '谨慎是优点。换成问题会轻松一点。', '謹慎是優點。換成問題會輕鬆一點。', 'Sự kỹ là điểm mạnh. Đổi thành câu hỏi thì dễ thở hơn.', 'Kehati-hatian itu kelebihan. Diubah jadi pertanyaan, jadi lebih ringan.'),
    oneLiner: T('신중함은 큰 자산입니다. 추측을 질문으로 바꿔 보세요', 'Caution is a real asset. Turn a guess into a question.', '慎重さは大きな資産です。推測を質問に変えてみて。', '谨慎是本事。把猜测换成问题。', '謹慎是本事。把猜測換成問題。', 'Sự kỹ là vốn. Đổi phỏng đoán thành câu hỏi.', 'Kehati-hatian itu modal. Ubah dugaan menjadi pertanyaan.'),
    shareLine: T('얼굴로 보는 나의 연애 약점: 의심 많음 🔍 나 의심 많음 나옴ㅋㅋ 신중한 거래... 너는 뭐 나와?', 'The dating habit that shows on my face: Needs reassurance 🔍 I got the careful one. Apparently I like to be sure. What did you get?', '顔に出る恋愛のクセ：確認が多め 🔍 私、確認が多めって出た。慎重らしい。あなたは？', '脸上看出的恋爱习惯：想确认太多 🔍 我是想确认太多。说我谨慎。你是哪种？', '臉上看出的戀愛習慣：想確認太多 🔍 我是想確認太多。說我謹慎。你是哪種？', 'Thói quen yêu hiện trên mặt tôi: Hay cần xác nhận 🔍 Ra kiểu thận trọng. Bạn ra gì?', 'Kebiasaan dekat yang terbaca di wajahku: Terlalu ingin memastikan 🔍 Katanya aku hati-hati. Kamu dapat apa?'),
  },
  {
    id: 7,
    emoji: '📐',
    name: T('완벽주의', 'Has to get it right', '完璧にしたい', '想做到完美', '想做到完美', 'Muốn làm cho đúng', 'Mau sempurna'),
    aiRead: T('담백한 표정에 차분한 눈매와 포근한 얼굴 비율', 'A plain expression, calm eyes, and a soft face shape', 'あっさりした表情に、落ち着いた目元とやわらかい顔のバランス', '表情不多，眼神安静，脸型偏柔和', '表情不多，眼神安靜，臉型偏柔和', 'Nét mặt giản, mắt điềm, khuôn mặt mềm', 'Ekspresi yang datar, mata yang tenang, bentuk wajah yang lembut'),
    quote: T('당신의 인상에는 \'잘하고 싶은 성실한 마음\'이 담겨 있어요.', 'Your face reads as someone who wants to do it well.', 'あなたの印象には、ちゃんとやりたい誠実さがあります。', '你的印象里有一种想做好的认真。', '你的印象裡有一種想做好的認真。', 'Ấn tượng của bạn là sự chỉn chu, muốn làm cho tử tế.', 'Kesanmu adalah kesungguhan orang yang ingin melakukannya dengan baik.'),
    habit: T('연애도 잘해야 한다는 기준이 높아 스스로와 상대에게 엄격해질 수 있음', 'The bar for dating gets high, and you can turn strict on yourself and on them.', '恋愛も上手くやるべきだという基準が高くなって、自分にも相手にも厳しくなることがある。', '恋爱也想做好的标准一高，就容易对自己和对方都严。', '戀愛也想做好的標準一高，就容易對自己和對方都嚴。', 'Chuẩn yêu cao thì dễ khắt khe với mình và với họ.', 'Standar untuk hubungan jadi tinggi, dan kamu bisa keras pada diri sendiri maupun pada orang itu.'),
    strength: T('책임감 있고 정성을 다하는 태도', 'You take responsibility, and you put real care into it.', '責任感があって、丁寧に向き合う態度。', '有责任，也肯认真对待。', '有責任，也肯認真對待。', 'Có trách nhiệm và để tâm thật.', 'Ada rasa tanggung jawab, dan sikap yang sungguh-sungguh.'),
    fix1: T('기준을 \'꼭 필요한 3가지\'와 \'있으면 좋은 것\'으로 나누기', 'Split the list into three things that matter, and the rest that would be nice.', '基準を、必要な3つと、あれば嬉しいことに分ける。', '把标准分成必须的三件，和有了更好的那些。', '把標準分成必須的三件，和有了更好的那些。', 'Chia chuẩn thành ba thứ cần, và phần có thì tốt.', 'Bagi ukurannya jadi tiga hal yang perlu, dan sisanya yang enak kalau ada.'),
    fix2: T('작은 실수는 "괜찮아, 다음에"로 넘겨 보기', 'Let a small miss go with: it is fine, next time.', '小さな失敗は、大丈夫、次に、で流してみる。', '小失误就用下次没关系放过去。', '小失誤就用下次沒關係放過去。', 'Chuyện nhỏ thì buông bằng một câu: ổn, lần sau.', 'Kesalahan kecil dilepas dengan: tidak apa, lain kali.'),
    fix3: T('상대의 서툰 점에서 좋았던 점 하나 찾아 말하기', 'Find one thing you liked in the part of them that is still clumsy.', '相手の不器用なところから、よかった点を一つ見つけて言う。', '在对方笨拙的地方，找出一件好的说出来。', '在對方笨拙的地方，找出一件好的說出來。', 'Trong chỗ vụng của họ, tìm một điểm hay rồi nói.', 'Di bagian canggungnya, cari satu hal yang kamu suka lalu katakan.'),
    cardPhrase: T('잘하고 싶은 마음, 여유 한 스푼이면 완벽해요', 'Wanting to do it well is enough. One spoon of room makes it kinder.', 'ちゃんとやりたい気持ちに、余裕をひとさじ。', '想做好的心，加一勺余地就刚好。', '想做好的心，加一勺餘地就剛好。', 'Muốn làm tốt, thêm một thìa rộng là vừa.', 'Keinginan untuk melakukannya dengan baik, ditambah sesendok ruang, sudah pas.'),
    oneLiner: T('성실함은 큰 힘입니다. 여유가 더해지면 관계가 편안해집니다', 'That care is a strength. A little room makes the relationship easier to sit in.', '誠実さは大きな力です。余裕が加わると、関係が楽になります。', '认真是力量。加上一点余地，关系会松一点。', '認真是力量。加上一點餘地，關係會鬆一點。', 'Sự chỉn chu là sức. Thêm chút rộng là quan hệ dễ thở hơn.', 'Kesungguhan itu kekuatan. Sedikit ruang membuat hubungannya lebih ringan.'),
    shareLine: T('얼굴로 보는 나의 연애 약점: 완벽주의 📐 나 완벽주의 나옴ㅋㅋ 성실한 거래... 너는 뭐 나와?', 'The dating habit that shows on my face: Has to get it right 📐 I got the high-standard one. Apparently I am earnest. What did you get?', '顔に出る恋愛のクセ：完璧にしたい 📐 私、完璧にしたいって出た。誠実らしい。あなたは？', '脸上看出的恋爱习惯：想做到完美 📐 我是想做到完美。说我很认真。你是哪种？', '臉上看出的戀愛習慣：想做到完美 📐 我是想做到完美。說我很認真。你是哪種？', 'Thói quen yêu hiện trên mặt tôi: Muốn làm cho đúng 📐 Ra kiểu chỉn chu. Bạn ra gì?', 'Kebiasaan dekat yang terbaca di wajahku: Mau sempurna 📐 Katanya aku sungguh-sungguh. Kamu dapat apa?'),
  },
  {
    id: 8,
    emoji: '🚪',
    name: T('회피 경향', 'Steps back', '距離を置きがち', '容易往后退', '容易往後退', 'Dễ lùi một bước', 'Cenderung menjauh'),
    aiRead: T('담백한 표정에 느긋한 눈매와 갸름한 윤곽', 'A plain expression, unhurried eyes, and a slim outline', 'あっさりした表情に、ゆったりした目元とすっきりした輪郭', '表情不多，眼神不急，轮廓偏瘦长', '表情不多，眼神不急，輪廓偏瘦長', 'Nét mặt giản, mắt không vội, đường nét thon', 'Ekspresi yang datar, mata yang tidak terburu, garis wajah yang ramping'),
    quote: T('당신의 인상에는 \'거리를 두며 마음을 지키는 조용함\'이 담겨 있어요.', 'Your face reads as quiet distance: you step back to keep your heart safe.', 'あなたの印象には、距離を置いて心を守る静けさがあります。', '你的印象里有一种拉开一点距离、把心守住的安静。', '你的印象裡有一種拉開一點距離、把心守住的安靜。', 'Ấn tượng của bạn là sự yên, lùi một bước để giữ lòng.', 'Kesanmu adalah ketenangan yang menjaga hati dengan memberi jarak.'),
    habit: T('감정이 커지면 한 걸음 물러나 상대가 거리감을 느낄 수 있음', 'When the feeling gets big, you take a step back, and they can feel the gap.', '感情が大きくなると一歩下がって、相手が距離を感じることがある。', '感情一大就往后退一步，对方可能觉得有距离。', '感情一大就往後退一步，對方可能覺得有距離。', 'Cảm xúc lớn là lùi một bước, người kia có thể thấy khoảng cách.', 'Saat perasaannya membesar, kamu mundur selangkah, dan orangnya bisa merasakan jarak.'),
    strength: T('감정이 격해지기 전에 멈출 줄 아는 절제', 'You can stop before a feeling gets too hot.', '感情が荒れる前に止まれる自制。', '情绪变猛之前，知道停下来。', '情緒變猛之前，知道停下來。', 'Biết dừng trước khi cảm xúc quá nóng.', 'Tahu berhenti sebelum perasaan menjadi terlalu panas.'),
    fix1: T('물러서기 전에 "정리하고 올게, 저녁에 다시 얘기하자"라고 시간 말하기', 'Before you leave, name the time: I need to sort this, let us talk again tonight.', '下がる前に、整理してくる、夜にもう一度話そう、と時間を言う。', '退之前先说时间：我去理一理，晚上再谈。', '退之前先說時間：我去理一理，晚上再談。', 'Trước khi lùi, nói giờ: mình sắp xếp rồi tối nói tiếp.', 'Sebelum menjauh, sebut waktunya: aku rapikan dulu, malam ini kita bicara lagi.'),
    fix2: T('작은 갈등부터 5분만 자리에 머물러 보기', 'For a small disagreement, stay in the room for five minutes first.', '小さな衝突から、5分だけその場に残ってみる。', '从小的别扭开始，先在原地留五分钟。', '從小的彆扭開始，先在原地留五分鐘。', 'Với chuyện nhỏ, ở lại chỗ đó năm phút đã.', 'Untuk gesekan kecil, tinggal di tempat itu lima menit dulu.'),
    fix3: T('연락이 뜸할 땐 "생각하고 있어" 한 줄 남기기', 'If you have gone quiet, leave one line: I am thinking of you.', '連絡が空いたときは、考えてる、と一行残す。', '联系变少的时候，留一句我在想你。', '聯絡變少的時候，留一句我在想你。', 'Khi ít nhắn, để lại một dòng: mình vẫn nghĩ đến.', 'Saat kabar jadi jarang, tinggalkan satu baris: aku sedang memikirkanmu.'),
    cardPhrase: T('물러서도 돌아올 시간을 말하는 연습 중이에요', 'You can step back. Just say when you are coming back.', '下がっても、戻る時間を言う練習中。', '退也可以。正在练把回来的时间说出来。', '退也可以。正在練把回來的時間說出來。', 'Lùi cũng được. Đang tập nói giờ mình quay lại.', 'Menjauh boleh. Sedang berlatih menyebut kapan kembali.'),
    oneLiner: T('거리 두기도 나를 지키는 방법입니다. 돌아올 시간을 말하면 신뢰가 지켜집니다', 'Distance can protect you. Naming when you return protects the trust.', '距離を置くのも自分を守る方法です。戻る時間を言えば、信頼は守られます。', '拉开距离也是保护自己。把回来的时间说出来，信任就还在。', '拉開距離也是保護自己。把回來的時間說出來，信任就還在。', 'Khoảng cách cũng là cách giữ mình. Nói giờ quay lại là giữ được tin.', 'Jarak juga cara menjaga diri. Menyebut waktu kembali menjaga kepercayaannya.'),
    shareLine: T('얼굴로 보는 나의 연애 약점: 회피 경향 🚪 나 회피 경향 나옴ㅋㅋ 돌아올 시간만 말하면 된대... 너는 뭐 나와?', 'The dating habit that shows on my face: Steps back 🚪 I got the one who needs space. Apparently I just have to say when I am coming back. What did you get?', '顔に出る恋愛のクセ：距離を置きがち 🚪 私、距離を置きがちって出た。戻る時間を言えばいいらしい。あなたは？', '脸上看出的恋爱习惯：容易往后退 🚪 我是容易往后退。把回来的时间说出来就好。你是哪种？', '臉上看出的戀愛習慣：容易往後退 🚪 我是容易往後退。把回來的時間說出來就好。你是哪種？', 'Thói quen yêu hiện trên mặt tôi: Dễ lùi một bước 🚪 Chỉ cần nói giờ quay lại. Bạn ra gì?', 'Kebiasaan dekat yang terbaca di wajahku: Cenderung menjauh 🚪 Katanya cukup menyebut kapan kembali. Kamu dapat apa?'),
  },
];

const weaknessById = (id: number) => phase3FaceLoveWeaknesses.find((item) => item.id === id) ?? phase3FaceLoveWeaknesses[0];

export function getPhase3FaceLoveWeakness(id: number): Phase3FaceLoveWeakness {
  return weaknessById(id);
}

export const PHASE3_FACE_LOVE_WEAKNESS_THRESHOLDS = { S: 0.3, E: 0.28, R: 0.84 } as const;
export const PHASE3_FACE_LOVE_WEAKNESS_MARGIN = 0.02;

type Axis = 'S' | 'E' | 'R';
const AXIS_ORDER: Axis[] = ['S', 'E', 'R'];

export function phase3FaceLoveWeaknessId(sHigh: boolean, eHigh: boolean, rHigh: boolean): number {
  if (sHigh && eHigh && rHigh) return 1;
  if (sHigh && eHigh && !rHigh) return 2;
  if (sHigh && !eHigh && rHigh) return 3;
  if (sHigh && !eHigh && !rHigh) return 4;
  if (!sHigh && eHigh && rHigh) return 5;
  if (!sHigh && eHigh && !rHigh) return 6;
  if (!sHigh && !eHigh && rHigh) return 7;
  return 8;
}

export interface Phase3FaceLoveWeaknessResult {
  primaryId: number;
  companionId: number | null;
}

export function classifyPhase3FaceLoveWeakness(metrics: Phase3FaceMetrics): Phase3FaceLoveWeaknessResult {
  const flags: Record<Axis, boolean> = {
    S: metrics.S >= PHASE3_FACE_LOVE_WEAKNESS_THRESHOLDS.S,
    E: metrics.E >= PHASE3_FACE_LOVE_WEAKNESS_THRESHOLDS.E,
    R: metrics.R >= PHASE3_FACE_LOVE_WEAKNESS_THRESHOLDS.R,
  };
  const primaryId = phase3FaceLoveWeaknessId(flags.S, flags.E, flags.R);
  const near = AXIS_ORDER.filter(
    (axis) => Math.abs(metrics[axis] - PHASE3_FACE_LOVE_WEAKNESS_THRESHOLDS[axis]) <= PHASE3_FACE_LOVE_WEAKNESS_MARGIN
  ).sort(
    (a, b) =>
      Math.abs(metrics[a] - PHASE3_FACE_LOVE_WEAKNESS_THRESHOLDS[a]) -
        Math.abs(metrics[b] - PHASE3_FACE_LOVE_WEAKNESS_THRESHOLDS[b]) ||
      AXIS_ORDER.indexOf(a) - AXIS_ORDER.indexOf(b)
  );
  if (near.length === 0) return { primaryId, companionId: null };
  const axis = near[0];
  const companionId = phase3FaceLoveWeaknessId(
    axis === 'S' ? !flags.S : flags.S,
    axis === 'E' ? !flags.E : flags.E,
    axis === 'R' ? !flags.R : flags.R
  );
  return { primaryId, companionId: companionId === primaryId ? null : companionId };
}

export const PHASE3_FACE_LOVE_WEAKNESS_META = {
  title: T('얼굴로 보는 나의 연애 약점', 'What dating habit shows on my face?', '顔に出る恋愛のクセ、何？', '我的脸，暴露了哪种恋爱习惯？', '我的臉，暴露了哪種戀愛習慣？', 'Mặt tôi để lộ thói quen yêu nào?', 'Wajahku kebaca kebiasaan dekat yang mana?'),
  description: T('사진 한 장에서 표정과 얼굴 비율을 읽고, 나와 어울려 보이는 연애 습관 키워드 8가지 중 하나와 보완법을 알려 드립니다. 사진은 기기 안에서만 분석하고 저장하거나 전송하지 않습니다.', 'One photo reads your expression and face shape, then names the dating habit that fits you from 8, plus a way to soften it. The photo stays on your device. It is never saved or sent.', '写真1枚から表情と顔のバランスを読んで、あなたに見えやすい恋愛のクセを8つから一つ選び、整え方も添えます。写真はこの端末の中だけで分析し、保存も送信もしません。', '一张照片读出表情和脸型，从8个恋爱习惯里选出最像你的一个，并附上调整方法。照片只在这台设备里分析，不会保存，也不会上传。', '一張照片讀出表情和臉型，從8個戀愛習慣裡選出最像你的一個，並附上調整方法。照片只在這台裝置裡分析，不會保存，也不會上傳。', 'Một tấm ảnh đọc nét mặt và khuôn mặt, rồi chọn thói quen yêu gần bạn nhất trong 8 kiểu, kèm cách chỉnh nhẹ. Ảnh chỉ được phân tích trên máy này, không lưu và không gửi đi.', 'Satu foto membaca ekspresi dan bentuk wajah, lalu memilih kebiasaan dekat yang paling mirip kamu dari 8 pilihan, plus cara merapikannya. Foto hanya dianalisis di perangkat ini, tidak disimpan dan tidak dikirim.'),
  tags: {
    ko: ['얼굴', '얼굴테스트', 'AI인상분석', '연애테스트'],
    en: ['face', 'face test', 'dating habit', 'dating'],
    ja: ['顔', '顔テスト', '恋愛', 'クセ'],
    'zh-CN': ['脸', '脸测试', '恋爱', '习惯'],
    'zh-TW': ['臉', '臉測驗', '戀愛', '習慣'],
    vi: ['khuôn mặt', 'test khuôn mặt', 'thói quen yêu', 'hẹn hò'],
    id: ['wajah', 'tes wajah', 'kebiasaan dekat', 'kenalan'],
  } as Record<Phase3FaceLoveWeaknessLocaleKey, string[]>,
};
