/** 나의 운동 지속력 유형 — 12문항 4지선다, A=0 B=1 C=2 D=3, 총점 0~36 → 6유형 */

function M(
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

export interface Phase3ExercisePersistenceTypeQuestion {
  id: number;
  question: Record<string, string>;
  options: { text: Record<string, string>; score: number }[];
}

export interface Phase3ExercisePersistenceTypeResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  obstacleType: Record<string, string>;
  obstacleKeywords: Record<string, string>;
  quitMoment: Record<string, string>;
  overcomeStrategy: Record<string, string>;
  todayTask: Record<string, string>;
  shareSnippet: Record<string, string>;
}

export function calculatePhase3ExercisePersistenceTypeResult(scores: number[]): string {
  const total = scores.reduce((sum, s) => sum + (s ?? 0), 0);
  if (total <= 5) return 'Type1';
  if (total <= 11) return 'Type2';
  if (total <= 19) return 'Type3';
  if (total <= 27) return 'Type4';
  if (total <= 33) return 'Type5';
  return 'Type6';
}

export const phase3ExercisePersistenceTypeQuestions: Phase3ExercisePersistenceTypeQuestion[] = [
  {
    id: 1,
    question: M(
      '운동을 등록하고 처음 며칠은 어떤가요?',
      'After signing up for a workout, how are the first few days?',
      '運動を登録して最初の数日はどうですか？',
      '报名运动后，最初几天是怎样的？',
      '報名運動後，最初幾天是怎樣的？',
      'Sau khi đăng ký tập luyện, những ngày đầu tiên của bạn thế nào?',
      'Setelah mendaftar olahraga, bagaimana beberapa hari pertamanya?'
    ),
    options: [
      {
        text: M(
          '열심히 한다. 초반 2주 정도는 꽤 잘 나가는 편이다',
          'I go hard. The first two weeks usually go pretty well.',
          '本気で取り組む。最初の2週間くらいはかなり順調に進む。',
          '我会认真练。前两周左右通常进展不错。',
          '我會認真練。前兩週左右通常進展不錯。',
          'Tôi tập nghiêm túc. Khoảng 2 tuần đầu thường khá ổn.',
          'Saya serius. Dua minggu pertama biasanya berjalan cukup baik.'
        ),
        score: 0,
      },
      {
        text: M(
          '처음부터 완벽한 루틴을 짜느라 정작 운동 시작이 늦어진다',
          'I spend so long building the perfect routine that I actually start late.',
          '最初から完璧なルーティンを作ろうとして、肝心の運動開始が遅れる。',
          '一开始就在设计完美计划，结果真正开始运动反而晚了。',
          '一開始就在設計完美計畫，結果真正開始運動反而晚了。',
          'Tôi cố thiết kế lịch tập hoàn hảo ngay từ đầu nên thực sự bắt đầu muộn.',
          'Saya terlalu sibuk merancang rutinitas sempurna sehingga mulai olahraga jadi terlambat.'
        ),
        score: 1,
      },
      {
        text: M(
          '처음부터 의욕이 별로 없다. 등록 자체가 목적이었나 싶다',
          'I am not very motivated from the start. Signing up itself might have been the goal.',
          '最初からあまりやる気がない。登録自体が目的だったのかもしれない。',
          '从一开始就没多少动力。好像报名本身就是目的。',
          '從一開始就沒多少動力。好像報名本身就是目的。',
          'Ngay từ đầu tôi không có nhiều động lực. Có lẽ việc đăng ký chính là mục tiêu.',
          'Dari awal motivasi saya kurang. Mungkin mendaftar saja sudah jadi tujuannya.'
        ),
        score: 2,
      },
      {
        text: M(
          '처음엔 잘 나가는데 단 하루 빠지면 그게 끝이다',
          'I start strong, but missing just one day means it is over.',
          '最初は順調だが、たった1日休むとそれで終わりだ。',
          '一开始进展不错，但只要缺一天就彻底结束了。',
          '一開始進展不錯，但只要缺一天就徹底結束了。',
          'Ban đầu tôi làm tốt, nhưng chỉ cần nghỉ một ngày là coi như xong.',
          'Awalnya lancar, tapi cukup absen satu hari saja sudah selesai.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 2,
    question: M(
      '운동을 빠지는 가장 흔한 이유는?',
      'What is your most common reason for skipping a workout?',
      '運動をサボる最もよくある理由は？',
      '你最常因为什么理由跳过运动？',
      '你最常因為什麼理由跳過運動？',
      'Lý do phổ biến nhất khiến bạn bỏ tập là gì?',
      'Alasan paling sering Anda melewatkan olahraga?'
    ),
    options: [
      {
        text: M(
          '오늘 하루 피곤하다. 내일부터 다시 하면 된다',
          'I am tired today. I can start again tomorrow.',
          '今日は疲れている。明日からまたやればいい。',
          '今天有点累。明天再开始就行。',
          '今天有點累。明天再開始就行。',
          'Hôm nay mệt. Mai tập lại cũng được.',
          'Hari ini lelah. Besok mulai lagi saja.'
        ),
        score: 0,
      },
      {
        text: M(
          '오늘은 컨디션이 안 좋아서 퍼포먼스가 안 나올 것 같다',
          'I do not feel good today, so my performance will probably be bad.',
          '今日はコンディションが悪くて、パフォーマンスが出ない気がする。',
          '今天状态不好，感觉发挥不出水平。',
          '今天狀態不好，感覺發揮不出水準。',
          'Hôm nay tôi không khỏe nên chắc sẽ không tập tốt được.',
          'Hari ini kondisi saya kurang baik, jadi performa saya pasti jelek.'
        ),
        score: 1,
      },
      {
        text: M(
          '날씨가 별로다. 춥거나 덥거나 비가 온다',
          'The weather is bad. It is cold, hot, or raining.',
          '天気が悪い。寒い、暑い、雨が降る。',
          '天气不好。太冷、太热，或者下雨。',
          '天氣不好。太冷、太熱，或者下雨。',
          'Thời tiết tệ. Lạnh, nóng hoặc mưa.',
          'Cuacanya buruk. Dingin, panas, atau hujan.'
        ),
        score: 2,
      },
      {
        text: M(
          '같이 가기로 한 사람이 못 간다고 했다',
          'The person I was going with said they cannot make it.',
          '一緒に行く予定だった人が行けないと言った。',
          '约好一起运动的人说他去不了。',
          '約好一起運動的人說他去不了。',
          'Người hẹn đi cùng nói là không đi được.',
          'Orang yang janjian ikut bilang tidak bisa datang.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 3,
    question: M(
      '운동 계획을 세울 때 나는?',
      'When I make a workout plan, I...',
      '運動計画を立てるとき、私は？',
      '制定运动计划时，我会？',
      '制定運動計畫時，我會？',
      'Khi lập kế hoạch tập luyện, tôi thường?',
      'Saat membuat rencana olahraga, saya...'
    ),
    options: [
      {
        text: M(
          '그냥 생각날 때 간다. 계획을 세우면 지키기 힘들다',
          'I just go when I feel like it. Plans are hard for me to follow.',
          '思い立ったときに行く。計画を立てると守りにくい。',
          '想到就去。定了计划反而更难坚持。',
          '想到就去。定了計畫反而更難堅持。',
          'Tôi đi khi nào nhớ ra. Lập kế hoạch thì khó giữ lắm.',
          'Saya pergi saat teringat. Kalau dibuat rencana malah susah dijalankan.'
        ),
        score: 0,
      },
      {
        text: M(
          '완벽한 주간 루틴을 설계한다. 부위별·요일별로 세세하게',
          'I design a perfect weekly routine in detail by body part and day.',
          '完璧な週間ルーティンを設計する。部位別・曜日別に細かく。',
          '我会设计完美的每周计划，按部位和日期细分。',
          '我會設計完美的每週計畫，按部位和日期細分。',
          'Tôi thiết kế lịch tuần hoàn hảo, chi tiết theo nhóm cơ và từng ngày.',
          'Saya merancang rutinitas mingguan sempurna secara detail per bagian tubuh dan hari.'
        ),
        score: 1,
      },
      {
        text: M(
          '계획은 세우는데 막상 실행이 잘 안 된다',
          'I make plans, but I do not actually follow through well.',
          '計画は立てるが、いざ実行するとうまくいかない。',
          '计划会定，但真正执行时总是做不好。',
          '計畫會定，但真正執行時總是做不好。',
          'Tôi có lập kế hoạch nhưng thực tế không làm được tốt.',
          'Saya membuat rencana, tapi eksekusinya tidak berjalan baik.'
        ),
        score: 2,
      },
      {
        text: M(
          '운동 파트너나 PT 선생님 스케줄에 맞춘다',
          'I adjust to my workout partner or personal trainer\'s schedule.',
          '運動パートナーやPTトレーナーのスケジュールに合わせる。',
          '我会配合运动伙伴或私教的时间安排。',
          '我會配合運動夥伴或私教的時間安排。',
          'Tôi theo lịch của bạn tập hoặc huấn luyện viên PT.',
          'Saya menyesuaikan jadwal dengan partner latihan atau pelatih PT.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 4,
    question: M(
      '운동 중 가장 힘든 순간은?',
      'What is the hardest moment during a workout?',
      '運動中で最もつらい瞬間は？',
      '运动过程中最难的时刻是？',
      '運動過程中最難的時刻是？',
      'Khoảnh khắc khó nhất khi tập luyện là gì?',
      'Momen tersulit saat berolahraga?'
    ),
    options: [
      {
        text: M(
          '운동하러 가기까지의 과정. 막상 가면 괜찮다',
          'Getting there. Once I arrive, I am fine.',
          '運動に行くまでの過程。行ってしまえば大丈夫。',
          '去运动路上的过程。真正到了就还好。',
          '去運動路上的過程。真正到了就還好。',
          'Quá trình đi tập. Đến nơi rồi thì ổn.',
          'Proses menuju tempat olahraga. Setelah sampai, saya baik-baik saja.'
        ),
        score: 0,
      },
      {
        text: M(
          '내가 세운 기준에 못 미쳤을 때. 오늘 운동이 망했다는 느낌',
          'When I fall short of my own standards. It feels like today\'s workout was ruined.',
          '自分が決めた基準に届かなかったとき。今日の運動は台無しだという感覚。',
          '没达到自己定的标准时。感觉今天的训练毁了。',
          '沒達到自己定的標準時。感覺今天的訓練毀了。',
          'Khi không đạt tiêu chuẩn tôi tự đặt. Cảm giác buổi tập hôm nay đã hỏng.',
          'Saat tidak memenuhi standar saya sendiri. Rasanya latihan hari ini sudah gagal.'
        ),
        score: 1,
      },
      {
        text: M(
          '혼자 있을 때. 아무도 없으면 대충 하거나 일찍 끝낸다',
          'When I am alone. With no one around, I slack off or finish early.',
          '一人のとき。誰もいないと適当にやったり早く終わらせる。',
          '一个人时。没人看着就会敷衍或提前结束。',
          '一個人時。沒人看著就會敷衍或提前結束。',
          'Khi ở một mình. Không có ai thì tôi làm qua loa hoặc kết thúc sớm.',
          'Saat sendirian. Kalau tidak ada orang, saya asal-asalan atau selesai lebih cepat.'
        ),
        score: 2,
      },
      {
        text: M(
          '꾸준히 해도 눈에 보이는 변화가 없을 때. 동기가 사라진다',
          'When I keep going but see no visible change. My motivation disappears.',
          '続けても目に見える変化がないとき。モチベーションが消える。',
          '坚持练却看不到明显变化时。动力就消失了。',
          '堅持練卻看不到明顯變化時。動力就消失了。',
          'Khi tập đều mà không thấy thay đổi rõ ràng. Động lực biến mất.',
          'Saat terus latihan tapi tidak ada perubahan yang terlihat. Motivasi saya hilang.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 5,
    question: M(
      '운동 후 느끼는 감정은?',
      'How do you feel after a workout?',
      '運動後に感じる感情は？',
      '运动后你的感受是？',
      '運動後你的感受是？',
      'Sau buổi tập, bạn cảm thấy thế nào?',
      'Bagaimana perasaan Anda setelah berolahraga?'
    ),
    options: [
      {
        text: M(
          '뿌듯하다. 그래서 가기 전에 더 귀찮은 게 억울하다',
          'Proud. That is why it feels even more annoying before I go.',
          '達成感がある。だから行く前の面倒さがもっともったいなく感じる。',
          '很有成就感。所以出发前的麻烦更让人不甘心。',
          '很有成就感。所以出發前的麻煩更讓人不甘心。',
          'Tự hào. Vì vậy trước khi đi tập càng thấy phiền hơn.',
          'Bangga. Makanya sebelum pergi terasa lebih merepotkan.'
        ),
        score: 0,
      },
      {
        text: M(
          '오늘 계획한 것을 다 했을 때만 만족스럽다. 못 채우면 찜찜하다',
          'I feel satisfied only when I complete everything I planned. Otherwise I feel uneasy.',
          '今日の計画を全部こなしたときだけ満足する。達成できないとモヤモヤする。',
          '只有完成今天计划的所有内容才满意。没完成就会心里别扭。',
          '只有完成今天計畫的所有內容才滿意。沒完成就會心裡彆扭。',
          'Tôi chỉ hài lòng khi hoàn thành hết kế hoạch hôm nay. Không đủ thì thấy khó chịu.',
          'Saya puas hanya jika semua rencana hari ini selesai. Kalau tidak, rasanya tidak enak.'
        ),
        score: 1,
      },
      {
        text: M(
          '했다는 것 자체로 기쁘다. 양이나 질보다 출석이 중요하다',
          'I am happy just for showing up. Attendance matters more than volume or quality.',
          'やったこと自体がうれしい。量や質より出席が大事。',
          '只要做了就开心。出勤比数量或质量更重要。',
          '只要做了就開心。出勤比數量或品質更重要。',
          'Chỉ cần đi tập là vui rồi. Có mặt quan trọng hơn số lượng hay chất lượng.',
          'Saya senang hanya karena sudah berolahraga. Kehadiran lebih penting daripada jumlah atau kualitas.'
        ),
        score: 2,
      },
      {
        text: M(
          '누군가와 같이 운동했을 때 훨씬 보람차고 재밌다',
          'Working out with someone feels much more rewarding and fun.',
          '誰かと一緒に運動したときのほうがずっとやりがいがあり楽しい。',
          '和别人一起运动时更有成就感，也更有趣。',
          '和別人一起運動時更有成就感，也更有趣。',
          'Tập cùng ai đó thì bổ ích và vui hơn nhiều.',
          'Berolahraga bersama orang lain jauh lebih memuaskan dan seru.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 6,
    question: M(
      '운동을 장기간 쉬게 되는 가장 큰 이유는?',
      'What is the biggest reason you stop working out for a long time?',
      '運動を長期間休んでしまう最大の理由は？',
      '让你长期停止运动的最大原因是？',
      '讓你長期停止運動的最大原因是？',
      'Lý do lớn nhất khiến bạn nghỉ tập lâu dài là gì?',
      'Alasan terbesar Anda berhenti olahraga dalam waktu lama?'
    ),
    options: [
      {
        text: M(
          '한번 빠지기 시작하면 루틴이 깨져서 다시 시작하기 어렵다',
          'Once I start skipping, the routine breaks and it is hard to restart.',
          '一度サボり始めるとルーティンが崩れて、再開が難しい。',
          '一旦开始缺席，节奏就断了，很难重新开始。',
          '一旦開始缺席，節奏就斷了，很難重新開始。',
          'Một khi bắt đầu nghỉ thì thói quen đứt và rất khó quay lại.',
          'Begitu mulai bolos, rutinitas rusak dan sulit memulai lagi.'
        ),
        score: 0,
      },
      {
        text: M(
          '부상이 생기거나 몸 상태가 나빠지면 완전히 멈춘다',
          'If I get injured or my body feels bad, I stop completely.',
          '怪我をしたり体調が悪くなると完全に止める。',
          '受伤或身体状态变差时，我会完全停下来。',
          '受傷或身體狀態變差時，我會完全停下來。',
          'Bị chấn thương hoặc cơ thể xấu đi thì tôi dừng hẳn.',
          'Kalau cedera atau kondisi tubuh memburuk, saya berhenti total.'
        ),
        score: 1,
      },
      {
        text: M(
          '바쁜 시기가 생기면 운동이 제일 먼저 사라진다',
          'When life gets busy, working out is the first thing to go.',
          '忙しい時期になると、運動が真っ先に消える。',
          '一忙起来，运动总是最先被放弃。',
          '一忙起來，運動總是最先被放棄。',
          'Khi bận rộn, tập luyện là thứ đầu tiên bị bỏ.',
          'Saat sibuk, olahraga jadi hal pertama yang hilang.'
        ),
        score: 2,
      },
      {
        text: M(
          '운동 파트너가 그만두거나 환경이 바뀌면 같이 그만두게 된다',
          'If my workout partner quits or the environment changes, I quit too.',
          '運動パートナーがやめたり環境が変わると、一緒にやめてしまう。',
          '运动伙伴退出或环境变了，我也会跟着停。',
          '運動夥伴退出或環境變了，我也會跟著停。',
          'Bạn tập bỏ cuộc hoặc môi trường thay đổi thì tôi cũng dừng theo.',
          'Kalau partner latihan berhenti atau lingkungan berubah, saya ikut berhenti.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 7,
    question: M(
      '운동 동기는 어디서 오나요?',
      'Where does your workout motivation come from?',
      '運動のモチベーションはどこから来ますか？',
      '你的运动动力来自哪里？',
      '你的運動動力來自哪裡？',
      'Động lực tập luyện của bạn đến từ đâu?',
      'Dari mana motivasi olahraga Anda berasal?'
    ),
    options: [
      {
        text: M(
          '오늘도 해냈다는 성취감. 출석 자체가 보상이다',
          'The sense of achievement from showing up today. Attendance itself is the reward.',
          '今日もやり遂げたという達成感。出席そのものが報酬。',
          '今天也完成了的成就感。到场本身就是奖励。',
          '今天也完成了的成就感。到場本身就是獎勵。',
          'Cảm giác thành tựu vì hôm nay cũng đã làm được. Có mặt chính là phần thưởng.',
          'Rasa pencapaian karena hari ini juga sudah berhasil. Kehadiran sendiri sudah jadi hadiah.'
        ),
        score: 0,
      },
      {
        text: M(
          '눈에 보이는 수치 변화. 몸무게·근육량·기록 향상',
          'Visible number changes. Weight, muscle mass, and performance records improving.',
          '目に見える数値の変化。体重・筋肉量・記録の向上。',
          '看得见的数字变化。体重、肌肉量、成绩提升。',
          '看得見的數字變化。體重、肌肉量、成績提升。',
          'Những con số thay đổi rõ ràng. Cân nặng, khối cơ, thành tích cải thiện.',
          'Perubahan angka yang terlihat. Berat badan, massa otot, dan rekor yang meningkat.'
        ),
        score: 1,
      },
      {
        text: M(
          '기분이 좋거나 에너지가 넘칠 때. 컨디션이 동기다',
          'When I feel good or full of energy. My condition is my motivation.',
          '気分が良い、エネルギーにあふれるとき。コンディションがモチベーション。',
          '心情好或精力充沛时。状态就是动力。',
          '心情好或精力充沛時。狀態就是動力。',
          'Khi tâm trạng tốt hoặc tràn đầy năng lượng. Thể trạng chính là động lực.',
          'Saat mood bagus atau penuh energi. Kondisi tubuh jadi motivasi.'
        ),
        score: 2,
      },
      {
        text: M(
          '같이 하는 사람이 있을 때. 혼자면 동기가 반으로 줄어든다',
          'When I have someone to work out with. Alone, my motivation drops by half.',
          '一緒にやる人がいるとき。一人だとモチベーションが半分になる。',
          '有人一起练时。一个人时动力会减半。',
          '有人一起練時。一個人時動力會減半。',
          'Khi có người tập cùng. Một mình thì động lực giảm một nửa.',
          'Saat ada orang latihan bersama. Sendirian, motivasi saya turun setengah.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 8,
    question: M(
      '운동 준비물과 장비에 대한 나의 태도는?',
      'What is your attitude toward workout gear and equipment?',
      '運動の準備物や器具に対する私の態度は？',
      '你对运动装备和器材的态度是？',
      '你對運動裝備和器材的態度是？',
      'Thái độ của bạn với đồ tập và dụng cụ thể dục?',
      'Bagaimana sikap Anda terhadap perlengkapan dan alat olahraga?'
    ),
    options: [
      {
        text: M(
          '딱 필요한 것만. 장비보다 실행이 중요하다',
          'Only what I need. Execution matters more than gear.',
          '必要なものだけ。器具より実行が大事。',
          '只要必需的。执行比装备更重要。',
          '只要必需的。執行比裝備更重要。',
          'Chỉ những gì cần thiết. Hành động quan trọng hơn dụng cụ.',
          'Hanya yang benar-benar perlu. Eksekusi lebih penting daripada peralatan.'
        ),
        score: 0,
      },
      {
        text: M(
          '운동복·운동화·보충제 등 준비를 완벽하게 갖추는 편이다',
          'I like to prepare everything perfectly: workout clothes, shoes, supplements, and more.',
          '運動着・運動靴・サプリなど準備を完璧に整える。',
          '我会把运动服、运动鞋、补剂等准备得很齐全。',
          '我會把運動服、運動鞋、補劑等準備得很齊全。',
          'Tôi thường chuẩn bị đầy đủ: quần áo, giày, thực phẩm bổ sung...',
          'Saya suka menyiapkan semuanya sempurna: pakaian olahraga, sepatu, suplemen, dan lainnya.'
        ),
        score: 1,
      },
      {
        text: M(
          '귀찮아서 준비 안 하고 빠지는 경우가 있다',
          'Sometimes I skip because preparing feels like too much trouble.',
          '面倒で準備せず、サボってしまうことがある。',
          '有时嫌麻烦不准备，就直接不去了。',
          '有時嫌麻煩不準備，就直接不去了。',
          'Đôi khi lười chuẩn bị nên bỏ luôn.',
          'Kadang saya bolos karena terlalu malas menyiapkan perlengkapan.'
        ),
        score: 2,
      },
      {
        text: M(
          '좋은 장비가 있으면 더 열심히 하게 된다',
          'Good gear makes me work harder.',
          '良い器具があると、もっと本気でやれる。',
          '有好装备我会练得更认真。',
          '有好裝備我會練得更認真。',
          'Có dụng cụ tốt thì tôi tập chăm hơn.',
          'Kalau ada peralatan bagus, saya jadi lebih semangat.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 9,
    question: M(
      '"오늘은 운동 쉴까"라는 생각이 드는 순간은?',
      'When do you think, "Should I skip today\'s workout?"',
      '「今日は運動休もうかな」と思う瞬間は？',
      '你什么时候会想“今天要不要休息不练”？',
      '你什麼時候會想「今天要不要休息不練」？',
      'Khi nào bạn nghĩ "Hôm nay nghỉ tập nhỉ?"',
      'Kapan Anda berpikir, "Hari ini istirahat saja?"'
    ),
    options: [
      {
        text: M(
          '소파에 앉는 순간. 앉으면 일어나기 싫어진다',
          'The moment I sit on the couch. Once I sit, I do not want to get up.',
          'ソファに座った瞬間。座ると立ち上がりたくなくなる。',
          '一坐到沙发上。坐下后就不想起来了。',
          '一坐到沙發上。坐下後就不想起來了。',
          'Khoảnh khắc ngồi xuống sofa. Ngồi rồi là không muốn đứng dậy.',
          'Saat duduk di sofa. Setelah duduk, saya malas bangun.'
        ),
        score: 0,
      },
      {
        text: M(
          '컨디션이 100%가 아닌 것 같을 때',
          'When I feel like I am not at 100%.',
          'コンディションが100%ではないと感じるとき。',
          '感觉状态不是100%的时候。',
          '感覺狀態不是100%的時候。',
          'Khi cảm thấy thể trạng chưa đạt 100%.',
          'Saat merasa kondisi saya belum 100%.'
        ),
        score: 1,
      },
      {
        text: M(
          '날씨가 나쁘거나 기분이 별로일 때',
          'When the weather is bad or my mood is off.',
          '天気が悪い、または気分が乗らないとき。',
          '天气不好或心情一般的时候。',
          '天氣不好或心情一般的時候。',
          'Khi thời tiết xấu hoặc tâm trạng không tốt.',
          'Saat cuaca buruk atau mood saya jelek.'
        ),
        score: 2,
      },
      {
        text: M(
          '혼자 가야 한다는 것을 인식하는 순간',
          'The moment I realize I have to go alone.',
          '一人で行かなければならないと気づいた瞬間。',
          '意识到得一个人去的时候。',
          '意識到得一個人去的時候。',
          'Khoảnh khắc nhận ra mình phải đi một mình.',
          'Saat saya sadar harus pergi sendiri.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 10,
    question: M(
      '운동 앱이나 기록 도구를 사용한다면?',
      'If you use workout apps or tracking tools...',
      '運動アプリや記録ツールを使うなら？',
      '如果你使用运动App或记录工具...',
      '如果你使用運動App或記錄工具...',
      'Nếu bạn dùng app tập luyện hoặc công cụ ghi chép...',
      'Jika Anda menggunakan aplikasi olahraga atau alat pencatatan...'
    ),
    options: [
      {
        text: M(
          '쓰다 말았다. 기록보다 가는 것 자체가 목표다',
          'I start and stop. Showing up matters more than tracking.',
          '途中でやめた。記録より行くこと自体が目的。',
          '用用就停了。到场比记录更重要。',
          '用用就停了。到場比記錄更重要。',
          'Dùng rồi bỏ. Đi tập quan trọng hơn ghi chép.',
          'Saya mulai lalu berhenti. Datang latihan lebih penting daripada mencatat.'
        ),
        score: 0,
      },
      {
        text: M(
          '열심히 쓴다. 데이터로 진행 상황을 파악하는 것이 중요하다',
          'I use them diligently. Tracking progress with data is important.',
          'しっかり使う。データで進捗を把握することが大事。',
          '我会认真使用。用数据掌握进度很重要。',
          '我會認真使用。用數據掌握進度很重要。',
          'Tôi dùng rất chăm. Theo dõi tiến độ bằng dữ liệu rất quan trọng.',
          'Saya memakainya rajin. Memantau progres lewat data itu penting.'
        ),
        score: 1,
      },
      {
        text: M(
          '기록하면 좋은데 귀찮아서 안 하게 된다',
          'Tracking would be good, but it feels like too much trouble.',
          '記録した方がいいが、面倒でやらなくなる。',
          '记录当然好，但嫌麻烦就不做了。',
          '記錄當然好，但嫌麻煩就不做了。',
          'Ghi chép thì tốt nhưng lười nên không làm.',
          'Mencatat memang bagus, tapi malas jadi tidak jadi.'
        ),
        score: 2,
      },
      {
        text: M(
          '커뮤니티 기능이나 챌린지가 있으면 더 활발하게 쓴다',
          'I use them more actively when there are community features or challenges.',
          'コミュニティ機能やチャレンジがあると、もっと積極的に使う。',
          '有社区功能或挑战时我会用得更积极。',
          '有社群功能或挑戰時我會用得更積極。',
          'Có cộng đồng hoặc thử thách thì tôi dùng tích cực hơn.',
          'Saya lebih aktif memakainya kalau ada fitur komunitas atau challenge.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 11,
    question: M(
      '운동을 3개월 이상 지속해본 경험이 있다면 그 이유는?',
      'If you have kept working out for more than 3 months, why?',
      '3か月以上運動を続けた経験があるなら、その理由は？',
      '如果你曾坚持运动超过3个月，原因是什么？',
      '如果你曾堅持運動超過3個月，原因是什麼？',
      'Nếu bạn từng tập luyện hơn 3 tháng, vì sao?',
      'Jika pernah berolahraga lebih dari 3 bulan, kenapa?'
    ),
    options: [
      {
        text: M(
          '그냥 습관이 됐다. 어느 순간 안 가면 이상한 느낌이 들었다',
          'It just became a habit. At some point, not going felt strange.',
          'ただ習慣になった。ある時から行かないと違和感があった。',
          '慢慢就成了习惯。某个时刻不去反而觉得不对劲。',
          '慢慢就成了習慣。某個時刻不去反而覺得不對勁。',
          'Nó chỉ trở thành thói quen. Đến một lúc, không đi thì thấy lạ.',
          'Itu jadi kebiasaan. Suatu saat, tidak pergi justru terasa aneh.'
        ),
        score: 0,
      },
      {
        text: M(
          '목표가 명확했다. 특정 대회나 이벤트를 준비했다',
          'I had a clear goal. I was preparing for a specific event or competition.',
          '目標が明確だった。特定の大会やイベントに向けて準備していた。',
          '目标很明确。我在为某个比赛或活动做准备。',
          '目標很明確。我在為某個比賽或活動做準備。',
          'Mục tiêu rõ ràng. Tôi chuẩn bị cho một giải hoặc sự kiện cụ thể.',
          'Tujuannya jelas. Saya sedang mempersiapkan event atau kompetisi tertentu.'
        ),
        score: 1,
      },
      {
        text: M(
          '환경이 잘 맞았다. 집 근처이거나 접근성이 좋았다',
          'The environment fit me well. It was close to home or easy to access.',
          '環境が合っていた。家の近く、またはアクセスが良かった。',
          '环境很合适。离家近或很方便。',
          '環境很合適。離家近或很方便。',
          'Môi trường hợp với tôi. Gần nhà hoặc rất dễ đến.',
          'Lingkungannya cocok. Dekat rumah atau mudah diakses.'
        ),
        score: 2,
      },
      {
        text: M(
          '같이 하는 사람이 있었다. 그 사람 때문에 갔다',
          'I had someone to work out with. I went because of them.',
          '一緒にやる人がいた。その人のおかげで行けた。',
          '有人一起练。是因为那个人我才去的。',
          '有人一起練。是因為那個人我才去的。',
          'Có người tập cùng. Tôi đi vì người đó.',
          'Ada orang latihan bersama. Saya pergi karena dia.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 12,
    question: M(
      '지금 나의 운동 상태를 솔직하게 고른다면?',
      'If you honestly describe your current workout state...',
      '今の自分の運動状態を正直に選ぶなら？',
      '如果诚实描述你现在的运动状态...',
      '如果誠實描述你現在的運動狀態...',
      'Nếu thành thật mô tả tình trạng tập luyện hiện tại của bạn...',
      'Jika jujur memilih kondisi olahraga Anda sekarang...'
    ),
    options: [
      {
        text: M(
          '하고는 있는데 들쑥날쑥하다. 꾸준하지 못한 게 아쉽다',
          'I do work out, but inconsistently. I wish I were more steady.',
          'やってはいるが、波がある。続けられないのがもどかしい。',
          '有在练，但不稳定。可惜不够坚持。',
          '有在練，但不穩定。可惜不夠堅持。',
          'Tôi vẫn tập nhưng không đều. Tiếc vì không kiên trì.',
          'Saya memang olahraga, tapi tidak konsisten. Sayang sekali belum rutin.'
        ),
        score: 0,
      },
      {
        text: M(
          '계획은 완벽한데 실행이 따라오지 않는다',
          'My plan is perfect, but execution does not follow.',
          '計画は完璧だが、実行が追いつかない。',
          '计划很完美，但执行跟不上。',
          '計畫很完美，但執行跟不上。',
          'Kế hoạch hoàn hảo nhưng thực thi không theo kịp.',
          'Rencananya sempurna, tapi eksekusinya tidak mengejar.'
        ),
        score: 1,
      },
      {
        text: M(
          '의욕이 없다. 시작 자체가 어렵다',
          'I lack motivation. Even starting is hard.',
          'やる気がない。始めること自体が難しい。',
          '没什么动力。连开始都很难。',
          '沒什麼動力。連開始都很難。',
          'Thiếu động lực. Ngay cả việc bắt đầu cũng khó.',
          'Motivasi saya kurang. Bahkan memulai saja sudah sulit.'
        ),
        score: 2,
      },
      {
        text: M(
          '혼자서는 진짜 안 된다. 운동 파트너가 필요하다',
          'I really cannot do it alone. I need a workout partner.',
          '一人では本当に無理。運動パートナーが必要。',
          '一个人真的不行。我需要运动伙伴。',
          '一個人真的不行。我需要運動夥伴。',
          'Một mình thật sự không được. Tôi cần bạn tập.',
          'Sendirian memang tidak bisa. Saya butuh partner latihan.'
        ),
        score: 3,
      },
    ],
  },
];

export const phase3ExercisePersistenceTypeResults: Phase3ExercisePersistenceTypeResult[] = [
  {
    type: 'Type1',
    emoji: '🔄',
    title: M(
      '시작은 하는데 꾸준함이 없는, 습관 형성 실패형',
      'Starts Strong but Cannot Stay Consistent — Habit Formation Failure Type',
      '始めるが続かない、習慣形成失敗型',
      '会开始但难坚持，习惯养成失败型',
      '會開始但難堅持，習慣養成失敗型',
      'Bắt đầu được nhưng không kiên trì — Kiểu thất bại hình thành thói quen',
      'Mulai tapi tidak konsisten — Tipe gagal membentuk kebiasaan'
    ),
    shortDescription: M(
      '"당신은 운동 자체가 싫은 게 아닙니다. 루틴이 깨지는 순간 재시작이 어려운 것입니다."',
      '"It is not that you dislike working out. Once your routine breaks, restarting becomes hard."',
      '「運動自体が嫌いなのではありません。ルーティンが崩れた瞬間、再開が難しくなるのです。」',
      '"你不是讨厌运动本身。而是节奏一断，就很难重新开始。"',
      '"你不是討厭運動本身。而是節奏一斷，就很難重新開始。"',
      '"Không phải bạn ghét tập luyện. Mà là khi thói quen đứt, rất khó quay lại."',
      '"Bukan olahraga yang Anda benci. Saat rutinitas rusak, memulai lagi jadi sulit."'
    ),
    description: M(
      '운동을 등록하면 초반엔 꽤 잘 나갑니다. 그런데 단 하루 빠지면 그게 끝이 됩니다. 루틴이 깨지는 순간 심리적 저항감이 생기고 "이미 망했어"라는 생각이 재시작을 막습니다. 의지력 문제가 아니라 습관 형성 구조의 문제입니다.',
      'When you sign up, you usually start off pretty well. But missing just one day can end everything. The moment your routine breaks, psychological resistance kicks in, and the thought "I already ruined it" blocks you from restarting. This is not a willpower problem — it is a habit structure problem.',
      '運動を登録すると、最初はかなり順調に進みます。しかしたった1日休むとそれで終わります。ルーティンが崩れた瞬間、心理的な抵抗が生まれ、「もう台無しだ」という考えが再開を妨げます。これは意志力の問題ではなく、習慣形成の構造の問題です。',
      '报名运动后，前期通常进展不错。但只要缺一天，一切就结束了。节奏一断，心理阻力就会出现，“已经搞砸了”的想法会阻止你重新开始。这不是意志力问题，而是习惯结构的问题。',
      '報名運動後，前期通常進展不錯。但只要缺一天，一切就結束了。節奏一斷，心理阻力就會出現，「已經搞砸了」的想法會阻止你重新開始。這不是意志力問題，而是習慣結構的問題。',
      'Khi đăng ký tập, giai đoạn đầu thường khá ổn. Nhưng chỉ cần nghỉ một ngày là coi như xong. Khi thói quen đứt, sự kháng cự tâm lý xuất hiện và suy nghĩ "mình đã hỏng rồi" khiến bạn không dám quay lại. Đây không phải vấn đề ý chí, mà là vấn đề cấu trúc thói quen.',
      'Saat mendaftar, awalnya biasanya berjalan cukup baik. Tapi cukup absen satu hari saja, semuanya selesai. Saat rutinitas rusak, resistensi psikologis muncul dan pikiran "sudah gagal" menghalangi Anda memulai lagi. Ini bukan masalah tekad, melainkan struktur kebiasaan.'
    ),
    obstacleType: M(
      '습관 형성 실패형 🔄',
      'Habit Formation Failure Type 🔄',
      '習慣形成失敗型 🔄',
      '习惯养成失败型 🔄',
      '習慣養成失敗型 🔄',
      'Kiểu thất bại hình thành thói quen 🔄',
      'Tipe gagal membentuk kebiasaan 🔄'
    ),
    obstacleKeywords: M(
      '루틴 단절·재시작 어려움·올인올아웃 사고',
      'Routine break · Hard to restart · All-or-nothing mindset',
      'ルーティン断絶·再開の難しさ·オールオアナッシング思考',
      '节奏中断·难以重启·全有或全无思维',
      '節奏中斷·難以重啟·全有或全無思維',
      'Đứt thói quen · Khó quay lại · Tư duy tất cả hoặc không',
      'Rutinitas putus · Sulit mulai lagi · Pola pikir all-or-nothing'
    ),
    quitMoment: M(
      '"어차피 이번 주는 망했어. 다음 달부터 다시 해야지"',
      '"This week is already ruined anyway. I will start again next month."',
      '「どうせ今週は台無しだ。来月からまたやろう」',
      '"反正这周已经毁了。下个月再开始吧。"',
      '"反正這週已經毀了。下個月再開始吧。"',
      '"Tuần này coi như hỏng rồi. Tháng sau tập lại vậy."',
      '"Minggu ini sudah gagal. Bulan depan mulai lagi deh."'
    ),
    overcomeStrategy: M(
      '• 완벽한 연속보다 빠진 다음 날 바로 복귀하는 것을 목표로 설정\n• "오늘 빠져도 내일 가면 된다"는 규칙을 미리 정해두기\n• 주 3회 목표라면 월수금이 아닌 어느 3일이든 채우는 유연한 방식\n• 운동 일지에 빠진 날도 기록하기. 빠진 날 다음 날 바로 간 것도 성공\n• 운동 시간을 10분으로 낮추더라도 가는 것 자체를 유지하기',
      '• Aim to return the very next day after a miss, rather than chasing perfect streaks\n• Set a rule in advance: "If I skip today, I go tomorrow"\n• For a 3-day weekly goal, fill any 3 days instead of locking into Mon-Wed-Fri\n• Log missed days too. Going the day after a miss still counts as success\n• Even if you cut workouts down to 10 minutes, keep showing up',
      '• 完璧な連続より、休んだ翌日すぐ復帰することを目標にする\n• 「今日休んでも明日行けばいい」というルールを事前に決める\n• 週3回なら月水金ではなく、どの3日でも達成する柔軟な方法\n• 運動日記に休んだ日も記録する。休んだ翌日に行けたのも成功\n• 運動時間を10分に減らしても、行くこと自体を続ける',
      '• 目标不是完美连续，而是缺练后第二天立刻回归\n• 提前定规则："今天不去，明天去就行"\n• 若目标是每周3次，不必固定一三五，任意3天完成即可\n• 运动日志也记录缺席日。缺席后第二天立刻去也算成功\n• 即使把训练缩短到10分钟，也要保持到场本身',
      '• 目標不是完美連續，而是缺練後第二天立刻回歸\n• 提前定規則：「今天不去，明天去就行」\n• 若目標是每週3次，不必固定一三五，任意3天完成即可\n• 運動日誌也記錄缺席日。缺席後第二天立刻去也算成功\n• 即使把訓練縮短到10分鐘，也要保持到場本身',
      '• Mục tiêu là quay lại ngay ngày hôm sau, không phải duy trì chuỗi hoàn hảo\n• Đặt quy tắc trước: "Hôm nay nghỉ thì mai đi"\n• Nếu mục tiêu 3 buổi/tuần, linh hoạt 3 ngày bất kỳ thay vì cố định thứ 2-4-6\n• Ghi cả ngày nghỉ vào nhật ký. Đi ngay ngày hôm sau cũng là thành công\n• Dù rút xuống còn 10 phút, vẫn giữ việc đi tập',
      '• Targetkan kembali keesokan hari setelah bolos, bukan streak sempurna\n• Tentukan aturan sebelumnya: "Kalau bolos hari ini, besok pergi"\n• Untuk target 3 kali seminggu, penuhi 3 hari apa saja, bukan Sen-Rab-Jum\n• Catat hari bolos juga. Pergi sehari setelah bolos tetap dihitung sukses\n• Meski latihan dipangkas jadi 10 menit, tetap jaga kebiasaan datang'
    ),
    todayTask: M(
      '오늘 10분이라도 운동하기. 완벽한 루틴보다 오늘 한 번이 더 중요합니다',
      'Work out for at least 10 minutes today. Showing up once today matters more than a perfect routine.',
      '今日は10分でも運動する。完璧なルーティンより、今日1回行くことが大切。',
      '今天至少运动10分钟。比起完美计划，今天去一次更重要。',
      '今天至少運動10分鐘。比起完美計畫，今天去一次更重要。',
      'Hôm nay tập ít nhất 10 phút. Đi một lần hôm nay quan trọng hơn lịch hoàn hảo.',
      'Olahraga minimal 10 menit hari ini. Datang sekali hari ini lebih penting daripada rutinitas sempurna.'
    ),
    shareSnippet: M(
      '운동 지속력 유형: 습관 형성 실패형 🔄 하루 빠지면 그게 끝인 유형... 어차피 이번 달 망했어 경험자 손 ✋ → 너는 어떤 운동 유형이야?',
      'Workout Persistence Type: Habit Formation Failure Type 🔄 One missed day and it is over... raise your hand if you have said "this month is ruined anyway" ✋ → What is your workout type?',
      '運動継続力タイプ：習慣形成失敗型 🔄 1日休むと終わりタイプ...「今月はもう台無し」経験者は手を上げて ✋ → あなたはどの運動タイプ？',
      '运动持续力类型：习惯养成失败型 🔄 缺一天就结束的类型... 说过“反正这个月毁了”的举手 ✋ → 你是什么运动类型？',
      '運動持續力類型：習慣養成失敗型 🔄 缺一天就結束的類型... 說過「反正這個月毀了」的舉手 ✋ → 你是什麼運動類型？',
      'Kiểu duy trì tập luyện: Thất bại hình thành thói quen 🔄 Nghỉ 1 ngày là xong... ai từng nghĩ "tháng này coi như hỏng" giơ tay ✋ → Bạn thuộc kiểu nào?',
      'Tipe konsistensi olahraga: Gagal membentuk kebiasaan 🔄 Bolos sehari langsung selesai... angkat tangan kalau pernah bilang "bulan ini sudah gagal" ✋ → Kamu tipe olahraga apa?'
    ),
  },
  {
    type: 'Type2',
    emoji: '📋',
    title: M(
      '계획은 완벽한데 실행이 없는, 완벽주의 기획형',
      'Perfect Plans, No Execution — Perfectionist Planner Type',
      '計画は完璧だが実行がない、完璧主義企画型',
      '计划完美却难执行，完美主义策划型',
      '計畫完美卻難執行，完美主義策劃型',
      'Kế hoạch hoàn hảo nhưng không thực thi — Kiểu lập kế hoạch cầu toàn',
      'Rencana sempurna tapi tidak dieksekusi — Tipe perencana perfeksionis'
    ),
    shortDescription: M(
      '"당신은 운동 계획을 짜는 것이 운동보다 오래 걸립니다."',
      '"You spend more time planning your workouts than actually doing them."',
      '「あなたは運動計画を立てる時間の方が、運動する時間より長いです。」',
      '"你制定运动计划的时间，比真正运动还长。"',
      '"你制定運動計畫的時間，比真正運動還長。"',
      '"Bạn dành nhiều thời gian lập kế hoạch tập luyện hơn là thực sự tập."',
      '"Anda menghabiskan lebih banyak waktu merencanakan olahraga daripada benar-benar berolahraga."'
    ),
    description: M(
      '월요일은 가슴·화요일은 등·수요일은 하체... 완벽한 스플릿 루틴을 설계하고, 운동 앱도 세팅하고, 보충제도 준비합니다. 그런데 막상 계획이 완벽하지 않다는 생각이 들면 시작 자체를 미루게 됩니다. 준비 과정이 완성되지 않으면 실행이 시작되지 않는 패턴입니다.',
      'Monday chest, Tuesday back, Wednesday legs... You design a perfect split routine, set up workout apps, and prepare supplements. But if the plan does not feel perfect, you delay starting altogether. If preparation is not complete, execution never begins.',
      '月曜は胸・火曜は背中・水曜は脚... 完璧なスプリットルーティンを設計し、運動アプリも設定し、サプリも準備します。しかし計画が完璧でないと感じると、開始自体を先延ばしにします。準備が完成しない限り、実行は始まらないパターンです。',
      '周一练胸、周二练背、周三练腿……你会设计完美的分化计划，设置运动App，准备补剂。但一旦觉得计划不够完美，就会推迟开始。准备没完成，执行就不会开始。',
      '週一練胸、週二練背、週三練腿……你會設計完美的分化計畫，設定運動App，準備補劑。但一旦覺得計畫不夠完美，就會推遲開始。準備沒完成，執行就不會開始。',
      'Thứ 2 ngực, thứ 3 lưng, thứ 4 chân... Bạn thiết kế lịch split hoàn hảo, cài app tập, chuẩn bị thực phẩm bổ sung. Nhưng nếu cảm thấy kế hoạch chưa hoàn hảo, bạn trì hoãn việc bắt đầu. Chuẩn bị chưa xong thì thực thi không bao giờ bắt đầu.',
      'Senin dada, Selasa punggung, Rabu kaki... Anda merancang split sempurna, menyiapkan aplikasi olahraga, dan menyiapkan suplemen. Tapi jika rencana terasa belum sempurna, Anda menunda mulai. Kalau persiapan belum selesai, eksekusi tidak pernah dimulai.'
    ),
    obstacleType: M(
      '완벽주의 기획형 📋',
      'Perfectionist Planner Type 📋',
      '完璧主義企画型 📋',
      '完美主义策划型 📋',
      '完美主義策劃型 📋',
      'Kiểu lập kế hoạch cầu toàn 📋',
      'Tipe perencana perfeksionis 📋'
    ),
    obstacleKeywords: M(
      '완벽주의·준비 과잉·실행 지연·기준 높음',
      'Perfectionism · Over-preparation · Delayed execution · High standards',
      '完璧主義·準備過多·実行の遅延·基準が高い',
      '完美主义·过度准备·执行延迟·标准过高',
      '完美主義·過度準備·執行延遲·標準過高',
      'Cầu toàn · Chuẩn bị quá mức · Trì hoãn thực thi · Tiêu chuẩn cao',
      'Perfeksionisme · Persiapan berlebihan · Eksekusi tertunda · Standar tinggi'
    ),
    quitMoment: M(
      '"오늘은 컨디션이 100%가 아니니까 내일 제대로 하자"',
      '"I am not at 100% today, so I will do it properly tomorrow."',
      '「今日はコンディションが100%じゃないから、明日ちゃんとやろう」',
      '"今天状态不是100%，明天再好好练吧。"',
      '"今天狀態不是100%，明天再好好練吧。"',
      '"Hôm nay chưa đạt 100%, mai tập cho đàng hoàng vậy."',
      '"Hari ini belum 100%, besok latihan yang beneran deh."'
    ),
    overcomeStrategy: M(
      '• 루틴 설계에 최대 10분 이상 투자하지 않기\n• "완벽한 운동 한 번"보다 "불완전해도 매일"이 훨씬 효과적임을 인식하기\n• 부위 분리 없이 전신 운동 3가지만 반복하는 초단순 루틴 시작\n• 컨디션이 70%여도 갈 수 있다는 규칙 설정\n• 운동 앱보다 종이 달력에 동그라미만 그리는 심플한 기록법',
      '• Do not spend more than 10 minutes designing a routine\n• Recognize that "imperfect but daily" beats "one perfect workout"\n• Start with an ultra-simple routine: repeat just 3 full-body moves\n• Set a rule that 70% condition is still good enough to go\n• Use a paper calendar with circles instead of complex workout apps',
      '• ルーティン設計に10分以上使わない\n• 「完璧な運動1回」より「不完全でも毎日」の方がはるかに効果的だと認識する\n• 部位分けなしで全身運動3つだけを繰り返す超シンプルルーティンから始める\n• コンディション70%でも行けるというルールを設定する\n• 運動アプリより紙のカレンダーに丸をつけるだけのシンプル記録法',
      '• 设计计划最多不超过10分钟\n• 认识到“不完美但每天做”远比“一次完美训练”更有效\n• 从超简单计划开始：不分部位，只重复3个全身动作\n• 定规则：状态70%也可以去\n• 用纸质日历画圈记录，比运动App更简单',
      '• 設計計畫最多不超過10分鐘\n• 認識到「不完美但每天做」遠比「一次完美訓練」更有效\n• 從超簡單計畫開始：不分部位，只重複3個全身動作\n• 定規則：狀態70%也可以去\n• 用紙質日曆畫圈記錄，比運動App更簡單',
      '• Không dành quá 10 phút để thiết kế lịch tập\n• Nhận ra "không hoàn hảo nhưng mỗi ngày" hiệu quả hơn "một buổi hoàn hảo"\n• Bắt đầu với lịch siêu đơn giản: lặp 3 bài toàn thân, không chia nhóm cơ\n• Đặt quy tắc: thể trạng 70% vẫn đi tập được\n• Ghi chép bằng lịch giấy đánh dấu tròn thay vì app phức tạp',
      '• Jangan habiskan lebih dari 10 menit merancang rutinitas\n• Sadari bahwa "tidak sempurna tapi tiap hari" jauh lebih efektif daripada "satu latihan sempurna"\n• Mulai rutinitas super sederhana: ulang 3 gerakan full body tanpa split\n• Buat aturan: kondisi 70% tetap cukup untuk pergi\n• Catat dengan lingkaran di kalender kertas, bukan aplikasi rumit'
    ),
    todayTask: M(
      '5분 안에 할 운동 딱 3가지만 정하고 지금 시작하기. 완벽한 계획은 나중에',
      'Pick just 3 exercises you can do in 5 minutes and start now. Perfect plans can wait.',
      '5分以内でできる運動を3つだけ決めて、今すぐ始める。完璧な計画は後回し。',
      '5分钟内能完成的3个动作现在就定好并开始。完美计划以后再说。',
      '5分鐘內能完成的3個動作現在就定好並開始。完美計畫以後再說。',
      'Chọn đúng 3 bài tập làm được trong 5 phút và bắt đầu ngay. Kế hoạch hoàn hảo để sau.',
      'Tentukan 3 latihan yang bisa dilakukan dalam 5 menit dan mulai sekarang. Rencana sempurna nanti saja.'
    ),
    shareSnippet: M(
      '운동 지속력 유형: 완벽주의 기획형 📋 운동 루틴 설계하다가 정작 운동 못 하는 유형 ㅋㅋ 계획은 완벽한데 실행이 없는 사람들 → 너는 어떤 운동 유형이야?',
      'Workout Persistence Type: Perfectionist Planner Type 📋 The type that plans the routine but never actually works out 😂 Perfect plans, zero execution → What is your workout type?',
      '運動継続力タイプ：完璧主義企画型 📋 ルーティン設計に夢中で運動できないタイプ ㅋㅋ 計画は完璧、実行ゼロの人 → あなたはどの運動タイプ？',
      '运动持续力类型：完美主义策划型 📋 忙着设计计划却练不上的类型 ㅋㅋ 计划完美、执行为零的人 → 你是什么运动类型？',
      '運動持續力類型：完美主義策劃型 📋 忙著設計計畫卻練不上的類型 ㅋㅋ 計畫完美、執行為零的人 → 你是什麼運動類型？',
      'Kiểu duy trì tập luyện: Lập kế hoạch cầu toàn 📋 Kiểu thiết kế lịch tập mãi mà không tập được ㅋㅋ Kế hoạch hoàn hảo, thực thi bằng không → Bạn thuộc kiểu nào?',
      'Tipe konsistensi olahraga: Perencana perfeksionis 📋 Tipe yang sibuk merancang rutinitas tapi tidak jadi olahraga ㅋㅋ Rencana sempurna, eksekusi nol → Kamu tipe olahraga apa?'
    ),
  },
  {
    type: 'Type3',
    emoji: '🛋️',
    title: M(
      '귀찮음이 최대 적인, 진입 장벽 높음형',
      'Laziness Is the Biggest Enemy — High Entry Barrier Type',
      '面倒さが最大の敵、参入障壁が高い型',
      '麻烦是最大敌人，进入门槛高型',
      '麻煩是最大敵人，進入門檻高型',
      'Lười là kẻ thù lớn nhất — Kiểu rào cản bước vào cao',
      'Malas jadi musuh terbesar — Tipe hambatan masuk tinggi'
    ),
    shortDescription: M(
      '"당신에게 가장 힘든 운동은 헬스장 문을 여는 것입니다."',
      '"For you, the hardest part of working out is opening the gym door."',
      '「あなたにとって最も大変な運動は、ジムのドアを開けることです。」',
      '"对你来说，最难的运动是推开健身房的大门。"',
      '"對你來說，最難的運動是推開健身房的大門。"',
      '"Với bạn, phần khó nhất của tập luyện là mở cửa phòng gym."',
      '"Bagi Anda, bagian tersulit dari olahraga adalah membuka pintu gym."'
    ),
    description: M(
      '운동 자체는 싫지 않습니다. 막상 가면 괜찮고 끝나면 뿌듯합니다. 문제는 소파에서 일어나서 운동복 챙기고 이동하는 그 과정이 너무 귀찮습니다. 피곤한 날, 날씨가 안 좋은 날, 기분이 별로인 날에는 진입 장벽이 더 높아집니다.',
      'You do not hate working out itself. Once you go, it is fine, and you feel proud afterward. The problem is getting off the couch, changing clothes, and getting there — that process feels too annoying. On tired days, bad weather, or low moods, the entry barrier gets even higher.',
      '運動自体は嫌いではありません。行ってしまえば大丈夫で、終わると達成感があります。問題はソファから立ち上がり、運動着を準備し、移動する過程があまりにも面倒なことです。疲れた日、天気が悪い日、気分が乗らない日には参入障壁がさらに高くなります。',
      '你并不讨厌运动本身。真正去了就还好，结束后也很有成就感。问题是从沙发起身、换衣服、再出门的过程太麻烦。累的时候、天气不好、心情一般时，进入门槛会更高。',
      '你並不討厭運動本身。真正去了就還好，結束後也很有成就感。問題是從沙發起身、換衣服、再出門的過程太麻煩。累的時候、天氣不好、心情一般時，進入門檻會更高。',
      'Bạn không ghét bản thân việc tập luyện. Đến nơi rồi thì ổn, xong còn thấy tự hào. Vấn đề là quá trình rời sofa, chuẩn bị đồ và di chuyển quá phiền. Ngày mệt, thời tiết xấu hoặc tâm trạng kém thì rào cản càng cao hơn.',
      'Anda tidak membenci olahraga itu sendiri. Setelah pergi, rasanya baik-baik saja, dan setelah selesai Anda bangga. Masalahnya proses bangun dari sofa, siapkan pakaian, dan pergi terlalu merepotkan. Saat lelah, cuaca buruk, atau mood jelek, hambatan masuk makin tinggi.'
    ),
    obstacleType: M(
      '진입 장벽 높음형 🛋️',
      'High Entry Barrier Type 🛋️',
      '参入障壁が高い型 🛋️',
      '进入门槛高型 🛋️',
      '進入門檻高型 🛋️',
      'Kiểu rào cản bước vào cao 🛋️',
      'Tipe hambatan masuk tinggi 🛋️'
    ),
    obstacleKeywords: M(
      '귀찮음·진입 장벽·이동 부담·컨디션 의존',
      'Annoyance · Entry barrier · Travel burden · Condition-dependent',
      '面倒さ·参入障壁·移動の負担·コンディション依存',
      '麻烦·进入门槛·出行负担·依赖状态',
      '麻煩·進入門檻·出行負擔·依賴狀態',
      'Phiền · Rào cản bước vào · Gánh nặng di chuyển · Phụ thuộc thể trạng',
      'Merepotkan · Hambatan masuk · Beban perjalanan · Bergantung kondisi'
    ),
    quitMoment: M(
      '"일단 소파에 앉았는데... 오늘은 쉬어야겠다"',
      '"I already sat on the couch... I guess I should rest today."',
      '「とりあえずソファに座っちゃった... 今日は休もう」',
      '"都已经坐上沙发了……今天还是休息吧。"',
      '"都已經坐上沙發了……今天還是休息吧。"',
      '"Đã ngồi xuống sofa rồi... hôm nay nghỉ vậy."',
      '"Sudah duduk di sofa... kayanya hari ini istirahat deh."'
    ),
    overcomeStrategy: M(
      '• 집에서 가장 가까운 헬스장으로 변경하기. 이동 시간이 줄면 진입 장벽이 절반으로 줄어듦\n• 퇴근 직후 집에 들어가지 말고 헬스장에 먼저 들르는 동선 설계\n• 운동복을 전날 밤에 미리 꺼내두기. 준비 단계를 최소화하는 것이 핵심\n• 집에서 할 수 있는 홈트레이닝을 대안으로 준비해두기\n• 진입 장벽 낮추기: 헬스장까지만 가면 성공이라는 마인드 설정',
      '• Switch to the gym closest to home. Less travel cuts the entry barrier in half\n• Do not go home after work — stop by the gym first\n• Lay out workout clothes the night before. Minimizing prep is key\n• Keep home workouts ready as a backup option\n• Lower the barrier: just getting to the gym counts as success',
      '• 家から最も近いジムに変更する。移動時間が減れば参入障壁は半分になる\n• 退勤後すぐ家に入らず、先にジムに寄る動線を設計する\n• 運動着を前夜に準備しておく。準備工程を最小化することが核心\n• 自宅でできるホームトレを代替として用意する\n• 参入障壁を下げる：ジムまで行けたら成功というマインドセット',
      '• 换成离家里最近的健身房。减少通勤时间，进入门槛会减半\n• 下班后先别回家，路线设计为先去健身房\n• 前一晚就把运动服准备好。关键是尽量减少准备步骤\n• 把居家训练作为备选方案准备好\n• 降低门槛：只要到了健身房就算成功',
      '• 換成離家裡最近的健身房。減少通勤時間，進入門檻會減半\n• 下班後先別回家，路線設計為先去健身房\n• 前一晚就把運動服準備好。關鍵是盡量減少準備步驟\n• 把居家訓練作為備選方案準備好\n• 降低門檻：只要到了健身房就算成功',
      '• Chuyển sang phòng gym gần nhà nhất. Giảm thời gian di chuyển, rào cản giảm một nửa\n• Tan ca đừng về nhà trước — ghé gym trước\n• Chuẩn bị đồ tập từ tối hôm trước. Tối thiểu hóa bước chuẩn bị là then chốt\n• Chuẩn bị sẵn tập tại nhà làm phương án dự phòng\n• Hạ rào cản: chỉ cần đến gym là thành công',
      '• Pindah ke gym terdekat dari rumah. Waktu perjalanan lebih pendek, hambatan masuk turun setengah\n• Setelah kerja jangan pulang dulu — singgah gym dulu\n• Siapkan pakaian olahraga sejak malam sebelumnya. Minimalkan persiapan adalah kuncinya\n• Siapkan home workout sebagai alternatif\n• Turunkan hambatan: cukup sampai ke gym sudah dianggap sukses'
    ),
    todayTask: M(
      '지금 바로 운동복을 꺼내놓기. 내일 아침 또는 퇴근 후 진입 장벽이 낮아집니다',
      'Lay out your workout clothes right now. Tomorrow morning or after work, the entry barrier will be lower.',
      '今すぐ運動着を準備しておく。明日の朝か退勤後、参入障壁が下がる。',
      '现在就把运动服拿出来放好。明天早上或下班后，进入门槛会更低。',
      '現在就把運動服拿出來放好。明天早上或下班後，進入門檻會更低。',
      'Lấy đồ tập ra ngay bây giờ. Sáng mai hoặc sau giờ làm, rào cản sẽ thấp hơn.',
      'Siapkan pakaian olahraga sekarang juga. Besok pagi atau setelah kerja, hambatan masuk jadi lebih rendah.'
    ),
    shareSnippet: M(
      '운동 지속력 유형: 진입 장벽 높음형 🛋️ 막상 가면 괜찮은데 소파에 앉으면 끝인 유형... 헬스장 문 여는 게 제일 힘든 사람들 공감 → 너는 어떤 운동 유형이야?',
      'Workout Persistence Type: High Entry Barrier Type 🛋️ Fine once you go, but over once you sit on the couch... if opening the gym door is the hardest part, you will relate → What is your workout type?',
      '運動継続力タイプ：参入障壁が高い型 🛋️ 行けば大丈夫なのにソファに座ると終わりタイプ... ジムのドアを開けるのが一番大変な人、共感 → あなたはどの運動タイプ？',
      '运动持续力类型：进入门槛高型 🛋️ 去了就还好，但一坐上沙发就完了的类型……推健身房门最难的人共鸣 → 你是什么运动类型？',
      '運動持續力類型：進入門檻高型 🛋️ 去了就還好，但一坐上沙發就完了的類型……推健身房門最難的人共鳴 → 你是什麼運動類型？',
      'Kiểu duy trì tập luyện: Rào cản bước vào cao 🛋️ Đến rồi thì ổn nhưng ngồi sofa là xong... mở cửa gym khó nhất thì giơ tay → Bạn thuộc kiểu nào?',
      'Tipe konsistensi olahraga: Hambatan masuk tinggi 🛋️ Kalau sudah pergi oke, tapi duduk di sofa langsung selesai... kalau buka pintu gym paling susah, relate → Kamu tipe olahraga apa?'
    ),
  },
  {
    type: 'Type4',
    emoji: '📉',
    title: M(
      '결과가 안 보이면 포기하는, 동기 소진 가시성형',
      'Quits When Results Do Not Show — Motivation Burnout Visibility Type',
      '結果が見えないと諦める、動機消耗・可視性型',
      '看不到结果就放弃，动力耗尽可见性型',
      '看不到結果就放棄，動力耗盡可見性型',
      'Không thấy kết quả là bỏ cuộc — Kiểu cạn kiệt động lực vì thiếu thấy được',
      'Menyerah kalau hasil tidak terlihat — Tipe motivasi habis karena kurang visibilitas'
    ),
    shortDescription: M(
      '"당신은 노력하고 있는데 결과가 안 보이는 것이 가장 힘듭니다."',
      '"What hurts most is putting in effort without seeing results."',
      '「努力しているのに結果が見えないことが、最もつらいのです。」',
      '"最难受的是已经在努力，却看不到结果。"',
      '"最難受的是已經在努力，卻看不到結果。"',
      '"Điều khó nhất là bạn đang cố gắng mà không thấy kết quả."',
      '"Yang paling berat adalah berusaha tapi hasilnya tidak terlihat."'
    ),
    description: M(
      '열심히 2~3주 했는데 몸무게가 안 줄거나 근육이 안 붙으면 허탈해집니다. "이렇게 해도 안 되는데 왜 해야 해?"라는 생각이 동기를 급격히 낮춥니다. 운동의 효과는 사실 3개월 이상 지나야 눈에 보이기 시작하지만, 그 사이 시각적 변화가 없으면 포기하는 패턴이 반복됩니다.',
      'After 2-3 weeks of hard work, if your weight does not drop or muscles do not show, you feel empty. The thought "If this still does not work, why bother?" quickly drains your motivation. Workout results often take more than 3 months to become visible, but without visual change in between, you keep quitting.',
      '2〜3週間頑張っても体重が減らない、筋肉がつかないと虚しくなります。「こうしてもダメなら、なぜやるの？」という考えがモチベーションを急激に下げます。運動の効果は実際3か月以上経ってから目に見え始めますが、その間に視覚的変化がなければ諦めるパターンが繰り返されます。',
      '认真练了2-3周，体重没降、肌肉没长，就会感到空落落的。“这样都没用，为什么还要练？”这种想法会迅速拉低动力。运动效果往往要3个月以上才开始显现，但中间看不到变化就会反复放弃。',
      '認真練了2-3週，體重沒降、肌肉沒長，就會感到空落落的。「這樣都沒用，為什麼還要練？」這種想法會迅速拉低動力。運動效果往往要3個月以上才開始顯現，但中間看不到變化就會反覆放棄。',
      'Cố gắng 2-3 tuần mà cân không giảm, cơ không lên thì bạn thấy hụt hẫng. Suy nghĩ "cố vậy cũng không được thì tập làm gì?" làm động lực tụt mạnh. Hiệu quả tập luyện thường phải hơn 3 tháng mới thấy, nhưng không có thay đổi trực quan giữa chừng thì bạn lại bỏ cuộc.',
      'Setelah 2-3 minggu berusaha, kalau berat tidak turun atau otot tidak terlihat, Anda merasa hampa. Pikiran "kalau begini saja tidak ada hasil, ngapain?" cepat menurunkan motivasi. Efek olahraga biasanya baru terlihat setelah 3 bulan, tapi tanpa perubahan visual di tengah jalan, pola menyerah terus berulang.'
    ),
    obstacleType: M(
      '동기 소진 가시성형 📉',
      'Motivation Burnout Visibility Type 📉',
      '動機消耗・可視性型 📉',
      '动力耗尽可见性型 📉',
      '動力耗盡可見性型 📉',
      'Kiểu cạn kiệt động lực vì thiếu thấy được 📉',
      'Tipe motivasi habis karena kurang visibilitas 📉'
    ),
    obstacleKeywords: M(
      '결과 의존·단기 성과 추구·가시성 부족·동기 소진',
      'Result-dependent · Short-term gains · Low visibility · Motivation burnout',
      '結果依存·短期成果追求·可視性不足·動機消耗',
      '依赖结果·追求短期成效·缺乏可见性·动力耗尽',
      '依賴結果·追求短期成效·缺乏可見性·動力耗盡',
      'Phụ thuộc kết quả · Theo đuổi thành quả ngắn hạn · Thiếu thấy được · Cạn kiệt động lực',
      'Bergantung hasil · Mengejar progres jangka pendek · Kurang visibilitas · Motivasi habis'
    ),
    quitMoment: M(
      '"3주 했는데 몸이 하나도 안 변했어. 이거 효과 없는 거 아냐?"',
      '"I did it for 3 weeks and my body did not change at all. Maybe this does not work?"',
      '「3週間やったのに体が全然変わらない。これ効果ないんじゃない？」',
      '"练了3周，身体一点变化都没有。这不会没效果吧？"',
      '"練了3週，身體一點變化都沒有。這不會沒效果吧？"',
      '"Tập 3 tuần mà cơ thể chẳng đổi gì. Chắc không hiệu quả đâu?"',
      '"Sudah 3 minggu tapi tubuh tidak berubah sama sekali. Jangan-jangan ini nggak efektif?"'
    ),
    overcomeStrategy: M(
      '• 몸무게·체형보다 측정 가능한 성과 지표로 전환하기. 운동 횟수·세트 수·보행 속도 등\n• 주간 성과 대신 월간 성과로 체크 주기 바꾸기\n• 운동 시작 전후 사진을 찍어두기. 한 달 뒤 비교하면 변화가 보임\n• 체중 대신 체성분 측정기로 근육량 변화 확인하기\n• 단기 목표를 체형이 아닌 행동으로 설정하기. "이번 달 16번 가기"',
      '• Shift from weight and body shape to measurable performance metrics: workout count, sets, walking speed, etc.\n• Check monthly progress instead of weekly\n• Take before-and-after photos. Compare after a month to see change\n• Track muscle mass with a body composition scale instead of weight alone\n• Set short-term goals around behavior, not body shape: "Go 16 times this month"',
      '• 体重・体型より測定可能な成果指標に切り替える。運動回数・セット数・歩行速度など\n• 週間成果ではなく月間成果でチェック周期を変える\n• 運動前後の写真を撮っておく。1か月後に比較すると変化が見える\n• 体重ではなく体組成計で筋肉量の変化を確認する\n• 短期目標を体型ではなく行動で設定する。「今月16回行く」',
      '• 从体重和体型转向可量化的表现指标：训练次数、组数、步行速度等\n• 把检查周期从每周改成每月\n• 训练前后拍照留存。一个月后对比就能看到变化\n• 用体脂秤看肌肉量变化，而不只看体重\n• 短期目标设为行为而非体型："这个月去16次"',
      '• 從體重和體型轉向可量化的表現指標：訓練次數、組數、步行速度等\n• 把檢查週期從每週改成每月\n• 訓練前後拍照留存。一個月後對比就能看到變化\n• 用體脂秤看肌肉量變化，而不只看體重\n• 短期目標設為行為而非體型：「這個月去16次」',
      '• Chuyển từ cân nặng/hình thể sang chỉ số đo được: số buổi tập, số set, tốc độ đi bộ...\n• Đổi chu kỳ kiểm tra từ tuần sang tháng\n• Chụp ảnh trước và sau tập. So sánh sau một tháng sẽ thấy thay đổi\n• Dùng máy đo thành phần cơ thể để theo dõi khối cơ thay vì chỉ cân nặng\n• Đặt mục tiêu ngắn hạn theo hành vi, không phải hình thể: "Đi tập 16 lần tháng này"',
      '• Alihkan fokus dari berat dan bentuk tubuh ke metrik terukur: jumlah latihan, set, kecepatan jalan, dll.\n• Ubah siklus cek dari mingguan ke bulanan\n• Ambil foto sebelum dan sesudah latihan. Bandingkan sebulan kemudian\n• Pantau massa otot dengan timbangan komposisi tubuh, bukan berat saja\n• Buat target jangka pendek soal perilaku, bukan bentuk tubuh: "Pergi 16 kali bulan ini"'
    ),
    todayTask: M(
      '오늘 운동 전 사진 한 장 찍어두기. 한 달 뒤 비교 자료가 됩니다',
      'Take one photo before today\'s workout. It will be your comparison data in a month.',
      '今日の運動前に写真を1枚撮っておく。1か月後の比較資料になる。',
      '今天训练前拍一张照片。一个月后就是对比资料。',
      '今天訓練前拍一張照片。一個月後就是對比資料。',
      'Chụp một tấm ảnh trước buổi tập hôm nay. Một tháng sau sẽ là tư liệu so sánh.',
      'Ambil satu foto sebelum latihan hari ini. Sebulan lagi jadi bahan perbandingan.'
    ),
    shareSnippet: M(
      '운동 지속력 유형: 동기 소진 가시성형 📉 3주 했는데 몸이 안 변하면 포기하는 유형... 단기 성과 없으면 동기 사라지는 사람들 → 너는 어떤 운동 유형이야?',
      'Workout Persistence Type: Motivation Burnout Visibility Type 📉 The type that quits if the body does not change after 3 weeks... if no short-term results, motivation disappears → What is your workout type?',
      '運動継続力タイプ：動機消耗・可視性型 📉 3週間やっても体が変わらないと諦めるタイプ... 短期成果がないとモチベが消える人 → あなたはどの運動タイプ？',
      '运动持续力类型：动力耗尽可见性型 📉 练3周身体没变化就放弃的类型……没有短期成果动力就消失的人 → 你是什么运动类型？',
      '運動持續力類型：動力耗盡可見性型 📉 練3週身體沒變化就放棄的類型……沒有短期成果動力就消失的人 → 你是什麼運動類型？',
      'Kiểu duy trì tập luyện: Cạn kiệt động lực vì thiếu thấy được 📉 Tập 3 tuần mà cơ thể không đổi là bỏ cuộc... không có thành quả ngắn hạn là hết động lực → Bạn thuộc kiểu nào?',
      'Tipe konsistensi olahraga: Motivasi habis karena kurang visibilitas 📉 Tipe yang menyerah kalau tubuh tidak berubah setelah 3 minggu... tanpa hasil jangka pendek motivasi hilang → Kamu tipe olahraga apa?'
    ),
  },
  {
    type: 'Type5',
    emoji: '👥',
    title: M(
      '혼자서는 절대 안 되는, 사회적 동기 의존형',
      'Cannot Do It Alone — Social Motivation Dependent Type',
      '一人では絶対無理、社会的動機依存型',
      '一个人绝对不行，社会动力依赖型',
      '一個人絕對不行，社會動力依賴型',
      'Một mình tuyệt đối không được — Kiểu phụ thuộc động lực xã hội',
      'Tidak bisa sendirian — Tipe bergantung motivasi sosial'
    ),
    shortDescription: M(
      '"당신에게 운동 파트너는 선택이 아니라 필수입니다."',
      '"For you, a workout partner is not optional — it is essential."',
      '「あなたにとって運動パートナーは選択ではなく、必須です。」',
      '"对你来说，运动伙伴不是可选项，而是必需品。"',
      '"對你來說，運動夥伴不是可選項，而是必需品。"',
      '"Với bạn, bạn tập không phải lựa chọn mà là điều bắt buộc."',
      '"Bagi Anda, partner latihan bukan pilihan — itu kebutuhan."'
    ),
    description: M(
      '운동 파트너가 있을 때는 놀랍도록 꾸준합니다. 그런데 파트너가 그만두거나 혼자 가야 하는 상황이 되면 출석률이 급격히 떨어집니다. PT를 받을 때는 잘 나가다가 PT가 끝나면 같이 끝납니다. 타인의 존재가 운동 동기의 핵심 요소인 타입입니다.',
      'With a workout partner, you are surprisingly consistent. But when your partner quits or you have to go alone, attendance drops sharply. You do well during personal training, then stop when PT ends. Other people\'s presence is the core of your workout motivation.',
      '運動パートナーがいるときは驚くほど続けられます。しかしパートナーがやめたり、一人で行かなければならない状況になると出席率が急激に下がります。PTを受けている間は順調ですが、PTが終わると一緒に終わります。他者の存在が運動モチベーションの核心要素であるタイプです。',
      '有运动伙伴时，你会惊人地坚持。但伙伴退出或必须一个人去时，出勤率会急剧下降。上私教时练得很好，私教一结束你也一起结束。他人的存在是你运动动力的核心。',
      '有運動夥伴時，你會驚人地堅持。但夥伴退出或必須一個人去時，出勤率會急劇下降。上私教時練得很好，私教一結束你也一起結束。他人的存在是你運動動力的核心。',
      'Có bạn tập thì bạn kiên trì đáng kinh ngạc. Nhưng bạn bỏ cuộc hoặc phải đi một mình thì tần suất đi tập tụt mạnh. Khi có PT thì ổn, PT kết thúc là bạn cũng dừng theo. Sự hiện diện của người khác là yếu tố cốt lõi của động lực tập luyện.',
      'Dengan partner latihan, Anda konsisten luar biasa. Tapi kalau partner berhenti atau harus pergi sendiri, kehadiran turun drastis. Saat PT, lancar; saat PT selesai, Anda ikut berhenti. Kehadiran orang lain adalah inti motivasi olahraga Anda.'
    ),
    obstacleType: M(
      '사회적 동기 의존형 👥',
      'Social Motivation Dependent Type 👥',
      '社会的動機依存型 👥',
      '社会动力依赖型 👥',
      '社會動力依賴型 👥',
      'Kiểu phụ thuộc động lực xã hội 👥',
      'Tipe bergantung motivasi sosial 👥'
    ),
    obstacleKeywords: M(
      '파트너 의존·사회적 동기·혼자 어려움·환경 의존',
      'Partner-dependent · Social motivation · Hard alone · Environment-dependent',
      'パートナー依存·社会的動機·一人は難しい·環境依存',
      '依赖伙伴·社会动力·独自困难·依赖环境',
      '依賴夥伴·社會動力·獨自困難·依賴環境',
      'Phụ thuộc bạn tập · Động lực xã hội · Khó khi một mình · Phụ thuộc môi trường',
      'Bergantung partner · Motivasi sosial · Sulit sendirian · Bergantung lingkungan'
    ),
    quitMoment: M(
      '"파트너가 오늘 못 간다고 해서 나도 걍 쉬었다"',
      '"My partner could not go today, so I just skipped too."',
      '「パートナーが今日行けないと言ったから、私も休んだ」',
      '"伙伴今天说去不了，我也就顺便休息了。"',
      '"夥伴今天說去不了，我也就順便休息了。"',
      '"Bạn tập hôm nay không đi được nên tôi cũng nghỉ luôn."',
      '"Partner bilang hari ini nggak bisa, jadi saya ikut istirahat juga."'
    ),
    overcomeStrategy: M(
      '• 운동 파트너를 한 명에서 두 명 이상으로 늘리기. 한 명이 빠져도 대체 가능\n• 온라인 운동 커뮤니티·챌린지 참가하기. 인스타 운동 인증 커뮤니티도 효과적\n• 그룹 운동 클래스 등록하기. 요가·크로스핏·복싱 등 집단 환경이 동기를 높임\n• PT 종료 전에 다음 단계 루틴을 미리 설계해두기\n• 운동 기록을 SNS에 공유하기. 팔로워가 사회적 파트너 역할을 함',
      '• Expand from one workout partner to two or more so someone can always cover\n• Join online workout communities and challenges. Instagram check-in groups work too\n• Sign up for group classes. Yoga, CrossFit, boxing, and group settings boost motivation\n• Plan your next routine before PT ends\n• Share workout logs on social media. Followers can act as social partners',
      '• 運動パートナーを1人から2人以上に増やす。1人が欠けても代替可能\n• オンライン運動コミュニティ・チャレンジに参加する。インスタの運動認証コミュニティも効果的\n• グループ運動クラスに登録する。ヨガ・クロスフィット・ボクシングなど集団環境が動機を高める\n• PT終了前に次のステップのルーティンを事前に設計する\n• 運動記録をSNSで共有する。フォロワーが社会的パートナーの役割を果たす',
      '• 把运动伙伴从1个增加到2个以上。有人缺席也能替补\n• 参加线上运动社区和挑战。Instagram运动打卡社区也有效\n• 报名团体课程。瑜伽、CrossFit、拳击等集体环境能提升动力\n• 在私教结束前提前设计下一阶段计划\n• 把运动记录分享到社交媒体。粉丝也能充当社会伙伴',
      '• 把運動夥伴從1個增加到2個以上。有人缺席也能替補\n• 參加線上運動社群和挑戰。Instagram運動打卡社群也有效\n• 報名團體課程。瑜伽、CrossFit、拳擊等集體環境能提升動力\n• 在私教結束前提前設計下一階段計畫\n• 把運動記錄分享到社群媒體。粉絲也能充當社會夥伴',
      '• Tăng từ 1 bạn tập lên 2 người trở lên. Một người vắng vẫn có người thay\n• Tham gia cộng đồng/challenge tập luyện online. Cộng đồng check-in trên Instagram cũng hiệu quả\n• Đăng ký lớp tập nhóm. Yoga, CrossFit, boxing... môi trường tập chung tăng động lực\n• Thiết kế lịch tập giai đoạn tiếp theo trước khi PT kết thúc\n• Chia sẻ nhật ký tập trên mạng xã hội. Follower có thể đóng vai trò bạn tập xã hội',
      '• Tambah partner latihan dari satu menjadi dua orang atau lebih\n• Ikut komunitas olahraga online dan challenge. Komunitas check-in Instagram juga efektif\n• Daftar kelas grup. Yoga, CrossFit, boxing, dan lingkungan kelompok meningkatkan motivasi\n• Rancang rutinitas tahap berikutnya sebelum PT selesai\n• Bagikan catatan latihan di media sosial. Follower bisa jadi partner sosial'
    ),
    todayTask: M(
      '운동 인증 오픈 채팅방이나 커뮤니티 하나 가입하기. 온라인 파트너가 생깁니다',
      'Join one open workout check-in chat or community. You will gain an online partner.',
      '運動認証オープンチャットかコミュニティに1つ参加する。オンラインパートナーができる。',
      '加入一个运动打卡开放群或社区。你会有线上伙伴。',
      '加入一個運動打卡開放群或社群。你會有線上夥伴。',
      'Tham gia một nhóm chat hoặc cộng đồng check-in tập luyện. Bạn sẽ có bạn tập online.',
      'Gabung satu grup chat atau komunitas check-in olahraga. Anda akan punya partner online.'
    ),
    shareSnippet: M(
      '운동 지속력 유형: 사회적 동기 의존형 👥 파트너 없으면 운동도 없는 유형... PT 끝나면 같이 끝난 경험자 손 ✋ → 너는 어떤 운동 유형이야?',
      'Workout Persistence Type: Social Motivation Dependent Type 👥 No partner, no workout... raise your hand if PT ending meant you stopped too ✋ → What is your workout type?',
      '運動継続力タイプ：社会的動機依存型 👥 パートナーがいないと運動もないタイプ... PT終了と同時に終わった経験者は手を上げて ✋ → あなたはどの運動タイプ？',
      '运动持续力类型：社会动力依赖型 👥 没有伙伴就没有运动的类型……私教结束你也一起结束，举手 ✋ → 你是什么运动类型？',
      '運動持續力類型：社會動力依賴型 👥 沒有夥伴就沒有運動的類型……私教結束你也一起結束，舉手 ✋ → 你是什麼運動類型？',
      'Kiểu duy trì tập luyện: Phụ thuộc động lực xã hội 👥 Không có bạn tập là không tập... ai từng dừng luôn khi PT kết thúc giơ tay ✋ → Bạn thuộc kiểu nào?',
      'Tipe konsistensi olahraga: Bergantung motivasi sosial 👥 Tanpa partner, tidak ada olahraga... angkat tangan kalau PT selesai, Anda ikut berhenti ✋ → Kamu tipe olahraga apa?'
    ),
  },
  {
    type: 'Type6',
    emoji: '💤',
    title: M(
      '시작 자체가 안 되는, 만성 의욕 부재형',
      'Cannot Even Start — Chronic Low Motivation Type',
      '始めること自体ができない、慢性やる気不足型',
      '连开始都很难，慢性动力缺失型',
      '連開始都很難，慢性動力缺失型',
      'Ngay cả việc bắt đầu cũng khó — Kiểu thiếu động lực mãn tính',
      'Bahkan memulai saja sulit — Tipe motivasi kronis rendah'
    ),
    shortDescription: M(
      '"당신에게 지금 필요한 것은 더 좋은 운동 루틴이 아닙니다. 왜 운동하려 했는지를 다시 찾는 것입니다."',
      '"What you need now is not a better workout routine. It is to rediscover why you wanted to work out in the first place."',
      '「今あなたに必要なのは、もっと良い運動ルーティンではありません。なぜ運動しようとしたのかをもう一度見つけることです。」',
      '"你现在需要的不是更好的运动计划，而是重新找到当初为什么要运动。"',
      '"你現在需要的不是更好的運動計畫，而是重新找到當初為什麼要運動。"',
      '"Bạn cần không phải lịch tập tốt hơn, mà là tìm lại lý do vì sao muốn tập luyện."',
      '"Yang Anda butuhkan sekarang bukan rutinitas yang lebih bagus, melainkan menemukan kembali alasan ingin berolahraga."'
    ),
    description: M(
      '헬스장 등록 자체가 목적이었나 싶을 정도로 등록 후 가지 않습니다. 운동해야 한다는 것은 알지만 진짜 하고 싶다는 의욕이 생기지 않습니다. 이것은 게으름의 문제가 아닙니다. 목적 없는 운동은 지속되기 어렵습니다.',
      'You barely go after signing up, as if signing up itself was the goal. You know you should work out, but real desire never appears. This is not laziness. Workout without purpose is hard to sustain.',
      'ジム登録自体が目的だったのではないかと思うほど、登録後に行きません。運動すべきだとは分かっているのに、本当にやりたいというやる気が生まれません。これは怠けの問題ではありません。目的のない運動は続きにくいのです。',
      '报名后几乎不去，好像报名本身就是目的。你知道该运动，但始终生不出真正想练的动力。这不是懒惰的问题。没有目的的运动很难持续。',
      '報名後幾乎不去，好像報名本身就是目的。你知道該運動，但始終生不出真正想練的動力。這不是懶惰的問題。沒有目的的運動很難持續。',
      'Bạn hầu như không đi sau khi đăng ký, như thể việc đăng ký chính là mục tiêu. Bạn biết nên tập nhưng không có ý muốn thật sự. Đây không phải vấn đề lười biếng. Tập luyện không có mục đích rất khó duy trì.',
      'Anda hampir tidak pergi setelah mendaftar, seolah mendaftar saja sudah jadi tujuan. Anda tahu seharusnya olahraga, tapi keinginan sungguhan tidak muncul. Ini bukan masalah malas. Olahraga tanpa tujuan sulit dipertahankan.'
    ),
    obstacleType: M(
      '만성 의욕 부재형 💤',
      'Chronic Low Motivation Type 💤',
      '慢性やる気不足型 💤',
      '慢性动力缺失型 💤',
      '慢性動力缺失型 💤',
      'Kiểu thiếu động lực mãn tính 💤',
      'Tipe motivasi kronis rendah 💤'
    ),
    obstacleKeywords: M(
      '목적 불명확·의욕 부재·등록 강박·외적 압박',
      'Unclear purpose · Low motivation · Sign-up compulsion · External pressure',
      '目的不明確·やる気不足·登録強迫·外的圧力',
      '目的不明确·缺乏动力·报名强迫·外部压力',
      '目的不明確·缺乏動力·報名強迫·外部壓力',
      'Mục đích mơ hồ · Thiếu động lực · Cưỡng đăng ký · Áp lực bên ngoài',
      'Tujuan tidak jelas · Motivasi rendah · Kompulsif mendaftar · Tekanan eksternal'
    ),
    quitMoment: M(
      '"등록은 했는데... 사실 왜 해야 하는지 모르겠다"',
      '"I signed up... but honestly, I do not know why I should do this."',
      '「登録はしたけど... 正直、なぜやるべきか分からない」',
      '"是报名了……但说实话，我不知道为什么要练。"',
      '"是報名了……但說實話，我不知道為什麼要練。"',
      '"Đăng ký rồi... nhưng thật ra tôi không biết vì sao phải tập."',
      '"Sudah daftar... tapi jujur, saya nggak tahu kenapa harus olahraga."'
    ),
    overcomeStrategy: M(
      '• 운동 목적을 외모에서 감정으로 바꾸기. "운동하면 기분이 어떤지"를 먼저 경험하기\n• 헬스장이 아닌 좋아하는 신체 활동부터 시작하기. 등산·수영·댄스·배드민턴 등\n• 딱 4주만 주 2회 약속하기. 4주 후 기분 변화를 경험하면 동기가 생김\n• 운동 앱의 스트릭·배지 시스템 활용하기. 게임처럼 접근하면 의욕이 달라짐\n• 운동을 즐기는 사람 옆에 있기. 환경이 동기를 만듦',
      '• Shift your workout purpose from appearance to emotion. Experience "how you feel after moving" first\n• Start with physical activities you enjoy, not the gym: hiking, swimming, dance, badminton, etc.\n• Commit to just 2 sessions a week for 4 weeks. After feeling the mood shift, motivation grows\n• Use streak and badge systems in workout apps. Treat it like a game to change your drive\n• Be around people who enjoy working out. Environment creates motivation',
      '• 運動の目的を外見から感情に変える。「運動すると気分がどうなるか」を先に体験する\n• ジムではなく好きな身体活動から始める。登山・水泳・ダンス・バドミントンなど\n• たった4週間、週2回だけ約束する。4週間後の気分の変化を体験すると動機が生まれる\n• 運動アプリのストリーク・バッジシステムを活用する。ゲームのようにアプローチするとやる気が変わる\n• 運動を楽しむ人のそばにいる。環境が動機を作る',
      '• 把运动目的从外观转向情绪。先体验“运动后心情如何”\n• 不从健身房开始，而从喜欢的身体活动开始：登山、游泳、舞蹈、羽毛球等\n• 只承诺4周内每周2次。4周后感受到情绪变化，动力就会出现\n• 利用运动App的连续打卡和徽章系统。像游戏一样接近，动力会不同\n• 待在享受运动的人身边。环境会创造动力',
      '• 把運動目的從外觀轉向情緒。先體驗「運動後心情如何」\n• 不從健身房開始，而從喜歡的身體活動開始：登山、游泳、舞蹈、羽毛球等\n• 只承諾4週內每週2次。4週後感受到情緒變化，動力就會出現\n• 利用運動App的連續打卡和徽章系統。像遊戲一樣接近，動力會不同\n• 待在享受運動的人身邊。環境會創造動力',
      '• Chuyển mục đích tập từ ngoại hình sang cảm xúc. Trải nghiệm trước "tập xong cảm thấy thế nào"\n• Bắt đầu bằng hoạt động thể chất bạn thích, không phải gym: leo núi, bơi, nhảy, cầu lông...\n• Cam kết chỉ 2 buổi/tuần trong 4 tuần. Sau khi cảm nhận thay đổi tâm trạng, động lực sẽ xuất hiện\n• Dùng streak/badge trên app tập luyện. Tiếp cận như game sẽ thay đổi động lực\n• Ở gần người thích tập luyện. Môi trường tạo ra động lực',
      '• Ubah tujuan olahraga dari penampilan ke emosi. Rasakan dulu "bagaimana perasaan setelah bergerak"\n• Mulai dari aktivitas fisik yang Anda suka, bukan gym: hiking, renang, dance, bulutangkis, dll.\n• Komitmen hanya 2 kali seminggu selama 4 minggu. Setelah merasakan perubahan mood, motivasi tumbuh\n• Manfaatkan streak dan badge di aplikasi olahraga. Dekati seperti game agar motivasi berubah\n• Dekat dengan orang yang menikmati olahraga. Lingkungan menciptakan motivasi'
    ),
    todayTask: M(
      '헬스장 말고 오늘 즐겁게 할 수 있는 신체 활동 하나 생각해보기. 그게 운동의 시작점입니다',
      'Think of one physical activity you can enjoy today besides the gym. That is your starting point.',
      'ジム以外で、今日楽しめる身体活動を1つ考える。それが運動の出発点。',
      '想想今天除了健身房，还有什么身体活动能让你愉快开始。那就是运动的起点。',
      '想想今天除了健身房，還有什麼身體活動能讓你愉快開始。那就是運動的起點。',
      'Nghĩ một hoạt động thể chất vui vẻ hôm nay ngoài gym. Đó là điểm bắt đầu của tập luyện.',
      'Pikirkan satu aktivitas fisik yang bisa dinikmati hari ini selain gym. Itu titik awal olahraga Anda.'
    ),
    shareSnippet: M(
      '운동 지속력 유형: 만성 의욕 부재형 💤 헬스장 등록이 목적이었던 유형 ㅋㅋ 회원권 썩힌 금액 합치면 PT 끊고도 남을 것 같음 → 너는 어떤 운동 유형이야?',
      'Workout Persistence Type: Chronic Low Motivation Type 💤 The type where signing up for the gym was the whole goal 😂 Add up all those wasted memberships and you could have paid for PT and still had change → What is your workout type?',
      '運動継続力タイプ：慢性やる気不足型 💤 ジム登録が目的だったタイプ ㅋㅋ 使わなかった会員権を合計したらPTを契約しても余るくらい → あなたはどの運動タイプ？',
      '运动持续力类型：慢性动力缺失型 💤 报名健身房就是目的的类型 ㅋㅋ 把浪费的会员费加起来，够请私教还有剩 → 你是什么运动类型？',
      '運動持續力類型：慢性動力缺失型 💤 報名健身房就是目的的類型 ㅋㅋ 把浪費的會員費加起來，夠請私教還有剩 → 你是什麼運動類型？',
      'Kiểu duy trì tập luyện: Thiếu động lực mãn tính 💤 Kiểu đăng ký gym là xong mục tiêu ㅋㅋ Cộng tiền thẻ gym bỏ phí chắc còn dư để thuê PT → Bạn thuộc kiểu nào?',
      'Tipe konsistensi olahraga: Motivasi kronis rendah 💤 Tipe yang daftar gym sudah jadi tujuan ㅋㅋ Total membership yang terbuang mungkin cukup bayar PT dan masih sisa → Kamu tipe olahraga apa?'
    ),
  },
];
