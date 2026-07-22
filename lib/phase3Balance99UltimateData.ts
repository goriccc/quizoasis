/**
 * 극한 밸런스 게임 99 — 99문항 2지선다 · A=0 B=1 · 총점 0~99 → Type1~6
 * 카테고리: 음식(Q1-15) · 돈/현실(Q16-30) · 연애(Q31-50) · 극한상황(Q51-70) · 감각(Q71-85) · 직장(Q86-99)
 * 문항 수 확인: 15 + 15 + 20 + 20 + 15 + 14 = 99
 */

type Locale = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';
type ML = Record<Locale, string>;

function L(m: ML): Record<string, string> {
  return m;
}

function opt(m: ML, score: number): { text: Record<string, string>; score: number } {
  return { text: L(m), score };
}

function section(title: ML, content: ML): Phase3Balance99UltimateResultSection {
  return { title: L(title), content: L(content) };
}

export interface Phase3Balance99UltimateQuestion {
  id: number;
  question: Record<string, string>;
  options: { text: Record<string, string>; score: number }[];
}

export interface Phase3Balance99UltimateResultSection {
  title: Record<string, string>;
  content: Record<string, string>;
}

export interface Phase3Balance99UltimateResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  selectionTendency: Record<string, string>;
  choiceCountInfo: Record<string, string>;
  friendCompare: Record<string, string>;
  sections: Phase3Balance99UltimateResultSection[];
  shareMessage: Record<string, string>;
}

export function calculatePhase3Balance99UltimateResult(answers: number[]): string {
  const total = answers.reduce((sum, s) => sum + (s ?? 0), 0);
  if (total <= 16) return 'Type1';
  if (total <= 33) return 'Type2';
  if (total <= 49) return 'Type3';
  if (total <= 65) return 'Type4';
  if (total <= 82) return 'Type5';
  return 'Type6';
}

const STEM = {
  food: L({
    ko: '🍔 음식편 · 둘 중 하나를 반드시 골라야 한다면?',
    en: '🍔 Food · You must choose one—which is it?',
    ja: '🍔 食べ物編 · どちらか一つを必ず選ぶなら？',
    'zh-CN': '🍔 食物篇 · 两者必须选一个，你会选？',
    'zh-TW': '🍔 食物篇 · 兩者必須選一個，你會選？',
    vi: '🍔 Ẩm thực · Bắt buộc chọn một—bạn chọn gì?',
    id: '🍔 Makanan · Harus pilih satu—yang mana?',
  }),
  money: L({
    ko: '💰 돈·생활편 · 둘 중 하나를 반드시 골라야 한다면?',
    en: '💰 Money & Life · You must choose one—which is it?',
    ja: '💰 お金・生活編 · どちらか一つを必ず選ぶなら？',
    'zh-CN': '💰 金钱·生活篇 · 两者必须选一个，你会选？',
    'zh-TW': '💰 金錢·生活篇 · 兩者必須選一個，你會選？',
    vi: '💰 Tiền & đời sống · Bắt buộc chọn một—bạn chọn gì?',
    id: '💰 Uang & hidup · Harus pilih satu—yang mana?',
  }),
  love: L({
    ko: '❤️ 연애·관계편 · 둘 중 하나를 반드시 골라야 한다면?',
    en: '❤️ Love & Relationships · You must choose one—which is it?',
    ja: '❤️ 恋愛・関係編 · どちらか一つを必ず選ぶなら？',
    'zh-CN': '❤️ 恋爱·关系篇 · 两者必须选一个，你会选？',
    'zh-TW': '❤️ 戀愛·關係篇 · 兩者必須選一個，你會選？',
    vi: '❤️ Tình cảm · Bắt buộc chọn một—bạn chọn gì?',
    id: '❤️ Cinta & hubungan · Harus pilih satu—yang mana?',
  }),
  extreme: L({
    ko: '🤔 극한 가정편 · 둘 중 하나를 반드시 골라야 한다면?',
    en: '🤔 Extreme What-Ifs · You must choose one—which is it?',
    ja: '🤔 極限仮定編 · どちらか一つを必ず選ぶなら？',
    'zh-CN': '🤔 极限假设篇 · 两者必须选一个，你会选？',
    'zh-TW': '🤔 極限假設篇 · 兩者必須選一個，你會選？',
    vi: '🤔 Giả định cực đoan · Bắt buộc chọn một—bạn chọn gì?',
    id: '🤔 Hipotesis ekstrem · Harus pilih satu—yang mana?',
  }),
  sense: L({
    ko: '🎭 취향·감각편 · 둘 중 하나를 반드시 골라야 한다면?',
    en: '🎭 Taste & Senses · You must choose one—which is it?',
    ja: '🎭 好み・感覚編 · どちらか一つを必ず選ぶなら？',
    'zh-CN': '🎭 品味·感官篇 · 两者必须选一个，你会选？',
    'zh-TW': '🎭 品味·感官篇 · 兩者必須選一個，你會選？',
    vi: '🎭 Sở thích & giác quan · Bắt buộc chọn một—bạn chọn gì?',
    id: '🎭 Selera & indra · Harus pilih satu—yang mana?',
  }),
  work: L({
    ko: '💼 사회·직장편 · 둘 중 하나를 반드시 골라야 한다면?',
    en: '💼 Work & Society · You must choose one—which is it?',
    ja: '💼 社会・職場編 · どちらか一つを必ず選ぶなら？',
    'zh-CN': '💼 社会·职场篇 · 两者必须选一个，你会选？',
    'zh-TW': '💼 社會·職場篇 · 兩者必須選一個，你會選？',
    vi: '💼 Xã hội & công sở · Bắt buộc chọn một—bạn chọn gì?',
    id: '💼 Sosial & kerja · Harus pilih satu—yang mana?',
  }),
  final: L({
    ko: '🏆 끝판왕 최후의 질문 · 둘 중 하나를 반드시 골라야 한다면?',
    en: '🏆 Final Boss Question · You must choose one—which is it?',
    ja: '🏆 ラスボス最終問題 · どちらか一つを必ず選ぶなら？',
    'zh-CN': '🏆 终极最终一问 · 两者必须选一个，你会选？',
    'zh-TW': '🏆 終極最終一問 · 兩者必須選一個，你會選？',
    vi: '🏆 Câu hỏi boss cuối · Bắt buộc chọn một—bạn chọn gì?',
    id: '🏆 Soal boss terakhir · Harus pilih satu—yang mana?',
  }),
};

