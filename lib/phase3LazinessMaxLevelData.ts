/** 나의 '귀차니즘' 만렙 측정 — 12문항 4지선다, A=0 B=1 C=2 D=3, 총점 0~36 → Type1~6 */

type Locale = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';
type ML = Record<Locale, string>;

function L(m: ML): Record<string, string> {
  return m;
}

function opt(m: ML, score: number): { text: Record<string, string>; score: number } {
  return { text: L(m), score };
}

function section(title: ML, content: ML): Phase3LazinessMaxLevelResultSection {
  return { title: L(title), content: L(content) };
}

export interface Phase3LazinessMaxLevelQuestion {
  id: number;
  question: Record<string, string>;
  options: { text: Record<string, string>; score: number }[];
}

export interface Phase3LazinessMaxLevelResultSection {
  title: Record<string, string>;
  content: Record<string, string>;
}

export interface Phase3LazinessMaxLevelResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  lazinessGrade: Record<string, string>;
  lazinessIndex: Record<string, string>;
  sections: Phase3LazinessMaxLevelResultSection[];
  shareMessage: Record<string, string>;
}

export function calculatePhase3LazinessMaxLevelResult(answers: number[]): string {
  const total = answers.reduce((sum, s) => sum + (s ?? 0), 0);
  if (total <= 5) return 'Type1';
  if (total <= 11) return 'Type2';
  if (total <= 19) return 'Type3';
  if (total <= 27) return 'Type4';
  if (total <= 33) return 'Type5';
  return 'Type6';
}

