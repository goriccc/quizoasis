/**
 * 나의 인스타 피드 성향 분석 — 12문항 이미지 4지선다, A=0 B=1 C=2 D=3, 총점 0~36 → 6유형
 *
 * Supabase `tests-thumbnails` 업로드 파일명 규칙:
 * - 썸네일: p3_test_insta_feed_persona_analysis.webp
 * - 답변 이미지(1:1): p3_test_insta_feed_persona_analysis_q{n}a~d.webp (12문항 × 4 = 48장)
 * - 신규 테스트는 .webp 사용. 기존 테스트 .jpg도 getThumbnailUrl()로 그대로 수용됨.
 */

function M(ko: string, en: string, ja: string, zhCN: string, zhTW: string, vi: string, id: string): Record<string, string> {
  return { ko, en, ja, 'zh-CN': zhCN, 'zh-TW': zhTW, vi, id };
}

const IMG = (q: number, opt: 'a' | 'b' | 'c' | 'd') =>
  `p3_test_insta_feed_persona_analysis_q${q}${opt}.webp`;

export interface Phase3InstaFeedPersonaAnalysisQuestion {
  id: number;
  question: Record<string, string>;
  options: { image: string; label: Record<string, string>; score: number }[];
}

export interface Phase3InstaFeedPersonaAnalysisResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  instaPersona: Record<string, string>;
  uploadPattern: Record<string, string>;
  mainContent: Record<string, string>;
  mostUsedFeature: Record<string, string>;
  instaGoal: Record<string, string>;
  strength: Record<string, string>;
  caution: Record<string, string>;
  influencerGrowthTip: Record<string, string>;
  personaComboPartnerType: string;
  personaCombo: Record<string, string>;
  oneLineReview: Record<string, string>;
  shareSnippet: Record<string, string>;
}

export function calculatePhase3InstaFeedPersonaAnalysisResult(scores: number[]): string {
  const total = scores.reduce((a, b) => a + (b ?? 0), 0);
  if (total <= 5) return 'Type1';
  if (total <= 11) return 'Type2';
  if (total <= 19) return 'Type3';
  if (total <= 27) return 'Type4';
  if (total <= 33) return 'Type5';
  return 'Type6';
}

