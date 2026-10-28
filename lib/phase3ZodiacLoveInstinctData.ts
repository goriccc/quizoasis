/**
 * 별자리로 보는 연애 본능 — phase3-zodiac-love-instinct
 * 문항 없음. 12별자리 중 1개 선택 → 1:1 결과.
 */

export type Phase3ZodiacLoveLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';
export type Phase3ZodiacLoveText = Record<Phase3ZodiacLoveLocaleKey, string>;
export type Phase3ZodiacElement = 'fire' | 'earth' | 'air' | 'water';

function T(ko: string, en: string, ja: string, zhCN: string, zhTW: string, vi: string, id: string): Phase3ZodiacLoveText {
  return { ko, en, ja, 'zh-CN': zhCN, 'zh-TW': zhTW, vi, id };
}

export function zodiacLoveText(text: Phase3ZodiacLoveText, locale: string): string {
  const loc = locale as Phase3ZodiacLoveLocaleKey;
  return text[loc] || text.ko;
}

export interface Phase3ZodiacLoveInstinct {
  id: number;
  symbol: string;
  emoji: string;
  element: Phase3ZodiacElement;
  name: Phase3ZodiacLoveText;
  dateRange: Phase3ZodiacLoveText;
  shortTitle: Phase3ZodiacLoveText;
  blendLabel: Phase3ZodiacLoveText;
  instinct: Phase3ZodiacLoveText;
  loveStyle: Phase3ZodiacLoveText;
  charm: Phase3ZodiacLoveText;
  caution: Phase3ZodiacLoveText;
  talkTip: Phase3ZodiacLoveText;
  cardPhrase: Phase3ZodiacLoveText;
  oneLiner: Phase3ZodiacLoveText;
  shareLine: Phase3ZodiacLoveText;
}

const D = T('3/21~4/19', 'Mar 21–Apr 19', '3/21〜4/19', '3/21–4/19', '3/21–4/19', '21/3–19/4', '21 Mar–19 Apr');
const D2 = T('4/20~5/20', 'Apr 20–May 20', '4/20〜5/20', '4/20–5/20', '4/20–5/20', '20/4–20/5', '20 Apr–20 May');
const D3 = T('5/21~6/21', 'May 21–Jun 21', '5/21〜6/21', '5/21–6/21', '5/21–6/21', '21/5–21/6', '21 May–21 Jun');
const D4 = T('6/22~7/22', 'Jun 22–Jul 22', '6/22〜7/22', '6/22–7/22', '6/22–7/22', '22/6–22/7', '22 Jun–22 Jul');
const D5 = T('7/23~8/22', 'Jul 23–Aug 22', '7/23〜8/22', '7/23–8/22', '7/23–8/22', '23/7–22/8', '23 Jul–22 Aug');
const D6 = T('8/23~9/22', 'Aug 23–Sep 22', '8/23〜9/22', '8/23–9/22', '8/23–9/22', '23/8–22/9', '23 Aug–22 Sep');
const D7 = T('9/23~10/22', 'Sep 23–Oct 22', '9/23〜10/22', '9/23–10/22', '9/23–10/22', '23/9–22/10', '23 Sep–22 Oct');
const D8 = T('10/23~11/22', 'Oct 23–Nov 22', '10/23〜11/22', '10/23–11/22', '10/23–11/22', '23/10–22/11', '23 Oct–22 Nov');
const D9 = T('11/23~12/21', 'Nov 23–Dec 21', '11/23〜12/21', '11/23–12/21', '11/23–12/21', '23/11–21/12', '23 Nov–21 Dec');
const D10 = T('12/22~1/19', 'Dec 22–Jan 19', '12/22〜1/19', '12/22–1/19', '12/22–1/19', '22/12–19/1', '22 Dec–19 Jan');
const D11 = T('1/20~2/18', 'Jan 20–Feb 18', '1/20〜2/18', '1/20–2/18', '1/20–2/18', '20/1–18/2', '20 Jan–18 Feb');
const D12 = T('2/19~3/20', 'Feb 19–Mar 20', '2/19〜3/20', '2/19–3/20', '2/19–3/20', '19/2–20/3', '19 Feb–20 Mar');

