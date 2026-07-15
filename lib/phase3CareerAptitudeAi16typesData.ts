export type Phase3CareerAptitudeAxisTag = 'P' | 'C' | 'T' | 'A' | 'SS' | 'SD' | 'US' | 'UD';

export interface Phase3CareerAptitudeAi16typesQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    axisTag: Phase3CareerAptitudeAxisTag;
  }[];
}

export interface Phase3CareerAptitudeAi16typesResult {
  type: string; // e.g. "P-SS"
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  coreCompetencies: Record<string, string>;
  matchingJobs: Record<string, string>;
  growthPath: Record<string, string>;
  caution: Record<string, string>;
  firstCareer: Record<string, string>;
  shareMessage: Record<string, string>;
}

export const phase3CareerAptitudeAi16typesQuestions: Phase3CareerAptitudeAi16typesQuestion[] = [
  {
    id: 1,
    question: {
      ko: "친구에게 뭔가를 설명할 때 나는?",
      en: "When I explain something to a friend, I…",
      ja: "友達に何かを説明するとき、私は？",
      'zh-CN': "向朋友解释事情时，我会？",
      'zh-TW': "向朋友解釋事情時，我會？",
      vi: "Khi giải thích điều gì đó cho bạn, tôi thường…",
      id: "Saat menjelaskan sesuatu ke teman, aku biasanya…"
    },
    options: [
      {
        text: {
          ko: "상대방이 이해했는지 표정을 보면서 맞춰가며 설명한다",
          en: "Watch their expression and adjust until they understand",
          ja: "相手の表情を見ながら、理解度に合わせて説明する",
          'zh-CN': "边看对方表情边调整讲法，直到对方真正听懂",
          'zh-TW': "邊看對方表情邊調整說法，直到對方真正聽懂",
          vi: "Nhìn biểu cảm và điều chỉnh cách nói cho đến khi họ hiểu",
          id: "Melihat ekspresi mereka dan menyesuaikan penjelasan sampai paham"
        },
        axisTag: 'P',
      },
      {
        text: {
          ko: "비유나 그림을 그려가면서 흥미롭게 전달한다",
          en: "Use metaphors or drawings to make it engaging",
          ja: "たとえや絵を交えておもしろく伝える",
          'zh-CN': "用比喻或画图，讲得更有趣好懂",
          'zh-TW': "用比喻或畫圖，講得更有趣好懂",
          vi: "Dùng ví dụ hoặc hình vẽ để kể chuyện hấp dẫn hơn",
          id: "Pakai metafora atau gambar supaya lebih menarik"
        },
        axisTag: 'C',
      },
      {
        text: {
          ko: "구조나 원리를 단계적으로 정확하게 설명한다",
          en: "Explain the structure or principles clearly, step by step",
          ja: "構造や原理を段階的に正確に説明する",
          'zh-CN': "按步骤把结构或原理讲清楚",
          'zh-TW': "按步驟把結構或原理講清楚",
          vi: "Giải thích cấu trúc hoặc nguyên lý từng bước cho rõ",
          id: "Menjelaskan struktur atau prinsip langkah demi langkah dengan jelas"
        },
        axisTag: 'T',
      },
      {
        text: {
          ko: "핵심 데이터나 근거를 먼저 제시하고 결론을 낸다",
          en: "Lead with key data or evidence, then reach a conclusion",
          ja: "まず核心データや根拠を示してから結論を出す",
          'zh-CN': "先抛出关键数据或依据，再下结论",
          'zh-TW': "先拋出關鍵數據或依據，再下結論",
          vi: "Đưa dữ liệu hoặc bằng chứng chính trước, rồi mới kết luận",
          id: "Sajikan data atau bukti kunci dulu, baru tarik kesimpulan"
        },
        axisTag: 'A',
      },
    ],
  },
  {
    id: 2,
    question: {
      ko: "주말에 완전히 자유로운 시간이 생긴다면 자연스럽게 하게 되는 것은?",
      en: "If I had a completely free weekend, I would naturally…",
      ja: "週末に完全に自由な時間ができたら、自然とやりたくなることは？",
      'zh-CN': "如果周末完全空闲，我自然会去做的是？",
      'zh-TW': "如果週末完全空閒，我自然會去做的是？",
      vi: "Nếu cuối tuần hoàn toàn rảnh, tôi tự nhiên sẽ…",
      id: "Kalau akhir pekan benar-benar kosong, aku secara alami akan…"
    },
    options: [
      {
        text: {
          ko: "오랫동안 보고 싶었던 사람을 만나거나 새로운 사람을 사귄다",
          en: "Meet someone I have wanted to see, or connect with someone new",
          ja: "長い間会いたかった人に会ったり、新しい人と知り合う",
          'zh-CN': "见想见已久的人，或结识新朋友",
          'zh-TW': "見想見已久的人，或結識新朋友",
          vi: "Gặp người đã lâu muốn gặp, hoặc làm quen người mới",
          id: "Bertemu orang yang sudah lama ingin kutemui, atau kenalan baru"
        },
        axisTag: 'P',
      },
      {
        text: {
          ko: "뭔가를 만들거나 표현한다. 글·그림·음악·영상 등 형태는 달라도 됨",
          en: "Create or express something — writing, drawing, music, video, any form",
          ja: "何かを作ったり表現する（文章・絵・音楽・映像など形は問わない）",
          'zh-CN': "去做点创作或表达——文字、画、音乐、影像都行",
          'zh-TW': "去做點創作或表達——文字、畫、音樂、影像都行",
          vi: "Tạo hoặc thể hiện gì đó — chữ, vẽ, nhạc, video đều được",
          id: "Menciptakan atau mengekspresikan sesuatu — tulisan, gambar, musik, video, terserah bentuknya"
        },
        axisTag: 'C',
      },
      {
        text: {
          ko: "새로운 기술이나 도구를 배우거나 무언가를 직접 만들어본다",
          en: "Learn a new skill or tool, or build something myself",
          ja: "新しいスキルやツールを学んだり、何かを自分で作ってみる",
          'zh-CN': "学个新技能或工具，或者亲手做点东西",
          'zh-TW': "學個新技能或工具，或者親手做點東西",
          vi: "Học kỹ năng hoặc công cụ mới, hoặc tự tay làm một thứ gì đó",
          id: "Belajar skill atau alat baru, atau bikin sesuatu sendiri"
        },
        axisTag: 'T',
      },
      {
        text: {
          ko: "궁금했던 주제를 깊이 파고들어 조사하거나 분석한다",
          en: "Dig into a topic I have been curious about and research or analyze it",
          ja: "気になっていたテーマを深く掘り下げて調べたり分析する",
          'zh-CN': "深入挖一个一直好奇的话题，去做研究或分析",
          'zh-TW': "深入挖一個一直好奇的話題，去做研究或分析",
          vi: "Đào sâu chủ đề mình tò mò và nghiên cứu hoặc phân tích",
          id: "Menggali topik yang sejak dulu membuat penasaran, lalu meneliti atau menganalisisnya"
        },
        axisTag: 'A',
      },
    ],
  },
  {
    id: 3,
    question: {
      ko: "일할 때 가장 보람을 느끼는 순간은?",
      en: "When do I feel most fulfilled at work?",
      ja: "働くとき、いちばんやりがいを感じる瞬間は？",
      'zh-CN': "工作时最有成就感的时刻是？",
      'zh-TW': "工作時最有成就感的時刻是？",
      vi: "Khoảnh khắc nào khiến tôi thấy ý nghĩa nhất khi làm việc?",
      id: "Kapan aku merasa paling berkesan saat bekerja?"
    },
    options: [
      {
        text: {
          ko: "내가 도운 사람이 성장하거나 문제가 해결되는 것을 볼 때",
          en: "When someone I helped grows, or when their problem gets solved",
          ja: "助けた人が成長したり、問題が解決するのを見たとき",
          'zh-CN': "看到我帮过的人成长，或问题被解决时",
          'zh-TW': "看到我幫過的人成長，或問題被解決時",
          vi: "Khi thấy người mình giúp trưởng thành, hoặc vấn đề được giải quyết",
          id: "Saat melihat orang yang kubantu tumbuh, atau masalahnya terselesaikan"
        },
        axisTag: 'P',
      },
      {
        text: {
          ko: "내가 만든 것이 누군가를 감동시키거나 반응을 이끌어낼 때",
          en: "When something I made moves someone or sparks a reaction",
          ja: "自分が作ったものが誰かを動かし、反応を引き出したとき",
          'zh-CN': "当我做的东西打动别人、引发反应时",
          'zh-TW': "當我做的東西打動別人、引發反應時",
          vi: "Khi thứ mình tạo ra chạm đến ai đó hoặc khiến họ phản ứng",
          id: "Saat karya yang kubuat menyentuh orang atau memicu respons"
        },
        axisTag: 'C',
      },
      {
        text: {
          ko: "내가 설계하거나 구현한 것이 실제로 작동할 때",
          en: "When something I designed or built actually works",
          ja: "設計・実装したものが実際に動いたとき",
          'zh-CN': "当我设计或做出来的东西真正跑通时",
          'zh-TW': "當我設計或做出來的東西真正跑通時",
          vi: "Khi thứ mình thiết kế hoặc dựng lên thực sự chạy được",
          id: "Saat yang kurancang atau bangun benar-benar berjalan"
        },
        axisTag: 'T',
      },
      {
        text: {
          ko: "복잡한 데이터나 문제에서 패턴을 발견하고 결론을 낼 때",
          en: "When I spot a pattern in messy data or a tough problem and reach a clear conclusion",
          ja: "複雑なデータや問題からパターンを見出し、結論を出せたとき",
          'zh-CN': "从复杂数据或问题中找到规律并得出结论时",
          'zh-TW': "從複雜數據或問題中找到規律並得出結論時",
          vi: "Khi nhận ra quy luật trong dữ liệu hoặc vấn đề phức tạp rồi chốt được kết luận",
          id: "Saat menemukan pola dari data atau masalah rumit lalu menarik kesimpulan"
        },
        axisTag: 'A',
      },
    ],
  },
  {
    id: 4,
    question: {
      ko: "프로젝트에서 내가 자연스럽게 맡는 역할은?",
      en: "In a project, the role I naturally take is…",
      ja: "プロジェクトで自然と引き受ける役割は？",
      'zh-CN': "在项目里，我自然会承担的角色是？",
      'zh-TW': "在專案裡，我自然會承擔的角色是？",
      vi: "Trong dự án, vai trò tôi tự nhiên đảm nhận là…",
      id: "Dalam proyek, peran yang secara alami kuambil adalah…"
    },
    options: [
      {
        text: {
          ko: "팀원들의 의견을 조율하고 갈등을 중재하는 역할",
          en: "Coordinate teammates’ views and mediate conflicts",
          ja: "メンバーの意見を調整し、衝突を仲裁する役割",
          'zh-CN': "协调成员意见、调解冲突",
          'zh-TW': "協調成員意見、調解衝突",
          vi: "Điều phối ý kiến thành viên và hòa giải xung đột",
          id: "Menyelaraskan pendapat tim dan menengahi konflik"
        },
        axisTag: 'P',
      },
      {
        text: {
          ko: "아이디어를 내고 콘셉트와 방향을 제안하는 역할",
          en: "Spark ideas and propose concepts and direction",
          ja: "アイデアを出し、コンセプトや方向性を提案する役割",
          'zh-CN': "抛点子，提出概念和方向",
          'zh-TW': "拋點子，提出概念和方向",
          vi: "Đưa ý tưởng và đề xuất concept cùng hướng đi",
          id: "Mengeluarkan ide dan mengusulkan konsep serta arah"
        },
        axisTag: 'C',
      },
      {
        text: {
          ko: "실제로 구현하고 완성시키는 기술적 역할",
          en: "Build it for real and get it over the finish line",
          ja: "実装してちゃんと仕上げる技術的な役割",
          'zh-CN': "真正动手实现并把它做完",
          'zh-TW': "真正動手實現並把它做完",
          vi: "Triển khai thực tế và hoàn thiện sản phẩm",
          id: "Mengerjakan implementasi secara nyata sampai selesai"
        },
        axisTag: 'T',
      },
      {
        text: {
          ko: "자료를 수집·분석해서 의사결정 근거를 만드는 역할",
          en: "Gather and analyze information to back decisions",
          ja: "資料を集めて分析し、意思決定の根拠をつくる役割",
          'zh-CN': "收集分析资料，为决策提供依据",
          'zh-TW': "收集分析資料，為決策提供依據",
          vi: "Thu thập và phân tích dữ liệu để làm căn cứ quyết định",
          id: "Mengumpulkan dan menganalisis data sebagai dasar keputusan"
        },
        axisTag: 'A',
      },
    ],
  },
  {
    id: 5,
    question: {
      ko: "나를 가장 잘 표현하는 학창 시절 모습은?",
      en: "Which school-days version of me feels most true?",
      ja: "学生時代の自分をいちばんよく表すのは？",
      'zh-CN': "学生时代最像我的样子是？",
      'zh-TW': "學生時代最像我的樣子是？",
      vi: "Hình ảnh thời đi học nào giống tôi nhất?",
      id: "Gambaran masa sekolah mana yang paling menggambarkan diriku?"
    },
    options: [
      {
        text: {
          ko: "친구들 사이에서 분위기를 만들거나 갈등을 해결하는 역할이었다",
          en: "I set the vibe among friends or helped resolve conflicts",
          ja: "友人の間で場の空気をつくったり、もめごとを収める役割だった",
          'zh-CN': "我是朋友里调节气氛或化解矛盾的那个人",
          'zh-TW': "我是朋友裡調節氣氛或化解矛盾的那個人",
          vi: "Tôi là người tạo không khí hoặc dàn xếp xung đột giữa bạn bè",
          id: "Aku jadi orang yang meramaikan suasana atau meredakan konflik antar teman"
        },
        axisTag: 'P',
      },
      {
        text: {
          ko: "작문·미술·발표 등 표현하는 활동에서 두각을 나타냈다",
          en: "I stood out in expressive activities like writing, art, and presenting",
          ja: "作文・美術・発表など表現する活動で頭角を現した",
          'zh-CN': "我在写作、美术、演讲这类表达活动里特别突出",
          'zh-TW': "我在寫作、美術、演講這類表達活動裡特別突出",
          vi: "Tôi nổi bật ở hoạt động biểu đạt như viết, mỹ thuật, thuyết trình",
          id: "Aku menonjol di kegiatan ekspresif seperti menulis, seni, dan presentasi"
        },
        axisTag: 'C',
      },
      {
        text: {
          ko: "수학·과학·기술 과목이 재밌었고 만들거나 조립하는 걸 좋아했다",
          en: "I enjoyed math, science, and tech — and loved making or assembling things",
          ja: "数学・科学・技術が好きで、作ったり組み立てたりするのが楽しかった",
          'zh-CN': "我喜欢数学、科学、技术课，也爱动手做或拼装",
          'zh-TW': "我喜歡數學、科學、技術課，也愛動手做或組裝",
          vi: "Tôi thích toán, khoa học, công nghệ — và yêu thích chế tạo, lắp ráp",
          id: "Aku suka matematika, sains, dan teknologi — serta senang merakit atau membuat sesuatu"
        },
        axisTag: 'T',
      },
      {
        text: {
          ko: "논리적으로 따지거나 통계·수치를 다루는 것이 편안했다",
          en: "I felt at ease reasoning logically or working with stats and numbers",
          ja: "論理的に考えることや、統計・数値を扱うのが得意で心地よかった",
          'zh-CN': "逻辑推敲、摆弄统计和数字让我感觉自在",
          'zh-TW': "邏輯推敲、擺弄統計和數字讓我感覺自在",
          vi: "Tôi thấy thoải mái khi lập luận logic hoặc làm việc với số liệu thống kê",
          id: "Aku merasa nyaman berpikir logis atau mengutak-atik statistik dan angka"
        },
        axisTag: 'A',
      },
    ],
  },
  {
    id: 6,
    question: {
      ko: "완전히 새로운 일을 시작할 때 나의 접근 방식은?",
      en: "When I start something totally new, my approach is…",
      ja: "まったく新しいことを始めるときのアプローチは？",
      'zh-CN': "开始全新的事时，我的做法是？",
      'zh-TW': "開始全新的事時，我的做法是？",
      vi: "Khi bắt đầu việc hoàn toàn mới, cách tôi làm là…",
      id: "Saat memulai hal benar-benar baru, pendekatanku adalah…"
    },
    options: [
      {
        text: {
          ko: "그 분야 사람들과 먼저 대화하고 관계를 통해 배운다",
          en: "Talk to people in the field first and learn through relationships",
          ja: "まずその分野の人と話し、関係を通して学ぶ",
          'zh-CN': "先跟圈内人聊，从关系里学",
          'zh-TW': "先跟圈內人聊，從關係裡學",
          vi: "Nói chuyện với người trong ngành trước và học qua mối quan hệ",
          id: "Bicara dulu dengan orang di bidang itu dan belajar lewat relasi"
        },
        axisTag: 'P',
      },
      {
        text: {
          ko: "직접 만들어보거나 실험해보면서 창의적으로 접근한다",
          en: "Jump in creatively by making or experimenting myself",
          ja: "自分で作ったり試したりしながら創造的に進める",
          'zh-CN': "先动手做、边试边想，创意切入",
          'zh-TW': "先動手做、邊試邊想，創意切入",
          vi: "Nhảy vào sáng tạo bằng cách tự làm hoặc thử nghiệm",
          id: "Melesat kreatif dengan langsung bikin atau bereksperimen sendiri"
        },
        axisTag: 'C',
      },
      {
        text: {
          ko: "원리와 구조를 먼저 파악하고 체계적으로 습득한다",
          en: "Map the principles and structure first, then learn systematically",
          ja: "まず原理と構造を押さえ、体系的に習得する",
          'zh-CN': "先搞懂原理和结构，再系统学习",
          'zh-TW': "先搞懂原理和結構，再系統學習",
          vi: "Nắm nguyên lý và cấu trúc trước, rồi học có hệ thống",
          id: "Pahami dulu prinsip dan struktur, lalu pelajari secara sistematis"
        },
        axisTag: 'T',
      },
      {
        text: {
          ko: "관련 데이터와 사례를 수집해서 분석한 후 전략을 세운다",
          en: "Collect and analyze relevant data and cases, then build a strategy",
          ja: "関連データや事例を集めて分析し、その後に戦略を立てる",
          'zh-CN': "先收集相关数据和案例做分析，再定策略",
          'zh-TW': "先收集相關數據和案例做分析，再定策略",
          vi: "Thu thập và phân tích dữ liệu cùng case, rồi mới dựng chiến lược",
          id: "Kumpulkan dan analisis data serta kasus terkait, baru susun strategi"
        },
        axisTag: 'A',
      },
    ],
  },
  {
    id: 7,
    question: {
      ko: "하루 일과 중 에너지가 가장 잘 나는 환경은?",
      en: "Which environment gives me the most energy during the day?",
      ja: "一日の仕事の中で、いちばんエネルギーが出る環境は？",
      'zh-CN': "一天里最能给我能量的环境是？",
      'zh-TW': "一天裡最能給我能量的環境是？",
      vi: "Môi trường nào giúp tôi tràn năng lượng nhất trong ngày?",
      id: "Lingkungan mana yang paling memberi energi sepanjang hari?"
    },
    options: [
      {
        text: {
          ko: "여러 사람과 활발하게 소통하고 협력하는 환경",
          en: "Actively communicating and collaborating with many people",
          ja: "多くの人と活発にコミュニケーションし、協力する環境",
          'zh-CN': "和许多人频繁沟通、一起协作",
          'zh-TW': "和許多人頻繁溝通、一起協作",
          vi: "Giao tiếp và cộng tác sôi nổi với nhiều người",
          id: "Komunikasi dan kolaborasi aktif dengan banyak orang"
        },
        axisTag: 'SS',
      },
      {
        text: {
          ko: "다양한 사람을 만나고 새로운 상황에 계속 노출되는 환경",
          en: "Meeting varied people and constantly facing new situations",
          ja: "いろんな人と出会い、新しい状況に次々触れる環境",
          'zh-CN': "结识各种各样的人，不断接触新状况",
          'zh-TW': "結識各種各樣的人，不斷接觸新狀況",
          vi: "Gặp nhiều kiểu người và liên tục đối mặt tình huống mới",
          id: "Bertemu beragam orang dan terus terpapar situasi baru"
        },
        axisTag: 'SD',
      },
      {
        text: {
          ko: "혼자 조용히 집중해서 깊이 있게 작업하는 환경",
          en: "Working alone in quiet focus, going deep",
          ja: "一人で静かに集中し、深く作業できる環境",
          'zh-CN': "独自安静地深度专注工作",
          'zh-TW': "獨自安靜地深度專注工作",
          vi: "Làm việc một mình, yên lặng và đi sâu",
          id: "Bekerja sendiri dengan fokus tenang dan mendalam"
        },
        axisTag: 'US',
      },
      {
        text: {
          ko: "혼자이지만 끊임없이 새로운 문제를 탐구하는 환경",
          en: "Working independently while constantly exploring new problems",
          ja: "一人でも、絶えず新しい課題を探り続ける環境",
          'zh-CN': "虽是独自工作，却在不断探索新问题",
          'zh-TW': "雖是獨自工作，卻在不斷探索新問題",
          vi: "Làm độc lập nhưng không ngừng khám phá vấn đề mới",
          id: "Bekerja mandiri sambil terus mengeksplorasi masalah baru"
        },
        axisTag: 'UD',
      },
    ],
  },
  {
    id: 8,
    question: {
      ko: "이상적인 직장 문화는?",
      en: "What feels like my ideal workplace culture?",
      ja: "理想の職場文化は？",
      'zh-CN': "我理想的职场文化是？",
      'zh-TW': "我理想的職場文化是？",
      vi: "Văn hóa nơi làm việc lý tưởng với tôi là gì?",
      id: "Budaya kerja ideal bagiku seperti apa?"
    },
    options: [
      {
        text: {
          ko: "안정적이고 체계가 있으며 팀워크를 중시하는 조직",
          en: "Stable and structured, with teamwork front and center",
          ja: "安定していて仕組みがあり、チームワークを大切にする組織",
          'zh-CN': "稳定有体系，重视团队合作",
          'zh-TW': "穩定有體系，重視團隊合作",
          vi: "Ổn định, có hệ thống và coi trọng teamwork",
          id: "Stabil, terstruktur, dan mengutamakan teamwork"
        },
        axisTag: 'SS',
      },
      {
        text: {
          ko: "도전적이고 빠르게 움직이며 다양한 사람과 네트워킹하는 조직",
          en: "Challenging and fast-moving, with lots of networking",
          ja: "挑戦的で動きが速く、多様な人とネットワークできる組織",
          'zh-CN': "有挑战、节奏快，能拓展多元人脉",
          'zh-TW': "有挑戰、節奏快，能拓展多元人脈",
          vi: "Đầy thử thách, chuyển động nhanh và networking mạnh",
          id: "Menantang, bergerak cepat, dengan networking yang luas"
        },
        axisTag: 'SD',
      },
      {
        text: {
          ko: "개인 작업이 존중되고 전문성이 인정받는 안정적인 조직",
          en: "Stable place that respects solo work and recognizes expertise",
          ja: "個人の作業が尊重され、専門性が認められる安定した組織",
          'zh-CN': "尊重个人深耕、认可专业能力的稳定组织",
          'zh-TW': "尊重個人深耕、認可專業能力的穩定組織",
          vi: "Ổn định, tôn trọng làm việc độc lập và ghi nhận chuyên môn",
          id: "Stabil, menghargai kerja mandiri, dan mengakui keahlian"
        },
        axisTag: 'US',
      },
      {
        text: {
          ko: "자율성이 높고 실험과 혁신을 장려하는 조직",
          en: "High autonomy, with experimentation and innovation encouraged",
          ja: "自律性が高く、実験と革新を奨励する組織",
          'zh-CN': "高度自主，鼓励实验与创新",
          'zh-TW': "高度自主，鼓勵實驗與創新",
          vi: "Tự chủ cao, khuyến khích thử nghiệm và đổi mới",
          id: "Otonomi tinggi, mendorong eksperimen dan inovasi"
        },
        axisTag: 'UD',
      },
    ],
  },
  {
    id: 9,
    question: {
      ko: "업무 방식 중 가장 잘 맞는 것은?",
      en: "Which work style fits me best?",
      ja: "いちばんしっくりくる働き方は？",
      'zh-CN': "哪种工作方式最适合我？",
      'zh-TW': "哪種工作方式最適合我？",
      vi: "Cách làm việc nào hợp tôi nhất?",
      id: "Cara kerja mana yang paling cocok denganku?"
    },
    options: [
      {
        text: {
          ko: "정기적인 회의·협업·발표가 있는 팀 중심 업무",
          en: "Team-centered work with regular meetings, collab, and presentations",
          ja: "定例の会議・協働・発表があるチーム中心の仕事",
          'zh-CN': "以团队为主：定期开会、协作、汇报",
          'zh-TW': "以團隊為主：定期開會、協作、報告",
          vi: "Làm việc theo nhóm với họp, cộng tác và thuyết trình định kỳ",
          id: "Kerja berpusat tim dengan rapat, kolaborasi, dan presentasi rutin"
        },
        axisTag: 'SS',
      },
      {
        text: {
          ko: "외부와 활발하게 교류하고 빠르게 변화에 대응하는 업무",
          en: "Work that stays in touch with the outside and adapts quickly to change",
          ja: "外部と活発にやり取りし、変化にすばやく対応する仕事",
          'zh-CN': "对外交流多，并能快速应对变化",
          'zh-TW': "對外交流多，並能快速應對變化",
          vi: "Công việc giao lưu nhiều với bên ngoài và thích ứng nhanh với thay đổi",
          id: "Pekerjaan yang aktif berhubungan dengan luar dan cepat beradaptasi dengan perubahan"
        },
        axisTag: 'SD',
      },
      {
        text: {
          ko: "명확한 범위 안에서 깊이 있게 혼자 완성하는 업무",
          en: "Deep solo work within a clear scope that I can finish myself",
          ja: "明確な範囲の中で、一人で深く仕上げる仕事",
          'zh-CN': "在清晰范围内独立深做并收尾",
          'zh-TW': "在清晰範圍內獨立深做並收尾",
          vi: "Làm sâu một mình trong phạm vi rõ ràng và hoàn tất",
          id: "Kerja mendalam sendirian dalam lingkup jelas sampai selesai"
        },
        axisTag: 'US',
      },
      {
        text: {
          ko: "정해진 틀 없이 스스로 탐구하고 새로운 방법을 찾는 업무",
          en: "Exploring freely and inventing new approaches without a fixed mold",
          ja: "決まった型にとらわれず、自分で探り新しいやり方を見つける仕事",
          'zh-CN': "不困在固定框架里，自己探索、找新方法",
          'zh-TW': "不困在固定框架裡，自己探索、找新方法",
          vi: "Tự khám phá và tìm cách mới mà không bị khuôn sẵn",
          id: "Bereksplorasi bebas dan mencari cara baru tanpa kerangka baku"
        },
        axisTag: 'UD',
      },
    ],
  },
  {
    id: 10,
    question: {
      ko: "직업 안정성과 도전성 중 어느 쪽이 더 중요한가요?",
      en: "Which matters more to me: stability or challenge?",
      ja: "仕事の安定性と挑戦性、どちらがより大切？",
      'zh-CN': "对我来说，工作稳定和挑战哪个更重要？",
      'zh-TW': "對我來說，工作穩定和挑戰哪個更重要？",
      vi: "Điều nào quan trọng hơn với tôi: ổn định hay thử thách?",
      id: "Mana yang lebih penting bagiku: stabilitas atau tantangan?"
    },
    options: [
      {
        text: {
          ko: "안정성. 예측 가능한 환경에서 꾸준히 성장하는 것이 좋다",
          en: "Stability — I grow best in a predictable setting",
          ja: "安定性。予測できる環境で着実に伸びたい",
          'zh-CN': "稳定性。我更想在可预期的环境里稳步成长",
          'zh-TW': "穩定性。我更想在可預期的環境裡穩定成長",
          vi: "Ổn định — tôi phát triển tốt nhất trong môi trường có thể đoán trước",
          id: "Stabilitas — aku tumbuh optimal di lingkungan yang bisa diprediksi"
        },
        axisTag: 'SS',
      },
      {
        text: {
          ko: "도전성. 리스크가 있어도 새로운 기회를 추구하는 것이 맞다",
          en: "Challenge — I chase new opportunities even with risk",
          ja: "挑戦性。リスクがあっても新しい機会を追い求めたい",
          'zh-CN': "挑战性。即使有风险，我也想追新机会",
          'zh-TW': "挑戰性。即使有風險，我也想追新機會",
          vi: "Thử thách — tôi theo cơ hội mới dù có rủi ro",
          id: "Tantangan — aku mengejar peluang baru meski ada risiko"
        },
        axisTag: 'SD',
      },
      {
        text: {
          ko: "안정성. 조용하고 전문적인 분야에서 깊이를 쌓고 싶다",
          en: "Stability — I want to go deep in a quiet, specialized field",
          ja: "安定性。静かで専門的な分野で深みを積みたい",
          'zh-CN': "稳定性。我想在安静、专业的领域把深度做足",
          'zh-TW': "穩定性。我想在安靜、專業的領域把深度做足",
          vi: "Ổn định — tôi muốn đào sâu trong lĩnh vực yên tĩnh, chuyên môn",
          id: "Stabilitas — aku ingin membangun kedalaman di bidang tenang dan spesialis"
        },
        axisTag: 'US',
      },
      {
        text: {
          ko: "도전성. 아무도 가지 않은 길을 혼자 개척하는 것이 맞다",
          en: "Challenge — I thrive pioneering paths others have not taken",
          ja: "挑戦性。誰も行っていない道を一人で切り開きたい",
          'zh-CN': "挑战性。我更适合独自开辟少有人走的路",
          'zh-TW': "挑戰性。我更適合獨自開闢少有人走的路",
          vi: "Thử thách — tôi hợp việc tự mở đường chưa ai đi",
          id: "Tantangan — aku cocok merintis jalan yang belum dilalui orang lain"
        },
        axisTag: 'UD',
      },
    ],
  },
  {
    id: 11,
    question: {
      ko: "10년 후 내 커리어를 상상할 때 가장 끌리는 모습은?",
      en: "Imagining my career in 10 years, what pulls me most?",
      ja: "10年後のキャリアを想像したとき、いちばん惹かれる姿は？",
      'zh-CN': "想象十年后的职业，最吸引我的画面是？",
      'zh-TW': "想像十年後的職涯，最吸引我的畫面是？",
      vi: "Khi tưởng tượng sự nghiệp 10 năm nữa, hình ảnh nào kéo tôi nhất?",
      id: "Saat membayangkan karier 10 tahun lagi, gambaran mana yang paling menarik?"
    },
    options: [
      {
        text: {
          ko: "조직 안에서 팀을 이끌고 사람들과 함께 목표를 달성하는 모습",
          en: "Leading a team inside an organization and hitting goals together",
          ja: "組織の中でチームを率い、人と一緒に目標を達成している姿",
          'zh-CN': "在组织里带队，和大家一起达成目标",
          'zh-TW': "在組織裡帶隊，和大家一起達成目標",
          vi: "Dẫn dắt team trong tổ chức và cùng mọi người đạt mục tiêu",
          id: "Memimpin tim di dalam organisasi dan meraih target bersama"
        },
        axisTag: 'SS',
      },
      {
        text: {
          ko: "업계에서 영향력 있는 사람으로 다양한 프로젝트를 이끄는 모습",
          en: "Being an influential figure in the industry, driving varied projects",
          ja: "業界で影響力ある存在として、多様なプロジェクトを引っ張っている姿",
          'zh-CN': "成为行业里有影响力的人，牵头各种项目",
          'zh-TW': "成為行業裡有影響力的人，牽頭各種專案",
          vi: "Trở thành người có ảnh hưởng trong ngành, dẫn nhiều dự án khác nhau",
          id: "Jadi sosok berpengaruh di industri dan memimpin beragam proyek"
        },
        axisTag: 'SD',
      },
      {
        text: {
          ko: "한 분야의 전문가로 깊이 있는 지식과 기술을 보유한 모습",
          en: "Being a deep expert with sharp knowledge and craft in one field",
          ja: "一つの分野の専門家として、深い知識とスキルを持っている姿",
          'zh-CN': "成为某一领域的专家，拥有深厚知识与技艺",
          'zh-TW': "成為某一領域的專家，擁有深厚知識與技藝",
          vi: "Là chuyên gia sâu trong một lĩnh vực với kiến thức và kỹ năng chắc",
          id: "Jadi pakar mendalam di satu bidang dengan pengetahuan dan skill yang kuat"
        },
        axisTag: 'US',
      },
      {
        text: {
          ko: "새로운 분야를 개척하거나 독자적인 방식으로 일하는 모습",
          en: "Opening new fields or working in a distinctly original way",
          ja: "新しい分野を拓くか、独自のやり方で働いている姿",
          'zh-CN': "开拓新领域，或以独创方式工作",
          'zh-TW': "開拓新領域，或以獨創方式工作",
          vi: "Mở lĩnh vực mới hoặc làm việc theo cách rất riêng",
          id: "Merintis bidang baru atau bekerja dengan cara yang sangat khas"
        },
        axisTag: 'UD',
      },
    ],
  },
  {
    id: 12,
    question: {
      ko: "일에서 가장 참기 어려운 것은?",
      en: "What is hardest for me to endure at work?",
      ja: "仕事でいちばん耐え難いのは？",
      'zh-CN': "工作中我最难忍受的是？",
      'zh-TW': "工作中我最難忍受的是？",
      vi: "Điều gì khó chịu đựng nhất với tôi trong công việc?",
      id: "Hal apa yang paling sulit kutahankan di tempat kerja?"
    },
    options: [
      {
        text: {
          ko: "혼자 고립되어 아무도 없이 일하는 환경",
          en: "Being isolated — working completely alone with no one around",
          ja: "孤立して、誰ともつながらず一人で働く環境",
          'zh-CN': "完全孤立、身边没人一起干活",
          'zh-TW': "完全孤立、身邊沒人一起幹活",
          vi: "Bị cô lập — làm một mình chẳng có ai xung quanh",
          id: "Terisolasi — kerja sendirian tanpa siapa pun di sekitar"
        },
        axisTag: 'SS',
      },
      {
        text: {
          ko: "매일 똑같은 루틴만 반복되는 변화 없는 업무",
          en: "The same unchanging routine, day after day",
          ja: "毎日同じルーチンだけの、変化のない仕事",
          'zh-CN': "每天重复同一套、毫无变化的工作",
          'zh-TW': "每天重複同一套、毫無變化的工作",
          vi: "Công việc lặp lại cùng một thói quen, chẳng đổi gì",
          id: "Rutinitas sama setiap hari tanpa perubahan"
        },
        axisTag: 'SD',
      },
      {
        text: {
          ko: "너무 많은 사람들과 지속적으로 소통해야 하는 환경",
          en: "Having to constantly talk with too many people",
          ja: "あまりにも多くの人と、絶えずコミュニケーションし続ける環境",
          'zh-CN': "必须和太多人持续沟通",
          'zh-TW': "必須和太多人持續溝通",
          vi: "Phải liên tục giao tiếp với quá nhiều người",
          id: "Harus terus-menerus berkomunikasi dengan terlalu banyak orang"
        },
        axisTag: 'US',
      },
      {
        text: {
          ko: "정해진 방식대로만 해야 하고 새로운 시도가 허용되지 않는 환경",
          en: "Only doing things the approved way — with no room for new attempts",
          ja: "決められたやり方しか許されず、新しい試みができない環境",
          'zh-CN': "只能按规定方式做，完全不允许新尝试",
          'zh-TW': "只能按規定方式做，完全不允許新嘗試",
          vi: "Chỉ được làm theo cách sẵn có, không cho phép thử cái mới",
          id: "Hanya boleh mengikuti cara resmi — tanpa ruang mencoba pendekatan baru"
        },
        axisTag: 'UD',
      },
    ],
  },
];

