/** '틀린 그림' 찾기 챌린지 — 6라운드, 라운드당 큰 차이 3곳, 총 0~18점 → Type1~5 */

type Locale = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';
type ML = Record<Locale, string>;
function L(m: ML): Record<string, string> {
  return m;
}

export const PHASE3_SPOT_THE_DIFFERENCE_CHALLENGE_SLUG = 'phase3-spot-the-difference-challenge';
export const PHASE3_SPOT_THE_DIFFERENCE_ROUND_COUNT = 6;
export const SPOT_DIFFERENCES_PER_ROUND = 3;
export const SPOT_DIFF_CANVAS_W = 680;
export const SPOT_DIFF_CANVAS_H = 384;
export const SPOT_DIFF_HALF_W = 340;
export const SPOT_DIFF_HIT_RADIUS = 48;
export const SPOT_DIFF_ROUND_BASE_SEC = 60;
export const SPOT_DIFF_ROUND_SEC_DECREMENT = 10;

export function getSpotDifferenceRoundTimeSec(roundIndex: number): number {
  return Math.max(
    SPOT_DIFF_ROUND_BASE_SEC - roundIndex * SPOT_DIFF_ROUND_SEC_DECREMENT,
    SPOT_DIFF_ROUND_SEC_DECREMENT
  );
}

export interface SpotDifferenceHotspot {
  id: number;
  /** left-panel X (0–339); right panel mirrors at x + 340 */
  x: number;
  y: number;
  radius?: number;
}

export interface Phase3SpotTheDifferenceRound {
  id: number;
  imageFile: string;
  roundTitle: Record<string, string>;
  instruction: Record<string, string>;
  hotspots: SpotDifferenceHotspot[];
}

export interface Phase3SpotTheDifferenceResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  levelLabel: Record<string, string>;
  characteristics: Record<string, string>;
  strength: Record<string, string> | null;
  weakness: Record<string, string> | null;
  improvementTip: Record<string, string> | null;
  oneLiner: Record<string, string> | null;
  certify: Record<string, string> | null;
  shareLine: Record<string, string>;
}

export function hitTestSpotDifference(
  hotspots: SpotDifferenceHotspot[],
  foundIds: Set<number>,
  clickX: number,
  clickY: number
): { id: number; x: number; y: number } | null {
  const relX = clickX >= SPOT_DIFF_HALF_W ? clickX - SPOT_DIFF_HALF_W : clickX;
  for (const h of hotspots) {
    if (foundIds.has(h.id)) continue;
    const r = h.radius ?? SPOT_DIFF_HIT_RADIUS;
    if (Math.hypot(relX - h.x, clickY - h.y) <= r) return { id: h.id, x: h.x, y: h.y };
  }
  return null;
}

export function calculatePhase3SpotTheDifferenceResult(totalFound: number): string {
  if (totalFound <= 4) return 'Type1';
  if (totalFound <= 8) return 'Type2';
  if (totalFound <= 12) return 'Type3';
  if (totalFound <= 16) return 'Type4';
  return 'Type5';
}

export function getSpotDifferenceCountForRound(round: Phase3SpotTheDifferenceRound): number {
  return new Set(round.hotspots.map((h) => h.id)).size;
}

export function getPhase3SpotTheDifferenceMaxScore(): number {
  return phase3SpotTheDifferenceRounds.reduce(
    (sum, r) => sum + getSpotDifferenceCountForRound(r),
    0
  );
}

