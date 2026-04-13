/** 나를 제일 잘 아는 친구는? — phase3-best-friend-quiz (7 locales) */

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

export interface Phase3BestFriendQuizQuestion {
  id: number;
  question: Record<string, string>;
  options: Record<string, string>[];
}

export interface Phase3BestFriendQuizResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  levelLabel: Record<string, string>;
  oneLiner: Record<string, string>;
}

export interface Phase3BestFriendQuizPayload {
  /** 출제자 표시 이름 */
  n: string;
  /** 질문 순서 Q1..Q10에 대응, 각 값 0~3 (A~D) */
  a: number[];
}

export function encodeQuizPayload(p: Phase3BestFriendQuizPayload): string {
  const json = JSON.stringify(p);
  const bytes = new TextEncoder().encode(json);
  let bin = '';
  bytes.forEach((b) => {
    bin += String.fromCharCode(b);
  });
  return btoa(bin);
}

export function decodeQuizPayload(raw: string): Phase3BestFriendQuizPayload | null {
  try {
    const s = raw.trim();
    const bin = atob(s);
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    const json = new TextDecoder().decode(bytes);
    const o = JSON.parse(json) as Phase3BestFriendQuizPayload;
    if (typeof o.n !== 'string' || !Array.isArray(o.a)) return null;
    if (o.a.length !== 10) return null;
    if (!o.a.every((x) => typeof x === 'number' && x >= 0 && x <= 3)) return null;
    return o;
  } catch {
    return null;
  }
}

export function formatQuestionWithName(
  template: Record<string, string>,
  locale: string,
  name: string
): string {
  const loc = locale as keyof typeof template;
  const text = template[loc] || template.ko;
  return text.replace(/\{name\}/g, name);
}

