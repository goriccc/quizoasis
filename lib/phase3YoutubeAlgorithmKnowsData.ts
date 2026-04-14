/** 나의 유튜브 알고리즘이 뭔가 알고 있다 — 12문항 4지선다, A=0 B=1 C=2 D=3, 총점 0~36 (7개 로케일) */

const T = (
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

export interface Phase3YoutubeAlgorithmKnowsQuestion {
  id: number;
  question: Record<string, string>;
  options: { text: Record<string, string>; score: number }[];
}

export interface Phase3YoutubeAlgorithmKnowsResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  algorithmClassification: Record<string, string>;
  youtubeSeesMe: Record<string, string>;
  exampleVideos: Record<string, string>;
  hiddenInterest: Record<string, string>;
  goodMatch: Record<string, string>;
  badMatch: Record<string, string>;
  shareTypeName: Record<string, string>;
}

export function calculatePhase3YoutubeAlgorithmKnowsResult(scores: number[]): string {
  const total = scores.reduce((a, b) => a + (b ?? 0), 0);
  if (total <= 5) return 'Type1';
  if (total <= 11) return 'Type2';
  if (total <= 19) return 'Type3';
  if (total <= 27) return 'Type4';
  if (total <= 33) return 'Type5';
  return 'Type6';
}

