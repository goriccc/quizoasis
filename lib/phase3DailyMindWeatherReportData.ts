/**
 * 오늘 나의 '마음 날씨' 리포트 — 6문항 이미지 4지선다, A=0 B=1 C=2 D=3, 총점 0~18 → Type1~6
 *
 * Supabase `tests-thumbnails` 업로드 파일명 규칙:
 * - 썸네일: p3_daily_mind_weather_report.webp
 * - 답변 이미지(1:1): p3_daily_mind_weather_report_q{n}a~d.webp (6문항 × 4 = 24장)
 * 7-locale multilingual data (ko, en, ja, zh-CN, zh-TW, vi, id)
 */

type Locale = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';
type ML = Record<Locale, string>;

function L(m: ML): Record<string, string> {
  return m;
}

function pick(m: Record<string, string>, locale: string): string {
  return m[locale] || m.ko;
}

export interface Phase3DailyMindWeatherReportQuestion {
  id: number;
  question: Record<string, string>;
  options: { image: string; label: Record<string, string>; score: number }[];
}

export interface Phase3DailyMindWeatherReportResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  weatherLabel: Record<string, string>;
  temperature: Record<string, string>;
  todayAdvice: Record<string, string>;
  suitableThings: Record<string, string>;
  emotionLine: Record<string, string>;
  tomorrowCheck: Record<string, string>;
  crisisNote: Record<string, string> | null;
  shareSnippet: Record<string, string>;
}

export function calculatePhase3DailyMindWeatherReportResult(scores: number[]): string {
  const total = scores.reduce((a, b) => a + (b ?? 0), 0);
  if (total <= 2) return 'Type1';
  if (total <= 5) return 'Type2';
  if (total <= 9) return 'Type3';
  if (total <= 13) return 'Type4';
  if (total <= 16) return 'Type5';
  return 'Type6';
}

const IMG = (n: number, choice: 'a' | 'b' | 'c' | 'd') =>
  `p3_daily_mind_weather_report_q${n}${choice}.webp`;

function opt(n: number, choice: 'a' | 'b' | 'c' | 'd', m: ML, score: number) {
  return { image: IMG(n, choice), label: L(m), score };
}

