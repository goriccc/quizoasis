/** 내가 '회사 빌런'이 될 확률? — 12문항 상황극 4지선다, A=0 B=1 C=2 D=3, 총점 0~36 → Type1~6 */

type Locale = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';
type ML = Record<Locale, string>;

function L(m: ML): Record<string, string> {
  return m;
}

function opt(m: ML, score: number): { text: Record<string, string>; score: number } {
  return { text: L(m), score };
}

function section(title: ML, content: ML): Phase3OfficeVillainProbabilityResultSection {
  return { title: L(title), content: L(content) };
}

export interface Phase3OfficeVillainProbabilityQuestion {
  id: number;
  question: Record<string, string>;
  options: { text: Record<string, string>; score: number }[];
}

export interface Phase3OfficeVillainProbabilityResultSection {
  title: Record<string, string>;
  content: Record<string, string>;
}

export interface Phase3OfficeVillainProbabilityResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  probability: Record<string, string>;
  sections: Phase3OfficeVillainProbabilityResultSection[];
  shareMessage: Record<string, string>;
}

export function calculatePhase3OfficeVillainProbabilityResult(answers: number[]): string {
  const total = answers.reduce((sum, s) => sum + (s ?? 0), 0);
  if (total <= 5) return 'Type1';
  if (total <= 11) return 'Type2';
  if (total <= 19) return 'Type3';
  if (total <= 27) return 'Type4';
  if (total <= 33) return 'Type5';
  return 'Type6';
}