export const phase3LazinessMaxLevelQuestions: Phase3LazinessMaxLevelQuestion[] = [
  {
    id: 1,
    question: L({
      ko: '상황: 택배가 왔다. 문 앞에 놓여있다. 나는?',
      en: "Situation: A delivery has arrived. It's sitting in front of the door. What do I do?",
      ja: '状況：宅配が届いた。ドアの前に置かれている。私は？',
      'zh-CN': '情况：快递到了，放在门口。我会？',
      'zh-TW': '情況：宅配到了，放在門口。我會？',
      vi: 'Tình huống: Đơn hàng đã đến, đang nằm trước cửa. Tôi sẽ?',
      id: 'Situasi: Paket sudah datang dan diletakkan di depan pintu. Aku akan?',
    }),
    options: [
      opt(
        {
          ko: '바로 들어온다. 뜯어보는 것도 재밌다',
          en: 'Bring it in right away. Opening it is fun too',
          ja: 'すぐに持って入る。開けるのも楽しい',
          'zh-CN': '马上拿进来。拆开也很有趣',
          'zh-TW': '馬上拿進來。拆開也很有趣',
          vi: 'Mang vào ngay. Mở ra cũng vui',
          id: 'Langsung bawa masuk. Membukanya juga menyenangkan',
        },
        0
      ),
      opt(
        {
          ko: '들어오긴 하는데 뜯는 건 나중에 한다',
          en: 'Bring it in, but open it later',
          ja: '持って入るけど、開けるのは後で',
          'zh-CN': '会拿进来，但拆开的事以后再说',
          'zh-TW': '會拿進來，但拆開的事以後再說',
          vi: 'Mang vào nhưng để mở sau',
          id: 'Dibawa masuk, tapi membukanya nanti saja',
        },
        1
      ),
      opt(
        {
          ko: '신발 신기 귀찮아서 발로 밀어서 안으로 들인다',
          en: "Too lazy to put on shoes, so I push it inside with my foot",
          ja: '靴を履くのが面倒で、足で押して中に入れる',
          'zh-CN': '懒得穿鞋，用脚把它推进门里',
          'zh-TW': '懶得穿鞋，用腳把它推進門裡',
          vi: 'Lười xỏ giày nên dùng chân đẩy vào trong',
          id: 'Malas pakai sepatu, jadi didorong masuk dengan kaki',
        },
        2
      ),
      opt(
        {
          ko: '며칠 동안 문 앞에 그냥 둔다. 급하지 않으면 나중에 뜯어도 됨',
          en: "Leave it at the door for several days. If it's not urgent, I can open it later",
          ja: '数日間そのままドアの前に置いておく。急がなければ後で開ければいい',
          'zh-CN': '让它在门口放几天。不急的话以后拆也行',
          'zh-TW': '讓它在門口放好幾天。不急的話之後拆也行',
          vi: 'Để nguyên trước cửa mấy ngày. Không gấp thì mở sau cũng được',
          id: 'Dibiarkan di depan pintu selama beberapa hari. Kalau tidak mendesak, dibuka nanti juga tidak masalah',
        },
        3
      ),
    ],
  },
  {
    id: 2,
    question: L({
      ko: '상황: 누워서 폰을 보다가 배터리가 10%가 됐다. 충전기가 1미터 거리에 있다. 나는?',
      en: 'Situation: While lying down looking at my phone, the battery hits 10%. The charger is about 1 meter away. What do I do?',
      ja: '状況：横になって携帯を見ていたら、バッテリーが10%になった。充電器は1メートル先にある。私は？',
      'zh-CN': '情况：躺着看手机时电量变成了10%。充电器就在1米远的地方。我会？',
      'zh-TW': '情況：躺著看手機時電量變成了10%。充電器就在1公尺遠的地方。我會？',
      vi: 'Tình huống: Đang nằm xem điện thoại thì pin còn 10%. Sạc để cách đó khoảng 1 mét. Tôi sẽ?',
      id: 'Situasi: Sedang berbaring main HP, baterai tinggal 10%. Charger ada di jarak 1 meter. Aku akan?',
    }),
    options: [
      opt(
        {
          ko: '바로 일어나서 꽂는다. 당연하지',
          en: 'Get up right away and plug it in. Of course',
          ja: 'すぐに起きて差す。当然でしょ',
          'zh-CN': '马上起来插上。这不是理所当然的吗',
          'zh-TW': '馬上起來插上。這不是理所當然的嗎',
          vi: 'Đứng dậy cắm sạc ngay. Tất nhiên rồi',
          id: 'Langsung bangun dan mencolokkannya. Ya jelas',
        },
        0
      ),
      opt(
        {
          ko: '조금 더 버티다가 5%쯤 되면 일어난다',
          en: "Hold out a bit longer, and get up when it's around 5%",
          ja: '少し我慢して、5%くらいになったら起きる',
          'zh-CN': '再撑一会儿，等电量剩5%左右再起来',
          'zh-TW': '再撐一下，等電量剩5%左右再起來',
          vi: 'Cố chịu thêm chút, đến khoảng 5% thì dậy',
          id: 'Bertahan sedikit lebih lama, bangun kalau sudah sekitar 5%',
        },
        1
      ),
      opt(
        {
          ko: '충전기를 발로 끌어당기거나 온몸을 뒤틀어서 닿으려 한다',
          en: 'Try to drag the charger over with my foot or twist my whole body to reach it',
          ja: '充電器を足で引き寄せたり、全身をねじって手を伸ばそうとする',
          'zh-CN': '用脚把充电器拽过来，或者扭动全身去够它',
          'zh-TW': '用腳把充電器拽過來，或是扭動全身去夠它',
          vi: 'Dùng chân kéo sạc lại hoặc vặn cả người để với tới',
          id: 'Menarik charger dengan kaki atau memutar seluruh badan untuk menggapainya',
        },
        2
      ),
      opt(
        {
          ko: '폰이 꺼질 때까지 그냥 본다. 그때 되면 일어나야 하니까',
          en: "Just keep watching until the phone dies. I'll have to get up then anyway",
          ja: '携帯が切れるまでそのまま見る。その時になったら起きればいいから',
          'zh-CN': '就这样看到手机没电关机。到那时候不起来也不行',
          'zh-TW': '就這樣看到手機沒電關機。到那時候不起來也不行',
          vi: 'Cứ xem đến khi điện thoại tắt hẳn. Lúc đó bắt buộc phải dậy rồi',
          id: 'Terus main sampai HP mati sendiri. Nanti kalau sudah mati baru bangun',
        },
        3
      ),
    ],
  },
  {
    id: 3,
    question: L({
      ko: '상황: 싱크대에 그릇이 쌓였다. 설거지를 해야 한다. 나는?',
      en: 'Situation: Dishes have piled up in the sink. I need to wash them. What do I do?',
      ja: '状況：シンクに皿がたまった。皿洗いをしなければならない。私は？',
      'zh-CN': '情况：水槽里的碗堆积了。需要洗碗。我会？',
      'zh-TW': '情況：水槽裡的碗堆積了。需要洗碗。我會？',
      vi: 'Tình huống: Bát đĩa chất đống trong bồn rửa. Phải rửa bát. Tôi sẽ?',
      id: 'Situasi: Piring menumpuk di wastafel. Harus dicuci. Aku akan?',
    }),
    options: [
      opt(
        {
          ko: '바로 한다. 쌓이면 더 하기 싫어진다',
          en: "Do it right away. If it piles up, I'll want to do it even less",
          ja: 'すぐにやる。たまるとますますやりたくなくなる',
          'zh-CN': '马上洗。堆多了就更不想洗了',
          'zh-TW': '馬上洗。堆多了就更不想洗了',
          vi: 'Rửa ngay. Để dồn lại thì càng lười hơn',
          id: 'Langsung dicuci. Kalau menumpuk makin malas mengerjakannya',
        },
        0
      ),
      opt(
        {
          ko: '오늘 안에 하긴 한다. 미루다 자기 전에',
          en: "I do it within the day, though — putting it off until right before bed",
          ja: '今日中にはやる。ぐずぐずして寝る前に',
          'zh-CN': '今天之内还是会洗，拖到睡前才动手',
          'zh-TW': '今天之內還是會洗，拖到睡前才動手',
          vi: 'Vẫn làm trong ngày, trì hoãn đến trước khi ngủ mới rửa',
          id: 'Tetap dikerjakan hari itu, tapi ditunda sampai sebelum tidur',
        },
        1
      ),
      opt(
        {
          ko: '새 컵이나 그릇을 꺼내 쓴다. 그것도 떨어지면 그때 한다',
          en: "Take out a new cup or bowl instead. I'll wash them once those run out too",
          ja: '新しいカップやお皿を出して使う。それも底をついたら、そのときやる',
          'zh-CN': '拿新的杯子或碗来用。等这些也用完了再洗',
          'zh-TW': '拿新的杯子或碗來用。等這些也用完了再洗',
          vi: 'Lấy cốc hoặc bát mới ra dùng. Khi nào hết sạch mới rửa',
          id: 'Ambil gelas atau piring baru untuk dipakai. Kalau itu juga habis, baru dicuci',
        },
        2
      ),
      opt(
        {
          ko: '배달 음식 시킨다. 그릇 문제가 해결된다',
          en: 'Order delivery food. That solves the dish problem entirely',
          ja: 'デリバリーを頼む。それで皿の問題は解決する',
          'zh-CN': '叫外卖。这样碗的问题就解决了',
          'zh-TW': '叫外送。這樣碗的問題就解決了',
          vi: 'Gọi đồ ăn giao tận nơi. Vậy là giải quyết luôn vấn đề bát đĩa',
          id: 'Pesan makanan online. Masalah piring pun langsung selesai',
        },
        3
      ),
    ],
  },
  {
    id: 4,
    question: L({
      ko: '상황: 카카오톡 답장을 해야 한다. 읽었는데 답장이 귀찮다. 나는?',
      en: "Situation: I need to reply to a KakaoTalk message. I've read it, but replying feels like a hassle. What do I do?",
      ja: '状況：カカオトークの返信をしなければならない。読んだけど返信が面倒だ。私は？',
      'zh-CN': '情况：需要回复KakaoTalk消息。已经看了，但懒得回。我会？',
      'zh-TW': '情況：需要回覆KakaoTalk訊息。已經看了，但懶得回。我會？',
      vi: 'Tình huống: Phải trả lời tin nhắn KakaoTalk. Đã đọc rồi nhưng lười trả lời. Tôi sẽ?',
      id: 'Situasi: Harus membalas pesan KakaoTalk. Sudah dibaca tapi malas membalas. Aku akan?',
    }),
    options: [
      opt(
        {
          ko: '읽으면 바로 답장한다',
          en: 'Reply as soon as I read it',
          ja: '読んだらすぐに返信する',
          'zh-CN': '看到就马上回复',
          'zh-TW': '看到就馬上回覆',
          vi: 'Đọc xong là trả lời ngay',
          id: 'Begitu dibaca, langsung dibalas',
        },
        0
      ),
      opt(
        {
          ko: '읽고 잠깐 미루다 곧 답장한다',
          en: 'Put it off for a bit after reading, then reply soon',
          ja: '読んで少し後回しにしてから、すぐに返信する',
          'zh-CN': '看完先拖一会儿，然后很快就回复',
          'zh-TW': '看完先拖一下，然後很快就回覆',
          vi: 'Đọc xong trì hoãn một chút rồi trả lời ngay sau đó',
          id: 'Setelah dibaca ditunda sebentar, lalu segera dibalas',
        },
        1
      ),
      opt(
        {
          ko: '"답장해야지"를 하루에 열 번 생각하면서 결국 다음 날 한다',
          en: 'Think "I should reply" ten times a day, and end up doing it the next day',
          ja: '「返信しなきゃ」と一日に十回思いながら、結局翌日にやる',
          'zh-CN': '一天想十遍「该回复了」，结果还是拖到第二天',
          'zh-TW': '一天想十遍「該回覆了」，結果還是拖到第二天',
          vi: 'Nghĩ "phải trả lời" cả chục lần trong ngày, cuối cùng để đến hôm sau',
          id: 'Berpikir "harus balas" sepuluh kali sehari, tapi akhirnya dibalas keesokan harinya',
        },
        2
      ),
      opt(
        {
          ko: '일주일이 지나서 "나 요즘 바빴어"라고 한다. 바쁘지 않았다',
          en: 'A week passes and I say "I\'ve been busy lately." I wasn\'t busy',
          ja: '一週間経って「最近忙しかった」と言う。忙しくなかった',
          'zh-CN': '过了一周才说「我最近有点忙」。其实并不忙',
          'zh-TW': '過了一週才說「我最近有點忙」。其實並不忙',
          vi: 'Một tuần sau mới nói "tao bận quá gần đây." Thực ra không bận gì cả',
          id: 'Setelah seminggu bilang "aku lagi sibuk." Padahal tidak sibuk sama sekali',
        },
        3
      ),
    ],
  },
  {
    id: 5,
    question: L({
      ko: '상황: 방 한가운데 뭔가가 떨어져 있다. 걸리적거린다. 나는?',
      en: "Situation: Something is lying in the middle of the room. It's in the way. What do I do?",
      ja: '状況：部屋の真ん中に何かが落ちている。邪魔だ。私は？',
      'zh-CN': '情况：房间中间掉了个东西，挡路。我会？',
      'zh-TW': '情況：房間中間掉了個東西，擋路。我會？',
      vi: "Tình huống: Có thứ gì đó rơi giữa phòng, gây cản đường. Tôi sẽ?",
      id: 'Situasi: Ada barang jatuh di tengah ruangan dan menghalangi jalan. Aku akan?',
    }),
    options: [
      opt(
        {
          ko: '즉시 줍는다. 치우면 되잖아',
          en: 'Pick it up right away. Just clean it up, right?',
          ja: 'すぐに拾う。片付ければいいでしょ',
          'zh-CN': '立刻捡起来。收拾一下不就好了',
          'zh-TW': '立刻撿起來。收拾一下不就好了',
          vi: 'Nhặt lên ngay. Dọn đi là xong chứ gì',
          id: 'Langsung diambil. Tinggal dibersihkan saja kan',
        },
        0
      ),
      opt(
        {
          ko: '몇 번 발에 채다가 결국 줍는다',
          en: 'Kick it a few times by accident, then finally pick it up',
          ja: '何度か足に引っかけてから、結局拾う',
          'zh-CN': '被脚踢到几次之后，最后还是捡起来了',
          'zh-TW': '被腳踢到幾次之後，最後還是撿起來了',
          vi: 'Vài lần vô tình đá phải, cuối cùng cũng nhặt lên',
          id: 'Beberapa kali tersandung, akhirnya diambil juga',
        },
        1
      ),
      opt(
        {
          ko: '발로 구석으로 밀어놓는다. 치운 셈이다',
          en: "Push it into a corner with my foot. That counts as cleaning, right?",
          ja: '足で隅に押しておく。それで片付けたことにする',
          'zh-CN': '用脚把它推到角落。这也算是收拾了',
          'zh-TW': '用腳把它推到角落。這也算是收拾了',
          vi: 'Dùng chân đẩy nó vào góc. Coi như đã dọn rồi',
          id: 'Didorong ke pojok dengan kaki. Anggap saja sudah dibersihkan',
        },
        2
      ),
      opt(
        {
          ko: '그냥 돌아다닌다. 적응하면 된다',
          en: "Just walk around it. I'll get used to it eventually",
          ja: 'そのまま歩き回る。慣れれば大丈夫',
          'zh-CN': '干脆绕着走。习惯就好了',
          'zh-TW': '乾脆繞著走。習慣就好了',
          vi: 'Cứ đi vòng qua nó. Quen dần là được',
          id: 'Dilewati saja sambil jalan memutar. Nanti juga terbiasa',
        },
        3
      ),
    ],
  },
  {
    id: 6,
    question: L({
      ko: '상황: 10cm 앞에 있는 물건을 집어야 한다. 일어나기 귀찮다. 나는?',
      en: 'Situation: I need to grab something 10cm away. Getting up feels like a hassle. What do I do?',
      ja: '状況：10cm先にある物を取らなければならない。起きるのが面倒だ。私は？',
      'zh-CN': '情况：需要拿10厘米外的东西。懒得站起来。我会？',
      'zh-TW': '情況：需要拿10公分外的東西。懶得站起來。我會？',
      vi: 'Tình huống: Cần lấy vật cách 10cm. Lười đứng dậy. Tôi sẽ?',
      id: 'Situasi: Harus mengambil barang yang jaraknya 10cm. Malas berdiri. Aku akan?',
    }),
    options: [
      opt(
        {
          ko: '일어나서 집는다. 그게 더 빠르다',
          en: "Get up and grab it. That's faster anyway",
          ja: '起きて取る。それが結局速い',
          'zh-CN': '起来拿。这样反而更快',
          'zh-TW': '起來拿。這樣反而更快',
          vi: 'Đứng dậy lấy. Vậy nhanh hơn',
          id: 'Berdiri dan mengambilnya. Itu lebih cepat kok',
        },
        0
      ),
      opt(
        {
          ko: '최대한 몸을 뻗어서 닿으려 한다',
          en: 'Stretch my body as far as I can to reach it',
          ja: 'できる限り体を伸ばして届かせようとする',
          'zh-CN': '尽量伸展身体去够它',
          'zh-TW': '盡量伸展身體去夠它',
          vi: 'Cố hết sức duỗi người để với tới',
          id: 'Merentangkan badan semaksimal mungkin untuk menggapainya',
        },
        1
      ),
      opt(
        {
          ko: '발이나 다른 물건으로 끌어당긴다',
          en: 'Drag it over with my foot or another object',
          ja: '足や他の物で引き寄せる',
          'zh-CN': '用脚或别的东西把它拽过来',
          'zh-TW': '用腳或別的東西把它拽過來',
          vi: 'Dùng chân hoặc vật khác để kéo lại',
          id: 'Menariknya dengan kaki atau barang lain',
        },
        2
      ),
      opt(
        {
          ko: '없어도 된다. 꼭 필요하면 나중에 집는다',
          en: "I can live without it. If I really need it, I'll grab it later",
          ja: 'なくても大丈夫。本当に必要なら後で取る',
          'zh-CN': '没有也没关系。真的需要的话以后再拿',
          'zh-TW': '沒有也沒關係。真的需要的話之後再拿',
          vi: 'Không có cũng chẳng sao. Nếu thật cần thì lấy sau',
          id: 'Tanpa itu juga tidak masalah. Kalau benar-benar butuh, diambil nanti',
        },
        3
      ),
    ],
  },
  {
    id: 7,
    question: L({
      ko: '상황: 세탁기 돌린 빨래가 다 됐다. 꺼내서 널어야 한다. 나는?',
      en: 'Situation: The laundry cycle has finished. I need to take it out and hang it up. What do I do?',
      ja: '状況：洗濯機を回した洗濯物が終わった。取り出して干さなければならない。私は？',
      'zh-CN': '情况：洗衣机洗完了。需要拿出来晾。我会？',
      'zh-TW': '情況：洗衣機洗完了。需要拿出來曬。我會？',
      vi: 'Tình huống: Máy giặt đã giặt xong. Phải lấy ra phơi. Tôi sẽ?',
      id: 'Situasi: Cucian di mesin cuci sudah selesai. Harus dikeluarkan dan dijemur. Aku akan?',
    }),
    options: [
      opt(
        {
          ko: '바로 꺼내서 넌다. 구겨지면 더 귀찮아진다',
          en: "Take it out and hang it right away. If it wrinkles, it's more of a hassle",
          ja: 'すぐに取り出して干す。しわになるともっと面倒になる',
          'zh-CN': '马上拿出来晾好。皱了会更麻烦',
          'zh-TW': '馬上拿出來曬好。皺了會更麻煩',
          vi: 'Lấy ra phơi ngay. Để nhăn thì càng phiền hơn',
          id: 'Langsung dikeluarkan dan dijemur. Kalau kusut nanti lebih merepotkan',
        },
        0
      ),
      opt(
        {
          ko: '몇 시간 있다가 넌다. 오늘 안에는 한다',
          en: 'Hang it a few hours later. I get it done within the day, though',
          ja: '数時間後に干す。今日中にはやる',
          'zh-CN': '过几个小时再晾。反正今天之内会弄好',
          'zh-TW': '過幾個小時再曬。反正今天之內會弄好',
          vi: 'Vài giờ sau mới phơi. Nhưng vẫn làm trong ngày',
          id: 'Dijemur beberapa jam kemudian. Tapi tetap selesai hari itu',
        },
        1
      ),
      opt(
        {
          ko: '다음 날 아침에 꺼낸다. 자기 전엔 귀찮다',
          en: "Take it out the next morning. It's too much of a hassle before bed",
          ja: '翌朝取り出す。寝る前は面倒だ',
          'zh-CN': '第二天早上再拿出来。睡前太懒得动了',
          'zh-TW': '第二天早上再拿出來。睡前太懶得動了',
          vi: 'Sáng hôm sau mới lấy ra. Trước khi ngủ thì lười lắm',
          id: 'Dikeluarkan besok pagi. Sebelum tidur terlalu malas',
        },
        2
      ),
      opt(
        {
          ko: '구겨진 채로 꺼내서 그냥 입는다. 입다 보면 펴진다',
          en: 'Take it out wrinkled and just wear it. It smooths out as I wear it',
          ja: 'しわのまま取り出してそのまま着る。着ているうちに伸びる',
          'zh-CN': '皱着拿出来直接穿。穿着穿着就平了',
          'zh-TW': '皺著拿出來直接穿。穿著穿著就平了',
          vi: 'Lấy ra để nhăn vậy luôn rồi mặc. Mặc một hồi sẽ hết nhăn',
          id: 'Diambil dalam keadaan kusut dan langsung dipakai. Lama-lama juga rata sendiri',
        },
        3
      ),
    ],
  },
  {
    id: 8,
    question: L({
      ko: '상황: 자기 전 스킨케어를 해야 한다. 피곤하다. 나는?',
      en: "Situation: I need to do my skincare before bed. I'm tired. What do I do?",
      ja: '状況：寝る前にスキンケアをしなければならない。疲れている。私は？',
      'zh-CN': '情况：睡前需要做护肤。很累。我会？',
      'zh-TW': '情況：睡前需要做保養。很累。我會？',
      vi: 'Tình huống: Phải chăm sóc da trước khi ngủ. Đang mệt. Tôi sẽ?',
      id: 'Situasi: Harus melakukan skincare sebelum tidur. Sedang lelah. Aku akan?',
    }),
    options: [
      opt(
        {
          ko: '피곤해도 한다. 루틴이 있다',
          en: 'Do it even when tired. I have a routine',
          ja: '疲れていてもやる。ルーティンがあるから',
          'zh-CN': '再累也会做。有自己的固定流程',
          'zh-TW': '再累也會做。有自己的固定流程',
          vi: 'Dù mệt vẫn làm. Tôi có quy trình riêng',
          id: 'Meski lelah tetap dilakukan. Sudah jadi rutinitas',
        },
        0
      ),
      opt(
        {
          ko: '간단하게라도 한다. 토너 정도는',
          en: 'Do it simply, at least — like just toner',
          ja: '簡単にでもやる。トナーくらいは',
          'zh-CN': '至少简单做一点，比如爽肤水这种',
          'zh-TW': '至少簡單做一點，比如化妝水這種',
          vi: 'Ít nhất làm sơ sơ, kiểu như dùng toner cũng được',
          id: 'Setidaknya dilakukan seadanya, minimal pakai toner',
        },
        1
      ),
      opt(
        {
          ko: '물로만 씻고 잔다. 그것도 귀찮은 날은 그냥 잔다',
          en: 'Just wash with water and sleep. On days when even that feels like too much, I just sleep',
          ja: '水だけで洗って寝る。それも面倒な日はそのまま寝る',
          'zh-CN': '只用水洗一下就睡。有些天连这个都懒得做，直接睡',
          'zh-TW': '只用水洗一下就睡。有些天連這個都懶得做，直接睡',
          vi: 'Chỉ rửa mặt bằng nước rồi ngủ. Có ngày lười cả việc đó luôn thì ngủ luôn',
          id: 'Cuci muka pakai air saja lalu tidur. Kalau lagi malas banget, langsung tidur saja',
        },
        2
      ),
      opt(
        {
          ko: '세수도 안 하고 잔다. 어차피 내일 씻으면 됨',
          en: "Don't even wash my face and just sleep. I'll wash it tomorrow anyway",
          ja: '洗顔もせずに寝る。どうせ明日洗えばいい',
          'zh-CN': '连洗脸都不洗就睡。反正明天洗就行了',
          'zh-TW': '連洗臉都不洗就睡。反正明天洗就行了',
          vi: 'Không rửa mặt luôn, ngủ thẳng. Dù sao mai rửa cũng được',
          id: 'Bahkan tidak cuci muka, langsung tidur. Toh besok bisa dicuci',
        },
        3
      ),
    ],
  },
  {
    id: 9,
    question: L({
      ko: '상황: 쓰레기를 버려야 한다. 문 앞까지 들고 나가야 한다. 나는?',
      en: 'Situation: I need to throw out the trash. I have to carry it all the way to the door. What do I do?',
      ja: '状況：ゴミを捨てなければならない。ドアの外まで持って出なければならない。私は？',
      'zh-CN': '情况：需要倒垃圾。要拎到门口才能出去。我会？',
      'zh-TW': '情況：需要倒垃圾。要拎到門口才能出去。我會？',
      vi: 'Tình huống: Phải đổ rác. Phải mang ra tận cửa. Tôi sẽ?',
      id: 'Situasi: Harus membuang sampah. Harus dibawa sampai ke depan pintu. Aku akan?',
    }),
    options: [
      opt(
        {
          ko: '생기면 바로 버린다. 쌓이면 더 귀찮다',
          en: "Throw it out as soon as it accumulates. If it piles up, it's more of a hassle",
          ja: '出たらすぐに捨てる。たまるともっと面倒になる',
          'zh-CN': '垃圾一多马上就倒。堆积起来更麻烦',
          'zh-TW': '垃圾一多馬上就倒。堆積起來更麻煩',
          vi: 'Có rác là đổ ngay. Để dồn lại thì càng phiền',
          id: 'Begitu ada sampah langsung dibuang. Kalau menumpuk lebih merepotkan',
        },
        0
      ),
      opt(
        {
          ko: '모아뒀다가 한 번에 버린다',
          en: 'Collect it and throw it out all at once',
          ja: 'まとめてから一気に捨てる',
          'zh-CN': '先攒着，攒够了一次倒完',
          'zh-TW': '先攢著，攢夠了一次倒完',
          vi: 'Gom lại rồi đổ một lần',
          id: 'Dikumpulkan dulu, lalu dibuang sekali saja',
        },
        1
      ),
      opt(
        {
          ko: '문 앞까지 들고 갔다가 신발 신기 귀찮아서 다시 들어온다. 다음에 버린다',
          en: 'Carry it to the front door, but get too lazy to put shoes on, so I bring it back in. I\'ll throw it out next time',
          ja: 'ドアの前まで持っていったが、靴を履くのが面倒でまた家に持って戻る。次に捨てる',
          'zh-CN': '拎到门口了，但懒得穿鞋又拿回来了。下次再倒',
          'zh-TW': '拎到門口了，但懶得穿鞋又拿回來了。下次再倒',
          vi: 'Mang ra tới cửa rồi nhưng lười xỏ giày nên mang vào lại. Để lần sau đổ',
          id: 'Sudah dibawa sampai depan pintu, tapi malas pakai sepatu jadi dibawa masuk lagi. Nanti saja dibuang',
        },
        2
      ),
      opt(
        {
          ko: '분리수거 날을 놓치면 다음 주를 노린다. 한 주 더 쌓여있는 게 뭐 어때',
          en: "If I miss recycling day, I just wait for next week. What's wrong with letting it pile up one more week?",
          ja: '分別回収の日を逃したら次の週を狙う。もう一週間たまっていてもどうってことない',
          'zh-CN': '错过垃圾分类日就等下周。多堆一周也没什么大不了的',
          'zh-TW': '錯過垃圾分類日就等下週。多堆一週也沒什麼大不了的',
          vi: 'Nếu lỡ ngày phân loại rác thì đợi tuần sau. Chất thêm một tuần thì có sao đâu',
          id: 'Kalau kelewatan hari pemilahan sampah, tunggu minggu depan saja. Numpuk seminggu lagi juga tidak masalah',
        },
        3
      ),
    ],
  },
  {
    id: 10,
    question: L({
      ko: '상황: 충전이 다 됐다. 콘센트에서 충전기를 뽑아야 한다. 나는?',
      en: 'Situation: Charging is finished. I need to unplug the charger from the outlet. What do I do?',
      ja: '状況：充電が完了した。コンセントから充電器を抜かなければならない。私は？',
      'zh-CN': '情况：充电完成了。需要把充电器从插座上拔下来。我会？',
      'zh-TW': '情況：充電完成了。需要把充電器從插座上拔下來。我會？',
      vi: 'Tình huống: Sạc đầy rồi. Phải rút sạc ra khỏi ổ điện. Tôi sẽ?',
      id: 'Situasi: Baterai sudah penuh. Harus mencabut charger dari stopkontak. Aku akan?',
    }),
    options: [
      opt(
        {
          ko: '바로 뽑는다. 과충전되면 배터리 나빠진다',
          en: 'Unplug it right away. Overcharging is bad for the battery',
          ja: 'すぐに抜く。過充電になるとバッテリーが悪くなる',
          'zh-CN': '马上拔掉。过充会伤电池',
          'zh-TW': '馬上拔掉。過充會傷電池',
          vi: 'Rút ngay. Sạc quá lâu sẽ hại pin',
          id: 'Langsung dicabut. Kalau overcharge, baterainya jadi rusak',
        },
        0
      ),
      opt(
        {
          ko: '생각날 때 뽑는다',
          en: 'Unplug it whenever I remember',
          ja: '思い出したときに抜く',
          'zh-CN': '想到的时候才拔',
          'zh-TW': '想到的時候才拔',
          vi: 'Nhớ ra lúc nào thì rút lúc đó',
          id: 'Dicabut kalau teringat saja',
        },
        1
      ),
      opt(
        {
          ko: '꽂은 채로 계속 쓴다. 그게 더 편하다',
          en: "Keep using it while it's still plugged in. That's more convenient",
          ja: '差したまま使い続ける。その方が楽だから',
          'zh-CN': '就这样插着一直用。这样更方便',
          'zh-TW': '就這樣插著一直用。這樣更方便',
          vi: 'Cứ để cắm vậy mà dùng tiếp. Vậy tiện hơn',
          id: 'Dipakai terus sambil tetap tercolok. Lebih praktis begitu',
        },
        2
      ),
      opt(
        {
          ko: '충전기는 상시 꽂혀있는 게 정상이다. 뽑는다는 개념 자체가 없다',
          en: "It's normal for the charger to stay plugged in all the time. Unplugging isn't even a concept I consider",
          ja: '充電器は常に差しっぱなしが普通だ。抜くという概念自体がない',
          'zh-CN': '充电器一直插着才是正常状态。压根没有拔掉这个概念',
          'zh-TW': '充電器一直插著才是正常狀態。壓根沒有拔掉這個概念',
          vi: 'Sạc để cắm liên tục mới là bình thường. Khái niệm rút ra chưa từng tồn tại',
          id: "Charger memang seharusnya tercolok terus, itu normal. Konsep 'mencabut' saja tidak ada di kepala",
        },
        3
      ),
    ],
  },
  {
    id: 11,
    question: L({
      ko: '상황: 외출했다가 돌아왔다. 옷을 갈아입어야 한다. 나는?',
      en: "Situation: I've come back from being out. I need to change clothes. What do I do?",
      ja: '状況：外出して帰ってきた。服を着替えなければならない。私は？',
      'zh-CN': '情况：出门回来了。需要换衣服。我会？',
      'zh-TW': '情況：出門回來了。需要換衣服。我會？',
      vi: 'Tình huống: Đi ra ngoài về nhà. Phải thay đồ. Tôi sẽ?',
      id: 'Situasi: Baru pulang dari luar. Harus ganti baju. Aku akan?',
    }),
    options: [
      opt(
        {
          ko: '들어오자마자 홈웨어로 갈아입는다',
          en: 'Change into home clothes the moment I walk in',
          ja: '帰ってきたらすぐにルームウェアに着替える',
          'zh-CN': '一进门就马上换上家居服',
          'zh-TW': '一進門就馬上換上家居服',
          vi: 'Vừa vào nhà là thay đồ mặc nhà ngay',
          id: 'Begitu masuk rumah langsung ganti baju rumah',
        },
        0
      ),
      opt(
        {
          ko: '잠깐 그냥 있다가 갈아입는다',
          en: 'Stay as I am for a bit, then change',
          ja: '少しそのままでいてから着替える',
          'zh-CN': '先穿着待一会儿，然后再换',
          'zh-TW': '先穿著待一會兒，然後再換',
          vi: 'Cứ mặc vậy một lúc rồi mới thay',
          id: 'Tetap pakai baju itu sebentar, baru ganti',
        },
        1
      ),
      opt(
        {
          ko: '귀찮아서 입고 있다가 자기 전에 잠옷으로 갈아입는다',
          en: 'Too lazy to change, so I keep it on until right before bed, then switch to pajamas',
          ja: '面倒でそのまま着ていて、寝る前にパジャマに着替える',
          'zh-CN': '懒得换，就这么穿着，直到睡前才换成睡衣',
          'zh-TW': '懶得換，就這麼穿著，直到睡前才換成睡衣',
          vi: 'Lười thay nên mặc vậy luôn, đến trước khi ngủ mới đổi sang đồ ngủ',
          id: 'Malas ganti, jadi tetap dipakai sampai sebelum tidur baru ganti baju tidur',
        },
        2
      ),
      opt(
        {
          ko: '그냥 그 옷 입고 잔다. 내일 외출복으로 다시 입을 거라서',
          en: "Just sleep in the same clothes. I'll wear them out again tomorrow anyway",
          ja: 'そのままその服で寝る。明日また外出着として着るから',
          'zh-CN': '直接穿那件衣服睡觉。反正明天还要穿它出门',
          'zh-TW': '直接穿那件衣服睡覺。反正明天還要穿它出門',
          vi: 'Cứ mặc đồ đó mà ngủ luôn. Vì mai sẽ mặc lại đi ra ngoài',
          id: 'Langsung tidur dengan baju itu. Toh besok akan dipakai keluar lagi',
        },
        3
      ),
    ],
  },
  {
    id: 12,
    question: L({
      ko: '상황: 이 테스트를 하는 동안 "맞는데 인정하기 싫다"는 항목이 있었나요?',
      en: 'Situation: While taking this test, was there an option that made you think "that\'s true, but I don\'t want to admit it"?',
      ja: '状況：このテストをしている間、「当たっているけど認めたくない」と思う項目がありましたか？',
      'zh-CN': '情况：做这个测试的时候，有没有那种「说得对但我不想承认」的选项？',
      'zh-TW': '情況：做這個測試的時候，有沒有那種「說得對但我不想承認」的選項？',
      vi: 'Tình huống: Khi làm bài test này, có mục nào khiến bạn nghĩ "đúng thật nhưng không muốn công nhận" không?',
      id: 'Situasi: Saat mengerjakan tes ini, apakah ada opsi yang membuatmu berpikir "ini benar tapi aku tidak mau mengakuinya"?',
    }),
    options: [
      opt(
        {
          ko: '없다. 나는 부지런한 편이다',
          en: "No. I'm on the diligent side",
          ja: 'ない。私はどちらかというと勤勉なタイプだ',
          'zh-CN': '没有。我算是比较勤快的人',
          'zh-TW': '沒有。我算是比較勤快的人',
          vi: 'Không có. Tôi thuộc dạng chăm chỉ',
          id: 'Tidak ada. Aku termasuk orang yang rajin',
        },
        0
      ),
      opt(
        {
          ko: '한두 개. 가끔 그러긴 한다',
          en: 'One or two. I do act like that sometimes',
          ja: '一つか二つ。時々そうすることはある',
          'zh-CN': '有一两个。偶尔确实会这样',
          'zh-TW': '有一兩個。偶爾確實會這樣',
          vi: 'Một hai mục. Đôi khi tôi cũng như vậy',
          id: 'Ada satu dua. Kadang memang begitu',
        },
        1
      ),
      opt(
        {
          ko: '여러 개. 나 생각보다 귀찮은 사람이었구나',
          en: "Several. I'm lazier than I thought",
          ja: 'いくつか。私、思ったより面倒くさがりだったんだな',
          'zh-CN': '有好几个。原来我比自己想的还懒',
          'zh-TW': '有好幾個。原來我比自己想的還懶',
          vi: 'Nhiều mục. Hóa ra tôi lười hơn mình nghĩ',
          id: 'Ada beberapa. Ternyata aku lebih malas dari yang kukira',
        },
        2
      ),
      opt(
        {
          ko: '거의 다. 이거 나 저격한 거 아닌가 싶다',
          en: 'Almost all of them. I feel like this test was written specifically about me',
          ja: 'ほとんど全部。これ私を狙って作ったんじゃないかと思う',
          'zh-CN': '几乎全部。这测试是不是专门针对我做的',
          'zh-TW': '幾乎全部。這測試是不是專門針對我做的',
          vi: 'Hầu như tất cả. Cảm giác như bài test này được viết riêng cho tôi',
          id: 'Hampir semua. Rasanya tes ini sengaja menyindir aku',
        },
        3
      ),
    ],
  },
];

