/** 나의 연애 IQ — 상위 몇 % — phase3-love-iq-percent · 15문항 4지선다 퀴즈 · 정답 수 0~15 */

export type Phase3LoveIqLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';

export type Phase3LoveIqText = Record<Phase3LoveIqLocaleKey, string>;

function T(ko: string, en: string, ja: string, zhCN: string, zhTW: string, vi: string, id: string): Phase3LoveIqText {
  return { ko, en, ja, 'zh-CN': zhCN, 'zh-TW': zhTW, vi, id };
}

export function loveIqText(text: Phase3LoveIqText, locale: string): string {
  const loc = locale as Phase3LoveIqLocaleKey;
  return text[loc] || text.ko;
}

export interface Phase3LoveIqOption {
  text: Phase3LoveIqText;
  isCorrect: boolean;
}

export interface Phase3LoveIqQuestion {
  id: number;
  question: Phase3LoveIqText;
  topic: Phase3LoveIqText;
  options: Phase3LoveIqOption[];
  explanation: Phase3LoveIqText;
}

export interface Phase3LoveIqResult {
  type: string;
  emoji: string;
  min: number;
  max: number;
  gauge: number;
  title: Phase3LoveIqText;
  gaugeLabel: Phase3LoveIqText;
  quote: Phase3LoveIqText;
  description: Phase3LoveIqText;
  scoreRange: Phase3LoveIqText;
  keywords: Phase3LoveIqText;
  strengths: Phase3LoveIqText;
  tips: Phase3LoveIqText;
  oneLiner: Phase3LoveIqText;
  shareLine: Phase3LoveIqText;
}

function opt(text: Phase3LoveIqText, isCorrect = false): Phase3LoveIqOption {
  return { text, isCorrect };
}

function question(
  id: number,
  prompt: Phase3LoveIqText,
  topic: Phase3LoveIqText,
  options: Phase3LoveIqOption[],
  explanation: Phase3LoveIqText
): Phase3LoveIqQuestion {
  return { id, question: prompt, topic, options, explanation };
}

export const PHASE3_LOVE_IQ_MAX = 15;