export const phase3OfficeVillainProbabilityQuestions: Phase3OfficeVillainProbabilityQuestion[] = [
  {
    id: 1,
    question: L({
      ko: '상황: 오후 2시 전체 회의가 시작됐다. 발표자가 PPT를 넘기기 시작한다. 나는?',
      en: "Situation: It's 2 PM and the all-hands meeting has started. The presenter begins flipping through the slides. I...",
      ja: '状況：午後2時、全体会議が始まった。発表者がスライドをめくり始める。私は？',
      'zh-CN': '情况：下午2点，全员会议开始了。主讲人开始翻PPT。我会：',
      'zh-TW': '情況：下午2點，全員會議開始了。主講人開始翻PPT。我會：',
      vi: 'Tình huống: 2 giờ chiều, cuộc họp toàn công ty bắt đầu. Người thuyết trình bắt đầu lật slide. Tôi sẽ...',
      id: 'Situasi: Pukul 2 siang, rapat seluruh tim dimulai. Presenter mulai membuka slide PPT. Aku...',
    }),
    options: [
      opt(
        {
          ko: '노트 앱을 열고 회의 내용을 받아 적는다',
          en: 'Open a notes app and write down what\'s discussed',
          ja: 'メモアプリを開いて会議内容を記録する',
          'zh-CN': '打开笔记App记录会议内容',
          'zh-TW': '打開筆記App記錄會議內容',
          vi: 'Mở ứng dụng ghi chú và ghi lại nội dung cuộc họp',
          id: 'Membuka aplikasi catatan dan mencatat isi rapat',
        },
        0
      ),
      opt(
        {
          ko: '일단 눈은 화면을 향하고 머릿속은 오늘 저녁 뭐 먹을지 생각한다',
          en: 'Keep my eyes on the screen but mentally plan what to eat for dinner tonight',
          ja: 'とりあえず目は画面に向けているが、頭の中では今日の晩ごはんを考えている',
          'zh-CN': '眼睛盯着屏幕，脑子里却在想晚饭吃什么',
          'zh-TW': '眼睛盯著螢幕，腦子裡卻在想晚餐吃什麼',
          vi: 'Mắt vẫn nhìn màn hình nhưng đầu óc đang nghĩ tối nay ăn gì',
          id: 'Mata tetap ke layar tapi pikiran sudah mikir makan malam apa',
        },
        1
      ),
      opt(
        {
          ko: '노트북 화면을 살짝 기울여서 카카오톡을 확인한다',
          en: 'Tilt my laptop screen slightly and check KakaoTalk',
          ja: 'ノートPCの画面を少し傾けてカカオトークを確認する',
          'zh-CN': '把笔记本屏幕稍微倾斜偷看聊天软件消息',
          'zh-TW': '把筆電螢幕稍微傾斜偷看聊天軟體訊息',
          vi: 'Nghiêng màn hình laptop một chút để lén xem tin nhắn',
          id: 'Memiringkan sedikit layar laptop untuk mengecek chat',
        },
        2
      ),
      opt(
        {
          ko: '"이 회의 꼭 필요한가요?" 표정을 숨기지 않고 있다가 결국 폰을 꺼낸다',
          en: 'Don\'t hide my "is this meeting even necessary?" face and eventually take out my phone',
          ja: '「この会議、本当に必要？」という表情を隠さず、結局スマホを取り出す',
          'zh-CN': '毫不掩饰"这个会真的有必要吗"的表情，最后干脆拿出手机',
          'zh-TW': '毫不掩飾「這個會真的有必要嗎」的表情，最後乾脆拿出手機',
          vi: 'Không giấu vẻ mặt "cuộc họp này có cần thiết không" và cuối cùng lấy điện thoại ra',
          id: 'Nggak nyembunyiin muka "rapat ini penting banget ya" dan akhirnya ambil hp',
        },
        3
      ),
    ],
  },
  {
    id: 2,
    question: L({
      ko: '상황: 공용 냉장고에 동료가 넣어둔 편의점 음식이 있다. 이름이 안 적혀있다. 나는?',
      en: "Situation: There's convenience store food in the shared fridge that a coworker left. No name on it. I...",
      ja: '状況：共用の冷蔵庫にコンビニ食品が入っている。名前は書かれていない。私は？',
      'zh-CN': '情况：公共冰箱里有同事放的便利店食品，上面没写名字。我会：',
      'zh-TW': '情況：公共冰箱裡有同事放的便利商店食品，上面沒寫名字。我會：',
      vi: 'Tình huống: Trong tủ lạnh chung có đồ ăn tiện lợi của đồng nghiệp để, không ghi tên. Tôi sẽ...',
      id: 'Situasi: Ada makanan convenience store punya rekan kerja di kulkas bersama, tanpa nama. Aku...',
    }),
    options: [
      opt(
        {
          ko: '절대 손대지 않는다. 내 것이 아니면 안 된다',
          en: "Never touch it. If it's not mine, it's not mine",
          ja: '絶対に手を出さない。自分のものじゃなければダメ',
          'zh-CN': '绝对不碰。不是我的东西就是不行',
          'zh-TW': '絕對不碰。不是我的東西就是不行',
          vi: 'Tuyệt đối không đụng vào. Không phải của mình thì không được',
          id: 'Sama sekali nggak nyentuh. Kalau bukan punya sendiri ya nggak boleh',
        },
        0
      ),
      opt(
        {
          ko: '엄청 먹고 싶지만 참는다. 대신 옆에서 계속 보게 된다',
          en: 'Desperately want to eat it but hold back. Instead I keep glancing at it',
          ja: 'すごく食べたいけど我慢する。代わりに何度も見てしまう',
          'zh-CN': '超想吃但忍住了，反而一直盯着看',
          'zh-TW': '超想吃但忍住了，反而一直盯著看',
          vi: 'Rất muốn ăn nhưng cố nhịn. Thay vào đó cứ nhìn nó suốt',
          id: 'Pengen banget makan tapi ditahan. Malah jadi kelirikan terus',
        },
        1
      ),
      opt(
        {
          ko: '오래된 것 같으면 먹는다. 어차피 버릴 거잖아',
          en: 'If it looks old, I eat it. It was probably going to be thrown out anyway',
          ja: '古そうなら食べる。どうせ捨てられるものでしょ',
          'zh-CN': '看起来放很久了就吃掉，反正也是要被扔的',
          'zh-TW': '看起來放很久了就吃掉，反正也是要被丟的',
          vi: 'Nếu thấy cũ thì ăn luôn. Đằng nào cũng bị vứt mà',
          id: 'Kalau kelihatan udah lama, dimakan aja. Toh nanti dibuang juga',
        },
        2
      ),
      opt(
        {
          ko: '먹는다. 냉장고에 이름 안 쓴 건 공공재라는 개인 원칙이 있다',
          en: 'I eat it. I have a personal rule that anything unnamed in the fridge is public property',
          ja: '食べる。冷蔵庫に名前が書かれていないものは共有物という個人的な原則がある',
          'zh-CN': '直接吃了。我有个人原则：冰箱里没写名字的就是公共财产',
          'zh-TW': '直接吃了。我有個人原則：冰箱裡沒寫名字的就是公共財產',
          vi: 'Ăn luôn. Tôi có nguyên tắc riêng: đồ trong tủ lạnh không ghi tên là tài sản chung',
          id: 'Dimakan. Aku punya prinsip pribadi: kalau nggak ada nama di kulkas berarti barang umum',
        },
        3
      ),
    ],
  },
  {
    id: 3,
    question: L({
      ko: '상황: 퇴근 10분 전, 팀장이 "이거 오늘 안에 처리해줄 수 있어?"라고 한다. 나는?',
      en: 'Situation: 10 minutes before I clock out, my team lead asks, "Can you finish this by today?" I...',
      ja: '状況：退勤10分前、チームリーダーが「これ、今日中にできる？」と言う。私は？',
      'zh-CN': '情况：下班前10分钟，组长问"这个能今天内处理完吗？"我会：',
      'zh-TW': '情況：下班前10分鐘，組長問「這個能今天內處理完嗎？」我會：',
      vi: 'Tình huống: 10 phút trước khi tan làm, trưởng nhóm hỏi "Cái này em xử lý xong trong hôm nay được không?" Tôi sẽ...',
      id: 'Situasi: 10 menit sebelum jam pulang, team leader bilang "Ini bisa diselesaikan hari ini?" Aku...',
    }),
    options: [
      opt(
        {
          ko: '"네, 하겠습니다"하고 야근한다',
          en: 'Say "Yes, I\'ll do it" and work overtime',
          ja: '「はい、やります」と言って残業する',
          'zh-CN': '说"好，我来做"然后加班',
          'zh-TW': '說「好，我來做」然後加班',
          vi: 'Nói "Vâng, em sẽ làm" rồi ở lại làm thêm giờ',
          id: 'Bilang "Baik, akan saya kerjakan" lalu lembur',
        },
        0
      ),
      opt(
        {
          ko: '"지금 바로 시작하면 가능할 것 같습니다" 하고 속으로 욕한다',
          en: 'Say "I think it\'s possible if I start right now" while cursing inside',
          ja: '「今すぐ始めれば可能だと思います」と言いながら心の中で舌打ちする',
          'zh-CN': '嘴上说"现在马上开始应该来得及"，心里却在骂人',
          'zh-TW': '嘴上說「現在馬上開始應該來得及」，心裡卻在罵人',
          vi: 'Nói "Nếu bắt đầu ngay bây giờ thì em nghĩ là được" nhưng trong lòng chửi thầm',
          id: 'Bilang "Kalau mulai sekarang sepertinya bisa" sambil ngedumel dalam hati',
        },
        1
      ),
      opt(
        {
          ko: '"오늘은 개인 일정이 있어서 내일 첫 번째로 하겠습니다"라고 한다',
          en: 'Say "I have personal plans today, so I\'ll make it my first priority tomorrow"',
          ja: '「今日は個人的な予定があるので、明日一番に対応します」と言う',
          'zh-CN': '说"今天有私事，明天第一件事就处理"',
          'zh-TW': '說「今天有私事，明天第一件事就處理」',
          vi: 'Nói "Hôm nay em có việc riêng, ngày mai em sẽ làm đầu tiên"',
          id: 'Bilang "Hari ini aku ada acara pribadi, besok akan jadi yang pertama kukerjakan"',
        },
        2
      ),
      opt(
        {
          ko: '"이 업무 마감이 오늘이었나요? 처음 듣는 것 같은데요"라고 되묻는다',
          en: 'Ask back, "Was this due today? I\'m hearing that for the first time"',
          ja: '「この業務の締切、今日でしたか？初耳なんですが」と聞き返す',
          'zh-CN': '反问"这个任务今天截止吗？我好像第一次听说"',
          'zh-TW': '反問「這個任務今天截止嗎？我好像第一次聽說」',
          vi: 'Hỏi lại "Việc này hạn hôm nay ạ? Em thấy như lần đầu nghe vậy"',
          id: 'Balik nanya "Deadline tugas ini hari ini ya? Kayaknya baru denger deh"',
        },
        3
      ),
    ],
  },
  {
    id: 4,
    question: L({
      ko: '상황: 회의실 예약을 깜빡해서 빈 회의실을 발견했다. 예약자가 없는 것 같다. 나는?',
      en: 'Situation: I forgot to book a meeting room but found an empty one. There seems to be no reservation. I...',
      ja: '状況：会議室の予約を忘れて空いている会議室を見つけた。予約者はいないようだ。私は？',
      'zh-CN': '情况：忘了预约会议室，发现一间空会议室，看起来没人预约。我会：',
      'zh-TW': '情況：忘了預約會議室，發現一間空會議室，看起來沒人預約。我會：',
      vi: 'Tình huống: Tôi quên đặt phòng họp nhưng tìm được một phòng trống, có vẻ không ai đặt. Tôi sẽ...',
      id: 'Situasi: Aku lupa booking ruang meeting tapi nemu ruangan kosong yang kelihatannya belum dipesan. Aku...',
    }),
    options: [
      opt(
        {
          ko: '다음 예약까지 확인하고 시간 안에 쓴다',
          en: 'Check when the next reservation is and use it only within that time',
          ja: '次の予約時間を確認して、その時間内だけ使う',
          'zh-CN': '先确认下一个预约时间，只在那之前使用',
          'zh-TW': '先確認下一個預約時間，只在那之前使用',
          vi: 'Kiểm tra giờ đặt phòng tiếp theo và chỉ dùng trong khoảng thời gian đó',
          id: 'Cek dulu jam reservasi berikutnya dan pakai sesuai waktu yang tersisa',
        },
        0
      ),
      opt(
        {
          ko: '일단 들어가서 쓰고 누가 오면 바로 나온다',
          en: 'Just go in and use it, and leave right away if someone shows up',
          ja: 'とりあえず入って使い、誰か来たらすぐ出る',
          'zh-CN': '先进去用着，有人来就马上出去',
          'zh-TW': '先進去用著，有人來就馬上出去',
          vi: 'Cứ vào dùng trước, nếu có ai đến thì ra ngay',
          id: 'Masuk dulu dan pakai, kalau ada yang datang langsung keluar',
        },
        1
      ),
      opt(
        {
          ko: '자리 잡고 짐 다 펼쳐놓은 뒤 나중에 들어온 예약자에게 "5분만요"라고 한다',
          en: 'Set up my spot, spread out all my stuff, then tell the person who booked it, "Just 5 more minutes"',
          ja: '場所を確保して荷物を全部広げてから、後から来た予約者に「5分だけ」と言う',
          'zh-CN': '占好位置摆好东西，等真正预约的人来了就说"再等我5分钟"',
          'zh-TW': '占好位置擺好東西，等真正預約的人來了就說「再等我5分鐘」',
          vi: 'Chiếm chỗ, bày hết đồ ra, rồi khi người đặt phòng đến thì nói "Cho em 5 phút nữa"',
          id: 'Ambil tempat, gelar semua barang, terus kalau yang beneran booking datang bilang "5 menit lagi ya"',
        },
        2
      ),
      opt(
        {
          ko: '짐 다 풀고 예약자가 와도 "저도 쓸 일 있는데요"라며 자리를 뺏기지 않으려 한다',
          en: 'Unpack everything, and even when the person who booked shows up, say "I need this room too" and refuse to give it up',
          ja: '荷物を全部広げて、予約者が来ても「私も使う用があるんですけど」と言って場所を譲らない',
          'zh-CN': '把东西全摆开，就算真正预约的人来了也说"我也有事要用啊"，坚决不让出位置',
          'zh-TW': '把東西全擺開，就算真正預約的人來了也說「我也有事要用啊」，堅決不讓出位置',
          vi: 'Bày hết đồ ra, cả khi người đặt phòng đến cũng nói "Tôi cũng cần dùng mà" và không chịu nhường chỗ',
          id: 'Buka semua barang, dan pas yang booking datang tetap bilang "Aku juga ada keperluan nih" dan nggak mau ngalah',
        },
        3
      ),
    ],
  },
  {
    id: 5,
    question: L({
      ko: '상황: 점심 시간에 동료가 "오늘 뭐 먹을래?" 물어본다. 사실 나는 혼밥하고 싶다. 나는?',
      en: 'Situation: At lunchtime, a coworker asks, "What should we eat today?" But I actually want to eat alone. I...',
      ja: '状況：ランチタイムに同僚が「今日何食べる？」と聞く。実は一人でご飯を食べたい。私は？',
      'zh-CN': '情况：午餐时间同事问"今天吃什么？"其实我想一个人吃。我会：',
      'zh-TW': '情況：午餐時間同事問「今天吃什麼？」其實我想一個人吃。我會：',
      vi: 'Tình huống: Giờ ăn trưa, đồng nghiệp hỏi "Hôm nay ăn gì?" Nhưng thực ra tôi muốn ăn một mình. Tôi sẽ...',
      id: 'Situasi: Waktu makan siang, rekan kerja nanya "Hari ini makan apa?" Padahal aku pengen makan sendiri. Aku...',
    }),
    options: [
      opt(
        {
          ko: '"같이 가자. 어디 갈까?" 하며 따라간다',
          en: 'Say "Let\'s go together, where should we go?" and tag along',
          ja: '「一緒に行こう。どこ行く？」と言って一緒に行く',
          'zh-CN': '说"一起去吧，去哪吃？"然后跟着去',
          'zh-TW': '說「一起去吧，去哪吃？」然後跟著去',
          vi: 'Nói "Đi cùng nhau đi. Đi đâu nhỉ?" và đi theo',
          id: 'Bilang "Ayo bareng. Mau ke mana?" dan ikut',
        },
        0
      ),
      opt(
        {
          ko: '"나 오늘 볼일 있어서"라고 둘러대고 혼자 먹는다',
          en: 'Make an excuse, "I have something to take care of today," and eat alone',
          ja: '「今日は用事があって」と言い訳して一人で食べる',
          'zh-CN': '找借口说"我今天有事"，然后一个人吃',
          'zh-TW': '找藉口說「我今天有事」，然後一個人吃',
          vi: 'Nói dối "Hôm nay tôi có việc" rồi đi ăn một mình',
          id: 'Bikin alasan "Aku ada urusan hari ini" lalu makan sendiri',
        },
        1
      ),
      opt(
        {
          ko: '"혼자 먹고 싶어"라고 솔직하게 말하고 각자 간다',
          en: 'Say honestly, "I want to eat alone today," and we each go our own way',
          ja: '「一人で食べたい」と正直に言って、それぞれ別々に行く',
          'zh-CN': '老实说"我想一个人吃"，然后各自去',
          'zh-TW': '老實說「我想一個人吃」，然後各自去',
          vi: 'Nói thẳng "Tôi muốn ăn một mình" và mỗi người tự đi',
          id: 'Ngomong terus terang "Aku pengen makan sendiri" dan masing-masing pergi sendiri',
        },
        2
      ),
      opt(
        {
          ko: '"나 오늘 별로 입맛 없어"라며 따라갔다가 본인만 4개 시킨다',
          en: 'Say "I don\'t really have an appetite today," tag along anyway, then order four dishes just for myself',
          ja: '「今日はあんまり食欲ない」と言いながら結局ついていって、自分だけ4品も注文する',
          'zh-CN': '说"我今天没什么胃口"然后还是跟去了，结果自己一个人点了4份',
          'zh-TW': '說「我今天沒什麼胃口」然後還是跟去了，結果自己一個人點了4份',
          vi: 'Nói "Hôm nay tôi không thấy thèm ăn lắm" nhưng vẫn đi theo, rồi tự mình gọi 4 món',
          id: 'Bilang "Hari ini nafsu makanku lagi kurang" tapi tetep ikut, terus malah pesan 4 menu sendirian',
        },
        3
      ),
    ],
  },
  {
    id: 6,
    question: L({
      ko: '상황: 오픈 오피스에서 팀 전화가 울린다. 내 번호가 아닌데 아무도 안 받는다. 나는?',
      en: "Situation: In the open office, the team phone rings. It's not my line, but no one is picking up. I...",
      ja: '状況：オープンオフィスでチームの電話が鳴っている。自分の番号じゃないが誰も出ない。私は？',
      'zh-CN': '情况：开放式办公室里团队电话响了，不是我的分机，但没人接。我会：',
      'zh-TW': '情況：開放式辦公室裡團隊電話響了，不是我的分機，但沒人接。我會：',
      vi: 'Tình huống: Trong văn phòng mở, điện thoại của team đang reo. Không phải số của tôi nhưng chẳng ai bắt máy. Tôi sẽ...',
      id: 'Situasi: Di kantor open office, telepon tim berbunyi. Bukan nomorku, tapi nggak ada yang angkat. Aku...',
    }),
    options: [
      opt(
        {
          ko: '대신 받고 메모해서 전달한다',
          en: 'Pick it up for them, take notes, and pass on the message',
          ja: '代わりに出て、メモして伝える',
          'zh-CN': '代接电话，记下来再转达',
          'zh-TW': '代接電話，記下來再轉達',
          vi: 'Trả lời thay, ghi chú lại và chuyển lời',
          id: 'Angkat aja, catat, terus disampaikan',
        },
        0
      ),
      opt(
        {
          ko: '받기 싫지만 결국 받는다. 속으로 "왜 내가"',
          en: 'Don\'t want to answer but end up doing it anyway, thinking "Why me" inside',
          ja: '出たくないけど結局出る。心の中で「なんで私が」',
          'zh-CN': '不想接但最后还是接了，心里想"为什么是我"',
          'zh-TW': '不想接但最後還是接了，心裡想「為什麼是我」',
          vi: 'Không muốn trả lời nhưng cuối cùng vẫn bắt máy. Trong lòng nghĩ "Sao lại là tôi"',
          id: 'Nggak mau angkat tapi akhirnya angkat juga. Dalam hati mikir "Kok aku sih"',
        },
        1
      ),
      opt(
        {
          ko: '이어폰 꽂은 척 못 들은 척한다',
          en: "Pretend to have earphones in and act like I didn't hear it",
          ja: 'イヤホンをしているふりをして聞こえないふりをする',
          'zh-CN': '假装戴着耳机听不到',
          'zh-TW': '假裝戴著耳機聽不到',
          vi: 'Giả vờ đang đeo tai nghe và không nghe thấy',
          id: 'Pura-pura pakai earphone jadi nggak denger',
        },
        2
      ),
      opt(
        {
          ko: '눈을 딴 데 팔고 있다가 끊기면 "전화 왔었나요?"라고 모른 척한다',
          en: 'Look away and once it stops ringing, act clueless and ask, "Did the phone ring?"',
          ja: '他のところを見ていて、切れたら「電話来てました？」と知らないふりをする',
          'zh-CN': '眼睛看着别处，等电话断了再装傻问"刚才有电话吗？"',
          'zh-TW': '眼睛看著別處，等電話斷了再裝傻問「剛才有電話嗎？」',
          vi: 'Nhìn sang chỗ khác, đến khi chuông tắt thì giả bộ hỏi "Nãy có điện thoại hả?"',
          id: 'Alihkan pandangan, begitu telepon berhenti berdering baru pura-pura tanya "Tadi ada telepon ya?"',
        },
        3
      ),
    ],
  },
  {
    id: 7,
    question: L({
      ko: '상황: 팀 카카오톡 단톡방에 주말 오전 11시에 팀장이 업무 메시지를 보냈다. 나는?',
      en: 'Situation: On Sunday at 11 AM, the team lead sends a work message in the team group chat. I...',
      ja: '状況：週末の午前11時、チームのグループチャットにチームリーダーが業務メッセージを送った。私は？',
      'zh-CN': '情况：周末上午11点，组长在团队群里发了工作消息。我会：',
      'zh-TW': '情況：週末上午11點，組長在團隊群裡發了工作消息。我會：',
      vi: 'Tình huống: 11 giờ sáng cuối tuần, trưởng nhóm gửi tin nhắn công việc trong nhóm chat của team. Tôi sẽ...',
      id: 'Situasi: Jam 11 pagi di akhir pekan, team leader kirim pesan kerjaan di grup chat tim. Aku...',
    }),
    options: [
      opt(
        {
          ko: '확인하고 월요일 아침 일찍 처리한다',
          en: 'Check it and handle it first thing Monday morning',
          ja: '確認して月曜の朝一番に対応する',
          'zh-CN': '看到消息，周一早上第一件事处理',
          'zh-TW': '看到消息，週一早上第一件事處理',
          vi: 'Xem tin nhắn và xử lý sớm vào sáng thứ Hai',
          id: 'Cek pesannya dan langsung urus paling awal hari Senin',
        },
        0
      ),
      opt(
        {
          ko: '읽었지만 주말이라 일단 무시한다. 월요일에 봤다고 한다',
          en: "Read it but ignore it for now since it's the weekend. Say I saw it on Monday",
          ja: '読んだけど週末だから一旦無視する。月曜に見たと言う',
          'zh-CN': '看了但因为是周末就先无视，等周一才说自己刚看到',
          'zh-TW': '看了但因為是週末就先無視，等週一才說自己剛看到',
          vi: 'Đã đọc nhưng vì là cuối tuần nên tạm bơ. Đến thứ Hai nói là mới thấy',
          id: 'Sudah dibaca tapi karena weekend jadi diabaikan dulu. Bilangnya baru lihat hari Senin',
        },
        1
      ),
      opt(
        {
          ko: '"확인했습니다. 월요일에 처리하겠습니다"라고 답한다',
          en: 'Reply, "Noted. I\'ll take care of it on Monday"',
          ja: '「確認しました。月曜に対応します」と返信する',
          'zh-CN': '回复"已看到，周一会处理"',
          'zh-TW': '回覆「已看到，週一會處理」',
          vi: 'Trả lời "Em đã xem rồi. Thứ Hai em sẽ xử lý"',
          id: 'Balas "Sudah dicek. Akan saya urus hari Senin"',
        },
        2
      ),
      opt(
        {
          ko: '읽씹하고 월요일에 "주말에 연락이 왔었군요"라고 시치미를 뗀다',
          en: 'Read but don\'t reply, then on Monday act innocent and say, "Oh, you messaged over the weekend"',
          ja: '既読無視して、月曜に「週末に連絡来てたんですね」と知らんぷりする',
          'zh-CN': '已读不回，周一才装傻说"原来周末有联系我啊"',
          'zh-TW': '已讀不回，週一才裝傻說「原來週末有聯絡我啊」',
          vi: 'Xem rồi nhưng lơ đi, đến thứ Hai giả bộ ngơ ngác "À, cuối tuần có nhắn tin ạ"',
          id: 'Dibaca tapi nggak dibalas, terus hari Senin pura-pura kaget "Oh ternyata ada pesan waktu weekend ya"',
        },
        3
      ),
    ],
  },
  {
    id: 8,
    question: L({
      ko: '상황: 회의에서 내 아이디어가 채택되지 않았다. 결국 다른 안으로 진행됐다. 나는?',
      en: "Situation: My idea wasn't chosen in the meeting. It ended up going with a different plan. I...",
      ja: '状況：会議で自分のアイデアが採用されなかった。結局別の案で進行することになった。私は？',
      'zh-CN': '情况：会议上我的想法没被采纳，最后用了别的方案。我会：',
      'zh-TW': '情況：會議上我的想法沒被採納，最後用了別的方案。我會：',
      vi: 'Tình huống: Ý tưởng của tôi không được chọn trong buổi họp. Cuối cùng phương án khác được thực hiện. Tôi sẽ...',
      id: 'Situasi: Idemu nggak dipilih di rapat. Akhirnya pakai rencana lain. Aku...',
    }),
    options: [
      opt(
        {
          ko: '아쉽지만 팀 결정을 따른다. 더 잘 준비하자고 다짐한다',
          en: "Feel disappointed but go along with the team's decision. Resolve to prepare better next time",
          ja: '残念だけどチームの決定に従う。もっと準備を頑張ろうと心に決める',
          'zh-CN': '有点遗憾但服从团队决定，暗自下决心下次要准备得更好',
          'zh-TW': '有點遺憾但服從團隊決定，暗自下決心下次要準備得更好',
          vi: 'Có chút tiếc nhưng vẫn tuân theo quyết định của team. Tự nhắc mình chuẩn bị kỹ hơn lần sau',
          id: 'Agak kecewa tapi ikuti keputusan tim. Berjanji pada diri sendiri buat siap lebih baik lagi',
        },
        0
      ),
      opt(
        {
          ko: '내색은 안 하지만 회의 내내 표정이 굳어있다',
          en: 'Don\'t show it outwardly, but my face stays stiff for the rest of the meeting',
          ja: '顔には出さないけど会議中ずっと表情が固まっている',
          'zh-CN': '表面不表现出来，但整场会议表情都很僵硬',
          'zh-TW': '表面不表現出來，但整場會議表情都很僵硬',
          vi: 'Không thể hiện ra nhưng suốt buổi họp mặt mày căng cứng',
          id: 'Nggak diperlihatkan tapi sepanjang rapat muka udah kaku',
        },
        1
      ),
      opt(
        {
          ko: '회의 끝나고 친한 동료한테 "그 안 별로 아니야?"라고 속닥인다',
          en: 'After the meeting, whisper to a close coworker, "That plan isn\'t great, right?"',
          ja: '会議が終わってから親しい同僚に「あの案、微妙じゃない？」とささやく',
          'zh-CN': '会议结束后跟熟悉的同事偷偷说"那个方案不太行吧？"',
          'zh-TW': '會議結束後跟熟悉的同事偷偷說「那個方案不太行吧？」',
          vi: 'Sau buổi họp, thì thầm với đồng nghiệp thân "Phương án đó không hay lắm nhỉ?"',
          id: 'Setelah rapat, bisik-bisik ke rekan dekat "Rencana itu kurang bagus ya kan?"',
        },
        2
      ),
      opt(
        {
          ko: '그 안이 실패하길 속으로 바라면서 진행 상황을 흥미롭게 지켜본다',
          en: 'Secretly hope that plan fails while watching its progress with keen interest',
          ja: 'その案が失敗することを心の中で願いながら、進行状況を興味深く見守る',
          'zh-CN': '心里默默希望那个方案失败，津津有味地关注进展',
          'zh-TW': '心裡默默希望那個方案失敗，津津有味地關注進展',
          vi: 'Thầm mong phương án đó thất bại và theo dõi tiến độ với vẻ hào hứng',
          id: 'Diam-diam berharap rencana itu gagal sambil mengamati perkembangannya dengan penuh minat',
        },
        3
      ),
    ],
  },
  {
    id: 9,
    question: L({
      ko: '상황: 공용 프린터 종이가 다 떨어졌다. 내가 제일 먼저 발견했다. 나는?',
      en: "Situation: The shared printer is out of paper. I'm the first one to notice. I...",
      ja: '状況：共用プリンターの用紙が切れた。自分が一番最初に気づいた。私は？',
      'zh-CN': '情况：公共打印机没纸了，我是第一个发现的。我会：',
      'zh-TW': '情況：公共印表機沒紙了，我是第一個發現的。我會：',
      vi: 'Tình huống: Máy in chung hết giấy. Tôi là người phát hiện đầu tiên. Tôi sẽ...',
      id: 'Situasi: Printer bersama kehabisan kertas. Aku yang pertama nyadar. Aku...',
    }),
    options: [
      opt(
        {
          ko: '종이를 채워 넣는다. 당연한 거 아닌가',
          en: "Refill the paper myself. Isn't that just common sense?",
          ja: '用紙を補充する。当然のことじゃない？',
          'zh-CN': '自己把纸补上，这不是理所当然的吗',
          'zh-TW': '自己把紙補上，這不是理所當然的嗎',
          vi: 'Tự mình bổ sung giấy vào. Chuyện đó là đương nhiên chứ',
          id: 'Isi ulang kertasnya sendiri. Itu kan hal yang wajar',
        },
        0
      ),
      opt(
        {
          ko: '총무팀에 알린다. 내가 채우는 건 아니고',
          en: "Let the admin team know. Refilling it isn't really my job",
          ja: '総務チームに知らせる。自分が補充するわけじゃないし',
          'zh-CN': '告诉总务部门，反正补纸不是我该做的',
          'zh-TW': '告訴總務部門，反正補紙不是我該做的',
          vi: 'Báo cho phòng hành chính. Chứ việc bổ sung giấy không phải của mình',
          id: 'Kasih tahu tim GA. Kan bukan aku yang harus isi ulang',
        },
        1
      ),
      opt(
        {
          ko: '보고서 출력이 급해서 일단 내 것만 출력하고 그냥 둔다',
          en: 'Since I urgently need to print my report, I just print mine and leave it as is',
          ja: '報告書の出力が急ぎだから、まず自分のだけ出力してそのまま放置する',
          'zh-CN': '因为报告要急着打印，先印自己的就不管了',
          'zh-TW': '因為報告要急著印，先印自己的就不管了',
          vi: 'Vì cần in báo cáo gấp nên tôi chỉ in phần của mình rồi để đó',
          id: 'Karena laporanku mendesak dicetak, aku cetak punyaku dulu terus dibiarin aja',
        },
        2
      ),
      opt(
        {
          ko: '못 본 척하고 자리로 돌아간다. 내가 쓴 것도 아닌데',
          en: "Pretend not to notice and go back to my desk. It's not like I used it all",
          ja: '見なかったことにして席に戻る。自分が使ったわけでもないし',
          'zh-CN': '假装没看到直接回座位，反正也不是我用完的',
          'zh-TW': '假裝沒看到直接回座位，反正也不是我用完的',
          vi: 'Giả vờ không thấy và quay về chỗ ngồi. Đâu phải tôi dùng hết mà',
          id: 'Pura-pura nggak lihat dan balik ke meja. Kan bukan aku yang habisin',
        },
        3
      ),
    ],
  },
  {
    id: 10,
    question: L({
      ko: '상황: 팀 회식 장소를 정하는데 내가 싫어하는 음식이 압도적 다수결로 정해졌다. 나는?',
      en: 'Situation: When deciding on a team dinner spot, a food I dislike wins by an overwhelming majority vote. I...',
      ja: '状況：チームの会食場所を決めるとき、自分が嫌いな料理が圧倒的多数決で決まった。私は？',
      'zh-CN': '情况：决定团队聚餐地点时，我不喜欢的食物以压倒性票数被选中。我会：',
      'zh-TW': '情況：決定團隊聚餐地點時，我不喜歡的食物以壓倒性票數被選中。我會：',
      vi: 'Tình huống: Khi chọn địa điểm ăn tối cả team, món tôi ghét được chọn với số phiếu áp đảo. Tôi sẽ...',
      id: 'Situasi: Saat menentukan tempat makan bersama tim, makanan yang aku nggak suka menang dengan suara mayoritas. Aku...',
    }),
    options: [
      opt(
        {
          ko: '그냥 간다. 회식은 음식보다 자리가 중요하다',
          en: 'Just go along. For team dinners, the gathering matters more than the food',
          ja: 'そのまま行く。会食は料理よりも場が大事',
          'zh-CN': '就去吧，聚餐重要的是氛围而不是吃什么',
          'zh-TW': '就去吧，聚餐重要的是氛圍而不是吃什麼',
          vi: 'Cứ đi thôi. Ăn tối cả team quan trọng là không khí hơn là món ăn',
          id: 'Tetap ikut aja. Acara makan bareng itu lebih soal kebersamaan daripada makanannya',
        },
        0
      ),
      opt(
        {
          ko: '조용히 먹고 싶은 거 따로 시킨다',
          en: 'Quietly order something else I actually want to eat',
          ja: '静かに自分の食べたいものを別に注文する',
          'zh-CN': '悄悄另外点自己想吃的东西',
          'zh-TW': '悄悄另外點自己想吃的東西',
          vi: 'Lặng lẽ gọi riêng món mình muốn ăn',
          id: 'Diam-diam pesan menu lain yang aku pengen makan',
        },
        1
      ),
      opt(
        {
          ko: '"저 거기 음식 못 먹어요"라고 밝히고 장소 변경을 요청한다',
          en: 'Speak up, "I can\'t eat that food," and ask to change the location',
          ja: '「そこの料理、食べられません」と伝えて場所変更を要求する',
          'zh-CN': '直接说"那家的食物我吃不了"，要求换地方',
          'zh-TW': '直接說「那家的食物我吃不了」，要求換地方',
          vi: 'Nói rõ "Tôi không ăn được món đó" và yêu cầu đổi địa điểm',
          id: 'Bilang terus terang "Aku nggak bisa makan makanan itu" dan minta ganti tempat',
        },
        2
      ),
      opt(
        {
          ko: '당일에 "몸이 안 좋아서"라고 하고 빠진 다음 그 시간에 혼자 맛집 간다',
          en: 'On the day, say "I\'m not feeling well" to skip out, then go to a nice restaurant alone at that exact time',
          ja: '当日「体調が悪くて」と言って抜け出し、その時間に一人でおいしい店に行く',
          'zh-CN': '当天说"身体不舒服"请假不去，然后那个时间自己一个人跑去吃好吃的',
          'zh-TW': '當天說「身體不舒服」請假不去，然後那個時間自己一個人跑去吃好吃的',
          vi: 'Đúng ngày đó nói "Tôi không khỏe" để trốn, rồi giờ đó tự mình đi ăn quán ngon một mình',
          id: 'Pas harinya bilang "Badan lagi kurang enak" buat bolos, terus di waktu itu malah pergi sendiri ke tempat makan enak',
        },
        3
      ),
    ],
  },
  {
    id: 11,
    question: L({
      ko: '상황: 동료가 실수해서 내 업무에 영향이 생겼다. 팀장이 어떻게 됐냐고 물어봤다. 나는?',
      en: "Situation: A coworker's mistake affected my work. My team lead asks what happened. I...",
      ja: '状況：同僚のミスで自分の業務に影響が出た。チームリーダーが状況を聞いてきた。私は？',
      'zh-CN': '情况：同事出错影响了我的工作，组长问发生了什么。我会：',
      'zh-TW': '情況：同事出錯影響了我的工作，組長問發生了什麼。我會：',
      vi: 'Tình huống: Lỗi của đồng nghiệp ảnh hưởng đến công việc của tôi. Trưởng nhóm hỏi chuyện gì đã xảy ra. Tôi sẽ...',
      id: 'Situasi: Kesalahan rekan kerja berdampak ke kerjaanku. Team leader nanya apa yang terjadi. Aku...',
    }),
    options: [
      opt(
        {
          ko: '"제가 미처 확인을 못 했습니다. 바로 처리하겠습니다"라고 한다',
          en: 'Say, "I didn\'t manage to double-check it in time. I\'ll fix it right away"',
          ja: '「私が確認しきれませんでした。すぐに対応します」と言う',
          'zh-CN': '说"是我没检查到，我马上处理"',
          'zh-TW': '說「是我沒檢查到，我馬上處理」',
          vi: 'Nói "Em chưa kiểm tra kỹ. Em sẽ xử lý ngay"',
          id: 'Bilang "Saya belum sempat cek dengan teliti. Saya urus segera"',
        },
        0
      ),
      opt(
        {
          ko: '"○○님 쪽에서 먼저 처리되어야 하는 부분이라서요"라고 은근히 넘긴다',
          en: 'Deflect subtly, "Well, that part needed to be handled by [name] first, so..."',
          ja: '「○○さんの方が先に処理すべき部分でしたので」とやんわりかわす',
          'zh-CN': '含糊地推卸"这部分本来该○○先处理的"',
          'zh-TW': '含糊地推卸「這部分本來該○○先處理的」',
          vi: 'Lách nhẹ "Phần đó lẽ ra bên anh/chị ○○ phải xử lý trước ạ"',
          id: 'Ngeles pelan "Bagian itu sebenarnya harus diselesaikan sama [nama] dulu"',
        },
        1
      ),
      opt(
        {
          ko: '"○○님이 파일을 늦게 주셨어요"라고 정확하게 말한다',
          en: 'State it clearly, "[Name] sent me the file late"',
          ja: '「○○さんがファイルを遅く送ってきました」と正確に伝える',
          'zh-CN': '准确地说"是○○的文件给晚了"',
          'zh-TW': '準確地說「是○○的文件給晚了」',
          vi: 'Nói rõ ràng "Anh/chị ○○ gửi file muộn"',
          id: 'Bilang jelas "[Nama] terlambat kasih filenya"',
        },
        2
      ),
      opt(
        {
          ko: '"저도 ○○님한테 계속 물어봤는데 연락이 안 됐어요"라고 약간 과장해서 말한다',
          en: 'Say with a bit of exaggeration, "I kept asking [name] too, but I couldn\'t reach them"',
          ja: '「私も○○さんに何度も聞いたんですけど、連絡が取れなかったんです」と少し話を盛って言う',
          'zh-CN': '稍微夸张地说"我也一直在问○○，但联系不上"',
          'zh-TW': '稍微誇張地說「我也一直在問○○，但聯繫不上」',
          vi: 'Nói hơi phóng đại "Em cũng hỏi anh/chị ○○ liên tục mà không liên lạc được"',
          id: 'Ngomong agak dilebihin "Aku juga udah nanya terus ke [nama] tapi nggak dibalas-balas"',
        },
        3
      ),
    ],
  },
  {
    id: 12,
    question: L({
      ko: '상황: 이 테스트를 하면서 "맞는데 인정하기 싫다"는 항목이 있었나요?',
      en: 'Situation: While taking this test, was there an item that made you think, "That\'s true, but I don\'t want to admit it"?',
      ja: '状況：このテストを受けている間、「合ってるけど認めたくない」と思う項目はあった？',
      'zh-CN': '情况：做这个测试的过程中，有没有那种"说得对但不想承认"的选项？',
      'zh-TW': '情況：做這個測試的過程中，有沒有那種「說得對但不想承認」的選項？',
      vi: 'Tình huống: Trong khi làm bài test này, có mục nào khiến bạn nghĩ "Đúng nhưng không muốn nhận" không?',
      id: 'Situasi: Selama ngerjain tes ini, ada nggak bagian yang bikin kamu mikir "Bener sih tapi nggak mau ngaku"?',
    }),
    options: [
      opt(
        {
          ko: '없다. 나는 직장에서 꽤 괜찮은 사람이다',
          en: "No. I'm actually a pretty decent person at work",
          ja: 'ない。自分は職場でかなりまともな人間だ',
          'zh-CN': '没有。我在职场上算是相当不错的人',
          'zh-TW': '沒有。我在職場上算是相當不錯的人',
          vi: 'Không có. Tôi là người khá ổn ở nơi làm việc',
          id: 'Nggak ada. Aku orang yang cukup baik di kantor',
        },
        0
      ),
      opt(
        {
          ko: '한두 개 찔렸다. 그래도 심한 편은 아니다',
          en: "One or two hit a nerve. But it's not that bad overall",
          ja: '1つか2つ心に刺さった。それでもひどい方ではない',
          'zh-CN': '有一两个扎心了。但整体来说不算严重',
          'zh-TW': '有一兩個扎心了。但整體來說不算嚴重',
          vi: 'Có một hai cái làm tôi chột dạ. Nhưng nói chung không đến mức nghiêm trọng',
          id: 'Ada satu dua yang nusuk. Tapi secara keseluruhan nggak parah-parah amat',
        },
        1
      ),
      opt(
        {
          ko: '여러 개 찔렸다. 나 혹시 민폐 끼치고 있던 건가 싶다',
          en: "Several hit a nerve. I'm starting to wonder if I've been causing trouble for others",
          ja: 'いくつも心に刺さった。もしかして自分、迷惑かけてたのかもと思う',
          'zh-CN': '有好几个都扎心了。开始怀疑自己是不是一直在给别人添麻烦',
          'zh-TW': '有好幾個都扎心了。開始懷疑自己是不是一直在給別人添麻煩',
          vi: 'Nhiều cái làm tôi chột dạ. Bắt đầu nghĩ có lẽ mình đã gây rắc rối cho người khác',
          id: 'Banyak yang nusuk. Mulai kepikiran jangan-jangan aku emang sering ngerepotin orang',
        },
        2
      ),
      opt(
        {
          ko: '거의 다 찔렸다. 블라인드 목격담 주인공이 나일 수도 있겠다',
          en: 'Almost all of them hit a nerve. I might actually be the main character in a Blind sighting story',
          ja: 'ほぼ全部心に刺さった。ブラインドの目撃談の主人公は自分かもしれない',
          'zh-CN': '几乎每个都扎心了。Blind职场社区上的"目击帖"主角说不定就是我',
          'zh-TW': '幾乎每個都扎心了。Blind職場社群上的「目擊帖」主角說不定就是我',
          vi: 'Hầu như cái nào cũng làm tôi chột dạ. Có khi nhân vật chính trong bài đăng "tôi từng thấy" trên Blind là tôi',
          id: 'Hampir semuanya nusuk. Jangan-jangan aku beneran tokoh utama di cerita "pernah lihat" di Blind',
        },
        3
      ),
    ],
  },
];

