export interface Phase2ImpulseBuyingQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    score: number; // A=0, B=1, C=2, D=3
  }[];
}

export interface Phase2ImpulseBuyingResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  impulseLevel: Record<string, string>; // "0%", "20%" 등
  characteristics: Record<string, string>; // 주요 특징
  goodMatch: Record<string, string>; // 환상의 짝꿍
  badMatch: Record<string, string>; // 환장의 짝꿍
}

export const phase2ImpulseBuyingQuestions: Phase2ImpulseBuyingQuestion[] = [
  {
    id: 1,
    question: {
      ko: "'한정판', '마감 임박', '오늘만 특가' 문구를 보면?",
      en: "When you see phrases like 'Limited Edition', 'Ending Soon', 'Today Only Special'?",
      ja: "「限定版」「終了間近」「今日だけ特価」という言葉を見ると？",
      "zh-CN": "看到'限量版'、'即将结束'、'今日特价'等字样时？",
      "zh-TW": "看到「限量版」、「即將結束」、「今日特價」等字樣時？",
      vi: "Khi bạn thấy các cụm từ như 'Phiên bản giới hạn', 'Sắp kết thúc', 'Chỉ hôm nay đặc biệt'?",
      id: "Ketika Anda melihat frasa seperti 'Edisi Terbatas', 'Segera Berakhir', 'Hanya Hari Ini Khusus'?"
    },
    options: [
      {
        text: {
          ko: "\"상술이야.\" 콧방귀도 뀌지 않고 지나간다",
          en: "\"It's a sales tactic.\" I pass by without even batting an eye.",
          ja: "「販売戦略だな。」鼻で笑うこともなく通り過ぎる",
          "zh-CN": "「这是销售策略。」连鼻子都不哼一声就过去了",
          "zh-TW": "「這是銷售策略。」連鼻子都不哼一聲就過去了",
          vi: "\"Đó là chiêu bán hàng.\" Tôi bỏ qua mà không thèm để ý.",
          id: "\"Itu taktik penjualan.\" Saya lewat tanpa memperhatikan."
        },
        score: 0 // A = 절약
      },
      {
        text: {
          ko: "\"오, 싸네?\" 일단 클릭해서 구경은 해본다",
          en: "\"Oh, it's cheap?\" I click to take a look anyway.",
          ja: "「お、安いね？」とりあえずクリックして見てみる",
          "zh-CN": "「哦，便宜？」先点进去看看",
          "zh-TW": "「哦，便宜？」先點進去看看",
          vi: "\"Ồ, rẻ nhỉ?\" Tôi nhấp vào để xem thử.",
          id: "\"Oh, murah?\" Saya klik untuk melihat-lihat."
        },
        score: 1 // B = 보통
      },
      {
        text: {
          ko: "\"이건 기회야!\" 필요 없어도 쟁여놔야 마음이 편하다",
          en: "\"This is an opportunity!\" I need to stock up even if I don't need it.",
          ja: "「これはチャンスだ！」必要なくても買いだめしておかないと落ち着かない",
          "zh-CN": "「这是机会！」即使不需要也要囤货才安心",
          "zh-TW": "「這是機會！」即使不需要也要囤貨才安心",
          vi: "\"Đây là cơ hội!\" Tôi cần tích trữ dù không cần thiết.",
          id: "\"Ini kesempatan!\" Saya perlu menimbun meskipun tidak perlu."
        },
        score: 2 // C = 충동
      },
      {
        text: {
          ko: "심장이 뛴다. 품절되기 전에 빛의 속도로 결제한다",
          en: "My heart races. I check out at the speed of light before it sells out.",
          ja: "心臓がドキドキする。完売する前に光の速さで決済する",
          "zh-CN": "心跳加速。在售罄前以光速结账",
          "zh-TW": "心跳加速。在售罄前以光速結帳",
          vi: "Tim đập nhanh. Tôi thanh toán với tốc độ ánh sáng trước khi hết hàng.",
          id: "Jantung berdebar. Saya checkout dengan kecepatan cahaya sebelum kehabisan."
        },
        score: 3 // D = 과소비
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "배송비 3,000원을 아끼기 위해 당신이 하는 행동은?",
      en: "What do you do to save 3,000 won in shipping fees?",
      ja: "配送料3,000円を節約するためにあなたがすることは？",
      "zh-CN": "为了节省3,000韩元运费，你会怎么做？",
      "zh-TW": "為了節省3,000韓元運費，你會怎麼做？",
      vi: "Bạn làm gì để tiết kiệm 3,000 won phí vận chuyển?",
      id: "Apa yang Anda lakukan untuk menghemat 3,000 won biaya pengiriman?"
    },
    options: [
      {
        text: {
          ko: "배송비 낼 바엔 안 산다. 쿨하게 창을 닫는다",
          en: "I'd rather not buy than pay shipping. I coolly close the window.",
          ja: "配送料を払うくらいなら買わない。クールにウィンドウを閉じる",
          "zh-CN": "与其付运费不如不买。冷静地关闭窗口",
          "zh-TW": "與其付運費不如不買。冷靜地關閉視窗",
          vi: "Thà không mua còn hơn trả phí vận chuyển. Tôi đóng cửa sổ một cách bình thản.",
          id: "Lebih baik tidak beli daripada bayar ongkir. Saya menutup jendela dengan tenang."
        },
        score: 0
      },
      {
        text: {
          ko: "필요한 물건이 더 있는지 꼼꼼하게 찾아본다",
          en: "I carefully look for other things I need.",
          ja: "必要なものが他にもないか丁寧に探す",
          "zh-CN": "仔细寻找其他需要的东西",
          "zh-TW": "仔細尋找其他需要的東西",
          vi: "Tôi cẩn thận tìm xem còn thứ gì cần thiết không.",
          id: "Saya dengan hati-hati mencari barang lain yang dibutuhkan."
        },
        score: 1
      },
      {
        text: {
          ko: "친구들에게 \"같이 살 사람?\" 카톡을 돌린다",
          en: "I message friends asking \"Anyone want to buy together?\"",
          ja: "友達に「一緒に買う人？」とメッセージを回す",
          "zh-CN": "给朋友发消息问「有人要一起买吗？」",
          "zh-TW": "給朋友發訊息問「有人要一起買嗎？」",
          vi: "Tôi nhắn cho bạn bè \"Ai muốn mua chung không?\"",
          id: "Saya mengirim pesan ke teman \"Ada yang mau beli bareng?\""
        },
        score: 2
      },
      {
        text: {
          ko: "금액을 채우기 위해 쓸데없는 물건을 더 담는다",
          en: "I add unnecessary items to reach the free shipping threshold.",
          ja: "金額を満たすために不要なものを追加する",
          "zh-CN": "为了达到免运费金额，添加不需要的东西",
          "zh-TW": "為了達到免運費金額，添加不需要的東西",
          vi: "Tôi thêm những món không cần thiết để đạt mức miễn phí vận chuyển.",
          id: "Saya menambahkan barang yang tidak perlu untuk mencapai ambang batas pengiriman gratis."
        },
        score: 3
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "기분이 우울하거나 스트레스 받을 때?",
      en: "When you're feeling down or stressed?",
      ja: "気分が落ち込んだりストレスを感じたとき？",
      "zh-CN": "心情低落或压力大时？",
      "zh-TW": "心情低落或壓力大時？",
      vi: "Khi bạn cảm thấy buồn hoặc căng thẳng?",
      id: "Ketika Anda merasa sedih atau stres?"
    },
    options: [
      {
        text: {
          ko: "돈을 쓰기보단 잠을 자거나 산책을 한다",
          en: "I sleep or take a walk rather than spend money.",
          ja: "お金を使うより寝るか散歩をする",
          "zh-CN": "与其花钱，不如睡觉或散步",
          "zh-TW": "與其花錢，不如睡覺或散步",
          vi: "Tôi ngủ hoặc đi dạo thay vì tiêu tiền.",
          id: "Saya tidur atau jalan-jalan daripada menghabiskan uang."
        },
        score: 0
      },
      {
        text: {
          ko: "맛있는 음식을 시켜 먹는 정도로 소소하게 푼다",
          en: "I order some delicious food to cheer myself up a bit.",
          ja: "美味しいものを注文して食べる程度で小さく発散する",
          "zh-CN": "点些好吃的食物来稍微缓解一下",
          "zh-TW": "點些好吃的食物來稍微緩解一下",
          vi: "Tôi gọi đồ ăn ngon để giải tỏa một chút.",
          id: "Saya memesan makanan enak untuk sedikit menghibur diri."
        },
        score: 1
      },
      {
        text: {
          ko: "장바구니에 담아뒀던 물건을 하나씩 결제한다",
          en: "I check out items from my cart one by one.",
          ja: "カートに入れておいたものを一つずつ決済する",
          "zh-CN": "把购物车里的东西一个一个结账",
          "zh-TW": "把購物車裡的東西一個一個結帳",
          vi: "Tôi thanh toán từng món một trong giỏ hàng.",
          id: "Saya checkout barang-barang di keranjang satu per satu."
        },
        score: 2
      },
      {
        text: {
          ko: "백화점이나 쇼핑몰로 돌격해서 '금융 치료'를 한다",
          en: "I rush to department stores or shopping malls for 'retail therapy'.",
          ja: "デパートやショッピングモールに突撃して「買い物療法」をする",
          "zh-CN": "冲向百货商店或购物中心进行'购物疗法'",
          "zh-TW": "衝向百貨商店或購物中心進行「購物療法」",
          vi: "Tôi lao đến cửa hàng bách hóa hoặc trung tâm mua sắm để 'chữa trị bằng mua sắm'.",
          id: "Saya bergegas ke department store atau mall untuk 'terapi belanja'."
        },
        score: 3
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "인스타그램이나 유튜브에서 핫한 '광고템'을 봤다.",
      en: "You saw a trending 'advertised product' on Instagram or YouTube.",
      ja: "インスタグラムやYouTubeで話題の「広告商品」を見た。",
      "zh-CN": "在Instagram或YouTube上看到了热门的'广告商品'。",
      "zh-TW": "在Instagram或YouTube上看到了熱門的「廣告商品」。",
      vi: "Bạn thấy một 'sản phẩm quảng cáo' đang hot trên Instagram hoặc YouTube.",
      id: "Anda melihat 'produk iklan' yang sedang trending di Instagram atau YouTube."
    },
    options: [
      {
        text: {
          ko: "\"광고네.\" 스크롤을 내린다",
          en: "\"It's an ad.\" I scroll past.",
          ja: "「広告だな。」スクロールして通り過ぎる",
          "zh-CN": "「是广告。」向下滚动",
          "zh-TW": "「是廣告。」向下滾動",
          vi: "\"Là quảng cáo.\" Tôi cuộn xuống.",
          id: "\"Ini iklan.\" Saya scroll ke bawah."
        },
        score: 0
      },
      {
        text: {
          ko: "검색창에 후기를 찾아보고 진짜 좋은지 검증한다",
          en: "I search for reviews to verify if it's really good.",
          ja: "検索窓でレビューを探して本当に良いか検証する",
          "zh-CN": "在搜索框查找评论，验证是否真的好",
          "zh-TW": "在搜尋框查找評論，驗證是否真的好",
          vi: "Tôi tìm đánh giá để xác minh xem có thực sự tốt không.",
          id: "Saya mencari ulasan untuk memverifikasi apakah benar-benar bagus."
        },
        score: 1
      },
      {
        text: {
          ko: "\"오 신기하다.\" 가격이 싸면 속는 셈 치고 사본다",
          en: "\"Oh, interesting.\" If it's cheap, I buy it thinking I can afford to be fooled.",
          ja: "「お、面白い。」安ければ騙されたと思って買う",
          "zh-CN": "「哦，有意思。」如果便宜，就当被骗也买了",
          "zh-TW": "「哦，有意思。」如果便宜，就當被騙也買了",
          vi: "\"Ồ, thú vị.\" Nếu rẻ, tôi mua với suy nghĩ bị lừa cũng được.",
          id: "\"Oh, menarik.\" Kalau murah, saya beli dengan pikiran tertipu juga tidak apa-apa."
        },
        score: 2
      },
      {
        text: {
          ko: "인플루언서가 좋다고 하면 의심 없이 바로 산다",
          en: "If an influencer says it's good, I buy it without hesitation.",
          ja: "インフルエンサーが良いと言ったら疑いもなくすぐ買う",
          "zh-CN": "如果网红说好，就毫不犹豫地买",
          "zh-TW": "如果網紅說好，就毫不猶豫地買",
          vi: "Nếu người có ảnh hưởng nói tốt, tôi mua ngay không chần chừ.",
          id: "Jika influencer bilang bagus, saya langsung beli tanpa ragu."
        },
        score: 3
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "집에 택배 박스가 쌓여있는 빈도는?",
      en: "How often do delivery boxes pile up at your home?",
      ja: "家に配送ボックスが積み上がる頻度は？",
      "zh-CN": "家里快递箱堆积的频率是？",
      "zh-TW": "家裡快遞箱堆積的頻率是？",
      vi: "Tần suất hộp giao hàng chất đống ở nhà bạn là?",
      id: "Seberapa sering kotak pengiriman menumpuk di rumah Anda?"
    },
    options: [
      {
        text: {
          ko: "택배 올 일이 거의 없다",
          en: "I rarely receive deliveries.",
          ja: "配送が来ることはほとんどない",
          "zh-CN": "几乎不收到快递",
          "zh-TW": "幾乎不收到快遞",
          vi: "Hầu như không có gói hàng nào đến.",
          id: "Saya jarang menerima pengiriman."
        },
        score: 0
      },
      {
        text: {
          ko: "꼭 필요한 생필품 위주로 가끔 온다",
          en: "I occasionally receive essential daily necessities.",
          ja: "必要な日用品中心にたまに来る",
          "zh-CN": "偶尔收到必需的生活用品",
          "zh-TW": "偶爾收到必需的生活用品",
          vi: "Thỉnh thoảng nhận được những thứ cần thiết cho cuộc sống hàng ngày.",
          id: "Saya sesekali menerima kebutuhan pokok sehari-hari."
        },
        score: 1
      },
      {
        text: {
          ko: "일주일에 2~3번은 택배 기사님과 마주친다",
          en: "I meet the delivery person 2-3 times a week.",
          ja: "週に2〜3回は配送員さんと会う",
          "zh-CN": "一周会遇到快递员2-3次",
          "zh-TW": "一週會遇到快遞員2-3次",
          vi: "Tôi gặp người giao hàng 2-3 lần một tuần.",
          id: "Saya bertemu kurir 2-3 kali seminggu."
        },
        score: 2
      },
      {
        text: {
          ko: "매일 문 앞에 택배 탑이 쌓여있다",
          en: "A tower of delivery boxes piles up at my door every day.",
          ja: "毎日ドアの前に配送ボックスの塔が積み上がっている",
          "zh-CN": "每天门前都堆着快递箱塔",
          "zh-TW": "每天門前都堆著快遞箱塔",
          vi: "Mỗi ngày trước cửa đều chất đống tháp hộp giao hàng.",
          id: "Setiap hari menara kotak pengiriman menumpuk di depan pintu."
        },
        score: 3
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "친구들과 약속이 잡혔다. 옷은 어떻게?",
      en: "You have plans with friends. What about clothes?",
      ja: "友達と約束が入った。服はどうする？",
      "zh-CN": "和朋友约好了。衣服怎么办？",
      "zh-TW": "和朋友約好了。衣服怎麼辦？",
      vi: "Bạn có hẹn với bạn bè. Quần áo thì sao?",
      id: "Anda punya rencana dengan teman. Bagaimana dengan pakaian?"
    },
    options: [
      {
        text: {
          ko: "옷장에 있는 옷 중 깔끔한 걸로 골라 입는다",
          en: "I pick something clean from my closet.",
          ja: "クローゼットにある服の中からきれいなものを選んで着る",
          "zh-CN": "从衣柜里挑一件干净的衣服穿",
          "zh-TW": "從衣櫃裡挑一件乾淨的衣服穿",
          vi: "Tôi chọn một bộ sạch sẽ từ tủ quần áo.",
          id: "Saya memilih sesuatu yang bersih dari lemari pakaian."
        },
        score: 0
      },
      {
        text: {
          ko: "입을 옷이 너무 없으면 기본 아이템 하나 정도 산다",
          en: "If I don't have anything to wear, I buy one basic item.",
          ja: "着る服がなさすぎれば基本アイテムを1つくらい買う",
          "zh-CN": "如果实在没衣服穿，就买一件基本款",
          "zh-TW": "如果實在沒衣服穿，就買一件基本款",
          vi: "Nếu không có gì để mặc, tôi mua một món cơ bản.",
          id: "Jika tidak ada yang bisa dipakai, saya beli satu item dasar."
        },
        score: 1
      },
      {
        text: {
          ko: "\"새 옷 입고 나가야지!\" 약속 잡힌 날 바로 쇼핑몰을 켠다",
          en: "\"I should go out in new clothes!\" I open the shopping mall on the day of the appointment.",
          ja: "「新しい服を着て出かけなきゃ！」約束の日すぐにショッピングモールを開く",
          "zh-CN": "「应该穿新衣服出去！」约好的当天就打开购物网站",
          "zh-TW": "「應該穿新衣服出去！」約好的當天就打開購物網站",
          vi: "\"Phải mặc đồ mới ra ngoài!\" Tôi mở trang mua sắm ngay trong ngày hẹn.",
          id: "\"Harus keluar pakai baju baru!\" Saya buka toko online di hari janji temu."
        },
        score: 2
      },
      {
        text: {
          ko: "머리부터 발끝까지 풀착장으로 새로 뽑는다",
          en: "I get a completely new outfit from head to toe.",
          ja: "頭からつま先までフルコーデで新調する",
          "zh-CN": "从头到脚买一套全新的",
          "zh-TW": "從頭到腳買一套全新的",
          vi: "Tôi mua một bộ hoàn toàn mới từ đầu đến chân.",
          id: "Saya beli setelan baru dari ujung kepala sampai ujung kaki."
        },
        score: 3
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "마트나 편의점에 갔는데 1+1 행사 중이다.",
      en: "You go to a supermarket or convenience store and there's a 'Buy 1 Get 1' sale.",
      ja: "スーパーやコンビニに行ったら1+1セール中だった。",
      "zh-CN": "去超市或便利店，发现正在'买一送一'促销。",
      "zh-TW": "去超市或便利商店，發現正在「買一送一」促銷。",
      vi: "Bạn đến siêu thị hoặc cửa hàng tiện lợi và đang có chương trình 'Mua 1 Tặng 1'.",
      id: "Anda pergi ke supermarket atau minimarket dan ada penawaran 'Beli 1 Gratis 1'."
    },
    options: [
      {
        text: {
          ko: "내가 사려던 게 아니면 절대 안 산다",
          en: "I absolutely won't buy it if it's not what I came for.",
          ja: "自分が買おうとしていたものでなければ絶対に買わない",
          "zh-CN": "如果不是我原本要买的，绝对不买",
          "zh-TW": "如果不是我原本要買的，絕對不買",
          vi: "Tôi tuyệt đối không mua nếu không phải thứ tôi định mua.",
          id: "Saya sama sekali tidak akan membeli jika bukan yang saya rencanakan."
        },
        score: 0
      },
      {
        text: {
          ko: "유통기한이 길고 자주 쓰는 거라면 산다",
          en: "I buy it if it has a long expiration date and I use it often.",
          ja: "賞味期限が長くてよく使うものなら買う",
          "zh-CN": "如果保质期长且经常用，就买",
          "zh-TW": "如果保質期長且經常用，就買",
          vi: "Tôi mua nếu hạn sử dụng dài và tôi thường dùng.",
          id: "Saya beli jika tanggal kedaluwarsa panjang dan sering digunakan."
        },
        score: 1
      },
      {
        text: {
          ko: "\"어차피 쓰겠지.\" 당장 필요 없어도 집어온다",
          en: "\"I'll use it eventually.\" I grab it even if I don't need it right now.",
          ja: "「どうせ使うだろう。」今すぐ必要なくても取る",
          "zh-CN": "「反正会用到的。」即使现在不需要也拿",
          "zh-TW": "「反正會用到的。」即使現在不需要也拿",
          vi: "\"Chắc chắn sẽ dùng.\" Tôi lấy dù không cần ngay.",
          id: "\"Bagaimanapun akan dipakai.\" Saya ambil meskipun tidak perlu sekarang."
        },
        score: 2
      },
      {
        text: {
          ko: "1+1은 공짜나 다름없다. 무조건 쓸어 담는다",
          en: "Buy 1 Get 1 is basically free. I sweep it all up.",
          ja: "1+1は無料も同然。無条件でかき集める",
          "zh-CN": "买一送一等于免费。无条件全部扫货",
          "zh-TW": "買一送一等於免費。無條件全部掃貨",
          vi: "Mua 1 Tặng 1 gần như miễn phí. Tôi quét sạch tất cả.",
          id: "Beli 1 Gratis 1 sama saja gratis. Saya sapu bersih semuanya."
        },
        score: 3
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "당신의 가계부 작성 스타일은?",
      en: "What's your budgeting style?",
      ja: "あなたの家計簿の付け方は？",
      "zh-CN": "你的记账风格是？",
      "zh-TW": "你的記帳風格是？",
      vi: "Phong cách ghi sổ chi tiêu của bạn là?",
      id: "Apa gaya pencatatan keuangan Anda?"
    },
    options: [
      {
        text: {
          ko: "매일매일 10원 단위까지 꼼꼼하게 기록한다",
          en: "I meticulously record every day down to 10 won.",
          ja: "毎日10ウォン単位まで丁寧に記録する",
          "zh-CN": "每天详细记录到10韩元单位",
          "zh-TW": "每天詳細記錄到10韓元單位",
          vi: "Tôi ghi chép cẩn thận mỗi ngày đến từng 10 won.",
          id: "Saya mencatat dengan teliti setiap hari sampai 10 won."
        },
        score: 0
      },
      {
        text: {
          ko: "대략적인 지출 내역만 확인하고 큰 돈 나간 것만 적는다",
          en: "I only check general expenses and record big purchases.",
          ja: "大まかな支出内容だけ確認して大きな出費だけ書く",
          "zh-CN": "只确认大概的支出，只记录大笔支出",
          "zh-TW": "只確認大概的支出，只記錄大筆支出",
          vi: "Tôi chỉ kiểm tra tổng quan chi tiêu và ghi lại những khoản lớn.",
          id: "Saya hanya memeriksa pengeluaran umum dan mencatat pembelian besar."
        },
        score: 1
      },
      {
        text: {
          ko: "월급 들어오고 며칠 뒤면 잔고가 0원이라 적을 게 없다",
          en: "A few days after my salary comes in, my balance is 0, so there's nothing to record.",
          ja: "給料が入って数日後には残高が0円で書くことがない",
          "zh-CN": "工资到账几天后余额就是0，没什么可记的",
          "zh-TW": "工資到帳幾天後餘額就是0，沒什麼可記的",
          vi: "Vài ngày sau khi lương về, số dư là 0 nên không có gì để ghi.",
          id: "Beberapa hari setelah gaji masuk, saldo sudah 0 jadi tidak ada yang dicatat."
        },
        score: 2
      },
      {
        text: {
          ko: "가계부? 내 지출을 마주할 용기가 없어서 안 쓴다",
          en: "Budget? I don't use it because I don't have the courage to face my spending.",
          ja: "家計簿？自分の支出と向き合う勇気がなくて使わない",
          "zh-CN": "记账本？我没有勇气面对自己的支出，所以不用",
          "zh-TW": "記帳本？我沒有勇氣面對自己的支出，所以不用",
          vi: "Sổ chi tiêu? Tôi không dùng vì không đủ can đảm đối mặt với chi tiêu của mình.",
          id: "Buku keuangan? Saya tidak pakai karena tidak punya keberanian menghadapi pengeluaran saya."
        },
        score: 3
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "새벽 2시, 잠이 안 올 때 당신은?",
      en: "2 AM, when you can't sleep, what do you do?",
      ja: "深夜2時、眠れないとき、あなたは？",
      "zh-CN": "凌晨2点，睡不着的时候，你会？",
      "zh-TW": "凌晨2點，睡不著的時候，你會？",
      vi: "2 giờ sáng, khi không ngủ được, bạn làm gì?",
      id: "Jam 2 pagi, ketika tidak bisa tidur, Anda akan?"
    },
    options: [
      {
        text: {
          ko: "스마트폰을 멀리하고 잠을 청한다",
          en: "I put my phone away and try to sleep.",
          ja: "スマートフォンを遠ざけて眠りにつく",
          "zh-CN": "把手机放远，尝试入睡",
          "zh-TW": "把手機放遠，嘗試入睡",
          vi: "Tôi để điện thoại xa và cố ngủ.",
          id: "Saya menjauhkan ponsel dan mencoba tidur."
        },
        score: 0
      },
      {
        text: {
          ko: "유튜브나 웹툰을 보며 시간을 때운다",
          en: "I watch YouTube or webtoons to pass time.",
          ja: "YouTubeやウェブトゥーンを見て時間を過ごす",
          "zh-CN": "看YouTube或网络漫画打发时间",
          "zh-TW": "看YouTube或網路漫畫打發時間",
          vi: "Tôi xem YouTube hoặc webtoon để giết thời gian.",
          id: "Saya menonton YouTube atau webtoon untuk menghabiskan waktu."
        },
        score: 1
      },
      {
        text: {
          ko: "아이쇼핑을 하다가 \"이건 사야 해\"라며 결제한다",
          en: "I window shop and end up paying, thinking \"I need to buy this.\"",
          ja: "アイショッピングをしていて「これは買わなきゃ」と言って決済する",
          "zh-CN": "浏览购物时想着「这个得买」就付款了",
          "zh-TW": "瀏覽購物時想著「這個得買」就付款了",
          vi: "Tôi xem hàng và kết thúc bằng việc thanh toán, nghĩ \"Phải mua cái này\".",
          id: "Saya window shopping dan akhirnya membayar, berpikir \"Saya harus beli ini\"."
        },
        score: 2
      },
      {
        text: {
          ko: "새벽 감성에 취해 예쁜 쓰레기들을 충동구매한다",
          en: "I get caught up in late-night emotions and impulsively buy pretty junk.",
          ja: "深夜の感情に酔ってきれいなガラクタを衝動買いする",
          "zh-CN": "被深夜情绪冲昏头脑，冲动购买漂亮的无用之物",
          "zh-TW": "被深夜情緒沖昏頭腦，衝動購買漂亮的無用之物",
          vi: "Tôi bị cuốn theo cảm xúc đêm khuya và mua những món đồ đẹp nhưng vô dụng một cách bốc đồng.",
          id: "Saya terbuai emosi larut malam dan impulsif membeli barang-barang cantik yang tidak berguna."
        },
        score: 3
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "물건을 사고 나서 후회한 적은?",
      en: "Have you ever regretted buying something?",
      ja: "物を買った後に後悔したことは？",
      "zh-CN": "买完东西后后悔过吗？",
      "zh-TW": "買完東西後後悔過嗎？",
      vi: "Bạn đã bao giờ hối hận sau khi mua gì đó chưa?",
      id: "Pernahkah Anda menyesal setelah membeli sesuatu?"
    },
    options: [
      {
        text: {
          ko: "거의 없다. 꼼꼼하게 따져보고 사니까",
          en: "Almost never. I carefully consider before buying.",
          ja: "ほとんどない。丁寧に検討してから買うから",
          "zh-CN": "几乎没有。因为我会仔细考虑后再买",
          "zh-TW": "幾乎沒有。因為我會仔細考慮後再買",
          vi: "Hầu như không. Tôi cân nhắc kỹ trước khi mua.",
          id: "Hampir tidak pernah. Saya pertimbangkan dengan hati-hati sebelum membeli."
        },
        score: 0
      },
      {
        text: {
          ko: "가끔 \"좀 더 싸게 살 걸\" 하는 아쉬움은 있다",
          en: "Sometimes I regret not buying it cheaper.",
          ja: "たまに「もっと安く買えばよかった」という後悔はある",
          "zh-CN": "偶尔会后悔「应该买得更便宜点」",
          "zh-TW": "偶爾會後悔「應該買得更便宜點」",
          vi: "Thỉnh thoảng tôi hối tiếc \"Nên mua rẻ hơn\".",
          id: "Kadang saya menyesal \"Seharusnya beli lebih murah\"."
        },
        score: 1
      },
      {
        text: {
          ko: "\"이걸 내가 왜 샀지?\" 택배 뜯자마자 후회한 적이 꽤 있다",
          en: "\"Why did I buy this?\" I've regretted it quite often right after opening the package.",
          ja: "「これをなぜ買ったんだろう？」配送を開けた途端に後悔したことがかなりある",
          "zh-CN": "「我为什么要买这个？」拆开快递就后悔的情况不少",
          "zh-TW": "「我為什麼要買這個？」拆開快遞就後悔的情況不少",
          vi: "\"Tại sao tôi lại mua cái này?\" Tôi đã hối hận khá nhiều ngay sau khi mở gói hàng.",
          id: "\"Kenapa saya beli ini?\" Saya cukup sering menyesal langsung setelah membuka paket."
        },
        score: 2
      },
      {
        text: {
          ko: "포장도 안 뜯은 새 상품이 방구석에 굴러다닌다",
          en: "Unopened new products are rolling around in the corner of my room.",
          ja: "包装も開けていない新品が部屋の隅に転がっている",
          "zh-CN": "连包装都没拆的新商品在房间角落里滚来滚去",
          "zh-TW": "連包裝都沒拆的新商品在房間角落裡滾來滾去",
          vi: "Những sản phẩm mới chưa mở bao bì đang lăn lóc trong góc phòng.",
          id: "Produk baru yang belum dibuka kemasannya berguling-guling di sudut kamar."
        },
        score: 3
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "친구가 예쁜 물건을 샀다고 자랑한다.",
      en: "A friend brags about buying something pretty.",
      ja: "友達がきれいなものを買ったと自慢する。",
      "zh-CN": "朋友炫耀买了个漂亮的东西。",
      "zh-TW": "朋友炫耀買了個漂亮的東西。",
      vi: "Bạn bè khoe đã mua một món đồ đẹp.",
      id: "Teman membanggakan membeli sesuatu yang cantik."
    },
    options: [
      {
        text: {
          ko: "\"예쁘네~ 잘 샀다.\" 칭찬해주고 끝",
          en: "\"It's pretty~ Good buy.\" I compliment and that's it.",
          ja: "「きれいだね〜よく買ったね。」褒めて終わり",
          "zh-CN": "「很漂亮~买得好。」夸完就结束",
          "zh-TW": "「很漂亮~買得好。」誇完就結束",
          vi: "\"Đẹp quá~ Mua tốt đấy.\" Tôi khen và thế là xong.",
          id: "\"Cantik~ Bagus belinya.\" Saya puji dan selesai."
        },
        score: 0
      },
      {
        text: {
          ko: "\"얼마야? 어디서 샀어?\" 정보는 물어보지만 사진 않는다",
          en: "\"How much? Where did you buy it?\" I ask for info but don't buy it.",
          ja: "「いくら？どこで買ったの？」情報は聞くけど買わない",
          "zh-CN": "「多少钱？在哪买的？」会问信息但不买",
          "zh-TW": "「多少錢？在哪買的？」會問資訊但不買",
          vi: "\"Bao nhiêu? Mua ở đâu?\" Tôi hỏi thông tin nhưng không mua.",
          id: "\"Berapa? Beli di mana?\" Saya tanya info tapi tidak beli."
        },
        score: 1
      },
      {
        text: {
          ko: "\"나도 사고 싶다...\" 따라 살까 말까 하루 종일 고민한다",
          en: "\"I want to buy it too...\" I agonize all day about whether to copy them.",
          ja: "「私も買いたい...」真似して買うかどうか一日中悩む",
          "zh-CN": "「我也想买...」纠结一整天要不要跟着买",
          "zh-TW": "「我也想買...」糾結一整天要不要跟著買",
          vi: "\"Tôi cũng muốn mua...\" Tôi đau đầu cả ngày về việc có nên mua theo không.",
          id: "\"Saya juga mau beli...\" Saya bingung sepanjang hari apakah harus ikut beli."
        },
        score: 2
      },
      {
        text: {
          ko: "\"손민수(따라 하기) 해야지!\" 바로 링크 달라고 해서 똑같은 걸 산다",
          en: "\"I should copy them!\" I immediately ask for the link and buy the exact same thing.",
          ja: "「真似しなきゃ！」すぐにリンクを聞いて全く同じものを買う",
          "zh-CN": "「应该跟风！」立刻要链接买一模一样的东西",
          "zh-TW": "「應該跟風！」立刻要連結買一模一樣的東西",
          vi: "\"Phải làm theo!\" Tôi ngay lập tức xin link và mua y hệt.",
          id: "\"Harus ikut!\" Saya langsung minta link dan beli barang yang sama persis."
        },
        score: 3
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "당신에게 '돈'이란?",
      en: "What does 'money' mean to you?",
      ja: "あなたにとって「お金」とは？",
      "zh-CN": "对你来说'钱'是什么？",
      "zh-TW": "對你來說「錢」是什麼？",
      vi: "'Tiền' đối với bạn là gì?",
      id: "Apa arti 'uang' bagi Anda?"
    },
    options: [
      {
        text: {
          ko: "미래를 위해 차곡차곡 모아야 하는 것",
          en: "Something I need to save up bit by bit for the future.",
          ja: "未来のために少しずつ積み立てるべきもの",
          "zh-CN": "需要一点一点为未来积攒的东西",
          "zh-TW": "需要一點一點為未來積攢的東西",
          vi: "Thứ cần tích lũy từng chút một cho tương lai.",
          id: "Sesuatu yang perlu ditabung sedikit demi sedikit untuk masa depan."
        },
        score: 0
      },
      {
        text: {
          ko: "필요한 곳에 적절하게 써야 하는 수단",
          en: "A means to use appropriately where needed.",
          ja: "必要な場所に適切に使うべき手段",
          "zh-CN": "应该在需要的地方适当使用的工具",
          "zh-TW": "應該在需要的地方適當使用的工具",
          vi: "Phương tiện để sử dụng phù hợp ở những nơi cần thiết.",
          id: "Sarana untuk digunakan dengan tepat di tempat yang diperlukan."
        },
        score: 1
      },
      {
        text: {
          ko: "쓰기 위해 버는 것. 현재의 행복이 중요하다",
          en: "Something I earn to spend. Current happiness is important.",
          ja: "使うために稼ぐもの。現在の幸せが大切",
          "zh-CN": "为了花而赚的东西。当下的幸福很重要",
          "zh-TW": "為了花而賺的東西。當下的幸福很重要",
          vi: "Thứ tôi kiếm để tiêu. Hạnh phúc hiện tại là quan trọng.",
          id: "Sesuatu yang saya dapatkan untuk dibelanjakan. Kebahagiaan saat ini penting."
        },
        score: 2
      },
      {
        text: {
          ko: "있다가도 없고 없다가도 있는 것",
          en: "Something that comes and goes.",
          ja: "あったりなかったりするもの",
          "zh-CN": "时有时无的东西",
          "zh-TW": "時有時無的東西",
          vi: "Thứ có khi có, có khi không.",
          id: "Sesuatu yang kadang ada, kadang tidak ada."
        },
        score: 3
      }
    ]
  }
];

export const phase2ImpulseBuyingResults: Phase2ImpulseBuyingResult[] = [
  {
    type: "Type1",
    emoji: "🧘‍♂️",
    title: {
      ko: "무소유의 경지, 돌부처",
      en: "Realm of Non-Possession, Stone Buddha",
      ja: "無所有の境地、石仏",
      "zh-CN": "无所有的境界，石佛",
      "zh-TW": "無所有的境界，石佛",
      vi: "Cảnh giới vô sở hữu, Phật đá",
      id: "Ranah Tanpa Kepemilikan, Buddha Batu"
    },
    shortDescription: {
      ko: "\"돈 쓸 일이 없는데 왜 써요?\"",
      en: "\"Why spend money when there's nothing to spend it on?\"",
      ja: "「お金を使うことがないのにどうして使うの？」",
      "zh-CN": "「没什么要花钱的，为什么要花？」",
      "zh-TW": "「沒什麼要花錢的，為什麼要花？」",
      vi: "\"Không có gì để tiêu, tại sao lại tiêu?\"",
      id: "\"Tidak ada yang perlu dibelanjakan, kenapa harus belanja?\""
    },
    description: {
      ko: "당신은 물욕 자체가 거의 없는 청정 구역입니다. 충동구매가 뭔지 모르며, 꼭 필요한 물건이 아니면 지갑을 열지 않습니다. 저축왕이 될 자질이 충분하지만, 가끔은 나를 위한 작은 선물도 필요합니다.",
      en: "You're in a pure zone with almost no material desires. You don't know what impulse buying is, and you don't open your wallet unless it's absolutely necessary. You have what it takes to be a savings king, but sometimes you need a small gift for yourself too.",
      ja: "あなたは物欲そのものがほとんどない清浄な領域です。衝動買いが何かわからず、絶対に必要なものでなければ財布を開きません。貯蓄王になる資質は十分ありますが、たまには自分のための小さなプレゼントも必要です。",
      "zh-CN": "你是一个几乎没有物欲的纯净区域。不知道什么是冲动购买，除非绝对必要，否则不会打开钱包。你有成为储蓄王的潜质，但有时也需要给自己一点小礼物。",
      "zh-TW": "你是一個幾乎沒有物慾的純淨區域。不知道什麼是衝動購買，除非絕對必要，否則不會打開錢包。你有成為儲蓄王的潛質，但有時也需要給自己一點小禮物。",
      vi: "Bạn ở trong vùng sạch sẽ hầu như không có ham muốn vật chất. Bạn không biết mua sắm bốc đồng là gì, và bạn không mở ví trừ khi thực sự cần thiết. Bạn có đủ tố chất để trở thành vua tiết kiệm, nhưng đôi khi bạn cũng cần một món quà nhỏ cho chính mình.",
      id: "Anda berada di zona murni dengan hampir tidak ada keinginan material. Anda tidak tahu apa itu pembelian impulsif, dan Anda tidak membuka dompet kecuali benar-benar perlu. Anda punya bakat menjadi raja tabungan, tapi kadang juga perlu hadiah kecil untuk diri sendiri."
    },
    impulseLevel: {
      ko: "0%",
      en: "0%",
      ja: "0%",
      "zh-CN": "0%",
      "zh-TW": "0%",
      vi: "0%",
      id: "0%"
    },
    characteristics: {
      ko: "10년 입은 패딩, 쿠폰/포인트 소멸됨",
      en: "10-year-old jacket, expired coupons/points",
      ja: "10年着たダウン、クーポン/ポイント失効",
      "zh-CN": "穿了10年的羽绒服，优惠券/积分过期",
      "zh-TW": "穿了10年的羽絨服，優惠券/積分過期",
      vi: "Áo khoác mặc 10 năm, coupon/điểm hết hạn",
      id: "Jaket 10 tahun, kupon/poin kedaluwarsa"
    },
    goodMatch: {
      ko: "Type 2 (스마트 컨슈머)",
      en: "Type 2 (Smart Consumer)",
      ja: "Type 2 (スマート消費者)",
      "zh-CN": "Type 2 (智能消费者)",
      "zh-TW": "Type 2 (智能消費者)",
      vi: "Type 2 (Người tiêu dùng thông minh)",
      id: "Type 2 (Konsumen Cerdas)"
    },
    badMatch: {
      ko: "Type 6 (파산 직전 지름신)",
      en: "Type 6 (Bankruptcy-Bound Shopaholic)",
      ja: "Type 6 (破産直前の買い物依存)",
      "zh-CN": "Type 6 (破产边缘的购物狂)",
      "zh-TW": "Type 6 (破產邊緣的購物狂)",
      vi: "Type 6 (Người nghiện mua sắm sắp phá sản)",
      id: "Type 6 (Shopaholic di Ambang Kebangkrutan)"
    }
  },
  {
    type: "Type2",
    emoji: "🤓",
    title: {
      ko: "갓성비 감별사, 스마트 컨슈머",
      en: "Value Detective, Smart Consumer",
      ja: "コスパ鑑定士、スマート消費者",
      "zh-CN": "性价比鉴定师，智能消费者",
      "zh-TW": "性價比鑑定師，智能消費者",
      vi: "Thám tử giá trị, Người tiêu dùng thông minh",
      id: "Detektif Nilai, Konsumen Cerdas"
    },
    shortDescription: {
      ko: "\"최저가 비교 분석 완료!\"",
      en: "\"Lowest price comparison analysis complete!\"",
      ja: "「最安値比較分析完了！」",
      "zh-CN": "「最低价比较分析完成！」",
      "zh-TW": "「最低價比較分析完成！」",
      vi: "\"Phân tích so sánh giá thấp nhất hoàn tất!\"",
      id: "\"Analisis perbandingan harga terendah selesai!\""
    },
    description: {
      ko: "당신은 돈을 안 쓰는 게 아니라 '잘' 쓰는 사람입니다. 하나를 사더라도 가격, 성능, 리뷰를 꼼꼼하게 비교해서 가장 합리적인 소비를 합니다. 충동구매의 유혹이 와도 이성적으로 판단하여 방어해냅니다.",
      en: "You're not someone who doesn't spend money, but someone who spends it 'well'. Even when buying one item, you carefully compare price, performance, and reviews to make the most rational purchase. When the temptation of impulse buying comes, you defend against it with rational judgment.",
      ja: "あなたはお金を使わない人ではなく、「うまく」使う人です。一つを買うにしても価格、性能、レビューを丁寧に比較して最も合理的な消費をします。衝動買いの誘惑が来ても理性的に判断して防ぎます。",
      "zh-CN": "你不是不花钱的人，而是'会'花钱的人。即使只买一件东西，你也会仔细比较价格、性能和评论，做出最理性的消费。即使冲动购买的诱惑来了，你也能用理性判断来抵御。",
      "zh-TW": "你不是不花錢的人，而是「會」花錢的人。即使只買一件東西，你也會仔細比較價格、性能和評論，做出最理性的消費。即使衝動購買的誘惑來了，你也能用理性判斷來抵禦。",
      vi: "Bạn không phải người không tiêu tiền, mà là người tiêu tiền 'khéo'. Dù chỉ mua một món, bạn cũng so sánh kỹ giá cả, hiệu năng và đánh giá để mua sắm hợp lý nhất. Khi cám dỗ mua sắm bốc đồng đến, bạn chống lại bằng phán đoán lý trí.",
      id: "Anda bukan orang yang tidak menghabiskan uang, tapi orang yang menghabiskannya dengan 'baik'. Bahkan saat membeli satu item, Anda dengan hati-hati membandingkan harga, performa, dan ulasan untuk membuat pembelian paling rasional. Ketika godaan pembelian impulsif datang, Anda mempertahankannya dengan penilaian rasional."
    },
    impulseLevel: {
      ko: "20%",
      en: "20%",
      ja: "20%",
      "zh-CN": "20%",
      "zh-TW": "20%",
      vi: "20%",
      id: "20%"
    },
    characteristics: {
      ko: "핫딜 알림 설정, 중고거래 고수",
      en: "Hot deal alerts set, secondhand trading expert",
      ja: "ホットディール通知設定、中古取引の達人",
      "zh-CN": "设置热门优惠提醒，二手交易高手",
      "zh-TW": "設置熱門優惠提醒，二手交易高手",
      vi: "Đặt cảnh báo deal hot, chuyên gia mua bán đồ cũ",
      id: "Notifikasi hot deal diatur, ahli jual beli bekas"
    },
    goodMatch: {
      ko: "Type 1 (돌부처)",
      en: "Type 1 (Stone Buddha)",
      ja: "Type 1 (石仏)",
      "zh-CN": "Type 1 (石佛)",
      "zh-TW": "Type 1 (石佛)",
      vi: "Type 1 (Phật đá)",
      id: "Type 1 (Buddha Batu)"
    },
    badMatch: {
      ko: "Type 5 (물욕의 화신)",
      en: "Type 5 (Material Desire Incarnate)",
      ja: "Type 5 (物欲の化身)",
      "zh-CN": "Type 5 (物欲的化身)",
      "zh-TW": "Type 5 (物慾的化身)",
      vi: "Type 5 (Hiện thân của ham muốn vật chất)",
      id: "Type 5 (Perwujudan Keinginan Material)"
    }
  },
  {
    type: "Type3",
    emoji: "🍰",
    title: {
      ko: "소소한 탕진잼, 기분파 쇼퍼",
      en: "Small Splurge Fun, Mood-Based Shopper",
      ja: "小さな散財、気分派ショッパー",
      "zh-CN": "小挥霍乐趣，情绪型购物者",
      "zh-TW": "小揮霍樂趣，情緒型購物者",
      vi: "Tiêu xài nhỏ vui vẻ, Người mua sắm theo tâm trạng",
      id: "Bersenang-senang Kecil, Pembeli Berbasis Mood"
    },
    shortDescription: {
      ko: "\"시발비용은 어쩔 수 없지\"",
      en: "\"Stress spending is unavoidable\"",
      ja: "「ストレス発散費は仕方ない」",
      "zh-CN": "「解压费用是没办法的」",
      "zh-TW": "「解壓費用是沒辦法的」",
      vi: "\"Chi phí giải tỏa căng thẳng là không thể tránh\"",
      id: "\"Pengeluaran stres tidak bisa dihindari\""
    },
    description: {
      ko: "당신은 평소엔 절약하다가도 스트레스를 받으면 지갑이 열리는 타입입니다. 큰돈은 못 쓰지만, 배달 음식이나 편의점 간식, 다이소 쇼핑 같은 소소한 지출로 기분을 전환합니다. '나를 위한 보상'이라는 명목으로 야금야금 통장이 털립니다.",
      en: "You're the type who saves normally but opens your wallet when stressed. You can't spend big money, but you switch your mood with small expenses like delivery food, convenience store snacks, or Daiso shopping. Your account gets drained bit by bit under the name of 'rewarding myself'.",
      ja: "あなたは普段は節約しているのにストレスを受けると財布が開くタイプです。大金は使えませんが、デリバリー料理やコンビニのおやつ、ダイソーショッピングのような小さな支出で気分を転換します。「自分へのご褒美」という名目で少しずつ口座が空になります。",
      "zh-CN": "你是平时节省但一有压力就打开钱包的类型。虽然花不了大钱，但会用外卖、便利店零食、大创购物这样的小支出来转换心情。以'给自己的奖励'为名，账户一点点被掏空。",
      "zh-TW": "你是平時節省但一有壓力就打開錢包的類型。雖然花不了大錢，但會用外賣、便利商店零食、大創購物這樣的小支出來轉換心情。以「給自己的獎勵」為名，帳戶一點點被掏空。",
      vi: "Bạn là kiểu người bình thường tiết kiệm nhưng khi căng thẳng thì mở ví. Bạn không thể tiêu nhiều tiền, nhưng bạn chuyển tâm trạng bằng những khoản nhỏ như đồ ăn giao hàng, đồ ăn vặt cửa hàng tiện lợi, hoặc mua sắm ở Daiso. Tài khoản bị rút dần dần dưới danh nghĩa 'thưởng cho bản thân'.",
      id: "Anda tipe yang hemat biasanya tapi membuka dompet saat stres. Anda tidak bisa menghabiskan uang besar, tapi mengubah suasana hati dengan pengeluaran kecil seperti makanan pesan antar, camilan minimarket, atau belanja Daiso. Akun Anda terkuras sedikit demi sedikit dengan nama 'hadiah untuk diri sendiri'."
    },
    impulseLevel: {
      ko: "40%",
      en: "40%",
      ja: "40%",
      "zh-CN": "40%",
      "zh-TW": "40%",
      vi: "40%",
      id: "40%"
    },
    characteristics: {
      ko: "배달 앱 VIP, 예쁜 쓰레기 수집",
      en: "Delivery app VIP, pretty junk collector",
      ja: "デリバリーアプリVIP、きれいなガラクタ収集",
      "zh-CN": "外卖应用VIP，漂亮垃圾收集者",
      "zh-TW": "外賣應用VIP，漂亮垃圾收集者",
      vi: "VIP ứng dụng giao hàng, người sưu tầm đồ đẹp vô dụng",
      id: "VIP aplikasi pengiriman, kolektor barang cantik tidak berguna"
    },
    goodMatch: {
      ko: "Type 4 (팔랑귀 호구)",
      en: "Type 4 (Easily Swayed Sucker)",
      ja: "Type 4 (耳の軽いカモ)",
      "zh-CN": "Type 4 (耳根软的冤大头)",
      "zh-TW": "Type 4 (耳根軟的冤大頭)",
      vi: "Type 4 (Người dễ bị lung lay)",
      id: "Type 4 (Orang yang Mudah Terpengaruh)"
    },
    badMatch: {
      ko: "Type 1 (돌부처)",
      en: "Type 1 (Stone Buddha)",
      ja: "Type 1 (石仏)",
      "zh-CN": "Type 1 (石佛)",
      "zh-TW": "Type 1 (石佛)",
      vi: "Type 1 (Phật đá)",
      id: "Type 1 (Buddha Batu)"
    }
  },
  {
    type: "Type4",
    emoji: "👂",
    title: {
      ko: "귀 얇은 갈대, 팔랑귀 호구",
      en: "Thin-Eared Reed, Easily Swayed Sucker",
      ja: "耳の軽い葦、すぐに動かされるカモ",
      "zh-CN": "耳根软的芦苇，容易动摇的冤大头",
      "zh-TW": "耳根軟的蘆葦，容易動搖的冤大頭",
      vi: "Cây sậy tai mỏng, Người dễ bị lung lay",
      id: "Bambu Telinga Tipis, Orang yang Mudah Terpengaruh"
    },
    shortDescription: {
      ko: "\"남들이 좋다고 하면 다 좋아 보여\"",
      en: "\"If others say it's good, everything looks good\"",
      ja: "「みんなが良いと言うと全部良く見える」",
      "zh-CN": "「别人说好，就都觉得好」",
      "zh-TW": "「別人說好，就都覺得好」",
      vi: "\"Người khác nói tốt thì cái gì cũng tốt\"",
      id: "\"Kalau orang lain bilang bagus, semuanya terlihat bagus\""
    },
    description: {
      ko: "당신은 유행에 민감하고 남들의 말에 쉽게 흔들립니다. \"이거 진짜 좋아!\"라는 친구의 말이나 SNS 광고에 넘어가서 결제하는 경우가 많습니다. 사고 나서 보면 딱히 필요 없는 물건인 경우가 태반입니다.",
      en: "You're sensitive to trends and easily swayed by what others say. You often fall for a friend saying \"This is really good!\" or SNS ads and end up paying. After buying, you realize most of the time it's something you don't really need.",
      ja: "あなたは流行に敏感で、他人の言葉に簡単に動かされます。「これ本当にいい！」という友達の言葉やSNS広告に引っかかって決済することが多いです。買ってみると特に必要のないものの場合が大半です。",
      "zh-CN": "你对流行很敏感，容易被别人的话影响。经常被朋友说「这个真的很好！」或SNS广告吸引而付款。买完后发现大多数时候都是不需要的东西。",
      "zh-TW": "你對流行很敏感，容易被別人的話影響。經常被朋友說「這個真的很好！」或SNS廣告吸引而付款。買完後發現大多數時候都是不需要的東西。",
      vi: "Bạn nhạy cảm với xu hướng và dễ bị lung lay bởi lời người khác. Bạn thường bị cuốn theo lời bạn bè \"Cái này thực sự tốt!\" hoặc quảng cáo SNS và kết thúc bằng việc thanh toán. Sau khi mua, bạn nhận ra hầu hết là những thứ không thực sự cần thiết.",
      id: "Anda sensitif terhadap tren dan mudah terpengaruh oleh perkataan orang lain. Anda sering terpikat oleh teman yang bilang \"Ini benar-benar bagus!\" atau iklan SNS dan akhirnya membayar. Setelah membeli, Anda menyadari sebagian besar waktu itu adalah sesuatu yang tidak benar-benar Anda butuhkan."
    },
    impulseLevel: {
      ko: "60%",
      en: "60%",
      ja: "60%",
      "zh-CN": "60%",
      "zh-TW": "60%",
      vi: "60%",
      id: "60%"
    },
    characteristics: {
      ko: "집에 안 쓰는 운동기구 있음, 화장품 쟁여둠",
      en: "Unused exercise equipment at home, stockpiled cosmetics",
      ja: "家に使っていない運動器具あり、化粧品を買いだめ",
      "zh-CN": "家里有没用的健身器材，囤积的化妆品",
      "zh-TW": "家裡有沒用的健身器材，囤積的化妝品",
      vi: "Có thiết bị tập thể dục không dùng ở nhà, tích trữ mỹ phẩm",
      id: "Peralatan olahraga tidak terpakai di rumah, kosmetik ditimbun"
    },
    goodMatch: {
      ko: "Type 3 (기분파 쇼퍼)",
      en: "Type 3 (Mood-Based Shopper)",
      ja: "Type 3 (気分派ショッパー)",
      "zh-CN": "Type 3 (情绪型购物者)",
      "zh-TW": "Type 3 (情緒型購物者)",
      vi: "Type 3 (Người mua sắm theo tâm trạng)",
      id: "Type 3 (Pembeli Berbasis Mood)"
    },
    badMatch: {
      ko: "Type 2 (스마트 컨슈머)",
      en: "Type 2 (Smart Consumer)",
      ja: "Type 2 (スマート消費者)",
      "zh-CN": "Type 2 (智能消费者)",
      "zh-TW": "Type 2 (智能消費者)",
      vi: "Type 2 (Người tiêu dùng thông minh)",
      id: "Type 2 (Konsumen Cerdas)"
    }
  },
  {
    type: "Type5",
    emoji: "🦁",
    title: {
      ko: "맥시멀리스트, 물욕의 화신",
      en: "Maximalist, Material Desire Incarnate",
      ja: "マキシマリスト、物欲の化身",
      "zh-CN": "极简主义者，物欲的化身",
      "zh-TW": "極簡主義者，物慾的化身",
      vi: "Người tối đa hóa, Hiện thân của ham muốn vật chất",
      id: "Maksimalis, Perwujudan Keinginan Material"
    },
    shortDescription: {
      ko: "\"세상은 넓고 사고 싶은 건 많다\"",
      en: "\"The world is wide and there's so much I want to buy\"",
      ja: "「世界は広くて買いたいものがたくさんある」",
      "zh-CN": "「世界很广阔，想买的东西很多」",
      "zh-TW": "「世界很廣闊，想買的東西很多」",
      vi: "\"Thế giới rộng lớn và có nhiều thứ muốn mua\"",
      id: "\"Dunia luas dan ada banyak yang ingin dibeli\""
    },
    description: {
      ko: "당신은 갖고 싶은 건 가져야 직성이 풀리는 스타일입니다. \"고민은 배송만 늦출 뿐\"이라는 명언을 실천하며, 신상이나 한정판은 무조건 손에 넣어야 합니다. 방 안에 물건이 넘쳐나지만, 여전히 살 것이 남아있습니다.",
      en: "You're the type who must have what you want to feel satisfied. You practice the saying \"Hesitation only delays delivery,\" and you absolutely must get new releases or limited editions. Your room is overflowing with stuff, but there's still more you want to buy.",
      ja: "あなたは欲しいものは手に入れないと気が済まないタイプです。「悩むことは配送を遅らせるだけ」という名言を実践し、新商品や限定版は絶対に手に入れなければなりません。部屋には物があふれていますが、まだ買いたいものが残っています。",
      "zh-CN": "你是想要的东西必须得到才能满足的类型。你实践着「犹豫只会延迟配送」这句名言，新品或限量版必须到手。房间里东西已经堆满了，但还有更多想买的东西。",
      "zh-TW": "你是想要的東西必須得到才能滿足的類型。你實踐著「猶豫只會延遲配送」這句名言，新品或限量版必須到手。房間裡東西已經堆滿了，但還有更多想買的東西。",
      vi: "Bạn là kiểu người phải có được thứ mình muốn mới thỏa mãn. Bạn thực hành câu nói \"Do dự chỉ làm chậm giao hàng\", và bạn nhất định phải có được sản phẩm mới hoặc phiên bản giới hạn. Phòng bạn đã đầy ắp đồ đạc, nhưng vẫn còn nhiều thứ muốn mua.",
      id: "Anda tipe yang harus memiliki apa yang diinginkan untuk merasa puas. Anda mempraktikkan pepatah \"Keraguan hanya menunda pengiriman\", dan Anda harus mendapatkan rilis baru atau edisi terbatas. Kamar Anda penuh dengan barang, tapi masih ada lebih banyak yang ingin dibeli."
    },
    impulseLevel: {
      ko: "80%",
      en: "80%",
      ja: "80%",
      "zh-CN": "80%",
      "zh-TW": "80%",
      vi: "80%",
      id: "80%"
    },
    characteristics: {
      ko: "택배 박스로 인테리어, 카드값 리볼빙 고민",
      en: "Interior with delivery boxes, revolving credit card debt worries",
      ja: "配送ボックスでインテリア、カード代リボルビング悩み",
      "zh-CN": "用快递箱做装饰，信用卡循环债务困扰",
      "zh-TW": "用快遞箱做裝飾，信用卡循環債務困擾",
      vi: "Nội thất bằng hộp giao hàng, lo lắng về nợ thẻ tín dụng xoay vòng",
      id: "Interior dengan kotak pengiriman, khawatir tentang hutang kartu kredit berputar"
    },
    goodMatch: {
      ko: "Type 6 (파산 직전 지름신)",
      en: "Type 6 (Bankruptcy-Bound Shopaholic)",
      ja: "Type 6 (破産直前の買い物依存)",
      "zh-CN": "Type 6 (破产边缘的购物狂)",
      "zh-TW": "Type 6 (破產邊緣的購物狂)",
      vi: "Type 6 (Người nghiện mua sắm sắp phá sản)",
      id: "Type 6 (Shopaholic di Ambang Kebangkrutan)"
    },
    badMatch: {
      ko: "Type 2 (스마트 컨슈머)",
      en: "Type 2 (Smart Consumer)",
      ja: "Type 2 (スマート消費者)",
      "zh-CN": "Type 2 (智能消费者)",
      "zh-TW": "Type 2 (智能消費者)",
      vi: "Type 2 (Người tiêu dùng thông minh)",
      id: "Type 2 (Konsumen Cerdas)"
    }
  },
  {
    type: "Type6",
    emoji: "💸",
    title: {
      ko: "통장 브레이커, 파산 직전 지름신",
      en: "Account Breaker, Bankruptcy-Bound Shopaholic",
      ja: "口座破壊者、破産直前の買い物依存",
      "zh-CN": "账户破坏者，破产边缘的购物狂",
      "zh-TW": "帳戶破壞者，破產邊緣的購物狂",
      vi: "Kẻ phá hủy tài khoản, Người nghiện mua sắm sắp phá sản",
      id: "Penghancur Akun, Shopaholic di Ambang Kebangkrutan"
    },
    shortDescription: {
      ko: "\"다음 달의 내가 갚겠지!\"",
      en: "\"Next month's me will pay it back!\"",
      ja: "「来月の自分が返すだろう！」",
      "zh-CN": "「下个月的我會还的！」",
      "zh-TW": "「下個月的我會還的！」",
      vi: "\"Tháng sau tôi sẽ trả!\"",
      id: "\"Bulan depan saya akan membayarnya!\""
    },
    description: {
      ko: "당신은 이미 지름신과 한 몸이 되었습니다. 현재의 행복을 위해 미래를 저당 잡히는 욜로(YOLO)족입니다. 카드 한도를 꽉 채워 쓰고, 할부의 늪에서 허우적대고 있을 확률이 높습니다. 당장 카드를 자르는 특단의 조치가 필요합니다.",
      en: "You've already become one with the shopping demon. You're a YOLO type who mortgages the future for current happiness. You're likely maxing out your credit card and struggling in the swamp of installments. You need immediate action to cut up your cards.",
      ja: "あなたはすでに買い物依存と一体になっています。現在の幸せのために未来を担保に入れるYOLO族です。カードの限度額をいっぱいまで使って、分割払いの沼でもがいている可能性が高いです。すぐにカードを切る特別な措置が必要です。",
      "zh-CN": "你已经和购物恶魔融为一体了。你是为了当下的幸福而抵押未来的YOLO族。你可能已经刷爆了信用卡额度，在分期付款的泥潭中挣扎。需要立即采取行动剪掉信用卡。",
      "zh-TW": "你已經和購物惡魔融為一體了。你是為了當下的幸福而抵押未來的YOLO族。你可能已經刷爆了信用卡額度，在分期付款的泥潭中掙扎。需要立即採取行動剪掉信用卡。",
      vi: "Bạn đã trở thành một với quỷ mua sắm. Bạn là kiểu YOLO cầm cố tương lai cho hạnh phúc hiện tại. Bạn có khả năng cao đã dùng hết hạn mức thẻ tín dụng và đang vật lộn trong đầm lầy trả góp. Bạn cần hành động ngay lập tức để cắt thẻ.",
      id: "Anda sudah menjadi satu dengan iblis belanja. Anda adalah tipe YOLO yang menggadaikan masa depan untuk kebahagiaan saat ini. Anda kemungkinan besar sudah memaksimalkan limit kartu kredit dan bergumul dalam rawa cicilan. Anda perlu tindakan segera untuk memotong kartu."
    },
    impulseLevel: {
      ko: "99.9%",
      en: "99.9%",
      ja: "99.9%",
      "zh-CN": "99.9%",
      "zh-TW": "99.9%",
      vi: "99.9%",
      id: "99.9%"
    },
    characteristics: {
      ko: "\"어떻게든 되겠지\" 마인드, 월급 스쳐 지나감",
      en: "\"It'll work out somehow\" mindset, salary passes by",
      ja: "「どうにかなるだろう」マインド、給料が通り過ぎる",
      "zh-CN": "「总会有办法的」心态，工资一闪而过",
      "zh-TW": "「總會有辦法的」心態，工資一閃而過",
      vi: "Tâm lý \"Sẽ ổn thôi\", lương trôi qua",
      id: "Mindset \"Akan beres\", gaji berlalu"
    },
    goodMatch: {
      ko: "Type 5 (물욕의 화신)",
      en: "Type 5 (Material Desire Incarnate)",
      ja: "Type 5 (物欲の化身)",
      "zh-CN": "Type 5 (物欲的化身)",
      "zh-TW": "Type 5 (物慾的化身)",
      vi: "Type 5 (Hiện thân của ham muốn vật chất)",
      id: "Type 5 (Perwujudan Keinginan Material)"
    },
    badMatch: {
      ko: "Type 1 (돌부처)",
      en: "Type 1 (Stone Buddha)",
      ja: "Type 1 (石仏)",
      "zh-CN": "Type 1 (石佛)",
      "zh-TW": "Type 1 (石佛)",
      vi: "Type 1 (Phật đá)",
      id: "Type 1 (Buddha Batu)"
    }
  }
];

export function calculatePhase2ImpulseBuyingResult(answers: number[]): string {
  const totalScore = answers.reduce((sum, score) => sum + score, 0);
  
  if (totalScore >= 0 && totalScore <= 5) {
    return "Type1";
  } else if (totalScore >= 6 && totalScore <= 11) {
    return "Type2";
  } else if (totalScore >= 12 && totalScore <= 19) {
    return "Type3";
  } else if (totalScore >= 20 && totalScore <= 27) {
    return "Type4";
  } else if (totalScore >= 28 && totalScore <= 33) {
    return "Type5";
  } else if (totalScore >= 34 && totalScore <= 36) {
    return "Type6";
  } else {
    // Fallback for any unexpected scores
    return "Type6";
  }
}