export const phase3ZodiacLoveInstincts: Phase3ZodiacLoveInstinct[] = [
  {
    id: 1,
    symbol: '♈',
    emoji: '🔥',
    element: 'fire',
    name: T('양자리', 'Aries', '牡羊座', '白羊座', '牡羊座', 'Bạch Dương', 'Aries'),
    dateRange: D,
    shortTitle: T('직진', 'Goes straight in', 'まっすぐ', '直球', '直球', 'Tiến thẳng', 'Langsung maju'),
    blendLabel: T('빠른 시작', 'a fast start', '早いスタート', '快热启动', '快熱啟動', 'khởi đầu nhanh', 'awal yang cepat'),
    instinct: T('마음이 가면 먼저 움직이는 직진', 'Once you feel it, you move first', '好きなら先に動くまっすぐさ', '心动了就先动手的直球', '心動了就先動手的直球', 'Thích rồi là tiến trước', 'Kalau sudah suka, kamu gerak duluan'),
    loveStyle: T('호감 표현이 솔직하고 시작이 빠름', 'You show interest clearly and start fast', '好意を素直に出して、始まりが早い', '好感表达很直接，开始得也快', '好感表達很直接，開始得也快', 'Bày tỏ thích rõ ràng và bắt đầu nhanh', 'Ekspresi sukanya jujur, dan mulainya cepat'),
    charm: T('망설임 없는 용기와 활기', 'Fearless courage and energy', '迷わない勇気と元気', '不犹豫的勇气和活力', '不猶豫的勇氣和活力', 'Can đảm không do dự và năng lượng', 'Keberanian tanpa ragu dan semangat'),
    caution: T('속도가 빨라 상대가 따라오기 벅차지 않은지 살피기', 'Check whether your pace is too much for them', '速さが相手を置いてきぼりにしていないか見る', '看看速度会不会让对方跟不上', '看看速度會不會讓對方跟不上', 'Xem nhịp của mình có khiến họ đuổi không kịp không', 'Cek apakah temponya terlalu cepat buat mereka'),
    talkTip: T('천천히 가는 사람에게는 "부담되면 말해 줘"를 먼저 건네기', 'With someone slower, say first: tell me if this feels like too much', 'ゆっくりな人には「負担なら言って」を先に伝える', '对走得慢的人，先说一句：有负担就告诉我', '對走得慢的人，先說一句：有負擔就告訴我', 'Với người đi chậm, nói trước: nếu nặng thì bảo mình', 'Kalau orangnya pelan, bilang dulu: kalau keberatan, katakan saja'),
    cardPhrase: T('마음이 가면 먼저 달려요', 'When I feel it, I run first', '気持ちが動いたら、先に走る', '心动了，我就先跑', '心動了，我就先跑', 'Thích rồi là chạy trước', 'Kalau sudah suka, aku lari duluan'),
    oneLiner: T('직진은 용기입니다. 상대의 속도만 한 번 확인해 보세요', 'Going straight is brave. Just check their pace once.', 'まっすぐは勇気。相手の速度だけ一度見てみて。', '直球是勇气。也看一眼对方的速度。', '直球是勇氣。也看一眼對方的速度。', 'Tiến thẳng là can đảm. Nhớ nhìn nhịp của họ một lần.', 'Langsung maju itu berani. Cek sekali tempo orangnya.'),
    shareLine: T(
      '별자리로 보는 연애 본능: 양자리 ♈ 마음이 가면 먼저 달린대ㅋㅋ 카드 저장! 내 친구 별자리 맞혀봐',
      'Love instinct by sign: Aries ♈ Apparently I run first when I like someone. Save the card!',
      '星座の恋愛本能：牡羊座 ♈ 好きになると先に走るらしい。カード保存！',
      '星座恋爱本能：白羊座 ♈ 说我心动了就先跑。卡片存好！',
      '星座戀愛本能：牡羊座 ♈ 說我心動了就先跑。卡片存好！',
      'Bản năng yêu theo cung: Bạch Dương ♈ Bảo là thích rồi chạy trước. Lưu thẻ nhé!',
      'Insting cinta zodiak: Aries ♈ Katanya kalau suka aku lari duluan. Simpan kartunya!'
    ),
  },
  {
    id: 2,
    symbol: '♉',
    emoji: '🌿',
    element: 'earth',
    name: T('황소자리', 'Taurus', '牡牛座', '金牛座', '金牛座', 'Kim Ngưu', 'Taurus'),
    dateRange: D2,
    shortTitle: T('안정', 'Steady', '安定', '踏实', '踏實', 'Ổn định', 'Stabil'),
    blendLabel: T('느린 확신', 'slow certainty', 'ゆっくりした確信', '慢慢建立的笃定', '慢慢建立的篤定', 'chắc chắn chậm rãi', 'keyakinan yang pelan'),
    instinct: T('천천히 믿음을 쌓는 안정', 'You build trust slowly and steadily', 'ゆっくり信頼を積む安定', '慢慢把信任堆起来的踏实', '慢慢把信任堆起來的踏實', 'Từ từ dựng niềm tin một cách ổn định', 'Membangun percaya secara pelan dan stabil'),
    loveStyle: T('한번 마음을 주면 한결같고 편안한 일상을 만듦', 'Once you give your heart, you stay steady and make everyday life feel easy', '一度心を開いたら一貫していて、日常を心地よくする', '一旦交心就很专一，把日常变得舒服', '一旦交心就很專一，把日常變得舒服', 'Một khi trao lòng thì một mực, làm ngày thường dễ chịu', 'Begitu hati diberikan, kamu konsisten dan bikin hari-hari nyaman'),
    charm: T('믿음직한 꾸준함과 감각적인 다정함', 'Reliable consistency and sensory warmth', '頼れる継続力と感覚的な優しさ', '靠得住的坚持，和讲究感觉的温柔', '靠得住的堅持，和講究感覺的溫柔', 'Sự đều đặn đáng tin và sự dịu dàng có cảm giác', 'Konsistensi yang bisa diandalkan dan kehangatan yang terasa'),
    caution: T('익숙함 속에서도 작은 변화와 표현을 더하기', 'Even in the familiar, add a little change and a little expression', '慣れの中でも小さな変化と表現を足す', '在熟悉里也加点小变化和表达', '在熟悉裡也加點小變化和表達', 'Trong cái quen cũng thêm chút đổi mới và bày tỏ', 'Di tengah yang biasa, tambahkan sedikit perubahan dan ekspresi'),
    talkTip: T('변화가 필요할 땐 "이번엔 새로운 걸 같이 해 보자"로 제안하기', 'When change is needed, suggest: let’s try something new together this time', '変化が要るときは「今度は新しいことを一緒に」と提案する', '需要变化时，提议：这次一起试试新的', '需要變化時，提議：這次一起試試新的', 'Khi cần đổi, đề nghị: lần này mình thử cái mới cùng nhau', 'Kalau butuh perubahan, ajak: kali ini coba yang baru bareng-bareng'),
    cardPhrase: T('천천히, 단단하게 사랑해요', 'I love slowly, and solidly', 'ゆっくり、しっかり愛する', '慢慢地、稳稳地爱', '慢慢地、穩穩地愛', 'Yêu chậm mà chắc', 'Aku mencintai dengan pelan dan kokoh'),
    oneLiner: T('꾸준함은 큰 신뢰입니다. 작은 새로움도 함께 즐겨 보세요', 'Consistency builds trust. Enjoy a little newness together too.', '継続は大きな信頼。小さな新しさも一緒に楽しんで。', '坚持是很大的信任。也一起尝尝一点新鲜。', '堅持是很大的信任。也一起嘗嘗一點新鮮。', 'Sự đều đặn là niềm tin lớn. Nhớ cùng thưởng thức chút mới mẻ.', 'Konsistensi itu kepercayaan besar. Nikmati juga sedikit yang baru bersama.'),
    shareLine: T(
      '별자리로 보는 연애 본능: 황소자리 ♉ 천천히 단단하게 사랑한대ㅎㅎ 카드 저장! 내 친구 별자리 맞혀봐',
      'Love instinct by sign: Taurus ♉ Apparently I love slowly and solidly. Save the card!',
      '星座の恋愛本能：牡牛座 ♉ ゆっくりしっかり愛するらしい。カード保存！',
      '星座恋爱本能：金牛座 ♉ 说我慢慢稳稳地爱。卡片存好！',
      '星座戀愛本能：金牛座 ♉ 說我慢慢穩穩地愛。卡片存好！',
      'Bản năng yêu theo cung: Kim Ngưu ♉ Bảo là yêu chậm mà chắc. Lưu thẻ nhé!',
      'Insting cinta zodiak: Taurus ♉ Katanya aku mencintai dengan pelan dan kokoh. Simpan kartunya!'
    ),
  },
  {
    id: 3,
    symbol: '♊',
    emoji: '💬',
    element: 'air',
    name: T('쌍둥이자리', 'Gemini', '双子座', '双子座', '雙子座', 'Song Tử', 'Gemini'),
    dateRange: D3,
    shortTitle: T('대화', 'Talk', '会話', '聊天', '聊天', 'Trò chuyện', 'Obrolan'),
    blendLabel: T('말로 가까워짐', 'getting close through talk', '会話で近づく', '用说话靠近', '用說話靠近', 'gần nhau bằng lời', 'dekat lewat obrolan'),
    instinct: T('대화로 가까워지는 소통', 'You grow close through conversation', '会話で近づくコミュニケーション', '靠聊天靠近的沟通', '靠聊天靠近的溝通', 'Gần nhau nhờ trò chuyện', 'Dekat lewat komunikasi'),
    loveStyle: T('재치 있는 대화와 호기심으로 관계를 가볍고 즐겁게 만듦', 'Wit and curiosity keep the relationship light and fun', '機知と好奇心で関係を軽く楽しくする', '用机智和好奇心把关系变得轻松好玩', '用機智和好奇心把關係變得輕鬆好玩', 'Khiếu hài và tò mò làm quan hệ nhẹ và vui', 'Obrolan cerdas dan rasa penasaran bikin hubungan ringan dan seru'),
    charm: T('말이 통하는 즐거움과 다양한 관심사', 'The joy of clicking in talk, and wide interests', '話が通じる楽しさと幅広い関心', '聊得来的快乐，和广泛的兴趣', '聊得來的快樂，和廣泛的興趣', 'Niềm vui nói chuyện hợp và nhiều sở thích', 'Senangnya ngobrol nyambung, plus minat yang luas'),
    caution: T('진지한 마음은 농담 없이 한 번 더 전하기', 'Say the serious feeling once more, without a joke', '本気の気持ちは冗談なしでもう一度伝える', '认真的心意，别靠玩笑，再说一次', '認真的心意，別靠玩笑，再說一次', 'Lòng nghiêm túc thì nói thêm một lần, không đùa', 'Perasaan yang serius disampaikan sekali lagi tanpa lelucon'),
    talkTip: T('깊은 이야기는 "오늘은 진지하게 얘기해도 돼?"로 시작하기', 'For deeper talk, start with: can we get serious for a bit today?', '深い話は「今日は真剣に話してもいい？」から', '深聊时先问：今天可以认真一点吗？', '深聊時先問：今天可以認真一點嗎？', 'Chuyện sâu thì mở bằng: hôm nay nói nghiêm được không?', 'Obrolan dalam dimulai dengan: boleh serius sebentar hari ini?'),
    cardPhrase: T('대화가 곧 설렘이에요', 'Talking is the spark', '会話が、ときめき', '聊天就是心动', '聊天就是心動', 'Nói chuyện chính là rạo rực', 'Ngobrol itu yang bikin deg-degan'),
    oneLiner: T('소통은 큰 재능입니다. 진심 한 줄이 더해지면 더 깊어집니다', 'Talk is a real gift. One sincere line makes it deeper.', 'コミュニケーションは大きな才能。本音の一行でさらに深くなる。', '沟通是很大的才能。加一句真心话会更深。', '溝通是很大的才能。加一句真心話會更深。', 'Giao tiếp là tài năng. Thêm một câu thật lòng thì sâu hơn.', 'Komunikasi itu bakat. Satu kalimat tulus membuatnya lebih dalam.'),
    shareLine: T(
      '별자리로 보는 연애 본능: 쌍둥이자리 ♊ 대화가 곧 설렘이래ㅋㅋ 카드 저장! 내 친구 별자리 맞혀봐',
      'Love instinct by sign: Gemini ♊ Apparently talking is my spark. Save the card!',
      '星座の恋愛本能：双子座 ♊ 会話がときめきらしい。カード保存！',
      '星座恋爱本能：双子座 ♊ 说聊天就是我的心动。卡片存好！',
      '星座戀愛本能：雙子座 ♊ 說聊天就是我的心動。卡片存好！',
      'Bản năng yêu theo cung: Song Tử ♊ Bảo là nói chuyện chính là rạo rực. Lưu thẻ nhé!',
      'Insting cinta zodiak: Gemini ♊ Katanya ngobrol itu yang bikin deg-degan. Simpan kartunya!'
    ),
  },
  {
    id: 4,
    symbol: '♋',
    emoji: '🫧',
    element: 'water',
    name: T('게자리', 'Cancer', '蟹座', '巨蟹座', '巨蟹座', 'Cự Giải', 'Cancer'),
    dateRange: D4,
    shortTitle: T('보살핌', 'Care', '守り', '呵护', '呵護', 'Chăm sóc', 'Perhatian'),
    blendLabel: T('포근한 돌봄', 'soft care', 'あたたかい守り', '柔软的照顾', '柔軟的照顧', 'sự chăm sóc ấm', 'perhatian yang hangat'),
    instinct: T('마음을 품어 주는 보살핌', 'You hold someone’s heart with care', '心を抱きしめる守り', '把心放进怀里的呵护', '把心放進懷裡的呵護', 'Ôm lấy lòng người bằng sự chăm sóc', 'Merangkul hati orang dengan perhatian'),
    loveStyle: T('상대의 기분을 세심히 살피고 집 같은 편안함을 줌', 'You notice how they feel and give a home-like ease', '相手の気分を細かく見て、家のような安心を渡す', '细看对方的心情，给人像家一样的安心', '細看對方的心情，給人像家一樣的安心', 'Để ý tâm trạng họ và cho cảm giác như ở nhà', 'Memperhatikan suasana hatinya dan memberi rasa seperti di rumah'),
    charm: T('깊은 공감과 따뜻한 돌봄', 'Deep empathy and warm care', '深い共感とあたたかいケア', '深深的共情和温暖的照顾', '深深的同理和溫暖的照顧', 'Thấu cảm sâu và chăm sóc ấm', 'Empati yang dalam dan perhatian yang hangat'),
    caution: T('상처받지 않으려 속마음을 숨기기보다 한 줄씩 말하기', 'Instead of hiding to stay unhurt, say one line at a time', '傷つかないために隠すより、一行ずつ話す', '别为了不受伤而藏着，一行一行说出来', '別為了不受傷而藏著，一行一行說出來', 'Đừng giấu để khỏi đau; nói từng câu một', 'Jangan disembunyikan supaya tidak sakit. Ucapkan baris demi baris'),
    talkTip: T('서운함은 "비난이 아니라 알려 주고 싶어서"라고 시작하기', 'When you’re hurt, start with: I’m not blaming you, I just want you to know', '寂しさは「責めたいんじゃなく、伝えたくて」から', '委屈时先说：不是要怪你，只是想让你知道', '委屈時先說：不是要怪你，只是想讓你知道', 'Khi hụt hẫng, mở bằng: không phải trách, chỉ muốn cho bạn biết', 'Kalau ada yang mengganjal, mulai dengan: bukan menyalahkan, cuma ingin kamu tahu'),
    cardPhrase: T('마음을 포근히 품어요', 'I hold hearts softly', '心を、やさしく抱く', '我把心轻轻抱住', '我把心輕輕抱住', 'Mình ôm lòng người thật ấm', 'Aku merangkul hati dengan lembut'),
    oneLiner: T('돌봄은 큰 선물입니다. 내 마음도 돌봐 주세요', 'Care is a real gift. Take care of your own heart too.', '守りは大きな贈り物。自分の心も大切に。', '呵护是很大的礼物。自己的心也照顾一下。', '呵護是很大的禮物。自己的心也照顧一下。', 'Chăm sóc là món quà. Nhớ chăm lòng mình nữa.', 'Perhatian itu hadiah besar. Jaga juga hatimu sendiri.'),
    shareLine: T(
      '별자리로 보는 연애 본능: 게자리 ♋ 마음을 포근히 품는대ㅎㅎ 카드 저장! 내 친구 별자리 맞혀봐',
      'Love instinct by sign: Cancer ♋ Apparently I hold hearts softly. Save the card!',
      '星座の恋愛本能：蟹座 ♋ 心をやさしく抱くらしい。カード保存！',
      '星座恋爱本能：巨蟹座 ♋ 说我会把心轻轻抱住。卡片存好！',
      '星座戀愛本能：巨蟹座 ♋ 說我會把心輕輕抱住。卡片存好！',
      'Bản năng yêu theo cung: Cự Giải ♋ Bảo là ôm lòng người thật ấm. Lưu thẻ nhé!',
      'Insting cinta zodiak: Cancer ♋ Katanya aku merangkul hati dengan lembut. Simpan kartunya!'
    ),
  },
  {
    id: 5,
    symbol: '♌',
    emoji: '☀️',
    element: 'fire',
    name: T('사자자리', 'Leo', '獅子座', '狮子座', '獅子座', 'Sư Tử', 'Leo'),
    dateRange: D5,
    shortTitle: T('당당한 표현', 'Bold affection', '堂々と伝える', '大大方方表达', '大大方方表達', 'Bày tỏ đàng hoàng', 'Ekspresi yang berani'),
    blendLabel: T('큰 애정 표현', 'big affection', '大きな愛情表現', '大大的爱意', '大大的愛意', 'bày tỏ tình cảm lớn', 'ungkapan sayang yang besar'),
    instinct: T('당당하고 화끈한 표현', 'Bold, warm expression', '堂々として熱い表現', '大大方方又热烈的表达', '大大方方又熱烈的表達', 'Bày tỏ đàng hoàng và nồng nhiệt', 'Ekspresi yang berani dan hangat'),
    loveStyle: T('사랑을 크게 표현하고 기념일을 특별하게 만듦', 'You show love big and make dates feel special', '愛を大きく表して、記念日を特別にする', '把爱说得很满，把纪念日做得特别', '把愛說得很滿，把紀念日做得特別', 'Bày tỏ yêu lớn và làm ngày kỷ niệm đặc biệt', 'Menunjukkan cinta dengan besar dan membuat hari spesial terasa istimewa'),
    charm: T('따뜻한 카리스마와 아낌없는 애정', 'Warm charisma and generous affection', 'あたたかいカリスマと惜しまない愛情', '温暖的魅力和不吝啬的爱', '溫暖的魅力和不吝嗇的愛', 'Sức hút ấm và tình cảm không tiếc', 'Karisma yang hangat dan kasih yang tidak pelit'),
    caution: T('인정받고 싶은 마음을 솔직하게 말로 요청하기', 'Ask out loud for the recognition you want', '認められたい気持ちを素直に言葉で頼む', '想被看见的心，直接用嘴说出来', '想被看見的心，直接用嘴說出來', 'Muốn được công nhận thì nói thẳng ra', 'Kalau ingin diakui, minta dengan kata-kata yang jujur'),
    talkTip: T('칭찬 한마디가 큰 힘이 되니 구체적으로 표현해 주기', 'One specific compliment goes a long way', '褒め言葉が大きな力になるので、具体的に伝える', '一句具体的称赞很有用', '一句具體的稱讚很有用', 'Một lời khen cụ thể rất có sức', 'Satu pujian yang spesifik sangat berarti'),
    cardPhrase: T('사랑은 크게, 환하게!', 'Love big, and bright!', '愛は大きく、明るく！', '爱要大大的、亮亮的！', '愛要大大的、亮亮的！', 'Yêu lớn, và sáng!', 'Cinta itu besar, dan terang!'),
    oneLiner: T('당당한 애정은 매력입니다. 받는 마음도 열어 두세요', 'Bold affection is attractive. Keep room to receive it too.', '堂々とした愛情は魅力。受け取る心も開いておいて。', '大大方方的爱是魅力。接收的心也打开。', '大大方方的愛是魅力。接收的心也打開。', 'Bày tỏ đàng hoàng là sức hút. Nhớ mở lòng để nhận nữa.', 'Kasih yang berani itu daya tarik. Buka juga hati untuk menerimanya.'),
    shareLine: T(
      '별자리로 보는 연애 본능: 사자자리 ♌ 사랑은 크게 환하게래ㅋㅋ 카드 저장! 내 친구 별자리 맞혀봐',
      'Love instinct by sign: Leo ♌ Apparently I love big and bright. Save the card!',
      '星座の恋愛本能：獅子座 ♌ 愛は大きく明るいらしい。カード保存！',
      '星座恋爱本能：狮子座 ♌ 说我爱得又大又亮。卡片存好！',
      '星座戀愛本能：獅子座 ♌ 說我愛得又大又亮。卡片存好！',
      'Bản năng yêu theo cung: Sư Tử ♌ Bảo là yêu lớn và sáng. Lưu thẻ nhé!',
      'Insting cinta zodiak: Leo ♌ Katanya cintaku besar dan terang. Simpan kartunya!'
    ),
  },
  {
    id: 6,
    symbol: '♍',
    emoji: '🔎',
    element: 'earth',
    name: T('처녀자리', 'Virgo', '乙女座', '处女座', '處女座', 'Xử Nữ', 'Virgo'),
    dateRange: D6,
    shortTitle: T('세심함', 'Careful eye', 'こまやかさ', '细心', '細心', 'Tinh tế', 'Teliti'),
    blendLabel: T('꼼꼼한 배려', 'careful care', '細やかな気配り', '细致的体贴', '細緻的體貼', 'sự để ý kỹ', 'perhatian yang teliti'),
    instinct: T('작은 것까지 챙기는 세심함', 'You notice and care for the small things', '細かいことまで見るこまやかさ', '连小事都顾到的细心', '連小事都顧到的細心', 'Tinh tế đến từng việc nhỏ', 'Ketelitian yang memperhatikan hal kecil'),
    loveStyle: T('상대의 취향과 필요를 기억하고 실용적으로 돕는 사랑', 'You remember what they like and need, and help in practical ways', '好みと必要を覚えて、実用的に支える愛', '记得对方的喜好和需要，用实用的方式帮', '記得對方的喜好和需要，用實用的方式幫', 'Nhớ sở thích và nhu cầu của họ, giúp một cách thực tế', 'Mengingat selera dan kebutuhannya, lalu membantu secara praktis'),
    charm: T('꼼꼼한 배려와 신뢰감', 'Careful care and a sense of trust', '細やかな気配りと信頼感', '细致的体贴和让人放心', '細緻的體貼和讓人放心', 'Sự để ý kỹ và cảm giác đáng tin', 'Perhatian yang teliti dan rasa percaya'),
    caution: T('기준이 높아 서로를 엄격하게 보지 않기', 'Don’t let high standards turn into harsh judgment of each other', '基準が高くてお互いを厳しく見すぎない', '标准别太高，别把彼此看得太严', '標準別太高，別把彼此看得太嚴', 'Đừng vì chuẩn cao mà soi nhau quá nghiêm', 'Jangan biarkan standar tinggi jadi penilaian yang terlalu keras'),
    talkTip: T('고칠 점보다 고마운 점을 먼저 말하고 시작하기', 'Start with what you’re grateful for, before what to fix', '直す点より、ありがたい点を先に言う', '先说感谢的地方，再说要改的', '先說感謝的地方，再說要改的', 'Nói điều biết ơn trước, rồi mới nói chỗ cần chỉnh', 'Ucapkan dulu yang disyukuri, baru yang perlu diperbaiki'),
    cardPhrase: T('작은 것까지 마음을 써요', 'I put care into the little things', '小さなことにも心を配る', '小事我也用心', '小事我也用心', 'Việc nhỏ mình cũng để tâm', 'Hal kecil pun aku perhatikan'),
    oneLiner: T('세심함은 큰 자산입니다. 완벽보다 편안함을 허락해 주세요', 'A careful eye is a real asset. Allow comfort over perfection.', 'こまやかさは大きな資産。完璧より心地よさを許して。', '细心是很大的本钱。允许舒服，不必完美。', '細心是很大的本錢。允許舒服，不必完美。', 'Sự tinh tế là vốn lớn. Cho phép dễ chịu hơn là hoàn hảo.', 'Ketelitian itu modal besar. Izinkan kenyamanan, bukan kesempurnaan.'),
    shareLine: T(
      '별자리로 보는 연애 본능: 처녀자리 ♍ 작은 것까지 챙긴대ㅎㅎ 카드 저장! 내 친구 별자리 맞혀봐',
      'Love instinct by sign: Virgo ♍ Apparently I notice every little thing. Save the card!',
      '星座の恋愛本能：乙女座 ♍ 細かいことまで見るらしい。カード保存！',
      '星座恋爱本能：处女座 ♍ 说我连小事都顾到。卡片存好！',
      '星座戀愛本能：處女座 ♍ 說我連小事都顧到。卡片存好！',
      'Bản năng yêu theo cung: Xử Nữ ♍ Bảo là để ý đến từng việc nhỏ. Lưu thẻ nhé!',
      'Insting cinta zodiak: Virgo ♍ Katanya aku memperhatikan hal kecil. Simpan kartunya!'
    ),
  },
  {
    id: 7,
    symbol: '♎',
    emoji: '⚖️',
    element: 'air',
    name: T('천칭자리', 'Libra', '天秤座', '天秤座', '天秤座', 'Thiên Bình', 'Libra'),
    dateRange: D7,
    shortTitle: T('균형', 'Balance', 'バランス', '平衡', '平衡', 'Cân bằng', 'Keseimbangan'),
    blendLabel: T('조화로운 균형', 'harmonious balance', '調和のバランス', '和谐的平衡', '和諧的平衡', 'cân bằng hài hòa', 'keseimbangan yang selaras'),
    instinct: T('조화와 균형을 찾는 사랑', 'Love that looks for harmony and balance', '調和とバランスを探す愛', '寻找和谐与平衡的爱', '尋找和諧與平衡的愛', 'Tình yêu tìm sự hài hòa và cân bằng', 'Cinta yang mencari harmoni dan keseimbangan'),
    loveStyle: T('상대의 입장을 살피고 갈등을 부드럽게 풀려 함', 'You weigh their side and try to soften conflict', '相手の立場を見て、衝突をやわらかく解こうとする', '会看对方的立场，想把冲突轻轻解开', '會看對方的立場，想把衝突輕輕解開', 'Nhìn góc của họ và muốn gỡ mâu thuẫn nhẹ nhàng', 'Melihat sisi orangnya dan ingin meredakan konflik dengan lembut'),
    charm: T('세련된 매너와 공정한 배려', 'Polished manners and fair care', '洗練されたマナーと公平な気遣い', '得体的礼貌和公平的体贴', '得體的禮貌和公平的體貼', 'Cách cư xử tinh tế và sự để ý công bằng', 'Sopan yang elegan dan perhatian yang adil'),
    caution: T('결정을 미루지 않도록 내 의견을 한 줄 먼저 말하기', 'Say your opinion in one line first, so decisions don’t stall', '決断を先延ばしにしないよう、自分の意見を一行先に', '别拖着不决，先说一句自己的想法', '別拖著不決，先說一句自己的想法', 'Đừng trì hoãn quyết định; nói ý mình trước một câu', 'Jangan menunda keputusan. Ucapkan pendapatmu dulu dalam satu kalimat'),
    talkTip: T('"내 생각은 이거야, 네 생각은 어때?"로 서로 의견 나누기', 'Share with: here’s what I think — what do you think?', '「私はこう思う、あなたは？」で意見を分け合う', '用「我是这样想的，你呢？」交换意见', '用「我是這樣想的，你呢？」交換意見', 'Chia ý bằng: mình nghĩ vậy, còn bạn thì sao?', 'Saling berbagi dengan: menurutku begini, kamu bagaimana?'),
    cardPhrase: T('서로가 편안한 균형을 찾아요', 'We find a balance that feels easy for both', 'お互いが楽なバランスを探す', '找彼此都舒服的平衡', '找彼此都舒服的平衡', 'Tìm cân bằng dễ chịu cho cả hai', 'Mencari keseimbangan yang nyaman untuk berdua'),
    oneLiner: T('균형 감각은 큰 매력입니다. 내 바람도 한 줄 먼저 꺼내 보세요', 'A sense of balance is attractive. Say your wish in one line first too.', 'バランス感覚は大きな魅力。自分の願いも一行先に。', '平衡感是很大的魅力。自己的愿望也先说一句。', '平衡感是很大的魅力。自己的願望也先說一句。', 'Cảm giác cân bằng là sức hút. Ước muốn của mình cũng nói trước một câu.', 'Rasa keseimbangan itu daya tarik. Keinginanmu juga diucapkan dulu dalam satu kalimat.'),
    shareLine: T(
      '별자리로 보는 연애 본능: 천칭자리 ♎ 서로 편안한 균형을 찾는대ㅎㅎ 카드 저장! 내 친구 별자리 맞혀봐',
      'Love instinct by sign: Libra ♎ Apparently I look for an easy balance. Save the card!',
      '星座の恋愛本能：天秤座 ♎ お互いが楽なバランスを探すらしい。カード保存！',
      '星座恋爱本能：天秤座 ♎ 说我找彼此都舒服的平衡。卡片存好！',
      '星座戀愛本能：天秤座 ♎ 說我找彼此都舒服的平衡。卡片存好！',
      'Bản năng yêu theo cung: Thiên Bình ♎ Bảo là tìm cân bằng dễ chịu. Lưu thẻ nhé!',
      'Insting cinta zodiak: Libra ♎ Katanya aku mencari keseimbangan yang nyaman. Simpan kartunya!'
    ),
  },
  {
    id: 8,
    symbol: '♏',
    emoji: '🖤',
    element: 'water',
    name: T('전갈자리', 'Scorpio', '蠍座', '天蝎座', '天蠍座', 'Thiên Yết', 'Scorpio'),
    dateRange: D8,
    shortTitle: T('깊은 몰입', 'Deep focus', '深い没入', '深陷', '深陷', 'Đắm sâu', 'Tenggelam dalam'),
    blendLabel: T('진한 몰입', 'intense focus', '濃い没入', '浓烈的投入', '濃烈的投入', 'sự đắm sâu đậm', 'fokus yang intens'),
    instinct: T('한 사람에게 깊이 빠지는 몰입', 'You fall deep for one person', '一人に深くはまる没入', '对一个人陷得很深的投入', '對一個人陷得很深的投入', 'Đắm sâu vào một người', 'Tenggelam dalam pada satu orang'),
    loveStyle: T('마음을 쉽게 열지 않지만 열면 진하고 깊게 사랑함', 'You don’t open easily, but when you do, the love runs deep', '心は簡単に開かないが、開けば濃く深く愛する', '心不容易打开，一旦打开就爱得很浓很深', '心不容易打開，一旦打開就愛得很濃很深', 'Không dễ mở lòng, nhưng mở rồi thì yêu đậm và sâu', 'Tidak mudah membuka hati, tapi begitu terbuka, cintanya dalam'),
    charm: T('진중한 열정과 강한 신뢰', 'Serious passion and strong trust', '真剣な情熱と強い信頼', '认真的热情和牢固的信任', '認真的熱情和牢固的信任', 'Nhiệt huyết nghiêm túc và niềm tin mạnh', 'Gairah yang serius dan kepercayaan yang kuat'),
    caution: T('깊은 마음이 집착으로 번지지 않게 상대의 자유도 존중하기', 'Keep depth from turning into clinginess — respect their freedom too', '深い気持ちが執着にならないよう、相手の自由も尊重する', '别让深情变成黏人，也尊重对方的自由', '別讓深情變成黏人，也尊重對方的自由', 'Đừng để lòng sâu thành bám víu; tôn trọng cả tự do của họ', 'Jangan biarkan kedalaman jadi kelekatan. Hormati juga kebebasannya'),
    talkTip: T('불안할 땐 확인 대신 "안심되는 한마디만 해 줄래?"라고 말하기', 'When anxious, ask for one reassuring line instead of checking everything', '不安なときは確認より「安心する一言だけくれる？」', '不安时别反复确认，说：给我一句让我安心的话就好', '不安時別反覆確認，說：給我一句讓我安心的話就好', 'Khi lo, đừng kiểm tra nhiều; nói: cho mình một câu để yên lòng được không?', 'Kalau cemas, jangan cek terus. Bilang: kasih satu kalimat yang menenangkan, boleh?'),
    cardPhrase: T('깊이 사랑하고 오래 지켜요', 'I love deep, and I stay', '深く愛し、長く守る', '爱得深，守得久', '愛得深，守得久', 'Yêu sâu và giữ lâu', 'Mencintai dalam, dan menjaganya lama'),
    oneLiner: T('깊은 몰입은 큰 힘입니다. 서로의 공간도 함께 지켜 주세요', 'Deep focus is a real strength. Guard each other’s space too.', '深い没入は大きな力。お互いの空間も一緒に守って。', '深陷是很大的力气。也一起守住彼此的空间。', '深陷是很大的力氣。也一起守住彼此的空間。', 'Đắm sâu là sức mạnh. Nhớ giữ không gian cho nhau nữa.', 'Fokus yang dalam itu kekuatan. Jaga juga ruang satu sama lain.'),
    shareLine: T(
      '별자리로 보는 연애 본능: 전갈자리 ♏ 깊이 사랑하고 오래 지킨대ㅋㅋ 카드 저장! 내 친구 별자리 맞혀봐',
      'Love instinct by sign: Scorpio ♏ Apparently I love deep and stay. Save the card!',
      '星座の恋愛本能：蠍座 ♏ 深く愛して長く守るらしい。カード保存！',
      '星座恋爱本能：天蝎座 ♏ 说我爱得深、守得久。卡片存好！',
      '星座戀愛本能：天蠍座 ♏ 說我愛得深、守得久。卡片存好！',
      'Bản năng yêu theo cung: Thiên Yết ♏ Bảo là yêu sâu và giữ lâu. Lưu thẻ nhé!',
      'Insting cinta zodiak: Scorpio ♏ Katanya aku mencintai dalam dan menjaganya lama. Simpan kartunya!'
    ),
  },
  {
    id: 9,
    symbol: '♐',
    emoji: '🏹',
    element: 'fire',
    name: T('사수자리', 'Sagittarius', '射手座', '射手座', '射手座', 'Nhân Mã', 'Sagitarius'),
    dateRange: D9,
    shortTitle: T('자유로운 모험', 'Free adventure', '自由な冒険', '自由冒险', '自由冒險', 'Phiêu lưu tự do', 'Petualangan bebas'),
    blendLabel: T('자유로운 모험', 'free adventure', '自由な冒険', '自由的冒险', '自由的冒險', 'phiêu lưu tự do', 'petualangan yang bebas'),
    instinct: T('함께 새로운 곳을 향하는 자유로운 모험', 'A free adventure toward new places together', '一緒に新しい場所へ向かう自由な冒険', '一起奔向新地方的自由冒险', '一起奔向新地方的自由冒險', 'Cùng nhau hướng tới chỗ mới trong một cuộc phiêu lưu tự do', 'Petualangan bebas menuju tempat baru bersama'),
    loveStyle: T('구속 없이 활기차게 경험을 나누는 사랑', 'Love that shares experiences freely and with energy', '束縛なく元気に経験を分かち合う愛', '不束缚、有活力地分享经历的爱', '不束縛、有活力地分享經歷的愛', 'Tình yêu chia sẻ trải nghiệm vui vẻ, không ràng buộc', 'Cinta yang berbagi pengalaman dengan energik tanpa mengikat'),
    charm: T('낙천적인 에너지와 솔직함', 'Optimistic energy and honesty', '楽観的なエネルギーと正直さ', '乐观的能量和坦诚', '樂觀的能量和坦誠', 'Năng lượng lạc quan và sự thẳng thắn', 'Energi yang optimis dan kejujuran'),
    caution: T('자유로운 만큼 연락과 약속은 가볍게라도 알려 주기', 'As free as you are, still leave a light note about plans and replies', '自由な分、連絡と約束は軽くでも伝える', '再自由也轻轻报一下联络和约定', '再自由也輕輕報一下聯絡和約定', 'Dù tự do, vẫn báo nhẹ về liên lạc và hẹn', 'Sebebas apa pun, tetap kabari sedikit soal kontak dan janji'),
    talkTip: T('바쁠 땐 "생각하고 있어" 한 줄 남기기', 'When busy, leave one line: I’m thinking of you', '忙しいときは「考えてるよ」の一行を残す', '忙的时候留一句：我有在想你', '忙的時候留一句：我有在想你', 'Khi bận, để lại một câu: mình đang nghĩ tới bạn', 'Kalau sibuk, sisakan satu kalimat: aku lagi mikirin kamu'),
    cardPhrase: T('함께 떠나는 사랑이 좋아요', 'I like love that goes somewhere together', '一緒に出かける愛が好き', '喜欢一起出发的爱', '喜歡一起出發的愛', 'Thích tình yêu cùng nhau lên đường', 'Suka cinta yang pergi bersama'),
    oneLiner: T('자유로운 활기는 매력입니다. 안부 한 줄이 마음을 이어 줍니다', 'Free energy is attractive. One check-in keeps the heart connected.', '自由な元気は魅力。安否の一行が心をつなぐ。', '自由的活力是魅力。一句问候把心接上。', '自由的活力是魅力。一句問候把心接上。', 'Sức sống tự do là sức hút. Một câu hỏi thăm nối lòng.', 'Semangat yang bebas itu daya tarik. Satu kabar singkat menghubungkan hati.'),
    shareLine: T(
      '별자리로 보는 연애 본능: 사수자리 ♐ 함께 떠나는 사랑이 좋대ㅋㅋ 카드 저장! 내 친구 별자리 맞혀봐',
      'Love instinct by sign: Sagittarius ♐ Apparently I like love that goes somewhere together. Save the card!',
      '星座の恋愛本能：射手座 ♐ 一緒に出かける愛が好きらしい。カード保存！',
      '星座恋爱本能：射手座 ♐ 说我喜欢一起出发的爱。卡片存好！',
      '星座戀愛本能：射手座 ♐ 說我喜歡一起出發的愛。卡片存好！',
      'Bản năng yêu theo cung: Nhân Mã ♐ Bảo là thích tình yêu cùng lên đường. Lưu thẻ nhé!',
      'Insting cinta zodiak: Sagitarius ♐ Katanya aku suka cinta yang pergi bersama. Simpan kartunya!'
    ),
  },
  {
    id: 10,
    symbol: '♑',
    emoji: '🏔️',
    element: 'earth',
    name: T('염소자리', 'Capricorn', '山羊座', '摩羯座', '摩羯座', 'Ma Kết', 'Capricorn'),
    dateRange: D10,
    shortTitle: T('책임', 'Responsibility', '責任', '负责', '負責', 'Trách nhiệm', 'Tanggung jawab'),
    blendLabel: T('책임 있는 행동', 'responsible action', '責任ある行動', '负责任的行动', '負責任的行動', 'hành động có trách nhiệm', 'tindakan yang bertanggung jawab'),
    instinct: T('약속을 지키는 책임', 'Responsibility that keeps its promises', '約束を守る責任', '守约定的负责', '守約定的負責', 'Trách nhiệm giữ lời hứa', 'Tanggung jawab yang menepati janji'),
    loveStyle: T('말은 적어도 꾸준히 행동으로 신뢰를 쌓음', 'Few words, steady actions that build trust', '言葉は少なくても、行動で信頼を積む', '话不多，却用行动把信任堆起来', '話不多，卻用行動把信任堆起來', 'Nói ít, nhưng xây niềm tin bằng việc làm đều', 'Katanya sedikit, tapi kepercayaan dibangun lewat tindakan yang konsisten'),
    charm: T('성실함과 든든한 안정감', 'Sincerity and solid steadiness', '誠実さと頼もしい安心感', '认真和让人踏实的安定', '認真和讓人踏實的安定', 'Sự chân thành và cảm giác vững', 'Ketulusan dan rasa aman yang kokoh'),
    caution: T('일과 책임에 몰두해도 마음을 표현할 시간 남기기', 'Even when work fills the day, leave time to show how you feel', '仕事と責任に没頭しても、気持ちを出す時間を残す', '再忙于工作和责任，也留时间表达心意', '再忙於工作和責任，也留時間表達心意', 'Dù mải việc và trách nhiệm, vẫn chừa thời gian bày tỏ lòng', 'Meski sibuk dengan kerja dan tanggung jawab, sisakan waktu untuk mengungkapkan perasaan'),
    talkTip: T('"고마워" 같은 짧은 표현을 의식적으로 자주 건네기', 'Make a habit of short lines like thank you', '「ありがとう」のような短い言葉を意識してよく伝える', '有意识地多说「谢谢」这类短句', '有意識地多說「謝謝」這類短句', 'Cố ý nói thường hơn những câu ngắn như cảm ơn', 'Sengaja sering mengucapkan kalimat pendek seperti terima kasih'),
    cardPhrase: T('행동으로 사랑을 보여 줘요', 'I show love through what I do', '行動で愛を見せる', '用行动把爱亮出来', '用行動把愛亮出來', 'Mình thể hiện yêu bằng việc làm', 'Aku menunjukkan cinta lewat tindakan'),
    oneLiner: T('책임감은 큰 신뢰입니다. 마음의 말도 한 줄 더해 보세요', 'Responsibility builds trust. Add one line from the heart too.', '責任感は大きな信頼。気持ちの言葉も一行足して。', '责任感是很大的信任。心里话也补一句。', '責任感是很大的信任。心裡話也補一句。', 'Trách nhiệm là niềm tin lớn. Thêm một câu từ lòng nữa.', 'Tanggung jawab itu kepercayaan besar. Tambahkan juga satu kalimat dari hati.'),
    shareLine: T(
      '별자리로 보는 연애 본능: 염소자리 ♑ 행동으로 사랑을 보여 준대ㅎㅎ 카드 저장! 내 친구 별자리 맞혀봐',
      'Love instinct by sign: Capricorn ♑ Apparently I show love through what I do. Save the card!',
      '星座の恋愛本能：山羊座 ♑ 行動で愛を見せるらしい。カード保存！',
      '星座恋爱本能：摩羯座 ♑ 说我用行动把爱亮出来。卡片存好！',
      '星座戀愛本能：摩羯座 ♑ 說我用行動把愛亮出來。卡片存好！',
      'Bản năng yêu theo cung: Ma Kết ♑ Bảo là thể hiện yêu bằng việc làm. Lưu thẻ nhé!',
      'Insting cinta zodiak: Capricorn ♑ Katanya aku menunjukkan cinta lewat tindakan. Simpan kartunya!'
    ),
  },
  {
    id: 11,
    symbol: '♒',
    emoji: '💨',
    element: 'air',
    name: T('물병자리', 'Aquarius', '水瓶座', '水瓶座', '水瓶座', 'Bảo Bình', 'Aquarius'),
    dateRange: D11,
    shortTitle: T('독립', 'Independence', '自立', '独立', '獨立', 'Độc lập', 'Mandiri'),
    blendLabel: T('개성 존중', 'respect for individuality', '個性の尊重', '尊重个性', '尊重個性', 'tôn trọng cá tính', 'menghormati keunikan'),
    instinct: T('서로의 개성을 존중하는 독립', 'Independence that respects each person’s uniqueness', 'お互いの個性を尊重する自立', '尊重彼此个性的独立', '尊重彼此個性的獨立', 'Độc lập tôn trọng cá tính của nhau', 'Kemandirian yang menghormati keunikan masing-masing'),
    loveStyle: T('구속 없이 친구 같은 편안함으로 가까워짐', 'You grow close like friends, without tight control', '束縛なく、友だちのような心地よさで近づく', '不束缚，用朋友般的轻松靠近', '不束縛，用朋友般的輕鬆靠近', 'Gần nhau như bạn, không ràng buộc', 'Dekat seperti teman, tanpa mengikat'),
    charm: T('독창적인 시선과 열린 마음', 'An original view and an open mind', '独創的な視点と開かれた心', '独特的眼光和开放的心', '獨特的眼光和開放的心', 'Góc nhìn riêng và lòng mở', 'Cara melihat yang orisinal dan hati yang terbuka'),
    caution: T('거리 두기가 무관심으로 읽히지 않게 애정 표현 더하기', 'Add affection so distance doesn’t read as indifference', '距離が無関心に見えないよう、愛情表現を足す', '多一点爱的表达，别让距离像冷淡', '多一點愛的表達，別讓距離像冷淡', 'Thêm bày tỏ yêu để khoảng cách không thành thờ ơ', 'Tambahkan ekspresi sayang supaya jarak tidak terbaca sebagai acuh'),
    talkTip: T('"혼자 시간도 좋지만 너도 소중해"를 함께 말해 주기', 'Say both: alone time is good, and you’re important to me', '「一人の時間もいい、でもあなたも大切」を一緒に伝える', '一起说：独处很好，你也很重要', '一起說：獨處很好，你也很重要', 'Nói cả hai: thời gian một mình cũng tốt, và bạn cũng quý', 'Ucapkan keduanya: waktu sendiri juga enak, dan kamu juga penting'),
    cardPhrase: T('서로의 자유로 더 가까워져요', 'Our freedom brings us closer', 'お互いの自由で、もっと近づく', '用彼此的自由，更靠近', '用彼此的自由，更靠近', 'Tự do của nhau làm mình gần hơn', 'Kebebasan kita justru membuat kita lebih dekat'),
    oneLiner: T('독립은 매력입니다. 따뜻한 한마디가 거리를 좁혀 줍니다', 'Independence is attractive. One warm line closes the gap.', '自立は魅力。あたたかい一言が距離を縮める。', '独立是魅力。一句暖话把距离拉近。', '獨立是魅力。一句暖話把距離拉近。', 'Độc lập là sức hút. Một câu ấm thu hẹp khoảng cách.', 'Kemandirian itu daya tarik. Satu kalimat hangat memperdekat jarak.'),
    shareLine: T(
      '별자리로 보는 연애 본능: 물병자리 ♒ 서로의 자유로 가까워진대ㅎㅎ 카드 저장! 내 친구 별자리 맞혀봐',
      'Love instinct by sign: Aquarius ♒ Apparently freedom brings us closer. Save the card!',
      '星座の恋愛本能：水瓶座 ♒ お互いの自由で近づくらしい。カード保存！',
      '星座恋爱本能：水瓶座 ♒ 说用彼此的自由更靠近。卡片存好！',
      '星座戀愛本能：水瓶座 ♒ 說用彼此的自由更靠近。卡片存好！',
      'Bản năng yêu theo cung: Bảo Bình ♒ Bảo là tự do làm mình gần hơn. Lưu thẻ nhé!',
      'Insting cinta zodiak: Aquarius ♒ Katanya kebebasan justru membuat kita lebih dekat. Simpan kartunya!'
    ),
  },
  {
    id: 12,
    symbol: '♓',
    emoji: '🌊',
    element: 'water',
    name: T('물고기자리', 'Pisces', '魚座', '双鱼座', '雙魚座', 'Song Ngư', 'Pisces'),
    dateRange: D12,
    shortTitle: T('낭만', 'Romance', 'ロマン', '浪漫', '浪漫', 'Lãng mạn', 'Romansa'),
    blendLabel: T('감성 낭만', 'feeling-led romance', '感性のロマン', '感性的浪漫', '感性的浪漫', 'lãng mạn giàu cảm xúc', 'romansa yang penuh rasa'),
    instinct: T('영화 같은 순간을 꿈꾸는 낭만', 'Romance that dreams of movie-like moments', '映画のような瞬間を夢見るロマン', '梦想电影般瞬间的浪漫', '夢想電影般瞬間的浪漫', 'Lãng mạn mơ những khoảnh khắc như phim', 'Romansa yang memimpikan momen seperti film'),
    loveStyle: T('상대의 감정에 깊이 공감하고 분위기를 감성적으로 만듦', 'You feel with them deeply and set a soft mood', '相手の感情に深く共感し、空気を感性的にする', '深深共情对方的情绪，把气氛做得很有感觉', '深深同理對方的情緒，把氣氛做得很有感覺', 'Thấu cảm sâu cảm xúc của họ và tạo không khí giàu cảm xúc', 'Turut merasakan emosinya dalam-dalam dan membuat suasana terasa emosional'),
    charm: T('풍부한 상상력과 다정한 감수성', 'Rich imagination and tender feeling', '豊かな想像力とやさしい感性', '丰富的想象和温柔的感性', '豐富的想像和溫柔的感性', 'Trí tưởng tượng phong phú và cảm xúc dịu dàng', 'Imajinasi yang kaya dan kepekaan yang lembut'),
    caution: T('기대와 현실의 차이를 말로 맞춰 가기', 'Talk through the gap between hope and reality', '期待と現実の差を言葉で合わせていく', '用说话把期待和现实的落差对齐', '用說話把期待和現實的落差對齊', 'Dùng lời để khớp khoảng cách giữa kỳ vọng và thực tế', 'Samakan dengan kata-kata jarak antara harapan dan kenyataan'),
    talkTip: T('바라는 장면을 "이런 날이면 좋겠어"라고 미리 말해 주기', 'Say the scene you want early: a day like this would be nice', 'ほしい場面は「こんな日がいいな」と先に伝える', '想要的场面提前说：要是有这样的一天就好了', '想要的場面提前說：要是有這樣的一天就好了', 'Nói trước cảnh mình muốn: ước gì có một ngày như vậy', 'Ucapkan dulu adegan yang diinginkan: enak kalau ada hari seperti ini'),
    cardPhrase: T('사랑을 한 편의 이야기로 만들어요', 'I turn love into a story', '愛を一つの物語にする', '把爱写成一篇故事', '把愛寫成一篇故事', 'Biến tình yêu thành một câu chuyện', 'Aku menjadikan cinta sebagai sebuah cerita'),
    oneLiner: T('낭만은 관계의 향기입니다. 바람을 말로 꺼내면 현실이 됩니다', 'Romance is the scent of a bond. Say the wish and it can become real.', 'ロマンは関係の香り。願いを言葉にすると現実になる。', '浪漫是关系的香气。把愿望说出来，就可能成真。', '浪漫是關係的香氣。把願望說出來，就可能成真。', 'Lãng mạn là hương của quan hệ. Nói ước muốn ra thì nó thành thật.', 'Romansa itu aroma hubungan. Ucapkan harapannya, dan itu bisa jadi nyata.'),
    shareLine: T(
      '별자리로 보는 연애 본능: 물고기자리 ♓ 사랑을 한 편의 이야기로 만든대ㅎㅎ 카드 저장! 내 친구 별자리 맞혀봐',
      'Love instinct by sign: Pisces ♓ Apparently I turn love into a story. Save the card!',
      '星座の恋愛本能：魚座 ♓ 愛を物語にするらしい。カード保存！',
      '星座恋爱本能：双鱼座 ♓ 说我把爱写成故事。卡片存好！',
      '星座戀愛本能：雙魚座 ♓ 說我把愛寫成故事。卡片存好！',
      'Bản năng yêu theo cung: Song Ngư ♓ Bảo là biến tình yêu thành chuyện. Lưu thẻ nhé!',
      'Insting cinta zodiak: Pisces ♓ Katanya aku menjadikan cinta sebagai cerita. Simpan kartunya!'
    ),
  },
];

