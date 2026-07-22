/** 나의 '벼락거지' 방어 지수 — 12문항 4지선다, A=0 B=1 C=2 D=3, 총점 0~36 → Type1~6 */

type Locale = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';
type ML = Record<Locale, string>;

function L(m: ML): Record<string, string> {
  return m;
}

function opt(m: ML, score: number): { text: Record<string, string>; score: number } {
  return { text: L(m), score };
}

function section(titleM: ML, contentM: ML): Phase3SuddenPoorDefenseIndexResultSection {
  return { title: L(titleM), content: L(contentM) };
}

export interface Phase3SuddenPoorDefenseIndexQuestion {
  id: number;
  question: Record<string, string>;
  options: { text: Record<string, string>; score: number }[];
}

export interface Phase3SuddenPoorDefenseIndexResultSection {
  title: Record<string, string>;
  content: Record<string, string>;
}

export interface Phase3SuddenPoorDefenseIndexResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  defenseScore: Record<string, string>;
  riskLevel: Record<string, string>;
  sections: Phase3SuddenPoorDefenseIndexResultSection[];
  shareMessage: Record<string, string>;
}

export function calculatePhase3SuddenPoorDefenseIndexResult(answers: number[]): string {
  const total = answers.reduce((sum, s) => sum + (s ?? 0), 0);
  if (total <= 5) return 'Type1';
  if (total <= 11) return 'Type2';
  if (total <= 19) return 'Type3';
  if (total <= 27) return 'Type4';
  if (total <= 33) return 'Type5';
  return 'Type6';
}

