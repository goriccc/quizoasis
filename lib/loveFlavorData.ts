export interface LoveFlavorQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    scores: Record<string, number>;
  }[];
}

export interface LoveFlavorResult {
  type: string; // 내부 구분용
  emoji: string;
  title: Record<string, string>;
  description: Record<string, string>;
  pros: Record<string, string>[];
  cons: Record<string, string>[];
  advice: Record<string, string>;
  compatibility: {
    best: string[];
    good: string[];
    careful: string[];
    difficult: string[];
  };
}

export const loveFlavorQuestions: LoveFlavorQuestion[] = [
  {
    id: 1,
    question: { 
      ko: '이상적인 첫 데이트 분위기는?',
      en: 'What is your ideal first date atmosphere?',
      ja: '理想的な初デートの雰囲気は？',
      'zh-CN': '你理想的第一次约会氛围是？',
      'zh-TW': '你理想的第一次約會氛圍是？',
      id: 'Suasana kencan pertama yang ideal adalah?',
      vi: 'Bầu không khí buổi hẹn hò đầu tiên lý tưởng của bạn là gì?'
    },
    options: [
      { text: { 
        ko: '아기자기한 카페에서 달달한 디저트와 함께',
        en: 'Cozy cafe with sweet desserts',
        ja: '居心地の良いカフェで甘いデザートと一緒に',
        'zh-CN': '在温馨的咖啡厅享用甜点',
        'zh-TW': '在溫馨的咖啡廳享用甜點',
        id: 'Kafe nyaman dengan makanan penutup manis',
        vi: 'Quán cà phê ấm cúng với món tráng miệng ngọt ngào'
      }, scores: { Type1: 3 } },
      { text: { 
        ko: '활기찬 놀이공원이나 축제에서',
        en: 'Lively amusement park or festival',
        ja: '活気のある遊園地やお祭りで',
        'zh-CN': '在热闹的游乐园或节日庆典',
        'zh-TW': '在熱鬧的遊樂園或節日慶典',
        id: 'Taman hiburan yang ramai atau festival',
        vi: 'Công viên giải trí sôi động hoặc lễ hội'
      }, scores: { Type2: 3 } },
      { text: { 
        ko: '조용한 전시회나 재즈바에서',
        en: 'Quiet exhibition or jazz bar',
        ja: '静かな展示会やジャズバーで',
        'zh-CN': '在安静的展览会或爵士酒吧',
        'zh-TW': '在安靜的展覽會或爵士酒吧',
        id: 'Pameran tenang atau bar jazz',
        vi: 'Triển lãm yên tĩnh hoặc quán bar jazz'
      }, scores: { Type3: 3 } },
      { text: { 
        ko: '짜릿한 모험 활동 (번지점프, 서핑 등)',
        en: 'Thrilling adventure activities (bungee jumping, surfing, etc.)',
        ja: 'スリル満点のアドベンチャー活動（バンジージャンプ、サーフィンなど）',
        'zh-CN': '刺激的冒险活动（蹦极、冲浪等）',
        'zh-TW': '刺激的冒險活動（蹦極、衝浪等）',
        id: 'Aktivitas petualangan menegangkan (bungee jumping, surfing, dll)',
        vi: 'Hoạt động phiêu lưu mạo hiểm (nhảy bungee, lướt sóng, v.v.)'
      }, scores: { Type4: 3 } },
    ],
  },
  {
    id: 2,
    question: { 
      ko: '연인에게 사랑을 표현하는 방법은?',
      en: 'How do you express love to your partner?',
      ja: '恋人に愛を表現する方法は？',
      'zh-CN': '你如何向恋人表达爱意？',
      'zh-TW': '你如何向戀人表達愛意？',
      id: 'Bagaimana cara Anda mengekspresikan cinta kepada pasangan?',
      vi: 'Bạn thể hiện tình yêu với người yêu như thế nào?'
    },
    options: [
      { text: { 
        ko: '"사랑해" 직접적이고 따뜻한 말로',
        en: 'Direct and warm words like "I love you"',
        ja: '「愛してる」直接的で温かい言葉で',
        'zh-CN': '直接而温暖的话语，如"我爱你"',
        'zh-TW': '直接而溫暖的話語，如「我愛你」',
        id: 'Kata-kata langsung dan hangat seperti "Aku mencintaimu"',
        vi: 'Những lời nói trực tiếp và ấm áp như "Anh yêu em"'
      }, scores: { Type1: 3 } },
      { text: { 
        ko: '깜짝 이벤트와 재미있는 장난으로',
        en: 'Surprise events and fun pranks',
        ja: 'サプライズイベントと楽しいいたずらで',
        'zh-CN': '惊喜活动和有趣的恶作剧',
        'zh-TW': '驚喜活動和有趣的惡作劇',
        id: 'Acara kejutan dan lelucon menyenangkan',
        vi: 'Sự kiện bất ngờ và trò đùa vui vẻ'
      }, scores: { Type2: 3 } },
      { text: { 
        ko: '깊은 대화와 진심 어린 편지로',
        en: 'Deep conversations and heartfelt letters',
        ja: '深い会話と心からの手紙で',
        'zh-CN': '深度对话和发自内心的信件',
        'zh-TW': '深度對話和發自內心的信件',
        id: 'Percakapan mendalam dan surat yang tulus',
        vi: 'Những cuộc trò chuyện sâu sắc và những lá thư chân thành'
      }, scores: { Type3: 3 } },
      { text: { 
        ko: '열정적인 스킨십과 강렬한 눈빛으로',
        en: 'Passionate physical contact and intense eye contact',
        ja: '情熱的なスキンシップと強烈な眼差しで',
        'zh-CN': '热情的肢体接触和强烈的眼神交流',
        'zh-TW': '熱情的肢體接觸和強烈的眼神交流',
        id: 'Kontak fisik yang penuh gairah dan tatapan yang intens',
        vi: 'Tiếp xúc thể xác đam mê và ánh mắt mãnh liệt'
      }, scores: { Type4: 3 } },
    ],
  },
  {
    id: 3,
    question: { 
      ko: '연애에서 가장 중요하게 생각하는 것은?',
      en: 'What do you value most in a relationship?',
      ja: '恋愛で最も大切に思うことは？',
      'zh-CN': '你认为恋爱中最重要的是什么？',
      'zh-TW': '你認為戀愛中最重要的是什麼？',
      id: 'Apa yang paling Anda hargai dalam hubungan?',
      vi: 'Bạn coi trọng điều gì nhất trong tình yêu?'
    },
    options: [
      { text: { 
        ko: '서로를 향한 변함없는 애정',
        en: 'Unchanging affection for each other',
        ja: 'お互いへの変わらない愛情',
        'zh-CN': '彼此不变的深情',
        'zh-TW': '彼此不變的深情',
        id: 'Kasih sayang yang tidak berubah satu sama lain',
        vi: 'Tình cảm không thay đổi dành cho nhau'
      }, scores: { Type1: 3 } },
      { text: { 
        ko: '함께 웃고 즐거운 시간',
        en: 'Laughing and having fun together',
        ja: '一緒に笑って楽しい時間',
        'zh-CN': '一起欢笑快乐的时光',
        'zh-TW': '一起歡笑快樂的時光',
        id: 'Bersama-sama tertawa dan bersenang-senang',
        vi: 'Cùng cười và vui vẻ bên nhau'
      }, scores: { Type2: 3 } },
      { text: { 
        ko: '깊은 이해와 정신적 교감',
        en: 'Deep understanding and spiritual connection',
        ja: '深い理解と精神的な共感',
        'zh-CN': '深刻的理解和精神交流',
        'zh-TW': '深刻的理解和精神交流',
        id: 'Pemahaman mendalam dan koneksi spiritual',
        vi: 'Hiểu biết sâu sắc và kết nối tinh thần'
      }, scores: { Type3: 3 } },
      { text: { 
        ko: '가슴 뛰는 설렘과 열정',
        en: 'Heart-pounding excitement and passion',
        ja: '胸がドキドキするときめきと情熱',
        'zh-CN': '心跳加速的兴奋和激情',
        'zh-TW': '心跳加速的興奮和激情',
        id: 'Kegembiraan yang membuat jantung berdebar dan gairah',
        vi: 'Sự hồi hộp khiến tim đập mạnh và đam mê'
      }, scores: { Type4: 3 } },
    ],
  },
  {
    id: 4,
    question: { 
      ko: '연인과 싸웠을 때 당신의 모습은?',
      en: 'How do you behave when you fight with your partner?',
      ja: '恋人と喧嘩した時のあなたの様子は？',
      'zh-CN': '和恋人吵架时你的表现是？',
      'zh-TW': '和戀人吵架時你的表現是？',
      id: 'Bagaimana Anda bersikap saat bertengkar dengan pasangan?',
      vi: 'Bạn hành xử như thế nào khi cãi nhau với người yêu?'
    },
    options: [
      { text: { 
        ko: '금방 풀고 "미안해, 사랑해" 말한다',
        en: 'Quickly resolve it and say "Sorry, I love you"',
        ja: 'すぐに解決して「ごめん、愛してる」と言う',
        'zh-CN': '很快和解并说"对不起，我爱你"',
        'zh-TW': '很快和解並說「對不起，我愛你」',
        id: 'Segera menyelesaikannya dan berkata "Maaf, aku mencintaimu"',
        vi: 'Nhanh chóng giải quyết và nói "Xin lỗi, anh yêu em"'
      }, scores: { Type1: 3 } },
      { text: { 
        ko: '시간이 지나면 자연스럽게 풀린다',
        en: 'It naturally resolves as time passes',
        ja: '時間が経つと自然に解決する',
        'zh-CN': '时间久了自然就和解了',
        'zh-TW': '時間久了自然就和解了',
        id: 'Secara alami teratasi seiring waktu',
        vi: 'Tự nhiên giải quyết theo thời gian'
      }, scores: { Type2: 3 } },
      { text: { 
        ko: '대화로 근본 원인을 해결하려 한다',
        en: 'Try to solve the root cause through conversation',
        ja: '対話で根本的な原因を解決しようとする',
        'zh-CN': '通过对话解决根本原因',
        'zh-TW': '通過對話解決根本原因',
        id: 'Mencoba menyelesaikan akar masalah melalui percakapan',
        vi: 'Cố gắng giải quyết nguyên nhân gốc qua trò chuyện'
      }, scores: { Type3: 3 } },
      { text: { 
        ko: '격렬하게 감정 표출 후 격렬하게 화해한다',
        en: 'Express emotions intensely, then reconcile intensely',
        ja: '激しく感情を表出した後、激しく和解する',
        'zh-CN': '激烈表达情感后激烈和解',
        'zh-TW': '激烈表達情感後激烈和解',
        id: 'Mengekspresikan emosi dengan intens, lalu berdamai dengan intens',
        vi: 'Bộc lộ cảm xúc mãnh liệt, sau đó hòa giải mãnh liệt'
      }, scores: { Type4: 3 } },
    ],
  },
  {
    id: 5,
    question: { 
      ko: '당신의 연애 스타일을 한 단어로?',
      en: 'Your love style in one word?',
      ja: 'あなたの恋愛スタイルを一言で？',
      'zh-CN': '用一句话形容你的恋爱风格？',
      'zh-TW': '用一句話形容你的戀愛風格？',
      id: 'Gaya cinta Anda dalam satu kata?',
      vi: 'Phong cách tình yêu của bạn trong một từ?'
    },
    options: [
      { text: { 
        ko: '순수한',
        en: 'Pure',
        ja: '純粋',
        'zh-CN': '纯真',
        'zh-TW': '純真',
        id: 'Murni',
        vi: 'Thuần khiết'
      }, scores: { Type1: 3 } },
      { text: { 
        ko: '유쾌한',
        en: 'Cheerful',
        ja: '陽気',
        'zh-CN': '开朗',
        'zh-TW': '開朗',
        id: 'Ceria',
        vi: 'Vui vẻ'
      }, scores: { Type2: 3 } },
      { text: { 
        ko: '성숙한',
        en: 'Mature',
        ja: '成熟',
        'zh-CN': '成熟',
        'zh-TW': '成熟',
        id: 'Matang',
        vi: 'Chín chắn'
      }, scores: { Type3: 3, Type5: 2 } },
      { text: { 
        ko: '열정적인',
        en: 'Passionate',
        ja: '情熱的',
        'zh-CN': '热情',
        'zh-TW': '熱情',
        id: 'Bergairah',
        vi: 'Đam mê'
      }, scores: { Type4: 3 } },
    ],
  },
  {
    id: 6,
    question: { 
      ko: '이별 후 당신의 반응은?',
      en: 'Your reaction after a breakup?',
      ja: '別れ後のあなたの反応は？',
      'zh-CN': '分手后你的反应是？',
      'zh-TW': '分手後你的反應是？',
      id: 'Reaksi Anda setelah putus cinta?',
      vi: 'Phản ứng của bạn sau khi chia tay?'
    },
    options: [
      { text: { 
        ko: '오래 아파하며 추억을 간직한다',
        en: 'Hurt for a long time and keep the memories',
        ja: '長い間傷ついて思い出を大切にする',
        'zh-CN': '痛苦很久并珍藏回忆',
        'zh-TW': '痛苦很久並珍藏回憶',
        id: 'Sakit hati lama dan menyimpan kenangan',
        vi: 'Đau khổ lâu và giữ gìn kỷ niệm'
      }, scores: { Type1: 3 } },
      { text: { 
        ko: '슬프지만 새로운 만남에 긍정적이다',
        en: 'Sad but positive about new encounters',
        ja: '悲しいが新しい出会いに前向き',
        'zh-CN': '虽然悲伤但对新相遇保持积极',
        'zh-TW': '雖然悲傷但對新相遇保持積極',
        id: 'Sedih tapi positif tentang pertemuan baru',
        vi: 'Buồn nhưng tích cực về những cuộc gặp gỡ mới'
      }, scores: { Type2: 3 } },
      { text: { 
        ko: '배운 점을 정리하고 성장의 기회로 삼는다',
        en: 'Organize what you learned and use it as a growth opportunity',
        ja: '学んだことを整理し成長の機会とする',
        'zh-CN': '整理学到的经验并将其作为成长机会',
        'zh-TW': '整理學到的經驗並將其作為成長機會',
        id: 'Mengorganisir yang dipelajari dan menjadikannya kesempatan tumbuh',
        vi: 'Tổ chức những gì đã học và coi đó là cơ hội phát triển'
      }, scores: { Type3: 3 } },
      { text: { 
        ko: '강렬하게 아파하지만 빠르게 회복한다',
        en: 'Hurt intensely but recover quickly',
        ja: '激しく傷つくが早く回復する',
        'zh-CN': '痛苦强烈但恢复很快',
        'zh-TW': '痛苦強烈但恢復很快',
        id: 'Sakit hati intens tapi cepat pulih',
        vi: 'Đau khổ mãnh liệt nhưng hồi phục nhanh'
      }, scores: { Type4: 3 } },
    ],
  },
  {
    id: 7,
    question: { 
      ko: '연인의 생일, 어떤 선물을 준비할까?',
      en: 'Your partner\'s birthday, what gift would you prepare?',
      ja: '恋人の誕生日、どんなプレゼントを準備する？',
      'zh-CN': '恋人的生日，你会准备什么礼物？',
      'zh-TW': '戀人的生日，你會準備什麼禮物？',
      id: 'Ulang tahun pasangan, hadiah apa yang akan Anda siapkan?',
      vi: 'Sinh nhật người yêu, bạn sẽ chuẩn bị món quà gì?'
    },
    options: [
      { text: { 
        ko: '마음을 담은 손편지와 커플 아이템',
        en: 'Handwritten letter with heart and couple items',
        ja: '心を込めた手紙とカップルアイテム',
        'zh-CN': '充满心意的手写信和情侣用品',
        'zh-TW': '充滿心意的手寫信和情侶用品',
        id: 'Surat tulisan tangan dengan hati dan item pasangan',
        vi: 'Thư viết tay chứa đựng tình cảm và đồ dùng cặp đôi'
      }, scores: { Type1: 3 } },
      { text: { 
        ko: '함께 즐길 수 있는 체험 선물',
        en: 'Experience gift that you can enjoy together',
        ja: '一緒に楽しめる体験プレゼント',
        'zh-CN': '可以一起享受的体验礼物',
        'zh-TW': '可以一起享受的體驗禮物',
        id: 'Hadiah pengalaman yang bisa dinikmati bersama',
        vi: 'Món quà trải nghiệm có thể cùng thưởng thức'
      }, scores: { Type2: 3 } },
      { text: { 
        ko: '상대가 진심으로 필요한 의미 있는 선물',
        en: 'Meaningful gift that the other person truly needs',
        ja: '相手が本当に必要とする意味のあるプレゼント',
        'zh-CN': '对方真正需要的有意义的礼物',
        'zh-TW': '對方真正需要的有意義的禮物',
        id: 'Hadiah bermakna yang benar-benar dibutuhkan pasangan',
        vi: 'Món quà ý nghĩa mà đối phương thực sự cần'
      }, scores: { Type3: 2, Type5: 1 } },
      { text: { 
        ko: '놀랄 만한 대담한 이벤트 선물',
        en: 'Surprising and bold event gift',
        ja: '驚くような大胆なイベントプレゼント',
        'zh-CN': '令人惊喜的大胆活动礼物',
        'zh-TW': '令人驚喜的大膽活動禮物',
        id: 'Hadiah acara yang mengejutkan dan berani',
        vi: 'Món quà sự kiện bất ngờ và táo bạo'
      }, scores: { Type4: 3 } },
    ],
  },
  {
    id: 8,
    question: { 
      ko: '연애 초반 당신의 모습은?',
      en: 'How are you in the early stages of a relationship?',
      ja: '恋愛初期のあなたの様子は？',
      'zh-CN': '恋爱初期的你是什么样子？',
      'zh-TW': '戀愛初期的你是什麼樣子？',
      id: 'Bagaimana Anda di awal hubungan?',
      vi: 'Bạn như thế nào trong giai đoạn đầu của tình yêu?'
    },
    options: [
      { text: { 
        ko: '상대방 생각만 하며 하루 종일 설렘',
        en: 'Think only about the other person and feel excited all day',
        ja: '相手のことだけ考えて一日中ときめく',
        'zh-CN': '只想着对方，整天都兴奋',
        'zh-TW': '只想著對方，整天都興奮',
        id: 'Hanya memikirkan pasangan dan merasa gembira sepanjang hari',
        vi: 'Chỉ nghĩ về đối phương và cảm thấy hồi hộp cả ngày'
      }, scores: { Type1: 3 } },
      { text: { 
        ko: '친구처럼 편하게 즐거운 시간',
        en: 'Comfortable and fun time like friends',
        ja: '友達のようにリラックスして楽しい時間',
        'zh-CN': '像朋友一样舒适愉快的时光',
        'zh-TW': '像朋友一樣舒適愉快的時光',
        id: 'Waktu yang nyaman dan menyenangkan seperti teman',
        vi: 'Thời gian thoải mái và vui vẻ như bạn bè'
      }, scores: { Type2: 3, Type5: 1 } },
      { text: { 
        ko: '천천히 깊이 알아가며 신중하게',
        en: 'Slowly getting to know each other deeply and carefully',
        ja: 'ゆっくりと深く知り合い慎重に',
        'zh-CN': '慢慢深入了解，谨慎小心',
        'zh-TW': '慢慢深入了解，謹慎小心',
        id: 'Pelan-pelan mengenal dalam dan hati-hati',
        vi: 'Từ từ tìm hiểu sâu sắc và thận trọng'
      }, scores: { Type3: 3, Type6: 1 } },
      { text: { 
        ko: '몰아치는 감정에 빠져든다',
        en: 'Fall into overwhelming emotions',
        ja: '激しい感情に陥る',
        'zh-CN': '陷入汹涌的情感中',
        'zh-TW': '陷入洶湧的情感中',
        id: 'Terjebak dalam emosi yang meluap-luap',
        vi: 'Rơi vào những cảm xúc dữ dội'
      }, scores: { Type4: 3 } },
    ],
  },
  {
    id: 9,
    question: { 
      ko: '장거리 연애에 대한 생각은?',
      en: 'What do you think about long-distance relationships?',
      ja: '遠距離恋愛についてどう思う？',
      'zh-CN': '你对异地恋有什么看法？',
      'zh-TW': '你對異地戀有什麼看法？',
      id: 'Apa pendapat Anda tentang hubungan jarak jauh?',
      vi: 'Bạn nghĩ gì về tình yêu xa cách?'
    },
    options: [
      { text: { 
        ko: '힘들지만 사랑으로 극복 가능',
        en: 'Difficult but can be overcome with love',
        ja: '大変だが愛で乗り越えられる',
        'zh-CN': '虽然困难但可以用爱克服',
        'zh-TW': '雖然困難但可以用愛克服',
        id: 'Sulit tapi bisa diatasi dengan cinta',
        vi: 'Khó khăn nhưng có thể vượt qua bằng tình yêu'
      }, scores: { Type1: 3 } },
      { text: { 
        ko: '만날 때마다 새로운 데이트로 해결',
        en: 'Solve it with new dates every time we meet',
        ja: '会うたびに新しいデートで解決',
        'zh-CN': '每次见面都用新的约会来解决',
        'zh-TW': '每次見面都用新的約會來解決',
        id: 'Selesaikan dengan kencan baru setiap kali bertemu',
        vi: 'Giải quyết bằng những buổi hẹn hò mới mỗi lần gặp'
      }, scores: { Type2: 3 } },
      { text: { 
        ko: '깊은 대화와 신뢰로 거리 극복',
        en: 'Overcome distance with deep conversation and trust',
        ja: '深い会話と信頼で距離を克服',
        'zh-CN': '用深度对话和信任克服距离',
        'zh-TW': '用深度對話和信任克服距離',
        id: 'Atasi jarak dengan percakapan mendalam dan kepercayaan',
        vi: 'Vượt qua khoảng cách bằng trò chuyện sâu sắc và tin tưởng'
      }, scores: { Type3: 3, Type6: 2 } },
      { text: { 
        ko: '너무 답답해서 힘들 것 같다',
        en: 'Seems too frustrating and difficult',
        ja: 'あまりにもストレスで大変そう',
        'zh-CN': '似乎太令人沮丧和困难',
        'zh-TW': '似乎太令人沮喪和困難',
        id: 'Terlalu frustasi dan sulit',
        vi: 'Có vẻ quá bực bội và khó khăn'
      }, scores: { Type4: 3, Type6: 1 } },
    ],
  },
  {
    id: 10,
    question: { 
      ko: '연인과 함께 있을 때 가장 행복한 순간은?',
      en: 'The happiest moment when you\'re with your partner?',
      ja: '恋人と一緒にいるときの最も幸せな瞬間は？',
      'zh-CN': '和恋人在一起时最幸福的时刻是？',
      'zh-TW': '和戀人在一起時最幸福的時刻是？',
      id: 'Momen paling bahagia saat bersama pasangan?',
      vi: 'Khoảnh khắc hạnh phúc nhất khi ở bên người yêu?'
    },
    options: [
      { text: { 
        ko: '손잡고 걸으며 사랑한다 말할 때',
        en: 'When holding hands and saying "I love you"',
        ja: '手をつないで歩きながら愛してるって言うとき',
        'zh-CN': '手牵手走路说"我爱你"的时候',
        'zh-TW': '手牽手走路說「我愛你」的時候',
        id: 'Saat berpegangan tangan dan mengatakan "Aku mencintaimu"',
        vi: 'Khi nắm tay đi dạo và nói "Anh yêu em"'
      }, scores: { Type1: 3 } },
      { text: { 
        ko: '함께 웃고 떠들며 놀 때',
        en: 'When laughing, chatting, and playing together',
        ja: '一緒に笑っておしゃべりして遊ぶとき',
        'zh-CN': '一起笑闹聊天玩耍的时候',
        'zh-TW': '一起笑鬧聊天玩耍的時候',
        id: 'Saat tertawa, mengobrol, dan bermain bersama',
        vi: 'Khi cùng cười, trò chuyện và vui chơi'
      }, scores: { Type2: 3, Type5: 1 } },
      { text: { 
        ko: '조용히 서로의 생각을 나눌 때',
        en: 'When quietly sharing each other\'s thoughts',
        ja: '静かにお互いの考えを共有するとき',
        'zh-CN': '安静地分享彼此想法的时候',
        'zh-TW': '安靜地分享彼此想法的時候',
        id: 'Saat berbagi pikiran satu sama lain dengan tenang',
        vi: 'Khi yên lặng chia sẻ suy nghĩ của nhau'
      }, scores: { Type3: 3 } },
      { text: { 
        ko: '서로를 향한 열정을 느낄 때',
        en: 'When feeling passion for each other',
        ja: 'お互いへの情熱を感じるとき',
        'zh-CN': '感受到彼此激情的时候',
        'zh-TW': '感受到彼此激情的時候',
        id: 'Saat merasakan gairah satu sama lain',
        vi: 'Khi cảm nhận được đam mê dành cho nhau'
      }, scores: { Type4: 3 } },
    ],
  },
  {
    id: 11,
    question: { 
      ko: '연애와 개인 시간의 균형은?',
      en: 'Balance between love and personal time?',
      ja: '恋愛と個人時間のバランスは？',
      'zh-CN': '恋爱和个人时间的平衡是？',
      'zh-TW': '戀愛和個人時間的平衡是？',
      id: 'Keseimbangan antara cinta dan waktu pribadi?',
      vi: 'Cân bằng giữa tình yêu và thời gian cá nhân?'
    },
    options: [
      { text: { 
        ko: '연애가 우선, 거의 매일 보고 싶다',
        en: 'Love comes first, want to see each other almost every day',
        ja: '恋愛が優先、ほぼ毎日会いたい',
        'zh-CN': '恋爱优先，几乎每天都想见面',
        'zh-TW': '戀愛優先，幾乎每天都想見面',
        id: 'Cinta yang utama, ingin bertemu hampir setiap hari',
        vi: 'Tình yêu là ưu tiên, muốn gặp nhau gần như mỗi ngày'
      }, scores: { Type1: 3 } },
      { text: { 
        ko: '균형있게, 각자 시간도 필요',
        en: 'Balanced, personal time is also needed',
        ja: 'バランス良く、お互いの時間も必要',
        'zh-CN': '平衡地，各自的时间也很必要',
        'zh-TW': '平衡地，各自的時間也很必要',
        id: 'Seimbang, waktu pribadi juga diperlukan',
        vi: 'Cân bằng, thời gian riêng tư cũng cần thiết'
      }, scores: { Type2: 2, Type5: 1 } },
      { text: { 
        ko: '개인 시간 존중하며 깊이있게 만남',
        en: 'Respect personal time and meet deeply',
        ja: '個人時間を尊重し深く会う',
        'zh-CN': '尊重个人时间，深度见面',
        'zh-TW': '尊重個人時間，深度見面',
        id: 'Hormati waktu pribadi dan bertemu dengan mendalam',
        vi: 'Tôn trọng thời gian riêng tư và gặp gỡ sâu sắc'
      }, scores: { Type3: 2, Type5: 3 } },
      { text: { 
        ko: '만날 때는 집중적으로, 안 만날 땐 각자',
        en: 'Focus when meeting, be separate when not meeting',
        ja: '会う時は集中、会わない時はそれぞれ',
        'zh-CN': '见面时专注，不见面时各自',
        'zh-TW': '見面時專注，不見面時各自',
        id: 'Fokus saat bertemu, terpisah saat tidak bertemu',
        vi: 'Tập trung khi gặp nhau, riêng biệt khi không gặp'
      }, scores: { Type4: 2, Type6: 3 } },
    ],
  },
  {
    id: 12,
    question: { 
      ko: '당신의 연애를 색으로 표현하면?',
      en: 'If you express your love in color?',
      ja: 'あなたの恋愛を色で表現すると？',
      'zh-CN': '如果用颜色表达你的恋爱？',
      'zh-TW': '如果用顏色表達你的戀愛？',
      id: 'Jika Anda mengekspresikan cinta Anda dalam warna?',
      vi: 'Nếu bạn thể hiện tình yêu bằng màu sắc?'
    },
    options: [
      { text: { 
        ko: '부드러운 핑크색',
        en: 'Soft pink',
        ja: '優しいピンク色',
        'zh-CN': '柔和的粉色',
        'zh-TW': '柔和的粉色',
        id: 'Pink lembut',
        vi: 'Màu hồng nhẹ nhàng'
      }, scores: { Type1: 3 } },
      { text: { 
        ko: '밝은 오렌지색',
        en: 'Bright orange',
        ja: '明るいオレンジ色',
        'zh-CN': '明亮的橙色',
        'zh-TW': '明亮的橙色',
        id: 'Oranye cerah',
        vi: 'Màu cam sáng'
      }, scores: { Type2: 3 } },
      { text: { 
        ko: '깊은 와인색',
        en: 'Deep wine color',
        ja: '深いワイン色',
        'zh-CN': '深沉的酒红色',
        'zh-TW': '深沉的酒紅色',
        id: 'Warna anggur dalam',
        vi: 'Màu rượu vang sâu thẳm'
      }, scores: { Type3: 2, Type5: 3 } },
      { text: { 
        ko: '강렬한 레드색',
        en: 'Intense red',
        ja: '強烈な赤色',
        'zh-CN': '强烈的红色',
        'zh-TW': '強烈的紅色',
        id: 'Merah intens',
        vi: 'Màu đỏ mãnh liệt'
      }, scores: { Type4: 3, Type6: 2 } },
    ],
  },
];

