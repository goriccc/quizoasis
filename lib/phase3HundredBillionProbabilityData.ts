/** 내가 100억 부자가 될 확률 — 12문항 4지선다, A=0 B=1 C=2 D=3, 총점 0~36 → Type1~6 */

type Locale = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';
type ML = Record<Locale, string>;

function L(m: ML): Record<string, string> {
  return m;
}

function opt(m: ML, score: number) {
  return { text: L(m), score };
}

function section(title: ML, content: ML) {
  return { title: L(title), content: L(content) };
}

export interface Phase3HundredBillionProbabilityQuestion {
  id: number;
  question: Record<string, string>;
  options: { text: Record<string, string>; score: number }[];
}

export interface Phase3HundredBillionProbabilityResultSection {
  title: Record<string, string>;
  content: Record<string, string>;
}

export interface Phase3HundredBillionProbabilityResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  probability: Record<string, string>;
  sections: Phase3HundredBillionProbabilityResultSection[];
  shareMessage: Record<string, string>;
}

export function calculatePhase3HundredBillionProbabilityResult(answers: number[]): string {
  const total = answers.reduce((sum, s) => sum + (s ?? 0), 0);
  if (total <= 5) return 'Type1';
  if (total <= 11) return 'Type2';
  if (total <= 19) return 'Type3';
  if (total <= 27) return 'Type4';
  if (total <= 33) return 'Type5';
  return 'Type6';
}

