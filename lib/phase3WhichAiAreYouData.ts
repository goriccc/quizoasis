/** 나는 어떤 AI를 닮았을까? — 12문항, A=0 B=1 C=2 D=3, 총점 0~36 */

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

export interface Phase3WhichAiAreYouQuestion {
  id: number;
  question: Record<string, string>;
  options: { text: Record<string, string>; score: number }[];
}

export interface Phase3WhichAiAreYouResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  aiSubtype: Record<string, string>;
  coreStrength: Record<string, string>;
  caution: Record<string, string>;
  goodMatch: Record<string, string>;
  badMatch: Record<string, string>;
  aiShareName: Record<string, string>;
}

export function calculatePhase3WhichAiAreYouResult(scores: number[]): string {
  const total = scores.reduce((a, b) => a + (b ?? 0), 0);
  if (total <= 5) return 'Type1';
  if (total <= 11) return 'Type2';
  if (total <= 19) return 'Type3';
  if (total <= 27) return 'Type4';
  if (total <= 33) return 'Type5';
  return 'Type6';
}

export const phase3WhichAiAreYouQuestions: Phase3WhichAiAreYouQuestion[] = [
  {
    id: 1,
    question: L(
      '처음 만난 사람과 대화할 때 나는?',
      'When talking to someone I just met, I tend to…',
      '初対面の人と話すとき、私は…',
      '和刚认识的人聊天时，我通常会…',
      '和剛認識的人聊天時，我通常會…',
      'Khi nói chuyện với người mới quen, tôi thường…',
      'Saat ngobrol dengan orang yang baru dikenal, aku cenderung…'
    ),
    options: [
      {
        text: L(
          '상대가 편하게 느낄 수 있도록 친근하고 유쾌하게 대화한다',
          'Chat in a friendly, upbeat way so they feel at ease',
          '相手が話しやすいよう、親しみやすく明るく話す',
          '聊得亲切、轻松，让对方感到自在',
          '聊得親切、輕鬆，讓對方感到自在',
          'Trò chuyện thân thiện, vui vẻ để đối phương cảm thấy thoải mái',
          'Ngobrol ramah dan ceria supaya lawan bicara merasa nyaman'
        ),
        score: 0,
      },
      {
        text: L(
          '상대의 말을 충분히 듣고 신중하게 공감하며 반응한다',
          'Listen fully, then respond with careful empathy',
          '相手の話を最後まで聞き、慎重に共感して返す',
          '认真听完，再谨慎地共情回应',
          '認真聽完，再謹慎地共情回應',
          'Nghe hết rồi mới phản hồi, đồng cảm một cách cẩn trọng',
          'Mendengarkan sampai habis, lalu merespons dengan empati yang hati-hati'
        ),
        score: 1,
      },
      {
        text: L(
          '핵심만 빠르게 파악해서 필요한 말을 효율적으로 한다',
          'Grasp the point fast and say only what’s needed',
          '要点を素早く掴み、必要なことだけ効率よく言う',
          '快速抓住重点，高效说出必要的话',
          '快速抓住重點，高效說出必要的話',
          'Nắm nhanh trọng tâm và nói đúng điều cần thiết',
          'Cepat memahami intinya dan menyampaikan yang perlu dengan efisien'
        ),
        score: 2,
      },
      {
        text: L(
          '나만의 독특한 방식으로 대화를 이끌며 상대를 놀라게 한다',
          'Lead the chat in my own quirky way and surprise them',
          '自分なりのユニークな進め方で会話をリードし、相手を驚かせる',
          '用我独特的方式带对话，让对方眼前一亮',
          '用我獨特的方式帶對話，讓對方眼前一亮',
          'Dẫn cuộc trò chuyện theo cách riêng khiến đối phương bất ngờ',
          'Memimpin obrolan dengan gaya unikku sendiri dan membuat mereka terkejut'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 2,
    question: L(
      '모르는 문제나 어려운 상황에 부딪혔을 때?',
      'When you hit an unknown problem or a tough situation?',
      '分からない問題や難しい状況にぶつかったとき？',
      '遇到不懂的难题或困难处境时？',
      '遇到不懂的難題或困難處境時？',
      'Khi gặp vấn đề chưa biết hoặc tình huống khó?',
      'Saat menghadapi masalah yang belum dipahami atau situasi sulit?'
    ),
    options: [
      {
        text: L(
          '일단 아는 것부터 빠르게 시도해보고 안 되면 방법을 바꾼다',
          'Try what I know quickly; if it fails, switch approaches',
          'まず分かるところから素早く試し、ダメならやり方を変える',
          '先从会的快速试，不行就换方法',
          '先從會的快速試，不行就換方法',
          'Thử nhanh phần đã biết, không được thì đổi cách',
          'Coba cepat yang sudah tahu, kalau gagal ganti pendekatan'
        ),
        score: 0,
      },
      {
        text: L(
          '충분히 생각하고 가장 좋은 방법을 찾은 후 실행한다',
          'Think it through, pick the best way, then act',
          '十分に考え、最善の方法を見つけてから動く',
          '想充分了，找到最好的方法再行动',
          '想充分了，找到最好的方法再行動',
          'Suy nghĩ kỹ, chọn cách tốt nhất rồi mới làm',
          'Berpikir matang, pilih cara terbaik, baru bertindak'
        ),
        score: 1,
      },
      {
        text: L(
          '여러 정보를 빠르게 수집해서 최적의 해답을 도출한다',
          'Gather info fast and derive the best answer',
          '情報を素早く集め、最適な答えを導き出す',
          '快速收集信息，推出最优解',
          '快速收集資訊，推出最優解',
          'Thu thập thông tin nhanh và tìm lời giải tối ưu',
          'Mengumpulkan info cepat dan menemukan jawaban terbaik'
        ),
        score: 2,
      },
      {
        text: L(
          '기존 방식 말고 완전히 새로운 접근법을 시도한다',
          'Skip the usual playbook and try something totally new',
          '従来のやり方は捨てて、まったく新しいアプローチを試す',
          '抛开老办法，尝试全新做法',
          '拋開老辦法，嘗試全新做法',
          'Bỏ cách cũ, thử cách tiếp cận hoàn toàn mới',
          'Mengesampingkan cara lama dan mencoba pendekatan yang benar-benar baru'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 3,
    question: L(
      '친구가 고민을 털어놓을 때 나의 반응은?',
      'When a friend opens up about worries, I…',
      '友だちが悩みを打ち明けたとき、私の反応は？',
      '朋友倾诉烦恼时，我的反应是？',
      '朋友傾訴煩惱時，我的反應是？',
      'Khi bạn bè tâm sự chuyện buồn, tôi…',
      'Saat teman curhat masalah, reaksiku…'
    ),
    options: [
      {
        text: L(
          '일단 "맞아, 맞아!" 하고 신나게 공감하며 분위기를 풀어준다',
          'Go “Yes, yes!” and hype the vibe with excited empathy',
          'まず「そうそう！」と盛り上げて共感し、空気を和ませる',
          '先“对对对！”热情共情，把气氛带轻松',
          '先「對對對！」熱情共情，把氣氛帶輕鬆',
          'Nói “đúng đúng!” và đồng cảm nhiệt tình để không khí nhẹ nhàng hơn',
          'Mulai dengan “iya iya!” dan empati supaya suasana lebih ringan'
        ),
        score: 0,
      },
      {
        text: L(
          '끝까지 조용히 듣고, 감정을 충분히 헤아린 후 조심스럽게 말한다',
          'Listen quietly to the end, then speak gently after I get their feelings',
          '最後まで静かに聞き、気持ちを十分に汲んでから慎重に言う',
          '安静听完，充分体会情绪后再小心开口',
          '安靜聽完，充分體會情緒後再小心開口',
          'Nghe im lặng đến cuối, hiểu cảm xúc rồi mới nói nhẹ nhàng',
          'Mendengarkan sampai habis, memahami perasaan, lalu berbicara hati-hati'
        ),
        score: 1,
      },
      {
        text: L(
          '고민의 핵심 원인을 파악하고 실질적인 해결책을 제시한다',
          'Pinpoint the core issue and suggest practical fixes',
          '悩みの核心を突き、具体的な解決策を出す',
          '抓住问题核心，给出实际可行的解决办法',
          '抓住問題核心，給出實際可行的解決辦法',
          'Tìm gốc rễ vấn đề và đưa hướng xử lý cụ thể',
          'Menemukan akar masalah dan memberi solusi praktis'
        ),
        score: 2,
      },
      {
        text: L(
          '아무도 생각 못 한 새로운 시각으로 문제를 재해석해 준다',
          'Reframe the problem from an angle nobody else thought of',
          '誰も思いつかない視点で問題を捉え直す',
          '用别人想不到的新视角帮对方重新看问题',
          '用別人想不到的新視角幫對方重新看問題',
          'Giúp nhìn lại vấn đề từ góc độ mới mà ít ai nghĩ tới',
          'Membingkai ulang masalah dari sudut pandang yang jarang orang pikirkan'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 4,
    question: L(
      '내가 가장 잘한다고 생각하는 것은?',
      'What do you think you’re best at?',
      '自分が一番得意だと思うことは？',
      '你觉得自己最擅长什么？',
      '你覺得自己最擅長什麼？',
      'Bạn nghĩ mình giỏi nhất điều gì?',
      'Menurutmu hal apa yang paling kamu kuasai?'
    ),
    options: [
      {
        text: L(
          '어떤 분위기에서도 사람들과 잘 어울리고 대화를 이어가는 것',
          'Blending in and keeping conversation flowing in any mood',
          'どんな空気でも人と打ち解け、会話を続けられること',
          '任何气氛下都能和人打成一片、把话聊下去',
          '任何氣氛下都能和人打成一片、把話聊下去',
          'Trong mọi không khí vẫn hòa nhập và duy trì cuộc trò chuyện',
          'Di suasana apa pun bisa menyatu dan melanjutkan obrolan'
        ),
        score: 0,
      },
      {
        text: L(
          '복잡한 상황에서도 감정과 논리의 균형을 잡는 것',
          'Balancing emotion and logic even when things get messy',
          '複雑な状況でも感情と論理のバランスを取れること',
          '在复杂局面里也能平衡感性与理性',
          '在複雜局面裡也能平衡感性與理性',
          'Giữ cân bằng cảm xúc và logic kể cả khi phức tạp',
          'Menjaga keseimbangan emosi dan logika meski situasi rumit'
        ),
        score: 1,
      },
      {
        text: L(
          '빠르게 정보를 처리하고 여러 가지를 동시에 잘 해내는 것',
          'Processing info fast and juggling multiple things well',
          '情報を素早く処理し、複数のことを同時にこなせること',
          '快速处理信息，同时把多件事做好',
          '快速處理資訊，同時把多件事做好',
          'Xử lý thông tin nhanh và làm tốt nhiều việc cùng lúc',
          'Memproses info cepat dan menangani banyak hal sekaligus dengan baik'
        ),
        score: 2,
      },
      {
        text: L(
          '기존 틀에 얽매이지 않고 창의적으로 생각하는 것',
          'Thinking creatively without being boxed in',
          '型にはまらず創造的に考えられること',
          '不被条条框框限制，有创意地思考',
          '不被條條框框限制，有創意地思考',
          'Suy nghĩ sáng tạo mà không bị khuôn mẫu giới hạn',
          'Berpikir kreatif tanpa terjebak pola lama'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 5,
    question: L(
      '일을 할 때 나의 스타일은?',
      'What’s your work style?',
      '仕事をするときの私のスタイルは？',
      '你做事的风格是？',
      '你做事的風格是？',
      'Phong cách làm việc của bạn là gì?',
      'Gaya kerjamu seperti apa?'
    ),
    options: [
      {
        text: L(
          '일단 시작하고 보는 편. 하면서 맞춰간다',
          'Start first, figure it out as I go',
          'とりあえず始めて、やりながら調整する',
          '先干起来，边做边调整',
          '先幹起來，邊做邊調整',
          'Cứ bắt đầu trước, chỉnh dần trong lúc làm',
          'Langsung mulai, sesuaikan sambil jalan'
        ),
        score: 0,
      },
      {
        text: L(
          '처음부터 꼼꼼하게 계획하고 단계별로 실행한다',
          'Plan carefully from the start and execute step by step',
          '最初から細かく計画し、段階的に進める',
          '从一开始就细致规划，按步骤执行',
          '從一開始就細緻規劃，按步驟執行',
          'Lên kế hoạch kỹ từ đầu và làm từng bước',
          'Merencanakan rapi dari awal dan menjalankan bertahap'
        ),
        score: 1,
      },
      {
        text: L(
          '여러 일을 동시에 효율적으로 처리하는 멀티태스킹 선호',
          'Prefer multitasking—handle several things at once efficiently',
          '複数の仕事を同時に効率よく回すマルチタスク派',
          '喜欢多任务，同时高效处理好几件事',
          '喜歡多工，同時高效處理好幾件事',
          'Thích đa nhiệm, xử lý nhiều việc cùng lúc hiệu quả',
          'Suka multitasking, menangani banyak hal sekaligus dengan efisien'
        ),
        score: 2,
      },
      {
        text: L(
          '정해진 방식보다는 내 방식으로 창의적으로 접근한다',
          'Approach tasks creatively—my way, not the manual',
          '決まりきったやり方より、自分なりの創造的なやり方',
          '比起固定流程，更爱用自己的创意方式',
          '比起固定流程，更愛用自己的創意方式',
          'Thích cách sáng tạo theo mình hơn quy trình cứng nhắc',
          'Lebih suka pendekatan kreatif sendiri daripada cara baku'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 6,
    question: L(
      '의견 충돌이 생겼을 때 나는?',
      'When opinions clash, I…',
      '意見が対立したとき、私は？',
      '意见冲突时，我会…',
      '意見衝突時，我會…',
      'Khi ý kiến bất đồng, tôi…',
      'Saat pendapat bentrok, aku…'
    ),
    options: [
      {
        text: L(
          '유머와 긍정적인 에너지로 분위기를 부드럽게 만든다',
          'Soften the mood with humor and positive energy',
          'ユーモアと前向きなエネルギーで空気を和らげる',
          '用幽默和正能量缓和气氛',
          '用幽默和正能量緩和氣氛',
          'Dùng hài hước và năng lượng tích cực để làm dịu không khí',
          'Melunakkan suasana dengan humor dan energi positif'
        ),
        score: 0,
      },
      {
        text: L(
          '모두의 의견을 존중하면서 균형 있는 중재를 시도한다',
          'Mediate fairly while respecting everyone’s view',
          '全員の意見を尊重しつつ、バランスよく仲介する',
          '尊重各方，尝试平衡地调解',
          '尊重各方，嘗試平衡地調解',
          'Tôn trọng mọi người và hòa giải công bằng',
          'Menghormati semua pihak dan memediasi dengan seimbang'
        ),
        score: 1,
      },
      {
        text: L(
          '데이터와 논리를 근거로 가장 효율적인 결론을 도출한다',
          'Use data and logic to reach the most efficient conclusion',
          'データと論理に基づき、最も効率的な結論を出す',
          '用数据和逻辑推出最高效的结论',
          '用數據和邏輯推出最高效的結論',
          'Dựa vào dữ liệu và logic để đưa ra kết luận hiệu quả nhất',
          'Memakai data dan logika untuk kesimpulan paling efisien'
        ),
        score: 2,
      },
      {
        text: L(
          '기존 틀을 완전히 깨는 새로운 대안을 제시한다',
          'Offer a fresh alternative that breaks the old frame',
          '既存の枠を壊す新しい選択肢を出す',
          '提出打破旧框架的全新方案',
          '提出打破舊框架的全新方案',
          'Đưa ra phương án mới phá vỡ khuôn khổ cũ',
          'Menawarkan alternatif baru yang memecah pola lama'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 7,
    question: L(
      '나에 대한 주변의 평가로 가장 가까운 것은?',
      'Which line sounds most like what people say about you?',
      '周りからのあなたへの評価に一番近いのは？',
      '哪句最像别人对你的评价？',
      '哪句最像別人對你的評價？',
      'Câu nào giống nhất lời người khác nhận xét về bạn?',
      'Kalimat mana yang paling mirip dengan yang orang katakan tentangmu?'
    ),
    options: [
      {
        text: L(
          '"넌 항상 에너지 넘치고 긍정적이야. 같이 있으면 재밌어"',
          '“You’re always upbeat and fun to be around.”',
          '「いつも元気で前向き。一緒にいると楽しい」',
          '“你总是很有活力、很积极，和你在一起很开心。”',
          '「你總是很有活力、很積極，和你在一起很開心。」',
          '“Bạn lúc nào cũng tràn năng lượng, tích cực; ở cùng vui lắm.”',
          '“Kamu selalu energik dan positif; bareng kamu seru.”'
        ),
        score: 0,
      },
      {
        text: L(
          '"넌 진지하고 깊이가 있어. 믿을 수 있는 사람이야"',
          '“You’re serious and deep—someone I can trust.”',
          '「真剣で深みがある。信頼できる人」',
          '“你很认真、有深度，是个值得信任的人。”',
          '「你很認真、有深度，是個值得信任的人。」',
          '“Bạn chân thành, sâu sắc—người có thể tin cậy.”',
          '“Kamu serius dan berbobot—orang yang bisa dipercaya.”'
        ),
        score: 1,
      },
      {
        text: L(
          '"넌 뭐든 빠르고 정확해. 능력 하나는 진짜 인정"',
          '“You’re fast and sharp—I really respect your skills.”',
          '「何でも速くて正確。能力は本当に認める」',
          '“你做事又快又准，能力真的服气。”',
          '「你做事又快又準，能力真的服氣。」',
          '“Làm gì cũng nhanh và chính xác—khả năng đáng nể.”',
          '“Apa pun cepat dan tepat—skillnya patut diakui.”'
        ),
        score: 2,
      },
      {
        text: L(
          '"넌 생각하는 게 독특해. 가끔 어디서 그런 생각이 나오는지 신기해"',
          '“Your ideas are so unique—where do they even come from?”',
          '「考え方がユニーク。どこからそんな発想が出るのか不思議」',
          '“你的想法很独特，有时真不知道从哪来的。”',
          '「你的想法很獨特，有時真不知道從哪來的。」',
          '“Cách nghĩ của bạn rất độc đáo—đôi khi không hiểu lấy đâu ra.”',
          '“Pikiranmu unik—kadang heran ide itu dari mana.”'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 8,
    question: L(
      '새로운 것을 배울 때 나는?',
      'When learning something new, I…',
      '新しいことを学ぶとき、私は？',
      '学习新东西时，我…',
      '學習新東西時，我…',
      'Khi học điều mới, tôi…',
      'Saat mempelajari hal baru, aku…'
    ),
    options: [
      {
        text: L(
          '일단 재미있게 경험해보고 자연스럽게 익히는 스타일',
          'Jump in for fun and pick it up naturally',
          'まず楽しみながら体験して、自然に身につける',
          '先有趣地体验，自然学会',
          '先有趣地體驗，自然學會',
          'Trải nghiệm vui trước, học dần một cách tự nhiên',
          'Coba dulu dengan seru, lalu menguasai secara alami'
        ),
        score: 0,
      },
      {
        text: L(
          '개념을 깊이 이해한 후에 천천히 적용하는 스타일',
          'Understand the concept deeply, then apply slowly',
          '概念を深く理解してから、ゆっくり応用する',
          '先把概念吃透，再慢慢应用',
          '先把概念吃透，再慢慢應用',
          'Hiểu sâu khái niệm trước, áp dụng từ từ',
          'Memahami konsep secara mendalam, lalu menerapkan perlahan'
        ),
        score: 1,
      },
      {
        text: L(
          '핵심 원리를 빠르게 파악하고 즉시 활용하는 스타일',
          'Grasp core principles fast and use them right away',
          '核心を素早く掴み、すぐに使えるようにする',
          '快速抓住核心原理并马上用起来',
          '快速抓住核心原理並馬上用起來',
          'Nắm nhanh nguyên lý cốt lõi và áp dụng ngay',
          'Menggenggam inti cepat dan langsung memakai'
        ),
        score: 2,
      },
      {
        text: L(
          '정해진 방법보다 내가 직접 실험하며 익히는 스타일',
          'Learn by experimenting—more than following the textbook',
          '決まった手順より、自分で試しながら覚える',
          '比起照本宣科，更爱边试边学',
          '比起照本宣科，更愛邊試邊學',
          'Thích tự thử nghiệm hơn là làm theo sách',
          'Lebih suka bereksperimen sendiri daripada ikut panduan kaku'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 9,
    question: L(
      '대화할 때 나의 말투 특징은?',
      'How would you describe your speaking style?',
      '会話するときの話し方の特徴は？',
      '你说话的风格更像哪种？',
      '你說話的風格更像哪種？',
      'Phong cách nói chuyện của bạn giống kiểu nào?',
      'Gaya bicaramu lebih mirip yang mana?'
    ),
    options: [
      {
        text: L(
          '유쾌하고 표현이 풍부하다. 이모지나 감탄사를 자주 쓴다',
          'Playful and expressive—lots of emojis and exclamations',
          '明るく表現豊か。絵文字や感嘆詞が多い',
          '活泼、表达丰富，爱用表情和感叹',
          '活潑、表達豐富，愛用表情和感嘆',
          'Vui vẻ, diễn đạt nhiều—hay dùng emoji và cảm thán',
          'Ceria dan ekspresif—sering pakai emoji dan seruan'
        ),
        score: 0,
      },
      {
        text: L(
          '차분하고 신중하다. 말 한마디 한마디를 생각하고 한다',
          'Calm and careful—I think before each line',
          '落ち着いていて慎重。一言一言を考えて話す',
          '沉稳谨慎，字字斟酌',
          '沉穩謹慎，字字斟酌',
          'Điềm tĩnh, cẩn trọng—nghĩ kỹ từng câu',
          'Tenang dan hati-hati—memikirkan setiap kata'
        ),
        score: 1,
      },
      {
        text: L(
          '명확하고 간결하다. 결론부터 말하는 편이다',
          'Clear and concise—I lead with the takeaway',
          '明確で簡潔。結論から話す',
          '清晰简洁，习惯先说结论',
          '清晰簡潔，習慣先說結論',
          'Rõ ràng, gọn—thường nói kết luận trước',
          'Jelas dan ringkas—biasanya mulai dari kesimpulan'
        ),
        score: 2,
      },
      {
        text: L(
          '비유나 은유가 많다. 독특한 표현을 즐겨 쓴다',
          'Full of metaphors—I love odd, vivid phrasing',
          '比喩や隠喩が多く、独特な言い回しが好き',
          '爱用比喻，表达很独特',
          '愛用比喻，表達很獨特',
          'Nhiều ẩn dụ, thích cách diễn đạt độc đáo',
          'Banyak metafora dan ungkapan yang unik'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 10,
    question: L(
      '실수를 했을 때 나는?',
      'When I make a mistake, I…',
      'ミスをしたとき、私は？',
      '犯错时，我会…',
      '犯錯時，我會…',
      'Khi mắc lỗi, tôi…',
      'Saat membuat kesalahan, aku…'
    ),
    options: [
      {
        text: L(
          '"아이쿠!" 하고 솔직하게 인정하고 빠르게 수습한다',
          'Say “oops,” own it honestly, and fix it fast',
          '「おっと！」と素直に認め、すぐに立て直す',
          '“哎呀”一声，坦诚认错并快速收拾',
          '「哎呀」一聲，坦誠認錯並快速收拾',
          '“Ối!” thừa nhận thẳng thắn và xử lý nhanh',
          '“Ups!” mengakui jujur dan bereskan cepat'
        ),
        score: 0,
      },
      {
        text: L(
          '왜 실수가 났는지 깊이 돌아보고 재발 방지를 고민한다',
          'Reflect deeply on why it happened and how to prevent repeats',
          'なぜ起きたか深く振り返り、再発防止を考える',
          '深挖原因，思考如何避免再犯',
          '深挖原因，思考如何避免再犯',
          'Suy ngẫm sâu nguyên nhân và cách không tái phạm',
          'Merenungkan penyebab dan cara mencegah ulangan'
        ),
        score: 1,
      },
      {
        text: L(
          '원인을 빠르게 파악하고 가장 효율적인 수정 방안을 찾는다',
          'Pinpoint the cause quickly and pick the most efficient fix',
          '原因を素早く特定し、最も効率的な修正策を選ぶ',
          '快速定位原因，找最高效的修正方案',
          '快速定位原因，找最高效的修正方案',
          'Xác định nhanh nguyên nhân và chọn cách sửa hiệu quả nhất',
          'Cepat temukan akar masalah dan perbaikan paling efisien'
        ),
        score: 2,
      },
      {
        text: L(
          '실수에서 오히려 새로운 아이디어나 인사이트를 발견한다',
          'Sometimes the mistake sparks a new idea or insight',
          'ミスからむしろ新しいアイデアや気づきが生まれることも',
          '有时反而从错误里冒出新的想法或洞察',
          '有時反而從錯誤裡冒出新的想法或洞察',
          'Đôi khi từ lỗi lại nảy ra ý tưởng hoặc insight mới',
          'Kadang dari kesalahan justru muncul ide atau wawasan baru'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 11,
    question: L(
      '나의 강점이 가장 잘 발휘되는 상황은?',
      'When does your strength shine the most?',
      '自分の強みが一番輝くのはどんなとき？',
      '你的长处最容易在什么情况发挥？',
      '你的長處最容易在什麼情況發揮？',
      'Điểm mạnh của bạn tỏa sáng nhất khi nào?',
      'Kapan kekuatanmu paling terlihat?'
    ),
    options: [
      {
        text: L(
          '분위기가 어색하거나 사람들이 어려워할 때 내가 나서면 잘 풀린다',
          'When it’s awkward or people struggle, I step in and smooth things out',
          '空気がぎこちない・みんなが困っているとき、出るとうまくいく',
          '气氛尴尬或大家为难时，我一出面就好转',
          '氣氛尷尬或大家為難時，我一出面就好轉',
          'Khi không khí ngượng hoặc mọi người lúng túng, tôi ra là ổn',
          'Saat canggung atau orang kesulitan, aku maju dan memperlancar'
        ),
        score: 0,
      },
      {
        text: L(
          '갈등이 복잡하게 얽혀있을 때 나의 섬세함이 빛난다',
          'When conflict is tangled, my nuance stands out',
          '対立が複雑に絡み合うとき、繊細さが光る',
          '矛盾纠缠复杂时，我的细腻最能体现',
          '矛盾糾纏複雜時，我的細膩最能體現',
          'Khi mâu thuẫn rối rắm, sự tinh tế của tôi nổi bật',
          'Saat konflik rumit, kepekaanku terlihat'
        ),
        score: 1,
      },
      {
        text: L(
          '시간이 촉박하고 빠른 판단이 필요할 때 내가 제일 강하다',
          'Under time pressure needing fast calls—that’s my zone',
          '時間がなくて即断が必要なときが一番強い',
          '时间紧、要快拍板时我最强',
          '時間緊、要快拍板時我最強',
          'Khi thiếu thời gian cần quyết định nhanh—đó là lúc tôi mạnh nhất',
          'Saat waktu mepet perlu putusan cepat—itu zonku'
        ),
        score: 2,
      },
      {
        text: L(
          '아무도 답을 모를 때 내가 전혀 다른 방향을 제시한다',
          'When no one knows the answer, I propose a totally different path',
          '誰も答えを知らないとき、まったく違う方向を示せる',
          '没人知道答案时，我能提出完全不同的方向',
          '沒人知道答案時，我能提出完全不同的方向',
          'Khi không ai biết đáp án, tôi đưa hướng hoàn toàn khác',
          'Saat tak ada yang tahu jawaban, aku tawarkan arah yang sama sekali beda'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 12,
    question: L(
      '나를 가장 잘 표현하는 한 문장은?',
      'Which sentence describes you best?',
      'あなたを一番よく表す一文は？',
      '哪句话最像你？',
      '哪句話最像你？',
      'Câu nào mô tả bạn nhất?',
      'Kalimat mana yang paling menggambarkanmu?'
    ),
    options: [
      {
        text: L(
          '"어디서든 밝고 적극적으로. 나 없으면 분위기 안 나와"',
          '“Bright and proactive everywhere—no me, no party.”',
          '「どこでも明るく積極的。私がいないと場が盛り上がらない」',
          '“到哪都积极阳光，没我气氛就不对。”',
          '「到哪都積極陽光，沒我氣氛就不對。」',
          '“Ở đâu cũng tích cực vui vẻ—không có tôi là hết không khí.”',
          '“Di mana pun ceria dan proaktif—tanpa aku suasana kurang hidup.”'
        ),
        score: 0,
      },
      {
        text: L(
          '"빠르진 않지만 깊고 단단하게. 신뢰가 제일 중요해"',
          '“Not fast, but deep and solid—trust matters most.”',
          '「速さはないけど深くて堅い。信頼が一番大事」',
          '“不求快，但求深和稳。信任最重要。”',
          '「不求快，但求深和穩。信任最重要。」',
          '“Không cần nhanh nhưng cần sâu và vững—tin cậy là trên hết.”',
          '“Tidak harus cepat tapi dalam dan kokoh—kepercayaan yang utama.”'
        ),
        score: 1,
      },
      {
        text: L(
          '"빠르고 정확하게. 효율이 최고의 배려다"',
          '“Fast and precise—efficiency is how I care.”',
          '「速くて正確。効率こそが最大の配慮」',
          '“又快又准，效率就是最好的体贴。”',
          '「又快又準，效率就是最好的體貼。」',
          '“Nhanh và chính xác—hiệu quả là cách quan tâm tốt nhất.”',
          '“Cepat dan tepat—efisiensi adalah bentuk perhatian terbaik.”'
        ),
        score: 2,
      },
      {
        text: L(
          '"나는 늘 남들이 안 가본 길을 간다"',
          '“I always take the road less traveled.”',
          '「私はいつも人が歩かない道を行く」',
          '“我总走别人没走过的路。”',
          '「我總走別人沒走過的路。」',
          '“Tôi luôn đi con đường ít người đi.”',
          '“Aku selalu ambil jalan yang jarang orang tempuh.”'
        ),
        score: 3,
      },
    ],
  },
];

export const phase3WhichAiAreYouResults: Phase3WhichAiAreYouResult[] = [
  {
    type: 'Type1',
    emoji: '💬',
    title: L(
      '밝고 친근한 만능 대화 엔진, ChatGPT형 💬',
      'Bright, friendly all-round talker — ChatGPT type 💬',
      '明るく親しみやすい万能トーク — ChatGPT型 💬',
      '开朗亲和的万能对话型——ChatGPT 型 💬',
      '開朗親和的萬能對話型——ChatGPT 型 💬',
      'Vui vẻ, thân thiện, nói chuyện đa năng — kiểu ChatGPT 💬',
      'Ramah dan serba-bisa ngobrol — tipe ChatGPT 💬'
    ),
    shortDescription: L(
      '어디서든 잘 섞이고, 뭐든 척척 대답하는 당신.',
      'You blend in anywhere and answer anything with ease.',
      'どこでも馴染み、何にでもすぐ答えられるあなた。',
      '到哪都能融入，什么都能接得住的你。',
      '到哪都能融入，什麼都能接得住的你。',
      'Hòa nhập mọi nơi và đáp ứng mọi thứ nhẹ nhàng.',
      'Bisa nyatu di mana saja dan menjawab apa pun dengan luwes.'
    ),
    description: L(
      '당신은 ChatGPT처럼 뛰어난 소통 능력과 친근한 에너지를 가진 사람입니다. 어떤 주제든 자연스럽게 대화를 이어가고, 분위기를 밝게 만드는 데 탁월합니다. 다양한 상황에 빠르게 적응하고, 사람들이 편하게 다가올 수 있도록 만드는 것이 가장 큰 강점입니다. 모임의 분위기 메이커이자 언제나 먼저 손 내미는 사람.',
      'Like ChatGPT, you bring strong communication skills and warm energy. You keep conversations flowing on any topic and lift the mood. You adapt quickly and help others feel welcome—often the one who breaks the ice first.',
      'ChatGPTのように、コミュ力が高く親しみやすいエネルギーの持ち主。どんな話題でも自然に会話を続け、場を明るくします。状況適応が速く、人が話しやすい空気を作れるのが最大の強み。ムードメーカーで、いちばんに手を伸ばす人。',
      '你像 ChatGPT 一样擅长沟通、带着亲切感。任何话题都能自然聊下去，擅长把气氛带热。你能快速适应环境，让人愿意靠近——常常是聚会的氛围担当、先伸手的那个人。',
      '你像 ChatGPT 一樣擅長溝通、帶著親切感。任何話題都能自然聊下去，擅長把氣氛帶熱。你能快速適應環境，讓人願意靠近——常常是聚會的氛圍擔當、先伸手的那個人。',
      'Bạn giống ChatGPT: giao tiếp tốt và năng lượng thân thiện. Mọi chủ đề đều trôi chảy, không khí vui hơn. Thích nghi nhanh và khiến người khác dễ đến gần—thường là người làm ấm không khí trước.',
      'Seperti ChatGPT: komunikasi kuat dan energi hangat. Topik apa pun mengalir, suasana jadi ceria. Cepat beradaptasi dan membuat orang nyaman—sering jadi pemanas suasana yang pertama mengulurkan tangan.'
    ),
    aiSubtype: L(
      'ChatGPT형 (Communicator)',
      'ChatGPT type (Communicator)',
      'ChatGPT型（コミュニケーター）',
      'ChatGPT 型（沟通者）',
      'ChatGPT 型（溝通者）',
      'Kiểu ChatGPT (Người giao tiếp)',
      'Tipe ChatGPT (Komunikator)'
    ),
    coreStrength: L(
      '친화력, 적응력, 풍부한 표현력',
      'Warmth, adaptability, expressive communication',
      '親しみやすさ、適応力、表現力',
      '亲和力、适应力、表达力',
      '親和力、適應力、表達力',
      'Thân thiện, thích nghi, diễn đạt phong phú',
      'Keramahan, adaptasi, ekspresi kaya'
    ),
    caution: L(
      '너무 맞춰주다 보면 내 색깔이 흐려질 수 있음',
      'People-pleasing too much can blur your own voice',
      '合わせすぎると、自分の色が薄まることがある',
      '太迁就别人时，容易模糊自己的个性',
      '太遷就別人時，容易模糊自己的個性',
      'Chiều quá đôi khi làm mờ cá tính của bạn',
      'Terlalu menyesuaikan diri bisa memudarkan warna dirimu'
    ),
    goodMatch: L(
      'Type 2 (Claude형 — 깊이로 균형을 맞춰줌)',
      'Type 2 (Claude — balances you with depth)',
      'Type 2（Claude型 — 深さでバランスを取ってくれる）',
      'Type 2（Claude 型——用深度帮你平衡）',
      'Type 2（Claude 型——用深度幫你平衡）',
      'Type 2 (Claude — cân bằng bạn bằng chiều sâu)',
      'Type 2 (Claude — menyeimbangkanmu dengan kedalaman)'
    ),
    badMatch: L(
      'Type 3 (Gemini형 — 속도와 에너지 면에서 경쟁 구도가 될 수 있음)',
      'Type 3 (Gemini — can feel competitive on pace and energy)',
      'Type 3（Gemini型 — スピードとエネルギーで競い合いやすい）',
      'Type 3（Gemini 型——节奏与能量上容易较劲）',
      'Type 3（Gemini 型——節奏與能量上容易較勁）',
      'Type 3 (Gemini — dễ “đua” nhịp và năng lượng)',
      'Type 3 (Gemini — bisa saling adu tempo dan energi)'
    ),
    aiShareName: L('ChatGPT', 'ChatGPT', 'ChatGPT', 'ChatGPT', 'ChatGPT', 'ChatGPT', 'ChatGPT'),
  },
  {
    type: 'Type2',
    emoji: '🌿',
    title: L(
      '신중하고 깊이 있는 공감형 사색가, Claude형 🌿',
      'Thoughtful, deep empath — Claude type 🌿',
      '慎重で深い共感タイプの思索家 — Claude型 🌿',
      '谨慎而有深度的共情思考型——Claude 型 🌿',
      '謹慎而有深度的共情思考型——Claude 型 🌿',
      'Thận trọng, sâu sắc, đồng cảm — kiểu Claude 🌿',
      'Hati-hati dan dalam, penuh empati — tipe Claude 🌿'
    ),
    shortDescription: L(
      '빠르진 않지만, 한번 믿으면 끝까지 믿을 수 있는 사람.',
      'Not the fastest to open up—but once trusted, you’re rock solid.',
      'すぐには開かないが、一度信じたら最後まで信頼できる人。',
      '不一定最快热络，但一旦信任就值得托付。',
      '不一定最快熱絡，但一旦信任就值得託付。',
      'Không nhanh mở lòng nhưng một khi tin là gắn bó đến cùng.',
      'Tidak cepat terbuka, tapi setelah percaya—setia sampai akhir.'
    ),
    description: L(
      '당신은 Claude처럼 감정과 논리의 균형을 잘 잡는 사람입니다. 말하기 전에 충분히 생각하고, 상대의 입장을 깊이 헤아리며, 단순한 답보다는 본질적인 이해를 추구합니다. 빠르게 반응하는 것보다 신뢰할 수 있는 관계를 쌓는 것을 중요하게 여깁니다. 주변에서 진지하게 믿고 의지하는 타입입니다.',
      'Like Claude, you balance emotion and logic. You think before you speak, consider others deeply, and aim for real understanding—not quick fixes. You value trust over speed, and people rely on you when things matter.',
      'Claudeのように、感情と論理のバランスが良い。話す前に考え、相手の立場を深く汲み、手早い答えより本質的理解を重んじる。速さより信頼できる関係を大切にし、周りから本気で頼られるタイプ。',
      '你像 Claude 一样善于平衡感性与理性。开口前会想清楚，体谅对方的处境，追求本质上的理解而非敷衍的快答。比起反应速度，你更看重可信赖的关系，是身边人会认真依靠的类型。',
      '你像 Claude 一樣善於平衡感性與理性。開口前會想清楚，體諒對方的處境，追求本質上的理解而非敷衍的快答。比起反應速度，你更看重可信賴的關係，是身邊人會認真依靠的類型。',
      'Giống Claude: cân bằng cảm xúc và lý trí. Suy nghĩ trước khi nói, thấu hiểu sâu, theo đuổi hiểu biết thật sự hơn câu trả lời vội. Coi trọng niềm tin hơn tốc độ—người khác tin cậy khi việc quan trọng.',
      'Seperti Claude: seimbangkan emosi dan logika. Berpikir dulu, memahami lawan bicara, mengutamakan pemahaman mendalam. Menghargai kepercayaan daripada kecepatan—orang mengandalkanmu saat penting.'
    ),
    aiSubtype: L(
      'Claude형 (Thinker)',
      'Claude type (Thinker)',
      'Claude型（シンカー）',
      'Claude 型（思考者）',
      'Claude 型（思考者）',
      'Kiểu Claude (Người suy tư)',
      'Tipe Claude (Pemikir)'
    ),
    coreStrength: L(
      '공감 능력, 신중함, 깊이 있는 사고',
      'Empathy, thoughtfulness, deep thinking',
      '共感力、慎重さ、深い思考',
      '共情力、谨慎、深度思考',
      '共情力、謹慎、深度思考',
      'Đồng cảm, thận trọng, tư duy sâu',
      'Empati, hati-hati, berpikir mendalam'
    ),
    caution: L(
      '너무 오래 생각하다 타이밍을 놓치는 경우가 있음',
      'Overthinking can make you miss the moment',
      '考えすぎてタイミングを逃すことがある',
      '想太久有时会错过时机',
      '想太久有時會錯過時機',
      'Nghĩ quá lâu đôi khi lỡ thời điểm',
      'Terlalu lama berpikir kadang melewatkan momen'
    ),
    goodMatch: L(
      'Type 1 (ChatGPT형 — 밝은 에너지로 균형을 맞춰줌)',
      'Type 1 (ChatGPT — bright energy balances you)',
      'Type 1（ChatGPT型 — 明るいエネルギーでバランスを補う）',
      'Type 1（ChatGPT 型——用开朗能量补足你）',
      'Type 1（ChatGPT 型——用開朗能量補足你）',
      'Type 1 (ChatGPT — năng lượng tươi cân bằng bạn)',
      'Type 1 (ChatGPT — energi ceria menyeimbangkanmu)'
    ),
    badMatch: L(
      'Type 5 (Perplexity형 — 속도와 깊이의 방향이 달라 답답할 수 있음)',
      'Type 5 (Perplexity — pace vs. depth can feel frustrating)',
      'Type 5（Perplexity型 — スピードと深さの方向が違いもどかしさが出やすい）',
      'Type 5（Perplexity 型——节奏与深度取向不同，易觉得憋闷）',
      'Type 5（Perplexity 型——節奏與深度取向不同，易覺得憋悶）',
      'Type 5 (Perplexity — khác nhịp/chiều sâu dễ thấy bức bối)',
      'Type 5 (Perplexity — beda tempo/kedalaman bisa membuat frustrasi)'
    ),
    aiShareName: L('Claude', 'Claude', 'Claude', 'Claude', 'Claude', 'Claude', 'Claude'),
  },
  {
    type: 'Type3',
    emoji: '⚡',
    title: L(
      '유연하고 다재다능한 멀티 플레이어, Gemini형 ⚡',
      'Flexible multi-talent multitasker — Gemini type ⚡',
      '柔軟で多才なマルチプレイヤー — Gemini型 ⚡',
      '灵活多面的多任务型——Gemini 型 ⚡',
      '靈活多面的多工型——Gemini 型 ⚡',
      'Linh hoạt đa tài đa nhiệm — kiểu Gemini ⚡',
      'Fleksibel multitalenta multitasking — tipe Gemini ⚡'
    ),
    shortDescription: L(
      '여러 가지를 동시에 잘 해내는 것, 그게 나의 일상입니다.',
      'Juggling many things at once—that’s just my everyday life.',
      'いろいろ同時に回すのが日常。',
      '同时把很多事做好，这就是我的日常。',
      '同時把很多事做好，這就是我的日常。',
      'Làm nhiều việc cùng lúc—đó là thường nhật của tôi.',
      'Mengerjakan banyak hal sekaligus—itulah keseharianku.'
    ),
    description: L(
      '당신은 Gemini처럼 다양한 분야를 빠르게 흡수하고, 여러 역할을 동시에 소화하는 멀티 플레이어입니다. 어느 한 분야에 특화되기보다는 넓고 유연하게 대응하는 것이 강점입니다. 빠르게 변화하는 상황에서도 당황하지 않고 유연하게 적응하며, 다양한 사람들과 원활하게 협력합니다.',
      'Like Gemini, you absorb many fields quickly and wear several hats at once. Breadth and flexibility beat narrow specialization. You stay calm as contexts shift and collaborate smoothly with all kinds of people.',
      'Geminiのように幅広い分野を素早く吸収し、複数の役割を同時にこなす。一芸特化より広く柔軟に対応するのが強み。変化が速い場面でも慌てず適応し、多様な人と協力しやすい。',
      '你像 Gemini 一样能快速吸收多领域知识，同时扮演多种角色。比起单一专精，你更擅长广而灵活地应对。环境变化快也不慌，能和不同的人顺畅协作。',
      '你像 Gemini 一樣能快速吸收多領域知識，同時扮演多種角色。比起單一專精，你更擅長廣而靈活地應對。環境變化快也不慌，能和不同的人順暢協作。',
      'Giống Gemini: học nhanh nhiều lĩnh vực, đảm nhiệm nhiều vai. Mạnh ở độ rộng và linh hoạt hơn chuyên sâu một hướng. Thích nghi khi môi trường đổi nhanh và hợp tác tốt với nhiều kiểu người.',
      'Seperti Gemini: cepat menyerap banyak bidang, memegang banyak peran. Kuat pada keluwesan dan keluasan. Tetap tenang saat konteks berubah dan mudah kolaborasi.'
    ),
    aiSubtype: L(
      'Gemini형 (Multi-Player)',
      'Gemini type (Multi-Player)',
      'Gemini型（マルチプレイヤー）',
      'Gemini 型（多面手）',
      'Gemini 型（多面手）',
      'Kiểu Gemini (Đa nhiệm)',
      'Tipe Gemini (Multi-peran)'
    ),
    coreStrength: L(
      '유연성, 빠른 적응력, 다재다능함',
      'Flexibility, fast adaptation, versatility',
      '柔軟性、適応の速さ、多才さ',
      '灵活、快速适应、多面能力',
      '靈活、快速適應、多面能力',
      'Linh hoạt, thích nghi nhanh, đa tài',
      'Fleksibel, adaptasi cepat, serba bisa'
    ),
    caution: L(
      '넓이를 추구하다 보면 깊이가 부족해 보일 수 있음',
      'Chasing breadth can look like shallow depth',
      '幅を追うと、深みが足りないように見えがち',
      '追求广度时，可能显得深度不足',
      '追求廣度時，可能顯得深度不足',
      'Theo đuổi độ rộng đôi khi bị hiểu là thiếu chiều sâu',
      'Mengejar keluasan bisa terlihat kurang dalam'
    ),
    goodMatch: L(
      'Type 2 (Claude형 — 깊이로 부족한 부분을 채워줌)',
      'Type 2 (Claude — fills in depth you might miss)',
      'Type 2（Claude型 — 深さで足りない部分を埋める）',
      'Type 2（Claude 型——用深度补足你可能缺的部分）',
      'Type 2（Claude 型——用深度補足你可能缺的部分）',
      'Type 2 (Claude — bù chiều sâu cho phần bạn thiếu)',
      'Type 2 (Claude — mengisi kedalaman yang kamu kurangi)'
    ),
    badMatch: L(
      'Type 6 (Grok형 — 독특함과 효율이 충돌할 수 있음)',
      'Type 6 (Grok — uniqueness vs. efficiency can clash)',
      'Type 6（Grok型 — 独自性と効率がぶつかりやすい）',
      'Type 6（Grok 型——独特性与效率容易相冲）',
      'Type 6（Grok 型——獨特性與效率容易相衝）',
      'Type 6 (Grok — độc đáo và hiệu quả dễ xung đột)',
      'Type 6 (Grok — keunikan vs efisiensi bisa bentrok)'
    ),
    aiShareName: L('Gemini', 'Gemini', 'Gemini', 'Gemini', 'Gemini', 'Gemini', 'Gemini'),
  },
  {
    type: 'Type4',
    emoji: '🎯',
    title: L(
      '빠르고 정확한 효율 극대화 머신, Copilot형 🎯',
      'Fast, precise efficiency machine — Copilot type 🎯',
      '速く正確な効率最大化マシン — Copilot型 🎯',
      '又快又准的效率机器——Copilot 型 🎯',
      '又快又準的效率機器——Copilot 型 🎯',
      'Nhanh, chính xác, tối đa hiệu suất — kiểu Copilot 🎯',
      'Cepat, akurat, mesin efisiensi — tipe Copilot 🎯'
    ),
    shortDescription: L(
      '군더더기 없이 핵심만. 효율이 최고의 배려입니다.',
      'No fluff—just the point. Efficiency is how I show care.',
      '無駄なく核心だけ。効率こそ最大の配慮。',
      '不废话只抓重点。效率就是最好的体贴。',
      '不廢話只抓重點。效率就是最好的體貼。',
      'Không vòng vo—đi thẳng vào cốt lõi. Hiệu quả là cách quan tâm.',
      'Tanpa basa-basi—langsung inti. Efisiensi adalah bentuk perhatian.'
    ),
    description: L(
      '당신은 Microsoft Copilot처럼 명확하고 실용적인 사람입니다. 감정보다는 논리, 과정보다는 결과, 가능성보다는 실현 가능한 해결책을 중시합니다. 빠른 판단력과 정확한 실행력으로 어떤 상황에서도 신뢰받는 타입입니다. 업무에서 특히 강하고, 팀의 실질적인 엔진 역할을 합니다.',
      'Like Microsoft Copilot, you’re clear and practical. Logic over drama, outcomes over process, doable fixes over vague ideas. People trust your judgment and execution—especially at work, where you’re the team’s engine.',
      'Microsoft Copilotのように明確で実用的。感情より論理、過程より成果、可能性より実行可能な解決。判断力と遂行力で信頼され、仕事では特に強く、チームの実質的エンジン。',
      '你像 Microsoft Copilot 一样清晰务实。重逻辑轻情绪，重结果轻过程，重可落地的方案胜过空泛可能。判断快、执行准，是值得托付的类型；在职场上尤其强，是团队里真正推进事情的人。',
      '你像 Microsoft Copilot 一樣清晰務實。重邏輯輕情緒，重結果輕過程，重可落地的方案勝過空泛可能。判斷快、執行準，是值得託付的類型；在職場上尤其強，是團隊裡真正推進事情的人。',
      'Giống Copilot: rõ ràng, thực dụng. Ưu tiên logic, kết quả, giải pháp khả thi. Được tin về phán đoán và thực thi—đặc biệt trong công việc, như động cơ của nhóm.',
      'Seperti Copilot: jelas dan praktis. Logika, hasil, solusi yang bisa dilaksanakan. Dipercaya dalam putusan dan eksekusi—kuat di kerja sebagai mesin tim.'
    ),
    aiSubtype: L(
      'Copilot형 (Executor)',
      'Copilot type (Executor)',
      'Copilot型（エグゼキューター）',
      'Copilot 型（执行者）',
      'Copilot 型（執行者）',
      'Kiểu Copilot (Người thực thi)',
      'Tipe Copilot (Eksekutor)'
    ),
    coreStrength: L(
      '실행력, 논리적 사고, 빠른 판단',
      'Execution, logical thinking, fast judgment',
      '実行力、論理的思考、迅速な判断',
      '执行力、逻辑思维、快速判断',
      '執行力、邏輯思維、快速判斷',
      'Thực thi, tư duy logic, phán đoán nhanh',
      'Eksekusi, berpikir logis, putusan cepat'
    ),
    caution: L(
      '효율만 강조하다 보면 사람의 감정을 놓칠 수 있음',
      'Efficiency-first can miss people’s feelings',
      '効率ばかりだと感情を見落としがち',
      '太强调效率时，可能忽略他人感受',
      '太強調效率時，可能忽略他人感受',
      'Chỉ chạy theo hiệu quả dễ bỏ qua cảm xúc',
      'Terlalu fokus efisiensi bisa melewatkan perasaan orang'
    ),
    goodMatch: L(
      'Type 3 (Gemini형 — 유연함으로 딱딱한 면을 보완해 줌)',
      'Type 3 (Gemini — flexibility softens your edges)',
      'Type 3（Gemini型 — 柔軟さで硬さを和らげる）',
      'Type 3（Gemini 型——用灵活补足你偏硬的一面）',
      'Type 3（Gemini 型——用靈活補足你偏硬的一面）',
      'Type 3 (Gemini — độ linh hoạt làm dịu phần cứng nhắc)',
      'Type 3 (Gemini — keluwesan melunakkan sisi kakumu)'
    ),
    badMatch: L(
      'Type 2 (Claude형 — 속도와 깊이의 방향이 다름)',
      'Type 2 (Claude — different tempo and depth needs)',
      'Type 2（Claude型 — スピードと深さのニーズが違う）',
      'Type 2（Claude 型——节奏与深度需求不同）',
      'Type 2（Claude 型——節奏與深度需求不同）',
      'Type 2 (Claude — khác nhịp và nhu cầu chiều sâu)',
      'Type 2 (Claude — beda tempo dan kebutuhan kedalaman)'
    ),
    aiShareName: L('Copilot', 'Copilot', 'Copilot', 'Copilot', 'Copilot', 'Copilot', 'Copilot'),
  },
  {
    type: 'Type5',
    emoji: '🔍',
    title: L(
      '탐구하고 연결하는 정보 큐레이터, Perplexity형 🔍',
      'Curious connector of information — Perplexity type 🔍',
      '探求してつなぐ情報キュレーター — Perplexity型 🔍',
      '爱探究、会串联的信息策展人——Perplexity 型 🔍',
      '愛探究、會串聯的資訊策展人——Perplexity 型 🔍',
      'Người kết nối & tìm hiểu thông tin — kiểu Perplexity 🔍',
      'Penyambung informasi yang ingin tahu — tipe Perplexity 🔍'
    ),
    shortDescription: L(
      '모르는 게 있으면 그냥 넘어가지 못합니다. 꼭 파고들어야 직성이 풀립니다.',
      'If I don’t know something, I can’t just move on—I have to dig.',
      '分からないことがあると、そっとしないで掘り下げたくなる。',
      '有不懂的就放不下，不挖清楚不痛快。',
      '有不懂的就放不下，不挖清楚不痛快。',
      'Có điều chưa rõ là không thể bỏ qua—phải đào cho tới.',
      'Kalau ada yang belum jelas susah lanjut—harus digali dulu.'
    ),
    description: L(
      '당신은 Perplexity처럼 정보를 탐색하고 연결하는 것을 즐기는 탐구형 인간입니다. 단순히 아는 것에서 그치지 않고 더 깊이 파고들고, 서로 다른 정보들을 연결해서 새로운 인사이트를 만들어냅니다. 궁금한 게 생기면 반드시 답을 찾아야 하는 성격. 주변에서 정보 검색을 제일 잘하는 사람으로 통합니다.',
      'Like Perplexity, you love hunting and linking information. You don’t stop at “kind of knowing”—you go deeper and connect dots into new insight. When curiosity strikes, you need answers. People say you’re the best at finding stuff.',
      'Perplexityのように情報を探してつなぐのが好き。「なんとなく」で終わらず深掘りし、断片をつなげて新しい気づきを作る。気になったら答えが見つかるまで止まれない。周りから検索のプロと言われやすい。',
      '你像 Perplexity 一样享受搜索与串联信息。不满足于“大概知道”，会深挖并把不同信息连成新洞察。一有好奇就必须找到答案，身边人常觉得你最会查资料。',
      '你像 Perplexity 一樣享受搜尋與串聯資訊。不滿足於「大概知道」，會深挖並把不同資訊連成新洞察。一有好奇就必須找到答案，身邊人常覺得你最會查資料。',
      'Giống Perplexity: thích tìm và nối thông tin. Không dừng ở “biết sơ” mà đào sâu và ghép mảnh thành insight. Tò mò là phải có đáp án—bạn được khen giỏi tìm kiếm.',
      'Seperti Perplexity: suka menelusuri dan menyambung info. Tidak puas setengah tahu—dalamkan dan hubungkan jadi wawasan. Penasaran harus terjawab—orang bilang kamu jago mencari.'
    ),
    aiSubtype: L(
      'Perplexity형 (Explorer)',
      'Perplexity type (Explorer)',
      'Perplexity型（エクスプローラー）',
      'Perplexity 型（探索者）',
      'Perplexity 型（探索者）',
      'Kiểu Perplexity (Người khám phá)',
      'Tipe Perplexity (Penjelajah)'
    ),
    coreStrength: L(
      '탐구심, 정보 수집력, 연결 사고',
      'Curiosity, research skill, connective thinking',
      '探究心、情報収集力、つなぐ思考',
      '好奇心、信息搜集力、连接式思维',
      '好奇心、資訊蒐集力、連結式思維',
      'Tò mò, thu thập thông tin, tư duy kết nối',
      'Rasa ingin tahu, mengumpulkan info, berpikir menyambung'
    ),
    caution: L(
      '너무 깊이 파다 보면 결론 내리는 것이 늦어질 수 있음',
      'Digging too deep can delay deciding',
      '掘りすぎると結論が遅くなりがち',
      '挖太深时，结论可能迟迟下不来',
      '挖太深時，結論可能遲遲下不來',
      'Đào quá sâu dễ chậm kết luận',
      'Terlalu dalam menggali bisa menunda keputusan'
    ),
    goodMatch: L(
      'Type 4 (Copilot형 — 실행력으로 탐구를 결과로 만들어줌)',
      'Type 4 (Copilot — execution turns exploration into results)',
      'Type 4（Copilot型 — 実行力で探求を結果にする）',
      'Type 4（Copilot 型——用执行力把探索变成结果）',
      'Type 4（Copilot 型——用執行力把探索變成結果）',
      'Type 4 (Copilot — thực thi biến thám hiểm thành kết quả)',
      'Type 4 (Copilot — eksekusi mengubah eksplorasi jadi hasil)'
    ),
    badMatch: L(
      'Type 1 (ChatGPT형 — 깊이보다 속도를 원하는 상대와 맞지 않음)',
      'Type 1 (ChatGPT — can clash if one wants speed over depth)',
      'Type 1（ChatGPT型 — 深さよりスピードを求める相手と噛み合いにくい）',
      'Type 1（ChatGPT 型——若一方要速度、一方要深度，易不合拍）',
      'Type 1（ChatGPT 型——若一方要速度、一方要深度，易不合拍）',
      'Type 1 (ChatGPT — dễ lệch nếu một bên cần tốc độ hơn chiều sâu)',
      'Type 1 (ChatGPT — bisa bentrok jika satu pihak mengutamakan kecepatan dibanding kedalaman)'
    ),
    aiShareName: L(
      'Perplexity',
      'Perplexity',
      'Perplexity',
      'Perplexity',
      'Perplexity',
      'Perplexity',
      'Perplexity'
    ),
  },
  {
    type: 'Type6',
    emoji: '🌀',
    title: L(
      '경계를 부수는 독창적 이단아, Grok형 🌀',
      'Rule-breaking original — Grok type 🌀',
      '境界を壊す独創的な異端児 — Grok型 🌀',
      '打破常规的原创型——Grok 型 🌀',
      '打破常規的原創型——Grok 型 🌀',
      'Kẻ độc đáo phá vỡ khuôn mẫu — kiểu Grok 🌀',
      'Orisinal yang memecah aturan — tipe Grok 🌀'
    ),
    shortDescription: L(
      '남들이 안 가본 길만 골라서 가는 게 나의 본능입니다.',
      'My instinct is to pick paths others skip.',
      '人が歩かない道を選びたくなるのが本能。',
      '本能就是专挑别人不走的路。',
      '本能就是專挑別人不走的路。',
      'Bản năng là chọn con đường ít người đi.',
      'Instingku memilih jalan yang jarang orang tempuh.'
    ),
    description: L(
      '당신은 xAI의 Grok처럼 기존의 틀을 거부하고 독창적인 방식으로 세상을 바라보는 사람입니다. 일반적인 답이 있어도 굳이 새로운 방법을 찾고, 남들이 당연하게 여기는 것에 의문을 풉니다. 때로는 이해하기 어렵다는 말을 듣기도 하지만, 아무도 생각 못 한 아이디어를 내놓는 순간 모두를 놀라게 합니다. 혁신과 창의의 원석 같은 타입입니다.',
      'Like xAI’s Grok, you reject the default frame and see the world in your own way. Even when a common answer exists, you hunt for a new angle and question what everyone assumes. Some may find you hard to read—until you drop an idea no one saw coming. Raw material for innovation.',
      'xAIのGrokのように、型を拒み独自の見方をする。一般的な答えがあっても新しいやり方を探し、当たり前に疑いを持つ。理解されにくいこともあるが、誰も思いつかないアイデアで驚かせる。革新と創造の原石タイプ。',
      '你像 xAI 的 Grok 一样不愿被套路束缚，用独特方式看世界。就算有常规答案，也偏要找新角度，质疑“理所当然”。有人可能一时难懂你，但你抛出没人想到的点子时，会惊艳全场。像创新与创意的原石。',
      '你像 xAI 的 Grok 一樣不願被套路束縛，用獨特方式看世界。就算有常規答案，也偏要找新角度，質疑「理所當然」。有人可能一時難懂你，但你拋出沒人想到的點子時，會驚豔全場。像創新與創意的原石。',
      'Giống Grok của xAI: từ chối khuôn mẫu, nhìn thế giới theo cách riêng. Dù đã có đáp án phổ biến vẫn tìm góc mới, nghi ngờ điều “hiển nhiên”. Có người khó hiểu bạn—đến khi bạn ném ra ý tưởng không ai nghĩ tới. Nguyên liệu cho đổi mới.',
      'Seperti Grok (xAI): menolak bingkai baku, melihat dunia dengan cara sendiri. Meski ada jawaban umum tetap mencari sudut baru, mempertanyakan yang “wajar”. Ada yang sulit memahamimu—sampai kamu hadirkan ide yang tak terduga. Bahan mentah inovasi.'
    ),
    aiSubtype: L(
      'Grok형 (Innovator)',
      'Grok type (Innovator)',
      'Grok型（イノベーター）',
      'Grok 型（创新者）',
      'Grok 型（創新者）',
      'Kiểu Grok (Người đổi mới)',
      'Tipe Grok (Inovator)'
    ),
    coreStrength: L(
      '독창성, 창의적 사고, 틀을 깨는 용기',
      'Originality, creative thinking, courage to break rules',
      '独創性、創造的思考、型を破る勇気',
      '独创性、创意思维、打破框架的勇气',
      '獨創性、創意思維、打破框架的勇氣',
      'Độc đáo, tư duy sáng tạo, dũng khí phá khuôn',
      'Orisinalitas, berpikir kreatif, berani memecah pola'
    ),
    caution: L(
      '독특함이 지나치면 협업에서 마찰이 생길 수 있음',
      'Too unconventional can create friction in teamwork',
      '独自性が強すぎると協業で摩擦が出やすい',
      '太特立独行时，协作里可能起摩擦',
      '太特立獨行時，協作裡可能起摩擦',
      'Quá độc đáo dễ ma sát khi làm nhóm',
      'Terlalu unik bisa menimbulkan gesekan dalam kolaborasi'
    ),
    goodMatch: L(
      'Type 2 (Claude형 — 신중함으로 창의성에 방향을 잡아줌)',
      'Type 2 (Claude — steadiness steers your creativity)',
      'Type 2（Claude型 — 慎重さが創造性に方向を与える）',
      'Type 2（Claude 型——用稳重为你的创意掌舵）',
      'Type 2（Claude 型——用穩重為你的創意掌舵）',
      'Type 2 (Claude — sự điềm tĩnh định hướng cho sáng tạo)',
      'Type 2 (Claude — ketenangan mengarahkan kreativitasmu)'
    ),
    badMatch: L(
      'Type 4 (Copilot형 — 효율과 창의가 정면 충돌)',
      'Type 4 (Copilot — efficiency vs. creativity head-on)',
      'Type 4（Copilot型 — 効率と創造が正面衝突しやすい）',
      'Type 4（Copilot 型——效率与创意容易正面冲突）',
      'Type 4（Copilot 型——效率與創意容易正面衝突）',
      'Type 4 (Copilot — hiệu quả và sáng tạo dễ đối đầu)',
      'Type 4 (Copilot — efisiensi vs kreativitas bentrok frontal)'
    ),
    aiShareName: L('Grok', 'Grok', 'Grok', 'Grok', 'Grok', 'Grok', 'Grok'),
  },
];
