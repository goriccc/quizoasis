/** 나의 '카공족' 등급 테스트 — 12문항 2지선다, A=0 B=1, 총점 0~12 → Type1~6 */

type Locale = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';
type ML = Record<Locale, string>;

function L(m: ML): Record<string, string> {
  return m;
}

function opt(m: ML, score: number): { text: Record<string, string>; score: number } {
  return { text: L(m), score };
}

function section(title: ML, content: ML): Phase3CafeWorkGradeResultSection {
  return { title: L(title), content: L(content) };
}

export interface Phase3CafeWorkGradeQuestion {
  id: number;
  question: Record<string, string>;
  options: { text: Record<string, string>; score: number }[];
}

export interface Phase3CafeWorkGradeResultSection {
  title: Record<string, string>;
  content: Record<string, string>;
}

export interface Phase3CafeWorkGradeResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  cafeGrade: Record<string, string>;
  sections: Phase3CafeWorkGradeResultSection[];
  shareMessage: Record<string, string>;
}

export function calculatePhase3CafeWorkGradeResult(answers: number[]): string {
  const total = answers.reduce((sum, s) => sum + (s ?? 0), 0);
  if (total <= 1) return 'Type1';
  if (total <= 3) return 'Type2';
  if (total <= 6) return 'Type3';
  if (total <= 9) return 'Type4';
  if (total <= 11) return 'Type5';
  return 'Type6';
}

