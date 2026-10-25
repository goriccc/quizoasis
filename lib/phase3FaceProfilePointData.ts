/**
 * AI가 골라주는 내 소개팅 프로필 포인트 — phase3-face-profile-point
 * S 미소, E 눈 개방(EAR), R 얼굴 너비/높이.
 * 기획서에 8칸 분류표가 없어, 각 분위기의 'AI가 읽은 인상'으로 칸을 고정했다.
 * 밝고 또렷·활짝 = S 높음, 담백 = S 낮음.
 * 또렷한 눈매 = E 높음, 차분·느긋한 눈매 = E 낮음.
 * 포근한 비율 = R 높음, 갸름한 윤곽 = R 낮음.
 * 임계값 ±0.02 안의 축이 있으면 그 축만 뒤집어 '함께 어울리는 분위기'로 보여 준다.
 */

import {
  averagePhase3FaceMetrics,
  measurePhase3FaceFrame,
  type Phase3FaceMetrics,
  type Phase3FaceQualityCode,
} from '@/lib/phase3FaceFirstImpressionData';

export { averagePhase3FaceMetrics, measurePhase3FaceFrame };
export type { Phase3FaceMetrics, Phase3FaceQualityCode };

export type Phase3FaceProfileLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';
export type Phase3FaceProfileText = Record<Phase3FaceProfileLocaleKey, string>;

function T(ko: string, en: string, ja: string, zhCN: string, zhTW: string, vi: string, id: string): Phase3FaceProfileText {
  return { ko, en, ja, 'zh-CN': zhCN, 'zh-TW': zhTW, vi, id };
}

export function faceProfileText(text: Phase3FaceProfileText, locale: string): string {
  const loc = locale as Phase3FaceProfileLocaleKey;
  return text[loc] || text.ko;
}

export interface Phase3FaceProfile {
  id: number;
  emoji: string;
  name: Phase3FaceProfileText;
  aiRead: Phase3FaceProfileText;
  quote: Phase3FaceProfileText;
  background: Phase3FaceProfileText;
  outfit: Phase3FaceProfileText;
  props: Phase3FaceProfileText;
  photoTip: Phase3FaceProfileText;
  talk: Phase3FaceProfileText;
  cardPhrase: Phase3FaceProfileText;
  oneLiner: Phase3FaceProfileText;
  shareLine: Phase3FaceProfileText;
}