export const phase3DailyMindWeatherReportQuestions: Phase3DailyMindWeatherReportQuestion[] = [
  {
    id: 1,
    question: L({
      ko: '오늘 아침 눈을 떴을 때의 느낌은?',
      en: 'How did you feel when you woke up this morning?',
      ja: '今朝目を覚ましたときの気分は？',
      'zh-CN': '今天早上醒来时的感觉是什么？',
      'zh-TW': '今天早上醒來時的感覺是什麼？',
      vi: 'Cảm giác của bạn khi thức dậy sáng nay là gì?',
      id: 'Bagaimana perasaanmu saat bangun pagi ini?',
    }),
    options: [
      opt(1, 'a', {
        ko: '창문으로 햇살이 쏟아지고 개운하게 일어나는 장면',
        en: 'Sunlight pouring through the window, waking up refreshed',
        ja: '窓から日差しが差し込み、すっきり目覚める場面',
        'zh-CN': '阳光洒进窗户，清爽醒来的画面',
        'zh-TW': '陽光灑進窗戶，清爽醒來的畫面',
        vi: 'Ánh nắng tràn qua cửa sổ, thức dậy thật sảng khoái',
        id: 'Sinar matahari masuk lewat jendela, bangun dengan segar',
      }, 0),
      opt(1, 'b', {
        ko: '알람을 끄고 적당히 일어나는 평범한 아침 장면',
        en: 'A normal morning, turning off the alarm and getting up',
        ja: 'アラームを止めて、普通に起きる朝の場面',
        'zh-CN': '关掉闹钟，普普通通起床的早晨',
        'zh-TW': '關掉鬧鐘，普普通通起床的早晨',
        vi: 'Tắt báo thức và dậy như mọi buổi sáng bình thường',
        id: 'Mematikan alarm dan bangun seperti pagi biasa',
      }, 1),
      opt(1, 'c', {
        ko: '이불을 더 끌어당기고 5분만 더 있고 싶은 장면',
        en: 'Pulling the blanket back, wanting five more minutes',
        ja: '布団を引き寄せて、あと5分だけ寝ていたい場面',
        'zh-CN': '把被子再拉过来，想再睡5分钟的画面',
        'zh-TW': '把被子再拉過來，想再睡5分鐘的畫面',
        vi: 'Kéo chăn lại và muốn ngủ thêm 5 phút nữa',
        id: 'Menarik selimut lagi, ingin tidur 5 menit lagi',
      }, 2),
      opt(1, 'd', {
        ko: '눈을 떴지만 다시 덮어버리고 싶은 무거운 아침 장면',
        en: 'A heavy morning, wanting to close your eyes again',
        ja: '目は覚めたけれど、また閉じたい重い朝の場面',
        'zh-CN': '虽然醒了，却想再次闭上眼的沉重早晨',
        'zh-TW': '雖然醒了，卻想再次閉上眼的沉重早晨',
        vi: 'Đã thức dậy nhưng muốn nhắm mắt lại, một buổi sáng nặng nề',
        id: 'Sudah bangun tapi ingin menutup mata lagi, pagi yang berat',
      }, 3),
    ],
  },
  {
    id: 2,
    question: L({
      ko: '지금 내 몸 상태를 가장 잘 표현한 이미지는?',
      en: 'Which image best describes how your body feels right now?',
      ja: '今の体の状態を最もよく表すイメージは？',
      'zh-CN': '哪张图片最能表达你现在的身体状态？',
      'zh-TW': '哪張圖片最能表達你現在的身體狀態？',
      vi: 'Hình ảnh nào mô tả đúng nhất trạng thái cơ thể của bạn lúc này?',
      id: 'Gambar mana yang paling menggambarkan kondisi tubuhmu saat ini?',
    }),
    options: [
      opt(2, 'a', {
        ko: '가볍게 달리거나 스트레칭하는 에너지 넘치는 장면',
        en: 'Running lightly or stretching with overflowing energy',
        ja: '軽く走ったりストレッチする、エネルギーあふれる場面',
        'zh-CN': '轻松跑步或拉伸，充满能量的画面',
        'zh-TW': '輕鬆跑步或拉伸，充滿能量的畫面',
        vi: 'Chạy nhẹ hoặc giãn cơ với năng lượng tràn đầy',
        id: 'Lari ringan atau stretching dengan energi meluap',
      }, 0),
      opt(2, 'b', {
        ko: '카페에서 커피 한 잔 마시며 평온하게 앉아있는 장면',
        en: 'Sitting peacefully at a café with a cup of coffee',
        ja: 'カフェでコーヒーを飲みながら穏やかに座っている場面',
        'zh-CN': '在咖啡馆喝着咖啡，平静地坐着',
        'zh-TW': '在咖啡館喝著咖啡，平靜地坐著',
        vi: 'Ngồi bình yên ở quán cà phê với một tách cà phê',
        id: 'Duduk tenang di kafe sambil minum secangkir kopi',
      }, 1),
      opt(2, 'c', {
        ko: '소파에 기대어 조금 늘어진 채 쉬고 있는 장면',
        en: 'Leaning on the sofa, slumped a little while resting',
        ja: 'ソファにもたれ、少しだらりと休んでいる場面',
        'zh-CN': '靠在沙发上，有点懒散地休息',
        'zh-TW': '靠在沙發上，有點懶散地休息',
        vi: 'Dựa vào sofa, hơi xệ xuống và nghỉ ngơi',
        id: 'Bersandar di sofa, sedikit lemas sambil beristirahat',
      }, 2),
      opt(2, 'd', {
        ko: '침대에 누워 몸이 무거워 움직이기 힘든 장면',
        en: 'Lying in bed, body heavy and hard to move',
        ja: 'ベッドに横たわり、体が重くて動けない場面',
        'zh-CN': '躺在床上，身体沉重，难以动弹',
        'zh-TW': '躺在床上，身體沉重，難以動彈',
        vi: 'Nằm trên giường, cơ thể nặng nề và khó cử động',
        id: 'Berbaring di tempat tidur, tubuh terasa berat dan sulit bergerak',
      }, 3),
    ],
  },
  {
    id: 3,
    question: L({
      ko: '오늘 사람들과 함께하고 싶은 정도는?',
      en: 'How much do you want to be with people today?',
      ja: '今日、人と一緒にいたい気持ちはどのくらい？',
      'zh-CN': '今天你想和人们在一起的程度是？',
      'zh-TW': '今天你想和人們在一起的程度是？',
      vi: 'Hôm nay bạn muốn ở bên mọi người đến mức nào?',
      id: 'Seberapa ingin kamu bersama orang lain hari ini?',
    }),
    options: [
      opt(3, 'a', {
        ko: '친구들과 활기차게 웃으며 함께하는 모임 장면',
        en: 'A lively gathering with friends, laughing together',
        ja: '友だちと元気に笑い合う集まりの場面',
        'zh-CN': '和朋友们活力满满地笑着聚在一起的画面',
        'zh-TW': '和朋友們活力滿滿地笑著聚在一起的畫面',
        vi: 'Tụ tập vui vẻ cùng bạn bè, cười đùa rộn ràng',
        id: 'Berkumpul riang dengan teman-teman, saling tertawa',
      }, 0),
      opt(3, 'b', {
        ko: '친한 한두 명과 카페에서 조용히 이야기 나누는 장면',
        en: 'Quiet conversation with one or two close friends at a café',
        ja: '親しい一二人とカフェで静かに話す場面',
        'zh-CN': '和一两位好友在咖啡馆安静聊天的画面',
        'zh-TW': '和一兩位好友在咖啡館安靜聊天的畫面',
        vi: 'Trò chuyện nhẹ nhàng với một hai người thân ở quán cà phê',
        id: 'Mengobrol tenang dengan satu atau dua teman dekat di kafe',
      }, 1),
      opt(3, 'c', {
        ko: '카페나 공원에서 혼자 조용히 시간을 보내는 장면',
        en: 'Spending quiet time alone at a café or park',
        ja: 'カフェや公園で一人で静かに過ごす場面',
        'zh-CN': '在咖啡馆或公园里独自安静地度过时光',
        'zh-TW': '在咖啡館或公園裡獨自安靜地度過時光',
        vi: 'Ở một mình yên lặng tại quán cà phê hoặc công viên',
        id: 'Menghabiskan waktu sendirian dengan tenang di kafe atau taman',
      }, 2),
      opt(3, 'd', {
        ko: '방 안에 혼자 커튼 닫고 아무도 없이 있는 장면',
        en: 'Alone in your room with curtains drawn, no one around',
        ja: '部屋でカーテンを閉め、一人きりでいる場面',
        'zh-CN': '独自待在房间里，拉上窗帘，周围没有人',
        'zh-TW': '獨自待在房間裡，拉上窗簾，周圍沒有人',
        vi: 'Ở một mình trong phòng, kéo rèm và không có ai bên cạnh',
        id: 'Sendirian di kamar, tirai ditutup, tanpa siapa pun',
      }, 3),
    ],
  },
  {
    id: 4,
    question: L({
      ko: '지금 내 마음이 있고 싶은 공간은?',
      en: 'Where does your heart want to be right now?',
      ja: '今、心がいたい場所は？',
      'zh-CN': '现在你的心最想去的地方是哪里？',
      'zh-TW': '現在你的心最想去的地方是哪裡？',
      vi: 'Lúc này trái tim bạn muốn ở đâu nhất?',
      id: 'Di mana hati kamu ingin berada saat ini?',
    }),
    options: [
      opt(4, 'a', {
        ko: '햇살 좋은 야외. 탁 트인 공원이나 바다',
        en: 'Sunny outdoors. An open park or the sea',
        ja: '日差しの良い屋外。広々とした公園や海',
        'zh-CN': '阳光好的户外。开阔的公园或大海',
        'zh-TW': '陽光好的戶外。開闊的公園或大海',
        vi: 'Ngoài trời nắng đẹp. Công viên rộng mở hoặc biển',
        id: 'Luar ruangan yang cerah. Taman terbuka atau laut',
      }, 0),
      opt(4, 'b', {
        ko: '아늑한 동네 카페. 따뜻한 음료와 함께',
        en: 'A cozy neighborhood café. With a warm drink',
        ja: '居心地の良い近所のカフェ。温かい飲み物と一緒に',
        'zh-CN': '温馨的小区咖啡馆。配上一杯暖饮',
        'zh-TW': '溫馨的社區咖啡館。配上一杯暖飲',
        vi: 'Quán cà phê nhỏ ấm cúng. Cùng một ly đồ uống ấm',
        id: 'Kafe kecil yang nyaman. Dengan minuman hangat',
      }, 1),
      opt(4, 'c', {
        ko: '내 방 침대 위. 좋아하는 것들로 둘러싸인 곳',
        en: 'On my bed at home. Surrounded by things I love',
        ja: '自分の部屋のベッドの上。好きなものに囲まれた場所',
        'zh-CN': '自己房间的床上。被喜欢的东西包围着',
        'zh-TW': '自己房間的床上。被喜歡的東西包圍著',
        vi: 'Trên giường trong phòng mình. Xung quanh là những thứ mình yêu thích',
        id: 'Di tempat tidur di kamarku. Dikelilingi hal-hal yang kusukai',
      }, 2),
      opt(4, 'd', {
        ko: '아무것도 없는 어둡고 조용한 곳. 완전한 고요함',
        en: 'A dark, quiet place with nothing around. Complete silence',
        ja: '何もない暗く静かな場所。完全な静けさ',
        'zh-CN': '什么都没有的黑暗安静之处。完全的寂静',
        'zh-TW': '什麼都沒有的黑暗安靜之處。完全的寂靜',
        vi: 'Nơi tối và yên lặng, không có gì xung quanh. Hoàn toàn tĩnh lặng',
        id: 'Tempat gelap dan sunyi tanpa apa pun. Keheningan sepenuhnya',
      }, 3),
    ],
  },
  {
    id: 5,
    question: L({
      ko: '오늘 나에게 가장 필요한 것은?',
      en: 'What do you need most today?',
      ja: '今日、自分に最も必要なものは？',
      'zh-CN': '今天你最需要的是什么？',
      'zh-TW': '今天你最需要的是什麼？',
      vi: 'Hôm nay bạn cần nhất điều gì?',
      id: 'Apa yang paling kamu butuhkan hari ini?',
    }),
    options: [
      opt(5, 'a', {
        ko: '신나고 재밌는 일. 새로운 자극과 에너지',
        en: 'Something fun and exciting. New stimulation and energy',
        ja: 'ワクワクする楽しいこと。新しい刺激とエネルギー',
        'zh-CN': '有趣又开心的事。新的刺激和能量',
        'zh-TW': '有趣又開心的事。新的刺激和能量',
        vi: 'Điều gì đó vui và thú vị. Kích thích mới và năng lượng',
        id: 'Sesuatu yang seru dan menyenangkan. Stimulasi baru dan energi',
      }, 0),
      opt(5, 'b', {
        ko: '맛있는 음식이나 소소한 선물. 작은 행복',
        en: 'Delicious food or a small gift. Little joys',
        ja: 'おいしい食べ物や小さなプレゼント。小さな幸せ',
        'zh-CN': '美味的食物或小礼物。小小的幸福',
        'zh-TW': '美味的食物或小禮物。小小的幸福',
        vi: 'Món ngon hoặc món quà nhỏ. Những niềm vui nhỏ bé',
        id: 'Makanan enak atau hadiah kecil. Kebahagiaan kecil',
      }, 1),
      opt(5, 'c', {
        ko: '아무것도 안 해도 되는 완전한 휴식 시간',
        en: "Complete rest where you don't have to do anything",
        ja: '何もしなくていい完全な休息時間',
        'zh-CN': '什么都不用做的完全休息时间',
        'zh-TW': '什麼都不用做的完全休息時間',
        vi: 'Thời gian nghỉ ngơi hoàn toàn, không cần làm gì cả',
        id: 'Istirahat penuh tanpa harus melakukan apa pun',
      }, 2),
      opt(5, 'd', {
        ko: '진심 어린 위로. 내 편이 되어주는 사람의 한마디',
        en: 'Sincere comfort. A word from someone on your side',
        ja: '心からの慰め。味方でいてくれる人の一言',
        'zh-CN': '真诚的安慰。站在你这边的人的一句话',
        'zh-TW': '真誠的安慰。站在你這邊的人的一句話',
        vi: 'Sự an ủi chân thành. Một câu nói từ người luôn ủng hộ bạn',
        id: 'Penghiburan tulus. Satu kata dari orang yang memihakmu',
      }, 3),
    ],
  },
  {
    id: 6,
    question: L({
      ko: '오늘 내 감정 색깔에 가장 가까운 이미지는?',
      en: 'Which image is closest to the color of your emotions today?',
      ja: '今日の感情の色に最も近いイメージは？',
      'zh-CN': '哪张图片最接近你今天情绪的颜色？',
      'zh-TW': '哪張圖片最接近你今天情緒的顏色？',
      vi: 'Hình ảnh nào gần với màu cảm xúc của bạn nhất hôm nay?',
      id: 'Gambar mana yang paling mendekati warna emosimu hari ini?',
    }),
    options: [
      opt(6, 'a', {
        ko: '환하게 빛나는 노란 해바라기밭. 밝고 따뜻한 색감',
        en: 'A brightly shining yellow sunflower field. Bright and warm colors',
        ja: '明るく輝く黄色いひまわり畑。明るく温かい色合い',
        'zh-CN': '明亮闪耀的黄色向日葵花田。明亮而温暖的色调',
        'zh-TW': '明亮閃耀的黃色向日葵花田。明亮而溫暖的色調',
        vi: 'Cánh đồng hướng dương vàng rực rỡ. Tông màu sáng và ấm',
        id: 'Ladang bunga matahari kuning yang bersinar terang. Warna cerah dan hangat',
      }, 0),
      opt(6, 'b', {
        ko: '잔잔한 하늘색 호수. 평온하고 고요한 색감',
        en: 'A calm sky-blue lake. Peaceful and quiet colors',
        ja: '穏やかな空色の湖。静かで落ち着いた色合い',
        'zh-CN': '宁静的天蓝色湖泊。平和而安静的色调',
        'zh-TW': '寧靜的天藍色湖泊。平和而安靜的色調',
        vi: 'Hồ xanh da trời êm ả. Tông màu bình yên và tĩnh lặng',
        id: 'Danau biru langit yang tenang. Warna damai dan sunyi',
      }, 1),
      opt(6, 'c', {
        ko: '흐린 날 회색 구름. 무난하고 흐릿한 색감',
        en: 'Gray clouds on a cloudy day. Neutral and hazy colors',
        ja: '曇り空の灰色の雲。どっちつかずでぼんやりした色合い',
        'zh-CN': '阴天的灰色云朵。普通而朦胧的色调',
        'zh-TW': '陰天的灰色雲朵。普通而朦朧的色調',
        vi: 'Mây xám trong ngày u ám. Tông màu trung tính và mờ nhạt',
        id: 'Awan abu-abu di hari mendung. Warna netral dan kabur',
      }, 2),
      opt(6, 'd', {
        ko: '어두운 보라빛 저녁 하늘. 무겁고 가라앉는 색감',
        en: 'A dark purple evening sky. Heavy and sinking colors',
        ja: '暗い紫の夕暮れの空。重く沈む色合い',
        'zh-CN': '暗紫色的傍晚天空。沉重而下沉的色调',
        'zh-TW': '暗紫色的傍晚天空。沉重而下沉的色調',
        vi: 'Bầu trời tím tối lúc chiều tối. Tông màu nặng nề và chìm xuống',
        id: 'Langit senja ungu gelap. Warna berat dan terasa tenggelam',
      }, 3),
    ],
  },
];