export const phase3CafeWorkGradeQuestions: Phase3CafeWorkGradeQuestion[] = [
  {
    id: 1,
    question: L({
      ko: '카페에 도착해서 가장 먼저 하는 것은?',
      en: 'The first thing you do after arriving at a cafe is?',
      ja: 'カフェに到着してまず最初にすることは？',
      'zh-CN': '到咖啡馆后最先做的事情是？',
      'zh-TW': '到咖啡廳後最先做的事情是？',
      vi: 'Điều đầu tiên bạn làm khi đến quán cà phê là gì?',
      id: 'Hal pertama yang kamu lakukan setelah tiba di kafe adalah?',
    }),
    options: [
      opt(
        {
          ko: '주문 먼저 하고 자리 잡는다',
          en: 'Order first, then find a seat',
          ja: '先に注文してから席を取る',
          'zh-CN': '先点单，再找位置坐下',
          'zh-TW': '先點餐，再找位置坐下',
          vi: 'Gọi đồ trước rồi mới tìm chỗ ngồi',
          id: 'Memesan dulu, baru mencari tempat duduk',
        },
        0
      ),
      opt(
        {
          ko: '자리부터 먼저 맡고 짐 펼쳐두고 주문하러 간다',
          en: 'Claim a seat first, spread out my stuff, then go order',
          ja: '先に席を確保して荷物を広げ、それから注文に行く',
          'zh-CN': '先占好位置，把东西摆开，再去点单',
          'zh-TW': '先佔好位置，把東西擺開，再去點餐',
          vi: 'Chiếm chỗ trước, bày đồ ra rồi mới đi gọi đồ',
          id: 'Mengamankan tempat duduk dulu, menaruh barang, baru pergi memesan',
        },
        1
      ),
    ],
  },
  {
    id: 2,
    question: L({
      ko: '카페에서 평균 몇 시간 머무나요?',
      en: 'On average, how many hours do you stay at a cafe?',
      ja: 'カフェに平均何時間滞在しますか？',
      'zh-CN': '你平均在咖啡馆待多长时间？',
      'zh-TW': '你平均在咖啡廳待多長時間？',
      vi: 'Bạn thường ở quán cà phê trung bình bao nhiêu giờ?',
      id: 'Rata-rata berapa jam kamu berada di kafe?',
    }),
    options: [
      opt(
        {
          ko: '2시간 이내. 할 일 끝나거나 음료 다 마시면 나온다',
          en: "Within 2 hours. I leave once I finish what I'm doing or my drink is gone",
          ja: '2時間以内。用事が終わったり飲み物を飲み終えたら出る',
          'zh-CN': '2小时以内。事情做完或饮料喝完就走',
          'zh-TW': '2小時以內。事情做完或飲料喝完就走',
          vi: 'Trong vòng 2 giờ. Xong việc hoặc uống hết đồ uống là tôi ra',
          id: 'Dalam 2 jam. Begitu urusan selesai atau minuman habis, aku pergi',
        },
        0
      ),
      opt(
        {
          ko: '3시간 이상. 자리가 좋으면 하루 종일 있을 수도 있다',
          en: "3 hours or more. If the seat is good, I might stay all day",
          ja: '3時間以上。席が良ければ一日中いることもある',
          'zh-CN': '3小时以上。如果位置好，甚至可能待一整天',
          'zh-TW': '3小時以上。如果位置好，甚至可能待一整天',
          vi: 'Từ 3 giờ trở lên. Nếu chỗ ngồi tốt thì có thể ở cả ngày',
          id: 'Lebih dari 3 jam. Kalau tempatnya nyaman, bisa saja aku di sana sepanjang hari',
        },
        1
      ),
    ],
  },
  {
    id: 3,
    question: L({
      ko: '카페에서 머무는 동안 추가 주문을 하나요?',
      en: 'Do you order anything extra while staying at the cafe?',
      ja: 'カフェにいる間、追加注文をしますか？',
      'zh-CN': '在咖啡馆停留期间会不会追加点单？',
      'zh-TW': '在咖啡廳停留期間會不會追加點餐？',
      vi: 'Trong lúc ở quán cà phê, bạn có gọi thêm đồ không?',
      id: 'Selama berada di kafe, apakah kamu memesan tambahan?',
    }),
    options: [
      opt(
        {
          ko: '시간이 길어지면 음료나 음식을 추가 주문한다',
          en: 'If I stay longer, I order more drinks or food',
          ja: '時間が長くなれば飲み物や食べ物を追加注文する',
          'zh-CN': '时间一长就会追加饮料或食物',
          'zh-TW': '時間一長就會追加飲料或食物',
          vi: 'Nếu ở lâu thì tôi sẽ gọi thêm đồ uống hoặc đồ ăn',
          id: 'Kalau waktunya semakin lama, aku memesan tambahan minuman atau makanan',
        },
        0
      ),
      opt(
        {
          ko: '처음 시킨 한 잔으로 끝낸다. 더 시키면 돈이 아깝다',
          en: "I stick to the one drink I ordered first. Ordering more feels like a waste of money",
          ja: '最初に頼んだ一杯で終わる。もっと頼むのはお金が惜しい',
          'zh-CN': '就靠最开始点的一杯撑到底。再点的话觉得浪费钱',
          'zh-TW': '就靠最開始點的一杯撐到底。再點的話覺得浪費錢',
          vi: 'Chỉ dùng đúng một ly đã gọi lúc đầu. Gọi thêm thì thấy tốn tiền',
          id: 'Cukup dengan satu gelas yang dipesan di awal. Kalau pesan lagi rasanya buang-buang uang',
        },
        1
      ),
    ],
  },
  {
    id: 4,
    question: L({
      ko: '노트북·아이패드 외에 추가로 가져오는 장비는?',
      en: 'What extra gear do you bring besides a laptop or iPad?',
      ja: 'ノートパソコン・iPad以外に追加で持ってくる機器は？',
      'zh-CN': '除了笔记本电脑、iPad之外，你还会额外带什么设备？',
      'zh-TW': '除了筆電、iPad之外，你還會額外帶什麼設備？',
      vi: 'Ngoài laptop hoặc iPad, bạn còn mang thêm thiết bị gì?',
      id: 'Selain laptop atau iPad, peralatan tambahan apa yang kamu bawa?',
    }),
    options: [
      opt(
        {
          ko: '노트북 하나 정도. 간단하게 세팅한다',
          en: 'Just the laptop, more or less. I set up simply',
          ja: 'ノートパソコン一台くらい。シンプルにセッティングする',
          'zh-CN': '基本上就一台笔记本。简单布置一下',
          'zh-TW': '基本上就一台筆電。簡單佈置一下',
          vi: 'Chỉ khoảng một cái laptop. Setup đơn giản',
          id: 'Paling cuma satu laptop. Setup-nya sederhana saja',
        },
        0
      ),
      opt(
        {
          ko: '모니터·키보드·마우스·충전기·멀티탭 등을 챙겨온다',
          en: 'I bring a monitor, keyboard, mouse, charger, power strip, and more',
          ja: 'モニター・キーボード・マウス・充電器・電源タップなどを持ってくる',
          'zh-CN': '会带上显示器、键盘、鼠标、充电器、延长线等',
          'zh-TW': '會帶上螢幕、鍵盤、滑鼠、充電器、延長線等',
          vi: 'Mang theo màn hình, bàn phím, chuột, sạc, ổ cắm điện đa năng, v.v.',
          id: 'Membawa monitor, keyboard, mouse, charger, terminal listrik, dan lainnya',
        },
        1
      ),
    ],
  },
  {
    id: 5,
    question: L({
      ko: '카페에서 전화·통화를 할 때 나는?',
      en: 'When I make a phone call at a cafe, I...',
      ja: 'カフェで電話をするとき、私は？',
      'zh-CN': '在咖啡馆打电话时，我会？',
      'zh-TW': '在咖啡廳打電話時，我會？',
      vi: 'Khi gọi điện thoại ở quán cà phê, tôi sẽ?',
      id: 'Saat menerima atau melakukan panggilan telepon di kafe, aku?',
    }),
    options: [
      opt(
        {
          ko: '짧게 받거나 밖으로 나가서 통화한다',
          en: 'Keep it short or step outside to talk',
          ja: '短く受けるか、外に出て話す',
          'zh-CN': '简短接听，或者到外面去讲电话',
          'zh-TW': '簡短接聽，或者到外面去講電話',
          vi: 'Nói ngắn gọn hoặc ra ngoài để gọi điện',
          id: 'Menjawab sebentar saja atau keluar untuk menelepon',
        },
        0
      ),
      opt(
        {
          ko: '자리에서 길게 통화한다. 이어폰도 없이 스피커로 할 때도 있다',
          en: 'Talk for a long time right at my seat. Sometimes even on speaker without earphones',
          ja: '席で長く電話する。イヤホンもなしにスピーカーで話すこともある',
          'zh-CN': '就坐在位子上讲很久。有时甚至不戴耳机开外放',
          'zh-TW': '就坐在位子上講很久。有時甚至不戴耳機開外放',
          vi: 'Ngồi tại chỗ nói chuyện điện thoại thật lâu. Có khi còn để loa ngoài mà không đeo tai nghe',
          id: 'Menelepon lama sambil tetap di tempat duduk. Kadang bahkan pakai speaker tanpa earphone',
        },
        1
      ),
    ],
  },
  {
    id: 6,
    question: L({
      ko: '혼자인데 짐으로 여러 자리를 차지한 적 있나요?',
      en: 'Even when alone, have you ever taken up multiple seats with your belongings?',
      ja: '一人なのに荷物で複数の席を占領したことがありますか？',
      'zh-CN': '明明是一个人，却用物品占了好几个座位吗？',
      'zh-TW': '明明是一個人，卻用物品佔了好幾個座位嗎？',
      vi: 'Dù đi một mình nhưng bạn có từng chiếm nhiều chỗ ngồi bằng đồ đạc không?',
      id: 'Meski sendirian, apakah kamu pernah menguasai beberapa tempat duduk dengan barang-barangmu?',
    }),
    options: [
      opt(
        {
          ko: '없다. 내가 앉는 자리 하나만 쓴다',
          en: 'No. I only use the one seat I sit in',
          ja: 'ない。自分が座る席一つだけを使う',
          'zh-CN': '没有。只用自己坐的那一个位置',
          'zh-TW': '沒有。只用自己坐的那一個位置',
          vi: 'Không. Tôi chỉ dùng đúng một chỗ tôi ngồi',
          id: 'Tidak. Aku hanya memakai satu tempat duduk yang kutempati',
        },
        0
      ),
      opt(
        {
          ko: '있다. 노트북 자리·짐 자리·충전기 자리 따로 쓴 적 있다',
          en: "Yes. I've used a separate seat for my laptop, one for my bags, and one for charging",
          ja: 'ある。ノートパソコン用の席・荷物用の席・充電用の席を別々に使ったことがある',
          'zh-CN': '有。曾经分别用一个位置放笔电、一个放行李、一个用来充电',
          'zh-TW': '有。曾經分別用一個位置放筆電、一個放行李、一個用來充電',
          vi: 'Có. Tôi từng dùng riêng một chỗ để laptop, một chỗ để đồ, một chỗ để sạc',
          id: 'Pernah. Aku pernah memakai tempat duduk terpisah untuk laptop, barang, dan untuk mengisi daya',
        },
        1
      ),
    ],
  },
  {
    id: 7,
    question: L({
      ko: '카페가 붐빌 때 내 행동은?',
      en: 'When the cafe gets crowded, what do I do?',
      ja: 'カフェが混んでいるとき、私の行動は？',
      'zh-CN': '咖啡馆很挤的时候，我的行为是？',
      'zh-TW': '咖啡廳很擠的時候，我的行為是？',
      vi: 'Khi quán cà phê đông khách, hành động của tôi là?',
      id: 'Saat kafe sedang penuh, apa yang aku lakukan?',
    }),
    options: [
      opt(
        {
          ko: '줄이 길거나 자리가 없어 보이면 눈치 보며 빨리 정리한다',
          en: 'If the line is long or seats look scarce, I sense the mood and quickly pack up',
          ja: '列が長かったり席が無さそうだったら、周りの様子を見て早めに片付ける',
          'zh-CN': '如果排队变长或座位看起来不够，会看氛围赶紧收拾走人',
          'zh-TW': '如果排隊變長或座位看起來不夠，會看氛圍趕緊收拾走人',
          vi: 'Nếu thấy hàng dài hoặc không còn chỗ, tôi để ý xung quanh và nhanh chóng thu dọn',
          id: 'Kalau antrean panjang atau tempat duduk terlihat penuh, aku peka situasi dan cepat-cepat berkemas',
        },
        0
      ),
      opt(
        {
          ko: '이미 자리 잡았으니 상관없다. 내가 먼저 왔다',
          en: "I already have my seat, so it's not my problem. I got here first",
          ja: 'すでに席を確保したから関係ない。私が先に来た',
          'zh-CN': '反正我已经占好位置了，不关我的事。我先来的',
          'zh-TW': '反正我已經佔好位置了，不關我的事。我先來的',
          vi: 'Tôi đã có chỗ rồi nên không quan tâm. Tôi đến trước',
          id: 'Aku sudah mendapat tempat duduk, jadi tidak masalah. Aku datang lebih dulu',
        },
        1
      ),
    ],
  },
  {
    id: 8,
    question: L({
      ko: '카페에서 영상·음악을 볼 때 나는?',
      en: 'When I watch videos or listen to music at a cafe, I...',
      ja: 'カフェで動画・音楽を見るとき、私は？',
      'zh-CN': '在咖啡馆看视频或听音乐时，我会？',
      'zh-TW': '在咖啡廳看影片或聽音樂時，我會？',
      vi: 'Khi xem video hoặc nghe nhạc ở quán cà phê, tôi sẽ?',
      id: 'Saat menonton video atau mendengarkan musik di kafe, aku?',
    }),
    options: [
      opt(
        {
          ko: '이어폰을 항상 착용한다. 소리가 밖으로 새지 않게 한다',
          en: "Always wear earphones. I make sure the sound doesn't leak out",
          ja: 'イヤホンを常に着用する。音が外に漏れないようにする',
          'zh-CN': '一直戴着耳机。确保声音不会外漏',
          'zh-TW': '一直戴著耳機。確保聲音不會外漏',
          vi: 'Luôn đeo tai nghe. Đảm bảo âm thanh không lọt ra ngoài',
          id: 'Selalu memakai earphone. Memastikan suaranya tidak keluar',
        },
        0
      ),
      opt(
        {
          ko: '가끔 이어폰 없이 소리를 낮춰서 듣는다. 작게 하면 괜찮다고 생각한다',
          en: "Sometimes I listen without earphones, just at a lower volume. I figure it's fine if it's quiet",
          ja: 'たまにイヤホンなしで音量を下げて聞く。小さくすれば大丈夫だと思っている',
          'zh-CN': '偶尔不戴耳机，把音量调小听。觉得小声一点应该没关系',
          'zh-TW': '偶爾不戴耳機，把音量調小聽。覺得小聲一點應該沒關係',
          vi: 'Đôi khi tôi nghe không cần tai nghe, chỉ giảm âm lượng nhỏ xuống. Nghĩ nhỏ tiếng thì cũng không sao',
          id: 'Kadang mendengarkan tanpa earphone, hanya mengecilkan volumenya. Menganggap kalau kecil tidak masalah',
        },
        1
      ),
    ],
  },
  {
    id: 9,
    question: L({
      ko: '카페 작업 중 음식 배달을 시켜서 먹은 적 있나요?',
      en: 'While working at a cafe, have you ever ordered food delivery to eat there?',
      ja: 'カフェでの作業中、フードデリバリーを頼んで食べたことがありますか？',
      'zh-CN': '在咖啡馆工作时，有没有叫过外送食物来吃？',
      'zh-TW': '在咖啡廳工作時，有沒有叫過外送食物來吃？',
      vi: 'Khi đang làm việc ở quán cà phê, bạn có từng gọi đồ ăn giao tới để ăn không?',
      id: 'Saat sedang bekerja di kafe, apakah kamu pernah memesan makanan online untuk dimakan di sana?',
    }),
    options: [
      opt(
        {
          ko: '없다. 카페에서 외부 음식은 아닌 것 같다',
          en: "No. Outside food at a cafe just doesn't feel right",
          ja: 'ない。カフェで外部の食べ物はよくないと思う',
          'zh-CN': '没有。在咖啡馆吃外食好像不太合适',
          'zh-TW': '沒有。在咖啡廳吃外食好像不太合適',
          vi: 'Không. Mang đồ ăn từ ngoài vào quán cà phê thấy không hợp lắm',
          id: 'Tidak. Rasanya membawa makanan dari luar ke kafe kurang pantas',
        },
        0
      ),
      opt(
        {
          ko: '있다. 배고프면 어쩔 수 없다. 음료는 카페 것 먹었으니까',
          en: 'Yes. Can\'t help it when I\'m hungry — after all, I did buy a drink from the cafe',
          ja: 'ある。お腹が空いたら仕方ない。飲み物はカフェのものを飲んだから',
          'zh-CN': '有。饿了就没办法。反正饮料是咖啡馆的',
          'zh-TW': '有。餓了就沒辦法。反正飲料是咖啡廳的',
          vi: 'Có. Đói thì không nhịn được. Vì đồ uống thì tôi cũng mua của quán rồi',
          id: 'Pernah. Kalau lapar mau bagaimana lagi. Toh minumannya sudah beli dari kafe',
        },
        1
      ),
    ],
  },
  {
    id: 10,
    question: L({
      ko: '마감이 급할 때 카페에서 키보드를 치는 속도는?',
      en: 'When a deadline is close, how do you type on your keyboard at the cafe?',
      ja: '締め切りが迫っているとき、カフェでのキーボードを打つスピードは？',
      'zh-CN': '快到截止日期时，你在咖啡馆打键盘的方式是？',
      'zh-TW': '快到截止日期時，你在咖啡廳打鍵盤的方式是？',
      vi: 'Khi sát deadline, cách bạn gõ bàn phím ở quán cà phê là?',
      id: 'Saat deadline mendesak, bagaimana caramu mengetik keyboard di kafe?',
    }),
    options: [
      opt(
        {
          ko: '최대한 조용히 친다. 기계식 키보드는 카페에 안 가져온다',
          en: 'I type as quietly as possible. I never bring a mechanical keyboard to a cafe',
          ja: 'できるだけ静かに打つ。メカニカルキーボードはカフェに持ってこない',
          'zh-CN': '尽量安静地打字。机械键盘绝对不带去咖啡馆',
          'zh-TW': '盡量安靜地打字。機械鍵盤絕對不帶去咖啡廳',
          vi: 'Gõ càng nhẹ càng tốt. Không bao giờ mang bàn phím cơ đến quán cà phê',
          id: 'Mengetik seringan mungkin. Tidak pernah membawa keyboard mekanik ke kafe',
        },
        0
      ),
      opt(
        {
          ko: '마감이 급하면 소리 신경 쓸 여유가 없다. 딸깍딸깍해도 어쩔 수 없다',
          en: 'When the deadline is tight, I have no time to worry about noise. Click-clacking is unavoidable',
          ja: '締め切りが迫っていると音を気にする余裕がない。カチャカチャしても仕方ない',
          'zh-CN': '截止日期一紧张，就没空管声音了。咔嗒咔嗒也没办法',
          'zh-TW': '截止日期一緊張，就沒空管聲音了。喀嗒喀嗒也沒辦法',
          vi: 'Khi deadline gấp thì không còn thời gian để lo về tiếng ồn. Dù có lộp cộp cũng chịu',
          id: 'Kalau deadline mendesak, tidak ada waktu untuk memikirkan suara. Mau klik-klak juga tidak bisa dihindari',
        },
        1
      ),
    ],
  },
  {
    id: 11,
    question: L({
      ko: '카페 콘센트를 몇 시간 사용하나요?',
      en: "How many hours do you use the cafe's power outlet?",
      ja: 'カフェのコンセントを何時間使いますか？',
      'zh-CN': '你会使用咖啡馆的插座多长时间？',
      'zh-TW': '你會使用咖啡廳的插座多長時間？',
      vi: 'Bạn sử dụng ổ điện của quán cà phê trong bao nhiêu giờ?',
      id: 'Berapa jam kamu memakai stopkontak di kafe?',
    }),
    options: [
      opt(
        {
          ko: '1~2시간. 짧게 충전하고 뺀다',
          en: '1-2 hours. I charge briefly then unplug',
          ja: '1~2時間。短く充電して抜く',
          'zh-CN': '1~2小时。简短充电后就拔掉',
          'zh-TW': '1~2小時。簡短充電後就拔掉',
          vi: '1-2 giờ. Sạc một chút rồi rút ra',
          id: '1-2 jam. Mengisi daya sebentar lalu dicabut',
        },
        0
      ),
      opt(
        {
          ko: '처음부터 끝까지 꽂아두고 완충 상태로 작업한다',
          en: 'Keep it plugged in from start to finish and work at full charge',
          ja: '最初から最後まで差しておき、フル充電の状態で作業する',
          'zh-CN': '从头到尾都插着，一直保持满电状态工作',
          'zh-TW': '從頭到尾都插著，一直保持滿電狀態工作',
          vi: 'Cắm từ đầu đến cuối và làm việc trong tình trạng pin đầy',
          id: 'Tetap tercolok dari awal sampai akhir, bekerja dengan kondisi baterai penuh terus',
        },
        1
      ),
    ],
  },
  {
    id: 12,
    question: L({
      ko: '이 테스트를 하면서 "맞는 것 같은데 인정하기 싫다"는 항목이 있었나요?',
      en: 'While taking this test, was there an item that made you think "this seems true, but I don\'t want to admit it"?',
      ja: 'このテストをしている間、「当たっている気がするけど認めたくない」という項目がありましたか？',
      'zh-CN': '做这个测试的时候，有没有那种「感觉说得对但不想承认」的选项？',
      'zh-TW': '做這個測試的時候，有沒有那種「感覺說得對但不想承認」的選項？',
      vi: 'Khi làm bài test này, có mục nào khiến bạn nghĩ "có vẻ đúng nhưng không muốn công nhận" không?',
      id: 'Saat mengerjakan tes ini, apakah ada opsi yang membuatmu berpikir "kayaknya benar tapi aku tidak mau mengakuinya"?',
    }),
    options: [
      opt(
        {
          ko: '없다. 나는 에티켓 잘 지키는 카공족이다',
          en: "No. I'm a cafe studier who follows etiquette well",
          ja: 'ない。私はエチケットをしっかり守るカフェ勉族だ',
          'zh-CN': '没有。我是很守规矩的咖啡馆学习党',
          'zh-TW': '沒有。我是很守規矩的咖啡廳學習黨',
          vi: 'Không có. Tôi là dân học ở quán cà phê luôn tuân thủ quy tắc ứng xử',
          id: 'Tidak ada. Aku pekerja kafe yang selalu menjaga etika',
        },
        0
      ),
      opt(
        {
          ko: '있다. 몇 개는 찔렸다. 인정한다',
          en: 'Yes. A few of them stung. I admit it',
          ja: 'ある。いくつか刺さった。認める',
          'zh-CN': '有。有几个被戳中了。我承认',
          'zh-TW': '有。有幾個被戳中了。我承認',
          vi: 'Có. Vài mục khiến tôi chột dạ. Tôi công nhận',
          id: 'Ada. Beberapa bikin tersindir. Aku mengakuinya',
        },
        1
      ),
    ],
  },
];