export const phase3InstaFeedPersonaAnalysisQuestions: Phase3InstaFeedPersonaAnalysisQuestion[] = [
  {
    id: 1,
    question: M(
      '지금 내 인스타 피드를 한 단어로 표현한다면?',
      'If you had to describe your Instagram feed in one word?',
      '今の自分のインスタフィードを一言で表すなら？',
      '如果用一个词形容你现在的Instagram动态，会是什么？',
      '如果用一個詞形容你現在的Instagram動態，會是什麼？',
      'Nếu mô tả feed Instagram của bạn bằng một từ?',
      'Jika feed Instagram-mu harus dijelaskan dalam satu kata?'
    ),
    options: [
      { image: IMG(1, 'a'), label: M('완벽하게 톤이 통일된 큐레이션 피드', 'A perfectly tone-unified curated feed', '完璧にトーンが統一されたキュレーションフィード', '色调完美统一的策展式动态', '色調完美統一的策展式動態', 'Feed được tuyển chọn với tông màu thống nhất hoàn hảo', 'Feed kurasi dengan tone yang sempurna seragam'), score: 0 },
      { image: IMG(1, 'b'), label: M('일상의 순간들이 자연스럽게 담긴 피드', 'A feed with daily moments captured naturally', '日常の瞬間が自然に映し出されたフィード', '自然记录日常瞬间的动态', '自然記錄日常瞬間的動態', 'Feed ghi lại những khoảnh khắc đời thường một cách tự nhiên', 'Feed dengan momen sehari-hari yang terekam alami'), score: 1 },
      { image: IMG(1, 'c'), label: M('맛집·여행·핫플이 가득한 라이프스타일 피드', 'A lifestyle feed full of restaurants, travel, and hot spots', 'グルメ・旅行・話題スポットがいっぱいのライフスタイルフィード', '充满美食·旅行·热门打卡地的生活方式动态', '充滿美食·旅行·熱門打卡地的生活方式動態', 'Feed lifestyle đầy nhà hàng ngon, du lịch và địa điểm hot', 'Feed lifestyle penuh restoran, travel, dan tempat hits'), score: 2 },
      { image: IMG(1, 'd'), label: M('정보와 인사이트가 담긴 콘텐츠 피드', 'A content feed with information and insights', '情報とインサイトが詰まったコンテンツフィード', '充满信息和洞察的内容动态', '充滿資訊和洞察的內容動態', 'Feed nội dung chứa thông tin và insight', 'Feed konten berisi informasi dan insight'), score: 3 },
    ],
  },
  {
    id: 2,
    question: M(
      '사진을 올리기 전 편집 과정은?',
      'What is your editing process before posting a photo?',
      '写真を投稿する前の編集プロセスは？',
      '发帖前的修图流程是？',
      '發文前的修圖流程是？',
      'Quy trình chỉnh sửa trước khi đăng ảnh của bạn là gì?',
      'Proses edit sebelum mengunggah foto?'
    ),
    options: [
      { image: IMG(2, 'a'), label: M('라이트룸 프리셋으로 정밀하게 보정 후 업로드', 'Precisely edit with Lightroom presets, then upload', 'Lightroomプリセットで精密に補正してからアップロード', '用Lightroom预设精细修图后上传', '用Lightroom預設精細修圖後上傳', 'Chỉnh sửa kỹ bằng preset Lightroom rồi đăng', 'Edit presisi dengan preset Lightroom lalu upload'), score: 0 },
      { image: IMG(2, 'b'), label: M('인스타 기본 필터 하나 정도만 적용', 'Apply just one default Instagram filter', 'インスタの基本フィルターを1つだけ適用', '只加一个Instagram默认滤镜', '只加一個Instagram預設濾鏡', 'Chỉ dùng một bộ lọc mặc định của Instagram', 'Hanya pakai satu filter bawaan Instagram'), score: 1 },
      { image: IMG(2, 'c'), label: M('채도와 밝기만 살짝 올려서 올림', 'Slightly boost saturation and brightness', '彩度と明るさだけ少し上げて投稿', '只稍微提高饱和度和亮度', '只稍微提高飽和度和亮度', 'Chỉ tăng nhẹ độ bão hòa và độ sáng', 'Hanya naikkan saturasi dan kecerahan sedikit'), score: 2 },
      { image: IMG(2, 'd'), label: M('편집 거의 안 함. 있는 그대로 올리는 편', 'Rarely edit. I usually post as-is', '編集はほぼしない。あるがまま投稿する', '几乎不修。原图直接发', '幾乎不修。原圖直接發', 'Hầu như không chỉnh. Đăng nguyên bản', 'Hampir tidak edit. Biasanya upload apa adanya'), score: 3 },
    ],
  },
  {
    id: 3,
    question: M(
      '인스타 게시물을 올리는 나의 패턴은?',
      'What is my pattern for posting on Instagram?',
      'インスタ投稿を上げる私のパターンは？',
      '我发Instagram帖子的模式是？',
      '我發Instagram貼文的模式是？',
      'Thói quen đăng bài Instagram của tôi là gì?',
      'Pola saya saat posting di Instagram?'
    ),
    options: [
      { image: IMG(3, 'a'), label: M('업로드 시간·해시태그·문구를 미리 계획하고 올린다', 'Plan upload time, hashtags, and captions in advance', 'アップロード時間・ハッシュタグ・文案を事前に計画して投稿', '提前规划发布时间·标签·文案再发', '提前規劃發布時間·標籤·文案再發', 'Lên kế hoạch trước giờ đăng, hashtag và caption', 'Rencanakan waktu upload, hashtag, dan caption dulu'), score: 0 },
      { image: IMG(3, 'b'), label: M('사진이 마음에 들면 바로 올린다. 즉흥적이다', 'Post immediately when I like a photo. Spontaneous', '写真が気に入ったらすぐ投稿。即興的', '照片满意就立刻发。很即兴', '照片滿意就立刻發。很即興', 'Thích ảnh là đăng ngay. Rất tự phát', 'Kalau suka fotonya langsung upload. Spontan'), score: 1 },
      { image: IMG(3, 'c'), label: M('피드 전체 분위기를 확인 후 조화로울 때만 올린다', 'Check overall feed mood and only post when it fits', 'フィード全体の雰囲気を確認し、調和するときだけ投稿', '确认整体氛围协调才发', '確認整體氛圍協調才發', 'Xem tổng thể feed, chỉ đăng khi hài hòa', 'Cek mood feed dulu, upload hanya kalau selaras'), score: 2 },
      { image: IMG(3, 'd'), label: M('거의 안 올린다. 보는 용도로 더 많이 쓴다', 'Rarely post. Mostly use it for browsing', 'ほとんど投稿しない。見る用途で使うことが多い', '几乎不发。主要用来浏览', '幾乎不發。主要用來瀏覽', 'Hầu như không đăng. Chủ yếu dùng để xem', 'Jarang posting. Lebih sering dipakai untuk lihat-lihat'), score: 3 },
    ],
  },
  {
    id: 4,
    question: M(
      '인스타에서 가장 오래 머무는 곳은?',
      'Where do you spend the most time on Instagram?',
      'インスタで最も長く滞在する場所は？',
      '在Instagram上停留最久的地方是？',
      '在Instagram上停留最久的地方是？',
      'Bạn ở lại lâu nhất trên Instagram ở đâu?',
      'Di mana kamu paling lama di Instagram?'
    ),
    options: [
      { image: IMG(4, 'a'), label: M('탐색 탭. 새로운 감성 계정 발굴하며 스크롤', 'Explore tab. Scrolling while discovering new aesthetic accounts', '探索タブ。新しい感性アカウントを発掘しながらスクロール', '探索页。边刷边发现新的审美账号', '探索頁。邊滑邊發現新的審美帳號', 'Tab Khám phá. Lướt và tìm tài khoản aesthetic mới', 'Tab Jelajahi. Scroll sambil cari akun aesthetic baru'), score: 0 },
      { image: IMG(4, 'b'), label: M('홈 피드. 팔로우한 사람들 게시물 꼼꼼히 확인', 'Home feed. Carefully checking posts from people I follow', 'ホームフィード。フォロー中の人の投稿を丁寧にチェック', '首页动态。仔细查看关注者的帖子', '首頁動態。仔細查看追蹤者的貼文', 'Trang chủ. Xem kỹ bài của người đã follow', 'Home feed. Cek teliti postingan yang di-follow'), score: 1 },
      { image: IMG(4, 'c'), label: M('릴스. 한번 시작하면 멈추기 어렵다', 'Reels. Once I start, it is hard to stop', 'リール。始めたら止まりにくい', 'Reels。一开始就很难停下来', 'Reels。一開始就很難停下來', 'Reels. Bắt đầu rồi khó dừng', 'Reels. Sekali mulai susah berhenti'), score: 2 },
      { image: IMG(4, 'd'), label: M('내 프로필. 올린 사진 다시 보거나 통계 확인', 'My profile. Reviewing my photos or checking stats', '自分のプロフィール。投稿を見返したり統計を確認', '我的主页。回看照片或查看数据', '我的主頁。回看照片或查看數據', 'Hồ sơ của tôi. Xem lại ảnh đã đăng hoặc thống kê', 'Profil saya. Lihat ulang foto atau cek statistik'), score: 3 },
    ],
  },
  {
    id: 5,
    question: M(
      '지금 가장 끌리는 인스타 피드 스타일은?',
      'Which Instagram feed style attracts you most right now?',
      '今いちばん惹かれるインスタフィードのスタイルは？',
      '现在最吸引你的Instagram动态风格是？',
      '現在最吸引你的Instagram動態風格是？',
      'Phong cách feed Instagram nào hấp dẫn bạn nhất hiện tại?',
      'Gaya feed Instagram apa yang paling menarikmu sekarang?'
    ),
    options: [
      { image: IMG(5, 'a'), label: M('화이트·베이지 톤의 미니멀 라이프스타일 피드', 'Minimal lifestyle feed in white and beige tones', 'ホワイト・ベージュトーンのミニマルライフスタイルフィード', '白色·米色调的极简生活方式动态', '白色·米色調的極簡生活方式動態', 'Feed lifestyle tối giản tông trắng và beige', 'Feed lifestyle minimal dengan tone putih dan beige'), score: 0 },
      { image: IMG(5, 'b'), label: M('선명하고 생동감 있는 음식·여행 피드', 'Vivid, vibrant food and travel feed', '鮮やかで生き生きとしたグルメ・旅行フィード', '鲜明生动的美食·旅行动态', '鮮明生動的美食·旅行動態', 'Feed ẩm thực và du lịch sống động, rực rỡ', 'Feed makanan dan travel yang vivid dan hidup'), score: 1 },
      { image: IMG(5, 'c'), label: M('감성적인 필름카메라 느낌의 빈티지 피드', 'Vintage feed with a film camera aesthetic', '感性的なフィルムカメラ風のヴィンテージフィード', '有胶片相机感的复古情感动态', '有底片相機感的復古情感動態', 'Feed vintage với cảm giác máy phim', 'Feed vintage dengan nuansa kamera film'), score: 2 },
      { image: IMG(5, 'd'), label: M('깔끔한 카드뉴스 형식의 정보 피드', 'Clean card-news style info feed', 'すっきりしたカードニュース形式の情報フィード', '简洁卡片新闻式的信息动态', '簡潔卡片新聞式的資訊動態', 'Feed thông tin dạng card news gọn gàng', 'Feed info bergaya card news yang rapi'), score: 3 },
    ],
  },
  {
    id: 6,
    question: M(
      '인스타 스토리를 올리는 나의 스타일은?',
      'What is my style of posting Instagram Stories?',
      'インスタストーリーを上げる私のスタイルは？',
      '我发Instagram Story的风格是？',
      '我發Instagram Story的風格是？',
      'Phong cách đăng Story Instagram của tôi là gì?',
      'Gaya saya saat posting Instagram Story?'
    ),
    options: [
      { image: IMG(6, 'a'), label: M('템플릿을 활용해 감각적으로 꾸며서 올린다', 'Use templates to post with a stylish touch', 'テンプレートを活用してセンスよく飾って投稿', '用模板装饰得很有感再发', '用模板裝飾得很有感再發', 'Dùng template để đăng một cách tinh tế', 'Pakai template untuk posting dengan gaya'), score: 0 },
      { image: IMG(6, 'b'), label: M('그냥 사진이나 영상 그대로 올린다', 'Just post photos or videos as-is', 'そのまま写真や動画を投稿', '照片或视频原样直接发', '照片或影片原樣直接發', 'Đăng ảnh hoặc video nguyên bản', 'Langsung upload foto atau video apa adanya'), score: 1 },
      { image: IMG(6, 'c'), label: M('설문·퀴즈·질문 스티커로 팔로워와 소통한다', 'Engage followers with poll, quiz, and question stickers', 'アンケート・クイズ・質問ステッカーでフォロワーと交流', '用投票·问答·提问贴纸和粉丝互动', '用投票·問答·提問貼紙和粉絲互動', 'Tương tác với follower bằng sticker khảo sát, quiz, câu hỏi', 'Interaksi dengan follower lewat sticker polling, quiz, dan pertanyaan'), score: 2 },
      { image: IMG(6, 'd'), label: M('거의 올리지 않는다. 스토리는 부담스럽다', 'Rarely post. Stories feel burdensome', 'ほとんど上げない。ストーリーは負担に感じる', '几乎不发。Story让我有压力', '幾乎不發。Story讓我有壓力', 'Hầu như không đăng. Story cảm thấy áp lực', 'Jarang posting. Story terasa memberatkan'), score: 3 },
    ],
  },
  {
    id: 7,
    question: M(
      '인스타에서 좋아요를 가장 많이 누르는 콘텐츠는?',
      'What content do you like the most on Instagram?',
      'インスタで最も「いいね」を押すコンテンツは？',
      '在Instagram上最常点赞的内容是？',
      '在Instagram上最常按讚的內容是？',
      'Nội dung nào bạn thích nhất trên Instagram?',
      'Konten apa yang paling sering kamu sukai di Instagram?'
    ),
    options: [
      { image: IMG(7, 'a'), label: M('감성적으로 잘 찍힌 인테리어·라이프스타일 사진', 'Aesthetically well-shot interior and lifestyle photos', '感性的にうまく撮れたインテリア・ライフスタイル写真', '拍得很有氛围的室内·生活方式照片', '拍得很氛圍感的室內·生活方式照片', 'Ảnh nội thất và lifestyle chụp đẹp, đầy cảm xúc', 'Foto interior dan lifestyle yang estetis dan bagus'), score: 0 },
      { image: IMG(7, 'b'), label: M('친구나 지인의 일상 게시물', 'Daily posts from friends and acquaintances', '友達や知人の日常投稿', '朋友或熟人的日常帖子', '朋友或熟人的日常貼文', 'Bài đăng đời thường của bạn bè và người quen', 'Postingan keseharian teman dan kenalan'), score: 1 },
      { image: IMG(7, 'c'), label: M('맛집·카페·여행 정보 담긴 게시물', 'Posts with restaurant, cafe, and travel info', 'グルメ・カフェ・旅行情報が入った投稿', '包含美食·咖啡·旅行信息的帖子', '包含美食·咖啡·旅行資訊的貼文', 'Bài đăng có thông tin nhà hàng, quán cà phê, du lịch', 'Postingan berisi info restoran, kafe, dan travel'), score: 2 },
      { image: IMG(7, 'd'), label: M('유용한 정보나 공감되는 텍스트 카드', 'Useful info or relatable text cards', '役立つ情報や共感できるテキストカード', '实用信息或引发共鸣的文字卡片', '實用資訊或引發共鳴的文字卡片', 'Thông tin hữu ích hoặc thẻ chữ dễ đồng cảm', 'Info berguna atau kartu teks yang relatable'), score: 3 },
    ],
  },
  {
    id: 8,
    question: M(
      '인스타 팔로우를 결정하는 나의 기준은?',
      'What are my criteria for deciding to follow on Instagram?',
      'インスタでフォローを決める私の基準は？',
      '我决定在Instagram上关注的标准是？',
      '我決定在Instagram上追蹤的標準是？',
      'Tiêu chí quyết định follow trên Instagram của tôi là gì?',
      'Kriteria saya saat memutuskan follow di Instagram?'
    ),
    options: [
      { image: IMG(8, 'a'), label: M('피드 톤이 예쁘고 감성이 내 취향이면 팔로우', 'Follow if the feed tone is pretty and matches my aesthetic', 'フィードのトーンがきれいで感性が好みならフォロー', '动态色调好看且审美合我口味就关注', '動態色調好看且審美合我口味就追蹤', 'Follow nếu tông feed đẹp và aesthetic hợp gu', 'Follow kalau tone feed cantik dan aesthetic sesuai selera'), score: 0 },
      { image: IMG(8, 'b'), label: M('실제 아는 사람이거나 주변 지인이면 팔로우', 'Follow if it is someone I actually know', '実際に知っている人や身近な知人ならフォロー', '真正认识或身边熟人就关注', '真正認識或身邊熟人就追蹤', 'Follow nếu là người tôi thực sự biết', 'Follow kalau orang yang benar-benar saya kenal'), score: 1 },
      { image: IMG(8, 'c'), label: M('맛집·여행·쇼핑 정보를 잘 올리면 팔로우', 'Follow if they share good restaurant, travel, and shopping info', 'グルメ・旅行・ショッピング情報をよく上げるならフォロー', '美食·旅行·购物信息发得好就关注', '美食·旅行·購物資訊發得好就追蹤', 'Follow nếu chia sẻ tốt thông tin ăn uống, du lịch, mua sắm', 'Follow kalau bagus membagikan info makan, travel, belanja'), score: 2 },
      { image: IMG(8, 'd'), label: M('배울 게 있는 전문 지식이나 인사이트면 팔로우', 'Follow if they offer professional knowledge or insights to learn from', '学べる専門知識やインサイトがあればフォロー', '有值得学习的专业知识或洞察就关注', '有值得學習的專業知識或洞察就追蹤', 'Follow nếu có kiến thức chuyên môn hoặc insight đáng học', 'Follow kalau ada pengetahuan profesional atau insight yang bisa dipelajari'), score: 3 },
    ],
  },
  {
    id: 9,
    question: M(
      '내가 가장 많이 쓰는 인스타 기능은?',
      'Which Instagram feature do I use the most?',
      '私が最もよく使うインスタ機能は？',
      '我最常用的Instagram功能是？',
      '我最常用的Instagram功能是？',
      'Tính năng Instagram nào tôi dùng nhiều nhất?',
      'Fitur Instagram apa yang paling sering saya pakai?'
    ),
    options: [
      { image: IMG(9, 'a'), label: M('저장 폴더. 나중에 참고할 게시물 분류 저장', 'Saved collections. Categorize posts for later reference', '保存フォルダ。後で参考にする投稿を分類保存', '收藏夹。分类保存以后参考的帖子', '收藏夾。分類保存以後參考的貼文', 'Thư mục lưu. Phân loại bài để tham khảo sau', 'Folder simpan. Klasifikasikan posting untuk referensi nanti'), score: 0 },
      { image: IMG(9, 'b'), label: M('DM. 친구들과 밈이나 릴스 공유', 'DM. Share memes and reels with friends', 'DM。友達とミームやリールを共有', '私信。和朋友分享梗图或Reels', '私訊。和朋友分享迷因或Reels', 'DM. Chia sẻ meme và Reels với bạn bè', 'DM. Bagikan meme dan Reels dengan teman'), score: 1 },
      { image: IMG(9, 'c'), label: M('태그·위치. 가는 곳마다 위치 태그 남기기', 'Tags and location. Tag location wherever I go', 'タグ・位置情報。行くたびに位置タグを残す', '标签·定位。去哪都留下位置标签', '標籤·定位。去哪都留下位置標籤', 'Tag và vị trí. Gắn tag địa điểm mỗi nơi đến', 'Tag dan lokasi. Tinggalkan tag lokasi ke mana pun pergi'), score: 2 },
      { image: IMG(9, 'd'), label: M('인사이트. 내 게시물 반응 데이터 분석', 'Insights. Analyze my post engagement data', 'インサイト。自分の投稿反応データを分析', '数据洞察。分析帖子互动数据', '數據洞察。分析貼文互動數據', 'Insights. Phân tích dữ liệu tương tác bài đăng', 'Insights. Analisis data respons postingan saya'), score: 3 },
    ],
  },
  {
    id: 10,
    question: M(
      '인스타에 올릴 사진을 고르는 나의 기준은?',
      'What are my criteria for choosing photos to post on Instagram?',
      'インスタに上げる写真を選ぶ私の基準は？',
      '我选择发Instagram照片的标准是？',
      '我選擇發Instagram照片的標準是？',
      'Tiêu chí chọn ảnh đăng Instagram của tôi là gì?',
      'Kriteria saya saat memilih foto untuk Instagram?'
    ),
    options: [
      { image: IMG(10, 'a'), label: M('피드에 올렸을 때 전체 톤과 잘 어울리는 것', 'Something that fits well with the overall feed tone when posted', 'フィードに載せたとき全体のトーンとよく合うもの', '发上去和整体色调很协调的', '發上去和整體色調很協調的', 'Thứ hài hòa với tông tổng thể feed khi đăng', 'Yang selaras dengan tone feed saat diupload'), score: 0 },
      { image: IMG(10, 'b'), label: M('그 순간의 감정이나 기억이 잘 담긴 것', 'Something that captures the emotion or memory of that moment', 'その瞬間の感情や記憶がよく伝わるもの', '能很好传达那一刻情感或记忆的', '能很好傳達那一刻情感或記憶的', 'Thứ lưu giữ cảm xúc hoặc kỷ niệm của khoảnh khắc đó', 'Yang menangkap emosi atau kenangan momen itu'), score: 1 },
      { image: IMG(10, 'c'), label: M('반응이 좋을 것 같고 저장이 많이 될 것 같은 것', 'Something that seems like it will get good reactions and saves', '反応が良さそうで保存も多くされそうなもの', '感觉互动会好、收藏也会多的', '感覺互動會好、收藏也會多的', 'Thứ có vẻ sẽ được tương tác và lưu nhiều', 'Yang sepertinya akan dapat respons dan simpanan bagus'), score: 2 },
      { image: IMG(10, 'd'), label: M('팔로워에게 도움이 되거나 유용한 정보가 담긴 것', 'Something helpful or useful for followers', 'フォロワーに役立つ、または有用な情報が入ったもの', '对粉丝有帮助或包含实用信息的', '對粉絲有幫助或包含實用資訊的', 'Thứ hữu ích hoặc có thông tin giúp ích cho follower', 'Yang membantu atau berguna bagi follower'), score: 3 },
    ],
  },
  {
    id: 11,
    question: M(
      '인스타 계정에 대한 나의 솔직한 목표는?',
      'What is my honest goal for my Instagram account?',
      'インスタアカウントに対する私の正直な目標は？',
      '我对Instagram账号的真心目标是？',
      '我對Instagram帳號的真心目標是？',
      'Mục tiêu thật lòng của tôi với tài khoản Instagram là gì?',
      'Tujuan jujur saya untuk akun Instagram?'
    ),
    options: [
      { image: IMG(11, 'a'), label: M('나만의 감성 아카이브. 나를 위한 기록이 목적', 'My own aesthetic archive. Recording for myself is the goal', '自分だけの感性アーカイブ。自分のための記録が目的', '专属审美档案。记录给自己是目的', '專屬審美檔案。記錄給自己是目的', 'Kho lưu trữ aesthetic riêng. Ghi lại cho bản thân là mục tiêu', 'Arsip aesthetic pribadi. Mencatat untuk diri sendiri'), score: 0 },
      { image: IMG(11, 'b'), label: M('친한 사람들과의 소통 공간. 지인 연결이 목적', 'A space to connect with close people. Staying in touch is the goal', '親しい人との交流空間。知人とのつながりが目的', '和亲近之人交流的空间。维系关系是目的', '和親近之人交流的空間。維繫關係是目的', 'Không gian giao lưu với người thân. Kết nối bạn bè là mục tiêu', 'Ruang komunikasi dengan orang dekat. Menjaga hubungan'), score: 1 },
      { image: IMG(11, 'c'), label: M('인플루언서 성장. 팔로워 수 늘리고 협찬받고 싶다', 'Influencer growth. Want more followers and sponsorships', 'インフルエンサー成長。フォロワーを増やし協賛を受けたい', '网红成长。想涨粉并获得赞助', '網紅成長。想漲粉並獲得贊助', 'Phát triển influencer. Muốn tăng follower và nhận tài trợ', 'Berkembang jadi influencer. Ingin tambah follower dan sponsorship'), score: 2 },
      { image: IMG(11, 'd'), label: M('전문성 브랜딩. 내 분야에서 신뢰받는 계정이 목적', 'Professional branding. Being a trusted account in my field', '専門性ブランディング。自分の分野で信頼されるアカウントが目的', '专业品牌塑造。成为领域内受信任的账号', '專業品牌塑造。成為領域內受信任的帳號', 'Xây dựng thương hiệu chuyên môn. Trở thành tài khoản đáng tin trong lĩnh vực', 'Branding profesional. Jadi akun terpercaya di bidang saya'), score: 3 },
    ],
  },
  {
    id: 12,
    question: M(
      '인스타를 하고 나서 드는 솔직한 감정은?',
      'What honest feeling do you get after using Instagram?',
      'インスタをした後に感じる正直な感情は？',
      '用完Instagram后真实的感受是？',
      '用完Instagram後真實的感受是？',
      'Cảm xúc thật lòng sau khi dùng Instagram là gì?',
      'Perasaan jujur setelah pakai Instagram?'
    ),
    options: [
      { image: IMG(12, 'a'), label: M('뿌듯하다. 내 피드가 예뻐질수록 기분이 좋다', 'Proud. Feel good as my feed gets prettier', '誇らしい。フィードがきれいになるほど気分がいい', '很有成就感。动态越美心情越好', '很有成就感。動態越美心情越好', 'Tự hào. Feed càng đẹp càng vui', 'Bangga. Semakin feed cantik semakin senang'), score: 0 },
      { image: IMG(12, 'b'), label: M('따뜻하다. 친구들 일상을 보면 마음이 좋아진다', 'Warm. Feel good seeing friends daily lives', '温かい。友達の日常を見ると心がほっこりする', '很温暖。看朋友日常心情变好', '很溫暖。看朋友日常心情變好', 'Ấm áp. Xem đời thường bạn bè thấy vui', 'Hangat. Lihat keseharian teman bikin hati senang'), score: 1 },
      { image: IMG(12, 'c'), label: M('자극받는다. 좋은 곳 가고 싶고 뭔가 하고 싶어진다', 'Inspired. Want to go to nice places and do things', '刺激を受ける。いい場所に行きたくなり、何かしたくなる', '很受激励。想去好地方、想做点什么', '很受激勵。想去好地方、想做點什麼', 'Được truyền cảm hứng. Muốn đi chỗ hay và làm gì đó', 'Terinspirasi. Ingin ke tempat bagus dan melakukan sesuatu'), score: 2 },
      { image: IMG(12, 'd'), label: M('배운다. 유용한 정보를 얻고 인사이트가 생긴다', 'Learning. Gain useful info and new insights', '学ぶ。役立つ情報を得てインサイトが生まれる', '有收获。获得实用信息和新洞察', '有收穫。獲得實用資訊和新洞察', 'Học hỏi. Nhận thông tin hữu ích và insight mới', 'Belajar. Dapat info berguna dan insight baru'), score: 3 },
    ],
  },
];

