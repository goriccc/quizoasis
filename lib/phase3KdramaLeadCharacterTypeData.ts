/** K-드라마 주인공 재질 테스트 — A=0, B=1, C=2, D=3 합산 → 6유형 */

const L = (
  ko: string,
  en: string,
  ja: string,
  zhCN: string,
  zhTW: string,
  vi: string,
  id: string
): Record<string, string> => ({
  ko,
  en,
  ja,
  'zh-CN': zhCN,
  'zh-TW': zhTW,
  vi,
  id,
});

export interface Phase3KdramaLeadCharacterTypeQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    score: number;
  }[];
}

export interface Phase3KdramaLeadCharacterTypeResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  empathyLevel: Record<string, string>;
  characteristics: Record<string, string>;
  goodMatch: Record<string, string>;
  badMatch: Record<string, string>;
  dramaClimax: Record<string, string>;
  dramaSupportingRole: Record<string, string>;
  dramaOst: Record<string, string>;
  shareSnippet: Record<string, string>;
}

export const phase3KdramaLeadCharacterTypeQuestions: Phase3KdramaLeadCharacterTypeQuestion[] = [
  {
    id: 1,
    question: L(
      '억울한 일이 생겼을 때 나는?',
      'When something unfair happens to me, I…',
      '理不尽なことが起きたとき、私は？',
      '遇到委屈或不公时，我会？',
      '遇到委屈或不公時，我會？',
      'Khi gặp chuyện oan ức, tôi sẽ…',
      'Saat ada perlakuan tidak adil, aku…'
    ),
    options: [
      {
        text: L(
          '지금은 참는다. 하지만 반드시 기억해둔다. 언젠가 되갚아줄 것이다',
          'I hold back for now—but I remember everything. One day, I will pay them back.',
          '今は我慢する。でも必ず覚えておく。いつか必ず返す。',
          '现在先忍。但一定会记住，总有一天要讨回来。',
          '現在先忍。但一定會記住，總有一天要討回來。',
          'Tạm thời nhịn. Nhưng nhất định ghi nhớ—sẽ trả lại một ngày nào đó.',
          'Sekarang menahan diri. Tapi pasti diingat. Suatu hari akan dibalas.'
        ),
        score: 0,
      },
      {
        text: L(
          '그 자리에서 당당하게 말한다. 억울한 건 바로 풀어야 직성이 풀린다',
          'I speak up right there with confidence. I need to clear the injustice on the spot.',
          'その場で堂々と言う。理不尽はその場で晴らさないと気が済まない。',
          '当场堂堂正正地说出来。委屈不马上解开就心里过不去。',
          '當場堂堂正正地說出來。委屈不馬上解開就心裡過不去。',
          'Nói thẳng ngay tại chỗ. Oan ức phải giải quyết ngay mới thấy nhẹ lòng.',
          'Bicara tegas di tempat. Ketidakadilan harus diselesaikan saat itu juga.'
        ),
        score: 1,
      },
      {
        text: L(
          '혼자 삭이고 더 열심히 한다. 결과로 증명하는 게 최고의 복수다',
          'I swallow it alone and work even harder. Proving myself with results is the best revenge.',
          '一人で抱え込み、もっと頑張る。結果で証明するのが最高の復讐だ。',
          '独自消化，然后更努力。用结果证明才是最好的报复。',
          '獨自消化，然後更努力。用結果證明才是最好的報復。',
          'Tự chịu đựng rồi cố gắng hơn. Chứng minh bằng kết quả mới là trả thù hay nhất.',
          'Menahan sendiri lalu bekerja lebih keras. Membuktikan lewat hasil adalah balas dendam terbaik.'
        ),
        score: 2,
      },
      {
        text: L(
          '일단 넘어간다. 시간이 지나면 다 해결된다고 믿는다',
          'I let it go for now. I believe time will sort everything out.',
          'とりあえず流す。時間が経てば全部解決すると信じている。',
          '先放一边。相信时间会解决一切。',
          '先放一邊。相信時間會解決一切。',
          'Tạm thời bỏ qua. Tin rằng thời gian sẽ giải quyết mọi thứ.',
          'Biarkan dulu. Percaya waktu akan menyelesaikan semuanya.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 2,
    question: L(
      '나를 가장 잘 표현하는 아침 풍경은?',
      'Which morning scene best represents me?',
      '私をいちばんよく表す朝の風景は？',
      '最能代表我的早晨场景是？',
      '最能代表我的早晨場景是？',
      'Cảnh buổi sáng nào mô tả tôi nhất?',
      'Pemandangan pagi mana yang paling mewakiliku?'
    ),
    options: [
      {
        text: L(
          '이른 새벽 혼자 일어나 조용히 커피를 마시며 오늘의 계획을 세운다',
          'I wake up early alone, sip coffee quietly, and plan my day.',
          '早朝、一人で起きて静かにコーヒーを飲みながら今日の計画を立てる。',
          '清晨独自醒来，安静喝咖啡，规划今天。',
          '清晨獨自醒來，安靜喝咖啡，規劃今天。',
          'Dậy sớm một mình, uống cà phê yên lặng và lên kế hoạch cho ngày mới.',
          'Bangun pagi-pagi sendirian, minum kopi dengan tenang, dan merencanakan hari ini.'
        ),
        score: 0,
      },
      {
        text: L(
          '분주하게 준비하면서도 에너지가 넘친다. 도전적인 하루를 기대한다',
          'I get ready in a rush but brim with energy, looking forward to a challenging day.',
          '慌ただしく準備しながらもエネルギーにあふれ、挑戦的な一日を楽しみにする。',
          '匆忙准备却能量满满，期待充满挑战的一天。',
          '匆忙準備卻能量滿滿，期待充滿挑戰的一天。',
          'Chuẩn bị vội vã nhưng tràn đầy năng lượng, mong chờ một ngày đầy thử thách.',
          'Bersiap dengan sibuk tapi penuh energi, menantikan hari yang penuh tantangan.'
        ),
        score: 1,
      },
      {
        text: L(
          '느긋하게 일어나 창문으로 들어오는 햇살을 즐긴다. 소소한 것이 행복하다',
          'I wake up leisurely and enjoy the sunlight through the window. Small things make me happy.',
          'のんびり起きて、窓から差し込む日差しを楽しむ。小さなことが幸せだ。',
          '悠闲醒来，享受透窗而入的阳光。小确幸就是幸福。',
          '悠閒醒來，享受透窗而入的陽光。小確幸就是幸福。',
          'Dậy chậm rãi, tận hưởng ánh nắng qua cửa sổ. Những điều nhỏ bé cũng là hạnh phúc.',
          'Bangun dengan santai dan menikmati sinar matahari dari jendela. Hal-hal kecil itu bahagia.'
        ),
        score: 2,
      },
      {
        text: L(
          '오늘 뭔가 이상한 일이 일어날 것 같은 느낌이 든다. 직감이 강하다',
          'I feel like something unusual will happen today. My intuition is strong.',
          '今日、何か変なことが起きそうな予感がする。直感が強い。',
          '感觉今天会发生不寻常的事。直觉很强。',
          '感覺今天會發生不尋常的事。直覺很強。',
          'Cảm giác hôm nay sẽ có chuyện gì đó bất thường xảy ra. Trực giác rất mạnh.',
          'Merasa hari ini akan ada sesuatu yang aneh. Intuisiku kuat.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 3,
    question: L(
      '주변 사람들이 나에 대해 자주 하는 말은?',
      'What do people around me often say about me?',
      '周りの人が私についてよく言うことは？',
      '身边的人常说我什么？',
      '身邊的人常說我什麼？',
      'Mọi người xung quanh thường nói gì về tôi?',
      'Apa yang sering orang sekitarku katakan tentangku?'
    ),
    options: [
      {
        text: L(
          '"저 사람 건드리면 안 돼. 만만하게 봤다가 큰일 난다"',
          '"Don\'t mess with that person. Underestimate them and you\'re in big trouble."',
          '「あの人には手を出しちゃダメ。舐めてたら大変なことになる」',
          '「那个人惹不得。小看会吃大亏。」',
          '「那個人惹不得。小看會吃大虧。」',
          '"Đừng động vào người đó. Coi thường là gặp chuyện lớn đấy."',
          '"Jangan macam-macam sama orang itu. Remehkan sedikit saja, celaka."'
        ),
        score: 0,
      },
      {
        text: L(
          '"어떻게 저런 상황에서도 저렇게 당당할 수 있지?"',
          '"How can they stay so confident even in a situation like that?"',
          '「どうしてあんな状況でもあんなに堂々としていられるの？」',
          '「那种情况下怎么还能那么从容？」',
          '「那種情況下怎麼還能那麼從容？」',
          '"Sao họ vẫn tự tin thế trong tình huống như vậy?"',
          '"Kok bisa tetap percaya diri di situasi seperti itu?"'
        ),
        score: 1,
      },
      {
        text: L(
          '"겉으로는 평범해 보이는데 알고 보면 대단한 사람이야"',
          '"They seem ordinary on the outside, but they are truly impressive."',
          '「見た目は普通だけど、よく知るとすごい人だよ」',
          '「外表普通，了解后才发现很厉害。」',
          '「外表普通，了解後才發現很厲害。」',
          '"Nhìn bình thường, nhưng biết kỹ thì thấy họ giỏi lắm."',
          '"Kelihatan biasa, tapi kalau kenal lebih dekat, orangnya hebat."'
        ),
        score: 2,
      },
      {
        text: L(
          '"저 사람 옆에 있으면 왜 이렇게 마음이 편해지지?"',
          '"Why do I feel so at ease when I\'m around them?"',
          '「あの人のそばにいると、なんでこんなに心が落ち着くんだろう？」',
          '「为什么在那个人身边会这么安心？」',
          '「為什麼在那個人身邊會這麼安心？」',
          '"Sao ở bên cạnh họ lại thấy lòng nhẹ nhõm thế nhỉ?"',
          '"Kok dekat mereka rasanya tenang banget ya?"'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 4,
    question: L(
      '내 인생에서 가장 드라마틱했던 순간은?',
      'What was the most dramatic moment in my life?',
      '私の人生でいちばんドラマチックだった瞬間は？',
      '我人生中最戏剧性的瞬间是？',
      '我人生中最戲劇性的瞬間是？',
      'Khoảnh khắc kịch tính nhất trong đời tôi là?',
      'Momen paling dramatis dalam hidupku?'
    ),
    options: [
      {
        text: L(
          '나를 무시하거나 배신했던 사람이 결국 내 앞에 무릎 꿇은 순간',
          'When someone who looked down on or betrayed me finally knelt before me.',
          '私を見下したり裏切った人が、ついに私の前に膝をついた瞬間。',
          '曾经轻视或背叛我的人，最终跪在我面前的那一刻。',
          '曾經輕視或背叛我的人，最終跪在我面前的那一刻。',
          'Khi người từng coi thường hoặc phản bội tôi cuối cùng quỳ trước mặt tôi.',
          'Saat orang yang meremehkan atau mengkhianatiku akhirnya berlutut di hadapanku.'
        ),
        score: 0,
      },
      {
        text: L(
          '아무도 안 된다고 했는데 내가 해낸 순간. 그때 표정들을 잊을 수 없다',
          'When everyone said I couldn\'t—but I did it anyway. I\'ll never forget their faces.',
          '誰も無理だと言ったのに、私がやり遂げた瞬間。そのときの表情が忘れられない。',
          '所有人都说不可能，但我做到了。忘不了那时的表情。',
          '所有人都說不可能，但我做到了。忘不了那時的表情。',
          'Khi ai cũng bảo không thể, nhưng tôi đã làm được. Không quên được vẻ mặt lúc đó.',
          'Saat semua bilang mustahil, tapi aku berhasil. Wajah mereka tak bisa kulupakan.'
        ),
        score: 1,
      },
      {
        text: L(
          '아무도 모르게 혼자 열심히 준비했던 것이 빛을 발한 순간',
          'When something I quietly prepared alone finally paid off.',
          '誰にも知られず一人で準備してきたものが、ついに花開いた瞬間。',
          '无人知晓、独自努力准备的东西终于发光的那一刻。',
          '無人知曉、獨自努力準備的東西終於發光的那一刻。',
          'Khi thứ tôi âm thầm chuẩn bị một mình cuối cùng cũng tỏa sáng.',
          'Saat hal yang kusiapkan sendiri tanpa sepengetahuan siapa pun akhirnya membuahkan hasil.'
        ),
        score: 2,
      },
      {
        text: L(
          '아무것도 아닌 평범한 날에 갑자기 인생이 바뀐 순간',
          'When life suddenly changed on an ordinary day that seemed like nothing.',
          '何でもない普通の日に、突然人生が変わった瞬間。',
          '在看似普通的某一天，人生突然改变的那一刻。',
          '在看似普通的某一天，人生突然改變的那一刻。',
          'Khi cuộc đời đột ngột thay đổi trong một ngày bình thường chẳng có gì đặc biệt.',
          'Saat hidup tiba-tiba berubah di hari biasa yang terasa biasa saja.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 5,
    question: L(
      '나의 인간관계 스타일은?',
      'What is my relationship style?',
      '私の人間関係スタイルは？',
      '我的人际关系风格是？',
      '我的人際關係風格是？',
      'Phong cách quan hệ của tôi là?',
      'Gaya hubungan sosialku?'
    ),
    options: [
      {
        text: L(
          '소수와 깊게. 한 번 믿으면 끝까지 가지만 배신하면 관계가 완전히 끝난다',
          'Few but deep. Once I trust someone, I go all the way—but betrayal ends it completely.',
          '少数と深く。一度信じたら最後まで行くが、裏切られたら関係は完全に終わる。',
          '少数人，深交情。一旦信任就走到最后，但背叛就彻底结束。',
          '少數人，深交情。一旦信任就走到最後，但背叛就徹底結束。',
          'Ít người nhưng sâu sắc. Tin một lần là đi đến cùng, nhưng phản bội là chấm hết.',
          'Sedikit tapi dalam. Sekali percaya, sampai akhir—tapi pengkhianatan berarti selesai total.'
        ),
        score: 0,
      },
      {
        text: L(
          '어디서든 리더 포지션. 사람들이 자연스럽게 나를 중심으로 모인다',
          'Leader wherever I go. People naturally gather around me.',
          'どこでもリーダー。人々が自然と私を中心に集まる。',
          '到哪里都是领导者。人们自然以我为中心聚集。',
          '到哪裡都是領導者。人們自然以我為中心聚集。',
          'Ở đâu cũng là người dẫn dắt. Mọi người tự nhiên quây quanh tôi.',
          'Di mana pun jadi pemimpin. Orang-orang alami berkumpul di sekitarku.'
        ),
        score: 1,
      },
      {
        text: L(
          '조용히 실력으로 인정받는다. 처음엔 무시당하다 나중에 인정받는 패턴',
          'I earn respect quietly through skill. Ignored at first, recognized later—that is my pattern.',
          '静かに実力で認められる。最初は軽視され、後から認められるパターン。',
          '靠实力默默获得认可。先被忽视，后被承认——这是我的模式。',
          '靠實力默默獲得認可。先被忽視，後被承認——這是我的模式。',
          'Lặng lẽ được công nhận bằng năng lực. Ban đầu bị xem thường, sau này mới được thừa nhận.',
          'Diam-diam diakui lewat kemampuan. Awalnya diremehkan, lalu akhirnya dihargai.'
        ),
        score: 2,
      },
      {
        text: L(
          '누구에게나 열려있다. 처음 본 사람과도 금방 친해지는 타입',
          'Open to everyone. I click with strangers quickly.',
          '誰にでも心を開く。初対面の人ともすぐ仲良くなれるタイプ。',
          '对谁都敞开。和第一次见面的人也能很快熟络。',
          '對誰都敞開。和第一次見面的人也能很快熟絡。',
          'Cởi mở với ai cũng vậy. Gặp lần đầu cũng nhanh chóng thân thiết.',
          'Terbuka pada siapa saja. Cepat akrab bahkan dengan orang yang baru dikenal.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 6,
    question: L(
      '갑자기 인생이 바뀌는 사건이 생긴다면 그건?',
      'If something suddenly changed my life, it would be…',
      '突然人生が変わる出来事があるとしたら、それは？',
      '如果突然有改变人生的事件，那会是什么？',
      '如果突然有改變人生的事件，那會是什麼？',
      'Nếu có sự kiện đột ngột thay đổi cuộc đời, đó sẽ là…',
      'Kalau ada peristiwa yang tiba-tiba mengubah hidupku, itu akan…'
    ),
    options: [
      {
        text: L(
          '오랫동안 준비해온 반격이 마침내 시작되는 것',
          'The counterattack I have been preparing for finally begins.',
          '長い間準備してきた反撃が、ついに始まること。',
          '酝酿已久的反击终于开始。',
          '醞釀已久的反擊終於開始。',
          'Cuộc phản công chuẩn bị bấy lâu cuối cùng bắt đầu.',
          'Serangan balik yang sudah lama disiapkan akhirnya dimulai.'
        ),
        score: 0,
      },
      {
        text: L(
          '예상치 못한 곳에서 나의 재능이나 능력이 발견되는 것',
          'My talent or ability being discovered in an unexpected place.',
          '思いがけない場所で、私の才能や能力が見つかること。',
          '在意想不到的地方，我的才能或能力被发现。',
          '在意想不到的地方，我的才能或能力被發現。',
          'Tài năng hoặc khả năng của tôi được phát hiện ở nơi không ngờ tới.',
          'Bakat atau kemampuanku ditemukan di tempat yang tak terduga.'
        ),
        score: 1,
      },
      {
        text: L(
          '엄청난 노력 끝에 드디어 인정받고 원하는 자리에 오르는 것',
          'After immense effort, finally being recognized and reaching the place I wanted.',
          '膨大な努力の末、ついに認められ、望む場所に辿り着くこと。',
          '经过巨大努力，终于被认可，登上想要的位置。',
          '經過巨大努力，終於被認可，登上想要的位置。',
          'Sau nỗ lực lớn, cuối cùng được công nhận và đến vị trí mình mong muốn.',
          'Setelah usaha besar, akhirnya diakui dan mencapai posisi yang diinginkan.'
        ),
        score: 2,
      },
      {
        text: L(
          '우연한 만남이나 사건으로 삶의 방향이 완전히 바뀌는 것',
          'Life direction completely changing through a chance meeting or event.',
          '偶然の出会いや出来事で、人生の方向が完全に変わること。',
          '因偶然相遇或事件，人生方向彻底改变。',
          '因偶然相遇或事件，人生方向徹底改變。',
          'Cuộc gặp gỡ hoặc sự kiện tình cờ khiến hướng đi cuộc đời thay đổi hoàn toàn.',
          'Arah hidup berubah total karena pertemuan atau kejadian tak terduga.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 7,
    question: L(
      '나와 가장 잘 어울리는 드라마 배경은?',
      'Which drama setting suits me best?',
      '私にいちばん合うドラマの舞台は？',
      '最符合我的韩剧背景是？',
      '最符合我的韓劇背景是？',
      'Bối cảnh phim Hàn nào hợp với tôi nhất?',
      'Latar drama Korea mana yang paling cocok denganku?'
    ),
    options: [
      {
        text: L(
          '밤의 도시. 고층 건물의 불빛과 비 오는 거리',
          'A city at night—skyscraper lights and rain-slicked streets.',
          '夜の都市。高層ビルの灯りと雨の降る街。',
          '夜晚的城市。高楼灯火与雨中的街道。',
          '夜晚的城市。高樓燈火與雨中的街道。',
          'Thành phố về đêm. Ánh đèn cao ốc và con phố mưa.',
          'Kota malam. Lampu gedung pencakar langit dan jalan basah hujan.'
        ),
        score: 0,
      },
      {
        text: L(
          '세련된 오피스·법정·병원. 긴장감 있는 전문직 공간',
          'Sleek offices, courtrooms, hospitals—high-stakes professional spaces.',
          '洗練されたオフィス・法廷・病院。緊張感のある専門職の空間。',
          '精致的办公室、法庭、医院——充满张力的专业场景。',
          '精緻的辦公室、法庭、醫院——充滿張力的專業場景。',
          'Văn phòng, tòa án, bệnh viện sang trọng—không gian nghề nghiệp đầy căng thẳng.',
          'Kantor, pengadilan, rumah sakit elegan—ruang profesional penuh tensi.'
        ),
        score: 1,
      },
      {
        text: L(
          '활기찬 직장·학교. 경쟁과 성장이 공존하는 현실적인 공간',
          'Lively workplaces and schools—realistic spaces where competition and growth coexist.',
          '活気ある職場・学校。競争と成長が共存するリアルな空間。',
          '充满活力的职场与学校——竞争与成长并存的现实空间。',
          '充滿活力的職場與學校——競爭與成長並存的現實空間。',
          'Nơi làm việc và trường học sôi động—không gian thực tế nơi cạnh tranh và trưởng thành cùng tồn tại.',
          'Tempat kerja dan sekolah yang hidup—ruang realistis tempat kompetisi dan pertumbuhan berdampingan.'
        ),
        score: 2,
      },
      {
        text: L(
          '작은 마을·카페·바닷가. 따뜻하고 아늑한 일상의 공간',
          'A small town, café, or seaside—warm, cozy everyday spaces.',
          '小さな町・カフェ・海辺。温かく居心地のいい日常の空間。',
          '小镇、咖啡馆、海边——温暖舒适的日常空间。',
          '小鎮、咖啡館、海邊——溫暖舒適的日常空間。',
          'Thị trấn nhỏ, quán cà phê, bờ biển—không gian đời thường ấm áp và thoải mái.',
          'Kota kecil, kafe, pantai—ruang keseharian yang hangat dan nyaman.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 8,
    question: L(
      '위기 상황에서 나는?',
      'In a crisis, I…',
      '危機的な状況では、私は？',
      '在危机情况下，我会？',
      '在危機情況下，我會？',
      'Trong tình huống khủng hoảng, tôi sẽ…',
      'Dalam situasi krisis, aku…'
    ),
    options: [
      {
        text: L(
          '냉정해진다. 감정을 차단하고 계획대로 움직인다',
          'I go cold. I shut down emotions and move according to plan.',
          '冷静になる。感情を遮断し、計画通りに動く。',
          '变得冷静。屏蔽情绪，按计划行动。',
          '變得冷靜。屏蔽情緒，按計畫行動。',
          'Trở nên lạnh lùng. Chặn cảm xúc và hành động theo kế hoạch.',
          'Menjadi dingin. Mematikan emosi dan bergerak sesuai rencana.'
        ),
        score: 0,
      },
      {
        text: L(
          '오히려 흥분하며 더 잘한다. 압박 상황에서 능력이 폭발한다',
          'I get fired up and perform even better. Pressure makes my abilities explode.',
          'むしろ興奮して、もっとうまくやる。プレッシャーの中で能力が爆発する。',
          '反而更兴奋，表现更好。压力下能力爆发。',
          '反而更興奮，表現更好。壓力下能力爆發。',
          'Ngược lại càng hưng phấn và làm tốt hơn. Dưới áp lực, năng lực bùng nổ.',
          'Justru semakin bersemangat dan lebih baik. Tekanan membuat kemampuanku meledak.'
        ),
        score: 1,
      },
      {
        text: L(
          '포기하지 않는다. 방법이 없어 보여도 끝까지 찾아낸다',
          'I never give up. Even when there seems no way, I find one to the end.',
          '諦めない。方法がなさそうでも、最後まで見つけ出す。',
          '不放弃。就算看起来没路，也会找到最后。',
          '不放棄。就算看起來沒路，也會找到最後。',
          'Không bỏ cuộc. Dù có vẻ không có cách, vẫn tìm đến cùng.',
          'Tidak menyerah. Meski sepertinya tidak ada jalan, tetap mencari sampai akhir.'
        ),
        score: 2,
      },
      {
        text: L(
          '주변 사람의 힘으로 버텨낸다. 혼자보다 함께할 때 강해진다',
          'I endure with the strength of people around me. I am stronger together than alone.',
          '周りの人の力で乗り越える。一人より一緒にいるとき強くなる。',
          '靠身边人的力量撑过去。比起独自，并肩时更强。',
          '靠身邊人的力量撐過去。比起獨自，並肩時更強。',
          'Vượt qua nhờ sức mạnh của người xung quanh. Mạnh hơn khi cùng nhau hơn là một mình.',
          'Bertahan dengan kekuatan orang di sekitarku. Lebih kuat saat bersama daripada sendirian.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 9,
    question: L(
      '내 드라마의 조연은 어떤 사람일까?',
      'Who would be the supporting character in my drama?',
      '私のドラマの脇役はどんな人？',
      '我这部剧的配角会是什么样的人？',
      '我這部劇的配角會是什麼樣的人？',
      'Nhân vật phụ trong phim của tôi sẽ là ai?',
      'Siapa tokoh pendukung dalam dramaku?'
    ),
    options: [
      {
        text: L(
          '나의 과거를 아는 사람. 내 진짜 모습을 지켜보며 응원하는 단 한 명',
          'Someone who knows my past—the one person who watches my true self and cheers me on.',
          '私の過去を知る人。本当の私を見守り、応援してくれるたった一人。',
          '了解我过去的人。见证真实的我，一直为我加油的那唯一一人。',
          '了解我過去的人。見證真實的我，一直為我加油的那唯一一人。',
          'Người biết quá khứ của tôi—người duy nhất chứng kiến con người thật và luôn ủng hộ.',
          'Orang yang tahu masa laluku—satu-satunya yang melihat jati diriku dan selalu mendukung.'
        ),
        score: 0,
      },
      {
        text: L(
          '라이벌. 나와 비슷하지만 방향이 달라서 계속 충돌하는 존재',
          'A rival—similar to me but heading a different way, always clashing.',
          'ライバル。私と似ているが方向が違い、ずっと衝突する存在。',
          '对手。和我相似但方向不同，不断碰撞的存在。',
          '對手。和我相似但方向不同，不斷碰撞的存在。',
          'Đối thủ—giống tôi nhưng hướng đi khác, luôn va chạm.',
          'Rival—mirip denganku tapi arahnya berbeda, selalu bentrok.'
        ),
        score: 1,
      },
      {
        text: L(
          '멘토. 나의 가능성을 먼저 알아보고 성장을 이끌어주는 존재',
          'A mentor who sees my potential first and guides my growth.',
          'メンター。私の可能性を最初に見抜き、成長を導いてくれる存在。',
          '导师。最先发现我的潜力，引领我成长的存在。',
          '導師。最先發現我的潛力，引領我成長的存在。',
          'Người cố vấn—nhìn thấy tiềm năng của tôi trước tiên và dẫn dắt sự trưởng thành.',
          'Mentor yang pertama melihat potensiku dan membimbing pertumbuhanku.'
        ),
        score: 2,
      },
      {
        text: L(
          '인생의 동반자. 힘든 순간마다 옆에 있어주는 따뜻한 존재',
          'A life partner—warm presence who stays by my side in hard moments.',
          '人生の伴侶。辛い瞬間ごとにそばにいてくれる温かい存在。',
          '人生伴侣。在每个艰难时刻都陪在身边的温暖存在。',
          '人生伴侶。在每個艱難時刻都陪在身邊的溫暖存在。',
          'Người bạn đời—hiện diện ấm áp luôn ở bên trong những khoảnh khắc khó khăn.',
          'Pendamping hidup—kehadiran hangat yang selalu ada di samping saat sulit.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 10,
    question: L(
      '드라마에서 나에게 일어날 가장 큰 반전은?',
      'What would be the biggest plot twist for me in a drama?',
      'ドラマで私に起こる最大のどんでん返しは？',
      '剧中会发生在我身上的最大反转是？',
      '劇中會發生在我身上的最大反轉是？',
      'Cú plot twist lớn nhất sẽ xảy ra với tôi trong phim là?',
      'Plot twist terbesar yang terjadi padaku dalam drama?'
    ),
    options: [
      {
        text: L(
          '아무도 몰랐던 나의 진짜 정체나 능력이 밝혀지는 것',
          'My true identity or ability that no one knew is revealed.',
          '誰も知らなかった私の正体や能力が明かされること。',
          '无人知晓的真实身份或能力被揭开。',
          '無人知曉的真實身份或能力被揭開。',
          'Thân phận hoặc khả năng thật mà không ai biết được hé lộ.',
          'Identitas atau kemampuan sejati yang tak pernah diketahui siapa pun terungkap.'
        ),
        score: 0,
      },
      {
        text: L(
          '나를 무시했던 사람이 결국 나를 필요로 하게 되는 것',
          'People who looked down on me end up needing me.',
          '私を見下していた人が、結局私を必要とすること。',
          '曾经轻视我的人，最终需要我。',
          '曾經輕視我的人，最終需要我。',
          'Người từng coi thường tôi cuối cùng lại cần đến tôi.',
          'Orang yang meremehkanku akhirnya membutuhkanku.'
        ),
        score: 1,
      },
      {
        text: L(
          '평범해 보이던 내가 사실 가장 중요한 열쇠였다는 것',
          'The ordinary-looking me was actually the most important key.',
          '平凡に見えた私が、実はいちばん重要な鍵だったこと。',
          '看似平凡的我，其实是关键钥匙。',
          '看似平凡的我，其實是關鍵鑰匙。',
          'Tôi trông bình thường nhưng thực ra là chìa khóa quan trọng nhất.',
          'Diriku yang terlihat biasa ternyata kunci terpenting.'
        ),
        score: 2,
      },
      {
        text: L(
          '찾고 있던 답이 멀리 있는 게 아니라 내 옆에 있었다는 것',
          'The answer I was searching for was not far away—it was right beside me.',
          '探していた答えは遠くではなく、私のそばにあったこと。',
          '一直在找的答案不在远方，就在身边。',
          '一直在找的答案不在遠方，就在身邊。',
          'Câu trả lời tôi tìm kiếm không ở xa—mà ngay bên cạnh.',
          'Jawaban yang kucari ternyata bukan jauh—melainkan di sampingku.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 11,
    question: L(
      '내 드라마의 OST 분위기는?',
      'What is the OST vibe of my drama?',
      '私のドラマのOSTの雰囲気は？',
      '我这部剧的OST氛围是？',
      '我這部劇的OST氛圍是？',
      'Không khí OST của phim tôi là?',
      'Suasana OST dramaku?'
    ),
    options: [
      {
        text: L(
          '긴장감 넘치고 웅장한 오케스트라. 복수와 결말의 감동',
          'Tense, grand orchestra—the emotion of revenge and the finale.',
          '緊張感あふれる壮大なオーケストラ。復讐と結末の感動。',
          '紧张感十足的宏伟管弦乐。复仇与结局的感动。',
          '緊張感十足的宏偉管弦樂。復仇與結局的感動。',
          'Dàn nhạc hùng vĩ đầy căng thẳng—cảm xúc của trả thù và kết thúc.',
          'Orkestra megah penuh tensi—emosi balas dendam dan klimaks.'
        ),
        score: 0,
      },
      {
        text: L(
          '강렬하고 파워풀한 사운드. 도전과 승리의 에너지',
          'Intense, powerful sound—the energy of challenge and victory.',
          '強烈でパワフルなサウンド。挑戦と勝利のエネルギー。',
          '强烈有力的音效。挑战与胜利的能量。',
          '強烈有力的音效。挑戰與勝利的能量。',
          'Âm thanh mạnh mẽ và dữ dội—năng lượng của thử thách và chiến thắng.',
          'Suara intens dan powerful—energi tantangan dan kemenangan.'
        ),
        score: 1,
      },
      {
        text: L(
          '서정적이고 감성적인 발라드. 성장과 감동의 여운',
          'Lyrical, emotional ballad—the lingering feeling of growth and inspiration.',
          '叙情的で感性的なバラード。成長と感動の余韻。',
          '抒情感性的抒情曲。成长与感动的余韵。',
          '抒情感性的抒情曲。成長與感動的餘韻。',
          'Ballad trữ tình và đầy cảm xúc—dư vị của trưởng thành và cảm động.',
          'Balada lirik dan emosional—sisa rasa pertumbuhan dan inspirasi.'
        ),
        score: 2,
      },
      {
        text: L(
          '따뜻하고 잔잔한 어쿠스틱. 일상과 연결의 감성',
          'Warm, gentle acoustic—the feeling of everyday life and connection.',
          '温かく穏やかなアコースティック。日常とつながりの感性。',
          '温暖轻柔的原声吉他。日常与连结的感性。',
          '溫暖輕柔的原聲吉他。日常與連結的感性。',
          'Acoustic ấm áp và nhẹ nhàng—cảm xúc của đời thường và sự kết nối.',
          'Akustik hangat dan lembut—nuansa kehidupan sehari-hari dan koneksi.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 12,
    question: L(
      '내 드라마가 끝날 때 나는?',
      'When my drama ends, I…',
      '私のドラマが終わるとき、私は？',
      '当我的剧结束时，我会？',
      '當我的劇結束時，我會？',
      'Khi phim của tôi kết thúc, tôi sẽ…',
      'Saat dramaku berakhir, aku…'
    ),
    options: [
      {
        text: L(
          '오랜 싸움 끝에 마침내 모든 것을 되찾고 진짜 삶을 시작한다',
          'After a long fight, I finally reclaim everything and start my real life.',
          '長い戦いの末、ついにすべてを取り戻し、本当の人生を始める。',
          '经过漫长战斗，终于夺回一切，开始真正的人生。',
          '經過漫長戰鬥，終於奪回一切，開始真正的人生。',
          'Sau cuộc chiến dài, cuối cùng lấy lại tất cả và bắt đầu cuộc sống thật.',
          'Setelah perjuangan panjang, akhirnya merebut kembali semuanya dan memulai hidup sejati.'
        ),
        score: 0,
      },
      {
        text: L(
          '정상에 올라섰지만 그보다 중요한 것을 깨닫고 진짜 나로 돌아온다',
          'I reach the top but realize what matters more—and return to my true self.',
          '頂点に立つが、それ以上に大切なことに気づき、本当の自分に戻る。',
          '站上巅峰，却领悟更重要的东西，回归真正的自己。',
          '站上巔峰，卻領悟更重要的東西，回歸真正的自己。',
          'Lên đỉnh cao nhưng nhận ra điều quan trọng hơn—và trở lại với con người thật.',
          'Mencapai puncak tapi menyadari hal yang lebih penting—dan kembali menjadi diri sendiri.'
        ),
        score: 1,
      },
      {
        text: L(
          '아무도 몰라봤던 내가 가장 빛나는 사람이 됐다는 것을 증명한다',
          'I prove that the me no one noticed has become the one who shines brightest.',
          '誰にも見向きもされなかった私が、いちばん輝く人になったことを証明する。',
          '证明那个无人关注的自己，成了最闪耀的人。',
          '證明那個無人關注的自己，成了最閃耀的人。',
          'Chứng minh rằng tôi—người từng bị bỏ qua—đã trở thành người tỏa sáng nhất.',
          'Membuktikan bahwa diriku yang dulu diabaikan kini jadi yang paling bersinar.'
        ),
        score: 2,
      },
      {
        text: L(
          '화려한 결말보다 소소하지만 진짜 행복한 일상으로 마무리된다',
          'It ends not with a flashy finale, but with small, genuine everyday happiness.',
          '派手な結末より、小さくても本当に幸せな日常で幕を閉じる。',
          '不是华丽结局，而是以平凡却真实的幸福日常收尾。',
          '不是華麗結局，而是以平凡卻真實的幸福日常收尾。',
          'Không phải kết thúc rực rỡ, mà là những ngày bình dị nhưng thật sự hạnh phúc.',
          'Berakhir bukan dengan klimaks megah, tapi kebahagiaan sehari-hari yang sederhana dan nyata.'
        ),
        score: 3,
      },
    ],
  },
];

export const phase3KdramaLeadCharacterTypeResults: Phase3KdramaLeadCharacterTypeResult[] = [
  {
    type: 'Type1',
    emoji: '🖤',
    title: L(
      '반드시 되갚아주는, 복수극 주인공 재질',
      'The Revenge Drama Lead Who Always Pays Back',
      '必ず返す、復讐ドラマ主人公タイプ',
      '必会讨回来的复仇剧主角型',
      '必會討回來的復仇劇主角型',
      'Kiểu nhân vật chính phim trả thù—nhất định trả lại',
      'Tipe protagonis drama balas dendam yang pasti membalas'
    ),
    shortDescription: L(
      '"당신은 참고, 기억하고, 마침내 되갚아주는 사람입니다."',
      '"You endure, remember, and finally pay them back."',
      '「あなたは我慢し、覚え、そして必ず返す人です。」',
      '「你会忍耐、记住，并最终讨回来。」',
      '「你會忍耐、記住，並最終討回來。」',
      '"Bạn chịu đựng, ghi nhớ, và cuối cùng trả lại."',
      '"Kamu menahan diri, mengingat, dan akhirnya membalas."'
    ),
    description: L(
      '당신의 K-드라마: 치밀하게 계획된 복수가 시작되는 이야기\n\n억울한 일이 있어도 바로 터뜨리지 않습니다. 조용히 기억해두고 치밀하게 준비합니다. 나를 무시하거나 배신한 사람들은 결국 당신 앞에서 무너지게 됩니다. 감정을 드러내지 않는 차가운 눈빛, 계획대로 움직이는 냉정함, 그리고 결정적인 순간의 통쾌한 반격. 이것이 당신의 드라마입니다.',
      'Your K-Drama: A story where a meticulously planned revenge begins.\n\nWhen something unfair happens, you do not explode right away. You remember quietly and prepare with precision. Those who looked down on or betrayed you eventually crumble before you. A cold gaze that hides emotion, calm moves that follow the plan, and a satisfying counterstrike at the decisive moment—that is your drama.',
      'あなたのK-ドラマ：緻密に計画された復讐が始まる物語\n\n理不尽があっても、すぐには爆発しない。静かに覚え、緻密に準備する。自分を見下したり裏切った人たちは、結局あなたの前で崩れ落ちる。感情を見せない冷たい眼差し、計画通りに動く冷静さ、そして決定的な瞬間の痛快な反撃。それがあなたのドラマです。',
      '你的韩剧：一场精密复仇悄然开始的故事\n\n遇到委屈也不会立刻爆发。你会静静记住，周密准备。那些轻视或背叛你的人，最终会在你面前溃败。不露情绪的眼神、按计划行动的冷静，以及关键时刻痛快的反击——这就是你的剧。',
      '你的韓劇：一場精密復仇悄然開始的故事\n\n遇到委屈也不會立刻爆發。你會靜靜記住，周密準備。那些輕視或背叛你的人，最終會在你面前潰敗。不露情緒的眼神、按計畫行動的冷靜，以及關鍵時刻痛快的反擊——這就是你的劇。',
      'K-Drama của bạn: Câu chuyện nơi cuộc trả thù được chuẩn bị tỉ mỉ bắt đầu.\n\nDù oan ức, bạn không bùng nổ ngay. Bạn âm thầm ghi nhớ và chuẩn bị kỹ lưỡng. Những người coi thường hoặc phản bội cuối cùng sụp đổ trước mặt bạn. Ánh mắt lạnh không lộ cảm xúc, sự lạnh lùng hành động theo kế hoạch, và đòn phản công thỏa mãn ở khoảnh khắc quyết định—đó là phim của bạn.',
      'K-Drama-mu: Kisah balas dendam yang dirancang rapi mulai dimulai.\n\nSaat ada ketidakadilan, kamu tidak meledak langsung. Kamu mengingat dengan tenang dan mempersiapkan dengan cermat. Mereka yang meremehkan atau mengkhianatimu akhirnya runtuh di hadapanmu. Tatapan dingin tanpa emosi, ketenangan yang bergerak sesuai rencana, dan serangan balik yang memuaskan di momen penentu—itulah dramamu.'
    ),
    dramaClimax: L(
      '나를 짓밟았던 사람들이 내 앞에서 무너지는 장면',
      'The scene where those who crushed me crumble before me',
      '私を踏みにじった人たちが私の前で崩れる場面',
      '曾经践踏我的人在我面前溃败的场景',
      '曾經踐踏我的人在我面前潰敗的場景',
      'Cảnh những người từng đè bẹp tôi sụp đổ trước mặt tôi',
      'Adegan orang yang pernah menghancurkanku runtuh di hadapanku'
    ),
    dramaSupportingRole: L(
      '나의 과거를 아는 단 한 명의 절대적 아군',
      'The one absolute ally who knows my past',
      '私の過去を知る、たった一人の絶対的な味方',
      '唯一了解我过去、绝对站在我这边的盟友',
      '唯一了解我過去、絕對站在我這邊的盟友',
      'Người đồng minh tuyệt đối duy nhất biết quá khứ của tôi',
      'Satu-satunya sekutu absolut yang tahu masa laluku'
    ),
    dramaOst: L(
      '긴장감 넘치는 웅장한 오케스트라',
      'A tense, grand orchestra',
      '緊張感あふれる壮大なオーケストラ',
      '紧张感十足的宏伟管弦乐',
      '緊張感十足的宏偉管弦樂',
      'Dàn nhạc hùng vĩ đầy căng thẳng',
      'Orkestra megah penuh tensi'
    ),
    empathyLevel: L(
      '복수극·스릴러·재벌 비화',
      'Revenge dramas, thrillers, chaebol sagas',
      '復讐劇・スリラー・財閥の秘話',
      '复仇剧、惊悚剧、财阀秘史',
      '復仇劇、驚悚劇、財閥秘史',
      'Phim trả thù, thriller, câu chuyện tập đoàn tài phiệt',
      'Drama balas dendam, thriller, kisah konglomerat'
    ),
    characteristics: L(
      '치밀한 복수를 준비하는 냉정한 주인공, 재벌집 막내아들·펜트하우스·마스크걸 감성, 말보다 행동으로 보여주는 사람',
      'A cool lead preparing meticulous revenge, Reborn Rich / The Penthouse / Mask Girl vibes, someone who shows rather than tells',
      '緻密な復讐を準備する冷静な主人公、Reborn Rich・The Penthouse・Mask Girlの感性、言葉より行動で示す人',
      '冷静筹备精密复仇的主角，Reborn Rich / The Penthouse / Mask Girl 气质，用行动而非言语证明的人',
      '冷靜籌備精密復仇的主角，Reborn Rich / The Penthouse / Mask Girl 氣質，用行動而非言語證明的人',
      'Nhân vật chính lạnh lùng chuẩn bị trả thù tỉ mỉ, vibe Reborn Rich / The Penthouse / Mask Girl, người chứng minh bằng hành động hơn lời nói',
      'Protagonis dingin yang menyiapkan balas dendam rapi, nuansa Reborn Rich / The Penthouse / Mask Girl, orang yang membuktikan lewat tindakan'
    ),
    goodMatch: L(
      '기다려. 반드시 되돌려준다.',
      'Wait. I will pay you back.',
      '待っていろ。必ず返す。',
      '等着。我一定会讨回来。',
      '等著。我一定會討回來。',
      'Chờ đi. Nhất định trả lại.',
      'Tunggu saja. Pasti kubalas.'
    ),
    badMatch: L(
      '그는 10년을 기다렸다. 그리고 드디어 시작됐다.',
      'He waited ten years. And finally, it began.',
      '彼は10年待った。そして、ついに始まった。',
      '他等了十年。终于，开始了。',
      '他等了十年。終於，開始了。',
      'Anh ấy đã chờ mười năm. Và cuối cùng, bắt đầu.',
      'Dia menunggu sepuluh tahun. Dan akhirnya, dimulai.'
    ),
    shareSnippet: L(
      '내 K-드라마 재질은 복수극 주인공 🖤 치밀하게 참고 반드시 되갚아주는 유형... 이게 나 맞음 → 너는 어떤 드라마 주인공이야?',
      'My K-Drama lead type is revenge drama protagonist 🖤 the kind who waits, plans, and always pays back... sounds like me → what kind of drama lead are you?',
      '私のK-ドラマ主人公タイプは復讐ドラマ主人公 🖤 緻密に我慢して必ず返すタイプ…これ私だわ → あなたはどんなドラマ主人公？',
      '我的韩剧主角类型是复仇剧主角 🖤 精密忍耐、必会讨回来的那种…好像就是我 → 你是什么类型的剧主角？',
      '我的韓劇主角類型是復仇劇主角 🖤 精密忍耐、必會討回來的那種…好像就是我 → 你是什麼類型的劇主角？',
      'Kiểu nhân vật chính K-Drama của tôi là phim trả thù 🖤 kiểu nhịn rồi lên kế hoạch và nhất định trả lại… đúng là tôi → bạn là kiểu gì?',
      'Tipe protagonis K-Drama-ku drama balas dendam 🖤 yang sabar, merencana, dan pasti membalas… beneran aku nih → kamu tipe protagonis apa?'
    ),
  },
  {
    type: 'Type2',
    emoji: '👑',
    title: L(
      '어디서든 중심이 되는, 재벌 로맨스 주인공 재질',
      'The Chaebol Romance Lead Who Becomes the Center Everywhere',
      'どこでも中心になる、財閥ロマンス主人公タイプ',
      '走到哪里都是焦点的财阀爱情主角型',
      '走到哪裡都是焦點的財閥愛情主角型',
      'Kiểu nhân vật chính phim tài phiệt lãng mạn—luôn là trung tâm',
      'Tipe protagonis drama romantis konglomerat yang jadi pusat di mana pun'
    ),
    shortDescription: L(
      '"당신은 어디서든 자연스럽게 주인공이 됩니다."',
      '"You naturally become the protagonist wherever you go."',
      '「あなたはどこにいても自然と主人公になります。」',
      '「你走到哪里都会自然成为主角。」',
      '「你走到哪裡都會自然成為主角。」',
      '"Bạn tự nhiên trở thành nhân vật chính ở bất cứ đâu."',
      '"Kamu alami menjadi protagonis di mana pun."'
    ),
    description: L(
      '당신의 K-드라마: 당당함과 카리스마로 모든 상황을 뒤집는 이야기\n\n억울한 일이 생기면 그 자리에서 당당하게 맞섭니다. 사람들이 자연스럽게 당신을 중심으로 모이고, 아무도 기대하지 않았던 상황에서도 당신이 가장 빛납니다. 세련된 오피스나 법정을 배경으로 라이벌과 치열하게 경쟁하면서도 결국 자신의 길을 만들어가는 타입입니다.',
      'Your K-Drama: A story where confidence and charisma flip every situation.\n\nWhen something unfair happens, you stand your ground right there. People naturally gather around you, and even in situations no one expected, you shine brightest. Set against sleek offices or courtrooms, you fiercely compete with rivals while carving your own path.',
      'あなたのK-ドラマ：堂々とした態度とカリスマですべての状況をひっくり返す物語\n\n理不尽が起きれば、その場で堂々と立ち向かう。人々は自然とあなたを中心に集まり、誰も予想しなかった状況でもあなたがいちばん輝く。洗練されたオフィスや法廷を舞台に、ライバルと激しく競いながらも自分の道を切り開くタイプです。',
      '你的韩剧：用自信与魅力翻转一切的故事\n\n遇到委屈就会当场堂堂正正地应对。人们自然以你为中心聚集，即使在无人预料的情况下，你也最闪耀。以精致办公室或法庭为背景，与对手激烈竞争，同时走出自己的路。',
      '你的韓劇：用自信與魅力翻轉一切的故事\n\n遇到委屈就會當場堂堂正正地應對。人們自然以你為中心聚集，即使在無人預料的情況下，你也最閃耀。以精緻辦公室或法庭為背景，與對手激烈競爭，同時走出自己的路。',
      'K-Drama của bạn: Câu chuyện nơi sự tự tin và charisma lật ngược mọi tình huống.\n\nKhi oan ức, bạn đối diện ngay tại chỗ. Mọi người tự nhiên quây quanh bạn, và ngay cả trong tình huống không ai ngờ tới, bạn vẫn tỏa sáng nhất. Bối cảnh văn phòng hay tòa án sang trọng, bạn cạnh tranh gay gắt với đối thủ nhưng vẫn mở ra con đường riêng.',
      'K-Drama-mu: Kisah di mana kepercayaan diri dan karisma membalikkan setiap situasi.\n\nSaat ada ketidakadilan, kamu berdiri tegak di tempat. Orang-orang alami berkumpul di sekitarmu, dan bahkan di situasi tak terduga, kamu yang paling bersinar. Di latar kantor atau pengadilan elegan, kamu bersaing sengit dengan rival sambil membuka jalanmu sendiri.'
    ),
    dramaClimax: L(
      '아무도 안 된다고 했는데 내가 해낸 그 순간',
      'The moment I did it when everyone said I could not',
      '誰も無理だと言ったのに、私がやり遂げたあの瞬間',
      '所有人都说不可能，但我做到的那一刻',
      '所有人都說不可能，但我做到的那一刻',
      'Khoảnh khắc tôi làm được khi ai cũng bảo không thể',
      'Momen aku berhasil saat semua bilang mustahil'
    ),
    dramaSupportingRole: L(
      '나와 부딪히고 경쟁하다 결국 파트너가 되는 라이벌',
      'A rival who clashes with me and eventually becomes my partner',
      '私とぶつかり競い、最終的にパートナーになるライバル',
      '与我碰撞竞争，最终成为伙伴的对手',
      '與我碰撞競爭，最終成為夥伴的對手',
      'Đối thủ va chạm và cạnh tranh với tôi, cuối cùng trở thành đồng đội',
      'Rival yang bentrok dan bersaing denganku, akhirnya jadi partner'
    ),
    dramaOst: L(
      '강렬하고 파워풀한 도전의 사운드',
      'An intense, powerful sound of challenge',
      '強烈でパワフルな挑戦のサウンド',
      '强烈有力的挑战音效',
      '強烈有力的挑戰音效',
      'Âm thanh thử thách mạnh mẽ và dữ dội',
      'Suara tantangan yang intens dan powerful'
    ),
    empathyLevel: L(
      '재벌 로맨스·법정·의학 드라마',
      'Chaebol romance, courtroom, medical dramas',
      '財閥ロマンス・法廷・医療ドラマ',
      '财阀爱情、法庭、医疗剧',
      '財閥愛情、法庭、醫療劇',
      'Phim lãng mạn tài phiệt, tòa án, y khoa',
      'Drama romantis konglomerat, pengadilan, medis'
    ),
    characteristics: L(
      '카리스마 넘치는 주인공, 이태원클라쓰·미생·낭만닥터 감성, 억울하면 바로 말하는 사람',
      'A charismatic lead, Itaewon Class / Misaeng / Romantic Doctor vibes, someone who speaks up when wronged',
      'カリスマあふれる主人公、Itaewon Class・Misaeng・Romantic Doctorの感性、理不尽にはすぐ言う人',
      '魅力十足的主角，Itaewon Class / Misaeng / Romantic Doctor 气质，受委屈就当场说的人',
      '魅力十足的主角，Itaewon Class / Misaeng / Romantic Doctor 氣質，受委屈就當場說的人',
      'Nhân vật chính đầy charisma, vibe Itaewon Class / Misaeng / Romantic Doctor, người nói thẳng khi bị oan',
      'Protagonis penuh karisma, nuansa Itaewon Class / Misaeng / Romantic Doctor, orang yang langsung bicara saat dizalimi'
    ),
    goodMatch: L(
      '내가 틀렸다고? 두고 봐. 내가 증명해줄게.',
      'You think I am wrong? Watch me. I will prove it.',
      '私が間違ってる？見てろ。証明してやる。',
      '说我错了？等着看。我会证明给你看。',
      '說我錯了？等著看。我會證明給你看。',
      'Tôi sai à? Cứ xem đi. Tôi sẽ chứng minh.',
      'Aku salah? Tunggu saja. Akan kubuktikan.'
    ),
    badMatch: L(
      '그녀는 어디서나 주인공이었다. 본인만 몰랐을 뿐.',
      'She was the protagonist everywhere. She just did not know it.',
      '彼女はどこでも主人公だった。本人だけが知らなかっただけ。',
      '她走到哪里都是主角。只是她自己不知道。',
      '她走到哪裡都是主角。只是她自己不知道。',
      'Cô ấy là nhân vật chính ở mọi nơi. Chỉ bản thân cô không biết.',
      'Dia protagonis di mana-mana. Hanya dirinya yang belum tahu.'
    ),
    shareSnippet: L(
      '내 K-드라마 재질은 재벌 로맨스 주인공 👑 어디서든 카리스마로 상황 뒤집는 유형 ㅋㅋ → 너는 어떤 드라마 주인공이야?',
      'My K-Drama lead type is chaebol romance protagonist 👑 the kind who flips situations with charisma everywhere lol → what kind of drama lead are you?',
      '私のK-ドラマ主人公タイプは財閥ロマンス主人公 👑 どこでもカリスマで状況をひっくり返すタイプw → あなたはどんなドラマ主人公？',
      '我的韩剧主角类型是财阀爱情主角 👑 走到哪里都用魅力翻转局面那种哈哈 → 你是什么类型的剧主角？',
      '我的韓劇主角類型是財閥愛情主角 👑 走到哪裡都用魅力翻轉局面那種哈哈 → 你是什麼類型的劇主角？',
      'Kiểu nhân vật chính K-Drama của tôi là phim tài phiệt lãng mạn 👑 kiểu lật tình huống bằng charisma ở đâu cũng vậy haha → bạn là kiểu gì?',
      'Tipe protagonis K-Drama-ku drama romantis konglomerat 👑 yang balik situasi pakai karisma di mana pun wkwk → kamu tipe protagonis apa?'
    ),
  },
  {
    type: 'Type3',
    emoji: '📈',
    title: L(
      '묵묵히 성장해서 빛나는, 직장 성장 드라마 주인공 재질',
      'The Workplace Growth Lead Who Quietly Rises and Shines',
      '黙々と成長して輝く、職場成長ドラマ主人公タイプ',
      '默默成长最终闪耀的职场成长主角型',
      '默默成長最終閃耀的職場成長主角型',
      'Kiểu nhân vật chính phim trưởng thành nơi làm việc—lặng lẽ vươn lên và tỏa sáng',
      'Tipe protagonis drama pertumbuhan karier yang diam-diam naik dan bersinar'
    ),
    shortDescription: L(
      '"당신은 처음엔 무시당하지만 끝엔 가장 빛납니다."',
      '"You are overlooked at first, but shine brightest in the end."',
      '「あなたは最初は軽視されるが、最後にいちばん輝きます。」',
      '「你起初被忽视，但最后最闪耀。」',
      '「你起初被忽視，但最後最閃耀。」',
      '"Ban đầu bạn bị xem thường, nhưng cuối cùng tỏa sáng nhất."',
      '"Awalnya diremehkan, tapi akhirnya yang paling bersinar."'
    ),
    description: L(
      '당신의 K-드라마: 아무도 몰라봤는데 결국 가장 멀리 간 사람의 이야기\n\n소란스럽게 나서지 않습니다. 대신 조용히, 철저히, 준비합니다. 처음엔 아무도 당신을 주목하지 않습니다. 그런데 어느 순간 모두가 당신을 주목하고 있습니다. 결과로 증명하는 것이 가장 통쾌한 복수라는 걸 몸으로 알고 있는 사람입니다.',
      'Your K-Drama: The story of someone no one noticed who went the farthest.\n\nYou do not step forward loudly. Instead, you prepare quietly and thoroughly. At first, no one pays attention to you. Then, in an instant, everyone does. You know in your bones that proving yourself with results is the most satisfying revenge.',
      'あなたのK-ドラマ：誰にも見向きもされなかったのに、結局いちばん遠くまで行った人の物語\n\n騒々しく前に出ない。代わりに静かに、徹底的に準備する。最初は誰もあなたに注目しない。でもある瞬間、みんながあなたを見ている。結果で証明することがいちばん痛快な復讐だと、体で知っている人です。',
      '你的韩剧：无人关注却最终走得最远的人的故事\n\n不会高调出头。而是安静、彻底地准备。起初没人注意你。但某一瞬间，所有人都在看你。你深知用结果证明才是最痛快的报复。',
      '你的韓劇：無人關注卻最終走得最遠的人的故事\n\n不會高調出頭。而是安靜、徹底地準備。起初沒人注意你。但某一瞬間，所有人都在看你。你深知用結果證明才是最痛快的報復。',
      'K-Drama của bạn: Câu chuyện người không ai để ý nhưng cuối cùng đi xa nhất.\n\nBạn không chen lên ồn ào. Thay vào đó, chuẩn bị lặng lẽ và kỹ lưỡng. Ban đầu không ai chú ý. Rồi đột nhiên, mọi người đều nhìn bạn. Bạn biết rõ chứng minh bằng kết quả mới là trả thù thỏa mãn nhất.',
      'K-Drama-mu: Kisah orang yang tidak diperhatikan tapi akhirnya melangkah paling jauh.\n\nKamu tidak tampil dengan bising. Sebaliknya, kamu mempersiapkan dengan tenang dan teliti. Awalnya tidak ada yang memperhatikan. Lalu tiba-tiba, semua orang melihatmu. Kamu tahu membuktikan lewat hasil adalah balas dendam paling memuaskan.'
    ),
    dramaClimax: L(
      '아무도 몰라봤던 내가 가장 중요한 사람이 됐다는 게 밝혀지는 장면',
      'The reveal that the overlooked me was the most important person',
      '誰にも見向きもされなかった私が、いちばん重要な人だったと明かされる場面',
      '揭示那个被忽视的我其实是最关键的人的场景',
      '揭示那個被忽視的我其實是最關鍵的人的場景',
      'Cảnh hé lộ rằng tôi—người bị bỏ qua—là người quan trọng nhất',
      'Adegan pengungkapan bahwa diriku yang diabaikan ternyata orang paling penting'
    ),
    dramaSupportingRole: L(
      '나의 가능성을 먼저 알아본 멘토',
      'A mentor who saw my potential first',
      '私の可能性を最初に見抜いたメンター',
      '最先发现我潜力的导师',
      '最先發現我潛力的導師',
      'Người cố vấn nhìn thấy tiềm năng của tôi trước tiên',
      'Mentor yang pertama melihat potensiku'
    ),
    dramaOst: L(
      '서정적이고 감동적인 성장의 발라드',
      'A lyrical, moving ballad of growth',
      '叙情的で感動的な成長のバラード',
      '抒情感人的成长抒情曲',
      '抒情感人的成長抒情曲',
      'Ballad trưởng thành trữ tình và cảm động',
      'Balada pertumbuhan yang lirik dan mengharukan'
    ),
    empathyLevel: L(
      '직장 성장 드라마·청춘물·언더독 서사',
      'Workplace growth dramas, youth stories, underdog narratives',
      '職場成長ドラマ・青春もの・アンダードッグ物語',
      '职场成长剧、青春剧、逆袭叙事',
      '職場成長劇、青春劇、逆襲敘事',
      'Phim trưởng thành nơi làm việc, thanh xuân, câu chuyện underdog',
      'Drama pertumbuhan karier, coming-of-age, narasi underdog'
    ),
    characteristics: L(
      '조용히 실력을 쌓다가 결정적 순간 빛나는 주인공, 미생·스물다섯 스물하나·드래곤라자 감성, 말보다 결과로 보여주는 사람',
      'A lead who builds skills quietly and shines at the decisive moment, Misaeng / Twenty-Five Twenty-One / Rookie vibes, someone who proves with results not words',
      '静かに実力を積み、決定的な瞬間に輝く主人公、Misaeng・Twenty-Five Twenty-One・Rookieの感性、言葉より結果で示す人',
      '安静积累实力、关键时刻闪耀的主角，Misaeng / Twenty-Five Twenty-One / Rookie 气质，用结果而非言语证明的人',
      '安靜累積實力、關鍵時刻閃耀的主角，Misaeng / Twenty-Five Twenty-One / Rookie 氣質，用結果而非言語證明的人',
      'Nhân vật chính âm thầm tích lũy năng lực rồi tỏa sáng ở khoảnh khắc quyết định, vibe Misaeng / Twenty-Five Twenty-One / Rookie, người chứng minh bằng kết quả',
      'Protagonis yang diam-diam bangun skill lalu bersinar di momen penentu, nuansa Misaeng / Twenty-Five Twenty-One / Rookie, orang yang membuktikan lewat hasil'
    ),
    goodMatch: L(
      '내가 못 한다고 했죠? 이제 보여드릴게요.',
      'You said I could not do it? Let me show you now.',
      '私には無理だと言いましたよね？今、見せます。',
      '你说我不行？现在让你看看。',
      '你說我不行？現在讓你看看。',
      'Bảo tôi không làm được à? Giờ tôi cho bạn thấy.',
      'Kamu bilang aku tidak bisa? Sekarang lihat ini.'
    ),
    badMatch: L(
      '평범해 보였던 그가 사실 가장 대단한 사람이었다.',
      'The one who seemed ordinary was actually the most extraordinary.',
      '平凡に見えた彼が、実はいちばんすごい人だった。',
      '看似平凡的他，其实是最了不起的人。',
      '看似平凡的他，其實是最了不起的人。',
      'Người trông bình thường thực ra là người phi thường nhất.',
      'Yang terlihat biasa ternyata orang paling luar biasa.'
    ),
    shareSnippet: L(
      '내 K-드라마 재질은 직장 성장 드라마 주인공 📈 처음엔 무시당하다 끝엔 빛나는 유형... 현실에서도 그러길 바람 ㅠ → 너는?',
      'My K-Drama lead type is workplace growth protagonist 📈 overlooked at first, shining at the end... hoping real life works that way too ㅠ → what about you?',
      '私のK-ドラマ主人公タイプは職場成長ドラマ主人公 📈 最初は軽視されて最後に輝くタイプ…現実でもそうあってほしい → あなたは？',
      '我的韩剧主角类型是职场成长主角 📈 先被忽视后闪耀那种…希望现实也这样 ㅠ → 你呢？',
      '我的韓劇主角類型是職場成長主角 📈 先被忽視後閃耀那種…希望現實也這樣 ㅠ → 你呢？',
      'Kiểu nhân vật chính K-Drama của tôi là phim trưởng thành nơi làm việc 📈 bị xem thường rồi cuối cùng tỏa sáng… mong đời thật cũng vậy ㅠ → còn bạn?',
      'Tipe protagonis K-Drama-ku drama pertumbuhan karier 📈 diremehkan dulu, bersinar di akhir… semoga hidup nyata juga gitu ㅠ → kamu?'
    ),
  },
  {
    type: 'Type4',
    emoji: '🌸',
    title: L(
      '어디서나 설레는, 청춘 로맨스 드라마 주인공 재질',
      'The Youth Romance Lead Who Makes Every Moment Spark',
      'どこでもときめく、青春ロマンスドラマ主人公タイプ',
      '走到哪里都让人心动的青春爱情主角型',
      '走到哪裡都讓人心動的青春愛情主角型',
      'Kiểu nhân vật chính phim lãng mạn thanh xuân—khiến mọi khoảnh khắc đều rung động',
      'Tipe protagonis drama romansa muda yang bikin setiap momen berdebar'
    ),
    shortDescription: L(
      '"당신의 삶은 언제 어느 순간도 드라마가 될 수 있습니다."',
      '"Your life can become a drama at any moment."',
      '「あなたの人生は、いつどの瞬間もドラマになり得ます。」',
      '「你的人生随时都可能变成一部剧。」',
      '「你的人生隨時都可能變成一部劇。」',
      '"Cuộc đời bạn có thể thành phim bất cứ lúc nào."',
      '"Hidupmu bisa jadi drama kapan saja."'
    ),
    description: L(
      '당신의 K-드라마: 평범한 일상이 갑자기 드라마가 되는 이야기\n\n특별한 능력이 있어서가 아닙니다. 어디서나 진심이고 솔직하기 때문입니다. 예상치 못한 만남에서 인생이 바뀌고, 평범한 날에 갑자기 운명 같은 순간이 찾아옵니다. 누구와도 금방 친해지는 따뜻함이 당신 주변에 좋은 사람들을 모이게 만들고 그 관계들이 당신의 드라마를 완성합니다.',
      'Your K-Drama: A story where ordinary daily life suddenly becomes a drama.\n\nIt is not because you have special powers—it is because you are sincere and honest everywhere you go. Life changes through unexpected encounters, and on an ordinary day, a fateful moment arrives. Your warmth that lets you befriend anyone draws good people around you, and those relationships complete your drama.',
      'あなたのK-ドラマ：普通の日常が突然ドラマになる物語\n\n特別な能力があるからではない。どこでも真心で正直だから。予想外の出会いで人生が変わり、普通の日に突然運命のような瞬間が訪れる。誰とでもすぐ仲良くなれる温かさが、周りにいい人を集め、その関係があなたのドラマを完成させる。',
      '你的韩剧：平凡日常突然变成剧的故事\n\n不是因为有什么特殊能力，而是因为走到哪里都真诚坦率。在意想不到的相遇中人生改变，在普通的一天突然迎来命运般的时刻。你和谁都能很快熟络的温暖，把好人聚集到你身边，这些关系构成了你的剧。',
      '你的韓劇：平凡日常突然變成劇的故事\n\n不是因為有什麼特殊能力，而是因為走到哪裡都真誠坦率。在意想不到的相遇中人生改變，在普通的一天突然迎來命運般的時刻。你和誰都能很快熟絡的溫暖，把好人聚集到你身邊，這些關係構成了你的劇。',
      'K-Drama của bạn: Câu chuyện nơi đời thường bình dị đột nhiên thành phim.\n\nKhông phải vì bạn có siêu năng lực—mà vì bạn chân thành và thẳng thắn ở mọi nơi. Cuộc đời thay đổi qua những cuộc gặp bất ngờ, và trong một ngày bình thường, khoảnh khắc định mệnh xuất hiện. Sự ấm áp giúp bạn thân thiết với ai cũng vậy thu hút người tốt, và những mối quan hệ đó hoàn thiện phim của bạn.',
      'K-Drama-mu: Kisah di mana kehidupan sehari-hari biasa tiba-tiba jadi drama.\n\nBukan karena kamu punya kekuatan khusus—tapi karena kamu tulus dan jujur di mana pun. Hidup berubah lewat pertemuan tak terduga, dan di hari biasa, momen takdir datang. Kehangatanmu yang cepat akrab dengan siapa saja mengumpulkan orang-orang baik, dan relasi itu melengkapi dramamu.'
    ),
    dramaClimax: L(
      '찾고 있던 답이 멀리 있는 게 아니라 내 옆에 있었다는 걸 깨닫는 순간',
      'The moment you realize the answer you sought was beside you all along',
      '探していた答えが遠くではなく、私のそばにあったと気づく瞬間',
      '领悟一直在找的答案不在远方、就在身边的那一刻',
      '領悟一直在找的答案不在遠方、就在身邊的那一刻',
      'Khoảnh khắc nhận ra câu trả lời mình tìm không ở xa mà ngay bên cạnh',
      'Momen sadar jawaban yang dicari ternyata ada di sampingmu sejak awal'
    ),
    dramaSupportingRole: L(
      '언제나 옆에 있어주는 따뜻한 동반자',
      'A warm companion who is always by your side',
      'いつもそばにいてくれる温かい伴侶',
      '始终陪在身边的温暖伴侣',
      '始終陪在身邊的溫暖伴侶',
      'Người bạn đời ấm áp luôn ở bên cạnh',
      'Pendamping hangat yang selalu ada di sampingmu'
    ),
    dramaOst: L(
      '설레고 따뜻한 청춘 발라드',
      'A fluttery, warm youth ballad',
      'ときめく温かい青春バラード',
      '心动又温暖的青春抒情曲',
      '心動又溫暖的青春抒情曲',
      'Ballad thanh xuân ấm áp và rạo rực',
      'Balada muda yang hangat dan bikin deg-degan'
    ),
    empathyLevel: L(
      '청춘 로맨스·학원물·일상 드라마',
      'Youth romance, school dramas, slice-of-life stories',
      '青春ロマンス・学園もの・日常ドラマ',
      '青春爱情、校园剧、日常剧',
      '青春愛情、校園劇、日常劇',
      'Phim lãng mạn thanh xuân, học đường, đời thường',
      'Drama romansa muda, sekolah, slice-of-life'
    ),
    characteristics: L(
      '평범한 것 같지만 모든 이야기의 중심이 되는 주인공, 응답하라 시리즈·도깨비·사랑의 불시착 감성, 어디서나 친구를 만드는 사람',
      'A lead who seems ordinary but becomes the center of every story, Reply series / Goblin / Crash Landing on You vibes, someone who makes friends everywhere',
      '平凡に見えるがすべての物語の中心になる主人公、Replyシリーズ・Goblin・Crash Landing on Youの感性、どこでも友だちを作る人',
      '看似平凡却是所有故事中心的主角，Reply 系列 / Goblin / Crash Landing on You 气质，走到哪里都能交朋友的人',
      '看似平凡卻是所有故事中心的主角，Reply 系列 / Goblin / Crash Landing on You 氣質，走到哪裡都能交朋友的人',
      'Nhân vật chính trông bình thường nhưng là trung tâm mọi câu chuyện, vibe Reply / Goblin / Crash Landing on You, người kết bạn ở đâu cũng vậy',
      'Protagonis yang terlihat biasa tapi jadi pusat setiap cerita, nuansa Reply / Goblin / Crash Landing on You, orang yang bisa berteman di mana pun'
    ),
    goodMatch: L(
      '이상하게 이 사람 주변에 있으면 다 잘 될 것 같아.',
      'Somehow, everything feels like it will work out around this person.',
      'なんだかこの人のそばにいると、全部うまくいきそう。',
      '奇怪地觉得，在这个人身边一切都会顺利。',
      '奇怪地覺得，在這個人身邊一切都會順利。',
      'Lạ thật, ở bên người này cứ cảm giác mọi thứ sẽ ổn.',
      'Anehnya, di dekat orang ini rasanya semua akan baik-baik saja.'
    ),
    badMatch: L(
      '그녀는 평범했다. 그래서 모든 게 특별해졌다.',
      'She was ordinary. And that is why everything became special.',
      '彼女は普通だった。だからすべてが特別になった。',
      '她很普通。所以一切才变得特别。',
      '她很普通。所以一切才變得特別。',
      'Cô ấy bình thường. Và vì vậy mọi thứ trở nên đặc biệt.',
      'Dia biasa saja. Dan karena itulah semuanya jadi spesial.'
    ),
    shareSnippet: L(
      '내 K-드라마 재질은 청춘 로맨스 주인공 🌸 평범한 일상이 드라마가 되는 유형. 맞는 것 같기도 하고 → 너는 어떤 드라마 주인공이야?',
      'My K-Drama lead type is youth romance protagonist 🌸 the kind whose ordinary life turns into a drama. Kinda feels right → what kind of drama lead are you?',
      '私のK-ドラマ主人公タイプは青春ロマンス主人公 🌸 普通の日常がドラマになるタイプ。なんか当たってる → あなたはどんなドラマ主人公？',
      '我的韩剧主角类型是青春爱情主角 🌸 平凡日常变剧的那种。好像挺准 → 你是什么类型的剧主角？',
      '我的韓劇主角類型是青春愛情主角 🌸 平凡日常變劇的那種。好像挺準 → 你是什麼類型的劇主角？',
      'Kiểu nhân vật chính K-Drama của tôi là phim lãng mạn thanh xuân 🌸 kiểu đời thường bình dị thành phim. Hơi đúng → bạn là kiểu gì?',
      'Tipe protagonis K-Drama-ku drama romansa muda 🌸 yang hidup biasa jadi drama. Kayaknya bener → kamu tipe protagonis apa?'
    ),
  },
  {
    type: 'Type5',
    emoji: '🔍',
    title: L(
      '진실을 파헤치는, 미스터리 스릴러 주인공 재질',
      'The Mystery Thriller Lead Who Uncovers the Truth',
      '真実を暴く、ミステリースリラー主人公タイプ',
      '揭开真相的悬疑惊悚主角型',
      '揭開真相的懸疑驚悚主角型',
      'Kiểu nhân vật chính phim bí ẩn giật gân—đào sâu sự thật',
      'Tipe protagonis misteri-thriller yang mengungkap kebenaran'
    ),
    shortDescription: L(
      '"당신은 남들이 보지 못하는 것을 봅니다."',
      '"You see what others cannot."',
      '「あなたは他人が見えないものを見ています。」',
      '「你能看见别人看不见的东西。」',
      '「你能看見別人看不見的東西。」',
      '"Bạn nhìn thấy những gì người khác không thấy."',
      '"Kamu melihat apa yang orang lain tidak lihat."'
    ),
    description: L(
      '당신의 K-드라마: 아무도 모르는 진실을 혼자 알고 있는 사람의 이야기\n\n직감이 강하고 상황을 빠르게 파악합니다. 이상한 낌새를 먼저 알아채고, 다른 사람들이 모르는 것을 혼자 눈치채는 경우가 많습니다. 평범한 일상 속에서 비밀과 거짓을 발견하고 진실을 향해 혼자 나아가는 외롭지만 강한 주인공입니다.',
      'Your K-Drama: The story of someone who alone knows a truth no one else does.\n\nYour intuition is strong and you read situations fast. You notice odd signs first and often catch what others miss. In ordinary daily life, you uncover secrets and lies and walk alone toward the truth—a lonely but strong protagonist.',
      'あなたのK-ドラマ：誰も知らない真実を一人で知っている人の物語\n\n直感が強く、状況を素早く把握する。変な気配を最初に察知し、他の人が気づかないことを一人で見抜くことが多い。普通の日常の中で秘密と嘘を見つけ、真実へ一人で進む、孤独だけど強い主人公です。',
      '你的韩剧：独自知晓无人所知真相的人的故事\n\n直觉强，能迅速把握局面。最先察觉异常气息，常常独自看破别人忽略的事。在平凡日常中发现秘密与谎言，独自走向真相——孤独却强大的主角。',
      '你的韓劇：獨自知曉無人所知真相的人的故事\n\n直覺強，能迅速把握局面。最先察覺異常氣息，常常獨自看破別人忽略的事。在平凡日常中發現秘密與謊言，獨自走向真相——孤獨卻強大的主角。',
      'K-Drama của bạn: Câu chuyện người một mình biết sự thật mà không ai biết.\n\nTrực giác mạnh và nắm bắt tình huống nhanh. Bạn nhận ra dấu hiệu lạ trước tiên và thường thấy điều người khác bỏ qua. Trong đời thường, bạn phát hiện bí mật và dối trá, bước một mình về phía sự thật—nhân vật chính cô đơn nhưng mạnh mẽ.',
      'K-Drama-mu: Kisah seseorang yang sendirian tahu kebenaran yang tak diketahui siapa pun.\n\nIntuisimu kuat dan cepat membaca situasi. Kamu pertama menyadari tanda aneh dan sering menangkap apa yang terlewat orang lain. Dalam kehidupan biasa, kamu menemukan rahasia dan kebohongan, melangkah sendiri menuju kebenaran—protagonis kesepian tapi kuat.'
    ),
    dramaClimax: L(
      '아무도 믿지 않았던 내 직감이 결국 맞았다는 게 밝혀지는 순간',
      'The moment it is revealed that my intuition—dismissed by everyone—was right',
      '誰も信じなかった私の直感が、結局正しかったと明かされる瞬間',
      '揭示无人相信的我的直觉终究是对的那一刻',
      '揭示無人相信的我的直覺終究是對的那一刻',
      'Khoảnh khắc hé lộ trực giác của tôi—không ai tin—cuối cùng đúng',
      'Momen terungkap bahwa intuisiku—yang tidak dipercaya siapa pun—ternyata benar'
    ),
    dramaSupportingRole: L(
      '나의 과거를 알고 끝까지 믿어주는 단 한 명',
      'The one person who knows my past and believes in me to the end',
      '私の過去を知り、最後まで信じてくれるたった一人',
      '唯一了解我过去并始终相信我的人',
      '唯一了解我過去並始終相信我的人',
      'Người duy nhất biết quá khứ tôi và tin tôi đến cùng',
      'Satu-satunya orang yang tahu masa laluku dan percaya sampai akhir'
    ),
    dramaOst: L(
      '긴장감 넘치고 서늘한 미스터리 사운드',
      'A tense, chilling mystery sound',
      '緊張感あふれる冷たいミステリーサウンド',
      '紧张又冷冽的悬疑音效',
      '緊張又冷冽的懸疑音效',
      'Âm thanh bí ẩn căng thẳng và lạnh lẽo',
      'Suara misteri penuh tensi dan dingin'
    ),
    empathyLevel: L(
      '미스터리·스릴러·추리 드라마',
      'Mystery, thriller, detective dramas',
      'ミステリー・スリラー・推理ドラマ',
      '悬疑、惊悚、推理剧',
      '懸疑、驚悚、推理劇',
      'Phim bí ẩn, giật gân, trinh thám',
      'Drama misteri, thriller, detektif'
    ),
    characteristics: L(
      '혼자 진실을 알고 있는 고독한 주인공, 시그널·비밀의 숲·악의 마음을 읽는 자들 감성, 눈치가 빠르고 직감이 잘 맞는 사람',
      'A lonely lead who alone knows the truth, Signal / Stranger / Evilive vibes, someone with sharp instincts and accurate intuition',
      '一人で真実を知る孤独な主人公、Signal・Stranger・Eviliveの感性、察しが早く直感が当たる人',
      '独自知晓真相的孤独主角，Signal / Stranger / Evilive 气质，察言观色快、直觉准的人',
      '獨自知曉真相的孤獨主角，Signal / Stranger / Evilive 氣質，察言觀色快、直覺準的人',
      'Nhân vật chính cô đơn biết một mình sự thật, vibe Signal / Stranger / Evilive, người nhạy bén và trực giác chuẩn',
      'Protagonis kesepian yang sendirian tahu kebenaran, nuansa Signal / Stranger / Evilive, orang dengan insting tajam dan intuisi akurat'
    ),
    goodMatch: L(
      '다들 이상하다고 생각하지 않아? 나만 그래?',
      'Doesn\'t everyone think this is weird? Is it just me?',
      'みんな変だと思わない？私だけ？',
      '大家不觉得奇怪吗？只有我这样？',
      '大家不覺得奇怪嗎？只有我這樣？',
      'Mọi người không thấy lạ à? Chỉ mình tôi thôi?',
      'Semua nggak merasa aneh? Cuma aku?'
    ),
    badMatch: L(
      '그는 처음부터 알고 있었다. 아무도 믿지 않았을 뿐.',
      'He knew from the start. No one believed him—that was all.',
      '彼は最初から知っていた。誰も信じなかっただけ。',
      '他一开始就知道。只是没人相信。',
      '他一開始就知道。只是沒人相信。',
      'Anh ấy biết từ đầu. Chỉ là không ai tin.',
      'Dia tahu dari awal. Hanya saja tidak ada yang percaya.'
    ),
    shareSnippet: L(
      '내 K-드라마 재질은 미스터리 스릴러 주인공 🔍 진실 혼자 알고 있는 고독한 유형... 직감 잘 맞는다는 거 공감 → 너는?',
      'My K-Drama lead type is mystery thriller protagonist 🔍 the lonely kind who alone knows the truth... totally relate to having good intuition → what about you?',
      '私のK-ドラマ主人公タイプはミステリースリラー主人公 🔍 真実を一人で知る孤独なタイプ…直感当たるの共感 → あなたは？',
      '我的韩剧主角类型是悬疑惊悚主角 🔍 独自知晓真相的孤独型…直觉准这点太共鸣 → 你呢？',
      '我的韓劇主角類型是懸疑驚悚主角 🔍 獨自知曉真相的孤獨型…直覺準這點太共鳴 → 你呢？',
      'Kiểu nhân vật chính K-Drama của tôi là phim bí ẩn giật gân 🔍 kiểu cô đơn biết một mình sự thật… đồng ý là trực giác chuẩn → còn bạn?',
      'Tipe protagonis K-Drama-ku misteri-thriller 🔍 yang kesepian dan sendirian tahu kebenaran… setuju banget soal intuisi akurat → kamu?'
    ),
  },
  {
    type: 'Type6',
    emoji: '☀️',
    title: L(
      '일상이 힐링이 되는, 따뜻한 힐링 드라마 주인공 재질',
      'The Warm Healing Lead Who Turns Daily Life into Comfort',
      '日常がヒーリングになる、温かいヒーリングドラマ主人公タイプ',
      '让日常变成疗愈的温暖治愈主角型',
      '讓日常變成療癒的溫暖治癒主角型',
      'Kiểu nhân vật chính phim healing ấm áp—biến đời thường thành sự chữa lành',
      'Tipe protagonis drama healing hangat yang mengubah keseharian jadi penghiburan'
    ),
    shortDescription: L(
      '"당신은 존재 자체로 주변을 따뜻하게 만드는 사람입니다."',
      '"Your very presence warms the people around you."',
      '「あなたは存在そのもので周りを温かくする人です。」',
      '「你的存在本身就能温暖身边的人。」',
      '「你的存在本身就能溫暖身邊的人。」',
      '"Sự hiện diện của bạn đã đủ để làm ấm người xung quanh."',
      '"Kehadiranmu saja sudah menghangatkan orang di sekitarmu."'
    ),
    description: L(
      '당신의 K-드라마: 당신 주변에 있는 것만으로 모두가 치유되는 이야기\n\n화려한 반격도, 치열한 경쟁도, 복잡한 비밀도 없습니다. 하지만 당신이 있는 곳에는 언제나 사람들이 모이고 따뜻해집니다. 작은 카페, 조용한 마을, 바닷가를 배경으로 당신과 만나는 사람들이 하나씩 회복되고 변화합니다. 가장 조용하지만 가장 오래 기억되는 드라마입니다.',
      'Your K-Drama: A story where simply being near you heals everyone.\n\nThere is no flashy counterattack, fierce competition, or tangled secrets. But wherever you are, people gather and warmth spreads. Against the backdrop of a small café, quiet town, or seaside, those who meet you recover and change one by one. It is the quietest drama, but the one remembered longest.',
      'あなたのK-ドラマ：あなたのそばにいるだけでみんなが癒される物語\n\n派手な反撃も、激しい競争も、複雑な秘密もない。でもあなたがいる場所には、いつも人が集まり、温かくなる。小さなカフェ、静かな町、海辺を舞台に、あなたと出会う人たちが一人ひとり回復し、変わっていく。いちばん静かだけど、いちばん長く記憶に残るドラマです。',
      '你的韩剧：只要在你身边，所有人都会被治愈的故事\n\n没有华丽反击、激烈竞争或复杂秘密。但只要有你在，人们就会聚集，变得温暖。以小咖啡馆、安静小镇、海边为背景，与你相遇的人一个个恢复、改变。是最安静却最长久被记住的剧。',
      '你的韓劇：只要在你身邊，所有人都會被治癒的故事\n\n沒有華麗反擊、激烈競爭或複雜秘密。但只要有你在，人們就會聚集，變得溫暖。以小咖啡館、安靜小鎮、海邊為背景，與你相遇的人一個個恢復、改變。是最安靜卻最長久被記住的劇。',
      'K-Drama của bạn: Câu chuyện chỉ cần ở bên bạn là mọi người được chữa lành.\n\nKhông có phản công rực rỡ, cạnh tranh gay gắt hay bí mật phức tạp. Nhưng nơi bạn ở, người ta luôn tụ lại và ấm áp hơn. Bối cảnh quán cà phê nhỏ, thị trấn yên bình hay bờ biển, những người gặp bạn lần lượt hồi phục và thay đổi. Là phim yên lặng nhất nhưng được nhớ lâu nhất.',
      'K-Drama-mu: Kisah di mana cukup dekat denganmu, semua orang sembuh.\n\nTidak ada serangan balik megah, kompetisi sengit, atau rahasia rumit. Tapi di mana pun kamu ada, orang berkumpul dan suasana jadi hangat. Di latar kafe kecil, kota tenang, atau pantai, mereka yang bertemu denganmu pulih dan berubah satu per satu. Drama paling tenang, tapi paling lama diingat.'
    ),
    dramaClimax: L(
      '상처 있던 사람들이 당신 덕분에 다시 웃게 되는 장면',
      'The scene where wounded people smile again because of you',
      '傷を抱えた人たちが、あなたのおかげで再び笑う場面',
      '曾受伤的人们因你而重新微笑的场景',
      '曾受傷的人們因你而重新微笑的場景',
      'Cảnh những người từng tổn thương lại mỉm cười nhờ bạn',
      'Adegan orang yang terluka tersenyum lagi karena dirimu'
    ),
    dramaSupportingRole: L(
      '나로 인해 가장 많이 변화하는 사람',
      'The person who changes the most because of me',
      '私のせいでいちばん大きく変わる人',
      '因我而改变最多的人',
      '因我而改變最多的人',
      'Người thay đổi nhiều nhất vì tôi',
      'Orang yang paling banyak berubah karena diriku'
    ),
    dramaOst: L(
      '잔잔하고 따뜻한 어쿠스틱 감성',
      'A calm, warm acoustic vibe',
      '穏やかで温かいアコースティックの感性',
      '平静温暖的 acoustic 感性',
      '平靜溫暖的 acoustic 感性',
      'Cảm xúc acoustic êm dịu và ấm áp',
      'Nuansa akustik tenang dan hangat'
    ),
    empathyLevel: L(
      '힐링 드라마·일상물·감성 로맨스',
      'Healing dramas, slice-of-life, emotional romance',
      'ヒーリングドラマ・日常もの・感性ロマンス',
      '治愈剧、日常剧、感性爱情',
      '治癒劇、日常劇、感性愛情',
      'Phim healing, đời thường, lãng mạn cảm xúc',
      'Drama healing, slice-of-life, romansa emosional'
    ),
    characteristics: L(
      '만나는 사람마다 치유시키는 따뜻한 주인공, 갯마을 차차차·나의 아저씨·동백꽃 필 무렵 감성, 옆에 있으면 이유 없이 편안해지는 사람',
      'A warm lead who heals everyone they meet, Hometown Cha-Cha-Cha / My Mister / When the Camellia Blooms vibes, someone who makes you feel at ease for no reason',
      '出会う人ごとに癒す温かい主人公、Hometown Cha-Cha-Cha・My Mister・When the Camellia Bloomsの感性、そばにいると理由なく安心する人',
      '遇见谁都能治愈的温暖主角，Hometown Cha-Cha-Cha / My Mister / When the Camellia Blooms 气质，在身边就莫名安心的人',
      '遇見誰都能治癒的溫暖主角，Hometown Cha-Cha-Cha / My Mister / When the Camellia Blooms 氣質，在身邊就莫名安心的人',
      'Nhân vật chính ấm áp chữa lành mọi người gặp, vibe Hometown Cha-Cha-Cha / My Mister / When the Camellia Blooms, người ở bên là thấy yên lòng vô cớ',
      'Protagonis hangat yang menyembuhkan siapa pun yang ditemui, nuansa Hometown Cha-Cha-Cha / My Mister / When the Camellia Blooms, orang yang bikin tenang tanpa alasan'
    ),
    goodMatch: L(
      '괜찮아요. 여기 있으면 다 괜찮아질 거예요.',
      'It is okay. If you stay here, everything will be all right.',
      '大丈夫。ここにいれば、全部うまくいくよ。',
      '没关系。待在这里，一切都会好起来的。',
      '沒關係。待在這裡，一切都會好起來的。',
      'Không sao đâu. Ở đây rồi mọi thứ sẽ ổn thôi.',
      'Tidak apa-apa. Kalau di sini, semuanya akan baik-baik saja.'
    ),
    badMatch: L(
      '그녀가 있는 곳이면 어디든 따뜻해졌다.',
      'Wherever she was, the place grew warm.',
      '彼女がいる場所なら、どこも温かくなった。',
      '有她在的地方，哪里都会变暖。',
      '有她在的地方，哪裡都會變暖。',
      'Nơi nào có cô ấy, nơi đó đều ấm áp hơn.',
      'Di mana pun dia ada, tempat itu jadi hangat.'
    ),
    shareSnippet: L(
      '내 K-드라마 재질은 힐링 드라마 주인공 ☀️ 존재 자체로 따뜻하게 만드는 유형이래 → 외국인 친구한테 내봐 K-드라마 입문시키기 딱 좋음 ㅋㅋ',
      'My K-Drama lead type is healing drama protagonist ☀️ the kind who warms people just by existing → perfect to show foreign friends as a K-Drama starter lol',
      '私のK-ドラマ主人公タイプはヒーリングドラマ主人公 ☀️ 存在するだけで温かくするタイプらしい → 海外の友だちにK-ドラマ入門させるのにぴったりw',
      '我的韩剧主角类型是治愈剧主角 ☀️ 存在本身就能温暖别人的那种 → 给外国朋友当韩剧入门刚刚好哈哈',
      '我的韓劇主角類型是治癒劇主角 ☀️ 存在本身就能溫暖別人的那種 → 給外國朋友當韓劇入門剛剛好哈哈',
      'Kiểu nhân vật chính K-Drama của tôi là phim healing ☀️ kiểu chỉ cần tồn tại là làm ấm người khác → cho bạn nước ngoài xem làm phim Hàn đầu tiên là chuẩn haha',
      'Tipe protagonis K-Drama-ku drama healing ☀️ yang bikin hangat cuma dengan kehadiran → cocok banget buat kenalin K-Drama ke teman luar negeri wkwk'
    ),
  },
];

export function calculatePhase3KdramaLeadCharacterTypeResult(answers: number[]): string {
  const totalScore = answers.reduce((sum, score) => sum + score, 0);

  if (totalScore >= 0 && totalScore <= 5) return 'Type1';
  if (totalScore >= 6 && totalScore <= 11) return 'Type2';
  if (totalScore >= 12 && totalScore <= 19) return 'Type3';
  if (totalScore >= 20 && totalScore <= 27) return 'Type4';
  if (totalScore >= 28 && totalScore <= 33) return 'Type5';
  return 'Type6';
}
