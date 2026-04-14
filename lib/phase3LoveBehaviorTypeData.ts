/** 나는 연애할 때 어떤 유형? — 12문항 2지선다, 총점 0~12 → 8유형. A=0, B=1. 셔플은 컴포넌트에서 처리, score는 옵션에 유지. */

type LocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';

/** 7개국 문구 — 컴포넌트에서 locale로 접근 */
export function L(
  ko: string,
  en: string,
  ja: string,
  zhCN: string,
  zhTW: string,
  vi: string,
  id: string
): Record<LocaleKey, string> {
  return {
    ko,
    en,
    ja,
    'zh-CN': zhCN,
    'zh-TW': zhTW,
    vi,
    id,
  };
}

export interface Phase3LoveBehaviorTypeQuestion {
  id: number;
  question: Record<LocaleKey, string>;
  options: {
    text: Record<LocaleKey, string>;
    score: number;
  }[];
}

export interface Phase3LoveBehaviorTypeResult {
  type: string;
  emoji: string;
  title: Record<LocaleKey, string>;
  shortDescription: Record<LocaleKey, string>;
  description: Record<LocaleKey, string>;
  loveTypeLabel: Record<LocaleKey, string>;
  scoreBand: Record<LocaleKey, string>;
  characteristics: Record<LocaleKey, string>;
  partnerView: Record<LocaleKey, string>;
  prescription: Record<LocaleKey, string>;
  goodMatch: Record<LocaleKey, string>;
  badMatch: Record<LocaleKey, string>;
}