export const phase3LoveIqPercentQuestions: Phase3LoveIqQuestion[] = [
  question(
    1,
    T(
      '연인이 퇴근 후 지친 얼굴로 "오늘 진짜 힘들었어"라고 말했다. 가장 도움이 되는 반응은?',
      'Your partner comes home looking wiped out and says, "Today was rough." What helps most?',
      '恋人が疲れた顔で「今日ほんとにきつかった」と言った。いちばん助けになる反応は？',
      '恋人下班后一脸疲惫地说「今天真的好累」。最有帮助的回应是？',
      '戀人下班後一臉疲憊地說「今天真的好累」。最有幫助的回應是？',
      'Người yêu về nhà mặt mệt và nói: "Hôm nay mệt thật." Phản ứng nào giúp được nhiều nhất?',
      'Pacar pulang dengan wajah lelah dan bilang, "Hari ini capek banget." Respons yang paling membantu?'
    ),
    T('감정 듣기', 'Listen first', 'まず聞く', '先听对方', '先聽對方', 'Lắng nghe trước', 'Dengar dulu'),
    [
      opt(T(
        '"무슨 일 있었어? 천천히 얘기해 줘"라며 먼저 들어준다',
        'Ask what happened, and let them talk first',
        '「何があったの？ゆっくり話して」と、先に聞く',
        '先问「发生什么了？慢慢说」，把话听完',
        '先問「發生什麼了？慢慢說」，把話聽完',
        'Hỏi chuyện gì đã xảy ra, rồi nghe họ kể trước',
        'Tanya apa yang terjadi, lalu dengarkan dulu'
      ), true),
      opt(T(
        '"나도 오늘 힘들었어"라며 내 하루를 먼저 이야기한다',
        'Jump in with how rough your own day was',
        '「私も今日きつかった」と、自分の一日を先に話す',
        '先说「我也累死了」，把自己的一天讲一遍',
        '先說「我也很累」，把自己的一天講一遍',
        'Kể ngày của mình trước: "Tôi cũng mệt"',
        'Duluan cerita hari kamu sendiri: "Aku juga capek"'
      )),
      opt(T(
        '"그럴 땐 이렇게 하면 돼"라며 해결책부터 알려 준다',
        'Lead with a fix: "Here is what you should do"',
        '「そういうときはこうすればいい」と、解決策から出す',
        '上来就给办法：「这时候你该这么做」',
        '一上來就給辦法：「這時候你該這麼做」',
        'Đưa cách giải quyết trước: "Lúc đó cứ làm thế này"',
        'Langsung kasih solusi: "Kalau begitu, lakukan ini"'
      )),
      opt(T(
        '"다들 그 정도는 힘들어"라며 가볍게 넘긴다',
        'Brush it off: "Everyone has days like that"',
        '「みんなそのくらいはきついよ」と、軽く流す',
        '轻飘飘带过：「大家不都这么累」',
        '輕飄飄帶過：「大家不都這麼累」',
        'Gạt đi: "Ai mà chẳng mệt thế"',
        'Anggap enteng: "Orang lain juga capek kok"'
      )),
    ],
    T(
      '연인이 던진 감정 신호에 먼저 다가가 들어 주는 반응이 신뢰를 쌓습니다. 해결책이 감정 인정보다 앞서면 이해받지 못했다고 느끼기 쉽습니다.',
      'Meeting the feeling they just put on the table, and listening first, builds trust. A fix that arrives before the feeling is acknowledged often leaves them feeling unheard.',
      '相手が出した気持ちに先に寄って聞くと、信頼が積み上がります。解決策が気持ちを受け止めるより先だと、分かってもらえなかったと感じやすいです。',
      '先接住对方抛出的情绪、把话听完，信任才会攒下来。办法如果跑在感受前面，对方很容易觉得没被懂。',
      '先接住對方拋出的情緒、把話聽完，信任才會累積。辦法如果跑在感受前面，對方很容易覺得沒被懂。',
      'Đón lấy cảm xúc họ vừa đưa ra và nghe trước thì lòng tin mới dày lên. Cách giải quyết đến trước lời công nhận khiến họ dễ thấy mình không được hiểu.',
      'Menyambut perasaan yang baru diutarakan, lalu mendengar dulu, membangun rasa percaya. Solusi yang datang sebelum perasaan diakui sering terasa seperti tidak didengarkan.'
    )
  ),
  question(
    2,
    T(
      '서운한 일을 말하려 한다. 가장 좋은 첫마디는?',
      'You want to say something hurt. What is the best opening line?',
      'ちょっと寂しかったことを伝えたい。いちばんいい最初の一言は？',
      '想说出一件让你失落的事。最好的第一句话是？',
      '想說出一件讓你失落的事。最好的第一句話是？',
      'Bạn muốn nói một chuyện khiến mình tủi. Câu mở đầu nào ổn nhất?',
      'Kamu mau bilang sesuatu yang bikin kecewa. Kalimat pembuka yang paling pas?'
    ),
    T('서운함 표현', 'Saying it hurt', '寂しさの伝え方', '说出失落', '說出失落', 'Nói khi tủi', 'Bilang kalau kecewa'),
    [
      opt(T(
        '"너는 맨날 이런 식이잖아"',
        '"You always do this"',
        '「あなた、いつもこうじゃん」',
        '「你总是这样」',
        '「你總是這樣」',
        '"Lúc nào bạn cũng vậy"',
        '"Kamu memang selalu begitu"'
      )),
      opt(T(
        '"내가 이런 말까지 꼭 해야 돼?"',
        '"Do I really have to spell this out?"',
        '「こんなことまで言わせるの？」',
        '「这种话还要我开口吗？」',
        '「這種話還要我開口嗎？」',
        '"Chuyện này mà cũng phải nói ra à?"',
        '"Sampai hal begini pun harus aku yang bilang?"'
      )),
      opt(T(
        '"어제 약속이 바뀌어서 조금 서운했어. 얘기해도 될까?"',
        '"Yesterday\'s plan changed and I felt a bit let down. Can we talk about it?"',
        '「昨日の約束が変わって、ちょっと寂しかった。話してもいい？」',
        '「昨天约定改了，我有点失落。可以聊聊吗？」',
        '「昨天約定改了，我有點失落。可以聊聊嗎？」',
        '"Hôm qua kế hoạch đổi nên mình hơi tủi. Mình nói được không?"',
        '"Janji kemarin berubah, aku agak kecewa. Boleh kita omongin?"'
      ), true),
      opt(T(
        '"아니야, 아무것도 아니야"',
        '"Never mind. It is nothing"',
        '「ううん、なんでもない」',
        '「没什么，没事」',
        '「沒什麼，沒事」',
        '"Không có gì đâu"',
        '"Enggak, bukan apa-apa"'
      )),
    ],
    T(
      '구체적 상황과 내 감정을 비난 없이 말하는 부드러운 시작이 상대의 방어를 줄입니다. 일반화와 비난은 방어를, 감정 숨기기는 쌓임을 부릅니다.',
      'A soft start that names the moment and your feeling, without blame, lowers their guard. Blanket accusations make them defend. Swallowing it just stores it up.',
      '具体的な場面と自分の気持ちを、責めずに柔らかく切り出すと相手の防御が下がります。決めつけと非難は守りを、気持ちを隠すことは積み残しを生みます。',
      '用不指责的口气，说清哪件事、自己什么感受，对方就不那么防备。一概而论和指责会让人关上，把感受咽下去则会越积越多。',
      '用不指責的口氣，說清哪件事、自己什麼感受，對方就不那麼防備。一概而論和指責會讓人關上，把感受嚥下去則會越積越多。',
      'Mở đầu nhẹ, nói rõ chuyện nào và cảm giác của mình, không đổ lỗi, thì đối phương bớt phòng thủ. Quy chụp và trách móc khiến họ dựng tường. Giấu cảm xúc thì nó chất lại.',
      'Pembuka yang lembut, menyebut kejadian dan perasaanmu tanpa menyalahkan, menurunkan pertahanan dia. Menyamaratakan dan menyalahkan membuat dia bertahan. Menyimpan rasa hanya menumpuknya.'
    )
  ),
  question(
    3,
    T(
      '다툼 중 감정이 폭발할 것 같다. 가장 좋은 행동은?',
      'A fight is about to boil over. What is the best move?',
      'けんかの途中で、感情が爆発しそう。いちばんいい行動は？',
      '吵架时情绪快爆发了。最好的做法是？',
      '吵架時情緒快爆發了。最好的做法是？',
      'Đang cãi và cảm xúc sắp bùng. Cách nào ổn nhất?',
      'Lagi berantem dan emosi hampir meledak. Langkah yang paling baik?'
    ),
    T('감정 조절', 'Cooling off', 'いったん冷ます', '先冷静', '先冷靜', 'Hạ nhiệt', 'Tenang dulu'),
    [
      opt(T(
        '그 자리에서 끝까지 이야기해 결론을 낸다',
        'Stay and push until you reach a conclusion',
        'その場で最後まで話して結論を出す',
        '当场讲到底，非要得出结论',
        '當場講到底，非要得出結論',
        'Ở lại nói đến cùng cho ra kết luận',
        'Tetap di situ sampai ada kesimpulan'
      )),
      opt(T(
        '"지금 너무 흥분돼서 30분 쉬고 다시 얘기하자"고 말하고 쉰다',
        'Say you are too heated, take 30 minutes, then come back',
        '「今すごく熱くなってるから、30分休んでまた話そう」と言って休む',
        '说「我现在太激动了，休息30分钟再谈」，然后真的停一下',
        '說「我現在太激動了，休息30分鐘再談」，然後真的停一下',
        'Nói mình đang nóng quá, nghỉ 30 phút rồi nói tiếp, và nghỉ thật',
        'Bilang kamu lagi kepanasan, istirahat 30 menit, lalu lanjut'
      ), true),
      opt(T(
        '아무 말 없이 자리를 떠난다',
        'Walk out without a word',
        '何も言わずにその場を離れる',
        '一句话不说就走开',
        '一句話不說就走開',
        'Bỏ đi mà không nói gì',
        'Pergi tanpa bilang apa-apa'
      )),
      opt(T(
        '더 큰 목소리로 내 입장을 확실히 말한다',
        'Get louder so your point really lands',
        'もっと大きな声で自分の立場をはっきり言う',
        '提高音量，把自己的立场说死',
        '提高音量，把自己的立場說死',
        'Nói to hơn để lập trường của mình thật rõ',
        'Makin kencang supaya pendirianmu jelas'
      )),
    ],
    T(
      '감정이 과열되면 생각하고 듣는 힘이 떨어져 대화가 비생산적이 됩니다. 쉬는 시간을 먼저 말하고 진정된 뒤 돌아오는 것이 좋습니다. 말없이 떠나는 것은 담을 쌓는 것으로 읽힙니다.',
      'Once you are flooded, thinking and listening drop off and the talk stops working. Name the pause, cool down, then come back. Leaving in silence reads as shutting them out.',
      '感情が熱くなりすぎると、考えて聞く力が落ちて会話が空回りします。休む時間を先に言って、落ち着いてから戻るのがいいです。黙って離れるのは壁を作ることに見えます。',
      '情绪过热时，想和听的能力都会掉下来，谈下去也谈不出东西。先说要暂停，冷静了再回来。一声不吭离开，会被看成在筑墙。',
      '情緒過熱時，想和聽的能力都會掉下來，談下去也談不出東西。先說要暫停，冷靜了再回來。一聲不吭離開，會被看成在築牆。',
      'Khi cảm xúc ngập, khả năng nghĩ và nghe giảm, cuộc nói chuyện không còn ích. Nói trước là cần nghỉ, dịu lại rồi quay lại. Lặng lẽ bỏ đi trông như dựng tường.',
      'Kalau emosi sudah meluap, berpikir dan mendengar melemah, obrolannya mandek. Sebut jedanya dulu, tenang, lalu kembali. Pergi tanpa kata terdengar seperti membangun tembok.'
    )
  ),
  question(
    4,
    T(
      '연인이 약속에 30분 늦었는데 이유를 모른다. 가장 좋은 반응은?',
      'They are 30 minutes late and you do not know why. What is the best response?',
      '約束に30分遅れた。理由はまだ分からない。いちばんいい反応は？',
      '对方约会迟到了30分钟，你还不知道原因。最好的反应是？',
      '對方約會遲到了30分鐘，你還不知道原因。最好的反應是？',
      'Người ấy trễ hẹn 30 phút và bạn chưa biết lý do. Phản ứng nào ổn nhất?',
      'Dia telat 30 menit dan kamu belum tahu kenapa. Respons yang paling baik?'
    ),
    T('사실 확인', 'Check the facts', 'まず事実を聞く', '先问清楚', '先問清楚', 'Hỏi cho rõ', 'Cek faktanya dulu'),
    [
      opt(T(
        '"또 늦었네, 나를 우습게 보는 거지?"',
        '"Late again. You do not take me seriously, do you?"',
        '「また遅れた。私のこと、軽く見てるんでしょ」',
        '「又迟到，是不是没把我当回事？」',
        '「又遲到，是不是沒把我當回事？」',
        '"Lại trễ. Bạn coi thường tôi à?"',
        '"Telat lagi. Kamu anggap aku enteng ya?"'
      )),
      opt(T(
        '말없이 표정으로만 티를 낸다',
        'Say nothing and let your face do the talking',
        '何も言わず、表情だけで示す',
        '不说话，只用脸色表示',
        '不說話，只用臉色表示',
        'Không nói, chỉ để mặt nói hộ',
        'Diam, biarkan wajah yang bicara'
      )),
      opt(T(
        '도착하자마자 지난 지각까지 모두 꺼낸다',
        'The moment they arrive, list every past late arrival',
        '着いた瞬間に、これまでの遅刻も全部出す',
        '人一到，把以前的迟到也全翻出来',
        '人一到，把以前的遲到也全翻出來',
        'Vừa thấy mặt đã lôi hết những lần trễ trước',
        'Begitu dia datang, semua telat yang lama ikut dibuka'
      )),
      opt(T(
        '이유를 먼저 묻고, 기다린 점은 담담히 전한다',
        'Ask what happened first, then say calmly that the wait was hard',
        '理由を先に聞き、待っていたことは落ち着いて伝える',
        '先问原因，再平静地说自己等了多久',
        '先問原因，再平靜地說自己等了多久',
        'Hỏi lý do trước, rồi nói đều đều rằng mình đã đợi',
        'Tanya alasannya dulu, lalu sampaikan dengan tenang bahwa kamu menunggu'
      ), true),
    ],
    T(
      '상대의 의도를 단정하지 않고 사실을 확인한 뒤 내 감정과 영향을 말하는 것이 갈등이 번지는 것을 막습니다. 지난 일을 한꺼번에 꺼내면 문제의 초점이 흐려집니다.',
      'Do not decide their motive for them. Check what happened, then say how it landed on you. That keeps the fight from spreading. Dragging in every old lateness blurs what you are actually talking about.',
      '相手の意図を決めつけず、事実を確かめてから自分の気持ちと影響を伝えると、争いが広がりにくいです。過去を一度に出すと、今の話の焦点がぼけます。',
      '不要替对方断定动机。先问清事实，再说这件事对你的影响，争吵就不容易蔓延。把以前的迟到一次翻完，眼前这件事的焦点就散了。',
      '不要替對方斷定動機。先問清事實，再說這件事對你的影響，爭吵就不容易蔓延。把以前的遲到一次翻完，眼前這件事的焦點就散了。',
      'Đừng kết luận ý họ. Hỏi chuyện đã xảy ra, rồi nói nó ảnh hưởng đến mình thế nào, xung đột mới không lan. Lôi hết chuyện cũ ra thì trọng tâm bị loãng.',
      'Jangan putuskan niatnya. Cek dulu apa yang terjadi, lalu sampaikan dampaknya padamu. Itu menahan konflik agar tidak melebar. Mengangkat semua telat lama membuat fokusnya kabur.'
    )
  ),
  question(
    5,
    T(
      '연인이 친구 모임에 가는 날이다. 가장 건강한 반응은?',
      'They are going out with friends tonight. What is the healthiest response?',
      '恋人が友人との集まりに行く日。いちばん健全な反応は？',
      '恋人今天要去跟朋友聚会。最健康的反应是？',
      '戀人今天要去跟朋友聚會。最健康的反應是？',
      'Hôm nay người ấy đi gặp bạn bè. Phản ứng nào lành mạnh nhất?',
      'Hari ini pacar pergi kumpul dengan teman-temannya. Respons yang paling sehat?'
    ),
    T('개인 시간', 'Their own time', 'それぞれの時間', '各自的时间', '各自的時間', 'Thời gian riêng', 'Waktu sendiri'),
    [
      opt(T(
        '누구와 있는지 수시로 연락해 확인한다',
        'Keep texting to check who they are with',
        '誰といるのか、何度も連絡して確認する',
        '不停发消息，确认对方跟谁在一起',
        '不停傳訊息，確認對方跟誰在一起',
        'Nhắn liên tục để kiểm tra họ đang với ai',
        'Terus chat untuk cek dia sedang dengan siapa'
      )),
      opt(T(
        '가지 말라고 설득한다',
        'Try to talk them out of going',
        '行かないよう説得する',
        '劝对方别去',
        '勸對方別去',
        'Thuyết phục họ đừng đi',
        'Membujuk dia supaya tidak pergi'
      )),
      opt(T(
        '즐겁게 다녀오라 하고 내 시간을 보낸 뒤 돌아오면 이야기를 들어 준다',
        'Tell them to have fun, use your own time, and listen when they get back',
        '楽しんできてと送り、自分の時間を過ごして、帰ってきたら話を聞く',
        '让对方玩得开心，自己过自己的时间，回来再听他们讲',
        '讓對方玩得開心，自己過自己的時間，回來再聽他們講',
        'Bảo họ đi vui, dùng thời gian của mình, về thì nghe họ kể',
        'Suruh dia pergi senang-senang, isi waktumu sendiri, lalu dengar ceritanya saat pulang'
      ), true),
      opt(T(
        '서운해하며 연락을 끊고 상대가 오기를 기다린다',
        'Go quiet because you feel hurt, and wait for them to come to you',
        '寂しくなって連絡を断ち、相手から来るのを待つ',
        '心里失落，就断了联系，等对方来找你',
        '心裡失落，就斷了聯絡，等對方來找你',
        'Tủi nên im hơi, chờ họ phải tìm đến mình',
        'Kecewa lalu putus kontak, menunggu dia yang datang'
      )),
    ],
    T(
      '각자의 시간과 관계망을 존중하는 것이 만족과 신뢰에 도움이 됩니다. 수시 확인과 설득은 믿음이 부족하다는 신호로 전달됩니다.',
      'Respecting each person\'s time and friends supports both satisfaction and trust. Constant check-ins and talking them out of it land as "I do not trust you."',
      'それぞれの時間と人間関係を尊重すると、満足と信頼につながります。何度も確認したり引き止めたりすると、信じていないサインとして届きます。',
      '尊重彼此的时间和朋友圈，关系才容易满足、也更有信任。不停确认、劝对方别去，传递的是「我不信任你」。',
      '尊重彼此的時間和朋友圈，關係才容易滿足、也更有信任。不停確認、勸對方別去，傳遞的是「我不信任你」。',
      'Tôn trọng thời gian và bạn bè của nhau giúp cả hai thấy ổn và tin nhau hơn. Hỏi dồn và giữ lại bị đọc là thiếu tin.',
      'Menghargai waktu dan lingkaran teman masing-masing menopang rasa puas dan percaya. Mengecek terus dan membujuk agar tidak pergi terbaca sebagai kurang percaya.'
    )
  ),
  question(
    6,
    T(
      '다툰 뒤 연인이 사과했다. 가장 도움이 되는 반응은?',
      'After a fight, they apologize. What helps most?',
      'けんかのあと、恋人が謝ってきた。いちばん助けになる反応は？',
      '吵完架，恋人道歉了。最有帮助的回应是？',
      '吵完架，戀人道歉了。最有幫助的回應是？',
      'Sau khi cãi, người ấy xin lỗi. Phản ứng nào giúp được nhiều nhất?',
      'Setelah berantem, dia minta maaf. Respons yang paling membantu?'
    ),
    T('회복 시도', 'Taking the apology', '仲直りを受け取る', '接住道歉', '接住道歉', 'Nhận lời xin lỗi', 'Terima permintaan maaf'),
    [
      opt(T(
        '사과를 받아들이고 앞으로 바라는 점을 한 가지 말한다',
        'Accept it, and name one thing you want next time',
        '謝罪を受け取って、これから望むことを一つ伝える',
        '接受道歉，并说出一件以后希望对方做到的事',
        '接受道歉，並說出一件以後希望對方做到的事',
        'Nhận lời xin lỗi, và nói một điều mình mong lần sau',
        'Terima maafnya, lalu sebut satu hal yang kamu harapkan berikutnya'
      ), true),
      opt(T(
        '"말로만 사과하면 뭐해"라고 말한다',
        '"What good is an apology that is only words?"',
        '「口だけで謝ってどうするの」と言う',
        '说「光嘴上道歉有什么用」',
        '說「光嘴上道歉有什麼用」',
        '"Xin lỗi bằng lời thì để làm gì"',
        '"Minta maaf cuma di mulut, buat apa"'
      )),
      opt(T(
        '사과했으니 됐다며 서운함을 모두 접는다',
        'Say it is fine now, and bury everything you still feel',
        '謝ったからいいと、寂しさを全部しまう',
        '说既然道歉了就算了，把失落全部压下去',
        '說既然道歉了就算了，把失落全部壓下去',
        'Bảo xin lỗi rồi thì thôi, và giấu hết phần còn tủi',
        'Bilang sudah cukup karena dia minta maaf, lalu simpan semua rasa kecewanya'
      )),
      opt(T(
        '지난 잘못까지 하나씩 꺼내 확인한다',
        'Use the moment to go through every old mistake',
        'これまでの失敗も一つずつ出して確認する',
        '把以前的错也一件件翻出来对质',
        '把以前的錯也一件件翻出來對質',
        'Nhân lúc này lôi từng lỗi cũ ra kiểm',
        'Pakai momen ini untuk mengungkit satu per satu kesalahan lama'
      )),
    ],
    T(
      '상대가 내민 회복 시도를 받아 주고 바라는 점을 구체적으로 말하면 갈등이 마무리됩니다. 서운함을 눌러 두면 쌓이고, 과거를 꺼내면 새로운 다툼이 됩니다.',
      'Taking the repair they offered, and saying one specific thing you still need, lets the fight end. Burying the hurt stores it. Reopening the past starts a new fight.',
      '相手が出した仲直りを受け取って、望むことを具体的に伝えると争いは一段落します。寂しさを押し込むと積もり、過去を出すと新しいけんかになります。',
      '接住对方递来的和好，再说清一件你还希望的事，这场架才收得住。把失落压下去会积着，翻旧账会开一场新的架。',
      '接住對方遞來的和好，再說清一件你還希望的事，這場架才收得住。把失落壓下去會積著，翻舊帳會開一場新的架。',
      'Nhận nỗ lực làm lành họ đưa ra, rồi nói cụ thể một điều mình còn cần, xung đột mới khép lại. Nhấn cảm xúc xuống thì nó chất. Lôi quá khứ ra thì thành cuộc cãi mới.',
      'Menerima upaya baikan yang dia ulurkan, lalu menyebut satu hal yang masih kamu butuhkan, menutup konfliknya. Menekan rasa kecewa menumpuknya. Mengungkit masa lalu membuka pertengkaran baru.'
    )
  ),
  question(
    7,
    T(
      '썸 상대의 호감 신호가 애매하다. 가장 효과적인 확인 방법은?',
      'You are not sure the person you are talking to likes you back. What is the most useful way to find out?',
      'いい感じの相手の脈が読めない。いちばん効果的な確かめ方は？',
      '暧昧对象的好感信号说不准。最有效的确认方式是？',
      '曖昧對象的好感信號說不準。最有效的確認方式是？',
      'Tín hiệu của người đang tán không rõ. Cách kiểm tra hiệu quả nhất là gì?',
      'Sinyal dari orang yang lagi PDKT masih abu-abu. Cara paling berguna untuk memastikannya?'
    ),
    T('호감 확인', 'Checking interest', '脈を確かめる', '确认好感', '確認好感', 'Xem họ có thích không', 'Cek dia suka atau tidak'),
    [
      opt(T(
        '친구들에게 해석만 물어보며 기다린다',
        'Keep asking friends to decode it, and wait',
        '友達に解釈だけ聞いて、待ち続ける',
        '只问朋友怎么解读，然后干等',
        '只問朋友怎麼解讀，然後乾等',
        'Chỉ hỏi bạn bè diễn giải hộ, rồi ngồi chờ',
        'Terus tanya teman artinya apa, lalu menunggu'
      )),
      opt(T(
        '일부러 연락을 끊고 반응을 지켜본다',
        'Go silent on purpose and watch what they do',
        'わざと連絡を断って反応を見る',
        '故意断联，看对方什么反应',
        '故意斷聯，看對方什麼反應',
        'Cố tình im để xem họ phản ứng thế nào',
        'Sengaja putus kontak dan lihat reaksinya'
      )),
      opt(T(
        '확신이 생길 때까지 아무 행동도 하지 않는다',
        'Do nothing until you feel sure',
        '確信が持てるまで、何もしない',
        '没有十足把握之前什么都不做',
        '沒有十足把握之前什麼都不做',
        'Không làm gì cho đến khi chắc chắn',
        'Tidak melakukan apa-apa sampai merasa yakin'
      )),
      opt(T(
        '가볍게 만남을 제안해 상대의 반응으로 확인한다',
        'Suggest a low-pressure plan and read their response',
        '軽く会う提案をして、相手の反応で確かめる',
        '轻松约一次见面，用对方的反应来确认',
        '輕鬆約一次見面，用對方的反應來確認',
        'Rủ gặp nhẹ nhàng và xem họ đáp lại thế nào',
        'Ajak ketemu dengan santai, lalu baca responsnya'
      ), true),
    ],
    T(
      '혼자 해석하는 것보다 부담이 낮은 행동으로 확인하는 편이 정확하고 빠릅니다. 연락을 끊어 떠보는 방식은 오해를 만들 수 있습니다.',
      'A small, low-pressure move tells you more, and faster, than interpreting it alone. Going silent to test them is an easy way to create a misunderstanding.',
      '一人で読み解くより、負担の小さい行動で確かめるほうが正確で早いです。連絡を断って試すやり方は誤解を生みやすいです。',
      '用一次负担不大的行动去确认，比自己反复解读更准，也更快。故意断联来试探，很容易制造误会。',
      '用一次負擔不大的行動去確認，比自己反覆解讀更準，也更快。故意斷聯來試探，很容易製造誤會。',
      'Một bước nhỏ, ít áp lực, cho biết chính xác và nhanh hơn là tự suy diễn. Im lặng để thử người ấy dễ sinh hiểu lầm.',
      'Langkah kecil yang tidak menekan memberi jawaban lebih akurat dan lebih cepat daripada menafsirkannya sendirian. Memutus kontak untuk menguji dia mudah menimbulkan salah paham.'
    )
  ),
  question(
    8,
    T(
      '연인이 "너 그 옷 좀 별로다ㅋㅋ"라고 농담처럼 말했다. 속상했다면?',
      'They joke, "That outfit is kind of a miss lol." It stung. What should you do?',
      '恋人が「その服、ちょっと微妙だね笑」と冗談っぽく言った。傷ついたなら？',
      '恋人用开玩笑的口气说「你那件衣服有点不行哈哈」。如果你难受了？',
      '戀人用開玩笑的口氣說「你那件衣服有點不行哈哈」。如果你難受了？',
      'Người ấy nói kiểu đùa: "Bộ đó hơi thất bại đó." Bạn thấy tổn thương thì sao?',
      'Dia bercanda, "Baju itu kurang banget sih wkwk." Kalau kamu tersinggung, apa yang sebaiknya dilakukan?'
    ),
    T('경계 말하기', 'A short boundary', '境界を短く伝える', '说出界限', '說出界線', 'Nói ranh giới', 'Bilang batasnya'),
    [
      opt(T(
        '같이 웃으며 받아치고 속상함을 숨긴다',
        'Laugh along and hide that it hurt',
        '一緒に笑って受け流し、傷ついたことは隠す',
        '跟着笑过去，把难受藏起来',
        '跟著笑過去，把難受藏起來',
        'Cười theo và giấu chuyện mình bị tổn thương',
        'Ikut tertawa dan sembunyikan bahwa kamu tersinggung'
      )),
      opt(T(
        '"농담이어도 그 말은 조금 속상했어"라고 짧게 말한다',
        'Say briefly, "Even as a joke, that one stung a little"',
        '「冗談でも、その言葉はちょっと傷ついた」と短く言う',
        '短短说一句：「就算是玩笑，这句话我也有点难受」',
        '短短說一句：「就算是玩笑，這句話我也有點難受」',
        'Nói ngắn: "Dù là đùa, câu đó làm mình hơi tổn thương"',
        'Bilang singkat: "Meski bercanda, kalimat itu agak menyakitkan"'
      ), true),
      opt(T(
        '말없이 그 옷을 다시는 입지 않는다',
        'Never wear it again, and never say why',
        '何も言わず、その服を二度と着ない',
        '什么都不说，那件衣服再也不穿',
        '什麼都不說，那件衣服再也不穿',
        'Không nói gì và không bao giờ mặc bộ đó nữa',
        'Tidak bilang apa-apa dan tidak pernah memakai baju itu lagi'
      )),
      opt(T(
        '똑같이 상대의 외모를 지적해 되갚는다',
        'Hit back by criticizing how they look',
        '同じように相手の見た目を指摘して返す',
        '同样挑对方的外表来还回去',
        '同樣挑對方的外表來還回去',
        'Trả đũa bằng cách chê ngoại hình của họ',
        'Membalas dengan mengkritik penampilannya'
      )),
    ],
    T(
      '경계는 비난 없이 짧은 말로 전하는 것이 좋습니다. 숨기면 같은 말이 반복되고, 되갚기는 비꼬는 말이 오가는 악순환으로 이어집니다.',
      'A boundary lands best as one short line, without an attack. Hide it and the comment comes back. Hit back and you start a loop of digs.',
      '境界は責めずに短い一言で伝えるのがいいです。隠すと同じ言葉が繰り返され、やり返すと嫌みの応酬になります。',
      '界限用一句短话、不带指责地说出来最好。藏着，同样的话还会再来。还回去，就变成互相挖苦的循环。',
      '界線用一句短話、不帶指責地說出來最好。藏著，同樣的話還會再來。還回去，就變成互相挖苦的循環。',
      'Ranh giới nên là một câu ngắn, không tấn công. Giấu đi thì câu đó lặp lại. Trả đũa thì thành vòng châm chọc.',
      'Batas paling enak disampaikan dalam satu kalimat pendek, tanpa menyerang. Disembunyikan, komentar yang sama kembali. Dibalas, jadi putaran sindiran.'
    )
  ),
  question(
    9,
    T(
      '연락 빈도에 대한 기대가 서로 다른 것 같다. 가장 좋은 방법은?',
      'You seem to want different amounts of texting. What works best?',
      '連絡の頻度について、期待がすれ違っている。いちばんいい方法は？',
      '两人对联系频率的期待好像不一样。最好的做法是？',
      '兩人對聯絡頻率的期待好像不一樣。最好的做法是？',
      'Hai người có vẻ kỳ vọng tần suất nhắn tin khác nhau. Cách nào ổn nhất?',
      'Kalian sepertinya mengharapkan frekuensi chat yang berbeda. Cara yang paling baik?'
    ),
    T('기대 조율', 'Matching expectations', '期待を合わせる', '把期待说开', '把期待說開', 'Nói kỳ vọng', 'Samakan harapan'),
    [
      opt(T(
        '서운함을 숨기고 상대에게 맞춘다',
        'Hide the disappointment and just match them',
        '寂しさを隠して相手に合わせる',
        '藏起失落，一律迁就对方',
        '藏起失落，一律遷就對方',
        'Giấu sự tủi và chiều theo họ',
        'Sembunyikan kekecewaan dan ikut saja maunya dia'
      )),
      opt(T(
        '더 자주 연락해서 확신을 얻으려 한다',
        'Text even more, hoping that creates certainty',
        'もっと頻繁に連絡して、安心を得ようとする',
        '联系得更勤，想靠这个获得确定感',
        '聯絡得更勤，想靠這個獲得確定感',
        'Nhắn dày hơn để tìm cảm giác chắc chắn',
        'Makin sering chat, berharap itu memberi kepastian'
      )),
      opt(T(
        '편한 때에 서로 편한 연락 빈도를 솔직히 묻고 조율한다',
        'On a calm day, ask what pace works for both of you and adjust',
        '落ち着いたときに、お互いが楽な連絡の頻度を率直に聞いて合わせる',
        '挑一个轻松的时候，老实说各自舒服的频率，再一起调整',
        '挑一個輕鬆的時候，老實說各自舒服的頻率，再一起調整',
        'Lúc cả hai đang ổn, hỏi thẳng tần suất nào dễ chịu rồi chỉnh cho khớp',
        'Saat suasana sedang enak, tanya jujur ritme chat yang nyaman bagi kalian berdua, lalu sesuaikan'
      ), true),
      opt(T(
        '연락을 줄여 상대 반응을 시험한다',
        'Text less on purpose to test their reaction',
        '連絡を減らして相手の反応を試す',
        '故意少联系，试探对方的反应',
        '故意少聯絡，試探對方的反應',
        'Cố tình nhắn ít đi để thử phản ứng',
        'Sengaja mengurangi chat untuk menguji reaksinya'
      )),
    ],
    T(
      '말하지 않은 기대는 실망으로 돌아옵니다. 감정이 가라앉은 때에 기대를 말로 꺼내 맞추는 것이 가장 효과적입니다.',
      'An expectation you never say out loud comes back as disappointment. The useful moment is when you are both calm: put the pace into words and meet in the middle.',
      '口にしていない期待は、失望になって返ってきます。気持ちが落ち着いているときに期待を言葉にして合わせるのがいちばん効きます。',
      '没说出口的期待，最后都会变成失望。等情绪平了，把期待说出来再对齐，最有效。',
      '沒說出口的期待，最後都會變成失望。等情緒平了，把期待說出來再對齊，最有效。',
      'Kỳ vọng không nói ra sẽ quay lại thành thất vọng. Lúc cả hai đã dịu, đưa kỳ vọng ra thành lời rồi chỉnh cho khớp là hiệu quả nhất.',
      'Harapan yang tidak diucapkan kembali sebagai kekecewaan. Saat perasaan sudah reda, ucapkan harapannya dan temukan titik tengah. Itu yang paling manjur.'
    )
  ),
  question(
    10,
    T(
      '다툰 뒤 어색한 하루가 지났다. 가장 좋은 행동은?',
      'A day has passed since the fight and things still feel awkward. What is the best move?',
      'けんかのあと、気まずい一日が過ぎた。いちばんいい行動は？',
      '吵完已经尴尬地过了一天。最好的做法是？',
      '吵完已經尷尬地過了一天。最好的做法是？',
      'Đã qua một ngày ngượng sau cuộc cãi. Cách nào ổn nhất?',
      'Sudah lewat sehari yang canggung setelah berantem. Langkah yang paling baik?'
    ),
    T('화해 시도', 'Reaching out', '自分から仲直り', '先伸手', '先伸手', 'Chủ động làm lành', 'Mulai baikan'),
    [
      opt(T(
        '먼저 "어제 일 이야기해 보고 싶어"라고 손을 내민다',
        'Go first: "I want to talk about yesterday"',
        '先に「昨日のこと、話したい」と手を差し伸べる',
        '先开口：「昨天的事，我想聊聊」',
        '先開口：「昨天的事，我想聊聊」',
        'Chủ động: "Mình muốn nói về chuyện hôm qua"',
        'Mulai duluan: "Aku mau bahas soal kemarin"'
      ), true),
      opt(T(
        '상대가 먼저 다가오길 기다린다',
        'Wait for them to come to you',
        '相手から来るのを待つ',
        '等对方先来找你',
        '等對方先來找你',
        'Chờ họ phải bước tới trước',
        'Menunggu dia yang datang lebih dulu'
      )),
      opt(T(
        '아무 일 없었던 듯 평소처럼 지낸다',
        'Act like nothing happened',
        '何もなかったように普段どおり過ごす',
        '装作没事，照常过',
        '裝作沒事，照常過',
        'Sống như chưa có chuyện gì',
        'Bertingkah seolah tidak ada apa-apa'
      )),
      opt(T(
        'SNS에 속상한 마음을 올려 상대가 보게 한다',
        'Post how hurt you are so they will see it',
        '傷ついた気持ちをSNSに上げて、相手に見せる',
        '把难受发到社交平台，让对方看见',
        '把難受發到社群平台，讓對方看見',
        'Đăng tâm trạng tổn thương lên mạng để họ thấy',
        'Unggah rasa sakitnya di media sosial supaya dia melihat'
      )),
    ],
    T(
      '누가 먼저든 화해의 시도를 하는 것이 갈등을 풀어 줍니다. 풀리지 않은 갈등은 없어지지 않고 쌓이며, 간접적인 신호는 오해를 키웁니다.',
      'Someone has to reach first, and that reach is what loosens the fight. An unresolved conflict does not vanish. It stacks. A hint posted sideways mostly grows the misunderstanding.',
      'どちらからでも、仲直りを切り出すことが争いをほどきます。解けないままの争いは消えずに積もり、遠回しなサインは誤解を大きくします。',
      '谁先伸手都可以，伸手这件事本身才能把架松开。没解开的冲突不会消失，只会堆着。绕弯子的信号大多只会把误会养大。',
      '誰先伸手都可以，伸手這件事本身才能把架鬆開。沒解開的衝突不會消失，只會堆著。繞彎子的信號大多只會把誤會養大。',
      'Ai chủ động cũng được, và chính việc chủ động mới tháo được cuộc cãi. Xung đột chưa giải không biến mất, nó chất lại. Tín hiệu vòng vo thường làm hiểu lầm to hơn.',
      'Siapa yang memulai tidak masalah. Yang melonggarkan konflik adalah upaya itu sendiri. Konflik yang tidak diselesaikan tidak hilang, ia menumpuk. Isyarat tidak langsung biasanya membesarkan salah paham.'
    )
  ),
  question(
    11,
    T(
      '연인이 "요즘 혼자 시간이 좀 필요해"라고 말했다. 가장 좋은 반응은?',
      'They say, "I need a little time to myself lately." What is the best response?',
      '恋人が「最近、一人の時間が少し必要」と言った。いちばんいい反応は？',
      '恋人说「最近我需要一点自己的时间」。最好的反应是？',
      '戀人說「最近我需要一點自己的時間」。最好的反應是？',
      'Người ấy nói: "Dạo này mình cần một chút thời gian một mình." Phản ứng nào ổn nhất?',
      'Dia bilang, "Belakangan ini aku butuh sedikit waktu sendiri." Respons yang paling baik?'
    ),
    T('거리 존중', 'Giving space', '距離を尊重する', '尊重距离', '尊重距離', 'Tôn trọng khoảng cách', 'Hargai jarak'),
    [
      opt(T(
        '이별 신호로 단정하고 이유를 캐묻는다',
        'Decide it means a breakup and interrogate them',
        '別れのサインだと決めて、理由を問い詰める',
        '断定这是分手信号，追问原因',
        '斷定這是分手信號，追問原因',
        'Kết luận đó là dấu hiệu chia tay và hỏi dồn lý do',
        'Putuskan itu sinyal putus, lalu interogasi alasannya'
      )),
      opt(T(
        '서운해서 똑같이 거리를 둔다',
        'Feel hurt and pull away the same amount',
        '寂しくて、同じように距離を置く',
        '因为失落，也同样拉开距离',
        '因為失落，也同樣拉開距離',
        'Tủi nên cũng giữ khoảng cách y như vậy',
        'Kecewa, lalu menjauh dengan kadar yang sama'
      )),
      opt(T(
        '이유를 말할 때까지 계속 연락한다',
        'Keep texting until they explain',
        '理由を言うまで連絡し続ける',
        '一直联系，直到对方说出原因',
        '一直聯絡，直到對方說出原因',
        'Nhắn tiếp cho đến khi họ nói lý do',
        'Terus menghubungi sampai dia menjelaskan'
      )),
      opt(T(
        '알겠다고 하고 언제쯤 다시 이야기할지 가볍게 묻고 기다린다',
        'Say okay, ask lightly when you can talk again, and wait',
        '分かったと伝え、いつ頃また話すか軽く聞いて待つ',
        '说知道了，轻松问大概什么时候再聊，然后等',
        '說知道了，輕鬆問大概什麼時候再聊，然後等',
        'Nói được, hỏi nhẹ khi nào nói lại, rồi đợi',
        'Bilang oke, tanya ringan kapan bisa ngobrol lagi, lalu tunggu'
      ), true),
    ],
    T(
      '혼자 있는 시간의 필요를 존중하고 다시 이야기할 시점을 맞추면 안정감이 생깁니다. 쫓을수록 더 물러나는 악순환을 피할 수 있습니다.',
      'Respecting the need for time alone, and agreeing when you will talk again, creates steadiness. Chase harder and they step further back.',
      '一人の時間の必要を尊重し、また話すタイミングを合わせると安心が生まれます。追うほど相手が引く悪循環を避けられます。',
      '尊重对方需要独处，并约好大概什么时候再谈，关系才稳。越追，对方越往后退。',
      '尊重對方需要獨處，並約好大概什麼時候再談，關係才穩。越追，對方越往後退。',
      'Tôn trọng nhu cầu ở một mình và hẹn lúc nói lại tạo cảm giác vững. Càng đuổi, họ càng lùi.',
      'Menghargai kebutuhan waktu sendiri dan menyepakati kapan bicara lagi memberi rasa tenang. Makin dikejar, dia makin mundur.'
    )
  ),
  question(
    12,
    T(
      '내가 기념일을 깜빡했다. 가장 좋은 대응은?',
      'You forgot an anniversary. What is the best response?',
      '記念日をうっかり忘れた。いちばんいい対応は？',
      '你忘了纪念日。最好的应对是？',
      '你忘了紀念日。最好的應對是？',
      'Bạn quên một ngày kỷ niệm. Cách xử lý nào ổn nhất?',
      'Kamu lupa hari spesial. Respons yang paling baik?'
    ),
    T('사과와 만회', 'Owning it', '謝って取り戻す', '认错并补救', '認錯並補救', 'Nhận lỗi và bù', 'Minta maaf dan perbaiki'),
    [
      opt(T(
        '바빴다는 이유부터 설명한다',
        'Lead with how busy you were',
        '忙しかった理由から説明する',
        '先解释自己有多忙',
        '先解釋自己有多忙',
        'Giải thích mình bận trước',
        'Mulai dengan alasan kamu sibuk'
      )),
      opt(T(
        '잘못을 인정하고 미안함을 표현한 뒤 만회할 방법을 제안한다',
        'Own it, say you are sorry, and offer a way to make it up',
        '非を認めてごめんと言い、取り戻す方法を提案する',
        '承认是自己的错，说对不起，再提出补救的办法',
        '承認是自己的錯，說對不起，再提出補救的辦法',
        'Nhận lỗi, nói xin lỗi, rồi đề nghị cách bù',
        'Akui kesalahan, minta maaf, lalu tawarkan cara memperbaikinya'
      ), true),
      opt(T(
        '"너도 내 생일 못 챙겼잖아"라고 반박한다',
        '"You missed my birthday too"',
        '「あなたも私の誕生日、覚えてなかったじゃん」と反論する',
        '反驳：「你不也没记得我的生日」',
        '反駁：「你不也沒記得我的生日」',
        '"Bạn cũng quên sinh nhật tôi mà"',
        '"Kamu juga lupa ulang tahunku"'
      )),
      opt(T(
        '별일 아니라며 넘어간다',
        'Wave it off as no big deal',
        '大したことないよと流す',
        '说没什么大不了，翻篇',
        '說沒什麼大不了，翻篇',
        'Bảo không có gì và bỏ qua',
        'Anggap bukan masalah besar dan lewatkan'
      )),
    ],
    T(
      '변명과 반격은 갈등을 키웁니다. 책임을 인정하고 행동으로 만회하는 것이 신뢰를 되돌리는 데 가장 효과적입니다.',
      'Excuses and counterattacks grow the fight. Owning it and repairing it with an action is what brings trust back.',
      '言い訳と反撃は争いを大きくします。責任を認めて行動で取り戻すのが、信頼を戻すのにいちばん効きます。',
      '辩解和反击会把冲突养大。承认责任，再用行动补上，最能把信任找回来。',
      '辯解和反擊會把衝突養大。承認責任，再用行動補上，最能把信任找回來。',
      'Bào chữa và phản công làm xung đột to hơn. Nhận trách nhiệm rồi bù bằng hành động là cách hiệu quả nhất để lấy lại niềm tin.',
      'Alasan dan serangan balik membesarkan konflik. Mengakui tanggung jawab lalu memperbaikinya dengan tindakan adalah cara paling manjur mengembalikan kepercayaan.'
    )
  ),
  question(
    13,
    T(
      '데이트 비용에 대한 생각이 서로 다르다. 가장 좋은 방법은?',
      'You do not see date expenses the same way. What works best?',
      'デート代の考え方に差がある。いちばんいい方法は？',
      '两人对约会花费的想法不一样。最好的做法是？',
      '兩人對約會花費的想法不一樣。最好的做法是？',
      'Hai người nghĩ khác nhau về tiền hẹn hò. Cách nào ổn nhất?',
      'Kalian beda pandangan soal biaya kencan. Cara yang paling baik?'
    ),
    T('돈 합의', 'The money talk', 'お金の話し合い', '把钱说开', '把錢說開', 'Bàn chuyện tiền', 'Ngomongin uang'),
    [
      opt(T(
        '불만을 참고 내가 더 부담한다',
        'Swallow the resentment and pay more yourself',
        '不満をこらえて、自分が多めに出す',
        '忍着不满，自己多承担',
        '忍著不滿，自己多承擔',
        'Nuốt sự khó chịu và tự gánh nhiều hơn',
        'Tahan kekesalan dan menanggung lebih banyak sendiri'
      )),
      opt(T(
        '쌓아 두었다가 한 번에 터뜨린다',
        'Store it up and explode all at once',
        'ためておいて、一度に爆発させる',
        '攒着，然后一次爆发',
        '攢著，然後一次爆發',
        'Chất lại rồi bùng một lần',
        'Ditimbun, lalu meledak sekaligus'
      )),
      opt(T(
        '평소 편한 때에 각자의 기준을 이야기하고 합의한다',
        'On an ordinary calm day, say what feels fair to each of you and agree',
        '普段の落ち着いたときに、それぞれの基準を話して合意する',
        '挑平时轻松的时候，说说各自的标准，再达成共识',
        '挑平時輕鬆的時候，說說各自的標準，再達成共識',
        'Lúc đang bình thường và dễ nói, kể tiêu chuẩn của mỗi người rồi thống nhất',
        'Saat hari biasa sedang enak, ceritakan patokan masing-masing lalu sepakati'
      ), true),
      opt(T(
        '상대가 알아서 맞춰 주기를 기대한다',
        'Hope they notice and adjust on their own',
        '相手が察して合わせてくれることを期待する',
        '指望对方自己看出来并配合',
        '指望對方自己看出來並配合',
        'Hy vọng họ tự hiểu và tự điều chỉnh',
        'Berharap dia mengerti sendiri dan menyesuaikan'
      )),
    ],
    T(
      '돈과 시간 같은 차이는 숨기면 커지고, 다투는 중이 아닌 편한 시점에 이야기해야 합의가 쉽습니다. 말하지 않은 기대는 거의 전달되지 않습니다.',
      'Differences about money and time grow when you hide them. They are easier to settle on a calm day, not in the middle of a fight. An unspoken hope almost never arrives.',
      'お金や時間の差は隠すと大きくなり、けんかの最中ではなく落ち着いたときに話すと合意しやすいです。口にしていない期待は、ほとんど届きません。',
      '钱和时间这类差别，藏着会变大。不在吵架时、而在轻松的时候谈，才容易谈拢。没说出口的期待，几乎传不到对方那里。',
      '錢和時間這類差別，藏著會變大。不在吵架時、而在輕鬆的時候談，才容易談攏。沒說出口的期待，幾乎傳不到對方那裡。',
      'Khác biệt về tiền và thời gian càng giấu càng to. Nói lúc đang dễ, không phải giữa lúc cãi, thì mới dễ thống nhất. Kỳ vọng không nói ra gần như không tới được người kia.',
      'Perbedaan soal uang dan waktu membesar kalau disembunyikan. Lebih mudah disepakati di hari yang tenang, bukan di tengah pertengkaran. Harapan yang tidak diucapkan hampir tidak pernah sampai.'
    )
  ),
  question(
    14,
    T(
      '연인의 SNS에 이성의 친근한 댓글이 달린 것을 봤고 신경이 쓰인다. 가장 좋은 대응은?',
      'A friendly comment from someone else on their social post is bothering you. What is the best response?',
      '恋人のSNSに、他の人からの親しげなコメントが付いて気になる。いちばんいい対応は？',
      '你看到恋人的动态下有异性很亲近的评论，心里不舒服。最好的应对是？',
      '你看到戀人的動態下有其他人很親近的留言，心裡不舒服。最好的應對是？',
      'Bạn thấy một bình luận thân mật của người khác trên mạng của người ấy và thấy bận lòng. Cách nào ổn nhất?',
      'Kamu melihat komentar akrab dari orang lain di unggahan dia dan itu mengganjal. Respons yang paling baik?'
    ),
    T('질투 말하기', 'Saying it bothered you', 'やきもちを伝える', '说出在意', '說出在意', 'Nói khi ghen', 'Bilang kalau cemburu'),
    [
      opt(T(
        '몰래 계정을 뒤져 더 확인해 본다',
        'Quietly dig through the account for more',
        'こっそりアカウントを掘って、さらに確かめる',
        '偷偷翻对方的账号，再查下去',
        '偷偷翻對方的帳號，再查下去',
        'Lén lục tài khoản để kiểm thêm',
        'Diam-diam menggeledah akunnya untuk mencari lebih banyak'
      )),
      opt(T(
        '비난하지 않는 말투로 "조금 신경 쓰였어"라고 말하고 상대 설명을 듣는다',
        'Say "that one got to me a little," without blaming, and hear them out',
        '責めない言い方で「ちょっと気になった」と伝え、相手の話を聞く',
        '用不指责的口气说「我有点在意」，然后听对方解释',
        '用不指責的口氣說「我有點在意」，然後聽對方解釋',
        'Nói "mình hơi bận lòng" mà không trách, rồi nghe họ giải thích',
        'Bilang "aku agak terganggu" tanpa menyalahkan, lalu dengarkan penjelasannya'
      ), true),
      opt(T(
        '나도 이성 친구에게 일부러 댓글을 달아 반응을 본다',
        'Leave a flirty comment of your own to see what they do',
        '自分も他の人にわざとコメントして、反応を見る',
        '自己也故意给别人留亲近评论，看对方什么反应',
        '自己也故意給別人留親近留言，看對方什麼反應',
        'Cố tình bình luận thân mật cho người khác để xem phản ứng',
        'Sengaja meninggalkan komentar mesra ke orang lain untuk melihat reaksinya'
      )),
      opt(T(
        '아무렇지 않은 척 쿨하게 넘긴다',
        'Act unbothered and let it go',
        '何ともないふりをして、クールに流す',
        '装作无所谓，酷酷地翻篇',
        '裝作無所謂，酷酷地翻篇',
        'Giả bộ không sao và bỏ qua cho ngầu',
        'Pura-pura tidak masalah dan melewatinya dengan gaya'
      )),
    ],
    T(
      '감정을 솔직하고 부드럽게 전하고 상대 이야기를 듣는 것이 불신을 줄입니다. 몰래 확인과 맞불은 신뢰를 해치고, 괜찮은 척은 감정을 쌓이게 합니다.',
      'Saying the feeling plainly and gently, then listening, shrinks the distrust. Snooping and firing back damage trust. Pretending you are fine just stores the feeling.',
      '気持ちを正直にやわらかく伝えて相手の話を聞くと、不信は小さくなります。こっそり確かめることややり返しは信頼を損ない、平気なふりは気持ちを積もらせます。',
      '把感受坦白、温和地说出来，再听对方讲，不信任才会变小。偷偷查和反击会伤信任，装作没事只会把感受积下来。',
      '把感受坦白、溫和地說出來，再聽對方講，不信任才會變小。偷偷查和反擊會傷信任，裝作沒事只會把感受積下來。',
      'Nói cảm xúc thật và nhẹ, rồi nghe họ, thì sự nghi ngờ nhỏ lại. Lén kiểm và trả đũa làm hỏng niềm tin. Giả bộ ổn chỉ chất cảm xúc lại.',
      'Menyampaikan perasaan dengan jujur dan lembut, lalu mendengarkan, mengecilkan rasa tidak percaya. Mengintip diam-diam dan membalas merusak kepercayaan. Pura-pura baik-baik saja hanya menumpuk perasaan.'
    )
  ),
  question(
    15,
    T(
      '오래가는 연애에 가장 가까운 설명은?',
      'Which description is closest to a relationship that lasts?',
      '長く続く恋愛にいちばん近い説明は？',
      '哪一种最接近长久的恋爱？',
      '哪一種最接近長久的戀愛？',
      'Mô tả nào gần với một mối quan hệ bền nhất?',
      'Penjelasan mana yang paling dekat dengan hubungan yang bertahan lama?'
    ),
    T('갈등 회복', 'Repair after a fight', 'けんかのあと', '吵完还能和好', '吵完還能和好', 'Hàn gắn sau cãi', 'Pulih setelah berantem'),
    [
      opt(T(
        '거의 다투지 않는 연애',
        'A relationship that almost never fights',
        'ほとんどけんかをしない恋愛',
        '几乎不吵架的恋爱',
        '幾乎不吵架的戀愛',
        'Một mối quan hệ gần như không cãi',
        'Hubungan yang hampir tidak pernah berantem'
      )),
      opt(T(
        '서운함이 없도록 항상 한쪽이 맞추는 연애',
        'One person always adjusts so nobody feels let down',
        '寂しさが出ないよう、いつも片方が合わせる恋愛',
        '总有一方迁就，免得有人失落',
        '總有一方遷就，免得有人失落',
        'Luôn có một người chiều để không ai phải tủi',
        'Selalu ada satu orang yang menyesuaikan supaya tidak ada yang kecewa'
      )),
      opt(T(
        '설렘이 처음처럼 늘 유지되는 연애',
        'A relationship where the spark stays exactly like day one',
        'ときめきが最初のままずっと続く恋愛',
        '心动一直维持得跟刚开始一样',
        '心動一直維持得跟剛開始一樣',
        'Rung động giữ nguyên như ngày đầu',
        'Perasaan berdebar tetap persis seperti hari pertama'
      )),
      opt(T(
        '갈등이 생겨도 회복 시도와 대화로 풀어 가는 연애',
        'A relationship that repairs fights by reaching out and talking',
        'すれ違っても、仲直りと対話でほどいていく恋愛',
        '有了冲突，也用伸手和对话把它解开的恋爱',
        '有了衝突，也用伸手和對話把它解開的戀愛',
        'Có xung đột vẫn tháo ra bằng cách chủ động và nói chuyện',
        'Ada konflik, tapi diurai dengan menjangkau dan berbicara'
      ), true),
    ],
    T(
      '오래가는 관계의 차이는 갈등이 있느냐보다 갈등을 어떻게 다루고 회복하느냐에 있습니다. 다툼이 없는 것이나 한쪽만 맞추는 것은 문제를 감추기 쉽습니다.',
      'What separates a relationship that lasts is less whether conflict shows up, and more how you handle it and find your way back. No fights, or one person always bending, often just hides the problem.',
      '長く続く関係の違いは、争いがあるかどうかより、それをどう扱って戻るかです。けんかがないことや片方だけが合わせることは、問題を隠しやすいです。',
      '长久关系的差别，不在有没有冲突，而在怎么处理、怎么和好。从不吵架，或总有一方迁就，往往只是把问题藏起来。',
      '長久關係的差別，不在有沒有衝突，而在怎麼處理、怎麼和好。從不吵架，或總有一方遷就，往往只是把問題藏起來。',
      'Mối quan hệ bền khác nhau không phải ở chỗ có xung đột hay không, mà ở cách xử lý và tìm đường quay lại. Không cãi, hoặc một người luôn chiều, thường chỉ giấu vấn đề.',
      'Yang membedakan hubungan yang bertahan bukan ada tidaknya konflik, melainkan cara menanganinya dan menemukan jalan kembali. Tidak pernah berantem, atau satu orang selalu mengalah, sering hanya menyembunyikan masalah.'
    )
  ),
];