export const phase3SuddenPoorDefenseIndexQuestions: Phase3SuddenPoorDefenseIndexQuestion[] = [
  {
    id: 1,
    question: L({
      ko: '"인플레이션"이 내 삶에 어떤 영향을 주는지 알고 있나요?',
      en: 'Do you know how "inflation" affects your life?',
      ja: '「インフレ」が自分の生活にどんな影響を与えるか知っていますか？',
      'zh-CN': '你知道"通货膨胀"对你的生活有什么影响吗？',
      'zh-TW': '你知道「通貨膨脹」對你的生活有什麼影響嗎？',
      vi: 'Bạn có biết "lạm phát" ảnh hưởng đến cuộc sống của mình như thế nào không?',
      id: 'Apakah Anda tahu bagaimana "inflasi" memengaruhi hidup Anda?',
    }),
    options: [
      opt(
        {
          ko: '물가가 오른다는 건 아는데 내 자산과 연결해서 생각해본 적 없다',
          en: "I know prices go up, but I've never connected it to my own assets",
          ja: '物価が上がることは知っているが、自分の資産と結びつけて考えたことはない',
          'zh-CN': '我知道物价会上涨，但从没把它和我的资产联系起来想过',
          'zh-TW': '我知道物價會上漲，但從沒把它和我的資產聯繫起來想過',
          vi: 'Tôi biết giá cả tăng nhưng chưa từng liên hệ điều đó với tài sản của mình',
          id: 'Saya tahu harga naik, tapi belum pernah menghubungkannya dengan aset saya sendiri',
        },
        0
      ),
      opt(
        {
          ko: '물가가 오르면 현금 가치가 줄어든다는 건 안다. 그래도 크게 신경 쓰지 않는다',
          en: "I know that when prices rise, cash value decreases. Still, I don't worry about it much",
          ja: '物価が上がると現金の価値が減ることは知っている。それでも大して気にしていない',
          'zh-CN': '我知道物价上涨会让现金贬值，但我并不太在意',
          'zh-TW': '我知道物價上漲會讓現金貶值，但我並不太在意',
          vi: 'Tôi biết khi giá cả tăng, giá trị tiền mặt giảm. Nhưng tôi không quá lo lắng về điều đó',
          id: 'Saya tahu saat harga naik, nilai uang tunai menurun. Tapi saya tidak terlalu memikirkannya',
        },
        1
      ),
      opt(
        {
          ko: '인플레이션율과 내 수익률을 비교해서 실질 수익을 따진다',
          en: 'I compare the inflation rate with my rate of return to calculate real returns',
          ja: 'インフレ率と自分の収益率を比較して実質利益を計算している',
          'zh-CN': '我会比较通胀率和我的收益率，计算实际收益',
          'zh-TW': '我會比較通膨率和我的收益率，計算實際收益',
          vi: 'Tôi so sánh tỷ lệ lạm phát với tỷ suất lợi nhuận của mình để tính lợi nhuận thực tế',
          id: 'Saya membandingkan tingkat inflasi dengan tingkat pengembalian saya untuk menghitung keuntungan riil',
        },
        2
      ),
      opt(
        {
          ko: '인플레이션 헤지 자산(부동산·주식·금·TIPS 등)을 의식적으로 포트폴리오에 담는다',
          en: 'I consciously include inflation-hedge assets (real estate, stocks, gold, TIPS, etc.) in my portfolio',
          ja: 'インフレヘッジ資産（不動産・株式・金・TIPSなど）を意識的にポートフォリオに組み込んでいる',
          'zh-CN': '我会有意识地在投资组合中配置通胀对冲资产（房地产、股票、黄金、抗通胀债券等）',
          'zh-TW': '我會有意識地在投資組合中配置通膨避險資產（房地產、股票、黃金、抗通膨債券等）',
          vi: 'Tôi có ý thức đưa các tài sản chống lạm phát (bất động sản, cổ phiếu, vàng, TIPS, v.v.) vào danh mục đầu tư',
          id: 'Saya secara sadar memasukkan aset lindung inflasi (properti, saham, emas, TIPS, dll.) ke dalam portofolio saya',
        },
        3
      ),
    ],
  },
  {
    id: 2,
    question: L({
      ko: '현재 내 자산의 현금 비중은?',
      en: 'What percentage of your current assets is cash?',
      ja: '現在、自分の資産のうち現金の比重は？',
      'zh-CN': '你目前资产中现金的比例是多少？',
      'zh-TW': '你目前資產中現金的比例是多少？',
      vi: 'Tỷ trọng tiền mặt trong tài sản hiện tại của bạn là bao nhiêu?',
      id: 'Berapa persentase uang tunai dalam aset Anda saat ini?',
    }),
    options: [
      opt(
        {
          ko: '거의 전부 현금·예금이다. 가장 안전하다고 생각한다',
          en: "Almost all cash and savings. I think it's the safest option",
          ja: 'ほとんど全部が現金・預金だ。最も安全だと思う',
          'zh-CN': '几乎全部是现金和存款。我觉得这样最安全',
          'zh-TW': '幾乎全部是現金和存款。我覺得這樣最安全',
          vi: 'Gần như toàn bộ là tiền mặt và tiền gửi. Tôi nghĩ đó là an toàn nhất',
          id: 'Hampir semuanya berupa uang tunai dan tabungan. Saya pikir itu paling aman',
        },
        0
      ),
      opt(
        {
          ko: '대부분 현금이고 일부만 다른 곳에 있다',
          en: 'Mostly cash, with only a small portion elsewhere',
          ja: '大部分が現金で、一部だけ他のところにある',
          'zh-CN': '大部分是现金，只有一小部分放在其他地方',
          'zh-TW': '大部分是現金，只有一小部分放在其他地方',
          vi: 'Đa số là tiền mặt, chỉ một phần nhỏ ở nơi khác',
          id: 'Sebagian besar tunai, hanya sebagian kecil di tempat lain',
        },
        1
      ),
      opt(
        {
          ko: '현금과 투자 자산이 어느 정도 분산돼 있다',
          en: 'Cash and investment assets are reasonably diversified',
          ja: '現金と投資資産がある程度分散されている',
          'zh-CN': '现金和投资资产有一定程度的分散',
          'zh-TW': '現金和投資資產有一定程度的分散',
          vi: 'Tiền mặt và tài sản đầu tư đã được phân bổ ở một mức độ nào đó',
          id: 'Uang tunai dan aset investasi sudah cukup terdiversifikasi',
        },
        2
      ),
      opt(
        {
          ko: '현금은 생활비 3~6개월치만 두고 나머지는 자산에 투자한다',
          en: 'I keep only 3-6 months of living expenses in cash and invest the rest',
          ja: '現金は生活費3〜6か月分だけ置いて、残りは資産に投資している',
          'zh-CN': '现金只保留3~6个月的生活费，其余全部用于投资',
          'zh-TW': '現金只保留3~6個月的生活費，其餘全部用於投資',
          vi: 'Tôi chỉ giữ tiền mặt bằng 3-6 tháng chi phí sinh hoạt, còn lại đầu tư vào tài sản',
          id: 'Saya hanya menyimpan uang tunai untuk 3-6 bulan biaya hidup, sisanya diinvestasikan',
        },
        3
      ),
    ],
  },
  {
    id: 3,
    question: L({
      ko: '금리가 오르면 내 생활에 어떤 영향이 오는지 알고 있나요?',
      en: 'Do you know how rising interest rates affect your life?',
      ja: '金利が上がると自分の生活にどんな影響が来るか知っていますか？',
      'zh-CN': '你知道利率上升会对你的生活产生什么影响吗？',
      'zh-TW': '你知道利率上升會對你的生活產生什麼影響嗎？',
      vi: 'Bạn có biết lãi suất tăng sẽ ảnh hưởng đến cuộc sống của mình như thế nào không?',
      id: 'Apakah Anda tahu bagaimana kenaikan suku bunga memengaruhi hidup Anda?',
    }),
    options: [
      opt(
        {
          ko: '잘 모르겠다. 뉴스에서 듣긴 하는데 나랑 상관없는 이야기 같다',
          en: "Not really. I hear about it on the news, but it feels unrelated to me",
          ja: 'よく分からない。ニュースで聞くけど自分とは関係ない話のようだ',
          'zh-CN': '不太清楚。新闻里会听到，但感觉跟我没什么关系',
          'zh-TW': '不太清楚。新聞裡會聽到，但感覺跟我沒什麼關係',
          vi: 'Tôi không rõ lắm. Có nghe trên tin tức nhưng cảm thấy không liên quan đến mình',
          id: 'Tidak begitu tahu. Saya dengar di berita, tapi rasanya tidak berkaitan dengan saya',
        },
        0
      ),
      opt(
        {
          ko: '대출 이자가 올라간다는 건 안다',
          en: 'I know that loan interest rates go up',
          ja: 'ローンの利息が上がることは知っている',
          'zh-CN': '我知道贷款利息会上升',
          'zh-TW': '我知道貸款利息會上升',
          vi: 'Tôi biết lãi suất vay sẽ tăng lên',
          id: 'Saya tahu bunga pinjaman akan naik',
        },
        1
      ),
      opt(
        {
          ko: '금리↑→채권 가격↓, 대출 부담↑, 성장주 하락 등 연쇄 영향을 이해하고 있다',
          en: 'I understand the chain reaction: rates↑→bond prices↓, loan burden↑, growth stocks fall, etc.',
          ja: '金利↑→債券価格↓、ローン負担↑、成長株の下落など連鎖的な影響を理解している',
          'zh-CN': '我理解利率上升→债券价格下跌、贷款负担加重、成长股下跌等连锁反应',
          'zh-TW': '我理解利率上升→債券價格下跌、貸款負擔加重、成長股下跌等連鎖反應',
          vi: 'Tôi hiểu chuỗi phản ứng: lãi suất tăng→giá trái phiếu giảm, gánh nặng vay tăng, cổ phiếu tăng trưởng giảm, v.v.',
          id: 'Saya memahami efek berantai: suku bunga naik→harga obligasi turun, beban pinjaman naik, saham pertumbuhan turun, dll.',
        },
        2
      ),
      opt(
        {
          ko: '금리 변동을 예측하면서 포트폴리오를 선제적으로 조정한다',
          en: 'I proactively adjust my portfolio by anticipating interest rate movements',
          ja: '金利変動を予測しながらポートフォリオを先制的に調整している',
          'zh-CN': '我会预测利率变动，提前调整投资组合',
          'zh-TW': '我會預測利率變動，提前調整投資組合',
          vi: 'Tôi dự đoán biến động lãi suất và chủ động điều chỉnh danh mục đầu tư',
          id: 'Saya memperkirakan perubahan suku bunga dan menyesuaikan portofolio secara proaktif',
        },
        3
      ),
    ],
  },
  {
    id: 4,
    question: L({
      ko: '지난 5년간 내 자산이 물가 상승률보다 빠르게 늘었나요?',
      en: 'Over the past 5 years, has your wealth grown faster than inflation?',
      ja: '過去5年間、自分の資産は物価上昇率より速く増えましたか？',
      'zh-CN': '过去5年里，你的资产增长速度是否超过了物价上涨率？',
      'zh-TW': '過去5年裡，你的資產增長速度是否超過了物價上漲率？',
      vi: 'Trong 5 năm qua, tài sản của bạn có tăng nhanh hơn tỷ lệ lạm phát không?',
      id: 'Selama 5 tahun terakhir, apakah aset Anda bertumbuh lebih cepat dari inflasi?',
    }),
    options: [
      opt(
        {
          ko: '계산해본 적 없다. 그냥 통장 잔고가 늘면 된다고 생각했다',
          en: "I've never calculated it. I just thought it was fine as long as my bank balance grew",
          ja: '計算したことがない。ただ口座残高が増えればいいと思っていた',
          'zh-CN': '从没算过。只觉得账户余额增加就行了',
          'zh-TW': '從沒算過。只覺得帳戶餘額增加就好了',
          vi: 'Tôi chưa từng tính toán. Chỉ nghĩ rằng số dư tài khoản tăng là được',
          id: 'Saya belum pernah menghitungnya. Saya hanya berpikir asalkan saldo rekening bertambah, itu sudah cukup',
        },
        0
      ),
      opt(
        {
          ko: '잘 모르겠다. 아마 비슷하거나 못 따라갔을 것 같다',
          en: 'Not sure. Probably about the same or falling behind',
          ja: 'よく分からない。おそらく同じくらいか追いつけなかったと思う',
          'zh-CN': '不太清楚。可能差不多，或者没能跟上',
          'zh-TW': '不太清楚。可能差不多，或者沒能跟上',
          vi: 'Không rõ lắm. Có thể tương đương hoặc không theo kịp',
          id: 'Tidak begitu yakin. Mungkin kira-kira sama atau malah tertinggal',
        },
        1
      ),
      opt(
        {
          ko: '어느 정도 따라갔다. 저축과 소규모 투자로 유지는 됐다',
          en: 'It kept pace to some extent, maintained through savings and small investments',
          ja: 'ある程度は追いついた。貯蓄と小規模投資で維持できた',
          'zh-CN': '大致跟上了。靠储蓄和小规模投资维持住了',
          'zh-TW': '大致跟上了。靠儲蓄和小規模投資維持住了',
          vi: 'Đã theo kịp ở một mức độ nào đó, duy trì được nhờ tiết kiệm và đầu tư nhỏ',
          id: 'Cukup mengikuti, dipertahankan lewat tabungan dan investasi kecil',
        },
        2
      ),
      opt(
        {
          ko: '물가 상승률을 웃돌았다. 자산 증가율이 더 높다',
          en: 'It outpaced inflation. My asset growth rate is higher',
          ja: '物価上昇率を上回った。資産の増加率がより高い',
          'zh-CN': '超过了物价上涨率。资产增长率更高',
          'zh-TW': '超過了物價上漲率。資產增長率更高',
          vi: 'Đã vượt tỷ lệ lạm phát. Tốc độ tăng tài sản cao hơn',
          id: 'Melampaui tingkat inflasi. Tingkat pertumbuhan aset saya lebih tinggi',
        },
        3
      ),
    ],
  },
  {
    id: 5,
    question: L({
      ko: '나는 현재 부동산·주식·채권·금 중 몇 가지 자산에 노출돼 있나요?',
      en: 'How many of these asset types (real estate, stocks, bonds, gold) are you currently exposed to?',
      ja: '現在、不動産・株式・債券・金のうち何種類の資産に触れていますか？',
      'zh-CN': '你目前在房地产、股票、债券、黄金中接触了几种资产？',
      'zh-TW': '你目前在房地產、股票、債券、黃金中接觸了幾種資產？',
      vi: 'Hiện tại bạn đang nắm giữ bao nhiêu loại tài sản trong số bất động sản, cổ phiếu, trái phiếu, vàng?',
      id: 'Berapa banyak jenis aset (properti, saham, obligasi, emas) yang saat ini Anda miliki?',
    }),
    options: [
      opt(
        {
          ko: '없다. 투자 자산이 전혀 없다',
          en: 'None. I have no investment assets at all',
          ja: 'ない。投資資産が全くない',
          'zh-CN': '没有。完全没有投资资产',
          'zh-TW': '沒有。完全沒有投資資產',
          vi: 'Không có. Tôi hoàn toàn không có tài sản đầu tư',
          id: 'Tidak ada. Saya sama sekali tidak memiliki aset investasi',
        },
        0
      ),
      opt(
        {
          ko: '한 가지. 청약저축이나 예금 정도',
          en: 'Just one. Something like a subscription savings account or a deposit',
          ja: '一種類だけ。住宅積立や預金くらい',
          'zh-CN': '一种。差不多是认购储蓄或存款',
          'zh-TW': '一種。差不多是認購儲蓄或存款',
          vi: 'Một loại. Chỉ như tiết kiệm mua nhà hoặc tiền gửi',
          id: 'Satu jenis. Sekadar tabungan berjangka atau deposito',
        },
        1
      ),
      opt(
        {
          ko: '두 가지 이상. 주식 ETF와 저축 정도는 있다',
          en: 'Two or more. I have things like stock ETFs and savings',
          ja: '二種類以上。株式ETFと貯蓄くらいはある',
          'zh-CN': '两种以上。有股票ETF和储蓄之类的',
          'zh-TW': '兩種以上。有股票ETF和儲蓄之類的',
          vi: 'Hai loại trở lên. Có cổ phiếu ETF và tiết kiệm',
          id: 'Dua jenis atau lebih. Saya punya ETF saham dan tabungan',
        },
        2
      ),
      opt(
        {
          ko: '세 가지 이상. 분산 포트폴리오를 의식적으로 구성하고 있다',
          en: 'Three or more. I consciously build a diversified portfolio',
          ja: '三種類以上。分散ポートフォリオを意識的に構成している',
          'zh-CN': '三种以上。我有意识地构建分散化投资组合',
          'zh-TW': '三種以上。我有意識地構建分散化投資組合',
          vi: 'Ba loại trở lên. Tôi chủ động xây dựng danh mục đầu tư đa dạng',
          id: 'Tiga jenis atau lebih. Saya secara sadar membangun portofolio yang terdiversifikasi',
        },
        3
      ),
    ],
  },
  {
    id: 6,
    question: L({
      ko: '"실질 금리"가 무슨 뜻인지 알고 있나요?',
      en: 'Do you know what "real interest rate" means?',
      ja: '「実質金利」の意味を知っていますか？',
      'zh-CN': '你知道"实际利率"是什么意思吗？',
      'zh-TW': '你知道「實質利率」是什麼意思嗎？',
      vi: 'Bạn có biết "lãi suất thực" nghĩa là gì không?',
      id: 'Apakah Anda tahu apa arti "suku bunga riil"?',
    }),
    options: [
      opt(
        {
          ko: '처음 듣는 개념이다',
          en: "It's a concept I've never heard of",
          ja: '初めて聞く概念だ',
          'zh-CN': '第一次听说这个概念',
          'zh-TW': '第一次聽說這個概念',
          vi: 'Đây là khái niệm tôi mới nghe lần đầu',
          id: 'Ini konsep yang baru pertama kali saya dengar',
        },
        0
      ),
      opt(
        {
          ko: '들어봤지만 정확히 설명하긴 어렵다',
          en: "I've heard of it, but I can't explain it accurately",
          ja: '聞いたことはあるが正確に説明するのは難しい',
          'zh-CN': '听说过，但很难准确解释',
          'zh-TW': '聽說過，但很難準確解釋',
          vi: 'Tôi đã nghe nhưng khó giải thích chính xác',
          id: 'Saya pernah dengar tapi sulit menjelaskannya dengan tepat',
        },
        1
      ),
      opt(
        {
          ko: '명목 금리에서 인플레이션율을 뺀 것이라는 건 안다',
          en: "I know it's the nominal interest rate minus the inflation rate",
          ja: '名目金利からインフレ率を引いたものだということは知っている',
          'zh-CN': '我知道它是名义利率减去通胀率',
          'zh-TW': '我知道它是名目利率減去通膨率',
          vi: 'Tôi biết đó là lãi suất danh nghĩa trừ đi tỷ lệ lạm phát',
          id: 'Saya tahu itu adalah suku bunga nominal dikurangi tingkat inflasi',
        },
        2
      ),
      opt(
        {
          ko: '실질 금리가 마이너스인 환경에서는 현금 보유 자체가 손실이라는 것을 이해하고 자산 배분에 반영한다',
          en: 'I understand that holding cash itself is a loss when real interest rates are negative, and I reflect this in my asset allocation',
          ja: '実質金利がマイナスの環境では現金を持つこと自体が損失だと理解し、資産配分に反映している',
          'zh-CN': '我理解在实际利率为负的环境下，持有现金本身就是一种损失，并将其反映在资产配置中',
          'zh-TW': '我理解在實質利率為負的環境下，持有現金本身就是一種損失，並將其反映在資產配置中',
          vi: 'Tôi hiểu rằng trong môi trường lãi suất thực âm, việc giữ tiền mặt chính là một khoản lỗ, và tôi phản ánh điều đó vào phân bổ tài sản',
          id: 'Saya memahami bahwa memegang uang tunai adalah kerugian saat suku bunga riil negatif, dan saya menerapkannya dalam alokasi aset',
        },
        3
      ),
    ],
  },
  {
    id: 7,
    question: L({
      ko: '내 월급 외 자산에서 발생하는 수입(배당·이자·임대 등)이 있나요?',
      en: 'Do you have income from assets other than your salary (dividends, interest, rent, etc.)?',
      ja: '給料以外に資産から発生する収入（配当・利息・賃貸など）はありますか？',
      'zh-CN': '除了工资，你有来自资产的其他收入吗（分红、利息、租金等）？',
      'zh-TW': '除了薪水，你有來自資產的其他收入嗎（股利、利息、租金等）？',
      vi: 'Bạn có thu nhập từ tài sản ngoài lương không (cổ tức, lãi suất, tiền thuê, v.v.)?',
      id: 'Apakah Anda memiliki pendapatan dari aset selain gaji (dividen, bunga, sewa, dll.)?',
    }),
    options: [
      opt(
        {
          ko: '전혀 없다. 월급이 유일한 수입이다',
          en: 'None at all. My salary is my only income',
          ja: '全くない。給料が唯一の収入だ',
          'zh-CN': '完全没有。工资是唯一的收入',
          'zh-TW': '完全沒有。薪水是唯一的收入',
          vi: 'Hoàn toàn không có. Lương là nguồn thu nhập duy nhất',
          id: 'Tidak ada sama sekali. Gaji adalah satu-satunya pendapatan saya',
        },
        0
      ),
      opt(
        {
          ko: '예금 이자 정도. 미미한 수준이다',
          en: 'Just deposit interest. A negligible amount',
          ja: '預金の利息くらい。ごく微々たるものだ',
          'zh-CN': '差不多只有存款利息，金额微不足道',
          'zh-TW': '差不多只有存款利息，金額微不足道',
          vi: 'Chỉ có lãi tiền gửi. Ở mức không đáng kể',
          id: 'Sekadar bunga deposito. Jumlahnya tidak signifikan',
        },
        1
      ),
      opt(
        {
          ko: '배당·이자 수입이 조금씩 생기고 있다',
          en: "I'm slowly starting to earn dividend and interest income",
          ja: '配当・利息収入が少しずつ生まれている',
          'zh-CN': '开始有一些分红和利息收入了',
          'zh-TW': '開始有一些股利和利息收入了',
          vi: 'Thu nhập từ cổ tức và lãi suất đang dần xuất hiện',
          id: 'Pendapatan dividen dan bunga mulai muncul sedikit demi sedikit',
        },
        2
      ),
      opt(
        {
          ko: '월급 외 패시브 인컴이 월 일정 금액 이상 들어오고 있다',
          en: 'I receive a certain amount of passive income beyond my salary every month',
          ja: '給料以外にパッシブインカムが毎月一定額以上入ってきている',
          'zh-CN': '除工资外，每月都有稳定金额以上的被动收入',
          'zh-TW': '除薪水外，每月都有穩定金額以上的被動收入',
          vi: 'Ngoài lương, tôi có một khoản thu nhập thụ động cố định hàng tháng',
          id: 'Selain gaji, saya menerima pendapatan pasif dengan jumlah tertentu setiap bulan',
        },
        3
      ),
    ],
  },
  {
    id: 8,
    question: L({
      ko: '환율 변동이 내 자산에 미치는 영향을 고려하고 있나요?',
      en: 'Do you consider how exchange rate fluctuations affect your assets?',
      ja: '為替レートの変動が自分の資産に与える影響を考慮していますか？',
      'zh-CN': '你有考虑汇率变动对你资产的影响吗？',
      'zh-TW': '你有考慮匯率變動對你資產的影響嗎？',
      vi: 'Bạn có xem xét biến động tỷ giá ảnh hưởng đến tài sản của mình không?',
      id: 'Apakah Anda mempertimbangkan bagaimana fluktuasi kurs memengaruhi aset Anda?',
    }),
    options: [
      opt(
        {
          ko: '해외여행 갈 때 말고는 환율을 신경 쓴 적 없다',
          en: 'I never pay attention to exchange rates except when traveling abroad',
          ja: '海外旅行に行く時以外は為替を気にしたことがない',
          'zh-CN': '除了出国旅行，我从没关注过汇率',
          'zh-TW': '除了出國旅行，我從沒關注過匯率',
          vi: 'Tôi chưa từng để ý đến tỷ giá ngoại trừ khi đi du lịch nước ngoài',
          id: 'Saya tidak pernah memperhatikan kurs kecuali saat bepergian ke luar negeri',
        },
        0
      ),
      opt(
        {
          ko: '환율이 내 자산에 영향을 줄 수 있다는 건 알지만 별도로 고려하지 않는다',
          en: "I know exchange rates can affect my assets, but I don't factor it in separately",
          ja: '為替が自分の資産に影響を与えることは知っているが、別途考慮していない',
          'zh-CN': '我知道汇率会影响我的资产，但没有专门考虑过',
          'zh-TW': '我知道匯率會影響我的資產，但沒有專門考慮過',
          vi: 'Tôi biết tỷ giá có thể ảnh hưởng đến tài sản của mình nhưng không xem xét riêng',
          id: 'Saya tahu kurs dapat memengaruhi aset saya, tapi tidak mempertimbangkannya secara khusus',
        },
        1
      ),
      opt(
        {
          ko: '달러 ETF나 해외 주식으로 환율 헤지를 어느 정도 하고 있다',
          en: 'I hedge against exchange rate risk to some extent through dollar ETFs or overseas stocks',
          ja: 'ドルETFや海外株式で為替ヘッジをある程度している',
          'zh-CN': '我通过美元ETF或海外股票在一定程度上对冲汇率风险',
          'zh-TW': '我通過美元ETF或海外股票在一定程度上對沖匯率風險',
          vi: 'Tôi phần nào phòng ngừa rủi ro tỷ giá thông qua ETF đô la hoặc cổ phiếu nước ngoài',
          id: 'Saya melakukan lindung nilai kurs sampai batas tertentu melalui ETF dolar atau saham luar negeri',
        },
        2
      ),
      opt(
        {
          ko: '원화 자산과 달러 자산을 의식적으로 분산해서 환리스크를 관리한다',
          en: 'I consciously diversify between won-based and dollar-based assets to manage currency risk',
          ja: 'ウォン資産とドル資産を意識的に分散して為替リスクを管理している',
          'zh-CN': '我有意识地分散韩元资产和美元资产来管理汇率风险',
          'zh-TW': '我有意識地分散韓元資產和美元資產來管理匯率風險',
          vi: 'Tôi chủ động phân bổ giữa tài sản won và tài sản đô la để quản lý rủi ro tỷ giá',
          id: 'Saya secara sadar mendiversifikasi aset won dan dolar untuk mengelola risiko kurs',
        },
        3
      ),
    ],
  },
  {
    id: 9,
    question: L({
      ko: '내가 보유한 자산의 구성을 지금 바로 말할 수 있나요?',
      en: 'Can you state the composition of your assets right now?',
      ja: '自分が持っている資産の構成を今すぐ言えますか？',
      'zh-CN': '你现在能立刻说出自己资产的构成吗？',
      'zh-TW': '你現在能立刻說出自己資產的構成嗎？',
      vi: 'Bạn có thể nói ngay bây giờ về cơ cấu tài sản của mình không?',
      id: 'Bisakah Anda menyebutkan komposisi aset Anda sekarang juga?',
    }),
    options: [
      opt(
        {
          ko: '정확히 모른다. 통장에 얼마 있는지도 가끔 확인한다',
          en: "I don't know exactly. I only check my bank balance occasionally",
          ja: '正確には分からない。口座にいくらあるかも時々確認するだけだ',
          'zh-CN': '不太清楚。连账户里有多少钱都是偶尔才查一下',
          'zh-TW': '不太清楚。連帳戶裡有多少錢都是偶爾才查一下',
          vi: 'Tôi không biết chính xác. Thậm chí số dư tài khoản cũng chỉ kiểm tra thỉnh thoảng',
          id: 'Saya tidak tahu dengan pasti. Saldo rekening pun hanya sesekali saya cek',
        },
        0
      ),
      opt(
        {
          ko: '대략은 안다. 예금 얼마, 기타 얼마 정도',
          en: 'I know roughly. Something like this much in savings, this much in other things',
          ja: '大まかには分かる。預金いくら、その他いくらくらい',
          'zh-CN': '大致知道。存款多少，其他多少',
          'zh-TW': '大致知道。存款多少，其他多少',
          vi: 'Tôi biết đại khái. Tiền gửi khoảng bao nhiêu, còn lại khoảng bao nhiêu',
          id: 'Saya tahu secara garis besar. Sekitar sekian di tabungan, sekian di lainnya',
        },
        1
      ),
      opt(
        {
          ko: '자산 종류별 금액과 비중을 알고 있다',
          en: 'I know the amount and proportion of each asset type',
          ja: '資産種類ごとの金額と比重を知っている',
          'zh-CN': '我知道各类资产的金额和比例',
          'zh-TW': '我知道各類資產的金額和比例',
          vi: 'Tôi biết số tiền và tỷ trọng của từng loại tài sản',
          id: 'Saya tahu jumlah dan proporsi setiap jenis aset',
        },
        2
      ),
      opt(
        {
          ko: '자산 배분 비율과 수익률을 주기적으로 추적하고 리밸런싱한다',
          en: 'I periodically track my asset allocation ratio and returns, and rebalance accordingly',
          ja: '資産配分比率と収益率を定期的に追跡し、リバランスしている',
          'zh-CN': '我会定期追踪资产配置比例和收益率，并进行再平衡',
          'zh-TW': '我會定期追蹤資產配置比例和收益率，並進行再平衡',
          vi: 'Tôi theo dõi định kỳ tỷ lệ phân bổ tài sản và lợi suất, đồng thời tái cân bằng',
          id: 'Saya secara berkala melacak rasio alokasi aset dan tingkat pengembalian, lalu melakukan rebalancing',
        },
        3
      ),
    ],
  },
  {
    id: 10,
    question: L({
      ko: '주변 부동산 가격이 크게 올랐을 때 내 반응은?',
      en: 'When property prices around you rose sharply, how did you react?',
      ja: '周辺の不動産価格が大きく上がった時、自分の反応は？',
      'zh-CN': '当周边房价大幅上涨时，你的反应是？',
      'zh-TW': '當周邊房價大幅上漲時，你的反應是？',
      vi: 'Khi giá bất động sản xung quanh tăng mạnh, phản ứng của bạn là gì?',
      id: 'Saat harga properti di sekitar Anda naik tajam, bagaimana reaksi Anda?',
    }),
    options: [
      opt(
        {
          ko: '박탈감을 느꼈지만 어쩔 수 없다고 생각했다',
          en: 'I felt a sense of deprivation but thought there was nothing I could do',
          ja: '剥奪感を感じたが仕方ないと思った',
          'zh-CN': '感到被剥夺感，但觉得无可奈何',
          'zh-TW': '感到被剝奪感，但覺得無可奈何',
          vi: 'Tôi cảm thấy hụt hẫng nhưng nghĩ rằng không thể làm gì khác',
          id: 'Saya merasa terpuruk tapi berpikir tidak ada yang bisa dilakukan',
        },
        0
      ),
      opt(
        {
          ko: '이제라도 사야 하나 고민했지만 결국 행동하지 않았다',
          en: "I wondered if I should buy even now, but ultimately didn't act",
          ja: '今からでも買うべきか悩んだが結局行動しなかった',
          'zh-CN': '曾纠结是不是该现在买，但最终没有行动',
          'zh-TW': '曾糾結是不是該現在買，但最終沒有行動',
          vi: 'Tôi trăn trở liệu có nên mua ngay bây giờ không nhưng cuối cùng không hành động',
          id: 'Saya bimbang apakah harus membeli sekarang, tapi akhirnya tidak bertindak',
        },
        1
      ),
      opt(
        {
          ko: '내 포트폴리오에서 부동산 관련 자산 비중을 점검했다',
          en: 'I reviewed the real estate-related asset ratio in my portfolio',
          ja: '自分のポートフォリオで不動産関連資産の比重を点検した',
          'zh-CN': '我检查了自己投资组合中房地产相关资产的比例',
          'zh-TW': '我檢查了自己投資組合中房地產相關資產的比例',
          vi: 'Tôi đã kiểm tra tỷ trọng tài sản liên quan đến bất động sản trong danh mục của mình',
          id: 'Saya memeriksa proporsi aset terkait properti dalam portofolio saya',
        },
        2
      ),
      opt(
        {
          ko: '이미 리츠·부동산 ETF 등으로 간접 노출을 해뒀기에 크게 흔들리지 않았다',
          en: "I had already gained indirect exposure through REITs and real estate ETFs, so I wasn't much affected",
          ja: 'すでにREIT・不動産ETFなどで間接的に触れていたので大きく動揺しなかった',
          'zh-CN': '我已经通过房地产信托基金（REITs）、房地产ETF等间接持有了相关资产，所以没有太大波动',
          'zh-TW': '我已經通過不動產投資信託（REITs）、不動產ETF等間接持有了相關資產，所以沒有太大波動',
          vi: 'Tôi đã có sự tiếp xúc gián tiếp qua REITs, ETF bất động sản nên không bị ảnh hưởng nhiều',
          id: 'Saya sudah memiliki eksposur tidak langsung melalui REIT dan ETF properti, jadi tidak terlalu terpengaruh',
        },
        3
      ),
    ],
  },
  {
    id: 11,
    question: L({
      ko: '경제 뉴스·금융 콘텐츠를 얼마나 소비하나요?',
      en: 'How much economic news and financial content do you consume?',
      ja: '経済ニュース・金融コンテンツをどれくらい見ていますか？',
      'zh-CN': '你平时会看多少经济新闻和金融内容？',
      'zh-TW': '你平時會看多少經濟新聞和金融內容？',
      vi: 'Bạn tiêu thụ bao nhiêu tin tức kinh tế và nội dung tài chính?',
      id: 'Berapa banyak berita ekonomi dan konten keuangan yang Anda konsumsi?',
    }),
    options: [
      opt(
        {
          ko: '거의 안 본다. 어려워서 봐도 잘 모르겠다',
          en: "I rarely watch it. It's too difficult, so even when I do, I don't understand",
          ja: 'ほとんど見ない。難しくて見ても良く分からない',
          'zh-CN': '几乎不看。太难了，看了也不太懂',
          'zh-TW': '幾乎不看。太難了，看了也不太懂',
          vi: 'Tôi hầu như không xem. Vì khó nên xem cũng không hiểu rõ',
          id: 'Saya hampir tidak pernah menontonnya. Terlalu sulit, jadi meski ditonton pun saya tidak mengerti',
        },
        0
      ),
      opt(
        {
          ko: '가끔 본다. 이해는 잘 안 되지만 흐름은 파악하려 한다',
          en: "I watch occasionally. I don't understand well, but I try to grasp the general trend",
          ja: '時々見る。理解はよくできないが流れは把握しようとしている',
          'zh-CN': '偶尔会看。虽然不太理解，但会努力把握大致趋势',
          'zh-TW': '偶爾會看。雖然不太理解，但會努力把握大致趨勢',
          vi: 'Tôi xem đôi khi. Không hiểu rõ nhưng cố gắng nắm bắt xu hướng chung',
          id: 'Saya kadang menontonnya. Meski kurang paham, saya coba memahami trennya',
        },
        1
      ),
      opt(
        {
          ko: '정기적으로 본다. 거시경제 흐름과 내 자산을 연결해서 생각한다',
          en: 'I watch regularly. I connect macroeconomic trends with my own assets',
          ja: '定期的に見る。マクロ経済の流れと自分の資産を結びつけて考える',
          'zh-CN': '会定期看。会把宏观经济趋势和我的资产联系起来思考',
          'zh-TW': '會定期看。會把宏觀經濟趨勢和我的資產聯繫起來思考',
          vi: 'Tôi xem thường xuyên. Tôi liên kết xu hướng kinh tế vĩ mô với tài sản của mình',
          id: 'Saya menonton secara teratur. Saya menghubungkan tren makroekonomi dengan aset saya sendiri',
        },
        2
      ),
      opt(
        {
          ko: '깊이 있게 분석한다. 정책 변화가 내 포트폴리오에 미치는 영향을 선제적으로 따진다',
          en: 'I analyze it in depth. I proactively assess how policy changes will affect my portfolio',
          ja: '深く分析している。政策変化が自分のポートフォリオに与える影響を先制的に見極める',
          'zh-CN': '我会深入分析。提前评估政策变化对我投资组合的影响',
          'zh-TW': '我會深入分析。提前評估政策變化對我投資組合的影響',
          vi: 'Tôi phân tích sâu. Tôi chủ động đánh giá tác động của thay đổi chính sách đến danh mục đầu tư của mình',
          id: 'Saya menganalisisnya secara mendalam. Saya secara proaktif menilai dampak perubahan kebijakan pada portofolio saya',
        },
        3
      ),
    ],
  },
  {
    id: 12,
    question: L({
      ko: '"나는 벼락거지가 될 수 있다"는 위기감을 느끼고 있나요?',
      en: 'Do you feel a sense of crisis that "I could become suddenly poor"?',
      ja: '「自分は一夜貧乏になるかもしれない」という危機感を感じていますか？',
      'zh-CN': '你是否感受到"我可能会一夜致贫"的危机感？',
      'zh-TW': '你是否感受到「我可能會一夜致貧」的危機感？',
      vi: 'Bạn có cảm nhận được cảm giác khủng hoảng "tôi có thể trở nên nghèo đột ngột tương đối" không?',
      id: 'Apakah Anda merasakan rasa krisis bahwa "saya bisa menjadi miskin mendadak relatif"?',
    }),
    options: [
      opt(
        {
          ko: '그런 개념을 잘 몰랐다. 이 테스트 보고 처음 들었다',
          en: 'I didn\'t really know that concept. I heard about it for the first time through this test',
          ja: 'そのような概念をよく知らなかった。このテストを見て初めて聞いた',
          'zh-CN': '我不太了解这个概念，是通过这个测试第一次听到的',
          'zh-TW': '我不太了解這個概念，是透過這個測試第一次聽到的',
          vi: 'Tôi không thật sự biết khái niệm đó. Tôi nghe lần đầu qua bài test này',
          id: 'Saya tidak begitu tahu konsep itu. Saya baru pertama kali mendengarnya lewat tes ini',
        },
        0
      ),
      opt(
        {
          ko: '들어봤고 걱정은 되는데 아직 뭘 해야 할지 모르겠다',
          en: "I've heard of it and I'm worried, but I still don't know what to do",
          ja: '聞いたことはあり心配だが、まだ何をすべきか分からない',
          'zh-CN': '听说过，也有些担心，但还不知道该做什么',
          'zh-TW': '聽說過，也有些擔心，但還不知道該做什麼',
          vi: 'Tôi đã nghe và cũng lo lắng nhưng vẫn chưa biết phải làm gì',
          id: 'Saya sudah dengar dan khawatir, tapi masih belum tahu harus melakukan apa',
        },
        1
      ),
      opt(
        {
          ko: '위기감을 느끼고 있고 방어하기 위해 움직이고 있다',
          en: 'I feel the sense of crisis and am taking action to defend against it',
          ja: '危機感を感じており防御するために動いている',
          'zh-CN': '我感受到了危机感，正在采取行动进行防御',
          'zh-TW': '我感受到了危機感，正在採取行動進行防禦',
          vi: 'Tôi cảm nhận được cảm giác khủng hoảng và đang hành động để phòng vệ',
          id: 'Saya merasakan rasa krisis dan sedang bertindak untuk mempertahankan diri',
        },
        2
      ),
      opt(
        {
          ko: '이미 대비하고 있다. 인플레이션과 자산 시장 변동에서 내 자산을 지키는 구조가 있다',
          en: "I'm already prepared. I have a structure in place to protect my assets from inflation and market fluctuations",
          ja: 'すでに備えている。インフレと資産市場の変動から自分の資産を守る構造がある',
          'zh-CN': '我已经在做准备了。我建立了在通胀和资产市场波动中保护自己资产的机制',
          'zh-TW': '我已經在做準備了。我建立了在通膨和資產市場波動中保護自己資產的機制',
          vi: 'Tôi đã chuẩn bị sẵn sàng. Tôi có cơ chế bảo vệ tài sản của mình trước lạm phát và biến động thị trường',
          id: 'Saya sudah bersiap. Saya memiliki struktur untuk melindungi aset saya dari inflasi dan fluktuasi pasar',
        },
        3
      ),
    ],
  },
];

