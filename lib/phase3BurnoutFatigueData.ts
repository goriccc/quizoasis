/** 혹시 나도 번아웃? 피로도 정밀 진단 — phase3 — 7 locales */
export interface Phase3BurnoutFatigueQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    score: number;
  }[];
}

export interface Phase3BurnoutFatigueResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  empathyLevel: Record<string, string>;
  characteristics: Record<string, string>;
  goodMatch: Record<string, string>;
  badMatch: Record<string, string>;
}

const L = (
  ko: string,
  en: string,
  ja: string,
  zhCN: string,
  zhTW: string,
  vi: string,
  id: string
): Record<string, string> => ({
  ko,
  en,
  ja,
  'zh-CN': zhCN,
  'zh-TW': zhTW,
  vi,
  id,
});

export const phase3BurnoutFatigueQuestions: Phase3BurnoutFatigueQuestion[] = [
  {
    id: 1,
    question: L(
      '충분히 잤는데도 아침에 일어나면 어떤가요?',
      'After what should be enough sleep, how do you feel when you wake up?',
      '十分眠ったつもりでも、朝起きたときの調子は？',
      '明明睡够了，早上醒来感觉如何？',
      '明明睡夠了，早上醒來感覺如何？',
      'Ngủ đủ rồi nhưng sáng ngủ dậy bạn thấy thế nào?',
      'Sudah cukup tidur, bagaimana rasanya saat bangun pagi?'
    ),
    options: [
      {
        text: L(
          '개운하게 일어난다. 잠을 자면 피로가 풀린다',
          'I wake up refreshed; sleep actually clears my fatigue.',
          'すっきり起きられる。寝れば疲れが抜ける。',
          '醒来很清爽，睡一觉疲劳就会消失。',
          '醒來很清爽，睡一覺疲勞就會消失。',
          'Tỉnh táo khi thức dậy; ngủ là hết mệt.',
          'Bangun segar; tidur memang bisa hilangkan lelah.'
        ),
        score: 0,
      },
      {
        text: L(
          '조금 찌뿌듯하지만 움직이다 보면 괜찮아진다',
          'A bit groggy, but I feel okay once I get moving.',
          '少しだるいが、動き出すとだいたい大丈夫。',
          '有点昏沉，但活动一会儿就好些。',
          '有點昏沉，但活動一會兒就好些。',
          'Hơi mệt nhưng cử động một lúc thì ổn.',
          'Agak lesu, tapi setelah bergerak jadi lebih baik.'
        ),
        score: 1,
      },
      {
        text: L(
          '일어나는 것 자체가 힘들고 하루 종일 무겁다',
          'Getting up is hard; my body feels heavy all day.',
          '起きること自体がつらく、一日中だるい。',
          '起床本身就很累，一整天身体发沉。',
          '起床本身就很累，一整天身體發沉。',
          'Chỉ thức dậy thôi đã khó; cả ngày người nặng nề.',
          'Bangun saja sudah berat; seharian tubuh terasa berat.'
        ),
        score: 2,
      },
      {
        text: L(
          '잠을 자도 잔 것 같지 않다. 눈 뜨는 순간부터 지쳐있다',
          'Sleep does not feel restorative; I am tired from the moment I open my eyes.',
          '寝ても寝た気がしない。目を開けた瞬間から疲れている。',
          '睡了也像没睡，睁眼那一刻就已经很累。',
          '睡了也像沒睡，睜眼那一刻就已經很累。',
          'Ngủ mà vẫn như không ngủ; mở mắt là đã mệt.',
          'Tidur pun rasanya tidak segar; bangun saja sudah lelah.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 2,
    question: L(
      '최근 몸 상태에 대해 가장 가까운 것은?',
      'Which best describes your body lately?',
      '最近の体の状態にいちばん近いのは？',
      '最近身体状态最接近哪一种？',
      '最近身體狀態最接近哪一種？',
      'Gần đây cơ thể bạn giống mô tả nào nhất?',
      'Yang paling menggambarkan kondisi tubuhmu akhir-akhir ini?'
    ),
    options: [
      {
        text: L(
          '건강하다. 특별히 불편한 곳이 없다',
          'Generally healthy; nothing especially uncomfortable.',
          '健康で、特に気になる不調はない。',
          '还算健康，没有特别不舒服的地方。',
          '還算健康，沒有特別不舒服的地方。',
          'Khá khỏe; không chỗ nào khó chịu đặc biệt.',
          'Sehat; tidak ada keluhan berarti.'
        ),
        score: 0,
      },
      {
        text: L(
          '가끔 두통이나 어깨 결림이 있지만 참을 만하다',
          'Occasional headaches or tight shoulders, but tolerable.',
          'たまに頭痛や肩こりはあるが、我慢できる。',
          '偶尔头痛或肩膀紧，但还能忍。',
          '偶爾頭痛或肩膀緊，但還能忍。',
          'Thỉnh thoảng đau đầu/vai căng nhưng chịu được.',
          'Kadang sakit kepala atau pundak kaku, masih bisa ditahan.'
        ),
        score: 1,
      },
      {
        text: L(
          '두통, 소화불량, 불면 중 하나 이상이 거의 매일 있다',
          'Headaches, indigestion, or insomnia—at least one almost every day.',
          '頭痛・胃の不調・不眠のどれかがほぼ毎日ある。',
          '头痛、消化不良、失眠中至少一项几乎每天都有。',
          '頭痛、消化不良、失眠中至少一項幾乎每天都有。',
          'Đau đầu, khó tiêu, hoặc mất ngủ — gần như ngày nào cũng có một triệu chứng.',
          'Sakit kepala, maag, atau insomnia — hampir setiap hari ada salah satu.'
        ),
        score: 2,
      },
      {
        text: L(
          '몸 여러 곳이 동시에 아프고, 병원을 가도 별다른 이상이 없다고 한다',
          'Many areas hurt at once; doctors often find nothing major wrong.',
          '体のあちこちが同時に痛く、病院でも大きな異常は出ないと言われる。',
          '全身多处同时不适，去医院检查又查不出大问题。',
          '全身多處同時不適，去醫院檢查又查不出大問題。',
          'Nhiều chỗ đau cùng lúc; đi khám mà ít khi phát hiện bệnh rõ.',
          'Banyak bagian sakit bersamaan; ke dokter sering tidak ada temuan besar.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 3,
    question: L(
      '퇴근 후 또는 쉬는 날, 몸의 회복 속도는?',
      'After work or on days off, how fast does your body recover?',
      '退勤後や休みの日、体の回復スピードは？',
      '下班后或休息日，身体恢复速度如何？',
      '下班後或休息日，身體恢復速度如何？',
      'Sau giờ làm hoặc ngày nghỉ, cơ thể hồi phục nhanh thế nào?',
      'Setelah kerja atau di hari libur, tubuh pulih secepat apa?'
    ),
    options: [
      {
        text: L(
          '하루 푹 쉬면 거뜬하게 회복된다',
          'One solid day of rest and I bounce back.',
          '一日しっかり休めばだいたい回復する。',
          '好好歇一天就能明显恢复。',
          '好好歇一天就能明顯恢復。',
          'Nghỉ trọn một ngày là hồi phục rõ rệt.',
          'Istirahat seharian penuh biasanya sudah pulih.'
        ),
        score: 0,
      },
      {
        text: L(
          '하루 이틀 쉬면 어느 정도 회복되는 것 같다',
          'A day or two off and I recover somewhat.',
          '一二日休めばある程度回復する気がする。',
          '歇一两天会好一些。',
          '歇一兩天會好一些。',
          'Nghỉ một hai ngày thì đỡ phần nào.',
          'Istirahat satu dua hari biasanya mulai membaik.'
        ),
        score: 1,
      },
      {
        text: L(
          '쉬어도 피로가 잘 풀리지 않고 주말이 지나도 찌뿌듯하다',
          'Rest does not help much; I still feel off after the weekend.',
          '休んでも疲れが抜けにくく、週末を過ごしてもだるい。',
          '休息了也好不了多少，过完周末还是沉。',
          '休息了也好不了多少，過完週末還是沉。',
          'Nghỉ mà vẫn mệt; hết cuối tuần vẫn uể oải.',
          'Istirahat pun lelah susah hilang; habis akhir pekan masih berat.'
        ),
        score: 2,
      },
      {
        text: L(
          '아무리 쉬어도 회복되는 느낌이 없다. 휴가를 다녀와도 마찬가지다',
          'No matter how much I rest I do not feel recovered—even after a vacation.',
          'どれだけ休んでも回復した感じがしない。休暇明けも同じ。',
          '怎么歇都感觉不到恢复，休完假也一样。',
          '怎麼歇都感覺不到恢復，休完假也一樣。',
          'Nghỉ bao nhiêu cũng không thấy hồi phục; đi nghỉ dưỡng về vẫn vậy.',
          'Istirahat sebanyak apa pun tetap tidak terasa pulih; habis liburan pun sama.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 4,
    question: L(
      '최근 식욕이나 수면 패턴의 변화가 있나요?',
      'Have your appetite or sleep patterns changed recently?',
      '最近、食欲や睡眠リズムに変化はありますか？',
      '最近食欲或睡眠规律有变化吗？',
      '最近食慾或睡眠規律有變化嗎？',
      'Gần đây khẩu vị hoặc giấc ngủ có thay đổi không?',
      'Akhir-akhir ini nafsu makan atau pola tidur berubah?'
    ),
    options: [
      {
        text: L(
          '식욕도 수면도 평소와 다름없이 규칙적이다',
          'Appetite and sleep are as regular as usual.',
          '食欲も睡眠もいつも通り規則的。',
          '食欲和睡眠都和平时一样规律。',
          '食慾和睡眠都和平時一樣規律。',
          'Ăn uống và ngủ vẫn đều như mọi khi.',
          'Nafsu makan dan tidur tetap teratur seperti biasa.'
        ),
        score: 0,
      },
      {
        text: L(
          '가끔 잠이 잘 안 오거나 식욕이 없는 날이 있다',
          'Some nights I cannot sleep well; some days I have little appetite.',
          'たまに眠れない日や食欲がない日がある。',
          '偶尔睡不着或没胃口。',
          '偶爾睡不著或沒胃口。',
          'Đôi khi khó ngủ hoặc chẳng muốn ăn.',
          'Kadang susah tidur atau tidak nafsu makan.'
        ),
        score: 1,
      },
      {
        text: L(
          '수면이 불규칙해졌고, 식사를 거르거나 폭식하는 날이 잦아졌다',
          'Sleep is irregular; I often skip meals or binge.',
          '睡眠が不規則で、食事を抜いたり暴飲暴食したりする日が増えた。',
          '睡眠乱了，经常不吃或暴饮暴食。',
          '睡眠亂了，經常不吃或暴飲暴食。',
          'Ngủ không đều; thường xuyên bỏ bữa hoặc ăn vô độ.',
          'Tidur tidak teratur; sering melewatkan makan atau makan berlebihan.'
        ),
        score: 2,
      },
      {
        text: L(
          '만성적인 불면이나 과수면 상태이며 식욕 변화가 매우 크다',
          'Chronic insomnia or oversleeping; appetite swings are extreme.',
          '慢性的な不眠か過眠で、食欲の変動がとても大きい。',
          '长期失眠或嗜睡，食欲波动很大。',
          '長期失眠或嗜睡，食慾波動很大。',
          'Mất ngủ mãn tính hoặc ngủ quá nhiều; thèm ăn thất thường mạnh.',
          'Insomnia kronis atau hypersomnia; nafsu makan sangat naik turun.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 5,
    question: L(
      '요즘 감정 상태를 가장 잘 표현하는 것은?',
      'Which phrase best describes your mood lately?',
      '最近の気分をいちばんよく表すのは？',
      '哪一句最能描述你最近的情绪？',
      '哪一句最能描述你最近的情緒？',
      'Câu nào mô tả tâm trạng gần đây của bạn nhất?',
      'Mana yang paling menggambarkan suasana hatimu akhir-akhir ini?'
    ),
    options: [
      {
        text: L(
          '감정 기복이 크지 않고 대체로 안정적이다',
          'Mood is fairly stable; not many big swings.',
          '気分の波は大きくなく、おおむね安定している。',
          '情绪起伏不大，整体比较稳定。',
          '情緒起伏不大，整體比較穩定。',
          'Tâm trạng khá ổn, ít thăng trầm.',
          'Suasana hati cukup stabil, tidak naik turun drastis.'
        ),
        score: 0,
      },
      {
        text: L(
          '가끔 이유 없이 기분이 다운되는 날이 있다',
          'Some days I feel down for no clear reason.',
          '理由なく気分が落ち込む日がある。',
          '有时会莫名心情低落。',
          '有時會莫名心情低落。',
          'Đôi khi buồn mà không rõ vì sao.',
          'Kadang murung tanpa alasan jelas.'
        ),
        score: 1,
      },
      {
        text: L(
          '무기력하거나 짜증이 나는 날이 더 많고, 감정 조절이 어렵다',
          'More days of lethargy or irritability; hard to regulate emotions.',
          '無気力やイライラの日が多く、感情のコントロールが難しい。',
          '无力或烦躁的日子更多，情绪难自控。',
          '無力或煩躁的日子更多，情緒難自控。',
          'Nhiều ngày mệt mỏi hoặc cáu kỉnh; khó kiểm soát cảm xúc.',
          'Lebih sering lesu atau mudah marah; sulit mengatur emosi.'
        ),
        score: 2,
      },
      {
        text: L(
          '감정 자체가 느껴지지 않는다. 슬프지도, 기쁘지도 않고 그냥 공허하다',
          'I barely feel emotions—not sad, not happy, just empty.',
          '感情自体が薄い。悲しくも嬉しくもなく、空虚。',
          '几乎感觉不到情绪，不悲不喜，只是空。',
          '幾乎感覺不到情緒，不悲不喜，只是空。',
          'Gần như không còn cảm xúc; không buồn không vui, chỉ trống rỗng.',
          'Emosi terasa tipis; tidak sedih tidak senang, hanya hampa.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 6,
    question: L(
      '일이나 일상에서 즐거움이나 보람을 느끼는가요?',
      'Do you still feel joy or fulfillment in work or daily life?',
      '仕事や日常で楽しさややりがいを感じますか？',
      '在工作或日常里还能感到快乐或成就感吗？',
      '在工作或日常裡還能感到快樂或成就感嗎？',
      'Trong công việc hay đời thường bạn còn thấy vui hoặc có ý nghĩa không?',
      'Apakah kamu masih merasa senang atau berarti dalam kerja atau hari-hari?'
    ),
    options: [
      {
        text: L(
          '여전히 재미있는 일들이 있고 보람을 느낀다',
          'There are still things I enjoy and feel proud of.',
          '楽しいことがあり、やりがいも感じる。',
          '仍有开心的事，也有成就感。',
          '仍有開心的事，也有成就感。',
          'Vẫn có việc vui và cảm giác có ý nghĩa.',
          'Masih ada hal menyenangkan dan terasa bermakna.'
        ),
        score: 0,
      },
      {
        text: L(
          '예전보다는 덜하지만 그래도 가끔 보람을 느낀다',
          'Less than before, but I still feel fulfillment sometimes.',
          '以前よりは少ないが、たまにやりがいは感じる。',
          '比以前少，但偶尔还有成就感。',
          '比以前少，但偶爾還有成就感。',
          'Ít hơn trước nhưng thỉnh thoảng vẫn thấy ý nghĩa.',
          'Kurang dari dulu, tapi kadang masih ada rasa bermakna.'
        ),
        score: 1,
      },
      {
        text: L(
          '좋아하던 것들도 요즘은 귀찮고 재미가 없다',
          'Even things I used to like feel like a hassle and boring.',
          '好きだったことも最近は面倒で楽しくない。',
          '曾经喜欢的事现在也嫌麻烦、没意思。',
          '曾經喜歡的事現在也嫌麻煩、沒意思。',
          'Việc từng thích giờ cũng thấy phiền và chán.',
          'Hal yang dulu disukai kini terasa ribet dan membosankan.'
        ),
        score: 2,
      },
      {
        text: L(
          '아무것도 하고 싶지 않고, 모든 것이 의미 없게 느껴진다',
          'I do not want to do anything; everything feels meaningless.',
          '何もしたくなく、すべてが無意味に感じる。',
          '什么都不想做，一切都像没意义。',
          '什麼都不想做，一切都像沒意義。',
          'Chẳng muốn làm gì; mọi thứ đều vô nghĩa.',
          'Tidak ingin melakukan apa pun; semuanya terasa sia-sia.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 7,
    question: L(
      '주변 사람들과의 관계에서 어떤 느낌이 드나요?',
      'How do you feel about being around people lately?',
      '最近、人との関わりでどんな感じがしますか？',
      '最近和人相处时你是什么感觉？',
      '最近和人相處時你是什麼感覺？',
      'Gần đây khi ở cạnh mọi người bạn cảm thấy thế nào?',
      'Bagaimana perasaanmu terhadap interaksi dengan orang lain akhir-akhir ini?'
    ),
    options: [
      {
        text: L(
          '사람들과 어울리는 것이 즐겁고 에너지를 얻는다',
          'Socializing feels fun and energizing.',
          '人と過ごすのが楽しく、エネルギーが湧く。',
          '和人相处很开心，还能充电。',
          '和人相處很開心，還能充電。',
          'Giao lưu vui và tiếp thêm năng lượng.',
          'Bersama orang terasa menyenangkan dan mengisi energi.'
        ),
        score: 0,
      },
      {
        text: L(
          '가끔 혼자 있고 싶은 날이 있지만 대체로 괜찮다',
          'Some days I want to be alone, but mostly I am okay.',
          'たまに一人になりたい日はあるが、だいたい大丈夫。',
          '有时想独处，但大体还好。',
          '有時想獨處，但大體還好。',
          'Đôi khi muốn một mình nhưng nhìn chung vẫn ổn.',
          'Kadang ingin sendiri, tapi secara umum baik-baik saja.'
        ),
        score: 1,
      },
      {
        text: L(
          '사람 만나는 것이 부담스럽고 연락이 오면 피하고 싶다',
          'People feel draining; I want to avoid messages and meetups.',
          '人付き合いが負担で、連絡が来ると避けたくなる。',
          '见人很有负担，有消息就想躲。',
          '見人很有負擔，有訊息就想躲。',
          'Gặp người là gánh nặng; có tin nhắn là muốn tránh.',
          'Interaksi terasa memberatkan; ada chat pun ingin menghindar.'
        ),
        score: 2,
      },
      {
        text: L(
          '모든 사람과의 관계가 귀찮고, 아무도 만나고 싶지 않다',
          'All relationships feel exhausting; I do not want to see anyone.',
          'すべての人間関係が面倒で、誰にも会いたくない。',
          '所有关系都嫌烦，谁也不想见。',
          '所有關係都嫌煩，誰也不想見。',
          'Mọi quan hệ đều phiền; chẳng muốn gặp ai.',
          'Semua hubungan terasa menyebalkan; tidak ingin bertemu siapa pun.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 8,
    question: L(
      '작은 일에도 감정적으로 반응하는 편인가요?',
      'Do small things trigger big emotional reactions for you?',
      '小さなことにも感情的に反応しやすいですか？',
      '小事也容易让你情绪反应很大吗？',
      '小事也容易讓你情緒反應很大嗎？',
      'Chuyện nhỏ cũng dễ khiến bạn phản ứng cảm xúc mạnh?',
      'Hal kecil mudah memicu reaksi emosional besar?'
    ),
    options: [
      {
        text: L(
          '웬만한 일에는 크게 흔들리지 않는다',
          'Most things do not shake me much.',
          'たいていのことでは大きく揺れない。',
          '一般事不太会让我大起大落。',
          '一般事不太會讓我大起大落。',
          'Chuyện thường ít làm mình dao động mạnh.',
          'Hal biasa jarang membuatku terguncang hebat.'
        ),
        score: 0,
      },
      {
        text: L(
          '예민한 날도 있지만 대부분은 괜찮다',
          'I have sensitive days, but mostly I am fine.',
          '敏感な日もあるが、だいたいは大丈夫。',
          '有敏感的日子，但多数时候还好。',
          '有敏感的日子，但多數時候還好。',
          'Có ngày nhạy cảm nhưng phần lớn vẫn ổn.',
          'Ada hari sensitif, tapi kebanyakan baik-baik saja.'
        ),
        score: 1,
      },
      {
        text: L(
          '사소한 말 한마디에도 상처받거나 화가 폭발하는 경우가 잦다',
          'Small comments often hurt me or make me explode.',
          '些細な言葉でも傷ついたり、怒りが爆発しがち。',
          '一句无心话也容易受伤或发火。',
          '一句無心話也容易受傷或發火。',
          'Một câu nhỏ cũng dễ tổn thương hoặc nổi nóng.',
          'Satu kata kecil saja bisa menyakiti atau membuat marah.'
        ),
        score: 2,
      },
      {
        text: L(
          '감정 조절이 전혀 안 되거나 반대로 아무 감정도 느껴지지 않는다',
          'I cannot regulate emotions—or I feel almost nothing.',
          '感情のコントロールができないか、逆に何も感じない。',
          '要么完全控不住情绪，要么几乎没感觉。',
          '要麼完全控不住情緒，要麼幾乎沒感覺。',
          'Hoặc không kiểm soát được cảm xúc, hoặc gần như không cảm thấy gì.',
          'Entah tidak bisa mengatur emosi, entah hampir tidak merasakan apa pun.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 9,
    question: L(
      '업무나 공부 중 집중력은 어떤가요?',
      'How is your focus during work or study?',
      '仕事や勉強中の集中力はどうですか？',
      '工作或学习时专注力如何？',
      '工作或學習時專注力如何？',
      'Khi làm việc hoặc học, khả năng tập trung thế nào?',
      'Bagaimana fokusmu saat kerja atau belajar?'
    ),
    options: [
      {
        text: L(
          '집중이 잘 되고 효율적으로 일을 처리할 수 있다',
          'I focus well and work efficiently.',
          '集中できて、効率よく進められる。',
          '能专注，效率也不错。',
          '能專注，效率也不錯。',
          'Tập trung tốt và làm việc hiệu quả.',
          'Bisa fokus dan bekerja efisien.'
        ),
        score: 0,
      },
      {
        text: L(
          '가끔 집중이 흐트러지지만 노력하면 된다',
          'Focus drifts sometimes, but effort brings it back.',
          'たまに集中が途切れるが、努力すれば戻る。',
          '有时会分心，但努力还能拉回来。',
          '有時會分心，但努力還能拉回來。',
          'Đôi khi mất tập trung nhưng cố là lại được.',
          'Kadang hilang fokus, tapi bisa kembali dengan usaha.'
        ),
        score: 1,
      },
      {
        text: L(
          '집중이 잘 안 되고 같은 내용을 여러 번 읽게 된다',
          'Hard to concentrate; I reread the same lines many times.',
          '集中が続かず、同じ内容を何度も読み返す。',
          '很难集中，同一段要反复读。',
          '很難集中，同一段要反覆讀。',
          'Khó tập trung; phải đọc đi đọc lại.',
          'Sulit fokus; baca ulang berkali-kali.'
        ),
        score: 2,
      },
      {
        text: L(
          '10분도 집중하기 힘들고 간단한 업무도 처리하는 데 오래 걸린다',
          'Even 10 minutes of focus is hard; simple tasks take forever.',
          '10分も集中できず、簡単な仕事にも時間がかかる。',
          '十分钟都撑不住，简单事也要拖很久。',
          '十分鐘都撐不住，簡單事也要拖很久。',
          'Không tập trung nổi 10 phút; việc đơn giản cũng lâu.',
          'Tidak bisa fokus 10 menit; tugas mudah pun lama.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 10,
    question: L(
      '건망증이나 실수가 늘었나요?',
      'Have forgetfulness or mistakes increased?',
      '物忘れやミスは増えましたか？',
      '健忘或失误变多了吗？',
      '健忘或失誤變多了嗎？',
      'Hay quên hoặc nhầm lẫn nhiều hơn không?',
      'Pelupa atau kesalahan jadi lebih sering?'
    ),
    options: [
      {
        text: L(
          '특별히 늘지 않았다. 평소와 비슷하다',
          'Not really; about the same as usual.',
          '特に増えていない。いつもと同じ。',
          '没有明显变多，和平时差不多。',
          '沒有明顯變多，和平時差不多。',
          'Không tăng rõ; giống mọi khi.',
          'Tidak bertambah jelas; seperti biasa.'
        ),
        score: 0,
      },
      {
        text: L(
          '가끔 깜빡하는 일이 있지만 심각한 수준은 아니다',
          'I slip up sometimes, but it is not severe.',
          'たまに抜けるが、深刻なほどではない。',
          '偶尔会忘，但不严重。',
          '偶爾會忘，但不嚴重。',
          'Đôi khi quên nhưng không nghiêm trọng.',
          'Kadang lupa tapi tidak parah.'
        ),
        score: 1,
      },
      {
        text: L(
          '물건을 자주 잃어버리고 약속이나 할 일을 까먹는 경우가 잦아졌다',
          'I lose things often and forget plans or tasks.',
          '物をよくなくし、予定ややることを忘れがち。',
          '经常丢东西，忘约定或待办。',
          '經常丟東西，忘約定或待辦。',
          'Hay làm mất đồ, quên hẹn hoặc việc cần làm.',
          'Sering kehilangan barang, lupa janji atau tugas.'
        ),
        score: 2,
      },
      {
        text: L(
          '방금 한 말도 기억이 안 나고, 간단한 판단도 내리기 어렵다',
          'I forget what I just said; even simple decisions are hard.',
          'さっき言ったことも思い出せず、簡単な判断も難しい。',
          '刚说的话都记不住，简单决定也难下。',
          '剛說的話都記不住，簡單決定也難下。',
          'Quên cả vừa nói gì; quyết định đơn giản cũng khó.',
          'Lupa baru saja bicara apa; keputusan sederhana pun sulit.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 11,
    question: L(
      '새로운 일을 시작하거나 결정을 내릴 때 어떤가요?',
      'How is it when you start something new or make decisions?',
      '新しいことを始めたり、決断するときはどうですか？',
      '开始新事物或做决定时你怎么样？',
      '開始新事物或做決定時你怎麼樣？',
      'Khi bắt đầu việc mới hoặc quyết định, bạn ra sao?',
      'Bagaimana saat memulai hal baru atau mengambil keputusan?'
    ),
    options: [
      {
        text: L(
          '어렵지 않다. 필요하면 결정하고 실행한다',
          'Not hard; I decide and act when needed.',
          '難しくない。必要なら決めて動ける。',
          '不难，需要就决定并执行。',
          '不難，需要就決定並執行。',
          'Không khó; cần là quyết và làm.',
          'Tidak sulit; perlu langsung putuskan dan jalankan.'
        ),
        score: 0,
      },
      {
        text: L(
          '중요한 결정은 시간이 좀 걸리지만 결국 해낸다',
          'Big decisions take time, but I get there.',
          '大事な決断は時間はかかるが、最終的にはできる。',
          '重要决定会慢一些，但最终能完成。',
          '重要決定會慢一些，但最終能完成。',
          'Quyết định lớn hơi lâu nhưng cuối cùng vẫn làm được.',
          'Keputusan besar butuh waktu, tapi akhirnya bisa.'
        ),
        score: 1,
      },
      {
        text: L(
          '작은 결정도 미루게 되고, 뭔가 시작하는 게 너무 부담스럽다',
          'Even small choices get postponed; starting anything feels heavy.',
          '小さな決定も先延ばしにし、何かを始めるのが重い。',
          '小事也拖，开始任何事都很有负担。',
          '小事也拖，開始任何事都很有負擔。',
          'Việc nhỏ cũng trì hoãn; bắt đầu điều gì cũng nặng nề.',
          'Keputusan kecil pun ditunda; memulai apa pun terasa berat.'
        ),
        score: 2,
      },
      {
        text: L(
          '아무것도 결정하고 싶지 않고 생각 자체를 멈추고 싶다',
          'I do not want to decide anything—I want my mind to stop.',
          '何も決めたくなく、考えること自体を止めたい。',
          '什么都不想决定，只想让大脑停转。',
          '什麼都不想決定，只想讓大腦停轉。',
          'Không muốn quyết định gì; muốn ngừng suy nghĩ.',
          'Tidak ingin memutuskan apa pun; ingin berhenti berpikir.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 12,
    question: L(
      '지금 이 순간, 나에게 가장 필요한 것은?',
      'Right now, what do you need most?',
      '今この瞬間、あなたにいちばん必要なのは？',
      '此刻你最需要的是什么？',
      '此刻你最需要的是什麼？',
      'Ngay lúc này, điều bạn cần nhất là gì?',
      'Saat ini, apa yang paling kamu butuhkan?'
    ),
    options: [
      {
        text: L(
          '특별히 필요한 게 없다. 지금도 나쁘지 않다',
          'Nothing special; I am not doing badly.',
          '特にない。今のままで悪くない。',
          '没什么特别的需要，现在还行。',
          '沒什麼特別的需要，現在還行。',
          'Không có gì đặc biệt; hiện tại cũng ổn.',
          'Tidak ada yang khusus; keadaan sekarang lumayan.'
        ),
        score: 0,
      },
      {
        text: L(
          '잠깐의 여유나 짧은 휴식이면 충분할 것 같다',
          'A little breathing room or a short break would be enough.',
          '少しの余裕や短い休憩があれば十分そう。',
          '一点空隙或短暂休息就够了。',
          '一點空隙或短暫休息就夠了。',
          'Một chút thở hoặc nghỉ ngắn là đủ.',
          'Sedikit ruang napas atau istirahat singkat sudah cukup.'
        ),
        score: 1,
      },
      {
        text: L(
          '며칠간의 완전한 휴가와 아무도 나를 찾지 않는 시간',
          'Several days fully off—and time when no one needs me.',
          '数日の完全オフと、誰にも求められない時間。',
          '几天彻底放空、谁也不找我的时间。',
          '幾天徹底放空、誰也不找我的時間。',
          'Vài ngày nghỉ hoàn toàn và không ai cần mình.',
          'Beberapa hari benar-benar off dan tidak ada yang mencari.'
        ),
        score: 2,
      },
      {
        text: L(
          '이 상태에서 벗어나고 싶은데 뭘 해도 나아질 것 같지 않다',
          'I want out of this state, but nothing seems to help.',
          'この状態から抜け出したいが、何をしても良くなりそうにない。',
          '想摆脱这状态，但做什么都像没用。',
          '想擺脫這狀態，但做什麼都像沒用。',
          'Muốn thoát khỏi tình trạng này nhưng làm gì cũng không khá hơn.',
          'Ingin keluar dari keadaan ini tapi apa pun rasanya tidak membaik.'
        ),
        score: 3,
      },
    ],
  },
];

export const phase3BurnoutFatigueResults: Phase3BurnoutFatigueResult[] = [
  {
    type: 'Type1',
    emoji: '🔋',
    title: L(
      '배터리 100%, 충전 완료 상태',
      'Battery 100% — fully charged',
      'バッテリー100％・満充電',
      '电量100%，满格状态',
      '電量100%，滿格狀態',
      'Pin 100% — đầy năng lượng',
      'Baterai 100% — terisi penuh'
    ),
    shortDescription: L(
      '"지금 이 순간, 당신은 괜찮습니다."',
      '"Right now, you are okay."',
      '「今のあなたは、大丈夫です。」',
      '“此刻的你，还好。”',
      '「此刻的你，還好。」',
      '"Lúc này, bạn vẫn ổn."',
      '"Saat ini, kamu baik-baik saja."'
    ),
    description: L(
      '신체적, 감정적, 인지적으로 모두 안정된 상태입니다. 스트레스를 받더라도 효과적으로 회복하는 회복탄력성이 높은 편입니다. 현재의 생활 루틴과 자기 관리 방식이 잘 맞고 있다는 뜻이기도 합니다. 지금 상태를 유지하는 것이 가장 중요합니다. 가끔 스스로를 점검하는 습관을 들여 두세요.',
      'You are stable physically, emotionally, and cognitively. You tend to bounce back well from stress. Your routines and self-care likely fit you. Keeping this balance matters most—keep checking in with yourself.',
      '身体的・感情的・認知的に安定しています。ストレスがあっても回復しやすい回復力が高めです。今の生活リズムとセルフケアが合っているサインでもあります。この状態を保つことが大切です。ときどき自分を点検する習慣を。',
      '身心与认知都较稳定，抗压恢复力较好，说明生活节奏和自我照顾方式比较适合你。维持现状很重要，记得偶尔自我检视。',
      '身心與認知都較穩定，抗壓恢復力較好，說明生活節奏和自我照顧方式比較適合你。維持現狀很重要，記得偶爾自我檢視。',
      'Bạn ổn về thể chất, cảm xúc và nhận thức. Khả năng hồi phục sau căng thẳng tốt. Nhịp sống và chăm sóc bản thân có vẻ hợp. Giữ cân bằng là quan trọng nhất — thỉnh thoảng tự kiểm tra.',
      'Kamu stabil secara fisik, emosi, dan kognisi. Daya pulih dari stres cukup baik. Rutinitas dan perawatan diri cocok. Pertahankan keseimbangan — sesekali periksa diri sendiri.'
    ),
    empathyLevel: L(
      '번아웃 레벨: Lv. 0 (이상 없음)',
      'Burnout level: Lv. 0 (none)',
      'バーンアウトレベル：Lv.0（異常なし）',
      '倦怠等级：Lv.0（无明显问题）',
      '倦怠等級：Lv.0（無明顯問題）',
      'Mức kiệt sức: Lv. 0 (không đáng lo)',
      'Level burnout: Lv. 0 (tidak bermasalah)'
    ),
    characteristics: L(
      '회복력 높음, 감정 안정적, 업무 효율 유지됨',
      'Strong recovery, stable mood, work efficiency maintained',
      '回復力が高い・感情が安定・仕事の効率は維持',
      '恢复快，情绪稳，工作效率仍在',
      '恢復快，情緒穩，工作效率仍在',
      'Phục hồi tốt, cảm xúc ổn, hiệu suất công việc giữ được',
      'Pulih baik, emosi stabil, produktivitas terjaga'
    ),
    goodMatch: L(
      'Type 2 (살짝 지친 동료에게 에너지를 나눠줄 수 있음)',
      'Type 2 (you can share energy with a slightly tired coworker)',
      'Type 2（少し疲れた同僚にエネルギーを分けられる）',
      'Type 2（能给略疲惫的同事一点能量）',
      'Type 2（能給略疲憊的同事一點能量）',
      'Type 2 (có thể chia năng lượng cho đồng nghiệp hơi mệt)',
      'Type 2 (bisa berbagi energi dengan rekan yang sedikit lelah)'
    ),
    badMatch: L(
      'Type 6 (완전 방전 상태를 이해하기 어려울 수 있음)',
      'Type 6 (may find a fully depleted state hard to understand)',
      'Type 6（完全放電の状態を理解しにくいことがある）',
      'Type 6（可能难理解彻底耗尽的状态）',
      'Type 6（可能難理解徹底耗尽的狀態）',
      'Type 6 (khó đồng cảm với trạng thái kiệt sức hoàn toàn)',
      'Type 6 (mungkin sulit memahami keadaan benar-benar habis)'
    ),
  },
  {
    type: 'Type2',
    emoji: '🟡',
    title: L(
      '배터리 60~70%, 슬슬 줄어드는 중',
      'Battery 60–70% — slowly draining',
      'バッテリー60〜70％・少しずつ減少',
      '电量60–70%，慢慢往下掉',
      '電量60–70%，慢慢往下掉',
      'Pin 60–70% — đang giảm dần',
      'Baterai 60–70% — perlahan berkurang'
    ),
    shortDescription: L(
      '"아직 괜찮긴 한데... 요즘 좀 피곤하긴 해요."',
      '"I am fine… but I have been tired lately."',
      '「まだ大丈夫だけど…最近ちょっと疲れてる。」',
      '“还算撑得住……但最近有点累。”',
      '「還算撐得住……但最近有點累。」',
      '"Vẫn ổn… nhưng dạo này hơi mệt."',
      '"Masih oke… tapi akhir-akhir ini agak lelah."'
    ),
    description: L(
      '눈에 띄는 이상은 없지만 피로가 서서히 쌓이고 있는 단계입니다. 아직 기능적으로는 잘 작동하지만, 이대로 방치하면 번아웃으로 이어질 수 있는 경계 구간입니다. 작은 휴식과 자기 돌봄이 지금 가장 효과적인 예방책입니다. 주말만큼은 진짜로 쉬어 보세요.',
      'No obvious crisis yet, but fatigue is building. You still function, but this is a warning zone—ignore it and burnout may follow. Small breaks and self-care are the best prevention. Make weekends real rest.',
      '目立った異常はないが、疲れがじわじわ溜まっている段階。まだ動けますが、放置するとバーンアウトに進みやすいゾーンです。小さな休息とセルフケアが予防に効きます。週末は本当に休んで。',
      '表面看不出大问题，但疲劳在累积。还能运转，但若放任可能走向倦怠。小段休息与自我照顾最有效。周末请真正休息。',
      '表面看不出大問題，但疲勞在累積。還能運轉，但若放任可能走向倦怠。小段休息與自我照顧最有效。週末請真正休息。',
      'Chưa có khủng hoảng rõ ràng nhưng mệt mỏi đang tích lũy. Vẫn hoạt động được nhưng đây là vùng cảnh báo. Nghỉ ngắn và tự chăm sóc là phòng ngừa tốt nhất. Cuối tuần hãy nghỉ thật.',
      'Belum krisis jelas, tapi kelelahan menumpuk. Masih berfungsi—zona peringatan. Istirahat singkat dan perawatan diri pencegahan terbaik. Akhir pekan benar-benar istirahat.'
    ),
    empathyLevel: L(
      '번아웃 레벨: Lv. 20 (초기 피로 누적)',
      'Burnout level: Lv. 20 (early fatigue buildup)',
      'バーンアウトレベル：Lv.20（初期の疲労蓄積）',
      '倦怠等级：Lv.20（早期疲劳累积）',
      '倦怠等級：Lv.20（早期疲勞累積）',
      'Mức kiệt sức: Lv. 20 (mệt nhẹ tích lũy)',
      'Level burnout: Lv. 20 (kelelahan awal menumpuk)'
    ),
    characteristics: L(
      '피로가 조금씩 쌓이는 중, 회복 가능한 상태',
      'Fatigue creeping in; still recoverable',
      '疲れが少しずつ溜まっているが、回復可能',
      '疲劳在累积，仍可恢复',
      '疲勞在累積，仍可恢復',
      'Mệt đang tích từng chút; vẫn có thể hồi phục',
      'Kelelahan menumpuk perlahan; masih bisa pulih'
    ),
    goodMatch: L(
      'Type 1 (활력 넘치는 사람 옆에 있으면 도움이 됨)',
      'Type 1 (being near an energetic person helps)',
      'Type 1（エネルギーがある人のそばにいると助かる）',
      'Type 1（身边有活力的人会好些）',
      'Type 1（身邊有活力的人會好些）',
      'Type 1 (ở cạnh người tràn năng lượng sẽ đỡ hơn)',
      'Type 1 (dekat orang berenergi membantu)'
    ),
    badMatch: L(
      'Type 5 (너무 힘든 사람 보면 덩달아 지침)',
      'Type 5 (seeing someone who struggles hard drains you too)',
      'Type 5（苦しんでいる人を見ると一緒にしんどくなる）',
      'Type 5（看到别人太苦也会跟着累）',
      'Type 5（看到別人太苦也會跟著累）',
      'Type 5 (thấy người quá khổ cũng kiệt theo)',
      'Type 5 (melihat orang sangat lelah membuatmu ikut habis)'
    ),
  },
  {
    type: 'Type3',
    emoji: '🟠',
    title: L(
      '배터리 30~40%, 경고등 깜빡이는 중',
      'Battery 30–40% — warning light blinking',
      'バッテリー30〜40％・警告灯が点滅',
      '电量30–40%，警示灯在闪',
      '電量30–40%，警示燈在閃',
      'Pin 30–40% — đèn cảnh báo nhấp nháy',
      'Baterai 30–40% — lampu peringatan berkedip'
    ),
    shortDescription: L(
      '"쉬고 싶은데 쉬면 더 불안해요."',
      '"I want to rest—but resting makes me more anxious."',
      '「休みたいのに、休むと不安になる。」',
      '“想休息，一休息反而更焦虑。”',
      '「想休息，一休息反而更焦慮。」',
      '"Muốn nghỉ mà nghỉ lại lo hơn."',
      '"Ingin istirahat tapi istirahat malah lebih cemas."'
    ),
    description: L(
      '번아웃의 전형적인 중기 증상이 나타나고 있습니다. 몸은 피곤하고 감정은 무뎌지며, 집중력도 예전 같지 않습니다. “조금만 더 버티면 된다”고 생각하며 자신을 몰아붙이고 있지는 않으신가요? 지금 당장 작은 것부터 내려놓을 필요가 있습니다. 억지로 버티는 것이 오히려 회복을 늦춥니다.',
      'Mid-stage burnout signs: tired body, dull feelings, weaker focus. Are you pushing yourself with “just a little longer”? You need to put something down now—forcing through delays recovery.',
      '中期的なバーンアウト兆候です。体はだるく、感情は鈍く、集中も落ちます。「あと少しだけ」と自分を追っていませんか？小さなことから手放す必要があります。無理に耐えるほど回復は遅れます。',
      '已进入倦怠典型中期：身体累、情绪钝、专注下降。是否还在“再撑一下”？现在就要从小处放手，硬撑只会拖慢恢复。',
      '已進入倦怠典型中期：身體累、情緒鈍、專注下降。是否還在「再撐一下」？現在就要從小處放手，硬撐只會拖慢恢復。',
      'Dấu hiệu burnout giai đoạn giữa: mệt, cảm xúc nhạt, khó tập trung. Bạn có đang tự ép “chỉ thêm chút nữa”? Hãy buông bớt từ việc nhỏ—gồng lên chỉ làm chậm hồi phục.',
      'Tanda burnout menengah: lelah, emosi datar, fokus turun. Apakah kamu memaksa “sebentar lagi”? Lepaskan hal kecil dulu—memaksa menahan justru menunda pemulihan.'
    ),
    empathyLevel: L(
      '번아웃 레벨: Lv. 40 (번아웃 진입 경고)',
      'Burnout level: Lv. 40 (warning — entering burnout)',
      'バーンアウトレベル：Lv.40（進入警告）',
      '倦怠等级：Lv.40（进入倦怠警戒）',
      '倦怠等級：Lv.40（進入倦怠警戒）',
      'Mức kiệt sức: Lv. 40 (cảnh báo đang vào burnout)',
      'Level burnout: Lv. 40 (peringatan memasuki burnout)'
    ),
    characteristics: L(
      '무기력증 시작, 집중력 저하, 감정 기복 증가',
      'Apathy rising, focus dropping, mood swings increasing',
      '無気力の始まり・集中低下・感情の波が増える',
      '无力感加重，专注下降，情绪波动变大',
      '無力感加重，專注下降，情緒波動變大',
      'Bắt đầu mất động lực, khó tập trung, cảm xúc thất thường',
      'Mulai apatis, fokus turun, emosi naik turun'
    ),
    goodMatch: L(
      'Type 2 (함께 쉬어갈 수 있는 관계가 필요함)',
      'Type 2 (you need relationships where you can rest together)',
      'Type 2（一緒に休める関係が必要）',
      'Type 2（需要能一起喘口气的关系）',
      'Type 2（需要能一起喘口氣的關係）',
      'Type 2 (cần mối quan hệ có thể nghỉ cùng nhau)',
      'Type 2 (butuh relasi di mana bisa istirahat bersama)'
    ),
    badMatch: L(
      'Type 6 (앞날이 너무 두려워 더 불안해짐)',
      'Type 6 (fear of the future can spike anxiety further)',
      'Type 6（先が怖くて不安が増えやすい）',
      'Type 6（对未来太恐惧会更焦虑）',
      'Type 6（對未來太恐懼會更焦慮）',
      'Type 6 (sợ tương lai làm lo âu tăng)',
      'Type 6 (ketakutan masa depan memperparah kecemasan)'
    ),
  },
  {
    type: 'Type4',
    emoji: '🔴',
    title: L(
      '배터리 10~20%, 위험 수위 돌입',
      'Battery 10–20% — danger zone',
      'バッテリー10〜20％・危険域',
      '电量10–20%，进入危险区',
      '電量10–20%，進入危險區',
      'Pin 10–20% — vùng nguy hiểm',
      'Baterai 10–20% — zona berbahaya'
    ),
    shortDescription: L(
      '"솔직히 지금 한계예요."',
      '"Honestly, I am at my limit."',
      '「正直、今が限界です。」',
      '“说实话，我已经到极限了。”',
      '「說實話，我已經到極限了。」',
      '"Thật lòng, tôi đã đến giới hạn."',
      '"Sejujurnya, aku sudah di batas."'
    ),
    description: L(
      '번아웃이 상당히 진행된 상태입니다. 신체적 신호(수면 장애, 두통 등), 감정적 고갈(무감각, 짜증), 인지적 저하(건망증, 결정 장애)가 동시에 나타나고 있습니다. 이 상태에서 계속 일하거나 버티는 것은 자동차 엔진이 과열된 채로 달리는 것과 같습니다. 며칠간의 완전한 휴식이 선택이 아닌 필수입니다.',
      'Burnout is advanced: sleep issues, headaches; emotional drain (numbness, irritability); cognitive slips (forgetfulness, indecision). Pushing on is like driving with an overheated engine. Several days of full rest is not optional—it is necessary.',
      'バーンアウトがかなり進行しています。睡眠障害・頭痛などの身体サイン、無感覚・イライラなどの感情枯渇、物忘れ・決断困難などの認知低下が重なります。このまま無理するのはエンジン過熱のまま走るようなものです。数日の完全休息は「したい」ではなく「必要」です。',
      '倦怠已较深：睡眠问题、头痛；情绪枯竭（麻木、易怒）；认知下降（健忘、难决策）。继续硬撑如同引擎过热还开。需要几天彻底休息，不是可选项而是必须。',
      '倦怠已較深：睡眠問題、頭痛；情緒枯竭（麻木、易怒）；認知下降（健忘、難決策）。繼續硬撐如同引擎過熱還開。需要幾天徹底休息，不是可選項而是必須。',
      'Burnout đã nặng: rối loạn ngủ, đau đầu; cạn kiệt cảm xúc (tê cứng, cáu); suy giảm nhận thức (hay quên, khó quyết định). Cố làm tiếp như lái xe quá nhiệt. Cần vài ngày nghỉ hoàn toàn — không phải lựa chọn mà là bắt buộc.',
      'Burnout sudah maju: gangguan tidur, sakit kepala; emosi kosong (mati rasa, mudah marah); kognisi turun (pelupa, sulit putuskan). Memaksa lanjut seperti mesin panas berlebih. Perlu beberapa hari istirahat penuh — bukan pilihan, tapi keharusan.'
    ),
    empathyLevel: L(
      '번아웃 레벨: Lv. 65 (번아웃 진행 중)',
      'Burnout level: Lv. 65 (burnout in progress)',
      'バーンアウトレベル：Lv.65（進行中）',
      '倦怠等级：Lv.65（倦怠进行中）',
      '倦怠等級：Lv.65（倦怠進行中）',
      'Mức kiệt sức: Lv. 65 (đang trong burnout)',
      'Level burnout: Lv. 65 (burnout sedang berlangsung)'
    ),
    characteristics: L(
      '3가지 피로 영역 모두 저하, 일상 기능 유지가 힘들어짐',
      'All three fatigue areas decline; daily functioning gets hard',
      '3つの疲労領域すべてが低下し、日常がしんどい',
      '三方面疲劳都下降，维持日常变难',
      '三方面疲勞都下降，維持日常變難',
      'Ba trục mệt mỏi đều giảm; sinh hoạt hàng ngày khó',
      'Ketiga domain kelelahan menurun; fungsi sehari-hari berat'
    ),
    goodMatch: L(
      '솔직하게 힘들다고 말할 수 있는 단 한 명의 사람',
      'Even one person you can honestly say “I am struggling” to',
      '「しんどい」と正直に言えるたった一人',
      '一个能让你坦诚说“我撑不住了”的人',
      '一個能讓你坦誠說「我撐不住了」的人',
      'Ít nhất một người để bạn thành thật nói “tôi rất khó”',
      'Setidaknya satu orang yang bisa kamu katakan jujur sedang sangat sulit'
    ),
    badMatch: L(
      '"다들 힘들어"라고 말하는 사람 (공감받지 못하면 더 지침)',
      'People who say “everyone struggles” (feeling unheard makes it worse)',
      '「みんな大変」と言う人（共感がないとさらにしんどい）',
      '总说“大家都很累”的人（不被理解会更累）',
      '總說「大家都很累」的人（不被理解會更累）',
      'Người hay nói “ai cũng khổ” (không được thấu hiểu càng mệt)',
      'Orang yang bilang “semua orang susah” (tidak didengar makin berat)'
    ),
  },
  {
    type: 'Type5',
    emoji: '⚫',
    title: L(
      '배터리 5%, 거의 방전 직전',
      'Battery ~5% — almost empty',
      'バッテリー約5％・ほぼ空',
      '电量约5%，快没电了',
      '電量約5%，快沒電了',
      'Pin ~5% — sắp cạn',
      'Baterai ~5% — hampir habis'
    ),
    shortDescription: L(
      '"아무것도 하기 싫고, 아무 감정도 없어요."',
      '"I do not want to do anything—and I barely feel anything."',
      '「何もしたくないし、感情も感じない。」',
      '“什么都不想做，也几乎感觉不到情绪。”',
      '「什麼都不想做，也幾乎感覺不到情緒。」',
      '"Chẳng muốn làm gì và gần như không cảm thấy gì."',
      '"Tidak ingin melakukan apa pun dan hampir tidak merasakan apa pun."'
    ),
    description: L(
      '번아웃이 심각한 수준입니다. 감정이 느껴지지 않는 무감각함, 극심한 무기력, 모든 것에서 손을 떼고 싶은 충동이 지속되고 있습니다. 이 상태는 의지력이나 마인드 컨트롤로 해결되지 않습니다. 혼자 해결하려 하지 말고, 신뢰할 수 있는 사람이나 전문가에게 현재 상태를 솔직하게 털어놓는 것이 회복의 첫걸음입니다.',
      'Severe burnout: emotional numbness, deep apathy, and a persistent urge to withdraw. Willpower alone cannot fix this. Do not go it alone—opening up to someone you trust or a professional is the first step toward recovery.',
      '深刻なバーンアウトです。感情の無感覚、強い無気力、すべてから手を引きたい衝動が続きます。根性では治りません。一人で抱え込まず、信頼できる人や専門家に正直に話すことが回復の第一歩です。',
      '倦怠严重：情感麻木、极度无力、想从一切中抽离。靠意志力无法解决。不要独自硬扛，向信任的人或专业人士坦诚现状是恢复的第一步。',
      '倦怠嚴重：情感麻木、極度無力、想從一切中抽離。靠意志力無法解決。不要獨自硬扛，向信任的人或專業人士坦誠現狀是恢復的第一步。',
      'Burnout nặng: tê cảm xúc, mất động lực sâu, muốn rút khỏi mọi thứ. Ý chí không đủ. Đừng tự gánh—nói thật với người tin cậy hoặc chuyên gia là bước đầu hồi phục.',
      'Burnout berat: mati rasa, apati dalam, ingin menjauh dari semua. Tekad saja tidak cukup. Jangan sendirian—bicara pada orang terpercaya atau profesional adalah langkah pertama.'
    ),
    empathyLevel: L(
      '번아웃 레벨: Lv. 85 (심각한 소진 상태)',
      'Burnout level: Lv. 85 (severe depletion)',
      'バーンアウトレベル：Lv.85（重度の消耗）',
      '倦怠等级：Lv.85（严重耗竭）',
      '倦怠等級：Lv.85（嚴重耗竭）',
      'Mức kiệt sức: Lv. 85 (cạn kiệt nặng)',
      'Level burnout: Lv. 85 (kelelahan parah)'
    ),
    characteristics: L(
      '감정 무감각, 사회적 철수, 회복 의지 저하',
      'Emotional numbness, social withdrawal, low motivation to recover',
      '感情の無感覚・社会的撤退・回復への意欲低下',
      '情感麻木，回避社交，恢复意愿低',
      '情感麻木，迴避社交，恢復意願低',
      'Tê cảm xúc, rút lui xã hội, ít muốn hồi phục',
      'Mati emosi, menarik diri sosial, motivasi pulih rendah'
    ),
    goodMatch: L(
      '전문 상담사 또는 심리치료사',
      'A licensed counselor or psychotherapist',
      '専門のカウンセラーまたは心理療法士',
      '专业咨询师或心理治疗师',
      '專業諮商師或心理治療師',
      'Chuyên gia tư vấn hoặc trị liệu tâm lý',
      'Konselor profesional atau psikoterapis'
    ),
    badMatch: L(
      '"힘내!" "긍정적으로 생각해!"라고 말하는 모든 사람',
      'Anyone who only says “cheer up” or “think positive”',
      '「頑張って！」「前向きに！」だけを言う人',
      '只会说“加油”“想开点”的人',
      '只會說「加油」「想開點」的人',
      'Ai chỉ nói “cố lên” hay “nghĩ tích cực đi”',
      'Orang yang hanya bilang “semangat” atau “pikir positif”'
    ),
  },
  {
    type: 'Type6',
    emoji: '🪫',
    title: L(
      '배터리 0%, 완전 방전',
      'Battery 0% — fully depleted',
      'バッテリー0％・完全に空',
      '电量0%，彻底耗尽',
      '電量0%，徹底耗盡',
      'Pin 0% — kiệt hoàn toàn',
      'Baterai 0% — habis total'
    ),
    shortDescription: L(
      '"이 결과를 보는 것조차 힘드셨을 것 같습니다."',
      '"Even reading this result may have been hard for you."',
      '「この結果を読むことすらつらかったかもしれません。」',
      '“也许连看这一结果都很吃力。”',
      '「也許連看這一結果都很吃力。」',
      '"Có lẽ chỉ đọc kết quả này thôi cũng đã rất khó."',
      '"Mungkin sekadar membaca hasil ini saja sudah sangat berat."'
    ),
    description: L(
      '당신은 지금 극도의 소진 상태에 있습니다. 신체, 감정, 인지 세 영역 모두가 한계에 달했고, 일상적인 기능을 유지하는 것 자체가 거대한 과제가 된 상태입니다. 이것은 나약함이 아닙니다. 오랫동안 너무 많은 것을 감당해온 결과입니다. 지금 당장 필요한 것은 쉬어도 된다는 허락을 스스로에게 주는 것, 그리고 전문가의 도움을 받는 것입니다. 당신의 회복을 응원합니다.',
      'You are in extreme depletion. Body, emotion, and cognition are near their limits—basic daily life feels like a huge task. This is not weakness; it is what happens after carrying too much for too long. You need permission to rest—from yourself—and help from professionals. We are rooting for your recovery.',
      '極度の消耗状態です。身体・感情・認知のすべてが限界に近く、日常そのものが重い負担になっています。これは弱さではありません。長く多くを抱えてきた結果です。いま必要なのは「休んでいい」という自分への許可と、専門家の支援です。回復を応援しています。',
      '你正处于极度耗竭：身心灵都逼近极限，维持日常都像巨大任务。这不是软弱，是长期承担过多的结果。你需要允许自己休息，并寻求专业帮助。祝你能慢慢恢复。',
      '你正處於極度耗竭：身心靈都逼近極限，維持日常都像巨大任務。這不是軟弱，是長期承擔過多的結果。你需要允許自己休息，並尋求專業幫助。祝你能慢慢恢復。',
      'Bạn đang kiệt sức cực độ: thể chất, cảm xúc, nhận thức gần giới hạn—sinh hoạt thường nhật cũng thành gánh nặng. Đây không phải yếu đuối; là hệ quả của việc gánh quá lâu. Bạn cần cho phép mình nghỉ và nhận hỗ trợ chuyên môn. Chúc bạn dần hồi phục.',
      'Kamu sangat terkuras: fisik, emosi, kognisi hampir limit—hidup sehari-hari terasa sangat berat. Ini bukan kelemahan; akibat menanggung terlalu lama. Kamu perlu izin untuk istirahat dan bantuan profesional. Semoga perlahan membaik.'
    ),
    empathyLevel: L(
      '번아웃 레벨: Lv. 99 (완전 소진, 즉각적 회복 필요)',
      'Burnout level: Lv. 99 (total depletion—urgent recovery needed)',
      'バーンアウトレベル：Lv.99（完全消耗・早急な回復が必要）',
      '倦怠等级：Lv.99（完全耗竭，需尽快恢复）',
      '倦怠等級：Lv.99（完全耗竭，需盡快恢復）',
      'Mức kiệt sức: Lv. 99 (cạn kiệt hoàn toàn — cần hồi phục khẩn)',
      'Level burnout: Lv. 99 (habis total — perlu pemulihan segera)'
    ),
    characteristics: L(
      '모든 기능 저하, 고립감, 무망감',
      'Broad functional decline, isolation, hopelessness',
      '機能の低下・孤立感・絶望感',
      '功能全面下降，孤立感，无望感',
      '功能全面下降，孤立感，無望感',
      'Suy giảm chức năng, cô lập, tuyệt vọng',
      'Penurunan fungsi, terasing, putus asa'
    ),
    goodMatch: L(
      '지금 당장 전문 상담 기관 또는 심리치료사',
      'A professional clinic or psychotherapist—now',
      '今すぐ専門の相談窓口または心理療法士',
      '请尽快联系专业咨询机构或心理治疗师',
      '請盡快聯繫專業諮商機構或心理治療師',
      'Ngay: cơ sở tư vấn chuyên nghiệp hoặc trị liệu tâm lý',
      'Segera: lembaga konseling profesional atau psikoterapis'
    ),
    badMatch: L(
      '혼자 버티려는 나 자신',
      'Trying to endure it all alone',
      '一人で抱え込もうとする自分',
      '想独自硬扛的自己',
      '想獨自硬扛的自己',
      'Bản thân cố gánh một mình',
      'Diri sendiri yang memaksakan bertahan sendirian'
    ),
  },
];

export function calculatePhase3BurnoutFatigueResult(answers: number[]): string {
  const total = answers.reduce((sum, s) => sum + s, 0);
  if (total <= 5) return 'Type1';
  if (total <= 11) return 'Type2';
  if (total <= 19) return 'Type3';
  if (total <= 27) return 'Type4';
  if (total <= 33) return 'Type5';
  return 'Type6';
}
