/**
 * 얼굴로 보는 나의 분위기 영화 장르 — phase3-face-movie-genre
 * S 미소, E 눈 개방(EAR), R 얼굴 너비/높이.
 * 기획서에 8칸 분류표가 없어, 각 장르의 'AI가 읽은 인상'으로 칸을 고정했다.
 * 밝고 또렷·활짝·편안·은은한 미소 = S 높음, 담백 = S 낮음.
 * 또렷한 눈매 = E 높음, 차분·느긋한 눈매 = E 낮음.
 * 포근한 비율 = R 높음, 갸름한 윤곽 = R 낮음.
 * 임계값 ±0.02 안의 축이 있으면 그 축만 뒤집어 '함께 보이는 분위기'로 보여 준다.
 */

import {
  averagePhase3FaceMetrics,
  measurePhase3FaceFrame,
  type Phase3FaceMetrics,
  type Phase3FaceQualityCode,
} from '@/lib/phase3FaceFirstImpressionData';

export { averagePhase3FaceMetrics, measurePhase3FaceFrame };
export type { Phase3FaceMetrics, Phase3FaceQualityCode };

export type Phase3FaceMovieLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';
export type Phase3FaceMovieText = Record<Phase3FaceMovieLocaleKey, string>;

function T(ko: string, en: string, ja: string, zhCN: string, zhTW: string, vi: string, id: string): Phase3FaceMovieText {
  return { ko, en, ja, 'zh-CN': zhCN, 'zh-TW': zhTW, vi, id };
}

export function faceMovieText(text: Phase3FaceMovieText, locale: string): string {
  const loc = locale as Phase3FaceMovieLocaleKey;
  return text[loc] || text.ko;
}

export interface Phase3FaceMovie {
  id: number;
  emoji: string;
  name: Phase3FaceMovieText;
  aiRead: Phase3FaceMovieText;
  quote: Phase3FaceMovieText;
  mood: Phase3FaceMovieText;
  charm: Phase3FaceMovieText;
  love: Phase3FaceMovieText;
  protagonist: Phase3FaceMovieText;
  cardPhrase: Phase3FaceMovieText;
  oneLiner: Phase3FaceMovieText;
  shareLine: Phase3FaceMovieText;
}