export const phase3SuddenPoorDefenseIndexResults: Phase3SuddenPoorDefenseIndexResult[] = [
  {
    type: 'Type1',
    emoji: '⚠️',
    title: L({
      ko: '벼락거지 직행 레일 위, 방어 지수 0%',
      en: 'On the Express Track to Sudden Poverty, Defense Score 0%',
      ja: '一夜貧乏への直行レールの上、防御指数0%',
      'zh-CN': '站在通往一夜致贫的直达轨道上，防御指数0%',
      'zh-TW': '站在通往一夜致貧的直達軌道上，防禦指數0%',
      vi: 'Đang trên đường ray trực tiếp đến nghèo đột ngột, Chỉ số phòng vệ 0%',
      id: 'Di Jalur Langsung Menuju Kemiskinan Mendadak, Skor Pertahanan 0%',
    }),
    shortDescription: L({
      ko: '지금 이 순간에도 인플레이션이 내 현금 가치를 조용히 갉아먹고 있습니다.',
      en: 'Even at this very moment, inflation is quietly eating away at the value of your cash.',
      ja: '今この瞬間もインフレが自分の現金の価値を静かに削り取っています。',
      'zh-CN': '就在此刻，通货膨胀正在悄悄侵蚀你的现金价值。',
      'zh-TW': '就在此刻，通貨膨脹正在悄悄侵蝕你的現金價值。',
      vi: 'Ngay lúc này, lạm phát đang âm thầm ăn mòn giá trị tiền mặt của bạn.',
      id: 'Bahkan saat ini, inflasi sedang diam-diam menggerogoti nilai uang tunai Anda.',
    }),
    description: L({
      ko: '현금과 예금이 자산의 대부분이고 인플레이션·금리·자산 시장의 작동 방식이 익숙하지 않은 단계입니다. 나쁜 사람이 아닙니다. 학교에서 이런 걸 가르쳐주지 않았습니다. 하지만 지금부터 알아야 합니다.',
      en: "Cash and deposits make up most of your assets, and you're not yet familiar with how inflation, interest rates, and asset markets work. You're not a bad person — school never taught you this. But you need to start learning now.",
      ja: '現金と預金が資産の大部分を占め、インフレ・金利・資産市場の仕組みにまだ慣れていない段階です。悪い人ではありません。学校がこういうことを教えてくれなかったのです。でも今から知っておく必要があります。',
      'zh-CN': '现金和存款占了你资产的大部分，你对通胀、利率和资产市场的运作方式还不太熟悉。你不是坏人，只是学校没教过这些。但从现在起，你需要开始了解了。',
      'zh-TW': '現金和存款佔了你資產的大部分，你對通膨、利率和資產市場的運作方式還不太熟悉。你不是壞人，只是學校沒教過這些。但從現在起，你需要開始了解了。',
      vi: 'Tiền mặt và tiền gửi chiếm phần lớn tài sản của bạn, và bạn chưa quen với cách vận hành của lạm phát, lãi suất và thị trường tài sản. Bạn không phải là người xấu. Trường học chưa từng dạy điều này. Nhưng từ giờ bạn cần phải tìm hiểu.',
      id: 'Uang tunai dan tabungan mendominasi aset Anda, dan Anda belum familiar dengan cara kerja inflasi, suku bunga, dan pasar aset. Anda bukan orang yang buruk — sekolah memang tidak mengajarkan ini. Tapi mulai sekarang Anda perlu memahaminya.',
    }),
    defenseScore: L({
      ko: '0~10%',
      en: '0~10%',
      ja: '0~10%',
      'zh-CN': '0~10%',
      'zh-TW': '0~10%',
      vi: '0~10%',
      id: '0~10%',
    }),
    riskLevel: L({
      ko: '높음',
      en: 'High',
      ja: '高い',
      'zh-CN': '高',
      'zh-TW': '高',
      vi: 'Cao',
      id: 'Tinggi',
    }),
    sections: [
      section(
        {
          ko: '🛡️ 방어 지수',
          en: '🛡️ Defense Score',
          ja: '🛡️ 防御指数',
          'zh-CN': '🛡️ 防御指数',
          'zh-TW': '🛡️ 防禦指數',
          vi: '🛡️ Chỉ số phòng vệ',
          id: '🛡️ Skor Pertahanan',
        },
        {
          ko: 'Lv.1 무방비 상태',
          en: 'Lv.1 Completely Unprotected',
          ja: 'Lv.1 無防備状態',
          'zh-CN': 'Lv.1 毫无防备状态',
          'zh-TW': 'Lv.1 毫無防備狀態',
          vi: 'Lv.1 Trạng thái không phòng vệ',
          id: 'Lv.1 Kondisi Tanpa Perlindungan',
        }
      ),
      section(
        {
          ko: '⚠️ 현재 리스크',
          en: '⚠️ Current Risk',
          ja: '⚠️ 現在のリスク',
          'zh-CN': '⚠️ 当前风险',
          'zh-TW': '⚠️ 目前風險',
          vi: '⚠️ Rủi ro hiện tại',
          id: '⚠️ Risiko Saat Ini',
        },
        {
          ko: '현금 100% 보유 → 인플레이션 기간 실질 자산 감소',
          en: '100% cash holdings → real asset value declines during inflationary periods',
          ja: '現金100%保有→インフレ期間中の実質資産減少',
          'zh-CN': '100%持有现金→通胀期间实际资产减少',
          'zh-TW': '100%持有現金→通膨期間實質資產減少',
          vi: 'Nắm giữ 100% tiền mặt → tài sản thực giảm trong thời kỳ lạm phát',
          id: 'Kepemilikan 100% tunai → aset riil menurun selama periode inflasi',
        }
      ),
      section(
        {
          ko: '✅ 지금 당장 할 수 있는 것',
          en: '✅ What You Can Do Right Now',
          ja: '✅ 今すぐできること',
          'zh-CN': '✅ 现在马上能做的事',
          'zh-TW': '✅ 現在馬上能做的事',
          vi: '✅ Điều bạn có thể làm ngay bây giờ',
          id: '✅ Yang Bisa Dilakukan Sekarang',
        },
        {
          ko: '• "벼락거지"·"인플레이션 헤지"·"실질 금리" 세 단어를 오늘 검색해보기\n• 현금의 일부를 CMA나 파킹통장에 옮겨 수익률 조금이라도 높이기\n• 월 1만원이라도 ETF 자동 투자 설정하기. 지식보다 행동이 먼저',
          en: '• Search today for the three terms "sudden poverty," "inflation hedge," and "real interest rate"\n• Move some of your cash to a CMA or high-yield savings account to earn even a little more interest\n• Set up automatic ETF investing, even just ₩10,000 a month — action comes before knowledge',
          ja: '• 「一夜貧乏」「インフレヘッジ」「実質金利」の3つの言葉を今日検索してみる\n• 現金の一部をCMAやパーキング通帳に移して少しでも利回りを高める\n• 月1万円でもETF自動投資を設定する。知識より行動が先',
          'zh-CN': '• 今天就搜索"一夜致贫""通胀对冲""实际利率"这三个词\n• 把部分现金转入CMA账户或活期理财账户，哪怕多赚一点利息\n• 就算每月只投1万韩元也要设置ETF自动定投。行动比知识更重要',
          'zh-TW': '• 今天就搜尋「一夜致貧」「通膨避險」「實質利率」這三個詞\n• 把部分現金轉入CMA帳戶或活期理財帳戶，哪怕多賺一點利息\n• 就算每月只投1萬韓元也要設定ETF自動定投。行動比知識更重要',
          vi: '• Hôm nay hãy tìm hiểu ba từ khóa "nghèo đột ngột", "chống lạm phát", "lãi suất thực"\n• Chuyển một phần tiền mặt sang tài khoản CMA hoặc tài khoản gửi tạm để tăng lợi suất dù chỉ một chút\n• Thiết lập đầu tư ETF tự động dù chỉ 10.000 won mỗi tháng. Hành động quan trọng hơn kiến thức',
          id: '• Cari hari ini tiga istilah "kemiskinan mendadak", "lindung nilai inflasi", "suku bunga riil"\n• Pindahkan sebagian uang tunai ke rekening CMA atau tabungan berbunga tinggi untuk sedikit menaikkan imbal hasil\n• Atur investasi ETF otomatis meski hanya 10.000 won per bulan. Tindakan lebih penting daripada pengetahuan',
        }
      ),
      section(
        {
          ko: '🚨 한 줄 경고',
          en: '🚨 One-Line Warning',
          ja: '🚨 一言警告',
          'zh-CN': '🚨 一句警告',
          'zh-TW': '🚨 一句警告',
          vi: '🚨 Lời cảnh báo ngắn',
          id: '🚨 Peringatan Singkat',
        },
        {
          ko: '열심히 모은 돈이 가만히 있어도 줄어드는 세상입니다. 지금 시작하세요',
          en: "This is a world where the money you've worked hard to save shrinks even if you do nothing. Start now.",
          ja: '頑張って貯めたお金が何もしなくても減っていく世の中です。今すぐ始めましょう',
          'zh-CN': '这是一个即使什么都不做，辛苦攒下的钱也会缩水的世界。现在就开始吧',
          'zh-TW': '這是一個即使什麼都不做，辛苦存下的錢也會縮水的世界。現在就開始吧',
          vi: 'Đây là thế giới mà số tiền bạn chăm chỉ tích lũy cũng sẽ giảm dần dù không làm gì. Hãy bắt đầu ngay bây giờ',
          id: 'Ini dunia di mana uang yang Anda kumpulkan dengan keras pun akan menyusut meski Anda diam saja. Mulailah sekarang',
        }
      ),
    ],
    shareMessage: L({
      ko: '벼락거지 방어 지수: 0% ⚠️ 현금만 갖고 있다가 상대적 거지 되는 코스 탑승 중... 오늘 당장 ETF 하나 알아봐야겠다 → 너는 몇 % 방어하고 있어?',
      en: "Sudden Poverty Defense Score: 0% ⚠️ Holding only cash and riding straight into relative poverty... I need to look into an ETF today → What's your defense %?",
      ja: '一夜貧乏防御指数：0% ⚠️ 現金だけ持ってて相対的貧乏になるコースに乗ってる...今日すぐETFひとつ調べなきゃ → あなたは何%防御してる？',
      'zh-CN': '一夜致贫防御指数：0% ⚠️ 只拿着现金，正在通往相对贫穷的路上...今天必须去了解一下ETF了 → 你的防御指数是多少%？',
      'zh-TW': '一夜致貧防禦指數：0% ⚠️ 只拿著現金，正走在通往相對貧窮的路上...今天必須去了解一下ETF了 → 你的防禦指數是多少%？',
      vi: 'Chỉ số phòng vệ nghèo đột ngột: 0% ⚠️ Chỉ giữ tiền mặt và đang trên đường trở nên nghèo tương đối... hôm nay phải tìm hiểu một quỹ ETF ngay → Bạn đang phòng vệ được bao nhiêu %?',
      id: 'Skor Pertahanan Kemiskinan Mendadak: 0% ⚠️ Cuma pegang uang tunai dan menuju kemiskinan relatif... hari ini harus cari tahu soal ETF → Berapa % pertahananmu?',
    }),
  },
  {
    type: 'Type2',
    emoji: '😰',
    title: L({
      ko: '위기는 감지했지만 행동이 없는, 방어 지수 15%',
      en: "Sensed the Crisis But Haven't Acted, Defense Score 15%",
      ja: '危機は察知したが行動がない、防御指数15%',
      'zh-CN': '察觉到危机却没有行动，防御指数15%',
      'zh-TW': '察覺到危機卻沒有行動，防禦指數15%',
      vi: 'Nhận ra khủng hoảng nhưng chưa hành động, Chỉ số phòng vệ 15%',
      id: 'Menyadari Krisis Tapi Belum Bertindak, Skor Pertahanan 15%',
    }),
    shortDescription: L({
      ko: '벼락거지라는 말을 들어봤고 걱정도 됩니다. 근데 아직 뭘 해야 할지 모르겠습니다.',
      en: 'You\'ve heard the term "sudden poverty" and it worries you. But you still don\'t know what to do about it.',
      ja: '一夜貧乏という言葉を聞いたことがあり心配です。でもまだ何をすべきか分かりません。',
      'zh-CN': '你听说过"一夜致贫"这个词，也会为此担心。但还不知道该做什么。',
      'zh-TW': '你聽說過「一夜致貧」這個詞，也會為此擔心。但還不知道該做什麼。',
      vi: 'Bạn đã nghe đến từ "nghèo đột ngột" và cũng cảm thấy lo lắng. Nhưng vẫn chưa biết phải làm gì.',
      id: 'Anda pernah dengar istilah "kemiskinan mendadak" dan merasa khawatir. Tapi masih belum tahu harus melakukan apa.',
    }),
    description: L({
      ko: '인플레이션과 자산 시장에 대한 인식은 생겼지만 실제 행동으로 연결되지 않은 단계입니다. 알고 있다는 것이 이미 강점입니다. 이제 한 가지만 실행하면 됩니다.',
      en: "You've developed an awareness of inflation and asset markets, but it hasn't yet translated into action. Simply knowing is already a strength. Now you just need to act on one thing.",
      ja: 'インフレと資産市場についての認識はできたが実際の行動に結びついていない段階です。知っているということ自体がすでに強みです。あとは一つだけ実行すればいいのです。',
      'zh-CN': '你已经对通胀和资产市场有了认知，但还没转化为实际行动。有认知这件事本身就已经是优势。现在只需要付诸一项行动。',
      'zh-TW': '你已經對通膨和資產市場有了認知，但還沒轉化為實際行動。有認知這件事本身就已經是優勢。現在只需要付諸一項行動。',
      vi: 'Bạn đã có nhận thức về lạm phát và thị trường tài sản nhưng chưa chuyển thành hành động thực tế. Việc biết đã là một điểm mạnh. Bây giờ chỉ cần thực hiện một điều.',
      id: 'Anda sudah memiliki kesadaran tentang inflasi dan pasar aset, tapi belum berubah menjadi tindakan nyata. Mengetahui saja sudah menjadi kekuatan. Sekarang Anda hanya perlu menjalankan satu hal.',
    }),
    defenseScore: L({
      ko: '15~25%',
      en: '15~25%',
      ja: '15~25%',
      'zh-CN': '15~25%',
      'zh-TW': '15~25%',
      vi: '15~25%',
      id: '15~25%',
    }),
    riskLevel: L({
      ko: '중간~높음',
      en: 'Medium to High',
      ja: '中〜高い',
      'zh-CN': '中~高',
      'zh-TW': '中~高',
      vi: 'Trung bình đến cao',
      id: 'Sedang hingga Tinggi',
    }),
    sections: [
      section(
        {
          ko: '🛡️ 방어 지수',
          en: '🛡️ Defense Score',
          ja: '🛡️ 防御指数',
          'zh-CN': '🛡️ 防御指数',
          'zh-TW': '🛡️ 防禦指數',
          vi: '🛡️ Chỉ số phòng vệ',
          id: '🛡️ Skor Pertahanan',
        },
        {
          ko: 'Lv.2 인식만 있는 단계',
          en: 'Lv.2 Awareness Only Stage',
          ja: 'Lv.2 認識だけある段階',
          'zh-CN': 'Lv.2 只有认知的阶段',
          'zh-TW': 'Lv.2 只有認知的階段',
          vi: 'Lv.2 Giai đoạn chỉ có nhận thức',
          id: 'Lv.2 Tahap Baru Sadar',
        }
      ),
      section(
        {
          ko: '⚠️ 현재 리스크',
          en: '⚠️ Current Risk',
          ja: '⚠️ 現在のリスク',
          'zh-CN': '⚠️ 当前风险',
          'zh-TW': '⚠️ 目前風險',
          vi: '⚠️ Rủi ro hiện tại',
          id: '⚠️ Risiko Saat Ini',
        },
        {
          ko: '인식과 행동의 갭. 시간이 지날수록 기회비용 증가',
          en: 'The gap between awareness and action. Opportunity cost grows over time',
          ja: '認識と行動のギャップ。時間が経つほど機会費用が増加',
          'zh-CN': '认知与行动之间存在差距。随着时间推移机会成本会增加',
          'zh-TW': '認知與行動之間存在差距。隨著時間推移機會成本會增加',
          vi: 'Khoảng cách giữa nhận thức và hành động. Chi phí cơ hội tăng theo thời gian',
          id: 'Kesenjangan antara kesadaran dan tindakan. Biaya peluang meningkat seiring waktu',
        }
      ),
      section(
        {
          ko: '✅ 지금 당장 할 수 있는 것',
          en: '✅ What You Can Do Right Now',
          ja: '✅ 今すぐできること',
          'zh-CN': '✅ 现在马上能做的事',
          'zh-TW': '✅ 現在馬上能做的事',
          vi: '✅ Điều bạn có thể làm ngay bây giờ',
          id: '✅ Yang Bisa Dilakukan Sekarang',
        },
        {
          ko: '• 예금 일부를 S&P500 또는 코스피 ETF에 월 자동 투자 설정하기\n• 자산 배분 원칙 하나만 정하기. 예: "현금은 6개월 생활비만 유지한다"\n• 경제 유튜브·팟캐스트 하나를 정기 구독하고 일주일에 한 편씩 보기',
          en: '• Set up automatic monthly investing into an S&P 500 or KOSPI ETF using some of your savings\n• Decide on just one asset allocation rule. E.g. "Keep only 6 months of living expenses in cash"\n• Subscribe to one economics YouTube channel or podcast and watch/listen to one episode a week',
          ja: '• 預金の一部をS&P500またはコスピETFに月次自動投資設定する\n• 資産配分の原則を一つだけ決める。例：「現金は生活費6か月分だけ維持する」\n• 経済系YouTube・ポッドキャストを一つ定期購読し、週1本ずつ見る',
          'zh-CN': '• 将部分存款设置为每月自动定投S&P500或韩国综合股价指数ETF\n• 只定一条资产配置原则。例如："现金只保留6个月生活费"\n• 订阅一个经济类YouTube频道或播客，每周看/听一期',
          'zh-TW': '• 將部分存款設定為每月自動定投S&P500或韓國綜合股價指數ETF\n• 只定一條資產配置原則。例如：「現金只保留6個月生活費」\n• 訂閱一個經濟類YouTube頻道或播客，每週看/聽一期',
          vi: '• Thiết lập đầu tư tự động hàng tháng vào ETF S&P500 hoặc KOSPI bằng một phần tiền gửi\n• Chỉ cần đặt ra một nguyên tắc phân bổ tài sản. VD: "Chỉ giữ tiền mặt bằng 6 tháng chi phí sinh hoạt"\n• Đăng ký theo dõi một kênh YouTube hoặc podcast kinh tế và xem/nghe một tập mỗi tuần',
          id: '• Atur investasi otomatis bulanan ke ETF S&P500 atau KOSPI menggunakan sebagian tabungan\n• Tetapkan satu prinsip alokasi aset saja. Contoh: "Simpan uang tunai hanya untuk 6 bulan biaya hidup"\n• Berlangganan satu kanal YouTube atau podcast ekonomi dan tonton/dengarkan satu episode per minggu',
        }
      ),
      section(
        {
          ko: '🚨 한 줄 경고',
          en: '🚨 One-Line Warning',
          ja: '🚨 一言警告',
          'zh-CN': '🚨 一句警告',
          'zh-TW': '🚨 一句警告',
          vi: '🚨 Lời cảnh báo ngắn',
          id: '🚨 Peringatan Singkat',
        },
        {
          ko: '알고만 있는 것과 하고 있는 것의 차이가 10년 후 자산 차이가 됩니다',
          en: 'The gap between just knowing and actually doing becomes a huge difference in your assets 10 years from now',
          ja: '知っているだけとやっていることの差が10年後の資産の差になります',
          'zh-CN': '只是知道和真正去做的差距，会在十年后变成资产上的巨大差距',
          'zh-TW': '只是知道和真正去做的差距，會在十年後變成資產上的巨大差距',
          vi: 'Sự khác biệt giữa chỉ biết và thực sự làm sẽ trở thành khoảng cách tài sản sau 10 năm',
          id: 'Perbedaan antara sekadar tahu dan benar-benar melakukan akan menjadi perbedaan aset 10 tahun ke depan',
        }
      ),
    ],
    shareMessage: L({
      ko: '벼락거지 방어 지수: 15% 😰 위기는 느끼는데 아직 행동이 없는 유형... 알고만 있는 거랑 하고 있는 거랑 10년 후 자산 차이난다는 거 뼈 때림 → 너는 몇 %야?',
      en: "Sudden Poverty Defense Score: 15% 😰 I sense the crisis but haven't acted yet... hits hard that just knowing vs. actually doing makes a huge asset gap in 10 years → What's yours?",
      ja: '一夜貧乏防御指数：15% 😰 危機は感じてるのにまだ行動がないタイプ...知ってるだけとやってることの差が10年後の資産差になるって刺さる → あなたは何%？',
      'zh-CN': '一夜致贫防御指数：15% 😰 感受到了危机但还没行动的类型...只知道和真正去做十年后资产差距巨大这句话太扎心了 → 你是多少%？',
      'zh-TW': '一夜致貧防禦指數：15% 😰 感受到了危機但還沒行動的類型...只知道和真正去做十年後資產差距巨大這句話太扎心了 → 你是多少%？',
      vi: 'Chỉ số phòng vệ nghèo đột ngột: 15% 😰 Cảm nhận được khủng hoảng nhưng vẫn chưa hành động... câu nói chỉ biết và thực sự làm khác biệt tài sản sau 10 năm thật đau lòng → Bạn bao nhiêu %?',
      id: 'Skor Pertahanan Kemiskinan Mendadak: 15% 😰 Tipe yang sadar krisis tapi belum bertindak... kalimat soal beda aset 10 tahun ke depan antara tahu dan bertindak bikin nyess → Berapa % kamu?',
    }),
  },
  {
    type: 'Type3',
    emoji: '🔶',
    title: L({
      ko: '기초는 있는데 구멍이 있는, 방어 지수 35%',
      en: 'Foundation in Place But With Gaps, Defense Score 35%',
      ja: '基礎はあるが穴がある、防御指数35%',
      'zh-CN': '有基础但有漏洞，防御指数35%',
      'zh-TW': '有基礎但有漏洞，防禦指數35%',
      vi: 'Có nền tảng nhưng còn lỗ hổng, Chỉ số phòng vệ 35%',
      id: 'Ada Fondasi Tapi Masih Berlubang, Skor Pertahanan 35%',
    }),
    shortDescription: L({
      ko: '부분적으로는 방어하고 있습니다. 그런데 모르는 사이 새는 구멍이 있을 수 있습니다.',
      en: "You're defending yourself to some extent. But there may be leaks you're not aware of.",
      ja: '部分的には防御しています。でも知らないうちに漏れている穴があるかもしれません。',
      'zh-CN': '你已经在部分防御了。但可能存在你没意识到的漏洞。',
      'zh-TW': '你已經在部分防禦了。但可能存在你沒意識到的漏洞。',
      vi: 'Bạn đang phòng vệ được một phần. Nhưng có thể có những lỗ hổng bạn chưa nhận ra.',
      id: 'Anda sudah mempertahankan diri sebagian. Tapi mungkin ada kebocoran yang tidak Anda sadari.',
    }),
    description: L({
      ko: '저축하고 소규모 투자를 하고 있지만 자산 분산이 충분하지 않거나 인플레이션 헤지 자산이 빠져있거나 경제 흐름과 내 포트폴리오를 연결해서 보는 습관이 아직 없는 단계입니다.',
      en: "You save and make small investments, but your asset diversification isn't sufficient, inflation-hedge assets may be missing, or you haven't yet developed the habit of connecting economic trends with your portfolio.",
      ja: '貯蓄と小規模投資をしているが資産分散が十分でなかったり、インフレヘッジ資産が抜けていたり、経済の流れと自分のポートフォリオを結びつけて見る習慣がまだない段階です。',
      'zh-CN': '你在储蓄和小规模投资，但资产分散不够充分，或缺少通胀对冲资产，或者还没养成把经济趋势和自己投资组合联系起来看的习惯。',
      'zh-TW': '你在儲蓄和小規模投資，但資產分散不夠充分，或缺少通膨避險資產，或者還沒養成把經濟趨勢和自己投資組合聯繫起來看的習慣。',
      vi: 'Bạn đang tiết kiệm và đầu tư nhỏ nhưng việc đa dạng hóa tài sản chưa đủ, thiếu tài sản chống lạm phát, hoặc chưa có thói quen liên kết xu hướng kinh tế với danh mục đầu tư của mình.',
      id: 'Anda menabung dan berinvestasi kecil, tetapi diversifikasi aset belum cukup, aset lindung inflasi mungkin belum ada, atau Anda belum memiliki kebiasaan menghubungkan tren ekonomi dengan portofolio Anda.',
    }),
    defenseScore: L({
      ko: '35~50%',
      en: '35~50%',
      ja: '35~50%',
      'zh-CN': '35~50%',
      'zh-TW': '35~50%',
      vi: '35~50%',
      id: '35~50%',
    }),
    riskLevel: L({
      ko: '중간',
      en: 'Medium',
      ja: '中程度',
      'zh-CN': '中',
      'zh-TW': '中',
      vi: 'Trung bình',
      id: 'Sedang',
    }),
    sections: [
      section(
        {
          ko: '🛡️ 방어 지수',
          en: '🛡️ Defense Score',
          ja: '🛡️ 防御指数',
          'zh-CN': '🛡️ 防御指数',
          'zh-TW': '🛡️ 防禦指數',
          vi: '🛡️ Chỉ số phòng vệ',
          id: '🛡️ Skor Pertahanan',
        },
        {
          ko: 'Lv.3 기초 방어 단계',
          en: 'Lv.3 Basic Defense Stage',
          ja: 'Lv.3 基礎防御段階',
          'zh-CN': 'Lv.3 基础防御阶段',
          'zh-TW': 'Lv.3 基礎防禦階段',
          vi: 'Lv.3 Giai đoạn phòng vệ cơ bản',
          id: 'Lv.3 Tahap Pertahanan Dasar',
        }
      ),
      section(
        {
          ko: '⚠️ 현재 리스크',
          en: '⚠️ Current Risk',
          ja: '⚠️ 現在のリスク',
          'zh-CN': '⚠️ 当前风险',
          'zh-TW': '⚠️ 目前風險',
          vi: '⚠️ Rủi ro hiện tại',
          id: '⚠️ Risiko Saat Ini',
        },
        {
          ko: '자산 분산 부족·환리스크 노출·패시브 인컴 부재',
          en: 'Insufficient asset diversification, exposure to currency risk, lack of passive income',
          ja: '資産分散不足・為替リスク露出・パッシブインカムの不在',
          'zh-CN': '资产分散不足・暴露于汇率风险・缺乏被动收入',
          'zh-TW': '資產分散不足・暴露於匯率風險・缺乏被動收入',
          vi: 'Đa dạng hóa tài sản chưa đủ · phơi nhiễm rủi ro tỷ giá · thiếu thu nhập thụ động',
          id: 'Diversifikasi aset kurang · terekspos risiko kurs · tidak ada pendapatan pasif',
        }
      ),
      section(
        {
          ko: '✅ 지금 당장 할 수 있는 것',
          en: '✅ What You Can Do Right Now',
          ja: '✅ 今すぐできること',
          'zh-CN': '✅ 现在马上能做的事',
          'zh-TW': '✅ 現在馬上能做的事',
          vi: '✅ Điều bạn có thể làm ngay bây giờ',
          id: '✅ Yang Bisa Dilakukan Sekarang',
        },
        {
          ko: '• 현재 자산 구성을 종이에 적어보기. 비중을 눈으로 확인하는 것이 시작\n• 달러 ETF나 해외 주식 ETF로 원화 리스크 일부 분산\n• 배당 ETF 소액 편입으로 패시브 인컴 채널 추가 시작',
          en: '• Write down your current asset composition on paper. Seeing the proportions visually is the first step\n• Diversify some of your won-based risk with dollar ETFs or overseas stock ETFs\n• Start adding a passive income channel by including a small amount of dividend ETFs',
          ja: '• 現在の資産構成を紙に書いてみる。比重を目で確認することが始まり\n• ドルETFや海外株式ETFでウォンリスクを一部分散\n• 配当ETFの少額組み入れでパッシブインカムチャネルの追加を始める',
          'zh-CN': '• 把当前的资产构成写在纸上。用肉眼确认比例是第一步\n• 用美元ETF或海外股票ETF分散部分韩元风险\n• 少量配置分红ETF，开始增加被动收入渠道',
          'zh-TW': '• 把目前的資產構成寫在紙上。用肉眼確認比例是第一步\n• 用美元ETF或海外股票ETF分散部分韓元風險\n• 少量配置股利ETF，開始增加被動收入渠道',
          vi: '• Viết ra cơ cấu tài sản hiện tại trên giấy. Nhìn thấy tỷ trọng bằng mắt là bước khởi đầu\n• Đa dạng hóa một phần rủi ro won bằng ETF đô la hoặc ETF cổ phiếu nước ngoài\n• Bắt đầu thêm kênh thu nhập thụ động bằng cách đưa một lượng nhỏ ETF cổ tức vào danh mục',
          id: '• Tuliskan komposisi aset Anda saat ini di atas kertas. Melihat proporsinya secara visual adalah awal yang baik\n• Diversifikasi sebagian risiko won dengan ETF dolar atau ETF saham luar negeri\n• Mulai menambah saluran pendapatan pasif dengan memasukkan sedikit ETF dividen',
        }
      ),
      section(
        {
          ko: '🔍 한 줄 점검',
          en: '🔍 One-Line Check',
          ja: '🔍 一言チェック',
          'zh-CN': '🔍 一句检查',
          'zh-TW': '🔍 一句檢查',
          vi: '🔍 Kiểm tra ngắn',
          id: '🔍 Pemeriksaan Singkat',
        },
        {
          ko: '포트폴리오에 인플레이션 헤지 자산이 있는지 오늘 확인해보세요',
          en: "Check today whether your portfolio has any inflation-hedge assets",
          ja: 'ポートフォリオにインフレヘッジ資産があるか今日確認してみてください',
          'zh-CN': '今天就确认一下你的投资组合里是否有通胀对冲资产',
          'zh-TW': '今天就確認一下你的投資組合裡是否有通膨避險資產',
          vi: 'Hãy kiểm tra ngay hôm nay xem danh mục đầu tư của bạn có tài sản chống lạm phát không',
          id: 'Periksa hari ini apakah portofolio Anda memiliki aset lindung inflasi',
        }
      ),
    ],
    shareMessage: L({
      ko: '벼락거지 방어 지수: 35% 🔶 기초는 됐는데 구멍이 있다는 거... 포트폴리오에 인플레이션 헤지 자산 있는지 오늘 확인함 → 너는 몇 % 방어하고 있어?',
      en: "Sudden Poverty Defense Score: 35% 🔶 Foundation's there but there are gaps... checked today whether my portfolio has inflation-hedge assets → What's your defense %?",
      ja: '一夜貧乏防御指数：35% 🔶 基礎はできてるけど穴があるってことで...ポートフォリオにインフレヘッジ資産あるか今日確認した → あなたは何%防御してる？',
      'zh-CN': '一夜致贫防御指数：35% 🔶 基础是有了但有漏洞...今天确认了一下投资组合里有没有通胀对冲资产 → 你的防御指数是多少%？',
      'zh-TW': '一夜致貧防禦指數：35% 🔶 基礎是有了但有漏洞...今天確認了一下投資組合裡有沒有通膨避險資產 → 你的防禦指數是多少%？',
      vi: 'Chỉ số phòng vệ nghèo đột ngột: 35% 🔶 Có nền tảng nhưng có lỗ hổng... hôm nay đã kiểm tra danh mục có tài sản chống lạm phát không → Bạn đang phòng vệ được bao nhiêu %?',
      id: 'Skor Pertahanan Kemiskinan Mendadak: 35% 🔶 Ada fondasi tapi masih berlubang... hari ini cek apakah portofolioku punya aset lindung inflasi → Berapa % pertahananmu?',
    }),
  },
  {
    type: 'Type4',
    emoji: '🟡',
    title: L({
      ko: '방어 구조가 갖춰진, 방어 지수 60%',
      en: 'A Solid Defense Structure in Place, Defense Score 60%',
      ja: '防御構造が整った、防御指数60%',
      'zh-CN': '已建立防御结构，防御指数60%',
      'zh-TW': '已建立防禦結構，防禦指數60%',
      vi: 'Đã có cấu trúc phòng vệ, Chỉ số phòng vệ 60%',
      id: 'Struktur Pertahanan Sudah Terbentuk, Skor Pertahanan 60%',
    }),
    shortDescription: L({
      ko: '대부분의 위험으로부터 자산을 방어하고 있습니다. 조금 더 정교하게 다듬으면 됩니다.',
      en: "You're defending your assets against most risks. You just need to refine things a bit more.",
      ja: 'ほとんどの危険から資産を防御しています。もう少し精緻に整えればいいです。',
      'zh-CN': '你已经在防御大部分风险了。只需要再打磨得更精细一些。',
      'zh-TW': '你已經在防禦大部分風險了。只需要再打磨得更精細一些。',
      vi: 'Bạn đang bảo vệ tài sản khỏi hầu hết các rủi ro. Chỉ cần tinh chỉnh thêm một chút.',
      id: 'Anda melindungi aset dari sebagian besar risiko. Anda hanya perlu menyempurnakannya sedikit lagi.',
    }),
    description: L({
      ko: '자산 분산이 어느 정도 돼 있고 인플레이션 개념을 이해하며 경제 흐름과 내 자산을 연결해서 생각하는 습관이 있습니다. 실질 수익률을 의식하고 있는 단계입니다.',
      en: "Your assets are reasonably diversified, you understand the concept of inflation, and you have the habit of connecting economic trends with your own assets. You're at the stage of being conscious of real returns.",
      ja: '資産分散がある程度できていて、インフレの概念を理解し、経済の流れと自分の資産を結びつけて考える習慣があります。実質収益率を意識している段階です。',
      'zh-CN': '你的资产已经有一定程度的分散，理解通胀的概念，并有把经济趋势和自己资产联系起来思考的习惯。你正处于意识到实际收益率的阶段。',
      'zh-TW': '你的資產已經有一定程度的分散，理解通膨的概念，並有把經濟趨勢和自己資產聯繫起來思考的習慣。你正處於意識到實質收益率的階段。',
      vi: 'Tài sản của bạn đã được đa dạng hóa ở một mức độ nào đó, bạn hiểu khái niệm lạm phát và có thói quen liên kết xu hướng kinh tế với tài sản của mình. Bạn đang ở giai đoạn ý thức về lợi suất thực.',
      id: 'Aset Anda sudah cukup terdiversifikasi, Anda memahami konsep inflasi, dan memiliki kebiasaan menghubungkan tren ekonomi dengan aset Anda sendiri. Anda berada di tahap menyadari tingkat pengembalian riil.',
    }),
    defenseScore: L({
      ko: '60~70%',
      en: '60~70%',
      ja: '60~70%',
      'zh-CN': '60~70%',
      'zh-TW': '60~70%',
      vi: '60~70%',
      id: '60~70%',
    }),
    riskLevel: L({
      ko: '낮음',
      en: 'Low',
      ja: '低い',
      'zh-CN': '低',
      'zh-TW': '低',
      vi: 'Thấp',
      id: 'Rendah',
    }),
    sections: [
      section(
        {
          ko: '🛡️ 방어 지수',
          en: '🛡️ Defense Score',
          ja: '🛡️ 防御指数',
          'zh-CN': '🛡️ 防御指数',
          'zh-TW': '🛡️ 防禦指數',
          vi: '🛡️ Chỉ số phòng vệ',
          id: '🛡️ Skor Pertahanan',
        },
        {
          ko: 'Lv.4 방어 구조 보유',
          en: 'Lv.4 Has a Defense Structure',
          ja: 'Lv.4 防御構造保有',
          'zh-CN': 'Lv.4 拥有防御结构',
          'zh-TW': 'Lv.4 擁有防禦結構',
          vi: 'Lv.4 Có cấu trúc phòng vệ',
          id: 'Lv.4 Memiliki Struktur Pertahanan',
        }
      ),
      section(
        {
          ko: '💪 현재 강점',
          en: '💪 Current Strengths',
          ja: '💪 現在の強み',
          'zh-CN': '💪 当前优势',
          'zh-TW': '💪 目前優勢',
          vi: '💪 Điểm mạnh hiện tại',
          id: '💪 Kekuatan Saat Ini',
        },
        {
          ko: '자산 분산·경제 이해도·실질 수익률 인식',
          en: 'Asset diversification, economic understanding, awareness of real returns',
          ja: '資産分散・経済理解度・実質収益率認識',
          'zh-CN': '资产分散・经济理解度・实际收益率意识',
          'zh-TW': '資產分散・經濟理解度・實質收益率意識',
          vi: 'Đa dạng hóa tài sản · hiểu biết kinh tế · nhận thức về lợi suất thực',
          id: 'Diversifikasi aset · pemahaman ekonomi · kesadaran tingkat pengembalian riil',
        }
      ),
      section(
        {
          ko: '📋 남은 과제',
          en: '📋 Remaining Tasks',
          ja: '📋 残された課題',
          'zh-CN': '📋 剩余任务',
          'zh-TW': '📋 剩餘任務',
          vi: '📋 Nhiệm vụ còn lại',
          id: '📋 Tugas yang Tersisa',
        },
        {
          ko: '환리스크 관리 정교화·패시브 인컴 채널 확대·리밸런싱 루틴화',
          en: 'Refining currency risk management, expanding passive income channels, routinizing rebalancing',
          ja: '為替リスク管理の精緻化・パッシブインカムチャネルの拡大・リバランスの定例化',
          'zh-CN': '汇率风险管理精细化・扩大被动收入渠道・使再平衡常态化',
          'zh-TW': '匯率風險管理精細化・擴大被動收入渠道・使再平衡常態化',
          vi: 'Tinh chỉnh quản lý rủi ro tỷ giá · mở rộng kênh thu nhập thụ động · thường xuyên hóa việc tái cân bằng',
          id: 'Menyempurnakan manajemen risiko kurs · memperluas saluran pendapatan pasif · menjadikan rebalancing rutin',
        }
      ),
      section(
        {
          ko: '✅ 지금 당장 할 수 있는 것',
          en: '✅ What You Can Do Right Now',
          ja: '✅ 今すぐできること',
          'zh-CN': '✅ 现在马上能做的事',
          'zh-TW': '✅ 現在馬上能做的事',
          vi: '✅ Điều bạn có thể làm ngay bây giờ',
          id: '✅ Yang Bisa Dilakukan Sekarang',
        },
        {
          ko: '• 포트폴리오 리밸런싱 주기를 분기 또는 반기로 캘린더에 고정하기\n• 달러 자산 비중이 적다면 글로벌 ETF 비중 높이기\n• 배당 수익률·임대 수익률 등 패시브 인컴 채널 점검 및 확대',
          en: '• Fix your portfolio rebalancing cycle to quarterly or semi-annually on your calendar\n• If your dollar-asset ratio is low, increase your global ETF allocation\n• Review and expand passive income channels such as dividend yield and rental yield',
          ja: '• ポートフォリオのリバランス周期を四半期または半年ごとにカレンダーに固定する\n• ドル資産の比重が少なければグローバルETFの比重を高める\n• 配当収益率・賃貸収益率などパッシブインカムチャネルを点検・拡大',
          'zh-CN': '• 把投资组合再平衡周期固定为每季度或每半年一次，写进日程表\n• 如果美元资产比例偏低，就提高全球ETF比例\n• 检查并扩大分红收益率、租金收益率等被动收入渠道',
          'zh-TW': '• 把投資組合再平衡週期固定為每季度或每半年一次，寫進行事曆\n• 如果美元資產比例偏低，就提高全球ETF比例\n• 檢查並擴大股利收益率、租金收益率等被動收入渠道',
          vi: '• Cố định chu kỳ tái cân bằng danh mục theo quý hoặc nửa năm trên lịch\n• Nếu tỷ trọng tài sản đô la thấp, hãy tăng tỷ trọng ETF toàn cầu\n• Kiểm tra và mở rộng các kênh thu nhập thụ động như lợi suất cổ tức, lợi suất cho thuê',
          id: '• Tetapkan siklus rebalancing portofolio setiap kuartal atau semester di kalender\n• Jika proporsi aset dolar rendah, tingkatkan proporsi ETF global\n• Periksa dan perluas saluran pendapatan pasif seperti imbal hasil dividen dan sewa',
        }
      ),
      section(
        {
          ko: '💬 한 줄 평',
          en: '💬 One-Line Verdict',
          ja: '💬 一言コメント',
          'zh-CN': '💬 一句点评',
          'zh-TW': '💬 一句點評',
          vi: '💬 Nhận xét ngắn',
          id: '💬 Komentar Singkat',
        },
        {
          ko: '벼락거지와 거리가 생겼습니다. 이제 더 빠르게 벌어질 수 있습니다',
          en: "You've put distance between yourself and sudden poverty. Now the gap can widen even faster.",
          ja: '一夜貧乏との距離ができました。これからさらに速く差が広がります',
          'zh-CN': '你已经和"一夜致贫"拉开了距离。现在差距会拉得更快',
          'zh-TW': '你已經和「一夜致貧」拉開了距離。現在差距會拉得更快',
          vi: 'Bạn đã tạo được khoảng cách với nghèo đột ngột. Bây giờ khoảng cách này có thể mở rộng nhanh hơn',
          id: 'Anda sudah menjauh dari kemiskinan mendadak. Sekarang jaraknya bisa melebar lebih cepat',
        }
      ),
    ],
    shareMessage: L({
      ko: '벼락거지 방어 지수: 60% 🟡 방어 구조는 갖췄는데 더 정교하게 다듬어야 한다는 거... 리밸런싱 일정 캘린더에 박아둠 → 너는 몇 % 방어하고 있어?',
      en: "Sudden Poverty Defense Score: 60% 🟡 Have the defense structure but need to refine it more... locked in my rebalancing schedule on the calendar → What's your defense %?",
      ja: '一夜貧乏防御指数：60% 🟡 防御構造は整えたけどもっと精緻にしないと...リバランス予定をカレンダーに固定した → あなたは何%防御してる？',
      'zh-CN': '一夜致贫防御指数：60% 🟡 防御结构是有了但要更精细打磨...把再平衡日程钉进日历了 → 你的防御指数是多少%？',
      'zh-TW': '一夜致貧防禦指數：60% 🟡 防禦結構是有了但要更精細打磨...把再平衡行程釘進行事曆了 → 你的防禦指數是多少%？',
      vi: 'Chỉ số phòng vệ nghèo đột ngột: 60% 🟡 Đã có cấu trúc phòng vệ nhưng cần tinh chỉnh hơn... đã ghim lịch tái cân bằng vào calendar → Bạn đang phòng vệ được bao nhiêu %?',
      id: 'Skor Pertahanan Kemiskinan Mendadak: 60% 🟡 Sudah punya struktur pertahanan tapi perlu disempurnakan lagi... jadwal rebalancing sudah kupatok di kalender → Berapa % pertahananmu?',
    }),
  },
  {
    type: 'Type5',
    emoji: '🟢',
    title: L({
      ko: '능동적으로 자산을 굴리는, 방어 지수 80%',
      en: 'Actively Managing Your Assets, Defense Score 80%',
      ja: '能動的に資産を運用する、防御指数80%',
      'zh-CN': '主动运作资产，防御指数80%',
      'zh-TW': '主動運作資產，防禦指數80%',
      vi: 'Chủ động vận hành tài sản, Chỉ số phòng vệ 80%',
      id: 'Mengelola Aset Secara Aktif, Skor Pertahanan 80%',
    }),
    shortDescription: L({
      ko: '인플레이션이 오히려 자산 가치를 높이는 구조를 만들고 있습니다.',
      en: "You're building a structure where inflation actually increases your asset value.",
      ja: 'インフレがむしろ資産価値を高める構造を作っています。',
      'zh-CN': '你正在构建一个反而能借通胀提升资产价值的结构。',
      'zh-TW': '你正在構建一個反而能借通膨提升資產價值的結構。',
      vi: 'Bạn đang xây dựng một cơ chế mà lạm phát lại làm tăng giá trị tài sản của bạn.',
      id: 'Anda sedang membangun struktur di mana inflasi justru meningkatkan nilai aset Anda.',
    }),
    description: L({
      ko: '자산 배분을 의식적으로 관리하고 환리스크를 고려하며 패시브 인컴이 어느 정도 형성돼 있습니다. 거시경제 흐름을 내 포트폴리오와 연결해서 선제적으로 대응하는 수준입니다.',
      en: "You consciously manage your asset allocation, consider currency risk, and have already built up some passive income. You're at a level where you proactively respond by connecting macroeconomic trends with your portfolio.",
      ja: '資産配分を意識的に管理し、為替リスクを考慮しており、パッシブインカムがある程度形成されています。マクロ経済の流れを自分のポートフォリオと結びつけて先制的に対応するレベルです。',
      'zh-CN': '你有意识地管理资产配置，考虑汇率风险，并已经形成了一定的被动收入。你已经达到了能把宏观经济趋势和自己投资组合联系起来提前应对的水平。',
      'zh-TW': '你有意識地管理資產配置，考慮匯率風險，並已經形成了一定的被動收入。你已經達到了能把宏觀經濟趨勢和自己投資組合聯繫起來提前應對的水平。',
      vi: 'Bạn chủ động quản lý phân bổ tài sản, xem xét rủi ro tỷ giá và đã hình thành một mức thu nhập thụ động. Bạn đang ở mức có thể chủ động ứng phó bằng cách liên kết xu hướng kinh tế vĩ mô với danh mục đầu tư của mình.',
      id: 'Anda secara sadar mengelola alokasi aset, mempertimbangkan risiko kurs, dan sudah membentuk pendapatan pasif pada tingkat tertentu. Anda berada di level yang mampu merespons secara proaktif dengan menghubungkan tren makroekonomi dengan portofolio Anda.',
    }),
    defenseScore: L({
      ko: '80~90%',
      en: '80~90%',
      ja: '80~90%',
      'zh-CN': '80~90%',
      'zh-TW': '80~90%',
      vi: '80~90%',
      id: '80~90%',
    }),
    riskLevel: L({
      ko: '매우 낮음',
      en: 'Very Low',
      ja: '非常に低い',
      'zh-CN': '非常低',
      'zh-TW': '非常低',
      vi: 'Rất thấp',
      id: 'Sangat Rendah',
    }),
    sections: [
      section(
        {
          ko: '🛡️ 방어 지수',
          en: '🛡️ Defense Score',
          ja: '🛡️ 防御指数',
          'zh-CN': '🛡️ 防御指数',
          'zh-TW': '🛡️ 防禦指數',
          vi: '🛡️ Chỉ số phòng vệ',
          id: '🛡️ Skor Pertahanan',
        },
        {
          ko: 'Lv.5 능동적 자산 방어',
          en: 'Lv.5 Active Asset Defense',
          ja: 'Lv.5 能動的資産防御',
          'zh-CN': 'Lv.5 主动资产防御',
          'zh-TW': 'Lv.5 主動資產防禦',
          vi: 'Lv.5 Phòng vệ tài sản chủ động',
          id: 'Lv.5 Pertahanan Aset Aktif',
        }
      ),
      section(
        {
          ko: '💪 현재 강점',
          en: '💪 Current Strengths',
          ja: '💪 現在の強み',
          'zh-CN': '💪 当前优势',
          'zh-TW': '💪 目前優勢',
          vi: '💪 Điểm mạnh hiện tại',
          id: '💪 Kekuatan Saat Ini',
        },
        {
          ko: '분산 포트폴리오·환리스크 관리·패시브 인컴·거시경제 이해',
          en: 'Diversified portfolio, currency risk management, passive income, macroeconomic understanding',
          ja: '分散ポートフォリオ・為替リスク管理・パッシブインカム・マクロ経済理解',
          'zh-CN': '分散投资组合・汇率风险管理・被动收入・宏观经济理解',
          'zh-TW': '分散投資組合・匯率風險管理・被動收入・宏觀經濟理解',
          vi: 'Danh mục đa dạng · quản lý rủi ro tỷ giá · thu nhập thụ động · hiểu biết kinh tế vĩ mô',
          id: 'Portofolio terdiversifikasi · manajemen risiko kurs · pendapatan pasif · pemahaman makroekonomi',
        }
      ),
      section(
        {
          ko: '📋 남은 과제',
          en: '📋 Remaining Tasks',
          ja: '📋 残された課題',
          'zh-CN': '📋 剩余任务',
          'zh-TW': '📋 剩餘任務',
          vi: '📋 Nhiệm vụ còn lại',
          id: '📋 Tugas yang Tersisa',
        },
        {
          ko: '세금 최적화·레버리지 관리·장기 자산 배분 전략 정교화',
          en: 'Tax optimization, leverage management, refining long-term asset allocation strategy',
          ja: '税金最適化・レバレッジ管理・長期資産配分戦略の精緻化',
          'zh-CN': '税务优化・杠杆管理・长期资产配置策略精细化',
          'zh-TW': '稅務優化・槓桿管理・長期資產配置策略精細化',
          vi: 'Tối ưu hóa thuế · quản lý đòn bẩy · tinh chỉnh chiến lược phân bổ tài sản dài hạn',
          id: 'Optimalisasi pajak · manajemen leverage · penyempurnaan strategi alokasi aset jangka panjang',
        }
      ),
      section(
        {
          ko: '✅ 지금 당장 할 수 있는 것',
          en: '✅ What You Can Do Right Now',
          ja: '✅ 今すぐできること',
          'zh-CN': '✅ 现在马上能做的事',
          'zh-TW': '✅ 現在馬上能做的事',
          vi: '✅ Điều bạn có thể làm ngay bây giờ',
          id: '✅ Yang Bisa Dilakukan Sekarang',
        },
        {
          ko: '• 절세 계좌(ISA·IRP·연금저축) 최대 한도 활용 여부 점검\n• 자산별 세후 실질 수익률 계산해서 비효율 자산 정리\n• 다음 금리 사이클을 고려한 채권·현금 비중 조정',
          en: "• Check whether you're maximizing tax-advantaged accounts (ISA, IRP, pension savings)\n• Calculate after-tax real returns for each asset and clean up inefficient ones\n• Adjust bond and cash ratios considering the next interest rate cycle",
          ja: '• 節税口座（ISA・IRP・年金貯蓄）の最大限度活用を点検\n• 資産別の税引後実質収益率を計算し非効率な資産を整理\n• 次の金利サイクルを考慮した債券・現金比重の調整',
          'zh-CN': '• 检查是否充分利用了节税账户（ISA、IRP、养老储蓄）的最大额度\n• 计算各类资产的税后实际收益率，清理效率低的资产\n• 考虑下一个利率周期，调整债券和现金比重',
          'zh-TW': '• 檢查是否充分利用了節稅帳戶（ISA、IRP、退休儲蓄）的最大額度\n• 計算各類資產的稅後實質收益率，清理效率低的資產\n• 考慮下一個利率週期，調整債券和現金比重',
          vi: '• Kiểm tra xem đã tận dụng tối đa hạn mức của tài khoản tiết kiệm thuế (ISA, IRP, tiết kiệm hưu trí) chưa\n• Tính lợi suất thực sau thuế cho từng loại tài sản và dọn dẹp các tài sản không hiệu quả\n• Điều chỉnh tỷ trọng trái phiếu và tiền mặt dựa trên chu kỳ lãi suất tiếp theo',
          id: '• Periksa apakah Anda sudah memaksimalkan batas rekening bebas pajak (ISA, IRP, tabungan pensiun)\n• Hitung tingkat pengembalian riil setelah pajak untuk setiap aset dan bersihkan aset yang tidak efisien\n• Sesuaikan proporsi obligasi dan uang tunai dengan mempertimbangkan siklus suku bunga berikutnya',
        }
      ),
      section(
        {
          ko: '💬 한 줄 평',
          en: '💬 One-Line Verdict',
          ja: '💬 一言コメント',
          'zh-CN': '💬 一句点评',
          'zh-TW': '💬 一句點評',
          vi: '💬 Nhận xét ngắn',
          id: '💬 Komentar Singkat',
        },
        {
          ko: '벼락거지는 다른 사람 이야기입니다. 이제 속도가 관건입니다',
          en: "Sudden poverty is someone else's story now. Speed is what matters from here.",
          ja: '一夜貧乏は他人の話です。これからは速度が重要です',
          'zh-CN': '一夜致贫已经是别人的故事了。现在速度才是关键',
          'zh-TW': '一夜致貧已經是別人的故事了。現在速度才是關鍵',
          vi: 'Nghèo đột ngột giờ là câu chuyện của người khác. Bây giờ tốc độ mới là điều quan trọng',
          id: 'Kemiskinan mendadak sudah menjadi cerita orang lain. Sekarang kecepatan adalah kuncinya',
        }
      ),
    ],
    shareMessage: L({
      ko: '벼락거지 방어 지수: 80% 🟢 인플레이션이 오히려 자산 가치 높이는 구조 됐다는 거... 절세 계좌 한도 점검해봐야겠다 → 너는 몇 % 방어하고 있어?',
      en: "Sudden Poverty Defense Score: 80% 🟢 Inflation now actually boosts my asset value... I should check my tax-advantaged account limits → What's your defense %?",
      ja: '一夜貧乏防御指数：80% 🟢 インフレがむしろ資産価値を高める構造になったって...節税口座の限度チェックしないと → あなたは何%防御してる？',
      'zh-CN': '一夜致贫防御指数：80% 🟢 通胀反而变成了提升资产价值的结构...得去检查一下节税账户额度了 → 你的防御指数是多少%？',
      'zh-TW': '一夜致貧防禦指數：80% 🟢 通膨反而變成了提升資產價值的結構...得去檢查一下節稅帳戶額度了 → 你的防禦指數是多少%？',
      vi: 'Chỉ số phòng vệ nghèo đột ngột: 80% 🟢 Lạm phát giờ lại trở thành cơ chế nâng giá trị tài sản... phải kiểm tra hạn mức tài khoản tiết kiệm thuế thôi → Bạn đang phòng vệ được bao nhiêu %?',
      id: 'Skor Pertahanan Kemiskinan Mendadak: 80% 🟢 Inflasi malah jadi struktur yang menaikkan nilai asetku... harus cek batas rekening bebas pajak nih → Berapa % pertahananmu?',
    }),
  },
  {
    type: 'Type6',
    emoji: '🏆',
    title: L({
      ko: '자산이 스스로 일하는 구조, 방어 지수 99%',
      en: 'A Structure Where Your Assets Work for You, Defense Score 99%',
      ja: '資産が自ら働く構造、防御指数99%',
      'zh-CN': '资产自动运作的结构，防御指数99%',
      'zh-TW': '資產自動運作的結構，防禦指數99%',
      vi: 'Cấu trúc để tài sản tự vận hành, Chỉ số phòng vệ 99%',
      id: 'Struktur di Mana Aset Bekerja Sendiri, Skor Pertahanan 99%',
    }),
    shortDescription: L({
      ko: '인플레이션·금리 변동·환율 충격에서 자산을 지키는 구조가 이미 작동하고 있습니다.',
      en: "A structure that protects your assets from inflation, interest rate shifts, and currency shocks is already up and running.",
      ja: 'インフレ・金利変動・為替ショックから資産を守る構造がすでに機能しています。',
      'zh-CN': '一套能在通胀、利率变动、汇率冲击中保护资产的结构已经在运作了。',
      'zh-TW': '一套能在通膨、利率變動、匯率衝擊中保護資產的結構已經在運作了。',
      vi: 'Cấu trúc bảo vệ tài sản trước lạm phát, biến động lãi suất và cú sốc tỷ giá đã đang hoạt động.',
      id: 'Struktur yang melindungi aset Anda dari inflasi, perubahan suku bunga, dan gejolak kurs sudah berjalan.',
    }),
    description: L({
      ko: '실질 금리·인플레이션 헤지·자산 배분·환리스크 관리·패시브 인컴 채널까지 갖춘 단계입니다. 벼락거지 위험에서 가장 멀리 떨어진 구간이며 자산이 스스로 인플레이션을 방어하는 구조입니다.',
      en: "You've built everything from real interest rate awareness, inflation hedging, and asset allocation to currency risk management and passive income channels. You're at the point farthest from the risk of sudden poverty — your assets defend against inflation on their own.",
      ja: '実質金利・インフレヘッジ・資産配分・為替リスク管理・パッシブインカムチャネルまで整えた段階です。一夜貧乏のリスクから最も遠い区間であり、資産が自らインフレを防御する構造です。',
      'zh-CN': '你已经具备了实际利率意识、通胀对冲、资产配置、汇率风险管理，以及被动收入渠道等全套体系。你处于离"一夜致贫"风险最远的区间，资产会自动抵御通胀。',
      'zh-TW': '你已經具備了實質利率意識、通膨避險、資產配置、匯率風險管理，以及被動收入渠道等全套體系。你處於離「一夜致貧」風險最遠的區間，資產會自動抵禦通膨。',
      vi: 'Bạn đã xây dựng đầy đủ từ nhận thức lãi suất thực, chống lạm phát, phân bổ tài sản, quản lý rủi ro tỷ giá đến kênh thu nhập thụ động. Bạn đang ở khu vực xa nhất khỏi rủi ro nghèo đột ngột và tài sản của bạn tự bảo vệ trước lạm phát.',
      id: 'Anda telah membangun semuanya, mulai dari kesadaran suku bunga riil, lindung inflasi, alokasi aset, manajemen risiko kurs, hingga saluran pendapatan pasif. Anda berada di titik paling jauh dari risiko kemiskinan mendadak, di mana aset Anda melindungi diri sendiri dari inflasi.',
    }),
    defenseScore: L({
      ko: '99%',
      en: '99%',
      ja: '99%',
      'zh-CN': '99%',
      'zh-TW': '99%',
      vi: '99%',
      id: '99%',
    }),
    riskLevel: L({
      ko: '거의 없음',
      en: 'Almost None',
      ja: 'ほとんどない',
      'zh-CN': '几乎没有',
      'zh-TW': '幾乎沒有',
      vi: 'Hầu như không có',
      id: 'Hampir Tidak Ada',
    }),
    sections: [
      section(
        {
          ko: '🛡️ 방어 지수',
          en: '🛡️ Defense Score',
          ja: '🛡️ 防御指数',
          'zh-CN': '🛡️ 防御指数',
          'zh-TW': '🛡️ 防禦指數',
          vi: '🛡️ Chỉ số phòng vệ',
          id: '🛡️ Skor Pertahanan',
        },
        {
          ko: 'Lv.6 자산 방어 마스터',
          en: 'Lv.6 Asset Defense Master',
          ja: 'Lv.6 資産防御マスター',
          'zh-CN': 'Lv.6 资产防御大师',
          'zh-TW': 'Lv.6 資產防禦大師',
          vi: 'Lv.6 Bậc thầy phòng vệ tài sản',
          id: 'Lv.6 Master Pertahanan Aset',
        }
      ),
      section(
        {
          ko: '💪 현재 강점',
          en: '💪 Current Strengths',
          ja: '💪 現在の強み',
          'zh-CN': '💪 当前优势',
          'zh-TW': '💪 目前優勢',
          vi: '💪 Điểm mạnh hiện tại',
          id: '💪 Kekuatan Saat Ini',
        },
        {
          ko: '완성된 분산 포트폴리오·거시경제 연동 대응·패시브 인컴 다각화·리밸런싱 자동화',
          en: 'A completed diversified portfolio, macroeconomic-linked response, diversified passive income, automated rebalancing',
          ja: '完成された分散ポートフォリオ・マクロ経済連動対応・パッシブインカムの多角化・リバランスの自動化',
          'zh-CN': '完善的分散投资组合・与宏观经济联动的应对・被动收入多元化・再平衡自动化',
          'zh-TW': '完善的分散投資組合・與宏觀經濟連動的應對・被動收入多元化・再平衡自動化',
          vi: 'Danh mục đa dạng hoàn chỉnh · ứng phó liên kết với kinh tế vĩ mô · đa dạng hóa thu nhập thụ động · tự động hóa tái cân bằng',
          id: 'Portofolio terdiversifikasi yang lengkap · respons yang terhubung dengan makroekonomi · diversifikasi pendapatan pasif · rebalancing otomatis',
        }
      ),
      section(
        {
          ko: '🔍 남은 1%의 리스크',
          en: '🔍 The Remaining 1% Risk',
          ja: '🔍 残り1%のリスク',
          'zh-CN': '🔍 剩下1%的风险',
          'zh-TW': '🔍 剩下1%的風險',
          vi: '🔍 1% Rủi ro còn lại',
          id: '🔍 Sisa Risiko 1%',
        },
        {
          ko: '블랙스완 이벤트·정치적 리스크·유동성 위기 등 시스템 전체가 흔들리는 상황',
          en: 'Situations that shake the entire system, such as black swan events, political risk, and liquidity crises',
          ja: 'ブラックスワンイベント・政治的リスク・流動性危機などシステム全体が揺らぐ状況',
          'zh-CN': '黑天鹅事件、政治风险、流动性危机等整个系统动摇的情况',
          'zh-TW': '黑天鵝事件、政治風險、流動性危機等整個系統動搖的情況',
          vi: 'Các tình huống làm rung chuyển toàn hệ thống như sự kiện thiên nga đen, rủi ro chính trị, khủng hoảng thanh khoản',
          id: 'Situasi yang mengguncang seluruh sistem seperti peristiwa black swan, risiko politik, krisis likuiditas',
        }
      ),
      section(
        {
          ko: '✅ 이 레벨에서 할 수 있는 것',
          en: '✅ What You Can Do at This Level',
          ja: '✅ このレベルでできること',
          'zh-CN': '✅ 在这个层级能做的事',
          'zh-TW': '✅ 在這個層級能做的事',
          vi: '✅ Điều bạn có thể làm ở cấp độ này',
          id: '✅ Yang Bisa Dilakukan di Level Ini',
        },
        {
          ko: '• 현재 전략의 시나리오 테스트. "금리가 5%p 오르면?" "달러가 20% 빠지면?" 스트레스 테스트\n• 자산 이전 전략(상속·증여·법인 활용) 고려 시점인지 점검',
          en: '• Stress-test your current strategy with scenarios like "What if rates rise 5 percentage points?" or "What if the dollar drops 20%?"\n• Check whether it\'s time to consider asset transfer strategies (inheritance, gifting, using a corporate entity)',
          ja: '• 現在の戦略のシナリオテスト。「金利が5%p上がったら？」「ドルが20%下がったら？」ストレステスト\n• 資産移転戦略（相続・贈与・法人活用）を考慮する時期かどうか点検',
          'zh-CN': '• 对当前策略进行情景测试。"如果利率上涨5个百分点？""如果美元下跌20%？"进行压力测试\n• 检查是否到了考虑资产转移策略（继承、赠与、法人利用）的时机',
          'zh-TW': '• 對目前策略進行情境測試。「如果利率上漲5個百分點？」「如果美元下跌20%？」進行壓力測試\n• 檢查是否到了考慮資產轉移策略（繼承、贈與、法人運用）的時機',
          vi: '• Kiểm tra sức chịu đựng chiến lược hiện tại theo tình huống. "Nếu lãi suất tăng 5 điểm phần trăm?" "Nếu đô la giảm 20%?"\n• Kiểm tra xem đã đến lúc xem xét chiến lược chuyển giao tài sản (thừa kế, tặng cho, sử dụng pháp nhân) chưa',
          id: '• Uji skenario strategi Anda saat ini. Stress test seperti "Bagaimana jika suku bunga naik 5 poin persentase?" "Bagaimana jika dolar turun 20%?"\n• Periksa apakah sudah waktunya mempertimbangkan strategi pengalihan aset (warisan, hibah, penggunaan badan hukum)',
        }
      ),
      section(
        {
          ko: '💬 한 줄 평',
          en: '💬 One-Line Verdict',
          ja: '💬 一言コメント',
          'zh-CN': '💬 一句点评',
          'zh-TW': '💬 一句點評',
          vi: '💬 Nhận xét ngắn',
          id: '💬 Komentar Singkat',
        },
        {
          ko: '이 결과를 보고 있는 주변 사람들에게 지식을 나눠주세요. 가장 좋은 투자는 교육입니다',
          en: 'Share this knowledge with the people around you who are seeing this result. The best investment is education.',
          ja: 'この結果を見ている周りの人たちに知識を分けてあげてください。最良の投資は教育です',
          'zh-CN': '请把这些知识分享给正在看这个结果的身边的人。最好的投资就是教育',
          'zh-TW': '請把這些知識分享給正在看這個結果的身邊的人。最好的投資就是教育',
          vi: 'Hãy chia sẻ kiến thức này với những người xung quanh đang xem kết quả này. Đầu tư tốt nhất là giáo dục',
          id: 'Bagikan pengetahuan ini kepada orang-orang di sekitar Anda yang melihat hasil ini. Investasi terbaik adalah edukasi',
        }
      ),
    ],
    shareMessage: L({
      ko: '벼락거지 방어 지수: 99% 🏆 자산이 스스로 일하는 구조 완성... 남은 1%는 블랙스완이래 ㅋㅋ → 너는 몇 % 방어하고 있어? 경제 공부 같이 해봐',
      en: "Sudden Poverty Defense Score: 99% 🏆 Built a structure where my assets work on their own... the remaining 1% is apparently a black swan lol → What's your defense %? Let's study economics together",
      ja: '一夜貧乏防御指数：99% 🏆 資産が自ら働く構造完成...残り1%はブラックスワンだって(笑) → あなたは何%防御してる？一緒に経済勉強しよう',
      'zh-CN': '一夜致贫防御指数：99% 🏆 完成了资产自动运作的结构...剩下的1%据说是黑天鹅哈哈 → 你的防御指数是多少%？一起学经济吧',
      'zh-TW': '一夜致貧防禦指數：99% 🏆 完成了資產自動運作的結構...剩下的1%據說是黑天鵝哈哈 → 你的防禦指數是多少%？一起學經濟吧',
      vi: 'Chỉ số phòng vệ nghèo đột ngột: 99% 🏆 Hoàn thành cấu trúc để tài sản tự vận hành... 1% còn lại nghe nói là thiên nga đen haha → Bạn đang phòng vệ được bao nhiêu %? Cùng học kinh tế nhé',
      id: 'Skor Pertahanan Kemiskinan Mendadak: 99% 🏆 Selesai bangun struktur di mana aset bekerja sendiri... sisa 1% katanya black swan haha → Berapa % pertahananmu? Ayo belajar ekonomi bareng',
    }),
  },
];