export const phase3FaceProfiles: Phase3FaceProfile[] = [
  {
    id: 1,
    emoji: '🏃',
    name: T("스포티 야외", "Sporty outdoors", "スポーティな外出", "运动户外", "運動戶外", "Năng động ngoài trời", "Sporty di luar"),
    aiRead: T("밝고 또렷한 표정에 포근한 얼굴 비율", "A bright, clear expression and a soft face shape", "明るくはっきりした表情と、やわらかい顔立ち", "表情明亮清楚，脸型偏圆润", "表情明亮清楚，臉型偏圓潤", "Nét mặt sáng, rõ, khuôn mặt tròn mềm", "Ekspresi cerah dan tegas, bentuk wajah yang lembut"),
    quote: T("활기가 느껴지는 인상이라 '움직이는 순간'을 담은 프로필이 잘 어울릴 수 있어요.", "You come across as lively, so a photo that catches you mid-move can suit you.", "活気がある印象だから、動いている瞬間の写真が合いそう。", "给人有活力的感觉，抓拍正在活动的瞬间会很合适。", "給人有活力的感覺，抓拍正在活動的瞬間會很合適。", "Bạn trông đầy sức sống, nên ảnh bắt đúng lúc đang chuyển động sẽ hợp.", "Kesannya penuh energi, jadi foto saat sedang bergerak cocok buat kamu."),
    background: T("공원·산책로·운동장처럼 탁 트인 야외", "Open air, like a park, a walking path, or a field", "公園、散歩道、グラウンドなど、開けた屋外", "公园、步道、运动场这类开阔的户外", "公園、步道、運動場這類開闊的戶外", "Ngoài trời thoáng, như công viên, đường dạo hoặc sân tập", "Tempat terbuka, seperti taman, jalur jalan, atau lapangan"),
    outfit: T("맑은 하늘색·화이트·연초록, 편한 러닝 재킷이나 캡", "Sky blue, white, and pale green, with an easy running jacket or a cap", "明るい水色、白、薄い緑。動きやすいジャケットやキャップ", "天蓝、白、浅绿，配一件好活动的外套或帽子", "天藍、白、淺綠，配一件好活動的外套或帽子", "Xanh trời, trắng, xanh nhạt, kèm áo khoác chạy bộ hoặc mũ lưỡi trai", "Biru langit, putih, hijau muda, dengan jaket lari yang nyaman atau topi"),
    props: T("운동화, 물병, 자전거", "Sneakers, a water bottle, a bike", "スニーカー、水筒、自転車", "运动鞋、水瓶、自行车", "運動鞋、水瓶、腳踏車", "Giày thể thao, bình nước, xe đạp", "Sepatu olahraga, botol minum, sepeda"),
    photoTip: T("자연광 낮 시간, 걷는 중 자연스럽게 웃는 컷", "Daylight, laughing naturally while you walk", "日中の自然光で、歩きながら自然に笑っている一枚", "白天的自然光，走路时自然笑出来的一张", "白天的自然光，走路時自然笑出來的一張", "Ánh sáng ban ngày, cười tự nhiên khi đang đi", "Cahaya siang, tertawa natural sambil berjalan"),
    talk: T("요즘 즐기는 운동과 주말 활동", "The sport you are into lately, and what you do on weekends", "最近ハマっている運動と、週末の過ごし方", "最近在玩的运动，还有周末怎么过", "最近在玩的運動，還有週末怎麼過", "Môn bạn đang chơi dạo này, và cuối tuần bạn làm gì", "Olahraga yang lagi kamu sukai, dan kegiatan akhir pekan"),
    cardPhrase: T("움직일 때 제일 나다워요", "I look most like me when I am moving", "動いているときが、一番らしい", "动起来的时候最像我", "動起來的時候最像我", "Lúc chuyển động là giống mình nhất", "Paling mirip aku saat sedang bergerak"),
    oneLiner: T("활기는 첫인상을 밝힙니다. 취미 한 줄을 프로필에 적어 보세요", "Energy makes a first impression brighter. Add one line about a hobby.", "活気は第一印象を明るくします。趣味を一行足してみて。", "有活力，第一印象就会亮一点。资料里写上一句爱好吧。", "有活力，第一印象就會亮一點。資料裡寫上一句愛好吧。", "Sự tươi sáng làm ấn tượng đầu dễ chịu hơn. Thêm một dòng về sở thích.", "Energi bikin kesan pertama lebih cerah. Tulis satu baris tentang hobi."),
    shareLine: T("AI가 골라주는 내 소개팅 프로필 포인트: 스포티 야외 🏃 움직일 때 제일 나답대ㅋㅋ 프로필 카드 저장! 너는 뭐 나와?", "Which vibe fits my dating profile? Sporty outdoors 🏃 They say I look most like me when I am moving. Card saved. What is yours?", "マッチング写真、似合う雰囲気は？ スポーティな外出 🏃 動いてるときが一番らしいって。カード保存したよ。あなたは？", "交友照片，什么氛围最适合我？运动户外 🏃 说我一动起来最像我本人。卡片存好了，你是哪种？", "交友照片，什麼氛圍最適合我？運動戶外 🏃 說我一動起來最像我本人。卡片存好了，你是哪種？", "Ảnh hẹn hò của tôi hợp vibe nào? Năng động ngoài trời 🏃 Bảo lúc chuyển động là giống mình nhất. Đã lưu thẻ. Còn bạn?", "Foto kenalan aku cocok dengan vibe apa? Sporty di luar 🏃 Katanya paling mirip aku pas lagi gerak. Kartunya sudah kusimpan. Kamu yang mana?"),
  },
  {
    id: 2,
    emoji: '🌤️',
    name: T("청량 캐주얼", "Airy casual", "さっぱり日常", "清爽日常", "清爽日常", "Tươi mát mỗi ngày", "Kasual yang segar"),
    aiRead: T("활짝 웃는 표정에 또렷한 눈매와 갸름한 윤곽", "A wide smile, clear eyes, and a slim outline", "満面の笑み、はっきりした目もと、すっきりした輪郭", "笑容开朗，眼睛清楚，轮廓偏瘦长", "笑容開朗，眼睛清楚，輪廓偏瘦長", "Cười rộng, mắt rõ, đường nét thon", "Senyum lebar, mata yang tegas, garis wajah yang ramping"),
    quote: T("산뜻한 인상이라 '가볍고 맑은 일상 컷'이 잘 어울릴 수 있어요.", "You come across as fresh, so a light, bright everyday photo can suit you.", "さっぱりした印象だから、軽くて明るい日常の一枚が合いそう。", "给人清爽的感觉，轻快明亮的日常照会很合适。", "給人清爽的感覺，輕快明亮的日常照會很合適。", "Bạn trông tươi, nên một tấm đời thường nhẹ và sáng sẽ hợp.", "Kesannya segar, jadi foto sehari-hari yang ringan dan cerah cocok buat kamu."),
    background: T("밝은 거리·카페 테라스·햇살 드는 벽", "A bright street, a cafe terrace, or a sunlit wall", "明るい通り、カフェのテラス、日の当たる壁", "明亮的街道、咖啡店露台、有阳光的墙", "明亮的街道、咖啡店露台、有陽光的牆", "Phố sáng, sân thượng quán cà phê, hoặc tường có nắng", "Jalan yang terang, teras kafe, atau dinding yang kena matahari"),
    outfit: T("화이트·연한 블루·데님, 깔끔한 티셔츠나 셔츠", "White, pale blue, and denim. A clean T-shirt or shirt", "白、薄いブルー、デニム。すっきりしたTシャツやシャツ", "白、浅蓝、牛仔，干净的T恤或衬衫", "白、淺藍、丹寧，乾淨的T恤或襯衫", "Trắng, xanh nhạt, denim. Áo thun hoặc sơ mi gọn", "Putih, biru muda, denim. Kaos atau kemeja yang rapi"),
    props: T("아이스 음료, 선글라스", "An iced drink and sunglasses", "アイスドリンクとサングラス", "冰饮、墨镜", "冰飲、墨鏡", "Đồ uống đá và kính râm", "Minuman es dan kacamata hitam"),
    photoTip: T("정면보다 살짝 옆을 보며 웃는 컷", "Smile while looking a little to the side, not straight on", "正面より、少し横を見ながら笑っている一枚", "别正对镜头，微微看向旁边笑的一张", "別正對鏡頭，微微看向旁邊笑的一張", "Cười khi nhìn hơi sang bên, không nhìn thẳng", "Tersenyum sambil melihat sedikit ke samping, bukan lurus ke kamera"),
    talk: T("좋아하는 동네와 일상의 소소한 즐거움", "Your favorite neighborhood, and the small joys of an ordinary day", "好きな街と、日常の小さな楽しみ", "喜欢的街区，还有日常里的小开心", "喜歡的街區，還有日常裡的小開心", "Khu bạn thích, và những niềm vui nhỏ mỗi ngày", "Kawasan favoritmu, dan kesenangan kecil sehari-hari"),
    cardPhrase: T("산뜻하게 웃는 날이 많아요", "A lot of my days come with a bright smile", "さっぱり笑っている日が多いです", "清爽地笑着的日子很多", "清爽地笑著的日子很多", "Nhiều ngày mình cười rất tươi", "Banyak hari aku tersenyum segar"),
    oneLiner: T("밝은 분위기는 큰 매력입니다. 배경은 단순하게 두세요", "A bright mood is a real draw. Keep the background simple.", "明るい雰囲気は大きな魅力です。背景はシンプルに。", "明亮的感觉很加分。背景留得简单一点。", "明亮的感覺很加分。背景留得簡單一點。", "Không khí sáng là điểm hút người. Để nền đơn giản.", "Suasana cerah itu daya tarik besar. Biarkan latarnya sederhana."),
    shareLine: T("AI가 골라주는 내 소개팅 프로필 포인트: 청량 캐주얼 🌤️ 산뜻한 일상 컷이 어울린대ㅎㅎ 프로필 카드 저장! 너는 뭐 나와?", "Which vibe fits my dating profile? Airy casual 🌤️ They say an easy, bright everyday shot suits me. Card saved. What is yours?", "マッチング写真、似合う雰囲気は？ さっぱり日常 🌤️ 軽い日常写真が似合うって。カード保存したよ。あなたは？", "交友照片，什么氛围最适合我？清爽日常 🌤️ 说清爽的日常照最适合我。卡片存好了，你是哪种？", "交友照片，什麼氛圍最適合我？清爽日常 🌤️ 說清爽的日常照最適合我。卡片存好了，你是哪種？", "Ảnh hẹn hò của tôi hợp vibe nào? Tươi mát mỗi ngày 🌤️ Bảo ảnh đời thường sáng hợp với mình. Đã lưu thẻ. Còn bạn?", "Foto kenalan aku cocok dengan vibe apa? Kasual yang segar 🌤️ Katanya foto sehari-hari yang cerah cocok buat aku. Kartunya sudah kusimpan. Kamu yang mana?"),
  },
  {
    id: 3,
    emoji: '☕',
    name: T("따뜻 카페", "Warm cafe", "あたたかいカフェ", "暖咖啡馆", "暖咖啡館", "Quán cà phê ấm", "Kafe yang hangat"),
    aiRead: T("편안한 미소에 차분한 눈매와 포근한 얼굴 비율", "An easy smile, calm eyes, and a soft face shape", "やわらかい笑み、落ち着いた目もと、丸みのある顔立ち", "笑容放松，眼神平静，脸型圆润", "笑容放鬆，眼神平靜，臉型圓潤", "Nụ cười thoải mái, mắt điềm, khuôn mặt mềm", "Senyum yang santai, mata yang tenang, bentuk wajah yang lembut"),
    quote: T("편안한 인상이라 '따뜻한 조명의 카페 컷'이 잘 어울릴 수 있어요.", "You come across as easy to be around, so a cafe photo in warm light can suit you.", "ほっとする印象だから、暖かい照明のカフェ写真が合いそう。", "给人安心的感觉，暖光下的咖啡馆照会很合适。", "給人安心的感覺，暖光下的咖啡館照會很合適。", "Bạn trông dễ gần, nên ảnh quán cà phê dưới đèn ấm sẽ hợp.", "Kesannya menenangkan, jadi foto kafe dengan lampu hangat cocok buat kamu."),
    background: T("우드 톤 카페·창가 자리·은은한 조명", "A wood-toned cafe, a window seat, and soft light", "木の温もりがあるカフェ、窓際の席、やわらかい照明", "木质咖啡馆、靠窗的位子、柔和的灯光", "木質咖啡館、靠窗的位子、柔和的燈光", "Quán tông gỗ, chỗ ngồi cạnh cửa sổ, đèn dịu", "Kafe bernuansa kayu, tempat di dekat jendela, lampu yang lembut"),
    outfit: T("베이지·브라운·크림, 부드러운 셔츠나 가디건", "Beige, brown, and cream. A soft shirt or cardigan", "ベージュ、ブラウン、クリーム。柔らかいシャツやカーディガン", "米色、棕色、奶油色，柔软的衬衫或开衫", "米色、棕色、奶油色，柔軟的襯衫或開襟衫", "Be, nâu, kem. Áo sơ mi hoặc cardigan mềm", "Beige, cokelat, krem. Kemeja atau kardigan yang lembut"),
    props: T("머그컵, 책, 작은 화분", "A mug, a book, a small plant", "マグカップ、本、小さな鉢植え", "马克杯、一本书、小盆栽", "馬克杯、一本書、小盆栽", "Cốc sứ, một cuốn sách, chậu cây nhỏ", "Mug, buku, tanaman kecil"),
    photoTip: T("컵을 든 채 상대를 바라보듯 미소 짓는 컷", "Hold a cup and smile as if you are looking at the person across from you", "カップを持って、向かいにいる人を見るように微笑む一枚", "拿着杯子，像看着对面的人那样微笑", "拿著杯子，像看著對面的人那樣微笑", "Cầm cốc và mỉm cười như đang nhìn người đối diện", "Pegang cangkir dan tersenyum seperti sedang menatap orang di depanmu"),
    talk: T("단골 카페와 좋아하는 음료", "Your regular cafe, and the drink you always order", "行きつけのカフェと、好きなドリンク", "常去的咖啡馆，还有爱点的那杯", "常去的咖啡館，還有愛點的那杯", "Quán bạn hay ghé, và đồ uống bạn thích", "Kafe langgananmu, dan minuman favorit"),
    cardPhrase: T("마주 앉으면 편안한 사람이에요", "People feel at ease sitting across from me", "向かい合うと、落ち着く人です", "坐在对面，会让人放松", "坐在對面，會讓人放鬆", "Ngồi đối diện là thấy dễ chịu", "Duduk berhadapan denganku terasa nyaman"),
    oneLiner: T("편안함은 오래 남습니다. 따뜻한 조명을 활용해 보세요", "Ease stays with people. Use warm light.", "安心感は長く残ります。暖かい照明を使ってみて。", "让人放松的感觉会留很久。试试暖一点的光。", "讓人放鬆的感覺會留很久。試試暖一點的光。", "Sự dễ chịu ở lại lâu. Hãy dùng ánh sáng ấm.", "Rasa nyaman itu menetap lama. Pakai cahaya yang hangat."),
    shareLine: T("AI가 골라주는 내 소개팅 프로필 포인트: 따뜻 카페 ☕ 편안한 카페 컷이 어울린대ㅎㅎ 프로필 카드 저장! 너는 뭐 나와?", "Which vibe fits my dating profile? Warm cafe ☕ They say a cozy cafe shot suits me. Card saved. What is yours?", "マッチング写真、似合う雰囲気は？ あたたかいカフェ ☕ 落ち着いたカフェ写真が似合うって。カード保存したよ。あなたは？", "交友照片，什么氛围最适合我？暖咖啡馆 ☕ 说舒服的咖啡馆照最适合我。卡片存好了，你是哪种？", "交友照片，什麼氛圍最適合我？暖咖啡館 ☕ 說舒服的咖啡館照最適合我。卡片存好了，你是哪種？", "Ảnh hẹn hò của tôi hợp vibe nào? Quán cà phê ấm ☕ Bảo ảnh quán cà phê dễ chịu hợp với mình. Đã lưu thẻ. Còn bạn?", "Foto kenalan aku cocok dengan vibe apa? Kafe yang hangat ☕ Katanya foto kafe yang nyaman cocok buat aku. Kartunya sudah kusimpan. Kamu yang mana?"),
  },
  {
    id: 4,
    emoji: '🌸',
    name: T("로맨틱 파스텔", "Romantic pastel", "ロマンティックパステル", "浪漫粉彩", "浪漫粉彩", "Pastel lãng mạn", "Pastel romantis"),
    aiRead: T("은은한 미소에 느긋한 눈매와 갸름한 윤곽", "A quiet smile, unhurried eyes, and a slim outline", "控えめな笑み、ゆったりした目もと、すっきりした輪郭", "笑容淡淡的，眼神不急，轮廓偏瘦长", "笑容淡淡的，眼神不急，輪廓偏瘦長", "Nụ cười nhẹ, mắt thong thả, đường nét thon", "Senyum yang samar, mata yang santai, garis wajah yang ramping"),
    quote: T("부드러운 인상이라 '파스텔 톤의 몽글한 컷'이 잘 어울릴 수 있어요.", "You come across as gentle, so a soft pastel photo can suit you.", "柔らかい印象だから、パステルのふわっとした一枚が合いそう。", "给人柔和的感觉，粉彩色调的照片会很合适。", "給人柔和的感覺，粉彩色調的照片會很合適。", "Bạn trông dịu, nên một tấm pastel mềm sẽ hợp.", "Kesannya lembut, jadi foto pastel yang halus cocok buat kamu."),
    background: T("꽃길·꽃집·벚꽃·창가 커튼", "A flower path, a flower shop, cherry blossoms, or curtains by a window", "花の道、花屋、桜、窓辺のカーテン", "花路、花店、樱花、窗边的窗帘", "花路、花店、櫻花、窗邊的窗簾", "Đường hoa, tiệm hoa, hoa anh đào, hoặc rèm cạnh cửa sổ", "Jalan bunga, toko bunga, sakura, atau gorden di dekat jendela"),
    outfit: T("연핑크·라벤더·크림, 가벼운 블라우스나 니트 조끼", "Soft pink, lavender, and cream. A light blouse or a knit vest", "薄いピンク、ラベンダー、クリーム。軽いブラウスやニットベスト", "浅粉、薰衣草、奶油色，轻薄的衬衫或针织背心", "淺粉、薰衣草、奶油色，輕薄的襯衫或針織背心", "Hồng nhạt, oải hương, kem. Áo blouse nhẹ hoặc gile len", "Merah muda muda, lavender, krem. Blus ringan atau rompi rajut"),
    props: T("꽃 한 송이, 리본", "A single flower and a ribbon", "花を一輪とリボン", "一朵花、一条丝带", "一朵花、一條絲帶", "Một bông hoa và một dải ruy băng", "Sekuntum bunga dan pita"),
    photoTip: T("은은한 역광, 고개를 살짝 기울인 컷", "Soft backlight, with your head tilted a little", "やわらかい逆光で、頭を少し傾けた一枚", "柔和的逆光，头微微歪一点", "柔和的逆光，頭微微歪一點", "Ngược sáng dịu, đầu hơi nghiêng", "Cahaya dari belakang yang lembut, kepala sedikit dimiringkan"),
    talk: T("좋아하는 계절과 감성 취향", "Your favorite season, and the kind of mood you like", "好きな季節と、好みの空気感", "喜欢的季节，还有你喜欢的那种感觉", "喜歡的季節，還有你喜歡的那種感覺", "Mùa bạn thích, và gu cảm xúc của bạn", "Musim favoritmu, dan selera suasana yang kamu suka"),
    cardPhrase: T("은은하게 스며드는 사람이에요", "I grow on people quietly", "そっと馴染んでいく人です", "是会慢慢进到心里的人", "是會慢慢進到心裡的人", "Mình thấm vào người ta một cách nhẹ", "Aku masuk pelan-pelan ke hati orang"),
    oneLiner: T("부드러운 분위기는 큰 매력입니다. 색은 두 가지만 맞춰 보세요", "A soft mood is a real draw. Stick to two colors.", "柔らかい雰囲気は大きな魅力です。色は二色に絞って。", "柔和的感觉很加分。颜色只配两种就好。", "柔和的感覺很加分。顏色只配兩種就好。", "Không khí dịu là điểm hút người. Chỉ cần hai màu.", "Suasana lembut itu daya tarik besar. Cukup padukan dua warna."),
    shareLine: T("AI가 골라주는 내 소개팅 프로필 포인트: 로맨틱 파스텔 🌸 몽글한 파스텔 컷이 어울린대... 프로필 카드 저장! 너는 뭐 나와?", "Which vibe fits my dating profile? Romantic pastel 🌸 They say a soft pastel shot suits me. Card saved. What is yours?", "マッチング写真、似合う雰囲気は？ ロマンティックパステル 🌸 ふわっとしたパステル写真が似合うって。カード保存したよ。あなたは？", "交友照片，什么氛围最适合我？浪漫粉彩 🌸 说柔和的粉彩照最适合我。卡片存好了，你是哪种？", "交友照片，什麼氛圍最適合我？浪漫粉彩 🌸 說柔和的粉彩照最適合我。卡片存好了，你是哪種？", "Ảnh hẹn hò của tôi hợp vibe nào? Pastel lãng mạn 🌸 Bảo ảnh pastel mềm hợp với mình. Đã lưu thẻ. Còn bạn?", "Foto kenalan aku cocok dengan vibe apa? Pastel romantis 🌸 Katanya foto pastel yang lembut cocok buat aku. Kartunya sudah kusimpan. Kamu yang mana?"),
  },
  {
    id: 5,
    emoji: '🖤',
    name: T("시크 모노톤", "Sleek monochrome", "シックなモノトーン", "简约黑白", "簡約黑白", "Đơn sắc gọn gàng", "Monokrom yang rapi"),
    aiRead: T("담백한 표정에 또렷한 눈매와 포근한 얼굴 비율", "An understated expression, clear eyes, and a soft face shape", "あっさりした表情、はっきりした目もと、丸みのある顔立ち", "表情淡然，眼睛清楚，脸型圆润", "表情淡然，眼睛清楚，臉型圓潤", "Nét mặt giản dị, mắt rõ, khuôn mặt mềm", "Ekspresi yang sederhana, mata yang tegas, bentuk wajah yang lembut"),
    quote: T("담백하고 선명한 인상이라 '깔끔한 모노톤 컷'이 잘 어울릴 수 있어요.", "You come across as clear and unfussy, so a clean monochrome photo can suit you.", "あっさりして輪郭が立つ印象だから、きれいなモノトーン写真が合いそう。", "给人干净利落的感觉，黑白灰的照片会很合适。", "給人乾淨俐落的感覺，黑白灰的照片會很合適。", "Bạn trông gọn và rõ, nên ảnh đơn sắc sạch sẽ sẽ hợp.", "Kesannya bersih dan tegas, jadi foto monokrom yang rapi cocok buat kamu."),
    background: T("단색 벽·도시 건물·미니멀한 실내", "A solid-color wall, city buildings, or a minimal room", "単色の壁、街の建物、すっきりした室内", "纯色墙、城市建筑、极简的室内", "純色牆、城市建築、極簡的室內", "Tường một màu, nhà phố, hoặc phòng tối giản", "Dinding satu warna, gedung kota, atau ruangan yang minimal"),
    outfit: T("블랙·화이트·그레이, 단정한 재킷이나 셔츠", "Black, white, and gray. A neat jacket or shirt", "ブラック、ホワイト、グレー。きちんとしたジャケットやシャツ", "黑、白、灰，利落的外套或衬衫", "黑、白、灰，俐落的外套或襯衫", "Đen, trắng, xám. Áo khoác hoặc sơ mi chỉn chu", "Hitam, putih, abu-abu. Jaket atau kemeja yang rapi"),
    props: T("시계, 심플한 가방", "A watch and a simple bag", "時計とシンプルなバッグ", "手表、简洁的包", "手錶、簡潔的包", "Đồng hồ và túi đơn giản", "Jam tangan dan tas yang sederhana"),
    photoTip: T("정면을 편안히 바라보는 컷, 그림자가 부드러운 빛", "Look comfortably at the camera, in light that keeps the shadows soft", "正面を楽に見ている一枚。影が柔らかくなる光で", "放松地看向镜头，光线让影子柔和一点", "放鬆地看向鏡頭，光線讓影子柔和一點", "Nhìn thẳng một cách thoải mái, ánh sáng làm bóng mềm", "Menatap kamera dengan santai, cahaya yang membuat bayangan lembut"),
    talk: T("취향이 분명한 것들(음악·브랜드·공간)", "Things you have a clear taste in, like music, brands, or places", "好みがはっきりしているもの（音楽、ブランド、場所）", "你很有主见的东西，比如音乐、品牌、空间", "你很有主見的東西，比如音樂、品牌、空間", "Những thứ bạn có gu rõ, như nhạc, thương hiệu, không gian", "Hal yang seleramu jelas, seperti musik, merek, atau tempat"),
    cardPhrase: T("담백해도 마음은 따뜻해요", "I look plain, and I am warm", "あっさりして見えて、気持ちはあたたかい", "看着淡，心里是暖的", "看著淡，心裡是暖的", "Trông giản dị, nhưng lòng thì ấm", "Kelihatannya sederhana, tapi hatinya hangat"),
    oneLiner: T("분명한 스타일은 신뢰를 줍니다. 한 장은 웃는 컷도 섞어 보세요", "A clear style builds trust. Mix in one photo where you are smiling.", "はっきりしたスタイルは信頼になります。一枚は笑っている写真も入れて。", "风格明确会让人放心。其中一张换成笑着的吧。", "風格明確會讓人放心。其中一張換成笑著的吧。", "Phong cách rõ ràng tạo cảm giác tin. Thêm một tấm bạn đang cười.", "Gaya yang jelas bikin orang percaya. Sisipkan satu foto saat kamu tersenyum."),
    shareLine: T("AI가 골라주는 내 소개팅 프로필 포인트: 시크 모노톤 🖤 깔끔한 모노톤이 어울린대ㅋㅋ 프로필 카드 저장! 너는 뭐 나와?", "Which vibe fits my dating profile? Sleek monochrome 🖤 They say clean black and white suits me. Card saved. What is yours?", "マッチング写真、似合う雰囲気は？ シックなモノトーン 🖤 きれいなモノトーンが似合うって。カード保存したよ。あなたは？", "交友照片，什么氛围最适合我？简约黑白 🖤 说干净的黑白灰最适合我。卡片存好了，你是哪种？", "交友照片，什麼氛圍最適合我？簡約黑白 🖤 說乾淨的黑白灰最適合我。卡片存好了，你是哪種？", "Ảnh hẹn hò của tôi hợp vibe nào? Đơn sắc gọn gàng 🖤 Bảo tông đen trắng sạch hợp với mình. Đã lưu thẻ. Còn bạn?", "Foto kenalan aku cocok dengan vibe apa? Monokrom yang rapi 🖤 Katanya hitam putih yang bersih cocok buat aku. Kartunya sudah kusimpan. Kamu yang mana?"),
  },
  {
    id: 6,
    emoji: '📚',
    name: T("지적 서재", "Quiet study", "知的な書斎", "书房气质", "書房氣質", "Góc sách trầm", "Sudut baca yang tenang"),
    aiRead: T("담백한 표정에 또렷한 눈매와 갸름한 윤곽", "An understated expression, clear eyes, and a slim outline", "あっさりした表情、はっきりした目もと、すっきりした輪郭", "表情淡然，眼睛清楚，轮廓偏瘦长", "表情淡然，眼睛清楚，輪廓偏瘦長", "Nét mặt giản dị, mắt rõ, đường nét thon", "Ekspresi yang sederhana, mata yang tegas, garis wajah yang ramping"),
    quote: T("차분하고 또렷한 인상이라 '책과 함께하는 서재 컷'이 잘 어울릴 수 있어요.", "You come across as calm and clear, so a study photo with books can suit you.", "落ち着いて輪郭が立つ印象だから、本のある書斎の写真が合いそう。", "给人安静而清楚的感觉，和书在一起的书房照会很合适。", "給人安靜而清楚的感覺，和書在一起的書房照會很合適。", "Bạn trông điềm và rõ, nên ảnh góc sách sẽ hợp.", "Kesannya tenang dan tegas, jadi foto di sudut baca bersama buku cocok buat kamu."),
    background: T("서점·도서관·책장 앞", "A bookstore, a library, or in front of a bookshelf", "本屋、図書館、本棚の前", "书店、图书馆、书架前", "書店、圖書館、書架前", "Nhà sách, thư viện, hoặc trước kệ sách", "Toko buku, perpustakaan, atau di depan rak buku"),
    outfit: T("네이비·차콜·아이보리, 셔츠나 얇은 니트", "Navy, charcoal, and ivory. A shirt or a thin knit", "ネイビー、チャコール、アイボリー。シャツか薄いニット", "藏青、炭灰、象牙白，衬衫或薄针织", "藏青、炭灰、象牙白，襯衫或薄針織", "Navy, than, ngà. Sơ mi hoặc áo len mỏng", "Navy, arang, gading. Kemeja atau rajut tipis"),
    props: T("책, 안경(원래 쓰는 경우), 노트", "A book, glasses if you already wear them, and a notebook", "本、普段使っている眼鏡、ノート", "书、本来就戴的眼镜、笔记本", "書、本來就戴的眼鏡、筆記本", "Một cuốn sách, kính nếu bạn vốn đeo, và sổ tay", "Buku, kacamata kalau memang biasa dipakai, dan buku catatan"),
    photoTip: T("책장을 배경으로 한 반측면 컷", "A three-quarter shot with bookshelves behind you", "本棚を背景にした、やや斜めの一枚", "以书架为背景的半侧面", "以書架為背景的半側面", "Ảnh nghiêng nhẹ, kệ sách phía sau", "Foto tiga perempat dengan rak buku di belakang"),
    talk: T("최근 읽은 책이나 관심 분야", "A book you read recently, or a subject you care about", "最近読んだ本や、関心のある分野", "最近读的书，或你关心的领域", "最近讀的書，或你關心的領域", "Cuốn bạn vừa đọc, hoặc lĩnh vực bạn quan tâm", "Buku yang baru kamu baca, atau bidang yang kamu minati"),
    cardPhrase: T("조용히 깊이를 담는 사람이에요", "Quiet on the outside, with more underneath", "静かだけど、中身のある人です", "安静，但聊起来有内容", "安靜，但聊起來有內容", "Trông yên, nhưng nói chuyện thì có chiều", "Tenang, tapi ada isinya"),
    oneLiner: T("깊이는 대화로 이어집니다. 관심사 한 줄을 곁들여 보세요", "Depth turns into a conversation. Add one line about what you care about.", "深さは会話につながります。関心を一行添えてみて。", "有内容，话就接得上。资料里写上一句你关心的事。", "有內容，話就接得上。資料裡寫上一句你關心的事。", "Chiều sâu dẫn tới câu chuyện. Thêm một dòng về điều bạn quan tâm.", "Kedalaman jadi bahan obrolan. Tambahkan satu baris tentang minatmu."),
    shareLine: T("AI가 골라주는 내 소개팅 프로필 포인트: 지적 서재 📚 서재 컷이 어울린대ㅋㅋ 프로필 카드 저장! 너는 뭐 나와?", "Which vibe fits my dating profile? Quiet study 📚 They say a bookshelf shot suits me. Card saved. What is yours?", "マッチング写真、似合う雰囲気は？ 知的な書斎 📚 書斎の写真が似合うって。カード保存したよ。あなたは？", "交友照片，什么氛围最适合我？书房气质 📚 说书房照最适合我。卡片存好了，你是哪种？", "交友照片，什麼氛圍最適合我？書房氣質 📚 說書房照最適合我。卡片存好了，你是哪種？", "Ảnh hẹn hò của tôi hợp vibe nào? Góc sách trầm 📚 Bảo ảnh góc sách hợp với mình. Đã lưu thẻ. Còn bạn?", "Foto kenalan aku cocok dengan vibe apa? Sudut baca yang tenang 📚 Katanya foto rak buku cocok buat aku. Kartunya sudah kusimpan. Kamu yang mana?"),
  },
  {
    id: 7,
    emoji: '🧶',
    name: T("포근 니트", "Cozy knit", "ふわふわニット", "软糯针织", "軟糯針織", "Áo len ấm", "Rajut yang hangat"),
    aiRead: T("담백한 표정에 차분한 눈매와 포근한 얼굴 비율", "An understated expression, calm eyes, and a soft face shape", "あっさりした表情、落ち着いた目もと、丸みのある顔立ち", "表情淡然，眼神平静，脸型圆润", "表情淡然，眼神平靜，臉型圓潤", "Nét mặt giản dị, mắt điềm, khuôn mặt mềm", "Ekspresi yang sederhana, mata yang tenang, bentuk wajah yang lembut"),
    quote: T("차분하고 든든한 인상이라 '포근한 니트 컷'이 잘 어울릴 수 있어요.", "You come across as calm and steady, so a cozy knit photo can suit you.", "落ち着いて頼もしい印象だから、ふわっとしたニットの写真が合いそう。", "给人安稳的感觉，软乎乎的针织照会很合适。", "給人安穩的感覺，軟綿綿的針織照會很合適。", "Bạn trông điềm và chắc, nên ảnh áo len ấm sẽ hợp.", "Kesannya tenang dan bisa diandalkan, jadi foto rajut yang hangat cocok buat kamu."),
    background: T("집 안 소파·창가·가을 거리", "A sofa at home, a window seat, or an autumn street", "家のソファ、窓辺、秋の通り", "家里的沙发、窗边、秋天的街道", "家裡的沙發、窗邊、秋天的街道", "Ghế sofa ở nhà, cạnh cửa sổ, hoặc phố mùa thu", "Sofa di rumah, dekat jendela, atau jalan di musim gugur"),
    outfit: T("아이보리·카멜·그레이, 도톰한 니트나 가디건", "Ivory, camel, and gray. A thick knit or a cardigan", "アイボリー、キャメル、グレー。厚手のニットやカーディガン", "象牙白、驼色、灰，厚实的针织或开衫", "象牙白、驼色、灰，厚實的針織或開襟衫", "Ngà, camel, xám. Áo len dày hoặc cardigan", "Gading, camel, abu-abu. Rajut tebal atau kardigan"),
    props: T("담요, 따뜻한 차", "A blanket and a warm drink", "毛布と温かいお茶", "毯子、一杯热茶", "毯子、一杯熱茶", "Chăn và một tách trà ấm", "Selimut dan teh hangat"),
    photoTip: T("부드러운 실내 조명, 편안한 자세의 컷", "Soft indoor light, in a relaxed pose", "柔らかい室内の光で、楽な姿勢の一枚", "柔和的室内光，姿势放松的一张", "柔和的室內光，姿勢放鬆的一張", "Đèn trong nhà dịu, tư thế thoải mái", "Cahaya dalam ruangan yang lembut, pose yang santai"),
    talk: T("쉬는 날의 루틴과 좋아하는 계절", "How you spend a day off, and your favorite season", "休みの日の過ごし方と、好きな季節", "休息日怎么过，还有喜欢的季节", "休息日怎麼過，還有喜歡的季節", "Nhịp một ngày nghỉ, và mùa bạn thích", "Rutinitas hari libur, dan musim favoritmu"),
    cardPhrase: T("곁에 있으면 마음이 놓여요", "People feel at ease next to me", "そばにいると、気が休まる人です", "在身边，心里会放下", "在身邊，心裡會放下", "Ở cạnh là thấy yên", "Di sampingku, hati jadi tenang"),
    oneLiner: T("포근함은 신뢰를 줍니다. 질감이 보이도록 가까이서 찍어 보세요", "Coziness builds trust. Shoot close enough that the texture shows.", "あたたかさは信頼になります。質感が見える距離で撮ってみて。", "让人觉得暖和，就会更放心。拍近一点，让质感露出来。", "讓人覺得暖和，就會更放心。拍近一點，讓質感露出來。", "Sự ấm áp tạo cảm giác tin. Chụp gần để thấy chất vải.", "Kehangatan bikin orang percaya. Foto dari dekat supaya teksturnya kelihatan."),
    shareLine: T("AI가 골라주는 내 소개팅 프로필 포인트: 포근 니트 🧶 포근한 니트 컷이 어울린대ㅎㅎ 프로필 카드 저장! 너는 뭐 나와?", "Which vibe fits my dating profile? Cozy knit 🧶 They say a soft knit shot suits me. Card saved. What is yours?", "マッチング写真、似合う雰囲気は？ ふわふわニット 🧶 ふわっとしたニット写真が似合うって。カード保存したよ。あなたは？", "交友照片，什么氛围最适合我？软糯针织 🧶 说软乎乎的针织照最适合我。卡片存好了，你是哪种？", "交友照片，什麼氛圍最適合我？軟糯針織 🧶 說軟綿綿的針織照最適合我。卡片存好了，你是哪種？", "Ảnh hẹn hò của tôi hợp vibe nào? Áo len ấm 🧶 Bảo ảnh áo len ấm hợp với mình. Đã lưu thẻ. Còn bạn?", "Foto kenalan aku cocok dengan vibe apa? Rajut yang hangat 🧶 Katanya foto rajut yang hangat cocok buat aku. Kartunya sudah kusimpan. Kamu yang mana?"),
  },
  {
    id: 8,
    emoji: '🎞️',
    name: T("빈티지 감성", "Vintage mood", "ヴィンテージ気分", "复古胶片", "復古膠片", "Cảm giác phim cũ", "Nuansa vintage"),
    aiRead: T("담백한 표정에 느긋한 눈매와 갸름한 윤곽", "An understated expression, unhurried eyes, and a slim outline", "あっさりした表情、ゆったりした目もと、すっきりした輪郭", "表情淡然，眼神不急，轮廓偏瘦长", "表情淡然，眼神不急，輪廓偏瘦長", "Nét mặt giản dị, mắt thong thả, đường nét thon", "Ekspresi yang sederhana, mata yang santai, garis wajah yang ramping"),
    quote: T("여유로운 인상이라 '필름 감성의 빈티지 컷'이 잘 어울릴 수 있어요.", "You come across as unhurried, so a vintage, film-style photo can suit you.", "余裕のある印象だから、フィルムっぽい写真が合いそう。", "给人从容的感觉，胶片感的复古照会很合适。", "給人從容的感覺，膠片感的復古照會很合適。", "Bạn trông thong thả, nên ảnh kiểu phim cũ sẽ hợp.", "Kesannya tidak terburu-buru, jadi foto bergaya film cocok buat kamu."),
    background: T("골목·오래된 가게·벽돌 벽·레트로 공간", "An alley, an old shop, a brick wall, or a retro room", "路地、古い店、レンガの壁、レトロな空間", "小巷、老店、砖墙、复古的空间", "小巷、老店、磚牆、復古的空間", "Hẻm, quán cũ, tường gạch, hoặc không gian retro", "Gang, toko lama, dinding bata, atau ruang bergaya retro"),
    outfit: T("브라운·올리브·크림, 클래식한 재킷이나 셔츠", "Brown, olive, and cream. A classic jacket or shirt", "ブラウン、オリーブ、クリーム。クラシックなジャケットやシャツ", "棕、橄榄、奶油色，经典的外套或衬衫", "棕、橄欖、奶油色，經典的外套或襯衫", "Nâu, oliu, kem. Áo khoác hoặc sơ mi cổ điển", "Cokelat, zaitun, krem. Jaket atau kemeja klasik"),
    props: T("필름 카메라, 레코드", "A film camera and a record", "フィルムカメラとレコード", "胶片相机、黑胶", "底片相機、黑膠", "Máy ảnh phim và đĩa than", "Kamera film dan piringan hitam"),
    photoTip: T("따뜻한 필름 톤 보정, 시선을 살짝 비낀 컷", "A warm film look, with your gaze turned slightly away", "暖かいフィルム調で、視線を少し外した一枚", "暖色胶片调色，视线微微看向别处", "暖色膠片調色，視線微微看向別處", "Chỉnh tông phim ấm, mắt nhìn hơi lệch", "Gradasi film yang hangat, pandangan sedikit ke samping"),
    talk: T("좋아하는 음악과 레트로 취향", "Music you like, and your taste for older things", "好きな音楽と、レトロな好み", "喜欢的音乐，还有复古口味", "喜歡的音樂，還有復古口味", "Nhạc bạn thích, và gu đồ cũ", "Musik yang kamu suka, dan selera retro"),
    cardPhrase: T("천천히, 나만의 감성으로 가요", "I take my time, in my own mood", "ゆっくり、自分の感覚で進みます", "慢慢来，按自己的感觉走", "慢慢來，按自己的感覺走", "Mình đi chậm, theo cảm giác của mình", "Pelan-pelan, dengan rasa milikku sendiri"),
    oneLiner: T("감성은 개성입니다. 보정은 과하지 않게 자연스럽게 하세요", "Taste is part of who you are. Keep the edit light and natural.", "感性は個性です。加工はやりすぎず、自然に。", "感觉就是个性。修图别过，留一点自然。", "感覺就是個性。修圖別過，留一點自然。", "Gu là cá tính. Chỉnh ảnh vừa đủ, cho tự nhiên.", "Rasa itu bagian dari dirimu. Edit secukupnya, biarkan tetap natural."),
    shareLine: T("AI가 골라주는 내 소개팅 프로필 포인트: 빈티지 감성 🎞️ 필름 감성이 어울린대... 프로필 카드 저장! 너는 뭐 나와?", "Which vibe fits my dating profile? Vintage mood 🎞️ They say a film look suits me. Card saved. What is yours?", "マッチング写真、似合う雰囲気は？ ヴィンテージ気分 🎞️ フィルムっぽい雰囲気が似合うって。カード保存したよ。あなたは？", "交友照片，什么氛围最适合我？复古胶片 🎞️ 说胶片感最适合我。卡片存好了，你是哪种？", "交友照片，什麼氛圍最適合我？復古膠片 🎞️ 說膠片感最適合我。卡片存好了，你是哪種？", "Ảnh hẹn hò của tôi hợp vibe nào? Cảm giác phim cũ 🎞️ Bảo cảm giác phim cũ hợp với mình. Đã lưu thẻ. Còn bạn?", "Foto kenalan aku cocok dengan vibe apa? Nuansa vintage 🎞️ Katanya nuansa film cocok buat aku. Kartunya sudah kusimpan. Kamu yang mana?"),
  },
];

