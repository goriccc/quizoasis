/**
 * 나의 혼밥 유형 — 12문항 이미지 4지선다, A=0 B=1 C=2 D=3, 총점 0~36 → 6유형
 *
 * Supabase `tests-thumbnails` 업로드 파일명 규칙:
 * - 썸네일: p3_test_solo_dining_type.webp
 * - 답변 이미지(1:1): p3_test_solo_dining_type_q{n}a~d.webp (12문항 × 4 = 48장)
 * - 신규 테스트는 .webp 사용. 기존 테스트 .jpg도 getThumbnailUrl()로 그대로 수용됨.
 */

function M(ko: string, en: string, ja: string, zhCN: string, zhTW: string, vi: string, id: string): Record<string, string> {
  return { ko, en, ja, 'zh-CN': zhCN, 'zh-TW': zhTW, vi, id };
}

export interface Phase3SoloDiningTypeQuestion {
  id: number;
  question: Record<string, string>;
  options: { image: string; label: Record<string, string>; score: number }[];
}

export interface Phase3SoloDiningTypeResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  soloDiningType: Record<string, string>;
  soloDiningKeywords: Record<string, string>;
  favoritePlaces: Record<string, string>;
  favoriteMenus: Record<string, string>;
  personalityTrait: Record<string, string>;
  hiddenSide: Record<string, string>;
  upgradeTip: Record<string, string>;
  oneLineReview: Record<string, string>;
  shareSnippet: Record<string, string>;
}

export function calculatePhase3SoloDiningTypeResult(scores: number[]): string {
  const total = scores.reduce((a, b) => a + (b ?? 0), 0);
  if (total <= 5) return 'Type1';
  if (total <= 11) return 'Type2';
  if (total <= 19) return 'Type3';
  if (total <= 27) return 'Type4';
  if (total <= 33) return 'Type5';
  return 'Type6';
}

