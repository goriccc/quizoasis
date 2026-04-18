/** 나의 S/N 지수 정밀 측정 — phase3-sn-index-precise-measurement */

export type Phase3SnIndexLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';

function T(t: {
  ko: string;
  en: string;
  ja: string;
  zhCN: string;
  zhTW: string;
  vi: string;
  id: string;
}): Record<Phase3SnIndexLocaleKey, string> {
  return {
    ko: t.ko,
    en: t.en,
    ja: t.ja,
    'zh-CN': t.zhCN,
    'zh-TW': t.zhTW,
    vi: t.vi,
    id: t.id,
  };
}

export interface Phase3SnIndexPreciseMeasurementQuestion {
  id: number;
  question: Record<Phase3SnIndexLocaleKey, string>;
  options: {
    text: Record<Phase3SnIndexLocaleKey, string>;
    /** A=S=0, B=N=1 */
    score: number;
  }[];
}

export interface Phase3SnIndexPreciseMeasurementResult {
  type: string;
  emoji: string;
  title: Record<Phase3SnIndexLocaleKey, string>;
  shortDescription: Record<Phase3SnIndexLocaleKey, string>;
  description: Record<Phase3SnIndexLocaleKey, string>;
  indexBand: Record<Phase3SnIndexLocaleKey, string>;
  characteristics: Record<Phase3SnIndexLocaleKey, string>;
  goodMatch: Record<Phase3SnIndexLocaleKey, string>;
  badMatch: Record<Phase3SnIndexLocaleKey, string>;
  /** SNS — {nPercent} 치환 */
  shareLine: Record<Phase3SnIndexLocaleKey, string>;
}

/** 원점수(0~12, N 선택 개수) → N%/S% (기획서 표) */
export const PHASE3_SN_SCORE_TO_NS: { n: number; s: number }[] = [
  { n: 0, s: 100 },
  { n: 8, s: 92 },
  { n: 17, s: 83 },
  { n: 25, s: 75 },
  { n: 33, s: 67 },
  { n: 42, s: 58 },
  { n: 50, s: 50 },
  { n: 58, s: 42 },
  { n: 67, s: 33 },
  { n: 75, s: 25 },
  { n: 83, s: 17 },
  { n: 92, s: 8 },
  { n: 100, s: 0 },
];

export function getNsPercentFromRawScore(rawScore: number): { n: number; s: number } {
  const s = Math.max(0, Math.min(12, Math.round(rawScore)));
  return PHASE3_SN_SCORE_TO_NS[s] ?? PHASE3_SN_SCORE_TO_NS[0];
}

export function calculatePhase3SnIndexPreciseMeasurementResult(answers: number[]): string {
  const total = answers.reduce((sum, n) => sum + n, 0);
  if (total <= 2) return 'Type1';
  if (total <= 4) return 'Type2';
  if (total <= 6) return 'Type3';
  if (total <= 8) return 'Type4';
  if (total <= 10) return 'Type5';
  return 'Type6';
}