export const phase3FaceMovies: Phase3FaceMovie[] = [
  {
    id: 1,
    emoji: '💞',
    name: T('로맨틱 코미디', 'Romantic comedy', 'ロマンティックコメディ', '浪漫喜剧', '浪漫喜劇', 'Hài lãng mạn', 'Komedi romantis'),
    aiRead: T('밝고 또렷한 표정에 포근한 얼굴 비율', 'A bright, clear expression and a soft face shape', '明るくはっきりした表情に、やわらかい顔のバランス', '明亮清楚的表情，脸型也偏柔和', '明亮清楚的表情，臉型也偏柔和', 'Nét mặt sáng và rõ, khuôn mặt mềm', 'Ekspresi cerah dan jelas, bentuk wajah yang lembut'),
    quote: T('당신의 분위기는 \'보다 보면 미소가 번지는 로맨틱 코미디\'예요.', 'Your vibe is a romantic comedy that makes people smile the longer they watch.', 'あなたの雰囲気は、見ているうちに笑みがこぼれるロマンティックコメディです。', '你的氛围是一部看着看着就会笑出来的浪漫喜剧。', '你的氛圍是一部看著看著就會笑出來的浪漫喜劇。', 'Không khí của bạn là phim hài lãng mạn, xem một lúc là miệng tự cười.', 'Vibe-mu seperti komedi romantis yang makin ditonton makin bikin senyum.'),
    mood: T('유쾌하고 따뜻해서 곁에 있으면 일상이 설레는 이야기', 'Light and warm. Everyday life feels a little exciting next to you.', '明るくあたたかくて、そばにいると日常がときめく話。', '轻快又温暖，在身边时连日常都会心动。', '輕快又溫暖，在身邊時連日常都會心動。', 'Vui và ấm. Ở cạnh là ngày thường cũng thấy xao xuyến.', 'Ringan dan hangat. Di dekatnya, hari biasa ikut berdebar.'),
    charm: T('어색함을 풀고 분위기를 밝히는 친화력', 'You loosen the awkwardness and light up the room.', '気まずい空気をほどいて、場を明るくする親しみやすさ。', '能把尴尬化开，把气氛点亮的亲和力。', '能把尷尬化開，把氣氛點亮的親和力。', 'Dễ gần, gỡ được sự ngượng và làm không khí sáng lên.', 'Ramah, yang mencairkan canggung dan menerangi suasana.'),
    love: T('솔직한 표현과 웃음으로 거리를 좁힘', 'Honest words and laughter close the distance.', '素直な言葉と笑いで、距離を縮める。', '用坦白和笑声把距离拉近。', '用坦白和笑聲把距離拉近。', 'Lời thật và tiếng cười kéo khoảng cách lại gần.', 'Kata yang jujur dan tawa yang mendekatkan jarak.'),
    protagonist: T('첫 만남이 해프닝이 되는 쪽의 주인공이에요', 'The lead whose first meeting turns into a happy mess.', '初対面がハプニングになる側の主人公。', '第一次见面就会闹出小事的那位主角。', '第一次見面就會鬧出小事的那位主角。', 'Nhân vật chính mà lần gặp đầu dễ thành chuyện dở khóc dở cười.', 'Tokoh yang pertemuan pertamanya langsung jadi kejadian lucu.'),
    cardPhrase: T('웃다 보면 어느새 설레요', 'Laugh long enough and the crush sneaks in.', '笑っているうちに、ときめいてる。', '笑着笑着，心就动了。', '笑著笑著，心就動了。', 'Cười một lúc là tim tự rung.', 'Ketawa-ketawa, entah sejak kapan jadi baper.'),
    oneLiner: T('유쾌한 온기는 큰 재능입니다. 진심 한 줄이 더해지면 완벽합니다', 'That easy warmth is a real gift. One honest line makes it complete.', '明るいあたたかさは大きな才能です。本音を一行足せば完璧。', '这种快活的暖意是本事。再加一句真心话就刚好。', '這種快活的暖意是本事。再加一句真心話就剛好。', 'Hơi ấm vui vẻ ấy là tài. Thêm một câu thật lòng là đủ.', 'Kehangatan yang ringan itu bakat. Satu kalimat jujur membuatnya pas.'),
    shareLine: T('얼굴로 보는 나의 분위기 영화 장르: 로맨틱 코미디 💞 나 로맨틱 코미디 나옴ㅋㅋ 웃다 보면 설렌대. 너는 뭐 나와?', 'What movie genre is my vibe: Romantic comedy 💞 I got a rom-com. Apparently I make people smile, then catch feelings. What did you get?', '顔の雰囲気、似てる映画ジャンルは？ ロマンティックコメディ 💞 私ロマコメ出た。笑ってるうちにときめくらしい。あなたは？', '我的脸像哪种电影氛围：浪漫喜剧 💞 我是浪漫喜剧。笑着笑着就心动了。你是哪种？', '我的臉像哪種電影氛圍：浪漫喜劇 💞 我是浪漫喜劇。笑著笑著就心動了。你是哪種？', 'Gương mặt tôi hợp thể loại phim nào: Hài lãng mạn 💞 Ra hài lãng mạn. Cười một lúc là rung động. Bạn ra gì?', 'Vibe wajahku mirip genre film apa: Komedi romantis 💞 Aku komedi romantis. Katanya ketawa-ketawa malah bikin baper. Kamu dapat apa?'),
  },
  {
    id: 2,
    emoji: '✨',
    name: T('판타지', 'Fantasy', 'ファンタジー', '奇幻', '奇幻', 'Giả tưởng', 'Fantasi'),
    aiRead: T('활짝 웃는 표정에 또렷한 눈매와 갸름한 윤곽', 'A wide smile, clear eyes, and a slim outline', '大きく笑う表情に、はっきりした目元とすっきりした輪郭', '笑得很开，眼神清楚，轮廓偏瘦长', '笑得很開，眼神清楚，輪廓偏瘦長', 'Cười rộng, mắt rõ, đường nét thon', 'Senyum lebar, mata yang jelas, garis wajah yang ramping'),
    quote: T('당신의 분위기는 \'현실에 반짝임을 더하는 판타지\'예요.', 'Your vibe is a fantasy that adds a little sparkle to real life.', 'あなたの雰囲気は、現実にきらめきを足すファンタジーです。', '你的氛围是给现实添一点闪光的奇幻。', '你的氛圍是給現實添一點閃光的奇幻。', 'Không khí của bạn là giả tưởng, thêm một chút lấp lánh vào đời thật.', 'Vibe-mu seperti fantasi yang menambah kilau ke hidup nyata.'),
    mood: T('맑고 생기 있어 상상 속 세계를 열어 주는 이야기', 'Clear and alive. You open a door into an imagined world.', '澄んでいて生き生きしていて、想像の世界を開いてくれる話。', '干净又有生气，像能把人带进想象里。', '乾淨又有生氣，像能把人帶進想像裡。', 'Trong và có sức sống, mở ra một thế giới trong đầu.', 'Jernih dan hidup, membuka dunia yang ada di kepala.'),
    charm: T('작은 것에도 크게 반응하는 순수함과 상상력', 'You react big to small things. That is the wonder.', '小さなことにも大きく反応する、純粋さと想像力。', '小事也会认真惊喜的纯粹和想象力。', '小事也會認真驚喜的純粹和想像力。', 'Trong trẻo và giàu tưởng tượng, chuyện nhỏ cũng thấy lớn.', 'Polos dan penuh imajinasi, hal kecil pun terasa besar.'),
    love: T('일상을 특별한 이야기로 만들어 줌', 'You turn an ordinary day into a story.', '日常を特別な話にしてくれる。', '把平常的一天变成一段故事。', '把平常的一天變成一段故事。', 'Biến một ngày thường thành câu chuyện riêng.', 'Mengubah hari biasa jadi cerita yang terasa khusus.'),
    protagonist: T('평범한 하루에 마법을 발견하는 주인공이에요', 'The lead who finds magic in an ordinary day.', '普通の一日に魔法を見つける主人公。', '在普通的一天里发现魔法的主角。', '在普通的一天裡發現魔法的主角。', 'Nhân vật chính tìm thấy phép thuật trong một ngày thường.', 'Tokoh yang menemukan keajaiban di hari yang biasa.'),
    cardPhrase: T('오늘도 반짝이는 걸 찾는 중이에요', 'Still looking for what sparkles today.', '今日も、きらめくものを探している。', '今天也在找会发光的东西。', '今天也在找會發光的東西。', 'Hôm nay cũng đang tìm thứ lấp lánh.', 'Hari ini pun masih mencari yang berkilau.'),
    oneLiner: T('상상력은 큰 선물입니다. 현실의 약속도 함께 챙겨 보세요', 'Imagination is a gift. Keep a few real-world promises beside it.', '想像力は大きな贈り物です。現実の約束も一緒に大切に。', '想象力是礼物。现实里的约定也一起记得。', '想像力是禮物。現實裡的約定也一起記得。', 'Trí tưởng tượng là quà. Lời hứa ngoài đời cũng nhớ giữ.', 'Imajinasi itu hadiah. Janji di dunia nyata juga jangan ketinggalan.'),
    shareLine: T('얼굴로 보는 나의 분위기 영화 장르: 판타지 ✨ 나 판타지 나옴ㅋㅋ 현실에 반짝임 더하는 분위기래. 너는 뭐 나와?', 'What movie genre is my vibe: Fantasy ✨ I got fantasy. Apparently I add a little sparkle to real life. What did you get?', '顔の雰囲気、似てる映画ジャンルは？ ファンタジー ✨ 私ファンタジー出た。現実にきらめきを足す雰囲気らしい。あなたは？', '我的脸像哪种电影氛围：奇幻 ✨ 我是奇幻。说我能给现实添一点闪光。你是哪种？', '我的臉像哪種電影氛圍：奇幻 ✨ 我是奇幻。說我能給現實添一點閃光。你是哪種？', 'Gương mặt tôi hợp thể loại phim nào: Giả tưởng ✨ Ra giả tưởng. Bảo là thêm chút lấp lánh vào đời thật. Bạn ra gì?', 'Vibe wajahku mirip genre film apa: Fantasi ✨ Aku fantasi. Katanya menambah kilau ke hidup nyata. Kamu dapat apa?'),
  },
  {
    id: 3,
    emoji: '🌿',
    name: T('힐링 일상', 'Comfort slice-of-life', '癒し日常', '治愈日常', '療癒日常', 'Đời thường chữa lành', 'Sehari-hari yang menenangkan'),
    aiRead: T('편안한 미소에 차분한 눈매와 포근한 얼굴 비율', 'An easy smile, calm eyes, and a soft face shape', 'くつろいだ笑みに、落ち着いた目元とやわらかい顔のバランス', '笑容放松，眼神安静，脸型偏柔和', '笑容放鬆，眼神安靜，臉型偏柔和', 'Nụ cười thoải mái, mắt điềm, khuôn mặt mềm', 'Senyum yang santai, mata yang tenang, bentuk wajah yang lembut'),
    quote: T('당신의 분위기는 \'보기만 해도 마음이 놓이는 힐링 일상\'이에요.', 'Your vibe is a quiet everyday story that puts people at ease just by being there.', 'あなたの雰囲気は、見ているだけで心がほどける癒しの日常です。', '你的氛围是看着就安心的治愈日常。', '你的氛圍是看著就安心的療癒日常。', 'Không khí của bạn là đời thường chữa lành, nhìn thôi đã thấy yên.', 'Vibe-mu seperti hari biasa yang menenangkan, cukup dilihat saja sudah lega.'),
    mood: T('잔잔하고 따뜻해서 쉼이 되는 이야기', 'Quiet and warm. Being with you feels like a rest.', '静かであたたかくて、そばにいると休みになる話。', '平静又暖，待在一起就像休息。', '平靜又暖，待在一起就像休息。', 'Êm và ấm. Ở cạnh là được nghỉ.', 'Tenang dan hangat. Di dekatnya terasa seperti istirahat.'),
    charm: T('흔들리지 않는 안정감과 포용력', 'A steadiness that does not wobble, and room for other people.', '揺れない安定感と、受け止める力。', '稳得住的安心感，和装得下别人的心。', '穩得住的安心感，和裝得下別人的心。', 'Vững, không dễ lay, và có chỗ cho người khác.', 'Tenang yang tidak mudah goyah, dan ruang untuk orang lain.'),
    love: T('말없이 곁을 지키며 소소하게 챙김', 'You stay close without a speech, and look after the small things.', '言葉は少なくてもそばにいて、さりげなく気遣う。', '不多说话，就在旁边，把小事照顾好。', '不多說話，就在旁邊，把小事照顧好。', 'Ít nói, nhưng ở lại và lo những việc nhỏ.', 'Tidak banyak bicara, tapi tetap di samping dan mengurus hal-hal kecil.'),
    protagonist: T('평범한 하루를 소중하게 만드는 주인공이에요', 'The lead who makes an ordinary day feel worth keeping.', '普通の一日を大切にする主人公。', '把普通的一天过得珍贵的主角。', '把普通的一天過得珍貴的主角。', 'Nhân vật chính làm một ngày thường trở nên đáng giữ.', 'Tokoh yang membuat hari biasa terasa layak dijaga.'),
    cardPhrase: T('곁에 있으면 마음이 놓인대요', 'People say they relax when you are around.', 'そばにいると、心がほどけるらしい。', '在身边，心就会放下。', '在身邊，心就會放下。', 'Ở cạnh là lòng người ta dịu lại.', 'Di dekatnya, katanya hati jadi lega.'),
    oneLiner: T('편안함은 큰 힘입니다. 나도 쉬어 갈 자리를 만들어 두세요', 'That ease is a real strength. Leave a little rest for yourself too.', '安心させる力は大きな力です。自分の休む場所も残して。', '让人安心是一种力量。也给自己留一块能歇的地方。', '讓人安心是一種力量。也給自己留一塊能歇的地方。', 'Sự dễ chịu ấy là sức mạnh. Cũng để lại một chỗ cho mình nghỉ.', 'Rasa tenang itu kekuatan. Sisakan juga tempat untuk dirimu beristirahat.'),
    shareLine: T('얼굴로 보는 나의 분위기 영화 장르: 힐링 일상 🌿 나 힐링 일상 나옴ㅎㅎ 보기만 해도 마음 놓인대. 너는 뭐 나와?', 'What movie genre is my vibe: Comfort slice-of-life 🌿 I got the cozy everyday one. Just being around me apparently calms people down. What did you get?', '顔の雰囲気、似てる映画ジャンルは？ 癒し日常 🌿 私癒し日常出た。見てるだけで安心するらしい。あなたは？', '我的脸像哪种电影氛围：治愈日常 🌿 我是治愈日常。看着就安心。你是哪种？', '我的臉像哪種電影氛圍：療癒日常 🌿 我是療癒日常。看著就安心。你是哪種？', 'Gương mặt tôi hợp thể loại phim nào: Đời thường chữa lành 🌿 Ra kiểu nhìn thôi đã yên lòng. Bạn ra gì?', 'Vibe wajahku mirip genre film apa: Sehari-hari yang menenangkan 🌿 Katanya lihat saja sudah lega. Kamu dapat apa?'),
  },
  {
    id: 4,
    emoji: '🌧️',
    name: T('멜로 드라마', 'Melodrama', 'メロドラマ', '情感剧', '情感劇', 'Phim tình cảm chậm', 'Drama perasaan'),
    aiRead: T('은은한 미소에 느긋한 눈매와 갸름한 윤곽', 'A faint smile, unhurried eyes, and a slim outline', 'ほのかな笑みに、ゆったりした目元とすっきりした輪郭', '笑容很淡，眼神不急，轮廓偏瘦长', '笑容很淡，眼神不急，輪廓偏瘦長', 'Nụ cười nhẹ, mắt không vội, đường nét thon', 'Senyum yang samar, mata yang tidak terburu, garis wajah yang ramping'),
    quote: T('당신의 분위기는 \'감정이 깊게 스며드는 멜로 드라마\'예요.', 'Your vibe is a melodrama where the feeling sinks in slowly.', 'あなたの雰囲気は、感情が深くしみるメロドラマです。', '你的氛围是感情慢慢渗进去的情感剧。', '你的氛圍是感情慢慢滲進去的情感劇。', 'Không khí của bạn là phim tình cảm, cảm xúc ngấm từ từ.', 'Vibe-mu seperti drama perasaan yang meresap pelan.'),
    mood: T('섬세하고 여운이 길어 마음에 오래 남는 이야기', 'Delicate, and it stays with people after it ends.', '細やかで余韻が長く、心に残る話。', '细，余味长，会在心里停很久。', '細，餘味長，會在心裡停很久。', 'Tinh và dư âm dài, ở lại trong lòng.', 'Halus, dan rasanya menetap lama.'),
    charm: T('깊은 감수성과 진심', 'Deep feeling, and you mean it.', '深い感受性と、本気。', '感受深，而且是真心。', '感受深，而且是真心。', 'Cảm xúc sâu, và là thật.', 'Perasaan yang dalam, dan sungguh-sungguh.'),
    love: T('조용히 마음을 키우고 한번 준 마음을 오래 간직함', 'You grow a feeling quietly, and once you give it, you keep it.', '静かに気持ちを育てて、一度渡した心は長く持つ。', '安静地把心养大，给出去的心意会留很久。', '安靜地把心養大，給出去的心意會留很久。', 'Nuôi cảm xúc trong yên lặng, đã cho là giữ lâu.', 'Menumbuhkan rasa dengan tenang, dan sekali diberikan, disimpan lama.'),
    protagonist: T('눈빛 하나로 이야기를 전하는 주인공이에요', 'The lead who can tell a story with a look.', 'まなざしひとつで話を伝える主人公。', '一个眼神就能把故事说完的主角。', '一個眼神就能把故事說完的主角。', 'Nhân vật chính kể chuyện chỉ bằng ánh mắt.', 'Tokoh yang menyampaikan cerita lewat satu tatapan.'),
    cardPhrase: T('조용한 눈빛에 이야기가 있어요', 'A quiet look, and there is a story in it.', '静かなまなざしに、話がある。', '安静的眼神里有故事。', '安靜的眼神裡有故事。', 'Ánh mắt yên, mà có chuyện trong đó.', 'Tatapan yang tenang, dan ada cerita di dalamnya.'),
    oneLiner: T('깊은 감성은 큰 매력입니다. 마음도 한 줄씩 꺼내 보세요', 'That depth is attractive. Try letting a little of it out, one line at a time.', '深い感性は大きな魅力です。気持ちも一行ずつ出してみて。', '深的感受本身就吸引人。心里的话也可以一行行拿出来。', '深的感受本身就吸引人。心裡的話也可以一行行拿出來。', 'Cảm xúc sâu là sức hút. Thử lấy ra từng câu một.', 'Rasa yang dalam itu daya tarik. Coba keluarkan sedikit, satu kalimat sekali.'),
    shareLine: T('얼굴로 보는 나의 분위기 영화 장르: 멜로 드라마 🌧️ 나 멜로 나옴... 여운 긴 분위기래. 너는 뭐 나와?', 'What movie genre is my vibe: Melodrama 🌧️ I got a slow-burn drama. The feeling apparently lingers. What did you get?', '顔の雰囲気、似てる映画ジャンルは？ メロドラマ 🌧️ 私メロ出た。余韻が長い雰囲気らしい。あなたは？', '我的脸像哪种电影氛围：情感剧 🌧️ 我是情感剧。余味很长。你是哪种？', '我的臉像哪種電影氛圍：情感劇 🌧️ 我是情感劇。餘味很長。你是哪種？', 'Gương mặt tôi hợp thể loại phim nào: Phim tình cảm chậm 🌧️ Ra kiểu dư âm lâu. Bạn ra gì?', 'Vibe wajahku mirip genre film apa: Drama perasaan 🌧️ Katanya rasanya menetap lama. Kamu dapat apa?'),
  },
  {
    id: 5,
    emoji: '🔥',
    name: T('액션', 'Action', 'アクション', '动作', '動作', 'Hành động', 'Aksi'),
    aiRead: T('담백한 표정에 또렷한 눈매와 포근한 얼굴 비율', 'A plain expression, clear eyes, and a soft face shape', 'あっさりした表情に、はっきりした目元とやわらかい顔のバランス', '表情不多，眼神清楚，脸型偏柔和', '表情不多，眼神清楚，臉型偏柔和', 'Nét mặt giản, mắt rõ, khuôn mặt mềm', 'Ekspresi yang datar, mata yang jelas, bentuk wajah yang lembut'),
    quote: T('당신의 분위기는 \'한번 움직이면 곧게 나아가는 액션\'이에요.', 'Your vibe is an action story that goes straight once it starts.', 'あなたの雰囲気は、動き出したらまっすぐ進むアクションです。', '你的氛围是一动起来就笔直往前的动作片。', '你的氛圍是一動起來就筆直往前的動作片。', 'Không khí của bạn là phim hành động, đã đi là đi thẳng.', 'Vibe-mu seperti film aksi yang begitu bergerak langsung lurus ke depan.'),
    mood: T('박력 있고 시원해서 중심이 단단한 이야기', 'Strong and clean. The center of the story does not shake.', '勢いがあってさわやかで、軸がしっかりした話。', '有劲，也痛快，故事的中心很稳。', '有勁，也痛快，故事的中心很穩。', 'Có lực và sảng. Trục câu chuyện không lay.', 'Bertenaga dan lega. Inti ceritanya tidak goyah.'),
    charm: T('기준이 분명하고 책임지는 추진력', 'Clear standards, and you follow through.', '基準がはっきりしていて、責任を持って進める力。', '标准清楚，而且会把事扛到底。', '標準清楚，而且會把事扛到底。', 'Tiêu chuẩn rõ, và chịu trách nhiệm đến cùng.', 'Ukuran yang jelas, dan dorongan untuk menanggung sampai selesai.'),
    love: T('겉은 담백해도 소중한 사람은 끝까지 지킴', 'You look plain on the outside, and you protect the people who matter.', '外見はあっさりでも、大切な人は最後まで守る。', '外表淡，重要的人会守到最后。', '外表淡，重要的人會守到最後。', 'Bên ngoài giản, người quan trọng thì giữ đến cùng.', 'Dari luar terlihat datar, orang yang penting dijaga sampai akhir.'),
    protagonist: T('위기에서 먼저 앞장서는 주인공이에요', 'The lead who steps forward first when something goes wrong.', 'いざというとき、先に前へ出る主人公。', '出事时先站到前面的主角。', '出事時先站到前面的主角。', 'Nhân vật chính bước lên trước khi có chuyện.', 'Tokoh yang maju lebih dulu saat ada masalah.'),
    cardPhrase: T('표현은 담백해도 의리는 진해요', 'The words are plain. The loyalty is not.', '言葉はあっさりでも、情は厚い。', '话不多，情义很浓。', '話不多，情義很濃。', 'Lời giản, nghĩa thì dày.', 'Kata-katanya datar, loyalitasnya kental.'),
    oneLiner: T('단단한 추진력은 큰 힘입니다. 부드러운 한마디가 더해지면 더 멋집니다', 'That drive is a strength. One softer sentence makes it even better.', 'しっかり進める力は大きな力です。やわらかい一言が加わると、もっと格好いい。', '往前推的劲是力量。再加一句软一点的话，会更好看。', '往前推的勁是力量。再加一句軟一點的話，會更好看。', 'Sức đẩy ấy là lực. Thêm một câu dịu là đẹp hơn.', 'Dorongan yang kokoh itu kekuatan. Satu kalimat yang lebih lembut membuatnya makin bagus.'),
    shareLine: T('얼굴로 보는 나의 분위기 영화 장르: 액션 🔥 나 액션 나옴ㅋㅋ 곧게 나아가는 분위기래. 너는 뭐 나와?', 'What movie genre is my vibe: Action 🔥 I got action. Once I move, I apparently go straight ahead. What did you get?', '顔の雰囲気、似てる映画ジャンルは？ アクション 🔥 私アクション出た。動き出したらまっすぐ進む雰囲気らしい。あなたは？', '我的脸像哪种电影氛围：动作 🔥 我是动作片。一动起来就往前冲。你是哪种？', '我的臉像哪種電影氛圍：動作 🔥 我是動作片。一動起來就往前衝。你是哪種？', 'Gương mặt tôi hợp thể loại phim nào: Hành động 🔥 Ra kiểu đã đi là đi thẳng. Bạn ra gì?', 'Vibe wajahku mirip genre film apa: Aksi 🔥 Begitu bergerak, katanya lurus ke depan. Kamu dapat apa?'),
  },
  {
    id: 6,
    emoji: '🔎',
    name: T('스릴러', 'Thriller', 'スリラー', '惊悚', '驚悚', 'Giật gân', 'Thriller'),
    aiRead: T('담백한 표정에 또렷한 눈매와 갸름한 윤곽', 'A plain expression, clear eyes, and a slim outline', 'あっさりした表情に、はっきりした目元とすっきりした輪郭', '表情不多，眼神清楚，轮廓偏瘦长', '表情不多，眼神清楚，輪廓偏瘦長', 'Nét mặt giản, mắt rõ, đường nét thon', 'Ekspresi yang datar, mata yang jelas, garis wajah yang ramping'),
    quote: T('당신의 분위기는 \'눈을 뗄 수 없는 몰입감의 스릴러\'예요.', 'Your vibe is a thriller people cannot look away from.', 'あなたの雰囲気は、目が離せないスリラーです。', '你的氛围是让人挪不开眼的惊悚。', '你的氛圍是讓人挪不開眼的驚悚。', 'Không khí của bạn là phim giật gân, nhìn là khó rời.', 'Vibe-mu seperti thriller yang susah untuk tidak dilihat.'),
    mood: T('날카롭고 센스 있어 긴장감 있게 끌리는 이야기', 'Sharp, with a pull that keeps a little tension in the air.', '鋭くてセンスがあり、緊張感ごと惹きつける話。', '锐，也有感觉，带着一点紧，让人想靠近。', '銳，也有感覺，帶著一點緊，讓人想靠近。', 'Sắc và có gu, kéo người ta bằng một chút căng.', 'Tajam dan ada rasanya, menarik dengan sedikit ketegangan.'),
    charm: T('상황을 빠르게 읽는 관찰력과 반전 매력', 'You read a room fast, and there is a twist once people know you.', '状況をすぐ読む観察力と、反転の魅力。', '很快看懂场面的观察力，还有反转。', '很快看懂場面的觀察力，還有反轉。', 'Đọc tình huống nhanh, và có cú twist khi người ta hiểu bạn.', 'Cepat membaca situasi, dan ada belokan begitu orang mengenalmu.'),
    love: T('신중하게 살피고 확신이 서면 깊게 다가감', 'You watch carefully, then come closer once you are sure.', '慎重に見て、確信がついたら深く近づく。', '先看清楚，确定了再走近。', '先看清楚，確定了再走近。', 'Xem kỹ đã, chắc rồi mới đến gần.', 'Mengamati dulu, lalu mendekat dalam-dalam setelah yakin.'),
    protagonist: T('작은 단서도 놓치지 않는 주인공이에요', 'The lead who does not miss a small clue.', '小さな手がかりも見逃さない主人公。', '小线索也不放过的主角。', '小線索也不放過的主角。', 'Nhân vật chính không bỏ sót manh mối nhỏ.', 'Tokoh yang tidak melewatkan petunjuk kecil.'),
    cardPhrase: T('알수록 반전이 있는 사람이에요', 'The more people know you, the more the story turns.', '知るほど、反転がある人。', '越了解，越有反转。', '越了解，越有反轉。', 'Càng hiểu, càng có cú twist.', 'Makin dikenal, makin ada belokannya.'),
    oneLiner: T('관찰력은 큰 자산입니다. 감정 한 줄이 더해지면 더 가까워집니다', 'Noticing things is a real asset. One line about how you feel brings people closer.', '観察力は大きな資産です。気持ちを一行足すと、もっと近くなる。', '观察力是本事。再补一句心情，人会更近。', '觀察力是本事。再補一句心情，人會更近。', 'Biết quan sát là vốn. Thêm một câu về cảm xúc là gần hơn.', 'Kejelian itu modal. Satu kalimat tentang perasaan membuat orang lebih dekat.'),
    shareLine: T('얼굴로 보는 나의 분위기 영화 장르: 스릴러 🔎 나 스릴러 나옴ㅋㅋ 반전 있는 분위기래. 너는 뭐 나와?', 'What movie genre is my vibe: Thriller 🔎 I got thriller. Apparently there is a twist once you know me. What did you get?', '顔の雰囲気、似てる映画ジャンルは？ スリラー 🔎 私スリラー出た。知るほど反転があるらしい。あなたは？', '我的脸像哪种电影氛围：惊悚 🔎 我是惊悚。越了解越有反转。你是哪种？', '我的臉像哪種電影氛圍：驚悚 🔎 我是驚悚。越了解越有反轉。你是哪種？', 'Gương mặt tôi hợp thể loại phim nào: Giật gân 🔎 Càng hiểu càng có cú twist. Bạn ra gì?', 'Vibe wajahku mirip genre film apa: Thriller 🔎 Makin dikenal makin ada belokannya. Kamu dapat apa?'),
  },
  {
    id: 7,
    emoji: '🌱',
    name: T('성장 드라마', 'Coming-of-age', '成長ドラマ', '成长剧', '成長劇', 'Phim trưởng thành', 'Drama pendewasaan'),
    aiRead: T('담백한 표정에 차분한 눈매와 포근한 얼굴 비율', 'A plain expression, calm eyes, and a soft face shape', 'あっさりした表情に、落ち着いた目元とやわらかい顔のバランス', '表情不多，眼神安静，脸型偏柔和', '表情不多，眼神安靜，臉型偏柔和', 'Nét mặt giản, mắt điềm, khuôn mặt mềm', 'Ekspresi yang datar, mata yang tenang, bentuk wajah yang lembut'),
    quote: T('당신의 분위기는 \'한 걸음씩 단단해지는 성장 드라마\'예요.', 'Your vibe is a coming-of-age story that gets sturdier one step at a time.', 'あなたの雰囲気は、一歩ずつ強くなる成長ドラマです。', '你的氛围是一步步变得更稳的成长剧。', '你的氛圍是一步步變得更穩的成長劇。', 'Không khí của bạn là phim trưởng thành, mỗi bước một chắc hơn.', 'Vibe-mu seperti drama pendewasaan yang makin kokoh, selangkah demi selangkah.'),
    mood: T('담담하지만 꾸준해서 응원하고 싶은 이야기', 'Quiet, but steady enough that people want to cheer for it.', '淡々としているけど続いていて、応援したくなる話。', '不吵，但一直在走，让人想给它加油。', '不吵，但一直在走，讓人想給它加油。', 'Điềm, nhưng đều, đến mức người ta muốn cổ vũ.', 'Tenang, tapi konsisten, sampai orang ingin mendukung.'),
    charm: T('유행에 휘둘리지 않고 자기 속도로 나아가는 성실함', 'You move at your own pace and do not chase every trend.', '流行に流されず、自分の速度で進むまじめさ。', '不被潮流带着走，按自己的速度往前。', '不被潮流帶著走，按自己的速度往前。', 'Không bị trào lưu kéo, đi đúng tốc độ của mình.', 'Tidak terbawa tren, maju dengan kecepatan sendiri.'),
    love: T('표현은 느려도 한번 열면 진심이 큼', 'You are slow to say it. Once you do, it is a lot.', '表現は遅くても、一度開けば本心が大きい。', '表达慢，一旦打开，心意很大。', '表達慢，一旦打開，心意很大。', 'Nói chậm, nhưng mở lòng rồi là thật nhiều.', 'Lambat mengatakannya. Begitu terbuka, rasanya besar.'),
    protagonist: T('넘어져도 다시 일어나는 주인공이에요', 'The lead who gets back up after a fall.', '倒れても、また立つ主人公。', '摔倒了也会再站起来的主角。', '摔倒了也會再站起來的主角。', 'Nhân vật chính ngã rồi đứng dậy.', 'Tokoh yang jatuh, lalu berdiri lagi.'),
    cardPhrase: T('천천히, 하지만 분명히 자라는 중이에요', 'Slowly, and clearly, still growing.', 'ゆっくり、でも確かに育っている。', '慢，但确实在长。', '慢，但確實在長。', 'Chậm, nhưng đang lớn rõ ràng.', 'Pelan, tapi benar-benar sedang tumbuh.'),
    oneLiner: T('꾸준함은 큰 자산입니다. 마음의 표현을 한 줄만 더해 보세요', 'Staying with it is a real asset. Add one more line about how you feel.', '続く力は大きな資産です。気持ちの表現を一行だけ足してみて。', '能坚持是本事。心里的话再多说一行就好。', '能堅持是本事。心裡的話再多說一行就好。', 'Sự đều đặn là vốn. Thử thêm một câu về lòng mình.', 'Konsistensi itu modal. Tambahkan satu kalimat tentang perasaanmu.'),
    shareLine: T('얼굴로 보는 나의 분위기 영화 장르: 성장 드라마 🌱 나 성장 드라마 나옴ㅋㅋ 단단해지는 분위기래. 너는 뭐 나와?', 'What movie genre is my vibe: Coming-of-age 🌱 I got a growth story. Slowly getting sturdier, apparently. What did you get?', '顔の雰囲気、似てる映画ジャンルは？ 成長ドラマ 🌱 私成長ドラマ出た。少しずつ強くなる雰囲気らしい。あなたは？', '我的脸像哪种电影氛围：成长剧 🌱 我是成长剧。一步步变得更稳。你是哪种？', '我的臉像哪種電影氛圍：成長劇 🌱 我是成長劇。一步步變得更穩。你是哪種？', 'Gương mặt tôi hợp thể loại phim nào: Phim trưởng thành 🌱 Từ từ mà chắc. Bạn ra gì?', 'Vibe wajahku mirip genre film apa: Drama pendewasaan 🌱 Pelan-pelan, tapi makin kokoh. Kamu dapat apa?'),
  },
  {
    id: 8,
    emoji: '🌙',
    name: T('미스터리', 'Mystery', 'ミステリー', '神秘', '神秘', 'Bí ẩn', 'Misteri'),
    aiRead: T('담백한 표정에 느긋한 눈매와 갸름한 윤곽', 'A plain expression, unhurried eyes, and a slim outline', 'あっさりした表情に、ゆったりした目元とすっきりした輪郭', '表情不多，眼神不急，轮廓偏瘦长', '表情不多，眼神不急，輪廓偏瘦長', 'Nét mặt giản, mắt không vội, đường nét thon', 'Ekspresi yang datar, mata yang tidak terburu, garis wajah yang ramping'),
    quote: T('당신의 분위기는 \'더 알고 싶어지는 미스터리\'예요.', 'Your vibe is a mystery people want to know more about.', 'あなたの雰囲気は、もっと知りたくなるミステリーです。', '你的氛围是让人想再了解一点的神秘。', '你的氛圍是讓人想再了解一點的神秘。', 'Không khí của bạn là bí ẩn, càng nhìn càng muốn biết thêm.', 'Vibe-mu seperti misteri yang bikin orang ingin tahu lebih banyak.'),
    mood: T('조용하고 깊어 궁금증을 부르는 이야기', 'Quiet and deep. It makes people curious.', '静かで深くて、知りたくなる話。', '安静，也深，会勾起好奇。', '安靜，也深，會勾起好奇。', 'Yên và sâu, gọi sự tò mò.', 'Tenang dan dalam, mengundang rasa ingin tahu.'),
    charm: T('자기 페이스를 지키는 여유와 은근한 반전', 'You keep your own pace, with a twist that shows up later.', '自分のペースを守る余裕と、じんわりした反転。', '守着自己的节奏，后面还有一点反转。', '守著自己的節奏，後面還有一點反轉。', 'Giữ nhịp của mình, và có cú twist hiện sau.', 'Menjaga tempo sendiri, dengan belokan yang muncul belakangan.'),
    love: T('천천히 마음을 열고 곁에 오면 깊이 아낌', 'You open slowly. Once someone is close, you care deeply.', 'ゆっくり心を開いて、そばに来た人は深く大切にする。', '慢慢打开心，人走近了就很珍惜。', '慢慢打開心，人走近了就很珍惜。', 'Mở lòng chậm. Ai ở gần rồi thì thương sâu.', 'Membuka hati pelan. Begitu seseorang dekat, dijaga dalam-dalam.'),
    protagonist: T('한 장씩 비밀이 드러나는 주인공이에요', 'The lead whose secrets show up one page at a time.', '一枚ずつ秘密があらわれる主人公。', '秘密一页一页揭开的主角。', '秘密一頁一頁揭開的主角。', 'Nhân vật chính để bí mật lộ từng trang.', 'Tokoh yang rahasianya terbuka selembar demi selembar.'),
    cardPhrase: T('천천히 알아 가는 사람이에요', 'Someone you get to know slowly.', 'ゆっくり知っていく人。', '要慢慢认识的人。', '要慢慢認識的人。', 'Người phải từ từ mới hiểu.', 'Orang yang dikenali pelan-pelan.'),
    oneLiner: T('여유는 큰 매력입니다. 작은 신호 하나가 마음을 이어 줍니다', 'That unhurried pace is attractive. One small signal is enough to connect.', '余裕は大きな魅力です。小さな合図ひとつで、心はつながる。', '不急本身就吸引人。一个小信号就能把心接上。', '不急本身就吸引人。一個小信號就能把心接上。', 'Sự thong thả là sức hút. Một tín hiệu nhỏ cũng nối được lòng.', 'Tempo yang tidak terburu itu daya tarik. Satu isyarat kecil sudah cukup menghubungkan hati.'),
    shareLine: T('얼굴로 보는 나의 분위기 영화 장르: 미스터리 🌙 나 미스터리 나옴ㅋㅋ 더 알고 싶어지는 분위기래. 너는 뭐 나와?', 'What movie genre is my vibe: Mystery 🌙 I got mystery. People apparently want to know more. What did you get?', '顔の분위기、似てる映画ジャンルは？ ミステリー 🌙 私ミステリー出た。もっと知りたくなる雰囲気らしい。あなたは？', '我的脸像哪种电影氛围：神秘 🌙 我是神秘片。让人想再了解一点。你是哪种？', '我的臉像哪種電影氛圍：神秘 🌙 我是神秘片。讓人想再了解一點。你是哪種？', 'Gương mặt tôi hợp thể loại phim nào: Bí ẩn 🌙 Kiểu càng muốn biết thêm. Bạn ra gì?', 'Vibe wajahku mirip genre film apa: Misteri 🌙 Bikin orang ingin tahu lebih banyak. Kamu dapat apa?'),
  },
];