export const phase3InstaFeedPersonaAnalysisResults: Phase3InstaFeedPersonaAnalysisResult[] = [
  {
    type: 'Type1',
    emoji: '🎨',
    title: M(
      '나만의 미학을 쌓는, 감성 큐레이터',
      'Building Your Own Aesthetics, Aesthetic Curator',
      '自分だけの美学を積み上げる、感性キュレーター',
      '构建专属美学，感性策展人',
      '構建專屬美學，感性策展人',
      'Xây dựng thẩm mỹ riêng, Curator cảm xúc',
      'Membangun estetika sendiri, Kurator estetika'
    ),
    shortDescription: M(
      '"당신의 인스타는 하나의 작품입니다."',
      '"Your Instagram is a work of art."',
      '"あなたのインスタは一つの作品です。"',
      '"你的Instagram是一件作品。"',
      '"你的Instagram是一件作品。"',
      '"Instagram của bạn là một tác phẩm nghệ thuật."',
      '"Instagram-mu adalah sebuah karya seni."'
    ),
    description: M(
      '피드 전체를 하나의 무드보드처럼 관리하는 타입입니다. 사진 한 장을 올리기 전에 기존 피드와의 톤 조화를 먼저 확인하고, 라이트룸 프리셋으로 정밀하게 보정합니다. 팔로워 수보다 피드의 완성도가 더 중요하고, 나를 위한 감성 아카이빙에 집중합니다. 인스타를 보는 사람마다 "이 사람 피드 진짜 예쁘다"라는 말을 먼저 합니다.',
      'You manage your entire feed like a mood board. Before posting a single photo, you check how it harmonizes with your existing feed and edit precisely with Lightroom presets. Feed perfection matters more than follower count, and you focus on aesthetic archiving for yourself. People who see your Instagram often say first, "This feed is so pretty."',
      'フィード全体を一つのムードボードのように管理するタイプです。写真を1枚投稿する前に既存フィードとのトーン調和を確認し、Lightroomプリセットで精密に補正します。フォロワー数よりフィードの完成度が重要で、自分のための感性アーカイブに集中します。インスタを見る人は誰もがまず「この人のフィード本当にきれい」と言います。',
      '你会把整个动态当作一块情绪板来管理。发一张照片前，先确认与现有动态的色调是否协调，再用Lightroom预设精细修图。比起粉丝数，你更在意动态的完成度，专注于为自己做审美存档。看Instagram的人往往会先说："这人的动态真好看。"',
      '你會把整個動態當作一塊情緒板來管理。發一張照片前，先確認與現有動態的色調是否協調，再用Lightroom預設精細修圖。比起粉絲數，你更在意動態的完成度，專注於為自己做審美存檔。看Instagram的人往往會先說：「這人的動態真好看。」',
      'Bạn quản lý toàn bộ feed như một mood board. Trước khi đăng một ảnh, bạn kiểm tra sự hài hòa với feed hiện có và chỉnh bằng preset Lightroom. Độ hoàn thiện feed quan trọng hơn số follower, bạn tập trung lưu trữ aesthetic cho bản thân. Ai xem Instagram của bạn thường nói trước: "Feed này đẹp thật."',
      'Kamu mengelola seluruh feed seperti mood board. Sebelum upload satu foto, kamu cek keselarasan tone dengan feed yang ada dan edit presisi dengan preset Lightroom. Kesempurnaan feed lebih penting dari jumlah follower, fokus pada arsip estetika untuk diri sendiri. Orang yang lihat Instagram-mu sering bilang duluan, "Feed-nya cantik banget."'
    ),
    instaPersona: M('감성 큐레이터 🎨', 'Aesthetic Curator 🎨', '感性キュレーター 🎨', '感性策展人 🎨', '感性策展人 🎨', 'Curator cảm xúc 🎨', 'Kurator estetika 🎨'),
    uploadPattern: M(
      '신중하고 계획적. 피드 조화 확인 후 업로드',
      'Careful and planned. Upload after checking feed harmony',
      '慎重で計画的。フィード調和を確認してから投稿',
      '谨慎有计划。确认动态协调后再发',
      '謹慎有計畫。確認動態協調後再發',
      'Thận trọng và có kế hoạch. Đăng sau khi kiểm tra hài hòa feed',
      'Hati-hati dan terencana. Upload setelah cek keselarasan feed'
    ),
    mainContent: M(
      '라이프스타일·인테리어·감성 사진',
      'Lifestyle · Interior · Aesthetic photos',
      'ライフスタイル · インテリア · 感性写真',
      '生活方式 · 室内 · 氛围照片',
      '生活方式 · 室內 · 氛圍照片',
      'Lifestyle · Nội thất · Ảnh aesthetic',
      'Lifestyle · Interior · Foto estetika'
    ),
    mostUsedFeature: M(
      '저장 컬렉션·피드 미리보기·라이트룸',
      'Saved collections · Feed preview · Lightroom',
      '保存コレクション · フィードプレビュー · Lightroom',
      '收藏合集 · 动态预览 · Lightroom',
      '收藏合集 · 動態預覽 · Lightroom',
      'Bộ sưu tập lưu · Xem trước feed · Lightroom',
      'Koleksi simpan · Pratinjau feed · Lightroom'
    ),
    instaGoal: M(
      '나만의 감성 아카이브 완성',
      'Complete my own aesthetic archive',
      '自分だけの感性アーカイブを完成させる',
      '完成专属审美档案',
      '完成專屬審美檔案',
      'Hoàn thiện kho lưu trữ aesthetic riêng',
      'Menyelesaikan arsip estetika pribadi'
    ),
    strength: M(
      '일관된 미학으로 계정 자체가 브랜드가 됨',
      'Consistent aesthetics make the account itself a brand',
      '一貫した美学でアカウント自体がブランドになる',
      '一致的美学让账号本身成为品牌',
      '一致的美學讓帳號本身成為品牌',
      'Thẩm mỹ nhất quán biến tài khoản thành thương hiệu',
      'Estetika konsisten membuat akun jadi brand'
    ),
    caution: M(
      '완벽한 피드에 집착하다 정작 소통이 줄어들 수 있음',
      'Obsessing over a perfect feed may reduce actual engagement',
      '完璧なフィードにこだわりすぎて交流が減る可能性',
      '过度追求完美动态可能减少实际互动',
      '過度追求完美動態可能減少實際互動',
      'Quá chú trọng feed hoàn hảo có thể giảm tương tác thực',
      'Terlalu fokus feed sempurna bisa kurangi interaksi nyata'
    ),
    influencerGrowthTip: M(
      '지금의 감성은 유지하되 릴스를 추가해보세요. 피드의 미학 + 릴스 알고리즘 = 성장 최적 조합',
      'Keep your aesthetic but try adding Reels. Feed aesthetics + Reels algorithm = optimal growth combo',
      '今の感性は維持しつつリールを追加してみて。フィードの美学 + リールアルゴリズム = 成長最適コンボ',
      '保持现有审美，试试加入Reels。动态美学 + Reels算法 = 最佳增长组合',
      '保持現有審美，試試加入Reels。動態美學 + Reels演算法 = 最佳成長組合',
      'Giữ aesthetic hiện tại nhưng thử thêm Reels. Feed đẹp + thuật toán Reels = combo tăng trưởng tối ưu',
      'Pertahankan estetika tapi coba tambah Reels. Estetika feed + algoritma Reels = combo pertumbuhan optimal'
    ),
    personaComboPartnerType: 'Type3',
    personaCombo: M(
      '(당신의 감성이 상대의 콘텐츠를 더 예쁘게 만들어줌)',
      '(Your aesthetic makes the other person\'s content prettier)',
      '(あなたの感性が相手のコンテンツをより美しくする)',
      '(你的审美让对方的內容更美)',
      '(你的審美讓對方的內容更美)',
      '(Thẩm mỹ của bạn làm nội dung đối phương đẹp hơn)',
      '(Estetikamu membuat konten lawan lebih cantik)'
    ),
    oneLineReview: M(
      '당신의 피드는 팔로우 버튼을 누르게 만드는 갤러리입니다',
      'Your feed is a gallery that makes people hit follow',
      'あなたのフィードはフォローボタンを押させるギャラリーです',
      '你的动态是让人按下关注的画廊',
      '你的動態是讓人按下追蹤的畫廊',
      'Feed của bạn là gallery khiến người ta bấm follow',
      'Feed-mu adalah galeri yang bikin orang tekan follow'
    ),
    shareSnippet: M(
      '내 인스타 페르소나는 감성 큐레이터 🎨 피드가 곧 나인 사람. 인스타 들어가기 전 피드 미리보기 앱 켜는 사람 손 → 너는 어떤 인스타 유형이야?',
      'My Instagram persona is Aesthetic Curator 🎨 Feed is me. Opens a feed preview app before Instagram → What type are you?',
      '私のインスタペルソナは感性キュレーター 🎨 フィードがそのまま自分。インスタ前にプレビューアプリを開く人 → あなたはどのインスタタイプ？',
      '我的Instagram人设是感性策展人 🎨 动态即本人。进Instagram前先开预览App的人 → 你是什么类型？',
      '我的Instagram人設是感性策展人 🎨 動態即本人。進Instagram前先開預覽App的人 → 你是什麼類型？',
      'Persona Instagram của tôi là Curator cảm xúc 🎨 Feed chính là tôi. Mở app xem trước feed trước khi vào Instagram → Bạn thuộc type nào?',
      'Persona Instagram-ku Kurator estetika 🎨 Feed = diriku. Buka app preview feed sebelum Instagram → Kamu tipe apa?'
    ),
  },
  {
    type: 'Type2',
    emoji: '📔',
    title: M(
      '진짜 일상을 기록하는, 솔직한 일상 아카이버',
      'Recording Real Life, Honest Daily Archiver',
      '本当の日常を記録する、正直な日常アーカイバー',
      '记录真实日常，诚实的日常存档者',
      '記錄真實日常，誠實的日常存檔者',
      'Ghi lại đời thường thật, Archiver đời sống chân thật',
      'Mencatat kehidupan nyata, Pengarsip keseharian jujur'
    ),
    shortDescription: M(
      '"당신의 인스타는 가장 솔직한 일기장입니다."',
      '"Your Instagram is your most honest diary."',
      '"あなたのインスタは最も正直な日記帳です。"',
      '"你的Instagram是最诚实的日记本。"',
      '"你的Instagram是最誠實的日記本。"',
      '"Instagram của bạn là cuốn nhật ký chân thật nhất."',
      '"Instagram-mu adalah buku harian paling jujur."'
    ),
    description: M(
      '필터보다 순간이 중요한 타입입니다. 완벽하지 않아도 그 순간의 감정이 담긴 사진을 더 좋아하고, 지인들과의 소통이 인스타의 주목적입니다. 팔로워 수에 크게 연연하지 않고 친한 사람들이 보는 것만으로도 충분합니다. 최근 이런 솔직한 일상 계정이 오히려 더 주목받는 트렌드가 되고 있습니다.',
      'Moments matter more than filters for you. You prefer photos that capture the emotion of the moment, even if imperfect, and connecting with acquaintances is the main purpose of Instagram. You do not care much about follower count; having close people see your posts is enough. Recently, these honest daily accounts are getting more attention as a trend.',
      'フィルターより瞬間が大切なタイプです。完璧でなくてもその瞬間の感情が伝わる写真を好み、知人との交流がインスタの主目的です。フォロワー数にこだわらず、親しい人が見てくれるだけで十分です。最近、このような正直な日常アカウントがむしろ注目されるトレンドになっています。',
      '对你来说，瞬间比滤镜更重要。即使不完美，你更喜欢能传达那一刻情感的照片，和熟人交流是Instagram的主要目的。不太在意粉丝数，亲近之人能看到就够了。最近，这种诚实的日常账号反而更受关注。',
      '對你來說，瞬間比濾鏡更重要。即使不完美，你更喜歡能傳達那一刻情感的照片，和熟人交流是Instagram的主要目的。不太在意粉絲數，親近之人能看到就夠了。最近，這種誠實的日常帳號反而更受關注。',
      'Khoảnh khắc quan trọng hơn filter với bạn. Bạn thích ảnh lưu giữ cảm xúc dù không hoàn hảo, giao lưu với người quen là mục đích chính của Instagram. Không quá để ý số follower, chỉ cần người thân xem là đủ. Gần đây, loại tài khoản đời thường chân thật này lại được chú ý hơn.',
      'Momen lebih penting dari filter bagimu. Kamu suka foto yang menangkap emosi meski tidak sempurna, dan berkomunikasi dengan kenalan adalah tujuan utama Instagram. Tidak terlalu peduli jumlah follower, cukup orang dekat yang melihat. Akun keseharian jujur seperti ini justru sedang jadi tren.'
    ),
    instaPersona: M('솔직한 일상 아카이버 📔', 'Honest Daily Archiver 📔', '正直な日常アーカイバー 📔', '诚实的日常存档者 📔', '誠實的日常存檔者 📔', 'Archiver đời sống chân thật 📔', 'Pengarsip keseharian jujur 📔'),
    uploadPattern: M(
      '즉흥적. 마음에 들면 바로 업로드',
      'Spontaneous. Upload immediately when I like it',
      '即興的。気に入ったらすぐ投稿',
      '即兴。满意就立刻发',
      '即興。滿意就立刻發',
      'Tự phát. Thích là đăng ngay',
      'Spontan. Suka langsung upload'
    ),
    mainContent: M(
      '일상 순간·친구들과의 기억·소소한 발견',
      'Daily moments · Memories with friends · Small discoveries',
      '日常の瞬間 · 友達との思い出 · 小さな発見',
      '日常瞬间 · 与朋友的回忆 · 小发现',
      '日常瞬間 · 與朋友的回憶 · 小發現',
      'Khoảnh khắc đời thường · Kỷ niệm với bạn · Khám phá nhỏ',
      'Momen sehari-hari · Kenangan dengan teman · Temuan kecil'
    ),
    mostUsedFeature: M(
      'DM·홈 피드·스토리',
      'DM · Home feed · Stories',
      'DM · ホームフィード · ストーリー',
      '私信 · 首页动态 · Story',
      '私訊 · 首頁動態 · Story',
      'DM · Trang chủ · Story',
      'DM · Home feed · Story'
    ),
    instaGoal: M(
      '친한 사람들과의 소통과 일상 기록',
      'Communication with close people and daily records',
      '親しい人との交流と日常の記録',
      '与亲近之人的交流和日常记录',
      '與親近之人的交流和日常記錄',
      'Giao lưu với người thân và ghi lại đời thường',
      'Komunikasi dengan orang dekat dan catatan keseharian'
    ),
    strength: M(
      '진정성 있는 콘텐츠로 관계 친밀도가 높음',
      'Authentic content builds close relationships',
      '真正性のあるコンテンツで関係の親密度が高い',
      '真实内容让关系更亲密',
      '真實內容讓關係更親密',
      'Nội dung chân thật giúp mối quan hệ gần gũi hơn',
      'Konten autentik mempererat hubungan'
    ),
    caution: M(
      '너무 즉흥적으로 올리다 나중에 후회하는 게시물이 생길 수 있음',
      'Posting too spontaneously may lead to posts you regret later',
      '即興的に投稿しすぎると後で後悔する投稿が生まれる可能性',
      '太即兴发帖可能留下日后后悔的内容',
      '太即興發文可能留下日後後悔的內容',
      'Đăng quá tự phát có thể tạo bài đăng khiến bạn hối hận sau này',
      'Terlalu spontan bisa bikin posting yang nanti kamu sesali'
    ),
    influencerGrowthTip: M(
      '지금의 진정성을 유지하면서 해시태그와 업로드 타이밍에 조금만 신경 써보세요. 요즘 진짜 일상 콘텐츠가 오히려 알고리즘 타기 좋습니다',
      'Keep your authenticity but pay a little attention to hashtags and upload timing. Real daily content actually works well with the algorithm these days',
      '今の真正性を保ちつつ、ハッシュタグと投稿タイミングに少しだけ気を配ってみて。最近は本当の日常コンテンツの方がアルゴリズムに乗りやすい',
      '保持真实感，稍微注意标签和发布时间。如今真实日常内容反而更容易被算法推荐',
      '保持真實感，稍微注意標籤和發布時間。如今真實日常內容反而更容易被演算法推薦',
      'Giữ sự chân thật nhưng chú ý một chút hashtag và thời điểm đăng. Gần đây nội dung đời thường thật lại dễ lên thuật toán',
      'Pertahankan kejujuran tapi perhatikan sedikit hashtag dan waktu upload. Konten keseharian asli justru bagus untuk algoritma sekarang'
    ),
    personaComboPartnerType: 'Type5',
    personaCombo: M(
      '(당신의 진정성 + 상대의 유용한 정보 = 팔로워가 모두 신뢰하는 계정)',
      '(Your authenticity + their useful info = an account all followers trust)',
      '(あなたの真正性 + 相手の有用な情報 = フォロワー全員が信頼するアカウント)',
      '(你的真实感 + 对方的实用信息 = 粉丝都信任的账号)',
      '(你的真實感 + 對方的實用資訊 = 粉絲都信任的帳號)',
      '(Sự chân thật của bạn + thông tin hữu ích của đối phương = tài khoản mọi follower đều tin)',
      '(Kejujuranmu + info berguna lawan = akun yang dipercaya semua follower)'
    ),
    oneLineReview: M(
      '당신의 피드는 보는 것만으로 따뜻해지는 진짜 일상 기록입니다',
      'Your feed is a warm, real daily record just to look at',
      'あなたのフィードは見るだけで温かくなる本当の日常記録です',
      '你的动态是看着就温暖的真正日常记录',
      '你的動態是看著就溫暖的真正日常記錄',
      'Feed của bạn là bản ghi đời thường thật, chỉ nhìn cũng ấm lòng',
      'Feed-mu adalah catatan keseharian nyata yang bikin hangat hanya dengan dilihat'
    ),
    shareSnippet: M(
      '내 인스타 페르소나는 솔직한 일상 아카이버 📔 필터보다 순간이 중요한 사람. 진정성이 무기 → 너는 어떤 인스타 유형이야?',
      'My Instagram persona is Honest Daily Archiver 📔 Moments over filters. Authenticity is my weapon → What type are you?',
      '私のインスタペルソナは正直な日常アーカイバー 📔 フィルターより瞬間が大切な人。真正性が武器 → あなたはどのインスタタイプ？',
      '我的Instagram人设是诚实的日常存档者 📔 瞬间比滤镜重要。真实感是武器 → 你是什么类型？',
      '我的Instagram人設是誠實的日常存檔者 📔 瞬間比濾鏡重要。真實感是武器 → 你是什麼類型？',
      'Persona Instagram của tôi là Archiver đời sống chân thật 📔 Khoảnh khắc quan trọng hơn filter. Chân thật là vũ khí → Bạn thuộc type nào?',
      'Persona Instagram-ku Pengarsip keseharian jujur 📔 Momen lebih penting dari filter. Kejujuran adalah senjata → Kamu tipe apa?'
    ),
  },
  {
    type: 'Type3',
    emoji: '🗺️',
    title: M(
      '핫플을 가장 먼저 공유하는, 라이프스타일 탐험가',
      'Sharing Hot Spots First, Lifestyle Explorer',
      '話題スポットをいち早く共有する、ライフスタイル探検家',
      '最先分享热门打卡地，生活方式探索者',
      '最先分享熱門打卡地，生活方式探索者',
      'Chia sẻ địa điểm hot đầu tiên, Nhà thám hiểm lifestyle',
      'Berbagi tempat hits duluan, Penjelajah lifestyle'
    ),
    shortDescription: M(
      '"당신의 인스타는 살고 싶은 라이프스타일 가이드북입니다."',
      '"Your Instagram is a lifestyle guidebook you want to live."',
      '"あなたのインスタは住みたいライフスタイルのガイドブックです。"',
      '"你的Instagram是想活成那样的生活方式指南。"',
      '"你的Instagram是想活成那樣的生活方式指南。"',
      '"Instagram của bạn là cẩm nang lifestyle bạn muốn sống."',
      '"Instagram-mu adalah guidebook lifestyle yang ingin kamu jalani."'
    ),
    description: M(
      '맛집·카페·여행·쇼핑 정보를 남들보다 빠르게 발굴하고 공유하는 타입입니다. 위치 태그는 필수이고 인스타 저장 폴더에는 "가보고 싶은 곳"들이 가득합니다. 게시물을 올릴 때 반응과 저장 수를 의식하고, 좋은 정보를 공유했을 때 가장 뿌듯함을 느낍니다. 라이프스타일 인플루언서로 성장하기 가장 유리한 포지션입니다.',
      'You discover and share restaurant, cafe, travel, and shopping info faster than others. Location tags are a must, and your saved folders are full of places you want to visit. When posting, you care about reactions and saves, and feel most proud when sharing good info. You are in the best position to grow as a lifestyle influencer.',
      'グルメ・カフェ・旅行・ショッピング情報を他より早く発掘して共有するタイプです。位置タグは必須で、保存フォルダには「行きたい場所」がいっぱい。投稿時は反応と保存数を意識し、良い情報を共有したとき最も誇らしく感じます。ライフスタイルインフルエンサーとして成長するのに最も有利なポジションです。',
      '你比别人更快发现并分享美食·咖啡·旅行·购物信息。位置标签是必备，收藏夹里满是"想去的地方"。发帖时会在意互动和收藏数，分享好信息时最有成就感。这是成长为生活方式网红最有利的位置。',
      '你比別人更快發現並分享美食·咖啡·旅行·購物資訊。位置標籤是必備，收藏夾裡滿是「想去的地方」。發文時會在意互動和收藏數，分享好資訊時最有成就感。這是成長為生活方式網紅最有利的位置。',
      'Bạn phát hiện và chia sẻ thông tin nhà hàng, quán cà phê, du lịch, mua sắm nhanh hơn người khác. Tag vị trí là bắt buộc, thư mục lưu đầy "nơi muốn đến". Khi đăng bài bạn để ý tương tác và lượt lưu, tự hào nhất khi chia sẻ info hay. Vị trí thuận lợi nhất để phát triển thành influencer lifestyle.',
      'Kamu menemukan dan membagikan info restoran, kafe, travel, belanja lebih cepat dari orang lain. Tag lokasi wajib, folder simpan penuh "tempat ingin dikunjungi". Saat posting kamu peduli respons dan simpanan, paling bangga saat berbagi info bagus. Posisi paling menguntungkan untuk tumbuh jadi influencer lifestyle.'
    ),
    instaPersona: M('라이프스타일 탐험가 🗺️', 'Lifestyle Explorer 🗺️', 'ライフスタイル探検家 🗺️', '生活方式探索者 🗺️', '生活方式探索者 🗺️', 'Nhà thám hiểm lifestyle 🗺️', 'Penjelajah lifestyle 🗺️'),
    uploadPattern: M(
      '핫플 방문 후 빠르게 공유. 정보성 게시물 위주',
      'Share quickly after visiting hot spots. Mostly informational posts',
      '話題スポット訪問後すぐ共有。情報系投稿が中心',
      '打卡后快速分享。以信息类帖子为主',
      '打卡後快速分享。以資訊類貼文為主',
      'Chia sẻ nhanh sau khi đến địa điểm hot. Chủ yếu bài thông tin',
      'Bagikan cepat setelah kunjungi tempat hits. Mayoritas posting informatif'
    ),
    mainContent: M(
      '맛집·카페·여행·쇼핑·핫플레이스 리뷰',
      'Restaurant · Cafe · Travel · Shopping · Hot spot reviews',
      'グルメ · カフェ · 旅行 · ショッピング · 話題スポットレビュー',
      '美食 · 咖啡 · 旅行 · 购物 · 热门打卡地测评',
      '美食 · 咖啡 · 旅行 · 購物 · 熱門打卡地測評',
      'Nhà hàng · Quán cà phê · Du lịch · Mua sắm · Review địa điểm hot',
      'Restoran · Kafe · Travel · Belanja · Review tempat hits'
    ),
    mostUsedFeature: M(
      '위치 태그·저장 폴더·탐색 탭',
      'Location tags · Saved folders · Explore tab',
      '位置タグ · 保存フォルダ · 探索タブ',
      '位置标签 · 收藏夹 · 探索页',
      '位置標籤 · 收藏夾 · 探索頁',
      'Tag vị trí · Thư mục lưu · Tab Khám phá',
      'Tag lokasi · Folder simpan · Tab Jelajahi'
    ),
    instaGoal: M(
      '유용한 정보 공유 + 팔로워 성장',
      'Share useful info + grow followers',
      '有用な情報共有 + フォロワー成長',
      '分享实用信息 + 涨粉',
      '分享實用資訊 + 漲粉',
      'Chia sẻ info hữu ích + tăng follower',
      'Bagikan info berguna + tumbuhkan follower'
    ),
    strength: M(
      '정보성 콘텐츠로 저장률이 높고 알고리즘 타기 유리',
      'Informational content gets high saves and works well with the algorithm',
      '情報系コンテンツで保存率が高くアルゴリズムに乗りやすい',
      '信息类内容收藏率高，利于算法推荐',
      '資訊類內容收藏率高，利於演算法推薦',
      'Nội dung thông tin có tỷ lệ lưu cao, thuận lợi với thuật toán',
      'Konten informatif punya tingkat simpan tinggi, bagus untuk algoritma'
    ),
    caution: M(
      '정보만 올리다 보면 개인 색깔이 희미해질 수 있음',
      'Posting only info may blur your personal identity',
      '情報だけ投稿していると個性が薄れる可能性',
      '只发信息可能让个人特色变模糊',
      '只發資訊可能讓個人特色變模糊',
      'Chỉ đăng thông tin có thể làm mờ cá tính cá nhân',
      'Hanya posting info bisa membuat identitas pribadi kabur'
    ),
    influencerGrowthTip: M(
      '리뷰에 당신만의 시각과 개성을 더해보세요. "객관적 정보 + 나다운 감상"이 팔로워를 팬으로 만드는 공식입니다',
      'Add your own perspective and personality to reviews. "Objective info + your personal take" is the formula that turns followers into fans',
      'レビューに自分だけの視点と個性を加えてみて。「客観的情報 + 自分らしい感想」がフォロワーをファンにする公式',
      '在测评中加入你的视角和个性。"客观信息 + 个人感受"是把粉丝变成铁粉的公式',
      '在測評中加入你的視角和個性。「客觀資訊 + 個人感受」是把粉絲變成鐵粉的公式',
      'Thêm góc nhìn và cá tính riêng vào review. "Thông tin khách quan + cảm nhận của bạn" là công thức biến follower thành fan',
      'Tambahkan sudut pandang dan kepribadianmu ke review. "Info objektif + pendapat pribadi" adalah formula mengubah follower jadi fan'
    ),
    personaComboPartnerType: 'Type1',
    personaCombo: M(
      '(당신의 정보 + 상대의 감성 편집 = 저장 폭발 계정)',
      '(Your info + their aesthetic editing = a save-exploding account)',
      '(あなたの情報 + 相手の感性編集 = 保存爆発アカウント)',
      '(你的信息 + 对方的审美编辑 = 收藏爆表的账号)',
      '(你的資訊 + 對方的審美編輯 = 收藏爆表的帳號)',
      '(Thông tin của bạn + chỉnh sửa aesthetic đối phương = tài khoản lưu bùng nổ)',
      '(Infomu + edit estetika lawan = akun dengan simpanan meledak)'
    ),
    oneLineReview: M(
      '당신의 피드는 팔로워들의 다음 주말 계획을 만들어줍니다',
      'Your feed plans your followers next weekend',
      'あなたのフィードはフォロワーの次の週末計画を作ります',
      '你的动态在帮粉丝规划下个周末',
      '你的動態在幫粉絲規劃下個週末',
      'Feed của bạn lên kế hoạch cuối tuần cho follower',
      'Feed-mu merencanakan akhir pekan follower'
    ),
    shareSnippet: M(
      '내 인스타 페르소나는 라이프스타일 탐험가 🗺️ 핫플 가면 위치 태그는 기본. 저장 폴더에 가고 싶은 곳 500개 → 너는 어떤 유형이야?',
      'My Instagram persona is Lifestyle Explorer 🗺️ Location tag is a must at hot spots. 500 saved places I want to visit → What type are you?',
      '私のインスタペルソナはライフスタイル探検家 🗺️ 話題スポットでは位置タグが基本。保存フォルダに行きたい場所500件 → あなたはどのタイプ？',
      '我的Instagram人设是生活方式探索者 🗺️ 去热门打卡地必打位置标签。收藏夹里500个想去的地方 → 你是什么类型？',
      '我的Instagram人設是生活方式探索者 🗺️ 去熱門打卡地必打位置標籤。收藏夾裡500個想去的地方 → 你是什麼類型？',
      'Persona Instagram của tôi là Nhà thám hiểm lifestyle 🗺️ Đến địa điểm hot là tag vị trí. 500 nơi muốn đến trong thư mục lưu → Bạn thuộc type nào?',
      'Persona Instagram-ku Penjelajah lifestyle 🗺️ Ke tempat hits wajib tag lokasi. 500 tempat ingin dikunjungi di folder simpan → Kamu tipe apa?'
    ),
  },
  {
    type: 'Type4',
    emoji: '📱',
    title: M(
      '릴스에 빨려드는, 숏폼 소비 전문가',
      'Sucked into Reels, Short-form Consumption Expert',
      'リールに引き込まれる、ショート動画消費の専門家',
      '被Reels吸走，短视频消费专家',
      '被Reels吸走，短影片消費專家',
      'Bị cuốn vào Reels, Chuyên gia tiêu thụ video ngắn',
      'Terseret Reels, Ahli konsumsi short-form'
    ),
    shortDescription: M(
      '"당신의 인스타는 끝없는 릴스 탐험입니다."',
      '"Your Instagram is an endless Reels adventure."',
      '"あなたのインスタは終わりなきリール探検です。"',
      '"你的Instagram是无尽的Reels探索。"',
      '"你的Instagram是無盡的Reels探索。"',
      '"Instagram của bạn là cuộc phiêu lưu Reels vô tận."',
      '"Instagram-mu adalah petualangan Reels tanpa akhir."'
    ),
    description: M(
      '업로드보다 소비에 훨씬 더 많은 시간을 쓰는 타입입니다. 릴스 한 편이 시작되면 30분이 사라지는 경험이 익숙하고, 재밌는 릴스는 DM으로 친구에게 즉시 공유합니다. 직접 게시물을 올리는 것은 드물지만 팔로워들의 콘텐츠를 가장 열심히 소비하는 충성 독자입니다. 사실 이 타입이 인스타 생태계를 움직이는 숨은 핵심 유저입니다.',
      'You spend far more time consuming than uploading. One Reels and 30 minutes disappear — that feels normal. You instantly DM funny Reels to friends. You rarely post yourself but consume followers content most diligently — a loyal reader. In fact, this type is the hidden core user driving Instagram\'s ecosystem.',
      '投稿より消費にずっと多くの時間を使うタイプです。リール1本で30分が消える経験に慣れ、面白いリールはDMで友達にすぐ共有。自分で投稿することは少ないが、フォロワーのコンテンツを最も熱心に消費する忠実な読者です。実はこのタイプがインスタエコシステムを動かす隠れた核心ユーザーです。',
      '你花在浏览上的时间远多于发帖。一段Reels开始，30分钟就不见了——这很平常。有趣的Reels会立刻私信给朋友。自己很少发，却是最认真消费他人内容的忠实读者。其实这类用户才是推动Instagram生态的隐藏核心。',
      '你花在瀏覽上的時間遠多於發文。一段Reels開始，30分鐘就不見了——這很平常。有趣的Reels會立刻私訊給朋友。自己很少發，卻是最認真消費他人內容的忠實讀者。其實這類用戶才是推動Instagram生態的隱藏核心。',
      'Bạn dành thời gian tiêu thụ nhiều hơn đăng bài rất nhiều. Một Reels bắt đầu là 30 phút biến mất — quen rồi. Reels hay thì DM ngay cho bạn. Hiếm khi tự đăng nhưng tiêu thụ nội dung người khác rất chăm — độc giả trung thành. Thực ra type này là user cốt lõi thúc đẩy hệ sinh thái Instagram.',
      'Kamu habiskan waktu konsumsi jauh lebih banyak dari upload. Satu Reels mulai, 30 menit hilang — sudah biasa. Reels lucu langsung DM ke teman. Jarang posting sendiri tapi paling rajin konsumsi konten orang lain — pembaca setia. Tipe ini sebenarnya user inti tersembunyi yang menggerakkan ekosistem Instagram.'
    ),
    instaPersona: M('숏폼 소비 전문가 📱', 'Short-form Consumption Expert 📱', 'ショート動画消費の専門家 📱', '短视频消费专家 📱', '短影片消費專家 📱', 'Chuyên gia tiêu thụ video ngắn 📱', 'Ahli konsumsi short-form 📱'),
    uploadPattern: M(
      '거의 안 올림. 소비 위주',
      'Rarely post. Mostly consume',
      'ほとんど投稿しない。消費中心',
      '几乎不发。以浏览为主',
      '幾乎不發。以瀏覽為主',
      'Hầu như không đăng. Chủ yếu tiêu thụ',
      'Jarang posting. Mayoritas konsumsi'
    ),
    mainContent: M(
      '릴스·밈·친구 DM 공유',
      'Reels · Memes · Sharing via DM with friends',
      'リール · ミーム · 友達へのDM共有',
      'Reels · 梗图 · 私信分享给朋友',
      'Reels · 迷因 · 私訊分享給朋友',
      'Reels · Meme · Chia sẻ qua DM với bạn',
      'Reels · Meme · Bagikan lewat DM ke teman'
    ),
    mostUsedFeature: M(
      '릴스 탭·DM·탐색 탭',
      'Reels tab · DM · Explore tab',
      'リールタブ · DM · 探索タブ',
      'Reels页 · 私信 · 探索页',
      'Reels頁 · 私訊 · 探索頁',
      'Tab Reels · DM · Tab Khám phá',
      'Tab Reels · DM · Tab Jelajahi'
    ),
    instaGoal: M(
      '재밌는 콘텐츠 발견과 친구 공유',
      'Discover fun content and share with friends',
      '面白いコンテンツの発見と友達への共有',
      '发现有趣内容并分享给朋友',
      '發現有趣內容並分享給朋友',
      'Khám phá nội dung vui và chia sẻ với bạn',
      'Temukan konten seru dan bagikan ke teman'
    ),
    strength: M(
      '트렌드를 가장 먼저 접하고 빠르게 소비',
      'Catch trends first and consume quickly',
      'トレンドを最も早くキャッチし素早く消費',
      '最先接触趋势并快速消费',
      '最先接觸趨勢並快速消費',
      'Tiếp cận xu hướng sớm nhất và tiêu thụ nhanh',
      'Tangkap tren paling dulu dan konsumsi cepat'
    ),
    caution: M(
      '소비만 하다 시간이 사라지는 중독 패턴 주의',
      'Watch out for addictive patterns where time disappears from consumption alone',
      '消費だけで時間が消える依存パターンに注意',
      '注意只刷不看导致时间消失的成瘾模式',
      '注意只滑不看導致時間消失的成癮模式',
      'Cẩn thận kiểu nghiện khi thời gian biến mất chỉ vì tiêu thụ',
      'Waspada pola adiktif saat waktu hilang hanya karena konsumsi'
    ),
    influencerGrowthTip: M(
      '지금 가장 많이 보는 릴스 유형을 직접 만들어보세요. 가장 많이 소비한 장르가 당신이 가장 잘 만들 수 있는 장르입니다',
      'Try making the type of Reels you watch most. The genre you consume most is the one you can create best',
      '今いちばんよく見るリールのタイプを自分で作ってみて。最も消費したジャンルが最も作れるジャンル',
      '试试制作你看得最多的Reels类型。消费最多的类型就是你最擅长创作的类型',
      '試試製作你看得最多的Reels類型。消費最多的類型就是你最擅長創作的類型',
      'Thử tạo loại Reels bạn xem nhiều nhất. Thể loại tiêu thụ nhiều nhất là thể loại bạn tạo giỏi nhất',
      'Coba buat jenis Reels yang paling sering kamu tonton. Genre yang paling banyak dikonsumsi adalah yang paling bisa kamu buat'
    ),
    personaComboPartnerType: 'Type3',
    personaCombo: M(
      '(당신이 저장하는 콘텐츠를 저 사람이 만들고 있음)',
      '(The content you save is made by that person)',
      '(あなたが保存するコンテンツをあの人が作っている)',
      '(你收藏的内容正是那个人在做的)',
      '(你收藏的內容正是那個人在做的)',
      '(Nội dung bạn lưu chính là do người đó tạo)',
      '(Konten yang kamu simpan dibuat oleh orang itu)'
    ),
    oneLineReview: M(
      '당신은 인스타 생태계의 가장 성실한 구독자입니다',
      'You are Instagram ecosystem most diligent subscriber',
      'あなたはインスタエコシステムで最も誠実な購読者です',
      '你是Instagram生态最忠实的订阅者',
      '你是Instagram生態最忠實的訂閱者',
      'Bạn là subscriber chăm chỉ nhất của hệ sinh thái Instagram',
      'Kamu subscriber paling rajin di ekosistem Instagram'
    ),
    shareSnippet: M(
      '내 인스타 페르소나는 숏폼 소비 전문가 📱 릴스 한 편 보다가 한 시간 사라지는 사람 ㅋㅋ → 너는 어떤 인스타 유형이야?',
      'My Instagram persona is Short-form Consumption Expert 📱 One Reels and an hour disappears lol → What type are you?',
      '私のインスタペルソナはショート動画消費の専門家 📱 リール1本見て1時間消える人 笑 → あなたはどのインスタタイプ？',
      '我的Instagram人设是短视频消费专家 📱 看一段Reels一小时就没了 哈哈 → 你是什么类型？',
      '我的Instagram人設是短影片消費專家 📱 看一段Reels一小時就沒了 哈哈 → 你是什麼類型？',
      'Persona Instagram của tôi là Chuyên gia tiêu thụ video ngắn 📱 Xem một Reels mất một tiếng haha → Bạn thuộc type nào?',
      'Persona Instagram-ku Ahli konsumsi short-form 📱 Satu Reels hilang sejam lol → Kamu tipe apa?'
    ),
  },
  {
    type: 'Type5',
    emoji: '💡',
    title: M(
      '팔로워에게 가치를 전달하는, 정보 전달자',
      'Delivering Value to Followers, Information Sharer',
      'フォロワーに価値を届ける、情報伝達者',
      '向粉丝传递价值，信息分享者',
      '向粉絲傳遞價值，資訊分享者',
      'Mang giá trị đến follower, Người chia sẻ thông tin',
      'Memberi nilai ke follower, Penyampai informasi'
    ),
    shortDescription: M(
      '"당신의 인스타는 팔로워에게 실질적인 가치를 주는 채널입니다."',
      '"Your Instagram is a channel that gives followers real value."',
      '"あなたのインスタはフォロワーに実質的な価値を与えるチャンネルです。"',
      '"你的Instagram是给粉丝带来实际价值的频道。"',
      '"你的Instagram是給粉絲帶來實際價值的頻道。"',
      '"Instagram của bạn là kênh mang giá trị thực cho follower."',
      '"Instagram-mu adalah channel yang memberi nilai nyata ke follower."'
    ),
    description: M(
      '재미보다 유용함을 추구하는 타입입니다. 카드뉴스·인포그래픽·전문 정보를 통해 팔로워에게 배움을 주는 것이 인스타의 목적입니다. 인사이트 통계를 주기적으로 확인하고 어떤 콘텐츠가 더 반응이 좋은지 분석합니다. 전문성을 기반으로 한 퍼스널 브랜딩에 가장 적합한 유형이며 B2B 협업이나 강의·컨설팅으로 연결되기 쉬운 계정입니다.',
      'You pursue usefulness over fun. Your Instagram purpose is to teach followers through card news, infographics, and expert info. You regularly check Insights and analyze which content performs better. Best suited for expertise-based personal branding, and easy to connect to B2B collaborations, lectures, or consulting.',
      '楽しさより有用性を追求するタイプです。カードニュース・インフォグラフィック・専門情報でフォロワーに学びを与えることがインスタの目的。インサイト統計を定期的に確認し、どのコンテンツが反応が良いか分析します。専門性ベースのパーソナルブランディングに最適で、B2B協業や講演・コンサルに繋がりやすいアカウントです。',
      '你追求实用而非娱乐。通过卡片新闻·信息图·专业信息给粉丝带来学习是Instagram的目的。定期查看数据洞察并分析哪种内容反响更好。最适合基于专业性的个人品牌，也容易对接B2B合作、讲座或咨询。',
      '你追求實用而非娛樂。透過卡片新聞·資訊圖·專業資訊給粉絲帶來學習是Instagram的目的。定期查看數據洞察並分析哪種內容反響更好。最適合基於專業性的個人品牌，也容易對接B2B合作、講座或諮詢。',
      'Bạn theo đuổi hữu ích hơn vui. Mục đích Instagram là dạy follower qua card news, infographic và thông tin chuyên môn. Thường xuyên xem Insights và phân tích nội dung nào phản hồi tốt hơn. Phù hợp nhất cho personal branding dựa trên chuyên môn, dễ kết nối hợp tác B2B, giảng dạy hoặc tư vấn.',
      'Kamu prioritaskan kegunaan daripada hiburan. Tujuan Instagram adalah mengajar follower lewat card news, infografis, dan info ahli. Rutin cek Insights dan analisis konten mana yang responsnya lebih baik. Paling cocok untuk personal branding berbasis keahlian, mudah terhubung ke kolaborasi B2B, kuliah, atau konsultasi.'
    ),
    instaPersona: M('정보 전달자 💡', 'Information Sharer 💡', '情報伝達者 💡', '信息分享者 💡', '資訊分享者 💡', 'Người chia sẻ thông tin 💡', 'Penyampai informasi 💡'),
    uploadPattern: M(
      '계획적·전략적. 콘텐츠 캘린더 운영',
      'Planned and strategic. Runs a content calendar',
      '計画的・戦略的。コンテンツカレンダー運用',
      '有计划·有策略。运营内容日历',
      '有計畫·有策略。營運內容日曆',
      'Có kế hoạch và chiến lược. Vận hành lịch nội dung',
      'Terencana dan strategis. Jalankan kalender konten'
    ),
    mainContent: M(
      '카드뉴스·인포그래픽·전문 정보 게시물',
      'Card news · Infographics · Expert info posts',
      'カードニュース · インフォグラフィック · 専門情報投稿',
      '卡片新闻 · 信息图 · 专业信息帖子',
      '卡片新聞 · 資訊圖 · 專業資訊貼文',
      'Card news · Infographic · Bài đăng thông tin chuyên môn',
      'Card news · Infografis · Posting info ahli'
    ),
    mostUsedFeature: M(
      '인사이트 분석·저장 폴더·예약 게시',
      'Insights analysis · Saved folders · Scheduled posts',
      'インサイト分析 · 保存フォルダ · 予約投稿',
      '数据洞察 · 收藏夹 · 定时发布',
      '數據洞察 · 收藏夾 · 定時發布',
      'Phân tích Insights · Thư mục lưu · Đăng theo lịch',
      'Analisis Insights · Folder simpan · Jadwal posting'
    ),
    instaGoal: M(
      '전문성 브랜딩 + 신뢰 기반 팔로워 확보',
      'Expertise branding + trust-based follower growth',
      '専門性ブランディング + 信頼ベースのフォロワー獲得',
      '专业品牌塑造 + 基于信任涨粉',
      '專業品牌塑造 + 基於信任漲粉',
      'Xây dựng thương hiệu chuyên môn + follower dựa trên niềm tin',
      'Branding keahlian + pertumbuhan follower berbasis kepercayaan'
    ),
    strength: M(
      '저장률·도달률이 높고 브랜드 협업·강의 연결에 유리',
      'High save and reach rates, good for brand collabs and lectures',
      '保存率・リーチ率が高くブランド協業・講演に有利',
      '收藏率和触达率高，利于品牌合作和讲座',
      '收藏率和觸達率高，利於品牌合作和講座',
      'Tỷ lệ lưu và tiếp cận cao, thuận lợi cho hợp tác thương hiệu và giảng dạy',
      'Tingkat simpan dan jangkauan tinggi, bagus untuk kolaborasi brand dan kuliah'
    ),
    caution: M(
      '정보만 올리다 딱딱하게 느껴질 수 있음. 가끔 인간적인 면을 보여주세요',
      'Posting only info may feel stiff. Show your human side sometimes',
      '情報だけ投稿すると硬く感じられる可能性。時々人間的な一面を見せて',
      '只发信息可能显得生硬。偶尔展现人性化的一面',
      '只發資訊可能顯得生硬。偶爾展現人性化的一面',
      'Chỉ đăng thông tin có thể cảm thấy cứng nhắc. Thỉnh thoảng thể hiện mặt con người',
      'Hanya posting info bisa terasa kaku. Sesekali tunjukkan sisi manusiawi'
    ),
    influencerGrowthTip: M(
      '정보 콘텐츠에 당신의 개인 경험을 1개씩 섞어보세요. "전문가 + 사람"의 조합이 팔로워를 팬으로 만드는 가장 강력한 공식입니다',
      'Mix one personal experience into each info post. "Expert + human" is the most powerful formula to turn followers into fans',
      '情報コンテンツに自分の個人的経験を1つずつ混ぜてみて。「専門家 + 人間」の組み合わせがフォロワーをファンにする最強の公式',
      '每条信息内容加入一点个人经历。"专家 + 人"的组合是把粉丝变成铁粉的最强公式',
      '每條資訊內容加入一點個人經歷。「專家 + 人」的組合是把粉絲變成鐵粉的最強公式',
      'Trộn một trải nghiệm cá nhân vào mỗi bài thông tin. "Chuyên gia + con người" là công thức mạnh nhất biến follower thành fan',
      'Campur satu pengalaman pribadi ke setiap konten info. "Ahli + manusia" adalah formula paling kuat mengubah follower jadi fan'
    ),
    personaComboPartnerType: 'Type2',
    personaCombo: M(
      '(당신의 전문성 + 상대의 진정성 = 신뢰와 친근감을 모두 갖춘 계정)',
      '(Your expertise + their authenticity = an account with both trust and warmth)',
      '(あなたの専門性 + 相手の真正性 = 信頼と親しみを兼ね備えたアカウント)',
      '(你的专业性 + 对方的真实感 = 兼具信任与亲和力的账号)',
      '(你的專業性 + 對方的真實感 = 兼具信任與親和力的帳號)',
      '(Chuyên môn của bạn + sự chân thật đối phương = tài khoản vừa tin cậy vừa gần gũi)',
      '(Keahlianmu + kejujuran lawan = akun dengan kepercayaan dan kehangatan)'
    ),
    oneLineReview: M(
      '당신의 피드를 팔로우하면 배우는 게 생깁니다',
      'Follow your feed and you will learn something',
      'あなたのフィードをフォローすると学びがある',
      '关注你的动态就能学到东西',
      '追蹤你的動態就能學到東西',
      'Follow feed của bạn sẽ học được điều gì đó',
      'Follow feed-mu pasti dapat ilmu'
    ),
    shareSnippet: M(
      '내 인스타 페르소나는 정보 전달자 💡 인사이트 통계 보는 게 취미인 사람. 전문성 브랜딩 중 → 너는 어떤 인스타 유형이야?',
      'My Instagram persona is Information Sharer 💡 Checking Insights stats is my hobby. Building expertise brand → What type are you?',
      '私のインスタペルソナは情報伝達者 💡 インサイト統計を見るのが趣味の人。専門性ブランディング中 → あなたはどのインスタタイプ？',
      '我的Instagram人设是信息分享者 💡 看数据洞察是爱好。正在做专业品牌 → 你是什么类型？',
      '我的Instagram人設是資訊分享者 💡 看數據洞察是愛好。正在做專業品牌 → 你是什麼類型？',
      'Persona Instagram của tôi là Người chia sẻ thông tin 💡 Xem thống kê Insights là sở thích. Đang xây thương hiệu chuyên môn → Bạn thuộc type nào?',
      'Persona Instagram-ku Penyampai informasi 💡 Lihat statistik Insights adalah hobi. Sedang bangun brand keahlian → Kamu tipe apa?'
    ),
  },
  {
    type: 'Type6',
    emoji: '🚀',
    title: M(
      '데이터로 성장을 설계하는, 인플루언서 지망생',
      'Designing Growth with Data, Aspiring Influencer',
      'データで成長を設計する、インフルエンサー志望者',
      '用数据设计成长，准网红',
      '用數據設計成長，準網紅',
      'Thiết kế tăng trưởng bằng dữ liệu, Người muốn làm influencer',
      'Merancang pertumbuhan dengan data, Calon influencer'
    ),
    shortDescription: M(
      '"당신의 인스타는 이미 비즈니스 채널로 운영 중입니다."',
      '"Your Instagram is already running as a business channel."',
      '"あなたのインスタはすでにビジネスチャンネルとして運営中です。"',
      '"你的Instagram已经在当商业频道运营了。"',
      '"你的Instagram已經在當商業頻道運營了。"',
      '"Instagram của bạn đã vận hành như kênh kinh doanh."',
      '"Instagram-mu sudah dijalankan sebagai channel bisnis."'
    ),
    description: M(
      '팔로워 수·도달률·저장 수를 데이터로 분석하며 계정을 전략적으로 키우는 타입입니다. 업로드 시간과 해시태그를 최적화하고, 어떤 콘텐츠가 알고리즘에 유리한지 연구합니다. 협찬이나 브랜드 파트너십을 구체적인 목표로 두고 있으며 인스타를 수익 채널로 전환하는 것이 최종 목적입니다. 가장 전략적이고 성장 가능성이 높은 유형입니다.',
      'You strategically grow your account by analyzing follower count, reach, and saves as data. You optimize upload times and hashtags and study which content works best with the algorithm. Sponsorships and brand partnerships are concrete goals, and turning Instagram into a revenue channel is the end goal. The most strategic type with high growth potential.',
      'フォロワー数・リーチ率・保存数をデータで分析し、アカウントを戦略的に育てるタイプです。投稿時間とハッシュタグを最適化し、どのコンテンツがアルゴリズムに有利か研究します。協賛やブランドパートナーシップを具体的な目標とし、インスタを収益チャンネルにすることが最終目的。最も戦略的で成長可能性が高いタイプです。',
      '你通过数据分析粉丝数·触达率·收藏数，战略性运营账号。优化发布时间和标签，研究哪种内容更利于算法。把赞助和品牌合作当作具体目标，最终目的是把Instagram变成收入渠道。最具战略性、成长潜力最高的类型。',
      '你透過數據分析粉絲數·觸達率·收藏數，戰略性營運帳號。優化發布時間和標籤，研究哪種內容更利於演算法。把贊助和品牌合作當作具體目標，最終目的是把Instagram變成收入渠道。最具戰略性、成長潛力最高的類型。',
      'Bạn phát triển tài khoản chiến lược bằng cách phân tích số follower, tiếp cận và lưu dưới dạng dữ liệu. Tối ưu giờ đăng và hashtag, nghiên cứu nội dung nào thuận lợi với thuật toán. Tài trợ và hợp tác thương hiệu là mục tiêu cụ thể, biến Instagram thành kênh thu nhập là mục đích cuối. Type chiến lược nhất với tiềm năng tăng trưởng cao.',
      'Kamu tumbuhkan akun secara strategis dengan menganalisis jumlah follower, jangkauan, dan simpan sebagai data. Optimalkan waktu upload dan hashtag, pelajari konten mana yang paling cocok dengan algoritma. Sponsorship dan kemitraan brand adalah tujuan konkret, mengubah Instagram jadi channel pendapatan adalah tujuan akhir. Tipe paling strategis dengan potensi pertumbuhan tinggi.'
    ),
    instaPersona: M('인플루언서 지망생 🚀', 'Aspiring Influencer 🚀', 'インフルエンサー志望者 🚀', '准网红 🚀', '準網紅 🚀', 'Người muốn làm influencer 🚀', 'Calon influencer 🚀'),
    uploadPattern: M(
      '계획·분석·최적화. 최고의 타이밍에 최적의 콘텐츠',
      'Plan · Analyze · Optimize. Best content at the best timing',
      '計画 · 分析 · 最適化。最高のタイミングに最適なコンテンツ',
      '计划 · 分析 · 优化。最佳时机发最佳内容',
      '計畫 · 分析 · 優化。最佳時機發最佳內容',
      'Kế hoạch · Phân tích · Tối ưu. Nội dung tốt nhất đúng thời điểm',
      'Rencana · Analisis · Optimasi. Konten terbaik di waktu terbaik'
    ),
    mainContent: M(
      '알고리즘 최적화된 릴스·카드뉴스·라이프스타일',
      'Algorithm-optimized Reels · Card news · Lifestyle',
      'アルゴリズム最適化リール · カードニュース · ライフスタイル',
      '算法优化的Reels · 卡片新闻 · 生活方式',
      '演算法優化的Reels · 卡片新聞 · 生活方式',
      'Reels tối ưu thuật toán · Card news · Lifestyle',
      'Reels dioptimalkan algoritma · Card news · Lifestyle'
    ),
    mostUsedFeature: M(
      '인사이트 분석·릴스·해시태그 리서치',
      'Insights analysis · Reels · Hashtag research',
      'インサイト分析 · リール · ハッシュタグリサーチ',
      '数据洞察 · Reels · 标签研究',
      '數據洞察 · Reels · 標籤研究',
      'Phân tích Insights · Reels · Nghiên cứu hashtag',
      'Analisis Insights · Reels · Riset hashtag'
    ),
    instaGoal: M(
      '팔로워 성장 + 협찬·수익화',
      'Follower growth + sponsorships and monetization',
      'フォロワー成長 + 協賛・収益化',
      '涨粉 + 赞助·变现',
      '漲粉 + 贊助·變現',
      'Tăng follower + tài trợ và kiếm tiền',
      'Pertumbuhan follower + sponsorship dan monetisasi'
    ),
    strength: M(
      '데이터 기반 성장 전략. 가장 빠르게 계정이 성장하는 유형',
      'Data-driven growth strategy. The type that grows accounts fastest',
      'データベースの成長戦略。最も速くアカウントが成長するタイプ',
      '数据驱动的增长策略。账号成长最快的类型',
      '數據驅動的成長策略。帳號成長最快的類型',
      'Chiến lược tăng trưởng dựa trên dữ liệu. Type tài khoản phát triển nhanh nhất',
      'Strategi pertumbuhan berbasis data. Tipe akun tumbuh paling cepat'
    ),
    caution: M(
      '숫자에 너무 집착하면 콘텐츠의 진정성이 떨어질 수 있음',
      'Obsessing over numbers may reduce content authenticity',
      '数字にこだわりすぎるとコンテンツの真正性が下がる可能性',
      '过度关注数字可能降低内容真实感',
      '過度關注數字可能降低內容真實感',
      'Quá chú trọng con số có thể làm giảm tính chân thật của nội dung',
      'Terlalu fokus angka bisa mengurangi keaslian konten'
    ),
    influencerGrowthTip: M(
      '데이터 분석은 유지하되 "이 콘텐츠가 나답나?"를 항상 함께 물어보세요. 알고리즘과 진정성의 균형이 장기적 성장의 핵심입니다',
      'Keep analyzing data but always ask, "Does this content feel like me?" Balance between algorithm and authenticity is key to long-term growth',
      'データ分析は続けつつ「このコンテンツは自分らしい？」を常に問いかけて。アルゴリズムと真正性のバランスが長期成長の鍵',
      '保持数据分析，但始终问"这内容像我吗？"算法与真实感的平衡是长期成长的关键',
      '保持數據分析，但始終問「這內容像我嗎？」演算法與真實感的平衡是長期成長的關鍵',
      'Giữ phân tích dữ liệu nhưng luôn hỏi "Nội dung này có giống tôi không?" Cân bằng thuật toán và chân thật là chìa khóa tăng trưởng dài hạn',
      'Pertahankan analisis data tapi selalu tanya "Apakah konten ini seperti diriku?" Keseimbangan algoritma dan keaslian kunci pertumbuhan jangka panjang'
    ),
    personaComboPartnerType: 'Type1',
    personaCombo: M(
      '(당신의 전략 + 상대의 감성 미학 = 협찬 DM이 쏟아지는 계정)',
      '(Your strategy + their aesthetic = an account flooded with sponsorship DMs)',
      '(あなたの戦略 + 相手の感性美学 = 協賛DMが殺到するアカウント)',
      '(你的策略 + 对方的审美美学 = 赞助私信蜂拥而至的账号)',
      '(你的策略 + 對方的審美美學 = 贊助私訊蜂擁而至的帳號)',
      '(Chiến lược của bạn + thẩm mỹ đối phương = tài khoản DM tài trợ đổ về)',
      '(Strategimu + estetika lawan = akun banjir DM sponsorship)'
    ),
    oneLineReview: M(
      '당신의 인스타는 이미 비즈니스입니다. 조금만 더 가면 됩니다',
      'Your Instagram is already a business. You are almost there',
      'あなたのインスタはすでにビジネスです。あと少しです',
      '你的Instagram已经是生意了。再进一步就好',
      '你的Instagram已經是生意了。再進一步就好',
      'Instagram của bạn đã là kinh doanh rồi. Chỉ cần thêm một chút nữa',
      'Instagram-mu sudah bisnis. Tinggal sedikit lagi'
    ),
    shareSnippet: M(
      '내 인스타 페르소나는 인플루언서 지망생 🚀 업로드 시간 최적화하는 사람 맞음 ㅋㅋ 협찬 DM 기다리는 중 → 너는 어떤 유형이야?',
      'My Instagram persona is Aspiring Influencer 🚀 Yes, I optimize upload times lol waiting for sponsorship DMs → What type are you?',
      '私のインスタペルソナはインフルエンサー志望者 🚀 投稿時間最適化する人そのもの 笑 協賛DM待ち中 → あなたはどのタイプ？',
      '我的Instagram人设是准网红 🚀 没错我在优化发布时间 哈哈 等赞助私信中 → 你是什么类型？',
      '我的Instagram人設是準網紅 🚀 沒錯我在優化發布時間 哈哈 等贊助私訊中 → 你是什麼類型？',
      'Persona Instagram của tôi là Người muốn làm influencer 🚀 Đúng rồi tôi tối ưu giờ đăng haha đang chờ DM tài trợ → Bạn thuộc type nào?',
      'Persona Instagram-ku Calon influencer 🚀 Bener, aku optimasi waktu upload lol nunggu DM sponsorship → Kamu tipe apa?'
    ),
  },
];