export const phase3LoveIqPercentResults: Phase3LoveIqResult[] = [
  {
    type: 'bottom30',
    emoji: '🌱',
    min: 0,
    max: 2,
    gauge: 8,
    title: T('연애 IQ 하위 30%', 'Dating IQ, bottom 30%', '恋愛IQ 下位30%', '恋爱IQ 后30%', '戀愛IQ 後30%', 'IQ tình yêu, 30% thấp nhất', 'IQ pacaran, 30% terbawah'),
    gaugeLabel: T('하위 30%', 'Bottom 30%', '下位30%', '后30%', '後30%', '30% thấp', '30% bawah'),
    quote: T(
      '연애 센스가 이제 막 싹트는 단계입니다.',
      'Your dating sense is just starting to sprout.',
      '恋愛の感覚が、今まさに芽を出した段階です。',
      '恋爱感觉才刚刚冒芽。',
      '戀愛感覺才剛剛冒芽。',
      'Cảm giác yêu đương của bạn mới vừa nhú.',
      'Rasa pacaranmu baru mulai tumbuh.'
    ),
    description: T(
      '본능대로 반응하다 보면 역효과가 나는 방법을 쓰기 쉽습니다. 원칙 몇 가지만 익혀도 점수가 가장 빠르게 오르는 구간입니다.',
      'Reacting on instinct makes it easy to pick a move that backfires. Learn a few basics and this is the band where the score climbs fastest.',
      '本能のまま反応すると、逆効果のやり方を選びやすいです。原則をいくつか覚えるだけで、点数がいちばん伸びる区間です。',
      '顺着本能反应，很容易用上适得其反的办法。只要记住几条原则，这是分数涨得最快的一段。',
      '順著本能反應，很容易用上適得其反的辦法。只要記住幾條原則，這是分數漲得最快的一段。',
      'Phản ứng theo bản năng dễ chọn cách phản tác dụng. Chỉ cần nắm vài nguyên tắc, đây là đoạn điểm tăng nhanh nhất.',
      'Bereaksi menurut insting membuatmu mudah memilih langkah yang berbalik. Pelajari beberapa dasar, dan ini rentang skor yang naik paling cepat.'
    ),
    scoreRange: T('0~2점', '0–2 points', '0〜2点', '0～2分', '0～2分', '0–2 điểm', '0–2 poin'),
    keywords: T('본능 반응, 비난, 회피, 기초 원칙', 'Instinct, blame, avoidance, basics', '本能, 非難, 回避, 基礎', '本能反应, 指责, 回避, 基础原则', '本能反應, 指責, 迴避, 基礎原則', 'Bản năng, đổ lỗi, né tránh, nguyên tắc cơ bản', 'Insting, menyalahkan, menghindar, dasar'),
    strengths: T('솔직하고 꾸밈없는 진심', 'Honest, unpolished sincerity', '飾らない素直さ', '不装的真心', '不裝的真心', 'Sự thật thà không tô vẽ', 'Ketulusan yang tidak dibuat-buat'),
    tips: T(
      '서운할 땐 상황과 내 감정을 한 문장으로 말하는 연습하기\n감정이 올라오면 30분 쉬고 얘기하자를 먼저 말하기\n이번 퀴즈의 해설을 한 번 더 읽고 틀린 문항 하나만 실천하기',
      'When you feel let down, practice one sentence: the moment, then your feeling\nWhen you heat up, say you need 30 minutes before you keep talking\nReread the explanations and actually try the one you missed',
      '寂しかったときは、場面と気持ちを一文で言う練習をする\n熱くなったら「30分休んで話そう」を先に言う\n解説をもう一度読んで、間違えた一問だけ実践する',
      '失落时，练着用一句话说出发生了什么、自己什么感受\n情绪上来，先说休息30分钟再谈\n把这次的讲解再读一遍，只实践一道错题',
      '失落時，練著用一句話說出發生了什麼、自己什麼感受\n情緒上來，先說休息30分鐘再談\n把這次的解說再讀一遍，只實踐一道錯題',
      'Khi tủi, tập nói một câu: chuyện gì và mình cảm thấy thế nào\nKhi nóng, nói trước là nghỉ 30 phút rồi hãy nói tiếp\nĐọc lại lời giải và thực hành đúng một câu mình sai',
      'Saat kecewa, latih satu kalimat: kejadiannya, lalu perasaanmu\nSaat panas, bilang dulu bahwa kamu butuh 30 menit\nBaca lagi penjelasannya dan praktikkan satu soal yang salah'
    ),
    oneLiner: T(
      '시작점이 낮을수록 오르는 폭이 큽니다. 해설 몇 개면 금방 달라집니다',
      'A low start leaves the most room to climb. A few explanations change the next conversation.',
      'スタートが低いほど、伸びしろは大きいです。解説をいくつか読むだけで次が変わります。',
      '起点越低，上升空间越大。看懂几条讲解，下一场对话就不一样。',
      '起點越低，上升空間越大。看懂幾條解說，下一場對話就不一樣。',
      'Điểm xuất phát càng thấp, khoảng tăng càng rộng. Vài lời giải là cuộc nói sau đã khác.',
      'Titik mulai yang rendah menyisakan ruang naik paling besar. Beberapa penjelasan mengubah obrolan berikutnya.'
    ),
    shareLine: T(
      '나의 연애 IQ: 하위 30% 🌱 ({score}점/15) 나 하위 30% 나옴ㅋㅋ 해설 보고 배웠다... 너는 상위 몇 %야? 점수 인증해줘',
      'My dating IQ: bottom 30% 🌱 ({score}/15) I landed in the bottom 30% lol. The explanations actually taught me something. What percent are you? Drop your score.',
      '私の恋愛IQ：下位30% 🌱（{score}点/15）下位30%だったwww 解説読んで勉強になった…あなたは上位何%？点数見せて',
      '我的恋爱IQ：后30% 🌱（{score}分/15）我居然是后30%哈哈。看完讲解学到了…你超过百分之几？把分数发来',
      '我的戀愛IQ：後30% 🌱（{score}分/15）我居然是後30%哈哈。看完解說學到了…你贏過百分之幾？把分數貼上來',
      'IQ tình yêu của mình: 30% thấp nhất 🌱 ({score}/15) Mình rơi đúng nhóm thấp nhất. Đọc lời giải mới hiểu… Bạn top bao nhiêu %? Khoe điểm đi',
      'IQ pacaran aku: 30% terbawah 🌱 ({score}/15) Aku 30% terbawah wkwk. Baca penjelasannya jadi ngerti… Kamu masuk berapa %? Tunjukin skornya'
    ),
  },
  {
    type: 'top50',
    emoji: '🌿',
    min: 3,
    max: 5,
    gauge: 24,
    title: T('연애 IQ 상위 50%', 'Dating IQ, top 50%', '恋愛IQ 上位50%', '恋爱IQ 前50%', '戀愛IQ 前50%', 'IQ tình yêu, top 50%', 'IQ pacaran, 50% teratas'),
    gaugeLabel: T('상위 50%', 'Top 50%', '上位50%', '前50%', '前50%', 'Top 50%', '50% atas'),
    quote: T(
      '연애의 기본기는 있지만 흔들리는 단계입니다.',
      'The basics are there. They still wobble.',
      '恋愛の基本はあります。ただ、まだ揺れます。',
      '恋爱的基本功有了，但还不太稳。',
      '戀愛的基本功有了，但還不太穩。',
      'Nền đã có, nhưng vẫn còn lúc vững lúc chông chênh.',
      'Dasarnya sudah ada. Masih goyah.'
    ),
    description: T(
      '상황에 따라 맞는 선택과 역효과가 나는 선택이 섞여 있습니다. 갈등 순간의 반응만 다듬으면 크게 올라갑니다.',
      'Some choices help and some backfire, depending on the moment. Smooth the reaction you have in a fight and the score jumps.',
      '場面によって、合う選択と逆効果の選択が混ざっています。けんかの瞬間の反応だけ整えると、大きく伸びます。',
      '有时选对，有时选到适得其反。把吵架那一下的反应磨一磨，分数就会明显上去。',
      '有時選對，有時選到適得其反。把吵架那一下的反應磨一磨，分數就會明顯上去。',
      'Có lúc chọn đúng, có lúc chọn cách phản tác dụng. Chỉ cần chỉnh phản ứng lúc cãi là điểm nhảy rõ.',
      'Kadang pilihanmu membantu, kadang berbalik, tergantung situasinya. Rapikan reaksi saat berantem, skornya naik jauh.'
    ),
    scoreRange: T('3~5점', '3–5 points', '3〜5点', '3～5分', '3～5分', '3–5 điểm', '3–5 poin'),
    keywords: T('기본기, 들쑥날쑥, 갈등 순간', 'Basics, uneven, the fight moment', '基本, ムラ, けんかの瞬間', '基本功, 忽高忽低, 冲突瞬间', '基本功, 忽高忽低, 衝突瞬間', 'Nền tảng, lúc được lúc không, khoảnh khắc cãi', 'Dasar, naik turun, momen berantem'),
    strengths: T('관계를 좋게 하려는 의지와 감각', 'You want the relationship to work, and you can feel when it does', '関係をよくしたい意志と感覚', '想把关系搞好的心意和感觉', '想把關係搞好的心意和感覺', 'Muốn mối quan hệ ổn, và cảm được khi nó đang ổn', 'Niat memperbaiki hubungan, dan rasa saat itu berhasil'),
    tips: T(
      '다툴 때 쓰는 습관 하나를 찾아 줄이기\n사과를 받으면 바라는 점 한 가지를 함께 말하기\n상대에게 기대를 말로 꺼내는 연습하기',
      'Find one habit you use in a fight and do it less\nWhen they apologize, add the one thing you still need\nPractice saying the expectation out loud',
      'けんかのときに出る癖を一つ見つけて減らす\n謝罪を受け取ったら、望むことを一つ一緒に伝える\n期待を言葉にして相手に出す練習をする',
      '找出吵架时会用的一个习惯，少做一次\n接到道歉时，一起说出一件你还希望的事\n练习把期待说出口',
      '找出吵架時會用的一個習慣，少做一次\n接到道歉時，一起說出一件你還希望的事\n練習把期待說出口',
      'Tìm một thói quen lúc cãi và bớt dùng nó\nKhi nhận lời xin lỗi, nói thêm một điều mình còn cần\nTập đưa kỳ vọng ra thành lời',
      'Cari satu kebiasaan saat berantem dan kurangi\nSaat permintaan maaf datang, sebut juga satu hal yang masih kamu butuhkan\nLatih mengucapkan harapanmu'
    ),
    oneLiner: T(
      '기본은 이미 있습니다. 갈등 순간의 한마디만 바꾸면 달라집니다',
      'The basics are already yours. Change one sentence in the fight and the rest shifts.',
      '基本はもうあります。けんかの瞬間の一言を変えるだけで違います。',
      '基本功已经有了。吵架时改一句，后面就不一样。',
      '基本功已經有了。吵架時改一句，後面就不一樣。',
      'Nền đã có rồi. Đổi một câu lúc cãi là phần còn lại đổi theo.',
      'Dasarnya sudah ada. Ganti satu kalimat saat berantem, sisanya ikut berubah.'
    ),
    shareLine: T(
      '나의 연애 IQ: 상위 50% 🌿 ({score}점/15) 기본기는 있대ㅋㅋ 너는 상위 몇 %야? 점수 인증 ㄱㄱ',
      'My dating IQ: top 50% 🌿 ({score}/15) Apparently I have the basics lol. What percent are you? Drop the score.',
      '私の恋愛IQ：上位50% 🌿（{score}点/15）基本はあるってwww あなたは上位何%？点数ちょうだい',
      '我的恋爱IQ：前50% 🌿（{score}分/15）说我基本功还行哈哈。你超过百分之几？把分数发来',
      '我的戀愛IQ：前50% 🌿（{score}分/15）說我基本功還行哈哈。你贏過百分之幾？把分數貼上來',
      'IQ tình yêu của mình: top 50% 🌿 ({score}/15) Bảo là mình có nền rồi. Bạn top bao nhiêu %? Khoe điểm đi',
      'IQ pacaran aku: 50% teratas 🌿 ({score}/15) Katanya dasarnya sudah ada wkwk. Kamu masuk berapa %? Skornya mana'
    ),
  },
  {
    type: 'top30',
    emoji: '🌳',
    min: 6,
    max: 8,
    gauge: 42,
    title: T('연애 IQ 상위 30%', 'Dating IQ, top 30%', '恋愛IQ 上位30%', '恋爱IQ 前30%', '戀愛IQ 前30%', 'IQ tình yêu, top 30%', 'IQ pacaran, 30% teratas'),
    gaugeLabel: T('상위 30%', 'Top 30%', '上位30%', '前30%', '前30%', 'Top 30%', '30% atas'),
    quote: T(
      '대체로 좋은 선택을 하는 단계입니다.',
      'You mostly pick the move that helps.',
      'だいたい、関係の役に立つ選択をしています。',
      '大多时候，你选的是有帮助的做法。',
      '大多時候，你選的是有幫助的做法。',
      'Phần lớn bạn chọn cách có ích.',
      'Sebagian besar kamu memilih langkah yang membantu.'
    ),
    description: T(
      '기본 원칙을 어느 정도 이해하고 있으며 위기 상황에서도 크게 어긋나지 않습니다. 몇몇 반사적 반응만 다듬으면 상위권입니다.',
      'You understand the basics well enough that a hard moment does not throw you far off. Trim a few reflex reactions and you are in the higher band.',
      '基本の原則はある程度分かっていて、危ない場面でも大きく外れません。反射的な反応をいくつか整えると上位です。',
      '基本原则你已经懂一些，紧急时也不会偏得太远。把几个下意识反应磨掉，就进前排了。',
      '基本原則你已經懂一些，緊急時也不會偏得太遠。把幾個下意識反應磨掉，就進前排了。',
      'Bạn đã hiểu nguyên tắc cơ bản đủ để lúc căng không lệch quá xa. Chỉnh vài phản xạ là vào nhóm cao hơn.',
      'Kamu sudah cukup paham dasarnya, jadi saat genting tidak melenceng jauh. Rapikan beberapa reaksi refleks, kamu masuk kelompok atas.'
    ),
    scoreRange: T('6~8점', '6–8 points', '6〜8点', '6～8分', '6～8分', '6–8 điểm', '6–8 poin'),
    keywords: T('좋은 기본기, 반사 반응, 안정', 'Solid basics, reflex reactions, steady', '良い基本, 反射, 安定', '好基本功, 下意识反应, 稳定', '好基本功, 下意識反應, 穩定', 'Nền tốt, phản xạ, vững', 'Dasar yang baik, refleks, stabil'),
    strengths: T('상대를 배려하고 대화를 시도하는 힘', 'You look out for them and you try to talk', '相手を気づかい、会話を始めようとする力', '会顾着对方，也愿意开口谈', '會顧著對方，也願意開口談', 'Biết để ý đối phương và chịu mở lời', 'Kamu memperhatikan dia dan mau mulai bicara'),
    tips: T(
      '틀린 문항의 공통점을 찾아 줄이기\n쉬는 시간 요청과 회복 시도를 의식적으로 쓰기\n서운함을 쌓지 않고 그날 안에 짧게 말하기',
      'Find what the missed questions have in common and do that less\nAsk for a pause, and reach out to repair, on purpose\nSay the hurt the same day, in one short line',
      '間違えた問題の共通点を見つけて減らす\n休むお願いと、仲直りを意識して使う\n寂しさはためず、その日のうちに短く伝える',
      '找出错题的共同点，少做那一类\n有意识地使用暂停和主动和好\n失落别攒着，当天用一句短话说出来',
      '找出錯題的共同點，少做那一類\n有意識地使用暫停和主動和好\n失落別攢著，當天用一句短話說出來',
      'Tìm điểm chung của câu sai và bớt làm điều đó\nChủ động xin nghỉ và chủ động làm lành\nĐừng chất sự tủi, nói ngắn trong ngày',
      'Cari kesamaan soal yang salah dan kurangi itu\nSengaja minta jeda dan mulai baikan\nJangan menimbun kekecewaan. Katakan singkat di hari yang sama'
    ),
    oneLiner: T(
      '이미 좋은 연애를 하고 있습니다. 습관 하나만 고치면 상위권입니다',
      'You are already dating well. Fix one habit and you are in the higher group.',
      'もう良い恋愛をしています。癖を一つ直すと上位です。',
      '你已经在好好恋爱了。改掉一个习惯，就进前排。',
      '你已經在好好戀愛了。改掉一個習慣，就進前排。',
      'Bạn đang yêu khá ổn rồi. Sửa một thói quen là vào nhóm trên.',
      'Kamu sudah pacaran dengan baik. Perbaiki satu kebiasaan, kamu masuk kelompok atas.'
    ),
    shareLine: T(
      '나의 연애 IQ: 상위 30% 🌳 ({score}점/15) 대체로 좋은 선택을 한대! 너는 상위 몇 %야? 비교해보자',
      'My dating IQ: top 30% 🌳 ({score}/15) Mostly good calls! What percent are you? Let us compare.',
      '私の恋愛IQ：上位30% 🌳（{score}点/15）だいたい良い選択だって！あなたは上位何%？比べよう',
      '我的恋爱IQ：前30% 🌳（{score}分/15）说我大多选得不错！你超过百分之几？来比比',
      '我的戀愛IQ：前30% 🌳（{score}分/15）說我大多選得不錯！你贏過百分之幾？來比比',
      'IQ tình yêu của mình: top 30% 🌳 ({score}/15) Bảo là mình chọn khá ổn! Bạn top bao nhiêu %? So đi',
      'IQ pacaran aku: 30% teratas 🌳 ({score}/15) Katanya pilihannya kebanyakan tepat! Kamu masuk berapa %? Bandingkan'
    ),
  },
  {
    type: 'top15',
    emoji: '🌸',
    min: 9,
    max: 11,
    gauge: 58,
    title: T('연애 IQ 상위 15%', 'Dating IQ, top 15%', '恋愛IQ 上位15%', '恋爱IQ 前15%', '戀愛IQ 前15%', 'IQ tình yêu, top 15%', 'IQ pacaran, 15% teratas'),
    gaugeLabel: T('상위 15%', 'Top 15%', '上位15%', '前15%', '前15%', 'Top 15%', '15% atas'),
    quote: T(
      '연애 원칙을 꽤 잘 아는 단계입니다.',
      'You know the relationship principles pretty well.',
      '恋愛の原則を、かなりよく知っている段階です。',
      '恋爱的原则，你已经懂不少。',
      '戀愛的原則，你已經懂不少。',
      'Bạn nắm nguyên tắc trong quan hệ khá chắc.',
      'Kamu cukup paham prinsip hubungannya.'
    ),
    description: T(
      '감정 신호에 다가가고, 비난 없이 말하고, 갈등 뒤 회복하는 방법을 알고 있습니다. 아는 것을 마음이 클 때도 실천하는 것이 다음 과제입니다.',
      'You know how to meet a feeling, speak without blame, and repair after a fight. The next job is doing it when you are flooded too.',
      '気持ちに寄ること、責めずに話すこと、けんかのあと戻ることを知っています。次の課題は、気持ちが大きいときにもそれを使うことです。',
      '你知道怎么接住情绪、不指责地说话、吵完再和好。下一步是情绪很大的时候也做得到。',
      '你知道怎麼接住情緒、不指責地說話、吵完再和好。下一步是情緒很大的時候也做得到。',
      'Bạn biết đón cảm xúc, nói không đổ lỗi, và làm lành sau cãi. Bài tiếp theo là làm được cả khi lòng đang đầy.',
      'Kamu tahu cara menyambut perasaan, bicara tanpa menyalahkan, dan baikan setelah berantem. Tugas berikutnya: melakukannya juga saat hatimu sedang penuh.'
    ),
    scoreRange: T('9~11점', '9–11 points', '9〜11点', '9～11分', '9～11分', '9–11 điểm', '9–11 poin'),
    keywords: T('원칙 이해, 부드러운 소통, 회복 시도', 'Knows the principles, soft talk, repair', '原則の理解, やわらかい話し方, 仲直り', '懂原则, 说话温和, 主动和好', '懂原則, 說話溫和, 主動和好', 'Hiểu nguyên tắc, nói mềm, chủ động làm lành', 'Paham prinsip, bicara lembut, mulai baikan'),
    strengths: T('감정을 다루고 대화로 풀려는 성숙함', 'Mature enough to handle a feeling and talk it through', '気持ちを扱って、会話でほどこうとする成熟', '能处理情绪，也愿意用谈话解开', '能處理情緒，也願意用談話解開', 'Đủ chín để giữ cảm xúc và tháo bằng lời', 'Cukup dewasa untuk mengurus perasaan dan mengurainya dengan bicara'),
    tips: T(
      '알고 있는 원칙을 감정이 클 때도 쓰는 연습하기\n틀린 문항의 주제를 집중해서 살펴보기\n주변 친구에게 내가 쓰는 방법을 나눠 보기',
      'Practice the principle you already know on the day you are most upset\nLook hard at the topic of the questions you missed\nTell a friend the move you actually use',
      '知っている原則を、気持ちが大きいときにも使う練習をする\n間違えた問題のテーマを重点的に見る\n自分が使っているやり方を友達に話してみる',
      '练习在情绪很大时也用上你已经知道的原则\n集中看看错题的主题\n把你真正在用的方法讲给朋友听',
      '練習在情緒很大時也用上你已經知道的原則\n集中看看錯題的主題\n把你真正在用的方法講給朋友聽',
      'Tập dùng nguyên tắc mình đã biết cả khi cảm xúc đang lớn\nNhìn kỹ chủ đề của câu mình sai\nKể cho bạn cách mình đang dùng',
      'Latih prinsip yang sudah kamu tahu, juga di hari emosimu besar\nLihat baik-baik tema soal yang salah\nCeritakan ke teman cara yang benar-benar kamu pakai'
    ),
    oneLiner: T(
      '아는 만큼 실천할 때 진짜 실력입니다. 감정이 클 때가 시험입니다',
      'Knowing it counts when you use it. The test is the day you are upset.',
      '知っていることを使うときが、本当の力です。気持ちが大きいときが試験です。',
      '知道了还做得到，才是真本事。情绪大的时候就是考试。',
      '知道了還做得到，才是真本事。情緒大的時候就是考試。',
      'Biết rồi còn làm được mới là sức thật. Lúc cảm xúc lớn chính là bài thi.',
      'Tahu saja belum cukup. Yang diuji adalah hari saat emosimu besar.'
    ),
    shareLine: T(
      '나의 연애 IQ: 상위 15% 🌸 ({score}점/15) 연애 원칙 꽤 안대ㅋㅋ 너는 상위 몇 %야? 점수 인증해봐',
      'My dating IQ: top 15% 🌸 ({score}/15) Apparently I know the principles pretty well. What percent are you? Show the score.',
      '私の恋愛IQ：上位15% 🌸（{score}点/15）恋愛の原則、かなり知ってるってwww あなたは上位何%？点数見せて',
      '我的恋爱IQ：前15% 🌸（{score}分/15）说我挺懂恋爱原则的哈哈。你超过百分之几？把分数发来',
      '我的戀愛IQ：前15% 🌸（{score}分/15）說我挺懂戀愛原則的哈哈。你贏過百分之幾？把分數貼上來',
      'IQ tình yêu của mình: top 15% 🌸 ({score}/15) Bảo là mình nắm nguyên tắc khá chắc. Bạn top bao nhiêu %? Khoe điểm đi',
      'IQ pacaran aku: 15% teratas 🌸 ({score}/15) Katanya aku cukup paham prinsipnya wkwk. Kamu masuk berapa %? Tunjukin skornya'
    ),
  },
  {
    type: 'top7',
    emoji: '🌈',
    min: 12,
    max: 13,
    gauge: 76,
    title: T('연애 IQ 상위 7%', 'Dating IQ, top 7%', '恋愛IQ 上位7%', '恋爱IQ 前7%', '戀愛IQ 前7%', 'IQ tình yêu, top 7%', 'IQ pacaran, 7% teratas'),
    gaugeLabel: T('상위 7%', 'Top 7%', '上位7%', '前7%', '前7%', 'Top 7%', '7% atas'),
    quote: T(
      '연애 센스가 매우 높은 단계입니다.',
      'Your feel for relationships is sharp.',
      '恋愛の感覚がとても高い段階です。',
      '你的恋爱感觉非常敏锐。',
      '你的戀愛感覺非常敏銳。',
      'Cảm giác trong chuyện yêu của bạn rất sắc.',
      'Rasa hubunganmu sangat tajam.'
    ),
    description: T(
      '대부분의 상황에서 관계에 도움이 되는 선택을 합니다. 상대의 신호를 읽고, 갈등을 줄이고, 회복하는 힘이 있습니다.',
      'In most situations you pick the move that helps. You can read a signal, keep a fight smaller, and find the way back.',
      'ほとんどの場面で、関係の役に立つ選択をしています。相手のサインを読み、争いを小さくし、戻る力があります。',
      '大多数情况下，你选的是对关系有帮助的做法。你读得懂信号，能把冲突缩小，也找得回和好的路。',
      '大多數情況下，你選的是對關係有幫助的做法。你讀得懂信號，能把衝突縮小，也找得回和好的路。',
      'Hầu hết tình huống bạn chọn cách có ích. Bạn đọc được tín hiệu, thu nhỏ xung đột, và tìm được đường quay lại.',
      'Di sebagian besar situasi kamu memilih langkah yang membantu. Kamu membaca sinyal, mengecilkan konflik, dan menemukan jalan kembali.'
    ),
    scoreRange: T('12~13점', '12–13 points', '12〜13点', '12～13分', '12～13分', '12–13 điểm', '12–13 poin'),
    keywords: T('높은 센스, 갈등 관리, 신호 읽기', 'Sharp sense, smaller fights, reading signals', '高い感覚, 争いを小さくする, サインを読む', '感觉敏锐, 缩小冲突, 读懂信号', '感覺敏銳, 縮小衝突, 讀懂信號', 'Cảm giác sắc, thu nhỏ xung đột, đọc tín hiệu', 'Rasa tajam, konflik lebih kecil, membaca sinyal'),
    strengths: T('감정과 상황을 균형 있게 다루는 능력', 'You can hold the feeling and the situation at the same time', '気持ちと状況をバランスよく扱う力', '能同时顾住感受和场面', '能同時顧住感受和場面', 'Giữ được cả cảm xúc lẫn tình huống', 'Bisa memegang perasaan dan situasi sekaligus'),
    tips: T(
      '완벽한 정답에 집착하지 않고 서툰 감정도 보여 주기\n상대가 서툰 방식으로 다가올 때 따뜻하게 받아 주기\n이 노하우를 친구들과 나누기',
      'Do not grip the perfect answer so hard that a clumsy feeling cannot show\nWhen they reach out awkwardly, take it warmly\nPass this on to a friend',
      '完璧な正解にこだわらず、不器用な気持ちも見せる\n相手が不器用に寄ってきたら、あたたかく受け取る\nこのやり方を友達と分かち合う',
      '别死抓完美答案，笨拙的感受也让它出来\n对方用笨办法靠近时，温暖地接住\n把这些方法分给朋友',
      '別死抓完美答案，笨拙的感受也讓它出來\n對方用笨辦法靠近時，溫暖地接住\n把這些方法分給朋友',
      'Đừng bám câu trả lời hoàn hảo đến mức cảm xúc vụng cũng không được lộ\nKhi họ lại gần một cách vụng, hãy đón ấm\nChia cách này cho bạn bè',
      'Jangan menggenggam jawaban sempurna sampai perasaan yang canggung tidak boleh muncul\nSaat dia mendekat dengan cara yang canggung, sambut dengan hangat\nBagikan cara ini ke teman'
    ),
    oneLiner: T(
      '정답을 아는 것에 따뜻함을 더하면 좋습니다',
      'You already know the answer. Warmth is the extra.',
      '正解が分かっているところに、あたたかさを足すと良いです。',
      '答案你已经知道了。再加一点温度就好。',
      '答案你已經知道了。再加一點溫度就好。',
      'Bạn đã biết câu trả lời. Thêm sự ấm là đủ.',
      'Jawaban sudah kamu tahu. Yang kurang hanya kehangatan.'
    ),
    shareLine: T(
      '나의 연애 IQ: 상위 7% 🌈 ({score}점/15) 연애 센스 높대ㅋㅋ 너는 상위 몇 %야? 캡처 공유해줘',
      'My dating IQ: top 7% 🌈 ({score}/15) They say my sense for this is sharp. What percent are you? Send a screenshot.',
      '私の恋愛IQ：上位7% 🌈（{score}点/15）恋愛の感覚、高いってwww あなたは上位何%？スクショちょうだい',
      '我的恋爱IQ：前7% 🌈（{score}分/15）说我恋爱感觉很敏锐哈哈。你超过百分之几？截图发来',
      '我的戀愛IQ：前7% 🌈（{score}分/15）說我戀愛感覺很敏銳哈哈。你贏過百分之幾？截圖貼上來',
      'IQ tình yêu của mình: top 7% 🌈 ({score}/15) Bảo cảm giác của mình sắc lắm. Bạn top bao nhiêu %? Gửi ảnh màn hình đi',
      'IQ pacaran aku: 7% teratas 🌈 ({score}/15) Katanya rasanya tajam wkwk. Kamu masuk berapa %? Kirim tangkapan layarnya'
    ),
  },
  {
    type: 'top1',
    emoji: '👑',
    min: 14,
    max: 15,
    gauge: 93,
    title: T('연애 IQ 상위 1%', 'Dating IQ, top 1%', '恋愛IQ 上位1%', '恋爱IQ 前1%', '戀愛IQ 前1%', 'IQ tình yêu, top 1%', 'IQ pacaran, 1% teratas'),
    gaugeLabel: T('상위 1%', 'Top 1%', '上位1%', '前1%', '前1%', 'Top 1%', '1% atas'),
    quote: T(
      '연애 IQ 최상위 단계입니다.',
      'This is the very top of the dating IQ scale.',
      '恋愛IQの最上位です。',
      '这是恋爱IQ的最前排。',
      '這是戀愛IQ的最前排。',
      'Đây là nhóm cao nhất của IQ tình yêu.',
      'Ini puncak skala IQ pacaran.'
    ),
    description: T(
      '감정 신호, 갈등, 회복, 경계, 기대 조율의 원칙을 거의 다 이해하고 있습니다. 원칙이 정답 암기가 되지 않도록 사람마다 다른 속도와 방식을 존중하세요.',
      'You understand nearly all of it: signals, conflict, repair, boundaries, and matching expectations. Keep the principles from becoming a script. People move at different speeds.',
      '感情のサイン、争い、回復、境界、期待を合わせること。原則をほぼ理解しています。正解の暗記にならないよう、人それぞれの速さとやり方を尊重してください。',
      '情绪信号、冲突、和好、界限、对齐期待，这些原则你几乎都懂。别让原则变成背答案。每个人的速度和方式都不一样，留出尊重。',
      '情緒信號、衝突、和好、界線、對齊期待，這些原則你幾乎都懂。別讓原則變成背答案。每個人的速度和方式都不一樣，留出尊重。',
      'Bạn gần như hiểu hết: tín hiệu cảm xúc, xung đột, hàn gắn, ranh giới, và việc khớp kỳ vọng. Đừng biến nguyên tắc thành bài học thuộc. Mỗi người có nhịp và cách riêng.',
      'Kamu hampir memahami semuanya: sinyal perasaan, konflik, perbaikan, batas, dan menyamakan harapan. Jangan biarkan prinsip menjadi hafalan. Setiap orang punya kecepatan dan caranya sendiri.'
    ),
    scoreRange: T('14~15점', '14–15 points', '14〜15点', '14～15分', '14～15分', '14–15 điểm', '14–15 poin'),
    keywords: T('최상위, 원칙 체화, 균형, 성숙', 'Top band, principles in the body, balance, maturity', '最上位, 原則が身についている, バランス, 成熟', '最前排, 原则已长进身体, 平衡, 成熟', '最前排, 原則已長進身體, 平衡, 成熟', 'Nhóm cao nhất, nguyên tắc đã vào người, cân, chín', 'Puncak, prinsip sudah menempel, seimbang, dewasa'),
    strengths: T(
      '연애 원칙을 이해하고 상황에 맞게 적용하는 능력',
      'You understand the principles and bend them to the moment',
      '恋愛の原則を理解し、場面に合わせて使える力',
      '懂原则，也能按眼前的场面来用',
      '懂原則，也能按眼前的場面來用',
      'Hiểu nguyên tắc và dùng đúng với tình huống trước mắt',
      'Memahami prinsip dan menyesuaikannya dengan situasi di depan'
    ),
    tips: T(
      '원칙보다 상대의 방식을 먼저 듣는 여유 유지하기\n아는 것을 조언으로 쏟기보다 질문으로 나누기\n이 퀴즈의 해설을 친구에게 공유해 함께 성장하기',
      'Stay loose enough to hear their way before you apply a principle\nShare what you know as a question, not a lecture\nSend a friend the explanations and grow alongside them',
      '原則より先に、相手のやり方を聞く余白を残す\n知っていることを助言として注ぐより、質問として分かち合う\nこのクイズの解説を友達に渡して、一緒に伸びる',
      '先听对方的方式，再拿原则来用，留一点余地\n知道的东西别倒成建议，用问题分出去\n把这次的讲解发给朋友，一起长',
      '先聽對方的方式，再拿原則來用，留一點餘地\n知道的東西別倒成建議，用問題分出去\n把這次的解說發給朋友，一起長',
      'Giữ khoảng trống để nghe cách của họ trước khi áp nguyên tắc\nChia điều mình biết bằng câu hỏi, đừng đổ thành lời khuyên\nGửi lời giải cho bạn và cùng lớn',
      'Sisakan ruang untuk mendengar cara dia sebelum memakai prinsip\nBagikan yang kamu tahu sebagai pertanyaan, bukan ceramah\nKirim penjelasannya ke teman dan tumbuh bersama'
    ),
    oneLiner: T(
      '정답을 아는 사람보다 정답을 따뜻하게 쓰는 사람이 오래갑니다',
      'The person who uses the answer warmly outlasts the person who only knows it.',
      '正解を知っている人より、正解をあたたかく使える人が長く続きます。',
      '比知道答案的人更长久的，是把答案用得有温度的人。',
      '比知道答案的人更長久的，是把答案用得有溫度的人。',
      'Người dùng câu trả lời một cách ấm sẽ đi xa hơn người chỉ biết nó.',
      'Orang yang memakai jawaban dengan hangat bertahan lebih lama daripada orang yang hanya menghafalnya.'
    ),
    shareLine: T(
      '나의 연애 IQ: 상위 1% 👑 ({score}점/15) 연애 IQ 최상위래ㅋㅋ 너는 상위 몇 %야? 도전해봐',
      'My dating IQ: top 1% 👑 ({score}/15) Top of the scale, apparently. What percent are you? Give it a try.',
      '私の恋愛IQ：上位1% 👑（{score}点/15）最上位だってwww あなたは上位何%？やってみて',
      '我的恋爱IQ：前1% 👑（{score}分/15）说我是最前排哈哈。你超过百分之几？来挑战',
      '我的戀愛IQ：前1% 👑（{score}分/15）說我是最前排哈哈。你贏過百分之幾？來挑戰',
      'IQ tình yêu của mình: top 1% 👑 ({score}/15) Bảo mình đứng nhóm cao nhất. Bạn top bao nhiêu %? Thử đi',
      'IQ pacaran aku: 1% teratas 👑 ({score}/15) Katanya ini puncaknya wkwk. Kamu masuk berapa %? Coba deh'
    ),
  },
];