export const phase3CareerAptitudeAi16typesResults: Phase3CareerAptitudeAi16typesResult[] = [
  {
    type: 'P-SS',
    emoji: '🧑‍🏫',
    title: {
      ko: "교육·상담 전문가",
      en: "Education & Counseling Specialist",
      ja: "教育・カウンセリングの専門家",
      'zh-CN': "教育与咨询专家",
      'zh-TW': "教育與諮商專家",
      vi: "Chuyên gia giáo dục & tư vấn",
      id: "Spesialis Pendidikan & Konseling"
    },
    shortDescription: {
      ko: "당신에게 맞는 직군: 교사·강사·상담사·사회복지사·코치",
      en: "Best-fit careers: Teachers · instructors · counselors · social workers · coaches",
      ja: "向いている職群：教師・講師・カウンセラー・社会福祉士・コーチ",
      'zh-CN': "适合你的职群：教师·讲师·咨询师·社会工作者·教练",
      'zh-TW': "適合你的職群：教師·講師·諮商師·社工·教練",
      vi: "Nhóm nghề phù hợp: Giáo viên · giảng viên · chuyên viên tư vấn · nhân viên xã hội · huấn luyện viên",
      id: "Karier yang cocok: Guru · instruktur · konselor · pekerja sosial · pelatih"
    },
    description: {
      ko: "사람의 성장과 변화에서 보람을 느끼고 안정적인 관계 속에서 에너지를 얻는 유형입니다. 누군가를 가르치거나 돕는 것이 자연스럽고 그 과정에서 의미를 찾습니다. 장기적 관계를 기반으로 한 직업이 가장 잘 맞습니다.",
      en: "You find fulfillment in people's growth and change, and recharge through steady relationships. Teaching or helping others comes naturally, and that process itself feels meaningful. Careers built on long-term trust fit you best.",
      ja: "人の成長や変化にやりがいを感じ、安定した関係の中でエネルギーを得られるタイプです。誰かを教えたり助けたりすることが自然で、その過程に意味を見出します。長期的な関係を土台にする仕事がいちばん合います。",
      'zh-CN': "你会从他人的成长与改变中获得成就感，并在稳定关系中充电。教导或帮助别人对你来说很自然，过程本身就有意义。建立在长期信任上的工作最适合你。",
      'zh-TW': "你會從他人的成長與改變中獲得成就感，並在穩定關係中充電。教導或幫助別人對你來說很自然，過程本身就有意義。建立在長期信任上的工作最適合你。",
      vi: "Bạn thấy ý nghĩa khi người khác phát triển và thay đổi, đồng thời nạp năng lượng từ quan hệ ổn định. Dạy hoặc giúp người khác là chuyện tự nhiên. Nghề dựa trên lòng tin lâu dài hợp bạn nhất.",
      id: "Kamu merasa berkesan lewat pertumbuhan orang lain, dan mengisi energi dari hubungan yang stabil. Mengajar atau membantu adalah hal alami. Karier berbasis kepercayaan jangka panjang paling cocok."
    },
    coreCompetencies: {
      ko: "공감 능력,경청,관계 유지,교육 설계",
      en: "Empathy, listening, maintaining relationships, educational design",
      ja: "共感能力,傾聴,関係維持,教育設計",
      'zh-CN': "同理心,倾听,维持关系,教育设计",
      'zh-TW': "同理心,傾聽,維持關係,教育設計",
      vi: "Đồng cảm, lắng nghe, duy trì mối quan hệ, thiết kế giáo dục",
      id: "Empati, mendengarkan, menjaga hubungan, desain pendidikan"
    },
    matchingJobs: {
      ko: "교사·학원강사·심리상담사·사회복지사·커리어코치·HRD트레이너",
      en: "Teacher, academy instructor, psychological counselor, social worker, career coach, HRD trainer",
      ja: "教師・塾講師・心理カウンセラー・社会福祉士・キャリアコーチ・HRDトレーナー",
      'zh-CN': "教师、学院讲师、心理咨询师、社会工作者、职业教练、人力资源开发培训师",
      'zh-TW': "教師、學院講師、心理諮商師、社工、職業教練、人力資源發展培訓師",
      vi: "Giáo viên, giảng viên học viện, cố vấn tâm lý, nhân viên xã hội, huấn luyện viên nghề nghiệp, huấn luyện viên HRD",
      id: "Guru, instruktur akademi, konselor psikologi, pekerja sosial, pelatih karir, pelatih HRD"
    },
    growthPath: {
      ko: "전문 자격증(상담사·교원자격·사회복지사) 취득이 커리어 강화의 핵심",
      en: "Acquiring professional qualifications (counselor, teacher qualification, social worker) is the key to strengthening your career.",
      ja: "専門資格証（相談士・教員資格・社会福祉士）取得がキャリア強化の核心",
      'zh-CN': "获得专业资格（辅导员、教师资格、社会工作者）是加强职业生涯的关键。",
      'zh-TW': "取得專業資格（輔導員、教師資格、社會工作者）是加強職業生涯的關鍵。",
      vi: "Đạt được trình độ chuyên môn (cố vấn, trình độ giáo viên, nhân viên xã hội) là chìa khóa để củng cố sự nghiệp của bạn.",
      id: "Memperoleh kualifikasi profesional (konselor, kualifikasi guru, pekerja sosial) adalah kunci untuk memperkuat karir Anda."
    },
    caution: {
      ko: "감정 소진(번아웃) 주의. 자기 돌봄 루틴이 필수",
      en: "Beware of emotional exhaustion (burnout). A self-care routine is essential",
      ja: "感情消耗（バーンアウト）注意。自己ケアルーチンが必須",
      'zh-CN': "谨防情绪疲惫（倦怠）。日常自我护理至关重要",
      'zh-TW': "小心情緒疲憊（倦怠）。日常自我照護至關重要",
      vi: "Cẩn thận với tình trạng kiệt sức về mặt cảm xúc (kiệt sức). Thói quen tự chăm sóc là cần thiết",
      id: "Waspadai kelelahan emosional (burnout). Rutinitas perawatan diri sangat penting"
    },
    firstCareer: {
      ko: "교육 스타트업 강사·복지기관 실습·상담 인턴",
      en: "Ed-tech instructor · welfare-org practicum · counseling internship",
      ja: "教育スタートアップ講師・福祉機関実習・相談インターン",
      'zh-CN': "教育创业导师/福利机构培训/辅导实习生",
      'zh-TW': "教育創業導師/福利機構培訓/輔導實習生",
      vi: "Giảng viên khởi nghiệp giáo dục/đào tạo tổ chức phúc lợi/thực tập sinh tư vấn",
      id: "Instruktur startup pendidikan/pelatihan lembaga kesejahteraan/magang konseling"
    },
    shareMessage: {
      ko: "직업 적성 AI 분석: 교육·상담 전문가 🧑‍🏫 사람 성장에서 보람 찾는 유형... 교사·상담사·코치 방향이래 → 너는 어떤 직군 나왔어?",
      en: "Career Aptitude AI: Education & Counseling Specialist 🧑‍🏫 You light up when people grow… Teacher · counselor · coach → What type did you get?",
      ja: "職業適性AI：教育・カウンセリング専門家 🧑‍🏫 人の成長にやりがいを感じるタイプ…教師・相談・コーチ向きだって → あなたはどの職群？",
      'zh-CN': "职业适性AI：教育与咨询专家 🧑‍🏫 在助人成长里充电的类型…适合教师·咨询·教练 → 你测到哪类？",
      'zh-TW': "職業適性AI：教育與諮商專家 🧑‍🏫 在助人成長裡充電的類型…適合教師·諮商·教練 → 你測到哪類？",
      vi: "AI năng lực nghề: Chuyên gia giáo dục & tư vấn 🧑‍🏫 Kiểu người thấy ý nghĩa khi giúp người lớn lên… Hướng giáo viên·tư vấn·coach → Bạn ra nhóm nào?",
      id: "AI Bakat Karier: Spesialis Pendidikan & Konseling 🧑‍🏫 Tipe yang merasa hidup saat orang tumbuh… Arah guru·konselor·coach → Kamu dapat tipe apa?"
    },
  },
  {
    type: 'P-SD',
    emoji: '📣',
    title: {
      ko: "홍보·영업 전문가",
      en: "PR & Sales Specialist",
      ja: "広報・営業の専門家",
      'zh-CN': "公关与销售专家",
      'zh-TW': "公關與業務專家",
      vi: "Chuyên gia PR & kinh doanh",
      id: "Spesialis PR & Sales"
    },
    shortDescription: {
      ko: "당신에게 맞는 직군: 영업·홍보·이벤트기획·PR·파트너십",
      en: "Best-fit careers: Sales · public relations · event planning · PR · partnerships",
      ja: "向いている職群：営業・広報・イベント企画・PR・パートナーシップ",
      'zh-CN': "适合你的职群：销售·公关·活动策划·PR·合作伙伴关系",
      'zh-TW': "適合你的職群：業務·公關·活動企劃·PR·合作夥伴關係",
      vi: "Nhóm nghề phù hợp: Kinh doanh · truyền thông · tổ chức sự kiện · PR · quan hệ đối tác",
      id: "Karier yang cocok: Penjualan · humas · perencanaan acara · PR · kemitraan"
    },
    description: {
      ko: "사람과 활발하게 교류하면서 새로운 기회를 만들어내는 데 강점이 있습니다. 변화하는 환경에서 관계를 통해 성과를 내는 것이 자연스럽습니다. 영업과 홍보처럼 사람과 시장을 동시에 다루는 직군이 잘 맞습니다.",
      en: "Your strength is creating opportunity while actively connecting with people. In fast-changing settings, you naturally deliver results through relationships. Roles that work people and markets together — sales and PR — fit especially well.",
      ja: "人と活発につながりながら新しい機会をつくるのが強みです。変化の激しい環境でも、関係性を通じて成果を出すのが自然。営業や広報のように、人と市場を同時に扱う仕事がいちばん合います。",
      'zh-CN': "你的强项是一边主动连接人，一边创造新机会。环境变化再快，你也能靠关系做出成绩。像销售和公关这样同时面对人与市场的工作特别适合你。",
      'zh-TW': "你的強項是一邊主動連結人，一邊創造新機會。環境變化再快，你也能靠關係做出成績。像業務和公關這樣同時面對人與市場的工作特別適合你。",
      vi: "Điểm mạnh của bạn là tạo cơ hội trong lúc chủ động kết nối với mọi người. Ở môi trường đổi nhanh, bạn đạt kết quả qua quan hệ một cách tự nhiên. Nghề vừa chạm người vừa chạm thị trường — sales và PR — rất hợp.",
      id: "Kekuatanmu adalah menciptakan peluang sambil aktif menjalin orang. Di lingkungan yang cepat berubah, hasil lewat relasi terasa alami. Peran yang menyentuh orang dan pasar sekaligus — sales dan PR — paling pas."
    },
    coreCompetencies: {
      ko: "설득력,네트워킹,협상,관계 구축,빠른 상황 판단",
      en: "Persuasion, networking, negotiation, relationship building, quick situational judgment",
      ja: "説得力,ネットワーキング,交渉,関係構築,迅速な状況判断",
      'zh-CN': "说服,网络,谈判,建立关系,快速态势判断",
      'zh-TW': "說服,人脈,談判,建立關係,快速態勢判斷",
      vi: "Thuyết phục, kết nối, đàm phán, xây dựng mối quan hệ, phán đoán tình huống nhanh chóng",
      id: "Persuasi, jaringan, negosiasi, membangun hubungan, penilaian situasional yang cepat"
    },
    matchingJobs: {
      ko: "영업(B2B·B2C)·PR담당자·이벤트기획자·파트너십매니저·스타트업BD",
      en: "Sales (B2B, B2C), PR manager, event planner, partnership manager, startup BD",
      ja: "営業（B2B・B2C）・PR担当者・イベント企画者・パートナーシップマネージャー・スタートアップBD",
      'zh-CN': "销售（B2B、B2C）、公关经理、活动策划者、合作伙伴经理、初创公司 BD",
      'zh-TW': "銷售（B2B、B2C）、公關經理、活動策劃者、合作夥伴經理、新創公司 BD",
      vi: "Bán hàng (B2B, B2C), giám đốc PR, người tổ chức sự kiện, quản lý đối tác, BD khởi nghiệp",
      id: "Penjualan (B2B, B2C), manajer PR, perencana acara, manajer kemitraan, startup BD"
    },
    growthPath: {
      ko: "산업 지식(IT·금융·소비재 등) + 영업 실적 포트폴리오가 핵심",
      en: "Industry knowledge (IT, finance, consumer goods, etc.) + sales performance portfolio is key",
      ja: "産業知識（IT・金融・消費財など）＋営業実績ポートフォリオが核心",
      'zh-CN': "行业知识（IT、金融、消费品等）+销售业绩组合是关键",
      'zh-TW': "產業知識（IT、金融、消費品等）+銷售績效組合是關鍵",
      vi: "Kiến thức về ngành (CNTT, tài chính, hàng tiêu dùng, v.v.) + danh mục hiệu quả bán hàng là chìa khóa",
      id: "Pengetahuan industri (TI, keuangan, barang konsumsi, dll.) + portofolio kinerja penjualan adalah kuncinya"
    },
    caution: {
      ko: "단기 성과 압박에 익숙해지지 않도록 중장기 커리어 설계 병행",
      en: "Keep a mid-to-long-term career plan so short-term targets do not define you",
      ja: "短期性能と圧迫に慣れないように中長期キャリア設計並行",
      'zh-CN': "别被短期业绩绑架，中长期职业规划要并行推进",
      'zh-TW': "別被短期業績綁架，中長期職涯規劃要並行推進",
      vi: "Song song lập kế hoạch nghề nghiệp từ trung đến dài hạn để tránh làm quen với áp lực hiệu suất ngắn hạn",
      id: "Perencanaan karir jangka menengah dan panjang yang paralel untuk menghindari terbiasa dengan tekanan kinerja jangka pendek"
    },
    firstCareer: {
      ko: "스타트업 영업인턴·홍보대행사 AE·이벤트기획사 조수",
      en: "Startup sales intern, public relations agency AE, event planning assistant",
      ja: "スタートアップ営業インターン・広報代行社AE・イベント企画会社助手",
      'zh-CN': "初创公司销售实习生、公关机构AE、活动策划助理",
      'zh-TW': "新創公司銷售實習生、公關機構AE、活動策劃助理",
      vi: "Thực tập sinh kinh doanh startup, công ty quan hệ công chúng AE, trợ lý tổ chức sự kiện",
      id: "Magang penjualan startup, agensi hubungan masyarakat AE, asisten perencanaan acara"
    },
    shareMessage: {
      ko: "직업 적성 AI 분석: 홍보·영업 전문가 📣 사람과 시장을 동시에 다루는 유형... 영업·PR 방향이래 → 너는 어떤 직군 나왔어?",
      en: "Career Aptitude AI: PR & Sales Specialist 📣 Thrives connecting people and markets… Sales & PR path → What career type did you get?",
      ja: "職業適性AI：広報・営業の専門家 📣 人と市場を同時に動かすタイプ…営業・PR向きだって → あなたはどの職群？",
      'zh-CN': "职业适性AI：公关·销售专家 📣 同时驾驭人脉与市场的类型…适合销售·公关 → 你是什么职群？",
      'zh-TW': "職業適性AI：公關·銷售專家 📣 同時駕馭人脈與市場的類型…適合銷售·公關 → 你是什麼職群？",
      vi: "AI năng lực nghề: Chuyên gia PR·kinh doanh 📣 Kiểu người kết nối con người và thị trường… Hướng sales·PR → Bạn ra nhóm nghề nào?",
      id: "AI Bakat Karier: Spesialis PR & Sales 📣 Tipe yang menghubungkan orang dan pasar… Arah sales·PR → Kamu dapat tipe karier apa?"
    },
  },
  {
    type: 'P-US',
    emoji: '🤝',
    title: {
      ko: "인재·조직관리 전문가",
      en: "People & Organization Specialist",
      ja: "人材・組織管理の専門家",
      'zh-CN': "人才与组织管理专家",
      'zh-TW': "人才與組織管理專家",
      vi: "Chuyên gia nhân sự & tổ chức",
      id: "Spesialis SDM & Organisasi"
    },
    shortDescription: {
      ko: "당신에게 맞는 직군: HR·노무사·채용담당자·조직개발·복리후생",
      en: "Best-fit careers: HR · labor relations · recruiting · organizational development · benefits",
      ja: "向いている職群：人事・労務・採用・組織開発・福利厚生",
      'zh-CN': "适合你的职群：人力资源·劳动关系·招聘·组织发展·员工福利",
      'zh-TW': "適合你的職群：人力資源·勞資關係·招募·組織發展·員工福利",
      vi: "Nhóm nghề phù hợp: Nhân sự · quan hệ lao động · tuyển dụng · phát triển tổ chức · phúc lợi",
      id: "Karier yang cocok: SDM · hubungan industrial · rekrutmen · pengembangan organisasi · tunjangan"
    },
    description: {
      ko: "사람에 대한 깊은 이해와 조용하고 체계적인 업무 방식이 결합된 유형입니다. 시스템과 사람 사이를 잇는 역할이 자연스럽고 조직 안에서 사람들이 잘 작동하도록 돕는 것에서 의미를 찾습니다.",
      en: "You combine a deep understanding of people with a calm, systematic work style. Connecting systems and people feels natural, and you find meaning in helping teams function well inside an organization.",
      ja: "人への深い理解と、静かで体系的な働き方が組み合わさったタイプです。システムと人をつなぐ役割が自然で、組織の中で人がうまく機能するよう支えることに意味を見出します。",
      'zh-CN': "你对人有深入理解，做事风格冷静而有章法。连接制度与人非常自然，你会在帮组织里的人更好运转中找到意义。",
      'zh-TW': "你对人有深入理解，做事風格冷靜而有章法。連接制度與人非常自然，你會在幫組織裡的人更好運作中找到意義。",
      vi: "Bạn kết hợp hiểu biết sâu về con người với phong cách làm việc trầm, có hệ thống. Nối hệ thống với con người là chuyện tự nhiên, và bạn thấy ý nghĩa khi giúp mọi người vận hành tốt trong tổ chức.",
      id: "Kamu menggabungkan pemahaman mendalam tentang orang dengan gaya kerja tenang dan sistematis. Menghubungkan sistem dan orang terasa alami, dan kamu menemukan makna saat membantu tim berfungsi baik di organisasi."
    },
    coreCompetencies: {
      ko: "조직 이해,규정 해석,데이터 기반 인사,면접,노동법",
      en: "Org sense, policy interpretation, people analytics, interviewing, labor law",
      ja: "組織の理解,規定の解釈,データに基づく人事,面接,労働法",
      'zh-CN': "组织了解,法规解读,数据化人事,访谈,劳动法",
      'zh-TW': "組織了解,法規解讀,資料化人事,訪談,勞動法",
      vi: "Hiểu biết về tổ chức, giải thích các quy định, nhân sự dựa trên dữ liệu, phỏng vấn, luật lao động",
      id: "Pemahaman organisasi, interpretasi peraturan, personel berbasis data, wawancara, hukum ketenagakerjaan"
    },
    matchingJobs: {
      ko: "HR담당자·채용매니저·노무사·조직개발컨설턴트·컬처팀",
      en: "HR manager, recruitment manager, labor attorney, organizational development consultant, culture team",
      ja: "HR担当者・採用マネージャー・労務士・組織開発コンサルタント・カルチャーチーム",
      'zh-CN': "人力资源经理、招聘经理、劳动律师、组织发展顾问、文化团队",
      'zh-TW': "人力資源經理、招募經理、勞動律師、組織發展顧問、文化團隊",
      vi: "Giám đốc nhân sự, quản lý tuyển dụng, luật sư lao động, tư vấn phát triển tổ chức, nhóm văn hóa",
      id: "Manajer SDM, manajer perekrutan, pengacara tenaga kerja, konsultan pengembangan organisasi, tim budaya"
    },
    growthPath: {
      ko: "노무사 자격증·HRM/HRD 전문과정 이수·HRIS 툴 능숙도",
      en: "Labor attorney certification, HRM/HRD professional course completion, HRIS tool proficiency",
      ja: "労務士資格証・HRM/HRD専門課程履修・HRISツールの熟練度",
      'zh-CN': "劳工律师认证、HRM/HRD 专业课程完成、HRIS 工具熟练程度",
      'zh-TW': "勞工律師認證、HRM/HRD 專業課程完成、HRIS 工具熟練程度",
      vi: "Chứng chỉ luật sư lao động, hoàn thành khóa học chuyên môn HRM/HRD, thành thạo công cụ HRIS",
      id: "Sertifikasi pengacara ketenagakerjaan, penyelesaian kursus profesional HRM/HRD, kemahiran alat HRIS"
    },
    caution: {
      ko: "회사 내부 정치에 휘말릴 수 있어 중립적 포지셔닝이 중요",
      en: "Neutral positioning is important as you can get caught up in the company’s internal politics.",
      ja: "会社の内部政治に巻き込まれるため、中立的なポジショニングが重要です",
      'zh-CN': "中立立场很重要，因为你可能会陷入公司的内部政治。",
      'zh-TW': "中立立場很重要，因為你可能會陷入公司的內部政治。",
      vi: "Vị trí trung lập rất quan trọng vì bạn có thể bị cuốn vào chính trị nội bộ của công ty.",
      id: "Penempatan posisi netral penting karena Anda dapat terjebak dalam politik internal perusahaan."
    },
    firstCareer: {
      ko: "채용 대행사·HR테크 스타트업·대기업 HR 인턴",
      en: "Recruitment agency, HR tech startup, large company HR intern",
      ja: "採用代理店・HRテックスタートアップ・大企業HRインターン",
      'zh-CN': "招聘机构、人力资源科技初创公司、大公司人力资源实习生",
      'zh-TW': "招聘機構、人力資源科技新創公司、大公司人力資源實習生",
      vi: "Cơ quan tuyển dụng, khởi nghiệp công nghệ nhân sự, thực tập sinh nhân sự công ty lớn",
      id: "Agen perekrutan, startup teknologi SDM, karyawan magang HR perusahaan besar"
    },
    shareMessage: {
      ko: "직업 적성 AI 분석: 인재·조직관리 전문가 🤝 사람과 시스템을 잇는 유형... HR·노무사 방향이래 → 너는 어떤 직군 나왔어?",
      en: "Career Aptitude AI: People & Organization Specialist 🤝 Bridges people and systems… HR path → What career type did you get?",
      ja: "職業適性AI：人材・組織管理の専門家 🤝 人とシステムをつなぐタイプ…HR・労務向きだって → あなたはどの職群？",
      'zh-CN': "职业适性AI：人才·组织管理专家 🤝 连接人与系统的类型…适合HR·用工管理 → 你是什么职群？",
      'zh-TW': "職業適性AI：人才·組織管理專家 🤝 連結人與系統的類型…適合HR·用工管理 → 你是什麼職群？",
      vi: "AI năng lực nghề: Chuyên gia nhân sự·tổ chức 🤝 Kiểu người nối người với hệ thống… Hướng HR → Bạn ra nhóm nghề nào?",
      id: "AI Bakat Karier: Spesialis SDM & Organisasi 🤝 Tipe yang menghubungkan orang dan sistem… Arah HR → Kamu dapat tipe karier apa?"
    },
  },
  {
    type: 'P-UD',
    emoji: '🔍',
    title: {
      ko: "비즈니스 컨설턴트",
      en: "Business Consultant",
      ja: "ビジネスコンサルタント",
      'zh-CN': "商业顾问",
      'zh-TW': "商業顧問",
      vi: "Tư vấn kinh doanh",
      id: "Konsultan Bisnis"
    },
    shortDescription: {
      ko: "당신에게 맞는 직군: 경영컨설턴트·전략기획·비즈니스코치·서비스기획",
      en: "Best-fit careers: Management consulting · strategy · business coaching · service planning",
      ja: "向いている職群：経営コンサルタント・戦略企画・ビジネスコーチ・サービス企画",
      'zh-CN': "适合你的职群：管理咨询·战略规划·商业教练·服务规划",
      'zh-TW': "適合你的職群：管理顧問·策略企劃·商業教練·服務企劃",
      vi: "Nhóm nghề phù hợp: Tư vấn quản trị · chiến lược · huấn luyện kinh doanh · hoạch định dịch vụ",
      id: "Karier yang cocok: Konsultan manajemen · strategi · pelatih bisnis · perencanaan layanan"
    },
    description: {
      ko: "사람에 대한 이해를 기반으로 문제를 독자적으로 분석하고 새로운 솔루션을 제시하는 유형입니다. 조직의 문제를 깊이 파고들어 본질을 찾아내는 일이 잘 맞습니다.",
      en: "You independently dig into problems and propose fresh solutions, grounded in a strong read on people. Diving into organizational issues to uncover what really matters is where you shine.",
      ja: "人への理解を土台に、問題を独自に分析し新しい解決策を提示するタイプです。組織課題を深く掘って本質を見つける仕事がいちばん合います。",
      'zh-CN': "你对人的理解很扎实，喜欢独立拆解问题并提出新方案。深入组织问题、找到本质，正是你发光的地方。",
      'zh-TW': "你对人的理解很扎实，喜歡獨立拆解問題並提出新方案。深入組織問題、找到本質，正是你發光的地方。",
      vi: "Bạn tự phân tích vấn đề và đề xuất giải pháp mới dựa trên khả năng đọc người. Việc đào sâu vấn đề tổ chức để tìm ra bản chất là chỗ bạn tỏa sáng.",
      id: "Kamu menganalisis masalah secara mandiri dan mengusulkan solusi baru berbekal bacaan orang yang tajam. Menggali isu organisasi sampai menemukan esensi adalah ruangmu bersinar."
    },
    coreCompetencies: {
      ko: "문제 정의,구조화 사고,발표,워크숍 퍼실리테이션",
      en: "Problem definition, structured thinking, presentation, workshop facilitation",
      ja: "問題定義,構造化思考,発表,ワークショップのファシリテーション",
      'zh-CN': "问题定义,结构化思维,演示,研讨会引导",
      'zh-TW': "問題定義,結構化思維,簡報,研討會引導",
      vi: "Xác định vấn đề, tư duy có cấu trúc, trình bày, điều hành hội thảo",
      id: "Definisi masalah, pemikiran terstruktur, presentasi, fasilitasi lokakarya"
    },
    matchingJobs: {
      ko: "경영컨설턴트·전략기획자·서비스기획자·비즈니스코치·스타트업PMO",
      en: "Management consultant, strategic planner, service planner, business coach, startup PMO",
      ja: "経営コンサルタント・戦略企画者・サービス企画者・ビジネスコーチ・スタートアップPMO",
      'zh-CN': "管理顾问、战略规划师、服务规划师、商业教练、初创公司 PMO",
      'zh-TW': "管理顧問、策略規劃師、服務規劃師、商業教練、新創公司 PMO",
      vi: "Cố vấn quản lý, người lập kế hoạch chiến lược, người lập kế hoạch dịch vụ, huấn luyện viên kinh doanh, PMO khởi nghiệp",
      id: "Konsultan manajemen, perencana strategis, perencana layanan, pelatih bisnis, PMO startup"
    },
    growthPath: {
      ko: "MBA 또는 전략 컨설팅 인턴→주니어 컨설턴트 트랙이 가장 빠른 성장 경로",
      en: "MBA or Strategy Consulting Intern → Junior Consultant track is the fastest growth path",
      ja: "MBAまたは戦略コンサルティングインターン→ジュニアコンサルタントトラックが最速の成長経路",
      'zh-CN': "MBA或战略咨询实习生→初级顾问赛道是最快的成长路径",
      'zh-TW': "MBA或策略諮詢實習生→初級顧問賽道是最快的成長路徑",
      vi: "MBA hoặc Thực tập sinh Tư vấn Chiến lược → Con đường Tư vấn cấp dưới là con đường phát triển nhanh nhất",
      id: "MBA atau Strategy Consulting Intern → Jalur Konsultan Junior adalah jalur pertumbuhan tercepat"
    },
    caution: {
      ko: "실행력 부족이라는 인상을 주지 않도록 프로젝트 결과 중심 포트폴리오 필요",
      en: "Keep a results-first project portfolio so you do not look light on execution",
      ja: "実行力不足という印象を与えないようにプロジェクト結果中心ポートフォリオが必要",
      'zh-CN': "需要以项目结果为中心的投资组合，以避免给人缺乏执行能力的印象。",
      'zh-TW': "需要以專案結果為中心的投資組合，以避免給人缺乏執行能力的印象。",
      vi: "Cần có một danh mục đầu tư tập trung vào kết quả dự án để tránh gây ấn tượng về việc thiếu khả năng thực hiện.",
      id: "Portofolio yang berpusat pada hasil proyek diperlukan untuk menghindari kesan kurangnya kemampuan eksekusi."
    },
    firstCareer: {
      ko: "컨설팅펌 인턴·대기업 전략기획팀·스타트업 PMO",
      en: "Consulting firm intern, large company strategic planning team, startup PMO",
      ja: "コンサルティングファームインターン・大企業戦略企画チーム・スタートアップPMO",
      'zh-CN': "咨询公司实习生、大公司战略规划团队、初创公司PMO",
      'zh-TW': "顧問公司實習生、大公司策略規劃團隊、新創公司PMO",
      vi: "Thực tập sinh công ty tư vấn, nhóm hoạch định chiến lược công ty lớn, PMO khởi nghiệp",
      id: "Magang perusahaan konsultan, tim perencanaan strategis perusahaan besar, PMO startup"
    },
    shareMessage: {
      ko: "직업 적성 AI 분석: 비즈니스 컨설턴트 🔍 조직 문제를 독자적으로 분석하는 유형... 컨설턴트·전략기획 방향이래 → 너는 어떤 직군 나왔어?",
      en: "Career Aptitude AI: Business Consultant 🔍 Digs into org problems and designs solutions… Consulting & strategy → What career type did you get?",
      ja: "職業適性AI：ビジネスコンサルタント 🔍 組織課題を独自に分析するタイプ…コンサル・戦略企画向きだって → あなたはどの職群？",
      'zh-CN': "职业适性AI：商业顾问 🔍 独立深挖组织问题的类型…适合咨询·战略规划 → 你是什么职群？",
      'zh-TW': "職業適性AI：商業顧問 🔍 獨立深挖組織問題的類型…適合顧問·策略規劃 → 你是什麼職群？",
      vi: "AI năng lực nghề: Tư vấn kinh doanh 🔍 Kiểu người tự phân tích vấn đề tổ chức… Hướng consulting·strategy → Bạn ra nhóm nghề nào?",
      id: "AI Bakat Karier: Konsultan Bisnis 🔍 Tipe yang menganalisis masalah organisasi secara mandiri… Arah konsultan·strategi → Kamu dapat tipe karier apa?"
    },
  },
  {
    type: 'C-SS',
    emoji: '🎤',
    title: {
      ko: "공연·방송 크리에이터",
      en: "Stage & Broadcast Creator",
      ja: "舞台・放送クリエイター",
      'zh-CN': "舞台与广播电视创作者",
      'zh-TW': "舞台與廣播電視創作者",
      vi: "Creator biểu diễn & truyền hình",
      id: "Kreator Panggung & Siaran"
    },
    shortDescription: {
      ko: "당신에게 맞는 직군: 아나운서·MC·연기자·방송PD·이벤트진행",
      en: "Best-fit careers: Announcing · hosting · acting · broadcast production · event hosting",
      ja: "向いている職群：アナウンサー・MC・俳優・放送PD・イベント進行",
      'zh-CN': "适合你的职群：播音·主持·表演·节目制作·活动主持",
      'zh-TW': "適合你的職群：播報·主持·表演·節目製作·活動主持",
      vi: "Nhóm nghề phù hợp: Dẫn chương trình · MC · diễn xuất · sản xuất truyền hình · điều phối sự kiện",
      id: "Karier yang cocok: Penyiar · MC · akting · produksi siaran · pemandu acara"
    },
    description: {
      ko: "사람들 앞에서 표현하고 반응을 받는 것이 에너지의 원천인 유형입니다. 안정적인 무대와 관계 속에서 창의적인 퍼포먼스를 발휘합니다.",
      en: "Performing in front of people and feeling their reaction is your energy source. On a steady stage with reliable relationships, your creative performance truly lands.",
      ja: "人の前で表現し、反応をもらうことがエネルギーの源泉です。安定した舞台と関係の中で、創造的なパフォーマンスを発揮します。",
      'zh-CN': "站在人前表达、接收反馈，是你能量的来源。在稳定的舞台和关系里，你的创造性表演才真正打得开。",
      'zh-TW': "站在人前表達、接收回饋，是你能量的來源。在穩定的舞台和關係裡，你的創造性表演才真正打得開。",
      vi: "Thể hiện trước mọi người và nhận phản ứng là nguồn năng lượng của bạn. Trên sân khấu ổn định với quan hệ tin cậy, màn trình diễn sáng tạo của bạn mới thực sự chạm đến người xem.",
      id: "Ekspresi di depan orang dan respons mereka adalah sumber energimu. Di panggung stabil dengan relasi yang andal, performa kreatifmu benar-benar mengena."
    },
    coreCompetencies: {
      ko: "발성,표현력,즉흥 대응,청중 분석,스토리텔링",
      en: "Vocalization, expressiveness, improvisation, audience analysis, storytelling",
      ja: "発声,表現力,即興対応,聴衆分析,ストーリーテリング",
      'zh-CN': "发声,表现力,即兴创作,观众分析,讲故事",
      'zh-TW': "發聲,表現力,即興創作,觀眾分析,說故事",
      vi: "Giọng hát, biểu cảm, ngẫu hứng, phân tích khán giả, kể chuyện",
      id: "Vokalisasi, ekspresif, improvisasi, analisis penonton, bercerita"
    },
    matchingJobs: {
      ko: "방송인·MC·아나운서·연기자·공연기획자·방송PD·무대연출",
      en: "Broadcaster, MC, announcer, actor, performance planner, broadcast PD, stage director",
      ja: "放送人・MC・アナウンサー・演技者・公演企画者・放送PD・舞台演出",
      'zh-CN': "广播员、主持人、播音员、演员、演出策划、广播PD、舞台导演",
      'zh-TW': "廣播員、主持人、播音員、演員、表演策劃、廣播PD、舞台導演",
      vi: "Phát thanh viên, MC, phát thanh viên, diễn viên, người lập kế hoạch biểu diễn, PD phát sóng, đạo diễn sân khấu",
      id: "Penyiar, MC, penyiar, aktor, perencana pertunjukan, PD siaran, sutradara panggung"
    },
    growthPath: {
      ko: "연기·스피치·방송 트레이닝 + 오디션·공모전 포트폴리오",
      en: "Acting/Speech/Broadcasting Training + Audition/Contest Portfolio",
      ja: "演技・スピーチ・放送トレーニング＋オーディション・コンペ展ポートフォリオ",
      'zh-CN': "表演/演讲/播音培训+试镜/比赛作品集",
      'zh-TW': "表演/演講/播音訓練+試鏡/比賽作品集",
      vi: "Đào tạo Diễn xuất/Diễn thuyết/Phát thanh + Danh mục buổi thử giọng/Cuộc thi",
      id: "Pelatihan Akting/Pidato/Penyiaran + Portofolio Audisi/Kontes"
    },
    caution: {
      ko: "노출 산업의 불안정성 대비 복수 수익 채널 설계 권장",
      en: "Build multiple revenue streams to handle the instability of visibility-heavy industries",
      ja: "表に立つ業界の不安定さに備え、複数の収益チャネルを設計するのがおすすめ",
      'zh-CN': "多收入渠道的推荐设计，为暴露行业的不稳定做好准备",
      'zh-TW': "多收入管道的建議設計，為暴露行業的不穩定性做好準備",
      vi: "Đề xuất thiết kế nhiều kênh doanh thu để chuẩn bị cho sự bất ổn của các ngành dễ bị ảnh hưởng",
      id: "Merekomendasikan desain berbagai saluran pendapatan untuk bersiap menghadapi ketidakstabilan industri yang terekspos"
    },
    firstCareer: {
      ko: "케이블 방송 인턴·기업 행사 MC 보조·극단 단원",
      en: "Cable broadcasting intern, corporate event MC assistant, theater troupe member",
      ja: "ケーブル放送インターン・企業行事MC補助・劇団員",
      'zh-CN': "有线广播实习生、企业活动MC助理、剧团成员",
      'zh-TW': "有線電視廣播實習生、企業活動MC助理、劇團成員",
      vi: "Thực tập sinh truyền hình cáp, trợ lý MC sự kiện của công ty, thành viên đoàn kịch",
      id: "Magang penyiaran kabel, asisten MC acara perusahaan, anggota rombongan teater"
    },
    shareMessage: {
      ko: "직업 적성 AI 분석: 공연·방송 크리에이터 🎤 무대에서 에너지 얻는 유형... 아나운서·MC 방향이래 → 너는 어떤 직군 나왔어?",
      en: "Career Aptitude AI: Stage & Broadcast Creator 🎤 Gets energy from performing for people… Host·actor·PD path → What career type did you get?",
      ja: "職業適性AI：公演・放送クリエイター 🎤 舞台でエネルギーをもらうタイプ…アナウンサー・MC向きだって → あなたはどの職群？",
      'zh-CN': "职业适性AI：表演·广播电视创作者 🎤 在舞台上充电的类型…适合主持人·MC → 你是什么职群？",
      'zh-TW': "職業適性AI：表演·廣播電視創作者 🎤 在舞台上充電的類型…適合主持人·MC → 你是什麼職群？",
      vi: "AI năng lực nghề: Creator biểu diễn·truyền hình 🎤 Kiểu người lấy năng lượng từ sân khấu… Hướng MC·biên tập viên → Bạn ra nhóm nghề nào?",
      id: "AI Bakat Karier: Kreator Panggung & Siaran 🎤 Tipe yang mendapat energi dari panggung… Arah presenter·MC → Kamu dapat tipe karier apa?"
    },
  },
  {
    type: 'C-SD',
    emoji: '🎨',
    title: {
      ko: "마케팅·광고 창작자",
      en: "Marketing & Advertising Creator",
      ja: "マーケティング・広告クリエイター",
      'zh-CN': "营销与广告创作者",
      'zh-TW': "行銷與廣告創作者",
      vi: "Creator marketing & quảng cáo",
      id: "Kreator Marketing & Iklan"
    },
    shortDescription: {
      ko: "당신에게 맞는 직군: 마케터·광고기획자·브랜드디자이너·콘텐츠기획자",
      en: "Best-fit careers: Marketing · advertising planning · brand design · content planning",
      ja: "向いている職群：マーケター・広告企画・ブランドデザイナー・コンテンツ企画",
      'zh-CN': "适合你的职群：营销·广告策划·品牌设计·内容策划",
      'zh-TW': "適合你的職群：行銷·廣告企劃·品牌設計·內容企劃",
      vi: "Nhóm nghề phù hợp: Tiếp thị · hoạch định quảng cáo · thiết kế thương hiệu · hoạch định nội dung",
      id: "Karier yang cocok: Pemasaran · perencanaan iklan · desain merek · perencanaan konten"
    },
    description: {
      ko: "창의적 아이디어로 시장을 움직이고 빠르게 변화하는 트렌드를 즐기는 유형입니다. 사람들에게 메시지를 전달하는 방식 자체를 설계하는 일이 잘 맞습니다.",
      en: "You move markets with creative ideas and actually enjoy fast-shifting trends. Designing how a message reaches people is where you feel most at home.",
      ja: "創造的なアイデアで市場を動かし、変化の速いトレンド自体を楽しめるタイプです。人に届く伝え方を設計する仕事がいちばん合います。",
      'zh-CN': "你会用创意撬动市场，也真心享受快速变化的趋势。设计信息如何触达人，才是你最自在的状态。",
      'zh-TW': "你會用創意撬動市場，也真心享受快速變化的趨勢。設計訊息如何觸達人，才是你最自在的狀態。",
      vi: "Bạn đẩy thị trường bằng ý tưởng sáng tạo và thích xu hướng đổi nhanh. Thiết kế cách thông điệp chạm đến người khác chính là chỗ bạn hợp nhất.",
      id: "Kamu menggerakkan pasar dengan ide kreatif dan menikmati tren yang cepat berubah. Merancang cara pesan sampai ke orang adalah ruang paling pas bagimu."
    },
    coreCompetencies: {
      ko: "트렌드 감각,카피라이팅,캠페인 기획,데이터 리터러시,브랜드 이해",
      en: "Trend sense, copywriting, campaign planning, data literacy, brand understanding",
      ja: "トレンド感覚,コピーライティング,キャンペーン企画,データリテラシー,ブランド理解",
      'zh-CN': "趋势感知,文案写作,活动策划,数据素养,品牌理解",
      'zh-TW': "趨勢感知,文案寫作,活動規劃,數據素養,品牌理解",
      vi: "Nhận thức xu hướng, viết quảng cáo, lập kế hoạch chiến dịch, hiểu biết về dữ liệu, hiểu biết về thương hiệu",
      id: "Pengertian tren, copywriting, perencanaan kampanye, literasi data, pemahaman merek"
    },
    matchingJobs: {
      ko: "디지털마케터·광고기획자(AE)·브랜드매니저·SNS마케터·그로스해커",
      en: "Digital Marketer, Advertising Planner (AE), Brand Manager, SNS Marketer, Growth Hacker",
      ja: "デジタルマーケター・広告企画者（AE）・ブランドマネージャー・SNSマーケター・グロースハッカー",
      'zh-CN': "数字营销人员、广告策划师 (AE)、品牌经理、SNS 营销人员、增长黑客",
      'zh-TW': "數位行銷人員、廣告策劃師 (AE)、品牌經理、SNS 行銷人員、成長駭客",
      vi: "Nhà tiếp thị kỹ thuật số, Người lập kế hoạch quảng cáo (AE), Giám đốc thương hiệu, Nhà tiếp thị SNS, Chuyên gia tăng trưởng",
      id: "Pemasar Digital, Perencana Periklanan (AE), Manajer Merek, Pemasar SNS, Growth Hacker"
    },
    growthPath: {
      ko: "퍼포먼스 마케팅 데이터 툴(GA·Meta Ads) + 브랜드 캠페인 포트폴리오",
      en: "Performance marketing data tool (GA·Meta Ads) + brand campaign portfolio",
      ja: "パフォーマンスマーケティングデータツール（GA・Meta Ads）+ブランドキャンペーンポートフォリオ",
      'zh-CN': "效果营销数据工具（GA·Meta Ads）+品牌活动组合",
      'zh-TW': "效果行銷資料工具（GA·Meta Ads）+品牌活動組合",
      vi: "Công cụ dữ liệu tiếp thị hiệu suất (GA·Meta Ads) + danh mục chiến dịch thương hiệu",
      id: "Alat data pemasaran kinerja (GA·Meta Ads) + portofolio kampanye merek"
    },
    caution: {
      ko: "단기 트렌드에 휩쓸리지 않도록 브랜드 전략 관점을 병행 개발",
      en: "Develop a brand strategy perspective in parallel to avoid being swayed by short-term trends",
      ja: "短期的なトレンドにさらされないようにブランド戦略の視点を並行開発",
      'zh-CN': "同时制定品牌战略视角，避免被短期趋势所左右",
      'zh-TW': "同時制定品牌策略視角，避免被短期趨勢所左右",
      vi: "Phát triển song song quan điểm chiến lược thương hiệu để tránh bị ảnh hưởng bởi các xu hướng ngắn hạn",
      id: "Kembangkan perspektif strategi merek secara paralel untuk menghindari terpengaruh oleh tren jangka pendek"
    },
    firstCareer: {
      ko: "광고대행사·브랜드 스타트업·SNS 마케팅 인턴",
      en: "Advertising agency, brand startup, SNS marketing intern",
      ja: "広告代理店・ブランドスタートアップ・SNSマーケティングインターン",
      'zh-CN': "广告代理、品牌创业、SNS营销实习生",
      'zh-TW': "廣告代理商、品牌創業、SNS行銷實習生",
      vi: "Đại lý quảng cáo, khởi nghiệp thương hiệu, thực tập sinh tiếp thị SNS",
      id: "Agen periklanan, startup merek, magang pemasaran SNS"
    },
    shareMessage: {
      ko: "직업 적성 AI 분석: 마케팅·광고 창작자 🎨 창의적 아이디어로 시장 움직이는 유형... 마케터·광고기획자 방향이래 → 너는 어떤 직군 나왔어?",
      en: "Career Aptitude AI: Marketing & Ad Creator 🎨 Moves markets with creative ideas… Marketer·ad planner → What career type did you get?",
      ja: "職業適性AI：マーケティング・広告クリエイター 🎨 アイデアで市場を動かすタイプ…マーケター・広告企画向きだって → あなたはどの職群？",
      'zh-CN': "职业适性AI：营销·广告创作者 🎨 用创意撬动市场的类型…适合营销·广告策划 → 你是什么职群？",
      'zh-TW': "職業適性AI：行銷·廣告創作者 🎨 用創意撬動市場的類型…適合行銷·廣告企劃 → 你是什麼職群？",
      vi: "AI năng lực nghề: Creator marketing·quảng cáo 🎨 Kiểu người đẩy thị trường bằng ý tưởng… Hướng marketer·planner → Bạn ra nhóm nghề nào?",
      id: "AI Bakat Karier: Kreator Marketing & Iklan 🎨 Tipe yang menggerakkan pasar dengan ide… Arah marketer·perencana iklan → Kamu dapat tipe karier apa?"
    },
  },
  {
    type: 'C-US',
    emoji: '✍️',
    title: {
      ko: "문학·언어 창작자",
      en: "Literary & Language Creator",
      ja: "文学・言語クリエイター",
      'zh-CN': "文学与语言创作者",
      'zh-TW': "文學與語言創作者",
      vi: "Creator văn học & ngôn ngữ",
      id: "Kreator Sastra & Bahasa"
    },
    shortDescription: {
      ko: "당신에게 맞는 직군: 작가·카피라이터·번역가·편집자·시나리오작가",
      en: "Best-fit careers: Writers · copywriters · translators · editors · screenwriters",
      ja: "向いている職群：作家・コピーライター・翻訳家・編集者・脚本家",
      'zh-CN': "适合你的职群：作家·文案·翻译·编辑·编剧",
      'zh-TW': "適合你的職群：作家·文案·翻譯·編輯·編劇",
      vi: "Nhóm nghề phù hợp: Nhà văn · copywriter · biên dịch viên · biên tập viên · biên kịch",
      id: "Karier yang cocok: Penulis · copywriter · penerjemah · editor · penulis skenario"
    },
    description: {
      ko: "혼자 깊이 있는 작업을 통해 언어와 이야기로 세상과 소통하는 유형입니다. 조용한 환경에서 정제된 표현을 만들어내는 것이 핵심 강점입니다.",
      en: "You speak to the world through language and story — usually after deep, solo craft time. Shaping polished expression in a quiet environment is your core strength.",
      ja: "一人で深く向き合う仕事を通し、言葉と物語で世界とつながるタイプです。静かな環境で研ぎ澄まされた表現をつくることが核心の強みです。",
      'zh-CN': "你通过语言与故事和世界对话——往往先经过一段独处的深耕。在安静环境里打磨表达，是你的核心优势。",
      'zh-TW': "你透過語言與故事和世界對話——往往先經過一段獨處的深耕。在安靜環境裡打磨表達，是你的核心優勢。",
      vi: "Bạn giao tiếp với thế giới bằng ngôn từ và câu chuyện — thường sau khoảng thời gian làm việc sâu một mình. Tạo biểu đạt tinh khiết trong không gian yên tĩnh là điểm mạnh cốt lõi.",
      id: "Kamu berbicara dengan dunia lewat bahasa dan cerita — biasanya setelah kerja mendalam sendirian. Mengasah ekspresi di ruang tenang adalah kekuatan intimu."
    },
    coreCompetencies: {
      ko: "문장력,서사 구성,언어 감각,편집 능력,장르 이해",
      en: "Writing skills, narrative composition, language sense, editing skills, genre understanding",
      ja: "文章力,物語構成,言語感覚,編集能力,ジャンル理解",
      'zh-CN': "写作技巧,叙事写作,语感,编辑技巧,体裁理解",
      'zh-TW': "寫作技巧,敘事寫作,語感,編輯技巧,體裁理解",
      vi: "Kỹ năng viết, sáng tác tường thuật, cảm nhận ngôn ngữ, kỹ năng biên tập, hiểu thể loại",
      id: "Keterampilan menulis, komposisi narasi, pengertian bahasa, keterampilan mengedit, pemahaman genre"
    },
    matchingJobs: {
      ko: "소설가·웹소설작가·카피라이터·번역가·출판편집자·시나리오작가",
      en: "Novelist, web novel writer, copywriter, translator, publishing editor, screenwriter",
      ja: "小説家・ウェブ小説作家・コピーライター・翻訳家・出版編集者・シナリオ作家",
      'zh-CN': "小说家、网络小说作家、文案撰稿人、翻译家、出版编辑、编剧",
      'zh-TW': "小說家、網路小說作家、文案撰稿人、翻譯家、出版編輯、編劇",
      vi: "Tiểu thuyết gia, nhà văn tiểu thuyết web, người viết quảng cáo, dịch giả, biên tập viên xuất bản, nhà biên kịch",
      id: "Novelis, penulis novel web, copywriter, penerjemah, editor penerbitan, penulis skenario"
    },
    growthPath: {
      ko: "꾸준한 작품 발표 + 공모전 수상 + 플랫폼 연재로 독자 기반 구축",
      en: "Consistently publishing works + winning contests + building a reader base through platform serialization",
      ja: "着実な作品発表+コンテスト受賞+プラットフォーム連載で読者基盤の構築",
      'zh-CN': "持续发表作品+获奖作品+通过平台连载建立读者群",
      'zh-TW': "持續發表作品+獲獎作品+透過平台連載建立讀者群",
      vi: "Xuất bản liên tục các tác phẩm + chiến thắng trong các cuộc thi + xây dựng cơ sở độc giả thông qua việc đăng nhiều kỳ trên nền tảng",
      id: "Secara konsisten menerbitkan karya + memenangkan kontes + membangun basis pembaca melalui serialisasi platform"
    },
    caution: {
      ko: "프리랜서 수입 불안정성 대비 에이전시·출판사 취업을 병행 고려",
      en: "Consider employment at an agency or publishing company in preparation for freelance income instability",
      ja: "フリーランス収入の不安定さに備え、エージェンシー・出版社就職を並行検討",
      'zh-CN': "考虑在代理机构或出版公司就业，为自由职业收入不稳定做好准备",
      'zh-TW': "考慮在代理商或出版公司就業，為自由職業收入不穩定做好準備",
      vi: "Cân nhắc việc làm tại một cơ quan hoặc công ty xuất bản để chuẩn bị cho sự bất ổn về thu nhập của người làm nghề tự do",
      id: "Pertimbangkan untuk bekerja di agensi atau perusahaan penerbitan sebagai persiapan menghadapi ketidakstabilan pendapatan freelance"
    },
    firstCareer: {
      ko: "출판사 편집 인턴·번역 에이전시·웹소설 플랫폼 연재 시작",
      en: "Publishing editorial intern · translation agency · start serializing on a web-novel platform",
      ja: "出版社編集インターン・翻訳代理店・ウェブ小説プラットフォーム連載開始",
      'zh-CN': "出版编辑实习生、翻译社、网络小说平台连载开始",
      'zh-TW': "出版編輯實習生、翻譯社、網路小說平台連載開始",
      vi: "Thực tập sinh biên tập, công ty dịch thuật và nền tảng tiểu thuyết web bắt đầu xuất bản",
      id: "Penerbitan magang editorial, agen terjemahan, dan serialisasi platform novel web dimulai"
    },
    shareMessage: {
      ko: "직업 적성 AI 분석: 문학·언어 창작자 ✍️ 언어로 세상과 소통하는 유형... 작가·번역가 방향이래 → 너는 어떤 직군 나왔어?",
      en: "Career Aptitude AI: Literary & Language Creator ✍️ Speaks to the world through words… Writer·translator → What career type did you get?",
      ja: "職業適性AI：文学・言語クリエイター ✍️ 言葉で世界とつながるタイプ…作家・翻訳者向きだって → あなたはどの職群？",
      'zh-CN': "职业适性AI：文学·语言创作者 ✍️ 用文字与世界对话的类型…适合作家·译者 → 你是什么职群？",
      'zh-TW': "職業適性AI：文學·語言創作者 ✍️ 用文字與世界對話的類型…適合作家·譯者 → 你是什麼職群？",
      vi: "AI năng lực nghề: Creator ngôn ngữ·văn học ✍️ Kiểu người giao tiếp bằng ngôn từ… Hướng nhà văn·dịch giả → Bạn ra nhóm nghề nào?",
      id: "AI Bakat Karier: Kreator Sastra & Bahasa ✍️ Tipe yang berkomunikasi lewat kata… Arah penulis·penerjemah → Kamu dapat tipe karier apa?"
    },
  },
  {
    type: 'C-UD',
    emoji: '🎮',
    title: {
      ko: "디지털 콘텐츠 크리에이터",
      en: "Digital Content Creator",
      ja: "デジタルコンテンツクリエイター",
      'zh-CN': "数字内容创作者",
      'zh-TW': "數位內容創作者",
      vi: "Creator nội dung số",
      id: "Kreator Konten Digital"
    },
    shortDescription: {
      ko: "당신에게 맞는 직군: 유튜버·게임기획자·영상편집자·웹툰작가·숏폼크리에이터",
      en: "Best-fit careers: YouTube · game planning · video editing · webtoon creation · short-form content",
      ja: "向いている職群：YouTuber・ゲーム企画・映像編集・ウェブトゥーン作家・ショート動画クリエイター",
      'zh-CN': "适合你的职群：YouTuber·游戏策划·视频剪辑·网络漫画创作·短视频创作",
      'zh-TW': "適合你的職群：YouTuber·遊戲企劃·影片剪輯·網漫創作·短影音創作",
      vi: "Nhóm nghề phù hợp: YouTuber · thiết kế game · biên tập video · tác giả webtoon · sáng tạo video ngắn",
      id: "Karier yang cocok: YouTuber · perancang game · editor video · kreator webtoon · kreator konten pendek"
    },
    description: {
      ko: "혼자 새로운 포맷과 방식을 실험하며 디지털 세계에서 창작하는 유형입니다. 트렌드를 빠르게 흡수하고 자신만의 방식으로 재해석하는 능력이 강점입니다.",
      en: "You create in the digital world by experimenting with new formats on your own. Quickly absorbing trends and remixing them in your own style is your edge.",
      ja: "新しいフォーマットを一人で試しながら、デジタルの世界で創作するタイプです。トレンドを素早く取り込み、自分流に再解釈する力が強みです。",
      'zh-CN': "你会独自尝试新形式，在数字世界里持续创作。快速吸收趋势并用自己的方式改写，是你的优势。",
      'zh-TW': "你會獨自嘗試新形式，在數位世界裡持續創作。快速吸收趨勢並用自己的方式改寫，是你的優勢。",
      vi: "Bạn sáng tạo trong thế giới số bằng cách tự thử nghiệm format mới. Nuốt xu hướng nhanh rồi diễn giải lại theo cách riêng là lợi thế của bạn.",
      id: "Kamu berkarya di dunia digital dengan bereksperimen format baru sendirian. Menyerap tren cepat lalu menafsirkannya ulang dengan gaya sendiri adalah keunggulanmu."
    },
    coreCompetencies: {
      ko: "콘텐츠 기획,영상 편집,채널 운영,알고리즘 이해,IP 구축",
      en: "Content planning, video editing, channel operation, algorithm understanding, IP construction",
      ja: "コンテンツ企画,映像編集,チャンネル運営,アルゴリズム理解,IP構築",
      'zh-CN': "内容策划,视频剪辑,频道运营,算法理解,IP建设",
      'zh-TW': "內容策劃,影片剪輯,頻道運作,演算法理解,IP建設",
      vi: "Lập kế hoạch nội dung, biên tập video, vận hành kênh, hiểu thuật toán, xây dựng IP",
      id: "Perencanaan konten, pengeditan video, pengoperasian saluran, pemahaman algoritma, konstruksi IP"
    },
    matchingJobs: {
      ko: "유튜버·틱톡커·게임기획자·웹툰작가·숏폼PD·IP크리에이터",
      en: "YouTuber, TikToker, Game Planner, Webtoon Writer, Short Form PD, IP Creator",
      ja: "YouTuber・TikToker・ゲームプランナー・ウェブトゥーン作家・ショート動画PD・IPクリエイター",
      'zh-CN': "YouTuber、TikToker、游戏策划师、网络漫画作家、短片 PD、IP 创作者",
      'zh-TW': "YouTuber、TikToker、遊戲策劃師、網路漫畫作家、短片 PD、IP 創作者",
      vi: "YouTuber, TikToker, Người lập kế hoạch trò chơi, Người viết webtoon, PD dạng ngắn, Người tạo IP",
      id: "YouTuber, TikToker, Perencana Game, Penulis Webtoon, PD Bentuk Pendek, Pembuat IP"
    },
    growthPath: {
      ko: "지속적인 콘텐츠 발행 + 플랫폼별 최적화 + 수익 다각화(광고·굿즈·IP)",
      en: "Continuous content publication + optimization by platform + revenue diversification (advertising, goods, IP)",
      ja: "継続的なコンテンツ発行＋プラットフォーム別最適化＋収益多角化（広告・グッズ・IP）",
      'zh-CN': "内容持续发布+平台优化+收入多元化（广告、商品、IP）",
      'zh-TW': "內容持續發布+平台優化+收入多元化（廣告、商品、IP）",
      vi: "Xuất bản nội dung liên tục + tối ưu hóa theo nền tảng + đa dạng hóa doanh thu (quảng cáo, hàng hóa, IP)",
      id: "Publikasi konten berkelanjutan + pengoptimalan berdasarkan platform + diversifikasi pendapatan (iklan, barang, IP)"
    },
    caution: {
      ko: "알고리즘 의존 리스크 대비 팬덤·커뮤니티 기반 구축 병행",
      en: "Build a fandom/community base in parallel so you are not fully dependent on algorithms",
      ja: "アルゴリズム依存を避けるため、ファンダム・コミュニティ基盤も並行して築く",
      'zh-CN': "同步经营粉丝与社区，避免过度依赖算法",
      'zh-TW': "同步經營粉絲與社群，避免過度依賴演算法",
      vi: "Xây dựng song song fandom và cộng đồng để chuẩn bị cho nguy cơ lệ thuộc thuật toán",
      id: "Konstruksi paralel antara basis fandom dan komunitas untuk bersiap menghadapi risiko ketergantungan algoritma"
    },
    firstCareer: {
      ko: "1인 채널 개설·게임사 기획 인턴·웹툰 스튜디오 보조작가",
      en: "Launch a solo channel, game company planning intern, webtoon studio assistant writer",
      ja: "1人チャンネル開設・ゲーム会社企画インターン・ウェブトゥーンスタジオ補助作家",
      'zh-CN': "1人频道开通、游戏公司企划实习生、网络漫画工作室助理编剧",
      'zh-TW': "1人頻道開通、遊戲公司企劃實習生、網路漫畫工作室助理編劇",
      vi: "1 người mở kênh, thực tập sinh lập kế hoạch công ty trò chơi, trợ lý biên kịch webtoon",
      id: "Pembukaan saluran 1 orang, magang perencanaan perusahaan game, asisten penulis studio webtoon"
    },
    shareMessage: {
      ko: "직업 적성 AI 분석: 디지털 콘텐츠 크리에이터 🎮 혼자 새로운 포맷 실험하는 유형... 유튜버·게임기획자 방향이래 → 너는 어떤 직군 나왔어?",
      en: "Career Aptitude AI: Digital Content Creator 🎮 Experiments with new formats solo… YouTuber·game designer → What career type did you get?",
      ja: "職業適性AI：デジタルコンテンツクリエイター 🎮 一人で新フォーマットを試すタイプ…YouTuber・ゲーム企画向きだって → あなたはどの職群？",
      'zh-CN': "职业适性AI：数字内容创作者 🎮 独自尝试新形式的类型…适合YouTuber·游戏策划 → 你是什么职群？",
      'zh-TW': "職業適性AI：數位內容創作者 🎮 獨自嘗試新形式的類型…適合YouTuber·遊戲企劃 → 你是什麼職群？",
      vi: "AI năng lực nghề: Creator nội dung số 🎮 Kiểu người tự thử nghiệm format mới… Hướng YouTuber·game planner → Bạn ra nhóm nghề nào?",
      id: "AI Bakat Karier: Kreator Konten Digital 🎮 Tipe yang bereksperimen format baru sendirian… Arah YouTuber·game planner → Kamu dapat tipe karier apa?"
    },
  },
  {
    type: 'T-SS',
    emoji: '🏛️',
    title: {
      ko: "건축·환경 설계자",
      en: "Architecture & Environment Designer",
      ja: "建築・環境デザイナー",
      'zh-CN': "建筑与环境设计师",
      'zh-TW': "建築與環境設計師",
      vi: "Nhà thiết kế kiến trúc & môi trường",
      id: "Desainer Arsitektur & Lingkungan"
    },
    shortDescription: {
      ko: "당신에게 맞는 직군: 건축사·인테리어디자이너·도시계획가·토목엔지니어",
      en: "Best-fit careers: Architecture · interior design · urban planning · civil engineering",
      ja: "向いている職群：建築家・インテリアデザイナー・都市計画家・土木エンジニア",
      'zh-CN': "适合你的职群：建筑师·室内设计师·城市规划师·土木工程师",
      'zh-TW': "適合你的職群：建築師·室內設計師·都市規劃師·土木工程師",
      vi: "Nhóm nghề phù hợp: Kiến trúc sư · thiết kế nội thất · quy hoạch đô thị · kỹ sư xây dựng",
      id: "Karier yang cocok: Arsitek · desainer interior · perencana kota · insinyur sipil"
    },
    description: {
      ko: "기술적 구현 능력과 협업·소통 능력이 결합된 유형입니다. 눈에 보이는 공간과 구조물을 설계하고 실현하는 과정에서 보람을 찾습니다.",
      en: "You blend technical craft with collaboration and communication. Designing and realizing spaces and structures people can actually see and use is deeply rewarding for you.",
      ja: "技術で形にする力と、協働・コミュニケーションが両立したタイプです。目に見える空間や構造物を設計し実現する過程にやりがいを感じます。",
      'zh-CN': "你既有技术落地能力，也擅长协作沟通。设计并实现看得见、用得上的空间与结构，会让你特别有成就感。",
      'zh-TW': "你既有技術落地能力，也擅長協作溝通。設計並實現看得見、用得上的空間與結構，會讓你特別有成就感。",
      vi: "Bạn kết hợp năng lực kỹ thuật với cộng tác và giao tiếp. Thiết kế rồi hiện thực hóa không gian và cấu trúc mà người ta nhìn thấy và chạm được mang lại nhiều ý nghĩa cho bạn.",
      id: "Kamu memadukan kemampuan teknis dengan kolaborasi dan komunikasi. Merancang dan mewujudkan ruang serta struktur yang nyata terasa sangat memuaskan."
    },
    coreCompetencies: {
      ko: "공간 감각,CAD/BIM,프로젝트 관리,법규 이해,클라이언트 소통",
      en: "Spatial sense, CAD/BIM, project management, understanding of laws, client communication",
      ja: "空間感覚,CAD/BIM,プロジェクト管理,法律理解,クライアントコミュニケーション",
      'zh-CN': "空间感,CAD/BIM,项目管理,法律理解,客户沟通",
      'zh-TW': "空間感,CAD/BIM,專案管理,法律理解,客戶溝通",
      vi: "Ý thức về không gian, CAD/BIM, quản lý dự án, hiểu biết về pháp luật, giao tiếp với khách hàng",
      id: "Pengertian spasial, CAD/BIM, manajemen proyek, pemahaman hukum, komunikasi klien"
    },
    matchingJobs: {
      ko: "건축사·인테리어디자이너·조경설계사·도시계획가·시설관리자",
      en: "Architect, interior designer, landscape architect, urban planner, facility manager",
      ja: "建築士・インテリアデザイナー・景観設計士・都市計画家・施設管理者",
      'zh-CN': "建筑师、室内设计师、景观设计师、城市规划师、设施经理",
      'zh-TW': "建築師、室內設計師、景觀設計師、都市規劃師、設施經理",
      vi: "Kiến trúc sư, nhà thiết kế nội thất, kiến trúc sư cảnh quan, nhà quy hoạch đô thị, quản lý cơ sở vật chất",
      id: "Arsitek, desainer interior, arsitek lanskap, perencana kota, manajer fasilitas"
    },
    growthPath: {
      ko: "건축사 자격증·AutoCAD/Revit 능숙도·포트폴리오 구축",
      en: "Architect certification, AutoCAD/Revit proficiency, and portfolio construction",
      ja: "建築士資格証・AutoCAD/Revit 熟練度・ポートフォリオ構築",
      'zh-CN': "建筑师认证、AutoCAD/Revit 熟练程度和作品集构建",
      'zh-TW': "建築師認證、AutoCAD/Revit 熟練度和作品集構建",
      vi: "Chứng chỉ kiến trúc sư, trình độ thành thạo AutoCAD/Revit và xây dựng danh mục đầu tư",
      id: "Sertifikasi arsitek, kemahiran AutoCAD/Revit, dan konstruksi portofolio"
    },
    caution: {
      ko: "건설경기에 따라 수요 변동이 크므로 전문 자격증이 안전망",
      en: "Since demand fluctuates greatly depending on the construction industry, professional certification is a safety net.",
      ja: "建設景気に応じて需要の変動が大きいため、プロの資格が安全ネットワーク",
      'zh-CN': "由于建筑行业的需求波动很大，因此专业认证是一张安全网。",
      'zh-TW': "由於建築業的需求波動很大，因此專業認證是一張安全網。",
      vi: "Vì nhu cầu biến động lớn tùy thuộc vào ngành xây dựng nên chứng chỉ chuyên môn là một mạng lưới an toàn.",
      id: "Karena permintaan sangat berfluktuasi tergantung pada industri konstruksi, sertifikasi profesional adalah jaring pengaman."
    },
    firstCareer: {
      ko: "건축설계사무소 인턴·인테리어 시공사·건설사 설계팀",
      en: "Architectural design office intern, interior contractor, construction company design team",
      ja: "建築設計事務所インターン・インテリア施工士・建設会社設計チーム",
      'zh-CN': "建筑设计办公室实习生、室内承包商、建筑公司设计团队",
      'zh-TW': "建築設計辦公室實習生、室內承包商、建築公司設計團隊",
      vi: "Thực tập sinh thiết kế kiến trúc văn phòng, nhà thầu nội thất, đội ngũ thiết kế công ty xây dựng",
      id: "Magang kantor desain arsitektur, kontraktor interior, tim desain perusahaan konstruksi"
    },
    shareMessage: {
      ko: "직업 적성 AI 분석: 건축·환경 설계자 🏛️ 공간과 구조를 실현하는 유형... 건축사·인테리어 방향이래 → 너는 어떤 직군 나왔어?",
      en: "Career Aptitude AI: Architecture & Environment Designer 🏛️ Turns space and structure into reality… Architect·interior → What career type did you get?",
      ja: "職業適性AI：建築・環境デザイナー 🏛️ 空間と構造を形にするタイプ…建築士・インテリア向きだって → あなたはどの職群？",
      'zh-CN': "职业适性AI：建筑·环境设计师 🏛️ 把空间与结构落地的类型…适合建筑师·室内设计 → 你是什么职群？",
      'zh-TW': "職業適性AI：建築·環境設計師 🏛️ 把空間與結構落地的類型…適合建築師·室內設計 → 你是什麼職群？",
      vi: "AI năng lực nghề: Nhà thiết kế kiến trúc·môi trường 🏛️ Kiểu người hiện thực hóa không gian… Hướng kiến trúc·nội thất → Bạn ra nhóm nghề nào?",
      id: "AI Bakat Karier: Desainer Arsitektur & Lingkungan 🏛️ Tipe yang mewujudkan ruang dan struktur… Arah arsitek·interior → Kamu dapat tipe karier apa?"
    },
  },
  {
    type: 'T-SD',
    emoji: '🚀',
    title: {
      ko: "혁신 기술 창업가",
      en: "Tech Innovator & Founder",
      ja: "革新テック起業家",
      'zh-CN': "创新技术创业者",
      'zh-TW': "創新技術創業者",
      vi: "Nhà sáng lập công nghệ",
      id: "Founder Teknologi Inovatif"
    },
    shortDescription: {
      ko: "당신에게 맞는 직군: 스타트업 창업·기술사업화·CTO·테크PM",
      en: "Best-fit careers: Startup founding · technology commercialization · CTO · technical product management",
      ja: "向いている職群：スタートアップ起業・技術事業化・CTO・テックPM",
      'zh-CN': "适合你的职群：创业·技术商业化·CTO·技术产品经理",
      'zh-TW': "適合你的職群：創業·技術商業化·CTO·技術產品經理",
      vi: "Nhóm nghề phù hợp: Khởi nghiệp · thương mại hóa công nghệ · CTO · quản lý sản phẩm công nghệ",
      id: "Karier yang cocok: Mendirikan startup · komersialisasi teknologi · CTO · manajemen produk teknologi"
    },
    description: {
      ko: "기술을 기반으로 새로운 비즈니스를 만들고 빠르게 성장하는 환경에서 에너지를 얻는 유형입니다. 기술과 시장을 동시에 이해하는 능력이 핵심입니다.",
      en: "You build new businesses on technology and get energy from high-growth environments. Understanding tech and markets at the same time is your key.",
      ja: "技術を土台に新しいビジネスをつくり、急成長の環境からエネルギーを得るタイプです。技術と市場を同時に理解する能力がカギです。",
      'zh-CN': "你会以技术打造新业务，并从高速成长的环境里获取能量。同时读懂技术与市场，是你的关键能力。",
      'zh-TW': "你會以技術打造新業務，並從高速成長的環境裡獲取能量。同時讀懂技術與市場，是你的關鍵能力。",
      vi: "Bạn dựng business mới trên nền tảng công nghệ và lấy năng lượng từ môi trường tăng trưởng nhanh. Hiểu tech và thị trường cùng lúc là chìa khóa.",
      id: "Kamu membangun bisnis baru berbasis teknologi dan mendapat energi dari lingkungan high-growth. Memahami tech dan pasar sekaligus adalah kuncimu."
    },
    coreCompetencies: {
      ko: "기술 이해,비즈니스 모델 설계,팀 빌딩,투자 유치,MVP 개발",
      en: "Technology understanding, business model design, team building, investment attraction, MVP development",
      ja: "技術理解,ビジネスモデル設計,チームビルディング,投資誘致,MVP開発",
      'zh-CN': "技术理解,商业模式设计,团队建设,招商,MVP开发",
      'zh-TW': "技術理解,商業模式設計,團隊建立,招募,MVP開發",
      vi: "Am hiểu công nghệ, thiết kế mô hình kinh doanh, xây dựng đội nhóm, thu hút đầu tư, phát triển MVP",
      id: "Pemahaman teknologi, desain model bisnis, team building, daya tarik investasi, pengembangan MVP"
    },
    matchingJobs: {
      ko: "스타트업 창업가·CTO·테크PM·기술사업화 전문가·액셀러레이터",
      en: "Startup entrepreneur, CTO, tech PM, technology commercialization expert, accelerator",
      ja: "スタートアップ創業家・CTO・テックPM・技術事業化専門家・アクセラレータ",
      'zh-CN': "初创企业家、CTO、技术 PM、技术商业化专家、加速器",
      'zh-TW': "新創企業家、CTO、技術 PM、技術商業化專家、加速器",
      vi: "Doanh nhân khởi nghiệp, CTO, PM công nghệ, chuyên gia thương mại hóa công nghệ, người tăng tốc",
      id: "Pengusaha startup, CTO, PM teknologi, pakar komersialisasi teknologi, akselerator"
    },
    growthPath: {
      ko: "개발 능력 + 비즈니스 감각 + 네트워크. 스타트업 조인으로 경험 축적 먼저",
      en: "Development ability + business sense + network. First, accumulate experience by joining a startup",
      ja: "開発能力+ビジネス感覚+ネットワーク。まずスタートアップ参加で経験を積む",
      'zh-CN': "开发能力+商业意识+人脉。首先，通过加入初创公司积累经验",
      'zh-TW': "開發能力+商業意識+人脈。首先，透過加入新創公司累積經驗",
      vi: "Khả năng phát triển + ý thức kinh doanh + mạng lưới. Đầu tiên, tích lũy kinh nghiệm bằng cách tham gia khởi nghiệp",
      id: "Kemampuan pengembangan + naluri bisnis + jaringan. Pertama, kumpulkan pengalaman dengan bergabung di sebuah startup"
    },
    caution: {
      ko: "창업 실패율이 높으므로 최소 3~5년 실무 경험 후 창업 권장",
      en: "Since the failure rate of startups is high, it is recommended to start a business after at least 3 to 5 years of practical experience.",
      ja: "創業失敗率が高いので、少なくとも3〜5年の実務経験後に創業を推奨",
      'zh-CN': "由于创业失败率较高，建议至少有3到5年的实践经验后再创业。",
      'zh-TW': "由於創業失敗率較高，建議至少有3到5年的實務經驗後再創業。",
      vi: "Vì tỷ lệ thất bại của các công ty khởi nghiệp cao nên nên khởi nghiệp sau ít nhất 3 đến 5 năm kinh nghiệm thực tế.",
      id: "Karena tingkat kegagalan startup cukup tinggi, disarankan untuk memulai bisnis setelah memiliki pengalaman praktis minimal 3 hingga 5 tahun."
    },
    firstCareer: {
      ko: "스타트업 초기 멤버·테크 기업 PM·창업 경진대회 참여",
      en: "Early startup member · tech company PM · startup contests",
      ja: "スタートアップ初期メンバー・テク企業PM・創業競進大会参加",
      'zh-CN': "参与早期创业会员/科技公司PM/创业竞赛",
      'zh-TW': "參與早期創業會員/科技公司PM/創業競賽",
      vi: "Tham gia các cuộc thi thành viên khởi nghiệp/PM công ty công nghệ/khởi nghiệp sớm",
      id: "Partisipasi dalam kontes PM/kewirausahaan anggota startup awal/perusahaan teknologi"
    },
    shareMessage: {
      ko: "직업 적성 AI 분석: 혁신 기술 창업가 🚀 기술 기반 새로운 비즈니스 만드는 유형... 스타트업·CTO 방향이래 → 너는 어떤 직군 나왔어?",
      en: "Career Aptitude AI: Tech Innovator & Founder 🚀 Builds new businesses on technology… Startup·CTO path → What career type did you get?",
      ja: "職業適性AI：革新テック起業家 🚀 技術で新しいビジネスを作るタイプ…スタートアップ・CTO向きだって → あなたはどの職群？",
      'zh-CN': "职业适性AI：创新技术创业者 🚀 用技术打造新事业的类型…适合创业·CTO → 你是什么职群？",
      'zh-TW': "職業適性AI：創新技術創業者 🚀 用技術打造新事業的類型…適合創業·CTO → 你是什麼職群？",
      vi: "AI năng lực nghề: Nhà sáng lập công nghệ 🚀 Kiểu người tạo business mới từ tech… Hướng startup·CTO → Bạn ra nhóm nghề nào?",
      id: "AI Bakat Karier: Founder Teknologi Inovatif 🚀 Tipe yang membangun bisnis baru dari teknologi… Arah startup·CTO → Kamu dapat tipe karier apa?"
    },
  },
  {
    type: 'T-US',
    emoji: '🖥️',
    title: {
      ko: "UX·제품 디자이너",
      en: "UX & Product Designer",
      ja: "UX・プロダクトデザイナー",
      'zh-CN': "UX与产品设计师",
      'zh-TW': "UX與產品設計師",
      vi: "Nhà thiết kế UX & sản phẩm",
      id: "Desainer UX & Produk"
    },
    shortDescription: {
      ko: "당신에게 맞는 직군: UX디자이너·프로덕트디자이너·UI디자이너·서비스기획자",
      en: "Best-fit careers: UX design · product design · UI design · service planning",
      ja: "向いている職群：UXデザイナー・プロダクトデザイナー・UIデザイナー・サービス企画",
      'zh-CN': "适合你的职群：UX设计·产品设计·UI设计·服务策划",
      'zh-TW': "適合你的職群：UX設計·產品設計·UI設計·服務企劃",
      vi: "Nhóm nghề phù hợp: Thiết kế UX · thiết kế sản phẩm · thiết kế UI · hoạch định dịch vụ",
      id: "Karier yang cocok: Desain UX · desain produk · desain UI · perencanaan layanan"
    },
    description: {
      ko: "사용자의 경험을 깊이 이해하고 정교하게 설계하는 작업에서 강점을 발휘하는 유형입니다. 혼자 집중하면서 세밀한 인터랙션을 완성하는 것이 자연스럽습니다.",
      en: "You excel at deeply understanding user experience and designing it with precision. Focusing solo to refine detailed interactions feels completely natural.",
      ja: "ユーザー体験を深く理解し、丁寧に設計することに強みがあります。一人で集中して細かなインタラクションを仕上げるのが自然です。",
      'zh-CN': "你擅长深入理解用户体验，并把它设计得精细到位。独自专注、打磨细腻交互，对你来说很自然。",
      'zh-TW': "你擅長深入理解使用者體驗，並把它設計得精細到位。獨自專注、打磨細膩互動，對你來說很自然。",
      vi: "Bạn giỏi hiểu sâu trải nghiệm người dùng và thiết kế tỉ mỉ. Tập trung một mình để hoàn thiện tương tác chi tiết là điều rất tự nhiên.",
      id: "Kamu unggul memahami pengalaman pengguna secara mendalam lalu merancangnya rapi. Fokus sendirian untuk menyempurnakan interaksi detail terasa alami."
    },
    coreCompetencies: {
      ko: "Figma,사용자 리서치,정보설계,프로토타이핑,개발 이해",
      en: "Understanding Figma, user research, information design, prototyping, and development",
      ja: "Figma,ユーザーリサーチ,情報設計,プロトタイピング,開発理解",
      'zh-CN': "了解 Figma,用户研究,信息设计,原型设计和开发",
      'zh-TW': "了解 Figma,使用者研究,資訊設計,原型設計和開發",
      vi: "Hiểu Figma, nghiên cứu người dùng, thiết kế thông tin, tạo mẫu và phát triển",
      id: "Memahami Figma, riset pengguna, desain informasi, pembuatan prototipe, dan pengembangan"
    },
    matchingJobs: {
      ko: "UX디자이너·프로덕트디자이너·UI디자이너·서비스기획자·HCI연구자",
      en: "UX designer, product designer, UI designer, service planner, HCI researcher",
      ja: "UXデザイナー・プロダクトデザイナー・UIデザイナー・サービス企画者・HCI研究者",
      'zh-CN': "UX设计师、产品设计师、UI设计师、服务规划师、HCI研究员",
      'zh-TW': "UX設計師、產品設計師、UI設計師、服務規劃師、HCI研究員",
      vi: "Nhà thiết kế UX, nhà thiết kế sản phẩm, nhà thiết kế giao diện người dùng, người lập kế hoạch dịch vụ, nhà nghiên cứu HCI",
      id: "Desainer UX, desainer produk, desainer UI, perencana layanan, peneliti HCI"
    },
    growthPath: {
      ko: "Figma·Adobe XD 능숙도 + 사용자 인터뷰·리서치 포트폴리오 구축",
      en: "Figma·Adobe XD proficiency + user interview·research portfolio construction",
      ja: "Figma・Adobe XD熟練度＋ユーザーインタビュー・リサーチポートフォリオ構築",
      'zh-CN': "Figma·Adobe XD熟练程度+用户访谈·研究组合构建",
      'zh-TW': "Figma·Adobe XD熟練度+使用者訪談·研究組合構建",
      vi: "Figma·Thành thạo Adobe XD + phỏng vấn người dùng·xây dựng danh mục nghiên cứu",
      id: "Figma·Kemahiran Adobe XD + wawancara pengguna·konstruksi portofolio penelitian"
    },
    caution: {
      ko: "개발자·PM과의 협업 능력이 성장 속도를 결정",
      en: "The ability to collaborate with developers and PMs determines the speed of growth.",
      ja: "開発者・PMとのコラボレーション能力が成長速度を決定",
      'zh-CN': "与开发人员和 PM 协作的能力决定了增长的速度。",
      'zh-TW': "與開發人員和 PM 合作的能力決定了成長的速度。",
      vi: "Khả năng cộng tác với các nhà phát triển và PM quyết định tốc độ tăng trưởng.",
      id: "Kemampuan berkolaborasi dengan pengembang dan PM menentukan kecepatan pertumbuhan."
    },
    firstCareer: {
      ko: "IT 스타트업 UX 인턴·앱 디자인 포트폴리오 제작·부트캠프",
      en: "IT startup UX intern, app design portfolio production, boot camp",
      ja: "ITスタートアップUXインターン・アプリデザインポートフォリオ制作・ブートキャンプ",
      'zh-CN': "IT 初创公司 UX 实习生、应用程序设计作品集制作、训练营",
      'zh-TW': "IT 新創公司 UX 實習生、應用程式設計作品集製作、訓練營",
      vi: "Thực tập sinh UX khởi nghiệp CNTT, sản xuất danh mục thiết kế ứng dụng, chương trình đào tạo",
      id: "Magang UX startup TI, produksi portofolio desain aplikasi, kamp pelatihan"
    },
    shareMessage: {
      ko: "직업 적성 AI 분석: UX·제품 디자이너 🖥️ 사용자 경험을 설계하는 유형... UX·프로덕트 디자인 방향이래 → 너는 어떤 직군 나왔어?",
      en: "Career Aptitude AI: UX & Product Designer 🖥️ Crafts user experiences in deep focus… UX·product design → What career type did you get?",
      ja: "職業適性AI：UX・プロダクトデザイナー 🖥️ 体験を繊細に設計するタイプ…UX・プロダクトデザイン向きだって → あなたはどの職群？",
      'zh-CN': "职业适性AI：UX·产品设计师 🖥️ 沉浸式打磨用户体验的类型…适合UX·产品设计 → 你是什么职群？",
      'zh-TW': "職業適性AI：UX·產品設計師 🖥️ 沉浸式打磨使用者體驗的類型…適合UX·產品設計 → 你是什麼職群？",
      vi: "AI năng lực nghề: Nhà thiết kế UX·sản phẩm 🖥️ Kiểu người thiết kế trải nghiệm… Hướng UX·product → Bạn ra nhóm nghề nào?",
      id: "AI Bakat Karier: Desainer UX & Produk 🖥️ Tipe yang merancang pengalaman pengguna… Arah UX·product → Kamu dapat tipe karier apa?"
    },
  },
  {
    type: 'T-UD',
    emoji: '💻',
    title: {
      ko: "IT·소프트웨어 개발자",
      en: "IT & Software Developer",
      ja: "IT・ソフトウェア開発者",
      'zh-CN': "IT与软件开发者",
      'zh-TW': "IT與軟體開發者",
      vi: "Lập trình viên IT & phần mềm",
      id: "Developer IT & Software"
    },
    shortDescription: {
      ko: "당신에게 맞는 직군: 소프트웨어개발자·AI엔지니어·사이버보안·DevOps",
      en: "Best-fit careers: Software development · AI engineering · cybersecurity · DevOps",
      ja: "向いている職群：ソフトウェア開発・AIエンジニア・サイバーセキュリティ・DevOps",
      'zh-CN': "适合你的职群：软件开发·AI工程·网络安全·DevOps",
      'zh-TW': "適合你的職群：軟體開發·AI工程·資安·DevOps",
      vi: "Nhóm nghề phù hợp: Phát triển phần mềm · kỹ sư AI · an ninh mạng · DevOps",
      id: "Karier yang cocok: Pengembangan perangkat lunak · rekayasa AI · keamanan siber · DevOps"
    },
    description: {
      ko: "기술을 깊이 탐구하고 새로운 솔루션을 혼자 구현하는 것에서 가장 큰 만족을 찾는 유형입니다. 끊임없이 새로운 기술을 학습하고 적용하는 것이 자연스럽습니다.",
      en: "You get the most satisfaction from diving deep into technology and shipping new solutions on your own. Constantly learning and applying new tech feels second nature.",
      ja: "技術を深く掘り、新しいソリューションを一人で実装することに最大の満足を感じるタイプです。常に新しい技術を学び適用するのが自然です。",
      'zh-CN': "你从深入钻研技术、独自把新方案做出来里获得最大满足。持续学习并应用新技术，对你来说像本能。",
      'zh-TW': "你從深入鑽研技術、獨自把新方案做出來裡獲得最大滿足。持續學習並應用新技術，對你來說像本能。",
      vi: "Bạn thấy thỏa mãn nhất khi đào sâu công nghệ và tự triển khai giải pháp mới. Việc liên tục học và áp dụng tech mới gần như bản năng.",
      id: "Kepuasan terbesar datang saat menyelami teknologi dan mengimplementasikan solusi baru sendirian. Belajar dan menerapkan tech baru terus-menerus adalah natumu."
    },
    coreCompetencies: {
      ko: "프로그래밍,알고리즘,시스템 설계,버전관리",
      en: "Programming, algorithm, system design, version management",
      ja: "プログラミング,アルゴリズム,システム設計,バージョン管理",
      'zh-CN': "编程,算法,系统设计,版本管理",
      'zh-TW': "程式設計,演算法,系統設計,版本管理",
      vi: "Lập trình, thuật toán, thiết kế hệ thống, quản lý phiên bản",
      id: "Pemrograman, algoritma, desain sistem, manajemen versi"
    },
    matchingJobs: {
      ko: "백엔드·프론트엔드·풀스택·AI엔지니어·사이버보안·임베디드",
      en: "Backend, frontend, full stack, AI engineer, cybersecurity, embedded",
      ja: "バックエンド・フロントエンド・フルスタック・AIエンジニア・サイバーセキュリティ・組込み",
      'zh-CN': "后端、前端、全栈、人工智能工程师、网络安全、嵌入式",
      'zh-TW': "後端、前端、全端、人工智慧工程師、網路安全、嵌入式",
      vi: "Backend, frontend, full stack, kỹ sư AI, an ninh mạng, nhúng",
      id: "Backend, frontend, full stack, insinyur AI, keamanan siber, tertanam"
    },
    growthPath: {
      ko: "코딩 테스트 능숙도 + GitHub 포트폴리오 + 오픈소스 기여",
      en: "Coding test proficiency + GitHub portfolio + open source contribution",
      ja: "コーディングテストの熟練度+ GitHubポートフォリオ+オープンソース貢献",
      'zh-CN': "编码测试能力+GitHub作品集+开源贡献",
      'zh-TW': "編碼測試能力+GitHub作品集+開源貢獻",
      vi: "Kiểm tra trình độ viết mã + danh mục GitHub + đóng góp nguồn mở",
      id: "Kemahiran tes pengkodean + portofolio GitHub + kontribusi sumber terbuka"
    },
    caution: {
      ko: "기술 트렌드 변화가 빠르므로 꾸준한 학습 루틴이 핵심",
      en: "Technology trends change quickly, so a steady learning routine is key.",
      ja: "技術トレンドの変化が早いため、着実な学習ルーチンが重要",
      'zh-CN': "技术趋势瞬息万变，因此稳定的学习习惯至关重要。",
      'zh-TW': "科技趨勢瞬息萬變，因此穩定的學習習慣至關重要。",
      vi: "Xu hướng công nghệ thay đổi nhanh chóng, vì vậy thói quen học tập đều đặn là điều quan trọng.",
      id: "Tren teknologi berubah dengan cepat, jadi pembelajaran rutin yang stabil adalah kuncinya."
    },
    firstCareer: {
      ko: "IT 부트캠프 수료·스타트업 개발 인턴·개인 프로젝트 포트폴리오",
      en: "IT boot camp completion, startup development internship, personal project portfolio",
      ja: "ITブートキャンプ修了・スタートアップ開発インターン・個人プロジェクトポートフォリオ",
      'zh-CN': "IT 新手训练营完成、创业开发实习、个人项目组合",
      'zh-TW': "IT 新手訓練營完成、創業開發實習、個人專案組合",
      vi: "Hoàn thành trại đào tạo CNTT, thực tập phát triển khởi nghiệp, danh mục dự án cá nhân",
      id: "Penyelesaian kamp pelatihan TI, magang pengembangan startup, portofolio proyek pribadi"
    },
    shareMessage: {
      ko: "직업 적성 AI 분석: IT·소프트웨어 개발자 💻 혼자 기술 탐구하는 유형... 개발자·AI엔지니어 방향이래 → 너는 어떤 직군 나왔어?",
      en: "Career Aptitude AI: IT & Software Developer 💻 Loves diving deep into tech alone… Developer·AI engineer → What career type did you get?",
      ja: "職業適性AI：IT・ソフトウェア開発者 💻 一人で技術を深掘りするタイプ…開発者・AIエンジニア向きだって → あなたはどの職群？",
      'zh-CN': "职业适性AI：IT·软件开发者 💻 独自深挖技术的类型…适合开发·AI工程师 → 你是什么职群？",
      'zh-TW': "職業適性AI：IT·軟體開發者 💻 獨自深挖技術的類型…適合開發·AI工程師 → 你是什麼職群？",
      vi: "AI năng lực nghề: Lập trình viên IT·phần mềm 💻 Kiểu người tự đào sâu công nghệ… Hướng developer·AI engineer → Bạn ra nhóm nghề nào?",
      id: "AI Bakat Karier: Developer IT & Software 💻 Tipe yang mendalami teknologi sendirian… Arah developer·AI engineer → Kamu dapat tipe karier apa?"
    },
  },
  {
    type: 'A-SS',
    emoji: '📊',
    title: {
      ko: "경영·재무 관리자",
      en: "Management & Finance Lead",
      ja: "経営・財務マネージャー",
      'zh-CN': "经营与财务管理",
      'zh-TW': "經營與財務管理",
      vi: "Quản lý điều hành & tài chính",
      id: "Manajer Manajemen & Keuangan"
    },
    shortDescription: {
      ko: "당신에게 맞는 직군: 경영기획·재무·회계·CFO·경영관리",
      en: "Best-fit careers: Business planning · finance · accounting · CFO · business administration",
      ja: "向いている職群：経営企画・財務・会計・CFO・経営管理",
      'zh-CN': "适合你的职群：经营企划·财务·会计·CFO·经营管理",
      'zh-TW': "適合你的職群：經營企劃·財務·會計·CFO·經營管理",
      vi: "Nhóm nghề phù hợp: Hoạch định kinh doanh · tài chính · kế toán · CFO · quản trị doanh nghiệp",
      id: "Karier yang cocok: Perencanaan bisnis · keuangan · akuntansi · CFO · manajemen bisnis"
    },
    description: {
      ko: "숫자와 데이터로 조직을 안정적으로 운영하고 여러 이해관계자와 소통하며 의사결정을 지원하는 유형입니다.",
      en: "You keep organizations steady with numbers and data, align stakeholders, and support clear decisions. Structure and reliability are your superpowers.",
      ja: "数字とデータで組織を安定運用し、複数の利害関係者とつなぎながら意思決定を支えるタイプです。仕組みと信頼性を築くのが強みです。",
      'zh-CN': "你会用数字与数据稳住组织，协调多方利益相关者，并支持清晰决策。搭建体系与可信度是你的超能力。",
      'zh-TW': "你會用數字與資料穩住組織，協調多方利害關係人，並支持清晰決策。搭建體系與可信度是你的超能力。",
      vi: "Bạn vận hành tổ chức ổn định bằng số liệu, kết nối nhiều bên liên quan và hỗ trợ quyết định rõ ràng. Xây hệ thống và độ tin cậy là siêu năng lực của bạn.",
      id: "Kamu menjaga organisasi tetap stabil dengan angka dan data, menyelaraskan pemangku kepentingan, dan mendukung keputusan yang jernih. Membangun sistem dan kredibilitas adalah kekuatanmu."
    },
    coreCompetencies: {
      ko: "재무제표 분석,예산 관리,ERP,보고서 작성,스프레드시트",
      en: "Financial statement analysis, budget management, ERP, report writing, spreadsheet",
      ja: "財務諸表分析,予算管理,ERP,報告書作成,スプレッドシート",
      'zh-CN': "财务报表分析,预算管理,ERP,报告撰写,电子表格",
      'zh-TW': "財務報表分析,預算管理,ERP,報告撰寫,電子表格",
      vi: "Phân tích báo cáo tài chính, quản lý ngân sách, ERP, viết báo cáo, bảng tính",
      id: "Analisis laporan keuangan, manajemen anggaran, ERP, penulisan laporan, spreadsheet"
    },
    matchingJobs: {
      ko: "경영기획자·재무담당자·회계사·경영분석가·CFO트랙",
      en: "Management planner, finance manager, accountant, management analyst, CFO track",
      ja: "経営企画者・財務担当者・会計士・経営分析家・CFOトラック",
      'zh-CN': "管理规划师、财务经理、会计师、管理分析师、CFO轨道",
      'zh-TW': "管理規劃師、財務經理、會計、管理分析師、CFO軌道",
      vi: "Người lập kế hoạch quản lý, người quản lý tài chính, kế toán, nhà phân tích quản lý, giám đốc tài chính",
      id: "Perencana manajemen, manajer keuangan, akuntan, analis manajemen, jalur CFO"
    },
    growthPath: {
      ko: "공인회계사(CPA)·CFA 자격증 + ERP(SAP·Oracle) 능숙도",
      en: "Certified public accountant (CPA)/CFA certification + ERP (SAP/Oracle) proficiency",
      ja: "公認会計士(CPA)・CFA資格証 + ERP(SAP・Oracle) 熟練度",
      'zh-CN': "注册会计师（CPA）/CFA认证+ERP（SAP/Oracle）熟练程度",
      'zh-TW': "註冊會計師（CPA）/CFA認證+ERP（SAP/Oracle）熟練程度",
      vi: "Chứng chỉ kế toán công chứng (CPA)/CFA + thành thạo ERP (SAP/Oracle)",
      id: "Sertifikasi akuntan publik bersertifikat (CPA)/CFA + kemahiran ERP (SAP/Oracle)"
    },
    caution: {
      ko: "디지털 전환으로 데이터 분석 능력이 기본 요건이 되고 있음",
      en: "With digital transformation, data analysis capabilities are becoming a basic requirement.",
      ja: "デジタル変換でデータ分析能力が基本要件となっている",
      'zh-CN': "随着数字化转型，数据分析能力正在成为基本要求。",
      'zh-TW': "隨著數位轉型，數據分析能力正在成為基本要求。",
      vi: "Với chuyển đổi kỹ thuật số, khả năng phân tích dữ liệu đang trở thành một yêu cầu cơ bản.",
      id: "Dengan transformasi digital, kemampuan analisis data menjadi kebutuhan mendasar."
    },
    firstCareer: {
      ko: "대기업 경영지원·회계법인 인턴·스타트업 재무팀",
      en: "Large-company business support · accounting-firm intern · startup finance team",
      ja: "大企業経営支援・会計法人インターン・スタートアップ財務チーム",
      'zh-CN': "为大企业、会计师事务所实习生、初创公司财务团队提供管理支持",
      'zh-TW': "為大企業、會計師事務所實習生、新創公司財務團隊提供管理支持",
      vi: "Hỗ trợ quản lý cho các tập đoàn lớn, thực tập sinh tại các công ty kế toán và nhóm tài chính tại các công ty khởi nghiệp",
      id: "Dukungan manajemen untuk perusahaan besar, magang di kantor akuntan, dan tim keuangan di perusahaan rintisan"
    },
    shareMessage: {
      ko: "직업 적성 AI 분석: 경영·재무 관리자 📊 숫자로 조직을 운영하는 유형... 경영기획·재무 방향이래 → 너는 어떤 직군 나왔어?",
      en: "Career Aptitude AI: Management & Finance Lead 📊 Steers orgs with numbers and clarity… Planning·finance → What career type did you get?",
      ja: "職業適性AI：経営・財務マネージャー 📊 数字で組織を回すタイプ…経営企画・財務向きだって → あなたはどの職群？",
      'zh-CN': "职业适性AI：经营·财务管理 📊 用数字驾驭组织的类型…适合经营企划·财务 → 你是什么职群？",
      'zh-TW': "職業適性AI：經營·財務管理 📊 用數字駕馭組織的類型…適合經營企劃·財務 → 你是什麼職群？",
      vi: "AI năng lực nghề: Quản lý điều hành·tài chính 📊 Kiểu người vận hành tổ chức bằng số liệu… Hướng planning·finance → Bạn ra nhóm nghề nào?",
      id: "AI Bakat Karier: Manajer Manajemen & Keuangan 📊 Tipe yang menjalankan organisasi dengan angka… Arah planning·finance → Kamu dapat tipe karier apa?"
    },
  },
  {
    type: 'A-SD',
    emoji: '📈',
    title: {
      ko: "금융·투자 전략가",
      en: "Finance & Investment Strategist",
      ja: "金融・投資ストラテジスト",
      'zh-CN': "金融与投资策略家",
      'zh-TW': "金融與投資策略家",
      vi: "Chiến lược gia tài chính & đầu tư",
      id: "Ahli Strategi Keuangan & Investasi"
    },
    shortDescription: {
      ko: "당신에게 맞는 직군: 펀드매니저·투자분석가·IB·핀테크전략가·FP",
      en: "Best-fit careers: Fund management · investment analysis · investment banking · fintech strategy · financial planning",
      ja: "向いている職群：ファンドマネージャー・投資アナリスト・IB・フィンテック戦略・FP",
      'zh-CN': "适合你的职群：基金管理·投资分析·投行·金融科技战略·理财规划",
      'zh-TW': "適合你的職群：基金管理·投資分析·投行·金融科技策略·理財規劃",
      vi: "Nhóm nghề phù hợp: Quản lý quỹ · phân tích đầu tư · ngân hàng đầu tư · chiến lược fintech · hoạch định tài chính",
      id: "Karier yang cocok: Manajemen dana · analisis investasi · perbankan investasi · strategi fintech · perencanaan keuangan"
    },
    description: {
      ko: "시장 데이터를 분석하고 빠르게 변화하는 금융 환경에서 기회를 포착하는 것을 즐기는 유형입니다. 리스크와 수익을 동시에 계산하는 것이 자연스럽습니다.",
      en: "You love analyzing market data and catching opportunities in fast-moving finance. Calculating risk and return side by side feels completely natural.",
      ja: "市場データを分析し、変化の速い金融環境で機会を捉えるのが楽しいタイプです。リスクとリターンを同時に計算することが自然です。",
      'zh-CN': "你享受分析市场数据，并在快速变化的金融环境中抓机会。一边算风险、一边算回报，对你来说很自然。",
      'zh-TW': "你享受分析市場數據，並在快速變化的金融環境中抓機會。一邊算風險、一邊算報酬，對你來說很自然。",
      vi: "Bạn thích phân tích dữ liệu thị trường và bắt cơ hội trong tài chính biến động nhanh. Tính rủi ro và lợi nhuận song song là chuyện tự nhiên.",
      id: "Kamu senang menganalisis data pasar dan menangkap peluang di lingkungan finance yang cepat bergerak. Menghitung risiko dan return bersamaan terasa alami."
    },
    coreCompetencies: {
      ko: "재무모델링,시장분석,포트폴리오 관리,리스크 관리,Bloomberg",
      en: "Financial modeling, market analysis, portfolio management, risk management, Bloomberg",
      ja: "財務モデリング,市場分析,ポートフォリオ管理,リスク管理,Bloomberg",
      'zh-CN': "金融建模,市场分析,投资组合管理,风险管理,彭博社",
      'zh-TW': "金融建模,市場分析,投資組合管理,風險管理,彭博社",
      vi: "Mô hình tài chính, phân tích thị trường, quản lý danh mục đầu tư, quản lý rủi ro, Bloomberg",
      id: "Pemodelan keuangan, analisis pasar, manajemen portofolio, manajemen risiko, Bloomberg"
    },
    matchingJobs: {
      ko: "펀드매니저·IB뱅커·투자분석가·VC심사역·핀테크전략가",
      en: "Fund manager, IB banker, investment analyst, VC associate, fintech strategist",
      ja: "ファンドマネージャー・IBバンカー・投資分析家・VC投資担当・フィンテック戦略家",
      'zh-CN': "基金经理、IB银行家、投资分析师、风险投资评论家、金融科技策略师",
      'zh-TW': "基金經理人、IB銀行家、投資分析師、創投評論家、金融科技策略師",
      vi: "Nhà quản lý quỹ, nhân viên ngân hàng IB, nhà phân tích đầu tư, nhà đánh giá VC, chiến lược gia fintech",
      id: "Manajer dana, bankir IB, analis investasi, peninjau VC, ahli strategi fintech"
    },
    growthPath: {
      ko: "CFA 자격증 + 금융공학 석사 + 증권사·운용사 인턴 경험",
      en: "CFA certification + Master's degree in financial engineering + Internship experience at a securities firm or investment management company",
      ja: "CFA資格証+金融工学修士+証券会社・運用会社インターン経験",
      'zh-CN': "CFA认证+金融工程硕士+证券公司或投资管理公司实习经历",
      'zh-TW': "CFA認證+金融工程碩士+證券公司或投資管理公司實習經歷",
      vi: "Chứng chỉ CFA + Thạc sĩ kỹ thuật tài chính + Kinh nghiệm thực tập tại công ty chứng khoán hoặc công ty quản lý đầu tư",
      id: "Sertifikasi CFA + Gelar Master di bidang teknik keuangan + Pengalaman magang di perusahaan sekuritas atau perusahaan manajemen investasi"
    },
    caution: {
      ko: "진입 장벽이 높은 분야. 학벌·자격증·인턴 경험 3가지 모두 필요",
      en: "A field with high barriers to entry. Education, certification, and internship experience are all required.",
      ja: "参入障壁が高い分野。学歴・資格証・インターン経験3つすべて必要",
      'zh-CN': "进入壁垒较高的领域。教育、认证和实习经验都是必需的。",
      'zh-TW': "進入壁壘較高的領域。教育、認證和實習經驗都是必要的。",
      vi: "Một lĩnh vực có rào cản gia nhập cao. Giáo dục, chứng nhận và kinh nghiệm thực tập đều được yêu cầu.",
      id: "Bidang dengan hambatan masuk yang tinggi. Pendidikan, sertifikasi, dan pengalaman magang semuanya diperlukan."
    },
    firstCareer: {
      ko: "증권사 리서치 인턴·핀테크 스타트업·자산운용사 보조",
      en: "Securities company research intern, fintech startup, asset management assistant",
      ja: "証券会社リサーチインターン・フィンテックスタートアップ・資産運用会社補助",
      'zh-CN': "证券公司研究实习生、金融科技创业公司、资产管理助理",
      'zh-TW': "證券公司研究實習生、金融科技新創公司、資產管理助理",
      vi: "Thực tập sinh nghiên cứu công ty chứng khoán, startup fintech, trợ lý quản lý tài sản",
      id: "Magang peneliti perusahaan sekuritas, startup fintech, asisten manajemen aset"
    },
    shareMessage: {
      ko: "직업 적성 AI 분석: 금융·투자 전략가 📈 데이터로 시장 기회 포착하는 유형... 펀드매니저·IB 방향이래 → 너는 어떤 직군 나왔어?",
      en: "Career Aptitude AI: Finance & Investment Strategist 📈 Spots market opportunities with data… Fund manager·IB → What career type did you get?",
      ja: "職業適性AI：金融・投資ストラテジスト 📈 データで市場機会を掴むタイプ…ファンドマネ・IB向きだって → あなたはどの職群？",
      'zh-CN': "职业适性AI：金融·投资策略家 📈 用数据捕捉市场机会的类型…适合基金经理·IB → 你是什么职群？",
      'zh-TW': "職業適性AI：金融·投資策略家 📈 用數據捕捉市場機會的類型…適合基金經理·IB → 你是什麼職群？",
      vi: "AI năng lực nghề: Chiến lược gia tài chính·đầu tư 📈 Kiểu người nắm cơ hội thị trường bằng data… Hướng fund manager·IB → Bạn ra nhóm nghề nào?",
      id: "AI Bakat Karier: Ahli Strategi Finance & Investasi 📈 Tipe yang menangkap peluang pasar dengan data… Arah fund manager·IB → Kamu dapat tipe karier apa?"
    },
  },
  {
    type: 'A-US',
    emoji: '🔬',
    title: {
      ko: "과학·의학 연구자",
      en: "Science & Medical Researcher",
      ja: "科学・医学研究者",
      'zh-CN': "科学与医学研究者",
      'zh-TW': "科學與醫學研究者",
      vi: "Nhà nghiên cứu khoa học & y học",
      id: "Peneliti Sains & Medis"
    },
    shortDescription: {
      ko: "당신에게 맞는 직군: 연구원·임상의·약학자·생명과학자·환경과학자",
      en: "Best-fit careers: Research · clinical practice · pharmacy · life science · environmental science",
      ja: "向いている職群：研究員・臨床医・薬学者・生命科学者・環境科学者",
      'zh-CN': "适合你的职群：研究员·临床医生·药学家·生命科学家·环境科学家",
      'zh-TW': "適合你的職群：研究員·臨床醫師·藥學家·生命科學家·環境科學家",
      vi: "Nhóm nghề phù hợp: Nghiên cứu · lâm sàng · dược học · khoa học sự sống · khoa học môi trường",
      id: "Karier yang cocok: Penelitian · klinis · farmasi · ilmu hayati · ilmu lingkungan"
    },
    description: {
      ko: "깊은 분석력과 안정적인 연구 환경에서 진리를 탐구하는 것에 보람을 찾는 유형입니다. 오랜 시간 한 분야를 파고드는 것이 자연스럽습니다.",
      en: "You find meaning in deep analysis and seeking truth inside a stable research environment. Spending years going deep in one field feels right to you.",
      ja: "深い分析力を活かし、安定した研究環境で真理を探ることにやりがいを感じるタイプです。長い時間をかけて一つの分野を掘り下げるのが自然です。",
      'zh-CN': "你在稳定的研究环境里，靠深度分析去追问真相会特别有成就感。长时间深耕一个领域，对你来说很自然。",
      'zh-TW': "你在穩定的研究環境裡，靠深度分析去追問真相會特別有成就感。長時間深耕一個領域，對你來說很自然。",
      vi: "Bạn thấy ý nghĩa ở phân tích sâu và đi tìm chân lý trong môi trường nghiên cứu ổn định. Dành nhiều năm đào một lĩnh vực là điều hợp với bạn.",
      id: "Kamu menemukan makna dalam analisis mendalam dan mencari kebenaran di lingkungan riset yang stabil. Bertahun-tahun menyelami satu bidang terasa tepat."
    },
    coreCompetencies: {
      ko: "실험 설계,논문 작성,통계 분석,연구윤리,학술 데이터베이스",
      en: "Experimental design, paper writing, statistical analysis, research ethics, academic database",
      ja: "実験設計,論文作成,統計分析,研究倫理,学術データベース",
      'zh-CN': "实验设计,论文写作,统计分析,研究伦理,学术数据库",
      'zh-TW': "實驗設計,論文寫作,統計分析,研究倫理,學術資料庫",
      vi: "Thiết kế thí nghiệm, viết báo, phân tích thống kê, đạo đức nghiên cứu, cơ sở dữ liệu học thuật",
      id: "Desain eksperimental, penulisan makalah, analisis statistik, etika penelitian, database akademik"
    },
    matchingJobs: {
      ko: "이공계 연구원·임상의·약사·환경과학자·공공연구기관",
      en: "Science and engineering researchers, clinicians, pharmacists, environmental scientists, public research institutions",
      ja: "理工系研究員・臨床医・薬剤師・環境科学者・公共研究機関",
      'zh-CN': "科学和工程研究人员、临床医生、药剂师、环境科学家、公共研究机构",
      'zh-TW': "科學與工程研究人員、臨床醫生、藥劑師、環境科學家、公共研究機構",
      vi: "Các nhà nghiên cứu khoa học và kỹ thuật, bác sĩ lâm sàng, dược sĩ, nhà khoa học môi trường, tổ chức nghiên cứu công",
      id: "Peneliti sains dan teknik, dokter, apoteker, ilmuwan lingkungan, lembaga penelitian publik"
    },
    growthPath: {
      ko: "석사·박사 학위 + SCI 논문 + 국책연구소·기업연구소 연계",
      en: "Master's/Ph.D. degree + SCI thesis + National research institute/corporate research institute linkage",
      ja: "修士・博士学位＋SCI論文＋国策研究所・企業研究所連携",
      'zh-CN': "硕士/博士学位+SCI论文+国家研究院/企业研究院联动",
      'zh-TW': "碩士/博士學位+SCI論文+國家研究院/企業研究院聯動",
      vi: "Thạc sĩ/Tiến sĩ. bằng cấp + Luận văn SCI + Liên kết viện nghiên cứu quốc gia/doanh nghiệp",
      id: "Magister/Ph.D. gelar + tesis SCI + hubungan lembaga penelitian nasional/lembaga penelitian perusahaan"
    },
    caution: {
      ko: "긴 교육 기간 대비 처우 개선이 과제. 산업계 연구소 진출도 고려",
      en: "Pay and conditions often lag behind long training years. Consider entering industrial research institutes",
      ja: "長い教育期間に見合う処遇改善が課題。産業界研究所への進出も考慮",
      'zh-CN': "相较漫长的培养周期，待遇改善仍是课题。考虑进入产业研究院",
      'zh-TW': "相較漫長的培養週期，待遇改善仍是課題。考慮進入產業研究院",
      vi: "Thách thức là cải thiện đãi ngộ tương xứng với thời gian đào tạo dài. Cân nhắc vào viện nghiên cứu công nghiệp",
      id: "Tantangannya adalah meningkatkan kesejahteraan sebanding dengan masa pendidikan yang panjang. Pertimbangkan untuk memasuki lembaga penelitian industri"
    },
    firstCareer: {
      ko: "대학원 진학·연구소 인턴십·기업 R&D 연구보조",
      en: "Graduate school admission, research institute internship, corporate R&D research assistance",
      ja: "大学院進学・研究所インターンシップ・企業研究開発研究支援",
      'zh-CN': "研究生入学、研究所实习、企业R&D研究协助",
      'zh-TW': "研究生入學、研究所實習、企業R&D研究協助",
      vi: "Tuyển sinh sau đại học, thực tập tại viện nghiên cứu, hỗ trợ nghiên cứu R&D của doanh nghiệp",
      id: "Penerimaan sekolah pascasarjana, magang lembaga penelitian, bantuan penelitian R&D perusahaan"
    },
    shareMessage: {
      ko: "직업 적성 AI 분석: 과학·의학 연구자 🔬 깊이 있는 연구에 보람 찾는 유형... 연구원·임상 방향이래 → 너는 어떤 직군 나왔어?",
      en: "Career Aptitude AI: Science & Medical Researcher 🔬 Finds meaning in deep research… Research·clinical → What career type did you get?",
      ja: "職業適性AI：科学・医学研究者 🔬 深い研究にやりがいを感じるタイプ…研究員・臨床向きだって → あなたはどの職群？",
      'zh-CN': "职业适性AI：科学·医学研究者 🔬 在深度研究中找成就感的类型…适合科研·临床 → 你是什么职群？",
      'zh-TW': "職業適性AI：科學·醫學研究者 🔬 在深度研究中找成就感的類型…適合科研·臨床 → 你是什麼職群？",
      vi: "AI năng lực nghề: Nhà nghiên cứu khoa học·y học 🔬 Kiểu người thấy ý nghĩa ở nghiên cứu sâu… Hướng nghiên cứu·lâm sàng → Bạn ra nhóm nghề nào?",
      id: "AI Bakat Karier: Peneliti Sains & Medis 🔬 Tipe yang mendapat makna dari riset mendalam… Arah peneliti·klinis → Kamu dapat tipe karier apa?"
    },
  },
  {
    type: 'A-UD',
    emoji: '🤖',
    title: {
      ko: "데이터·AI 사이언티스트",
      en: "Data & AI Scientist",
      ja: "データ・AIサイエンティスト",
      'zh-CN': "数据与AI科学家",
      'zh-TW': "數據與AI科學家",
      vi: "Nhà khoa học dữ liệu & AI",
      id: "Data & AI Scientist"
    },
    shortDescription: {
      ko: "당신에게 맞는 직군: 데이터사이언티스트·ML엔지니어·AI연구자·통계분석가",
      en: "Best-fit careers: Data science · ML engineering · AI research · statistical analysis",
      ja: "向いている職群：データサイエンティスト・MLエンジニア・AI研究者・統計アナリスト",
      'zh-CN': "适合你的职群：数据科学·机器学习工程·AI研究·统计分析",
      'zh-TW': "適合你的職群：資料科學·機器學習工程·AI研究·統計分析",
      vi: "Nhóm nghề phù hợp: Khoa học dữ liệu · kỹ sư ML · nghiên cứu AI · phân tích thống kê",
      id: "Karier yang cocok: Sains data · rekayasa ML · riset AI · analisis statistik"
    },
    description: {
      ko: "데이터에서 패턴을 찾고 새로운 알고리즘과 모델을 실험하는 것이 자연스러운 유형입니다. 아무도 풀지 못한 문제를 데이터로 접근하는 것에서 가장 큰 보람을 느낍니다.",
      en: "Finding patterns in data and experimenting with new algorithms or models comes naturally. Using data to tackle problems no one has cracked yet is your biggest thrill.",
      ja: "データからパターンを見つけ、新しいアルゴリズムやモデルを試すことが自然なタイプです。誰も解けなかった課題にデータで挑むことに、いちばんのやりがいを感じます。",
      'zh-CN': "从数据里找规律、试验新算法和新模型，对你来说很自然。用数据去啃还没人啃开的问题，会让你最兴奋。",
      'zh-TW': "從資料裡找規律、試驗新演算法和新模型，對你來說很自然。用資料去啃還沒人啃開的問題，會讓你最興奮。",
      vi: "Tìm pattern trong dữ liệu và thử thuật toán hay mô hình mới là chuyện tự nhiên. Dùng data để gặm bài toán chưa ai giải được khiến bạn thấy đã nhất.",
      id: "Menemukan pola dalam data dan bereksperimen dengan algoritma atau model baru adalah natumu. Menggunakan data untuk menjawab masalah yang belum terpecahkan adalah thrill terbesar."
    },
    coreCompetencies: {
      ko: "Python,R,SQL,머신러닝,딥러닝,통계,데이터 시각화",
      en: "Python, R, SQL, machine learning, deep learning, statistics, data visualization",
      ja: "Python,R,SQL,機械学習,ディープラーニング,統計,データ可視化",
      'zh-CN': "Python,R,SQL,机器学习,深度学习,统计,数据可视化",
      'zh-TW': "Python,R,SQL,機器學習,深度學習,統計,資料視覺化",
      vi: "Python, R, SQL, học máy, học sâu, thống kê, trực quan hóa dữ liệu",
      id: "Python, R, SQL, pembelajaran mesin, pembelajaran mendalam, statistik, visualisasi data"
    },
    matchingJobs: {
      ko: "데이터사이언티스트·ML엔지니어·AI연구자·데이터분석가·퀀트",
      en: "Data scientist, ML engineer, AI researcher, data analyst, quant",
      ja: "データサイエンティスト・MLエンジニア・AI研究者・データ分析家・クオンツ",
      'zh-CN': "数据科学家、机器学习工程师、人工智能研究员、数据分析师、量化专家",
      'zh-TW': "資料科學家、機器學習工程師、人工智慧研究員、資料分析師、量化專家",
      vi: "Nhà khoa học dữ liệu, kỹ sư ML, nhà nghiên cứu AI, nhà phân tích dữ liệu, định lượng",
      id: "Ilmuwan data, insinyur ML, peneliti AI, analis data, kuant"
    },
    growthPath: {
      ko: "Kaggle 경진대회 + GitHub 프로젝트 포트폴리오 + 논문 구현 경험",
      en: "Kaggle competition + GitHub project portfolio + thesis implementation experience",
      ja: "Kaggleコンテスト+ GitHubプロジェクトポートフォリオ+論文実装経験",
      'zh-CN': "Kaggle竞赛+GitHub项目组合+论文实施经验",
      'zh-TW': "Kaggle競賽+GitHub專案組合+論文實作經驗",
      vi: "Cuộc thi Kaggle + danh mục dự án GitHub + kinh nghiệm thực hiện luận án",
      id: "Kompetisi Kaggle + portofolio proyek GitHub + pengalaman implementasi tesis"
    },
    caution: {
      ko: "AI 기술 변화 속도가 매우 빠름. 트렌드 논문 꾸준히 읽는 루틴 필수",
      en: "AI technology changes very quickly. A routine of consistently reading trend papers is essential.",
      ja: "AI技術の変化速度が非常に速い。トレンド論文着実に読むルーチン必須",
      'zh-CN': "人工智能技术变化非常快。坚持阅读趋势论文的习惯是至关重要的。",
      'zh-TW': "人工智慧技術變化非常快。堅持閱讀趨勢論文的習慣是至關重要的。",
      vi: "Công nghệ AI thay đổi rất nhanh. Một thói quen đọc các bài báo về xu hướng một cách nhất quán là điều cần thiết.",
      id: "Teknologi AI berubah dengan sangat cepat. Rutinitas membaca makalah tren secara konsisten sangatlah penting."
    },
    firstCareer: {
      ko: "데이터 부트캠프·IT 기업 데이터 인턴·AI 스타트업",
      en: "Data boot camp, IT company data intern, AI startup",
      ja: "データブートキャンプ・IT企業データインターン・AIスタートアップ",
      'zh-CN': "数据训练营、IT公司数据实习生、AI初创公司",
      'zh-TW': "資料訓練營、IT公司資料實習生、AI新創公司",
      vi: "Chương trình đào tạo dữ liệu, thực tập sinh dữ liệu công ty CNTT, khởi nghiệp AI",
      id: "Kamp pelatihan data, magang data perusahaan IT, startup AI"
    },
    shareMessage: {
      ko: "직업 적성 AI 분석: 데이터·AI 사이언티스트 🤖 데이터에서 패턴 찾는 유형... 이거 요즘 제일 핫한 직군 ㅋㅋ → 너는 어떤 직군 나왔어?",
      en: "Career Aptitude AI: Data & AI Scientist 🤖 Finds patterns in data — one of the hottest career paths rn → What career type did you get?",
      ja: "職業適性AI：データ・AIサイエンティスト 🤖 データからパターンを見つけるタイプ…今いちばんアツい職群かも → あなたはどの職群？",
      'zh-CN': "职业适性AI：数据·AI科学家 🤖 从数据找规律的类型…现在超热门的职群哈哈 → 你是什么职群？",
      'zh-TW': "職業適性AI：數據·AI科學家 🤖 從數據找規律的類型…現在超熱門的職群哈哈 → 你是什麼職群？",
      vi: "AI năng lực nghề: Nhà khoa học dữ liệu·AI 🤖 Kiểu người tìm pattern từ data… Nhóm nghề đang siêu hot luôn → Bạn ra nhóm nghề nào?",
      id: "AI Bakat Karier: Data & AI Scientist 🤖 Tipe yang menemukan pola dari data… Salah satu jalur karier terpanas sekarang → Kamu dapat tipe karier apa?"
    },
  },
];