const byId = (id: number) => phase3ZodiacLoveInstincts.find((item) => item.id === id) ?? phase3ZodiacLoveInstincts[0];

export function getPhase3ZodiacLoveInstinct(id: number): Phase3ZodiacLoveInstinct {
  return byId(id);
}

const ELEMENT_ADVICE: Record<string, Phase3ZodiacLoveText> = {
  'fire-fire': T(
    '열정을 나누되, 서로의 속도도 한 번 맞춰 보세요',
    'Share the heat, and check each other’s pace once',
    '情熱は分かち合い、速度も一度合わせてみて',
    '热情可以分享，也看一眼彼此的速度',
    '熱情可以分享，也看一眼彼此的速度',
    'Chia nhiệt, và nhìn nhịp của nhau một lần',
    'Bagikan semangatnya, dan cek sekali tempo masing-masing'
  ),
  'fire-earth': T(
    '속도를 말로 맞춰 보세요',
    'Talk through the pace',
    '速度を言葉で合わせてみて',
    '用说话把速度对齐',
    '用說話把速度對齊',
    'Dùng lời để khớp nhịp',
    'Samakan temponya dengan kata-kata'
  ),
  'fire-air': T(
    '설렘은 키우고, 약속은 짧게라도 남겨 보세요',
    'Keep the spark, and leave even a short note about plans',
    'ときめきは育て、約束は短くても残して',
    '心动可以放大，约定也留一句短话',
    '心動可以放大，約定也留一句短話',
    'Giữ rạo rực, và để lại dù một lời hẹn ngắn',
    'Jaga deg-degannya, dan sisakan sedikit kabar soal janji'
  ),
  'fire-water': T(
    '뜨거운 마음과 예민 마음을 번갈아 확인해 보세요',
    'Check both the hot feeling and the tender one',
    '熱い心と繊細な心を交互に見てみて',
    '热的心和细的心，轮流看一看',
    '熱的心和細的心，輪流看一看',
    'Nhìn lần lượt lòng nóng và lòng mong manh',
    'Lihat bergantian hati yang hangat dan yang peka'
  ),
  'earth-earth': T(
    '편안함 속에 작은 새로움을 더해 보세요',
    'Add a little newness inside the comfort',
    '心地よさの中に小さな新しさを足して',
    '在舒服里加一点新鲜',
    '在舒服裡加一點新鮮',
    'Trong sự dễ chịu, thêm chút mới',
    'Di tengah kenyamanan, tambahkan sedikit yang baru'
  ),
  'earth-air': T(
    '말과 행동의 리듬을 맞춰 보세요',
    'Match the rhythm of words and actions',
    '言葉と行動のリズムを合わせて',
    '把说话和行动的节奏对齐',
    '把說話和行動的節奏對齊',
    'Khớp nhịp lời nói và hành động',
    'Samakan ritme kata dan tindakan'
  ),
  'earth-water': T(
    '든든함과 감정을 같이 챙기면 더 깊어져요',
    'Steady care plus feeling makes it deeper',
    '頼もしさと気持ちを一緒に見ると深くなる',
    '踏实和情绪一起顾，会更深',
    '踏實和情緒一起顧，會更深',
    'Vững và cảm xúc cùng giữ thì sâu hơn',
    'Kokoh plus perasaan, kalau dijaga bareng jadi lebih dalam'
  ),
  'air-air': T(
    '대화는 즐겁게, 진심은 한 줄 더 보태 보세요',
    'Keep talk fun, and add one sincere line',
    '会話は楽しく、本音は一行足して',
    '聊天保持轻松，真心再补一句',
    '聊天保持輕鬆，真心再補一句',
    'Nói chuyện vui, và thêm một câu thật lòng',
    'Obrolannya tetap seru, plus satu kalimat yang tulus'
  ),
  'air-water': T(
    '가벼운 말과 깊은 감정을 번갈아 나눠 보세요',
    'Trade light talk with deeper feeling',
    '軽い言葉と深い気持ちを交互に分けて',
    '轻的话和深的情绪，轮流分享',
    '輕的話和深的情緒，輪流分享',
    'Xen kẽ lời nhẹ và cảm xúc sâu',
    'Bergantian antara obrolan ringan dan perasaan yang dalam'
  ),
  'water-water': T(
    '공감은 충분하니, 현실적인 한마디도 덧붙여 보세요',
    'Empathy is already there — add one practical line too',
    '共感は足りているので、現実的な一言も足して',
    '共情已经够了，再补一句现实的话',
    '同理已經夠了，再補一句現實的話',
    'Thấu cảm đã đủ; thêm một câu thực tế nữa',
    'Empatinya sudah cukup. Tambahkan juga satu kalimat yang realistis'
  ),
};