export const phase3LoveBehaviorTypeQuestions: Phase3LoveBehaviorTypeQuestion[] = [
  {
    id: 1,
    question: L(
      '좋아하는 사람 앞에서 나는?',
      'When you’re around someone you like, you tend to…',
      '好きな人の前では、あなたは？',
      '在喜欢的人面前，你更常？',
      '在喜歡的人面前，你更常？',
      'Khi ở bên người bạn thích, bạn thường…',
      'Di dekat orang yang kamu suka, kamu cenderung…'
    ),
    options: [
      {
        text: L(
          '괜히 더 무표정해지거나 툭툭 건드리거나 티 안 내려고 애쓴다',
          'Go more poker-faced, poke them playfully, or try hard not to show it.',
          'わざと無表情になったり、ちょっと突っついたり、バレないように必死になる。',
          '更面无表情、轻轻逗对方，或拼命不让我喜欢你表现出来。',
          '更面無表情、輕輕逗對方，或拚命不讓喜歡表現出來。',
          'Tỏ ra lạnh hơn, trêu nhẹ, hoặc cố không để lộ.',
          'Lebih datar, iseng menyenggol, atau berusaha keras menyembunyikan perasaan.'
        ),
        score: 0,
      },
      {
        text: L(
          '눈이 마주치는 것만으로도 얼굴이 빨개지고 말이 많아진다',
          'Blush easily and talk more the moment your eyes meet.',
          '目が合うだけで顔が赤くなり、しゃべりが増える。',
          '只要对上视线就脸红、话也变多。',
          '只要對上視線就臉紅、話也變多。',
          'Chỉ cần mắt chạm nhau là đỏ mặt và nói nhiều hơn.',
          'Begitu tatapan bertemu wajah memerah dan ngobrol makin banyak.'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 2,
    question: L(
      '연인에게 먼저 "보고 싶어"라고 말하는 편인가요?',
      'Do you usually say “I miss you” to your partner first?',
      '恋人に先に「会いたい」と言う方？',
      '你会先对恋人说「想你」吗？',
      '你會先對戀人說「想你」嗎？',
      'Bạn có hay là người nói “nhớ em/cậu” trước không?',
      'Apakah kamu yang lebih dulu bilang “kangen” ke pasangan?'
    ),
    options: [
      {
        text: L(
          '생각은 해도 먼저 말하기가 쑥스럽다. 상대가 먼저 해주면 좋겠다',
          'I feel it, but saying it first is awkward—I wish they’d say it first.',
          '気持ちはあっても先に言うのは照れる。相手から言ってほしい。',
          '心里会想，但先说有点害羞，希望对方先说。',
          '心裡會想，但先說有點害羞，希望對方先說。',
          'Có nghĩ nhưng ngại nói trước—muốn đối phương nói trước.',
          'Ada rindu tapi malu bilang dulu—lebih enak kalau pasangan duluan.'
        ),
        score: 0,
      },
      {
        text: L(
          '보고 싶으면 바로 말한다. 참는 게 더 이상하다',
          'If I miss them, I say it right away—holding back feels weirder.',
          '会いたいならすぐ言う。我慢する方が変。',
          '想就说，憋着更奇怪。',
          '想就說，憋著更奇怪。',
          'Nhớ là nói ngay—nhịn mới lạ.',
          'Kangen ya langsung bilang—nahan malah aneh.'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 3,
    question: L(
      '연인과 싸운 후 화해할 때 나는?',
      'After a fight with your partner, when making up you…',
      '恋人と喧嘩した後、仲直りするときのあなたは？',
      '和恋人吵架后和好的方式，你更常？',
      '和戀人吵架後和好的方式，你更常？',
      'Sau khi cãi nhau với người yêu, khi làm lành bạn…',
      'Setelah berantem dengan pasangan, saat berbaikan kamu…'
    ),
    options: [
      {
        text: L(
          '화해하고 싶은데 먼저 연락하기 자존심 상해서 기다리는 편이다',
          'Want to make up, but pride makes you wait for them to reach out first.',
          '仲直りしたいけど、先に連絡するのはプライドが許さず待つ。',
          '想和好想先联系但拉不下脸，多半等对方。',
          '想和好想先聯絡但拉不下臉，多半等對方。',
          'Muốn làm lành nhưng tự ái nên chờ đối phương liên lạc trước.',
          'Pengin rujuk tapi gengsi—cenderung nunggu pasangan chat dulu.'
        ),
        score: 0,
      },
      {
        text: L(
          '빨리 풀고 싶어서 먼저 연락하거나 찾아간다. 냉전이 제일 싫다',
          'Reach out or go see them first—I hate cold wars.',
          '早く解決したくて先に連絡するか会いに行く。冷戦は嫌。',
          '想快点和好会先联系或去找对方，最讨厌冷战。',
          '想好快點和好會先聯絡或去找對方，最討厭冷戰。',
          'Muốn sớm hàn gắn nên chủ động liên lạc—ghét chiến tranh lạnh nhất.',
          'Pengin cepat baikan—hubungi atau datangi dulu—benci dingin perang.'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 4,
    question: L(
      '연인이 오늘 좀 쌀쌀맞게 대할 때 나는?',
      'When your partner is a bit cold toward you today, you…',
      '恋人が今日ちょっとそっけないとき、あなたは？',
      '恋人今天对你有点冷淡时，你更常？',
      '戀人今天對你有點冷淡時，你更常？',
      'Khi người yêu hơi lạnh nhạt hôm nay, bạn…',
      'Saat pasangan agak dingin hari ini, kamu…'
    ),
    options: [
      {
        text: L(
          '"왜 그래?"라고 직접 묻기보다는 나도 좀 거리를 두거나 모른 척한다',
          'Rather than asking “What’s wrong?”, you pull back a little or act like you didn’t notice.',
          '「どうしたの？」と直接聞かず、こちらも距離を置くか知らんぷり。',
          '不太会直接问「怎么了」，而是也拉开距离或装没事。',
          '不太會直接問「怎麼了」，而是也拉開距離或裝沒事。',
          'Thay vì hỏi thẳng, bạn giãn khoảng cách hoặc làm như không để ý.',
          'Daripada tanya langsung, kamu menjauh sedikit atau pura-pura cuek.'
        ),
        score: 0,
      },
      {
        text: L(
          '"무슨 일 있어? 나한테 화난 거야?"라고 바로 물어본다',
          'Ask right away: “Something up? Are you mad at me?”',
          '「何かあった？私に怒ってる？」とすぐ聞く。',
          '会直接问「怎么了？生我气了吗？」',
          '會直接問「怎麼了？生我氣了嗎？」',
          'Hỏi ngay: “Có chuyện gì? Giận mình à?”',
          'Langsung tanya: “Ada apa? Marah sama aku?”'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 5,
    question: L(
      '연인한테 "나 어때?"라는 질문을 자주 하는 편인가요?',
      'Do you often ask your partner “What do you think of me?”',
      '恋人に「私どう？」とよく聞く方？',
      '你会常问恋人「你觉得我怎么样」吗？',
      '你會常問戀人「你覺得我怎麼樣」嗎？',
      'Bạn có hay hỏi người yêu “Em/cậu thấy mình thế nào?” không?',
      'Apakah kamu sering tanya pasangan “menurut kamu aku gimana?”'
    ),
    options: [
      {
        text: L(
          '거의 안 한다. 굳이 확인 안 해도 된다고 생각한다',
          'Rarely—I don’t feel I need to check.',
          'ほとんどしない。わざわざ確認しなくていいと思う。',
          '几乎不问，觉得不必刻意确认。',
          '幾乎不問，覺得不必刻意確認。',
          'Hiếm khi—không nghĩ cần xác nhận.',
          'Jarang—nggak merasa perlu minta konfirmasi.'
        ),
        score: 0,
      },
      {
        text: L(
          '자주 한다. 상대가 나를 어떻게 생각하는지 계속 궁금하다',
          'Often—I keep wondering how they see me.',
          'よく聞く。相手が自分をどう見ているかずっと気になる。',
          '经常问，一直好奇对方怎么看自己。',
          '經常問，一直好奇對方怎麼看自己。',
          'Thường xuyên—luôn tò mò đối phương nghĩ gì về mình.',
          'Sering—penasaran terus pasangan melihatku seperti apa.'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 6,
    question: L(
      '연인이 다른 이성과 친하게 지내는 것을 알았을 때?',
      'When you learn your partner is close with someone of another gender, you…',
      '恋人が他の異性と仲良くしていると知ったら？',
      '发现恋人和别的异性走得很近时，你更常？',
      '發現戀人和別的異性走得很近時，你更常？',
      'Khi biết người yêu thân với người khác giới, bạn…',
      'Saat tahu pasangan akrab dengan lawan jenis lain, kamu…'
    ),
    options: [
      {
        text: L(
          '신경 쓰이지만 내색하지 않는다. 질투하는 게 쪽팔린다',
          'It bothers you, but you don’t show it—jealousy feels embarrassing.',
          '気になるけど出さない。嫉妬を見せるのが恥ずかしい。',
          '在意但不表现出来，觉得吃醋很丢脸。',
          '在意但不表現出來，覺得吃醋很丟臉。',
          'Có bực nhưng không lộ—ghen tuông thấy ngại.',
          'Terganggu tapi nggak nunjukkin—cemburu kerasa malu.'
        ),
        score: 0,
      },
      {
        text: L(
          '솔직하게 신경 쓰인다고 말하거나 표정에서 바로 드러난다',
          'You say it honestly or it shows on your face right away.',
          '正直に気になると言うか、表情にすぐ出る。',
          '会直说在意，或表情马上藏不住。',
          '會直說在意，或表情馬上藏不住。',
          'Nói thẳng là khó chịu hoặc lộ hết trên mặt.',
          'Bilang jujur atau langsung keluar di ekspresi.'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 7,
    question: L(
      '연인에게 고마움이나 사랑한다는 말을 자주 하나요?',
      'Do you often say thank you or “I love you” to your partner?',
      '恋人に「ありがとう」「愛してる」とよく言う？',
      '你会常对恋人说谢谢或我爱你吗？',
      '你會常對戀人說謝謝或我愛你嗎？',
      'Bạn có hay nói cảm ơn hoặc yêu với người yêu không?',
      'Apakah kamu sering bilang makasih atau cinta ke pasangan?'
    ),
    options: [
      {
        text: L(
          '말로 표현하기가 어색해서 행동으로 대신 보여주는 편이다',
          'Words feel awkward—you show it through actions instead.',
          '言葉は照れくさいので、行動で示すタイプ。',
          '嘴笨，更习惯用行动代替说出口。',
          '嘴笨，更習慣用行動代替說出口。',
          'Ngại nói—thể hiện bằng hành động.',
          'Canggung dengan kata—lebih sering tunjukkan lewat tindakan.'
        ),
        score: 0,
      },
      {
        text: L(
          '느끼면 바로 말한다. 표현은 아무리 해도 지나치지 않다고 생각한다',
          'If you feel it, you say it—you don’t think you can over-express love.',
          '感じたらすぐ言う。愛の表現に「やりすぎ」はないと思う。',
          '有感觉就说，觉得爱怎么说都不算多。',
          '有感覺就說，覺得愛怎麼說都不算多。',
          'Cảm là nói—không nghĩ thể hiện tình yêu là thừa.',
          'Kalau kerasa langsung bilang—nggak ada kata kebanyakan untuk kasih sayang.'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 8,
    question: L(
      '연인이 답장을 1~2시간 못 했을 때 나는?',
      'When your partner hasn’t replied for 1–2 hours, you…',
      '恋人が1〜2時間返信できないとき、あなたは？',
      '恋人一两小时没回消息时，你更常？',
      '戀人一兩小時沒回訊息時，你更常？',
      'Khi người yêu 1–2 giờ chưa trả lời, bạn…',
      'Saat pasangan belum balas 1–2 jam, kamu…'
    ),
    options: [
      {
        text: L(
          '바쁜가 보다 하고 기다린다. 딱히 신경 안 쓰는 척한다',
          'Assume they’re busy and wait—act like it doesn’t really bother you.',
          '忙しいんだろうと待つ。あまり気にしてないふり。',
          '觉得对方在忙就等，装作不太在意。',
          '覺得對方在忙就等，裝作不太在意。',
          'Cho là bận và chờ—làm như không bận tâm.',
          'Anggap sibuk dan nunggu—pura-pura nggak keganggu.'
        ),
        score: 0,
      },
      {
        text: L(
          '읽었는지 확인하거나 다른 방법으로 연락을 시도하게 된다',
          'You check if they read it or try to reach them another way.',
          '既読を確認したり、別の方法で連絡しようとする。',
          '会去看已读或换方式再联系对方。',
          '會去看已讀或換方式再聯絡對方。',
          'Kiểm tra đã đọc chưa hoặc liên lạc bằng cách khác.',
          'Cek sudah dibaca atau hubungi lewat cara lain.'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 9,
    question: L(
      '데이트 계획을 세울 때 나는?',
      'When planning a date, you…',
      'デートの計画を立てるとき、あなたは？',
      '规划约会时，你更常？',
      '規劃約會時，你更常？',
      'Khi lên kế hoạch hẹn hò, bạn…',
      'Saat merencanakan kencan, kamu…'
    ),
    options: [
      {
        text: L(
          '"아무 데나 괜찮아, 네가 정해"라고 하는 편이다',
          'You tend to say “Anywhere is fine—you decide.”',
          '「どこでもいい、あなたが決めて」と言う方。',
          '常说「随便，你定」。',
          '常說「隨便，你定」。',
          'Hay nói “Đâu cũng được—cậu chọn.”',
          'Sering bilang “Terserah kamu aja yang pilih.”'
        ),
        score: 0,
      },
      {
        text: L(
          '미리 리서치해서 코스를 짜거나 장소를 제안하는 편이다',
          'You research ahead and suggest a route or places.',
          '事前に調べてコースやお店を提案する方。',
          '会事先查好路线或提议地点。',
          '會事先查好路線或提議地點。',
          'Tìm hiểu trước và gợi ý lịch trình hoặc địa điểm.',
          'Riset dulu dan usulkan rute atau tempat.'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 10,
    question: L(
      '연인이 나한테 서운했다고 말할 때 나의 첫 반응은?',
      'When your partner says they felt hurt by you, your first reaction is…',
      '恋人に「傷ついた」と言われたときの最初の反応は？',
      '恋人说对你感到委屈时，你的第一反应更常？',
      '戀人說對你感到委屈時，你的第一反應更常？',
      'Khi người yêu nói họ tủi vì bạn, phản ứng đầu tiên là…',
      'Saat pasangan bilang kecewa karena kamu, reaksi pertama…'
    ),
    options: [
      {
        text: L(
          '"내가 뭘?" 하고 방어적으로 되거나 억울한 감정이 먼저 든다',
          '“What did I do?”—you get defensive or feel wronged first.',
          '「え、何が？」と防衛的になるか、まずやるせなさを感じる。',
          '先反问「我咋了」或先觉得委屈、防御。',
          '先反問「我咋了」或先覺得委屈、防禦。',
          '“Tôi làm gì?”—phòng thủ hoặc thấy oan trước.',
          '“Aku ngapain?”—defensif atau merasa dulu yang kena.'
        ),
        score: 0,
      },
      {
        text: L(
          '"미안해, 그랬구나" 하고 먼저 사과하거나 상대 감정을 받아들인다',
          '“Sorry—I hear you” and apologize first or accept their feelings.',
          '「ごめん、そうだったんだ」と先に謝るか、相手の気持ちを受け止める。',
          '先说「对不起，我懂了」或先接住对方情绪。',
          '先說「對不起，我懂了」或先接住對方情緒。',
          '“Xin lỗi, mình hiểu rồi”—xin lỗi trước hoặc nhận cảm xúc họ.',
          '“Maaf, aku ngerti”—minta maaf dulu atau terima perasaan mereka.'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 11,
    question: L(
      '연애 중 가장 자주 드는 생각은?',
      'In a relationship, the thought you have most often is…',
      '恋愛中、いちばんよく浮かぶ考えは？',
      '恋爱时最常出现的念头更常是？',
      '戀愛時最常出現的念頭更常是？',
      'Trong yêu, ý nghĩ hay nhất là…',
      'Saat pacaran, pikiran yang paling sering muncul…'
    ),
    options: [
      {
        text: L(
          '"이러다 내가 더 좋아하는 거 아니야?" 하는 주도권 의식이 생길 때가 있다',
          'Sometimes: “Wait—am I the one who likes them more?” (power balance worry).',
          '「これ、私の方が好きじゃない？」と主導権意識がよぎることがある。',
          '会想「该不会是我更喜欢对方吧」这种主导权焦虑。',
          '會想「該不會我更喜歡對方吧」這種主導權焦慮。',
          'Đôi khi: “Chẳng lẽ mình thích họ hơn?”',
          'Kadang: “Jangan-jangan aku yang lebih suka?”'
        ),
        score: 0,
      },
      {
        text: L(
          '"내가 너무 좋아하는 거 티 나나?" 하는 걱정이 될 때가 있다',
          'Sometimes: “Am I too obvious about how much I like them?”',
          '「好きすぎてバレてないかな？」と心配になることがある。',
          '会担心「我是不是太喜欢对方、太明显了」。',
          '會擔心「我是不是太喜歡對方、太明顯了」。',
          'Đôi khi lo: “Mình lộ quá mức thích họ rồi không?”',
          'Kadang khawatir: “Kelihatan banget nggak ya kalau aku suka?”'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 12,
    question: L(
      '오래 연애한 후 나는?',
      'After dating for a long time, you…',
      '長く付き合ったあとのあなたは？',
      '谈久了之后，你更常？',
      '談久了之後，你更常？',
      'Sau khi yêu lâu, bạn…',
      'Setelah pacaran lama, kamu…'
    ),
    options: [
      {
        text: L(
          '처음보다 표현이 줄고 편안한 사이가 된 느낌이 든다',
          'You express less than at the start—it feels comfortably settled.',
          '最初より表現は減るが、落ち着いた関係になった感じ。',
          '比一开始少表达，感觉更舒服、像家人。',
          '比一開始少表達，感覺更舒服、像家人。',
          'Ít thể hiện hơn lúc đầu—cảm giác đủ gần và thoải mái.',
          'Lebih sedikit ekspresi dari awal—rasanya nyaman dan settle.'
        ),
        score: 0,
      },
      {
        text: L(
          '오래될수록 더 많이 표현하고 더 자주 확인하고 싶어진다',
          'The longer it goes, the more you want to express love and check in.',
          '長くなるほどもっと言葉にしたくなり、確認したくなる。',
          '越久越想多说、多确认对方的心意。',
          '越久越想多說、多確認對方的心意。',
          'Càng lâu càng muốn thể hiện và xác nhận nhiều hơn.',
          'Makin lama makin ingin ungkap dan konfirmasi lebih sering.'
        ),
        score: 1,
      },
    ],
  },
];

export const phase3LoveBehaviorTypeResults: Phase3LoveBehaviorTypeResult[] = [
  {
    type: 'Type1',
    emoji: '🛡️',
    title: L(
      '감정을 철갑으로 감싼, 완전 무장 츤데레 (0점)',
      'Iron-walled tsundere: emotions in full armor (0 pts)',
      '感情を鎧で包んだ、フルアーマーつんでれ (0点)',
      '情绪裹上铁甲，完全武装傲娇型（0分）',
      '情緒裹上鐵甲，完全武裝傲嬌型（0分）',
      'Tsundere bọc thép—cảm xúc kín mít (0 điểm)',
      'Tsundere berlapis baja—emosi tertutup rapat (0 poin)'
    ),
    shortDescription: L(
      '좋아하면서 왜 이렇게 티를 안 내는 건지, 본인도 모릅니다.',
      'You don’t even know why you hide your feelings this much when you like someone.',
      '好きなのに、なぜこんなに出さないのか、本人にも分からない。',
      '明明喜欢却几乎不表现出来，连你自己也说不清。',
      '明明喜歡卻幾乎不表現出來，連你自己也說不清。',
      'Thích rồi mà vẫn giấu—đến bạn cũng không hiểu tại sao.',
      'Suka tapi nyaris nggak nunjukkin—sampai kamu sendiri bingung kenapa.'
    ),
    description: L(
      '12문항 전부 감정을 숨기는 방향을 선택한 당신. 상대가 먼저 다가오기 전까지는 절대 먼저 표현하지 않고, 좋아하면 할수록 더 무뚝뚝해지는 완벽한 츤데레입니다. 말 대신 행동으로 표현하고 싶지만 그 행동도 너무 은근해서 상대가 눈치채지 못할 때가 많습니다. 당신의 마음을 아는 사람은 전 세계에서 당신 혼자입니다.',
      'You picked the “hide feelings” side on every question. You rarely show love first—you only get more poker-faced the more you like someone. You want to show care through actions, but they’re so subtle your partner often misses them. In the whole world, you might be the only one who truly knows your heart.',
      '12問すべて「感情を隠す」側を選んだあなた。相手が先に来るまで絶対に先に出さず、好きになるほど無表情になる完璧なツンデレ。言葉より行動で示したいのに、その行動もさりげなさすぎて相手が気づけないことも。あなたの本音を知っているのは、世界中であなただけかもしれません。',
      '十二题你都选了藏情绪的一边。对方不先靠近你就绝不先表态，越喜欢越面无表情。你想用行动代替言语，但行动又太含蓄，对方常常察觉不到。世上最懂你心意的，也许只有你自己。',
      '十二題你都選了藏情緒的一邊。對方不先靠近你就絕不先表態，越喜歡越面無表情。你想用行動代替言語，但行動又太含蓄，對方常常察覺不到。世上最懂你心意的，也許只有你自己。',
      'Cả 12 câu bạn đều chọn kiểu giấu cảm xúc. Bạn hiếm khi bày tỏ trước—càng thích càng lạnh nhạt bên ngoài. Bạn muốn thể hiện bằng hành động nhưng lại quá khéo khiến đối phương khó nhận ra. Có thể chỉ một mình bạn hiểu rõ trái tim mình.',
      'Di semua 12 pertanyaan kamu pilih menyembunyikan perasaan. Jarang memulai—makin suka makin datar di luar. Kamu ingin tunjukkan lewat tindakan tapi terlalu halus sehingga pasangan sering tidak sadar. Mungkin hanya kamu sendiri yang benar-benar tahu isi hatimu.'
    ),
    loveTypeLabel: L(
      '완전 무장 츤데레 (Iron Wall Tsundere)',
      'Full-armor tsundere (Iron Wall Tsundere)',
      'フルアーマーつんでれ（アイアンウォール）',
      '完全武装傲娇（铁壁型）',
      '完全武裝傲嬌（鐵壁型）',
      'Tsundere tường sắt (Iron Wall)',
      'Tsundere benteng baja (Iron Wall)'
    ),
    scoreBand: L(
      '총점 0점',
      'Total score: 0',
      '合計 0点',
      '总分 0 分',
      '總分 0 分',
      'Tổng điểm: 0',
      'Total skor: 0'
    ),
    characteristics: L(
      '감정 은폐, 표현 어려움, 행동파, 자존심',
      'Hiding feelings, hard to say out loud, acts instead of words, pride',
      '感情を隠す、言語化が苦手、行動派、プライド',
      '藏情绪、难开口、行动派、自尊心强',
      '藏情緒、難開口、行動派、自尊心強',
      'Giấu cảm xúc, khó nói, thể hiện bằng hành động, tự trọng',
      'Sembunyikan perasaan, susah verbal, tindakan, gengsi'
    ),
    partnerView: L(
      '저 사람 나 좋아하는 거 맞아? 아닌 거야?',
      '“Do they even like me… or not?”',
      '「この人、私のこと好き？　好きじゃない？」',
      '「这人到底喜不喜欢我啊？」',
      '「這人到底喜不喜歡我啊？」',
      '“Người này có thích mình thật không nhỉ?”',
      '“Dia beneran suka sama aku atau nggak ya?”'
    ),
    prescription: L(
      '딱 하루, 보고 싶어라고 한마디만 먼저 해보세요. 세상이 안 무너집니다.',
      'For just one day, try saying “I miss you” first. The world won’t end.',
      'たった一日、「会いたい」を先に言ってみて。世界は終わりません。',
      '就试一天，先说一句「想你」。天不会塌。',
      '就試一天，先說一句「想你」。天不會塌。',
      'Thử một ngày nói “nhớ em/cậu” trước. Trái đất vẫn quay.',
      'Coba satu hari bilang “kangen” dulu. Dunia nggak kiamat.'
    ),
    goodMatch: L(
      'Type 4 (데레데레형이 먼저 다가와 줌)',
      'Type 4 (A warm deredere who reaches out first)',
      'Type 4（デレデレが先に距離を詰めてくれる）',
      '4 型（热情直球型会先靠近你）',
      '4 型（熱情直球型會先靠近你）',
      'Type 4 (Người deredere chủ động lại gần trước)',
      'Type 4 (Tipe deredere yang duluan dekat)'
    ),
    badMatch: L(
      'Type 8 (둘 다 표현 안 하면 관계가 얼어붙음)',
      'Type 8 (If neither expresses, the relationship can freeze)',
      'Type 8（両方が出さないと関係が凍る）',
      '8 型（双方都不表达时关系容易僵住）',
      '8 型（雙方都不表達時關係容易僵住）',
      'Type 8 (Cả hai đều kín—quan hệ dễ đông cứng)',
      'Type 8 (Kalau sama-sama tertutup—hubungan bisa membeku)'
    ),
  },
  {
    type: 'Type2',
    emoji: '😎',
    title: L(
      '좋아도 쿨, 싫어도 쿨, 만년 포커페이스 (1~2점)',
      'Cool when you like them, cool when you don’t—forever poker face (1–2 pts)',
      '好きでもクール、嫌いでもクール、万年ポーカーフェイス (1〜2点)',
      '喜欢也酷、不喜欢也酷，万年扑克脸（1–2分）',
      '喜歡也酷、不喜歡也酷，萬年撲克臉（1–2分）',
      'Thích cũng cool, không thích cũng cool—mặt không cảm xúc (1–2 điểm)',
      'Suka juga cool, nggak suka juga cool—muka datar terus (1–2 poin)'
    ),
    shortDescription: L(
      '감정이 없는 게 아니라 표현하는 방법을 모르는 겁니다.',
      'It’s not that you have no feelings—you don’t know how to show them.',
      '感情がないのではなく、出し方が分からないだけ。',
      '不是没感情，是不会表达。',
      '不是沒感情，是不會表達。',
      'Không phải không có cảm xúc—mà không biết thể hiện.',
      'Bukan nggak ada perasaan—tapi nggak tahu cara nunjukkin.'
    ),
    description: L(
      '당신은 연애에서 감정을 겉으로 거의 드러내지 않는 타입입니다. 좋아하는 게 티가 나면 지는 것 같고, 먼저 표현하면 손해 보는 것 같다는 생각이 어딘가에 자리 잡고 있습니다. 상대 입장에서는 내가 이 사람한테 의미 있는 존재인지 확신하기 어려울 수 있습니다. 쿨함이 매력이지만 때로는 그 쿨함이 관계를 차갑게 만들기도 합니다.',
      'In love, you rarely show emotion on the surface. Part of you feels “if they see I like them, I lose,” or “if I say it first, I’m at a disadvantage.” Your partner may struggle to feel sure they matter to you. Cool can be attractive—but it can also make the relationship feel cold.',
      '恋愛では感情を表にほとんど出さないタイプ。「好きがバレたら負け」「先に出したら損」みたいな感覚がどこかにある。相手からは「自分は大事な存在か」確信しづらいかも。クールは魅力だけど、時に関係を冷たくもする。',
      '恋爱里你几乎不把情绪写在脸上。心里隐约觉得「被看穿喜欢就输了」「先说就吃亏」。对方可能很难确定自己对你是否重要。酷是魅力，但有时也会让关系变冷。',
      '戀愛裡你幾乎不把情緒寫在臉上。心裡隱約覺得「被看穿喜歡就輸了」「先說就吃虧」。對方可能很難確定自己對你是否重要。酷是魅力，但有時也會讓關係變冷。',
      'Trong yêu, bạn hiếm khi lộ cảm xúc. Trong đầu có kiểu “lộ thích là thua,” “nói trước là lỗ.” Đối phương khó chắc họ có quan trọng với bạn không. Cool hấp dẫn—nhưng đôi khi làm quan hệ lạnh.',
      'Saat pacaran kamu jarang tunjukkan emosi. Ada rasa “kalau ketahuan suka = kalah,” “ngomong dulu = rugi.” Pasangan sulit yakin mereka penting buatmu. Cool menarik—tapi kadang bikin hubungan dingin.'
    ),
    loveTypeLabel: L(
      '만년 포커페이스 (Emotion Keeper)',
      'Forever poker face (Emotion Keeper)',
      '万年ポーカーフェイス（エモーションキーパー）',
      '万年扑克脸（情绪守门员型）',
      '萬年撲克臉（情緒守門員型）',
      'Mặt không cảm xúc (Emotion Keeper)',
      'Muka datar abadi (Emotion Keeper)'
    ),
    scoreBand: L(
      '총점 1~2점',
      'Total score: 1–2',
      '合計 1〜2点',
      '总分 1–2 分',
      '總分 1–2 分',
      'Tổng điểm: 1–2',
      'Total skor: 1–2'
    ),
    characteristics: L(
      '쿨함, 자존심, 표현 절제, 주도권 의식',
      'Coolness, pride, restrained expression, power-balance awareness',
      'クールさ、プライド、表現の抑制、主導権意識',
      '酷、自尊、克制表达、主导权意识',
      '酷、自尊、克制表達、主導權意識',
      'Cool, tự trọng, kiềm thể hiện, ý thức cân bằng quyền',
      'Cool, gengsi, menahan ekspresi, sadar siapa lebih dominan'
    ),
    partnerView: L(
      '나 좋아하는 거 맞지? 근데 왜 이렇게 표현을 안 해?',
      '“They like me… right? Then why almost no affection?”',
      '「好きってことでいいの？　なのにどうしてこんなに出ないの？」',
      '「应该是喜欢我吧？可为什么几乎不表达？」',
      '「應該是喜歡我吧？可為什麼幾乎不表達？」',
      '“Chắc là thích mình… đúng không? Vậy sao gần như không thể hiện?”',
      '“Kayaknya suka… kan? Terus kenapa jarang nunjukkin?”'
    ),
    prescription: L(
      '쿨한 척 말고 좋으면 좋다고 한 번만 말해보세요. 의외로 관계가 훨씬 편해집니다.',
      'Skip the cool act once—just say you like them. It often relaxes the whole relationship.',
      'クールなフリは一回やめて、「好き」を一回言ってみて。意外と関係がラクになる。',
      '别装酷一次，说句「喜欢你」。关系往往会轻松很多。',
      '別裝酷一次，說句「喜歡你」。關係往往會輕鬆很多。',
      'Bỏ cool một lần—nói “mình thích cậu.” Đôi khi mọi thứ nhẹ hẳn.',
      'Stop cool sejenak—bilang “aku suka.” Hubungan sering jauh lebih ringan.'
    ),
    goodMatch: L(
      'Type 5 (적당히 다가와 줄 수 있는 균형형)',
      'Type 5 (Balanced type who can meet you halfway)',
      'Type 5（ちょうどいい距離で寄ってくるバランス型）',
      '5 型（能适度靠近的平衡型）',
      '5 型（能適度靠近的平衡型）',
      'Type 5 (Kiểu cân bằng—biết lại gần vừa phải)',
      'Type 5 (Seimbang—tahu mendekat secukupnya)'
    ),
    badMatch: L(
      'Type 7 (표현이 너무 많아서 부담스럽게 느껴짐)',
      'Type 7 (So expressive it can feel overwhelming)',
      'Type 7（表現が多すぎて重く感じることがある）',
      '7 型（表达太多时会觉得有压力）',
      '7 型（表達太多時會覺得有壓力）',
      'Type 7 (Thể hiện quá nhiều—dễ thấy ngộp)',
      'Type 7 (Terlalu ekspresif—bisa kerasa berat)'
    ),
  },
  {
    type: 'Type3',
    emoji: '🌸',
    title: L(
      '표현은 좀 부족하지만 마음은 가득, 내성적 애정형 (3~4점)',
      'A little shy with words, heart full—quiet romantic (3–4 pts)',
      '言葉は少なめでも心は満タン、内向的ロマンティック (3〜4点)',
      '话不多但心意满满，内敛深情型（3–4分）',
      '話不多但心意滿滿，內斂深情型（3–4分）',
      'Ít lời nhưng tình đầy—lãng mạn trầm (3–4 điểm)',
      'Sedikit kata tapi hati penuh—romantis pendiam (3–4 poin)'
    ),
    shortDescription: L(
      '좋아하는 마음은 큰데, 그걸 말로 꺼내는 게 생각보다 어렵습니다.',
      'You care a lot—saying it out loud is harder than people think.',
      '好きな気持ちは大きいのに、言葉にするのは思ったより難しい。',
      '喜欢的心意很大，说出口却比想象中难。',
      '喜歡的心意很大，說出口卻比想像中難。',
      'Yêu nhiều nhưng nói ra lại khó hơn tưởng.',
      'Perasaan besar tapi ngomong susah.'
    ),
    description: L(
      '당신은 감정을 숨기진 않지만 먼저 적극적으로 표현하기가 어색한 타입입니다. 보고 싶어도 참고, 좋다고 말하고 싶어도 타이밍을 못 잡습니다. 행동으로 표현하고 싶어서 데이트 코스를 알아보거나 상대가 좋아하는 것을 기억해두는 방식을 씁니다. 말은 적어도 마음은 충분히 전달되는 섬세한 타입입니다.',
      'You don’t really hide feelings—you’re just awkward about being the first to go all-in. You hold back “I miss you” and miss the timing for sweet lines. You show love by researching dates and remembering what they like. Few words, but the care still lands.',
      '感情を隠すというより、先に積極的に出すのが照れるタイプ。「会いたい」も我慢し、好きとも言いそびれる。デートを調べたり、相手の好きを覚えたりして行動で示す。言葉は少なくても、気持ちはちゃんと伝わる繊細さ。',
      '你不是藏感情，只是不太会抢先热烈表达。想念也憋着，想说喜欢又错过时机。你会查约会路线、记住对方喜好，用行动代替甜言蜜语。话少但心意细腻。',
      '你不是藏感情，只是不太會搶先熱烈表達。想念也憋著，想說喜歡又錯過時機。你會查約會路線、記住對方喜好，用行動代替甜言蜜語。話少但心意細膩。',
      'Bạn không giấu cảm xúc—chỉ ngại là người chủ động quá mức. Nhớ mà cũng kìm, muốn nói thích nhưng lỡ timing. Bạn tìm lịch hẹn, nhớ sở thích đối phương—yêu bằng hành động. Ít lời nhưng ấm.',
      'Kamu nggak nyembunyiin perasaan—cuma canggung jadi yang paling frontal. Rindu ditahan, mau bilang suka kelewat timing. Kamu riset kencan, ingat kesukaan mereka—cinta lewat tindakan. Sedikit kata tapi tetap tulus.'
    ),
    loveTypeLabel: L(
      '내성적 애정형 (Quiet Romantic)',
      'Quiet romantic type',
      '内向的ロマンティック（クワイエット・ロマンティック）',
      '内敛深情型',
      '內斂深情型',
      'Lãng mạn trầm (Quiet Romantic)',
      'Romantis pendiam (Quiet Romantic)'
    ),
    scoreBand: L(
      '총점 3~4점',
      'Total score: 3–4',
      '合計 3〜4点',
      '总分 3–4 分',
      '總分 3–4 分',
      'Tổng điểm: 3–4',
      'Total skor: 3–4'
    ),
    characteristics: L(
      '조용한 애정, 행동 표현, 배려, 말보다 기억력',
      'Quiet affection, acts of love, thoughtfulness, remembers details',
      '静かな愛情、行動で示す、気遣い、言葉より記憶力',
      '安静的爱、行动表达、体贴、记得比说得多',
      '安靜的愛、行動表達、體貼、記得比說得多',
      'Yêu êm, thể hiện bằng hành động, chu đáo, nhớ chi tiết',
      'Cinta tenang, tindakan, perhatian, ingat detail'
    ),
    partnerView: L(
      '티는 잘 안 내는데 은근히 챙겨줘서 마음을 알 것 같기도 하고...',
      '“They’re not flashy—but they quietly take care of me, so I kinda feel it…”',
      '「派手じゃないけど、ちゃんと気遣ってくれるから、なんとなく伝わる…」',
      '「不太外露，但默默很照顾，好像又能感觉到…」',
      '「不太外露，但默默很照顧，好像又能感覺到…」',
      '“Không phô trương nhưng lặng lẽ chăm—cảm giác vẫn tới…”',
      '“Nggak mencolok tapi perhatiannya kerasa…”'
    ),
    prescription: L(
      '행동만큼이나 말 한마디도 큰 힘이 됩니다. 오늘 예뻐 보여 한마디부터 연습해보세요.',
      'A single sentence can be as powerful as a gesture. Start with something small like “you look great today.”',
      '行動と同じくらい、言葉ひとつも力になる。「今日かわいいね」から練習して。',
      '一句话的力量不亚于行动。先从一句「今天很好看」练起。',
      '一句話的力量不亞於行動。先從一句「今天很好看」練起。',
      'Một câu cũng mạnh như hành động. Bắt đầu bằng “hôm nay trông đẹp lắm.”',
      'Satu kalimat bisa sekuat tindakan. Mulai dari “kamu cantik hari ini.”'
    ),
    goodMatch: L(
      'Type 4 (먼저 다가와서 편하게 만들어주는 타입)',
      'Type 4 (Someone warm who closes the distance first)',
      'Type 4（先に距離を詰めてくれて楽にしてくれるタイプ）',
      '4 型（会先靠近、让你放松的类型）',
      '4 型（會先靠近、讓你放鬆的類型）',
      'Type 4 (Người ấm áp chủ động lại gần)',
      'Type 4 (Yang hangat dan duluan dekat)'
    ),
    badMatch: L(
      'Type 6 (애정 확인을 자주 요구해서 부담스러울 수 있음)',
      'Type 6 (Needs frequent reassurance—can feel heavy)',
      'Type 6（確認が多くて重く感じることがある）',
      '6 型（常需要确认感情时可能觉得有压力）',
      '6 型（常需要確認感情時可能覺得有壓力）',
      'Type 6 (Cần xác nhận tình cảm nhiều—dễ thấy nặng)',
      'Type 6 (Butuh konfirmasi sering—bisa kerasa berat)'
    ),
  },
  {
    type: 'Type4',
    emoji: '💕',
    title: L(
      '사랑이 넘쳐 흘러내리는, 진성 데레데레 (5~6점)',
      'Love overflowing—full-power deredere (5–6 pts)',
      '愛があふれ出す、真性デレデレ (5〜6点)',
      '爱意满溢，真心直球甜型（5–6分）',
      '愛意滿溢，真心直球甜型（5–6分）',
      'Yêu tràn ra—deredere thật thà (5–6 điểm)',
      'Cinta meluap—deredere tulus (5–6 poin)'
    ),
    shortDescription: L(
      '감정에 솔직한 것이 당신의 가장 큰 연애 강점입니다.',
      'Your biggest dating strength is emotional honesty.',
      '感情に正直なのが、あなたの最大の恋の強み。',
      '恋爱里你最大的优点是敢表达真实情绪。',
      '戀愛裡你最大的優點是敢表達真實情緒。',
      'Điểm mạnh nhất của bạn trong yêu là thật với cảm xúc.',
      'Kekuatan terbesarmu dalam cinta adalah jujur soal perasaan.'
    ),
    description: L(
      '당신은 감정이 생기면 바로 표현하고, 보고 싶으면 바로 말하고, 좋으면 바로 티 내는 데레데레 타입입니다. 연애에서 감정을 숨기는 것이 낭비처럼 느껴지고, 표현하지 않으면 상대가 모를 것 같아서 불안합니다. 상대 입장에서 당신의 마음은 항상 명확하게 느껴집니다. 다만 표현이 너무 넘치면 상대가 당연하게 여길 수 있으니 가끔 살짝 뜸 들이는 것도 전략입니다.',
      'When you feel it, you show it—miss them, say it; like them, show it. Hiding feelings in love feels wasteful to you, and not saying it feels like they’ll never know. Your partner usually feels your heart clearly. If you pour too much, they might take it for granted—sometimes a little pause is strategy.',
      '感じたらすぐ出す、会いたいなら言う、好きなら見せるデレデレ。恋で感情を隠すのはもったいないし、言わないと伝わらない不安も。相手には気持ちがはっきり伝わりやすい。ただし出しすぎは「当たり前」になりやすいので、たまに間を空けるのも手。',
      '有感觉就表达，想念就说，喜欢就表现出来。你觉得恋爱里藏情绪是浪费，不说又怕对方不懂。对方通常能清楚感受到你的心。表达太多对方可能习以为常，偶尔留白也是策略。',
      '有感覺就表達，想念就說，喜歡就表現出來。你覺得戀愛裡藏情緒是浪費，不說又怕對方不懂。對方通常能清楚感受到你的心。表達太多對方可能習以為常，偶爾留白也是策略。',
      'Cảm là thể hiện—nhớ là nói—thích là cho thấy. Giấu cảm xúc thấy phí; không nói thì lo họ không hiểu. Đối phương thường cảm rõ. Nếu cho quá nhiều họ có thể coi là hiển nhiên—đôi khi cần nhịp nghỉ.',
      'Kerasa langsung tunjukkan—kangen bilang—suka kelihatan. Nyembunyiin rasanya rugi; nggak bilang takut mereka nggak ngerti. Pasangan biasanya jelas ngerasain. Kalau kebanyakan bisa dianggap biasa—kadang perlu jeda.'
    ),
    loveTypeLabel: L(
      '진성 데레데레 (Full Deredere)',
      'Full deredere',
      '真性デレデレ（フル・デレデレ）',
      '真心直球甜型',
      '真心直球甜型',
      'Deredere thật (Full Deredere)',
      'Deredere penuh (Full Deredere)'
    ),
    scoreBand: L(
      '총점 5~6점',
      'Total score: 5–6',
      '合計 5〜6点',
      '总分 5–6 分',
      '總分 5–6 分',
      'Tổng điểm: 5–6',
      'Total skor: 5–6'
    ),
    characteristics: L(
      '감정 표현, 솔직함, 적극성, 애정 넘침',
      'Emotional expression, honesty, initiative, overflowing affection',
      '感情表現、正直さ、積極性、愛情のあふれ',
      '情绪表达、坦率、主动、爱意充沛',
      '情緒表達、坦率、主動、愛意充沛',
      'Bày tỏ, thật thà, chủ động, tình yêu dồi dào',
      'Ekspresi emosi, jujur, proaktif, kasih sayang melimpah'
    ),
    partnerView: L(
      '이 사람이랑 있으면 내가 사랑받고 있다는 게 확실히 느껴짐',
      '“When I’m with them, I really feel loved.”',
      '「この人といると、ちゃんと愛されてるって感じる」',
      '「和TA在一起能明确感到被爱着」',
      '「和TA在一起能明確感到被愛著」',
      '“Ở cạnh họ là mình cảm nhận rõ được yêu.”',
      '“Bareng mereka kerasa jelas dicintai.”'
    ),
    prescription: L(
      '감정 표현은 강점이지만 가끔 기다리는 것도 매력입니다. 상대가 먼저 하도록 여백을 줘보세요.',
      'Expressing love is your strength—but waiting sometimes is attractive too. Leave room for them to come toward you.',
      '表現は強みだけど、たまに「待つ」のも魅力。相手が先に動ける余白を。',
      '表达是强项，但偶尔「等对方先」也有魅力。留一点空间给对方主动。',
      '表達是強項，但偶爾「等對方先」也有魅力。留一點空間給對方主動。',
      'Thể hiện là điểm mạnh—nhưng đôi khi chờ đối phương chủ động cũng quyến rũ. Chừa khoảng trống.',
      'Ekspresi itu kuat—tapi kadang nunggu mereka duluan juga menarik. Kasih ruang.'
    ),
    goodMatch: L(
      'Type 3 (당신의 표현을 받아줄 조용한 수용형)',
      'Type 3 (A quiet receiver who welcomes your affection)',
      'Type 3（あなたの表現を静かに受け止めるタイプ）',
      '3 型（能安静接住你表达的类型）',
      '3 型（能安靜接住你表達的類型）',
      'Type 3 (Người trầm tiếp nhận tình cảm bạn)',
      'Type 3 (Yang pendiam tapi nerima kasih sayangmu)'
    ),
    badMatch: L(
      'Type 1 (표현해도 반응이 없으면 지치게 됨)',
      'Type 1 (If there’s no reaction, you burn out)',
      'Type 1（出しても反応がなくて疲れる）',
      '1 型（表达了却没反应容易心累）',
      '1 型（表達了卻沒反應容易心累）',
      'Type 1 (Không phản hồi—dễ kiệt sức)',
      'Type 1 (Tanpa respons—bikin capek)'
    ),
  },
  {
    type: 'Type5',
    emoji: '🌈',
    title: L(
      '상황 따라 달라지는, 카멜레온 균형형 (7~8점)',
      'Changes with the situation—chameleon balanced type (7–8 pts)',
      '状況で変わる、カメレオンバランス型 (7〜8点)',
      '随情境变化，变色龙平衡型（7–8分）',
      '隨情境變化，變色龍平衡型（7–8分）',
      'Tùy tình huống—cân bằng tắc kè hoa (7–8 điểm)',
      'Mengikuti situasi—seimbang seperti bunglon (7–8 poin)'
    ),
    shortDescription: L(
      '연애에서 딱 잘라 한 유형으로 정의되지 않는 것이 당신의 특징입니다.',
      'You’re hard to pin down as a single “type” in love—that’s your thing.',
      '恋愛で一つのタイプに切れないのがあなたの特徴。',
      '恋爱里很难用单一标签定义你，这正是你的特点。',
      '戀愛裡很難用單一標籤定義你，這正是你的特點。',
      'Trong yêu khó gói gọn một kiểu—đó là đặc trưng của bạn.',
      'Susah dicap satu tipe saja—itu keunikanmu.'
    ),
    description: L(
      '당신은 상황과 상대에 따라 유연하게 반응하는 균형형 타입입니다. 필요할 때는 먼저 다가가고, 필요할 때는 거리를 두며, 표현이 필요할 때는 하고 아닐 때는 참을 수 있습니다. 어떤 상대와도 어느 정도 맞출 수 있는 유연함이 강점이지만, 이 유연함이 때로는 내가 어떤 사람인지 상대가 파악하기 어렵게 만들 수 있습니다.',
      'You flex with the situation and the person: step forward when needed, distance when needed, speak love when it fits, hold back when it doesn’t. You can get along with many types—your flexibility is a strength—but it can also make it harder for partners to read “who you really are.”',
      '状況と相手に合わせて柔軟に動くバランス型。必要なら先に行くし、距離も取る。表現が必要なときは出し、そうでないときは我慢もできる。誰とでもある程度合わせられるのは強みだけど、「この人の本質」が相手には見えにくいことも。',
      '你会随情境和对象调整：该靠近就靠近，该留白就留白，该表达就表达，该忍就忍。和多数人都能磨合是你的强项，但有时也让对方摸不清「真实的你」。',
      '你會隨情境和對象調整：該靠近就靠近，該留白就留白，該表達就表達，該忍就忍。和多數人都能磨合是你的強項，但有時也讓對方摸不清「真實的你」。',
      'Bạn linh hoạt theo tình huống và đối phương: gần khi cần, xa khi cần, nói khi hợp, im khi nên. Hòa được với nhiều kiểu người—nhưng đôi khi họ khó đoán “bạn là ai thật.”',
      'Kamu fleksibel: dekat saat perlu, jauh saat perlu, ungkap saat pas, diam saat perlu. Cocok dengan banyak tipe—tapi kadang pasangan sulit baca “kamu yang asli.”'
    ),
    loveTypeLabel: L(
      '카멜레온 균형형 (Flexible Lover)',
      'Chameleon balanced (Flexible Lover)',
      'カメレオン・バランス（フレキシブル・ラバー）',
      '变色龙平衡型',
      '變色龍平衡型',
      'Cân bằng tắc kè (Flexible Lover)',
      'Seimbang bunglon (Flexible Lover)'
    ),
    scoreBand: L(
      '총점 7~8점',
      'Total score: 7–8',
      '合計 7〜8点',
      '总分 7–8 分',
      '總分 7–8 分',
      'Tổng điểm: 7–8',
      'Total skor: 7–8'
    ),
    characteristics: L(
      '유연성, 상황 대응, 균형, 적응력',
      'Flexibility, situational adaptation, balance, adaptability',
      '柔軟性、状況対応、バランス、適応力',
      '灵活、应变、平衡、适应力',
      '靈活、應變、平衡、適應力',
      'Linh hoạt, thích ứng, cân bằng',
      'Fleksibel, adaptif, seimbang'
    ),
    partnerView: L(
      '이 사람은 어떤 상황에서도 잘 맞춰줘서 같이 있기 편해',
      '“They adjust well in any situation—easy to be around.”',
      '「どんな状況でも合わせてくれるから、一緒にいやすい」',
      '「什么场合都能配合，相处很轻松」',
      '「什麼場合都能配合，相處很輕鬆」',
      '“Họ linh hoạt mọi lúc—ở cạnh dễ chịu.”',
      '“Mereka bisa menyesuaikan—nyaman bareng.”'
    ),
    prescription: L(
      '맞추는 것도 좋지만 당신이 원하는 것을 먼저 말해보세요. 상대도 당신을 맞추고 싶어 합니다.',
      'Matching others is great—try saying what you want first. They may want to match you too.',
      '合わせるのも大事だけど、まずは「自分が欲しいこと」を言ってみて。相手もあなたに合わせたい。',
      '配合别人很好，但也试试先说出你想要什么。对方也想配合你。',
      '配合別人很好，但也試試先說出你想要什麼。對方也想配合你。',
      'Chiều người khác tốt—nhưng thử nói điều bạn muốn trước. Họ cũng muốn chiều bạn.',
      'Menyesuaikan orang bagus—coba katakan dulu yang kamu mau. Mereka juga ingin menyesuaikanmu.'
    ),
    goodMatch: L(
      '거의 모든 유형 (적응력이 높아서 웬만하면 맞춤)',
      'Pairs with almost any type (high adaptability)',
      'ほぼどのタイプとも相性あり（適応力が高い）',
      '几乎各型都能磨合（适应力强）',
      '幾乎各型都能磨合（適應力強）',
      'Hợp hầu hết các kiểu (thích nghi cao)',
      'Cocok hampir semua tipe (adaptasi tinggi)'
    ),
    badMatch: L(
      'Type 1 (완전 무장 츤데레는 당신의 유연함도 안 받아줌)',
      'Type 1 (A fully armored tsundere may not accept your flexibility)',
      'Type 1（フルアーマーつんでれは、あなたの柔軟さを受け取らないことも）',
      '1 型（铁壁傲娇可能接不住你的弹性）',
      '1 型（鐵壁傲嬌可能接不住你的彈性）',
      'Type 1 (Tsundere kín—không nhận sự linh hoạt của bạn)',
      'Type 1 (Tsundere tertutup—nolak fleksibilitasmu)'
    ),
  },
  {
    type: 'Type6',
    emoji: '📱',
    title: L(
      '사랑이 걱정으로 변하는, 애정 과부하 확인형 (9~10점)',
      'Love turns into worry—affection overload checker (9–10 pts)',
      '愛が不安に変わる、愛情オーバーチェック型 (9〜10点)',
      '爱变成焦虑，情感过载确认型（9–10分）',
      '愛變成焦慮，情感過載確認型（9–10分）',
      'Yêu thành lo—kiểu cần xác nhận quá tải (9–10 điểm)',
      'Cinta jadi khawatir—perlu konfirmasi berlebihan (9–10 poin)'
    ),
    shortDescription: L(
      '좋아하는 마음이 너무 커서 자꾸 확인하고 싶어집니다.',
      'You care so much you keep wanting reassurance.',
      '好きが大きすぎて、つい確認したくなる。',
      '喜欢得太满，就会一直想确认。',
      '喜歡得太滿，就會一直想確認。',
      'Thích quá mức nên cứ muốn xác nhận.',
      'Suka berlebihan jadi ingin konfirmasi terus.'
    ),
    description: L(
      '당신은 연애에 진심이고 에너지를 많이 쏟는 타입입니다. 그 진심이 가끔 잦은 확인과 애정 요구로 나타납니다. 답장이 늦으면 불안하고, 자주 확인하고 싶고, 상대가 나를 얼마나 좋아하는지 계속 궁금합니다. 상대를 사랑하기 때문에 나오는 행동이지만, 상대 입장에서는 부담이 될 수 있습니다. 상대를 믿는 연습이 지금 가장 필요합니다.',
      'You invest hard in relationships. That sincerity can show up as frequent check-ins and need for affection. Slow replies make you anxious; you want reassurance often and wonder how much they like you. It comes from love—but it can feel heavy for them. Practicing trust is the homework now.',
      '恋に本気でエネルギーを注ぐタイプ。その本気が、確認や愛情要求として出やすい。返信が遅いと不安、よく確かめたくなる、どれだけ好かれているか気になる。愛から来る行動だけど、相手には負担にもなる。今いちばん必要なのは「信じる」練習。',
      '你在感情里很投入，真心常会表现为频繁确认和需要被爱。回得慢你会焦虑，总想确认对方有多喜欢你。出于爱，但对方可能感到压力。现在最需要练习的是信任。',
      '你在感情裡很投入，真心常會表現為頻繁確認和需要被愛。回得慢你會焦慮，總想確認對方有多喜歡你。出於愛，但對方可能感到壓力。現在最需要練習的是信任。',
      'Bạn đầu tư mạnh. Chân thành đó thành hay hỏi han, cần tình cảm. Trả lời chậm là lo; muốn được trấn an. Xuất phát từ yêu—nhưng đối phương có thể thấy nặng. Bài tập: tin tưởng.',
      'Kamu all-in. Ketulusan itu jadi sering minta kepastian & kasih sayang. Balas lambat bikin cemas. Dari cinta—tapi bisa berat buat mereka. Latihan: percaya.'
    ),
    loveTypeLabel: L(
      '애정 과부하 확인형 (Affection Checker)',
      'Affection overload checker',
      '愛情オーバーチェック（アフェクション・チェッカー）',
      '情感过载确认型',
      '情感過載確認型',
      'Kiểu cần xác nhận tình cảm quá mức',
      'Tipe konfirmasi kasih sayang berlebihan'
    ),
    scoreBand: L(
      '총점 9~10점',
      'Total score: 9–10',
      '合計 9〜10点',
      '总分 9–10 分',
      '總分 9–10 分',
      'Tổng điểm: 9–10',
      'Total skor: 9–10'
    ),
    characteristics: L(
      '애정 확인, 불안, 잦은 연락, 진심 과부하',
      'Seeking reassurance, anxiety, frequent contact, intense sincerity',
      '愛情確認、不安、連絡が多い、本気が強すぎる',
      '确认爱意、焦虑、联系频繁、真心过载',
      '確認愛意、焦慮、聯繫頻繁、真心過載',
      'Cần xác nhận, lo lắng, liên lạc dày, chân thành quá mức',
      'Perlu konfirmasi, cemas, sering chat, tulus berlebihan'
    ),
    partnerView: L(
      '나를 진짜 좋아하는 건 알겠는데 가끔 숨막힐 때가 있어',
      '“I know they love me—but sometimes it’s a lot.”',
      '「本気で好きなのは分かるけど、たまに息苦しい」',
      '「知道你是真心的，但有时有点喘不过气」',
      '「知道你是真心的，但有時有點喘不過氣」',
      '“Biết là thật lòng—nhưng đôi ngộp.”',
      '“Tahu tulus—kadang sesak.”'
    ),
    prescription: L(
      '연락 안 오는 2시간 동안 다른 것에 집중해보세요. 상대의 공간을 주는 것도 사랑입니다.',
      'For the two hours you’re waiting, focus on something else. Giving space is love too.',
      '返信がない2時間は、別のことに集中してみて。相手の余白も愛。',
      '没回消息的两小时里，试着专注别的事。给对方空间也是爱。',
      '沒回訊息的兩小時裡，試著專注別的事。給對方空間也是愛。',
      '2 giờ chờ tin nhắn—làm việc khác. Cho không gian cũng là yêu.',
      '2 jam nunggu balasan—fokus hal lain. Kasih ruang juga cinta.'
    ),
    goodMatch: L(
      'Type 4 (먼저 표현해줘서 불안함을 줄여줌)',
      'Type 4 (Warm expression first—eases anxiety)',
      'Type 4（先に愛情を出してくれて不安が減る）',
      '4 型（先表达爱意，能缓解不安）',
      '4 型（先表達愛意，能緩解不安）',
      'Type 4 (Thể hiện trước—giảm lo)',
      'Type 4 (Ungkap dulu—kurangi cemas)'
    ),
    badMatch: L(
      'Type 2 (쿨한 상대는 확인 요구에 더 멀어짐)',
      'Type 2 (A very cool partner may pull away from check-ins)',
      'Type 2（クールな相手は確認要求から距離を置きやすい）',
      '2 型（太冷的伴侣面对确认需求可能更疏远）',
      '2 型（太冷的伴侶面對確認需求可能更疏遠）',
      'Type 2 (Đối phương cool—dễ lùi khi bị hỏi nhiều)',
      'Type 2 (Pasangan dingin—menjauh jika diminta konfirmasi)'
    ),
  },
  {
    type: 'Type7',
    emoji: '🌊',
    title: L(
      '감정이 폭포처럼 쏟아지는, 올인 감성형 (11점)',
      'Emotions pour like a waterfall—all-in romantic (11 pts)',
      '感情が滝のように溢れる、オールイン浪漫型 (11点)',
      '情绪像瀑布一样倾泻，全押感性型（11分）',
      '情緒像瀑布一樣傾瀉，全押感性型（11分）',
      'Cảm xúc trút như thác—all-in (11 điểm)',
      'Emosi deras seperti air terjun—all-in (11 poin)'
    ),
    shortDescription: L(
      '연애에 전부를 거는 스타일, 절반만 줄여도 더 오래갑니다.',
      'You go all-in—dialing it back halfway would help it last longer.',
      '恋に全部を賭けるスタイル。半分に減らすともっと長持ちする。',
      '恋爱全押的风格，收一半也许能走得更久。',
      '戀愛全押的風格，收一半也許能走得更久。',
      'All-in trong yêu—giảm một nửa có khi bền hơn.',
      'All-in—kalau dikurangi setengah mungkin lebih awet.'
    ),
    description: L(
      '당신은 연애에 감정을 완전히 쏟아붓는 올인 타입입니다. 표현도, 확인도, 애정도 전부 최대치로 가동됩니다. 상대에게 내 감정을 다 보여주는 것이 솔직한 것이라고 생각하고, 그게 진짜 사랑이라고 믿습니다. 상대가 그 에너지를 받아줄 수 있는 사람이라면 최고의 연인이 되지만, 그렇지 않은 경우엔 관계가 빠르게 소진됩니다.',
      'You pour everything into love—expression, reassurance, affection at max volume. You believe showing all your feelings is honesty, and that’s what real love is. With someone who can hold that energy, you’re an incredible partner; if not, the relationship can burn out fast.',
      '恋に感情を全部注ぐオールイン。表現も確認も愛情も最大出力。感情を見せるのが誠実で、それが本物の愛だと信じている。そのエネルギーを受け止められる相手なら最高の恋人。そうでなければ関係は早く燃え尽きやすい。',
      '你把感情全押在恋爱里：表达、确认、爱意都开到最大。你认为亮出全部情绪才是真诚，那才是爱。接得住这份能量的人会觉得你是最好的恋人；接不住时关系会很快耗尽。',
      '你把感情全押在戀愛裡：表達、確認、愛意都開到最大。你認為亮出全部情緒才是真誠，那才是愛。接得住這份能量的人會覺得你是最好的戀人；接不住時關係會很快耗盡。',
      'Bạn đổ hết cảm xúc vào yêu—thể hiện, xác nhận, tình cảm tối đa. Bạn tin thành thật là trút hết. Người giữ được năng lượng đó sẽ thấy bạn tuyệt vời; không thì quan hệ cháy nhanh.',
      'Kamu tuang semua ke cinta—maksimal. Percaya jujur = tunjukkan semua. Pasangan yang kuat energinya akan bahagia; kalau tidak cepat habis.'
    ),
    loveTypeLabel: L(
      '올인 감성형 (All-In Romantic)',
      'All-in romantic',
      'オールイン浪漫（オールイン・ロマンティック）',
      '全押感性型',
      '全押感性型',
      'Lãng mạn all-in',
      'Romantis all-in'
    ),
    scoreBand: L(
      '총점 11점',
      'Total score: 11',
      '合計 11点',
      '总分 11 分',
      '總分 11 分',
      'Tổng điểm: 11',
      'Total skor: 11'
    ),
    characteristics: L(
      '전력투구, 감정 전부 공개, 높은 기대치, 연애 중심 생활',
      'All-out effort, full emotional exposure, high expectations, love-centered life',
      '全力、感情の全面公開、期待が高い、恋中心の生活',
      '全力以赴、情绪全敞开、期待高、生活以恋爱为中心',
      '全力以赴、情緒全敞開、期待高、生活以戀愛為中心',
      'Hết mình, bộc lộ cảm xúc, kỳ vọng cao, sống quanh tình yêu',
      'All-out, emosi terbuka, ekspektasi tinggi, hidup mengelilingi cinta'
    ),
    partnerView: L(
      '이 사람한테 이렇게 사랑받아도 되나? 나 감당할 수 있을까?',
      '“Is it okay to be loved this much? Can I handle it?”',
      '「こんなに愛されてていいの？　受け止められる？」',
      '「被这样爱真的可以吗？我接得住吗？」',
      '「被這樣愛真的可以嗎？我接得住嗎？」',
      '“Yêu thế này có được không? Mình gánh nổi không?”',
      '“Dicintai sebesar ini oke nggak? Kuat nggak?”'
    ),
    prescription: L(
      '연애 말고도 나의 삶이 있어야 관계가 지속됩니다. 오늘 친구 한 명한테 연락해보세요.',
      'Love lasts longer when you also have a life outside it. Today, message one friend.',
      '恋以外にも「自分の生活」がないと続きにくい。今日、友だちに1人連絡してみて。',
      '除了恋爱你还需要自己的生活，关系才更稳。今天试着联系一位朋友。',
      '除了戀愛你還需要自己的生活，關係才更穩。今天試著聯絡一位朋友。',
      'Cần cuộc sống ngoài yêu để bền. Hôm nay nhắn một người bạn.',
      'Perlu hidup di luar cinta. Hari ini chat satu teman.'
    ),
    goodMatch: L(
      'Type 4 (비슷한 에너지로 주고받을 수 있는 데레데레형)',
      'Type 4 (Deredere energy that can match yours)',
      'Type 4（同じくらいのエネルギーで受け止められるデレデレ）',
      '4 型（能量相近、能互相接住的甜型）',
      '4 型（能量相近、能互相接住的甜型）',
      'Type 4 (Năng lượng tương đương—deredere)',
      'Type 4 (Energi mirip—deredere)'
    ),
    badMatch: L(
      'Type 1 (올인했는데 반응 없으면 가장 빠르게 지침)',
      'Type 1 (All-in with no response—you burn out fastest)',
      'Type 1（オールインなのに反応がなくて一番早く疲れる）',
      '1 型（全押却没回应时最快心累）',
      '1 型（全押卻沒回應時最快心累）',
      'Type 1 (All-in mà không phản hồi—mệt nhất)',
      'Type 1 (All-in tanpa respons—paling cepat capek)'
    ),
  },
  {
    type: 'Type8',
    emoji: '🎯',
    title: L(
      '연애 뇌가 따로 있는, 초집중 몰입형 (12점)',
      'A whole separate “dating brain”—hyper-focused (12 pts)',
      '恋愛脳が別物、超没入型 (12点)',
      '恋爱脑单独运转，超专注沉浸型（12分）',
      '戀愛腦單獨運轉，超專注沉浸型（12分）',
      'Não yêu riêng—nhập tâm cực độ (12 điểm)',
      'Otak khusus cinta—sangat fokus (12 poin)'
    ),
    shortDescription: L(
      '연애를 시작하면 온 세상이 그 사람 중심으로 돌아갑니다.',
      'Once you’re in love, your whole world orbits them.',
      '恋を始めると、世界がその人中心になる。',
      '一恋爱，全世界都围着TA转。',
      '一戀愛，全世界都圍著TA轉。',
      'Yêu là thế giới quay quanh họ.',
      'Pacaran = dunia mengelilingi mereka.'
    ),
    description: L(
      '12문항 전부 상대를 향한 감정 표현과 확인을 선택한 당신. 연애가 시작되는 순간 상대가 인생의 최우선 순위가 됩니다. 연락, 표현, 확인, 애정 모든 것이 최대치로 가동되고, 상대의 반응 하나하나가 오늘 하루의 기분을 결정합니다. 진심 하나는 누구보다 강렬하지만, 그 강도를 조절하는 것이 관계를 오래 유지하는 핵심입니다.',
      'You chose expression and reassurance toward your partner on every question. The moment love starts, they become top priority. Contact, words, check-ins, affection—all maxed out; each reaction from them sets your mood for the day. Your sincerity is unmatched—but regulating intensity is what keeps love sustainable.',
      '12問すべて「相手への表現・確認」側。恋が始まった瞬間、相手が人生の最優先。連絡も表現も確認も愛情も最大出力。相手の反応一つ一つが今日の気分を決める。本気は誰より強いけど、強さを調整できるかが長続きの鍵。',
      '十二题你都选了向对象表达与确认。恋爱一开始，对方就成了人生优先级。联系、表达、确认、爱意全开；对方每个反应都能决定你一天的心情。真心无人能及，但学会调节强度关系才能长久。',
      '十二題你都選了向對象表達與確認。戀愛一開始，對方就成了人生優先級。聯繫、表達、確認、愛意全開；對方每個反應都能決定你一天的心情。真心無人能及，但學會調節強度關係才能長久。',
      'Cả 12 câu chọn thể hiện & xác nhận với đối phương. Yêu là họ thành ưu tiên số một. Liên lạc, lời nói, kiểm tra, tình cảm—tối đa; mỗi phản ứng quyết định mood cả ngày. Chân thành mạnh nhất—nhưng điều chỉnh cường độ mới bền.',
      '12 soal pilih ekspresi & konfirmasi. Cinta = mereka prioritas utama. Kontak, kata, cek, kasih sayang—maksimal; satu respons mengatur mood harianmu. Tulus luar biasa—tapi atur intensitas agar awet.'
    ),
    loveTypeLabel: L(
      '초집중 몰입형 (Love Obsessor)',
      'Hyper-focused immersion (Love Obsessor)',
      '超没入（ラブ・オブセッサー）',
      '超专注沉浸型',
      '超專注沉浸型',
      'Nhập tâm cực độ (Love Obsessor)',
      'Sangat terfokus (Love Obsessor)'
    ),
    scoreBand: L(
      '총점 12점',
      'Total score: 12',
      '合計 12点',
      '总分 12 分',
      '總分 12 分',
      'Tổng điểm: 12',
      'Total skor: 12'
    ),
    characteristics: L(
      '완전 몰입, 상대 최우선, 감정 극대화, 연애=인생',
      'Total immersion, partner first, emotions maxed, love = life',
      '完全没入、相手最優先、感情最大化、恋＝人生',
      '完全投入、对象优先、情绪拉满、恋爱等于人生',
      '完全投入、對象優先、情緒拉滿、戀愛等於人生',
      'Nhập hoàn toàn, ưu tiên đối phương, cảm xúc cực đại',
      'Total fokus, pasangan dulu, emosi maksimal'
    ),
    partnerView: L(
      '이 사람한테 내가 세상 전부구나... 행복하지만 가끔 무겁다',
      '“I’m their whole world… sweet, but sometimes heavy.”',
      '「この人の世界の中心にいる…嬉しいけど、たまに重い」',
      '「我好像成了TA的全世界…幸福但有时喘不过气」',
      '「我好像成了TA的全世界…幸福但有時喘不過氣」',
      '“Mình là cả thế giới của họ… vui nhưng đôi nặng.”',
      '“Aku jadi seluruh dunianya… bahagia tapi kadang berat.”'
    ),
    prescription: L(
      '상대와 나 사이에 적당한 공기가 있어야 숨을 쉴 수 있습니다. 나만의 루틴을 하나 만들어보세요.',
      'You need breathable space between you and them. Build one small routine that’s just yours.',
      '相手との間に「空気の層」がないと息ができない。自分だけのルーティンを一つ。',
      '你们之间需要能呼吸的间隙。建立一个只属于你自己的小routine。',
      '你們之間需要能呼吸的間隙。建立一個只屬於你自己的小routine。',
      'Cần khoảng thở giữa hai người. Một thói quen nhỏ chỉ của bạn.',
      'Perlu jarak napas. Satu rutinitas khusus milikmu.'
    ),
    goodMatch: L(
      'Type 7 (비슷한 에너지끼리 만나야 균형이 맞음)',
      'Type 7 (Similar energy can balance the intensity)',
      'Type 7（同じくらいのエネルギー同士でバランスが取れる）',
      '7 型（相近能量才能互相平衡）',
      '7 型（相近能量才能互相平衡）',
      'Type 7 (Năng lượng tương đương mới cân)',
      'Type 7 (Energi mirip bisa seimbang)'
    ),
    badMatch: L(
      'Type 1 (철갑 츤데레 앞에서 가장 빠르게 소진됨)',
      'Type 1 (Against an iron-wall tsundere, you burn out fastest)',
      'Type 1（鉄のツンデレの前では一番早く燃え尽きる）',
      '1 型（遇到铁壁傲娇时最快耗尽）',
      '1 型（遇到鐵壁傲嬌時最快耗盡）',
      'Type 1 (Tsundere kín—bạn kiệt nhanh nhất)',
      'Type 1 (Tsundere tertutup—kamu habis dulu)'
    ),
  },
];

export function calculatePhase3LoveBehaviorTypeResult(
  answers: number[]
): string {
  const totalScore = answers.reduce((sum, s) => sum + s, 0);
  if (totalScore === 0) return 'Type1';
  if (totalScore <= 2) return 'Type2';
  if (totalScore <= 4) return 'Type3';
  if (totalScore <= 6) return 'Type4';
  if (totalScore <= 8) return 'Type5';
  if (totalScore <= 10) return 'Type6';
  if (totalScore === 11) return 'Type7';
  return 'Type8';
}