export const phase3SnIndexPreciseMeasurementQuestions: Phase3SnIndexPreciseMeasurementQuestion[] = [
  {
    id: 1,
    question: T({
      ko: '처음 가보는 카페에 들어갔을 때 나는?',
      en: 'When I walk into a café for the first time, I…',
      ja: '初めて入るカフェで、私は？',
      zhCN: '第一次走进一家咖啡馆时，我会？',
      zhTW: '第一次走進一家咖啡館時，我會？',
      vi: 'Khi bước vào một quán cà phê lần đầu, tôi…',
      id: 'Saat pertama kali masuk kafe, aku…',
    }),
    options: [
      {
        text: T({
          ko: '인테리어, 메뉴판, 가격, 조명 등 눈에 보이는 것들을 구체적으로 살펴본다',
          en: 'Look closely at what I can see—interior, menu, prices, lighting.',
          ja: '内装・メニュー・価格・照明など、目に見えるものを具体的に見る。',
          zhCN: '具体查看装修、菜单、价格、灯光等看得见的东西。',
          zhTW: '具體查看裝潢、菜單、價格、燈光等看得見的東西。',
          vi: 'Quan sát cụ thể nội thất, menu, giá, ánh sáng—những gì mắt thấy.',
          id: 'Melihat detail interior, menu, harga, lampu—yang terlihat jelas.',
        }),
        score: 0,
      },
      {
        text: T({
          ko: '전체적인 분위기와 느낌을 먼저 감지한다. "여기 뭔가 내 스타일이다" 같은 직감',
          en: 'Sense the overall vibe first—a gut feeling like “this is so my style.”',
          ja: 'まず雰囲気や感覚を掴む。「なんか自分に合う」という直感。',
          zhCN: '先感知整体氛围和感觉，有种「这很对我味」的直觉。',
          zhTW: '先感知整體氛圍與感覺，有種「這很對我味」的直覺。',
          vi: 'Cảm nhận bầu không khí trước—trực giác kiểu “hợp gu mình”.',
          id: 'Merasakan suasana dulu—intuisi “ini cocok banget sama aku”.',
        }),
        score: 1,
      },
    ],
  },
  {
    id: 2,
    question: T({
      ko: '친구가 새로운 아이디어를 이야기할 때 나는?',
      en: 'When a friend pitches a new idea, I…',
      ja: '友達が新しいアイデアを話したとき、私は？',
      zhCN: '朋友提出新想法时，我会？',
      zhTW: '朋友提出新想法時，我會？',
      vi: 'Khi bạn kể ý tưởng mới, tôi…',
      id: 'Saat teman cerita ide baru, aku…',
    }),
    options: [
      {
        text: T({
          ko: '"그게 실제로 가능한지, 현실적으로 어떻게 할 건지"를 먼저 생각한다',
          en: 'First think whether it is realistic and how it could actually work.',
          ja: 'まず「本当にできるか」「現実的にどうするか」を考える。',
          zhCN: '先想「现实里行不行、具体怎么做」。',
          zhTW: '先想「現實裡行不行、具體怎麼做」。',
          vi: 'Nghĩ trước “có khả thi không, làm thế nào trong thực tế”.',
          id: 'Pikirkan dulu “bisa nggak di dunia nyata, gimana caranya”.',
        }),
        score: 0,
      },
      {
        text: T({
          ko: '"재밌겠다, 이렇게 발전시키면 어떨까"라며 가능성을 함께 상상한다',
          en: 'Imagine possibilities together—“fun, what if we built it out like this?”',
          ja: '「面白そう、こう広げたら？」と可能性を一緒に想像する。',
          zhCN: '一起想象可能性——「有意思，要是这样延展呢？」',
          zhTW: '一起想像可能性——「有意思，要是這樣延展呢？」',
          vi: 'Cùng tưởng tượng—“hay đấy, phát triển thế này thì sao?”',
          id: 'Bersama bayangkan—“seru, kalau dikembangin gini gimana?”',
        }),
        score: 1,
      },
    ],
  },
  {
    id: 3,
    question: T({
      ko: '책이나 영화를 고를 때 나는?',
      en: 'When I pick a book or a movie, I…',
      ja: '本や映画を選ぶとき、私は？',
      zhCN: '选书或电影时，我会？',
      zhTW: '選書或電影時，我會？',
      vi: 'Khi chọn sách hoặc phim, tôi…',
      id: 'Saat memilih buku atau film, aku…',
    }),
    options: [
      {
        text: T({
          ko: '줄거리, 장르, 리뷰, 출연진 등 구체적인 정보를 확인하고 선택한다',
          en: 'Check concrete info—plot, genre, reviews, cast—then choose.',
          ja: 'あらすじ・ジャンル・レビュー・出演者など具体情報を見て選ぶ。',
          zhCN: '查剧情、类型、评论、卡司等具体信息再选。',
          zhTW: '查劇情、類型、評論、卡司等具體資訊再選。',
          vi: 'Xem cốt truyện, thể loại, review, diễn viên rồi mới chọn.',
          id: 'Cek sinopsis, genre, ulasan, pemain—baru pilih.',
        }),
        score: 0,
      },
      {
        text: T({
          ko: '표지나 제목에서 오는 느낌, 분위기로 일단 선택하고 본다',
          en: 'Go by cover/title vibe and mood—watch or read and see.',
          ja: '表紙やタイトルの感じ・雰囲気でまず選んでから見る。',
          zhCN: '凭封面或标题的感觉、氛围先选再看。',
          zhTW: '憑封面或標題的感覺、氛圍先選再看。',
          vi: 'Chọn theo cảm giác bìa/tiêu đề và khí chất—rồi xem thử.',
          id: 'Pilih dari sampul/judul dan suasananya—baru tonton/baca.',
        }),
        score: 1,
      },
    ],
  },
  {
    id: 4,
    question: T({
      ko: '누군가에게 길을 알려줄 때 나는?',
      en: 'When I give someone directions, I…',
      ja: '誰かに道を教えるとき、私は？',
      zhCN: '给别人指路时，我会？',
      zhTW: '給別人指路時，我會？',
      vi: 'Khi chỉ đường cho ai đó, tôi…',
      id: 'Saat memberi petunjuk arah, aku…',
    }),
    options: [
      {
        text: T({
          ko: '"사거리에서 오른쪽으로 돌아서 편의점 지나면 바로 있어요" 구체적으로 설명한다',
          en: 'Explain step by step: “At the crossroads turn right, past the store—it is right there.”',
          ja: '「交差点を右、コンビニを過ぎたらすぐ」と具体的に説明する。',
          zhCN: '具体说明：「十字路口右转，过了便利店就是。」',
          zhTW: '具體說明：「十字路口右轉，過了便利商店就是。」',
          vi: 'Nói cụ thể: “Đến ngã tư rẽ phải, qua cửa hàng tiện lợi là tới.”',
          id: 'Jelaskan detail: “Di perempatan belok kanan, lewat minimarket langsung ada.”',
        }),
        score: 0,
      },
      {
        text: T({
          ko: '"그쪽 방향으로 가다 보면 알 수 있어요" 대략적인 방향 감각으로 설명한다',
          en: 'Give a rough sense of direction—“that way, you will feel it.”',
          ja: '「だいたいあっちの方、行けばわかる」感覚で説明する。',
          zhCN: '用大致方向感说明：「往那边走，到了就知道。」',
          zhTW: '用大致方向感說明：「往那邊走，到了就知道。」',
          vi: 'Chỉ hướng đại thể—“về phía đó, đi sẽ thấy”.',
          id: 'Arah kasar—“ke sana nanti kerasa sendiri”.',
        }),
        score: 1,
      },
    ],
  },
  {
    id: 5,
    question: T({
      ko: '대화할 때 내가 더 자주 하는 것은?',
      en: 'In conversation, I more often…',
      ja: '会話で私がよくすることは？',
      zhCN: '聊天时我更常？',
      zhTW: '聊天時我更常？',
      vi: 'Trong hội thoại, tôi thường…',
      id: 'Saat ngobrol, aku lebih sering…',
    }),
    options: [
      {
        text: T({
          ko: '실제로 있었던 일, 구체적인 사실과 경험을 중심으로 이야기한다',
          en: 'Talk from real events, concrete facts, and lived experience.',
          ja: '実際にあったこと、具体的な事実・経験を中心に話す。',
          zhCN: '围绕真实发生的事、具体事实和经历来讲。',
          zhTW: '圍繞真實發生的事、具體事實和經歷來講。',
          vi: 'Kể từ việc thật, chi tiết và trải nghiệm cụ thể.',
          id: 'Cerita dari kejadian nyata, fakta konkret, dan pengalaman.',
        }),
        score: 0,
      },
      {
        text: T({
          ko: '비유, 상상, 가능성, 아이디어를 섞어 이야기한다. "만약에~"로 자주 시작한다',
          en: 'Mix metaphor, imagination, possibilities, ideas—often starting with “what if…”',
          ja: '比喩・想像・可能性・アイデアを混ぜる。「もしも〜」で始めがち。',
          zhCN: '混用比喻、想象、可能性和点子，常以「要是…」开头。',
          zhTW: '混用比喻、想像、可能性和點子，常以「要是…」開頭。',
          vi: 'Trộn ẩn dụ, tưởng tượng, khả năng, ý tưởng—hay bằng “giả sử…”.',
          id: 'Campur metafora, imajinasi, kemungkinan, ide—sering mulai dengan “kalau…”.',
        }),
        score: 1,
      },
    ],
  },
  {
    id: 6,
    question: T({
      ko: '문제가 생겼을 때 나는?',
      en: 'When a problem comes up, I…',
      ja: '問題が起きたとき、私は？',
      zhCN: '出问题时，我会？',
      zhTW: '出問題時，我會？',
      vi: 'Khi có vấn đề, tôi…',
      id: 'Saat ada masalah, aku…',
    }),
    options: [
      {
        text: T({
          ko: '지금 상황을 파악하고, 검증된 방법으로 단계별로 해결한다',
          en: 'Clarify the situation and solve step by step with proven methods.',
          ja: '状況を把握し、実証された方法で段階的に解決する。',
          zhCN: '弄清现状，用稳妥的方法一步步解决。',
          zhTW: '釐清現狀，用穩妥的方法一步步解決。',
          vi: 'Nắm tình huống và xử lý từng bước bằng cách đã kiểm chứng.',
          id: 'Pahami situasi dan selesaikan bertahap dengan cara teruji.',
        }),
        score: 0,
      },
      {
        text: T({
          ko: '여러 가능성을 동시에 떠올리고 새로운 방식을 먼저 시도해보고 싶다',
          en: 'See many possibilities at once and want to try a new approach first.',
          ja: '複数の可能性を同時に思い浮かべ、新しいやり方を先に試したい。',
          zhCN: '同时想到多种可能，想先试试新做法。',
          zhTW: '同時想到多種可能，想先試試新做法。',
          vi: 'Nghĩ nhiều khả năng cùng lúc và muốn thử cách mới trước.',
          id: 'Bayangkan banyak kemungkinan sekaligus dan ingin coba cara baru dulu.',
        }),
        score: 1,
      },
    ],
  },
  {
    id: 7,
    question: T({
      ko: '여행 계획을 세울 때 나는?',
      en: 'When I plan a trip, I…',
      ja: '旅行の計画を立てるとき、私は？',
      zhCN: '做旅行计划时，我会？',
      zhTW: '做旅行計畫時，我會？',
      vi: 'Khi lên kế hoạch du lịch, tôi…',
      id: 'Saat merencanakan trip, aku…',
    }),
    options: [
      {
        text: T({
          ko: '숙소, 교통, 일정, 예산을 구체적으로 정리한다. 계획이 없으면 불안하다',
          en: 'Lay out lodging, transport, schedule, budget in detail—I feel uneasy without a plan.',
          ja: '宿・交通・日程・予算を具体的に整理。計画がないと不安。',
          zhCN: '具体整理住宿、交通、日程、预算；没计划会不安。',
          zhTW: '具體整理住宿、交通、日程、預算；沒計畫會不安。',
          vi: 'Chi tiết chỗ ở, phương tiện, lịch, ngân sách—không có kế hoạch là lo.',
          id: 'Rinci penginapan, transport, jadwal, budget—tanpa rencana gelisah.',
        }),
        score: 0,
      },
      {
        text: T({
          ko: '큰 방향만 정해두고 현장에서 즉흥적으로 움직이는 게 더 재밌다',
          en: 'Set a rough direction only—improvising on the spot is more fun.',
          ja: '大まかな方角だけ決めて、現地で即興的に動くのが楽しい。',
          zhCN: '只定大方向，到现场即兴更有趣。',
          zhTW: '只定大方向，到現場即興更有趣。',
          vi: 'Chỉ định hướng lớn—ứng biến tại chỗ mới vui.',
          id: 'Cukup arah besar—spontan di tempat lebih seru.',
        }),
        score: 1,
      },
    ],
  },
  {
    id: 8,
    question: T({
      ko: '누군가를 오래 만나다 보면 나는?',
      en: 'After knowing someone a long time, I…',
      ja: '長く付き合うと、私は？',
      zhCN: '和某人相处久了，我会？',
      zhTW: '和某人相處久了，我會？',
      vi: 'Sau khi quen ai đó lâu, tôi…',
      id: 'Setelah lama kenal seseorang, aku…',
    }),
    options: [
      {
        text: T({
          ko: '상대의 구체적인 말과 행동, 습관을 잘 기억한다',
          en: 'Remember their exact words, actions, and habits well.',
          ja: '相手の具体的な言葉・行動・習慣をよく覚えている。',
          zhCN: '清楚记得对方具体的话、行动和习惯。',
          zhTW: '清楚記得對方具體的話、行動和習慣。',
          vi: 'Nhớ rõ lời nói, hành động, thói quen cụ thể của họ.',
          id: 'Ingat kata-kata, tindakan, kebiasaan konkret mereka.',
        }),
        score: 0,
      },
      {
        text: T({
          ko: '상대의 전체적인 성격, 가치관, 방향성이 더 잘 파악된다',
          en: 'Grasp their overall personality, values, and direction better.',
          ja: '全体の性格・価値観・方向性がより掴める。',
          zhCN: '更把握对方的整体性格、价值观和走向。',
          zhTW: '更把握對方的整體性格、價值觀和走向。',
          vi: 'Nắm tốt hơn tính cách, giá trị và hướng đi tổng thể.',
          id: 'Lebih paham kepribadian, nilai, dan arah besar mereka.',
        }),
        score: 1,
      },
    ],
  },
  {
    id: 9,
    question: T({
      ko: '새로운 것을 배울 때 나는?',
      en: 'When I learn something new, I…',
      ja: '新しいことを学ぶとき、私は？',
      zhCN: '学习新东西时，我会？',
      zhTW: '學習新東西時，我會？',
      vi: 'Khi học điều mới, tôi…',
      id: 'Saat belajar hal baru, aku…',
    }),
    options: [
      {
        text: T({
          ko: '기초부터 차근차근 단계를 밟아야 안심이 된다',
          en: 'Need to build from the basics step by step to feel secure.',
          ja: '基礎から段階を踏まないと安心できない。',
          zhCN: '必须从基础一步步来才安心。',
          zhTW: '必須從基礎一步步來才安心。',
          vi: 'Phải đi từ cơ bản từng bước mới yên tâm.',
          id: 'Harus dari dasar bertahap baru tenang.',
        }),
        score: 0,
      },
      {
        text: T({
          ko: '전체 개념과 흐름을 먼저 파악하고 세부는 나중에 채운다',
          en: 'Grasp the big picture and flow first, then fill in details.',
          ja: '全体の概念と流れを先に掴み、細部は後から埋める。',
          zhCN: '先掌握整体概念和流程，细节后补。',
          zhTW: '先掌握整體概念和流程，細節後補。',
          vi: 'Nắm khái niệm và dòng chảy trước, chi tiết sau.',
          id: 'Pahami gambar besar dan alurnya dulu, detail belakangan.',
        }),
        score: 1,
      },
    ],
  },
  {
    id: 10,
    question: T({
      ko: '대화 중 상대방이 말을 끝맺기 전에 나는?',
      en: 'Before the other person finishes speaking, I…',
      ja: '相手が話し終える前に、私は？',
      zhCN: '对方还没说完话时，我会？',
      zhTW: '對方還沒說完話時，我會？',
      vi: 'Trước khi đối phương nói xong, tôi…',
      id: 'Sebelum lawan bicara selesai berbicara, aku…',
    }),
    options: [
      {
        text: T({
          ko: '상대가 말을 다 끝낼 때까지 듣는다. 섣불리 예측하지 않는다',
          en: 'Listen until they finish—I do not jump ahead with guesses.',
          ja: '最後まで聞く。早とちりしない。',
          zhCN: '听到对方说完；不贸然预判。',
          zhTW: '聽到對方說完；不貿然預判。',
          vi: 'Nghe đến hết—không đoán vội.',
          id: 'Dengarkan sampai selesai—tidak menebak duluan.',
        }),
        score: 0,
      },
      {
        text: T({
          ko: '말이 끝나기 전에 이미 전체 맥락을 파악하고 있는 경우가 많다',
          en: 'Often already sense the full context before they finish.',
          ja: '終わる前に、もう全体の文脈を掴んでいることが多い。',
          zhCN: '常在说完前就已把握整体语境。',
          zhTW: '常在說完前就已把握整體語境。',
          vi: 'Thường đã nắm ngữ cảnh tổng thể trước khi họ nói xong.',
          id: 'Sering sudah paham konteks keseluruhan sebelum mereka selesai.',
        }),
        score: 1,
      },
    ],
  },
  {
    id: 11,
    question: T({
      ko: '일상에서 영감이나 아이디어는 어디서 오나요?',
      en: 'Where do inspiration and ideas come from in daily life?',
      ja: '日常でインスピレーションやアイデアはどこから？',
      zhCN: '日常生活中灵感和想法从哪里来？',
      zhTW: '日常生活中靈感和想法從哪裡來？',
      vi: 'Trong đời thường, cảm hứng và ý tưởng đến từ đâu?',
      id: 'Sehari-hari inspirasi dan ide datang dari mana?',
    }),
    options: [
      {
        text: T({
          ko: '직접 경험하거나 본 것, 들은 것에서 온다. 실제 경험이 가장 큰 자산이다',
          en: 'From what I experience, see, and hear—real experience is my biggest asset.',
          ja: '体験・見たこと・聞いたことから。実体験が最大の資産。',
          zhCN: '来自亲身经历、所见所闻；真实经历是最大的资产。',
          zhTW: '來自親身經歷、所見所聞；真實經歷是最大的資產。',
          vi: 'Từ trải nghiệm, nhìn, nghe—kinh nghiệm thật là tài sản lớn nhất.',
          id: 'Dari pengalaman, melihat, mendengar—pengalaman nyata aset terbesar.',
        }),
        score: 0,
      },
      {
        text: T({
          ko: '멍하니 있거나 전혀 관계없는 것을 보다가 갑자기 떠오른다. 출처를 모를 때도 있다',
          en: 'It pops up while spacing out or seeing something unrelated—sometimes I do not know the source.',
          ja: 'ぼーっとしているとき、無関係なものを見て急に浮かぶ。出所不明なことも。',
          zhCN: '发呆或看到无关事物时突然冒出；有时不知从何而来。',
          zhTW: '發呆或看到無關事物時突然冒出；有時不知從何而來。',
          vi: 'Chợt lóe khi thẫn thờ hoặc thấy thứ không liên quan—đôi khi không biết nguồn.',
          id: 'Muncul tiba-tiba saat melamun atau lihat hal tak terkait—kadang tak tahu sumbernya.',
        }),
        score: 1,
      },
    ],
  },
  {
    id: 12,
    question: T({
      ko: '지금 나를 가장 잘 표현하는 문장은?',
      en: 'Which sentence describes me best right now?',
      ja: '今の自分を一番よく表す一文は？',
      zhCN: '哪句话最符合现在的我？',
      zhTW: '哪句話最符合現在的我？',
      vi: 'Câu nào mô tả tôi nhất lúc này?',
      id: 'Kalimat mana yang paling menggambarkanku sekarang?',
    }),
    options: [
      {
        text: T({
          ko: '"나는 지금 이 순간, 눈앞에 있는 것들을 정확하게 파악하는 편이다"',
          en: '“I tend to read what is right in front of me, in this moment, accurately.”',
          ja: '「今この瞬間、目の前にあるものを正確に捉えるほうだ」',
          zhCN: '「我倾向于准确看清当下眼前的事物。」',
          zhTW: '「我傾向於準確看清當下眼前的事物。」',
          vi: '“Tôi thường nắm chính xác những gì ngay trước mắt, trong khoảnh khắc này.”',
          id: '“Aku cenderung menangkap dengan tepat apa yang ada di depan mata, saat ini.”',
        }),
        score: 0,
      },
      {
        text: T({
          ko: '"나는 지금보다 앞으로의 가능성과 패턴, 연결고리에 더 관심이 많다"',
          en: '“I care more about future possibilities, patterns, and connections than about ‘right now.’”',
          ja: '「今より、これからの可能性・パターン・つながりに関心がある」',
          zhCN: '「比起当下，我更在意未来的可能性、模式和关联。」',
          zhTW: '「比起當下，我更在意未來的可能性、模式與關聯。」',
          vi: '“Tôi quan tâm khả năng, mẫu và kết nối phía trước hơn là ‘ngay bây giờ’.”',
          id: '“Aku lebih peduli pada kemungkinan, pola, dan koneksi ke depan dibanding ‘sekarang’.”',
        }),
        score: 1,
      },
    ],
  },
];