export const phase3DailyMindWeatherReportResults: Phase3DailyMindWeatherReportResult[] = [
  {
    type: 'Type1',
    emoji: '☀️',
    title: L({
      ko: '오늘 마음 날씨 ☀️ 맑음',
      en: "Today's Mind Weather ☀️ Clear",
      ja: '今日の心の天気 ☀️ 晴れ',
      'zh-CN': '今日心灵天气 ☀️ 晴朗',
      'zh-TW': '今日心靈天氣 ☀️ 晴朗',
      vi: 'Thời tiết tâm trạng hôm nay ☀️ Nắng trong',
      id: 'Cuaca Hati Hari Ini ☀️ Cerah',
    }),
    shortDescription: L({
      ko: '오늘 당신의 마음 하늘엔 구름 한 점 없습니다.',
      en: 'There is not a single cloud in your mind sky today.',
      ja: '今日のあなたの心の空には、雲ひとつありません。',
      'zh-CN': '今天你的心灵天空里，没有一丝云彩。',
      'zh-TW': '今天你的心靈天空裡，沒有一絲雲彩。',
      vi: 'Hôm nay bầu trời tâm hồn bạn không có một đám mây nào.',
      id: 'Hari ini langit hatimu tidak sedikit pun berawan.',
    }),
    description: L({
      ko: '에너지가 충전돼 있고 사람들이 보고 싶고 뭔가 할 수 있을 것 같은 날입니다. 이런 날이 자주 오지 않을 수 있습니다. 오늘의 이 에너지를 최대한 누리세요.',
      en: 'You feel charged with energy, want to see people, and feel like you can do something today. Days like this may not come often. Make the most of this energy today.',
      ja: 'エネルギーに満ち、人に会いたくなり、何かができそうな日です。こういう日はそう多くないかもしれません。今日のこのエネルギーを存分に楽しんでください。',
      'zh-CN': '今天能量满满，想见人们，也觉得自己能做成些什么。这样的日子可能不会常常到来。请尽情享受今天的这份能量。',
      'zh-TW': '今天能量滿滿，想見人們，也覺得自己能做成些什麼。這樣的日子可能不會常常到來。請盡情享受今天的這份能量。',
      vi: 'Hôm nay bạn tràn đầy năng lượng, muốn gặp mọi người và cảm thấy mình có thể làm được điều gì đó. Những ngày như thế này có thể không thường xuyên. Hãy tận hưởng năng lượng này trọn vẹn.',
      id: 'Energi terisi penuh, kamu ingin bertemu orang, dan merasa bisa melakukan sesuatu hari ini. Hari seperti ini mungkin tidak sering datang. Nikmati energi ini sebaik-baiknya.',
    }),
    weatherLabel: L({
      ko: '☀️ 맑음',
      en: '☀️ Clear',
      ja: '☀️ 晴れ',
      'zh-CN': '☀️ 晴朗',
      'zh-TW': '☀️ 晴朗',
      vi: '☀️ Nắng trong',
      id: '☀️ Cerah',
    }),
    temperature: L({
      ko: '따뜻하고 화창',
      en: 'Warm and sunny',
      ja: '暖かくて晴れやか',
      'zh-CN': '温暖而明媚',
      'zh-TW': '溫暖而明媚',
      vi: 'Ấm áp và nắng đẹp',
      id: 'Hangat dan cerah',
    }),
    todayAdvice: L({
      ko: '오늘 이 에너지가 진짜입니다. 하고 싶었던 것을 오늘 하세요',
      en: 'This energy is real today. Do what you have been wanting to do.',
      ja: '今日のこのエネルギーは本物です。ずっとやりたかったことを今日やってみましょう。',
      'zh-CN': '今天的这份能量是真实的。去做你一直想做的事吧。',
      'zh-TW': '今天的這份能量是真實的。去做你一直想做的事吧。',
      vi: 'Năng lượng hôm nay là thật. Hãy làm điều bạn đã muốn làm.',
      id: 'Energi hari ini nyata. Lakukan hal yang sudah lama ingin kamu lakukan.',
    }),
    suitableThings: L({
      ko: '오래 미뤄온 일 하나 시작하기, 좋아하는 사람 연락하기, 새로운 것 도전하기',
      en: 'Start one thing you have been putting off, reach out to someone you like, try something new',
      ja: '長く先延ばしにしていたことを一つ始める、好きな人に連絡する、新しいことに挑戦する',
      'zh-CN': '开始一件拖延已久的事，联系喜欢的人，挑战新事物',
      'zh-TW': '開始一件拖延已久的事，聯繫喜歡的人，挑戰新事物',
      vi: 'Bắt đầu một việc trì hoãn lâu, liên lạc với người bạn thích, thử điều mới',
      id: 'Mulai satu hal yang ditunda lama, hubungi orang yang kamu suka, coba hal baru',
    }),
    emotionLine: L({
      ko: '지금 이 좋은 기분이 기억에 남을 하루가 되길',
      en: 'May this good feeling become a day worth remembering',
      ja: '今のこの良い気分が、思い出に残る一日になりますように',
      'zh-CN': '愿现在这份好心情，成为值得记住的一天',
      'zh-TW': '願現在這份好心情，成為值得記住的一天',
      vi: 'Mong cảm giác tốt này sẽ trở thành một ngày đáng nhớ',
      id: 'Semoga perasaan baik ini menjadi hari yang berkesan',
    }),
    tomorrowCheck: L({
      ko: '내일 날씨는 어떨지 모릅니다. 내일도 체크해보세요 ☀️',
      en: 'We do not know what tomorrow will bring. Check again tomorrow ☀️',
      ja: '明日の天気は分かりません。明日もチェックしてみてください ☀️',
      'zh-CN': '不知道明天的天气会怎样。明天也来查看吧 ☀️',
      'zh-TW': '不知道明天的天氣會怎樣。明天也來查看吧 ☀️',
      vi: 'Chưa biết ngày mai thế nào. Hãy kiểm tra lại vào ngày mai ☀️',
      id: 'Kita belum tahu cuaca besok. Cek lagi besok ☀️',
    }),
    crisisNote: null,
    shareSnippet: L({
      ko: '오늘 나의 마음 날씨: ☀️ 맑음 에너지 넘치는 날... 오늘 뭐든 할 수 있을 것 같음 → 너는 오늘 어떤 날씨야?',
      en: "Today's mind weather: ☀️ Clear — an energetic day... feels like I can do anything → What's your weather today?",
      ja: '今日の心の天気：☀️ 晴れ エネルギーあふれる日…今日は何でもできそう → あなたは今日どんな天気？',
      'zh-CN': '今天我的心灵天气：☀️ 晴朗 能量满满的一天…感觉今天什么都能做 → 你今天是什么天气？',
      'zh-TW': '今天我的心靈天氣：☀️ 晴朗 能量滿滿的一天…感覺今天什麼都能做 → 你今天是什麼天氣？',
      vi: 'Thời tiết tâm trạng hôm nay: ☀️ Nắng trong — ngày tràn năng lượng… cảm giác hôm nay làm gì cũng được → Hôm nay bạn thế nào?',
      id: 'Cuaca hati hari ini: ☀️ Cerah — hari penuh energi… rasanya hari ini bisa apa saja → Cuaca kamu hari ini bagaimana?',
    }),
  },
  {
    type: 'Type2',
    emoji: '🌤️',
    title: L({
      ko: '오늘 마음 날씨 🌤️ 구름 조금',
      en: "Today's Mind Weather 🌤️ Partly Cloudy",
      ja: '今日の心の天気 🌤️ 晴れ時々くもり',
      'zh-CN': '今日心灵天气 🌤️ 少云',
      'zh-TW': '今日心靈天氣 🌤️ 少雲',
      vi: 'Thời tiết tâm trạng hôm nay 🌤️ Ít mây',
      id: 'Cuaca Hati Hari Ini 🌤️ Sedikit Berawan',
    }),
    shortDescription: L({
      ko: '맑은 하늘에 구름이 조금 걸려있습니다. 크게 나쁘지 않은 날입니다.',
      en: 'A few clouds hang in a clear sky. Not a bad day at all.',
      ja: '晴れた空に少し雲がかかっています。大きく悪くない日です。',
      'zh-CN': '晴朗的天空上飘着几朵云。总体不算差的一天。',
      'zh-TW': '晴朗的天空上飄著幾朵雲。總體不算差的一天。',
      vi: 'Trên bầu trời trong có vài đám mây. Không phải ngày tệ.',
      id: 'Langit cerah dengan sedikit awan. Bukan hari yang buruk.',
    }),
    description: L({
      ko: '전체적으로 괜찮은데 어딘가 조금 무언가가 걸리는 날입니다. 완전히 좋지는 않지만 충분히 잘 보낼 수 있는 날입니다. 구름이 조금 있어도 날씨가 좋은 날입니다.',
      en: 'Overall you are fine, but something feels slightly off. Not perfect, yet still a day you can spend well. A little cloud does not ruin good weather.',
      ja: '全体には問題ないけれど、どこか少し引っかかる日です。完璧ではないけれど、十分うまく過ごせる日です。少し雲があっても、天気は良い日です。',
      'zh-CN': '整体还不错，但心里总有点别的东西。不算完全好，但也能过得去。有一点云，也仍然是好天气的一天。',
      'zh-TW': '整體還不錯，但心裡總有點別的東西。不算完全好，但也能過得去。有一點雲，也仍然是好天氣的一天。',
      vi: 'Nhìn chung ổn nhưng đâu đó vẫn hơi vướng. Không hoàn hảo nhưng vẫn có thể trải qua tốt. Có chút mây vẫn là ngày đẹp.',
      id: 'Secara keseluruhan cukup baik, tapi ada sesuatu yang sedikit mengganjal. Tidak sempurna, tapi cukup baik. Sedikit awan pun tetap hari yang bagus.',
    }),
    weatherLabel: L({
      ko: '🌤️ 구름 조금',
      en: '🌤️ Partly Cloudy',
      ja: '🌤️ 晴れ時々くもり',
      'zh-CN': '🌤️ 少云',
      'zh-TW': '🌤️ 少雲',
      vi: '🌤️ Ít mây',
      id: '🌤️ Sedikit Berawan',
    }),
    temperature: L({
      ko: '대체로 쾌적, 약간 변동',
      en: 'Mostly pleasant, slightly changeable',
      ja: 'おおむね快適、少し変動あり',
      'zh-CN': '大体舒适，略有波动',
      'zh-TW': '大體舒適，略有波動',
      vi: 'Khá dễ chịu, hơi thay đổi',
      id: 'Sebagian besar nyaman, sedikit berubah-ubah',
    }),
    todayAdvice: L({
      ko: '오늘은 평범한 하루가 최고입니다. 특별한 것 없어도 충분합니다',
      en: 'An ordinary day is enough today. You do not need anything special.',
      ja: '今日は普通の一日が最高です。特別なことがなくても十分です。',
      'zh-CN': '今天普通的一天就已经很好。没有特别的事也足够。',
      'zh-TW': '今天普通的一天就已經很好。沒有特別的事也足夠。',
      vi: 'Hôm nay một ngày bình thường là đủ. Không cần gì đặc biệt.',
      id: 'Hari biasa sudah cukup hari ini. Tidak perlu yang istimewa.',
    }),
    suitableThings: L({
      ko: '좋아하는 음악 틀기, 가볍게 산책하기, 맛있는 것 한 가지 먹기',
      en: 'Play music you like, take a light walk, eat one delicious thing',
      ja: '好きな音楽を流す、軽く散歩する、おいしいものを一つ食べる',
      'zh-CN': '播放喜欢的音乐，轻松散步，吃一样好吃的东西',
      'zh-TW': '播放喜歡的音樂，輕鬆散步，吃一樣好吃的東西',
      vi: 'Nghe nhạc yêu thích, đi dạo nhẹ, ăn một món ngon',
      id: 'Putar musik favorit, jalan-jalan ringan, makan satu hal enak',
    }),
    emotionLine: L({
      ko: '구름이 조금 있는 날도 충분히 좋은 날입니다',
      en: 'A day with a few clouds can still be a good day',
      ja: '少し雲がある日も、十分に良い日です',
      'zh-CN': '有一点云的日子，也仍然是足够好的日子',
      'zh-TW': '有一點雲的日子，也仍然是足夠好的日子',
      vi: 'Ngày có chút mây vẫn là ngày đủ tốt',
      id: 'Hari dengan sedikit awan tetap hari yang cukup baik',
    }),
    tomorrowCheck: L({
      ko: '내일은 더 맑을 수 있습니다 🌤️',
      en: 'Tomorrow might be clearer 🌤️',
      ja: '明日はもっと晴れるかもしれません 🌤️',
      'zh-CN': '明天可能会更晴朗 🌤️',
      'zh-TW': '明天可能會更晴朗 🌤️',
      vi: 'Ngày mai có thể trong hơn 🌤️',
      id: 'Besok mungkin lebih cerah 🌤️',
    }),
    crisisNote: null,
    shareSnippet: L({
      ko: '오늘 나의 마음 날씨: 🌤️ 구름 조금 대체로 괜찮은 날... 소소한 행복이 필요한 날 → 너는 오늘 어떤 날씨야?',
      en: "Today's mind weather: 🌤️ Partly cloudy — mostly okay... a day for small joys → What's your weather today?",
      ja: '今日の心の天気：🌤️ 晴れ時々くもり だいたい問題ない日…小さな幸せが必要な日 → あなたは今日どんな天気？',
      'zh-CN': '今天我的心灵天气：🌤️ 少云 总体还不错的一天…需要一点小幸福 → 你今天是什么天气？',
      'zh-TW': '今天我的心靈天氣：🌤️ 少雲 總體還不錯的一天…需要一點小幸福 → 你今天是什麼天氣？',
      vi: 'Thời tiết tâm trạng hôm nay: 🌤️ Ít mây — nhìn chung ổn… cần chút hạnh phúc nhỏ → Hôm nay bạn thế nào?',
      id: 'Cuaca hati hari ini: 🌤️ Sedikit berawan — cukup baik… hari yang butuh kebahagiaan kecil → Cuaca kamu hari ini bagaimana?',
    }),
  },
  {
    type: 'Type3',
    emoji: '⛅',
    title: L({
      ko: '오늘 마음 날씨 ⛅ 흐리고 맑음',
      en: "Today's Mind Weather ⛅ Cloudy and Clear",
      ja: '今日の心の天気 ⛅ くもり時々晴れ',
      'zh-CN': '今日心灵天气 ⛅ 阴晴相间',
      'zh-TW': '今日心靈天氣 ⛅ 陰晴相間',
      vi: 'Thời tiết tâm trạng hôm nay ⛅ Vừa u vừa trong',
      id: 'Cuaca Hati Hari Ini ⛅ Berawan dan Cerah',
    }),
    shortDescription: L({
      ko: '맑은 것 같기도, 흐린 것 같기도 한 날입니다. 감정이 섞여있어도 괜찮습니다.',
      en: 'It feels both clear and cloudy today. Mixed emotions are okay.',
      ja: '晴れているようでも、くもっているようでもある日です。感情が混ざっていても大丈夫です。',
      'zh-CN': '今天好像晴朗，又好像阴沉。情绪混杂也没关系。',
      'zh-TW': '今天好像晴朗，又好像陰沉。情緒混雜也沒關係。',
      vi: 'Hôm nay vừa trong vừa u ám. Cảm xúc lẫn lộn cũng không sao.',
      id: 'Hari ini terasa cerah sekaligus mendung. Emosi yang bercampur pun tidak apa-apa.',
    }),
    description: L({
      ko: '좋은 감정과 무거운 감정이 동시에 있는 날입니다. 이런 날의 감정이 사실 가장 정직한 것일 수 있습니다. 흐리고 맑음이 공존하는 것이 오늘의 진짜 날씨입니다.',
      en: 'Good and heavy emotions exist at the same time today. Feelings like these may be the most honest of all. Cloudy and clear together — that is your real weather today.',
      ja: '良い感情と重い感情が同時にある日です。こういう日の感情こそ、いちばん正直かもしれません。くもりと晴れが共存するのが、今日の本当の天気です。',
      'zh-CN': '今天好情绪和沉重情绪同时存在。这样的感受也许才是最真实的。阴晴共存，才是今天真正的天气。',
      'zh-TW': '今天好情緒和沉重情緒同時存在。這樣的感受也許才是最真實的。陰晴共存，才是今天真正的天氣。',
      vi: 'Hôm nay cả cảm xúc tốt và nặng nề cùng tồn tại. Cảm giác như vậy có thể là thật nhất. U ám và trong cùng hiện hữu — đó mới là thời tiết thật hôm nay.',
      id: 'Emosi baik dan berat ada bersamaan hari ini. Perasaan seperti ini mungkin yang paling jujur. Mendung dan cerah hidup berdampingan — itulah cuaca sebenarnya hari ini.',
    }),
    weatherLabel: L({
      ko: '⛅ 흐리고 맑음',
      en: '⛅ Cloudy and Clear',
      ja: '⛅ くもり時々晴れ',
      'zh-CN': '⛅ 阴晴相间',
      'zh-TW': '⛅ 陰晴相間',
      vi: '⛅ Vừa u vừa trong',
      id: '⛅ Berawan dan Cerah',
    }),
    temperature: L({
      ko: '약간 불안정, 변화 가능',
      en: 'Slightly unstable, may change',
      ja: '少し不安定、変化の可能性あり',
      'zh-CN': '略不稳定，可能变化',
      'zh-TW': '略不穩定，可能變化',
      vi: 'Hơi không ổn định, có thể thay đổi',
      id: 'Sedikit tidak stabil, bisa berubah',
    }),
    todayAdvice: L({
      ko: '지금 이 복잡한 감정이 이상한 게 아닙니다. 그냥 오늘이 이런 날입니다',
      en: 'These mixed feelings are not strange. Today is just this kind of day.',
      ja: '今のこの複雑な感情は変ではありません。ただ今日がそういう日なだけです。',
      'zh-CN': '现在这些复杂的情绪并不奇怪。只是今天就是这样的一天。',
      'zh-TW': '現在這些複雜的情緒並不奇怪。只是今天就是這樣的一天。',
      vi: 'Cảm xúc phức tạp này không lạ. Hôm nay chỉ đơn giản là một ngày như vậy.',
      id: 'Perasaan rumit ini tidak aneh. Hari ini memang hari seperti ini.',
    }),
    suitableThings: L({
      ko: '일기 써보기, 좋아하는 콘텐츠 보기, 억지로 무언가 하지 않기',
      en: 'Write in a journal, watch content you like, do not force yourself to do anything',
      ja: '日記を書く、好きなコンテンツを見る、無理に何かをしない',
      'zh-CN': '写写日记，看看喜欢的内容，不要勉强自己做什么',
      'zh-TW': '寫寫日記，看看喜歡的內容，不要勉強自己做什麼',
      vi: 'Viết nhật ký, xem nội dung yêu thích, đừng cố làm gì cả',
      id: 'Menulis jurnal, menonton konten favorit, jangan memaksa diri melakukan apa pun',
    }),
    emotionLine: L({
      ko: '흐리고 맑은 날도 분명 나름의 아름다움이 있습니다',
      en: 'Cloudy-and-clear days have their own beauty too',
      ja: 'くもり時々晴れの日にも、確かに独自の美しさがあります',
      'zh-CN': '阴晴相间的日子，也有它独特的美',
      'zh-TW': '陰晴相間的日子，也有它獨特的美',
      vi: 'Ngày vừa u vừa trong cũng có vẻ đẹp riêng',
      id: 'Hari berawan dan cerah juga punya keindahan tersendiri',
    }),
    tomorrowCheck: L({
      ko: '내일은 어느 쪽으로 기울지 확인해보세요 ⛅',
      en: 'See which way tomorrow leans ⛅',
      ja: '明日はどちらに傾くか確認してみてください ⛅',
      'zh-CN': '看看明天会偏向哪一边 ⛅',
      'zh-TW': '看看明天會偏向哪一邊 ⛅',
      vi: 'Xem ngày mai sẽ nghiêng về phía nào ⛅',
      id: 'Lihat besok condong ke arah mana ⛅',
    }),
    crisisNote: null,
    shareSnippet: L({
      ko: '오늘 나의 마음 날씨: ⛅ 흐리고 맑음 복잡한 감정이 섞인 날... 이런 날도 있는 거지 뭐 → 너는 오늘 어떤 날씨야?',
      en: "Today's mind weather: ⛅ Cloudy and clear — a day of mixed feelings... days like this happen → What's your weather today?",
      ja: '今日の心の天気：⛅ くもり時々晴れ 複雑な感情が混ざった日…こういう日もある → あなたは今日どんな天気？',
      'zh-CN': '今天我的心灵天气：⛅ 阴晴相间 情绪混杂的一天…这样的天也会有的 → 你今天是什么天气？',
      'zh-TW': '今天我的心靈天氣：⛅ 陰晴相間 情緒混雜的一天…這樣的天也會有的 → 你今天是什麼天氣？',
      vi: 'Thời tiết tâm trạng hôm nay: ⛅ Vừa u vừa trong — ngày cảm xúc lẫn lộn… cũng có những ngày như vậy → Hôm nay bạn thế nào?',
      id: 'Cuaca hati hari ini: ⛅ Berawan dan cerah — hari emosi bercampur… hari seperti ini memang ada → Cuaca kamu hari ini bagaimana?',
    }),
  },
  {
    type: 'Type4',
    emoji: '🌥️',
    title: L({
      ko: '오늘 마음 날씨 🌥️ 잔뜩 흐림',
      en: "Today's Mind Weather 🌥️ Overcast",
      ja: '今日の心の天気 🌥️ くもり',
      'zh-CN': '今日心灵天气 🌥️ 阴云密布',
      'zh-TW': '今日心靈天氣 🌥️ 陰雲密布',
      vi: 'Thời tiết tâm trạng hôm nay 🌥️ U ám',
      id: 'Cuaca Hati Hari Ini 🌥️ Mendung Tebal',
    }),
    shortDescription: L({
      ko: '오늘 하늘이 잔뜩 흐립니다. 해가 어디 있는지 모르겠는 날입니다.',
      en: 'The sky is fully overcast today. A day when you cannot tell where the sun is.',
      ja: '今日の空はすっかりくもっています。太陽がどこにあるのか分からない日です。',
      'zh-CN': '今天天空阴云密布。看不出太阳在哪的一天。',
      'zh-TW': '今天天空陰雲密布。看不出太陽在哪的一天。',
      vi: 'Hôm nay bầu trời u ám. Một ngày không biết mặt trời ở đâu.',
      id: 'Langit hari ini sangat mendung. Hari ketika matahari terasa jauh.',
    }),
    description: L({
      ko: '몸도 마음도 조금 무겁고 아무것도 하기 싫은 날입니다. 억지로 밝아질 필요 없습니다. 흐린 날엔 흐린 채로 있어도 됩니다. 이런 날도 지나갑니다.',
      en: 'Your body and mind feel a little heavy, and you do not want to do anything. You do not need to force brightness. On cloudy days, it is okay to stay cloudy. Days like this pass too.',
      ja: '体も心も少し重く、何もしたくない日です。無理に明るくなる必要はありません。くもった日は、くもったままでいても大丈夫です。こういう日も過ぎ去ります。',
      'zh-CN': '身体和心里都有点沉重，什么都不想做。不必勉强变明亮。阴天就保持阴天也没关系。这样的天也会过去。',
      'zh-TW': '身體和心裡都有點沉重，什麼都不想做。不必勉強變明亮。陰天就保持陰天也沒關係。這樣的天也會過去。',
      vi: 'Cơ thể và tâm trí đều hơi nặng, không muốn làm gì. Không cần cố tỏ ra vui. Ngày u ám cứ để mình u ám cũng được. Những ngày như vậy cũng sẽ qua.',
      id: 'Tubuh dan hati terasa sedikit berat, tidak ingin melakukan apa pun. Tidak perlu memaksakan diri ceria. Hari mendung boleh tetap mendung. Hari seperti ini juga akan lewat.',
    }),
    weatherLabel: L({
      ko: '🌥️ 잔뜩 흐림',
      en: '🌥️ Overcast',
      ja: '🌥️ くもり',
      'zh-CN': '🌥️ 阴云密布',
      'zh-TW': '🌥️ 陰雲密布',
      vi: '🌥️ U ám',
      id: '🌥️ Mendung Tebal',
    }),
    temperature: L({
      ko: '차갑고 무거운 느낌',
      en: 'Cold and heavy',
      ja: '冷たく重い感じ',
      'zh-CN': '冰冷而沉重',
      'zh-TW': '冰冷而沉重',
      vi: 'Lạnh và nặng nề',
      id: 'Dingin dan berat',
    }),
    todayAdvice: L({
      ko: '오늘은 조금 쉬어도 됩니다. 아무것도 안 해도 괜찮은 날입니다',
      en: 'You can rest a little today. It is okay to do nothing.',
      ja: '今日は少し休んでも大丈夫です。何もしなくてもいい日です。',
      'zh-CN': '今天可以稍微休息一下。什么都不做也没关系。',
      'zh-TW': '今天可以稍微休息一下。什麼都不做也沒關係。',
      vi: 'Hôm nay bạn có thể nghỉ một chút. Không làm gì cũng được.',
      id: 'Hari ini kamu boleh istirahat sebentar. Tidak melakukan apa pun pun tidak apa-apa.',
    }),
    suitableThings: L({
      ko: '따뜻한 음료 한 잔, 좋아하는 담요, 아무도 안 만나도 되는 저녁',
      en: 'A warm drink, your favorite blanket, an evening without seeing anyone',
      ja: '温かい飲み物一杯、好きな毛布、誰にも会わなくていい夜',
      'zh-CN': '一杯暖饮，喜欢的毯子，一个不必见任何人的夜晚',
      'zh-TW': '一杯暖飲，喜歡的毯子，一個不必見任何人的夜晚',
      vi: 'Một ly đồ uống ấm, chiếc chăn yêu thích, buổi tối không cần gặp ai',
      id: 'Satu minuman hangat, selimut favorit, malam tanpa harus bertemu siapa pun',
    }),
    emotionLine: L({
      ko: '흐린 날에 억지로 맑은 척할 필요는 없습니다',
      en: 'On cloudy days, you do not need to pretend to be sunny',
      ja: 'くもった日に無理に晴れたふりをする必要はありません',
      'zh-CN': '阴天不必勉强装晴朗',
      'zh-TW': '陰天不必勉強裝晴朗',
      vi: 'Ngày u ám không cần giả vờ nắng đẹp',
      id: 'Hari mendung tidak perlu pura-pura cerah',
    }),
    tomorrowCheck: L({
      ko: '오늘보다 나은 내일일 수 있습니다 🌥️',
      en: 'Tomorrow may be better than today 🌥️',
      ja: '今日より良い明日かもしれません 🌥️',
      'zh-CN': '明天可能会比今天更好 🌥️',
      'zh-TW': '明天可能會比今天更好 🌥️',
      vi: 'Ngày mai có thể tốt hơn hôm nay 🌥️',
      id: 'Besok mungkin lebih baik dari hari ini 🌥️',
    }),
    crisisNote: null,
    shareSnippet: L({
      ko: '오늘 나의 마음 날씨: 🌥️ 잔뜩 흐림 아무것도 하기 싫은 날... 오늘은 쉬어도 되는 날 → 너는 오늘 어떤 날씨야?',
      en: "Today's mind weather: 🌥️ Overcast — a day when nothing feels doable... okay to rest today → What's your weather today?",
      ja: '今日の心の天気：🌥️ くもり 何もしたくない日…今日は休んでもいい日 → あなたは今日どんな天気？',
      'zh-CN': '今天我的心灵天气：🌥️ 阴云密布 什么都不想做的日子…今天可以休息 → 你今天是什么天气？',
      'zh-TW': '今天我的心靈天氣：🌥️ 陰雲密布 什麼都不想做的日子…今天可以休息 → 你今天是什麼天氣？',
      vi: 'Thời tiết tâm trạng hôm nay: 🌥️ U ám — ngày không muốn làm gì… hôm nay được phép nghỉ → Hôm nay bạn thế nào?',
      id: 'Cuaca hati hari ini: 🌥️ Mendung tebal — hari tanpa semangat… hari ini boleh istirahat → Cuaca kamu hari ini bagaimana?',
    }),
  },
  {
    type: 'Type5',
    emoji: '🌧️',
    title: L({
      ko: '오늘 마음 날씨 🌧️ 비',
      en: "Today's Mind Weather 🌧️ Rain",
      ja: '今日の心の天気 🌧️ 雨',
      'zh-CN': '今日心灵天气 🌧️ 下雨',
      'zh-TW': '今日心靈天氣 🌧️ 下雨',
      vi: 'Thời tiết tâm trạng hôm nay 🌧️ Mưa',
      id: 'Cuaca Hati Hari Ini 🌧️ Hujan',
    }),
    shortDescription: L({
      ko: '오늘 비가 내립니다. 감정이 흘러내리는 날입니다.',
      en: 'It is raining today. A day when emotions pour down.',
      ja: '今日は雨が降っています。感情が流れ落ちる日です。',
      'zh-CN': '今天在下雨。情绪不断流淌的一天。',
      'zh-TW': '今天在下雨。情緒不斷流淌的一天。',
      vi: 'Hôm nay trời mưa. Một ngày cảm xúc cứ tuôn trào.',
      id: 'Hari ini hujan. Hari ketika emosi mengalir turun.',
    }),
    description: L({
      ko: '많이 힘든 날입니다. 비가 오는 날엔 비를 맞아도 되고 피해도 됩니다. 비가 내릴 때는 억지로 멈추려 하지 않아도 됩니다. 비는 언제나 그치니까요.',
      en: 'Today is a hard day. On rainy days, you can stand in the rain or stay inside. You do not have to force the rain to stop. Rain always passes.',
      ja: 'とてもつらい日です。雨の日は、雨に当たっても避けても大丈夫です。雨を無理に止めようとしなくてもいい。雨はいつか必ず止みます。',
      'zh-CN': '今天很辛苦。下雨的日子，可以淋雨，也可以躲雨。不必勉强让雨停下。雨总会停的。',
      'zh-TW': '今天很辛苦。下雨的日子，可以淋雨，也可以躲雨。不必勉強讓雨停下。雨總會停的。',
      vi: 'Hôm nay rất khó. Ngày mưa, bạn có thể đứng trong mưa hoặc tránh mưa. Không cần cố làm mưa dừng lại. Mưa rồi cũng sẽ tạnh.',
      id: 'Hari ini sangat berat. Di hari hujan, kamu boleh kehujanan atau menghindarinya. Tidak perlu memaksa hujan berhenti. Hujan selalu reda.',
    }),
    weatherLabel: L({
      ko: '🌧️ 비',
      en: '🌧️ Rain',
      ja: '🌧️ 雨',
      'zh-CN': '🌧️ 下雨',
      'zh-TW': '🌧️ 下雨',
      vi: '🌧️ Mưa',
      id: '🌧️ Hujan',
    }),
    temperature: L({
      ko: '차갑고 촉촉한 날',
      en: 'Cold and damp',
      ja: '冷たくて湿った日',
      'zh-CN': '冰冷而潮湿的一天',
      'zh-TW': '冰冷而潮濕的一天',
      vi: 'Lạnh và ẩm ướt',
      id: 'Dingin dan lembap',
    }),
    todayAdvice: L({
      ko: '오늘은 힘든 게 맞습니다. 그 감정을 인정해주세요',
      en: 'Today is hard, and that is valid. Please acknowledge that feeling.',
      ja: '今日はつらいのが正しいです。その感情を認めてあげてください。',
      'zh-CN': '今天确实很难。请承认这份感受。',
      'zh-TW': '今天確實很難。請承認這份感受。',
      vi: 'Hôm nay khó khăn là điều thật. Hãy thừa nhận cảm xúc đó.',
      id: 'Hari ini memang berat. Akui perasaan itu.',
    }),
    suitableThings: L({
      ko: '아무것도 안 하기, 울고 싶으면 울기, 신뢰하는 사람에게 연락하기',
      en: 'Do nothing, cry if you want to, reach out to someone you trust',
      ja: '何もしない、泣きたければ泣く、信頼できる人に連絡する',
      'zh-CN': '什么都不做，想哭就哭，联系信任的人',
      'zh-TW': '什麼都不做，想哭就哭，聯繫信任的人',
      vi: 'Không làm gì, khóc nếu muốn khóc, liên lạc với người bạn tin tưởng',
      id: 'Tidak melakukan apa pun, menangis jika ingin, hubungi orang yang kamu percaya',
    }),
    emotionLine: L({
      ko: '비 맞으며 걸어도 됩니다. 그래도 결국 집에 도착합니다',
      en: 'You can walk in the rain. You will still make it home.',
      ja: '雨に打たれながら歩いても大丈夫。それでも最後には家に着きます。',
      'zh-CN': '淋着雨走也没关系。最终还是会回到家。',
      'zh-TW': '淋著雨走也沒關係。最終還是會回到家。',
      vi: 'Bạn có thể đi trong mưa. Rồi bạn vẫn sẽ về đến nhà.',
      id: 'Kamu boleh berjalan di hujan. Pada akhirnya kamu tetap akan pulang.',
    }),
    tomorrowCheck: L({
      ko: '비 온 다음 날엔 공기가 맑습니다 🌧️',
      en: 'The air feels clearer after rain 🌧️',
      ja: '雨の翌日は、空気が澄みます 🌧️',
      'zh-CN': '雨后的第二天，空气会更清 🌧️',
      'zh-TW': '雨後的第二天，空氣會更清 🌧️',
      vi: 'Ngày sau mưa, không khí sẽ trong hơn 🌧️',
      id: 'Setelah hujan, udara terasa lebih segar 🌧️',
    }),
    crisisNote: L({
      ko: '💙 오늘 많이 힘들다면: 가까운 사람에게 "나 오늘 좀 힘들어"라고 말해보세요. 혼자 감당하지 않아도 됩니다',
      en: '💙 If today feels very hard: tell someone close, "I am having a hard day today." You do not have to carry it alone.',
      ja: '💙 今日とてもつらいなら：身近な人に「今日は少しつらい」と伝えてみてください。一人で抱え込まなくて大丈夫です。',
      'zh-CN': '💙 如果今天非常辛苦：试着对亲近的人说一句"我今天有点难"。你不必独自承受。',
      'zh-TW': '💙 如果今天非常辛苦：試著對親近的人說一句「我今天有點難」。你不必獨自承受。',
      vi: '💙 Nếu hôm nay quá khó: hãy nói với người thân "Hôm nay mình hơi khó khăn." Bạn không cần gánh một mình.',
      id: '💙 Jika hari ini sangat berat: katakan pada orang dekat, "Hari ini aku agak berat." Kamu tidak harus menanggung sendiri.',
    }),
    shareSnippet: L({
      ko: '오늘 나의 마음 날씨: 🌧️ 비 많이 힘든 날... 그래도 비는 언제나 그치니까 → 너는 오늘 어떤 날씨야?',
      en: "Today's mind weather: 🌧️ Rain — a very hard day... but rain always stops → What's your weather today?",
      ja: '今日の心の天気：🌧️ 雨 とてもつらい日…でも雨はいつか止む → あなたは今日どんな天気？',
      'zh-CN': '今天我的心灵天气：🌧️ 下雨 非常辛苦的一天…但雨总会停 → 你今天是什么天气？',
      'zh-TW': '今天我的心靈天氣：🌧️ 下雨 非常辛苦的一天…但雨總會停 → 你今天是什麼天氣？',
      vi: 'Thời tiết tâm trạng hôm nay: 🌧️ Mưa — ngày rất khó… nhưng mưa rồi cũng tạnh → Hôm nay bạn thế nào?',
      id: 'Cuaca hati hari ini: 🌧️ Hujan — hari sangat berat… tapi hujan selalu reda → Cuaca kamu hari ini bagaimana?',
    }),
  },
  {
    type: 'Type6',
    emoji: '⛈️',
    title: L({
      ko: '오늘 마음 날씨 ⛈️ 천둥번개',
      en: "Today's Mind Weather ⛈️ Thunderstorm",
      ja: '今日の心の天気 ⛈️ 雷雨',
      'zh-CN': '今日心灵天气 ⛈️ 雷暴',
      'zh-TW': '今日心靈天氣 ⛈️ 雷暴',
      vi: 'Thời tiết tâm trạng hôm nay ⛈️ Giông bão',
      id: 'Cuaca Hati Hari Ini ⛈️ Badai Petir',
    }),
    shortDescription: L({
      ko: '오늘은 많이 힘든 날입니다. 폭풍 속에서도 당신은 여기 있습니다.',
      en: 'Today is a very hard day. Even in the storm, you are here.',
      ja: '今日はとてもつらい日です。嵐の中でも、あなたはここにいます。',
      'zh-CN': '今天是非常辛苦的一天。即使在风暴中，你依然在这里。',
      'zh-TW': '今天是非常辛苦的一天。即使在風暴中，你依然在這裡。',
      vi: 'Hôm nay là một ngày rất khó. Dù trong cơn bão, bạn vẫn ở đây.',
      id: 'Hari ini sangat berat. Bahkan di tengah badai, kamu ada di sini.',
    }),
    description: L({
      ko: '아주 힘든 날입니다. 지금 이 감정이 영원하지 않습니다. 폭풍은 반드시 지나갑니다. 오늘 이것을 체크한 것 자체가 용기입니다.',
      en: 'This is an extremely hard day. This feeling will not last forever. The storm will pass. Checking in today itself is an act of courage.',
      ja: 'とてもつらい日です。今のこの感情は永遠ではありません。嵐は必ず過ぎ去ります。今日これをチェックしたこと自体が勇気です。',
      'zh-CN': '今天非常艰难。现在的感受不会永远持续。风暴一定会过去。今天能来查看本身就是一种勇气。',
      'zh-TW': '今天非常艱難。現在的感受不會永遠持續。風暴一定會過去。今天能來查看本身就是一種勇氣。',
      vi: 'Hôm nay cực kỳ khó khăn. Cảm xúc này sẽ không kéo dài mãi. Cơn bão chắc chắn sẽ qua. Việc kiểm tra hôm nay đã là một hành động dũng cảm.',
      id: 'Hari ini sangat berat. Perasaan ini tidak akan abadi. Badai pasti akan lewat. Mengecek hari ini saja sudah tindakan berani.',
    }),
    weatherLabel: L({
      ko: '⛈️ 천둥번개',
      en: '⛈️ Thunderstorm',
      ja: '⛈️ 雷雨',
      'zh-CN': '⛈️ 雷暴',
      'zh-TW': '⛈️ 雷暴',
      vi: '⛈️ Giông bão',
      id: '⛈️ Badai Petir',
    }),
    temperature: L({
      ko: '차갑고 거센 날',
      en: 'Cold and fierce',
      ja: '冷たく激しい日',
      'zh-CN': '冰冷而猛烈的一天',
      'zh-TW': '冰冷而猛烈的一天',
      vi: 'Lạnh và dữ dội',
      id: 'Dingin dan keras',
    }),
    todayAdvice: L({
      ko: '오늘 하루를 버텨내는 것만으로 충분합니다',
      en: 'Getting through today is enough',
      ja: '今日一日を乗り越えるだけで十分です',
      'zh-CN': '撑过今天就已经足够',
      'zh-TW': '撐過今天就已經足夠',
      vi: 'Chỉ cần vượt qua hôm nay là đủ',
      id: 'Bertahan hari ini saja sudah cukup',
    }),
    suitableThings: L({
      ko: '지금 당장 해야 할 것을 최소화하기, 믿는 사람에게 연락하기, 내일의 나에게 맡기기',
      en: 'Minimize what you must do right now, contact someone you trust, leave the rest to tomorrow',
      ja: '今すぐやることを最小限にする、信じる人に連絡する、明日の自分に任せる',
      'zh-CN': '把现在必须做的事减到最少，联系信任的人，把其余交给明天的自己',
      'zh-TW': '把現在必須做的事減到最少，聯繫信任的人，把其餘交給明天的自己',
      vi: 'Giảm tối đa việc phải làm ngay, liên lạc người tin cậy, giao phần còn lại cho ngày mai',
      id: 'Minimalkan yang harus dilakukan sekarang, hubungi orang tepercaya, serahkan sisanya ke diri besok',
    }),
    emotionLine: L({
      ko: '폭풍 속에서도 당신은 서있습니다. 그것만으로 충분합니다',
      en: 'Even in the storm, you are standing. That is enough.',
      ja: '嵐の中でも、あなたは立っています。それだけで十分です。',
      'zh-CN': '即使在风暴中，你依然站着。这就足够了。',
      'zh-TW': '即使在風暴中，你依然站著。這就足夠了。',
      vi: 'Dù trong cơn bão, bạn vẫn đang đứng vững. Chỉ vậy thôi cũng đủ.',
      id: 'Bahkan di tengah badai, kamu masih berdiri. Itu saja sudah cukup.',
    }),
    tomorrowCheck: L({
      ko: '천둥번개 후엔 반드시 맑아집니다. 내일 날씨를 확인해보세요 ⛈️→🌈',
      en: 'After a thunderstorm, the sky always clears. Check tomorrow weather ⛈️→🌈',
      ja: '雷雨の後には必ず晴れます。明日の天気を確認してみてください ⛈️→🌈',
      'zh-CN': '雷暴之后一定会放晴。明天再来看看天气 ⛈️→🌈',
      'zh-TW': '雷暴之後一定會放晴。明天再來看看天氣 ⛈️→🌈',
      vi: 'Sau giông bão trời chắc chắn sẽ trong. Hãy xem thời tiết ngày mai ⛈️→🌈',
      id: 'Setelah badai petir, langit pasti cerah. Cek cuaca besok ⛈️→🌈',
    }),
    crisisNote: L({
      ko: '💙 오늘 매우 힘들다면: 가까운 사람에게 솔직하게 털어놓거나, 정신건강 위기상담전화 1577-0199 (24시간)에 연락하는 것도 방법입니다',
      en: '💙 If today feels extremely hard: open up honestly to someone close, or call the mental health crisis hotline 1577-0199 (24 hours).',
      ja: '💙 今日がとてもつらいなら：身近な人に正直に打ち明けるか、精神保健危機相談電話 1577-0199（24時間）に連絡する方法もあります。',
      'zh-CN': '💙 如果今天极其艰难：请向亲近的人坦诚倾诉，或拨打心理健康危机咨询电话 1577-0199（24小时）。',
      'zh-TW': '💙 如果今天極其艱難：請向親近的人坦誠傾訴，或撥打心理健康危機諮詢電話 1577-0199（24小時）。',
      vi: '💙 Nếu hôm nay quá khó: hãy chia sẻ thật lòng với người thân, hoặc gọi đường dây tư vấn khủng hoảng sức khỏe tâm thần 1577-0199 (24 giờ).',
      id: '💙 Jika hari ini sangat berat: ceritakan dengan jujur pada orang dekat, atau hubungi hotline krisis kesehatan mental 1577-0199 (24 jam).',
    }),
    shareSnippet: L({
      ko: '오늘 나의 마음 날씨: ⛈️ 천둥번개 오늘 하루 버텨내는 것만으로 충분한 날... 내일은 맑아지기를 → 너는 오늘 어떤 날씨야?',
      en: "Today's mind weather: ⛈️ Thunderstorm — a day when getting through is enough... hoping for clear skies tomorrow → What's your weather today?",
      ja: '今日の心の天気：⛈️ 雷雨 今日一日を乗り越えるだけで十分な日…明日は晴れますように → あなたは今日どんな天気？',
      'zh-CN': '今天我的心灵天气：⛈️ 雷暴 撑过今天就已足够的一天…希望明天放晴 → 你今天是什么天气？',
      'zh-TW': '今天我的心靈天氣：⛈️ 雷暴 撐過今天就已足夠的一天…希望明天放晴 → 你今天是什麼天氣？',
      vi: 'Thời tiết tâm trạng hôm nay: ⛈️ Giông bão — ngày chỉ cần vượt qua là đủ… mong ngày mai nắng → Hôm nay bạn thế nào?',
      id: 'Cuaca hati hari ini: ⛈️ Badai petir — hari cukup bertahan saja… semoga besok cerah → Cuaca kamu hari ini bagaimana?',
    }),
  },
];

