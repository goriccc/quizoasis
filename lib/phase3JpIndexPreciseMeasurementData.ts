/** 나의 J/P 지수 정밀 측정 — phase3-jp-index-precise-measurement */

export type Phase3JpIndexLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';

function T(t: {
  ko: string;
  en: string;
  ja: string;
  zhCN: string;
  zhTW: string;
  vi: string;
  id: string;
}): Record<Phase3JpIndexLocaleKey, string> {
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

export interface Phase3JpIndexPreciseMeasurementQuestion {
  id: number;
  question: Record<Phase3JpIndexLocaleKey, string>;
  options: {
    text: Record<Phase3JpIndexLocaleKey, string>;
    score: number; // A=J=0, B=P=1
  }[];
}

export interface Phase3JpIndexPreciseMeasurementResult {
  type: string;
  emoji: string;
  title: Record<Phase3JpIndexLocaleKey, string>;
  shortDescription: Record<Phase3JpIndexLocaleKey, string>;
  description: Record<Phase3JpIndexLocaleKey, string>;
  indexBand: Record<Phase3JpIndexLocaleKey, string>;
  characteristics: Record<Phase3JpIndexLocaleKey, string>;
  goodMatch: Record<Phase3JpIndexLocaleKey, string>;
  badMatch: Record<Phase3JpIndexLocaleKey, string>;
  /** SNS 공유 문구 — {pPercent} 치환 */
  shareLine: Record<Phase3JpIndexLocaleKey, string>;
}

/** 원점수(0~12) → P%/J% (기획서 표, T/F와 동일 구조) */
export const PHASE3_JP_SCORE_TO_PJ: { p: number; j: number }[] = [
  { p: 0, j: 100 },
  { p: 8, j: 92 },
  { p: 17, j: 83 },
  { p: 25, j: 75 },
  { p: 33, j: 67 },
  { p: 42, j: 58 },
  { p: 50, j: 50 },
  { p: 58, j: 42 },
  { p: 67, j: 33 },
  { p: 75, j: 25 },
  { p: 83, j: 17 },
  { p: 92, j: 8 },
  { p: 100, j: 0 },
];

export function getJpPercentFromRawScore(rawScore: number): { p: number; j: number } {
  const s = Math.max(0, Math.min(12, Math.round(rawScore)));
  return PHASE3_JP_SCORE_TO_PJ[s] ?? PHASE3_JP_SCORE_TO_PJ[0];
}

export function calculatePhase3JpIndexPreciseMeasurementResult(answers: number[]): string {
  const total = answers.reduce((sum, n) => sum + n, 0);
  if (total <= 2) return 'Type1';
  if (total <= 4) return 'Type2';
  if (total <= 6) return 'Type3';
  if (total <= 8) return 'Type4';
  if (total <= 10) return 'Type5';
  return 'Type6';
}

export const phase3JpIndexPreciseMeasurementQuestions: Phase3JpIndexPreciseMeasurementQuestion[] = [
  {
    id: 1,
    question: T({
      ko: '주말 계획을 세우는 나의 방식은?',
      en: 'How do I plan my weekends?',
      ja: '週末の予定の立て方、あなたは？',
      zhCN: '周末计划我会怎么安排？',
      zhTW: '週末計畫我會怎麼安排？',
      vi: 'Cuối tuần bạn hay lên kế hoạch thế nào?',
      id: 'Gimana kamu merencanakan akhir pekan?',
    }),
    options: [
      {
        text: T({
          ko: '월요일부터 주말에 뭐 할지 생각해두는 편이다. 계획이 있어야 기대가 된다',
          en: 'I think about the weekend from Monday; I need a plan to look forward to it.',
          ja: '月曜から週末のことを考える。予定があるから楽しみになる。',
          zhCN: '从周一开始就会想周末做什么，有计划才值得期待。',
          zhTW: '從週一就會想週末做什麼，有計畫才值得期待。',
          vi: 'Từ thứ Hai đã nghĩ cuối tuần làm gì; cần có kế hoạch thì mới háo hức.',
          id: 'Dari Senin sudah mikirin akhir pekan; perlu rencana baru semangat.',
        }),
        score: 0,
      },
      {
        text: T({
          ko: '금요일 저녁이 되어야 그때그때 결정한다. 계획 없는 주말이 더 자유롭다',
          en: 'I decide on the spot by Friday evening. A plan-free weekend feels freer.',
          ja: '金曜の夜になってその場で決める。予定ゼロの週末のほうが自由。',
          zhCN: '要到周五晚上才临时决定，没有计划的周末更自由。',
          zhTW: '要到週五晚上才臨時決定，沒有計畫的週末更自由。',
          vi: 'Đến tối thứ Sáu mới quyết định; cuối tuần không kế hoạch tự do hơn.',
          id: 'Baru putuskan Jumat malam; akhir pekan tanpa rencana lebih bebas.',
        }),
        score: 1,
      },
    ],
  },
  {
    id: 2,
    question: T({
      ko: '여행을 앞두고 나는?',
      en: 'Before a trip, I…',
      ja: '旅行前、私は？',
      zhCN: '旅行前我会怎么做？',
      zhTW: '旅行前我會怎麼做？',
      vi: 'Trước chuyến đi, tôi…',
      id: 'Sebelum traveling, aku…',
    }),
    options: [
      {
        text: T({
          ko: '숙소·이동 수단·식당·일정을 미리 정리해둔다. 현장에서 헤매는 게 싫다',
          en: 'I line up lodging, transport, restaurants, and schedule in advance—I hate wandering lost.',
          ja: '宿・移動・レストラン・日程を先に固める。現地で迷うのは嫌。',
          zhCN: '提前订好住宿、交通、餐厅和行程，讨厌到现场瞎转。',
          zhTW: '提前訂好住宿、交通、餐廳和行程，討厭到現場瞎轉。',
          vi: 'Book chỗ ở, đi lại, nhà hàng, lịch trước—ghét lạc đường ở điểm đến.',
          id: 'Urutkan hotel, transport, restoran, jadwal—benci nyasar di lokasi.',
        }),
        score: 0,
      },
      {
        text: T({
          ko: '항공권과 숙소 정도만 잡아두고 나머지는 현지에서 결정한다. 즉흥이 묘미다',
          en: 'I only lock flights and lodging; the rest is decided on the spot—that is the fun.',
          ja: '航空券と宿だけ押さえて、あとは現地で。即興が醍醐味。',
          zhCN: '只订机票和住宿，其余当地再定，即兴才是乐趣。',
          zhTW: '只訂機票和住宿，其餘當地再定，即興才是樂趣。',
          vi: 'Chỉ giữ vé và chỗ ở; còn lại quyết tại chỗ—thú vị là tự phát.',
          id: 'Cuma tiket dan hotel; sisanya di tempat—serunya spontan.',
        }),
        score: 1,
      },
    ],
  },
  {
    id: 3,
    question: T({
      ko: '마감이나 약속 시간에 대한 나의 태도는?',
      en: 'My attitude toward deadlines or appointment times?',
      ja: '締切や約束の時間、どんな態度？',
      zhCN: '对截止日或约定时间我的态度是？',
      zhTW: '對截止日或約定時間我的態度是？',
      vi: 'Thái độ của bạn với deadline hoặc giờ hẹn?',
      id: 'Sikapmu ke deadline atau waktu janji?',
    }),
    options: [
      {
        text: T({
          ko: '기한 전에 미리 끝내야 마음이 편하다. 마감 직전 제출은 스트레스다',
          en: 'I need to finish early; submitting at the last second stresses me out.',
          ja: '期限前に終わらせないと落ち着かない。ギリギリ提出はストレス。',
          zhCN: '必须提前做完才安心，截止前一刻交很有压力。',
          zhTW: '必須提前做完才安心，截止前一刻交很有壓力。',
          vi: 'Phải xong sớm mới yên tâm; nộp sát giờ rất căng.',
          id: 'Harus selesai lebih awal; numpuk di detik terakhir stres.',
        }),
        score: 0,
      },
      {
        text: T({
          ko: '마감이 닥쳐야 집중력이 올라간다. 촉박한 상황이 오히려 효율적일 때가 있다',
          en: 'Pressure unlocks my focus; tight deadlines sometimes make me more efficient.',
          ja: '締切が迫ると集中が上がる。ギリギリのほうが効率的なことも。',
          zhCN: '截止临近才进入状态，紧迫时反而更高效。',
          zhTW: '截止鄰近才進入狀態，緊迫時反而更高效。',
          vi: 'Sát deadline mới tập trung; lúc gấp đôi khi hiệu quả hơn.',
          id: 'Dekati deadline baru fokus; tekanan kadang bikin lebih efisien.',
        }),
        score: 1,
      },
    ],
  },
  {
    id: 4,
    question: T({
      ko: '쇼핑할 때 나는?',
      en: 'When I shop, I…',
      ja: '買い物のとき、私は？',
      zhCN: '购物时我会？',
      zhTW: '購物時我會？',
      vi: 'Khi mua sắm, tôi…',
      id: 'Saat belanja, aku…',
    }),
    options: [
      {
        text: T({
          ko: '살 것 목록을 미리 정하고 그것만 산다. 계획 없는 쇼핑은 비효율적이다',
          en: 'I make a list and buy only that—shopping without a list feels inefficient.',
          ja: '買うものリストを決めてそれだけ。リストなしは非効率。',
          zhCN: '先列清单只买清单上的，没计划购物效率低。',
          zhTW: '先列清單只買清單上的，沒計畫購物效率低。',
          vi: 'Lên danh sách và chỉ mua đúng vậy—mua không kế hoạch kém hiệu quả.',
          id: 'Buat daftar dan beli sesuai itu—belanja tanpa daftar tidak efisien.',
        }),
        score: 0,
      },
      {
        text: T({
          ko: '일단 둘러보다가 끌리는 게 있으면 산다. 목록은 참고용이고 현장에서 결정한다',
          en: 'I browse first and buy what pulls me; the list is a hint—I decide in the moment.',
          ja: 'まず見て回って惹かれたら買う。リストは目安、現場で決める。',
          zhCN: '先逛，心动再买，清单仅供参考，现场决定。',
          zhTW: '先逛，心動再買，清單僅供參考，現場決定。',
          vi: 'Xem trước, thích thì mua; danh sách chỉ tham khảo, quyết tại chỗ.',
          id: 'Lihat dulu, suka baru beli; daftar cuma acuan, putuskan di tempat.',
        }),
        score: 1,
      },
    ],
  },
  {
    id: 5,
    question: T({
      ko: '방이나 책상이 정리되지 않으면 나는?',
      en: 'If my room or desk is messy, I…',
      ja: '部屋や机が散らかっていると、私は？',
      zhCN: '房间或桌子乱时我会？',
      zhTW: '房間或桌子亂時我會？',
      vi: 'Phòng hoặc bàn bừa bộn thì tôi…',
      id: 'Kalau kamar atau meja berantakan, aku…',
    }),
    options: [
      {
        text: T({
          ko: '집중이 안 된다. 정리된 환경이어야 일이 손에 잡힌다',
          en: 'I cannot focus; I need a tidy space to get work done.',
          ja: '集中できない。片付いた環境じゃないと仕事が進まない。',
          zhCN: '无法专注，整洁环境才能上手做事。',
          zhTW: '無法專注，整潔環境才能上手做事。',
          vi: 'Không tập trung được; cần gọn gàng mới làm việc được.',
          id: 'Sulit fokus; perlu rapi baru kerja lancar.',
        }),
        score: 0,
      },
      {
        text: T({
          ko: '어느 정도 어질러진 게 오히려 편하다. 너무 정돈된 공간이 오히려 낯설다',
          en: 'A bit of clutter feels fine; an overly neat space actually feels odd.',
          ja: 'ある程度散らかっているほうが落ち着く。完璧に整いすぎると違和感。',
          zhCN: '有点乱反而舒服，太整齐的空间反而不自在。',
          zhTW: '有點亂反而舒服，太整齊的空間反而不自在。',
          vi: 'Hơi bừa lại thoải mái; quá gọn lại lạ.',
          id: 'Agak berantakan malah nyaman; terlalu rapi malah asing.',
        }),
        score: 1,
      },
    ],
  },
  {
    id: 6,
    question: T({
      ko: '친구가 "지금 당장 나올 수 있어?"라고 연락이 왔을 때 나는?',
      en: 'When a friend texts “Can you come out right now?” I…',
      ja: '友達に「今すぐ会える？」と来たら、私は？',
      zhCN: '朋友发“现在能出来吗？”时我会？',
      zhTW: '朋友傳「現在能出來嗎？」時我會？',
      vi: 'Khi bạn nhắn “Giờ ra được không?” tôi…',
      id: 'Saat teman chat “Bisa keluar sekarang?” aku…',
    }),
    options: [
      {
        text: T({
          ko: '갑작스러운 약속이 불편하다. 미리 알았으면 좋았을 텐데라는 생각이 든다',
          en: 'Sudden plans feel uncomfortable—I wish I had known earlier.',
          ja: '急な予定は苦手。もっと早く知りたかった。',
          zhCN: '临时约让我不舒服，会想早知道就好了。',
          zhTW: '臨時約讓我不舒服，會想早知道就好了。',
          vi: 'Hẹn đột ngột khó chịu—ước được báo trước.',
          id: 'Janji mendadak tidak nyaman—pengin tahu lebih awal.',
        }),
        score: 0,
      },
      {
        text: T({
          ko: '상황이 되면 바로 나간다. 즉흥 약속이 오히려 더 재밌을 때가 많다',
          en: 'If I can swing it, I go—spur-of-the-moment hangs are often more fun.',
          ja: '行けるならすぐ出る。即興のほうが楽しいことも多い。',
          zhCN: '能去就马上出门，即兴约会往往更有趣。',
          zhTW: '能去就馬上出門，即興約會往往更有趣。',
          vi: 'Được là đi ngay; hẹn tự phát đôi khi vui hơn.',
          id: 'Kalau bisa langsung pergi; janji spontan sering lebih seru.',
        }),
        score: 1,
      },
    ],
  },
  {
    id: 7,
    question: T({
      ko: '업무나 공부를 할 때 나의 방식은?',
      en: 'How I work or study?',
      ja: '仕事や勉強のやり方、私は？',
      zhCN: '工作或学习时我的方式是？',
      zhTW: '工作或學習時我的方式是？',
      vi: 'Khi làm việc hay học, tôi…',
      id: 'Saat kerja atau belajar, caraku…',
    }),
    options: [
      {
        text: T({
          ko: '전체 할 일 목록을 정리하고 순서대로 하나씩 처리한다',
          en: 'I organize the full to-do list and handle items in order.',
          ja: 'やること一覧を整理して順番に片付ける。',
          zhCN: '整理完整待办清单，按顺序一件件完成。',
          zhTW: '整理完整待辦清單，按順序一件件完成。',
          vi: 'Sắp danh sách việc và xử lý theo thứ tự.',
          id: 'Rapikan daftar tugas dan kerjakan berurutan.',
        }),
        score: 0,
      },
      {
        text: T({
          ko: '그날그날 하고 싶은 것 또는 급한 것부터 처리한다. 리스트보다 흐름을 따른다',
          en: 'I follow what feels urgent or appealing that day—I follow flow more than a list.',
          ja: 'その日の気分や急ぎから。リストより流れ。',
          zhCN: '按当天想做的或紧急的先做，跟着节奏多于清单。',
          zhTW: '按當天想做的或緊急的先做，跟著節奏多於清單。',
          vi: 'Ưu tiên việc gấp hoặc hứng—theo dòng hơn là danh sách.',
          id: 'Yang mendesak atau mood hari itu—ikut alur, bukan daftar.',
        }),
        score: 1,
      },
    ],
  },
  {
    id: 8,
    question: T({
      ko: '결정을 내릴 때 나는?',
      en: 'When I make decisions, I…',
      ja: '決めるとき、私は？',
      zhCN: '做决定时我会？',
      zhTW: '做決定時我會？',
      vi: 'Khi quyết định, tôi…',
      id: 'Saat memutuskan, aku…',
    }),
    options: [
      {
        text: T({
          ko: '여러 가지를 충분히 비교하고 결론을 내려야 안심이 된다. 결정이 한번 내려지면 바꾸기 싫다',
          en: 'I compare options thoroughly before deciding; once decided, I dislike changing.',
          ja: '十分比較してから決める。一度決めたら変えたくない。',
          zhCN: '充分比较再决定，一旦定下就不爱改。',
          zhTW: '充分比較再決定，一旦定下就不愛改。',
          vi: 'So sánh kỹ rồi mới quyết; đã chọn thì không thích đổi.',
          id: 'Bandingkan dulu baru putus; sudah putus tidak suka ubah.',
        }),
        score: 0,
      },
      {
        text: T({
          ko: '일단 결정하고 나서도 더 좋은 옵션이 생기면 바꿀 수 있다. 유연하게 열어두는 게 좋다',
          en: 'I decide and stay open—if a better option appears, I can switch.',
          ja: '一旦決めても、より良い選択が出たら変えられる。柔軟に。',
          zhCN: '先决定也保留弹性，有更好的选项可以改。',
          zhTW: '先決定也保留彈性，有更好的選項可以改。',
          vi: 'Quyết rồi vẫn mở—có lựa chọn tốt hơn thì đổi được.',
          id: 'Putuskan tapi tetap fleksibel—ada opsi lebih baik bisa ganti.',
        }),
        score: 1,
      },
    ],
  },
  {
    id: 9,
    question: T({
      ko: '하루 일과가 예상과 달리 흘러갔을 때 나는?',
      en: 'When my day goes off-script, I…',
      ja: '一日の流れが予想と違ったら、私は？',
      zhCN: '一天不按预想发展时我会？',
      zhTW: '一天不按預想發展時我會？',
      vi: 'Khi ngày trôi khác dự kiến, tôi…',
      id: 'Saat hari tidak sesuai rencana, aku…',
    }),
    options: [
      {
        text: T({
          ko: '계획이 틀어지면 불편하다. 다시 궤도에 올려야 한다는 부담감이 생긴다',
          en: 'Changes feel uncomfortable—I feel pressure to get back on track.',
          ja: '予定が崩れると落ち着かない。軌道に戻したいプレッシャー。',
          zhCN: '计划被打乱会不安，想赶紧拉回正轨。',
          zhTW: '計畫被打亂會不安，想趕緊拉回正軌。',
          vi: 'Lệch kế hoạch là khó chịu—áp lực phải kéo lại đúng guồng.',
          id: 'Rencana berantakan bikin tidak nyaman—ingin cepat kembali ke jalur.',
        }),
        score: 0,
      },
      {
        text: T({
          ko: '예상과 다른 방향으로 흘러가는 게 나쁘지 않다. 새로운 흐름에 맞춰 간다',
          en: 'Going a different way is fine—I roll with the new flow.',
          ja: '予想外の流れも悪くない。新しい流れに乗る。',
          zhCN: '走偏一点也不错，跟着新节奏走。',
          zhTW: '走偏一點也不錯，跟著新節奏走。',
          vi: 'Đi lệch hướng cũng ổn—theo dòng mới.',
          id: 'Jalan lain tidak apa-apa—ikut arus baru.',
        }),
        score: 1,
      },
    ],
  },
  {
    id: 10,
    question: T({
      ko: '메신저나 이메일 답장 방식은?',
      en: 'How I handle messages or email replies?',
      ja: 'メッセージやメールの返し方は？',
      zhCN: '回消息或邮件我的习惯是？',
      zhTW: '回訊息或郵件我的習慣是？',
      vi: 'Cách trả lời tin nhắn hoặc email?',
      id: 'Cara membalas chat atau email?',
    }),
    options: [
      {
        text: T({
          ko: '받으면 가능한 빨리 처리한다. 미답장이 쌓이면 신경 쓰인다',
          en: 'I reply as soon as I can; unanswered threads nag at me.',
          ja: '来たらできるだけ早く返す。未返信が溜まると気になる。',
          zhCN: '收到就尽快处理，未回复堆着会难受。',
          zhTW: '收到就盡快處理，未回覆堆著會難受。',
          vi: 'Trả sớm nhất có thể; chờ trả lời nhiều là bứt rứt.',
          id: 'Balas secepatnya; menumpuk belum dibalas bikin gelisah.',
        }),
        score: 0,
      },
      {
        text: T({
          ko: '나중에 한꺼번에 확인하거나 생각날 때 답장한다. 실시간 처리가 꼭 필요하지 않다',
          en: 'I batch-check later or reply when it comes to mind—real-time is not a must.',
          ja: '後でまとめて見るか、思い出したときに。即時は必須じゃない。',
          zhCN: '稍后批量看或想起来再回，不必实时。',
          zhTW: '稍後批量看或想起來再回，不必即時。',
          vi: 'Xem gộp sau hoặc nhớ mới trả—không cần thời gian thực.',
          id: 'Cek sekaligus nanti atau pas ingat—tidak harus real time.',
        }),
        score: 1,
      },
    ],
  },
  {
    id: 11,
    question: T({
      ko: '선택지가 많을 때 나는?',
      en: 'When there are many options, I…',
      ja: '選択肢が多いとき、私は？',
      zhCN: '选择很多时我会？',
      zhTW: '選擇很多時我會？',
      vi: 'Khi có nhiều lựa chọn, tôi…',
      id: 'Saat banyak pilihan, aku…',
    }),
    options: [
      {
        text: T({
          ko: '빠르게 비교해서 결정하고 싶다. 선택지가 많으면 오히려 피곤하다',
          en: 'I want to compare quickly and decide—too many choices tire me.',
          ja: '早く比較して決めたい。選択肢が多いと疲れる。',
          zhCN: '想快点比较后决定，选项太多反而累。',
          zhTW: '想快點比較後決定，選項太多反而累。',
          vi: 'Muốn so sánh nhanh rồi quyết—quá nhiều lựa chọn mệt.',
          id: 'Ingin bandingkan cepat lalu putus—terlalu banyak pilihan melelahkan.',
        }),
        score: 0,
      },
      {
        text: T({
          ko: '가능한 많은 선택지를 열어두고 싶다. 결정을 서두르면 더 좋은 것을 놓칠 수 있다',
          en: 'I like keeping options open—rushing might miss something better.',
          ja: 'できるだけ選択肢を残したい。急ぐと良いものを逃す。',
          zhCN: '想尽量保留选项，急着决定可能错过更好的。',
          zhTW: '想盡量保留選項，急著決定可能錯過更好的。',
          vi: 'Muốn giữ càng nhiều lựa chọn càng tốt—vội có thể bỏ lỡ.',
          id: 'Ingin jaga opsi tetap terbuka—buru-buru bisa melewatkan yang lebih baik.',
        }),
        score: 1,
      },
    ],
  },
  {
    id: 12,
    question: T({
      ko: '나를 가장 잘 표현하는 문장은?',
      en: 'Which sentence fits me best?',
      ja: '自分を一番よく表す一文は？',
      zhCN: '哪句话最像我？',
      zhTW: '哪句話最像我？',
      vi: 'Câu nào mô tả bạn nhất?',
      id: 'Kalimat mana yang paling menggambarkanmu?',
    }),
    options: [
      {
        text: T({
          ko: '"결정되지 않은 것들이 많으면 불안하다. 정해진 것들이 많을수록 안정적이다"',
          en: '"Too many open ends makes me anxious—the more is decided, the safer I feel."',
          ja: '「未決定が多いと不安。決まっているほど安心。」',
          zhCN: '「未定的事太多会焦虑，定下来的越多越安心。」',
          zhTW: '「未定的事太多會焦慮，定下來的越多越安心。」',
          vi: '"Nhiều thứ chưa chốt thì lo—càng chốt nhiều càng yên tâm."',
          id: '"Banyak yang belum diputuskan bikin cemas—semakin banyak yang pasti, semakin tenang."',
        }),
        score: 0,
      },
      {
        text: T({
          ko: '"정해진 것들이 많으면 답답하다. 열려있는 가능성이 많을수록 자유롭다"',
          en: '"Too many fixed plans feel suffocating—the more possibilities stay open, the freer I feel."',
          ja: '「決まりすぎると息苦しい。可能性が開いているほど自由。」',
          zhCN: '「定死的太多会闷，可能性越开放越自由。」',
          zhTW: '「定死的太多會悶，可能性越開放越自由。」',
          vi: '"Quá nhiều thứ đã chốt thì ngột—càng mở khả năng càng tự do."',
          id: '"Terlalu banyak yang sudah pasti bikin sesak—semakin banyak kemungkinan terbuka, semakin bebas."',
        }),
        score: 1,
      },
    ],
  },
];

export const phase3JpIndexPreciseMeasurementResults: Phase3JpIndexPreciseMeasurementResult[] = [
  {
    type: 'Type1',
    emoji: '📋',
    title: T({
      ko: '계획이 곧 행복인, 진성 계획형',
      en: 'Happiness is the plan—true J type',
      ja: '計画こそ幸福・純度の高いJ型',
      zhCN: '计划即快乐，典型 J 型',
      zhTW: '計畫即快樂，典型 J 型',
      vi: 'Hạnh phúc là kế hoạch—kiểu J thuần',
      id: 'Bahagia itu rencana—tipe J murni',
    }),
    shortDescription: T({
      ko: '"당신은 거의 완전한 계획형입니다. 모든 것이 정해져 있어야 마음이 놓입니다."',
      en: '"You are almost fully a J type—everything needs to be settled for you to relax."',
      ja: '「あなたはほぼ完全なJ型。全部決まっていないと落ち着かない。」',
      zhCN: '「你几乎是典型的 J，一切都要定好才安心。」',
      zhTW: '「你幾乎是典型的 J，一切都要定好才安心。」',
      vi: '"Bạn gần như hoàn toàn kiểu J—cần mọi thứ được sắp xếp mới yên tâm."',
      id: '"Kamu hampir sepenuhnya tipe J—semua harus jelas baru tenang."',
    }),
    indexBand: T({
      ko: 'P 0~17% / J 83~100%',
      en: 'P 0–17% / J 83–100%',
      ja: 'P 0〜17% / J 83〜100%',
      zhCN: 'P 0~17% / J 83~100%',
      zhTW: 'P 0~17% / J 83~100%',
      vi: 'P 0–17% / J 83–100%',
      id: 'P 0–17% / J 83–100%',
    }),
    description: T({
      ko: '할 일 목록이 없으면 하루가 시작된 느낌이 안 납니다. 마감 전날까지 버티는 사람들을 이해하기 어렵고, 즉흥 약속은 스트레스입니다. 이것은 경직된 게 아닙니다. 세상을 가장 효율적으로 통제하는 자신만의 방식입니다. 계획된 삶에서 최대의 자유를 누리는 타입입니다.\n\nP와의 갈등 포인트: P형의 "그냥 가서 정하자"가 가장 스트레스. 그 말을 듣는 순간 이미 마음속으로 최악의 시나리오를 그리는 중',
      en: 'Without a to-do list, the day does not feel like it has started. You struggle to understand people who work until the last minute, and spur-of-the-moment plans stress you out. That is not rigidity—it is your way to control the world efficiently. You feel most free when life is planned.\n\nFriction with P: hearing “we will decide there” is peak stress—you are already imagining worst-case scenarios.',
      ja: 'ToDoがないと一日が始まった感じがしない。締切ギリギリ派が理解できず、突発の予定はストレス。硬さではなく、世界を効率よく整えるスタイル。計画された人生で最大の自由を得るタイプ。\n\nPとの摩擦：「現地で決めよう」が一番つらい—その瞬間もう最悪のシナリオを想像している。',
      zhCN: '没有待办清单就不觉得一天开始了。很难理解拖到截止前才做事的人，临时约会让你压力很大。这不是死板，而是你高效掌控世界的方式。在计划好的生活里你才感到最自由。\n\n与 P 的摩擦：听到「到了再定」最崩溃——你已经在脑补最坏情况。',
      zhTW: '沒有待辦清單就不覺得一天開始了。很難理解拖到截止前才做事的人，臨時約會讓你壓力很大。這不是死板，而是你高效掌控世界的方式。在計畫好的生活裡你才感到最自由。\n\n與 P 的摩擦：聽到「到了再定」最崩潰——你已經在腦補最壞情況。',
      vi: 'Không có danh sách việc thì ngày như chưa bắt đầu. Bạn khó hiểu kiểu làm sát deadline; hẹn tự phát gây căng. Đó không phải cứng nhắc—đó là cách bạn kiểm soát hiệu quả. Bạn tự do nhất khi mọi thứ đã lên kế hoạch.\n\nMa sát với P: câu “đến đó rồi quyết” là stress tối đa—bạn đã tưởng tượng kịch bản tệ nhất.',
      id: 'Tanpa daftar tugas, hari terasa belum mulai. Kamu sulit paham yang kerja mepet deadline; janji dadakan bikin stres. Bukan kaku—itulah cara kamu mengendalikan dunia secara efisien. Kamu paling bebas saat hidup terencana.\n\nGesekan dengan P: mendengar “nanti diputuskan di sana” paling menyiksa—kamu sudah membayangkan skenario terburuk.',
    }),
    characteristics: T({
      ko: '생활 방식: 계획 → 실행 → 완료 → 다음 계획. 이 사이클이 가장 편안함. 강점: 높은 실행력, 마감 준수, 체계적 사고, 신뢰성, 목표 달성률 최상위. 약점: 예상치 못한 변수에 스트레스를 받거나 유연성이 부족하게 느껴질 수 있음. 진성 J의 특징: 플래너를 매년 새로 사는 사람. 여행 전날 짐을 완벽하게 싸두는 사람. 공유 달력을 적극 활용하는 사람',
      en: 'Lifestyle: plan → execute → finish → next plan—that loop feels best. Strengths: strong follow-through, deadlines, structure, reliability, top goal completion. Weakness: stress from surprises or feeling inflexible. Classic J: buys a new planner every year; packs perfectly the night before; lives by shared calendars.',
      ja: '生活様式：計画→実行→完了→次の計画。この循環が一番楽。強み：実行力・締切遵守・体系思考・信頼性・目標達成。弱み：想定外にストレス、柔軟性不足に感じることも。純J：毎年手帳を買い換える／前日に完璧に荷造り／共有カレンダー派。',
      zhCN: '生活方式：计划→执行→完成→下一环，这循环最舒服。优势：执行力、守截止、条理、可靠、目标达成。弱点：变数易焦虑或显得不够弹性。典型 J：年年换新手帐、行前夜打包完美、重度共享日历。',
      zhTW: '生活方式：計畫→執行→完成→下一環，這循環最舒服。優勢：執行力、守截止、條理、可靠、目標達成。弱點：變數易焦慮或顯得不夠彈性。典型 J：年年換新手帳、行前夜打包完美、重度共享日曆。',
      vi: 'Lối sống: kế hoạch → làm → xong → kế hoạch tiếp—vòng này thoải nhất. Điểm mạnh: chốt việc, deadline, hệ thống, tin cậy, hoàn thành mục tiêu. Điểm yếu: căng vì bất ngờ hoặc bị thấy cứng. J điển hình: mua sổ mới mỗi năm; gói đồ hoàn hảo đêm trước; lịch chia sẻ.',
      id: 'Gaya hidup: rencana → eksekusi → selesai → rencana berikutnya—siklus ini paling nyaman. Kekuatan: eksekusi, deadline, sistem, andal, capai target. Kelemahan: stres karena kejutan atau terasa kaku. J klasik: beli planner baru tiap tahun; packing sempurna malam sebelumnya; kalender bersama.',
    }),
    goodMatch: T({
      ko: 'P형 파트너나 친구에게 "선택지 두 가지만 줘"라고 해보세요. 열린 질문은 P에겐 자유지만 J에겐 무한 스트레스입니다',
      en: 'Try telling P partners or friends: “Give me only two options.” Open-ended questions feel like freedom to P but infinite stress to J.',
      ja: 'Pの相手には「選択肢は二つだけ」と伝えてみて。オープンな質問はPには自由、Jには無限ストレス。',
      zhCN: '对 P 型伴侣或朋友说「只给我两个选项试试」。开放题对 P 是自由，对 J 是无尽压力。',
      zhTW: '對 P 型伴侶或朋友說「只給我兩個選項試試」。開放題對 P 是自由，對 J 是無盡壓力。',
      vi: 'Hãy thử bảo người P: “Chỉ cho tôi hai lựa chọn.” Câu mở với P là tự do, với J là stress vô hạn.',
      id: 'Coba katakan ke pasangan/teman P: “Berikan hanya dua pilihan.” Pertanyaan terbuka bagi P bebas, bagi J stres tak terbatas.',
    }),
    badMatch: T({
      ko: '외과의사, 회계사, 프로젝트 매니저, 판사, 군 장교, 항공기 조종사',
      en: 'Surgeon, accountant, project manager, judge, military officer, airline pilot',
      ja: '外科医、会計士、PM、裁判官、軍士官、パイロット',
      zhCN: '外科医生、会计师、项目经理、法官、军官、飞行员',
      zhTW: '外科醫師、會計師、專案經理、法官、軍官、飛行員',
      vi: 'Bác sĩ phẫu thuật, kế toán, PM, thẩm phán, sĩ quan, phi công',
      id: 'Dokter bedah, akuntan, manajer proyek, hakim, perwira, pilot',
    }),
    shareLine: T({
      ko: '나의 P지수는 {pPercent}% 📋 진성 J. 플래너 없으면 불안한 사람 확정 → 너는 몇 %야?',
      en: 'My P index is {pPercent}% 📋 True J—no planner, no peace. What about you?',
      ja: '私のP指数は{pPercent}% 📋純J。手帳なきゃ不安確定。あなたは？',
      zhCN: '我的 P 指数是 {pPercent}% 📋典型 J，没手帐不安认证——你呢？',
      zhTW: '我的 P 指數是 {pPercent}% 📋典型 J，沒手帳不安認證——你呢？',
      vi: 'Chỉ số P của tôi là {pPercent}% 📋 J thuần—không sổ tay là lo. Còn bạn?',
      id: 'Indeks P-ku {pPercent}% 📋 J murni—tanpa planner gelisah. Kamu berapa?',
    }),
  },
  {
    type: 'Type2',
    emoji: '🗓️',
    title: T({
      ko: '체계 있는 현실주의자, 강한 계획형',
      en: 'Structured realist—strong J',
      ja: '秩序ある現実主義者・強めのJ',
      zhCN: '有条理的现实主义者，偏强 J',
      zhTW: '有條理的現實主義者，偏強 J',
      vi: 'Người thực tế có hệ thống—J mạnh',
      id: 'Realis berstruktur—J kuat',
    }),
    shortDescription: T({
      ko: '"당신은 분명한 계획형이지만 완전히 경직되지는 않은 유연한 J입니다."',
      en: '"You are clearly a J, but not totally rigid—you can flex a little."',
      ja: '「あなたは明確なJだが、完全に硬いわけではない。」',
      zhCN: '「你明显是 J，但并非完全僵化。」',
      zhTW: '「你明顯是 J，但並非完全僵化。」',
      vi: '"Bạn rõ ràng là J nhưng không hoàn toàn cứng."',
      id: '"Kamu jelas tipe J tapi tidak kaku sepenuhnya."',
    }),
    indexBand: T({
      ko: 'P 25~33% / J 67~75%',
      en: 'P 25–33% / J 67–75%',
      ja: 'P 25〜33% / J 67〜75%',
      zhCN: 'P 25~33% / J 67~75%',
      zhTW: 'P 25~33% / J 67~75%',
      vi: 'P 25–33% / J 67–75%',
      id: 'P 25–33% / J 67–75%',
    }),
    description: T({
      ko: '기본적으로 계획과 구조를 선호하지만, 상황에 따라 어느 정도 즉흥을 수용할 수 있습니다. 갑작스러운 변화가 불편하긴 해도 적응 자체가 불가능하지는 않습니다. 계획을 세우되 너무 빡빡하게 짜지는 않고, 작은 변수 정도는 여유 있게 소화하는 실용적인 J입니다.\n\n강한 J의 특징: 여행 전 숙소와 주요 일정은 확정하되 식당은 현장에서 결정하는 타입',
      en: 'You prefer plans and structure but can accept some spontaneity. Sudden change is uncomfortable but not impossible. You plan without over-tightening and handle small surprises—practical J.\n\nStrong J: lock lodging and main trip plans, but pick restaurants on the spot.',
      ja: '基本は計画派だが、状況によっては即興も受け入れられる。急な変更は苦手でも適応不可能ではない。詰めすぎず、小さな変数はこなす実用J。\n\n強めJ：宿とメイン日程は固め、レストランは現地決め。',
      zhCN: '你偏好计划与结构，但也能接受一定即兴。突变不舒服但并非无法适应。你会计划但不会卡太死，能消化小变数——务实的 J。\n\n偏强 J：行前锁定住宿和大行程，餐厅现场再定。',
      zhTW: '你偏好計畫與結構，但也能接受一定即興。突變不舒服但並非無法適應。你會計畫但不會卡太死，能消化小變數——務實的 J。\n\n偏強 J：行前鎖定住宿和大行程，餐廳現場再定。',
      vi: 'Bạn thích kế hoạch và khung chung nhưng chấp nhận chút tự phát. Thay đổi đột ngột khó chịu nhưng không phải không thích nghi được. Bạn lên kế hoạch nhưng không siết quá, xử lý được biến nhỏ—J thực dụng.\n\nJ mạnh: chốt chỗ ở và lịch chính, nhà hàng quyết tại chỗ.',
      id: 'Kamu suka rencana dan struktur tapi bisa terima sedikit spontan. Perubahan mendadak tidak nyaman tapi bisa beradaptasi. Merencanakan tanpa terlalu kaku, menelan variabel kecil—J praktis.\n\nJ kuat: kunci hotel dan jadwal utama, restoran putuskan di tempat.',
    }),
    characteristics: T({
      ko: '생활 방식: 큰 틀의 계획을 세우고 세부는 유연하게 조정하는 방식. 강점: 체계성 + 적당한 유연성. 계획대로 하면서도 변수에 어느 정도 대응 가능. 약점: 예상보다 많은 변수가 생기면 스트레스가 쌓임. 완벽한 계획이 흐트러질 때 불쾌감',
      en: 'Lifestyle: big-picture plan, flexible details. Strengths: structure + moderate flexibility. You mostly follow the plan yet handle some variance. Weakness: stress if too many surprises; annoyance when a perfect plan slips.',
      ja: '生活：大枠は固め、細部は柔軟。強み：秩序＋適度な柔軟性。基本は計画通りだが変数にもある程度対応。弱み：変数が多すぎるとストレス。完璧な計画が崩れると不快。',
      zhCN: '生活方式：大框架计划、细节弹性。优势：条理加适度灵活。大体按计划，也能应对一些变数。弱点：变数过多会累积压力，完美计划被打乱会不爽。',
      zhTW: '生活方式：大框架計畫、細節彈性。優勢：條理加適度靈活。大體按計畫，也能應對一些變數。弱點：變數過多會累積壓力，完美計畫被打亂會不爽。',
      vi: 'Lối sống: kế hoạch khung lớn, chi tiết linh hoạt. Điểm mạnh: trật tự + độ linh hoạt vừa phải. Vẫn theo kế hoạch nhưng ứng phó biến số. Điểm yếu: căng nếu quá nhiều bất ngờ; khó chịu khi kế hoạch hoàn hảo trượt.',
      id: 'Gaya hidup: rencana besar, detail fleksibel. Kekuatan: struktur + fleksibilitas sedang. Tetap on track tapi tangani variabel. Kelemahan: stres jika kejutan berlebihan; kesal saat rencana sempurna goyah.',
    }),
    goodMatch: T({
      ko: '모든 것을 다 계획하기보다 "반드시 지켜야 할 것"과 "유연하게 열어둘 것"을 구분해보세요. 스트레스가 줄어듭니다',
      en: 'Instead of planning everything, split “must-lock” items from “can stay open.” Stress drops.',
      ja: '全部を詰め込むより「絶対固定」と「柔らかく残す」を分ける。ストレス減。',
      zhCN: '别什么都排死，区分「必须敲定」和「可以留白」，压力会小很多。',
      zhTW: '別什麼都排死，區分「必須敲定」和「可以留白」，壓力會小很多。',
      vi: 'Đừng lên kế hoạch mọi thứ—tách “bắt buộc chốt” và “có thể mở”. Stress giảm.',
      id: 'Jangan rencanakan semua—pisahkan “wajib kunci” dan “bisa terbuka”. Stres berkurang.',
    }),
    badMatch: T({
      ko: '교사, 건축가, HR 매니저, 의료진, 재무 설계사',
      en: 'Teacher, architect, HR manager, clinician, financial planner',
      ja: '教師、建築家、人事、医療、FP',
      zhCN: '教师、建筑师、人力、医护、理财规划',
      zhTW: '教師、建築師、人力、醫護、理財規劃',
      vi: 'Giáo viên, kiến trúc sư, HR, y tế, hoạch định tài chính',
      id: 'Guru, arsitek, HR, tenaga medis, perencana keuangan',
    }),
    shareLine: T({
      ko: '나의 P지수는 {pPercent}% 🗓️ 강한 J이지만 완전 꽉 막힌 건 아닌 유형 → 너는 몇 %야?',
      en: 'My P index is {pPercent}% 🗓️ Strong J—not totally rigid. What about you?',
      ja: '私のP指数は{pPercent}% 🗓️強めJ。完全に固いわけではない。あなたは？',
      zhCN: '我的 P 指数是 {pPercent}% 🗓️偏强 J，不算死板——你呢？',
      zhTW: '我的 P 指數是 {pPercent}% 🗓️偏強 J，不算死板——你呢？',
      vi: 'Chỉ số P {pPercent}% 🗓️ J mạnh—không cứng nhắc hoàn toàn. Còn bạn?',
      id: 'Indeks P {pPercent}% 🗓️ J kuat—tidak kaku total. Kamu?',
    }),
  },
  {
    type: 'Type3',
    emoji: '⚖️',
    title: T({
      ko: '계획도 즉흥도 다 되는, J와 P 경계인',
      en: 'Both plan and flow—on the J/P border',
      ja: '計画も即興もいける、JとPの境界線',
      zhCN: '计划与即兴都能，J/P 边界型',
      zhTW: '計畫與即興都能，J/P 邊界型',
      vi: 'Vừa kế hoạch vừa tự phát—ranh giới J/P',
      id: 'Rencana dan spontan—di perbatasan J/P',
    }),
    shortDescription: T({
      ko: '"당신은 계획과 즉흥 사이 가장 유연한 지점에 있는 사람입니다."',
      en: '"You sit at the most flexible point between planning and spontaneity."',
      ja: '「あなたは計画と即興のちょうど柔らかい地点にいる。」',
      zhCN: '「你处在计划与即兴之间最灵活的位置。」',
      zhTW: '「你處在計畫與即興之間最靈活的位置。」',
      vi: '"Bạn đứng ở điểm linh hoạt nhất giữa kế hoạch và tự phát."',
      id: '"Kamu di titik paling fleksibel antara rencana dan spontan."',
    }),
    indexBand: T({
      ko: 'P 42~50% / J 50~58%',
      en: 'P 42–50% / J 50–58%',
      ja: 'P 42〜50% / J 50〜58%',
      zhCN: 'P 42~50% / J 50~58%',
      zhTW: 'P 42~50% / J 50~58%',
      vi: 'P 42–50% / J 50–58%',
      id: 'P 42–50% / J 50–58%',
    }),
    description: T({
      ko: '계획을 세우면 든든하지만 계획이 없어도 크게 불안하지 않습니다. 즉흥적인 상황을 즐길 수 있으면서도 일정이 구체적으로 정해질 때 안도감도 느낍니다. J와 P 어느 쪽 친구와도 함께 여행할 수 있는, 가장 범용성 높은 타입입니다.\n\n경계인의 특징: "나는 계획 세우는 것도 좋아하는데 즉흥도 괜찮아"라는 말을 자주 하는 사람',
      en: 'Plans feel reassuring, yet no plan does not freak you out. You can enjoy spontaneity and also feel relief when the schedule is clear. You can travel with J or P friends—the most versatile type.\n\nBorder line: “I like planning but spontaneity is fine too.”',
      ja: '計画があると安心だが、なくても大きく不安ではない。即興も楽しめるし、日程がはっきりするとホッとする。JともPとも旅行できる万能タイプ。\n\n境界のセリフ：「計画も好きだけど即興もアリ」',
      zhCN: '有计划很安心，没计划也不会太慌。既能享受即兴，行程清楚时也会松一口气。和 J 或 P 朋友都能同行——最百搭型。\n\n边界口头禅：「我也爱做计划，即兴也行。」',
      zhTW: '有計畫很安心，沒計畫也不會太慌。既能享受即興，行程清楚時也會鬆一口氣。和 J 或 P 朋友都能同行——最百搭型。\n\n邊界口頭禪：「我也愛做計畫，即興也行。」',
      vi: 'Có kế hoạch thì yên tâm, không có cũng không hoảng. Vừa thích tự phát, vừa nhẹ người khi lịch rõ. Đi chơi với bạn J hay P đều ổn—kiểu đa dụng nhất.\n\nCâu điển hình: “Mình cũng thích lên kế hoạch nhưng tự phát cũng được.”',
      id: 'Ada rencana tenang, tidak ada juga tidak panik. Bisa menikmati spontan dan lega saat jadwal jelas. Bisa traveling dengan teman J atau P—tipe paling serbaguna.\n\nKalimat khas: “Aku suka rencana tapi spontan juga oke.”',
    }),
    characteristics: T({
      ko: '생활 방식: 상황에 따라 계획적으로도, 즉흥적으로도 움직일 수 있는 최고의 적응형. 강점: 어떤 환경에도 잘 맞춰지는 유연성. J의 체계성과 P의 자유로움을 상황에 따라 전환. 약점: 가끔 자신이 J인지 P인지 스스로도 헷갈려서 MBTI 검사할 때마다 결과가 바뀌는 경험',
      en: 'Lifestyle: switch between planned and spontaneous—top adapter. Strengths: flexibility in any setting; you rotate J structure and P freedom. Weakness: sometimes you confuse yourself—MBTI results keep shifting.',
      ja: '生活：状況で計画モードと即興モードを切替。最強の適応型。強み：どんな場でも合わせられる柔軟性。弱み：JかPか自分でも迷い、診断結果が揺れる。',
      zhCN: '生活方式：视情境在计划与即兴间切换，适应力最强。优势：各种环境都能贴合。弱点：有时自己也分不清 J 还是 P，测 MBTI 结果常变。',
      zhTW: '生活方式：視情境在計畫與即興間切換，適應力最強。優勢：各種環境都能貼合。弱點：有時自己也分不清 J 還是 P，測 MBTI 結果常變。',
      vi: 'Lối sống: chuyển giữa kế hoạch và tự phát—thích ứng tốt nhất. Điểm mạnh: linh hoạt mọi bối cảnh. Điểm yếu: đôi khi bản thân cũng lẫn—kết quả MBTI nhảy.',
      id: 'Gaya hidup: ganti antara terencana dan spontan—adaptasi terbaik. Kekuatan: fleksibel di mana pun. Kelemahan: kadang bingung sendiri—hasil MBTI berubah-ubah.',
    }),
    goodMatch: T({
      ko: '당신은 J와 P 사이 통역사입니다. J형에겐 "대략적인 계획"을, P형에겐 "선택지"를 제시하면 어디서든 환영받습니다',
      en: 'You translate between J and P: give Js a rough outline and Ps a short list of options—you are welcome everywhere.',
      ja: 'あなたはJとPの通訳。Jには「大まかな計画」、Pには「選択肢」を出すとどこでも歓迎される。',
      zhCN: '你是 J 和 P 之间的翻译：给 J 大框架，给 P 几个选项，到处都受欢迎。',
      zhTW: '你是 J 和 P 之間的翻譯：給 J 大框架，給 P 幾個選項，到處都受歡迎。',
      vi: 'Bạn là thông dịch J/P: với J đưa khung sơ bộ, với P đưa vài lựa chọn—được chào đón mọi nơi.',
      id: 'Kamu penerjemah J/P: untuk J beri kerangka kasar, untuk P beri beberapa opsi—diterima di mana saja.',
    }),
    badMatch: T({
      ko: '프리랜서, 크리에이터, 마케터, 스타트업 초기 팀원, 전략 기획자',
      en: 'Freelancer, creator, marketer, early startup teammate, strategist',
      ja: 'フリーランス、クリエイター、マーケ、初期スタートアップ、戦略',
      zhCN: '自由职业、创作者、营销、初创早期成员、战略',
      zhTW: '自由職業、創作者、行銷、新創早期成員、策略',
      vi: 'Freelancer, creator, marketing, startup giai đoạn đầu, chiến lược',
      id: 'Freelancer, kreator, marketer, tim startup awal, strategi',
    }),
    shareLine: T({
      ko: '나의 P지수는 {pPercent}% ⚖️ J도 P도 아닌 경계인. MBTI 할 때마다 바뀌는 사람 → 너는 몇 %야?',
      en: 'My P index is {pPercent}% ⚖️ Border—not quite J or P. MBTI keeps flipping—what about you?',
      ja: '私のP指数は{pPercent}% ⚖️境界。JでもPでもない。診断のたびに揺れる。あなたは？',
      zhCN: '我的 P 指数是 {pPercent}% ⚖️边界型，不算纯 J 或 P，测 MBTI 总变——你呢？',
      zhTW: '我的 P 指數是 {pPercent}% ⚖️邊界型，不算純 J 或 P，測 MBTI 總變——你呢？',
      vi: 'Chỉ số P {pPercent}% ⚖️ Ranh giới—không hẳn J hay P, MBTI hay đổi—còn bạn?',
      id: 'Indeks P {pPercent}% ⚖️ Perbatasan—bukan J atau P murni, MBTI suka bergeser—kamu?',
    }),
  },
  {
    type: 'Type4',
    emoji: '🌊',
    title: T({
      ko: '열어두는 게 편한, 약한 즉흥형',
      en: 'Likes options open—mild P',
      ja: '開いておくのが楽・弱めのP',
      zhCN: '爱留余地，偏弱 P',
      zhTW: '愛留餘地，偏弱 P',
      vi: 'Thích để mở—P nhẹ',
      id: 'Suka tetap terbuka—P ringan',
    }),
    shortDescription: T({
      ko: '"당신은 즉흥적이지만 완전한 무계획은 아닌 실용적인 P입니다."',
      en: '"You are spontaneous but not a total no-plan type—practical P."',
      ja: '「あなたは即興的だが、完全無計画ではない実用P。」',
      zhCN: '「你偏即兴但不是完全无计划，务实的 P。」',
      zhTW: '「你偏即興但不是完全無計畫，務實的 P。」',
      vi: '"Bạn tự phát nhưng không phải kiểu không kế hoạch hoàn toàn—P thực tế."',
      id: '"Kamu spontan tapi bukan tipe tanpa rencana sama sekali—P praktis."',
    }),
    indexBand: T({
      ko: 'P 58~67% / J 33~42%',
      en: 'P 58–67% / J 33–42%',
      ja: 'P 58〜67% / J 33〜42%',
      zhCN: 'P 58~67% / J 33~42%',
      zhTW: 'P 58~67% / J 33~42%',
      vi: 'P 58–67% / J 33–42%',
      id: 'P 58–67% / J 33–42%',
    }),
    description: T({
      ko: '가능성을 열어두는 것이 기본적으로 편안하지만, 완전히 계획이 없으면 불안한 날도 있습니다. 큰 방향만 정해두고 세부는 흐름에 맡기는 방식을 선호합니다. 계획이 있어도 더 좋은 옵션이 생기면 자연스럽게 바꿀 수 있고, 그 유연함이 오히려 강점이 되는 타입입니다.\n\n약한 P의 특징: 여행 계획을 세우긴 하는데 현지에서 절반은 즉흥으로 바꾸는 사람\n\nJ와의 갈등: J형 친구가 여행 3개월 전부터 숙소를 예약하는 것을 보면 대단하다고 생각하면서도 이해하기 어려움',
      en: 'Keeping possibilities open feels natural, yet some days with zero plan still feel uneasy. You set a direction and let details follow the flow. Even with a plan, you can swap if something better appears—flexibility is a strength.\n\nMild P: makes a trip plan but changes half on the spot.\n\nWith J: you admire friends who book hotels three months ahead but do not quite get it.',
      ja: '可能性を開いておくのが基本だが、ゼロ計画だと不安な日も。大方針だけ決めて細部は流れに任せる。計画があってもより良ければ変えられる柔軟さが強み。\n\n弱めP：旅行は立てるが現地で半分即興に。\n\nJとの摩擦：3ヶ月前予約の友は尊敬しつつ理解は難しい。',
      zhCN: '习惯留可能性开放，但完全没计划有时也会慌。只定大方向，细节交给当下。有计划也能因更好选择而改——灵活是优势。\n\n偏弱 P：会做旅行计划，到现场改一半。\n\n与 J：佩服三个月前就订房的朋友，但不太理解。',
      zhTW: '習慣留可能性開放，但完全沒計畫有時也會慌。只定大方向，細節交給當下。有計畫也能因更好選擇而改——靈活是優勢。\n\n偏弱 P：會做旅行計畫，到現場改一半。\n\n與 J：佩服三個月前就訂房的朋友，但不太理解。',
      vi: 'Mở khả năng là mặc định nhưng đôi ngày không kế hoạch vẫn lo. Chỉ định hướng lớn, chi tiết theo dòng. Có kế hoạch vẫn đổi nếu có lựa chọn tốt hơn—linh hoạt là điểm mạnh.\n\nP nhẹ: có lịch du lịch nhưng đổi nửa tại chỗ.\n\nVới J: ngưỡng mộ bạn đặt phòng sớm 3 tháng nhưng khó hiểu.',
      id: 'Membuka kemungkinan nyaman, tapi tanpa rencana sama sekali kadang gelisah. Arah besar saja, detail mengikuti alur. Ada rencana pun bisa ganti jika ada opsi lebih baik—fleksibilitas adalah kekuatan.\n\nP ringan: buat rencana trip tapi setengah diubah di tempat.\n\nDengan J: kagum teman booking hotel 3 bulan awal tapi kurang paham.',
    }),
    characteristics: T({
      ko: '생활 방식: 큰 틀만 잡고 세부는 즉흥으로. 유연성이 기본값. 강점: 변화에 빠른 적응력, 새로운 기회를 놓치지 않는 유연함, 스트레스 내성. 약점: 마감 관리가 약하거나 일을 미루는 경향이 있을 수 있음. J형 파트너에게 답답하게 보일 수 있음',
      en: 'Lifestyle: big picture only, details spontaneous—flex is default. Strengths: fast adaptation, catching new chances, stress tolerance. Weakness: weak deadline habits or procrastination; Js may find you frustrating.',
      ja: '生活：大枠だけ、細部は即興。柔軟がデフォ。強み：変化適応・チャンス捕捉・ストレス耐性。弱み：締切が弱い／先延ばし。J相手にはもどかしい。',
      zhCN: '生活方式：只抓大框，细节即兴，弹性是默认。优势：适应快、抓住新机会、抗压。弱点：截止管理弱或拖延，J 型伴侣可能觉得你急人。',
      zhTW: '生活方式：只抓大框，細節即興，彈性是預設。優勢：適應快、抓住新機會、抗壓。弱點：截止管理弱或拖延，J 型伴侶可能覺得你急人。',
      vi: 'Lối sống: chỉ khung lớn, chi tiết tự phát—linh hoạt là mặc định. Điểm mạnh: thích nghi nhanh, bắt cơ hội, chịu áp lực. Điểm yếu: deadline kém hoặc trì hoãn; J có thể frustrasi.',
      id: 'Gaya hidup: kerangka besar saja, detail spontan—fleksibel default. Kekuatan: adaptasi cepat, tangkap peluang, tahan stres. Kelemahan: deadline lemah atau menunda; pasangan J bisa kesal.',
    }),
    goodMatch: T({
      ko: 'J형 파트너에게 "마감 하루 전"을 약속해보세요. 당신에겐 여전히 여유가 있고, J형 파트너는 안심할 수 있습니다',
      en: 'Promise J partners “the day before the deadline.” You still feel room; they feel safer.',
      ja: 'Jの相手には「締切の前日までに」と約束してみて。あなたには余裕、相手には安心。',
      zhCN: '对 J 型伴侣承诺「截止前一天一定给你」——你还有余裕，对方更安心。',
      zhTW: '對 J 型伴侶承諾「截止前一天一定給你」——你還有餘裕，對方更安心。',
      vi: 'Hứa với J “xong trước một ngày deadline”—bạn vẫn thấy thoải mái, họ yên tâm hơn.',
      id: 'Janji ke pasangan J “selesai sehari sebelum deadline”—kamu masih santai, mereka lebih tenang.',
    }),
    badMatch: T({
      ko: '디자이너, 작가, 연구자, 컨설턴트, 스타트업 기획자',
      en: 'Designer, writer, researcher, consultant, startup planner',
      ja: 'デザイナー、作家、研究者、コンサル、スタートアップ企画',
      zhCN: '设计师、作家、研究员、顾问、初创策划',
      zhTW: '設計師、作家、研究員、顧問、新創企劃',
      vi: 'Thiết kế, nhà văn, nghiên cứu, tư vấn, hoạch định startup',
      id: 'Desainer, penulis, peneliti, konsultan, perencana startup',
    }),
    shareLine: T({
      ko: '나의 P지수는 {pPercent}% 🌊 약한 P. 즉흥적이지만 완전 무계획은 아닌 실용파 → 너는 몇 %야?',
      en: 'My P index is {pPercent}% 🌊 Mild P—spontaneous but not chaos. What about you?',
      ja: '私のP指数は{pPercent}% 🌊弱めP。即興だけど無計画ではない。あなたは？',
      zhCN: '我的 P 指数是 {pPercent}% 🌊偏弱 P，即兴但不失控——你呢？',
      zhTW: '我的 P 指數是 {pPercent}% 🌊偏弱 P，即興但不失控——你呢？',
      vi: 'Chỉ số P {pPercent}% 🌊 P nhẹ—tự phát nhưng không hỗn loạn. Còn bạn?',
      id: 'Indeks P {pPercent}% 🌊 P ringan—spontan tapi bukan kacau. Kamu?',
    }),
  },
  {
    type: 'Type5',
    emoji: '🎲',
    title: T({
      ko: '계획이 감옥인, 강한 즉흥형',
      en: 'Plans feel like a cage—strong P',
      ja: '計画は檻・強めのP',
      zhCN: '计划像牢笼，偏强 P',
      zhTW: '計畫像牢籠，偏強 P',
      vi: 'Kế hoạch như lồng—P mạnh',
      id: 'Rencana seperti sangkar—P kuat',
    }),
    shortDescription: T({
      ko: '"당신은 분명한 즉흥형입니다. 정해진 것들이 많을수록 답답합니다."',
      en: '"You are clearly spontaneous—the more that is fixed, the more stifled you feel."',
      ja: '「あなたは明確な即興型。決まりすぎると息苦しい。」',
      zhCN: '「你明显偏即兴，定死的越多越闷。」',
      zhTW: '「你明顯偏即興，定死的越多越悶。」',
      vi: '"Bạn rõ ràng tự phát—càng nhiều thứ đã chốt càng ngột."',
      id: '"Kamu jelas spontan—semakin banyak yang sudah pasti semakin sesak."',
    }),
    indexBand: T({
      ko: 'P 75~83% / J 17~25%',
      en: 'P 75–83% / J 17–25%',
      ja: 'P 75〜83% / J 17〜25%',
      zhCN: 'P 75~83% / J 17~25%',
      zhTW: 'P 75~83% / J 17~25%',
      vi: 'P 75–83% / J 17–25%',
      id: 'P 75–83% / J 17–25%',
    }),
    description: T({
      ko: '가능성이 열려있을 때 가장 자유롭고 에너지가 납니다. 계획을 세우면 왠지 그 계획에 갇히는 느낌이 들고, 마감이 닥쳐야 진짜 집중력이 발휘됩니다. 즉흥적인 상황에서 최고의 아이디어가 나오고, 예상치 못한 방향으로 흘러가는 것을 즐깁니다. J형 친구들이 3개월 전에 여행을 예약하는 것을 보면 신기할 따름입니다.\n\n강한 P의 특징: 할 일 목록을 만들고 목록 자체를 잃어버리는 사람. 플래너를 사고 세 페이지 쓰다 그만두는 사람\n\nJ와의 충돌: J형이 여행 일정을 분 단위로 짜오면 숨이 막히는 느낌이 드는 것이 바로 당신',
      en: 'You feel most free and energized when possibilities stay open. Plans feel like a trap; real focus arrives when deadlines loom. Your best ideas come in spontaneous moments; you enjoy unexpected turns. Watching Js book trips three months ahead feels wild.\n\nStrong P: makes a to-do list and loses the list; buys a planner and quits after three pages.\n\nWith J: minute-by-minute itineraries make you suffocate—that is you.',
      ja: '可能性が開いているとき一番自由でエネルギーが出る。計画は檻のように感じ、本当の集中は締切直前。即興で最高のアイデア。予想外の流れを楽しむ。3ヶ月前予約のJ友は不思議。\n\n強めP：ToDoを作って紙をなくす／手帳3ページで終了。\n\nJとの衝突：分刻み旅程は窒息—それがあなた。',
      zhCN: '可能性开放时你最自由、最有能量。计划像枷锁，截止临近才真正专注。即兴时点子最好，也爱意外走向。看 J 朋友三个月前订行程会觉得神奇。\n\n偏强 P：写了清单却丢了清单；买了手帐写三页就弃。\n\n与 J：按分钟排的行程让你窒息——那就是你。',
      zhTW: '可能性開放時你最自由、最有能量。計畫像枷鎖，截止鄰近才真正專注。即興時點子最好，也愛意外走向。看 J 朋友三個月前訂行程會覺得神奇。\n\n偏強 P：寫了清單卻丟了清單；買了手帳寫三頁就棄。\n\n與 J：按分鐘排的行程讓你窒息——那就是你。',
      vi: 'Bạn tự do và tràn năng lượng nhất khi khả năng còn mở. Kế hoạch như cái lồng; tập trung thật sự khi sát deadline. Ý tưởng hay nhất đến lúc tự phát; thích rẽ bất ngờ. Thấy J đặt chuyến 3 tháng trước thấy lạ.\n\nP mạnh: viết to-do rồi mất giấy; mua sổ viết 3 trang rồi bỏ.\n\nVới J: lịch từng phút làm nghẹt—đó là bạn.',
      id: 'Kamu paling bebas dan berenergi saat kemungkinan terbuka. Rencana terasa seperti penjara; fokus sesungguhnya saat deadline mendekat. Ide terbaik datang spontan; suka arah tak terduga. Melihat J booking trip 3 bulan awal terasa aneh.\n\nP kuat: buat daftar lalu hilangkan daftarnya; beli planner, tulis 3 halaman lalu berhenti.\n\nDengan J: itinerary per menit bikin sesak—itulah kamu.',
    }),
    characteristics: T({
      ko: '생활 방식: 흐름에 맡기기. 필요한 것은 필요할 때 결정하면 된다. 강점: 뛰어난 적응력, 새로운 상황에서의 창의성, 압박 상황에서 발휘되는 집중력. 약점: 계획 없이 중요한 것을 놓치거나, 마감을 아슬아슬하게 맞추는 패턴이 반복될 수 있음',
      en: 'Lifestyle: go with the flow; decide when needed. Strengths: adaptation, creativity in new settings, focus under pressure. Weakness: may miss important items without a plan; last-minute deadline pattern may repeat.',
      ja: '生活：流れに任せ、必要なときに決める。強み：適応力・新状況の創造性・圧力下の集中。弱み：計画なしで大事を落とす／締切ギリギリが癖。',
      zhCN: '生活方式：跟着节奏，需要时再决定。优势：适应力、新环境的创意、压力下的专注。弱点：没计划可能漏大事，截止踩线可能成习惯。',
      zhTW: '生活方式：跟著節奏，需要時再決定。優勢：適應力、新環境的創意、壓力下的專注。弱點：沒計畫可能漏大事，截止踩線可能成習慣。',
      vi: 'Lối sống: theo dòng; quyết khi cần. Điểm mạnh: thích nghi, sáng tạo trong tình huống mới, tập trung dưới áp lực. Điểm yếu: có thể bỏ sót việc quan trọng; lặp kiểu sát deadline.',
      id: 'Gaya hidup: ikut alur; putus saat perlu. Kekuatan: adaptasi, kreativitas di situasi baru, fokus saat tekanan. Kelemahan: bisa melewatkan hal penting; pola mepet deadline berulang.',
    }),
    goodMatch: T({
      ko: '마감 3일 전에 알람을 맞춰보세요. 마감 1일 전과 3일 전은 체감상 같지만 결과물의 퀄리티는 다릅니다',
      en: 'Set an alarm three days before the deadline—it feels like one day left, but quality differs.',
      ja: '締切3日前にアラームを。1日前と感覚は似ても品質は違う。',
      zhCN: '截止前三天设提醒，体感像前一天，但成品质量不同。',
      zhTW: '截止前三天設提醒，體感像前一天，但成品品質不同。',
      vi: 'Báo thức trước deadline 3 ngày—cảm giác giống 1 ngày nhưng chất lượng khác.',
      id: 'Set alarm 3 hari sebelum deadline—rasanya mirip 1 hari tapi kualitas beda.',
    }),
    badMatch: T({
      ko: '예술가, 프리랜서, 기자, 크리에이터, 즉흥 연기자',
      en: 'Artist, freelancer, journalist, creator, improviser',
      ja: 'アーティスト、フリーランス、記者、クリエイター、即興役者',
      zhCN: '艺术家、自由职业、记者、创作者、即兴表演',
      zhTW: '藝術家、自由職業、記者、創作者、即興表演',
      vi: 'Nghệ sĩ, freelancer, nhà báo, creator, diễn ứng biến',
      id: 'Seniman, freelancer, jurnalis, kreator, pemain improvisasi',
    }),
    shareLine: T({
      ko: '나의 P지수는 {pPercent}% 🎲 강한 P. 계획이 감옥처럼 느껴지는 사람 → J형 친구한테 보내봐 ㅋㅋ',
      en: 'My P index is {pPercent}% 🎲 Strong P—plans feel like jail. Send this to your J friend lol',
      ja: '私のP指数は{pPercent}% 🎲強めP。計画は檻。Jの友に送って',
      zhCN: '我的 P 指数是 {pPercent}% 🎲偏强 P，计划像牢笼——转给 J 型朋友哈哈',
      zhTW: '我的 P 指數是 {pPercent}% 🎲偏強 P，計畫像牢籠——轉給 J 型朋友哈哈',
      vi: 'Chỉ số P {pPercent}% 🎲 P mạnh—kế hoạch như nhà gửi cho bạn J nhé',
      id: 'Indeks P {pPercent}% 🎲 P kuat—rencana seperti penjara, kirim ke teman J lol',
    }),
  },
  {
    type: 'Type6',
    emoji: '🌀',
    title: T({
      ko: '자유가 전부인, 진성 즉흥형',
      en: 'Freedom above all—true P',
      ja: '自由がすべて・純度の高いP',
      zhCN: '自由至上，典型 P',
      zhTW: '自由至上，典型 P',
      vi: 'Tự do là tất cả—P thuần',
      id: 'Kebebasan di atas segalanya—P murni',
    }),
    shortDescription: T({
      ko: '"당신은 거의 완전한 즉흥형입니다. 정해진 것은 없을수록 좋습니다."',
      en: '"You are almost fully spontaneous—the less fixed, the better."',
      ja: '「あなたはほぼ完全な即興型。決まっていないほどいい。」',
      zhCN: '「你几乎是典型即兴型，越不定越好。」',
      zhTW: '「你幾乎是典型即興型，越不定越好。」',
      vi: '"Bạn gần như hoàn toàn tự phát—càng ít chốt càng tốt."',
      id: '"Kamu hampir sepenuhnya spontan—semakin sedikit yang pasti semakin baik."',
    }),
    indexBand: T({
      ko: 'P 92~100% / J 0~8%',
      en: 'P 92–100% / J 0–8%',
      ja: 'P 92〜100% / J 0〜8%',
      zhCN: 'P 92~100% / J 0~8%',
      zhTW: 'P 92~100% / J 0~8%',
      vi: 'P 92–100% / J 0–8%',
      id: 'P 92–100% / J 0–8%',
    }),
    description: T({
      ko: '계획은 당신에게 감옥입니다. 모든 것이 열려있을 때 가장 살아있는 느낌이 납니다. 마감이 촉박할수록 도파민이 나오고, 즉흥적인 결정에서 인생 최고의 순간들이 만들어졌습니다. 플래너를 사본 적은 있지만 끝까지 쓴 기억은 없습니다. J형 친구들의 빽빽한 일정표를 보면 존경스럽지만 절대 따라 하고 싶지 않은 타입입니다.\n\n진성 P의 특징: "나 이따가 거기 갈 것 같아"가 최선의 약속. 전날 밤에 여행 결정하는 사람. 지금 이 순간 어디 있는지 본인도 모를 때가 있는 사람\n\nJ와의 충돌: J형 파트너가 "도대체 계획을 왜 안 세워"라고 할 때 억울한 이유가 있습니다. 당신에게는 지금 이 순간이 계획입니다',
      en: 'Plans are a prison. You feel most alive when everything is open. Tighter deadlines spike dopamine; your best life moments came from spontaneous calls. You may have bought a planner but never finished it. Packed Js schedules impress you—you would never copy them.\n\nPure P: “I might head there later” is a serious promise; decides trips the night before; sometimes you do not know where you are.\n\nWith J: when they ask why you do not plan, it feels unfair—this moment is your plan.',
      ja: '計画は檻。全部が開いているとき一番生きている。締切が迫るほどドーパミン。即興の決断が最高の瞬間。手帳は買ったが最後まで書いた記憶なし。Jのぎっしり日程は尊敬するが真似はしない。\n\n純P：「たぶんあとでそっち行く」が本命の約束／前夜に旅行決定／今どこか自分でもわからないときがある。\n\nJとの衝突：「なぜ計画しない」と言われても冤罪感—今この瞬間が計画。',
      zhCN: '计划是你的牢笼。一切开放时你才觉得活着。截止越紧多巴胺越高，人生高光常在即兴决定里。买过手帐但从没写完。看 J 密密麻麻的日程会佩服但绝不模仿。\n\n典型 P：「等下可能去那边」算认真承诺；行前夜才定旅行；有时自己也不知在哪。\n\n与 J：对方问「为什么不计划」你觉得委屈——此刻就是你的计划。',
      zhTW: '計畫是你的牢籠。一切開放時你才覺得活著。截止越緊多巴胺越高，人生高光常在即興決定裡。買過手帳但從沒寫完。看 J 密密麻麻的日程會佩服但絕不模仿。\n\n典型 P：「等下可能去那邊」算認真承諾；行前夜才定旅行；有時自己也不知在哪。\n\n與 J：對方問「為什麼不計畫」你覺得委屈——此刻就是你的計畫。',
      vi: 'Kế hoạch là nhà giam. Bạn thấy sống nhất khi mọi thứ còn mở. Deadline gấp càng dopamine; khoảnh khắc đỉnh đến từ quyết định tự phát. Có thể đã mua sổ nhưng chưa bao giờ viết hết. Lịch kín của J khiến bạn ngưỡng mộ nhưng không bao giờ bắt chước.\n\nP thuần: “Lát tôi có thể qua đó” là lời hứa nghiêm túc; quyết đi chơi đêm trước; đôi khi không biết mình đang ở đâu.\n\nVới J: khi họ hỏi sao không lên kế hoạch, bạn thấy oan—khoảnh khắc này chính là kế hoạch.',
      id: 'Rencana adalah penjara. Kamu merasa paling hidup saat semuanya terbuka. Deadline makin dekat makin dopamin; momen terbaik dari keputusan spontan. Pernah beli planner tapi tidak pernah selesai. Jadwal padat J bikin kagum—takkan ditiru.\n\nP murni: “Nanti mungkin ke sana” janji serius; putus traveling malam sebelumnya; kadang tidak tahu di mana.\n\nDengan J: saat ditanya kenapa tidak merencanakan, terasa tidak adil—momen ini adalah rencanamu.',
    }),
    characteristics: T({
      ko: '생활 방식: 지금 이 순간이 전부. 미래는 그때 가서 생각하면 된다. 강점: 완벽한 적응력, 어떤 상황에서도 흔들리지 않는 유연함, 순간의 창의성과 직관력. 약점: 중요한 일정을 놓치거나, 장기적인 목표 달성이 어려울 수 있음. J형 파트너와 심각한 갈등 가능성',
      en: 'Lifestyle: this moment is everything; figure out the future later. Strengths: total adaptation, unshakable flexibility, in-the-moment creativity and intuition. Weakness: may miss key dates or long goals; serious friction possible with J partners.',
      ja: '生活：今この瞬間がすべて。未来はその時考えればいい。強み：適応・動じない柔軟性・瞬間の創造性と直感。弱み：大事な予定を落とす／長期目標が難しい。Jパートナーと深刻な衝突も。',
      zhCN: '生活方式：当下就是一切，未来到时再想。优势：适应力、不动摇的弹性、当下的创意与直觉。弱点：可能漏重要日程或难完成长期目标，与 J 伴侣可能严重冲突。',
      zhTW: '生活方式：當下就是一切，未來到時再想。優勢：適應力、不動搖的彈性、當下的創意與直覺。弱點：可能漏重要日程或難完成長期目標，與 J 伴侶可能嚴重衝突。',
      vi: 'Lối sống: khoảnh khắc này là tất cả; tương lai tính sau. Điểm mạnh: thích nghi, linh hoạt không lay chuyển, sáng tạo và trực giác tức thì. Điểm yếu: có thể trễ hẹn quan trọng hoặc khó mục tiêu dài; có thể xung đột nặng với đối tác J.',
      id: 'Gaya hidup: momen ini adalah segalanya; masa depan nanti dipikir. Kekuatan: adaptasi, fleksibilitas tak goyah, kreativitas dan intuisi di saat itu. Kelemahan: bisa melewatkan jadwal penting atau sulit capai target jangka panjang; konflik serius dengan pasangan J mungkin.',
    }),
    goodMatch: T({
      ko: 'J형과 함께할 때 딱 하나만 미리 정해주세요. 그 하나가 J형에게는 세상이 무너지지 않는다는 안심입니다',
      en: 'With Js, pre-commit to just one thing—that one anchor stops their world from feeling like it will collapse.',
      ja: 'Jと一緒なら、一つだけ先に決めて。それ一つでJは世界が崩れない安心を得る。',
      zhCN: '和 J 一起时先只敲定一件事，这一件事就能让对方觉得世界不会崩塌。',
      zhTW: '和 J 一起時先只敲定一件事，這一件事就能讓對方覺得世界不會崩塌。',
      vi: 'Với J, hãy cam kết trước một thứ—một neo đó giúp họ không cảm thấy thế giới sụp đổ.',
      id: 'Dengan J, sepakati satu hal dulu—satu jangkar itu bikin mereka merasa dunia tidak runtuh.',
    }),
    badMatch: T({
      ko: '음악가, 배우, 여행 유튜버, 스타트업 창업자, 즉흥 코미디언',
      en: 'Musician, actor, travel YouTuber, startup founder, improv comedian',
      ja: '音楽家、俳優、旅行YouTuber、起業家、即興コメディアン',
      zhCN: '音乐人、演员、旅行博主、创业者、即兴喜剧',
      zhTW: '音樂人、演員、旅行創作者、創業者、即興喜劇',
      vi: 'Nhạc sĩ, diễn viên, YouTuber du lịch, founder startup, diễn hài ứng biến',
      id: 'Musisi, aktor, YouTuber travel, pendiri startup, komika improvisasi',
    }),
    shareLine: T({
      ko: '나의 P지수는 {pPercent}% 🌀 진성 P 확정. 나 P 92%라 그래 ㅋㅋ → J형 친구한테 보내면 멘붕 올 듯',
      en: 'My P index is {pPercent}% 🌀 Pure P—I am basically 92% P lol. Send to a J friend for chaos',
      ja: '私のP指数は{pPercent}% 🌀純P確定。P92%って言ってる。Jの友に送れ',
      zhCN: '我的 P 指数是 {pPercent}% 🌀典型 P 认证，我 P 92% 哈哈——转给 J 型朋友',
      zhTW: '我的 P 指數是 {pPercent}% 🌀典型 P 認證，我 P 92% 哈哈——轉給 J 型朋友',
      vi: 'Chỉ số P {pPercent}% 🌀 P thuần—tôi kiểu 92% P—gửi cho bạn J xem họ shock',
      id: 'Indeks P {pPercent}% 🌀 P murni—aku 92% P lol—kirim ke teman J biar panik',
    }),
  },
];
