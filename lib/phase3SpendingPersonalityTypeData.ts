/** 7개 로케일: ko, en, ja, zh-CN, zh-TW, vi, id */
function M(
  ko: string,
  en: string,
  ja: string,
  zhCN: string,
  zhTW: string,
  vi: string,
  id: string
): Record<string, string> {
  return { ko, en, ja, 'zh-CN': zhCN, 'zh-TW': zhTW, vi, id };
}

export interface Phase3SpendingPersonalityTypeQuestion {
  id: number;
  question: Record<string, string>;
  options: { text: Record<string, string>; score: number }[];
}

export interface Phase3SpendingPersonalityTypeResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  spendingDna: Record<string, string>;
  keywords: Record<string, string>;
  strength: Record<string, string>;
  weakness: Record<string, string>;
  prescription: Record<string, string>;
  goodMatch: Record<string, string>;
  badMatch: Record<string, string>;
  shareTypeName: Record<string, string>;
}

export function calculatePhase3SpendingPersonalityTypeResult(scores: number[]): string {
  const total = scores.reduce((a, b) => a + (b ?? 0), 0);
  if (total <= 4) return 'Type1';
  if (total <= 8) return 'Type2';
  if (total <= 13) return 'Type3';
  if (total <= 18) return 'Type4';
  if (total <= 23) return 'Type5';
  if (total <= 28) return 'Type6';
  if (total <= 32) return 'Type7';
  return 'Type8';
}

