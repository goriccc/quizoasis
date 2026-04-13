/** 나 혹시 ADHD 성향 있어? — 12문항 4지선다, A=0 B=1 C=2 D=3, 총점 0~36 → 6유형 */

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

const E = (): Record<string, string> => ({ ko: '', en: '', ja: '', 'zh-CN': '', 'zh-TW': '', vi: '', id: '' });

export interface Phase3AdhdTendencyChecklistQuestion {
  id: number;
  question: Record<string, string>;
  options: { text: Record<string, string>; score: number }[];
}

export interface Phase3AdhdTendencyChecklistResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  lifeImpact: Record<string, string>;
  workStyle: Record<string, string>;
  relationshipStyle: Record<string, string>;
  messageToYou: Record<string, string>;
  recommendedDirection: Record<string, string>;
  empathyLevel: Record<string, string>;
  characteristics: Record<string, string>;
  goodMatch: Record<string, string>;
  badMatch: Record<string, string>;
}

export const phase3AdhdTendencyChecklistQuestions: Phase3AdhdTendencyChecklistQuestion[] = [
  {
    id: 1,
    question: M(
      '해야 할 중요한 일이 있을 때 나는?',
      'When I have something important to do, I…',
      'やるべき大事なことがあるとき、私は？',
      '有重要的事要做时，我会？',
      '有重要的事要做時，我會？',
      'Khi có việc quan trọng cần làm, tôi…',
      'Saat ada hal penting yang harus dilakukan, saya…'
    ),
    options: [
      {
        text: M(
          '중요도와 마감 순으로 처리한다. 계획대로 잘 되는 편이다',
          'Handle things by priority and deadline. Things usually go as planned.',
          '重要度と締切順で処理する。計画どおりうまくいくことが多い。',
          '按重要程度和截止顺序处理，多半能按计划完成。',
          '依重要程度與截止順序處理，多半能按計畫完成。',
          'Xử lý theo mức độ quan trọng và hạn chót. Thường đúng kế hoạch.',
          'Menangani menurut prioritas dan tenggat. Biasanya sesuai rencana.'
        ),
        score: 0,
      },
      {
        text: M(
          '일단 시작은 하는데 중간에 다른 것에 주의가 쏠리는 경우가 있다',
          'I start, but my attention drifts to something else in the middle.',
          'とりあえず始めるが、途中で別のことに気が向くことがある。',
          '会开始，但中途注意力会跑到别的事上。',
          '會開始，但中途注意力會跑到別的事上。',
          'Tôi bắt đầu nhưng giữa chừng chú ý bị kéo sang việc khác.',
          'Saya mulai, tetapi di tengah perhatian saya teralih ke hal lain.'
        ),
        score: 1,
      },
      {
        text: M(
          '시작하기 전에 다른 것을 먼저 하게 되고 막상 중요한 일은 미루게 된다',
          'I do other things first and end up putting off what matters.',
          '始める前に他のことを先にしてしまい、大事なことが後回しになる。',
          '开始之前会先去做别的，重要的事反而往后拖。',
          '開始之前會先去做別的，重要的事反而往後拖。',
          'Làm việc khác trước, rồi lại trì hoãn việc quan trọng.',
          'Saya melakukan hal lain dulu dan menunda yang penting.'
        ),
        score: 2,
      },
      {
        text: M(
          '마감 직전 압박이 와야 비로소 집중이 되고 그때 오히려 잘 된다',
          'I only focus when deadline pressure hits—then I often do well.',
          '締切直前のプレッシャーでようやく集中でき、そのときかえってうまくいく。',
          '截止前才有压力感，那时才集中，反而做得不错。',
          '截止前才有壓力感，那時才集中，反而做得不錯。',
          'Chỉ khi sát hạn mới tập trung—khi đó tôi thường làm tốt.',
          'Baru fokus saat tekanan deadline—sering justru berhasil.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 2,
    question: M(
      '누군가 긴 이야기를 할 때 나는?',
      'When someone tells a long story, I…',
      '誰かが長い話をするとき、私は？',
      '别人讲很长一段话时，我会？',
      '別人講很長一段話時，我會？',
      'Khi ai đó kể chuyện dài, tôi…',
      'Saat seseorang bercerita panjang, saya…'
    ),
    options: [
      {
        text: M(
          '끝까지 잘 듣는 편이다. 집중해서 듣는 게 어렵지 않다',
          'I listen to the end. Staying focused isn’t hard.',
          '最後までよく聞ける。集中して聞くのは難しくない。',
          '能听完。专心听并不困难。',
          '能聽完。專心聽並不困難。',
          'Tôi nghe đến cuối. Tập trung nghe không khó.',
          'Saya mendengarkan sampai selesai. Fokus mendengarkan tidak sulit.'
        ),
        score: 0,
      },
      {
        text: M(
          '대부분 듣는데 가끔 다른 생각이 끼어드는 경우가 있다',
          'I mostly listen, but other thoughts slip in sometimes.',
          'だいたい聞いているが、ときどき別の考えが入り込む。',
          '多半在听，但有时会走神。',
          '多半在聽，但有時會走神。',
          'Phần lớn tôi nghe nhưng đôi khi nghĩ việc khác xen vào.',
          'Sebagian besar saya mendengarkan, kadang pikiran lain menyelinap.'
        ),
        score: 1,
      },
      {
        text: M(
          '중간쯤부터 내용이 흐릿해진다. 중요한 부분을 놓치는 경우가 있다',
          'From the middle on it gets fuzzy. I sometimes miss important parts.',
          '途中から内容がぼやける。大事なところを聞き逃すことがある。',
          '听到一半内容就变模糊，有时会漏掉重点。',
          '聽到一半內容就變模糊，有時會漏掉重點。',
          'Giữa chừng nội dung mờ đi, đôi khi bỏ lỡ phần quan trọng.',
          'Dari pertengahan isinya kabur, kadang melewatkan bagian penting.'
        ),
        score: 2,
      },
      {
        text: M(
          '듣는 척하면서 머릿속에 다른 생각이 동시에 돌아가고 있는 경우가 많다',
          'Often I pretend to listen while many other thoughts run in my head.',
          '聞いているふりをしながら、頭の中では別の考えが同時に回っていることが多い。',
          '表面在听，脑子里却同时在想很多事。',
          '表面在聽，腦子裡卻同時在想很多事。',
          'Thường vờ nghe trong khi đầu óc chạy song song nhiều ý khác.',
          'Sering pura-pura mendengar sementara banyak pikiran lain berputar.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 3,
    question: M(
      '물건을 잃어버리거나 약속을 깜빡하는 빈도는?',
      'How often do you lose things or forget plans?',
      '物をなくしたり約束を忘れたりする頻度は？',
      '丢东西或忘记约定的频率？',
      '丟東西或忘記約定的頻率？',
      'Bạn hay làm mất đồ hoặc quên lịch với mức độ nào?',
      'Seberapa sering Anda kehilangan barang atau lupa janji?'
    ),
    options: [
      {
        text: M(
          '거의 없다. 잃어버리거나 깜빡하는 일이 드물다',
          'Rarely. Losing things or forgetting is uncommon.',
          'ほとんどない。なくしたり忘れたりはめったにない。',
          '几乎没有。很少丢三落四或忘事。',
          '幾乎沒有。很少丟三落四或忘事。',
          'Hiếm. Hiếm khi làm mất hoặc quên.',
          'Jarang. Kehilangan atau lupa jarang terjadi.'
        ),
        score: 0,
      },
      {
        text: M(
          '가끔 있다. 심하진 않지만 종종 있다',
          'Sometimes. Not severe, but it happens.',
          'ときどきある。ひどくはないが、たまにある。',
          '偶尔。不算严重，但时有发生。',
          '偶爾。不算嚴重，但時有發生。',
          'Thỉnh thoảng. Không nặng nhưng vẫn có.',
          'Kadang. Tidak parah, tapi terjadi.'
        ),
        score: 1,
      },
      {
        text: M(
          '꽤 자주 있다. 핸드폰·지갑·열쇠를 자주 찾는다',
          'Fairly often. I often hunt for phone, wallet, or keys.',
          'かなりよくある。スマホ・財布・鍵をよく探す。',
          '挺经常。经常找手机、钱包、钥匙。',
          '挺經常。經常找手機、錢包、鑰匙。',
          'Khá thường xuyên. Hay tìm điện thoại, ví, chìa khóa.',
          'Cukup sering. Sering mencari ponsel, dompet, atau kunci.'
        ),
        score: 2,
      },
      {
        text: M(
          '매우 자주 있다. 오늘도 뭔가를 잃어버리거나 잊어버렸다',
          'Very often. Today I lost or forgot something again.',
          '非常によくある。今日も何かをなくしたり忘れたりした。',
          '非常频繁。今天也丢了或忘了什么。',
          '非常頻繁。今天也丟了或忘了什麼。',
          'Rất thường xuyên. Hôm nay cũng lại làm mất hoặc quên.',
          'Sangat sering. Hari ini pun ada yang hilang atau terlupa lagi.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 4,
    question: M(
      '지루하거나 흥미롭지 않은 일을 할 때 나는?',
      'When a task is boring or uninteresting, I…',
      '退屈で興味のないことをするとき、私は？',
      '做无聊或不感兴趣的事时，我会？',
      '做無聊或不感興趣的事時，我會？',
      'Khi việc nhàm chán hoặc không hứng thú, tôi…',
      'Saat tugas membosankan atau tidak menarik, saya…'
    ),
    options: [
      {
        text: M(
          '그냥 한다. 흥미와 무관하게 처리할 수 있다',
          'I just do it. I can handle it regardless of interest.',
          '普通にやる。興味がなくても処理できる。',
          '照样做。没兴趣也能处理。',
          '照樣做。沒興趣也能處理。',
          'Vẫn làm được. Không cần hứng thú vẫn xử lý được.',
          'Saya tetap mengerjakan. Bisa meski tidak tertarik.'
        ),
        score: 0,
      },
      {
        text: M(
          '의식적으로 집중하려 노력하는데 쉽지는 않다',
          'I try to focus on purpose, but it’s not easy.',
          '意識的に集中しようとするが、簡単ではない。',
          '会刻意集中，但并不容易。',
          '會刻意集中，但並不容易。',
          'Cố tập trung nhưng không dễ.',
          'Saya berusaha fokus, tapi tidak mudah.'
        ),
        score: 1,
      },
      {
        text: M(
          '자꾸 다른 것을 하게 되고 결국 미루거나 아주 느리게 한다',
          'I drift to other things and end up procrastinating or going very slowly.',
          'つい他のことをしてしまい、結局先延ばしか非常に遅くなる。',
          '总去做别的，最后拖延或做得很慢。',
          '總去做別的，最後拖延或做得很慢。',
          'Cứ chuyển sang việc khác, cuối cùng trì hoãn hoặc làm rất chậm.',
          'Mengalih ke hal lain, akhirnya menunda atau sangat lambat.'
        ),
        score: 2,
      },
      {
        text: M(
          '거의 불가능에 가깝다. 흥미 없는 건 시작 자체가 어렵다',
          'Almost impossible. If it’s not interesting, starting is hard.',
          'ほぼ無理。興味がないと始めること自体が難しい。',
          '几乎做不到。没兴趣的话连开始都很难。',
          '幾乎做不到。沒興趣的話連開始都很難。',
          'Gần như không được. Không hứng thú thì khó bắt đầu.',
          'Hampir mustahil. Tanpa minat, memulai saja sulit.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 5,
    question: M(
      '좋아하는 일이나 흥미로운 일을 할 때 나는?',
      'When I do something I like or find interesting, I…',
      '好きなことや興味深いことをするとき、私は？',
      '做喜欢的事或有趣的事时，我会？',
      '做喜歡的事或有趣的事時，我會？',
      'Khi làm việc mình thích hoặc thấy thú vị, tôi…',
      'Saat melakukan hal yang saya sukai atau menarik, saya…'
    ),
    options: [
      {
        text: M(
          '집중하는 편이지만 적당한 선에서 멈출 수 있다',
          'I focus, but I can stop at a reasonable point.',
          '集中するが、適度なところで止められる。',
          '会专注，但能在适当时候停下来。',
          '會專注，但能在適當時候停下來。',
          'Tập trung nhưng vẫn dừng được ở mức hợp lý.',
          'Saya fokus, tapi bisa berhenti pada titik wajar.'
        ),
        score: 0,
      },
      {
        text: M(
          '꽤 몰입하는 편이다. 시간 가는 줄 모를 때가 있다',
          'I get quite absorbed. Sometimes I lose track of time.',
          'かなり没入する。時間が経つのを忘れることがある。',
          '挺投入。有时会忘记时间。',
          '挺投入。有時會忘記時間。',
          'Khá đắm chìm. Đôi khi quên cả thời gian.',
          'Cukup larut. Kadang lupa waktu.'
        ),
        score: 1,
      },
      {
        text: M(
          '완전히 몰입해서 시간·밥·피로를 잊는 경우가 많다',
          'I’m fully immersed—often forget time, meals, or fatigue.',
          '完全に没入し、時間・食事・疲れを忘れることが多い。',
          '完全沉浸，常常忘了时间、吃饭或疲劳。',
          '完全沉浸，常常忘了時間、吃飯或疲勞。',
          'Chìm hoàn toàn—hay quên giờ, ăn, hoặc mệt.',
          'Sangat larut—sering lupa waktu, makan, atau lelah.'
        ),
        score: 2,
      },
      {
        text: M(
          '다른 모든 것을 제쳐두고 그것에만 빠져드는 과집중 상태가 된다',
          'I push everything else aside and hyperfocus on that alone.',
          '他のすべてを脇に置き、それだけに没入する過集中になる。',
          '把其他都推开，只对那一件事过度专注。',
          '把其他都推開，只對那一件事過度專注。',
          'Gạt hết sang một bên và chỉ chìm vào một thứ (hyperfocus).',
          'Mengesampingkan yang lain dan hanya larut pada satu hal (hiperfokus).'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 6,
    question: M(
      '대화 중 상대방 말이 끝나기 전에 내가 먼저 말하거나 끼어드는 경우는?',
      'How often do you speak or cut in before the other person finishes?',
      '会話で相手の話が終わる前に先に話したり割り込んだりするのは？',
      '对话时，你会在对方说完前先开口或插话吗？',
      '對話時，你會在對方說完前先開口或插話嗎？',
      'Bạn có hay nói hoặc chen người kia chưa nói xong không?',
      'Seberapa sering Anda berbicara atau menyela sebelum lawan bicara selesai?'
    ),
    options: [
      {
        text: M(
          '거의 없다. 상대방 말을 끝까지 듣는 편이다',
          'Almost never. I tend to listen until they finish.',
          'ほとんどない。相手の話を最後まで聞く。',
          '几乎没有。一般会听完对方说话。',
          '幾乎沒有。一般會聽完對方說話。',
          'Gần như không. Thường nghe đến hết.',
          'Hampir tidak pernah. Biasanya mendengarkan sampai selesai.'
        ),
        score: 0,
      },
      {
        text: M(
          '가끔 있다. 흥분하거나 공감될 때 의도치 않게 끼어들기도 한다',
          'Sometimes—when excited or moved, I cut in without meaning to.',
          'ときどきある。興奮や共感で、つい割り込むことがある。',
          '偶尔，兴奋或共鸣时会不小心插话。',
          '偶爾，興奮或共鳴時會不小心插話。',
          'Đôi khi—khi hào hứng hoặc đồng cảm—vô tình chen vào.',
          'Kadang—saat bersemangat atau terharu—saya menyela tanpa sengaja.'
        ),
        score: 1,
      },
      {
        text: M(
          '꽤 자주 있다. 하고 싶은 말이 생기면 참기 어려울 때가 있다',
          'Fairly often. When I want to say something, it’s hard to wait.',
          'かなりよくある。言いたいことがあると我慢しにくい。',
          '挺经常。有话想说时很难忍住。',
          '挺經常。有話想說時很難忍住。',
          'Khá thường xuyên. Muốn nói là khó nhịn.',
          'Cukup sering. Sulit menahan jika ingin berbicara.'
        ),
        score: 2,
      },
      {
        text: M(
          '자주 있다. 말이 앞서가는 편이고 나중에 후회하는 경우도 있다',
          'Often my words run ahead, and I regret it later.',
          'よくある。言葉が先に出がちで、あとで後悔することもある。',
          '经常话比脑子快，事后会后悔。',
          '經常話比腦子快，事後會後悔。',
          'Thường lời nói vượt trước, sau đó hối hận.',
          'Sering kata-kata mendahului, lalu menyesal.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 7,
    question: M(
      '여러 가지 일을 동시에 시작해두는 경향은?',
      'Do you tend to start many things at once?',
      'いろいろなことを同時に始めてしまう傾向は？',
      '你会同时开很多头吗？',
      '你會同時開很多頭嗎？',
      'Bạn có xu hướng bắt đầu nhiều việc cùng lúc không?',
      'Apakah Anda cenderung memulai banyak hal sekaligus?'
    ),
    options: [
      {
        text: M(
          '없다. 하나를 끝내고 다음 것을 시작하는 편이다',
          'No. I finish one thing, then start the next.',
          'ない。一つ終えてから次を始める。',
          '不会。一般会做完一件再开始下一件。',
          '不會。一般會做完一件再開始下一件。',
          'Không. Làm xong một việc rồi mới bắt đầu việc khác.',
          'Tidak. Selesaikan satu, lalu mulai berikutnya.'
        ),
        score: 0,
      },
      {
        text: M(
          '조금 있다. 몇 가지를 동시에 진행하기도 하지만 관리가 된다',
          'A little. I juggle a few at once but keep it under control.',
          '少しある。いくつか同時進行もするが、管理はできる。',
          '有一点。会同时进行几项，但还能管得住。',
          '有一點。會同時進行幾項，但還能管得住。',
          'Một chút. Làm vài việc song song nhưng vẫn kiểm soát được.',
          'Sedikit. Beberapa sekaligus, tapi masih terkendali.'
        ),
        score: 1,
      },
      {
        text: M(
          '있다. 여러 개를 동시에 벌여두는데 마무리가 안 되는 경우가 많다',
          'Yes. I open many at once and often don’t finish.',
          'ある。いくつも同時に始めて、仕上がらないことが多い。',
          '会。同时开很多头，常常收不了尾。',
          '會。同時開很多頭，常常收不了尾。',
          'Có. Mở nhiều việc cùng lúc, thường không xong.',
          'Ya. Banyak yang dibuka sekaligus, sering tidak selesai.'
        ),
        score: 2,
      },
      {
        text: M(
          '매우 있다. 항상 여러 프로젝트를 시작해두고 완성하지 못한 것들이 쌓여있다',
          'Very much. I always start projects and unfinished piles stack up.',
          '非常にある。いつも複数プロジェクトを始め、未完成が溜まる。',
          '非常严重。总是一堆项目开了头，未完成的事越堆越多。',
          '非常嚴重。總是一堆項目開了頭，未完成的事越堆越多。',
          'Rất nặng. Luôn bắt đầu nhiều dự án, việc dở đống lại.',
          'Sangat sering. Selalu mulai banyak proyek, menumpuk yang belum selesai.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 8,
    question: M(
      '줄을 서거나 기다려야 하는 상황에서 나는?',
      'When I have to wait in line or wait for something, I…',
      '列に並んだり待たなければならない状況で、私は？',
      '排队或等待时，我会？',
      '排隊或等待時，我會？',
      'Khi phải xếp hàng hoặc chờ đợi, tôi…',
      'Saat harus mengantre atau menunggu, saya…'
    ),
    options: [
      {
        text: M(
          '잘 기다린다. 기다리는 것이 크게 불편하지 않다',
          'I wait fine. Waiting doesn’t bother me much.',
          'よく待てる。待つことはそれほど苦ではない。',
          '能等。等待不太难受。',
          '能等。等待不太難受。',
          'Chờ được. Không thấy khó chịu lắm.',
          'Bisa menunggu. Tidak terlalu mengganggu.'
        ),
        score: 0,
      },
      {
        text: M(
          '조금 답답하지만 참을 수 있다. 폰을 보거나 다른 것을 하며 시간을 보낸다',
          'A bit restless but I can bear it—I scroll my phone or do something else.',
          '少しもどかしいが我慢できる。スマホを見たりして過ごす。',
          '有点闷但能忍，看手机或做点别的打发时间。',
          '有點悶但能忍，看手機或做點別的打發時間。',
          'Hơi bứt rứt nhưng chịu được—lướt điện thoại hoặc làm gì đó.',
          'Agak gelisah tapi bisa—main ponsel atau hal lain.'
        ),
        score: 1,
      },
      {
        text: M(
          '기다리는 게 꽤 힘들다. 불필요하게 시간을 쓰는 것 같아 답답하다',
          'Waiting is quite hard—it feels like wasted time.',
          '待つのがかなりつらい。無駄に時間を使っているように感じる。',
          '挺难熬。觉得在白白浪费时间。',
          '挺難熬。覺得在白白浪費時間。',
          'Chờ khá khó—cảm giác lãng phí thời gian.',
          'Menunggu cukup berat—terasa membuang waktu.'
        ),
        score: 2,
      },
      {
        text: M(
          '매우 힘들다. 기다리는 상황 자체가 강한 스트레스로 느껴진다',
          'Very hard. Waiting itself feels strongly stressful.',
          '非常につらい。待つ状況自体が強いストレスに感じる。',
          '非常难受。等待本身就是很强的压力。',
          '非常難受。等待本身就是很強的壓力。',
          'Rất khó. Chờ đợi là stress mạnh.',
          'Sangat sulit. Menunggu saja sudah sangat stres.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 9,
    question: M(
      '해야 할 일을 시작하는 것에 대한 나의 패턴은?',
      'My pattern for starting tasks I need to do is…',
      'やるべきことを始めることについて、私のパターンは？',
      '面对该做的事，我的启动方式是？',
      '面對該做的事，我的啟動方式是？',
      'Với việc cần làm, kiểu bắt đầu của tôi là…',
      'Pola saya memulai tugas yang harus dikerjakan adalah…'
    ),
    options: [
      {
        text: M(
          '해야 할 일이 생기면 비교적 빠르게 시작할 수 있다',
          'When something needs doing, I can start relatively quickly.',
          'やることができると、比較的すぐに始められる。',
          '有事要做时，能比较快开始。',
          '有事要做時，能比較快開始。',
          'Khi có việc, tôi bắt đầu tương đối nhanh.',
          'Saat ada tugas, saya bisa mulai relatif cepat.'
        ),
        score: 0,
      },
      {
        text: M(
          '조금 미루는 편이지만 결국 제때 하는 편이다',
          'I procrastinate a bit but usually get it done on time.',
          '少し先延ばしだが、最終的には間に合う。',
          '会拖一点，但一般能按时做完。',
          '會拖一點，但一般能按時做完。',
          'Hơi trì hoãn nhưng cuối cùng vẫn kịp.',
          'Sedikit menunda tapi biasanya tetap tepat waktu.'
        ),
        score: 1,
      },
      {
        text: M(
          '시작이 어렵다. 막상 앉아도 시작 버튼을 누르는 데 시간이 걸린다',
          'Starting is hard. Even when I sit down, pressing “start” takes time.',
          '始めるのが難しい。座っても「スタート」に時間がかかる。',
          '很难开始。坐下了也要很久才真正动手。',
          '很難開始。坐下了也要很久才真正動手。',
          'Khó bắt đầu. Đã ngồi xuống vẫn mất lâu mới “bấm nút”.',
          'Sulit memulai. Sudah duduk pun butuh waktu untuk benar-benar mulai.'
        ),
        score: 2,
      },
      {
        text: M(
          '시작 자체가 큰 장벽이다. 앉아서 준비만 하다가 시간이 다 가는 경우가 있다',
          'Starting is a big barrier—I only “prepare” and time runs out.',
          '始めること自体が大きな壁。準備ばかりで時間がなくなることがある。',
          '开始本身就是大障碍，只在做准备，时间就没了。',
          '開始本身就是大障礙，只在做準備，時間就沒了。',
          'Bắt đầu là rào cản lớn—chỉ chuẩn bị mà hết giờ.',
          'Memulai adalah hambatan besar—hanya “mempersiapkan” lalu waktu habis.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 10,
    question: M(
      '감정 조절에 대한 나의 패턴은?',
      'My pattern with emotion regulation is…',
      '感情のコントロールについて、私のパターンは？',
      '情绪调节方面，我的情况是？',
      '情緒調節方面，我的情況是？',
      'Về điều tiết cảm xúc, kiểu của tôi là…',
      'Pola regulasi emosi saya adalah…'
    ),
    options: [
      {
        text: M(
          '비교적 안정적이다. 감정이 크게 요동치는 경우가 드물다',
          'Relatively stable. Big emotional swings are rare.',
          '比較的安定。感情が大きく揺れることはめったにない。',
          '比较稳定。情绪大起大落很少。',
          '比較穩定。情緒大起大落很少。',
          'Tương đối ổn định. Hiếm khi cảm xúc dao động mạnh.',
          'Relatif stabil. Jarang emosi melonjak drastis.'
        ),
        score: 0,
      },
      {
        text: M(
          '감정 기복이 있는 편이지만 관리가 되는 수준이다',
          'My mood shifts, but it stays manageable.',
          '気分の起伏はあるが、管理できる範囲。',
          '会有情绪波动，但还在可控范围。',
          '會有情緒波動，但還在可控範圍。',
          'Có thăng trầm nhưng vẫn kiểm soát được.',
          'Ada naik turun tapi masih bisa dikelola.'
        ),
        score: 1,
      },
      {
        text: M(
          '작은 자극에도 감정이 크게 반응하거나 예민해지는 경우가 있다',
          'Small triggers can set off big reactions or make me very sensitive.',
          '小さな刺激にも感情が大きく反応したり敏感になることがある。',
          '小刺激也会情绪反应很大或变得很敏感。',
          '小刺激也會情緒反應很大或變得很敏感。',
          'Kích nhỏ cũng phản ứng mạnh hoặc trở nên nhạy cảm.',
          'Rangsang kecil bisa memicu reaksi besar atau sangat sensitif.'
        ),
        score: 2,
      },
      {
        text: M(
          '감정이 매우 강하게 올라오거나 반대로 무감각해지는 경우가 있다',
          'Emotions surge very strongly—or I go numb the other way.',
          '感情が非常に強く出るか、逆に無感覚になることがある。',
          '情绪要么特别强烈，要么反而麻木。',
          '情緒要麼特別強烈，要麼反而麻木。',
          'Cảm xúc dâng rất mạnh—hoặc ngược lại tê liệt.',
          'Emosi sangat kuat—atau sebaliknya mati rasa.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 11,
    question: M(
      '머릿속 상태를 가장 잘 표현한 것은?',
      'What best describes the state of your mind?',
      '頭の中の状態をいちばんよく表すのは？',
      '哪种描述最符合你大脑里的状态？',
      '哪種描述最符合你大腦裡的狀態？',
      'Điều nào mô tả đúng nhất trạng thái trong đầu bạn?',
      'Apa yang paling menggambarkan keadaan pikiran Anda?'
    ),
    options: [
      {
        text: M(
          '조용하고 정리된 편이다. 한 번에 하나씩 처리하는 느낌이다',
          'Quiet and tidy. I handle one thing at a time.',
          '静かで整理されている。一つずつ処理する感じ。',
          '安静、有条理。一次处理一件事的感觉。',
          '安靜、有條理。一次處理一件事的感覺。',
          'Yên và gọn. Xử lý từng việc một.',
          'Tenang dan rapi. Menangani satu per satu.'
        ),
        score: 0,
      },
      {
        text: M(
          '활동적이고 여러 생각이 돌아가지만 어느 정도 관리가 된다',
          'Active—many thoughts spin, but I manage them somewhat.',
          '活発でいろいろ考えが回るが、ある程度は管理できる。',
          '很活跃，想法多，但还能管一管。',
          '很活躍，想法多，但還能管一管。',
          'Nhiều ý nhưng vẫn kiểm soát phần nào.',
          'Banyak pikiran berputar, tapi masih bisa dikelola.'
        ),
        score: 1,
      },
      {
        text: M(
          '동시에 많은 생각이 돌아가는 편이다. 조용히 있는 게 오히려 어색하다',
          'Many thoughts at once. Sitting quietly actually feels awkward.',
          '同時にたくさんの考え。静かにしている方がむしろ落ち着かない。',
          '同时很多念头在转。安静待着反而不自在。',
          '同時很多念頭在轉。安靜待著反而不自在。',
          'Nhiều suy nghĩ cùng lúc. Yên lặng lại thấy kỳ.',
          'Banyak pikiran sekaligus. Diam malah terasa canggung.'
        ),
        score: 2,
      },
      {
        text: M(
          '항상 무언가가 돌아가고 있다. 머릿속이 조용한 적이 거의 없다',
          'Something is always running. My mind is almost never quiet.',
          'いつも何かが回っている。頭の中が静かなことはほとんどない。',
          '脑子里总在转。几乎没有真正安静的时候。',
          '腦子裡總在轉。幾乎沒有真正安靜的時候。',
          'Luôn có gì đó chạy. Hiếm khi đầu óc thật sự yên.',
          'Selalu ada yang berputar. Pikiran jarang benar-benar tenang.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 12,
    question: M(
      '지금까지 살면서 가장 자주 들어온 말은?',
      'What have people most often said about you?',
      '今までの人生でいちばんよく言われてきたことは？',
      '从小到大，别人最常说你什么？',
      '從小到大，別人最常說你什麼？',
      'Người khác thường nói về bạn điều gì nhất?',
      'Apa yang paling sering orang katakan tentang Anda?'
    ),
    options: [
      {
        text: M(
          '"신중하다", "꼼꼼하다", "계획적이다"',
          '“Thoughtful,” “meticulous,” “planned.”',
          '「慎重」「細かい」「計画的」',
          '“谨慎”“细心”“有计划”',
          '「謹慎」「細心」「有計畫」',
          '“Cẩn thận,” “tỉ mỉ,” “có kế hoạch.”',
          '“Bijaksana,” “teliti,” “terencana.”'
        ),
        score: 0,
      },
      {
        text: M(
          '"활발하다", "에너지 넘친다", "다재다능하다"',
          '“Active,” “full of energy,” “multitalented.”',
          '「活発」「エネルギッシュ」「多才」',
          '“活泼”“精力充沛”“多才多艺”',
          '「活潑」「精力充沛」「多才多藝」',
          '“Năng động,” “tràn năng lượng,” “đa tài.”',
          '“Aktif,” “berenergi,” “serba bisa.”'
        ),
        score: 1,
      },
      {
        text: M(
          '"산만하다", "정신없다", "맨날 딴 생각한다"',
          '“Scattered,” “all over the place,” “always daydreaming.”',
          '「落ち着きがない」「上の空」「いつもよそ見」',
          '“心不在焉”“没精神”“老走神”',
          '「心不在焉」「沒精神」「老走神」',
          '“Thất thường,” “đầu óc đâu đâu,” “hay mơ màng.”',
          '“Kusut,” “tidak fokus,” “sering melamun.”'
        ),
        score: 2,
      },
      {
        text: M(
          '"왜 이렇게 덤벙대냐", "집중 좀 해라", "이미 말했잖아"',
          '“Why so clumsy?” “Focus!” “I already told you.”',
          '「なんでそんなにドジなの」「集中しろ」「さっき言っただろ」',
          '“怎么这么毛躁”“专心点”“我说过多少遍了”',
          '「怎麼這麼毛躁」「專心點」「我說過多少遍了」',
          '“Sao lúng túng vậy?” “Tập trung đi!” “Tôi đã nói rồi mà.”',
          '“Kenapa ceroboh?” “Fokus!” “Sudah kubilang.”'
        ),
        score: 3,
      },
    ],
  },
];

export const phase3AdhdTendencyChecklistResults: Phase3AdhdTendencyChecklistResult[] = [
  {
    type: 'Type1',
    emoji: '🟢',
    title: M(
      '집중력 패턴이 안정적인, 주의 조절 안정형 🟢',
      'Stable attention pattern — regulated focus type 🟢',
      '集中パターンが安定、注意コントロール安定型 🟢',
      '注意力模式较稳定——调节良好型 🟢',
      '注意力模式較穩定——調節良好型 🟢',
      'Mẫu tập trung ổn định — kiểu kiểm soát chú ý tốt 🟢',
      'Pola fokus stabil — tipe regulasi perhatian baik 🟢'
    ),
    shortDescription: M(
      '체크리스트 결과: 집중력 패턴이 비교적 안정적입니다',
      'Checklist result: Your focus pattern looks relatively stable.',
      'チェックリスト結果：集中パターンは比較的安定しています',
      '测评结果：你的注意力模式相对较稳定。',
      '測評結果：你的注意力模式相對較穩定。',
      'Kết quả: Mẫu tập trung của bạn tương đối ổn định.',
      'Hasil: Pola fokus Anda relatif stabil.'
    ),
    description: M(
      '「일반적인 집중력 패턴 범위 안에 있습니다. 주의 조절이 비교적 잘 되는 편입니다。」\n\n해야 할 일을 순서대로 처리하고 물건을 잃어버리거나 약속을 깜빡하는 일이 드물며 감정도 비교적 안정적인 패턴을 가지고 있습니다. 현재 ADHD 성향의 주요 지표들이 낮게 나타났습니다.',
      'You fall within a typical range for focus, and attention regulation works fairly well for you.\n\nYou tend to handle tasks in order, rarely lose things or forget plans, and your emotions are relatively stable. On this checklist, markers associated with ADHD-like traits are low.',
      '「一般的な集中の範囲にあり、注意のコントロールは比較的うまくいっています。」\n\nやるべきことを順番にこなし、物をなくしたり約束を忘れたりすることは少なく、感情も比較的安定しています。ADHD傾向の主要指標は低めです。',
      '「你的专注力在一般范围内，注意调节也相对顺畅。」\n\n你能按顺序处理事务，较少丢三落四或忘约，情绪也相对平稳。本测评中与 ADHD 相关倾向的指标较低。',
      '「你的專注力在一般範圍內，注意調節也相對順暢。」\n\n你能按順序處理事務，較少丟三落四或忘約，情緒也相對平穩。本測評中與 ADHD 相關傾向的指標較低。',
      'Bạn nằm trong phạm vi tập trung bình thường và điều tiết chú ý khá tốt.\n\nBạn xử lý việc theo thứ tự, hiếm khi làm mất đồ hoặc quên hẹn, cảm xúc cũng khá ổn. Các chỉ báo liên quan kiểu ADHD trên bảng kiểm này thấp.',
      'Anda dalam rentang fokus umum dan regulasi perhatian cukup baik.\n\nAnda menangani tugas berurutan, jarang kehilangan barang atau lupa janji, emosi relatif stabil. Pada daftar ini, indikator mirip ADHD rendah.'
    ),
    lifeImpact: M(
      '• 체크리스트 점수: 낮음\n• 집중력 패턴: 안정적\n• 충동성 수준: 낮음\n• 이 결과의 의미: 체크리스트상 ADHD 성향 지표가 높지 않습니다',
      '• Score: Low\n• Focus pattern: Stable\n• Impulsivity: Low\n• Meaning: Few ADHD-like indicators on this checklist.',
      '• スコア：低め\n• 集中パターン：安定\n• 衝動性：低め\n• 意味：このチェックリスト上、ADHD傾向の指標は高くありません',
      '• 得分：低\n• 注意力模式：稳定\n• 冲动性：低\n• 含义：本清单上 ADHD 相关倾向指标不高',
      '• 得分：低\n• 注意力模式：穩定\n• 衝動性：低\n• 含義：本清單上 ADHD 相關傾向指標不高',
      '• Điểm: Thấp\n• Mẫu tập trung: Ổn định\n• Xung động: Thấp\n• Ý nghĩa: Ít chỉ báo kiểu ADHD trên bảng này.',
      '• Skor: Rendah\n• Pola fokus: Stabil\n• Impulsivitas: Rendah\n• Arti: Indikator mirip ADHD pada daftar ini tidak tinggi.'
    ),
    workStyle: M(
      '집중력이 안정적이라도 수면 부족·스트레스·번아웃이 집중력을 일시적으로 저하시킬 수 있습니다',
      'Even with stable focus, lack of sleep, stress, or burnout can briefly lower concentration.',
      '集中が安定していても、睡眠不足・ストレス・燃え尽きで一時的に集中が落ちることがあります',
      '即使注意力稳定，睡眠不足、压力或倦怠也会暂时拉低专注力。',
      '即使注意力穩定，睡眠不足、壓力或倦怠也會暫時拉低專注力。',
      'Dù tập trung ổn, thiếu ngủ, căng thẳng hay kiệt sức vẫn có thể làm giảm tập trung tạm thời.',
      'Meski fokus stabil, kurang tidur, stres, atau burnout dapat menurunkan konsentrasi sementara.'
    ),
    relationshipStyle: M(
      '이 결과가 맞지 않다고 느낀다면: 사람마다 상황에 따라 집중력 패턴이 다릅니다. 특정 상황에서만 어려움이 나타난다면 전문가 상담을 통해 더 정확하게 확인할 수 있습니다',
      'If this doesn’t feel right: focus patterns vary by person and situation. If difficulties only show up in certain contexts, a professional can help you understand more accurately.',
      'この結果がしっくりこない場合：人によって状況によって集中の仕方は違います。特定の場面だけでつらいなら、専門家に相談して確認する価値があります。',
      '若你觉得结果不准：每个人的专注力会因情境而异。若只在特定情境有困难，可透过专业咨询更清楚了解。',
      '若你覺得結果不準：每個人的專注力會因情境而異。若只在特定情境有困難，可透過專業諮詢更清楚了解。',
      'Nếu thấy không khớp: mẫu tập trung khác nhau theo người và tình huống. Nếu chỉ khó ở một số bối cảnh, chuyên gia có thể giúp làm rõ hơn.',
      'Jika tidak cocok: pola fokus berbeda per orang dan situasi. Jika kesulitan hanya di konteks tertentu, konsultasi profesional dapat membantu.'
    ),
    messageToYou: E(),
    recommendedDirection: E(),
    empathyLevel: M(
      '0~5점 구간 · 낮음',
      'Range 0–5 · Low',
      '0〜5点帯・低め',
      '0~5 分区间 · 低',
      '0~5 分區間 · 低',
      'Khoảng 0–5 · Thấp',
      'Rentang 0–5 · Rendah'
    ),
    characteristics: M(
      '체크리스트 점수 낮음, 집중력 패턴 안정적, 충동성 낮음',
      'Low checklist score, stable focus pattern, low impulsivity',
      'スコア低め、集中パターン安定、衝動性低め',
      '清单得分低，注意力模式稳定，冲动性低',
      '清單得分低，注意力模式穩定，衝動性低',
      'Điểm thấp, mẫu tập trung ổn, xung động thấp',
      'Skor rendah, pola fokus stabil, impulsivitas rendah'
    ),
    goodMatch: E(),
    badMatch: E(),
  },
  {
    type: 'Type2',
    emoji: '🟡',
    title: M(
      '상황에 따라 달라지는, 상황 의존 집중형 🟡',
      'Situation-dependent focus — interest & context drive attention 🟡',
      '状況によって変わる、状況依存の集中型 🟡',
      '随情境而变——兴趣与环境型专注 🟡',
      '隨情境而變——興趣與環境型專注 🟡',
      'Phụ thuộc tình huống — hứng thú & bối cảnh chi phối 🟡',
      'Bergantung situasi — minat & konteks mengarahkan fokus 🟡'
    ),
    shortDescription: M(
      '체크리스트 결과: 흥미와 환경에 따라 집중력 차이가 납니다',
      'Checklist result: Focus varies with interest and environment.',
      'チェックリスト結果：興味や環境によって集中の差が出ます',
      '测评结果：专注力会随兴趣与环境变化。',
      '測評結果：專注力會隨興趣與環境變化。',
      'Kết quả: Mức tập trung thay đổi theo hứng thú và môi trường.',
      'Hasil: Fokus berbeda menurut minat dan lingkungan.'
    ),
    description: M(
      '「흥미 있는 일에는 집중이 잘 되지만 그렇지 않은 일에서는 어려움이 생기는 패턴입니다。」\n\n관심 없는 일을 할 때 집중이 어렵거나 가끔 물건을 잃어버리거나 미루는 경향이 있지만 일상생활이 크게 방해받는 수준은 아닙니다. 많은 사람들이 경험하는 수준의 집중력 패턴입니다.',
      'You focus well on interesting tasks but struggle more with boring ones.\n\nYou may find it hard to concentrate on things you don’t care about, and sometimes lose things or procrastinate—but daily life isn’t severely disrupted. This is a common pattern many people share.',
      '「興味のあることには集中できるが、そうでないことではつらくなるパターンです。」\n\n興味のない作業では集中しづらく、ときどき物をなくしたり先延ばししたりしますが、日常生活が大きく妨げられるほどではありません。多くの人が経験するレベルです。',
      '「有兴趣的事能专注，没兴趣的事就更吃力。」\n\n做不感兴趣的事时较难集中，偶尔也会丢三落四或拖延，但日常生活尚不致严重受影响。这是很多人常见的模式。',
      '「有興趣的事能專注，沒興趣的事就更吃力。」\n\n做不感興趣的事時較難集中，偶爾也會丟三落四或拖延，但日常生活尚不致嚴重受影響。這是很多人常見的模式。',
      'Bạn tập trung tốt việc thú vị nhưng khó hơn với việc nhàm chán.\n\nĐôi khi làm mất đồ hoặc trì hoãn, nhưng đời sống hàng ngày không bị ảnh hưởng nặng. Đây là mẫu khá phổ biến.',
      'Anda fokus baik pada hal menarik, lebih sulit pada hal membosankan.\n\nKadang kehilangan barang atau menunda, tetapi kehidupan sehari-hari tidak terganggu berat. Pola ini umum.'
    ),
    lifeImpact: M(
      '• 체크리스트 점수: 보통\n• 집중력 패턴: 상황 의존적\n• 충동성 수준: 중간\n• 이 결과의 의미: 일부 ADHD 성향 지표가 나타나지만 일상적인 범위 내에 있을 가능성이 높습니다',
      '• Score: Moderate\n• Focus: Situation-dependent\n• Impulsivity: Moderate\n• Meaning: Some ADHD-like signs, likely within everyday range.',
      '• スコア：普通\n• 集中：状況依存\n• 衝動性：中程度\n• 意味：ADHD傾向の一部はあるが、日常の範囲内の可能性が高い',
      '• 得分：中等\n• 注意力：情境依赖\n• 冲动性：中等\n• 含义：出现一些相关倾向，多半仍在日常可接受范围',
      '• 得分：中等\n• 注意力：情境依賴\n• 衝動性：中等\n• 含義：出現一些相關傾向，多半仍在日常可接受範圍',
      '• Điểm: Trung bình\n• Tập trung: Phụ thuộc tình huống\n• Xung động: Trung bình\n• Ý nghĩa: Có vài dấu hiệu, khả năng cao vẫn trong phạm vi đời thường.',
      '• Skor: Sedang\n• Fokus: Bergantung situasi\n• Impulsivitas: Sedang\n• Arti: Ada beberapa tanda, kemungkinan besar masih dalam rentang normal.'
    ),
    workStyle: M(
      '집중 환경을 만드는 것이 도움이 됩니다. 타이머 활용, 방해 요소 제거, 흥미 요소 추가 등의 전략이 효과적입니다',
      'Building a focus-friendly environment helps: timers, removing distractions, adding interest cues.',
      '集中しやすい環境づくりが有効です。タイマー、妨害の除去、興味を引く工夫など。',
      '营造有助专注的环境会有帮助：计时器、减少干扰、增加趣味元素等。',
      '營造有助專注的環境會有幫助：計時器、減少干擾、增加趣味元素等。',
      'Tạo môi trường hỗ trợ tập trung: hẹn giờ, bớt xao nhãng, thêm yếu tố thú vị.',
      'Lingkungan mendukung fokus membantu: timer, kurangi gangguan, tambah elemen menarik.'
    ),
    relationshipStyle: M(
      '더 알고 싶다면: 증상이 지속되거나 일상에 영향을 미친다면 전문가 상담을 고려해보세요',
      'If symptoms persist or affect daily life, consider talking to a professional.',
      '症状が続く、日常生活に影響するなら、専門家への相談を検討してください。',
      '若症状持续或影响生活，建议考虑专业咨询。',
      '若症狀持續或影響生活，建議考慮專業諮詢。',
      'Nếu triệu chứng kéo dài hoặc ảnh hưởng sinh hoạt, hãy cân nhắc chuyên gia.',
      'Jika gejala berlanjut atau mengganggu aktivitas, pertimbangkan konsultasi profesional.'
    ),
    messageToYou: E(),
    recommendedDirection: E(),
    empathyLevel: M(
      '6~11점 구간 · 보통',
      'Range 6–11 · Moderate',
      '6〜11点帯・普通',
      '6~11 分区间 · 中等',
      '6~11 分區間 · 中等',
      'Khoảng 6–11 · Trung bình',
      'Rentang 6–11 · Sedang'
    ),
    characteristics: M(
      '체크리스트 점수 보통, 집중력 패턴 상황 의존적, 충동성 중간',
      'Moderate score, situation-dependent focus, moderate impulsivity',
      'スコア普通、状況依存の集中、衝動性は中程度',
      '得分中等，情境依赖型专注，冲动性中等',
      '得分中等，情境依賴型專注，衝動性中等',
      'Điểm trung bình, tập trung phụ thuộc tình huống, xung động trung bình',
      'Skor sedang, fokus bergantung situasi, impulsivitas sedang'
    ),
    goodMatch: E(),
    badMatch: E(),
  },
  {
    type: 'Type3',
    emoji: '🟠',
    title: M(
      '집중이 들쑥날쑥한, 주의 분산 경향형 🟠',
      'Scattered attention — frequent distraction & procrastination 🟠',
      '集中が不安定、注意が散りやすいタイプ 🟠',
      '注意力起伏大——易分心、拖延型 🟠',
      '注意力起伏大——易分心、拖延型 🟠',
      'Tập trung thất thường — dễ xao nhãng, trì hoãn 🟠',
      'Fokus naik turun — mudah teralih dan menunda 🟠'
    ),
    shortDescription: M(
      '체크리스트 결과: 주의가 자주 분산되고 미루는 패턴이 반복됩니다',
      'Checklist result: Attention drifts often; procrastination repeats.',
      'チェックリスト結果：注意が散りやすく、先延ばしのパターンが繰り返されます',
      '测评结果：注意力常分散，拖延模式反复出现。',
      '測評結果：注意力常分散，拖延模式反覆出現。',
      'Kết quả: Chú ý hay tản mạn; lặp lại trì hoãn.',
      'Hasil: Perhatian sering terpecah; pola penundaan berulang.'
    ),
    description: M(
      '「중요한 일을 미루고, 여러 가지를 동시에 시작하고, 마무리에 어려움을 겪는 패턴이 나타납니다。」\n\n해야 할 일이 있어도 시작이 어렵고 흥미 없는 일은 거의 처리하기 어렵고 여러 일을 동시에 벌여두는 경향이 있습니다. 이 패턴이 일상적으로 반복된다면 삶의 질에 영향을 주고 있을 수 있습니다.',
      'You put off important tasks, start many things at once, and struggle to finish.\n\nStarting is hard even when you “should”; boring tasks feel almost impossible, and several projects stay open at once. If this repeats in daily life, it may be affecting your quality of life.',
      '「大事なことを先延ばしにし、いろいろ同時に始めて、仕上げに苦しむパターンです。」\n\nやるべきことがあっても始めにくく、興味のないことはほとんど進まず、複数を同時に抱えがちです。日常で繰り返すなら、生活の質に影響している可能性があります。',
      '「重要的事会拖、同时开很多头、收尾困难。」\n\n该做的事也难启动，没兴趣的几乎做不下去，同时堆着好几件事。若在日常生活中反复出现，可能影响生活品质。',
      '「重要的事會拖、同時開很多頭、收尾困難。」\n\n該做的事也難啟動，沒興趣的幾乎做不下去，同時堆著好幾件事。若在日常生活中反覆出現，可能影響生活品質。',
      'Bạn trì hoàn việc quan trọng, mở nhiều việc cùng lúc, khó hoàn thành.\n\nKhó bắt đầu dù “phải làm”; việc chán gần như không làm nổi; nhiều việc dang dở. Nếu lặp lại hàng ngày, có thể ảnh hưởng chất lượng sống.',
      'Anda menunda hal penting, membuka banyak sekaligus, sulit menyelesaikan.\n\nMulai sulit meski “harus”; tugas membosankan hampir mustahil; banyak proyek menggantung. Jika berulang, bisa memengaruhi kualitas hidup.'
    ),
    lifeImpact: M(
      '• 체크리스트 점수: 중간 이상\n• 집중력 패턴: 분산 경향\n• 충동성 수준: 중간~높음\n• 이 결과의 의미: 여러 ADHD 성향 지표가 나타납니다. 이것이 ADHD를 의미하지는 않지만 전문가 상담을 통해 확인해볼 가치가 있습니다',
      '• Score: Mid–high\n• Focus: Scattered tendency\n• Impulsivity: Mid–high\n• Meaning: Several ADHD-like markers appear—not a diagnosis, but worth exploring with a clinician.',
      '• スコア：中以上\n• 集中：分散傾向\n• 衝動性：中〜高\n• 意味：ADHD傾向の指標が複数。診断ではないが、専門家に確認する価値あり',
      '• 得分：中上\n• 注意力：分散倾向\n• 冲动性：中~高\n• 含义：出现多项相关指标——不等于诊断，但值得与专业人员讨论',
      '• 得分：中上\n• 注意力：分散傾向\n• 衝動性：中~高\n• 含義：出現多項相關指標——不等於診斷，但值得與專業人員討論',
      '• Điểm: Trung–cao\n• Tập trung: Phân tán\n• Xung động: Trung–cao\n• Ý nghĩa: Nhiều chỉ báo kiểu ADHD—không phải chẩn đoán, nên trao đổi chuyên gia.',
      '• Skor: Menengah–tinggi\n• Fokus: Cenderung terpecah\n• Impulsivitas: Menengah–tinggi\n• Arti: Beberapa tanda mirip ADHD—bukan diagnosis; diskusikan dengan profesional.'
    ),
    workStyle: M(
      '작은 단위로 과제를 쪼개기, 포모도로 기법(25분 집중·5분 휴식), 외부 구조(알람·투두리스트) 활용이 도움됩니다',
      'Break tasks into small steps, try Pomodoro (25 min focus / 5 min break), use alarms and to-do lists as external structure.',
      '課題を小さく分ける、ポモドーロ（25分集中・5分休憩）、アラームやToDoで外的な枠を使うと助かります。',
      '把任务拆小、番茄钟（25 分钟专注/5 分钟休息）、用闹钟和清单建立外部结构。',
      '把任務拆小、番茄鐘（25 分鐘專注/5 分鐘休息）、用鬧鐘和清單建立外部結構。',
      'Chia nhỏ nhiệm vụ, Pomodoro (25’/5’), dùng báo thức và danh sách việc.',
      'Pecah tugas kecil, Pomodoro (25 mnt/5 mnt), alarm dan daftar tugas.'
    ),
    relationshipStyle: M(
      '증상이 학업·직장·관계에서 반복적으로 어려움을 유발한다면 정신건강의학과 상담을 추천합니다',
      'If this repeatedly causes trouble at school, work, or relationships, consider seeing a psychiatrist or mental health specialist.',
      '学業・仕事・人間関係で繰り返し困るなら、精神科・心療内科の相談をおすすめします。',
      '若在学业、职场或关系中反复造成困扰，建议咨询精神心理相关专科。',
      '若在學業、職場或關係中反覆造成困擾，建議諮詢精神心理相關專科。',
      'Nếu lặp lại gây khó ở học tập, công việc, hoặc quan hệ, nên gặp chuyên khoa tâm thần/sức khỏe tâm thần.',
      'Jika berulang mengganggu sekolah, kerja, atau relasi, pertimbangkan psikiatri atau kesehatan mental.'
    ),
    messageToYou: E(),
    recommendedDirection: E(),
    empathyLevel: M(
      '12~19점 구간 · 중간 이상',
      'Range 12–19 · Mid–high',
      '12〜19点帯・中以上',
      '12~19 分区间 · 中上',
      '12~19 分區間 · 中上',
      'Khoảng 12–19 · Trung–cao',
      'Rentang 12–19 · Menengah–tinggi'
    ),
    characteristics: M(
      '체크리스트 점수 중간 이상, 집중력 분산 경향, 충동성 중간~높음',
      'Mid–high score, scattered focus, mid–high impulsivity',
      'スコア中以上、集中は分散傾向、衝動性は中〜高',
      '得分中上，注意力易分散，冲动性中~高',
      '得分中上，注意力易分散，衝動性中~高',
      'Điểm trung–cao, tập trung phân tán, xung động trung–cao',
      'Skor menengah–tinggi, fokus terpecah, impulsivitas menengah–tinggi'
    ),
    goodMatch: E(),
    badMatch: E(),
  },
  {
    type: 'Type4',
    emoji: '🔶',
    title: M(
      '과집중과 산만함이 공존하는, 양극 집중 패턴형 🔶',
      'Hyperfocus meets scatter — polarized attention pattern 🔶',
      '過集中と散漫が共存する、両極の集中パターン型 🔶',
      '过度专注与分心并存——两极化专注型 🔶',
      '過度專注與分心並存——兩極化專注型 🔶',
      'Hyperfocus và phân tán cùng lúc — kiểu cực đoan 🔶',
      'Hiperfokus dan perhatian terpecah — pola polar 🔶'
    ),
    shortDescription: M(
      '체크리스트 결과: 흥미 있는 일에는 과집중, 그 외에는 집중이 매우 어렵습니다',
      'Checklist result: Hyperfocus on interesting tasks; very hard focus otherwise.',
      'チェックリスト結果：興味のあることには過集中、それ以外は集中が非常に難しい',
      '测评结果：有兴趣的事会过度专注，其他事则很难集中。',
      '測評結果：有興趣的事會過度專注，其他事則很難集中。',
      'Kết quả: Quá tập trung việc thích; việc khác rất khó tập trung.',
      'Hasil: Hiperfokus pada hal menarik; selain itu sangat sulit fokus.'
    ),
    description: M(
      '「좋아하는 것에는 시간·밥·수면을 잊을 정도로 몰입하지만 그렇지 않은 일에는 시작 자체가 어렵습니다。」\n\n이 극단적인 집중력의 양극화 패턴은 ADHD의 주요 특성 중 하나인 과집중(Hyperfocus)과 주의 분산이 동시에 나타나는 것입니다. 이 패턴이 일상·학업·직장에서 반복적으로 어려움을 만들고 있다면 전문가 확인이 권장됩니다.',
      'On things you love, you can forget time, food, or sleep—but starting anything else feels nearly impossible.\n\nThis “all or nothing” pattern matches hyperfocus plus scattered attention, both commonly discussed in ADHD. If it repeatedly causes problems in daily life, school, or work, a professional evaluation is recommended.',
      '「好きなことには時間・食事・睡眠を忘れるほど没入するが、それ以外は始めること自体が難しい。」\n\nこの両極パターンは、過集中と注意散漫が同時に現れる例です。日常・学業・仕事で繰り返し困るなら、専門家の評価が推奨されます。',
      '「喜欢的事会沉浸到忘了时间、吃饭、睡觉；不喜欢的事几乎开不了头。」\n\n这种两极模式与「过度专注」和「注意力分散」同时出现的情况相符。若在学习、工作或生活中反复造成困难，建议寻求专业评估。',
      '「喜歡的事會沉浸到忘了時間、吃飯、睡覺；不喜歡的事幾乎開不了頭。」\n\n這種兩極模式與「過度專注」和「注意力分散」同時出現的情況相符。若在學習、工作或生活中反覆造成困難，建議尋求專業評估。',
      'Việc yêu thích: quên giờ, ăn, ngủ; việc khác: khó bắt đầu.\n\nMẫu cực đoan này gợi ý hyperfocus và chú ý phân tán. Nếu lặp lại gây khó trong học tập, làm việc, sinh hoạt—nên được chuyên gia đánh giá.',
      'Hal yang disukai: lupa waktu, makan, tidur; lainnya: sulit mulai.\n\nPola ekstrem ini selaras hiperfokus dan perhatian terpecah. Jika berulang mengganggu hidup/sekolah/kerja—evaluasi profesional disarankan.'
    ),
    lifeImpact: M(
      '• 체크리스트 점수: 높음\n• 집중력 패턴: 과집중-산만 양극화\n• 충동성 수준: 높음\n• 이 결과의 의미: ADHD 성향 지표가 여러 영역에서 나타납니다. 이것이 ADHD 진단을 의미하지는 않지만 전문가 평가를 받아보는 것을 권장합니다',
      '• Score: High\n• Pattern: Hyperfocus vs scatter\n• Impulsivity: High\n• Meaning: Several domains show ADHD-like signs—not a diagnosis by itself; professional assessment is advised.',
      '• スコア：高\n• パターン：過集中と散漫の両極\n• 衝動性：高\n• 意味：複数領域にADHD傾向。診断ではないが専門評価を推奨',
      '• 得分：高\n• 模式：过度专注与分心两极\n• 冲动性：高\n• 含义：多领域出现相关倾向——不等于诊断，建议专业评估',
      '• 得分：高\n• 模式：過度專注與分心兩極\n• 衝動性：高\n• 含義：多領域出現相關傾向——不等於診斷，建議專業評估',
      '• Điểm: Cao\n• Mẫu: Hyperfocus vs phân tán\n• Xung động: Cao\n• Ý nghĩa: Nhiều lĩnh vực có dấu hiệu—không tự chẩn đoán; nên đánh giá chuyên gia.',
      '• Skor: Tinggi\n• Pola: Hiperfokus vs terpecah\n• Impulsivitas: Tinggi\n• Arti: Beberapa area menunjukkan tanda—bukan diagnosis; perlu penilaian profesional.'
    ),
    workStyle: M(
      '이 패턴 자체가 창의성·열정·몰입력이라는 강점이 될 수 있습니다. 적절한 환경과 전략을 찾으면 오히려 강력한 무기가 됩니다',
      'This pattern can also be a strength—creativity, drive, deep immersion. With the right environment and strategies, it can become a powerful asset.',
      'このパターンは創造性・情熱・没入力として強みにもなります。環境と戦略が合えば、強い武器になります。',
      '这种模式也可能成为优势——创造力、热情与深度投入。环境与策略得当，会变成很强的助力。',
      '這種模式也可能成為優勢——創造力、熱情與深度投入。環境與策略得當，會變成很強的助力。',
      'Mẫu này cũng có thể là điểm mạnh—sáng tạo, đam mê, đắm chìm. Với môi trường và chiến lược phù hợp, trở thành lợi thế.',
      'Pola ini juga bisa jadi kekuatan—kreativitas, semangat, kedalaman. Dengan lingkungan dan strategi tepat, jadi aset kuat.'
    ),
    relationshipStyle: M(
      '이 패턴이 삶에 지속적으로 어려움을 주고 있다면 정신건강의학과 또는 신경과 전문의 상담을 권장합니다',
      'If this pattern keeps causing serious difficulty in life, consider psychiatry or neurology.',
      'このパターンが生活に持続的に支障をきたすなら、精神科・神経内科の受診を推奨します。',
      '若此模式持续对生活造成明显困扰，建议咨询精神科或神经内科。',
      '若此模式持續對生活造成明顯困擾，建議諮詢精神科或神經內科。',
      'Nếu mẫu này liên tục gây khó trong đời sống—nên khám tâm thần hoặc thần kinh.',
      'Jika pola ini terus mengganggu hidup—pertimbangkan psikiatri atau neurologi.'
    ),
    messageToYou: E(),
    recommendedDirection: E(),
    empathyLevel: M(
      '20~27점 구간 · 높음',
      'Range 20–27 · High',
      '20〜27点帯・高め',
      '20~27 分区间 · 高',
      '20~27 分區間 · 高',
      'Khoảng 20–27 · Cao',
      'Rentang 20–27 · Tinggi'
    ),
    characteristics: M(
      '체크리스트 점수 높음, 양극 집중 패턴, 충동성 높음',
      'High score, polarized focus pattern, high impulsivity',
      'スコア高め、両極の集中パターン、衝動性高め',
      '得分高，两极化专注模式，冲动性高',
      '得分高，兩極化專注模式，衝動性高',
      'Điểm cao, mẫu tập trung cực đoan, xung động cao',
      'Skor tinggi, pola fokus polar, impulsivitas tinggi'
    ),
    goodMatch: E(),
    badMatch: E(),
  },
  {
    type: 'Type5',
    emoji: '🔴',
    title: M(
      '일상에 어려움이 반복되는, 고성향 주의집중 어려움형 🔴',
      'Daily-life strain — high attention & impulse difficulty pattern 🔴',
      '日常に困難が繰り返される、高傾向の注意・衝動困難型 🔴',
      '日常生活反复受挫——高相关注意与冲动困难型 🔴',
      '日常生活反覆受挫——高相關注意與衝動困難型 🔴',
      'Đời sống bị ảnh hưởng lặp lại — khó tập trung & xung động mức cao 🔴',
      'Kesulitan berulang dalam hidup — pola kesulitan perhatian & impuls tinggi 🔴'
    ),
    shortDescription: M(
      '체크리스트 결과: 집중력·충동성·과잉행동 관련 어려움이 여러 영역에서 나타납니다',
      'Checklist result: Difficulty with focus, impulse control, and restlessness shows across several areas.',
      'チェックリスト結果：集中・衝動性・行動面の困難が複数の場面で見られます',
      '测评结果：在多个方面出现与专注力、冲动性、活动度相关的困难。',
      '測評結果：在多個方面出現與專注力、衝動性、活動度相關的困難。',
      'Kết quả: Khó khăn về tập trung, xung động và hoạt động thấy ở nhiều lĩnh vực.',
      'Hasil: Kesulitan fokus, impulsivitas, dan aktivitas muncul di banyak area.'
    ),
    description: M(
      '「집중이 어렵고 충동을 조절하기 힘들고 머릿속이 항상 바쁜 상태가 일상적으로 반복된다면 전문가 확인이 필요할 수 있습니다。」\n\n이 체크리스트에서 많은 항목에 해당되는 경우 일상생활·학업·직장·관계에서 지속적인 어려움이 있을 가능성이 높습니다. 이것이 ADHD인지 다른 원인(수면 문제·불안·스트레스 등)인지는 전문가만이 정확하게 판단할 수 있습니다.',
      'If trouble focusing, controlling impulses, and a constantly “busy” mind repeat in daily life, you may need a thorough professional assessment.\n\nMany items on this checklist apply: ongoing problems at home, school, work, or relationships are likely. Only a clinician can tell whether this is ADHD or something else (sleep, anxiety, stress, etc.).',
      '「集中が難しく、衝動のコントロールが難しく、頭が常に忙しい状態が日常で繰り返されるなら、専門的な確認が必要かもしれません。」\n\nこのチェックで多くの項目に当てはまる場合、生活・学業・仕事・人間関係で持続的な困難がある可能性があります。ADHDか、睡眠・不安・ストレスなど別要因かは専門家のみが判断できます。',
      '「若难以专注、难以控制冲动、脑子里总是很忙的状态在日常生活中反复出现，可能需要专业评估。」\n\n本测评多项符合时，在生活、学习、工作与关系中持续困难的可能性较高。是否为 ADHD 或其他原因（睡眠、焦虑、压力等），只能由专业人员判断。',
      '「若難以專注、難以控制衝動、腦子裡總是很忙的狀態在日常生活中反覆出現，可能需要專業評估。」\n\n本測評多項符合時，在生活、學習、工作與關係中持續困難的可能性較高。是否為 ADHD 或其他原因（睡眠、焦慮、壓力等），只能由專業人員判斷。',
      'Nếu khó tập trung, khống chế xung động, đầu óc luôn bận lặp lại hàng ngày—cần đánh giá chuyên sâu.\n\nNhiều mục trong bảng phù hợp: khó khăn kéo dài ở nhà, học, làm việc, quan hệ. Chỉ chuyên gia phân biệt ADHD hay nguyên khác (ngủ, lo âu, căng thẳng…).',
      'Jika sulit fokus, mengendalikan impuls, pikiran selalu ramai berulang—perlu penilaian profesional.\n\nBanyak item checklist cocok: kesulitan berkelanjutan. Hanya klinisi yang membedakan ADHD atau penyebab lain (tidur, cemas, stres…).'
    ),
    lifeImpact: M(
      '• 체크리스트 점수: 높음\n• 집중력 패턴: 지속적 어려움\n• 충동성 수준: 높음\n• 이 결과의 의미: 다수의 ADHD 성향 지표가 나타납니다. 반드시 의료 전문가의 정확한 평가가 필요합니다',
      '• Score: High\n• Focus: Persistent difficulty\n• Impulsivity: High\n• Meaning: Many ADHD-like indicators—medical evaluation is important.',
      '• スコア：高\n• 集中：持続的に困難\n• 衝動性：高\n• 意味：ADHD傾向の指標が多数。医療専門家の評価が必要',
      '• 得分：高\n• 注意力：持续困难\n• 冲动性：高\n• 含义：多项相关指标——务必接受专业医疗评估',
      '• 得分：高\n• 注意力：持續困難\n• 衝動性：高\n• 含義：多項相關指標——務必接受專業醫療評估',
      '• Điểm: Cao\n• Tập trung: Khó kéo dài\n• Xung động: Cao\n• Ý nghĩa: Nhiều chỉ báo—cần đánh giá y khoa.',
      '• Skor: Tinggi\n• Fokus: Sulit berkelanjutan\n• Impulsivitas: Tinggi\n• Arti: Banyak indikator—evaluasi medis penting.'
    ),
    workStyle: M(
      '이 어려움은 의지력 부족이나 게으름이 아닙니다. 뇌의 신경학적 패턴 차이일 수 있으며 적절한 지원으로 크게 개선될 수 있습니다',
      'This is not laziness or weak will—it may reflect neurobiological differences. Appropriate support can help a lot.',
      'この困難は意志の弱さや怠けではありません。脳の神経学的な差である可能性があり、適切な支援で大きく改善できます。',
      '这些困难不是懒惰或意志力不足，可能与神经模式差异有关；适当支持可以大幅改善。',
      '這些困難不是懶惰或意志力不足，可能與神經模式差異有關；適當支持可以大幅改善。',
      'Đây không phải lười hay ý chí yếu—có thể khác biệt thần kinh; hỗ trợ phù hợp giúp cải thiện nhiều.',
      'Ini bukan malas atau lemah tekad—bisa perbedaan neurologis; dukungan tepat sangat membantu.'
    ),
    relationshipStyle: E(),
    messageToYou: E(),
    recommendedDirection: M(
      '정신건강의학과 또는 신경과 전문의 상담을 강력히 권장합니다. (한국) 국가 정신건강 위기상담: 1577-0199 (24시간) — 해당 국가의 응급·상담 번호를 이용하세요.',
      'Strongly consider psychiatry or neurology. (South Korea) National mental health crisis line: 1577-0199 (24h)—use your local crisis or counseling numbers.',
      '精神科・神経内科の受診を強く推奨します。（韓国）国家の精神保健相談：1577-0199（24時間）—各国の窓口を利用してください。',
      '强烈建议咨询精神科或神经内科。（韩国）国家心理健康热线：1577-0199（24 小时）—请同时了解您所在地区的求助电话。',
      '強烈建議諮詢精神科或神經內科。（韓國）國家心理健康熱線：1577-0199（24 小時）—請同時了解您所在地區的求助電話。',
      'Nên gặp tâm thần hoặc thần kinh. (Hàn Quốc) Đường dây khủng hoảng: 1577-0199 (24h)—dùng số hỗ trợ tại nơi bạn sống.',
      'Sangat disarankan psikiatri atau neurologi. (Korea Selatan) Hotline krisis: 1577-0199 (24j)—gunakan nomor darurat setempat.'
    ),
    empathyLevel: M(
      '28~33점 구간 · 높음',
      'Range 28–33 · High',
      '28〜33点帯・高め',
      '28~33 分区间 · 高',
      '28~33 分區間 · 高',
      'Khoảng 28–33 · Cao',
      'Rentang 28–33 · Tinggi'
    ),
    characteristics: M(
      '체크리스트 점수 높음, 지속적 어려움, 충동성 높음',
      'High score, persistent difficulty, high impulsivity',
      'スコア高め、持続的困難、衝動性高め',
      '得分高，持续困难，冲动性高',
      '得分高，持續困難，衝動性高',
      'Điểm cao, khó khăn kéo dài, xung động cao',
      'Skor tinggi, kesulitan berlanjut, impulsivitas tinggi'
    ),
    goodMatch: E(),
    badMatch: E(),
  },
  {
    type: 'Type6',
    emoji: '🆘',
    title: M(
      '매우 높은 성향 지표가 나타나는, 전문가 확인 권장형 🆘',
      'Very high indicator pattern — seek professional confirmation 🆘',
      '非常に高い傾向指標 — 専門家の確認を強く推奨 🆘',
      '指标非常高——强烈建议由专业评估 🆘',
      '指標非常高——強烈建議由專業評估 🆘',
      'Chỉ báo rất cao — nên xác nhận với chuyên gia 🆘',
      'Indikator sangat tinggi — konfirmasi profesional sangat disarankan 🆘'
    ),
    shortDescription: M(
      '체크리스트 결과: 거의 모든 항목에서 높은 성향 지표가 나타납니다',
      'Checklist result: High indicators on almost every item.',
      'チェックリスト結果：ほぼすべての項目で高い傾向が見られます',
      '测评结果：几乎所有条目都显示较高相关倾向。',
      '測評結果：幾乎所有條目都顯示較高相關傾向。',
      'Kết quả: Hầu hết mục đều có chỉ báo cao.',
      'Hasil: Hampir semua item menunjukkan indikator tinggi.'
    ),
    description: M(
      '「이 체크리스트의 거의 모든 항목이 해당된다면 지금까지 많이 힘들었을 것입니다. 그리고 이 어려움은 당신의 잘못이 아닙니다。」\n\n집중이 안 되는 것, 미루는 것, 충동을 조절하기 어려운 것, 감정이 크게 요동치는 것이 오랫동안 반복됐다면 이것이 삶에 상당한 어려움을 만들어왔을 것입니다. 이 패턴의 원인이 무엇인지 전문가와 함께 확인하는 것이 지금 가장 중요합니다.',
      'If almost every item applies, life has probably felt very hard—and that hardship is not your fault.\n\nLong-running trouble with focus, procrastination, impulse control, or intense emotions may have deeply affected your life. Clarifying causes with a professional is the most important next step.',
      '「ほぼすべてに当てはまるなら、今までとても大変だったはずです。そしてそれはあなたのせいではありません。」\n\n集中・先延ばし・衝動・感情の波が長く続けば、生活に大きな影響があったでしょう。原因を専門家と確認することが最優先です。',
      '「若几乎条条都符合，一路走来一定很辛苦——而这并不是你的错。」\n\n长期难以专注、拖延、控制冲动或情绪波动，可能已深刻影响生活。与专业人员一起厘清原因，是当前最重要的一步。',
      '「若幾乎條條都符合，一路走來一定很辛苦——而這並不是你的錯。」\n\n長期難以專注、拖延、控制衝動或情緒波動，可能已深刻影響生活。與專業人員一起釐清原因，是目前最重要的一步。',
      'Nếu gần như mọi mục đều đúng, cuộc sống chắc đã rất khó—và đó không phải lỗi của bạn.\n\nKhó tập trung, trì hoãn, xung động, cảm xúc kéo dài có thể đã ảnh hưởng sâu. Làm rõ nguyên nhân với chuyên gia là bước quan trọng nhất.',
      'Jika hampir semua item cocok, hidup mungkin sangat berat—bukan salah Anda.\n\nMasalah fokus, penundaan, impuls, atau emosi yang berlarut dapat mempengaruhi hidup. Memperjelas penyebab dengan profesional adalah langkah utama.'
    ),
    lifeImpact: M(
      '• 체크리스트 점수: 매우 높음\n• 이 결과의 의미: 광범위한 ADHD 성향 지표가 나타납니다. 이것이 ADHD인지 다른 상태인지는 전문가만이 판단할 수 있습니다',
      '• Score: Very high\n• Meaning: Broad ADHD-like indicators—not proof of ADHD; only a professional can distinguish ADHD from other conditions.',
      '• スコア：非常に高い\n• 意味：広範なADHD傾向。ADHDか別の状態かは専門家のみが判断',
      '• 得分：非常高\n• 含义：广泛的相关指标——不等于确诊 ADHD；是否 ADHD 或其他状况只能由专业人员判断',
      '• 得分：非常高\n• 含義：廣泛的相關指標——不等於確診 ADHD；是否 ADHD 或其他狀況只能由專業人員判斷',
      '• Điểm: Rất cao\n• Ý nghĩa: Nhiều chỉ báo rộng—không chứng minh ADHD; chỉ chuyên gia phân biệt.',
      '• Skor: Sangat tinggi\n• Arti: Indikator luas—bukan bukti ADHD; hanya profesional yang membedakan.'
    ),
    workStyle: E(),
    relationshipStyle: E(),
    messageToYou: M(
      '이 체크리스트 결과가 높게 나왔다고 해서 뭔가 잘못된 것이 아닙니다. 오히려 왜 이렇게 힘들었는지를 이해하는 첫 걸음이 될 수 있습니다.\n\nADHD로 진단받은 경우: 많은 사람들이 진단 후 "왜 이걸 진작에 몰랐을까"라고 말합니다. 진단은 낙인이 아니라 나를 이해하고 효과적인 지원을 받는 시작점입니다',
      'A high score here does not mean you are “wrong”—it can be a first step toward understanding why things felt so hard.\n\nIf you are diagnosed with ADHD, many people say afterward, “Why didn’t I know sooner?” Diagnosis is not a label; it can be the start of understanding yourself and getting effective support.',
      'スコアが高いからといって「ダメな人」ではありません。むしろ、なぜこんなに大変だったのか理解する第一歩になります。\n\nADHDと診断された場合：診断後に「もっと早く知りたかった」と言う人は多いです。診断はレッテルではなく、自分を理解し支援を得る出発点です。',
      '分数高并不代表你「有问题」——反而可能是理解「为什么这么难」的第一步。\n\n若日后被诊断为 ADHD：很多人说「早知道就好了」。诊断不是污名，而是理解自己、获得有效支持的开始。',
      '分數高並不代表你「有問題」——反而可能是理解「為什麼這麼難」的第一步。\n\n若日後被診斷為 ADHD：很多人說「早知道就好了」。診斷不是污名，而是理解自己、獲得有效支持的開始。',
      'Điểm cao không có nghĩa bạn “sai”—đó có thể là bước đầu hiểu vì sao mọi thứ khó khăn.\n\nNếu được chẩn đoán ADHD: nhiều người nói “ước gì biết sớm hơn.” Chẩn đoán không phải nhãn dán—là khởi đầu hiểu bản thân và được hỗ trợ.',
      'Skor tinggi bukan berarti Anda “salah”—ini bisa langkah pertama memahami mengapa hidup terasa berat.\n\nJika didiagnosis ADHD: banyak orang berkata “seandainya tahu lebih awal.” Diagnosis bukan cap—awal memahami diri dan dukungan.'
    ),
    recommendedDirection: M(
      '정신건강의학과 전문의 상담을 강력히 권장합니다. (한국) 국가 정신건강 위기상담: 1577-0199 (24시간) — 해당 국가의 응급·상담 번호를 이용하세요.',
      'Strongly consider seeing a psychiatrist. (South Korea) Crisis line 1577-0199 (24h)—also save your local emergency and counseling numbers.',
      '精神科専門医の受診を強く推奨します。（韓国）1577-0199（24時間）—各国の緊急・相談窓口も確認してください。',
      '强烈建议咨询精神科专科医师。（韩国）危机热线 1577-0199（24 小时）—请保存您所在地的急救与心理援助号码。',
      '強烈建議諮詢精神科專科醫師。（韓國）危機熱線 1577-0199（24 小時）—請保存您所在地的急救與心理援助號碼。',
      'Nên gặp bác sĩ tâm thần. (Hàn Quốc) 1577-0199 (24h)—lưu số khẩn cấp địa phương.',
      'Sangat disarankan psikiater. (Korea Selatan) 1577-0199 (24j)—simpan nomor darurat setempat.'
    ),
    empathyLevel: M(
      '34~36점 구간 · 매우 높음',
      'Range 34–36 · Very high',
      '34〜36点帯・非常に高い',
      '34~36 分区间 · 非常高',
      '34~36 分區間 · 非常高',
      'Khoảng 34–36 · Rất cao',
      'Rentang 34–36 · Sangat tinggi'
    ),
    characteristics: M(
      '체크리스트 점수 매우 높음, 광범위한 성향 지표',
      'Very high score, broad indicator pattern',
      'スコア非常に高い、広範な傾向指標',
      '得分非常高，广泛的相关指标',
      '得分非常高，廣泛的相關指標',
      'Điểm rất cao, chỉ báo rộng',
      'Skor sangat tinggi, pola indikator luas'
    ),
    goodMatch: E(),
    badMatch: E(),
  },
];

export function calculatePhase3AdhdTendencyChecklistResult(answers: number[]): string {
  const total = answers.reduce((sum, s) => sum + s, 0);
  if (total <= 5) return 'Type1';
  if (total <= 11) return 'Type2';
  if (total <= 19) return 'Type3';
  if (total <= 27) return 'Type4';
  if (total <= 33) return 'Type5';
  return 'Type6';
}