export const phase3HundredBillionProbabilityQuestions: Phase3HundredBillionProbabilityQuestion[] = [
  {
    id: 1,
    question: L({
      ko: '이번 달 월급이 들어왔다. 나는?',
      en: 'My paycheck came in this month. I...',
      ja: '今月の給料が入った。私は？',
      'zh-CN': '这个月工资到账了。我是？',
      'zh-TW': '這個月薪水入帳了。我是？',
      vi: 'Lương tháng này vừa về. Tôi thì...',
      id: 'Gaji bulan ini sudah masuk. Saya...',
    }),
    options: [
      opt(
        {
          ko: '들어온 날 기분 좋아서 쓰고 싶은 거 산다. 돈은 쓰라고 버는 거다',
          en: 'Feel great the day it arrives and buy whatever I want. Money is meant to be spent',
          ja: '入った日は気分がいいから欲しいものを買う。お金は使うために稼ぐものだ',
          'zh-CN': '到账那天心情好就买想要的东西。钱就是要花的',
          'zh-TW': '入帳當天心情好就買想要的東西。錢就是要花的',
          vi: 'Ngày lương về vui nên mua thứ mình muốn. Tiền là để tiêu',
          id: 'Hari gajian senang jadi beli yang diinginkan. Uang memang untuk dibelanjakan',
        },
        0
      ),
      opt(
        {
          ko: '고정 지출 빼고 남은 돈으로 한 달을 산다. 모이면 모이는 대로',
          en: "Live off what's left after fixed expenses. Whatever savings pile up, pile up",
          ja: '固定費を除いた残りのお金で一ヶ月を過ごす。貯まれば貯まる分だけ',
          'zh-CN': '扣掉固定支出后剩下的钱过一个月。能存多少就存多少',
          'zh-TW': '扣掉固定支出後剩下的錢過一個月。能存多少就存多少',
          vi: 'Trừ chi phí cố định rồi sống bằng số còn lại trong tháng. Tiết kiệm được bao nhiêu thì được',
          id: 'Hidup dengan sisa uang setelah pengeluaran tetap. Kalau ada tabungan, ya ada saja',
        },
        1
      ),
      opt(
        {
          ko: '일정 금액을 저축 계좌로 먼저 이체하고 나머지로 생활한다',
          en: 'Transfer a set amount to savings first, then live on the rest',
          ja: '決まった金額を先に貯金口座に移して残りで生活する',
          'zh-CN': '先把固定金额转入储蓄账户，剩下的用来生活',
          'zh-TW': '先把固定金額轉入儲蓄帳戶，剩下的用來生活',
          vi: 'Chuyển một khoản cố định vào tài khoản tiết kiệm trước, rồi sống bằng phần còn lại',
          id: 'Transfer jumlah tertentu ke tabungan dulu, lalu hidup dengan sisanya',
        },
        2
      ),
      opt(
        {
          ko: '수입의 일부는 저축, 일부는 투자 자산으로 즉시 배분한다. 자동화돼 있다',
          en: "Immediately allocate part of my income to savings and part to investments. It's automated",
          ja: '収入の一部は貯金、一部は投資資産に即座に振り分ける。自動化されている',
          'zh-CN': '收入的一部分立刻分配到储蓄，一部分分配到投资资产。已经自动化了',
          'zh-TW': '收入的一部分立刻分配到儲蓄，一部分分配到投資資產。已經自動化了',
          vi: 'Ngay khi có thu nhập, phân bổ một phần vào tiết kiệm, một phần vào tài sản đầu tư. Đã tự động hóa',
          id: 'Segera membagi sebagian pendapatan untuk tabungan, sebagian untuk aset investasi. Semuanya otomatis',
        },
        3
      ),
    ],
  },
  {
    id: 2,
    question: L({
      ko: '친구가 "나 요즘 주식으로 짭짤하게 벌고 있어"라고 했을 때 나는?',
      en: 'When a friend says "I\'ve been making decent money in stocks lately," I...',
      ja: '友達が「最近株でけっこう儲かってるんだ」と言ったとき、私は？',
      'zh-CN': '朋友说"我最近炒股赚了不少"的时候，我是？',
      'zh-TW': '朋友說「我最近炒股賺了不少」的時候，我是？',
      vi: 'Khi bạn tôi nói "gần đây tớ kiếm được khá nhiều từ cổ phiếu", tôi thì...',
      id: 'Saat teman bilang "aku belakangan ini untung lumayan dari saham", saya...',
    }),
    options: [
      opt(
        {
          ko: '"대박이다. 나도 한번 해볼까" 하고 다음 날 잊어버린다',
          en: 'Say "Wow, maybe I should try it too" and forget about it the next day',
          ja: '「すごい、私もやってみようかな」と思って翌日には忘れる',
          'zh-CN': '说"太厉害了，我也试试吧"，第二天就忘了',
          'zh-TW': '說「太厲害了，我也試試吧」，第二天就忘了',
          vi: 'Nói "hay quá, để tớ thử xem" rồi hôm sau quên luôn',
          id: 'Bilang "wah keren, aku juga mau coba" tapi besoknya lupa',
        },
        0
      ),
      opt(
        {
          ko: '"어떻게 했어? 나도 배워볼게" 하고 얼마간 관심 갖다가 흐지부지된다',
          en: 'Ask "How\'d you do it? I\'ll learn too," stay interested for a while, then it fizzles out',
          ja: '「どうやったの？私も学んでみる」と言って少し興味を持つけどそのうち立ち消えになる',
          'zh-CN': '问"你怎么做的？我也想学"，关注一段时间后就不了了之',
          'zh-TW': '問「你怎麼做的？我也想學」，關注一段時間後就不了了之',
          vi: 'Hỏi "làm sao vậy? Để tớ học theo" rồi quan tâm được một thời gian thì thôi luôn',
          id: 'Tanya "gimana caranya? Aku juga mau belajar" tertarik sebentar lalu hilang begitu saja',
        },
        1
      ),
      opt(
        {
          ko: '뭘 샀는지 물어보고 직접 공부해본다. 납득이 되면 소액으로 시작한다',
          en: 'Ask what they bought and study it myself. If it makes sense, start small',
          ja: '何を買ったのか聞いて自分でも勉強してみる。納得できたら少額から始める',
          'zh-CN': '问对方买了什么并自己研究一下。觉得靠谱就小额开始',
          'zh-TW': '問對方買了什麼並自己研究一下。覺得靠譜就小額開始',
          vi: 'Hỏi họ mua gì rồi tự tìm hiểu. Nếu thấy hợp lý thì bắt đầu với số tiền nhỏ',
          id: 'Tanya apa yang dibeli lalu belajar sendiri. Kalau masuk akal, mulai dengan jumlah kecil',
        },
        2
      ),
      opt(
        {
          ko: '이미 하고 있다. 투자 이야기가 나오면 오히려 내가 더 할 말이 많다',
          en: "Already doing it. When investment talk comes up, I'm the one with more to say",
          ja: 'もうやっている。投資の話が出ればむしろ私のほうが話すことが多い',
          'zh-CN': '我早就在做了。说到投资话题，反而是我更有话说',
          'zh-TW': '我早就在做了。說到投資話題，反而是我更有話說',
          vi: 'Đã đang làm rồi. Khi nói về đầu tư, chính tôi mới là người có nhiều điều để nói',
          id: 'Sudah melakukannya. Kalau bicara soal investasi, justru saya yang lebih banyak cerita',
        },
        3
      ),
    ],
  },
  {
    id: 3,
    question: L({
      ko: '나의 현재 자산 파악 수준은?',
      en: 'How well do I currently understand my own finances?',
      ja: '現在の自分の資産把握レベルは？',
      'zh-CN': '我目前对自己资产的了解程度是？',
      'zh-TW': '我目前對自己資產的了解程度是？',
      vi: 'Mức độ tôi nắm rõ tài sản hiện tại của mình là?',
      id: 'Seberapa baik saya memahami kondisi keuangan saya saat ini?',
    }),
    options: [
      opt(
        {
          ko: '통장에 얼마 있는지 정확히 모른다. 카드값이 얼마 나올지도 모른다',
          en: "I don't know exactly how much is in my account. I don't even know how much my card bill will be",
          ja: '口座にいくらあるか正確に知らない。カード代がいくら出るかもわからない',
          'zh-CN': '不清楚账户里到底有多少钱，也不知道信用卡账单会有多少',
          'zh-TW': '不清楚帳戶裡到底有多少錢，也不知道信用卡帳單會有多少',
          vi: 'Không biết chính xác trong tài khoản có bao nhiêu tiền. Cũng không biết tiền thẻ tháng này bao nhiêu',
          id: 'Tidak tahu pasti berapa saldo di rekening. Bahkan tidak tahu tagihan kartu akan berapa',
        },
        0
      ),
      opt(
        {
          ko: '대략은 안다. 정확히 파악하진 않아도 큰 문제는 없다',
          en: "I know roughly. Not knowing exactly hasn't caused big problems",
          ja: '大体はわかる。正確に把握していなくても大きな問題はない',
          'zh-CN': '大概知道。不精确掌握也没什么大问题',
          'zh-TW': '大概知道。不精確掌握也沒什麼大問題',
          vi: 'Biết đại khái. Không nắm chính xác cũng không sao',
          id: 'Tahu kira-kira. Meski tidak persis, belum jadi masalah besar',
        },
        1
      ),
      opt(
        {
          ko: '주기적으로 확인한다. 자산과 부채를 어느 정도 파악하고 있다',
          en: 'I check regularly. I have a fairly good grasp of my assets and debts',
          ja: '定期的に確認する。資産と負債をある程度把握している',
          'zh-CN': '会定期查看。对资产和负债有一定的掌握',
          'zh-TW': '會定期查看。對資產和負債有一定的掌握',
          vi: 'Kiểm tra định kỳ. Nắm được phần nào tài sản và nợ của mình',
          id: 'Memeriksa secara berkala. Cukup memahami aset dan utang saya',
        },
        2
      ),
      opt(
        {
          ko: '순자산·월 수입·지출·투자 수익을 추적하고 있다. 스프레드시트나 앱으로 관리한다',
          en: 'I track net worth, monthly income, expenses, and investment returns. I manage it with a spreadsheet or app',
          ja: '純資産・月収・支出・投資収益を追跡している。スプレッドシートやアプリで管理している',
          'zh-CN': '追踪净资产、月收入、支出和投资收益，用表格或App管理',
          'zh-TW': '追蹤淨資產、月收入、支出和投資收益，用表格或App管理',
          vi: 'Theo dõi tài sản thuần, thu nhập, chi tiêu và lợi nhuận đầu tư hàng tháng. Quản lý bằng bảng tính hoặc ứng dụng',
          id: 'Melacak kekayaan bersih, pendapatan bulanan, pengeluaran, dan hasil investasi. Mengelolanya dengan spreadsheet atau aplikasi',
        },
        3
      ),
    ],
  },
  {
    id: 4,
    question: L({
      ko: '"리스크가 있지만 수익이 클 수 있는 기회"가 왔을 때 나는?',
      en: 'When an "opportunity with risk but big potential returns" comes up, I...',
      ja: '「リスクはあるが収益が大きくなりうる機会」が来たとき、私は？',
      'zh-CN': '"有风险但收益可能很大的机会"出现时，我是？',
      'zh-TW': '「有風險但收益可能很大的機會」出現時，我是？',
      vi: 'Khi có "cơ hội rủi ro nhưng lợi nhuận có thể lớn", tôi thì...',
      id: 'Ketika ada "peluang berisiko tapi potensi untungnya besar", saya...',
    }),
    options: [
      opt(
        {
          ko: '리스크라는 말이 나오면 일단 피한다. 잃는 게 제일 무섭다',
          en: 'The moment I hear "risk," I avoid it. Losing money is the scariest thing',
          ja: 'リスクという言葉が出たら一応避ける。失うのが一番怖い',
          'zh-CN': '一听到"风险"就先躲开。亏钱是最可怕的事',
          'zh-TW': '一聽到「風險」就先躲開。虧錢是最可怕的事',
          vi: 'Nghe thấy chữ "rủi ro" là tránh trước. Sợ nhất là mất tiền',
          id: 'Begitu dengar kata "risiko", langsung dihindari. Rugi itu hal paling menakutkan',
        },
        0
      ),
      opt(
        {
          ko: '관심은 가지만 확신이 생기지 않아서 결국 안 한다',
          en: "I'm interested, but I never gain enough confidence, so I end up not doing it",
          ja: '興味は持つが確信が持てず結局やらない',
          'zh-CN': '感兴趣但一直没有把握，最后还是没做',
          'zh-TW': '感興趣但一直沒有把握，最後還是沒做',
          vi: 'Có quan tâm nhưng không đủ tự tin nên cuối cùng không làm',
          id: 'Tertarik tapi tidak pernah cukup yakin, akhirnya tidak jadi',
        },
        1
      ),
      opt(
        {
          ko: '공부해보고 리스크가 감당 가능한 수준이면 소액으로 도전한다',
          en: 'I study it, and if the risk is manageable, I try it with a small amount',
          ja: '勉強してみてリスクが許容できる範囲なら少額で挑戦する',
          'zh-CN': '会研究一下，如果风险在可承受范围内就用小额尝试',
          'zh-TW': '會研究一下，如果風險在可承受範圍內就用小額嘗試',
          vi: 'Tìm hiểu kỹ, nếu rủi ro ở mức chấp nhận được thì thử với số tiền nhỏ',
          id: 'Mempelajarinya, dan jika risikonya masih bisa ditanggung, saya coba dengan jumlah kecil',
        },
        2
      ),
      opt(
        {
          ko: '리스크를 계산하고 들어간다. 기회비용을 안 쓰는 것도 리스크라고 생각한다',
          en: 'I calculate the risk before jumping in. I think not acting is also a risk — opportunity cost',
          ja: 'リスクを計算して入る。機会費用を使わないこともリスクだと思う',
          'zh-CN': '会计算好风险再进场。我认为不行动本身也是一种风险（机会成本）',
          'zh-TW': '會計算好風險再進場。我認為不行動本身也是一種風險（機會成本）',
          vi: 'Tính toán rủi ro rồi mới vào. Tôi nghĩ không hành động cũng là một rủi ro — chi phí cơ hội',
          id: 'Menghitung risiko sebelum terjun. Menurut saya, tidak bertindak pun juga risiko — biaya peluang yang hilang',
        },
        3
      ),
    ],
  },
  {
    id: 5,
    question: L({
      ko: '돈에 대한 나의 평소 생각은?',
      en: "What's my everyday attitude toward money?",
      ja: 'お金に対する私の普段の考えは？',
      'zh-CN': '我平时对钱的看法是？',
      'zh-TW': '我平時對錢的看法是？',
      vi: 'Suy nghĩ thường ngày của tôi về tiền là?',
      id: 'Bagaimana pandangan saya sehari-hari tentang uang?',
    }),
    options: [
      opt(
        {
          ko: '돈이 전부는 아니다. 행복하게 쓰면 된다',
          en: "Money isn't everything. Just spend it to be happy",
          ja: 'お金が全てではない。幸せに使えばいい',
          'zh-CN': '钱不是一切，开心花掉就好',
          'zh-TW': '錢不是一切，開心花掉就好',
          vi: 'Tiền không phải là tất cả. Cứ tiêu sao cho vui là được',
          id: 'Uang bukan segalanya. Yang penting dipakai untuk hal yang membuat bahagia',
        },
        0
      ),
      opt(
        {
          ko: '많으면 좋지. 근데 벌기가 쉽지 않으니까',
          en: "More would be nice. But it's not easy to earn",
          ja: '多ければいいけど、稼ぐのは簡単じゃないから',
          'zh-CN': '钱多当然好，但赚钱不容易',
          'zh-TW': '錢多當然好，但賺錢不容易',
          vi: 'Nhiều tiền thì tốt, nhưng kiếm tiền đâu có dễ',
          id: 'Lebih banyak tentu lebih baik, tapi mencarinya tidak mudah',
        },
        1
      ),
      opt(
        {
          ko: '돈은 도구다. 잘 모으고 잘 굴리면 더 많은 자유를 준다',
          en: 'Money is a tool. Saving and growing it well gives more freedom',
          ja: 'お金は道具だ。うまく貯めてうまく運用すればもっと多くの自由をくれる',
          'zh-CN': '钱是工具。好好积累好好运用，就能带来更多自由',
          'zh-TW': '錢是工具。好好積累好好運用，就能帶來更多自由',
          vi: 'Tiền là công cụ. Tích lũy và vận dụng tốt sẽ mang lại nhiều tự do hơn',
          id: 'Uang adalah alat. Jika dikumpulkan dan dikelola dengan baik, akan memberi lebih banyak kebebasan',
        },
        2
      ),
      opt(
        {
          ko: '돈은 시간을 살 수 있는 수단이다. 경제적 자유가 내 핵심 목표다',
          en: 'Money is a means to buy time. Financial freedom is my core goal',
          ja: 'お金は時間を買える手段だ。経済的自由が私の核心目標だ',
          'zh-CN': '钱是可以用来买时间的手段。财务自由是我的核心目标',
          'zh-TW': '錢是可以用來買時間的手段。財務自由是我的核心目標',
          vi: 'Tiền là phương tiện để mua thời gian. Tự do tài chính là mục tiêu cốt lõi của tôi',
          id: 'Uang adalah cara untuk membeli waktu. Kebebasan finansial adalah tujuan utama saya',
        },
        3
      ),
    ],
  },
  {
    id: 6,
    question: L({
      ko: '지금 당장 500만원이 생긴다면 나는?',
      en: 'If I suddenly got 5 million KRW right now, I would...',
      ja: '今すぐ500万ウォンが手に入ったら、私は？',
      'zh-CN': '如果现在马上有500万韩元到手，我会？',
      'zh-TW': '如果現在馬上有500萬韓元到手，我會？',
      vi: 'Nếu ngay bây giờ có 5 triệu won, tôi sẽ...',
      id: 'Jika sekarang tiba-tiba mendapat 5 juta won, saya akan...',
    }),
    options: [
      opt(
        {
          ko: '갖고 싶었던 것 산다. 이런 기회가 언제 또 오겠어',
          en: 'Buy what I\'ve always wanted. When would an opportunity like this come again?',
          ja: '欲しかったものを買う。こんな機会がまた来るとは思えない',
          'zh-CN': '买想要的东西。这种机会哪能再遇到',
          'zh-TW': '買想要的東西。這種機會哪能再遇到',
          vi: 'Mua thứ mình luôn muốn. Cơ hội thế này biết khi nào mới có lại',
          id: 'Membeli barang yang selama ini diinginkan. Kesempatan seperti ini kapan lagi datangnya',
        },
        0
      ),
      opt(
        {
          ko: '절반은 쓰고 절반은 저축한다. 적당히 균형 있게',
          en: 'Spend half and save half. Keep a reasonable balance',
          ja: '半分は使って半分は貯金する。適度にバランスをとる',
          'zh-CN': '一半花掉一半存起来，保持适当的平衡',
          'zh-TW': '一半花掉一半存起來，保持適當的平衡',
          vi: 'Tiêu một nửa, tiết kiệm một nửa. Cân bằng vừa phải',
          id: 'Setengah dibelanjakan, setengah ditabung. Menjaga keseimbangan yang wajar',
        },
        1
      ),
      opt(
        {
          ko: '전액 저축하거나 안전한 금융 상품에 넣는다',
          en: 'Save all of it or put it into a safe financial product',
          ja: '全額貯金するか安全な金融商品に入れる',
          'zh-CN': '全部存起来或放进安全的金融产品',
          'zh-TW': '全部存起來或放進安全的金融產品',
          vi: 'Tiết kiệm toàn bộ hoặc gửi vào sản phẩm tài chính an toàn',
          id: 'Menabung semuanya atau menaruhnya di produk keuangan yang aman',
        },
        2
      ),
      opt(
        {
          ko: '투자 포트폴리오에 추가한다. 어디에 넣을지 이미 생각해뒀다',
          en: "Add it to my investment portfolio. I've already decided where it'll go",
          ja: '投資ポートフォリオに追加する。どこに入れるかすでに考えている',
          'zh-CN': '加入投资组合。放在哪里我早就想好了',
          'zh-TW': '加入投資組合。放在哪裡我早就想好了',
          vi: 'Bổ sung vào danh mục đầu tư. Tôi đã nghĩ sẵn sẽ đầu tư vào đâu',
          id: 'Menambahkannya ke portofolio investasi. Saya sudah tahu mau ditaruh di mana',
        },
        3
      ),
    ],
  },
  {
    id: 7,
    question: L({
      ko: '나의 부업·추가 수입에 대한 태도는?',
      en: 'What\'s my attitude toward side jobs or extra income?',
      ja: '副業・追加収入に対する私の姿勢は？',
      'zh-CN': '我对副业、额外收入的态度是？',
      'zh-TW': '我對副業、額外收入的態度是？',
      vi: 'Thái độ của tôi với công việc phụ, thu nhập thêm là?',
      id: 'Bagaimana sikap saya terhadap pekerjaan sampingan atau pendapatan tambahan?',
    }),
    options: [
      opt(
        {
          ko: '본업이 바쁜데 부업까지는 무리다. 지금도 충분히 힘들다',
          en: "My main job is busy enough. A side job would be too much. It's already hard enough",
          ja: '本業が忙しいので副業までは無理だ。今でも十分大変だ',
          'zh-CN': '本职工作已经很忙了，再做副业太勉强，现在就已经够辛苦了',
          'zh-TW': '本職工作已經很忙了，再做副業太勉強，現在就已經夠辛苦了',
          vi: 'Công việc chính đã bận rồi, làm thêm nữa thì quá sức. Giờ đã đủ mệt rồi',
          id: 'Pekerjaan utama sudah sibuk, kerja sampingan terlalu berat. Sekarang saja sudah cukup melelahkan',
        },
        0
      ),
      opt(
        {
          ko: '생각은 있다. 뭔가 해보고 싶은데 아직 시작을 못 했다',
          en: "I've thought about it. I want to try something, but haven't started yet",
          ja: '考えてはいる。何かやってみたいがまだ始められていない',
          'zh-CN': '有想过。想做点什么但还没开始',
          'zh-TW': '有想過。想做點什麼但還沒開始',
          vi: 'Có nghĩ đến. Muốn thử làm gì đó nhưng vẫn chưa bắt đầu',
          id: 'Sudah terpikir. Ingin mencoba sesuatu tapi belum juga mulai',
        },
        1
      ),
      opt(
        {
          ko: '소규모로 시도해봤거나 지금 하고 있다',
          en: "I've tried it on a small scale, or I'm doing it right now",
          ja: '小規模で試したことがあるか今もやっている',
          'zh-CN': '小规模尝试过，或者现在正在做',
          'zh-TW': '小規模嘗試過，或者現在正在做',
          vi: 'Đã từng thử quy mô nhỏ hoặc đang làm hiện tại',
          id: 'Sudah mencoba dalam skala kecil, atau sedang menjalankannya sekarang',
        },
        2
      ),
      opt(
        {
          ko: '수입 채널이 여러 개 있어야 한다고 생각한다. 지금도 다각화 중이다',
          en: "I believe I need multiple income streams. I'm already diversifying",
          ja: '収入源は複数持つべきだと思う。今も多角化を進めている',
          'zh-CN': '我认为收入渠道要多元化，现在也在积极拓展',
          'zh-TW': '我認為收入渠道要多元化，現在也在積極拓展',
          vi: 'Tôi cho rằng cần có nhiều nguồn thu nhập. Hiện tại vẫn đang đa dạng hóa',
          id: 'Saya percaya harus punya banyak sumber pendapatan. Saat ini pun sedang mendiversifikasi',
        },
        3
      ),
    ],
  },
  {
    id: 8,
    question: L({
      ko: '부자들의 책이나 재테크 콘텐츠를 얼마나 소비하나요?',
      en: 'How much do I consume books or content about wealth and finance?',
      ja: 'お金持ちの本や資産運用コンテンツをどれくらい見ていますか？',
      'zh-CN': '我平时看多少关于富人或理财的书籍或内容？',
      'zh-TW': '我平時看多少關於富人或理財的書籍或內容？',
      vi: 'Tôi tiêu thụ bao nhiêu sách hay nội dung về người giàu, đầu tư tài chính?',
      id: 'Seberapa banyak saya mengonsumsi buku atau konten tentang orang kaya dan keuangan?',
    }),
    options: [
      opt(
        {
          ko: '거의 안 본다. 어차피 나랑 다른 세상 이야기 같아서',
          en: "Almost never. It feels like a completely different world from mine anyway",
          ja: 'ほとんど見ない。どうせ自分とは違う世界の話に感じるから',
          'zh-CN': '几乎不看。反正感觉那是和我不同世界的事',
          'zh-TW': '幾乎不看。反正感覺那是和我不同世界的事',
          vi: 'Hầu như không xem. Dù sao cũng thấy như câu chuyện của thế giới khác',
          id: 'Hampir tidak pernah. Toh rasanya itu seperti cerita dari dunia yang berbeda dengan saya',
        },
        0
      ),
      opt(
        {
          ko: '가끔 본다. 재밌긴 한데 내 생활에 적용하진 않는다',
          en: "I see it occasionally. It's fun but I don't apply it to my life",
          ja: '時々見る。楽しいけど自分の生活には適用しない',
          'zh-CN': '偶尔看。挺有趣的但不会用在自己生活上',
          'zh-TW': '偶爾看。挺有趣的但不會用在自己生活上',
          vi: 'Xem đôi khi. Thấy hay nhưng không áp dụng vào cuộc sống của mình',
          id: 'Kadang-kadang. Seru sih, tapi tidak diterapkan ke kehidupan saya',
        },
        1
      ),
      opt(
        {
          ko: '관심 있게 본다. 배운 것 중 일부는 실제로 적용해봤다',
          en: "I watch with interest. I've actually applied some of what I've learned",
          ja: '興味を持って見ている。学んだことの一部は実際に適用してみた',
          'zh-CN': '很感兴趣地看。学到的东西有一部分实际用过',
          'zh-TW': '很感興趣地看。學到的東西有一部分實際用過',
          vi: 'Xem với sự quan tâm. Đã áp dụng thực tế một số điều học được',
          id: 'Menonton dengan penuh minat. Sudah menerapkan sebagian yang dipelajari',
        },
        2
      ),
      opt(
        {
          ko: '꾸준히 본다. 인사이트를 실생활에 바로 적용하는 편이다',
          en: 'I follow it consistently. I tend to apply insights directly to real life',
          ja: '継続して見ている。インサイトを実生活にすぐ適用するタイプだ',
          'zh-CN': '一直坚持看。学到的洞见会马上运用到实际生活中',
          'zh-TW': '一直堅持看。學到的洞見會馬上運用到實際生活中',
          vi: 'Xem đều đặn. Tôi thường áp dụng ngay những gì học được vào đời thực',
          id: 'Konsisten mengikutinya. Saya cenderung langsung menerapkan wawasan itu ke kehidupan nyata',
        },
        3
      ),
    ],
  },
  {
    id: 9,
    question: L({
      ko: '"10년 후 나의 재정 상태"를 떠올렸을 때는?',
      en: 'When I imagine "my financial situation 10 years from now"?',
      ja: '「10年後の自分の財政状態」を思い浮かべると？',
      'zh-CN': '想到"10年后我的财务状况"时？',
      'zh-TW': '想到「10年後我的財務狀況」時？',
      vi: 'Khi nghĩ đến "tình hình tài chính của mình sau 10 năm nữa"?',
      id: 'Ketika membayangkan "kondisi finansial saya 10 tahun ke depan"?',
    }),
    options: [
      opt(
        {
          ko: '생각해본 적이 거의 없다. 미래는 미래에 생각하면 된다',
          en: "I've almost never thought about it. I'll think about the future when it comes",
          ja: '考えたことがほとんどない。未来は未来になったら考えればいい',
          'zh-CN': '几乎没想过。未来的事等未来再想就好',
          'zh-TW': '幾乎沒想過。未來的事等未來再想就好',
          vi: 'Hầu như chưa từng nghĩ tới. Tương lai thì để đến tương lai rồi nghĩ',
          id: 'Hampir tidak pernah memikirkannya. Soal masa depan, nanti saja dipikirkan kalau sudah tiba',
        },
        0
      ),
      opt(
        {
          ko: '막연하게 지금보다는 나아져있겠지 싶다',
          en: "Vaguely feel it'll probably be better than now",
          ja: '漠然と今より良くなっているだろうと思う',
          'zh-CN': '隐约觉得应该会比现在好一些',
          'zh-TW': '隱約覺得應該會比現在好一些',
          vi: 'Mơ hồ nghĩ chắc sẽ tốt hơn bây giờ',
          id: 'Samar-samar merasa mungkin akan lebih baik dari sekarang',
        },
        1
      ),
      opt(
        {
          ko: '어느 정도 그림이 있다. 몇 가지 목표를 세워뒀다',
          en: "I have a rough picture. I've set a few goals",
          ja: 'ある程度のイメージはある。いくつか目標を立てている',
          'zh-CN': '有一定的构想，设定了几个目标',
          'zh-TW': '有一定的構想，設定了幾個目標',
          vi: 'Có phần nào hình dung. Đã đặt ra vài mục tiêu',
          id: 'Sudah punya gambaran. Sudah menetapkan beberapa target',
        },
        2
      ),
      opt(
        {
          ko: '구체적인 수치 목표가 있다. 역산해서 지금 뭘 해야 하는지 알고 있다',
          en: "I have specific numerical goals. I've worked backward to know exactly what to do now",
          ja: '具体的な数値目標がある。逆算して今何をすべきかわかっている',
          'zh-CN': '有具体的数字目标，并倒推出现在该做什么',
          'zh-TW': '有具體的數字目標，並倒推出現在該做什麼',
          vi: 'Có mục tiêu số liệu cụ thể. Đã tính ngược lại để biết bây giờ cần làm gì',
          id: 'Punya target angka yang jelas. Sudah menghitung mundur untuk tahu apa yang harus dilakukan sekarang',
        },
        3
      ),
    ],
  },
  {
    id: 10,
    question: L({
      ko: '소비 후 나의 패턴은?',
      en: "What's my pattern after spending money?",
      ja: '消費した後の私のパターンは？',
      'zh-CN': '消费之后我的模式是？',
      'zh-TW': '消費之後我的模式是？',
      vi: 'Sau khi tiêu tiền, mô hình của tôi là?',
      id: 'Bagaimana kebiasaan saya setelah berbelanja?',
    }),
    options: [
      opt(
        {
          ko: '산 걸 후회하는 경우가 많다. 충동구매가 잦다',
          en: 'I often regret purchases. Impulse buying is frequent',
          ja: '買ったことを後悔することが多い。衝動買いが多い',
          'zh-CN': '经常后悔买过的东西，冲动消费频繁',
          'zh-TW': '經常後悔買過的東西，衝動消費頻繁',
          vi: 'Thường hối hận vì đã mua. Mua sắm bốc đồng thường xuyên',
          id: 'Sering menyesali pembelian. Belanja impulsif cukup sering',
        },
        0
      ),
      opt(
        {
          ko: '살 때는 기분 좋은데 나중에 가끔 아차 싶을 때 있다',
          en: 'Feels great while buying, but sometimes later I go "oops"',
          ja: '買うときは気分がいいけど後で時々「あっ」と思うことがある',
          'zh-CN': '买的时候心情很好，但事后偶尔会觉得不该买',
          'zh-TW': '買的時候心情很好，但事後偶爾會覺得不該買',
          vi: 'Lúc mua thì vui, nhưng sau đó đôi khi lại thấy "ơ..." tiếc',
          id: 'Senang saat membeli, tapi kadang belakangan menyesal sedikit',
        },
        1
      ),
      opt(
        {
          ko: '대부분 필요한 것만 산다. 충동구매가 많지 않다',
          en: "I mostly buy only what I need. Impulse buying isn't common",
          ja: 'ほとんど必要なものだけ買う。衝動買いはあまりない',
          'zh-CN': '大部分只买需要的东西，冲动消费不多',
          'zh-TW': '大部分只買需要的東西，衝動消費不多',
          vi: 'Chủ yếu chỉ mua thứ cần thiết. Mua sắm bốc đồng không nhiều',
          id: 'Kebanyakan hanya membeli yang dibutuhkan. Belanja impulsif tidak sering',
        },
        2
      ),
      opt(
        {
          ko: '소비 전 ROI를 따진다. 이게 삶의 질을 실제로 높이는지 생각한다',
          en: 'I consider ROI before spending. I think about whether it actually improves my quality of life',
          ja: '消費前にROIを考える。これが実際に生活の質を上げるかどうかを考える',
          'zh-CN': '消费前会考虑投资回报率，思考这是否真的能提升生活质量',
          'zh-TW': '消費前會考慮投資回報率，思考這是否真的能提升生活品質',
          vi: 'Trước khi tiêu, tôi xem xét hiệu quả đầu tư (ROI). Nghĩ xem điều này có thực sự nâng cao chất lượng sống không',
          id: 'Mempertimbangkan ROI sebelum membeli. Memikirkan apakah ini benar-benar meningkatkan kualitas hidup',
        },
        3
      ),
    ],
  },
  {
    id: 11,
    question: L({
      ko: '돈 모으는 것에 대한 나의 실제 행동은?',
      en: "What's my actual behavior when it comes to saving money?",
      ja: 'お金を貯めることに対する私の実際の行動は？',
      'zh-CN': '在存钱这件事上，我实际的行动是？',
      'zh-TW': '在存錢這件事上，我實際的行動是？',
      vi: 'Hành động thực tế của tôi trong việc tiết kiệm tiền là?',
      id: 'Bagaimana tindakan nyata saya dalam menabung?',
    }),
    options: [
      opt(
        {
          ko: '모아야지 생각만 하고 통장 잔고는 늘 비슷하다',
          en: 'I only think about saving, but my bank balance always stays about the same',
          ja: '貯めようと思うだけで口座残高は常に同じくらいだ',
          'zh-CN': '只是想着要存钱，账户余额却一直差不多',
          'zh-TW': '只是想著要存錢，帳戶餘額卻一直差不多',
          vi: 'Chỉ nghĩ là phải tiết kiệm nhưng số dư tài khoản luôn giống nhau',
          id: 'Hanya berpikir mau menabung, tapi saldo rekening selalu segitu-gitu saja',
        },
        0
      ),
      opt(
        {
          ko: '조금씩 모이긴 하는데 속도가 느리다',
          en: 'It does build up little by little, but slowly',
          ja: '少しずつ貯まってはいるがスピードが遅い',
          'zh-CN': '确实一点点在存，但速度很慢',
          'zh-TW': '確實一點點在存，但速度很慢',
          vi: 'Có tích lũy dần dần nhưng tốc độ chậm',
          id: 'Memang bertambah sedikit-sedikit, tapi lambat',
        },
        1
      ),
      opt(
        {
          ko: '목표 금액을 세워두고 꾸준히 모으고 있다',
          en: 'I set a target amount and save consistently',
          ja: '目標金額を決めて着実に貯めている',
          'zh-CN': '设定好目标金额并持续存钱',
          'zh-TW': '設定好目標金額並持續存錢',
          vi: 'Đặt mục tiêu số tiền và tiết kiệm đều đặn',
          id: 'Menetapkan target jumlah dan menabung secara konsisten',
        },
        2
      ),
      opt(
        {
          ko: '모으는 것을 넘어서 불리고 있다. 복리의 힘을 활용 중이다',
          en: "Beyond just saving, I'm growing it. I'm leveraging the power of compound interest",
          ja: '貯めるだけでなく増やしている。複利の力を活用している',
          'zh-CN': '不只是存钱，还在让钱增值，正在利用复利的力量',
          'zh-TW': '不只是存錢，還在讓錢增值，正在利用複利的力量',
          vi: 'Không chỉ tiết kiệm mà còn đang gia tăng tài sản. Đang tận dụng sức mạnh lãi kép',
          id: 'Bukan sekadar menabung, tapi sedang mengembangkannya. Memanfaatkan kekuatan bunga majemuk',
        },
        3
      ),
    ],
  },
  {
    id: 12,
    question: L({
      ko: '"나는 부자가 될 수 있다"는 믿음이 얼마나 강한가요?',
      en: 'How strong is my belief that "I can become rich"?',
      ja: '「私は金持ちになれる」という信念はどれくらい強いですか？',
      'zh-CN': '"我能变富"这个信念有多强？',
      'zh-TW': '「我能變富」這個信念有多強？',
      vi: 'Niềm tin "tôi có thể trở nên giàu có" của tôi mạnh đến mức nào?',
      id: 'Seberapa kuat keyakinan saya bahwa "saya bisa menjadi kaya"?',
    }),
    options: [
      opt(
        {
          ko: '솔직히 나는 아닌 것 같다. 그냥 평범하게 사는 게 현실이다',
          en: "Honestly, I don't think it's me. Living an ordinary life is the reality",
          ja: '正直、自分は違う気がする。ただ普通に生きるのが現実だ',
          'zh-CN': '老实说觉得不会是我。普普通通地生活才是现实',
          'zh-TW': '老實說覺得不會是我。普普通通地生活才是現實',
          vi: 'Thật lòng thì tôi nghĩ không phải mình. Sống bình thường mới là thực tế',
          id: 'Jujur, sepertinya bukan saya. Hidup biasa-biasa saja itulah realitanya',
        },
        0
      ),
      opt(
        {
          ko: '되면 좋겠지만 확신은 없다',
          en: "It'd be nice if it happened, but I have no confidence",
          ja: 'なれたらいいけど確信はない',
          'zh-CN': '能变富当然好，但没有信心',
          'zh-TW': '能變富當然好，但沒有信心',
          vi: 'Được vậy thì tốt nhưng không chắc chắn',
          id: 'Kalau bisa jadi kaya, bagus. Tapi tidak yakin',
        },
        1
      ),
      opt(
        {
          ko: '될 수 있다고 생각한다. 노력하면 가능하다',
          en: 'I believe I can. It\'s possible if I put in the effort',
          ja: 'なれると思う。努力すれば可能だ',
          'zh-CN': '我觉得能行，努力就能实现',
          'zh-TW': '我覺得能行，努力就能實現',
          vi: 'Tôi nghĩ mình có thể. Nếu cố gắng thì khả thi',
          id: 'Saya percaya bisa. Kalau berusaha, itu mungkin',
        },
        2
      ),
      opt(
        {
          ko: '반드시 된다. 의심한 적이 없다. 언제가 될지의 문제다',
          en: "It will definitely happen. I've never doubted it. It's just a matter of when",
          ja: '必ずなる。疑ったことはない。いつなるかの問題だ',
          'zh-CN': '一定会实现，从没怀疑过。问题只是时间早晚',
          'zh-TW': '一定會實現，從沒懷疑過。問題只是時間早晚',
          vi: 'Chắc chắn sẽ thành. Chưa từng nghi ngờ điều đó. Chỉ là vấn đề thời gian',
          id: 'Pasti akan terjadi. Tidak pernah ragu. Ini hanya soal kapan',
        },
        3
      ),
    ],
  },
];