export function calculatePhase3CareerAptitudeAi16typesResult(answers: string[]): string {
  const axis1Tags = ['P', 'C', 'T', 'A'] as const;
  const axis2Tags = ['SS', 'SD', 'US', 'UD'] as const;

  const pickWinner = (counts: Record<string, number>, lastChoices: string[]): string => {
    let max = -1;
    for (const v of Object.values(counts)) {
      if (v > max) max = v;
    }
    const tied = Object.keys(counts).filter((k) => counts[k] === max);
    if (tied.length === 1) return tied[0];
    for (let i = lastChoices.length - 1; i >= 0; i--) {
      if (tied.includes(lastChoices[i])) return lastChoices[i];
    }
    return tied[0];
  };

  const axis1Counts: Record<string, number> = { P: 0, C: 0, T: 0, A: 0 };
  const axis2Counts: Record<string, number> = { SS: 0, SD: 0, US: 0, UD: 0 };
  const axis1Choices: string[] = [];
  const axis2Choices: string[] = [];

  for (let i = 0; i < 6; i++) {
    const tag = answers[i];
    if (tag && (axis1Tags as readonly string[]).includes(tag)) {
      axis1Counts[tag] += 1;
      axis1Choices.push(tag);
    }
  }
  for (let i = 6; i < 12; i++) {
    const tag = answers[i];
    if (tag && (axis2Tags as readonly string[]).includes(tag)) {
      axis2Counts[tag] += 1;
      axis2Choices.push(tag);
    }
  }

  const axis1 = pickWinner(axis1Counts, axis1Choices);
  const axis2 = pickWinner(axis2Counts, axis2Choices);
  return `${axis1}-${axis2}`;
}