export const phase3BestFriendQuizQuestions: Phase3BestFriendQuizQuestion[] = [
  {
    id: 1,
    question: L(
      '{name}의 MBTI는?',
      "What's {name}'s MBTI?",
      '{name}さんのMBTIは？',
      '{name} 的 MBTI 是？',
      '{name} 的 MBTI 是？',
      'MBTI của {name} là gì?',
      'MBTI {name}?'
    ),
    options: [
      L(
        'ENFP / ENFJ / ESFP / ESFJ (활발한 E 계열)',
        'ENFP / ENFJ / ESFP / ESFJ (outgoing E types)',
        'ENFP / ENFJ / ESFP / ESFJ（明るいE系）',
        'ENFP / ENFJ / ESFP / ESFJ（外向 E 型）',
        'ENFP / ENFJ / ESFP / ESFJ（外向 E 型）',
        'ENFP / ENFJ / ESFP / ESFJ (E hướng ngoại, sôi nổi)',
        'ENFP / ENFJ / ESFP / ESFJ (tipe E yang ceria)'
      ),
      L(
        'ENTP / ENTJ / ESTP / ESTJ (추진력 있는 E 계열)',
        'ENTP / ENTJ / ESTP / ESTJ (driven E types)',
        'ENTP / ENTJ / ESTP / ESTJ（推進力のあるE系）',
        'ENTP / ENTJ / ESTP / ESTJ（行动力强的 E 型）',
        'ENTP / ENTJ / ESTP / ESTJ（行動力強的 E 型）',
        'ENTP / ENTJ / ESTP / ESTJ (E hướng ngoại, quyết đoán)',
        'ENTP / ENTJ / ESTP / ESTJ (tipe E yang tegas dan driving)'
      ),
      L(
        'INFP / INFJ / ISFP / ISFJ (조용한 I 계열)',
        'INFP / INFJ / ISFP / ISFJ (quiet I types)',
        'INFP / INFJ / ISFP / ISFJ（静かなI系）',
        'INFP / INFJ / ISFP / ISFJ（内向 I 型）',
        'INFP / INFJ / ISFP / ISFJ（內向 I 型）',
        'INFP / INFJ / ISFP / ISFJ (I hướng nội, trầm)',
        'INFP / INFJ / ISFP / ISFJ (tipe I yang pendiam)'
      ),
      L(
        'INTP / INTJ / ISTP / ISTJ (분석적인 I 계열)',
        'INTP / INTJ / ISTP / ISTJ (analytical I types)',
        'INTP / INTJ / ISTP / ISTJ（分析的なI系）',
        'INTP / INTJ / ISTP / ISTJ（偏分析的 I 型）',
        'INTP / INTJ / ISTP / ISTJ（偏分析的 I 型）',
        'INTP / INTJ / ISTP / ISTJ (I hướng nội, phân tích)',
        'INTP / INTJ / ISTP / ISTJ (tipe I yang analitis)'
      ),
    ],
  },
  {
    id: 2,
    question: L(
      '{name}이 스트레스를 풀 때 주로 하는 방법은?',
      'How does {name} usually relieve stress?',
      '{name}さんがストレスを解消するときの主な方法は？',
      '{name} 释放压力时通常怎么做？',
      '{name} 釋放壓力時通常怎麼做？',
      '{name} thường xả stress bằng cách nào?',
      'Biasanya {name} menghilangkan stres dengan cara apa?'
    ),
    options: [
      L('잠을 자거나 집에서 혼자 쉰다', 'Sleep or rest alone at home', '寝るか家で一人で休む', '睡觉或在家独处休息', '睡覺或在家獨處休息', 'Ngủ hoặc nghỉ một mình ở nhà', 'Tidur atau istirahat sendiri di rumah'),
      L('친구를 만나거나 수다를 떤다', 'Meet friends or chat', '友だちに会うかおしゃべりする', '见朋友或聊天', '見朋友或聊天', 'Gặp bạn hoặc tán gẫu', 'Bertemu teman atau ngobrol'),
      L('운동이나 산책 등 몸을 움직인다', 'Exercise or go for a walk', '運動や散歩など体を動かす', '运动或散步等活动身体', '運動或散步等活動身體', 'Tập thể dục hoặc đi bộ', 'Olahraga atau jalan kaki'),
      L('먹방, 쇼핑, 유튜브 등 즐거운 걸 찾는다', 'Food, shopping, YouTube—anything fun', '食べる・買い物・YouTubeなど楽しみを探す', '靠吃、购物、刷视频等找乐子', '靠吃、購物、刷影片等找樂子', 'Ăn, mua sắm, YouTube—tìm niềm vui', 'Makan, belanja, YouTube—hal yang menyenangkan'),
    ],
  },
  {
    id: 3,
    question: L(
      '{name}이 밥 먹을 때 가장 중요하게 여기는 것은?',
      "What's most important to {name} when eating?",
      '{name}さんが食事で一番大事にしていることは？',
      '{name} 吃饭时最看重什么？',
      '{name} 吃飯時最看重什麼？',
      'Khi ăn, điều {name} quan trọng nhất là gì?',
      'Saat makan, hal terpenting bagi {name} adalah?'
    ),
    options: [
      L('맛! 무조건 맛집이어야 한다', 'Taste—must be a great restaurant', '味！絶対に美味しいお店', '味道！必须是美食店', '味道！必須是美食店', 'Vị trí! Phải ngon', 'Rasa! Harus tempat yang enak'),
      L('분위기와 인테리어도 중요하다', 'Ambience and interior matter too', '雰囲気や内装も大事', '氛围和装修也重要', '氛圍和裝潢也重要', 'Không khí và decor cũng quan trọng', 'Suasana dan interior juga penting'),
      L('빠르고 편리하게 해결하면 된다', 'Quick and convenient is fine', '手早く手軽に済ませればOK', '快、方便就行', '快、方便就行', 'Nhanh và tiện là được', 'Cepat dan praktis sudah cukup'),
      L('함께하는 사람이 제일 중요하다', 'Who you eat with matters most', '一緒にいる人が一番大事', '一起吃饭的人最重要', '一起吃飯的人最重要', 'Người cùng ăn là quan trọng nhất', 'Yang penting siapa yang makan bersama'),
    ],
  },
  {
    id: 4,
    question: L(
      '{name}이 가장 싫어하는 상황은?',
      'What situation does {name} hate most?',
      '{name}さんが一番イヤな状況は？',
      '{name} 最讨厌哪种情况？',
      '{name} 最討厭哪種情況？',
      'Tình huống nào {name} ghét nhất?',
      'Situasi apa yang paling tidak disukai {name}?'
    ),
    options: [
      L(
        '계획이 갑자기 바뀌거나 약속이 취소되는 것',
        'Plans suddenly changing or cancellations',
        '予定が急に変わる・約束がキャンセルされること',
        '计划突然改变或约会取消',
        '計畫突然改變或約會取消',
        'Kế hoạch đổi đột ngột hoặc hủy hẹn',
        'Rencana berubah mendadak atau janji dibatalkan'
      ),
      L(
        '시끄럽고 복잡한 장소에 오래 있어야 하는 것',
        'Being stuck a long time in loud, chaotic places',
        'うるさくてごちゃついた場所に長くいること',
        '长时间待在又吵又乱的地方',
        '長時間待在又吵又亂的地方',
        'Phải ở lâu nơi ồn ào, hỗn loạn',
        'Lama berada di tempat ramai dan berantakan'
      ),
      L(
        '결정을 혼자 내려야 하거나 책임이 집중될 때',
        'Having to decide alone or bear all the responsibility',
        '一人で決めなきゃいけない・責任が集中するとき',
        '必须独自做决定或责任都压在身上时',
        '必須獨自做決定或責任都壓在身上時',
        'Phải tự quyết một mình hoặc gánh trách nhiệm',
        'Harus memutuskan sendiri atau tanggung jawab menumpuk'
      ),
      L(
        '혼자 있는 시간이 없이 계속 사람을 만나야 할 때',
        'No alone time—always meeting people',
        '一人の時間がなくずっと人と会うこと',
        '没有独处时间、一直要见人',
        '沒有獨處時間、一直要見人',
        'Không có thời gian riêng—phải gặp người liên tục',
        'Tidak ada waktu sendiri—terus bertemu orang'
      ),
    ],
  },
  {
    id: 5,
    question: L(
      '{name}의 취미나 여가를 보내는 방식은?',
      "How does {name} spend hobbies or free time?",
      '{name}さんの趣味や休日の過ごし方は？',
      '{name} 的爱好或休闲方式？',
      '{name} 的嗜好或休閒方式？',
      '{name} thường dành thời gian rảnh / sở thích thế nào?',
      'Bagaimana {name} menghabiskan hobi atau waktu luang?'
    ),
    options: [
      L('드라마·영화·유튜브 등 영상 콘텐츠 감상', 'Shows, movies, YouTube', 'ドラマ・映画・YouTubeなど動画', '追剧、电影、视频', '追劇、電影、影片', 'Phim, drama, YouTube', 'Drama, film, YouTube'),
      L('운동, 등산, 산책 등 활동적인 것', 'Exercise, hiking, walking', '運動・登山・散歩などアクティブに', '运动、登山、散步等', '運動、登山、散步等', 'Thể thao, leo núi, đi bộ', 'Olahraga, hiking, jalan kaki'),
      L('독서, 그림, 음악 등 취미 활동', 'Reading, art, music', '読書・絵・音楽など趣味', '读书、画画、音乐等', '讀書、畫畫、音樂等', 'Đọc sách, vẽ, nhạc', 'Membaca, gambar, musik'),
      L('게임, 쇼핑, 맛집 탐방 등 즐길 거리 찾기', 'Games, shopping, food hunts', 'ゲーム・買い物・グルメ探しなど', '游戏、购物、探店等', '遊戲、購物、探店等', 'Game, mua sắm, săn quán ngon', 'Game, belanja, hunting kuliner'),
    ],
  },
  {
    id: 6,
    question: L(
      '{name}이 연락할 때 주로 쓰는 방식은?',
      "How does {name} usually stay in touch?",
      '{name}さんが連絡するときの主な方法は？',
      '{name} 联系时主要用什么方式？',
      '{name} 聯絡時主要用什麼方式？',
      '{name} thường liên lạc bằng cách nào?',
      'Biasanya {name} menghubungi lewat apa?'
    ),
    options: [
      L('카카오톡 문자로 주로 연락한다', 'Mostly chat apps / text', '主にチャットアプリ・メッセージ', '主要用聊天软件发消息', '主要用聊天軟體發訊息', 'Chủ yếu nhắn tin / app chat', 'Utamanya chat / pesan teks'),
      L('전화 통화를 선호한다', 'Prefers phone calls', '電話を好む', '更喜欢打电话', '更喜歡打電話', 'Thích gọi điện', 'Lebih suka telepon'),
      L('답장이 좀 느린 편이다 (바쁘거나 귀찮아서)', 'Replies slowly (busy or lazy)', '返信が遅め（忙しい・面倒）', '回复偏慢（忙或懒得回）', '回覆偏慢（忙或懶得回）', 'Trả lời chậm (bận hoặc lười)', 'Balas lambat (sibuk atau malas)'),
      L('읽씹하는 경우가 가끔 있다', 'Sometimes leaves messages on read', 'たまに既読スルーする', '有时会已读不回', '有時會已讀不回', 'Đôi khi đọc mà không trả lời', 'Kadang dibaca tanpa dibalas'),
    ],
  },
  {
    id: 7,
    question: L(
      '{name}이 친구 사이에서 주로 맡는 역할은?',
      "What's {name}'s usual role among friends?",
      '{name}さんが友だちの中で担う役割は？',
      '{name} 在朋友中通常扮演什么角色？',
      '{name} 在朋友中通常扮演什麼角色？',
      'Vai trò của {name} trong nhóm bạn?',
      'Peran {name} di antara teman-teman?'
    ),
    options: [
      L('분위기 메이커, 웃음 담당', 'Mood maker, comic relief', 'ムードメーカー・笑い担当', '气氛担当、搞笑', '氣氛擔當、搞笑', 'Tạo không khí, hài hước', 'Pembawa suasana, lucu'),
      L('조용히 챙겨주는 배려 담당', 'Quietly caring', '静かに気を配る担当', '默默照顾人的', '默默照顧人的', 'Âm thầm quan tâm', 'Peduli tanpa teriak'),
      L('계획 짜고 예약하는 총무 담당', 'Planner, reservations', '計画・予約をする幹事担当', '做计划、订位的总务', '做計畫、訂位的總務', 'Lên kế hoạch, đặt chỗ', 'Yang ngatur rencana & booking'),
      L('솔직한 말 해주는 팩폭 담당', 'Brutally honest friend', 'はっきり言う正直担当', '直言不讳的朋友', '直言不諱的朋友', 'Nói thẳng, không vòng vo', 'Teman yang blak-blakan'),
    ],
  },
  {
    id: 8,
    question: L(
      '{name}이 가장 듣기 싫은 말은?',
      'What phrase does {name} hate hearing most?',
      '{name}さんが一番聞きたくない言葉は？',
      '{name} 最不想听到什么话？',
      '{name} 最不想聽到什麼話？',
      '{name} ghét nghe câu nào nhất?',
      'Kalimat apa yang paling tidak ingin didengar {name}?'
    ),
    options: [
      L('"너 요즘 좀 이기적인 것 같아"', '"You seem selfish lately"', '「最近ちょっと自己中心的だね」', '“你最近有点自私”', '「你最近有點自私」', '"Dạo này bạn hơi ích kỷ"', '"Kamu agak egois akhir-akhir ini"'),
      L('"왜 이렇게 예민해?"', '"Why so sensitive?"', '「なんでそんなに敏感なの？」', '“怎么这么敏感？”', '「怎麼這麼敏感？」', '"Sao nhạy cảm thế?"', '"Kok sensi banget?"'),
      L('"그냥 대충 해, 왜 그렇게 완벽주의야?"', '"Just wing it—why so perfectionist?"', '「適当でいいのに、完璧主義すぎ」', '“随便做做就行，别那么完美主义”', '「隨便做做就行，別那麼完美主義」', '"Làm đại đi, sao perfectionist thế?"', '"Yang penting jadi—kok perfeksionis banget?"'),
      L('"너 표정이 왜 그래? 기분 안 좋아?"', '"What’s with your face? Upset?"', '「なんか顔暗いけど、機嫌悪い？」', '“你脸色怎么不好？不开心？”', '「你臉色怎麼不好？不開心？」', '"Sao mặt thế? Buồn à?"', '"Kok mukanya gitu? Lagi bete?"'),
    ],
  },
  {
    id: 9,
    question: L(
      '{name}이 돈을 쓸 때 성향은?',
      "What's {name}'s spending style?",
      '{name}さんのお金の使い方の傾向は？',
      '{name} 花钱的习惯是？',
      '{name} 花錢的習慣是？',
      'Cách {name} tiêu tiền?',
      'Gaya {name} menghabiskan uang?'
    ),
    options: [
      L('먹는 것에 돈을 아끼지 않는다', "Doesn't skimp on food", '食べることにはお金を惜しまない', '在吃上面不省', '在吃上面不省', 'Ăn uống không tiếc tiền', 'Tidak pelit untuk makan'),
      L('경험(여행, 콘서트 등)에 아낌없이 쓴다', 'Splurges on experiences (travel, concerts)', '体験（旅行・ライブなど）にお金を使う', '愿意为体验（旅行、演唱会等）花钱', '願意為體驗（旅行、演唱會等）花錢', 'Chi nhiều cho trải nghiệm (du lịch, concert)', 'Habiskan untuk pengalaman (travel, konser)'),
      L('외모(옷, 뷰티, 패션)에 투자하는 편이다', 'Invests in looks (clothes, beauty)', '見た目（服・美容・ファッション）に投資する', '在外表（穿搭美妆）上投入多', '在外表（穿搭美妝）上投入多', 'Đầu tư ngoại hình (quần áo, làm đẹp)', 'Invest di penampilan (baju, beauty)'),
      L('최대한 아끼고 모으는 편이다', 'Saves as much as possible', 'なるべく貯めて節約する', '尽量省、爱存钱', '儘量省、愛存錢', 'Tiết kiệm và tích lũy', 'Hemat dan menabung'),
    ],
  },
  {
    id: 10,
    question: L(
      '{name}이 화가 났을 때 주로 하는 행동은?',
      'What does {name} usually do when angry?',
      '{name}さんが怒ったときの主な行動は？',
      '{name} 生气时通常会怎么做？',
      '{name} 生氣時通常會怎麼做？',
      'Khi tức, {name} thường làm gì?',
      'Saat marah, {name} biasanya bagaimana?'
    ),
    options: [
      L('말이 없어지거나 혼자 있으려 한다', 'Goes quiet or wants to be alone', '黙るか一人になりたがる', '不说话或想独处', '不說話或想獨處', 'Im lặng hoặc muốn một mình', 'Diam atau ingin sendiri'),
      L('티를 내지 않으려 하지만 표정에서 바로 드러난다', 'Tries to hide it but face shows it', '隠そうとするが顔に出る', '想装没事但表情藏不住', '想裝沒事但表情藏不住', 'Cố giấu nhưng mặt lộ hết', 'Coba tutupi tapi keliatan di muka'),
      L('직접적으로 "나 지금 화났어"라고 말한다', 'Says directly “I’m mad”', '「今怒ってる」とはっきり言う', '会直接说“我生气了”', '會直接說「我生氣了」', 'Nói thẳng “tôi đang giận”', 'Langsung bilang “aku marah”'),
      L('그 자리에서 바로 이유를 따지고 해결하려 한다', 'Confronts and tries to fix on the spot', 'その場で理由を詰めて解決しようとする', '当场追问原因想解决', '當場追問原因想解決', 'Hỏi nguyên nhân và xử ngay', 'Langsung bahas penyebab dan selesaikan'),
    ],
  },
];