export const phase3HundredBillionProbabilityResults: Phase3HundredBillionProbabilityResult[] = [
  {
    type: 'Type1',
    emoji: '💸',
    title: L({
      ko: '로또나 사러 가세요, 100억 확률 1%',
      en: 'Just Go Buy a Lottery Ticket — ₩10 Billion Probability 1%',
      ja: 'ロトでも買いに行ってください、100億確率1%',
      'zh-CN': '去买彩票吧，100亿概率1%',
      'zh-TW': '去買樂透吧，100億機率1%',
      vi: 'Đi mua vé xổ số đi, xác suất 100 tỷ là 1%',
      id: 'Mendingan Beli Lotre Saja, Probabilitas 100 Miliar 1%',
    }),
    shortDescription: L({
      ko: '현재 마인드셋과 재테크 성향으로는 100억이 오기 어렵습니다. 근데 로또는 항상 열려있습니다.',
      en: 'With your current mindset and money habits, ₩10 billion is a long shot. But the lottery is always open',
      ja: '現在のマインドセットと資産運用の傾向では100億ウォンは来にくいです。でもロトはいつでも開いています',
      'zh-CN': '以目前的心态和理财习惯，100亿韩元很难到手。不过彩票随时都开着',
      'zh-TW': '以目前的心態和理財習慣，100億韓元很難到手。不過樂透隨時都開著',
      vi: 'Với tư duy và thói quen tài chính hiện tại, 100 tỷ won rất khó đến. Nhưng xổ số thì luôn mở',
      id: 'Dengan pola pikir dan kebiasaan finansial saat ini, 100 miliar won sulit didapat. Tapi lotre selalu terbuka',
    }),
    description: L({
      ko: '100억 부자 확률: 1% (로또 당첨 포함 시 1.000001%)\n\n돈을 버는 것보다 쓰는 것이 자연스럽고 미래보다 현재에 집중하며 리스크라는 말만 들어도 멀리하는 패턴입니다. 나쁜 삶이 아닙니다. 단지 100억과는 다른 방향을 보고 있을 뿐입니다.',
      en: "₩10 billion probability: 1% (1.000001% including lottery odds)\n\nSpending feels more natural than earning, you focus on the present over the future, and you steer clear the moment risk is mentioned. It's not a bad life. You're just looking in a different direction than ₩10 billion",
      ja: '100億ウォン確率：1%（ロト当選込みで1.000001%）\n\nお金を稼ぐより使う方が自然で、未来より今に集中し、リスクという言葉を聞くだけで避けるパターンです。悪い人生ではありません。ただ100億ウォンとは違う方向を見ているだけです',
      'zh-CN': '100亿韩元概率：1%（含彩票中奖为1.000001%）\n\n花钱比赚钱更自然，更专注于当下而非未来，一听到"风险"这个词就会躲开。这不是不好的人生，只是和100亿走的方向不同而已',
      'zh-TW': '100億韓元機率：1%（含樂透中獎為1.000001%）\n\n花錢比賺錢更自然，更專注於當下而非未來，一聽到「風險」這個詞就會躲開。這不是不好的人生，只是和100億走的方向不同而已',
      vi: 'Xác suất trở thành tỷ phú 100 tỷ won: 1% (tính cả trúng xổ số là 1.000001%)\n\nTiêu tiền có vẻ tự nhiên hơn kiếm tiền, tập trung vào hiện tại hơn tương lai, và chỉ cần nghe đến "rủi ro" là đã tránh xa. Không phải là cuộc sống tồi tệ. Chỉ là bạn đang nhìn về một hướng khác với 100 tỷ won',
      id: 'Probabilitas menjadi miliarder 100 miliar won: 1% (1,000001% jika termasuk menang lotre)\n\nMembelanjakan uang terasa lebih alami daripada menghasilkannya, lebih fokus pada masa kini daripada masa depan, dan langsung menghindar begitu mendengar kata "risiko". Ini bukan hidup yang buruk. Hanya saja arahnya berbeda dari 100 miliar won',
    }),
    probability: L({
      ko: '1%',
      en: '1%',
      ja: '1%',
      'zh-CN': '1%',
      'zh-TW': '1%',
      vi: '1%',
      id: '1%',
    }),
    sections: [
      section(
        {
          ko: '📊 현재 재정 패턴',
          en: '📊 Current Financial Pattern',
          ja: '📊 現在の財政パターン',
          'zh-CN': '📊 目前的财务模式',
          'zh-TW': '📊 目前的財務模式',
          vi: '📊 Mô hình tài chính hiện tại',
          id: '📊 Pola Finansial Saat Ini',
        },
        {
          ko: '수입 = 지출. 자산 축적 속도 매우 느림',
          en: 'Income = Expenses. Asset accumulation is very slow',
          ja: '収入＝支出。資産形成のスピードが非常に遅い',
          'zh-CN': '收入＝支出。资产积累速度非常慢',
          'zh-TW': '收入＝支出。資產累積速度非常慢',
          vi: 'Thu nhập = Chi tiêu. Tốc độ tích lũy tài sản rất chậm',
          id: 'Pendapatan = Pengeluaran. Kecepatan akumulasi aset sangat lambat',
        }
      ),
      section(
        {
          ko: '🧠 부의 마인드셋 레벨',
          en: '🧠 Wealth Mindset Level',
          ja: '🧠 富のマインドセットレベル',
          'zh-CN': '🧠 财富心态等级',
          'zh-TW': '🧠 財富心態等級',
          vi: '🧠 Cấp độ tư duy làm giàu',
          id: '🧠 Level Pola Pikir Kekayaan',
        },
        {
          ko: 'Lv.1 현재 충실형',
          en: 'Lv.1 Living in the Present',
          ja: 'Lv.1 現在充実型',
          'zh-CN': 'Lv.1 活在当下型',
          'zh-TW': 'Lv.1 活在當下型',
          vi: 'Lv.1 Kiểu sống cho hiện tại',
          id: 'Lv.1 Tipe Fokus Masa Kini',
        }
      ),
      section(
        {
          ko: '✅ 지금 당장 할 수 있는 것',
          en: '✅ Something You Can Do Right Now',
          ja: '✅ 今すぐできること',
          'zh-CN': '✅ 现在马上能做的事',
          'zh-TW': '✅ 現在馬上能做的事',
          vi: '✅ Điều có thể làm ngay bây giờ',
          id: '✅ Hal yang Bisa Dilakukan Sekarang',
        },
        {
          ko: '이번 달 지출 내역을 처음으로 적어보기. 아는 것부터가 시작',
          en: "Write down this month's expenses for the first time. Awareness is the starting point",
          ja: '今月の支出内訳を初めて書いてみる。知ることから始まる',
          'zh-CN': '第一次把这个月的支出记下来。了解现状就是开始',
          'zh-TW': '第一次把這個月的支出記下來。了解現況就是開始',
          vi: 'Ghi lại chi tiêu tháng này lần đầu tiên. Biết được là bước khởi đầu',
          id: 'Coba catat pengeluaran bulan ini untuk pertama kalinya. Mengetahui adalah awal dari segalanya',
        }
      ),
      section(
        {
          ko: '💬 한 줄 위로',
          en: '💬 One-Line Comfort',
          ja: '💬 一言慰め',
          'zh-CN': '💬 一句安慰',
          'zh-TW': '💬 一句安慰',
          vi: '💬 Một câu an ủi',
          id: '💬 Sepatah Kata Penghibur',
        },
        {
          ko: '"100억은 몰라도 행복한 삶은 지금도 가능합니다. 근데 로또는 사세요"',
          en: '"₩10 billion, who knows — but a happy life is possible right now. Still, go buy that lottery ticket"',
          ja: '「100億ウォンはわからないけど、幸せな人生は今でも可能です。でもロトは買ってください」',
          'zh-CN': '"100亿不好说，但幸福的生活现在就能实现。不过彩票还是买一张吧"',
          'zh-TW': '「100億不好說，但幸福的生活現在就能實現。不過樂透還是買一張吧」',
          vi: '"100 tỷ won thì chưa biết, nhưng cuộc sống hạnh phúc thì có thể có ngay từ bây giờ. Nhưng vẫn nên mua vé xổ số"',
          id: '"100 miliar won mungkin belum tentu, tapi hidup bahagia sudah bisa dimulai sekarang. Tapi tetap saja, beli lotre ya"',
        }
      ),
    ],
    shareMessage: L({
      ko: '100억 부자 확률: 1% 💸 로또 포함 시 1.000001%래 ㅋㅋㅋ 인정은 함... 오늘 로또 사러 감 → 너는 몇 % 나왔어?',
      en: "₩10 billion probability: 1% 💸 1.000001% including lottery, lol... gotta admit it's accurate. Going to buy a lottery ticket today → What % did you get?",
      ja: '100億ウォン確率：1% 💸 ロト込みで1.000001%だって（笑）認めるしかない…今日ロト買いに行く → あなたは何%だった？',
      'zh-CN': '100亿概率：1% 💸 加上彩票是1.000001%哈哈哈，不得不服……今天要去买彩票了 → 你测出多少%？',
      'zh-TW': '100億機率：1% 💸 加上樂透是1.000001%哈哈哈，不得不服……今天要去買樂透了 → 你測出多少%？',
      vi: 'Xác suất 100 tỷ won: 1% 💸 tính cả xổ số là 1.000001% haha... phải công nhận là đúng... hôm nay đi mua vé xổ số đây → bạn được mấy %?',
      id: 'Probabilitas 100 miliar won: 1% 💸 kalau termasuk lotre jadi 1,000001% wkwk... harus diakui sih... hari ini mau beli lotre → kamu dapat berapa %?',
    }),
  },
  {
    type: 'Type2',
    emoji: '💭',
    title: L({
      ko: '꿈은 있는데 행동이 없는, 100억 확률 5%',
      en: 'Big Dreams, Zero Action — ₩10 Billion Probability 5%',
      ja: '夢はあるけど行動がない、100億確率5%',
      'zh-CN': '有梦想却没行动，100亿概率5%',
      'zh-TW': '有夢想卻沒行動，100億機率5%',
      vi: 'Có mơ ước nhưng không hành động, xác suất 100 tỷ là 5%',
      id: 'Punya Mimpi Tapi Tanpa Aksi, Probabilitas 100 Miliar 5%',
    }),
    shortDescription: L({
      ko: '관심은 있습니다. 생각도 있습니다. 근데 행동이 따라오지 않습니다.',
      en: "You're interested. You think about it. But action never follows",
      ja: '興味はあります。考えもあります。でも行動がついてきません',
      'zh-CN': '有兴趣，也有想法，但行动跟不上',
      'zh-TW': '有興趣，也有想法，但行動跟不上',
      vi: 'Có quan tâm. Có suy nghĩ. Nhưng hành động thì không theo kịp',
      id: 'Ada minat. Ada pemikiran. Tapi tindakan tidak pernah mengikuti',
    }),
    description: L({
      ko: '재테크·투자에 관심이 없지는 않고 부자가 되고 싶다는 마음도 있습니다. 그런데 공부하다가 멈추고 시작하려다가 미루고를 반복합니다. 지식과 실행 사이의 갭이 가장 큰 구간입니다.',
      en: "You're not uninterested in finance and investing, and you do want to become rich. But you keep stopping midway through studying and putting off getting started. This is the zone with the biggest gap between knowledge and action",
      ja: '資産運用・投資に興味がないわけではなく、お金持ちになりたいという気持ちもあります。でも勉強を途中でやめたり始めようとして後回しにしたりを繰り返します。知識と実行の間のギャップが最も大きい区間です',
      'zh-CN': '对理财投资并非没有兴趣，也有想变富的心。但总是学到一半就停下，想开始又一再拖延。这是知识和行动之间差距最大的阶段',
      'zh-TW': '對理財投資並非沒有興趣，也有想變富的心。但總是學到一半就停下，想開始又一再拖延。這是知識和行動之間差距最大的階段',
      vi: 'Không phải là không quan tâm đến đầu tư tài chính, và cũng có mong muốn trở nên giàu có. Nhưng cứ học nửa chừng lại dừng, muốn bắt đầu lại trì hoãn. Đây là giai đoạn có khoảng cách lớn nhất giữa kiến thức và hành động',
      id: 'Bukannya tidak tertarik pada keuangan dan investasi, dan memang ada keinginan untuk menjadi kaya. Tapi selalu berhenti di tengah belajar dan menunda-nunda saat mau mulai. Ini adalah zona dengan kesenjangan terbesar antara pengetahuan dan tindakan',
    }),
    probability: L({
      ko: '5%',
      en: '5%',
      ja: '5%',
      'zh-CN': '5%',
      'zh-TW': '5%',
      vi: '5%',
      id: '5%',
    }),
    sections: [
      section(
        {
          ko: '📊 현재 재정 패턴',
          en: '📊 Current Financial Pattern',
          ja: '📊 現在の財政パターン',
          'zh-CN': '📊 目前的财务模式',
          'zh-TW': '📊 目前的財務模式',
          vi: '📊 Mô hình tài chính hiện tại',
          id: '📊 Pola Finansial Saat Ini',
        },
        {
          ko: '저축은 하는데 투자로 연결이 안 됨',
          en: 'You save, but it never connects to investing',
          ja: '貯金はしているが投資にはつながっていない',
          'zh-CN': '有储蓄，但没能延伸到投资',
          'zh-TW': '有儲蓄，但沒能延伸到投資',
          vi: 'Có tiết kiệm nhưng chưa kết nối được với đầu tư',
          id: 'Menabung, tapi tidak berlanjut ke investasi',
        }
      ),
      section(
        {
          ko: '🧠 부의 마인드셋 레벨',
          en: '🧠 Wealth Mindset Level',
          ja: '🧠 富のマインドセットレベル',
          'zh-CN': '🧠 财富心态等级',
          'zh-TW': '🧠 財富心態等級',
          vi: '🧠 Cấp độ tư duy làm giàu',
          id: '🧠 Level Pola Pikir Kekayaan',
        },
        {
          ko: 'Lv.2 준비만 하는 사람',
          en: 'Lv.2 The Eternal Preparer',
          ja: 'Lv.2 準備だけする人',
          'zh-CN': 'Lv.2 只做准备的人',
          'zh-TW': 'Lv.2 只做準備的人',
          vi: 'Lv.2 Người chỉ chuẩn bị',
          id: 'Lv.2 Tipe yang Hanya Bersiap-siap',
        }
      ),
      section(
        {
          ko: '✅ 지금 당장 할 수 있는 것',
          en: '✅ Something You Can Do Right Now',
          ja: '✅ 今すぐできること',
          'zh-CN': '✅ 现在马上能做的事',
          'zh-TW': '✅ 現在馬上能做的事',
          vi: '✅ Điều có thể làm ngay bây giờ',
          id: '✅ Hal yang Bisa Dilakukan Sekarang',
        },
        {
          ko: '오늘 증권사 앱 하나 설치하고 계좌 개설하기. 돈을 안 넣어도 됩니다. 일단 환경부터',
          en: "Install one brokerage app today and open an account. You don't even need to put money in yet — set up the environment first",
          ja: '今日、証券会社のアプリを一つインストールして口座を開設する。お金を入れなくてもいい。まず環境から',
          'zh-CN': '今天先装一个证券公司App并开户。可以先不放钱，重要的是先搭好环境',
          'zh-TW': '今天先裝一個證券公司App並開戶。可以先不放錢，重要的是先搭好環境',
          vi: 'Hôm nay cài một ứng dụng chứng khoán và mở tài khoản. Không cần nạp tiền vào cũng được. Trước hết là tạo môi trường',
          id: 'Hari ini instal satu aplikasi sekuritas dan buka rekening. Tidak perlu langsung isi uang. Yang penting siapkan dulu lingkungannya',
        }
      ),
      section(
        {
          ko: '💬 한 줄 평',
          en: '💬 One-Line Verdict',
          ja: '💬 一言評価',
          'zh-CN': '💬 一句点评',
          'zh-TW': '💬 一句點評',
          vi: '💬 Một câu nhận xét',
          id: '💬 Satu Kalimat Penilaian',
        },
        {
          ko: '"생각하는 사람과 행동하는 사람의 차이가 10년 후 자산 차이가 됩니다"',
          en: '"The gap between thinkers and doers becomes the gap in assets 10 years later"',
          ja: '「考える人と行動する人の差が10年後の資産の差になります」',
          'zh-CN': '"想的人和做的人之间的差距，10年后就会变成资产的差距"',
          'zh-TW': '「想的人和做的人之間的差距，10年後就會變成資產的差距」',
          vi: '"Khoảng cách giữa người chỉ nghĩ và người hành động sẽ trở thành khoảng cách tài sản sau 10 năm"',
          id: '"Perbedaan antara orang yang hanya berpikir dan yang bertindak akan menjadi perbedaan aset 10 tahun kemudian"',
        }
      ),
    ],
    shareMessage: L({
      ko: '100억 부자 확률: 5% 💭 꿈은 있는데 행동이 없다는 거 뼈 때림... 오늘 증권 앱이라도 깔아야겠다 → 너는 몇 % 나왔어?',
      en: '₩10 billion probability: 5% 💭 "Big dreams, zero action" hit hard, lol... guess I should install a brokerage app today → What % did you get?',
      ja: '100億ウォン確率：5% 💭「夢はあるけど行動がない」が刺さる（笑）今日証券アプリでも入れよう → あなたは何%だった？',
      'zh-CN': '100亿概率：5% 💭 "有梦想却没行动"这句话太扎心了哈哈，今天至少装个证券App吧 → 你测出多少%？',
      'zh-TW': '100億機率：5% 💭 「有夢想卻沒行動」這句話太扎心了哈哈，今天至少裝個證券App吧 → 你測出多少%？',
      vi: 'Xác suất 100 tỷ won: 5% 💭 "có mơ ước nhưng không hành động" đúng thật đau lòng haha... hôm nay phải cài app chứng khoán mới được → bạn được mấy %?',
      id: 'Probabilitas 100 miliar won: 5% 💭 "punya mimpi tapi tanpa aksi" bikin sakit hati wkwk... hari ini kayaknya harus instal aplikasi sekuritas dulu → kamu dapat berapa %?',
    }),
  },
  {
    type: 'Type3',
    emoji: '📈',
    title: L({
      ko: '기초는 됐는데 속도가 느린, 100억 확률 15%',
      en: 'Fundamentals Down, Speed Slow — ₩10 Billion Probability 15%',
      ja: '基礎はできたけどスピードが遅い、100億確率15%',
      'zh-CN': '基础打好了但速度慢，100亿概率15%',
      'zh-TW': '基礎打好了但速度慢，100億機率15%',
      vi: 'Đã có nền tảng nhưng tốc độ chậm, xác suất 100 tỷ là 15%',
      id: 'Dasar Sudah Ada Tapi Lambat, Probabilitas 100 Miliar 15%',
    }),
    shortDescription: L({
      ko: '기본기는 갖췄습니다. 저축하고 공부하고 소액 투자도 합니다. 근데 100억은 지금 속도로는 오래 걸립니다.',
      en: "You've got the basics. You save, study, and even make small investments. But at this pace, ₩10 billion will take a long time",
      ja: '基本はできています。貯金して勉強して少額投資もしています。でも100億ウォンは今のスピードだと時間がかかります',
      'zh-CN': '基本功已经具备。会储蓄、学习，也做小额投资。但按现在的速度，100亿要花很长时间',
      'zh-TW': '基本功已經具備。會儲蓄、學習，也做小額投資。但按現在的速度，100億要花很長時間',
      vi: 'Đã có nền tảng cơ bản. Tiết kiệm, học hỏi và cả đầu tư số tiền nhỏ. Nhưng với tốc độ hiện tại, 100 tỷ won sẽ mất rất lâu',
      id: 'Sudah punya dasar yang baik. Menabung, belajar, dan bahkan berinvestasi kecil-kecilan. Tapi dengan kecepatan sekarang, 100 miliar won akan butuh waktu lama',
    }),
    description: L({
      ko: '재정 관리 기본기가 있고 투자에 대한 지식도 쌓이고 있습니다. 리스크를 지나치게 회피하거나 수입 채널이 하나에 머물러있는 것이 속도를 제한하는 요소입니다. 방향은 맞습니다. 가속이 필요합니다.',
      en: "You have solid financial management basics, and your investment knowledge is building up. Excessively avoiding risk or sticking to a single income channel is what's limiting your speed. The direction is right. You just need to accelerate",
      ja: '財政管理の基本があり、投資に関する知識も積み重なっています。リスクを過度に避けたり収入源が一つにとどまっていることがスピードを制限する要因です。方向は合っています。加速が必要です',
      'zh-CN': '已经具备理财管理的基础，投资知识也在不断积累。过度规避风险或收入渠道只有一个是限制速度的因素。方向是对的，需要加速',
      'zh-TW': '已經具備理財管理的基礎，投資知識也在不斷累積。過度規避風險或收入管道只有一個是限制速度的因素。方向是對的，需要加速',
      vi: 'Đã có nền tảng quản lý tài chính, và kiến thức đầu tư cũng đang tích lũy. Việc quá né tránh rủi ro hoặc chỉ có một nguồn thu nhập là yếu tố hạn chế tốc độ. Hướng đi đã đúng. Cần đẩy nhanh tốc độ',
      id: 'Sudah memiliki dasar pengelolaan keuangan yang baik, dan pengetahuan investasi pun terus bertambah. Terlalu menghindari risiko atau hanya bergantung pada satu sumber pendapatan menjadi faktor yang membatasi kecepatan. Arahnya sudah benar. Yang dibutuhkan hanyalah akselerasi',
    }),
    probability: L({
      ko: '15%',
      en: '15%',
      ja: '15%',
      'zh-CN': '15%',
      'zh-TW': '15%',
      vi: '15%',
      id: '15%',
    }),
    sections: [
      section(
        {
          ko: '📊 현재 재정 패턴',
          en: '📊 Current Financial Pattern',
          ja: '📊 現在の財政パターン',
          'zh-CN': '📊 目前的财务模式',
          'zh-TW': '📊 目前的財務模式',
          vi: '📊 Mô hình tài chính hiện tại',
          id: '📊 Pola Finansial Saat Ini',
        },
        {
          ko: '저축+소액 투자. 자산이 서서히 늘고 있음',
          en: 'Savings + small investments. Assets are slowly growing',
          ja: '貯金＋少額投資。資産が徐々に増えている',
          'zh-CN': '储蓄+小额投资。资产正在缓慢增长',
          'zh-TW': '儲蓄+小額投資。資產正在緩慢增長',
          vi: 'Tiết kiệm + đầu tư nhỏ. Tài sản đang tăng dần',
          id: 'Tabungan + investasi kecil. Aset perlahan bertambah',
        }
      ),
      section(
        {
          ko: '🧠 부의 마인드셋 레벨',
          en: '🧠 Wealth Mindset Level',
          ja: '🧠 富のマインドセットレベル',
          'zh-CN': '🧠 财富心态等级',
          'zh-TW': '🧠 財富心態等級',
          vi: '🧠 Cấp độ tư duy làm giàu',
          id: '🧠 Level Pola Pikir Kekayaan',
        },
        {
          ko: 'Lv.3 기초 재테커',
          en: 'Lv.3 Basic Finance Manager',
          ja: 'Lv.3 基礎資産運用家',
          'zh-CN': 'Lv.3 理财入门者',
          'zh-TW': 'Lv.3 理財入門者',
          vi: 'Lv.3 Người quản lý tài chính cơ bản',
          id: 'Lv.3 Pengelola Keuangan Dasar',
        }
      ),
      section(
        {
          ko: '✅ 지금 당장 할 수 있는 것',
          en: '✅ Something You Can Do Right Now',
          ja: '✅ 今すぐできること',
          'zh-CN': '✅ 现在马上能做的事',
          'zh-TW': '✅ 現在馬上能做的事',
          vi: '✅ Điều có thể làm ngay bây giờ',
          id: '✅ Hal yang Bisa Dilakukan Sekarang',
        },
        {
          ko: '투자 비중을 현재보다 10% 높이거나 부업 아이디어 하나를 구체화하기',
          en: 'Raise your investment ratio by 10% from now, or flesh out one side-hustle idea',
          ja: '投資比率を現在より10%上げるか、副業アイデアを一つ具体化する',
          'zh-CN': '把投资比重提高10%，或把一个副业想法具体化',
          'zh-TW': '把投資比重提高10%，或把一個副業想法具體化',
          vi: 'Tăng tỷ trọng đầu tư thêm 10% so với hiện tại, hoặc cụ thể hóa một ý tưởng làm thêm',
          id: 'Naikkan porsi investasi 10% dari sekarang, atau matangkan satu ide pekerjaan sampingan',
        }
      ),
      section(
        {
          ko: '💬 한 줄 평',
          en: '💬 One-Line Verdict',
          ja: '💬 一言評価',
          'zh-CN': '💬 一句点评',
          'zh-TW': '💬 一句點評',
          vi: '💬 Một câu nhận xét',
          id: '💬 Satu Kalimat Penilaian',
        },
        {
          ko: '"지금 페이스에서 기어를 하나만 올리면 완전히 달라집니다"',
          en: '"Shift up just one gear from your current pace and everything changes"',
          ja: '「今のペースからギアを一つ上げるだけで完全に変わります」',
          'zh-CN': '"从目前的节奏只要再加快一档，就会完全不同"',
          'zh-TW': '「從目前的節奏只要再加快一檔，就會完全不同」',
          vi: '"Chỉ cần tăng thêm một cấp so với tốc độ hiện tại, mọi thứ sẽ hoàn toàn khác"',
          id: '"Cukup naikkan satu gigi dari kecepatan sekarang, semuanya akan benar-benar berubah"',
        }
      ),
    ],
    shareMessage: L({
      ko: '100억 부자 확률: 15% 📈 기초는 됐는데 속도가 느리다는 거... 기어 하나 올려야겠다 → 너는 몇 % 나왔어?',
      en: '₩10 billion probability: 15% 📈 "Fundamentals down, speed slow"... guess I need to shift up a gear → What % did you get?',
      ja: '100億ウォン確率：15% 📈「基礎はできたけどスピードが遅い」…ギアを一つ上げなきゃ → あなたは何%だった？',
      'zh-CN': '100亿概率：15% 📈 "基础打好了但速度慢"……得再加快一档了 → 你测出多少%？',
      'zh-TW': '100億機率：15% 📈 「基礎打好了但速度慢」……得再加快一檔了 → 你測出多少%？',
      vi: 'Xác suất 100 tỷ won: 15% 📈 "có nền tảng nhưng tốc độ chậm"... phải tăng thêm một cấp mới được → bạn được mấy %?',
      id: 'Probabilitas 100 miliar won: 15% 📈 "dasar sudah ada tapi lambat"... kayaknya harus naikkan satu gigi lagi → kamu dapat berapa %?',
    }),
  },
  {
    type: 'Type4',
    emoji: '🔑',
    title: L({
      ko: '방향은 맞는데 실행이 더 필요한, 100억 확률 35%',
      en: 'Right Direction, Needs More Execution — ₩10 Billion Probability 35%',
      ja: '方向は合っているけど実行がもっと必要な、100億確率35%',
      'zh-CN': '方向对了但还需要更多执行力，100亿概率35%',
      'zh-TW': '方向對了但還需要更多執行力，100億機率35%',
      vi: 'Hướng đi đúng nhưng cần thêm hành động, xác suất 100 tỷ là 35%',
      id: 'Arah Sudah Benar, Perlu Lebih Banyak Aksi, Probabilitas 100 Miliar 35%',
    }),
    shortDescription: L({
      ko: '꽤 됩니다. 마인드셋도 있고 실행력도 있습니다. 이 방향으로 10년만 더 가면 이야기가 달라집니다.',
      en: "You're doing pretty well. You've got the mindset and the execution. Keep going this way for 10 more years and the story changes completely",
      ja: 'かなりいい方です。マインドセットもあり実行力もあります。この方向であと10年進めば話が変わります',
      'zh-CN': '相当不错了。既有心态也有执行力。照这个方向再走10年，故事就会完全不同',
      'zh-TW': '相當不錯了。既有心態也有執行力。照這個方向再走10年，故事就會完全不同',
      vi: 'Khá tốt đấy. Có cả tư duy và khả năng thực thi. Cứ đi theo hướng này thêm 10 năm nữa, câu chuyện sẽ khác hẳn',
      id: 'Sudah cukup bagus. Punya pola pikir dan kemampuan eksekusi. Kalau terus di jalur ini selama 10 tahun lagi, ceritanya akan sangat berbeda',
    }),
    description: L({
      ko: '자산을 파악하고 있고 투자를 하고 있으며 리스크도 계산해서 접근합니다. 부의 마인드셋이 어느 정도 갖춰진 단계입니다. 복리의 힘이 본격적으로 작동하기 시작하는 시점이 멀지 않습니다.',
      en: "You track your assets, you invest, and you approach risk with calculation. This is a stage where a wealth mindset is fairly well established. The point where compound interest really starts to kick in isn't far off",
      ja: '資産を把握し投資をしており、リスクも計算してアプローチします。富のマインドセットがある程度整った段階です。複利の力が本格的に働き始める時期はそう遠くありません',
      'zh-CN': '掌握自己的资产状况，正在投资，也会计算风险再行动。这是财富心态已经相当到位的阶段。复利真正开始发威的那一刻不远了',
      'zh-TW': '掌握自己的資產狀況，正在投資，也會計算風險再行動。這是財富心態已經相當到位的階段。複利真正開始發威的那一刻不遠了',
      vi: 'Đang nắm rõ tài sản, đang đầu tư, và tiếp cận rủi ro có tính toán. Đây là giai đoạn tư duy làm giàu đã được thiết lập ở mức khá tốt. Thời điểm lãi kép bắt đầu phát huy sức mạnh thực sự không còn xa',
      id: 'Sudah memahami aset, sedang berinvestasi, dan mendekati risiko dengan penuh perhitungan. Ini adalah tahap di mana pola pikir kekayaan sudah cukup terbentuk. Titik di mana bunga majemuk mulai benar-benar bekerja sudah tidak jauh lagi',
    }),
    probability: L({
      ko: '35%',
      en: '35%',
      ja: '35%',
      'zh-CN': '35%',
      'zh-TW': '35%',
      vi: '35%',
      id: '35%',
    }),
    sections: [
      section(
        {
          ko: '📊 현재 재정 패턴',
          en: '📊 Current Financial Pattern',
          ja: '📊 現在の財政パターン',
          'zh-CN': '📊 目前的财务模式',
          'zh-TW': '📊 目前的財務模式',
          vi: '📊 Mô hình tài chính hiện tại',
          id: '📊 Pola Finansial Saat Ini',
        },
        {
          ko: '저축+투자+자산 추적. 순자산이 꾸준히 증가 중',
          en: 'Savings + investing + asset tracking. Net worth is steadily rising',
          ja: '貯金＋投資＋資産追跡。純資産が着実に増加中',
          'zh-CN': '储蓄+投资+资产追踪。净资产正稳步增长',
          'zh-TW': '儲蓄+投資+資產追蹤。淨資產正穩步增長',
          vi: 'Tiết kiệm + đầu tư + theo dõi tài sản. Tài sản thuần đang tăng đều',
          id: 'Tabungan + investasi + pelacakan aset. Kekayaan bersih terus meningkat stabil',
        }
      ),
      section(
        {
          ko: '🧠 부의 마인드셋 레벨',
          en: '🧠 Wealth Mindset Level',
          ja: '🧠 富のマインドセットレベル',
          'zh-CN': '🧠 财富心态等级',
          'zh-TW': '🧠 財富心態等級',
          vi: '🧠 Cấp độ tư duy làm giàu',
          id: '🧠 Level Pola Pikir Kekayaan',
        },
        {
          ko: 'Lv.4 부의 궤도 진입형',
          en: 'Lv.4 Entering the Wealth Track',
          ja: 'Lv.4 富の軌道進入型',
          'zh-CN': 'Lv.4 进入财富轨道型',
          'zh-TW': 'Lv.4 進入財富軌道型',
          vi: 'Lv.4 Bắt đầu vào quỹ đạo giàu có',
          id: 'Lv.4 Tipe Memasuki Jalur Kekayaan',
        }
      ),
      section(
        {
          ko: '✅ 지금 당장 할 수 있는 것',
          en: '✅ Something You Can Do Right Now',
          ja: '✅ 今すぐできること',
          'zh-CN': '✅ 现在马上能做的事',
          'zh-TW': '✅ 現在馬上能做的事',
          vi: '✅ Điều có thể làm ngay bây giờ',
          id: '✅ Hal yang Bisa Dilakukan Sekarang',
        },
        {
          ko: '수입 채널 다각화 또는 현재 투자 포트폴리오 점검 및 리밸런싱',
          en: 'Diversify income channels, or review and rebalance your current investment portfolio',
          ja: '収入源の多角化、または現在の投資ポートフォリオの点検とリバランス',
          'zh-CN': '拓展收入渠道，或检视并重新平衡目前的投资组合',
          'zh-TW': '拓展收入管道，或檢視並重新平衡目前的投資組合',
          vi: 'Đa dạng hóa nguồn thu nhập hoặc kiểm tra, tái cân bằng danh mục đầu tư hiện tại',
          id: 'Diversifikasi sumber pendapatan, atau tinjau dan seimbangkan kembali portofolio investasi saat ini',
        }
      ),
      section(
        {
          ko: '💬 한 줄 평',
          en: '💬 One-Line Verdict',
          ja: '💬 一言評価',
          'zh-CN': '💬 一句点评',
          'zh-TW': '💬 一句點評',
          vi: '💬 Một câu nhận xét',
          id: '💬 Satu Kalimat Penilaian',
        },
        {
          ko: '"10년 후 주변 사람들이 \'저 사람 어떻게 저렇게 됐지?\' 할 가능성이 있습니다"',
          en: '"In 10 years, people around you might be saying, \'How did they end up like that?\'"',
          ja: '「10年後、周りの人が『あの人どうしてあんなに？』と言う可能性があります」',
          'zh-CN': '"10年后周围的人可能会说\'那个人怎么会变成那样？\'"',
          'zh-TW': '「10年後周圍的人可能會說『那個人怎麼會變成那樣？』」',
          vi: '"Có khả năng sau 10 năm, những người xung quanh sẽ nói \'sao người đó lại được như vậy?\'"',
          id: '"10 tahun lagi, orang-orang di sekitar mungkin akan bertanya, \'kok dia bisa jadi seperti itu?\'"',
        }
      ),
    ],
    shareMessage: L({
      ko: '100억 부자 확률: 35% 🔑 방향은 맞는데 실행이 더 필요하다는 거... 10년 후 달라져있을 것 같다는 결과 → 너는 몇 % 나왔어?',
      en: '₩10 billion probability: 35% 🔑 "Right direction, needs more execution"... apparently I\'ll be different in 10 years → What % did you get?',
      ja: '100億ウォン確率：35% 🔑「方向は合っているけど実行がもっと必要」…10年後には変わっているという結果 → あなたは何%だった？',
      'zh-CN': '100亿概率：35% 🔑 "方向对了但还需要更多执行力"……结果说10年后会大不一样 → 你测出多少%？',
      'zh-TW': '100億機率：35% 🔑 「方向對了但還需要更多執行力」……結果說10年後會大不一樣 → 你測出多少%？',
      vi: 'Xác suất 100 tỷ won: 35% 🔑 "hướng đi đúng nhưng cần thêm hành động"... kết quả nói 10 năm sau sẽ khác hẳn → bạn được mấy %?',
      id: 'Probabilitas 100 miliar won: 35% 🔑 "arah sudah benar, perlu lebih banyak aksi"... katanya 10 tahun lagi akan berbeda → kamu dapat berapa %?',
    }),
  },
  {
    type: 'Type5',
    emoji: '🚀',
    title: L({
      ko: '이미 궤도에 올라탄, 100억 확률 65%',
      en: 'Already on Track — ₩10 Billion Probability 65%',
      ja: 'すでに軌道に乗った、100億確率65%',
      'zh-CN': '已经上了轨道，100亿概率65%',
      'zh-TW': '已經上了軌道，100億機率65%',
      vi: 'Đã bước vào quỹ đạo, xác suất 100 tỷ là 65%',
      id: 'Sudah di Jalur yang Benar, Probabilitas 100 Miliar 65%',
    }),
    shortDescription: L({
      ko: '이 마인드셋과 실행력이라면 100억은 시간 문제입니다. 언제냐의 문제입니다.',
      en: 'With this mindset and execution, ₩10 billion is just a matter of time. The only question is when',
      ja: 'このマインドセットと実行力なら100億ウォンは時間の問題です。いつになるかの問題です',
      'zh-CN': '凭这样的心态和执行力，100亿只是时间问题，只是早晚的事',
      'zh-TW': '憑這樣的心態和執行力，100億只是時間問題，只是早晚的事',
      vi: 'Với tư duy và khả năng thực thi này, 100 tỷ won chỉ là vấn đề thời gian. Chỉ là chuyện khi nào',
      id: 'Dengan pola pikir dan eksekusi seperti ini, 100 miliar won hanya soal waktu. Pertanyaannya hanya kapan',
    }),
    description: L({
      ko: '수입 다각화를 고민하거나 이미 실행 중이고 투자는 소액이 아닌 포트폴리오로 관리하며 경제적 자유를 명확한 목표로 삼고 있습니다. 부자가 되는 법을 알고 있고 실행하고 있는 사람입니다.',
      en: "You're either considering income diversification or already doing it, you manage investments as a full portfolio rather than small amounts, and financial freedom is a clear goal. You know how to become rich and you're actually doing it",
      ja: '収入の多角化を考えているかすでに実行しており、投資は少額ではなくポートフォリオとして管理し、経済的自由を明確な目標としています。お金持ちになる方法を知っていて実行している人です',
      'zh-CN': '在考虑或已经在实践收入多元化，投资不是小额而是以组合方式管理，并将财务自由设为明确目标。你是懂得如何变富且正在实践的人',
      'zh-TW': '在考慮或已經在實踐收入多元化，投資不是小額而是以組合方式管理，並將財務自由設為明確目標。你是懂得如何變富且正在實踐的人',
      vi: 'Đang cân nhắc hoặc đã đang thực hiện đa dạng hóa thu nhập, quản lý đầu tư theo danh mục thay vì số tiền nhỏ, và coi tự do tài chính là mục tiêu rõ ràng. Bạn là người biết cách làm giàu và đang thực hiện điều đó',
      id: 'Sedang mempertimbangkan atau sudah menjalankan diversifikasi pendapatan, mengelola investasi sebagai portofolio bukan hanya jumlah kecil, dan menjadikan kebebasan finansial sebagai tujuan yang jelas. Anda adalah orang yang tahu caranya menjadi kaya dan benar-benar menjalankannya',
    }),
    probability: L({
      ko: '65%',
      en: '65%',
      ja: '65%',
      'zh-CN': '65%',
      'zh-TW': '65%',
      vi: '65%',
      id: '65%',
    }),
    sections: [
      section(
        {
          ko: '📊 현재 재정 패턴',
          en: '📊 Current Financial Pattern',
          ja: '📊 現在の財政パターン',
          'zh-CN': '📊 目前的财务模式',
          'zh-TW': '📊 目前的財務模式',
          vi: '📊 Mô hình tài chính hiện tại',
          id: '📊 Pola Finansial Saat Ini',
        },
        {
          ko: '다수 수입 채널 + 자산 적극 운용 + 복리 활용 중',
          en: 'Multiple income channels + active asset management + leveraging compound interest',
          ja: '複数の収入源＋資産の積極運用＋複利活用中',
          'zh-CN': '多元收入渠道+积极运用资产+正在利用复利',
          'zh-TW': '多元收入管道+積極運用資產+正在利用複利',
          vi: 'Nhiều nguồn thu nhập + quản lý tài sản tích cực + đang tận dụng lãi kép',
          id: 'Banyak sumber pendapatan + pengelolaan aset aktif + memanfaatkan bunga majemuk',
        }
      ),
      section(
        {
          ko: '🧠 부의 마인드셋 레벨',
          en: '🧠 Wealth Mindset Level',
          ja: '🧠 富のマインドセットレベル',
          'zh-CN': '🧠 财富心态等级',
          'zh-TW': '🧠 財富心態等級',
          vi: '🧠 Cấp độ tư duy làm giàu',
          id: '🧠 Level Pola Pikir Kekayaan',
        },
        {
          ko: 'Lv.5 100억 궤도형',
          en: 'Lv.5 On the ₩10 Billion Track',
          ja: 'Lv.5 100億軌道型',
          'zh-CN': 'Lv.5 100亿轨道型',
          'zh-TW': 'Lv.5 100億軌道型',
          vi: 'Lv.5 Kiểu trên quỹ đạo 100 tỷ',
          id: 'Lv.5 Tipe di Jalur 100 Miliar',
        }
      ),
      section(
        {
          ko: '✅ 지금 당장 할 수 있는 것',
          en: '✅ Something You Can Do Right Now',
          ja: '✅ 今すぐできること',
          'zh-CN': '✅ 现在马上能做的事',
          'zh-TW': '✅ 現在馬上能做的事',
          vi: '✅ Điều có thể làm ngay bây giờ',
          id: '✅ Hal yang Bisa Dilakukan Sekarang',
        },
        {
          ko: '지금 전략의 리스크 관리 점검. 속도보다 지속 가능성 확인하기',
          en: 'Review risk management in your current strategy. Check sustainability, not just speed',
          ja: '今の戦略のリスク管理を点検する。スピードより持続可能性を確認する',
          'zh-CN': '检查目前策略的风险管理，确认可持续性比速度更重要',
          'zh-TW': '檢查目前策略的風險管理，確認可持續性比速度更重要',
          vi: 'Kiểm tra quản lý rủi ro trong chiến lược hiện tại. Xác nhận tính bền vững hơn là tốc độ',
          id: 'Tinjau manajemen risiko strategi saat ini. Pastikan keberlanjutan, bukan hanya kecepatan',
        }
      ),
      section(
        {
          ko: '💬 한 줄 평',
          en: '💬 One-Line Verdict',
          ja: '💬 一言評価',
          'zh-CN': '💬 一句点评',
          'zh-TW': '💬 一句點評',
          vi: '💬 Một câu nhận xét',
          id: '💬 Satu Kalimat Penilaian',
        },
        {
          ko: '"주변에서 돈 어떻게 관리하냐는 질문을 자주 받기 시작했을 것입니다"',
          en: '"People around you have probably started asking how you manage money"',
          ja: '「周りからお金をどう管理しているのか聞かれることが増えてきているはずです」',
          'zh-CN': '"身边的人应该已经开始经常问你钱是怎么管理的了"',
          'zh-TW': '「身邊的人應該已經開始經常問你錢是怎麼管理的了」',
          vi: '"Chắc hẳn mọi người xung quanh đã bắt đầu thường hỏi bạn quản lý tiền như thế nào"',
          id: '"Orang-orang di sekitar mungkin sudah mulai sering bertanya bagaimana cara Anda mengelola uang"',
        }
      ),
    ],
    shareMessage: L({
      ko: '100억 부자 확률: 65% 🚀 이미 궤도에 올라탔다는 결과... 언제냐의 문제래 → 너는 몇 % 나왔어? 로또보다 이게 확률 높음 ㅋㅋ',
      en: "₩10 billion probability: 65% 🚀 Result says I'm already on track... it's just a matter of when → What % did you get? Better odds than the lottery lol",
      ja: '100億ウォン確率：65% 🚀 すでに軌道に乗っているという結果…いつになるかの問題だって → あなたは何%だった？ロトよりこっちの確率が高い（笑）',
      'zh-CN': '100亿概率：65% 🚀 结果说已经上了轨道……只是时间问题 → 你测出多少%？这个比彩票的概率高多了哈哈',
      'zh-TW': '100億機率：65% 🚀 結果說已經上了軌道……只是時間問題 → 你測出多少%？這個比樂透的機率高多了哈哈',
      vi: 'Xác suất 100 tỷ won: 65% 🚀 kết quả nói đã bước vào quỹ đạo rồi... chỉ là vấn đề thời gian → bạn được mấy %? Cái này xác suất cao hơn xổ số nhiều haha',
      id: 'Probabilitas 100 miliar won: 65% 🚀 hasilnya bilang sudah di jalur yang benar... cuma soal waktu → kamu dapat berapa %? Ini lebih tinggi probabilitasnya dari lotre wkwk',
    }),
  },
  {
    type: 'Type6',
    emoji: '👑',
    title: L({
      ko: '이미 가고 있는 사람, 100억 확률 90%',
      en: 'Already on the Way — ₩10 Billion Probability 90%',
      ja: 'すでに向かっている人、100億確率90%',
      'zh-CN': '早已在路上的人，100亿概率90%',
      'zh-TW': '早已在路上的人，100億機率90%',
      vi: 'Người đã đang trên đường, xác suất 100 tỷ là 90%',
      id: 'Orang yang Sudah dalam Perjalanan, Probabilitas 100 Miliar 90%',
    }),
    shortDescription: L({
      ko: '솔직히 말하면 이 테스트 결과가 필요 없는 사람입니다. 이미 알고 있으니까요.',
      en: "Honestly, you don't even need this test result. You already know",
      ja: '正直に言うとこのテスト結果が必要ない人です。すでにわかっているから',
      'zh-CN': '老实说，你根本不需要这个测试结果，因为你早就知道了',
      'zh-TW': '老實說，你根本不需要這個測試結果，因為你早就知道了',
      vi: 'Thật lòng thì bạn không cần đến kết quả bài test này. Vì bạn đã biết rồi',
      id: 'Sejujurnya, hasil tes ini tidak diperlukan untuk Anda. Karena Anda sudah tahu',
    }),
    description: L({
      ko: '경제적 자유가 명확한 목표이고 수입과 투자가 다각화돼 있으며 자산 증식이 자동화된 시스템으로 작동하고 있습니다. 100억이 목표가 아니라 이미 가는 길의 중간 지점일 가능성이 높습니다.',
      en: "Financial freedom is a clear goal, income and investments are diversified, and asset growth runs on an automated system. ₩10 billion likely isn't even the destination — it's probably just a midpoint on the road you're already on",
      ja: '経済的自由が明確な目標であり、収入と投資が多角化されており、資産増加が自動化されたシステムとして機能しています。100億ウォンが目標ではなく、すでに進んでいる道の中間地点である可能性が高いです',
      'zh-CN': '财务自由是明确目标，收入和投资都实现多元化，资产增值以自动化系统运作着。100亿很可能不是目标，而只是你已经在走的路上的一个中间点',
      'zh-TW': '財務自由是明確目標，收入和投資都實現多元化，資產增值以自動化系統運作著。100億很可能不是目標，而只是你已經在走的路上的一個中間點',
      vi: 'Tự do tài chính là mục tiêu rõ ràng, thu nhập và đầu tư đã được đa dạng hóa, và việc gia tăng tài sản đang hoạt động như một hệ thống tự động. 100 tỷ won có khả năng không phải là đích đến, mà chỉ là điểm giữa trên con đường bạn đã đang đi',
      id: 'Kebebasan finansial adalah tujuan yang jelas, pendapatan dan investasi sudah terdiversifikasi, dan pertumbuhan aset berjalan seperti sistem otomatis. 100 miliar won kemungkinan besar bukan tujuan akhir, melainkan hanya titik tengah dari jalan yang sudah Anda tempuh',
    }),
    probability: L({
      ko: '90%',
      en: '90%',
      ja: '90%',
      'zh-CN': '90%',
      'zh-TW': '90%',
      vi: '90%',
      id: '90%',
    }),
    sections: [
      section(
        {
          ko: '📊 현재 재정 패턴',
          en: '📊 Current Financial Pattern',
          ja: '📊 現在の財政パターン',
          'zh-CN': '📊 目前的财务模式',
          'zh-TW': '📊 目前的財務模式',
          vi: '📊 Mô hình tài chính hiện tại',
          id: '📊 Pola Finansial Saat Ini',
        },
        {
          ko: '시스템화된 자산 증식 + 복리 풀 가동 + 다수 수입원',
          en: 'Systemized asset growth + compound interest running full throttle + multiple income sources',
          ja: 'システム化された資産増加＋複利フル稼働＋複数の収入源',
          'zh-CN': '系统化的资产增值+复利全速运转+多个收入来源',
          'zh-TW': '系統化的資產增值+複利全速運轉+多個收入來源',
          vi: 'Tăng trưởng tài sản có hệ thống + lãi kép hoạt động tối đa + nhiều nguồn thu nhập',
          id: 'Pertumbuhan aset yang tersistematis + bunga majemuk bekerja penuh + banyak sumber pendapatan',
        }
      ),
      section(
        {
          ko: '🧠 부의 마인드셋 레벨',
          en: '🧠 Wealth Mindset Level',
          ja: '🧠 富のマインドセットレベル',
          'zh-CN': '🧠 财富心态等级',
          'zh-TW': '🧠 財富心態等級',
          vi: '🧠 Cấp độ tư duy làm giàu',
          id: '🧠 Level Pola Pikir Kekayaan',
        },
        {
          ko: 'Lv.6 부의 마스터',
          en: 'Lv.6 Wealth Master',
          ja: 'Lv.6 富のマスター',
          'zh-CN': 'Lv.6 财富大师',
          'zh-TW': 'Lv.6 財富大師',
          vi: 'Lv.6 Bậc thầy làm giàu',
          id: 'Lv.6 Master Kekayaan',
        }
      ),
      section(
        {
          ko: '❓ 나머지 10%는 뭔가요',
          en: '❓ What About the Remaining 10%',
          ja: '❓ 残りの10%は何ですか',
          'zh-CN': '❓ 剩下的10%是什么',
          'zh-TW': '❓ 剩下的10%是什麼',
          vi: '❓ 10% còn lại là gì',
          id: '❓ Sisa 10% Itu Apa',
        },
        {
          ko: '예상치 못한 외부 변수·건강·운. 시스템이 있어도 삶은 변수가 있습니다',
          en: 'Unexpected external variables, health, luck. Even with a system, life still has variables',
          ja: '予期せぬ外部変数・健康・運。システムがあっても人生には変数があります',
          'zh-CN': '意想不到的外部变量、健康、运气。就算有系统，人生也有变数',
          'zh-TW': '意想不到的外部變數、健康、運氣。就算有系統，人生也有變數',
          vi: 'Những biến số bên ngoài không lường được, sức khỏe, may mắn. Dù có hệ thống, cuộc sống vẫn có biến số',
          id: 'Variabel eksternal tak terduga, kesehatan, keberuntungan. Meski ada sistem, hidup tetap punya variabel',
        }
      ),
      section(
        {
          ko: '💬 한 줄 평',
          en: '💬 One-Line Verdict',
          ja: '💬 一言評価',
          'zh-CN': '💬 一句点评',
          'zh-TW': '💬 一句點評',
          vi: '💬 Một câu nhận xét',
          id: '💬 Satu Kalimat Penilaian',
        },
        {
          ko: '"이 결과 보고 \'맞아\' 하거나 \'아직 멀었는데\' 하거나 둘 중 하나일 것입니다. 어느 쪽이든 당신은 알고 있습니다"',
          en: '"Seeing this result, you\'ll either think \'yep, that\'s right\' or \'I\'ve still got a long way to go.\' Either way, you already know"',
          ja: '「この結果を見て『そうだ』と思うか『まだまだだ』と思うか、どちらかでしょう。どちらにしてもあなたはわかっています」',
          'zh-CN': '"看到这个结果，你可能会想\'没错\'，或者\'还差得远呢\'。不管哪一种，你自己都清楚"',
          'zh-TW': '「看到這個結果，你可能會想『沒錯』，或者『還差得遠呢』。不管哪一種，你自己都清楚」',
          vi: '"Xem kết quả này, bạn sẽ nghĩ \'đúng vậy\' hoặc \'còn xa lắm\'. Dù là cách nào, bạn cũng đã biết rồi"',
          id: '"Melihat hasil ini, Anda mungkin berpikir \'benar juga\' atau \'masih jauh nih\'. Apa pun itu, Anda sudah tahu jawabannya"',
        }
      ),
    ],
    shareMessage: L({
      ko: '100억 부자 확률: 90% 👑 이미 가고 있는 사람이래... 솔직히 이 결과 납득함 → 너는 몇 % 나왔어?',
      en: "₩10 billion probability: 90% 👑 Apparently I'm already on the way... honestly, I agree with this result → What % did you get?",
      ja: '100億ウォン確率：90% 👑 すでに向かっている人だって…正直この結果、納得 → あなたは何%だった？',
      'zh-CN': '100亿概率：90% 👑 说我是早已在路上的人……老实说这个结果我认了 → 你测出多少%？',
      'zh-TW': '100億機率：90% 👑 說我是早已在路上的人……老實說這個結果我認了 → 你測出多少%？',
      vi: 'Xác suất 100 tỷ won: 90% 👑 nói tôi là người đã đang trên đường rồi... thật lòng thì kết quả này tôi thấy đúng → bạn được mấy %?',
      id: 'Probabilitas 100 miliar won: 90% 👑 katanya saya sudah dalam perjalanan... jujur saja saya setuju dengan hasil ini → kamu dapat berapa %?',
    }),
  },
];