export const phase3SpendingPersonalityTypeQuestions: Phase3SpendingPersonalityTypeQuestion[] = [
  {
    id: 1,
    question: M(
      '쇼핑몰을 열었을 때 나의 행동 패턴은?',
      'When you open a shopping site, what do you usually do?',
      'ショッピングサイトを開いたとき、あなたの行動パターンは？',
      '打开购物网站时，你的行为模式是？',
      '打開購物網站時，你的行為模式是？',
      'Khi mở app mua sắm, bạn thường làm gì?',
      'Saat membuka toko online, pola perilakumu seperti apa?'
    ),
    options: [
      {
        text: M(
          '필요한 것만 검색해서 최저가 비교 후 구매하고 바로 닫는다',
          'Search only what I need, compare prices, buy, then close.',
          '必要なものだけ検索し、最安値を比較して買ってすぐ閉じる。',
          '只搜需要的，比价后购买并立刻关掉。',
          '只搜需要的，比價後購買並立刻關掉。',
          'Chỉ tìm thứ cần, so giá, mua rồi tắt ngay.',
          'Hanya cari yang perlu, bandingkan harga, beli, lalu tutup.'
        ),
        score: 0,
      },
      {
        text: M(
          '필요한 것을 사긴 하는데 구경하다 보면 장바구니에 더 담겨 있다',
          'I buy what I need, but browsing adds more to my cart.',
          '必要なものは買うが、見ているうちにカゴが増える。',
          '该买的会买，但逛着逛着购物车又多了。',
          '該買的會買，但逛著逛著購物車又多了。',
          'Cần thì mua nhưng lướt thêm là giỏ hàng phình ra.',
          'Yang perlu dibeli, tapi kalau jelajah keranjang jadi nambah.'
        ),
        score: 1,
      },
      {
        text: M(
          '필요하지 않아도 세일 배너를 보면 무조건 클릭한다',
          'I click every sale banner even if I do not need anything.',
          '不要でもセールバナーは必ずクリックする。',
          '不需要也会忍不住点进各种促销横幅。',
          '不需要也會忍不住點進各種促銷橫幅。',
          'Không cần cũng cứ bấm hết banner giảm giá.',
          'Meski tidak perlu, banner diskon tetap diklik.'
        ),
        score: 2,
      },
      {
        text: M(
          '구경하는 것 자체가 취미다. 지르지 않으면 직성이 안 풀린다',
          'Browsing is my hobby—I need to buy something to feel satisfied.',
          '見ることが趣味。買わないと気が済まない。',
          '逛本身就是爱好，不买不爽。',
          '逛本身就是愛好，不買不爽。',
          'Lướt là sở thích—không mua là không yên.',
          'Jelajah itu hobi—kalau nggak checkout nggak puas.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 2,
    question: M(
      '월급날 가장 먼저 하는 행동은?',
      'On payday, what do you do first?',
      '給料日、まず何をする？',
      '发薪日你最先做什么？',
      '發薪日你最先做什麼？',
      'Ngày nhận lương, bạn làm gì trước tiên?',
      'Saat gajian, hal pertama yang kamu lakukan?'
    ),
    options: [
      {
        text: M(
          '저축 먼저. 생활비 제외하고 남은 돈을 자동이체로 분리한다',
          'Save first—auto-transfer what is left after living costs.',
          'まず貯蓄。生活費を除き、残りを自動振替で分ける。',
          '先存钱，扣除生活费后把余款自动转走。',
          '先存錢，扣除生活費後把餘款自動轉走。',
          'Tiết kiệm trước—trừ sinh hoạt, phần còn lại chuyển tự động.',
          'Tabung dulu—sisanya setelah biaya hidup ditransfer otomatis.'
        ),
        score: 0,
      },
      {
        text: M(
          '필수 지출을 정리하고 남은 돈으로 계획적으로 쓴다',
          'Cover essentials, then spend the rest on a plan.',
          '必須支出を整理し、残りを計画的に使う。',
          '先理清必要支出，再按计划花剩下的钱。',
          '先理清必要支出，再按計畫花剩下的錢。',
          'Lo chi phí cần, phần còn chi có kế hoạch.',
          'Urus pengeluaran wajib, sisanya dipakai terencana.'
        ),
        score: 1,
      },
      {
        text: M(
          '못 샀던 거 하나씩 사면서 자축한다',
          'Treat myself—buy things I had been putting off.',
          '我慢していたものを少しずつ買ってお祝い。',
          '把之前没买的一件件买来犒劳自己。',
          '把之前沒買的一件件買來犒勞自己。',
          'Mua dần thứ từng tiếc để tự thưởng.',
          'Beli satu-satu barang yang ditunda buat self-reward.'
        ),
        score: 2,
      },
      {
        text: M(
          '월급이 들어왔다는 사실만으로 지갑이 열린다',
          'Just knowing I got paid opens my wallet.',
          '給料が入っただけで財布の紐が緩む。',
          '只要知道工资到账就想花钱。',
          '只要知道薪水入帳就想花錢。',
          'Chỉ cần biết đã có lương là ví đã mở.',
          'Cuma dengar gaji masuk dompet sudah kebuka.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 3,
    question: M(
      '마음에 드는 물건이 있는데 지금 당장 필요하지 않을 때?',
      'You like something but do not need it right now—what do you do?',
      '気に入ったが、今すぐ必要ないものがあるとき？',
      '喜欢某样东西但暂时不需要时，你会？',
      '喜歡某樣東西但暫時不需要時，你會？',
      'Thích món đồ nhưng chưa cần ngay—bạn làm gì?',
      'Suka barangnya tapi belum perlu sekarang—pilihanmu?'
    ),
    options: [
      {
        text: M(
          '안 산다. 필요할 때 사는 게 원칙이다',
          'I do not buy. I only buy when I truly need it.',
          '買わない。必要になったら買うのが原則。',
          '不买，需要时再买是原则。',
          '不買，需要時再買是原則。',
          'Không mua—đến lúc cần mới mua.',
          'Tidak beli—beli saat benar-benar perlu.'
        ),
        score: 0,
      },
      {
        text: M(
          '위시리스트에 올려두고 정말 필요해지면 그때 산다',
          'I add it to a wishlist and buy only if it becomes necessary.',
          'ウィッシュリストに入れ、本当に必要になったら買う。',
          '先加愿望单，真需要了再买。',
          '先加願望單，真需要了再買。',
          'Cho vào wishlist, thật sự cần mới mua.',
          'Masuk wishlist, beli kalau sudah benar-benar perlu.'
        ),
        score: 1,
      },
      {
        text: M(
          '세일할 때까지 기다렸다가 산다',
          'I wait for a sale, then buy.',
          'セールまで待って買う。',
          '等到打折再买。',
          '等到打折再買。',
          'Chờ sale rồi mua.',
          'Tunggu diskon baru beli.'
        ),
        score: 2,
      },
      {
        text: M(
          '지금 당장 산다. 나중에 없어지면 후회하니까',
          'I buy now—I will regret it if it sells out.',
          '今すぐ買う。なくなったら後悔するから。',
          '立刻买，怕以后没了后悔。',
          '立刻買，怕以後沒了後悔。',
          'Mua ngay—sợ hết hàng rồi tiếc.',
          'Beli sekarang—takut kehabisan nyesel.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 4,
    question: M(
      '예상치 못한 지출이 생겼을 때 나는?',
      'When an unexpected expense hits, you…',
      '予想外の出費が出たとき、あなたは？',
      '出现意外支出时，你会？',
      '出現意外支出時，你會？',
      'Chi phí bất ngờ ập đến—bạn thì sao?',
      'Ada pengeluaran tak terduga—kamu?'
    ),
    options: [
      {
        text: M(
          '비상금 통장에서 해결하고 다음 달 예산을 조정한다',
          'Use my emergency fund and adjust next month’s budget.',
          '緊急資金で賄い、翌月の予算を調整する。',
          '用应急金解决，并调整下月预算。',
          '用應急金解決，並調整下月預算。',
          'Dùng quỹ khẩn cấp và chỉnh ngân sách tháng sau.',
          'Pakai dana darurat dan sesuaikan anggaran bulan depan.'
        ),
        score: 0,
      },
      {
        text: M(
          '카드로 긁고 나중에 어떻게 해결할지 고민한다',
          'Swipe the card now and worry about it later.',
          'カードで払い、あとでどうするか考える。',
          '先刷卡，之后再想怎么还。',
          '先刷卡，之後再想怎麼還。',
          'Quẹt thẻ trước, lo sau.',
          'Swipe dulu, pikirkan nanti.'
        ),
        score: 1,
      },
      {
        text: M(
          '당장 할 수 없는 다른 소비를 줄여서 맞춘다',
          'Cut other spending I can delay to make it work.',
          '他の支出を削って合わせる。',
          '削减其他可延后的开销来填坑。',
          '削減其他可延後的開銷來填坑。',
          'Giảm chi khác để cân bằng.',
          'Kurangi pengeluaran lain yang bisa ditunda.'
        ),
        score: 2,
      },
      {
        text: M(
          '일단 긁고 본다. 어떻게든 되겠지',
          'Swipe first—it will work out somehow.',
          'とりあえず払う。なんとかなるでしょ。',
          '先刷再说，总会有办法。',
          '先刷再說，總有辦法。',
          'Cứ quẹt đã—rồi sẽ ổn.',
          'Swipe dulu—nanti pasti ada jalan.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 5,
    question: M(
      '카페에서 음료를 고를 때 나는?',
      'At a café, how do you pick a drink?',
      'カフェで飲み物を選ぶとき、あなたは？',
      '在咖啡店怎么选饮品？',
      '在咖啡店怎麼選飲品？',
      'Ở quán cà phê bạn chọn đồ uống thế nào?',
      'Di kafe kamu pilih minuman bagaimana?'
    ),
    options: [
      {
        text: M(
          '아메리카노 같은 저렴한 것을 고른다. 비싼 음료는 낭비다',
          'Cheap options like americano—expensive drinks feel wasteful.',
          'アメリカーノなど安いもの。高いのはもったいない。',
          '选美式等便宜的，贵饮料觉得是浪费。',
          '選美式等便宜的，貴飲料覺得是浪費。',
          'Chọn rẻ như americano—đắt là phí.',
          'Pilih yang murah seperti americano—mahal sia-sia.'
        ),
        score: 0,
      },
      {
        text: M(
          '그날 기분에 따라 적당한 걸 고른다. 너무 아끼지도 너무 쓰지도 않는다',
          'Depends on my mood—neither too stingy nor too loose.',
          'その日の気分でちょうどいいものを。',
          '看当天心情选适中的，不太省也不太挥霍。',
          '看當天心情選適中的，不太省也不太揮霍。',
          'Theo tâm trạng—vừa phải.',
          'Sesuai mood—pas saja.'
        ),
        score: 1,
      },
      {
        text: M(
          '기왕이면 먹고 싶었던 것을 먹는다. 소소한 행복이니까',
          'I get what I have been craving—small joys matter.',
          'せっかくなら飲みたかったもの。小さな幸せ。',
          '既然来了就喝想喝的，小确幸。',
          '既然來了就喝想喝的，小確幸。',
          'Cứ món mình thèm—hạnh phúc nhỏ.',
          'Yang memang pengen—bahagia kecil.'
        ),
        score: 2,
      },
      {
        text: M(
          '제일 맛있어 보이는 것. 가격은 크게 신경 안 쓴다',
          'Whatever looks best—I barely check the price.',
          '一番おいしそうなもの。値段はあまり気にしない。',
          '选看起来最好喝的，价格不太在意。',
          '選看起來最好喝的，價格不太在意。',
          'Cái trông ngon nhất—giá không quan trọng.',
          'Yang paling enak dilihat—harga nomor dua.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 6,
    question: M(
      '쇼핑 후 집에 왔을 때 드는 생각은?',
      'After shopping, when you get home you think…',
      '買い物の後、家に帰って思うことは？',
      '购物回家后你的想法是？',
      '購物回家後你的想法是？',
      'Sau khi mua sắm về nhà bạn nghĩ gì?',
      'Setelah belanja pulang, pikiranmu?'
    ),
    options: [
      {
        text: M(
          '필요한 것만 샀으니 만족스럽다',
          'I only bought what I needed—I feel good.',
          '必要なものだけ買ったので満足。',
          '只买了需要的，很满足。',
          '只買了需要的，很滿足。',
          'Chỉ mua cần—hài lòng.',
          'Cuma beli yang perlu—puas.'
        ),
        score: 0,
      },
      {
        text: M(
          '대부분 만족하는데 가끔 이게 필요했나 싶은 것이 있다',
          'Mostly satisfied, but sometimes I wonder if I needed that.',
          'だいたい満足だが、たまに「これ必要だった？」となる。',
          '大体满意，但有时怀疑某件是否真的需要。',
          '大體滿意，但有時懷疑某件是否真的需要。',
          'Đa số ổn nhưng thỉnh thoảng tự hỏi có cần không.',
          'Mayoritas oke, kadang ragu perlu atau tidak.'
        ),
        score: 1,
      },
      {
        text: M(
          '사고 나서 잠깐 뿌듯하다가 통장을 보면 아찔하다',
          'Brief pride, then I check my balance and panic.',
          '買った直後は満足、残高を見てヒヤッとする。',
          '买完一时爽，一看余额心慌。',
          '買完一時爽，一看餘額心慌。',
          'Lúc mua sướng, nhìn số dư là hoảng.',
          'Senang dulu, lihat saldo langsung deg-degan.'
        ),
        score: 2,
      },
      {
        text: M(
          '지른 순간의 쾌감이 전부다. 후회는 나중에 한다',
          'The rush at checkout is everything—regret comes later.',
          '買った瞬間の快感がすべて。後悔はあと。',
          '下单那一刻的快感就是全部，后悔以后再说。',
          '下單那一刻的快感就是全部，後悔以後再說。',
          'Sướng lúc checkout là đủ—hối hận sau.',
          'Asyiknya pas checkout—nyesel belakangan.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 7,
    question: M(
      '친구들 사이에서 나의 소비 이미지는?',
      'Among friends, your spending image is…',
      '友人の間で、あなたのお金のイメージは？',
      '在朋友眼中，你的消费形象是？',
      '在朋友眼中，你的消費形象是？',
      'Bạn bè nghĩ về cách bạn tiêu tiền thế nào?',
      'Di mata teman, imagemu soal belanja?'
    ),
    options: [
      {
        text: M(
          '얘는 진짜 안 쓴다. 어떻게 그렇게 참아?',
          'They barely spend—how do they hold back?',
          '本当に使わない。どう我慢してるの？',
          '几乎不花钱，怎么能忍住？',
          '幾乎不花錢，怎麼能忍住？',
          'Chẳng tiêu gì—làm sao nhịn được vậy?',
          'Hampir nggak belanja—kok bisa tahan?'
        ),
        score: 0,
      },
      {
        text: M(
          '적당히 쓰고 적당히 모으는 현실적인 친구',
          'Down-to-earth—spends and saves in balance.',
          '適度に使い、適度に貯める現実的な友だち。',
          '花得省得都适中，很现实。',
          '花得省得都適中，很現實。',
          'Tiêu vừa, tiết kiệm vừa—thực tế.',
          'Belanja hemat seimbang—realistis.'
        ),
        score: 1,
      },
      {
        text: M(
          '좋아하는 건 아낌없이 쓰는 편. 탕진잼 있음',
          'Splurges on what they love—full send energy.',
          '好きなものには惜しみなく。散財ムード。',
          '喜欢的东西舍得花，花钱很爽型。',
          '喜歡的東西捨得花，花錢很爽型。',
          'Thích là chi—kiểu “hết mình”.',
          'Demi yang disuka rela keluar—tipe gas.'
        ),
        score: 2,
      },
      {
        text: M(
          '지름신 강림. 이 친구 또 샀다',
          'Impulse-buy legend—bought something again.',
          '衝動買いの神。この人また買った。',
          '剁手体质，这位朋友又买了。',
          '剁手體質，這位朋友又買了。',
          'Thánh mua đồ—lại tậu nữa rồi.',
          'Raja checkout—belanja lagi.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 8,
    question: M(
      '중고거래 앱을 사용하는 이유는?',
      'Why do you use secondhand marketplace apps?',
      'フリマアプリを使う理由は？',
      '你用二手交易应用主要是因为？',
      '你用二手交易應用主要是因為？',
      'Bạn dùng app đồ cũ vì sao?',
      'Kamu pakai app jual beli bekas karena?'
    ),
    options: [
      {
        text: M(
          '주로 파는 쪽이다. 안 쓰는 물건 정리하고 소득 창출',
          'Mostly selling—declutter and earn a bit.',
          '主に売る。不用品整理と少しの収入。',
          '主要是卖，清闲置还能赚点。',
          '主要是賣，清閒置還能賺點。',
          'Chủ yếu bán—dọn đồ kiếm thêm.',
          'Utamanya jual—beresin barang dapat cuan.'
        ),
        score: 0,
      },
      {
        text: M(
          '사기도 팔기도 한다. 합리적인 거래를 즐긴다',
          'Both buy and sell—I enjoy smart deals.',
          '買うも売るも。お得な取引が好き。',
          '买卖都做，享受划算交易。',
          '買賣都做，享受划算交易。',
          'Mua cũng bán cũng—thích deal hợp lý.',
          'Beli jual—suka transaksi masuk akal.'
        ),
        score: 1,
      },
      {
        text: M(
          '주로 사는 쪽이다. 저렴하게 살 수 있어서 자주 이용한다',
          'Mostly buying—cheap finds, use often.',
          '主に買う。安く手に入るからよく使う。',
          '主要是买，便宜所以常用。',
          '主要是買，便宜所以常用。',
          'Chủ yếu mua—rẻ nên hay dùng.',
          'Utamanya beli—murah jadi sering.'
        ),
        score: 2,
      },
      {
        text: M(
          '중고거래 앱을 쓸 틈이 없다. 사는 속도가 파는 속도보다 빠르다',
          'No time to sell—buying outpaces selling.',
          '売る暇がない。買う方が速い。',
          '没空卖，买得比卖得快。',
          '沒空賣，買得比賣得快。',
          'Không kịp bán—mua nhanh hơn bán.',
          'Nggak sempat jual—beli lebih cepat dari jual.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 9,
    question: M(
      '할인 쿠폰이나 포인트를 어떻게 활용하나요?',
      'How do you use discounts, coupons, and points?',
      '割引クーポンやポイントはどう使う？',
      '你怎么用优惠券和积分？',
      '你怎麼用優惠券和積分？',
      'Bạn dùng mã giảm giá và điểm thế nào?',
      'Kamu pakai kupon diskon dan poin bagaimana?'
    ),
    options: [
      {
        text: M(
          '꼼꼼하게 모아서 최대한 활용한다. 안 쓰면 손해다',
          'I stack and use them fully—not using feels like a loss.',
          '丁寧に貯めて最大活用。使わないと損。',
          '攒着尽量用光，不用就觉得亏。',
          '攢著儘量用光，不用就覺得虧。',
          'Tích và dùng tối đa—không dùng là lỗ.',
          'Kumpulkan dipakai maksimal—nggak pakai rugi.'
        ),
        score: 0,
      },
      {
        text: M(
          '챙길 수 있으면 챙기지만 없어도 크게 아쉽지 않다',
          'I grab them if easy, but I am fine without.',
          '取れるなら取るが、なくても大した損ではない。',
          '有就领，没有也不太可惜。',
          '有就領，沒有也不太可惜。',
          'Có thì lấy, không cũng chẳng tiếc mấy.',
          'Ada diambil, nggak ada juga nggak apa-apa.'
        ),
        score: 1,
      },
      {
        text: M(
          '쿠폰이 있으면 쓰게 되는 지출이 더 많아진다. 쿠폰에 홀린다',
          'Coupons make me spend more—I get baited by deals.',
          'クーポンがあると余計に使う。釣られる。',
          '有券反而花更多，被优惠牵着走。',
          '有券反而花更多，被優惠牽著走。',
          'Có coupon lại tiêu thêm—dính bẫy deal.',
          'Ada kupon malah belanja lebih—ketipu promo.'
        ),
        score: 2,
      },
      {
        text: M(
          '쿠폰 챙기고 있을 시간에 그냥 산다',
          'I would rather just buy than hunt for coupons.',
          'クーポン探す時間がもったいない。すぐ買う。',
          '懒得找券，直接买。',
          '懶得找券，直接買。',
          'Ngại săn coupon—mua luôn.',
          'Malas cari kupon—beli aja.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 10,
    question: M(
      '한 달 예산을 세우고 지키는 편인가요?',
      'Do you set a monthly budget and stick to it?',
      '月の予算を立てて守るタイプ？',
      '你会做月度预算并坚持吗？',
      '你會做月度預算並堅持嗎？',
      'Bạn có lập ngân sách tháng và giữ không?',
      'Kamu buat anggaran bulanan dan menepati?'
    ),
    options: [
      {
        text: M(
          '매달 예산을 세우고 가계부를 꼼꼼하게 쓴다',
          'Yes—budget every month and track spending carefully.',
          '毎月予算を立て、家計簿をきちんとつける。',
          '每月做预算，认真记账。',
          '每月做預算，認真記帳。',
          'Mỗi tháng có ngân sách và ghi chặt chẽ.',
          'Tiap bulan anggaran plus catatan rapi.'
        ),
        score: 0,
      },
      {
        text: M(
          '큰 틀에서 지키려 노력하지만 완벽하게 지키진 못한다',
          'I try to stay in the ballpark, but not perfectly.',
          '大枠では守ろうとするが、完璧ではない。',
          '大体想守住框架，但不完美。',
          '大體想守住框架，但不完美。',
          'Cố giữ khung chung nhưng không hoàn hảo.',
          'Usaha ikut garis besar, tapi nggak sempurna.'
        ),
        score: 1,
      },
      {
        text: M(
          '세우긴 하는데 월말만 되면 무너진다',
          'I set one, but it collapses by month-end.',
          '立てるが、月末には崩れる。',
          '会立预算，但月底就崩。',
          '會立預算，但月底就崩。',
          'Có lập nhưng cuối tháng là vỡ.',
          'Ada anggaran tapi akhir bulan ambruk.'
        ),
        score: 2,
      },
      {
        text: M(
          '예산이요? 그게 무슨 소용인지 모르겠다',
          'Budget? Not sure what that is for.',
          '予算？それが何の役に立つかわからない。',
          '预算？不知道有什么用。',
          '預算？不知道有什麼用。',
          'Ngân sách à? Chẳng hiểu để làm gì.',
          'Anggaran? Nggak ngerti buat apa.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 11,
    question: M(
      '여행을 계획할 때 예산 기준은?',
      'When you plan a trip, budget comes…',
      '旅行を計画するとき、予算は？',
      '规划旅行时，预算怎么定？',
      '規劃旅行時，預算怎麼定？',
      'Khi lên kế hoạch du lịch, ngân sách thế nào?',
      'Saat rencanakan trip, anggaran bagaimana?'
    ),
    options: [
      {
        text: M(
          '예산을 먼저 정하고 그 안에서 최대한 알뜰하게 계획한다',
          'Set the budget first, then plan as thriftily as possible.',
          'まず予算を決め、その中でできるだけ節約プラン。',
          '先定预算，再尽量在范围内省着玩。',
          '先定預算，再儘量在範圍內省著玩。',
          'Chốt ngân sách trước, chơi tiết kiệm trong khung đó.',
          'Anggaran dulu, rencana hemat di dalamnya.'
        ),
        score: 0,
      },
      {
        text: M(
          '적당한 선에서 즐길 수 있는 여행을 계획한다',
          'Plan a trip I can enjoy at a reasonable level.',
          'ちょうどいいラインで楽しめる旅行を計画。',
          '规划在合适范围内能玩得开心的行程。',
          '規劃在合適範圍內能玩得開心的行程。',
          'Lên chuyến vừa vui vừa trong mức hợp lý.',
          'Rencana trip yang asyik tapi masuk akal.'
        ),
        score: 1,
      },
      {
        text: M(
          '하고 싶은 걸 다 정하고 나서 비용을 맞춰본다',
          'List everything I want to do, then try to fit the cost.',
          'やりたいことを全部決めてから費用を合わせる。',
          '先列想做的事，再凑预算。',
          '先列想做的事，再湊預算。',
          'Liệt kê hết việc muốn làm rồi mới cân chi phí.',
          'Daftar keinginan dulu, baru cocokkan biaya.'
        ),
        score: 2,
      },
      {
        text: M(
          '일단 가고 싶은 곳으로 예약부터 한다. 비용은 나중에 해결한다',
          'Book where I want to go first—figure out money later.',
          'とりあえず行きたい場所を予約。お金はあと。',
          '先订想去的地方，钱以后再说。',
          '先訂想去的地方，錢以後再說。',
          'Đặt chỗ trước—tiền tính sau.',
          'Booking dulu—uang belakangan.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 12,
    question: M(
      '지금 내 통장 잔액에 대한 솔직한 생각은?',
      'Honestly, how do you feel about your account balance now?',
      '今の口座残高について正直な気持ちは？',
      '说实话，你现在对账户余额怎么想？',
      '說實話，你現在對帳戶餘額怎麼想？',
      'Thật lòng bạn nghĩ gì về số dư tài khoản?',
      'Jujur, gimana perasaanmu soal saldo rekening sekarang?'
    ),
    options: [
      {
        text: M(
          '계획대로 잘 모으고 있다. 만족스럽다',
          'Saving as planned—I feel good about it.',
          '計画どおり貯められている。満足。',
          '按计划存着，挺满意。',
          '按計畫存著，挺滿意。',
          'Đang tiết kiệm đúng kế hoạch—hài lòng.',
          'Menabung sesuai rencana—puas.'
        ),
        score: 0,
      },
      {
        text: M(
          '더 모으고 싶은데 쉽지 않다. 나름 노력 중이다',
          'I want to save more—it is hard, but I try.',
          'もっと貯めたいが難しい。努力はしている。',
          '想多存点不容易，但在努力。',
          '想多存點不容易，但在努力。',
          'Muốn tiết kiệm thêm khó—đang cố.',
          'Pengin nabung lebih—sulit, tapi usaha.'
        ),
        score: 1,
      },
      {
        text: M(
          '쓰고 싶은 게 너무 많아서 생각보다 덜 모였다',
          'Too many things I want—saved less than I hoped.',
          '使いたいものが多すぎて、思ったより貯まらない。',
          '想买的太多，存得比预期少。',
          '想買的太多，存得比預期少。',
          'Muốn chi quá nhiều—tiết kiệm ít hơn mong đợi.',
          'Keinginan belanja banyak—tabungan di bawah harapan.'
        ),
        score: 2,
      },
      {
        text: M(
          '솔직히 잔액을 자주 확인하기가 무섭다',
          'Honestly, I am scared to check my balance often.',
          '正直、残高を見るのが怖い。',
          '说实话，不太敢常看余额。',
          '說實話，不太敢常看餘額。',
          'Thật ra sợ nhìn số dư thường xuyên.',
          'Jujur takut cek saldo terlalu sering.'
        ),
        score: 3,
      },
    ],
  },
];

export const phase3SpendingPersonalityTypeResults: Phase3SpendingPersonalityTypeResult[] = [
  {
    type: 'Type1',
    emoji: '🏆',
    title: M(
      '한 푼도 못 버리는, 극한 절약 챔피언',
      'Not a penny wasted: the ultimate saver',
      '一銭も無駄にしない、極限の節約チャンピオン',
      '一分不想多花，极限节省冠军',
      '一分不想多花，極限節省冠軍',
      'Không buông đồng nào: bậc thầy tiết kiệm',
      'Tidak ada uang terbuang: juara hemat ekstrem'
    ),
    shortDescription: M(
      '소비에 쾌락을 느끼지 못하는 당신, 통장은 웃고 있습니다.',
      'You rarely feel joy in spending—your balance is smiling.',
      '消費に快感を感じないあなた、口座は笑っています。',
      '你对花钱没什么快感，账户余额却很安心。',
      '你對花錢沒什麼快感，帳戶餘額卻很安心。',
      'Bạn ít thấy sướng khi tiêu—số dư thì đang cười.',
      'Kamu jarang senang belanja—saldomu malah senyum.'
    ),
    description: M(
      '당신은 지출 하나하나를 철저하게 관리하는 극한 절약형입니다. 불필요한 소비는 처음부터 차단하고, 필요한 것만 최저가로 구매합니다. 가계부는 기본이고 쿠폰과 포인트 활용도 빠짐없이 챙깁니다. 주변에서 어떻게 그렇게 참아?라는 말을 자주 듣는 타입입니다. 미래의 나를 위한 준비는 완벽하지만, 현재의 나에게도 가끔은 작은 사치가 필요합니다.',
      'You track every expense—the extreme saver. You block unnecessary spending early and buy needs at the lowest price. Budget tracking, coupons, and points are basics. People often ask how you resist. You are fully set up for future you, but present you may also deserve a small treat now and then.',
      '一つ一つの支出を徹底管理する極限の節約タイプです。不要な消費は最初から遮断し、必要なものだけ最安で。家計簿は当たり前で、クーポンとポイントも漏らしません。「どうやって我慢するの？」とよく言われます。未来の自分への準備は完璧ですが、今の自分にも時には小さなご褒美が必要です。',
      '你会严格管理每一笔支出，是极限节省型。从源头砍掉不必要消费，只以最低价买真正需要的。记账是基本功，优惠券和积分也不会漏。别人常问你怎么忍得住。你为未来的自己准备得很充分，但当下的自己偶尔也值得一点小犒赏。',
      '你會嚴格管理每一筆支出，是極限節省型。從源頭砍掉不必要消費，只以最低價買真正需要的。記帳是基本功，優惠券和積分也不會漏。別人常問你怎麼忍得住。你為未來的自己準備得很充分，但當下的自己偶爾也值得一點小犒賞。',
      'Bạn kiểm soát từng khoản chi—tiết kiệm cực đoan. Chặn chi không cần từ đầu, chỉ mua nhu cầu với giá thấp nhất. Ghi sổ, coupon, điểm là chuyện thường. Người ta hay hỏi làm sao bạn nhịn được. Bạn chuẩn bị cho tương lai rất tốt, nhưng bản thân hiện tại đôi khi cũng xứng một phần thưởng nhỏ.',
      'Kamu mengontrol tiap pengeluaran—penghemat ekstrem. Blokir yang tidak perlu, beli kebutuhan dengan harga terendah. Catatan, kupon, poin rutin dilakukan. Orang sering bertanya bagaimana kamu menahan diri. Kamu siap untuk masa depan, tapi diri sekarang kadang juga pantas sedikit reward.'
    ),
    spendingDna: M(
      '소비 DNA: 절약 챔피언 (Ultra Saver)',
      'Spending DNA: Ultra Saver',
      '消費DNA：ウルトラセーバー',
      '消费 DNA：极限节省者',
      '消費 DNA：極限節省者',
      'DNA chi tiêu: Siêu tiết kiệm',
      'DNA belanja: Ultra Saver'
    ),
    keywords: M(
      '최저가, 가계부, 비상금, 절제',
      'Lowest price, budgeting, emergency fund, discipline',
      '最安値、家計簿、緊急資金、自制',
      '最低价、记账、应急金、自律',
      '最低價、記帳、應急金、自律',
      'Giá thấp nhất, sổ chi tiêu, quỹ khẩn cấp, kỷ luật',
      'Harga terendah, buku keuangan, dana darurat, disiplin'
    ),
    strength: M(
      '저축률 최상위, 재정 안정성 탁월',
      'Top-tier saving rate, strong financial stability',
      '貯蓄率トップクラス、財務安定性が高い',
      '储蓄率顶尖，财务稳定性强',
      '儲蓄率頂尖，財務穩定性強',
      'Tỷ lệ tiết kiệm cao, tài chính vững',
      'Tingkat tabungan tinggi, finansial stabil'
    ),
    weakness: M(
      '가끔 지나친 절약으로 삶의 질이 낮아질 수 있음',
      'Extreme thrift can sometimes lower quality of life',
      '節約しすぎで生活の質が下がることも',
      '有时过度节省会降低生活品质',
      '有時過度節省會降低生活品質',
      'Đôi khi tiết kiệm quá làm giảm chất lượng sống',
      'Kadang hemat berlebihan menurunkan kualitas hidup'
    ),
    prescription: M(
      '한 달에 한 번, 나만을 위한 소비를 예산에 넣어보세요. 행복도 투자입니다.',
      'Once a month, budget a purchase just for you—happiness is an investment too.',
      '月に一度だけ、「自分のための支出」を予算に入れてみて。幸福も投資です。',
      '每月一次在预算里留一笔“只为自己”的花费，快乐也是投资。',
      '每月一次在預算裡留一筆「只為自己」的花費，快樂也是投資。',
      'Mỗi tháng một lần, hãy để trong ngân sách một khoản chỉ cho bạn—hạnh phúc cũng là đầu tư.',
      'Sekali sebulan, sisihkan anggaran khusus untuk dirimu sendiri—bahagia juga investasi.'
    ),
    goodMatch: M(
      'Type 2 (균형을 배울 수 있음)',
      'Type 2 (can learn balance)',
      'Type 2（バランスを学べる）',
      'Type 2（能学到平衡）',
      'Type 2（能學到平衡）',
      'Type 2 (học được sự cân bằng)',
      'Type 2 (bisa belajar keseimbangan)'
    ),
    badMatch: M(
      'Type 8 (소비 방식이 너무 달라 같이 쇼핑 불가)',
      'Type 8 (spending styles clash—hard to shop together)',
      'Type 8（価値観が合わず一緒に買い物しづらい）',
      'Type 8（消费方式差太多，难一起逛街）',
      'Type 8（消費方式差太多，難一起逛街）',
      'Type 8 (khác quá—khó đi shopping cùng)',
      'Type 8 (terlalu beda—susah belanja bareng)'
    ),
    shareTypeName: M(
      '극한 절약 챔피언',
      'Ultimate Saver',
      '極限節約チャンピオン',
      '极限节省冠军',
      '極限節省冠軍',
      'Bậc thầy tiết kiệm',
      'Juara hemat ekstrem'
    ),
  },
  {
    type: 'Type2',
    emoji: '📊',
    title: M(
      '계획 있게 쓰고 모으는, 재정 모범생',
      'Spend with a plan, save steady: the model student',
      '計画的に使い貯める、お金の模範生',
      '有计划地花与存，理财模范生',
      '有計畫地花與存，理財模範生',
      'Chi có kế hoạch, tiết kiệm đều: học sinh gương mẫu',
      'Belanja terencana, nabung rapi: murid teladan finansial'
    ),
    shortDescription: M(
      '월급이 어디로 가는지 정확히 알고 있는 당신.',
      'You know exactly where your paycheck goes.',
      '給料の行き先を正確に把握しているあなた。',
      '你很清楚工资都花去了哪里。',
      '你很清楚薪水都花去了哪裡。',
      'Bạn biết rõ tiền lương đi đâu.',
      'Kamu tahu persis kemana gaji mengalir.'
    ),
    description: M(
      '당신은 소비와 저축의 균형을 가장 잘 잡는 타입입니다. 필요한 것은 사되 충동구매는 잘 하지 않고, 예산 안에서 합리적으로 소비합니다. 재정 모범생이라는 소리를 들을 만한 타입으로, 갑작스러운 지출이 생겨도 비상금으로 대처할 수 있는 여유가 있습니다. 주변의 재정 고민을 들어주는 역할을 자주 합니다.',
      'You balance spending and saving best. You buy what you need, rarely impulse-buy, and spend rationally within budget. People might call you a finance role model—you can handle surprise costs with an emergency cushion. Friends often vent money worries to you.',
      '消費と貯蓄のバランスが最も上手なタイプです。必要なものは買うが衝動買いは少なく、予算内で合理的に。お金の模範生と言われてもおかしくなく、突発支出も緊急資金でカバーできる余裕があります。周りの金銭の悩みを聞く役目もよく担います。',
      '你最会平衡消费与储蓄。该买的会买，很少冲动消费，在预算内理性花钱。称得上理财模范生，突发支出也能用应急金应对。朋友常找你聊钱的事。',
      '你最會平衡消費與儲蓄。該買的會買，很少衝動消費，在預算內理性花錢。稱得上理財模範生，突發支出也能用應急金應對。朋友常找你聊錢的事。',
      'Bạn cân bằng chi tiêu và tiết kiệm tốt nhất. Mua đúng nhu cầu, ít mua ngẫu hứng, chi trong ngân sách. Có thể gọi là gương mẫu tài chính—chi phí bất ngờ vẫn gánh được nhờ quỹ dự phòng. Bạn bè hay tâm sự chuyện tiền với bạn.',
      'Kamu menyeimbangkan belanja dan tabungan dengan baik. Beli yang perlu, jarang impulsif, racional dalam anggaran. Layak disebut teladan keuangan—biaya mendadak masih tertampung dari dana darurat. Teman sering curhat soal uang ke kamu.'
    ),
    spendingDna: M(
      '소비 DNA: 재정 모범생 (Balanced Spender)',
      'Spending DNA: Balanced Spender',
      '消費DNA：バランス型スペンダー',
      '消费 DNA：平衡型消费者',
      '消費 DNA：平衡型消費者',
      'DNA chi tiêu: Người chi tiêu cân bằng',
      'DNA belanja: Balanced Spender'
    ),
    keywords: M(
      '균형, 계획, 합리적, 안정',
      'Balance, planning, rational, stability',
      'バランス、計画、合理的、安定',
      '平衡、计划、理性、稳定',
      '平衡、計畫、理性、穩定',
      'Cân bằng, kế hoạch, hợp lý, ổn định',
      'Keseimbangan, rencana, rasional, stabil'
    ),
    strength: M(
      '충동구매 없음, 안정적인 재정 관리',
      'Few impulse buys; steady money management',
      '衝動買いが少ない、安定した家計管理',
      '少冲动消费，财务管理稳健',
      '少衝動消費，財務管理穩健',
      'Ít mua ngẫu hứng, quản lý tài chính vững',
      'Sedikit belanja impulsif, kelola uang stabil'
    ),
    weakness: M(
      '너무 신중해서 원하는 것을 즐기지 못할 때가 있음',
      'Sometimes too cautious to enjoy what you want',
      '慎重すぎて、本当に欲しいものを楽しめないことも',
      '有时太谨慎，反而享受不到真正想要的',
      '有時太謹慎，反而享受不到真正想要的',
      'Đôi khi quá thận trọng nên không tận hưởng được điều mình muốn',
      'Kadang terlalu hati-hati sampai tidak menikmati yang diinginkan'
    ),
    prescription: M(
      '지금 잘 하고 있어요. 원하는 것에 조금 더 과감하게 써보는 연습도 해보세요.',
      'You are doing great. Try practicing spending a bit more boldly on things you truly want.',
      '今のやり方で十分です。本当に欲しいものには、もう少し勇気を出して使う練習も。',
      '你做得很好。也可以练习在真正想要的东西上稍微大方一点。',
      '你做得很好。也可以練習在真正想要的東西上稍微大方一點。',
      'Bạn đang làm tốt rồi. Thử luyện chi hơi mạnh tay hơn cho thứ bạn thật sự muốn.',
      'Kamu sudah bagus. Coba latih belanja sedikit lebih berani untuk hal yang benar-benar kamu mau.'
    ),
    goodMatch: M(
      'Type 3 (현실적 조언을 해줄 수 있음)',
      'Type 3 (gives practical advice)',
      'Type 3（現実的なアドバイスができる）',
      'Type 3（能给务实建议）',
      'Type 3（能給務實建議）',
      'Type 3 (cho lời khuyên thực tế)',
      'Type 3 (bisa kasih saran praktis)'
    ),
    badMatch: M(
      'Type 7 (통제 안 되는 소비를 보면 스트레스받음)',
      'Type 7 (uncontrolled spending stresses you out)',
      'Type 7（自制できない消費を見るとストレス）',
      'Type 7（看别人乱花会很有压力）',
      'Type 7（看別人亂花會很有壓力）',
      'Type 7 (thấy tiêu mất kiểm soát là stress)',
      'Type 7 (lihat belanja liar bikin stres)'
    ),
    shareTypeName: M(
      '재정 모범생',
      'Model Saver',
      'お金の模範生',
      '理财模范生',
      '理財模範生',
      'Gương mẫu tài chính',
      'Teladan keuangan'
    ),
  },
  {
    type: 'Type3',
    emoji: '🔍',
    title: M(
      '가성비를 사랑하는, 알뜰 쇼핑 장인',
      'Value-for-money lover: the smart shopper',
      'コスパを愛する、賢い買い物の達人',
      '热爱性价比，精明购物达人',
      '熱愛性價比，精明購物達人',
      'Yêu cảm giác hời: bậc thầy mua sắm thông minh',
      'Suka value terbaik: ahli belanja cerdas'
    ),
    shortDescription: M(
      '같은 돈으로 최대한 많이, 최대한 잘 사는 것이 목표입니다.',
      'Your goal: get the most—and the best—for the same money.',
      '同じお金で最大限、できるだけ良いものを買うのが目標。',
      '目标是用同样的钱买到最多、最好。',
      '目標是用同樣的錢買到最多、最好。',
      'Mục tiêu: cùng số tiền mua được nhiều và tốt nhất.',
      'Tujuan: dengan uang sama dapat sebanyak dan sebaik mungkin.'
    ),
    description: M(
      '당신은 쓰는 것은 쓰되, 절대 바가지 쓰는 법이 없는 알뜰 소비형입니다. 쿠폰, 세일, 최저가 비교는 기본이고 중고거래도 적극 활용합니다. 같은 제품이라도 10% 더 싸게 사는 것에서 쾌감을 느끼는 타입입니다. 소비 자체를 즐기면서도 합리적으로 관리하는 능력이 뛰어납니다. 단, 세일에 혹해서 필요 없는 것을 사게 되는 함정을 주의하세요.',
      'You spend when needed but never overpay—the savvy type. Coupons, sales, price checks, and secondhand deals are your toolkit. Saving even 10% on the same item feels great. You enjoy shopping yet stay rational. Watch the trap of buying things you do not need just because they are on sale.',
      '使うときは使うが、ぼったくられない賢いタイプです。クーポン、セール、最安値、フリマはお手の物。同じ商品でも10%安く買えた快感を味わいます。買い物を楽しみつつ合理的に管理するのが得意。ただしセールに釣られて不要品を買う落とし穴には注意。',
      '该花会花，但绝不挨宰，是精明消费者。优惠券、打折、比价、二手都是你的工具。同款便宜一截就很爽。你享受购物又能理性管理。小心被促销诱惑买不需要的东西。',
      '該花會花，但絕不挨宰，是精明消費者。優惠券、打折、比價、二手都是你的工具。同款便宜一截就很爽。你享受購物又能理性管理。小心被促銷誘惑買不需要的東西。',
      'Bạn chi khi cần nhưng không chịu mua đắt—kiểu thông minh. Coupon, sale, so giá, đồ cũ đều dùng. Tiết được 10% cùng món cũng sướng. Bạn vừa thích mua vừa quản lý hợp lý. Cẩn thận bẫy mua đồ không cần vì sale.',
      'Kamu belanja saat perlu tapi tidak mau kena mahal—cerdas. Kupon, diskon, banding harga, bekas jadi andalan. Hemat 10% untuk barang sama sudah puas. Kamu nikmati belanja tapi tetap rasional. Hati-hati jebakan beli barang tidak perlu karena promo.'
    ),
    spendingDna: M(
      '소비 DNA: 알뜰 쇼핑 장인 (Smart Shopper)',
      'Spending DNA: Smart Shopper',
      '消費DNA：スマートショッパー',
      '消费 DNA：精明购物者',
      '消費 DNA：精明購物者',
      'DNA chi tiêu: Người mua thông minh',
      'DNA belanja: Smart Shopper'
    ),
    keywords: M(
      '가성비, 세일, 쿠폰, 최저가',
      'Value, sales, coupons, lowest price',
      'コスパ、セール、クーポン、最安値',
      '性价比、促销、优惠券、最低价',
      '性價比、促銷、優惠券、最低價',
      'Giá trị, sale, coupon, giá thấp nhất',
      'Nilai, diskon, kupon, harga terendah'
    ),
    strength: M(
      '합리적 소비, 절약하면서도 만족도 높음',
      'Rational spending—save money and stay satisfied',
      '合理的な消費、節約しつつ満足度も高い',
      '消费理性，省钱也不失满足感',
      '消費理性，省錢也不失滿足感',
      'Chi hợp lý—tiết kiệm mà vẫn thỏa mãn',
      'Belanja rasional—hemat tapi tetap puas'
    ),
    weakness: M(
      '세일이 오히려 더 많은 지출을 유발하는 역설',
      'The paradox: sales can make you spend more',
      'セールのほうが支出を増やすパラドックス',
      '悖论：促销反而让你花更多',
      '悖論：促銷反而讓你花更多',
      'Nghịch lý: sale lại khiến chi nhiều hơn',
      'Paradoks: diskon malah bikin belanja lebih besar'
    ),
    prescription: M(
      '세일이라도 필요 없는 건 안 사는 것이 진짜 절약. 장바구니 비우기 연습을 해보세요.',
      'True saving is not buying what you do not need—even on sale. Practice clearing your cart.',
      'セールでも不要なものは買わないのが本当の節約。カゴを空にする練習を。',
      '真省钱是不买不需要的东西，哪怕打折。练习清空购物车。',
      '真省錢是不買不需要的東西，哪怕打折。練習清空購物車。',
      'Tiết kiệm thật là không mua thứ không cần—dù sale. Luyện xóa giỏ hàng.',
      'Hemat sejati: tidak beli yang tidak perlu—meski diskon. Latih kosongkan keranjang.'
    ),
    goodMatch: M(
      'Type 2 (함께 쇼핑하면 서로 절제 효과)',
      'Type 2 (shopping together helps both stay in check)',
      'Type 2（一緒に買い物するとお互いに抑制）',
      'Type 2（一起逛街能互相克制）',
      'Type 2（一起逛街能互相克制）',
      'Type 2 (đi shopping cùng giúp nhau kiềm chế)',
      'Type 2 (belanja bareng saling mengingatkan)'
    ),
    badMatch: M(
      'Type 6 (충동구매를 말릴 자신이 없음)',
      'Type 6 (hard to talk them out of impulse buys)',
      'Type 6（衝動買いを止める自信がない）',
      'Type 6（很难劝住冲动消费）',
      'Type 6（很難勸住衝動消費）',
      'Type 6 (không tự tin can ngăn mua ngẫu hứng)',
      'Type 6 (sulit menahan belanja impulsif mereka)'
    ),
    shareTypeName: M(
      '알뜰 쇼핑 장인',
      'Smart Shopper',
      '賢い買い物の達人',
      '精明购物达人',
      '精明購物達人',
      'Người mua thông minh',
      'Ahli belanja cerdas'
    ),
  },
  {
    type: 'Type4',
    emoji: '✨',
    title: M(
      '경험에 아낌없이 투자하는, 가치소비 추구형',
      'Invests freely in experiences: the value spender',
      '体験に惜しみなく投資する、価値消費タイプ',
      '舍得为体验花钱，追求价值消费型',
      '捨得為體驗花錢，追求價值消費型',
      'Đầu tư mạnh cho trải nghiệm: kiểu tiêu theo giá trị',
      'Investasi ke pengalaman: tipe nilai'
    ),
    shortDescription: M(
      '물건보다 경험에, 가격보다 가치에 돈을 씁니다.',
      'Money goes to experiences over things, and to value over price.',
      'モノより体験に、値段より価値にお金を使う。',
      '钱花在体验上多于物品，花在价值上多于价格。',
      '錢花在體驗上多於物品，花在價值上多於價格。',
      'Tiền cho trải nghiệm hơn đồ đạc, cho giá trị hơn giá.',
      'Uang untuk pengalaman bukan barang, untuk nilai bukan harga.'
    ),
    description: M(
      '당신은 단순히 물건을 사는 것보다 여행, 공연, 맛집, 취미처럼 삶을 풍요롭게 하는 경험에 기꺼이 지갑을 엽니다. 비싸더라도 가치 있다고 판단하면 망설임 없이 삽니다. 소비할 때의 기준이 명확하고, 자신이 무엇을 위해 돈을 쓰는지 잘 알고 있는 타입입니다. 물질적인 것보다 기억에 남는 경험을 추구합니다.',
      'You open your wallet for experiences that enrich life—travel, shows, food spots, hobbies. If it feels worth it, price does not stop you. Your spending rules are clear; you know what you pay for. You chase memories more than material things.',
      '旅行、ライブ、グルメ、趣味など、人生を豊かにする体験にお金を惜しみません。高くても価値があると思えば迷わず。消費の基準がはっきりしており、何のために使うか自覚があります。モノより記憶に残る体験を求めます。',
      '你更愿意为丰富生活的体验买单——旅行、演出、美食、爱好。只要觉得值，价格不是阻碍。消费标准清晰，清楚钱花在什么上。比起物质更追求难忘的体验。',
      '你更願意為豐富生活的體驗買單——旅行、演出、美食、愛好。只要覺得值，價格不是阻礙。消費標準清晰，清楚錢花在什麼上。比起物質更追求難忘的體驗。',
      'Bạn sẵn sàng chi cho trải nghiệm làm đời phong phú—du lịch, show, ăn uống, sở thích. Đắt nhưng đáng là mua ngay. Tiêu có nguyên tắc rõ, biết tiền vì đâu. Theo đuổi kỷ niệm hơn đồ vật.',
      'Kamu rela keluar uang untuk pengalaman yang memperkaya hidup—travel, konser, kuliner, hobi. Mahal tapi worth langsung ambil. Aturan belanja jelas, tahu untuk apa uangnya. Kejar memori, bukan barang.'
    ),
    spendingDna: M(
      '소비 DNA: 가치소비 추구형 (Experience Investor)',
      'Spending DNA: Experience Investor',
      '消費DNA：体験投資型',
      '消费 DNA：体验投资型',
      '消費 DNA：體驗投資型',
      'DNA chi tiêu: Đầu tư trải nghiệm',
      'DNA belanja: Experience Investor'
    ),
    keywords: M(
      '경험, 가치, 취향, 투자',
      'Experience, value, taste, investment',
      '体験、価値、趣味、投資',
      '体验、价值、品味、投资',
      '體驗、價值、品味、投資',
      'Trải nghiệm, giá trị, gu, đầu tư',
      'Pengalaman, nilai, selera, investasi'
    ),
    strength: M(
      '소비 후 만족도 높음, 삶의 질 향상',
      'High satisfaction after spending; better quality of life',
      '消費後の満足度が高く、QOL向上',
      '消费后满足感高，生活品质提升',
      '消費後滿足感高，生活品質提升',
      'Sau khi tiêu vẫn thỏa mãn—nâng chất lượng sống',
      'Setelah belanja puas—hidup lebih berkualitas'
    ),
    weakness: M(
      '가치 있다는 기준이 넓어지면 지출이 걷잡을 수 없이 커질 수 있음',
      'If “worth it” gets too broad, spending can balloon',
      '「価値がある」の幅が広がると支出が膨らみやすい',
      '若“值得”的标准变宽，支出可能失控',
      '若「值得」的標準變寬，支出可能失控',
      'Nếu chuẩn “đáng” quá rộng, chi tiêu có thể phình to',
      'Kalau standar “worth it” melebar, pengeluaran bisa membengkak'
    ),
    prescription: M(
      '경험 예산을 따로 만들어보세요. 경험도 계획하면 더 알차게 즐길 수 있습니다.',
      'Set a separate experience budget—planned fun feels even richer.',
      '体験用の予算を別に。計画するとより濃く楽しめます。',
      '单独设一笔“体验预算”，有计划地玩更尽兴。',
      '單獨設一筆「體驗預算」，有計畫地玩更盡興。',
      'Tách ngân sách cho trải nghiệm—có kế hoạch sẽ vui hơn.',
      'Anggaran khusus pengalaman—direncanakan lebih nikmat.'
    ),
    goodMatch: M(
      'Type 5 (함께 좋은 경험을 나눌 수 있음)',
      'Type 5 (can share great experiences together)',
      'Type 5（一緒に良い体験を分かち合える）',
      'Type 5（能一起分享好体验）',
      'Type 5（能一起分享好體驗）',
      'Type 5 (chia sẻ trải nghiệm hay cùng nhau)',
      'Type 5 (bagi pengalaman seru bareng)'
    ),
    badMatch: M(
      'Type 1 (소비 철학이 너무 달라 같이 다니면 불편함)',
      'Type 1 (money values clash—awkward to hang out)',
      'Type 1（価値観が合わず一緒にいづらい）',
      'Type 1（消费观差太多，一起玩会别扭）',
      'Type 1（消費觀差太多，一起玩會彆扭）',
      'Type 1 (khác quan điểm tiền—khó đi cùng)',
      'Type 1 (beda filosofi uang—canggung bareng)'
    ),
    shareTypeName: M(
      '가치소비 추구형',
      'Value Spender',
      '価値消費タイプ',
      '价值消费型',
      '價值消費型',
      'Kiểu tiêu theo giá trị',
      'Tipe nilai'
    ),
  },
  {
    type: 'Type5',
    emoji: '🎉',
    title: M(
      '지금 이 순간이 중요한, 현재 지향 소비형',
      'Here and now matters: the present-focused spender',
      '今この瞬間が大事、現在志向の消費タイプ',
      '当下最重要，活在现在的消费型',
      '當下最重要，活在現在的消費型',
      'Ưu tiên hiện tại: kiểu chi tiêu “sống hết mình”',
      'Utamakan sekarang: tipe belanja fokus momen'
    ),
    shortDescription: M(
      '미래도 중요하지만 지금 행복한 게 먼저입니다.',
      'The future matters—but happiness today comes first.',
      '未来も大事だけど、今の幸せが先。',
      '未来也重要，但当下的快乐优先。',
      '未來也重要，但當下的快樂優先。',
      'Tương lai cũng quan trọng nhưng hạnh phúc hiện tại trước.',
      'Masa depan penting, tapi bahagia sekarang dulu.'
    ),
    description: M(
      '당신은 현재의 즐거움과 행복을 위해 기꺼이 지갑을 여는 타입입니다. 내일보다 오늘, 저축보다 지금 갖고 싶은 것. 절약이 미덕이라는 것은 알지만 참는 것보다 즐기는 것을 선택하는 경우가 많습니다. 소비할 때의 순간적인 쾌감과 만족감이 크지만, 월말이 다가올수록 살짝 아찔해지는 경험도 자주 합니다.',
      'You gladly spend for today’s joy and happiness. Today over tomorrow; what you want now over saving. You know thrift is good, but you often choose fun over restraint. The rush feels great, yet month-end can get a little scary.',
      '今の楽しさと幸せのために惜しみなく使うタイプです。明日より今日、貯金より今欲しいもの。節約は美徳と分かっていても、我慢より楽しむを選びがち。瞬間の快感は大きいが、月末にヒヤッとすることも。',
      '你愿意为当下的快乐掏钱。明天不如今天，存钱不如现在想要的。你知道该省，但常常选享受而非忍耐。花钱当下很爽，但月底常会心里一紧。',
      '你願意為當下的快樂掏錢。明天不如今天，存錢不如現在想要的。你知道該省，但常常選享受而非忍耐。花錢當下很爽，但月底常會心裡一緊。',
      'Bạn sẵn sàng chi cho niềm vui hiện tại. Hôm nay hơn ngày mai; thứ muốn ngay hơn tiết kiệm. Biết tiết kiệm tốt nhưng thường chọn vui. Lúc tiêu sướng nhưng cuối tháng đôi khi hồi hộp.',
      'Kamu rela belanja untuk kesenangan sekarang. Hari ini dulu, nabung belakangan. Tahu hemat bagus tapi sering pilih senang. Pas belanja asyik, akhir bulan kadang deg-degan.'
    ),
    spendingDna: M(
      '소비 DNA: 현재 지향 소비형 (YOLO Spender)',
      'Spending DNA: YOLO Spender',
      '消費DNA：今を生きる型（YOLO）',
      '消费 DNA：活在当下型',
      '消費 DNA：活在當下型',
      'DNA chi tiêu: Sống cho hiện tại',
      'DNA belanja: YOLO'
    ),
    keywords: M(
      '현재, 즐거움, 행복, 순간',
      'Now, fun, happiness, the moment',
      '今、楽しさ、幸福、瞬間',
      '当下、快乐、幸福、瞬间',
      '當下、快樂、幸福、瞬間',
      'Hiện tại, vui, hạnh phúc, khoảnh khắc',
      'Sekarang, seru, bahagia, momen'
    ),
    strength: M(
      '소비 만족도 높음, 삶의 즐거움을 놓치지 않음',
      'High spending satisfaction—you do not miss life’s fun',
      '消費満足度が高く、楽しみを逃さない',
      '消费满足感高，不轻易错过生活乐趣',
      '消費滿足感高，不輕易錯過生活樂趣',
      'Thỏa mãn khi tiêu—không bỏ lỡ niềm vui',
      'Puas belanja—tak melewatkan kesenangan hidup'
    ),
    weakness: M(
      '미래 대비가 부족해질 수 있음, 월말 재정 압박',
      'Future planning can slip; end-of-month money stress',
      '将来備えが薄れがち、月末の金欠プレッシャー',
      '未来储备可能不足，月底会有经济压力',
      '未來儲備可能不足，月底會有經濟壓力',
      'Dự phòng tương lai có thể yếu—cuối tháng căng',
      'Tabungan masa depan kurang—akhir bulan tekanan'
    ),
    prescription: M(
      '월급날 저축 자동이체를 먼저 설정해보세요. 남은 돈으로 마음껏 즐기면 됩니다.',
      'On payday, set auto-transfers to savings first—then enjoy what is left.',
      '給料日に先に自動貯蓄を設定。残りで思う存分楽しむ。',
      '发薪日先设自动储蓄，剩下的再尽情花。',
      '發薪日先設自動儲蓄，剩下的再盡情花。',
      'Ngày lương cố định chuyển tự động vào tiết kiệm trước—phần còn lại chi thoải mái.',
      'Hari gaji transfer otomatis ke tabungan dulu—sisanya silakan senang-senang.'
    ),
    goodMatch: M(
      'Type 4 (함께 현재를 즐기는 소비를 나눌 수 있음)',
      'Type 4 (share “live in the moment” spending)',
      'Type 4（今を楽しむ消費を分かち合える）',
      'Type 4（能一起享受当下型消费）',
      'Type 4（能一起享受當下型消費）',
      'Type 4 (cùng tiêu kiểu tận hưởng hiện tại)',
      'Type 4 (bagi gaya nikmati momen)'
    ),
    badMatch: M(
      'Type 1 (소비를 막으려는 친구가 제일 스트레스)',
      'Type 1 (friends who curb your spending stress you most)',
      'Type 1（節約を強いる友人が一番ストレス）',
      'Type 1（爱拦你花钱的朋友最让你有压力）',
      'Type 1（愛攔你花錢的朋友最讓你有壓力）',
      'Type 1 (bạn hay cản chi tiêu làm bạn stress nhất)',
      'Type 1 (teman yang melarang belanja paling bikin stres)'
    ),
    shareTypeName: M(
      '현재 지향 소비형',
      'Present-Focused',
      '現在志向タイプ',
      '活在当下型',
      '活在當下型',
      'Sống hiện tại',
      'Fokus sekarang'
    ),
  },
  {
    type: 'Type6',
    emoji: '🛍️',
    title: M(
      '사는 것이 힐링인, 쇼핑 테라피 의존형',
      'Shopping is healing: retail therapy type',
      '買い物が癒し、ショッピングセラピー依存型',
      '买东西是疗愈，购物疗法依赖型',
      '買東西是療癒，購物療法依賴型',
      'Mua sắm là liều thuốc: nghiện retail therapy',
      'Belanja obat stres: tipe retail therapy'
    ),
    shortDescription: M(
      '스트레스받으면 지갑이 열립니다. 쇼핑이 제일 좋은 치료제입니다.',
      'Stress opens your wallet—shopping feels like the best medicine.',
      'ストレスで財布が開く。ショッピングが最高の治療。',
      '一有压力就想花钱，购物像最好的药。',
      '一有壓力就想花錢，購物像最好的藥。',
      'Căng là mở ví—shopping như thuốc hay nhất.',
      'Stres dompet kebuka—belanja obat terbaik.'
    ),
    description: M(
      '기쁠 때도 사고, 슬플 때도 사고, 심심할 때도 삽니다. 감정 상태와 소비가 직결되어 있는 타입입니다. 사는 순간의 쾌감과 택배가 도착했을 때의 설렘이 크지만, 통장을 보는 순간 현실로 돌아옵니다. 소비가 감정 해소의 주된 수단이 된 상태라면, 다른 감정 해소 방법을 함께 찾아보는 것이 필요합니다.',
      'You shop when happy, sad, or bored—emotions and spending are tightly linked. Checkout thrills and package-day excitement feel huge, then reality hits when you check your balance. If shopping is your main emotional outlet, it helps to build other ways to feel better.',
      '嬉しいときも悲しいときも暇なときも買う。感情と支出が直結するタイプです。買う瞬間の快感と荷物到着のワクワクは大きいが、残高を見ると現実に戻ります。感情処理が買い物頼みなら、他の発散法も探すとよいでしょう。',
      '开心也买、难过也买、无聊也买，情绪和花钱绑得很紧。下单和收快递很爽，一看余额又清醒。若购物成了主要情绪出口，值得一起找其他纾压方式。',
      '開心也買、難過也買、無聊也買，情緒和花錢綁得很緊。下單和收快遞很爽，一看餘額又清醒。若購物成了主要情緒出口，值得一起找其他紓壓方式。',
      'Vui buồn chán cũng mua—cảm xúc gắn chặt với chi. Sướng lúc checkout và khi nhận hàng, nhìn số dư là tỉnh. Nếu shopping là cách xả cảm xúc chính, hãy tìm thêm cách khác.',
      'Senang sedih bosan juga beli—emosi dan uang nyatu. Asyik saat checkout dan paket datang, lihat saldo sadar. Kalau belanja jadi pelampiasan utama, cari cara lain.'
    ),
    spendingDna: M(
      '소비 DNA: 쇼핑 테라피 의존형 (Retail Therapist)',
      'Spending DNA: Retail Therapist',
      '消費DNA：ショッピングセラピー型',
      '消费 DNA：购物疗法型',
      '消費 DNA：購物療法型',
      'DNA chi tiêu: Retail therapy',
      'DNA belanja: Retail therapy'
    ),
    keywords: M(
      '충동, 감정 소비, 택배 설렘, 순간 쾌감',
      'Impulse, emotional spending, delivery joy, instant rush',
      '衝動、感情消費、配送ワクワク、瞬間の快感',
      '冲动、情绪消费、收快递的兴奋、当下快感',
      '衝動、情緒消費、收快遞的興奮、當下快感',
      'Xúc động, tiêu theo cảm xúc, háo hức nhận hàng',
      'Impuls, belanja emosi, senang paket datang'
    ),
    strength: M(
      '소비에서 즐거움을 잘 찾음',
      'You find joy in spending easily',
      '消費から楽しみを見つけるのが上手',
      '很容易从消费里找到快乐',
      '很容易從消費裡找到快樂',
      'Dễ tìm niềm vui khi tiêu',
      'Mudah senang dari belanja'
    ),
    weakness: M(
      '감정적 소비로 인한 불필요한 지출 과다, 후회 반복',
      'Emotional buys pile up; regret loops repeat',
      '感情買いで不要支出が増え、後悔のループ',
      '情绪消费导致不必要支出，反复后悔',
      '情緒消費導致不必要支出，反覆後悔',
      'Tiêu theo cảm xúc—chi thừa và hối tiếc lặp lại',
      'Belanja emosi—pengeluaran berlebih dan menyesal'
    ),
    prescription: M(
      '쇼핑 전 24시간 룰을 적용해보세요. 하루 지나도 사고 싶으면 그때 사세요.',
      'Try a 24-hour rule before buying—if you still want it tomorrow, go for it.',
      '購入前に24時間ルール。翌日も欲しければその時買う。',
      '购物前试试24小时规则，第二天还想再买。',
      '購物前試試24小時規則，第二天還想再買。',
      'Quy tắc 24h trước khi mua—mai vẫn muốn thì mua.',
      'Aturan 24 jam sebelum beli—besok masih mau, baru ambil.'
    ),
    goodMatch: M(
      'Type 5 (서로의 소비를 이해해줌)',
      'Type 5 (gets your spending habits)',
      'Type 5（お互いの消費を理解し合える）',
      'Type 5（能理解彼此的消费方式）',
      'Type 5（能理解彼此的消費方式）',
      'Type 5 (hiểu cách nhau tiêu)',
      'Type 5 (paham pola belanja satu sama lain)'
    ),
    badMatch: M(
      'Type 1 (소비할 때마다 눈치가 보임)',
      'Type 1 (you feel judged every time you spend)',
      'Type 1（使うたびに気を遣わされる）',
      'Type 1（一花钱就感觉被盯着）',
      'Type 1（一花錢就感覺被盯著）',
      'Type 1 (tiêu là thấy bị soi)',
      'Type 1 (belanja dikomentari terus)'
    ),
    shareTypeName: M(
      '쇼핑 테라피 의존형',
      'Retail Therapy',
      'ショッピングセラピー型',
      '购物疗法型',
      '購物療法型',
      'Retail therapy',
      'Terapi belanja'
    ),
  },
  {
    type: 'Type7',
    emoji: '😬',
    title: M(
      '계획은 거창하고 실천은 글쎄, 의지력 부족 충동파',
      'Big plans, weak follow-through: the impulsive planner',
      '計画は立派、実行は微妙—意志薄弱な衝動タイプ',
      '计划喊得响，执行靠随缘，意志力薄弱的冲动派',
      '計畫喊得響，執行靠隨緣，意志力薄弱的衝動派',
      'Kế hoạch hoành tráng, làm được ít—bản năng xung động',
      'Rencana megah, eksekusi lemah—impulsif'
    ),
    shortDescription: M(
      '예산을 세우는 나와, 예산을 무너뜨리는 나가 매달 싸웁니다.',
      'Every month, “budget me” fights “broke me.”',
      '毎月、「予算の私」と「破る私」が戦う。',
      '每个月，“做预算的我”和“破功的我”都在打架。',
      '每個月，「做預算的我」和「破功的我」都在打架。',
      'Mỗi tháng “mình ngân sách” đánh nhau với “mình phá ngân sách”.',
      'Tiap bulan “aku budget” berantem dengan “aku jebol budget”.'
    ),
    description: M(
      '월초에는 이번 달은 진짜 아끼겠다고 결심합니다. 그런데 그 결심이 지켜진 적이 거의 없습니다. 좋은 것을 보면 손이 먼저 반응하고, 나중에 후회하는 패턴이 반복됩니다. 스스로도 문제를 알고 있지만 통제가 잘 안 되는 상태입니다. 소비 의지력을 높이기보다 애초에 충동을 차단하는 시스템을 만드는 것이 더 효과적입니다.',
      'Early in the month you swear you will save—yet it rarely sticks. You reach for good deals first and regret later, on repeat. You know it is an issue but control is hard. Building systems that block impulses often beats “trying harder.”',
      '月初は「今月こそ節約」と決めるが、ほぼ守れない。いいものを見ると手が先に動き、あとで後悔の繰り返し。自覚はあるがコントロールが難しい。意志より、衝動を遮る仕組みの方が効きます。',
      '月初发誓这个月一定省，却很少守住。看到好东西手先动，后悔循环。你知道有问题但难自控。比起靠意志力，不如用机制挡住冲动。',
      '月初發誓這個月一定省，卻很少守住。看到好東西手先動，後悔循環。你知道有問題但難自控。比起靠意志力，不如用機制擋住衝動。',
      'Đầu tháng thề tiết kiệm—hiếm khi giữ được. Thấy deal là tay đã chạm, rồi hối tiếc lặp lại. Biết vấn đề nhưng khó kiểm soát. Hệ thống chặn xung động thường hiệu quả hơn “cố gắng”.',
      'Awal bulan janji hemat—jarang kepikiran. Lihat barang bagus tangan dulu, nyesel belakangan. Sadar tapi susah kontrol. Sistem blok impuls sering lebih ampuh dari niat keras.'
    ),
    spendingDna: M(
      '소비 DNA: 의지력 부족 충동파 (Impulsive Planner)',
      'Spending DNA: Impulsive Planner',
      '消費DNA：衝動プランナー',
      '消费 DNA：冲动计划派',
      '消費 DNA：衝動計畫派',
      'DNA chi tiêu: Lập kế hoạch nhưng impulsif',
      'DNA belanja: Impulsive planner'
    ),
    keywords: M(
      '충동구매, 후회, 반복, 다짐',
      'Impulse buys, regret, loops, resolutions',
      '衝動買い、後悔、繰り返し、決意',
      '冲动消费、后悔、循环、发誓',
      '衝動消費、後悔、循環、發誓',
      'Mua ngẫu hứng, hối tiếc, lặp lại, thề',
      'Impuls, menyesal, berulang, niat'
    ),
    strength: M(
      '소비 과정에서 즐거움이 크고 솔직한 편',
      'Shopping feels fun and you are honest about it',
      '買う過程は楽しく、素直なタイプ',
      '花钱过程很爽，人也挺坦率',
      '花錢過程很爽，人也挺坦率',
      'Lúc tiêu vui và khá thật thà',
      'Saat belanja seru dan jujur'
    ),
    weakness: M(
      '계획과 실제 소비의 괴리가 매우 큼, 월말 재정 위기 반복',
      'Huge gap between plan and reality; month-end money crises repeat',
      '計画と実際のズレが大きく、月末の金欠が繰り返す',
      '计划和实际差很大，月底缺钱反复上演',
      '計畫和實際差很大，月底缺錢反覆上演',
      'Kế hoạch và thực tế lệch nhiều—cuối tháng thiếu tiền lặp lại',
      'Rencana vs realita jauh—krisis akhir bulan berulang'
    ),
    prescription: M(
      '신용카드를 체크카드로 바꿔보세요. 잔액이 보이면 소비 심리가 달라집니다.',
      'Try switching credit to debit—seeing your balance changes how you spend.',
      'クレジットをデビットに。残高が見えると心理が変わります。',
      '试试把信用卡换成借记卡，看得见余额心态会不同。',
      '試試把信用卡換成簽帳金融卡，看得見餘額心態會不同。',
      'Đổi thẻ tín dụng sang ghi nợ—thấy số dư sẽ khác tâm lý.',
      'Ganti kredit ke debit—lihat saldo ubah pola belanja.'
    ),
    goodMatch: M(
      'Type 3 (합리적인 소비 습관을 배울 수 있음)',
      'Type 3 (can learn smarter spending habits)',
      'Type 3（合理的な習慣を学べる）',
      'Type 3（能学到更理性的消费习惯）',
      'Type 3（能學到更理性的消費習慣）',
      'Type 3 (học thói tiêu hợp lý)',
      'Type 3 (bisa belajar kebiasaan rasional)'
    ),
    badMatch: M(
      'Type 8 (둘이 만나면 서로 지름신을 부름)',
      'Type 8 (together you egg each other on to spend)',
      'Type 8（二人で買い物欲を刺激し合う）',
      'Type 8（两人一起更容易剁手）',
      'Type 8（兩人一起更容易剁手）',
      'Type 8 (gặp nhau là thi nhau tiêu)',
      'Type 8 (bareng-bareng saling dorong belanja)'
    ),
    shareTypeName: M(
      '의지력 부족 충동파',
      'Impulsive Planner',
      '意志薄弱な衝動タイプ',
      '意志力薄弱冲动派',
      '意志力薄弱衝動派',
      'Xung động thiếu ý chí',
      'Impulsif lemah kontrol'
    ),
  },
  {
    type: 'Type8',
    emoji: '💸',
    title: M(
      '통장 잔액이 무서운, 지름신 강림 탕진잼형',
      'Scared to check the balance: the ultimate splurger',
      '残高を見るのが怖い、散財の神降臨タイプ',
      '不敢看余额，剁手大神降临型',
      '不敢看餘額，剁手大神降臨型',
      'Sợ xem số dư: thánh “hết tiền vui”',
      'Takut cek saldo: raja boros'
    ),
    shortDescription: M(
      '이미 질렀습니다. 후회는 나중에, 지금은 행복합니다.',
      'Already bought it. Regret later—happy now.',
      'もう買った。後悔はあと、今は幸せ。',
      '已经买了。后悔以后再说，现在先爽。',
      '已經買了。後悔以後再說，現在先爽。',
      'Đã mua rồi. Hối hận sau—giờ vui trước.',
      'Sudah checkout. Nyesel nanti—senang sekarang.'
    ),
    description: M(
      '당신의 소비는 자유롭고 두려움이 없습니다. 갖고 싶은 것은 갖고, 하고 싶은 것은 하는 것이 인생이라고 생각합니다. 통장 잔액 확인을 두려워하고, 카드 명세서가 올 때쯤 멘탈이 흔들리지만 그래도 다음 달에 또 삽니다. 소비 자체에서 오는 즐거움이 매우 강한 타입으로, 지금 당장 재정 관리 시스템 도입이 필요합니다.',
      'Your spending feels fearless and free—you want it, you get it; you want to do it, you do it. Checking your balance scares you, and statements shake you—yet you shop again next month. The joy of spending is very strong; you need a money system now.',
      'あなたの消費は自由で恐れが少ない。欲しいものは手に入れ、やりたいことをするのが人生だと思う。残高確認は怖く、明細の頃にはメンタルが揺れるが、また翌月買う。消費そのものの喜びが強いタイプで、今すぐ家計の仕組みが必要です。',
      '你花钱大胆自由，想要就要、想做就做。不敢常看余额，账单来时心态会崩，但下个月照买不误。从消费里获得的快乐很强，现在就需要建立理财机制。',
      '你花錢大膽自由，想要就要、想做就做。不敢常看餘額，帳單來時心態會崩，但下個月照買不誤。從消費裡獲得的快樂很強，現在就需要建立理財機制。',
      'Bạn chi tiêu tự do, ít sợ—muốn là lấy, muốn làm là làm. Sợ xem số dư, sao kê là run nhưng tháng sau vẫn mua. Niềm vui khi tiêu rất mạnh—cần hệ thống tài chính ngay.',
      'Belanjamu bebas—mau punya ya ambil, mau lakukan ya jalan. Takut cek saldo, tagihan bikin goyah tapi bulan depan belanja lagi. Senang dari belanja sangat kuat—perlu sistem keuangan sekarang.'
    ),
    spendingDna: M(
      '소비 DNA: 탕진잼 지름신 강림형 (Ultimate Splurger)',
      'Spending DNA: Ultimate Splurger',
      '消費DNA：アルティメット散財タイプ',
      '消费 DNA：终极剁手型',
      '消費 DNA：終極剁手型',
      'DNA chi tiêu: Tối thượng “hết tiền vui”',
      'DNA belanja: Ultimate splurger'
    ),
    keywords: M(
      '즉흥, 탕진, 쾌감, 무계획',
      'Spontaneous, splurge, rush, no plan',
      '即興、散財、快感、無計画',
      '即兴、花光、快感、无计划',
      '即興、花光、快感、無計畫',
      'Tức thì, xài hết, sướng, không kế hoạch',
      'Spontan, boros, asyik, tanpa rencana'
    ),
    strength: M(
      '소비 과정에서 삶의 즐거움을 최대로 누림',
      'You squeeze maximum joy out of spending',
      '消費から人生の楽しみを最大に引き出す',
      '从消费里榨取生活乐趣到极致',
      '從消費裡榨取生活樂趣到極致',
      'Tận hưởng niềm vui từ tiêu tiền tối đa',
      'Maksimalkan senang dari belanja'
    ),
    weakness: M(
      '재정 안정성 최하위, 미래 대비 거의 없음',
      'Lowest financial stability; little saved for the future',
      '財務安定性は最低、将来備えはほぼなし',
      '财务稳定性偏低，几乎没为未来准备',
      '財務穩定性偏低，幾乎沒為未來準備',
      'Ổn định tài chính thấp—dự phòng tương lai gần như không',
      'Stabilitas finansial rendah—tabungan masa depan minim'
    ),
    prescription: M(
      '월급날 10%만 강제 저축 통장으로 보내보세요. 딱 10%만. 그게 시작입니다.',
      'On payday, auto-send just 10% to savings—only 10%. That is the start.',
      '給料日に10%だけ強制貯蓄へ。10%だけ。それがスタート。',
      '发薪日自动转10%到储蓄账户，就10%，这就是开始。',
      '發薪日自動轉10%到儲蓄帳戶，就10%，這就是開始。',
      'Ngày lương tự động gửi 10% vào tiết kiệm—chỉ 10%. Đó là khởi đầu.',
      'Hari gaji transfer paksa 10% ke tabungan—cuma 10%. Itu awalnya.'
    ),
    goodMatch: M(
      'Type 5 (서로를 이해해주는 유일한 타입)',
      'Type 5 (one of the few who truly get you)',
      'Type 5（お互いを理解しやすい数少ないタイプ）',
      'Type 5（少数能互相理解的一类）',
      'Type 5（少數能互相理解的一類）',
      'Type 5 (hiểu nhau nhất trong các type)',
      'Type 5 (saling paling paham)'
    ),
    badMatch: M(
      'Type 1 (같이 쇼핑 나가면 분위기가 영 안 맞음)',
      'Type 1 (shopping together feels totally off)',
      'Type 1（一緒の買い物は空気が合わない）',
      'Type 1（一起逛街气场完全不合）',
      'Type 1（一起逛街氣場完全不合）',
      'Type 1 (đi shopping cùng là lệch vibe)',
      'Type 1 (belanja bareng suasana nggak cocok)'
    ),
    shareTypeName: M(
      '탕진잼 지름신 강림형',
      'Ultimate Splurger',
      'アルティメット散財タイプ',
      '终极剁手型',
      '終極剁手型',
      'Tối thượng xài hết',
      'Raja boros'
    ),
  },
];
