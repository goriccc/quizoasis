/** 나의 E/I 지수 정밀 측정 — phase3-ei-index-precise-measurement */

export type Phase3EiIndexLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';

function T(t: {
  ko: string;
  en: string;
  ja: string;
  zhCN: string;
  zhTW: string;
  vi: string;
  id: string;
}): Record<Phase3EiIndexLocaleKey, string> {
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

export interface Phase3EiIndexPreciseMeasurementQuestion {
  id: number;
  question: Record<Phase3EiIndexLocaleKey, string>;
  options: {
    text: Record<Phase3EiIndexLocaleKey, string>;
    /** A=I(내향)=0, B=E(외향)=1 */
    score: number;
  }[];
}

export interface Phase3EiIndexPreciseMeasurementResult {
  type: string;
  emoji: string;
  title: Record<Phase3EiIndexLocaleKey, string>;
  shortDescription: Record<Phase3EiIndexLocaleKey, string>;
  description: Record<Phase3EiIndexLocaleKey, string>;
  indexBand: Record<Phase3EiIndexLocaleKey, string>;
  characteristics: Record<Phase3EiIndexLocaleKey, string>;
  /** 에너지 충전 처방 등 */
  goodMatch: Record<Phase3EiIndexLocaleKey, string>;
  /** 찰떡 직업군(쉼표 구분) */
  badMatch: Record<Phase3EiIndexLocaleKey, string>;
  /** SNS 공유 — {ePercent} 치환 */
  shareLine: Record<Phase3EiIndexLocaleKey, string>;
}

/** 원점수(0~12) → E%/I% (기획서 표, T/F 지수와 동일 수치) */
export const PHASE3_EI_SCORE_TO_EI: { e: number; i: number }[] = [
  { e: 0, i: 100 },
  { e: 8, i: 92 },
  { e: 17, i: 83 },
  { e: 25, i: 75 },
  { e: 33, i: 67 },
  { e: 42, i: 58 },
  { e: 50, i: 50 },
  { e: 58, i: 42 },
  { e: 67, i: 33 },
  { e: 75, i: 25 },
  { e: 83, i: 17 },
  { e: 92, i: 8 },
  { e: 100, i: 0 },
];

export function getEiPercentFromRawScore(rawScore: number): { e: number; i: number } {
  const s = Math.max(0, Math.min(12, Math.round(rawScore)));
  return PHASE3_EI_SCORE_TO_EI[s] ?? PHASE3_EI_SCORE_TO_EI[0];
}

export function calculatePhase3EiIndexPreciseMeasurementResult(answers: number[]): string {
  const total = answers.reduce((sum, n) => sum + n, 0);
  if (total <= 2) return 'Type1';
  if (total <= 4) return 'Type2';
  if (total <= 6) return 'Type3';
  if (total <= 8) return 'Type4';
  if (total <= 10) return 'Type5';
  return 'Type6';
}

export const phase3EiIndexPreciseMeasurementQuestions: Phase3EiIndexPreciseMeasurementQuestion[] = [
  {
    id: 1,
    question: T({
      ko: '주말에 아무 계획이 없는 하루. 나는?',
      en: 'A weekend day with zero plans. I…',
      ja: '予定のない週末の一日。私は？',
      zhCN: '周末完全没有安排的一天。我会？',
      zhTW: '週末完全沒有安排的一天。我會？',
      vi: 'Một ngày cuối tuần không có kế hoạch. Tôi…',
      id: 'Akhir pekan tanpa rencana. Aku…',
    }),
    options: [
      {
        text: T({
          ko: '집에서 혼자 쉰다. 아무도 만나지 않는 게 진짜 휴식이다',
          en: 'Stay home alone—seeing no one is real rest for me.',
          ja: '家で一人で休む。誰とも会わないのが本当の休息。',
          zhCN: '在家独处休息。不见人才算真正放松。',
          zhTW: '在家獨處休息。不見人才算真正放鬆。',
          vi: 'Ở nhà một mình—không gặp ai mới là nghỉ thật.',
          id: 'Di rumah sendiri—tidak bertemu siapa pun itu istirahat sejati.',
        }),
        score: 0,
      },
      {
        text: T({
          ko: '누군가에게 연락해서 약속을 잡는다. 혼자 있으면 심심하다',
          en: 'Reach out and make plans—being alone feels boring.',
          ja: '誰かに連絡して予定を入れる。一人は退屈。',
          zhCN: '联系别人约见面。一个人太无聊。',
          zhTW: '聯絡別人約見面。一個人太無聊。',
          vi: 'Nhắn ai đó để hẹn—ở một mình thì chán.',
          id: 'Hubungi orang untuk janji—sendirian membosankan.',
        }),
        score: 1,
      },
    ],
  },
  {
    id: 2,
    question: T({
      ko: '새로운 사람들이 많은 자리에 갔을 때 나는?',
      en: 'In a room full of new people, I…',
      ja: '初対面の人が多い場に行ったとき、私は？',
      zhCN: '来到有很多陌生人的场合，我会？',
      zhTW: '來到有很多陌生人的場合，我會？',
      vi: 'Ở nơi có nhiều người lạ, tôi…',
      id: 'Di tempat penuh orang baru, aku…',
    }),
    options: [
      {
        text: T({
          ko: '한두 명과 깊게 이야기하는 편이다. 여러 명과 동시에 대화하면 피곤하다',
          en: 'Prefer deep talk with one or two—chatting with many at once drains me.',
          ja: '一二人と深く話す派。大人数と同時は疲れる。',
          zhCN: '倾向和少数人深聊。同时和很多人说话很累。',
          zhTW: '傾向和少數人深聊。同時和很多人說話很累。',
          vi: 'Thích trò chuyện sâu với một hai người—nói với đông người cùng lúc thì mệt.',
          id: 'Lebih suka ngobrol dalam dengan satu dua orang—rame bareng melelahkan.',
        }),
        score: 0,
      },
      {
        text: T({
          ko: '여러 사람과 두루두루 대화한다. 새로운 사람 만나는 게 재밌다',
          en: 'Mix and talk around—meeting new people is fun.',
          ja: 'いろいろな人と軽く話す。新しい出会いが楽しい。',
          zhCN: '和许多人泛泛聊天。认识新人很有趣。',
          zhTW: '和許多人泛泛聊天。認識新人很有趣。',
          vi: 'Xã giao khắp nơi—gặp người mới thú vị.',
          id: 'Ngobrol ke banyak orang—kenalan baru menyenangkan.',
        }),
        score: 1,
      },
    ],
  },
  {
    id: 3,
    question: T({
      ko: '발표나 스피치를 해야 하는 상황이 갑자기 생겼다. 나는?',
      en: 'I suddenly have to present or speak in public. I…',
      ja: '突然プレゼンやスピーチの場面になった。私は？',
      zhCN: '突然要面对演讲或发言。我会？',
      zhTW: '突然要面對演講或發言。我會？',
      vi: 'Đột nhiên phải thuyết trình hoặc phát biểu. Tôi…',
      id: 'Tiba-tiba harus presentasi atau bicara di depan umum. Aku…',
    }),
    options: [
      {
        text: T({
          ko: '긴장되고 가능하면 피하고 싶다. 준비 없이 나서는 건 불편하다',
          en: 'Feel tense and want to avoid it—going up unprepared feels awful.',
          ja: '緊張して避けたい。準備なしは苦手。',
          zhCN: '很紧张想躲开。没准备就上台很不舒服。',
          zhTW: '很緊張想躲開。沒準備就上台很不舒服。',
          vi: 'Căng thẳng và muốn tránh—không chuẩn bị thì rất khó chịu.',
          id: 'Gugup dan ingin hindari—tanpa persiapan rasanya tidak nyaman.',
        }),
        score: 0,
      },
      {
        text: T({
          ko: '긴장은 되지만 오히려 흥미롭다. 주목받는 것에 그리 거부감이 없다',
          en: 'Nervous but kind of excited—I do not mind the spotlight.',
          ja: '緊張するがむしろワクワクする。注目はそこまで苦ではない。',
          zhCN: '紧张但也有点兴奋。不太排斥被关注。',
          zhTW: '緊張但也有點興奮。不太排斥被關注。',
          vi: 'Hồi hộp nhưng cũng hứng thú—không ngại được chú ý.',
          id: 'Deg-degan tapi juga tertarik—tidak masalah jadi pusat perhatian.',
        }),
        score: 1,
      },
    ],
  },
  {
    id: 4,
    question: T({
      ko: '오늘 하루가 매우 힘들었다. 퇴근 후 가장 하고 싶은 것은?',
      en: 'Today was exhausting. After work, what I want most is…',
      ja: '今日はとても疲れた。退勤後、一番したいのは？',
      zhCN: '今天特别累。下班后最想做什么？',
      zhTW: '今天特別累。下班後最想做什麼？',
      vi: 'Hôm nay kiệt sức. Sau giờ làm, điều tôi muốn nhất là…',
      id: 'Hari ini sangat melelahkan. Setelah kerja, yang paling ingin kulakukan…',
    }),
    options: [
      {
        text: T({
          ko: '혼자 있고 싶다. 조용한 공간에서 에너지를 충전해야 한다',
          en: 'Be alone—recharge in a quiet space.',
          ja: '一人でいたい。静かな場所で充電したい。',
          zhCN: '想独处。在安静的地方充电。',
          zhTW: '想獨處。在安靜的地方充電。',
          vi: 'Muốn ở một mình—nạp lại năng lượng nơi yên tĩnh.',
          id: 'Ingin sendiri—isi ulang energi di tempat tenang.',
        }),
        score: 0,
      },
      {
        text: T({
          ko: '친구나 가족에게 연락해서 하소연하고 싶다. 말하고 나면 풀린다',
          en: 'Call a friend or family to vent—talking it out helps.',
          ja: '友人や家族に連絡して話したい。話すと楽になる。',
          zhCN: '联系亲友倾诉。说出来会好受些。',
          zhTW: '聯絡親友傾訴。說出來會好受些。',
          vi: 'Nhắn bạn hoặc gia đình để tâm sự—nói ra thì nhẹ người.',
          id: 'Hubungi teman atau keluarga untuk curhat—cerita keluar jadi lega.',
        }),
        score: 1,
      },
    ],
  },
  {
    id: 5,
    question: T({
      ko: '단체 채팅방에 모르는 사람들이 가득하다. 나는?',
      en: 'A group chat is full of people I do not know. I…',
      ja: '知らない人だらけのグループチャット。私は？',
      zhCN: '群聊里很多不认识的人。我会？',
      zhTW: '群組裡很多不認識的人。我會？',
      vi: 'Nhóm chat toàn người lạ. Tôi…',
      id: 'Grup chat penuh orang yang tidak kukenal. Aku…',
    }),
    options: [
      {
        text: T({
          ko: '조용히 읽기만 한다. 먼저 말을 거는 건 쉽지 않다',
          en: 'Mostly read quietly—starting a chat is not easy.',
          ja: '静かに読むだけ。自分から話しかけるのは難しい。',
          zhCN: '安静潜水。主动开口不容易。',
          zhTW: '安靜潛水。主動開口不容易。',
          vi: 'Chỉ lặng đọc—chủ động bắt chuyện không dễ.',
          id: 'Diam membaca—memulai obrolan tidak mudah.',
        }),
        score: 0,
      },
      {
        text: T({
          ko: '자연스럽게 대화에 끼어든다. 모르는 사람이어도 큰 장벽이 없다',
          en: 'Jump into the conversation naturally—strangers are not a big barrier.',
          ja: '自然に会話に入る。知らない人でも壁は低い。',
          zhCN: '自然加入聊天。陌生人也不是障碍。',
          zhTW: '自然加入聊天。陌生人也不是障礙。',
          vi: 'Nhập hội tự nhiên—người lạ không phải rào cản lớn.',
          id: 'Ikut bicara dengan natural—orang asing bukan halangan besar.',
        }),
        score: 1,
      },
    ],
  },
  {
    id: 6,
    question: T({
      ko: '파티나 모임에서 마음에 드는 사람을 발견했을 때 나는?',
      en: 'At a party or gathering, I notice someone I like. I…',
      ja: 'パーティや集まりで気になる人がいた。私は？',
      zhCN: '在聚会里发现有好感的人。我会？',
      zhTW: '在聚會裡發現有好感的人。我會？',
      vi: 'Ở tiệc hoặc buổi gặp, tôi thấy người mình thích. Tôi…',
      id: 'Di pesta atau arisan, ada orang yang menarik perhatian. Aku…',
    }),
    options: [
      {
        text: T({
          ko: '먼저 다가가기가 어렵다. 상대가 먼저 말을 걸어주면 좋겠다',
          en: 'Hard to approach first—I wish they would speak to me.',
          ja: '自分からは踏み出しにくい。向こうから声をかけてほしい。',
          zhCN: '很难先开口。希望对方先搭话。',
          zhTW: '很難先開口。希望對方先搭話。',
          vi: 'Khó chủ động tiếp cận—mong họ bắt chuyện trước.',
          id: 'Sulit mendekati dulu—berharap mereka yang menyapa dulu.',
        }),
        score: 0,
      },
      {
        text: T({
          ko: '먼저 다가가서 말을 건다. 어색함보다 호기심이 더 크다',
          en: 'Go up and say hi—curiosity beats awkwardness.',
          ja: '先に話しかける。気持ちは好奇心の方が勝つ。',
          zhCN: '主动上前搭话。好奇胜过尴尬。',
          zhTW: '主動上前搭話。好奇勝過尷尬。',
          vi: 'Chủ động làm quen—tò mò hơn ngại ngùng.',
          id: 'Menyapa dulu—rasa ingin tahu mengalahkan canggung.',
        }),
        score: 1,
      },
    ],
  },
  {
    id: 7,
    question: T({
      ko: '혼자 식사를 해야 하는 상황이 생겼다. 나는?',
      en: 'I end up eating alone. I…',
      ja: 'ひとりで食事しなければならない状況。私は？',
      zhCN: '不得不一个人吃饭。我会？',
      zhTW: '不得不一個人吃飯。我會？',
      vi: 'Phải ăn một mình. Tôi…',
      id: 'Harus makan sendiri. Aku…',
    }),
    options: [
      {
        text: T({
          ko: '괜찮다. 오히려 혼자 먹는 게 편할 때가 있다',
          en: 'It is fine—sometimes eating alone is more comfortable.',
          ja: '大丈夫。むしろ一人の方が楽なこともある。',
          zhCN: '没关系。有时一个人吃更自在。',
          zhTW: '沒關係。有時一個人吃更自在。',
          vi: 'Ổn—đôi khi ăn một mình thoải mái hơn.',
          id: 'Tidak masalah—kadang makan sendiri lebih nyaman.',
        }),
        score: 0,
      },
      {
        text: T({
          ko: '누군가를 찾거나 같이 먹을 사람을 구한다. 혼밥은 좀 외롭다',
          en: 'Look for someone to join—eating alone feels lonely.',
          ja: '誰かを探す。一人飯は少し寂しい。',
          zhCN: '找人一起吃。独自吃饭有点孤单。',
          zhTW: '找人一起吃。獨自吃飯有點孤單。',
          vi: 'Tìm người ăn cùng—ăn một mình hơi cô đơn.',
          id: 'Cari teman makan—makan sendiri agak sepi.',
        }),
        score: 1,
      },
    ],
  },
  {
    id: 8,
    question: T({
      ko: '친한 친구가 "오늘 즉흥으로 모임 나올 수 있어?"라고 연락이 왔다. 나는?',
      en: 'A close friend texts: “Can you hang out tonight on a whim?” I…',
      ja: '親友から「今日その場で会える？」と連絡。私は？',
      zhCN: '好友问：“今晚能临时出来聚吗？”我会？',
      zhTW: '好友問：「今晚能臨時出來聚嗎？」我會？',
      vi: 'Bạn thân nhắn: “Tối nay đi chơi tự phát được không?” Tôi…',
      id: 'Teman dekat chat: “Bisa ketemuan dadakan malam ini?” Aku…',
    }),
    options: [
      {
        text: T({
          ko: '미리 계획된 게 아니면 가기 싫다. 준비가 안 된 만남이 불편하다',
          en: 'Unless it was planned, I do not want to go—unplanned hangs feel off.',
          ja: '予定がなければ行きたくない。準備のない集まりは苦手。',
          zhCN: '没提前约就不想去。没准备的见面不自在。',
          zhTW: '沒提前約就不想去。沒準備的見面不自在。',
          vi: 'Không hẹn trước thì không muốn đi—gặp đột ngột khó chịu.',
          id: 'Tanpa rencana tidak ingin pergi—ketemu dadakan terasa tidak nyaman.',
        }),
        score: 0,
      },
      {
        text: T({
          ko: '일단 나간다. 즉흥적인 만남이 오히려 재밌을 때가 많다',
          en: 'I just go—spontaneous meetups are often the most fun.',
          ja: 'とりあえず行く。即興の方が楽しいことも多い。',
          zhCN: '先出门再说。即兴聚会往往更有趣。',
          zhTW: '先出門再說。即興聚會往往更有趣。',
          vi: 'Cứ đi—hẹn tự phát đôi khi vui nhất.',
          id: 'Langsung pergi—kumpul dadakan sering paling seru.',
        }),
        score: 1,
      },
    ],
  },
  {
    id: 9,
    question: T({
      ko: '아이디어를 낼 때 나는?',
      en: 'When I need to come up with ideas, I…',
      ja: 'アイデアを出すとき、私は？',
      zhCN: '需要想点子时，我会？',
      zhTW: '需要想點子時，我會？',
      vi: 'Khi cần nảy ra ý tưởng, tôi…',
      id: 'Saat harus menghasilkan ide, aku…',
    }),
    options: [
      {
        text: T({
          ko: '혼자 조용히 생각해야 좋은 아이디어가 나온다',
          en: 'Need quiet solo thinking for good ideas.',
          ja: '一人で静かに考えないと良いアイデアが出ない。',
          zhCN: '要安静独处才能想出好主意。',
          zhTW: '要安靜獨處才能想出好主意。',
          vi: 'Phải suy nghĩ một mình trong yên tĩnh mới ra ý hay.',
          id: 'Harus berpikir sendiri dalam tenang baru ide bagus muncul.',
        }),
        score: 0,
      },
      {
        text: T({
          ko: '사람들과 대화하면서 이야기가 튀어나올 때 아이디어가 잘 나온다',
          en: 'Ideas pop up when I talk things through with people.',
          ja: '人と話しているうちにアイデアが出る。',
          zhCN: '和人聊着聊着点子就来了。',
          zhTW: '和人聊著聊著點子就來了。',
          vi: 'Ý hay nảy ra khi trò chuyện với mọi người.',
          id: 'Ide muncul saat ngobrol dengan orang lain.',
        }),
        score: 1,
      },
    ],
  },
  {
    id: 10,
    question: T({
      ko: '긴 연휴가 생겼다. 이상적인 시간 활용은?',
      en: 'A long break is coming. My ideal use of that time is…',
      ja: '長い連休ができた。理想的な過ごし方は？',
      zhCN: '有了长假。最理想怎么过？',
      zhTW: '有了長假。最理想怎麼過？',
      vi: 'Có kỳ nghỉ dài. Cách lý tưởng để dùng thời gian là…',
      id: 'Ada libur panjang. Cara ideal memakai waktu…',
    }),
    options: [
      {
        text: T({
          ko: '혼자 또는 아주 소수와 조용히 보낸다. 여행도 혼자나 둘이 선호',
          en: 'Spend it quietly alone or with very few people—even trips, solo or as a pair.',
          ja: '一人かごく少数で静かに。旅行も一人か二人が好き。',
          zhCN: '独处或和极少数人安静度过。旅行也偏好一人或两人。',
          zhTW: '獨處或和極少數人安靜度過。旅行也偏好一人或兩人。',
          vi: 'Ở một mình hoặc với rất ít người—du lịch cũng thích một mình hoặc đôi.',
          id: 'Sendiri atau dengan sangat sedikit orang—wisata juga lebih suka sendiri atau berdua.',
        }),
        score: 0,
      },
      {
        text: T({
          ko: '여러 사람과 함께하는 시간을 계획한다. 북적이는 게 좋다',
          en: 'Plan time with lots of people—I like a lively crowd.',
          ja: '大勢と過ごす時間を計画する。賑やかが好き。',
          zhCN: '安排和很多人一起。喜欢热闹。',
          zhTW: '安排和很多人一起。喜歡熱鬧。',
          vi: 'Lên kế hoạch với nhiều người—thích không khí đông vui.',
          id: 'Rencanakan waktu bersama banyak orang—suka ramai.',
        }),
        score: 1,
      },
    ],
  },
  {
    id: 11,
    question: T({
      ko: '모임이 끝난 후 집에 돌아왔을 때 나는?',
      en: 'After a social event, when I get home, I…',
      ja: '集まりが終わって家に帰ったあと、私は？',
      zhCN: '聚会结束回到家后，我会？',
      zhTW: '聚會結束回到家後，我會？',
      vi: 'Sau buổi gặp, về đến nhà, tôi…',
      id: 'Setelah kumpulan, pulang ke rumah, aku…',
    }),
    options: [
      {
        text: T({
          ko: '피곤하다. 사람을 만나고 나면 에너지가 소진된 느낌이다',
          en: 'Wiped out—being around people drained my energy.',
          ja: '疲れた。人と会うとエネルギーが抜ける感じ。',
          zhCN: '很累。见人后感觉精力被掏空。',
          zhTW: '很累。見人後感覺精力被掏空。',
          vi: 'Kiệt sức—ở cùng mọi người làm cạn năng lượng.',
          id: 'Lelah—bersama orang banyak menguras energi.',
        }),
        score: 0,
      },
      {
        text: T({
          ko: '오히려 에너지가 생긴다. 사람들과 어울리고 나면 기분이 올라간다',
          en: 'Actually energized—socializing lifts my mood.',
          ja: 'むしろ元気になる。人と過ごすと高揚する。',
          zhCN: '反而更有精神。和人相处后心情变好。',
          zhTW: '反而更有精神。和人相處後心情變好。',
          vi: 'Ngược lại càng có năng lượng—giao lưu làm tinh thần phấn chấn.',
          id: 'Malah berenergi—bersosialisasi membuat semangat naik.',
        }),
        score: 1,
      },
    ],
  },
  {
    id: 12,
    question: T({
      ko: '내가 가장 솔직하게 나를 드러낼 수 있는 상황은?',
      en: 'When can I be most honestly myself?',
      ja: 'いちばん素直に自分を出せるのはどんなとき？',
      zhCN: '什么时候最能坦诚做自己？',
      zhTW: '什麼時候最能坦誠做自己？',
      vi: 'Khi nào tôi có thể là chính mình nhất?',
      id: 'Kapan aku paling bisa jadi diri sendiri?',
    }),
    options: [
      {
        text: T({
          ko: '아주 친한 한두 명과 있을 때. 소수와 깊은 관계를 선호한다',
          en: 'With one or two very close people—I prefer deep ties with a few.',
          ja: 'ごく親しい一二人といるとき。少数との深い関係を好む。',
          zhCN: '和极亲近的一两个人。偏好少而深的关系。',
          zhTW: '和極親近的一兩個人。偏好少而深的關係。',
          vi: 'Với một hai người rất thân—thích quan hệ sâu với ít người.',
          id: 'Dengan satu dua orang sangat dekat—lebih suka hubungan dalam dengan sedikit orang.',
        }),
        score: 0,
      },
      {
        text: T({
          ko: '다양한 사람들과 어울릴 때. 여러 관계 속에서 에너지를 얻는다',
          en: 'Among many kinds of people—I draw energy from diverse connections.',
          ja: 'いろいろな人と交わるとき。多様なつながりからエネルギーを得る。',
          zhCN: '和各种各样的人在一起。从多种关系中获得能量。',
          zhTW: '和各種各樣的人在一起。從多種關係中獲得能量。',
          vi: 'Giữa nhiều kiểu người—nạp năng lượng từ các mối quan hệ đa dạng.',
          id: 'Bersama berbagai orang—dapat energi dari banyak jenis hubungan.',
        }),
        score: 1,
      },
    ],
  },
];

export const phase3EiIndexPreciseMeasurementResults: Phase3EiIndexPreciseMeasurementResult[] = [
  {
    type: 'Type1',
    emoji: '🌙',
    title: T({
      ko: '진성 내향인, E지수 0~17%',
      en: 'True introvert — E index 0–17%',
      ja: '真性内向、E指数0〜17%',
      zhCN: '典型内向，E 指数 0~17%',
      zhTW: '典型內向，E 指數 0~17%',
      vi: 'Hướng nội thuần — chỉ số E 0–17%',
      id: 'Introvert murni — indeks E 0–17%',
    }),
    shortDescription: T({
      ko: '"당신은 거의 완전한 내향인입니다."',
      en: '"You are almost fully introverted."',
      ja: '「あなたはほぼ完全な内向型です。」',
      zhCN: '「你几乎是典型的内向型。」',
      zhTW: '「你幾乎是典型的內向型。」',
      vi: '"Bạn gần như hoàn toàn hướng nội."',
      id: '"Kamu hampir sepenuhnya introvert."',
    }),
    indexBand: T({
      ko: 'E 0~17% / I 83~100%',
      en: 'E 0–17% / I 83–100%',
      ja: 'E 0〜17% / I 83〜100%',
      zhCN: 'E 0~17% / I 83~100%',
      zhTW: 'E 0~17% / I 83~100%',
      vi: 'E 0–17% / I 83–100%',
      id: 'E 0–17% / I 83–100%',
    }),
    description: T({
      ko: '혼자 있는 시간이 단순히 좋은 게 아니라 생존에 필수적인 사람입니다. 사람과 어울리는 것이 불가능한 건 아니지만, 사람을 만나고 나면 에너지가 소진되고 혼자만의 시간으로 반드시 충전해야 합니다. 소수와 깊게, 오래, 진하게 연결되는 관계를 선호하며 넓은 인간관계보다 좁고 단단한 관계에서 안정감을 느낍니다.',
      en: 'Alone time is not just nice—it feels essential. You can socialize, but afterward you are drained and must recharge solo. You prefer a few deep, lasting bonds over a wide shallow network, and feel safest in narrow, solid relationships.',
      ja: '一人の時間は「好き」だけでなく生存に必要な人です。交流は不可能ではありませんが、人と会うと消耗し、必ず一人で充電します。広い人間関係より、少人数で深く長くつながる関係を好みます。',
      zhCN: '独处不仅是喜欢，更是生存必需。并非不能社交，但见人后会耗竭，必须独处充电。比起泛泛之交，更偏好少数深厚、长久的关系。',
      zhTW: '獨處不只是喜歡，更是生存必需。並非不能社交，但見人後會耗竭，必須獨處充電。比起泛泛之交，更偏好少數深厚、長久的關係。',
      vi: 'Thời gian một mình không chỉ thích—mà gần như sống còn. Bạn vẫn giao tiếp được nhưng sau đó kiệt sức và cần nạp lại một mình. Bạn thích vài mối quan hệ sâu, bền hơn là mạng xã hội rộng nông cạn.',
      id: 'Waktu sendiri bukan sekadar nyaman—hampir vital. Kamu bisa bersosialisasi, tapi setelahnya lelah dan harus mengisi ulang sendiri. Lebih suka beberapa ikatan dalam dan tahan lama daripada banyak hubungan dangkal.',
    }),
    characteristics: T({
      ko: '에너지 충전 방식: 혼자만의 시간, 조용한 환경, 독서·산책·취미。에너지 방전 상황: 긴 시간의 사교 활동, 낯선 사람과의 대화, 예고 없는 모임。이 지수를 가진 사람의 특징: 깊은 사고력, 뛰어난 집중력, 관찰력, 진중함。진성 I의 오해: 사람을 싫어하는 게 아닙니다. 사람을 좋아하지만 에너지 비용이 크게 드는 것입니다。',
      en: 'Recharge: solo time, quiet space, reading, walks, hobbies. Drain: long socializing, talking with strangers, surprise plans. Traits: deep thinking, focus, observation, seriousness. Misread: you do not hate people—you like them, but socializing costs a lot of energy.',
      ja: '充電：一人の時間、静かな環境、読書・散歩・趣味。消耗：長時間の社交、見知らぬ人との会話、予定外の集まり。特徴：深い思考、集中、観察、誠実さ。誤解：人嫌いではない。好きだがコストが大きい。',
      zhCN: '充电方式：独处、安静环境、阅读散步爱好。耗电场景：长时间社交、与陌生人交谈、临时聚会。特点：深思、专注、观察、稳重。误解：不是讨厌人，而是社交成本高。',
      zhTW: '充電方式：獨處、安靜環境、閱讀散步嗜好。耗電場景：長時間社交、與陌生人交談、臨時聚會。特點：深思、專注、觀察、穩重。誤解：不是討厭人，而是社交成本高。',
      vi: 'Nạp điện: thời gian một mình, không gian yên, đọc sách, đi bộ, sở thích. Hao pin: xã giao lâu, nói chuyện người lạ, kế hoạch bất ngờ. Đặc điểm: tư duy sâu, tập trung, quan sát, nghiêm túc. Hiểu nhầm: bạn không ghét người—chỉ là tốn nhiều năng lượng.',
      id: 'Isi ulang: waktu sendiri, lingkungan tenang, baca jalan hobi. Habiskan energi: sosialisasi lama, obrol orang asing, rencana mendadak. Ciri: berpikir dalam, fokus, mengamati, serius. Salah paham: bukan membenci orang—suka, tapi sosialisasi mahal energi.',
    }),
    goodMatch: T({
      ko: '하루에 한 번, 완전히 혼자인 시간을 반드시 확보하세요. 그것이 당신의 배터리 충전입니다',
      en: 'Secure fully solo time at least once a day—that is your battery charge.',
      ja: '毎日一度は完全に一人の時間を確保してください。それがバッテリー充電です。',
      zhCN: '每天至少留一段完全独处的时间，那就是你的充电。',
      zhTW: '每天至少留一段完全獨處的時間，那就是你的充電。',
      vi: 'Mỗi ngày giữ ít nhất một khoảng hoàn toàn một mình—đó là sạc pin cho bạn.',
      id: 'Setiap hari sisihkan waktu benar-benar sendiri—itulah mengisi bateraimu.',
    }),
    badMatch: T({
      ko: '작가, 연구자, 프리랜서, 프로그래머, 예술가',
      en: 'Writer, researcher, freelancer, programmer, artist',
      ja: '作家、研究者、フリーランス、プログラマー、芸術家',
      zhCN: '作家、研究者、自由职业者、程序员、艺术家',
      zhTW: '作家、研究者、自由工作者、工程師、藝術家',
      vi: 'Nhà văn, nhà nghiên cứu, freelancer, lập trình viên, nghệ sĩ',
      id: 'Penulis, peneliti, freelancer, programmer, seniman',
    }),
    shareLine: T({
      ko: '나의 E지수는 {ePercent}% 🌙 진성 I. 혼자가 진짜 행복한 사람 확정 → 너는 몇 %야?',
      en: 'My E index is {ePercent}% 🌙 True I—happy alone for real. What about you?',
      ja: '私のE指数は{ePercent}% 🌙 真性I。一人が本当に幸せ。あなたは？',
      zhCN: '我的 E 指数是 {ePercent}% 🌙 典型 I，独处才真快乐——你呢？',
      zhTW: '我的 E 指數是 {ePercent}% 🌙 典型 I，獨處才真快樂——你呢？',
      vi: 'Chỉ số E của tôi là {ePercent}% 🌙 I thuần—thích một mình là thật. Còn bạn?',
      id: 'Indeks E-ku {ePercent}% 🌙 I murni—bahagia sendiri itu nyata. Kamu berapa?',
    }),
  },
  {
    type: 'Type2',
    emoji: '🍃',
    title: T({
      ko: '강한 내향인, E지수 25~33%',
      en: 'Strong introvert — E index 25–33%',
      ja: '強め内向、E指数25〜33%',
      zhCN: '偏强内向，E 指数 25~33%',
      zhTW: '偏強內向，E 指數 25~33%',
      vi: 'Hướng nội rõ — chỉ số E 25–33%',
      id: 'Introvert kuat — indeks E 25–33%',
    }),
    shortDescription: T({
      ko: '"당신은 분명한 내향인이지만 완전히 닫혀있지는 않습니다."',
      en: '"You are clearly introverted, but not totally closed off."',
      ja: '「あなたは明確な内向型だが、完全に閉じたわけではない。」',
      zhCN: '「你明显偏内向，但并非完全封闭。」',
      zhTW: '「你明顯偏內向，但並非完全封閉。」',
      vi: '"Bạn rõ ràng hướng nội, nhưng không khép kín hoàn toàn."',
      id: '"Kamu jelas introvert, tapi tidak tertutup total."',
    }),
    indexBand: T({
      ko: 'E 25~33% / I 67~75%',
      en: 'E 25–33% / I 67–75%',
      ja: 'E 25〜33% / I 67〜75%',
      zhCN: 'E 25~33% / I 67~75%',
      zhTW: 'E 25~33% / I 67~75%',
      vi: 'E 25–33% / I 67–75%',
      id: 'E 25–33% / I 67–75%',
    }),
    description: T({
      ko: '혼자를 선호하고 에너지 충전을 혼자서 하는 타입이지만, 상황에 따라 사람들과 어울리는 것도 나쁘지 않은 때가 있습니다. 친한 사람들과는 꽤 편하게 대화할 수 있고, 특정 상황에서는 외향적으로 보이기도 합니다. 그러나 결국 에너지는 혼자 있을 때 충전됩니다.',
      en: 'You prefer solo time to recharge, yet sometimes socializing feels fine—especially with close friends, and you can even seem outgoing in some settings. Still, your battery fills up when you are alone.',
      ja: '基本は一人で充電するタイプだが、状況によっては人と過ごすのも悪くない。親しい人とは話しやすく、場面によっては外向的に見えることも。それでも最終的な充電は一人のとき。',
      zhCN: '偏好独处充电，但有时社交也不错——和熟人聊得开，特定场合也会显得外向。但最终能量还是在独处时恢复。',
      zhTW: '偏好獨處充電，但有時社交也不錯——和熟人聊得開，特定場合也會顯得外向。但最終能量還是在獨處時恢復。',
      vi: 'Bạn thích nạp điện một mình, nhưng đôi khi giao lưu vẫn ổn—nhất với bạn thân, và có lúc trông hướng ngoại. Dù vậy pin chỉ đầy khi bạn ở một mình.',
      id: 'Lebih suka mengisi energi sendiri, tapi kadang sosialisasi juga oke—terutama dengan orang dekat, dan di situasi tertentu bisa terlihat ekstrover. Tetapi energi tetap terisi saat sendiri.',
    }),
    characteristics: T({
      ko: '에너지 충전 방식: 혼자만의 시간 + 친한 소수와의 시간。에너지 방전 상황: 대규모 모임, 처음 만나는 사람들과의 긴 시간。이 지수를 가진 사람의 특징: 선택적 사교성, 깊은 관계 형성 능력, 상황 파악력。강한 I의 특별함: 완전 I보다 유연합니다. 필요할 때 E처럼 행동할 수 있는 능력이 있습니다。',
      en: 'Recharge: solo time plus a few close people. Drain: big crowds, long stretches with strangers. Traits: selective socializing, building deep ties, reading the room. Edge: more flexible than a pure I—you can act E when needed.',
      ja: '充電：一人時間＋親しい少数。消耗：大人数、初対面との長時間。特徴：選択的社交、深い関係、空気を読む。強めIの強み：純Iより柔軟で、必要ならEのように振る舞える。',
      zhCN: '充电：独处＋少数亲友。耗电：大聚会、与陌生人长时间相处。特点：选择性社交、深关系、察言观色。偏强 I 的优势：比纯 I 灵活，需要时能表现得像 E。',
      zhTW: '充電：獨處＋少數親友。耗電：大聚會、與陌生人長時間相處。特點：選擇性社交、深關係、察言觀色。偏強 I 的優勢：比純 I 彈性，需要時能像 E。',
      vi: 'Nạp điện: thời gian một mình + vài người thân. Hao pin: đông người, lâu với người lạ. Đặc điểm: xã giao chọn lọc, quan hệ sâu, đọc tình huống. Điểm mạnh: linh hoạt hơn I thuần—khi cần có thể giống E.',
      id: 'Isi ulang: waktu sendiri + sedikit orang dekat. Habis energi: kerumunan, lama dengan orang asing. Ciri: sosialisasi selektif, hubungan dalam, membaca situasi. Keunggulan: lebih fleksibel dari I murni—bisa bertingkah seperti E saat perlu.',
    }),
    goodMatch: T({
      ko: '모임 후에는 혼자만의 디브리핑 시간을 가져보세요. 그날의 감정을 정리하면 빠르게 회복됩니다',
      en: 'After gatherings, take solo debrief time—sorting the day’s feelings helps you recover fast.',
      ja: '集まりの後は一人で振り返る時間を。その日の感情を整理すると回復が早い。',
      zhCN: '聚会后留一段独处复盘时间，整理情绪会恢复更快。',
      zhTW: '聚會後留一段獨處復盤時間，整理情緒會恢復更快。',
      vi: 'Sau buổi gặp, dành thời gian một mình để xử lý cảm xúc—bạn hồi phục nhanh hơn.',
      id: 'Setelah kumpul, sisihkan waktu sendiri untuk merapikan perasaan—lebih cepat pulih.',
    }),
    badMatch: T({
      ko: '상담사, 교사, 편집자, 디자이너, 기획자',
      en: 'Counselor, teacher, editor, designer, planner',
      ja: 'カウンセラー、教師、編集者、デザイナー、企画者',
      zhCN: '咨询师、教师、编辑、设计师、策划',
      zhTW: '諮商師、教師、編輯、設計師、企劃',
      vi: 'Tư vấn, giáo viên, biên tập, thiết kế, hoạch định',
      id: 'Konselor, guru, editor, desainer, perencana',
    }),
    shareLine: T({
      ko: '나의 E지수는 {ePercent}% 🍃 강한 I이지만 상황 따라 E처럼 보이기도 함 → 너는 몇 %야?',
      en: 'My E index is {ePercent}% 🍃 Strong I but sometimes I look E—what about you?',
      ja: '私のE指数は{ePercent}% 🍃強めIだけど場面でEに見えることも。あなたは？',
      zhCN: '我的 E 指数是 {ePercent}% 🍃 偏强 I，但有时看起来像 E——你呢？',
      zhTW: '我的 E 指數是 {ePercent}% 🍃 偏強 I，但有時看起來像 E——你呢？',
      vi: 'Chỉ số E {ePercent}% 🍃 I mạnh nhưng đôi khi trông như E—còn bạn?',
      id: 'Indeks E {ePercent}% 🍃 I kuat tapi kadang terlihat seperti E—kamu?',
    }),
  },
  {
    type: 'Type3',
    emoji: '🌿',
    title: T({
      ko: '양향형, E지수 42~50%',
      en: 'Ambivert — E index 42–50%',
      ja: '両向型、E指数42〜50%',
      zhCN: '双向型，E 指数 42~50%',
      zhTW: '雙向型，E 指數 42~50%',
      vi: 'Đa hướng — chỉ số E 42–50%',
      id: 'Ambivert — indeks E 42–50%',
    }),
    shortDescription: T({
      ko: '"당신은 E와 I의 경계에 있는 진정한 양향인(Ambivert)입니다."',
      en: '"You are a true ambivert on the E/I border."',
      ja: '「あなたはEとIの境界にいる真のアンビバートです。」',
      zhCN: '「你是处在 E 与 I 边界的真双向型。」',
      zhTW: '「你是處在 E 與 I 邊界的真雙向型。」',
      vi: '"Bạn là người đa hướng thật sự ở ranh giới E/I."',
      id: '"Kamu ambivert sejati di perbatasan E/I."',
    }),
    indexBand: T({
      ko: 'E 42~50% / I 50~58%',
      en: 'E 42–50% / I 50–58%',
      ja: 'E 42〜50% / I 50〜58%',
      zhCN: 'E 42~50% / I 50~58%',
      zhTW: 'E 42~50% / I 50~58%',
      vi: 'E 42–50% / I 50–58%',
      id: 'E 42–50% / I 50–58%',
    }),
    description: T({
      ko: '둘 중 어느 쪽도 아닙니다. 상황과 상대에 따라 외향적으로도, 내향적으로도 자연스럽게 변하는 가장 유연한 타입입니다. 사람들과 함께 있으면 즐겁지만 혼자 있는 시간도 소중합니다. 사실 인간의 가장 자연스러운 상태가 이 구간이기도 합니다.',
      en: 'You are not purely either—you flex naturally between outgoing and reserved depending on context and people. Social time is fun, yet solo time matters too. Many humans sit most naturally in this range.',
      ja: 'どちらか一方ではありません。状況と相手で外向にも内向にも自然に変わる最も柔軟なタイプ。人といるのも楽しいが、一人の時間も大切。人間にとって最も自然な帯の一つです。',
      zhCN: '并非非此即彼。随情境与对象在外向与内向间自然切换，非常灵活。与人相处开心，独处也珍贵。很多人最自然落在这个区间。',
      zhTW: '並非非此即彼。隨情境與對象在外向與內向間自然切換，非常靈活。與人相處開心，獨處也珍貴。很多人最自然落在這個區間。',
      vi: 'Bạn không thuần một kiểu—linh hoạt giữa hướng ngoại và nội tùy tình huống và đối phương. Giao lưu vui nhưng thời gian một mình cũng quý. Nhiều người tự nhiên nhất ở vùng này.',
      id: 'Kamu tidak murni salah satu—fleksibel antara ekstrover dan introvert sesuai situasi dan orang. Bersama orang menyenangkan, waktu sendiri juga berharga. Banyak manusia paling alami di rentang ini.',
    }),
    characteristics: T({
      ko: '에너지 충전 방식: 상황에 따라 다름. 사람에서 충전될 때도, 혼자서 충전될 때도 있음。에너지 방전 상황: 매우 강한 E나 매우 강한 I의 환경에 오래 있을 때。이 지수를 가진 사람의 특징: 뛰어난 적응력, 공감 능력, 상황 읽기 능력。양향인의 강점: 어떤 상황에서도 적응할 수 있어 대인 관계 스트레스가 적은 편。',
      en: 'Recharge: depends—sometimes from people, sometimes alone. Drain: staying too long in extreme E or extreme I settings. Traits: adaptability, empathy, reading situations. Strength: less social stress because you can fit many contexts.',
      ja: '充電：状況次第。人からも一人からも。消耗：極端なEか極端なIの環境に長くいると。特徴：適応力、共感、状況把握。強み：場に合わせやすく対人ストレスが少なめ。',
      zhCN: '充电：视情况而定，有时从人际来，有时从独处来。耗电：长期处在极端 E 或极端 I 环境。特点：适应力、共情、读场。优势：易融入多种情境，人际压力较小。',
      zhTW: '充電：視情況而定，有時從人際來，有時從獨處來。耗電：長期處在極端 E 或極端 I 環境。特點：適應力、共情、讀場。優勢：易融入多種情境，人際壓力較小。',
      vi: 'Nạp điện: tùy lúc—đôi khi từ người, đôi khi một mình. Hao pin: ở lâu môi trường E hoặc I cực đoan. Đặc điểm: thích nghi, đồng cảm, đọc tình huống. Điểm mạnh: ít căng thẳng xã hội vì linh hoạt.',
      id: 'Isi ulang: tergantung—kadang dari orang, kadang sendiri. Habis energi: lama di lingkungan E atau I ekstrem. Ciri: adaptasi, empati, membaca situasi. Kekuatan: stres sosial lebih kecil karena fleksibel.',
    }),
    goodMatch: T({
      ko: '오늘 에너지가 충전됐나 방전됐나를 관찰해보세요. 하루하루의 패턴이 나만의 E/I 지도가 됩니다',
      en: 'Notice whether today charged or drained you—daily patterns become your personal E/I map.',
      ja: '今日は充電だったか消耗だったか観察して。日々のパターンがあなたのE/Iマップになります。',
      zhCN: '观察今天是充电还是耗电——日积月累会形成你的 E/I 地图。',
      zhTW: '觀察今天是充電還是耗電——日積月累會形成你的 E/I 地圖。',
      vi: 'Quan sát hôm nay bạn nạp hay hao pin—mỗi ngày vẽ nên bản đồ E/I riêng.',
      id: 'Perhatikan hari ini mengisi atau menguras—pola harian jadi peta E/I pribadimu.',
    }),
    badMatch: T({
      ko: '마케터, PM, 영업직, 강사, 리더십 직군',
      en: 'Marketer, PM, sales, instructor, leadership roles',
      ja: 'マーケター、PM、営業、講師、リーダー職',
      zhCN: '市场、产品经理、销售、讲师、领导岗位',
      zhTW: '行銷、產品經理、業務、講師、領導職',
      vi: 'Marketing, PM, kinh doanh, giảng viên, lãnh đạo',
      id: 'Marketing, PM, sales, instruktur, kepemimpinan',
    }),
    shareLine: T({
      ko: '나의 E지수는 {ePercent}% 🌿 E도 I도 아닌 양향인. 이게 가장 편한 사람 → 너는 몇 %야?',
      en: 'My E index is {ePercent}% 🌿 Ambivert—not quite E or I. Comfiest type—your turn?',
      ja: '私のE指数は{ePercent}% 🌿EでもIでもない両向型。一番ラクな帯。あなたは？',
      zhCN: '我的 E 指数是 {ePercent}% 🌿 双向型，不算纯 E 或纯 I——你呢？',
      zhTW: '我的 E 指數是 {ePercent}% 🌿 雙向型，不算純 E 或純 I——你呢？',
      vi: 'Chỉ số E {ePercent}% 🌿 Đa hướng—không hẳn E hay I. Còn bạn?',
      id: 'Indeks E {ePercent}% 🌿 Ambivert—bukan E atau I murni. Kamu berapa?',
    }),
  },
  {
    type: 'Type4',
    emoji: '☀️',
    title: T({
      ko: '약한 외향인, E지수 58~67%',
      en: 'Mild extrovert — E index 58–67%',
      ja: '弱め外向、E指数58〜67%',
      zhCN: '偏弱外向，E 指数 58~67%',
      zhTW: '偏弱外向，E 指數 58~67%',
      vi: 'Hướng ngoại nhẹ — chỉ số E 58–67%',
      id: 'Ekstrover ringan — indeks E 58–67%',
    }),
    shortDescription: T({
      ko: '"당신은 외향적이지만 혼자만의 시간도 필요한 현실적인 E입니다."',
      en: '"You are outgoing, but you still need solo time—a realistic E."',
      ja: '「あなたは外向的だが、一人の時間も必要な現実的なEです。」',
      zhCN: '「你偏外向，但仍需要独处时间——务实的 E。」',
      zhTW: '「你偏外向，但仍需要獨處時間——務實的 E。」',
      vi: '"Bạn hướng ngoại nhưng vẫn cần thời gian một mình—E thực tế."',
      id: '"Kamu ekstrover tapi tetap butuh waktu sendiri—E yang realistis."',
    }),
    indexBand: T({
      ko: 'E 58~67% / I 33~42%',
      en: 'E 58–67% / I 33–42%',
      ja: 'E 58〜67% / I 33〜42%',
      zhCN: 'E 58~67% / I 33~42%',
      zhTW: 'E 58~67% / I 33~42%',
      vi: 'E 58–67% / I 33–42%',
      id: 'E 58–67% / I 33–42%',
    }),
    description: T({
      ko: '사람과 함께하는 것이 기본적으로 즐겁고 에너지를 충전받는 편이지만, 때로는 혼자 있고 싶은 날도 분명히 있습니다. 완전 E처럼 쉬지 않고 사람을 만나기보다는 적당한 균형을 찾는 타입입니다. 사람들 사이에서 자연스럽게 어울리지만 과도한 사교에는 살짝 지치기도 합니다.',
      en: 'People generally energize you, yet some days you clearly want to be alone. You seek balance rather than nonstop socializing like a pure E. You mingle easily, but heavy social overload still tires you.',
      ja: '基本的に人といるのが楽しく充電できるが、時々一人でいたい日もある。純粋なEのように休みなく会うよりバランス派。場には馴染むが、過密な社交には少し疲れる。',
      zhCN: '与人相处多半开心充能，但有时也想独处。比起像纯 E 不停社交，更追求平衡。能自然融入人群，但过度社交仍会累。',
      zhTW: '與人相處多半開心充能，但有時也想獨處。比起像純 E 不停社交，更追求平衡。能自然融入人群，但過度社交仍會累。',
      vi: 'Ở cùng người thường vui và nạp năng lượng, nhưng có ngày rõ ràng muốn một mình. Bạn cân bằng hơn là xã giao không ngừng như E thuần. Hòa nhập tốt nhưng quá tải xã giao vẫn mệt.',
      id: 'Bersama orang umumnya menyenangkan dan mengisi energi, tapi kadang ingin sendiri. Kamu cari keseimbangan, bukan sosialisasi nonstop seperti E murni. Mudah bergaul tapi terlalu padat tetap melelahkan.',
    }),
    characteristics: T({
      ko: '에너지 충전 방식: 주로 사람과 함께할 때. 단 혼자만의 시간도 필요。에너지 방전 상황: 너무 긴 시간 혼자 있거나, 과도한 사교 활동 동시 발생 시。이 지수를 가진 사람의 특징: 사교적이면서 깊이도 있는 균형형, 리더십 자질。약한 E의 특별함: E의 사교성 + I의 깊이를 동시에 가진 가장 실용적인 조합。',
      en: 'Recharge: mostly with people, but solo time still matters. Drain: very long solitude or too much socializing at once. Traits: sociable yet deep, balanced, leadership lean. Edge: E-style sociability plus I-style depth—highly practical.',
      ja: '充電：基本は人と。ただし一人時間も必要。消耗：長すぎる孤独、または社交の同時過多。特徴：社交的かつ深み、バランス、リーダー気質。弱めEの強み：Eの社交性＋Iの深さの実用的組み合わせ。',
      zhCN: '充电：多半靠人际，但仍需独处。耗电：独处过久或社交过量同时发生。特点：善社交也有深度、平衡、领导气质。偏弱 E：外向社交＋内向深度的实用组合。',
      zhTW: '充電：多半靠人際，但仍需獨處。耗電：獨處過久或社交過量同時發生。特點：善社交也有深度、平衡、領導氣質。偏弱 E：外向社交＋內向深度的實用組合。',
      vi: 'Nạp điện: chủ yếu với người nhưng vẫn cần một mình. Hao pin: một mình quá lâu hoặc xã giao quá tải. Đặc điểm: hòa đồng có chiều sâu, cân bằng, tiềm năng lãnh đạo. Điểm mạnh: tính xã hội kiểu E + chiều sâu kiểu I.',
      id: 'Isi ulang: kebanyakan bersama orang tapi waktu sendiri tetap penting. Habis energi: sendiri terlalu lama atau sosialisasi berlebihan. Ciri: sosial tapi dalam, seimbang, potensi memimpin. Unik: sosialisme E + kedalaman I.',
    }),
    goodMatch: T({
      ko: '사람이 많은 날엔 다음 날 혼자만의 시간을 의도적으로 확보해보세요. 그게 지속 가능한 E의 방식입니다',
      en: 'After busy social days, block solo time the next day—that is sustainable E living.',
      ja: '人が多い日の翌日は、意図的に一人時間を取ってみて。それが持続可能なEの型。',
      zhCN: '社交多的隔天，刻意留独处时间——这才是可持续的 E 方式。',
      zhTW: '社交多的隔天，刻意留獨處時間——這才是可持續的 E 方式。',
      vi: 'Sau ngày đông người, hãy chủ động giữ thời gian một mình ngày hôm sau—đó là lối E bền vững.',
      id: 'Setelah hari ramai sosial, sisihkan waktu sendiri keesokan harinya—itulah gaya E yang berkelanjutan.',
    }),
    badMatch: T({
      ko: '교육자, 컨설턴트, 팀 리더, 기자, 코치',
      en: 'Educator, consultant, team lead, journalist, coach',
      ja: '教育者、コンサル、チームリーダー、記者、コーチ',
      zhCN: '教育工作者、顾问、团队负责人、记者、教练',
      zhTW: '教育工作者、顧問、團隊負責人、記者、教練',
      vi: 'Giáo dục, tư vấn, trưởng nhóm, nhà báo, huấn luyện viên',
      id: 'Pendidik, konsultan, pemimpin tim, jurnalis, pelatih',
    }),
    shareLine: T({
      ko: '나의 E지수는 {ePercent}% ☀️ 약한 E. E기는 한데 혼자 시간도 필요 → 너는 몇 %야?',
      en: 'My E index is {ePercent}% ☀️ Mild E—I need people but also solo time. You?',
      ja: '私のE指数は{ePercent}% ☀️弱めE。E気質だけど一人時間も必要。あなたは？',
      zhCN: '我的 E 指数是 {ePercent}% ☀️ 偏弱 E，爱社交也需要独处——你呢？',
      zhTW: '我的 E 指數是 {ePercent}% ☀️ 偏弱 E，愛社交也需要獨處——你呢？',
      vi: 'Chỉ số E {ePercent}% ☀️ E nhẹ—cần người nhưng cũng cần một mình. Bạn?',
      id: 'Indeks E {ePercent}% ☀️ E ringan—perlu orang tapi juga waktu sendiri. Kamu?',
    }),
  },
  {
    type: 'Type5',
    emoji: '🎉',
    title: T({
      ko: '강한 외향인, E지수 75~83%',
      en: 'Strong extrovert — E index 75–83%',
      ja: '強め外向、E指数75〜83%',
      zhCN: '偏强外向，E 指数 75~83%',
      zhTW: '偏強外向，E 指數 75~83%',
      vi: 'Hướng ngoại mạnh — chỉ số E 75–83%',
      id: 'Ekstrover kuat — indeks E 75–83%',
    }),
    shortDescription: T({
      ko: '"당신은 분명한 외향인입니다. 사람이 있어야 에너지가 납니다."',
      en: '"You are clearly extroverted—people are your fuel."',
      ja: '「あなたは明確な外向型です。人がいないとエネルギーが出ません。」',
      zhCN: '「你明显偏外向——人际是你的能量来源。」',
      zhTW: '「你明顯偏外向——人際是你的能量來源。」',
      vi: '"Bạn rõ ràng hướng ngoại—con người là nhiên liệu của bạn."',
      id: '"Kamu jelas ekstrover—orang adalah bahan bakarmu."',
    }),
    indexBand: T({
      ko: 'E 75~83% / I 17~25%',
      en: 'E 75–83% / I 17–25%',
      ja: 'E 75〜83% / I 17〜25%',
      zhCN: 'E 75~83% / I 17~25%',
      zhTW: 'E 75~83% / I 17~25%',
      vi: 'E 75–83% / I 17–25%',
      id: 'E 75–83% / I 17–25%',
    }),
    description: T({
      ko: '사람을 만나고 대화하고 어울리는 것이 에너지의 주된 원천인 타입입니다. 혼자 있는 시간이 길어지면 왠지 무기력해지거나 허전한 느낌이 드는 것이 익숙합니다. 새로운 사람을 만나는 것에 큰 장벽이 없고, 먼저 말을 거는 것도 자연스럽습니다. 어디서든 자연스럽게 분위기를 만드는 사람입니다.',
      en: 'Meeting, talking, and hanging out is your main energy source. Long stretches alone feel listless or empty—you know that feeling. New people are not a big hurdle, and you naturally start conversations. You lift the mood wherever you go.',
      ja: '人と会い話し、交わることが主なエネルギー源。一人が長いと無気力や虚しさを覚えやすい。新しい人への壁は低く、自分から話しかけられる。どこでも空気を明るくするタイプ。',
      zhCN: '见面聊天社交是你的主要能量来源。独处久了容易没劲或空虚。见新人障碍不大，主动搭话很自然。常能带动气氛。',
      zhTW: '見面聊天社交是你的主要能量來源。獨處久了容易沒勁或空虛。見新人障礙不大，主動搭話很自然。常能帶動氣氛。',
      vi: 'Gặp gỡ, trò chuyện, giao lưu là nguồn năng lượng chính. Ở một mình lâu dễ uể oải hoặc trống rỗng. Người mới không phải rào cản lớn, bạn chủ động bắt chuyện tự nhiên. Bạn làm không khí sôi động mọi nơi.',
      id: 'Bertemu, ngobrol, bergaul adalah sumber energi utama. Lama sendiri terasa lesu atau hampa. Orang baru bukan halangan besar, memulai obrolan terasa alami. Kamu membawa suasana hidup.',
    }),
    characteristics: T({
      ko: '에너지 충전 방식: 사람과의 대화, 모임, 새로운 만남, 활기찬 환경。에너지 방전 상황: 오랜 고독, 사람 없는 조용한 환경, 혼자 해결해야 하는 긴 작업。이 지수를 가진 사람의 특징: 강한 사교성, 빠른 관계 형성, 분위기 메이커, 설득력。강한 E의 주의점: 혼자만의 시간이 부족해도 괜찮다고 느끼지만 사실 주기적인 리셋 시간이 필요합니다。',
      en: 'Recharge: conversation, gatherings, new faces, lively settings. Drain: long isolation, quiet empty spaces, long solo work. Traits: strong social skills, quick bonding, mood-setting, persuasion. Watch out: you may think you do not need alone time, but periodic resets matter.',
      ja: '充電：会話、集まり、新しい出会い、賑やかな環境。消耗：長い孤独、人のいない静けさ、長時間の単独作業。特徴：社交力、関係形成、ムードメーカー、説得力。注意：一人時間は不要に思えても定期的なリセットが必要。',
      zhCN: '充电：对话、聚会、新面孔、热闹环境。耗电：长期孤独、无人安静环境、长时间独自工作。特点：善社交、快熟、带气氛、说服力。注意：别以为不需要独处，定期重置很重要。',
      zhTW: '充電：對話、聚會、新面孔、熱鬧環境。耗電：長期孤獨、無人安靜環境、長時間獨自工作。特點：善社交、快熟、帶氣氛、說服力。注意：別以為不需要獨處，定期重置很重要。',
      vi: 'Nạp điện: trò chuyện, tụ họp, gặp mới, không khí sôi động. Hao pin: cô đơn lâu, yên tĩnh không người, làm việc dài một mình. Đặc điểm: giao tiếp mạnh, kết nối nhanh, tạo không khí, thuyết phục. Lưu ý: có thể tưởng không cần một mình, nhưng cần reset định kỳ.',
      id: 'Isi ulang: obrolan, kumpul, orang baru, lingkungan ramai. Habis energi: kesendirian lama, sepi tanpa orang, kerja panjang sendiri. Ciri: sosial kuat, cepat akrab, penggerak suasana, persuasif. Perhatian: seolah tidak butuh sendiri, padahal perlu reset berkala.',
    }),
    goodMatch: T({
      ko: '일주일에 한 번은 의도적으로 혼자만의 반나절을 만들어보세요. E도 리셋이 필요합니다',
      en: 'Once a week, plan a half-day alone on purpose—even Es need a reset.',
      ja: '週に一度は意図的に半日だけ一人の時間を。Eにもリセットが必要。',
      zhCN: '每周刻意留半天独处——外向型也需要重置。',
      zhTW: '每週刻意留半天獨處——外向型也需要重置。',
      vi: 'Mỗi tuần chủ động nửa ngày một mình—người E cũng cần reset.',
      id: 'Seminggu sekali sisihkan setengah hari sendiri dengan sengaja—E juga perlu reset.',
    }),
    badMatch: T({
      ko: '세일즈, 이벤트 플래너, 연예인, 아나운서, 정치인',
      en: 'Sales, event planner, entertainer, announcer, politician',
      ja: 'セールス、イベントプランナー、芸能人、アナウンサー、政治家',
      zhCN: '销售、活动策划、演艺人员、主持人、政治人物',
      zhTW: '業務、活動企劃、演藝人員、主持人、政治人物',
      vi: 'Kinh doanh, tổ chức sự kiện, nghệ sĩ, MC, chính trị gia',
      id: 'Sales, perencana acara, selebriti, pembawa acara, politisi',
    }),
    shareLine: T({
      ko: '나의 E지수는 {ePercent}% 🎉 강한 E. 사람 없으면 에너지 방전 → 너는 몇 %야?',
      en: 'My E index is {ePercent}% 🎉 Strong E—I drain without people. Your %?',
      ja: '私のE指数は{ePercent}% 🎉強めE。人がいないと消耗。あなたは？',
      zhCN: '我的 E 指数是 {ePercent}% 🎉 偏强 E，没人就掉电——你呢？',
      zhTW: '我的 E 指數是 {ePercent}% 🎉 偏強 E，沒人就掉電——你呢？',
      vi: 'Chỉ số E {ePercent}% 🎉 E mạnh—không có người là hết pin. Bạn bao nhiêu?',
      id: 'Indeks E {ePercent}% 🎉 E kuat—tanpa orang energi habis. Kamu berapa?',
    }),
  },
  {
    type: 'Type6',
    emoji: '🔥',
    title: T({
      ko: '진성 외향인, E지수 92~100%',
      en: 'True extrovert — E index 92–100%',
      ja: '真性外向、E指数92〜100%',
      zhCN: '典型外向，E 指数 92~100%',
      zhTW: '典型外向，E 指數 92~100%',
      vi: 'Hướng ngoại thuần — chỉ số E 92–100%',
      id: 'Ekstrover murni — indeks E 92–100%',
    }),
    shortDescription: T({
      ko: '"당신은 거의 완전한 외향인입니다. 사람 = 산소입니다."',
      en: '"You are almost fully extroverted—people are oxygen."',
      ja: '「あなたはほぼ完全な外向型です。人＝酸素です。」',
      zhCN: '「你几乎是典型的外向型——人就是你的氧气。」',
      zhTW: '「你幾乎是典型的外向型——人就是你的氧氣。」',
      vi: '"Bạn gần như hoàn toàn hướng ngoại—con người là oxy."',
      id: '"Kamu hampir sepenuhnya ekstrover—orang adalah oksigen."',
    }),
    indexBand: T({
      ko: 'E 92~100% / I 0~8%',
      en: 'E 92–100% / I 0–8%',
      ja: 'E 92〜100% / I 0〜8%',
      zhCN: 'E 92~100% / I 0~8%',
      zhTW: 'E 92~100% / I 0~8%',
      vi: 'E 92–100% / I 0–8%',
      id: 'E 92–100% / I 0–8%',
    }),
    description: T({
      ko: '혼자 있는 시간이 단순히 불편한 게 아니라 에너지가 급격히 빠지는 느낌이 드는 사람입니다. 새로운 사람을 만나도 전혀 낯설지 않고, 처음 보는 사람에게도 먼저 다가가는 것이 자연스럽습니다. 모임이 끝난 후 오히려 에너지가 더 생기는 독특한 충전 방식을 가지고 있습니다. 어디서든 중심이 되는 타입입니다.',
      en: 'Alone time does not just feel awkward—it sharply drains you. New people feel familiar, and approaching strangers comes naturally. After events you may feel even more charged. You tend to be the center of gravity anywhere.',
      ja: '一人の時間は単に居心地が悪いだけでなく、急激にエネルギーが落ちる。初対面でも壁が低く、先に話しかけられる。集まりの後にむしろ元気になることも。どこでも中心になりやすい。',
      zhCN: '独处不只别扭，还会明显掉电。见新人也不陌生，对陌生人也能先开口。聚会后反而更有劲。常是人群中心。',
      zhTW: '獨處不只彆扭，還會明顯掉電。見新人也不陌生，對陌生人也能先開口。聚會後反而更有勁。常是人群中心。',
      vi: 'Một mình không chỉ khó chịu—mà làm bạn hao năng lượng mạnh. Người mới không lạ, chủ động làm quen rất tự nhiên. Sau buổi gặp đôi khi càng hứng khởi. Dễ là trung tâm mọi nơi.',
      id: 'Waktu sendiri bukan sekadar canggung—energi bisa turun drastis. Orang baru tidak asing, menyapa orang asing alami. Setelah acara kadang malah lebih bersemangat. Sering jadi pusat perhatian.',
    }),
    characteristics: T({
      ko: '에너지 충전 방식: 사람, 대화, 새로운 자극, 활기찬 환경 모두。에너지 방전 상황: 혼자 있는 긴 시간. 완전한 고독은 진성 E에게 고통일 수 있음。이 지수를 가진 사람의 특징: 타고난 소통 능력, 에너지 전파력, 빠른 판단력, 강한 존재감。진성 E의 오해: 깊이가 없는 게 아닙니다. 단지 에너지 충전 방식이 다를 뿐입니다。',
      en: 'Recharge: people, talk, novelty, lively environments. Drain: long stretches alone—total solitude can hurt a true E. Traits: natural communication, contagious energy, quick judgment, strong presence. Misread: it is not that you lack depth—your recharge style is just different.',
      ja: '充電：人、会話、新しい刺激、活気ある環境すべて。消耗：長い一人時間。完全な孤独は真性Eには苦しい。特徴：コミュ力、熱の伝播、判断力、存在感。誤解：深さがないのではなく、充電の仕方が違うだけ。',
      zhCN: '充电：人际、对话、新刺激、热闹环境。耗电：长时间独处，完全孤独对典型 E 很痛苦。特点：沟通力、感染力、决断、存在感。误解：不是没深度，只是充电方式不同。',
      zhTW: '充電：人際、對話、新刺激、熱鬧環境。耗電：長時間獨處，完全孤獨對典型 E 很痛苦。特點：溝通力、感染力、決斷、存在感。誤解：不是沒深度，只是充電方式不同。',
      vi: 'Nạp điện: người, trò chuyện, kích thích mới, môi trường sôi động. Hao pin: một mình lâu—cô đơn hoàn toàn có thể đau với E thuần. Đặc điểm: giao tiếp bẩm sinh, truyền năng lượng, phán đoán nhanh, hiện diện mạnh. Hiểu nhầm: không phải thiếu chiều sâu—chỉ khác cách nạp điện.',
      id: 'Isi ulang: orang, obrolan, rangsangan baru, lingkungan ramai. Habis energi: lama sendiri—kesunyian total bisa menyakitkan bagi E murni. Ciri: komunikasi alami, energi menular, putusan cepat, hadir kuat. Salah paham: bukan kurang kedalaman—cara isi ulangmu beda.',
    }),
    goodMatch: T({
      ko: '혼자만의 시간이 불편하더라도 한 달에 한 번은 혼자서 하루를 보내보세요. 자신을 더 깊이 알게 됩니다',
      en: 'Even if solitude feels bad, try one full solo day a month—you will know yourself deeper.',
      ja: '一人が苦でも、月に一度は一日だけ一人で過ごしてみて。自分を深く知れます。',
      zhCN: '即使独处难受，也试试每月留一天完全独处，会更了解自己。',
      zhTW: '即使獨處難受，也試試每月留一天完全獨處，會更了解自己。',
      vi: 'Dù một mình khó chịu, thử một ngày hoàn toàn một mình mỗi tháng—bạn hiểu mình sâu hơn.',
      id: 'Walau sendiri tidak nyaman, coba satu hari penuh sendiri sebulan sekali—kamu mengenal diri lebih dalam.',
    }),
    badMatch: T({
      ko: 'MC, 유튜버, 배우, 영업 1등, 파티 플래너',
      en: 'Host, YouTuber, actor, top sales, party planner',
      ja: 'MC、YouTuber、俳優、トップセールス、パーティプランナー',
      zhCN: '主持人、博主、演员、顶尖销售、派对策划',
      zhTW: '主持人、YouTuber、演員、頂尖業務、派對企劃',
      vi: 'MC, YouTuber, diễn viên, sales hàng đầu, tổ chức tiệc',
      id: 'MC, YouTuber, aktor, sales top, perencana pesta',
    }),
    shareLine: T({
      ko: '나의 E지수는 {ePercent}% 🔥 진성 E 확정. 사람 = 산소인 사람 → 너는 몇 %야?',
      en: 'My E index is {ePercent}% 🔥 True E—people = oxygen. What is your %?',
      ja: '私のE指数は{ePercent}% 🔥真性E確定。人＝酸素。あなたは？',
      zhCN: '我的 E 指数是 {ePercent}% 🔥 典型外向，人=氧气——你呢？',
      zhTW: '我的 E 指數是 {ePercent}% 🔥 典型外向，人=氧氣——你呢？',
      vi: 'Chỉ số E {ePercent}% 🔥 E thuần—người = oxy. Bạn bao nhiêu %?',
      id: 'Indeks E {ePercent}% 🔥 E murni—orang = oksigen. Kamu berapa %?',
    }),
  },
];