const movieById = (id: number) => phase3FaceMovies.find((item) => item.id === id) ?? phase3FaceMovies[0];

export function getPhase3FaceMovie(id: number): Phase3FaceMovie {
  return movieById(id);
}

export const PHASE3_FACE_MOVIE_THRESHOLDS = { S: 0.3, E: 0.28, R: 0.84 } as const;
export const PHASE3_FACE_MOVIE_MARGIN = 0.02;

type Axis = 'S' | 'E' | 'R';
const AXIS_ORDER: Axis[] = ['S', 'E', 'R'];

export function phase3FaceMovieId(sHigh: boolean, eHigh: boolean, rHigh: boolean): number {
  if (sHigh && eHigh && rHigh) return 1;
  if (sHigh && eHigh && !rHigh) return 2;
  if (sHigh && !eHigh && rHigh) return 3;
  if (sHigh && !eHigh && !rHigh) return 4;
  if (!sHigh && eHigh && rHigh) return 5;
  if (!sHigh && eHigh && !rHigh) return 6;
  if (!sHigh && !eHigh && rHigh) return 7;
  return 8;
}

export interface Phase3FaceMovieResult {
  primaryId: number;
  companionId: number | null;
}

export function classifyPhase3FaceMovie(metrics: Phase3FaceMetrics): Phase3FaceMovieResult {
  const flags: Record<Axis, boolean> = {
    S: metrics.S >= PHASE3_FACE_MOVIE_THRESHOLDS.S,
    E: metrics.E >= PHASE3_FACE_MOVIE_THRESHOLDS.E,
    R: metrics.R >= PHASE3_FACE_MOVIE_THRESHOLDS.R,
  };
  const primaryId = phase3FaceMovieId(flags.S, flags.E, flags.R);
  const near = AXIS_ORDER.filter(
    (axis) => Math.abs(metrics[axis] - PHASE3_FACE_MOVIE_THRESHOLDS[axis]) <= PHASE3_FACE_MOVIE_MARGIN
  ).sort(
    (a, b) =>
      Math.abs(metrics[a] - PHASE3_FACE_MOVIE_THRESHOLDS[a]) -
        Math.abs(metrics[b] - PHASE3_FACE_MOVIE_THRESHOLDS[b]) ||
      AXIS_ORDER.indexOf(a) - AXIS_ORDER.indexOf(b)
  );
  if (near.length === 0) return { primaryId, companionId: null };
  const axis = near[0];
  const companionId = phase3FaceMovieId(
    axis === 'S' ? !flags.S : flags.S,
    axis === 'E' ? !flags.E : flags.E,
    axis === 'R' ? !flags.R : flags.R
  );
  return { primaryId, companionId: companionId === primaryId ? null : companionId };
}

