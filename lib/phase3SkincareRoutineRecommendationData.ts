/** 내 피부타입 맞춤 스킨케어 루틴 — 12문항 4지선다, A=0 B=1 C=2 D=3, 총점 0~36. 7개 언어. */

import { M } from './multilangM';
import type { Phase3SkincareRoutineRecommendationQuestion } from './phase3SkincareRoutineRecommendationTypes';

export {
  calculatePhase3SkincareRoutineRecommendationResult,
  type Phase3SkincareRoutineRecommendationQuestion,
  type Phase3SkincareRoutineRecommendationResult,
} from './phase3SkincareRoutineRecommendationTypes';

export { phase3SkincareRoutineRecommendationResults } from './phase3SkincareRoutineRecommendationResultsData';

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

export const phase3SkincareRoutineRecommendationQuestions: Phase3SkincareRoutineRecommendationQuestion[] = [
  {
    id: 1,
    question: M(
      '세안 후 아무것도 바르지 않으면 10~15분 후 피부는?',
      'If you apply nothing after cleansing, how does your skin feel 10–15 minutes later?',
      '洗顔後、何も塗らず10〜15分後の肌は？',
      '洁面后先不上任何护肤品，10～15 分钟后皮肤状态如何？',
      '洗完臉先不上任何保養品，10～15 分鐘後肌膚狀態如何？',
      'Sau khi rửa mặt, không thoa gì thêm, 10–15 phút sau da bạn ra sao?',
      'Setelah cuci muka tanpa produk, kondisi kulit 10–15 menit kemudian?'
    ),
    options: [
      opt(
        0,
        '촉촉하고 탄탄하다. 별로 당기지 않는다',
        'Feels moist and firm; little tightness.',
        'しっとりハリがあり、つっぱり感はあまりない。',
        '水润有弹性，不太紧绷。',
        '水潤有彈性，不太緊繃。',
        'Ẩm, căng, hầu như không căng.',
        'Lembap dan kencang; hampir tidak terasa kering.'
      ),
      opt(
        1,
        '전체적으로 당기고 건조하다. 빨리 뭔가 발라야 할 것 같다',
        'Overall tight and dry; feels like you need to apply something soon.',
        '全体的につっぱり乾燥。早く何か塗りたい。',
        '整体偏干、紧绷，想尽快涂点什么。',
        '整體偏乾、緊繃，想快點塗點東西。',
        'Khô và căng toàn mặt; muốn thoa gì đó ngay.',
        'Kering dan tertarik di seluruh wajah; ingin segera pakai sesuatu.'
      ),
      opt(
        2,
        'T존은 번들거리고 볼은 당기는 느낌이 든다',
        'T-zone looks shiny; cheeks feel tight.',
        'Tゾーンはテカり、頬はつっぱる感じ。',
        'T 区出油，两颊紧绷。',
        'T 字出油，兩頰緊繃。',
        'Vùng chữ T bóng; má hơi căng.',
        'Area T mengilap; pipi terasa ketarik.'
      ),
      opt(
        3,
        '전체적으로 번들거리고 기름진 느낌이 든다',
        'Overall shiny and oily.',
        '全体的にテカって脂っぽい感じ。',
        '整体偏油、发亮。',
        '整體偏油、發亮。',
        'Bóng dầu toàn mặt.',
        'Berminyak dan mengilap di seluruh wajah.'
      ),
    ],
  },
  {
    id: 2,
    question: M(
      '하루 중 피부가 가장 신경 쓰이는 순간은?',
      'When during the day does your skin bother you most?',
      '一日のうち、肌が一番気になるのはいつ？',
      '一天当中，皮肤最让你在意的是什么时候？',
      '一天當中，皮膚最讓你在意的是什麼時候？',
      'Trong ngày, lúc nào da khiến bạn bận tâm nhất?',
      'Kapan dalam sehari kulit paling mengganggu?'
    ),
    options: [
      opt(0, '특별히 신경 쓰이는 순간이 별로 없다', 'Nothing in particular stands out.', '特に気になる時間はあまりない。', '没有特别在意的时候。', '沒有特別在意的時候。', 'Không có lúc đặc biệt bận tâm.', 'Tidak ada momen yang mengganggu.'),
      opt(
        1,
        '오후에 피부가 당기고 잔주름이 도드라져 보일 때',
        'Afternoon: skin feels tight and fine lines look more visible.',
        '午後、肌がつっぱり小じわが目立つとき。',
        '下午皮肤紧绷、细纹更明显。',
        '下午皮膚緊繃、細紋更明顯。',
        'Chiều da căng, nếp nhăn mảnh nổi rõ.',
        'Sore kulit tertarik, garis halus terlihat.'
      ),
      opt(
        2,
        '점심 이후 T존만 번들거릴 때',
        'After lunch, only the T-zone gets shiny.',
        '昼食後、Tゾーンだけテカる。',
        '午饭后只有 T 区出油。',
        '午飯後只有 T 字出油。',
        'Sau trưa chỉ vùng chữ T bóng.',
        'Setelah makan siang hanya area T yang mengilap.'
      ),
      opt(
        3,
        '아침에 이미 번들거리고 모공이 도드라져 보일 때',
        'Already shiny in the morning; pores look obvious.',
        '朝からテカって毛穴が目立つ。',
        '早上就已经出油、毛孔明显。',
        '早上就已經出油、毛孔明顯。',
        'Sáng đã bóng, lỗ chân lông lộ rõ.',
        'Pagi sudah berminyak, pori terlihat jelas.'
      ),
    ],
  },
  {
    id: 3,
    question: M(
      '가장 주된 피부 고민은?',
      'What is your main skin concern?',
      'いちばんの肌悩みは？',
      '你最主要的皮肤困扰是？',
      '你最主要的皮膚困擾是？',
      'Lo lắng chính về da là gì?',
      'Kekhawatiran kulit utama apa?'
    ),
    options: [
      opt(
        0,
        '칙칙한 피부톤, 모공, 잡티',
        'Dull tone, pores, spots',
        'くすみ、毛穴、シミ・そばかす',
        '暗沉、毛孔、斑点',
        '暗沉、毛孔、斑點',
        'Tông xỉn, lỗ chân lông, đốm',
        'Kulit kusam, pori, noda'
      ),
      opt(
        1,
        '건조함, 각질, 탄력 저하',
        'Dryness, flakes, loss of firmness',
        '乾燥、角質、ハリ不足',
        '干燥、角质、松弛',
        '乾燥、角質、鬆弛',
        'Khô, bong tróc, mất độ săn',
        'Kering, mengelupas, kendur'
      ),
      opt(
        2,
        'T존 번들거림, 모공, 건조한 볼',
        'Shiny T-zone, pores, dry cheeks',
        'Tゾーンテカリ、毛穴、頬の乾燥',
        'T 区油、毛孔、两颊干',
        'T 字油、毛孔、兩頰乾',
        'Chữ T dầu, lỗ chân lông, má khô',
        'Area T berminyak, pori, pipi kering'
      ),
      opt(
        3,
        '번들거림, 여드름, 넓은 모공',
        'Oiliness, breakouts, large pores',
        'テカリ、ニキビ、開いた毛穴',
        '出油、痘痘、毛孔粗大',
        '出油、痘痘、毛孔粗大',
        'Dầu, mụn, lỗ chân lông to',
        'Berminyak, jerawat, pori besar'
      ),
    ],
  },
  {
    id: 4,
    question: M(
      '현재 사용 중인 선크림 질감은?',
      'What texture is your current sunscreen?',
      '今使っている日焼け止めの質感は？',
      '你现在用的防晒霜是什么质地？',
      '你現在用的防曬是什麼質地？',
      'Kem chống nắng bạn đang dùng có kết cảm nào?',
      'Tekstur sunscreen yang kamu pakai sekarang?'
    ),
    options: [
      opt(
        0,
        '가벼운 수분형 또는 밀크 타입',
        'Light watery or milk type',
        '軽い水分タイプやミルクタイプ',
        '清爽水感或乳液型',
        '清爽水感或乳液型',
        'Dạng nước hoặc sữa nhẹ',
        'Ringan seperti air atau susu'
      ),
      opt(
        1,
        '촉촉하고 영양감 있는 크림 타입',
        'Rich, nourishing cream type',
        'しっとり栄養感のあるクリームタイプ',
        '滋润、偏乳霜质地',
        '滋潤、偏乳霜質地',
        'Kem dưỡng ẩm, bổ sung',
        'Krim lembap dan bergizi'
      ),
      opt(
        2,
        '가볍지만 보습도 되는 로션 타입',
        'Light lotion that still moisturizes',
        '軽いのに保湿できるローションタイプ',
        '清爽但有一定保湿的乳液型',
        '清爽但有一定保濕的乳液型',
        'Lotion nhẹ vẫn đủ ẩm',
        'Lotion ringan tapi tetap lembap'
      ),
      opt(
        3,
        '오일프리 또는 젤 타입',
        'Oil-free or gel type',
        'オイルフリーやジェルタイプ',
        '无油或啫喱型',
        '無油或凝膠型',
        'Không dầu hoặc gel',
        'Bebas minyak atau gel'
      ),
    ],
  },
  {
    id: 5,
    question: M(
      '계절이 바뀔 때 피부 변화는?',
      'How does your skin change when seasons shift?',
      '季節の変わり目、肌の変化は？',
      '换季时皮肤会怎样？',
      '換季時皮膚會怎樣？',
      'Khi đổi mùa da bạn thay đổi thế nào?',
      'Saat musim berganti, kulitmu berubah bagaimana?'
    ),
    options: [
      opt(
        0,
        '크게 변하지 않는다. 사계절 비슷하다',
        'Not much change; fairly stable year-round.',
        'あまり変わらない。通年似たような状態。',
        '变化不大，四季差不多。',
        '變化不大，四季差不多。',
        'Ít thay đổi; ổn quanh năm.',
        'Tidak banyak berubah sepanjang tahun.'
      ),
      opt(
        1,
        '겨울에 특히 더 건조하고 각질이 심해진다',
        'Winter: extra dry with more visible flakes.',
        '冬は特に乾燥し角層が目立つ。',
        '冬天特别干、起皮明显。',
        '冬天特別乾、起皮明顯。',
        'Mùa đông khô hơn, bong tróc rõ.',
        'Musim dingin sangat kering dan mengelupas.'
      ),
      opt(
        2,
        '여름엔 기름지고 겨울엔 건조해져서 계절마다 다른 제품을 써야 한다',
        'Oily in summer, dry in winter—need different products by season.',
        '夏は脂っぽく冬は乾くので季節で製品を変える。',
        '夏油冬干，要按季换产品。',
        '夏油冬乾，要按季換產品。',
        'Hè dầu, đông khô—phải đổi sản phẩm.',
        'Panas berminyak, dingin kering—perlu produk berbeda.'
      ),
      opt(
        3,
        '여름이 특히 힘들다. 땀과 피지가 넘쳐서 트러블이 생긴다',
        'Summer is hardest—sweat and sebum cause breakouts.',
        '夏が一番つらい。汗・皮脂でトラブルが出やすい。',
        '夏天最难，汗和油容易闷痘。',
        '夏天最難，汗和油容易悶痘。',
        'Mùa hè khó nhất—mồ hôi và dầu gây mụn.',
        'Musim panas paling berat—keringat dan minyak memicu jerawat.'
      ),
    ],
  },
  {
    id: 6,
    question: M(
      '메이크업을 하면 주로 일어나는 현상은?',
      'When you wear makeup, what usually happens?',
      'メイクをすると、よく起きることは？',
      '化妆时通常会出现什么情况？',
      '化妝時通常會出現什麼情況？',
      'Khi trang điểm, điều gì thường xảy ra?',
      'Saat pakai makeup, biasanya apa yang terjadi?'
    ),
    options: [
      opt(
        0,
        '메이크업이 잘 밀착되고 무너짐이 적은 편이다',
        'Makeup adheres well and rarely breaks down.',
        'メイクのりが良く、崩れにくい。',
        '妆面服帖，不太容易花。',
        '妝面服貼，不太容易花。',
        'Trang điểm bám tốt, ít trôi.',
        'Makeup menempel baik, jarang luntur.'
      ),
      opt(
        1,
        '파운데이션이 들뜨거나 각질이 부각되는 경우가 있다',
        'Foundation can lift or highlight dry flakes.',
        'ファンデが浮いたり角質が目立つことがある。',
        '粉底起皮或显干纹角质。',
        '粉底起皮或顯乾紋角質。',
        'Kem nền bị vón hoặc lộ vảy khô.',
        'Foundation mengangkat atau terlihat mengelupas.'
      ),
      opt(
        2,
        'T존은 무너지고 볼은 들뜨는 두 가지 문제가 동시에 생긴다',
        'T-zone breaks down while cheeks look cakey/dry.',
        'Tゾーンは崩れ、頬は浮く——両方起きる。',
        'T 区脱妆、两颊又干浮粉。',
        'T 字脫妝、兩頰又乾浮粉。',
        'Chữ T trôi, má khô bột.',
        'Area T luntur, pipi mengering mengapung.'
      ),
      opt(
        3,
        '몇 시간 지나면 번들거리고 화장이 쉽게 무너진다',
        'After a few hours it gets shiny and makeup slips off.',
        '数時間でテカってメイクが崩れやすい。',
        '几小时后出油，妆容易花。',
        '幾小時後出油，妝容易花。',
        'Vài giờ sau bóng dầu, trang dễ trôi.',
        'Beberapa jam kemudian berminyak dan mudah luntur.'
      ),
    ],
  },
  {
    id: 7,
    question: M(
      '스킨케어 제품 고를 때 가장 중요하게 보는 것은?',
      'When choosing skincare, what matters most to you?',
      'スキンケアを選ぶとき、いちばん重視するのは？',
      '选护肤品时你最看重什么？',
      '選保養品時你最看重什麼？',
      'Khi chọn skincare, bạn quan tâm nhất điều gì?',
      'Saat pilih skincare, yang paling penting?'
    ),
    options: [
      opt(
        0,
        '피부톤 개선, 미백, 광채 효과',
        'Tone correction, brightening, glow',
        'トーンアップ、美白、ツヤ',
        '提亮、美白、光泽',
        '提亮、美白、光澤',
        'Sáng da, dưỡng sáng, bóng khỏe',
        'Meratakan tone, cerah, glowing'
      ),
      opt(
        1,
        '보습력, 영양 공급, 탄력 개선',
        'Hydration, nourishment, firmness',
        '保湿、栄養、ハリ',
        '保湿、滋养、紧致',
        '保濕、滋養、緊緻',
        'Ẩm, dinh dưỡng, săn chắc',
        'Kelembapan, nutrisi, kencang'
      ),
      opt(
        2,
        '수분과 유분 밸런스 조절',
        'Balancing water and oil',
        '水分と油分のバランス',
        '水油平衡',
        '水油平衡',
        'Cân bằng ẩm và dầu',
        'Menyeimbangkan air dan minyak'
      ),
      opt(
        3,
        '피지 조절, 모공 케어, 여드름 예방',
        'Oil control, pore care, acne prevention',
        '皮脂コントロール、毛穴、ニキビ予防',
        '控油、毛孔、祛痘预防',
        '控油、毛孔、祛痘預防',
        'Kiểm soát dầu, lỗ chân lông, ngừa mụn',
        'Kontrol minyak, pori, cegah jerawat'
      ),
    ],
  },
  {
    id: 8,
    question: M(
      '자고 일어난 아침 피부 상태는?',
      'How is your skin when you wake up?',
      '朝起きたときの肌の状態は？',
      '早上起床时皮肤状态如何？',
      '早上起床時皮膚狀態如何？',
      'Sáng ngủ dậy da bạn thế nào?',
      'Saat bangun tidur, kondisi kulit bagaimana?'
    ),
    options: [
      opt(
        0,
        '전날 스킨케어 덕분에 촉촉하고 맑다',
        'Feels hydrated and clear thanks to last night’s routine.',
        '前夜のケアのおかげでしっとり澄んでいる。',
        '前一晚保养后水润清透。',
        '前一晚保養後水潤清透。',
        'Nhờ routine tối hôm trước, da ẩm và trong.',
        'Berkat perawatan semalam, lembap dan cerah.'
      ),
      opt(
        1,
        '여전히 건조하거나 당기는 느낌이 남아있다',
        'Still dry or tight.',
        'まだ乾燥やつっぱりが残る。',
        '还是干、紧绷。',
        '還是乾、緊繃。',
        'Vẫn khô hoặc căng.',
        'Masih kering atau tertarik.'
      ),
      opt(
        2,
        'T존은 기름지고 볼은 건조한 복합적인 상태',
        'Combination: oily T-zone, dry cheeks.',
        'Tゾーンは脂っぽく頬は乾く混合肌っぽい。',
        '混合：T 区油、两颊干。',
        '混合：T 字油、兩頰乾。',
        'Hỗn hợp: chữ T dầu, má khô.',
        'Kombinasi: area T berminyak, pipi kering.'
      ),
      opt(
        3,
        '얼굴 전체가 번들거리고 베개에 기름이 묻을 정도다',
        'Whole face is shiny; oil transfers to the pillow.',
        '顔全体にテカリ、枕に脂がつくほど。',
        '全脸油，枕头上都沾油。',
        '全臉油，枕頭上都沾油。',
        'Cả mặt bóng dầu, dính cả gối.',
        'Seluruh wajah berminyak, sampai bantal ikut berminyak.'
      ),
    ],
  },
  {
    id: 9,
    question: M(
      '스킨케어 루틴에 쏟는 평균 시간은?',
      'How long do you usually spend on skincare?',
      'スキンケアにかける平均時間は？',
      '护肤流程平均花多长时间？',
      '保養流程平均花多長時間？',
      'Trung bình bạn dành bao lâu cho skincare?',
      'Biasanya berapa lama untuk rutinitas skincare?'
    ),
    options: [
      opt(
        0,
        '5~10분 이내. 간단하게 끝낸다',
        'About 5–10 minutes; keep it simple.',
        '5〜10分以内。手早く済ませる。',
        '5～10 分钟，简单搞定。',
        '5～10 分鐘，簡單搞定。',
        'Khoảng 5–10 phút; nhanh gọn.',
        'Sekitar 5–10 menit; simpel.'
      ),
      opt(
        1,
        '10~20분. 꼼꼼하게 레이어링한다',
        'About 10–20 minutes; careful layering.',
        '10〜20分。丁寧にレイヤーする。',
        '10～20 分钟，层层叠加。',
        '10～20 分鐘，層層疊加。',
        'Khoảng 10–20 phút; layering kỹ.',
        'Sekitar 10–20 menit; layering rapi.'
      ),
      opt(
        2,
        '7~15분. T존과 볼을 다르게 관리한다',
        'About 7–15 minutes; different care for T-zone vs cheeks.',
        '7〜15分。Tゾーンと頬を分けてケア。',
        '7～15 分钟，T 区和脸颊分开护理。',
        '7～15 分鐘，T 字和臉頰分開護理。',
        '7–15 phút; chăm chữ T và má khác nhau.',
        '7–15 menit; area T dan pipi beda produk.'
      ),
      opt(
        3,
        '5분 이내. 최대한 가볍고 빠르게 한다',
        'Under 5 minutes; as light and fast as possible.',
        '5分以内。できるだけ軽く速く。',
        '5 分钟内，越快越轻薄越好。',
        '5 分鐘內，越快越輕薄越好。',
        'Dưới 5 phút; càng nhẹ càng tốt.',
        'Di bawah 5 menit; seringan mungkin.'
      ),
    ],
  },
  {
    id: 10,
    question: M(
      '외출 후 귀가했을 때 피부 상태는?',
      'After being out, how does your skin feel when you get home?',
      '外出から帰宅したとき、肌の状態は？',
      '外出回家后皮肤状态如何？',
      '外出回家後皮膚狀態如何？',
      'Sau khi đi ra ngoài về nhà, da ra sao?',
      'Setelah keluar dan pulang, kondisi kulit bagaimana?'
    ),
    options: [
      opt(
        0,
        '약간의 피로감은 있지만 큰 문제 없다',
        'A bit tired-looking but nothing major.',
        '少し疲れて見えるが大きな問題はない。',
        '有点疲态，但没有大问题。',
        '有點疲態，但沒有大問題。',
        'Hơi mệt nhưng không nghiêm trọng.',
        'Sedikit lelah tapi tidak parah.'
      ),
      opt(
        1,
        '많이 당기고 지쳐 보인다. 빨리 보습이 필요하다',
        'Very tight and tired; needs moisture ASAP.',
        'かなりつっぱり疲れて見える。すぐ保湿が必要。',
        '很干、很疲，急需补水。',
        '很乾、很疲，急需補水。',
        'Rất khô và mệt; cần cấp ẩm ngay.',
        'Sangat kering dan lelah; butuh lembap segera.'
      ),
      opt(
        2,
        'T존은 기름지고 볼은 탄력이 없어 보인다',
        'T-zone oily; cheeks look less firm.',
        'Tゾーンは脂っぽく頬のハリがないように見える。',
        'T 区油，两颊松弛没弹性。',
        'T 字油，兩頰鬆弛沒彈性。',
        'Chữ T dầu; má mất độ săn.',
        'Area T berminyak; pipi terlihat kurang kencang.'
      ),
      opt(
        3,
        '피지와 땀이 뒤섞여 번들거리고 트러블이 올라오기도 한다',
        'Sweat and sebum mix; shiny and prone to flare-ups.',
        '汗と皮脂が混ざりテカってトラブルも出やすい。',
        '汗油混合发亮，还容易冒痘敏感。',
        '汗油混合發亮，還容易冒痘敏感。',
        'Mồ hôi và dầu trộn; bóng và dễ kích ứng/mụn.',
        'Keringat dan minyak bercampur; mengilap dan mudah iritasi.'
      ),
    ],
  },
  {
    id: 11,
    question: M(
      '지금 가장 끌리는 스킨케어 질감은?',
      'Which skincare texture appeals to you most right now?',
      '今いちばん惹かれるスキンケアの質感は？',
      '现在最吸引你的护肤品质地是？',
      '現在最吸引你的保養品質地是？',
      'Hiện tại bạn thích kết cảm skincare nào nhất?',
      'Tekstur skincare mana yang paling menarik sekarang?'
    ),
    options: [
      opt(
        0,
        '가볍고 산뜻한 수분 세럼 또는 에센스',
        'Light, fresh hydrating serum or essence',
        '軽くさっぱりした水分セラム・エッセンス',
        '清爽轻薄的水感精华/精华液',
        '清爽輕薄的水感精華／精華液',
        'Serum/essence nước nhẹ, mát',
        'Serum/essence ringan dan segar'
      ),
      opt(
        1,
        '진하고 영양감 있는 크림 또는 오일',
        'Rich, nourishing cream or oil',
        '濃厚で栄養感のあるクリームやオイル',
        '厚重、滋养型面霜或油类',
        '厚重、滋養型面霜或油類',
        'Kem/dầu đậm đặc, nhiều dưỡng',
        'Krim atau minyak kaya nutrisi'
      ),
      opt(
        2,
        '가벼운 로션 + 보습 크림을 부위별로 달리 사용',
        'Light lotion plus moisturizer, different zones',
        '軽いローション＋保湿クリームを部位で使い分け',
        '清爽乳液+保湿霜分区使用',
        '清爽乳液+保濕霜分區使用',
        'Lotion nhẹ + kem ẩm theo vùng',
        'Lotion ringan + pelembap per area'
      ),
      opt(
        3,
        '오일프리 젤 타입 또는 수분 젤',
        'Oil-free gel or water gel',
        'オイルフリーのジェルや水分ジェル',
        '无油啫喱或水感啫喱',
        '無油凝膠或水感凝膠',
        'Gel không dầu hoặc gel nước',
        'Gel bebas minyak atau gel berair'
      ),
    ],
  },
  {
    id: 12,
    question: M(
      '스킨케어에서 가장 소홀히 하고 있는 단계는?',
      'Which skincare step do you most often neglect?',
      'スキンケアでいちばんおろそかにしがちなステップは？',
      '护肤中最常被忽略的步骤是？',
      '保養中最常被忽略的步驟是？',
      'Bước skincare nào bạn hay bỏ qua nhất?',
      'Langkah skincare mana yang paling sering terlewat?'
    ),
    options: [
      opt(
        0,
        '자외선 차단. 선크림을 자주 빠뜨린다',
        'Sun protection—I often skip sunscreen.',
        '紫外線対策。日焼け止めを抜きがち。',
        '防晒，经常忘涂防晒霜。',
        '防曬，經常忘塗防曬。',
        'Chống nắng—hay quên kem chống nắng.',
        'Perlindungan UV—sering lupa sunscreen.'
      ),
      opt(
        1,
        '영양 공급. 토너 정도로만 끝내는 경우가 있다',
        'Nourishing steps—sometimes I stop at toner.',
        '栄養ケア。トナーだけで終わることがある。',
        '滋养层，有时只涂到化妆水。',
        '滋養層，有時只塗到化妝水。',
        'Dinh dưỡng—đôi khi chỉ đến toner.',
        'Nutrisi—kadang hanya sampai toner.'
      ),
      opt(
        2,
        '부위별 관리. 전체에 같은 제품만 쓰고 있다',
        'Zone care—I use the same product everywhere.',
        '部位別ケア。全体に同じ製品だけ。',
        '分区护理，全脸用同一款产品。',
        '分區護理，全臉用同一款產品。',
        'Theo vùng—dùng một loại cho cả mặt.',
        'Per area—satu produk untuk seluruh wajah.'
      ),
      opt(
        3,
        '기초 세안. 세안에 크게 신경을 안 쓰는 편이다',
        'Cleansing—I don’t pay much attention to washing.',
        '洗顔。あまり気にしていない。',
        '清洁洗脸，不太讲究。',
        '清潔洗臉，不太講究。',
        'Rửa mặt—không mấy chú ý.',
        'Pembersihan—kurang diperhatikan.'
      ),
    ],
  },
];