const DEFAULT_ADVICE = T(
  '서로의 본능을 존중하며 속도를 말로 맞춰 보세요',
  'Respect each instinct, and talk through the pace',
  'お互いの本能を尊重し、速度を言葉で合わせて',
  '尊重彼此的本能，用说话对齐速度',
  '尊重彼此的本能，用說話對齊速度',
  'Tôn trọng bản năng của nhau và khớp nhịp bằng lời',
  'Hormati insting masing-masing, dan samakan tempo lewat kata-kata'
);

const SAME_PAIR = T(
  '같은 {blend}끼리, 서로의 속도를 한 번 더 확인해 보세요',
  'Same {blend} energy — check each other’s pace once more',
  '同じ「{blend}」同士、速度をもう一度見てみて',
  '同是「{blend}」，再看一眼彼此的速度',
  '同是「{blend}」，再看一眼彼此的速度',
  'Cùng kiểu «{blend}» — nhìn nhịp của nhau thêm một lần',
  'Sama-sama «{blend}». Cek sekali lagi tempo masing-masing'
);

const PAIR_JOIN = T(
  '{a}과 {b}, {advice}',
  '{a} and {b} — {advice}',
  '{a}と{b}、{advice}',
  '{a}和{b}，{advice}',
  '{a}和{b}，{advice}',
  '{a} và {b}, {advice}',
  '{a} dan {b}, {advice}'
);

