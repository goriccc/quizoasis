/** 우리 커플 궁합 케미 분석 — 12문항 4지선다 A=0 B=1 C=2 D=3, 개인 6유형 + 커플 조합 21가지 */

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

export interface Phase3CoupleChemistryQuestion {
  id: number;
  question: Record<string, string>;
  options: { text: Record<string, string>; score: number }[];
}

export interface Phase3CoupleChemistryIndividualResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  tagline: Record<string, string>;
  description: Record<string, string>;
  keywords: Record<string, string>;
  loveLanguage: Record<string, string>;
  give: Record<string, string>;
  want: Record<string, string>;
  strength: Record<string, string>;
  weakness: Record<string, string>;
  goodPartner: Record<string, string>;
  cautionPartner: Record<string, string>;
}

export type CoupleGrade = 'S' | 'A' | 'B' | 'C';

export interface Phase3CoupleChemistryPairResult {
  pairKey: string;
  grade: CoupleGrade;
  emojiPair: string;
  title: Record<string, string>;
  summary: Record<string, string>;
  matchPoint: Record<string, string>;
  clashPoint: Record<string, string>;
  longTerm?: Record<string, string>;
  overcome?: Record<string, string>;
  oneLiner: Record<string, string>;
}

export const phase3CoupleChemistryQuestions: Phase3CoupleChemistryQuestion[] = [
  {
    id: 1,
    question: M(
      '상대방이 힘들 때 나는 어떻게 반응하나요?',
      'When your partner is struggling, how do you react?',
      '相手がつらいとき、あなたはどう反応しますか？',
      '对方难过时，你会如何反应？',
      '對方難過時，你會如何反應？',
      'Khi người yêu đang khó khăn, bạn phản ứng thế nào?',
      'Saat pasangan sedang sulit, kamu bereaksi bagaimana?'
    ),
    options: [
      {
        text: M(
          '바로 달려가거나 연락한다. 힘든 사람을 두고 가만있지 못한다',
          'I reach out or go to them right away—I can’t leave someone hurting alone.',
          'すぐ駆けつけるか連絡する。つらい人を放っておけない。',
          '会立刻赶去或联系。无法放着难过的人不管。',
          '會立刻趕去或聯絡。無法放著難過的人不管。',
          'Chạy đến hoặc nhắn ngay—không để người đau một mình.',
          'Langsung datang atau hubungi—tidak bisa membiarkan pasangan sedih sendirian.'
        ),
        score: 0,
      },
      {
        text: M(
          '옆에서 묵묵히 있어준다. 말보다 존재가 위로라고 생각한다',
          'I stay quietly beside them—I believe presence comforts more than words.',
          'そばで黙って寄り添う。言葉より存在が慰めだと思う。',
          '默默陪在身边。觉得陪伴比语言更能安慰。',
          '默默陪在身邊。覺得陪伴比語言更能安慰。',
          'Ở bên lặng lẽ—sự hiện diện quan trọng hơn lời nói.',
          'Diam di samping—kehadiran lebih menenangkan dari kata-kata.'
        ),
        score: 1,
      },
      {
        text: M(
          '일단 혼자 있을 시간을 준다. 각자 정리하고 나서 이야기하는 게 낫다',
          'I give them space first—it’s better to talk after we’ve each cooled down.',
          'まず一人の時間をあげる。落ち着いてから話すほうがいい。',
          '先给彼此独处时间。冷静后再沟通更好。',
          '先給彼此獨處時間。冷靜後再溝通更好。',
          'Cho thời gian riêng trước—nói chuyện sau khi đã ổn định.',
          'Beri waktu dulu—bicara setelah masing-masing tenang.'
        ),
        score: 2,
      },
      {
        text: M(
          '원인을 파악하고 해결책을 같이 생각해본다',
          'I figure out the cause and brainstorm solutions together.',
          '原因を整理し、一緒に解決策を考える。',
          '弄清原因，一起想解决办法。',
          '弄清原因，一起想解決辦法。',
          'Tìm nguyên nhân và cùng nghĩ cách xử lý.',
          'Cari penyebab dan diskusikan solusi bersama.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 2,
    question: M(
      '연인에게 가장 원하는 것은?',
      'What do you want most from a partner?',
      '恋人にいちばん求めるものは？',
      '你最希望恋人给你什么？',
      '你最希望戀人給你什麼？',
      'Bạn mong muốn nhất điều gì từ người yêu?',
      'Apa yang paling kamu harapkan dari pasangan?'
    ),
    options: [
      {
        text: M(
          '표현. 말로든 행동으로든 사랑을 적극적으로 보여줬으면 한다',
          'Expression—I want love shown clearly in words and actions.',
          '表現。言葉でも行動でも、愛をはっきり見せてほしい。',
          '表达。希望用语言或行动积极表达爱。',
          '表達。希望用語言或行動積極表達愛。',
          'Thể hiện—muốn tình yêu được nói và làm rõ ràng.',
          'Ekspresi—ingin cinta ditunjukkan lewat kata dan tindakan.'
        ),
        score: 0,
      },
      {
        text: M(
          '헌신. 나를 위해 기꺼이 시간과 에너지를 써줬으면 한다',
          'Devotion—I want them to gladly spend time and energy on me.',
          '献身。喜んで時間とエネルギーを使ってほしい。',
          '奉献。希望愿意为我付出时间和精力。',
          '奉獻。希望願意為我付出時間和精力。',
          'Hy sinh—mong họ vui vẻ dành thời gian và công sức.',
          'Pengabdian—ingin mereka rela meluangkan waktu dan energi.'
        ),
        score: 1,
      },
      {
        text: M(
          '자유. 각자의 공간을 존중하고 숨막히지 않는 관계를 원한다',
          'Freedom—I want space respected and a relationship that doesn’t feel suffocating.',
          '自由。お互いの空間を尊重し、息苦しくない関係がいい。',
          '自由。希望尊重彼此空间，关系不窒息。',
          '自由。希望尊重彼此空間，關係不窒息。',
          'Tự do—tôn trọng không gian riêng, không ngột ngạt.',
          'Kebebasan—hormati ruang masing-masing, tidak sesak.'
        ),
        score: 2,
      },
      {
        text: M(
          '안정. 예측 가능하고 변함없는 사랑을 원한다',
          'Stability—I want predictable, steady love.',
          '安定。予測できて変わらない愛がほしい。',
          '稳定。希望爱可预期、不变。',
          '穩定。希望愛可預期、不變。',
          'Ổn định—tình yêu có thể đoán và không đổi.',
          'Stabilitas—cinta yang konsisten dan bisa diandalkan.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 3,
    question: M(
      '연인과 싸웠을 때 나의 패턴은?',
      'After a fight with your partner, what’s your pattern?',
      '恋人と喧嘩したとき、あなたのパターンは？',
      '和恋人吵架后，你的模式是？',
      '和戀人吵架後，你的模式是？',
      'Sau khi cãi nhau với người yêu, bạn thường?',
      'Setelah bertengkar dengan pasangan, polamu?'
    ),
    options: [
      {
        text: M(
          '그 자리에서 바로 풀려고 한다. 싸운 채로 자는 게 불편하다',
          'I try to fix it on the spot—I hate going to bed still fighting.',
          'その場で解決しようとする。喧嘩のまま寝るのが苦手。',
          '想当场和好。难以接受吵着架睡觉。',
          '想當場和好。難以接受吵著架睡覺。',
          'Muốn giải quyết ngay—khó chịu khi đi ngủ vẫn giận.',
          'Ingin selesaikan di tempat—tidak nyaman tidur masih bertengkar.'
        ),
        score: 0,
      },
      {
        text: M(
          '내가 먼저 풀려고 한다. 관계가 더 중요하다',
          'I make up first—the relationship matters more.',
          '先に謝る・収めようとする。関係が大事。',
          '会先低头和好。关系更重要。',
          '會先低頭和好。關係更重要。',
          'Chủ động làm lành—quan hệ quan trọng hơn.',
          'Memulai perdamaian—hubungan lebih penting.'
        ),
        score: 1,
      },
      {
        text: M(
          '각자 냉각기가 필요하다. 혼자 정리한 뒤 대화하는 게 낫다',
          'We both need cooldown time—it’s better to talk after thinking alone.',
          'お互い冷却期間が必要。一人で整理してから話す。',
          '需要各自冷静。先理清再聊更好。',
          '需要各自冷靜。先理清再聊更好。',
          'Cần thời gian nguội—nói sau khi suy nghĩ một mình.',
          'Perlu jeda—bicara setelah meredakan emosi.'
        ),
        score: 2,
      },
      {
        text: M(
          '뭐가 문제였는지 정확하게 짚고 넘어가야 한다',
          'We need to name the issue clearly before moving on.',
          '何が問題だったかはっきりしてから次へ。',
          '要把问题说清楚再翻篇。',
          '要把問題說清楚再翻篇。',
          'Phải chỉ rõ vấn đề rồi mới qua.',
          'Harus tegas soal masalahnya dulu.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 4,
    question: M(
      '데이트 계획을 세울 때 나는?',
      'When you plan a date, you tend to…',
      'デートの計画を立てるとき、あなたは？',
      '规划约会时，你通常会？',
      '規劃約會時，你通常會？',
      'Khi lên kế hẹn hò, bạn thường?',
      'Saat merencanakan kencan, kamu cenderung?'
    ),
    options: [
      {
        text: M(
          '내가 주도적으로 계획하고 서프라이즈를 자주 준비한다',
          'I take the lead and often plan surprises.',
          '自分で主導して、サプライズもよく用意する。',
          '我主导安排，经常准备惊喜。',
          '我主導安排，經常準備驚喜。',
          'Tôi chủ động lên kế và hay bất ngờ.',
          'Aku yang mengatur dan sering siapkan kejutan.'
        ),
        score: 0,
      },
      {
        text: M(
          '상대방이 좋아하는 걸 먼저 생각해서 맞춰준다',
          'I think about what they like first and adjust to them.',
          '相手の好きなことを先に考えて合わせる。',
          '先想对方喜欢什么，配合对方。',
          '先想對方喜歡什麼，配合對方。',
          'Nghĩ điều đối phương thích trước rồi chiều.',
          'Pikirkan yang disukai pasangan dulu.'
        ),
        score: 1,
      },
      {
        text: M(
          '서로 하고 싶은 것을 이야기하고 각자의 의견을 존중한다',
          'We discuss what we both want and respect each other’s ideas.',
          'やりたいことを話し合い、意見を尊重する。',
          '商量想做的事，尊重彼此想法。',
          '商量想做的事，尊重彼此想法。',
          'Bàn việc muốn làm và tôn trọng ý kiến.',
          'Diskusi keinginan dan hormati pendapat.'
        ),
        score: 2,
      },
      {
        text: M(
          '자주 가는 단골 코스가 있다. 검증된 것이 좋다',
          'We have regular spots—tried-and-true feels best.',
          'よく行く定番コースがある。確かめ済みが安心。',
          '有常去的固定路线，熟悉的最安心。',
          '有常去的固定路線，熟悉的最安心。',
          'Có chỗ quen—ổn định là tốt nhất.',
          'Ada tempat favorit yang sudah terbukti.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 5,
    question: M(
      '연인과 연락하는 빈도에 대한 내 생각은?',
      'How do you feel about how often you and your partner text or call?',
      '恋人との連絡頻度について、あなたの考えは？',
      '关于和恋人的联系频率，你的想法是？',
      '關於和戀人的聯繫頻率，你的想法是？',
      'Bạn nghĩ sao về tần suất nhắn tin/gọi với người yêu?',
      'Bagaimana pandanganmu soal frekuensi chat/telepon dengan pasangan?'
    ),
    options: [
      {
        text: M(
          '자주 연락하는 게 좋다. 하루에도 여러 번 주고받고 싶다',
          'I like frequent contact—several times a day feels right.',
          '頻繁に連絡したい。一日に何度もやりとりしたい。',
          '喜欢经常联系，一天多次来回。',
          '喜歡經常聯繫，一天多次來回。',
          'Thích liên lạc nhiều—vài lần mỗi ngày.',
          'Suka sering chat—beberapa kali sehari.'
        ),
        score: 0,
      },
      {
        text: M(
          '상대방이 원하는 만큼 맞춰준다. 내 기준보다 상대 기준이 더 중요하다',
          'I match their pace—their comfort matters more than mine.',
          '相手の希望に合わせる。相手基準が大事。',
          '配合对方的节奏，对方的标准更重要。',
          '配合對方的節奏，對方的標準更重要。',
          'Theo nhịp đối phương—sự thoải mái của họ quan trọng hơn.',
          'Ikuti keinginan pasangan—kenyamanan mereka lebih penting.'
        ),
        score: 1,
      },
      {
        text: M(
          '서로 바쁘면 연락이 뜸해도 괜찮다. 연락 빈도가 사랑의 척도는 아니다',
          'If we’re busy, less contact is fine—frequency isn’t proof of love.',
          '忙しければ少なくてもOK。連絡回数＝愛ではない。',
          '忙时少联系也没关系，联系频率不代表爱。',
          '忙時少聯繫也沒關係，聯繫頻率不代表愛。',
          'Bận thì ít liên lạc cũng được—tần suất không đo tình yêu.',
          'Sibuk boleh jarang chat—frekuensi bukan ukuran cinta.'
        ),
        score: 2,
      },
      {
        text: M(
          '일정한 패턴이 있으면 좋다. 아침저녁 정도는 꾸준히 주고받는 게 편하다',
          'I like a steady rhythm—morning and evening check-ins feel comfortable.',
          'ある程度ルーティンがいい。朝晩くらいは安定して。',
          '希望有固定节奏，早晚问候比较安心。',
          '希望有固定節奏，早晚問候比較安心。',
          'Thích nhịp ổn định—chào sáng tối là đủ.',
          'Nyaman ada pola—cek pagi dan malam.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 6,
    question: M(
      '연애에서 가장 행복한 순간은?',
      'When do you feel happiest in a relationship?',
      '恋愛でいちばん幸せを感じるのは？',
      '恋爱里你最幸福的时刻是？',
      '戀愛裡你最幸福的時刻是？',
      'Khoảnh khắc nào bạn hạnh phúc nhất trong yêu?',
      'Momen paling bahagia dalam hubungan menurutmu?'
    ),
    options: [
      {
        text: M(
          '상대방이 나를 위해 먼저 무언가를 해줬을 때',
          'When my partner does something for me first.',
          '相手が先に何かしてくれたとき。',
          '对方先为我做了什么的时候。',
          '對方先為我做了什麼的時候。',
          'Khi đối phương chủ động làm điều gì cho mình.',
          'Saat pasangan melakukan sesuatu untukku dulu.'
        ),
        score: 0,
      },
      {
        text: M(
          '내가 해준 것이 상대방에게 기쁨이 됐다는 걸 알 때',
          'When I see that what I did truly made them happy.',
          '自分がしたことが相手の喜びになったとわかったとき。',
          '知道自己做的事让对方开心的时候。',
          '知道自己做的事讓對方開心的時候。',
          'Khi thấy điều mình làm làm đối phương vui.',
          'Saat tahu yang kulakukan membuat mereka bahagia.'
        ),
        score: 1,
      },
      {
        text: M(
          '각자 자신의 시간을 보내다가 다시 만났을 때의 설렘',
          'The spark when we reunite after time on our own.',
          'それぞれ時間を過ごして、また会ったときのときめき。',
          '各自独处后再见面时的心动。',
          '各自獨處後再見面時的心動。',
          'Cảm giác rung động khi gặp lại sau thời gian riêng.',
          'Deg-degan ketemu lagi setelah waktu sendiri-sendiri.'
        ),
        score: 2,
      },
      {
        text: M(
          '매일 함께하는 평범한 일상이 쌓여갈 때',
          'When ordinary everyday life together keeps building up.',
          '毎日一緒の平凡な日常が積み重なるとき。',
          '平凡的每天在一起慢慢累积的时候。',
          '平凡的每天在一起慢慢累積的時候。',
          'Khi những ngày bình thường bên nhau chồng chất.',
          'Saat hari-hari biasa bersama menumpuk.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 7,
    question: M(
      '연인이 나에게 비밀이 있다는 걸 알게 된다면?',
      'If you found out your partner was keeping a secret from you…',
      '恋人に自分への秘密があるとわかったら？',
      '如果发现恋人对你有所隐瞒？',
      '如果發現戀人對你有所隱瞞？',
      'Nếu biết người yêu đang giữ bí mật với bạn?',
      'Jika tahu pasangan menyembunyikan sesuatu darimu?'
    ),
    options: [
      {
        text: M(
          '바로 물어본다. 모르는 게 더 힘들다',
          'I ask right away—not knowing bothers me more.',
          'すぐ聞く。知らないほうがつらい。',
          '会直接问。不知道更难受。',
          '會直接問。不知道更難受。',
          'Hỏi ngay—không biết còn khó hơn.',
          'Langsung tanya—tidak tahu lebih menyiksa.'
        ),
        score: 0,
      },
      {
        text: M(
          '상대가 말할 때까지 기다린다. 강요하기 싫다',
          'I wait until they’re ready to tell—I don’t want to force it.',
          '相手が話すまで待つ。強制したくない。',
          '等对方想说。不想强迫。',
          '等對方想說。不想強迫。',
          'Chờ đến khi họ sẵn sàng—không ép.',
          'Tunggu sampai mereka cerita—tidak memaksa.'
        ),
        score: 1,
      },
      {
        text: M(
          '각자의 비밀은 있을 수 있다고 생각한다. 크게 문제 삼지 않는다',
          'Everyone can have secrets—it’s not always a big deal.',
          'それぞれ秘密はあってもいい。大ごとにしない。',
          '觉得各自可以有秘密，不必小题大做。',
          '覺得各自可以有秘密，不必小題大作。',
          'Ai cũng có thể có bí mật—không nhất thiết nghiêm trọng.',
          'Orang bisa punya rahasia—tidak selalu masalah besar.'
        ),
        score: 2,
      },
      {
        text: M(
          '솔직한 관계가 중요하다. 차분하게 이야기를 요청한다',
          'Honesty matters—I calmly ask to talk it through.',
          '正直さが大事。落ち着いて話し合いを頼む。',
          '坦诚很重要。会冷静请求沟通。',
          '坦誠很重要。會冷靜請求溝通。',
          'Thành thật quan trọng—nhẹ nhàng đề nghị nói chuyện.',
          'Kejujuran penting—minta bicara dengan tenang.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 8,
    question: M(
      '상대방의 이성 친구에 대한 내 태도는?',
      'How do you feel about your partner’s opposite-sex friends?',
      '相手の異性の友人について、あなたの態度は？',
      '对恋人的异性朋友，你的态度是？',
      '對戀人的異性朋友，你的態度是？',
      'Bạn nghĩ sao về bạn khác giới của người yêu?',
      'Bagaimana sikapmu soal teman lawan jenis pasangan?'
    ),
    options: [
      {
        text: M(
          '솔직히 신경 쓰인다. 질투도 연애의 일부라고 생각한다',
          'Honestly it bothers me—I think a little jealousy is normal in love.',
          '正直気になる。嫉妬も恋の一部だと思う。',
          '会在意。觉得嫉妒也是恋爱的一部分。',
          '會在意。覺得嫉妒也是戀愛的一部分。',
          'Thật lòng là để ý—ghen nhẹ là bình thường.',
          'Jujur mengganggu—cemburu bagian dari cinta.'
        ),
        score: 0,
      },
      {
        text: M(
          '상대방을 믿는다. 단 나를 항상 우선순위에 둬줬으면 한다',
          'I trust them—I just want to feel like I come first.',
          '信じている。ただ自分を最優先にしてほしい。',
          '相信对方，但希望我始终被放在第一位。',
          '相信對方，但希望我始終被放在第一位。',
          'Tin tưởng—nhưng muốn được ưu tiên.',
          'Percaya—asalkan aku yang utama.'
        ),
        score: 1,
      },
      {
        text: M(
          '전혀 신경 쓰이지 않는다. 각자의 인간관계를 존중한다',
          'It doesn’t bother me—I respect each other’s friendships.',
          'まったく気にしない。それぞれの人間関係を尊重。',
          '完全不在意，尊重彼此社交。',
          '完全不在意，尊重彼此社交。',
          'Không bận tâm—tôn trọng mối quan hệ riêng.',
          'Tidak masalah—hormati pertemanan masing-masing.'
        ),
        score: 2,
      },
      {
        text: M(
          '크게 신경 쓰이지 않는다. 신뢰가 있으면 된다',
          'Not really an issue—as long as there’s trust.',
          'あまり気にしない。信頼があればいい。',
          '不太在意，有信任就好。',
          '不太在意，有信任就好。',
          'Không quá để ý—có tin tưởng là đủ.',
          'Tidak terlalu dipikirkan—asal ada kepercayaan.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 9,
    question: M(
      '연인과의 미래를 상상할 때 나는?',
      'When you imagine a future with your partner…',
      '恋人との未来を想像するとき、あなたは？',
      '想象和恋人的未来时，你？',
      '想像和戀人的未來時，你？',
      'Khi tưởng tượng tương lai với người yêu?',
      'Saat membayangkan masa depan dengan pasangan?'
    ),
    options: [
      {
        text: M(
          '설레고 기대된다. 함께하는 모든 순간을 계획하고 싶다',
          'I feel excited—I want to plan every moment together.',
          'わくわくする。一緒の時間を全部計画したい。',
          '很期待，想规划在一起的每一刻。',
          '很期待，想規劃在一起的每一刻。',
          'Hào hứng—muốn lên kế cho mọi khoảnh khắc.',
          'Bersemangat—ingin rencanakan setiap momen.'
        ),
        score: 0,
      },
      {
        text: M(
          '상대방이 원하는 미래라면 함께 맞춰갈 수 있다',
          'If it’s the future they want, I can walk that path with them.',
          '相手が望む未来なら一緒に歩いていける。',
          '若是对方想要的未来，可以一起走。',
          '若是對方想要的未來，可以一起走。',
          'Nếu đó là tương lai họ muốn, mình có thể cùng đi.',
          'Jika itu yang mereka mau, aku bisa bareng jalani.'
        ),
        score: 1,
      },
      {
        text: M(
          '각자의 삶을 유지하면서 함께 성장하는 그림이 좋다',
          'I like the picture of growing together while keeping our own lives.',
          'それぞれの人生を保ちながら一緒に成長するのがいい。',
          '保持各自生活同时一起成长最好。',
          '保持各自生活同時一起成長最好。',
          'Giữ cuộc sống riêng nhưng cùng tiến bộ.',
          'Pertahankan hidup masing-masing sambil tumbuh bersama.'
        ),
        score: 2,
      },
      {
        text: M(
          '안정적이고 예측 가능한 미래가 그려졌으면 한다',
          'I want a stable, predictable future I can picture.',
          '安定していて予測できる未来が見えればいい。',
          '希望未来稳定、可预期。',
          '希望未來穩定、可預期。',
          'Muốn tương lai ổn định, có thể hình dung.',
          'Ingin masa depan stabil dan terbayang jelas.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 10,
    question: M(
      '연인이 기대에 못 미쳤을 때 나는?',
      'When your partner falls short of your expectations…',
      '恋人が期待に届かなかったとき、あなたは？',
      '恋人没达到你的期待时，你？',
      '戀人沒達到你的期待時，你？',
      'Khi người yêu không đạt kỳ vọng?',
      'Saat pasangan tidak memenuhi harapan?'
    ),
    options: [
      {
        text: M(
          '바로 말한다. 표현하지 않으면 상대방이 모른다',
          'I say it directly—if I don’t speak up, they won’t know.',
          'すぐ言う。伝えなければ相手はわからない。',
          '会直接说。不说对方不知道。',
          '會直接說。不說對方不知道。',
          'Nói thẳng—không nói thì họ không biết.',
          'Langsung bicara—tanpa kata mereka tidak tahu.'
        ),
        score: 0,
      },
      {
        text: M(
          '일단 이해하려 한다. 상대방 입장에서 생각해본다',
          'I try to understand first—I put myself in their shoes.',
          'まず理解しようとする。相手の立場で考える。',
          '先试着理解，换位思考。',
          '先試著理解，換位思考。',
          'Cố hiểu trước—đặt mình vào họ.',
          'Coba mengerti dulu—berpikir dari sudut mereka.'
        ),
        score: 1,
      },
      {
        text: M(
          '크게 기대하지 않는 편이다. 각자의 방식이 있다고 생각한다',
          'I don’t expect too much—everyone has their own way.',
          'そこまで期待しない。それぞれスタイルがある。',
          '本来期待就不高，各有方式。',
          '本來期待就不高，各有方式。',
          'Không kỳ vọng quá—mỗi người một kiểu.',
          'Tidak terlalu mengharap—cara tiap orang beda.'
        ),
        score: 2,
      },
      {
        text: M(
          '차분하게 내가 원하는 것을 명확하게 이야기한다',
          'I calmly and clearly say what I need.',
          '落ち着いて、自分が望むことをはっきり伝える。',
          '冷静清楚地说出自己想要什么。',
          '冷靜清楚地說出自己想要什麼。',
          'Bình tĩnh nói rõ điều mình cần.',
          'Dengan tenang jelaskan yang kuinginkan.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 11,
    question: M(
      '나에게 이상적인 커플의 모습은?',
      'What does your ideal couple look like?',
      'あなたにとって理想のカップル像は？',
      '你理想中的情侣是什么样？',
      '你理想中的情侶是什麼樣？',
      'Cặp đôi lý tưởng của bạn trông như thế nào?',
      'Pasangan ideal menurutmu seperti apa?'
    ),
    options: [
      {
        text: M(
          '서로에 대한 표현이 넘치고 열정적인 커플',
          'A couple overflowing with affection and passion.',
          'お互いへの表現があふれ、情熱的なカップル。',
          '彼此表达很多、很有热情的情侣。',
          '彼此表達很多、很有熱情的情侶。',
          'Cặp đôi bộc lộ nhiều và đam mê.',
          'Pasangan yang ekspresif dan penuh gairah.'
        ),
        score: 0,
      },
      {
        text: M(
          '서로를 위해 뭐든지 해주는 헌신적인 커플',
          'A devoted couple who would do anything for each other.',
          'お互いのためなら何でもする、献身的なカップル。',
          '愿意为对方做任何事、很投入的情侣。',
          '願意為對方做任何事、很投入的情侶。',
          'Cặp đôi tận tụy, sẵn sàng vì nhau.',
          'Pasangan pengabdi yang rela melakukan apa pun.'
        ),
        score: 1,
      },
      {
        text: M(
          '서로의 독립성을 존중하면서 함께하는 커플',
          'A couple who stay together while respecting independence.',
          'お互いの自立を尊重しながら一緒にいるカップル。',
          '尊重彼此独立又在一起的情侣。',
          '尊重彼此獨立又在一起的情侶。',
          'Tôn trọng độc lập nhưng vẫn bên nhau.',
          'Hormati independensi tapi tetap bersama.'
        ),
        score: 2,
      },
      {
        text: M(
          '매일 함께하는 소소한 일상이 행복한 커플',
          'A couple who find happiness in small daily routines together.',
          '毎日の小さな日常が幸せなカップル。',
          '平凡日常里的小幸福。',
          '平凡日常裡的小幸福。',
          'Hạnh phúc trong những ngày nhỏ bên nhau.',
          'Bahagia dari rutinitas kecil setiap hari.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 12,
    question: M(
      '지금 내 연애 스타일을 한 마디로 표현하면?',
      'How would you sum up your dating style in one line?',
      '今の自分の恋愛スタイルを一言で言うと？',
      '用一句话形容你现在的恋爱风格？',
      '用一句話形容你現在的戀愛風格？',
      'Mô tả phong cách yêu của bạn trong một câu?',
      'Jelaskan gaya pacaranmu dalam satu kalimat?'
    ),
    options: [
      {
        text: M(
          '적극적이고 표현이 많다. 사랑하면 티가 난다',
          'Active and expressive—when I love, it shows.',
          '積極的で表現が多い。好きなら態度に出る。',
          '主动、爱表达，喜欢就会表现出来。',
          '主動、愛表達，喜歡就會表現出來。',
          'Chủ động, thể hiện nhiều—yêu là thấy ngay.',
          'Aktif dan ekspresif—kalau cinta keliatan.'
        ),
        score: 0,
      },
      {
        text: M(
          '헌신적이고 맞춰준다. 상대방 행복이 내 행복이다',
          'Devoted and accommodating—their happiness is mine.',
          '献身的で合わせる。相手の幸せが自分の幸せ。',
          '付出、配合，对方幸福我就幸福。',
          '付出、配合，對方幸福我就幸福。',
          'Hy sinh, chiều—hạnh phúc họ là hạnh phúc mình.',
          'Mengabdi dan mengalah—bahagia mereka bahagiaku.'
        ),
        score: 1,
      },
      {
        text: M(
          '독립적이고 자유롭다. 서로의 공간을 존중한다',
          'Independent and free—we respect each other’s space.',
          '自立していて自由。お互いの空間を尊重。',
          '独立自由，尊重彼此空间。',
          '獨立自由，尊重彼此空間。',
          'Độc lập, tự do—tôn trọng không gian riêng.',
          'Independen dan bebas—hormati ruang masing-masing.'
        ),
        score: 2,
      },
      {
        text: M(
          '안정적이고 꾸준하다. 변함없는 사랑을 한다',
          'Steady and consistent—I love in a constant, reliable way.',
          '安定していて一貫。変わらない愛をする。',
          '稳定持久，爱得不变。',
          '穩定持久，愛得不變。',
          'Ổn định, nhất quán—yêu bền bỉ.',
          'Stabil dan konsisten—cinta yang tak berubah.'
        ),
        score: 3,
      },
    ],
  },
];

export function calculatePhase3CoupleChemistryIndividualType(answers: number[]): string {
  const total = answers.reduce((sum, s) => sum + s, 0);
  if (total <= 5) return 'Type1';
  if (total <= 11) return 'Type2';
  if (total <= 19) return 'Type3';
  if (total <= 27) return 'Type4';
  if (total <= 33) return 'Type5';
  return 'Type6';
}

export function typeStringToNum(t: string): number {
  const m = t.match(/Type(\d)/);
  return m ? parseInt(m[1], 10) : 1;
}

export function getCouplePairKey(typeA: string, typeB: string): string {
  const a = typeStringToNum(typeA);
  const b = typeStringToNum(typeB);
  return `${Math.min(a, b)}-${Math.max(a, b)}`;
}

export const phase3CoupleChemistryIndividualResults: Phase3CoupleChemistryIndividualResult[] = [
  {
    type: 'Type1',
    emoji: '❤️‍🔥',
    title: M(
      '사랑을 온몸으로 표현하는, 열정 표현형',
      'All-in passion—you express love with your whole being.',
      '愛を全身で表す、情熱表現タイプ',
      '用全身心去爱、热情外露型',
      '用全身心去愛、熱情外露型',
      'Thể hiện tình yêu bằng cả con người—kiểu nhiệt huyết.',
      'Mengekspresikan cinta dengan seluruh diri—tipe gairah.'
    ),
    tagline: M(
      '사랑하면 무조건 티가 납니다',
      'When you love, it always shows.',
      '好きなら必ず態度に出る。',
      '爱了就会表现出来。',
      '愛了就會表現出來。',
      'Yêu là lộ ra hết.',
      'Kalau cinta, pasti keliatan.'
    ),
    description: M(
      '감정을 숨기는 것이 어렵고 좋으면 좋다고 바로 표현하는 타입입니다. 연락도 자주 하고 서프라이즈도 자주 준비하고 상대방의 반응을 즉각적으로 원합니다. 열정적이고 설레는 연애를 추구하며 그 에너지를 상대방에게 아낌없이 쏟아붓습니다.',
      'You find it hard to hide feelings—you say what you like and reach out often, plan surprises, and want immediate reactions. You chase passionate, exciting love and pour that energy into your partner.',
      '感情を隠すのが苦手で、好きならすぐ表現するタイプ。連絡も多く、サプライズも用意し、相手の反応をすぐに欲しがる。情熱的でドキドキする恋を求め、そのエネルギーを惜しみなく注ぐ。',
      '很难藏情绪，喜欢就会直说。常联系、常准备惊喜，也渴望对方立刻回应。你追求热烈、心动的恋爱，并把能量毫无保留地给对方。',
      '很難藏情緒，喜歡就會直說。常聯絡、常準備驚喜，也渴望對方立刻回應。你追求熱烈、心動的戀愛，並把能量毫無保留地給對方。',
      'Khó giấu cảm xúc—thích là nói ngay. Nhắn thường xuyên, thích bất ngờ, muốn phản hồi tức thì. Bạn theo đuổi tình yêu nồng nhiệt và đổ hết năng lượng cho đối phương.',
      'Sulit menyembunyikan perasaan—suka langsung diungkapkan. Sering menghubungi, suka kejutan, ingin reaksi cepat. Kamu mengejar cinta yang penuh gairah dan mengerahkan energi untuk pasangan.'
    ),
    keywords: M(
      '열정·표현·즉각성·설렘·적극성',
      'Passion · expression · immediacy · excitement · initiative',
      '情熱・表現・即時性・ときめき・積極性',
      '热情·表达·即时·心动·主动',
      '熱情·表達·即時·心動·主動',
      'Nhiệt huyết · thể hiện · tức thì · hồi hộp · chủ động',
      'Gairah · ekspresi · segera · deg-degan · proaktif'
    ),
    loveLanguage: M(
      '언어적 표현 + 스킨십 + 서프라이즈',
      'Words of affirmation + physical touch + surprises',
      '言葉の肯定 + スキンシップ + サプライズ',
      '言语肯定 + 肢体接触 + 惊喜',
      '言語肯定 + 肢體接觸 + 驚喜',
      'Lời khẳng định + chạm + bất ngờ',
      'Afirmasi kata + sentuhan + kejutan'
    ),
    give: M(
      '적극적인 표현·에너지·설렘',
      'Bold expression, energy, and excitement',
      '積極的な表現・エネルギー・ときめき',
      '积极的表达、能量与心动',
      '積極的表達、能量與心動',
      'Thể hiện mạnh mẽ, năng lượng, cảm giác hồi hộp',
      'Ekspresi tegas, energi, dan semangat'
    ),
    want: M(
      '비슷한 수준의 표현과 반응',
      'A similar level of expression and response back',
      '同じくらいの表現と反応がほしい',
      '希望对方也有相近的表达与回应',
      '希望對方也有相近的表達與回應',
      'Muốn mức độ thể hiện và phản hồi tương đương',
      'Ingin tingkat ekspresi dan respons yang setara'
    ),
    strength: M(
      '파트너가 사랑받는다는 느낌을 강하게 받음',
      'Your partner strongly feels loved',
      'パートナーが「愛されている」と強く感じやすい',
      '伴侣很容易强烈感受到被爱',
      '伴侶很容易強烈感受到被愛',
      'Đối phương rất dễ cảm nhận rõ ràng là được yêu',
      'Pasangan sangat merasa dicintai'
    ),
    weakness: M(
      '상대방이 표현이 적은 유형이면 일방적이라고 느낄 수 있음',
      'If your partner is less expressive, it can feel one-sided',
      '相手が表現が少ないタイプだと一方通行に感じやすい',
      '若对方表达少，容易觉得像在单方面付出',
      '若對方表達少，容易覺得像在單方面付出',
      'Nếu đối phương ít thể hiện, dễ thấy một chiều',
      'Jika pasangan kurang ekspresif, bisa terasa sepihak'
    ),
    goodPartner: M(
      '비슷하게 표현이 많은 유형 / 헌신형',
      'Highly expressive types / devoted types',
      '同じくらい表現が多いタイプ / 献身型',
      '同样爱表达的类型 / 付出型',
      '同樣愛表達的類型 / 付出型',
      'Kiểu cũng hay thể hiện / kiểu hy sinh',
      'Tipe yang juga ekspresif / tipe pengabdian'
    ),
    cautionPartner: M(
      '독립형 (공간 침범으로 느낄 수 있음)',
      'Independent types (may feel their space is invaded)',
      '自立型（スペースを侵されたと感じやすい）',
      '独立型（可能觉得被侵入空间）',
      '獨立型（可能覺得被侵入空間）',
      'Kiểu độc lập (có thể thấy bị xâm không gian)',
      'Tipe independen (bisa merasa ruang pribadi terganggu)'
    ),
  },
  {
    type: 'Type2',
    emoji: '💝',
    title: M(
      '상대를 위해 뭐든 하는, 올인 헌신형',
      'All-in devotion—you do anything for your partner',
      '相手のためなら何でもする、オールイン献身型',
      '为对方什么都愿意做的全心付出型',
      '為對方什麼都願意做的全心付出型',
      'Vì đối phương làm được mọi thứ—kiểu hy sinh trọn vẹn',
      'Rela apa pun demi pasangan—tipe pengabdian total'
    ),
    tagline: M(
      '상대방의 행복이 곧 나의 행복입니다',
      'Their happiness is my happiness',
      '相手の幸せが自分の幸せ',
      '对方的幸福就是我的幸福',
      '對方的幸福就是我的幸福',
      'Hạnh phúc của họ là hạnh phúc của mình',
      'Bahagia mereka adalah bahagiaku'
    ),
    description: M(
      '내 것보다 상대방의 필요를 먼저 생각하고 기꺼이 맞춰주며 관계를 위해 희생할 수 있는 타입입니다. 싸워도 먼저 푸는 편이고 상대방 기분을 살피며 섬세하게 돌봅니다. 관계 자체를 소중히 여기는 마음이 강합니다.',
      'You put your partner’s needs before your own, accommodate willingly, and can sacrifice for the relationship. You tend to reconcile first after fights, read their mood, and care with care. You deeply cherish the bond itself.',
      '自分より相手の必要を先に考え、喜んで合わせ、関係のために犠牲もできるタイプ。喧嘩しても先に収め、相手の機嫌を伺い、細やかに世話をする。関係そのものを大切にする気持ちが強い。',
      '你会把对方的需求放在自己之前，愿意配合，也能为关系牺牲。吵架也倾向先和好，察言观色、细心照顾。非常珍惜这段关系本身。',
      '你會把對方的需求放在自己之前，願意配合，也能為關係犧牲。吵架也傾向先和好，察言觀色、細心照顧。非常珍惜這段關係本身。',
      'Bạn đặt nhu cầu đối phương trước bản thân, sẵn sàng nhường và hy sinh vì mối quan hệ. Cãi nhau cũng hay làm lành trước, quan sát tâm trạng và chăm chu đáo. Rất trân trọng chính mối quan hệ.',
      'Kamu menaruh kebutuhan pasangan di atas dirimu, mau mengalah, dan berkorban untuk hubungan. Setelah bertengkar cenderung meredakan dulu, peka pada suasana hati, dan merawat dengan teliti. Sangat menghargai hubungan itu sendiri.'
    ),
    keywords: M(
      '헌신·배려·양보·섬세함·돌봄',
      'Devotion · care · compromise · sensitivity · nurturing',
      '献身・配慮・譲歩・繊細さ・世話',
      '付出·体贴·退让·细腻·照顾',
      '付出·體貼·退讓·細膩·照顧',
      'Hy sinh · quan tâm · nhường · tinh tế · chăm sóc',
      'Pengabdian · perhatian · mengalah · halus · merawat'
    ),
    loveLanguage: M(
      '봉사·시간·돌봄',
      'Acts of service · quality time · care',
      'サービス・時間・世話',
      '服务行为·时间·照顾',
      '服務行為·時間·照顧',
      'Hành động phục vụ · thời gian · chăm sóc',
      'Tindakan layanan · waktu · perawatan'
    ),
    give: M(
      '안정감·배려·헌신',
      'Stability, care, and devotion',
      '安心感・配慮・献身',
      '安全感、体贴与付出',
      '安全感、體貼與付出',
      'Ổn định, quan tâm, hy sinh',
      'Stabilitas, perhatian, pengabdian'
    ),
    want: M(
      '내가 해주는 것에 대한 인정과 감사',
      'Recognition and gratitude for what you give',
      '自分がしてあげたことへの認めと感謝',
      '希望对方认可并感谢你的付出',
      '希望對方認可並感謝你的付出',
      'Muốn được công nhận và biết ơn những gì mình cho đi',
      'Ingin pengakuan dan terima kasih atas apa yang kamu berikan'
    ),
    strength: M(
      '파트너가 항상 돌봄받는다는 느낌을 받음',
      'Your partner often feels consistently cared for',
      'パートナーが常に世話されていると感じやすい',
      '伴侣常常感到被持续照顾',
      '伴侶常常感到被持續照顧',
      'Đối phương thường cảm thấy luôn được chăm sóc',
      'Pasangan sering merasa dirawat dengan konsisten'
    ),
    weakness: M(
      '지나친 헌신으로 자신을 잃거나 감사받지 못할 때 지침',
      'You may lose yourself in over-giving or burn out if thanks feel missing',
      '過度な献身で自分を見失ったり、感謝が返らず疲れることがある',
      '过度付出可能迷失自我，或得不到感谢时疲惫',
      '過度付出可能迷失自我，或得不到感謝時疲憊',
      'Hy sinh quá có thể mất bản thân, hoặc mệt khi không được cảm ơn',
      'Terlalu mengabdi bisa kehilangan diri, atau lelah jika tidak dihargai'
    ),
    goodPartner: M(
      '표현형(표현으로 감사를 돌려주는 유형) / 안정형',
      'Expressive types (who return thanks with words) / steady types',
      '表現型（言葉で感謝を返してくれる） / 安定型',
      '表达型（用言语回馈感谢）/ 稳定型',
      '表達型（用言語回饋感謝）/ 穩定型',
      'Kiểu hay thể hiện (cảm ơn bằng lời) / kiểu ổn định',
      'Tipe ekspresif (balas terima kasih dengan kata) / tipe stabil'
    ),
    cautionPartner: M(
      '독립형 (돌봄을 부담으로 느낄 수 있음)',
      'Independent types (may feel smothered by care)',
      '自立型（世話が負担に感じることがある）',
      '独立型（可能觉得照顾是负担）',
      '獨立型（可能覺得照顧是負擔）',
      'Kiểu độc lập (có thể thấy chăm sóc là gánh nặng)',
      'Tipe independen (bisa merasa perawatan membebani)'
    ),
  },
  {
    type: 'Type3',
    emoji: '🌿',
    title: M(
      '내 공간을 지키는, 독립 자유형',
      'Space guardians—independent and free',
      '自分の空間を守る、自立自由型',
      '守住自己空间的独立自由型',
      '守住自己空間的獨立自由型',
      'Giữ không gian riêng—kiểu độc lập tự do',
      'Menjaga ruang pribadi—tipe independen dan bebas'
    ),
    tagline: M(
      '사랑해도 각자의 공간이 있어야 합니다',
      'Even in love, we each need our own space',
      '愛していてもそれぞれのスペースが必要',
      '相爱也需要各自的空间',
      '相愛也需要各自的空間',
      'Yêu nhau vẫn cần không gian riêng',
      'Meski cinta, tetap perlu ruang masing-masing'
    ),
    description: M(
      '연인이 있어도 내 시간과 공간은 중요하고 상대방도 그것을 존중해주길 원하는 타입입니다. 연락 빈도나 만남 횟수보다 질을 중요시하고 서로의 독립성이 유지될 때 관계가 더 건강하다고 생각합니다.',
      'Even in a relationship, your time and space matter—and you want that respected. You value quality over quantity of contact or meetups, and believe the bond is healthier when independence stays intact.',
      '恋人がいても自分の時間と空間は大切で、相手にも尊重してほしいタイプ。連絡の頻度や会う回数より質を重視し、お互いの自立が保たれるとき関係がより健全だと考える。',
      '恋爱中你也重视自己的时间与空间，并希望对方尊重。比起联系频率或见面次数，更看重质量；你认为彼此保持独立时关系更健康。',
      '戀愛中你也重視自己的時間與空間，並希望對方尊重。比起聯絡頻率或見面次數，更看重品質；你認為彼此保持獨立時關係更健康。',
      'Dù có người yêu, thời gian và không gian vẫn quan trọng và bạn muốn được tôn trọng. Coi trọng chất lượng hơn số lần liên lạc hay gặp; bạn tin quan hệ khỏe hơn khi giữ độc lập.',
      'Meski punya pasangan, waktu dan ruangmu penting dan ingin dihormati. Nilai kualitas dibanding frekuensi kontak atau kencan; kamu percaya hubungan lebih sehat saat independensi terjaga.'
    ),
    keywords: M(
      '독립·자유·존중·균형·여백',
      'Independence · freedom · respect · balance · breathing room',
      '自立・自由・尊重・バランス・余白',
      '独立·自由·尊重·平衡·留白',
      '獨立·自由·尊重·平衡·留白',
      'Độc lập · tự do · tôn trọng · cân bằng · khoảng thở',
      'Independen · kebebasan · hormat · keseimbangan · ruang napas'
    ),
    loveLanguage: M(
      '질적인 시간·신뢰',
      'Quality time · trust',
      '質の高い時間・信頼',
      '有质量的时间·信任',
      '有品質的時間·信任',
      'Thời gian chất lượng · tin cậy',
      'Waktu bermutu · kepercayaan'
    ),
    give: M(
      '신뢰·자유·존중',
      'Trust, freedom, and respect',
      '信頼・自由・尊重',
      '信任、自由与尊重',
      '信任、自由與尊重',
      'Tin cậy, tự do, tôn trọng',
      'Kepercayaan, kebebasan, hormat'
    ),
    want: M(
      '나의 공간과 시간을 침범하지 않는 것',
      'Not having your space and time invaded',
      '自分の空間と時間を侵されないこと',
      '不要侵犯我的空间与时间',
      '不要侵犯我的空間與時間',
      'Không bị xâm phạm không gian và thời gian',
      'Tidak menginvasi ruang dan waktaku'
    ),
    strength: M(
      '서로의 성장을 방해하지 않는 건강한 관계 가능',
      'Can build a healthy relationship that doesn’t block growth',
      'お互いの成長を妨げない健全な関係を築きやすい',
      '能建立不阻碍彼此成长的健康关系',
      '能建立不阻礙彼此成長的健康關係',
      'Có thể xây mối quan hệ lành mạnh không cản trở tăng trưởng',
      'Bisa membangun hubungan sehat yang tidak menghambat pertumbuhan'
    ),
    weakness: M(
      '표현이 적어 상대방이 사랑받는다는 느낌을 받기 어려울 수 있음',
      'Less expression can make your partner unsure they’re loved',
      '表現が少なく、相手が愛されていると感じにくいことがある',
      '表达少可能让对方难感到被爱',
      '表達少可能讓對方難感到被愛',
      'Ít thể hiện khiến đối phương khó cảm nhận được yêu',
      'Ekspresi sedikit bisa membuat pasangan sulit merasa dicintai'
    ),
    goodPartner: M(
      '성장형 / 안정형(집착하지 않는 유형)',
      'Growth types / steady types (without clinginess)',
      '成長型 / 執着しない安定型',
      '成长型 / 不黏人的稳定型',
      '成長型 / 不黏人的穩定型',
      'Kiểu tăng trưởng / kiểu ổn định không bám dính',
      'Tipe pertumbuhan / tipe stabil tanpa posesif'
    ),
    cautionPartner: M(
      '표현형·헌신형 (거리감으로 오해받기 쉬움)',
      'Expressive · devoted types (distance can be misread)',
      '表現型・献身型（距離感が誤解されやすい）',
      '表达型·付出型（距离容易被误会）',
      '表達型·付出型（距離容易被誤會）',
      'Kiểu thể hiện / hy sinh (khoảng cách dễ bị hiểu nhầm)',
      'Tipe ekspresif / pengabdian (jarak mudah disalahpahami)'
    ),
  },
  {
    type: 'Type4',
    emoji: '🏡',
    title: M(
      '변함없이 꾸준한, 안정 루틴형',
      'Steady routine—stable and consistent',
      '変わらず一貫した、安定ルーティン型',
      '始终如一的稳定日常型',
      '始終如一的穩定日常型',
      'Ổn định theo thói quen—kiểu đều đặn',
      'Rutin stabil—tipe konsisten'
    ),
    tagline: M(
      '매일의 평범한 일상이 쌓이는 것이 진짜 사랑입니다',
      'Real love is ordinary days stacking up together',
      '毎日の平凡な日常が積み重なるのが本当の愛',
      '真正的爱是平凡日子一天天堆起来',
      '真正的愛是平凡日子一天天堆起來',
      'Tình thật là những ngày bình thường chồng chất lên nhau',
      'Cinta sejati adalah hari-hari biasa yang menumpuk bersama'
    ),
    description: M(
      '극적인 이벤트보다 매일의 소소한 일상을 함께하는 것을 더 소중히 여기는 타입입니다. 예측 가능하고 변함없는 사랑을 원하고 루틴이 있는 관계에서 안정감을 느낍니다. 믿음직하고 꾸준한 파트너입니다.',
      'You cherish small daily life together more than dramatic events. You want predictable, steady love and feel secure in routines. You’re a reliable, consistent partner.',
      'ドラマチックなイベントより、毎日の小さな日常を一緒に過ごすことを大切にするタイプ。予測できて変わらない愛を望み、ルーティンがある関係で安心を感じる。信頼できて一貫したパートナー。',
      '比起戏剧化的事件，你更珍惜一起度过的平凡日常。你想要可预期、不变的爱，并在有规律的关系里感到安心。你是可靠、持续的伴侣。',
      '比起戲劇化的事件，你更珍惜一起度過的平凡日常。你想要可預期、不變的愛，並在有規律的關係裡感到安心。你是可靠、持續的伴侶。',
      'Bạn trân trọng những ngày nhỏ bên nhau hơn sự kiện hoành tráng. Muốn tình yêu ổn định, có thể đoán trước và cảm thấy an toàn trong thói quen. Bạn là người đáng tin và nhất quán.',
      'Kamu menghargai kehidupan sehari-hari bersama dibanding acara dramatis. Menginginkan cinta yang stabil dan dapat diprediksi, merasa aman dalam rutinitas. Kamu pasangan yang dapat diandalkan dan konsisten.'
    ),
    keywords: M(
      '안정·꾸준함·일상·신뢰·예측 가능성',
      'Stability · consistency · everyday life · trust · predictability',
      '安定・一貫性・日常・信頼・予測可能性',
      '稳定·持续·日常·信任·可预期',
      '穩定·持續·日常·信任·可預期',
      'Ổn định · nhất quán · đời thường · tin cậy · dự đoán được',
      'Stabilitas · konsistensi · keseharian · kepercayaan · terprediksi'
    ),
    loveLanguage: M(
      '함께하는 시간·일상 공유',
      'Shared time · everyday sharing',
      '一緒にいる時間・日常の共有',
      '共处时间·分享日常',
      '共處時間·分享日常',
      'Thời gian bên nhau · chia sẻ đời thường',
      'Waktu bersama · berbagi keseharian'
    ),
    give: M(
      '안정감·신뢰·꾸준함',
      'Security, trust, and steadiness',
      '安心感・信頼・一貫性',
      '安全感、信任与稳定',
      '安全感、信任與穩定',
      'An toàn, tin cậy, đều đặn',
      'Rasa aman, kepercayaan, konsistensi'
    ),
    want: M(
      '변함없는 관계와 안정적인 연락 패턴',
      'A steady bond and predictable contact rhythm',
      '変わらない関係と安定した連絡のリズム',
      '不变的关系与稳定的联系节奏',
      '不變的關係與穩定的聯繫節奏',
      'Mối quan hệ bền và nhịp liên lạc ổn định',
      'Ikatan yang stabil dan pola kontak yang teratur'
    ),
    strength: M(
      '장기적으로 가장 안정적인 관계를 만들어냄',
      'Builds some of the most stable long-term relationships',
      '長期的に最も安定した関係を築きやすい',
      '最容易建立长期稳定的关系',
      '最容易建立長期穩定的關係',
      'Dễ xây mối quan hệ ổn định lâu dài',
      'Membangun hubungan jangka panjang yang sangat stabil'
    ),
    weakness: M(
      '루틴이 너무 강해지면 설렘이 줄어드는 느낌을 줄 수 있음',
      'Heavy routine can make excitement feel muted',
      'ルーティンが強すぎると、ときめきが薄く感じられることがある',
      'routine 太强可能让心动感变少',
      'routine 太強可能讓心動感變少',
      'Thói quen quá mạnh có thể làm giảm cảm giác rung động',
      'Rutinitas terlalu kuat bisa mengurangi sensasi deg-degan'
    ),
    goodPartner: M(
      '헌신형 / 독립형(안정 속에서 자유를 찾는 유형)',
      'Devoted types / independent types who find freedom within stability',
      '献身型 / 安定の中で自由を見つける自立型',
      '付出型 / 在稳定里找自由的独立型',
      '付出型 / 在穩定裡找自由的獨立型',
      'Kiểu hy sinh / kiểu độc lập tìm tự do trong sự ổn định',
      'Tipe pengabdian / independen yang menemukan kebebasan dalam stabilitas'
    ),
    cautionPartner: M(
      '표현형 (서로에게 원하는 에너지 수준이 다를 수 있음)',
      'Expressive types (desired energy levels may differ)',
      '表現型（求めるエネルギーの温度が違いやすい）',
      '表达型（彼此想要的能量强度可能不同）',
      '表達型（彼此想要的能量強度可能不同）',
      'Kiểu thể hiện (mức năng lượng mong muốn có thể khác)',
      'Tipe ekspresif (tingkat energi yang diinginkan bisa beda)'
    ),
  },
  {
    type: 'Type5',
    emoji: '💜',
    title: M(
      '감정으로 깊이 연결되는, 감성 연결형',
      'Deeply connected through emotion—sensitive bonding',
      '感情で深くつながる、感性コネクト型',
      '用情感深度连结的感性型',
      '用情感深度連結的感性型',
      'Kết nối sâu qua cảm xúc—kiểu cảm tính',
      'Terhubung dalam melalui emosi—tipe sensitif'
    ),
    tagline: M(
      '말하지 않아도 통하는 깊은 연결을 원합니다',
      'You want a deep bond that needs few words',
      '言葉がなくても通じ合う深いつながりを望む',
      '想要不用说也能懂的深层连结',
      '想要不用說也能懂的深層連結',
      'Muốn sự kết nối sâu không cần nhiều lời',
      'Ingin ikatan dalam yang tak perlu banyak kata'
    ),
    description: M(
      '감정적 친밀감과 깊은 유대감을 가장 중요하게 여기는 타입입니다. 표면적인 이벤트보다 서로의 내면을 이해하고 공감하는 관계를 원합니다. 상대방의 감정을 잘 읽고 섬세하게 반응하는 강점이 있습니다.',
      'Emotional closeness and deep attachment matter most. You want mutual inner understanding over flashy events. You read feelings well and respond with sensitivity.',
      '感情的な親密さと深い絆を最も大切にするタイプ。表面的なイベントより、お互いの内面を理解し共感する関係を望む。相手の感情を読み取り、繊細に反応する強みがある。',
      '你最重视情感亲密与深度联结。比起表面热闹，更想要彼此理解与共情。你擅长读懂情绪并细腻回应。',
      '你最重視情感親密與深度聯結。比起表面熱鬧，更想要彼此理解與共情。你擅長讀懂情緒並細膩回應。',
      'Bạn coi trọng gần gũi cảm xúc và gắn kết sâu. Muốn hiểu và đồng cảm nội tâm hơn là sự kiện hào nhoáng. Mạnh ở việc đọc cảm xúc và phản ứng tinh tế.',
      'Kamu menghargai keintiman emosional dan ikatan dalam. Menginginkan pemahaman dan empati batin dibanding acara permukaan. Kuat membaca perasaan dan merespons halus.'
    ),
    keywords: M(
      '감성·공감·내면·연결·깊이',
      'Emotion · empathy · inner world · connection · depth',
      '感性・共感・内面・つながり・深さ',
      '感性·共情·内心·连结·深度',
      '感性·共情·內心·連結·深度',
      'Cảm xúc · đồng cảm · nội tâm · kết nối · chiều sâu',
      'Emosi · empati · batin · koneksi · kedalaman'
    ),
    loveLanguage: M(
      '깊은 대화·감정 공유·공감',
      'Deep talks · sharing feelings · empathy',
      '深い対話・感情の共有・共感',
      '深度对话·分享情绪·共情',
      '深度對話·分享情緒·共情',
      'Trò chuyện sâu · chia sẻ cảm xúc · đồng cảm',
      'Percakapan dalam · berbagi perasaan · empati'
    ),
    give: M(
      '깊은 이해·감성적 연결·공감',
      'Deep understanding, emotional connection, empathy',
      '深い理解・感情的つながり・共感',
      '深度理解、情感连结与共情',
      '深度理解、情感連結與共情',
      'Hiểu sâu, kết nối cảm xúc, đồng cảm',
      'Pemahaman dalam, koneksi emosional, empati'
    ),
    want: M(
      '나의 감정을 알아주고 공감해주는 것',
      'To have your feelings seen and met with empathy',
      '自分の感情をわかってもらい、共感してほしい',
      '希望被看见情绪并得到共情',
      '希望被看見情緒並得到共情',
      'Muốn được nhìn thấy cảm xúc và được đồng cảm',
      'Ingin perasaanmu dipahami dan diempati'
    ),
    strength: M(
      '감정적 깊이가 있는 관계. 상대방이 진심으로 이해받는 느낌을 받음',
      'Relationships with emotional depth—your partner feels truly understood',
      '感情的な深みのある関係。相手が本当に理解されたと感じやすい',
      '关系有情感深度，对方容易感到被真正理解',
      '關係有情感深度，對方容易感到被真正理解',
      'Mối quan hệ có chiều sâu cảm xúc—đối phương dễ cảm thấy được hiểu thật lòng',
      'Hubungan dengan kedalaman emosional—pasangan merasa benar-benar dipahami'
    ),
    weakness: M(
      '상대방이 감성적이지 않을 경우 공허함을 느낄 수 있음',
      'If your partner isn’t emotional, you may feel empty',
      '相手が感性的でないと空虚さを感じやすい',
      '若对方不感性，你可能感到空虚',
      '若對方不感性，你可能感到空虛',
      'Nếu đối phương không cảm tính, bạn dễ cảm thấy trống rỗng',
      'Jika pasangan kurang emosional, kamu bisa merasa hampa'
    ),
    goodPartner: M(
      '헌신형 / 비슷한 감성형',
      'Devoted types / similarly sensitive types',
      '献身型 / 同じくらい感性的なタイプ',
      '付出型 / 同样感性的类型',
      '付出型 / 同樣感性的類型',
      'Kiểu hy sinh / kiểu cảm tính tương tự',
      'Tipe pengabdian / tipe sensitif serupa'
    ),
    cautionPartner: M(
      '독립형·성장형 (감정보다 현실을 우선하는 타입과 갭이 생길 수 있음)',
      'Independent · growth types (gap with reality-first partners)',
      '自立型・成長型（感情より現実優先のタイプとズレやすい）',
      '独立型·成长型（与更重现实的人可能产生落差）',
      '獨立型·成長型（與更重現實的人可能產生落差）',
      'Kiểu độc lập / tăng trưởng (dễ lệch với kiểu ưu tiên thực tế)',
      'Tipe independen / pertumbuhan (bisa gap dengan yang utamakan realita)'
    ),
  },
  {
    type: 'Type6',
    emoji: '🚀',
    title: M(
      '함께 더 나아지는, 동반 성장형',
      'Growing together—partners in progress',
      '一緒により良くなる、同伴成長型',
      '一起变得更好的并肩成长型',
      '一起變得更好的並肩成長型',
      'Cùng tiến bộ—kiểu đồng hành phát triển',
      'Berkembang bersama—tipe partner pertumbuhan'
    ),
    tagline: M(
      '연애가 서로를 더 좋은 방향으로 이끌어야 합니다',
      'Love should pull both of you toward something better',
      '恋愛はお互いをより良い方向へ導くべき',
      '恋爱应该把彼此带向更好的方向',
      '戀愛應該把彼此帶向更好的方向',
      'Tình yêu phải kéo cả hai về phía tốt hơn',
      'Cinta harus mengarahkan kalian ke arah yang lebih baik'
    ),
    description: M(
      '상대방과 함께 성장하고 서로에게 자극과 영감이 되는 관계를 가장 중요하게 여기는 타입입니다. 현재의 편안함보다 함께 나아가는 방향성을 더 소중히 여기고 상대방의 발전을 진심으로 응원합니다.',
      'Growing with your partner and inspiring each other matters most. You value shared direction over mere comfort now, and you genuinely cheer for their development.',
      '相手と一緒に成長し、刺激とインスピレーションを与え合う関係を最も大切にするタイプ。今の快適さより、一緒に進む方向性を重視し、相手の成長を心から応援する。',
      '你最重视与伴侣一起成长、互相激发。比起当下的舒适，更看重共同前进的方向，并真心为对方的成长加油。',
      '你最重視與伴侶一起成長、互相激發。比起當下的舒適，更看重共同前進的方向，並真心為對方的成長加油。',
      'Bạn coi trọng cùng phát triển và truyền cảm hứng cho nhau. Quan trọng hướng đi chung hơn sự thoải mái hiện tại, và thật lòng cổ vũ sự tiến bộ của đối phương.',
      'Kamu menghargai tumbuh bersama dan saling menginspirasi. Arah bersama lebih penting dari kenyamanan saat ini, dan kamu benar-benar mendukung perkembangan pasangan.'
    ),
    keywords: M(
      '성장·자극·방향성·발전·동반자',
      'Growth · stimulation · direction · development · partnership',
      '成長・刺激・方向性・発展・同伴者',
      '成长·刺激·方向·发展·伙伴',
      '成長·刺激·方向·發展·夥伴',
      'Tăng trưởng · kích thích · hướng đi · phát triển · đồng hành',
      'Pertumbuhan · rangsangan · arah · perkembangan · kemitraan'
    ),
    loveLanguage: M(
      '지적 자극·서로의 목표 응원·함께하는 도전',
      'Intellectual spark · cheering goals · shared challenges',
      '知的刺激・目標の応援・一緒のチャレンジ',
      '智力刺激·为彼此目标加油·一起挑战',
      '智力刺激·為彼此目標加油·一起挑戰',
      'Kích thích trí tuệ · cổ vũ mục tiêu · thử thách cùng nhau',
      'Rangsangan intelektual · mendukung tujuan · tantangan bersama'
    ),
    give: M(
      '자극·영감·성장 에너지',
      'Stimulation, inspiration, growth energy',
      '刺激・インスピレーション・成長エネルギー',
      '刺激、灵感与成长能量',
      '刺激、靈感與成長能量',
      'Kích thích, cảm hứng, năng lượng phát triển',
      'Rangsangan, inspirasi, energi pertumbuhan'
    ),
    want: M(
      '같은 방향으로 나아가는 동반자 의식',
      'A teammate mindset—moving forward in the same direction',
      '同じ方向に進む同伴意識',
      '朝同一方向前进的伙伴感',
      '朝同一方向前進的夥伴感',
      'Ý thức đồng hành cùng hướng',
      'Kesadaran sebagai partner yang melangkah searah'
    ),
    strength: M(
      '서로를 발전시키는 가장 미래 지향적인 관계 가능',
      'Can build one of the most future-focused, growth-driven bonds',
      'お互いを伸ばす、最も未来志向な関係を築きやすい',
      '最容易建立彼此促进、面向未来的关系',
      '最容易建立彼此促進、面向未來的關係',
      'Dễ xây mối quan hệ hướng tương lai, thúc đẩy nhau phát triển',
      'Membangun ikatan yang sangat berorientasi masa depan dan saling mengembangkan'
    ),
    weakness: M(
      '성장에 치우쳐 감정적 연결이나 일상의 소소함을 놓칠 수 있음',
      'Focus on growth can miss emotional connection or small daily joys',
      '成長に偏ると、感情的つながりや日常の小さな喜びを見落としがち',
      '太专注成长可能忽略情感连结或日常小确幸',
      '太專注成長可能忽略情感連結或日常小確幸',
      'Quá tập trung phát triển có thể bỏ lỡ kết nối cảm xúc hay niềm vui nhỏ',
      'Terlalu fokus pertumbuhan bisa melewatkan kedalaman emosi atau kebahagiaan kecil'
    ),
    goodPartner: M(
      '독립형 / 비슷한 성장형',
      'Independent types / similarly growth-oriented types',
      '自立型 / 同じくらい成長志向のタイプ',
      '独立型 / 同样重视成长的类型',
      '獨立型 / 同樣重視成長的類型',
      'Kiểu độc lập / kiểu cùng hướng phát triển',
      'Tipe independen / tipe berorientasi pertumbuhan serupa'
    ),
    cautionPartner: M(
      '헌신형·안정형 (방향성 차이로 갈등 가능)',
      'Devoted · steady types (direction clashes are possible)',
      '献身型・安定型（方向性の違いで衝突しやすい）',
      '付出型·稳定型（方向不同可能冲突）',
      '付出型·穩定型（方向不同可能衝突）',
      'Kiểu hy sinh / ổn định (có thể xung đột về hướng đi)',
      'Tipe pengabdian / stabil (bentrok arah memungkinkan)'
    ),
  },
];

export const phase3CoupleChemistryPairResults: Record<string, Phase3CoupleChemistryPairResult> = {
  '1-1': {
    pairKey: '1-1',
    grade: 'A',
    emojiPair: '🔥🔥',
    title: M(
      '열정 표현형 + 열정 표현형',
      'Passion-expressive + Passion-expressive',
      '情熱表現型 + 情熱表現型',
      '热情表达型 + 热情表达型',
      '熱情表達型 + 熱情表達型',
      'Kiểu nhiệt huyết + Kiểu nhiệt huyết',
      'Tipe ekspresif gairah + Tipe ekspresif gairah'
    ),
    summary: M(
      '두 사람 모두 표현이 풍부하고 에너지가 넘쳐 초반 케미는 폭발적입니다. 서로에게 아낌없이 주고 적극적으로 표현하며 설레는 순간이 많습니다. 단 두 사람 모두 자신의 표현에 대한 반응을 원하기 때문에 에너지가 충돌할 수 있습니다.',
      'You’re both expressive and high-energy—early chemistry can feel explosive. You give generously and show love actively with many exciting moments. But you both want reactions to your expressions, so energy can clash.',
      '二人とも表現豊かでエネルギーに満ち、最初の相性は爆発的。惜しみなく与え、積極的に表現し、ドキドキする瞬間が多い。ただ、自分の表現への反応を求めるのでエネルギーがぶつかることも。',
      '两人都爱表达、能量足，初期化学反应很强。彼此大方付出、积极表达，心动时刻很多。但都希望对方回应自己的表达，能量可能对冲。',
      '兩人都愛表達、能量足，初期化學反應很強。彼此大方付出、積極表達，心動時刻很多。但都希望對方回應自己的表達，能量可能對沖。',
      'Cả hai đều bộc lửa và năng lượng cao—đầu mối quan hệ có thể bùng nổ. Cả hai cho đi nhiều và thể hiện tích cực. Nhưng đều muốn phản hồi nên năng lượng có thể va chạm.',
      'Keduanya ekspresif dan energik—kimia awal bisa meledak. Saling memberi dan menunjukkan cinta aktif. Tapi sama-sama ingin respons, energi bisa bentrok.'
    ),
    matchPoint: M(
      '표현의 온도가 같다. 둘 다 서프라이즈·이벤트를 좋아해서 연애가 항상 설렘',
      'Same heat for expression—both love surprises and events, so dating stays exciting',
      '表現の温度が同じ。サプライズやイベントが好きで恋がいつもときめき',
      '表达热度相近，都喜欢惊喜和活动，恋爱常有新鲜感',
      '表達熱度相近，都喜歡驚喜和活動，戀愛常有新鮮感',
      'Cùng mức nhiệt khi thể hiện—cả hai thích bất ngờ và sự kiện nên yêu luôn hồi hộp',
      'Sama panasnya dalam ekspresi—suka kejutan dan acara, pacaran tetap seru'
    ),
    clashPoint: M(
      '둘 다 받고 싶은 게 많다. 누가 더 먼저 표현하나 눈치 게임이 생길 수 있음',
      'Both want a lot back—a staring contest over who expresses first can happen',
      '二人とも受け取りたいものが多い。誰が先に表現するかの駆け引きになりやすい',
      '都想被回应得多，可能出现谁先表达的拉锯',
      '都想被回應得多，可能出現誰先表達的拉鋸',
      'Cả hai đều muốn nhận nhiều—dễ có “ai thể hiện trước”',
      'Keduanya ingin banyak balasan—bisa saling tunggu siapa yang ekspresif dulu'
    ),
    longTerm: M(
      '초반 열정이 식었을 때 서로 실망할 가능성. 루틴의 아름다움을 배울 것',
      'When early passion cools, disappointment may hit—learn the beauty of routine',
      '初期の熱が冷めたときにお互いががっかりする可能性。ルーティンの美しさを学ぶ',
      '热恋降温时可能彼此失望，要学会日常的美好',
      '熱戀降溫時可能彼此失望，要學會日常的美好',
      'Khi nhiệt đầu hạ, dễ thất vọng—học thấy đẹp của thói quen',
      'Saat gairah awal reda, bisa kecewa—pelajari indahnya rutinitas'
    ),
    oneLiner: M(
      '불꽃 두 개가 만났다. 같이 빛나거나 같이 타버리거나',
      'Two sparks meet—shine together or burn out together',
      '火花が二つ出会った。一緒に輝くか、一緒に燃え尽きるか',
      '两团火相遇，要么一起闪耀要么一起燃尽',
      '兩團火相遇，要麼一起閃耀要麼一起燃盡',
      'Hai ngọn lửa gặp nhau—cùng sáng hoặc cùng tắt',
      'Dua api bertemu—bersinar bersama atau padam bersama'
    ),
  },
  '2-2': {
    pairKey: '2-2',
    grade: 'S',
    emojiPair: '💝💝',
    title: M(
      '올인 헌신형 + 올인 헌신형',
      'All-in devotion + All-in devotion',
      'オールイン献身型 + オールイン献身型',
      '全心付出型 + 全心付出型',
      '全心付出型 + 全心付出型',
      'Kiểu hy sinh trọn + Kiểu hy sinh trọn',
      'Pengabdian total + Pengabdian total'
    ),
    summary: M(
      '두 사람 모두 상대를 위해 헌신하려는 마음이 강합니다. 서로가 서로를 먼저 챙기려 하기 때문에 관계에 따뜻함이 넘칩니다. 갈등이 생겨도 둘 다 먼저 풀려고 하기 때문에 갈등이 장기화되지 않습니다.',
      'You both strongly want to devote yourselves. You each try to put the other first, so warmth overflows. After fights, you both tend to reconcile first, so conflicts rarely drag on.',
      '二人とも相手のために献身したい気持ちが強い。お互いを先に支えようとするので関係に温かさがあふれる。喧嘩しても先に収めようとするので長引きにくい。',
      '两人都想为对方付出，彼此抢着照顾对方，关系很暖。吵架也倾向先和好，矛盾不易拖长。',
      '兩人都想為對方付出，彼此搶著照顧對方，關係很暖。吵架也傾向先和好，矛盾不易拖長。',
      'Cả hai đều muốn hy sinh cho nhau, ưu tiên đối phương nên ấm áp. Cãi nhau cũng hay làm lành trước nên khó kéo dài.',
      'Keduanya ingin mengabdi, saling utamakan sehingga hangat. Setelah bertengkar cepat berdamai, konflik jarang menggantung.'
    ),
    matchPoint: M(
      '서로가 서로의 가장 든든한 지원군. 둘 다 주려 하기 때문에 관계가 풍요로움',
      'You’re each other’s strongest backup—both want to give, so the bond feels abundant',
      'お互いの最大の味方。二人とも与えようとするので関係が豊か',
      '彼此是最稳的后盾，都想付出，关系很丰盈',
      '彼此是最穩的後盾，都想付出，關係很豐盈',
      'Là chỗ dựa vững nhất cho nhau—cả hai đều cho nên mối quan hệ đầy đủ',
      'Saling jadi sandaran terkuat—keduanya memberi sehingga hubungan kaya'
    ),
    clashPoint: M(
      '둘 다 양보하다 보면 아무 결정도 못 하는 상황이 생김. "뭐 먹을래?" "아무거나" 무한 반복',
      'Too much yielding—you can’t decide anything. “What should we eat?” “Anything” on loop',
      '二人とも譲りすぎて決められない。「何食べる？」「なんでも」が無限ループ',
      '互相谦让过头可能做不了决定，“吃什么”“随便”无限循环',
      '互相謙讓過頭可能做不了決定，「吃什麼」「隨便」無限循環',
      'Nhường quá không quyết được—“ăn gì?” “Tùy” lặp vô hạn',
      'Terlalu mengalah—sulit putuskan apa pun, “mau makan apa?” “Terserah” berulang'
    ),
    longTerm: M(
      '서로의 필요보다 서로를 먼저 챙기다 자신을 잃지 않도록 주의',
      'Putting each other first—watch you don’t lose yourselves along the way',
      'お互いを先にしすぎて自分を見失わないよう注意',
      '总把对方放前面，注意别迷失自己',
      '總把對方放前面，注意別迷失自己',
      'Ưu tiên nhau quá—đừng đánh mất bản thân',
      'Saling utamakan—jangan sampai kehilangan diri'
    ),
    oneLiner: M(
      '서로 퍼주다 둘 다 행복해진다. 세상에서 제일 따뜻한 조합',
      'You pour into each other and both end up happy—the warmest combo',
      'お互いに注ぎ合い、二人とも幸せになる。世界で一番あたたかい組み合わせ',
      '互相浇灌，两人都幸福，是最暖的组合',
      '互相澆灌，兩人都幸福，是最暖的組合',
      'Cho nhau đầy ắp, cả hai đều hạnh phúc—combo ấm nhất',
      'Saling mengisi, berdua bahagia—kombinasi paling hangat'
    ),
  },
  '3-3': {
    pairKey: '3-3',
    grade: 'B',
    emojiPair: '🌿🌿',
    title: M(
      '독립 자유형 + 독립 자유형',
      'Independent + Independent',
      '自立自由型 + 自立自由型',
      '独立自由型 + 独立自由型',
      '獨立自由型 + 獨立自由型',
      'Độc lập + Độc lập',
      'Independen + Independen'
    ),
    summary: M(
      '두 사람 모두 서로의 공간을 존중하고 독립성을 유지하는 관계를 원합니다. 숨막히지 않는 자유로운 관계가 유지됩니다. 그러나 두 사람 모두 먼저 표현하지 않기 때문에 감정적 연결이 옅어질 수 있습니다.',
      'You both want space and independence—no suffocation, lots of freedom. But neither tends to speak up first, so emotional connection can feel thin.',
      '二人ともお互いのスペースを尊重し、自立を保ちたい。息苦しくない自由な関係。ただ、どちらも先に表現しないので感情的つながりが薄くなりがち。',
      '你们都尊重空间、保持独立，关系不窒息。但都不太先开口，情感连结可能变淡。',
      '你們都尊重空間、保持獨立，關係不窒息。但都不太先開口，情感連結可能變淡。',
      'Cả hai tôn trọng không gian và độc lập—không ngột ngạt. Nhưng ít ai chủ động thể hiện nên gắn kết cảm xúc có thể mỏng.',
      'Keduanya hormati ruang dan independen—bebas. Tapi jarang memulai ekspresi, koneksi emosional bisa tipis.'
    ),
    matchPoint: M(
      '서로를 압박하지 않음. 각자의 시간을 방해받지 않고 만날 때 더 반가움',
      'No pressure—your own time stays intact, reunions feel sweeter',
      '押しつけがない。それぞれの時間を邪魔されず、会うとよりうれしい',
      '不施压，各自时间不被打扰，见面更珍惜',
      '不施壓，各自時間不被打擾，見面更珍惜',
      'Không áp lực—thời gian riêng không bị phá, gặp lại càng vui',
      'Tanpa tekanan—waktu sendiri aman, bertemu lebih berarti'
    ),
    clashPoint: M(
      '둘 다 기다리다 감정 표현 타이밍을 놓침. "괜찮아?" "응 괜찮아" 하다 실제로 안 괜찮아지는 상황',
      'Both wait and miss the moment—“You okay?” “Yeah”—until you’re really not',
      '二人とも待ちすぎて表現のタイミングを逃す。「大丈夫？」「うん」で本当は大丈夫じゃなくなる',
      '都等对方先说，错过表达时机，“没事吧”“嗯”最后真有事',
      '都等對方先說，錯過表達時機，「沒事吧」「嗯」最後真有事',
      'Cả hai chờ nhau đến khi lỡ thời—“Ổn không?” “Ổn”—rồi không còn ổn',
      'Saling tunggu sampai melewatkan momen—“Oke?” “Oke”—padahal tidak'
    ),
    longTerm: M(
      '자유가 너무 강해지면 자연스럽게 멀어질 수 있음. 의도적인 연결 시간 만들기 필수',
      'Too much freedom can drift you apart—schedule intentional connection time',
      '自由が強すぎると自然に離れがち。意図的なつながりの時間が必須',
      '自由过头可能渐行渐远，要有意识地安排相处',
      '自由過頭可能漸行漸遠，要有意識地安排相處',
      'Tự do quá dễ xa nhau—cần thời gian kết nối có chủ đích',
      'Kebebasan berlebihan bisa menjauhkan—jadwalkan waktu bersama'
    ),
    oneLiner: M(
      '서로의 공간을 지켜주는 조합. 가끔 더 가까이 다가가는 연습이 필요',
      'You guard each other’s space—practice moving closer sometimes',
      'お互いのスペースを守る組み合わせ。ときどき近づく練習が必要',
      '守护彼此空间的组合，有时需要练习靠近',
      '守護彼此空間的組合，有時需要練習靠近',
      'Combo giữ không gian cho nhau—đôi khi cần luyện lại gần hơn',
      'Jaga ruang masing-masing—kadang perlu latihan mendekat'
    ),
  },
  '4-4': {
    pairKey: '4-4',
    grade: 'S',
    emojiPair: '🏡🏡',
    title: M(
      '안정 루틴형 + 안정 루틴형',
      'Steady routine + Steady routine',
      '安定ルーティン型 + 安定ルーティン型',
      '稳定日常型 + 稳定日常型',
      '穩定日常型 + 穩定日常型',
      'Ổn định thói quen + Ổn định thói quen',
      'Rutin stabil + Rutin stabil'
    ),
    summary: M(
      '두 사람 모두 안정적인 일상을 공유하는 것을 중요하게 여깁니다. 예측 가능하고 변함없는 관계가 유지되며 장기적으로 가장 지속 가능한 조합입니다. 극적인 사건보다 소소한 일상의 행복이 쌓여가는 것이 두 사람의 강점입니다.',
      'You both value sharing a stable everyday life. Predictable, steady love lasts—one of the most sustainable pairs. Your strength is happiness built from small daily moments, not drama.',
      '二人とも安定した日常を共有することを大切にする。予測できて変わらない関係が続き、長期的に最も持続しやすい。ドラマより小さな日常の幸せが積み上がるのが強み。',
      '你们都重视稳定的共同日常，关系可预期、持久，是最可持续的组合之一。比起戏剧事件，更擅长把小日子的幸福堆起来。',
      '你們都重視穩定的共同日常，關係可預期、持久，是最可持續的組合之一。比起戲劇事件，更擅長把小日子的幸福堆起來。',
      'Cả hai trọng đời thường ổn định—quan hệ dự đoán được, bền lâu. Mạnh ở hạnh phúc nhỏ chồng chất hơn drama.',
      'Keduanya menghargai keseharian stabil—hubungan terprediksi dan tahan lama. Kuat menumpuk kebahagiaan kecil, bukan drama.'
    ),
    matchPoint: M(
      '서로의 루틴을 이해하고 방해하지 않음. 함께하는 평범한 일상이 가장 큰 행복',
      'You respect each other’s routines—ordinary days together are your joy',
      'お互いのルーティンを理解し邪魔しない。一緒の平凡な日常が最大の幸せ',
      '理解彼此节奏不打扰，平凡日常就是最大幸福',
      '理解彼此節奏不打擾，平凡日常就是最大幸福',
      'Hiểu thói quen nhau—ngày bình thường bên nhau là hạnh phúc lớn nhất',
      'Hormati rutinitas—hari biasa bersama adalah kebahagiaan utama'
    ),
    clashPoint: M(
      '너무 안정적이어서 설렘이 사라졌다는 느낌이 들 수 있음. 이벤트를 의도적으로 만들지 않으면 단조로워짐',
      'Too stable can feel flat—without intentional sparks, it gets monotonous',
      '安定しすぎてときめきが薄く感じる。意図的なイベントがないと単調になりがち',
      '太稳可能少了心动，不刻意制造新鲜感会变单调',
      '太穩可能少了心動，不刻意製造新鮮感會變單調',
      'Ổn định quá có thể nhạt—không tạo khoảnh khắc thì dễ một màu',
      'Terlalu stabil bisa membosankan—tanpa momen sengaja jadi datar'
    ),
    longTerm: M(
      '주기적으로 새로운 경험을 함께 시도하는 것이 관계 활력 유지에 필수',
      'Try new experiences together on a rhythm—keeps the bond alive',
      '定期的に新しい体験を一緒に試すことが関係の活力維持に必須',
      '定期一起尝试新体验，关系才有活力',
      '定期一起嘗試新體驗，關係才有活力',
      'Định kỳ thử trải nghiệm mới cùng nhau để giữ sức sống',
      'Rutin coba pengalaman baru bersama agar tetap segar'
    ),
    oneLiner: M(
      '가장 오래가는 조합. 평범한 하루가 쌓여 가장 단단한 사랑이 된다',
      'Lasts the longest—ordinary days stack into the strongest love',
      '最も長持ちする組み合わせ。平凡な日々が積み重なり最も強い愛になる',
      '最长久的一对，平凡日子堆成最稳的爱',
      '最長久的一對，平凡日子堆成最穩的愛',
      'Bền nhất—ngày thường chồng thành tình yêu vững',
      'Paling tahan lama—hari biasa menumpuk jadi cinta kuat'
    ),
  },
  '5-5': {
    pairKey: '5-5',
    grade: 'A',
    emojiPair: '💜💜',
    title: M(
      '감성 연결형 + 감성 연결형',
      'Emotional connection + Emotional connection',
      '感性コネクト型 + 感性コネクト型',
      '情感连结型 + 情感连结型',
      '情感連結型 + 情感連結型',
      'Kết nối cảm xúc + Kết nối cảm xúc',
      'Koneksi emosional + Koneksi emosional'
    ),
    summary: M(
      '두 사람 모두 깊은 감정적 연결을 원하기 때문에 대화가 깊고 서로를 이해하는 수준이 높습니다. 감성적 공감대가 매우 강하고 서로의 감정을 섬세하게 읽습니다. 단 두 사람 모두 감수성이 높기 때문에 사소한 것에 상처를 받거나 감정이 과부하 될 수 있습니다.',
      'You both want deep emotional ties—conversations go deep and mutual understanding is high. Empathy runs strong and you read each other’s feelings finely. But high sensitivity means small hurts or emotional overload can hit both.',
      '二人とも深い感情的つながりを望むので会話が深く、理解度が高い。共感が強く、感情を細かく読み合う。ただ感受性が高いので些細なことで傷ついたり感情過多になりやすい。',
      '你们都想要深层情感连结，对话深、理解度高，共感强、能读懂彼此情绪。但都很敏感，小事可能受伤或情绪过载。',
      '你們都想要深層情感連結，對話深、理解度高，共感強、能讀懂彼此情緒。但都很敏感，小事可能受傷或情緒過載。',
      'Cả hai muốn gắn kết sâu—trò chuyện sâu, hiểu nhau cao, đồng cảm mạnh. Nhưng nhạy cảm cao nên dễ tổn thương vì chuyện nhỏ hoặc quá tải cảm xúc.',
      'Keduanya ingin ikatan emosional dalam—percakapan dalam, empati kuat. Tapi sensitif sehingga mudah terluka atau kelebihan emosi.'
    ),
    matchPoint: M(
      '말하지 않아도 통하는 순간이 많음. 감정적 공명이 강한 조합',
      'Many moments without words—strong emotional resonance',
      '言葉がなくても通じ合う瞬間が多い。感情的共鳴が強い',
      '不用说也懂的瞬间很多，情感共鸣强',
      '不用說也懂的瞬間很多，情感共鳴強',
      'Nhiều khoảnh khắc không lời—cộng hưởng cảm xúc mạnh',
      'Banyak momen tanpa kata—resonansi emosional kuat'
    ),
    clashPoint: M(
      '둘 다 예민해서 작은 말 한마디로 동시에 상처받을 수 있음. 감정 폭풍이 겹치는 날은 대화가 어려워짐',
      'Both sensitive—one careless line can hurt both. When storms overlap, talking gets hard',
      '二人とも繊細で一言で同時に傷つくことがある。感情の嵐が重なる日は会話が難しい',
      '都敏感，一句话可能同时伤到两人；情绪风暴重叠时难沟通',
      '都敏感，一句話可能同時傷到兩人；情緒風暴重疊時難溝通',
      'Cả hai nhạy—một câu có thể làm đau cả hai; khi bão cảm xúc trùng nhau khó nói',
      'Keduanya sensitif—satu kalimat bisa melukai berdua; saat badai emosi bertabrakan sulit bicara'
    ),
    longTerm: M(
      '감정에만 집중하다 현실적인 관계 관리가 소홀해지지 않도록 주의',
      'Don’t let feelings-only focus crowd out practical relationship upkeep',
      '感情だけに集中して現実的な関係運営がおろそかにならないよう注意',
      '别只顾情绪，忽略现实中的关系经营',
      '別只顧情緒，忽略現實中的關係經營',
      'Đừng chỉ chìm trong cảm xúc mà bỏ quên vận hành thực tế',
      'Jangan fokus emosi saja sampai mengabaikan perawatan praktis'
    ),
    oneLiner: M(
      '세상에서 가장 깊은 대화를 하는 커플. 감정 관리만 잘 하면 최강',
      'The couple with the deepest talks—unstoppable if you regulate emotions',
      '世界で一番深い会話をするカップル。感情管理さえできれば最強',
      '对话最深的组合，管好情绪就无敌',
      '對話最深的組合，管好情緒就無敵',
      'Cặp trò chuyện sâu nhất—quản lý cảm xúc tốt là mạnh nhất',
      'Pasangan dengan obrolan terdalam—kuat jika emosi terkelola'
    ),
  },
  '6-6': {
    pairKey: '6-6',
    grade: 'A',
    emojiPair: '🚀🚀',
    title: M(
      '동반 성장형 + 동반 성장형',
      'Growth partners + Growth partners',
      '同伴成長型 + 同伴成長型',
      '并肩成长型 + 并肩成长型',
      '並肩成長型 + 並肩成長型',
      'Đồng hành phát triển + Đồng hành phát triển',
      'Partner tumbuh + Partner tumbuh'
    ),
    summary: M(
      '두 사람 모두 성장을 지향하고 서로를 자극하며 함께 나아가는 것을 원합니다. 서로의 목표를 응원하고 같은 방향을 바라보는 강점이 있습니다. 단 둘 다 앞만 보다 보면 현재의 행복이나 감정적 연결을 놓칠 수 있습니다.',
      'You both aim to grow, spark each other, and move forward together. You cheer goals and share direction. But if you only look ahead, you can miss present joy or emotional closeness.',
      '二人とも成長を志向し、刺激し合い一緒に進みたい。目標を応援し同じ方向を見る強み。ただ前ばかり見ていると今の幸せや感情的つながりを見失いがち。',
      '你们都追求成长、互相激发、一起前进，会为彼此目标加油。但若只顾往前，可能错过当下的快乐与情感连结。',
      '你們都追求成長、互相激發、一起前進，會為彼此目標加油。但若只顧往前，可能錯過當下的快樂與情感連結。',
      'Cả hai hướng tới tăng trưởng, kích thích nhau, cùng tiến—cổ vũ mục tiêu. Nhưng chỉ nhìn phía trước dễ bỏ lỡ hạnh phúc hiện tại và gắn kết cảm xúc.',
      'Keduanya ingin tumbuh, saling memicu, maju bersama—dukung tujuan. Tapi hanya melihat depan bisa melewatkan kebahagiaan kini dan kedekatan emosional.'
    ),
    matchPoint: M(
      '서로에게 가장 좋은 동반자. 같이 있으면 더 잘 하고 싶어지는 커플',
      'Best teammates—being together makes you want to level up',
      'お互いにとって最高の相棒。一緒にいるともっと頑張りたくなる',
      '彼此最好的队友，在一起就想变得更好',
      '彼此最好的隊友，在一起就想變得更好',
      'Đồng đội tốt nhất—bên nhau là muốn cố gắng hơn',
      'Partner terbaik—bersama membuat ingin lebih baik'
    ),
    clashPoint: M(
      '연애보다 각자의 성장에 더 집중하다 "우리 왜 만나?" 하는 순간이 올 수 있음',
      'More focus on growth than romance—“Why are we even dating?” moments can appear',
      '恋愛より各自の成長に集中しすぎて「なぜ付き合ってる？」の瞬間が来ることがある',
      '比起恋爱更专注各自成长，可能出现“我们为什么在一起”',
      '比起戀愛更專注各自成長，可能出現「我們為什麼在一起」',
      'Tập trung phát triển hơn tình yêu—có lúc hỏi “ta yêu để làm gì?”',
      'Fokus pertumbuhan melebihi asmara—momen “kita pacaran untuk apa?”'
    ),
    longTerm: M(
      '목표 이야기만 하지 말고 지금 이 순간의 소소한 행복도 함께 즐길 것',
      'Don’t only talk goals—share small joys in the present too',
      '目標の話だけでなく、今この瞬間の小さな幸せも一緒に楽しむ',
      '别只聊目标，也要一起享受当下的小幸福',
      '別只聊目標，也要一起享受當下的小幸福',
      'Đừng chỉ nói mục tiêu—cùng tận hưởng niềm vui nhỏ của hiện tại',
      'Jangan hanya bicara tujuan—nikmati kebahagiaan kecil sekarang juga'
    ),
    oneLiner: M(
      '세상에서 가장 발전하는 커플. 가끔 멈추고 서로를 바라보는 시간 필요',
      'The couple that grows fastest—sometimes pause and really see each other',
      '世界で一番成長するカップル。ときどき止まってお互いを見る時間が必要',
      '成长最快的组合，有时需要停下来互相看看',
      '成長最快的組合，有時需要停下來互相看看',
      'Cặp phát triển nhanh nhất—đôi khi cần dừng lại nhìn nhau',
      'Pasangan yang paling cepat berkembang—kadang berhenti dan saling melihat'
    ),
  },
  '1-2': {
    pairKey: '1-2',
    grade: 'S',
    emojiPair: '❤️‍🔥💝',
    title: M(
      '열정 표현형 + 올인 헌신형',
      'Passion-expressive + All-in devotion',
      '情熱表現型 + オールイン献身型',
      '热情表达型 + 全心付出型',
      '熱情表達型 + 全心付出型',
      'Nhiệt huyết + Hy sinh trọn',
      'Ekspresif gairah + Pengabdian total'
    ),
    summary: M(
      '표현형이 적극적으로 사랑을 표현하면 헌신형이 그것을 받고 더 헌신하는 긍정적 순환이 만들어집니다. 표현형은 반응을 받고 헌신형은 인정받는 구조가 자연스럽게 형성됩니다.',
      'When the expressive partner shows love boldly, the devoted partner receives it and gives even more—a positive loop. The expressive one gets reactions; the devoted one feels seen.',
      '表現型が積極的に愛を示すと、献身型が受け取ってさらに献身する好循環。表現型は反応を、献身型は認められる構造が自然にできる。',
      '表达型热烈示爱，付出型接住后更付出，形成正向循环。表达型得到回应，付出型感到被认可。',
      '表達型熱烈示愛，付出型接住後更付出，形成正向循環。表達型得到回應，付出型感到被認可。',
      'Kiểu thể hiện cho đi nhiều, kiểu hy sinh nhận và cho thêm—vòng tích cực. Người thể hiện được phản hồi, người hy sinh được công nhận.',
      'Yang ekspresif menunjukkan cinta, yang mengabdi menerima dan memberi lebih—siklus positif. Ekspresif dapat respons, pengabdi merasa diakui.'
    ),
    matchPoint: M(
      '주고받는 에너지가 잘 맞음. 표현형이 이끌고 헌신형이 뒷받침하는 구조',
      'Energy flows well—the expressive leads, the devoted supports',
      'エネルギーのやり取りが合う。表現型が牽引し、献身型が支える',
      '能量很合拍，表达型带节奏，付出型托底',
      '能量很合拍，表達型帶節奏，付出型托底',
      'Năng lượng khớp—người thể hiện dẫn, người hy sinh đỡ',
      'Energi selaras—ekspresif memimpin, pengabdi menopang'
    ),
    clashPoint: M(
      '표현형의 에너지가 너무 강하면 헌신형이 지칠 수 있음',
      'If the expressive energy is too intense, the devoted partner can burn out',
      '表現型のエネルギーが強すぎると献身型が疲れうる',
      '表达型能量过强，付出型可能疲惫',
      '表達型能量過強，付出型可能疲憊',
      'Năng lượng thể hiện quá mạnh khiến người hy sinh kiệt sức',
      'Energi ekspresif terlalu kuat bisa membuat pengabdi lelah'
    ),
    oneLiner: M(
      '불꽃과 온기의 조합. 서로가 서로를 빛나게 한다',
      'Spark and warmth—you make each other shine',
      '火花とぬくもりの組み合わせ。お互いを輝かせる',
      '火花与温度，彼此让对方发光',
      '火花與溫度，彼此讓對方發光',
      'Lửa và hơi ấm—làm nhau tỏa sáng',
      'Api dan kehangatan—saling membuat bersinar'
    ),
  },
  '1-3': {
    pairKey: '1-3',
    grade: 'C',
    emojiPair: '❤️‍🔥🌿',
    title: M(
      '열정 표현형 + 독립 자유형',
      'Passion-expressive + Independent',
      '情熱表現型 + 自立自由型',
      '热情表达型 + 独立自由型',
      '熱情表達型 + 獨立自由型',
      'Nhiệt huyết + Độc lập',
      'Ekspresif gairah + Independen'
    ),
    summary: M(
      '표현형의 적극적인 에너지가 독립형에게는 부담이나 침범으로 느껴질 수 있습니다. 독립형의 여백이 표현형에게는 무관심으로 느껴질 수 있습니다. 서로에게 원하는 것이 정반대에 가깝습니다.',
      'The expressive partner’s intensity can feel like pressure or intrusion to the independent one. The independent partner’s space can read as coldness to the expressive one. What you want from love is almost opposite.',
      '表現型の積極さが自立型には負担や侵入に感じられる。自立型の余白は表現型には無関心に見える。求めるものがほぼ正反対。',
      '表达型的热烈对独立型可能是压力或侵犯；独立型的留白对表达型可能像冷漠。彼此想要的几乎相反。',
      '表達型的熱烈對獨立型可能是壓力或侵犯；獨立型的留白對表達型可能像冷漠。彼此想要的幾乎相反。',
      'Nhiệt của người thể hiện có thể là áp lực với người độc lập; khoảng trống của độc lập có thể như lạnh nhạt với người thể hiện. Mong muốn gần như trái ngược.',
      'Intensitas ekspresif terasa menekan bagi independen; ruang independen terasa dingin bagi ekspresif. Yang diinginkan hampir berlawanan.'
    ),
    matchPoint: M(
      '서로의 부족한 부분을 채워줄 수 있음. 표현형이 독립형을 더 살아있게 만들고 독립형이 표현형에게 여백의 미를 알려줄 수 있음',
      'You can complement gaps—the expressive brings aliveness; the independent teaches breathing room',
      '不足を補い合える。表現型が自立型を生き生きさせ、自立型が余白の美を教えられる',
      '能互补：表达型让独立型更有活力，独立型教表达型留白之美',
      '能互補：表達型讓獨立型更有活力，獨立型教表達型留白之美',
      'Bù trừ được—người thể hiện làm sống động, người độc lập dạy khoảng thở',
      'Saling melengkapi—ekspresif membuat hidup, independen mengajarkan ruang napas'
    ),
    clashPoint: M(
      '"왜 연락이 없어?" vs "왜 이렇게 연락이 많아?" 근본적인 온도 차이',
      '“Why no texts?” vs “Why so many texts?”—a core temperature gap',
      '「なぜ連絡がない？」vs「なぜこんなに連絡が多い？」根本の温度差',
      '“怎么不联系？”对“怎么联系这么多？”根本温差',
      '「怎麼不聯絡？」對「怎麼聯絡這麼多？」根本溫差',
      '“Sao không nhắn?” vs “Sao nhắn nhiều thế?”—chênh nhiệt gốc',
      '“Kenapa jarang chat?” vs “Kenapa chat sebanyak ini?”—selisih suhu dasar'
    ),
    overcome: M(
      '두 사람이 서로의 방식에 대한 깊은 이해와 합의가 선행돼야 함. 중간 지점 찾기 필수',
      'Deep mutual understanding and agreements must come first—find the middle ground',
      'お互いのスタイルへの深い理解と合意が先。中間点を見つけることが必須',
      '先要深度理解彼此风格并达成共识，必须找到中间点',
      '先要深度理解彼此風格並達成共識，必須找到中間點',
      'Cần hiểu sâu và thống nhất trước—tìm điểm giữa là bắt buộc',
      'Pemahaman mendalam dan kesepakatan dulu—titik tengah wajib'
    ),
    oneLiner: M(
      '불꽃과 바람의 조합. 서로를 이해하면 아름답지만 그 이해가 쉽지 않다',
      'Fire and wind—beautiful if understood, but understanding is hard',
      '火と風の組み合わせ。理解すれば美しいが、理解は簡単ではない',
      '火与风，懂了很美，但懂不容易',
      '火與風，懂了很美，但懂不容易',
      'Lửa và gió—đẹp nếu hiểu, nhưng hiểu không dễ',
      'Api dan angin—indah jika dipahami, tapi tidak mudah'
    ),
  },
  '1-4': {
    pairKey: '1-4',
    grade: 'B',
    emojiPair: '❤️‍🔥🏡',
    title: M(
      '열정 표현형 + 안정 루틴형',
      'Passion-expressive + Steady routine',
      '情熱表現型 + 安定ルーティン型',
      '热情表达型 + 稳定日常型',
      '熱情表達型 + 穩定日常型',
      'Nhiệt huyết + Thói quen ổn',
      'Ekspresif gairah + Rutin stabil'
    ),
    summary: M(
      '표현형의 서프라이즈와 즉흥성이 안정형에게는 설레기도 하지만 예측 불가능하게 느껴질 수 있습니다. 안정형의 꾸준함이 표현형에게는 안심이 되기도 하지만 심심하게 느껴질 수 있습니다.',
      'Surprises and spontaneity from the expressive partner can excite or feel unpredictable to the steady one. The steady partner’s consistency can reassure or feel boring to the expressive one.',
      '表現型のサプライズと即興性は安定型にはワクワクする一方、予測不能にも感じる。安定型の一貫性は表現型には安心にも、退屈にも感じる。',
      '表达型的惊喜和即兴让稳定型心动也可能觉得难预测；稳定型的稳定让表达型安心也可能觉得平淡。',
      '表達型的驚喜和即興讓穩定型心動也可能覺得難預測；穩定型的穩定讓表達型安心也可能覺得平淡。',
      'Bất ngờ của người thể hiện khiến người ổn định hồi hộp hoặc khó đoán; sự đều đặn của người ổn định an tâm hoặc nhàm cho người thể hiện.',
      'Kejutan dari ekspresif membuat stabil terexcited atau tak terduga; konsistensi stabil menenangkan atau membosankan bagi ekspresif.'
    ),
    matchPoint: M(
      '표현형이 설렘을 공급하고 안정형이 관계의 뿌리를 잡아주는 구조',
      'The expressive supplies spark; the steady anchors the roots',
      '表現型がときめきを供給し、安定型が関係の根を支える',
      '表达型供心动，稳定型稳住关系根基',
      '表達型供心動，穩定型穩住關係根基',
      'Người thể hiện mang rung động, người ổn định giữ nền',
      'Ekspresif memberi semangat, stabil memegang fondasi'
    ),
    clashPoint: M(
      '표현형은 "왜 이렇게 심심해?"이고 안정형은 "왜 이렇게 피곤하게 해?"',
      'Expressive: “Why so dull?” Steady: “Why so exhausting?”',
      '表現型は「なぜこんなに地味？」安定型は「なぜこんなに疲れる？」',
      '表达型：“怎么这么闷？”稳定型：“怎么这么累？”',
      '表達型：「怎麼這麼悶？」穩定型：「怎麼這麼累？」',
      'Thể hiện: “Sao nhàm thế?” Ổn định: “Sao mệt thế?”',
      'Ekspresif: “Kok membosankan?” Stabil: “Kok melelahkan?”'
    ),
    oneLiner: M(
      '설렘과 안정의 조합. 서로의 다름이 관계를 풍요롭게 만들 수 있다',
      'Spark meets stability—your differences can enrich the bond',
      'ときめきと安定の組み合わせ。違いが関係を豊かにできる',
      '心动遇稳定，差异能让关系更丰富',
      '心動遇穩定，差異能讓關係更豐富',
      'Rung động gặp ổn định—khác biệt làm phong phú',
      'Semangat bertemu stabilitas—perbedaan memperkaya'
    ),
  },
  '1-5': {
    pairKey: '1-5',
    grade: 'A',
    emojiPair: '❤️‍🔥💜',
    title: M(
      '열정 표현형 + 감성 연결형',
      'Passion-expressive + Emotional connection',
      '情熱表現型 + 感性コネクト型',
      '热情表达型 + 情感连结型',
      '熱情表達型 + 情感連結型',
      'Nhiệt huyết + Cảm xúc sâu',
      'Ekspresif gairah + Koneksi emosional'
    ),
    summary: M(
      '표현형의 적극적인 표현이 감성형에게 사랑받는다는 느낌을 충분히 주고 감성형의 깊은 공감이 표현형에게 진짜 이해받는다는 만족을 줍니다. 서로가 서로에게 원하는 것을 줄 수 있는 조합입니다.',
      'Bold affection from the expressive partner helps the sensitive one feel loved; deep empathy from the sensitive partner helps the expressive one feel truly seen. You can give each other what you crave.',
      '表現型の積極的な表現が感性型に愛されている感を十分に与え、感性型の深い共感が表現型に本当に理解された満足を与える。お互いに求めるものを渡せる。',
      '表达型的主动让感性型充分感到被爱；感性型的深度共情让表达型感到被真正理解。彼此能给对方想要的。',
      '表達型的主動讓感性型充分感到被愛；感性型的深度共情讓表達型感到被真正理解。彼此能給對方想要的。',
      'Người thể hiện cho người nhạy cảm cảm giác được yêu; người nhạy cảm cho người thể hiện cảm giác được hiểu thật. Có thể cho nhau điều mình cần.',
      'Ekspresif membuat sensitif merasa dicintai; empati sensitif membuat ekspresif merasa dipahami. Bisa memberi yang dicari.'
    ),
    matchPoint: M(
      '표현형의 열정 + 감성형의 깊이 = 설렘과 연결이 동시에 있는 관계',
      'Passion + depth = excitement and connection together',
      '表現型の情熱 + 感性型の深さ = ドキドキとつながりが同時にある',
      '热情加深度的关系，同时有心跳与连结',
      '熱情加深度的關係，同時有心跳與連結',
      'Nhiệt + chiều sâu = vừa hồi hộp vừa gắn kết',
      'Gairah + kedalaman = semangat dan koneksi bersamaan'
    ),
    clashPoint: M(
      '표현형의 에너지가 너무 강할 때 감성형이 감당하기 어려울 수 있음',
      'When the expressive energy is too strong, the sensitive partner may struggle to cope',
      '表現型のエネルギーが強すぎると感性型が受けきれないことがある',
      '表达型能量过强时，感性型可能承受不住',
      '表達型能量過強時，感性型可能承受不住',
      'Năng lượng thể hiện quá mạnh khiến người nhạy cảm khó chịu',
      'Energi ekspresif terlalu kuat bagi pasangan sensitif'
    ),
    oneLiner: M(
      '열정과 감성이 만났다. 드라마틱하고 아름다운 조합',
      'Passion meets emotion—dramatic and beautiful',
      '情熱と感性が出会った。ドラマチックで美しい',
      '热情遇上感性，戏剧又美好',
      '熱情遇上感性，戲劇又美好',
      'Nhiệt huyết gặp cảm xúc—kịch tính và đẹp',
      'Gairah bertemu emosi—dramatis dan indah'
    ),
  },
  '1-6': {
    pairKey: '1-6',
    grade: 'A',
    emojiPair: '❤️‍🔥🚀',
    title: M(
      '열정 표현형 + 동반 성장형',
      'Passion-expressive + Growth partner',
      '情熱表現型 + 同伴成長型',
      '热情表达型 + 并肩成长型',
      '熱情表達型 + 並肩成長型',
      'Nhiệt huyết + Đồng hành phát triển',
      'Ekspresif gairah + Partner tumbuh'
    ),
    summary: M(
      '표현형의 에너지가 관계에 집중된다면 성장형의 에너지는 각자의 발전에 집중됩니다. 표현형이 관계의 온도를 높이고 성장형이 관계의 방향을 잡는 구조가 형성될 수 있습니다.',
      'The expressive partner’s energy focuses on the relationship; the growth-oriented partner’s energy often focuses on development. The expressive can raise the temperature; the growth type can set direction.',
      '表現型のエネルギーは関係に、成長型は各自の発展に向きがち。表現型が温度を上げ、成長型が方向を決める構造になりうる。',
      '表达型能量偏关系，成长型能量常偏自我发展。表达型升温，成长型可定方向。',
      '表達型能量偏關係，成長型能量常偏自我發展。表達型升溫，成長型可定方向。',
      'Người thể hiện tập trung vào mối quan hệ; người tăng trưởng vào phát triển. Người thể hiện làm nóng, người tăng trưởng giữ hướng.',
      'Ekspresif fokus hubungan; pertumbuhan fokus perkembangan. Ekspresif panaskan, tipe tumbuh arahkan.'
    ),
    matchPoint: M(
      '표현형이 관계에 생기를 불어넣고 성장형이 관계에 의미를 더해줌',
      'The expressive brings life to the bond; the growth type adds meaning',
      '表現型が関係に活気を、成長型が意味を足す',
      '表达型给关系活力，成长型给意义',
      '表達型給關係活力，成長型給意義',
      'Thể hiện thổi sức sống, tăng trưởng thêm ý nghĩa',
      'Ekspresif hidupkan hubungan, tumbuh tambahkan makna'
    ),
    clashPoint: M(
      '표현형은 지금 이 순간의 사랑을 원하고 성장형은 미래를 봄. 현재 vs 미래 충돌',
      'Expressive wants love now; growth type looks ahead—present vs future tension',
      '表現型は今の愛を、成長型は未来を見る。今 vs 未来の衝突',
      '表达型要当下的爱，成长型看未来，当下对未来',
      '表達型要當下的愛，成長型看未來，當下對未來',
      'Thể hiện muốn yêu hiện tại, tăng trưởng nhìn tương lai—căng',
      'Ekspresif mau cinta sekarang, tumbuh lihat masa depan—ketegangan'
    ),
    oneLiner: M(
      '지금의 설렘과 내일의 비전이 만난 조합. 균형만 잡으면 강력하다',
      'Today’s spark meets tomorrow’s vision—powerful if balanced',
      '今のときめきと明日のビジョンが出会う組み合わせ。バランスが取れれば強い',
      '当下心动遇见未来愿景，平衡好了很强',
      '當下心動遇見未來願景，平衡好了很強',
      'Rung động hiện tại gặp tầm nhìn—mạnh nếu cân bằng',
      'Detik ini bertemu visi—kuat jika seimbang'
    ),
  },
  '2-3': {
    pairKey: '2-3',
    grade: 'C',
    emojiPair: '💝🌿',
    title: M(
      '올인 헌신형 + 독립 자유형',
      'All-in devotion + Independent',
      'オールイン献身型 + 自立自由型',
      '全心付出型 + 独立自由型',
      '全心付出型 + 獨立自由型',
      'Hy sinh trọn + Độc lập',
      'Pengabdian total + Independen'
    ),
    summary: M(
      '헌신형이 주는 돌봄을 독립형이 부담으로 느낄 수 있습니다. 독립형의 거리감을 헌신형이 무관심으로 해석할 수 있습니다. 두 사람이 서로에게 원하는 것의 방향이 반대에 가깝습니다.',
      'Care from the devoted partner can feel smothering to the independent one. Distance from the independent partner can read as indifference to the devoted one. What you want points in nearly opposite directions.',
      '献身型の世話が自立型には負担に感じられる。自立型の距離感を献身型は無関心と解釈しがち。求める方向がほぼ反対。',
      '付出型的照顾对独立型可能是负担；独立型的距离对付出型可能像冷漠。彼此需求方向几乎相反。',
      '付出型的照顧對獨立型可能是負擔；獨立型的距離對付出型可能像冷漠。彼此需求方向幾乎相反。',
      'Sự chăm sóc của người hy sinh có thể nặng với người độc lập; khoảng cách của độc lập có thể như thờ ơ với người hy sinh. Hướng mong muốn gần như ngược nhau.',
      'Perawatan pengabdi terasa memberatkan bagi independen; jarak independen terabaikan bagi pengabdi. Arah keinginan hampir berlawanan.'
    ),
    matchPoint: M(
      '헌신형이 독립형을 위해 공간을 내어줄 수 있고 독립형이 헌신형에게 자유를 알려줄 수 있음',
      'The devoted can make room; the independent can teach freedom',
      '献身型が自立型のためにスペースを譲れ、自立型が献身型に自由を教えられる',
      '付出型能为独立型让出空间，独立型能教付出型自由的边界',
      '付出型能為獨立型讓出空間，獨立型能教付出型自由的邊界',
      'Người hy sinh có thể nhường không gian; người độc lập dạy về tự do',
      'Pengabdi bisa memberi ruang; independen mengajarkan kebebasan'
    ),
    clashPoint: M(
      '"내가 이렇게 해주는데 왜 거리를 두지?" vs "이렇게 챙겨주는 게 오히려 부담이야"',
      '“I do all this—why the distance?” vs “All this care actually overwhelms me”',
      '「こんなにしてるのに距離を取るの？」vs「こんなに世話されるのが負担」',
      '“我为你做这么多你怎么还疏远？”对“你这样关心反而是负担”',
      '「我為你做這麼多你怎麼還疏遠？」對「你這樣關心反而是負擔」',
      '“Mình làm nhiều thế mà sao xa?” vs “Chăm vậy lại là gánh nặng”',
      '“Aku sudah begini kok masih jauh?” vs “Diperhatikan begini malah berat”'
    ),
    overcome: M(
      '독립형이 헌신형의 돌봄을 사랑의 언어로 이해하고, 헌신형이 독립형의 공간 욕구를 거절이 아닌 특성으로 이해하는 것이 핵심',
      'Key: the independent reads care as love-language; the devoted reads space-needs as a trait, not rejection',
      '自立型が献身型の世話を愛の言葉として理解し、献身型が自立型のスペース欲求を拒否ではなく特性として理解することが核心',
      '独立型把照顾理解为爱的语言，付出型把空间需求理解为特质而非拒绝',
      '獨立型把照顧理解為愛的語言，付出型把空間需求理解為特質而非拒絕',
      'Độc lập hiểu chăm sóc là ngôn ngữ tình yêu; hy sinh hiểu nhu cầu không gian là đặc tính không phải từ chối',
      'Independen pahami perawatan sebagai bahasa cinta; pengabdi pahami kebutuhan ruang sebagai sifat bukan penolakan'
    ),
    oneLiner: M(
      '사랑하지만 방식이 달라서 힘든 조합. 이해가 쌓이면 달라진다',
      'Love is there, styles clash—gets easier with understanding',
      '愛はあるがスタイルが違い大変。理解が積もれば変わる',
      '相爱但方式不同会累，理解多了会变好',
      '相愛但方式不同會累，理解多了會變好',
      'Có yêu nhưng khác cách—mệt; hiểu nhau lâu sẽ khác',
      'Ada cinta tapi beda gaya—sulit; makin paham makin membaik'
    ),
  },
  '2-4': {
    pairKey: '2-4',
    grade: 'S',
    emojiPair: '💝🏡',
    title: M(
      '올인 헌신형 + 안정 루틴형',
      'All-in devotion + Steady routine',
      'オールイン献身型 + 安定ルーティン型',
      '全心付出型 + 稳定日常型',
      '全心付出型 + 穩定日常型',
      'Hy sinh trọn + Thói quen ổn',
      'Pengabdian total + Rutin stabil'
    ),
    summary: M(
      '헌신형의 배려와 안정형의 꾸준함이 만나 가장 따뜻하고 안전한 관계가 형성됩니다. 서로에게 안도감을 주고 관계가 흔들리는 일이 적습니다.',
      'Devoted care meets steady consistency—one of the warmest, safest bonds. You reassure each other; the relationship rarely feels shaky.',
      '献身型の配慮と安定型の一貫性が合わさり、最もあたたかく安全な関係に。お互いに安心を与え、揺れにくい。',
      '付出型的体贴遇上稳定型的持续，关系又暖又稳，彼此安心，很少摇摆。',
      '付出型的體貼遇上穩定型的持續，關係又暖又穩，彼此安心，很少搖擺。',
      'Sự quan tâm của người hy sinh gặp sự đều đặn của người ổn định—ấm và an toàn, ít lung lay.',
      'Perhatian pengabdi bertemu konsistensi stabil—hangat dan aman, jarang goyah.'
    ),
    matchPoint: M(
      '둘 다 관계를 소중히 여기고 갈등을 키우지 않음. 일상의 행복이 자연스럽게 쌓임',
      'You both cherish the bond and avoid inflaming fights—daily happiness stacks naturally',
      '二人とも関係を大切にし、喧嘩を大きくしない。日常の幸せが自然に積み上がる',
      '都珍惜关系、不爱激化矛盾，日常幸福自然累积',
      '都珍惜關係、不愛激化矛盾，日常幸福自然累積',
      'Cả hai trân trọng mối quan hệ, ít làm to chuyện—hạnh phúc đời thường chồng lên',
      'Keduanya menghargai hubungan, tidak membesar-besarkan konflik—kebahagiaan harian menumpuk'
    ),
    clashPoint: M(
      '둘 다 표현이 적은 편이라 감사와 사랑을 말로 전하는 연습이 필요',
      'You both under-express—practice saying thanks and love out loud',
      '二人とも表現が少なめなので、感謝と愛を言葉にする練習が必要',
      '表达都偏少，需要练习把感谢和爱说出来',
      '表達都偏少，需要練習把感謝和愛說出來',
      'Cả hai ít nói—cần luyện nói cảm ơn và yêu thương',
      'Keduanya kurang verbal—latih ucapkan terima kasih dan cinta'
    ),
    oneLiner: M(
      '가장 따뜻하고 오래가는 조합. 매일이 포근한 커플',
      'Warm and lasting—everyday feels cozy',
      '最もあたたかく長持ちする組み合わせ。毎日がぽかぽか',
      '最暖最长久，每天都像裹着毯子',
      '最暖最長久，每天都像裹著毯子',
      'Ấm và bền—mỗi ngày đều êm',
      'Hangat dan tahan lama—setiap hari nyaman'
    ),
  },
  '2-5': {
    pairKey: '2-5',
    grade: 'S',
    emojiPair: '💝💜',
    title: M(
      '올인 헌신형 + 감성 연결형',
      'All-in devotion + Emotional connection',
      'オールイン献身型 + 感性コネクト型',
      '全心付出型 + 情感连结型',
      '全心付出型 + 情感連結型',
      'Hy sinh trọn + Cảm xúc sâu',
      'Pengabdian total + Koneksi emosional'
    ),
    summary: M(
      '헌신형의 돌봄이 감성형에게 가장 깊은 사랑받는 느낌을 주고 감성형의 공감이 헌신형에게 진심으로 인정받는 느낌을 줍니다. 감정적 연결이 매우 깊은 조합입니다.',
      'Devoted care gives the sensitive partner the deepest feeling of being loved; deep empathy gives the devoted partner a true sense of being valued. Emotional ties run very deep.',
      '献身型の世話が感性型に最も深い愛されている感を与え、感性型の共感が献身型に本当に認められた感を与える。感情的つながりが非常に深い。',
      '付出型的照顾让感性型最深地感到被爱；感性型的共情让付出型感到被真心认可。情感连结很深。',
      '付出型的照顧讓感性型最深地感到被愛；感性型的共情讓付出型感到被真心認可。情感連結很深。',
      'Chăm sóc của người hy sinh cho người nhạy cảm cảm giác được yêu sâu; đồng cảm cho người hy sinh cảm giác được trân trọng. Gắn kết rất sâu.',
      'Perawatan pengabdi membuat sensitif merasa sangat dicintai; empati membuat pengabdi merasa dihargai. Ikatan emosional sangat dalam.'
    ),
    matchPoint: M(
      '헌신형이 행동으로 사랑을 보여주고 감성형이 감정으로 사랑을 확인해줌. 서로의 필요를 완벽하게 채워줌',
      'Devotion shows love in action; sensitivity confirms it in feeling—you fill each other’s needs',
      '献身型が行動で、感性型が感情で愛を確認。お互いのニーズを満たし合える',
      '付出型用行动爱，感性型用情绪确认，彼此需求很合拍',
      '付出型用行動愛，感性型用情緒確認，彼此需求很合拍',
      'Hy sinh bằng hành động, nhạy cảm xác nhận bằng cảm xúc—đáp ứng nhu cầu',
      'Pengabdi tunjukkan dengan tindakan, sensitif konfirmasi dengan perasaan—memenuhi kebutuhan'
    ),
    clashPoint: M(
      '둘 다 감정이 깊어서 상처도 깊게 받을 수 있음. 갈등이 생기면 오래 남는 편',
      'Deep feelings mean deep wounds—conflicts can linger',
      '二人とも感情が深いので傷も深い。衝突は長く残りやすい',
      '感情都深，伤也深，矛盾容易拖很久',
      '感情都深，傷也深，矛盾容易拖很久',
      'Cảm xúc sâu nên vết thương sâu—mâu thuẫn dễ kéo dài',
      'Perasaan dalam jadi luka dalam—konflik bisa menggantung'
    ),
    oneLiner: M(
      '감정의 깊이가 같은 조합. 세상에서 가장 진한 사랑',
      'Matched emotional depth—some of the richest love',
      '感情の深さが同じ組み合わせ。世界で一番濃い愛',
      '情感深度匹配，爱很浓',
      '情感深度匹配，愛很濃',
      'Cùng độ sâu cảm xúc—tình rất đậm',
      'Kedalaman emosi sejajar—cinta sangat kaya'
    ),
  },
  '2-6': {
    pairKey: '2-6',
    grade: 'B',
    emojiPair: '💝🚀',
    title: M(
      '올인 헌신형 + 동반 성장형',
      'All-in devotion + Growth partner',
      'オールイン献身型 + 同伴成長型',
      '全心付出型 + 并肩成长型',
      '全心付出型 + 並肩成長型',
      'Hy sinh trọn + Đồng hành phát triển',
      'Pengabdian total + Partner tumbuh'
    ),
    summary: M(
      '헌신형은 관계 자체에 집중하고 성장형은 함께 나아가는 것에 집중합니다. 헌신형이 성장형을 뒷받침해줄 수 있지만 헌신에 대한 인정이 충분히 돌아오지 않으면 상처받을 수 있습니다.',
      'The devoted partner focuses on the relationship itself; the growth partner focuses on moving forward together. Devotion can support growth—but if appreciation doesn’t return, it hurts.',
      '献身型は関係そのものに、成長型は一緒に進むことに集中。献身型は成長型を支えられるが、認めが返らないと傷つく。',
      '付出型专注关系本身，成长型专注一起前进。付出能托住成长，但若得不到足够认可会受伤。',
      '付出型專注關係本身，成長型專注一起前進。付出能托住成長，但若得不到足夠認可會受傷。',
      'Người hy sinh tập trung vào quan hệ; người tăng trưởng vào tiến bộ chung. Hy sinh có thể đỡ nhưng thiếu công nhận sẽ đau.',
      'Pengabdi fokus hubungan; tumbuh fokus maju bersama. Pengabdi mendukung tapi kurang apresiasi menyakitkan.'
    ),
    matchPoint: M(
      '성장형이 방향을 제시하고 헌신형이 그 여정을 함께 지탱해주는 구조',
      'Growth sets direction; devotion carries the journey',
      '成長型が方向を示し、献身型が旅を支える',
      '成长型指方向，付出型一路托着',
      '成長型指方向，付出型一路托著',
      'Tăng trưởng chỉ hướng, hy sinh nâng hành trình',
      'Tumbuh tentukan arah, pengabdi menopang perjalanan'
    ),
    clashPoint: M(
      '헌신형은 "나를 봐줘"이고 성장형은 "우리 함께 앞으로 가자"임. 시선의 방향 차이',
      'Devoted: “See me.” Growth: “Let’s move forward together.” Different gaze',
      '献身型は「私を見て」、成長型は「一緒に前へ」。視線の向きの違い',
      '付出型要“看我”，成长型要“一起向前”，目光不同',
      '付出型要「看我」，成長型要「一起向前」，目光不同',
      'Hy sinh: “Nhìn mình”; tăng trưởng: “Cùng tiến”—khác tiêu điểm',
      'Pengabdi: “Lihat aku”; tumbuh: “Maju bareng”—beda fokus'
    ),
    oneLiner: M(
      '든든한 서포터와 비전이 있는 리더의 조합. 인정이 핵심',
      'Steady supporter meets vision-led leader—recognition is key',
      'しっかりサポーターとビジョンのあるリーダーの組み合わせ。認め合いが核心',
      '稳后盾遇有愿景的带领者，关键是认可',
      '穩後盾遇有願景的帶領者，關鍵是認可',
      'Người đỡ vững gặp người dẫn có tầm nhìn—công nhận là chìa khóa',
      'Pendukung kokoh bertemu pemimpin ber visi—pengakuan kunci'
    ),
  },
  '3-4': {
    pairKey: '3-4',
    grade: 'A',
    emojiPair: '🌿🏡',
    title: M(
      '독립 자유형 + 안정 루틴형',
      'Independent + Steady routine',
      '自立自由型 + 安定ルーティン型',
      '独立自由型 + 稳定日常型',
      '獨立自由型 + 穩定日常型',
      'Độc lập + Thói quen ổn',
      'Independen + Rutin stabil'
    ),
    summary: M(
      '독립형이 자신의 공간을 원하고 안정형이 일상을 함께하길 원하는 차이가 있지만 안정형이 집착하지 않는 스타일이기 때문에 독립형의 공간을 자연스럽게 허용할 수 있습니다.',
      'The independent partner wants space; the steady partner wants shared routine—but if the steady style isn’t clingy, they can naturally allow the independent partner’s space.',
      '自立型はスペースを、安定型は一緒の日常を望む違いはあるが、安定型が執着しないスタイルなら自立型のスペースを自然に許容できる。',
      '独立型要空间，稳定型要共同日常；若稳定型不黏人，就能自然包容独立型的空间。',
      '獨立型要空間，穩定型要共同日常；若穩定型不黏人，就能自然包容獨立型的空間。',
      'Người độc lập muốn không gian; người ổn định muốn thói quen chung—nếu ổn định không bám dính thì có thể cho phép không gian.',
      'Independen ingin ruang; stabil ingin rutinitas bersama—jika stabil tidak posesif, ruang bisa diterima.'
    ),
    matchPoint: M(
      '안정형이 독립형에게 압박을 주지 않음. 독립형이 돌아왔을 때 안정형이 항상 그 자리에 있음',
      'The steady partner doesn’t pressure; when the independent returns, someone is still there',
      '安定型が自立型を押しつけない。自立型が戻ってきたとき安定型がいつもそこにいる',
      '稳定型不施压，独立型回来时稳定型总在',
      '穩定型不施壓，獨立型回來時穩定型總在',
      'Ổn định không ép; khi độc lập quay lại vẫn có người ở đó',
      'Stabil tidak menekan; saat independen kembali ada yang menunggu'
    ),
    clashPoint: M(
      '독립형이 너무 멀어질 때 안정형이 불안해질 수 있음. 연결의 최소선을 합의해두는 것이 중요',
      'If the independent drifts too far, the steady partner may feel anxious—agree on a minimum connection',
      '自立型が離れすぎると安定型が不安になりやすい。つながりの最低ラインを合意することが重要',
      '独立型太远时稳定型会不安，要约定最低联络线',
      '獨立型太遠時穩定型會不安，要約定最低聯絡線',
      'Độc lập quá xa khiến ổn định lo—thống nhất mức tối thiểu kết nối',
      'Independen terlalu jauh membuat stabil cemas—sepakati garis minimum'
    ),
    oneLiner: M(
      '자유와 집의 조합. 독립형이 돌아올 집이 있고 안정형에게 신선한 바람이 있다',
      'Freedom meets home—the independent has a place to return; the steady gets fresh air',
      '自由と「家」の組み合わせ。自立型には帰る場所があり、安定型には新鮮な風がある',
      '自由遇见家，独立型有归处，稳定型有新风',
      '自由遇見家，獨立型有歸處，穩定型有新風',
      'Tự do gặp nhà—độc lập có chỗ về, ổn định có làn gió mới',
      'Kebebasan bertemu rumah—independen punya pulang, stabil dapat angin segar'
    ),
  },
  '3-5': {
    pairKey: '3-5',
    grade: 'B',
    emojiPair: '🌿💜',
    title: M(
      '독립 자유형 + 감성 연결형',
      'Independent + Emotional connection',
      '自立自由型 + 感性コネクト型',
      '独立自由型 + 情感连结型',
      '獨立自由型 + 情感連結型',
      'Độc lập + Cảm xúc sâu',
      'Independen + Koneksi emosional'
    ),
    summary: M(
      '감성형은 깊은 연결을 원하고 독립형은 적절한 거리를 원합니다. 감성형이 독립형의 거리감을 감정적 거절로 오해하는 경우가 생길 수 있습니다.',
      'The sensitive partner wants deep closeness; the independent wants healthy distance. Distance can be misread as emotional rejection.',
      '感性型は深いつながりを、自立型は適切な距離を望む。自立型の距離感を感情的拒否と誤解しやすい。',
      '感性型要深连结，独立型要合适距离；距离容易被误会成情感拒绝。',
      '感性型要深連結，獨立型要合適距離；距離容易被誤會成情感拒絕。',
      'Người nhạy cảm muốn gần sâu; người độc lập muốn khoảng cách—dễ hiểu nhầm là từ chối.',
      'Sensitif ingin dekat dalam; independen ingin jarak—mudah disalahpahami sebagai penolakan.'
    ),
    matchPoint: M(
      '독립형이 공간을 허용하고 감성형이 그 공간을 감성적으로 채워줄 수 있음',
      'Independence allows space; sensitivity can fill that space with feeling',
      '自立型が空間を許し、感性型がその空間を感情的に満たせる',
      '独立型给空间，感性型用情感填满',
      '獨立型給空間，感性型用情感填滿',
      'Độc lập cho không gian; nhạy cảm lấp đầy bằng cảm xúc',
      'Independen beri ruang; sensitif isi dengan perasaan'
    ),
    clashPoint: M(
      '감성형의 "더 가까이"와 독립형의 "조금 떨어져"가 지속적으로 충돌할 수 있음',
      'Sensitive: “Closer.” Independent: “A little space.”—ongoing friction',
      '感性型の「もっと近く」と自立型の「少し離れて」が継続的にぶつかる',
      '感性型“再近一点”对独立型“稍微远一点”会反复撞车',
      '感性型「再近一點」對獨立型「稍微遠一點」會反覆撞車',
      'Nhạy cảm: “Gần hơn”; độc lập: “Xa chút”—va liên tục',
      'Sensitif: “Lebih dekat”; independen: “Jarak sedikit”—gesekan berulang'
    ),
    oneLiner: M(
      '여백과 깊이의 조합. 서로의 리듬을 맞추는 과정이 곧 사랑',
      'Breathing room meets depth—syncing rhythms is the love work',
      '余白と深さの組み合わせ。リズムを合わせる過程がそのものが愛',
      '留白与深度，对齐节奏就是爱',
      '留白與深度，對齊節奏就是愛',
      'Khoảng trống gặp chiều sâu—hòa nhịp là yêu',
      'Ruang napas bertemu kedalaman—selaras irama adalah cinta'
    ),
  },
  '3-6': {
    pairKey: '3-6',
    grade: 'S',
    emojiPair: '🌿🚀',
    title: M(
      '독립 자유형 + 동반 성장형',
      'Independent + Growth partner',
      '自立自由型 + 同伴成長型',
      '独立自由型 + 并肩成长型',
      '獨立自由型 + 並肩成長型',
      'Độc lập + Đồng hành phát triển',
      'Independen + Partner tumbuh'
    ),
    summary: M(
      '두 사람 모두 각자의 삶을 중요하게 여기면서 함께 성장하는 것을 추구합니다. 서로의 공간을 존중하면서도 같은 방향을 바라보는 관계가 자연스럽게 형성됩니다.',
      'You both value your own lives while growing together. Respect for space plus shared direction forms naturally.',
      '二人ともそれぞれの人生を大切にしながら一緒に成長したい。スペースを尊重しつつ同じ方向を見る関係が自然にできる。',
      '你们都重视各自生活也一起成长，尊重空间又能同向，关系很自然。',
      '你們都重視各自生活也一起成長，尊重空間又能同向，關係很自然。',
      'Cả hai trọng cuộc sống riêng nhưng cùng phát triển—tôn trọng không gian và cùng hướng.',
      'Keduanya hargai hidup masing-masing sambil tumbuh bersama—hormati ruang dan arah sama.'
    ),
    matchPoint: M(
      '서로의 독립성을 완전히 존중하면서 함께 더 나아지는 관계. 가장 건강한 조합 중 하나',
      'Full respect for independence while leveling up together—among the healthiest pairs',
      'お互いの自立を尊重しつつ一緒により良くなる。最も健全な組み合わせの一つ',
      '完全尊重独立又一起进步，是最健康组合之一',
      '完全尊重獨立又一起進步，是最健康組合之一',
      'Tôn trọng độc lập hoàn toàn nhưng cùng tiến—một trong combo khỏe nhất',
      'Hormati independen penuh sambil maju bersama—salah satu yang paling sehat'
    ),
    clashPoint: M(
      '둘 다 감정 표현이 적어 서로 사랑받는다는 느낌이 옅어질 수 있음',
      'Both under-express—you may both feel unsure you’re loved',
      '二人とも感情表現が少なく、愛されている感が薄くなりがち',
      '表达都少，可能都觉得不够被爱',
      '表達都少，可能都覺得不夠被愛',
      'Cả hai ít thể hiện—dễ không chắc là được yêu',
      'Keduanya kurang ekspresif—bisa ragu dicintai'
    ),
    oneLiner: M(
      '자유로우면서 같은 방향을 보는 조합. 현대 관계의 이상형',
      'Free yet aligned—a modern ideal',
      '自由でありながら同じ方向を見る。現代関係の理想形',
      '自由又同向，很像现代关系的理想型',
      '自由又同向，很像現代關係的理想型',
      'Tự do mà cùng hướng—kiểu mẫu hiện đại',
      'Bebas tapi searah—ideal hubungan modern'
    ),
  },
  '4-5': {
    pairKey: '4-5',
    grade: 'A',
    emojiPair: '🏡💜',
    title: M(
      '안정 루틴형 + 감성 연결형',
      'Steady routine + Emotional connection',
      '安定ルーティン型 + 感性コネクト型',
      '稳定日常型 + 情感连结型',
      '穩定日常型 + 情感連結型',
      'Thói quen ổn + Cảm xúc sâu',
      'Rutin stabil + Koneksi emosional'
    ),
    summary: M(
      '안정형의 꾸준함이 감성형에게 정서적 안전감을 주고 감성형의 깊은 공감이 안정형에게 감정적 연결을 제공합니다. 서로의 부족한 부분을 자연스럽게 채워주는 조합입니다.',
      'Steadiness gives the sensitive partner emotional safety; deep empathy gives the steady partner connection. You naturally fill each other’s gaps.',
      '安定型の一貫性が感性型に情緒的安心を、感性型の深い共感が安定型に感情的つながりを与える。不足を自然に補い合う。',
      '稳定型给感性型安全感，感性型给稳定型情感连结，彼此自然互补。',
      '穩定型給感性型安全感，感性型給穩定型情感連結，彼此自然互補。',
      'Ổn định cho an toàn cảm xúc; nhạy cảm cho kết nối—bù đắp tự nhiên.',
      'Stabil memberi keamanan emosional; sensitif memberi koneksi—melengkapi alami.'
    ),
    matchPoint: M(
      '안정형이 감성형에게 흔들리지 않는 기반을 주고 감성형이 안정형의 일상에 감성을 더해줌',
      'Steady grounds the sensitive; sensitive adds feeling to the steady’s everyday',
      '安定型が感性型に揺れない土台を、感性型が安定型の日常に感情を足す',
      '稳定型给根基，感性型给日常加情感',
      '穩定型給根基，感性型給日常加情感',
      'Ổn định làm nền; nhạy cảm thêm cảm xúc vào đời thường',
      'Stabil jadi fondasi; sensitif tambahkan rasa di keseharian'
    ),
    clashPoint: M(
      '감성형이 변화를 원할 때 안정형이 너무 고집스럽게 느껴질 수 있음',
      'When the sensitive wants change, the steady can feel stubborn',
      '感性型が変化を望むとき、安定型が頑固に感じられることがある',
      '感性型想改变时，稳定型可能显得固执',
      '感性型想改變時，穩定型可能顯得固執',
      'Khi nhạy cảm muốn đổi, người ổn định có thể cứng nhắc',
      'Saat sensitif ingin ubah, stabil terasa keras kepala'
    ),
    oneLiner: M(
      '안정된 땅 위에 감성이 꽃피는 조합. 포근하고 아름다운 관계',
      'Emotion blooms on steady ground—cozy and beautiful',
      '安定した土台の上に感性が花開く。ぽかぽかで美しい',
      '稳定土地上情感开花，又暖又美',
      '穩定土地上情感開花，又暖又美',
      'Cảm xúc nở trên nền vững—ấm và đẹp',
      'Emosi mekar di tanah stabil—hangat dan indah'
    ),
  },
  '4-6': {
    pairKey: '4-6',
    grade: 'B',
    emojiPair: '🏡🚀',
    title: M(
      '안정 루틴형 + 동반 성장형',
      'Steady routine + Growth partner',
      '安定ルーティン型 + 同伴成長型',
      '稳定日常型 + 并肩成长型',
      '穩定日常型 + 並肩成長型',
      'Thói quen ổn + Đồng hành phát triển',
      'Rutin stabil + Partner tumbuh'
    ),
    summary: M(
      '안정형은 변하지 않는 관계를 원하고 성장형은 계속 나아가는 관계를 원합니다. 성장형의 변화 욕구가 안정형에게 불안감으로 느껴질 수 있습니다.',
      'The steady partner wants an unchanging bond; the growth partner wants constant forward motion. Change hunger can feel like anxiety to the steady one.',
      '安定型は変わらない関係を、成長型は進み続ける関係を望む。成長型の変化欲求が安定型には不安に感じられることがある。',
      '稳定型要不变，成长型要一直前进；成长型的求变可能让稳定型不安。',
      '穩定型要不變，成長型要一直前進；成長型的求變可能讓穩定型不安。',
      'Ổn định muốn yên; tăng trưởng muốn tiến—khát đổi có thể làm ổn định lo.',
      'Stabil ingin tetap; tumbuh ingin maju—hasrat ubah bisa membuat stabil cemas.'
    ),
    matchPoint: M(
      '안정형이 성장형의 여정을 든든하게 지지해줄 수 있음. 성장형이 안정형에게 새로운 가능성을 열어줄 수 있음',
      'Steady can support the journey; growth can open new doors for steady',
      '安定型が成長型の旅をしっかり支え、成長型が安定型に新しい可能性を開ける',
      '稳定型能托住成长型的路，成长型能给稳定型打开新可能',
      '穩定型能托住成長型的路，成長型能給穩定型打開新可能',
      'Ổn định nâng hành trình; tăng trưởng mở khả năng mới',
      'Stabil menopang perjalanan; tumbuh buka kemungkinan baru'
    ),
    clashPoint: M(
      '"지금 이대로가 좋아" vs "우리 더 나아가야 해" 방향성 충돌',
      '“I like it like this” vs “We need to keep moving”—direction clash',
      '「今のままがいい」vs「もっと前に」方向性の衝突',
      '“现在这样就好”对“我们还要前进”方向冲突',
      '「現在這樣就好」對「我們還要前進」方向衝突',
      '“Thế này đã tốt” vs “Phải tiến”—xung hướng',
      '“Sudah cukup begini” vs “Harus maju”—bentrok arah'
    ),
    oneLiner: M(
      '뿌리와 날개의 조합. 서로의 다름이 균형이 될 수 있다',
      'Roots and wings—your differences can balance',
      '根と翼の組み合わせ。違いがバランスになりうる',
      '根与翼，差异可成平衡',
      '根與翼，差異可成平衡',
      'Rễ và cánh—khác biệt có thể cân bằng',
      'Akar dan sayap—perbedaan bisa menyeimbangkan'
    ),
  },
  '5-6': {
    pairKey: '5-6',
    grade: 'B',
    emojiPair: '💜🚀',
    title: M(
      '감성 연결형 + 동반 성장형',
      'Emotional connection + Growth partner',
      '感性コネクト型 + 同伴成長型',
      '情感连结型 + 并肩成长型',
      '情感連結型 + 並肩成長型',
      'Cảm xúc sâu + Đồng hành phát triển',
      'Koneksi emosional + Partner tumbuh'
    ),
    summary: M(
      '감성형은 감정적 연결을 우선시하고 성장형은 실질적인 발전을 우선시합니다. 서로가 중요하게 여기는 것이 다르지만 그 다름이 균형을 만들 수 있습니다.',
      'The sensitive partner prioritizes emotional bonding; the growth partner prioritizes tangible progress. Priorities differ, but that difference can balance you.',
      '感性型は感情的つながりを、成長型は実質的な発展を優先。大切にするものは違うが、その違いがバランスになりうる。',
      '感性型重情感连结，成长型重实质发展；不同但能互相平衡。',
      '感性型重情感連結，成長型重實質發展；不同但能互相平衡。',
      'Nhạy cảm ưu tiên gắn kết; tăng trưởng ưu tiên tiến bộ—khác nhau có thể cân.',
      'Sensitif utamakan ikatan; tumbuh utamakan kemajuan—beda bisa seimbangkan.'
    ),
    matchPoint: M(
      '감성형이 관계의 감정 온도를 유지하고 성장형이 관계의 방향을 잡아줌',
      'Sensitive keeps emotional warmth; growth keeps direction',
      '感性型が感情の温度を、成長型が方向を保つ',
      '感性型保温，成长型掌舵',
      '感性型保溫，成長型掌舵',
      'Nhạy cảm giữ nhiệt cảm xúc; tăng trưởng giữ hướng',
      'Sensitif jaga suhu emosi; tumbuh pegang arah'
    ),
    clashPoint: M(
      '감성형이 감정적 이야기를 꺼낼 때 성장형이 해결책을 먼저 제시해 감성형이 상처받을 수 있음',
      'When the sensitive opens up emotionally, the growth partner jumps to fixes—and the sensitive feels hurt',
      '感性型が感情の話をするとき、成長型が先に解決策を出して感性型が傷つくことがある',
      '感性型倾诉情绪时成长型先给方案，感性型可能受伤',
      '感性型傾訴情緒時成長型先給方案，感性型可能受傷',
      'Khi nhạy cảm mở lòng, người tăng trưởng đưa giải pháp trước—dễ tổn thương',
      'Saat sensitif curhat, tumbuh langsung solusi—sensitif bisa terluka'
    ),
    oneLiner: M(
      '마음과 머리가 만난 조합. 서로의 언어를 배우면 가장 완전한 관계',
      'Heart meets head—learn each other’s language for the fullest bond',
      '心と頭が出会う組み合わせ。お互いの言語を学べば最も完全な関係に',
      '心与脑相遇，学会彼此语言就最完整',
      '心與腦相遇，學會彼此語言就最完整',
      'Tim gặp lý—học ngôn ngữ nhau để trọn vẹn',
      'Hati bertemu logika—pelajari bahasa masing-masing untuk utuh'
    ),
  },
};

export function getPhase3CoupleChemistryPairResult(typeA: string, typeB: string): Phase3CoupleChemistryPairResult {
  const key = getCouplePairKey(typeA, typeB);
  return phase3CoupleChemistryPairResults[key];
}