export const loveFlavorResults: LoveFlavorResult[] = [
  {
    type: 'Type1',
    emoji: '🍬',
    title: { 
      ko: '달콤한 설탕맛',
      en: 'Sweet Sugar Flavor',
      ja: '甘い砂糖の味',
      'zh-CN': '甜蜜的糖味',
      'zh-TW': '甜蜜的糖味',
      id: 'Rasa Gula Manis',
      vi: 'Vị Đường Ngọt Ngào'
    },
    description: { 
      ko: '당신의 연애는 입안에서 녹는 설탕처럼 달콤하고 순수합니다. 상대방을 향한 애정이 깊고 표현도 직접적입니다. "사랑해"를 자주 말하고 작은 스킨십과 커플 아이템을 좋아합니다. 순수하고 헌신적이지만 때로는 과하게 달콤해서 상대방이 부담스러울 수 있습니다.',
      en: 'Your love is sweet and pure like sugar melting in your mouth. Your affection for your partner is deep and your expression is direct. You often say "I love you" and enjoy small physical contact and couple items. You are pure and devoted, but sometimes you can be overly sweet, which may burden your partner.',
      ja: 'あなたの恋愛は口の中で溶ける砂糖のように甘くて純粋です。相手への愛情が深く、表現も直接的です。「愛してる」をよく言い、小さなスキンシップやカップルアイテムを好みます。純粋で献身的ですが、時には甘すぎて相手に負担をかけることがあります。',
      'zh-CN': '你的恋爱就像在口中融化的糖一样甜蜜纯真。你对伴侣的爱意深厚，表达也很直接。经常说"我爱你"，喜欢小小的肢体接触和情侣用品。虽然纯真专一，但有时过于甜蜜可能会让对方感到负担。',
      'zh-TW': '你的戀愛就像在口中融化的糖一樣甜蜜純真。你對伴侶的愛意深厚，表達也很直接。經常說「我愛你」，喜歡小小的肢體接觸和情侶用品。雖然純真專一，但有時過於甜蜜可能會讓對方感到負擔。',
      id: 'Cinta Anda manis dan murni seperti gula yang meleleh di mulut. Kasih sayang Anda terhadap pasangan sangat dalam dan ekspresi Anda langsung. Anda sering mengatakan "Aku mencintaimu" dan menikmati kontak fisik kecil serta item pasangan. Anda murni dan setia, tetapi terkadang terlalu manis sehingga dapat membebani pasangan.',
      vi: 'Tình yêu của bạn ngọt ngào và thuần khiết như đường tan trong miệng. Tình cảm dành cho người yêu sâu sắc và cách thể hiện trực tiếp. Bạn thường nói "Anh yêu em" và thích những tiếp xúc nhỏ và đồ dùng cặp đôi. Bạn thuần khiết và tận tụy, nhưng đôi khi quá ngọt ngào có thể khiến đối phương cảm thấy áp lực.'
    },
    pros: [ 
      { ko: '따뜻함', en: 'Warmth', ja: '温かさ', 'zh-CN': '温暖', 'zh-TW': '溫暖', id: 'Kehangatan', vi: 'Ấm áp' }, 
      { ko: '헌신적', en: 'Devoted', ja: '献身的', 'zh-CN': '专一', 'zh-TW': '專一', id: 'Setia', vi: 'Tận tụy' }, 
      { ko: '순수함', en: 'Pure', ja: '純粋', 'zh-CN': '纯真', 'zh-TW': '純真', id: 'Murni', vi: 'Thuần khiết' }, 
      { ko: '안정감', en: 'Stable', ja: '安定感', 'zh-CN': '稳定感', 'zh-TW': '穩定感', id: 'Stabil', vi: 'Ổn định' } 
    ],
    cons: [ 
      { ko: '의존적', en: 'Dependent', ja: '依存', 'zh-CN': '依赖', 'zh-TW': '依賴', id: 'Bergantung', vi: 'Phụ thuộc' }, 
      { ko: '과한 애정', en: 'Excessive affection', ja: '過度な愛情', 'zh-CN': '过度关爱', 'zh-TW': '過度關愛', id: 'Kasih sayang berlebihan', vi: 'Tình cảm quá mức' }, 
      { ko: '질투 많음', en: 'Jealous', ja: '嫉妬深い', 'zh-CN': '容易嫉妒', 'zh-TW': '容易嫉妒', id: 'Cemburu', vi: 'Hay ghen tuông' }, 
      { ko: '개인 시간 부족', en: 'Lack of personal time', ja: '個人時間不足', 'zh-CN': '缺乏个人时间', 'zh-TW': '缺乏個人時間', id: 'Kurang waktu pribadi', vi: 'Thiếu thời gian riêng tư' } 
    ],
    advice: { 
      ko: '사랑도 중요하지만 서로의 공간도 필요해요. 가끔은 한 발 물러서서 지켜봐주세요.',
      en: 'Love is important, but you also need personal space. Sometimes step back and watch over them.',
      ja: '愛も大切ですが、お互いの空間も必要です。時には一歩引いて見守ってください。',
      'zh-CN': '爱情很重要，但彼此的空间也很必要。有时要退一步守护对方。',
      'zh-TW': '愛情很重要，但彼此的空間也很必要。有時要退一步守護對方。',
      id: 'Cinta itu penting, tapi ruang pribadi juga diperlukan. Terkadang mundur selangkah dan awasi mereka.',
      vi: 'Tình yêu rất quan trọng, nhưng cũng cần không gian riêng tư. Đôi khi hãy lùi lại một bước và quan sát họ.'
    },
    compatibility: { best: ['Type2'], good: ['Type5'], careful: ['Type6'], difficult: ['Type4'] },
  },
  {
    type: 'Type2',
    emoji: '🍓',
    title: { 
      ko: '새콤달콤 과일맛',
      en: 'Sweet and Sour Fruit Flavor',
      ja: '甘酸っぱい果物の味',
      'zh-CN': '酸甜水果味',
      'zh-TW': '酸甜水果味',
      id: 'Rasa Buah Manis Asam',
      vi: 'Vị Trái Cây Chua Ngọt'
    },
    description: { 
      ko: '신선한 과일처럼 새콤달콤하고 활기찹니다. 사랑도 중요하지만 함께 즐기고 웃는 순간을 더 소중히 여깁니다. 친구 같은 편안함과 연인의 설렘을 동시에 가진 스타일입니다. 즐겁고 건강하지만 때로는 깊이가 부족해 보일 수 있습니다.',
      en: 'Like fresh fruit, you are sweet and sour with vitality. Love is important, but you treasure moments of laughter and fun together even more. You have the comfort of friendship and the excitement of romance at the same time. You are joyful and healthy, but sometimes you may seem to lack depth.',
      ja: '新鮮な果物のように甘酸っぱくて活気があります。愛も大切ですが、一緒に楽しんで笑う瞬間をより大切にします。友達のような安らぎと恋人のときめきを同時に持つスタイルです。楽しくて健康的ですが、時には深さが不足しているように見えることがあります。',
      'zh-CN': '像新鲜水果一样酸甜有活力。爱情很重要，但你更珍惜一起欢笑快乐的时光。同时拥有朋友般的舒适和恋人的心动。虽然快乐健康，但有时可能显得缺乏深度。',
      'zh-TW': '像新鮮水果一樣酸甜有活力。愛情很重要，但你更珍惜一起歡笑快樂的時光。同時擁有朋友般的舒適和戀人的心動。雖然快樂健康，但有時可能顯得缺乏深度。',
      id: 'Seperti buah segar, Anda manis dan asam dengan vitalitas. Cinta itu penting, tapi Anda lebih menghargai momen tertawa dan bersenang-senang bersama. Anda memiliki kenyamanan persahabatan dan kegembiraan romansa pada saat yang sama. Anda menyenangkan dan sehat, tapi terkadang mungkin terlihat kurang mendalam.',
      vi: 'Như trái cây tươi, bạn chua ngọt và tràn đầy sức sống. Tình yêu rất quan trọng, nhưng bạn còn trân trọng những khoảnh khắc cười đùa và vui vẻ cùng nhau hơn. Bạn có sự thoải mái của tình bạn và sự hồi hộp của tình yêu cùng lúc. Bạn vui vẻ và khỏe mạnh, nhưng đôi khi có thể thiếu chiều sâu.'
    },
    pros: [ 
      { ko: '즐거움', en: 'Joyful', ja: '楽しい', 'zh-CN': '快乐', 'zh-TW': '快樂', id: 'Menyenangkan', vi: 'Vui vẻ' }, 
      { ko: '긍정적', en: 'Positive', ja: 'ポジティブ', 'zh-CN': '积极', 'zh-TW': '積極', id: 'Positif', vi: 'Tích cực' }, 
      { ko: '친근함', en: 'Friendly', ja: '親しみやすい', 'zh-CN': '亲切', 'zh-TW': '親切', id: 'Ramah', vi: 'Thân thiện' }, 
      { ko: '건강한 관계', en: 'Healthy relationship', ja: '健康的な関係', 'zh-CN': '健康关系', 'zh-TW': '健康關係', id: 'Hubungan sehat', vi: 'Mối quan hệ lành mạnh' } 
    ],
    cons: [ 
      { ko: '깊이 부족', en: 'Lack of depth', ja: '深さ不足', 'zh-CN': '缺乏深度', 'zh-TW': '缺乏深度', id: 'Kurang mendalam', vi: 'Thiếu chiều sâu' }, 
      { ko: '가벼워 보임', en: 'Seems light', ja: '軽く見える', 'zh-CN': '显得轻浮', 'zh-TW': '顯得輕浮', id: 'Terlihat ringan', vi: 'Có vẻ nhẹ nhàng' }, 
      { ko: '진지함 부족', en: 'Lack of seriousness', ja: '真剣さ不足', 'zh-CN': '缺乏认真', 'zh-TW': '缺乏認真', id: 'Kurang serius', vi: 'Thiếu nghiêm túc' } 
    ],
    advice: { 
      ko: '즐거움도 좋지만 가끔은 진지한 대화도 필요해요. 깊이를 더하면 완벽해집니다!',
      en: 'Joy is good, but sometimes serious conversations are needed too. Adding depth will make it perfect!',
      ja: '楽しさも良いですが、時には真剣な会話も必要です。深さを加えれば完璧になります！',
      'zh-CN': '快乐很好，但有时也需要认真的对话。增加深度就会完美！',
      'zh-TW': '快樂很好，但有時也需要認真的對話。增加深度就會完美！',
      id: 'Kesenangan itu baik, tapi terkadang percakapan serius juga diperlukan. Menambahkan kedalaman akan membuatnya sempurna!',
      vi: 'Niềm vui rất tốt, nhưng đôi khi cũng cần những cuộc trò chuyện nghiêm túc. Thêm chiều sâu sẽ hoàn hảo!'
    },
    compatibility: { best: ['Type1'], good: ['Type6'], careful: ['Type3'], difficult: ['Type5'] },
  },
  {
    type: 'Type3',
    emoji: '🍫',
    title: { 
      ko: '쌉싸름한 다크초콜릿맛',
      en: 'Bitter Dark Chocolate Flavor',
      ja: '苦いダークチョコレートの味',
      'zh-CN': '苦涩的黑巧克力味',
      'zh-TW': '苦澀的黑巧克力味',
      id: 'Rasa Cokelat Hitam Pahit',
      vi: 'Vị Sô Cô La Đen Đắng'
    },
    description: { 
      ko: '다크초콜릿처럼 깊고 성숙합니다. 겉으로 드러내는 애정보다 깊은 이해와 신뢰를 중시합니다. 진지한 대화와 정신적 교감을 통해 관계를 발전시킵니다. 성숙하고 안정적이지만 때로는 지나치게 무거워 보일 수 있습니다.',
      en: 'Like dark chocolate, you are deep and mature. You value deep understanding and trust more than outward affection. You develop relationships through serious conversations and spiritual connection. You are mature and stable, but sometimes you may seem overly heavy.',
      ja: 'ダークチョコレートのように深くて成熟しています。表面的な愛情よりも深い理解と信頼を重視します。真剣な会話と精神的な共感を通じて関係を発展させます。成熟していて安定していますが、時には重すぎるように見えることがあります。',
      'zh-CN': '像黑巧克力一样深沉成熟。你重视深刻的理解和信任胜过表面的爱意。通过认真的对话和精神交流发展关系。虽然成熟稳定，但有时可能显得过于沉重。',
      'zh-TW': '像黑巧克力一樣深沉成熟。你重視深刻的理解和信任勝過表面的愛意。通過認真的對話和精神交流發展關係。雖然成熟穩定，但有時可能顯得過於沉重。',
      id: 'Seperti cokelat hitam, Anda dalam dan matang. Anda menghargai pemahaman mendalam dan kepercayaan lebih dari kasih sayang yang terlihat. Anda mengembangkan hubungan melalui percakapan serius dan koneksi spiritual. Anda matang dan stabil, tapi terkadang mungkin terlihat terlalu berat.',
      vi: 'Như sô cô la đen, bạn sâu sắc và chín chắn. Bạn coi trọng sự hiểu biết sâu sắc và tin tưởng hơn là tình cảm bề ngoài. Bạn phát triển mối quan hệ qua những cuộc trò chuyện nghiêm túc và kết nối tinh thần. Bạn chín chắn và ổn định, nhưng đôi khi có thể trông quá nặng nề.'
    },
    pros: [ 
      { ko: '성숙함', en: 'Mature', ja: '成熟', 'zh-CN': '成熟', 'zh-TW': '成熟', id: 'Matang', vi: 'Chín chắn' }, 
      { ko: '깊이', en: 'Depth', ja: '深さ', 'zh-CN': '深度', 'zh-TW': '深度', id: 'Kedalaman', vi: 'Chiều sâu' }, 
      { ko: '신뢰', en: 'Trust', ja: '信頼', 'zh-CN': '信任', 'zh-TW': '信任', id: 'Kepercayaan', vi: 'Tin tưởng' }, 
      { ko: '지적 교감', en: 'Intellectual connection', ja: '知的共感', 'zh-CN': '精神交流', 'zh-TW': '精神交流', id: 'Koneksi intelektual', vi: 'Kết nối trí tuệ' } 
    ],
    cons: [ 
      { ko: '무거움', en: 'Heavy', ja: '重い', 'zh-CN': '沉重', 'zh-TW': '沉重', id: 'Berat', vi: 'Nặng nề' }, 
      { ko: '재미 부족', en: 'Lack of fun', ja: '楽しさ不足', 'zh-CN': '缺乏趣味', 'zh-TW': '缺乏趣味', id: 'Kurang menyenangkan', vi: 'Thiếu vui vẻ' }, 
      { ko: '감정 표현 서툼', en: 'Poor emotional expression', ja: '感情表現が下手', 'zh-CN': '情感表达生疏', 'zh-TW': '情感表達生疏', id: 'Ekspresi emosi buruk', vi: 'Biểu đạt cảm xúc kém' }, 
      { ko: '경직됨', en: 'Rigid', ja: '硬直的', 'zh-CN': '僵硬', 'zh-TW': '僵硬', id: 'Kaku', vi: 'Cứng nhắc' } 
    ],
    advice: { 
      ko: '진지함도 좋지만 가끔은 가볍게 웃고 즐기세요. 사랑에도 유머가 필요합니다!',
      en: 'Seriousness is good, but sometimes laugh and enjoy lightly. Love needs humor too!',
      ja: '真剣さも良いですが、時には軽く笑って楽しんでください。愛にもユーモアが必要です！',
      'zh-CN': '认真很好，但有时要轻松地笑和享受。爱情也需要幽默！',
      'zh-TW': '認真很好，但有時要輕鬆地笑和享受。愛情也需要幽默！',
      id: 'Keseriusan itu baik, tapi terkadang tertawa dan nikmati dengan ringan. Cinta juga butuh humor!',
      vi: 'Sự nghiêm túc rất tốt, nhưng đôi khi hãy cười và tận hưởng một cách nhẹ nhàng. Tình yêu cũng cần sự hài hước!'
    },
    compatibility: { best: ['Type5'], good: ['Type3'], careful: ['Type2'], difficult: ['Type4'] },
  },
  {
    type: 'Type4',
    emoji: '🌶️',
    title: { 
      ko: '매콤한 고추맛',
      en: 'Spicy Pepper Flavor',
      ja: '辛い胡椒の味',
      'zh-CN': '辛辣的胡椒味',
      'zh-TW': '辛辣的胡椒味',
      id: 'Rasa Cabai Pedas',
      vi: 'Vị Ớt Cay'
    },
    description: { 
      ko: '고추처럼 맵고 뜨겁고 강렬합니다. 사랑에 빠지면 모든 것을 쏟아붓고, 감정을 숨기지 않습니다. 격렬하게 사랑하고 격렬하게 싸우며 그만큼 화해도 드라마틱합니다. 열정적이지만 쉽게 지칠 수 있습니다.',
      en: 'Like pepper, you are spicy, hot, and intense. When you fall in love, you pour everything out and don\'t hide your emotions. You love fiercely and fight fiercely, and your reconciliation is just as dramatic. You are passionate but can easily get exhausted.',
      ja: '胡椒のように辛くて熱くて激しいです。恋に落ちると全てを注ぎ込み、感情を隠しません。激しく愛し、激しく戦い、その分和解もドラマチックです。情熱的ですが、簡単に疲れてしまうことがあります。',
      'zh-CN': '像胡椒一样辛辣火热强烈。坠入爱河时会倾注一切，不隐藏情感。激烈地爱，激烈地争吵，和解也同样戏剧性。虽然充满激情但容易疲惫。',
      'zh-TW': '像胡椒一樣辛辣火熱強烈。墜入愛河時會傾注一切，不隱藏情感。激烈地愛，激烈地爭吵，和解也同樣戲劇性。雖然充滿激情但容易疲憊。',
      id: 'Seperti cabai, Anda pedas, panas, dan intens. Saat jatuh cinta, Anda menuangkan segalanya dan tidak menyembunyikan emosi. Anda mencintai dengan sengit dan bertengkar dengan sengit, dan rekonsiliasi Anda sama dramatisnya. Anda penuh gairah tapi mudah lelah.',
      vi: 'Như ớt, bạn cay nồng, nóng bỏng và mãnh liệt. Khi yêu, bạn đổ hết mọi thứ và không che giấu cảm xúc. Bạn yêu mãnh liệt và cãi nhau mãnh liệt, và việc hòa giải cũng kịch tính như vậy. Bạn đam mê nhưng dễ mệt mỏi.'
    },
    pros: [ 
      { ko: '열정', en: 'Passion', ja: '情熱', 'zh-CN': '激情', 'zh-TW': '激情', id: 'Gairah', vi: 'Đam mê' }, 
      { ko: '솔직함', en: 'Honesty', ja: '正直', 'zh-CN': '诚实', 'zh-TW': '誠實', id: 'Kejujuran', vi: 'Thành thật' }, 
      { ko: '짜릿함', en: 'Thrilling', ja: 'スリル', 'zh-CN': '刺激', 'zh-TW': '刺激', id: 'Menegangkan', vi: 'Thú vị' }, 
      { ko: '강렬한 추억', en: 'Intense memories', ja: '強烈な思い出', 'zh-CN': '强烈回忆', 'zh-TW': '強烈回憶', id: 'Kenangan intens', vi: 'Kỷ niệm mãnh liệt' } 
    ],
    cons: [ 
      { ko: '불안정', en: 'Unstable', ja: '不安定', 'zh-CN': '不稳定', 'zh-TW': '不穩定', id: 'Tidak stabil', vi: 'Không ổn định' }, 
      { ko: '소모적', en: 'Exhausting', ja: '消耗的', 'zh-CN': '消耗性', 'zh-TW': '消耗性', id: 'Menguras tenaga', vi: 'Tiêu hao sức lực' }, 
      { ko: '극단적', en: 'Extreme', ja: '極端', 'zh-CN': '极端', 'zh-TW': '極端', id: 'Ekstrem', vi: 'Cực đoan' }, 
      { ko: '감정 기복', en: 'Emotional ups and downs', ja: '感情の起伏', 'zh-CN': '情绪波动', 'zh-TW': '情緒波動', id: 'Naik turun emosi', vi: 'Cảm xúc thăng trầm' } 
    ],
    advice: { 
      ko: '열정도 좋지만 때로는 차분함이 필요합니다. 사랑은 불꽃만으로는 오래 갈 수 없어요.',
      en: 'Passion is good, but sometimes calmness is needed. Love cannot last long with just sparks.',
      ja: '情熱も良いですが、時には冷静さが必要です。愛は火花だけでは長く続きません。',
      'zh-CN': '激情很好，但有时需要平静。爱情不能仅靠火花长久维持。',
      'zh-TW': '激情很好，但有時需要平靜。愛情不能僅靠火花長久維持。',
      id: 'Gairah itu baik, tapi terkadang ketenangan diperlukan. Cinta tidak bisa bertahan lama hanya dengan percikan api.',
      vi: 'Đam mê rất tốt, nhưng đôi khi cần sự bình tĩnh. Tình yêu không thể kéo dài chỉ với những tia lửa.'
    },
    compatibility: { best: ['Type4'], good: ['Type6'], careful: ['Type1'], difficult: ['Type3'] },
  },
  {
    type: 'Type5',
    emoji: '🥜',
    title: { 
      ko: '고소한 견과류맛',
      en: 'Nutty Flavor',
      ja: '香ばしいナッツの味',
      'zh-CN': '香醇的坚果味',
      'zh-TW': '香醇的堅果味',
      id: 'Rasa Kacang Gurih',
      vi: 'Vị Hạt Thơm Ngon'
    },
    description: { 
      ko: '견과류처럼 고소하고 편안하며 든든합니다. 화려한 이벤트보다 일상의 소소한 행복을 중시합니다. 친구 같은 편안함 속에 깊은 신뢰가 있습니다. 안정적이지만 초반 설렘이 부족할 수 있습니다.',
      en: 'Like nuts, you are savory, comfortable, and reliable. You value small daily happiness over flashy events. You have deep trust within the comfort of friendship. You are stable but may lack initial excitement.',
      ja: 'ナッツのように香ばしくて心地よくて頼もしいです。派手なイベントよりも日常の小さな幸せを大切にします。友達のような安らぎの中に深い信頼があります。安定していますが、最初のときめきが不足するかもしれません。',
      'zh-CN': '像坚果一样香醇舒适可靠。你重视日常的小幸福胜过华丽的活动。在朋友般的舒适中有深深的信任。虽然稳定但可能缺乏初期的兴奋。',
      'zh-TW': '像堅果一樣香醇舒適可靠。你重視日常的小幸福勝過華麗的活動。在朋友般的舒適中有深深的信任。雖然穩定但可能缺乏初期的興奮。',
      id: 'Seperti kacang, Anda gurih, nyaman, dan dapat diandalkan. Anda menghargai kebahagiaan kecil sehari-hari daripada acara yang mencolok. Anda memiliki kepercayaan mendalam dalam kenyamanan persahabatan. Anda stabil tapi mungkin kurang kegembiraan awal.',
      vi: 'Như các loại hạt, bạn thơm ngon, thoải mái và đáng tin cậy. Bạn coi trọng những niềm vui nhỏ hàng ngày hơn những sự kiện hoành tráng. Bạn có sự tin tưởng sâu sắc trong sự thoải mái của tình bạn. Bạn ổn định nhưng có thể thiếu sự hồi hộp ban đầu.'
    },
    pros: [ 
      { ko: '편안함', en: 'Comfort', ja: '心地よさ', 'zh-CN': '舒适', 'zh-TW': '舒適', id: 'Kenyamanan', vi: 'Thoải mái' }, 
      { ko: '안정감', en: 'Stability', ja: '安定感', 'zh-CN': '稳定感', 'zh-TW': '穩定感', id: 'Stabilitas', vi: 'Ổn định' }, 
      { ko: '신뢰', en: 'Trust', ja: '信頼', 'zh-CN': '信任', 'zh-TW': '信任', id: 'Kepercayaan', vi: 'Tin tưởng' }, 
      { ko: '지속 가능성', en: 'Sustainability', ja: '持続可能性', 'zh-CN': '可持续性', 'zh-TW': '可持續性', id: 'Keberlanjutan', vi: 'Bền vững' } 
    ],
    cons: [ 
      { ko: '설렘 부족', en: 'Lack of excitement', ja: 'ときめき不足', 'zh-CN': '缺乏兴奋', 'zh-TW': '缺乏興奮', id: 'Kurang kegembiraan', vi: 'Thiếu hồi hộp' }, 
      { ko: '지루함', en: 'Boredom', ja: '退屈', 'zh-CN': '无聊', 'zh-TW': '無聊', id: 'Kebosanan', vi: 'Nhàm chán' }, 
      { ko: '매너리즘', en: 'Mannerism', ja: 'マンネリ', 'zh-CN': '陈规', 'zh-TW': '陳規', id: 'Kebiasaan', vi: 'Thói quen' }, 
      { ko: '평범함', en: 'Ordinariness', ja: '平凡', 'zh-CN': '平凡', 'zh-TW': '平凡', id: 'Kebiasaan', vi: 'Bình thường' } 
    ],
    advice: { 
      ko: '편안함도 좋지만 가끔은 새로운 자극이 필요해요. 작은 이벤트로 설렘을 더해보세요!',
      en: 'Comfort is good, but sometimes you need new stimulation. Add excitement with small events!',
      ja: '心地よさも良いですが、時には新しい刺激が必要です。小さなイベントでときめきを加えてみてください！',
      'zh-CN': '舒适很好，但有时需要新的刺激。用小活动增加兴奋感！',
      'zh-TW': '舒適很好，但有時需要新的刺激。用小活動增加興奮感！',
      id: 'Kenyamanan itu baik, tapi terkadang Anda butuh stimulasi baru. Tambahkan kegembiraan dengan acara kecil!',
      vi: 'Sự thoải mái rất tốt, nhưng đôi khi bạn cần sự kích thích mới. Hãy thêm sự hồi hộp bằng những sự kiện nhỏ!'
    },
    compatibility: { best: ['Type3'], good: ['Type1'], careful: ['Type2'], difficult: ['Type4'] },
  },
  {
    type: 'Type6',
    emoji: '🌿',
    title: { 
      ko: '시원한 민트맛',
      en: 'Cool Mint Flavor',
      ja: '爽やかなミントの味',
      'zh-CN': '清凉的薄荷味',
      'zh-TW': '清涼的薄荷味',
      id: 'Rasa Mint Segar',
      vi: 'Vị Bạc Hà Mát Lạnh'
    },
    description: { 
      ko: '민트처럼 시원하고 상쾌하며 자유롭습니다. 서로의 독립성을 존중하고 집착하지 않습니다. 만날 때는 집중하지만 각자 시간도 소중히 여깁니다. 건강하고 성숙하지만 때로는 차갑게 보일 수 있습니다.',
      en: 'Like mint, you are cool, refreshing, and free. You respect each other\'s independence and don\'t obsess. You focus when you meet but also cherish your individual time. You are healthy and mature but may sometimes appear cold.',
      ja: 'ミントのように爽やかで清々しくて自由です。お互いの独立性を尊重し、執着しません。会う時は集中しますが、それぞれの時間も大切にします。健康的で成熟していますが、時には冷たく見えることがあります。',
      'zh-CN': '像薄荷一样清凉清爽自由。你尊重彼此的独立性，不执着。见面时专注，但也珍惜各自的时间。虽然健康成熟，但有时可能显得冷漠。',
      'zh-TW': '像薄荷一樣清涼清爽自由。你尊重彼此的獨立性，不執著。見面時專注，但也珍惜各自的時間。雖然健康成熟，但有時可能顯得冷漠。',
      id: 'Seperti mint, Anda sejuk, menyegarkan, dan bebas. Anda menghormati kemandirian satu sama lain dan tidak terobsesi. Anda fokus saat bertemu tapi juga menghargai waktu individual. Anda sehat dan matang tapi terkadang mungkin terlihat dingin.',
      vi: 'Như bạc hà, bạn mát mẻ, sảng khoái và tự do. Bạn tôn trọng sự độc lập của nhau và không ám ảnh. Bạn tập trung khi gặp nhau nhưng cũng trân trọng thời gian riêng. Bạn khỏe mạnh và chín chắn nhưng đôi khi có thể trông lạnh lùng.'
    },
    pros: [ 
      { ko: '독립적', en: 'Independent', ja: '独立的', 'zh-CN': '独立', 'zh-TW': '獨立', id: 'Mandiri', vi: 'Độc lập' }, 
      { ko: '자유로움', en: 'Freedom', ja: '自由', 'zh-CN': '自由', 'zh-TW': '自由', id: 'Kebebasan', vi: 'Tự do' }, 
      { ko: '쿨함', en: 'Coolness', ja: 'クール', 'zh-CN': '酷', 'zh-TW': '酷', id: 'Kesejukan', vi: 'Mát mẻ' }, 
      { ko: '건강한 거리', en: 'Healthy distance', ja: '健康的な距離', 'zh-CN': '健康距离', 'zh-TW': '健康距離', id: 'Jarak sehat', vi: 'Khoảng cách lành mạnh' } 
    ],
    cons: [ 
      { ko: '차가움', en: 'Coldness', ja: '冷たさ', 'zh-CN': '冷漠', 'zh-TW': '冷漠', id: 'Kedinginan', vi: 'Lạnh lùng' }, 
      { ko: '무관심해 보임', en: 'Seems indifferent', ja: '無関心に見える', 'zh-CN': '显得漠不关心', 'zh-TW': '顯得漠不關心', id: 'Terlihat acuh tak acuh', vi: 'Có vẻ thờ ơ' }, 
      { ko: '애정 표현 부족', en: 'Lack of affection', ja: '愛情表現不足', 'zh-CN': '缺乏爱意表达', 'zh-TW': '缺乏愛意表達', id: 'Kurang kasih sayang', vi: 'Thiếu tình cảm' }, 
      { ko: '거리감', en: 'Distance', ja: '距離感', 'zh-CN': '距离感', 'zh-TW': '距離感', id: 'Jarak', vi: 'Khoảng cách' } 
    ],
    advice: { 
      ko: '자유도 좋지만 가끔은 따뜻한 애정 표현도 필요해요. 사랑은 표현할 때 전해집니다!',
      en: 'Freedom is good, but sometimes warm affection is needed too. Love is conveyed when expressed!',
      ja: '自由も良いですが、時には温かい愛情表現も必要です。愛は表現する時に伝わります！',
      'zh-CN': '自由很好，但有时也需要温暖的爱意表达。爱在表达时才能传达！',
      'zh-TW': '自由很好，但有時也需要溫暖的愛意表達。愛在表達時才能傳達！',
      id: 'Kebebasan itu baik, tapi terkadang kasih sayang yang hangat juga diperlukan. Cinta tersampaikan saat diekspresikan!',
      vi: 'Tự do rất tốt, nhưng đôi khi cũng cần sự thể hiện tình cảm ấm áp. Tình yêu được truyền tải khi được thể hiện!'
    },
    compatibility: { best: ['Type4'], good: ['Type2'], careful: ['Type1'], difficult: ['Type5'] },
  },
];