/** localStorage history helpers */
export const MIND_WEATHER_HISTORY_KEY = 'phase3-daily-mind-weather-report:history';

export type MindWeatherHistoryEntry = { date: string; type: string; emoji: string };

export function getLocalDateKey(d = new Date()): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

export function loadMindWeatherHistory(): MindWeatherHistoryEntry[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(MIND_WEATHER_HISTORY_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveMindWeatherResult(type: string, emoji: string): MindWeatherHistoryEntry[] {
  const today = getLocalDateKey();
  const prev = loadMindWeatherHistory().filter((e) => e.date !== today);
  const next = [...prev, { date: today, type, emoji }];
  next.sort((a, b) => a.date.localeCompare(b.date));
  try {
    localStorage.setItem(MIND_WEATHER_HISTORY_KEY, JSON.stringify(next));
  } catch {
    /* ignore quota */
  }
  return next;
}

export function computeStreak(history: MindWeatherHistoryEntry[], fromDate = new Date()): number {
  const set = new Set(history.map((h) => h.date));
  let streak = 0;
  const cursor = new Date(fromDate.getFullYear(), fromDate.getMonth(), fromDate.getDate());
  while (true) {
    const key = getLocalDateKey(cursor);
    if (!set.has(key)) break;
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

const STREAK_BADGE_30: ML = {
  ko: '🏆 한 달 연속! 당신은 자신을 가장 잘 아는 사람입니다',
  en: '🏆 One full month! You know yourself better than anyone',
  ja: '🏆 1か月連続！あなたは自分をいちばんよく知る人です',
  'zh-CN': '🏆 连续一个月！你最了解自己的人',
  'zh-TW': '🏆 連續一個月！你最了解自己的人',
  vi: '🏆 Một tháng liên tiếp! Bạn là người hiểu mình nhất',
  id: '🏆 Satu bulan penuh! Kamu yang paling mengenal dirimu',
};

const STREAK_BADGE_14: ML = {
  ko: '🌳 2주 연속! 마음 날씨 기록자가 됐습니다',
  en: '🌳 Two weeks straight! You are a mind weather keeper now',
  ja: '🌳 2週間連続！心の天気記録者になりました',
  'zh-CN': '🌳 连续两周！你已成为心灵天气记录者',
  'zh-TW': '🌳 連續兩週！你已成為心靈天氣記錄者',
  vi: '🌳 Hai tuần liên tiếp! Bạn đã trở thành người ghi lại thời tiết tâm trạng',
  id: '🌳 Dua minggu berturut-turut! Kamu sudah jadi pencatat cuaca hati',
};

const STREAK_BADGE_7: ML = {
  ko: '🌿 7일 연속! 일주일의 마음 날씨가 쌓였습니다',
  en: '🌿 7 days in a row! A week of mind weather has built up',
  ja: '🌿 7日連続！1週間分の心の天気が積み重なりました',
  'zh-CN': '🌿 连续7天！一周的心灵天气已经积累',
  'zh-TW': '🌿 連續7天！一週的心靈天氣已經累積',
  vi: '🌿 7 ngày liên tiếp! Một tuần thời tiết tâm trạng đã được ghi lại',
  id: '🌿 7 hari berturut-turut! Satu minggu cuaca hati sudah terkumpul',
};

const STREAK_BADGE_3: ML = {
  ko: '🌱 3일 연속 마음 날씨 체크! 나를 돌보고 있습니다',
  en: '🌱 3 days of mind weather checks! You are taking care of yourself',
  ja: '🌱 3日連続で心の天気チェック！自分を大切にしています',
  'zh-CN': '🌱 连续3天检查心灵天气！你正在照顾自己',
  'zh-TW': '🌱 連續3天檢查心靈天氣！你正在照顧自己',
  vi: '🌱 3 ngày liên tiếp kiểm tra thời tiết tâm trạng! Bạn đang chăm sóc bản thân',
  id: '🌱 3 hari cek cuaca hati berturut-turut! Kamu sedang merawat diri',
};

const YESTERDAY_CLEARER: ML = {
  ko: '어제보다 오늘 마음이 조금 더 맑아졌네요 ☀️',
  en: 'Your mind feels a little clearer today than yesterday ☀️',
  ja: '昨日より今日、心が少し晴れましたね ☀️',
  'zh-CN': '比起昨天，今天的心情稍微晴朗了一些 ☀️',
  'zh-TW': '比起昨天，今天的心情稍微晴朗了一些 ☀️',
  vi: 'So với hôm qua, tâm trạng hôm nay trong hơn một chút ☀️',
  id: 'Dibanding kemarin, hatimu hari ini sedikit lebih cerah ☀️',
};

const YESTERDAY_HEAVIER: ML = {
  ko: '어제보다 오늘 조금 힘든 날인가요 🌥️ 오늘 쉬어도 됩니다',
  en: 'Is today a little harder than yesterday? 🌥️ It is okay to rest today',
  ja: '昨日より今日は少しつらい日ですか 🌥️ 今日は休んでも大丈夫です',
  'zh-CN': '今天是否比昨天更辛苦一些？🌥️ 今天可以休息',
  'zh-TW': '今天是否比昨天更辛苦一些？🌥️ 今天可以休息',
  vi: 'Hôm nay có hơi khó hơn hôm qua không? 🌥️ Hôm nay được phép nghỉ',
  id: 'Apakah hari ini sedikit lebih berat dari kemarin? 🌥️ Hari ini boleh istirahat',
};

const YESTERDAY_SAME: ML = {
  ko: '오늘도 {emoji}. 비슷한 감정이 이어지고 있네요',
  en: 'Today is {emoji} too. Similar feelings are continuing',
  ja: '今日も{emoji}。似た感情が続いていますね',
  'zh-CN': '今天也是{emoji}。相似的情绪还在延续',
  'zh-TW': '今天也是{emoji}。相似的情緒還在延續',
  vi: 'Hôm nay cũng {emoji}. Cảm xúc tương tự vẫn đang tiếp diễn',
  id: 'Hari ini juga {emoji}. Perasaan serupa masih berlanjut',
};

const MONTH_PATTERN_EMPTY: ML = {
  ko: '이번 달 나의 마음 날씨 패턴을 한눈에 볼 수 있습니다.',
  en: 'You can see your mind weather pattern for this month at a glance.',
  ja: '今月の心の天気パターンを一目で見られます。',
  'zh-CN': '可以一眼看到本月我的心灵天气模式。',
  'zh-TW': '可以一眼看到本月我的心靈天氣模式。',
  vi: 'Bạn có thể nhìn thấy mô hình thời tiết tâm trạng của tháng này trong nháy mắt.',
  id: 'Kamu bisa melihat pola cuaca hatimu bulan ini sekilas.',
};

const MONTH_PATTERN_SUNNY: ML = {
  ko: '이번 달은 전반적으로 좋은 날이 많았네요',
  en: 'This month had many good days overall',
  ja: '今月は全体的に良い日が多かったですね',
  'zh-CN': '这个月整体来说好日子很多',
  'zh-TW': '這個月整體來說好日子很多',
  vi: 'Tháng này nhìn chung có nhiều ngày tốt',
  id: 'Bulan ini secara keseluruhan banyak hari yang baik',
};

const MONTH_PATTERN_RAINY: ML = {
  ko: '이번 달 많이 힘들었군요. 다음 달은 더 맑기를',
  en: 'This month was very hard. May next month be clearer',
  ja: '今月はとてもつらかったですね。来月はもっと晴れますように',
  'zh-CN': '这个月很辛苦。希望下个月更晴朗',
  'zh-TW': '這個月很辛苦。希望下個月更晴朗',
  vi: 'Tháng này bạn đã trải qua nhiều điều khó khăn. Mong tháng sau trong hơn',
  id: 'Bulan ini sangat berat. Semoga bulan depan lebih cerah',
};

export function getStreakBadgeMessage(streak: number, locale = 'ko'): string | null {
  if (streak >= 30) return pick(STREAK_BADGE_30, locale);
  if (streak >= 14) return pick(STREAK_BADGE_14, locale);
  if (streak >= 7) return pick(STREAK_BADGE_7, locale);
  if (streak >= 3) return pick(STREAK_BADGE_3, locale);
  return null;
}

export function getYesterdayCompareMessage(
  history: MindWeatherHistoryEntry[],
  todayType: string,
  todayEmoji: string,
  locale = 'ko'
): string | null {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yKey = getLocalDateKey(yesterday);
  const yEntry = history.find((h) => h.date === yKey);
  if (!yEntry) return null;

  const rank = (t: string) => {
    const n = Number(t.replace('Type', ''));
    return Number.isFinite(n) ? n : 99;
  };
  const todayR = rank(todayType);
  const yR = rank(yEntry.type);
  if (todayR < yR) return pick(YESTERDAY_CLEARER, locale);
  if (todayR > yR) return pick(YESTERDAY_HEAVIER, locale);
  return pick(YESTERDAY_SAME, locale).replace('{emoji}', todayEmoji);
}

export function getMonthCalendarDays(
  history: MindWeatherHistoryEntry[],
  year: number,
  monthIndex: number
): { day: number; emoji: string | null; dateKey: string }[] {
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const map = new Map(history.map((h) => [h.date, h.emoji]));
  const out: { day: number; emoji: string | null; dateKey: string }[] = [];
  for (let d = 1; d <= daysInMonth; d++) {
    const dateKey = `${year}-${String(monthIndex + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
    out.push({ day: d, emoji: map.get(dateKey) ?? null, dateKey });
  }
  return out;
}

export function getMonthPatternMessage(
  history: MindWeatherHistoryEntry[],
  year: number,
  monthIndex: number,
  locale = 'ko'
): string {
  const prefix = `${year}-${String(monthIndex + 1).padStart(2, '0')}-`;
  const monthEntries = history.filter((h) => h.date.startsWith(prefix));
  if (monthEntries.length === 0) return pick(MONTH_PATTERN_EMPTY, locale);
  const sunny = monthEntries.filter((h) => h.type === 'Type1' || h.type === 'Type2').length;
  const rainy = monthEntries.filter((h) => h.type === 'Type5' || h.type === 'Type6').length;
  if (sunny >= rainy && sunny > 0) return pick(MONTH_PATTERN_SUNNY, locale);
  if (rainy > sunny) return pick(MONTH_PATTERN_RAINY, locale);
  return pick(MONTH_PATTERN_EMPTY, locale);
}
