/** 나를 위한 연애 처방전 — 12문항 4지선다, A=0 B=1 C=2 D=3, 총점 0~36, 6유형. 7개 언어. */

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

function opt(
  score: number,
  ko: string,
  en: string,
  ja: string,
  zhCN: string,
  zhTW: string,
  vi: string,
  id: string
) {
  return { score, text: M(ko, en, ja, zhCN, zhTW, vi, id) };
}

export interface Phase3LovePrescriptionQuestion {
  id: number;
  question: Record<string, string>;
  options: { text: Record<string, string>; score: number }[];
}

export interface Phase3LovePrescriptionResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  diagnosisName: Record<string, string>;
  openingLine: Record<string, string>;
  description: Record<string, string>;
  prescription1: Record<string, string>;
  prescription2: Record<string, string>;
  prescription3: Record<string, string>;
  dosage: Record<string, string>;
  precautions: Record<string, string>;
  sideEffects: Record<string, string>;
  extraRx: Record<string, string>;
  prescriptionPeriod: Record<string, string>;
  shareTypeName: Record<string, string>;
}

export function calculatePhase3LovePrescriptionResult(scores: number[]): string {
  const total = scores.reduce((a, b) => a + (b ?? 0), 0);
  if (total <= 5) return 'Type1';
  if (total <= 11) return 'Type2';
  if (total <= 19) return 'Type3';
  if (total <= 27) return 'Type4';
  if (total <= 33) return 'Type5';
  return 'Type6';
}