function elementAdvice(a: Phase3ZodiacElement, b: Phase3ZodiacElement, locale: string): string {
  if (a === b) return zodiacLoveText(ELEMENT_ADVICE[`${a}-${b}`], locale);
  const key1 = `${a}-${b}`;
  const key2 = `${b}-${a}`;
  const text = ELEMENT_ADVICE[key1] || ELEMENT_ADVICE[key2] || DEFAULT_ADVICE;
  return zodiacLoveText(text, locale);
}

/** 예: 양자리 × 황소자리 = 빠른 시작과 느린 확신, 속도를 말로 맞춰 보세요 */
export function getPhase3ZodiacPairTip(myId: number, friendId: number, locale: string): string {
  const me = byId(myId);
  const friend = byId(friendId);
  const myName = zodiacLoveText(me.name, locale);
  const friendName = zodiacLoveText(friend.name, locale);
  const myBlend = zodiacLoveText(me.blendLabel, locale);
  const friendBlend = zodiacLoveText(friend.blendLabel, locale);
  if (me.id === friend.id) {
    return `${myName} × ${friendName} = ${zodiacLoveText(SAME_PAIR, locale).replace('{blend}', myBlend)}`;
  }
  const advice = elementAdvice(me.element, friend.element, locale);
  const joined = zodiacLoveText(PAIR_JOIN, locale)
    .replace('{a}', myBlend)
    .replace('{b}', friendBlend)
    .replace('{advice}', advice);
  return `${myName} × ${friendName} = ${joined}`;
}