const profileById = (id: number) => phase3FaceProfiles.find((item) => item.id === id) ?? phase3FaceProfiles[0];

export function getPhase3FaceProfile(id: number): Phase3FaceProfile {
  return profileById(id);
}

export const PHASE3_FACE_PROFILE_THRESHOLDS = { S: 0.3, E: 0.28, R: 0.84 } as const;
export const PHASE3_FACE_PROFILE_MARGIN = 0.02;

type Axis = 'S' | 'E' | 'R';
const AXIS_ORDER: Axis[] = ['S', 'E', 'R'];

export function phase3FaceProfileId(sHigh: boolean, eHigh: boolean, rHigh: boolean): number {
  if (sHigh && eHigh && rHigh) return 1;
  if (sHigh && eHigh && !rHigh) return 2;
  if (sHigh && !eHigh && rHigh) return 3;
  if (sHigh && !eHigh && !rHigh) return 4;
  if (!sHigh && eHigh && rHigh) return 5;
  if (!sHigh && eHigh && !rHigh) return 6;
  if (!sHigh && !eHigh && rHigh) return 7;
  return 8;
}

export interface Phase3FaceProfileResult {
  primaryId: number;
  companionId: number | null;
}

export function classifyPhase3FaceProfile(metrics: Phase3FaceMetrics): Phase3FaceProfileResult {
  const flags: Record<Axis, boolean> = {
    S: metrics.S >= PHASE3_FACE_PROFILE_THRESHOLDS.S,
    E: metrics.E >= PHASE3_FACE_PROFILE_THRESHOLDS.E,
    R: metrics.R >= PHASE3_FACE_PROFILE_THRESHOLDS.R,
  };
  const primaryId = phase3FaceProfileId(flags.S, flags.E, flags.R);
  const near = AXIS_ORDER.filter(
    (axis) => Math.abs(metrics[axis] - PHASE3_FACE_PROFILE_THRESHOLDS[axis]) <= PHASE3_FACE_PROFILE_MARGIN
  ).sort(
    (a, b) =>
      Math.abs(metrics[a] - PHASE3_FACE_PROFILE_THRESHOLDS[a]) -
        Math.abs(metrics[b] - PHASE3_FACE_PROFILE_THRESHOLDS[b]) ||
      AXIS_ORDER.indexOf(a) - AXIS_ORDER.indexOf(b)
  );
  if (near.length === 0) return { primaryId, companionId: null };
  const axis = near[0];
  const companionId = phase3FaceProfileId(
    axis === 'S' ? !flags.S : flags.S,
    axis === 'E' ? !flags.E : flags.E,
    axis === 'R' ? !flags.R : flags.R
  );
  return { primaryId, companionId: companionId === primaryId ? null : companionId };
}