export const phase3LovePrescriptionQuestions: Phase3LovePrescriptionQuestion[] = [
  {
    id: 1,
    question: M(
      '연애가 시작되면 가장 먼저 생기는 걱정은?',
      'What worries you most when a relationship starts?',
      '恋愛が始まったとき、まず心配になるのは？',
      '恋爱开始时，你最担心什么？',
      '戀愛開始時，你最擔心什麼？',
      'Khi bắt đầu yêu, điều bạn lo nhất là gì?',
      'Saat hubungan baru dimulai, yang paling kamu khawatirkan?'
    ),
    options: [
      opt(
        0,
        'A. 이 사람이 나를 충분히 좋아하는 건지 모르겠다',
        'A. I’m not sure they like me enough.',
        'A. この人が本当に私を好きか分からない。',
        'A. 不确定对方是否足够喜欢我。',
        'A. 不確定對方是否足夠喜歡我。',
        'A. Không chắc người ấy có đủ thích mình không.',
        'A. Tidak yakin orang ini cukup menyukaiku.'
      ),
      opt(
        1,
        'B. 내가 너무 좋아해서 상처받을까 봐 두렵다',
        'B. I like them so much I’m afraid of getting hurt.',
        'B. 好きすぎて傷つくのが怖い。',
        'B. 太喜欢对方，怕受伤。',
        'B. 太喜歡對方，怕受傷。',
        'B. Sợ bị tổn thương vì mình thích quá nhiều.',
        'B. Takut terluka karena terlalu menyukai orang itu.'
      ),
      opt(
        2,
        'C. 가까워질수록 부담스럽고 내 공간이 침해받는 느낌이 든다',
        'C. Closeness feels heavy—like my space is invaded.',
        'C. 近づくほど負担で、自分の空間が侵される感じがする。',
        'C. 越亲近越觉得负担，像私人空间被侵占。',
        'C. 越親近越覺得負擔，像私人空間被侵佔。',
        'C. Càng gần càng thấy nặng—như không gian riêng bị xâm phạm.',
        'C. Makin dekat makin berat—seperti ruang pribadiku terusik.'
      ),
      opt(
        3,
        'D. 이 관계가 어디로 흘러갈지 모르겠어서 불안하다',
        'D. I feel anxious not knowing where this is going.',
        'D. この関係がどこへ向かうか分からず不安だ。',
        'D. 不知道这段关系会走向何方，很不安。',
        'D. 不知道這段關係會走向何方，很不安。',
        'D. Lo lắng vì không biết mối quan hệ này sẽ đi đến đâu.',
        'D. Cemas karena tidak tahu hubungan ini akan ke mana.'
      ),
    ],
  },
  {
    id: 2,
    question: M(
      '연애에서 가장 자주 반복되는 내 패턴은?',
      'Which pattern shows up most often in your love life?',
      '恋愛で一番よく繰り返す自分のパターンは？',
      '恋爱里你最常重复的模式是？',
      '戀愛裡你最常重複的模式是？',
      'Trong chuyện yêu, mẫu hành vi nào lặp lại nhất?',
      'Pola apa yang paling sering kamu ulangi dalam asmara?'
    ),
    options: [
      opt(
        0,
        'A. 상대의 반응에 지나치게 신경 쓰고 확인하려 한다',
        'A. I overthink their reactions and seek reassurance.',
        'A. 相手の反応に過敏になり、確認しすぎる。',
        'A. 过度在意对方反应并不断确认。',
        'A. 過度在意對方反應並不斷確認。',
        'A. Quá nhạy với phản ứng của đối phương và hay cần xác nhận.',
        'A. Terlalu memperhatikan reaksi mereka dan sering minta kepastian.'
      ),
      opt(
        1,
        'B. 처음엔 열심히 하다가 어느 순간 지쳐버린다',
        'B. I start strong, then suddenly burn out.',
        'B. 最初は頑張るが、ある瞬間に燃え尽きる。',
        'B. 一开始很投入，某一刻就累了。',
        'B. 一開始很投入，某一刻就累了。',
        'B. Đầu vào hết mình, rồi đột ngột kiệt sức.',
        'B. Awalnya semangat, lalu tiba-tiba kehabisan tenaga.'
      ),
      opt(
        2,
        'C. 좋아하는 마음은 있는데 표현을 잘 못 한다',
        'C. I feel love but struggle to express it.',
        'C. 気持ちはあるのに表現が苦手だ。',
        'C. 心里喜欢，但不会表达。',
        'C. 心裡喜歡，但不會表達。',
        'C. Có tình cảm nhưng khó diễn đạt.',
        'C. Ada perasaan tapi sulit mengungkapkan.'
      ),
      opt(
        3,
        'D. 감정이 안정되지 않고 기복이 심하다',
        'D. My emotions swing a lot—I’m unstable.',
        'D. 感情が安定せず、波が激しい。',
        'D. 情绪起伏大，不稳定。',
        'D. 情緒起伏大，不穩定。',
        'D. Cảm xúc thất thường, khó ổn định.',
        'D. Emosi naik turun—tidak stabil.'
      ),
    ],
  },
  {
    id: 3,
    question: M(
      '연인과 갈등이 생겼을 때 나는 주로?',
      'When you fight with a partner, what do you usually do?',
      '恋人と対立したとき、あなたはだいたい？',
      '和恋人发生冲突时，你通常会？',
      '和戀人發生衝突時，你通常會？',
      'Khi cãi nhau với người yêu, bạn thường?',
      'Saat bentrok dengan pasangan, kamu biasanya?'
    ),
    options: [
      opt(
        0,
        'A. 속으로 삭히다가 나중에 한꺼번에 터뜨린다',
        'A. I bottle it up, then explode later.',
        'A. 我慢して、後で一気に爆発する。',
        'A. 先憋着，之后一次性爆发。',
        'A. 先憋著，之後一次爆發。',
        'A. Nén lâu rồi sau đó bùng nổ một lần.',
        'A. Menahan dulu, lalu meledak sekaligus.'
      ),
      opt(
        1,
        'B. 감정적으로 반응해서 상처 주는 말을 하고 후회한다',
        'B. I react emotionally, say hurtful things, then regret it.',
        'B. 感情的に反応して傷つけることを言い、後悔する。',
        'B. 情绪化反应，说了伤人的话又后悔。',
        'B. 情緒化反應，說了傷人的話又後悔。',
        'B. Phản ứng theo cảm xúc, nói lời làm tổn thương rồi hối hận.',
        'B. Bereaksi emosional, bicara menyakitkan lalu menyesal.'
      ),
      opt(
        2,
        'C. 갈등 자체를 피하고 싶어서 내가 먼저 양보해버린다',
        'C. I avoid conflict—I give in first.',
        'C. 対立を避けたくて、先に譲ってしまう。',
        'C. 想躲开冲突，先让步。',
        'C. 想躲開衝突，先讓步。',
        'C. Tránh xung đột—nhường trước.',
        'C. Menghindari konflik—aku yang mengalah dulu.'
      ),
      opt(
        3,
        'D. 어떻게 해야 할지 몰라서 아무것도 못 하고 멈춰버린다',
        'D. I freeze—I don’t know what to do.',
        'D. どうしていいか分からず、動けなくなる。',
        'D. 不知道怎么办，僵住了。',
        'D. 不知道怎麼辦，僵住了。',
        'D. Đơ người vì không biết phải làm gì.',
        'D. Beku karena tidak tahu harus berbuat apa.'
      ),
    ],
  },
  {
    id: 4,
    question: M(
      '연애할 때 내 감정 상태는 주로?',
      'How do you usually feel emotionally when dating?',
      '恋愛中、感情の状態はだいたい？',
      '恋爱时，你的情绪状态通常是？',
      '戀愛時，你的情緒狀態通常是？',
      'Khi yêu, trạng thái cảm xúc của bạn thường là?',
      'Saat pacaran, suasana emosimu biasanya?'
    ),
    options: [
      opt(
        0,
        'A. 상대의 반응에 따라 하루의 기분이 완전히 달라진다',
        'A. My whole day shifts with their responses.',
        'A. 相手の反応で一日の気分が大きく変わる。',
        'A. 对方反应一变，一整天心情就跟着变。',
        'A. 對方反應一變，一整天心情就跟著變。',
        'A. Cả ngày thay đổi theo phản ứng của họ.',
        'A. Hariku ikut berubah sesuai reaksi mereka.'
      ),
      opt(
        1,
        'B. 초반엔 설레다가 시간이 지나면 무감각해진다',
        'B. Excited at first, then numb over time.',
        'B. 最初はドキドキするが、時間が経つと無感覚になる。',
        'B. 开头心动，久了变麻木。',
        'B. 開頭心動，久了變麻木。',
        'B. Đầu hồi hộp, lâu dần thành tê liệt.',
        'B. Awalnya berdebar, lama-lama jadi mati rasa.'
      ),
      opt(
        2,
        'C. 감정을 잘 드러내지 않아서 상대가 내 마음을 모를 것 같다',
        'C. I hide feelings—they may not know how I feel.',
        'C. 感情を出さないので、相手が分からない気がする。',
        'C. 不太表露情绪，对方可能不懂我的心。',
        'C. 不太表露情緒，對方可能不懂我的心。',
        'C. Ít thể hiện—có thể họ không hiểu mình.',
        'C. Jarang menunjukkan—mereka mungkin tidak tahu perasaanku.'
      ),
      opt(
        3,
        'D. 불안하거나 지나치게 감정적인 날이 많다',
        'D. Often anxious or overly emotional.',
        'D. 不安だったり、感情が強すぎる日が多い。',
        'D. 经常焦虑或情绪过激。',
        'D. 經常焦慮或情緒過激。',
        'D. Thường lo lắng hoặc quá cảm tính.',
        'D. Sering cemas atau terlalu emosional.'
      ),
    ],
  },
  {
    id: 5,
    question: M(
      '상대가 나에게 거리를 두거나 연락이 줄어들 때?',
      'When they pull away or contact drops off?',
      '相手が距離を置いたり連絡が減ったとき？',
      '当对方疏远或联系变少时？',
      '當對方疏遠或聯絡變少時？',
      'Khi họ xa cách hoặc ít nhắn tin hơn?',
      'Saat mereka menjauh atau jarang menghubungi?'
    ),
    options: [
      opt(
        0,
        'A. 최악의 상황을 상상하며 극도로 불안해진다',
        'A. I spiral—imagining the worst.',
        'A. 最悪の想像をして極度に不安になる。',
        'A. 往最坏想，极度焦虑。',
        'A. 往最壞想，極度焦慮。',
        'A. Tưởng tượng tệ nhất—cực kỳ lo.',
        'A. Membayangkan yang terburuk—sangat cemas.'
      ),
      opt(
        1,
        'B. 처음엔 기다리다가 지쳐서 감정이 식어버린다',
        'B. I wait, then get tired and go cold.',
        'B. 最初は待つが、疲れて冷める。',
        'B. 先等，累了就淡了。',
        'B. 先等，累了就淡了。',
        'B. Đợi rồi mệt và nguội đi.',
        'B. Menunggu lalu lelah dan dingin.'
      ),
      opt(
        2,
        'C. 나도 더 거리를 두고 싶어진다',
        'C. I want distance too.',
        'C. 自分も距離を置きたくなる。',
        'C. 我也想拉开距离。',
        'C. 我也想拉開距離。',
        'C. Mình cũng muốn giữ khoảng cách.',
        'C. Aku juga ingin menjaga jarak.'
      ),
      opt(
        3,
        'D. 어떻게 반응해야 할지 몰라서 혼란스럽다',
        'D. I’m confused about how to respond.',
        'D. どう反応すべきか分からず混乱する。',
        'D. 不知道该怎么反应，很混乱。',
        'D. 不知道該怎麼反應，很混亂。',
        'D. Bối rồi không biết phản ứng thế nào.',
        'D. Bingung harus bereaksi bagaimana.'
      ),
    ],
  },
  {
    id: 6,
    question: M(
      '지난 연애에서 가장 많이 들은 말은?',
      'What did past partners say to you most often?',
      '過去の恋愛でよく言われた言葉は？',
      '过去的恋爱里，你常听到的话是？',
      '過去的戀愛裡，你常聽到的話是？',
      'Trong các mối trước, câu nào bạn hay nghe nhất?',
      'Di hubungan lalu, kalimat apa yang paling sering kamu dengar?'
    ),
    options: [
      opt(
        0,
        'A. 왜 이렇게 확인하려 해? / 좀 믿어줘',
        'A. “Why do you need so much reassurance?” / “Trust me.”',
        'A. 「なんでそんなに確認するの」「信じて」',
        'A. “你为什么总要确认？”/“相信我一点。”',
        'A. 「你為什麼總要確認？」/「相信我一点。」',
        'A. “Sao lúc nào cũng cần xác nhận?” / “Tin tôi đi.”',
        'A. “Kenapa selalu perlu kepastian?” / “Percayalah padaku.”'
      ),
      opt(
        1,
        'B. 처음이랑 달라졌어 / 예전 같지 않아',
        'B. “You’ve changed.” / “You’re not like before.”',
        'B. 「最初と違う」「前みたいじゃない」',
        'B. “你和一开始不一样了。”',
        'B.「你和一開始不一樣了。」',
        'B. “Bạn khác lúc đầu rồi.”',
        'B. “Kamu sudah berbeda dari dulu.”'
      ),
      opt(
        2,
        'C. 네 마음을 모르겠어 / 표현 좀 해줘',
        'C. “I can’t read you.” / “Say something.”',
        'C. 「気持ちが分からない」「もっと表現して」',
        'C. “不懂你在想什么。”/“多表达一点。”',
        'C.「不懂你在想什麼。」/「多表達一點。」',
        'C. “Không hiểu bạn nghĩ gì.” / “Nói ra đi.”',
        'C. “Aku tidak mengerti perasaanmu.” / “Ungkapkan lebih banyak.”'
      ),
      opt(
        3,
        'D. 같이 있으면 피곤해 / 감정 조절이 안 되잖아',
        'D. “Being with you is draining.” / “You can’t regulate emotions.”',
        'D. 「一緒にいると疲れる」「感情コントロールできない」',
        'D. “在一起很累。”/“你情绪控制不住。”',
        'D.「在一起很累。」/「你情緒控制不住。」',
        'D. “Ở cùng mệt.” / “Bạn không kiểm soát được cảm xúc.”',
        'D. “Bersamamu melelahkan.” / “Kamu tidak bisa mengatur emosi.”'
      ),
    ],
  },
  {
    id: 7,
    question: M(
      '연애에서 나에게 가장 힘든 순간은?',
      'What’s the hardest moment for you in love?',
      '恋愛で一番つらい瞬間は？',
      '恋爱里对你来说最难的时刻是？',
      '戀愛裡對你來說最難的時刻是？',
      'Khoảnh khắc khó nhất khi yêu với bạn là?',
      'Momen tersulit saat pacaran menurutmu?'
    ),
    options: [
      opt(
        0,
        'A. 상대가 나를 얼마나 좋아하는지 확신이 안 설 때',
        'A. When I’m not sure how much they like me.',
        'A. 相手がどれだけ好きか確信が持てないとき。',
        'A. 不确定对方有多喜欢我。',
        'A. 不確定對方有多喜歡我。',
        'A. Khi không chắc họ thích mình đến mức nào.',
        'A. Saat tidak yakin seberapa besar mereka menyukaiku.'
      ),
      opt(
        1,
        'B. 관계가 루틴해지면서 설렘이 사라질 때',
        'B. When routine kills the spark.',
        'B. 関係がルーティン化してドキドキが消えるとき。',
        'B. 关系变日常，心动消失时。',
        'B. 關係變日常，心動消失時。',
        'B. Khi mối quan hệ nhàm chán, hết xao xuyến.',
        'B. Saat hubungan membosankan dan kegembiraan hilang.'
      ),
      opt(
        2,
        'C. 하고 싶은 말이 있는데 꺼내지 못할 때',
        'C. When I can’t say what I need to say.',
        'C. 言いたいことがあるのに言えないとき。',
        'C. 有话想说却说不出口。',
        'C. 有話想說卻說不出口。',
        'C. Có điều muốn nói nhưng không nói được.',
        'C. Ada yang ingin dikatakan tapi tidak terucap.'
      ),
      opt(
        3,
        'D. 감정이 폭발하거나 무너지는 나를 볼 때',
        'D. When I see myself explode or fall apart.',
        'D. 感情が爆発したり崩れる自分を見るとき。',
        'D. 看到自己情绪爆发或崩溃时。',
        'D. 看到自己情緒爆發或崩潰時。',
        'D. Khi thấy mình bùng nổ hoặc sụp đổ.',
        'D. Saat melihat diri sendiri meledak atau runtuh.'
      ),
    ],
  },
  {
    id: 8,
    question: M(
      '연애를 떠올릴 때 드는 솔직한 감정은?',
      'Honestly, how do you feel when you think about love?',
      '恋愛を思い浮かべたときの素直な気持ちは？',
      '想到恋爱时，你真实的感受是？',
      '想到戀愛時，你真實的感受是？',
      'Khi nghĩ về chuyện yêu, cảm xúc thật của bạn là?',
      'Saat memikirkan cinta, perasaan jujurmu?'
    ),
    options: [
      opt(
        0,
        'A. 불안하고 긴장된다. 또 상처받을까 봐 두렵다',
        'A. Anxious and tense—afraid of getting hurt again.',
        'A. 不安で緊張する。また傷つくのが怖い。',
        'A. 焦虑紧张，怕再次受伤。',
        'A. 焦慮緊張，怕再次受傷。',
        'A. Lo lắng, căng—sợ bị tổn thương lại.',
        'A. Cemas dan tegang—takut terluka lagi.'
      ),
      opt(
        1,
        'B. 처음엔 좋은데 지속되면 지친다는 생각이 든다',
        'B. Nice at first, but I imagine getting exhausted long-term.',
        'B. 最初は良いが、続くと疲れる気がする。',
        'B. 开头挺好，但觉得久了会累。',
        'B. 開頭挺好，但覺得久了會累。',
        'B. Đầu tốt nhưng lâu dài sẽ mệt.',
        'B. Awalnya bagus tapi lama-lama akan melelahkan.'
      ),
      opt(
        2,
        'C. 하고 싶은데 어떻게 해야 할지 잘 모르겠다',
        'C. I want it, but I don’t know how.',
        'C. したいけど、どうすればいいか分からない。',
        'C. 想谈，但不知道怎么做。',
        'C. 想談，但不知道怎麼做。',
        'C. Muốn yêu nhưng không biết làm sao.',
        'C. Ingin tapi tidak tahu caranya.'
      ),
      opt(
        3,
        'D. 감정 소모가 너무 크다는 생각이 먼저 든다',
        'D. First thought: it costs too much emotionally.',
        'D. まず感情の消耗が大きいと思う。',
        'D. 首先觉得太耗感情。',
        'D. 首先覺得太耗感情。',
        'D. Nghĩ đầu tiên: tốn cảm xúc quá nhiều.',
        'D. Pikiran pertama: terlalu menguras emosi.'
      ),
    ],
  },
  {
    id: 9,
    question: M(
      '연애에서 내가 가장 고치고 싶은 점은?',
      'What do you most want to fix about yourself in love?',
      '恋愛で一番直したい自分の点は？',
      '恋爱里你最想改掉的点是？',
      '戀愛裡你最想改掉的點是？',
      'Trong yêu đương, điều bạn muốn sửa nhất là?',
      'Dalam asmara, hal apa yang paling ingin kamu perbaiki?'
    ),
    options: [
      opt(
        0,
        'A. 상대를 더 믿고 불안해하지 않는 것',
        'A. Trust more and worry less.',
        'A. もっと信じて、不安を減らすこと。',
        'A. 更信任对方，少焦虑。',
        'A. 更信任對方，少焦慮。',
        'A. Tin tưởng hơn, lo ít hơn.',
        'A. Lebih percaya dan kurang cemas.'
      ),
      opt(
        1,
        'B. 초반의 열정을 오래 유지하는 것',
        'B. Keep early passion alive longer.',
        'B. 最初の熱量を長く保つこと。',
        'B. 把初期的热情维持更久。',
        'B. 把初期的熱情維持更久。',
        'B. Giữ lửa ban đầu lâu hơn.',
        'B. Mempertahankan semangat awal lebih lama.'
      ),
      opt(
        2,
        'C. 내 감정을 솔직하게 표현하는 것',
        'C. Express my feelings honestly.',
        'C. 感情を正直に表現すること。',
        'C. 更坦诚地表达感受。',
        'C. 更坦誠地表達感受。',
        'C. Bày tỏ cảm xúc thật lòng.',
        'C. Mengungkapkan perasaan dengan jujur.'
      ),
      opt(
        3,
        'D. 감정 기복을 줄이고 안정적으로 대하는 것',
        'D. Smooth out mood swings—respond more steadily.',
        'D. 感情の波を抑え、安定して向き合うこと。',
        'D. 减少情绪波动，更稳定地面对。',
        'D. 減少情緒波動，更穩定地面對。',
        'D. Giảm thất thường—ứng xử ổn định hơn.',
        'D. Kurangi naik turun emosi—lebih stabil.'
      ),
    ],
  },
  {
    id: 10,
    question: M(
      '연애 중 혼자 있는 시간에 주로 하는 생각은?',
      'When you’re alone while dating, what runs through your mind?',
      '恋愛中、一人の時間に何を考えがち？',
      '恋爱时独处，你通常在想什么？',
      '戀愛時獨處，你通常在想什麼？',
      'Khi yêu mà ở một mình, bạn thường nghĩ gì?',
      'Saat pacaran dan sendirian, pikiranmu ke mana?'
    ),
    options: [
      opt(
        0,
        'A. 상대가 지금 뭘 하는지, 나를 생각하는지 자꾸 신경 쓰인다',
        'A. What they’re doing—whether they’re thinking of me.',
        'A. 今何をしているか、自分のことを考えているか気になる。',
        'A. 总在想对方在做什么、有没有想我。',
        'A. 總在想對方在做什麼、有沒有想我。',
        'A. Họ đang làm gì—có nhớ mình không.',
        'A. Apa yang mereka lakukan—apakah memikirkanku.'
      ),
      opt(
        1,
        'B. 이 관계가 맞는 건지, 내가 맞게 하고 있는 건지 의심이 든다',
        'B. Doubting if this relationship—or I—am right.',
        'B. この関係や自分のやり方が合っているか疑う。',
        'B. 怀疑这段关系或自己的做法对不对。',
        'B. 懷疑這段關係或自己的做法對不對。',
        'B. Nghi ngờ mối quan hệ hoặc cách mình đang làm.',
        'B. Meragukan hubungan ini atau cara diri sendiri.'
      ),
      opt(
        2,
        'C. 하고 싶은 말, 못 한 말들이 머릿속에서 맴돈다',
        'C. Words I didn’t say loop in my head.',
        'C. 言いたかった言葉が頭の中を巡る。',
        'C. 想说却没说的话在脑子里打转。',
        'C. 想說卻沒說的話在腦子裡打轉。',
        'C. Những lời chưa nói cứ quay trong đầu.',
        'C. Kata-kata yang belum terucap terus berputar.'
      ),
      opt(
        3,
        'D. 오늘 내가 왜 그랬지 하는 자책이나 후회가 생긴다',
        'D. Regret or self-blame: “Why did I do that today?”',
        'D. 「今日なぜああした」と後悔や自責が出る。',
        'D. 后悔或自责：“我今天为什么那样？”',
        'D. 後悔或自責：「我今天為什麼那樣？」',
        'D. Hối hận hoặc tự trách: “Sao hôm nay mình lại vậy?”',
        'D. Menyesal atau menyalahkan diri: “Kenapa tadi begitu?”'
      ),
    ],
  },
  {
    id: 11,
    question: M(
      '연인이 나를 정말 좋아한다는 확신이 들 때 나는?',
      'When you truly feel they love you, you tend to…',
      '恋人に本当に好かれていると確信したとき、あなたは？',
      '当你确信恋人真的喜欢你时，你会？',
      '當你確信戀人真的喜歡你時，你會？',
      'Khi chắc chắn người yêu thật lòng thích mình, bạn?',
      'Saat yakin pasangan benar-benar mencintaimu, kamu?'
    ),
    options: [
      opt(
        0,
        'A. 그제서야 안심이 되고 여유가 생긴다',
        'A. Finally relax and feel at ease.',
        'A. ようやく安心して余裕が出る。',
        'A. 才安心，变得从容。',
        'A. 才安心，變得從容。',
        'A. Cuối cùng thở phào và thấy nhẹ nhàng.',
        'A. Akhirnya tenang dan merasa lega.'
      ),
      opt(
        1,
        'B. 잠깐은 좋은데 금방 또 설렘이 줄어드는 느낌이 든다',
        'B. Good for a moment, then the spark fades again.',
        'B. 一瞬は良いが、すぐまたドキドキが減る気がする。',
        'B. 好一下，很快又觉得心动淡了。',
        'B. 好一下，很快又覺得心動淡了。',
        'B. Vui một lúc rồi lại thấy xao xuyến tụt nhanh.',
        'B. Senyum sebentar lalu kilatnya hilang lagi.'
      ),
      opt(
        2,
        'C. 나도 표현하고 싶어지는데 여전히 어색하다',
        'C. I want to express love back, but it still feels awkward.',
        'C. 自分も表現したいが、まだぎこちない。',
        'C. 也想表达，但还是别扭。',
        'C. 也想表達，但還是彆扭。',
        'C. Muốn bày tỏ nhưng vẫn ngượng.',
        'C. Ingin menunjukkan perasaan tapi masih canggung.'
      ),
      opt(
        3,
        'D. 이 감정이 오래갈지 불안해진다',
        'D. I worry whether this feeling will last.',
        'D. この気持ちが続くか不安になる。',
        'D. 担心这种感觉能持续多久。',
        'D. 擔心這種感覺能持續多久。',
        'D. Lo cảm xúc này có kéo dài không.',
        'D. Khawatir perasaan ini tidak bertahan.'
      ),
    ],
  },
  {
    id: 12,
    question: M(
      '나에게 지금 가장 필요한 것을 솔직하게 고른다면?',
      'Honestly—what do you need most right now?',
      '今の自分に一番必要なものを正直に選ぶと？',
      '说实话，你现在最需要的是？',
      '說實話，你現在最需要的是？',
      'Thật lòng—bạn cần nhất lúc này là gì?',
      'Jujur—apa yang paling kamu butuhkan sekarang?'
    ),
    options: [
      opt(
        0,
        'A. 상대를 믿는 연습, 불안을 다스리는 방법',
        'A. Practice trusting and managing anxiety.',
        'A. 信頼の練習と不安のコントロール。',
        'A. 练习信任、管理不安。',
        'A. 練習信任、管理不安。',
        'A. Luyện tin tưởng và quản lý lo âu.',
        'A. Latihan percaya dan mengelola kecemasan.'
      ),
      opt(
        1,
        'B. 관계를 신선하게 유지하는 방법, 열정 지속하기',
        'B. Keep the relationship fresh; sustain passion.',
        'B. 関係を新鮮に保つ方法、熱量を続けること。',
        'B. 保持关系新鲜感，延续热情。',
        'B. 保持關係新鮮感，延續熱情。',
        'B. Giữ mối mới mẻ; duy trì đam mê.',
        'B. Menjaga hubungan tetap segar; mempertahankan gairah.'
      ),
      opt(
        2,
        'C. 감정을 솔직하게 표현하는 연습, 자기 목소리 내기',
        'C. Practice honest expression; find my voice.',
        'C. 感情を正直に表現する練習、自分の声を出すこと。',
        'C. 练习坦诚表达，发出自己的声音。',
        'C. 練習坦誠表達，發出自己的聲音。',
        'C. Luyện bày tỏ thật; tìm giọng nói của mình.',
        'C. Latihan mengungkapkan perasaan; menemukan suaramu.'
      ),
      opt(
        3,
        'D. 감정 조절 능력, 안정적인 내면 만들기',
        'D. Emotional regulation; building inner stability.',
        'D. 感情調整力、安定した内面を作ること。',
        'D. 情绪调节能力，建立稳定的内心。',
        'D. 情緒調節能力，建立穩定的內心。',
        'D. Điều tiết cảm xúc; xây nội tâm vững.',
        'D. Mengatur emosi; membangun kestabilan batin.'
      ),
    ],
  },
];

