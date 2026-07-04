/** 나의 아침형 vs 저녁형 인간 정밀 분석 — 12문항 2지선다, A=0 B=1, 총점 0~12 → 6유형 */

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

export interface Phase3ChronotypeMorningEveningQuestion {
  id: number;
  question: Record<string, string>;
  options: { text: Record<string, string>; score: number }[];
}

export interface Phase3ChronotypeMorningEveningResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  chronotypeLabel: Record<string, string>;
  energyPeak: Record<string, string>;
  focusPeak: Record<string, string>;
  naturalSleep: Record<string, string>;
  naturalWake: Record<string, string>;
  optimalSchedule: Record<string, string>;
  strength: Record<string, string>;
  weakness: Record<string, string>;
  famousPeople: Record<string, string>;
  socialJetLag: Record<string, string>;
  scientificFact: Record<string, string>;
  chronotypeTip: Record<string, string>;
  shareSnippet: Record<string, string>;
}

export function calculatePhase3ChronotypeMorningEveningResult(scores: number[]): string {
  const total = scores.reduce((sum, s) => sum + (s ?? 0), 0);
  if (total <= 1) return 'Type1';
  if (total <= 3) return 'Type2';
  if (total <= 6) return 'Type3';
  if (total <= 9) return 'Type4';
  if (total <= 11) return 'Type5';
  return 'Type6';
}