export const PHASE3_ZODIAC_LOVE_INSTINCT_META = {
  title: T(
    '별자리로 보는 연애 본능',
    'What love instinct is in my sign?',
    '星座で見る、恋愛の本能は？',
    '从星座看，我的恋爱本能是？',
    '從星座看，我的戀愛本能是？',
    'Cung hoàng đạo nói gì về bản năng yêu của tôi?',
    'Insting cinta di zodiakku apa?'
  ),
  description: T(
    '내 별자리가 들려주는 연애 본능과 대화 팁을 가볍게 만나 보세요. 별자리만 고르면 되고, 선택한 값은 저장하지 않습니다.',
    'Pick your sign for a light read of your love instinct and a talk tip. Only the sign is used, and nothing is saved.',
    '星座を選ぶだけで、恋愛の本能と会話のヒントがわかります。選んだ内容は保存しません。',
    '选一个星座，轻松看看恋爱本能和对话小提示。只选星座，不会保存。',
    '選一個星座，輕鬆看看戀愛本能和對話小提示。只選星座，不會保存。',
    'Chọn cung của bạn để xem bản năng yêu và mẹo trò chuyện. Chỉ dùng cung, không lưu gì.',
    'Pilih zodiakmu untuk melihat insting cinta dan tip ngobrol. Hanya zodiak yang dipakai, tidak disimpan.'
  ),
  tags: {
    ko: ['별자리', '별자리궁합', '연애테스트'],
    en: ['zodiac', 'love instinct', 'dating'],
    ja: ['星座', '恋愛', '恋愛本能'],
    'zh-CN': ['星座', '恋爱本能', '恋爱'],
    'zh-TW': ['星座', '戀愛本能', '戀愛'],
    vi: ['cung hoàng đạo', 'bản năng yêu', 'hẹn hò'],
    id: ['zodiak', 'insting cinta', 'pacaran'],
  } as Record<Phase3ZodiacLoveLocaleKey, string[]>,
};