export const phase3LovePrescriptionResults: Phase3LovePrescriptionResult[] = [
  {
    type: 'Type1',
    emoji: '💊',
    title: M(
      '불안이 연애를 망치기 전에, 신뢰 훈련 처방전 (0~5점)',
      'Before anxiety ruins love: trust-training prescription (0–5)',
      '不安が恋を壊す前に、信頼トレーニングの処方箋（0〜5点）',
      '别让焦虑毁掉恋爱：信任训练处方（0~5分）',
      '別讓焦慮毀掉戀愛：信任訓練處方（0~5分）',
      'Trước khi lo âu làm hỏng tình yêu: đơn luyện tin cậy (0–5)',
      'Sebelum cemas merusak cinta: resep latihan kepercayaan (0–5)'
    ),
    diagnosisName: M(
      '불안 과부하 증후군',
      'Anxiety overload syndrome',
      '不安過負荷症候群',
      '焦虑过载综合征',
      '焦慮過載症候群',
      'Hội chứng quá tải lo âu',
      'Sindrom kelebihan kecemasan'
    ),
    openingLine: M(
      '상대를 사랑하는 것보다 잃을까 봐 두려운 마음이 더 커져 있는 상태입니다.',
      'Fear of losing them has grown bigger than love.',
      '相手を愛するより、失うのが怖い気持ちの方が大きい状態です。',
      '比起爱对方，更怕失去对方的恐惧占了上风。',
      '比起愛對方，更怕失去對方的恐懼占了上風。',
      'Nỗi sợ mất người ấy lớn hơn cả tình yêu.',
      'Ketakutan kehilangan mereka lebih besar daripada cinta.'
    ),
    description: M(
      '당신의 연애 고민은 결국 하나로 귀결됩니다. 이 사람이 나를 진짜 좋아하는 걸까? 상대의 반응 하나하나에 감정이 흔들리고, 확인하고 싶은 마음이 반복되고, 잠깐의 연락 공백이 하루를 망칩니다. 이 불안은 상대의 문제가 아니라 아직 나 자신을 충분히 믿지 못하는 것에서 옵니다. 상대가 나를 좋아한다는 증거를 찾는 것보다, 내가 충분히 사랑받을 자격이 있다는 것을 먼저 믿는 연습이 필요합니다.',
      'Your dating worries boil down to one question: do they really like me? Every reaction sways you; you keep seeking proof; a short silence can ruin your day. This anxiety isn’t about them—it’s about not trusting yourself yet. Practice believing you deserve love before hunting for evidence from them.',
      'あなたの恋の悩みは結局一つに集約されます。「本当に好き？」相手の反応一つ一つに揺れ、確認したくなり、連絡の空白が一日を壊します。この不安は相手ではなく、まだ自分を十分に信じられないことから。相手の好意の証拠を探す前に、「私は愛される資格がある」と先に信じる練習が必要です。',
      '你的恋爱烦恼归根到底是一个问题：TA真的喜欢我吗？对方每个反应都牵动你，总想确认，短暂的失联就能毁掉一整天。这种焦虑往往不在对方，而在你还不够相信自己。比起寻找“对方喜欢我”的证据，更需要先练习相信“我值得被爱”。',
      '你的戀愛煩惱歸根到底是一個問題：對方真的喜歡我嗎？每個反應都牽動你，一直想確認，短暫失聯就能毀掉一整天。這種焦慮往往不在對方，而在你還不夠相信自己。比起尋找對方喜歡你的證據，更需要先練習相信「我值得被愛」。',
      'Lo lắng yêu đương của bạn quy về một câu: họ có thật lòng thích mình không? Mỗi phản ứng đều lay động bạn; bạn cần xác nhận; im lặng ngắn cũng có thể hỏng cả ngày. Lo âu này không phải do họ—mà do bạn chưa đủ tin chính mình. Hãy luyện tin rằng bạn xứng đáng được yêu trước khi đi tìm bằng chứng từ họ.',
      'Kekhawatiranmu soal asmara mengerucut ke satu pertanyaan: apakah mereka benar-benar menyukaiku? Setiap reaksi menggoyahkanmu; kamu terus mencari kepastian; hening sebentar bisa merusak harimu. Kecemasan ini bukan tentang mereka—tapi tentang kamu yang belum cukup percaya pada diri sendiri. Latihlah percaya bahwa kamu layak dicintai sebelum mencari bukti dari mereka.'
    ),
    prescription1: M(
      '확인 충동 멈추기 훈련 연락이 없을 때 바로 확인하거나 연락을 시도하는 대신, 20분을 다른 것에 집중해보세요. 20분 후에도 연락하고 싶으면 그때 하세요. 충동과 행동 사이에 틈을 만드는 것이 첫 번째 훈련입니다.',
      'Urge-control training: when there’s no reply, don’t chase—focus on something else for 20 minutes. If you still want to reach out after 20 minutes, then do. The first skill is creating space between impulse and action.',
      '確認衝動ストップの訓練：連絡がないときすぐ確認したくても、まず20分別のことに集中。20分後も連絡したければその時。衝動と行動の間に隙間を作るのが第一歩です。',
      '停止“确认冲动”训练：没有回复时别立刻追问，先专注做别的事20分钟。20分钟后还想联系再发。在冲动和行动之间留出空隙是第一课。',
      '停止「確認衝動」訓練：沒有回覆時別立刻追問，先專注做別的事20分鐘。20分鐘後還想聯絡再發。在衝動和行動之間留出空隙是第一課。',
      'Luyện dừng “xác nhận”: khi không có tin nhắc, đừng đuổi theo—tập trung việc khác 20 phút. Sau 20 phút vẫn muốn nhắn thì hãy nhắn. Kỹ năng đầu là tạo khoảng cách giữa xung động và hành động.',
      'Latihan hentikan dorongan “memastikan”: saat tidak ada balasan, jangan langsung mengejar—fokus hal lain 20 menit. Jika setelah 20 menit masih ingin menghubungi, baru lakukan. Langkah pertama adalah memberi jarak antara dorongan dan tindakan.'
    ),
    prescription2: M(
      '불안 일기 쓰기 불안한 감정이 올라올 때 나는 지금 OO가 두렵다라고 써보세요. 감정을 글로 꺼내면 생각보다 빠르게 크기가 줄어듭니다.',
      'Anxiety journaling: when worry rises, write “Right now I’m afraid of ___.” Putting it on paper often shrinks it faster than you expect.',
      '不安日記：不安が来たら「今、〇〇が怖い」と書く。文字にすると思ったより早く小さくなります。',
      '焦虑日记：不安上来时写下“我现在害怕___”。写出来往往比想象中更快变小。',
      '焦慮日記：不安上來時寫下「我現在害怕___」。寫出來往往比想像中更快變小。',
      'Nhật ký lo âu: khi lo lên, hãy viết “Lúc này mình sợ ___.” Viết ra thường làm nó nhỏ lại nhanh hơn bạn nghĩ.',
      'Jurnal kecemasan: saat cemas muncul, tulis “Saat ini aku takut akan ___.” Menuliskannya sering membuatnya mengecil lebih cepat dari perkiraan.'
    ),
    prescription3: M(
      '자기 확신 문장 만들기 나는 충분히 사랑받을 자격이 있다를 매일 아침 3번 소리 내어 말해보세요. 처음엔 어색해도 괜찮습니다.',
      'Self-affirmation line: every morning say out loud three times, “I am worthy of love.” Awkward at first—that’s okay.',
      '自己肯定の文：毎朝「私は十分愛される資格がある」と3回音に出す。最初はぎこちなくて大丈夫です。',
      '自我肯定句：每天早上大声说三遍“我值得被爱”。一开始别扭也没关系。',
      '自我肯定句：每天早上大聲說三遍「我值得被愛」。一開始彆扭也沒關係。',
      'Câu khẳng định: mỗi sáng nói to ba lần “Tôi xứng đáng được yêu.” Lúc đầu ngượng cũng không sao.',
      'Kalimat afirmasi: setiap pagi ucapkan tiga kali dengan keras, “Aku layak dicintai.” Awalnya canggung—tidak apa-apa.'
    ),
    dosage: M(
      '매일, 꾸준히',
      'Daily, consistently',
      '毎日、継続して',
      '每天，坚持',
      '每天，堅持',
      'Mỗi ngày, kiên trì',
      'Setiap hari, konsisten'
    ),
    precautions: M(
      '상대를 테스트하거나 답장 속도로 감정을 재지 마세요',
      'Don’t test your partner or measure feelings by reply speed.',
      '相手を試したり、返信の速さで気持ちを測らないでください。',
      '不要用试探对方或回复速度来衡量感情。',
      '不要用試探對方或回覆速度來衡量感情。',
      'Đừng thử thách đối phương hay đo cảm xúc bằng tốc độ trả lời.',
      'Jangan menguji pasangan atau mengukur perasaan dari kecepatan balasan.'
    ),
    sideEffects: M(
      '처음엔 불안이 더 크게 느껴질 수 있지만 이것은 회복의 과정입니다',
      'At first anxiety may feel stronger—that can be part of recovery.',
      '最初は不安が強く感じることもありますが、回復の過程です。',
      '一开始可能觉得更焦虑，这可能是恢复过程的一部分。',
      '一開始可能覺得更焦慮，這可能是恢復過程的一部分。',
      'Ban đầu lo âu có thể cảm thấy mạnh hơn—đó có thể là một phần của quá trình hồi phục.',
      'Awalnya kecemasan bisa terasa lebih kuat—itu bisa jadi bagian dari pemulihan.'
    ),
    extraRx: M(
      '심리 상담 1회 이상 경험해보기',
      'Try at least one therapy session',
      'カウンセリングを1回以上体験する',
      '至少体验一次心理咨询',
      '至少體驗一次心理諮詢',
      'Thử ít nhất một buổi tư vấn tâm lý',
      'Coba setidaknya satu sesi konseling'
    ),
    prescriptionPeriod: M(
      '최소 3개월 꾸준히',
      'At least 3 months, steadily',
      '最低3か月は継続',
      '至少坚持三个月',
      '至少堅持三個月',
      'Ít nhất 3 tháng, đều đặn',
      'Minimal 3 bulan, konsisten'
    ),
    shareTypeName: M(
      '신뢰 훈련 처방전',
      'Trust-training prescription',
      '信頼トレーニングの処方箋',
      '信任训练处方',
      '信任訓練處方',
      'Đơn luyện tin cậy',
      'Resep latihan kepercayaan'
    ),
  },
  {
    type: 'Type2',
    emoji: '💊',
    title: M(
      '설렘이 식기 전에 깊이를 만드는, 관계 지속력 처방전 (6~11점)',
      'Build depth before the spark fades: relationship endurance (6–11)',
      'ドキドキが冷める前に深みを：関係の持続力（6〜11点）',
      '在心动冷却前建立深度：关系续航处方（6~11分）',
      '在心動冷卻前建立深度：關係續航處方（6~11分）',
      'Trước khi lửa tắt, hãy xây chiều sâu: đơn duy trì mối quan hệ (6–11)',
      'Bangun kedalaman sebelum kilat hilang: resep daya tahan hubungan (6–11)'
    ),
    diagnosisName: M(
      '초반 연소 후 방전 증후군',
      'Early burn-out, then drain syndrome',
      '初期燃焼後の放電症候群',
      '前期燃尽后断电综合征',
      '前期燃盡後斷電症候群',
      'Hội chứng cháy sớm rồi cạn',
      'Sindrom terbakar di awal lalu habis'
    ),
    openingLine: M(
      '처음의 설렘이 식으면 관계도 함께 식어버리는 패턴이 반복되고 있습니다.',
      'When the early spark fades, the relationship seems to cool with it—again and again.',
      '最初のドキドキが冷めると、関係も一緒に冷めるパターンが繰り返されています。',
      '心动一淡，关系也跟着淡的模式在重复。',
      '心動一淡，關係也跟著淡的模式在重複。',
      'Khi lửa đầu tắt, mối quan hệ cũng nguội theo—lặp lại.',
      'Saat kilat awal pudar, hubungan ikut dingin—berulang.'
    ),
    description: M(
      '연애 초반엔 누구보다 열정적이고 다정하지만, 관계가 안정되기 시작하면 어딘가 무감각해지고 예전 같지 않다는 말을 듣게 됩니다. 설렘이 없어지면 사랑도 없어진 것 같아서 관계에 회의감이 생기기도 합니다. 그런데 설렘과 사랑은 다릅니다. 설렘은 초반에 강하고 시간이 지나면 자연스럽게 줄어듭니다. 대신 그 자리에 더 깊고 단단한 무언가가 채워져야 합니다. 그 전환을 의도적으로 만드는 것이 지금 당신에게 필요한 처방입니다.',
      'Early on you’re warm and all-in, but once things stabilize you go numb and hear “you’ve changed.” When butterflies disappear, love can feel gone too—and doubt creeps in. But excitement and love aren’t the same. Spark is strong early and naturally fades; something deeper must take its place. Your prescription is to build that shift on purpose.',
      '最初は誰より熱く優しいのに、安定するとどこか無感覚になり「前みたいじゃない」と言われます。ドキドキが消えると愛も消えたように感じ、疑いも生まれます。でもドキドキと愛は違います。ドキドキは初期に強く、時間で自然に減ります。その代わりに、より深く堅い何かが必要です。その転換を意図的に作るのが処方です。',
      '热恋时你比谁都投入，关系一稳定就容易麻木，听到“你变了”。心动没了就像爱也没了，开始对关系怀疑。但心动和爱不是一回事。心动前期强、久了会自然减弱，需要由更深、更稳的东西填补。有意识地完成这个转换，就是你现在需要的处方。',
      '熱戀時你比誰都投入，關係一穩定就容易麻木，聽到「你變了」。心動沒了就像愛也沒了，開始對關係懷疑。但心動和愛不是一回事。心動前期強、久了會自然減弱，需要由更深、更穩的東西填補。有意識地完成這個轉換，就是你現在需要的處方。',
      'Đầu mối bạn nồng nhiệt nhất, nhưng khi ổn định bạn tê dại và nghe “bạn khác trước.” Hết xao xuyến là y như hết yêu—nghi ngờ len lỏi. Nhưng xao xuyến và tình yêu khác nhau. Cảm giác đầu mạnh rồi tự giảm; cần thứ sâu hơn lấp vào. Đơn cho bạn là chủ động tạo sự chuyển đó.',
      'Di awal kamu hangat dan total, begitu stabil kamu mati rasa dan mendengar “kamu berubah.” Kilat hilang terasa seperti cinta hilang—keraguan muncul. Tapi kilat dan cinta beda. Kilat kuat di awal lalu mereda; sesuatu yang lebih dalam harus menggantikan. Resepmu adalah membangun peralihan itu dengan sengaja.'
    ),
    prescription1: M(
      '설렘 vs 안정감 구분하기 설렘이 줄었다는 것을 사랑이 식었다는 신호로 읽지 마세요. 지금 설레진 않지만 이 사람과 있으면 편안하다는 감각이 실제로는 더 깊은 연결의 신호입니다.',
      'Separate spark from steadiness: less excitement doesn’t automatically mean love is gone. Feeling calm with them—even without butterflies—can signal a deeper bond.',
      'ドキドキと安心を分ける：ドキドキが減った＝愛が冷めた、とは限りません。今はときめかなくても一緒にいると落ち着く感覚は、むしろ深いつながりのサインです。',
      '区分心动与安定：心动减弱不等于爱没了。现在虽不怦然心动，但和对方在一起很安心，往往是更深连接的信号。',
      '區分心動與安定：心動減弱不等於愛沒了。現在雖不怦然心動，但和對方在一起很安心，往往是更深連結的信號。',
      'Tách “xao xuyến” và “ổn định”: ít hồi hộp không có nghĩa là hết yêu. Cảm giác an toàn bên họ—dù không còn bướm dạ dày—có thể là dấu gắn kết sâu hơn.',
      'Pisahkan kilat dan ketenangan: lebih sedikit deg-deg bukan berarti cinta hilang. Merasa tenang bersama mereka—meski tanpa kupu-kupu—bisa jadi sinyal ikatan lebih dalam.'
    ),
    prescription2: M(
      '새로운 경험 함께 만들기 함께 처음 해보는 것을 한 달에 한 번 만들어보세요. 새로운 경험은 뇌를 다시 초반 설렘 상태로 잠깐 되돌려 줍니다.',
      'Co-create novelty: once a month do something together for the first time. New shared experiences briefly bring the brain back to early spark mode.',
      '新しい体験を一緒に：月に一度、二人で初めてのことを。新しい共有体験は脳を一瞬、初期のドキドキに戻します。',
      '一起创造新鲜感：每月尝试一件两人都没做过的事。新的共同体验会让大脑短暂回到热恋模式。',
      '一起創造新鮮感：每月嘗試一件兩人都沒做過的事。新的共同體驗會讓大腦短暫回到熱戀模式。',
      'Cùng tạo mới: mỗi tháng một lần làm điều cả hai chưa từng. Trải nghiệm mới chung đưa não về chế độ đầu mối trong chốc lát.',
      'Ciptakan hal baru bersama: sebulan sekali lakukan sesuatu yang belum pernah kalian lakukan berdua. Pengalaman baru sebentar mengembalikan otak ke mode awal jatuh cinta.'
    ),
    prescription3: M(
      '상대의 새로운 면 발견하기 오래된 연인에게도 아직 모르는 부분이 있습니다. 요즘 네가 새로 관심 갖는 게 뭐야?라고 물어보세요. 상대를 다시 낯선 사람처럼 보는 연습이 관계에 산소를 불어넣습니다.',
      'Discover a new side of them: even long-term partners have unknown corners. Ask, “What are you newly into lately?” Practice seeing them fresh—oxygen for the relationship.',
      '相手の新しい一面：長い恋人にもまだ知らない部分があります。「最近新しくハマってることは？」と聞く。相手をまた初めての人のように見る練習が酸素になります。',
      '发现对方的新一面：再久的恋人也有你不知道的部分。问问“你最近新对什么感兴趣？”练习把对方当新人看，给关系输氧。',
      '發現對方的新一面：再久的戀人也有你不知道的部分。問問「你最近新對什麼感興趣？」練習把對方當新人看，給關係輸氧。',
      'Khám phá mặt mới: dù lâu năm vẫn còn góc chưa biết. Hỏi “Dạo này bạn mới thích gì?” Tập nhìn họ như người mới—bổ oxy cho mối quan hệ.',
      'Temukan sisi baru: bahkan pasangan lama pun ada bagian tak terjamah. Tanya “Belakangan kamu tertarik apa yang baru?” Latih melihat mereka seperti orang baru—oksigen untuk hubungan.'
    ),
    dosage: M(
      '권태기가 오기 전부터 예방적으로 복용',
      'Take preventively—before boredom sets in',
      '倦怠が来る前から予防的に',
      '在倦怠来临前预防性“服用”',
      '在倦怠來臨前預防性「服用」',
      'Dùng phòng ngừa—trước khi nhàm chán',
      'Minum preventif—sebelum bosan datang'
    ),
    precautions: M(
      '설렘이 없다고 해서 관계를 끝내는 결정을 급하게 하지 마세요',
      'Don’t rush to end things just because the spark dipped.',
      'ドキドキがないからといって、関係を急いで終わらせないでください。',
      '别只因心动减弱就仓促决定分手。',
      '別只因心動減弱就倉促決定分手。',
      'Đừng vội kết thúc chỉ vì xao xuyến giảm.',
      'Jangan buru-buru mengakhiri hanya karena kilat meredup.'
    ),
    sideEffects: M(
      '새로운 시도가 처음엔 어색하게 느껴질 수 있습니다',
      'New attempts may feel awkward at first.',
      '新しい試みは最初ぎこちなく感じることがあります。',
      '新的尝试一开始可能别扭。',
      '新的嘗試一開始可能彆扭。',
      'Thử mới ban đầu có thể ngượng.',
      'Upaya baru mungkin terasa canggung di awal.'
    ),
    extraRx: M(
      '커플 버킷리스트 함께 작성하기',
      'Write a couple bucket list together',
      'カップルでバケットリストを一緒に作る',
      '一起写情侣愿望清单',
      '一起寫情侶願望清單',
      'Cùng viết bucket list đôi',
      'Menulis bucket list pasangan bersama'
    ),
    prescriptionPeriod: M(
      '관계가 지속되는 내내',
      'As long as the relationship lasts',
      '関係が続く限り',
      '关系存续期间',
      '關係存續期間',
      'Trong suốt thời gian yêu',
      'Selama hubungan berlangsung'
    ),
    shareTypeName: M(
      '관계 지속력 처방전',
      'Relationship endurance prescription',
      '関係の持続力の処方箋',
      '关系续航处方',
      '關係續航處方',
      'Đơn duy trì mối quan hệ',
      'Resep daya tahan hubungan'
    ),
  },
  {
    type: 'Type3',
    emoji: '💊',
    title: M(
      '말하지 않으면 아무도 모릅니다, 자기표현 처방전 (12~19점)',
      'If you don’t say it, no one knows: self-expression (12–19)',
      '言わなければ誰も分からない：自己表現の処方箋（12〜19点）',
      '不说就没人懂：自我表达处方（12~19分）',
      '不說就沒人懂：自我表達處方（12~19分）',
      'Không nói thì không ai hiểu: đơn tự bày tỏ (12–19)',
      'Tanpa berbicara tak ada yang tahu: resep ekspresi diri (12–19)'
    ),
    diagnosisName: M(
      '감정 언어 부재 증후군',
      'Missing emotional language syndrome',
      '感情言語欠乏症候群',
      '情感语言缺失综合征',
      '情感語言缺失症候群',
      'Thiếu ngôn ngữ cảm xúc',
      'Sindrom kurang bahasa emosi'
    ),
    openingLine: M(
      '하고 싶은 말이 있는데 꺼내지 못하고, 표현하지 않아서 오해가 쌓이는 패턴입니다.',
      'You hold words in; without expression, misunderstandings pile up.',
      '言いたいことがあっても出せず、表現しないから誤解が積もるパターンです。',
      '有话说不出口、不表达，误会越积越多。',
      '有話說不出口、不表達，誤會越積越多。',
      'Có điều muốn nói nhưng giữ trong; không bày tỏ nên hiểu lầm chồng chất.',
      'Ada yang ingin dikatakan tapi tertahan; tanpa ekspresi, salah paham menumpuk.'
    ),
    description: M(
      '당신의 연애에서 가장 큰 문제는 마음속에는 분명히 있는데 밖으로 나오지 않는 감정들입니다. 서운해도 말하지 않고, 좋아도 표현하지 않고, 원하는 것이 있어도 상대가 알아서 해주길 바랍니다. 상대 입장에서는 당신의 마음을 읽기가 너무 어렵습니다. 표현하지 않은 감정은 상대에게 존재하지 않는 것과 같습니다. 지금 당신에게 필요한 것은 용기 있는 자기 표현입니다.',
      'Your core issue: feelings stay inside. You stay quiet when hurt, don’t show affection, and hope they’ll just know. From their side, reading you is nearly impossible. Unspoken feelings might as well not exist. What you need is courageous expression.',
      'あなたの恋の最大の問題は、心の中にはあるのに外に出ない感情です。モヤモヤしても言わず、好きでも表現せず、望みがあっても相手が察してくれるのを待つ。相手からは読むのが難しすぎます。表現しない感情は、相手には存在しないのと同じです。必要なのは勇気ある自己表現です。',
      '你最大的问题是：心里有，嘴上没有。委屈不说，喜欢也不说，有期待却等对方猜。对方几乎读不懂你。不表达的情绪，对对方就像不存在。你需要的是勇敢表达。',
      '你最大的問題是：心裡有，嘴上沒有。委屈不說，喜歡也不說，有期待卻等對方猜。對方幾乎讀不懂你。不表達的情緒，對對方就像不存在。你需要的是勇敢表達。',
      'Vấn đề lớn nhất: cảm xúc ở trong không ra ngoài. Buồn không nói, thích không thể hiện, mong muốn gì cũng chờ họ đoán. Phía họ gần như không đọc được bạn. Cảm xúc không nói ra coi như không tồn tại với họ. Bạn cần bày tỏ can đảm.',
      'Masalah utamanya: perasaan ada di dalam, tidak keluar. Kesal diam, suka tak diungkap, berharap mereka mengerti sendiri. Dari sisi mereka, hampir mustahil membacamu. Perasaan yang tak diungkap bagaikan tidak ada. Yang kamu butuhkan adalah ekspresi yang berani.'
    ),
    prescription1: M(
      '하루 한 가지 감정 표현하기 오늘 보고 싶었어, 오늘 고마웠어, 이게 좀 서운했어 중 하나만 말해보세요. 크게 시작하지 않아도 됩니다. 하루 한 가지면 충분합니다.',
      'One feeling a day: pick one—“I missed you,” “thanks for today,” or “this bothered me a little.” You don’t need a big start—one line is enough.',
      '一日一つ感情を表現：今日は「会いたかった」「今日はありがとう」「これちょっとモヤッとした」のどれか一つ。大げさでなく、一日一つで十分です。',
      '每天表达一种情绪：今天任选一句“想你了”“今天谢谢”“这点有点委屈”。不必轰轰烈烈，一天一句就够。',
      '每天表達一種情緒：今天任選一句「想你了」「今天謝謝」「這點有點委屈」。不必轟轟烈烈，一天一句就夠。',
      'Một cảm xúc mỗi ngày: chọn một—“nhớ bạn,” “cảm ơn hôm nay,” hoặc “chuyện này hơi chạnh lòng.” Không cần to tát—một câu là đủ.',
      'Satu perasaan sehari: pilih satu—“rindu,” “terima kasih hari ini,” atau “ini sedikit menyakitkan.” Tidak perlu besar—satu kalimat cukup.'
    ),
    prescription2: M(
      '말 대신 메시지로 시작하기 직접 말하는 것이 어색하면 문자로 먼저 표현해보세요. 오늘 같이 있어서 좋았어라는 한 문장이 관계를 바꿉니다.',
      'Start with a text if talking feels hard. One sentence like “I loved being with you today” can shift the whole dynamic.',
      '話すのが苦手なら、まずメッセージから。「今日一緒にいて良かった」一文が関係を変えます。',
      '当面说不出口就先发消息。一句“今天在一起很开心”就能改变关系。',
      '當面說不出口就先發訊息。一句「今天在一起很開心」就能改變關係。',
      'Nếi ngại nói trực tiếp, nhắn trước. Một câu “Hôm nay ở bên bạn rất vui” có thể đổi cả mối quan hệ.',
      'Jika bicara langsung canggung, mulai dari chat. Satu kalimat “Senang hari ini bersamamu” bisa mengubah dinamika.'
    ),
    prescription3: M(
      '욕구 파악 연습 나는 지금 무엇을 원하는가를 하루에 한 번 스스로에게 물어보세요. 내가 원하는 것을 파악해야 상대에게 전달할 수 있습니다.',
      'Needs check-in: once a day ask yourself, “What do I want right now?” You can’t communicate a need you haven’t named.',
      '欲求の確認：一日一回「今、自分は何が欲しい？」と自分に聞く。名前をつけないと相手に伝えられません。',
      '需求觉察：每天问自己一次“我现在想要什么？”说不清自己要什么，就没法传达给对方。',
      '需求覺察：每天問自己一次「我現在想要什麼？」說不清自己要什麼，就沒法傳達給對方。',
      'Kiểm tra nhu cầu: mỗi ngày hỏi “Mình muốn gì ngay bây giờ?” Không gọi tên thì không truyền đạt được.',
      'Cek kebutuhan: sehari sekali tanya pada diri sendiri, “Apa yang kuinginkan sekarang?” Tanpa menamai, tak bisa disampaikan.'
    ),
    dosage: M(
      '감정이 생기는 그 순간 바로 복용',
      'Take it the moment a feeling shows up',
      '感情が湧いたその瞬間に',
      '情绪一出现就“服用”',
      '情緒一出現就「服用」',
      'Ngay khi cảm xúc vừa đến',
      'Segera saat perasaan muncul'
    ),
    precautions: M(
      '한꺼번에 쌓아두었다가 폭발시키지 마세요. 조금씩 자주가 핵심입니다',
      'Don’t stockpile then explode—little and often is the point.',
      '溜め込んで一気に爆発させない。少しずつ、頻繁にがコツです。',
      '别攒到一次性爆发。少量、频繁是关键。',
      '別憋到一次爆發。少量、頻繁是關鍵。',
      'Đừng tích rồi nổ—ít thường xuyên mới là chìa khóa.',
      'Jangan menumpuk lalu meledak—sedikit-sering adalah intinya.'
    ),
    sideEffects: M(
      '처음 표현하는 순간이 매우 어색할 수 있습니다. 그것은 정상입니다',
      'The first times you speak up may feel very awkward—that’s normal.',
      '最初に表現する瞬間はとてもぎこちないかもしれません。それは正常です。',
      '刚开始表达会很别扭，这很正常。',
      '剛開始表達會很彆扭，這很正常。',
      'Lần đầu nói ra có thể rất ngượng—bình thường thôi.',
      'Saat pertama mengungkapkan bisa sangat canggung—itu normal.'
    ),
    extraRx: M(
      '감정 일기 쓰기, 자기 표현 관련 책 읽기',
      'Keep a feelings journal; read on assertive communication',
      '感情日記、自己表現の本を読む',
      '写情绪日记；读自我表达相关书籍',
      '寫情緒日記；讀自我表達相關書籍',
      'Viết nhật ký cảm xúc; đọc sách về giao tiếp',
      'Jurnal perasaan; baca buku komunikasi asertif'
    ),
    prescriptionPeriod: M(
      '습관이 될 때까지, 최소 6개월',
      'Until it’s a habit—at least 6 months',
      '習慣になるまで、最低6か月',
      '直到成为习惯，至少半年',
      '直到成為習慣，至少半年',
      'Đến khi thành thói quen—ít nhất 6 tháng',
      'Sampai jadi kebiasaan—minimal 6 bulan'
    ),
    shareTypeName: M(
      '자기표현 처방전',
      'Self-expression prescription',
      '自己表現の処方箋',
      '自我表达处方',
      '自我表達處方',
      'Đơn tự bày tỏ',
      'Resep ekspresi diri'
    ),
  },
  {
    type: 'Type4',
    emoji: '💊',
    title: M(
      '감정이 나를 지배하기 전에, 내면 안정화 처방전 (20~27점)',
      'Before emotions rule you: inner-stability prescription (20–27)',
      '感情に飲まれる前に：内面の安定化（20〜27点）',
      '别让情绪支配你：内在稳定处方（20~27分）',
      '別讓情緒支配你：內在穩定處方（20~27分）',
      'Trước khi cảm xúc thống trị: đơn ổn định nội tâm (20–27)',
      'Sebelum emosi menguasaimu: resep stabilitas batin (20–27)'
    ),
    diagnosisName: M(
      '감정 조절 불균형 증후군',
      'Emotional regulation imbalance syndrome',
      '感情コントロール不均衡症候群',
      '情绪调节失衡综合征',
      '情緒調節失衡症候群',
      'Mất cân bằng điều tiết cảm xúc',
      'Sindrom ketidakseimbangan regulasi emosi'
    ),
    openingLine: M(
      '감정이 너무 크게 올라오거나 너무 빠르게 무너져서 관계 자체가 소진되고 있습니다.',
      'Feelings surge too big or collapse too fast—and the relationship burns out.',
      '感情が大きすぎたり、あまりに早く崩れたりして、関係そのものがすり減っています。',
      '情绪来得太大或崩得太快，关系本身被耗尽。',
      '情緒來得太大或崩得太快，關係本身被耗盡。',
      'Cảm xúc dâng quá lớn hoặc sụp quá nhanh—mối quan hệ kiệt sức.',
      'Emosi melonjak terlalu besar atau runtuh terlalu cepat—hubungan habis.'
    ),
    description: M(
      '당신은 감정이 풍부하고 연애에 진심입니다. 그런데 그 감정의 크기가 때때로 본인도 상대도 감당하기 어려운 수준이 됩니다. 기분이 좋을 때와 나쁠 때의 차이가 크고, 감정이 폭발한 뒤 자책하는 패턴이 반복됩니다. 연애를 잘하려면 먼저 나의 감정 상태를 안정화하는 것이 선행되어야 합니다. 상대를 바꾸는 것이 아니라 내 내면을 먼저 안정시키는 것이 지금 가장 필요한 처방입니다.',
      'You feel deeply and love seriously—but the intensity can overwhelm both of you. Swings between highs and lows are wide; after explosions come self-blame, on repeat. To love well, stabilize your inner state first. The prescription isn’t to change them—it’s to steady yourself.',
      'あなたは感情豊かで本気で恋をします。でもその強さが、自分にも相手にも負担になることがあります。上げ下げが大きく、爆発のあと自責が繰り返されます。恋をうまくするには、まず感情の土台を安定させる。変えるのは相手ではなく、まず内側です。',
      '你感情丰富、恋爱认真，但强度有时让双方都难以承受。高低落差大，爆发后自责循环。想谈好恋爱，先稳定内在状态。处方不是改变对方，是先稳住自己。',
      '你感情豐富、戀愛認真，但強度有時讓雙方都難以承受。高低落差大，爆發後自責循環。想談好戀愛，先穩定內在狀態。處方不是改變對方，是先穩住自己。',
      'Bạn cảm sâu và yêu nghiêm túc—nhưng cường độ có thể quá tải cho cả hai. Chênh lệch cao-thấp lớn; sau vụ nổ là tự trách, lặp lại. Để yêu tốt, ổn định nội tâm trước. Đơn không phải đổi họ—mà là vững mình.',
      'Kamu merasakan dalam dan mencintai sungguh-sungguh—tapi intensitasnya bisa membebani kalian berdua. Ayunan tinggi-rendah lebar; setelah ledakan datang menyalahkan diri, berulang. Untuk mencintai dengan baik, stabilkan batin dulu. Bukan mengubah mereka—mengokohkan dirimu.'
    ),
    prescription1: M(
      '감정 신호 포착하기 감정이 폭발하기 전에 신체 신호가 먼저 옵니다. 가슴이 답답해지거나, 목소리가 떨리거나, 호흡이 빨라지는 순간을 알아채는 연습을 해보세요. 신호를 인식하면 폭발 전에 멈출 수 있습니다.',
      'Catch early signals: before a blow-up, your body warns you—tight chest, shaky voice, fast breath. Notice the signal, pause before the explosion.',
      '感情のサインを掴む：爆発の前に体が先に反応します。胸のつかえ、声の震え、呼吸の速さに気づく練習。サインが分かれば、爆発前に止められます。',
      '捕捉情绪信号：爆发前身体先有反应—胸闷、声音发抖、呼吸加快。识别信号，就能在爆发前停下。',
      '捕捉情緒信號：爆發前身體先有反應—胸悶、聲音發抖、呼吸加快。識別信號，就能在爆發前停下。',
      'Bắt tín hiệu sớm: trước khi nổ, cơ thể báo trước—ngực nặng, giọng run, thở nhanh. Nhận ra tín hiệu, dừng trước khi bùng.',
      'Tangkap sinyal awal: sebelum meledak, tubuh memberi peringatan—dada sesak, suara gemetar, napas cepat. Sadari sinyal, berhenti sebelum ledakan.'
    ),
    prescription2: M(
      '3분 멈추기 규칙 감정이 올라올 때 나 지금 잠깐 진정이 필요해라고 말하고 3분간 다른 공간에 있어보세요. 3분이 감정 폭발을 막는 가장 효과적인 방법입니다.',
      '3-minute pause: when heat rises, say “I need a short break to calm down,” then spend three minutes in another space. Three minutes is one of the most effective brakes on emotional explosions.',
      '3分ルール：熱が上がったら「少し落ち着く時間が必要」と言い、別の場所で3分。3分は感情爆発を止める強力なブレーキです。',
      '三分钟暂停：情绪上来时说“我需要冷静一下”，到另一个空间待三分钟。三分钟是拦住情绪爆发最有效的方法之一。',
      '三分鐘暫停：情緒上來時說「我需要冷靜一下」，到另一個空間待三分鐘。三分鐘是攔住情緒爆發最有效的方法之一。',
      'Quy tắc 3 phút: khi nóng lên, nói “Mình cần vài phút để bình tĩnh,” rời sang chỗ khác 3 phút. 3 phút là phanh mạnh nhất với cơn bùng nổ.',
      'Jeda 3 menit: saat panas, katakan “Aku butuh sebentar untuk tenang,” lalu ke ruang lain 3 menit. 3 menit adalah rem paling efektif untuk ledakan emosi.'
    ),
    prescription3: M(
      '자기 돌봄 루틴 만들기 수면, 식사, 가벼운 운동이 감정 조절에 직접적인 영향을 줍니다. 연애 문제 이전에 기본 생활 루틴을 안정시키는 것이 내면 안정화의 기반입니다.',
      'Self-care routine: sleep, meals, light exercise directly affect regulation. Before “relationship problems,” stabilize basics—inner stability starts there.',
      'セルフケアルーティン：睡眠・食事・軽い運動は感情調整に直結します。恋の問題の前に、生活の土台を整えるのが内面安定の基盤です。',
      '自我照顾routine：睡眠、饮食、轻度运动直接影响情绪调节。在恋爱问题之前，先稳住生活基础，内在稳定才有根基。',
      '自我照顧routine：睡眠、飲食、輕度運動直接影響情緒調節。在戀愛問題之前，先穩住生活基礎，內在穩定才有根基。',
      'Thói quen tự chăm: ngủ, ăn, vận động nhẹ ảnh hưởng trực tiếp đến điều tiết. Trước “chuyện yêu,” hãy ổn định nền sống—đó là nền nội tâm.',
      'Rutinitas perawatan diri: tidur, makan, olahraga ringan memengaruhi regulasi. Sebelum “masalah asmara,” stabilkan dasar hidup—stabilitas batin dimulai di situ.'
    ),
    dosage: M(
      '감정이 올라오는 순간 즉시 복용',
      'Take it the instant emotions surge',
      '感情が上がった瞬間にすぐ',
      '情绪一涌上就立刻“服用”',
      '情緒一湧上就立刻「服用」',
      'Ngay khi cảm xúc dâng',
      'Segera saat emosi melonjak'
    ),
    precautions: M(
      '감정을 억누르는 것과 조절하는 것은 다릅니다. 억누르지 말고 조절하세요',
      'Regulating emotions isn’t the same as stuffing them down—regulate, don’t suppress.',
      '感情を抑えることと調整することは違います。抑え込まず、調整してください。',
      '调节情绪不等于压抑情绪。要调节，不要硬压。',
      '調節情緒不等於壓抑情緒。要調節，不要硬壓。',
      'Điều tiết khác với nén—điều tiết, đừng chặn.',
      'Mengatur bukan menekan—atur, jangan menahan.'
    ),
    sideEffects: M(
      '처음엔 멈추는 것이 더 화나게 느껴질 수 있습니다. 그것도 정상입니다',
      'Pausing may feel even angrier at first—that can be normal too.',
      '最初は止めることがむしろイライラすることがあります。それも正常です。',
      '一开始暂停可能更火大，这也可能正常。',
      '一開始暫停可能更火大，這也可能正常。',
      'Lúc đầu dừng lại có thể càng tức—cũng có thể bình thường.',
      'Berhenti sejenak bisa terasa lebih marah di awal—itu juga bisa normal.'
    ),
    extraRx: M(
      '심리 상담, 마음 챙김 명상 앱 활용',
      'Therapy; mindfulness/meditation apps',
      'カウンセリング、マインドフルネス瞑想アプリ',
      '心理咨询；正念/冥想类应用',
      '心理諮詢；正念/冥想類應用',
      'Trị liệu; app chánh niệm/thiền',
      'Terapi; aplikasi mindfulness/meditasi'
    ),
    prescriptionPeriod: M(
      '꾸준히, 장기 복용 권장',
      'Ongoing—long-term use recommended',
      '継続的に、長期で',
      '持续进行，建议长期服用',
      '持續進行，建議長期服用',
      'Duy trì lâu dài được khuyến nghị',
      'Berlanjut—penggunaan jangka panjang disarankan'
    ),
    shareTypeName: M(
      '내면 안정화 처방전',
      'Inner-stability prescription',
      '内面安定の処方箋',
      '内在稳定处方',
      '內在穩定處方',
      'Đơn ổn định nội tâm',
      'Resep stabilitas batin'
    ),
  },
  {
    type: 'Type5',
    emoji: '💊',
    title: M(
      '연애 전에 나부터, 자기 사랑 우선 처방전 (28~33점)',
      'Love starts with you: self-love-first prescription (28–33)',
      '恋の前に、まず自分へ：セルフラブ優先（28〜33点）',
      '恋爱前先爱自己：自我关怀优先处方（28~33分）',
      '戀愛前先愛自己：自我關懷優先處方（28~33分）',
      'Trước khi yêu người khác: đơn yêu bản thân trước (28–33)',
      'Sebelum mencintai orang lain: resep utamakan diri sendiri (28–33)'
    ),
    diagnosisName: M(
      '자기 돌봄 결핍 증후군',
      'Self-care deficit syndrome',
      'セルフケア不足症候群',
      '自我关怀缺失综合征',
      '自我關懷缺失症候群',
      'Thiếu tự chăm sóc',
      'Sindrom kekurangan perawatan diri'
    ),
    openingLine: M(
      '연애 고민의 근본에는 나 자신을 충분히 사랑하지 못하는 것이 있습니다.',
      'Under dating worries is often not loving yourself enough.',
      '恋の悩みの根っこには、自分を十分に愛せていないことがあります。',
      '恋爱烦恼的根源，常常是还不够爱自己。',
      '戀愛煩惱的根源，常常是還不夠愛自己。',
      'Gốc rễ lo lắng yêu đương thường là chưa đủ yêu bản thân.',
      'Di balik kekhawatiran asmara seringkali kurang mencintai diri sendiri.'
    ),
    description: M(
      '연애가 힘든 이유를 상대에서 찾기 전에, 나 자신을 어떻게 대하고 있는지를 먼저 봐야 합니다. 자신을 작게 여기면 상대의 작은 말 한마디에 쉽게 흔들리고, 과한 요구도 받아들이게 되고, 나를 힘들게 하는 관계도 끊어내지 못합니다. 좋은 연애를 하려면 먼저 나 자신과 좋은 관계를 맺어야 합니다. 지금 가장 먼저 처방해야 할 것은 상대방이 아니라 나 자신입니다.',
      'Before blaming a partner, look at how you treat yourself. If you shrink yourself, a small remark can shake you; you accept unfair demands; you can’t leave what drains you. Good love starts with a good relationship with yourself. The first prescription isn’t for them—it’s for you.',
      '相手のせいにする前に、自分への扱いを見る。自分を小さく見ると、一言で揺れ、過剰な要求も受け入れ、苦しい関係も切れません。良い恋は、まず自分との関係から。最初の処方は相手ではなく自分です。',
      '在怪对方之前，先看你怎么对自己。小看自己，一句话就能动摇你；你会接受过分要求；也离不开消耗你的关系。好的恋爱，先和自己处好关系。第一张处方不是给对方，是给你自己。',
      '在怪對方之前，先看你怎么對自己。小看自己，一句話就能動搖你；你會接受過分要求；也離不開消耗你的關係。好的戀愛，先和自己處好關係。第一張處方不是給對方，是給你自己。',
      'Trước khi đổ lỗi đối phương, xem bạn đối xử với mình thế nào. Coi mình nhỏ bé thì một câu cũng lay động; bạn nhận đòi hỏi quá đáng; không rời được điều làm kiệt sức. Yêu tốt bắt đầu từ quan hệ với chính mình. Đơn đầu không phải cho họ—mà cho bạn.',
      'Sebelum menyalahkan pasangan, lihat bagaimana kamu memperlakukan diri sendiri. Jika meremehkan diri, satu kata bisa mengguncangmu; kamu menerima tuntutan berlebihan; tidak bisa meninggalkan yang menguras. Cinta baik dimulai dari hubungan dengan diri sendiri. Resep pertama bukan untuk mereka—untukmu.'
    ),
    prescription1: M(
      '나에게 좋은 것 매일 하나씩 오늘 나를 위해 한 가지를 해보세요. 좋아하는 음식 먹기, 산책하기, 좋아하는 음악 듣기. 크지 않아도 됩니다. 나를 챙기는 습관이 자기 사랑의 시작입니다.',
      'One small kindness to yourself daily: eat something you like, take a walk, play a favorite song. Small counts—caring for yourself is where self-love begins.',
      '自分への小さな優しさを毎日一つ：好きなものを食べる、散歩、好きな音楽。小さくて大丈夫。自分を労わる習慣がセルフラブの始まりです。',
      '每天为自己做一件小事：吃喜欢的食物、散步、听喜欢的歌。不必大，照顾自己就是自爱的开始。',
      '每天為自己做一件小事：吃喜歡的食物、散步、聽喜歡的歌。不必大，照顧自己就是自愛的開始。',
      'Một việc tử tế với bản thân mỗi ngày: ăn món thích, đi bộ, nghe nhạc thích. Nhỏ cũng được—chăm mình là khởi đầu tự yêu.',
      'Satu kebaikan kecil untuk dirimu setiap hari: makan yang disukai, jalan-jalan, musik favorit. Kecil pun jadi—merawat diri adalah awal mencintai diri.'
    ),
    prescription2: M(
      '내가 나에게 하는 말 점검하기 하루 동안 나 자신에게 어떤 말을 하는지 관찰해보세요. 나 왜 이래, 나는 안 돼 같은 말을 그럴 수도 있어, 잘하고 있어로 바꾸는 연습을 해보세요.',
      'Audit your self-talk for a day. Swap lines like “What’s wrong with me?” for “That happens,” and “I’m not enough” for “I’m doing okay.”',
      '一日、自分への言葉を観察。「どうして私は」「ダメな私」を「そういう時もある」「よくやってる」に置き換える練習を。',
      '观察一天你对自己说的话。把“我怎么这样”“我不行”换成“这也很正常”“我已经做得很好”。',
      '觀察一天你對自己說的話。把「我怎麼這樣」「我不行」換成「這也很正常」「我已經做得很好」。',
      'Theo dõi lời tự nhủ cả ngày. Đổi “Sao mình vậy?” thành “Cũng có lúc thế,” và “Mình không đủ” thành “Mình đang cố.”',
      'Pantau bicara pada diri sehari penuh. Ganti “Kenapa aku begini?” dengan “Itu bisa terjadi,” dan “Aku tidak cukup” dengan “Aku sudah berusaha.”'
    ),
    prescription3: M(
      '나의 경계선 하나 세우기 나를 힘들게 하는 것 중에서 하나를 골라 이것은 하지 않겠다라고 결정해보세요. 경계를 세우는 것이 자기 사랑의 가장 구체적인 실천입니다.',
      'Set one boundary: pick one thing that drains you and decide, “I won’t do this anymore.” Boundaries are self-love in action.',
      '境界線を一つ：自分を苦しめることから一つ選び、「これはもうしない」と決める。境界線はセルフラブの具体的実践です。',
      '设一条边界：从让你疲惫的事里选一件，决定“我不再这样做了”。边界是自爱最具体的实践。',
      '設一條邊界：從讓你疲憊的事裡選一件，決定「我不再這樣做了」。邊界是自愛最具體的實踐。',
      'Một ranh giới: chọn một điều làm bạn kiệt sức và quyết “Mình không làm nữa.” Ranh giới là tự yêu hành động.',
      'Satu batas: pilih satu hal yang mengurasmu dan putuskan “Aku tidak akan melakukan ini lagi.” Batas adalah cinta diri yang konkret.'
    ),
    dosage: M(
      '매일, 나를 위한 시간에 복용',
      'Daily, during time reserved for you',
      '毎日、自分のための時間に',
      '每天，在留给自己的时间',
      '每天，在留給自己的時間',
      'Mỗi ngày, trong thời gian dành cho mình',
      'Setiap hari, pada waktu untuk dirimu'
    ),
    precautions: M(
      '자기 사랑은 이기적인 것이 아닙니다. 나를 사랑할수록 상대도 더 잘 사랑할 수 있습니다',
      'Self-love isn’t selfish—the more you care for yourself, the better you can love others.',
      'セルフラブは利己ではありません。自分を愛せるほど、相手もより愛せます。',
      '自爱不是自私。越能善待自己，越能好好爱别人。',
      '自愛不是自私。越能善待自己，越能好好愛別人。',
      'Tự yêu không ích kỷ—càng chăm mình, càng yêu người khác tốt hơn.',
      'Mencintai diri bukan egois—semakin kamu menjaga diri, semakin baik kamu mencintai orang lain.'
    ),
    sideEffects: M(
      '처음엔 나를 챙기는 것이 어색하고 죄책감이 들 수 있습니다',
      'At first self-care may feel awkward or guilty—that’s common.',
      '最初は自分を労わるのがぎこちなく、罪悪感が出ることもあります。',
      '一开始照顾自己可能别扭或有愧疚感，这很常见。',
      '一開始照顧自己可能彆扭或有愧疚感，這很常見。',
      'Lúc đầu tự chăm có thể ngượng hoặc tội lỗi—khá phổ biến.',
      'Awalnya merawat diri bisa canggung atau bersalah—itu umum.'
    ),
    extraRx: M(
      '자존감 관련 책 읽기, 심리 상담',
      'Read on self-esteem; try counseling',
      '自尊心の本を読む、カウンセリング',
      '读自尊相关书籍；心理咨询',
      '讀自尊相關書籍；心理諮詢',
      'Đọc sách lòng tự trọng; tư vấn',
      'Baca buku harga diri; konseling'
    ),
    prescriptionPeriod: M(
      '평생 복용 권장',
      'Recommended for life',
      '生涯続けるのがおすすめ',
      '建议长期服用（终身习惯）',
      '建議長期服用（終身習慣）',
      'Khuyến nghị suốt đời',
      'Disarankan seumur hidup'
    ),
    shareTypeName: M(
      '자기 사랑 우선 처방전',
      'Self-love-first prescription',
      'セルフラブ優先の処方箋',
      '自我关怀优先处方',
      '自我關懷優先處方',
      'Đơn yêu bản thân trước',
      'Resep utamakan diri sendiri'
    ),
  },
  {
    type: 'Type6',
    emoji: '💊',
    title: M(
      '패턴을 깨는 것이 먼저, 연애 리셋 처방전 (34~36점)',
      'Break the pattern first: love reset prescription (34–36)',
      'まずパターンを壊す：恋愛リセット（34〜36点）',
      '先打破模式：恋爱重置处方（34~36分）',
      '先打破模式：戀愛重置處方（34~36分）',
      'Phá vỡ mô hình trước: đơn reset tình yêu (34–36)',
      'Pecahkan pola dulu: resep reset cinta (34–36)'
    ),
    diagnosisName: M(
      '연애 패턴 고착 증후군',
      'Stuck relationship-pattern syndrome',
      '恋愛パターン固着症候群',
      '恋爱模式固化综合征',
      '戀愛模式固化症候群',
      'Mô hình yêu bị kẹt',
      'Sindrom pola asmara menempel'
    ),
    openingLine: M(
      '연애마다 비슷한 문제가 반복되고 있다면, 이제는 패턴 자체를 바꿔야 할 시점입니다.',
      'If every relationship replays the same problems, it’s time to change the pattern itself.',
      '恋愛のたびに同じ問題が繰り返すなら、パターンそのものを変える時です。',
      '如果每段恋爱都重复相似问题，是时候改变模式本身。',
      '如果每段戀愛都重複相似問題，是時候改變模式本身。',
      'Nếu mỗi mối lặp lại vấn đề giống nhau, đã đến lúc đổi chính mô hình.',
      'Jika setiap hubungan mengulang masalah serupa, saatnya mengubah polanya.'
    ),
    description: M(
      '매번 다른 사람을 만나는데 결과가 비슷하다면, 공통 변수는 상대가 아니라 나입니다. 이것은 당신이 나쁜 사람이라는 의미가 아닙니다. 아직 깨지지 않은 연애 패턴이 있다는 의미입니다. 지금까지의 방식으로는 다른 결과를 기대하기 어렵습니다. 패턴을 인식하고, 구체적으로 무엇이 반복되는지 파악하고, 의도적으로 다른 선택을 해보는 것. 그것이 지금 당신에게 가장 필요한 연애 처방입니다.',
      'Different people, similar endings—the common factor is you. That doesn’t mean you’re bad; it means an unbroken pattern is running. Same actions rarely produce new outcomes. Name what repeats, then deliberately choose differently. That’s the prescription you need now.',
      '人は違っても結果が似るなら、共通項は自分です。あなたが悪いという意味ではなく、まだ壊れていない恋愛パターンがあるということ。同じやり方で違う結果は期待しにくい。何が繰り返されているか認識し、意図的に違う選択を。それが今の処方です。',
      '人换了结局却像，变量往往在你自己。这不代表你不好，而是有还没打破的恋爱模式。同样做法很难期待不同结果。识别重复之处，再刻意做不同选择——这是你现在最需要的处方。',
      '人換了結局卻像，變數往往在你自己。這不代表你不好，而是有還沒打破的戀愛模式。同樣做法很難期待不同結果。識別重複之處，再刻意做不同選擇——這是你現在最需要的處方。',
      'Khác người mà kết cục giống—yếu tố chung là bạn. Không có nghĩa bạn xấu; có nghĩa là còn mô hình chưa vỡ. Cùng cách khó mong kết quả khác. Nhận diện điều lặp lại, rồi cố ý chọn khác—đó là đơn bạn cần.',
      'Orang beda, akhirnya mirip—faktor bersamanya kamu. Bukan berarti kamu jahat; ada pola yang belum pecah. Cara sama jarang hasil baru. Kenali yang berulang, lalu pilih beda dengan sengaja—itu resep yang kamu butuhkan.'
    ),
    prescription1: M(
      '연애 패턴 지도 그리기 지난 연애 2~3개를 떠올리고 공통점을 써보세요. 어떤 사람에게 끌렸는지, 어떤 이유로 힘들었는지, 어떻게 끝났는지. 공통점이 보이면 패턴이 보입니다.',
      'Map your pattern: recall 2–3 past relationships and list similarities—who you chose, what hurt, how it ended. Shared themes reveal the pattern.',
      '恋愛パターンの地図：過去2〜3件を思い出し共通点を書く。どんな人に惹かれたか、何が苦しかったか、どう終わったか。共通点が見えるとパターンが見えます。',
      '画一张恋爱模式图：回想2~3段感情，写下共同点—你被谁吸引、哪里痛苦、如何结束。共同点出现，模式就清晰。',
      '畫一張戀愛模式圖：回想2~3段感情，寫下共同點—你被誰吸引、哪裡痛苦、如何結束。共同點出現，模式就清晰。',
      'Vẽ bản đồ mô hình: nhớ 2–3 mối, liệt điểm chung—bạn chọn ai, đau ở đâu, kết thế nào. Chủ đề chung cho thấy mô hình.',
      'Petakan pola: ingat 2–3 hubungan, tulis kesamaan—siapa yang kamu pilih, apa yang menyakitkan, bagaimana berakhir. Tema bersama menyingkap pola.'
    ),
    prescription2: M(
      '한 가지 다르게 해보기 평소에 하던 것과 반대로 행동해보세요. 먼저 연락하지 않던 사람이라면 먼저 연락해보고, 표현하지 않던 사람이라면 한 번 표현해보세요. 작은 변화가 패턴을 깨는 시작입니다.',
      'Do one opposite thing: if you never text first, try texting first; if you never speak up, say one honest line. Small shifts start breaking the loop.',
      '一つだけ違う行動：いつも先に連絡しないなら先に連絡してみる。表現しないなら一度だけ表現してみる。小さな変化がループを壊す始まりです。',
      '试一件相反的事：从不主动联系就试一次主动；从不表达就试表达一次。小改变是打破循环的开始。',
      '試一件相反的事：從不主動聯絡就試一次主動；從不表達就試表達一次。小改變是打破循環的開始。',
      'Làm một điều ngược lại: chưa bao giờ nhắn trước thì thử nhắn trước; chưa bao giờ nói thật thì thử một câu. Thay đổi nhỏ mở vòng lặp.',
      'Lakukan satu hal berlawanan: jika tak pernah chat dulu, coba dulu; jika tak pernah jujur, ucapkan satu kalimat. Perubahan kecil memecah lingkaran.'
    ),
    prescription3: M(
      '전문가의 도움 받기 혼자서 패턴을 깨는 것은 매우 어렵습니다. 심리 상담을 받아보는 것이 가장 직접적이고 효과적인 처방입니다. 용기 있는 선택이 인생을 바꿉니다.',
      'Get professional help—breaking patterns alone is hard. Therapy is one of the most direct tools. A brave choice can change your life.',
      '専門家の助けを：一人でパターンを壊すのは難しい。カウンセリングは最も直接的な処方の一つ。勇気ある選択が人生を変えます。',
      '寻求专业帮助—独自打破模式很难。心理咨询是最直接有效的工具之一。勇敢的选择会改变人生。',
      '尋求專業幫助—獨自打破模式很難。心理諮詢是最直接有效的工具之一。勇敢的選擇會改變人生。',
      'Nhờ chuyên gia—tự phá mô hình một mình rất khó. Trị liệu là công cụ trực tiếp nhất. Lựa chọn can đảm đổi đời.',
      'Minta bantuan profesional—memecah pola sendiri sulit. Terapi salah satu alat paling langsung. Pilihan berani mengubah hidup.'
    ),
    dosage: M(
      '다음 연애를 시작하기 전에 반드시 복용',
      'Take it before starting the next relationship',
      '次の恋を始める前に必ず',
      '在下一段恋爱开始前务必“服用”',
      '在下一段戀愛開始前務必「服用」',
      'Nhất định trước khi bắt đầu mối tiếp theo',
      'Wajib sebelum memulai hubungan berikutnya'
    ),
    precautions: M(
      '패턴을 아는 것만으로는 부족합니다. 반드시 다른 선택을 행동으로 옮겨야 합니다',
      'Knowing the pattern isn’t enough—you must act on different choices.',
      'パターンを知るだけでは足りません。違う選択を行動に移す必要があります。',
      '只知道模式不够，必须把不同选择落实到行动。',
      '只知道模式不夠，必須把不同選擇落實到行動。',
      'Biết mô hình chưa đủ—phải hành động theo lựa chọn khác.',
      'Mengetahui pola tidak cukup—harus bertindak dengan pilihan berbeda.'
    ),
    sideEffects: M(
      '패턴을 인식하는 과정이 불편하고 아플 수 있습니다. 그 불편함이 성장의 신호입니다',
      'Facing your pattern can hurt—that discomfort can be growth.',
      'パターンに向き合うのは不快で痛いこともあります。その痛みは成長のサインです。',
      '面对模式可能不舒服、会痛，这种不适也可能是成长的信号。',
      '面對模式可能不舒服、會痛，這種不適也可能是成長的信號。',
      'Đối diện mô hình có thể khó chịu—đó có thể là dấu trưởng thành.',
      'Menghadapi pola bisa menyakitkan—ketidaknyamanan itu bisa jadi tanda bertumbuh.'
    ),
    extraRx: M(
      '심리 상담, 자기 탐색 워크북 활용',
      'Therapy; self-exploration workbooks',
      'カウンセリング、自己探求ワークブック',
      '心理咨询；自我探索练习册',
      '心理諮詢；自我探索練習冊',
      'Trị liệu; sổ bài tập khám phá bản thân',
      'Terapi; buku kerja eksplorasi diri'
    ),
    prescriptionPeriod: M(
      '패턴이 바뀌었다고 느껴질 때까지',
      'Until you feel the pattern has shifted',
      'パターンが変わったと感じるまで',
      '直到你感到模式真的改变',
      '直到你感到模式真的改變',
      'Cho đến khi bạn cảm thấy mô hình đã đổi',
      'Sampai kamu merasa polanya benar-benar berubah'
    ),
    shareTypeName: M(
      '연애 리셋 처방전',
      'Love reset prescription',
      '恋愛リセットの処方箋',
      '恋爱重置处方',
      '戀愛重置處方',
      'Đơn reset tình yêu',
      'Resep reset cinta'
    ),
  },
];