export const phase3ChronotypeMorningEveningQuestions: Phase3ChronotypeMorningEveningQuestion[] = [
  {
    id: 1,
    question: M(
      '알람 없이 자연스럽게 깨어나는 시간은?',
      'When do you naturally wake up without an alarm?',
      'アラームなしで自然に目が覚める時間は？',
      '不设闹钟，你会自然醒来的时间是？',
      '不設鬧鐘，你會自然醒來的時間是？',
      'Bạn thường tự nhiên thức dậy lúc mấy giờ mà không cần báo thức?',
      'Jam berapa kamu bangun secara alami tanpa alarm?'
    ),
    options: [
      {
        text: M(
          '오전 6시 이전. 해가 뜨면 자연스럽게 눈이 떠진다',
          'Before 6 AM. My eyes open naturally when the sun rises',
          '午前6時前。日が昇ると自然に目が覚める',
          '上午6点以前。太阳一出来就自然醒了',
          '上午6點以前。太陽一出來就自然醒了',
          'Trước 6 giờ sáng. Mắt tôi tự mở khi mặt trời mọc',
          'Sebelum jam 6 pagi. Mataku terbuka sendiri saat matahari terbit'
        ),
        score: 0,
      },
      {
        text: M(
          '오전 8시 이후. 알람 없이 자면 늦게까지 잔다',
          'After 8 AM. Without an alarm, I sleep until late',
          '午前8時以降。アラームなしだと遅くまで眠れる',
          '上午8点以后。不设闹钟会睡到很晚',
          '上午8點以後。不設鬧鐘會睡到很晚',
          'Sau 8 giờ sáng. Không có báo thức thì tôi ngủ đến khá muộn',
          'Setelah jam 8 pagi. Tanpa alarm, aku tidur sampai cukup siang'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 2,
    question: M(
      '오전 중 에너지와 집중력 상태는?',
      'How are your energy and focus during the morning?',
      '午前中のエネルギーと集中力の状態は？',
      '上午期间你的精力和专注力状态如何？',
      '上午期間你的精力和專注力狀態如何？',
      'Năng lượng và khả năng tập trung của bạn buổi sáng thế nào?',
      'Bagaimana energi dan fokusmu di pagi hari?'
    ),
    options: [
      {
        text: M(
          '오전이 가장 맑고 집중이 잘 된다. 중요한 일은 오전에 하는 게 최고다',
          'Mornings are my clearest and most focused time. I do important work best in the morning',
          '午前がいちばん頭がすっきりして集中できる。大事なことは午前中にやるのが最高',
          '上午头脑最清醒、专注力最好。重要的事放在上午做最合适',
          '上午頭腦最清醒、專注力最好。重要的事放在上午做最合適',
          'Buổi sáng là lúc tôi tỉnh táo và tập trung nhất. Việc quan trọng nên làm buổi sáng',
          'Pagi adalah waktu paling jernih dan fokus. Pekerjaan penting paling baik dilakukan pagi'
        ),
        score: 0,
      },
      {
        text: M(
          '오전은 몸이 덜 깨어있는 느낌이다. 제대로 돌아가기 시작하는 건 오후부터다',
          'My body feels half-asleep in the morning. I only really get going in the afternoon',
          '午前は体がまだ起ききっていない感じ。本格的に動き出すのは午後から',
          '上午感觉身体还没完全醒。真正进入状态是从下午开始',
          '上午感覺身體還沒完全醒。真正進入狀態是從下午開始',
          'Buổi sáng cơ thể vẫn chưa thực sự tỉnh. Tôi mới bắt đầu hoạt động hiệu quả từ chiều',
          'Pagi tubuh masih terasa setengah tidur. Baru benar-benar jalan dari sore'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 3,
    question: M(
      '점심 식사 후 상태는?',
      'How do you feel after lunch?',
      '昼食後の状態は？',
      '午餐后你的状态如何？',
      '午餐後你的狀態如何？',
      'Sau bữa trưa bạn cảm thấy thế nào?',
      'Bagaimana kondisimu setelah makan siang?'
    ),
    options: [
      {
        text: M(
          '점심 후에도 비교적 활기차다. 오후 업무도 무리 없이 소화한다',
          'I stay fairly energetic after lunch and handle afternoon work without much trouble',
          '昼食後も比較的元気。午後の仕事も無理なくこなせる',
          '午饭后仍比较有精神。下午的工作也能轻松应对',
          '午餐後仍比較有精神。下午的工作也能輕鬆應對',
          'Sau ăn trưa tôi vẫn khá tràn đầy năng lượng. Công việc buổi chiều cũng ổn',
          'Setelah makan siang masih cukup energik. Pekerjaan sore juga bisa dihandle'
        ),
        score: 0,
      },
      {
        text: M(
          '점심 후 잠깐 처지지만 오후 늦게 다시 에너지가 올라온다',
          'I dip a bit after lunch, but my energy rises again later in the afternoon',
          '昼食後は少し落ちるが、午後遅くには再びエネルギーが上がる',
          '午饭后会稍微低迷，但下午晚些时候精力又会回升',
          '午餐後會稍微低迷，但下午晚些時候精力又會回升',
          'Sau trưa tôi hơi xuống sức, nhưng năng lượng lại tăng vào cuối chiều',
          'Setelah makan siang sedikit drop, tapi energi naik lagi sore hari'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 4,
    question: M(
      '밤 10시 이후 나의 상태는?',
      'What is your state after 10 PM?',
      '夜10時以降の自分の状態は？',
      '晚上10点以后你的状态如何？',
      '晚上10點以後你的狀態如何？',
      'Sau 22 giờ bạn ở trạng thái như thế nào?',
      'Bagaimana kondisimu setelah jam 10 malam?'
    ),
    options: [
      {
        text: M(
          '자연스럽게 졸리고 뭔가 하기 어렵다. 일찍 자야 다음 날 컨디션이 좋다',
          'I naturally get sleepy and struggle to do much. Sleeping early keeps me in good shape the next day',
          '自然と眠くなり、何かするのが難しい。早く寝た方が翌日の調子がいい',
          '会自然犯困，很难再做事情。早睡第二天状态更好',
          '會自然犯睏，很難再做事情。早睡第二天狀態更好',
          'Tôi tự nhiên buồn ngủ và khó làm gì thêm. Ngủ sớm thì hôm sau khỏe hơn',
          'Aku naturally ngantuk dan susah ngapa-ngapain. Tidur lebih awal bikin besok lebih fit'
        ),
        score: 0,
      },
      {
        text: M(
          '오히려 머리가 맑아진다. 밤이 되어야 생각이 잘 정리되고 집중이 된다',
          'My mind actually clears up. I think better and focus more once night falls',
          'むしろ頭がはっきりする。夜になって初めて思考が整理され、集中できる',
          '反而头脑更清醒。要到晚上才容易理清思路、进入专注',
          '反而頭腦更清醒。要到晚上才容易理清思路、進入專注',
          'Ngược lại, đầu óc tôi lại tỉnh hơn. Ban đêm mới suy nghĩ rõ và tập trung được',
          'Justru kepala jadi lebih jernih. Malam baru pikiran rapi dan fokus'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 5,
    question: M(
      '중요한 시험·발표·회의가 있다면 선호하는 시간대는?',
      'If you have an important exam, presentation, or meeting, what time do you prefer?',
      '重要な試験・発表・会議があるなら、好みの時間帯は？',
      '如果有重要的考试、演讲或会议，你偏好的时间是？',
      '如果有重要的考試、演講或會議，你偏好的時間是？',
      'Nếu có kỳ thi, thuyết trình hoặc cuộc họp quan trọng, bạn thích khung giờ nào?',
      'Kalau ada ujian, presentasi, atau meeting penting, jam berapa yang kamu pilih?'
    ),
    options: [
      {
        text: M(
          '오전 10시 이전. 컨디션이 가장 좋을 때 중요한 것을 하고 싶다',
          'Before 10 AM. I want to do important things when I feel my best',
          '午前10時前。調子がいちばんいい時に大事なことをしたい',
          '上午10点以前。想在状态最好的时候做重要的事',
          '上午10點以前。想在狀態最好的時候做重要的事',
          'Trước 10 giờ sáng. Tôi muốn làm việc quan trọng khi cơ thể ở trạng thái tốt nhất',
          'Sebelum jam 10 pagi. Aku mau ngelakuin hal penting saat kondisi paling bagus'
        ),
        score: 0,
      },
      {
        text: M(
          '오후 3시 이후 또는 저녁. 그때가 가장 뇌가 잘 돌아간다',
          'After 3 PM or in the evening. That is when my brain works best',
          '午後3時以降または夜。その時間帯がいちばん脳がよく回る',
          '下午3点以后或晚上。那时大脑运转最好',
          '下午3點以後或晚上。那時大腦運轉最好',
          'Sau 15 giờ hoặc buổi tối. Đó là lúc não tôi hoạt động tốt nhất',
          'Setelah jam 3 sore atau malam. Itu waktu otak paling jalan'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 6,
    question: M(
      '주말 오전 10시의 나는?',
      'What am I like at 10 AM on a weekend?',
      '週末の午前10時の自分は？',
      '周末上午10点的我是什么样的？',
      '週末上午10點的我是什么样的？',
      'Buổi sáng 10 giờ cuối tuần, bạn như thế nào?',
      'Bagaimana diriku jam 10 pagi di akhir pekan?'
    ),
    options: [
      {
        text: M(
          '이미 일어나서 뭔가 하고 있거나 활동 준비가 됐다',
          'I am already up, doing something, or ready to get moving',
          'すでに起きていて、何かしているか活動の準備ができている',
          '已经起床，在做事情或准备好活动了',
          '已經起床，在做事情或準備好活動了',
          'Tôi đã dậy, đang làm gì đó hoặc sẵn sàng hoạt động',
          'Sudah bangun, lagi ngapa-ngapain, atau siap beraktivitas'
        ),
        score: 0,
      },
      {
        text: M(
          '아직 자고 있거나 간신히 일어난 상태. 오전 10시는 이른 편이다',
          'I am still asleep or just barely awake. 10 AM still feels early',
          'まだ寝ているか、やっと起きたばかり。午前10時は早い方だ',
          '还在睡觉或刚勉强醒来。上午10点对我来说还偏早',
          '還在睡覺或剛勉強醒來。上午10點對我來說還偏早',
          'Tôi vẫn đang ngủ hoặc mới dậy được chút. 10 giờ sáng vẫn còn sớm',
          'Masih tidur atau baru bangun seadanya. Jam 10 pagi masih terasa pagi banget'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 7,
    question: M(
      '창의적인 아이디어나 영감이 가장 많이 떠오르는 시간대는?',
      'When do creative ideas and inspiration come to you most often?',
      '創造的なアイデアやひらめきがいちばん多く浮かぶ時間帯は？',
      '创意想法或灵感最常出现的时间段是？',
      '創意想法或靈感最常出現的時間段是？',
      'Khung giờ nào ý tưởng sáng tạo và cảm hứng thường đến với bạn nhất?',
      'Jam berapa ide kreatif dan inspirasi paling sering muncul?'
    ),
    options: [
      {
        text: M(
          '아침이나 오전. 머릿속이 맑을 때 아이디어가 잘 나온다',
          'Morning or late morning. Ideas flow best when my mind is clear',
          '朝か午前中。頭がすっきりしている時にアイデアが出やすい',
          '早上或上午。头脑清醒时灵感更容易来',
          '早上或上午。頭腦清醒時靈感更容易來',
          'Buổi sáng hoặc đầu giờ. Ý tưởng hay xuất hiện khi đầu óc tỉnh táo',
          'Pagi atau late morning. Ide paling lancar saat kepala jernih'
        ),
        score: 0,
      },
      {
        text: M(
          '밤이나 새벽. 조용한 시간이 되어야 생각이 깊어진다',
          'Night or early dawn. My thoughts deepen only in quiet hours',
          '夜か明け方。静かな時間になって初めて思考が深まる',
          '夜晚或凌晨。只有安静的时候思考才会深入',
          '夜晚或凌晨。只有安靜的時候思考才會深入',
          'Ban đêm hoặc rạng sáng. Chỉ khi yên tĩnh thì suy nghĩ mới sâu hơn',
          'Malam atau dini hari. Pikiran baru dalam saat suasana tenang'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 8,
    question: M(
      '운동하기 가장 편한 시간대는?',
      'What time of day feels best for working out?',
      '運動するのにいちばん快適な時間帯は？',
      '最适合运动的时间段是？',
      '最適合運動的時間段是？',
      'Khung giờ nào bạn cảm thấy thoải mái nhất để tập thể dục?',
      'Jam berapa paling nyaman untuk olahraga?'
    ),
    options: [
      {
        text: M(
          '아침 운동이 좋다. 아침에 움직여야 하루가 활기차게 시작된다',
          'Morning workouts work best. Moving early helps me start the day energized',
          '朝の運動が合う。朝に動くと一日が活発に始まる',
          '更适合晨练。早上动起来，一天才更有活力',
          '更適合晨練。早上動起來，一天才更有活力',
          'Tập buổi sáng hợp hơn. Vận động sớm giúp cả ngày tràn năng lượng',
          'Olahraga pagi paling pas. Gerak pagi bikin hari terasa lebih hidup'
        ),
        score: 0,
      },
      {
        text: M(
          '저녁 운동이 맞다. 아침에는 몸이 굳어있고 저녁에 움직여야 개운하다',
          'Evening workouts suit me better. My body feels stiff in the morning, and I feel refreshed after moving at night',
          '夜の運動が合う。朝は体が固く、夜に動いて初めてすっきりする',
          '更适合晚上运动。早上身体发僵，晚上动起来才舒服',
          '更適合晚上運動。早上身體發僵，晚上動起來才舒服',
          'Tập buổi tối hợp hơn. Sáng cơ thể cứng, tối vận động mới thấy thoải mái',
          'Olahraga malam lebih cocok. Pagi badan kaku, malam baru enak gerak'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 9,
    question: M(
      '밤샘 작업이 불가피하다면 나는?',
      'If staying up all night is unavoidable, how am I?',
      '徹夜作業が避けられないなら、自分は？',
      '如果不得不熬夜工作，我会怎样？',
      '如果不得不熬夜工作，我會怎樣？',
      'Nếu bắt buộc phải thức khuya làm việc, bạn sẽ thế nào?',
      'Kalau terpaksa begadang kerja, bagaimana kondisimu?'
    ),
    options: [
      {
        text: M(
          '새벽 2~3시가 한계다. 그 이후로는 효율이 급격히 떨어진다',
          '2 to 3 AM is my limit. After that, my efficiency drops sharply',
          '深夜2〜3時が限界。その後は効率が急激に落ちる',
          '凌晨2到3点是极限。再往后效率会急剧下降',
          '凌晨2到3點是極限。再往下效率會急劇下降',
          '2-3 giờ sáng là giới hạn. Sau đó hiệu suất giảm mạnh',
          'Jam 2-3 pagi itu batasku. Setelah itu efisiensi turun drastis'
        ),
        score: 0,
      },
      {
        text: M(
          '오히려 새벽 2~3시에 집중력이 절정이다. 밤새는 게 그렇게 어렵지 않다',
          'My focus actually peaks around 2 to 3 AM. Staying up all night is not that hard for me',
          'むしろ深夜2〜3時に集中力が最高潮。徹夜はそれほど難しくない',
          '反而在凌晨2到3点专注力达到顶峰。通宵对我来说没那么难',
          '反而在凌晨2到3點專注力達到頂峰。通宵對我來說沒那麼難',
          'Ngược lại, 2-3 giờ sáng là lúc tập trung cao nhất. Thức khuya không quá khó với tôi',
          'Justru jam 2-3 pagi fokus puncak. Begadang nggak terlalu susah buatku'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 10,
    question: M(
      '일찍 일어나야 하는 날 전날 밤 나의 상태는?',
      'The night before a day when I need to wake up early, what am I like?',
      '早起きしなければならない日の前夜、自分は？',
      '如果第二天要早起，前一晚我的状态是？',
      '如果第二天要早起，前一晚我的狀態是？',
      'Đêm trước ngày phải dậy sớm, bạn ở trạng thái nào?',
      'Malam sebelum hari harus bangun pagi, kondisimu bagaimana?'
    ),
    options: [
      {
        text: M(
          '일찍 자는 게 자연스럽다. 다음 날을 위해 일찍 누우면 잘 잠든다',
          'Going to bed early feels natural. If I lie down early for the next day, I sleep well',
          '早く寝るのが自然。翌日のために早く横になればよく眠れる',
          '早睡很自然。为了第二天早点躺下，就能睡得很好',
          '早睡很自然。為了第二天早點躺下，就能睡得很好',
          'Ngủ sớm là tự nhiên. Nếu nằm sớm cho ngày hôm sau thì tôi ngủ ngon',
          'Tidur lebih awal terasa natural. Kalau tidur lebih cepat buat besok, aku tidur nyenyak'
        ),
        score: 0,
      },
      {
        text: M(
          '일찍 자려고 누워도 잠이 안 온다. 억지로 눈을 감아도 뇌가 깨어있다',
          'Even if I try to sleep early, I cannot fall asleep. Even with my eyes closed, my brain stays awake',
          '早く寝ようとしても眠れない。無理に目を閉じても脳は起きている',
          '就算想早睡也睡不着。强行闭眼，大脑还是醒着',
          '就算想早睡也睡不著。強行閉眼，大腦還是醒著',
          'Dù cố ngủ sớm cũng không ngủ được. Nhắm mắt cưỡng ép mà não vẫn tỉnh',
          'Meski coba tidur lebih awal, susah tidur. Paksa merem pun otak masih melek'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 11,
    question: M(
      '오전 6시에 완전히 깨어있는 상태로 중요한 일을 한다면?',
      'If I had to do important work fully awake at 6 AM, could I?',
      '午前6時に完全に起きた状態で重要な仕事をするなら？',
      '如果要在早上6点完全清醒地做重要工作，我可以吗？',
      '如果要在早上6點完全清醒地做重要工作，我可以嗎？',
      'Nếu phải làm việc quan trọng lúc 6 giờ sáng trong trạng thái hoàn toàn tỉnh táo thì sao?',
      'Kalau harus ngelakuin pekerjaan penting jam 6 pagi dengan benar-benar sadar, bisa?'
    ),
    options: [
      {
        text: M(
          '가능하다. 오전 6시도 충분히 활동할 수 있는 시간이다',
          'Yes. 6 AM is still a perfectly workable time for me',
          '可能だ。午前6時も十分に活動できる時間',
          '可以。早上6点也足够用来活动',
          '可以。早上6點也足夠用來活動',
          'Có thể. 6 giờ sáng vẫn là thời gian đủ để hoạt động',
          'Bisa. Jam 6 pagi masih cukup waktu buat aktif'
        ),
        score: 0,
      },
      {
        text: M(
          '매우 어렵다. 몸은 있어도 뇌가 없는 상태다',
          'Very difficult. My body is there, but my brain is not',
          'とても難しい。体はあるが脳がない状態',
          '非常困难。身体在，但大脑不在',
          '非常困難。身體在，但大腦不在',
          'Rất khó. Cơ thể có mặt nhưng não thì không',
          'Sangat susah. Badannya ada, otaknya nggak ikut'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 12,
    question: M(
      '지금까지 살아오면서 내 생체 리듬에 대한 솔직한 생각은?',
      'Honestly, what do I think about my body clock so far in life?',
      'これまで生きてきて、自分の体内リズムについて正直に思うことは？',
      '回顾至今的人生，我对自己的生物节律有什么真实感受？',
      '回顧至今的人生，我對自己的生物節律有什麼真實感受？',
      'Nhìn lại cuộc sống cho đến nay, bạn thật lòng nghĩ gì về nhịp sinh học của mình?',
      'Secara jujur, bagaimana pendapatmu tentang ritme biologismu sejauh ini?'
    ),
    options: [
      {
        text: M(
          '아침에 강하다. 일찍 일어나는 게 자연스럽고 새벽이 좋다',
          'I am strong in the morning. Waking up early feels natural, and I like dawn',
          '朝に強い。早起きが自然で、明け方が好き',
          '我属于早上型。早起很自然，我也喜欢清晨',
          '我屬於早上型。早起很自然，我也喜歡清晨',
          'Tôi mạnh vào buổi sáng. Dậy sớm tự nhiên và tôi thích bình minh',
          'Aku kuat di pagi. Bangun pagi terasa natural dan aku suka fajar'
        ),
        score: 0,
      },
      {
        text: M(
          '저녁에 강하다. 밤이 되면 활기차고 늦게까지 깨어있는 게 편하다',
          'I am strong at night. I feel energized after dark and am comfortable staying up late',
          '夜に強い。夜になると活発になり、遅くまで起きている方が楽',
          '我属于晚上型。一到晚上就更有精神，晚睡更自在',
          '我屬於晚上型。一到晚上就更有精神，晚睡更自在',
          'Tôi mạnh vào buổi tối. Ban đêm tôi tràn năng lượng và ở thức khuya thoải mái hơn',
          'Aku kuat di malam. Malam bikin lebih hidup dan nyaman begadang'
        ),
        score: 1,
      },
    ],
  },
];

export const phase3ChronotypeMorningEveningResults: Phase3ChronotypeMorningEveningResult[] = [
  {
    type: 'Type1',
    emoji: '🌅',
    title: M(
      '해가 뜨기 전부터 활기찬, 극강 아침형',
      'Energetic before sunrise — extreme morning type',
      '日の出前から活発な、超強力アーリーバード',
      '日出前就充满活力，极致晨型人',
      '日出前就充滿活力，極致晨型人',
      'Tràn năng lượng trước khi mặt trời mọc — kiểu cực sáng',
      'Enerjik sebelum matahari terbit — tipe pagi ekstrem'
    ),
    shortDescription: M(
      '"당신은 생체 시계가 가장 앞당겨진 진짜 아침형 인간입니다."',
      '"Your body clock is shifted earlier than most — you are a true morning person."',
      '"あなたは体内時計が最も前にずれた、本物のアーリーバードです。"',
      '"你的生物钟比大多数人更早，是真正的晨型人。"',
      '"你的生理時鐘比大多數人更早，是真正的晨型人。"',
      '"Nhịp sinh học của bạn sớm hơn hầu hết mọi người — bạn là kiểu người buổi sáng thật sự."',
      '"Jam biologismu lebih maju dari kebanyakan orang — kamu benar-benar tipe pagi."'
    ),
    description: M(
      '전체 인구의 약 15~20%에 해당하는 강한 아침형입니다. 해가 뜨기 전부터 자연스럽게 눈이 떠지고, 오전에 에너지와 집중력이 정점에 달하며, 밤 10시 이후로는 급격히 기능이 떨어집니다. 아침의 고요함 속에서 가장 뛰어난 성과를 냅니다.',
      'You belong to the strong morning chronotype, making up about 15–20% of the population. You naturally wake before sunrise, hit peak energy and focus in the morning, and drop sharply after 10 PM. You do your best work in the quiet of early morning.',
      '人口の約15〜20%に当たる強いアーリーバードです。日の出前から自然に目が覚め、午前中にエネルギーと集中力が最高潮に達し、夜10時以降は急激に機能が落ちます。朝の静けさの中で最高の成果を出します。',
      '你属于约占人口15~20%的强晨型人。日出前就会自然醒来，上午精力和专注力达到顶峰，晚上10点后功能会急剧下降。你在清晨的安静中表现最出色。',
      '你屬於約占人口15~20%的強晨型人。日出前就會自然醒來，上午精力和專注力達到頂峰，晚上10點後功能會急劇下降。你在清晨的安靜中表現最出色。',
      'Bạn thuộc kiểu buổi sáng mạnh, chiếm khoảng 15–20% dân số. Bạn tự nhiên thức trước bình minh, đạt đỉnh năng lượng và tập trung vào buổi sáng, rồi giảm mạnh sau 22 giờ. Bạn làm việc tốt nhất trong sự yên tĩnh của buổi sáng sớm.',
      'Kamu termasuk tipe pagi kuat, sekitar 15–20% populasi. Bangun natural sebelum matahari terbit, energi dan fokus puncak di pagi, lalu drop tajam setelah jam 10 malam. Performa terbaikmu ada di ketenangan pagi hari.'
    ),
    chronotypeLabel: M(
      '극강 아침형 🌅',
      'Extreme morning type 🌅',
      '超強力アーリーバード 🌅',
      '极致晨型 🌅',
      '極致晨型 🌅',
      'Kiểu cực sáng 🌅',
      'Tipe pagi ekstrem 🌅'
    ),
    energyPeak: M(
      '오전 6~10시',
      '6–10 AM',
      '午前6〜10時',
      '上午6~10点',
      '上午6~10點',
      '6–10 giờ sáng',
      '06.00–10.00'
    ),
    focusPeak: M(
      '오전 7~9시',
      '7–9 AM',
      '午前7〜9時',
      '上午7~9点',
      '上午7~9點',
      '7–9 giờ sáng',
      '07.00–09.00'
    ),
    naturalSleep: M(
      '밤 9~10시',
      '9–10 PM',
      '夜9〜10時',
      '晚上9~10点',
      '晚上9~10點',
      '21–22 giờ',
      '21.00–22.00'
    ),
    naturalWake: M(
      '새벽 5~6시',
      '5–6 AM',
      '明け方5〜6時',
      '凌晨5~6点',
      '凌晨5~6點',
      '5–6 giờ sáng',
      '05.00–06.00'
    ),
    optimalSchedule: M(
      '· 오전 6~10시: 가장 중요하고 창의적인 작업 배치\n· 오전 10~12시: 회의·소통·협업 업무\n· 오후 1~3시: 루틴 업무·이메일 처리\n· 오후 3시 이후: 가벼운 업무 또는 휴식',
      '· 6–10 AM: Most important and creative work\n· 10 AM–12 PM: Meetings, communication, collaboration\n· 1–3 PM: Routine tasks and email\n· After 3 PM: Light work or rest',
      '· 午前6〜10時：最も重要で創造的な仕事\n· 午前10〜12時：会議・コミュニケーション・協働\n· 午後1〜3時：ルーティン業務・メール処理\n· 午後3時以降：軽い業務または休息',
      '· 上午6~10点：安排最重要、最有创意的工作\n· 上午10~12点：会议、沟通、协作\n· 下午1~3点：常规事务、处理邮件\n· 下午3点后：轻松工作或休息',
      '· 上午6~10點：安排最重要、最有創意的工作\n· 上午10~12點：會議、溝通、協作\n· 下午1~3點：常規事務、處理郵件\n· 下午3點後：輕鬆工作或休息',
      '· 6–10 giờ sáng: Công việc quan trọng và sáng tạo nhất\n· 10–12 giờ: Họp, giao tiếp, cộng tác\n· 13–15 giờ: Việc thường ngày, xử lý email\n· Sau 15 giờ: Việc nhẹ hoặc nghỉ ngơi',
      '· 06.00–10.00: Pekerjaan paling penting dan kreatif\n· 10.00–12.00: Meeting, komunikasi, kolaborasi\n· 13.00–15.00: Rutinitas dan email\n· Setelah 15.00: Pekerjaan ringan atau istirahat'
    ),
    strength: M(
      '이른 아침의 생산성·규칙적 리듬·수면의 질이 높음',
      'High early-morning productivity, steady rhythm, and good sleep quality',
      '早朝の生産性・規則的なリズム・睡眠の質が高い',
      '清晨生产力高、节奏规律、睡眠质量好',
      '清晨生產力高、節奏規律、睡眠品質好',
      'Năng suất buổi sáng sớm cao, nhịp sống đều, chất lượng giấc ngủ tốt',
      'Produktivitas pagi awal tinggi, ritme teratur, kualitas tidur bagus'
    ),
    weakness: M(
      '저녁 약속·야근·야간 이벤트에 극도로 취약. 밤샘 작업 시 효율 급락',
      'Highly vulnerable to evening plans, overtime, and night events. Efficiency crashes during all-nighters',
      '夜の予定・残業・夜間イベントに非常に弱い。徹夜作業では効率が急落',
      '对晚间约会、加班和夜间活动极其敏感。熬夜时效率会急剧下降',
      '對晚間約會、加班和夜間活動極其敏感。熬夜時效率會急劇下降',
      'Rất dễ yếu với hẹn tối, làm thêm giờ và sự kiện ban đêm. Hiệu suất lao dốc khi thức khuya',
      'Sangat rentan terhadap janji malam, lembur, dan acara malam. Efisiensi anjlok saat begadang'
    ),
    famousPeople: M(
      '팀 쿡(Apple CEO·오전 4시 기상)·오프라 윈프리',
      'Tim Cook (Apple CEO, wakes at 4 AM) · Oprah Winfrey',
      'ティム・クック（Apple CEO・午前4時起床）・オプラ・ウィンフリー',
      '蒂姆·库克（Apple CEO，凌晨4点起床）· 奥普拉·温弗瑞',
      '提姆·庫克（Apple CEO，凌晨4點起床）· 歐普拉·溫弗瑞',
      'Tim Cook (CEO Apple, dậy lúc 4 giờ sáng) · Oprah Winfrey',
      'Tim Cook (CEO Apple, bangun jam 4 pagi) · Oprah Winfrey'
    ),
    socialJetLag: M('', '', '', '', '', '', ''),
    scientificFact: M('', '', '', '', '', '', ''),
    chronotypeTip: M(
      '저녁 약속은 가급적 오후 7시 이전으로 조정하고 주말에도 기상 시간을 평일과 1시간 이내로 유지하세요',
      'Try to keep evening plans before 7 PM, and keep your wake time within one hour of weekdays even on weekends',
      '夜の予定はできれば午後7時前に調整し、週末も起床時間を平日から1時間以内に保ちましょう',
      '尽量把晚间约会安排在晚上7点前，周末起床时间也尽量与平日相差不超过1小时',
      '盡量把晚間約會安排在晚上7點前，週末起床時間也盡量與平日相差不超過1小時',
      'Cố gắng hẹn buổi tối trước 19 giờ, và cuối tuần cũng giữ giờ dậy trong vòng 1 giờ so với ngày thường',
      'Usahakan janji malam sebelum jam 7 malam, dan di akhir pekan bangun dalam jarak 1 jam dari hari kerja'
    ),
    shareSnippet: M(
      '크로노타입 분석: 극강 아침형 🌅 새벽 5시 기상이 자연스럽다는 거... 유전자가 그렇게 만들었다는 과학적 근거 있음 → 너는 어떤 크로노타입이야?',
      'Chronotype check: extreme morning type 🌅 Waking at 5 AM feels totally natural... science says genes play a big role → what chronotype are you?',
      'クロノタイプ分析：超強力アーリーバード 🌅 明け方5時起床が自然って…遺伝子がそう作ったって科学的根拠ある → あなたはどのクロノタイプ？',
      '生物钟分析：极致晨型 🌅 凌晨5点自然醒…原来基因真的会这样安排 → 你是什么生物钟类型？',
      '生物鐘分析：極致晨型 🌅 凌晨5點自然醒…原來基因真的會這樣安排 → 你是什麼生物鐘類型？',
      'Phân tích chronotype: kiểu cực sáng 🌅 Dậy lúc 5 giờ sáng tự nhiên thế này... hóa ra gen quyết định thật → bạn thuộc chronotype nào?',
      'Analisis chronotype: tipe pagi ekstrem 🌅 Bangun jam 5 pagi terasa natural... ternyata gen memang bikin begitu → kamu chronotype apa?'
    ),
  },
  {
    type: 'Type2',
    emoji: '☀️',
    title: M(
      '오전이 황금 시간인, 전형적 아침형',
      'Golden mornings — classic morning type',
      '午前がゴールデンタイムの、典型的アーリーバード',
      '上午是黄金时间，典型晨型人',
      '上午是黃金時間，典型晨型人',
      'Buổi sáng là giờ vàng — kiểu sáng điển hình',
      'Pagi adalah golden hour — tipe pagi klasik'
    ),
    shortDescription: M(
      '"당신은 가장 흔한 아침형 패턴을 가진 사람입니다. 오전이 하루의 황금 시간입니다."',
      '"You have one of the most common morning patterns. Your mornings are the golden hours of your day."',
      '"あなたは最も一般的なアーリーバードのパターンを持っています。午前が一日のゴールデンタイムです。"',
      '"你拥有最常见的晨型模式。上午是你一天中的黄金时间。"',
      '"你擁有最常見的晨型模式。上午是你一天中的黃金時間。"',
      '"Bạn có mẫu buổi sáng phổ biến nhất. Buổi sáng là giờ vàng trong ngày của bạn."',
      '"Kamu punya pola pagi paling umum. Pagi adalah golden hour harianmu."'
    ),
    description: M(
      '전체 인구의 약 25%에 해당하는 전형적인 아침형입니다. 오전에 에너지와 집중력이 높고 오후부터 서서히 내려가는 패턴입니다. 사회의 표준 스케줄(9시~6시)과 가장 잘 맞는 크로노타입으로 직장 생활에 유리합니다.',
      'You are a classic morning type, making up about 25% of the population. Your energy and focus are high in the morning and gradually decline in the afternoon. This chronotype fits the standard 9-to-6 schedule best and works well in office life.',
      '人口の約25%に当たる典型的なアーリーバードです。午前中にエネルギーと集中力が高く、午後から徐々に下がるパターンです。社会の標準スケジュール（9時〜18時）と最も合うクロノタイプで、職場生活に有利です。',
      '你属于约占人口25%的典型晨型人。上午精力和专注力较高，下午起逐渐下降。这种生物钟最符合社会常见的9点到6点作息，对职场生活更有利。',
      '你屬於約占人口25%的典型晨型人。上午精力和專注力較高，下午起逐漸下降。這種生物鐘最符合社會常見的9點到6點作息，對職場生活更有利。',
      'Bạn là kiểu buổi sáng điển hình, chiếm khoảng 25% dân số. Năng lượng và tập trung cao buổi sáng, rồi giảm dần từ chiều. Chronotype này hợp lịch 9–18 giờ nhất và thuận lợi cho công việc văn phòng.',
      'Kamu tipe pagi klasik, sekitar 25% populasi. Energi dan fokus tinggi pagi, turun perlahan sore. Chronotype ini paling cocok dengan jadwal 9–6 dan enak buat kerja kantoran.'
    ),
    chronotypeLabel: M(
      '전형적 아침형 ☀️',
      'Classic morning type ☀️',
      '典型的アーリーバード ☀️',
      '典型晨型 ☀️',
      '典型晨型 ☀️',
      'Kiểu sáng điển hình ☀️',
      'Tipe pagi klasik ☀️'
    ),
    energyPeak: M(
      '오전 8~11시',
      '8–11 AM',
      '午前8〜11時',
      '上午8~11点',
      '上午8~11點',
      '8–11 giờ sáng',
      '08.00–11.00'
    ),
    focusPeak: M(
      '오전 9~11시',
      '9–11 AM',
      '午前9〜11時',
      '上午9~11点',
      '上午9~11點',
      '9–11 giờ sáng',
      '09.00–11.00'
    ),
    naturalSleep: M(
      '밤 10~11시',
      '10–11 PM',
      '夜10〜11時',
      '晚上10~11点',
      '晚上10~11點',
      '22–23 giờ',
      '22.00–23.00'
    ),
    naturalWake: M(
      '오전 6~7시',
      '6–7 AM',
      '午前6〜7時',
      '早上6~7点',
      '早上6~7點',
      '6–7 giờ sáng',
      '06.00–07.00'
    ),
    optimalSchedule: M(
      '· 오전 9~11시: 집중력이 필요한 핵심 업무·의사결정\n· 오전 11시~오후 1시: 창의적 업무·기획\n· 오후 1~3시: 점심 후 가벼운 소통·회의\n· 오후 3시 이후: 루틴 업무·정리 업무',
      '· 9–11 AM: Core work and decisions that need focus\n· 11 AM–1 PM: Creative work and planning\n· 1–3 PM: Light communication and meetings after lunch\n· After 3 PM: Routine and wrap-up tasks',
      '· 午前9〜11時：集中力が必要な中核業務・意思決定\n· 午前11時〜午後1時：創造的業務・企画\n· 午後1〜3時：昼食後の軽いコミュニケーション・会議\n· 午後3時以降：ルーティン業務・整理作業',
      '· 上午9~11点：需要专注的核心工作与决策\n· 上午11点~下午1点：创意工作、策划\n· 下午1~3点：午饭后轻松沟通、会议\n· 下午3点后：常规事务、整理收尾',
      '· 上午9~11點：需要專注的核心工作與決策\n· 上午11點~下午1點：創意工作、企劃\n· 下午1~3點：午餐後輕鬆溝通、會議\n· 下午3點後：常規事務、整理收尾',
      '· 9–11 giờ sáng: Công việc cốt lõi và quyết định cần tập trung\n· 11–13 giờ: Công việc sáng tạo, lập kế hoạch\n· 13–15 giờ: Giao tiếp nhẹ, họp sau bữa trưa\n· Sau 15 giờ: Việc thường ngày, dọn dẹp',
      '· 09.00–11.00: Pekerjaan inti dan keputusan butuh fokus\n· 11.00–13.00: Pekerjaan kreatif dan perencanaan\n· 13.00–15.00: Komunikasi ringan dan meeting setelah makan siang\n· Setelah 15.00: Rutinitas dan pekerjaan penutup'
    ),
    strength: M(
      '사회 스케줄과 자연스럽게 맞음. 수면의 질이 높고 규칙적',
      'Fits social schedules naturally. Sleep quality is high and consistent',
      '社会スケジュールと自然に合う。睡眠の質が高く規則的',
      '与社会作息自然契合。睡眠质量好且规律',
      '與社會作息自然契合。睡眠品質好且規律',
      'Hợp lịch sinh hoạt xã hội một cách tự nhiên. Giấc ngủ chất lượng cao và đều',
      'Cocok natural dengan jadwal sosial. Kualitas tidur tinggi dan teratur'
    ),
    weakness: M(
      '오후 늦게 시작하는 회의나 야근이 지속되면 만성 피로 누적',
      'Late-afternoon meetings or frequent overtime can lead to chronic fatigue',
      '午後遅く始まる会議や残業が続くと慢性的な疲労が蓄積',
      '如果经常参加下午很晚的会议或加班，容易积累慢性疲劳',
      '如果經常參加下午很晚的會議或加班，容易累積慢性疲勞',
      'Họp muộn buổi chiều hoặc làm thêm giờ kéo dài dễ tích tụ mệt mỏi mãn tính',
      'Meeting sore yang telat atau lembur terus-menerus bisa menumpuk kelelahan kronis'
    ),
    famousPeople: M('', '', '', '', '', '', ''),
    socialJetLag: M('', '', '', '', '', '', ''),
    scientificFact: M('', '', '', '', '', '', ''),
    chronotypeTip: M(
      '가장 중요한 결정과 업무를 오전에 몰아두는 습관이 생산성을 크게 높입니다. 오후 3시 이후 새로운 창의적 과제를 시작하지 않는 것도 방법입니다',
      'Bunching your most important decisions and work in the morning can greatly boost productivity. Avoid starting new creative tasks after 3 PM',
      '最も重要な決定と業務を午前中に集中させる習慣が生産性を大きく高めます。午後3時以降に新しい創造的課題を始めないのも一つの方法です',
      '把最重要的决策和工作集中在上午，会大幅提升效率。下午3点后尽量不开始新的创意任务也是好办法',
      '把最重要的決策和工作集中在上午，會大幅提升效率。下午3點後盡量不開始新的創意任務也是好辦法',
      'Tập trung quyết định và công việc quan trọng nhất vào buổi sáng sẽ tăng năng suất rõ rệt. Tránh bắt đầu nhiệm vụ sáng tạo mới sau 15 giờ cũng là cách hay',
      'Menumpuk keputusan dan pekerjaan paling penting di pagi hari bisa naikkan produktivitas banget. Hindari mulai tugas kreatif baru setelah jam 3 sore juga oke'
    ),
    shareSnippet: M(
      '크로노타입 분석: 전형적 아침형 ☀️ 오전 9~11시 집중력 정점이래. 이 시간에 중요한 거 다 몰아야겠다 → 너는 어떤 크로노타입이야?',
      'Chronotype check: classic morning type ☀️ Peak focus is 9–11 AM. Gotta stack all the important stuff then → what chronotype are you?',
      'クロノタイプ分析：典型的アーリーバード ☀️ 午前9〜11時が集中力ピークらしい。この時間に大事なこと全部やろう → あなたはどのクロノタイプ？',
      '生物钟分析：典型晨型 ☀️ 上午9~11点是专注力巅峰，重要的事都得堆这个时段 → 你是什么生物钟类型？',
      '生物鐘分析：典型晨型 ☀️ 上午9~11點是專注力巔峰，重要的事都得堆這個時段 → 你是什麼生物鐘類型？',
      'Phân tích chronotype: kiểu sáng điển hình ☀️ 9–11 giờ sáng là đỉnh tập trung. Việc quan trọng phải dồn lúc này → bạn thuộc chronotype nào?',
      'Analisis chronotype: tipe pagi klasik ☀️ Fokus puncak jam 9–11 pagi. Harus numpuk hal penting di jam itu → kamu chronotype apa?'
    ),
  },
  {
    type: 'Type3',
    emoji: '🌤️',
    title: M(
      '오전도 오후도 괜찮은, 중간형 균형 타입',
      'Fine in morning or afternoon — balanced middle type',
      '午前も午後も問題ない、中間型バランスタイプ',
      '上午下午都可以，中间平衡型',
      '上午下午都可以，中間平衡型',
      'Sáng chiều đều ổn — kiểu cân bằng trung gian',
      'Pagi sore oke-oke aja — tipe tengah seimbang'
    ),
    shortDescription: M(
      '"당신은 가장 많은 인구가 해당하는 중간형입니다. 아침형과 저녁형의 장점을 모두 가집니다."',
      '"You belong to the most common middle chronotype. You get the best of both morning and evening types."',
      '"あなたは最も多い人口に当てはまる中間型です。アーリーバードとナイトオウルの長所を両方持っています。"',
      '"你属于人口最多的中间型。兼具晨型和夜型的优点。"',
      '"你屬於人口最多的中間型。兼具晨型和夜型的優點。"',
      '"Bạn thuộc chronotype trung gian phổ biến nhất. Bạn có ưu điểm của cả kiểu sáng lẫn kiểu tối."',
      '"Kamu termasuk chronotype tengah paling umum. Kamu punya kelebihan tipe pagi dan malam sekaligus."'
    ),
    description: M(
      '전체 인구의 약 50%에 해당하는 중간형 크로노타입입니다. 극단적으로 아침형도 저녁형도 아닌 가장 유연한 생체 리듬을 가지고 있습니다. 환경과 스케줄에 따라 어느 정도 조정이 가능한 적응형 타입입니다.',
      'You are a middle chronotype, making up about 50% of the population. You are neither strongly morning nor evening type, with the most flexible body clock. You can adapt somewhat to your environment and schedule.',
      '人口の約50%に当たる中間型クロノタイプです。極端なアーリーバードでもナイトオウルでもない、最も柔軟な体内リズムを持っています。環境とスケジュールに応じてある程度調整できる適応型です。',
      '你属于约占人口50%的中间型生物钟。既不是极端晨型，也不是极端夜型，拥有最灵活的生活节律。能根据环境和日程做一定调整，属于适应型。',
      '你屬於約占人口50%的中間型生物鐘。既不是極端晨型，也不是極端夜型，擁有最靈活的生活節律。能根據環境和日程做一定調整，屬於適應型。',
      'Bạn thuộc chronotype trung gian, chiếm khoảng 50% dân số. Không cực sáng cũng không cực tối, với nhịp sinh học linh hoạt nhất. Bạn có thể điều chỉnh theo môi trường và lịch trình.',
      'Kamu chronotype tengah, sekitar 50% populasi. Bukan tipe pagi atau malam ekstrem, punya ritme biologis paling fleksibel. Bisa menyesuaikan diri dengan lingkungan dan jadwal.'
    ),
    chronotypeLabel: M(
      '중간형 균형 타입 🌤️',
      'Balanced middle type 🌤️',
      '中間型バランスタイプ 🌤️',
      '中间平衡型 🌤️',
      '中間平衡型 🌤️',
      'Kiểu cân bằng trung gian 🌤️',
      'Tipe tengah seimbang 🌤️'
    ),
    energyPeak: M(
      '오전 10시~오후 1시',
      '10 AM–1 PM',
      '午前10時〜午後1時',
      '上午10点~下午1点',
      '上午10點~下午1點',
      '10–13 giờ',
      '10.00–13.00'
    ),
    focusPeak: M(
      '오전 10시~오후 12시',
      '10 AM–12 PM',
      '午前10時〜午後12時',
      '上午10点~中午12点',
      '上午10點~中午12點',
      '10–12 giờ',
      '10.00–12.00'
    ),
    naturalSleep: M(
      '밤 11시~자정',
      '11 PM–midnight',
      '夜11時〜深夜0時',
      '晚上11点~午夜',
      '晚上11點~午夜',
      '23 giờ–nửa đêm',
      '23.00–tengah malam'
    ),
    naturalWake: M(
      '오전 7~8시',
      '7–8 AM',
      '午前7〜8時',
      '早上7~8点',
      '早上7~8點',
      '7–8 giờ sáng',
      '07.00–08.00'
    ),
    optimalSchedule: M(
      '· 오전 10시~오후 12시: 집중력이 필요한 핵심 업무\n· 오후 12~2시: 회의·소통·협업\n· 오후 2~4시: 점심 후 가벼운 창의 업무 가능\n· 오후 4시 이후: 루틴 정리 업무',
      '· 10 AM–12 PM: Core work that needs focus\n· 12–2 PM: Meetings, communication, collaboration\n· 2–4 PM: Light creative work after lunch\n· After 4 PM: Routine wrap-up tasks',
      '· 午前10時〜午後12時：集中力が必要な中核業務\n· 午後12〜2時：会議・コミュニケーション・協働\n· 午後2〜4時：昼食後の軽い創造的業務\n· 午後4時以降：ルーティン整理業務',
      '· 上午10点~中午12点：需要专注的核心工作\n· 中午12~2点：会议、沟通、协作\n· 下午2~4点：午饭后可安排轻度创意工作\n· 下午4点后：常规整理事务',
      '· 上午10點~中午12點：需要專注的核心工作\n· 中午12~2點：會議、溝通、協作\n· 下午2~4點：午餐後可安排輕度創意工作\n· 下午4點後：常規整理事務',
      '· 10–12 giờ: Công việc cốt lõi cần tập trung\n· 12–14 giờ: Họp, giao tiếp, cộng tác\n· 14–16 giờ: Công việc sáng tạo nhẹ sau bữa trưa\n· Sau 16 giờ: Việc thường ngày, dọn dẹp',
      '· 10.00–12.00: Pekerjaan inti butuh fokus\n· 12.00–14.00: Meeting, komunikasi, kolaborasi\n· 14.00–16.00: Pekerjaan kreatif ringan setelah makan siang\n· Setelah 16.00: Rutinitas dan penutup'
    ),
    strength: M(
      '가장 유연한 리듬. 아침형과도 저녁형과도 협업이 원활함',
      'The most flexible rhythm. Collaborates smoothly with both morning and evening types',
      '最も柔軟なリズム。アーリーバードともナイトオウルとも協力がスムーズ',
      '节奏最灵活。与晨型和夜型的人协作都很顺畅',
      '節奏最靈活。與晨型和夜型的人協作都很順暢',
      'Nhịp sống linh hoạt nhất. Hợp tác trơn tru với cả người sáng lẫn người tối',
      'Ritme paling fleksibel. Kolaborasi lancar dengan tipe pagi maupun malam'
    ),
    weakness: M(
      '유연하기 때문에 불규칙한 스케줄에 쉽게 노출되어 리듬이 무너질 수 있음',
      'Because you are flexible, irregular schedules can easily throw your rhythm off',
      '柔軟な分、不規則なスケジュールにさらされやすく、リズムが崩れることがある',
      '因为较灵活，容易受不规律作息影响，节奏也可能被打乱',
      '因為較靈活，容易受不規律作息影響，節奏也可能被打亂',
      'Vì linh hoạt nên dễ bị lịch trình bất ổn làm lệch nhịp sinh học',
      'Karena fleksibel, jadwal tidak teratur bisa bikin ritme berantakan'
    ),
    famousPeople: M('', '', '', '', '', '', ''),
    socialJetLag: M('', '', '', '', '', '', ''),
    scientificFact: M('', '', '', '', '', '', ''),
    chronotypeTip: M(
      '유연성을 활용해 중요한 업무를 오전 10시~오후 12시 황금 시간에 집중 배치하고 기상 시간을 주말에도 ±1시간 이내로 유지하세요',
      'Use your flexibility by placing important work in the 10 AM–12 PM golden window, and keep wake times within ±1 hour on weekends too',
      '柔軟性を活かし、重要な業務を午前10時〜午後12時のゴールデンタイムに集中配置し、週末も起床時間を±1時間以内に保ちましょう',
      '利用灵活性，把重要工作集中在上午10点到中午12点的黄金时段，周末起床时间也尽量控制在±1小时内',
      '利用靈活性，把重要工作集中在上午10點到中午12點的黃金時段，週末起床時間也盡量控制在±1小時內',
      'Tận dụng sự linh hoạt bằng cách dồn việc quan trọng vào khung 10–12 giờ, và cuối tuần cũng giữ giờ dậy trong ±1 giờ',
      'Manfaatkan fleksibilitas dengan menaruh pekerjaan penting di golden window 10.00–12.00, dan bangun ±1 jam di akhir pekan juga'
    ),
    shareSnippet: M(
      '크로노타입 분석: 중간형 균형 타입 🌤️ 인구 50%가 이 유형이래... 가장 유연한 생체 리듬. 가장 많은 유형이라는 거 신기함 → 너는 어떤 크로노타입이야?',
      'Chronotype check: balanced middle type 🌤️ Apparently 50% of people are this type... the most flexible body clock. Kinda wild that it is the most common → what chronotype are you?',
      'クロノタイプ分析：中間型バランスタイプ 🌤️ 人口の50%がこのタイプらしい…いちばん柔軟な体内リズム。最多タイプって面白い → あなたはどのクロノタイプ？',
      '生物钟分析：中间平衡型 🌤️ 据说50%的人都是这种类型…最灵活的生活节律，原来最常见的是这个 → 你是什么生物钟类型？',
      '生物鐘分析：中間平衡型 🌤️ 據說50%的人都是這種類型…最靈活的生活節律，原來最常見的是這個 → 你是什麼生物鐘類型？',
      'Phân tích chronotype: kiểu cân bằng trung gian 🌤️ Hóa ra 50% dân số thuộc type này... nhịp sinh học linh hoạt nhất. Thú vị là đây lại phổ biến nhất → bạn thuộc chronotype nào?',
      'Analisis chronotype: tipe tengah seimbang 🌤️ Ternyata 50% populasi tipe ini... ritme biologis paling fleksibel. Seru banget kalau ini yang paling umum → kamu chronotype apa?'
    ),
  },
  {
    type: 'Type4',
    emoji: '🌆',
    title: M(
      '오후부터 엔진 켜지는, 저녁 선호형',
      'Engine starts in the afternoon — evening-leaning type',
      '午後からエンジンがかかる、夜型寄りタイプ',
      '下午才启动引擎，偏晚型',
      '下午才啟動引擎，偏晚型',
      'Chiều mới bật động cơ — thiên về buổi tối',
      'Mesin nyala dari sore — cenderung tipe malam'
    ),
    shortDescription: M(
      '"당신의 뇌는 오후부터 본격적으로 작동합니다. 오전의 낮은 효율은 의지력 문제가 아닙니다."',
      '"Your brain really kicks in from the afternoon onward. Low morning efficiency is not a willpower problem."',
      '"あなたの脳は午後から本格的に動き出します。午前の低い効率は意志力の問題ではありません。"',
      '"你的大脑从下午才开始真正运转。上午效率低不是意志力的问题。"',
      '"你的大腦從下午才開始真正運轉。上午效率低不是意志力的問題。"',
      '"Não của bạn thực sự hoạt động mạnh từ chiều trở đi. Hiệu suất thấp buổi sáng không phải do thiếu ý chí."',
      '"Otakmu baru benar-benar jalan dari sore. Efisiensi pagi yang rendah bukan masalah tekad."'
    ),
    description: M(
      '전체 인구의 약 25%에 해당하는 저녁형 경향 타입입니다. 오전에는 완전히 깨어나는 데 시간이 걸리지만 오후부터 서서히 에너지가 올라와 오후 3~8시에 정점에 달하는 패턴입니다. 9시~6시 표준 스케줄과 가장 맞지 않아 사회적 피로가 쌓이기 쉬운 타입입니다.',
      'You are an evening-leaning chronotype, making up about 25% of the population. It takes time to fully wake up in the morning, but energy rises from the afternoon and peaks between 3 and 8 PM. This type clashes most with the standard 9-to-6 schedule and is prone to social fatigue.',
      '人口の約25%に当たる夜型寄りタイプです。午前中は完全に目覚めるまで時間がかかりますが、午後から徐々にエネルギーが上がり、午後3〜8時にピークに達します。9時〜18時の標準スケジュールと最も合わず、社会的疲労がたまりやすいタイプです。',
      '你属于约占人口25%的偏晚型。上午需要更久才能完全清醒，但下午起精力逐渐上升，并在下午3~8点达到顶峰。这种类型最不符合9点到6点的标准作息，容易积累社会性疲劳。',
      '你屬於約占人口25%的偏晚型。上午需要更久才能完全清醒，但下午起精力逐漸上升，並在下午3~8點達到頂峰。這種類型最不符合9點到6點的標準作息，容易累積社會性疲勞。',
      'Bạn thuộc chronotype thiên về buổi tối, chiếm khoảng 25% dân số. Buổi sáng cần thời gian để tỉnh hoàn toàn, nhưng năng lượng tăng từ chiều và đạt đỉnh 15–20 giờ. Type này ít hợp lịch 9–18 giờ nhất và dễ tích tụ mệt mỏi xã hội.',
      'Kamu chronotype cenderung malam, sekitar 25% populasi. Pagi butuh waktu buat benar-benar sadar, tapi energi naik dari sore dan puncak jam 3–8 sore. Tipe ini paling bentrok dengan jadwal 9–6 dan gampang kena social fatigue.'
    ),
    chronotypeLabel: M(
      '저녁 선호형 🌆',
      'Evening-leaning type 🌆',
      '夜型寄りタイプ 🌆',
      '偏晚型 🌆',
      '偏晚型 🌆',
      'Thiên về buổi tối 🌆',
      'Cenderung tipe malam 🌆'
    ),
    energyPeak: M(
      '오후 4~8시',
      '4–8 PM',
      '午後4〜8時',
      '下午4~8点',
      '下午4~8點',
      '16–20 giờ',
      '16.00–20.00'
    ),
    focusPeak: M(
      '오후 4~7시',
      '4–7 PM',
      '午後4〜7時',
      '下午4~7点',
      '下午4~7點',
      '16–19 giờ',
      '16.00–19.00'
    ),
    naturalSleep: M(
      '자정~오전 1시',
      'Midnight–1 AM',
      '深夜0時〜午前1時',
      '午夜~凌晨1点',
      '午夜~凌晨1點',
      'Nửa đêm–1 giờ sáng',
      'Tengah malam–01.00'
    ),
    naturalWake: M(
      '오전 8~9시',
      '8–9 AM',
      '午前8〜9時',
      '早上8~9点',
      '早上8~9點',
      '8–9 giờ sáng',
      '08.00–09.00'
    ),
    optimalSchedule: M(
      '· 오전 9~11시: 루틴 업무·이메일 처리 (뇌 워밍업)\n· 오후 12~2시: 회의·소통·협업\n· 오후 3~6시: 집중력이 필요한 핵심 업무·창의적 작업\n· 오후 6시 이후: 저녁 생산성 활용 또는 개인 프로젝트',
      '· 9–11 AM: Routine tasks and email (brain warm-up)\n· 12–2 PM: Meetings, communication, collaboration\n· 3–6 PM: Core and creative work that needs focus\n· After 6 PM: Use evening productivity or personal projects',
      '· 午前9〜11時：ルーティン業務・メール処理（脳ウォームアップ）\n· 午後12〜2時：会議・コミュニケーション・協働\n· 午後3〜6時：集中力が必要な中核業務・創造的作業\n· 午後6時以降：夜の生産性活用または個人プロジェクト',
      '· 上午9~11点：常规事务、处理邮件（大脑热身）\n· 中午12~2点：会议、沟通、协作\n· 下午3~6点：需要专注的核心与创意工作\n· 下午6点后：利用晚间效率或个人项目',
      '· 上午9~11點：常規事務、處理郵件（大腦熱身）\n· 中午12~2點：會議、溝通、協作\n· 下午3~6點：需要專注的核心與創意工作\n· 下午6點後：利用晚間效率或個人專案',
      '· 9–11 giờ sáng: Việc thường ngày, email (khởi động não)\n· 12–14 giờ: Họp, giao tiếp, cộng tác\n· 15–18 giờ: Công việc cốt lõi và sáng tạo cần tập trung\n· Sau 18 giờ: Tận dụng năng suất buổi tối hoặc dự án cá nhân',
      '· 09.00–11.00: Rutinitas dan email (warm-up otak)\n· 12.00–14.00: Meeting, komunikasi, kolaborasi\n· 15.00–18.00: Pekerjaan inti dan kreatif butuh fokus\n· Setelah 18.00: Manfaatkan produktivitas malam atau proyek pribadi'
    ),
    strength: M(
      '오후~저녁 시간대의 높은 집중력·창의성. 야간 작업 효율이 높음',
      'Strong focus and creativity in the afternoon and evening. High efficiency for night work',
      '午後〜夜の時間帯の高い集中力・創造性。夜間作業の効率が高い',
      '下午到晚间专注力和创造力较高。夜间工作效率也高',
      '下午到晚間專注力和創造力較高。夜間工作效率也高',
      'Tập trung và sáng tạo cao buổi chiều–tối. Hiệu quả làm việc ban đêm tốt',
      'Fokus dan kreativitas tinggi sore–malam. Efisiensi kerja malam juga bagus'
    ),
    weakness: M(
      '오전 일찍 시작하는 회의·수업·업무에서 만성적 성과 저하',
      'Chronic underperformance in early-morning meetings, classes, and work',
      '午前早く始まる会議・授業・業務で慢性的な成果低下',
      '在早上较早开始的会议、课程和工作中，长期表现偏低',
      '在早上較早開始的會議、課程和工作中，長期表現偏低',
      'Hiệu suất kém mãn tính ở họp, lớp học và công việc bắt đầu sớm buổi sáng',
      'Performa menurun kronis di meeting, kelas, dan kerja yang mulai pagi-pagi'
    ),
    famousPeople: M('', '', '', '', '', '', ''),
    socialJetLag: M(
      '9시 출근을 맞추기 위해 억지로 일찍 자고 일찍 일어나는 패턴이 반복되면 만성 피로가 쌓임',
      'Forcing yourself to sleep and wake early to make a 9 AM start can build chronic fatigue over time',
      '9時出勤に合わせて無理に早く寝て早く起きるパターンが続くと、慢性的な疲労がたまる',
      '为了配合9点上班而强行早睡早起，长期下来会积累慢性疲劳',
      '為了配合9點上班而強行早睡早起，長期下來會累積慢性疲勞',
      'Cố ngủ sớm và dậy sớm để kịp đi làm lúc 9 giờ lặp đi lặp lại sẽ tích tụ mệt mỏi mãn tính',
      'Memaksa tidur dan bangun lebih awal buat masuk jam 9 berulang-ulang bisa menumpuk kelelahan kronis'
    ),
    scientificFact: M('', '', '', '', '', '', ''),
    chronotypeTip: M(
      '가능하다면 중요한 회의를 오후로 조정하고, 오전은 가벼운 워밍업 업무로 시작하세요. 오전 스케줄 변경이 불가하다면 기상 후 빛 노출을 늘려 생체 시계를 앞당기는 훈련이 도움됩니다',
      'If possible, move important meetings to the afternoon and start mornings with light warm-up tasks. If mornings cannot change, more light exposure after waking can help shift your body clock earlier',
      '可能なら重要な会議を午後に調整し、午前は軽いウォームアップ業務から始めましょう。午前のスケジュール変更が難しいなら、起床後の光曝露を増やして体内時計を前にずらす訓練が役立ちます',
      '如果可能，把重要会议调到下午，上午先从轻松的预热工作开始。若无法改变上午安排，可在起床后增加光照，帮助把生物钟往前调',
      '如果可能，把重要會議調到下午，上午先從輕鬆的預熱工作開始。若無法改變上午安排，可在起床後增加光照，幫助把生物鐘往前調',
      'Nếu có thể, chuyển họp quan trọng sang chiều và bắt đầu buổi sáng bằng việc nhẹ để khởi động. Nếu không đổi được lịch sáng, tăng tiếp xúc ánh sáng sau khi dậy có thể giúp đẩy nhịp sinh học sớm hơn',
      'Kalau bisa, pindahkan meeting penting ke sore dan mulai pagi dengan pekerjaan ringan sebagai warm-up. Kalau jadwal pagi nggak bisa diubah, lebih banyak cahaya setelah bangun bisa bantu geser jam biologis lebih awal'
    ),
    shareSnippet: M(
      '크로노타입 분석: 저녁 선호형 🌆 오전에 멍한 거 의지력 문제 아니었음... 생체 리듬이 그렇대 → 이거 상사한테 보여주고 싶다 ㅋㅋ → 너는 어떤 크로노타입이야?',
      'Chronotype check: evening-leaning type 🌆 Morning brain fog was NOT a willpower issue... it is my body clock lol → kinda want to show this to my boss → what chronotype are you?',
      'クロノタイプ分析：夜型寄りタイプ 🌆 午前のボーッとしてるのは意志力の問題じゃなかった…体内リズムのせいらしい → 上司に見せたい 笑 → あなたはどのクロノタイプ？',
      '生物钟分析：偏晚型 🌆 原来上午发懵不是意志力问题…是生物钟在作怪 → 想发给老板看看哈哈 → 你是什么生物钟类型？',
      '生物鐘分析：偏晚型 🌆 原來上午發懵不是意志力問題…是生物鐘在作怪 → 想發給老闆看看哈哈 → 你是什麼生物鐘類型？',
      'Phân tích chronotype: thiên về buổi tối 🌆 Hóa ra buổi sáng ngơ ngác không phải do thiếu ý chí... là do nhịp sinh học → muốn gửi cho sếp xem cười chết → bạn thuộc chronotype nào?',
      'Analisis chronotype: cenderung tipe malam 🌆 Ternyata pagi melamun bukan masalah tekad... memang jam biologisnya begitu lol → pengen tunjukkin ke bos → kamu chronotype apa?'
    ),
  },
  {
    type: 'Type5',
    emoji: '🌙',
    title: M(
      '밤이 되어야 살아나는, 전형적 저녁형',
      'Comes alive at night — classic evening type',
      '夜になって初めて生き返る、典型的ナイトオウル',
      '要到晚上才活过来，典型晚型人',
      '要到晚上才活過來，典型晚型人',
      'Ban đêm mới thực sự sống dậy — kiểu tối điển hình',
      'Baru hidup saat malam — tipe malam klasik'
    ),
    shortDescription: M(
      '"당신의 뇌는 저녁에 비로소 완전히 깨어납니다. 밤의 고요함이 당신을 가장 빛나게 합니다."',
      '"Your brain only fully wakes up in the evening. The quiet of night is when you shine brightest."',
      '"あなたの脳は夜になって初めて完全に目覚めます。夜の静けさがあなたを最も輝かせます。"',
      '"你的大脑要到晚上才会完全清醒。夜晚的安静让你最发光。"',
      '"你的大腦要到晚上才會完全清醒。夜晚的安靜讓你最發光。"',
      '"Não của bạn chỉ thực sự tỉnh hoàn toàn vào buổi tối. Sự yên tĩnh của đêm khiến bạn tỏa sáng nhất."',
      '"Otakmu baru benar-benar sadar di malam hari. Ketenangan malam yang bikin kamu paling bersinar."'
    ),
    description: M(
      '전체 인구의 약 20~25%에 해당하는 전형적 저녁형입니다. 오전은 최악의 컨디션이고 오후 늦게부터 저녁 사이에 에너지와 집중력이 정점에 달합니다. 사회 표준 스케줄과의 충돌이 가장 큰 크로노타입으로, 이 유형의 많은 사람들이 불필요한 자책을 하며 살아갑니다.',
      'You are a classic evening type, making up about 20–25% of the population. Mornings are your worst window, while energy and focus peak from late afternoon into the evening. This chronotype clashes hardest with standard schedules, and many people with this type blame themselves unnecessarily.',
      '人口の約20〜25%に当たる典型的なナイトオウルです。午前中は最悪のコンディションで、午後遅くから夜にかけてエネルギーと集中力が最高潮に達します。社会標準スケジュールとの衝突が最も大きいクロノタイプで、このタイプの多くの人が不必要に自分を責めながら生きています。',
      '你属于约占人口20~25%的典型晚型人。上午状态最差，而精力与专注力会在下午晚些时候到晚间达到顶峰。这种生物钟与社会标准作息冲突最大，很多这类人会不必要地责怪自己。',
      '你屬於約占人口20~25%的典型晚型人。上午狀態最差，而精力與專注力會在下午晚些時候到晚間達到頂峰。這種生物鐘與社會標準作息衝突最大，很多這類人會不必要地責怪自己。',
      'Bạn là kiểu buổi tối điển hình, chiếm khoảng 20–25% dân số. Buổi sáng là thời điểm tệ nhất, còn năng lượng và tập trung đạt đỉnh từ cuối chiều đến tối. Chronotype này xung đột mạnh nhất với lịch chuẩn, và nhiều người thuộc type này tự trách không cần thiết.',
      'Kamu tipe malam klasik, sekitar 20–25% populasi. Pagi adalah window terburuk, sementara energi dan fokus puncak dari sore akhir sampai malam. Chronotype ini paling bentrok dengan jadwal standar, dan banyak yang tipe ini menyalahkan diri sendiri tanpa perlu.'
    ),
    chronotypeLabel: M(
      '전형적 저녁형 🌙',
      'Classic evening type 🌙',
      '典型的ナイトオウル 🌙',
      '典型晚型 🌙',
      '典型晚型 🌙',
      'Kiểu tối điển hình 🌙',
      'Tipe malam klasik 🌙'
    ),
    energyPeak: M(
      '오후 7시~자정',
      '7 PM–midnight',
      '午後7時〜深夜0時',
      '下午7点~午夜',
      '下午7點~午夜',
      '19 giờ–nửa đêm',
      '19.00–tengah malam'
    ),
    focusPeak: M(
      '오후 8~11시',
      '8–11 PM',
      '午後8〜11時',
      '晚上8~11点',
      '晚上8~11點',
      '20–23 giờ',
      '20.00–23.00'
    ),
    naturalSleep: M(
      '오전 1~2시',
      '1–2 AM',
      '午前1〜2時',
      '凌晨1~2点',
      '凌晨1~2點',
      '1–2 giờ sáng',
      '01.00–02.00'
    ),
    naturalWake: M(
      '오전 9~10시',
      '9–10 AM',
      '午前9〜10時',
      '早上9~10点',
      '早上9~10點',
      '9–10 giờ sáng',
      '09.00–10.00'
    ),
    optimalSchedule: M(
      '· 오전 9~12시: 루틴 업무만. 창의·집중 업무 절대 배치 금지\n· 오후 12~3시: 소통·회의·협업 (그나마 에너지가 올라오는 시간)\n· 오후 4~7시: 집중력이 필요한 업무 시작\n· 오후 7~11시: 창의적 작업·개인 프로젝트 황금 시간',
      '· 9 AM–12 PM: Routine tasks only. Do not schedule creative or deep-focus work\n· 12–3 PM: Communication, meetings, collaboration (when energy starts rising)\n· 4–7 PM: Begin work that needs focus\n· 7–11 PM: Golden time for creative work and personal projects',
      '· 午前9〜12時：ルーティン業務のみ。創造・集中業務は絶対に配置しない\n· 午後12〜3時：コミュニケーション・会議・協働（なんとかエネルギーが上がる時間）\n· 午後4〜7時：集中力が必要な業務を開始\n· 午後7〜11時：創造的作業・個人プロジェクトのゴールデンタイム',
      '· 上午9~12点：只做常规事务，绝不安排创意或深度专注工作\n· 中午12~3点：沟通、会议、协作（精力刚开始回升）\n· 下午4~7点：开始需要专注的工作\n· 晚上7~11点：创意工作与个人项目的黄金时间',
      '· 上午9~12點：只做常規事務，絕不安排創意或深度專注工作\n· 中午12~3點：溝通、會議、協作（精力剛開始回升）\n· 下午4~7點：開始需要專注的工作\n· 晚上7~11點：創意工作與個人專案的黃金時間',
      '· 9–12 giờ sáng: Chỉ việc thường ngày. Tuyệt đối không xếp việc sáng tạo hoặc cần tập trung sâu\n· 12–15 giờ: Giao tiếp, họp, cộng tác (lúc năng lượng bắt đầu lên)\n· 16–19 giờ: Bắt đầu công việc cần tập trung\n· 19–23 giờ: Giờ vàng cho công việc sáng tạo và dự án cá nhân',
      '· 09.00–12.00: Rutinitas saja. Jangan taruh pekerjaan kreatif atau fokus dalam\n· 12.00–15.00: Komunikasi, meeting, kolaborasi (energi mulai naik)\n· 16.00–19.00: Mulai pekerjaan butuh fokus\n· 19.00–23.00: Golden time untuk pekerjaan kreatif dan proyek pribadi'
    ),
    strength: M(
      '밤의 높은 집중력과 창의성. 조용한 환경에서 깊은 사고력 발휘',
      'High focus and creativity at night. Deep thinking thrives in quiet environments',
      '夜の高い集中力と創造性。静かな環境で深い思考力を発揮',
      '夜间专注力和创造力高。在安静环境中能进行深度思考',
      '夜間專注力和創造力高。在安靜環境中能進行深度思考',
      'Tập trung và sáng tạo cao ban đêm. Suy nghĩ sâu tốt trong môi trường yên tĩnh',
      'Fokus dan kreativitas tinggi di malam hari. Berpikir dalam kuat di lingkungan tenang'
    ),
    weakness: M(
      '사회적 시차증 누적. 만성적 수면 부채. 오전 업무 효율 최저',
      'Social jet lag buildup, chronic sleep debt, and lowest morning work efficiency',
      '社会的時差ボケの蓄積。慢性的な睡眠負債。午前業務の効率が最低',
      '容易积累社会性时差。慢性睡眠负债。上午工作效率最低',
      '容易累積社會性時差。慢性睡眠負債。上午工作效率最低',
      'Tích tụ social jet lag. Nợ giấc ngủ mãn tính. Hiệu suất công việc buổi sáng thấp nhất',
      'Social jet lag menumpuk. Utang tidur kronis. Efisiensi kerja pagi paling rendah'
    ),
    famousPeople: M(
      '찰스 다윈·마르셀 프루스트·조앤 K. 롤링',
      'Charles Darwin · Marcel Proust · J.K. Rowling',
      'チャールズ・ダーウィン・マルセル・プルースト・J・K・ローリング',
      '查尔斯·达尔文 · 马塞尔·普鲁斯特 · J.K.罗琳',
      '查爾斯·達爾文 · 馬塞爾·普魯斯特 · J.K.羅琳',
      'Charles Darwin · Marcel Proust · J.K. Rowling',
      'Charles Darwin · Marcel Proust · J.K. Rowling'
    ),
    socialJetLag: M('', '', '', '', '', '', ''),
    scientificFact: M('', '', '', '', '', '', ''),
    chronotypeTip: M(
      '재택·유연근무가 가능하다면 이 크로노타입에 맞는 스케줄을 적극 활용하세요. 아침 햇빛 노출과 규칙적 식사로 생체 시계를 조금씩 앞당기는 것도 방법입니다',
      'If remote or flexible work is possible, actively use a schedule that fits this chronotype. Morning sunlight and regular meals can also help shift your body clock slightly earlier',
      '在宅・フレックス勤務が可能なら、このクロノタイプに合ったスケジュールを積極的に活用しましょう。朝の日光曝露と規則的な食事で体内時計を少しずつ前にずらす方法もあります',
      '如果可以远程或弹性办公，请积极使用符合这种生物钟的作息。通过早晨晒太阳和规律饮食，也可以逐步把生物钟往前调',
      '如果可以遠端或彈性辦公，請積極使用符合這種生物鐘的作息。透過早晨曬太陽和規律飲食，也可以逐步把生物鐘往前調',
      'Nếu có thể làm việc từ xa hoặc linh hoạt, hãy tận dụng lịch trình phù hợp chronotype này. Tiếp xúc ánh nắng buổi sáng và ăn uống đều cũng giúp đẩy nhịp sinh học sớm hơn từng chút',
      'Kalau bisa WFH atau fleksibel, manfaatkan jadwal yang cocok dengan chronotype ini. Paparan sinar pagi dan makan teratur juga bisa bantu geser jam biologis sedikit lebih awal'
    ),
    shareSnippet: M(
      '크로노타입 분석: 전형적 저녁형 🌙 밤 8~11시 집중력 정점이래... 9시 출근이 왜 항상 힘들었는지 이해됨 ㅋㅋ → 너는 어떤 크로노타입이야?',
      'Chronotype check: classic evening type 🌙 Peak focus is 8–11 PM... now I get why 9 AM starts always felt brutal lol → what chronotype are you?',
      'クロノタイプ分析：典型的ナイトオウル 🌙 夜8〜11時が集中力ピークらしい…9時出勤がいつもキツかった理由が分かった 笑 → あなたはどのクロノタイプ？',
      '生物钟分析：典型晚型 🌙 晚上8~11点是专注力巅峰…终于懂为什么9点上班总那么痛苦了哈哈 → 你是什么生物钟类型？',
      '生物鐘分析：典型晚型 🌙 晚上8~11點是專注力巔峰…終於懂為什麼9點上班總那麼痛苦了哈哈 → 你是什麼生物鐘類型？',
      'Phân tích chronotype: kiểu tối điển hình 🌙 20–23 giờ là đỉnh tập trung... giờ mới hiểu vì sao đi làm 9 giờ lúc nào cũng mệt lol → bạn thuộc chronotype nào?',
      'Analisis chronotype: tipe malam klasik 🌙 Fokus puncak jam 8–11 malam... akhirnya paham kenapa masuk jam 9 selalu berat lol → kamu chronotype apa?'
    ),
  },
  {
    type: 'Type6',
    emoji: '🌑',
    title: M(
      '새벽이 가장 빛나는, 극강 저녁형',
      'Shines brightest at dawn — extreme evening type',
      '明け方が最も輝く、超強力ナイトオウル',
      '凌晨最发光，极致晚型人',
      '凌晨最發光，極致晚型人',
      'Rạng sáng mới tỏa sáng nhất — kiểu cực tối',
      'Paling bersinar di dini hari — tipe malam ekstrem'
    ),
    shortDescription: M(
      '"당신은 생체 시계가 가장 뒤로 당겨진 극강 저녁형입니다. 세상이 잠든 시간에 당신은 빛납니다."',
      '"Your body clock is shifted later than most — you are an extreme evening type. You shine while the world sleeps."',
      '"あなたは体内時計が最も後ろにずれた超強力ナイトオウルです。世界が眠る時間にあなたは輝きます。"',
      '"你的生物钟比大多数人更晚，是极致晚型人。世界沉睡时，你反而最发光。"',
      '"你的生理時鐘比大多數人更晚，是極致晚型人。世界沉睡時，你反而最發光。"',
      '"Nhịp sinh học của bạn muộn hơn hầu hết mọi người — bạn là kiểu cực tối. Bạn tỏa sáng khi cả thế giới đang ngủ."',
      '"Jam biologismu paling mundur dari kebanyakan orang — kamu tipe malam ekstrem. Kamu bersinar saat dunia tidur."'
    ),
    description: M(
      '전체 인구의 약 10~15%에 해당하는 강한 저녁형입니다. 오전은 사실상 기능이 거의 없고 새벽 늦게까지 깨어있는 것이 자연스럽습니다. 학교·직장의 오전 스케줄과 가장 충돌하는 타입으로, 이 유형은 게으름이 아니라 유전적 크로노타입의 차이입니다.',
      'You are a strong evening type, making up about 10–15% of the population. Mornings are barely functional, and staying awake late into the night feels natural. This type clashes hardest with school and workplace morning schedules — it is genetics, not laziness.',
      '人口の約10〜15%に当たる強いナイトオウルです。午前中は事実上ほとんど機能せず、深夜遅くまで起きているのが自然です。学校・職場の午前スケジュールと最も衝突するタイプで、このタイプは怠けではなく遺伝的クロノタイプの違いです。',
      '你属于约占人口10~15%的强晚型人。上午几乎无法正常工作，而熬夜到很晚却很自然。这种类型与学校、职场的上午作息冲突最大，这不是懒惰，而是基因决定的生物钟差异。',
      '你屬於約占人口10~15%的強晚型人。上午幾乎無法正常工作，而熬夜到很晚卻很自然。這種類型與學校、職場的上午作息衝突最大，這不是懶惰，而是基因決定的生物鐘差異。',
      'Bạn là kiểu buổi tối mạnh, chiếm khoảng 10–15% dân số. Buổi sáng gần như không hoạt động hiệu quả, còn thức khuya đến sáng sớm lại rất tự nhiên. Type này xung đột mạnh nhất với lịch sáng ở trường và công sở — đây là gen, không phải lười.',
      'Kamu tipe malam kuat, sekitar 10–15% populasi. Pagi hampir nggak fungsional, sementara begadang sampai dini hari terasa natural. Tipe ini paling bentrok dengan jadwal pagi sekolah dan kantor — ini genetik, bukan malas.'
    ),
    chronotypeLabel: M(
      '극강 저녁형 🌑',
      'Extreme evening type 🌑',
      '超強力ナイトオウル 🌑',
      '极致晚型 🌑',
      '極致晚型 🌑',
      'Kiểu cực tối 🌑',
      'Tipe malam ekstrem 🌑'
    ),
    energyPeak: M(
      '오후 10시~새벽 2시',
      '10 PM–2 AM',
      '午後10時〜深夜2時',
      '晚上10点~凌晨2点',
      '晚上10點~凌晨2點',
      '22 giờ–2 giờ sáng',
      '22.00–02.00'
    ),
    focusPeak: M(
      '밤 11시~새벽 1시',
      '11 PM–1 AM',
      '夜11時〜深夜1時',
      '晚上11点~凌晨1点',
      '晚上11點~凌晨1點',
      '23 giờ–1 giờ sáng',
      '23.00–01.00'
    ),
    naturalSleep: M(
      '새벽 2~4시',
      '2–4 AM',
      '深夜2〜4時',
      '凌晨2~4点',
      '凌晨2~4點',
      '2–4 giờ sáng',
      '02.00–04.00'
    ),
    naturalWake: M(
      '오전 10~11시',
      '10–11 AM',
      '午前10〜11時',
      '早上10~11点',
      '早上10~11點',
      '10–11 giờ sáng',
      '10.00–11.00'
    ),
    optimalSchedule: M(
      '· 오전 9~12시: 최소한의 루틴만. 사실상 워밍업 불가 시간\n· 오후 2~5시: 그나마 가능한 소통·회의 시간\n· 오후 6~9시: 서서히 엔진 켜지는 시간\n· 오후 9시~새벽: 창의적 작업·집중 업무 황금 시간',
      '· 9 AM–12 PM: Minimal routine only. Basically no warm-up window\n· 2–5 PM: The best time you can manage for communication and meetings\n· 6–9 PM: When your engine slowly turns on\n· 9 PM–early morning: Golden time for creative and focused work',
      '· 午前9〜12時：最小限のルーティンのみ。事実上ウォームアップ不可\n· 午後2〜5時：なんとか可能なコミュニケーション・会議時間\n· 午後6〜9時：徐々にエンジンがかかる時間\n· 午後9時〜明け方：創造的作業・集中業務のゴールデンタイム',
      '· 上午9~12点：只做最少常规事务，几乎无法热身\n· 下午2~5点：勉强能进行沟通、会议的时间\n· 下午6~9点：引擎慢慢启动的时段\n· 晚上9点~凌晨：创意与深度专注工作的黄金时间',
      '· 上午9~12點：只做最少常規事務，幾乎無法熱身\n· 下午2~5點：勉強能進行溝通、會議的時間\n· 下午6~9點：引擎慢慢啟動的時段\n· 晚上9點~凌晨：創意與深度專注工作的黃金時間',
      '· 9–12 giờ sáng: Chỉ việc thường ngày tối thiểu. Gần như không thể khởi động\n· 14–17 giờ: Thời gian giao tiếp, họp tương đối khả thi\n· 18–21 giờ: Lúc động cơ bắt đầu bật dần\n· 21 giờ–sáng sớm: Giờ vàng cho công việc sáng tạo và tập trung sâu',
      '· 09.00–12.00: Rutinitas minimal saja. Hampir nggak ada window warm-up\n· 14.00–17.00: Waktu komunikasi dan meeting paling masih bisa\n· 18.00–21.00: Mesin mulai nyala perlahan\n· 21.00–dini hari: Golden time untuk pekerjaan kreatif dan fokus dalam'
    ),
    strength: M(
      '밤의 극도로 높은 집중력·창의성·독창적 사고',
      'Extremely high focus, creativity, and original thinking at night',
      '夜の極めて高い集中力・創造性・独創的思考',
      '夜间拥有极高的专注力、创造力和原创思维',
      '夜間擁有極高的專注力、創造力和原創思維',
      'Tập trung, sáng tạo và tư duy độc đáo cực cao ban đêm',
      'Fokus, kreativitas, dan berpikir orisinal super tinggi di malam hari'
    ),
    weakness: M(
      '사회적 스케줄과의 심각한 충돌. 만성 수면 부채로 인한 건강 문제',
      'Serious conflict with social schedules and health issues from chronic sleep debt',
      '社会スケジュールとの深刻な衝突。慢性的な睡眠負債による健康問題',
      '与社会作息严重冲突，慢性睡眠负债可能带来健康问题',
      '與社會作息嚴重衝突，慢性睡眠負債可能帶來健康問題',
      'Xung đột nghiêm trọng với lịch xã hội. Vấn đề sức khỏe do nợ giấc ngủ mãn tính',
      'Bentrok parah dengan jadwal sosial. Masalah kesehatan akibat utang tidur kronis'
    ),
    famousPeople: M(
      '윈스턴 처칠(새벽 3시까지 작업)·마르셀 프루스트',
      'Winston Churchill (worked until 3 AM) · Marcel Proust',
      'ウィンストン・チャーチル（深夜3時まで作業）・マルセル・プルースト',
      '温斯顿·丘吉尔（工作到凌晨3点）· 马塞尔·普鲁斯特',
      '溫斯頓·邱吉爾（工作到凌晨3點）· 馬塞爾·普魯斯特',
      'Winston Churchill (làm việc đến 3 giờ sáng) · Marcel Proust',
      'Winston Churchill (kerja sampai jam 3 pagi) · Marcel Proust'
    ),
    socialJetLag: M('', '', '', '', '', '', ''),
    scientificFact: M(
      '극강 저녁형은 단순한 습관이 아닌 DSPD(지연성 수면 위상 증후군)와 관련될 수 있음. 심각한 경우 수면 전문가 상담 권장',
      'Extreme evening types may be linked to DSPD (Delayed Sleep Phase Disorder), not just habit. Consult a sleep specialist if symptoms are severe',
      '超強力ナイトオウルは単なる習慣ではなく、DSPD（睡眠時相後退症候群）と関連する可能性があります。深刻な場合は睡眠専門家への相談をおすすめします',
      '极致晚型可能不只是习惯问题，而与DSPD（延迟睡眠相位综合征）有关。若情况严重，建议咨询睡眠专家',
      '極致晚型可能不只是習慣問題，而與DSPD（延遲睡眠相位綜合徵）有關。若情況嚴重，建議諮詢睡眠專家',
      'Kiểu cực tối có thể liên quan đến DSPD (Rối loạn pha giấc ngủ trễ), không chỉ là thói quen. Nếu nghiêm trọng nên gặp chuyên gia giấc ngủ',
      'Tipe malam ekstrem bisa terkait DSPD (Delayed Sleep Phase Disorder), bukan cuma kebiasaan. Kalau parah, disarankan konsultasi spesialis tidur'
    ),
    chronotypeTip: M(
      '가능하다면 프리랜서·재택·야간 근무 등 크로노타입에 맞는 직업 환경을 탐색하세요. 빛 치료와 멜라토닌 복용이 생체 시계를 앞당기는 데 도움이 될 수 있습니다',
      'If possible, explore work environments that fit your chronotype, such as freelancing, remote work, or night shifts. Light therapy and melatonin may help shift your body clock earlier',
      '可能なら、フリーランス・在宅・夜勤などクロノタイプに合った職場環境を探しましょう。光療法とメラトニン摂取が体内時計を前にずらす助けになることがあります',
      '如果可能，尝试寻找符合这种生物钟的工作环境，如自由职业、远程办公或夜班。光疗和褪黑素也可能帮助把生物钟往前调',
      '如果可能，嘗試尋找符合這種生物鐘的工作環境，如自由職業、遠端辦公或夜班。光療和褪黑激素也可能幫助把生物鐘往前調',
      'Nếu có thể, hãy tìm môi trường làm việc phù hợp chronotype như freelance, làm từ xa hoặc ca đêm. Liệu pháp ánh sáng và melatonin có thể giúp đẩy nhịp sinh học sớm hơn',
      'Kalau bisa, cari lingkungan kerja yang cocok seperti freelance, WFH, atau shift malam. Terapi cahaya dan melatonin bisa bantu geser jam biologis lebih awal'
    ),
    shareSnippet: M(
      '크로노타입 분석: 극강 저녁형 🌑 새벽 1시 집중력 정점. 이게 유전자 문제래... 게으름이 아니었음 ㅋㅋㅋ → 너는 어떤 크로노타입이야?',
      'Chronotype check: extreme evening type 🌑 Peak focus at 1 AM. Apparently it is genetic... so I was NOT lazy lol → what chronotype are you?',
      'クロノタイプ分析：超強力ナイトオウル 🌑 深夜1時が集中力ピーク。遺伝子の問題らしい…怠けてたわけじゃなかった 笑 → あなたはどのクロノタイプ？',
      '生物钟分析：极致晚型 🌑 凌晨1点是专注力巅峰，原来是基因问题…不是懒啊哈哈哈 → 你是什么生物钟类型？',
      '生物鐘分析：極致晚型 🌑 凌晨1點是專注力巔峰，原來是基因問題…不是懶啊哈哈哈 → 你是什麼生物鐘類型？',
      'Phân tích chronotype: kiểu cực tối 🌑 1 giờ sáng là đỉnh tập trung. Hóa ra là do gen... không phải do lười lol → bạn thuộc chronotype nào?',
      'Analisis chronotype: tipe malam ekstrem 🌑 Fokus puncak jam 1 pagi. Ternyata masalah genetik... jadi bukan malas lol → kamu chronotype apa?'
    ),
  },
];
