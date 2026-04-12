/** 나의 완벽주의 지수 — 12문항 4지선다, A=0 B=1 C=2 D=3, 총점 0~36 → 6유형 */

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

const E = (): Record<string, string> => M('', '', '', '', '', '', '');

export interface Phase3PerfectionismIndexQuestion {
  id: number;
  question: Record<string, string>;
  options: { text: Record<string, string>; score: number }[];
}

export interface Phase3PerfectionismIndexResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  /** 본문 도입(한 줄 요약 아래 첫 단락) */
  description: Record<string, string>;
  lifeImpact: Record<string, string>;
  workStyle: Record<string, string>;
  relationshipStyle: Record<string, string>;
  /** Type6 등 — 비어 있으면 UI에서 생략 */
  messageToYou: Record<string, string>;
  /** Type5·6 — 비어 있으면 UI에서 생략 */
  recommendedDirection: Record<string, string>;
  empathyLevel: Record<string, string>;
  characteristics: Record<string, string>;
  goodMatch: Record<string, string>;
  badMatch: Record<string, string>;
}

export const phase3PerfectionismIndexQuestions: Phase3PerfectionismIndexQuestion[] = [
  {
    id: 1,
    question: M(
      '이메일이나 메시지를 보내기 전 나는?',
      'Before I send an email or message, I…',
      'メールやメッセージを送る前、私は？',
      '在发送邮件或消息之前，我会？',
      '在傳送郵件或訊息之前，我會？',
      'Trước khi gửi email hoặc tin nhắn, tôi…',
      'Sebelum mengirim email atau pesan, saya…'
    ),
    options: [
      {
        text: M(
          '한 번 쓰고 바로 보낸다. 크게 다시 읽지 않는다',
          'Write once and send; I barely reread it.',
          '一度書いてすぐ送る。あまり読み返さない。',
          '写一次就发，基本不会再读。',
          '寫一次就傳，幾乎不會再讀。',
          'Viết một lần là gửi; hầu như không đọc lại.',
          'Menulis sekali lalu kirim; hampir tidak membaca ulang.'
        ),
        score: 0,
      },
      {
        text: M(
          '한 번 정도 다시 읽고 보낸다',
          'I reread about once, then send.',
          '一度くらい読み返してから送る。',
          '会再读一遍左右再发。',
          '會再讀一次左右再傳。',
          'Đọc lại khoảng một lần rồi gửi.',
          'Membaca ulang sekali lalu mengirim.'
        ),
        score: 1,
      },
      {
        text: M(
          '두세 번 읽고 어색한 표현이 있으면 고친다',
          'I read it two or three times and fix awkward wording.',
          '二、三回読み、違和感があれば直す。',
          '会读两三遍，别扭就改。',
          '會讀兩三遍，彆扭就改。',
          'Đọc hai ba lần và sửa chỗ vụng về.',
          'Membaca dua–tiga kali dan memperbaiki bagian yang janggal.'
        ),
        score: 2,
      },
      {
        text: M(
          '여러 번 읽고 표현·맞춤법·어투까지 전부 확인하고 보낸다',
          'I read many times and check wording, spelling, and tone before sending.',
          '何度も読み、表現・綴り・トーンまで全部確認して送る。',
          '反复阅读，确认表达、拼写和语气后才发送。',
          '反覆閱讀，確認表達、拼寫和語氣後才傳送。',
          'Đọc nhiều lần, kiểm tra cách diễn đạt, chính tả, giọng điệu rồi mới gửi.',
          'Membaca berkali-kali; memeriksa ungkapan, ejaan, dan nada sebelum mengirim.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 2,
    question: M(
      '발표나 보고서 등 결과물을 제출하기 전 나는?',
      'Before I submit a presentation, report, or other deliverable, I…',
      '発表や報告書など成果物を提出する前、私は？',
      '在提交演示、报告等成果之前，我会？',
      '在提交簡報、報告等成果之前，我會？',
      'Trước khi nộp bài thuyết trình, báo cáo hoặc sản phẩm, tôi…',
      'Sebelum mengumpulkan presentasi, laporan, atau hasil kerja, saya…'
    ),
    options: [
      {
        text: M(
          '완성됐으면 바로 제출한다. 어느 정도면 충분하다',
          'If it is done, I submit. “Good enough” is enough.',
          'できたらすぐ提出。「十分」でいい。',
          '完成了就交，“差不多”就够。',
          '完成了就交，「差不多」就夠。',
          'Xong là nộp; “đủ tốt” là đủ.',
          'Selesai langsung kumpulkan; “cukup baik” sudah cukup.'
        ),
        score: 0,
      },
      {
        text: M(
          '한 번 검토하고 큰 문제가 없으면 낸다',
          'I review once; if nothing major is wrong, I submit.',
          '一度確認し、大きな問題がなければ出す。',
          '检查一遍，没有大问题就交。',
          '檢查一遍，沒有大問題就交。',
          'Rà một lần; không có lỗi lớn thì nộp.',
          'Tinjau sekali; jika tidak ada masalah besar, kumpulkan.'
        ),
        score: 1,
      },
      {
        text: M(
          '여러 번 검토하고 고칠 부분을 찾아 수정한다',
          'I review many times, find issues, and revise.',
          '何度も見直し、直すところを探して修正する。',
          '多次检查，找出问题并修改。',
          '多次檢查，找出問題並修改。',
          'Xem lại nhiều lần, tìm chỗ sửa và chỉnh.',
          'Mengecek berkali-kali, mencari bagian yang perlu diperbaiki.'
        ),
        score: 2,
      },
      {
        text: M(
          '완벽하다는 확신이 들 때까지 계속 고친다. 마감 직전까지 손을 댄다',
          'I keep editing until I feel it is perfect. I am still changing it at the deadline.',
          '完璧だと確信できるまで直し続ける。締切直前まで手を入れる。',
          '改到确信完美为止，截止前还在改。',
          '改到確信完美為止，截止前還在改。',
          'Sửa đến khi tin là hoàn hảo; sát hạn vẫn chỉnh.',
          'Terus mengedit sampai merasa sempurna; masih mengubah mendekati tenggat.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 3,
    question: M(
      '일이나 과제를 시작하기 전 나는?',
      'Before I start work or an assignment, I…',
      '仕事や課題を始める前、私は？',
      '在开始工作或作业之前，我会？',
      '在開始工作或作業之前，我會？',
      'Trước khi bắt đầu việc hoặc bài tập, tôi…',
      'Sebelum memulai pekerjaan atau tugas, saya…'
    ),
    options: [
      {
        text: M(
          '일단 시작한다. 하면서 맞춰가는 편이다',
          'I just start and adjust as I go.',
          'とりあえず始める。やりながら合わせる。',
          '先开始，边做边调整。',
          '先開始，邊做邊調整。',
          'Cứ bắt đầu, vừa làm vừa chỉnh.',
          'Langsung mulai, sesuaikan sambil jalan.'
        ),
        score: 0,
      },
      {
        text: M(
          '간단히 방향을 잡고 시작한다',
          'I set a simple direction, then start.',
          'ざっくり方向を決めて始める。',
          '先定个大致方向再开始。',
          '先定個大致方向再開始。',
          'Xác định hướng đơn giản rồi bắt đầu.',
          'Menetapkan arah singkat lalu mulai.'
        ),
        score: 1,
      },
      {
        text: M(
          '계획을 세운 뒤 시작한다. 준비가 어느 정도 돼야 시작이 편하다',
          'I make a plan first. I need some preparation before I feel ready to start.',
          '計画を立ててから始める。ある程度準備がないと始めにくい。',
          '先列计划再开始，需要一定准备才安心动手。',
          '先列計畫再開始，需要一定準備才安心動手。',
          'Lập kế hoạch trước; cần chuẩn bị một mức mới dễ bắt đầu.',
          'Membuat rencana dulu; perlu persiapan agar nyaman memulai.'
        ),
        score: 2,
      },
      {
        text: M(
          '완벽한 준비가 안 되면 시작이 어렵다. 준비하다 시간이 많이 가는 경우도 있다',
          'If preparation is not perfect, starting is hard. Sometimes prep takes most of the time.',
          '完璧な準備がないと始められない。準備に時間がかかりすぎることも。',
          '准备不够完美就很难开始，有时准备会花掉大量时间。',
          '準備不夠完美就很難開始，有時準備會花掉大量時間。',
          'Chuẩn bị chưa hoàn hảo thì khó bắt đầu; đôi khi chuẩn bị tốn phần lớn thời gian.',
          'Tanpa persiapan sempurna sulit mulai; kadang persiapan memakan waktu lama.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 4,
    question: M(
      '내가 실수를 했을 때 나는?',
      'When I make a mistake, I…',
      'ミスをしたとき、私は？',
      '当我犯错时，我会？',
      '當我犯錯時，我會？',
      'Khi tôi mắc lỗi, tôi…',
      'Saat saya membuat kesalahan, saya…'
    ),
    options: [
      {
        text: M(
          '빠르게 인정하고 넘어간다. 실수는 누구나 한다',
          'I admit it quickly and move on. Everyone makes mistakes.',
          'すぐ認めて次へ。ミスは誰にでもある。',
          '很快承认并翻篇，谁都会犯错。',
          '很快承認並翻篇，誰都會犯錯。',
          'Thừa nhận nhanh và bỏ qua; ai cũng nhầm.',
          'Mengakui cepat dan lanjut; semua orang bisa salah.'
        ),
        score: 0,
      },
      {
        text: M(
          '잠깐 신경 쓰이지만 금방 잊는 편이다',
          'It bothers me briefly, then I forget.',
          '少し気になるが、すぐ忘れる。',
          '会烦一下，但很快忘掉。',
          '會煩一下，但很快忘掉。',
          'Hơi bực một lúc nhưng quên nhanh.',
          'Sedikit mengganggu lalu cepat lupa.'
        ),
        score: 1,
      },
      {
        text: M(
          '꽤 오래 생각하게 된다. 왜 그랬는지 복기하는 편이다',
          'I think about it for a long time and replay why it happened.',
          'かなり長く考える。なぜそうしたか振り返る。',
          '会想很久，反复回想原因。',
          '會想很久，反覆回想原因。',
          'Nghĩ lâu và xem lại vì sao lại vậy.',
          'Lama memikirkan dan mengulang mengapa itu terjadi.'
        ),
        score: 2,
      },
      {
        text: M(
          '한참 동안 머릿속에 남는다. 비슷한 실수를 반복하지 않으려고 과도하게 신경 쓴다',
          'It stays in my head a long time. I overthink to avoid repeating it.',
          'ずっと頭に残る。繰り返さないよう過度に気にする。',
          '久久挥之不去，为避免再犯而过度纠结。',
          '久久揮之不去，為避免再犯而過度糾結。',
          'Lâu không nguôi; lo quá mức để không lặp lại.',
          'Terngiang lama; terlalu mengkhawatirkan agar tidak terulang.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 5,
    question: M(
      '공간·물건의 정돈 상태에 대한 나의 기준은?',
      'My standard for how tidy space and objects should be is…',
      '空間・物の整頓について、私の基準は？',
      '对空间和物品整洁程度，我的标准是？',
      '對空間和物品整潔程度，我的標準是？',
      'Tiêu chuẩn của tôi về độ gọn gàng của không gian và đồ đạc là…',
      'Standar saya untuk kerapian ruang dan barang adalah…'
    ),
    options: [
      {
        text: M(
          '크게 신경 쓰지 않는다. 어질러져도 별로 불편하지 않다',
          'I do not care much. Mess does not really bother me.',
          'あまり気にしない。散らかっていても平気。',
          '不太在意，乱一点也无所谓。',
          '不太在意，亂一點也無所謂。',
          'Không mấy để ý; bừa cũng không sao.',
          'Tidak terlalu peduli; berantakan tidak mengganggu.'
        ),
        score: 0,
      },
      {
        text: M(
          '가끔 정리하는 편이다. 많이 어질러지면 치운다',
          'I tidy sometimes. If it gets too messy, I clean up.',
          'たまに片付ける。かなり散らかったら掃除する。',
          '偶尔整理，太乱才收拾。',
          '偶爾整理，太亂才收拾。',
          'Thỉnh thoảng dọn; quá bừa mới dọn.',
          'Kadang merapikan; beres jika terlalu berantakan.'
        ),
        score: 1,
      },
      {
        text: M(
          '어느 정도 정돈돼 있어야 편하다. 어질러진 공간에서는 집중이 잘 안 된다',
          'I need things fairly tidy. In a messy space I cannot focus well.',
          'ある程度整っていないと落ち着かない。散らかると集中できない。',
          '需要一定程度的整洁，太乱难以专注。',
          '需要一定程度的整潔，太亂難以專注。',
          'Cần khá gọn mới thoải mái; bừa thì khó tập trung.',
          'Perlu cukup rapi agar nyaman; berantakan mengganggu fokus.'
        ),
        score: 2,
      },
      {
        text: M(
          '물건의 위치·각도까지 신경 쓰인다. 약간 어긋나도 불편함이 느껴진다',
          'I notice position and angle. Even a small misalignment feels wrong.',
          '位置や角度まで気になる。少しズレると不快。',
          '连位置和角度都在意，稍有偏差就不舒服。',
          '連位置和角度都在意，稍有偏差就不舒服。',
          'Để ý cả vị trí và góc; lệch một chút đã khó chịu.',
          'Memperhatikan posisi dan sudut; sedikit salah sudah tidak nyaman.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 6,
    question: M(
      '다른 사람이 한 일이 내 기준에 못 미쳤을 때 나는?',
      'When someone else’s work does not meet my standard, I…',
      '他人の仕事が自分の基準に届かないとき、私は？',
      '当别人做的东西达不到我的标准时，我会？',
      '當別人做的工作達不到我的標準時，我會？',
      'Khi việc người khác không đạt tiêu chuẩn của tôi, tôi…',
      'Saat pekerjaan orang lain tidak memenuhi standar saya, saya…'
    ),
    options: [
      {
        text: M(
          '크게 신경 쓰지 않는다. 각자 방식이 있다',
          'I do not mind much. Everyone has their way.',
          'あまり気にしない。人それぞれだ。',
          '不太在意，各有各的做法。',
          '不太在意，各有各的做法。',
          'Không để ý nhiều; mỗi người một kiểu.',
          'Tidak terlalu memikirkan; tiap orang punya caranya.'
        ),
        score: 0,
      },
      {
        text: M(
          '조금 아쉽지만 그냥 넘어간다',
          'I feel a bit disappointed but let it go.',
          '少し残念だが、そのままにする。',
          '有点遗憾，但就算了。',
          '有點遺憾，但就算了。',
          'Hơi tiếc nhưng bỏ qua.',
          'Sedikit kecewa tetapi melepaskan.'
        ),
        score: 1,
      },
      {
        text: M(
          '내가 고치거나 다시 하게 되는 경우가 있다',
          'I often end up fixing it or redoing it myself.',
          '自分で直したりやり直したりすることがある。',
          '常会自己去改或重做。',
          '常會自己去改或重做。',
          'Thường tự sửa hoặc làm lại.',
          'Sering memperbaiki atau mengerjakan ulang sendiri.'
        ),
        score: 2,
      },
      {
        text: M(
          '내가 직접 하는 게 낫다고 느낀다. 다른 사람에게 맡기기가 어렵다',
          'I feel it is better if I do it myself. Delegating is hard.',
          '自分でやった方がいいと感じる。任せにくい。',
          '觉得不如自己做，很难交给别人。',
          '覺得不如自己做，很難交給別人。',
          'Thấy tự làm hơn; khó giao cho người khác.',
          'Merasa lebih baik mengerjakan sendiri; sulit mendelegasikan.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 7,
    question: M(
      '계획이 예상과 다르게 흘러갈 때 나는?',
      'When plans go differently than expected, I…',
      '計画が思うように進まないとき、私は？',
      '当计划不如预期时，我会？',
      '當計畫不如預期時，我會？',
      'Khi kế hoạch không như dự định, tôi…',
      'Saat rencana tidak sesuai harapan, saya…'
    ),
    options: [
      {
        text: M(
          '유연하게 적응한다. 계획은 참고용이다',
          'I adapt flexibly. Plans are just a guide.',
          '柔軟に対応する。計画は目安。',
          '灵活适应，计划只是参考。',
          '靈活適應，計畫只是參考。',
          'Linh hoạt thích nghi; kế hoạch chỉ là tham khảo.',
          'Beradaptasi fleksibel; rencana hanya panduan.'
        ),
        score: 0,
      },
      {
        text: M(
          '조금 당황하지만 금방 적응한다',
          'I am a bit thrown off, but I adjust quickly.',
          '少し慌てるが、すぐ適応する。',
          '会有点慌，但很快适应。',
          '會有點慌，但很快適應。',
          'Hơi hoảng nhưng nhanh thích nghi.',
          'Sedikit kaget tetapi cepat beradaptasi.'
        ),
        score: 1,
      },
      {
        text: M(
          '불편하다. 원래 계획대로 되지 않으면 신경 쓰인다',
          'It feels uncomfortable. If it is not on plan, it bothers me.',
          '落ち着かない。計画通りでないと気になる。',
          '会不舒服，不按计划就心里别扭。',
          '會不舒服，不按計畫就心裡彆扭。',
          'Khó chịu; không theo kế hoạch là bận tâm.',
          'Tidak nyaman; menyimpang dari rencana mengganggu pikiran.'
        ),
        score: 2,
      },
      {
        text: M(
          '상당히 불편하다. 변수가 생기면 처음부터 다시 계획하고 싶어진다',
          'It is very uncomfortable. When variables appear, I want to replan from scratch.',
          'かなり不快。変数があると一から組み直したくなる。',
          '很不舒服，一有变数就想从头重排计划。',
          '很不舒服，一有變數就想從頭重排計畫。',
          'Rất khó chịu; có biến số là muốn lập lại từ đầu.',
          'Sangat tidak nyaman; ada variabel ingin merencanakan ulang dari nol.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 8,
    question: M(
      '무언가를 배울 때 나의 패턴은?',
      'When I learn something new, my pattern is…',
      '何かを学ぶとき、私のパターンは？',
      '学习新事物时，我的模式是？',
      '學習新事物時，我的模式是？',
      'Khi học điều gì đó, kiểu của tôi là…',
      'Saat mempelajari sesuatu, pola saya adalah…'
    ),
    options: [
      {
        text: M(
          '전체적인 흐름을 파악하고 빠르게 활용하는 편이다',
          'I grasp the big picture and use it quickly.',
          '全体の流れを掴んで素早く使う。',
          '先抓整体再快速上手。',
          '先抓整體再快速上手。',
          'Nắm bức tranh lớn và dùng nhanh.',
          'Memahami gambaran besar dan cepat menerapkan.'
        ),
        score: 0,
      },
      {
        text: M(
          '어느 정도 익히면 시작한다. 완전히 마스터하지 않아도 괜찮다',
          'I start once I know enough. Full mastery is not required.',
          'ある程度わかったら始める。完璧にマスターしなくてもいい。',
          '差不多会了就开始，不必完全精通。',
          '差不多會了就開始，不必完全精通。',
          'Biết tạm đủ là bắt đầu; không cần thành thạo hoàn toàn.',
          'Mulai setelah cukup paham; tidak perlu menguasai sepenuhnya.'
        ),
        score: 1,
      },
      {
        text: M(
          '제대로 이해하고 활용하고 싶다. 모르는 부분이 있으면 넘어가기 어렵다',
          'I want to understand properly before using it. I cannot skip unknown parts.',
          'きちんと理解してから使いたい。わからないまま進めにくい。',
          '想弄懂再用，有不懂就很难往下走。',
          '想弄懂再用，有不懂就很難往下走。',
          'Muốn hiểu kỹ trước; chỗ chưa rõ khó bỏ qua.',
          'Ingin paham dulu; bagian yang belum jelas sulit dilewati.'
        ),
        score: 2,
      },
      {
        text: M(
          '완전히 마스터하지 못하면 활용이 어렵다. 기초부터 완벽하게 다지려 한다',
          'If I have not fully mastered it, I cannot apply it well. I want a perfect foundation.',
          '完全にマスターしないと使えない。基礎から完璧にしたい。',
          '没完全掌握就很难用，想从基础打牢。',
          '沒完全掌握就很難用，想從基礎打牢。',
          'Chưa thành thạo hoàn toàn thì khó vận dụng; muốn nền tảng hoàn hảo.',
          'Tanpa kuasai sepenuhnya sulit menerapkan; ingin fondasi sempurna.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 9,
    question: M(
      '내가 한 일에 대한 만족도는?',
      'How satisfied am I with what I have done?',
      '自分がした仕事への満足度は？',
      '我对自己完成的事情有多满意？',
      '我對自己完成的事情有多滿意？',
      'Mức độ hài lòng với việc tôi đã làm?',
      'Seberapa puas saya dengan hasil kerja saya?'
    ),
    options: [
      {
        text: M(
          '대체로 만족한다. 충분히 했으면 된다',
          'Mostly satisfied. If I did enough, that is enough.',
          'だいたい満足。十分やればそれでいい。',
          '大体满意，做到位就够。',
          '大體滿意，做到位就夠。',
          'Khá hài lòng; làm đủ là đủ.',
          'Cukup puas; cukup berarti cukup.'
        ),
        score: 0,
      },
      {
        text: M(
          '보통 만족하는 편이다. 가끔 아쉬울 때도 있다',
          'Usually satisfied, though sometimes I feel it could be better.',
          'だいたい満足。ときどきもっとできたと思う。',
          '通常满意，偶尔觉得还能更好。',
          '通常滿意，偶爾覺得還能更好。',
          'Thường hài lòng; đôi khi thấy còn có thể hơn.',
          'Biasanya puas; kadang merasa bisa lebih baik.'
        ),
        score: 1,
      },
      {
        text: M(
          '자주 아쉽다. 조금 더 잘할 수 있었을 것 같다는 생각이 든다',
          'Often dissatisfied. I feel I could have done a bit better.',
          'よく物足りない。もっとできた気がする。',
          '经常遗憾，觉得本可以做得更好。',
          '經常遺憾，覺得本可以做得更好。',
          'Thường tiếc; cảm giác lẽ ra làm tốt hơn được.',
          'Sering merasa kurang; sepertinya bisa lebih baik.'
        ),
        score: 2,
      },
      {
        text: M(
          '거의 만족하지 못한다. 완성된 후에도 더 잘할 수 있었다는 생각이 남는다',
          'I am rarely satisfied. Even after finishing, I still feel I could have done better.',
          'ほとんど満足できない。終わっても「もっとできた」が残る。',
          '几乎不满意，做完了还觉得本可以更好。',
          '幾乎不滿意，做完了還覺得本可以更好。',
          'Hiếm khi hài lòng; xong rồi vẫn nghĩ lẽ ra làm tốt hơn.',
          'Jarang puas; selesai pun masih merasa bisa lebih baik.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 10,
    question: M(
      '마감이나 약속 시간에 대한 나의 태도는?',
      'My attitude toward deadlines or appointment times is…',
      '締切や約束の時間への私の態度は？',
      '对截止日期或约定时间，我的态度是？',
      '對截止日期或約定時間，我的態度是？',
      'Thái độ của tôi với hạn chót hoặc giờ hẹn là…',
      'Sikap saya terhadap tenggat atau janji waktu adalah…'
    ),
    options: [
      {
        text: M(
          '지키려 하지만 약간 유연한 편이다',
          'I try to meet them but can be a little flexible.',
          '守ろうとするが、少し柔軟。',
          '想守时，但略有弹性。',
          '想守時，但略有彈性。',
          'Cố gắng đúng giờ nhưng có thể linh hoạt nhẹ.',
          'Berusaha tepat waktu tetapi agak fleksibel.'
        ),
        score: 0,
      },
      {
        text: M(
          '지키려고 노력하고 대부분은 지킨다',
          'I try hard and usually make it on time.',
          '守ろうと努力し、だいたい守れる。',
          '会努力守时，大多能做到。',
          '會努力守時，大多能做到。',
          'Cố gắng và thường đúng giờ.',
          'Berusaha dan biasanya tepat waktu.'
        ),
        score: 1,
      },
      {
        text: M(
          '반드시 지킨다. 늦는 것이 불편하다',
          'I must be on time. Being late feels very uncomfortable.',
          '必ず守る。遅れるのが苦手。',
          '必须准时，迟到很不舒服。',
          '必須準時，遲到很不舒服。',
          'Phải đúng giờ; trễ rất khó chịu.',
          'Harus tepat waktu; terlambat sangat tidak nyaman.'
        ),
        score: 2,
      },
      {
        text: M(
          '마감보다 훨씬 일찍 끝내야 안심이 된다. 마감에 쫓기는 느낌 자체가 스트레스다',
          'I need to finish well before the deadline. The feeling of racing the clock is stressful.',
          '締切よりずっと前に終えないと安心できない。締切に追われるのがストレス。',
          '必须远早于截止才安心，被截止追着跑压力很大。',
          '必須遠早於截止才安心，被截止追著跑壓力很大。',
          'Cần xong sớm hơn nhiều so với hạn; bị giờ dí là căng thẳng.',
          'Harus selesai jauh sebelum tenggat; dikejar waktu sangat stres.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 11,
    question: M(
      '칭찬을 받았을 때 나의 반응은?',
      'When I receive praise, my reaction is…',
      '褒められたとき、私の反応は？',
      '受到表扬时，我的反应是？',
      '受到讚美時，我的反應是？',
      'Khi được khen, phản ứng của tôi là…',
      'Saat dipuji, reaksi saya adalah…'
    ),
    options: [
      {
        text: M(
          '기쁘게 받아들인다. 인정받는 것이 좋다',
          'I accept it happily. Being recognized feels good.',
          'うれしく受け取る。認められるのが嬉しい。',
          '开心接受，被认可很好。',
          '開心接受，被認可很好。',
          'Vui vẻ nhận; được công nhận thật tốt.',
          'Menerima dengan senang; diakui itu menyenangkan.'
        ),
        score: 0,
      },
      {
        text: M(
          '기쁘지만 조금 쑥스럽다. 잘 받아들이는 편이다',
          'I am happy but a bit shy. I generally take it well.',
          '嬉しいが少し照れる。まあ受け取れる。',
          '高兴但有点害羞，大体接得住。',
          '高興但有點害羞，大體接得住。',
          'Vui nhưng hơi ngại; nhìn chung nhận tốt.',
          'Senang tetapi sedikit malu; umumnya bisa menerima.'
        ),
        score: 1,
      },
      {
        text: M(
          '고맙지만 "아직 부족한데"라는 생각이 함께 든다',
          'I say thanks but also think, “I am still not good enough.”',
          'ありがたいが「まだ足りない」とも思う。',
          '谢谢，但也会想“还不够好”。',
          '謝謝，但也會想「還不夠好」。',
          'Cảm ơn nhưng nghĩ “vẫn chưa đủ”.',
          'Terima kasih tetapi berpikir “masih kurang”.'
        ),
        score: 2,
      },
      {
        text: M(
          '칭찬이 믿기지 않거나 "이 정도로 칭찬받아도 되나"라는 생각이 먼저 든다',
          'I barely believe the praise, or I think, “Do I deserve this?”',
          '褒められても信じにくい。「これでいいの？」が先に来る。',
          '不太信这夸奖，或先想“这也值得夸吗”。',
          '不太信這誇獎，或先想「這也值得誇嗎」。',
          'Khó tin hoặc nghĩ “mình có xứng được khen không”.',
          'Sulit percaya atau berpikir “apakah aku pantas dipuji”.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 12,
    question: M(
      '나의 완벽주의에 대한 솔직한 생각은?',
      'Honestly, what do I think about my own perfectionism?',
      '自分の完璧主義について、正直なところ？',
      '说实话，我怎么看自己的完美主义？',
      '說實話，我怎麼看自己的完美主義？',
      'Thật lòng, tôi nghĩ gì về chủ nghĩa hoàn hảo của mình?',
      'Sejujurnya, bagaimana saya melihat perfeksionisme saya sendiri?'
    ),
    options: [
      {
        text: M(
          '완벽주의와 거리가 멀다. 충분하면 된다는 주의다',
          'Far from perfectionism. I am a “good enough” person.',
          '完璧主義とは無縁。「十分でいい」タイプ。',
          '离完美主义很远，属于“够用就好”。',
          '離完美主義很遠，屬於「夠用就好」。',
          'Không giống chủ nghĩa hoàn hảo; kiểu “đủ là được”.',
          'Jauh dari perfeksionisme; tipe “cukup sudah baik”.'
        ),
        score: 0,
      },
      {
        text: M(
          '약간 있는 것 같다. 어떤 부분에서는 꼼꼼한 편이다',
          'A bit, maybe. In some areas I am detail-oriented.',
          '少しはあるかも。場面によっては細かい。',
          '有一点，某些方面比较细致。',
          '有一點，某些方面比較細緻。',
          'Có chút; một số lĩnh vực khá kỹ.',
          'Sedikit; di beberapa hal cukup teliti.'
        ),
        score: 1,
      },
      {
        text: M(
          '꽤 있다. 때로는 이게 나를 힘들게 한다는 걸 알고 있다',
          'Quite a lot. I know it sometimes wears me down.',
          'かなりある。ときどき自分を苦しめているとわかっている。',
          '挺明显的，知道有时它会拖累我。',
          '挺明顯的，知道有時它會拖累我。',
          'Khá nhiều; biết đôi khi nó làm mình mệt.',
          'Cukup banyak; tahu kadang membuat saya lelah.'
        ),
        score: 2,
      },
      {
        text: M(
          '매우 있다. 완벽하지 않으면 불안하고 스스로를 지나치게 몰아붙이는 편이다',
          'Very much. I feel anxious if it is not perfect, and I push myself too hard.',
          'かなり強い。完璧でないと不安で、自分を追い込みすぎる。',
          '很强，不完美会焦虑，对自己逼得太紧。',
          '很強，不完美會焦慮，對自己逼得太緊。',
          'Rất nhiều; không hoàn hảo thì lo âu; tự ép quá đà.',
          'Sangat kuat; cemas jika tidak sempurna; memaksakan diri berlebihan.'
        ),
        score: 3,
      },
    ],
  },
];

export const phase3PerfectionismIndexResults: Phase3PerfectionismIndexResult[] = [
  {
    type: 'Type1',
    emoji: '🌊',
    title: M(
      '완벽주의와 거리가 먼, 자유로운 충분주의자',
      'The relaxed “good enough” type, far from perfectionism',
      '完璧主義から遠い、自由な「十分でいい」タイプ',
      '远离完美主义、自在的“够用就好”型',
      '遠離完美主義、自在的「夠用就好」型',
      'Kiểu “đủ là đủ”, xa chủ nghĩa hoàn hảo',
      'Tipe “cukup sudah baik”, jauh dari perfeksionisme'
    ),
    shortDescription: M(
      '당신은 \'충분하면 된다\'는 철학을 가진 사람입니다. 완성이 완벽보다 중요합니다.',
      'You live by “good enough.” Done beats perfect.',
      '「十分でいい」が信条。完成は完璧より大切。',
      '你奉行“够用就好”，完成比完美更重要。',
      '你奉行「夠用就好」，完成比完美更重要。',
      'Bạn theo triết lý “đủ là đủ”; hoàn thành quan trọng hơn hoàn hảo.',
      'Anda menganut “cukup sudah baik”; selesai lebih penting dari sempurna.'
    ),
    description: M(
      '실수를 빠르게 받아들이고 계획이 어긋나도 유연하게 적응하며 결과물에 대체로 만족하는 타입입니다. 완벽주의의 부담 없이 가볍게 시작하고 빠르게 실행하는 능력이 강점입니다.',
      'You accept mistakes quickly, adapt when plans change, and are generally satisfied with output. Your strength is starting light and executing fast without perfectionist pressure.',
      'ミスを素早く受け入れ、計画がずれても柔軟に適応し、成果にもだいたい満足できるタイプ。完璧主義の重荷なく軽く始め、速く実行する力が強みです。',
      '你能较快接纳失误，计划变了也能调整，对成果大体满意。强项是没有完美主义包袱、轻快开始和快速执行。',
      '你能較快接納失誤，計畫變了也能調整，對成果大體滿意。強項是沒有完美主義包袱、輕快開始和快速執行。',
      'Bạn chấp nhận sai sót nhanh, thích nghi khi kế hoạch thay đổi, nhìn chung hài lòng kết quả. Điểm mạnh là bắt đầu nhẹ và hành động nhanh không áp lực hoàn hảo.',
      'Anda menerima kesalahan cepat, beradaptasi saat rencana berubah, cukup puas dengan hasil. Kekuatan: mulai ringan dan eksekusi cepat tanpa tekanan perfeksionisme.'
    ),
    lifeImpact: M(
      '번아웃이 적고 실행 속도가 빠르지만 가끔 디테일에서 놓치는 것이 생길 수 있습니다.',
      'Less burnout and fast execution, but you may sometimes miss details.',
      '燃え尽きにくく実行は速いが、細部を見落とすことがある。',
      '较少倦怠、执行快，但有时会在细节上漏掉什么。',
      '較少倦怠、執行快，但有時會在細節上漏掉什麼。',
      'Ít kiệt sức, thực thi nhanh, nhưng đôi khi sót chi tiết.',
      'Kurang burnout, eksekusi cepat, kadang melewatkan detail.'
    ),
    workStyle: M(
      '빠른 실행과 피벗이 강점. 완성도보다 속도가 필요한 환경에서 빛납니다.',
      'Strong at fast execution and pivoting. You shine where speed matters more than polish.',
      '速い実行とピボットが強み。仕上げよりスピードが求められる場で輝く。',
      '强项是快速执行与转向，在更需要速度而非精雕细琢的环境表现出色。',
      '強項是快速執行與轉向，在更需要速度而非精雕細琢的環境表現出色。',
      'Mạnh ở thực thi nhanh và xoay trục; nổi bật khi cần tốc độ hơn độ hoàn thiện.',
      'Kuat eksekusi cepat dan pivot; bersinar saat kecepatan lebih penting dari polesan.'
    ),
    relationshipStyle: M(
      '상대방에게 크게 기대하지 않아 관계가 편안합니다. 다소 느슨하게 느껴질 수 있습니다.',
      'You expect little from others, so relationships feel easy—sometimes a bit loose.',
      '相手に大きな期待をしないので関係は楽。ややルーズに感じられることも。',
      '对他人期待不高，关系轻松，有时可能显得略松散。',
      '對他人期待不高，關係輕鬆，有時可能顯得略鬆散。',
      'Ít kỳ vọng ở người khác nên quan hệ nhẹ nhàng; đôi khi hơi lỏng.',
      'Sedikit menuntut orang lain sehingga hubungan santai; kadang terasa terlalu longgar.'
    ),
    messageToYou: E(),
    recommendedDirection: E(),
    empathyLevel: M(
      'Lv.1 충분주의자 · 완벽주의 지수 5~15점',
      'Lv.1 Good-enough type · Perfectionism index 5–15',
      'Lv.1 十分主義 · 完璧主義指数 5〜15点',
      'Lv.1 够用型 · 完美主义指数 5–15 分',
      'Lv.1 夠用型 · 完美主義指數 5–15 分',
      'Lv.1 Kiểu đủ là đồ · Chỉ số chủ nghĩa hoàn hảo 5–15',
      'Lv.1 Tipe cukup baik · Indeks perfeksionisme 5–15'
    ),
    characteristics: M(
      '빠른 실행력·유연한 적응·실수 회복력·스트레스 내성',
      'Fast execution · flexible adaptation · bounce-back from mistakes · stress tolerance',
      '速い実行・柔軟な適応・失敗からの回復・ストレス耐性',
      '快速执行·灵活适应·从失误恢复·抗压',
      '快速執行·靈活適應·從失誤恢復·抗壓',
      'Thực thi nhanh · thích nghi linh hoạt · hồi phục sau sai sót · chịu căng thẳng',
      'Eksekusi cepat · adaptasi fleksibel · pulih dari kesalahan · toleransi stres'
    ),
    goodMatch: M(
      '꼼꼼함이 필요한 상황에서 완성도가 낮아질 수 있습니다. 중요한 일에는 의식적으로 검토 시간을 더 들이는 것이 도움이 됩니다.',
      'Quality may drop when detail matters. For important tasks, consciously add review time.',
      '細かさが必要な場面で完成度が下がることがある。大事な仕事は意識的に確認時間を。',
      '在需要细致时完成度可能下滑，重要事项请刻意多留检查时间。',
      '在需要細緻時完成度可能下滑，重要事項請刻意多留檢查時間。',
      'Khi cần tỉ mỉ, chất lượng có thể giảm; việc quan trọng nên chủ động thêm thời gian rà soát.',
      'Saat perlu teliti, kualitas bisa turun; untuk hal penting, sengaja tambah waktu tinjau.'
    ),
    badMatch: M(
      '중요한 업무 하나를 제출하기 전에 딱 한 번 더 검토해보기. 그것만으로 완성도가 달라집니다.',
      'Pick one important task and reread it once more before you submit—that alone can change quality.',
      '提出前に大事な仕事を一つだけ、もう一度確認。それだけで完成度が変わる。',
      '选一件重要工作，提交前再多检查一遍，仅此就能提升完成度。',
      '選一件重要工作，提交前再多檢查一遍，僅此就能提升完成度。',
      'Chọn một việc quan trọng, trước khi nộp đọc lại thêm một lần—chỉ vậy đã đổi chất lượng.',
      'Pilih satu tugas penting, baca ulang sekali sebelum kumpulkan—itu saja bisa mengubah hasil.'
    ),
  },
  {
    type: 'Type2',
    emoji: '✅',
    title: M(
      '균형 잡힌 꼼꼼함, 건강한 기준 보유형',
      'Balanced thoroughness with healthy standards',
      'バランスの取れた綿密さ、健全な基準タイプ',
      '平衡细致、标准健康的类型',
      '平衡細緻、標準健康的類型',
      'Cân bằng giữa kỹ lưỡng và tiêu chuẩn lành mạnh',
      'Teliti seimbang dengan standar sehat'
    ),
    shortDescription: M(
      '당신은 완벽주의의 장점은 취하고 단점은 피하는 가장 이상적인 지점에 있습니다.',
      'You are in an ideal spot: you take the upside of perfectionism and avoid the worst downsides.',
      '完璧主義の良いところは取り、悪いところは避けられる理想的な位置にいます。',
      '你处在理想位置：拿完美主义的优点，避开明显缺点。',
      '你處在理想位置：拿完美主義的優點，避開明顯缺點。',
      'Bạn ở điểm lý tưởng: lấy ưu điểm của chủ nghĩa hoàn hảo, tránh phần xấu nhất.',
      'Anda di titik ideal: ambil sisi baik perfeksionisme, hindari yang terburuk.'
    ),
    description: M(
      '필요한 부분에서는 꼼꼼하게 챙기면서도 완벽에 집착하지 않고 충분히 됐을 때 손을 놓을 수 있는 타입입니다. 실수를 받아들이면서도 반복하지 않으려는 노력이 있고 칭찬도 자연스럽게 받아들입니다.',
      'You are careful where it counts, but you can let go when it is good enough. You accept mistakes yet try not to repeat them, and you take praise naturally.',
      '必要なところは丁寧に、でも完璧に執着せず「十分」で手を離せるタイプ。失敗も受け入れつつ繰り返さないよう努め、褒め言葉も自然に受け取れます。',
      '该细的地方细致，却不执着于完美，够好了就能放手。能接纳失误并避免重复，也能自然接受夸奖。',
      '該細的地方細緻，卻不執著於完美，夠好了就能放手。能接納失誤並避免重複，也能自然接受誇獎。',
      'Chỗ cần thì kỹ, nhưng không bám hoàn hảo; đủ tốt là buông được. Chấp nhận sai và cố không lặp, nhận lời khen tự nhiên.',
      'Teliti saat perlu, tidak menggenggam kesempurnaan; cukup baik bisa dilepas. Terima kesalahan dan berusaha tidak mengulang, menerima pujian dengan natural.'
    ),
    lifeImpact: M(
      '대부분의 상황에서 적절한 결과를 내면서 지나치게 소진되지 않는 지속 가능한 패턴입니다.',
      'In most situations you deliver solid results without burning out—a sustainable pattern.',
      '多くの場面で適切な成果を出し、燃え尽きすぎない持続可能なパターンです。',
      '多数情况下产出合适结果，又不过度消耗，是可持续模式。',
      '多數情況下產出合適結果，又不過度消耗，是可持續模式。',
      'Hầu hết tình huống cho kết quả ổn mà không kiệt sức—mô hình bền vững.',
      'Di banyak situasi hasilnya solid tanpa burnout—pola berkelanjutan.'
    ),
    workStyle: M(
      '안정적인 결과물을 꾸준히 내는 신뢰받는 유형. 중요한 프로젝트에서 더 빛납니다.',
      'Steady, reliable output. You stand out on important projects.',
      '安定した成果を出し続ける信頼タイプ。重要なプロジェクトで輝く。',
      '稳定产出、值得信赖，在重要项目上更亮眼。',
      '穩定產出、值得信賴，在重要專案上更亮眼。',
      'Kết quả ổn định, đáng tin; nổi bật ở dự án quan trọng.',
      'Hasil stabil dan dipercaya; bersinar di proyek penting.'
    ),
    relationshipStyle: M(
      '자신에게도 상대방에게도 적절한 기대치를 유지해 관계가 안정적입니다.',
      'You keep fair expectations for yourself and others, so relationships stay stable.',
      '自分にも相手にも適度な期待を保ち、関係が安定しやすい。',
      '对自己和他人期待适度，关系较稳定。',
      '對自己和他人期待適度，關係較穩定。',
      'Kỳ vọng vừa phải với bản thân và người khác, quan hệ ổn định.',
      'Ekspektasi wajar untuk diri dan orang lain, hubungan stabil.'
    ),
    messageToYou: E(),
    recommendedDirection: E(),
    empathyLevel: M(
      'Lv.2 균형형 · 완벽주의 지수 20~35점',
      'Lv.2 Balanced type · Perfectionism index 20–35',
      'Lv.2 バランス型 · 完璧主義指数 20〜35点',
      'Lv.2 平衡型 · 完美主义指数 20–35 分',
      'Lv.2 平衡型 · 完美主義指數 20–35 分',
      'Lv.2 Kiểu cân bằng · Chỉ số chủ nghĩa hoàn hảo 20–35',
      'Lv.2 Tipe seimbang · Indeks perfeksionisme 20–35'
    ),
    characteristics: M(
      '완성도와 속도의 균형·실수 수용력·적절한 기준 유지',
      'Balance of quality and speed · accepting mistakes · steady standards',
      '品質とスピードのバランス・失敗の受容・適切な基準',
      '质量与速度的平衡·接纳失误·维持合适标准',
      '品質與速度的平衡·接納失誤·維持合適標準',
      'Cân bằng chất lượng và tốc độ · chấp nhận sai · giữ tiêu chuẩn phù hợp',
      'Keseimbangan kualitas dan kecepatan · terima kesalahan · standar tetap'
    ),
    goodMatch: M(
      '상황에 따라 기준이 달라질 수 있습니다. 중요도에 따라 에너지 배분을 의식적으로 조절하면 더 효율적입니다.',
      'Your standards can shift by situation. Consciously allocating energy by importance makes you more efficient.',
      '状況で基準が変わることがある。重要度に合わせてエネルギーを配分すると効率的。',
      '标准会随情境变化，按重要性有意识分配精力会更高效。',
      '標準會隨情境變化，按重要性有意識分配精力會更高效。',
      'Tiêu chuẩn có thể đổi theo tình huống; phân bổ năng lượng theo mức quan trọng giúp hiệu quả hơn.',
      'Standar bisa berubah menurut situasi; alokasi energi sesuai prioritas lebih efisien.'
    ),
    badMatch: M(
      '지금의 균형을 유지하는 것만으로도 충분합니다. 잘 하고 있습니다.',
      'Keeping this balance is enough. You are doing well.',
      '今のバランスを保てば十分。よくできています。',
      '保持现在的平衡就够了，你做得很好。',
      '保持現在的平衡就夠了，你做得很好。',
      'Giữ cân bằng hiện tại là đủ. Bạn đang làm tốt.',
      'Mempertahankan keseimbangan ini sudah cukup. Anda melakukannya dengan baik.'
    ),
  },
  {
    type: 'Type3',
    emoji: '🎯',
    title: M(
      '기준이 높은, 선택적 완벽주의형',
      'Selective perfectionist with high standards',
      '基準が高い、選択的完璧主義タイプ',
      '标准高、选择性完美主义型',
      '標準高、選擇性完美主義型',
      'Perfeksionis selektif dengan tiêu chuẩn cao',
      'Perfeksionis selektif dengan standar tinggi'
    ),
    shortDescription: M(
      '당신은 모든 것에 완벽주의적이지 않지만 중요한 것에는 타협하지 않습니다.',
      'You are not perfectionistic about everything—but you do not compromise on what matters.',
      'すべてに完璧主義ではないが、大事なことには妥協しない。',
      '你并非事事完美主义，但对重要的事不妥协。',
      '你並非事事完美主義，但對重要的事不妥協。',
      'Bạn không cầu toàn mọi thứ—nhưng không nhượng ở điều quan trọng.',
      'Anda tidak perfeksionis di semua hal—tapi tidak mengorbankan yang penting.'
    ),
    description: M(
      '관심 있는 분야나 중요한 일에서는 높은 기준을 유지하고 그렇지 않은 부분에서는 비교적 유연한 타입입니다. 선택적으로 완벽주의를 발휘하기 때문에 에너지 소진이 크지 않지만 중요한 일에서는 자신을 꽤 몰아붙이는 경향이 있습니다.',
      'In areas you care about or that matter, you keep high standards; elsewhere you are more flexible. Selective perfectionism limits drain, but you may push yourself hard on important tasks.',
      '興味や重要な仕事では高い基準を保ち、それ以外は比較的柔軟。選択的に完璧主義なので消耗は少ないが、大事なときは自分を追い込みがち。',
      '在在意或重要的事上标准高，其他领域较灵活。选择性发挥完美主义所以耗能不大，但在重要任务上会逼自己较紧。',
      '在在意或重要的事上標準高，其他領域較靈活。選擇性發揮完美主義所以耗能不大，但在重要任務上會逼自己較緊。',
      'Ở lĩnh vực quan tâm hoặc quan trọng bạn giữ tiêu chuẩn cao; chỗ khác linh hoạt hơn. Perfeksionisme chọn lọc ít tốn năng lượng nhưng việc quan trọng bạn tự ép khá mạnh.',
      'Di hal penting atau yang Anda peduli standar tinggi; di lainnya lebih fleksibel. Perfeksionisme selektif menghemat energi, tapi tugas penting sering memaksa diri keras.'
    ),
    lifeImpact: M(
      '중요한 영역에서 높은 성취를 내지만 그 과정에서 스트레스를 받는 경우가 있습니다.',
      'You achieve a lot in key areas, but the process can be stressful.',
      '重要な分野で高い成果を出すが、その過程でストレスを感じることも。',
      '在重要领域成就高，但过程中也可能承压。',
      '在重要領域成就高，但過程中也可能承壓。',
      'Đạt nhiều ở lĩnh vực quan trọng nhưng quá trình có thể căng thẳng.',
      'Banyak pencapaian di area kunci, tetapi prosesnya bisa stres.'
    ),
    workStyle: M(
      '핵심 업무에서 높은 완성도를 발휘하는 믿을 수 있는 사람. 주변에서 일 잘 한다는 평가를 자주 받습니다.',
      'Highly reliable on core work with strong finish quality. People often say you do great work.',
      'コア業務で高い完成度を出す信頼できる人。「仕事ができる」と言われやすい。',
      '核心工作完成度高、值得信赖，常被评价为能干。',
      '核心工作完成度高、值得信賴，常被評價為能幹。',
      'Tin cậy ở công việc lõi, chất lượng cao; thường được khen làm tốt.',
      'Di inti pekerjaan sangat dipercaya dan berkualitas; sering dinilai hebat.'
    ),
    relationshipStyle: M(
      '가까운 관계에서 기대치가 높아지는 경향이 있습니다. 상대방의 방식을 인정하는 연습이 도움이 됩니다.',
      'Expectations can rise in close relationships. Practicing acceptance of others’ styles helps.',
      '親しい関係ほど期待が高くなりがち。相手のやり方を認める練習が助けになる。',
      '关系越近期待越容易升高，练习接纳对方的方式会有帮助。',
      '關係越近期待越容易升高，練習接納對方的方式會有幫助。',
      'Trong quan hệ gần kỳ vọng dễ tăng; luyện chấp nhận cách làm của đối phương giúp ích.',
      'Di hubungan dekat ekspektasi mudah naik; latih menerima gaya orang lain membantu.'
    ),
    messageToYou: E(),
    recommendedDirection: E(),
    empathyLevel: M(
      'Lv.3 선택적 완벽주의자 · 완벽주의 지수 40~55점',
      'Lv.3 Selective perfectionist · Index 40–55',
      'Lv.3 選択的完璧主義 · 指数 40〜55点',
      'Lv.3 选择性完美主义 · 指数 40–55 分',
      'Lv.3 選擇性完美主義 · 指數 40–55 分',
      'Lv.3 Perfeksionis chọn lọc · Chỉ số 40–55',
      'Lv.3 Perfeksionis selektif · Indeks 40–55'
    ),
    characteristics: M(
      '중요한 것에 집중하는 능력·높은 완성도·전략적 에너지 배분',
      'Focus on priorities · high quality · strategic energy use',
      '重要なことに集中・高い完成度・戦略的なエネルギー配分',
      '聚焦要事·高完成度·战略性分配精力',
      '聚焦要事·高完成度·戰略性分配精力',
      'Tập trung ưu tiên · chất lượng cao · phân bổ năng lượng có chiến lược',
      'Fokus prioritas · kualitas tinggi · alokasi energi strategis'
    ),
    goodMatch: M(
      '내가 중요하다고 생각하는 것에서 자신을 너무 몰아붙이는 경향이 있습니다. 충분한 시점에 손을 놓는 연습이 필요합니다.',
      'You tend to push yourself hard on what you deem important. Practice letting go when it is enough.',
      '自分が大事だと思うことで自分を追い込みがち。「十分」のタイミングで手を離す練習が必要。',
      '在你认为重要的事上容易逼自己太紧，需要练习在“够好了”时放手。',
      '在你認為重要的事上容易逼自己太緊，需要練習在「夠好了」時放手。',
      'Bạn dễ tự ép mạnh ở điều mình cho là quan trọng; cần luyện buông khi đã đủ.',
      'Anda memaksakan diri pada hal yang dianggap penting; latih melepaskan saat sudah cukup.'
    ),
    badMatch: M(
      '오늘 한 일 중 "이 정도면 충분하다"고 스스로 인정해줄 수 있는 것 하나 찾아보기.',
      'Find one thing you did today that you can honestly call “good enough.”',
      '今日やったことの中で「これで十分」と自分に認められることを一つ見つける。',
      '在今天做过的事里，找一件你能真心说“这样够了”的。',
      '在今天做過的事裡，找一件你能真心說「這樣夠了」的。',
      'Tìm một việc hôm nay bạn có thể thật lòng nói “như vậy là đủ”.',
      'Temukan satu hal hari ini yang bisa Anda akui jujur “ini sudah cukup”.'
    ),
  },
  {
    type: 'Type4',
    emoji: '⚙️',
    title: M(
      '기준을 내리기 어려운, 고기준 완벽주의형',
      'High-bar perfectionist who struggles to lower standards',
      '基準を下げにくい、高基準完璧主義タイプ',
      '难以降低标准的高标准完美主义型',
      '難以降低標準的高標準完美主義型',
      'Khó hạ chuẩn — perfeksionis tiêu chuẩn cao',
      'Perfeksionis standar tinggi yang sulit menurunkan ekspektasi'
    ),
    shortDescription: M(
      '당신의 높은 기준이 당신을 탁월하게 만들기도 하지만 때로는 당신을 가장 힘들게 하는 것도 그 기준입니다.',
      'Your high standards make you excellent—and sometimes they are what exhaust you most.',
      '高い基準があなたを優秀にする一方、いちばん苦しめるのもその基準になることがあります。',
      '高标准让你出众，有时也最让你疲惫的也正是这标准。',
      '高標準讓你出眾，有時也最讓你疲憊的也正是這標準。',
      'Tiêu chuẩn cao giúp bạn xuất sắc—đôi khi cũng là thứ làm bạn kiệt sức nhất.',
      'Standar tinggi membuat Anda hebat—kadang juga yang paling melelahkan.'
    ),
    description: M(
      '결과물에 좀처럼 만족하지 못하고 다른 사람에게 일을 맡기기 어렵고 실수가 오래 머릿속에 남는 타입입니다. 이 완벽주의가 높은 성취를 만들어주지만 동시에 지속적인 피로감과 불안감의 원인이 되기도 합니다.',
      'You rarely feel satisfied with output, find delegating hard, and mistakes linger in your mind. This perfectionism drives achievement but also chronic fatigue and anxiety.',
      'なかなか成果に満足できず、人に任せにくく、ミスが頭に残りやすいタイプ。この完璧主義は成果を生む一方、慢性的な疲労や不安の原因にもなります。',
      '你很难对成果满意、难以托付他人、失误会久久萦绕。这种完美主义带来成就，也带来持续疲惫与不安。',
      '你很難對成果滿意、難以託付他人、失誤會久久縈繞。這種完美主義帶來成就，也帶來持續疲憊與不安。',
      'Hiếm khi hài lòng kết quả, khó giao việc, sai sót ám ảnh lâu. Perfeksionisme này tạo thành tích nhưng cũng mệt mỏi và lo âu kéo dài.',
      'Jarang puas dengan hasil, sulit mendelegasikan, kesalahan mengganggu lama. Perfeksionisme ini menghasilkan prestasi tetapi juga kelelahan dan kecemasan kronis.'
    ),
    lifeImpact: M(
      '높은 성취를 내지만 과정에서 지속적인 스트레스를 받으며 자기 자신에 대한 만족이 낮은 경우가 많습니다.',
      'You achieve highly but live with ongoing stress—and often low satisfaction with yourself.',
      '高い成果を出す一方、過程で慢性的なストレスを感じ、自己満足が低いことが多い。',
      '成就高，但过程中持续承压，且常对自己满意度低。',
      '成就高，但過程中持續承壓，且常對自己滿意度低。',
      'Thành tựu cao nhưng căng thẳng kéo dài—thường ít hài lòng với bản thân.',
      'Prestasi tinggi tetapi stres berlanjut—sering rendah memuaskan diri sendiri.'
    ),
    workStyle: M(
      '신뢰받는 결과물을 내는 사람. 단 위임이 어렵고 혼자 짊어지는 경향이 있어 번아웃 위험이 있습니다.',
      'People trust your work—but delegation is hard and you carry too much alone, raising burnout risk.',
      '信頼される成果を出すが、委任が苦手で一人で抱え込みがち。燃え尽きリスクがある。',
      '产出受信任，但难委派、常独自扛，易有倦怠风险。',
      '產出受信任，但難委派、常獨自扛，易有倦怠風險。',
      'Kết quả được tin nhưng khó giao việc, ôm một mình—nguy cơ burnout.',
      'Hasil dipercaya tetapi sulit delegasi, memikul sendiri—risiko burnout.'
    ),
    relationshipStyle: M(
      '상대방에게도 은연중에 높은 기준을 적용해 실망하거나 관계가 피곤해지는 경우가 생길 수 있습니다.',
      'You may unconsciously hold others to high bars, feel disappointed, or find relationships draining.',
      '相手にも知らず知らず高い基準を当てはめ、がっかりしたり関係がしんどくなったりすることがある。',
      '你可能不自觉用高标准要求对方，感到失望或关系变得很累。',
      '你可能不自覺用高標準要求對方，感到失望或關係變得很累。',
      'Vô thức đặt chuẩn cao cho người khác, thất vọng hoặc mệt trong quan hệ.',
      'Tanpa sadar menuntut tinggi pada orang lain, kecewa atau hubungan melelahkan.'
    ),
    messageToYou: E(),
    recommendedDirection: E(),
    empathyLevel: M(
      'Lv.4 고기준 완벽주의자 · 완벽주의 지수 60~75점',
      'Lv.4 High-bar perfectionist · Index 60–75',
      'Lv.4 高基準完璧主義 · 指数 60〜75点',
      'Lv.4 高标准完美主义 · 指数 60–75 分',
      'Lv.4 高標準完美主義 · 指數 60–75 分',
      'Lv.4 Perfeksionis chuẩn cao · Chỉ số 60–75',
      'Lv.4 Perfeksionis standar tinggi · Indeks 60–75'
    ),
    characteristics: M(
      '높은 완성도·꼼꼼함·책임감·신뢰받는 결과물',
      'High quality · thorough · responsible · trusted output',
      '高い完成度・綿密さ・責任感・信頼される成果',
      '高完成度·细致·责任感·可信产出',
      '高完成度·細緻·責任感·可信產出',
      'Chất lượng cao · kỹ lưỡng · có trách nhiệm · được tin cậy',
      'Kualitas tinggi · teliti · bertanggung jawab · dipercaya'
    ),
    goodMatch: M(
      '완벽함을 추구하다 시작 자체를 미루거나 번아웃이 오는 패턴이 생길 수 있습니다. "완료된 80%가 완성되지 않은 100%보다 낫다"는 관점 연습이 필요합니다.',
      'Chasing perfection can delay starting or lead to burnout. Practice seeing “80% done” as better than endless 99%.',
      '完璧を追い求めて始められなくなったり燃え尽きたりしやすい。「80%で完了」は「未完成の100%」よりマシ、という視点の練習が必要。',
      '追求完美可能拖住开工或导致倦怠。需要练习“完成的80%好过永不完工的100%”。',
      '追求完美可能拖住開工或導致倦怠。需要練習「完成的80%好過永不完工的100%」。',
      'Theo đuổi hoàn hảo có thể trì hoãn bắt đầu hoặc burnout. Luyện nhìn “80% xong” tốt hơn “100% không bao giờ xong”.',
      'Mengejar sempurna bisa menunda mulai atau burnout. Latih pandangan “80% selesai” lebih baik dari “100% tak pernah selesai”.'
    ),
    badMatch: M(
      '지금 진행 중인 일 하나를 "80%에서 끝내기"로 설정해보기. 마감 전에 일부러 멈추는 연습이 완벽주의 관리의 시작입니다.',
      'Set one current task to “finish at 80%.” Stopping on purpose before the deadline is step one in managing perfectionism.',
      '今進めている仕事を一つ「80%で終わらせる」と決める。締切前にわざと止める練習が完璧主義管理の第一歩。',
      '选一件进行中的事，设定“80%就收手”。截止前刻意停下，是管理完美主义的第一步。',
      '選一件進行中的事，設定「80%就收手」。截止前刻意停下，是管理完美主義的第一步。',
      'Chọn một việc đang làm, quyết “dừng ở 80%”. Cố tình dừng trước hạn là bước đầu quản lý perfeksionisme.',
      'Pilih satu tugas berjalan, tetapkan “selesai di 80%”. Sengaja berhenti sebelum tenggat adalah langkah pertama mengelola perfeksionisme.'
    ),
  },
  {
    type: 'Type5',
    emoji: '🌀',
    title: M(
      '완벽하지 않으면 불안한, 강박성 완벽주의형',
      'Anxious perfectionism—not chasing perfection, but fearing imperfection',
      '完璧でないと不安な、強迫的完璧主義タイプ',
      '不完美就焦虑的强迫型完美主义',
      '不完美就焦慮的強迫型完美主義',
      'Không hoàn hảo là lo âu — perfeksionisme cưỡng bức',
      'Perfeksionisme kompulsif—bukan mengejar sempurna, tapi takut tidak sempurna'
    ),
    shortDescription: M(
      '완벽을 추구하는 것이 아니라 완벽하지 않으면 불안한 상태입니다. 이 둘은 다릅니다.',
      'This is less about wanting perfection and more about anxiety when things are not perfect—they are different.',
      '完璧を求めているというより、「完璧でないと不安」という状態。これは別物です。',
      '与其说是追求完美，不如说是“不完美就不安”，两者不同。',
      '與其說是追求完美，不如說是「不完美就不安」，兩者不同。',
      'Ít là muốn hoàn hảo, hơn là lo khi không hoàn hảo—khác nhau.',
      'Lebih tentang cemas saat tidak sempurna daripada mendambakan sempurna—itu beda.'
    ),
    description: M(
      '결과물에 좀처럼 만족하지 못하고 칭찬도 의심하고 실수가 한참 동안 머릿속에 남으며 마감보다 훨씬 일찍 끝내야 안심이 되는 타입입니다. 이 패턴이 지속되면 일의 성취감보다 불안감이 더 커지는 상황이 반복될 수 있습니다.',
      'You rarely trust praise, doubt your work, replay mistakes, and need to finish far ahead of deadlines to feel safe. Over time anxiety can outweigh pride in what you achieve.',
      'なかなか成果に満足できず、褒められても疑い、失敗が頭に残り、締切よりずっと前に終えないと安心できないタイプ。このままだと達成感より不安の方が大きくなることがある。',
      '你难对成果满意、怀疑夸奖、失误挥之不去，还要远早于截止完成才安心。若持续，成就感可能不如焦虑大。',
      '你難對成果滿意、懷疑誇獎、失誤揮之不去，還要遠早於截止完成才安心。若持續，成就感可能不如焦慮大。',
      'Khó tin lời khen, nghi ngờ kết quả, sai sót ám ảnh, cần xong sớm hơn nhiều so với hạn mới yên. Lâu dài lo âu có thể lớn hơn niềm tự hào.',
      'Sulit percaya pujian, curiga pada hasil, kesalahan menghantui, harus selesai jauh sebelum tenggat. Lama-lama kecemasan bisa melampaui bangga.'
    ),
    lifeImpact: M(
      '높은 성취에도 불구하고 만족감이 낮고 만성적 불안·피로·자기 비판이 동반되는 경우가 많습니다.',
      'Even with high achievement, satisfaction stays low—often with chronic anxiety, fatigue, and self-criticism.',
      '成果は出ていても満足が低く、慢性的な不安・疲労・自己批判がつきまとうことが多い。',
      '即使成就高也常满足感低，伴随长期焦虑、疲惫与自我批评。',
      '即使成就高也常滿足感低，伴隨長期焦慮、疲憊與自我批評。',
      'Dù thành tựu cao vẫn ít hài lòng; lo âu, mệt, tự chỉ trích kéo dài.',
      'Meski berprestasi, puas rendah; cemas, lelah, kritik diri kronis.'
    ),
    workStyle: M(
      '믿을 수 없을 만큼 꼼꼼하고 신뢰받지만 번아웃과 위임 불능으로 장기적 커리어에 부담이 생길 수 있습니다.',
      'Extremely thorough and trusted—but burnout and poor delegation can strain your career long term.',
      '信じられないほど丁寧で信頼されるが、燃え尽きと委任の難しさが長期的なキャリアに負担をかけることがある。',
      '细致到令人信赖，但倦怠与难以委派可能长期拖累职业。',
      '細緻到令人信賴，但倦怠與難以委派可能長期拖累職業。',
      'Tỉ mỉ và được tin—nhưng burnout và không giao việc có thể hại sự nghiệp lâu dài.',
      'Sangat teliti dan dipercaya—tetapi burnout dan delegasi lemah bisa membebani karier.'
    ),
    relationshipStyle: M(
      '상대방에게도 높은 기준을 무의식적으로 적용해 자주 실망하거나 관계에 에너지가 많이 소모됩니다.',
      'You may unconsciously impose high standards on others, feel let down often, or find relationships draining.',
      '相手にも無意識に高い基準を当てはめ、がっかりしたり、関係にエネルギーを奪われたりしやすい。',
      '你可能不自觉对他人要求过高，常失望或感到关系很耗能量。',
      '你可能不自覺對他人要求過高，常失望或感到關係很耗能量。',
      'Vô thức đặt chuẩn cao cho người khác, dễ thất vọng hoặc kiệt sức trong quan hệ.',
      'Tanpa sadar menuntut tinggi pada orang lain, sering kecewa atau hubungan menguras.'
    ),
    messageToYou: E(),
    recommendedDirection: M(
      '완벽주의의 뿌리가 불안인지 기준인지를 살펴보는 것이 중요합니다. 심리 상담이나 인지행동치료(CBT)가 실질적인 도움이 될 수 있습니다.',
      'It helps to explore whether perfectionism is driven by anxiety or by rigid standards. Counseling or CBT can be very practical.',
      '完璧主義の根っこが不安か、基準の硬さかを見極めることが大切です。カウンセリングや認知行動療法（CBT）が有効なことがあります。',
      '分辨完美主义根源于焦虑还是僵化标准很重要。心理咨询或认知行为疗法（CBT）常有实质帮助。',
      '分辨完美主義根源於焦慮還是僵化標準很重要。心理諮商或認知行為療法（CBT）常有實質幫助。',
      'Quan trọng là xem gốc perfeksionisme là lo âu hay chuẩn cứng. Tư vấn hoặc CBT thường giúp thực tế.',
      'Penting melihat apakah perfeksionisme dari kecemasan atau standar kaku. Konseling atau CBT sering membantu.'
    ),
    empathyLevel: M(
      'Lv.5 강박성 완벽주의자 · 완벽주의 지수 80~90점',
      'Lv.5 Compulsive/anxious perfectionist · Index 80–90',
      'Lv.5 強迫的／不安型完璧主義 · 指数 80〜90点',
      'Lv.5 强迫／焦虑型完美主义 · 指数 80–90 分',
      'Lv.5 強迫／焦慮型完美主義 · 指數 80–90 分',
      'Lv.5 Perfeksionisme cưỡng bức / lo âu · Chỉ số 80–90',
      'Lv.5 Perfeksionisme kompulsif / cemas · Indeks 80–90'
    ),
    characteristics: M(
      '극도로 높은 완성도·세심함·책임감·신뢰성',
      'Extremely high quality · meticulous · responsible · reliable',
      '極めて高い完成度・細やかさ・責任感・信頼性',
      '极高的完成度·细致·责任感·可靠',
      '極高的完成度·細緻·責任感·可靠',
      'Chất lượng cực cao · tỉ mỉ · có trách nhiệm · đáng tin',
      'Kualitas sangat tinggi · teliti · bertanggung jawab · dapat diandalkan'
    ),
    goodMatch: M(
      '완벽주의가 성취의 도구가 아닌 불안 관리의 수단이 되고 있을 수 있습니다. 결과보다 과정의 안도를 찾는 패턴을 인식하는 것이 첫 번째입니다.',
      'Perfectionism may be managing anxiety more than driving achievement. Step one is noticing when you seek relief in the process, not the outcome.',
      '完璧主義が「成果のため」より「不安をなだめるため」になっていることがある。まずは、結果より過程の安心を求めるパターンに気づくこと。',
      '完美主义可能更像在缓解不安而非追求成就。先觉察你是否更在过程中找安心。',
      '完美主義可能更像在緩解不安而非追求成就。先覺察你是否更在過程中找安心。',
      'Perfeksionisme có thể đang xoa dịu lo âu hơn là thúc đẩy thành tích. Bước đầu: nhận ra khi bạn tìm an tâm trong quá trình.',
      'Perfeksionisme mungkin mengelola kecemasan lebih dari mendorong prestasi. Langkah satu: sadari mencari jaminan dalam proses.'
    ),
    badMatch: M(
      '오늘 완성한 것 하나에 대해 "잘 했다"고 소리 내어 말해보기. 이것이 생각보다 어렵다면 그것이 신호입니다.',
      'Out loud, praise one thing you finished today: “I did well.” If that feels hard, that is a signal.',
      '今日終えたことを一つ、声に出して「よくできた」と言ってみる。思ったより難しければ、それがサイン。',
      '对今天完成的一件事大声说“做得好”。若这比想象中难，那就是信号。',
      '對今天完成的一件事大聲說「做得好」。若這比想像中難，那就是信號。',
      'Nói to một việc hôm nay đã xong: “Tốt lắm.” Nếu khó hơn tưởng—đó là tín hiệu.',
      'Ucapkan keras satu hal selesai hari ini: “Bagus.” Jika sulit—itu sinyal.'
    ),
  },
  {
    type: 'Type6',
    emoji: '🔴',
    title: M(
      '완벽하지 않으면 시작도 못 하는, 극강 완벽주의형',
      'Extreme perfectionism—you cannot start unless it feels perfect',
      '完璧でないと始められない、極度の完璧主義タイプ',
      '不完美就难以开局的极端完美主义型',
      '不完美就難以開局的極端完美主義型',
      'Cực đoan — không thể bắt đầu nếu chưa thấy hoàn hảo',
      'Ekstrem—sulit memulai jika belum terasa sempurna'
    ),
    shortDescription: M(
      '완벽한 준비가 될 때까지 기다리다 아무것도 시작하지 못한 경험이 있나요? 그것이 이 유형의 가장 큰 아이러니입니다.',
      'Ever waited so long for “ready” that you never began? That irony is central to this type.',
      '「準備が完璧になるまで」と待っていて、結局何も始められなかったことは？このタイプ最大の皮肉です。',
      '是否曾等“准备好”等到最后什么也没开始？这是此类型的核心讽刺。',
      '是否曾等「準備好」等到最後什麼也沒開始？這是此類型的核心諷刺。',
      'Từng chờ “sẵn sàng hoàn hảo” đến mức không bắt đầu được gì? Đó là nghịch lý của kiểu này.',
      'Pernah menunggu “siap sempurna” sampai tidak pernah mulai? Itu ironi utama tipe ini.'
    ),
    description: M(
      '완벽을 추구하다 시작 자체를 못 하거나 완성하고도 만족하지 못하고 칭찬을 받아도 부족하다는 생각이 먼저 드는 타입입니다. 이 수준의 완벽주의는 성취를 위한 것이 아니라 실패에 대한 두려움에서 비롯된 경우가 많습니다.',
      'You may never start, or finish yet feel empty—praise still feels insufficient. At this level perfectionism often comes from fear of failure, not love of excellence.',
      '完璧を求めて始められない、または終えても満足できず、褒められても足りないと感じるタイプ。このレベルの完璧主義は、優秀さより「失敗が怖い」から来ることが多いです。',
      '你可能因追求完美而无法开始，或做完仍不满足，被夸也觉得不够。此层级的完美主义常源于怕失败而非追求卓越。',
      '你可能因追求完美而無法開始，或做完仍不滿足，被誇也覺得不夠。此層級的完美主義常源於怕失敗而非追求卓越。',
      'Có thể không bắt đầu được, hoặc xong vẫn trống; được khen vẫn thấy thiếu. Ở mức này perfeksionisme thường từ sợ thất bại hơn là đam mê xuất sắc.',
      'Mungkin tidak pernah mulai, atau selesai tetap kosong; dipuji tetap kurang. Di level ini perfeksionisme sering dari takut gagal, bukan cinta akan keunggulan.'
    ),
    lifeImpact: M(
      '만성적 불안·자기 비판·번아웃·관계 어려움이 동시에 나타날 수 있습니다. 이것은 의지력으로 해결하기 어려운 패턴입니다.',
      'Chronic anxiety, self-criticism, burnout, and relationship strain can cluster together—willpower alone rarely fixes this pattern.',
      '慢性的な不安・自己批判・燃え尽き・対人の難しさが同時に出ることがあります。意志だけでは直しにくいパターンです。',
      '长期焦虑、自我批评、倦怠与人际困难可能同时出现，单靠意志力往往难以解决。',
      '長期焦慮、自我批評、倦怠與人際困難可能同時出現，單靠意志力往往難以解決。',
      'Lo âu kéo dài, tự trách, burnout, khó trong quan hệ có thể cùng lúc—ý chí một mình hiếm khi đủ.',
      'Kecemasan kronis, kritik diri, burnout, tekanan hubungan bisa bersamaan—tekad saja jarang cukup.'
    ),
    workStyle: E(),
    relationshipStyle: E(),
    messageToYou: M(
      '완벽하지 않아도 시작할 수 있고 완벽하지 않아도 충분히 가치 있습니다. 이 사실을 머리로는 알지만 몸이 따라오지 않는다면 전문가와 함께 살펴보는 것이 진짜 도움이 됩니다.',
      'You can start imperfectly, and you are still worthy imperfectly. If your body does not follow what your mind knows, professional support can truly help.',
      '完璧でなくても始められ、完璧でなくても価値がある。頭では分かっているのに身体がついてこないなら、専門家と見るのが本当の助けになります。',
      '不完美也能开始，不完美也依然有价值。若心里明白身体却做不到，与专业人士一起面对会更有帮助。',
      '不完美也能開始，不完美也依然有價值。若心裡明白身體卻做不到，與專業人士一起面對會更有幫助。',
      'Bạn có thể bắt đầu dù chưa hoàn hảo, và vẫn có giá trị dù chưa hoàn hảo. Nếu đầu hiểu mà thân không theo—hỗ trợ chuyên môn thực sự giúp.',
      'Anda bisa mulai tanpa sempurna, dan tetap berharga tanpa sempurna. Jika pikiran paham tapi tubuh tidak mengikuti—dukungan profesional sangat membantu.'
    ),
    recommendedDirection: M(
      '인지행동치료(CBT)·수용전념치료(ACT) 등이 완벽주의 관리에 효과적으로 알려져 있습니다. 정신건강의학과 또는 심리상담센터 방문을 권장합니다.',
      'CBT and Acceptance and Commitment Therapy (ACT) have strong evidence for perfectionism. Consider a psychiatrist or counseling center.',
      '認知行動療法（CBT）や受容コミットメント療法（ACT）は完璧主義の管理に有効とされています。精神科・カウンセリング機関の利用を検討してください。',
      '认知行为疗法（CBT）与接纳承诺疗法（ACT）对管理完美主义有较多证据支持，建议考虑精神科或心理咨询机构。',
      '認知行為療法（CBT）與接納承諾療法（ACT）對管理完美主義有較多證據支持，建議考慮精神科或心理諮商機構。',
      'CBT và ACT có bằng chứng tốt cho quản lý chủ nghĩa hoàn hảo. Cân nhắc bác sĩ tâm thần hoặc trung tâm tư vấn.',
      'CBT dan ACT punya bukti kuat untuk perfeksionisme. Pertimbangkan psikiater atau pusat konseling.'
    ),
    empathyLevel: M(
      'Lv.6 극강 완벽주의자 · 완벽주의 지수 95~100점',
      'Lv.6 Extreme perfectionist · Index 95–100',
      'Lv.6 極度の完璧主義 · 指数 95〜100点',
      'Lv.6 极端完美主义 · 指数 95–100 分',
      'Lv.6 極端完美主義 · 指數 95–100 分',
      'Lv.6 Perfeksionisme cực đoan · Chỉ số 95–100',
      'Lv.6 Perfeksionisme ekstrem · Indeks 95–100'
    ),
    characteristics: M(
      '타의 추종을 불허하는 꼼꼼함·높은 기준·책임감',
      'Unmatched thoroughness · high standards · responsibility',
      '比類なき綿密さ・高い基準・責任感',
      '极致细致·高标准·责任感',
      '極致細緻·高標準·責任感',
      'Tỉ mỹ phi thường · chuẩn cao · trách nhiệm',
      'Teliti luar biasa · standar tinggi · tanggung jawab'
    ),
    goodMatch: M(
      '완벽주의가 삶의 여러 영역에서 시작·완성·만족을 방해하고 있을 가능성이 높습니다. 완벽주의의 뿌리가 자기 가치와 연결돼 있는 경우가 많습니다.',
      'Perfectionism likely blocks starting, finishing, and feeling satisfied across life. Its roots are often tied to self-worth.',
      '完璧主義が人生の多くの場面で「始める・終える・満足する」を妨げている可能性が高いです。根っこは自己価値と結びついていることが多いです。',
      '完美主义很可能在多方面阻碍你开始、完成与满足，常与自我价值感相连。',
      '完美主義很可能在多方面阻礙你開始、完成與滿足，常與自我價值感相連。',
      'Perfeksionisme có thể cản bắt đầu, hoàn thành, hài lòng; gốc thường gắn với giá trị bản thân.',
      'Perfeksionisme sering menghalangi mulai, selesai, dan puas; akarnya sering ke harga diri.'
    ),
    badMatch: M(
      '오늘 딱 하나만 "완벽하지 않아도 괜찮다"고 선언하고 시작해보기. 완성보다 시작이 먼저입니다.',
      'Declare just one thing today: “I will start even if it is not perfect.” Beginning comes before finishing.',
      '今日は一つだけ「完璧じゃなくてもいい」と宣言して始めてみる。完成より開始が先。',
      '今天只对一件事宣布“不完美也可以”，然后去做。开始先于完成。',
      '今天只對一件事宣布「不完美也可以」，然後去做。開始先於完成。',
      'Hôm nay chỉ một việc: tuyên bố “không hoàn hảo vẫn được” rồi bắt đầu. Bắt đầu trước hoàn thành.',
      'Satu hal hari ini: nyatakan “tidak sempurna boleh” lalu mulai. Mulai dulu baru selesai.'
    ),
  },
];

export function calculatePhase3PerfectionismIndexResult(answers: number[]): string {
  const total = answers.reduce((sum, s) => sum + s, 0);
  if (total <= 5) return 'Type1';
  if (total <= 11) return 'Type2';
  if (total <= 19) return 'Type3';
  if (total <= 27) return 'Type4';
  if (total <= 33) return 'Type5';
  return 'Type6';
}
