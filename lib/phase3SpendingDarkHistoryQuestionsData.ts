import type { Phase3SpendingDarkHistoryQuestion } from './phase3SpendingDarkHistoryTypes';

function tx(
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

export const phase3SpendingDarkHistoryTypeQuestions: Phase3SpendingDarkHistoryQuestion[] = [
  {
    id: 1,
    question: tx(
      '헬스장·필라테스·수영장 등 운동 시설 등록 경험은?',
      'Gym, pilates, pool, etc.—what is your experience with fitness memberships?',
      'ジム・ピラティス・プールなど、運動施設の会員・登録の経験は？',
      '健身房、普拉提、泳池等运动设施，你的办卡经历是？',
      '健身房、皮拉提斯、泳池等運動設施，你的辦卡經驗是？',
      'Phòng gym, pilates, bể bơi… trải nghiệm đăng ký cơ sở thể thao của bạn?',
      'Pengalamanmu mendaftar gym, pilates, kolam renang, atau fasilitas olahraga?'
    ),
    options: [
      { score: 0, text: tx('등록한 만큼 잘 다녔다. 아니면 처음부터 등록하지 않는다', 'I went as often as I signed up—or I do not sign up if I will not go.', '入会した分は通った。通わないなら最初から契約しない。', '办了多少就去多少，要么一开始就不办。', '辦了多少就去多少，要嘛一開始就不辦。', 'Đăng ký bao nhiêu thì đi bấy nhiêu—hoặc không đăng ký nếu biết mình không đi.', 'Datang sesuai yang didaftarkan—atau tidak mendaftar kalau tidak akan datang.') },
      { score: 1, text: tx('처음 한 달은 열심히, 두 번째 달부터 뜸해진 경험이 있다', 'Strong the first month; from the second month I started skipping.', '最初の1か月は頑張ったが、2か月目から行かなくなった。', '第一个月很勤快，第二个月开始就变少了。', '第一個月很勤快，第二個月開始就變少了。', 'Tháng đầu chăm, từ tháng hai bắt đầu lười đi.', 'Bulan pertama rajin, bulan kedua mulai jarang.') },
      { score: 2, text: tx('등록 후 10번도 안 가고 기간이 끝난 경험이 한 번 이상 있다', 'At least once I went fewer than 10 times before the membership ended.', '契約中に10回も行かずに終わったことが一度以上ある。', '至少有一次办卡期间去了不到十次就结束了。', '至少有一次辦卡期間去了不到十次就結束了。', 'Ít nhất một lần đi chưa đến 10 buổi đã hết hạn.', 'Pernah kurang dari 10 kali datang lalu masa habis.') },
      { score: 3, text: tx('연간 회원권을 끊고 거의 안 간 경험이 있다. 카드 할인에 혹했다', 'Yearly pass and barely went—the card discount hooked me.', '年間会員を買ったのにほとんど行っていない。カード割引に釣られた。', '办过年卡但几乎没去，被刷卡优惠吸引了。', '辦過年卡但幾乎沒去，被刷卡優惠吸引了。', 'Mua vé năm nhưng gần như không đi—bị giảm giá thẻ dụ.', 'Member tahunan tapi hampir tidak datang—tergiur diskon kartu.') },
    ],
  },
  {
    id: 2,
    question: tx('온라인 쇼핑 장바구니 상태는?', 'How is your online shopping cart?', 'オンラインショッピングのカートの状態は？', '网购购物车状态如何？', '網購購物車狀態如何？', 'Giỏ hàng mua sắm online của bạn thế nào?', 'Keranjang belanja online-mu seperti apa?'),
    options: [
      { score: 0, text: tx('장바구니에 담으면 대부분 산다. 비워두는 편이다', 'If it is in the cart, I usually buy it—I tend to clear the cart.', 'カートに入れたらだいたい買う。空にするタイプ。', '放进购物车的大多会买，习惯清空。', '放進購物車的大多會買，習慣清空。', 'Cho vào giỏ là thường mua—hay dọn giỏ.', 'Masuk keranjang biasanya dibeli—suka kosongkan.') },
      { score: 1, text: tx('일주일 이상 담아두고 결국 사지 않는 경우가 있다', 'Sometimes items sit a week+ and I never buy them.', '1週間以上入れたまま結局買わないことがある。', '有时会放一周以上最后不买。', '有時會放一週以上最後不買。', 'Để hơn một tuần rồi cuối cùng không mua.', 'Kadang dibiarkan lebih seminggu lalu tidak jadi beli.') },
      { score: 2, text: tx('장바구니가 늘 가득하다. 할인 알림 오면 그때 사는 편이다', 'Cart is often full; I buy when a sale alert hits.', 'カートはいつもぱんぱん。セール通知が来たら買う。', '购物车常满，有折扣提醒才买。', '購物車常滿，有折扣提醒才買。', 'Giỏ hay đầy; có thông báo giảm giá mới mua.', 'Keranjang sering penuh; beli saat ada notifikasi diskon.') },
      { score: 3, text: tx('장바구니 할인 쿠폰 받으려고 담아뒀다가 그냥 다 사버린 적 있다', 'I added items for a cart coupon and ended up buying everything.', 'カート用クーポンをもらうために入れて、結局全部買ったことがある。', '为了拿购物车优惠券加购结果全买了。', '為了拿購物車優惠券加購結果全買了。', 'Thêm đồ để lấy coupon rồi mua hết luôn.', 'Tambah barang demi kupon keranjang lalu membeli semua.') },
    ],
  },
  {
    id: 3,
    question: tx('세일·블랙프라이데이·쿠폰 행사 때 나는?', 'During sales, Black Friday, or coupon events, you…', 'セール・ブラックフライデー・クーポン施策のとき、あなたは？', '大促、黑五、优惠券活动时，你会？', '大促、黑五、優惠券活動時，你會？', 'Khi sale, Black Friday, hay coupon, bạn…', 'Saat sale, Black Friday, atau promo kupon, kamu…'),
    options: [
      { score: 0, text: tx('평소에 필요한 것만 세일 때 산다. 세일이 목적이 되지 않는다', 'I only buy what I already need on sale—the sale is not the goal.', '普段必要なものだけセールで買う。セール目的ではない。', '只买平时就需要的，不为凑促销而买。', '只買平時就需要的，不為湊促銷而買。', 'Chỉ mua thứ thật sự cần—không vì sale mà mua.', 'Hanya beli yang memang dibutuhkan—bukan karena sale.') },
      { score: 1, text: tx('살 계획이 없던 것도 세일이면 한두 개 더 사는 편이다', 'I grab one or two extra things I did not plan to buy.', '買う予定がなくてもセールなら一つ二つ余計に買う。', '计划外的东西也会因为打折多买一两件。', '計畫外的東西也會因為打折多買一兩件。', 'Không định mua nhưng sale thì mua thêm vài món.', 'Tidak direncanakan tapi diskon jadi beli tambahan.') },
      { score: 2, text: tx('세일 시즌에 평소보다 훨씬 많이 쓴다. 나중에 후회하는 경우 있다', 'I spend way more in sale season—sometimes I regret it.', 'セール期は普段よりはるかに使う。あとで後悔することも。', '促销季花得比平时多很多，事后会后悔。', '促銷季花得比平時多很多，事後會後悔。', 'Mùa sale tiêu nhiều hơn hẳn—đôi khi hối hận.', 'Musim sale belanja jauh lebih banyak—kadang menyesal.') },
      { score: 3, text: tx('블랙프라이데이 카드 명세서 보고 멘붕한 경험이 있다', 'Black Friday statement broke me once.', 'ブラックフライデーのカード明細を見てメンタルがやられたことがある。', '曾因黑五账单心态崩过。', '曾因黑五帳單心態崩過。', 'Từng shock vì sao kẹt sau Black Friday.', 'Pernah kaget lihat tagihan setelah Black Friday.') },
    ],
  },
  {
    id: 4,
    question: tx('무료 체험·구독 서비스 관련 경험은?', 'Free trials and subscriptions—your experience?', '無料トライアル・サブスク関連の経験は？', '免费试用和订阅服务，你的经历？', '免費試用和訂閱服務，你的經歷？', 'Dùng thử miễn phí và đăng ký dịch vụ—trải nghiệm của bạn?', 'Uji coba gratis dan langganan—pengalamanmu?'),
    options: [
      { score: 0, text: tx('무료 체험 신청 시 해지 일정을 미리 캘린더에 등록한다', 'When I start a trial, I schedule cancel on the calendar.', '無料トライアル開始時、解約日をカレンダーに入れる。', '申请试用时就把取消日期记在日历。', '申請試用時就把取消日期記在日曆。', 'Bắt đầu dùng thử là lên lịch hủy trên lịch.', 'Mulai trial langsung jadwalkan berhenti di kalender.') },
      { score: 1, text: tx('해지를 잊어서 한 달 정도 더 결제된 경험이 한 번 있다', 'I forgot to cancel once and paid about a month extra.', '解約を忘れて1か月くらい余計に課金されたことがある。', '忘了解约多付过大约一个月。', '忘了解約多付過大約一個月。', 'Quên hủy nên trả thêm khoảng một tháng.', 'Lupa batalkan jadi kena tagihan sekitar sebulan.') },
      { score: 2, text: tx('무료 체험이 유료로 전환된 걸 2~3개월 뒤에 발견한 적 있다', 'I noticed a trial turned paid 2–3 months late.', '無料が有料に変わったのを2〜3か月後に気づいたことがある。', '两三个月后才注意到试用已转付费。', '兩三個月後才注意到試用已轉付費。', '2–3 tháng sau mới phát hiện đã chuyển trả phí.', 'Baru sadar 2–3 bulan kemudian bahwa sudah berbayar.') },
      { score: 3, text: tx('지금도 어딘가에서 안 쓰는 구독 서비스가 결제 중일 것 같다', 'I probably still have unused subs charging somewhere.', '今もどこかで使っていないサブスクが課金されている気がする。', '感觉现在还有没用的订阅在扣款。', '感覺現在還有沒用的訂閱在扣款。', 'Có lẽ vẫn còn gói không dùng đang trừ tiền.', 'Mungkin masih ada langganan tidak terpakai yang memotong saldo.') },
    ],
  },
  {
    id: 5,
    question: tx('충동구매 후 반품 경험은?', 'Impulse buys and returns—your experience?', '衝動買いと返品の経験は？', '冲动购买和退货，你的经历？', '衝動購買和退貨，你的經歷？', 'Mua ngẫu hứng và trả hàng—trải nghiệm của bạn?', 'Belanja impuls dan retur—pengalamanmu?'),
    options: [
      { score: 0, text: tx('충동구매 자체가 거의 없어서 반품도 거의 없다', 'Almost no impulse buys—almost no returns.', '衝動買い自体ほぼなく、返品もほぼない。', '几乎不冲动买，也几乎不退货。', '幾乎不衝動買，也幾乎不退貨。', 'Hầu như không mua ngẫu hứng—hầu như không trả.', 'Hampir tidak impuls—hampir tidak retur.') },
      { score: 1, text: tx('가끔 충동구매 후 반품하는 경우가 있다. 귀찮지만 반품 성공', 'Sometimes I impulse buy and return—annoying but it works.', 'たまに衝動買いして返品。面倒だが成功。', '偶尔会冲动买后退货，麻烦但能退成。', '偶爾會衝動買後退貨，麻煩但能退成。', 'Đôi khi mua ngẫu hứng rồi trả—phiền nhưng được.', 'Kadang impuls lalu retur—ribet tapi berhasil.') },
      { score: 2, text: tx('충동구매 후 반품 기간을 놓쳐서 그냥 갖고 있는 물건이 있다', 'I missed the return window and kept the item.', '返品期限を逃してそのまま持っているものがある。', '错过退货期只能留着。', '錯過退貨期只能留著。', 'Lỡ hạn trả nên giữ lại.', 'Terlewat jendela retur jadi disimpan.') },
      { score: 3, text: tx('반품하러 가기 귀찮아서 그냥 포기한 금액이 꽤 된다', 'Too lazy to return—I have given up a fair amount of money.', '返品に行くのが面倒で諦めた金額がかなりある。', '嫌退货麻烦放弃了不少钱。', '嫌退貨麻煩放棄了不少錢。', 'Lười đi trả nên bỏ khá nhiều tiền.', 'Malas retur jadi mengorbankan cukup banyak uang.') },
    ],
  },
  {
    id: 6,
    question: tx('음식 배달 관련 흑역사는?', 'Food delivery slip-ups?', 'フードデリバリーの黒歴史は？', '外卖相关的糗事？', '外送相關的糗事？', 'Chuyện “hố đen” giao đồ ăn?', 'Cerita buruk pesan-antar makanan?'),
    options: [
      { score: 0, text: tx('쿠폰이나 최소 주문 금액에 흔들리지 않고 먹고 싶은 것만 시킨다', 'Not swayed by coupons or minimums—I order what I want.', 'クーポンや最低額に振り回されず、食べたいものだけ注文。', '不被优惠券或起送价左右，只点想吃的。', '不被優惠券或起送價左右，只點想吃的。', 'Không để coupon hay đơn tối thiểu chi phối—gọi đúng thứ muốn.', 'Tidak terpancing kupon atau minimum—pesan yang diinginkan.') },
      { score: 1, text: tx('최소 주문 금액 채우려다 필요 없는 메뉴 추가한 경험이 있다', 'I added items to hit the minimum order.', '最低注文額のために不要なメニューを足したことがある。', '为凑起送加过不需要的菜。', '為湊起送加過不需要的菜。', 'Thêm món không cần để đủ đơn tối thiểu.', 'Menambah menu demi memenuhi minimum pesanan.') },
      { score: 2, text: tx('쿠폰 때문에 먹고 싶지도 않은 가게에서 시킨 적 있다', 'I ordered from a place I did not want because of a coupon.', 'クーポンで食べたくない店から頼んだことがある。', '因为优惠券点过不想吃的店。', '因為優惠券點過不想吃的店。', 'Vì coupon mà gọi quán không thích.', 'Karena kupon pesan dari restoran yang tidak suka.') },
      { score: 3, text: tx('배달비 아끼려다 오히려 더 많이 시키거나 묶음 배달로 손해 본 적 있다', 'Trying to save delivery fees, I ordered more or bundled—and lost money.', '配達料をケチって逆に多く頼んだりまとめて損したことがある。', '为省配送费多点或拼单反而亏了。', '為省配送費多點或拼單反而虧了。', 'Tiết kiệm phí ship mà đặt nhiều hơn hoặc gộp đơn—lỗ hơn.', 'Hemat ongkir malah pesan lebih atau bundle—rugi.') },
    ],
  },
  {
    id: 7,
    question: tx('할인 행사에서 대량 구매한 경험은?', 'Bulk buying during discounts?', '割引で大量購入した経験は？', '打折时大量囤货的经历？', '打折時大量囤貨的經歷？', 'Từng mua số lượng lớn khi giảm giá?', 'Pernah beli banyak saat diskon?'),
    options: [
      { score: 0, text: tx('필요한 양만 산다. 유통기한이나 사용 기한을 먼저 계산한다', 'Only what I need—I check expiry first.', '必要な分だけ。賞味期限・使用期限を先に計算。', '只买需要的量，先算保质期。', '只買需要的量，先算保存期限。', 'Chỉ mua đủ dùng—xem hạn trước.', 'Hanya beli secukupnya—hitung kedaluwarsa dulu.') },
      { score: 1, text: tx('대용량이 싸다고 샀다가 다 못 쓴 경험이 한 번 정도 있다', 'Once I bought bulk because it was cheap and could not finish.', '大容量が安くて買ったが使い切れなかったことが一度ほどある。', '曾因大包装便宜买过，结果用不完。', '曾因大包裝便宜買過，結果用不完。', 'Từng mua size lớn vì rẻ rồi không dùng hết.', 'Pernah beli besar karena murah lalu tidak habis.') },
      { score: 2, text: tx('묶음 할인에 혹해서 샀다가 절반도 못 쓴 경험이 여러 번 있다', 'Bundle deals got me—several times I used less than half.', 'まとめ買い割引に釣られて半分も使えなかったことが何度もある。', '多次被捆绑优惠吸引，结果一半都没用完。', '多次被捆綁優惠吸引，結果一半都沒用完。', 'Nhiều lần vì combo mà mua rồi dùng chưa được nửa.', 'Sering tergiur paket bundle lalu tidak pakai setengahnya.') },
      { score: 3, text: tx('코스트코·창고형 마트에서 과하게 사서 버린 금액이 꽤 된다', 'Warehouse clubs—I have wasted a lot throwing extras out.', 'コストコ系で買いすぎて捨てた金額がかなりある。', '在仓储超市买太多扔掉的金额不少。', '在倉儲超市買太多扔掉的金額不少。', 'Mua quá tay ở siêu thị kho rồi vứt—mất khá nhiều.', 'Belanja kelebihan di warehouse club lalu buang—rugi banyak.') },
    ],
  },
  {
    id: 8,
    question: tx('홈쇼핑·라이브커머스 시청 중 구매 경험은?', 'TV shopping or live commerce—your buys?', 'テレビ通販・ライブコマースでの購入経験は？', '电视购物或直播带货，你买过吗？', '電視購物或直播帶貨，你買過嗎？', 'Mua sắm qua TV hoặc livestream—trải nghiệm của bạn?', 'Belanja TV atau live commerce—pengalamanmu?'),
    options: [
      { score: 0, text: tx('홈쇼핑·라이브커머스를 아예 보지 않거나 구매한 적 없다', 'I do not watch—or I have never bought.', '見ない、または買ったことがない。', '不看，或从没买过。', '不看，或從沒買過。', 'Không xem—hoặc chưa từng mua.', 'Tidak menonton—atau tidak pernah beli.') },
      { score: 1, text: tx('한두 번 충동 구매한 경험이 있고 일부는 후회했다', 'One or two impulse buys—some I regret.', '一両回衝動買い。一部後悔。', '冲动买过一两次，有些后悔。', '衝動買過一兩次，有些後悔。', 'Một hai lần mua ngẫu hứng—đôi khi hối.', 'Sekali dua kali impuls—sebagian menyesal.') },
      { score: 2, text: tx('방송 중 분위기에 휩쓸려 필요 없는 것을 산 경험이 여러 번 있다', 'Swept up by the vibe—bought unnecessary things several times.', '雰囲気に流されて不要なものを何度も買った。', '多次被气氛带着买了不需要的。', '多次被氣氛帶著買了不需要的。', 'Nhiều lần theo không khí mua thứ không cần.', 'Sering terbawa suasana membeli yang tidak perlu.') },
      { score: 3, text: tx('「지금 이 가격은 다시 없어요」에 매번 속는다. 습관적 홈쇼핑 구매자다', 'I always fall for “this price won’t come back”—habitual shopper.', '「この価格は二度とない」に毎回乗る。常習的に買う。', '总被「错过这价就没了」套路，成了习惯性买家。', '總被「錯過這價就沒了」套路，成了習慣性買家。', 'Luôn dính câu “giá này không lặp lại”—mua thành thói.', 'Selalu kena “harga ini tidak kembali”—kebiasaan belanja.') },
    ],
  },
  {
    id: 9,
    question: tx('플래너·다이어리·자기계발 용품 구매 경험은?', 'Planners, diaries, self-improvement buys?', '手帳・ダイアリー・自己啓発グッズの購入経験は？', '手帐、日记、自我提升用品的购买经历？', '手帳、日記、自我提升用品的購買經歷？', 'Sổ planner, nhật ký, đồ tự phát triển—trải nghiệm mua?', 'Planner, diary, alat self-improvement—pengalaman beli?'),
    options: [
      { score: 0, text: tx('실제로 쓸 것만 산다. 예쁘다고 무조건 사지 않는다', 'Only what I will use—not just because it is cute.', '本当に使うものだけ。可愛いから買わない。', '只买真会用的，不为好看乱买。', '只買真會用的，不為好看亂買。', 'Chỉ mua thứ thật sự dùng—không vì xinh.', 'Hanya beli yang dipakai—bukan karena lucu.') },
      { score: 1, text: tx('연초에 예쁜 플래너 사고 3월 전에 그만 쓴 경험이 있다', 'Pretty planner in January—quit before March.', '年始に可愛い手帳を買って3月前にやめた。', '年初买了漂亮手帐，三月前就弃了。', '年初買了漂亮手帳，三月前就棄了。', 'Mua sổ đẹp đầu năm—bỏ trước tháng 3.', 'Beli planner lucu awal tahun—berhenti sebelum Maret.') },
      { score: 2, text: tx('자기계발 책·강의·용품을 사놓고 손도 안 댄 경험이 여러 번 있다', 'Books, courses, gear—bought and never touched, many times.', '自己啓発の本・講座・道具を買って手をつけないことが何度もある。', '多次买了书、课、装备却从没动过。', '多次買了書、課、裝備卻從沒動過。', 'Nhiều lần mua sách, khóa, đồ rồi không đụng tới.', 'Sering beli buku, kursus, perlengkapan lalu tidak sentuh.') },
      { score: 3, text: tx('공부 준비물은 완벽한데 실제 공부는 안 한 시절이 있다', 'Supplies were perfect—actual studying, not so much.', '準備は完璧だったのに勉強しなかった時期がある。', '有过文具齐全却不学习的阶段。', '有過文具齊全卻不學習的階段。', 'Có lúc đồ học đủ đỉnh mà không học.', 'Pernah perlengkapan lengkap tapi tidak belajar.') },
    ],
  },
  {
    id: 10,
    question: tx('여행·숙박 예약 관련 흑역사는?', 'Travel or hotel booking slip-ups?', '旅行・宿泊予約の黒歴史は？', '旅行或酒店预订的糗事？', '旅行或飯店預訂的糗事？', 'Chuyện đặt vé hoặc khách sạn “hố đen”?', 'Cerita buruk booking travel atau hotel?'),
    options: [
      { score: 0, text: tx('예약 전 환불 정책을 꼼꼼히 확인하고 일정을 지킨다', 'I read refund rules and stick to plans.', '予約前に返金ポリシーを確認し、予定通りに行く。', '预订前细看退款政策并守行程。', '預訂前細看退款政策並守行程。', 'Đọc kỹ chính sách hoàn tiền và giữ lịch.', 'Baca kebijakan refund dan patuhi jadwal.') },
      { score: 1, text: tx('일정이 바뀌어 취소 수수료를 낸 경험이 한 번 정도 있다', 'Schedule changed—paid a cancel fee once.', '予定変更でキャンセル料を払ったことが一度ほどある。', '改行程付过一次取消费。', '改行程付過一次取消費。', 'Đổi lịch nên mất phí hủy một lần.', 'Ubah jadwal—bayar biaya batal sekali.') },
      { score: 2, text: tx('충동 예약 후 못 가서 환불 불가 숙박비를 날린 경험이 있다', 'Impulse booking—could not go, non-refundable stay lost.', '衝動予約で行けず返金不可の宿泊費を捨てたことがある。', '冲动订了去不了，不可退的房费没了。', '衝動訂了去不了，不可退的房費沒了。', 'Đặt ngẫu hứng không đi—mất tiền phòng không hoàn.', 'Booking impuls tidak jadi—uang hotel hangus.') },
      { score: 3, text: tx('특가 항공권 사놓고 못 가거나 날짜 착각한 경험이 있다', 'Cheap flight bought—did not go or mixed up dates.', '特価航空券を買って行けない／日付を間違えたことがある。', '买过特价机票没去或记错日期。', '買過特價機票沒去或記錯日期。', 'Mua vé rẻ không đi hoặc nhầm ngày.', 'Beli tiket promo tidak jadi atau salah tanggal.') },
    ],
  },
  {
    id: 11,
    question: tx('포인트·적립금·상품권 활용 경험은?', 'Points, rewards, gift cards—how do you use them?', 'ポイント・クーポン・ギフト券の活用は？', '积分、礼金、礼品券你怎么用？', '積分、禮金、禮品券你怎麼用？', 'Điểm, voucher, thẻ quà—bạn dùng thế nào?', 'Poin, voucher, gift card—kamu pakai bagaimana?'),
    options: [
      { score: 0, text: tx('포인트와 적립금을 꼼꼼하게 챙기고 기한 내에 다 쓴다', 'I track points and use them before expiry.', 'ポイントを管理し期限までに使い切る。', '认真管积分并在期内用完。', '認真管積分並在期內用完。', 'Theo dõi điểm và dùng trước hạn.', 'Kelola poin dan pakai sebelum kedaluwarsa.') },
      { score: 1, text: tx('포인트를 쌓아두다 유효기간이 지나서 소멸된 경험이 있다', 'Points expired while I was “saving” them.', '貯めすぎて有効期限切れで消えたことがある。', '攒着攒着积分过期没了。', '攢著攢著積分過期沒了。', 'Tích điểm rồi để quá hạn mất.', 'Menumpuk poin sampai kedaluwarsa.') },
      { score: 2, text: tx('상품권이나 기프티콘을 받았는데 안 쓰고 기한 지난 경험이 있다', 'Gift cards sat unused until they expired.', 'ギフト券をもらって使わず期限切れにしたことがある。', '收到礼品券没用放过期。', '收到禮品券沒用放過期。', 'Nhận voucher mà không dùng đến hết hạn.', 'Terima voucher tapi tidak dipakai sampai habis masa.') },
      { score: 3, text: tx('포인트 쓰려다 오히려 더 많이 결제한 경험이 여러 번 있다', 'Trying to use points, I spent more—several times.', 'ポイント消費のつもりが逆に多く払ったことが何度もある。', '多次为了用积分反而多花钱。', '多次為了用積分反而多花錢。', 'Nhiều lần định dùng điểm mà chi nhiều hơn.', 'Sering niat pakai poin malah bayar lebih banyak.') },
    ],
  },
  {
    id: 12,
    question: tx('소비 흑역사를 돌아봤을 때 솔직한 생각은?', 'Honestly, when you look at your spending slip-ups…', '消費の黒歴史を振り返って正直な感想は？', '回想消费黑历史，你的真实想法？', '回想消費黑歷史，你的真實想法？', 'Nhìn lại “hố đen” chi tiêu, bạn nghĩ gì?', 'Melihat riwayat belanja gelap, pikiran jujurmu?'),
    options: [
      { score: 0, text: tx('크게 후회하는 소비 흑역사가 없다. 대체로 계획적으로 써왔다', 'No big regrets—I have mostly spent with a plan.', '大きな後悔はない。だいたい計画的。', '没什么可后悔的，花钱比较有计划。', '沒什麼可後悔的，花錢比較有計畫。', 'Không hối hận lớn—chi tiêu có kế hoạch.', 'Tidak menyesal besar—belanja cukup terencana.') },
      { score: 1, text: tx('한두 가지 흑역사는 있지만 이미 교훈을 얻어 반복하지 않는다', 'A slip-up or two—but I learned and do not repeat.', '一両個はあるが教訓を得て繰り返さない。', '有一两处糗事，但已吸取教训不再犯。', '有一兩處糗事，但已吸取教訓不再犯。', 'Có vài lần nhưng đã rút kinh nghiệm.', 'Ada beberapa tapi sudah belajar tidak mengulang.') },
      { score: 2, text: tx('비슷한 패턴이 반복되는 것 같아서 고치고 싶다', 'Patterns repeat—I want to fix them.', '同じパターンが続いている。直したい。', '感觉模式在重复，想改。', '感覺模式在重複，想改。', 'Cảm giác lặp lại—muốn sửa.', 'Pola terasa berulang—ingin berubah.') },
      { score: 3, text: tx('솔직히 흑역사가 너무 많아서 어디서부터 시작해야 할지 모르겠다', 'Too many slip-ups—I do not know where to start.', '正直、多すぎてどこから手をつけるか分からない。', '糗事太多，不知从何改起。', '糗事太多，不知從何改起。', 'Quá nhiều—không biết bắt đầu từ đâu.', 'Terlalu banyak—tidak tahu mulai dari mana.') },
    ],
  },
];
