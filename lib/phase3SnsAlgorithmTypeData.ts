/** 나는 어떤 SNS 알고리즘 타입? — 12문항 2지선다(이미지), A=0 B=1, 총점 0~12 */

function L(
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

export interface Phase3SnsAlgorithmTypeQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    image: string;
    label: Record<string, string>;
    score: number;
  }[];
}

export interface Phase3SnsAlgorithmTypeResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  algorithmSubtype: Record<string, string>;
  feedComposition: Record<string, string>;
  saveFolderName: Record<string, string>;
  snsMainActivity: Record<string, string>;
  goodMatch: Record<string, string>;
  badMatch: Record<string, string>;
  shareTypeName: Record<string, string>;
}

export function calculatePhase3SnsAlgorithmTypeResult(scores: number[]): string {
  const total = scores.reduce((a, b) => a + (b ?? 0), 0);
  if (total <= 1) return 'Type1';
  if (total <= 3) return 'Type2';
  if (total <= 6) return 'Type3';
  if (total <= 9) return 'Type4';
  if (total <= 11) return 'Type5';
  return 'Type6';
}

export const phase3SnsAlgorithmTypeQuestions: Phase3SnsAlgorithmTypeQuestion[] = [
  {
    id: 1,
    question: L(
      '피드에 아래 두 게시물이 올라왔다. 어느 쪽을 먼저 클릭하나요?',
      'Two posts show up in your feed—which do you tap first?',
      'フィードに次の2つの投稿が出ました。どちらを先にタップしますか？',
      '动态里出现下面两条帖子，你会先点开哪一条？',
      '動態裡出現下面兩則貼文，你會先點開哪一則？',
      'Trên feed có 2 bài—bạn chạm vào cái nào trước?',
      'Dua posting muncul di feed—yang mana kamu tap dulu?'
    ),
    options: [
      {
        image: 'p3_test_sns_algorithm_type_q1a.jpg',
        label: L(
          '먹음직스러운 음식 사진 (오늘 저녁 레시피, 글 없이 사진만)',
          'Mouth-watering food photos (tonight’s recipe vibe, image only, no caption)',
          '食欲をそそる料理写真（今夜のレシピ感、文章なし・写真のみ）',
          '诱人的美食照片（晚餐食谱感，只有图没有文案）',
          '誘人的美食照片（晚餐食譜感，只有圖沒有文案）',
          'Ảnh món ăn “thèm ngay”（vibe công thức tối nay, chỉ ảnh không chữ）',
          'Foto makanan menggugah selera (nuansa resep malam, hanya foto tanpa teks)'
        ),
        score: 0,
      },
      {
        image: 'p3_test_sns_algorithm_type_q1b.jpg',
        label: L(
          '짧은 텍스트 카드 (공감되는 한 줄 문장, 감성 배경)',
          'Short text card (a relatable one-liner on a soft aesthetic background)',
          '短文テキストカード（心に刺さる一行・落ち着いた背景）',
          '短图文卡片（一句戳心的话，氛围感背景）',
          '短圖文卡片（一句戳心的話，氛圍感背景）',
          'Thẻ chữ ngắn (một câu đồng cảm, nền cảm xúc)',
          'Kartu teks pendek (satu kalimat relate, latar estetik)'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 2,
    question: L(
      '릴스/쇼츠를 볼 때 주로 끝까지 보게 되는 영상은?',
      'On Reels/Shorts, which kind of video do you usually watch to the end?',
      'リール／ショートを見るとき、最後まで見がちなのは？',
      '看短视频/Reels 时，你更常把哪种看到最后？',
      '看短影片／Reels 時，你更常把哪種看到最後？',
      'Xem Reels/Shorts, loại video nào bạn thường xem đến hết?',
      'Saat Reels/Shorts, video macam apa yang sering kamu tonton sampai habis?'
    ),
    options: [
      {
        image: 'p3_test_sns_algorithm_type_q2a.jpg',
        label: L(
          '웃긴 상황극이나 유머 밈 영상',
          'Funny skits or humor / meme clips',
          '面白い寸劇やユーモア・ミーム動画',
          '搞笑小剧场或幽默梗类视频',
          '搞笑小劇場或幽默梗類影片',
          'Hài kịch ngắn hoặc clip meme hài hước',
          'Skenario lucu atau klip meme humor'
        ),
        score: 0,
      },
      {
        image: 'p3_test_sns_algorithm_type_q2b.jpg',
        label: L(
          '진지한 정보 전달 또는 꿀팁 영상',
          'Straight-up explainers or practical tip videos',
          '真面目な解説や役立つTips動画',
          '认真讲知识或实用技巧类视频',
          '認真講知識或實用技巧類影片',
          'Video giải thích nghiêm túc hoặc mẹo hay',
          'Video penjelasan serius atau tips praktis'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 3,
    question: L(
      'SNS에서 저장(북마크) 버튼을 가장 자주 누르는 콘텐츠는?',
      'On social, what do you save (bookmark) most often?',
      'SNSで「保存」ボタンを一番押しがちなのは？',
      '在社交平台上你最常点保存（收藏）的内容是？',
      '在社群上你最常按儲存（收藏）的內容是？',
      'Trên mạng xã hội, bạn hay lưu (bookmark) loại nội dung nào nhất?',
      'Di sosmed, konten apa yang paling sering kamu simpan (bookmark)?'
    ),
    options: [
      {
        image: 'p3_test_sns_algorithm_type_q3a.jpg',
        label: L(
          '감성적인 여행지 사진 (언젠가 가고 싶다)',
          'Dreamy travel shots (“someday I’ll go there”)',
          '旅先の感性フォト（いつか行きたい）',
          '很有氛围的旅行照（想着总有一天要去）',
          '很有氛圍的旅行照（想著總有一天要去）',
          'Ảnh du lịch cảm xúc (“ước gì được đi một lần”)',
          'Foto destinasi estetik (“suatu hari mau ke sana”)'
        ),
        score: 0,
      },
      {
        image: 'p3_test_sns_algorithm_type_q3b.jpg',
        label: L(
          '실용적인 정보 카드 (나중에 써먹을 것 같은 꿀팁)',
          'Practical info cards (tips you might actually use later)',
          '実用的な情報カード（あとで使えそうなコツ）',
          '实用信息卡（感觉以后用得上）',
          '實用資訊卡（感覺以後用得上）',
          'Thẻ thông tin thực dụng (mẹo có thể dùng sau)',
          'Kartu info praktis (tips yang mungkin dipakai nanti)'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 4,
    question: L(
      '알 수도 있는 사람 추천에서 팔로우를 누르게 되는 계정은?',
      'In “people you may know,” which account type makes you hit Follow?',
      '「知り合いかも」のおすめでフォローしがちなのは？',
      '在“可能认识的人”推荐里，你更想关注哪种账号？',
      '在「可能認識的人」推薦裡，你更想追蹤哪種帳號？',
      'Ở gợi ý “có thể quen”, kiểu tài khoản nào khiến bạn bấm theo dõi?',
      'Di saran “orang yang mungkin Anda kenal”, akun seperti apa yang bikin kamu follow?'
    ),
    options: [
      {
        image: 'p3_test_sns_algorithm_type_q4a.jpg',
        label: L(
          '일상을 감성 사진으로 올리는 개인 계정',
          'Personal accounts posting everyday life in aesthetic photos',
          '日常を感性フォトで投稿する個人アカウント',
          '用氛围感照片记录生活的个人账号',
          '用氛圍感照片記錄生活的個人帳號',
          'Cá nhân đăng đời thường bằng ảnh “cảm xúc”',
          'Akun pribadi yang posting keseharian dengan foto estetik'
        ),
        score: 0,
      },
      {
        image: 'p3_test_sns_algorithm_type_q4b.jpg',
        label: L(
          '특정 분야 전문 지식을 카드뉴스로 올리는 계정',
          'Accounts posting niche expertise as carousel / infographic cards',
          '専門分野の知識をカード形式で出すアカウント',
          '用图文卡讲某一领域干货的账号',
          '用圖文卡講某一領域乾貨的帳號',
          'Tài khoản chuyên đăng kiến thức dạng thẻ/infographic',
          'Akun yang posting pengetahuan bidang tertentu dalam format kartu'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 5,
    question: L(
      '친구가 공유해준 링크, 어느 쪽을 더 빨리 클릭하게 되나요?',
      'A friend drops a link—which one are you more likely to open first?',
      '友だちが送ったリンク、どちらを先に開きがち？',
      '朋友分享的链接，你更可能先点开哪一个？',
      '朋友分享的連結，你更可能先點開哪一個？',
      'Bạn gửi link—bạn hay mở cái nào trước?',
      'Teman kirim link—yang mana lebih dulu kamu buka?'
    ),
    options: [
      {
        image: 'p3_test_sns_algorithm_type_q5a.jpg',
        label: L(
          '"이거 너무 웃겨 ㅋㅋㅋ" 와 함께 온 유머 영상',
          'A funny clip with a “this is hilarious lol” vibe',
          '「これウケるw」系のユーモラス動画',
          '配着“笑死我了哈哈哈”那种搞笑视频',
          '配著「笑死我了哈哈哈」那種搞笑影片',
          'Video hài kèm kiểu “cười xỉu luôn”',
          'Video lucu dengan caption “ini ngakak banget wkwk”'
        ),
        score: 0,
      },
      {
        image: 'p3_test_sns_algorithm_type_q5b.jpg',
        label: L(
          '"이거 진짜 신기해" 와 함께 온 신기한 사실 영상',
          'A “wow, that’s wild” facts / curiosity clip',
          '「これヤバい」系の驚き・雑学動画',
          '配着“这也太神奇了”那种猎奇/知识视频',
          '配著「這也太神奇了」那種獵奇／知識影片',
          'Video kiến thức / sự thật “ủa sao lạ vậy”',
          'Video fakta menarik dengan “ini seriusan?”'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 6,
    question: L(
      '내가 직접 콘텐츠를 올린다면 주로 어떤 형태인가요?',
      'If you post yourself, what format do you lean toward?',
      '自分で投稿するなら、どんな形が多い？',
      '如果你自己发动态，更常是哪种形式？',
      '如果你自己發動態，更常是哪種形式？',
      'Nếu tự đăng nội dung, bạn thường theo format nào?',
      'Kalau kamu yang posting, format apa yang paling sering?'
    ),
    options: [
      {
        image: 'p3_test_sns_algorithm_type_q6a.jpg',
        label: L(
          '일상 사진이나 음식 사진 (분위기 있게 찍은 피드용)',
          'Lifestyle or food photos (styled for the feed)',
          '日常・料理写真（フィード映えする雰囲気）',
          '生活或美食照（为动态氛围精心拍）',
          '生活或美食照（為動態氛圍精心拍）',
          'Ảnh đời sống / đồ ăn (chỉnh để feed “đẹp vibe”)',
          'Foto daily / makanan (dipadukan untuk feed estetik)'
        ),
        score: 0,
      },
      {
        image: 'p3_test_sns_algorithm_type_q6b.jpg',
        label: L(
          '텍스트 위주의 내 생각이나 후기 (글로 표현하는 스타일)',
          'Text-first thoughts or reviews (you express in writing)',
          'テキスト中心の感想・レビュー（文章で表現）',
          '以文字为主的想法或测评（偏写作表达）',
          '以文字為主的想法或評測（偏寫作表達）',
          'Chủ yếu chữ: suy nghĩ / review (thích viết)',
          'Utama teks: opini atau review (gaya menulis)'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 7,
    question: L(
      '광고 콘텐츠인데 그냥 끝까지 보게 되는 광고는?',
      'It’s an ad—but which kind do you still watch all the way through?',
      '広告なのに最後まで見てしまうのは？',
      '明明是广告，哪种你还会看完？',
      '明明是廣告，哪種你還會看完？',
      'Dù là quảng cáo, loại nào bạn vẫn xem hết?',
      'Meskipun iklan, jenis mana yang tetap kamu tonton sampai habis?'
    ),
    options: [
      {
        image: 'p3_test_sns_algorithm_type_q7a.jpg',
        label: L(
          '감성적인 브랜드 스토리 영상 (눈물 찔끔 나오는 광고)',
          'Emotional brand story ads (the ones that get you misty)',
          '感情に刺さるブランドストーリー広告（うるっとする系）',
          '走心的品牌故事广告（有点想落泪那种）',
          '走心的品牌故事廣告（有點想落淚那種）',
          'Quảng cáo kể chuyện thương hiệu cảm động (rưng rưng)',
          'Iklan cerita brand yang bikin haru / berkaca-kaca'
        ),
        score: 0,
      },
      {
        image: 'p3_test_sns_algorithm_type_q7b.jpg',
        label: L(
          '제품 효과를 직접 비교해주는 비포/애프터 영상',
          'Before/after demos that clearly compare product results',
          '効果を比べるビフォーアフター系の商品動画',
          '直观对比产品效果的前后对比视频',
          '直觀對比產品效果的前後對比影片',
          'Video before/after so sánh hiệu quả sản phẩm',
          'Video before/after yang jelas bandingkan hasil produk'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 8,
    question: L(
      '팔로우하는 계정 중 가장 많은 비중을 차지하는 유형은?',
      'Among accounts you follow, which type takes the biggest share?',
      'フォロー中のアカウントで一番多いのはどのタイプ？',
      '你关注的账号里，哪一类占比最高？',
      '你追蹤的帳號裡，哪一類占比最高？',
      'Trong các tài khoản bạn follow, loại nào chiếm tỉ lệ lớn nhất?',
      'Di akun yang kamu follow, tipe mana paling dominan?'
    ),
    options: [
      {
        image: 'p3_test_sns_algorithm_type_q8a.jpg',
        label: L(
          '연예인, 인플루언서, 크리에이터 (엔터테인먼트 계정들)',
          'Celebrities, influencers, creators (entertainment-heavy)',
          '芸能人・インフルエンサー・クリエイター（エンタメ系）',
          '明星、网红、创作者（偏娱乐向）',
          '明星、網紅、創作者（偏娛樂向）',
          'Nghệ sĩ, influencer, creator (giải trí)',
          'Artis, influencer, kreator (hiburan)'
        ),
        score: 0,
      },
      {
        image: 'p3_test_sns_algorithm_type_q8b.jpg',
        label: L(
          '관심 분야 전문가, 취미 계정, 정보성 계정',
          'Experts in your interests, hobby accounts, info-first pages',
          '分野の専門家・趣味アカウント・情報系',
          '兴趣领域专家、爱好账号、偏信息类账号',
          '興趣領域專家、愛好帳號、偏資訊類帳號',
          'Chuyên gia lĩnh vực, tài khoản sở thích, kiểu thông tin',
          'Ahli bidang, akun hobi, akun berorientasi info'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 9,
    question: L(
      'SNS를 하다가 가장 시간 가는 줄 모르는 순간은?',
      'When does time disappear fastest while you’re on social?',
      'SNSで一番「あっという間」になるのは？',
      '刷社交软件时，哪种情况最让你不知不觉很久？',
      '滑社群時，哪種情況最讓你不知不覺很久？',
      'Lúc nào lướt mạng xã hội là “mất thời gian” nhất?',
      'Saat scrolling sosmed, momen mana yang bikin waktu cepat habis?'
    ),
    options: [
      {
        image: 'p3_test_sns_algorithm_type_q9a.jpg',
        label: L(
          '귀여운 동물 영상이 끝없이 이어질 때',
          'When cute animal videos keep coming one after another',
          '可愛い動物動画が止まらないとき',
          '可爱动物视频一个接一个停不下来',
          '可愛動物影片一個接一個停不下來',
          'Clip thú cưng dễ thương nối tiếp mãi',
          'Video hewan lucu yang terus muncul tanpa henti'
        ),
        score: 0,
      },
      {
        image: 'p3_test_sns_algorithm_type_q9b.jpg',
        label: L(
          '흥미로운 주제의 댓글 논쟁을 구경할 때',
          'When you’re reading spicy comment debates on an interesting topic',
          '面白いテーマのコメント論争を読み耽るとき',
          '围观某个话题下激烈的评论区争论',
          '圍觀某個話題下激烈的留言區爭論',
          'Đọc tranh luận dưới comment về chủ đề thú vị',
          'Baca perdebatan komentar soal topik menarik'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 10,
    question: L(
      '트렌딩 해시태그를 봤을 때 클릭하게 되는 것은?',
      'When you see trending hashtags, which cluster do you click?',
      'トレンドのハッシュタグを見たとき、どちらをタップしがち？',
      '看到热门话题标签时，你更想点哪一类？',
      '看到熱門話題標籤時，你更想點哪一類？',
      'Khi thấy hashtag trending, bạn hay bấm nhóm nào?',
      'Saat lihat hashtag trending, kamu lebih suka klik yang mana?'
    ),
    options: [
      {
        image: 'p3_test_sns_algorithm_type_q10a.jpg',
        label: L(
          '#오늘뭐먹었 #일상 #감성 처럼 라이프스타일 태그',
          'Lifestyle tags like #whatIate #daily #aesthetic',
          '#今日のごはん #日常 #感性 みたいなライフスタイル系',
          '像 #今天吃了啥 #日常 #氛围感 这种生活方式类',
          '像 #今天吃了啥 #日常 #氛圍感 這種生活方式類',
          'Hashtag lifestyle kiểu #ăn_gì_hôm_nay #đời_thường #aesthetic',
          'Tag lifestyle seperti #makankapanhariini #daily #aesthetic'
        ),
        score: 0,
      },
      {
        image: 'p3_test_sns_algorithm_type_q10b.jpg',
        label: L(
          '#재테크 #자기계발 #꿀팁 처럼 정보성 태그',
          'Info-first tags like #personalfinance #selfimprovement #tips',
          '#資産形成 #自己啓発 #豆知識 みたいな情報系',
          '像 #理财 #自我提升 #干货 这种偏信息类',
          '像 #理財 #自我提升 #乾貨 這種偏資訊類',
          'Hashtag kiểu #tài_chính_cá_nhân #phát_triển_bản_thân #mẹo_hay',
          'Tag info seperti #keuanganpribadi #pengembangandiri #tips'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 11,
    question: L(
      '댓글을 달거나 반응하고 싶어지는 게시물은?',
      'Which posts make you want to comment or react?',
      'コメントや反応したくなる投稿は？',
      '哪种帖子会让你想评论或互动？',
      '哪種貼文會讓你想留言或互動？',
      'Bài nào khiến bạn muốn bình luận hoặc tương tác?',
      'Posting mana yang bikin kamu mau komentar atau bereaksi?'
    ),
    options: [
      {
        image: 'p3_test_sns_algorithm_type_q11a.jpg',
        label: L(
          '공감 폭발하는 일상 짤 ("이거 나잖아 ㅋㅋ")',
          'Ultra-relatable daily memes (“that’s literally me lol”)',
          '共感爆発の日常ネタ（「それわたしw」）',
          '共鸣很强的日常梗图（“这不就是我吗哈哈”）',
          '共鳴很強的日常梗圖（「這不就是我嗎哈哈」）',
          'Meme đời thường “đúng là mình luôn”',
          'Meme keseharian yang sangat relate (“ini gue banget wkwk”)'
        ),
        score: 0,
      },
      {
        image: 'p3_test_sns_algorithm_type_q11b.jpg',
        label: L(
          '내 의견을 말하고 싶어지는 사회적 이슈나 논쟁거리',
          'Social issues or debates where you want to weigh in',
          '意見を言いたくなる社会問題・論争ネタ',
          '让你想发表观点的社会议题或争论向内容',
          '讓你想發表觀點的社會議題或爭論向內容',
          'Chủ đề xã hội / tranh luận khiến bạn muốn nói lên quan điểm',
          'Isu sosial atau debat yang bikin kamu ingin menyampaikan pendapat'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 12,
    question: L(
      'SNS 알림을 켜둔 계정이 있다면 어떤 유형인가요?',
      'If you turn on notifications for any accounts, which type are they?',
      '通知をオンにしているアカウントがあるとしたら？',
      '如果你会给某些账号开通知，更可能是哪一类？',
      '如果你會給某些帳號開通知，更可能是哪一類？',
      'Nếu bật thông báo cho vài tài khoản, đó thường là kiểu nào?',
      'Kalau kamu nyalakan notifikasi untuk beberapa akun, biasanya tipe apa?'
    ),
    options: [
      {
        image: 'p3_test_sns_algorithm_type_q12a.jpg',
        label: L(
          '좋아하는 크리에이터나 인플루언서 (콘텐츠 놓치기 싫어서)',
          'Favorite creators / influencers (you don’t want to miss posts)',
          '好きなクリエイター・インフル（見逃したくない）',
          '喜欢的创作者或网红（怕错过更新）',
          '喜歡的創作者或網紅（怕錯過更新）',
          'Creator / influencer yêu thích (sợ bỏ lỡ nội dung)',
          'Kreator / influencer favorit (takut ketinggalan konten)'
        ),
        score: 0,
      },
      {
        image: 'p3_test_sns_algorithm_type_q12b.jpg',
        label: L(
          '관심 분야 뉴스나 정보 계정 (빠르게 정보 얻고 싶어서)',
          'News or info accounts in topics you care about (speed matters)',
          '関心分野のニュース・情報アカウント（早く知りたい）',
          '关心领域的新闻或资讯号（想第一时间知道）',
          '關心領域的新聞或資訊號（想第一時間知道）',
          'Tin tức / kênh info lĩnh vực quan tâm (muốn biết nhanh)',
          'Akun berita / info bidang minat (ingin tahu cepat)'
        ),
        score: 1,
      },
    ],
  },
];

export const phase3SnsAlgorithmTypeResults: Phase3SnsAlgorithmTypeResult[] = [
  {
    type: 'Type1',
    emoji: '🌸',
    title: L(
      '감성과 일상에 취하는, 무드 피드 수집가',
      'Lost in vibes & daily life—a mood-feed collector',
      '感性と日常に浸る、ムードフィード収集家',
      '沉浸在氛围与日常里的“心情动态”收集者',
      '沉浸在氛圍與日常裡的「心情動態」收集者',
      'Chìm trong vibe & đời thường—người sưu tầm feed “mood”',
      'Tenggelam dalam vibe & keseharian—kolektor feed bernuansa'
    ),
    shortDescription: L(
      '피드가 곧 나의 일기장이자 무드보드입니다.',
      'Your feed is basically your diary and mood board.',
      'フィードは日記でありムードボード。',
      '你的动态就像日记和情绪板。',
      '你的動態就像日記和情緒板。',
      'Feed của bạn như nhật ký và mood board.',
      'Feed-mu seperti diary dan mood board.'
    ),
    description: L(
      '당신의 알고리즘은 감성, 음식, 일상, 여행 사진들로 가득 차 있습니다. 정보보다는 분위기, 논리보다는 감성에 반응하는 타입입니다. 아름다운 풍경 사진 앞에서 저장 버튼을 참지 못하고, 잘 찍은 음식 사진 하나에 갑자기 배고파지는 사람입니다. SNS를 통해 일상의 작은 아름다움을 수집하고, 그 감성을 내 피드에 가득 채우는 것이 가장 큰 즐거움입니다.',
      'Your algorithm is packed with mood, food, everyday moments, and travel shots. You react to atmosphere more than facts—and feeling more than logic. You can’t resist saving a beautiful landscape, and one well-plated dish can suddenly make you hungry. Your biggest joy is collecting small beauties from daily life and filling your feed with that energy.',
      'あなたのアルゴリズムは感性・グルメ・日常・旅の写真で満ちています。情報より雰囲気、論理より感覚に反応するタイプ。美しい風景の前では保存ボタンを押さずにいられず、うまく撮れた料理写真一枚で急にお腹が空く人。SNSで日常の小さな美しさを集め、フィードを感性で満たすことが最大の楽しみです。',
      '你的推荐流充满氛围感、美食、日常与旅行画面。你更容易被气氛打动，而不是冷冰冰的信息。看到绝美风景就忍不住点保存，一张拍得好的美食照也能让你突然饿起来。在社交平台上收集生活里的小美好，并用它们填满自己的动态，是你最大的乐趣。',
      '你的推薦流充滿氛圍感、美食、日常與旅行畫面。你更容易被打動的是氣氛，而不是冷冰冰的資訊。看到絕美風景就忍不住按儲存，一張拍得好的美食照也能讓你突然餓起來。在社群上收集生活裡的小美好，並用它們填滿自己的動態，是你最大的樂趣。',
      'Thuật toán của bạn đầy cảm xúc, đồ ăn, khoảnh khắc đời thường và ảnh du lịch. Bạn nhạy với “không khí” hơn là thông tin khô khan. Bạn khó cưỡng lưu một khung cảnh đẹp, và một tấm đồ ăn được chụp khéo có thể khiến bạn đói bất chợt. Niềm vui lớn nhất là thu thập những điều nhỏ đẹp trong ngày và lấp đầy feed bằng cảm xúc đó.',
      'Algoritmamu penuh suasana, makanan, momen sehari-hari, dan foto perjalanan. Kamu lebih peka pada “vibe” daripada fakta kering. Kamu sulit menolak menyimpan pemandangan indah, dan satu foto makanan yang apik bisa tiba-tiba bikin lapar. Kegembiraan terbesarmu adalah mengumpulkan keindahan kecil dari hari-hari dan memenuhi feed dengan perasaan itu.'
    ),
    algorithmSubtype: L(
      '무드 수집가 (Mood Curator)',
      'Mood Curator',
      'ムードキュレーター',
      '氛围策展人',
      '氛圍策展人',
      'Curator tâm trạng',
      'Kurator mood'
    ),
    feedComposition: L(
      '감성 사진 60% / 음식·여행 30% / 일상 공감 10%',
      'Mood photos 60% / food & travel 30% / relatable daily life 10%',
      '感性フォト60%／グルメ・旅30%／日常の共感10%',
      '氛围感照片 60% / 美食与旅行 30% / 日常共鸣 10%',
      '氛圍感照片 60% / 美食與旅行 30% / 日常共鳴 10%',
      'Ảnh cảm xúc 60% / đồ ăn & du lịch 30% / đời thường dễ đồng cảm 10%',
      'Foto mood 60% / makanan & travel 30% / daily relate 10%'
    ),
    saveFolderName: L(
      '"언젠가", "가고 싶다", "먹고 싶다"',
      'Folders like “Someday,” “Want to go,” “Want to eat”',
      '「いつか」「行きたい」「食べたい」',
      '收藏夹名字像：“总有一天”“想去”“想吃”',
      '收藏夾名字像：「總有一天」「想去」「想吃」',
      'Tên thư mục kiểu: “Một ngày nào đó”, “Muốn đi”, “Muốn ăn”',
      'Nama folder seperti: “Suatu hari”, “Pengen ke sana”, “Pengen makan ini”'
    ),
    snsMainActivity: L(
      '인스타그램 감성 피드, 핀터레스트',
      'Aesthetic Instagram feeds, Pinterest',
      'インスタの感性フィード、Pinterest',
      '氛围感 Instagram、Pinterest',
      '氛圍感 Instagram、Pinterest',
      'Instagram “aesthetic”, Pinterest',
      'Instagram estetik, Pinterest'
    ),
    goodMatch: L(
      'Type 2 (공감 콘텐츠와 감성이 잘 섞임)',
      'Type 2 (relatable content mixes well with your moody feed)',
      'Type 2（共感コンテンツと感性が相性◎）',
      'Type 2（共鸣类内容与氛围感很搭）',
      'Type 2（共鳴類內容與氛圍感很搭）',
      'Type 2 (nội dung đồng cảm hợp vibe cảm xúc của bạn)',
      'Type 2 (konten relate cocok dengan feed berperasaanmu)'
    ),
    badMatch: L(
      'Type 6 (정보 폭탄이 감성 피드를 망친다고 느낌)',
      'Type 6 (an everything-feed can feel like it “ruins” your soft vibe)',
      'Type 6（情報だらけだと感性フィードが壊れる感じ）',
      'Type 6（信息太杂时会觉得破坏了氛围感）',
      'Type 6（資訊太雜時會覺得破壞了氛圍感）',
      'Type 6 (feed “tất cả mọi thứ” dễ làm bạn thấy phá vibe)',
      'Type 6 (feed “segala hal” terasa merusak suasana halusmu)'
    ),
    shareTypeName: L(
      '무드 피드 수집가',
      'Mood-feed collector',
      'ムードフィード収集家',
      '心情动态收集者',
      '心情動態收集者',
      'Người sưu tầm feed cảm xúc',
      'Kolektor feed mood'
    ),
  },
  {
    type: 'Type2',
    emoji: '😂',
    title: L(
      '공감 하나로 세상과 연결되는, 밈 & 공감 전문가',
      'Connected to the world through vibes—meme & relatability pro',
      '共感一つで世界とつながる、ミーム＆共感のプロ',
      '靠共鸣和世界相连——梗图与共情达人',
      '靠共鳴和世界相連——梗圖與共情達人',
      'Kết nối thế giới bằng đồng cảm—bậc thầy meme & relate',
      'Terhubung lewat empati—ahli meme & konten relate'
    ),
    shortDescription: L(
      '"이거 나잖아 ㅋㅋ" 라는 말을 하루에 열 번은 합니다.',
      'You probably say “that’s literally me lol” like ten times a day.',
      '「それわたしw」と一日に何度も言いそう。',
      '你可能一天要说好几次“这不就是我吗哈哈”。',
      '你可能一天要說好幾次「這不就是我嗎哈哈」。',
      'Bạn hay nói kiểu “đúng là mình luôn haha” cả chục lần một ngày.',
      'Kamu sering bilang “ini gue banget wkwk” berkali-kali sehari.'
    ),
    description: L(
      '당신의 알고리즘은 유머, 밈, 공감 짤로 도배되어 있습니다. 웃긴 영상 하나에 멈추면 그다음부터 비슷한 영상이 끝없이 이어지고, 어느새 한 시간이 사라집니다. "이거 너무 웃겨" 하고 친구에게 공유하는 것이 반사 행동처럼 되어있는 타입입니다. SNS에서 웃음과 공감을 가장 중요한 가치로 두는 소셜형 알고리즘입니다.',
      'Your algorithm is flooded with humor, memes, and relatable posts. Pause on one funny clip and similar ones keep coming—suddenly an hour is gone. Sending “this is so funny” to friends is almost a reflex. On social, you treat laughter and relatability as top values.',
      'あなたのアルゴリズムはユーモア・ミーム・共感ネタだらけ。面白動画で止まると似たようなのが延々続き、気づけば1時間。友だちに「これウケる」と送るのが反射になっているタイプ。SNSでは笑いと共感を最上位の価値に置くソーシャル型です。',
      '你的推荐流被幽默、梗图和共鸣内容填满。一旦停在搞笑视频上，后面就会源源不断，不知不觉一小时没了。把“太好笑了”转发给朋友几乎成了条件反射。在社交里，你把笑声和共鸣当成最重要的价值。',
      '你的推薦流被幽默、梗圖與共鳴內容填滿。一旦停在搞笑影片上，後面就會源源不絕，不知不覺一小時沒了。把「太好笑了」轉發給朋友幾乎成了條件反射。在社群裡，你把笑聲與共鳴當成最重要的價值。',
      'Thuật toán của bạn tràn ngập hài, meme và nội dung dễ đồng cảm. Dừng lại ở một clip vui là hàng loạt clip tương tự kéo đến—một tiếng trôi mất. Gửi bạn bè kiểu “cười xỉu” gần như phản xạ. Trên mạng xã hội, bạn đặt tiếng cười và sự đồng cảm lên hàng đầu.',
      'Algoritmamu dipenuhi humor, meme, dan konten relate. Berhenti di satu video lucu lalu video serupa terus datang—tiba-tiba satu jam hilang. Mengirim “ini lucu banget” ke teman hampir refleks. Di sosmed, kamu menjadikan tawa dan empati nilai utama.'
    ),
    algorithmSubtype: L(
      '공감 & 밈 전문가 (Meme Lord)',
      'Meme Lord (relatability & humor)',
      '共感＆ミームのプロ（Meme Lord）',
      '共鸣与梗图达人',
      '共鳴與梗圖達人',
      'Bậc thầy meme (humor & đồng cảm)',
      'Ahli meme (humor & empati)'
    ),
    feedComposition: L(
      '유머 밈 40% / 공감 짤 30% / 유튜브 쇼츠·릴스 30%',
      'Humor memes 40% / relatable posts 30% / YouTube Shorts & Reels 30%',
      'ユーモア・ミーム40%／共感ネタ30%／Shorts・リール30%',
      '幽默梗 40% / 共鸣内容 30% / YouTube Shorts 与 Reels 30%',
      '幽默梗 40% / 共鳴內容 30% / YouTube Shorts 與 Reels 30%',
      'Meme hài 40% / nội dung relate 30% / Shorts & Reels 30%',
      'Meme humor 40% / konten relate 30% / Shorts & Reels 30%'
    ),
    saveFolderName: L(
      '"나중에 써먹을 밈", "보내줄 것들"',
      'Folders like “Memes for later,” “Stuff to send friends”',
      '「あとで使うミーム」「送る用」',
      '收藏夹像：“以后用的梗”“要发给朋友的”',
      '收藏夾像：「以後用的梗」「要發給朋友的」',
      'Thư mục kiểu: “Meme để dùng sau”, “Gửi bạn bè”',
      'Folder seperti: “Meme buat nanti”, “Buat dikirim ke teman”'
    ),
    snsMainActivity: L(
      '트위터·X, 유튜브 쇼츠, 인스타그램 릴스',
      'X (Twitter), YouTube Shorts, Instagram Reels',
      'X（旧Twitter）、YouTube Shorts、Instagramリール',
      'X（推特）、YouTube Shorts、Instagram Reels',
      'X（推特）、YouTube Shorts、Instagram Reels',
      'X, YouTube Shorts, Instagram Reels',
      'X, YouTube Shorts, Instagram Reels'
    ),
    goodMatch: L(
      'Type 1 (감성과 유머가 만나면 최고의 피드)',
      'Type 1 (mood + humor makes a perfect feed combo)',
      'Type 1（感性×ユーモアで最高フィード）',
      'Type 1（氛围感 + 幽默 = 绝佳动态组合）',
      'Type 1（氛圍感 + 幽默 = 絕佳動態組合）',
      'Type 1 (cảm xúc + hài = combo feed cực đỉnh)',
      'Type 1 (mood + humor = combo feed terbaik)'
    ),
    badMatch: L(
      'Type 5 (진지한 콘텐츠가 피드에 뜨면 스크롤 패스)',
      'Type 5 (overly serious posts make you scroll past fast)',
      'Type 5（真面目すぎる投稿はスクロールでスルー）',
      'Type 5（太严肃的内容出现就想快速滑走）',
      'Type 5（太嚴肅的內容出現就想快速滑走）',
      'Type 5 (nội dung quá “nghiêm túc” là bạn lướt qua)',
      'Type 5 (konten terlalu serius bikin kamu skip cepat)'
    ),
    shareTypeName: L(
      '밈 & 공감 전문가',
      'Meme & relatability pro',
      'ミーム＆共感のプロ',
      '梗图与共情达人',
      '梗圖與共情達人',
      'Chuyên gia meme & đồng cảm',
      'Ahli meme & empati'
    ),
  },
  {
    type: 'Type3',
    emoji: '📡',
    title: L(
      '트렌드라면 일단 클릭, 유행 레이더 안테나',
      'If it’s trending, you click first—trend radar always on',
      'トレンドならまずタップ、流行レーダー全開',
      '只要是热点就先点——流行雷达常开',
      '只要是熱點就先點——流行雷達常開',
      'Có trend là bấm trước—radar xu hướng luôn bật',
      'Kalau lagi tren langsung klik—radar tren selalu nyala'
    ),
    shortDescription: L(
      '핫한 거라면 일단 확인은 해봐야 직성이 풀립니다.',
      'If something’s hot, you have to check it or you can’t relax.',
      'バズってるものは確認しないと気が済まない。',
      '不热点确认一下就不舒服。',
      '不熱點確認一下就不舒服。',
      'Chuyện đang hot mà không xem thì không yên tâm.',
      'Yang lagi viral harus dicek dulu baru tenang.'
    ),
    description: L(
      '당신의 알고리즘은 지금 이 순간 가장 뜨고 있는 것들로 채워집니다. 트렌딩 해시태그, 급상승 영상, 지금 모두가 보고 있는 콘텐츠. 남보다 먼저 새로운 트렌드를 발견하고, 주변에 공유하는 것에서 쾌감을 느끼는 타입입니다. 대화할 때 "요즘 이거 유행이잖아"를 자주 쓰고, SNS 트렌드를 오프라인 대화로 연결하는 능력이 뛰어납니다.',
      'Your algorithm is filled with what’s blowing up right now: trending hashtags, rising videos, what everyone is watching. You get a kick out of spotting new trends early and sharing them. You often say “this is trending lately,” and you’re great at bringing online trends into real-life conversation.',
      'あなたのアルゴリズムは「いま一番熱いもの」で満ちています。トレンドタグ、急上昇動画、みんなが見てるコンテンツ。人より先に新しい流行を見つけて共有するのが快感。「最近これ流行ってるよね」が口癖で、SNSトレンドをオフライン会話に繋ぐのが得意です。',
      '你的推荐流被当下最热的内容填满：热门标签、飙升视频、大家都在看的东西。你喜欢比别人更早发现新趋势并分享出去。聊天时常说“最近这个很火吧”，也很擅长把线上热点带到线下话题里。',
      '你的推薦流被當下最熱的內容填滿：熱門標籤、飆升影片、大家都在看的東西。你喜歡比別人更早發現新趨勢並分享出去。聊天時常說「最近這個很火吧」，也很擅長把線上熱點帶到線下話題裡。',
      'Thuật toán của bạn đầy thứ đang “nóng” lúc này: hashtag trending, video đang leo top, nội dung mọi người đang xem. Bạn thích phát hiện trend sớm và chia sẻ. Bạn hay nói “dạo này cái này đang trend,” và giỏi đưa trend mạng vào chuyện ngoài đời.',
      'Algoritmamu penuh hal yang sedang panas: hashtag trending, video naik daun, konten yang lagi ramai. Kamu senang menemukan tren lebih dulu dan membagikannya. Kamu sering bilang “lagi viral nih,” dan jago menghubungkan tren online ke obrolan nyata.'
    ),
    algorithmSubtype: L(
      '유행 레이더 (Trend Chaser)',
      'Trend Chaser',
      'トレンドチェイサー',
      '趋势追逐者',
      '趨勢追逐者',
      'Người săn trend',
      'Pengejar tren'
    ),
    feedComposition: L(
      '트렌딩 콘텐츠 50% / 엔터테인먼트 30% / 라이프스타일 20%',
      'Trending content 50% / entertainment 30% / lifestyle 20%',
      'トレンド系50%／エンタメ30%／ライフスタイル20%',
      '热点内容 50% / 娱乐 30% / 生活方式 20%',
      '熱點內容 50% / 娛樂 30% / 生活方式 20%',
      'Nội dung trending 50% / giải trí 30% / lifestyle 20%',
      'Konten trending 50% / hiburan 30% / lifestyle 20%'
    ),
    saveFolderName: L(
      '"요즘 핫한 것들", "공유할 것"',
      'Folders like “Hot right now,” “To share”',
      '「今バズってる」「共有用」',
      '收藏夹像：“最近很火的”“要分享的”',
      '收藏夾像：「最近很火的」「要分享的」',
      '“Đang hot”, “Để share”',
      '“Lagi viral”, “Buat dibagikan”'
    ),
    snsMainActivity: L(
      '인스타그램 탐색, 유튜브 트렌딩, 틱톡',
      'Instagram Explore, YouTube Trending, TikTok',
      'インスタの探索、YouTubeトレンド、TikTok',
      'Instagram 探索、YouTube 热门、TikTok',
      'Instagram 探索、YouTube 熱門、TikTok',
      'Instagram Khám phá, YouTube Trending, TikTok',
      'Instagram Explore, YouTube Trending, TikTok'
    ),
    goodMatch: L(
      'Type 2 (트렌드 밈이 합쳐지면 최강 조합)',
      'Type 2 (trending memes + you = unbeatable combo)',
      'Type 2（トレンド×ミームで最強コンビ）',
      'Type 2（热点梗图叠加上你 = 最强组合）',
      'Type 2（熱點梗圖疊加上你 = 最強組合）',
      'Type 2 (meme trend + bạn = combo mạnh nhất)',
      'Type 2 (meme viral + kamu = combo terkuat)'
    ),
    badMatch: L(
      'Type 4 (트렌드 무관심 계정이 피드에 뜨면 언팔)',
      'Type 4 (accounts that ignore trends may make you unfollow)',
      'Type 4（トレンド無関心アカウントはアンフォローしがち）',
      'Type 4（完全不追热点的账号出现就想取关）',
      'Type 4（完全不追熱點的帳號出現就想取消追蹤）',
      'Type 4 (tài khoản “không care trend” dễ khiến bạn unfollow)',
      'Type 4 (akun yang cuek tren bikin kamu unfollow)'
    ),
    shareTypeName: L(
      '유행 레이더',
      'Trend radar',
      '流行レーダー',
      '流行雷达',
      '流行雷達',
      'Radar trend',
      'Radar tren'
    ),
  },
  {
    type: 'Type4',
    emoji: '🎯',
    title: L(
      '취향이 확고한, 니치 콘텐츠 마니아',
      'Strong taste—niche content maniac',
      '好みがはっきり、ニッチコンテンツマニア',
      '口味很稳的细分领域内容控',
      '口味很穩的細分領域內容控',
      'Gu rõ ràng—“fan cuồng” niche',
      'Selera jelas—maniak konten niche'
    ),
    shortDescription: L(
      '제 알고리즘은 저만 이해할 수 있습니다.',
      'My algorithm makes sense—mostly to me.',
      '私のアルゴリズムは、基本自分しかわからない。',
      '我的推荐流，基本只有我自己最懂。',
      '我的推薦流，基本只有我自己最懂。',
      'Thuật toán của tôi—chủ yếu chỉ mình hiểu.',
      'Algoritmaku—paling ngerti ya aku sendiri.'
    ),
    description: L(
      '당신의 알고리즘은 극도로 개인화되어 있습니다. 남들이 잘 모르는 특정 분야, 마니아층만 아는 채널, 취향 저격 콘텐츠들로만 가득 차 있습니다. 대중적인 트렌드보다는 내가 관심 있는 분야를 깊게 파고드는 것을 좋아합니다. 피드를 보여주면 이 사람 어떤 사람인지 바로 알 수 있을 정도로 뚜렷한 개성이 있습니다.',
      'Your algorithm is hyper-personalized: niche topics others barely know, channels only fans understand, and content that hits your exact taste. You’d rather go deep on what interests you than chase mainstream trends. Your feed is so distinctive that people can tell who you are from a quick scroll.',
      'あなたのアルゴリズムは超パーソナル。人があまり知らない分野、マニアしか知らないチャンネル、好みに刺さるコンテンツだけ。大衆トレンドより、興味の領域を深掘りしたいタイプ。フィードを見せれば「この人どんな人か」すぐ分かるほど個性がはっきりしています。',
      '你的推荐流极度个人化：别人不太懂的小众领域、只有圈内人才知道的频道、精准戳中你口味的内容。比起追大众热点，你更喜欢在自己感兴趣的领域里深挖。给别人看你的动态，几眼就能认出你是什么样的人。',
      '你的推薦流極度個人化：別人不太懂的小眾領域、只有圈內人才知道的頻道、精準戳中你口味的內容。比起追大眾熱點，你更喜歡在自己感興趣的領域裡深挖。給別人看你的動態，幾眼就能認出你是什麼樣的人。',
      'Thuật toán của bạn siêu cá nhân: chủ đề niche ít ai biết, kênh chỉ fan mới hiểu, nội dung trúng gu bạn. Bạn thích đào sâu sở thích hơn là chạy theo mainstream. Chỉ cần lướt feed là người khác đoán được “bạn là ai”.',
      'Algoritmamu sangat personal: topik niche yang jarang orang tahu, channel yang cuma dipahami penggemar, konten yang pas selera. Kamu lebih suka mendalami minat daripada ikut tren massal. Feed-mu begitu khas sekilas saja orang bisa tahu “kamu orangnya gimana”.'
    ),
    algorithmSubtype: L(
      '니치 마니아 (Niche Master)',
      'Niche Master',
      'ニッチマスター',
      '小众领域达人',
      '小眾領域達人',
      'Bậc thầy niche',
      'Master niche'
    ),
    feedComposition: L(
      '관심 분야 전문 콘텐츠 70% / 취미 관련 20% / 기타 10%',
      'Deep-dive niche content 70% / hobby-related 20% / other 10%',
      '専門深掘り70%／趣味20%／その他10%',
      '领域深度内容 70% / 爱好相关 20% / 其他 10%',
      '領域深度內容 70% / 愛好相關 20% / 其他 10%',
      'Nội dung chuyên sâu 70% / sở thích 20% / khác 10%',
      'Konten mendalam 70% / hobi 20% / lainnya 10%'
    ),
    saveFolderName: L(
      '분야별 세부 폴더 (정리가 철저함)',
      'Neat subfolders by topic (super organized)',
      '分野ごとの細かいフォルダ（整理上手）',
      '按主题分得很细的收藏夹（整理很到位）',
      '按主題分得很細的收藏夾（整理很到位）',
      'Thư mục con theo chủ đề (siêu gọn)',
      'Subfolder per topik (rapi banget)'
    ),
    snsMainActivity: L(
      '유튜브 구독, 레딧, 커뮤니티 중심',
      'YouTube subscriptions, Reddit, community-first platforms',
      'YouTube登録、Reddit、コミュニティ中心',
      'YouTube 订阅、Reddit、偏社区向平台',
      'YouTube 訂閱、Reddit、偏社群向平台',
      'Đăng ký YouTube, Reddit, nền tảng cộng đồng',
      'Subscribe YouTube, Reddit, platform komunitas'
    ),
    goodMatch: L(
      'Type 5 (정보 탐구 성향이 같아서 공유할 것이 많음)',
      'Type 5 (same info-dive instinct—tons to share with each other)',
      'Type 5（情報探求タイプ同士で共有が増える）',
      'Type 5（都爱挖信息，互相可分享的很多）',
      'Type 5（都愛挖資訊，互相可分享的很多）',
      'Type 5 (cùng kiểu “đào info”—share cho nhau nhiều)',
      'Type 5 (sama-sama suka gali info—banyak yang bisa dishare)'
    ),
    badMatch: L(
      'Type 1 (감성 피드가 내 니치 피드를 방해한다고 느낌)',
      'Type 1 (a soft mood feed can feel like it clutters your niche flow)',
      'Type 1（感性フィードがニッチ感を邪魔する感じ）',
      'Type 1（太氛围感的流有时会干扰你的小众信息流）',
      'Type 1（太氛圍感的流有時會干擾你的小眾資訊流）',
      'Type 1 (feed “mood” quá có thể làm bạn thấy lẫn vào niche feed)',
      'Type 1 (feed mood terasa mengganggu alur niche-mu)'
    ),
    shareTypeName: L(
      '니치 콘텐츠 마니아',
      'Niche content maniac',
      'ニッチコンテンツマニア',
      '小众内容控',
      '小眾內容控',
      'Fan cuồng niche',
      'Maniak konten niche'
    ),
  },
  {
    type: 'Type5',
    emoji: '📚',
    title: L(
      '정보라면 일단 저장, 지식 큐레이터',
      'See info? Save first—you’re a knowledge curator',
      '情報ならまず保存、ナレッジキュレーター',
      '看到干货先收藏——你是知识策展人',
      '看到乾貨先收藏——你是知識策展人',
      'Thấy info là lưu—bạn là curator kiến thức',
      'Lihat info langsung simpan—kamu kurator pengetahuan'
    ),
    shortDescription: L(
      '제 저장 폴더는 미니 백과사전입니다.',
      'Your saved folders are basically a mini encyclopedia.',
      '保存フォルダはミニ百科事典。',
      '你的收藏夹像迷你百科全书。',
      '你的收藏夾像迷你百科全書。',
      'Thư mục lưu của bạn như bách khoa thu nhỏ.',
      'Folder simpananmu seperti ensiklopedia mini.'
    ),
    description: L(
      '당신의 알고리즘은 꿀팁, 자기계발, 뉴스, 재테크, 건강 정보들로 빽빽합니다. 엔터테인먼트보다는 당장 써먹을 수 있는 실용적인 정보에 반응하는 타입입니다. 저장해둔 콘텐츠를 나중에 다시 찾아보는 비율이 다른 유형 중 가장 높습니다. SNS를 오락이 아닌 학습의 도구로 활용하는 정보 지향형 알고리즘입니다.',
      'Your algorithm is dense with tips, self-improvement, news, money, and health info. You react to practical, usable knowledge more than pure entertainment. You’re the most likely type to actually reopen saved posts later. For you, social can be a learning tool—not just fun.',
      'あなたのアルゴリズムはコツ、自己啓発、ニュース、資産形成、健康情報でぎっしり。エンタメより「今すぐ使える知識」に反応。保存した投稿を後で読み返す率が高いタイプ。SNSを遊びではなく学びの道具にする、情報志向のアルゴリズムです。',
      '你的推荐流塞满技巧、自我提升、新闻、理财与健康信息。比起纯娱乐，你更会对“马上能用”的实用知识起反应。你这类人也最常真的回头翻收藏。对你来说，社交更像学习工具，而不只是消遣。',
      '你的推薦流塞滿技巧、自我提升、新聞、理財與健康資訊。比起純娛樂，你更會對「馬上能用」的實用知識起反應。你這類人也最常真的回頭翻收藏。對你來說，社群更像學習工具，而不只是消遣。',
      'Thuật toán của bạn dày đặc mẹo hay, phát triển bản thân, tin tức, tài chính cá nhân, sức khỏe. Bạn nhạy với kiến thức dùng được hơn là giải trí thuần. Bạn là kiểu hay mở lại mục đã lưu nhất. Với bạn, mạng xã hội cũng là công cụ học—không chỉ để vui.',
      'Algoritmamu padat tips, pengembangan diri, berita, keuangan, kesehatan. Kamu lebih respons terhadap pengetahuan praktis daripada hiburan belaka. Kamu paling sering membuka ulang konten yang disimpan. Bagi kamu, sosmed juga alat belajar—bukan cuma hiburan.'
    ),
    algorithmSubtype: L(
      '지식 큐레이터 (Knowledge Curator)',
      'Knowledge Curator',
      'ナレッジキュレーター',
      '知识策展人',
      '知識策展人',
      'Curator kiến thức',
      'Kurator pengetahuan'
    ),
    feedComposition: L(
      '정보·꿀팁 50% / 자기계발·뉴스 30% / 취미 정보 20%',
      'Tips & how-tos 50% / self-growth & news 30% / hobby info 20%',
      '情報・コツ50%／自己啓発・ニュース30%／趣味情報20%',
      '信息与技巧 50% / 自我成长与新闻 30% / 兴趣类知识 20%',
      '資訊與技巧 50% / 自我成長與新聞 30% / 興趣類知識 20%',
      'Mẹo & how-to 50% / phát triển & tin 30% / info sở thích 20%',
      'Tips & how-to 50% / pengembangan & berita 30% / info hobi 20%'
    ),
    saveFolderName: L(
      '"나중에 읽기", "써먹을 것", "공부"',
      'Folders like “Read later,” “Useful stuff,” “Study”',
      '「あとで読む」「使う」「勉強」',
      '收藏夹像：“稍后阅读”“要用的”“学习”',
      '收藏夾像：「稍後閱讀」「要用的」「學習」',
      '“Đọc sau”, “Dùng được”, “Học”',
      '“Baca nanti”, “Berguna”, “Belajar”'
    ),
    snsMainActivity: L(
      '유튜브 정보 채널, 링크드인, 뉴스레터',
      'YouTube explainers, LinkedIn, newsletters',
      'YouTube解説、LinkedIn、ニュースレター',
      'YouTube 知识类、领英、邮件通讯',
      'YouTube 知識類、LinkedIn、電子報',
      'Kênh kiến thức YouTube, LinkedIn, newsletter',
      'Channel edukasi YouTube, LinkedIn, newsletter'
    ),
    goodMatch: L(
      'Type 4 (깊이 있는 정보를 함께 탐구하는 조합)',
      'Type 4 (a great pair for deep-diving information together)',
      'Type 4（深い情報を一緒に掘る相性）',
      'Type 4（一起深挖信息的组合）',
      'Type 4（一起深挖資訊的組合）',
      'Type 4 (hợp để cùng đào sâu thông tin)',
      'Type 4 (cocok gali info mendalam bareng)'
    ),
    badMatch: L(
      'Type 2 (밈과 유머가 내 정보 피드를 오염시킨다고 느낌)',
      'Type 2 (meme humor can feel like “noise” in your info feed)',
      'Type 2（ミームが情報フィードを汚す感じ）',
      'Type 2（梗图幽默会让你觉得“污染”了信息流）',
      'Type 2（梗圖幽默會讓你覺得「污染」了資訊流）',
      'Type 2 (meme/hài làm bạn thấy “lẫn” feed info)',
      'Type 2 (meme/humor terasa mengotori feed informasimu)'
    ),
    shareTypeName: L(
      '지식 큐레이터',
      'Knowledge curator',
      'ナレッジキュレーター',
      '知识策展人',
      '知識策展人',
      'Curator kiến thức',
      'Kurator pengetahuan'
    ),
  },
  {
    type: 'Type6',
    emoji: '🌀',
    title: L(
      '모든 것을 흡수하는, 알고리즘 블랙홀',
      'You absorb everything—an algorithm black hole',
      '何でも吸い込む、アルゴリズムのブラックホール',
      '什么都吸一点——算法黑洞',
      '什麼都吸一點——演算法黑洞',
      'Hút cả mọi thứ—hố đen thuật toán',
      'Menyerap segalanya—lubang hitam algoritme'
    ),
    shortDescription: L(
      '제 알고리즘은 저도 모릅니다. 뭐든 다 나옵니다.',
      'Even I don’t know my algorithm. Everything shows up.',
      '自分でも分からない。なんでも出てくる。',
      '我自己也说不清算法。什么都会出现。',
      '我自己也說不清演算法。什麼都會出現。',
      'Chính tôi cũng không hiểu thuật toán của mình. Cái gì cũng có.',
      'Aku sendiri nggak ngerti algoritmaku. Apa saja bisa muncul.'
    ),
    description: L(
      '당신의 피드는 예측 불가능입니다. 감성 사진 다음에 재테크 정보가 뜨고, 밈 다음에 다큐멘터리가 나옵니다. 관심사가 워낙 다양하다 보니 알고리즘도 갈피를 못 잡은 것 같습니다. 그런데 오히려 이게 장점이 되기도 합니다. 예상치 못한 콘텐츠를 발견하고, 새로운 관심사가 끊임없이 생기는 타입입니다. SNS를 가장 다양하게, 넓게 소비하는 유형입니다.',
      'Your feed is unpredictable: a moody photo, then personal finance; a meme, then a documentary. With such wide interests, the algorithm can’t quite pin you down—and that can be a strength. You keep discovering unexpected content and new rabbit holes. You’re the type who consumes social media in the broadest, most varied way.',
      'あなたのフィードは予測不能。感性フォトの次に資産情報、ミームの次にドキュメンタリー。興味が広すぎてアルゴリズムも迷子…でもそれが強み。予想外の発見と新しい沼が止まらないタイプ。SNSをいちばん広く、いろんな角度で消費します。',
      '你的动态难以预测：氛围照下一条可能是理财，梗图后面可能是纪录片。兴趣太广，算法好像也抓不住你——但这反而是优点。你不断遇到意料之外的内容，也不断冒出新的兴趣点。你是把社交内容吃得最杂、最广的一类。',
      '你的動態難以預測：氛圍照下一則可能是理財，梗圖後面可能是紀錄片。興趣太廣，演算法好像也抓不住你——但這反而是優點。你不斷遇到意料之外的內容，也不斷冒出新的興趣點。你是把社群內容吃得最雜、最廣的一類。',
      'Feed của bạn khó đoán: ảnh mood rồi tới tài chính cá nhân; meme rồi tới phim tài liệu. Sở thích quá rộng khiến thuật toán cũng “loạn”—nhưng đó cũng là điểm mạnh. Bạn luôn gặp nội dung bất ngờ và mở ra thú vị mới. Bạn là kiểu “ăn” mạng xã hội đa dạng và rộng nhất.',
      'Feed-mu tak terduga: foto estetik lalu tips keuangan; meme lalu dokumenter. Minatmu begitu luas sehingga algoritme pun sulit menentukan arah—dan itu bisa jadi kelebihan. Kamu terus menemukan konten tak terduga dan minat baru. Kamu tipe yang mengonsumsi sosmed paling luas dan beragam.'
    ),
    algorithmSubtype: L(
      '블랙홀 (Everything Consumer)',
      'Everything Consumer',
      'エブリシングコンシューマー',
      '全能型消费者',
      '全能型消費者',
      'Người tiêu thụ “mọi thứ”',
      'Konsumen segalanya'
    ),
    feedComposition: L(
      '랜덤 / 예측 불가 / 뭐든 다 있음',
      'Random / unpredictable / a little of everything',
      'ランダム／予測不能／なんでもあり',
      '随机 / 难以预测 / 什么都有',
      '隨機 / 難以預測 / 什麼都有',
      'Ngẫu nhiên / khó đoán / gì cũng có',
      'Acak / tak terduga / ada semuanya'
    ),
    saveFolderName: L(
      '"기타" 하나에 다 몰아넣음 (정리 포기)',
      'Everything dumped in one “Misc” folder (organization: abandoned)',
      '全部「その他」フォルダへ（整理は諦め）',
      '全丢进一个“其他”收藏夹（整理随缘）',
      '全丟進一個「其他」收藏夾（整理隨緣）',
      'Nhét hết vào một folder “Khác” (bỏ cuộc sắp xếp)',
      'Semua masuk folder “Lain-lain” (urutkan: pasrah)'
    ),
    snsMainActivity: L(
      '모든 플랫폼 전방위 활동',
      'Active across basically every platform',
      '主要プラットフォームを横断して活動',
      '各大平台几乎都有你的身影',
      '各大平台乎都有你的身影',
      'Hoạt động khắp mọi nền tảng chính',
      'Aktif di hampir semua platform besar'
    ),
    goodMatch: L(
      '모든 유형과 공유할 것이 생김',
      'You can find something to share with every type',
      'どのタイプとも共有ネタが生まれる',
      '和每种类型都能找到可聊可分享的共同点',
      '和每種類型都能找到可聊可分享的共同點',
      'Với mọi kiểu đều có thứ để share',
      'Dengan semua tipe ada bahan obrolan'
    ),
    badMatch: L(
      '없음. 뭐든 일단 봄',
      'None—you’ll watch pretty much anything.',
      'なし。とりあえずなんでも見る。',
      '没有。反正先看了再说。',
      '沒有。反正先看了再說。',
      'Không có. Cứ thấy là xem.',
      'Tidak ada. Yang penting lihat dulu.'
    ),
    shareTypeName: L(
      '알고리즘 블랙홀',
      'Algorithm black hole',
      'アルゴリズムのブラックホール',
      '算法黑洞',
      '演算法黑洞',
      'Hố đen thuật toán',
      'Lubang hitam algoritme'
    ),
  },
];