export const phase3YoutubeAlgorithmKnowsQuestions: Phase3YoutubeAlgorithmKnowsQuestion[] = [
  {
    id: 1,
    question: T(
      '유튜브를 켜는 순간, 가장 먼저 하는 행동은?',
      'The moment you open YouTube, what do you do first?',
      'YouTubeを開いた瞬間、まず何をする？',
      '打开YouTube时，你最先做什么？',
      '打開YouTube時，你最先做什麼？',
      'Vừa mở YouTube, bạn làm gì đầu tiên?',
      'Begitu membuka YouTube, apa yang kamu lakukan pertama kali?'
    ),
    options: [
      {
        text: T(
          '구독 채널 최신 영상부터 확인한다',
          'Check the latest videos from channels I subscribe to',
          '登録チャンネルの最新動画から見る',
          '先看订阅频道的最新视频',
          '先看訂閱頻道的最新影片',
          'Xem video mới nhất từ kênh đã đăng ký',
          'Cek video terbaru dari channel yang di-subscribe'
        ),
        score: 0,
      },
      {
        text: T(
          '알고리즘이 추천해준 영상 중에서 끌리는 것을 고른다',
          'Pick something that catches my eye from recommendations',
          'おすすめから気になる動画を選ぶ',
          '从推荐里挑一个顺眼的',
          '從推薦裡挑一個順眼的',
          'Chọn video nào hợp mắt trong phần gợi ý',
          'Pilih dari rekomendasi yang menarik perhatian'
        ),
        score: 1,
      },
      {
        text: T(
          '검색창에 바로 보고 싶은 것을 검색한다',
          'Search right away for what I want to watch',
          '見たいものをすぐ検索する',
          '立刻在搜索栏搜想看的',
          '立刻在搜尋列搜想看的',
          'Gõ ngay ô tìm kiếm thứ muốn xem',
          'Langsung cari di kolom pencarian apa yang ingin ditonton'
        ),
        score: 2,
      },
      {
        text: T(
          '이전에 보다 만 영상이나 저장해둔 나중에 볼 영상을 이어본다',
          'Resume a video I left off or something in Watch Later',
          '途中まで見た動画や「後で見る」を続ける',
          '接着看上次没看完或稍后再看的',
          '接著看上次沒看完或稍後再看的',
          'Tiếp tục video dang dở hoặc đã lưu Xem sau',
          'Lanjutkan video yang belum selesai atau daftar Tonton nanti'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 2,
    question: T(
      '5분짜리 영상 vs 1시간짜리 영상, 나는?',
      'A 5-minute video vs a 1-hour video — which sounds more like you?',
      '5分の動画 vs 1時間の動画、あなたは？',
      '5分钟视频还是1小时视频，你更像哪种？',
      '5分鐘影片還是1小時影片，你更像哪種？',
      'Video 5 phút hay 1 giờ — bạn giống kiểu nào hơn?',
      'Video 5 menit vs 1 jam — kamu lebih cocok yang mana?'
    ),
    options: [
      {
        text: T(
          '5분 이하 숏츠 위주로 본다. 길면 집중이 안 된다',
          'Mostly shorts under 5 minutes. Long videos are hard to focus on',
          '基本ショート（5分以下）。長いと集中できない',
          '主要看5分钟以下的短视频，长了容易走神',
          '主要看5分鐘以下的短影片，長了容易走神',
          'Chủ yếu video ngắn dưới 5 phút; dài quá là mất tập trung',
          'Mayoritas short di bawah 5 menit; kalau panjang susah fokus'
        ),
        score: 0,
      },
      {
        text: T(
          '10~20분 내외가 딱 좋다. 너무 짧으면 아쉽다',
          '10–20 minutes is the sweet spot. Too short feels incomplete',
          '10〜20分がちょうどいい。短すぎると物足りない',
          '10–20分钟刚好，太短总觉得不够',
          '10–20分鐘剛好，太短總覺得不夠',
          'Khoảng 10–20 phút là vừa; quá ngắn thì thiếu',
          'Sekitar 10–20 menit pas; terlalu pendek kurang puas'
        ),
        score: 1,
      },
      {
        text: T(
          '30분~1시간짜리 영상도 집중해서 본다',
          'I can stay focused on 30-minute to 1-hour videos',
          '30分〜1時間の動画も集中して見られる',
          '30分钟到1小时的视频也能专注看完',
          '30分鐘到1小時的影片也能專注看完',
          'Xem tập trung được video 30 phút đến 1 giờ',
          'Bisa fokus menonton video 30 menit sampai 1 jam'
        ),
        score: 2,
      },
      {
        text: T(
          '2시간이 넘는 영상도 끝까지 본다. 오히려 몰입이 잘 된다',
          'I finish videos over 2 hours. I actually get more immersed',
          '2時間超えも最後まで見る。むしろ没入しやすい',
          '超过2小时的也能看完，反而更沉浸',
          '超過2小時的也能看完，反而更沉浸',
          'Video trên 2 giờ vẫn xem hết; đôi khi càng cuốn hơn',
          'Video lebih dari 2 jam tetap ditonton sampai habis; malah lebih masuk'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 3,
    question: T(
      '유튜브 알고리즘이 나에게 추천하는 영상 장르는 주로?',
      'What genres does YouTube usually recommend to you?',
      'YouTubeのおすすめは主にどんなジャンル？',
      'YouTube通常给你推荐哪类视频？',
      'YouTube通常給你推薦哪類影片？',
      'YouTube thường gợi ý cho bạn thể loại nào?',
      'YouTube biasanya merekomendasikan genre video apa untukmu?'
    ),
    options: [
      {
        text: T(
          '먹방, 브이로그, 연예·예능 관련 콘텐츠',
          'Mukbang, vlogs, entertainment and variety',
          '먹방、ブイログ、エンタメ・バラエティ',
          '吃播、Vlog、娱乐综艺类',
          '吃播、Vlog、娛樂綜藝類',
          'Ăn uống, vlog, giải trí và show',
          'Mukbang, vlog, hiburan dan variety show'
        ),
        score: 0,
      },
      {
        text: T(
          '게임, 스포츠, 취미 관련 콘텐츠',
          'Gaming, sports, and hobby content',
          'ゲーム、スポーツ、趣味系',
          '游戏、运动、爱好类',
          '遊戲、運動、愛好類',
          'Game, thể thao, sở thích',
          'Game, olahraga, hobi'
        ),
        score: 1,
      },
      {
        text: T(
          '자기계발, 재테크, 정보·지식 콘텐츠',
          'Self-improvement, money tips, and informational content',
          '自己啓発、資産形成、情報・知識系',
          '自我提升、理财、知识信息类',
          '自我提升、理財、知識資訊類',
          'Phát triển bản thân, tài chính, kiến thức',
          'Pengembangan diri, finansial, konten informasi'
        ),
        score: 2,
      },
      {
        text: T(
          '다큐멘터리, 역사, 과학, 철학 관련 콘텐츠',
          'Documentaries, history, science, and philosophy',
          'ドキュメンタリー、歴史、科学、哲学',
          '纪录片、历史、科学、哲学',
          '紀錄片、歷史、科學、哲學',
          'Tài liệu, lịch sử, khoa học, triết học',
          'Dokumenter, sejarah, sains, filsafat'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 4,
    question: T(
      '유튜브를 보다가 가장 자주 하는 행동은?',
      'What do you do most often while watching YouTube?',
      'YouTubeを見ながらよくやることは？',
      '看YouTube时你最常做的事是？',
      '看YouTube時你最常做的事是？',
      'Khi xem YouTube bạn hay làm gì nhất?',
      'Saat nonton YouTube, apa yang paling sering kamu lakukan?'
    ),
    options: [
      {
        text: T(
          '10초 앞으로 돌리거나 1.5배속으로 빠르게 본다',
          'Skip ahead 10 seconds or watch at 1.5x speed',
          '10秒送りや1.5倍速で見る',
          '快进10秒或用1.5倍速看',
          '快進10秒或用1.5倍速看',
          'Tua 10 giây hoặc xem tốc độ 1.5x',
          'Skip 10 detik atau tonton 1.5x'
        ),
        score: 0,
      },
      {
        text: T(
          '댓글창을 열어서 사람들 반응을 확인한다',
          'Open comments to see how people react',
          'コメント欄を開いて反応を見る',
          '打开评论区看大家反应',
          '打開評論區看大家反應',
          'Mở phần bình luận xem phản ứng mọi người',
          'Buka komentar untuk lihat reaksi orang'
        ),
        score: 1,
      },
      {
        text: T(
          '영상 속 정보가 맞는지 찾아보거나 메모한다',
          'Fact-check the video or take notes',
          '情報の真偽を調べたりメモする',
          '查证视频里的信息或做笔记',
          '查證影片裡的資訊或做筆記',
          'Kiểm tra thông tin trong video hoặc ghi chép',
          'Cek kebenaran info di video atau mencatat'
        ),
        score: 2,
      },
      {
        text: T(
          '관련 영상 추천에서 또 다른 영상으로 넘어간다',
          'Click through to another video from related recommendations',
          '関連動画から次の動画へ進む',
          '从相关推荐点到另一个视频',
          '從相關推薦點到另一個影片',
          'Nhảy sang video khác từ phần liên quan',
          'Pindah ke video lain dari rekomendasi terkait'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 5,
    question: T(
      '새벽 1시, 자야 하는데 유튜브를 켰다. 어떤 영상을 보나요?',
      'It is 1 a.m., you should sleep, but you opened YouTube. What do you watch?',
      '深夜1時、寝るべきなのにYouTubeを開いた。何を見る？',
      '凌晨1点该睡了却打开了YouTube，你会看什么？',
      '凌晨1點該睡了卻打開了YouTube，你會看什麼？',
      '1 giờ sáng, lẽ ra phải ngủ nhưng vẫn mở YouTube. Bạn xem gì?',
      'Jam 1 pagi, seharusnya tidur tapi buka YouTube. Kamu nonton apa?'
    ),
    options: [
      {
        text: T(
          '백색소음, ASMR, 잔잔한 브이로그',
          'White noise, ASMR, calm vlogs',
          'ホワイトノイズ、ASMR、落ち着いたブイログ',
          '白噪音、ASMR、治愈系Vlog',
          '白噪音、ASMR、治癒系Vlog',
          'Tiếng ồn trắng, ASMR, vlog nhẹ nhàng',
          'White noise, ASMR, vlog tenang'
        ),
        score: 0,
      },
      {
        text: T(
          '유튜브가 추천해주는 것 아무거나. 새벽엔 장르 안 가린다',
          'Whatever YouTube recommends — at dawn I do not care about genre',
          'おすすめの何でも。深夜はジャンル不問',
          '推荐啥看啥，凌晨不挑类型',
          '推薦啥看啥，凌晨不挑類型',
          'Gợi ý gì cũng được; lúc khuya không kén thể loại',
          'Apa pun yang direkomendasikan; subuh-subuh tidak pilih genre'
        ),
        score: 1,
      },
      {
        text: T(
          '평소에 못 봤던 좀 긴 영상이나 시리즈물을 몰아본다',
          'Binge longer videos or a series I usually skip',
          '普段見ない長めの動画やシリーズを一気見する',
          '把平时没空看的长视频或系列一口气刷完',
          '把平時沒空看的長影片或系列一口氣刷完',
          'Cày video dài hoặc series thường không có thời gian',
          'Maraton video panjang atau serial yang biasanya terlewat'
        ),
        score: 2,
      },
      {
        text: T(
          '알고리즘이 추천해준 이상한 영상 구멍에 빠져서 새벽을 지샌다',
          'Fall into a weird recommendation rabbit hole until sunrise',
          '変なおすすめの穴にハマって朝まで',
          '掉进奇怪推荐 rabbit hole 刷到天亮',
          '掉進奇怪推薦 rabbit hole 刷到天亮',
          'Lọt vào hố gợi ý lạ đến sáng',
          'Terjebak lubang rekomendasi aneh sampai pagi'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 6,
    question: T(
      '유튜브에서 광고를 대하는 나의 방식은?',
      'How do you deal with ads on YouTube?',
      'YouTubeの広告、あなたの対処法は？',
      '在YouTube上你怎么对待广告？',
      '在YouTube上你怎麼對待廣告？',
      'Bạn xử lý quảng cáo trên YouTube thế nào?',
      'Bagaimana kamu menghadapi iklan di YouTube?'
    ),
    options: [
      {
        text: T(
          '5초 후 건너뛰기를 누르는 게 반사 행동이 됐다',
          'Tapping Skip after 5 seconds is pure muscle memory',
          '5秒後スキップが反射になっている',
          '5秒可跳已经成了肌肉记忆',
          '5秒可跳已經成了肌肉記憶',
          'Bấm bỏ qua sau 5 giây đã thành phản xạ',
          'Skip setelah 5 detik sudah refleks'
        ),
        score: 0,
      },
      {
        text: T(
          '광고가 흥미로우면 끝까지 보는 경우도 있다',
          'Sometimes I watch the full ad if it is interesting',
          '面白い広告は最後まで見ることも',
          '有意思的广告也会看完',
          '有意思的廣告也會看完',
          'Đôi khi xem hết nếu quảng cáo hay',
          'Kadang tonton sampai habis kalau iklannya menarik'
        ),
        score: 1,
      },
      {
        text: T(
          '유튜브 프리미엄을 쓴다. 광고는 참을 수 없다',
          'I use YouTube Premium. I cannot stand ads',
          'YouTube Premium利用。広告は無理',
          '用YouTube Premium，受不了广告',
          '用YouTube Premium，受不了廣告',
          'Dùng YouTube Premium; không chịu nổi quảng cáo',
          'Pakai YouTube Premium; tidak tahan iklan'
        ),
        score: 2,
      },
      {
        text: T(
          '광고를 보다가 해당 제품을 검색해본 적이 있다',
          'I have searched for a product after seeing its ad',
          '広告を見て商品を検索したことがある',
          '看过广告后去搜过那个产品',
          '看過廣告後去搜過那個產品',
          'Đã từng tìm kiếm sản phẩm sau khi xem quảng cáo',
          'Pernah cari produk setelah lihat iklannya'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 7,
    question: T(
      '유튜브 댓글을 직접 다는 편인가요?',
      'Do you leave comments on YouTube yourself?',
      'YouTubeに自分でコメントを書く方？',
      '你会自己发YouTube评论吗？',
      '你會自己發YouTube評論嗎？',
      'Bạn có hay tự viết bình luận trên YouTube không?',
      'Apakah kamu sering menulis komentar sendiri di YouTube?'
    ),
    options: [
      {
        text: T(
          '거의 안 단다. 보기만 한다',
          'Almost never — I only read',
          'ほぼ書かない。見るだけ',
          '几乎不发，只看',
          '幾乎不發，只看',
          'Gần như không; chỉ đọc',
          'Hampir tidak pernah; hanya baca'
        ),
        score: 0,
      },
      {
        text: T(
          '공감되거나 웃긴 댓글에 좋아요만 누른다',
          'I only like comments that feel relatable or funny',
          '共感や面白いコメントにいいねだけ',
          '只给有共鸣或好笑的评论点赞',
          '只給有共鳴或好笑的評論按讚',
          'Chỉ thích bình luận đồng cảm hoặc hài',
          'Hanya suka komentar yang relate atau lucu'
        ),
        score: 1,
      },
      {
        text: T(
          '감동받거나 의견을 말하고 싶을 때 가끔 단다',
          'Sometimes when I am moved or want to share an opinion',
          '感動したり意見を言いたいときにたまに',
          '感动或想表达观点时偶尔会发',
          '感動或想表達觀點時偶爾會發',
          'Đôi khi khi xúc động hoặc muốn nói ý kiến',
          'Kadang kalau terharu atau ingin menyampaikan pendapat'
        ),
        score: 2,
      },
      {
        text: T(
          '생각보다 자주 댓글을 달고, 대댓글 논쟁을 즐기기도 한다',
          'More often than people think — I even enjoy reply debates',
          '思ったより頻繁。返信の議論も楽しむ',
          '比想象中常发，还喜欢回复里辩论',
          '比想像中常發，還喜歡回覆裡辯論',
          'Thường hơn người ta nghĩ; thích tranh luận trong thread',
          'Lebih sering dari kelihatannya; suka debat di balasan'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 8,
    question: T(
      '유튜브 시청 기록을 돌아보면 가장 많이 나오는 것은?',
      'Looking at your watch history, what shows up the most?',
      '視聴履歴を見ると一番多いのは？',
      '回看观看记录，出现最多的是什么？',
      '回看觀看紀錄，出現最多的是什麼？',
      'Nhìn lại lịch sử xem, thứ xuất hiện nhiều nhất là gì?',
      'Kalau lihat riwayat tontonan, apa yang paling sering muncul?'
    ),
    options: [
      {
        text: T(
          '같은 채널 영상들이 반복해서 나온다. 최애 채널 고정 팬이다',
          'The same channel repeats — I am a loyal fan of my favorite',
          '同じチャンネルが繰り返し。推しチャンネル固定ファン',
          '同一频道反复出现，本命频道铁粉',
          '同一頻道反覆出現，本命頻道鐵粉',
          'Cùng một kênh lặp lại — fan trung thành một kênh',
          'Channel yang sama berulang — fan setia satu channel'
        ),
        score: 0,
      },
      {
        text: T(
          '장르가 다양하다. 그날 기분에 따라 완전히 달라진다',
          'Genres vary wildly — it depends on my mood that day',
          'ジャンルは多彩。その日の気分で変わる',
          '类型很杂，全看当天心情',
          '類型很雜，全看當天心情',
          'Thể loại đa dạng — tùy tâm trạng hôm đó',
          'Genre campur aduk — tergantung mood hari itu'
        ),
        score: 1,
      },
      {
        text: T(
          '특정 주제 영상들이 집중적으로 나온다. 한동안 그것만 팠다',
          'Clusters around one topic — I went deep on it for a while',
          '特定テーマが集中。しばらくそればかり',
          '某段时间集中刷同一主题',
          '某段時間集中刷同一主題',
          'Một thời gian chỉ đào sâu một chủ đề',
          'Sempat fokus menggali satu topik'
        ),
        score: 2,
      },
      {
        text: T(
          '비슷한 주제인데 채널은 다 다르다. 여러 유튜버를 비교해서 본다',
          'Same topic, different creators — I compare channels',
          '同じテーマでもチャンネルはバラバラ。比較視聴',
          '同主题不同频道，会比较着看',
          '同主題不同頻道，會比較著看',
          'Cùng chủ đề nhưng nhiều creator — hay so sánh',
          'Topik sama tapi beda kreator — suka membandingkan'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 9,
    question: T(
      '유튜브에서 구독 취소를 하게 되는 이유는?',
      'What makes you unsubscribe on YouTube?',
      'YouTubeで登録解除する理由は？',
      '你会因为什么在YouTube上取消订阅？',
      '你會因為什麼在YouTube上取消訂閱？',
      'Điều gì khiến bạn bỏ đăng ký trên YouTube?',
      'Apa yang membuatmu unsubscribe di YouTube?'
    ),
    options: [
      {
        text: T(
          '콘텐츠 업로드 주기가 너무 뜸해졌을 때',
          'Uploads became too rare',
          '投稿間隔が空きすぎたとき',
          '更新太慢、间隔太久',
          '更新太慢、間隔太久',
          'Đăng video quá thưa',
          'Jarak upload terlalu jarang'
        ),
        score: 0,
      },
      {
        text: T(
          '채널 방향성이 바뀌어서 내 취향과 달라졌을 때',
          'The channel changed direction and no longer fits my taste',
          'チャンネルの方向性が変わり趣味と合わなくなった',
          '频道方向变了，不再符合我的口味',
          '頻道方向變了，不再符合我的口味',
          'Kênh đổi hướng không còn hợp gu',
          'Arah channel berubah tidak cocok lagi'
        ),
        score: 1,
      },
      {
        text: T(
          '광고나 협찬 영상이 너무 많아졌을 때',
          'Too many ads or sponsored videos',
          '広告やタイアップ動画が多すぎる',
          '广告或恰饭视频太多',
          '廣告或業配影片太多',
          'Quảng cáo hoặc video nhận tài trợ quá nhiều',
          'Iklan atau konten sponsor terlalu banyak'
        ),
        score: 2,
      },
      {
        text: T(
          '예전보다 퀄리티나 정성이 떨어진 것 같을 때',
          'Quality or effort feels lower than before',
          '以前よりクオリティや熱量が落ちたと感じたとき',
          '感觉质量或用心程度不如以前',
          '感覺品質或用心程度不如以前',
          'Cảm giác chất lượng hoặc đầu tư giảm so với trước',
          'Kualitas atau usaha terasa turun dibanding dulu'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 10,
    question: T(
      '유튜브 알고리즘이 추천해준 영상 중 뜬금없는 것이 뜰 때?',
      'When a random recommended video shows up, what do you do?',
      'おすすめに妙な動画が出たとき？',
      '推荐里冒出离谱视频时你会怎样？',
      '推薦裡冒出離譜影片時你會怎樣？',
      'Khi video gợi ý kỳ quặc xuất hiện, bạn làm gì?',
      'Kalau video aneh muncul di rekomendasi, kamu bagaimana?'
    ),
    options: [
      {
        text: T(
          '그냥 스크롤해서 넘긴다. 관심 없으면 패스',
          'Scroll past — if I am not interested, I skip',
          '流し見てスキップ。興味なければパス',
          '划走，不感兴趣就略过',
          '滑掉，不感興趣就略過',
          'Cuộn qua; không thích thì bỏ qua',
          'Scroll lewati; tidak tertarik ya skip'
        ),
        score: 0,
      },
      {
        text: T(
          '제목이 자극적이면 일단 클릭해본다',
          'If the title is clickbaity, I still click to see',
          '釣りタイトルならとりあえずクリック',
          '标题很刺激就先点进去看看',
          '標題很刺激就先點進去看看',
          'Tiêu đề gây tò mò thì cứ bấm thử',
          'Judul provokatif ya diklik dulu'
        ),
        score: 1,
      },
      {
        text: T(
          '왜 이게 추천됐는지 내 시청 기록을 되짚어 본다',
          'I retrace my watch history to see why it was recommended',
          'なぜおすすめか視聴履歴を遡って考える',
          '会翻观看记录琢磨为啥会推荐这个',
          '會翻觀看紀錄琢磨為啥會推薦這個',
          'Lần lại lịch sử xem để hiểu vì sao gợi ý',
          'Urai riwayat tontonan untuk cari tahu kenapa direkomendasikan'
        ),
        score: 2,
      },
      {
        text: T(
          '어쩌다 클릭했다가 완전히 새로운 관심사가 생긴 경우가 있다',
          'Sometimes one accidental click sparks a brand-new interest',
          'たまたまクリックして新しい沼に落ちたことがある',
          '偶尔随手一点就掉进全新兴趣坑',
          '偶爾隨手一點就掉進全新興趣坑',
          'Đôi khi lỡ bấm mà mở ra sở thích mới hẳn',
          'Kadang klik iseng malah nemu minat baru'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 11,
    question: T(
      '유튜브를 보면서 동시에 하는 행동은?',
      'What do you do at the same time as watching YouTube?',
      'YouTubeを見ながら同時にすることは？',
      '看YouTube时你还会同时做什么？',
      '看YouTube時你還會同時做什麼？',
      'Vừa xem YouTube vừa làm gì nữa?',
      'Sambil nonton YouTube kamu juga ngapain?'
    ),
    options: [
      {
        text: T(
          '유튜브에만 집중한다. 다른 걸 하면서 보면 내용이 안 들어온다',
          'Only YouTube — if I multitask I miss the content',
          'YouTubeだけに集中。他と並行すると頭に入らない',
          '只看YouTube，一心二用就听不进去',
          '只看YouTube，一心二用就聽不進去',
          'Chỉ tập trung YouTube; làm việc khác là không thấm',
          'Fokus ke YouTube saja; multitasking tidak masuk'
        ),
        score: 0,
      },
      {
        text: T(
          '밥을 먹거나 누워서 쉬면서 틀어놓는다',
          'I eat or lie down and relax with it on',
          '食事やゴロゴロしながら流し見る',
          '吃饭或躺着休息时放着听',
          '吃飯或躺著休息時放著聽',
          'Ăn hoặc nằm nghỉ vừa bật',
          'Makan atau rebahan sambil nonton'
        ),
        score: 1,
      },
      {
        text: T(
          '게임이나 작업을 하면서 배경으로 틀어놓는다',
          'I play games or work with it in the background',
          'ゲームや作業のBGM代わりに流す',
          '打游戏或干活时当背景音',
          '打遊戲或幹活時當背景音',
          'Chơi game hoặc làm việc với video nền',
          'Main game atau kerja sambil diputar di latar'
        ),
        score: 2,
      },
      {
        text: T(
          '유튜브 보면서 동시에 다른 SNS도 한다. 멀티태스킹 기본이다',
          'YouTube plus other social apps — multitasking is my default',
          'YouTubeと他SNSを同時。マルチタスクが基本',
          '边看YouTube边刷别的社交，多任务常态',
          '邊看YouTube邊刷別的社交，多工常態',
          'Vừa YouTube vừa mạng xã hội khác — đa nhiệm mặc định',
          'YouTube plus medsos lain — multitasking standar'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 12,
    question: T(
      '유튜브 알고리즘에 대한 솔직한 나의 생각은?',
      'What is your honest take on the YouTube algorithm?',
      'YouTubeアルゴリズムについての本音は？',
      '你对YouTube算法的心里话是？',
      '你對YouTube演算法的心裡話是？',
      'Thật lòng bạn nghĩ gì về thuật toán YouTube?',
      'Menurutmu jujur, algoritma YouTube itu seperti apa?'
    ),
    options: [
      {
        text: T(
          '무섭다. 내가 생각만 했던 것도 추천에 뜨는 것 같다',
          'Scary — it feels like things I only thought about still show up',
          '怖い。考えただけのことまでおすすめに出る気がする',
          '有点吓人，好像连只在心里想过的也会出现在推荐',
          '有點嚇人，好像連只在心裡想過的也會出現在推薦',
          'Hơi sợ — như thứ chỉ nghĩ trong đầu cũng lên gợi ý',
          'Seram — seolah hal yang cuma dipikirkan juga muncul di rekomendasi'
        ),
        score: 0,
      },
      {
        text: T(
          '신기하다. 어떻게 내 취향을 이렇게 잘 아는지 감탄한다',
          'Amazing — I am impressed how well it knows my taste',
          'すごい。趣味をこんなに理解するのかと感心する',
          '很神奇，惊叹它怎么这么懂我',
          '很神奇，驚嘆它怎麼這麼懂我',
          'Kỳ diệu — ngạc nhiên vì nó hiểu gu mình quá tốt',
          'Luar biasa — kagum karena paham selera saya'
        ),
        score: 1,
      },
      {
        text: T(
          '나쁘지 않다. 덕분에 새로운 콘텐츠를 많이 발견한다',
          'Not bad — thanks to it I discover lots of new content',
          '悪くない。おかげで新しい発見が多い',
          '还不错，靠它发现很多新内容',
          '還不錯，靠它發現很多新內容',
          'Không tệ — nhờ vậy khám phá nhiều nội dung mới',
          'Tidak buruk — banyak temukan konten baru'
        ),
        score: 2,
      },
      {
        text: T(
          '불편하다. 필터 버블이 생길 것 같아서 의식적으로 다른 장르도 본다',
          'Uncomfortable — I worry about filter bubbles so I seek other genres on purpose',
          '居心地が悪い。フィルターバブルが怖くて別ジャンルも意識的に見る',
          '不太舒服，怕信息茧房会主动看别的类型',
          '不太舒服，怕資訊同溫層會主動看別的類型',
          'Khó chịu — sợ bong bóng lọc nên chủ động xem thể loại khác',
          'Tidak nyaman — was filter bubble jadi sengaja cari genre lain'
        ),
        score: 3,
      },
    ],
  },
];

export const phase3YoutubeAlgorithmKnowsResults: Phase3YoutubeAlgorithmKnowsResult[] = [
  {
    type: 'Type1',
    emoji: '🍿',
    title: T(
      '유튜브가 일상인, 엔터 중독 힐링러',
      'Everyday YouTube: the comfort-and-entertainment healing type',
      '日常がYouTube、エンタメ癒しタイプ',
      '把YouTube当日常的你：娱乐疗愈型',
      '把YouTube當日常的你：娛樂療癒型',
      'YouTube là thường nhật: mê giải trí & healing',
      'YouTube jadi keseharian: tipe healing hiburan'
    ),
    shortDescription: T(
      "유튜브 알고리즘이 당신을 이렇게 파악하고 있습니다 → '이 사람은 즐겁고 편안한 것이 필요해.'",
      'How YouTube reads you → "This person needs fun and comfort."',
      'アルゴリズムの読み → 「この人は楽しくて心地よいものが欲しい」',
      '算法眼中的你 →「这人需要轻松和快乐」',
      '演算法眼中的你 →「這人需要輕鬆和快樂」',
      'Thuật toán đọc bạn → "Người này cần vui và dễ chịu."',
      'Algoritma membacamu → "Orang ini butuh seru dan nyaman."'
    ),
    description: T(
      '당신의 유튜브는 먹방, 예능, 브이로그, ASMR로 가득 차 있습니다. 알고리즘은 당신이 정보보다 감성과 재미를 원한다는 것을 정확히 파악했습니다. 피곤한 하루 끝에 유튜브를 켜면서 완전히 뇌를 비우고 싶은 욕구가 강한 타입입니다. 유튜브는 당신에게 넷플릭스이자 라디오이자 말동무입니다. 알고리즘이 당신의 힐링 루틴을 완전히 장악했습니다.',
      'Your feed is packed with mukbang, variety shows, vlogs, and ASMR. The algorithm has figured out that you want emotion and fun more than dry facts. After a tiring day you open YouTube to clear your head — YouTube is your Netflix, your radio, and your companion. The algorithm basically runs your healing routine.',
      'フィードは먹방、バラエティ、ブイログ、ASMRだらけ。アルゴリズムは情報より感情と楽しさを求めていると見抜いています。疲れた夜に頭を空っぽにしたい欲求が強いタイプ。YouTubeはあなたのNetflixでありラジオであり話し相手。癒しルーティンをアルゴリズムが握っています。',
      '你的首页满是吃播、综艺、Vlog、ASMR。算法看准了你更想要情绪与乐趣而不是干巴巴的信息。疲惫的一天结束后你想用YouTube把大脑清空——它像Netflix、像电台、也像陪聊。疗愈节奏几乎被算法包办了。',
      '你的首頁滿是吃播、綜藝、Vlog、ASMR。演算法看準了你更想要情緒與樂趣而不是乾巴巴的資訊。疲憊的一天結束後你想用YouTube把大腦清空——它像Netflix、像電台、也像陪聊。療癒節奏幾乎被演算法包辦了。',
      'Feed của bạn đầy mukbang, show giải trí, vlog, ASMR. Thuật toán đoán đúng bạn cần cảm xúc và vui hơn là thông tin khô. Sau ngày mệt bạn mở YouTube để xả não — nó như Netflix, radio và người đồng hành. Routine healing gần như do thuật toán điều khiển.',
      'Feed-mu penuh mukbang, variety, vlog, ASMR. Algoritma tahu kamu maunya emosi dan hiburan, bukan info kering. Setelah hari melelahkan kamu buka YouTube untuk kosongkan kepala — seperti Netflix, radio, dan teman ngobrol. Rutinitas healing nyaris dikuasai algoritma.'
    ),
    algorithmClassification: T(
      '힐링 콘텐츠 소비자 🍵',
      'Healing-content viewer 🍵',
      '癒し系コンテンツ派 🍵',
      '疗愈向内容型 🍵',
      '療癒向內容型 🍵',
      'Người xem nội dung healing 🍵',
      'Pemirsa konten healing 🍵'
    ),
    youtubeSeesMe: T(
      '"스트레스 많고 지쳐있음. 자극 없는 콘텐츠 선호."',
      '"Stressed and tired. Prefers low-stimulation content."',
      '「ストレス多め。刺激の少ないコンテンツ好み」',
      '「压力大、累了，偏好温和不刺激的内容」',
      '「壓力大、累了，偏好溫和不刺激的內容」',
      '"Căng thẳng, mệt. Thích nội dung nhẹ nhàng."',
      '"Stres dan lelah. Suka konten yang tidak terlalu stimulasi."'
    ),
    exampleVideos: T(
      '새벽 감성 브이로그 / 먹방 ASMR / 힐링 자연 영상',
      'Late-night mood vlogs / mukbang ASMR / calming nature clips',
      '深夜ムードのブイログ / 먹방ASMR / 癒し自然',
      '深夜情绪Vlog / 吃播ASMR / 治愈自然片',
      '深夜情緒Vlog / 吃播ASMR / 治癒自然片',
      'Vlog cảm xúc khuya / mukbang ASMR / thiên nhiên chill',
      'Vlog malam / mukbang ASMR / alam yang menenangkan'
    ),
    hiddenInterest: T(
      '"당신, 사실 지금 많이 지쳐있죠?"',
      '"Truth is, you are pretty exhausted right now, are you not?"',
      '「本当は今、かなり疲れてますよね？」',
      '「其实你现在挺累的吧？」',
      '「其實你現在挺累的吧？」',
      '"Thực ra bạn đang khá kiệt sức đúng không?"',
      '"Sebenarnya kamu lagi capek banget, ya?"'
    ),
    goodMatch: T(
      'Type 2 (취미 콘텐츠와 힐링이 잘 섞임)',
      'Type 2 (hobbies and healing mix well)',
      'Type 2（趣味と癒やしがよく合う）',
      'Type 2（爱好与疗愈很合拍）',
      'Type 2（愛好與療癒很合拍）',
      'Type 2 (sở thích và healing hòa hợp)',
      'Type 2 (hobi dan healing cocok)'
    ),
    badMatch: T(
      'Type 5 (진지한 다큐가 피드에 뜨면 손가락이 안 움직임)',
      'Type 5 (when a serious doc hits the feed, your thumb freezes)',
      'Type 5（真面目ドキュメンタリーが出ると指が止まる）',
      'Type 5（严肃纪录片出现在首页时手指会停住）',
      'Type 5（嚴肅紀錄片出現在首頁時手指會停住）',
      'Type 5 (doc nghiêm xuất hiện là ngón tay khựng)',
      'Type 5 (dokumenter serius muncul jempol langsung freeze)'
    ),
    shareTypeName: T(
      '엔터 중독 힐링러',
      'Comfort-streaming healer',
      'エンタメ癒し中毒',
      '娱乐疗愈上瘾型',
      '娛樂療癒上癮型',
      'Mê giải trí & healing',
      'Candu hiburan & healing'
    ),
  },
  {
    type: 'Type2',
    emoji: '🎮',
    title: T(
      '덕질과 취미로 가득 찬, 알고리즘 덕후',
      'Hobbies and fandom first: the algorithm stan',
      '趣味と推しで埋まったアルゴリズムオタク',
      '兴趣与追星拉满的你：算法铁粉型',
      '興趣與追星拉滿的你：演算法鐵粉型',
      'Sở thích & fandom đầy feed: fan cuồng thuật toán',
      'Hobi & fandom penuh feed: stan algoritma'
    ),
    shortDescription: T(
      "유튜브 알고리즘이 당신을 이렇게 파악하고 있습니다 → '이 사람, 자기 세계가 있어.'",
      'How YouTube reads you → "This person has their own world."',
      '読み → 「この人、自分の世界がある」',
      '算法读你 →「这人有自己的小世界」',
      '演算法讀你 →「這人有自己的小世界」',
      'Đọc bạn → "Người này có thế giới riêng."',
      'Membacamu → "Orang ini punya dunianya sendiri."'
    ),
    description: T(
      '게임 공략, 스포츠 하이라이트, 특정 취미 관련 영상들이 피드를 장악한 타입입니다. 알고리즘은 당신의 덕질 영역을 정확히 파악해서 관련 채널을 끝없이 추천합니다. 최애 유튜버의 영상은 알림 설정까지 켜뒀고, 그 채널 영상은 업로드되면 무조건 봅니다. 유튜브가 당신의 취미 생활을 완전히 지원하는 전용 플랫폼이 된 상태입니다.',
      'Walkthroughs, sports highlights, and niche hobby videos own your feed. The algorithm nailed your fandom lane and keeps recommending related channels forever. You turned on notifications for your favorite creator and never miss a new upload. YouTube has become the dedicated OS for your hobby life.',
      '攻略、スポーツハイライト、特定趣味の動画がフィードを支配。アルゴリズムはあなたの推し領域を見抜き関連チャンネルを延々と推す。推しの通知オンでアップロードは必ずチェック。趣味生活の専用プラットフォームになっています。',
      '攻略、体育高光、特定爱好类视频霸占你的首页。算法摸透了你的追星/同好区，相关频道推个不停。本命博主开了通知，更新必看。YouTube几乎成了你兴趣生活的专用系统。',
      '攻略、體育高光、特定愛好類影片霸占你的首頁。演算法摸透了你的追星/同好區，相關頻道推個不停。本命創作者開了通知，更新必看。YouTube幾乎成了你興趣生活的專用系統。',
      'Video game guide, highlight thể thao, sở thích niche chiếm feed. Thuật toán bắt trúng vùng fandom và gợi ý kênh liên quan mãi. Bật thông báo creator yêu thích, có upload là xem. YouTube như hệ điều hành cho đời sống sở thích.',
      'Walkthrough, sorotan olahraga, video hobi menguasai feed. Algoritma menguasai zona fandom dan rekomendasikan channel terkait tanpa henti. Notifikasi creator favorit hidup, upload wajib ditonton. YouTube jadi OS khusus hidup hobimu.'
    ),
    algorithmClassification: T(
      '취미·덕질 전문 소비자 🕹️',
      'Hobby & fandom power viewer 🕹️',
      '趣味・推し専門視聴者 🕹️',
      '兴趣与同好向重度用户 🕹️',
      '興趣與同好向重度用戶 🕹️',
      'Người xem chuyên sở thích & fandom 🕹️',
      'Pemirsa khusus hobi & fandom 🕹️'
    ),
    youtubeSeesMe: T(
      '"확고한 취향 보유. 관심 분야 외 콘텐츠는 클릭 안 함."',
      '"Strong taste. Ignores anything outside their interests."',
      '「趣味がはっきり。興味外はクリックしない」',
      '「口味很固定，圈外内容基本不点」',
      '「口味很固定，圈外內容基本不點」',
      '"Gu rõ ràng. Ngoài chủ đề quan tâm là không click."',
      '"Selera jelas. Di luar minat tidak diklik."'
    ),
    exampleVideos: T(
      '게임 공략 / 스포츠 명장면 / 특정 취미 튜토리얼',
      'Game guides / sports highlights / niche hobby tutorials',
      'ゲーム攻略 / スポーツ名場面 / 趣味チュートリアル',
      '游戏攻略 / 体育名场面 / 小众爱好教程',
      '遊戲攻略 / 體育名場面 / 小眾愛好教學',
      'Công thức game / highlight thể thao / tutorial sở thích',
      'Panduan game / sorotan olahraga / tutorial hobi'
    ),
    hiddenInterest: T(
      '"당신의 덕질 영역, 생각보다 훨씬 깊은 수준입니다."',
      '"Your fan lane runs deeper than you think."',
      '「あなたの推し領域、思ったより深いです」',
      '「你的同好坑，其实比你想的更深」',
      '「你的同好坑，其實比你想的更深」',
      '"Vùng fandom của bạn sâu hơn bạn nghĩ."',
      '"Zona fandommu lebih dalam dari yang kamu kira."'
    ),
    goodMatch: T(
      'Type 3 (정보를 취미에 접목하는 시너지)',
      'Type 3 (synergy: info meets hobbies)',
      'Type 3（情報×趣味のシナジー）',
      'Type 3（信息与爱好叠加很合拍）',
      'Type 3（資訊與愛好疊加很合拍）',
      'Type 3 (thông tin + sở thích hợp nhau)',
      'Type 3 (info + hobi sinergi)'
    ),
    badMatch: T(
      'Type 4 (관심 없는 심층 다큐가 피드에 뜨면 당황)',
      'Type 4 (a deep doc outside your interests feels awkward in the feed)',
      'Type 4（興味ないドキュメンタリーが出ると戸惑う）',
      'Type 4（不感兴趣的长纪录片出现在首页会懵）',
      'Type 4（不感興趣的長紀錄片出現在首頁會懵）',
      'Type 4 (phim tài liệu sâu ngoài gu là lúng túng)',
      'Type 4 (dokumenter dalam di luar minat bikin canggung)'
    ),
    shareTypeName: T(
      '알고리즘 덕후',
      'Algorithm stan',
      'アルゴリズムオタク',
      '算法铁粉',
      '演算法鐵粉',
      'Fan cuồng thuật toán',
      'Stan algoritma'
    ),
  },
  {
    type: 'Type3',
    emoji: '📈',
    title: T(
      '유튜브로 스펙 쌓는, 자기계발 유튜브족',
      'Leveling up on YouTube: the self-improvement grinder',
      'YouTubeでスペックを積む自己投資タイプ',
      '用YouTube自我升级的你：成长型用户',
      '用YouTube自我升級的你：成長型用戶',
      'Dùng YouTube để "cày" bản thân: kiểu tự phát triển',
      'Naik level lewat YouTube: pengguna self-improvement'
    ),
    shortDescription: T(
      "유튜브 알고리즘이 당신을 이렇게 파악하고 있습니다 → '이 사람, 뭔가 이루려고 하는 중.'",
      'How YouTube reads you → "This person is trying to achieve something."',
      '読み → 「この人、今なにか成し遂げようとしている」',
      '算法读你 →「这人正想做成点什么」',
      '演算法讀你 →「這人正想做成點什麼」',
      'Đọc bạn → "Người này đang cố đạt điều gì đó."',
      'Membacamu → "Orang ini sedang berusaha mencapai sesuatu."'
    ),
    description: T(
      '재테크, 부업, 자기계발, 생산성 꿀팁 영상이 추천 피드를 장악한 타입입니다. 유튜브 알고리즘은 당신이 현재 무언가를 바꾸거나 이루려 한다는 것을 정확히 읽고 있습니다. 영상 보면서 메모까지 하고, 챙겨 봐야 할 영상은 나중에 볼 영상에 저장해두는 철저한 시청자입니다. 유튜브가 당신의 온라인 클래스가 된 지 오래입니다.',
      'Money tips, side hustles, self-help, and productivity hacks dominate your recommendations. The algorithm reads that you want to change something or level up right now. You take notes while watching and save must-watch videos to Watch Later. YouTube has been your online classroom for a long time.',
      '資産形成、副業、自己啓発、生産性ハックがおすすめを支配。今なにかを変えたい・達成したいとアルゴリズムに読まれています。見ながらメモし、後で見るに厳選保存する徹底派。YouTubeはもうオンライン教室です。',
      '理财、副业、自我提升、效率技巧类推荐占满首页。算法读准了你想改变现状、想做出成绩。边看边记，该看的丢进稍后再看。YouTube早就是你的线上课堂。',
      '理財、副業、自我提升、效率技巧類推薦占滿首頁。演算法讀準了你想改變現狀、想做出成績。邊看邊記，該看的丟進稍後再看。YouTube早就是你的線上課堂。',
      'Video tài chính, side hustle, tự phát triển, productivity chiếm gợi ý. Thuật toán thấy bạn muốn thay đổi và tiến bộ. Vừa xem vừa ghi chép, video quan trọng lưu Xem sau. YouTube đã lâu là lớp học online của bạn.',
      'Konten uang, side hustle, pengembangan diri, produktivitas menguasai rekomendasi. Algoritma membaca kamu ingin berubah dan naik level. Catat sambil nonton, simpan ke Tonton nanti. YouTube sudah lama jadi kelas online-mu.'
    ),
    algorithmClassification: T(
      '자기계발 정보 소비자 💡',
      'Self-improvement info seeker 💡',
      '自己啓発・情報インプット派 💡',
      '自我提升信息型 💡',
      '自我提升資訊型 💡',
      'Người cần thông tin tự phát triển 💡',
      'Pencari info self-improvement 💡'
    ),
    youtubeSeesMe: T(
      '"목표 지향적. 현재 변화나 성장을 원하는 상태."',
      '"Goal-driven. Actively wants change or growth right now."',
      '「目標志向。今まさに変化や成長を求めている」',
      '「目标感强，正想要改变或成长」',
      '「目標感強，正想要改變或成長」',
      '"Hướng mục tiêu. Đang muốn thay đổi hoặc trưởng thành."',
      '"Berorientasi tujuan. Ingin berubah atau berkembang sekarang."'
    ),
    exampleVideos: T(
      '월 수익 공개 / 생산성 루틴 / 성공한 사람들의 하루',
      'Income breakdowns / productivity routines / a day in successful people lives',
      '月収公開 / 生産性ルーティン / 成功者の一日',
      '月入公开 / 效率routine / 成功者的一天',
      '月入公開 / 效率routine / 成功者的一天',
      'Công khai thu nhập / routine năng suất / một ngày của người thành công',
      'Pendapatan bulanan / rutinitas produktivitas / sehari bersama orang sukses'
    ),
    hiddenInterest: T(
      '"지금 인생에서 뭔가 바꾸고 싶은 게 있군요."',
      '"There is something in your life you want to change."',
      '「今の人生で、何か変えたいことがありますね」',
      '「你现在的人生里，有想改变的事吧」',
      '「你現在的人生裡，有想改變的事吧」',
      '"Trong đời hiện tại, bạn có điều muốn thay đổi."',
      '"Ada hal dalam hidupmu sekarang yang ingin kamu ubah."'
    ),
    goodMatch: T(
      'Type 4 (지식의 깊이를 더해줄 수 있는 조합)',
      'Type 4 (pairs well with deep knowledge rabbit holes)',
      'Type 4（知の深掘りと相性がいい）',
      'Type 4（和深度知识型很搭）',
      'Type 4（和深度知識型很搭）',
      'Type 4 (hợp với kiểu đào sâu tri thức)',
      'Type 4 (cocok dengan yang suka mendalami)'
    ),
    badMatch: T(
      'Type 1 (생산성 없는 콘텐츠가 피드를 오염시킨다고 느낌)',
      'Type 1 (pure comfort content feels like it pollutes the feed)',
      'Type 1（癒しだけのコンテンツはフィードを汚す気がする）',
      'Type 1（纯疗愈向会觉得污染信息流）',
      'Type 1（純療癒向會覺得污染資訊流）',
      'Type 1 (nội dung chill thuần thấy làm bẩn feed)',
      'Type 1 (konten healing murni terasa mengotak-ngatik feed)'
    ),
    shareTypeName: T(
      '자기계발 유튜브족',
      'Self-improvement YouTuber type',
      '自己投資YouTube族',
      '自我提升型用户',
      '自我提升型用戶',
      'Kiểu tự phát triển',
      'Tipe self-improvement'
    ),
  },
  {
    type: 'Type4',
    emoji: '🕳️',
    title: T(
      '토끼굴에 빠지는, 심층 탐구 유튜브 탐험가',
      'Down the rabbit hole: the deep-dive explorer',
      '兎穴に落ちる深掘り探検家',
      '爱钻兔子洞的你：深度探索型',
      '愛鑽兔子洞的你：深度探索型',
      'Hay rơi hố thỏ: kiểu đào sâu tò mò',
      'Masuk lubang kelinci: penjelajah deep-dive'
    ),
    shortDescription: T(
      "유튜브 알고리즘이 당신을 이렇게 파악하고 있습니다 → '이 사람, 평범한 주제엔 관심 없어.'",
      'How YouTube reads you → "This person is not into surface-level topics."',
      '読み → 「この人、平凡なテーマには興味がない」',
      '算法读你 →「这人对肤浅话题没兴趣」',
      '演算法讀你 →「這人對膚淺話題沒興趣」',
      'Đọc bạn → "Người này không mê chủ đề hời hợt."',
      'Membacamu → "Orang ini tidak suka topik permukaan."'
    ),
    description: T(
      '역사 미스터리, 음모론 반박, 과학 다큐, 철학 강의, 사회 이슈 심층 분석 영상들이 피드에 가득한 타입입니다. 영상 하나를 보고 나면 관련 영상으로 끝없이 이어지는 유튜브 토끼굴에 자주 빠집니다. 새벽에 "왜 인류는 잠을 자는가"를 검색하다가 "우주의 끝은 존재하는가"까지 가본 경험이 있을 확률이 높습니다. 알고리즘이 당신의 지적 호기심을 완전히 장악했습니다.',
      'History mysteries, debunking conspiracy takes, science docs, philosophy lectures, and deep social analysis fill your feed. One video leads to endless related ones — classic YouTube rabbit holes. You have probably gone from searching why humans sleep to whether the universe has an edge at 2 a.m. The algorithm fully owns your curiosity.',
      '歴史ミステリー、陰謀論検証、科学ドキュ、哲学講義、社会Issueの深掘りがフィードを埋める。一本見たら関連が無限に続く典型的ウサギ穴。深夜に「人はなぜ眠るか」から「宇宙の果てはあるか」まで行った経験率高し。知的好奇心をアルゴリズムが握っています。',
      '历史谜团、辟谣阴谋论、科学纪录片、哲学课、社会议题深扒占满首页。看完一个就顺着相关视频无限续播，典型兔子洞。凌晨从「人为什么要睡觉」搜到「宇宙有没有尽头」的概率很高。好奇心被算法拿捏。',
      '歷史謎團、闢謠陰謀論、科學紀錄片、哲學課、社會議題深扒占滿首頁。看完一個就順著相關影片無限續播，典型兔子洞。凌晨從「人為什麼要睡覺」搜到「宇宙有沒有盡頭」的機率很高。好奇心被演算法拿捏。',
      'Feed đầy huyền sử, bẻ gãy âm mưu, phim khoa học, triết học, phân tích xã hội sâu. Một video dẫn tới vô số video liên quan — hố thỏ kinh điển. Dễ từ "vì sao ngủ" lướt thành "có biên giới vũ trụ không" lúc 2 giờ sáng. Tò mò bị thuật toán nắm trọn.',
      'Misteri sejarah, debunk teori konspirasi, dokumenter sains, filosofi, analisis sosial memenuhi feed. Satu video memicu rantai tanpa akhir — lubang kelinci klasik. Pernah cari kenapa manusia tidur lalu sampai ke ujung alam semesta di dini hari. Rasa ingin tahu dikuasai algoritma.'
    ),
    algorithmClassification: T(
      '심층 탐구 소비자 🔭',
      'Deep-dive knowledge seeker 🔭',
      '深掘り探求派 🔭',
      '深度求知型 🔭',
      '深度求知型 🔭',
      'Người đào sâu tri thức 🔭',
      'Pencari pengetahuan mendalam 🔭'
    ),
    youtubeSeesMe: T(
      '"지적 호기심 강함. 표면적인 내용보다 본질을 원함."',
      '"High curiosity. Wants substance, not surface."',
      '「知的好奇心が強い。表より本質が欲しい」',
      '「好奇心强，要本质不要表面」',
      '「好奇心強，要本質不要表面」',
      '"Tò mò mạnh. Muốn bản chất hơn bề mặt."',
      '"Rasa ingin tahu tinggi. Mau esensi, bukan kulit saja."'
    ),
    exampleVideos: T(
      '인류 역사의 미스터리 / 양자역학 쉽게 설명 / 철학자의 삶',
      'Historical mysteries / quantum physics explained simply / lives of philosophers',
      '人類史の謎 / 量子力学をやさしく / 哲学者の人生',
      '人类历史之谜 / 量子力学通俗讲 / 哲学家的人生',
      '人類歷史之謎 / 量子力學通俗講 / 哲學家的人生',
      'Bí ẩn lịch sử / lượng tử giản dị / đời triết gia',
      'Misteri sejarah / fisika kuantum simpel / hidup filosof'
    ),
    hiddenInterest: T(
      '"당신, 사실 꽤 복잡하고 깊게 생각하는 사람입니다."',
      '"You actually think in complex, deep ways."',
      '「あなた、実はかなり複雑で深く考える人です」',
      '「其实你是会复杂、深层思考的人」',
      '「其實你是會複雜、深層思考的人」',
      '"Bạn thực ra là người nghĩ sâu và phức tạp."',
      '"Kamu sebenarnya berpikir mendalam dan kompleks."'
    ),
    goodMatch: T(
      'Type 5 (지식 깊이로 완벽한 시너지)',
      'Type 5 (perfect synergy on depth of knowledge)',
      'Type 5（知の深さで最高の相性）',
      'Type 5（和知识深度型绝配）',
      'Type 5（和知識深度型絕配）',
      'Type 5 (ăn ý về độ sâu tri thức)',
      'Type 5 (sinergi kedalaman pengetahuan)'
    ),
    badMatch: T(
      'Type 1 (힐링 콘텐츠가 피드에 끼어들면 맥이 끊김)',
      'Type 1 (pure comfort clips breaking the flow feel jarring)',
      'Type 1（癒しだけが挟まるとテンションが切れる）',
      'Type 1（纯疗愈插进来会觉得断档）',
      'Type 1（純療癒插進來會覺得斷檔）',
      'Type 1 (clip healing xen vào là đứt nhịp)',
      'Type 1 (konten healing nyelip terasa putus alur)'
    ),
    shareTypeName: T(
      '심층 탐구 유튜브 탐험가',
      'Deep-dive explorer',
      '深掘り探検家',
      '深度探索型',
      '深度探索型',
      'Nhà thám hiểm đào sâu',
      'Penjelajah deep-dive'
    ),
  },
  {
    type: 'Type5',
    emoji: '⚙️',
    title: T(
      '유튜브도 전략적으로 쓰는, 알고리즘 설계자',
      'Strategic YouTube: the algorithm designer',
      'YouTubeも戦略派、アルゴリズム設計者',
      '把YouTube当策略工具的你：算法设计者型',
      '把YouTube當策略工具的你：演算法設計者型',
      'Dùng YouTube có chiến lược: kiểu "thiết kế" thuật toán',
      'YouTube strategis: perancang algoritme'
    ),
    shortDescription: T(
      "유튜브 알고리즘이 당신을 이렇게 파악하고 있습니다 → '이 사람, 우리보다 우리를 더 잘 알 것 같아.'",
      'How YouTube reads you → "Feels like they understand our system better than we do."',
      '読み → 「この人、こちらよりシステムを理解してそう」',
      '算法读你 →「这人好像比我们还懂推荐」',
      '演算法讀你 →「這人好像比我們還懂推薦」',
      'Đọc bạn → "Họ hiểu hệ thống hơn cả chúng ta."',
      'Membacamu → "Seolah mereka paham sistem lebih dari kami."'
    ),
    description: T(
      '알고리즘에 끌려다니는 것이 아니라 알고리즘을 의식하면서 시청하는 타입입니다. 필터 버블을 피하기 위해 의도적으로 다른 장르를 시청하거나, 시청 기록을 직접 관리하기도 합니다. 유튜브가 나를 어떤 카테고리로 분류하는지 파악하고 있고, 추천 영상이 왜 뜨는지 이유도 압니다. 알고리즘을 역으로 이용하는 수준의 파워유저입니다.',
      'You watch with the algorithm in mind instead of mindlessly drifting. You deliberately sample other genres to dodge filter bubbles and sometimes curate your watch history. You know which category YouTube put you in and why a recommendation appeared. You are a power user who reverse-engineers the feed.',
      '無思考に流されるのではなくアルゴリズムを意識して見る。フィルターバブルを避けるため別ジャンルを意図的に見たり履歴を整理したり。自分がどのカテゴリに入れられているか、なぜこのおすすめか理解している。アルゴリズムを逆利用するパワーユーザーです。',
      '不是被算法拖着走，而是带着意识在看。为躲信息茧房会主动看别的类型，也会管理观看记录。你清楚自己被归到哪类、也明白推荐为什么出现。属于会反向利用算法的重度用户。',
      '不是被演算法拖著走，而是帶著意識在看。為躲資訊同溫層會主動看別的類型，也會管理觀看紀錄。你清楚自己被歸到哪類、也明白推薦為什麼出現。屬於會反向利用演算法的重度用戶。',
      'Không bị kéo đi mù quáng mà luôn nghĩ về thuật toán. Cố tình xem thể loại khác để tránh bong bóng lọc, đôi khi dọn lịch sử. Biết YouTube xếp mình vào đâu và vì sao có gợi ý đó. Power user mà reverse-engineer feed.',
      'Tidak hanyut tapi sadar algoritma. Sengaja tonton genre lain hindari filter bubble, kadang rapikan riwayat. Tahu kategori yang diberi YouTube dan alasan rekomendasi muncul. Power user yang memanfaatkan algoritma secara terbalik.'
    ),
    algorithmClassification: T(
      '알고리즘 파워유저 🧠',
      'Algorithm power user 🧠',
      'アルゴリズムパワーユーザー 🧠',
      '算法高玩 🧠',
      '演算法高玩 🧠',
      'Power user thuật toán 🧠',
      'Power user algoritma 🧠'
    ),
    youtubeSeesMe: T(
      '"분석적이고 메타인지가 높음. 플랫폼 자체에 관심 있음."',
      '"Analytical, high meta-awareness. Cares about the platform itself."',
      '「分析的でメタ認知が高い。プラットフォーム自体に興味」',
      '「分析型、元认知强，对平台本身有兴趣」',
      '「分析型、後設認知強，對平台本身有興趣」',
      '"Phân tích, tự nhận thức meta cao. Quan tâm nền tảng."',
      '"Analitis, kesadaran meta tinggi. Peduli pada platform."'
    ),
    exampleVideos: T(
      '유튜브 알고리즘 작동 원리 / 디지털 미디어 비평 / AI와 추천 시스템',
      'How the YouTube algorithm works / digital media criticism / AI and recommender systems',
      'YouTubeアルゴリズムの仕組み / デジタルメディア批評 / AIとレコメンド',
      'YouTube算法原理 / 数字媒体批评 / AI与推荐系统',
      'YouTube演算法原理 / 數位媒體批評 / AI與推薦系統',
      'Cách hoạt động thuật toán / phê bình truyền thông / AI & gợi ý',
      'Cara kerja algoritma / kritik media digital / AI & rekomendasi'
    ),
    hiddenInterest: T(
      '"당신은 콘텐츠를 소비하면서 동시에 분석하고 있습니다."',
      '"You consume content while analyzing it at the same time."',
      '「コンテンツを見ながら同時に分析している」',
      '「你在消费内容的同时也在分析它」',
      '「你在消費內容的同時也在分析它」',
      '"Bạn vừa tiêu thụ vừa phân tích nội dung."',
      '"Kamu konsumsi sekaligus menganalisis konten."'
    ),
    goodMatch: T(
      'Type 4 (심층 분석을 함께 즐길 수 있는 조합)',
      'Type 4 (great match for loving deep analysis together)',
      'Type 4（深掘り分析を一緒に楽しめる）',
      'Type 4（和深度分析型很合拍）',
      'Type 4（和深度分析型很合拍）',
      'Type 4 (hợp kiểu thích phân tích sâu)',
      'Type 4 (cocok yang suka analisis mendalam)'
    ),
    badMatch: T(
      'Type 2 (덕질만 하는 타입을 이해하기 어려울 수 있음)',
      'Type 2 (pure fandom-for-funs-sake can feel hard to relate to)',
      'Type 2（推しだけのタイプは理解しづらいことも）',
      'Type 2（纯追星玩乐型有时难以理解）',
      'Type 2（純追星玩樂型有時難以理解）',
      'Type 2 (kiểu chỉ fandom vui vẻ khó hiểu)',
      'Type 2 (tipe fandom murni kadang sulit dipahami)'
    ),
    shareTypeName: T(
      '알고리즘 설계자',
      'Algorithm designer',
      'アルゴリズム設計者',
      '算法设计者',
      '演算法設計者',
      'Người thiết kế thuật toán',
      'Perancang algoritma'
    ),
  },
  {
    type: 'Type6',
    emoji: '🌀',
    title: T(
      '유튜브가 포기한, 알고리즘 불가해 인간',
      'Even YouTube gave up: the unclassifiable human',
      'YouTubeも諦めた、分類不能ヒト',
      '让算法都放弃的你：无法归类型',
      '讓演算法都放棄的你：無法歸類型',
      'Cả YouTube cũng bó tay: kiểu không phân loại nổi',
      'YouTube menyerah: manusia tak terklasifikasi'
    ),
    shortDescription: T(
      "유튜브 알고리즘이 당신을 이렇게 파악하고 있습니다 → '...이 사람은 우리도 모르겠다.'",
      'How YouTube reads you → "...Honestly, we are not sure about this one."',
      '読み → 「…正直、この人はよくわからない」',
      '算法读你 →「……说实话，我们也不太确定」',
      '演算法讀你 →「……說實話，我們也不太確定」',
      'Đọc bạn → "...Thật lòng là chúng tôi cũng không chắc."',
      'Membacamu → "...Sejujurnya kami juga tidak yakin."'
    ),
    description: T(
      '오늘은 먹방, 내일은 양자역학, 모레는 90년대 추억의 광고 모음, 그 다음 날은 해외 동물 구조 영상. 당신의 유튜브 시청 기록은 그 어떤 AI도 패턴을 찾지 못할 수준입니다. 알고리즘이 추천을 포기하고 그냥 인기 급상승 영상을 띄워줄 때도 있습니다. 관심사가 넓고 다양해서 어떤 영상이든 재미 포인트를 찾아내는 타입. 유튜브 중에서 가장 자유로운 영혼입니다.',
      'Today mukbang, tomorrow quantum physics, the day after 90s nostalgia ads, then overseas animal rescues. Your watch history is so chaotic no AI can find a pattern. Sometimes the algorithm gives up and just shows trending. You are wide-ranging enough to find fun in almost anything — the freest soul on YouTube.',
      '今日は먹방、明日は量子力学、明後日は90年代懐古CM、その次は海外の動物救助。視聴履歴はどのAIもパターン抽出不能。おすすめを諦めてトレンドを出すことも。興味が広くて何にでも楽しさを見つけるタイプ。YouTubeで一番自由な魂です。',
      '今天吃播，明天量子力学，后天90年代怀旧广告，再往后海外救动物。观看记录乱到任何AI都抓不出规律。有时推荐算法放弃治疗直接塞爆款。你兴趣面极广，啥都能看出乐子——堪称YouTube最自由的灵魂。',
      '今天吃播，明天量子力學，後天90年代懷舊廣告，再往後海外救動物。觀看紀錄亂到任何AI都抓不出規律。有時推薦演算法放棄治療直接塞爆款。你興趣面極廣，啥都能看出樂子——堪稱YouTube最自由的靈魂。',
      'Hôm nay mukbang, mai lượng tử, kia quảng cáo hoài niệm 90s, sau đó cứu động vật nước ngoài. Lịch sử xem hỗn loạn đến mức AI không tìm ra quy luật. Đôi khi thuật toán bó tay chỉ show trending. Bạn đa sở thích, clip nào cũng tìm được chỗ vui — linh hồn tự do nhất YouTube.',
      'Hari ini mukbang, besok fisika kuantum, lusa iklan nostalgia 90an, lalu penyelamatan hewan. Riwayat tontonan kacau hingga AI gagal pola. Kadang algoritma menyerah dan kasih trending saja. Minatmu luas — jiwa paling bebas di YouTube.'
    ),
    algorithmClassification: T(
      '분류 불가 자유인 🎲',
      'Unclassifiable free spirit 🎲',
      '分類不能・自由人 🎲',
      '无法归类自由人 🎲',
      '無法歸類自由人 🎲',
      'Tự do không xếp loại được 🎲',
      'Jiwa bebas tak terklasifikasi 🎲'
    ),
    youtubeSeesMe: T(
      '"패턴 없음. 예측 불가. 추천 정확도 최하위."',
      '"No pattern. Unpredictable. Recommendation accuracy: bottom tier."',
      '「パターンなし。予測不能。おすすめ精度最下位」',
      '「无规律、难预测、推荐准确度垫底」',
      '「無規律、難預測、推薦準確度墊底」',
      '"Không quy luật. Không đoán được. Độ chính xác gợi ý: thấp nhất."',
      '"Tanpa pola. Tak terduga. Akurasi rekomendasi: terendah."'
    ),
    exampleVideos: T(
      '알 수 없음. 매번 다름. 유튜브도 포기한 상태',
      'Unknown. Different every time. Even YouTube shrugged',
      '不明。毎回違う。YouTubeも諦めモード',
      '无法预测。每次都不同。YouTube也随缘了',
      '無法預測。每次都不同。YouTube也隨緣了',
      'Không đoán được. Mỗi lần khác nhau. YouTube cũng bó tay',
      'Tak terduga. Beda tiap kali. YouTube juga pasrah'
    ),
    hiddenInterest: T(
      '"당신의 관심사는 유튜브 알고리즘보다 넓습니다."',
      '"Your interests are wider than any recommendation model."',
      '「あなたの興味はアルゴリズムより広い」',
      '「你的兴趣面比任何推荐模型都宽」',
      '「你的興趣面比任何推薦模型都寬」',
      '"Sở thích của bạn rộng hơn mọi mô hình gợi ý."',
      '"Minatmu lebih luas dari model rekomendasi mana pun."'
    ),
    goodMatch: T(
      '모든 유형 (어떤 콘텐츠든 일단 봄)',
      'All types (you will watch almost anything)',
      '全タイプ（とりあえずなんでも見る）',
      '所有类型（啥都能先看一眼）',
      '所有類型（啥都能先看一眼）',
      'Mọi kiểu (gì cũng xem thử)',
      'Semua tipe (apa saja ditonton)'
    ),
    badMatch: T(
      '없음 (딱히 안 맞는 장르가 없음)',
      'None (no genre truly clashes with you)',
      'なし（合わないジャンルがない）',
      '没有（没有真正合不来的类型）',
      '沒有（沒有真正合不來的類型）',
      'Không có (không thể loại nào thật sự kỵ)',
      'Tidak ada (tidak ada genre yang benar-benar tabu)'
    ),
    shareTypeName: T(
      '알고리즘 불가해 인간',
      'The unclassifiable one',
      '分類不能ヒト',
      '无法归类的人',
      '無法歸類的人',
      'Người không xếp loại nổi',
      'Manusia tak terklasifikasi'
    ),
  },
];
