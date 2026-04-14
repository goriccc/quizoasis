export interface Phase3ShortformAddictionTypeQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    score: number;
  }[];
}

export interface Phase3ShortformAddictionTypeResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  addictionLevel: Record<string, string>;
  symptoms: Record<string, string>;
  prescription: Record<string, string>;
  goodMatch: Record<string, string>;
  badMatch: Record<string, string>;
  shareLevel: string;
  shareTypeName: Record<string, string>;
}

const L = (ko: string, en: string, ja: string, zhcn: string, zhtw: string, vi: string, id: string) => ({
  ko,
  en,
  ja,
  'zh-CN': zhcn,
  'zh-TW': zhtw,
  vi,
  id,
});

export const phase3ShortformAddictionTypeQuestions: Phase3ShortformAddictionTypeQuestion[] = [
  {
    id: 1,
    question: L(
      '숏폼을 보기 시작하면 멈추는 시점은?',
      'When do you usually stop after you start watching short-form videos?',
      'ショート動画を見始めたら、いつ止められますか？',
      '开始刷短视频后，你通常什么时候停？',
      '開始滑短影音後，你通常什麼時候停？',
      'Bạn thường dừng khi nào sau khi bắt đầu xem video ngắn?',
      'Setelah mulai menonton konten pendek, kapan biasanya Anda berhenti?'
    ),
    options: [
      {
        text: L(
          '30분 이내로 보고 자연스럽게 끊는다',
          'Within 30 minutes, I naturally put the phone down.',
          '30分以内で自然に止められる。',
          '30 分钟内就会自然停下。',
          '30 分鐘內就會自然停下。',
          'Trong 30 phút tôi tự nhiên dừng lại.',
          'Dalam 30 menit saya bisa berhenti dengan natural.'
        ),
        score: 0,
      },
      {
        text: L(
          '보다 보면 1시간은 기본이고 멈추려면 의식적으로 노력해야 한다',
          'An hour is “normal”; I have to consciously try to stop.',
          '見始めると1時間は当たり前。止めるには意識的に努力が必要。',
          '一看就一小时是常态，要停得刻意努力。',
          '一看就一小時是常態，要停得刻意努力。',
          'Xem một tiếng là chuyện thường; phải cố ý mới dừng được.',
          'Satu jam itu biasa; harus berusaha sadar untuk berhenti.'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 2,
    question: L(
      '화장실에 갈 때 폰을 들고 가서 숏폼을 보나요?',
      'Do you take your phone to the bathroom to watch short-form?',
      'トイレに行くときもスマホでショート動画を見ますか？',
      '上厕所会带手机刷短视频吗？',
      '上廁所會帶手機滑短影音嗎？',
      'Bạn có mang điện thoại vào WC để xem video ngắn không?',
      'Apakah Anda membawa HP ke toilet untuk menonton konten pendek?'
    ),
    options: [
      {
        text: L(
          '아니다. 화장실만큼은 폰 없이 간다',
          'No. For the bathroom, I go without my phone.',
          'いいえ。トイレだけはスマホなし。',
          '不会，上厕所不带手机。',
          '不會，上廁所不帶手機。',
          'Không. Vào WC tôi không mang điện thoại.',
          'Tidak. Ke toilet tanpa HP.'
        ),
        score: 0,
      },
      {
        text: L(
          '당연하다. 화장실에서도 릴스는 멈추지 않는다',
          'Of course. Reels don’t stop in the bathroom.',
          '当然。トイレでもリールは止まらない。',
          '当然，厕所里 Reels 也不停。',
          '當然，廁所裡 Reels 也不停。',
          'Tất nhiên. Ở WC vẫn lướt không ngừng.',
          'Tentu. Di toilet pun tetap scroll.'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 3,
    question: L(
      '밥을 먹을 때 숏폼을 틀어놓지 않으면?',
      'If you don’t turn on short-form while eating, what happens?',
      '食事中にショート動画をつけないとどうなりますか？',
      '吃饭时不开短视频会怎样？',
      '吃飯時不開短影音會怎樣？',
      'Nếu không bật video ngắn khi ăn thì sao?',
      'Kalau tidak menyalakan konten pendek saat makan?'
    ),
    options: [
      {
        text: L(
          '괜찮다. 밥 먹는 것 자체를 즐긴다',
          'It’s fine. I enjoy the meal itself.',
          '大丈夫。食事そのものを楽しめる。',
          '没关系，享受吃饭本身。',
          '沒關係，享受吃飯本身。',
          'Ổn. Tôi tận hưởng bữa ăn.',
          'Tidak masalah. Saya menikmati makanannya.'
        ),
        score: 0,
      },
      {
        text: L(
          '뭔가 허전하고 밥맛이 없다. 숏폼은 식사의 필수 BGM이다',
          'It feels empty; food tastes bland. Short-form is my meal BGM.',
          'なんか物足りない。ショートは食事の必須BGM。',
          '总觉得空空的、饭不香，短视频是吃饭必备 BGM。',
          '總覺得空空的、飯不香，短影音是吃飯必備 BGM。',
          'Thấy trống trải, ăn không ngon. Video ngắn là “nhạc nền” bữa ăn.',
          'Rasa hampa, makan kurang enak. Konten pendek jadi BGM wajib.'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 4,
    question: L(
      '자기 전에 폰을 내려놓고 잠들 수 있나요?',
      'Can you put your phone down before sleep?',
      '寝る前にスマホを置いて眠れますか？',
      '睡前能放下手机入睡吗？',
      '睡前能放下手機入睡嗎？',
      'Bạn có thể đặt điện thoại xuống trước khi ngủ không?',
      'Bisakah menaruh HP sebelum tidur?'
    ),
    options: [
      {
        text: L(
          '30분 이내로 보고 폰을 내려놓을 수 있다',
          'I can watch under 30 minutes, then put the phone down.',
          '30分以内なら見てから置ける。',
          '看不超过 30 分钟就能放下。',
          '看不超過 30 分鐘就能放下。',
          'Xem dưới 30 phút rồi có thể đặt máy xuống.',
          'Bisa nonton di bawah 30 menit lalu menaruh HP.'
        ),
        score: 0,
      },
      {
        text: L(
          '폰을 손에 쥔 채로 잠들거나 눈이 감길 때까지 본다',
          'I fall asleep holding the phone, or watch until my eyes close.',
          'スマホを握ったまま寝るか、目が閉じるまで見る。',
          '握着手机睡着，或看到睁不开眼。',
          '握著手機睡著，或看到睜不開眼。',
          'Ôm điện thoại ngủ hoặc xem đến khi nhắm mắt.',
          'Tidur sambil megang HP atau nonton sampai mata terpejam.'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 5,
    question: L(
      '지루한 상황(이동 중, 대기 중 등)이 생기면?',
      'When you’re bored (commuting, waiting, etc.), what do you do?',
      '退屈なとき（移動中、待ち時間など）は？',
      '无聊时（通勤、排队等）你会？',
      '無聊時（通勤、排隊等）你會？',
      'Khi chán (đi lại, chờ đợi…) bạn làm gì?',
      'Saat bosan (perjalanan, antre, dll.) Anda?'
    ),
    options: [
      {
        text: L(
          '멍하니 있거나 음악을 듣는 등 다른 방식으로 시간을 보낸다',
          'I zone out, listen to music, or pass time another way.',
          'ぼんやりしたり音楽を聴いたり別の過ごし方をする。',
          '发呆、听音乐或用别的方式打发时间。',
          '發呆、聽音樂或用別的方式打發時間。',
          'Thả hồn, nghe nhạc hoặc làm việc khác.',
          'Melamun, musik, atau cara lain.'
        ),
        score: 0,
      },
      {
        text: L(
          '반사적으로 폰을 꺼내 숏폼부터 켠다. 1초도 지루함을 못 참는다',
          'Reflex: phone out, short-form first. I can’t stand a second of boredom.',
          '反射的にスマホを出してショートから。1秒も退屈が無理。',
          '条件反射先掏手机刷短视频，一秒无聊都忍不了。',
          '條件反射先掏手機滑短影音，一秒無聊都忍不了。',
          'Phản xạ: mở máy, video ngắn trước. Không chịu được chán một giây.',
          'Refleks: buka HP, konten pendek dulu. Tidak tahan bosan sekejap pun.'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 6,
    question: L(
      '재미없는 숏폼이 떠도 계속 스크롤하게 되나요?',
      'If a boring short-form shows up, do you still keep scrolling?',
      'つまらないショートが出てもスクロールを続けますか？',
      '刷到无聊的短视频还会一直滑吗？',
      '滑到無聊的短影音還會一直滑嗎？',
      'Video ngắn chán vẫn cứ lướt tiếp không?',
      'Konten pendek membosankan tetap terus scroll?'
    ),
    options: [
      {
        text: L(
          '별로면 끄고 다른 걸 한다',
          'If it’s bad, I close it and do something else.',
          'つまらなければ切って別のことをする。',
          '不好看就关掉去做别的。',
          '不好看就關掉去做別的。',
          'Chán thì tắt làm việc khác.',
          'Jika tidak seru, tutup dan lakukan hal lain.'
        ),
        score: 0,
      },
      {
        text: L(
          '재미없어도 더 재밌는 게 나올 것 같아서 계속 스크롤한다',
          'Even if it’s boring, I scroll hoping the next one is fun.',
          'つまなくても次が面白そうで続ける。',
          '即使无聊也觉得下一条会更好笑，继续滑。',
          '即使無聊也覺得下一段會更好笑，繼續滑。',
          'Chán vẫn lướt vì hy vọng clip sau hay hơn.',
          'Meski membosankan, tetap scroll berharap yang berikutnya seru.'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 7,
    question: L(
      '숏폼을 보다가 중요한 일을 미룬 적이 있나요?',
      'Have you ever put off important things because of short-form?',
      'ショート動画のせいで大事なことを先延ばしにしたことは？',
      '有没有因为刷短视频耽误过重要的事？',
      '有沒有因為滑短影音耽誤過重要的事？',
      'Từng trì hoãn việc quan trọng vì video ngắn không?',
      'Pernah menunda hal penting karena konten pendek?'
    ),
    options: [
      {
        text: L(
          '거의 없다. 할 일은 하고 본다',
          'Rarely. I do what I need to do first, then watch.',
          'ほぼない。やることをしてから見る。',
          '几乎没有，先做事再看。',
          '幾乎沒有，先做事再看。',
          'Hiếm khi. Làm việc trước, xem sau.',
          'Jarang. Kerjakan dulu, baru nonton.'
        ),
        score: 0,
      },
      {
        text: L(
          '자주 있다. 숏폼 보다가 마감을 놓치거나 약속에 늦은 적도 있다',
          'Often. I’ve missed deadlines or been late because of it.',
          'よくある。締切を逃したり遅刻したりしたことも。',
          '经常有，错过截止或约会迟到过。',
          '經常有，錯過截止或約會遲到過。',
          'Thường xuyên. Đã trễ deadline hoặc đến muộn vì thế.',
          'Sering. Pernah ketinggalan deadline atau terlambat janji.'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 8,
    question: L(
      '하루 동안 숏폼을 아예 안 본다면?',
      'What if you didn’t watch any short-form for a whole day?',
      '1日まったくショート動画を見ないとしたら？',
      '如果一整天完全不看短视频呢？',
      '如果一整天完全不看短影音呢？',
      'Nếu cả ngày không xem video ngắn nào?',
      'Jika seharian tidak menonton konten pendek sama sekali?'
    ),
    options: [
      {
        text: L(
          '괜찮다. 딱히 못 참을 것 같지 않다',
          'I’d be fine. I don’t feel like I’d “die” without it.',
          '大丈夫。特に我慢できない感じはない。',
          '还好，不觉得非看不可。',
          '還好，不覺得非看不可。',
          'Ổn. Không cảm thấy không chịu được.',
          'Tidak masalah. Tidak merasa harus banget.'
        ),
        score: 0,
      },
      {
        text: L(
          '뭔가 허전하고 불안할 것 같다. 하루 안 보는 게 상상이 안 된다',
          'I’d feel empty and anxious. A day without it feels unimaginable.',
          'なんか不安で物足りない。1日見ないのが想像できない。',
          '会空虚焦虑，想象不了一整天不看。',
          '會空虛焦慮，想像不了一整天不看。',
          'Trống trải, bồn chồn. Không tưởng tượng nổi cả ngày không xem.',
          'Kosong, cemas. Tak bisa bayangkan sehari tanpa itu.'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 9,
    question: L(
      '같이 있는 사람이 있어도 숏폼을 보나요?',
      'Do you still watch short-form when someone is with you?',
      '誰かと一緒にいてもショート動画を見ますか？',
      '有人在一起时你还会刷短视频吗？',
      '有人在一起時你還會滑短影音嗎？',
      'Có người bên cạnh vẫn xem video ngắn không?',
      'Saat ada orang di dekat Anda, tetap scroll konten pendek?'
    ),
    options: [
      {
        text: L(
          '사람이 있을 때는 폰을 잘 안 본다',
          'When I’m with people, I rarely look at my phone.',
          '一緒にいるときはあまりスマホを見ない。',
          '有人在时很少看手机。',
          '有人在時很少看手機。',
          'Có người thì hiếm khi nhìn điện thoại.',
          'Saat bersama orang lain jarang lihat HP.'
        ),
        score: 0,
      },
      {
        text: L(
          '대화 중간중간 숏폼을 확인하거나 같이 보자며 폰을 내밀기도 한다',
          'I check between conversations or offer the phone to watch together.',
          '会話の合間に見たり「一緒に見よう」と出したりする。',
          '聊天间隙会看，或递手机说一起看。',
          '聊天空檔會看，或遞手機說一起看。',
          'Nói chuyện xen kẽ xem hoặc đưa máy rủ xem chung.',
          'Di sela ngobrol cek atau ajak lihat bareng.'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 10,
    question: L(
      '재밌는 숏폼을 보면 어떻게 하나요?',
      'When you see a really fun short-form, what do you do?',
      '面白いショートを見たらどうしますか？',
      '看到特别好笑的短视频你会怎么做？',
      '看到特別好笑的短影音你會怎麼做？',
      'Khi thấy video ngắn cực hay bạn làm gì?',
      'Saat menonton konten pendek yang lucu, Anda?'
    ),
    options: [
      {
        text: L(
          '혼자 보고 넘어간다',
          'I watch alone and move on.',
          '一人で見て流す。',
          '自己看完就划走。',
          '自己看完就滑走。',
          'Tự xem rồi lướt tiếp.',
          'Nonton sendiri lalu lanjut.'
        ),
        score: 0,
      },
      {
        text: L(
          '즉시 친구에게 공유하거나 저장해두고 나중에 또 본다',
          'I share with friends right away or save and rewatch.',
          'すぐ友だちに送るか保存して後でまた見る。',
          '马上分享给朋友，或收藏反复看。',
          '馬上分享給朋友，或收藏反覆看。',
          'Chia sẻ ngay hoặc lưu xem lại.',
          'Langsung bagikan atau simpan untuk ditonton lagi.'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 11,
    question: L(
      '숏폼을 보고 나서 시간이 얼마나 지났는지 모를 때가 있나요?',
      'Do you ever lose track of time after watching short-form?',
      'ショートを見終わったあと、時間を忘れたことはありますか？',
      '刷完短视频会不知道过了多久吗？',
      '滑完短影音會不知道過了多久嗎？',
      'Sau khi xem xong có lúc không biết đã mất bao lâu không?',
      'Setelah nonton, pernah tidak sadar sudah berapa lama?'
    ),
    options: [
      {
        text: L(
          '거의 없다. 시간 감각이 있는 편이다',
          'Rarely. I usually have a sense of time.',
          'ほぼない。時間感覚はある方。',
          '几乎没有，时间感还行。',
          '幾乎沒有，時間感還行。',
          'Hiếm. Tôi vẫn biết thời gian.',
          'Jarang. Masih punya rasa waktu.'
        ),
        score: 0,
      },
      {
        text: L(
          '자주 있다. 벌써 이 시간이야?가 입에 달려있다',
          'Often. “Wait, it’s that late already?” is my catchphrase.',
          'よくある。「もうこの時間？」が口癖。',
          '经常有，“已经这么晚了？”成口头禅。',
          '經常有，「已經這麼晚了？」成口頭禪。',
          'Thường xuyên. Câu “trời ơi đã giờ này rồi?” thành cửa miệng.',
          'Sering. Kalimat “kok sudah segini?” jadi kebiasaan.'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 12,
    question: L(
      '숏폼 없이 일주일을 보낼 수 있을 것 같나요?',
      'Could you go a whole week without short-form?',
      '1週間まったくショート動画なしで過ごせそうですか？',
      '你觉得能一周完全不刷短视频吗？',
      '你覺得能一週完全不滑短影音嗎？',
      'Bạn có thể một tuần không xem video ngắn không?',
      'Bisakah Anda satu minggu tanpa konten pendek sama sekali?'
    ),
    options: [
      {
        text: L(
          '가능하다. 의지가 있으면 충분히 할 수 있다',
          'Yes. With willpower, I could do it.',
          '可能。意志があれば十分できる。',
          '可以，有决心就能做到。',
          '可以，有決心就能做到。',
          'Được. Có ý chí là làm được.',
          'Bisa. Dengan niat cukup bisa.'
        ),
        score: 0,
      },
      {
        text: L(
          '솔직히 자신 없다. 하루도 버티기 어려울 것 같다',
          'Honestly, no confidence. Even one day feels hard.',
          '正直自信がない。1日も厳しそう。',
          '说实话没信心，一天都难熬。',
          '說實話沒信心，一天都難熬。',
          'Thật lòng không tin. Một ngày cũng khó.',
          'Jujur tidak yakin. Sehari saja sulit.'
        ),
        score: 1,
      },
    ],
  },
];

export const phase3ShortformAddictionTypeResults: Phase3ShortformAddictionTypeResult[] = [
  {
    type: 'Type1',
    emoji: '🌿',
    title: L(
      '숏폼과 건강한 거리두기, 디지털 자립인',
      'Healthy distance from short-form — digitally self-reliant',
      'ショートと健全な距離、デジタル自立タイプ',
      '与短视频保持健康距离的数字自律型',
      '與短影音保持健康距離的數位自律型',
      'Giữ khoảng cách lành mạnh với video ngắn — tự chủ số',
      'Jarak sehat dari konten pendek — mandiri digital'
    ),
    shortDescription: L(
      '숏폼? 가끔 보긴 하는데 딱히 빠져들지는 않아요.',
      'Short-form? I watch sometimes, but I don’t really get hooked.',
      'ショート？たまに見るけど、ハマるほどではない。',
      '短视频？偶尔看看，谈不上上瘾。',
      '短影音？偶爾看看，談不上上癮。',
      'Video ngắn? Thỉnh thoảng xem, không đến mức nghiện.',
      'Konten pendek? Kadang nonton, tidak sampai kecanduan.'
    ),
    description: L(
      '당신은 숏폼 알고리즘에 지배당하지 않는 몇 안 되는 사람 중 하나입니다. 심심할 때 잠깐 보고 끊을 수 있고, 폰 없이도 식사하고 잠들 수 있습니다. 디지털 자기조절 능력이 매우 뛰어난 타입입니다. 주변 친구들이 숏폼 이야기를 할 때 공감하기 어려울 수도 있지만, 그게 훨씬 건강한 상태입니다.',
      'You’re one of the few who aren’t ruled by the short-form algorithm. You can watch a bit when bored and stop; you can eat and sleep without your phone. Your digital self-control is strong. Friends’ short-form talk might not click—but that’s the healthier place to be.',
      'あなたはショートのアルゴリズムに支配されない少数派です。暇なとき少し見て止められ、スマホなしで食事も睡眠も取れます。デジタル自己調整力が高いタイプ。周りのショート談義に乗りにくいこともありますが、それはずっと健全な状態です。',
      '你很少被短视频算法牵着走。无聊时看一会儿能停，吃饭睡觉也可以不看手机。数字自控力很强。朋友聊短视频时你可能不太共鸣——但那反而是更健康的状态。',
      '你很少被短影音演算法牽著走。無聊時看一會兒能停，吃飯睡覺也可以不看手機。數位自控力很強。朋友聊短影音時你可能不太共鳴——但那反而是更健康的狀態。',
      'Bạn là số ít không bị thuật toán video ngắn chi phối. Chán thì xem chút là dừng; ăn ngủ không cần điện thoại. Khả năng tự kiểm soát kỹ thuật số rất tốt. Bạn bè bàn video ngắn có thể khó đồng cảm—nhưng đó là trạng thái lành mạnh hơn.',
      'Anda salah satu yang jarang dikuasai algoritme konten pendek. Bosan bisa nonton sebentar lalu berhenti; makan tidur tanpa HP. Kontrol diri digital kuat. Obrolan teman soal konten pendek mungkin kurang nyambung—tapi itu lebih sehat.'
    ),
    addictionLevel: L(
      '중독 레벨: Lv. 1 (청정 구역)',
      'Addiction level: Lv. 1 (Clean zone)',
      '中毒レベル: Lv.1（クリーンゾーン）',
      '成瘾程度：Lv.1（清净区）',
      '成癮程度：Lv.1（清淨區）',
      'Mức “nghiện”: Lv.1 (vùng sạch)',
      'Level kecanduan: Lv.1 (zona bersih)'
    ),
    symptoms: L(
      '없음, 정상 범주',
      'None — within normal range',
      'なし、正常範囲',
      '无，属正常范围',
      '無，屬正常範圍',
      'Không có, trong phạm vi bình thường',
      'Tidak ada, dalam rentang normal'
    ),
    prescription: L(
      '지금 상태를 유지하세요. 주변의 유혹에 흔들리지 마세요.',
      'Keep this balance. Don’t let peer pressure pull you in.',
      'この状態を維持してください。周りの誘惑に揺らがないで。',
      '保持现在的状态，别被周围的诱惑带跑。',
      '保持現在的狀態，別被周圍的誘惑帶跑。',
      'Giữ trạng thái này. Đừng để cám dỗ xung quanh kéo bạn vào.',
      'Pertahankan kondisi ini. Jangan goyah oleh godaan sekitar.'
    ),
    goodMatch: L(
      'Type 2 (살짝 중독된 친구를 구해줄 수 있음)',
      'Type 2 (can help a friend who’s a little hooked)',
      'Type 2（ちょい中毒の友を救えるかも）',
      'Type 2（能拉一把有点上瘾的朋友）',
      'Type 2（能拉一把有點上癮的朋友）',
      'Type 2 (có thể giúp bạn hơi “nghiện”)',
      'Type 2 (bisa menolong teman yang agak kecanduan)'
    ),
    badMatch: L(
      'Type 6 (같이 있으면 숏폼 권유를 계속 받음)',
      'Type 6 (they’ll keep nudging you to watch together)',
      'Type 6（一緒にいるとずっとショート勧められる）',
      'Type 6（在一起会一直被安利刷短视频）',
      'Type 6（在一起會一直被安利滑短影音）',
      'Type 6 (ở cạnh sẽ bị rủ xem mãi)',
      'Type 6 (kalau bareng terus diajak scroll)'
    ),
    shareLevel: '1',
    shareTypeName: L(
      '디지털 자립인',
      'Digital minimalist',
      'デジタル自立タイプ',
      '数字自律型',
      '數位自律型',
      'Tự chủ số',
      'Mandiri digital'
    ),
  },
  {
    type: 'Type2',
    emoji: '🙂',
    title: L(
      '가끔 빠지지만 그래도 괜찮은, 가벼운 숏폼 즐기미',
      'Sometimes you spiral—but you’re still a light short-form enjoyer',
      'たまにハマるけど大丈夫、ライトなショート楽しみ族',
      '偶尔会刷久一点，但还算轻度的短视频爱好者',
      '偶爾會滑久一點，但還算輕度的短影音愛好者',
      'Đôi khi xem lâu nhưng vẫn ở mức nhẹ',
      'Kadang kebablasan tapi masih kategori ringan'
    ),
    shortDescription: L(
      '보다 보면 좀 길어지긴 하는데, 그래도 끊을 수는 있어요.',
      'Sessions run long sometimes—but I can still stop if I try.',
      '見始めると長くなることもあるけど、止められはする。',
      '一看会拖长，但想停还能停。',
      '一看會拖長，但想停還能停。',
      'Đôi khi kéo dài nhưng vẫn dừng được nếu cố.',
      'Kadang lama, tapi masih bisa berhenti kalau niat.'
    ),
    description: L(
      '당신은 숏폼을 즐기지만 완전히 잠식당하진 않은 상태입니다. 가끔 생각보다 오래 보게 되는 날이 있지만, 의식하면 멈출 수 있습니다. 적당히 즐기고 적당히 내려놓는 균형 잡힌 숏폼 라이프입니다. 다만 피곤하거나 스트레스받는 날에는 평소보다 훨씬 오래 보게 되는 경향이 있으니 주의하세요.',
      'You enjoy short-form without being fully consumed. Some days you watch longer than planned, but you can stop when you notice. A fairly balanced short-form life—just watch out: when you’re tired or stressed, you tend to scroll much longer.',
      'ショートは楽しむが、完全に飲まれてはいません。たまに長く見すぎる日もあるが、気づけば止められる。適度に楽しむバランス型。ただ疲れやストレスの日は普段より長く見がちなので注意。',
      '你喜欢短视频但还没被完全吞噬。有时会看久一点，但意识到就能停，算比较平衡。注意疲惫或压力大时往往会刷得更久。',
      '你喜歡短影音但還沒被完全吞噬。有時會看久一點，但意識到就能停，算比較平衡。注意疲憊或壓力大時往往會滑得更久。',
      'Bạn thích video ngắn nhưng chưa bị nuốt trọn. Đôi khi xem lâu hơn dự định nhưng nhận ra là dừng được. Cân bằng tương đối—chỉ khi mệt/căng thẳng bạn hay lưới lâu hơn.',
      'Anda menikmati konten pendek tanpa terserap total. Kadang lebih lama dari rencana tapi sadar bisa berhenti. Cukup seimbang—waktu lelah/stres cenderung scroll jauh lebih lama.'
    ),
    addictionLevel: L(
      '중독 레벨: Lv. 20 (경계 주의)',
      'Addiction level: Lv. 20 (Caution zone)',
      '中毒レベル: Lv.20（注意ゾーン）',
      '成瘾程度：Lv.20（警戒区）',
      '成癮程度：Lv.20（警戒區）',
      'Mức “nghiện”: Lv.20 (vùng cảnh báo)',
      'Level kecanduan: Lv.20 (zona waspada)'
    ),
    symptoms: L(
      '가끔 예상보다 길게 봄, 스트레스 해소 수단으로 활용',
      'Sometimes longer than planned; used as stress relief',
      'たまに予想より長く見る、ストレス発散に使う',
      '有时会超预期时长，当解压方式',
      '有時會超預期時長，當紓壓方式',
      'Đôi khi xem lâu hơn dự định; dùng để xả stress',
      'Kadang lebih lama dari perkiraan; jadi pelampias stres'
    ),
    prescription: L(
      '취침 30분 전에는 폰을 다른 방에 두는 것부터 시작해 보세요.',
      'Start by putting your phone in another room 30 minutes before bed.',
      '就寝30分前からスマホを別の部屋に置くことから始めて。',
      '先从睡前 30 分钟把手机放到别的房间开始。',
      '先從睡前 30 分鐘把手機放到別的房間開始。',
      'Bắt đầu bằng cách cất điện thoại sang phòng khác 30 phút trước khi ngủ.',
      'Mulai dengan menaruh HP di ruangan lain 30 menit sebelum tidur.'
    ),
    goodMatch: L(
      'Type 1 (건강한 디지털 습관을 배울 수 있음)',
      'Type 1 (can learn healthier digital habits)',
      'Type 1（健全なデジタル習慣を学べる）',
      'Type 1（能学到更健康的数字习惯）',
      'Type 1（能學到更健康的數位習慣）',
      'Type 1 (có thể học thói quen số lành mạnh hơn)',
      'Type 1 (bisa belajar kebiasaan digital lebih sehat)'
    ),
    badMatch: L(
      'Type 5 (같이 있으면 덩달아 오래 보게 됨)',
      'Type 5 (you’ll both scroll way longer together)',
      'Type 5（一緒だとお互い長く見ちゃう）',
      'Type 5（在一起会互相拖成熬夜党）',
      'Type 5（在一起會互相拖成熬夜黨）',
      'Type 5 (ở cạnh nhau sẽ kéo nhau xem lâu hơn)',
      'Type 5 (bareng-bareng jadi ikut lama scroll)'
    ),
    shareLevel: '20',
    shareTypeName: L(
      '가벼운 숏폼 즐기미',
      'Casual scroller',
      'ライトショート族',
      '轻度刷片族',
      '輕度滑片族',
      'Người xem nhẹ',
      'Penikmat ringan'
    ),
  },
  {
    type: 'Type3',
    emoji: '😅',
    title: L(
      '알면서도 못 끊는, 자각형 중독자',
      'You know you should stop—self-aware scroll addict',
      'わかってるのに止められない、自覚ある中毒タイプ',
      '明知该停却停不下来的自觉型',
      '明知該停卻停不下來的自覺型',
      'Biết là nghiện mà vẫn không dừng—tự nhận thức',
      'Sadar kecanduan tapi susah berhenti'
    ),
    shortDescription: L(
      '나 중독된 거 알아요. 근데 그냥 보게 돼요.',
      'I know I’m hooked. I still open the app anyway.',
      '中毒してるのは分かってる。でも見ちゃう。',
      '我知道上瘾了，但还是忍不住打开。',
      '我知道上癮了，但還是忍不住打開。',
      'Tôi biết mình nghiện. Nhưng vẫn mở lên.',
      'Aku tahu kecanduan. Tetap buka.'
    ),
    description: L(
      '당신은 자신이 숏폼에 꽤 많이 빠져있다는 것을 인지하고 있습니다. 끊어야 한다는 것도 알고, 시간이 사라진다는 것도 압니다. 그런데도 습관처럼 손이 먼저 반응합니다. 자각이 있다는 것 자체는 긍정적인 신호입니다. 지금이 패턴을 바꿀 수 있는 적절한 타이밍입니다.',
      'You’re aware you’re pretty deep into short-form. You know you should cut back and that time vanishes—but your hand still opens the app on autopilot. Awareness itself is a good sign. Now is a workable moment to change the pattern.',
      'かなりハマっている自覚があります。やめるべきだとも、時間が溶けるとも分かっている。それでも手が先に動く。自覚があるのはプラス。今がパターンを変えやすいタイミングです。',
      '你很清楚自己刷得有点凶。也知道该停、时间会变没——但手还是条件反射先点开。有自觉本身就是好事，现在是改变习惯的好时机。',
      '你很清楚自己滑得有點凶。也知道該停、時間會變沒——但手還是條件反射先點開。有自覺本身就是好事，現在是改變習慣的好時機。',
      'Bạn biết mình “dính” khá sâu. Biết nên cắt giảm, biết thời gian bay màu—nhưng tay vẫn mở app theo phản xạ. Tự nhận thức là tín hiệu tốt. Đây là lúc đổi pattern.',
      'Anda sadar sudah cukup dalam. Tahu harus kurangi, tahu waktu hilang—tapi tangan tetap refleks buka aplikasi. Kesadaran itu sinyal baik. Sekarang waktu yang tepat ubah pola.'
    ),
    addictionLevel: L(
      '중독 레벨: Lv. 45 (중등도 중독)',
      'Addiction level: Lv. 45 (Moderate)',
      '中毒レベル: Lv.45（中等度）',
      '成瘾程度：Lv.45（中度）',
      '成癮程度：Lv.45（中度）',
      'Mức “nghiện”: Lv.45 (trung bình)',
      'Level kecanduan: Lv.45 (sedang)'
    ),
    symptoms: L(
      '지루함을 1초도 못 참음, 밥 먹으면서 숏폼 필수',
      'Can’t stand boredom for a second; short-form with meals is “required”',
      '退屈を1秒も我慢できない、食事中もショート必須',
      '一秒无聊都忍不了，吃饭必刷',
      '一秒無聊都忍不了，吃飯必滑',
      'Không chịu được chán một giây; ăn cơm phải có video ngắn',
      'Tidak tahan bosan sekejap; makan harus sambil scroll'
    ),
    prescription: L(
      '앱 사용 시간 제한 기능을 켜두세요. 하루 1시간 제한부터 시작하면 됩니다.',
      'Turn on app time limits. Start with one hour a day.',
      'アプリの使用時間制限をオン。まずは1日1時間から。',
      '打开 App 使用时长限制，先从每天 1 小时开始。',
      '打開 App 使用時長限制，先從每天 1 小時開始。',
      'Bật giới hạn thời gian ứng dụng. Bắt đầu 1 giờ/ngày.',
      'Aktifkan batas waktu aplikasi. Mulai 1 jam per hari.'
    ),
    goodMatch: L(
      'Type 4 (같이 디지털 디톡스 챌린지를 해볼 수 있음)',
      'Type 4 (digital detox buddy potential)',
      'Type 4（一緒にデジタルデトックスに挑戦できる）',
      'Type 4（可以一起做数字排毒挑战）',
      'Type 4（可以一起做數位排毒挑戰）',
      'Type 4 (có thể thử thách detox số cùng nhau)',
      'Type 4 (bisa tantangan detox digital bareng)'
    ),
    badMatch: L(
      'Type 6 (같이 있으면 서로 더 깊이 빠져듦)',
      'Type 6 (you’ll drag each other deeper)',
      'Type 6（一緒だとお互いにもっとハマる）',
      'Type 6（在一起会互相拖得更深）',
      'Type 6（在一起會互相拖得更深）',
      'Type 6 (ở cạnh nhau sẽ kéo nhau sâu hơn)',
      'Type 6 (saling menarik lebih dalam)'
    ),
    shareLevel: '45',
    shareTypeName: L(
      '자각형 중독자',
      'Self-aware scroller',
      '自覚ある中毒タイプ',
      '自觉型刷片党',
      '自覺型滑片黨',
      'Tự nhận thức',
      'Sadaran diri'
    ),
  },
  {
    type: 'Type4',
    emoji: '📱',
    title: L(
      '일상이 숏폼 중심으로 돌아가는, 중증 알고리즘 포로',
      'Your day revolves around short-form — deep algorithm capture',
      '日常がショート中心、重度アルゴリズムの虜',
      '日常围着短视频转，重度算法俘虏',
      '日常圍著短影音轉，重度演算法俘虜',
      'Cuộc sống xoay quanh video ngắn — tù nhân thuật toán nặng',
      'Hari-hari mengitari konten pendek — tawanan algoritme berat'
    ),
    shortDescription: L(
      '솔직히 숏폼 없이 하루를 어떻게 보내는지 기억이 안 나요.',
      'Honestly I barely remember how days worked without short-form.',
      'ショートなしの一日の過ごし方、正直思い出せない。',
      '说实话想不起不刷短视频的一天怎么过。',
      '說實話想不起不滑短影音的一天怎麼過。',
      'Thật lòng không nhớ ngày không có video ngắn ra sao.',
      'Jujur lupa hari tanpa konten pendek seperti apa.'
    ),
    description: L(
      '일어나서 눈 뜨자마자, 밥 먹으면서, 화장실에서, 자기 전까지. 숏폼이 하루 루틴의 핵심이 되어버린 상태입니다. 중요한 일을 미루는 경우도 생기고, 함께 있는 사람이 있어도 폰을 내려놓기가 어렵습니다. 알고리즘이 당신의 시간과 주의력을 상당 부분 가져가고 있습니다. 지금 적극적인 조치가 필요한 시점입니다.',
      'From waking up to meals, bathroom breaks, and bedtime—short-form is the spine of your routine. Important tasks get postponed; even with people around, it’s hard to put the phone down. The algorithm is claiming a big chunk of your time and attention. It’s time for stronger action.',
      '起きてから食事、トイ、寝る前まで。ショートが一日の中心。大事なことを先延ばしにし、誰かといてもスマホを置けない。アルゴリズムが時間と注意を奪っています。今ははっきりした対策が必要です。',
      '从醒来到吃饭、厕所、睡前，短视频成了日程主轴。重要的事会拖，有人在旁也难放下手机。算法正在拿走你大量时间和注意力，现在需要更积极的行动。',
      '從醒來到吃飯、廁所、睡前，短影音成了日程主軸。重要的事會拖，有人在旁也難放下手機。演算法正在拿走你大量時間和注意力，現在需要更積極的行動。',
      'Từ lúc tỉnh đến ăn, WC, trước khi ngủ—video ngắn là trục ngày. Việc quan trọng bị trì; có người bên cạnh vẫn khó cất máy. Thuật toán đang chiếm phần lớn thời gian và chú ý. Cần hành động mạnh hơn.',
      'Dari bangun sampai makan, toilet, sebelum tidur—konten pendek jadi tulang punggung hari. Tugas penting ditunda; ada orang pun susah taruh HP. Algoritme mengambil banyak waktu dan perhatian. Perlu tindakan tegas.'
    ),
    addictionLevel: L(
      '중독 레벨: Lv. 65 (중증 중독)',
      'Addiction level: Lv. 65 (Severe)',
      '中毒レベル: Lv.65（重度）',
      '成瘾程度：Lv.65（重度）',
      '成癮程度：Lv.65（重度）',
      'Mức “nghiện”: Lv.65 (nặng)',
      'Level kecanduan: Lv.65 (berat)'
    ),
    symptoms: L(
      '시간 감각 마비, 할 일 미루기, 대화 중 폰 확인',
      'Time blindness, procrastination, phone-checking mid-conversation',
      '時間感覚が麻痺、先延ばし、会話中もスマホ確認',
      '时间感麻木、拖延、聊天也忍不住看手机',
      '時間感麻木、拖延、聊天也忍不住看手機',
      'Mất cảm giác thời gian, trì hoãn, vừa nói vừa nhìn điện thoại',
      'Kehilangan rasa waktu, menunda, cek HP saat ngobrol'
    ),
    prescription: L(
      '스마트폰 화면 시간을 직접 확인해보세요. 숫자로 보면 충격을 받습니다. 그 충격이 시작점입니다.',
      'Look at your real screen-time stats. The number will hit hard—that shock is your starting line.',
      'スマホのスクリーンタイムを見てください。数字がショック。そのショックがスタート。',
      '去看手机真实的屏幕使用时间数字，冲击感就是起点。',
      '去看手機真實的螢幕使用時間數字，衝擊感就是起點。',
      'Xem thống kê thời gian màn hình thật. Con số sẽ sốc—đó là điểm bắt đầu.',
      'Lihat statistik screen time sungguhan. Angkanya akan mengejutkan—itulah titik mulai.'
    ),
    goodMatch: L(
      'Type 3 (서로 자각하고 있어서 함께 줄여볼 수 있음)',
      'Type 3 (mutual awareness—you can cut back together)',
      'Type 3（お互い自覚があるから一緒に減らせる）',
      'Type 3（彼此有自觉，可以一起减量）',
      'Type 3（彼此有自覺，可以一起減量）',
      'Type 3 (cùng tự nhận thức—có thể cắt cùng nhau)',
      'Type 3 (sama-sama sadar—bisa kurangi bareng)'
    ),
    badMatch: L(
      'Type 1 (옆에서 폰 안 보는 모습을 보면 죄책감이 생김)',
      'Type 1 (watching them ignore their phone stings with guilt)',
      'Type 1（スマホを見ない人の横で罪悪感）',
      'Type 1（旁边的人不刷手机你会愧疚）',
      'Type 1（旁邊的人不滑手機你會愧疚）',
      'Type 1 (thấy người khác không cầm máy là thấy tội lỗi)',
      'Type 1 (melihat orang tidak pegang HP bikin bersalah)'
    ),
    shareLevel: '65',
    shareTypeName: L(
      '중증 알고리즘 포로',
      'Algorithm captive',
      '重度アルゴリズムの虜',
      '重度算法俘虏',
      '重度演算法俘虜',
      'Tù nhân thuật toán',
      'Tawanan algoritme'
    ),
  },
  {
    type: 'Type5',
    emoji: '🌙',
    title: L(
      '숏폼이 수면제가 된, 새벽 좀비 유형',
      'Short-form replaced your sleep—dawn zombie mode',
      'ショートが睡眠を侵食、夜更かしゾンビタイプ',
      '短视频成了安眠药，凌晨僵尸型',
      '短影音成了安眠藥，凌晨殭屍型',
      'Video ngắn thay giấc ngủ—kiểu zombie rạng sáng',
      'Konten pendek menggantikan tidur—mode zombie subuh'
    ),
    shortDescription: L(
      '오늘도 눈이 감길 때까지 보다가 폰을 손에 쥔 채로 잠들었습니다.',
      'Again today: scrolled until my eyes closed, phone still in hand.',
      '今日も目が閉じるまで見て、スマホを握ったまま寝た。',
      '今天又看到睁不开眼，握着手机睡着。',
      '今天又看到睜不開眼，握著手機睡著。',
      'Hôm nay lại xem đến nhắm mắt, vẫn ôm điện thoại ngủ.',
      'Lagi-lagi sampai mata terpejam, masih megang HP.'
    ),
    description: L(
      '숏폼이 수면 루틴을 완전히 장악한 상태입니다. 자야지 하면서 켜는 숏폼이 결국 수면 시간을 갉아먹고 있습니다. 새벽 2~3시에 이제 자야지를 반복하는 생활이 일상이 된 타입입니다. 수면의 질 저하, 집중력 감소, 만성 피로가 이미 나타나고 있을 가능성이 높습니다. 수면과 숏폼을 분리하는 것이 지금 가장 시급합니다.',
      'Short-form has hijacked your sleep routine. “Just one more” at night eats the hours you needed for rest. The 2–3 a.m. “I should sleep now” loop may be your normal. Poor sleep, brain fog, and chronic fatigue are likely already showing. Separating sleep from short-form is the urgent fix.',
      'ショートが睡眠を支配。「寝る」と言いながら見続け、睡眠時間を削っている。深夜2〜3時のループが日常。睡眠の質低下、集中力低下、慢性的な疲れが出やすい。今いちばん急なのは睡眠とショートの切り離しです。',
      '短视频已接管睡眠。“再看就睡”最终吃掉睡眠时间，凌晨两三点还在循环。睡眠质量下降、注意力变差、慢性疲劳很可能已经出现。现在最急的是把睡眠和短视频分开。',
      '短影音已接管睡眠。「再看就睡」最終吃掉睡眠時間，凌晨兩三點還在循環。睡眠品質下降、注意力變差、慢性疲勞很可能已經出現。現在最急的是把睡眠和短影音分開。',
      'Video ngắn đã chiếm routine ngủ. “Xem thêm chút” ban đêm ăn mất giờ ngủ. Vòng lặp 2–3 giờ sáng có thể đã thành bình thường. Ngủ kém, mơ hồ, mệt mỏi mãn tính dễ đã xuất hiện. Tách ngủ khỏi video ngắn là ưu tiên.',
      'Konten pendek menguasai tidur. “Satu lagi” di malam hari memakan jam istirahat. Loop jam 2–3 pagi jadi biasa. Tidur buruk, sulit fokus, lelah kronis mungkin sudah muncul. Pisahkan tidur dari konten pendek—itu yang paling mendesak.'
    ),
    addictionLevel: L(
      '중독 레벨: Lv. 85 (수면 침해 단계)',
      'Addiction level: Lv. 85 (Sleep disruption stage)',
      '中毒レベル: Lv.85（睡眠侵害段階）',
      '成瘾程度：Lv.85（睡眠受损阶段）',
      '成癮程度：Lv.85（睡眠受損階段）',
      'Mức “nghiện”: Lv.85 (giai đoạn phá giấc ngủ)',
      'Level kecanduan: Lv.85 (tahap gangguan tidur)'
    ),
    symptoms: L(
      '폰 쥔 채 잠들기, 만성 수면 부족, 낮 시간 집중력 저하',
      'Falling asleep holding phone; chronic sleep debt; daytime focus crash',
      'スマホ握って寝る、慢性的睡眠不足、昼の集中低下',
      '握手机入睡、长期睡眠不足、白天注意力差',
      '握手機入睡、長期睡眠不足、白天注意力差',
      'Ngủ ôm điện thoại; thiếu ngủ mãn tính; ban ngày khó tập trung',
      'Tidur megang HP; utang tidur kronis; siang sulit fokus'
    ),
    prescription: L(
      '침대에 누우면 폰을 손에서 내려놓는 규칙 하나만 지켜보세요. 충전기를 침대에서 멀리 두세요.',
      'Try one rule: when you lie in bed, the phone leaves your hand. Charge it away from the bed.',
      'ベッドに入ったらスマホを手から離す、それだけ守って。充電はベッドから離して。',
      '先试一条：躺床上就把手机放手，充电器放远。',
      '先試一條：躺床上就把手機放手，充電器放遠。',
      'Một quy tắc: nằm giường là cất điện thoại. Sạc xa giường.',
      'Satu aturan: rebahkan diri, HP turun dari tangan. Charger jauh dari tempat tidur.'
    ),
    goodMatch: L(
      'Type 4 (서로의 상황을 이해하며 함께 바꿔볼 수 있음)',
      'Type 4 (you get each other’s situation—change together)',
      'Type 4（お互いの状況が分かるから一緒に変えられる）',
      'Type 4（彼此懂处境，可以一起改）',
      'Type 4（彼此懂處境，可以一起改）',
      'Type 4 (hiểu tình nhau—đổi cùng nhau)',
      'Type 4 (saling paham situasi—ubah bersama)'
    ),
    badMatch: L(
      'Type 1 (일찍 자는 모습을 보면 현타가 옴)',
      'Type 1 (seeing someone sleep early gives you existential dread)',
      'Type 1（早寝の人を見ると現実を感じる）',
      'Type 1（看别人早睡你会emo）',
      'Type 1（看別人早睡你會 emo）',
      'Type 1 (thấy người ngủ sớm là thấy “thực tại đau”)',
      'Type 1 (lihat orang tidur cepat bikin existential crisis)'
    ),
    shareLevel: '85',
    shareTypeName: L(
      '새벽 좀비 유형',
      'Dawn zombie',
      '夜更かしゾンビ',
      '凌晨僵尸型',
      '凌晨殭屍型',
      'Zombie rạng sáng',
      'Zombie subuh'
    ),
  },
  {
    type: 'Type6',
    emoji: '🌀',
    title: L(
      '알고리즘과 한 몸이 된, 숏폼 해탈 경지',
      'Merged with the algorithm—short-form transcendence (or surrender)',
      'アルゴリズムと一体化、ショート“解脱”の境地',
      '与算法融为一体，短视频“解脱”境界',
      '與演算法融為一體，短影音「解脫」境界',
      'Hòa làm một với thuật toán—cảnh giới “giải thoát”',
      'Menyatu dengan algoritme—taraf “transenden” konten pendek'
    ),
    shortDescription: L(
      '중독이요? 저는 그냥 숏폼과 공존하는 삶을 선택한 겁니다.',
      'Addiction? I simply chose to coexist with short-form.',
      '中毒？私はショートと共生する生き方を選んだだけ。',
      '上瘾？我只是选择和短视频共生。',
      '上癮？我只是選擇和短影音共生。',
      'Nghiện à? Tôi chỉ chọn sống chung với video ngắn thôi.',
      'Kecanduan? Aku hanya memilih hidup berdampingan dengan konten pendek.'
    ),
    description: L(
      '12문항 전부 해당되는 당신. 숏폼은 이미 삶의 일부가 아니라 삶 그 자체가 된 상태입니다. 화장실, 식사, 대화 중, 자기 전, 눈 뜨자마자. 숏폼이 없는 순간이 없습니다. 스스로도 알고 있지만 이미 체념한 상태일 수 있습니다. 웃기지만 사실 지금 뇌가 꽤 많이 지쳐있을 가능성이 높습니다. 단 하루만 디지털 디톡스를 경험해보시면 얼마나 알고리즘에 잠식되어 있었는지 느낄 수 있습니다.',
      'You checked every box. Short-form isn’t “part of life”—it is life: bathroom, meals, mid-conversation, bedtime, the moment you open your eyes. There’s no gap without it. You might know—and have quietly given up. It’s funny, but your brain is probably exhausted. Try even one day of digital detox to feel how deep the algorithm has sunk in.',
      '12問すべて該当。ショートは生活の一部ではなく生活そのもの。トイレ、食事、会話中、寝る前、目を開けた瞬間。ショートのない時間がない。自覚はあっても諦めているかも。笑えるけど脳はかなり疲れているはず。デジタルデトックスを1日だけ試すと、どれだけ浸食されていたか分かります。',
      '你十二题全中。短视频不是生活的一部分，而是生活本身：厕所、吃饭、聊天、睡前、睁眼瞬间，没有一刻不在。你可能知道，也可能已经放弃抵抗。好笑归好笑，大脑很可能已经很累。试一天数字排毒，你会感到算法渗透有多深。',
      '你十二題全中。短影音不是生活的一部分，而是生活本身：廁所、吃飯、聊天、睡前、睜眼瞬間，沒有一刻不在。你可能知道，也可能已經放棄抵抗。好笑歸好笑，大腦很可能已經很累。試一天數位排毒，你會感到演算法滲透有多深。',
      'Bạn trúng hết 12 câu. Video ngắn không còn là “một phần cuộc sống”—nó là cuộc sống: WC, ăn, nói chuyện, trước khi ngủ, lúc mở mắt. Không có khoảng trống. Bạn biết và có thể đã buông. Buồn cười nhưng não có thể đã kiệt. Thử một ngày detox số để cảm nhận thuật toán đã ngấm sâu thế nào.',
      'Anda centang semua 12. Konten pendek bukan “bagian hidup”—itu hidupnya: toilet, makan, ngobrol, sebelum tidur, saat membuka mata. Tidak ada celah. Anda sadar dan mungkin sudah pasrah. Lucu, tapi otak mungkin sangat lelah. Coba satu hari detox digital untuk merasakan seberapa dalam algoritme menembus.'
    ),
    addictionLevel: L(
      '중독 레벨: Lv. 99 (해탈 혹은 항복)',
      'Addiction level: Lv. 99 (Transcendence—or surrender)',
      '中毒レベル: Lv.99（解脱か降伏か）',
      '成瘾程度：Lv.99（解脱或投降）',
      '成癮程度：Lv.99（解脫或投降）',
      'Mức “nghiện”: Lv.99 (giải thoát hay đầu hàng)',
      'Level kecanduan: Lv.99 (transenden atau menyerah)'
    ),
    symptoms: L(
      '위의 모든 증상 해당, 디톡스 시도 자체를 포기한 상태',
      'All of the above; may have given up on detox attempts',
      '上の症状すべて、デトックスすら諦めている可能性',
      '上述全中，可能连戒断都放弃了',
      '上述全中，可能連戒斷都放棄了',
      'Tất cả triệu chứng trên; có thể đã bỏ cả thử detox',
      'Semua gejala di atas; mungkin sudah menyerah detox'
    ),
    prescription: L(
      '오늘 딱 한 가지만. 밥 먹을 때 폰 내려놓기. 그것 하나만 해보세요. 거기서부터 시작입니다.',
      'Just one thing today: put the phone down while you eat. Only that. Start there.',
      '今日は一つだけ。食事中はスマホを置く。それだけから。',
      '今天就一件事：吃饭时放下手机。从这一件开始。',
      '今天就一件事：吃飯時放下手機。從這一件開始。',
      'Hôm nay chỉ một việc: cất điện thoại khi ăn. Chỉ vậy thôi.',
      'Hari ini satu hal saja: taruh HP saat makan. Mulai dari situ.'
    ),
    goodMatch: L(
      'Type 5 (서로의 상황을 완벽하게 이해함)',
      'Type 5 (you fully understand each other’s situation)',
      'Type 5（お互いの状況を完璧に分かち合える）',
      'Type 5（彼此处境完全懂）',
      'Type 5（彼此處境完全懂）',
      'Type 5 (hiểu hoàn toàn tình cảnh nhau)',
      'Type 5 (paham sepenuhnya situasi satu sama lain)'
    ),
    badMatch: L(
      'Type 1 (같이 있으면 이 사람은 외계인인가 싶음)',
      'Type 1 (next to them you wonder if they’re from another planet)',
      'Type 1（隣にいると宇宙人では？と思う）',
      'Type 1（在旁边会觉得对方像外星人）',
      'Type 1（在旁邊會覺得對方像外星人）',
      'Type 1 (ở cạnh tưởng họ là người ngoài hành tinh)',
      'Type 1 (di samping mereka seperti orang planet lain)'
    ),
    shareLevel: '99',
    shareTypeName: L(
      '숏폼 해탈 경지',
      'Full merge mode',
      'ショート“解脱”モード',
      '短视频解脱模式',
      '短影音解脫模式',
      'Cảnh giới hòa merge',
      'Mode transenden penuh'
    ),
  },
];

export function calculatePhase3ShortformAddictionTypeResult(answers: number[]): string {
  const totalScore = answers.reduce((sum, score) => sum + score, 0);

  if (totalScore >= 0 && totalScore <= 1) {
    return 'Type1';
  }
  if (totalScore >= 2 && totalScore <= 3) {
    return 'Type2';
  }
  if (totalScore >= 4 && totalScore <= 6) {
    return 'Type3';
  }
  if (totalScore >= 7 && totalScore <= 9) {
    return 'Type4';
  }
  if (totalScore >= 10 && totalScore <= 11) {
    return 'Type5';
  }
  if (totalScore === 12) {
    return 'Type6';
  }
  return 'Type6';
}
