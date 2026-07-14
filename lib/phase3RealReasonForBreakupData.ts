/**
 * 전 남친/여친 떠나간 진짜 이유 — phase3-real-reason-for-breakup
 * 12문항 4지선다 A=0 B=1 C=2 D=3 / 총점 0~36 → 6유형
 * 7개국 번역 완료 (ko, en, ja, zh-CN, zh-TW, vi, id)
 */

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

export interface Phase3RealReasonForBreakupQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    /** A=0, B=1, C=2, D=3 */
    score: number;
  }[];
}

export interface Phase3RealReasonForBreakupResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  empathyLevel: Record<string, string>;
  characteristics: Record<string, string>;
  goodMatch: Record<string, string>;
  badMatch: Record<string, string>;
  improvePoint: Record<string, string>;
  prescription: Record<string, string>;
  oneLiner: Record<string, string>;
  shareMessage: Record<string, string>;
}

export const phase3RealReasonForBreakupQuestions: Phase3RealReasonForBreakupQuestion[] = [
  {
    id: 1,
    question: L(
      '연애 중 상대방이 연락이 늦을 때 나는?',
      'When your partner replies late during dating, you…?',
      '恋爱中、相手の連絡が遅いとき、あなたは？',
      '恋爱中对方回消息晚时，你会？',
      '戀愛中對方回訊息晚時，你會？',
      'Khi người yêu trả lời chậm trong lúc yêu, bạn…?',
      'Saat pasangan membalas lambat saat pacaran, kamu…?'
    ),
    options: [
      {
        text: L(
          '바쁜가 보다 하고 기다린다. 연락 속도로 마음을 판단하지 않는다',
          'Assume they are busy and wait. You do not measure love by reply speed',
          '忙しいんだろうと待つ。連絡の速さで気持ちを判断しない',
          '觉得对方忙就等着。不拿回消息速度衡量心意',
          '覺得對方忙就等著。不拿回訊息速度衡量心意',
          'Nghĩ họ bận và chờ. Không đo tình cảm bằng tốc độ trả lời',
          'Anggap mereka sibuk dan menunggu. Tidak mengukur perasaan dari kecepatan balasan'
        ),
        score: 0,
      },
      {
        text: L(
          '살짝 신경 쓰이지만 먼저 가볍게 안부 연락을 한다',
          'It bothers you a bit, so you send a light check-in first',
          '少し気になるので、先に軽く安否の連絡をする',
          '有点在意，会先轻轻问一句近况',
          '有點在意，會先輕輕問一句近況',
          'Hơi bận tâm nên nhắn hỏi thăm nhẹ trước',
          'Sedikit mengganggu, jadi mengirim kabar ringan dulu'
        ),
        score: 1,
      },
      {
        text: L(
          '불안해지기 시작한다. 읽씹이면 왜 읽고 답 안 하는지 이유를 생각한다',
          'Anxiety starts. If they left you on read, you spin reasons why',
          '不安になり始める。既読無視なら、なぜ読んだのに返事しないか考える',
          '开始不安。如果已读不回，会想对方为何读了不回',
          '開始不安。如果已讀不回，會想對方為何讀了不回',
          'Bắt đầu lo. Nếu đã xem không trả lời, nghĩ vì sao',
          'Mulai cemas. Jika dibaca tanpa dibalas, memikirkan alasannya'
        ),
        score: 2,
      },
      {
        text: L(
          '연락이 늦으면 서운함이 쌓인다. 나중에 한꺼번에 표현하거나 삐치는 편이다',
          'Late replies pile up as hurt. You vent later all at once or sulk',
          '連絡が遅いと寂しさが溜まる。後でまとめて言うか、すねるタイプ',
          '回晚了委屈会累积。之后会一次性发泄或赌气',
          '回晚了委屈會累積。之後會一次性發洩或賭氣',
          'Trả lời chậm khiến ấm ức chất chồng. Hay nói hết một lúc hoặc dỗi',
          'Balasan lambat menumpuk sakit hati. Nanti meluapkan sekaligus atau merajuk'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 2,
    question: L(
      '연인이 나 말고 다른 이성 친구와 만날 때 나는?',
      'When your partner meets opposite-sex friends without you, you…?',
      '恋人が自分以外の異性の友達と会うとき、あなたは？',
      '恋人和其他异性朋友见面时，你会？',
      '戀人和其他異性朋友見面時，你會？',
      'Khi người yêu gặp bạn khác giới không có bạn, bạn…?',
      'Saat pasangan bertemu teman lawan jenis tanpa kamu, kamu…?'
    ),
    options: [
      {
        text: L(
          '기본적으로 신뢰한다. 보고하지 않아도 괜찮다',
          'You basically trust them. No need to report every detail',
          '基本的に信頼する。報告がなくても大丈夫',
          '基本信任对方。不汇报也没关系',
          '基本信任對方。不回報也沒關係',
          'Tin tưởng về cơ bản. Không cần báo cáo cũng được',
          'Pada dasarnya percaya. Tidak perlu melapor juga tidak apa-apa'
        ),
        score: 0,
      },
      {
        text: L(
          '가볍게 누구랑 어디서 만나는지는 궁금하다. 물어보면 됐다',
          'Curious who and where, lightly. Asking once is enough',
          '軽く誰とどこで会うのかは気になる。聞けばそれでいい',
          '会轻轻好奇和谁、在哪见。问一句就够',
          '會輕輕好奇和誰、在哪見。問一句就夠',
          'Hơi tò mò gặp ai ở đâu. Hỏi một lần là đủ',
          'Sedikit penasaran dengan siapa dan di mana. Cukup ditanya sekali'
        ),
        score: 1,
      },
      {
        text: L(
          '신경 쓰인다. 솔직히 그 자리가 좀 불편하게 느껴진다',
          'It bothers you. Honestly that meetup feels a bit uncomfortable',
          '気になる。正直その席が少し居心地悪い',
          '会在意。说实话那个场合让你有点不舒服',
          '會在意。說實話那個場合讓你有點不舒服',
          'Để tâm. Thành thật thì cuộc gặp ấy hơi khó chịu',
          'Mengganggu. Jujur, pertemuan itu terasa kurang nyaman'
        ),
        score: 2,
      },
      {
        text: L(
          '질투가 나고 내색을 하게 된다. 또는 혼자 많이 상상하게 된다',
          'Jealousy shows, or you spiral into lots of imagining alone',
          '嫉妬が出て態度に出る。または一人で想像が膨らむ',
          '会吃醋并表现出来，或一个人脑补很多',
          '會吃醋並表現出來，或一個人腦補很多',
          'Ghen và lộ ra, hoặc tự tưởng tượng nhiều một mình',
          'Cemburu terlihat, atau sendiri banyak berimajinasi'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 3,
    question: L(
      '연인과 크게 다퉜을 때 나는?',
      'After a big fight with your partner, you…?',
      '恋人と大きく喧嘩したとき、あなたは？',
      '和恋人大吵一架后，你会？',
      '和戀人大吵一架後，你會？',
      'Khi cãi nhau lớn với người yêu, bạn…?',
      'Setelah bertengkar hebat dengan pasangan, kamu…?'
    ),
    options: [
      {
        text: L(
          '감정이 가라앉으면 먼저 화해를 시도한다. 누가 먼저인지보다 해결이 중요하다',
          'Once calm, you try to make up first. Solving matters more than who starts',
          '気持ちが落ち着いたら先に仲直りを試みる。どちらが先かより解決が大切',
          '情绪冷静后会先求和。解决比谁先开口更重要',
          '情緒冷靜後會先求和。解決比誰先開口更重要',
          'Khi bình tĩnh sẽ chủ động hòa giải. Giải quyết quan trọng hơn ai nói trước',
          'Setelah tenang, mencoba berdamai dulu. Menyelesaikan lebih penting daripada siapa duluan'
        ),
        score: 0,
      },
      {
        text: L(
          '시간이 좀 필요하지만 결국 대화로 풀려고 한다',
          'Need some time, but eventually try to talk it through',
          '少し時間が必要だが、最終的には会話で解決しようとする',
          '需要一点时间，但最终会想用对话解决',
          '需要一點時間，但最終會想用對話解決',
          'Cần chút thời gian nhưng cuối cùng cố nói chuyện để giải quyết',
          'Butuh waktu sebentar, tapi akhirnya mencoba diselesaikan dengan bicara'
        ),
        score: 1,
      },
      {
        text: L(
          '상대가 먼저 사과하길 기다리는 편이다. 내가 잘못한 게 없으면 먼저 연락하기 어렵다',
          'You tend to wait for their apology. Hard to reach out if you feel you were not wrong',
          '相手が先に謝るのを待つ傾向。自分が悪くないと先に連絡しにくい',
          '倾向于等对方先道歉。觉得自己没错就很难先联系',
          '傾向於等對方先道歉。覺得自己沒錯就很難先聯絡',
          'Hay chờ họ xin lỗi trước. Khó nhắn trước nếu thấy mình không sai',
          'Cenderung menunggu mereka minta maaf dulu. Sulit menghubungi dulu jika merasa tidak salah'
        ),
        score: 2,
      },
      {
        text: L(
          '감정을 오래 가져간다. 화해한 것 같아도 그 감정이 오래 남아있다',
          'You hold feelings long. Even after making up, the emotion lingers',
          '感情を長く引きずる。仲直りしたように見えても長く残る',
          '情绪会拖很久。看似和好了也还会积在心里',
          '情緒會拖很久。看似和好了也還會積在心裡',
          'Giữ cảm xúc lâu. Dù hòa giải rồi cảm xúc vẫn còn',
          'Menyimpan emosi lama. Walau sudah damai, perasaan itu masih lama'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 4,
    question: L(
      '연인이 내 기대만큼 감정 표현을 안 할 때 나는?',
      'When your partner does not show affection as much as you hoped, you…?',
      '恋人が期待ほど感情表現をしないとき、あなたは？',
      '当恋人情感表达达不到你的期待时，你会？',
      '當戀人情感表達達不到你的期待時，你會？',
      'Khi người yêu không thể hiện cảm xúc như bạn kỳ vọng, bạn…?',
      'Saat pasangan kurang mengekspresikan perasaan sesuai harapmu, kamu…?'
    ),
    options: [
      {
        text: L(
          '사람마다 표현 방식이 다르다고 이해한다. 행동으로 보이면 됐다',
          'Everyone expresses differently. Actions are enough',
          '人によって表現の仕方が違うと理解する。行動で伝わればいい',
          '理解每个人表达方式不同。有行动就够了',
          '理解每個人表達方式不同。有行動就夠了',
          'Hiểu ai cũng thể hiện khác nhau. Có hành động là đủ',
          'Pahami tiap orang beda ekspresi. Cukup terlihat dari tindakan'
        ),
        score: 0,
      },
      {
        text: L(
          '서운하지만 내가 원하는 표현 방식을 말로 요청한다',
          'Feel hurt, but ask in words for the expression you need',
          '寂しいが、欲しい表現の仕方を言葉で伝える',
          '会委屈，但会用语言请求你想要的表达方式',
          '會委屈，但會用語言請求你想要的表達方式',
          'Buồn nhưng nói rõ cách thể hiện mình muốn',
          'Kecewa, tapi meminta secara verbal ekspresi yang diinginkan'
        ),
        score: 1,
      },
      {
        text: L(
          '말을 안 해도 알아줬으면 하는 마음이 있다. 설명해야 하는 게 서운하다',
          'You wish they would just know without words. Having to explain feels hurtful',
          '言わなくても分かってほしい。説明しないといけないのが寂しい',
          '希望不用说他们也能懂。要解释才懂会让你委屈',
          '希望不用說他們也能懂。要解釋才懂會讓你委屈',
          'Muốn họ hiểu dù không nói. Phải giải thích làm mình buồn',
          'Ingin mereka mengerti tanpa dijelaskan. Harus dijelaskan terasa menyakitkan'
        ),
        score: 2,
      },
      {
        text: L(
          '사랑받지 못하는 것 같아서 불안해지고 확인받고 싶어진다',
          'You feel unloved, get anxious, and crave reassurance',
          '愛されていない気がして不安になり、確かめずにはいられない',
          '觉得不被爱而焦虑，很想被确认',
          '覺得不被愛而焦慮，很想被確認',
          'Cảm thấy không được yêu, lo lắng và muốn được khẳng định',
          'Merasa tidak dicintai, cemas, dan ingin dipastikan'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 5,
    question: L(
      '연인이 나보다 친구나 취미에 시간을 더 쓸 때 나는?',
      'When your partner spends more time on friends or hobbies than you, you…?',
      '恋人が自分より友達や趣味に時間を使うとき、あなたは？',
      '当恋人花在朋友或爱好上的时间比你多时，你会？',
      '當戀人花在朋友或愛好上的時間比你多時，你會？',
      'Khi người yêu dành thời gian cho bạn bè/sở thích nhiều hơn bạn, bạn…?',
      'Saat pasangan lebih banyak waktu untuk teman/hobi daripada kamu, kamu…?'
    ),
    options: [
      {
        text: L(
          '각자의 생활이 있는 게 건강한 연애라고 생각한다',
          'Having separate lives is healthy dating to you',
          'それぞれの生活があるのが健全な恋愛だと思う',
          '觉得各自有生活才是健康恋爱',
          '覺得各自有生活才是健康戀愛',
          'Nghĩ mỗi người có đời sống riêng mới là yêu lành mạnh',
          'Pikir punya kehidupan masing-masing adalah pacaran yang sehat'
        ),
        score: 0,
      },
      {
        text: L(
          '가끔 서운하지만 내 시간도 즐기려고 한다',
          'Sometimes hurt, but you try to enjoy your own time too',
          'たまに寂しいが、自分の時間も楽しもうとする',
          '偶尔会委屈，但也会试着享受自己的时间',
          '偶爾會委屈，但也會試著享受自己的時間',
          'Thỉnh thoảng buồn nhưng cố tận hưởng thời gian riêng',
          'Kadang kecewa, tapi mencoba menikmati waktu sendiri juga'
        ),
        score: 1,
      },
      {
        text: L(
          '연인이 나를 덜 좋아하는 것 같아서 신경이 쓰인다',
          'It bothers you—feels like they like you less',
          '恋人が自分をあまり好きじゃない気がして気になる',
          '会在意，感觉对方不够喜欢自己',
          '會在意，感覺對方不夠喜歡自己',
          'Bận tâm vì cảm giác họ thích mình kém đi',
          'Mengganggu karena merasa mereka kurang menyukaimu'
        ),
        score: 2,
      },
      {
        text: L(
          '섭섭함이 크다. 함께하는 시간이 충분하지 않으면 불만이 쌓인다',
          'Big disappointment. Not enough time together builds resentment',
          '寂しさが大きい。一緒の時間が足りないと不満が溜まる',
          '很失落。相处时间不够就会积怨',
          '很失落。相處時間不夠就會積怨',
          'Rất thất vọng. Ít thời gian bên nhau khiến bất mãn tích tụ',
          'Sangat kecewa. Waktu bersama kurang membuat keluhan menumpuk'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 6,
    question: L(
      '연인과의 미래에 대해 나는?',
      'About the future with your partner, you…?',
      '恋人との未来について、あなたは？',
      '对于和恋人的未来，你会？',
      '對於和戀人的未來，你會？',
      'Về tương lai với người yêu, bạn…?',
      'Tentang masa depan dengan pasangan, kamu…?'
    ),
    options: [
      {
        text: L(
          '지금 이 관계를 잘 유지하는 것이 먼저다. 미래는 자연스럽게 맞춰가면 된다',
          'Keeping the relationship healthy now comes first. The future can align naturally',
          '今の関係を大切にするのが先。未来は自然に合わせていけばいい',
          '先把当下关系经营好。未来可以自然对齐',
          '先把當下關係經營好。未來可以自然對齊',
          'Giữ mối quan hệ hiện tại tốt đã. Tương lai sẽ khớp dần',
          'Jaga hubungan sekarang dulu. Masa depan bisa selaras secara alami'
        ),
        score: 0,
      },
      {
        text: L(
          '방향성은 맞춰가되 너무 서두르지 않으려 한다',
          'Align the direction, but try not to rush',
          '方向性は合わせつつも、急がないようにする',
          '会对齐方向，但尽量不着急',
          '會對齊方向，但盡量不著急',
          'Khớp định hướng nhưng không muốn vội',
          'Selaraskan arah, tapi berusaha tidak terburu-buru'
        ),
        score: 1,
      },
      {
        text: L(
          '이 사람과의 미래가 자주 머릿속에 그려진다. 확신을 원한다',
          'You often picture a future with them. You want certainty',
          'この人との未来がよく頭に浮かぶ。確信が欲しい',
          '常在脑海勾画和对方的未来。想要确定感',
          '常在腦海勾畫和對方的未來。想要確定感',
          'Thường hình dung tương lai với họ. Muốn sự chắc chắn',
          'Sering membayangkan masa depan bersama. Ingin kepastian'
        ),
        score: 2,
      },
      {
        text: L(
          '미래 계획을 구체적으로 이야기하지 않으면 불안하다. 답을 원하게 된다',
          'Without concrete future talk you feel anxious and want answers',
          '将来の話を具体的にしないと不安。答えが欲しくなる',
          '不具体谈未来计划就会焦虑，很想要答案',
          '不具體談未來計畫就會焦慮，很想要答案',
          'Không nói rõ kế hoạch tương lai thì lo, muốn có câu trả lời',
          'Tanpa rencana masa depan konkret jadi cemas dan menginginkan jawaban'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 7,
    question: L(
      '연인이 나에게 서운한 점을 이야기할 때 나는?',
      'When your partner tells you something that hurt them, you…?',
      '恋人が自分への寂しさ・不満を話してきたとき、あなたは？',
      '当恋人说起对你的不满时，你会？',
      '當戀人說起對你的不滿時，你會？',
      'Khi người yêu nói điều làm họ tổn thương về bạn, bạn…?',
      'Saat pasangan menyampaikan kekecewaan padamu, kamu…?'
    ),
    options: [
      {
        text: L(
          '경청하고 개선하려고 노력한다. 피드백을 받아들이는 편이다',
          'Listen and try to improve. You tend to take feedback well',
          '耳を傾けて改善しようとする。フィードバックを受け入れる方',
          '会倾听并努力改进。比较能接受反馈',
          '會傾聽並努力改進。比較能接受回饋',
          'Lắng nghe và cố cải thiện. Hay tiếp nhận phản hồi',
          'Mendengarkan dan berusaha memperbaiki. Cenderung menerima feedback'
        ),
        score: 0,
      },
      {
        text: L(
          '처음엔 방어적이지만 결국 상대의 입장을 이해하려 한다',
          'Defensive at first, but eventually try to understand their side',
          '最初は防御的だが、最終的には相手の立場を理解しようとする',
          '一开始会防御，但最终会试着理解对方的立场',
          '一開始會防衛，但最終會試著理解對方的立場',
          'Ban đầu phòng thủ nhưng rồi cố hiểu phía họ',
          'Awalnya defensif, tapi akhirnya mencoba memahami sisi mereka'
        ),
        score: 1,
      },
      {
        text: L(
          '솔직히 억울한 마음이 먼저 든다. 나도 서운한 게 있다는 생각이 올라온다',
          'Honestly, unfairness hits first. Your own grievances rise up too',
          '正直まず悔しい。自分にも寂しいことがあると思い出す',
          '老实说委屈感先上来。也会想起自己也有不满',
          '老實說委屈感先上來。也會想起自己也有不滿',
          'Thành thật thì thấy oan trước. Lên luôn cả nỗi buồn của mình',
          'Jujur, merasa diperlakukan tidak adil dulu. Kekecewaanmu sendiri ikut naik'
        ),
        score: 2,
      },
      {
        text: L(
          '비판을 받으면 많이 위축되거나 반대로 크게 감정적으로 반응하는 편이다',
          'Criticism shrinks you a lot—or you react very emotionally',
          '批判されるととても萎縮するか、逆に大きく感情的に反応する',
          '被批评会很受挫，或反而情绪反应很大',
          '被批評會很受挫，或反而情緒反應很大',
          'Bị phê bình hay co rúm hoặc phản ứng cảm xúc rất mạnh',
          'Kritik membuatmu sangat tertutup, atau sebaliknya bereaksi sangat emosional'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 8,
    question: L(
      '연애 중 나 자신에 대해 솔직하게 돌아보면?',
      'Honestly looking at yourself while dating…?',
      '恋爱中の自分を正直に振り返ると？',
      '诚实回顾恋爱中的自己？',
      '誠實回顧戀愛中的自己？',
      'Nhìn lại bản thân khi đang yêu một cách thật lòng…?',
      'Jika jujur meninjau dirimu saat pacaran…?'
    ),
    options: [
      {
        text: L(
          '독립적이고 상대에게 과하게 의존하지 않는 편이다',
          'Independent; you do not over-rely on your partner',
          '自立していて、相手に過度に依存しない方だ',
          '比较独立，不会过度依赖对方',
          '比較獨立，不會過度依賴對方',
          'Độc lập, không phụ thuộc quá mức vào người yêu',
          'Mandiri dan tidak bergantung berlebihan pada pasangan'
        ),
        score: 0,
      },
      {
        text: L(
          '때로 의존적이지만 스스로 인식하고 조절하려 한다',
          'Sometimes dependent, but you notice it and try to regulate',
          '時々依存的だが、自覚して調整しようとする',
          '有时会依赖，但能觉察并试着调节',
          '有時會依賴，但能覺察並試著調節',
          'Đôi khi phụ thuộc nhưng tự nhận biết và cố điều chỉnh',
          'Kadang bergantung, tapi menyadari dan mencoba mengatur'
        ),
        score: 1,
      },
      {
        text: L(
          '연인이 내 감정의 중심이 되는 경향이 있다. 상대 기분에 많이 영향을 받는다',
          'Your partner tends to be the center of your emotions; their mood affects you a lot',
          '恋人が感情の中心になりやすい。相手の気分に大きく左右される',
          '恋人容易成为情绪中心，很受对方心情影响',
          '戀人容易成為情緒中心，很受對方心情影響',
          'Người yêu dễ thành trung tâm cảm xúc; tâm trạng họ ảnh hưởng nhiều',
          'Pasangan cenderung jadi pusat emosimu; mood mereka sangat mempengaruhimu'
        ),
        score: 2,
      },
      {
        text: L(
          '연인 없이 혼자 있는 시간이 불편하거나 공허하게 느껴질 때가 있다',
          'Time alone without them can feel uncomfortable or empty',
          '恋人なしの一人時間が居心地悪かったり空虚に感じることがある',
          '没有恋人独处时有时会不自在或空虚',
          '沒有戀人獨處時有時會不自在或空虛',
          'Ở một mình không có người yêu đôi khi khó chịu hoặc trống rỗng',
          'Waktu sendirian tanpa pasangan kadang terasa tak nyaman atau hampa'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 9,
    question: L(
      '전 연인과 헤어진 직후 나는?',
      'Right after breaking up with an ex, you…?',
      '元恋人との別れ直後、あなたは？',
      '和前任分手后不久，你会？',
      '和前任分手後不久，你會？',
      'Ngay sau khi chia tay người yêu cũ, bạn…?',
      'Segera setelah putus dengan mantan, kamu…?'
    ),
    options: [
      {
        text: L(
          '슬프지만 시간이 지나면 괜찮아진다. 혼자서도 잘 회복하는 편이다',
          'Sad, but time helps. You tend to recover well on your own',
          '悲しいが時間が経てば大丈夫。一人でもよく回復する方',
          '会难过，但时间会好起来。自己也能恢复得不错',
          '會難過，但時間會好起來。自己也能恢復得不錯',
          'Buồn nhưng thời gian sẽ ổn. Hay tự phục hồi khá tốt',
          'Sedih, tapi waktu membuat lebih baik. Cenderung pulih sendiri dengan baik'
        ),
        score: 0,
      },
      {
        text: L(
          '힘들지만 주변 사람들의 도움으로 회복해나갔다',
          'Hard, but you recover with help from people around you',
          '辛いが、周りの人の助けで回復していく',
          '很难，但靠身边人的帮助慢慢恢复',
          '很難，但靠身邊人的幫助慢慢恢復',
          'Khó khăn nhưng nhờ người xung quanh mà dần bình phục',
          'Sulit, tapi pulih dengan bantuan orang di sekitar'
        ),
        score: 1,
      },
      {
        text: L(
          '오랫동안 상대 생각이 났다. 미련이 남거나 후회가 많았다',
          'Thought of them for a long time. Lingering attachment or lots of regret',
          '長く相手のことが頭から離れない。未練や後悔が多かった',
          '很久都会想对方。有很多留恋或后悔',
          '很久都會想對方。有很多留戀或後悔',
          'Lâu dài vẫn nghĩ về họ. Còn lưu luyến hoặc nhiều hối tiếc',
          'Lama memikirkan mereka. Banyak merasa masih terikat atau menyesal'
        ),
        score: 2,
      },
      {
        text: L(
          '일상이 많이 무너졌다. 이별 후 회복에 꽤 오랜 시간이 걸렸다',
          'Daily life collapsed a lot. Recovery after breakup took quite long',
          '日常が大きく崩れた。別れ後の回復にかなり時間がかかった',
          '日常崩得很厉害。分手后恢复花了很久',
          '日常崩得很厲害。分手後恢復花了很久',
          'Cuộc sống hằng ngày sụp nhiều. Phục hồi sau chia tay khá lâu',
          'Rutinitas sangat ambruk. Pemulihan setelah putus memakan waktu lama'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 10,
    question: L(
      '연인이 나에 대해 자주 했던 말 또는 이별 시 이유로 든 것은?',
      'What did your partner often say about you—or give as a breakup reason?',
      '恋人が自分についてよく言っていたこと、または別れの理由は？',
      '恋人常对你说的话，或分手时给出的理由是？',
      '戀人常對你說的話，或分手時給出的理由是？',
      'Người yêu từng nói gì về bạn hoặc lý do khi chia tay là gì?',
      'Apa yang sering pasangan katakan tentangmu, atau alasan saat putus?'
    ),
    options: [
      {
        text: L(
          '딱히 큰 문제 없이 자연스럽게 멀어진 경우가 많았다',
          'Often drifted apart naturally without a big issue',
          '大きな問題もなく、自然に離れていったことが多い',
          '常常没有大问题就自然疏远了',
          '常常沒有大問題就自然疏遠了',
          'Thường xa dần tự nhiên, không có vấn đề lớn',
          'Sering menjauh secara alami tanpa masalah besar'
        ),
        score: 0,
      },
      {
        text: L(
          '감정 표현이 부족하다거나 표현 방식의 차이가 있었다',
          'Lack of emotional expression or different expression styles',
          '感情表現が足りない、表現の仕方の違いがあった',
          '情感表达不足，或表达方式有差异',
          '情感表達不足，或表達方式有差異',
          'Thiếu thể hiện cảm xúc hoặc khác cách bày tỏ',
          'Kurang ekspresi perasaan atau beda gaya ekspresi'
        ),
        score: 1,
      },
      {
        text: L(
          '너무 많이 의지하거나 불안해한다는 말을 들은 적 있다',
          'Heard you rely too much or worry too much',
          '頼りすぎ・不安がりすぎと言われたことがある',
          '听过太依赖或太不安之类的话',
          '聽過太依賴或太不安之類的話',
          'Từng nghe rằng dựa dẫm quá hoặc lo lắng quá',
          'Pernah dibilang terlalu bergantung atau terlalu cemas'
        ),
        score: 2,
      },
      {
        text: L(
          '집착하거나 감정 기복이 심하다는 말을 들은 적 있다',
          'Heard you are clingy or have intense mood swings',
          '執着が強い、感情の起伏が大きいと言われたことがある',
          '听过太粘人或情绪起伏大之类的话',
          '聽過太黏人或情緒起伏大之類的話',
          'Từng nghe rằng ám ảnh hoặc cảm xúc thất thường mạnh',
          'Pernah dibilang obsesif atau mood-nya naik turun keras'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 11,
    question: L(
      '연인과 있을 때 가장 자주 드는 감정은?',
      'The emotion you feel most often with your partner is…?',
      '恋人といるとき、いちばんよく感じる感情は？',
      '和恋人在一起时最常有的情绪是？',
      '和戀人在一起時最常有的情緒是？',
      'Cảm xúc bạn thường có nhất khi ở bên người yêu là…?',
      'Emosi yang paling sering kamu rasakan saat bersama pasangan…?'
    ),
    options: [
      {
        text: L(
          '편안함. 함께 있어도 편하고 혼자 있어도 불안하지 않다',
          'Comfort. Ease together, and no anxiety when alone',
          '安心感。一緒でも楽で、一人でも不安にならない',
          '舒适。在一起轻松，独处也不焦虑',
          '舒適。在一起輕鬆，獨處也不焦慮',
          'Thoải mái. Bên nhau dễ chịu, một mình cũng không lo',
          'Nyaman. Tenang bersama, dan tidak cemas saat sendirian'
        ),
        score: 0,
      },
      {
        text: L(
          '설렘과 안정감이 공존한다. 대체로 긍정적인 감정이 많다',
          'Excitement and safety coexist. Mostly positive feelings',
          'ときめきと安心が共存。だいたいポジティブな感情が多い',
          '心动与安定并存。大多是正面情绪',
          '心動與安定並存。大多是正面情緒',
          'Vừa hồi hộp vừa ổn định. Phần lớn cảm xúc tích cực',
          'Kegembiraan dan rasa aman berdampingan. Kebanyakan perasaan positif'
        ),
        score: 1,
      },
      {
        text: L(
          '불안감이 간헐적으로 온다. 이 사람이 나를 충분히 좋아하는지 확신이 필요하다',
          'Anxiety comes in waves. You need certainty they like you enough',
          '不安がときどき来る。十分に好きでいてくれるか確信が必要',
          '焦虑间歇出现。需要确认对方足够喜欢你',
          '焦慮間歇出現。需要確認對方足夠喜歡你',
          'Lo lắng đến từng đợt. Cần chắc họ đủ thích mình',
          'Kecemasan datang sesekali. Butuh kepastian mereka cukup menyukaimu'
        ),
        score: 2,
      },
      {
        text: L(
          '강렬한 감정이 많다. 행복할 때 정말 행복하고 힘들 때 정말 힘들다',
          'Intense feelings. So happy when high, so hard when low',
          '強い感情が多い。幸せなときは本当に幸せ、辛いときは本当に辛い',
          '情绪很强烈。开心时极开心，难受时极难受',
          '情緒很強烈。開心時極開心，難受時極難受',
          'Cảm xúc mãnh liệt. Vui thì rất vui, khó thì rất khó',
          'Emosi sangat kuat. Bahagia saat tinggi, sangat sulit saat rendah'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 12,
    question: L(
      '지금 내 연애 패턴을 가장 냉정하게 표현한다면?',
      'If you describe your dating pattern most coldly right now…?',
      '今の自分の恋愛パターンをいちばん冷静に言うなら？',
      '如果最冷静地描述你现在的恋爱模式？',
      '如果最冷靜地描述你現在的戀愛模式？',
      'Nếu mô tả kiểu yêu của bạn một cách lạnh lùng nhất lúc này…?',
      'Jika menggambarkan pola pacaranmu paling dingin saat ini…?'
    ),
    options: [
      {
        text: L(
          '전반적으로 건강한 방식으로 연애해왔다고 생각한다',
          'Overall you think you have dated in a healthy way',
          '全体として健全な仕方で恋愛してきたと思う',
          '整体觉得自己恋爱方式比较健康',
          '整體覺得自己戀愛方式比較健康',
          'Nhìn chung nghĩ mình yêu theo cách khá lành mạnh',
          'Secara keseluruhan merasa sudah pacaran dengan cara yang sehat'
        ),
        score: 0,
      },
      {
        text: L(
          '아쉬운 점이 있지만 노력해왔고 성장하고 있다',
          'Some regrets, but you have tried and are growing',
          '悔しい点はあるが努力してきたし、成長している',
          '有遗憾但一直在努力、在成长',
          '有遺憾但一直在努力、在成長',
          'Có tiếc nuối nhưng đã cố gắng và đang trưởng thành',
          'Ada yang disesali, tapi sudah berusaha dan sedang tumbuh'
        ),
        score: 1,
      },
      {
        text: L(
          '불안 애착이 있는 것 같다. 확인받고 싶은 마음이 연애를 어렵게 만든다',
          'Seems like anxious attachment. Needing reassurance makes dating hard',
          '不安型愛着がありそう。確認してほしい気持ちが恋愛を難しくする',
          '好像有焦虑依恋。想被确认的心让恋爱变难',
          '好像有焦慮依戀。想被確認的心讓戀愛變難',
          'Có vẻ gắn bó lo âu. Muốn được khẳng định khiến yêu khó hơn',
          'Sepertinya ada kelekatan cemas. Ingin kepastian membuat pacaran sulit'
        ),
        score: 2,
      },
      {
        text: L(
          '감정의 진폭이 크다. 사랑할 때 너무 깊이 빠지고 이별하면 너무 힘들다',
          'Emotional range is huge. Love deep dive, breakup devastation',
          '感情の振れ幅が大きい。愛するとき深く落ち、別れるととても辛い',
          '情绪波幅很大。爱得深沉，分手特别难受',
          '情緒波幅很大。愛得深沉，分手特別難受',
          'Biên độ cảm xúc lớn. Yêu rất sâu, chia tay rất nặng',
          'Amplitudo emosi besar. Saat cinta tenggelam dalam, saat putus sangat berat'
        ),
        score: 3,
      },
    ],
  },
];

export const phase3RealReasonForBreakupResults: Phase3RealReasonForBreakupResult[] = [
  {
    type: 'Type1',
    emoji: '💚',
    title: L(
      '패턴이 건강한 편인, 연애 우등생',
      'Healthy-pattern type: Relationship honor student',
      'パターンが健全なほう、恋愛優等生',
      '模式偏健康的恋爱优等生',
      '模式偏健康的戀愛優等生',
      'Kiểu pattern lành mạnh: học sinh giỏi trong yêu',
      'Tipe pola sehat: siswa berprestasi dalam pacaran'
    ),
    shortDescription: L(
      '이별의 진짜 이유: 외부 환경이나 맞지 않는 가치관 차이\n"당신의 연애 방식 자체에는 큰 문제가 없습니다. 이별은 당신 탓이 아닐 가능성이 높습니다."',
      'Real breakup reason: External factors or mismatched values\n"Your dating style itself has no major problem. The breakup may not be your fault."',
      '別れの本当の理由：外部要因や価値観の不一致\n「あなたの恋愛スタイル自体に大きな問題はありません。別れはあなたのせいではない可能性が高いです。」',
      '分手真正原因：外部环境或不匹配的价值观\n「你的恋爱方式本身没有大问题。分手很可能不是你的错。」',
      '分手真正原因：外部環境或不匹配的價值觀\n「你的戀愛方式本身沒有大問題。分手很可能不是你的錯。」',
      'Lý do chia tay thật: Yếu tố bên ngoài hoặc khác giá trị\n"Cách yêu của bạn không có vấn đề lớn. Chia tay có thể không phải lỗi của bạn."',
      'Alasan putus sebenarnya: Faktor eksternal atau nilai yang tak cocok\n"Gaya pacaranmu sendiri tidak bermasalah besar. Putusnya bisa jadi bukan salahmu."'
    ),
    description: L(
      '독립적이고 상대를 신뢰하며 갈등이 생겨도 대화로 풀려고 하는 건강한 연애 패턴을 갖고 있습니다. 이별의 원인은 내 방식보다 서로의 방향성 차이, 가치관 불일치, 타이밍, 또는 상대방의 문제였을 가능성이 높습니다. 자책할 필요가 없는 유형입니다.',
      'You date with healthy patterns: independence, trust, and solving conflict through talk. The breakup likely came from direction gaps, value mismatch, timing, or their issues—not your style. No need for harsh self-blame.',
      '自立・信頼があり、衝突があっても対話で解こうとする健全な恋愛パターンです。別れの原因は、あなたのやり方より方向性の違い・価値観・タイミング、または相手側の問題だった可能性が高いです。過度に自責しなくていいタイプです。',
      '你拥有独立、信任、遇冲突也愿用对话解决的健康恋爱模式。分手原因更可能是方向差异、价值观不合、时机，或对方的问题，而非你的方式。不必过度自责。',
      '你擁有獨立、信任、遇衝突也願用對話解決的健康戀愛模式。分手原因更可能是方向差異、價值觀不合、時機，或對方的問題，而非你的方式。不必過度自責。',
      'Bạn có kiểu yêu lành mạnh: độc lập, tin tưởng, giải quyết xung đột bằng trò chuyện. Lý do chia tay thường là khác hướng, khác giá trị, timing, hoặc vấn đề phía họ—không phải kiểu yêu của bạn. Không cần tự trách nặng.',
      'Kamu punya pola pacaran sehat: mandiri, percaya, dan menyelesaikan konflik lewat dialog. Penyebab putus lebih mungkin beda arah, nilai, timing, atau masalah di sisi mereka—bukan gayamu. Tidak perlu menyalahkan diri berlebihan.'
    ),
    empathyLevel: L(
      '방향성·타이밍·가치관 불일치 💚',
      'Direction · timing · values mismatch 💚',
      '方向性・タイミング・価値観の不一致 💚',
      '方向·时机·价值观不合 💚',
      '方向·時機·價值觀不合 💚',
      'Khác hướng · timing · giá trị 💚',
      'Arah · timing · nilai tidak cocok 💚'
    ),
    characteristics: L(
      '자연스러운 멀어짐, 미래 방향 차이, 상대방의 내적 이유',
      'Natural drifting apart, future direction gap, their inner reasons',
      '自然な距離、未来の方向差、相手の内面的な理由',
      '自然疏远, 未来方向差异, 对方内在原因',
      '自然疏遠, 未來方向差異, 對方內在原因',
      'Xa dần tự nhiên, khác hướng tương lai, lý do nội tâm của họ',
      'Menjauh alami, beda arah masa depan, alasan batin mereka'
    ),
    goodMatch: L(
      '독립성, 신뢰, 갈등 해결 능력, 감정 조절력',
      'Independence, trust, conflict skills, emotion regulation',
      '自立, 信頼, 衝突解決力, 感情コントロール',
      '独立性, 信任, 冲突解决力, 情绪调节',
      '獨立性, 信任, 衝突解決力, 情緒調節',
      'Độc lập, tin tưởng, giải quyết xung đột, điều tiết cảm xúc',
      'Kemandirian, kepercayaan, skill konflik, regulasi emosi'
    ),
    badMatch: L(
      '불안 애착이 강한 사람. 당신의 독립성이 상대에게 무관심으로 읽힐 수 있음',
      'Strongly anxious-attached partners. Your independence can read as indifference',
      '不安型愛着が強い人。あなたの自立が無関心に見えることがある',
      '焦虑依恋很强的人。你的独立可能被读成冷漠',
      '焦慮依戀很強的人。你的獨立可能被讀成冷漠',
      'Người gắn bó lo âu mạnh. Sự độc lập của bạn có thể bị hiểu là thờ ơ',
      'Orang dengan kelekatan cemas kuat. Kemandirianmu bisa terbaca sebagai acuh'
    ),
    improvePoint: L(
      '너무 감정을 절제하다 상대가 온도차를 느낄 수 있음. 표현도 중요',
      'Over-restraining feelings can make them feel a temperature gap. Expression matters too',
      '感情を抑えすぎると相手が温度差を感じることがある。表現も大切',
      '过度压抑情绪可能让对方感到温度差。表达也很重要',
      '過度壓抑情緒可能讓對方感到溫度差。表達也很重要',
      'Kiềm cảm xúc quá có thể khiến họ thấy lệch nhiệt. Biểu đạt cũng quan trọng',
      'Terlalu menahan emosi bisa membuat mereka merasakan jarak suhu. Ekspresi juga penting'
    ),
    prescription: L(
      '지금의 건강한 패턴은 유지하되 감정 표현을 조금 더 적극적으로 해보세요. 상대가 나의 마음을 충분히 느낄 수 있도록',
      'Keep your healthy patterns, but show affection a bit more actively so they can fully feel your heart',
      '今の健全なパターンは保ちつつ、感情表現をもう少し積極的に。相手があなたの気持ちを十分感じられるように',
      '保持健康模式的同时，把情感表达再积极一点，让对方充分感受到你的心',
      '保持健康模式的同時，把情感表達再積極一點，讓對方充分感受到你的心',
      'Giữ pattern lành mạnh, nhưng thể hiện cảm xúc chủ động hơn để họ cảm nhận hết tấm lòng bạn',
      'Pertahankan pola sehatmu, tapi ekspresikan perasaan sedikit lebih aktif agar mereka merasakan hatimu'
    ),
    oneLiner: L(
      '당신이 잘못한 게 아닙니다. 그냥 맞지 않았던 겁니다',
      'You did not do wrong. You simply did not fit',
      'あなたが悪いわけではありません。ただ合わなかっただけです',
      '不是你做错了。只是不合而已',
      '不是你做錯了。只是不合而已',
      'Bạn không sai. Chỉ là không hợp',
      'Bukan kamu yang salah. Kalian memang tidak cocok'
    ),
    shareMessage: L(
      '전 남친/여친 떠난 진짜 이유: 방향성 불일치 💚 내 연애 방식은 건강하다는 거... 그럼 왜 맨날 헤어지나 ㅠ → 너는 어떤 이별 원인이야?',
      'Real reason my ex left: direction mismatch 💚 So my dating style is healthy... then why do I keep breaking up ㅠ → What\'s your breakup cause?',
      '元カレ/元カノが去った本当の理由：方向性の不一致 💚 恋愛の仕方は健全らしい…じゃあなんでいつも別れるの ㅠ → あなたの別れ原因は？',
      '前任离开的真正原因：方向不合 💚 恋爱方式居然挺健康…那我怎么老分手 ㅠ → 你的分手原因是？',
      '前任離開的真正原因：方向不合 💚 戀愛方式居然挺健康…那我怎麼老分手 ㅠ → 你的分手原因是？',
      'Lý do thật người yêu cũ rời đi: khác hướng 💚 Kiểu yêu mình lành mạnh cơ… vậy sao cứ chia tay ㅠ → Bạn là nguyên nhân nào?',
      'Alasan mantanku pergi: arah tidak cocok 💚 Katanya gaya pacaranku sehat... terus kenapa sering putus ㅠ → Penyebab putusmu apa?'
    ),
  },
  {
    type: 'Type2',
    emoji: '🔇',
    title: L(
      '표현이 발목을 잡은, 감정 소통 부재형',
      'Expression held you back: Emotion communication gap type',
      '表現が足を引っ張った、感情コミュニケーション不足型',
      '表达拖了后腿：情感沟通缺失型',
      '表達拖了後腿：情感溝通缺失型',
      'Biểu đạt cản đường: Kiểu thiếu giao tiếp cảm xúc',
      'Ekspresi yang menghambat: tipe gap komunikasi emosi'
    ),
    shortDescription: L(
      '이별의 진짜 이유: 감정을 충분히 표현하지 못한 것\n"상대방은 당신이 자신을 좋아하는지 확신을 갖지 못했을 수 있습니다."',
      'Real breakup reason: Not expressing feelings enough\n"They may never have been sure you liked them."',
      '別れの本当の理由：感情を十分に伝えられなかったこと\n「相手は、あなたが自分を好きか確信できなかったかもしれません。」',
      '分手真正原因：情感表达不够\n「对方可能一直不确定你是否喜欢他/她。」',
      '分手真正原因：情感表達不夠\n「對方可能一直不確定你是否喜歡他/她。」',
      'Lý do chia tay thật: Chưa thể hiện cảm xúc đủ\n"Họ có thể chưa chắc bạn có thích họ."',
      'Alasan putus sebenarnya: Kurang mengekspresikan perasaan\n"Mereka mungkin tidak yakin kamu menyukai mereka."'
    ),
    description: L(
      '마음속으로는 분명히 좋아했는데, 그 마음이 상대에게 충분히 전달되지 않았을 가능성이 높습니다. 표현이 서툴거나 감정을 드러내는 것이 어색해서 상대방이 온도차를 느꼈을 수 있습니다. 느껴야 알지 말해야 알아라는 식의 관계는 오래가기 어렵습니다.',
      'You likely did like them inside, but it did not land clearly. Awkward expression can create a temperature gap. “They should just know” relationships rarely last.',
      '心の中では確かに好きだったのに、相手に十分伝わらなかった可能性が高いです。表現が苦手で温度差を感じさせたかもしれません。「感じれば分かる／言わなくても分かる」関係は長続きしにくいです。',
      '心里明明喜欢，却可能没充分传到对方那里。不善表达会让对方感到温度差。“感觉就该懂／不用说也该懂”的关系很难长久。',
      '心裡明明喜歡，卻可能沒充分傳到對方那裡。不善表達會讓對方感到溫度差。「感覺就該懂／不用說也該懂」的關係很難長久。',
      'Trong lòng bạn thích thật nhưng có thể chưa truyền đủ. Không khéo bày tỏ khiến họ thấy lệch nhiệt. Kiểu “cảm là biết / không nói cũng hiểu” khó bền.',
      'Di dalam hati kamu jelas suka, tapi mungkin tak tersampaikan cukup. Ekspresi canggung bisa membuat mereka merasakan jarak suhu. Hubungan “harusnya mengerti tanpa kata” sulit bertahan.'
    ),
    empathyLevel: L(
      '감정 표현 부족·소통 방식 차이 🔇',
      'Low emotional expression · communication style gap 🔇',
      '感情表現不足・コミュニケーションの違い 🔇',
      '情感表达不足·沟通方式差异 🔇',
      '情感表達不足·溝通方式差異 🔇',
      'Thiếu biểu đạt cảm xúc · khác cách giao tiếp 🔇',
      'Kurang ekspresi emosi · beda gaya komunikasi 🔇'
    ),
    characteristics: L(
      '무뚝뚝하다, 뭘 생각하는지 모르겠다, 내 마음인데 왜 알아야 해',
      'Cold/quiet, hard to read, why should I announce my feelings',
      '無口・クール, 何を考えているか分からない, 私の心なのになぜ言うの',
      '冷淡闷, 不知道在想什么, 我的心为什么要说出来',
      '冷淡悶, 不知道在想什麼, 我的心為什麼要說出來',
      'Ít nói/lạnh, khó đoán, sao phải nói lòng mình',
      'Pendiam, sulit ditebak, kenapa harus digambarkan perasaanku'
    ),
    goodMatch: L(
      '안정적이고 흔들리지 않는 태도, 큰 갈등을 잘 만들지 않는 편',
      'Steady unshakeable attitude, rarely creating big conflict',
      '安定して揺るがない態度, 大きな衝突をあまり作らない',
      '稳定不易动摇的态度, 不太制造大冲突',
      '穩定不易動搖的態度, 不太製造大衝突',
      'Thái độ ổn định ít lung lay, ít tạo xung đột lớn',
      'Sikap stabil tak goyah, jarang membuat konflik besar'
    ),
    badMatch: L(
      '감정 확인을 자주 원하는 불안 애착형. 표현 부족이 더 큰 갈등이 됨',
      'Anxious types who need frequent reassurance—low expression worsens conflict',
      '確認を頻繁に求める不安型。表現不足がより大きな衝突になる',
      '常要情感确认的焦虑依恋型。表达不足会放大冲突',
      '常要情感確認的焦慮依戀型。表達不足會放大衝突',
      'Kiểu gắn bó lo âu cần xác nhận nhiều—thiếu biểu đạt làm xung đột lớn hơn',
      'Tipe cemas yang butuh kepastian sering—kurang ekspresi memperbesar konflik'
    ),
    improvePoint: L(
      '감정을 숨기는 게 강함이 아님. 표현하지 않으면 상대는 알 수 없음',
      'Hiding feelings is not strength. Without expression, they cannot know',
      '感情を隠すのは強さではない。表現しなければ相手は分からない',
      '藏住情绪不是坚强。不表达对方就无法知道',
      '藏住情緒不是堅強。不表達對方就無法知道',
      'Giấu cảm xúc không phải mạnh. Không nói thì họ không biết',
      'Menyembunyikan perasaan bukan kekuatan. Tanpa ekspresi, mereka tak bisa tahu'
    ),
    prescription: L(
      '하루에 한 번 "오늘 네 덕분에 기분 좋았어" 같은 작은 표현 연습\n"말 안 해도 알겠지"라는 생각 버리기. 말해야 압니다\n갈등 상황에서 침묵보다 "나 지금 정리가 필요해, 이따 얘기하자"라고 말하기',
      'Practice one small line a day like "Thanks to you, I felt good today"\nDrop "they should just know"—you have to say it\nIn conflict, say "I need to sort my head; let\'s talk later" instead of silence',
      '1日1回「今日はあなたのお陰で気持ちよかった」などの小さな表現を練習\n「言わなくても分かるでしょう」を捨てる。言葉にしないと伝わらない\n衝突時は沈黙より「今は整理が必要、あとで話そう」と伝える',
      '每天练习一次小表达，如「今天因为你心情很好」\n丢掉「不用说也该懂」。不说就不知道\n冲突时别沉默，说「我需要理一下，晚点再谈」',
      '每天練習一次小表達，如「今天因為你心情很好」\n丟掉「不用說也該懂」。不說就不知道\n衝突時別沉默，說「我需要理一下，晚點再談」',
      'Luyện mỗi ngày một câu nhỏ như "Hôm nay nhờ bạn mình vui"\nBỏ nghĩ "không nói cũng hiểu"—phải nói mới biết\nKhi xung đột, nói "Mình cần sắp xếp đầu óc, lát nói nhé" thay vì im lặng',
      'Latih satu ekspresi kecil sehari: "Hari ini aku senang berkat kamu"\nBuang "harusnya mengerti tanpa kata"—harus diucapkan\nSaat konflik, bilang "Aku butuh merapikan pikiran, nanti kita bicara" daripada diam'
    ),
    oneLiner: L(
      '마음은 있었는데 전하지 않았습니다. 상대는 그 마음을 끝내 다 받지 못했습니다',
      'The heart was there, but not delivered. They never fully received it',
      '心はあったのに伝えなかった。相手はその気持ちを最後まで受け取れませんでした',
      '心里有，却没传出去。对方终究没能完整收到那份心意',
      '心裡有，卻沒傳出去。對方終究沒能完整收到那份心意',
      'Trong lòng có mà không truyền. Họ cuối cùng không nhận hết tấm lòng ấy',
      'Hatinya ada, tapi tak tersampaikan. Mereka tak pernah menerima sepenuhnya'
    ),
    shareMessage: L(
      '전 남친/여친 떠난 진짜 이유: 감정 표현 부재 🔇 말 안 해도 알겠지 하다가 헤어진 거 인정합니다 ㅠ → 너는 어떤 이별 원인이야?',
      'Real reason my ex left: emotion expression gap 🔇 I admit I lived on "you should just know" ㅠ → What\'s your breakup cause?',
      '元カレ/元カノが去った本当の理由：感情表現不足 🔇 「言わなくても分かる」で別れた…認めます ㅠ → あなたの別れ原因は？',
      '前任离开的真正原因：情感表达缺失 🔇 承认靠「不用说也懂」分手了 ㅠ → 你的分手原因是？',
      '前任離開的真正原因：情感表達缺失 🔇 承認靠「不用說也懂」分手了 ㅠ → 你的分手原因是？',
      'Lý do thật người yêu cũ rời đi: thiếu biểu đạt cảm xúc 🔇 Thừa nhận vì “không nói cũng hiểu” mà chia tay ㅠ → Bạn là kiểu nào?',
      'Alasan mantanku pergi: gap ekspresi emosi 🔇 Mengaku putus karena "harusnya mengerti tanpa kata" ㅠ → Penyebab putusmu apa?'
    ),
  },
  {
    type: 'Type3',
    emoji: '🔗',
    title: L(
      '확인받고 싶었던, 불안 애착 과의존형',
      'Wanted reassurance: Anxious-attachment overdependence type',
      '確かめてほしかった、不安型愛着の過剰依存型',
      '想被确认：焦虑依恋过度依赖型',
      '想被確認：焦慮依戀過度依賴型',
      'Muốn được khẳng định: Kiểu gắn bó lo âu phụ thuộc quá',
      'Ingin kepastian: tipe overdependensi kelekatan cemas'
    ),
    shortDescription: L(
      '이별의 진짜 이유: 불안한 마음이 상대를 지치게 한 것\n"상대방은 당신의 불안을 채워주는 역할에 지쳐갔을 수 있습니다."',
      'Real breakup reason: Your anxiety exhausted them\n"They may have burned out filling your insecurity."',
      '別れの本当の理由：不安な心が相手を疲弊させたこと\n「相手はあなたの不安を埋める役割に疲れていたかもしれません。」',
      '分手真正原因：不安的心把对方耗尽\n「对方可能已厌倦填补你的不安。」',
      '分手真正原因：不安的心把對方耗盡\n「對方可能已厭倦填補你的不安。」',
      'Lý do chia tay thật: Lo âu làm họ kiệt sức\n"Họ có thể mệt vì phải lấp đầy nỗi lo của bạn."',
      'Alasan putus sebenarnya: Kecemasanmu melelahkan mereka\n"Mereka mungkin capek mengisi ketidakamananmu."'
    ),
    description: L(
      '사랑받고 있다는 확신이 항상 필요했습니다. 연락이 늦으면 불안해지고, 이성 친구가 신경 쓰이고, 상대가 내 기대만큼 표현해주지 않으면 마음이 흔들렸습니다. 이런 패턴은 상대를 배려하지 않아서가 아니라 내 안의 불안에서 오는 것입니다. 하지만 상대 입장에서는 아무리 노력해도 충족이 안 되는 느낌에 지칠 수 있습니다.',
      'You always needed proof of being loved. Late replies, opposite-sex friends, or less affection shook you. It comes from inner anxiety, not lack of care—but from their side, never feeling enough can exhaust them.',
      '愛されている確証がいつも必要でした。連絡が遅いと不安、異性の友達が気になり、期待ほど表現がないと揺れました。配慮不足ではなく内なる不安からですが、相手は「いくら頑張っても足りない」と感じ疲れます。',
      '你总是需要被爱的确定感。回晚了就焦虑，异性朋友会在意，表达不够就动摇。这来自内心不安而非不体贴——但从对方看，怎么努力都不够会让人疲惫。',
      '你總是需要被愛的確定感。回晚了就焦慮，異性朋友會在意，表達不夠就動搖。這來自內心不安而非不體貼——但從對方看，怎麼努力都不夠會讓人疲憊。',
      'Bạn luôn cần chắc mình được yêu. Trả lời chậm là lo, bạn khác giới khiến bận tâm, biểu đạt kém kỳ vọng là lung lay. Đến từ lo âu bên trong chứ không phải thiếu quan tâm—nhưng với họ, mãi không đủ sẽ mệt.',
      'Kamu selalu butuh bukti dicintai. Balasan lambat bikin cemas, teman lawan jenis mengganggu, ekspresi kurang goyahkanmu. Itu dari kecemasan dalam, bukan tak peduli—tapi dari sisi mereka, tak pernah cukup bisa melelahkan.'
    ),
    empathyLevel: L(
      '불안 애착·과도한 확인 욕구 🔗',
      'Anxious attachment · excessive reassurance need 🔗',
      '不安型愛着・過度な確認欲求 🔗',
      '焦虑依恋·过度确认需求 🔗',
      '焦慮依戀·過度確認需求 🔗',
      'Gắn bó lo âu · nhu cầu xác nhận quá mức 🔗',
      'Kelekatan cemas · kebutuhan kepastian berlebihan 🔗'
    ),
    characteristics: L(
      '너무 의지한다, 숨이 막힌다, 아무리 해줘도 부족한 것 같다',
      'Relies too much, feels smothering, nothing is ever enough',
      '頼りすぎ, 息苦しい, いくらしても足りない気がする',
      '太依赖, 令人喘不过气, 怎么做都不够',
      '太依賴, 令人喘不過氣, 怎麼做都不夠',
      'Dựa dẫm quá, ngộp thở, cố bao nhiêu cũng chưa đủ',
      'Terlalu bergantung, sesak, seolah tak pernah cukup'
    ),
    goodMatch: L(
      '깊게 사랑하는 능력, 헌신적이고 상대에게 진심인 사람',
      'Ability to love deeply, devoted and sincere toward a partner',
      '深く愛する力, 献身的で相手に本気な人',
      '深爱的能力, 奉献且对恋人真心的人',
      '深愛的能力, 奉獻且對戀人真心的人',
      'Khả năng yêu sâu, tận tụy và chân thành với người yêu',
      'Kemampuan mencintai dalam, setia dan tulus pada pasangan'
    ),
    badMatch: L(
      '회피 애착형. 가까이 가려 할수록 상대가 멀어지는 패턴이 반복됨',
      'Avoidant types. The closer you get, the farther they pull—repeated loop',
      '回避型。近づこうとするほど相手が離れるパターンが繰り返される',
      '回避依恋型。越靠近对方越逃——模式反复',
      '迴避依戀型。越靠近對方越逃——模式反覆',
      'Kiểu tránh né. Càng đến gần họ càng lùi—lặp lại',
      'Tipe menghindar. Makin dekat, mereka makin menjauh—pola berulang'
    ),
    improvePoint: L(
      '사랑받고 싶은 욕구를 연인 한 사람에게만 의존하지 않기',
      'Do not hang all need-to-be-loved on one partner alone',
      '愛されたい欲求を恋人一人にだけ頼らない',
      '别把渴望被爱全部压在一个恋人身上',
      '別把渴望被愛全部壓在一個戀人身上',
      'Đừng phụ thuộc nhu cầu được yêu chỉ vào một người',
      'Jangan bergantungkan kebutuhan dicintai hanya pada satu pasangan'
    ),
    prescription: L(
      '연인 외의 나만의 즐거움·친구·취미를 충분히 가지기\n"연락이 늦는 것 = 나를 싫어하는 것"이라는 자동 연결 고리 끊기\n불안이 올라올 때 상대에게 바로 확인하기 전에 5분 대기 연습\n혼자 있는 시간을 불편함이 아닌 나를 위한 시간으로 재정의하기\n필요하다면 애착 유형 관련 상담이나 책을 통해 불안 애착 이해하기',
      'Build joys, friends, and hobbies outside your partner\nBreak the auto-link "late reply = they dislike me"\nWhen anxiety rises, wait 5 minutes before seeking reassurance\nRedefine alone time as for you—not as discomfort\nIf needed, learn anxious attachment via counseling or books',
      '恋人以外の楽しみ・友達・趣味を十分に持つ\n「連絡が遅い＝嫌われている」自動リンクを切る\n不安が上がったら、すぐ確認する前に5分待つ練習\n一人時間を不快ではなく自分のための時間と再定義\n必要なら愛着タイプの本やカウンセリングで不安型を理解する',
      '充分拥有恋人之外的乐趣、朋友、爱好\n打断「回晚了＝不喜欢我」的自动链接\n焦虑升起时先等5分钟再确认\n把独处重新定义为给自己的时间而非不适\n需要时通过咨询或书籍理解焦虑依恋',
      '充分擁有戀人之外的樂趣、朋友、愛好\n打斷「回晚了＝不喜歡我」的自動連結\n焦慮升起時先等5分鐘再確認\n把獨處重新定義為給自己的時間而非不適\n需要時透過諮詢或書籍理解焦慮依戀',
      'Có đủ niềm vui, bạn bè, sở thích ngoài người yêu\nCắt dây “trả lời chậm = không thích mình”\nKhi lo lên, chờ 5 phút trước khi xác nhận\nĐịnh nghĩa lại thời gian một mình là cho mình, không phải khó chịu\nNếu cần, tìm hiểu gắn bó lo âu qua sách/tư vấn',
      'Punya cukup kegembiraan, teman, hobi di luar pasangan\nPutus rantai otomatis "balasan lambat = mereka tidak suka aku"\nSaat cemas naik, tunggu 5 menit sebelum meminta kepastian\nRedefinisikan waktu sendirian sebagai untukmu—bukan ketidaknyamanan\nJika perlu, pahami kelekatan cemas lewat konseling atau buku'
    ),
    oneLiner: L(
      '당신의 사랑은 진짜였습니다. 다만 그 사랑이 때로 상대에게 너무 무거웠습니다',
      'Your love was real. Sometimes it was just too heavy for them',
      'あなたの愛は本物でした。ただ、その愛が相手には重すぎることがありました',
      '你的爱是真的。只是有时对对方太沉重',
      '你的愛是真的。只是有時對對方太沉重',
      'Tình yêu của bạn là thật. Chỉ đôi lúc quá nặng với họ',
      'Cintamu nyata. Hanya kadang terlalu berat bagi mereka'
    ),
    shareMessage: L(
      '전 남친/여친 떠난 진짜 이유: 불안 애착 과의존 🔗 확인받고 싶어서 지치게 한 거 맞는 것 같아서 반성 중 ㅠ → 너는 어떤 이별 원인이야?',
      'Real reason my ex left: anxious overdependence 🔗 Reflecting that I may have exhausted them seeking reassurance ㅠ → What’s your breakup cause?',
      '元カレ/元カノが去った本当の理由：不安型の過剰依存 🔗 確認したくて疲れさせたかも…反省中 ㅠ → あなたの別れ原因は？',
      '前任离开的真正原因：焦虑依恋过度依赖 🔗 好像为确认把对方累坏了…反省中 ㅠ → 你的分手原因是？',
      '前任離開的真正原因：焦慮依戀過度依賴 🔗 好像為確認把對方累壞了…反省中 ㅠ → 你的分手原因是？',
      'Lý do thật người yêu cũ rời đi: gắn bó lo âu phụ thuộc 🔗 Hình như làm họ mệt vì muốn xác nhận… đang tự vấn ㅠ → Bạn là kiểu nào?',
      'Alasan mantanku pergi: overdependensi cemas 🔗 Kayaknya bikin mereka capek karena butuh kepastian... lagi refleksi ㅠ → Penyebab putusmu apa?'
    ),
  },
  {
    type: 'Type4',
    emoji: '🌊',
    title: L(
      '감정이 너무 강렬했던, 과몰입 소진형',
      'Feelings too intense: Overinvestment burnout type',
      '感情が激しすぎた、過没入・消耗型',
      '情感过于强烈：过度投入耗尽型',
      '情感過於強烈：過度投入耗盡型',
      'Cảm xúc quá mãnh liệt: Kiểu overinvest kiệt sức',
      'Emosi terlalu intens: tipe burnout overinvestasi'
    ),
    shortDescription: L(
      '이별의 진짜 이유: 감정의 강도가 관계의 지속 가능성을 넘어선 것\n"당신은 사랑할 때 전부를 쏟아붓습니다. 상대방은 그 강도를 끝까지 감당하기 어려웠을 수 있습니다."',
      'Real breakup reason: Intensity exceeded what the relationship could sustain\n"You pour everything into love. They may not have endured that heat to the end."',
      '別れの本当の理由：感情の強さが関係の持続可能性を超えたこと\n「愛するとき全部注ぎます。相手はその強度を最後まで抱えきれなかったかもしれません。」',
      '分手真正原因：情绪强度超出关系可持续性\n「你爱时倾尽全部。对方可能无法把那份强度扛到最后。」',
      '分手真正原因：情緒強度超出關係可持續性\n「你愛時傾盡全部。對方可能無法把那份強度扛到最後。」',
      'Lý do chia tay thật: Cường độ cảm xúc vượt khả năng duy trì\n"Khi yêu bạn đổ hết. Họ có thể không chịu nổi cường độ ấy đến cùng."',
      'Alasan putus sebenarnya: Intensitas emosi melampaui daya tahan hubungan\n"Saat cinta kamu menuangkan semuanya. Mereka mungkin tak sanggup menahan intensitas itu sampai akhir."'
    ),
    description: L(
      '행복할 때는 누구보다 행복하고 힘들 때는 누구보다 힘든, 감정의 진폭이 매우 큰 유형입니다. 연인에 대한 감정이 강렬한 만큼 서운함도, 질투도, 집착도 강하게 나타납니다. 상대방이 이 강도를 처음엔 설레게 느낄 수 있지만 시간이 지나면 소진될 수 있습니다. 열정은 강점이지만 조절이 필요합니다.',
      'Joy is sky-high and pain is rock-bottom—your emotional range is huge. Hurt, jealousy, and clinginess scale with that fire. Exciting at first, exhausting later. Passion is a strength that needs regulation.',
      '幸せなときは誰より幸せ、辛いときは誰より辛い。感情の振れ幅が大きいタイプです。強い愛情ほど寂しさ・嫉妬・執着も強く出ます。最初はときめいても、時間が経つと消耗します。情熱は強みですが調節が必要です。',
      '开心时无比开心、难受时无比难受，情绪波幅很大。爱得深，委屈、嫉妒、执念也深。最初心动，久了可能耗尽。热情是优点，但需要调节。',
      '開心時無比開心、難受時無比難受，情緒波幅很大。愛得深，委屈、嫉妒、執念也深。最初心動，久了可能耗盡。熱情是優點，但需要調節。',
      'Vui thì vui nhất, khó thì khó nhất—biên độ cảm xúc rất lớn. Yêu mạnh nên ấm ức, ghen, ám ảnh cũng mạnh. Đầu tiên cuốn hút, lâu dần dễ kiệt. Nhiệt huyết là điểm mạnh nhưng cần điều tiết.',
      'Saat bahagia sangat bahagia, saat sulit sangat sulit—amplitudo emosimu besar. Cinta intens membawa kecewa, cemburu, obsesi yang intens juga. Awalnya menggairahkan, lama-lama membuat lelah. Gairah adalah kekuatan yang perlu diatur.'
    ),
    empathyLevel: L(
      '감정 과몰입·소진 패턴 🌊',
      'Emotional overinvestment · burnout pattern 🌊',
      '感情過没入・消耗パターン 🌊',
      '情感过度投入·耗尽模式 🌊',
      '情感過度投入·耗盡模式 🌊',
      'Overinvest cảm xúc · pattern kiệt sức 🌊',
      'Overinvestasi emosi · pola burnout 🌊'
    ),
    characteristics: L(
      '집착이 심하다, 감정 기복이 힘들다, 같이 있으면 에너지가 빠진다',
      'Very clingy, hard mood swings, draining to be around',
      '執着が強い, 感情の浮き沈みが辛い, 一緒にいるとエネルギーが減る',
      '很粘人, 情绪起伏难受, 在一起会掉电',
      '很黏人, 情緒起伏難受, 在一起會掉電',
      'Ám ảnh mạnh, cảm xúc thất thường nặng, ở cùng dễ mất năng lượng',
      'Sangat clingy, mood naik turun berat, bersama menguras energi'
    ),
    goodMatch: L(
      '열정적이고 진심으로 사랑하는 능력, 상대를 세상에서 가장 소중하게 대함',
      'Passionate sincere love, treating a partner as most precious in the world',
      '情熱的で本気の愛, 相手を世界でいちばん大切に扱う',
      '热情真诚的爱, 把对方当作世间最珍贵',
      '熱情真誠的愛, 把對方當作世間最珍貴',
      'Yêu nồng nhiệt chân thành, coi người yêu là quý nhất',
      'Cinta penuh gairah dan tulus, memperlakukan pasangan sebagai yang paling berharga'
    ),
    badMatch: L(
      '감정 표현이 절제된 사람. 온도 차이로 인한 갈등이 반복됨',
      'Reserved expressers. Temperature-gap conflict repeats',
      '感情表現が控えめな人。温度差による衝突が繰り返される',
      '情感表达克制的人。温度差冲突会反复',
      '情感表達克制的人。溫度差衝突會反覆',
      'Người kiệm lời cảm xúc. Xung đột lệch nhiệt lặp lại',
      'Orang yang ekspresinya tertahan. Konflik jarak suhu berulang'
    ),
    improvePoint: L(
      '연인이 전부인 구조를 바꾸기. 나 자신의 삶과 무게 중심을 찾기',
      'Stop making a partner your whole world. Find your own center of gravity',
      '恋人がすべてという構造を変える。自分の人生の重心を見つける',
      '改变「恋人即全部」的结构。找到自己生活的重心',
      '改變「戀人即全部」的結構。找到自己生活的重心',
      'Đổi cấu trúc “người yêu là tất cả”. Tìm trọng tâm đời mình',
      'Ubah struktur "pasangan adalah segalanya". Temukan pusat gravitasi hidupmu'
    ),
    prescription: L(
      '감정이 올라올 때 바로 표현하기 전에 하루 기다려보기\n"이 감정이 지금 상황에 비례하는가?" 스스로에게 질문하기\n연인과의 관계 외에 나를 채워주는 것 3가지 만들기\n강렬한 감정 자체는 문제가 아님. 표현의 방식과 타이밍을 연습하기\n이별 후 회복 루틴 만들기. 충분히 슬퍼하되 기간을 정하기',
      'When feelings surge, wait a day before expressing\nAsk: "Is this feeling proportional to the situation?"\nFind 3 things that fill you outside the relationship\nIntensity itself is not the problem—practice how and when to express\nBuild a post-breakup recovery routine: grieve fully, with a set period',
      '感情が上がったらすぐ言わず、1日待つ\n「この感情は今の状況に比例しているか？」と問う\n恋人以外で自分を満たすもの3つを見つける\n強い感情自体は問題ではない。表現の仕方とタイミングを練習\n別れ後の回復ルーティンを作る。十分悲しみつつ期間を決める',
      '情绪上来时先等一天再表达\n自问：「这情绪是否与现状成比例？」\n找3件恋人之外能充实自己的事\n强烈情绪本身不是问题。练习表达方式与时机\n建立分手恢复例行：充分难过但设定期限',
      '情緒上來時先等一天再表達\n自問：「這情緒是否與現況成比例？」\n找3件戀人之外能充實自己的事\n強烈情緒本身不是問題。練習表達方式與時機\n建立分手恢復例行：充分難過但設定期限',
      'Khi cảm xúc dâng, chờ một ngày rồi hãy nói\nTự hỏi: "Cảm xúc này có tỉ lệ với tình huống không?"\nTìm 3 thứ làm đầy mình ngoài quan hệ\nCảm xúc mạnh không sai—luyện cách và lúc bày tỏ\nTạo routine phục hồi sau chia tay: buồn đủ nhưng có kỳ hạn',
      'Saat emosi naik, tunggu sehari sebelum mengekspresikan\nTanya: "Apakah perasaan ini proporsional dengan situasinya?"\nTemukan 3 hal yang mengisimu di luar hubungan\nIntensitas sendiri bukan masalah—latih cara dan waktunya\nBuat rutinitas pemulihan setelah putus: bersedih cukup dengan periode'
    ),
    oneLiner: L(
      '당신의 사랑은 누구보다 뜨거웠습니다. 다만 그 온도를 상대가 다 감당하기에는 너무 뜨거웠습니다',
      'Your love burned hotter than anyone\'s. That heat was simply too much for them to hold',
      'あなたの愛は誰よりも熱かった。ただ、その温度を相手が全部抱えきれないほど熱すぎました',
      '你的爱比谁都烫。只是那温度对方承受不住',
      '你的愛比誰都燙。只是那溫度對方承受不住',
      'Tình yêu bạn nóng hơn ai. Chỉ là nhiệt ấy họ không chịu nổi hết',
      'Cintamu lebih panas dari siapa pun. Hanya saja suhunya terlalu tinggi untuk mereka tanggung'
    ),
    shareMessage: L(
      '전 남친/여친 떠난 진짜 이유: 과몰입 소진형 🌊 사랑할 때 전부 쏟아붓다가 상대 지치게 함... 이게 나였음 ㅠ → 너는?',
      'Real reason my ex left: overinvestment burnout 🌊 I poured everything into love and burned them out... that was me ㅠ → You?',
      '元カレ/元カノが去った本当の理由：過没入消耗型 🌊 愛するとき全部注いで相手を疲弊させた…私だった ㅠ → あなたは？',
      '前任离开的真正原因：过度投入耗尽型 🌊 爱时倾尽全力把对方累垮…那就是我 ㅠ → 你呢？',
      '前任離開的真正原因：過度投入耗盡型 🌊 愛時傾盡全力把對方累垮…那就是我 ㅠ → 你呢？',
      'Lý do thật người yêu cũ rời đi: overinvest kiệt sức 🌊 Đổ hết khi yêu khiến họ mệt… đúng là mình ㅠ → Còn bạn?',
      'Alasan mantanku pergi: burnout overinvestasi 🌊 Menuangkan semua saat cinta sampai mereka lelah... itu aku ㅠ → Kamu?'
    ),
  },
  {
    type: 'Type5',
    emoji: '🪞',
    title: L(
      '관계보다 자신이 앞섰던, 자기중심 패턴형',
      'Self before the bond: Self-centered pattern type',
      '関係より自分が先に立った、自己中心パターン型',
      '自己先于关系：自我中心模式型',
      '自己先於關係：自我中心模式型',
      'Bản thân trước mối quan hệ: Kiểu pattern tự trung tâm',
      'Diri sebelum hubungan: tipe pola berpusat pada diri'
    ),
    shortDescription: L(
      '이별의 진짜 이유: 관계에서 상대의 입장이 충분히 고려되지 않은 것\n"상대방은 자신의 감정과 필요가 충분히 받아들여지지 않는다고 느꼈을 수 있습니다."',
      'Real breakup reason: Their side was not weighed enough in the relationship\n"They may have felt their feelings and needs were not truly taken in."',
      '別れの本当の理由：関係で相手の立場が十分に考慮されなかったこと\n「相手は自分の感情やニーズが十分受け取られていないと感じたかもしれません。」',
      '分手真正原因：关系里对方立场没被充分考虑\n「对方可能觉得自己的情绪与需要没被真正接纳。」',
      '分手真正原因：關係裡對方立場沒被充分考慮\n「對方可能覺得自己的情緒與需要沒被真正接納。」',
      'Lý do chia tay thật: Phía họ chưa được cân nhắc đủ\n"Họ có thể thấy cảm xúc và nhu cầu của mình chưa được tiếp nhận."',
      'Alasan putus sebenarnya: Sisi mereka tak cukup dipertimbangkan\n"Mereka mungkin merasa perasaan dan kebutuhannya tak benar-benar diterima."'
    ),
    description: L(
      '연애 중 내 감정과 서운함은 크게 느껴지는 반면, 상대의 피드백이나 요청은 억울함이나 방어심으로 받아들이는 경향이 있었습니다. 나쁜 의도가 있는 게 아닙니다. 다만 관계에서 내 중심성이 높았고, 상대가 원하는 것과 내가 원하는 것 사이의 균형이 부족했을 수 있습니다.',
      'Your feelings and hurts loomed large, while their feedback often hit as unfairness or defense. Not bad intent—just high self-centering and weak balance between what they needed and what you wanted.',
      '恋愛中は自分の感情・寂しさが大きく、相手のフィードバックは悔しさや防御で受けやすかったです。悪意ではなく、関係での自己中心性が高く、欲しいもののバランスが足りなかった可能性があります。',
      '恋爱中自己的情绪与委屈很显眼，对方的反馈却常被当成委屈或防御。不是恶意，而是自我中心偏高，双方需求的平衡不够。',
      '戀愛中自己的情緒與委屈很顯眼，對方的回饋卻常被當成委屈或防衛。不是惡意，而是自我中心偏高，雙方需求的平衡不夠。',
      'Khi yêu cảm xúc/âm ức của bạn lớn, còn phản hồi của họ hay bị nhận như oan ức hoặc phòng thủ. Không phải ác ý—chỉ là trọng tâm bản thân cao, thiếu cân bằng nhu cầu hai phía.',
      'Saat pacaran, perasaan dan sakit hatimu terasa besar, sementara feedback mereka sering diterima sebagai ketidakadilan atau pertahanan. Bukan niat buruk—hanya pusat diri yang tinggi dan keseimbangan kebutuhan yang kurang.'
    ),
    empathyLevel: L(
      '자기중심적 연애 패턴 🪞',
      'Self-centered dating pattern 🪞',
      '自己中心的な恋愛パターン 🪞',
      '自我中心恋爱模式 🪞',
      '自我中心戀愛模式 🪞',
      'Pattern yêu tự trung tâm 🪞',
      'Pola pacaran berpusat pada diri 🪞'
    ),
    characteristics: L(
      '내 말을 잘 안 들어, 항상 자기 생각만 한다, 노력해도 바뀌지 않는다',
      'Does not listen, always in their own head, never changes despite effort',
      '話を聞かない, いつも自分の考えだけ, 頑張っても変わらない',
      '不听人说话, 总是只想自己的, 怎么努力都不改',
      '不聽人說話, 總是只想自己的, 怎麼努力都不改',
      'Không chịu nghe, cứ nghĩ ý mình, cố cũng không đổi',
      'Tak mau dengar, selalu pikirannya sendiri, berusaha pun tak berubah'
    ),
    goodMatch: L(
      '자기감정에 솔직하고 표현을 두려워하지 않는 편',
      'Honest about own feelings and unafraid to express them',
      '自分の感情に正直で、表現を恐れない方',
      '对自己情绪诚实、不怕表达',
      '對自己情緒誠實、不怕表達',
      'Thành thật với cảm xúc mình, không sợ bày tỏ',
      'Jujur pada perasaan sendiri dan tak takut mengekspresikan'
    ),
    badMatch: L(
      '자기 표현이 강한 사람. 두 사람 모두 자기중심이면 갈등이 잦아짐',
      'Strong self-expressers. Two self-centered people fight often',
      '自己表現が強い人。両者とも自己中心だと衝突が増える',
      '自我表达很强的人。两人都自我中心时冲突频繁',
      '自我表達很強的人。兩人都自我中心時衝突頻繁',
      'Người tự bày tỏ mạnh. Hai người cùng tự trung tâm thì hay xung đột',
      'Orang ekspresif kuat. Jika keduanya berpusat pada diri, konflik sering'
    ),
    improvePoint: L(
      '상대의 감정도 나의 감정만큼 유효하다는 것을 인식하기',
      'Recognize that their feelings are as valid as yours',
      '相手の感情も自分の感情と同じく有効だと認識する',
      '认识到对方的情绪和自己的一样有效',
      '認識到對方的情緒和自己的一樣有效',
      'Nhận ra cảm xúc của họ cũng hợp lệ như của bạn',
      'Menyadari perasaan mereka sama validnya dengan perasaanmu'
    ),
    prescription: L(
      '상대가 서운함을 이야기할 때 "그러니까 네 말은~"으로 먼저 요약해보기. 방어 전에 이해 먼저\n"내가 옳다"와 "관계가 좋아진다" 중 무엇이 더 중요한지 순간마다 선택하기\n상대의 필요를 하루에 한 번 먼저 물어보는 습관 만들기\n비판을 나에 대한 공격이 아닌 관계를 위한 정보로 받아들이기 연습\n전 연인이 헤어질 때 한 말을 방어 없이 한 번만 다시 읽어보기',
      'When they share hurt, summarize first: "So you mean..." Understand before defending\nEach moment choose: being right vs the relationship getting better\nAsk about their needs once a day first\nPractice taking criticism as relationship info, not a personal attack\nReread what your ex said at the breakup once without defending',
      '相手が寂しさを話すとき、まず「つまり君の話は〜」と要約。防御の前に理解\n「自分が正しい」と「関係が良くなる」どちらが大事か瞬間ごとに選ぶ\n相手のニーズを1日1回先に聞く習慣\n批判を攻撃でなく関係のための情報として受け取る練習\n元恋人が別れ際に言った言葉を防御なしで一度読み返す',
      '对方说委屈时先用「所以你的意思是〜」概括。理解优先于防御\n每刻选择「我对」还是「关系变好」哪个更重要\n每天先问一次对方需要什么\n练习把批评当关系信息而非人身攻击\n不带防御再读一遍前任分手时说的话',
      '對方說委屈時先用「所以你的意思是〜」概括。理解優先於防衛\n每刻選擇「我對」還是「關係變好」哪個更重要\n每天先問一次對方需要什麼\n練習把批評當關係資訊而非人身攻擊\n不帶防衛再讀一遍前任分手時說的話',
      'Khi họ nói tổn thương, tóm tắt trước: "Ý bạn là~". Hiểu trước khi phòng thủ\nMỗi lúc chọn: mình đúng hay mối quan hệ tốt hơn\nMỗi ngày hỏi nhu cầu của họ một lần trước\nLuyện nhận phê bình là thông tin cho quan hệ, không phải tấn công\nĐọc lại lời chia tay của người cũ một lần không phòng thủ',
      'Saat mereka menyampaikan sakit hati, ringkas dulu: "Jadi maksudmu~". Pahami sebelum bertahan\nTiap momen pilih: benar vs hubungan lebih baik\nTanya kebutuhan mereka sekali sehari lebih dulu\nLatih menerima kritik sebagai info hubungan, bukan serangan pribadi\nBaca ulang kata mantan saat putus sekali tanpa bertahan'
    ),
    oneLiner: L(
      '당신은 분명히 사랑했습니다. 다만 그 사랑 안에서 상대가 충분히 보였는지 돌아볼 필요가 있습니다',
      'You did love them. Still ask whether they were fully seen inside that love',
      'あなたは確かに愛していました。ただその愛の中で相手が十分見えていたか振り返る必要があります',
      '你确实爱过。仍需回想那份爱里对方是否被充分看见',
      '你確實愛過。仍需回想那份愛裡對方是否被充分看見',
      'Bạn đã yêu thật. Nhưng cần nhìn lại trong tình đó họ có được thấy đủ không',
      'Kamu memang mencintai. Tetap perlu meninjau apakah mereka terlihat cukup dalam cinta itu'
    ),
    shareMessage: L(
      '전 남친/여친 떠난 진짜 이유: 자기중심 패턴형 🪞 상대 입장 충분히 못 봤다는 거 좀 찔림... 반성합니다 → 너는 어떤 이별 원인이야?',
      'Real reason my ex left: self-centered pattern 🪞 Stings that I did not fully see their side... reflecting → What\'s your breakup cause?',
      '元カレ/元カノが去った本当の理由：自己中心パターン型 🪞 相手の立場を十分見てなかった…反省します → あなたの別れ原因は？',
      '前任离开的真正原因：自我中心模式型 🪞 没充分看到对方立场有点扎心…反思中 → 你的分手原因是？',
      '前任離開的真正原因：自我中心模式型 🪞 沒充分看到對方立場有點扎心…反思中 → 你的分手原因是？',
      'Lý do thật người yêu cũ rời đi: pattern tự trung tâm 🪞 Hơi đau vì chưa thấy đủ phía họ… đang tự vấn → Bạn là kiểu nào?',
      'Alasan mantanku pergi: pola berpusat pada diri 🪞 Agak nyeri karena kurang melihat sisi mereka... refleksi → Penyebab putusmu apa?'
    ),
  },
  {
    type: 'Type6',
    emoji: '🧱',
    title: L(
      '연애 자체가 두려웠던, 회피 방어형',
      'Afraid of closeness itself: Avoidant defense type',
      '恋愛そのものが怖かった、回避・防衛型',
      '害怕恋爱本身：回避防御型',
      '害怕戀愛本身：迴避防禦型',
      'Sợ sự gần gũi: Kiểu phòng thủ tránh né',
      'Takut kedekatan itu sendiri: tipe pertahanan menghindar'
    ),
    shortDescription: L(
      '이별의 진짜 이유: 가까워지는 것이 두려워 스스로 거리를 만든 것\n"상대방은 당신과 가까워지려 할수록 벽을 느꼈을 수 있습니다."',
      'Real breakup reason: Fear of closeness made you create distance\n"The closer they tried to get, the more wall they may have felt."',
      '別れの本当の理由：近づくことが怖くて自ら距離を作ったこと\n「相手は近づこうとするほど壁を感じたかもしれません。」',
      '分手真正原因：害怕靠近而自己筑起距离\n「对方越想靠近，可能越感到你的墙。」',
      '分手真正原因：害怕靠近而自己築起距離\n「對方越想靠近，可能越感到你的牆。」',
      'Lý do chia tay thật: Sợ gần nên tự tạo khoảng cách\n"Họ càng đến gần càng thấy bức tường."',
      'Alasan putus sebenarnya: Takut dekat lalu membuat jarak sendiri\n"Makin mereka mendekat, makin terasa tembokmu."'
    ),
    description: L(
      '감정을 드러내는 것이 불편하고 연인이 너무 가까이 오면 오히려 불편해지는 패턴이 있었을 수 있습니다. 이별 후 회복이 빠른 편이거나 다음으로 빠르게 넘어가는 경향, 또는 연인과의 깊은 감정적 교류를 회피했을 가능성이 있습니다. 이것은 차갑거나 나쁜 사람이어서가 아닙니다. 가까워지는 것이 무언가로부터 자신을 보호하려는 방어 기제일 수 있습니다.',
      'Showing feelings may feel awkward, and too much closeness uncomfortable. You may recover fast after breakups, move on quickly, or avoid deep emotional exchange. Not because you are cold or bad—closeness can be a defense protecting you from something.',
      '感情を出すのが苦手で、恋人が近づきすぎるとむしろ居心地が悪くなるパターンがあったかもしれません。別れ後の回復が早い、次へ早く進む、深い感情交流を避ける。冷たい・悪い人だからではなく、近づくことが自分を守る防御機制である可能性があります。',
      '可能不擅长表露情绪，恋人太近反而难受。分手后恢复快、很快进入下一段，或回避深层情感交流。不是冷酷或坏人——靠近可能是保护自己的防御机制。',
      '可能不擅長表露情緒，戀人太近反而難受。分手後恢復快、很快進入下一段，或迴避深層情感交流。不是冷酷或壞人——靠近可能是保護自己的防禦機制。',
      'Có thể khó lộ cảm xúc, người yêu lại gần thì khó chịu. Có thể bình phục nhanh sau chia tay, chuyển tiếp nhanh, hoặc tránh trao đổi cảm xúc sâu. Không phải lạnh lùng hay xấu—gần gũi có thể là cơ chế tự bảo vệ.',
      'Mungkin canggung mengungkapkan perasaan, dan terlalu dekat justru tak nyaman. Bisa pulih cepat setelah putus, cepat lanjut, atau menghindari pertukaran emosi dalam. Bukan karena dingin atau jahat—kedekatan bisa jadi mekanisme pertahanan melindungi diri.'
    ),
    empathyLevel: L(
      '회피 애착·감정 방어 패턴 🧱',
      'Avoidant attachment · emotional defense pattern 🧱',
      '回避型愛着・感情防衛パターン 🧱',
      '回避依恋·情感防御模式 🧱',
      '迴避依戀·情感防禦模式 🧱',
      'Gắn bó tránh né · pattern phòng thủ cảm xúc 🧱',
      'Kelekatan menghindar · pola pertahanan emosi 🧱'
    ),
    characteristics: L(
      '벽이 있는 것 같다, 더 깊어지려 하면 멀어진다, 감정을 안 보여준다',
      'Feels walled off, pulls away when it deepens, hides feelings',
      '壁がある気がする, 深まろうとすると離れる, 感情を見せない',
      '像有墙, 想再深就后退, 不露情绪',
      '像有牆, 想再深就後退, 不露情緒',
      'Như có tường, càng sâu càng lùi, không lộ cảm xúc',
      'Seperti ada tembok, menjauh saat semakin dalam, tak menunjukkan perasaan'
    ),
    goodMatch: L(
      '독립적이고 흔들리지 않는 안정감처럼 보이는 외적 모습',
      'An outer look of independence and unshakeable steadiness',
      '自立して揺るがない安定感のように見える外側の姿',
      '外表像独立、不易动摇的稳定感',
      '外表像獨立、不易動搖的穩定感',
      'Bề ngoài độc lập, vững vàng khó lung lay',
      'Tampilan luar mandiri dan stabil yang tak mudah goyah'
    ),
    badMatch: L(
      '불안 애착형. 다가오면 도망가고 도망가면 쫓아오는 최악의 조합',
      'Anxious types. You flee when they approach; they chase when you flee—the worst loop',
      '不安型。近づくと逃げる／逃げると追う最悪の組み合わせ',
      '焦虑依恋型。靠近就逃、逃跑就追——最糟组合',
      '焦慮依戀型。靠近就逃、逃跑就追——最糟組合',
      'Kiểu gắn bó lo âu. Họ đến thì bạn chạy, bạn chạy thì họ đuổi—vòng xoáy tệ nhất',
      'Tipe cemas. Mereka mendekat kamu lari; kamu lari mereka mengejar—kombinasi terburuk'
    ),
    improvePoint: L(
      '방어가 나를 지키는 것 같지만 연결도 막고 있음을 인식하기',
      'See that defense protects you but also blocks connection',
      '防御は自分を守るように見えても、つながりも止めていると認識する',
      '认识到防御看似保护自己，也阻断了连接',
      '認識到防禦看似保護自己，也阻斷了連結',
      'Nhận ra phòng thủ tưởng bảo vệ nhưng cũng chặn kết nối',
      'Menyadari pertahanan melindungi sekaligus menghambat koneksi'
    ),
    prescription: L(
      '"나는 왜 가까워지면 불편해지는가"를 혼자 또는 전문가와 탐색해보기\n작은 감정 노출 연습하기. "오늘 좀 힘들었어"처럼 아주 작은 것부터\n상대가 감정을 요구할 때 도망가지 않고 "나는 이게 어색한데 노력해볼게"라고 말하기\n과거 관계에서 상처받은 기억이 있다면 그것이 지금의 방어로 연결되고 있는지 탐색하기\n회피 애착 관련 책이나 상담을 통해 패턴 이해하기',
      'Explore alone or with a pro: why does closeness feel uncomfortable?\nPractice tiny emotional reveals like "Today was a bit hard"\nWhen they ask for feelings, stay and say "This feels awkward but I will try"\nIf past wounds exist, check whether they feed today\'s defense\nLearn avoidant attachment through books or counseling',
      '「なぜ近づくと居心地が悪いか」を一人または専門家と探る\n小さな感情開示から。「今日ちょっと大変だった」など\n相手が感情を求めるとき逃げず「これは気まずいけど頑張る」と言う\n過去の傷が今の防御につながっていないか探る\n回避型の本やカウンセリングでパターンを理解する',
      '独自或与专业人士探索：「为什么靠近就难受」\n从小小的情绪暴露开始，如「今天有点难」\n对方要情绪时不逃，说「我觉得别扭但会努力」\n若有过去受伤，检视是否连到现在的防御\n通过书籍或咨询理解回避依恋',
      '独自或與專業人士探索：「為什麼靠近就難受」\n從小小的情緒暴露開始，如「今天有點難」\n對方要情緒時不逃，說「我覺得彆扭但會努力」\n若有過去受傷，檢視是否連到現在的防禦\n透過書籍或諮詢理解迴避依戀',
      'Tìm hiểu một mình hoặc với chuyên gia: vì sao gần lại khó chịu?\nLuyện lộ cảm xúc nhỏ như "Hôm nay hơi mệt"\nKhi họ cần cảm xúc, đừng chạy—"Mình thấy ngại nhưng sẽ cố"\nNếu có vết thương cũ, xem có nuôi phòng thủ hiện tại không\nHiểu gắn bó tránh né qua sách hoặc tư vấn',
      'Eksplor sendiri atau dengan ahli: kenapa kedekatan terasa tak nyaman?\nLatih ungkap emosi kecil seperti "Hari ini agak berat"\nSaat mereka minta perasaan, jangan lari—bilang "Ini canggung tapi aku coba"\nJika ada luka masa lalu, cek apakah menyuplai pertahanan hari ini\nPahami kelekatan menghindar lewat buku atau konseling'
    ),
    oneLiner: L(
      '상대는 당신에게 닿고 싶었습니다. 당신은 닿이는 것이 두려웠습니다. 그 간격이 결국 이별이 됐습니다',
      'They wanted to reach you. You feared being reached. That gap became the breakup',
      '相手はあなたに届きたかった。あなたは届かれるのが怖かった。その間隔が結局別れになりました',
      '对方想触及你。你害怕被触及。那间距最终成了分手',
      '對方想觸及你。你害怕被觸及。那間距最終成了分手',
      'Họ muốn chạm tới bạn. Bạn sợ bị chạm tới. Khoảng cách ấy thành chia tay',
      'Mereka ingin menjangkaumu. Kamu takut dijangkau. Jarak itu akhirnya menjadi putus'
    ),
    shareMessage: L(
      '전 남친/여친 떠난 진짜 이유: 회피 방어형 🧱 가까워질수록 멀어지는 패턴이 나였다는 게 충격 ㅠ → 너는 어떤 이별 원인이야?',
      'Real reason my ex left: avoidant defense 🧱 Shocked the closer-they-get-the-farther-I-go pattern was me ㅠ → What\'s your breakup cause?',
      '元カレ/元カノが去った本当の理由：回避防衛型 🧱 近づくほど離れるパターンが私だった…衝撃 ㅠ → あなたの別れ原因は？',
      '前任离开的真正原因：回避防御型 🧱 原来越近越逃的模式是我…冲击 ㅠ → 你的分手原因是？',
      '前任離開的真正原因：迴避防禦型 🧱 原來越近越逃的模式是我…衝擊 ㅠ → 你的分手原因是？',
      'Lý do thật người yêu cũ rời đi: phòng thủ tránh né 🧱 Sốc vì pattern càng gần càng xa là mình ㅠ → Bạn là kiểu nào?',
      'Alasan mantanku pergi: pertahanan menghindar 🧱 Kaget pola makin dekat makin menjauh itu aku ㅠ → Penyebab putusmu apa?'
    ),
  },
];

/** 총점 0~36 → 유형 */
export function calculatePhase3RealReasonForBreakupResult(answers: number[]): string {
  const totalScore = answers.reduce((sum, score) => sum + (score ?? 0), 0);

  if (totalScore <= 5) return 'Type1';
  if (totalScore <= 11) return 'Type2';
  if (totalScore <= 19) return 'Type3';
  if (totalScore <= 27) return 'Type4';
  if (totalScore <= 33) return 'Type5';
  return 'Type6';
}