export function calculateLoveFlavorResult(answers: Record<string, number>[]): LoveFlavorResult {
  const total: Record<string, number> = { Type1: 0, Type2: 0, Type3: 0, Type4: 0, Type5: 0, Type6: 0 };

  answers.forEach((scores) => {
    Object.entries(scores).forEach(([type, score]) => {
      total[type] = (total[type] || 0) + (score || 0);
    });
  });

  let max = -Infinity;
  let winners: string[] = [];
  Object.entries(total).forEach(([type, score]) => {
    if (score > max) {
      max = score;
      winners = [type];
    } else if (score === max) {
      winners.push(type);
    }
  });

  // tie-break using Q10-Q12 (indices 9..11)
  if (winners.length > 1) {
    const tieTotals: Record<string, number> = {} as any;
    winners.forEach(w => (tieTotals[w] = 0));
    for (let i = 9; i < 12 && i < answers.length; i++) {
      const scores = answers[i] || {};
      winners.forEach(w => {
        tieTotals[w] += scores[w] || 0;
      });
    }
    let tieMax = -Infinity;
    let picked = winners[0];
    winners.forEach(w => {
      if (tieTotals[w] > tieMax) {
        tieMax = tieTotals[w];
        picked = w;
      }
    });
    winners = [picked];
  }

  const pickedType = winners[0];
  const res = loveFlavorResults.find(r => r.type === pickedType)!;
  return res;
}