export const phase3CafeWorkGradeResults: Phase3CafeWorkGradeResult[] = [
  {
    type: 'Type1',
    emoji: '☕',
    title: L({
      ko: '카공족 성인군자, 에티켓 만점',
      en: 'Cafe Studier Saint — Perfect Etiquette Score',
      ja: 'カフェ勉族の聖人、エチケット満点',
      'zh-CN': '咖啡馆学习党圣人，礼仪满分',
      'zh-TW': '咖啡廳學習黨聖人，禮儀滿分',
      vi: 'Vị thánh trong giới dân học ở quán cà phê, điểm ứng xử tuyệt đối',
      id: 'Orang Suci Pekerja Kafe, Nilai Etika Sempurna',
    }),
    shortDescription: L({
      ko: '당신은 카공족이라는 단어가 부끄럽지 않은 사람입니다. 카페도, 옆 손님도, 사장님도 모두 괜찮습니다.',
      en: 'You\'re someone who has nothing to be ashamed of when it comes to the word "cafe studier." The cafe, the customer next to you, and the owner are all completely fine with you.',
      ja: 'あなたは「カフェ勉族」という言葉が恥ずかしくない人です。カフェも、隣の客も、店主もすべて問題ありません。',
      'zh-CN': '你是那种听到「咖啡馆学习党」这个词也毫不心虚的人。无论是咖啡馆、邻座客人还是老板，都完全没问题。',
      'zh-TW': '你是那種聽到「咖啡廳學習黨」這個詞也毫不心虛的人。無論是咖啡廳、鄰座客人還是老闆，都完全沒問題。',
      vi: 'Bạn là người không cần xấu hổ khi bị gọi là "dân học ở quán cà phê". Cả quán, khách bên cạnh, và cả chủ quán đều không có vấn đề gì.',
      id: 'Kamu adalah orang yang tidak perlu malu disebut "pekerja kafe". Kafe, pelanggan di sebelah, bahkan pemiliknya pun semuanya baik-baik saja denganmu.',
    }),
    description: L({
      ko: '주문 먼저 하고, 추가 주문 하고, 자리 하나만 쓰고, 이어폰 착용하고, 붐빌 때 눈치 보고 나옵니다. 카공족 논쟁에서 당신은 피의자가 아닙니다. 이 결과를 공유하면 아무도 안 믿을 것입니다.',
      en: 'You order first, order extra, use only one seat, wear earphones, and read the room to leave when it\'s crowded. In cafe studier debates, you are not a suspect. If you share this result, no one will believe it.',
      ja: '先に注文し、追加注文もして、席は一つだけ使い、イヤホンを着用し、混んでいるときは空気を読んで出ます。カフェ勉族論争であなたは被疑者ではありません。この結果を共有しても誰も信じないでしょう。',
      'zh-CN': '先点单、会追加点单、只占一个位置、戴耳机、拥挤时也懂得看氛围离开。在咖啡馆学习党的争论中，你从来不是被告。分享这个结果，大概没人会信。',
      'zh-TW': '先點餐、會追加點餐、只佔一個位置、戴耳機、擁擠時也懂得看氛圍離開。在咖啡廳學習黨的爭論中，你從來不是被告。分享這個結果，大概沒人會信。',
      vi: 'Gọi đồ trước, gọi thêm đồ, chỉ dùng một chỗ ngồi, đeo tai nghe, và biết ý rời đi khi đông khách. Trong các cuộc tranh luận về dân học ở quán cà phê, bạn chưa từng là nghi phạm. Nếu chia sẻ kết quả này, chắc chẳng ai tin đâu.',
      id: 'Memesan dulu, memesan tambahan, hanya memakai satu tempat duduk, memakai earphone, dan peka situasi untuk pergi saat penuh. Dalam perdebatan soal pekerja kafe, kamu bukan tersangka. Kalau membagikan hasil ini, mungkin tidak akan ada yang percaya.',
    }),
    cafeGrade: L({
      ko: 'S급 에티켓 마스터',
      en: 'S-Grade Etiquette Master',
      ja: 'Sランク エチケットマスター',
      'zh-CN': 'S级礼仪大师',
      'zh-TW': 'S級禮儀大師',
      vi: 'Hạng S - Bậc thầy ứng xử',
      id: 'Grade S Master Etika',
    }),
    sections: [
      section(
        {
          ko: '☕ 카공 등급',
          en: '☕ Cafe Work Grade',
          ja: '☕ カフェ勉ランク',
          'zh-CN': '☕ 咖啡馆学习办公等级',
          'zh-TW': '☕ 咖啡廳學習辦公等級',
          vi: '☕ Cấp độ làm việc/học ở quán cà phê',
          id: '☕ Grade Kerja/Belajar di Kafe',
        },
        {
          ko: 'S급 에티켓 마스터',
          en: 'S-Grade Etiquette Master',
          ja: 'Sランク エチケットマスター',
          'zh-CN': 'S级礼仪大师',
          'zh-TW': 'S級禮儀大師',
          vi: 'Hạng S - Bậc thầy ứng xử',
          id: 'Grade S Master Etika',
        }
      ),
      section(
        {
          ko: '🏪 카페 사장님의 생각',
          en: "🏪 What the Cafe Owner Thinks",
          ja: '🏪 カフェ店主の思い',
          'zh-CN': '🏪 咖啡馆老板的想法',
          'zh-TW': '🏪 咖啡廳老闆的想法',
          vi: '🏪 Suy nghĩ của chủ quán cà phê',
          id: '🏪 Pikiran Pemilik Kafe',
        },
        {
          ko: '이런 손님만 오면 좋겠다',
          en: 'I wish every customer were like this',
          ja: 'こういう客だけ来てくれたらいい',
          'zh-CN': '要是客人都像这样就好了',
          'zh-TW': '要是客人都像這樣就好了',
          vi: 'Chỉ mong toàn khách như thế này',
          id: 'Andai semua pelanggan seperti ini',
        }
      ),
      section(
        {
          ko: '👥 옆 손님의 생각',
          en: '👥 What the Customer Next to You Thinks',
          ja: '👥 隣の客の思い',
          'zh-CN': '👥 隔壁客人的想法',
          'zh-TW': '👥 隔壁客人的想法',
          vi: '👥 Suy nghĩ của khách bên cạnh',
          id: '👥 Pikiran Pelanggan di Sebelah',
        },
        {
          ko: '저 사람 옆에 앉고 싶다',
          en: 'I want to sit next to that person',
          ja: 'あの人の隣に座りたい',
          'zh-CN': '想坐在那个人旁边',
          'zh-TW': '想坐在那個人旁邊',
          vi: 'Muốn ngồi cạnh người đó',
          id: 'Ingin duduk di sebelah orang itu',
        }
      ),
      section(
        {
          ko: '⚠️ 단 하나의 주의',
          en: '⚠️ The One Thing to Watch',
          ja: '⚠️ たった一つの注意点',
          'zh-CN': '⚠️ 唯一需要注意的一点',
          'zh-TW': '⚠️ 唯一需要注意的一點',
          vi: '⚠️ Điều cần lưu ý duy nhất',
          id: '⚠️ Satu-satunya Hal yang Perlu Diperhatikan',
        },
        {
          ko: '이렇게 잘 지키는 당신이 옆에서 기계식 키보드 치는 사람을 볼 때 참을 수 있는가',
          en: 'Can someone who follows etiquette this well stay calm when a mechanical keyboard typist sits nearby?',
          ja: 'こんなにきちんと守るあなたが、隣でメカニカルキーボードを打つ人を見たとき我慢できるか',
          'zh-CN': '遵守得这么好的你，看到旁边有人敲机械键盘时能不能忍住',
          'zh-TW': '遵守得這麼好的你，看到旁邊有人敲機械鍵盤時能不能忍住',
          vi: 'Người tuân thủ tốt như bạn có chịu được khi thấy ai đó gõ bàn phím cơ bên cạnh không',
          id: 'Apakah kamu yang begitu taat etika bisa bertahan saat melihat orang mengetik keyboard mekanik di sebelah',
        }
      ),
    ],
    shareMessage: L({
      ko: '카공족 등급: S급 에티켓 마스터 ☕ 카공족인데 욕 먹을 이유 없는 유형... 이 결과 공유하면 아무도 안 믿는다는 거 앎 ㅋㅋ → 너는 몇 등급이야? 카공 논쟁 해봐',
      en: "My cafe studier grade: S-Grade Etiquette Master ☕ The type of cafe studier with zero reason to get side-eyed... I know no one will believe it if I share this lol → What's your grade? Let's debate cafe etiquette",
      ja: 'カフェ勉族ランク：Sランク エチケットマスター ☕ カフェ勉族なのに叱られる理由がないタイプ…この結果を共有しても誰も信じないの分かってる（笑）→ あなたは何ランク？カフェ勉論争しよう',
      'zh-CN': '咖啡馆学习党等级：S级礼仪大师 ☕ 是咖啡馆学习党却没理由被骂的类型…知道分享这个没人会信 哈哈 → 你是什么等级？来场咖啡馆学习办公大辩论',
      'zh-TW': '咖啡廳學習黨等級：S級禮儀大師 ☕ 是咖啡廳學習黨卻沒理由被罵的類型…知道分享這個沒人會信 哈哈 → 你是什麼等級？來場咖啡廳學習辦公大辯論',
      vi: 'Cấp độ dân học ở quán cà phê của tôi: Hạng S - Bậc thầy ứng xử ☕ Kiểu dân học quán cà phê chẳng có gì để bị chê... biết là chia sẻ cái này chẳng ai tin đâu ha ha → Bạn hạng mấy? Cùng tranh luận về ứng xử quán cà phê nào',
      id: 'Grade pekerja kafeku: Grade S Master Etika ☕ Tipe pekerja kafe yang tidak punya alasan untuk dimarahi... aku tahu kalau dibagikan gak akan ada yang percaya wkwk → Kamu grade berapa? Ayo debat soal etika kerja di kafe',
    }),
  },
  {
    type: 'Type2',
    emoji: '🙂',
    title: L({
      ko: '대체로 양심적인, 소심 카공족',
      en: 'Generally Conscientious — Timid Cafe Studier',
      ja: '概ね良識的な、控えめカフェ勉族',
      'zh-CN': '大体上很有良心的，胆小咖啡馆学习党',
      'zh-TW': '大體上很有良心的，膽小咖啡廳學習黨',
      vi: 'Nhìn chung có ý thức, dân học quán cà phê nhút nhát',
      id: 'Umumnya Berhati Nurani, Pekerja Kafe Pemalu',
    }),
    shortDescription: L({
      ko: '크게 나쁜 건 없는데 가끔 한두 가지 놓치는 정도입니다.',
      en: 'Nothing seriously bad, just the occasional slip on one or two things.',
      ja: '大きく悪いことはないが、時々一つ二つ見落とす程度です。',
      'zh-CN': '没有什么大问题，只是偶尔会漏掉一两件小事。',
      'zh-TW': '沒有什麼大問題，只是偶爾會漏掉一兩件小事。',
      vi: 'Không có gì quá tệ, chỉ đôi khi lơ là một hai điều nhỏ.',
      id: 'Tidak ada yang benar-benar buruk, hanya kadang melewatkan satu dua hal kecil.',
    }),
    description: L({
      ko: '대체로 에티켓을 지키는데 가끔 한 잔으로 버티거나 콘센트를 너무 오래 쓰는 정도의 소소한 위반이 있는 레벨입니다. 카공족 논쟁에서 살짝 끼어있지만 본인은 억울한 유형입니다.',
      en: "You generally follow etiquette, but occasionally have minor slip-ups like nursing one drink too long or hogging the outlet for too long. You're the type who's slightly involved in cafe studier debates but feels a bit wronged about it.",
      ja: '大体エチケットを守るが、時々一杯で長く粘ったりコンセントを長く使いすぎたりする小さな違反があるレベルです。カフェ勉族論争に少し関わっているが、本人は不服なタイプです。',
      'zh-CN': '大体上会遵守礼仪，只是偶尔会有靠一杯饮料撑很久，或占用插座太久这种小小的违规。在咖啡馆学习党的争论中稍微沾点边，但本人觉得挺委屈。',
      'zh-TW': '大體上會遵守禮儀，只是偶爾會有靠一杯飲料撐很久，或佔用插座太久這種小小的違規。在咖啡廳學習黨的爭論中稍微沾點邊，但本人覺得挺委屈。',
      vi: 'Nhìn chung tuân thủ ứng xử, nhưng đôi khi có những vi phạm nhỏ như cố giữ một ly cà phê quá lâu hoặc dùng ổ điện quá lâu. Là kiểu người dính một chút vào các cuộc tranh luận về dân học quán cà phê nhưng bản thân cảm thấy hơi oan.',
      id: 'Secara umum menjaga etika, tapi kadang ada pelanggaran kecil seperti bertahan dengan satu gelas terlalu lama atau memakai stopkontak terlalu lama. Tipe yang sedikit tersangkut dalam perdebatan soal pekerja kafe tapi merasa agak tidak adil.',
    }),
    cafeGrade: L({
      ko: 'A급 소심 카공족',
      en: 'A-Grade Timid Cafe Studier',
      ja: 'Aランク控えめカフェ勉族',
      'zh-CN': 'A级胆小咖啡馆学习党',
      'zh-TW': 'A級膽小咖啡廳學習黨',
      vi: 'Hạng A - Dân học quán cà phê nhút nhát',
      id: 'Grade A Pekerja Kafe Pemalu',
    }),
    sections: [
      section(
        {
          ko: '☕ 카공 등급',
          en: '☕ Cafe Work Grade',
          ja: '☕ カフェ勉ランク',
          'zh-CN': '☕ 咖啡馆学习办公等级',
          'zh-TW': '☕ 咖啡廳學習辦公等級',
          vi: '☕ Cấp độ làm việc/học ở quán cà phê',
          id: '☕ Grade Kerja/Belajar di Kafe',
        },
        {
          ko: 'A급 소심 카공족',
          en: 'A-Grade Timid Cafe Studier',
          ja: 'Aランク控えめカフェ勉族',
          'zh-CN': 'A级胆小咖啡馆学习党',
          'zh-TW': 'A級膽小咖啡廳學習黨',
          vi: 'Hạng A - Dân học quán cà phê nhút nhát',
          id: 'Grade A Pekerja Kafe Pemalu',
        }
      ),
      section(
        {
          ko: '🏪 카페 사장님의 생각',
          en: '🏪 What the Cafe Owner Thinks',
          ja: '🏪 カフェ店主の思い',
          'zh-CN': '🏪 咖啡馆老板的想法',
          'zh-TW': '🏪 咖啡廳老闆的想法',
          vi: '🏪 Suy nghĩ của chủ quán cà phê',
          id: '🏪 Pikiran Pemilik Kafe',
        },
        {
          ko: '괜찮은 편이네. 가끔 추가 주문도 해주면 더 좋겠다',
          en: 'Pretty decent. Would be even better with the occasional extra order',
          ja: '結構いい方だね。時々追加注文もしてくれるともっといい',
          'zh-CN': '算是不错的。要是偶尔能追加点单就更好了',
          'zh-TW': '算是不錯的。要是偶爾能追加點餐就更好了',
          vi: 'Cũng khá được đấy. Nếu đôi khi gọi thêm đồ nữa thì càng tốt',
          id: 'Lumayan bagus. Kalau sesekali pesan tambahan lagi lebih bagus',
        }
      ),
      section(
        {
          ko: '👥 옆 손님의 생각',
          en: '👥 What the Customer Next to You Thinks',
          ja: '👥 隣の客の思い',
          'zh-CN': '👥 隔壁客人的想法',
          'zh-TW': '👥 隔壁客人的想法',
          vi: '👥 Suy nghĩ của khách bên cạnh',
          id: '👥 Pikiran Pelanggan di Sebelah',
        },
        {
          ko: '별로 신경 안 쓰임',
          en: "Doesn't really bother me",
          ja: '特に気にならない',
          'zh-CN': '不太会在意',
          'zh-TW': '不太會在意',
          vi: 'Không thấy phiền lắm',
          id: 'Tidak terlalu terganggu',
        }
      ),
      section(
        {
          ko: '✅ 개선 포인트',
          en: '✅ Room for Improvement',
          ja: '✅ 改善ポイント',
          'zh-CN': '✅ 改进要点',
          'zh-TW': '✅ 改進要點',
          vi: '✅ Điểm cần cải thiện',
          id: '✅ Poin Perbaikan',
        },
        {
          ko: '2시간 넘으면 음료 하나 더 시키기. 그게 전부',
          en: "If you're past 2 hours, order one more drink. That's it",
          ja: '2時間を超えたら飲み物を一つ追加注文する。それだけ',
          'zh-CN': '超过2小时就多点一杯饮料。就这么简单',
          'zh-TW': '超過2小時就多點一杯飲料。就這麼簡單',
          vi: 'Nếu quá 2 giờ thì gọi thêm một đồ uống. Vậy là đủ',
          id: 'Kalau sudah lebih dari 2 jam, pesan satu minuman lagi. Itu saja',
        }
      ),
    ],
    shareMessage: L({
      ko: '카공족 등급: A급 소심 카공족 🙂 대체로 에티켓 지키는 유형... 가끔 한 잔으로 버티는 거 찔리긴 함 ㅋㅋ → 너는 몇 등급이야?',
      en: "My cafe studier grade: A-Grade Timid Cafe Studier 🙂 Generally follows etiquette... felt a bit called out about nursing one drink lol → What's your grade?",
      ja: 'カフェ勉族ランク：Aランク控えめカフェ勉族 🙂 大体エチケットを守るタイプ…時々一杯で粘るのちょっと刺さった（笑）→ あなたは何ランク？',
      'zh-CN': '咖啡馆学习党等级：A级胆小咖啡馆学习党 🙂 大体上遵守礼仪的类型…偶尔靠一杯撑到底这点被戳中了 哈哈 → 你是什么等级？',
      'zh-TW': '咖啡廳學習黨等級：A級膽小咖啡廳學習黨 🙂 大體上遵守禮儀的類型…偶爾靠一杯撐到底這點被戳中了 哈哈 → 你是什麼等級？',
      vi: 'Cấp độ dân học ở quán cà phê của tôi: Hạng A - Dân học quán cà phê nhút nhát 🙂 Kiểu người nhìn chung tuân thủ ứng xử... hơi chột dạ vì đôi khi cố giữ một ly quá lâu ha ha → Bạn hạng mấy?',
      id: 'Grade pekerja kafeku: Grade A Pekerja Kafe Pemalu 🙂 Tipe yang umumnya menjaga etika... agak tersindir soal bertahan dengan satu gelas wkwk → Kamu grade berapa?',
    }),
  },
  {
    type: 'Type3',
    emoji: '🙃',
    title: L({
      ko: '무감각한 카공족, 보통 빌런',
      en: 'Oblivious Cafe Studier — Everyday Villain',
      ja: '無感覚なカフェ勉族、普通ヴィラン',
      'zh-CN': '迟钝的咖啡馆学习党，普通反派',
      'zh-TW': '遲鈍的咖啡廳學習黨，普通反派',
      vi: 'Dân học quán cà phê vô tư, kẻ phản diện bình thường',
      id: 'Pekerja Kafe yang Tidak Sadar, Villain Biasa',
    }),
    shortDescription: L({
      ko: '나쁜 의도는 없는데 결과적으로 주변을 불편하게 만드는 행동들이 있습니다.',
      en: "There's no bad intent, but the end result is behavior that makes others around you uncomfortable.",
      ja: '悪意はないが、結果的に周りを不快にさせる行動があります。',
      'zh-CN': '没有恶意，但结果上确实做出了一些让周围人不舒服的行为。',
      'zh-TW': '沒有惡意，但結果上確實做出了一些讓周圍人不舒服的行為。',
      vi: 'Không có ác ý gì, nhưng kết quả là có những hành động khiến người xung quanh khó chịu.',
      id: 'Tidak ada niat buruk, tapi pada akhirnya ada perilaku yang membuat orang sekitar tidak nyaman.',
    }),
    description: L({
      ko: '한 잔으로 오래 버티거나 짐으로 자리를 점령하거나 붐벼도 눈치를 잘 못 채는 패턴입니다. 카공족 논쟁에서 당신 같은 사람이 주된 이야기 대상이 됩니다. 본인은 억울할 수 있습니다.',
      en: "A pattern of nursing one drink for a long time, occupying seats with your belongings, or not really noticing when it gets crowded. People like you are the main subject in cafe studier debates. You might feel it's unfair, though.",
      ja: '一杯で長く粘ったり、荷物で席を占領したり、混んでいてもなかなか気づかないパターンです。カフェ勉族論争であなたのような人が主な話題の対象になります。本人は不服に思うかもしれません。',
      'zh-CN': '属于靠一杯饮料撑很久、用行李占位、拥挤时也很难察觉的类型。在咖啡馆学习党的争论中，像你这样的人正是主要谈论对象。本人可能会觉得委屈。',
      'zh-TW': '屬於靠一杯飲料撐很久、用行李佔位、擁擠時也很難察覺的類型。在咖啡廳學習黨的爭論中，像你這樣的人正是主要談論對象。本人可能會覺得委屈。',
      vi: 'Là kiểu mẫu cố giữ một ly quá lâu, chiếm chỗ bằng đồ đạc, hoặc khó nhận ra khi quán đông. Trong các cuộc tranh luận về dân học quán cà phê, người như bạn chính là đối tượng chính được nhắc đến. Bản thân bạn có thể cảm thấy oan.',
      id: 'Pola bertahan lama dengan satu gelas, menguasai tempat duduk dengan barang, atau kurang peka saat kafe penuh. Dalam perdebatan soal pekerja kafe, orang seperti kamu jadi topik utama pembicaraan. Kamu sendiri mungkin merasa tidak adil.',
    }),
    cafeGrade: L({
      ko: 'B급 무감각 카공족',
      en: 'B-Grade Oblivious Cafe Studier',
      ja: 'Bランク無感覚カフェ勉族',
      'zh-CN': 'B级迟钝咖啡馆学习党',
      'zh-TW': 'B級遲鈍咖啡廳學習黨',
      vi: 'Hạng B - Dân học quán cà phê vô tư',
      id: 'Grade B Pekerja Kafe yang Tidak Sadar',
    }),
    sections: [
      section(
        {
          ko: '☕ 카공 등급',
          en: '☕ Cafe Work Grade',
          ja: '☕ カフェ勉ランク',
          'zh-CN': '☕ 咖啡馆学习办公等级',
          'zh-TW': '☕ 咖啡廳學習辦公等級',
          vi: '☕ Cấp độ làm việc/học ở quán cà phê',
          id: '☕ Grade Kerja/Belajar di Kafe',
        },
        {
          ko: 'B급 무감각 카공족',
          en: 'B-Grade Oblivious Cafe Studier',
          ja: 'Bランク無感覚カフェ勉族',
          'zh-CN': 'B级迟钝咖啡馆学习党',
          'zh-TW': 'B級遲鈍咖啡廳學習黨',
          vi: 'Hạng B - Dân học quán cà phê vô tư',
          id: 'Grade B Pekerja Kafe yang Tidak Sadar',
        }
      ),
      section(
        {
          ko: '🏪 카페 사장님의 생각',
          en: '🏪 What the Cafe Owner Thinks',
          ja: '🏪 カフェ店主の思い',
          'zh-CN': '🏪 咖啡馆老板的想法',
          'zh-TW': '🏪 咖啡廳老闆的想法',
          vi: '🏪 Suy nghĩ của chủ quán cà phê',
          id: '🏪 Pikiran Pemilik Kafe',
        },
        {
          ko: '저분 오늘 뭐 시킨 게 뭐였더라...',
          en: 'What did that person even order today...?',
          ja: 'あの方、今日何を頼んだんだっけ…',
          'zh-CN': '那位客人今天点的是什么来着……',
          'zh-TW': '那位客人今天點的是什麼來著……',
          vi: 'Người đó hôm nay gọi gì nhỉ...',
          id: 'Orang itu tadi pesan apa ya...',
        }
      ),
      section(
        {
          ko: '👥 옆 손님의 생각',
          en: '👥 What the Customer Next to You Thinks',
          ja: '👥 隣の客の思い',
          'zh-CN': '👥 隔壁客人的想法',
          'zh-TW': '👥 隔壁客人的想法',
          vi: '👥 Suy nghĩ của khách bên cạnh',
          id: '👥 Pikiran Pelanggan di Sebelah',
        },
        {
          ko: '저 사람 자리 차지하는 거 좀...',
          en: 'That person taking up all that space is kind of...',
          ja: 'あの人が席を占領するの、ちょっと…',
          'zh-CN': '那个人占位置的样子有点……',
          'zh-TW': '那個人佔位置的樣子有點……',
          vi: 'Người đó chiếm chỗ kiểu đó thì hơi...',
          id: 'Orang itu menguasai tempat duduk agak...',
        }
      ),
      section(
        {
          ko: '✅ 개선 포인트',
          en: '✅ Room for Improvement',
          ja: '✅ 改善ポイント',
          'zh-CN': '✅ 改进要点',
          'zh-TW': '✅ 改進要點',
          vi: '✅ Điểm cần cải thiện',
          id: '✅ Poin Perbaikan',
        },
        {
          ko: '3시간이 넘었다면 음료 추가 주문 + 짐은 한 자리에만 두기',
          en: 'Past 3 hours? Order another drink + keep your stuff to one seat',
          ja: '3時間を超えたら飲み物を追加注文 + 荷物は一つの席にだけ置く',
          'zh-CN': '超过3小时就追加点单 + 行李只放在一个位置',
          'zh-TW': '超過3小時就追加點餐 + 行李只放在一個位置',
          vi: 'Nếu quá 3 giờ, hãy gọi thêm đồ uống + chỉ để đồ ở một chỗ',
          id: 'Kalau sudah lewat 3 jam, pesan tambahan minuman + letakkan barang hanya di satu tempat',
        }
      ),
    ],
    shareMessage: L({
      ko: '카공족 등급: B급 보통 빌런 🙃 본인은 모르는데 주변은 아는 유형이래... 카공 논쟁 게시물 내 이야기였나 ㅠ → 너는 몇 등급이야?',
      en: "My cafe studier grade: B-Grade Everyday Villain 🙃 The type you don't notice about yourself but everyone else does... was that cafe debate post about me 😢 → What's your grade?",
      ja: 'カフェ勉族ランク：Bランク普通ヴィラン 🙃 本人は気づかないが周りは分かってるタイプらしい…あのカフェ勉論争の投稿、私のことだったのか ㅠ → あなたは何ランク？',
      'zh-CN': '咖啡馆学习党等级：B级普通反派 🙃 据说是自己不知道但周围都知道的类型…咖啡馆学习办公争论那篇帖子说的是我吗 ㅠ → 你是什么等级？',
      'zh-TW': '咖啡廳學習黨等級：B級普通反派 🙃 據說是自己不知道但周圍都知道的類型…咖啡廳學習辦公爭論那篇貼文說的是我嗎 ㅠ → 你是什麼等級？',
      vi: 'Cấp độ dân học ở quán cà phê của tôi: Hạng B - Kẻ phản diện bình thường 🙃 Kiểu người bản thân không biết nhưng ai xung quanh cũng biết... không biết bài viết tranh luận đó có phải nói về mình không ㅠ → Bạn hạng mấy?',
      id: 'Grade pekerja kafeku: Grade B Villain Biasa 🙃 Katanya tipe yang dirinya sendiri tidak sadar tapi orang lain sadar... jangan-jangan postingan debat kafe itu tentang aku ㅠ → Kamu grade berapa?',
    }),
  },
  {
    type: 'Type4',
    emoji: '😤',
    title: L({
      ko: '눈치가 없는, 자리 점령 카공족',
      en: 'Clueless — Seat-Occupying Cafe Studier',
      ja: '空気が読めない、席占領カフェ勉族',
      'zh-CN': '没眼力的，占位咖啡馆学习党',
      'zh-TW': '沒眼力的，佔位咖啡廳學習黨',
      vi: 'Vô tâm, dân học quán cà phê chiếm chỗ',
      id: 'Tidak Peka, Pekerja Kafe Penguasa Tempat Duduk',
    }),
    shortDescription: L({
      ko: '이 정도면 카페를 독서실이나 사무실로 착각하고 있는 겁니다.',
      en: "At this point, you're basically mistaking the cafe for a study room or an office.",
      ja: 'この程度ならカフェを図書館や事務所と間違えているレベルです。',
      'zh-CN': '到这个程度，已经把咖啡馆错认成自习室或办公室了。',
      'zh-TW': '到這個程度，已經把咖啡廳錯認成自習室或辦公室了。',
      vi: 'Đến mức này thì bạn đang nhầm quán cà phê với phòng tự học hoặc văn phòng rồi.',
      id: 'Sampai level ini, kamu sudah salah mengira kafe sebagai ruang belajar atau kantor.',
    }),
    description: L({
      ko: '멀티탭 들고 오고 외부 음식 먹고 이어폰 없이 통화하고 한 잔으로 5시간 버티는 패턴의 조합입니다. 카페가 싫어하는 손님 유형 톱3 안에 드는 레벨입니다. 나쁜 사람이라기보다 카공 에티켓에 대한 감각이 없는 상태입니다.',
      en: "A combination of bringing a power strip, eating outside food, talking on the phone without earphones, and nursing one drink for 5 hours. This puts you in the top 3 customer types cafes dislike. Not a bad person, exactly — just someone with no sense for cafe studying etiquette.",
      ja: '電源タップを持ってきて、外部の食べ物を食べ、イヤホンなしで電話し、一杯で5時間粘るパターンの組み合わせです。カフェが嫌う客タイプのトップ3に入るレベルです。悪い人というより、カフェ勉エチケットに対する感覚がない状態です。',
      'zh-CN': '带延长线、吃外食、不戴耳机打电话、靠一杯撑5小时的组合模式。属于咖啡馆最不喜欢的顾客类型前三名等级。与其说是坏人，不如说是对咖啡馆学习办公礼仪完全没有概念。',
      'zh-TW': '帶延長線、吃外食、不戴耳機打電話、靠一杯撐5小時的組合模式。屬於咖啡廳最不喜歡的顧客類型前三名等級。與其說是壞人，不如說是對咖啡廳學習辦公禮儀完全沒有概念。',
      vi: 'Là tổ hợp của việc mang theo ổ cắm điện, ăn đồ mang từ ngoài vào, gọi điện không tai nghe, và cố giữ một ly suốt 5 giờ. Đây là mức nằm trong top 3 kiểu khách hàng mà quán cà phê không thích. Không phải là người xấu, mà chỉ là chưa có ý thức về ứng xử khi học/làm việc ở quán cà phê.',
      id: 'Kombinasi membawa terminal listrik, makan makanan dari luar, menelepon tanpa earphone, dan bertahan 5 jam dengan satu gelas. Ini masuk level top 3 tipe pelanggan yang tidak disukai kafe. Bukan orang jahat, hanya belum punya kepekaan soal etika kerja/belajar di kafe.',
    }),
    cafeGrade: L({
      ko: 'C급 자리 점령 카공족',
      en: 'C-Grade Seat-Occupying Cafe Studier',
      ja: 'Cランク席占領カフェ勉族',
      'zh-CN': 'C级占位咖啡馆学习党',
      'zh-TW': 'C級佔位咖啡廳學習黨',
      vi: 'Hạng C - Dân học quán cà phê chiếm chỗ',
      id: 'Grade C Pekerja Kafe Penguasa Tempat Duduk',
    }),
    sections: [
      section(
        {
          ko: '☕ 카공 등급',
          en: '☕ Cafe Work Grade',
          ja: '☕ カフェ勉ランク',
          'zh-CN': '☕ 咖啡馆学习办公等级',
          'zh-TW': '☕ 咖啡廳學習辦公等級',
          vi: '☕ Cấp độ làm việc/học ở quán cà phê',
          id: '☕ Grade Kerja/Belajar di Kafe',
        },
        {
          ko: 'C급 자리 점령 카공족',
          en: 'C-Grade Seat-Occupying Cafe Studier',
          ja: 'Cランク席占領カフェ勉族',
          'zh-CN': 'C级占位咖啡馆学习党',
          'zh-TW': 'C級佔位咖啡廳學習黨',
          vi: 'Hạng C - Dân học quán cà phê chiếm chỗ',
          id: 'Grade C Pekerja Kafe Penguasa Tempat Duduk',
        }
      ),
      section(
        {
          ko: '🏪 카페 사장님의 생각',
          en: '🏪 What the Cafe Owner Thinks',
          ja: '🏪 カフェ店主の思い',
          'zh-CN': '🏪 咖啡馆老板的想法',
          'zh-TW': '🏪 咖啡廳老闆的想法',
          vi: '🏪 Suy nghĩ của chủ quán cà phê',
          id: '🏪 Pikiran Pemilik Kafe',
        },
        {
          ko: '저분 오늘 아메리카노 한 잔으로 6시간째...',
          en: "That person's been on the same Americano for 6 hours now...",
          ja: 'あの方、今日アメリカーノ一杯で6時間目…',
          'zh-CN': '那位客人靠一杯美式已经撑了6个小时了……',
          'zh-TW': '那位客人靠一杯美式已經撐了6個小時了……',
          vi: 'Người đó đã ngồi với một ly Americano suốt 6 giờ rồi...',
          id: 'Orang itu sudah 6 jam dengan satu gelas Americano...',
        }
      ),
      section(
        {
          ko: '👥 옆 손님의 생각',
          en: '👥 What the Customer Next to You Thinks',
          ja: '👥 隣の客の思い',
          'zh-CN': '👥 隔壁客人的想法',
          'zh-TW': '👥 隔壁客人的想法',
          vi: '👥 Suy nghĩ của khách bên cạnh',
          id: '👥 Pikiran Pelanggan di Sebelah',
        },
        {
          ko: '저 분 멀티탭까지 가져왔네...',
          en: 'That person even brought a power strip...',
          ja: 'あの方、電源タップまで持ってきたんだ…',
          'zh-CN': '那个人连延长线都带来了……',
          'zh-TW': '那個人連延長線都帶來了……',
          vi: 'Người đó còn mang cả ổ cắm điện đến nữa...',
          id: 'Orang itu sampai bawa terminal listrik segala...',
        }
      ),
      section(
        {
          ko: '✅ 개선 포인트',
          en: '✅ Room for Improvement',
          ja: '✅ 改善ポイント',
          'zh-CN': '✅ 改进要点',
          'zh-TW': '✅ 改進要點',
          vi: '✅ Điểm cần cải thiện',
          id: '✅ Poin Perbaikan',
        },
        {
          ko: '오늘 당장 세 가지만 고치기. 추가 주문하기·짐 한 자리로 줄이기·이어폰 착용하기',
          en: 'Fix just three things starting today: order extra, keep your stuff to one seat, wear earphones',
          ja: '今日すぐに三つだけ直す。追加注文する・荷物は一つの席にまとめる・イヤホンを着用する',
          'zh-CN': '今天就先改这三点：追加点单、行李收到一个位置、戴上耳机',
          'zh-TW': '今天就先改這三點：追加點餐、行李收到一個位置、戴上耳機',
          vi: 'Sửa ngay ba điều hôm nay: gọi thêm đồ, gom đồ vào một chỗ, đeo tai nghe',
          id: 'Perbaiki tiga hal ini mulai hari ini: pesan tambahan, kumpulkan barang di satu tempat, pakai earphone',
        }
      ),
    ],
    shareMessage: L({
      ko: '카공족 등급: C급 자리 점령 카공족 😤 카공 논쟁 핵심 피의자 등극... 멀티탭 들고 간 거 인정 ㅋㅋ → 너는 몇 등급이야? 카페 에티켓 논쟁 해봐',
      en: "My cafe studier grade: C-Grade Seat-Occupying Cafe Studier 😤 Officially the prime suspect in cafe debates... I admit to bringing the power strip lol → What's your grade? Let's debate cafe etiquette",
      ja: 'カフェ勉族ランク：Cランク席占領カフェ勉族 😤 カフェ勉論争の主犯格に登板…電源タップ持ってったの認める（笑）→ あなたは何ランク？カフェエチケット論争しよう',
      'zh-CN': '咖啡馆学习党等级：C级占位咖啡馆学习党 😤 荣登咖啡馆学习办公争论头号嫌疑人…带延长线这点我认了 哈哈 → 你是什么等级？来场咖啡馆礼仪大辩论',
      'zh-TW': '咖啡廳學習黨等級：C級佔位咖啡廳學習黨 😤 榮登咖啡廳學習辦公爭論頭號嫌疑人…帶延長線這點我認了 哈哈 → 你是什麼等級？來場咖啡廳禮儀大辯論',
      vi: 'Cấp độ dân học ở quán cà phê của tôi: Hạng C - Dân học quán cà phê chiếm chỗ 😤 Chính thức lên hạng nghi phạm số 1 trong tranh luận cà phê... công nhận việc mang ổ cắm điện ha ha → Bạn hạng mấy? Cùng tranh luận về ứng xử quán cà phê',
      id: 'Grade pekerja kafeku: Grade C Penguasa Tempat Duduk 😤 Resmi jadi tersangka utama debat kafe... aku akui soal bawa terminal listrik wkwk → Kamu grade berapa? Ayo debat soal etika kafe',
    }),
  },
  {
    type: 'Type5',
    emoji: '😈',
    title: L({
      ko: '카페를 사무실로 쓰는, 고급 점령군',
      en: 'Using the Cafe as an Office — Elite Occupier',
      ja: 'カフェを事務所として使う、上級占領軍',
      'zh-CN': '把咖啡馆当办公室用的，高级占领军',
      'zh-TW': '把咖啡廳當辦公室用的，高級佔領軍',
      vi: 'Dùng quán cà phê như văn phòng, quân chiếm đóng cấp cao',
      id: 'Menggunakan Kafe sebagai Kantor, Penguasa Kelas Tinggi',
    }),
    shortDescription: L({
      ko: '누군가 당신 사진을 찍어서 카페 에티켓 논쟁 게시물에 올렸을 가능성이 있습니다.',
      en: "There's a good chance someone has taken your photo and posted it in a cafe etiquette debate thread.",
      ja: '誰かがあなたの写真を撮って、カフェエチケット論争の投稿に上げた可能性があります。',
      'zh-CN': '很有可能已经有人偷拍了你，发到咖啡馆礼仪争论的帖子里了。',
      'zh-TW': '很有可能已經有人偷拍了你，發到咖啡廳禮儀爭論的貼文裡了。',
      vi: 'Có khả năng ai đó đã chụp ảnh bạn và đăng lên bài viết tranh luận về ứng xử quán cà phê rồi.',
      id: 'Ada kemungkinan seseorang sudah memotretmu dan mengunggahnya di postingan debat etika kafe.',
    }),
    description: L({
      ko: '멀티탭·외부 음식·이어폰 없는 통화·여러 자리 점령·한 잔 6시간의 풀세트에 가까운 레벨입니다. 이것은 악의가 있어서가 아니라 카공을 당연한 권리로 인식하는 패턴에서 옵니다. 커뮤니티 게시판에서 목격담으로 등장할 확률이 높습니다.',
      en: "This level is nearly the full set: power strip, outside food, phone calls without earphones, occupying multiple seats, and 6 hours on one drink. This isn't malice — it comes from treating cafe studying as an entitled right. There's a high chance you've already shown up as a \"sighting\" post on some community board.",
      ja: '電源タップ・外部食品・イヤホンなしの通話・複数席占領・一杯6時間のフルセットに近いレベルです。これは悪意があるからではなく、カフェ勉を当然の権利と認識するパターンから来ます。コミュニティ掲示板に目撃談として登場する確率が高いです。',
      'zh-CN': '几乎是延长线、外食、不戴耳机通话、占据多个座位、一杯撑6小时的全套组合。这不是出于恶意，而是把咖啡馆学习办公当成理所当然的权利。在社区论坛上以「目击情报」的形式出现的概率很高。',
      'zh-TW': '幾乎是延長線、外食、不戴耳機通話、佔據多個座位、一杯撐6小時的全套組合。這不是出於惡意，而是把咖啡廳學習辦公當成理所當然的權利。在社群論壇上以「目擊情報」的形式出現的機率很高。',
      vi: 'Đây là mức gần như đủ bộ: ổ cắm điện, đồ ăn mang từ ngoài, gọi điện không tai nghe, chiếm nhiều chỗ, và một ly kéo dài 6 giờ. Điều này không xuất phát từ ác ý, mà từ việc coi việc học/làm ở quán cà phê là quyền đương nhiên. Khả năng cao bạn đã xuất hiện trong bài "chứng kiến" trên các diễn đàn cộng đồng.',
      id: 'Level ini hampir set lengkap: terminal listrik, makanan dari luar, telepon tanpa earphone, menguasai beberapa tempat duduk, dan satu gelas bertahan 6 jam. Ini bukan karena niat buruk, tapi karena menganggap kerja/belajar di kafe sebagai hak yang wajar. Kemungkinan besar kamu sudah muncul sebagai "cerita saksi mata" di forum komunitas.',
    }),
    cafeGrade: L({
      ko: 'D급 카페 점령군',
      en: 'D-Grade Cafe Occupier',
      ja: 'Dランクカフェ占領軍',
      'zh-CN': 'D级咖啡馆占领军',
      'zh-TW': 'D級咖啡廳佔領軍',
      vi: 'Hạng D - Quân chiếm đóng quán cà phê',
      id: 'Grade D Penguasa Kafe',
    }),
    sections: [
      section(
        {
          ko: '☕ 카공 등급',
          en: '☕ Cafe Work Grade',
          ja: '☕ カフェ勉ランク',
          'zh-CN': '☕ 咖啡馆学习办公等级',
          'zh-TW': '☕ 咖啡廳學習辦公等級',
          vi: '☕ Cấp độ làm việc/học ở quán cà phê',
          id: '☕ Grade Kerja/Belajar di Kafe',
        },
        {
          ko: 'D급 카페 점령군',
          en: 'D-Grade Cafe Occupier',
          ja: 'Dランクカフェ占領軍',
          'zh-CN': 'D级咖啡馆占领军',
          'zh-TW': 'D級咖啡廳佔領軍',
          vi: 'Hạng D - Quân chiếm đóng quán cà phê',
          id: 'Grade D Penguasa Kafe',
        }
      ),
      section(
        {
          ko: '🏪 카페 사장님의 생각',
          en: '🏪 What the Cafe Owner Thinks',
          ja: '🏪 カフェ店主の思い',
          'zh-CN': '🏪 咖啡馆老板的想法',
          'zh-TW': '🏪 咖啡廳老闆的想法',
          vi: '🏪 Suy nghĩ của chủ quán cà phê',
          id: '🏪 Pikiran Pemilik Kafe',
        },
        {
          ko: '"죄송하지만 2시간 이용 제한이 있어서요..." 말하고 싶은 상태',
          en: 'In a state of wanting to say, "I\'m sorry, but there\'s a 2-hour time limit..."',
          ja: '「すみませんが、2時間の利用制限がありまして…」と言いたい状態',
          'zh-CN': '处于很想说「不好意思，我们有2小时使用限制…」的状态',
          'zh-TW': '處於很想說「不好意思，我們有2小時使用限制…」的狀態',
          vi: 'Đang muốn nói "Xin lỗi nhưng bên em có giới hạn sử dụng 2 giờ..."',
          id: 'Sedang ingin berkata, "Maaf, tapi ada batas penggunaan 2 jam..."',
        }
      ),
      section(
        {
          ko: '👥 옆 손님의 생각',
          en: '👥 What the Customer Next to You Thinks',
          ja: '👥 隣の客の思い',
          'zh-CN': '👥 隔壁客人的想法',
          'zh-TW': '👥 隔壁客人的想法',
          vi: '👥 Suy nghĩ của khách bên cạnh',
          id: '👥 Pikiran Pelanggan di Sebelah',
        },
        {
          ko: '자리 안 잡히는 이유가 저 사람 때문이라는 걸 알고 있음',
          en: "Already knows exactly why they can't find a seat — because of that person",
          ja: '席が取れない理由があの人のせいだと分かっている',
          'zh-CN': '心里清楚找不到位置就是因为那个人',
          'zh-TW': '心裡清楚找不到位置就是因為那個人',
          vi: 'Đã biết rõ nguyên nhân không tìm được chỗ ngồi chính là do người đó',
          id: 'Sudah tahu bahwa alasan tidak dapat tempat duduk adalah karena orang itu',
        }
      ),
      section(
        {
          ko: '🚀 지금 당장',
          en: '🚀 Right Now',
          ja: '🚀 今すぐ',
          'zh-CN': '🚀 现在马上',
          'zh-TW': '🚀 現在馬上',
          vi: '🚀 Ngay bây giờ',
          id: '🚀 Sekarang Juga',
        },
        {
          ko: '카페 아닌 독서실·공유 오피스·도서관으로 이동하기',
          en: 'Move to a study room, shared office, or library instead of a cafe',
          ja: 'カフェではなく自習室・シェアオフィス・図書館へ移動する',
          'zh-CN': '转移到自习室、共享办公室或图书馆，而不是咖啡馆',
          'zh-TW': '轉移到自習室、共享辦公室或圖書館，而不是咖啡廳',
          vi: 'Chuyển sang phòng tự học, văn phòng chia sẻ, hoặc thư viện thay vì quán cà phê',
          id: 'Pindah ke ruang belajar, coworking space, atau perpustakaan, bukan kafe',
        }
      ),
    ],
    shareMessage: L({
      ko: '카공족 등급: D급 카페 점령군 😈 커뮤니티 게시판 목격담 주인공 될 수 있는 레벨이래... 나 혹시 찍혔나 ㅋㅋ → 너는 몇 등급이야?',
      en: "My cafe studier grade: D-Grade Cafe Occupier 😈 Apparently the level where you become the star of community \"sighting\" posts... did someone photograph me lol → What's your grade?",
      ja: 'カフェ勉族ランク：Dランクカフェ占領軍 😈 コミュニティ掲示板の目撃談の主人公になれるレベルらしい…私、もしかして撮られた？（笑）→ あなたは何ランク？',
      'zh-CN': '咖啡馆学习党等级：D级咖啡馆占领军 😈 据说是能成为社区论坛「目击情报」主角的等级…我是不是被拍下来了 哈哈 → 你是什么等级？',
      'zh-TW': '咖啡廳學習黨等級：D級咖啡廳佔領軍 😈 據說是能成為社群論壇「目擊情報」主角的等級…我是不是被拍下來了 哈哈 → 你是什麼等級？',
      vi: 'Cấp độ dân học ở quán cà phê của tôi: Hạng D - Quân chiếm đóng quán cà phê 😈 Nghe nói đây là mức có thể trở thành nhân vật chính trong bài "chứng kiến" trên diễn đàn cộng đồng... chẳng biết mình có bị chụp không ha ha → Bạn hạng mấy?',
      id: 'Grade pekerja kafeku: Grade D Penguasa Kafe 😈 Katanya ini level yang bisa jadi bintang postingan "saksi mata" komunitas... jangan-jangan aku sudah difoto wkwk → Kamu grade berapa?',
    }),
  },
  {
    type: 'Type6',
    emoji: '👻',
    title: L({
      ko: '카공족 빌런 만렙, 전설의 점령자',
      en: 'Max-Level Cafe Studier Villain — The Legendary Occupier',
      ja: 'カフェ勉族ヴィラン満レベル、伝説の占領者',
      'zh-CN': '咖啡馆学习党反派满级，传说中的占领者',
      'zh-TW': '咖啡廳學習黨反派滿級，傳說中的佔領者',
      vi: 'Kẻ phản diện dân học quán cà phê Max Level, Kẻ chiếm đóng huyền thoại',
      id: 'Villain Pekerja Kafe Level Maksimal, Sang Penguasa Legendaris',
    }),
    shortDescription: L({
      ko: '12개 전부 B를 답한 당신. 솔직함만큼은 S급입니다.',
      en: 'You who answered B on all 12 questions. Your honesty, at least, is S-tier.',
      ja: '12個全部Bと答えたあなた。正直さだけはSランクです。',
      'zh-CN': '全部12题都选了B的你。至少诚实这一点是S级。',
      'zh-TW': '全部12題都選了B的你。至少誠實這一點是S級。',
      vi: 'Bạn đã chọn B cho toàn bộ 12 câu. Riêng sự trung thực thì đúng là hạng S.',
      id: 'Kamu yang menjawab B untuk semua 12 pertanyaan. Setidaknya soal kejujuran, kamu grade S.',
    }),
    description: L({
      ko: '외부 음식에 멀티탭에 이어폰 없는 통화에 여러 자리 점령에 한 잔으로 하루 종일. 가능한 모든 카공 에티켓 위반을 경험하고 인정한 레벨입니다. 카공 금지 카페가 늘어나는 데 일조하고 있을 가능성이 있습니다.',
      en: "Outside food, a power strip, phone calls without earphones, occupying multiple seats, one drink all day long. This is the level where you've experienced and admitted to every possible cafe studying etiquette violation. There's a chance you're contributing to the rise in cafes banning cafe studying.",
      ja: '外部食品、電源タップ、イヤホンなしの通話、複数席占領、一杯で一日中。可能なすべてのカフェ勉エチケット違反を経験し認めたレベルです。カフェ勉禁止カフェが増えることに一役買っている可能性があります。',
      'zh-CN': '外食、延长线、不戴耳机通话、占据多个座位、一杯撑一整天。属于把所有可能的咖啡馆学习办公礼仪违规都体验并承认了的等级。有可能正在助推「禁止咖啡馆学习办公」的咖啡馆越来越多。',
      'zh-TW': '外食、延長線、不戴耳機通話、佔據多個座位、一杯撐一整天。屬於把所有可能的咖啡廳學習辦公禮儀違規都體驗並承認了的等級。有可能正在助推「禁止咖啡廳學習辦公」的咖啡廳越來越多。',
      vi: 'Đồ ăn mang từ ngoài, ổ cắm điện, gọi điện không tai nghe, chiếm nhiều chỗ, một ly cả ngày. Đây là mức đã trải nghiệm và thừa nhận mọi vi phạm ứng xử học/làm ở quán cà phê có thể có. Có khả năng bạn đang góp phần làm tăng số quán cà phê cấm việc học/làm ở đó.',
      id: 'Makanan dari luar, terminal listrik, telepon tanpa earphone, menguasai beberapa tempat duduk, satu gelas sepanjang hari. Ini adalah level yang sudah mengalami dan mengakui semua kemungkinan pelanggaran etika kerja/belajar di kafe. Ada kemungkinan kamu turut berkontribusi pada meningkatnya kafe yang melarang aktivitas ini.',
    }),
    cafeGrade: L({
      ko: 'F급 전설의 점령자',
      en: 'F-Grade Legendary Occupier',
      ja: 'Fランク伝説の占領者',
      'zh-CN': 'F级传说中的占领者',
      'zh-TW': 'F級傳說中的佔領者',
      vi: 'Hạng F - Kẻ chiếm đóng huyền thoại',
      id: 'Grade F Sang Penguasa Legendaris',
    }),
    sections: [
      section(
        {
          ko: '☕ 카공 등급',
          en: '☕ Cafe Work Grade',
          ja: '☕ カフェ勉ランク',
          'zh-CN': '☕ 咖啡馆学习办公等级',
          'zh-TW': '☕ 咖啡廳學習辦公等級',
          vi: '☕ Cấp độ làm việc/học ở quán cà phê',
          id: '☕ Grade Kerja/Belajar di Kafe',
        },
        {
          ko: 'F급 전설의 점령자',
          en: 'F-Grade Legendary Occupier',
          ja: 'Fランク伝説の占領者',
          'zh-CN': 'F级传说中的占领者',
          'zh-TW': 'F級傳說中的佔領者',
          vi: 'Hạng F - Kẻ chiếm đóng huyền thoại',
          id: 'Grade F Sang Penguasa Legendaris',
        }
      ),
      section(
        {
          ko: '🏪 카페 사장님의 생각',
          en: '🏪 What the Cafe Owner Thinks',
          ja: '🏪 カフェ店主の思い',
          'zh-CN': '🏪 咖啡馆老板的想法',
          'zh-TW': '🏪 咖啡廳老闆的想法',
          vi: '🏪 Suy nghĩ của chủ quán cà phê',
          id: '🏪 Pikiran Pemilik Kafe',
        },
        {
          ko: '와이파이 비밀번호를 바꾸고 싶어함',
          en: 'Wants to change the Wi-Fi password',
          ja: 'Wi-Fiのパスワードを変えたいと思っている',
          'zh-CN': '很想把Wi-Fi密码改掉',
          'zh-TW': '很想把Wi-Fi密碼改掉',
          vi: 'Muốn đổi mật khẩu Wi-Fi',
          id: 'Ingin mengganti password Wi-Fi',
        }
      ),
      section(
        {
          ko: '👥 옆 손님의 생각',
          en: '👥 What the Customer Next to You Thinks',
          ja: '👥 隣の客の思い',
          'zh-CN': '👥 隔壁客人的想法',
          'zh-TW': '👥 隔壁客人的想法',
          vi: '👥 Suy nghĩ của khách bên cạnh',
          id: '👥 Pikiran Pelanggan di Sebelah',
        },
        {
          ko: '커뮤니티 게시판에 사진 올릴까 고민 중',
          en: 'Considering whether to post a photo on the community board',
          ja: 'コミュニティ掲示板に写真を上げるか悩み中',
          'zh-CN': '在考虑要不要把照片发到社区论坛上',
          'zh-TW': '在考慮要不要把照片發到社群論壇上',
          vi: 'Đang phân vân có nên đăng ảnh lên diễn đàn cộng đồng không',
          id: 'Sedang mempertimbangkan untuk mengunggah foto ke forum komunitas',
        }
      ),
      section(
        {
          ko: '💪 이 결과를 솔직하게 인정한 것에 대해',
          en: '💪 On Honestly Admitting This Result',
          ja: '💪 この結果を正直に認めたことについて',
          'zh-CN': '💪 关于坦率承认这个结果',
          'zh-TW': '💪 關於坦率承認這個結果',
          vi: '💪 Về việc thừa nhận kết quả này một cách trung thực',
          id: '💪 Soal Mengakui Hasil Ini dengan Jujur',
        },
        {
          ko: '용기 있습니다. 인정이 변화의 시작입니다',
          en: 'That takes courage. Admitting it is the first step to change',
          ja: '勇気があります。認めることが変化の始まりです',
          'zh-CN': '你很有勇气。承认是改变的开始',
          'zh-TW': '你很有勇氣。承認是改變的開始',
          vi: 'Bạn thật can đảm. Thừa nhận là bước đầu của sự thay đổi',
          id: 'Kamu berani. Mengakui adalah awal dari perubahan',
        }
      ),
      section(
        {
          ko: '🚀 지금 당장 딱 하나만',
          en: '🚀 Just One Thing Right Now',
          ja: '🚀 今すぐたった一つだけ',
          'zh-CN': '🚀 现在马上只要做一件事',
          'zh-TW': '🚀 現在馬上只要做一件事',
          vi: '🚀 Chỉ một điều duy nhất ngay bây giờ',
          id: '🚀 Cukup Satu Hal Sekarang',
        },
        {
          ko: '다음에 카페 갈 때 음료 한 잔 더 주문하기. 그게 전부입니다',
          en: "Order one more drink next time you go to a cafe. That's all",
          ja: '次にカフェに行くとき飲み物を一杯追加注文する。それだけです',
          'zh-CN': '下次去咖啡馆时多点一杯饮料。就这么简单',
          'zh-TW': '下次去咖啡廳時多點一杯飲料。就這麼簡單',
          vi: 'Lần sau đến quán cà phê hãy gọi thêm một ly. Vậy là đủ',
          id: 'Lain kali ke kafe, pesan satu minuman lagi. Itu saja',
        }
      ),
    ],
    shareMessage: L({
      ko: '카공족 등급: F급 전설의 점령자 👻 12개 전부 인정... 카공 금지 카페 늘어나는 데 일조했을 수 있다는 거 ㅋㅋㅋ → 너도 해봐 몇 등급인지',
      en: "My cafe studier grade: F-Grade Legendary Occupier 👻 Admitted to all 12... apparently might've contributed to more cafes banning cafe studying lol → You try it too, see what grade you get",
      ja: 'カフェ勉族ランク：Fランク伝説の占領者 👻 12個全部認める…カフェ勉禁止カフェが増えるのに一役買った可能性があるって（笑）→ あなたもやってみて何ランクか',
      'zh-CN': '咖啡馆学习党等级：F级传说中的占领者 👻 12项全部承认…说不定我也助推了禁止咖啡馆学习办公的咖啡馆变多 哈哈哈 → 你也来测测看是什么等级',
      'zh-TW': '咖啡廳學習黨等級：F級傳說中的佔領者 👻 12項全部承認…說不定我也助推了禁止咖啡廳學習辦公的咖啡廳變多 哈哈哈 → 你也來測測看是什麼等級',
      vi: 'Cấp độ dân học ở quán cà phê của tôi: Hạng F - Kẻ chiếm đóng huyền thoại 👻 Nhận hết cả 12 mục... có thể tôi đã góp phần khiến nhiều quán cà phê cấm việc học/làm ở đó ha ha ha → Bạn cũng thử xem mình hạng mấy',
      id: 'Grade pekerja kafeku: Grade F Sang Penguasa Legendaris 👻 Mengakui semua 12... katanya mungkin aku ikut berkontribusi bikin makin banyak kafe yang melarang aktivitas ini hahaha → Kamu juga coba, lihat grade berapa',
    }),
  },
];