export const phase3LazinessMaxLevelResults: Phase3LazinessMaxLevelResult[] = [
  {
    type: 'Type1',
    emoji: '🏃',
    title: L({
      ko: '귀차니즘과 거리 먼, 부지런함 끝판왕',
      en: 'Far From Lazy — The Ultimate Diligence Champion',
      ja: '怠け癖とは無縁、勤勉さの極み',
      'zh-CN': '远离懒癌，勤快天花板',
      'zh-TW': '遠離懶癌，勤快天花板',
      vi: 'Cách xa sự lười biếng, đỉnh cao của sự chăm chỉ',
      id: 'Jauh dari Malas, Rajanya Kerajinan',
    }),
    shortDescription: L({
      ko: '당신 주변 사람들이 제일 피곤해하는 유형입니다. 이렇게 부지런할 수가 있나요.',
      en: "You're the type that tires out everyone around you. How can anyone be this diligent?",
      ja: 'あなたは周りの人を一番疲れさせるタイプです。こんなに勤勉でいられるものでしょうか。',
      'zh-CN': '你是身边人最容易感到疲惫的类型。怎么会有人这么勤快呢。',
      'zh-TW': '你是身邊人最容易感到疲憊的類型。怎麼會有人這麼勤快呢。',
      vi: 'Bạn là kiểu người khiến những người xung quanh mệt mỏi nhất. Sao có thể chăm chỉ đến mức này chứ.',
      id: 'Kamu adalah tipe yang paling membuat orang di sekitarmu capek. Bagaimana bisa serajin ini.',
    }),
    description: L({
      ko: '택배 오면 바로 뜯고, 빨래 끝나면 바로 널고, 설거지 쌓이기 전에 하고, 답장 바로 합니다. 귀차니즘 테스트에서 이 점수가 나왔다면 두 가지 가능성이 있습니다. 진짜 부지런하거나, 솔직하게 안 답했거나.',
      en: "You open packages the moment they arrive, hang laundry right after it's done, wash dishes before they pile up, and reply immediately. If you got this score on a laziness test, there are two possibilities: you're genuinely diligent, or you didn't answer honestly.",
      ja: '宅配が来たらすぐに開け、洗濯が終わったらすぐに干し、皿がたまる前に洗い、返信もすぐにする。この怠け度テストでこの点数が出たなら、二つの可能性があります。本当に勤勉であるか、正直に答えなかったか。',
      'zh-CN': '快递来了马上拆，洗衣服洗完马上晾，碗还没堆积就洗了，消息秒回。如果懒癌测试得出这个分数，只有两种可能：一是真的很勤快，二是没有诚实作答。',
      'zh-TW': '宅配到了馬上拆，洗衣服洗完馬上曬，碗還沒堆積就洗了，訊息秒回。如果懶癌測試得出這個分數，只有兩種可能：一是真的很勤快，二是沒有誠實作答。',
      vi: 'Bạn mở đồ ngay khi hàng đến, phơi đồ ngay khi giặt xong, rửa bát trước khi chúng chất đống, và trả lời tin nhắn ngay lập tức. Nếu bạn đạt điểm này trong bài test độ lười, chỉ có hai khả năng: bạn thực sự chăm chỉ, hoặc bạn đã không trả lời trung thực.',
      id: 'Kamu langsung membuka paket begitu tiba, langsung menjemur cucian setelah selesai dicuci, mencuci piring sebelum menumpuk, dan langsung membalas pesan. Kalau kamu mendapat skor ini di tes kemalasan, ada dua kemungkinan: kamu benar-benar rajin, atau kamu tidak menjawab dengan jujur.',
    }),
    lazinessGrade: L({
      ko: '비귀차인 1단 🏃',
      en: 'Non-Lazy Level 1 🏃',
      ja: '非怠け者 1級 🏃',
      'zh-CN': '非懒癌1级 🏃',
      'zh-TW': '非懶癌1級 🏃',
      vi: 'Cấp độ 1 - Không lười 🏃',
      id: 'Level 1 Anti-Malas 🏃',
    }),
    lazinessIndex: L({
      ko: '게으름 지수 5% 이하',
      en: 'Laziness Index: 5% or below',
      ja: '怠け度指数 5%以下',
      'zh-CN': '懒癌指数 5%以下',
      'zh-TW': '懶癌指數 5%以下',
      vi: 'Chỉ số lười biếng: dưới 5%',
      id: 'Indeks Kemalasan: di bawah 5%',
    }),
    sections: [
      section(
        {
          ko: '👀 주변의 평가',
          en: "👀 Others' Evaluation",
          ja: '👀 周囲からの評価',
          'zh-CN': '👀 周围人的评价',
          'zh-TW': '👀 周圍人的評價',
          vi: '👀 Đánh giá từ xung quanh',
          id: '👀 Penilaian Orang Sekitar',
        },
        {
          ko: '"저 사람 왜 저렇게 부지런해" 감탄과 피로감 동시 유발',
          en: '"Why is that person so diligent?" — inspires both admiration and exhaustion at once',
          ja: '「あの人なんでそんなに勤勉なの」感嘆と疲労を同時に引き起こす',
          'zh-CN': '「那个人怎么那么勤快」，同时引发惊叹与疲惫',
          'zh-TW': '「那個人怎麼那麼勤快」，同時引發驚嘆與疲憊',
          vi: '"Sao người đó chăm chỉ vậy" - vừa ngưỡng mộ vừa thấy mệt',
          id: '"Kok orang itu rajin banget sih" — memicu kekaguman dan kelelahan sekaligus',
        }
      ),
      section(
        {
          ko: '⚠️ 이 급수의 약점',
          en: '⚠️ Weakness of This Level',
          ja: '⚠️ このレベルの弱点',
          'zh-CN': '⚠️ 这个级别的弱点',
          'zh-TW': '⚠️ 這個級別的弱點',
          vi: '⚠️ Điểm yếu của cấp độ này',
          id: '⚠️ Kelemahan Level Ini',
        },
        {
          ko: '귀차니즘 공감 대화에 낄 수가 없다',
          en: "Can't join in on laziness-relatable conversations",
          ja: '怠け癖に共感する会話に入れない',
          'zh-CN': '完全没法参与「懒癌共鸣」的话题',
          'zh-TW': '完全沒辦法參與「懶癌共鳴」的話題',
          vi: 'Không thể tham gia vào những cuộc trò chuyện đồng cảm về sự lười biếng',
          id: 'Tidak bisa ikut nimbrung dalam obrolan soal kemalasan',
        }
      ),
      section(
        {
          ko: '🚨 단 하나의 위험 신호',
          en: '🚨 The One Warning Sign',
          ja: '🚨 たった一つの危険信号',
          'zh-CN': '🚨 唯一的危险信号',
          'zh-TW': '🚨 唯一的危險信號',
          vi: '🚨 Dấu hiệu nguy hiểm duy nhất',
          id: '🚨 Satu-satunya Tanda Bahaya',
        },
        {
          ko: 'Q12에서 솔직하게 답했는가',
          en: 'Whether you answered Q12 honestly',
          ja: 'Q12で正直に答えたかどうか',
          'zh-CN': '第12题是不是老实回答的',
          'zh-TW': '第12題是不是老實回答的',
          vi: 'Liệu bạn có trả lời Câu 12 một cách trung thực không',
          id: 'Apakah kamu menjawab Q12 dengan jujur',
        }
      ),
      section(
        {
          ko: '💬 한 줄 평',
          en: '💬 One-Line Review',
          ja: '💬 一言コメント',
          'zh-CN': '💬 一句话评价',
          'zh-TW': '💬 一句話評價',
          vi: '💬 Nhận xét một câu',
          id: '💬 Komentar Singkat',
        },
        {
          ko: '"귀차니즘 챌린지에서 이 결과 올리면 아무도 안 믿는다"',
          en: '"If you post this result in a laziness challenge, no one will believe it"',
          ja: '「怠け度チャレンジでこの結果を出しても誰も信じない」',
          'zh-CN': '「在懒癌挑战里晒出这个结果，没人会信」',
          'zh-TW': '「在懶癌挑戰裡曬出這個結果，沒人會信」',
          vi: '"Nếu đăng kết quả này trong thử thách lười biếng, chẳng ai tin đâu"',
          id: '"Kalau hasil ini diunggah di challenge kemalasan, tidak akan ada yang percaya"',
        }
      ),
    ],
    shareMessage: L({
      ko: '귀차니즘 급수: 비귀차인 1단 🏃 부지런함 끝판왕 결과... 이 결과 올리면 아무도 안 믿는다는 거 앎 ㅋㅋ → 나보다 게으른 사람 있으면 나와봐 챌린지',
      en: "My laziness level: Non-Lazy Level 1 🏃 The ultimate diligence result... I know no one will believe it if I post this lol → Bring it on if you're lazier than me challenge",
      ja: '怠け度レベル：非怠け者1級 🏃 勤勉さの極み結果…この結果を出しても誰も信じないの分かってる（笑）→ 私より怠けてる人いたら出てきて チャレンジ',
      'zh-CN': '懒癌等级：非懒癌1级 🏃 勤快天花板结果…知道发出去没人信 哈哈 → 有比我更懒的人就站出来挑战',
      'zh-TW': '懶癌等級：非懶癌1級 🏃 勤快天花板結果…知道發出去沒人信 哈哈 → 有比我更懶的人就站出來挑戰',
      vi: 'Cấp độ lười của tôi: Không lười cấp 1 🏃 Kết quả đỉnh cao chăm chỉ... biết là đăng lên chẳng ai tin đâu ha ha → Ai lười hơn tôi thì ra đây thử thách',
      id: 'Level kemalasanku: Non-Malas Level 1 🏃 Hasil rajin maksimal... aku tahu kalau diunggah gak akan ada yang percaya haha → Challenge siapa yang lebih malas dari aku, ayo maju',
    }),
  },
  {
    type: 'Type2',
    emoji: '🐌',
    title: L({
      ko: '그래도 하긴 한다, 기능성 귀차인 2단',
      en: 'Still Gets It Done — Functional Lazy Level 2',
      ja: 'それでもやる、機能的怠け者2級',
      'zh-CN': '但还是会做，功能性懒癌2级',
      'zh-TW': '但還是會做，功能性懶癌2級',
      vi: "Vẫn hoàn thành, Lười cấp độ 2 kiểu 'chức năng'",
      id: "Tetap Selesai Juga, Malas Level 2 yang 'Fungsional'",
    }),
    shortDescription: L({
      ko: '해야 하는 건 결국 하는데 타이밍이 좀 늦습니다.',
      en: 'You eventually get done what needs to be done, just a bit behind schedule.',
      ja: 'やるべきことは結局やるが、タイミングが少し遅い。',
      'zh-CN': '该做的事最终都会做，只是时机有点晚。',
      'zh-TW': '該做的事最終都會做，只是時機有點晚。',
      vi: 'Việc cần làm cuối cùng vẫn làm, chỉ là hơi trễ một chút.',
      id: 'Yang harus dikerjakan akhirnya tetap dikerjakan, hanya sedikit terlambat.',
    }),
    description: L({
      ko: '즉시는 아니지만 결국 하는 편입니다. 빨래를 몇 시간 후에 꺼내고 답장을 하루 미루고 설거지를 자기 전에 합니다. 결과적으로는 다 처리되니 큰 문제는 없지만 더 빨리 할 수 있었다는 걸 본인도 압니다.',
      en: "Not immediately, but you get things done eventually. You take out laundry hours later, delay replies by a day, and do dishes right before bed. Everything ends up handled, so there's no big problem — but you know deep down you could've done it faster.",
      ja: 'すぐにではないが結局はやるタイプです。洗濯物を数時間後に取り出し、返信を一日遅らせ、皿洗いは寝る前にします。結果的には全部処理されるので大きな問題はありませんが、もっと早くできたことは自分でも分かっています。',
      'zh-CN': '不是立刻做，但最终会完成。洗好的衣服过几个小时才拿出来，回复消息拖一天，洗碗留到睡前。结果上事情都处理好了，没什么大问题，但自己心里也清楚本来可以更早做完。',
      'zh-TW': '不是立刻做，但最終會完成。洗好的衣服過幾個小時才拿出來，回覆訊息拖一天，洗碗留到睡前。結果上事情都處理好了，沒什麼大問題，但自己心裡也清楚本來可以更早做完。',
      vi: 'Không phải làm ngay, nhưng cuối cùng vẫn hoàn thành. Bạn lấy đồ giặt ra sau vài giờ, trì hoãn trả lời một ngày, rửa bát trước khi ngủ. Kết quả là mọi thứ vẫn được xử lý nên không có vấn đề lớn, nhưng bản thân bạn cũng biết rõ mình có thể làm nhanh hơn.',
      id: 'Bukan langsung, tapi akhirnya tetap dikerjakan. Kamu mengambil cucian beberapa jam kemudian, menunda balasan sehari, dan mencuci piring sebelum tidur. Pada akhirnya semua terselesaikan jadi tidak ada masalah besar, tapi kamu sendiri tahu bisa melakukannya lebih cepat.',
    }),
    lazinessGrade: L({
      ko: '기능성 귀차인 2단 🐌',
      en: 'Functional Lazy Level 2 🐌',
      ja: '機能的怠け者2級 🐌',
      'zh-CN': '功能性懒癌2级 🐌',
      'zh-TW': '功能性懶癌2級 🐌',
      vi: "Lười 'chức năng' cấp độ 2 🐌",
      id: 'Malas Fungsional Level 2 🐌',
    }),
    lazinessIndex: L({
      ko: '게으름 지수 20~30%',
      en: 'Laziness Index: 20-30%',
      ja: '怠け度指数 20~30%',
      'zh-CN': '懒癌指数 20~30%',
      'zh-TW': '懶癌指數 20~30%',
      vi: 'Chỉ số lười biếng: 20-30%',
      id: 'Indeks Kemalasan: 20-30%',
    }),
    sections: [
      section(
        {
          ko: '👀 주변의 평가',
          en: "👀 Others' Evaluation",
          ja: '👀 周囲からの評価',
          'zh-CN': '👀 周围人的评价',
          'zh-TW': '👀 周圍人的評價',
          vi: '👀 Đánh giá từ xung quanh',
          id: '👀 Penilaian Orang Sekitar',
        },
        {
          ko: '"느리긴 한데 결국 하더라"',
          en: '"They\'re slow, but they get it done eventually"',
          ja: '「遅いけど結局やるよね」',
          'zh-CN': '「是挺慢的，但最后还是会做完」',
          'zh-TW': '「是挺慢的，但最後還是會做完」',
          vi: '"Chậm thật nhưng cuối cùng cũng làm xong"',
          id: '"Emang lambat, tapi akhirnya dikerjakan juga"',
        }
      ),
      section(
        {
          ko: '💪 이 급수의 강점',
          en: '💪 Strength of This Level',
          ja: '💪 このレベルの強み',
          'zh-CN': '💪 这个级别的优点',
          'zh-TW': '💪 這個級別的優點',
          vi: '💪 Điểm mạnh của cấp độ này',
          id: '💪 Kekuatan Level Ini',
        },
        {
          ko: '완전히 망가지진 않는다. 마감은 지킨다',
          en: 'Things never fully fall apart. Deadlines still get met',
          ja: '完全には崩れない。締め切りは守る',
          'zh-CN': '不会彻底崩掉，截止时间还是能守住',
          'zh-TW': '不會徹底崩掉，截止時間還是能守住',
          vi: 'Không bao giờ sụp đổ hoàn toàn. Vẫn đảm bảo đúng hạn',
          id: 'Tidak pernah benar-benar berantakan. Tetap memenuhi deadline',
        }
      ),
      section(
        {
          ko: '🌑 이 급수의 그늘',
          en: '🌑 The Shadow Side of This Level',
          ja: '🌑 このレベルの陰の部分',
          'zh-CN': '🌑 这个级别的阴暗面',
          'zh-TW': '🌑 這個級別的陰暗面',
          vi: '🌑 Mặt tối của cấp độ này',
          id: '🌑 Sisi Gelap Level Ini',
        },
        {
          ko: '급하지 않은 것은 영원히 안 하게 될 수 있다',
          en: "Anything that isn't urgent might never get done at all",
          ja: '急がないことは永遠にやらないままになる可能性がある',
          'zh-CN': '不紧急的事情可能永远都不会去做',
          'zh-TW': '不緊急的事情可能永遠都不會去做',
          vi: 'Những việc không gấp có thể sẽ mãi mãi không được làm',
          id: 'Hal yang tidak mendesak bisa jadi tidak pernah dikerjakan selamanya',
        }
      ),
      section(
        {
          ko: '💬 한 줄 평',
          en: '💬 One-Line Review',
          ja: '💬 一言コメント',
          'zh-CN': '💬 一句话评价',
          'zh-TW': '💬 一句話評價',
          vi: '💬 Nhận xét một câu',
          id: '💬 Komentar Singkat',
        },
        {
          ko: '"게으름과 부지런함의 경계선에 서있는 사람"',
          en: '"A person standing right on the border between laziness and diligence"',
          ja: '「怠けと勤勉の境界線に立っている人」',
          'zh-CN': '「站在懒惰与勤快分界线上的人」',
          'zh-TW': '「站在懶惰與勤快分界線上的人」',
          vi: '"Người đứng ngay trên ranh giới giữa lười biếng và chăm chỉ"',
          id: '"Orang yang berdiri di garis batas antara malas dan rajin"',
        }
      ),
    ],
    shareMessage: L({
      ko: '귀차니즘 급수: 기능성 귀차인 2단 🐌 결국은 하는데 좀 느린 유형... 빨래 몇 시간 후에 꺼내는 거 찔렸음 → 너는 몇 단이야?',
      en: "My laziness level: Functional Lazy Level 2 🐌 The type who gets it done, just slowly... felt personally attacked by the laundry thing → What's your level?",
      ja: '怠け度レベル：機能的怠け者2級 🐌 結局やるけど遅いタイプ…洗濯物を数時間後に取り出すの、ちょっと刺さった → あなたは何級？',
      'zh-CN': '懒癌等级：功能性懒癌2级 🐌 最后都会做但就是慢…洗好的衣服过几小时才拿出来这点被扎心了 → 你是几级？',
      'zh-TW': '懶癌等級：功能性懶癌2級 🐌 最後都會做但就是慢…洗好的衣服過幾小時才拿出來這點被戳中了 → 你是幾級？',
      vi: 'Cấp độ lười của tôi: Lười chức năng cấp 2 🐌 Kiểu người cuối cùng vẫn làm nhưng hơi chậm... bị đâm trúng tim vì vụ lấy đồ giặt sau vài giờ → Bạn cấp mấy?',
      id: 'Level kemalasanku: Malas Fungsional Level 2 🐌 Tipe yang akhirnya tetap ngerjain tapi agak lambat... kena banget soal ambil cucian beberapa jam kemudian → Kamu level berapa?',
    }),
  },
  {
    type: 'Type3',
    emoji: '🦥',
    title: L({
      ko: '창의적으로 게으른, 귀차니즘 3단 응용편',
      en: 'Creatively Lazy — Laziness Level 3, Advanced Edition',
      ja: '創造的に怠ける、怠け度3級応用編',
      'zh-CN': '创意型懒惰，懒癌3级进阶版',
      'zh-TW': '創意型懶惰，懶癌3級進階版',
      vi: 'Lười một cách sáng tạo, Cấp độ 3 phiên bản nâng cao',
      id: 'Malas yang Kreatif, Level 3 Edisi Lanjutan',
    }),
    shortDescription: L({
      ko: '게으르긴 한데 방법이 있습니다. 발로 물건 끌어당기기, 새 컵 꺼내 쓰기, 구겨진 옷 그냥 입기.',
      en: 'Lazy, but with a method: dragging things over with your foot, using a new cup instead of washing one, wearing wrinkled clothes without a second thought.',
      ja: '怠けているけど方法がある。足で物を引き寄せる、新しいカップを出して使う、しわのついた服をそのまま着る。',
      'zh-CN': '懒是懒，但有自己的门道：用脚拽东西、用新杯子代替洗杯子、穿皱的衣服也不在乎。',
      'zh-TW': '懶是懶，但有自己的門道：用腳拽東西、用新杯子代替洗杯子、穿皺的衣服也不在乎。',
      vi: 'Lười thì lười nhưng có phương pháp: dùng chân kéo đồ vật, lấy cốc mới ra dùng, mặc đồ nhăn mà không bận tâm.',
      id: 'Malas, tapi punya caranya sendiri: menarik barang dengan kaki, memakai gelas baru daripada mencuci, memakai baju kusut tanpa ragu.',
    }),
    description: L({
      ko: '귀찮음을 해결하기 위해 오히려 창의적인 방법을 씁니다. 일어나서 집어오는 것보다 발로 끌어당기는 것이 더 빠르다고 판단합니다. 이것은 게으름이 아니라 효율입니다. 라고 본인은 생각합니다.',
      en: "You use surprisingly creative methods to solve your laziness. You judge that dragging something over with your foot is faster than getting up to grab it. In your own mind, this isn't laziness — it's efficiency.",
      ja: '面倒を解決するために、むしろ創造的な方法を使います。起きて取りに行くより足で引き寄せる方が速いと判断します。これは怠けではなく効率だ、と本人は考えています。',
      'zh-CN': '为了解决懒的问题，反而用上了很有创意的方法。判断用脚拽过来比站起来拿更快。本人认为这不是懒惰，而是效率。',
      'zh-TW': '為了解決懶的問題，反而用上了很有創意的方法。判斷用腳拽過來比站起來拿更快。本人認為這不是懶惰，而是效率。',
      vi: 'Để giải quyết sự lười biếng, bạn lại dùng những phương pháp khá sáng tạo. Bạn cho rằng dùng chân kéo đồ lại nhanh hơn là đứng dậy đi lấy. Bản thân bạn nghĩ đây không phải là lười, mà là hiệu quả.',
      id: 'Untuk mengatasi rasa malas, kamu justru memakai cara-cara yang kreatif. Kamu menilai menarik barang dengan kaki lebih cepat daripada berdiri untuk mengambilnya. Menurutmu sendiri, ini bukan kemalasan, melainkan efisiensi.',
    }),
    lazinessGrade: L({
      ko: '창의적 귀차인 3단 🦥',
      en: 'Creative Lazy Level 3 🦥',
      ja: '創造的怠け者3級 🦥',
      'zh-CN': '创意型懒癌3级 🦥',
      'zh-TW': '創意型懶癌3級 🦥',
      vi: 'Lười sáng tạo cấp độ 3 🦥',
      id: 'Malas Kreatif Level 3 🦥',
    }),
    lazinessIndex: L({
      ko: '게으름 지수 40~55%',
      en: 'Laziness Index: 40-55%',
      ja: '怠け度指数 40~55%',
      'zh-CN': '懒癌指数 40~55%',
      'zh-TW': '懶癌指數 40~55%',
      vi: 'Chỉ số lười biếng: 40-55%',
      id: 'Indeks Kemalasan: 40-55%',
    }),
    sections: [
      section(
        {
          ko: '👀 주변의 평가',
          en: "👀 Others' Evaluation",
          ja: '👀 周囲からの評価',
          'zh-CN': '👀 周围人的评价',
          'zh-TW': '👀 周圍人的評價',
          vi: '👀 Đánh giá từ xung quanh',
          id: '👀 Penilaian Orang Sekitar',
        },
        {
          ko: '"저 사람 어떻게 저런 생각을 했지? 게으름의 창의성이 대단하다"',
          en: '"How did that person even come up with that? The creativity of their laziness is impressive"',
          ja: '「あの人よくそんなこと考えつくな。怠けの創造性がすごい」',
          'zh-CN': '「那个人怎么想出这种办法的？懒惰的创意也是一绝」',
          'zh-TW': '「那個人怎麼想出這種辦法的？懶惰的創意也是一絕」',
          vi: '"Sao người đó lại nghĩ ra được cách đó nhỉ? Sự sáng tạo trong lười biếng thật đáng nể"',
          id: '"Kok orang itu bisa mikir kayak gitu ya? Kreativitas kemalasannya luar biasa"',
        }
      ),
      section(
        {
          ko: '💪 이 급수의 강점',
          en: '💪 Strength of This Level',
          ja: '💪 このレベルの強み',
          'zh-CN': '💪 这个级别的优点',
          'zh-TW': '💪 這個級別的優點',
          vi: '💪 Điểm mạnh của cấp độ này',
          id: '💪 Kekuatan Level Ini',
        },
        {
          ko: '귀찮음을 해결하는 나름의 시스템이 있음',
          en: 'Has a personal system for solving laziness',
          ja: '面倒を解決する自分なりのシステムがある',
          'zh-CN': '有自己一套解决懒惰的系统',
          'zh-TW': '有自己一套解決懶惰的系統',
          vi: 'Có hệ thống riêng để giải quyết sự lười biếng',
          id: 'Punya sistem tersendiri untuk mengatasi rasa malas',
        }
      ),
      section(
        {
          ko: '🌑 이 급수의 그늘',
          en: '🌑 The Shadow Side of This Level',
          ja: '🌑 このレベルの陰の部分',
          'zh-CN': '🌑 这个级别的阴暗面',
          'zh-TW': '🌑 這個級別的陰暗面',
          vi: '🌑 Mặt tối của cấp độ này',
          id: '🌑 Sisi Gelap Level Ini',
        },
        {
          ko: '그 창의적 방법이 결국 더 귀찮아지는 경우가 있음',
          en: 'Sometimes that creative method ends up being more of a hassle in the end',
          ja: 'その創造的な方法が結局もっと面倒になる場合がある',
          'zh-CN': '有时那种创意方法反而会变得更麻烦',
          'zh-TW': '有時那種創意方法反而會變得更麻煩',
          vi: 'Đôi khi phương pháp sáng tạo đó lại khiến mọi thứ phiền hơn',
          id: 'Kadang cara kreatif itu justru berujung lebih merepotkan',
        }
      ),
      section(
        {
          ko: '💬 한 줄 평',
          en: '💬 One-Line Review',
          ja: '💬 一言コメント',
          'zh-CN': '💬 一句话评价',
          'zh-TW': '💬 一句話評價',
          vi: '💬 Nhận xét một câu',
          id: '💬 Komentar Singkat',
        },
        {
          ko: '"게으름도 능력이라면 당신은 꽤 능력자"',
          en: '"If laziness were a skill, you\'d be quite the talent"',
          ja: '「怠けも能力だとしたら、あなたはかなりの実力者」',
          'zh-CN': '「如果懒惰也算能力，那你算是相当有实力」',
          'zh-TW': '「如果懶惰也算能力，那你算是相當有實力」',
          vi: '"Nếu lười biếng là một kỹ năng, bạn quả là người có tài"',
          id: '"Kalau malas itu bakat, kamu termasuk yang berbakat"',
        }
      ),
    ],
    shareMessage: L({
      ko: '귀차니즘 급수: 3단 응용편 🦥 발로 물건 끌어당기고 새 컵 꺼내 쓰는 유형 ㅋㅋ 이건 게으름이 아니라 효율이라고 → 나보다 게으른 사람 있으면 나와봐',
      en: "My laziness level: Level 3 Advanced Edition 🦥 The type who drags things with their foot and grabs a new cup instead of washing lol this isn't laziness, it's efficiency → Bring it on if you're lazier than me",
      ja: '怠け度レベル：3級応用編 🦥 足で物を引き寄せて新しいカップを出す使うタイプ（笑）これは怠けじゃなくて効率だから → 私より怠けてる人いたら出てきて',
      'zh-CN': '懒癌等级：3级进阶版 🦥 用脚拽东西、拿新杯子的类型哈哈 这不是懒是效率 → 有比我更懒的人就出来',
      'zh-TW': '懶癌等級：3級進階版 🦥 用腳拽東西、拿新杯子的類型哈哈 這不是懶是效率 → 有比我更懶的人就出來',
      vi: 'Cấp độ lười của tôi: Cấp 3 phiên bản nâng cao 🦥 Kiểu dùng chân kéo đồ, lấy cốc mới ra dùng ha ha đây không phải lười mà là hiệu quả → Ai lười hơn tôi thì ra đây',
      id: 'Level kemalasanku: Level 3 Edisi Lanjutan 🦥 Tipe yang narik barang dengan kaki dan pakai gelas baru haha ini bukan malas, ini efisiensi → Kalau ada yang lebih malas dari aku, ayo maju',
    }),
  },
  {
    type: 'Type4',
    emoji: '😴',
    title: L({
      ko: '본격적으로 귀찮은, 귀차니즘 4단 고수',
      en: 'Seriously Lazy — Laziness Level 4 Master',
      ja: '本格的に怠けている、怠け度4級高手',
      'zh-CN': '正式进入懒模式，懒癌4级高手',
      'zh-TW': '正式進入懶模式，懶癌4級高手',
      vi: 'Lười một cách nghiêm túc, Cấp độ 4 - Cao thủ',
      id: 'Malas Serius, Master Level 4',
    }),
    shortDescription: L({
      ko: '이 정도면 귀차니즘이 생활 방식이 된 수준입니다.',
      en: 'At this level, laziness has become your lifestyle.',
      ja: 'この程度になると、怠け癖が生活様式になったレベルです。',
      'zh-CN': '到这个程度，懒惰已经成了你的生活方式。',
      'zh-TW': '到這個程度，懶惰已經成了你的生活方式。',
      vi: 'Đến mức này, sự lười biếng đã trở thành phong cách sống của bạn.',
      id: 'Sampai level ini, kemalasan sudah jadi gaya hidupmu.',
    }),
    description: L({
      ko: '택배 며칠 두기, 충전기 꽂은 채 상시 사용, 빨래 구겨진 채 입기, 답장 일주일 후에 하기가 자연스러운 패턴입니다. 나쁜 사람이 아닙니다. 그냥 귀찮음에 최적화된 삶의 방식을 구축한 것입니다.',
      en: "Leaving packages for days, always using your phone while it's still charging, wearing wrinkled laundry, replying a week later — these are all natural patterns for you. You're not a bad person. You've simply built a lifestyle optimized for laziness.",
      ja: '宅配を数日放置する、充電器を差したまま常時使う、洗濯物をしわのまま着る、返信を一週間後にするのが自然なパターンです。悪い人ではありません。ただ、面倒に最適化された生き方を構築しただけです。',
      'zh-CN': '快递放几天不管、充电器插着一直用、衣服皱着也照穿、消息一周后才回，这些都是你的自然模式。你不是坏人，只是构建了一种为「懒」而优化的生活方式。',
      'zh-TW': '宅配放好幾天不管、充電器插著一直用、衣服皺著也照穿、訊息一週後才回，這些都是你的自然模式。你不是壞人，只是構建了一種為「懶」而優化的生活方式。',
      vi: 'Để đơn hàng vài ngày không mở, luôn dùng điện thoại trong lúc cắm sạc, mặc đồ nhăn, trả lời tin nhắn sau một tuần - đây là những kiểu hành xử tự nhiên của bạn. Bạn không phải người xấu. Bạn chỉ đơn giản là đã xây dựng một phong cách sống được tối ưu hóa cho sự lười biếng.',
      id: 'Membiarkan paket beberapa hari, selalu memakai HP sambil dicas terus, memakai baju kusut, membalas pesan seminggu kemudian, membuang sampah minggu depan — semua ini adalah pola alami bagimu. Kamu bukan orang jahat. Kamu hanya membangun gaya hidup yang teroptimasi untuk kemalasan.',
    }),
    lazinessGrade: L({
      ko: '귀차인 4단 고수 😴',
      en: 'Lazy Master Level 4 😴',
      ja: '怠け者4級高手 😴',
      'zh-CN': '懒癌4级高手 😴',
      'zh-TW': '懶癌4級高手 😴',
      vi: 'Cao thủ lười cấp độ 4 😴',
      id: 'Master Malas Level 4 😴',
    }),
    lazinessIndex: L({
      ko: '게으름 지수 60~75%',
      en: 'Laziness Index: 60-75%',
      ja: '怠け度指数 60~75%',
      'zh-CN': '懒癌指数 60~75%',
      'zh-TW': '懶癌指數 60~75%',
      vi: 'Chỉ số lười biếng: 60-75%',
      id: 'Indeks Kemalasan: 60-75%',
    }),
    sections: [
      section(
        {
          ko: '👀 주변의 평가',
          en: "👀 Others' Evaluation",
          ja: '👀 周囲からの評価',
          'zh-CN': '👀 周围人的评价',
          'zh-TW': '👀 周圍人的評價',
          vi: '👀 Đánh giá từ xung quanh',
          id: '👀 Penilaian Orang Sekitar',
        },
        {
          ko: '"저 사람 답장 언제 오려나... 일주일 기다려야 하나"',
          en: '"When will they even reply... do I have to wait a whole week?"',
          ja: '「あの人の返信いつ来るんだろう…一週間待たなきゃいけないのか」',
          'zh-CN': '「那个人什么时候回消息啊……要等一周吗」',
          'zh-TW': '「那個人什麼時候回訊息啊……要等一週嗎」',
          vi: '"Người đó bao giờ mới trả lời nhỉ... phải đợi một tuần sao"',
          id: '"Kapan ya orang itu balas... apa harus nunggu seminggu"',
        }
      ),
      section(
        {
          ko: '💪 이 급수의 강점',
          en: '💪 Strength of This Level',
          ja: '💪 このレベルの強み',
          'zh-CN': '💪 这个级别的优点',
          'zh-TW': '💪 這個級別的優點',
          vi: '💪 Điểm mạnh của cấp độ này',
          id: '💪 Kekuatan Level Ini',
        },
        {
          ko: '불필요한 에너지 소비가 없다. 진짜 필요한 것만 한다',
          en: "No wasted energy. Only does what's truly necessary",
          ja: '無駄なエネルギー消費がない。本当に必要なことだけをする',
          'zh-CN': '不浪费多余的精力。只做真正必要的事',
          'zh-TW': '不浪費多餘的精力。只做真正必要的事',
          vi: 'Không tiêu hao năng lượng thừa. Chỉ làm những việc thật sự cần thiết',
          id: 'Tidak ada energi yang terbuang sia-sia. Hanya melakukan yang benar-benar perlu',
        }
      ),
      section(
        {
          ko: '🌑 이 급수의 그늘',
          en: '🌑 The Shadow Side of This Level',
          ja: '🌑 このレベルの陰の部分',
          'zh-CN': '🌑 这个级别的阴暗面',
          'zh-TW': '🌑 這個級別的陰暗面',
          vi: '🌑 Mặt tối của cấp độ này',
          id: '🌑 Sisi Gelap Level Ini',
        },
        {
          ko: '진짜 필요한 것의 기준이 점점 올라간다',
          en: "The bar for what counts as 'truly necessary' keeps rising",
          ja: '本当に必要なことの基準がどんどん上がっていく',
          'zh-CN': '「真正必要」的标准会越来越高',
          'zh-TW': '「真正必要」的標準會越來越高',
          vi: 'Tiêu chuẩn về việc "thật sự cần thiết" ngày càng nâng cao',
          id: "Standar untuk 'benar-benar perlu' terus meningkat",
        }
      ),
      section(
        {
          ko: '💬 한 줄 평',
          en: '💬 One-Line Review',
          ja: '💬 一言コメント',
          'zh-CN': '💬 一句话评价',
          'zh-TW': '💬 一句話評價',
          vi: '💬 Nhận xét một câu',
          id: '💬 Komentar Singkat',
        },
        {
          ko: '"귀차니즘이 습관이 됐다. 이제 되돌아오기 어렵다"',
          en: '"Laziness has become a habit. It\'s hard to turn back now"',
          ja: '「怠け癖が習慣になった。もう戻るのは難しい」',
          'zh-CN': '「懒已经成了习惯，现在很难回头了」',
          'zh-TW': '「懶已經成了習慣，現在很難回頭了」',
          vi: '"Sự lười biếng đã trở thành thói quen. Giờ khó mà quay lại được"',
          id: '"Kemalasan sudah jadi kebiasaan. Sekarang sulit untuk berubah kembali"',
        }
      ),
    ],
    shareMessage: L({
      ko: '귀차니즘 급수: 4단 고수 😴 귀차니즘이 생활 방식 된 레벨... 답장 일주일 후에 하는 거 너무 공감 ㅠ → 너는 몇 단이야?',
      en: "My laziness level: Level 4 Master 😴 The level where laziness becomes a lifestyle... relate way too hard to replying a week later 😭 → What's your level?",
      ja: '怠け度レベル：4級高手 😴 怠け癖が生活様式になったレベル…返信を一週間後にするの、めっちゃ共感 ㅠ → あなたは何級？',
      'zh-CN': '懒癌等级：4级高手 😴 懒惰已经成为生活方式的等级…消息一周后才回这点太有共鸣了 ㅠ → 你是几级？',
      'zh-TW': '懶癌等級：4級高手 😴 懶惰已經成為生活方式的等級…訊息一週後才回這點太有共鳴了 ㅠ → 你是幾級？',
      vi: 'Cấp độ lười của tôi: Cao thủ cấp 4 😴 Mức độ mà sự lười biếng trở thành phong cách sống... quá đồng cảm với việc trả lời sau một tuần 😢 → Bạn cấp mấy?',
      id: 'Level kemalasanku: Master Level 4 😴 Level di mana kemalasan sudah jadi gaya hidup... relate banget sama balas pesan seminggu kemudian ㅠ → Kamu level berapa?',
    }),
  },
  {
    type: 'Type5',
    emoji: '🛋️',
    title: L({
      ko: '귀찮음이 삶의 철학인, 귀차니즘 5단 달인',
      en: 'Laziness as a Philosophy of Life — Laziness Level 5 Expert',
      ja: '面倒が人生の哲学、怠け度5級達人',
      'zh-CN': '懒是人生哲学，懒癌5级达人',
      'zh-TW': '懶是人生哲學，懶癌5級達人',
      vi: 'Lười là triết lý sống, Chuyên gia cấp độ 5',
      id: 'Malas sebagai Filosofi Hidup, Ahli Level 5',
    }),
    shortDescription: L({
      ko: '귀찮음이 삶의 철학이 된 수준입니다. 주변에서 이미 포기했을 가능성이 높습니다.',
      en: "Laziness has become your life philosophy. There's a good chance the people around you have already given up trying to change it.",
      ja: '面倒が生き方の哲学になった水準です。周りはもうすでに諭すのをあきらめている可能性が高いです。',
      'zh-CN': '懒惰已经成了你的人生哲学。身边人很可能早就放弃劝你了。',
      'zh-TW': '懶惰已經成了你的人生哲學。身邊人很可能早就放棄勸你了。',
      vi: 'Sự lười biếng đã trở thành triết lý sống của bạn. Rất có thể những người xung quanh đã từ bỏ việc thay đổi bạn rồi.',
      id: 'Kemalasan sudah menjadi filosofi hidupmu. Kemungkinan besar orang di sekitarmu sudah menyerah untuk mengubahmu.',
    }),
    description: L({
      ko: '설거지 대신 배달 시키기, 세수 안 하고 자기, 쓰레기 다음 주에 버리기, 옷 입고 자기가 일상입니다. 이것을 게으름이라고 부르면 억울할 수 있습니다. 당신은 그냥 에너지 효율을 극대화하고 있는 것입니다.',
      en: "Ordering delivery instead of washing dishes, sleeping without washing your face, taking out the trash next week, sleeping in your clothes — these are all daily routines for you. Calling this laziness might feel unfair. You're simply maximizing energy efficiency.",
      ja: '皿洗いの代わりにデリバリーを頼む、洗顔せずに寝る、ゴミを来週出す、服を着たまま寝るのが日常です。これを怠けと呼ぶと不公平に感じるかもしれません。あなたはただエネルギー効率を最大化しているだけです。',
      'zh-CN': '洗碗改叫外卖、不洗脸就睡、垃圾拖到下周才倒、穿着衣服就睡，这些都是你的日常。要说这是懒惰，你可能会觉得委屈。你只是把能量效率发挥到了极致。',
      'zh-TW': '洗碗改叫外送、不洗臉就睡、垃圾拖到下週才倒、穿著衣服就睡，這些都是你的日常。要說這是懶惰，你可能會覺得委屈。你只是把能量效率發揮到了極致。',
      vi: 'Gọi đồ ăn thay vì rửa bát, ngủ mà không rửa mặt, để rác đến tuần sau mới đổ, ngủ luôn với quần áo đang mặc - đây là những việc thường ngày của bạn. Nếu gọi đây là lười biếng thì có thể bạn sẽ thấy oan ức. Bạn chỉ đơn giản là đang tối đa hóa hiệu suất năng lượng.',
      id: 'Memesan makanan online daripada mencuci piring, tidur tanpa cuci muka, membuang sampah minggu depan, tidur dengan baju yang sedang dipakai — ini semua adalah rutinitas harianmu. Menyebut ini kemalasan mungkin terasa tidak adil bagimu. Kamu hanya memaksimalkan efisiensi energi.',
    }),
    lazinessGrade: L({
      ko: '귀차인 5단 달인 🛋️',
      en: 'Lazy Expert Level 5 🛋️',
      ja: '怠け者5級達人 🛋️',
      'zh-CN': '懒癌5级达人 🛋️',
      'zh-TW': '懶癌5級達人 🛋️',
      vi: 'Chuyên gia lười cấp độ 5 🛋️',
      id: 'Ahli Malas Level 5 🛋️',
    }),
    lazinessIndex: L({
      ko: '게으름 지수 85~90%',
      en: 'Laziness Index: 85-90%',
      ja: '怠け度指数 85~90%',
      'zh-CN': '懒癌指数 85~90%',
      'zh-TW': '懶癌指數 85~90%',
      vi: 'Chỉ số lười biếng: 85-90%',
      id: 'Indeks Kemalasan: 85-90%',
    }),
    sections: [
      section(
        {
          ko: '👀 주변의 평가',
          en: "👀 Others' Evaluation",
          ja: '👀 周囲からの評価',
          'zh-CN': '👀 周围人的评价',
          'zh-TW': '👀 周圍人的評價',
          vi: '👀 Đánh giá từ xung quanh',
          id: '👀 Penilaian Orang Sekitar',
        },
        {
          ko: '"저 사람 집에 가면 어떤 상태일지 상상이 안 간다"',
          en: '"I can\'t even imagine what their place looks like when they get home"',
          ja: '「あの人、家に帰ったらどんな状態なのか想像もつかない」',
          'zh-CN': '「那个人回到家会是什么状态，完全想象不出来」',
          'zh-TW': '「那個人回到家會是什麼狀態，完全想像不出來」',
          vi: '"Không thể tưởng tượng được người đó về nhà thì trong tình trạng thế nào"',
          id: '"Gak bisa bayangin gimana kondisinya kalau orang itu sudah di rumah"',
        }
      ),
      section(
        {
          ko: '💪 이 급수의 강점',
          en: '💪 Strength of This Level',
          ja: '💪 このレベルの強み',
          'zh-CN': '💪 这个级别的优点',
          'zh-TW': '💪 這個級別的優點',
          vi: '💪 Điểm mạnh của cấp độ này',
          id: '💪 Kekuatan Level Ini',
        },
        {
          ko: '진짜 아무것도 신경 안 쓰는 정신적 자유로움',
          en: 'The mental freedom of truly not caring about anything',
          ja: '本当に何も気にしない精神的な自由さ',
          'zh-CN': '真正做到什么都不在乎的精神自由',
          'zh-TW': '真正做到什麼都不在乎的精神自由',
          vi: 'Sự tự do tinh thần khi thực sự không quan tâm đến điều gì cả',
          id: 'Kebebasan mental karena benar-benar tidak memikirkan apa pun',
        }
      ),
      section(
        {
          ko: '🌑 이 급수의 그늘',
          en: '🌑 The Shadow Side of This Level',
          ja: '🌑 このレベルの陰の部分',
          'zh-CN': '🌑 这个级别的阴暗面',
          'zh-TW': '🌑 這個級別的陰暗面',
          vi: '🌑 Mặt tối của cấp độ này',
          id: '🌑 Sisi Gelap Level Ini',
        },
        {
          ko: '정말 중요한 것도 귀찮다고 미뤄지는 순간이 온다',
          en: 'There comes a moment when even truly important things get put off out of laziness',
          ja: '本当に重要なことも面倒だと後回しにする瞬間が来る',
          'zh-CN': '总会有连真正重要的事都因为懒而被拖延的时刻',
          'zh-TW': '總會有連真正重要的事都因為懶而被拖延的時刻',
          vi: 'Sẽ có lúc ngay cả những việc thực sự quan trọng cũng bị trì hoãn vì lười',
          id: 'Akan ada saat di mana hal yang benar-benar penting juga ditunda karena malas',
        }
      ),
      section(
        {
          ko: '💬 한 줄 평',
          en: '💬 One-Line Review',
          ja: '💬 一言コメント',
          'zh-CN': '💬 一句话评价',
          'zh-TW': '💬 一句話評價',
          vi: '💬 Nhận xét một câu',
          id: '💬 Komentar Singkat',
        },
        {
          ko: '"귀차니즘 챌린지에서 이 결과 올리면 \'나보다 게으른 사람 있으면 나와봐\'를 외칠 수 있다"',
          en: '"If you post this result in a laziness challenge, you can confidently shout \'come at me if you\'re lazier\'"',
          ja: '「怠け度チャレンジでこの結果を出せば、『私より怠けてる人いたら出てきて』と叫べる」',
          'zh-CN': '「在懒癌挑战里晒出这个结果，完全可以喊出『有比我更懒的就出来』」',
          'zh-TW': '「在懶癌挑戰裡曬出這個結果，完全可以喊出『有比我更懶的就出來』」',
          vi: '"Nếu đăng kết quả này trong thử thách lười biếng, bạn có thể hô to \'ai lười hơn tôi thì ra đây\'"',
          id: '"Kalau hasil ini diunggah di challenge kemalasan, bisa banget teriak \'kalau ada yang lebih malas dari aku, ayo maju\'"',
        }
      ),
    ],
    shareMessage: L({
      ko: '귀차니즘 급수: 5단 달인 🛋️ 에너지 효율 극대화 수준이래... 솔직히 인정 ㅋㅋ 나보다 게으른 사람 있으면 나와봐 챌린지 → 너는 몇 단이야?',
      en: "My laziness level: Level 5 Expert 🛋️ Apparently I've maximized energy efficiency... honestly, I admit it lol Bring it on if you're lazier than me challenge → What's your level?",
      ja: '怠け度レベル：5級達人 🛋️ エネルギー効率を最大化したレベルらしい…正直認める（笑）私より怠けてる人いたら出てきてチャレンジ → あなたは何級？',
      'zh-CN': '懒癌等级：5级达人 🛋️ 据说是能量效率最大化的水平…老实说我承认哈哈 有比我更懒的人就出来挑战 → 你是几级？',
      'zh-TW': '懶癌等級：5級達人 🛋️ 據說是能量效率最大化的水平…老實說我承認哈哈 有比我更懶的人就出來挑戰 → 你是幾級？',
      vi: 'Cấp độ lười của tôi: Chuyên gia cấp 5 🛋️ Nghe nói đây là mức tối đa hóa hiệu suất năng lượng... thành thật mà nói tôi công nhận ha ha Thử thách ai lười hơn tôi thì ra đây → Bạn cấp mấy?',
      id: 'Level kemalasanku: Ahli Level 5 🛋️ Katanya ini level efisiensi energi maksimal... jujur aku akui haha Challenge siapa yang lebih malas dari aku, ayo maju → Kamu level berapa?',
    }),
  },
  {
    type: 'Type6',
    emoji: '👻',
    title: L({
      ko: '귀찮음의 경지에 오른, 귀차니즘 만렙',
      en: 'Reached the Pinnacle of Laziness — Max Level Laziness',
      ja: '面倒の境地に達した、怠け度満レベル',
      'zh-CN': '达到懒惰境界，懒癌满级',
      'zh-TW': '達到懶惰境界，懶癌滿級',
      vi: 'Đạt đến cảnh giới của sự lười biếng, Max Level',
      id: 'Mencapai Puncak Kemalasan, Level Maksimal',
    }),
    shortDescription: L({
      ko: '당신은 귀차니즘의 끝에 도달했습니다. 이것은 더 이상 게으름이 아닙니다. 깨달음입니다.',
      en: "You've reached the very end of laziness. This is no longer laziness. It's enlightenment.",
      ja: 'あなたは怠けの果てに到達しました。これはもはや怠けではありません。悟りです。',
      'zh-CN': '你已经到达了懒惰的终点。这已经不是懒惰了，是一种觉悟。',
      'zh-TW': '你已經到達了懶惰的終點。這已經不是懶惰了，是一種覺悟。',
      vi: 'Bạn đã đạt đến điểm cuối của sự lười biếng. Đây không còn là lười biếng nữa. Đây là sự giác ngộ.',
      id: 'Kamu telah mencapai ujung dari kemalasan. Ini bukan lagi kemalasan. Ini adalah pencerahan.',
    }),
    description: L({
      ko: '12개 상황 모두에서 가장 귀찮은 선택을 했습니다. 폰 꺼질 때까지 안 충전하고 그릇 대신 배달 시키고 빨래 구겨진 채 입고 답장 일주일 후에 하고 쓰레기 다음 주에 버립니다. 이 결과를 솔직하게 올린 용기만큼은 S급입니다.',
      en: "You chose the laziest option in all 12 situations. You don't charge your phone until it dies, order delivery instead of washing dishes, wear wrinkled laundry, reply a week later, and take out the trash next week. But the courage to post this result honestly is truly S-tier.",
      ja: '12個の状況すべてで最も面倒な選択をしました。携帯が切れるまで充電せず、皿の代わりにデリバリーを頼み、洗濯物はしわのまま着て、返信は一週間後、ゴミは来週出します。ただ、この結果を正直に公開する勇気だけはSランクです。',
      'zh-CN': '在全部12种情境下都选择了最懒的选项。手机不到自动关机不充电，碗不洗改叫外卖，衣服皱着也照穿，消息一周后才回，垃圾留到下周才倒。但能坦率晒出这个结果的勇气，堪称S级。',
      'zh-TW': '在全部12種情境下都選擇了最懶的選項。手機不到自動關機不充電，碗不洗改叫外送，衣服皺著也照穿，訊息一週後才回，垃圾留到下週才倒。但能坦率曬出這個結果的勇氣，堪稱S級。',
      vi: 'Bạn đã chọn phương án lười nhất trong cả 12 tình huống. Không sạc điện thoại cho đến khi tắt máy, gọi đồ ăn thay vì rửa bát, mặc đồ nhăn, trả lời sau một tuần, đổ rác tuần sau. Nhưng lòng can đảm để đăng kết quả này một cách trung thực thì đúng là hạng S.',
      id: 'Kamu memilih opsi paling malas di semua 12 situasi. Tidak mengisi baterai HP sampai mati sendiri, memesan makanan online daripada mencuci piring, memakai baju kusut, membalas pesan seminggu kemudian, membuang sampah minggu depan. Tapi keberanian untuk mengunggah hasil ini dengan jujur benar-benar kelas S.',
    }),
    lazinessGrade: L({
      ko: '귀차인 만렙 👻',
      en: 'Max Level Lazy 👻',
      ja: '怠け者満レベル 👻',
      'zh-CN': '懒癌满级 👻',
      'zh-TW': '懶癌滿級 👻',
      vi: 'Lười Max Level 👻',
      id: 'Malas Level Maksimal 👻',
    }),
    lazinessIndex: L({
      ko: '게으름 지수 100%',
      en: 'Laziness Index: 100%',
      ja: '怠け度指数 100%',
      'zh-CN': '懒癌指数 100%',
      'zh-TW': '懶癌指數 100%',
      vi: 'Chỉ số lười biếng: 100%',
      id: 'Indeks Kemalasan: 100%',
    }),
    sections: [
      section(
        {
          ko: '👀 주변의 평가',
          en: "👀 Others' Evaluation",
          ja: '👀 周囲からの評価',
          'zh-CN': '👀 周围人的评价',
          'zh-TW': '👀 周圍人的評價',
          vi: '👀 Đánh giá từ xung quanh',
          id: '👀 Penilaian Orang Sekitar',
        },
        {
          ko: '주변 사람들이 이미 기대치를 0으로 낮췄을 것임',
          en: 'The people around you have probably already lowered their expectations to zero',
          ja: '周りの人はすでに期待値をゼロまで下げているはず',
          'zh-CN': '周围人估计早就把期待值降到零了',
          'zh-TW': '周圍人估計早就把期待值降到零了',
          vi: 'Những người xung quanh chắc đã hạ kỳ vọng xuống mức 0 từ lâu',
          id: 'Orang-orang di sekitarmu pasti sudah menurunkan ekspektasi jadi nol',
        }
      ),
      section(
        {
          ko: '💪 이 급수의 강점',
          en: '💪 Strength of This Level',
          ja: '💪 このレベルの強み',
          'zh-CN': '💪 这个级别的优点',
          'zh-TW': '💪 這個級別的優點',
          vi: '💪 Điểm mạnh của cấp độ này',
          id: '💪 Kekuatan Level Ini',
        },
        {
          ko: '아무것도 신경 안 쓰는 완전한 자유. 번아웃과 거리가 멀다',
          en: 'Complete freedom from caring about anything. Far from burnout',
          ja: '何も気にしない完全な自由。バーンアウトとは無縁',
          'zh-CN': '完全不在乎任何事的彻底自由。离倦怠很远',
          'zh-TW': '完全不在乎任何事的徹底自由。離倦怠很遠',
          vi: 'Sự tự do hoàn toàn khi không quan tâm đến bất cứ điều gì. Cách rất xa với burnout',
          id: 'Kebebasan penuh karena tidak memikirkan apa pun. Jauh dari burnout',
        }
      ),
      section(
        {
          ko: '🌑 이 급수의 그늘',
          en: '🌑 The Shadow Side of This Level',
          ja: '🌑 このレベルの陰の部分',
          'zh-CN': '🌑 这个级别的阴暗面',
          'zh-TW': '🌑 這個級別的陰暗面',
          vi: '🌑 Mặt tối của cấp độ này',
          id: '🌑 Sisi Gelap Level Ini',
        },
        {
          ko: '진짜 중요한 것도 귀찮다고 미뤄지는 순간이 언제든 올 수 있다',
          en: 'There could come a moment, any time, when even truly important things get put off out of laziness',
          ja: '本当に重要なことも面倒だと後回しにする瞬間がいつでも来得る',
          'zh-CN': '随时可能出现连真正重要的事都因为懒而被拖延的瞬间',
          'zh-TW': '隨時可能出現連真正重要的事都因為懶而被拖延的瞬間',
          vi: 'Bất cứ lúc nào cũng có thể xảy ra khoảnh khắc mà những việc thực sự quan trọng bị trì hoãn vì lười',
          id: 'Kapan pun bisa datang momen di mana hal yang benar-benar penting juga ditunda karena malas',
        }
      ),
      section(
        {
          ko: '🤗 한 줄 위로',
          en: '🤗 A Word of Comfort',
          ja: '🤗 一言慰め',
          'zh-CN': '🤗 一句安慰',
          'zh-TW': '🤗 一句安慰',
          vi: '🤗 Một lời an ủi',
          id: '🤗 Sepatah Kata Penghiburan',
        },
        {
          ko: '"이 결과를 솔직하게 인정한 것 자체가 이미 오늘 가장 부지런하게 한 일입니다"',
          en: '"Honestly admitting this result is already the most diligent thing you did today"',
          ja: '「この結果を正直に認めたこと自体が、今日すでに一番勤勉にやったことです」',
          'zh-CN': '「能坦率承认这个结果，本身就已经是你今天做得最勤快的事了」',
          'zh-TW': '「能坦率承認這個結果，本身就已經是你今天做得最勤快的事了」',
          vi: '"Việc thừa nhận kết quả này một cách trung thực đã chính là việc chăm chỉ nhất bạn làm hôm nay"',
          id: '"Mengakui hasil ini dengan jujur sudah menjadi hal paling rajin yang kamu lakukan hari ini"',
        }
      ),
      section(
        {
          ko: '📢 챌린지 선언',
          en: '📢 Challenge Declaration',
          ja: '📢 チャレンジ宣言',
          'zh-CN': '📢 挑战宣言',
          'zh-TW': '📢 挑戰宣言',
          vi: '📢 Tuyên bố thử thách',
          id: '📢 Deklarasi Challenge',
        },
        {
          ko: '"나보다 게으른 사람 있으면 나와봐 👻"',
          en: '"Come at me if you\'re lazier than me 👻"',
          ja: '「私より怠けてる人いたら出てきて 👻」',
          'zh-CN': '「有比我更懒的人就出来 👻」',
          'zh-TW': '「有比我更懶的人就出來 👻」',
          vi: '"Ai lười hơn tôi thì ra đây 👻"',
          id: '"Kalau ada yang lebih malas dari aku, ayo maju 👻"',
        }
      ),
    ],
    shareMessage: L({
      ko: '귀차니즘 급수: 만렙 👻 12개 전부 인정... 이거 올리는 것 자체가 오늘 가장 부지런하게 한 일 ㅋㅋㅋ 나보다 게으른 사람 있으면 나와봐',
      en: "My laziness level: Max Level 👻 Admitted to all 12... posting this is literally the most diligent thing I did today lol Come at me if you're lazier than me",
      ja: '怠け度レベル：満レベル 👻 12個全部認める…これを投稿すること自体が今日一番勤勉にやったこと（笑）私より怠けてる人いたら出てきて',
      'zh-CN': '懒癌等级：满级 👻 12项全中…发这个本身就是我今天做得最勤快的事哈哈哈 有比我更懒的人就出来',
      'zh-TW': '懶癌等級：滿級 👻 12項全中…發這個本身就是我今天做得最勤快的事哈哈哈 有比我更懶的人就出來',
      vi: 'Cấp độ lười của tôi: Max Level 👻 Nhận hết cả 12 mục... đăng cái này chính là việc chăm chỉ nhất tôi làm hôm nay ha ha ha Ai lười hơn tôi thì ra đây',
      id: 'Level kemalasanku: Level Maksimal 👻 Mengakui semua 12... mengunggah ini adalah hal paling rajin yang aku lakukan hari ini hahaha Kalau ada yang lebih malas dari aku, ayo maju',
    }),
  },
];
