/** 내 성격의 장점과 단점 팩폭 — phase3 — ko/en/ja/zh-CN/zh-TW/vi/id 전체 번역 */

export interface Phase3PersonalityStrengthWeaknessQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    score: number; // A=0, B=1, C=2, D=3 (원본 순서; UI에서 옵션 셔플 시 score로 역추적)
  }[];
}

export interface Phase3PersonalityStrengthWeaknessResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  personalityLabel: Record<string, string>;
  strengthRoast: Record<string, string>;
  weaknessRoast: Record<string, string>;
  strengthKeywords: Record<string, string>;
  weaknessKeywords: Record<string, string>;
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
  idLang: string
): Record<string, string> => ({
  ko,
  en,
  ja,
  'zh-CN': zhCN,
  'zh-TW': zhTW,
  vi,
  id: idLang,
});

export const phase3PersonalityStrengthWeaknessQuestions: Phase3PersonalityStrengthWeaknessQuestion[] = [
  {
    id: 1,
    question: L(
      '친한 친구가 내 의견에 강하게 반대할 때 나는?',
      'When a close friend strongly disagrees with me, I…',
      '親しい友だちが自分の意見に強く反対したら？',
      '好友强烈反对我的意见时，我会？',
      '好友強烈反對我的意見時，我會？',
      'Khi bạn thân phản đối gay gắt ý kiến của bạn, bạn…',
      'Kalau teman dekat menolak keras pendapatku, biasanya aku…'
    ),
    options: [
      {
        text: L(
          '친구 말이 맞는 것 같아서 바로 내 생각을 바꾼다',
          'I change my mind quickly because they seem right.',
          '相手の言うことが正しそうで、すぐ考えを変える',
          '觉得朋友说得对，会很快改变想法',
          '覺得朋友說得對，會很快改變想法',
          'Thấy bạn có lý nên mình đổi ý ngay.',
          'Kalau kata teman masuk akal, langsung kubuat ubah pikiran.'
        ),
        score: 0,
      },
      {
        text: L(
          '일단 수긍하면서도 속으론 내 의견을 유지한다',
          'I nod along but quietly keep my own view.',
          'とりあえず頷いておきながら、内心は自分の意見を保つ',
          '表面先同意，心里仍保留自己的看法',
          '表面先同意，心裡仍保留自己的看法',
          'Gật đầu cho qua nhưng trong lòng vẫn giữ ý mình.',
          'Kuturuti di luar, tapi di dalam tetap pegang pendapat sendiri.'
        ),
        score: 1,
      },
      {
        text: L(
          '"그렇게 생각하는구나, 근데 나는 이래서 달라"라고 말한다',
          'I say, “I see—but I differ because…”',
          '「そう思うんだね。でも私はこうだから違う」と言う',
          '会说「我理解，但我因为……所以不一样」',
          '會說「我理解，但我因為……所以不一樣」',
          'Nói kiểu: “Hiểu bạn nghĩ vậy, nhưng với mình thì khác vì…”',
          'Katakan: “Oke, kutahu kamu mikir gitu, tapi punyaku beda karena…”'
        ),
        score: 2,
      },
      {
        text: L(
          '"아니, 그건 틀렸어"라고 명확하게 반박한다',
          'I push back clearly: “No—that’s wrong.”',
          '「いや、それは違う」とはっきり反論する',
          '会直接反驳：「不，那是错的」',
          '會直接反駁：「不，那是錯的」',
          'Phản bác rõ: “Không, cái đó sai.”',
          'Menolak tegas: “Tidak—itunya salah.”'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 2,
    question: L(
      '모임에서 분위기가 어색해질 때 나는?',
      'When the vibe in a group turns awkward, I…',
      '集まりで空気がぎこちなくなったら？',
      '聚会气氛变尴尬时，我会？',
      '聚會氣氛變尷尬時，我會？',
      'Khi không khí nhóm trở nên gượng gạo, bạn…',
      'Kalau suasana grup jadi canggung, biasanya aku…'
    ),
    options: [
      {
        text: L(
          '어색함을 감지하고 일부러 분위기를 맞추려고 애쓴다',
          'I notice it and try hard to smooth the mood.',
          '気まずさに気づいて、わざと空気を和ませようとする',
          '察觉到尴尬后会努力缓和气氛',
          '察覺到尷尬後會努力緩和氣氛',
          'Nhận ra liền và cố làm cho bớt gượng.',
          'Sadar lalu berusaha buat suasana lebih nyaman.'
        ),
        score: 0,
      },
      {
        text: L(
          '자연스럽게 화제를 바꾸거나 가볍게 농담을 건넨다',
          'I change the topic or crack a light joke.',
          '自然に話題を変えたり、軽い冗談を言う',
          '自然换话题或开个轻松的玩笑',
          '自然換話題或開個輕鬆的玩笑',
          'Chuyển chủ đề hoặc đùa nhẹ cho đỡ ngại.',
          'Alihkan topik atau lempar lelucon ringan.'
        ),
        score: 1,
      },
      {
        text: L(
          '어색한 상황이 불편하지만 굳이 먼저 나서지는 않는다',
          'It bothers me, but I rarely speak up first.',
          '気まずさは苦手だが、わざわざ先に出ない',
          '不舒服但不会主动出头',
          '不舒服但不會主動出頭',
          'Khó chịu nhưng không chủ động lên tiếng trước.',
          'Risih tapi jarang memulai duluan.'
        ),
        score: 2,
      },
      {
        text: L(
          '어색하든 말든 내가 하고 싶은 말을 계속한다',
          'Awkward or not—I keep saying what I want to say.',
          '気まずくても、言いたいことは言い続ける',
          '不管尴不尴尬，继续说我想说的',
          '不管尷不尷尬，繼續說我想說的',
          'Dù gượng vẫn nói hết điều mình muốn.',
          'Canggung atau tidak—tetap ngomong yang mau kuomong.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 3,
    question: L(
      '내가 한 일에 대해 칭찬을 받았을 때?',
      'When I get praised for something I did, I…',
      '自分がしたことを褒められたら？',
      '别人夸我做的事时，我会？',
      '別人誇我做的事時，我會？',
      'Khi được khen về việc mình làm, bạn…',
      'Kalau dipuji atas sesuatu yang kulakukan, biasanya aku…'
    ),
    options: [
      {
        text: L(
          '"아니에요, 별거 아닌데요" 손사래 치며 겸손하게 받는다',
          'I wave it off: “Oh no—it was nothing.”',
          '「いえいえ、たいしたことないです」と謙遜する',
          '摆手说「没有啦，没什么」',
          '擺手說「沒有啦，沒什麼」',
          'Xua tay: “Không có gì đâu.”',
          'Angkat tangan merendah: “Ah, biasa saja.”'
        ),
        score: 0,
      },
      {
        text: L(
          '"감사해요" 하고 기쁘게 받되, 속으론 조금 쑥스럽다',
          'I say thanks happily but feel a bit shy inside.',
          '「ありがとう」と喜んで受けつつ、内心は少し照れる',
          '开心道谢，心里有点不好意思',
          '開心道謝，心裡有點不好意思',
          'Cảm ơn vui vẻ nhưng hơi ngại trong lòng.',
          'Ucapkan makasih dengan senang tapi agak malu.'
        ),
        score: 1,
      },
      {
        text: L(
          '당연한 결과라고 생각하며 자연스럽게 받는다',
          'I take it naturally—it felt like an obvious outcome.',
          '当然の結果だと思って自然に受け止める',
          '觉得是理所当然的结果，自然接受',
          '覺得是理所當然的結果，自然接受',
          'Cho là kết quả đương nhiên và nhận một cách tự nhiên.',
          'Anggap wajar dan terima dengan santai.'
        ),
        score: 2,
      },
      {
        text: L(
          '"그렇죠? 저도 이 부분은 잘했다고 생각해요"라고 동의한다',
          'I agree: “Right—I think I did well there too.”',
          '「でしょ？ここは自分でもよくできたと思う」と同意する',
          '附和：「对吧？我也觉得这部分做得不错」',
          '附和：「對吧？我也覺得這部分做得不錯」',
          'Đồng ý: “Đúng không—chỗ đó mình cũng thấy làm tốt.”',
          'Setuju: “Iya kan—bagian itu menurutku juga oke.”'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 4,
    question: L(
      '하기 싫은 부탁을 받았을 때 나는?',
      'When I am asked to do something I do not want to do, I…',
      'やりたくないお願いをされたら？',
      '被拜托不想做的事时，我会？',
      '被拜託不想做的事時，我會？',
      'Khi được nhờ việc mình không muốn làm, bạn…',
      'Kalau diminta hal yang tidak kuinginkan, biasanya aku…'
    ),
    options: [
      {
        text: L(
          '싫어도 거절하지 못하고 결국 들어준다',
          'I cannot say no—and end up doing it.',
          '嫌でも断れず、結局引き受ける',
          '讨厌也拒绝不了，最后还是会做',
          '討厭也拒絕不了，最後還是會做',
          'Ghét mà không từ chối được—cuối cùng vẫn làm.',
          'Sebenarnya tidak mau tapi tidak bisa menolak—akhirnya tetap kerjakan.'
        ),
        score: 0,
      },
      {
        text: L(
          '최대한 돌려서 정중하게 거절하거나 조건을 건다',
          'I politely decline indirectly—or set conditions.',
          'なるべく遠回しに丁寧に断るか、条件をつける',
          '尽量委婉拒绝或谈条件',
          '盡量委婉拒絕或談條件',
          'Từ chối khéo hoặc đặt điều kiện.',
          'Menolak dengan halus atau memberi syarat.'
        ),
        score: 1,
      },
      {
        text: L(
          '"제가 지금 어려워서요"라고 이유를 대며 거절한다',
          'I refuse with a reason like “I can’t right now.”',
          '「今は難しいです」と理由をつけて断る',
          '用「我现在不方便」这类理由拒绝',
          '用「我現在不方便」這類理由拒絕',
          'Từ chối với lý do kiểu “Hiện tại mình khó.”',
          'Menolak dengan alasan seperti “Sekarang sulit buat aku.”'
        ),
        score: 2,
      },
      {
        text: L(
          '싫으면 "저 못 해요"라고 바로 말한다',
          'If I do not want to, I say “I can’t” straight away.',
          '嫌なら「無理です」とすぐ言う',
          '不想就会直接说「我做不了」',
          '不想就會直接說「我做不了」',
          'Không muốn là nói thẳng: “Mình không làm được.”',
          'Kalau tidak mau, langsung bilang tidak bisa.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 5,
    question: L(
      '팀 프로젝트에서 내가 맡은 역할은 주로?',
      'In a team project, my role is usually…',
      'チームプロジェクトで自分の役割はだいたい？',
      '团队项目里，我通常是？',
      '團隊專案裡，我通常是？',
      'Trong nhóm, vai trò của bạn thường là…',
      'Di proyek tim, peranku biasanya…'
    ),
    options: [
      {
        text: L(
          '조용히 맡은 일을 성실하게 해내는 서포터',
          'A quiet supporter who reliably finishes their part.',
          '黙々と担当分をこなすサポーター',
          '默默完成自己部分的支援型',
          '默默完成自己部分的支援型',
          'Người hỗ trợ âm thầm làm tròn phần việc.',
          'Pendukung yang diam-diam menyelesaikan bagiannya.'
        ),
        score: 0,
      },
      {
        text: L(
          '분위기를 잘 읽으며 필요한 역할을 자처하는 중재자',
          'A mediator who reads the room and steps into what is needed.',
          '空気を読み、必要な役割を引き受ける調整役',
          '会读空气并主动补位的中立协调者',
          '會讀空氣並主動補位的中立協調者',
          'Người hòa giải: đọc không khí và nhận vai cần thiết.',
          'Mediator yang membaca suasana dan mengisi peran yang perlu.'
        ),
        score: 1,
      },
      {
        text: L(
          '의견을 적극적으로 내되, 다른 의견도 존중하는 참여자',
          'An active participant who speaks up but respects others.',
          '意見ははっきり出しつつ、他者の意見も尊重する参加者',
          '积极发言也尊重他人意见的参与者',
          '積極發言也尊重他人意見的參與者',
          'Tham gia tích cực, nói rõ ý kiến nhưng vẫn tôn trọng người khác.',
          'Aktif berpendapat dan tetap menghormati pendapat lain.'
        ),
        score: 2,
      },
      {
        text: L(
          '주도적으로 방향을 정하고 끌고 나가는 리더',
          'A leader who sets direction and drives the team.',
          '方向を決めて引っ張るリーダー',
          '定方向并带队的领导者',
          '定方向並帶隊的領導者',
          'Người dẫn dắt: định hướng và kéo cả nhóm đi.',
          'Pemimpin yang menentukan arah dan menggerakkan tim.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 6,
    question: L(
      '계획에 없던 변수가 생겼을 때 나는?',
      'When an unexpected change hits my plans, I…',
      '予定にないトラブルや変更が出たら？',
      '计划外出现变数时，我会？',
      '計畫外出現變數時，我會？',
      'Khi có biến số ngoài kế hoạch, bạn…',
      'Kalau muncul hal tak terduga di rencana, biasanya aku…'
    ),
    options: [
      {
        text: L(
          '당황하고 불안해지지만 어떻게든 맞춰가려 노력한다',
          'I panic a bit but still try to adapt.',
          '慌え不安になるが、なんとか合わせようとする',
          '会慌会不安，但还是努力配合',
          '會慌會不安，但還是努力配合',
          'Hoang mang nhưng vẫn cố thích nghi.',
          'Cemas tapi tetap berusaha menyesuaikan diri.'
        ),
        score: 0,
      },
      {
        text: L(
          '아쉽지만 상황에 맞게 유연하게 조정한다',
          'It is a shame, but I flex and adjust to reality.',
          '残念だが状況に合わせて柔軟に調整する',
          '遗憾但会灵活调整',
          '遺憾但會靈活調整',
          'Tiếc nhưng linh hoạt chỉnh theo tình huống.',
          'Sayang, tapi menyesuaikan dengan fleksibel.'
        ),
        score: 1,
      },
      {
        text: L(
          '약간 불편하지만 빠르게 대안을 찾아 실행한다',
          'A bit annoyed, but I quickly find a plan B and act.',
          '少し面倒だが、すぐ代替案を見つけて動く',
          '有点不爽但会快速找替代方案执行',
          '有點不爽但會快速找替代方案執行',
          'Hơi khó chịu nhưng nhanh chóng tìm phương án B.',
          'Agak risih tapi cepat cari alternatif dan eksekusi.'
        ),
        score: 2,
      },
      {
        text: L(
          '변수 따위는 내 추진력으로 돌파한다',
          'I plow through—momentum beats surprises.',
          'トラブルくらい勢いで突破する',
          '用执行力硬扛变数',
          '用執行力硬扛變數',
          'Đập phá bằng động lực—không để bị kẹt.',
          'Terobos dengan dorongan—jangan biarkan halangan menghentikan.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 7,
    question: L(
      '주변 사람이 잘못된 행동을 하고 있다고 느낄 때?',
      'When I feel someone around me is doing something wrong, I…',
      '周りの人が間違ったことをしていると感じたら？',
      '觉得身边有人行为不当时，我会？',
      '覺得身邊有人行為不當時，我會？',
      'Khi thấy ai đó xung quanh làm điều sai, bạn…',
      'Kalau merasa ada orang di sekitarku berbuat salah, biasanya aku…'
    ),
    options: [
      {
        text: L(
          '직접 말하기 불편해서 모른 척하거나 혼자 속앓이한다',
          'I pretend not to notice—or stew alone because speaking up feels hard.',
          '言いにくくて見て見ぬふりか、一人でモヤモヤする',
          '不好意思直说就装没看见，或自己憋着',
          '不好意思直說就裝沒看見，或自己憋著',
          'Ngại nói thẳng nên làm ngơ hoặc tự dằn trong lòng.',
          'Malu menegur jadi pura-pura tidak lihat atau menggerutu sendiri.'
        ),
        score: 0,
      },
      {
        text: L(
          '가까운 사이라면 조심스럽게 한 번은 말해본다',
          'If we are close, I cautiously bring it up once.',
          '親しい相手なら、慎重に一度は伝える',
          '关系近的话会谨慎地说一次',
          '關係近的話會謹慎地說一次',
          'Nếu thân thì nhắc nhẹ một lần.',
          'Kalau dekat, sekali-kali menyinggung dengan hati-hati.'
        ),
        score: 1,
      },
      {
        text: L(
          '상대와의 관계를 고려하되, 필요하다면 솔직하게 말한다',
          'I weigh the relationship—but I will be honest if needed.',
          '関係を考えつつ、必要ならはっきり言う',
          '会考虑关系，但必要时坦诚说',
          '會考慮關係，但必要時坦誠說',
          'Cân nhắc mối quan hệ nhưng khi cần sẽ nói thật.',
          'Pertimbangkan hubungan—kalau perlu akan jujur.'
        ),
        score: 2,
      },
      {
        text: L(
          '가깝든 멀든 잘못된 건 잘못됐다고 바로 말한다',
          'Close or not—I say it is wrong right away.',
          '距離の近さに関係なく、間違いはすぐ指摘する',
          '不管远近，错了就会直接说',
          '不管遠近，錯了就會直接說',
          'Thân hay không—sai là nói thẳng.',
          'Dekat atau tidak—kalau salah langsung bilang.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 8,
    question: L(
      '오늘 하루 내 기분이 좋지 않을 때, 나는?',
      'When I am in a bad mood today, I…',
      '今日一日、機嫌が悪いとき、自分は？',
      '今天心情不好时，我会？',
      '今天心情不好時，我會？',
      'Khi hôm nay tâm trạng không tốt, bạn…',
      'Kalau hari ini suasana hatiku jelek, biasanya aku…'
    ),
    options: [
      {
        text: L(
          '내색하지 않고 평소처럼 행동하려 애쓴다',
          'I hide it and try to act normal.',
          '表に出さず、普段通り振る舞おうとする',
          '不表现出来，努力照常',
          '不表現出來，努力照常',
          'Giấu và cố tỏ ra bình thường.',
          'Tutupi dan berpura-pura seperti biasa.'
        ),
        score: 0,
      },
      {
        text: L(
          '티는 좀 나지만 업무나 관계에 영향 안 주려 노력한다',
          'It shows a little, but I try not to derail work or relationships.',
          '少しは出るが、仕事や人間関係に影響させないよう努める',
          '会有点明显但尽量不影响工作或关系',
          '會有點明顯但盡量不影響工作或關係',
          'Hơi lộ nhưng cố không ảnh hưởng công việc hay quan hệ.',
          'Sedikit terlihat tapi berusaha tidak mengganggu kerja atau relasi.'
        ),
        score: 1,
      },
      {
        text: L(
          '솔직하게 "나 오늘 좀 별로야"라고 말하는 편이다',
          'I tend to say honestly, “I am off today.”',
          '「今日はちょっと調子悪い」と正直に言う方だ',
          '会坦白说「我今天有点不爽」',
          '會坦白說「我今天有點不爽」',
          'Thường nói thật: “Hôm nay mình không ổn.”',
          'Cenderung bilang jujur: “Hari ini aku lagi jelek.”'
        ),
        score: 2,
      },
      {
        text: L(
          '기분이 나쁜 게 표정이나 말투에 그대로 드러난다',
          'My face and tone show it clearly.',
          '機嫌の悪さが表情や口調にそのまま出る',
          '心情差会写在表情和语气上',
          '心情差會寫在表情和語氣上',
          'Mặt và giọng lộ rõ là đang tệ.',
          'Ekspresi dan nada bicara jelas menunjukkan suasana buruk.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 9,
    question: L(
      '나의 취향이나 스타일에 대해 주변이 이해하지 못할 때?',
      'When people do not “get” my taste or style, I…',
      '自分の趣味やスタイルを周りが理解してくれないとき？',
      '别人不理解我的喜好或风格时，我会？',
      '別人不理解我的喜好或風格時，我會？',
      'Khi mọi người không hiểu gu hay phong cách của mình, bạn…',
      'Kalau orang tidak paham selera atau gaya ku, biasanya aku…'
    ),
    options: [
      {
        text: L(
          '"그렇게 보일 수도 있겠다" 싶어서 맞추려고 노력한다',
          'I try to adjust because I can see how it looks to them.',
          '「そう見えるかも」と思って合わせようとする',
          '觉得「别人那样看也正常」而试着配合',
          '覺得「別人那樣看也正常」而試著配合',
          'Nghĩ “cũng có thể trông vậy” rồi cố bớt khác biệt.',
          'Mencoba menyesuaikan karena mengerti bisa terlihat begitu.'
        ),
        score: 0,
      },
      {
        text: L(
          '내 취향을 설명하고 이해시키려 시도해본다',
          'I explain my taste and try to help them understand.',
          '趣味を説明して理解してもらおうとする',
          '会解释自己的喜好，试着让对方理解',
          '會解釋自己的喜好，試著讓對方理解',
          'Giải thích gu của mình để họ hiểu.',
          'Menjelaskan selera dan mencoba membuat mereka paham.'
        ),
        score: 1,
      },
      {
        text: L(
          '이해 못 해도 상관없다. 내 취향은 내 것이다',
          'They do not have to get it—my taste is mine.',
          '理解されなくてもいい。好みは自分のもの',
          '不理解也没关系，喜好是我自己的',
          '不理解也沒關係，喜好是我自己的',
          'Không hiểu cũng được—gu là của mình.',
          'Tidak paham juga tidak apa—selera itu milikku.'
        ),
        score: 2,
      },
      {
        text: L(
          '이해 못 하는 게 이상한 거다. 내가 틀린 게 아니다',
          'The weird part is them not getting it—I am not wrong.',
          '理解できない方がおかしい。自分が間違っているわけではない',
          '奇怪的是他们不理解，不是我错',
          '奇怪的是他們不理解，不是我錯',
          'Lạ là họ không hiểu—không phải mình sai.',
          'Yang aneh mereka tidak paham—bukan aku yang salah.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 10,
    question: L(
      '누군가와 의견 충돌이 생겼을 때 나의 목표는?',
      'When I clash with someone, my goal is to…',
      '誰かと意見がぶつかったとき、自分のゴールは？',
      '和人意见冲突时，我的目标是？',
      '和人意見衝突時，我的目標是？',
      'Khi bất đồng ý kiến với ai đó, mục tiêu của bạn là…',
      'Saat bentrok pendapat dengan seseorang, tujuanku biasanya…'
    ),
    options: [
      {
        text: L(
          '충돌 자체를 피하고 관계를 유지하는 것',
          'Avoid the conflict itself and keep the relationship.',
          '対立そのものを避け、関係を保つこと',
          '避免冲突本身，维持关系',
          '避免衝突本身，維持關係',
          'Tránh xung đột và giữ quan hệ.',
          'Menghindari konflik dan menjaga hubungan.'
        ),
        score: 0,
      },
      {
        text: L(
          '서로 조금씩 양보해서 원만하게 합의점을 찾는 것',
          'Meet halfway and settle it smoothly.',
          'お互いに少し譲り合って、まとまるところを探すこと',
          '互相让步，找到体面共识',
          '互相讓步，找到體面共識',
          'Cùng nhượng bộ để tìm điểm chung êm đẹp.',
          'Saling mengalah untuk titik temu yang adil.'
        ),
        score: 1,
      },
      {
        text: L(
          '내 입장을 충분히 전달하면서도 상대를 납득시키는 것',
          'State my stance fully while persuading the other side.',
          '自分の立場を十分に伝えつつ、相手を納得させること',
          '充分表达立场并说服对方',
          '充分表達立場並說服對方',
          'Nói rõ lập trường và thuyết phục đối phương.',
          'Sampaikan posisi dengan jelas sambil membujuk lawan bicara.'
        ),
        score: 2,
      },
      {
        text: L(
          '논리적으로 옳은 결론을 내리는 것 (감정은 별개)',
          'Reach the logically right conclusion—feelings aside.',
          '論理的に正しい結論を出すこと（感情は別）',
          '得出逻辑上正确的结论（情绪另说）',
          '得出邏輯上正確的結論（情緒另說）',
          'Ra kết luận đúng về logic—tách cảm xúc.',
          'Mencapai kesimpulan yang logis—pisahkan emosi.'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 11,
    question: L(
      '나를 가장 잘 아는 친구가 나에게 할 말은?',
      'The friend who knows me best would probably say…',
      'いちばん自分を知っている友だちが言いそうなことは？',
      '最懂我的朋友可能会对我说？',
      '最懂我的朋友可能會對我說？',
      'Người bạn hiểu mình nhất có lẽ sẽ nói…',
      'Teman yang paling mengerti diriku mungkin akan bilang…'
    ),
    options: [
      {
        text: L(
          '"넌 왜 이렇게 착해? 좀 이기적으로 살아도 돼"',
          '“Why are you so nice? You could be a little selfish.”',
          '「なんでそんなにいい人なの？少しくらい自分中心でもいいのに」',
          '「你怎么这么好？也可以自私一点」',
          '「你怎麼這麼好？也可以自私一點」',
          '“Sao bạn hiền thế? Ích kỷ một chút cũng được mà.”',
          '“Kok kamu baik banget? Egois sedikit juga boleh.”'
        ),
        score: 0,
      },
      {
        text: L(
          '"넌 진짜 눈치 빠르고 센스 있어. 근데 네 의견은 뭔데?"',
          '“You read the room and have great sense—but what do YOU think?”',
          '「空気読むの上手いしセンスある。でも君の意見は？」',
          '「你很有眼力也有梗，但你的想法呢？」',
          '「你很有眼力也有梗，但你的想法呢？」',
          '“Nhạy và có gu đấy—nhưng ý bạn là gì?”',
          '“Pintar baca situasi—tapi pendapatmu sendiri apa?”'
        ),
        score: 1,
      },
      {
        text: L(
          '"넌 어디서든 잘 적응하더라. 근데 네 색깔이 뭔지 모르겠어"',
          '“You adapt anywhere—but I can’t tell what your color is.”',
          '「どこでも馴染むね。でも君の色がわからない」',
          '「你到哪都能适应，但看不出你的特色」',
          '「你到哪都能適應，但看不出你的特色」',
          '“Bạn hòa nhập mọi nơi—nhưng không thấy màu riêng.”',
          '“Kamu adaptif di mana saja—tapi warnamu kurang jelas.”'
        ),
        score: 2,
      },
      {
        text: L(
          '"넌 확실히 카리스마 있어. 근데 가끔 너무 강하다"',
          '“You definitely have charisma—but sometimes it is a lot.”',
          '「カリスマあるね。でも時々強すぎる」',
          '「你很有气场，但有时太强了」',
          '「你很有氣場，但有時太強了」',
          '“Có uy lắm—nhưng đôi khi hơi quá mạnh.”',
          '“Karismatik—tapi kadang terlalu keras.”'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 12,
    question: L(
      '나 자신에 대해 가장 솔직하게 동의하는 말은?',
      'The line I most honestly agree with about myself is…',
      '自分自身について、いちばん正直に同意できるのは？',
      '关于我自己，我最认同的一句是？',
      '關於我自己，我最認同的一句是？',
      'Câu mô tả mà mình thành thật nhất đồng ý là…',
      'Kalimat tentang diriku yang paling kut setujui adalah…'
    ),
    options: [
      {
        text: L(
          '나는 갈등이 무서워서 참는 일이 많다',
          'I endure a lot because conflict scares me.',
          '対立が怖くて、我慢することが多い',
          '我害怕冲突，所以常常忍',
          '我害怕衝突，所以常常忍',
          'Mình hay nhịn vì sợ xung đột.',
          'Aku banyak menahan karena takut konflik.'
        ),
        score: 0,
      },
      {
        text: L(
          '나는 분위기 파악은 잘 하는데, 내 주장은 약하다',
          'I read the room well, but my own stance is weak.',
          '空気は読めるが、自分の主張は弱い',
          '会读空气，但主见不强',
          '會讀空氣，但主見不強',
          'Đọc tình huống tốt nhưng lập trường cá nhân yếu.',
          'Jago baca suasana tapi pendiri lemah.'
        ),
        score: 1,
      },
      {
        text: L(
          '나는 내 페이스가 있고, 그게 맞지 않으면 불편하다',
          'I have my own pace—and I feel off when it is disrupted.',
          '自分のペースがあり、それが合わないと落ち着かない',
          '我有自己的节奏，被打乱就不舒服',
          '我有自己的節奏，被打亂就不舒服',
          'Có nhịp riêng—bị phá là khó chịu.',
          'Punya ritme sendiri—kalau tidak cocok jadi tidak nyaman.'
        ),
        score: 2,
      },
      {
        text: L(
          '나는 내가 옳다고 생각하면 끝까지 밀어붙이는 편이다',
          'If I think I am right, I tend to push it through.',
          '自分が正しいと思ったら最後まで押し通すタイプだ',
          '觉得自己对就会坚持到底',
          '覺得自己對就會堅持到底',
          'Nếu tin mình đúng thì đẩy đến cùng.',
          'Kalau yakin benar, akan dorong terus sampai akhir.'
        ),
        score: 3,
      },
    ],
  },
];

export const phase3PersonalityStrengthWeaknessResults: Phase3PersonalityStrengthWeaknessResult[] = [
  {
    type: 'Type1',
    emoji: '🤍',
    title: L(
      '세상 모든 이의 쓰레기통, 착한 사람 증후군',
      'Everyone’s emotional trash bin—nice-guy syndrome',
      '世界の誰かのゴミ箱、いい人症候群',
      '全世界的情绪垃圾桶，老好人综合征',
      '全世界的情緒垃圾桶，老好人症候群',
      'Thùng rác cảm xúc của mọi người—hội chứng quá tử tế',
      'Tempat sampah emosi semua orang—sindrom terlalu baik'
    ),
    shortDescription: L(
      '왜 이렇게 착해? 덕분에 주변 사람들은 행복하겠다.',
      'Why so nice? Lucky for everyone around you.',
      'なんでそんなにいい人？周りは幸せそう。',
      '怎么这么好人？身边的人可太幸福了。',
      '怎麼這麼好人？身邊的人可太幸福了。',
      'Sao hiền thế? Xung quanh chắc “sướng” lắm.',
      'Kok baik banget? Orang di sekitarmu pasti senang.'
    ),
    personalityLabel: L(
      '배려형 (Caregiver)',
      'Caregiver type',
      'ケアギバー型',
      '照顾者型',
      '照顧者型',
      'Kiểu người chăm sóc (Caregiver)',
      'Tipe caregiver'
    ),
    strengthRoast: L(
      '당신은 타인의 감정에 매우 민감하고, 배려심이 깊습니다. 주변에서 갈등이 생기면 먼저 나서서 수습하고, 누구에게나 따뜻하게 대하는 사람입니다. 이런 사람이 곁에 있다는 것 자체가 주변 사람들에게는 큰 행운입니다.',
      'You are highly attuned to others’ feelings and deeply considerate. When conflict appears, you step in first to smooth things out, and you treat people warmly. Having someone like you nearby is a huge stroke of luck for others.',
      'あなたは他人の感情に敏感で、思いやりが深いです。周りで揉め事が起きると先に出て収め、誰にでも温かく接します。そんな人がそばにいること自体、周りにとって大きな幸運です。',
      '你对他人情绪很敏感，也很体贴。发生冲突时你会先出面缓和，对谁都温和。身边有这样的人，对别人来说本身就是很大的幸运。',
      '你對他人情緒很敏感，也很體貼。發生衝突時你會先出面緩和，對誰都溫和。身邊有這樣的人，對別人來說本身就是很大的幸運。',
      'Bạn nhạy với cảm xúc người khác và rất chu đáo. Khi có mâu thuẫn, bạn thường ra tay hòa giải trước và đối xử ấm áp với mọi người. Có một người như bên cạnh là may mắn lớn cho người khác.',
      'Kamu peka terhadap perasaan orang lain dan sangat perhatian. Saat konflik muncul, kamu yang duluan meredakan dan bersikap hangat pada semua orang. Memilikimu di dekatnya adalah berkah besar bagi orang lain.'
    ),
    weaknessRoast: L(
      '문제는, 당신이 너무 착하다는 겁니다. 거절을 못 해서 하기 싫은 일을 떠안고, 화가 나도 참고, 상처를 받아도 "괜찮아"라고 합니다. 그 착함이 결국 당신 자신을 가장 힘들게 하고 있습니다. 남한테 하는 배려의 10%만 자신에게 써보세요.',
      'The problem is you are too nice. You cannot refuse, so you take on tasks you hate; you swallow anger; even when hurt you say “it’s fine.” That kindness ends up hurting you the most. Try spending even 10% of the care you give others on yourself.',
      '問題は、あなたが良すぎることです。断れずにやりたくないことを抱え、怒っても我慢し、傷ついても「大丈夫」と言う。その優しさが結局いちばんあなたを苦しめています。人に向ける配慮の10%だけでも自分に使ってみて。',
      '问题在于你太好说话了。不会拒绝就会接下讨厌的事，生气也忍，受伤也说「没事」。这种善良最后最伤的是你自己。试着把给别人的体贴分一成给自己。',
      '問題在於你太好說話了。不會拒絕就會接下討厭的事，生氣也忍，受傷也說「沒事」。這種善良最後最傷的是你自己。試著把給別人的體貼分一成給自己。',
      'Vấn đề là bạn quá tử tế. Không từ chối nên gánh việc ghét, giận cũng nhịn, tổn thương cũng bảo “không sao.” Lòng tốt đó cuối cùng làm bạn khổ nhất. Hãy dành cho mình 10% sự quan tâm bạn dành cho người khác.',
      'Masalahnya kamu terlalu baik. Tidak bisa menolak jadi menelan pekerjaan yang tidak suka, marah pun ditahan, terluka pun bilang tidak apa-apa. Kebaikan itu pada akhirnya paling menyakitkan dirimu sendiri. Luangkan 10% perhatian yang kamu beri ke orang lain untuk dirimu.'
    ),
    strengthKeywords: L(
      '따뜻함, 공감능력, 갈등 회피 능력',
      'warmth, empathy, conflict avoidance',
      '温かさ、共感力、衝突回避',
      '温暖、共情、回避冲突',
      '溫暖、共情、迴避衝突',
      'ấm áp, đồng cảm, tránh xung đột',
      'hangat, empati, menghindari konflik'
    ),
    weaknessKeywords: L(
      '거절 장애, 자기희생, 감정 억압',
      'can’t say no, self-sacrifice, emotional suppression',
      '断れない、自己犠牲、感情の抑圧',
      '难以拒绝、自我牺牲、压抑情绪',
      '難以拒絕、自我犧牲、壓抑情緒',
      'không từ chối được, hy sinh bản thân, nén cảm xúc',
      'sulit menolak, mengorbankan diri, menekan emosi'
    ),
    goodMatch: L(
      'Type 3 (적당히 맞춰주면서 선을 지켜줌)',
      'Type 3 (Meets you halfway and holds boundaries)',
      'Type 3（程よく合わせつつ線を引いてくれる）',
      'Type 3（会配合你，也会守住界限）',
      'Type 3（會配合你，也會守住界限）',
      'Type 3 (Vừa chiều vừa giữ ranh giới)',
      'Type 3 (Mengimbangi sekaligus menjaga batas)'
    ),
    badMatch: L(
      'Type 6 (당신의 착함을 당연하게 여길 가능성 높음)',
      'Type 6 (Likely to take your kindness for granted)',
      'Type 6（あなたの優しさを当然視しやすい）',
      'Type 6（容易把你的好当成理所当然）',
      'Type 6（容易把你的好當成理所當然）',
      'Type 6 (Dễ coi lòng tốt của bạn là đương nhiên)',
      'Type 6 (Mudah menganggap kebaikanmu sebagai hal biasa)'
    ),
  },
  {
    type: 'Type2',
    emoji: '🌊',
    title: L(
      '센스는 만렙, 정작 본인 의견은 없음',
      'Max social IQ—yet where is your opinion?',
      'センスは最強なのに、本人の意見がない',
      '情商拉满，但自己的想法呢？',
      '情商拉滿，但自己的想法呢？',
      'EQ tối đa—nhưng ý kiến của bạn đâu?',
      'EQ mentok—tapi pendapatmu sendiri mana?'
    ),
    shortDescription: L(
      '눈치 하나는 진짜 빠르다. 근데 네 생각은 뭔데?',
      'You read the room fast. But what do YOU think?',
      '空気は読める。でも君の考えは？',
      '很会看气氛。但你的想法是？',
      '很會看氣氛。但你的想法是？',
      'Nhạy lắm. Nhưng bạn nghĩ gì?',
      'Pinter baca suasana. Tapi menurutmu sendiri apa?'
    ),
    personalityLabel: L(
      '조화형 (Harmonizer)',
      'Harmonizer type',
      'ハーモナイザー型',
      '协调型',
      '協調型',
      'Kiểu hòa hợp (Harmonizer)',
      'Tipe harmonizer'
    ),
    strengthRoast: L(
      '당신은 상황을 빠르게 읽고, 분위기에 맞는 말과 행동을 자연스럽게 해냅니다. 어떤 모임에서도 튀지 않고 잘 섞이며, 사람들이 편하게 느끼는 타입입니다. 사회생활에 최적화된 센스를 가지고 있습니다.',
      'You read situations quickly and naturally say and do what fits the vibe. In any group you blend in without sticking out, and people feel at ease around you. Your instincts are tuned for social life.',
      'あなたは状況を素早く読み、空気に合う言動が自然にできます。どんな集まりでも目立たず溶け込み、周りが安心するタイプです。社会性に最適化されたセンスがあります。',
      '你能快速读懂场合，言行自然贴合气氛。在任何场合都不突兀，让人相处轻松。你的直觉很适应社交生活。',
      '你能快速讀懂場合，言行自然貼合氣氛。在任何場合都不突兀，讓人相處輕鬆。你的直覺很適應社交生活。',
      'Bạn đọc tình huống nhanh và nói làm đúng không khí. Ở đâu cũng hòa nhập, khiến người khác thoải mái. Bản năng xã hội của bạn rất tối ưu.',
      'Kamu cepat membaca situasi dan berkata-berbuat sesuai suasana. Di mana pun bisa menyatu dan membuat orang nyaman. Naluri sosialmu sangat terasah.'
    ),
    weaknessRoast: L(
      '그런데 당신, 정작 본인의 의견은 어디 있나요? 분위기에 너무 맞추다 보니 진짜 내 생각이 뭔지 모를 때가 있습니다. "저는 다 괜찮아요"라는 말이 배려처럼 보이지만, 사실은 스스로의 욕구를 억누르고 있는 것일 수 있습니다. 눈치 말고 내 의견을 말해도 세상은 안 무너집니다.',
      'But where is your own opinion? If you match the mood too much, you can lose track of what you really think. “I’m fine with anything” may look considerate, but it can mean you are suppressing your needs. Say what you think—the world will not collapse.',
      'でも、本人の意見はどこ？空気に合わせすぎて、本音がわからなくなることがあります。「なんでも大丈夫」は配慮に見えても、本当は自分の欲求を抑えているだけかもしれません。空気を読むより、意見を言っても世界は壊れません。',
      '但你自己的想法呢？太配合气氛时，会不知道真心想要什么。「我都行」看起来像体贴，也可能是在压抑需求。别只看气氛，说出想法天不会塌。',
      '但你自己的想法呢？太配合氣氛時，會不知道真心想要什麼。「我都行」看起來像體貼，也可能是在壓抑需求。別只看氣氛，說出想法天不會塌。',
      'Nhưng ý kiến của bạn đâu? Chiều không khí quá sẽ quên mình nghĩ gì. Câu “tôi đều được” có vẻ chu đáo nhưng có thể đang nén nhu cầu. Nói ra đi—thế giới không sập.',
      'Tapi pendapatmu sendiri di mana? Terlalu mengikuti suasana bisa membuatmu lupa isi hati. “Aku apa saja boleh” terlihat perhatian, tapi bisa jadi menekan kebutuhan. Ucapkan—dunia tidak runtuh.'
    ),
    strengthKeywords: L(
      '센스, 적응력, 사회성',
      'social IQ, adaptability, sociability',
      'センス、適応力、社会性',
      '情商、适应力、社交力',
      '情商、適應力、社交力',
      'nhạy cảm xã hội, thích nghi, hòa đồng',
      'kecerdasan sosial, adaptasi, sosial'
    ),
    weaknessKeywords: L(
      '주체성 부족, 과한 눈치, 자기표현 회피',
      'weak agency, over-reading the room, avoiding self-expression',
      '主体性不足、空気読みすぎ、自己表現回避',
      '主见不足、过度察言观色、回避自我表达',
      '主見不足、過度察言觀色、迴避自我表達',
      'thiếu chủ thể, đọc không khí quá, tránh thể hiện bản thân',
      'kurang assertif, terlalu membaca suasana, hindari ekspresi diri'
    ),
    goodMatch: L(
      'Type 4 (대신 끌어줄 사람이 있으면 편안함)',
      'Type 4 (Easier when someone else leads the way)',
      'Type 4（引っ張ってくれる人がいると楽）',
      'Type 4（有人带头你会更安心）',
      'Type 4（有人帶頭你會更安心）',
      'Type 4 (Có người dẫn thì nhẹ nhàng hơn)',
      'Type 4 (Lebih tenang kalau ada yang memimpin)'
    ),
    badMatch: L(
      'Type 1 (둘 다 맞춰주다가 아무것도 결정 안 됨)',
      'Type 1 (Both keep accommodating—nothing gets decided)',
      'Type 1（二人とも合わせすぎて決まらない）',
      'Type 1（两个人都迁就，最后啥也定不了）',
      'Type 1（兩個人都遷就，最後啥也定不了）',
      'Type 1 (Cả hai đều chiều—chẳng quyết được gì)',
      'Type 1 (Sama-sama mengalah—tidak ada keputusan)'
    ),
  },
  {
    type: 'Type3',
    emoji: '🌫️',
    title: L(
      '어디서든 무난, 근데 색깔이 없다',
      'Smooth anywhere—yet no clear “you” color',
      'どこでも馴染むのに、色がない',
      '到哪都合拍，但缺少个人色彩',
      '到哪都合拍，但缺少個人色彩',
      'Hòa nhập mọi nơi—nhưng thiếu “màu riêng”',
      'Cocok di mana saja—tapi kurang warna diri'
    ),
    shortDescription: L(
      '적응력 하나는 진짜 최고야. 근데 너만의 뭔가가 없어.',
      'Your adaptability is top-tier. But what is uniquely yours?',
      '適応力は最強。でも君だけの何かがない。',
      '适应力一流。但你独有的东西呢？',
      '適應力一流。但你獨有的東西呢？',
      'Thích nghi đỉnh. Nhưng thứ “chỉ của bạn” đâu?',
      'Adaptasi juara. Tapi yang khas milikmu apa?'
    ),
    personalityLabel: L(
      '적응형 (Adapter)',
      'Adapter type',
      'アダプター型',
      '适应型',
      '適應型',
      'Kiểu thích nghi (Adapter)',
      'Tipe adapter'
    ),
    strengthRoast: L(
      '당신은 어떤 환경에서도 자연스럽게 녹아드는 뛰어난 적응력을 가졌습니다. 극단적이지 않고, 감정적이지도 않으며, 대부분의 상황을 무난하게 헤쳐나갑니다. 누구에게나 크게 미움받지 않는 안정적인 성격입니다.',
      'You blend into any setting with strong adaptability. You are rarely extreme or overly emotional, and you navigate most situations smoothly. People rarely dislike you strongly—you are stable and steady.',
      'あなたはどんな環境にも自然に溶け込む適応力があります。極端でも感情的でもなく、多くの場面を安定して乗り切ります。誰からも強く嫌われにくい、安定した性格です。',
      '你在任何环境都能自然融入，适应力强。不太极端也不太情绪化，多数情况能平稳过关。不太会招人讨厌，性格稳定。',
      '你在任何環境都能自然融入，適應力強。不太極端也不太情緒化，多數情況能平穩過關。不太會招人討厭，性格穩定。',
      'Bạn hòa nhập mọi môi trường, thích nghi tốt. Hiếm khi cực đoan hay quá cảm tính, vượt qua hầu hết tình huống êm ấm. Ít bị ghét mạnh—ổn định.',
      'Kamu menyatu di lingkungan apa pun dengan adaptasi kuat. Jarang ekstrem atau terlalu emosional, melewati banyak situasi dengan mulus. Jarang sangat dibenci—stabil.'
    ),
    weaknessRoast: L(
      '솔직히 말하면, 당신에게 강한 인상을 받기가 어렵습니다. 너무 무난해서 기억에 남지 않는 경우가 생깁니다. 나는 이런 사람이야라고 내세울 수 있는 뚜렷한 색깔이 필요합니다. 모난 돌이 정 맞는다지만, 아무 모도 없으면 굴러가지도 않습니다.',
      'Honestly, it is hard to get a strong impression of you. Being too “safe” can make you forgettable. You need a clearer signature—something you can say, “this is me.” Rough stones get polished—but with no angles, nothing moves forward.',
      '正直、強い印象を残しにくいです。あまりに無難で記憶に残らないことがあります。「私はこういう人」と言える色が必要です。角のある石は削られるが、角がなければ転がらない。',
      '说实话，你很难留下强烈印象。太稳妥有时会被遗忘。你需要更鲜明的标签让人记住「你是怎样的人」。有棱角的石头才会被看见，太平滑反而滚不动。',
      '說實話，你很難留下強烈印象。太穩妥有時會被遺忘。你需要更鮮明的標籤讓人記住「你是怎樣的人」。有棱角的石頭才會被看見，太平滑反而滾不動。',
      'Thật lòng, khó để lại ấn tượng mạnh. Quá “an toàn” dễ bị quên. Bạn cần dấu ấn rõ—“đây là mình.” Đá góc cạnh mới được mài—trơn quá thì không lăn.',
      'Jujur, kesan kuat sulit melekat. Terlalu “aman” bisa terlupakan. Kamu butuh ciri khas—“ini aku.” Batu berbentuk bisa diasah—tanpa sudut, sulit bergerak.'
    ),
    strengthKeywords: L(
      '유연함, 균형감, 안정성',
      'flexibility, balance, stability',
      '柔軟さ、バランス感、安定性',
      '灵活、平衡感、稳定',
      '靈活、平衡感、穩定',
      'linh hoạt, cân bằng, ổn định',
      'fleksibel, seimbang, stabil'
    ),
    weaknessKeywords: L(
      '개성 부재, 뚜렷한 주관 없음, 존재감 약함',
      'weak individuality, unclear stance, low presence',
      '個性の薄さ、主張の弱さ、存在感の薄さ',
      '个性模糊、立场不清、存在感弱',
      '個性模糊、立場不清、存在感弱',
      'thiếu cá tính, lập trường mờ, ít ấn tượng',
      'kurang individualitas, sikap kabur, minim presence'
    ),
    goodMatch: L(
      'Type 5 (강한 색깔 가진 사람 옆에서 균형 역할)',
      'Type 5 (Balances next to someone with a strong color)',
      'Type 5（強い色の人の隣でバランスを取る）',
      'Type 5（在个性强的人身边起平衡作用）',
      'Type 5（在個性強的人身邊起平衡作用）',
      'Type 5 (Cân bên cạnh người có “màu” mạnh)',
      'Type 5 (Menyeimbangkan di samping orang yang kuat karakter)'
    ),
    badMatch: L(
      'Type 2 (둘 다 색이 없어서 시너지가 없음)',
      'Type 2 (Both low on “color”—little synergy)',
      'Type 2（二人とも色が薄く、相乗効果が出にくい）',
      'Type 2（两个人都缺特色，难产生化学反应）',
      'Type 2（兩個人都缺特色，難產生化學反應）',
      'Type 2 (Cả hai đều nhạt—khó tạo hiệu ứng)',
      'Type 2 (Keduanya tipis warnanya—sinergi lemah)'
    ),
  },
  {
    type: 'Type4',
    emoji: '🏔️',
    title: L(
      '주관 뚜렷, 근데 가끔 벽이 느껴짐',
      'Strong principles—sometimes a wall between you and others',
      '主観は明確。でも時々壁を感じる',
      '主见很清晰，但有时让人觉得有墙',
      '主見很清晰，但有時讓人覺得有牆',
      'Nguyên tắc rõ—đôi khi như có tường',
      'Prinsip kuat—kadang terasa ada tembok'
    ),
    shortDescription: L(
      '확실히 믿음직스럽긴 해. 근데 네 방식이 전부인 줄 알더라.',
      'Reliable for sure—but it can feel like your way is the only way.',
      '頼りになる。でも君のやり方が全部だと思われがち。',
      '确实靠谱。但有时让人觉得你的方式才是唯一答案。',
      '確實靠譜。但有時讓人覺得你的方式才是唯一答案。',
      'Đáng tin—nhưng đôi khi như chỉ có cách của bạn.',
      'Dapat diandalkan—tapi kadang seolah hanya cara kamu yang benar.'
    ),
    personalityLabel: L(
      '주관형 (Principled)',
      'Principled type',
      'プリンシプル型',
      '原则型',
      '原則型',
      'Kiểu nguyên tắc (Principled)',
      'Tipe berprinsip'
    ),
    strengthRoast: L(
      '당신은 자신의 기준이 명확하고, 그 기준대로 일관되게 행동합니다. 흔들리지 않는 주관과 추진력 덕분에 어려운 상황에서도 중심을 잡고 나아갑니다. 리더로서의 자질이 충분하고, 주변 사람들이 신뢰하고 의지하는 타입입니다.',
      'Your standards are clear and you act consistently with them. With steady conviction and drive, you keep your footing even in hard moments. You have real leadership material—people trust and lean on you.',
      'あなたは自分の基準が明確で、それに沿って一貫して動きます。揺るがない主観と推進力で、難しい局面でも軸を保てます。リーダーとしての資質があり、周りが信頼して頼るタイプです。',
      '你标准清晰，行事一致。凭借稳定的主见和执行力，困境中也能稳住。具备领导气质，别人愿意信任、依靠你。',
      '你標準清晰，行事一致。憑藉穩定的主見和執行力，困境中也能穩住。具備領導氣質，別人願意信任、依靠你。',
      'Chuẩn mực rõ, hành động nhất quán. Với quyết tâm và động lực, bạn giữ vững kể cả lúc khó. Có chất lãnh đạo—người khác tin và nhờ cậy.',
      'Standarmu jelas dan konsisten. Dengan keyakinan dan dorongan, tetap teguh saat sulit. Ada aura pemimpin—orang percaya dan mengandalkanmu.'
    ),
    weaknessRoast: L(
      '그런데 당신, 내 방식이 유일한 정답이라고 생각하는 순간이 있지 않으신가요? 당신의 기준이 옳을 때도 많지만, 그 기준이 타인에게도 똑같이 적용되어야 한다는 생각이 관계를 딱딱하게 만들 수 있습니다. 가끔은 틀려도 괜찮고, 다른 방식도 맞을 수 있습니다.',
      'But do you sometimes feel your way is the only right way? Your standards are often correct, yet assuming everyone should meet them the same way can make relationships stiff. Sometimes being wrong is okay—and other paths can be right too.',
      'でも、自分のやり方が唯一の正解だと思う瞬間はありませんか？基準が正しいことも多いですが、他人にも同じ基準を当てはめすぎると関係が硬くなります。たまに間違ってもいいし、別のやり方も正しいことがあります。',
      '但你有没有觉得「只有我的方式才对」？你的标准常常没错，但若认为别人也该完全按你的来，关系会变僵。有时错一点也没关系，别的做法也可能对。',
      '但你有沒有覺得「只有我的方式才對」？你的標準常常沒錯，但若認為別人也該完全按你的來，關係會變僵。有時錯一點也沒關係，別的做法也可能對。',
      'Nhưng có lúc bạn nghĩ chỉ cách mình mới đúng? Chuẩn của bạn thường đúng, nhưng áp dụng y hệt cho người khác có thể làm quan hệ cứng. Đôi khi sai cũng được—cách khác cũng có thể đúng.',
      'Tapi pernah merasa hanya caramu yang benar? Standarmu sering tepat, tapi memaksakan hal yang sama ke orang lain bisa bikin hubungan kaku. Kadang salah tidak apa—cara lain juga bisa benar.'
    ),
    strengthKeywords: L(
      '일관성, 추진력, 신뢰감',
      'consistency, drive, trustworthiness',
      '一貫性、推進力、信頼感',
      '一致性、执行力、可信感',
      '一致性、執行力、可信感',
      'nhất quán, động lực, đáng tin',
      'konsisten, dorongan, dapat dipercaya'
    ),
    weaknessKeywords: L(
      '고집, 융통성 부족, 타인의 방식 존중 미흡',
      'stubbornness, low flexibility, weak respect for others’ styles',
      '頑固、柔軟性不足、他者のやり方への尊重不足',
      '固执、灵活性不足、对他人方式尊重不够',
      '固執、靈活性不足、對他人方式尊重不夠',
      'cứng nhắc, ít linh hoạt, thiếu tôn trọng cách người khác',
      'keras kepala, kurang fleksibel, kurang hormati gaya orang lain'
    ),
    goodMatch: L(
      'Type 2 (센스있게 보완해 주는 파트너)',
      'Type 2 (A partner who smooths things with tact)',
      'Type 2（センスよく補ってくれる相手）',
      'Type 2（有情商、能巧妙补位的搭档）',
      'Type 2（有情商、能巧妙補位的搭檔）',
      'Type 2 (Người bù đắp khéo bằng tình huống)',
      'Type 2 (Partner yang melengkapi dengan cerdas)'
    ),
    badMatch: L(
      'Type 6 (두 사람 다 자기 방식을 고수해서 충돌 잦음)',
      'Type 6 (Both cling to their way—frequent clashes)',
      'Type 6（二人とも自分のやり方を曲げず衝突しやすい）',
      'Type 6（两人都坚持己见，容易冲突）',
      'Type 6（兩人都堅持己見，容易衝突）',
      'Type 6 (Cả hai bám cách mình—hay va chạm)',
      'Type 6 (Keduanya memegang cara sendiri—sering bentrok)'
    ),
  },
  {
    type: 'Type5',
    emoji: '⚡',
    title: L(
      '카리스마 넘치는, 근데 독선 직전',
      'High charisma—one step from domineering',
      'カリスマはあるが、独断寸前',
      '气场很强，离独断专行只差一步',
      '氣場很強，離獨斷專行只差一步',
      'Uy mạnh—thêm một bước là độc đoán',
      'Karisma tinggi—hampir mendominasi'
    ),
    shortDescription: L(
      '강렬하긴 한데... 가끔 무섭다.',
      'Intense… and sometimes intimidating.',
      '強烈だけど…時々怖い。',
      '很强烈…但有时让人有压力。',
      '很強烈…但有時讓人有壓力。',
      'Mạnh… đôi khi hơi đáng sợ.',
      'Kencang… kadang menakutkan.'
    ),
    personalityLabel: L(
      '카리스마형 (Charismatic)',
      'Charismatic type',
      'カリスマ型',
      '魅力型',
      '魅力型',
      'Kiểu uy lực (Charismatic)',
      'Tipe karismatik'
    ),
    strengthRoast: L(
      '당신은 군중 속에서도 단번에 눈에 띄는 강렬한 존재감을 가졌습니다. 자신의 의견을 명확하게 표현하고, 옳다고 생각하는 것은 끝까지 관철시키는 뚝심이 있습니다. 이런 카리스마는 아무나 가질 수 없는 강점입니다.',
      'Even in a crowd, you stand out with strong presence. You state your views clearly and push through what you believe is right. That charisma is a rare strength not everyone has.',
      '群衆の中でも一発で目立つ存在感があります。意見をはっきり言い、正しいと思うことは最後まで通す粘りがあります。そのカリスマは誰にでもある強みではありません。',
      '在人群中也能一眼被注意到，存在感强。你清楚表达观点，认定的事会坚持到底。这种气场不是谁都有的优势。',
      '在人群中也能一眼被注意到，存在感強。你清楚表達觀點，認定的事會堅持到底。這種氣場不是誰都有的優勢。',
      'Giữa đám đông vẫn nổi bật. Bạn nói rõ quan điểm và theo đuổi điều mình tin là đúng. Uy lực đó là điểm mạnh hiếm có.',
      'Di keramaian pun menonjol. Kamu menyatakan pendapat jelas dan menekan apa yang kamu yakini benar. Karisma itu kekuatan langka.'
    ),
    weaknessRoast: L(
      '그런데 솔직히 말하면, 당신 주변 사람들 중 일부는 당신이 좀 무섭습니다. 카리스마와 독선의 경계는 생각보다 얇습니다. 내가 옳다는 확신이 강할수록, 상대의 말을 듣는 귀가 닫히고 있지는 않은지 점검이 필요합니다. 강함이 빛나려면 유연함이 받쳐줘야 합니다.',
      'Honestly, some people around you find you a bit scary. The line between charisma and domineering is thinner than it looks. The stronger your “I am right” feeling, the more you should check whether you are still listening. Strength shines when flexibility supports it.',
      '正直、周りの一部の人はあなたを少し怖いと感じています。カリスマと独断の境界は思ったより薄いです。「自分が正しい」ほど、相手の声を聞く耳が閉じていないか確認が必要です。強さは柔軟さがあってこそ輝きます。',
      '坦白说，身边有人会觉得你有点压迫感。魅力与独断的边界比你想的更薄。越坚信自己对，越要检查有没有关掉倾听的耳朵。强硬要配灵活才耀眼。',
      '坦白說，身邊有人會覺得你有點壓迫感。魅力與獨斷的邊界比你想的更薄。越堅信自己對，越要檢查有沒有關掉傾聽的耳朵。強硬要配靈活才耀眼。',
      'Thật lòng, một số người thấy bạn hơi đáng sợ. Ranh giới giữa uy và độc đoán mỏng hơn bạn nghĩ. Càng tin mình đúng, càng cần kiểm tra có còn lắng nghe không. Sức mạnh cần linh hoạt để tỏa sáng.',
      'Sejujurnya, ada yang merasa kamu menakutkan. Garis antara karisma dan otoriter tipis. Semakin yakin benar, semakin perlu cek apakah masih mendengarkan. Kekuatan butuh fleksibilitas agar bersinar.'
    ),
    strengthKeywords: L(
      '강한 존재감, 뚝심, 자기 확신',
      'presence, grit, self-confidence',
      '存在感、粘り強さ、自己確信',
      '存在感、韧劲、自信',
      '存在感、韌勁、自信',
      'sự hiện diện, quyết tâm, tự tin',
      'presence, tekad, percaya diri'
    ),
    weaknessKeywords: L(
      '독선 경향, 경청 부족, 타인에 대한 압도감',
      'domineering tendency, weak listening, overwhelming to others',
      '独断傾向、傾聴不足、他者への圧迫感',
      '独断倾向、倾听不足、让人感到压迫',
      '獨斷傾向、傾聽不足、讓人感到壓迫',
      'độc đoán, ít lắng nghe, áp đảo người khác',
      'cenderung mendominasi, kurang mendengarkan, menekan orang lain'
    ),
    goodMatch: L(
      'Type 3 (균형 잡아주는 무난한 사람이 필요함)',
      'Type 3 (Needs someone steady to balance the energy)',
      'Type 3（勢いを整えてくれる安定した人が必要）',
      'Type 3（需要稳妥的人来平衡气场）',
      'Type 3（需要穩妥的人來平衡氣場）',
      'Type 3 (Cần người ổn định để cân bằng)',
      'Type 3 (Butuh orang stabil untuk menyeimbangkan)'
    ),
    badMatch: L(
      'Type 4 (둘 다 강해서 붙으면 폭발)',
      'Type 4 (Two strong forces—sparks fly)',
      'Type 4（二人とも強くてぶつかりやすい）',
      'Type 4（两个都强，撞在一起就爆）',
      'Type 4（兩個都強，撞在一起就爆）',
      'Type 4 (Cả hai đều mạnh—chạm là nổ)',
      'Type 4 (Keduanya kuat—bentrok bisa meledak)'
    ),
  },
  {
    type: 'Type6',
    emoji: '🌑',
    title: L(
      '내 세계관이 곧 우주, 독보적 개성파',
      'Your worldview is the universe—one-of-a-kind',
      '自分の世界観が宇宙。唯一無二の個性派',
      '世界观即宇宙，独一无二的个性派',
      '世界觀即宇宙，獨一無二的個性派',
      'Thế giới quan của bạn là vũ trụ—độc nhất',
      'Duniamu adalah alam semesta—satu-satunya'
    ),
    shortDescription: L(
      '대단하긴 한데, 솔직히 좀 이해하기 어려운 사람이야.',
      'Impressive—but honestly, hard to read sometimes.',
      'すごいけど、正直ちょっと理解しにくい。',
      '很厉害，但说实话有点难懂。',
      '很厲害，但說實話有點難懂。',
      'Ấn tượng—nhưng đôi khi khó hiểu.',
      'Mengesankan—tapi jujur agak sulit dipahami.'
    ),
    personalityLabel: L(
      '독립형 (Individualist)',
      'Individualist type',
      'インディビジュアリスト型',
      '独立型',
      '獨立型',
      'Kiểu cá nhân (Individualist)',
      'Tipe individualis'
    ),
    strengthRoast: L(
      '당신은 타인의 시선이나 평가에 거의 흔들리지 않는 강철 멘탈과 독보적인 개성을 가졌습니다. 남들이 왜 저러지?라고 할 때 당신은 이미 다음 단계를 가고 있는 경우가 많습니다. 자신만의 세계가 확고한 사람은 때때로 시대를 앞서가는 창의적인 결과물을 만들어냅니다.',
      'You barely waver under others’ eyes or judgments—you have steel resolve and a one-of-a-kind style. While people wonder “why are they like that?” you are often already on the next step. A firm inner world can produce ahead-of-the-curve creative work.',
      '他人の視線や評価にほとんど揺らがないメンタルと、唯一無二の個性を持っています。「なぜあんなことするの？」と言われる頃には、もう次の段階にいることが多いです。自分の世界が固い人は、時代を先取りする創造を生むことがあります。',
      '你几乎不被他人眼光或评价动摇，内心坚硬、风格独特。别人还在问「为什么这样」时，你往往已经走到下一步。内心世界坚定的人，有时会做出超前时代的创造。',
      '你幾乎不被他人眼光或評價動搖，內心堅硬、風格獨特。別人還在問「為什麼這樣」時，你往往已經走到下一步。內心世界堅定的人，有時會做出超前時代的創造。',
      'Bạn hiếm khi lung lay trước ánh mắt hay đánh giá—tinh thần thép, phong cách độc nhất. Khi người khác còn hỏi “sao vậy?” bạn đã ở bước tiếp. Thế giới nội tâm vững đôi khi tạo ra sáng tạo đi trước thời đại.',
      'Kamu jarang goyah oleh pandangan atau penilaian—mental baja, gaya unik. Saat orang bertanya “kenapa begitu?” kamu sering sudah selangkah maju. Dunia batin yang kokoh bisa melahirkan karya kreatif yang mendahului zaman.'
    ),
    weaknessRoast: L(
      '그러나 솔직하게 말하겠습니다. 당신은 타인과의 소통에서 자주 불협화음이 생깁니다. 내 방식이 너무 확고해서 협업이 어렵고, 공감보다 결론을 먼저 말하는 습관이 관계를 멀어지게 합니다. 세상은 혼자 살 수 없습니다. 당신의 개성은 빛나지만, 그 빛이 주변을 태우지 않도록 조절이 필요합니다.',
      'Frankly, you often hit dissonance when connecting with others. Your way can be so fixed that teamwork gets hard, and leading with conclusions over empathy can push people away. No one lives alone. Your individuality can shine—but dial the brightness so it does not burn those around you.',
      'はっきり言うと、他者とのコミュニケーションで不協和音が出やすいです。自分のやり方が固すぎると協業が難しく、共感より結論を先に言う癖が距離を生みます。世の中は一人では生きられません。個性は輝かせつつ、周りを焼かない調整が必要です。',
      '坦白说，你在与人协作时容易产生摩擦。方式太固定会难合作，先下结论胜过共情也会拉远距离。人不能独自生活。个性可以耀眼，但要调节亮度，别灼伤身边的人。',
      '坦白說，你在與人協作時容易產生摩擦。方式太固定會難合作，先下結論勝過共情也會拉遠距離。人不能獨自生活。個性可以耀眼，但要調節亮度，別灼傷身邊的人。',
      'Thật lòng, bạn dễ lệch nhịp khi giao tiếp. Cách quá cứng khiến khó hợp tác; nói kết luận trước cảm thông làm xa cách. Không ai sống một mình. Cá tính có thể tỏa sáng—nhưng chỉnh độ sáng để không làm tổn thương xung quanh.',
      'Jujur, kamu sering tidak selaras saat berinteraksi. Cara terlalu kaku bikin kolaborasi sulit; menyimpulkan sebelum empati menjauhkan orang. Tak ada yang hidup sendiri. Individualitas boleh bersinar—atur intensitasnya agar tidak membakar sekitar.'
    ),
    strengthKeywords: L(
      '독보적 개성, 자기 확신, 창의성',
      'unique individuality, conviction, creativity',
      '唯一無二の個性、自己確信、創造性',
      '独特个性、自信、创造力',
      '獨特個性、自信、創造力',
      'cá tính độc nhất, tự tin, sáng tạo',
      'individualitas unik, keyakinan, kreativitas'
    ),
    weaknessKeywords: L(
      '사회성 부족, 공감 결여, 협업 어려움',
      'low social ease, empathy gaps, hard to collaborate',
      '社会性の弱さ、共感の欠如、協業の難しさ',
      '社交感弱、共情不足、协作难',
      '社交感弱、共情不足、協作難',
      'kém hòa nhập, thiếu đồng cảm, khó hợp tác',
      'kurang sosial, kurang empati, sulit kolaborasi'
    ),
    goodMatch: L(
      'Type 1 (조용히 받아주는 따뜻한 사람)',
      'Type 1 (Someone warm who quietly accepts you)',
      'Type 1（静かに受け止めてくれる温かい人）',
      'Type 1（温柔包容、安静接纳你的人）',
      'Type 1（溫柔包容、安靜接納你的人）',
      'Type 1 (Người ấm áp chấp nhận bạn êm đềm)',
      'Type 1 (Orang hangat yang menerima dengan tenang)'
    ),
    badMatch: L(
      'Type 5 (둘 다 강해서 서로 부딪힘)',
      'Type 5 (Two strong forces collide)',
      'Type 5（二人とも強くて衝突しやすい）',
      'Type 5（两个都强，容易硬碰硬）',
      'Type 5（兩個都強，容易硬碰硬）',
      'Type 5 (Hai bên đều mạnh—dễ va chạm)',
      'Type 5 (Keduanya kuat—mudah bentrok)'
    ),
  },
];

export function calculatePhase3PersonalityStrengthWeaknessResult(answers: number[]): string {
  const totalScore = answers.reduce((sum, score) => sum + score, 0);

  if (totalScore >= 0 && totalScore <= 5) return 'Type1';
  if (totalScore >= 6 && totalScore <= 11) return 'Type2';
  if (totalScore >= 12 && totalScore <= 19) return 'Type3';
  if (totalScore >= 20 && totalScore <= 27) return 'Type4';
  if (totalScore >= 28 && totalScore <= 33) return 'Type5';
  if (totalScore >= 34 && totalScore <= 36) return 'Type6';
  return 'Type3';
}