export const phase3SnIndexPreciseMeasurementResults: Phase3SnIndexPreciseMeasurementResult[] = [
  {
    type: 'Type1',
    emoji: '🔍',
    title: T({
      ko: '현실이 전부인, 진성 감각형 (0~2점)',
      en: 'Pure sensing — reality is everything (0–2 pts)',
      ja: '現実がすべて、純ス S（0〜2点）',
      zhCN: '现实即全部，典型感觉型（0~2 分）',
      zhTW: '現實即全部，典型感覺型（0~2 分）',
      vi: 'Cảm giác thuần—thực tế là tất cả (0–2 điểm)',
      id: 'Sensing murni—realitas adalah segalanya (0–2 poin)',
    }),
    shortDescription: T({
      ko: '"당신은 거의 완전한 감각형입니다. 보이는 것이 전부이고, 그것으로 충분합니다."',
      en: '"You are almost fully sensing—what you see is enough."',
      ja: '「あなたはほぼ完全な感覚型。見えるものがすべてで、それで十分。」',
      zhCN: '「你几乎是纯粹的感觉型：所见即全部，这就够了。」',
      zhTW: '「你幾乎是純粹的感覺型：所見即全部，這就夠了。」',
      vi: '"Bạn gần như hoàn toàn cảm giác—thấy là đủ."',
      id: '"Kamu hampir sepenuhnya sensing—yang terlihat sudah cukup."',
    }),
    indexBand: T({
      ko: 'N 0~17% / S 83~100%',
      en: 'N 0–17% / S 83–100%',
      ja: 'N 0〜17% / S 83〜100%',
      zhCN: 'N 0~17% / S 83~100%',
      zhTW: 'N 0~17% / S 83~100%',
      vi: 'N 0–17% / S 83–100%',
      id: 'N 0–17% / S 83–100%',
    }),
    description: T({
      ko: '현재 순간에 집중하고, 직접 경험한 것을 신뢰하며, 검증된 방법과 구체적인 사실을 기반으로 세상을 이해합니다. 추상적인 이론이나 가능성보다는 지금 당장 눈앞에 있는 현실에 집중하는 것이 자연스럽습니다. 이것은 단점이 아니라 강력한 강점입니다. 가장 현실적이고 실용적인 사람이 바로 당신입니다.\n\n진성 S의 특징: 지시문을 처음부터 끝까지 읽는 사람. 설명서를 실제로 읽는 사람.\nN과의 갈등 포인트: "근거 없이 느낌으로 결정한다"는 N의 방식이 답답하게 느껴질 수 있습니다.',
      en: 'You focus on the present, trust direct experience, and understand the world through proven methods and concrete facts. Abstract theory or “what if” matters less than what is in front of you right now—that is a strength, not a flaw. You are among the most practical people.\n\nPure S: reads instructions start to finish; actually reads the manual.\nFriction with N: N deciding “by vibe” without evidence can feel frustrating.',
      ja: '今に集中し、直接体験を信じ、実証された方法と具体的事実で世界を理解します。抽象より目の前の現実が自然です。それは弱点ではなく強みです。\n\n純S：指示を最初から最後まで読む。説明書を本当に読む。\nNとの摩擦：根拠なしの「感覚で決める」がもどかしいことがある。',
      zhCN: '你专注当下、相信亲身经历，用稳妥方法与具体事实理解世界。比起抽象理论，眼前的现实更自然——这是优势。你非常务实。\n\n典型 S：从头到尾读说明；真的会看说明书。\n与 N 的摩擦：N「凭感觉决定」可能让你憋闷。',
      zhTW: '你專注當下、相信親身經歷，用穩妥方法與具體事實理解世界。比起抽象理論，眼前的現實更自然——這是優勢。你非常務實。\n\n典型 S：從頭到尾讀說明；真的會看說明書。\n與 N 的摩擦：N「憑感覺決定」可能讓你憋悶。',
      vi: 'Bạn tập trung hiện tại, tin trải nghiệm trực tiếp, hiểu thế giới bằng phương pháp đã kiểm chứng và sự kiện cụ thể. Đó là điểm mạnh.\n\nS thuần: đọc hướng dẫn từ đầu đến cuối; thật sự đọc sách hướng dẫn.\nMa sát với N: quyết định “theo cảm giác” có thể khó chịu.',
      id: 'Kamu fokus pada saat ini, percaya pengalaman langsung, memahami dunia lewat metode teruji dan fakta konkret. Itu kekuatan.\n\nS murni: baca instruksi utuh; benar-benar baca manual.\nGesekan dengan N: memutuskan “pakai feeling” bisa menyebalkan.',
    }),
    characteristics: T({
      ko: '정보 수집: 오감·직접 경험 중심. 강점: 정확한 현실 파악·세부 기억·꼼꼼한 실행·안정 루틴. 약점: 새 방식·변화 적응이 느릴 수 있음',
      en: 'Input: senses & direct experience. Strengths: accurate read of reality, detail memory, solid execution, stable routines. Weakness: slower to adapt to new ways or change.',
      ja: '収集：五感・直接体験。強み：現実把握・細部記憶・実行・安定ルーティン。弱み：新手法・変化への適応が遅め。',
      zhCN: '信息：感官与直接经验。优势：把握现实、记细节、执行稳、例行稳定。劣势：适应新方式或变化较慢。',
      zhTW: '資訊：感官與直接經驗。優勢：掌握現實、記細節、執行穩、例行穩定。劣勢：適應新方式或變化較慢。',
      vi: 'Thu thập: giác quan & trải nghiệm trực tiếp. Điểm mạnh: nắm thực tế, nhớ chi tiết, thực thi, thói quen ổn. Điểm yếu: thích ứng chậm với cách mới.',
      id: 'Input: indera & pengalaman langsung. Kekuatan: baca realitas, ingat detail, eksekusi, rutinitas. Kelemahan: adaptasi ke cara baru lebih lambat.',
    }),
    goodMatch: T({
      ko: '"가끔 \'만약에~\'라는 질문을 스스로에게 던져보세요. 상상 근육도 쓸수록 발달합니다"',
      en: '"Sometimes ask yourself “what if…”—your imagination is a muscle too."',
      ja: '「時々『もしも〜』と自分に問いかけて。想像力も鍛えれば育つ」',
      zhCN: '「偶尔问问自己「要是…会怎样」——想象力也要练。」',
      zhTW: '「偶爾問問自己「要是…會怎樣」——想像力也要練。」',
      vi: '"Đôi khi tự hỏi “giả sử…”—trí tưởng tượng cũng cần tập."',
      id: '"Kadang tanya diri “kalau…”—imajinasi juga perlu dilatih."',
    }),
    badMatch: T({
      ko: '회계사, 외과의사, 엔지니어, 요리사, 건축가, 군인',
      en: 'Accountant, surgeon, engineer, chef, architect, soldier',
      ja: '会計士、外科医、エンジニア、シェフ、建築家、軍人',
      zhCN: '会计师、外科医生、工程师、厨师、建筑师、军人',
      zhTW: '會計師、外科醫師、工程師、廚師、建築師、軍人',
      vi: 'Kế toán, bác sĩ phẫu thuật, kỹ sư, đầu bếp, kiến trúc sư, quân nhân',
      id: 'Akuntan, dokter bedah, insinyur, koki, arsitek, militer',
    }),
    shareLine: T({
      ko: '나의 N지수는 {nPercent}% 🔍 진성 S. 현실이 최고라는 걸 아는 사람 → 너는 몇 %야?',
      en: 'My N index is {nPercent}% 🔍 Pure S—I know reality rules. What is yours?',
      ja: '私のN指数は{nPercent}% 🔍純S。現実が一番とわかってる人 → あなたは？',
      zhCN: '我的 N 指数是 {nPercent}% 🔍 典型 S，懂现实至上的人 → 你呢？',
      zhTW: '我的 N 指數是 {nPercent}% 🔍 典型 S，懂現實至上的人 → 你呢？',
      vi: 'Chỉ số N của tôi là {nPercent}% 🔍 S thuần—biết thực tế là nhất → bạn bao nhiêu %?',
      id: 'Indeks N-ku {nPercent}% 🔍 S murni—tahu realitas nomor satu → kamu berapa %?',
    }),
  },
  {
    type: 'Type2',
    emoji: '🗂️',
    title: T({
      ko: '현실 기반 사고인, 강한 감각형 (3~4점)',
      en: 'Strong sensing — reality-first mind (3–4 pts)',
      ja: '現実ベースの強い感覚型（3〜4点）',
      zhCN: '强感觉型，现实优先（3~4 分）',
      zhTW: '強感覺型，現實優先（3~4 分）',
      vi: 'Cảm giác mạnh—ưu tiên thực tế (3–4 điểm)',
      id: 'Sensing kuat—utamakan realitas (3–4 poin)',
    }),
    shortDescription: T({
      ko: '"당신은 분명한 감각형이지만 직관의 문이 살짝 열려있습니다."',
      en: '"You are clearly sensing—but intuition is slightly ajar."',
      ja: '「はっきり感覚型だけど、直感の扉は少し開いている。」',
      zhCN: '「你明显是感觉型，但直觉的门也微微开着。」',
      zhTW: '「你明顯是感覺型，但直覺的門也微微開著。」',
      vi: '"Rõ ràng là cảm giác—nhưng trực giác cũng hé mở."',
      id: '"Jelas sensing—tapi intuisi sedikit terbuka."',
    }),
    indexBand: T({
      ko: 'N 25~33% / S 67~75%',
      en: 'N 25–33% / S 67–75%',
      ja: 'N 25〜33% / S 67〜75%',
      zhCN: 'N 25~33% / S 67~75%',
      zhTW: 'N 25~33% / S 67~75%',
      vi: 'N 25–33% / S 67–75%',
      id: 'N 25–33% / S 67–75%',
    }),
    description: T({
      ko: '대부분의 상황에서 구체적인 사실과 경험에 의존하지만, 가끔 직관적인 느낌이 맞아떨어지는 경험도 있습니다. 현실적이고 실용적이면서도 완전히 경직되지는 않은 유연한 감각형입니다. 새로운 아이디어를 들을 때 무조건 거부하지 않고 "실제로 가능한지"를 먼저 검토하는 방식으로 접근합니다.\n\n강한 S의 특징: 계획을 세우고 그대로 실행하는 것을 선호. 즉흥 변경이 불편.',
      en: 'You lean on concrete facts and experience, yet sometimes intuition lands. You are practical but not totally rigid—you check “is it feasible?” before rejecting ideas.\n\nStrong S: prefers executing the plan as set; last‑minute changes feel uncomfortable.',
      ja: '多くは具体的事実・経験頼みだが、時々直感が当たる。現実的で柔軟。新しい案は「できるか」を先に見る。\n\n強いS：計画どおり実行を好む。直前変更は苦手。',
      zhCN: '多数情况依赖具体事实与经验，但有时直觉也对。务实又有弹性；听新想法会先核实「可不可行」。\n\n强 S：喜欢按计划执行；讨厌临时改。',
      zhTW: '多數情況依賴具體事實與經驗，但有時直覺也對。務實又有彈性；聽新想法會先核實「可不可行」。\n\n強 S：喜歡按計畫執行；討厭臨時改。',
      vi: 'Dựa vào sự kiện và kinh nghiệm, đôi khi trực giác trúng. Thực tế nhưng không cứng—kiểm “làm được không” trước khi từ chối.\n\nS mạnh: thích làm đúng kế hoạch; đổi giờ chót khó chịu.',
      id: 'Mengandalkan fakta & pengalaman, kadang intuisi pas. Praktis tapi fleksibel—cek “bisa nggak” sebelum tolak ide.\n\nS kuat: suka eksekusi sesuai rencana; perubahan mendadak tidak nyaman.',
    }),
    characteristics: T({
      ko: '정보 수집: 경험·사실 중심, 패턴 인식도 가능. 강점: 현실 감각+제한적 유연성. 약점: 익숙한 방법을 고르려는 경향',
      en: 'Input: experience & facts; some pattern recognition. Strengths: realism + limited flexibility. Weakness: favors familiar methods.',
      ja: '収集：経験・事実中心、パターンも可。強み：現実感＋限定的柔軟性。弱み：馴染みの方法へ寄りがち。',
      zhCN: '信息：经验与事实，也能看模式。优势：现实感+有限弹性。劣势：倾向选熟悉做法。',
      zhTW: '資訊：經驗與事實，也能看模式。優勢：現實感+有限彈性。劣勢：傾向選熟悉做法。',
      vi: 'Thu thập: kinh nghiệm & sự kiện; nhận mẫu được. Điểm mạnh: thực tế + linh hoạt vừa phải. Điểm yếu: thích cách quen.',
      id: 'Input: pengalaman & fakta; bisa lihat pola. Kekuatan: realisme + fleksibilitas terbatas. Kelemahan: condong ke cara yang familiar.',
    }),
    goodMatch: T({
      ko: '"N형 친구의 아이디어를 \'왜 안 되는지\' 대신 \'어떻게 하면 되는지\'로 먼저 들어보세요"',
      en: '"When an N friend shares an idea, listen for how it could work—not only why it might not."',
      ja: '「N型の友のアイデアを『なぜダメか』より『どうすればできるか』で先に聞く」',
      zhCN: '「听 N 型朋友的想法时，先听「怎么做能成」，别只听「为什么不行」。」',
      zhTW: '「聽 N 型朋友的想法時，先聽「怎麼做能成」，別只聽「為什麼不行」。」',
      vi: '"Với ý tưởng của bạn kiểu N, nghe “làm sao được” trước “tại sao không”."',
      id: '"Dengar ide teman tipe N dengan “gimana bisa jalan” dulu, bukan “kenapa tidak”."',
    }),
    badMatch: T({
      ko: '프로젝트 매니저, 간호사, 교사, 경찰, 품질 관리자',
      en: 'Project manager, nurse, teacher, police officer, quality manager',
      ja: 'PM、看護師、教師、警察、品質管理',
      zhCN: '项目经理、护士、教师、警察、质量管理者',
      zhTW: '專案經理、護理師、教師、警察、品質管理者',
      vi: 'PM, điều dưỡng, giáo viên, cảnh sát, quản lý chất lượng',
      id: 'Manajer proyek, perawat, guru, polisi, manajer mutu',
    }),
    shareLine: T({
      ko: '나의 N지수는 {nPercent}% 🗂️ 강한 S이지만 직관도 살짝 있는 유형 → 너는 몇 %야?',
      en: 'My N index is {nPercent}% 🗂️ Strong S with a hint of intuition—what is yours?',
      ja: '私のN指数は{nPercent}% 🗂️強いSだけど直感も少し → あなたは？',
      zhCN: '我的 N 指数是 {nPercent}% 🗂️ 强 S 但也有点直觉 → 你呢？',
      zhTW: '我的 N 指數是 {nPercent}% 🗂️ 強 S 但也有點直覺 → 你呢？',
      vi: 'Chỉ số N {nPercent}% 🗂️ S mạnh nhưng có chút trực giác → bạn?',
      id: 'Indeks N {nPercent}% 🗂️ S kuat tapi ada sedikit intuisi → kamu?',
    }),
  },
  {
    type: 'Type3',
    emoji: '🌗',
    title: T({
      ko: '경계 위의 균형, S와 N 사이 (5~6점)',
      en: 'On the border—balanced between S and N (5–6 pts)',
      ja: '境界上のバランス、SとNの間（5〜6点）',
      zhCN: '边界上的平衡，介于 S 与 N 之间（5~6 分）',
      zhTW: '邊界上的平衡，介於 S 與 N 之間（5~6 分）',
      vi: 'Cân bằng trên ranh giới S và N (5–6 điểm)',
      id: 'Di perbatasan—seimbang antara S dan N (5–6 poin)',
    }),
    shortDescription: T({
      ko: '"당신은 감각과 직관 사이 가장 유연한 지점에 있습니다."',
      en: '"You sit at the most flexible point between sensing and intuition."',
      ja: '「感覚と直感のあいだで、いちばん柔軟な位置にいる。」',
      zhCN: '「你处在感觉与直觉之间最灵活的位置。」',
      zhTW: '「你處在感覺與直覺之間最靈活的位置。」',
      vi: '"Bạn ở điểm linh hoạt nhất giữa cảm giác và trực giác."',
      id: '"Kamu di titik paling fleksibel antara sensing dan intuisi."',
    }),
    indexBand: T({
      ko: 'N 42~50% / S 50~58%',
      en: 'N 42–50% / S 50–58%',
      ja: 'N 42〜50% / S 50〜58%',
      zhCN: 'N 42~50% / S 50~58%',
      zhTW: 'N 42~50% / S 50~58%',
      vi: 'N 42–50% / S 50–58%',
      id: 'N 42–50% / S 50–58%',
    }),
    description: T({
      ko: '현실적인 감각으로 정보를 수집하면서도 직관적인 연결고리도 잘 포착합니다. 상황에 따라 S처럼 구체적으로 사고하기도 하고 N처럼 추상적으로 생각하기도 합니다. 이 구간의 사람은 S와 N 모두와 소통이 잘 되는 편이며 어느 쪽 세계도 낯설지 않습니다.\n\nS/N 경계인의 특징: MBTI 검사할 때마다 S와 N이 바뀌는 경험을 해본 적이 있을 것.',
      en: 'You gather information in a concrete way while also catching intuitive links. Sometimes you think like S, sometimes like N—and both sides feel familiar.\n\nBorder S/N: many people here see S and N flip on different MBTI tests.',
      ja: '具体的に集めつつ直感的なつながりも掴む。状況でSにもNにも寄る。両方の世界が馴染み深い。\n\n境界：MBTIでS/Nが入れ替わる経験がある人が多い。',
      zhCN: '既用具体方式收集信息，也能抓住直觉层面的联系。有时像 S 一样具体，有时像 N 一样抽象。\n\n边界型：做 MBTI 时 S/N 常摇摆的人不少。',
      zhTW: '既用具體方式收集資訊，也能抓住直覺層面的連結。有時像 S 一樣具體，有時像 N 一樣抽象。\n\n邊界型：做 MBTI 時 S/N 常搖擺的人不少。',
      vi: 'Thu thập cụ thể nhưng cũng bắt mối liên kết trực giác. Đôi khi như S, đôi khi như N.\n\nRanh giới: hay thấy S/N đổi khi làm MBTI.',
      id: 'Kumpulkan konkret tapi juga tangkap hubungan intuitif. Kadang seperti S, kadang seperti N.\n\nPerbatasan: sering lihat S/N berubah di tes MBTI.',
    }),
    characteristics: T({
      ko: '정보 수집: 구체 정보와 패턴 인식 동시 활용. 강점: 적응력·실용과 창의 병행. 약점: 어느 쪽인지 헷갈릴 수 있음',
      en: 'Input: concrete detail + pattern recognition. Strengths: adaptability; both practical and creative. Weakness: may feel unsure which side you are.',
      ja: '収集：具体とパターンの両方。強み：適応力・実用と創造。弱み：どちらか迷うことも。',
      zhCN: '信息：具体信息与模式并用。优势：适应力、务实与创意兼顾。劣势：可能搞不清自己偏哪边。',
      zhTW: '資訊：具體資訊與模式並用。優勢：適應力、務實與創意兼顧。劣勢：可能搞不清自己偏哪邊。',
      vi: 'Thu thập: chi tiết + mẫu. Điểm mạnh: thích nghi; thực tế và sáng tạo. Điểm yếu: đôi khi không chắc mình thuộc bên nào.',
      id: 'Input: detail konkret + pola. Kekuatan: adaptasi; praktis dan kreatif. Kelemahan: kadang bingung pihak mana.',
    }),
    goodMatch: T({
      ko: '"당신은 통역사입니다. S와 N 사이에서 서로를 이해하도록 돕는 역할을 자연스럽게 합니다"',
      en: '"You are a translator—naturally helping S and N understand each other."',
      ja: '「あなたは通訳。SとNのあいだで自然に橋をかける。」',
      zhCN: '「你是翻译官，自然帮 S 和 N 互相理解。」',
      zhTW: '「你是翻譯官，自然幫 S 和 N 互相理解。」',
      vi: '"Bạn như phiên dịch—giúp S và N hiểu nhau."',
      id: '"Kamu seperti penerjemah—membantu S dan N saling paham."',
    }),
    badMatch: T({
      ko: '마케터, 전략 기획자, 컨설턴트, 심리상담사, 작가',
      en: 'Marketer, strategist, consultant, counselor, writer',
      ja: 'マーケター、戦略企画、コンサル、カウンセラー、作家',
      zhCN: '营销、战略策划、顾问、心理咨询师、作家',
      zhTW: '行銷、策略企畫、顧問、心理諮商師、作家',
      vi: 'Marketing, chiến lược, tư vấn, tư vấn tâm lý, nhà văn',
      id: 'Marketing, perencana strategi, konselor, penulis',
    }),
    shareLine: T({
      ko: '나의 N지수는 {nPercent}% 🌗 S도 N도 아닌 경계인. MBTI 할 때마다 결과 다른 사람 → 너는 몇 %야?',
      en: 'My N index is {nPercent}% 🌗 Border—not quite S or N. MBTI keeps shifting—what is yours?',
      ja: '私のN指数は{nPercent}% 🌗どちらでもない境界。MBTIで結果が変わる人 → あなたは？',
      zhCN: '我的 N 指数是 {nPercent}% 🌗 边界型，MBTI 结果常变的人 → 你呢？',
      zhTW: '我的 N 指數是 {nPercent}% 🌗 邊界型，MBTI 結果常變的人 → 你呢？',
      vi: 'Chỉ số N {nPercent}% 🌗 Ranh giới—kết quả MBTI hay đổi → bạn?',
      id: 'Indeks N {nPercent}% 🌗 Perbatasan—hasil MBTI suka berubah → kamu?',
    }),
  },
  {
    type: 'Type4',
    emoji: '🌀',
    title: T({
      ko: '패턴을 보는 사람, 약한 직관형 (7~8점)',
      en: 'Pattern-seer — mild intuition (7–8 pts)',
      ja: 'パターンが見える、弱めの直感型（7〜8点）',
      zhCN: '看见模式的人，偏弱直觉型（7~8 分）',
      zhTW: '看見模式的人，偏弱直覺型（7~8 分）',
      vi: 'Thấy mẫu—trực giác nhẹ (7–8 điểm)',
      id: 'Melihat pola—intuisi ringan (7–8 poin)',
    }),
    shortDescription: T({
      ko: '"당신은 직관적이지만 현실 감각도 잃지 않은 실용적인 N입니다."',
      en: '"You are intuitive yet still grounded—practical N."',
      ja: '「直感的だけど現実感も失わない、実用派のN。」',
      zhCN: '「你有直觉，但没丢掉现实感——务实的 N。」',
      zhTW: '「你有直覺，但沒丟掉現實感——務實的 N。」',
      vi: '"Trực giác nhưng vẫn thực tế—N kiểu ứng dụng."',
      id: '"Intuitif tapi tetap realistis—N yang praktis."',
    }),
    indexBand: T({
      ko: 'N 58~67% / S 33~42%',
      en: 'N 58–67% / S 33–42%',
      ja: 'N 58〜67% / S 33〜42%',
      zhCN: 'N 58~67% / S 33~42%',
      zhTW: 'N 58~67% / S 33~42%',
      vi: 'N 58–67% / S 33–42%',
      id: 'N 58–67% / S 33–42%',
    }),
    description: T({
      ko: '눈앞의 사실보다 그 뒤에 숨겨진 패턴이나 연결고리를 먼저 발견하는 편이지만, 완전히 비현실적인 상상에 빠지지는 않습니다. 아이디어를 내면서도 현실 적용 가능성을 함께 고려하는 균형 잡힌 N입니다.\n\n약한 N의 특징: 책의 목차를 먼저 보는 사람. 지도보다 전체 지형을 먼저 파악하는 사람.\nN과 S의 갈등: S형이 "너무 뜬구름 잡는다"고 할 때 억울한 이유가 있습니다. 당신은 나름 현실적입니다.',
      en: 'You notice patterns and links behind the facts, not only the surface—without drifting into pure fantasy. You balance ideas with feasibility.\n\nMild N: checks the table of contents first; grasps terrain before the map.\nWith S: when they say “too head‑in‑the‑clouds,” it can feel unfair—you are still realistic.',
      ja: '事実の裏のパターンやつながりを先に見るが、空想に溺れない。アイデアと実現可能性のバランス型N。\n\n弱めN：目次を先に見る。地図より地形を先に掴む。\nSとの摩擦：「夢見がち」と言われても、あなたは現実的な側面がある。',
      zhCN: '你更先看到事实背后的模式与关联，但不会完全飘在空想里；提想法也会考虑落地性。\n\n偏弱 N：先看目录；先把握地形再看地图。\n与 S：被说「不接地气」时你可能委屈——你其实挺务实。',
      zhTW: '你更先看到事實背後的模式與關聯，但不會完全飄在空想裡；提想法也會考慮落地性。\n\n偏弱 N：先看目錄；先掌握地形再看地圖。\n與 S：被說「不接地氣」時你可能委屈——你其實挺務實。',
      vi: 'Bạn thấy mẫu và mối liên hệ sau sự kiện, không chỉ bề mặt—vẫn cân nhắc khả thi.\n\nN nhẹ: xem mục lục trước; nắm địa hình trước bản đồ.\nVới S: khi bị nói “mơ mộng” có thể oan—bạn vẫn thực tế.',
      id: 'Kamu lihat pola di balik fakta—tanpa hilang di fantasi; ide tetap cek kelayakan.\n\nN ringan: baca daftar isi dulu; pahami medan sebelum peta.\nDengan S: dikatakan “terlalu idealis” bisa terasa tidak adil—kamu masih realistis.',
    }),
    characteristics: T({
      ko: '정보 수집: 패턴·가능성 중심, 현실 데이터도 참고. 강점: 창의적 해결+현실 검증. 약점: 세부 놓치거나 미래에 더 집중',
      en: 'Input: patterns & possibilities, still using real‑world data. Strengths: creative fixes + reality checks. Weakness: can miss details or over‑focus on the future.',
      ja: '収集：パターン・可能性中心だが現実データも。強み：創造的解決＋実証。弱み：細部抜け・未来寄り。',
      zhCN: '信息：重模式与可能，也参考现实数据。优势：创意解决+现实检验。劣势：易漏细节或更关注未来。',
      zhTW: '資訊：重模式與可能，也參考現實資料。優勢：創意解決+現實檢驗。劣勢：易漏細節或更關注未來。',
      vi: 'Thu thập: mẫu & khả năng, vẫn dùng dữ liệu thực. Điểm mạnh: sáng tạo + kiểm thực tế. Điểm yếu: sót chi tiết hoặc nhìn tương lai nhiều hơn.',
      id: 'Input: pola & kemungkinan, tetap pakai data nyata. Kekuatan: solusi kreatif + cek realitas. Kelemahan: lewatkan detail atau fokus masa depan.',
    }),
    goodMatch: T({
      ko: '"아이디어를 낼 때 구체적인 첫 번째 실행 단계를 함께 제시해보세요. S형 동료의 신뢰를 얻는 가장 빠른 방법입니다"',
      en: '"When you pitch an idea, add one concrete first step—that wins S colleagues fastest."',
      ja: '「アイデアを出すとき、最初の具体的一歩も添えるとS型の信頼を得やすい。」',
      zhCN: '「提想法时附带具体的第一步，最容易赢得 S 型同事信任。」',
      zhTW: '「提想法時附帶具體的第一步，最容易贏得 S 型同事信任。」',
      vi: '"Khi đưa ý tưởng, thêm một bước đầu cụ thể—nhanh nhất để được đồng nghiệp kiểu S tin."',
      id: '"Saat mengajukan ide, tambahkan satu langkah pertama yang konkret—itulah cara tercepat dapat kepercayaan rekan tipe S."',
    }),
    badMatch: T({
      ko: 'UX 디자이너, 전략 기획자, 경영 컨설턴트, 스타트업 창업자, 연구원',
      en: 'UX designer, strategist, management consultant, startup founder, researcher',
      ja: 'UXデザイナー、戦略企画、経営コンサル、起業家、研究者',
      zhCN: 'UX 设计师、战略策划、管理咨询、创业者、研究员',
      zhTW: 'UX 設計師、策略企畫、管理顧問、創業者、研究員',
      vi: 'UX designer, chiến lược, tư vấn quản trị, founder startup, nhà nghiên cứu',
      id: 'Desainer UX, ahli strategi, konsultan manajemen, pendiri startup, peneliti',
    }),
    shareLine: T({
      ko: '나의 N지수는 {nPercent}% 🌀 약한 N. 직관적이지만 현실 감각도 있는 실용파 → 너는 몇 %야?',
      en: 'My N index is {nPercent}% 🌀 Mild N—intuitive but still practical. Yours?',
      ja: '私のN指数は{nPercent}% 🌀弱めN。直感派だけど現実感もある実用派 → あなたは？',
      zhCN: '我的 N 指数是 {nPercent}% 🌀 偏弱 N，有直觉也务实 → 你呢？',
      zhTW: '我的 N 指數是 {nPercent}% 🌀 偏弱 N，有直覺也務實 → 你呢？',
      vi: 'Chỉ số N {nPercent}% 🌀 N nhẹ—trực giác nhưng thực tế → bạn?',
      id: 'Indeks N {nPercent}% 🌀 N ringan—intuitif tapi praktis → kamu?',
    }),
  },
  {
    type: 'Type5',
    emoji: '🔮',
    title: T({
      ko: '연결고리가 보이는 사람, 강한 직관형 (9~10점)',
      en: 'Strong intuition—connections stand out (9–10 pts)',
      ja: 'つながりが見える、強い直感型（9〜10点）',
      zhCN: '看见关联的人，强直觉型（9~10 分）',
      zhTW: '看見關聯的人，強直覺型（9~10 分）',
      vi: 'Trực giác mạnh—thấy mối liên hệ (9–10 điểm)',
      id: 'Intuisi kuat—koneksi menonjol (9–10 poin)',
    }),
    shortDescription: T({
      ko: '"당신은 분명한 직관형입니다. 남들이 못 보는 패턴이 보입니다."',
      en: '"You are clearly intuitive—you see patterns others miss."',
      ja: '「はっきり直観型。人が見えないパターンが見える。」',
      zhCN: '「你是明显的直觉型，能看见别人看不到的模式。」',
      zhTW: '「你是明顯的直覺型，能看見別人看不到的模式。」',
      vi: '"Rõ ràng trực giác—bạn thấy mẫu người khác bỏ lỡ."',
      id: '"Jelas intuitif—kamu melihat pola yang orang lain lewatkan."',
    }),
    indexBand: T({
      ko: 'N 75~83% / S 17~25%',
      en: 'N 75–83% / S 17–25%',
      ja: 'N 75〜83% / S 17〜25%',
      zhCN: 'N 75~83% / S 17~25%',
      zhTW: 'N 75~83% / S 17~25%',
      vi: 'N 75–83% / S 17–25%',
      id: 'N 75–83% / S 17–25%',
    }),
    description: T({
      ko: '아직 일어나지 않은 일을 예측하거나, 전혀 관계없어 보이는 두 가지를 연결하는 능력이 탁월합니다. 직접 경험보다 개념과 이론으로 세상을 이해하며, 새로운 가능성을 탐색하는 것에서 에너지를 얻습니다. 가끔 현실적인 세부 사항을 놓쳐서 "뜬구름 잡는다"는 말을 들을 수 있지만, 사실 당신은 남들이 아직 못 보는 것을 먼저 보고 있는 겁니다.\n\n강한 N의 특징: 설명서 없이 먼저 조립해보는 사람. 지도 없이 방향 감각으로 길을 찾는 사람.',
      en: 'You predict what has not happened yet and connect things that look unrelated. You understand the world through concepts and theory more than raw experience, and you draw energy from exploring possibilities. You may be called “head‑in‑the‑clouds” when details slip—but you often see what others have not yet.\n\nStrong N: tries assembly without the manual; navigates by feel before the map.',
      ja: '未発の出来事を予測し、無関係に見えるものをつなぐ。経験より概念で世界を理解し、可能性探索にエネルギーを得る。細部を落として「夢見がち」と言われても、先に見えていることが多い。\n\n強いN：説明書なしで組み立てる。地図より感覚で道を探す。',
      zhCN: '你能预测尚未发生的事，把看似无关的事物联系起来。更靠概念与理论理解世界，从探索可能中获得能量。细节偶尔漏掉会被说「飘」，但你常常先看到别人还没看见的。\n\n强 N：不看说明书先组装；凭方向感找路。',
      zhTW: '你能預測尚未發生的事，把看似無關的事物連結起來。更靠概念與理論理解世界，從探索可能中獲得能量。細節偶爾漏掉會被說「飄」，但你常常先看見別人還沒看見的。\n\n強 N：不看說明書先組裝；憑方向感找路。',
      vi: 'Dự đoán điều chưa xảy ra, nối hai thứ tưởng không liên quan. Hiểu thế giới bằng khái niệm hơn trải nghiệm thô. Bị nói “mơ mộng” khi sót chi tiết—nhưng bạn thường thấy trước người khác.\n\nN mạnh: lắp thử không cần sách; đi đường bằng cảm giác hơn bản đồ.',
      id: 'Memprediksi yang belum terjadi, menghubungkan hal yang tampak tak terkait. Memahami dunia lewat konsep lebih dari pengalaman mentah. Disebut “idealistis” saat detail terlewat—tapi sering kamu melihat duluan.\n\nN kuat: rakit tanpa manual; navigasi dengan feeling.',
    }),
    characteristics: T({
      ko: '정보 수집: 패턴·가능성·의미·연결 중심, 직관이 먼저. 강점: 혁신·미래 예측·개념 단순화. 약점: 세부·현실 검증·실행 에너지',
      en: 'Input: patterns, possibilities, meaning, links—intuition leads. Strengths: innovation, foresight, simplifying ideas. Weakness: details, reality checks, execution energy.',
      ja: '収集：パターン・可能性・意味・つながり中心、直感が先。強み：革新・先読み・概念の単純化。弱み：細部・現実確認・実行エネルギー。',
      zhCN: '信息：重模式、可能、意义与关联，直觉先行。优势：创新、前瞻、简化概念。劣势：细节、现实检验、执行精力。',
      zhTW: '資訊：重模式、可能、意義與關聯，直覺先行。優勢：創新、前瞻、簡化概念。劣勢：細節、現實檢驗、執行精力。',
      vi: 'Thu thập: mẫu, khả năng, ý nghĩa, liên kết—trực giác trước. Điểm mạnh: đổi mới, dự báo, đơn giản hóa. Điểm yếu: chi tiết, kiểm thực tế, năng lượng thực hiện.',
      id: 'Input: pola, kemungkinan, makna, koneksi—intuisi dulu. Kekuatan: inovasi, antisipasi, menyederhanakan. Kelemahan: detail, cek realitas, energi eksekusi.',
    }),
    goodMatch: T({
      ko: '"훌륭한 아이디어가 있다면 그것을 실행할 S형 파트너를 찾으세요. 비저너리 + 실행자 조합이 세상을 바꿉니다"',
      en: '"If the idea is big, pair with an S partner who executes—visionary + doer changes the world."',
      ja: '「素晴らしいアイデアなら、実行するS型パートナーを。ビジョナリー＋実行者が世界を変える。」',
      zhCN: '「有好想法就找一个能执行的 S 型伙伴——愿景家加执行者能改变世界。」',
      zhTW: '「有好想法就找一個能執行的 S 型夥伴——願景家加執行者能改變世界。」',
      vi: '"Ý tưởng lớn cần đối tác kiểu S để làm—tầm nhìn + người làm đổi thế giới."',
      id: '"Ide besar cari pasangan tipe S yang mengeksekusi—visioner + pelaksana mengubah dunia."',
    }),
    badMatch: T({
      ko: '철학자, 발명가, 소설가, AI 연구자, 스타트업 비저너리',
      en: 'Philosopher, inventor, novelist, AI researcher, startup visionary',
      ja: '哲学者、発明家、小説家、AI研究者、スタートアップのビジョナリー',
      zhCN: '哲学家、发明家、小说家、AI 研究者、创业愿景者',
      zhTW: '哲學家、發明家、小說家、AI 研究者、創業願景者',
      vi: 'Triết gia, nhà phát minh, tiểu thuyết gia, nghiên cứu AI, nhà tầm nhìn startup',
      id: 'Filsuf, penemu, novelis, peneliti AI, visioner startup',
    }),
    shareLine: T({
      ko: '나의 N지수는 {nPercent}% 🔮 강한 N. 남들이 못 보는 패턴이 보이는 사람 → 너는 몇 %야?',
      en: 'My N index is {nPercent}% 🔮 Strong N—I see patterns others miss. Yours?',
      ja: '私のN指数は{nPercent}% 🔮強いN。人が見えないパターンが見える → あなたは？',
      zhCN: '我的 N 指数是 {nPercent}% 🔮 强 N，能看见别人看不见的模式 → 你呢？',
      zhTW: '我的 N 指數是 {nPercent}% 🔮 強 N，能看見別人看不見的模式 → 你呢？',
      vi: 'Chỉ số N {nPercent}% 🔮 N mạnh—thấy mẫu người khác không thấy → bạn?',
      id: 'Indeks N {nPercent}% 🔮 N kuat—lihat pola yang orang lain tidak → kamu?',
    }),
  },
  {
    type: 'Type6',
    emoji: '✨',
    title: T({
      ko: '상상이 현실보다 선명한, 진성 직관형 (11~12점)',
      en: 'Pure intuition—imagination brighter than reality (11–12 pts)',
      ja: '想像が現実より鮮明、純直感型（11〜12点）',
      zhCN: '想象比现实更鲜明，典型直觉型（11~12 分）',
      zhTW: '想像比現實更鮮明，典型直覺型（11~12 分）',
      vi: 'Trực giác thuần—tưởng tượng rõ hơn thực tế (11–12 điểm)',
      id: 'Intuisi murni—imajinasi lebih jelas dari realitas (11–12 poin)',
    }),
    shortDescription: T({
      ko: '"당신은 거의 완전한 직관형입니다. 미래와 가능성이 현재보다 선명하게 보입니다."',
      en: '"You are almost fully intuitive—future and possibilities feel more vivid than the present."',
      ja: '「ほぼ完全な直感型。未来と可能性が今より鮮明に見える。」',
      zhCN: '「你几乎是纯粹的直觉型：未来和可能性比当下更清晰。」',
      zhTW: '「你幾乎是純粹的直覺型：未來和可能性比當下更清晰。」',
      vi: '"Gần như hoàn toàn trực giác—tương lai và khả năng rõ hơn hiện tại."',
      id: '"Hampir sepenuhnya intuitif—masa depan dan kemungkinan lebih jelas dari sekarang."',
    }),
    indexBand: T({
      ko: 'N 92~100% / S 0~8%',
      en: 'N 92–100% / S 0–8%',
      ja: 'N 92〜100% / S 0〜8%',
      zhCN: 'N 92~100% / S 0~8%',
      zhTW: 'N 92~100% / S 0~8%',
      vi: 'N 92–100% / S 0–8%',
      id: 'N 92–100% / S 0–8%',
    }),
    description: T({
      ko: '현재보다 미래를, 사실보다 의미를, 경험보다 개념을 먼저 처리하는 사람입니다. 아직 존재하지 않는 것을 상상하는 능력이 탁월하고, 패턴과 연결고리를 남들보다 훨씬 빠르게 발견합니다. 가끔 현실적인 세부 사항을 놓쳐서 실수하기도 하지만, 그것은 당신의 뇌가 더 큰 그림을 처리하느라 바쁘기 때문입니다.\n\n진성 N의 특징: 멍 때리다 갑자기 아이디어가 나오는 사람. 꿈이 구체적이고 생생한 사람.\nS와의 갈등: 진성 S에게 "현실적으로 생각해"라는 말을 가장 많이 듣는 유형.',
      en: 'You process future before present, meaning before bare facts, concepts before raw experience. You imagine what does not yet exist and spot patterns and links faster than most. Details may slip because your brain is busy with the big picture.\n\nPure N: ideas strike while spacing out; dreams feel concrete and vivid.\nWith S: you hear “be realistic” most from strong S types.',
      ja: '今より未来、事実より意味、経験より概念を先に処理する。まだないものを想像し、パターンを速く掴む。細部を落とすのは大局を処理しているから。\n\n純N：ぼーっとしていて急にアイデア。夢が具体的で鮮やか。\nSとの摩擦：純Sから「現実的に」と言われやすい。',
      zhCN: '你优先处理未来而非当下、意义而非裸事实、概念而非粗经验。擅长想象尚不存在之物，更快发现模式与关联。漏掉细节是因为大脑在处理大图景。\n\n典型 N：发呆时灵感突袭；梦境具体生动。\n与 S：常被务实型说「现实点」。',
      zhTW: '你優先處理未來而非當下、意義而非裸事實、概念而非粗經驗。擅長想像尚不存在之物，更快發現模式與關聯。漏掉細節是因為大腦在處理大圖景。\n\n典型 N：發呆時靈感突襲；夢境具體生動。\n與 S：常被務實型說「現實點」。',
      vi: 'Ưu tiên tương lai hơn hiện tại, ý nghĩa hơn sự kiện trần, khái niệm hơn trải nghiệm thô. Tưởng tượng điều chưa có, thấy mẫu nhanh hơn. Sót chi tiết vì não đang xử lý bức tranh lớn.\n\nN thuần: ý tưởng đến khi thẫn thờ; giấc mơ sống động.\nVới S: hay nghe “thực tế đi” từ kiểu S mạnh.',
      id: 'Memproses masa depan sebelum sekarang, makna sebelum fakta mentah, konsep sebelum pengalaman kasar. Membayangkan yang belum ada, melihat pola lebih cepat. Detail terlewat karena otak sibuk gambar besar.\n\nN murni: ide muncul saat melamun; mimpi terasa nyata.\nDengan S: sering dengar “pikir realistis” dari S kuat.',
    }),
    characteristics: T({
      ko: '정보 수집: 직관이 전부, 감각 정보는 직관으로 재해석. 강점: 상상력·미래 지향·패턴·혁신. 약점: 현실·세부·실행',
      en: 'Input: intuition first; sensory data is reinterpreted through it. Strengths: imagination, future focus, patterning, innovation. Weakness: reality, details, execution.',
      ja: '収集：直感が主。感覚情報も直感で再解釈。強み：想像力・未来志向・パターン・革新。弱み：現実・細部・実行。',
      zhCN: '信息：直觉优先，感官信息经直觉再诠释。优势：想象力、未来导向、模式、创新。劣势：现实、细节、执行。',
      zhTW: '資訊：直覺優先，感官資訊經直覺再詮釋。優勢：想像力、未來導向、模式、創新。劣勢：現實、細節、執行。',
      vi: 'Thu thập: trực giác trước; dữ liệu giác quan được tái diễn giải qua đó. Điểm mạnh: tưởng tượng, hướng tương lai, mẫu, đổi mới. Điểm yếu: thực tế, chi tiết, thực hiện.',
      id: 'Input: intuisi dulu; data indera ditafsir ulang lewat intuisi. Kekuatan: imajinasi, fokus masa depan, pola, inovasi. Kelemahan: realitas, detail, eksekusi.',
    }),
    goodMatch: T({
      ko: '"당신의 아이디어를 실현하려면 현실적인 첫 번째 발걸음이 필요합니다. 오늘 하루만 S처럼 생각해보세요"',
      en: '"To make ideas real, you need a realistic first step—try thinking like S for just today."',
      ja: '「アイデアを形にするには現実的な一歩が必要。今日一日だけSのように考えてみて。」',
      zhCN: '「要把想法落地，需要现实的第一步——今天就试着像 S 一样思考。」',
      zhTW: '「要把想法落地，需要現實的第一步——今天就試著像 S 一樣思考。」',
      vi: '"Để biến ý thành hiện thực cần bước đầu thực tế—thử nghĩ như S chỉ hôm nay."',
      id: '"Untuk mewujudkan ide perlu langkah pertama yang realistis—coba berpikir seperti S hari ini saja."',
    }),
    badMatch: T({
      ko: '선구자적 과학자, SF 작가, 게임 시나리오 작가, 혁신 전략가, 예술가',
      en: 'Pioneer scientist, SF writer, game narrative designer, innovation strategist, artist',
      ja: '先駆的科学者、SF作家、ゲームシナリオ、革新戦略家、アーティスト',
      zhCN: '先驱科学家、科幻作家、游戏剧本、创新战略家、艺术家',
      zhTW: '先驅科學家、科幻作家、遊戲劇本、創新策略家、藝術家',
      vi: 'Nhà khoa học tiên phong, nhà văn SF, kịch bản game, chiến lược đổi mới, nghệ sĩ',
      id: 'Ilmuwan perintis, penulis SF, penulis naratif game, ahli strategi inovasi, seniman',
    }),
    shareLine: T({
      ko: '나의 N지수는 {nPercent}% ✨ 진성 N. 현실보다 상상이 더 선명한 사람 ㅋㅋ → 너는 몇 %야?',
      en: 'My N index is {nPercent}% ✨ Pure N—imagination beats reality 😄 Yours?',
      ja: '私のN指数は{nPercent}% ✨純N。現実より想像のほうが鮮明 → あなたは？',
      zhCN: '我的 N 指数是 {nPercent}% ✨ 典型 N，想象比现实更鲜明 → 你呢？',
      zhTW: '我的 N 指數是 {nPercent}% ✨ 典型 N，想像比現實更鮮明 → 你呢？',
      vi: 'Chỉ số N {nPercent}% ✨ N thuần—tưởng tượng rõ hơn thực tế → bạn?',
      id: 'Indeks N {nPercent}% ✨ N murni—imajinasi lebih jelas dari nyata → kamu?',
    }),
  },
];