export const phase3Balance99UltimateQuestions: Phase3Balance99UltimateQuestion[] = [

  {
    id: 1,
    question: STEM.food,
    options: [
      opt({"ko": "평생 치킨만 먹을 수 있다", "en": "You can only eat chicken for life", "ja": "一生チキンだけ食べられる", "zh-CN": "一辈子只能吃炸鸡", "zh-TW": "一輩子只能吃炸雞", "vi": "Cả đời chỉ được ăn gà rán", "id": "Seumur hidup hanya bisa makan ayam goreng"}, 0),
      opt({"ko": "평생 피자만 먹을 수 있다", "en": "You can only eat pizza for life", "ja": "一生ピザだけ食べられる", "zh-CN": "一辈子只能吃披萨", "zh-TW": "一輩子只能吃披薩", "vi": "Cả đời chỉ được ăn pizza", "id": "Seumur hidup hanya bisa makan pizza"}, 1),
    ],
  },
  {
    id: 2,
    question: STEM.food,
    options: [
      opt({"ko": "혀는 있는데 냄새를 전혀 못 맡는다", "en": "You have a tongue but cannot smell at all", "ja": "舌はあるが匂いを全く嗅げない", "zh-CN": "有舌头但完全闻不到味道", "zh-TW": "有舌頭但完全聞不到味道", "vi": "Có lưỡi nhưng hoàn toàn không ngửi được mùi", "id": "Punya lidah tapi tidak bisa mencium sama sekali"}, 0),
      opt({"ko": "냄새는 맡는데 혀가 없다", "en": "You can smell but have no tongue", "ja": "匂いは嗅げるが舌がない", "zh-CN": "能闻到味道但没有舌头", "zh-TW": "能聞到味道但沒有舌頭", "vi": "Ngửi được mùi nhưng không có lưỡi", "id": "Bisa mencium tapi tidak punya lidah"}, 1),
    ],
  },
  {
    id: 3,
    question: STEM.food,
    options: [
      opt({"ko": "평생 매운 것만 먹어야 한다", "en": "You must only eat spicy food for life", "ja": "一生辛いものだけ食べなければならない", "zh-CN": "一辈子只能吃辣的东西", "zh-TW": "一輩子只能吃辣的东西", "vi": "Cả đời chỉ được ăn đồ cay", "id": "Seumur hidup hanya boleh makan makanan pedas"}, 0),
      opt({"ko": "평생 단 것만 먹어야 한다", "en": "You must only eat sweet food for life", "ja": "一生甘いものだけ食べなければならない", "zh-CN": "一辈子只能吃甜的东西", "zh-TW": "一輩子只能吃甜的東西", "vi": "Cả đời chỉ được ăn đồ ngọt", "id": "Seumur hidup hanya boleh makan makanan manis"}, 1),
    ],
  },
  {
    id: 4,
    question: STEM.food,
    options: [
      opt({"ko": "좋아하는 음식이 오늘부터 갑자기 싫어진다", "en": "Your favorite food suddenly becomes something you hate", "ja": "好きな食べ物が今日から急に嫌いになる", "zh-CN": "从今天开始突然讨厌喜欢的食物", "zh-TW": "從今天開始突然討厭喜歡的食物", "vi": "Món ăn yêu thích đột nhiên trở nên ghét từ hôm nay", "id": "Makanan favorit tiba-tiba jadi tidak suka sejak hari ini"}, 0),
      opt({"ko": "싫어하는 음식이 오늘부터 갑자기 먹고 싶어진다", "en": "Food you hate suddenly becomes something you crave", "ja": "嫌いな食べ物が今日から急に食べたくなる", "zh-CN": "从今天开始突然想吃讨厌的食物", "zh-TW": "從今天開始突然想吃討厭的食物", "vi": "Món ăn ghét đột nhiên muốn ăn từ hôm nay", "id": "Makanan yang dibenci tiba-tiba ingin dimakan sejak hari ini"}, 1),
    ],
  },
  {
    id: 5,
    question: STEM.food,
    options: [
      opt({"ko": "평생 모든 음식이 맛없어지는 대신 살이 절대 안 찐다", "en": "All food tastes bad forever but you never gain weight", "ja": "一生すべての食べ物がまずい代わりに絶対太らない", "zh-CN": "一辈子所有食物都没味道，但绝对不会发胖", "zh-TW": "一輩子所有食物都沒味道，但絕對不會發胖", "vi": "Cả đời mọi món đều dở nhưng không bao giờ tăng cân", "id": "Seumur hidup semua makanan tidak enak tapi tidak pernah gemuk"}, 0),
      opt({"ko": "평생 모든 음식이 맛있는 대신 먹을 때마다 무조건 1kg 찐다", "en": "All food tastes great forever but you always gain 1kg every time you eat", "ja": "一生すべての食べ物が美味しい代わりに食べるたび必ず1kg太る", "zh-CN": "一辈子所有食物都好吃，但每次吃必定胖1公斤", "zh-TW": "一輩子所有食物都好吃，但每次吃必定胖1公斤", "vi": "Cả đời mọi món đều ngon nhưng mỗi lần ăn chắc chắn tăng 1kg", "id": "Seumur hidup semua makanan enak tapi setiap makan pasti naik 1kg"}, 1),
    ],
  },
  {
    id: 6,
    question: STEM.food,
    options: [
      opt({"ko": "커피를 평생 못 마신다", "en": "You can never drink coffee for life", "ja": "一生コーヒーを飲めない", "zh-CN": "一辈子不能喝咖啡", "zh-TW": "一輩子不能喝咖啡", "vi": "Cả đời không được uống cà phê", "id": "Seumur hidup tidak bisa minum kopi"}, 0),
      opt({"ko": "술을 평생 못 마신다", "en": "You can never drink alcohol for life", "ja": "一生お酒を飲めない", "zh-CN": "一辈子不能喝酒", "zh-TW": "一輩子不能喝酒", "vi": "Cả đời không được uống rượu", "id": "Seumur hidup tidak bisa minum alkohol"}, 1),
    ],
  },
  {
    id: 7,
    question: STEM.food,
    options: [
      opt({"ko": "세상에서 가장 비싼 음식을 혼자 먹는다", "en": "Eat the world's most expensive food alone", "ja": "世界で一番高い食べ物を一人で食べる", "zh-CN": "一个人吃世界上最贵的食物", "zh-TW": "一個人吃世界上最貴的食物", "vi": "Ăn món đắt nhất thế giới một mình", "id": "Makan makanan termahal di dunia sendirian"}, 0),
      opt({"ko": "세상에서 가장 저렴한 음식을 사랑하는 사람들과 먹는다", "en": "Eat the world's cheapest food with people you love", "ja": "世界で一番安い食べ物を愛する人たちと食べる", "zh-CN": "和爱的人一起吃世界上最便宜的食物", "zh-TW": "和愛的人一起吃世界上最便宜的食物", "vi": "Ăn món rẻ nhất thế giới cùng người mình yêu", "id": "Makan makanan termurah di dunia bersama orang yang dicintai"}, 1),
    ],
  },
  {
    id: 8,
    question: STEM.food,
    options: [
      opt({"ko": "배달 앱이 지구에서 영원히 사라진다", "en": "Delivery apps disappear from Earth forever", "ja": "配達アプリが地球から永久に消える", "zh-CN": "外卖App从地球上永远消失", "zh-TW": "外送App從地球上永遠消失", "vi": "Ứng dụng giao đồ ăn biến mất khỏi Trái Đất mãi mãi", "id": "Aplikasi delivery hilang dari bumi selamanya"}, 0),
      opt({"ko": "편의점이 지구에서 영원히 사라진다", "en": "Convenience stores disappear from Earth forever", "ja": "コンビニが地球から永久に消える", "zh-CN": "便利店从地球上永远消失", "zh-TW": "便利商店從地球上永遠消失", "vi": "Cửa hàng tiện lợi biến mất khỏi Trái Đất mãi mãi", "id": "Minimarket hilang dari bumi selamanya"}, 1),
    ],
  },
  {
    id: 9,
    question: STEM.food,
    options: [
      opt({"ko": "음식을 먹을 때마다 첫 한 입은 항상 최악의 맛이다", "en": "Every first bite of food always tastes the worst", "ja": "食べ物を食べるたび最初の一口は常に最悪の味", "zh-CN": "每次吃东西第一口总是最难吃", "zh-TW": "每次吃東西第一口總是最難吃", "vi": "Mỗi lần ăn, miếng đầu tiên luôn dở nhất", "id": "Setiap makan, suapan pertama selalu paling tidak enak"}, 0),
      opt({"ko": "음식을 먹을 때마다 마지막 한 입은 항상 최악의 맛이다", "en": "Every last bite of food always tastes the worst", "ja": "食べ物を食べるたび最後の一口は常に最悪の味", "zh-CN": "每次吃东西最后一口总是最难吃", "zh-TW": "每次吃東西最後一口總是最難吃", "vi": "Mỗi lần ăn, miếng cuối cùng luôn dở nhất", "id": "Setiap makan, suapan terakhir selalu paling tidak enak"}, 1),
    ],
  },
  {
    id: 10,
    question: STEM.food,
    options: [
      opt({"ko": "먹으면 살이 빠지는 음식이 항상 내가 제일 싫어하는 맛이다", "en": "Weight-loss food always tastes like your least favorite flavor", "ja": "食べると痩せる食べ物は常に一番嫌いな味", "zh-CN": "吃了会瘦的食物总是你最讨厌的味道", "zh-TW": "吃了會瘦的食物總是你最討厭的味道", "vi": "Đồ ăn giúp giảm cân luôn có vị bạn ghét nhất", "id": "Makanan penurun berat badan selalu rasa paling tidak disukai"}, 0),
      opt({"ko": "먹으면 살이 찌는 음식이 항상 내가 제일 좋아하는 맛이다", "en": "Weight-gain food always tastes like your favorite flavor", "ja": "食べると太る食べ物は常に一番好きな味", "zh-CN": "吃了会胖的食物总是你最喜欢的味道", "zh-TW": "吃了會胖的食物總是你最喜歡的味道", "vi": "Đồ ăn khiến tăng cân luôn có vị bạn thích nhất", "id": "Makanan penambah berat badan selalu rasa paling disukai"}, 1),
    ],
  },
  {
    id: 11,
    question: STEM.food,
    options: [
      opt({"ko": "평생 물 대신 콜라만 마셔야 한다", "en": "You must only drink cola instead of water for life", "ja": "一生水の代わりにコーラだけ飲まなければならない", "zh-CN": "一辈子只能喝可乐不能喝水", "zh-TW": "一輩子只能喝可樂不能喝水", "vi": "Cả đời chỉ được uống cola thay nước", "id": "Seumur hidup hanya boleh minum cola, bukan air"}, 0),
      opt({"ko": "평생 밥 대신 샐러드만 먹어야 한다", "en": "You must only eat salad instead of rice for life", "ja": "一生ご飯の代わりにサラダだけ食べなければならない", "zh-CN": "一辈子只能吃沙拉不能吃饭", "zh-TW": "一輩子只能吃沙拉不能吃飯", "vi": "Cả đời chỉ được ăn salad thay cơm", "id": "Seumur hidup hanya boleh makan salad, bukan nasi"}, 1),
    ],
  },
  {
    id: 12,
    question: STEM.food,
    options: [
      opt({"ko": "한 달에 한 번만 먹을 수 있는 대신 원하는 것 뭐든 먹는다", "en": "You can only eat once a month but eat anything you want", "ja": "月に1回しか食べられない代わりに好きなもの何でも食べられる", "zh-CN": "一个月只能吃一次，但想吃什么都可以", "zh-TW": "一個月只能吃一次，但想吃什麼都可以", "vi": "Chỉ được ăn một tháng một lần nhưng ăn gì cũng được", "id": "Hanya bisa makan sebulan sekali tapi bisa makan apa saja"}, 0),
      opt({"ko": "매일 먹을 수 있는 대신 선택지가 딱 3가지다", "en": "You can eat every day but only have 3 choices", "ja": "毎日食べられる代わりに選択肢は3つだけ", "zh-CN": "每天都能吃，但选择只有3种", "zh-TW": "每天都能吃，但選擇只有3種", "vi": "Ăn mỗi ngày nhưng chỉ có đúng 3 lựa chọn", "id": "Bisa makan setiap hari tapi pilihannya cuma 3"}, 1),
    ],
  },
  {
    id: 13,
    question: STEM.food,
    options: [
      opt({"ko": "요리를 아무리 해도 절대 맛있게 못 만든다", "en": "No matter how hard you try, you can never cook well", "ja": "どんなに料理しても絶対美味しく作れない", "zh-CN": "无论怎么做饭都做不好吃", "zh-TW": "無論怎麼做飯都做不好吃", "vi": "Dù nấu thế nào cũng không bao giờ ngon", "id": "Seberapa pun masak, tidak pernah bisa membuat enak"}, 0),
      opt({"ko": "요리를 하면 항상 맛있게 만들어지는데 칼로리가 두 배다", "en": "Everything you cook always tastes great but has double the calories", "ja": "料理すると常に美味しくできるがカロリーが2倍", "zh-CN": "做饭总是很好吃但热量翻倍", "zh-TW": "做飯總是很好吃但熱量翻倍", "vi": "Nấu gì cũng luôn ngon nhưng calo gấp đôi", "id": "Setiap masak selalu enak tapi kalorinya dua kali lipat"}, 1),
    ],
  },
  {
    id: 14,
    question: STEM.food,
    options: [
      opt({"ko": "평생 음식에 소금을 못 넣는다", "en": "You can never add salt to food for life", "ja": "一生食べ物に塩を入れられない", "zh-CN": "一辈子不能在食物里加盐", "zh-TW": "一輩子不能在食物裡加鹽", "vi": "Cả đời không được cho muối vào đồ ăn", "id": "Seumur hidup tidak bisa menambah garam ke makanan"}, 0),
      opt({"ko": "평생 음식에 설탕을 못 넣는다", "en": "You can never add sugar to food for life", "ja": "一生食べ物に砂糖を入れられない", "zh-CN": "一辈子不能在食物里加糖", "zh-TW": "一輩子不能在食物裡加糖", "vi": "Cả đời không được cho đường vào đồ ăn", "id": "Seumur hidup tidak bisa menambah gula ke makanan"}, 1),
    ],
  },
  {
    id: 15,
    question: STEM.food,
    options: [
      opt({"ko": "밥을 먹을 때 항상 혼자 먹어야 한다", "en": "You must always eat alone", "ja": "食事は常に一人で食べなければならない", "zh-CN": "吃饭必须永远一个人吃", "zh-TW": "吃飯必須永遠一個人吃", "vi": "Luôn phải ăn một mình", "id": "Selalu harus makan sendirian"}, 0),
      opt({"ko": "먹고 싶을 때 아무것도 먹을 수 없고 배고프지 않을 때만 먹을 수 있다", "en": "You can't eat when you're hungry and can only eat when you're not hungry", "ja": "食べたい時は何も食べられず、お腹が空いていない時だけ食べられる", "zh-CN": "想吃的时候什么都不能吃，不饿的时候才能吃", "zh-TW": "想吃的時候什麼都不能吃，不餓的時候才能吃", "vi": "Muốn ăn thì không ăn được gì, chỉ ăn được khi không đói", "id": "Tidak bisa makan saat lapar, hanya bisa makan saat tidak lapar"}, 1),
    ],
  },
  {
    id: 16,
    question: STEM.money,
    options: [
      opt({"ko": "10억을 받는데 평생 해외여행을 못 간다", "en": "Get 1 billion won but can never travel abroad for life", "ja": "10億ウォンをもらうが一生海外旅行に行けない", "zh-CN": "得到10亿韩元但一辈子不能出国旅行", "zh-TW": "得到10億韓元但一輩子不能出國旅行", "vi": "Nhận 1 tỷ won nhưng cả đời không được đi du lịch nước ngoài", "id": "Dapat 1 miliar won tapi seumur hidup tidak bisa traveling ke luar negeri"}, 0),
      opt({"ko": "평생 해외여행을 다닐 수 있는데 통장 잔고가 항상 100만원 이하다", "en": "Can travel abroad freely for life but bank balance is always under 1 million won", "ja": "一生海外旅行できるが口座残高は常に100万ウォン以下", "zh-CN": "一辈子可以出国旅行但银行账户永远不超过100万韩元", "zh-TW": "一輩子可以出國旅行但銀行帳戶永遠不超過100萬韓元", "vi": "Cả đời được du lịch nước ngoài nhưng số dư tài khoản luôn dưới 1 triệu won", "id": "Seumur hidup bisa traveling ke luar negeri tapi saldo rekening selalu di bawah 1 juta won"}, 1),
    ],
  },
  {
    id: 17,
    question: STEM.money,
    options: [
      opt({"ko": "꿈의 집에 사는데 혼자 산다", "en": "Live in your dream home but alone", "ja": "夢の家に住むが一人暮らし", "zh-CN": "住在梦想中的房子但一个人住", "zh-TW": "住在夢想中的房子但一個人住", "vi": "Sống trong ngôi nhà mơ ước nhưng ở một mình", "id": "Tinggal di rumah impian tapi sendirian"}, 0),
      opt({"ko": "원룸에 사는데 사랑하는 사람과 함께 산다", "en": "Live in a studio apartment with someone you love", "ja": "ワンルームに住むが愛する人と一緒", "zh-CN": "住在单间但和爱的人一起", "zh-TW": "住在單間但和愛的人一起", "vi": "Sống trong phòng studio cùng người mình yêu", "id": "Tinggal di studio bersama orang yang dicintai"}, 1),
    ],
  },
  {
    id: 18,
    question: STEM.money,
    options: [
      opt({"ko": "100억을 받는데 SNS를 평생 못 한다", "en": "Get 10 billion won but can never use social media for life", "ja": "100億ウォンをもらうが一生SNSができない", "zh-CN": "得到100亿韩元但一辈子不能用社交媒体", "zh-TW": "得到100億韓元但一輩子不能用社群媒體", "vi": "Nhận 10 tỷ won nhưng cả đời không được dùng mạng xã hội", "id": "Dapat 10 miliar won tapi seumur hidup tidak bisa pakai media sosial"}, 0),
      opt({"ko": "SNS를 마음껏 하는데 평생 월급이 최저임금이다", "en": "Use social media freely but minimum wage salary for life", "ja": "SNSを自由にできるが一生最低賃金の給料", "zh-CN": "随意使用社交媒体但一辈子拿最低工资", "zh-TW": "隨意使用社群媒體但一輩子拿最低工資", "vi": "Thoải mái dùng mạng xã hội nhưng lương cả đời là mức tối thiểu", "id": "Bebas pakai media sosial tapi gaji seumur hidup minimum wage"}, 1),
    ],
  },
  {
    id: 19,
    question: STEM.money,
    options: [
      opt({"ko": "잠을 4시간만 자도 충분한 대신 항상 피곤한 느낌이 든다", "en": "Only need 4 hours of sleep but always feel tired", "ja": "4時間寝れば十分だが常に疲れた感じがする", "zh-CN": "睡4小时就够了但总是感觉疲惫", "zh-TW": "睡4小時就夠了但總是感覺疲憊", "vi": "Chỉ cần ngủ 4 tiếng nhưng luôn cảm thấy mệt", "id": "Cukup tidur 4 jam tapi selalu merasa lelah"}, 0),
      opt({"ko": "8시간을 자야 하는 대신 일어나면 항상 완전히 개운하다", "en": "Need 8 hours of sleep but always wake up completely refreshed", "ja": "8時間寝なければならないが起きると常にスッキリ", "zh-CN": "必须睡8小时但醒来总是神清气爽", "zh-TW": "必須睡8小時但醒來總是神清氣爽", "vi": "Phải ngủ 8 tiếng nhưng thức dậy luôn khỏe khoắn", "id": "Harus tidur 8 jam tapi bangun selalu segar"}, 1),
    ],
  },
  {
    id: 20,
    question: STEM.money,
    options: [
      opt({"ko": "평생 렌트해서 사는데 돈 걱정이 없다", "en": "Rent for life but never worry about money", "ja": "一生賃貸だがお金の心配がない", "zh-CN": "一辈子租房但不用担心钱", "zh-TW": "一輩子租房但不用擔心錢", "vi": "Cả đời thuê nhà nhưng không lo tiền", "id": "Seumur hidup sewa tapi tidak khawatir uang"}, 0),
      opt({"ko": "내 집이 있는데 항상 돈이 빠듯하다", "en": "Own your home but always tight on money", "ja": "持ち家があるが常にお金が厳しい", "zh-CN": "有自己的房子但总是手头紧", "zh-TW": "有自己的房子但總是手頭緊", "vi": "Có nhà riêng nhưng luôn thiếu tiền", "id": "Punya rumah sendiri tapi selalu kekurangan uang"}, 1),
    ],
  },
  {
    id: 21,
    question: STEM.money,
    options: [
      opt({"ko": "원하는 물건을 다 살 수 있는데 배송이 항상 6개월이다", "en": "Can buy anything you want but delivery always takes 6 months", "ja": "欲しいものは何でも買えるが配送は常に6か月", "zh-CN": "想买什么都能买但配送总是6个月", "zh-TW": "想買什麼都能買但配送總是6個月", "vi": "Mua được mọi thứ muốn nhưng giao hàng luôn 6 tháng", "id": "Bisa beli apa saja yang diinginkan tapi pengiriman selalu 6 bulan"}, 0),
      opt({"ko": "원하는 물건 중 딱 하나만 살 수 있는데 바로 받는다", "en": "Can buy only one thing you want but get it immediately", "ja": "欲しいものの中1つだけ買えるがすぐ届く", "zh-CN": "只能买一样想要的东西但立刻收到", "zh-TW": "只能買一樣想要的東西但立刻收到", "vi": "Chỉ mua được đúng một thứ muốn nhưng nhận ngay", "id": "Hanya bisa beli satu hal yang diinginkan tapi langsung diterima"}, 1),
    ],
  },
  {
    id: 22,
    question: STEM.money,
    options: [
      opt({"ko": "로또에 당첨됐는데 아무한테도 말할 수 없다", "en": "Won the lottery but can't tell anyone", "ja": "宝くじに当たったが誰にも言えない", "zh-CN": "中了彩票但不能告诉任何人", "zh-TW": "中了彩券但不能告訴任何人", "vi": "Trúng xổ số nhưng không nói được với ai", "id": "Menang lotre tapi tidak bisa bilang ke siapa pun"}, 0),
      opt({"ko": "당첨 사실이 전국에 공개된다", "en": "Your win is announced nationwide", "ja": "当選事実が全国に公開される", "zh-CN": "中奖事实在全国公开", "zh-TW": "中獎事實在全國公開", "vi": "Sự thật trúng thưởng được công bố toàn quốc", "id": "Fakta kemenangan diumumkan ke seluruh negeri"}, 1),
    ],
  },
  {
    id: 23,
    question: STEM.money,
    options: [
      opt({"ko": "필요한 건 다 있는데 갖고 싶은 건 아무것도 가질 수 없다", "en": "Have everything you need but can't have anything you want", "ja": "必要なものは全部あるが欲しいものは何も持てない", "zh-CN": "需要的都有但想要的东西一样都得不到", "zh-TW": "需要的都有但想要的東西一樣都得不到", "vi": "Có đủ thứ cần nhưng không có được gì mình muốn", "id": "Semua yang dibutuhkan ada tapi tidak bisa punya apa pun yang diinginkan"}, 0),
      opt({"ko": "갖고 싶은 건 다 가질 수 있는데 필요한 것이 항상 없다", "en": "Can have everything you want but always lack what you need", "ja": "欲しいものは全部持てるが必要なものが常にない", "zh-CN": "想要的都能拥有但需要的总是没有", "zh-TW": "想要的都能擁有但需要的總是沒有", "vi": "Có được mọi thứ muốn nhưng luôn thiếu thứ cần", "id": "Bisa punya semua yang diinginkan tapi selalu kekurangan yang dibutuhkan"}, 1),
    ],
  },
  {
    id: 24,
    question: STEM.money,
    options: [
      opt({"ko": "평생 걸어다닌다. 단 목적지까지 최대 30분 거리만 이동 가능하다", "en": "Walk everywhere for life, but destinations are max 30 minutes away", "ja": "一生歩いて移動する。ただし目的地まで最大30分の距離のみ", "zh-CN": "一辈子只能走路，但目的地最多30分钟路程", "zh-TW": "一輩子只能走路，但目的地最多30分鐘路程", "vi": "Cả đời đi bộ, nhưng chỉ di chuyển tối đa 30 phút đến đích", "id": "Seumur hidup jalan kaki, tapi tujuan maksimal 30 menit jauhnya"}, 0),
      opt({"ko": "대중교통만 이용하는데 어디든 갈 수 있다", "en": "Only use public transit but can go anywhere", "ja": "公共交通だけ使うがどこへでも行ける", "zh-CN": "只能坐公共交通但可以去任何地方", "zh-TW": "只能坐大眾運輸但可以去任何地方", "vi": "Chỉ dùng phương tiện công cộng nhưng đi đâu cũng được", "id": "Hanya pakai transportasi umum tapi bisa ke mana saja"}, 1),
    ],
  },
  {
    id: 25,
    question: STEM.money,
    options: [
      opt({"ko": "돈을 쓸 때마다 10%가 자동으로 기부된다", "en": "10% is automatically donated every time you spend money", "ja": "お金を使うたび10%が自動的に寄付される", "zh-CN": "每次花钱自动捐出10%", "zh-TW": "每次花錢自動捐出10%", "vi": "Mỗi lần tiêu tiền 10% tự động quyên góp", "id": "Setiap belanja 10% otomatis didonasikan"}, 0),
      opt({"ko": "돈을 받을 때마다 10%가 자동으로 차감된다", "en": "10% is automatically deducted every time you receive money", "ja": "お金をもらうたび10%が自動的に差し引かれる", "zh-CN": "每次收到钱自动扣除10%", "zh-TW": "每次收到錢自動扣除10%", "vi": "Mỗi lần nhận tiền 10% tự động bị trừ", "id": "Setiap terima uang 10% otomatis dipotong"}, 1),
    ],
  },
  {
    id: 26,
    question: STEM.money,
    options: [
      opt({"ko": "모든 것이 공짜인데 항상 2시간을 줄 서서 기다려야 한다", "en": "Everything is free but you always wait in line for 2 hours", "ja": "すべて無料だが常に2時間並ばなければならない", "zh-CN": "什么都免费但要永远排队等2小时", "zh-TW": "什麼都免費但要永遠排隊等2小時", "vi": "Mọi thứ miễn phí nhưng luôn phải xếp hàng 2 tiếng", "id": "Semua gratis tapi selalu antre 2 jam"}, 0),
      opt({"ko": "줄 없이 바로 이용할 수 있는데 항상 두 배의 가격이다", "en": "No lines but everything always costs double", "ja": "並ばずにすぐ使えるが常に2倍の値段", "zh-CN": "不用排队立刻能用但价格总是翻倍", "zh-TW": "不用排隊立刻能用但價格總是翻倍", "vi": "Không xếp hàng dùng ngay nhưng giá luôn gấp đôi", "id": "Tanpa antre langsung dipakai tapi harga selalu dua kali lipat"}, 1),
    ],
  },
  {
    id: 27,
    question: STEM.money,
    options: [
      opt({"ko": "평생 좋아하는 일만 하는데 연봉이 최저임금이다", "en": "Do only what you love for life but earn minimum wage", "ja": "一生好きなことだけするが年俸は最低賃金", "zh-CN": "一辈子只做喜欢的事但年薪是最低工资", "zh-TW": "一輩子只做喜歡的事但年薪是最低工資", "vi": "Cả đời chỉ làm việc thích nhưng lương năm là mức tối thiểu", "id": "Seumur hidup hanya kerja yang disukai tapi gaji minimum"}, 0),
      opt({"ko": "하기 싫은 일을 하는데 연봉이 10억이다", "en": "Do what you hate but earn 1 billion won a year", "ja": "嫌なことをするが年俸は10億ウォン", "zh-CN": "做不喜欢的事但年薪10亿韩元", "zh-TW": "做不喜歡的事但年薪10億韓元", "vi": "Làm việc ghét nhưng lương năm 1 tỷ won", "id": "Kerja yang tidak disukai tapi gaji 1 miliar won per tahun"}, 1),
    ],
  },
  {
    id: 28,
    question: STEM.money,
    options: [
      opt({"ko": "쇼핑을 마음껏 할 수 있는데 사자마자 유행이 지나간다", "en": "Shop as much as you want but trends pass the moment you buy", "ja": "好きなだけ買い物できるが買った瞬間に流行が過ぎる", "zh-CN": "尽情购物但一买就过气", "zh-TW": "盡情購物但一買就過氣", "vi": "Mua sắm thoải mái nhưng vừa mua là hết trend", "id": "Belanja sepuasnya tapi begitu beli langsung tidak trendy"}, 0),
      opt({"ko": "유행하는 걸 살 수 없는데 내가 사면 그게 유행이 된다", "en": "Can't buy trendy things but whatever you buy becomes trendy", "ja": "流行のものは買えないが自分が買うとそれが流行になる", "zh-CN": "买不了流行的东西但一买就成流行", "zh-TW": "買不了流行的東西但一買就成流行", "vi": "Không mua được đồ hot nhưng mua gì cũng thành trend", "id": "Tidak bisa beli yang trendy tapi kalau beli jadi trendy"}, 1),
    ],
  },
  {
    id: 29,
    question: STEM.money,
    options: [
      opt({"ko": "집에 있으면 행복한데 밖에 나가면 항상 불운이 따른다", "en": "Happy at home but always unlucky when you go out", "ja": "家にいると幸せだが外に出ると常に不運がつく", "zh-CN": "在家幸福但出门总是倒霉", "zh-TW": "在家幸福但出門總是倒霉", "vi": "Ở nhà thì hạnh phúc nhưng ra ngoài luôn xui", "id": "Di rumah bahagia tapi keluar selalu sial"}, 0),
      opt({"ko": "밖에 나가면 행운이 따르는데 집에 있으면 항상 불안하다", "en": "Lucky when you go out but always anxious at home", "ja": "外に出ると幸運がつくが家にいると常に不安", "zh-CN": "出门走运但在家总是不安", "zh-TW": "出門走運但在家總是不安", "vi": "Ra ngoài may mắn nhưng ở nhà luôn lo lắng", "id": "Keluar beruntung tapi di rumah selalu cemas"}, 1),
    ],
  },
  {
    id: 30,
    question: STEM.money,
    options: [
      opt({"ko": "내 이름을 딴 건물이 생기는데 세상에서 가장 흉물스럽다", "en": "A building is named after you but it's the ugliest in the world", "ja": "自分の名前の建物ができるが世界で一番醜い", "zh-CN": "有以你名字命名的建筑但是世界上最丑的", "zh-TW": "有以你名字命名的建築但是世界上最醜的", "vi": "Có tòa nhà mang tên bạn nhưng xấu nhất thế giới", "id": "Ada gedung bernama dirimu tapi paling jelek di dunia"}, 0),
      opt({"ko": "세상에서 가장 아름다운 건물인데 내 이름이 아니다", "en": "The world's most beautiful building but it's not named after you", "ja": "世界で一番美しい建物だが自分の名前ではない", "zh-CN": "世界上最美的建筑但不是你的名字", "zh-TW": "世界上最美的建築但不是你的名字", "vi": "Tòa nhà đẹp nhất thế giới nhưng không phải tên bạn", "id": "Gedung paling indah di dunia tapi bukan namamu"}, 1),
    ],
  },
  {
    id: 31,
    question: STEM.love,
    options: [
      opt({"ko": "사랑하는 사람이 나를 싫어한다", "en": "The person you love hates you", "ja": "愛する人が自分を嫌い", "zh-CN": "你爱的人讨厌你", "zh-TW": "你愛的人討厭你", "vi": "Người mình yêu ghét mình", "id": "Orang yang dicintai membencimu"}, 0),
      opt({"ko": "싫어하는 사람이 나를 사랑한다", "en": "The person you hate loves you", "ja": "嫌いな人が自分を愛する", "zh-CN": "你讨厌的人爱你", "zh-TW": "你討厭的人愛你", "vi": "Người mình ghét yêu mình", "id": "Orang yang dibenci mencintaimu"}, 1),
    ],
  },
  {
    id: 32,
    question: STEM.love,
    options: [
      opt({"ko": "썸을 탔는데 결국 아무것도 안 된다", "en": "You had a fling but nothing happened in the end", "ja": "曖昧な関係だったが結局何もなかった", "zh-CN": "暧昧了一场但最终什么都没发生", "zh-TW": "曖昧了一場但最終什麼都沒發生", "vi": "Tình đến tình lui rồi cuối cùng chẳng có gì", "id": "Pernah dekat tapi akhirnya tidak jadi apa-apa"}, 0),
      opt({"ko": "좋아하지도 않는 사람과 사귀게 된다", "en": "You end up dating someone you don't even like", "ja": "好きでもない人と付き合うことになる", "zh-CN": "和不喜欢的人交往了", "zh-TW": "和不喜歡的人交往了", "vi": "Phải hẹn hò với người không hề thích", "id": "Jadi pacaran dengan orang yang tidak disukai"}, 1),
    ],
  },
  {
    id: 33,
    question: STEM.love,
    options: [
      opt({"ko": "연인이 나만 완전히 사랑하는데 나는 연인이 별로다", "en": "Your partner loves only you completely but you don't really like them", "ja": "恋人は自分だけを完全に愛しているが自分は恋人がイマイチ", "zh-CN": "恋人只爱你一个人但你不太喜欢恋人", "zh-TW": "戀人只愛你一個人但你不太喜歡戀人", "vi": "Người yêu chỉ yêu mình hoàn toàn nhưng mình không mấy thích", "id": "Pasangan sangat mencintaimu tapi kamu tidak begitu suka"}, 0),
      opt({"ko": "내가 연인을 엄청나게 좋아하는데 연인은 나를 그냥 좋아한다", "en": "You love your partner deeply but they only kinda like you", "ja": "自分は恋人をものすごく好きだが恋人はただ好き程度", "zh-CN": "你非常喜欢恋人但恋人只是普通地喜欢你", "zh-TW": "你非常喜歡戀人但戀人只是普通地喜歡你", "vi": "Mình cực thích người yêu nhưng họ chỉ thích bình thường", "id": "Kamu sangat suka pasangan tapi mereka hanya biasa saja"}, 1),
    ],
  },
  {
    id: 34,
    question: STEM.love,
    options: [
      opt({"ko": "평생 솔로인데 행복하다", "en": "Single for life but happy", "ja": "一生独身だが幸せ", "zh-CN": "一辈子单身但幸福", "zh-TW": "一輩子單身但幸福", "vi": "Cả đời độc thân nhưng hạnh phúc", "id": "Seumur hidup jomblo tapi bahagia"}, 0),
      opt({"ko": "항상 연인이 있는데 항상 불행하다", "en": "Always have a partner but always unhappy", "ja": "常に恋人がいるが常に不幸", "zh-CN": "一直有恋人但一直不幸福", "zh-TW": "一直有戀人但一直不幸福", "vi": "Luôn có người yêu nhưng luôn bất hạnh", "id": "Selalu punya pasangan tapi selalu tidak bahagia"}, 1),
    ],
  },
  {
    id: 35,
    question: STEM.love,
    options: [
      opt({"ko": "첫사랑과 사귀게 됐는데 결국 최악의 이별을 한다", "en": "You date your first love but end up in the worst breakup", "ja": "初恋と付き合うが結局最悪の別れをする", "zh-CN": "和初恋交往了但最终是最糟糕的分手", "zh-TW": "和初戀交往了但最終是最糟糕的分手", "vi": "Hẹn hò với tình đầu nhưng chia tay tồi tệ nhất", "id": "Pacaran dengan cinta pertama tapi putus paling buruk"}, 0),
      opt({"ko": "첫사랑이 나를 좋아하는데 이미 내가 다른 사람과 사귀고 있다", "en": "Your first love likes you but you're already dating someone else", "ja": "初恋が自分を好きだが既に他の人と付き合っている", "zh-CN": "初恋喜欢你但你已经在和别人交往", "zh-TW": "初戀喜歡你但你已經在和別人交往", "vi": "Tình đầu thích mình nhưng mình đã có người khác", "id": "Cinta pertama suka kamu tapi kamu sudah pacaran orang lain"}, 1),
    ],
  },
  {
    id: 36,
    question: STEM.love,
    options: [
      opt({"ko": "모든 사람이 나를 좋아하는데 내가 좋아하는 사람이 아무도 없다", "en": "Everyone likes you but there's no one you like", "ja": "みんなが自分を好きだが自分が好きな人は誰もいない", "zh-CN": "所有人都喜欢你但没有你喜欢的人", "zh-TW": "所有人都喜歡你但沒有你喜歡的人", "vi": "Mọi người đều thích mình nhưng không có ai mình thích", "id": "Semua orang suka kamu tapi tidak ada yang kamu suka"}, 0),
      opt({"ko": "아무도 나를 안 좋아하는데 내가 좋아하는 사람이 생겼다", "en": "No one likes you but someone you like appears", "ja": "誰も自分を好きではないが自分が好きな人が現れる", "zh-CN": "没有人喜欢你但出现了你喜欢的人", "zh-TW": "沒有人喜歡你但出現了你喜歡的人", "vi": "Không ai thích mình nhưng có người mình thích", "id": "Tidak ada yang suka kamu tapi muncul orang yang kamu suka"}, 1),
    ],
  },
  {
    id: 37,
    question: STEM.love,
    options: [
      opt({"ko": "연인이 모든 면에서 완벽한데 공감 능력이 0이다", "en": "Your partner is perfect in every way but has zero empathy", "ja": "恋人はすべての面で完璧だが共感能力が0", "zh-CN": "恋人各方面都完美但没有共情能力", "zh-TW": "戀人各方面都完美但沒有共情能力", "vi": "Người yêu hoàn hảo mọi mặt nhưng không biết đồng cảm", "id": "Pasangan sempurna di segala hal tapi empatinya nol"}, 0),
      opt({"ko": "공감 능력은 완벽한데 모든 면에서 나랑 안 맞는다", "en": "Perfect empathy but doesn't match you in any way", "ja": "共感能力は完璧だがすべての面で合わない", "zh-CN": "共情能力完美但各方面都不合适", "zh-TW": "共情能力完美但各方面都不合適", "vi": "Đồng cảm hoàn hảo nhưng mọi mặt đều không hợp", "id": "Empati sempurna tapi tidak cocok di segala hal"}, 1),
    ],
  },
  {
    id: 38,
    question: STEM.love,
    options: [
      opt({"ko": "좋아하는 사람이 내 친한 친구와 사귀게 됐다", "en": "The person you like starts dating your close friend", "ja": "好きな人が親しい友達と付き合う", "zh-CN": "喜欢的人和你好朋友交往了", "zh-TW": "喜歡的人和你好朋友交往了", "vi": "Người mình thích hẹn hò bạn thân", "id": "Orang yang disukai pacaran dengan sahabat"}, 0),
      opt({"ko": "내가 좋아하게 된 사람이 나의 전 연인이다", "en": "The person you come to like is your ex", "ja": "好きになった人が元恋人", "zh-CN": "你喜欢上的人是前任", "zh-TW": "你喜歡上的人是前任", "vi": "Người mình thích là người yêu cũ", "id": "Orang yang disukai adalah mantan"}, 1),
    ],
  },
  {
    id: 39,
    question: STEM.love,
    options: [
      opt({"ko": "이상형이 나타났는데 나를 전혀 모른다", "en": "Your ideal type appears but doesn't know you at all", "ja": "理想のタイプが現れたが自分を全く知らない", "zh-CN": "理想型出现了但完全不认识你", "zh-TW": "理想型出現了但完全不認識你", "vi": "Người lý tưởng xuất hiện nhưng không biết mình", "id": "Tipe ideal muncul tapi tidak kenal kamu sama sekali"}, 0),
      opt({"ko": "이상형이 나를 알아봤는데 내가 역대 최악의 모습일 때다", "en": "Your ideal type recognizes you but you look your worst ever", "ja": "理想のタイプが自分を認識したが自分が史上最悪の姿の時", "zh-CN": "理想型认出你了但你形象史上最差", "zh-TW": "理想型認出你了但你形象史上最差", "vi": "Người lý tưởng nhận ra mình nhưng lúc mình xấu nhất đời", "id": "Tipe ideal mengenali kamu tapi kamu terlihat terburuk sepanjang masa"}, 1),
    ],
  },
  {
    id: 40,
    question: STEM.love,
    options: [
      opt({"ko": "연락이 자주 안 되는 장거리 연애", "en": "Long-distance relationship with infrequent contact", "ja": "連絡があまり取れない遠距離恋愛", "zh-CN": "联系不多的异地恋", "zh-TW": "聯繫不多的異地戀", "vi": "Yêu xa, ít liên lạc", "id": "LDR dengan jarang komunikasi"}, 0),
      opt({"ko": "매일 만나는데 만날 때마다 싸우는 연애", "en": "See each other daily but fight every time you meet", "ja": "毎日会うが会うたびに喧嘩する恋愛", "zh-CN": "每天见面但每次见面都吵架的恋爱", "zh-TW": "每天見面但每次見面都吵架的戀愛", "vi": "Gặp mỗi ngày nhưng mỗi lần gặp đều cãi nhau", "id": "Ketemu setiap hari tapi selalu berantem setiap ketemu"}, 1),
    ],
  },
  {
    id: 41,
    question: STEM.love,
    options: [
      opt({"ko": "연인의 가족 전체가 나를 싫어한다", "en": "Your partner's whole family dislikes you", "ja": "恋人の家族全員が自分を嫌い", "zh-CN": "恋人的全家都讨厌你", "zh-TW": "戀人的全家都討厭你", "vi": "Cả gia đình người yêu ghét mình", "id": "Seluruh keluarga pasangan tidak suka kamu"}, 0),
      opt({"ko": "내 가족 전체가 연인을 싫어한다", "en": "Your whole family dislikes your partner", "ja": "自分の家族全員が恋人を嫌い", "zh-CN": "你的全家都讨厌恋人", "zh-TW": "你的全家都討厭戀人", "vi": "Cả gia đình mình ghét người yêu", "id": "Seluruh keluargamu tidak suka pasangan"}, 1),
    ],
  },
  {
    id: 42,
    question: STEM.love,
    options: [
      opt({"ko": "연인이 나보다 훨씬 잘생겼는데 질투가 심하다", "en": "Your partner is much better looking but very jealous", "ja": "恋人は自分よりずっとイケメン/美人だが嫉妬が激しい", "zh-CN": "恋人比你好看很多但嫉妒心很强", "zh-TW": "戀人比你好看很多但嫉妒心很強", "vi": "Người yêu đẹp hơn nhiều nhưng hay ghen", "id": "Pasangan jauh lebih cantik/tampan tapi sangat cemburuan"}, 0),
      opt({"ko": "나를 완전히 신뢰하는데 외모가 내 스타일이 전혀 아니다", "en": "Completely trusts you but looks nothing like your type", "ja": "自分を完全に信頼するが外見が自分のタイプではない", "zh-CN": "完全信任你但外貌完全不是你的类型", "zh-TW": "完全信任你但外貌完全不是你的類型", "vi": "Tin tưởng hoàn toàn nhưng ngoại hình không phải gu", "id": "Sepenuhnya percaya padamu tapi penampilan bukan tipemu"}, 1),
    ],
  },
  {
    id: 43,
    question: STEM.love,
    options: [
      opt({"ko": "좋아하는 사람이 먼저 고백해오는데 내가 긴장해서 실수로 거절해버렸다", "en": "The person you like confesses first but you nervously reject them by mistake", "ja": "好きな人から先に告白されるが緊張してうっかり断ってしまう", "zh-CN": "喜欢的人先表白但你紧张误拒绝了", "zh-TW": "喜歡的人先表白但你緊張誤拒絕了", "vi": "Người thích tỏ tình trước nhưng mình lo lắng từ chối nhầm", "id": "Orang yang disukai confess duluan tapi kamu gugup menolak tanpa sengaja"}, 0),
      opt({"ko": "용기내서 고백했는데 거절당했다", "en": "You confess bravely but get rejected", "ja": "勇気を出して告白するが断られる", "zh-CN": "鼓起勇气表白却被拒绝了", "zh-TW": "鼓起勇氣表白卻被拒絕了", "vi": "Mình tỏ tình nhưng bị từ chối", "id": "Berani confess tapi ditolak"}, 1),
    ],
  },
  {
    id: 44,
    question: STEM.love,
    options: [
      opt({"ko": "완벽한 첫 만남인데 두 번째 만남이 없다", "en": "A perfect first date but no second date", "ja": "完璧な初デートだが2回目のデートがない", "zh-CN": "第一次约会完美但没有第二次", "zh-TW": "第一次約會完美但沒有第二次", "vi": "Buổi hẹn đầu hoàn hảo nhưng không có lần hai", "id": "Kencan pertama sempurna tapi tidak ada kencan kedua"}, 0),
      opt({"ko": "첫 만남은 최악인데 결국 가장 오래 함께하는 사람이 된다", "en": "The worst first date but they become the person you're with the longest", "ja": "初デートは最悪だが結局一番長く一緒にいる人になる", "zh-CN": "第一次约会最糟但最终成为在一起最久的人", "zh-TW": "第一次約會最糟但最終成為在一起最久的人", "vi": "Buổi hẹn đầu tệ nhất nhưng cuối cùng ở bên lâu nhất", "id": "Kencan pertama terburuk tapi akhirnya jadi orang yang paling lama bersama"}, 1),
    ],
  },
  {
    id: 45,
    question: STEM.love,
    options: [
      opt({"ko": "좋아하는 사람의 친한 친구가 나에게 고백한다", "en": "Your crush's close friend confesses to you", "ja": "好きな人の親しい友達が自分に告白する", "zh-CN": "喜欢的人的好朋友向你表白", "zh-TW": "喜歡的人的好朋友向你表白", "vi": "Bạn thân của người thích tỏ tình với mình", "id": "Sahabat dekat crush confess ke kamu"}, 0),
      opt({"ko": "내 친한 친구가 내가 좋아하는 사람에게 고백한다", "en": "Your close friend confesses to your crush", "ja": "親しい友達が自分の好きな人に告白する", "zh-CN": "你的好朋友向你喜欢的人表白", "zh-TW": "你的好朋友向你喜歡的人表白", "vi": "Bạn thân tỏ tình với người mình thích", "id": "Sahabat dekat confess ke crush kamu"}, 1),
    ],
  },
  {
    id: 46,
    question: STEM.love,
    options: [
      opt({"ko": "연인이 나에게 거짓말을 했는데 그 거짓말이 나를 위한 것이었다", "en": "Your partner lied to you but the lie was for your sake", "ja": "恋人が自分に嘘をついたがその嘘は自分のためだった", "zh-CN": "恋人对你撒谎但那个谎是为了你好", "zh-TW": "戀人對你撒謊但那個謊是為了你好", "vi": "Người yêu nói dối nhưng vì mình", "id": "Pasangan berbohong tapi bohongnya untuk kebaikanmu"}, 0),
      opt({"ko": "연인이 항상 솔직한데 그 솔직함이 때로 상처가 된다", "en": "Your partner is always honest but that honesty sometimes hurts", "ja": "恋人は常に正直だがその正直さが時に傷つく", "zh-CN": "恋人总是诚实但诚实有时伤人", "zh-TW": "戀人總是誠實但誠實有時傷人", "vi": "Người yêu luôn thật thà nhưng đôi khi làm tổn thương", "id": "Pasangan selalu jujur tapi kejujurannya kadang menyakitkan"}, 1),
    ],
  },
  {
    id: 47,
    question: STEM.love,
    options: [
      opt({"ko": "모든 전 연인과 좋은 친구로 지낸다", "en": "Stay good friends with all your exes", "ja": "すべての元恋人と良い友達でいる", "zh-CN": "和所有前任都做好朋友", "zh-TW": "和所有前任都做好朋友", "vi": "Làm bạn tốt với mọi người yêu cũ", "id": "Tetap teman baik dengan semua mantan"}, 0),
      opt({"ko": "모든 전 연인과 완전히 남이 됐다", "en": "Become complete strangers with all your exes", "ja": "すべての元恋人と完全に他人になった", "zh-CN": "和所有前任完全变成陌生人", "zh-TW": "和所有前任完全變成陌生人", "vi": "Trở thành người lạ hoàn toàn với mọi người yêu cũ", "id": "Jadi orang asing sepenuhnya dengan semua mantan"}, 1),
    ],
  },
  {
    id: 48,
    question: STEM.love,
    options: [
      opt({"ko": "사랑이 식어도 함께하는 오랜 관계", "en": "A long relationship even when love fades", "ja": "愛が冷めても一緒にいる長い関係", "zh-CN": "爱情淡了也一起度过的长久关系", "zh-TW": "愛情淡了也一起度過的長久關係", "vi": "Mối quan hệ dài dù tình yêu nguội", "id": "Hubungan panjang meski cinta redup"}, 0),
      opt({"ko": "뜨겁지만 금방 끝나는 짧은 관계", "en": "A hot but short relationship that ends quickly", "ja": "熱いがすぐ終わる短い関係", "zh-CN": "热烈但很快结束的短暂关系", "zh-TW": "熱烈但很快結束的短暫關係", "vi": "Mối quan hệ nồng nhưng chóng tàn", "id": "Hubungan panas tapi singkat dan cepat berakhir"}, 1),
    ],
  },
  {
    id: 49,
    question: STEM.love,
    options: [
      opt({"ko": "이별 통보를 하는 사람", "en": "The one who breaks up with someone", "ja": "別れを告げる側", "zh-CN": "提出分手的人", "zh-TW": "提出分手的人", "vi": "Người chủ động chia tay", "id": "Orang yang mengakhiri hubungan"}, 0),
      opt({"ko": "이별 통보를 받는 사람", "en": "The one who gets broken up with", "ja": "別れを告げられる側", "zh-CN": "被通知分手的人", "zh-TW": "被通知分手的人", "vi": "Người bị báo chia tay", "id": "Orang yang ditinggal"}, 1),
    ],
  },
  {
    id: 50,
    question: STEM.love,
    options: [
      opt({"ko": "내가 더 좋아하는 연애", "en": "A relationship where you like them more", "ja": "自分の方が好きな恋愛", "zh-CN": "你更喜欢对方的恋爱", "zh-TW": "你更喜歡對方的戀愛", "vi": "Yêu mà mình thích nhiều hơn", "id": "Hubungan di mana kamu lebih suka"}, 0),
      opt({"ko": "상대방이 더 좋아하는 연애", "en": "A relationship where they like you more", "ja": "相手の方が好きな恋愛", "zh-CN": "对方更喜欢你的恋爱", "zh-TW": "對方更喜歡你的戀愛", "vi": "Yêu mà đối phương thích mình nhiều hơn", "id": "Hubungan di mana pasangan lebih suka"}, 1),
    ],
  },
  {
    id: 51,
    question: STEM.extreme,
    options: [
      opt({ ko: '자신이 죽는 날짜를 안다', en: 'You know the date you will die', ja: '自分が死ぬ日付を知っている', 'zh-CN': '知道自己死亡的日期', 'zh-TW': '知道自己死亡的日期', vi: 'Biết ngày mình sẽ chết', id: 'Tahu tanggal kematianmu' }, 0),
      opt({ ko: '자신이 죽는 이유를 안다', en: 'You know the reason you will die', ja: '自分が死ぬ理由を知っている', 'zh-CN': '知道自己死亡的原因', 'zh-TW': '知道自己死亡的原因', vi: 'Biết lý do mình sẽ chết', id: 'Tahu alasan kematianmu' }, 1),
    ],
  },
  {
    id: 52,
    question: STEM.extreme,
    options: [
      opt({ ko: '과거로 돌아갈 수 있는데 현재 기억이 모두 사라진다', en: 'You can go back to the past, but lose all your current memories', ja: '過去に戻れるが、現在の記憶がすべて消える', 'zh-CN': '可以回到过去，但会失去所有现在的记忆', 'zh-TW': '可以回到過去，但會失去所有現在的記憶', vi: 'Có thể quay về quá khứ nhưng mất hết ký ức hiện tại', id: 'Bisa kembali ke masa lalu, tapi semua ingatan saat ini hilang' }, 0),
      opt({ ko: '현재에 머무는데 내 과거에 무슨 일이 있었는지 모두 알 수 있다', en: 'You stay in the present, but learn everything that happened in your past', ja: '現在に留まるが、過去に何があったかすべてわかる', 'zh-CN': '留在当下，但能知道过去发生的一切', 'zh-TW': '留在當下，但能知道過去發生的一切', vi: 'Ở lại hiện tại nhưng biết mọi chuyện đã xảy ra trong quá khứ', id: 'Tetap di masa kini, tapi tahu semua yang terjadi di masa lalu' }, 1),
    ],
  },
  {
    id: 53,
    question: STEM.extreme,
    options: [
      opt({ ko: '남의 생각을 읽을 수 있는데 내 생각도 남이 다 읽는다', en: 'You can read others\' minds, but everyone can read yours too', ja: '他人の考えを読めるが、自分の考えもすべて読まれる', 'zh-CN': '能读别人的想法，但别人也能读到你的所有想法', 'zh-TW': '能讀別人的想法，但別人也能讀到你的所有想法', vi: 'Đọc được suy nghĩ người khác, nhưng mọi người cũng đọc được suy nghĩ của bạn', id: 'Bisa membaca pikiran orang lain, tapi pikiranmu juga terbaca semua' }, 0),
      opt({ ko: '생각을 못 읽는 대신 표정으로 내 감정이 모두 드러난다', en: 'You can\'t read minds, but your emotions show completely on your face', ja: '考えは読めない代わりに、表情ですべての感情がバレる', 'zh-CN': '读不了想法，但表情会暴露你所有的情绪', 'zh-TW': '讀不了想法，但表情會暴露你所有的情緒', vi: 'Không đọc được suy nghĩ, nhưng cảm xúc lộ hết qua biểu cảm', id: 'Tidak bisa baca pikiran, tapi emosimu terlihat jelas di wajah' }, 1),
    ],
  },
  {
    id: 54,
    question: STEM.extreme,
    options: [
      opt({ ko: '하늘을 날 수 있는데 통제가 안 된다', en: 'You can fly, but you can\'t control it', ja: '空を飛べるが、コントロールできない', 'zh-CN': '能飞上天，但无法控制', 'zh-TW': '能飛上天，但無法控制', vi: 'Bay được trên trời nhưng không kiểm soát được', id: 'Bisa terbang, tapi tidak bisa mengendalikannya' }, 0),
      opt({ ko: '순간이동을 할 수 있는데 가끔 전혀 엉뚱한 곳으로 간다', en: 'You can teleport, but sometimes end up somewhere completely random', ja: '瞬間移動できるが、たまに全く関係ない場所に行く', 'zh-CN': '能瞬间移动，但偶尔会去到完全不对的地方', 'zh-TW': '能瞬間移動，但偶爾會去到完全不對的地方', vi: 'Dịch chuyển tức thời được, nhưng đôi khi đến chỗ hoàn toàn lạ', id: 'Bisa teleport, tapi kadang muncul di tempat yang sama sekali salah' }, 1),
    ],
  },
  {
    id: 55,
    question: STEM.extreme,
    options: [
      opt({ ko: '세상 모든 사람이 내 이름을 아는데 이유가 좋지 않다', en: 'Everyone in the world knows your name, but for a bad reason', ja: '世界中の人が自分の名前を知っているが、理由は良くない', 'zh-CN': '全世界都知道你的名字，但原因并不光彩', 'zh-TW': '全世界都知道你的名字，但原因並不光彩', vi: 'Cả thế giới biết tên bạn, nhưng vì lý do không hay', id: 'Semua orang di dunia tahu namamu, tapi alasannya buruk' }, 0),
      opt({ ko: '아무도 내 이름을 모르는데 내가 하는 일이 세상을 바꾼다', en: 'Nobody knows your name, but what you do changes the world', ja: '誰も自分の名前を知らないが、自分の仕事が世界を変える', 'zh-CN': '没人知道你的名字，但你做的事改变了世界', 'zh-TW': '沒人知道你的名字，但你做的事改變了世界', vi: 'Không ai biết tên bạn, nhưng việc bạn làm thay đổi thế giới', id: 'Tidak ada yang tahu namamu, tapi pekerjaanmu mengubah dunia' }, 1),
    ],
  },
  {
    id: 56,
    question: STEM.extreme,
    options: [
      opt({ ko: '불로불사인데 사랑하는 모든 사람이 나보다 먼저 죽는다', en: 'You are immortal, but everyone you love dies before you', ja: '不老不死だが、愛する人はすべて自分より先に死ぬ', 'zh-CN': '长生不老，但所有你爱的人都比你先死', 'zh-TW': '長生不老，但所有你愛的人都比你先死', vi: 'Bất tử, nhưng mọi người bạn yêu đều chết trước bạn', id: 'Abadi, tapi semua orang yang kamu cintai mati lebih dulu' }, 0),
      opt({ ko: '평범하게 살다 죽는데 사랑하는 사람들보다 먼저 죽는다', en: 'You live an ordinary life and die, but before the people you love', ja: '普通に生きて死ぬが、愛する人たちより先に死ぬ', 'zh-CN': '平凡地活着然后死去，但比所爱的人先走', 'zh-TW': '平凡地活著然後死去，但比所愛的人先走', vi: 'Sống bình thường rồi chết, nhưng trước những người bạn yêu', id: 'Hidup biasa lalu mati, tapi lebih dulu dari orang yang kamu cintai' }, 1),
    ],
  },
  {
    id: 57,
    question: STEM.extreme,
    options: [
      opt({ ko: '꿈에서 무엇이든 할 수 있는데 잠에서 깨면 꿈이 현실보다 훨씬 좋다', en: 'You can do anything in dreams, but waking up makes reality feel much worse', ja: '夢では何でもできるが、目覚めると現実の方がずっと劣る', 'zh-CN': '梦里什么都能做，但醒来后发现现实比梦差太多', 'zh-TW': '夢裡什麼都能做，但醒來後發現現實比夢差太多', vi: 'Trong mơ làm gì cũng được, nhưng tỉnh dậy thì thực tế tệ hơn nhiều', id: 'Di mimpi bisa apa saja, tapi bangun tidur dan realitas jauh lebih buruk' }, 0),
      opt({ ko: '꿈을 꾸지 않는 대신 현실이 항상 즐겁다', en: 'You never dream, but reality is always enjoyable', ja: '夢を見ない代わりに、現実がいつも楽しい', 'zh-CN': '不做梦，但现实总是令人愉快', 'zh-TW': '不做夢，但現實總是令人愉快', vi: 'Không mơ, nhưng thực tế luôn vui vẻ', id: 'Tidak pernah bermimpi, tapi realitas selalu menyenangkan' }, 1),
    ],
  },
  {
    id: 58,
    question: STEM.extreme,
    options: [
      opt({ ko: '세상 모든 사람이 나를 좋아하는데 다 얕은 관계다', en: 'Everyone in the world likes you, but all the relationships are shallow', ja: '世界中の人が自分を好きだが、すべて浅い関係', 'zh-CN': '全世界都喜欢你，但都是肤浅的关系', 'zh-TW': '全世界都喜歡你，但都是膚淺的關係', vi: 'Cả thế giới thích bạn, nhưng mối quan hệ đều nông cạn', id: 'Semua orang di dunia menyukaimu, tapi hubungannya dangkal semua' }, 0),
      opt({ ko: '단 3명만 나를 진심으로 사랑한다', en: 'Only 3 people truly love you', ja: 'たった3人だけが心から自分を愛している', 'zh-CN': '只有3个人真心爱你', 'zh-TW': '只有3個人真心愛你', vi: 'Chỉ 3 người thật sự yêu bạn', id: 'Hanya 3 orang yang benar-benar mencintaimu' }, 1),
    ],
  },
  {
    id: 59,
    question: STEM.extreme,
    options: [
      opt({ ko: '원하는 것을 무엇이든 이룰 수 있는데 시간이 10년씩 걸린다', en: 'You can achieve anything you want, but each wish takes 10 years', ja: '望むことは何でも叶うが、1つにつき10年かかる', 'zh-CN': '想要什么都能实现，但每样都要花10年', 'zh-TW': '想要什麼都能實現，但每樣都要花10年', vi: 'Muốn gì cũng đạt được, nhưng mỗi điều mất 10 năm', id: 'Bisa capai apa pun yang kamu mau, tapi butuh 10 tahun per keinginan' }, 0),
      opt({ ko: '바로 이룰 수 있는데 원하는 것 중 절반만 된다', en: 'You get it instantly, but only half of what you want comes true', ja: 'すぐ叶うが、望むものの半分しか叶わない', 'zh-CN': '立刻就能实现，但只能得到想要的一半', 'zh-TW': '立刻就能實現，但只能得到想要的一半', vi: 'Đạt ngay lập tức, nhưng chỉ được một nửa những gì muốn', id: 'Langsung tercapai, tapi hanya setengah dari yang kamu inginkan' }, 1),
    ],
  },
  {
    id: 60,
    question: STEM.extreme,
    options: [
      opt({ ko: '내 인생이 드라마가 됐는데 내가 악당이다', en: 'Your life becomes a drama, but you\'re the villain', ja: '自分の人生がドラマになったが、自分が悪役', 'zh-CN': '你的人生变成了电视剧，但你是反派', 'zh-TW': '你的人生變成了電視劇，但你是反派', vi: 'Cuộc đời bạn thành phim, nhưng bạn là phản diện', id: 'Hidupmu jadi drama, tapi kamu jadi penjahatnya' }, 0),
      opt({ ko: '내가 주인공인데 드라마가 대폭망한다', en: 'You\'re the main character, but the drama is a huge flop', ja: '自分が主人公だが、ドラマは大コケする', 'zh-CN': '你是主角，但这部剧大扑街', 'zh-TW': '你是主角，但這部劇大撲街', vi: 'Bạn là nhân vật chính, nhưng phim thất bại thảm hại', id: 'Kamu jadi protagonis, tapi dramanya gagal total' }, 1),
    ],
  },
  {
    id: 61,
    question: STEM.extreme,
    options: [
      opt({ ko: '기억력이 완벽해서 모든 것을 기억한다', en: 'You have perfect memory and remember everything', ja: '記憶力が完璧で、すべてを覚えている', 'zh-CN': '记忆力完美，什么都记得', 'zh-TW': '記憶力完美，什麼都記得', vi: 'Trí nhớ hoàn hảo, nhớ mọi thứ', id: 'Ingatan sempurna, ingat semuanya' }, 0),
      opt({ ko: '기억력이 없어서 매일 새롭게 시작한다', en: 'You have no memory and start fresh every day', ja: '記憶力がなく、毎日新しく始める', 'zh-CN': '没有记忆力，每天都重新开始', 'zh-TW': '沒有記憶力，每天都重新開始', vi: 'Không có trí nhớ, mỗi ngày bắt đầu lại từ đầu', id: 'Tidak punya ingatan, setiap hari mulai dari nol' }, 1),
    ],
  },
  {
    id: 62,
    question: STEM.extreme,
    options: [
      opt({ ko: '진실만 말할 수 있는데 듣기 싫은 말도 해야 한다', en: 'You can only tell the truth, even things people don\'t want to hear', ja: '真実しか言えないが、聞きたくないことも言わなければならない', 'zh-CN': '只能说真话，包括别人不想听的话', 'zh-TW': '只能說真話，包括別人不想聽的話', vi: 'Chỉ nói được sự thật, kể cả điều người khác không muốn nghe', id: 'Hanya bisa jujur, termasuk hal yang tidak ingin didengar orang' }, 0),
      opt({ ko: '거짓말을 할 수 있는데 항상 들킨다', en: 'You can lie, but you always get caught', ja: '嘘がつけるが、必ずバレる', 'zh-CN': '可以说谎，但总会被拆穿', 'zh-TW': '可以說謊，但總會被拆穿', vi: 'Nói dối được, nhưng luôn bị phát hiện', id: 'Bisa berbohong, tapi selalu ketahuan' }, 1),
    ],
  },
  {
    id: 63,
    question: STEM.extreme,
    options: [
      opt({ ko: '1년 동안 세계여행을 하는데 완전히 혼자다', en: 'You travel the world for a year, completely alone', ja: '1年間世界旅行するが、完全に一人', 'zh-CN': '环游世界一年，但完全独自一人', 'zh-TW': '環遊世界一年，但完全獨自一人', vi: 'Du lịch thế giới một năm, hoàn toàn một mình', id: 'Jalan-jalan dunia selama setahun, sepenuhnya sendirian' }, 0),
      opt({ ko: '1년 동안 집에만 있는데 가장 좋아하는 사람들과 함께다', en: 'You stay home for a year, but with the people you love most', ja: '1年間家にいるが、一番好きな人たちと一緒', 'zh-CN': '待在家一整年，但和最爱的人在一起', 'zh-TW': '待在家一整年，但和最愛的人在一起', vi: 'Ở nhà cả năm, nhưng bên những người bạn yêu nhất', id: 'Tinggal di rumah setahun, tapi bersama orang-orang tersayang' }, 1),
    ],
  },
  {
    id: 64,
    question: STEM.extreme,
    options: [
      opt({ ko: '내가 원하는 유명인을 만날 수 있는데 그 사람이 나를 전혀 좋아하지 않는다', en: 'You can meet any celebrity you want, but they don\'t like you at all', ja: '好きな有名人に会えるが、相手は自分を全く好きじゃない', 'zh-CN': '能见到任何想见的明星，但对方完全不喜欢你', 'zh-TW': '能見到任何想見的明星，但對方完全不喜歡你', vi: 'Gặp được celeb bạn muốn, nhưng họ không hề thích bạn', id: 'Bisa ketemu selebritas impian, tapi dia sama sekali tidak suka kamu' }, 0),
      opt({ ko: '만날 수 없는데 그 사람이 나를 엄청나게 좋아한다', en: 'You can\'t meet them, but they adore you from afar', ja: '会えないが、相手は自分をとても好き', 'zh-CN': '见不到面，但对方非常喜欢你', 'zh-TW': '見不到面，但對方非常喜歡你', vi: 'Không gặp được, nhưng họ cực kỳ thích bạn', id: 'Tidak bisa ketemu, tapi dia sangat menyukaimu' }, 1),
    ],
  },
  {
    id: 65,
    question: STEM.extreme,
    options: [
      opt({ ko: '세상 모든 언어를 할 수 있는데 모국어를 잃는다', en: 'You can speak every language, but lose your native tongue', ja: '世界中の言語が話せるが、母国語を失う', 'zh-CN': '会说世界上所有语言，但失去母语', 'zh-TW': '會說世界上所有語言，但失去母語', vi: 'Nói được mọi ngôn ngữ trên đời, nhưng mất tiếng mẹ đẻ', id: 'Bisa bicara semua bahasa di dunia, tapi kehilangan bahasa ibu' }, 0),
      opt({ ko: '모국어 하나만 할 수 있는데 누구와도 완벽하게 소통이 된다', en: 'You only speak your native language, but communicate perfectly with anyone', ja: '母国語しか話せないが、誰とでも完璧にコミュニケーションできる', 'zh-CN': '只会母语，但能和任何人完美沟通', 'zh-TW': '只會母語，但能與任何人完美溝通', vi: 'Chỉ biết tiếng mẹ đẻ, nhưng giao tiếp hoàn hảo với ai cũng được', id: 'Hanya bisa bahasa ibu, tapi komunikasi sempurna dengan siapa pun' }, 1),
    ],
  },
  {
    id: 66,
    question: STEM.extreme,
    options: [
      opt({ ko: '잠을 자지 않아도 되는 대신 꿈을 꿀 수 없다', en: 'You never need sleep, but you can\'t dream', ja: '眠らなくてもいいが、夢を見られない', 'zh-CN': '不用睡觉，但无法做梦', 'zh-TW': '不用睡覺，但無法做夢', vi: 'Không cần ngủ, nhưng không thể mơ', id: 'Tidak perlu tidur, tapi tidak bisa bermimpi' }, 0),
      opt({ ko: '하루 12시간을 자야 하는 대신 꿈이 현실처럼 생생하다', en: 'You must sleep 12 hours a day, but your dreams feel as vivid as reality', ja: '1日12時間寝なければならないが、夢が現実のようにリアル', 'zh-CN': '每天要睡12小时，但梦像现实一样真实', 'zh-TW': '每天要睡12小時，但夢像現實一樣真實', vi: 'Phải ngủ 12 tiếng mỗi ngày, nhưng giấc mơ sống động như thật', id: 'Harus tidur 12 jam sehari, tapi mimpimu sejelas realitas' }, 1),
    ],
  },
  {
    id: 67,
    question: STEM.extreme,
    options: [
      opt({ ko: '원하는 외모를 가질 수 있는데 건강이 나빠진다', en: 'You can have any appearance you want, but your health suffers', ja: '望む外見になれるが、健康が悪くなる', 'zh-CN': '拥有想要的外貌，但健康变差', 'zh-TW': '擁有想要的外貌，但健康變差', vi: 'Có ngoại hình như ý, nhưng sức khỏe tệ đi', id: 'Bisa punya penampilan impian, tapi kesehatan memburuk' }, 0),
      opt({ ko: '완벽하게 건강한 대신 외모에 평생 만족하지 못한다', en: 'You\'re perfectly healthy, but never satisfied with your looks', ja: '完璧に健康だが、外見に一生満足できない', 'zh-CN': '身体完全健康，但一辈子对外貌不满意', 'zh-TW': '身體完全健康，但一輩子對外貌不滿意', vi: 'Khỏe mạnh hoàn hảo, nhưng cả đời không hài lòng với ngoại hình', id: 'Sehat sempurna, tapi seumur hidup tidak puas dengan penampilan' }, 1),
    ],
  },
  {
    id: 68,
    question: STEM.extreme,
    options: [
      opt({ ko: '세상에서 가장 부유하게 사는데 아무도 나를 모른다', en: 'You live as the richest person alive, but nobody knows you', ja: '世界一裕福に暮らすが、誰も自分を知らない', 'zh-CN': '成为世界上最富有的人，但没人认识你', 'zh-TW': '成為世界上最富有的人，但沒人認識你', vi: 'Sống giàu nhất thế giới, nhưng không ai biết bạn', id: 'Hidup sebagai orang terkaya di dunia, tapi tidak ada yang kenal' }, 0),
      opt({ ko: '세상에서 가장 유명한데 가난하다', en: 'You\'re the most famous person alive, but you\'re poor', ja: '世界一有名だが、貧しい', 'zh-CN': '成为世界上最出名的人，但很穷', 'zh-TW': '成為世界上最出名的人，但很窮', vi: 'Nổi tiếng nhất thế giới, nhưng nghèo', id: 'Terkenal di seluruh dunia, tapi miskin' }, 1),
    ],
  },
  {
    id: 69,
    question: STEM.extreme,
    options: [
      opt({ ko: '시간을 멈출 수 있는데 나도 같이 멈춘다', en: 'You can stop time, but you stop too', ja: '時間を止められるが、自分も一緒に止まる', 'zh-CN': '能停止时间，但自己也一起停住', 'zh-TW': '能停止時間，但自己也一起停住', vi: 'Dừng thời gian được, nhưng bạn cũng dừng theo', id: 'Bisa hentikan waktu, tapi kamu ikut berhenti' }, 0),
      opt({ ko: '시간을 되돌릴 수 있는데 10년씩 돌아간다', en: 'You can rewind time, but only 10 years at a time', ja: '時間を戻せるが、10年ずつ戻る', 'zh-CN': '能倒流时间，但每次只能回到10年前', 'zh-TW': '能倒流時間，但每次只能回到10年前', vi: 'Quay ngược thời gian được, nhưng mỗi lần lùi 10 năm', id: 'Bisa putar balik waktu, tapi 10 tahun setiap kali' }, 1),
    ],
  },
  {
    id: 70,
    question: STEM.extreme,
    options: [
      opt({ ko: '내가 원하는 삶을 사는데 죽을 때 혼자다', en: 'You live the life you want, but die alone', ja: '望む人生を生きるが、死ぬときは一人', 'zh-CN': '过想要的人生，但临终时独自一人', 'zh-TW': '過想要的人生，但臨終時獨自一人', vi: 'Sống đời như ý, nhưng lúc chết thì một mình', id: 'Hidup impianmu, tapi mati sendirian' }, 0),
      opt({ ko: '원하는 삶이 아닌데 죽을 때 사랑하는 사람들이 곁에 있다', en: 'You don\'t live the life you want, but loved ones are by your side when you die', ja: '望む人生ではないが、死ぬとき愛する人がそばにいる', 'zh-CN': '不是想要的人生，但临终时有爱的人陪伴', 'zh-TW': '不是想要的人生，但臨終時有愛的人陪伴', vi: 'Không phải đời mình muốn, nhưng lúc chết có người thương bên cạnh', id: 'Bukan hidup impian, tapi orang tersayang ada di samping saat mati' }, 1),
    ],
  },
  {
    id: 71,
    question: STEM.sense,
    options: [
      opt({ ko: '평생 좋아하는 음악만 들을 수 있는데 단 3곡뿐이다', en: 'You can only listen to music you love, but just 3 songs forever', ja: '好きな音楽しか聴けないが、3曲だけ', 'zh-CN': '一辈子只能听喜欢的音乐，但只有3首', 'zh-TW': '一輩子只能聽喜歡的音樂，但只有3首', vi: 'Cả đời chỉ nghe nhạc yêu thích, nhưng chỉ 3 bài', id: 'Seumur hidup hanya dengar musik favorit, tapi cuma 3 lagu' }, 0),
      opt({ ko: '음악을 전혀 못 듣는다', en: 'You can\'t listen to music at all', ja: '音楽が全く聴けない', 'zh-CN': '完全听不了音乐', 'zh-TW': '完全聽不了音樂', vi: 'Hoàn toàn không nghe được nhạc', id: 'Sama sekali tidak bisa dengar musik' }, 1),
    ],
  },
  {
    id: 72,
    question: STEM.sense,
    options: [
      opt({ ko: '색깔을 볼 수 없는데 모든 소리가 선명하다', en: 'You can\'t see colors, but every sound is crystal clear', ja: '色が見えないが、すべての音がクリア', 'zh-CN': '看不到颜色，但所有声音都清晰无比', 'zh-TW': '看不到顏色，但所有聲音都清晰無比', vi: 'Không thấy màu sắc, nhưng mọi âm thanh đều trong trẻo', id: 'Tidak bisa lihat warna, tapi semua suara jernih' }, 0),
      opt({ ko: '색깔은 볼 수 있는데 소리가 항상 왜곡돼 들린다', en: 'You can see colors, but sounds always come out distorted', ja: '色は見えるが、音が常に歪んで聞こえる', 'zh-CN': '能看到颜色，但声音总是失真', 'zh-TW': '能看到顏色，但聲音總是失真', vi: 'Thấy được màu sắc, nhưng âm thanh luôn bị méo', id: 'Bisa lihat warna, tapi suara selalu terdistorsi' }, 1),
    ],
  },
  {
    id: 73,
    question: STEM.sense,
    options: [
      opt({ ko: '좋아하는 영화·드라마의 결말을 항상 미리 안다', en: 'You always know the ending of your favorite movies and shows in advance', ja: '好きな映画・ドラマの結末を常に事前に知っている', 'zh-CN': '总能提前知道喜欢的电影和剧集结局', 'zh-TW': '總能提前知道喜歡的電影和劇集結局', vi: 'Luôn biết trước kết thúc phim/drama yêu thích', id: 'Selalu tahu ending film/drama favorit sebelumnya' }, 0),
      opt({ ko: '결말을 모르는데 항상 최악의 결말이다', en: 'You never know the ending, but it\'s always the worst one', ja: '結末は知らないが、常に最悪の結末', 'zh-CN': '不知道结局，但总是最烂的结局', 'zh-TW': '不知道結局，但總是最爛的結局', vi: 'Không biết kết, nhưng luôn là kết cục tệ nhất', id: 'Tidak tahu ending, tapi selalu ending terburuk' }, 1),
    ],
  },
  {
    id: 74,
    question: STEM.sense,
    options: [
      opt({ ko: '항상 덥게 느껴지지만 추위를 못 느낀다', en: 'You always feel hot, but never feel cold', ja: '常に暑く感じるが、寒さを感じない', 'zh-CN': '总觉得热，但感受不到冷', 'zh-TW': '總覺得熱，但感受不到冷', vi: 'Luôn cảm thấy nóng, nhưng không cảm nhận được lạnh', id: 'Selalu merasa panas, tapi tidak merasakan dingin' }, 0),
      opt({ ko: '항상 춥게 느껴지지만 더위를 못 느낀다', en: 'You always feel cold, but never feel hot', ja: '常に寒く感じるが、暑さを感じない', 'zh-CN': '总觉得冷，但感受不到热', 'zh-TW': '總覺得冷，但感受不到熱', vi: 'Luôn cảm thấy lạnh, nhưng không cảm nhận được nóng', id: 'Selalu merasa dingin, tapi tidak merasakan panas' }, 1),
    ],
  },
  {
    id: 75,
    question: STEM.sense,
    options: [
      opt({ ko: '그림을 전혀 못 그리는데 음악적 재능이 천재 수준이다', en: 'You can\'t draw at all, but your musical talent is genius-level', ja: '絵が全く描けないが、音楽の才能は天才級', 'zh-CN': '完全不会画画，但音乐天赋是天才级别', 'zh-TW': '完全不會畫畫，但音樂天賦是天才級別', vi: 'Không vẽ được gì, nhưng tài năng âm nhạc ở mức thiên tài', id: 'Sama sekali tidak bisa gambar, tapi bakat musik setara jenius' }, 0),
      opt({ ko: '음악적 재능이 0인데 그림을 천재처럼 그린다', en: 'You have zero musical talent, but draw like a genius', ja: '音楽の才能はゼロだが、絵を天才のように描く', 'zh-CN': '音乐天赋为零，但画画像天才一样', 'zh-TW': '音樂天賦為零，但畫畫像天才一樣', vi: 'Tài năng âm nhạc bằng 0, nhưng vẽ như thiên tài', id: 'Bakat musik nol, tapi menggambar seperti jenius' }, 1),
    ],
  },
  {
    id: 76,
    question: STEM.sense,
    options: [
      opt({ ko: '좋아하는 향기가 평생 사라진다', en: 'Your favorite scents disappear forever', ja: '好きな香りが一生消える', 'zh-CN': '喜欢的香味永远消失', 'zh-TW': '喜歡的香味永遠消失', vi: 'Mùi hương yêu thích biến mất mãi mãi', id: 'Aroma favorit hilang selamanya' }, 0),
      opt({ ko: '싫어하는 냄새가 평생 따라다닌다', en: 'A smell you hate follows you for life', ja: '嫌いな臭いが一生ついて回る', 'zh-CN': '讨厌的气味一辈子跟着你', 'zh-TW': '討厭的氣味一輩子跟著你', vi: 'Mùi ghét bám theo bạn cả đời', id: 'Bau yang kamu benci mengejarmu seumur hidup' }, 1),
    ],
  },
  {
    id: 77,
    question: STEM.sense,
    options: [
      opt({ ko: '잠들 때마다 항상 악몽을 꾼다', en: 'You always have nightmares when you sleep', ja: '眠るたびに必ず悪夢を見る', 'zh-CN': '每次睡觉都做噩梦', 'zh-TW': '每次睡覺都做噩夢', vi: 'Mỗi lần ngủ đều gặp ác mộng', id: 'Setiap tidur selalu mimpi buruk' }, 0),
      opt({ ko: '잠들 때마다 행복한 꿈을 꾸는데 깨고 나면 현실이 더 싫어진다', en: 'You always have happy dreams, but waking up makes reality feel worse', ja: '眠るたびに幸せな夢を見るが、目覚めると現実がもっと嫌になる', 'zh-CN': '每次睡觉都做美梦，但醒来后对现实更厌恶', 'zh-TW': '每次睡覺都做美夢，但醒來後對現實更厭惡', vi: 'Mỗi lần ngủ đều mơ đẹp, nhưng tỉnh dậy thì ghét thực tế hơn', id: 'Setiap tidur mimpi indah, tapi bangun tidur realitas terasa lebih buruk' }, 1),
    ],
  },
  {
    id: 78,
    question: STEM.sense,
    options: [
      opt({ ko: '웃음을 잃는 대신 절대 울지 않는다', en: 'You lose the ability to laugh, but never cry', ja: '笑えなくなる代わりに、絶対に泣かない', 'zh-CN': '失去笑容，但永远不会哭', 'zh-TW': '失去笑容，但永遠不會哭', vi: 'Mất khả năng cười, nhưng không bao giờ khóc', id: 'Kehilangan tawa, tapi tidak pernah menangis' }, 0),
      opt({ ko: '울음을 잃는 대신 언제 어디서든 웃음이 나온다', en: 'You lose the ability to cry, but laugh anywhere, anytime', ja: '泣けなくなる代わりに、いつどこでも笑ってしまう', 'zh-CN': '失去哭泣，但随时随地都会笑', 'zh-TW': '失去哭泣，但隨時隨地都會笑', vi: 'Mất khả năng khóc, nhưng cười mọi lúc mọi nơi', id: 'Kehilangan tangis, tapi tertawa kapan saja di mana saja' }, 1),
    ],
  },
  {
    id: 79,
    question: STEM.sense,
    options: [
      opt({ ko: '세상에서 가장 아름다운 것을 보는 대신 눈이 점점 나빠진다', en: 'You see the most beautiful things in the world, but your eyesight keeps getting worse', ja: '世界で最も美しいものが見える代わりに、視力がどんどん悪くなる', 'zh-CN': '能看到世上最美的东西，但视力越来越差', 'zh-TW': '能看到世上最美的東西，但視力越來越差', vi: 'Nhìn thấy điều đẹp nhất thế giới, nhưng mắt ngày càng kém', id: 'Melihat hal tercantik di dunia, tapi penglihatan makin buruk' }, 0),
      opt({ ko: '시력이 완벽한 대신 아름다운 것을 전혀 느끼지 못한다', en: 'You have perfect eyesight, but can\'t feel beauty at all', ja: '視力は完璧だが、美しさを全く感じられない', 'zh-CN': '视力完美，但完全感受不到美', 'zh-TW': '視力完美，但完全感受不到美', vi: 'Thị lực hoàn hảo, nhưng không cảm nhận được vẻ đẹp', id: 'Penglihatan sempurna, tapi tidak bisa merasakan keindahan' }, 1),
    ],
  },
  {
    id: 80,
    question: STEM.sense,
    options: [
      opt({ ko: '좋아하는 것들이 하나씩 지루해진다', en: 'Things you love become boring one by one', ja: '好きなものが一つずつ退屈になる', 'zh-CN': '喜欢的东西一个个变得无聊', 'zh-TW': '喜歡的東西一個個變得無聊', vi: 'Những thứ bạn thích dần trở nên nhàm chán', id: 'Hal favoritmu jadi membosankan satu per satu' }, 0),
      opt({ ko: '싫어하는 것들이 하나씩 좋아진다', en: 'Things you hate become likable one by one', ja: '嫌いなものが一つずつ好きになる', 'zh-CN': '讨厌的东西一个个变得喜欢', 'zh-TW': '討厭的東西一個個變得喜歡', vi: 'Những thứ bạn ghét dần trở nên thích', id: 'Hal yang kamu benci jadi disukai satu per satu' }, 1),
    ],
  },
  {
    id: 81,
    question: STEM.sense,
    options: [
      opt({ ko: '항상 같은 음악이 머릿속에서 흘러나오는데 멈출 수 없다', en: 'The same song always plays in your head and you can\'t stop it', ja: '常に同じ音楽が頭の中で流れ、止められない', 'zh-CN': '同一首歌一直在脑海里播放，停不下来', 'zh-TW': '同一首歌一直在腦海裡播放，停不下來', vi: 'Cùng một bài nhạc luôn vang trong đầu, không tắt được', id: 'Lagu yang sama terus diputar di kepala, tidak bisa berhenti' }, 0),
      opt({ ko: '음악을 전혀 느끼지 못한다', en: 'You can\'t feel music at all', ja: '音楽を全く感じられない', 'zh-CN': '完全感受不到音乐', 'zh-TW': '完全感受不到音樂', vi: 'Hoàn toàn không cảm nhận được âm nhạc', id: 'Sama sekali tidak bisa merasakan musik' }, 1),
    ],
  },
  {
    id: 82,
    question: STEM.sense,
    options: [
      opt({ ko: '책을 읽을 수 없는데 모든 내용을 들으면 완벽하게 기억한다', en: 'You can\'t read books, but remember everything perfectly when you hear it', ja: '本が読めないが、聞けばすべて完璧に覚える', 'zh-CN': '不能读书，但听到内容就能完美记住', 'zh-TW': '不能讀書，但聽到內容就能完美記住', vi: 'Không đọc sách được, nhưng nghe là nhớ hoàn hảo', id: 'Tidak bisa baca buku, tapi ingat sempurna kalau didengar' }, 0),
      opt({ ko: '책을 읽을 수 있는데 읽자마자 모두 잊어버린다', en: 'You can read books, but forget everything right after', ja: '本は読めるが、読んだらすぐ全部忘れる', 'zh-CN': '能读书，但读完立刻全忘', 'zh-TW': '能讀書，但讀完立刻全忘', vi: 'Đọc sách được, nhưng đọc xong quên sạch', id: 'Bisa baca buku, tapi langsung lupa semua setelah dibaca' }, 1),
    ],
  },
  {
    id: 83,
    question: STEM.sense,
    options: [
      opt({ ko: '평생 한 장르의 영화·드라마만 볼 수 있다', en: 'You can only watch one genre of movies and shows for life', ja: '一生一つのジャンルの映画・ドラマしか見られない', 'zh-CN': '一辈子只能看一种类型的影视', 'zh-TW': '一輩子只能看一種類型的影視', vi: 'Cả đời chỉ xem một thể loại phim/drama', id: 'Seumur hidup hanya nonton satu genre film/drama' }, 0),
      opt({ ko: '평생 영화·드라마를 못 보는 대신 그 시간에 무엇이든 할 수 있다', en: 'You can never watch movies or shows, but can do anything else with that time', ja: '一生映画・ドラマが見られない代わりに、その時間に何でもできる', 'zh-CN': '一辈子不能看影视，但那段时间可以做任何事', 'zh-TW': '一輩子不能看影視，但那段時間可以做任何事', vi: 'Cả đời không xem phim/drama, nhưng dùng thời gian đó làm gì cũng được', id: 'Seumur hidup tidak nonton film/drama, tapi waktu itu bebas dipakai' }, 1),
    ],
  },
  {
    id: 84,
    question: STEM.sense,
    options: [
      opt({ ko: '나이가 들수록 감각이 예민해진다', en: 'Your senses grow sharper as you age', ja: '年を取るほど感覚が鋭くなる', 'zh-CN': '年纪越大感官越敏锐', 'zh-TW': '年紀越大感官越敏銳', vi: 'Càng già càng nhạy cảm hơn', id: 'Semakin tua, indra semakin tajam' }, 0),
      opt({ ko: '나이가 들수록 감각이 무뎌진다', en: 'Your senses grow duller as you age', ja: '年を取るほど感覚が鈍くなる', 'zh-CN': '年纪越大感官越迟钝', 'zh-TW': '年紀越大感官越遲鈍', vi: 'Càng già càng trơ đi', id: 'Semakin tua, indra semakin tumpul' }, 1),
    ],
  },
  {
    id: 85,
    question: STEM.sense,
    options: [
      opt({ ko: '손이 없어도 발로 모든 것을 할 수 있다', en: 'Even without hands, you can do everything with your feet', ja: '手がなくても足ですべてできる', 'zh-CN': '没有手也能用脚做一切', 'zh-TW': '沒有手也能用腳做一切', vi: 'Không có tay vẫn làm mọi thứ bằng chân', id: 'Tanpa tangan, bisa lakukan semua dengan kaki' }, 0),
      opt({ ko: '발이 없어도 손으로 모든 것을 할 수 있다', en: 'Even without feet, you can do everything with your hands', ja: '足がなくても手ですべてできる', 'zh-CN': '没有脚也能用手做一切', 'zh-TW': '沒有腳也能用手做一切', vi: 'Không có chân vẫn làm mọi thứ bằng tay', id: 'Tanpa kaki, bisa lakukan semua dengan tangan' }, 1),
    ],
  },
  {
    id: 86,
    question: STEM.work,
    options: [
      opt({ ko: '평생 좋아하는 일을 하는데 아무도 알아주지 않는다', en: 'You do what you love for life, but nobody recognizes it', ja: '一生好きな仕事をするが、誰も認めてくれない', 'zh-CN': '一辈子做喜欢的工作，但没人认可', 'zh-TW': '一輩子做喜歡的工作，但沒人認可', vi: 'Cả đời làm việc yêu thích, nhưng không ai công nhận', id: 'Seumur hidup kerja impian, tapi tidak ada yang mengakui' }, 0),
      opt({ ko: '아무도 안 좋아하는 일을 하는데 모두가 인정한다', en: 'You do work nobody likes, but everyone acknowledges it', ja: '誰も好きじゃない仕事をするが、みんな認める', 'zh-CN': '做没人喜欢的工作，但所有人都认可', 'zh-TW': '做沒人喜歡的工作，但所有人都認可', vi: 'Làm việc không ai thích, nhưng mọi người đều công nhận', id: 'Kerja yang tidak disukai siapa pun, tapi semua orang mengakui' }, 1),
    ],
  },
  {
    id: 87,
    question: STEM.work,
    options: [
      opt({ ko: '완벽한 동료들과 일하는데 상사가 최악이다', en: 'You work with perfect coworkers, but your boss is the worst', ja: '完璧な同僚と働くが、上司が最悪', 'zh-CN': '同事完美，但上司最差', 'zh-TW': '同事完美，但上司最差', vi: 'Đồng nghiệp hoàn hảo, nhưng sếp tệ nhất', id: 'Rekan kerja sempurna, tapi bosnya terburuk' }, 0),
      opt({ ko: '완벽한 상사와 일하는데 동료들이 최악이다', en: 'You work with a perfect boss, but your coworkers are the worst', ja: '完璧な上司と働くが、同僚が最悪', 'zh-CN': '上司完美，但同事最差', 'zh-TW': '上司完美，但同事最差', vi: 'Sếp hoàn hảo, nhưng đồng nghiệp tệ nhất', id: 'Bos sempurna, tapi rekan kerja terburuk' }, 1),
    ],
  },
  {
    id: 88,
    question: STEM.work,
    options: [
      opt({ ko: '재택근무인데 항상 야근이다', en: 'You work from home, but always do overtime', ja: '在宅勤務だが、常に残業', 'zh-CN': '远程办公，但总是加班', 'zh-TW': '遠距辦公，但總是加班', vi: 'Làm việc tại nhà, nhưng luôn tăng ca', id: 'Kerja remote, tapi selalu lembur' }, 0),
      opt({ ko: '출근해야 하는데 칼퇴가 100% 보장된다', en: 'You must commute to work, but leaving on time is 100% guaranteed', ja: '出社しなければならないが、定時退社が100%保証される', 'zh-CN': '必须通勤上班，但准点下班100%保证', 'zh-TW': '必須通勤上班，但準時下班100%保證', vi: 'Phải đi làm văn phòng, nhưng tan ca đúng giờ 100%', id: 'Harus ke kantor, tapi pulang tepat waktu 100% dijamin' }, 1),
    ],
  },
  {
    id: 89,
    question: STEM.work,
    options: [
      opt({ ko: '승진했는데 팀원들이 나를 싫어하게 됐다', en: 'You got promoted, but your teammates started disliking you', ja: '昇進したが、チームメンバーに嫌われた', 'zh-CN': '升职了，但团队成员开始讨厌你', 'zh-TW': '升職了，但團隊成員開始討厭你', vi: 'Được thăng chức, nhưng đồng đội bắt đầu ghét bạn', id: 'Naik jabatan, tapi rekan tim mulai tidak suka kamu' }, 0),
      opt({ ko: '팀원들이 나를 좋아하는데 승진을 못 한다', en: 'Your teammates like you, but you can\'t get promoted', ja: 'チームメンバーに好かれているが、昇進できない', 'zh-CN': '团队成员喜欢你，但无法升职', 'zh-TW': '團隊成員喜歡你，但無法升職', vi: 'Đồng đội thích bạn, nhưng không thể thăng chức', id: 'Rekan tim suka kamu, tapi tidak bisa naik jabatan' }, 1),
    ],
  },
  {
    id: 90,
    question: STEM.work,
    options: [
      opt({ ko: '내 아이디어가 채택됐는데 다른 사람 이름으로 발표된다', en: 'Your idea gets adopted, but presented under someone else\'s name', ja: '自分のアイデアが採用されたが、他人の名前で発表される', 'zh-CN': '你的想法被采纳，但以别人的名字发布', 'zh-TW': '你的想法被採納，但以別人的名字發布', vi: 'Ý tưởng được chọn, nhưng công bố dưới tên người khác', id: 'Ide kamu dipakai, tapi diumumkan atas nama orang lain' }, 0),
      opt({ ko: '내 이름으로 발표됐는데 결과가 실패한다', en: 'It\'s presented under your name, but the result is a failure', ja: '自分の名前で発表されたが、結果は失敗', 'zh-CN': '以你的名字发布，但结果失败了', 'zh-TW': '以你的名字發布，但結果失敗了', vi: 'Công bố dưới tên bạn, nhưng kết quả thất bại', id: 'Diumumkan atas namamu, tapi hasilnya gagal' }, 1),
    ],
  },
  {
    id: 91,
    question: STEM.work,
    options: [
      opt({ ko: '연봉은 높은데 하는 일이 아무 의미가 없다', en: 'Your salary is high, but your work means nothing', ja: '年収は高いが、仕事に意味がない', 'zh-CN': '薪水很高，但工作毫无意义', 'zh-TW': '薪水很高，但工作毫無意義', vi: 'Lương cao, nhưng công việc vô nghĩa', id: 'Gaji tinggi, tapi pekerjaan tidak ada artinya' }, 0),
      opt({ ko: '연봉은 낮은데 하는 일이 세상을 바꾼다', en: 'Your salary is low, but your work changes the world', ja: '年収は低いが、仕事が世界を変える', 'zh-CN': '薪水很低，但工作改变了世界', 'zh-TW': '薪水很低，但工作改變了世界', vi: 'Lương thấp, nhưng công việc thay đổi thế giới', id: 'Gaji rendah, tapi pekerjaan mengubah dunia' }, 1),
    ],
  },
  {
    id: 92,
    question: STEM.work,
    options: [
      opt({ ko: '회사에서 가장 인기 있는데 능력은 평균이다', en: 'You\'re the most popular at work, but your skills are average', ja: '会社で一番人気だが、能力は平均', 'zh-CN': '公司里最受欢迎，但能力平平', 'zh-TW': '公司裡最受歡迎，但能力平平', vi: 'Nổi tiếng nhất công ty, nhưng năng lực trung bình', id: 'Paling populer di kantor, tapi kemampuan rata-rata' }, 0),
      opt({ ko: '능력은 최고인데 아무도 좋아하지 않는다', en: 'Your skills are top-notch, but nobody likes you', ja: '能力は最高だが、誰にも好かれない', 'zh-CN': '能力最强，但没人喜欢你', 'zh-TW': '能力最強，但沒人喜歡你', vi: 'Năng lực đỉnh cao, nhưng không ai thích bạn', id: 'Kemampuan terbaik, tapi tidak ada yang suka kamu' }, 1),
    ],
  },
  {
    id: 93,
    question: STEM.work,
    options: [
      opt({ ko: '내가 한 실수를 아무도 모른다', en: 'Nobody knows about the mistakes you made', ja: '自分のミスを誰も知らない', 'zh-CN': '你犯的错没人知道', 'zh-TW': '你犯的錯沒人知道', vi: 'Không ai biết lỗi lầm bạn mắc phải', id: 'Tidak ada yang tahu kesalahanmu' }, 0),
      opt({ ko: '내가 한 노력을 아무도 모른다', en: 'Nobody knows about the effort you put in', ja: '自分の努力を誰も知らない', 'zh-CN': '你的努力没人知道', 'zh-TW': '你的努力沒人知道', vi: 'Không ai biết nỗ lực bạn bỏ ra', id: 'Tidak ada yang tahu usahamu' }, 1),
    ],
  },
  {
    id: 94,
    question: STEM.work,
    options: [
      opt({ ko: '꿈의 직장에 들어갔는데 일이 기대와 완전히 다르다', en: 'You landed your dream job, but the work is completely different from what you expected', ja: '夢の職場に入ったが、仕事は期待と全く違う', 'zh-CN': '进了梦想的公司，但工作和期待完全不同', 'zh-TW': '進了夢想的公司，但工作和期待完全不同', vi: 'Vào công ty mơ ước, nhưng công việc khác hẳn kỳ vọng', id: 'Masuk kantor impian, tapi pekerjaannya beda jauh dari harapan' }, 0),
      opt({ ko: '기대 안 한 직장인데 일이 너무 잘 맞는다', en: 'You ended up at a job you didn\'t expect, but the work fits you perfectly', ja: '期待していなかった職場だが、仕事がとても合う', 'zh-CN': '进了没期待的公司，但工作非常合拍', 'zh-TW': '進了沒期待的公司，但工作非常合拍', vi: 'Vào công ty không kỳ vọng, nhưng công việc hợp quá', id: 'Masuk kantor yang tidak diharapkan, tapi pekerjaannya sangat cocok' }, 1),
    ],
  },
  {
    id: 95,
    question: STEM.work,
    options: [
      opt({ ko: '팀원 전체가 힘든데 나만 괜찮다', en: 'The whole team is struggling, but you\'re fine', ja: 'チーム全員が大変なのに、自分だけ平気', 'zh-CN': '全团队都很辛苦，只有你没事', 'zh-TW': '全團隊都很辛苦，只有你沒事', vi: 'Cả team đều khổ, chỉ mình bạn ổn', id: 'Seluruh tim susah, tapi kamu saja baik-baik saja' }, 0),
      opt({ ko: '나만 힘든데 팀원 전체는 괜찮다', en: 'You\'re the only one struggling, but the whole team is fine', ja: '自分だけ大変だが、チーム全員は平気', 'zh-CN': '只有你很辛苦，全团队都没事', 'zh-TW': '只有你很辛苦，全團隊都沒事', vi: 'Chỉ mình bạn khổ, cả team đều ổn', id: 'Hanya kamu yang susah, seluruh tim baik-baik saja' }, 1),
    ],
  },
  {
    id: 96,
    question: STEM.work,
    options: [
      opt({ ko: '1년 안에 은퇴할 수 있는데 지금 하는 일을 영원히 못 한다', en: 'You can retire within a year, but never do what you do now again', ja: '1年以内に退職できるが、今の仕事は二度とできない', 'zh-CN': '一年内可以退休，但永远无法再做现在的工作', 'zh-TW': '一年內可以退休，但永遠無法再做現在的工作', vi: 'Nghỉ hưu trong một năm, nhưng không bao giờ làm lại công việc hiện tại', id: 'Bisa pensiun dalam setahun, tapi tidak pernah bisa kerja seperti sekarang lagi' }, 0),
      opt({ ko: '평생 일해야 하는데 하는 일이 너무 즐겁다', en: 'You must work for life, but you love what you do', ja: '一生働かなければならないが、仕事がとても楽しい', 'zh-CN': '必须工作一辈子，但工作太令人愉快', 'zh-TW': '必須工作一輩子，但工作太令人愉快', vi: 'Phải làm cả đời, nhưng công việc quá vui', id: 'Harus kerja seumur hidup, tapi pekerjaannya terlalu menyenangkan' }, 1),
    ],
  },
  {
    id: 97,
    question: STEM.work,
    options: [
      opt({ ko: '모든 사람이 나를 천재라고 생각하는데 실제로는 아니다', en: 'Everyone thinks you\'re a genius, but you\'re not', ja: 'みんなが自分を天才だと思うが、実際はそうではない', 'zh-CN': '所有人都觉得你是天才，但其实不是', 'zh-TW': '所有人都覺得你是天才，但其實不是', vi: 'Mọi người nghĩ bạn là thiên tài, nhưng thực ra không phải', id: 'Semua orang pikir kamu jenius, tapi sebenarnya bukan' }, 0),
      opt({ ko: '실제로 천재인데 아무도 알아주지 않는다', en: 'You\'re actually a genius, but nobody recognizes it', ja: '実際は天才だが、誰も認めてくれない', 'zh-CN': '其实是天才，但没人认可', 'zh-TW': '其實是天才，但沒人認可', vi: 'Thực sự là thiên tài, nhưng không ai công nhận', id: 'Sebenarnya jenius, tapi tidak ada yang mengakui' }, 1),
    ],
  },
  {
    id: 98,
    question: STEM.work,
    options: [
      opt({ ko: '하루 종일 회의만 하는 직장', en: 'A workplace where you do nothing but meetings all day', ja: '一日中会議だけの職場', 'zh-CN': '整天只有开会的公司', 'zh-TW': '整天只有開會的公司', vi: 'Công ty cả ngày chỉ họp', id: 'Kantor yang seharian cuma rapat' }, 0),
      opt({ ko: '아무도 소통하지 않는 직장', en: 'A workplace where nobody communicates at all', ja: '誰もコミュニケーションしない職場', 'zh-CN': '完全没有沟通的公司', 'zh-TW': '完全沒有溝通的公司', vi: 'Công ty không ai giao tiếp cả', id: 'Kantor yang tidak ada komunikasi sama sekali' }, 1),
    ],
  },
  {
    id: 99,
    question: STEM.final,
    options: [
      opt({ ko: '지금까지의 내 모든 선택이 최선이었다는 확신이 생기는 대신 앞으로의 모든 선택은 항상 확신이 없다', en: 'You become sure every past choice was the best, but never feel sure about any future choice', ja: 'これまでのすべての選択が最善だったと確信する代わりに、これからの選択には常に確信が持てない', 'zh-CN': '确信过去所有选择都是最好的，但未来每个选择都永远不确定', 'zh-TW': '確信過去所有選擇都是最好的，但未來每個選擇都永遠不確定', vi: 'Chắc chắn mọi lựa chọn trước đây là tốt nhất, nhưng mọi lựa chọn tương lai luôn không chắc chắn', id: 'Yakin semua pilihan masa lalu adalah yang terbaik, tapi semua pilihan ke depan selalu ragu' }, 0),
      opt({ ko: '지금까지의 선택이 최선이 아니었다는 것을 알게 되는 대신 앞으로의 모든 선택은 항상 옳다', en: 'You learn your past choices weren\'t the best, but every future choice is always right', ja: 'これまでの選択が最善ではなかったと知る代わりに、これからの選択は常に正しい', 'zh-CN': '知道过去的选择并非最好，但未来每个选择永远正确', 'zh-TW': '知道過去的選擇並非最好，但未來每個選擇永遠正確', vi: 'Biết lựa chọn trước đây không phải tốt nhất, nhưng mọi lựa chọn tương lai luôn đúng', id: 'Tahu pilihan masa lalu bukan yang terbaik, tapi semua pilihan ke depan selalu benar' }, 1),
    ],
  },

];