export function getPhase3LoveIqPercentResult(score: number): Phase3LoveIqResult {
  return (
    phase3LoveIqPercentResults.find((item) => score >= item.min && score <= item.max) ??
    phase3LoveIqPercentResults[0]
  );
}

export const PHASE3_LOVE_IQ_PERCENT_META = {
  title: T(
    '나의 연애 IQ — 상위 몇 %?',
    'What percent is your dating IQ?',
    'あなたの恋愛IQ、上位何%？',
    '我的恋爱IQ，超过百分之几？',
    '我的戀愛IQ，贏過百分之幾？',
    'IQ tình yêu của tôi thuộc top bao nhiêu %?',
    'IQ pacaran kamu masuk berapa % teratas?'
  ),
  description: T(
    '15가지 연애 상황에서 관계에 도움이 되는 선택을 가려, 나의 연애 IQ와 상위 몇 %인지 알려드립니다.',
    'Fifteen dating situations. Pick the move that helps, then see your dating IQ and what percent you land in.',
    '15の恋愛場面で関係の役に立つ選び方を選ぶと、恋愛IQと上位何%かが分かります。',
    '在15个恋爱场景里选出对关系真正有帮助的做法，看看你的恋爱IQ超过百分之几的人。',
    '在15個戀愛情境裡選出對關係真正有幫助的做法，看看你的戀愛IQ贏過百分之幾。',
    '15 tình huống yêu đương. Chọn cách thật sự có ích, rồi xem IQ tình yêu của bạn thuộc top bao nhiêu %.',
    '15 situasi pacaran. Pilih langkah yang benar-benar membantu, lalu lihat IQ pacaran kamu masuk berapa % teratas.'
  ),
  tags: {
    ko: ['연애IQ', '연애퀴즈', '연애상식'],
    en: ['dating IQ', 'dating quiz', 'relationship basics'],
    ja: ['恋愛IQ', '恋愛クイズ', '恋愛の常識'],
    'zh-CN': ['恋爱IQ', '恋爱测验', '恋爱常识'],
    'zh-TW': ['戀愛IQ', '戀愛測驗', '戀愛常識'],
    vi: ['IQ tình yêu', 'quiz tình yêu', 'kiến thức yêu đương'],
    id: ['IQ pacaran', 'kuis pacaran', 'dasar hubungan'],
  } as Record<Phase3LoveIqLocaleKey, string[]>,
};