export const PHASE3_FACE_MOVIE_GENRE_META = {
  title: T('얼굴로 보는 나의 분위기 영화 장르', 'What movie genre is my vibe?', '顔の雰囲気、似てる映画ジャンルは？', '我的脸，像哪种电影氛围？', '我的臉，像哪種電影氛圍？', 'Gương mặt tôi hợp thể loại phim nào?', 'Vibe wajahku mirip genre film apa?'),
  description: T('사진 한 장에서 표정과 얼굴 비율을 읽고, 나의 분위기와 닮은 영화 장르 8가지 중 하나를 골라 드립니다. 사진은 기기 안에서만 분석하고 저장하거나 전송하지 않습니다.', 'One photo reads your expression and face shape, then picks the movie genre that matches your vibe from 8. The photo stays on your device. It is never saved or sent.', '写真1枚から表情と顔のバランスを読んで、雰囲気が近い映画ジャンルを8つの中から選びます。写真はこの端末の中だけで分析し、保存も送信もしません。', '一张照片读出表情和脸型，从8种电影氛围里选出最像你的一种。照片只在这台设备里分析，不会保存，也不会上传。', '一張照片讀出表情和臉型，從8種電影氛圍裡選出最像你的一種。照片只在這台裝置裡分析，不會保存，也不會上傳。', 'Một tấm ảnh đọc nét mặt và khuôn mặt, rồi chọn thể loại phim gần với không khí của bạn trong 8 lựa chọn. Ảnh chỉ được phân tích trên máy này, không lưu và không gửi đi.', 'Satu foto membaca ekspresi dan bentuk wajah, lalu memilih genre film yang paling mirip vibe-mu dari 8 pilihan. Foto hanya dianalisis di perangkat ini, tidak disimpan dan tidak dikirim.'),
  tags: {
    ko: ['얼굴', '얼굴테스트', 'AI인상분석', '연애테스트'],
    en: ['face', 'face test', 'movie vibe', 'dating'],
    ja: ['顔', '顔テスト', '映画', '恋愛'],
    'zh-CN': ['脸', '脸测试', '电影', '恋爱'],
    'zh-TW': ['臉', '臉測驗', '電影', '戀愛'],
    vi: ['khuôn mặt', 'test khuôn mặt', 'phim', 'hẹn hò'],
    id: ['wajah', 'tes wajah', 'film', 'kenalan'],
  } as Record<Phase3FaceMovieLocaleKey, string[]>,
};