export const phase3Balance99UltimateResults: Phase3Balance99UltimateResult[] = [

  {
    type: 'Type1',
    emoji: '💎',
    title: L({
      ko: 'A만 골랐다, A 고집 극단러',
      en: 'Almost all A — A Extreme Stickler',
      ja: 'ほぼ全部A、Aこだわり極端タイプ',
      'zh-CN': '几乎全选A，A固执极端型',
      'zh-TW': '幾乎全選A，A固執極端型',
      vi: 'Gần như toàn A — A Cực đoan cố chấp',
      id: 'Hampir semua A — A Extreme Stickler',
    }),
    shortDescription: L({
      ko: '99개 중 83개 이상을 A로 골랐습니다. 당신의 선택 기준이 매우 뚜렷합니다.',
      en: 'You picked A on 83+ of 99. Your choice criteria are crystal clear.',
      ja: '99問中83問以上でAを選びました。選択基準がとてもはっきりしています。',
      'zh-CN': '99题中有83题以上选了A。你的选择标准非常鲜明。',
      'zh-TW': '99題中有83題以上選了A。你的選擇標準非常鮮明。',
      vi: 'Bạn chọn A từ 83/99 trở lên. Tiêu chí lựa chọn của bạn rất rõ.',
      id: 'Kamu memilih A di 83+ dari 99. Kriteria pilihanmu sangat jelas.',
    }),
    description: L({
      ko: '불편하거나 어렵더라도 원칙이 있는 선택을 하는 타입입니다. 상황이 달라도 비슷한 방향으로 일관되게 고릅니다. A를 이렇게 많이 고른 사람은 생각보다 많지 않습니다.',
      en: 'You choose with principles even when it is uncomfortable or hard. Across situations you lean the same way. Surprisingly few people pick A this often.',
      ja: '不快でも難しくても、原則のある選択をするタイプ。状況が違っても同じ方向に一貫して選びます。ここまでAを多く選ぶ人は意外と少ないです。',
      'zh-CN': '即便不舒服或困难，也会做有原则的选择。情境不同也会朝相似方向一贯地选。能把A选这么多的人其实不多。',
      'zh-TW': '即便不舒服或困難，也會做有原則的選擇。情境不同也會朝相似方向一貫地選。能把A選這麼多的人其實不多。',
      vi: 'Dù khó chịu hay khó khăn vẫn chọn theo nguyên tắc. Tình huống khác nhau vẫn nghiêng cùng hướng. Không nhiều người chọn A nhiều đến vậy.',
      id: 'Meski tidak nyaman atau sulit, kamu memilih berprinsip. Situasi berbeda tetap condong ke arah yang sama. Jarang orang memilih A sebanyak ini.',
    }),
    selectionTendency: L({
      ko: '원칙형 A 고집러 💎',
      en: 'Principled A Stickler 💎',
      ja: '原則型Aこだわり派 💎',
      'zh-CN': '原则型A固执派 💎',
      'zh-TW': '原則型A固執派 💎',
      vi: 'A cố chấp theo nguyên tắc 💎',
      id: 'A Stickler berprinsip 💎',
    }),
    choiceCountInfo: L({
      ko: 'A 선택 횟수: 83~99번',
      en: 'A picks: 83–99',
      ja: 'A選択回数: 83〜99回',
      'zh-CN': '选A次数: 83~99次',
      'zh-TW': '選A次數: 83~99次',
      vi: 'Số lần chọn A: 83–99',
      id: 'Jumlah pilih A: 83–99',
    }),
    friendCompare: L({
      ko: 'B 선호 안정파·B 고집 극단러 친구를 만나면 99개 중 서로 다른 선택이 60개 이상일 수도 있습니다',
      en: 'Meet a B Stability Preferrer or B Extreme Stickler friend and you may disagree on 60+ of 99',
      ja: 'B安定派・Bこだわり極端タイプの友達だと、99問中60問以上違うことも',
      'zh-CN': '遇到B稳定偏好型或B固执极端型朋友，99题里可能有60题以上不同',
      'zh-TW': '遇到B穩定偏好型或B固執極端型朋友，99題裡可能有60題以上不同',
      vi: 'Gặp bạn B Ổn định hoặc B Cực đoan cố chấp có thể khác nhau 60+/99',
      id: 'Ketemu teman B Stability Preferrer atau B Extreme Stickler bisa beda 60+/99',
    }),
    sections: [
      section(
        {
          ko: '💪 이 성향의 강점',
          en: '💪 Strengths of this style',
          ja: '💪 この傾向の強み',
          'zh-CN': '💪 这种倾向的优势',
          'zh-TW': '💪 這種傾向的優勢',
          vi: '💪 Điểm mạnh của xu hướng này',
          id: '💪 Kekuatan gaya ini',
        },
        {
          ko: '결단력·일관성·명확한 기준',
          en: 'Decisiveness, consistency, clear standards',
          ja: '決断力・一貫性・明確な基準',
          'zh-CN': '决断力、一致性、明确标准',
          'zh-TW': '決斷力、一致性、明確標準',
          vi: 'Quyết đoán · nhất quán · tiêu chuẩn rõ',
          id: 'Ketegasan · konsistensi · standar jelas',
        }
      ),
      section(
        {
          ko: '🌑 이 성향의 그늘',
          en: '🌑 Shadow of this style',
          ja: '🌑 この傾向の影',
          'zh-CN': '🌑 这种倾向的阴影',
          'zh-TW': '🌑 這種傾向的陰影',
          vi: '🌑 Mặt tối của xu hướng này',
          id: '🌑 Bayangan gaya ini',
        },
        {
          ko: '때로는 유연성이 필요한 상황에서 고집으로 보일 수 있음',
          en: 'Can look stubborn when flexibility is needed',
          ja: '柔軟さが必要な場面では頑固に見えることがある',
          'zh-CN': '在需要灵活的场合可能显得固执',
          'zh-TW': '在需要靈活的場合可能顯得固執',
          vi: 'Đôi khi trông cố chấp khi cần linh hoạt',
          id: 'Kadang terlihat keras kepala saat butuh fleksibilitas',
        }
      ),
    ],
    shareMessage: L({
      ko: "밸런스 99 결과: A 고집 극단러 💎 99개 중 A를 {count}번 골랐음... 친구랑 같이 해봐 몇 개 겹치는지 → 다른 거 30개 넘으면 '어떻게 그걸 골라?!' 보장",
      en: "Balance 99: A Extreme Stickler 💎 Picked A {count}/99... Try with a friend → 30+ differences = guaranteed 'How could you choose that?!'",
      ja: 'バランス99結果: Aこだわり極端 💎 99問中Aを{count}回... 友達とやってみて重なり確認 → 違うのが30超えたら「なんでそれ?!」確定',
      'zh-CN': '平衡99结果: A固执极端型 💎 99题里选了{count}次A... 拉朋友一起测 → 不同超过30题必喊「你怎么选那个?!」',
      'zh-TW': '平衡99結果: A固執極端型 💎 99題裡選了{count}次A... 拉朋友一起測 → 不同超過30題必喊「你怎麼選那個?!」',
      vi: "Balance 99: A Cực đoan cố chấp 💎 Chọn A {count}/99... Rủ bạn làm → khác 30+ là chắc chắn 'Sao lại chọn cái đó?!'",
      id: "Balance 99: A Extreme Stickler 💎 Pilih A {count}/99... Ajak teman → beda 30+ = pasti 'Kok bisa pilih itu?!'",
    }),
  },
  {
    type: 'Type2',
    emoji: '⚡',
    title: L({
      ko: 'A가 훨씬 많다, A 선호 결단파',
      en: 'Mostly A — A Decisive Preferrer',
      ja: 'Aがかなり多い、A好み決断派',
      'zh-CN': 'A明显更多，A偏好决断派',
      'zh-TW': 'A明顯更多，A偏好決斷派',
      vi: 'A nhiều hơn hẳn — A Quyết đoán ưu tiên',
      id: 'A jauh lebih banyak — A Decisive Preferrer',
    }),
    shortDescription: L({
      ko: 'A 선택이 B보다 확실히 많습니다. 불편해도 선택해야 한다면 A 쪽으로 기우는 타입입니다.',
      en: 'A clearly outnumbers B. When forced to choose through discomfort, you lean A.',
      ja: 'A選択がBよりはっきり多い。不快でも選ぶならA寄りです。',
      'zh-CN': '选A明显多于B。即便难受也要选时，你会偏向A。',
      'zh-TW': '選A明顯多於B。即便難受也要選時，你會偏向A。',
      vi: 'Chọn A nhiều hơn B rõ rệt. Buộc phải chọn dù khó chịu thì nghiêng về A.',
      id: 'Pilihan A jelas lebih banyak dari B. Jika harus memilih meski tidak nyaman, condong ke A.',
    }),
    description: L({
      ko: '선택의 무게를 감수하면서도 원하는 방향을 택하는 경향이 있습니다. 친구와 비교했을 때 같은 A를 골랐다면 비슷한 사람, B 선호 안정파·B 고집 극단러를 만났다면 "어떻게 그걸 골라?!"가 터집니다.',
      en: 'You bear the weight of choice and still go where you want. Same A as a friend = similar vibe; meet a B Stability Preferrer or B Extreme Stickler and "How could you choose that?!" explodes.',
      ja: '選択の重みを受け止めつつ望む方向を取る傾向。友達と同じAなら似た人、B安定派・Bこだわり極端タイプなら「なんでそれ?!」が炸裂。',
      'zh-CN': '愿意承担选择的重量，仍朝想要的方向走。和朋友同选A像一类人；遇到B稳定偏好型或B固执极端型就会爆出「你怎么选那个?!」',
      'zh-TW': '願意承擔選擇的重量，仍朝想要的方向走。和朋友同選A像一類人；遇到B穩定偏好型或B固執極端型就會爆出「你怎麼選那個?!」',
      vi: 'Chịu sức nặng lựa chọn nhưng vẫn đi hướng muốn. Cùng A với bạn = giống nhau; gặp B Ổn định / B Cực đoan thì "Sao lại chọn cái đó?!" nổ tung.',
      id: 'Kamu menanggung bobot pilihan tapi tetap ke arah yang diinginkan. Sama A dengan teman = mirip; ketemu B Stability / B Extreme Stickler = "Kok bisa pilih itu?!"',
    }),
    selectionTendency: L({
      ko: 'A 선호 결단파 ⚡',
      en: 'A Decisive Preferrer ⚡',
      ja: 'A好み決断派 ⚡',
      'zh-CN': 'A偏好决断派 ⚡',
      'zh-TW': 'A偏好決斷派 ⚡',
      vi: 'A Quyết đoán ưu tiên ⚡',
      id: 'A Decisive Preferrer ⚡',
    }),
    choiceCountInfo: L({
      ko: 'A 선택 횟수: 66~82번',
      en: 'A picks: 66–82',
      ja: 'A選択回数: 66〜82回',
      'zh-CN': '选A次数: 66~82次',
      'zh-TW': '選A次數: 66~82次',
      vi: 'Số lần chọn A: 66–82',
      id: 'Jumlah pilih A: 66–82',
    }),
    friendCompare: L({
      ko: 'B 선호 안정파 친구와 같은 질문에서 다른 선택을 한 것 찾기가 핵심 재미',
      en: 'The fun is finding where you and a B Stability Preferrer friend split on the same questions',
      ja: 'B安定派の友達と、同じ問いで違う選択を探すのが醍醐味',
      'zh-CN': '和B稳定偏好型朋友找同一题上的不同选择，才是核心乐趣',
      'zh-TW': '和B穩定偏好型朋友找同一題上的不同選擇，才是核心樂趣',
      vi: 'Vui nhất là tìm chỗ khác nhau với bạn B Ổn định trên cùng câu hỏi',
      id: 'Serunya mencari beda pilihan dengan teman B Stability Preferrer di soal yang sama',
    }),
    sections: [],
    shareMessage: L({
      ko: '밸런스 99 결과: A 선호 결단파 ⚡ A를 훨씬 많이 골랐음... 친구랑 비교해봐 → Q31(사랑하는 사람이 나를 싫어 vs 싫어하는 사람이 나를 사랑) 여기서 다르면 얘기 길어짐 ㅋㅋ',
      en: 'Balance 99: A Decisive Preferrer ⚡ Way more A... Compare with a friend → Q31 (crush hates you vs someone you hate loves you)—if you differ, long talk incoming lol',
      ja: 'バランス99結果: A好み決断派 ⚡ A多め... 友達と比較 → Q31（好きな人に嫌われる vs 嫌いな人に好かれる）で違うと話が長いwww',
      'zh-CN': '平衡99结果: A偏好决断派 ⚡ A多很多... 和朋友比 → Q31（爱人讨厌你 vs 讨厌的人爱你）不同就聊很久哈哈哈',
      'zh-TW': '平衡99結果: A偏好決斷派 ⚡ A多很多... 和朋友比 → Q31（愛人討厭你 vs 討厭的人愛你）不同就聊很久哈哈哈',
      vi: 'Balance 99: A Quyết đoán ưu tiên ⚡ A nhiều hơn hẳn... So với bạn → Q31 (crush ghét bạn vs người bạn ghét yêu bạn)—khác là dài chuyện =))',
      id: 'Balance 99: A Decisive Preferrer ⚡ A jauh lebih banyak... Bandingkan dengan teman → Q31 (crush benci kamu vs orang yang kamu benci mencintaimu)—beda = obrolan panjang wkwk',
    }),
  },
  {
    type: 'Type3',
    emoji: '🌿',
    title: L({
      ko: '약간 A가 많다, A 미세 우위형',
      en: 'Slightly more A — A Slight Edge',
      ja: 'ややAが多い、A微差優位タイプ',
      'zh-CN': 'A略多一点，A微弱优势型',
      'zh-TW': 'A略多一點，A微弱優勢型',
      vi: 'A nhỉnh hơn một chút — A Lợi thế nhẹ',
      id: 'A sedikit lebih banyak — A Slight Edge',
    }),
    shortDescription: L({
      ko: '절반에 가깝지만 A가 조금 더 많습니다. 정말 어려운 선택이었다는 뜻입니다.',
      en: 'Nearly even, but A edges ahead. That means every choice was truly hard.',
      ja: '半分に近いけれどAが少し多い。本当に難しい選択だった証拠。',
      'zh-CN': '接近一半，但A略多。说明每一题都真的很难选。',
      'zh-TW': '接近一半，但A略多。說明每一題都真的很難選。',
      vi: 'Gần nửa nhưng A nhỉnh hơn. Nghĩa là mỗi lựa chọn đều rất khó.',
      id: 'Hampir setengah, tapi A sedikit unggul. Artinya setiap pilihan benar-benar sulit.',
    }),
    description: L({
      ko: '99개 밸런스 게임을 가장 힘들게 풀었을 가능성이 높습니다. 매 선택마다 정말 고민했을 것입니다. B 미세 우위형 친구와 비교했을 때 가장 다양한 토론이 나올 수 있는 구간입니다.',
      en: 'You likely suffered the most through all 99. Every pick was a real struggle. Compared with a B Slight Edge friend, this range sparks the richest debates.',
      ja: '99問を一番苦しんで解いた可能性大。毎回本気で悩んだはず。B微差優位タイプの友達と比較すると一番議論が広がるゾーン。',
      'zh-CN': '很可能是把99题做得最痛苦的区间。每题都认真纠结过。和B微弱优势型朋友比，最容易聊出各种争论。',
      'zh-TW': '很可能是把99題做得最痛苦的區間。每題都認真糾結過。和B微弱優勢型朋友比，最容易聊出各種爭論。',
      vi: 'Khả năng cao bạn khổ sở nhất với cả 99 câu. Mỗi lần chọn đều vật lộn. So với bạn B Lợi thế nhẹ, đây là vùng nhiều tranh luận nhất.',
      id: 'Kamu kemungkinan paling menderita di 99 soal. Setiap pilihan bikin pusing. Dibanding teman B Slight Edge, zona ini paling banyak debat.',
    }),
    selectionTendency: L({
      ko: 'A 미세 우위형 🌿',
      en: 'A Slight Edge 🌿',
      ja: 'A微差優位タイプ 🌿',
      'zh-CN': 'A微弱优势型 🌿',
      'zh-TW': 'A微弱優勢型 🌿',
      vi: 'A Lợi thế nhẹ 🌿',
      id: 'A Slight Edge 🌿',
    }),
    choiceCountInfo: L({
      ko: 'A 선택 횟수: 50~65번',
      en: 'A picks: 50–65',
      ja: 'A選択回数: 50〜65回',
      'zh-CN': '选A次数: 50~65次',
      'zh-TW': '選A次數: 50~65次',
      vi: 'Số lần chọn A: 50–65',
      id: 'Jumlah pilih A: 50–65',
    }),
    friendCompare: L({
      ko: 'B 미세 우위형 친구를 만나면 선택이 섞여있어 가장 많은 토론 포인트가 나옴',
      en: 'With a B Slight Edge friend, mixed picks create the most debate points',
      ja: 'B微差優位タイプの友達だと選択が混ざり、議論ポイントが最多',
      'zh-CN': '遇到B微弱优势型朋友，选择交错，讨论点最多',
      'zh-TW': '遇到B微弱優勢型朋友，選擇交錯，討論點最多',
      vi: 'Gặp bạn B Lợi thế nhẹ thì lựa chọn xen lẫn, nhiều điểm tranh luận nhất',
      id: 'Dengan teman B Slight Edge, pilihan bercampur—poin debat paling banyak',
    }),
    sections: [],
    shareMessage: L({
      ko: '밸런스 99 결과: A 미세 우위형 🌿 진짜 모든 질문이 힘들었음... 친구 불러서 1:1 대결해봐 → 다른 거 찾는 게 더 재미있음',
      en: 'Balance 99: A Slight Edge 🌿 Every question was brutal... Challenge a friend 1:1 → hunting differences is more fun',
      ja: 'バランス99結果: A微差優位 🌿 全問キツかった... 友達と1:1対決 → 違うとこ探す方が面白い',
      'zh-CN': '平衡99结果: A微弱优势型 🌿 每题都好难... 拉朋友1:1对决 → 找不同的地方更有趣',
      'zh-TW': '平衡99結果: A微弱優勢型 🌿 每題都好難... 拉朋友1:1對決 → 找不同的地方更有趣',
      vi: 'Balance 99: A Lợi thế nhẹ 🌿 Mỗi câu đều cực... Rủ bạn đấu 1:1 → tìm chỗ khác vui hơn',
      id: 'Balance 99: A Slight Edge 🌿 Semua soal berat... Ajak teman duel 1:1 → cari bedanya lebih seru',
    }),
  },
  {
    type: 'Type4',
    emoji: '🌊',
    title: L({
      ko: '약간 B가 많다, B 미세 우위형',
      en: 'Slightly more B — B Slight Edge',
      ja: 'ややBが多い、B微差優位タイプ',
      'zh-CN': 'B略多一点，B微弱优势型',
      'zh-TW': 'B略多一點，B微弱優勢型',
      vi: 'B nhỉnh hơn một chút — B Lợi thế nhẹ',
      id: 'B sedikit lebih banyak — B Slight Edge',
    }),
    shortDescription: L({
      ko: '절반에 가깝지만 B가 조금 더 많습니다. 아주 근소한 차이입니다.',
      en: 'Nearly even, but B edges ahead. A razor-thin difference.',
      ja: '半分に近いけれどBが少し多い。ごく僅差です。',
      'zh-CN': '接近一半，但B略多。差距非常小。',
      'zh-TW': '接近一半，但B略多。差距非常小。',
      vi: 'Gần nửa nhưng B nhỉnh hơn. Chênh lệch rất mỏng.',
      id: 'Hampir setengah, tapi B sedikit unggul. Selisih tipis sekali.',
    }),
    description: L({
      ko: 'A 미세 우위형 🌿과 마찬가지로 99개를 가장 고통스럽게 풀었을 구간입니다. B를 약간 더 선택했다는 것이 큰 차이를 만들지는 않지만 친구와 비교했을 때 미묘하게 다른 패턴이 보일 것입니다.',
      en: 'Like A Slight Edge 🌿, this is the most painful 99-question zone. A few more B picks do not change everything—but vs a friend, subtle pattern differences will show.',
      ja: 'A微差優位タイプ🌿と同じく、99問を一番苦しむゾーン。Bが少し多いだけでは大差はないが、友達と比較すると微妙に違うパターンが見えるはず。',
      'zh-CN': '和A微弱优势型🌿一样，是做完99题最痛苦的区间。B略多不会造成天差地别，但和朋友比会出现微妙不同的模式。',
      'zh-TW': '和A微弱優勢型🌿一樣，是做完99題最痛苦的區間。B略多不會造成天差地別，但和朋友比會出現微妙不同的模式。',
      vi: 'Giống A Lợi thế nhẹ 🌿, đây là vùng khổ sở nhất với 99 câu. B nhỉnh hơn không tạo khác biệt lớn—nhưng so với bạn sẽ thấy mẫu khác tinh tế.',
      id: 'Seperti A Slight Edge 🌿, ini zona 99 soal paling menyiksa. B sedikit lebih banyak tidak mengubah segalanya—tapi vs teman, pola beda halus akan terlihat.',
    }),
    selectionTendency: L({
      ko: 'B 미세 우위형 🌊',
      en: 'B Slight Edge 🌊',
      ja: 'B微差優位タイプ 🌊',
      'zh-CN': 'B微弱优势型 🌊',
      'zh-TW': 'B微弱優勢型 🌊',
      vi: 'B Lợi thế nhẹ 🌊',
      id: 'B Slight Edge 🌊',
    }),
    choiceCountInfo: L({
      ko: 'B 선택 횟수: 50~65번',
      en: 'B picks: 50–65',
      ja: 'B選択回数: 50〜65回',
      'zh-CN': '选B次数: 50~65次',
      'zh-TW': '選B次數: 50~65次',
      vi: 'Số lần chọn B: 50–65',
      id: 'Jumlah pilih B: 50–65',
    }),
    friendCompare: L({
      ko: 'A 미세 우위형 🌿 친구를 만나면 "우리 진짜 반반이다"라는 대화가 나옵니다',
      en: 'With an A Slight Edge 🌿 friend you will say "We are truly fifty-fifty"',
      ja: 'A微差優位🌿の友達だと「私たち本当に半々だね」会話になる',
      'zh-CN': '遇到A微弱优势型🌿朋友，会聊出「我们真的五五开」',
      'zh-TW': '遇到A微弱優勢型🌿朋友，會聊出「我們真的五五開」',
      vi: 'Gặp bạn A Lợi thế nhẹ 🌿 sẽ nói "Chúng ta đúng là nửa nửa"',
      id: 'Dengan teman A Slight Edge 🌿 bakal bilang "Kita beneran fifty-fifty"',
    }),
    sections: [],
    shareMessage: L({
      ko: '밸런스 99 결과: B 미세 우위형 🌊 반반에 가까운 결과... 친구랑 같이 해서 매칭 점수 확인해봐 → 소울메이트인지 다른 우주인지 ㅋㅋ',
      en: 'Balance 99: B Slight Edge 🌊 Almost even... Duel a friend for match score → soulmates or different universes lol',
      ja: 'バランス99結果: B微差優位 🌊 ほぼ半々... 友達とマッチ点確認 → ソウルメイトか別宇宙かwww',
      'zh-CN': '平衡99结果: B微弱优势型 🌊 接近一半... 和朋友对决看匹配分 → 灵魂伴侣还是平行宇宙哈哈哈',
      'zh-TW': '平衡99結果: B微弱優勢型 🌊 接近一半... 和朋友對決看配對分 → 靈魂伴侶還是平行宇宙哈哈哈',
      vi: 'Balance 99: B Lợi thế nhẹ 🌊 Gần nửa nửa... Đấu bạn xem điểm khớp → soulmate hay vũ trụ khác =))',
      id: 'Balance 99: B Slight Edge 🌊 Hampir fifty-fifty... Duel teman cek skor cocok → soulmate atau alam semesta lain wkwk',
    }),
  },
  {
    type: 'Type5',
    emoji: '🔵',
    title: L({
      ko: 'B가 훨씬 많다, B 선호 안정파',
      en: 'Mostly B — B Stability Preferrer',
      ja: 'Bがかなり多い、B好み安定派',
      'zh-CN': 'B明显更多，B偏好稳定派',
      'zh-TW': 'B明顯更多，B偏好穩定派',
      vi: 'B nhiều hơn hẳn — B Ưu tiên ổn định',
      id: 'B jauh lebih banyak — B Stability Preferrer',
    }),
    shortDescription: L({
      ko: 'B 선택이 A보다 확실히 많습니다. 편안함과 안정을 더 선호하는 경향이 있습니다.',
      en: 'B clearly outnumbers A. You tend to prefer comfort and stability.',
      ja: 'B選択がAよりはっきり多い。快適さと安定をより好む傾向。',
      'zh-CN': '选B明显多于A。你更偏向舒适与稳定。',
      'zh-TW': '選B明顯多於A。你更偏向舒適與穩定。',
      vi: 'Chọn B nhiều hơn A rõ rệt. Bạn nghiêng về thoải mái và ổn định.',
      id: 'Pilihan B jelas lebih banyak dari A. Kamu cenderung suka kenyamanan dan stabilitas.',
    }),
    description: L({
      ko: '어렵고 불편한 선택보다 현실적으로 감당 가능한 선택을 하는 타입입니다. 친구와 비교했을 때 A 선호 결단파·A 고집 극단러 친구와 만나면 "어떻게 그걸 골라?!"가 반드시 터집니다.',
      en: 'You pick what you can realistically handle over hard, uncomfortable options. Meet an A Decisive Preferrer or A Extreme Stickler and "How could you choose that?!" is guaranteed.',
      ja: '難しく不快な選択より、現実的に耐えられる選択をするタイプ。A好み決断派・Aこだわり極端タイプの友達なら「なんでそれ?!」必発。',
      'zh-CN': '比起困难难受的选项，你会选现实上扛得住的。遇到A偏好决断派或A固执极端型，必喊「你怎么选那个?!」',
      'zh-TW': '比起困難難受的選項，你會選現實上扛得住的。遇到A偏好決斷派或A固執極端型，必喊「你怎麼選那個?!」',
      vi: 'Bạn chọn cái chịu được thực tế hơn là lựa chọn khó và khó chịu. Gặp A Quyết đoán / A Cực đoan thì chắc chắn "Sao lại chọn cái đó?!"',
      id: 'Kamu pilih yang realistis ditanggung daripada opsi sulit & tidak nyaman. Ketemu A Decisive / A Extreme Stickler = pasti "Kok bisa pilih itu?!"',
    }),
    selectionTendency: L({
      ko: 'B 선호 안정파 🔵',
      en: 'B Stability Preferrer 🔵',
      ja: 'B好み安定派 🔵',
      'zh-CN': 'B偏好稳定派 🔵',
      'zh-TW': 'B偏好穩定派 🔵',
      vi: 'B Ưu tiên ổn định 🔵',
      id: 'B Stability Preferrer 🔵',
    }),
    choiceCountInfo: L({
      ko: 'B 선택 횟수: 66~82번',
      en: 'B picks: 66–82',
      ja: 'B選択回数: 66〜82回',
      'zh-CN': '选B次数: 66~82次',
      'zh-TW': '選B次數: 66~82次',
      vi: 'Số lần chọn B: 66–82',
      id: 'Jumlah pilih B: 66–82',
    }),
    friendCompare: L({
      ko: 'A 고집 극단러 💎 친구를 만나면 대화가 몇 시간은 될 것입니다',
      en: 'With an A Extreme Stickler 💎 friend, the talk will last hours',
      ja: 'Aこだわり極端💎の友達だと会話が何時間も続く',
      'zh-CN': '遇到A固执极端型💎朋友，能聊好几个小时',
      'zh-TW': '遇到A固執極端型💎朋友，能聊好幾個小時',
      vi: 'Gặp bạn A Cực đoan cố chấp 💎 thì nói chuyện vài tiếng',
      id: 'Dengan teman A Extreme Stickler 💎, obrolan bisa berjam-jam',
    }),
    sections: [],
    shareMessage: L({
      ko: '밸런스 99 결과: B 선호 안정파 🔵 B를 훨씬 많이 골랐음... Q70(내가 원하는 삶인데 혼자 죽음 vs 원하는 삶 아닌데 곁에서 죽음) 여기서 다르면 대화 한 시간 각 → 친구한테 보내봐',
      en: 'Balance 99: B Stability Preferrer 🔵 Way more B... Q70 (dream life but die alone vs not dream life but die with loved ones)—if you differ, hour-long talk → send to a friend',
      ja: 'バランス99結果: B好み安定派 🔵 B多め... Q70（望む人生で一人死 vs 望まぬ人生で愛する人と死）で違うと1時間トーク → 友達に送って',
      'zh-CN': '平衡99结果: B偏好稳定派 🔵 B多很多... Q70（理想人生却独自死 vs 非理想人生却有爱的人陪伴）不同就聊一小时 → 发给朋友',
      'zh-TW': '平衡99結果: B偏好穩定派 🔵 B多很多... Q70（理想人生卻獨自死 vs 非理想人生卻有愛的人陪伴）不同就聊一小時 → 傳給朋友',
      vi: 'Balance 99: B Ưu tiên ổn định 🔵 B nhiều hơn hẳn... Q70 (sống đời muốn nhưng chết một mình vs không đúng đời muốn nhưng có người thương)—khác là nói cả tiếng → gửi bạn',
      id: 'Balance 99: B Stability Preferrer 🔵 B jauh lebih banyak... Q70 (hidup impian tapi mati sendirian vs bukan hidup impian tapi mati ditemani orang tersayang)—beda = obrolan sejam → kirim ke teman',
    }),
  },
  {
    type: 'Type6',
    emoji: '🏰',
    title: L({
      ko: 'B만 골랐다, B 고집 극단러',
      en: 'Almost all B — B Extreme Stickler',
      ja: 'ほぼ全部B、Bこだわり極端タイプ',
      'zh-CN': '几乎全选B，B固执极端型',
      'zh-TW': '幾乎全選B，B固執極端型',
      vi: 'Gần như toàn B — B Cực đoan cố chấp',
      id: 'Hampir semua B — B Extreme Stickler',
    }),
    shortDescription: L({
      ko: '99개 중 83개 이상을 B로 골랐습니다. 당신도 A 고집 극단러 💎만큼 뚜렷한 기준이 있습니다. 방향이 반대일 뿐입니다.',
      en: 'You picked B on 83+ of 99. Your criteria are as sharp as an A Extreme Stickler 💎—just the opposite direction.',
      ja: '99問中83問以上でB。Aこだわり極端💎と同じくらい基準ははっきり。方向が逆なだけ。',
      'zh-CN': '99题中有83题以上选了B。你的标准和A固执极端型💎一样鲜明，只是方向相反。',
      'zh-TW': '99題中有83題以上選了B。你的標準和A固執極端型💎一樣鮮明，只是方向相反。',
      vi: 'Bạn chọn B từ 83/99 trở lên. Tiêu chí rõ như A Cực đoan cố chấp 💎—chỉ ngược hướng.',
      id: 'Kamu memilih B di 83+ dari 99. Kriteriamu setajam A Extreme Stickler 💎—hanya arahnya berlawanan.',
    }),
    description: L({
      ko: '안정적이고 편안한 선택을 일관되게 하는 타입입니다. 불필요한 고통을 피하는 현실적인 판단력이 있습니다. A 고집 극단러를 만나면 서로의 선택이 충돌하는 포인트가 최대 83개까지 나올 수 있습니다.',
      en: 'You consistently choose stable, comfortable options. You have realistic judgment that avoids unnecessary pain. Vs an A Extreme Stickler, clash points can hit up to 83.',
      ja: '安定で快適な選択を一貫してするタイプ。不要な苦痛を避ける現実的な判断力。Aこだわり極端タイプだと衝突ポイントが最大83個にも。',
      'zh-CN': '会一贯选择稳定舒适的选项。有避开不必要痛苦的现实判断力。遇到A固执极端型，冲突点最多可到83个。',
      'zh-TW': '會一貫選擇穩定舒適的選項。有避開不必要痛苦的現實判斷力。遇到A固執極端型，衝突點最多可到83個。',
      vi: 'Bạn nhất quán chọn ổn định và thoải mái. Có phán đoán thực tế tránh khổ không cần thiết. Gặp A Cực đoan có thể xung đột tới 83 điểm.',
      id: 'Kamu konsisten memilih opsi stabil & nyaman. Ada penilaian realistis menghindari rasa sakit yang tidak perlu. Vs A Extreme Stickler, titik bentrok bisa sampai 83.',
    }),
    selectionTendency: L({
      ko: 'B 고집 극단러 🏰',
      en: 'B Extreme Stickler 🏰',
      ja: 'Bこだわり極端タイプ 🏰',
      'zh-CN': 'B固执极端型 🏰',
      'zh-TW': 'B固執極端型 🏰',
      vi: 'B Cực đoan cố chấp 🏰',
      id: 'B Extreme Stickler 🏰',
    }),
    choiceCountInfo: L({
      ko: 'B 선택 횟수: 83~99번',
      en: 'B picks: 83–99',
      ja: 'B選択回数: 83〜99回',
      'zh-CN': '选B次数: 83~99次',
      'zh-TW': '選B次數: 83~99次',
      vi: 'Số lần chọn B: 83–99',
      id: 'Jumlah pilih B: 83–99',
    }),
    friendCompare: L({
      ko: 'A 고집 극단러 💎 친구와 대화하면 밤새도록 토론할 거리가 나옵니다',
      en: 'Talk with an A Extreme Stickler 💎 friend and you will have all-night debate fuel',
      ja: 'Aこだわり極端💎の友達と話すと夜通し議論ネタが出る',
      'zh-CN': '和A固执极端型💎朋友聊，能争论一整夜',
      'zh-TW': '和A固執極端型💎朋友聊，能爭論一整夜',
      vi: 'Nói chuyện với bạn A Cực đoan cố chấp 💎 là có chủ đề tranh luận cả đêm',
      id: 'Ngobrol dengan teman A Extreme Stickler 💎 = bahan debat semalaman',
    }),
    sections: [],
    shareMessage: L({
      ko: '밸런스 99 결과: B 고집 극단러 🏰 99개 중 B를 {count}번 골랐음... A 고집 극단러 친구 있으면 같이 해봐 → 서로 다른 거 80개 넘을 수도 있음 ㅋㅋ',
      en: 'Balance 99: B Extreme Stickler 🏰 Picked B {count}/99... If you have an A Extreme Stickler friend, duel them → you might differ on 80+ lol',
      ja: 'バランス99結果: Bこだわり極端 🏰 99問中Bを{count}回... Aこだわり極端の友達いれば一緒に → 違うのが80超えることもwww',
      'zh-CN': '平衡99结果: B固执极端型 🏰 99题里选了{count}次B... 有A固执极端型朋友就一起测 → 不同可能超过80题哈哈哈',
      'zh-TW': '平衡99結果: B固執極端型 🏰 99題裡選了{count}次B... 有A固執極端型朋友就一起測 → 不同可能超過80題哈哈哈',
      vi: 'Balance 99: B Cực đoan cố chấp 🏰 Chọn B {count}/99... Có bạn A Cực đoan thì rủ làm → khác nhau có thể hơn 80 =))',
      id: 'Balance 99: B Extreme Stickler 🏰 Pilih B {count}/99... Ada teman A Extreme Stickler? Ajak duel → bisa beda 80+ wkwk',
    }),
  },

];