/** Coordinates mapped on 680×384 canvas (left-panel x, full-canvas y). */
export const phase3SpotTheDifferenceRounds: Phase3SpotTheDifferenceRound[] = [
  {
    id: 1,
    imageFile: 'p3_game_spot_the_difference_q1.webp',
    roundTitle: L({
      ko: 'ROUND 1 · 카페',
      en: 'ROUND 1 · Café',
      ja: 'ROUND 1 · カフェ',
      'zh-CN': 'ROUND 1 · 咖啡馆',
      'zh-TW': 'ROUND 1 · 咖啡館',
      vi: 'ROUND 1 · Quán cà phê',
      id: 'ROUND 1 · Kafe',
    }),
    instruction: L({
      ko: '좌·우 그림에서 크게 다른 곳 3곳을 터치하세요.',
      en: 'Tap the 3 major differences between the left and right pictures.',
      ja: '左右の絵で大きく違う3か所をタップしてください。',
      'zh-CN': '请点击左右两幅图中明显不同的3处。',
      'zh-TW': '請點擊左右兩幅圖中明顯不同的3處。',
      vi: 'Chạm 3 chỗ khác biệt rõ ràng giữa ảnh trái và phải.',
      id: 'Ketuk 3 perbedaan besar antara gambar kiri dan kanan.',
    }),
    hotspots: [
      { id: 1, x: 285, y: 150, radius: 55 },
      { id: 2, x: 58, y: 232, radius: 50 },
      { id: 3, x: 178, y: 298, radius: 45 },
    ],
  },
  {
    id: 2,
    imageFile: 'p3_game_spot_the_difference_q2.webp',
    roundTitle: L({
      ko: 'ROUND 2 · 공원',
      en: 'ROUND 2 · Park',
      ja: 'ROUND 2 · 公園',
      'zh-CN': 'ROUND 2 · 公园',
      'zh-TW': 'ROUND 2 · 公園',
      vi: 'ROUND 2 · Công viên',
      id: 'ROUND 2 · Taman',
    }),
    instruction: L({
      ko: '좌·우 그림에서 크게 다른 곳 4곳을 터치하세요.',
      en: 'Tap the 4 major differences between the left and right pictures.',
      ja: '左右の絵で大きく違う4か所をタップしてください。',
      'zh-CN': '请点击左右两幅图中明显不同的4处。',
      'zh-TW': '請點擊左右兩幅圖中明顯不同的4處。',
      vi: 'Chạm 4 chỗ khác biệt rõ ràng giữa ảnh trái và phải.',
      id: 'Ketuk 4 perbedaan besar antara gambar kiri dan kanan.',
    }),
    hotspots: [
      { id: 1, x: 219, y: 238 },
      { id: 2, x: 312, y: 355 },
      { id: 3, x: 49, y: 127 },
      { id: 3, x: 113, y: 99 },
      { id: 3, x: 202, y: 129 },
      { id: 4, x: 143, y: 208 },
    ],
  },
  {
    id: 3,
    imageFile: 'p3_game_spot_the_difference_q3.webp',
    roundTitle: L({
      ko: 'ROUND 3 · 주방',
      en: 'ROUND 3 · Kitchen',
      ja: 'ROUND 3 · キッチン',
      'zh-CN': 'ROUND 3 · 厨房',
      'zh-TW': 'ROUND 3 · 廚房',
      vi: 'ROUND 3 · Nhà bếp',
      id: 'ROUND 3 · Dapur',
    }),
    instruction: L({
      ko: '좌·우 그림에서 크게 다른 곳 3곳을 터치하세요.',
      en: 'Tap the 3 major differences between the left and right pictures.',
      ja: '左右の絵で大きく違う3か所をタップしてください。',
      'zh-CN': '请点击左右两幅图中明显不同的3处。',
      'zh-TW': '請點擊左右兩幅圖中明顯不同的3處。',
      vi: 'Chạm 3 chỗ khác biệt rõ ràng giữa ảnh trái và phải.',
      id: 'Ketuk 3 perbedaan besar antara gambar kiri dan kanan.',
    }),
    hotspots: [
      { id: 1, x: 70, y: 280, radius: 50 },
      { id: 2, x: 240, y: 275, radius: 45 },
      { id: 3, x: 285, y: 220, radius: 50 },
    ],
  },
  {
    id: 4,
    imageFile: 'p3_game_spot_the_difference_q4.webp',
    roundTitle: L({
      ko: 'ROUND 4 · 사무실',
      en: 'ROUND 4 · Office',
      ja: 'ROUND 4 · オフィス',
      'zh-CN': 'ROUND 4 · 办公室',
      'zh-TW': 'ROUND 4 · 辦公室',
      vi: 'ROUND 4 · Văn phòng',
      id: 'ROUND 4 · Kantor',
    }),
    instruction: L({
      ko: '좌·우 그림에서 크게 다른 곳 3곳을 터치하세요.',
      en: 'Tap the 3 major differences between the left and right pictures.',
      ja: '左右の絵で大きく違う3か所をタップしてください。',
      'zh-CN': '请点击左右两幅图中明显不同的3处。',
      'zh-TW': '請點擊左右兩幅圖中明顯不同的3處。',
      vi: 'Chạm 3 chỗ khác biệt rõ ràng giữa ảnh trái và phải.',
      id: 'Ketuk 3 perbedaan besar antara gambar kiri dan kanan.',
    }),
    hotspots: [
      { id: 1, x: 170, y: 105, radius: 45 },
      { id: 2, x: 175, y: 235, radius: 55 },
      { id: 3, x: 70, y: 250, radius: 45 },
    ],
  },
  {
    id: 5,
    imageFile: 'p3_game_spot_the_difference_q5.webp',
    roundTitle: L({
      ko: 'ROUND 5 · 해변',
      en: 'ROUND 5 · Beach',
      ja: 'ROUND 5 · ビーチ',
      'zh-CN': 'ROUND 5 · 海滩',
      'zh-TW': 'ROUND 5 · 海灘',
      vi: 'ROUND 5 · Bãi biển',
      id: 'ROUND 5 · Pantai',
    }),
    instruction: L({
      ko: '좌·우 그림에서 크게 다른 곳 3곳을 터치하세요.',
      en: 'Tap the 3 major differences between the left and right pictures.',
      ja: '左右の絵で大きく違う3か所をタップしてください。',
      'zh-CN': '请点击左右两幅图中明显不同的3处。',
      'zh-TW': '請點擊左右兩幅圖中明顯不同的3處。',
      vi: 'Chạm 3 chỗ khác biệt rõ ràng giữa ảnh trái và phải.',
      id: 'Ketuk 3 perbedaan besar antara gambar kiri dan kanan.',
    }),
    hotspots: [
      { id: 1, x: 151, y: 74 },
      { id: 2, x: 153, y: 142 },
      { id: 3, x: 276, y: 245 },
    ],
  },
  {
    id: 6,
    imageFile: 'p3_game_spot_the_difference_q6.webp',
    roundTitle: L({
      ko: 'ROUND 6 · 야경',
      en: 'ROUND 6 · Night City',
      ja: 'ROUND 6 · 夜景',
      'zh-CN': 'ROUND 6 · 夜景',
      'zh-TW': 'ROUND 6 · 夜景',
      vi: 'ROUND 6 · Thành phố đêm',
      id: 'ROUND 6 · Kota Malam',
    }),
    instruction: L({
      ko: '좌·우 그림에서 크게 다른 곳 4곳을 터치하세요.',
      en: 'Tap the 4 major differences between the left and right pictures.',
      ja: '左右の絵で大きく違う4か所をタップしてください。',
      'zh-CN': '请点击左右两幅图中明显不同的4处。',
      'zh-TW': '請點擊左右兩幅圖中明顯不同的4處。',
      vi: 'Chạm 4 chỗ khác biệt rõ ràng giữa ảnh trái và phải.',
      id: 'Ketuk 4 perbedaan besar antara gambar kiri dan kanan.',
    }),
    hotspots: [
      { id: 1, x: 90, y: 215, radius: 45 },
      { id: 2, x: 294, y: 91, radius: 45 },
      { id: 3, x: 254, y: 184, radius: 40 },
      { id: 4, x: 121, y: 188 },
    ],
  },
];