export const phase3OfficeVillainProbabilityResults: Phase3OfficeVillainProbabilityResult[] = [
  {
    type: 'Type1',
    emoji: '😇',
    title: L({
      ko: '직장 성인군자 레벨, 회사 빌런 확률 1%',
      en: 'Workplace Saint Level, Office Villain Probability 1%',
      ja: '職場の聖人レベル、オフィス悪役確率1%',
      'zh-CN': '职场圣人级别，职场反派概率1%',
      'zh-TW': '職場聖人級別，職場反派機率1%',
      vi: 'Cấp độ thánh nhân công sở, xác suất trở thành vai phản diện công sở 1%',
      id: 'Level Orang Suci Kantor, Probabilitas Jadi Penjahat Kantor 1%',
    }),
    shortDescription: L({
      ko: '당신은 직장에서 민폐를 끼치지 않는 사람입니다. 팀장이 가장 아끼는 유형입니다.',
      en: "You're someone who never causes trouble at work. The type your team lead treasures most.",
      ja: 'あなたは職場で誰にも迷惑をかけない人です。チームリーダーが一番大切にするタイプです。',
      'zh-CN': '你是那种在职场上从不给人添麻烦的人，是组长最珍惜的类型。',
      'zh-TW': '你是那種在職場上從不給人添麻煩的人，是組長最珍惜的類型。',
      vi: 'Bạn là người không bao giờ gây rắc rối ở công sở. Kiểu người trưởng nhóm quý nhất.',
      id: 'Kamu adalah orang yang nggak pernah bikin masalah di kantor. Tipe yang paling disayang team leader.',
    }),
    description: L({
      ko: '회의 때 집중하고 공용 물건 아끼고 야근 요청에도 묵묵히 하고 동료 실수를 감싸주는 패턴입니다. 블라인드 목격담에 절대 등장하지 않을 유형입니다. 이 결과를 공유하면 동료들이 "그거 진짜야?" 할 것입니다.',
      en: 'You focus during meetings, take care of shared items, quietly comply with overtime requests, and cover for coworkers\' mistakes. You\'re the type who will never appear in a Blind sighting story. If you share this result, your coworkers will say, "Wait, is that for real?"',
      ja: '会議中は集中し、共用の物を大切に扱い、残業の要請にも黙って応じ、同僚のミスをかばうパターンです。ブラインドの目撃談には絶対に登場しないタイプ。この結果を共有すると、同僚たちは「それ本当？」と言うでしょう。',
      'zh-CN': '开会时专心，爱惜公共物品，被要求加班也默默照做，还会替同事的失误兜底。你是那种绝对不会出现在Blind职场社区"目击帖"里的类型。分享这个结果，同事们大概会说"这是真的吗？"',
      'zh-TW': '開會時專心，愛惜公共物品，被要求加班也默默照做，還會替同事的失誤扛下來。你是那種絕對不會出現在Blind職場社群「目擊帖」裡的類型。分享這個結果，同事們大概會說「這是真的嗎？」',
      vi: 'Bạn tập trung trong các buổi họp, giữ gìn đồ dùng chung, lặng lẽ làm thêm giờ khi được yêu cầu, và luôn che chở cho lỗi của đồng nghiệp. Bạn là kiểu người sẽ không bao giờ xuất hiện trong bài đăng "tôi từng thấy" trên Blind. Nếu chia sẻ kết quả này, đồng nghiệp chắc sẽ hỏi "Cái này có thật không đấy?"',
      id: 'Kamu fokus saat rapat, menjaga barang bersama, diam-diam nurut kalau diminta lembur, dan menutupi kesalahan rekan kerja. Kamu tipe yang nggak akan pernah muncul di cerita "pernah lihat" di Blind. Kalau kamu share hasil ini, rekan kerja pasti bakal bilang "Serius nih?"',
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
          ko: '👥 동료 평가',
          en: "👥 Coworker's Take",
          ja: '👥 同僚の評価',
          'zh-CN': '👥 同事评价',
          'zh-TW': '👥 同事評價',
          vi: '👥 Đánh giá của đồng nghiệp',
          id: '👥 Penilaian Rekan Kerja',
        },
        {
          ko: '"저 사람 일 잘하고 쪽 바르다"',
          en: '"That person is skilled and always does the right thing"',
          ja: '「あの人、仕事できるし、ちゃんとしてる」',
          'zh-CN': '"那个人工作能力强，为人也正派"',
          'zh-TW': '「那個人工作能力強，為人也正派」',
          vi: '"Người đó làm việc giỏi và rất đàng hoàng"',
          id: '"Orang itu kerjanya bagus dan lurus banget"',
        }
      ),
      section(
        {
          ko: '👔 팀장 평가',
          en: "👔 Team Lead's Take",
          ja: '👔 チームリーダーの評価',
          'zh-CN': '👔 组长评价',
          'zh-TW': '👔 組長評價',
          vi: '👔 Đánh giá của trưởng nhóm',
          id: '👔 Penilaian Team Leader',
        },
        {
          ko: '"이런 사람이 더 있으면 좋겠다"',
          en: '"I wish we had more people like this"',
          ja: '「こういう人がもっといてほしい」',
          'zh-CN': '"要是能多几个这样的人就好了"',
          'zh-TW': '「要是能多幾個這樣的人就好了」',
          vi: '"Mong có nhiều người như vậy hơn"',
          id: '"Semoga ada lebih banyak orang seperti ini"',
        }
      ),
      section(
        {
          ko: '⚠️ 단 하나의 위험',
          en: '⚠️ The One Risk',
          ja: '⚠️ たった一つのリスク',
          'zh-CN': '⚠️ 唯一的风险',
          'zh-TW': '⚠️ 唯一的風險',
          vi: '⚠️ Rủi ro duy nhất',
          id: '⚠️ Satu-satunya Risiko',
        },
        {
          ko: '1%는 스트레스가 극에 달했을 때. 그날 조심하세요',
          en: 'That 1% shows up when stress hits its peak. Watch out on those days',
          ja: 'その1%はストレスが極限に達したとき。その日は気をつけて',
          'zh-CN': '那1%会在压力达到极限时出现，那天要小心一点',
          'zh-TW': '那1%會在壓力達到極限時出現，那天要小心一點',
          vi: '1% đó xuất hiện khi áp lực lên đến cực điểm. Hãy cẩn thận vào ngày đó',
          id: '1% itu muncul saat stres sudah di titik puncak. Hati-hati di hari itu',
        }
      ),
    ],
    shareMessage: L({
      ko: '회사 빌런 확률: 1% 😇 직장 성인군자 레벨이래... 동료들이 안 믿을 것 같음 ㅋㅋ → 너는 몇 % 나왔어? 블라인드에 공유해봐',
      en: "Office villain probability: 1% 😇 Apparently I'm at workplace saint level... my coworkers probably won't believe it lol → What % did you get? Share it on Blind",
      ja: 'オフィス悪役確率：1% 😇 職場の聖人レベルらしい…同僚は信じてくれなさそう笑 → あなたは何%だった？ブラインドで共有してみて',
      'zh-CN': '职场反派概率：1% 😇 说是职场圣人级别...同事们估计不会信哈哈 → 你测出来是多少%？发到Blind上分享一下',
      'zh-TW': '職場反派機率：1% 😇 說是職場聖人級別...同事們大概不會信哈哈 → 你測出來是多少%？發到Blind上分享一下',
      vi: 'Xác suất vai phản diện công sở: 1% 😇 Nghe bảo là cấp độ thánh nhân công sở... đồng nghiệp chắc không tin đâu haha → Bạn ra bao nhiêu %? Chia sẻ lên Blind xem',
      id: 'Probabilitas penjahat kantor: 1% 😇 Katanya level orang suci kantor... rekan kerja pasti nggak percaya wkwk → Kamu dapet berapa %? Share di Blind yuk',
    }),
  },
  {
    type: 'Type2',
    emoji: '😅',
    title: L({
      ko: '빌런 기질 있지만 참는, 잠재 빌런 5%',
      en: 'Has Villain Tendencies but Holds Back, Latent Villain 5%',
      ja: '悪役の素質はあるけど我慢する、潜在悪役5%',
      'zh-CN': '有反派潜质但会忍住，潜在反派5%',
      'zh-TW': '有反派潛質但會忍住，潛在反派5%',
      vi: 'Có tố chất phản diện nhưng biết kiềm chế, phản diện tiềm ẩn 5%',
      id: 'Punya Bakat Jahat tapi Ditahan, Penjahat Terpendam 5%',
    }),
    shortDescription: L({
      ko: '나쁜 짓은 안 하는데 속으로는 꽤 많은 생각을 하는 사람입니다.',
      en: "You don't actually do anything bad, but you have quite a lot going on inside your head.",
      ja: '悪いことはしないけど、心の中ではかなりいろいろ考えている人です。',
      'zh-CN': '不做坏事，但心里想的东西可不少。',
      'zh-TW': '不做壞事，但心裡想的東西可不少。',
      vi: 'Bạn không làm gì xấu, nhưng trong đầu lại nghĩ khá nhiều thứ.',
      id: 'Kamu nggak melakukan hal buruk, tapi di dalam kepala mikirnya banyak banget.',
    }),
    description: L({
      ko: '겉으로는 모범이지만 회의 중 속으로 욕하거나 냉장고 음식을 뚫어지게 바라보거나 단톡방 메시지를 읽고 잠깐 고민하는 패턴이 있습니다. 아직 빌런은 아닙니다. 하지만 스트레스가 쌓이면 언젠가 터질 수 있습니다.',
      en: "You look like a model employee on the outside, but you curse inside during meetings, stare longingly at fridge food, and hesitate for a moment after reading group chat messages. You're not a villain yet. But if stress builds up, it could all blow up someday.",
      ja: '表面上は模範的だけど、会議中は心の中で舌打ちしたり、冷蔵庫の食べ物をじっと見つめたり、グループチャットのメッセージを読んで少し悩んだりするパターンがあります。まだ悪役ではありません。でもストレスが積もるといつか爆発するかもしれません。',
      'zh-CN': '表面上是模范员工，但会议中在心里骂人，盯着冰箱食物看，读群消息后犹豫一下要不要回。还不算反派，但压力积累久了，说不定哪天就爆发了。',
      'zh-TW': '表面上是模範員工，但會議中在心裡罵人，盯著冰箱食物看，讀群訊息後猶豫一下要不要回。還不算反派，但壓力累積久了，說不定哪天就爆發了。',
      vi: 'Bề ngoài là nhân viên mẫu mực nhưng trong lòng chửi thầm khi họp, nhìn chằm chằm đồ ăn trong tủ lạnh, hoặc đọc tin nhắn nhóm rồi lăn tăn một lúc. Chưa phải phản diện. Nhưng nếu áp lực tích tụ, một ngày nào đó có thể bùng nổ.',
      id: 'Kelihatannya karyawan teladan, tapi ngedumel dalam hati saat rapat, natap makanan di kulkas lama-lama, atau baca chat grup lalu galau sebentar. Belum jadi penjahat sih. Tapi kalau stres numpuk, bisa aja meledak suatu hari.',
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
          ko: '👥 동료 평가',
          en: "👥 Coworker's Take",
          ja: '👥 同僚の評価',
          'zh-CN': '👥 同事评价',
          'zh-TW': '👥 同事評價',
          vi: '👥 Đánh giá của đồng nghiệp',
          id: '👥 Penilaian Rekan Kerja',
        },
        {
          ko: '"착한데 가끔 표정에서 뭔가 느껴짐"',
          en: '"Nice, but sometimes you can tell something\'s up from their face"',
          ja: '「優しいけど、時々表情から何か感じる」',
          'zh-CN': '"人挺好，但有时表情有点微妙"',
          'zh-TW': '「人挺好，但有時表情有點微妙」',
          vi: '"Tốt bụng nhưng thỉnh thoảng nhìn mặt có gì đó"',
          id: '"Baik sih, tapi kadang dari mukanya kelihatan ada sesuatu"',
        }
      ),
      section(
        {
          ko: '👔 팀장 평가',
          en: "👔 Team Lead's Take",
          ja: '👔 チームリーダーの評価',
          'zh-CN': '👔 组长评价',
          'zh-TW': '👔 組長評價',
          vi: '👔 Đánh giá của trưởng nhóm',
          id: '👔 Penilaian Team Leader',
        },
        {
          ko: '"믿을 만한 직원"',
          en: '"A trustworthy employee"',
          ja: '「信頼できる社員」',
          'zh-CN': '"值得信赖的员工"',
          'zh-TW': '「值得信賴的員工」',
          vi: '"Nhân viên đáng tin cậy"',
          id: '"Karyawan yang bisa dipercaya"',
        }
      ),
      section(
        {
          ko: '⚡ 잠재 빌런 발동 조건',
          en: '⚡ Latent Villain Trigger Condition',
          ja: '⚡ 潜在悪役発動条件',
          'zh-CN': '⚡ 潜在反派触发条件',
          'zh-TW': '⚡ 潛在反派觸發條件',
          vi: '⚡ Điều kiện kích hoạt phản diện tiềm ẩn',
          id: '⚡ Kondisi Pemicu Penjahat Terpendam',
        },
        {
          ko: '야근 3일 연속 또는 커피 못 마신 월요일 오전',
          en: 'Three straight days of overtime, or a Monday morning without coffee',
          ja: '残業3日連続、またはコーヒーを飲めなかった月曜の朝',
          'zh-CN': '连续加班3天，或没喝到咖啡的周一早上',
          'zh-TW': '連續加班3天，或沒喝到咖啡的週一早上',
          vi: 'Làm thêm giờ 3 ngày liên tiếp, hoặc sáng thứ Hai không có cà phê',
          id: 'Lembur 3 hari berturut-turut, atau Senin pagi tanpa kopi',
        }
      ),
    ],
    shareMessage: L({
      ko: '회사 빌런 확률: 5% 😅 겉으론 모범인데 속으론 꽤 많은 생각 하는 유형... 냉장고 음식 뚫어지게 바라본 거 들켰음 ㅋㅋ → 너는 몇 % 나왔어?',
      en: 'Office villain probability: 5% 😅 Model employee on the outside, but a lot going on inside... got caught staring at fridge food lol → What % did you get?',
      ja: 'オフィス悪役確率：5% 😅 表は模範なのに内心はいろいろ考えてるタイプ…冷蔵庫の食べ物を見つめてたのバレた笑 → あなたは何%だった？',
      'zh-CN': '职场反派概率：5% 😅 表面模范内心戏超多的类型...盯着冰箱食物看被发现了哈哈 → 你测出来是多少%？',
      'zh-TW': '職場反派機率：5% 😅 表面模範內心戲超多的類型...盯著冰箱食物看被發現了哈哈 → 你測出來是多少%？',
      vi: 'Xác suất vai phản diện công sở: 5% 😅 Bên ngoài mẫu mực nhưng trong lòng nghĩ đủ thứ... bị bắt gặp nhìn chằm chằm đồ ăn trong tủ lạnh haha → Bạn ra bao nhiêu %?',
      id: 'Probabilitas penjahat kantor: 5% 😅 Kelihatan teladan tapi dalamnya mikir banyak banget... ketangkep basah natap makanan di kulkas wkwk → Kamu dapet berapa %?',
    }),
  },
  {
    type: 'Type3',
    emoji: '🙃',
    title: L({
      ko: '무의식 빌런, 본인만 모르는 15%',
      en: "Unconscious Villain, The 15% Only You Don't Notice",
      ja: '無意識の悪役、自分だけが知らない15%',
      'zh-CN': '无意识反派，只有自己不知道的15%',
      'zh-TW': '無意識反派，只有自己不知道的15%',
      vi: 'Phản diện vô thức, 15% mà chỉ có bạn không nhận ra',
      id: 'Penjahat Tanpa Sadar, 15% yang Hanya Kamu Nggak Ngerti',
    }),
    shortDescription: L({
      ko: '나쁜 의도는 없는데 주변 동료들은 이미 알고 있습니다.',
      en: 'You have no bad intentions, but the coworkers around you already know.',
      ja: '悪意はないけど、周りの同僚はすでに気づいています。',
      'zh-CN': '没有坏心眼，但周围同事已经心知肚明。',
      'zh-TW': '沒有壞心眼，但周圍同事已經心知肚明。',
      vi: 'Không có ý xấu, nhưng đồng nghiệp xung quanh đã biết cả rồi.',
      id: 'Nggak ada niat jahat, tapi rekan kerja di sekitar udah pada tahu.',
    }),
    description: L({
      ko: '이름 없는 냉장고 음식에 손이 가거나 못 들은 척 전화를 피하거나 회의 끝나고 친한 동료한테 뒷담화를 살짝 하는 패턴이 반복됩니다. 블라인드 목격담에 조연으로 등장할 가능성이 있습니다.',
      en: "You keep reaching for unnamed fridge food, dodging phone calls by pretending not to hear them, and slipping in a bit of gossip with a close coworker after meetings. There's a chance you'll show up as a supporting character in a Blind sighting story.",
      ja: '名前のない冷蔵庫の食べ物に手を出したり、聞こえないふりをして電話を避けたり、会議後に親しい同僚にちょっと悪口を言うパターンが繰り返されます。ブラインドの目撃談に脇役として登場する可能性があります。',
      'zh-CN': '总是伸手拿没写名字的冰箱食品，装听不到躲电话，会议结束后跟熟悉的同事悄悄说点闲话。有可能会以配角身份出现在Blind职场社区的"目击帖"里。',
      'zh-TW': '總是伸手拿沒寫名字的冰箱食品，裝聽不到躲電話，會議結束後跟熟悉的同事悄悄說點閒話。有可能會以配角身份出現在Blind職場社群的「目擊帖」裡。',
      vi: 'Bạn cứ đưa tay lấy đồ ăn không ghi tên trong tủ lạnh, giả vờ không nghe thấy để tránh điện thoại, và hay buôn chuyện nhẹ với đồng nghiệp thân sau các buổi họp. Có khả năng bạn sẽ xuất hiện với vai phụ trong một bài đăng "tôi từng thấy" trên Blind.',
      id: 'Kamu sering nyomot makanan di kulkas yang nggak ada namanya, pura-pura nggak denger buat ngindarin telepon, dan suka ngomongin sedikit gosip ke rekan dekat setelah rapat. Ada kemungkinan kamu muncul sebagai peran pendukung di cerita "pernah lihat" di Blind.',
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
          ko: '👥 동료 평가',
          en: "👥 Coworker's Take",
          ja: '👥 同僚の評価',
          'zh-CN': '👥 同事评价',
          'zh-TW': '👥 同事評價',
          vi: '👥 Đánh giá của đồng nghiệp',
          id: '👥 Penilaian Rekan Kerja',
        },
        {
          ko: '"괜찮은데 가끔 이해 안 되는 행동을 함"',
          en: '"They\'re fine, but sometimes do things that don\'t quite make sense"',
          ja: '「悪くはないけど、時々理解できない行動をする」',
          'zh-CN': '"人还行，但有时会做一些让人无法理解的事"',
          'zh-TW': '「人還行，但有時會做一些讓人無法理解的事」',
          vi: '"Cũng được, nhưng đôi khi làm những việc khó hiểu"',
          id: '"Sebenarnya oke, tapi kadang ngelakuin hal yang bikin bingung"',
        }
      ),
      section(
        {
          ko: '👔 팀장 평가',
          en: "👔 Team Lead's Take",
          ja: '👔 チームリーダーの評価',
          'zh-CN': '👔 组长评价',
          'zh-TW': '👔 組長評價',
          vi: '👔 Đánh giá của trưởng nhóm',
          id: '👔 Penilaian Team Leader',
        },
        {
          ko: '"딱히 문제는 없는데..."',
          en: '"There\'s no real problem, but..."',
          ja: '「特に問題はないんだけど…」',
          'zh-CN': '"倒也没什么大问题，就是……"',
          'zh-TW': '「倒也沒什麼大問題，就是……」',
          vi: '"Cũng không có vấn đề gì lớn, nhưng mà..."',
          id: '"Sebenarnya nggak ada masalah sih, tapi..."',
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
          ko: '공용 전화 한 번 대신 받기. 그것만으로 이미지가 달라집니다',
          en: "Answer the shared phone once instead of someone else. That alone will change your image",
          ja: '共用電話を一度代わりに出てみる。それだけでイメージが変わります',
          'zh-CN': '主动帮忙接一次公用电话，光这个动作就能改变你的形象',
          'zh-TW': '主動幫忙接一次公用電話，光這個動作就能改變你的形象',
          vi: 'Thử trả lời điện thoại chung thay người khác một lần. Chỉ vậy thôi cũng đủ thay đổi hình ảnh của bạn',
          id: 'Coba angkat telepon bersama sekali aja. Cuma dengan itu image kamu bisa berubah',
        }
      ),
    ],
    shareMessage: L({
      ko: '회사 빌런 확률: 15% 🙃 본인만 모르는 무의식 빌런이래... 블라인드 목격담 조연 가능성 있다는 거 뜨끔 → 너는 몇 % 나왔어?',
      en: "Office villain probability: 15% 🙃 Apparently I'm an unconscious villain that only I don't notice... ouch, apparently I could be a supporting character in a Blind sighting story → What % did you get?",
      ja: 'オフィス悪役確率：15% 🙃 自分だけ知らない無意識の悪役らしい…ブラインドの目撃談に脇役出演の可能性があるって地味に刺さる → あなたは何%だった？',
      'zh-CN': '职场反派概率：15% 🙃 说是只有自己不知道的无意识反派...有可能变成Blind目击帖配角这点有点扎心 → 你测出来是多少%？',
      'zh-TW': '職場反派機率：15% 🙃 說是只有自己不知道的無意識反派...有可能變成Blind目擊帖配角這點有點扎心 → 你測出來是多少%？',
      vi: 'Xác suất vai phản diện công sở: 15% 🙃 Nghe bảo là phản diện vô thức mà chỉ mình không biết... nghe bảo có thể làm vai phụ trong bài đăng trên Blind thấy chột dạ thật → Bạn ra bao nhiêu %?',
      id: 'Probabilitas penjahat kantor: 15% 🙃 Katanya penjahat tanpa sadar yang cuma diri sendiri yang nggak ngerti... denger ada kemungkinan jadi peran pendukung di cerita Blind bikin agak nyesek → Kamu dapet berapa %?',
    }),
  },
  {
    type: 'Type4',
    emoji: '😤',
    title: L({
      ko: '전형적인 직장 빌런, 확률 35%',
      en: 'A Textbook Office Villain, Probability 35%',
      ja: '典型的なオフィス悪役、確率35%',
      'zh-CN': '典型职场反派，概率35%',
      'zh-TW': '典型職場反派，機率35%',
      vi: 'Vai phản diện công sở điển hình, xác suất 35%',
      id: 'Penjahat Kantor Klasik, Probabilitas 35%',
    }),
    shortDescription: L({
      ko: '이 정도면 팀 단톡방에서 누군가 이미 당신 이야기를 한 적 있을 것입니다.',
      en: "At this level, someone in the team group chat has probably already talked about you.",
      ja: 'このレベルなら、チームのグループチャットで誰かがすでにあなたの話をしたことがあるはずです。',
      'zh-CN': '到这个程度，团队群里应该已经有人聊过你的事了。',
      'zh-TW': '到這個程度，團隊群裡應該已經有人聊過你的事了。',
      vi: 'Ở mức này, chắc đã có ai đó trong nhóm chat team nói về bạn rồi.',
      id: 'Di level ini, kemungkinan udah ada yang ngomongin kamu di grup chat tim.',
    }),
    description: L({
      ko: '퇴근 직전 업무 처리 거부, 실수를 남한테 넘기기, 회의실 무단 점거, 단톡방 읽씹 등 전형적인 직장 빌런 행동들이 습관화돼 있는 레벨입니다. 블라인드 목격담의 주인공이 될 가능성이 있습니다.',
      en: 'Refusing work right before clocking out, passing blame to others, hogging meeting rooms without booking them, ghosting the group chat — these classic office villain behaviors have become habits at this level. There\'s a real chance you\'ll become the main character in a Blind sighting story.',
      ja: '退勤直前の業務拒否、ミスを他人に押し付ける、無断で会議室を占拠する、グループチャット既読無視など、典型的なオフィス悪役行動が習慣化しているレベルです。ブラインドの目撃談の主人公になる可能性があります。',
      'zh-CN': '下班前拒绝接活儿、把失误推给别人、擅自占用会议室、群消息已读不回，这些典型职场反派行为已经成为习惯的程度。有可能成为Blind职场社区"目击帖"的主角。',
      'zh-TW': '下班前拒絕接活兒、把失誤推給別人、擅自占用會議室、群訊息已讀不回，這些典型職場反派行為已經成為習慣的程度。有可能成為Blind職場社群「目擊帖」的主角。',
      vi: 'Từ chối nhận việc ngay trước khi tan làm, đổ lỗi cho người khác, chiếm phòng họp không đặt trước, xem tin nhắn nhóm rồi lơ đi — những hành vi phản diện công sở điển hình này đã trở thành thói quen ở mức độ này. Có khả năng bạn sẽ trở thành nhân vật chính trong bài đăng "tôi từng thấy" trên Blind.',
      id: 'Menolak kerjaan pas mau pulang, ngelemparin kesalahan ke orang lain, nyerobot ruang meeting tanpa booking, chat grup dibaca tapi diabaikan — perilaku penjahat kantor klasik ini udah jadi kebiasaan di level ini. Ada kemungkinan kamu jadi tokoh utama di cerita "pernah lihat" di Blind.',
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
          ko: '👥 동료 평가',
          en: "👥 Coworker's Take",
          ja: '👥 同僚の評価',
          'zh-CN': '👥 同事评价',
          'zh-TW': '👥 同事評價',
          vi: '👥 Đánh giá của đồng nghiệp',
          id: '👥 Penilaian Rekan Kerja',
        },
        {
          ko: '"같이 일하면 좀 피곤한 사람"',
          en: '"Someone who\'s a bit tiring to work with"',
          ja: '「一緒に働くとちょっと疲れる人」',
          'zh-CN': '"跟他一起工作有点累"',
          'zh-TW': '「跟他一起工作有點累」',
          vi: '"Làm việc cùng thì hơi mệt"',
          id: '"Kalau kerja bareng agak bikin capek"',
        }
      ),
      section(
        {
          ko: '👔 팀장 평가',
          en: "👔 Team Lead's Take",
          ja: '👔 チームリーダーの評価',
          'zh-CN': '👔 组长评价',
          'zh-TW': '👔 組長評價',
          vi: '👔 Đánh giá của trưởng nhóm',
          id: '👔 Penilaian Team Leader',
        },
        {
          ko: '"실력은 있는데 태도가..."',
          en: '"They\'re skilled, but the attitude..."',
          ja: '「実力はあるけど態度が…」',
          'zh-CN': '"能力是有，但态度……"',
          'zh-TW': '「能力是有，但態度……」',
          vi: '"Năng lực có, nhưng thái độ thì..."',
          id: '"Skill-nya ada, tapi attitude-nya..."',
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
          ko: '딱 하나만 고치기. 동료 실수를 내 탓으로 돌리는 것 멈추기',
          en: "Fix just one thing: stop letting your coworkers' mistakes become your fault",
          ja: '一つだけ直す：同僚のミスを自分の責任にしてしまうのをやめる',
          'zh-CN': '只改一件事：别再让同事的失误变成自己的责任',
          'zh-TW': '只改一件事：別再讓同事的失誤變成自己的責任',
          vi: 'Chỉ cần sửa một điều: đừng để lỗi của đồng nghiệp biến thành lỗi của mình',
          id: 'Perbaiki satu hal aja: jangan biarkan kesalahan rekan kerja jadi kesalahanmu',
        }
      ),
    ],
    shareMessage: L({
      ko: '회사 빌런 확률: 35% 😤 팀 단톡방에서 내 이야기 한번쯤 나왔을 레벨이래... 인정은 함 ㅋㅋ → 직장 동료한테 태그해봐',
      en: "Office villain probability: 35% 😤 Apparently at this level, someone's brought me up in the team group chat at least once... gotta admit it lol → Tag a coworker",
      ja: 'オフィス悪役確率：35% 😤 チームのグループチャットで一度は自分の話が出てたレベルらしい…認めるしかない笑 → 同僚をタグしてみて',
      'zh-CN': '职场反派概率：35% 😤 说是团队群里肯定有人聊过我的级别...不得不承认哈哈 → 去标记一下同事吧',
      'zh-TW': '職場反派機率：35% 😤 說是團隊群裡肯定有人聊過我的等級...不得不承認哈哈 → 去標記一下同事吧',
      vi: 'Xác suất vai phản diện công sở: 35% 😤 Nghe bảo ở mức này chắc đã có người nhắc tên mình trong nhóm chat team... đành công nhận thôi haha → Tag đồng nghiệp vào xem',
      id: 'Probabilitas penjahat kantor: 35% 😤 Katanya di level ini pasti udah pernah dibahas di grup chat tim... ya jujur aja sih wkwk → Tag rekan kerja yuk',
    }),
  },
  {
    type: 'Type5',
    emoji: '😈',
    title: L({
      ko: '블라인드 단골 주인공, 확률 65%',
      en: 'A Regular Star of Blind, Probability 65%',
      ja: 'ブラインド常連の主人公、確率65%',
      'zh-CN': 'Blind常客主角，概率65%',
      'zh-TW': 'Blind常客主角，機率65%',
      vi: 'Nhân vật chính quen thuộc trên Blind, xác suất 65%',
      id: 'Bintang Langganan di Blind, Probabilitas 65%',
    }),
    shortDescription: L({
      ko: '블라인드 직장인 게시판에 당신 관련 목격담이 올라왔을 가능성이 있습니다.',
      en: "There's a good chance a sighting story about you has already been posted on Blind's workplace board.",
      ja: 'ブラインドの職場ボードにあなたに関する目撃談が投稿されている可能性があります。',
      'zh-CN': '很有可能已经有关于你的目击帖发到了Blind职场社区。',
      'zh-TW': '很有可能已經有關於你的目擊帖發到了Blind職場社群。',
      vi: 'Rất có khả năng đã có bài đăng "tôi từng thấy" về bạn trên diễn đàn công sở của Blind.',
      id: 'Ada kemungkinan besar cerita "pernah lihat" tentang kamu udah diposting di forum kerja Blind.',
    }),
    description: L({
      ko: '공용 냉장고 음식 먹기, 회의 중 폰 보기, 실수 전가, 회식 날 도망가기, 프린터 종이 못 본 척 등 빌런 행동의 거의 모든 스펙트럼이 나타나는 레벨입니다. 당신 때문에 팀 분위기가 영향을 받고 있을 수 있습니다.',
      en: "Eating shared fridge food, checking your phone during meetings, shifting blame, ditching team dinners, ignoring the empty printer paper tray — nearly the entire spectrum of villain behavior shows up at this level. Your team's atmosphere might already be affected because of you.",
      ja: '共用冷蔵庫の食べ物を食べる、会議中にスマホを見る、ミスを押し付ける、会食の日に逃げる、プリンター用紙切れを見なかったふりをするなど、悪役行動のほぼ全てのスペクトラムが現れるレベルです。あなたのせいでチームの雰囲気に影響が出ているかもしれません。',
      'zh-CN': '吃公共冰箱食物、开会看手机、把失误推给别人、聚餐当天逃跑、假装没看到打印机没纸——几乎所有反派行为的光谱都出现在这个级别。团队氛围可能已经因为你受到了影响。',
      'zh-TW': '吃公共冰箱食物、開會看手機、把失誤推給別人、聚餐當天逃跑、假裝沒看到印表機沒紙——幾乎所有反派行為的光譜都出現在這個等級。團隊氛圍可能已經因為你受到了影響。',
      vi: 'Ăn đồ trong tủ lạnh chung, xem điện thoại trong lúc họp, đổ lỗi cho người khác, trốn tiệc team, giả vờ không thấy máy in hết giấy — hầu như toàn bộ các kiểu hành vi phản diện đều xuất hiện ở mức này. Không khí của team có thể đã bị ảnh hưởng vì bạn.',
      id: 'Makan makanan di kulkas bersama, main hp saat rapat, ngelemparin kesalahan, bolos acara makan bareng tim, pura-pura nggak lihat printer kehabisan kertas — hampir seluruh spektrum perilaku penjahat kantor muncul di level ini. Suasana tim mungkin sudah terpengaruh karena kamu.',
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
          ko: '👥 동료 평가',
          en: "👥 Coworker's Take",
          ja: '👥 同僚の評価',
          'zh-CN': '👥 同事评价',
          'zh-TW': '👥 同事評價',
          vi: '👥 Đánh giá của đồng nghiệp',
          id: '👥 Penilaian Rekan Kerja',
        },
        {
          ko: '"저 사람이랑 같은 팀이라는 게 힘들 때가 있음"',
          en: '"Sometimes it\'s rough being on the same team as that person"',
          ja: '「あの人と同じチームだということがつらいときがある」',
          'zh-CN': '"和那个人同组有时候挺累的"',
          'zh-TW': '「和那個人同組有時候挺累的」',
          vi: '"Có lúc thấy mệt vì cùng team với người đó"',
          id: '"Kadang capek juga satu tim sama orang itu"',
        }
      ),
      section(
        {
          ko: '👔 팀장 평가',
          en: "👔 Team Lead's Take",
          ja: '👔 チームリーダーの評価',
          'zh-CN': '👔 组长评价',
          'zh-TW': '👔 組長評價',
          vi: '👔 Đánh giá của trưởng nhóm',
          id: '👔 Penilaian Team Leader',
        },
        {
          ko: '"퇴근 후 팀장 모임에서 이야기 주제가 됐을 가능성 있음"',
          en: '"There\'s a chance this became a topic of conversation at a team lead gathering after hours"',
          ja: '「退勤後のリーダー会でこの人が話題になった可能性あり」',
          'zh-CN': '"下班后的组长聚会上可能已经聊到这个话题了"',
          'zh-TW': '「下班後的組長聚會上可能已經聊到這個話題了」',
          vi: '"Có khả năng đã thành chủ đề trong buổi họp mặt các trưởng nhóm sau giờ làm"',
          id: '"Ada kemungkinan udah jadi topik obrolan di kumpulan para team leader setelah jam kerja"',
        }
      ),
      section(
        {
          ko: '🚀 지금 당장',
          en: '🚀 Right Now',
          ja: '🚀 今すぐ',
          'zh-CN': '🚀 现在就行动',
          'zh-TW': '🚀 現在就行動',
          vi: '🚀 Ngay bây giờ',
          id: '🚀 Sekarang Juga',
        },
        {
          ko: '오늘 동료 한 명한테 "수고했어요" 한마디 건네기. 이미지 회복 시작',
          en: 'Tell one coworker "Great work today" — that\'s where image recovery begins',
          ja: '今日、同僚の一人に「お疲れさまでした」の一言をかけてみる。イメージ回復のスタート',
          'zh-CN': '今天对一位同事说一句"辛苦了"，形象修复就此开始',
          'zh-TW': '今天對一位同事說一句「辛苦了」，形象修復就此開始',
          vi: 'Hôm nay hãy nói với một đồng nghiệp câu "Bạn đã làm tốt lắm" — hình ảnh của bạn sẽ bắt đầu được cải thiện',
          id: 'Hari ini coba bilang "Kerja bagus ya" ke satu rekan kerja. Perbaikan image dimulai dari situ',
        }
      ),
    ],
    shareMessage: L({
      ko: '회사 빌런 확률: 65% 😈 블라인드 목격담 주인공 됐을 수도 있다는 거... 혹시 나 올라간 거 아닌가 ㅋㅋ → 너는 몇 % 나왔어? 블라인드에 뿌려봐',
      en: "Office villain probability: 65% 😈 Apparently I might've become a Blind sighting story character... wait, am I already up there lol → What % did you get? Spread it on Blind",
      ja: 'オフィス悪役確率：65% 😈 ブラインドの目撃談の主人公になっているかもって…もしかしてもう投稿されてる？笑 → あなたは何%だった？ブラインドで広めてみて',
      'zh-CN': '职场反派概率：65% 😈 说不定已经变成Blind目击帖的主角了...我是不是已经被发上去了哈哈 → 你测出来是多少%？发到Blind上试试',
      'zh-TW': '職場反派機率：65% 😈 說不定已經變成Blind目擊帖的主角了...我是不是已經被發上去了哈哈 → 你測出來是多少%？發到Blind上試試',
      vi: 'Xác suất vai phản diện công sở: 65% 😈 Nghe bảo có thể đã trở thành nhân vật chính trong bài đăng trên Blind... hay là mình đã bị đăng lên rồi haha → Bạn ra bao nhiêu %? Đăng lên Blind xem',
      id: 'Probabilitas penjahat kantor: 65% 😈 Katanya bisa aja udah jadi tokoh utama cerita di Blind... jangan-jangan aku udah keposting wkwk → Kamu dapet berapa %? Share di Blind yuk',
    }),
  },
  {
    type: 'Type6',
    emoji: '👹',
    title: L({
      ko: '회사 빌런 만렙, 확률 99%',
      en: 'Office Villain Max Level, Probability 99%',
      ja: 'オフィス悪役マックスレベル、確率99%',
      'zh-CN': '职场反派满级，概率99%',
      'zh-TW': '職場反派滿級，機率99%',
      vi: 'Vai phản diện công sở cấp độ tối đa, xác suất 99%',
      id: 'Penjahat Kantor Level Maksimal, Probabilitas 99%',
    }),
    shortDescription: L({
      ko: '당신은 직장 빌런 교과서입니다. 그리고 이걸 솔직하게 인정한 용기는 S급입니다.',
      en: "You're the textbook definition of an office villain. And the courage to admit it honestly is S-tier.",
      ja: 'あなたはオフィス悪役の教科書です。そしてそれを正直に認めた勇気はS級です。',
      'zh-CN': '你就是职场反派教科书本身，而能坦然承认这一点的勇气堪称S级。',
      'zh-TW': '你就是職場反派教科書本身，而能坦然承認這一點的勇氣堪稱S級。',
      vi: 'Bạn chính là sách giáo khoa về vai phản diện công sở. Và sự can đảm để thừa nhận điều này một cách thẳng thắn là hạng S.',
      id: 'Kamu adalah buku pelajaran penjahat kantor. Dan keberanian buat ngaku jujur soal ini itu level S.',
    }),
    description: L({
      ko: '가능한 모든 직장 빌런 행동을 경험하고 인정했습니다. 회의 중 폰, 냉장고 음식, 야근 거부, 실수 전가, 읽씹, 회식 도망까지. 나쁜 사람이 아닙니다. 그냥 직장 생활이 너무 힘든 사람일 수 있습니다. 그런데 주변도 힘듭니다.',
      en: "You've experienced and admitted to every possible office villain behavior — phone during meetings, fridge food, refusing overtime, shifting blame, ghosting messages, skipping out on dinners. You're not a bad person. You might just be someone whose work life has become too hard to bear. But the people around you are struggling too.",
      ja: '考えられるあらゆるオフィス悪役行動を経験し、認めました。会議中のスマホ、冷蔵庫の食べ物、残業拒否、ミスの押し付け、既読無視、会食からの逃亡まで。悪い人ではありません。ただ職場生活があまりにも大変な人なのかもしれません。でも周りもつらいです。',
      'zh-CN': '几乎所有能想到的职场反派行为你都经历过并承认了——开会看手机、吃冰箱食物、拒绝加班、把失误推给别人、已读不回、聚餐逃跑。你不是坏人，可能只是职场生活太辛苦了而已。但周围的人也很辛苦。',
      'zh-TW': '幾乎所有能想到的職場反派行為你都經歷過並承認了——開會看手機、吃冰箱食物、拒絕加班、把失誤推給別人、已讀不回、聚餐逃跑。你不是壞人，可能只是職場生活太辛苦了而已。但周圍的人也很辛苦。',
      vi: 'Bạn đã trải qua và thừa nhận hầu như mọi hành vi phản diện công sở có thể — dùng điện thoại trong họp, ăn đồ tủ lạnh, từ chối làm thêm giờ, đổ lỗi, xem tin nhắn rồi lơ đi, trốn tiệc team. Bạn không phải người xấu. Có thể bạn chỉ là người đang có cuộc sống công sở quá vất vả. Nhưng những người xung quanh cũng đang vất vả.',
      id: 'Kamu udah ngalamin dan ngaku semua perilaku penjahat kantor yang mungkin ada — main hp saat rapat, makan makanan kulkas, nolak lembur, ngelemparin kesalahan, chat dibaca tapi diabaikan, bolos acara makan bareng. Kamu bukan orang jahat. Mungkin cuma orang yang hidup kerjanya udah kelewat berat. Tapi orang di sekitarmu juga ikut berat.',
    }),
    probability: L({
      ko: '99%',
      en: '99%',
      ja: '99%',
      'zh-CN': '99%',
      'zh-TW': '99%',
      vi: '99%',
      id: '99%',
    }),
    sections: [
      section(
        {
          ko: '👥 동료 평가',
          en: "👥 Coworker's Take",
          ja: '👥 同僚の評価',
          'zh-CN': '👥 同事评价',
          'zh-TW': '👥 同事評價',
          vi: '👥 Đánh giá của đồng nghiệp',
          id: '👥 Penilaian Rekan Kerja',
        },
        {
          ko: '블라인드에 이미 올라갔을 수도 있음',
          en: 'There\'s a chance this is already posted on Blind',
          ja: 'ブラインドにすでに投稿されている可能性あり',
          'zh-CN': '很有可能已经被发到Blind上了',
          'zh-TW': '很有可能已經被發到Blind上了',
          vi: 'Có khả năng đã bị đăng lên Blind rồi',
          id: 'Ada kemungkinan udah keposting di Blind',
        }
      ),
      section(
        {
          ko: '👔 팀장 평가',
          en: "👔 Team Lead's Take",
          ja: '👔 チームリーダーの評価',
          'zh-CN': '👔 组长评价',
          'zh-TW': '👔 組長評價',
          vi: '👔 Đánh giá của trưởng nhóm',
          id: '👔 Penilaian Team Leader',
        },
        {
          ko: '"인사이동 명단에서 이름을 본 것 같기도 한"',
          en: '"I feel like I might have seen this name on the reassignment list"',
          ja: '「人事異動リストで名前を見たような気もする」',
          'zh-CN': '"感觉在人事调动名单上看到过这个名字"',
          'zh-TW': '「感覺在人事調動名單上看到過這個名字」',
          vi: '"Cảm giác như đã thấy tên này trong danh sách điều chuyển nhân sự"',
          id: '"Kayaknya pernah lihat nama ini di daftar rotasi karyawan"',
        }
      ),
      section(
        {
          ko: '❓ 나머지 1%는 뭔가',
          en: "❓ What's the Other 1%?",
          ja: '❓ 残りの1%とは何か',
          'zh-CN': '❓ 剩下的1%是什么',
          'zh-TW': '❓ 剩下的1%是什麼',
          vi: '❓ 1% còn lại là gì',
          id: '❓ Sisa 1% Itu Apa',
        },
        {
          ko: '당신도 월요일 아침 커피 들고 출근하는 그 순간만큼은 선량합니다',
          en: 'Even you are a good person, at least for that one moment on Monday morning walking in with your coffee',
          ja: 'あなたも月曜の朝、コーヒーを持って出勤するその瞬間だけは善良です',
          'zh-CN': '哪怕是你，周一早上拿着咖啡走进公司的那一刻，也是善良的',
          'zh-TW': '哪怕是你，週一早上拿著咖啡走進公司的那一刻，也是善良的',
          vi: 'Ngay cả bạn, khoảnh khắc cầm cà phê đi làm vào sáng thứ Hai đó, cũng là người tốt',
          id: 'Bahkan kamu pun baik hati, setidaknya di momen bawa kopi jalan masuk kantor Senin pagi',
        }
      ),
      section(
        {
          ko: '💬 한 줄 위로',
          en: '💬 One-Line Comfort',
          ja: '💬 一言の慰め',
          'zh-CN': '💬 一句安慰',
          'zh-TW': '💬 一句安慰',
          vi: '💬 Lời an ủi ngắn',
          id: '💬 Kata Penghibur',
        },
        {
          ko: '"이걸 솔직하게 인정한 것 자체가 이미 변화의 시작입니다"',
          en: '"The fact that you honestly admitted this is already the start of change"',
          ja: '「これを正直に認めたこと自体が、すでに変化の始まりです」',
          'zh-CN': '"能坦然承认这一点，本身就已经是改变的开始"',
          'zh-TW': '「能坦然承認這一點，本身就已經是改變的開始」',
          vi: '"Việc bạn thẳng thắn thừa nhận điều này chính là khởi đầu của sự thay đổi"',
          id: '"Fakta bahwa kamu jujur mengakui ini aja udah jadi awal dari perubahan"',
        }
      ),
    ],
    shareMessage: L({
      ko: '회사 빌런 확률: 99% 👹 만렙 빌런 달성... 이거 솔직하게 올리는 거 자체가 용기임 ㅋㅋㅋ → 직장 동료 태그해봐 다들 몇 % 나왔는지',
      en: "Office villain probability: 99% 👹 Achieved max-level villain status... honestly posting this alone takes courage lol → Tag your coworkers and see what % they got",
      ja: 'オフィス悪役確率：99% 👹 マックスレベル悪役達成…これを正直に投稿すること自体が勇気笑 → 職場の同僚をタグして何%だったか見てみて',
      'zh-CN': '职场反派概率：99% 👹 达成满级反派...能坦然发出来这件事本身就很有勇气哈哈哈 → 去标记职场同事看看大家测出多少%',
      'zh-TW': '職場反派機率：99% 👹 達成滿級反派...能坦然發出來這件事本身就很有勇氣哈哈哈 → 去標記職場同事看看大家測出多少%',
      vi: 'Xác suất vai phản diện công sở: 99% 👹 Đạt cấp độ phản diện tối đa... việc thẳng thắn đăng cái này lên đã là can đảm rồi haha → Tag đồng nghiệp xem mọi người ra bao nhiêu %',
      id: 'Probabilitas penjahat kantor: 99% 👹 Berhasil capai level maksimal penjahat... jujur posting ini aja udah butuh keberanian wkwk → Tag rekan kerja, lihat pada dapet berapa %',
    }),
  },
];