export interface Phase3Balance99MatchGrade {
  id: string;
  minSame: number;
  maxSame: number;
  emoji: string;
  title: Record<string, string>;
  verdict: Record<string, string>;
}

export const phase3Balance99MatchGrades: Phase3Balance99MatchGrade[] = [

  {
    id: 'soulmate',
    minSame: 85,
    maxSame: 99,
    emoji: '🔮',
    title: L({
      ko: '소울메이트',
      en: 'Soulmates',
      ja: 'ソウルメイト',
      'zh-CN': '灵魂伴侣',
      'zh-TW': '靈魂伴侶',
      vi: 'Soulmate',
      id: 'Soulmate',
    }),
    verdict: L({
      ko: '우리 같은 사람이었어 진짜',
      en: 'We were the same person for real',
      ja: '私たち同じ人だった、マジで',
      'zh-CN': '我们真的是同一种人',
      'zh-TW': '我們真的是同一種人',
      vi: 'Chúng ta đúng là một kiểu người',
      id: 'Kita emang orang yang sama, beneran',
    }),
  },
  {
    id: 'similar',
    minSame: 70,
    maxSame: 84,
    emoji: '💚',
    title: L({
      ko: '비슷한 사람',
      en: 'Pretty Similar',
      ja: '似てる人',
      'zh-CN': '挺像的人',
      'zh-TW': '挺像的人',
      vi: 'Khá giống nhau',
      id: 'Cukup mirip',
    }),
    verdict: L({
      ko: '생각보다 비슷하다',
      en: 'More alike than you thought',
      ja: '思ったより似てる',
      'zh-CN': '比想象中更像',
      'zh-TW': '比想像中更像',
      vi: 'Giống nhau hơn nghĩ',
      id: 'Lebih mirip dari dugaan',
    }),
  },
  {
    id: 'half',
    minSame: 50,
    maxSame: 69,
    emoji: '🟡',
    title: L({
      ko: '반반',
      en: 'Fifty-Fifty',
      ja: '半々',
      'zh-CN': '对半',
      'zh-TW': '對半',
      vi: 'Nửa nửa',
      id: 'Fifty-fifty',
    }),
    verdict: L({
      ko: '다른 거 찾는 게 더 재미있다',
      en: 'Hunting the differences is more fun',
      ja: '違うとこ探す方が面白い',
      'zh-CN': '找不同的地方更有趣',
      'zh-TW': '找不同的地方更有趣',
      vi: 'Tìm chỗ khác vui hơn',
      id: 'Cari yang beda lebih seru',
    }),
  },
  {
    id: 'different',
    minSame: 30,
    maxSame: 49,
    emoji: '🟠',
    title: L({
      ko: '꽤 다른 사람',
      en: 'Pretty Different',
      ja: 'かなり違う人',
      'zh-CN': '挺不一样的人',
      'zh-TW': '挺不一樣的人',
      vi: 'Khá khác nhau',
      id: 'Cukup beda',
    }),
    verdict: L({
      ko: '어떻게 그걸 골랐어?! 연발 예상',
      en: 'Expect a barrage of “How could you choose that?!”',
      ja: '「なんでそれ選んだ?!」連発予想',
      'zh-CN': '预计「你怎么选那个?!」连发',
      'zh-TW': '預計「你怎麼選那個?!」連發',
      vi: 'Dự đoán “Sao lại chọn cái đó?!” liên tục',
      id: 'Siap-siap “Kok bisa pilih itu?!” beruntun',
    }),
  },
  {
    id: 'opposite',
    minSame: 15,
    maxSame: 29,
    emoji: '🔴',
    title: L({
      ko: '완전 반대',
      en: 'Total Opposites',
      ja: '真逆',
      'zh-CN': '完全相反',
      'zh-TW': '完全相反',
      vi: 'Hoàn toàn ngược',
      id: 'Total berlawanan',
    }),
    verdict: L({
      ko: '우리 어떻게 친구야 ㅋㅋ',
      en: 'How are we even friends lol',
      ja: '私たちなんで友達なのwww',
      'zh-CN': '我们怎么会是朋友哈哈哈',
      'zh-TW': '我們怎麼會是朋友哈哈哈',
      vi: 'Sao chúng ta lại là bạn được =))',
      id: 'Kok kita bisa temenan wkwk',
    }),
  },
  {
    id: 'universe',
    minSame: 0,
    maxSame: 14,
    emoji: '☠️',
    title: L({
      ko: '다른 우주',
      en: 'Different Universe',
      ja: '別宇宙',
      'zh-CN': '平行宇宙',
      'zh-TW': '平行宇宙',
      vi: 'Vũ trụ khác',
      id: 'Alam semesta lain',
    }),
    verdict: L({
      ko: '같이 있어도 같은 생각 한 게 없었던 거임',
      en: 'Even together, we never once thought the same',
      ja: '一緒にいても同じ考えしたことなかったやつ',
      'zh-CN': '就算在一起也从没想过一样的事',
      'zh-TW': '就算在一起也從沒想過一樣的事',
      vi: 'Ở cạnh nhau cũng chẳng từng nghĩ giống nhau',
      id: 'Bareng-bareng pun nggak pernah mikir sama',
    }),
  },

];