export const phase3BestFriendQuizResults: Phase3BestFriendQuizResult[] = [
  {
    type: 'Type1',
    emoji: '😶',
    title: L(
      '우리 처음 만났나요? 남남 수준',
      'First time meeting? Basically strangers',
      '初対面？他人同士レベル',
      '初次见面？路人水平',
      '初次見面？路人水準',
      'Mới gặp? Kiểu người dưng',
      'Baru kenalan? Kayak orang asing'
    ),
    shortDescription: L(
      '0~1점 · 혹시 이름만 아는 사이 아닌가요?',
      '0–1 correct · Do you only know each other’s names?',
      '0〜1点 · 名前だけの関係では？',
      '0–1 分 · 是不是只知道名字？',
      '0–1 分 · 是不是只知道名字？',
      '0–1 đúng · Chỉ biết tên thôi à?',
      '0–1 benar · Cuma tahu nama saja?'
    ),
    description: L(
      '0~1개 정답이라니, 사실상 처음 만난 사이와 다를 바 없습니다. 같이 밥은 먹었을지 몰라도 서로에 대해 진지하게 알아간 적이 없는 것 같습니다. 그래도 괜찮아요. 이제부터 알아가면 되니까요. 아마도.',
      "With only 0–1 right, you're basically strangers. Maybe you've shared a meal, but you haven't really gotten to know each other. That's okay—you can start now. Probably.",
      '0〜1問正解…ほぼ初対面と同じ。ご飯は食べたかもしれないけど、本気で知り合えていない感じ。大丈夫、これからでも。たぶん。',
      '只对 0–1 题，几乎像刚认识。也许一起吃过饭，但还没认真了解彼此。没关系，从现在开始也行。大概。',
      '只對 0–1 題，幾乎像剛認識。也許一起吃過飯，但還沒認真了解彼此。沒關係，從現在開始也行。大概。',
      'Chỉ đúng 0–1 câu—gần như người lạ. Có thể đã ăn cùng nhưng chưa hiểu nhau thật. Không sao, bắt đầu từ giờ. Có lẽ.',
      'Hanya 0–1 benar—hampir seperti asing. Mungkin pernah makan bareng tapi belum saling kenal sungguhan. Gapapa, mulai sekarang. Mungkin.'
    ),
    levelLabel: L(
      '찐친 레벨: Lv. 1 (남남)',
      'BFF level: Lv. 1 (strangers)',
      '親友レベル: Lv.1（他人）',
      '挚友等级：Lv.1（路人）',
      '摯友等級：Lv.1（路人）',
      'Cấp bạn thân: Lv.1 (người dưng)',
      'Level sahabat: Lv.1 (asing)'
    ),
    oneLiner: L(
      '얼굴은 알지만 성격은 모름',
      'Know the face, not the personality',
      '顔は知ってるけど性格は不明',
      '脸熟，性格不熟',
      '臉熟，性格不熟',
      'Biết mặt, chưa biết tính',
      'Tahu muka, belum tahu kepribadian'
    ),
  },
  {
    type: 'Type2',
    emoji: '😅',
    title: L(
      '아는 척하는 사이, 겉핥기 친구',
      'Surface-level friends',
      'なんちゃって友だち、浅い関係',
      '表面朋友、略懂',
      '表面朋友、略懂',
      'Bạn kiểu “tưởng thân”',
      'Teman setengah mengenal'
    ),
    shortDescription: L(
      '2~3점 · 알 것 같은데 사실 잘 모르는 그 어딘가',
      '2–3 correct · Feels familiar, but you don’t really know them',
      '2〜3点 · 知ってる気がするけど実はよくわからない',
      '2–3 分 · 好像很熟其实不太熟',
      '2–3 分 · 好像很熟其實不太熟',
      '2–3 đúng · Tưởng quen mà không hiểu',
      '2–3 benar · Kayak kenal tapi aslinya enggak'
    ),
    description: L(
      '이름도 알고 몇 번 만난 사이지만, 깊이 있는 대화보다는 가벼운 안부 정도의 관계입니다. 서로에게 관심은 있지만 아직 진짜 친해질 기회가 없었던 것 같습니다. 조금 더 자주 만나봐요!',
      "You know each other's names and have met a few times, but it's mostly small talk—not deep talks. There's interest, but you haven't had a real chance to get close. Meet up more often!",
      '名前は知ってて何度か会ったけど、深い話より軽い挨拶程度。興味はあるけど本音で仲良くなるチャンスがまだ。もっと会おう！',
      '知道名字、见过几次，但多是寒暄，少有深聊。有兴趣但还没真正走近。多约几次吧！',
      '知道名字、見過幾次，但多是寒暄，少有深聊。有興趣但還沒真正走近。多約幾次吧！',
      'Biết tên, gặp vài lần nhưng chỉ xã giao. Có quan tâm nhưng chưa thân sâu. Gặp thêm nhé!',
      'Tahu nama, pernah ketemu tapi cuma basa-basi. Ada minat tapi belum akrab bener. Ketemu lagi!'
    ),
    levelLabel: L(
      '찐친 레벨: Lv. 25 (아는 사이)',
      'BFF level: Lv. 25 (acquaintances)',
      '親友レベル: Lv.25（知り合い）',
      '挚友等级：Lv.25（认识）',
      '摯友等級：Lv.25（認識）',
      'Cấp bạn thân: Lv.25 (quen sơ)',
      'Level sahabat: Lv.25 (kenalan)'
    ),
    oneLiner: L(
      '친하다고 착각하고 있을 수 있음',
      'You might think you’re closer than you are',
      '仲良いと思ってるだけかも',
      '可能误以为很熟',
      '可能誤以為很熟',
      'Có thể tưởng thân hơn thực tế',
      'Mungkin mengira lebih akrab dari aslinya'
    ),
  },
  {
    type: 'Type3',
    emoji: '🙂',
    title: L(
      '그냥 친구, 나쁘지 않음',
      'Regular friends—not bad',
      '普通の友だち、悪くない',
      '普通朋友，还不错',
      '普通朋友，還不錯',
      'Bạn bình thường, cũng ổn',
      'Teman biasa, lumayan'
    ),
    shortDescription: L(
      '4~5점 · 딱 절반. 알기도 하고 모르기도 한 평범한 친구',
      '4–5 correct · Half and half—average friends',
      '4〜5点 · ちょうど半分。普通の友だち',
      '4–5 分 · 一半一半，普通朋友',
      '4–5 分 · 一半一半，普通朋友',
      '4–5 đúng · Một nửa—bạn bình thường',
      '4–5 benar — setengah-setengah, teman biasa'
    ),
    description: L(
      '관계가 나쁘지는 않습니다. 함께 시간을 보내며 어느 정도는 알게 된 사이입니다. 다만 서로의 진짜 속사정까지는 아직 모르는 단계입니다. 찐친까지 가려면 조금 더 솔직한 대화가 필요합니다.',
      "It's not a bad relationship—you've spent time together and know a bit. But you don't know each other's deeper stories yet. A few more honest talks to reach “real BFF.”",
      '関係は悪くない。一緒に過ごしてある程度は知ってる。でも本音まではまだ。本当の親友には、もう少し正直な会話を。',
      '关系不差，一起相处过，有所了解。但还没到掏心掏肺。想成挚友还需要更坦诚的对话。',
      '關係不差，一起相處過，有所了解。但還沒到掏心掏肺。想成摯友還需要更坦誠的對話。',
      'Quan hệ không tệ, đã có thời gian bên nhau. Nhưng chưa hiểu sâu. Cần nói thật hơn để thành bạn thân.',
      'Hubungan lumayan, sudah habiskan waktu bersama. Tapi belum dalam. Perlu obrolan jujur lagi untuk jadi sahabat sejati.'
    ),
    levelLabel: L(
      '찐친 레벨: Lv. 45 (평범한 친구)',
      'BFF level: Lv. 45 (average friends)',
      '親友レベル: Lv.45（普通の友だち）',
      '挚友等级：Lv.45（普通朋友）',
      '摯友等級：Lv.45（普通朋友）',
      'Cấp bạn thân: Lv.45 (bạn bình thường)',
      'Level sahabat: Lv.45 (teman biasa)'
    ),
    oneLiner: L(
      '같이 놀기는 하는데 깊은 얘기는 아직',
      'You hang out, but deep talks are still rare',
      '遊ぶのはあるけど深い話はまだ',
      '能一起玩，深聊还少',
      '能一起玩，深聊還少',
      'Chơi được nhưng chưa sâu',
      'Main bareng ada, obrolan dalam belum'
    ),
  },
  {
    type: 'Type4',
    emoji: '😊',
    title: L(
      '꽤 잘 아는 친구, 거의 다 왔음',
      'You know them well—almost there',
      'かなりよく知ってる友だち、あと少し',
      '挺了解的朋友，快到位了',
      '挺了解的朋友，快到位了',
      'Hiểu khá tốt—gần đỉnh rồi',
      'Cukup paham—hampir maksimal'
    ),
    shortDescription: L(
      '6~7점 · 진짜 친구 맞네요. 생각보다 많이 알고 있었잖아요',
      '6–7 correct · Real friends—you knew more than you thought',
      '6〜7点 · 本当の友だち。思ったより知ってた',
      '6–7 分 · 真朋友，比你想的更了解',
      '6–7 分 · 真朋友，比你想的更了解',
      '6–7 đúng · Bạn thật—biết nhiều hơn tưởng',
      '6–7 benar — teman beneran, tahu lebih dari kira-kira'
    ),
    description: L(
      '함께한 시간이 쌓인 게 느껴집니다. 서로의 취향과 성격을 제법 파악하고 있는 진짜 친구 사이입니다. 찐친까지 3~4개 차이. 조금만 더 관심을 기울이면 최고 등급 달성도 가능합니다.',
      "Time together shows—you get each other's tastes and personalities. You're real friends. Just 3–4 away from top tier; a little more attention and you're there.",
      '一緒に過ごした時間が見える。お互いの好みや性格をかなり把握。本当の友だち。あと3〜4問で最高ランクも狙える。',
      '相处时间感觉得到，彼此品味性格都颇了解，是真朋友。离顶配还差几题，再用心一点就能登顶。',
      '相處時間感覺得到，彼此品味性格都頗了解，是真朋友。離頂配還差幾題，再用心一點就能登頂。',
      'Thời gian bên nhau thấy rõ—hiểu sở thích & tính cách. Bạn thật. Còn 3–4 câu nữa là max.',
      'Waktu bersama kerasa—paham selera & kepribadian. Teman sungguhan. Tinggal 3–4 lagi ke tier tertinggi.'
    ),
    levelLabel: L(
      '찐친 레벨: Lv. 65 (진짜 친구)',
      'BFF level: Lv. 65 (real friends)',
      '親友レベル: Lv.65（本当の友だち）',
      '挚友等级：Lv.65（真朋友）',
      '摯友等級：Lv.65（真朋友）',
      'Cấp bạn thân: Lv.65 (bạn thật)',
      'Level sahabat: Lv.65 (teman sungguhan)'
    ),
    oneLiner: L(
      '믿을 수 있는 친구, 거의 찐친',
      'Reliable—almost BFF level',
      '信頼できる友だち、ほぼ親友',
      '靠谱，快成挚友',
      '靠譜，快成摯友',
      'Đáng tin—gần bạn thân rồi',
      'Bisa dipercaya—hampir sahabat sejati'
    ),
  },
  {
    type: 'Type5',
    emoji: '🥰',
    title: L(
      '거의 찐친, 영혼의 단짝',
      'Almost BFFs—soul buddies',
      'ほぼ親友、ソウルメイト級',
      '几乎挚友，灵魂搭档',
      '幾乎摯友，靈魂搭檔',
      'Gần như bạn thân—tri kỷ',
      'Hampir sahabat jiwa'
    ),
    shortDescription: L(
      '8~9점 · 이 정도면 우리 서로 전생에 아는 사이 아닌가요?',
      '8–9 correct · Were you friends in a past life?',
      '8〜9点 · 前世からの知り合いでは？',
      '8–9 分 · 前世就认识了吧？',
      '8–9 分 · 前世就認識了吧？',
      '8–9 đúng — kiếp trước đã quen nhau?',
      '8–9 benar — kayak kenal dari zaman dulu?'
    ),
    description: L(
      '거의 다 맞혔습니다. MBTI, 취향, 스트레스 해소법까지 꿰뚫고 있는 영혼의 단짝입니다. 하나 틀린 게 아쉽다면, 틀린 문제를 출제자에게 직접 물어보세요. 더 가까워질 기회가 될 수 있습니다.',
      "You got almost everything—MBTI, tastes, stress relief. True soul buddies. Missed one? Ask the host about that question—it could bring you even closer.",
      'ほぼ全問正解。MBTIや好み、ストレス解消までわかってる。一問外したなら、出題者に直接聞いてみて。もっと近づけるかも。',
      '几乎全对，从 MBTI 到喜好、解压方式都懂。差一题？去问出题的人，可能更亲近。',
      '幾乎全對，從 MBTI 到喜好、解壓方式都懂。差一題？去問出題的人，可能更親近。',
      'Gần như hết—từ MBTI đến sở thích, cách xả stress. Thiếu một câu? Hỏi người ra đề, có thể thân hơn.',
      'Hampir semua benar—dari MBTI sampai selera & cara coping. Kurang satu? Tanya yang buat kuis, bisa makin dekat.'
    ),
    levelLabel: L(
      '찐친 레벨: Lv. 88 (영혼의 단짝)',
      'BFF level: Lv. 88 (soul buddies)',
      '親友レベル: Lv.88（ソウルメイト）',
      '挚友等级：Lv.88（灵魂搭档）',
      '摯友等級：Lv.88（靈魂搭檔）',
      'Cấp bạn thân: Lv.88 (tri kỷ)',
      'Level sahabat: Lv.88 (soulmate)'
    ),
    oneLiner: L(
      '거의 찐친, 인생 친구 후보',
      'Almost BFF—life-friend material',
      'ほぼ親友、人生の友候補',
      '几乎人生挚友候选人',
      '幾乎人生摯友候選人',
      'Gần bạn đời rồi',
      'Kandidat teman sehidup'
    ),
  },
  {
    type: 'Type6',
    emoji: '🏆',
    title: L(
      '완벽한 찐친, 전설의 1등',
      'Perfect BFF—legendary #1',
      '完璧な親友、伝説の1位',
      '完美挚友，传说第一',
      '完美摯友，傳說第一',
      'Bạn thân hoàn hảo—huyền thoại',
      'Sahabat sempurna—legenda'
    ),
    shortDescription: L(
      '10점 · 축하합니다! 진짜 찐친입니다',
      '10 correct · Congrats! True BFFs',
      '10問満点 · おめでとう！本物の親友',
      '满分 · 恭喜！真挚友',
      '滿分 · 恭喜！真摯友',
      '10/10 · Chúc mừng! Bạn thân thật',
      '10/10 — Selamat! Sahabat sejati'
    ),
    description: L(
      '10문제 전부 정답! 취향부터 성격, 화났을 때 행동까지 완벽하게 꿰뚫고 있습니다. 이 사람은 절대 놓쳐선 안 될 인생 친구입니다. 출제자님, 이 친구한테 밥 한 번 사세요. 진심으로.',
      "All 10 correct—from tastes to personality to how they act when mad, you nailed it. Don't let this person go. Host: buy them a meal. Seriously.",
      '10問全問正解！好みから性格、怒ったときの行動まで完璧。この人は逃しちゃダメ。出題者、ご飯おごって。マジで。',
      '十题全对！从喜好到性格再到生气时的反应都懂。这人别放手。出题人，请人家吃顿饭吧，真心的。',
      '十題全對！從喜好到性格再到生氣時的反應都懂。這人別放手。出題人，請人家吃頓飯吧，真心的。',
      '10/10! Từ sở thích đến tính cách, lúc giận—bạn hiểu hết. Đừng để mất người này. Người ra đề: mời ăn một bữa. Thật lòng.',
      'Semua benar! Dari selera sampai marah—kamu paham semua. Jangan lepas orang ini. Yang buat kuis: traktir makan. Serius.'
    ),
    levelLabel: L(
      '찐친 레벨: Lv. 99 (전설의 찐친)',
      'BFF level: Lv. 99 (legendary)',
      '親友レベル: Lv.99（伝説の親友）',
      '挚友等级：Lv.99（传说挚友）',
      '摯友等級：Lv.99（傳說摯友）',
      'Cấp bạn thân: Lv.99 (huyền thoại)',
      'Level sahabat: Lv.99 (legendaris)'
    ),
    oneLiner: L(
      '이 사람이 진짜 찐친입니다. 소중히 하세요',
      'This is a real BFF—cherish them',
      'この人が本物の親友。大事にして',
      '这才是真挚友，请珍惜',
      '這才是真摯友，請珍惜',
      'Đây mới là bạn thân thật—trân trọng nhé',
      'Ini sahabat sejati—jaga baik-baik'
    ),
  },
];

export function calculatePhase3BestFriendQuizResult(score: number): string {
  if (score <= 1) return 'Type1';
  if (score <= 3) return 'Type2';
  if (score <= 5) return 'Type3';
  if (score <= 7) return 'Type4';
  if (score <= 9) return 'Type5';
  return 'Type6';
}

export function scoreFriendAnswers(
  payload: Phase3BestFriendQuizPayload,
  answersByQuestionIndex: Record<number, number>
): { score: number; wrongQuestionNumbers: number[] } {
  let score = 0;
  const wrong: number[] = [];
  for (let i = 0; i < 10; i++) {
    const key = i;
    const mine = answersByQuestionIndex[key];
    const expected = payload.a[i];
    if (mine === expected) score += 1;
    else wrong.push(i + 1);
  }
  return { score, wrongQuestionNumbers: wrong };
}