export const SPOT_DIFF_MAX_SCORE = getPhase3SpotTheDifferenceMaxScore();

export function getPhase3SpotTheDifferenceResultByType(
  type: string
): Phase3SpotTheDifferenceResult | undefined {
  return phase3SpotTheDifferenceResults.find((r) => r.type === type);
}

export const phase3SpotTheDifferenceResults: Phase3SpotTheDifferenceResult[] = [
  {
    type: 'Type1',
    emoji: '🔍',
    title: L({
      ko: '눈썰미 SOS, 틀린그림 초보',
      en: 'Eagle Eye SOS — Spot-the-Difference Beginner',
      ja: '目利きSOS・間違い探し初心者',
      'zh-CN': '眼力SOS·找不同新手',
      'zh-TW': '眼力SOS·找不同新手',
      vi: 'Mắt tinh SOS — Người mới tìm khác biệt',
      id: 'Mata elang SOS — Pemula cari beda',
    }),
    shortDescription: L({
      ko: '4개 이하를 찾았습니다. 눈에 띄는 큰 차이를 놓치기 쉬운 편입니다.',
      en: 'You found 4 or fewer differences. Easy to miss even major changes.',
      ja: '4個以下しか見つけられませんでした。目立つ違いも見逃しやすいタイプです。',
      'zh-CN': '只找到4处或更少。连明显差异也容易漏掉。',
      'zh-TW': '只找到4處或更少。連明顯差異也容易漏掉。',
      vi: 'Bạn tìm được 4 chỗ trở xuống. Dễ bỏ sót cả khác biệt lớn.',
      id: 'Kamu menemukan 4 atau kurang. Perubahan besar pun mudah terlewat.',
    }),
    description: L({
      ko: '6라운드 20개(라운드당 3~4곳) 중 4개 이하를 찾았습니다. 시간 제한 속에서 눈에 띄는 변화도 놓치는 패턴입니다. 좌우를 천천히 비교하면 금방 늘어납니다.',
      en: 'You found 4 or fewer of 20 differences across 6 timed rounds. You miss even obvious changes under pressure. Slow left-right comparison will help fast.',
      ja: '6ラウンド20か所（各3〜4か所）のうち4か所以下。制限時間内で目立つ違いも見逃しがち。左右をゆっくり比べるとすぐ上達します。',
      'zh-CN': '6轮共20处差异（每轮3~4处）中只找到4处或更少。限时内连明显变化也易漏。慢慢左右对照会进步很快。',
      'zh-TW': '6輪共20處差異（每輪3~4處）中只找到4處或更少。限時內連明顯變化也易漏。慢慢左右對照會進步很快。',
      vi: 'Trong 20 chỗ khác biệt của 6 vòng (3~4/vòng), bạn tìm được 4 trở xuống. Dưới thời gian giới hạn hay bỏ sót thay đổi rõ. So sánh trái-phải chậm sẽ cải thiện nhanh.',
      id: 'Dari 20 perbedaan di 6 ronde (3~4/ronde), kamu menemukan 4 atau kurang. Under timer, perubahan jelas pun terlewat.',
    }),
    levelLabel: L({
      ko: 'Lv.1 틀린그림 초보 🔍',
      en: 'Lv.1 Beginner 🔍',
      ja: 'Lv.1 初心者 🔍',
      'zh-CN': 'Lv.1 新手 🔍',
      'zh-TW': 'Lv.1 新手 🔍',
      vi: 'Lv.1 Người mới 🔍',
      id: 'Lv.1 Pemula 🔍',
    }),
    characteristics: L({
      ko: '발견 0~4개, 큰 차이·시간 압박에 취약',
      en: '0–4 found; weak under time pressure',
      ja: '0〜4個発見・時間プレッシャーに弱い',
      'zh-CN': '发现0~4处，限时压力下薄弱',
      'zh-TW': '發現0~4處，限時壓力下薄弱',
      vi: 'Tìm 0–4; yếu khi áp lực thời gian',
      id: '0–4 ditemukan; lemah under timer',
    }),
    strength: null,
    weakness: L({
      ko: '색·개수·작은 오브젝트',
      en: 'Color, count, small objects',
      ja: '色・個数・小さなオブジェクト',
      'zh-CN': '颜色、数量、小物体',
      'zh-TW': '顏色、數量、小物體',
      vi: 'Màu sắc, số lượng, vật nhỏ',
      id: 'Warna, jumlah, objek kecil',
    }),
    improvementTip: L({
      ko: '한 라운드씩 위→아래, 왼쪽→오른쪽 순서로 훑어보기',
      en: 'Scan each round top-to-bottom, left panel then right',
      ja: '各ラウンドを上から下へ、左→右の順で見る',
      'zh-CN': '每轮从上到下、先左后右扫描',
      'zh-TW': '每輪從上到下、先左後右掃描',
      vi: 'Quét từng vòng từ trên xuống, trái rồi phải',
      id: 'Scan tiap ronde atas-bawah, kiri lalu kanan',
    }),
    oneLiner: L({
      ko: '디테일을 놓치지 않게 천천히 비교해보세요',
      en: 'Compare slowly so you do not miss the details',
      ja: 'ゆっくり比べて細部を見逃さないで',
      'zh-CN': '慢慢对比，别漏掉细节',
      'zh-TW': '慢慢對比，別漏掉細節',
      vi: 'So sánh chậm để không bỏ sót chi tiết',
      id: 'Bandingkan pelan agar detail tidak terlewat',
    }),
    certify: null,
    shareLine: L({
      ko: '틀린그림 챌린지: 눈썰미 SOS 🔍 20개 중 {count}개만 찾음... 너는 몇 개 찾을 수 있어?',
      en: 'Spot-the-Difference: SOS 🔍 I only found {count}/20... how many can you get?',
      ja: '間違い探し：SOS 🔍 20個中{count}個だけ…あなたは何個見つけられる？',
      'zh-CN': '找不同挑战：SOS 🔍 20处只找到{count}处…你能找到几个？',
      'zh-TW': '找不同挑戰：SOS 🔍 20處只找到{count}處…你能找到幾個？',
      vi: 'Tìm khác biệt: SOS 🔍 chỉ tìm {count}/20… bạn được bao nhiêu?',
      id: 'Cari beda: SOS 🔍 cuma {count}/20… kamu bisa berapa?',
    }),
  },
  {
    type: 'Type2',
    emoji: '👀',
    title: L({
      ko: '평균 관찰력, 일반 눈썰미',
      en: 'Average Observer — Normal Eagle Eye',
      ja: '平均観察力・普通の目利き',
      'zh-CN': '平均观察力·普通眼力',
      'zh-TW': '平均觀察力·普通眼力',
      vi: 'Quan sát trung bình — Mắt tinh bình thường',
      id: 'Pengamat rata-rata — Mata elang biasa',
    }),
    shortDescription: L({
      ko: '5~8개를 찾았습니다. 평균 수준의 관찰력입니다.',
      en: 'You found 5–8 differences. Average observation skills.',
      ja: '5〜8個発見。平均的な観察力です。',
      'zh-CN': '找到5~8处。观察力处于平均水平。',
      'zh-TW': '找到5~8處。觀察力處於平均水準。',
      vi: 'Bạn tìm được 5–8 chỗ. Mức quan sát trung bình.',
      id: 'Kamu menemukan 5–8. Keterampilan observasi rata-rata.',
    }),
    description: L({
      ko: '쉬운 라운드는 꽤 찾지만 후반 라운드에서 작은 차이를 놓치는 패턴입니다. 색·개수·위치 차이에 집중하면 점수가 올라갑니다.',
      en: 'You do well on easier rounds but miss small differences later. Focus on color, count, and position changes to score higher.',
      ja: '前半は比較的見つけられるが、後半の小さな違いを見逃しがち。色・個数・位置の変化に注目すると点数が上がります。',
      'zh-CN': '前几轮表现不错，但后几轮容易漏掉小差异。关注颜色、数量和位置变化会提高分数。',
      'zh-TW': '前幾輪表現不錯，但後幾輪容易漏掉小差異。關注顏色、數量和位置變化會提高分數。',
      vi: 'Làm tốt các vòng dễ nhưng hay bỏ sót chi tiết ở vòng sau. Tập trung vào màu, số lượng, vị trí sẽ tăng điểm.',
      id: 'Bagus di ronde awal tapi melewatkan detail di ronde akhir. Fokus warna, jumlah, posisi.',
    }),
    levelLabel: L({
      ko: 'Lv.2 일반 눈썰미 👀',
      en: 'Lv.2 Normal 👀',
      ja: 'Lv.2 普通 👀',
      'zh-CN': 'Lv.2 普通 👀',
      'zh-TW': 'Lv.2 普通 👀',
      vi: 'Lv.2 Bình thường 👀',
      id: 'Lv.2 Normal 👀',
    }),
    characteristics: L({
      ko: '발견 5~8개, 전반 OK·후반·시간 압박 취약',
      en: '5–8 found; OK early, weak under late-round time pressure',
      ja: '5〜8個・前半OK・後半の時間プレッシャーが苦手',
      'zh-CN': '发现5~8处，前半OK，后几轮限时弱',
      'zh-TW': '發現5~8處，前半OK，後幾輪限時弱',
      vi: '5–8; ổn đầu, yếu khi hết giờ cuối',
      id: '5–8; awal OK, lemah timer akhir',
    }),
    strength: L({
      ko: '큰 변화·색상 차이',
      en: 'Big changes and color differences',
      ja: '大きな変化・色の違い',
      'zh-CN': '大变化与颜色差异',
      'zh-TW': '大變化與顏色差異',
      vi: 'Thay đổi lớn và khác màu',
      id: 'Perubahan besar dan beda warna',
    }),
    weakness: L({
      ko: '작은 오브젝트·개수 차이',
      en: 'Small objects and count differences',
      ja: '小さなオブジェクト・個数差',
      'zh-CN': '小物体与数量差',
      'zh-TW': '小物體與數量差',
      vi: 'Vật nhỏ và khác số lượng',
      id: 'Objek kecil dan beda jumlah',
    }),
    improvementTip: L({
      ko: '한 라운드에서 못 찾으면 화면 구역별로 나눠 다시 보기',
      en: 'If you miss any in a round, rescan by screen zones',
      ja: '見つからなければ画面を区域分けして再スキャン',
      'zh-CN': '一轮没找全就分区重新扫描',
      'zh-TW': '一輪沒找全就分區重新掃描',
      vi: 'Nếu chưa đủ, quét lại theo từng vùng màn hình',
      id: 'Kalau belum lengkap, scan ulang per zona layar',
    }),
    oneLiner: L({
      ko: '평균입니다. 연습하면 더 올릴 수 있어요',
      en: 'Average — practice will raise your score',
      ja: '平均。練習すればもっと上がります',
      'zh-CN': '平均水平，多练还能提高',
      'zh-TW': '平均水準，多練還能提高',
      vi: 'Trung bình — luyện thêm sẽ lên điểm',
      id: 'Rata-rata — latihan akan naikkan skor',
    }),
    certify: null,
    shareLine: L({
      ko: '틀린그림 챌린지: 일반 눈썰미 👀 20개 중 {count}개… 꽤 찾음 → 너도 도전',
      en: 'Spot-the-Difference: Normal 👀 {count}/20 found — decent score. Your turn!',
      ja: '間違い探し：普通 👀 20個中{count}個…まあまあ → あなたも挑戦',
      'zh-CN': '找不同：普通 👀 20处找到{count}处…还行 → 你也来',
      'zh-TW': '找不同：普通 👀 20處找到{count}處…還行 → 你也來',
      vi: 'Tìm khác biệt: Bình thường 👀 {count}/20 — khá ổn → thử đi',
      id: 'Cari beda: Normal 👀 {count}/20 — lumayan → coba kamu',
    }),
  },
  {
    type: 'Type3',
    emoji: '✅',
    title: L({
      ko: '관찰력 우수, 눈썰미 살아있음',
      en: 'Sharp Observer — Eagle Eye Alive',
      ja: '観察力優秀・目利き健在',
      'zh-CN': '观察力优秀·眼力在线',
      'zh-TW': '觀察力優秀·眼力在線',
      vi: 'Quan sát giỏi — Mắt tinh còn sắc',
      id: 'Pengamat tajam — Mata elang hidup',
    }),
    shortDescription: L({
      ko: '9~12개를 찾았습니다. 평균 이상의 관찰력입니다.',
      en: 'You found 9–12 differences. Above-average observation.',
      ja: '9〜12個発見。平均以上の観察力です。',
      'zh-CN': '找到9~12处。观察力高于平均。',
      'zh-TW': '找到9~12處。觀察力高於平均。',
      vi: 'Bạn tìm được 9–12 chỗ. Trên mức trung bình.',
      id: 'Kamu menemukan 9–12. Di atas rata-rata.',
    }),
    description: L({
      ko: '대부분의 라운드에서 절반 이상을 찾았습니다. 색·개수·위치 차이를 꽤 잘 포착합니다. 후반 1~2개만 더 찾으면 고수 등급입니다.',
      en: 'You found more than half in most rounds. You catch color, count, and position changes well. Find 1–2 more in late rounds for expert grade.',
      ja: 'ほとんどのラウンドで半分以上発見。色・個数・位置の違いをよく捉えています。後半であと1〜2個で上級者。',
      'zh-CN': '大多数轮次找到一半以上。颜色、数量、位置差异抓得不错。后几轮再找1~2处就是高手。',
      'zh-TW': '大多數輪次找到一半以上。顏色、數量、位置差異抓得不錯。後幾輪再找1~2處就是高手。',
      vi: 'Hầu hết vòng tìm được hơn nửa. Bắt tốt khác màu, số lượng, vị trí. Thêm 1–2 ở cuối là cao thủ.',
      id: 'Kebanyakan ronde lebih dari setengah. Tangkap warna, jumlah, posisi dengan baik.',
    }),
    levelLabel: L({
      ko: 'Lv.3 눈썰미 살아있음 ✅',
      en: 'Lv.3 Eagle Eye Alive ✅',
      ja: 'Lv.3 目利き健在 ✅',
      'zh-CN': 'Lv.3 眼力在线 ✅',
      'zh-TW': 'Lv.3 眼力在線 ✅',
      vi: 'Lv.3 Mắt tinh sắc ✅',
      id: 'Lv.3 Mata elang hidup ✅',
    }),
    characteristics: L({
      ko: '발견 9~12개, 색·위치 차이 양호',
      en: '9–12 found; good on color and position',
      ja: '9〜12個・色・位置の違いが良好',
      'zh-CN': '发现9~12处，颜色位置均佳',
      'zh-TW': '發現9~12處，顏色位置均佳',
      vi: '9–12; tốt màu và vị trí',
      id: '9–12; bagus warna dan posisi',
    }),
    strength: L({
      ko: '중간 난이도 라운드',
      en: 'Mid-difficulty rounds',
      ja: '中級ラウンド',
      'zh-CN': '中等难度轮次',
      'zh-TW': '中等難度輪次',
      vi: 'Vòng độ khó trung bình',
      id: 'Ronde menengah',
    }),
    weakness: L({
      ko: '극소형 디테일 1~2개',
      en: '1–2 tiny details',
      ja: '極小ディテール1〜2個',
      'zh-CN': '1~2处极小细节',
      'zh-TW': '1~2處極小細節',
      vi: '1–2 chi tiết cực nhỏ',
      id: '1–2 detail sangat kecil',
    }),
    improvementTip: L({
      ko: '찾은 곳 주변을 한 번 더 확인하기',
      en: 'Double-check areas near spots you already found',
      ja: '見つけた場所の周辺を再確認',
      'zh-CN': '已找到位置附近再检查一遍',
      'zh-TW': '已找到位置附近再檢查一遍',
      vi: 'Kiểm tra lại vùng quanh chỗ đã tìm',
      id: 'Cek ulang area sekitar yang sudah ditemukan',
    }),
    oneLiner: L({
      ko: '눈썰미 좋은 편입니다. 거의 만점까지 갈 수 있어요',
      en: 'Strong eyes — almost perfect score is within reach',
      ja: '目利き良好。満点も目前です',
      'zh-CN': '眼力不错，接近满分',
      'zh-TW': '眼力不錯，接近滿分',
      vi: 'Mắt tinh tốt — gần điểm tối đa',
      id: 'Mata elang bagus — hampir sempurna',
    }),
    certify: null,
    shareLine: L({
      ko: '틀린그림 챌린지: 눈썰미 살아있음 ✅ 20개 중 {count}개… 후반 1~2개만 아쉬움 → 너는?',
      en: 'Spot-the-Difference: Alive ✅ {count}/20 — just missed 1–2. Beat me?',
      ja: '間違い探し：健在 ✅ 20個中{count}個…後半1〜2個惜しい → あなたは？',
      'zh-CN': '找不同：在线 ✅ 20处找到{count}处…差1~2处 → 你呢？',
      'zh-TW': '找不同：在線 ✅ 20處找到{count}處…差1~2處 → 你呢？',
      vi: 'Tìm khác biệt: Sắc ✅ {count}/20 — tiếc 1–2 chỗ → bạn?',
      id: 'Cari beda: Hidup ✅ {count}/20 — sayang 1–2 → kamu?',
    }),
  },
  {
    type: 'Type4',
    emoji: '🔥',
    title: L({
      ko: '관찰력 고수, 눈썰미 풀가동',
      en: 'Expert Observer — Full Eagle Eye',
      ja: '観察力上級・目利きフル稼働',
      'zh-CN': '观察力高手·眼力全开',
      'zh-TW': '觀察力高手·眼力全開',
      vi: 'Quan sát cao thủ — Mắt tinh full',
      id: 'Pengamat ahli — Mata elang full',
    }),
    shortDescription: L({
      ko: '13~16개를 찾았습니다. 상위권 관찰력입니다.',
      en: 'You found 13–16 differences. Top-tier observation.',
      ja: '13〜16個発見。上位の観察力です。',
      'zh-CN': '找到13~16处。观察力处于上游。',
      'zh-TW': '找到13~16處。觀察力處於上游。',
      vi: 'Bạn tìm được 13–16 chỗ. Top quan sát.',
      id: 'Kamu menemukan 13–16. Observasi tier atas.',
    }),
    description: L({
      ko: '거의 모든 라운드에서 대부분의 차이를 찾았습니다. 작은 디테일까지 꾸준히 포착하는 타입입니다. 만점까지 1~2라운드만 더 집중하면 됩니다.',
      en: 'You found most differences in nearly every round. You consistently catch small details. One or two more focused rounds for a perfect score.',
      ja: 'ほぼ全ラウンドで大部分を発見。小さな違いも安定して見つけます。満点まであと1〜2ラウンドの集中。',
      'zh-CN': '几乎每轮都找到大部分差异。稳定捕捉小细节。再专注1~2轮就满分。',
      'zh-TW': '幾乎每輪都找到大部分差異。穩定捕捉小細節。再專注1~2輪就滿分。',
      vi: 'Hầu như mọi vòng tìm được hầu hết. Bắt ổn định chi tiết nhỏ. Thêm 1–2 vòng tập trung là max.',
      id: 'Hampir setiap ronde kebanyakan ditemukan. Tangkap detail kecil konsisten.',
    }),
    levelLabel: L({
      ko: 'Lv.4 눈썰미 풀가동 🔥',
      en: 'Lv.4 Full Power 🔥',
      ja: 'Lv.4 フル稼働 🔥',
      'zh-CN': 'Lv.4 全开 🔥',
      'zh-TW': 'Lv.4 全開 🔥',
      vi: 'Lv.4 Full 🔥',
      id: 'Lv.4 Full 🔥',
    }),
    characteristics: L({
      ko: '발견 13~16개, 후반 라운드·시간 압박 강함',
      en: '13–16 found; strong in late rounds under time pressure',
      ja: '13〜16個・後半ラウンドと時間プレッシャーに強い',
      'zh-CN': '发现13~16处，后几轮限时强',
      'zh-TW': '發現13~16處，後幾輪限時強',
      vi: '13–16; mạnh ở vòng cuối dưới áp lực thời gian',
      id: '13–16; kuat di ronde akhir under timer',
    }),
    strength: L({
      ko: '색·개수·위치·작은 오브젝트',
      en: 'Color, count, position, small objects',
      ja: '色・個数・位置・小オブジェクト',
      'zh-CN': '颜色、数量、位置、小物体',
      'zh-TW': '顏色、數量、位置、小物體',
      vi: 'Màu, số lượng, vị trí, vật nhỏ',
      id: 'Warna, jumlah, posisi, objek kecil',
    }),
    weakness: L({
      ko: '만점까지 1~2개 차이',
      en: '1–2 away from perfect',
      ja: '満点まで1〜2個',
      'zh-CN': '距满分差1~2处',
      'zh-TW': '距滿分差1~2處',
      vi: 'Cách max 1–2 chỗ',
      id: '1–2 lagi dari sempurna',
    }),
    improvementTip: null,
    oneLiner: L({
      ko: '거의 끝판왕입니다. 만점 도전 가능',
      en: 'Almost ultimate — perfect score is possible',
      ja: 'ほぼ究極。満点可能',
      'zh-CN': '接近终极，可冲满分',
      'zh-TW': '接近終極，可衝滿分',
      vi: 'Gần tối thượng — có thể max điểm',
      id: 'Hampir ultimate — skor sempurna mungkin',
    }),
    certify: null,
    shareLine: L({
      ko: '틀린그림 챌린지: 눈썰미 풀가동 🔥 20개 중 {count}개… 만점 아깝게 놓침 → 이겨봐',
      en: 'Spot-the-Difference: Full 🔥 {count}/20 — so close to perfect. Beat me!',
      ja: '間違い探し：フル 🔥 20個中{count}個…満点惜しい → 勝てる？',
      'zh-CN': '找不同：全开 🔥 20处找到{count}处…差满分 → 赢我',
      'zh-TW': '找不同：全開 🔥 20處找到{count}處…差滿分 → 贏我',
      vi: 'Tìm khác biệt: Full 🔥 {count}/20 — tiếc max → thắng tôi',
      id: 'Cari beda: Full 🔥 {count}/20 — hampir sempurna → kalahkan',
    }),
  },
  {
    type: 'Type5',
    emoji: '🏆',
    title: L({
      ko: '틀린그림 끝판왕, 인간 스캐너',
      en: 'Spot-the-Difference Ultimate — Human Scanner',
      ja: '間違い探し究極・人間スキャナー',
      'zh-CN': '找不同终极·人形扫描仪',
      'zh-TW': '找不同終極·人形掃描儀',
      vi: 'Tìm khác biệt tối thượng — Máy quét người',
      id: 'Cari beda ultimate — Scanner manusia',
    }),
    shortDescription: L({
      ko: '17~20개를 찾았습니다. 최상위 관찰력입니다.',
      en: 'You found 17–20 differences. Top-tier observation.',
      ja: '17〜20個発見。最上級の観察力です。',
      'zh-CN': '找到17~20处。顶级观察力。',
      'zh-TW': '找到17~20處。頂級觀察力。',
      vi: 'Bạn tìm được 17–20 chỗ. Quan sát đỉnh cao.',
      id: 'Kamu menemukan 17–20. Observasi tier puncak.',
    }),
    description: L({
      ko: '6라운드 20개 차이 중 대부분 또는 전부를 찾았습니다. 짧은 제한 시간 속에서도 색·위치·유무 차이를 빠르게 포착합니다. 친구에게 공유하면 믿지 않을 확률이 높습니다.',
      en: 'You found most or all 20 differences across 6 timed rounds. You quickly spot color, position, and missing-object changes even under short timers. Friends may not believe this result.',
      ja: '6ラウンド20か所の大部分または全部を発見。短い制限時間でも色・位置・有無の違いを素早く捉えます。友達は信じないかも。',
      'zh-CN': '6轮20处差异中找到大部分或全部。短限时内也能快速捕捉颜色、位置与有无变化。朋友可能不信。',
      'zh-TW': '6輪20處差異中找到大部分或全部。短限時內也能快速捕捉顏色、位置與有無變化。朋友可能不信。',
      vi: 'Tìm hầu hết hoặc toàn bộ 20 chỗ trong 6 vòng có giới hạn thời gian. Bắt nhanh khác màu, vị trí, thiếu vật. Bạn bè có thể không tin.',
      id: 'Temukan hampir semua atau semua 20 perbedaan dalam 6 ronde ber-timer. Tangkap cepat warna, posisi, objek hilang.',
    }),
    levelLabel: L({
      ko: 'Lv.5 인간 스캐너 🏆',
      en: 'Lv.5 Human Scanner 🏆',
      ja: 'Lv.5 人間スキャナー 🏆',
      'zh-CN': 'Lv.5 人形扫描仪 🏆',
      'zh-TW': 'Lv.5 人形掃描儀 🏆',
      vi: 'Lv.5 Máy quét người 🏆',
      id: 'Lv.5 Scanner manusia 🏆',
    }),
    characteristics: L({
      ko: '발견 17~20개, 6라운드 전 구간 만점급',
      en: '17–20 found; near-perfect across all 6 rounds',
      ja: '17〜20個・6ラウンド全域で満点級',
      'zh-CN': '发现17~20处，6轮接近满分',
      'zh-TW': '發現17~20處，6輪接近滿分',
      vi: '17–20; gần max cả 6 vòng',
      id: '17–20; hampir sempurna 6 ronde',
    }),
    strength: L({
      ko: '전 라운드·전 유형 차이',
      en: 'All rounds and all difference types',
      ja: '全ラウンド・全タイプの違い',
      'zh-CN': '全轮次·全类型差异',
      'zh-TW': '全輪次·全類型差異',
      vi: 'Mọi vòng và mọi loại khác biệt',
      id: 'Semua ronde dan semua jenis beda',
    }),
    weakness: null,
    improvementTip: null,
    oneLiner: L({
      ko: '당신의 눈은 스캐너입니다. 친구에게 자랑하세요',
      en: 'Your eyes are a scanner. Show your friends',
      ja: 'あなたの目はスキャナー。自慢してください',
      'zh-CN': '你的眼睛是扫描仪。去炫耀吧',
      'zh-TW': '你的眼睛是掃描儀。去炫耀吧',
      vi: 'Mắt bạn là máy quét. Khoe đi',
      id: 'Mata kamu scanner. Pamer ke teman',
    }),
    certify: L({
      ko: '틀린그림 끝판왕 인증 🏆 인간 스캐너',
      en: 'Spot-the-Difference King Certified 🏆 Human Scanner',
      ja: '間違い探し王認証 🏆 人間スキャナー',
      'zh-CN': '找不同之王认证 🏆 人形扫描仪',
      'zh-TW': '找不同之王認證 🏆 人形掃描儀',
      vi: 'Chứng nhận vua tìm khác biệt 🏆 Máy quét người',
      id: 'Sertifikasi raja cari beda 🏆 Scanner manusia',
    }),
    shareLine: L({
      ko: '틀린그림 챌린지: 인간 스캐너 🏆 20개 중 {count}개… 친구들 안 믿을 듯 → 너도 해봐',
      en: 'Spot-the-Difference: Human Scanner 🏆 {count}/20 — friends won&apos;t believe it. Try it!',
      ja: '間違い探し：人間スキャナー 🏆 20個中{count}個…友達信じない → あなたも',
      'zh-CN': '找不同：人形扫描仪 🏆 20处找到{count}处…朋友不信 → 你也来',
      'zh-TW': '找不同：人形掃描儀 🏆 20處找到{count}處…朋友不信 → 你也來',
      vi: 'Tìm khác biệt: Máy quét 🏆 {count}/20 — bạn bè không tin → thử đi',
      id: 'Cari beda: Scanner 🏆 {count}/20 — teman nggak percaya → coba',
    }),
  },
];