export const PHASE3_FACE_PROFILE_POINT_META = {
  title: T("AI가 골라주는 내 소개팅 프로필 포인트", "Which vibe fits my dating profile?", "マッチング写真、似合う雰囲気は？", "交友照片，什么氛围最适合我？", "交友照片，什麼氛圍最適合我？", "Ảnh hẹn hò của tôi hợp vibe nào?", "Foto kenalan aku cocok dengan vibe apa?"),
  description: T("사진 한 장에서 표정과 얼굴 비율을 읽고, 소개팅 프로필에 어울리는 분위기 8가지 중 하나를 골라 드립니다. 사진은 기기 안에서만 분석하고 저장하거나 전송하지 않습니다.", "One photo reads your expression and face shape, then picks one of 8 vibes for your dating profile. The photo stays on your device. It is never saved or sent.", "写真1枚から表情と顔のバランスを読んで、マッチング写真に合う雰囲気を8つから選びます。写真はこの端末の中だけで分析し、保存も送信もしません。", "一张照片读出表情和脸型，从8种氛围里挑出最适合交友照片的一种。照片只在这台设备里分析，不会保存，也不会上传。", "一張照片讀出表情和臉型，從8種氛圍裡挑出最適合交友照片的一種。照片只在這台裝置裡分析，不會保存，也不會上傳。", "Một tấm ảnh đọc nét mặt và khuôn mặt, rồi chọn 1 trong 8 vibe hợp với ảnh hẹn hò của bạn. Ảnh chỉ được phân tích trên máy này, không lưu và không gửi đi.", "Satu foto membaca ekspresi dan bentuk wajah, lalu memilih 1 dari 8 vibe yang cocok untuk foto kenalanmu. Foto hanya dianalisis di perangkat ini, tidak disimpan dan tidak dikirim."),
  tags: {
    "ko": [
      "얼굴",
      "얼굴테스트",
      "AI인상분석",
      "연애테스트"
    ],
    "en": [
      "face",
      "face test",
      "first impression",
      "dating"
    ],
    "ja": [
      "顔",
      "顔テスト",
      "印象",
      "恋愛"
    ],
    "zh-CN": [
      "脸",
      "脸测试",
      "印象",
      "恋爱"
    ],
    "zh-TW": [
      "臉",
      "臉測驗",
      "印象",
      "戀愛"
    ],
    "vi": [
      "khuôn mặt",
      "test khuôn mặt",
      "ấn tượng",
      "hẹn hò"
    ],
    "id": [
      "wajah",
      "tes wajah",
      "kesan",
      "kenalan"
    ]
  } as Record<Phase3FaceProfileLocaleKey, string[]>,
};