export function getPhase3Balance99MatchGrade(sameCount: number): Phase3Balance99MatchGrade {
  const found = phase3Balance99MatchGrades.find((g) => sameCount >= g.minSame && sameCount <= g.maxSame);
  return found ?? phase3Balance99MatchGrades[phase3Balance99MatchGrades.length - 1];
}

export function encodePhase3Balance99Answers(answers: number[]): string {
  const bin = answers.map((a) => (a === 1 ? '1' : '0')).join('');
  const b64 = btoa(bin);
  return b64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

export function decodePhase3Balance99Answers(raw: string): number[] | null {
  try {
    const s = raw.trim();
    if (!s) return null;
    let b64 = s.replace(/-/g, '+').replace(/_/g, '/');
    while (b64.length % 4 !== 0) b64 += '=';
    const bin = atob(b64);
    if (bin.length !== 99 || !/^[01]{99}$/.test(bin)) return null;
    return bin.split('').map((c) => (c === '1' ? 1 : 0));
  } catch {
    return null;
  }
}

export function countSamePhase3Balance99Answers(a: number[], b: number[]): number {
  const len = Math.min(a.length, b.length, 99);
  let count = 0;
  for (let i = 0; i < len; i++) {
    if ((a[i] ? 1 : 0) === (b[i] ? 1 : 0)) count++;
  }
  return count;
}