export const phase3SoloDiningTypeQuestions: Phase3SoloDiningTypeQuestion[] = [
  {
    id: 1,
    question: M(
      '혼밥 중 나의 손은 주로 어디에 있나요?',
      'Where are my hands mostly while dining alone?',
      '一人で食事中、私の手は主にどこにありますか？',
      '独自用餐时，我的手主要在哪里？',
      '獨自用餐時，我的手主要在哪裡？',
      'Khi ăn một mình, tay tôi chủ yếu ở đâu?',
      'Saat makan sendiri, tangan saya biasanya di mana?'
    ),
    options: [
      {
        image: 'p3_test_solo_dining_type_q1a.webp',
        label: M(
          '젓가락·숟가락만. 먹는 것에 집중한다',
          'Only chopsticks and a spoon. I focus on eating.',
          '箸とスプーンだけ。食べることに集中する。',
          '只有筷子和勺子。专注吃饭。',
          '只有筷子和湯匙。專注吃飯。',
          'Chỉ đũa và thìa. Tập trung vào việc ăn.',
          'Hanya sumpit dan sendok. Fokus makan.'
        ),
        score: 0,
      },
      {
        image: 'p3_test_solo_dining_type_q1b.webp',
        label: M(
          '스마트폰. 영상이나 SNS를 보며 먹는다',
          'Smartphone. I eat while watching videos or scrolling SNS.',
          'スマートフォン。動画やSNSを見ながら食べる。',
          '智能手机。一边看视频或刷社交媒体一边吃。',
          '智慧型手機。一邊看影片或滑社群一邊吃。',
          'Điện thoại thông minh. Vừa xem video hoặc mạng xã hội vừa ăn.',
          'Smartphone. Makan sambil menonton video atau SNS.'
        ),
        score: 1,
      },
      {
        image: 'p3_test_solo_dining_type_q1c.webp',
        label: M(
          '책이나 잡지. 읽으며 먹는다',
          'Book or magazine. I eat while reading.',
          '本や雑誌。読みながら食べる。',
          '书或杂志。边读边吃。',
          '書或雜誌。邊讀邊吃。',
          'Sách hoặc tạp chí. Vừa đọc vừa ăn.',
          'Buku atau majalah. Makan sambil membaca.'
        ),
        score: 2,
      },
      {
        image: 'p3_test_solo_dining_type_q1d.webp',
        label: M(
          '카메라 또는 폰 카메라. 음식 사진을 찍는다',
          'Camera or phone camera. I take photos of the food.',
          'カメラやスマホカメラ。料理の写真を撮る。',
          '相机或手机相机。拍食物照片。',
          '相機或手機相機。拍食物照片。',
          'Máy ảnh hoặc camera điện thoại. Chụp ảnh món ăn.',
          'Kamera atau kamera HP. Memotret makanan.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 2,
    question: M(
      '혼밥 장소로 가장 자주 선택하는 곳은?',
      'Where do you most often choose to dine alone?',
      '一人食の場所として最もよく選ぶのは？',
      '独自用餐最常选择的地点是？',
      '獨自用餐最常選擇的地點是？',
      'Nơi bạn thường chọn nhất để ăn một mình là gì?',
      'Tempat paling sering dipilih untuk makan sendiri?'
    ),
    options: [
      {
        image: 'p3_test_solo_dining_type_q2a.webp',
        label: M(
          '익숙한 단골 식당 또는 집',
          'A familiar regular restaurant or home.',
          '馴染みの常連店か自宅。',
          '熟悉的常去餐厅或家里。',
          '熟悉的常去餐廳或家裡。',
          'Quán quen thuộc hoặc nhà.',
          'Restoran langganan yang familiar atau rumah.'
        ),
        score: 0,
      },
      {
        image: 'p3_test_solo_dining_type_q2b.webp',
        label: M(
          '편의점 또는 푸드코트',
          'Convenience store or food court.',
          'コンビニやフードコート。',
          '便利店或美食广场。',
          '便利商店或美食廣場。',
          'Cửa hàng tiện lợi hoặc khu ẩm thực.',
          'Minimarket atau food court.'
        ),
        score: 1,
      },
      {
        image: 'p3_test_solo_dining_type_q2c.webp',
        label: M(
          '분위기 있는 카페 또는 레스토랑',
          'An atmospheric cafe or restaurant.',
          '雰囲気のあるカフェやレストラン。',
          '有氛围的咖啡厅或餐厅。',
          '有氛圍的咖啡廳或餐廳。',
          'Quán cafe hoặc nhà hàng có không khí.',
          'Kafe atau restoran dengan suasana.'
        ),
        score: 2,
      },
      {
        image: 'p3_test_solo_dining_type_q2d.webp',
        label: M(
          '새로 발견한 혼밥 맛집',
          'A newly discovered solo dining spot.',
          '新しく見つけた一人飯の名店。',
          '新发现的独自用餐好店。',
          '新發現的獨自用餐好店。',
          'Quán ăn một mình mới khám phá.',
          'Tempat makan sendiri baru yang ditemukan.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 3,
    question: M(
      '혼밥 메뉴를 고를 때 나의 기준은?',
      'What are my criteria when choosing a solo dining menu?',
      '一人食のメニューを選ぶときの基準は？',
      '独自用餐选菜单时我的标准是？',
      '獨自用餐選菜單時我的標準是？',
      'Tiêu chí của tôi khi chọn món ăn một mình là gì?',
      'Kriteria saya saat memilih menu makan sendiri?'
    ),
    options: [
      {
        image: 'p3_test_solo_dining_type_q3a.webp',
        label: M(
          '빠르게 나오고 배부른 것',
          'Something that comes out fast and fills me up.',
          '早く出て、お腹が満たされるもの。',
          '上菜快又能吃饱的。',
          '上菜快又能吃飽的。',
          'Món ra nhanh và no bụng.',
          'Yang cepat keluar dan mengenyangkan.'
        ),
        score: 0,
      },
      {
        image: 'p3_test_solo_dining_type_q3b.webp',
        label: M(
          '먹고 싶은 것. 오늘 기분에 맞는 음식',
          'What I want to eat. Food that matches today\'s mood.',
          '食べたいもの。今日の気分に合う料理。',
          '想吃的。符合今天心情的食物。',
          '想吃的。符合今天心情的食物。',
          'Thứ tôi muốn ăn. Món hợp tâm trạng hôm nay.',
          'Yang ingin dimakan. Makanan sesuai mood hari ini.'
        ),
        score: 1,
      },
      {
        image: 'p3_test_solo_dining_type_q3c.webp',
        label: M(
          '건강하거나 균형 잡힌 것',
          'Something healthy or balanced.',
          '健康的でバランスの取れたもの。',
          '健康或均衡的。',
          '健康或均衡的。',
          'Món lành mạnh hoặc cân bằng.',
          'Yang sehat atau seimbang.'
        ),
        score: 2,
      },
      {
        image: 'p3_test_solo_dining_type_q3d.webp',
        label: M(
          '사진이 예쁘게 나오는 것 또는 화제의 메뉴',
          'Something that looks good in photos or a trending menu.',
          '写真映えするもの、または話題のメニュー。',
          '拍照好看或热门菜单。',
          '拍照好看或熱門菜單。',
          'Món chụp ảnh đẹp hoặc món đang hot.',
          'Yang fotogenik atau menu yang lagi viral.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 4,
    question: M(
      '혼밥 중 가장 편하게 느껴지는 순간은?',
      'When do I feel most comfortable while dining alone?',
      '一人食中、最も心地よく感じる瞬間は？',
      '独自用餐时最感到舒适的时刻是？',
      '獨自用餐時最感到舒適的時刻是？',
      'Khoảnh khắc thoải mái nhất khi ăn một mình là gì?',
      'Momen paling nyaman saat makan sendiri?'
    ),
    options: [
      {
        image: 'p3_test_solo_dining_type_q4a.webp',
        label: M(
          '아무 생각 없이 그냥 먹고 있을 때',
          'When I am just eating without thinking about anything.',
          '何も考えずにただ食べているとき。',
          '什么都不想、只是吃着的时候。',
          '什麼都不想、只是吃著的時候。',
          'Khi tôi chỉ ăn mà không nghĩ gì cả.',
          'Saat hanya makan tanpa memikirkan apa pun.'
        ),
        score: 0,
      },
      {
        image: 'p3_test_solo_dining_type_q4b.webp',
        label: M(
          '좋아하는 영상이나 음악과 함께할 때',
          'When I am with my favorite videos or music.',
          '好きな動画や音楽と一緒のとき。',
          '和喜欢的视频或音乐一起时。',
          '和喜歡的影片或音樂一起時。',
          'Khi có video hoặc nhạc yêu thích bên cạnh.',
          'Saat bersama video atau musik favorit.'
        ),
        score: 1,
      },
      {
        image: 'p3_test_solo_dining_type_q4c.webp',
        label: M(
          '오늘 하루를 혼자 조용히 정리할 때',
          'When I quietly reflect on my day alone.',
          '今日一日を一人で静かに整理するとき。',
          '独自安静地整理今天一天时。',
          '獨自安靜地整理今天一天時。',
          'Khi tôi lặng lẽ nhìn lại một ngày của mình.',
          'Saat merenungkan hari sendirian dengan tenang.'
        ),
        score: 2,
      },
      {
        image: 'p3_test_solo_dining_type_q4d.webp',
        label: M(
          '맛있는 것을 발견해서 기분이 좋을 때',
          'When I discover something delicious and feel happy.',
          '美味しいものを見つけて気分が良くなるとき。',
          '发现好吃的东西心情变好时。',
          '發現好吃的東西心情變好時。',
          'Khi phát hiện món ngon và vui lên.',
          'Saat menemukan makanan enak dan merasa senang.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 5,
    question: M(
      '혼밥할 때 가장 즐겨 보거나 듣는 것은?',
      'What do I most enjoy watching or listening to while dining alone?',
      '一人食中、最もよく見たり聞いたりするものは？',
      '独自用餐时最常看或听什么？',
      '獨自用餐時最常看或聽什麼？',
      'Tôi thường xem hoặc nghe gì nhất khi ăn một mình?',
      'Apa yang paling sering saya tonton atau dengar saat makan sendiri?'
    ),
    options: [
      {
        image: 'p3_test_solo_dining_type_q5a.webp',
        label: M(
          '아무것도 안 한다. 그냥 먹는다',
          'Nothing. I just eat.',
          '何もしない。ただ食べる。',
          '什么都不做。只是吃。',
          '什麼都不做。只是吃。',
          'Không làm gì. Chỉ ăn thôi.',
          'Tidak apa-apa. Hanya makan.'
        ),
        score: 0,
      },
      {
        image: 'p3_test_solo_dining_type_q5b.webp',
        label: M(
          '유튜브·넷플릭스·예능 등 영상 콘텐츠',
          'YouTube, Netflix, variety shows, and other video content.',
          'YouTube・Netflix・バラエティなどの動画コンテンツ。',
          'YouTube、Netflix、综艺等视频内容。',
          'YouTube、Netflix、綜藝等影片內容。',
          'YouTube, Netflix, show giải trí và nội dung video.',
          'YouTube, Netflix, variety show, dan konten video.'
        ),
        score: 1,
      },
      {
        image: 'p3_test_solo_dining_type_q5c.webp',
        label: M(
          '팟캐스트·오디오북·라디오 등 음성 콘텐츠',
          'Podcasts, audiobooks, radio, and other audio content.',
          'ポッドキャスト・オーディオブック・ラジオなどの音声コンテンツ。',
          '播客、有声书、广播等音频内容。',
          '播客、有聲書、廣播等音訊內容。',
          'Podcast, sách nói, radio và nội dung âm thanh.',
          'Podcast, audiobook, radio, dan konten audio.'
        ),
        score: 2,
      },
      {
        image: 'p3_test_solo_dining_type_q5d.webp',
        label: M(
          '인스타·트위터 등 SNS 스크롤',
          'Scrolling Instagram, Twitter, and other SNS.',
          'Instagram・TwitterなどのSNSをスクロール。',
          '刷Instagram、Twitter等社交媒体。',
          '滑Instagram、Twitter等社群。',
          'Lướt Instagram, Twitter và mạng xã hội.',
          'Scroll Instagram, Twitter, dan SNS.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 6,
    question: M(
      '혼밥 속도는?',
      'How fast do I eat when dining alone?',
      '一人食のスピードは？',
      '独自用餐的速度是？',
      '獨自用餐的速度是？',
      'Tốc độ ăn một mình của tôi thế nào?',
      'Seberapa cepat saya makan sendiri?'
    ),
    options: [
      {
        image: 'p3_test_solo_dining_type_q6a.webp',
        label: M(
          '매우 빠르다. 밥 먹는 시간이 아깝다',
          'Very fast. Eating feels like a waste of time.',
          'とても速い。食事の時間がもったいない。',
          '非常快。觉得吃饭浪费时间。',
          '非常快。覺得吃飯浪費時間。',
          'Rất nhanh. Thời gian ăn là lãng phí.',
          'Sangat cepat. Waktu makan terasa sayang.'
        ),
        score: 0,
      },
      {
        image: 'p3_test_solo_dining_type_q6b.webp',
        label: M(
          '보통이다. 콘텐츠 보면서 자연스럽게 먹는다',
          'Normal. I eat naturally while watching content.',
          '普通。コンテンツを見ながら自然に食べる。',
          '普通。边看内容边自然地吃。',
          '普通。一邊看內容一邊自然地吃。',
          'Bình thường. Ăn tự nhiên vừa xem nội dung.',
          'Biasa. Makan alami sambil menonton konten.'
        ),
        score: 1,
      },
      {
        image: 'p3_test_solo_dining_type_q6c.webp',
        label: M(
          '느린 편이다. 음식을 천천히 음미하며 먹는다',
          'On the slow side. I savor food slowly.',
          '遅め。料理をゆっくり味わいながら食べる。',
          '偏慢。慢慢品味食物。',
          '偏慢。慢慢品味食物。',
          'Chậm hơn. Ăn chậm và thưởng thức từng miếng.',
          'Agak lambat. Menikmati makanan perlahan.'
        ),
        score: 2,
      },
      {
        image: 'p3_test_solo_dining_type_q6d.webp',
        label: M(
          '그때그때 다르다. 기분에 따라 속도가 달라진다',
          'It varies. Speed changes with my mood.',
          'その時々で違う。気分で速度が変わる。',
          '看情况。随心情变化。',
          '看情況。隨心情變化。',
          'Tùy lúc. Tốc độ thay đổi theo tâm trạng.',
          'Tergantung situasi. Kecepatan berubah sesuai mood.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 7,
    question: M(
      '혼밥할 때 자리 선택 기준은?',
      'What are my criteria for choosing a seat when dining alone?',
      '一人食の席選びの基準は？',
      '独自用餐选座位的标准是？',
      '獨自用餐選座位的標準是？',
      'Tiêu chí chọn chỗ ngồi khi ăn một mình là gì?',
      'Kriteria memilih tempat duduk saat makan sendiri?'
    ),
    options: [
      {
        image: 'p3_test_solo_dining_type_q7a.webp',
        label: M(
          '아무 자리나. 자리 고르는 데 시간 쓰기 싫다',
          'Any seat. I do not want to spend time choosing.',
          'どこでも。席選びに時間を使いたくない。',
          '随便坐。不想花时间选位。',
          '隨便坐。不想花時間選位。',
          'Chỗ nào cũng được. Không muốn mất thời gian chọn.',
          'Kursi mana saja. Tidak mau buang waktu memilih.'
        ),
        score: 0,
      },
      {
        image: 'p3_test_solo_dining_type_q7b.webp',
        label: M(
          '벽을 등지거나 구석 자리. 아무도 신경 안 쓰는 곳',
          'Back to the wall or a corner seat. Where no one notices me.',
          '壁際や隅の席。誰にも気にされない場所。',
          '靠墙或角落。没人注意的地方。',
          '靠牆或角落。沒人注意的地方。',
          'Sát tường hoặc góc. Nơi không ai để ý.',
          'Menghadap dinding atau sudut. Tempat yang tidak diperhatikan.'
        ),
        score: 1,
      },
      {
        image: 'p3_test_solo_dining_type_q7c.webp',
        label: M(
          '창가 자리. 바깥 풍경이 보이는 곳이 좋다',
          'Window seat. I like places with a view outside.',
          '窓際。外の景色が見える場所が好き。',
          '窗边。喜欢能看到外面风景的位置。',
          '窗邊。喜歡能看到外面風景的位置。',
          'Ghế cửa sổ. Thích chỗ nhìn thấy cảnh bên ngoài.',
          'Dekat jendela. Suka tempat dengan pemandangan luar.'
        ),
        score: 2,
      },
      {
        image: 'p3_test_solo_dining_type_q7d.webp',
        label: M(
          '조명이 좋고 배경이 예쁜 자리. 사진 찍기 좋은 곳',
          'Good lighting and a pretty background. Great for photos.',
          '照明が良く背景がきれいな席。写真に映える場所。',
          '灯光好、背景美的座位。适合拍照。',
          '燈光好、背景美的座位。適合拍照。',
          'Ghế có ánh sáng và nền đẹp. Chụp ảnh tốt.',
          'Pencahayaan bagus dan latar cantik. Cocok untuk foto.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 8,
    question: M(
      '혼밥을 마친 후 나는?',
      'After finishing a solo meal, I...',
      '一人食を終えた後、私は？',
      '独自用餐结束后我会？',
      '獨自用餐結束後我會？',
      'Sau khi ăn một mình xong, tôi...',
      'Setelah selesai makan sendiri, saya...'
    ),
    options: [
      {
        image: 'p3_test_solo_dining_type_q8a.webp',
        label: M(
          '바로 자리를 털고 일어난다. 식사 끝이면 끝이다',
          'Leave immediately. When the meal ends, it is over.',
          'すぐ席を立つ。食事が終わればそれで終わり。',
          '立刻起身离开。吃完就结束。',
          '立刻起身離開。吃完就結束。',
          'Đứng dậy ngay. Hết bữa là xong.',
          'Langsung berdiri. Selesai makan, selesai.'
        ),
        score: 0,
      },
      {
        image: 'p3_test_solo_dining_type_q8b.webp',
        label: M(
          '남은 영상이나 콘텐츠를 조금 더 보다 일어난다',
          'Watch a bit more of the remaining video or content before leaving.',
          '残りの動画やコンテンツを少し見てから立つ。',
          '再多看一会儿剩下的视频或内容再离开。',
          '再多看一會兒剩下的影片或內容再離開。',
          'Xem thêm chút video hoặc nội dung còn lại rồi mới đi.',
          'Nonton sedikit lagi video atau konten yang tersisa lalu pergi.'
        ),
        score: 1,
      },
      {
        image: 'p3_test_solo_dining_type_q8c.webp',
        label: M(
          '커피나 디저트를 추가해서 조금 더 머문다',
          'Add coffee or dessert and stay a little longer.',
          'コーヒーやデザートを追加して少し長居する。',
          '加点咖啡或甜点再多待一会儿。',
          '加點咖啡或甜點再多待一會兒。',
          'Thêm cà phê hoặc tráng miệng và ở lại thêm.',
          'Tambah kopi atau dessert dan tinggal sedikit lebih lama.'
        ),
        score: 2,
      },
      {
        image: 'p3_test_solo_dining_type_q8d.webp',
        label: M(
          '사진 정리하거나 리뷰를 남기고 일어난다',
          'Organize photos or leave a review before leaving.',
          '写真を整理したりレビューを残してから立つ。',
          '整理照片或写评价后再离开。',
          '整理照片或寫評價後再離開。',
          'Sắp xếp ảnh hoặc để lại review rồi mới đi.',
          'Rapikan foto atau tinggalkan review lalu pergi.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 9,
    question: M(
      '혼밥할 때 가장 많이 드는 생각은?',
      'What do I think about most while dining alone?',
      '一人食中、最もよく浮かぶ考えは？',
      '独自用餐时想得最多的是？',
      '獨自用餐時想得最多的是？',
      'Tôi nghĩ nhiều nhất gì khi ăn một mình?',
      'Apa yang paling sering saya pikirkan saat makan sendiri?'
    ),
    options: [
      {
        image: 'p3_test_solo_dining_type_q9a.webp',
        label: M(
          '아무 생각도 없다. 완전히 비어있다',
          'Nothing at all. My mind is completely blank.',
          '何も考えない。完全に空っぽ。',
          '什么都不想。脑子完全空白。',
          '什麼都不想。腦子完全空白。',
          'Không nghĩ gì cả. Hoàn toàn trống rỗng.',
          'Tidak memikirkan apa pun. Benar-benar kosong.'
        ),
        score: 0,
      },
      {
        image: 'p3_test_solo_dining_type_q9b.webp',
        label: M(
          '오늘 있었던 일을 자동으로 복기하게 된다',
          'I automatically replay what happened today.',
          '今日あったことを自動的に振り返ってしまう。',
          '会不自觉地回顾今天发生的事。',
          '會不自覺地回顧今天發生的事。',
          'Tự động ôn lại những gì đã xảy ra hôm nay.',
          'Otomatis mengingat ulang kejadian hari ini.'
        ),
        score: 1,
      },
      {
        image: 'p3_test_solo_dining_type_q9c.webp',
        label: M(
          '다음에 뭐 먹을지 또는 어디 가볼지 생각한다',
          'I think about what to eat next or where to go.',
          '次に何を食べるか、どこに行くかを考える。',
          '想下次吃什么或去哪里。',
          '想下次吃什麼或去哪裡。',
          'Nghĩ sẽ ăn gì hoặc đi đâu tiếp theo.',
          'Memikirkan makan apa atau ke mana berikutnya.'
        ),
        score: 2,
      },
      {
        image: 'p3_test_solo_dining_type_q9d.webp',
        label: M(
          '이 음식이 얼마나 맛있는지 분석하게 된다',
          'I analyze how delicious this food is.',
          'この料理がどれだけ美味しいか分析してしまう。',
          '分析这食物有多好吃。',
          '分析這食物有多好吃。',
          'Phân tích món này ngon đến mức nào.',
          'Menganalisis seberapa enak makanan ini.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 10,
    question: M(
      '혼밥 중 다른 혼밥러가 눈에 들어오면?',
      'When I notice another solo diner while eating alone?',
      '一人食中、他の一人飯族が目に入ったら？',
      '独自用餐时看到其他独自用餐的人？',
      '獨自用餐時看到其他獨自用餐的人？',
      'Khi thấy người ăn một mình khác trong lúc ăn?',
      'Saat melihat penggemar makan sendiri lain?'
    ),
    options: [
      {
        image: 'p3_test_solo_dining_type_q10a.webp',
        label: M(
          '전혀 신경 안 쓴다. 내 식사에만 집중한다',
          'I do not care at all. I focus only on my meal.',
          '全く気にしない。自分の食事に集中する。',
          '完全不在意。只专注自己的餐。',
          '完全不在意。只專注自己的餐。',
          'Hoàn toàn không để ý. Chỉ tập trung vào bữa của mình.',
          'Sama sekali tidak peduli. Fokus hanya pada makanan saya.'
        ),
        score: 0,
      },
      {
        image: 'p3_test_solo_dining_type_q10b.webp',
        label: M(
          '슬쩍 관찰하게 된다. 뭘 먹는지 어떻게 먹는지',
          'I sneakily observe. What they eat and how they eat.',
          'つい観察してしまう。何を食べ、どう食べるか。',
          '会偷偷观察。吃什么、怎么吃。',
          '會偷偷觀察。吃什麼、怎麼吃。',
          'Lén quan sát. Họ ăn gì và ăn thế nào.',
          'Diam-diam mengamati. Makan apa dan bagaimana cara makan.'
        ),
        score: 1,
      },
      {
        image: 'p3_test_solo_dining_type_q10c.webp',
        label: M(
          '동질감이 느껴진다. 혼밥 동지를 만난 기분이다',
          'I feel a sense of kinship. Like meeting a fellow solo diner.',
          '同類意識を感じる。一人飯の同志に会った気分。',
          '有同类的感觉。像遇到独自用餐的同伴。',
          '有同類的感覺。像遇到獨自用餐的同伴。',
          'Cảm thấy đồng điệu. Như gặp đồng minh ăn một mình.',
          'Merasa sejenis. Seperti bertemu sesama penggemar makan sendiri.'
        ),
        score: 2,
      },
      {
        image: 'p3_test_solo_dining_type_q10d.webp',
        label: M(
          '그 사람 음식이 맛있어 보이면 나도 같은 걸 시키고 싶어진다',
          'If their food looks good, I want to order the same.',
          '相手の料理が美味しそうなら自分も同じものを頼みたくなる。',
          '如果对方的食物看起来好吃，我也想吃一样的。',
          '如果對方的食物看起來好吃，我也想吃一樣的。',
          'Nếu món của họ trông ngon, tôi cũng muốn gọi giống.',
          'Jika makanannya terlihat enak, saya juga ingin pesan yang sama.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 11,
    question: M(
      '혼밥의 가장 큰 장점이라고 생각하는 것은?',
      'What do I think is the biggest advantage of dining alone?',
      '一人食の最大のメリットは？',
      '我认为独自用餐最大的优点是？',
      '我認為獨自用餐最大的優點是？',
      'Ưu điểm lớn nhất của ăn một mình theo tôi là gì?',
      'Keuntungan terbesar makan sendiri menurut saya?'
    ),
    options: [
      {
        image: 'p3_test_solo_dining_type_q11a.webp',
        label: M(
          '빠르게 끝낼 수 있다. 시간 낭비 없음',
          'I can finish quickly. No wasted time.',
          '早く終わらせられる。時間の無駄がない。',
          '可以快速结束。不浪费时间。',
          '可以快速結束。不浪費時間。',
          'Có thể kết thúc nhanh. Không lãng phí thời gian.',
          'Bisa selesai cepat. Tidak buang waktu.'
        ),
        score: 0,
      },
      {
        image: 'p3_test_solo_dining_type_q11b.webp',
        label: M(
          '아무도 신경 안 써도 된다. 완전한 자유',
          'No one to worry about. Complete freedom.',
          '誰も気にしなくていい。完全な自由。',
          '不用顾虑任何人。完全自由。',
          '不用顧慮任何人。完全自由。',
          'Không cần lo ai cả. Tự do hoàn toàn.',
          'Tidak perlu khawatir siapa pun. Kebebasan penuh.'
        ),
        score: 1,
      },
      {
        image: 'p3_test_solo_dining_type_q11c.webp',
        label: M(
          '먹고 싶은 것을 먹을 수 있다. 타협 없음',
          'I can eat what I want. No compromise.',
          '食べたいものを食べられる。妥協なし。',
          '可以吃想吃的。无需妥协。',
          '可以吃想吃的。無需妥協。',
          'Ăn được thứ mình muốn. Không phải nhượng bộ.',
          'Bisa makan yang diinginkan. Tanpa kompromi.'
        ),
        score: 2,
      },
      {
        image: 'p3_test_solo_dining_type_q11d.webp',
        label: M(
          '나만의 시간이 생긴다. 충전의 시간',
          'I get my own time. A time to recharge.',
          '自分だけの時間ができる。充電の時間。',
          '有自己独处的时间。充电时光。',
          '有自己獨處的時間。充電時光。',
          'Có thời gian riêng. Thời gian nạp năng lượng.',
          'Punya waktu sendiri. Waktu untuk recharge.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 12,
    question: M(
      '혼밥을 가장 잘 표현하는 이미지는?',
      'Which image best represents my solo dining style?',
      '一人食を最もよく表すイメージは？',
      '最能代表我独自用餐风格的画面是？',
      '最能代表我獨自用餐風格的畫面是？',
      'Hình ảnh nào thể hiện ăn một mình của tôi nhất?',
      'Gambar apa yang paling mewakili makan sendiri saya?'
    ),
    options: [
      {
        image: 'p3_test_solo_dining_type_q12a.webp',
        label: M(
          '효율적으로 한 그릇을 뚝딱 해치우는 장면',
          'Efficiently finishing a bowl in no time.',
          '効率よく一皿をさっと片付けるシーン。',
          '高效快速吃完一碗的场景。',
          '高效快速吃完一碗的場景。',
          'Cảnh ăn nhanh gọn một bát hiệu quả.',
          'Adegan menghabiskan semangkuk dengan efisien.'
        ),
        score: 0,
      },
      {
        image: 'p3_test_solo_dining_type_q12b.webp',
        label: M(
          '이어폰 끼고 좋아하는 콘텐츠와 함께하는 장면',
          'Wearing earphones with favorite content.',
          'イヤホンをして好きなコンテンツと一緒のシーン。',
          '戴耳机享受喜欢的内容的场景。',
          '戴耳機享受喜歡的內容的場景。',
          'Cảnh đeo tai nghe cùng nội dung yêu thích.',
          'Adegan pakai earphone dengan konten favorit.'
        ),
        score: 1,
      },
      {
        image: 'p3_test_solo_dining_type_q12c.webp',
        label: M(
          '창가에서 혼자 조용히 음식을 즐기는 감성적인 장면',
          'A sentimental scene of quietly enjoying food by the window alone.',
          '窓際で一人静かに料理を楽しむ、情緒的なシーン。',
          '在窗边独自安静享受食物的感性场景。',
          '在窗邊獨自安靜享受食物的感性場景。',
          'Cảnh cảm xúc thưởng thức đồ ăn một mình bên cửa sổ.',
          'Adegan menikmati makanan sendirian di dekat jendela dengan tenang.'
        ),
        score: 2,
      },
      {
        image: 'p3_test_solo_dining_type_q12d.webp',
        label: M(
          '정성스럽게 차려진 음식을 사진 찍고 즐기는 장면',
          'Taking photos and enjoying carefully plated food.',
          '丁寧に盛り付けられた料理を撮影して楽しむシーン。',
          '拍照并享受精心摆盘食物的场景。',
          '拍照並享受精心擺盤食物的場景。',
          'Cảnh chụp ảnh và thưởng thức món ăn được bày đẹp.',
          'Adegan memotret dan menikmati makanan yang disajikan rapi.'
        ),
        score: 3,
      },
    ],
  },
];

export const phase3SoloDiningTypeResults: Phase3SoloDiningTypeResult[] = [
  {
    type: 'Type1',
    emoji: '⚡',
    title: M(
      '밥은 연료다, 효율 추구 전략 혼밥러',
      'Meals Are Fuel, Efficiency-Focused Strategic Solo Diner',
      'ご飯は燃料、効率追求型戦略的ひとり飯族',
      '饭是燃料，效率追求战略型独食客',
      '飯是燃料，效率追求戰略型獨食客',
      'Cơm là nhiên liệu, người ăn một mình chiến lược theo đuổi hiệu suất',
      'Makanan adalah bahan bakar, pejalan makan sendiri strategis pengejar efisiensi'
    ),
    shortDescription: M(
      '"당신에게 식사는 생산적인 하루를 위한 연료 충전입니다."',
      '"For you, meals are fuel to power a productive day."',
      '「あなたにとって食事は、生産的な一日のための燃料補給です。」',
      '「对你来说，用餐是为高效一天补充的燃料。」',
      '「對你來說，用餐是為高效一天補充的燃料。」',
      '"Đối với bạn, bữa ăn là nhiên liệu cho một ngày hiệu quả."',
      '"Bagi Anda, makan adalah bahan bakar untuk hari yang produktif."'
    ),
    description: M(
      '혼밥에서 가장 중요한 것은 효율입니다. 빠르게 배를 채우고 다음 할 일로 넘어가는 것이 자연스럽습니다. 자리 선택에 시간 쓰지 않고, 메뉴는 빠르게 결정하고, 식사가 끝나면 바로 일어납니다. 식사 자체보다 식사 전후의 시간을 더 소중히 여기는 타입입니다.',
      'Efficiency matters most when you dine alone. Filling up quickly and moving on to the next task feels natural. You do not waste time picking a seat, decide the menu fast, and leave as soon as you finish. You value the time before and after the meal more than the meal itself.',
      '一人食で最も大切なのは効率です。素早くお腹を満たして次の用事に移るのが自然です。席選びに時間をかけず、メニューはすぐ決め、食事が終わればすぐ立ち上がります。食事そのものより、食事の前後の時間をより大切にするタイプです。',
      '独自用餐时，效率最重要。快速填饱肚子然后去做下一件事很自然。不花时间选座，快速决定菜单，吃完立刻离开。比起用餐本身，更重视用餐前后的时间。',
      '獨自用餐時，效率最重要。快速填飽肚子然後去做下一件事很自然。不花時間選座，快速決定菜單，吃完立刻離開。比起用餐本身，更重視用餐前後的時間。',
      'Hiệu quả là điều quan trọng nhất khi ăn một mình. Lấp đầy bụng nhanh rồi chuyển sang việc tiếp theo là tự nhiên. Không mất thời gian chọn chỗ, quyết định món nhanh và đi ngay khi ăn xong. Bạn coi trọng thời gian trước và sau bữa ăn hơn bản thân bữa ăn.',
      'Efisiensi paling penting saat makan sendiri. Mengisi perut dengan cepat lalu lanjut ke tugas berikutnya terasa alami. Tidak buang waktu memilih kursi, memutuskan menu dengan cepat, dan langsung pergi setelah selesai. Anda lebih menghargai waktu sebelum dan sesudah makan daripada makan itu sendiri.'
    ),
    soloDiningType: M(
      '효율 추구 전략 혼밥러 ⚡',
      'Efficiency-Focused Strategic Solo Diner ⚡',
      '効率追求型戦略的ひとり飯族 ⚡',
      '效率追求战略型独食客 ⚡',
      '效率追求戰略型獨食客 ⚡',
      'Người ăn một mình chiến lược theo đuổi hiệu suất ⚡',
      'Pejalan makan sendiri strategis pengejar efisiensi ⚡'
    ),
    soloDiningKeywords: M(
      '빠름·실용·효율·집중·목적형',
      'Fast·Practical·Efficient·Focused·Purpose-driven',
      '速さ·実用·効率·集中·目的型',
      '快速·实用·效率·专注·目的型',
      '快速·實用·效率·專注·目的型',
      'Nhanh·Thực dụng·Hiệu quả·Tập trung·Mục tiêu',
      'Cepat·Praktis·Efisien·Fokus·Berorientasi tujuan'
    ),
    favoritePlaces: M(
      '혼밥 전문 식당·편의점·회사 구내식당',
      'Solo-dining specialty restaurants·Convenience stores·Company cafeteria',
      '一人飯専門店·コンビニ·社内食堂',
      '独食专门餐厅·便利店·公司食堂',
      '獨食專門餐廳·便利商店·公司食堂',
      'Quán chuyên ăn một mình·Cửa hàng tiện lợi·Canteen công ty',
      'Restoran khusus makan sendiri·Minimarket·Kantin perusahaan'
    ),
    favoriteMenus: M(
      '빠르게 나오는 한 그릇 메뉴·정식류·도시락',
      'Quick one-bowl menus·Set meals·Lunch boxes',
      '早く出る一皿メニュー·定食類·お弁当',
      '快速上菜的一碗料理·套餐类·便当',
      '快速上菜的一碗料理·套餐類·便當',
      'Món một bát ra nhanh·Cơm phần·Hộp cơm',
      'Menu semangkuk cepat·Makan siang set·Kotak bekal'
    ),
    personalityTrait: M(
      '시간을 소중히 여기는 사람. 목표 지향적이고 실용주의적. 필요한 것에만 집중하는 편',
      'Values time. Goal-oriented and practical. Tends to focus only on what is necessary.',
      '時間を大切にする人。目標志向で実用的。必要なことにだけ集中するタイプ',
      '珍惜时间的人。目标导向且务实。只专注于必要的事。',
      '珍惜時間的人。目標導向且務實。只專注於必要的事。',
      'Coi trọng thời gian. Hướng mục tiêu và thực dụng. Chỉ tập trung vào điều cần thiết.',
      'Menghargai waktu. Berorientasi tujuan dan praktis. Cenderung fokus hanya pada yang perlu.'
    ),
    hiddenSide: M(
      '효율적으로 보이지만 사실 좋아하는 음식 앞에서는 속도가 달라짐. 단골 메뉴에 대한 애착이 강함',
      'Looks efficient, but speed changes in front of favorite food. Strong attachment to regular menu items.',
      '効率的に見えるが、好きな料理の前では速度が変わる。常連メニューへの愛着が強い',
      '看起来高效，但在喜欢的食物前速度会变。对常点菜单很有感情。',
      '看起來高效，但在喜歡的食物前速度會變。對常點菜單很有感情。',
      'Trông hiệu quả nhưng trước món yêu thích thì tốc độ thay đổi. Gắn bó mạnh với món quen.',
      'Terlihat efisien, tapi kecepatan berubah di depan makanan favorit. Sangat melekat pada menu langganan.'
    ),
    upgradeTip: M(
      '주 1회는 속도를 늦추고 천천히 먹는 날을 만들어보세요. 음식의 맛을 더 깊이 느낄 수 있고 소화에도 좋습니다',
      'Once a week, slow down and eat leisurely. You can taste food more deeply and it is better for digestion.',
      '週1回は速度を落としてゆっくり食べる日を作ってみてください。料理の味をより深く感じられ、消化にも良いです',
      '每周一次放慢速度慢慢吃。能更深度感受食物味道，也有益消化。',
      '每週一次放慢速度慢慢吃。能更深度感受食物味道，也有益消化。',
      'Mỗi tuần một lần hãy ăn chậm lại. Bạn sẽ cảm nhận hương vị sâu hơn và tốt cho tiêu hóa.',
      'Seminggu sekali perlambat dan makan dengan santai. Rasa makanan terasa lebih dalam dan baik untuk pencernaan.'
    ),
    oneLineReview: M(
      '밥 먹는 시간도 아끼는 사람. 그래서 하루가 남들보다 길다',
      'Someone who even saves meal time. That is why their day feels longer than others.',
      '食事の時間も惜しむ人。だから一日が他人より長く感じる',
      '连吃饭时间都要省的人。所以一天比别人更长。',
      '連吃飯時間都要省的人。所以一天比別人更長。',
      'Người tiết cả thời gian ăn. Vì vậy một ngày dài hơn người khác.',
      'Orang yang bahkan menghemat waktu makan. Makanya harinya terasa lebih panjang.'
    ),
    shareSnippet: M(
      '내 혼밥 유형은 효율 추구 전략 혼밥러 ⚡ 밥은 연료. 빠르게 끝내고 다음으로. 혼밥 5분 컷 경험자 손 → 너는 어떤 혼밥 유형이야?',
      'My solo dining type is Efficiency-Focused Strategic Solo Diner ⚡ Meals are fuel. Finish fast and move on. Raise your hand if you have done a 5-minute solo meal → What is your solo dining type?',
      '私の一人飯タイプは効率追求型戦略的ひとり飯族 ⚡ ご飯は燃料。さっと終わらせて次へ。一人飯5分カット経験者は手を → あなたはどんな一人飯タイプ？',
      '我的独食类型是效率追求战略型独食客 ⚡ 饭是燃料。快速结束然后继续。有5分钟独食经验的人举手 → 你是什么独食类型？',
      '我的獨食類型是效率追求戰略型獨食客 ⚡ 飯是燃料。快速結束然後繼續。有5分鐘獨食經驗的人舉手 → 你是什麼獨食類型？',
      'Kiểu ăn một mình của tôi là người chiến lược theo đuổi hiệu suất ⚡ Cơm là nhiên liệu. Ăn nhanh rồi đi tiếp. Ai từng ăn một mình 5 phút giơ tay → Bạn thuộc kiểu ăn một mình nào?',
      'Tipe makan sendiri saya adalah pejalan strategis pengejar efisiensi ⚡ Makanan adalah bahan bakar. Selesai cepat lalu lanjut. Angkat tangan jika pernah makan sendiri 5 menit → Kamu tipe makan sendiri apa?'
    ),
  },
  {
    type: 'Type2',
    emoji: '📱',
    title: M(
      '콘텐츠와 함께하는, 미디어 동반 혼밥러',
      'Media Companion Solo Diner Who Dines with Content',
      'コンテンツと一緒、メディア同伴型ひとり飯族',
      '与内容相伴的媒体陪伴型独食客',
      '與內容相伴的媒體陪伴型獨食客',
      'Người ăn một mình đồng hành cùng nội dung media',
      'Pejalan makan sendiri pendamping media yang makan bersama konten'
    ),
    shortDescription: M(
      '"당신의 혼밥에는 항상 콘텐츠 파트너가 있습니다."',
      '"Your solo meals always come with a content partner."',
      '「あなたの一人飯にはいつもコンテンツパートナーがいます。」',
      '「你的独食总有一个内容伙伴。」',
      '「你的獨食總有一個內容夥伴。」',
      '"Bữa ăn một mình của bạn luôn có bạn đồng hành nội dung."',
      '"Makan sendiri Anda selalu punya partner konten."'
    ),
    description: M(
      '밥 먹으면서 유튜브·넷플릭스·팟캐스트 중 하나는 틀어야 식사가 완성됩니다. 콘텐츠 없이 혼자 조용히 먹으면 어색하거나 허전한 느낌이 드는 타입입니다. 혼밥이 단순히 먹는 행위가 아니라 콘텐츠를 즐기는 시간으로 확장된 현대적 혼밥 방식입니다.',
      'You need YouTube, Netflix, or a podcast playing while you eat for the meal to feel complete. Eating quietly alone without content feels awkward or empty. For you, solo dining is not just eating—it is modern dining expanded into content time.',
      '食事中にYouTube・Netflix・ポッドキャストのどれかを流さないと食事が完成しません。コンテンツなしで一人静かに食べると居心地が悪かったり物足りないタイプです。一人食が単なる食事ではなく、コンテンツを楽しむ時間へ広がった現代的な一人飯スタイルです。',
      '吃饭时必须开着YouTube、Netflix或播客之一，用餐才算完整。没有内容、独自安静吃饭会觉得尴尬或空虚。独食不只是吃饭，而是延伸到享受内容的现代独食方式。',
      '吃飯時必須開著YouTube、Netflix或播客之一，用餐才算完整。沒有內容、獨自安靜吃飯會覺得尷尬或空虛。獨食不只是吃飯，而是延伸到享受內容的現代獨食方式。',
      'Bạn cần bật YouTube, Netflix hoặc podcast khi ăn thì bữa ăn mới trọn vẹn. Ăn một mình im lặng không có nội dung sẽ thấy gượng hoặc trống trải. Ăn một mình với bạn không chỉ là ăn mà là thời gian thưởng thức nội dung hiện đại.',
      'Anda perlu YouTube, Netflix, atau podcast saat makan agar makan terasa lengkap. Makan sendiri tanpa konten terasa canggung atau hampa. Makan sendiri bukan hanya makan, melainkan waktu menikmati konten yang modern.'
    ),
    soloDiningType: M(
      '미디어 동반 혼밥러 📱',
      'Media Companion Solo Diner 📱',
      'メディア同伴型ひとり飯族 📱',
      '媒体陪伴型独食客 📱',
      '媒體陪伴型獨食客 📱',
      'Người ăn một mình đồng hành media 📱',
      'Pejalan makan sendiri pendamping media 📱'
    ),
    soloDiningKeywords: M(
      '콘텐츠·즐거움·동반자·이어폰·멀티태스킹',
      'Content·Fun·Companion·Earphones·Multitasking',
      'コンテンツ·楽しさ·同伴·イヤホン·マルチタスク',
      '内容·乐趣·陪伴·耳机·多任务',
      '內容·樂趣·陪伴·耳機·多工',
      'Nội dung·Vui·Đồng hành·Tai nghe·Đa nhiệm',
      'Konten·Seru·Pendamping·Earphone·Multitasking'
    ),
    favoritePlaces: M(
      '집·편의점·혼자 조용히 볼 수 있는 공간',
      'Home·Convenience stores·A space where you can watch quietly alone',
      '自宅·コンビニ·一人で静かに見られる空間',
      '家里·便利店·能独自安静观看的空间',
      '家裡·便利商店·能獨自安靜觀看的空間',
      'Nhà·Cửa hàng tiện lợi·Không gian xem một mình yên tĩnh',
      'Rumah·Minimarket·Ruang bisa menonton sendiri dengan tenang'
    ),
    favoriteMenus: M(
      '먹으면서 보기 편한 메뉴. 젓가락질 하면서도 화면을 볼 수 있는 것',
      'Easy-to-eat menus while watching. Something you can eat with chopsticks while still seeing the screen.',
      '食べながら見やすいメニュー。箸を使いながらも画面が見えるもの',
      '边看不耽误的菜单。用筷子吃也能看屏幕的食物。',
      '邊看不耽誤的菜單。用筷子吃也能看螢幕的食物。',
      'Món dễ ăn vừa xem. Có thể dùng đũa mà vẫn nhìn màn hình.',
      'Menu mudah dimakan sambil menonton. Bisa makan dengan sumpit sambil lihat layar.'
    ),
    personalityTrait: M(
      '콘텐츠 소비를 즐기는 미디어 친화적 성향. 혼자이지만 외롭지 않게 시간을 채우는 능력이 있음',
      'Media-friendly and enjoys consuming content. Has the ability to fill time without feeling lonely even when alone.',
      'コンテンツ消費を楽しむメディア親和型。一人でも寂しくないように時間を埋める能力がある',
      '享受内容消费的媒体友好型。虽独处但不孤独，善于填满时间。',
      '享受內容消費的媒體友好型。雖獨處但不孤獨，善於填滿時間。',
      'Thân thiện media, thích tiêu thụ nội dung. Biết lấp đầy thời gian mà không cô đơn dù ở một mình.',
      'Ramah media dan menikmati konsumsi konten. Bisa mengisi waktu tanpa merasa kesepian meski sendirian.'
    ),
    hiddenSide: M(
      '사실 콘텐츠보다 음식에 더 집중하고 싶은 날이 있지만 습관적으로 폰을 켜는 패턴이 있음',
      'Some days you want to focus on food more than content, but you habitually turn on your phone anyway.',
      '実はコンテンツより料理に集中したい日もあるが、習慣的にスマホをつけてしまうパターンがある',
      '其实有时更想专注食物而非内容，但习惯性地还是会打开手机。',
      '其實有時更想專注食物而非內容，但習慣性地還是會打開手機。',
      'Đôi khi muốn tập trung vào món ăn hơn nội dung nhưng vẫn quen bật điện thoại.',
      'Kadang ingin fokus pada makanan lebih dari konten, tapi tetap kebiasaan nyalakan HP.'
    ),
    upgradeTip: M(
      '월 1회는 폰 없이 혼밥을 시도해보세요. 음식의 맛이 훨씬 선명하게 느껴지고 생각이 정리되는 경험을 할 수 있습니다',
      'Try dining alone without your phone once a month. You may find the taste much clearer and your thoughts more organized.',
      '月1回はスマホなしで一人飯を試してみてください。料理の味がはるかにはっきり感じられ、思考が整理される体験ができます',
      '每月尝试一次不带手机独食。能更清晰地感受食物味道，整理思绪。',
      '每月嘗試一次不帶手機獨食。能更清晰地感受食物味道，整理思緒。',
      'Thử ăn một mình không điện thoại mỗi tháng một lần. Hương vị rõ hơn và suy nghĩ được sắp xếp.',
      'Coba makan sendiri tanpa HP sebulan sekali. Rasa makanan terasa jauh lebih jelas dan pikiran lebih teratur.'
    ),
    oneLineReview: M(
      '혼밥이지만 외롭지 않다. 이어폰이 있으니까',
      'Solo dining, but not lonely. Because I have earphones.',
      '一人飯だけど寂しくない。イヤホンがあるから',
      '独食但不孤独。因为有耳机。',
      '獨食但不孤獨。因為有耳機。',
      'Ăn một mình nhưng không cô đơn. Vì có tai nghe.',
      'Makan sendiri tapi tidak kesepian. Karena ada earphone.'
    ),
    shareSnippet: M(
      '내 혼밥 유형은 미디어 동반 혼밥러 📱 이어폰 없이 혼밥은 가능은 한데 허전함... 폰 필수인 혼밥러들 공감 → 너는 어떤 혼밥 유형이야?',
      'My solo dining type is Media Companion Solo Diner 📱 Solo dining without earphones is possible but feels empty... Phone-required solo diners relate → What is your solo dining type?',
      '私の一人飯タイプはメディア同伴型ひとり飯族 📱 イヤホンなしの一人飯も可能だけど物足りない... スマホ必須の一人飯族共感 → あなたはどんな一人飯タイプ？',
      '我的独食类型是媒体陪伴型独食客 📱 没耳机也能独食但会空虚... 手机必备的独食客共鸣 → 你是什么独食类型？',
      '我的獨食類型是媒體陪伴型獨食客 📱 沒耳機也能獨食但會空虛... 手機必備的獨食客共鳴 → 你是什麼獨食類型？',
      'Kiểu ăn một mình của tôi là người đồng hành media 📱 Ăn một mình không tai nghe được nhưng thiếu vắng... Ai bắt buộc có điện thoại cùng cảm → Bạn thuộc kiểu nào?',
      'Tipe makan sendiri saya adalah pendamping media 📱 Makan sendiri tanpa earphone bisa tapi terasa hampa... Yang wajib HP relate → Kamu tipe makan sendiri apa?'
    ),
  },
  {
    type: 'Type3',
    emoji: '🌿',
    title: M(
      '혼밥이 나만의 시간인, 사색 충전 혼밥러',
      'Reflective Recharge Solo Diner for Whom Dining Alone Is Me Time',
      '一人飯が自分だけの時間、思索充電型ひとり飯族',
      '独食是专属时光的内省充电型独食客',
      '獨食是專屬時光的內省充電型獨食客',
      'Người ăn một mình nạp năng lượng qua suy ngẫm, coi ăn một mình là thời gian riêng',
      'Pejalan makan sendiri isi ulang reflektif yang menjadikan makan sendiri sebagai waktu pribadi'
    ),
    shortDescription: M(
      '"당신에게 혼밥은 단순히 먹는 것이 아닌 하루 중 유일한 나만의 시간입니다."',
      '"For you, solo dining is not just eating—it is your only me time of the day."',
      '「あなたにとって一人飯は単なる食事ではなく、一日の中で唯一の自分だけの時間です。」',
      '「对你来说，独食不只是吃饭，而是一天中唯一的专属时光。」',
      '「對你來說，獨食不只是吃飯，而是一天中唯一的專屬時光。」',
      '"Với bạn, ăn một mình không chỉ là ăn mà là khoảnh khắc riêng duy nhất trong ngày."',
      '"Bagi Anda, makan sendiri bukan sekadar makan—ini satu-satunya waktu pribadi sepanjang hari."'
    ),
    description: M(
      '창가 자리를 선호하고, 천천히 음식을 음미하고, 오늘 하루를 조용히 정리하는 시간으로 혼밥을 활용합니다. 책이나 잡지를 펼쳐두기도 하고, 그냥 바깥 풍경을 바라보기도 합니다. 혼밥이 충전의 시간이고 그 시간이 끝나면 다시 세상으로 나갈 에너지가 생깁니다.',
      'You prefer window seats, savor food slowly, and use solo dining to quietly reflect on your day. You may open a book or magazine, or simply gaze outside. Solo dining is recharge time, and when it ends you regain energy to re-enter the world.',
      '窓際を好み、料理をゆっくり味わい、今日一日を静かに整理する時間として一人飯を活用します。本や雑誌を広げたり、ただ外の景色を眺めたりもします。一人飯は充電の時間であり、その時間が終わると再び世界へ出るエネルギーが生まれます。',
      '偏好窗边座位，慢慢品味食物，把独食当作安静整理一天的时间。也会翻开书或杂志，或只是看窗外风景。独食是充电时光，结束后重新获得回到世界的能量。',
      '偏好窗邊座位，慢慢品味食物，把獨食當作安靜整理一天的時間。也會翻開書或雜誌，或只是看窗外風景。獨食是充電時光，結束後重新獲得回到世界的能量。',
      'Bạn thích ghế cửa sổ, thưởng thức chậm và dùng ăn một mình để lặng lẽ nhìn lại ngày. Có thể mở sách/tạp chí hoặc ngắm cảnh ngoài cửa. Ăn một mình là thời gian nạp năng lượng để trở lại cuộc sống.',
      'Anda suka kursi jendela, menikmati makanan perlahan, dan memakai makan sendiri untuk merenungkan hari. Bisa buka buku/majalah atau hanya melihat pemandangan luar. Makan sendiri adalah waktu recharge sebelum kembali ke dunia.'
    ),
    soloDiningType: M(
      '사색 충전 혼밥러 🌿',
      'Reflective Recharge Solo Diner 🌿',
      '思索充電型ひとり飯族 🌿',
      '内省充电型独食客 🌿',
      '內省充電型獨食客 🌿',
      'Người ăn một mình nạp năng lượng qua suy ngẫm 🌿',
      'Pejalan makan sendiri isi ulang reflektif 🌿'
    ),
    soloDiningKeywords: M(
      '충전·사색·여유·나만의 시간·음미',
      'Recharge·Reflection·Leisure·Me time·Savoring',
      '充電·思索·余裕·自分だけの時間·味わい',
      '充电·内省·从容·专属时光·品味',
      '充電·內省·從容·專屬時光·品味',
      'Nạp năng lượng·Suy ngẫm·Thong thả·Thời gian riêng·Thưởng thức',
      'Recharge·Refleksi·Santai·Waktu pribadi·Menikmati'
    ),
    favoritePlaces: M(
      '창가 자리가 있는 카페·분위기 있는 1인석 식당·조용한 공간',
      'Cafes with window seats·Atmospheric single-seat restaurants·Quiet spaces',
      '窓際席のあるカフェ·雰囲気のある一人席レストラン·静かな空間',
      '有窗边座的咖啡厅·有氛围的单人座餐厅·安静空间',
      '有窗邊座的咖啡廳·有氛圍的單人座餐廳·安靜空間',
      'Quán cafe có ghế cửa sổ·Nhà hàng ghế đơn có không khí·Không gian yên tĩnh',
      'Kafe dengan kursi jendela·Restoran kursi tunggal beratmosfer·Ruang tenang'
    ),
    favoriteMenus: M(
      '천천히 즐길 수 있는 코스형 메뉴 또는 좋아하는 단골 메뉴',
      'Course menus you can enjoy slowly or favorite regular dishes',
      'ゆっくり楽しめるコースメニューまたは好きな常連メニュー',
      '可以慢慢享用的套餐或喜欢的常点菜单',
      '可以慢慢享用的套餐或喜歡的常點菜單',
      'Set menu thưởng thức chậm hoặc món quen yêu thích',
      'Menu course yang dinikmati perlahan atau menu langganan favorit'
    ),
    personalityTrait: M(
      '내향적이지만 사람을 싫어하는 게 아닌, 혼자만의 시간으로 에너지를 충전하는 타입. 깊이 있는 사고를 즐기는 사람',
      'Introverted but not antisocial—you recharge through alone time and enjoy deep thinking.',
      '内向的だが人が嫌いなわけではなく、一人の時間でエネルギーを充電するタイプ。深い思考を楽しむ人',
      '内向但并非讨厌人，通过独处充电。享受深度思考的人。',
      '內向但並非討厭人，透過獨處充電。享受深度思考的人。',
      'Hướng nội nhưng không ghét người, nạp năng lượng qua thời gian riêng. Thích suy nghĩ sâu.',
      'Introvert tapi bukan anti-sosial—mengisi energi lewat waktu sendiri dan suka berpikir mendalam.'
    ),
    hiddenSide: M(
      '혼자 밥 먹는 시간이 가장 정직하게 자기 자신과 마주하는 시간임을 알고 있음',
      'Knows that eating alone is the most honest time to face yourself.',
      '一人で食べる時間が最も正直に自分と向き合う時間だと分かっている',
      '知道独自吃饭是最诚实地面对自己的时刻。',
      '知道獨自吃飯是最誠實地面對自己的時刻。',
      'Biết rằng ăn một mình là lúc đối diện bản thân chân thật nhất.',
      'Tahu bahwa makan sendiri adalah waktu paling jujur untuk menghadap diri sendiri.'
    ),
    upgradeTip: M(
      '혼밥 후 5분 저널링을 추가해보세요. 식사 중 떠오른 생각을 기록하면 생각의 질이 높아집니다',
      'Add 5 minutes of journaling after solo dining. Recording thoughts that arise during the meal improves their quality.',
      '一人飯後に5分のジャーナリングを追加してみてください。食事中に浮かんだ考えを記録すると思考の質が高まります',
      '独食后加5分钟日记。记录用餐时浮现的想法，提升思考质量。',
      '獨食後加5分鐘日記。記錄用餐時浮現的想法，提升思考品質。',
      'Thêm 5 phút viết nhật ký sau khi ăn một mình. Ghi lại suy nghĩ trong bữa ăn giúp nâng cao chất lượng tư duy.',
      'Tambahkan journaling 5 menit setelah makan sendiri. Mencatat pikiran saat makan meningkatkan kualitas pemikiran.'
    ),
    oneLineReview: M(
      '혼밥은 도망가는 게 아니라 돌아오는 시간이다',
      'Solo dining is not running away—it is time to come back to yourself.',
      '一人飯は逃げる時間ではなく、戻ってくる時間だ',
      '独食不是逃避，而是回归自己的时光。',
      '獨食不是逃避，而是回歸自己的時光。',
      'Ăn một mình không phải trốn tránh mà là thời gian quay về với bản thân.',
      'Makan sendiri bukan lari, melainkan waktu untuk kembali ke diri sendiri.'
    ),
    shareSnippet: M(
      '내 혼밥 유형은 사색 충전 혼밥러 🌿 혼밥이 충전 시간이라는 거 완전 공감... 창가 자리 필수인 사람들 → 너는 어떤 혼밥 유형이야?',
      'My solo dining type is Reflective Recharge Solo Diner 🌿 Totally relate that solo dining is recharge time... Window seat required people → What is your solo dining type?',
      '私の一人飯タイプは思索充電型ひとり飯族 🌿 一人飯が充電時間って完全共感... 窓際席必須の人たち → あなたはどんな一人飯タイプ？',
      '我的独食类型是内省充电型独食客 🌿 完全共鸣独食是充电时光... 窗边座必备的人 → 你是什么独食类型？',
      '我的獨食類型是內省充電型獨食客 🌿 完全共鳴獨食是充電時光... 窗邊座必備的人 → 你是什麼獨食類型？',
      'Kiểu ăn một mình của tôi là nạp năng lượng qua suy ngẫm 🌿 Ăn một mình là thời gian sạc pin, đồng cảm hoàn toàn... Ai bắt buộc ghế cửa sổ → Bạn thuộc kiểu nào?',
      'Tipe makan sendiri saya adalah isi ulang reflektif 🌿 Makan sendiri = waktu recharge, relate banget... Yang wajib kursi jendela → Kamu tipe makan sendiri apa?'
    ),
  },
  {
    type: 'Type4',
    emoji: '🍽️',
    title: M(
      '맛집 탐험이 목적인, 미식 기록 혼밥러',
      'Gourmet Record Solo Diner Who Explores Restaurants',
      '名店探検が目的、美食記録型ひとり飯族',
      '以探店为目的的美食记录型独食客',
      '以探店為目的的美食記錄型獨食客',
      'Người ăn một mình ghi chép ẩm thực, mục tiêu là khám phá quán ngon',
      'Pejalan makan sendiri pencatat gourmet yang mengeksplorasi restoran'
    ),
    shortDescription: M(
      '"당신에게 혼밥은 미식 탐험입니다. 아무도 기다리지 않아도 되는 자유로운 탐험가입니다."',
      '"For you, solo dining is a gourmet adventure. A free explorer who does not have to wait for anyone."',
      '「あなたにとって一人飯は美食探検です。誰も待たなくていい自由な探検家です。」',
      '「对你来说，独食是美食探险。不必等任何人的自由探险家。」',
      '「對你來說，獨食是美食探險。不必等任何人的自由探險家。」',
      '"Với bạn, ăn một mình là cuộc phiêu lưu ẩm thực. Nhà thám hiểm tự do không cần chờ ai."',
      '"Bagi Anda, makan sendiri adalah petualangan kuliner. Penjelajah bebas tanpa perlu menunggu siapa pun."'
    ),
    description: M(
      '함께 갈 사람 없어도 가고 싶은 맛집은 혼자 갑니다. 음식을 먹으면서 맛을 분석하고, 사진을 찍고, 리뷰를 남기는 것도 혼밥의 일부입니다. 새로운 음식과 공간을 발견하는 것이 혼밥의 가장 큰 즐거움인 타입입니다.',
      'You go alone to restaurants you want to visit even without company. Analyzing taste, taking photos, and leaving reviews are part of solo dining. Discovering new food and spaces is your greatest joy.',
      '一緒に行く人がなくても行きたい名店には一人で行きます。料理を食べながら味を分析し、写真を撮り、レビューを残すのも一人飯の一部です。新しい料理と空間を発見することが一人飯の最大の楽しみのタイプです。',
      '即使没有同伴也会独自去想去的餐厅。边吃不边分析味道、拍照、写评价也是独食的一部分。发现新食物和新空间是最大乐趣。',
      '即使沒有同伴也會獨自去想去的餐廳。邊吃不邊分析味道、拍照、寫評價也是獨食的一部分。發現新食物和新空間是最大樂趣。',
      'Dù không có ai đi cùng vẫn đến quán muốn thử. Phân tích hương vị, chụp ảnh, viết review cũng là một phần ăn một mình. Khám phá món và không gian mới là niềm vui lớn nhất.',
      'Meski tanpa teman tetap pergi ke restoran impian. Menganalisis rasa, foto, dan review juga bagian makan sendiri. Menemukan makanan dan tempat baru adalah kegembiraan terbesar.'
    ),
    soloDiningType: M(
      '미식 기록 혼밥러 🍽️',
      'Gourmet Record Solo Diner 🍽️',
      '美食記録型ひとり飯族 🍽️',
      '美食记录型独食客 🍽️',
      '美食記錄型獨食客 🍽️',
      'Người ăn một mình ghi chép ẩm thực 🍽️',
      'Pejalan makan sendiri pencatat gourmet 🍽️'
    ),
    soloDiningKeywords: M(
      '맛집 탐험·기록·발견·미식·호기심',
      'Restaurant exploration·Recording·Discovery·Gourmet·Curiosity',
      '名店探検·記録·発見·美食·好奇心',
      '探店·记录·发现·美食·好奇心',
      '探店·記錄·發現·美食·好奇心',
      'Khám phá quán·Ghi chép·Khám phá·Ẩm thực·Tò mò',
      'Eksplorasi restoran·Pencatatan·Penemuan·Gourmet·Rasa ingin tahu'
    ),
    favoritePlaces: M(
      '새로 오픈한 맛집·SNS에서 발견한 음식점·숨겨진 맛집',
      'Newly opened restaurants·Places found on SNS·Hidden gems',
      '新規オープンの名店·SNSで見つけた飲食店·隠れた名店',
      '新开的餐厅·社交媒体发现的店·隐藏好店',
      '新開的餐廳·社群媒體發現的店·隱藏好店',
      'Quán mới mở·Quán tìm trên mạng xã hội·Quán ẩn',
      'Restoran baru buka·Tempat dari SNS·Hidden gem'
    ),
    favoriteMenus: M(
      '새로운 메뉴·한 번도 안 먹어본 음식·화제의 메뉴',
      'New menus·Food never tried before·Trending dishes',
      '新しいメニュー·一度も食べたことのない料理·話題のメニュー',
      '新菜单·从未吃过的食物·热门菜品',
      '新菜單·從未吃過的食物·熱門菜品',
      'Menu mới·Món chưa từng ăn·Món đang hot',
      'Menu baru·Makanan belum pernah dicoba·Menu viral'
    ),
    personalityTrait: M(
      '호기심이 많고 새로운 경험을 즐기는 탐험가 기질. 음식에 대한 진지한 관심과 심미안을 가진 사람',
      'Curious explorer who enjoys new experiences. Has serious interest in food and a strong aesthetic sense.',
      '好奇心が強く新しい体験を楽しむ探検家気質。料理への真剣な関心と審美眼を持つ人',
      '好奇心强、享受新体验的探险家气质。对食物有认真关注和审美眼光。',
      '好奇心強、享受新體驗的探險家氣質。對食物有認真關注和審美眼光。',
      'Tò mò, thích trải nghiệm mới như nhà thám hiểm. Quan tâm nghiêm túc đến ẩm thực và có gu thẩm mỹ.',
      'Penasaran dan suka pengalaman baru seperti penjelajah. Minat serius pada makanan dan selera estetika.'
    ),
    hiddenSide: M(
      '맛없는 음식을 먹었을 때의 실망감이 크고, 맛있는 음식을 발견했을 때의 기쁨도 유독 큼',
      'Great disappointment when food is bad, and especially great joy when you find something delicious.',
      '不味い料理を食べたときの失望が大きく、美味しい料理を見つけたときの喜びも特に大きい',
      '吃到难吃的会非常失望，发现好吃的也特别开心。',
      '吃到難吃的會非常失望，發現好吃的也特別開心。',
      'Thất vọng lớn khi món dở, vui đặc biệt khi tìm được món ngon.',
      'Kecewa besar saat makanan tidak enak, senang luar biasa saat menemukan yang lezat.'
    ),
    upgradeTip: M(
      '먹은 음식을 간단하게 기록해두세요. 나만의 맛집 지도가 만들어지고 나중에 누군가에게 추천할 때 최고의 가이드가 됩니다',
      'Keep simple records of what you eat. You will build your own restaurant map and become the best guide when recommending to others.',
      '食べた料理を簡単に記録しておきましょう。自分だけの名店マップができ、後で誰かに勧めるとき最高のガイドになります',
      '简单记录吃过的食物。会做出自己的美食地图，日后推荐时成为最佳向导。',
      '簡單記錄吃過的食物。會做出自己的美食地圖，日後推薦時成為最佳嚮導。',
      'Ghi chép ngắn gọn món đã ăn. Bạn sẽ có bản đồ quán riêng và trở thành hướng dẫn viên tuyệt vời khi giới thiệu.',
      'Catat makanan yang dimakan secara sederhana. Peta restoran pribadi terbentuk dan jadi panduan terbaik saat merekomendasikan.'
    ),
    oneLineReview: M(
      '혼자여서 더 자유롭게 탐험할 수 있다',
      'Being alone lets me explore more freely.',
      '一人だからこそより自由に探検できる',
      '正因为独自才能更自由地探险。',
      '正因為獨自才能更自由地探險。',
      'Vì một mình nên khám phá tự do hơn.',
      'Karena sendirian, eksplorasi terasa lebih bebas.'
    ),
    shareSnippet: M(
      '내 혼밥 유형은 미식 기록 혼밥러 🍽️ 혼자여도 맛집 탐험 다니는 유형... 혼밥 맛집 리스트 있는 사람들 손 ✋ → 너는 어떤 혼밥 유형이야?',
      'My solo dining type is Gourmet Record Solo Diner 🍽️ The type who explores restaurants even alone... Raise your hand if you have a solo dining restaurant list ✋ → What is your solo dining type?',
      '私の一人飯タイプは美食記録型ひとり飯族 🍽️ 一人でも名店探検するタイプ... 一人飯名店リスト持ってる人は手を ✋ → あなたはどんな一人飯タイプ？',
      '我的独食类型是美食记录型独食客 🍽️ 独自也探店的人... 有独食餐厅清单的人举手 ✋ → 你是什么独食类型？',
      '我的獨食類型是美食記錄型獨食客 🍽️ 獨自也探店的人... 有獨食餐廳清單的人舉手 ✋ → 你是什麼獨食類型？',
      'Kiểu ăn một mình của tôi là ghi chép ẩm thực 🍽️ Vẫn đi khám phá quán dù một mình... Ai có list quán ăn một mình giơ tay ✋ → Bạn thuộc kiểu nào?',
      'Tipe makan sendiri saya adalah pencatat gourmet 🍽️ Tetap jelajah restoran meski sendirian... Yang punya list restoran makan sendiri angkat tangan ✋ → Kamu tipe makan sendiri apa?'
    ),
  },
  {
    type: 'Type5',
    emoji: '📸',
    title: M(
      '혼밥도 감성 있게, 인스타 감성 혼밥러',
      'Instagram Aesthetic Solo Diner Who Dines with Style',
      '一人飯も感性豊かに、インスタ感性型ひとり飯族',
      '独食也要有情调，Instagram氛围型独食客',
      '獨食也要有情調，Instagram氛圍型獨食客',
      'Người ăn một mình phong cách Instagram, ăn một mình cũng đầy cảm xúc',
      'Pejalan makan sendiri estetika Instagram yang makan sendiri pun penuh vibes'
    ),
    shortDescription: M(
      '"당신에게 혼밥은 콘텐츠입니다. 음식도 공간도 분위기도 모두 나의 이야기가 됩니다."',
      '"For you, solo dining is content. Food, space, and atmosphere all become your story."',
      '「あなたにとって一人飯はコンテンツです。料理も空間も雰囲気もすべて自分の物語になります。」',
      '「对你来说，独食就是内容。食物、空间和氛围都成为你的故事。」',
      '「對你來說，獨食就是內容。食物、空間和氛圍都成為你的故事。」',
      '"Với bạn, ăn một mình là nội dung. Món ăn, không gian và bầu không khí đều thành câu chuyện của bạn."',
      '"Bagi Anda, makan sendiri adalah konten. Makanan, ruang, dan suasana semua jadi cerita Anda."'
    ),
    description: M(
      '조명이 예쁜 자리를 고르고, 음식이 나오면 사진부터 찍고, 먹고 나서 리뷰나 인스타에 올립니다. 혼자 먹지만 그 순간을 기록하고 공유하는 것이 혼밥의 완성이라고 느끼는 타입입니다. 혼밥이 개인 미디어 콘텐츠의 소재가 됩니다.',
      'You pick seats with pretty lighting, photograph food first when it arrives, and post reviews or on Instagram afterward. Even alone, recording and sharing the moment completes solo dining. Solo meals become personal media content.',
      '照明がきれいな席を選び、料理が出たらまず写真を撮り、食後にレビューやインスタに投稿します。一人で食べてもその瞬間を記録し共有することが一人飯の完成だと感じるタイプです。一人飯が個人メディアコンテンツの素材になります。',
      '选灯光美的座位，菜上来先拍照，吃完发评价或Instagram。虽独自用餐，但记录并分享瞬间才算完整。独食成为个人媒体内容素材。',
      '選燈光美的座位，菜上來先拍照，吃完發評價或Instagram。雖獨自用餐，但記錄並分享瞬間才算完整。獨食成為個人媒體內容素材。',
      'Chọn chỗ có ánh sáng đẹp, món ra chụp trước, xong đăng review hoặc Instagram. Dù ăn một mình, ghi lại và chia sẻ khoảnh khắc mới trọn vẹn. Ăn một mình thành nguồn nội dung cá nhân.',
      'Pilih kursi dengan pencahayaan cantik, foto dulu saat makanan datang, lalu posting review atau Instagram. Meski sendirian, merekam dan berbagi momen melengkapi makan sendiri. Makan sendiri jadi bahan konten media pribadi.'
    ),
    soloDiningType: M(
      '인스타 감성 혼밥러 📸',
      'Instagram Aesthetic Solo Diner 📸',
      'インスタ感性型ひとり飯族 📸',
      'Instagram氛围型独食客 📸',
      'Instagram氛圍型獨食客 📸',
      'Người ăn một mình phong cách Instagram 📸',
      'Pejalan makan sendiri estetika Instagram 📸'
    ),
    soloDiningKeywords: M(
      '기록·공유·감성·사진·콘텐츠',
      'Recording·Sharing·Aesthetic·Photos·Content',
      '記録·共有·感性·写真·コンテンツ',
      '记录·分享·情调·照片·内容',
      '記錄·分享·情調·照片·內容',
      'Ghi chép·Chia sẻ·Cảm xúc·Ảnh·Nội dung',
      'Pencatatan·Berbagi·Estetika·Foto·Konten'
    ),
    favoritePlaces: M(
      '인테리어가 예쁜 식당·포토 스팟이 있는 카페·감성 맛집',
      'Restaurants with pretty interiors·Cafes with photo spots·Aesthetic eateries',
      'インテリアがきれいなレストラン·フォトスポットのあるカフェ·感性名店',
      '装修好看的餐厅·有拍照点的咖啡厅·氛围餐厅',
      '裝修好看的餐廳·有拍照點的咖啡廳·氛圍餐廳',
      'Nhà hàng decor đẹp·Cafe có góc chụp·Quán có vibe',
      'Restoran interior cantik·Kafe dengan spot foto·Restoran estetika'
    ),
    favoriteMenus: M(
      '플레이팅이 예쁜 메뉴·인스타그래머블한 음식·컬러풀한 메뉴',
      'Beautifully plated menus·Instagrammable food·Colorful dishes',
      '盛り付けがきれいなメニュー·インスタ映えする料理·カラフルなメニュー',
      '摆盘精美的菜单·适合Instagram的食物·色彩丰富的菜品',
      '擺盤精美的菜單·適合Instagram的食物·色彩豐富的菜品',
      'Món bày đẹp·Món Instagrammable·Món đầy màu sắc',
      'Menu plating cantik·Makanan Instagrammable·Menu penuh warna'
    ),
    personalityTrait: M(
      '심미안이 뛰어나고 일상을 콘텐츠로 만드는 능력이 있음. 나만의 이야기를 만들고 공유하는 것에서 즐거움을 느끼는 사람',
      'Strong aesthetic sense and ability to turn daily life into content. Finds joy in creating and sharing personal stories.',
      '審美眼に優れ、日常をコンテンツに変える能力がある。自分だけの物語を作り共有することに喜びを感じる人',
      '审美出色，能把日常变成内容。享受创造并分享自己的故事。',
      '審美出色，能把日常變成內容。享受創造並分享自己的故事。',
      'Gu thẩm mỹ tốt, biến đời thường thành nội dung. Thích tạo và chia sẻ câu chuyện riêng.',
      'Selera estetika kuat dan bisa mengubah keseharian jadi konten. Senang membuat dan berbagi cerita pribadi.'
    ),
    hiddenSide: M(
      '사진을 찍고 나서야 비로소 본격적으로 먹는 패턴. 사진이 잘 안 나오면 음식 맛도 조금 덜 맛있게 느껴지는 경향',
      'Tends to eat seriously only after taking photos. If photos do not turn out well, food may taste slightly less good.',
      '写真を撮ってから初めて本格的に食べるパターン。写真がうまく撮れないと料理の味も少し落ちる傾向',
      '习惯拍完照才真正开吃。照片拍不好，食物也会觉得没那么好吃。',
      '習慣拍完照才真正開吃。照片拍不好，食物也會覺得沒那麼好吃。',
      'Thường ăn thật sự sau khi chụp ảnh. Ảnh không đẹp thì món cũng kém ngon hơn.',
      'Baru makan serius setelah foto. Jika foto jelek, makanan terasa sedikit kurang enak.'
    ),
    upgradeTip: M(
      '가끔은 사진 없이 그 순간만 즐겨보세요. 카메라 없이 먹으면 맛이 다르게 느껴질 수 있습니다',
      'Sometimes enjoy the moment without photos. Eating without a camera can make the taste feel different.',
      'たまには写真なしでその瞬間だけを楽しんでみてください。カメラなしで食べると味が違って感じられることがあります',
      '偶尔不拍照，只享受当下。不用相机吃，味道可能不一样。',
      '偶爾不拍照，只享受當下。不用相機吃，味道可能不一樣。',
      'Thỉnh thoảng thưởng thức khoảnh khắc không cần ảnh. Ăn không camera có thể cảm nhận vị khác.',
      'Kadang nikmati momen tanpa foto. Makan tanpa kamera bisa terasa berbeda rasanya.'
    ),
    oneLineReview: M(
      '혼자 먹어도 예쁘게 기록할 수 있다면 그게 최고의 혼밥이다',
      'If you can record it beautifully even eating alone, that is the best solo dining.',
      '一人でもきれいに記録できれば、それが最高の一人飯だ',
      '即使独自用餐也能漂亮记录，那就是最好的独食。',
      '即使獨自用餐也能漂亮記錄，那就是最好的獨食。',
      'Ăn một mình mà vẫn ghi lại đẹp thì đó là ăn một mình tuyệt nhất.',
      'Kalau bisa direkam cantik meski makan sendiri, itulah makan sendiri terbaik.'
    ),
    shareSnippet: M(
      '내 혼밥 유형은 인스타 감성 혼밥러 📸 음식 나오면 사진 먼저 찍는 거 당연하지 않아? → 식기 전에 찍는 게 중요한 혼밥러 공감',
      'My solo dining type is Instagram Aesthetic Solo Diner 📸 Is it not obvious to take photos first when food arrives? → Solo diners who must shoot before touching utensils relate',
      '私の一人飯タイプはインスタ感性型ひとり飯族 📸 料理が出たらまず写真、当たり前でしょ？ → 食器に触る前に撮るのが大事な一人飯族共感',
      '我的独食类型是Instagram氛围型独食客 📸 菜上来先拍照不是理所当然吗？ → 动餐具前先拍的重要独食客共鸣',
      '我的獨食類型是Instagram氛圍型獨食客 📸 菜上來先拍照不是理所當然嗎？ → 動餐具前先拍的重要獨食客共鳴',
      'Kiểu ăn một mình của tôi là phong cách Instagram 📸 Món ra chụp trước là đương nhiên chứ? → Ai bắt buộc chụp trước khi chạm đũa cùng cảm',
      'Tipe makan sendiri saya estetika Instagram 📸 Makanan datang foto dulu, wajar kan? → Yang wajib foto sebelum sentuh alat makan relate'
    ),
  },
  {
    type: 'Type6',
    emoji: '👨‍🍳',
    title: M(
      '혼밥을 제대로 즐기는, 홈 셰프 고독 미식가형',
      'Home Chef Solitary Gourmet Who Truly Enjoys Solo Dining',
      '一人飯を本気で楽しむ、ホームシェフ孤独グルメ型',
      '真正享受独食的家庭主厨孤独美食家型',
      '真正享受獨食的家庭主廚孤獨美食家型',
      'Người thưởng thức ăn một mình đúng nghĩa, đầu bếp nhà - kiểu gourmet cô độc',
      'Gourmet soliter home chef yang benar-benar menikmati makan sendiri'
    ),
    shortDescription: M(
      '"당신은 혼자 먹을 때 오히려 더 잘 차려 먹습니다."',
      '"You actually eat better when you eat alone."',
      '「あなたは一人で食べるときの方が、むしろしっかり食べます。」',
      '「你独自用餐时反而吃得更好。」',
      '「你獨自用餐時反而吃得更好。」',
      '"Bạn thực sự ăn ngon hơn khi ăn một mình."',
      '"Anda justru makan lebih baik saat makan sendiri."'
    ),
    description: M(
      '여럿이 먹을 때 맞추느라 못 먹는 것들을 혼밥할 때 제대로 즐깁니다. 집에서 혼자 먹을 때 정성스럽게 차리거나, 혼자만의 취향을 완전히 반영한 메뉴를 선택합니다. 혼밥이 진짜 나를 위한 가장 순수한 식사입니다.',
      'You properly enjoy foods you skip when eating with others to accommodate them. At home alone you prepare carefully or choose menus that fully reflect your taste. Solo dining is the purest meal truly for you.',
      'みんなで食べるときに合わせて我慢していたものを、一人飯のときにきちんと楽しみます。家で一人のときは丁寧に用意したり、自分だけの好みを完全に反映したメニューを選びます。一人飯は本当に自分のための最も純粋な食事です。',
      '多人用餐时为迁就别人没吃到的，独食时会好好享受。独自在家会精心准备，或选完全反映个人口味的菜单。独食是真正为自己而最纯粹的用餐。',
      '多人用餐時為遷就別人沒吃到的，獨食時會好好享受。獨自在家會精心準備，或選完全反映個人口味的菜單。獨食是真正為自己而最純粹的用餐。',
      'Bạn tận hưởng đúng những gì phải nhường khi ăn đông người. Ở nhà một mình chuẩn bị cẩn thận hoặc chọn món đúng gu. Ăn một mình là bữa thuần khiết nhất dành cho bạn.',
      'Anda menikmati dengan benar makanan yang dilewati saat makan bersama demi menyesuaikan. Di rumah sendirian menyiapkan dengan teliti atau memilih menu sesuai selera penuh. Makan sendiri adalah makan paling murni untuk diri sendiri.'
    ),
    soloDiningType: M(
      '홈 셰프 고독 미식가형 👨‍🍳',
      'Home Chef Solitary Gourmet 👨‍🍳',
      'ホームシェフ孤独グルメ型 👨‍🍳',
      '家庭主厨孤独美食家型 👨‍🍳',
      '家庭主廚孤獨美食家型 👨‍🍳',
      'Đầu bếp nhà - kiểu gourmet cô độc 👨‍🍳',
      'Home chef gourmet soliter 👨‍🍳'
    ),
    soloDiningKeywords: M(
      '정성·취향·자유·나를 위한 요리·완전한 선택',
      'Care·Taste·Freedom·Cooking for myself·Complete choice',
      '丁寧·好み·自由·自分のための料理·完全な選択',
      '用心·口味·自由·为自己做的菜·完全的选择',
      '用心·口味·自由·為自己做的菜·完全的選擇',
      'Tâm huyết·Gu·Tự do·Nấu cho bản thân·Lựa chọn trọn vẹn',
      'Perhatian·Selera·Kebebasan·Masak untuk diri·Pilihan penuh'
    ),
    favoritePlaces: M(
      '집·좋아하는 식재료를 고를 수 있는 시장 또는 마트 이후 집',
      'Home·Market or grocery where you pick favorite ingredients, then home',
      '自宅·好きな食材を選べる市場やスーパーのあとの自宅',
      '家·能挑选喜欢食材的市场或超市之后回家',
      '家·能挑選喜歡食材的市場或超市之後回家',
      'Nhà·Chợ/siêu thị chọn nguyên liệu yêu thích rồi về nhà',
      'Rumah·Pasar/supermarket pilih bahan favorit lalu rumah'
    ),
    favoriteMenus: M(
      '좋아하는 것만 가득·직접 만든 음식·타협 없는 선택',
      'Filled with favorites·Homemade food·Choices without compromise',
      '好きなものだけ·手作り料理·妥協のない選択',
      '全是喜欢的·亲手做的食物·不妥协的选择',
      '全是喜歡的·親手做的食物·不妥協的選擇',
      'Toàn món yêu thích·Tự nấu·Lựa chọn không nhượng bộ',
      'Penuh favorit·Masakan buatan sendiri·Pilihan tanpa kompromi'
    ),
    personalityTrait: M(
      '자신의 취향이 뚜렷하고 자신을 소중하게 대하는 사람. 타인을 위해 맞추는 것도 잘 하지만 혼자일 때는 완전히 나를 우선하는 타입',
      'Clear taste and treats yourself with care. Good at accommodating others, but fully prioritizes yourself when alone.',
      '自分の好みがはっきりし、自分を大切にする人。他人に合わせるのも上手だが、一人のときは完全に自分優先のタイプ',
      '口味鲜明，珍惜自己。也善于迁就他人，但独处时完全以自己为先。',
      '口味鮮明，珍惜自己。也善於遷就他人，但獨處時完全以自己為先。',
      'Gu rõ ràng và coi trọng bản thân. Giỏi nhường bộ người khác nhưng một mình thì ưu tiên mình hoàn toàn.',
      'Selera jelas dan menghargai diri. Pandai menyesuaikan orang lain, tapi saat sendiri sepenuhnya prioritaskan diri.'
    ),
    hiddenSide: M(
      '혼밥에서 가장 큰 자유를 느끼는 타입. 여럿이 먹을 때 눈치 보지 않아도 되는 혼밥이 진심으로 좋음',
      'Feels the greatest freedom in solo dining. Truly loves not having to read the room when eating with others.',
      '一人飯で最も大きな自由を感じるタイプ。みんなで食べるときの気遣いが不要な一人飯が本当に好き',
      '在独食中感受最大自由的类型。真心喜欢不用看脸色的独食。',
      '在獨食中感受最大自由的類型。真心喜歡不用看臉色的獨食。',
      'Cảm nhận tự do lớn nhất khi ăn một mình. Thật sự thích không phải đọc không khí như ăn đông người.',
      'Merasa kebebasan terbesar saat makan sendiri. Benar-benar suka tanpa harus baca situasi seperti makan bersama.'
    ),
    upgradeTip: M(
      '지금처럼 계속해주세요. 자신을 위해 정성을 들이는 혼밥이 가장 건강한 자기 돌봄입니다',
      'Keep doing what you are doing. Solo dining with care for yourself is the healthiest self-care.',
      '今のまま続けてください。自分のために丁寧を尽くす一人飯が最も健康的なセルフケアです',
      '请继续保持。为自己用心的独食是最健康的自我关怀。',
      '請繼續保持。為自己用心的獨食是最健康的自我關懷。',
      'Hãy tiếp tục như vậy. Ăn một mình dành tâm huyết cho bản thân là tự chăm sóc lành mạnh nhất.',
      'Teruskan seperti sekarang. Makan sendiri dengan perhatian untuk diri adalah self-care paling sehat.'
    ),
    oneLineReview: M(
      '나를 위한 요리와 식사가 가장 정성스럽다',
      'Cooking and meals for myself are the most thoughtful.',
      '自分のための料理と食事が最も丁寧だ',
      '为自己做的菜和餐最用心。',
      '為自己做的菜和餐最用心。',
      'Món nấu và bữa ăn cho bản thân là chu đáo nhất.',
      'Masakan dan makan untuk diri sendiri paling penuh perhatian.'
    ),
    shareSnippet: M(
      '내 혼밥 유형은 홈 셰프 고독 미식가형 👨‍🍳 혼자 먹을 때 오히려 더 잘 차려 먹음... 혼밥이 진짜 자유인 사람들 → 너는 어떤 혼밥 유형이야?',
      'My solo dining type is Home Chef Solitary Gourmet 👨‍🍳 I actually eat better when alone... People who find true freedom in solo dining → What is your solo dining type?',
      '私の一人飯タイプはホームシェフ孤独グルメ型 👨‍🍳 一人の方がむしろしっかり食べる... 一人飯が本当の自由な人たち → あなたはどんな一人飯タイプ？',
      '我的独食类型是家庭主厨孤独美食家型 👨‍🍳 独自反而吃得更好... 觉得独食才是真正自由的人 → 你是什么独食类型？',
      '我的獨食類型是家庭主廚孤獨美食家型 👨‍🍳 獨自反而吃得更好... 覺得獨食才是真正自由的人 → 你是什麼獨食類型？',
      'Kiểu ăn một mình của tôi là home chef gourmet cô độc 👨‍🍳 Một mình lại ăn ngon hơn... Ai coi ăn một mình là tự do thật → Bạn thuộc kiểu nào?',
      'Tipe makan sendiri saya home chef gourmet soliter 👨‍🍳 Sendirian justru makan lebih enak... Yang anggap makan sendiri kebebasan sejati → Kamu tipe makan sendiri apa?'
    ),
  },
];
