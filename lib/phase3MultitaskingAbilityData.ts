/** 나의 '멀티태스킹' 능력치 — 5라운드 실시간 수행, 총점 0~100 → Type1~6 */

type Locale = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';
type ML = Record<Locale, string>;
function L(m: ML): Record<string, string> {
  return m;
}
function section(title: ML, content: ML): Phase3MultitaskingAbilityResultSection {
  return { title: L(title), content: L(content) };
}

export interface Phase3MultitaskingAbilityResultSection {
  title: Record<string, string>;
  content: Record<string, string>;
}

export interface Phase3MultitaskingAbilityResult {
  type: string;
  emoji: string;
  grade: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  keywords: Record<string, string>;
  sections: Phase3MultitaskingAbilityResultSection[];
  shareMessage: Record<string, string>;
}

export function calculatePhase3MultitaskingAbilityResult(total: number): string {
  const t = Math.max(0, Math.min(100, Math.round(total)));
  if (t <= 15) return 'Type1';
  if (t <= 30) return 'Type2';
  if (t <= 50) return 'Type3';
  if (t <= 70) return 'Type4';
  if (t <= 85) return 'Type5';
  return 'Type6';
}

/** Round1 speed points from average reaction ms (0~10) */
export function scoreRound1Speed(avgMs: number): number {
  if (avgMs <= 250) return 10;
  if (avgMs <= 350) return 8;
  if (avgMs <= 450) return 6;
  if (avgMs <= 600) return 4;
  return 2;
}

/** Round1: accuracy (hits/10)*10 + speed 0~10 → max 20 */
export function scoreRound1(hits: number, avgMs: number): number {
  const accuracy = (Math.min(10, Math.max(0, hits)) / 10) * 10;
  return Math.min(20, accuracy + scoreRound1Speed(avgMs));
}

/** Round2 speed vs Round1 baseline degradation (0~5) — 관대하게 */
export function scoreRound2Speed(baselineMs: number, dualAvgMs: number): number {
  if (!baselineMs || baselineMs <= 0) return 3;
  const deg = ((dualAvgMs - baselineMs) / baselineMs) * 100;
  if (deg <= 25) return 5;
  if (deg <= 50) return 3;
  if (deg <= 80) return 2;
  return 1;
}

/** Round2: (hits/20)*15 + speed 0~5 → max 20 */
export function scoreRound2(hits: number, baselineMs: number, dualAvgMs: number): number {
  const accuracy = (Math.min(20, Math.max(0, hits)) / 20) * 15;
  return Math.min(20, accuracy + scoreRound2Speed(baselineMs, dualAvgMs));
}

/** Round2 timing */
export const R2_TIMEOUT_MS = 2200;
export const R2_ROUND_SEC = 26;

/** Round3 shape click speed 0~5 — 더 관대 */
export function scoreRound3Speed(avgMs: number): number {
  if (avgMs <= 600) return 5;
  if (avgMs <= 900) return 4;
  if (avgMs <= 1300) return 3;
  if (avgMs <= 1800) return 2;
  return 1;
}

/** Round3: memory*10/5 + shapes*5/N + speed → max 20 */
export const R3_SHAPE_COUNT = 12;
export const R3_SHAPE_TIMEOUT_MS = 2200;
export const R3_MEMORY_MS = 7500;
export function scoreRound3(memoryHits: number, shapeHits: number, shapeAvgMs: number): number {
  const mem = (Math.min(5, Math.max(0, memoryHits)) / 5) * 10;
  const shapes = (Math.min(R3_SHAPE_COUNT, Math.max(0, shapeHits)) / R3_SHAPE_COUNT) * 5;
  return Math.min(20, mem + shapes + scoreRound3Speed(shapeAvgMs));
}

/** Round4 totals: color 6 + math 5 + pattern 5 = 16 */
export const R4_COLOR_COUNT = 6;
export const R4_MATH_COUNT = 5;
export const R4_PATTERN_COUNT = 5;
export const R4_TOTAL = R4_COLOR_COUNT + R4_MATH_COUNT + R4_PATTERN_COUNT;
export const R4_TIMEOUT_MS = 3800;
export const R4_ROUND_SEC = 32;

/** Round4: (hits/total)*15 + perfect-set bonus max 5 → max 20 */
export function scoreRound4(hits: number, perfectSets: number): number {
  const accuracy = (Math.min(R4_TOTAL, Math.max(0, hits)) / R4_TOTAL) * 15;
  const bonus = Math.min(5, Math.max(0, perfectSets) * 0.75);
  return Math.min(20, accuracy + bonus);
}

/** Round5: 16 items, longer window */
export const R5_TASK_COUNT = 16;
export const R5_TIMEOUT_MS = 2000;
export const R5_ROUND_SEC = 28;

/** Round5: netCorrect/N*15 + combo bonus max 5 → max 20 */
export function scoreRound5(netCorrect: number, comboBonus: number): number {
  const base = (Math.min(R5_TASK_COUNT, Math.max(0, netCorrect)) / R5_TASK_COUNT) * 15;
  return Math.min(20, base + Math.min(5, Math.max(0, comboBonus)));
}

export const phase3MultitaskingAbilityResults: Phase3MultitaskingAbilityResult[] = [
  {
    type: 'Type1',
    emoji: '🐢',
    grade: 'F',
    title: L({
      ko: '뇌가 버퍼링 중, 딥 포커스 전략형 🐢',
      en: 'Brain buffering — deep-focus strategist 🐢',
      ja: '脳がバッファリング中、ディープフォーカス戦略型 🐢',
      'zh-CN': '大脑缓冲中，深度专注战略型 🐢',
      'zh-TW': '大腦緩衝中，深度專注戰略型 🐢',
      vi: 'Não đang buffer, chiến lược tập trung sâu 🐢',
      id: 'Otak buffering — tipe strategi deep focus 🐢',
    }),
    shortDescription: L({
      ko: '멀티태스킹보다 한 가지에 깊이 집중할 때 당신의 뇌는 훨씬 강해집니다.',
      en: 'Your brain is far stronger when you go deep on one thing than when you juggle many.',
      ja: 'マルチタスクより、一件に深く集中したときのほうが脳ははるかに強いです。',
      'zh-CN': '比起多任务，专注一件事时你的大脑会强得多。',
      'zh-TW': '比起多工，專注一件事時你的大腦會強得多。',
      vi: 'Não của bạn mạnh hơn nhiều khi tập trung sâu vào một việc thay vì làm nhiều việc cùng lúc.',
      id: 'Otakmu jauh lebih kuat saat fokus mendalam pada satu hal daripada multitasking.',
    }),
    description: L({
      ko: '여러 과제가 동시에 쏟아졌을 때 처리 속도와 정확도가 크게 떨어지는 패턴입니다. 이것은 단점이 아닙니다. 뇌 과학 연구에 따르면 멀티태스킹을 잘 못하는 사람이 단일 과제 집중력은 오히려 더 높은 경향이 있습니다.',
      en: 'When several tasks hit at once, your speed and accuracy drop sharply. That is not a flaw. Research suggests people who struggle with multitasking often have stronger single-task focus.',
      ja: '複数の課題が同時に降ってくると、処理速度と正確さが大きく下がるパターンです。これは欠点ではありません。脳科学の研究では、マルチタスクが苦手な人ほど単一課題への集中力が高い傾向があるとされています。',
      'zh-CN': '当多项任务同时涌来时，处理速度和准确度会明显下降。这不是缺点。脑科学研究显示，不擅长多任务的人，往往在单一任务上的专注力更强。',
      'zh-TW': '當多項任務同時湧來時，處理速度與準確度會明顯下降。這不是缺點。腦科學研究顯示，不擅長多工的人，往往在單一任務上的專注力更強。',
      vi: 'Khi nhiều nhiệm vụ ập đến cùng lúc, tốc độ và độ chính xác giảm rõ. Đây không phải điểm yếu. Nghiên cứu khoa học não cho thấy người kém đa nhiệm thường tập trung tốt hơn ở một nhiệm vụ đơn.',
      id: 'Saat banyak tugas datang bersamaan, kecepatan dan akurasi turun tajam. Itu bukan kelemahan. Riset otak menunjukkan orang yang kurang jago multitasking cenderung punya fokus single-task yang lebih kuat.',
    }),
    keywords: L({
      ko: '멀티태스킹 능력치: F, 뇌 사용률: 단일 코어 최적화',
      en: 'Multitasking score: F, Brain mode: single-core optimized',
      ja: 'マルチタスク能力値: F、脳の稼働率: シングルコア最適化',
      'zh-CN': '多任务能力值: F，大脑使用率: 单核优化',
      'zh-TW': '多工能力值: F，大腦使用率: 單核優化',
      vi: 'Chỉ số đa nhiệm: F, Chế độ não: tối ưu đơn nhân',
      id: 'Skor multitasking: F, Mode otak: single-core teroptimasi',
    }),
    sections: [
      section(
        {
          ko: '🧠 멀티태스킹 등급',
          en: '🧠 Multitasking grade',
          ja: '🧠 マルチタスク等級',
          'zh-CN': '🧠 多任务等级',
          'zh-TW': '🧠 多工等級',
          vi: '🧠 Cấp đa nhiệm',
          id: '🧠 Grade multitasking',
        },
        {
          ko: 'F 딥 포커스형 🐢',
          en: 'F Deep-focus type 🐢',
          ja: 'F ディープフォーカス型 🐢',
          'zh-CN': 'F 深度专注型 🐢',
          'zh-TW': 'F 深度專注型 🐢',
          vi: 'F Kiểu tập trung sâu 🐢',
          id: 'F Tipe deep focus 🐢',
        }
      ),
      section(
        {
          ko: '💻 당신의 뇌 스타일',
          en: '💻 Your brain style',
          ja: '💻 あなたの脳スタイル',
          'zh-CN': '💻 你的大脑风格',
          'zh-TW': '💻 你的大腦風格',
          vi: '💻 Phong cách não của bạn',
          id: '💻 Gaya otakmu',
        },
        {
          ko: '단일 코어 고성능 프로세서',
          en: 'High-performance single-core processor',
          ja: 'シングルコア高性能プロセッサ',
          'zh-CN': '单核高性能处理器',
          'zh-TW': '單核高效能處理器',
          vi: 'Bộ xử lý đơn nhân hiệu năng cao',
          id: 'Prosesor single-core berperforma tinggi',
        }
      ),
      section(
        {
          ko: '💪 실제 업무에서의 강점',
          en: '💪 Strengths at work',
          ja: '💪 実務での強み',
          'zh-CN': '💪 实际工作中的优势',
          'zh-TW': '💪 實際工作中的優勢',
          vi: '💪 Điểm mạnh trong công việc',
          id: '💪 Kekuatan di dunia kerja',
        },
        {
          ko: '깊은 집중력·꼼꼼함·품질 높은 결과물',
          en: 'Deep focus · thoroughness · high-quality output',
          ja: '深い集中力・丁寧さ・高品質な成果物',
          'zh-CN': '深度专注 · 细致 · 高质量成果',
          'zh-TW': '深度專注 · 細緻 · 高品質成果',
          vi: 'Tập trung sâu · tỉ mỉ · kết quả chất lượng cao',
          id: 'Fokus mendalam · teliti · hasil berkualitas tinggi',
        }
      ),
      section(
        {
          ko: '🏢 최적 업무 환경',
          en: '🏢 Best work environment',
          ja: '🏢 最適な仕事環境',
          'zh-CN': '🏢 最佳工作环境',
          'zh-TW': '🏢 最佳工作環境',
          vi: '🏢 Môi trường làm việc tối ưu',
          id: '🏢 Lingkungan kerja ideal',
        },
        {
          ko: '방해 없는 환경·포모도로 기법·할 일 하나씩 완전히 끝내기',
          en: 'Distraction-free space · Pomodoro · finish one task completely at a time',
          ja: '妨害のない環境・ポモドーロ法・タスクを一つずつ完了させる',
          'zh-CN': '无干扰环境 · 番茄钟 · 一次彻底完成一件事',
          'zh-TW': '無干擾環境 · 番茄鐘 · 一次徹底完成一件事',
          vi: 'Không bị làm phiền · Pomodoro · hoàn thành từng việc một',
          id: 'Lingkungan bebas gangguan · Pomodoro · selesaikan satu tugas sepenuhnya',
        }
      ),
      section(
        {
          ko: '💡 생산성 향상 팁',
          en: '💡 Productivity tip',
          ja: '💡 生産性アップのヒント',
          'zh-CN': '💡 提升效率小贴士',
          'zh-TW': '💡 提升效率小秘訣',
          vi: '💡 Mẹo nâng năng suất',
          id: '💡 Tips produktivitas',
        },
        {
          ko: '멀티태스킹을 억지로 하려 하지 말기. 오히려 싱글태스킹을 극대화할 환경을 만들기',
          en: 'Do not force multitasking. Build an environment that maximizes single-tasking instead.',
          ja: '無理にマルチタスクしない。むしろシングルタスクを最大化できる環境をつくる',
          'zh-CN': '别硬逼自己多任务。不如打造最大化单任务的环境。',
          'zh-TW': '別硬逼自己多工。不如打造最大化單任務的環境。',
          vi: 'Đừng cố đa nhiệm. Hãy tạo môi trường tối ưu cho việc làm từng việc một.',
          id: 'Jangan memaksakan multitasking. Bangun lingkungan yang memaksimalkan single-tasking.',
        }
      ),
      section(
        {
          ko: '🛠️ 추천 생산성 툴',
          en: '🛠️ Recommended tools',
          ja: '🛠️ おすすめ生産性ツール',
          'zh-CN': '🛠️ 推荐效率工具',
          'zh-TW': '🛠️ 推薦效率工具',
          vi: '🛠️ Công cụ năng suất gợi ý',
          id: '🛠️ Tools produktivitas rekomendasi',
        },
        {
          ko: '딥 포커스 타이머·방해 차단 앱·할 일 우선순위 관리 도구',
          en: 'Deep-focus timer · distraction blockers · priority task managers',
          ja: 'ディープフォーカス用タイマー・妨害遮断アプリ・優先度管理ツール',
          'zh-CN': '深度专注计时器 · 干扰屏蔽应用 · 待办优先级工具',
          'zh-TW': '深度專注計時器 · 干擾封鎖應用 · 待辦優先順序工具',
          vi: 'Timer tập trung sâu · app chặn phân tâm · công cụ ưu tiên việc cần làm',
          id: 'Timer deep focus · app pemblokir gangguan · tools prioritas tugas',
        }
      ),
    ],
    shareMessage: L({
      ko: '멀티태스킹 능력치: 딥 포커스형 🐢 한 가지에 집중하는 게 맞는 뇌래... 멀티태스킹 억지로 하지 말라는 거 과학적으로 인증됨 ㅋㅋ → 너는 몇 점이야? 실제로 해보는 테스트',
      en: 'Multitasking score: Deep-focus type 🐢 My brain is built for one thing at a time... science says stop forcing multitasking lol → What did you get? Real click test',
      ja: 'マルチタスク能力値: ディープフォーカス型 🐢 一件集中が合う脳らしい…無理なマルチタスクは科学的にもNGらしい 笑 → 君は何点？実際にやるテスト',
      'zh-CN': '多任务能力值：深度专注型 🐢 大脑更适合专注一件事…别硬多任务，科学认证了哈哈 → 你几分？真的要动手测',
      'zh-TW': '多工能力值：深度專注型 🐢 大腦更適合專注一件事…別硬多工，科學認證了哈哈 → 你幾分？真的要動手測',
      vi: 'Chỉ số đa nhiệm: Kiểu tập trung sâu 🐢 Não hợp làm một việc... đừng cố đa nhiệm, khoa học cũng nói vậy luôn → Bạn bao nhiêu điểm? Test thật sự click',
      id: 'Skor multitasking: Tipe deep focus 🐢 Otakku emang cocok fokus satu hal... jangan dipaksa multitasking, udah dibuktikan ilmiah wkwk → Kamu berapa? Tes klik beneran',
    }),
  },
  {
    type: 'Type2',
    emoji: '📋',
    grade: 'D',
    title: L({
      ko: '순서가 있는 사람, 순차 처리 고수형 📋',
      en: 'Order-first mind — sequential processing pro 📋',
      ja: '順番がある人、逐次処理マスター型 📋',
      'zh-CN': '有顺序感的人，顺序处理高手型 📋',
      'zh-TW': '有順序感的人，順序處理高手型 📋',
      vi: 'Người thích thứ tự, cao thủ xử lý tuần tự 📋',
      id: 'Orang yang suka urutan — jago proses berurutan 📋',
    }),
    shortDescription: L({
      ko: '동시에 처리하는 것보다 순서를 정해서 하나씩 처리하는 것이 더 효율적입니다.',
      en: 'Setting an order and handling tasks one by one works better for you than doing them all at once.',
      ja: '同時処理より、順番を決めて一つずつ進めるほうが効率的です。',
      'zh-CN': '比起同时处理，排好顺序一件件做对你更高效。',
      'zh-TW': '比起同時處理，排好順序一件件做對你更高效。',
      vi: 'Với bạn, xếp thứ tự rồi làm từng việc một hiệu quả hơn làm đồng thời.',
      id: 'Buatmu, tentukan urutan lalu kerjakan satu per satu jauh lebih efisien daripada sekaligus.',
    }),
    description: L({
      ko: '여러 과제가 쏟아지면 자연스럽게 우선순위를 정하고 하나씩 처리하는 패턴입니다. 겉으로는 멀티태스킹처럼 보이지만 실제로는 빠른 순차 처리입니다. 이 방식이 오히려 오류율이 낮고 품질이 높습니다.',
      en: 'When tasks pile up, you naturally prioritize and work through them one by one. It can look like multitasking, but it is fast sequential processing — and that often means fewer errors and higher quality.',
      ja: '課題が押し寄せると、自然と優先順位を決めて一つずつ処理するパターンです。見た目はマルチタスクでも、実態は高速な逐次処理。むしろエラー率が低く、品質が高くなります。',
      'zh-CN': '任务一多，你会自然排出优先级并一件件处理。表面像多任务，其实是快速的顺序处理——错误更少、质量更高。',
      'zh-TW': '任務一多，你會自然排出優先順序並一件件處理。表面像多工，其實是快速的順序處理——錯誤更少、品質更高。',
      vi: 'Khi việc đổ dồn, bạn tự xếp ưu tiên và xử lý từng cái. Nhìn như đa nhiệm nhưng thực ra là xử lý tuần tự nhanh — ít lỗi hơn, chất lượng cao hơn.',
      id: 'Saat tugas menumpuk, kamu otomatis prioritas lalu kerjakan satu per satu. Kelihatan multitasking, tapi sebenarnya sequential cepat — error lebih rendah, kualitas lebih tinggi.',
    }),
    keywords: L({
      ko: '멀티태스킹 능력치: D, 뇌 사용률: 빠른 태스크 전환 모드',
      en: 'Multitasking score: D, Brain mode: fast task-switching',
      ja: 'マルチタスク能力値: D、脳の稼働率: 高速タスク切替モード',
      'zh-CN': '多任务能力值: D，大脑使用率: 快速任务切换模式',
      'zh-TW': '多工能力值: D，大腦使用率: 快速任務切換模式',
      vi: 'Chỉ số đa nhiệm: D, Chế độ não: chuyển nhiệm vụ nhanh',
      id: 'Skor multitasking: D, Mode otak: task-switching cepat',
    }),
    sections: [
      section(
        {
          ko: '🧠 멀티태스킹 등급',
          en: '🧠 Multitasking grade',
          ja: '🧠 マルチタスク等級',
          'zh-CN': '🧠 多任务等级',
          'zh-TW': '🧠 多工等級',
          vi: '🧠 Cấp đa nhiệm',
          id: '🧠 Grade multitasking',
        },
        {
          ko: 'D 순차 처리 고수형 📋',
          en: 'D Sequential processing pro 📋',
          ja: 'D 逐次処理マスター型 📋',
          'zh-CN': 'D 顺序处理高手型 📋',
          'zh-TW': 'D 順序處理高手型 📋',
          vi: 'D Cao thủ xử lý tuần tự 📋',
          id: 'D Jago proses berurutan 📋',
        }
      ),
      section(
        {
          ko: '💻 당신의 뇌 스타일',
          en: '💻 Your brain style',
          ja: '💻 あなたの脳スタイル',
          'zh-CN': '💻 你的大脑风格',
          'zh-TW': '💻 你的大腦風格',
          vi: '💻 Phong cách não của bạn',
          id: '💻 Gaya otakmu',
        },
        {
          ko: '빠른 탭 전환 모드',
          en: 'Fast tab-switching mode',
          ja: '高速タブ切替モード',
          'zh-CN': '快速标签切换模式',
          'zh-TW': '快速分頁切換模式',
          vi: 'Chế độ chuyển tab nhanh',
          id: 'Mode ganti tab cepat',
        }
      ),
      section(
        {
          ko: '💪 실제 업무에서의 강점',
          en: '💪 Strengths at work',
          ja: '💪 実務での強み',
          'zh-CN': '💪 实际工作中的优势',
          'zh-TW': '💪 實際工作中的優勢',
          vi: '💪 Điểm mạnh trong công việc',
          id: '💪 Kekuatan di dunia kerja',
        },
        {
          ko: '체계적 처리·낮은 오류율·완성도 높음',
          en: 'Systematic flow · low error rate · high completion quality',
          ja: '体系的な処理・低いエラー率・高い完成度',
          'zh-CN': '系统化处理 · 低错误率 · 完成度高',
          'zh-TW': '系統化處理 · 低錯誤率 · 完成度高',
          vi: 'Xử lý có hệ thống · ít lỗi · độ hoàn thiện cao',
          id: 'Proses sistematis · error rendah · penyelesaian berkualitas',
        }
      ),
      section(
        {
          ko: '🏢 최적 업무 환경',
          en: '🏢 Best work environment',
          ja: '🏢 最適な仕事環境',
          'zh-CN': '🏢 最佳工作环境',
          'zh-TW': '🏢 最佳工作環境',
          vi: '🏢 Môi trường làm việc tối ưu',
          id: '🏢 Lingkungan kerja ideal',
        },
        {
          ko: '업무를 블록으로 나눠서 처리·태스크 목록 관리',
          en: 'Work in time blocks · manage a clear task list',
          ja: '仕事をブロック分けして進める・タスクリスト管理',
          'zh-CN': '按时间块处理工作 · 管理任务清单',
          'zh-TW': '按時間區塊處理工作 · 管理任務清單',
          vi: 'Chia việc theo khối thời gian · quản lý danh sách nhiệm vụ',
          id: 'Kerjakan per blok waktu · kelola daftar tugas',
        }
      ),
      section(
        {
          ko: '💡 생산성 향상 팁',
          en: '💡 Productivity tip',
          ja: '💡 生産性アップのヒント',
          'zh-CN': '💡 提升效率小贴士',
          'zh-TW': '💡 提升效率小秘訣',
          vi: '💡 Mẹo nâng năng suất',
          id: '💡 Tips produktivitas',
        },
        {
          ko: '중요도·긴급도 매트릭스로 할 일 분류하기. 시간 블로킹 기법 시도',
          en: 'Sort tasks with an importance–urgency matrix. Try time blocking.',
          ja: '重要度・緊急度マトリクスでタスク分類。タイムブロッキングを試す',
          'zh-CN': '用重要–紧急矩阵分类待办。试试时间块法。',
          'zh-TW': '用重要–緊急矩陣分類待辦。試試時間區塊法。',
          vi: 'Phân loại việc bằng ma trận quan trọng–khẩn cấp. Thử time blocking.',
          id: 'Klasifikasikan tugas dengan matriks penting–mendesak. Coba time blocking.',
        }
      ),
      section(
        {
          ko: '🛠️ 추천 생산성 툴',
          en: '🛠️ Recommended tools',
          ja: '🛠️ おすすめ生産性ツール',
          'zh-CN': '🛠️ 推荐效率工具',
          'zh-TW': '🛠️ 推薦效率工具',
          vi: '🛠️ Công cụ năng suất gợi ý',
          id: '🛠️ Tools produktivitas rekomendasi',
        },
        {
          ko: '프로젝트 관리 앱·캘린더 블로킹 도구·배치 처리 자동화 툴',
          en: 'Project managers · calendar blocking tools · batch-automation apps',
          ja: 'プロジェクト管理アプリ・カレンダーブロッキング・バッチ自動化ツール',
          'zh-CN': '项目管理应用 · 日历时间块工具 · 批量自动化工具',
          'zh-TW': '專案管理應用 · 日曆時間區塊工具 · 批次自動化工具',
          vi: 'App quản lý dự án · công cụ chặn lịch · tool tự động hóa theo lô',
          id: 'App manajemen proyek · tools calendar blocking · otomasi batch',
        }
      ),
    ],
    shareMessage: L({
      ko: '멀티태스킹 능력치: 순차 처리형 📋 순서 정해서 하나씩 하는 게 더 효율적인 뇌래... 맞음 나 원래 그렇게 함 ㅋㅋ → 너 멀티태스킹 진짜로 측정해봐',
      en: 'Multitasking score: Sequential type 📋 My brain works better one-by-one in order... yup that is literally me lol → Measure your multitasking for real',
      ja: 'マルチタスク能力値: 逐次処理型 📋 順番決めて一つずつが効率いい脳らしい…うん、それ私 笑 → 君も本物のマルチタスク測定やってみて',
      'zh-CN': '多任务能力值：顺序处理型 📋 排好顺序一件件做更高效…对对我就是这样哈哈 → 来真测一下你的多任务',
      'zh-TW': '多工能力值：順序處理型 📋 排好順序一件件做更高效…對對我就是這樣哈哈 → 來真測一下你的多工',
      vi: 'Chỉ số đa nhiệm: Kiểu tuần tự 📋 Não kiểu xếp thứ tự rồi làm lần lượt mới hiệu quả... đúng tôi luôn 😂 → Đo đa nhiệm thật đi',
      id: 'Skor multitasking: Tipe berurutan 📋 Otakku lebih efisien urut dulu baru kerjakan... iya banget aku wkwk → Ukur multitaskingmu beneran',
    }),
  },
  {
    type: 'Type3',
    emoji: '⚖️',
    grade: 'C',
    title: L({
      ko: '적당히 잘 하는 사람, 균형형 멀티태스커 ⚖️',
      en: 'Solidly capable — balanced multitasker ⚖️',
      ja: 'ほどよくできる人、バランス型マルチタスカー ⚖️',
      'zh-CN': '做得还不错的人，均衡型多任务者 ⚖️',
      'zh-TW': '做得還不錯的人，均衡型多工者 ⚖️',
      vi: 'Làm ổn vừa đủ, đa nhiệm cân bằng ⚖️',
      id: 'Cukup jago — multitasker seimbang ⚖️',
    }),
    shortDescription: L({
      ko: '두 가지까지는 꽤 잘 처리하는데 세 가지부터 효율이 떨어지기 시작합니다.',
      en: 'You handle two things pretty well — efficiency starts to dip once a third joins in.',
      ja: '二つまではかなりうまく処理できるが、三つ目から効率が落ち始めます。',
      'zh-CN': '两件事你能处理得不错，从第三件开始效率开始下滑。',
      'zh-TW': '兩件事你能處理得不錯，從第三件開始效率開始下滑。',
      vi: 'Hai việc thì ổn, từ việc thứ ba hiệu suất bắt đầu giảm.',
      id: 'Dua tugas masih oke — mulai turun begitu ada yang ketiga.',
    }),
    description: L({
      ko: '이중 과제 처리는 무난하게 잘 하지만 삼중 이상에서 정확도나 속도가 낮아지는 패턴입니다. 이것은 대부분의 사람이 해당하는 구간입니다. 지금도 충분하지만 약간의 훈련으로 더 올릴 수 있습니다.',
      en: 'Dual tasks feel manageable, but accuracy or speed drops with three or more. That is where most people land. You are fine already — a little practice can still push you higher.',
      ja: '二重課題は無難にこなせますが、三重以上で正確さや速度が落ちるパターンです。多くの人が該当するゾーン。今でも十分ですが、少しの訓練でさらに上げられます。',
      'zh-CN': '双重任务你能轻松应对，三重及以上准确度或速度会下降。这是大多数人的区间。已经够用，稍加训练还能再提升。',
      'zh-TW': '雙重任務你能輕鬆應對，三重及以上準確度或速度會下降。這是大多數人的區間。已經夠用，稍加訓練還能再提升。',
      vi: 'Hai nhiệm vụ thì ổn, từ ba trở lên độ chính xác hoặc tốc độ giảm. Đây là vùng của hầu hết mọi người. Đã đủ tốt, luyện thêm một chút là lên được.',
      id: 'Dual task masih aman, tapi di tiga atau lebih akurasi/kecepatan turun. Zona kebanyakan orang. Sudah cukup bagus — latihan sedikit bisa naik lagi.',
    }),
    keywords: L({
      ko: '멀티태스킹 능력치: C, 뇌 사용률: 듀얼 코어 작동 중',
      en: 'Multitasking score: C, Brain mode: dual-core running',
      ja: 'マルチタスク能力値: C、脳の稼働率: デュアルコア稼働中',
      'zh-CN': '多任务能力值: C，大脑使用率: 双核运转中',
      'zh-TW': '多工能力值: C，大腦使用率: 雙核運轉中',
      vi: 'Chỉ số đa nhiệm: C, Chế độ não: dual-core đang chạy',
      id: 'Skor multitasking: C, Mode otak: dual-core aktif',
    }),
    sections: [
      section(
        {
          ko: '🧠 멀티태스킹 등급',
          en: '🧠 Multitasking grade',
          ja: '🧠 マルチタスク等級',
          'zh-CN': '🧠 多任务等级',
          'zh-TW': '🧠 多工等級',
          vi: '🧠 Cấp đa nhiệm',
          id: '🧠 Grade multitasking',
        },
        {
          ko: 'C 균형형 멀티태스커 ⚖️',
          en: 'C Balanced multitasker ⚖️',
          ja: 'C バランス型マルチタスカー ⚖️',
          'zh-CN': 'C 均衡型多任务者 ⚖️',
          'zh-TW': 'C 均衡型多工者 ⚖️',
          vi: 'C Đa nhiệm cân bằng ⚖️',
          id: 'C Multitasker seimbang ⚖️',
        }
      ),
      section(
        {
          ko: '💻 당신의 뇌 스타일',
          en: '💻 Your brain style',
          ja: '💻 あなたの脳スタイル',
          'zh-CN': '💻 你的大脑风格',
          'zh-TW': '💻 你的大腦風格',
          vi: '💻 Phong cách não của bạn',
          id: '💻 Gaya otakmu',
        },
        {
          ko: '듀얼 코어 일반 작동',
          en: 'Standard dual-core operation',
          ja: 'デュアルコア通常稼働',
          'zh-CN': '双核常规运转',
          'zh-TW': '雙核常規運轉',
          vi: 'Dual-core vận hành tiêu chuẩn',
          id: 'Dual-core operasi standar',
        }
      ),
      section(
        {
          ko: '💪 실제 업무에서의 강점',
          en: '💪 Strengths at work',
          ja: '💪 実務での強み',
          'zh-CN': '💪 实际工作中的优势',
          'zh-TW': '💪 實際工作中的優勢',
          vi: '💪 Điểm mạnh trong công việc',
          id: '💪 Kekuatan di dunia kerja',
        },
        {
          ko: '두 가지 병렬 처리·유연한 업무 전환',
          en: 'Solid dual parallel work · flexible task switching',
          ja: '二つの並列処理・柔軟な業務切替',
          'zh-CN': '双任务并行 · 灵活切换工作',
          'zh-TW': '雙任務並行 · 靈活切換工作',
          vi: 'Xử lý song song hai việc · chuyển việc linh hoạt',
          id: 'Paralel dua tugas · switching kerja fleksibel',
        }
      ),
      section(
        {
          ko: '🏢 최적 업무 환경',
          en: '🏢 Best work environment',
          ja: '🏢 最適な仕事環境',
          'zh-CN': '🏢 最佳工作环境',
          'zh-TW': '🏢 最佳工作環境',
          vi: '🏢 Môi trường làm việc tối ưu',
          id: '🏢 Lingkungan kerja ideal',
        },
        {
          ko: '2개 이상의 프로젝트는 시간 분리해서 처리',
          en: 'Split two-plus projects across separate time windows',
          ja: '2つ以上のプロジェクトは時間を分けて処理',
          'zh-CN': '两个以上项目按时间段分开处理',
          'zh-TW': '兩個以上專案按時段分開處理',
          vi: 'Từ hai dự án trở lên thì tách khung giờ xử lý',
          id: 'Dua proyek atau lebih dipisah per slot waktu',
        }
      ),
      section(
        {
          ko: '💡 생산성 향상 팁',
          en: '💡 Productivity tip',
          ja: '💡 生産性アップのヒント',
          'zh-CN': '💡 提升效率小贴士',
          'zh-TW': '💡 提升效率小秘訣',
          vi: '💡 Mẹo nâng năng suất',
          id: '💡 Tips produktivitas',
        },
        {
          ko: '자주 하는 두 가지 과제 조합을 연습해서 자동화 수준으로 올리기',
          en: 'Practice your two most common task pairs until they feel automatic.',
          ja: 'よくやる二つの課題の組み合わせを練習し、自動化レベルまで上げる',
          'zh-CN': '练习常做的两种任务组合，练到接近自动化。',
          'zh-TW': '練習常做的兩種任務組合，練到接近自動化。',
          vi: 'Luyện cặp hai việc hay làm đến mức gần như tự động.',
          id: 'Latih dua kombinasi tugas yang sering muncul sampai hampir otomatis.',
        }
      ),
      section(
        {
          ko: '🛠️ 추천 생산성 툴',
          en: '🛠️ Recommended tools',
          ja: '🛠️ おすすめ生産性ツール',
          'zh-CN': '🛠️ 推荐效率工具',
          'zh-TW': '🛠️ 推薦效率工具',
          vi: '🛠️ Công cụ năng suất gợi ý',
          id: '🛠️ Tools produktivitas rekomendasi',
        },
        {
          ko: '이중 모니터 환경·탭 관리 확장 프로그램·자동화 워크플로우 툴',
          en: 'Dual monitors · tab managers · workflow automation tools',
          ja: 'デュアルモニター環境・タブ管理拡張・自動化ワークフローツール',
          'zh-CN': '双显示器环境 · 标签管理扩展 · 自动化工作流工具',
          'zh-TW': '雙螢幕環境 · 分頁管理擴充 · 自動化工作流程工具',
          vi: 'Hai màn hình · tiện ích quản lý tab · tool tự động hóa workflow',
          id: 'Dual monitor · ekstensi tab manager · tools otomasi workflow',
        }
      ),
    ],
    shareMessage: L({
      ko: '멀티태스킹 능력치: 균형형 ⚖️ 두 가지는 되는데 세 가지부터 버퍼링 시작이래... 이거 실제 클릭 테스트임 말로 하는 게 아님 → 너는 몇 점 나왔어?',
      en: 'Multitasking score: Balanced ⚖️ Two tasks OK, three and my brain starts buffering... real click test not just talk → What score did you get?',
      ja: 'マルチタスク能力値: バランス型 ⚖️ 二つはOK、三つ目からバッファリング開始らしい…実際のクリックテストだよ 口だけじゃない → 君は何点出た？',
      'zh-CN': '多任务能力值：均衡型 ⚖️ 两件还行，三件开始缓冲…这是真点测不是嘴炮 → 你拿了几分？',
      'zh-TW': '多工能力值：均衡型 ⚖️ 兩件還行，三件開始緩衝…這是真點測不是嘴砲 → 你拿了幾分？',
      vi: 'Chỉ số đa nhiệm: Cân bằng ⚖️ Hai việc ổn, ba việc là não buffer... test click thật không nói suông → Bạn được bao nhiêu?',
      id: 'Skor multitasking: Seimbang ⚖️ Dua oke, tiga mulai buffering... ini tes klik beneran bukan omongan → Kamu berapa?',
    }),
  },
  {
    type: 'Type4',
    emoji: '🖥️',
    grade: 'B',
    title: L({
      ko: '꽤 잘 하는 사람, 멀티코어 처리형 🖥️',
      en: 'Pretty sharp — multi-core processor type 🖥️',
      ja: 'かなりできる人、マルチコア処理型 🖥️',
      'zh-CN': '相当厉害的人，多核处理型 🖥️',
      'zh-TW': '相當厲害的人，多核處理型 🖥️',
      vi: 'Khá giỏi, kiểu xử lý đa nhân 🖥️',
      id: 'Cukup jago — tipe prosesor multi-core 🖥️',
    }),
    shortDescription: L({
      ko: '세 가지까지 동시에 처리해도 정확도를 유지하는 수준입니다. 상위 30%에 해당합니다.',
      en: 'You can keep accuracy while handling up to three things at once — top 30%.',
      ja: '三つまで同時に処理しても正確さを保てるレベル。上位30%です。',
      'zh-CN': '同时处理三件事仍能保持准确度，属于前30%。',
      'zh-TW': '同時處理三件事仍能保持準確度，屬於前30%。',
      vi: 'Giữ độ chính xác khi xử lý tới ba việc cùng lúc — top 30%.',
      id: 'Bisa jaga akurasi sambil handle sampai tiga tugas sekaligus — top 30%.',
    }),
    description: L({
      ko: '삼중 과제에서도 비교적 높은 정확도를 유지하고 기억 + 수행을 동시에 처리하는 능력이 있습니다. 빠른 환경 변화에도 적응력이 높고 업무 전환 비용이 낮습니다.',
      en: 'Even on triple tasks you keep solid accuracy and can hold memory while executing. You adapt fast when the environment shifts, with low task-switching cost.',
      ja: '三重課題でも比較的高い正確さを保ち、記憶＋実行を同時にこなせます。環境の急変化にも適応力が高く、業務切替コストが低いタイプです。',
      'zh-CN': '三重任务下仍能保持较高准确度，并能同时记与做。环境变化快时适应力强，切换成本低。',
      'zh-TW': '三重任務下仍能保持較高準確度，並能同時記與做。環境變化快時適應力強，切換成本低。',
      vi: 'Ở nhiệm vụ ba tầng vẫn giữ độ chính xác khá, vừa nhớ vừa thực hiện. Thích nghi nhanh khi môi trường đổi, chi phí chuyển việc thấp.',
      id: 'Di triple task akurasi tetap relatif tinggi, bisa ingat + eksekusi bersamaan. Adaptif saat lingkungan berubah cepat, biaya switching rendah.',
    }),
    keywords: L({
      ko: '멀티태스킹 능력치: B, 뇌 사용률: 멀티코어 고성능 작동',
      en: 'Multitasking score: B, Brain mode: high-performance multi-core',
      ja: 'マルチタスク能力値: B、脳の稼働率: マルチコア高性能稼働',
      'zh-CN': '多任务能力值: B，大脑使用率: 多核高性能运转',
      'zh-TW': '多工能力值: B，大腦使用率: 多核高效能運轉',
      vi: 'Chỉ số đa nhiệm: B, Chế độ não: đa nhân hiệu năng cao',
      id: 'Skor multitasking: B, Mode otak: multi-core performa tinggi',
    }),
    sections: [
      section(
        {
          ko: '🧠 멀티태스킹 등급',
          en: '🧠 Multitasking grade',
          ja: '🧠 マルチタスク等級',
          'zh-CN': '🧠 多任务等级',
          'zh-TW': '🧠 多工等級',
          vi: '🧠 Cấp đa nhiệm',
          id: '🧠 Grade multitasking',
        },
        {
          ko: 'B 멀티코어 처리형 🖥️',
          en: 'B Multi-core processor type 🖥️',
          ja: 'B マルチコア処理型 🖥️',
          'zh-CN': 'B 多核处理型 🖥️',
          'zh-TW': 'B 多核處理型 🖥️',
          vi: 'B Kiểu xử lý đa nhân 🖥️',
          id: 'B Tipe prosesor multi-core 🖥️',
        }
      ),
      section(
        {
          ko: '💻 당신의 뇌 스타일',
          en: '💻 Your brain style',
          ja: '💻 あなたの脳スタイル',
          'zh-CN': '💻 你的大脑风格',
          'zh-TW': '💻 你的大腦風格',
          vi: '💻 Phong cách não của bạn',
          id: '💻 Gaya otakmu',
        },
        {
          ko: '멀티코어 고성능 프로세서',
          en: 'High-performance multi-core processor',
          ja: 'マルチコア高性能プロセッサ',
          'zh-CN': '多核高性能处理器',
          'zh-TW': '多核高效能處理器',
          vi: 'Bộ xử lý đa nhân hiệu năng cao',
          id: 'Prosesor multi-core berperforma tinggi',
        }
      ),
      section(
        {
          ko: '💪 실제 업무에서의 강점',
          en: '💪 Strengths at work',
          ja: '💪 実務での強み',
          'zh-CN': '💪 实际工作中的优势',
          'zh-TW': '💪 實際工作中的優勢',
          vi: '💪 Điểm mạnh trong công việc',
          id: '💪 Kekuatan di dunia kerja',
        },
        {
          ko: '복잡한 환경에서도 퍼포먼스 유지·빠른 컨텍스트 전환',
          en: 'Steady performance in complexity · fast context switching',
          ja: '複雑な環境でもパフォーマンス維持・高速コンテキスト切替',
          'zh-CN': '复杂环境仍能稳住表现 · 快速上下文切换',
          'zh-TW': '複雜環境仍能穩住表現 · 快速情境切換',
          vi: 'Giữ hiệu suất trong môi trường phức tạp · chuyển ngữ cảnh nhanh',
          id: 'Performa stabil di lingkungan kompleks · context switching cepat',
        }
      ),
      section(
        {
          ko: '🏢 최적 업무 환경',
          en: '🏢 Best work environment',
          ja: '🏢 最適な仕事環境',
          'zh-CN': '🏢 最佳工作环境',
          'zh-TW': '🏢 最佳工作環境',
          vi: '🏢 Môi trường làm việc tối ưu',
          id: '🏢 Lingkungan kerja ideal',
        },
        {
          ko: '다양한 역할이 동시에 요구되는 환경에서 강점 발휘',
          en: 'Shines where multiple roles are needed at the same time',
          ja: '複数の役割が同時に求められる環境で強みを発揮',
          'zh-CN': '在同时需要多种角色的环境中发挥优势',
          'zh-TW': '在同時需要多種角色的環境中發揮優勢',
          vi: 'Tỏa sáng khi cần nhiều vai trò cùng lúc',
          id: 'Bersinar saat banyak peran dibutuhkan bersamaan',
        }
      ),
      section(
        {
          ko: '💡 생산성 향상 팁',
          en: '💡 Productivity tip',
          ja: '💡 生産性アップのヒント',
          'zh-CN': '💡 提升效率小贴士',
          'zh-TW': '💡 提升效率小秘訣',
          vi: '💡 Mẹo nâng năng suất',
          id: '💡 Tips produktivitas',
        },
        {
          ko: '이미 잘 하고 있음. 자동화 도구를 더 적극 활용해 능력치를 증폭시키기',
          en: 'You are already strong. Lean harder into automation to multiply your capacity.',
          ja: 'すでに上手。自動化ツールをもっと積極活用して能力値を増幅',
          'zh-CN': '你已经很强了。更积极用自动化工具放大能力。',
          'zh-TW': '你已經很強了。更積極用自動化工具放大能力。',
          vi: 'Bạn đã giỏi rồi. Dùng automation mạnh hơn để nhân đôi năng lực.',
          id: 'Kamu sudah bagus. Pakai otomasi lebih agresif biar kemampuan naik berkali lipat.',
        }
      ),
      section(
        {
          ko: '🛠️ 추천 생산성 툴',
          en: '🛠️ Recommended tools',
          ja: '🛠️ おすすめ生産性ツール',
          'zh-CN': '🛠️ 推荐效率工具',
          'zh-TW': '🛠️ 推薦效率工具',
          vi: '🛠️ Công cụ năng suất gợi ý',
          id: '🛠️ Tools produktivitas rekomendasi',
        },
        {
          ko: '작업 자동화 플랫폼·AI 보조 도구·통합 대시보드',
          en: 'Task automation platforms · AI assistants · unified dashboards',
          ja: '作業自動化プラットフォーム・AI補助ツール・統合ダッシュボード',
          'zh-CN': '任务自动化平台 · AI 辅助工具 · 整合仪表盘',
          'zh-TW': '任務自動化平台 · AI 輔助工具 · 整合儀表板',
          vi: 'Nền tảng tự động hóa · trợ lý AI · dashboard tích hợp',
          id: 'Platform otomasi tugas · asisten AI · dashboard terintegrasi',
        }
      ),
    ],
    shareMessage: L({
      ko: '멀티태스킹 능력치: 멀티코어형 🖥️ 상위 30%... 세 가지 동시 처리 됐음 → 너도 실제로 해봐 생각보다 어려움 ㅋㅋ',
      en: 'Multitasking score: Multi-core 🖥️ Top 30%... pulled off three at once → Try it yourself, harder than it looks lol',
      ja: 'マルチタスク能力値: マルチコア型 🖥️ 上位30%…三つ同時いけた → 君も実際やってみて 思ったよりキツい 笑',
      'zh-CN': '多任务能力值：多核型 🖥️ 前30%…三件同时搞定了 → 你也实测一下，比想象难哈哈',
      'zh-TW': '多工能力值：多核型 🖥️ 前30%…三件同時搞定了 → 你也實測一下，比想像難哈哈',
      vi: 'Chỉ số đa nhiệm: Đa nhân 🖥️ Top 30%... làm được ba việc cùng lúc → Bạn cũng thử thật đi, khó hơn nghĩ 😂',
      id: 'Skor multitasking: Multi-core 🖥️ Top 30%... tiga sekaligus berhasil → Coba sendiri, lebih susah dari kelihatannya wkwk',
    }),
  },
  {
    type: 'Type5',
    emoji: '🚀',
    grade: 'A',
    title: L({
      ko: '상위권 멀티태스커, 고성능 병렬 처리형 🚀',
      en: 'Top-tier multitasker — high-performance parallel type 🚀',
      ja: '上位マルチタスカー、高性能並列処理型 🚀',
      'zh-CN': '顶尖多任务者，高性能并行处理型 🚀',
      'zh-TW': '頂尖多工者，高效能平行處理型 🚀',
      vi: 'Đa nhiệm top, kiểu song song hiệu năng cao 🚀',
      id: 'Multitasker kelas atas — paralel berperforma tinggi 🚀',
    }),
    shortDescription: L({
      ko: '기억을 유지하면서 동시에 다른 과제를 처리하는 능력이 상위 15%에 해당합니다.',
      en: 'Holding memory while handling another task lands you in the top 15%.',
      ja: '記憶を保ちながら別の課題もこなす能力は上位15%。',
      'zh-CN': '边记边做其他任务的能力属于前15%。',
      'zh-TW': '邊記邊做其他任務的能力屬於前15%。',
      vi: 'Vừa giữ nhớ vừa xử lý việc khác — top 15%.',
      id: 'Bisa jaga memori sambil kerjakan tugas lain — top 15%.',
    }),
    description: L({
      ko: '기억 + 실행 + 분류를 동시에 처리하는 능력이 뛰어나고 시간 압박 상황에서도 정확도가 크게 떨어지지 않는 패턴입니다. 복잡하고 빠른 환경에서 진가를 발휘하는 유형입니다.',
      en: 'You excel at memory + execution + sorting at once, and accuracy holds up under time pressure. You shine in complex, fast-moving environments.',
      ja: '記憶＋実行＋分類を同時にこなす力が高く、時間圧でも正確さが大きく落ちないパターン。複雑で速い環境で真価を発揮するタイプです。',
      'zh-CN': '记忆、执行、分类同时处理很强，时间压力下准确度也不大崩。适合复杂、节奏快的环境。',
      'zh-TW': '記憶、執行、分類同時處理很強，時間壓力下準確度也不大崩。適合複雜、節奏快的環境。',
      vi: 'Giỏi xử lý nhớ + thực thi + phân loại cùng lúc, dưới áp lực thời gian độ chính xác không sụt mạnh. Tỏa sáng ở môi trường phức tạp, nhanh.',
      id: 'Unggul di memori + eksekusi + klasifikasi sekaligus, akurasi tetap kuat di tekanan waktu. Cocok di lingkungan kompleks dan cepat.',
    }),
    keywords: L({
      ko: '멀티태스킹 능력치: A, 뇌 사용률: 고성능 병렬 연산 중',
      en: 'Multitasking score: A, Brain mode: high-performance parallel compute',
      ja: 'マルチタスク能力値: A、脳の稼働率: 高性能並列演算中',
      'zh-CN': '多任务能力值: A，大脑使用率: 高性能并行运算中',
      'zh-TW': '多工能力值: A，大腦使用率: 高效能平行運算中',
      vi: 'Chỉ số đa nhiệm: A, Chế độ não: tính toán song song hiệu năng cao',
      id: 'Skor multitasking: A, Mode otak: komputasi paralel berperforma tinggi',
    }),
    sections: [
      section(
        {
          ko: '🧠 멀티태스킹 등급',
          en: '🧠 Multitasking grade',
          ja: '🧠 マルチタスク等級',
          'zh-CN': '🧠 多任务等级',
          'zh-TW': '🧠 多工等級',
          vi: '🧠 Cấp đa nhiệm',
          id: '🧠 Grade multitasking',
        },
        {
          ko: 'A 고성능 병렬 처리형 🚀',
          en: 'A High-performance parallel type 🚀',
          ja: 'A 高性能並列処理型 🚀',
          'zh-CN': 'A 高性能并行处理型 🚀',
          'zh-TW': 'A 高效能平行處理型 🚀',
          vi: 'A Kiểu song song hiệu năng cao 🚀',
          id: 'A Tipe paralel berperforma tinggi 🚀',
        }
      ),
      section(
        {
          ko: '💻 당신의 뇌 스타일',
          en: '💻 Your brain style',
          ja: '💻 あなたの脳スタイル',
          'zh-CN': '💻 你的大脑风格',
          'zh-TW': '💻 你的大腦風格',
          vi: '💻 Phong cách não của bạn',
          id: '💻 Gaya otakmu',
        },
        {
          ko: '서버급 병렬 연산 프로세서',
          en: 'Server-grade parallel compute processor',
          ja: 'サーバー級並列演算プロセッサ',
          'zh-CN': '服务器级并行运算处理器',
          'zh-TW': '伺服器級平行運算處理器',
          vi: 'Bộ xử lý tính toán song song cấp server',
          id: 'Prosesor komputasi paralel kelas server',
        }
      ),
      section(
        {
          ko: '💪 실제 업무에서의 강점',
          en: '💪 Strengths at work',
          ja: '💪 実務での強み',
          'zh-CN': '💪 实际工作中的优势',
          'zh-TW': '💪 實際工作中的優勢',
          vi: '💪 Điểm mạnh trong công việc',
          id: '💪 Kekuatan di dunia kerja',
        },
        {
          ko: '위기 상황 대처·복잡한 프로젝트 동시 관리·빠른 의사결정',
          en: 'Crisis response · parallel complex projects · fast decisions',
          ja: '危機対応・複雑プロジェクトの同時管理・迅速な意思決定',
          'zh-CN': '危机应对 · 复杂项目并行管理 · 快速决策',
          'zh-TW': '危機應對 · 複雜專案並行管理 · 快速決策',
          vi: 'Ứng phó khủng hoảng · quản nhiều dự án phức tạp · quyết định nhanh',
          id: 'Tangani krisis · kelola proyek kompleks paralel · keputusan cepat',
        }
      ),
      section(
        {
          ko: '🏢 최적 업무 환경',
          en: '🏢 Best work environment',
          ja: '🏢 最適な仕事環境',
          'zh-CN': '🏢 最佳工作环境',
          'zh-TW': '🏢 最佳工作環境',
          vi: '🏢 Môi trường làm việc tối ưu',
          id: '🏢 Lingkungan kerja ideal',
        },
        {
          ko: '다이나믹한 업무 환경·여러 이해관계자 조율·빠른 피벗이 필요한 곳',
          en: 'Dynamic workplaces · multi-stakeholder coordination · fast pivots',
          ja: 'ダイナミックな職場・多ステークホルダー調整・素早いピボットが必要な場',
          'zh-CN': '动态工作环境 · 多方利益相关者协调 · 需要快速转向之处',
          'zh-TW': '動態工作環境 · 多方利害關係人協調 · 需要快速轉向之處',
          vi: 'Môi trường năng động · điều phối nhiều bên · cần pivot nhanh',
          id: 'Lingkungan dinamis · koordinasi banyak stakeholder · butuh pivot cepat',
        }
      ),
      section(
        {
          ko: '💡 생산성 향상 팁',
          en: '💡 Productivity tip',
          ja: '💡 生産性アップのヒント',
          'zh-CN': '💡 提升效率小贴士',
          'zh-TW': '💡 提升效率小秘訣',
          vi: '💡 Mẹo nâng năng suất',
          id: '💡 Tips produktivitas',
        },
        {
          ko: 'AI 도구와 시스템을 적극 연결해 능력치를 3배로 증폭시키기',
          en: 'Wire AI tools into your systems to triple your capacity.',
          ja: 'AIツールとシステムを積極接続し、能力値を3倍に増幅',
          'zh-CN': '把 AI 工具和系统积极打通，把能力放大三倍。',
          'zh-TW': '把 AI 工具和系統積極打通，把能力放大三倍。',
          vi: 'Kết nối AI với hệ thống của bạn để nhân ba năng lực.',
          id: 'Hubungkan tools AI ke sistemmu biar kapasitas naik 3x.',
        }
      ),
      section(
        {
          ko: '🛠️ 추천 생산성 툴',
          en: '🛠️ Recommended tools',
          ja: '🛠️ おすすめ生産性ツール',
          'zh-CN': '🛠️ 推荐效率工具',
          'zh-TW': '🛠️ 推薦效率工具',
          vi: '🛠️ Công cụ năng suất gợi ý',
          id: '🛠️ Tools produktivitas rekomendasi',
        },
        {
          ko: 'AI 통합 업무 플랫폼·자동화 시스템 빌더·실시간 협업 도구',
          en: 'AI-integrated work platforms · automation builders · real-time collab tools',
          ja: 'AI統合業務プラットフォーム・自動化システムビルダー・リアルタイム協働ツール',
          'zh-CN': 'AI 整合工作平台 · 自动化系统构建器 · 实时协作工具',
          'zh-TW': 'AI 整合工作平台 · 自動化系統建置器 · 即時協作工具',
          vi: 'Nền tảng làm việc tích hợp AI · builder tự động hóa · tool cộng tác realtime',
          id: 'Platform kerja terintegrasi AI · builder otomasi · tools kolaborasi realtime',
        }
      ),
    ],
    shareMessage: L({
      ko: '멀티태스킹 능력치: 고성능 병렬형 🚀 상위 15% 결과... 기억하면서 딴 거 하는 라운드 진짜 어려웠는데 됐음 → 너는 몇 점이야? 직접 해보는 거라 속임수 없음',
      en: 'Multitasking score: High-performance parallel 🚀 Top 15%... that remember-while-doing round was brutal but I made it → What is your score? Hands-on test, no tricks',
      ja: 'マルチタスク能力値: 高性能並列型 🚀 上位15%…覚えながら別タスクのラウンドマジきつかったけどクリア → 君は何点？実測だからごまかしなし',
      'zh-CN': '多任务能力值：高性能并行型 🚀 前15%…边记边做那关真难但我过了 → 你几分？真动手测，没法糊弄',
      'zh-TW': '多工能力值：高效能平行型 🚀 前15%…邊記邊做那關真難但我過了 → 你幾分？真動手測，沒法糊弄',
      vi: 'Chỉ số đa nhiệm: Song song hiệu năng cao 🚀 Top 15%... round vừa nhớ vừa làm khác siêu khó nhưng mình qua → Bạn bao nhiêu? Test thật, không gian lận',
      id: 'Skor multitasking: Paralel berperforma tinggi 🚀 Top 15%... round ingat sambil kerjakan lain susah banget tapi lolos → Kamu berapa? Tes langsung, no tipu',
    }),
  },
  {
    type: 'Type6',
    emoji: '🧠',
    grade: 'S',
    title: L({
      ko: '인간 CPU, 멀티태스킹 끝판왕 🧠⚡',
      en: 'Human CPU — ultimate multitasking boss 🧠⚡',
      ja: '人間CPU、マルチタスク最終ボス 🧠⚡',
      'zh-CN': '人类 CPU，多任务终极王者 🧠⚡',
      'zh-TW': '人類 CPU，多工終極王者 🧠⚡',
      vi: 'CPU người, ông hoàng đa nhiệm 🧠⚡',
      id: 'CPU manusia — raja multitasking 🧠⚡',
    }),
    shortDescription: L({
      ko: '전체 사용자의 상위 5% 이내. 인지 과학적으로 희귀한 수준의 병렬 처리 능력입니다.',
      en: 'Top 5% of users. Cognitively rare parallel-processing ability.',
      ja: '全ユーザー上位5%以内。認知科学的にも希少な並列処理能力です。',
      'zh-CN': '全体用户前5%以内。认知科学上罕见的并行处理能力。',
      'zh-TW': '全體使用者前5%以內。認知科學上罕見的平行處理能力。',
      vi: 'Top 5% người dùng. Khả năng xử lý song song hiếm theo khoa học nhận thức.',
      id: 'Top 5% pengguna. Kemampuan paralel yang jarang secara kognitif.',
    }),
    description: L({
      ko: '기억·실행·분류·반응을 동시에 처리하면서도 속도와 정확도를 모두 유지하는 극히 드문 패턴입니다. 시간 압박의 극한 상황에서도 퍼포먼스가 유지됩니다. 이 능력치를 제대로 된 생산성 시스템과 결합하면 한 명이 여러 명 몫을 할 수 있습니다.',
      en: 'An extremely rare pattern: memory, execution, sorting, and reaction all at once — without losing speed or accuracy. Performance holds even under extreme time pressure. Pair this with a real productivity system and one person can do the work of several.',
      ja: '記憶・実行・分類・反応を同時にこなしつつ速度と正確さも維持する、極めて稀なパターン。時間圧の極限でもパフォーマンスが落ちません。この能力値をしっかりした生産性システムと組み合わせれば、一人で数人分の仕事ができます。',
      'zh-CN': '记忆、执行、分类、反应同时进行仍能保持速度与准确度——极其罕见。极限时间压力下表现仍能稳住。把这份能力配上扎实的效率系统，一个人顶好几个人。',
      'zh-TW': '記憶、執行、分類、反應同時進行仍能保持速度與準確度——極其罕見。極限時間壓力下表現仍能穩住。把這份能力配上紮實的效率系統，一個人頂好幾個人。',
      vi: 'Vừa nhớ vừa thực thi, phân loại và phản ứng cùng lúc mà vẫn giữ tốc độ lẫn độ chính xác — cực hiếm. Áp lực thời gian cực đại vẫn giữ được hiệu suất. Ghép với hệ thống năng suất tốt thì một người làm việc của nhiều người.',
      id: 'Pola sangat langka: memori, eksekusi, klasifikasi, dan reaksi sekaligus tanpa kehilangan kecepatan maupun akurasi. Performa tetap di tekanan waktu ekstrem. Gabungkan dengan sistem produktivitas yang solid, satu orang bisa setara beberapa orang.',
    }),
    keywords: L({
      ko: '멀티태스킹 능력치: S, 뇌 사용률: CPU 풀 가동 상태',
      en: 'Multitasking score: S, Brain mode: CPU at full throttle',
      ja: 'マルチタスク能力値: S、脳の稼働率: CPUフル稼働状態',
      'zh-CN': '多任务能力值: S，大脑使用率: CPU 满载运转',
      'zh-TW': '多工能力值: S，大腦使用率: CPU 滿載運轉',
      vi: 'Chỉ số đa nhiệm: S, Chế độ não: CPU full load',
      id: 'Skor multitasking: S, Mode otak: CPU full throttle',
    }),
    sections: [
      section(
        {
          ko: '🧠 멀티태스킹 등급',
          en: '🧠 Multitasking grade',
          ja: '🧠 マルチタスク等級',
          'zh-CN': '🧠 多任务等级',
          'zh-TW': '🧠 多工等級',
          vi: '🧠 Cấp đa nhiệm',
          id: '🧠 Grade multitasking',
        },
        {
          ko: 'S 인간 CPU 끝판왕 🧠⚡',
          en: 'S Human CPU ultimate boss 🧠⚡',
          ja: 'S 人間CPU最終ボス 🧠⚡',
          'zh-CN': 'S 人类 CPU 终极王者 🧠⚡',
          'zh-TW': 'S 人類 CPU 終極王者 🧠⚡',
          vi: 'S CPU người ông hoàng 🧠⚡',
          id: 'S Raja CPU manusia 🧠⚡',
        }
      ),
      section(
        {
          ko: '💻 당신의 뇌 스타일',
          en: '💻 Your brain style',
          ja: '💻 あなたの脳スタイル',
          'zh-CN': '💻 你的大脑风格',
          'zh-TW': '💻 你的大腦風格',
          vi: '💻 Phong cách não của bạn',
          id: '💻 Gaya otakmu',
        },
        {
          ko: '데이터센터급 병렬 처리 서버',
          en: 'Data-center-grade parallel processing server',
          ja: 'データセンター級並列処理サーバー',
          'zh-CN': '数据中心级并行处理服务器',
          'zh-TW': '資料中心級平行處理伺服器',
          vi: 'Máy chủ xử lý song song cấp data center',
          id: 'Server paralel kelas data center',
        }
      ),
      section(
        {
          ko: '💪 실제 업무에서의 강점',
          en: '💪 Strengths at work',
          ja: '💪 実務での強み',
          'zh-CN': '💪 实际工作中的优势',
          'zh-TW': '💪 實際工作中的優勢',
          vi: '💪 Điểm mạnh trong công việc',
          id: '💪 Kekuatan di dunia kerja',
        },
        {
          ko: '모든 복잡한 상황이 강점·위기 대처·동시 프로젝트 관리',
          en: 'Thrives in complexity · crisis handling · parallel project management',
          ja: 'あらゆる複雑状況が強み・危機対応・並行プロジェクト管理',
          'zh-CN': '越复杂越强 · 危机应对 · 多项目并行管理',
          'zh-TW': '越複雜越強 · 危機應對 · 多專案並行管理',
          vi: 'Mạnh trong mọi tình huống phức tạp · ứng phó khủng hoảng · quản nhiều dự án',
          id: 'Kuat di situasi kompleks · tangani krisis · kelola proyek paralel',
        }
      ),
      section(
        {
          ko: '🏢 최적 업무 환경',
          en: '🏢 Best work environment',
          ja: '🏢 最適な仕事環境',
          'zh-CN': '🏢 最佳工作环境',
          'zh-TW': '🏢 最佳工作環境',
          vi: '🏢 Môi trường làm việc tối ưu',
          id: '🏢 Lingkungan kerja ideal',
        },
        {
          ko: '더 복잡하고 도전적인 환경일수록 빛남',
          en: 'The more complex and challenging, the brighter you shine',
          ja: '複雑で挑戦的な環境ほど輝く',
          'zh-CN': '环境越复杂、越有挑战，你越发光',
          'zh-TW': '環境越複雜、越有挑戰，你越發光',
          vi: 'Càng phức tạp và thử thách càng tỏa sáng',
          id: 'Semakin kompleks dan menantang, semakin bersinar',
        }
      ),
      section(
        {
          ko: '⚠️ 주의점',
          en: '⚠️ Watch out',
          ja: '⚠️ 注意点',
          'zh-CN': '⚠️ 注意事项',
          'zh-TW': '⚠️ 注意事項',
          vi: '⚠️ Lưu ý',
          id: '⚠️ Perhatian',
        },
        {
          ko: '능력치가 높을수록 과부하 리스크도 있음. 의도적 휴식과 회복이 필요',
          en: 'Higher capacity also means overload risk. Schedule deliberate rest and recovery.',
          ja: '能力値が高いほど過負荷リスクも。意図的な休息と回復が必要',
          'zh-CN': '能力越强，过载风险也越高。需要刻意休息与恢复。',
          'zh-TW': '能力越強，過載風險也越高。需要刻意休息與恢復。',
          vi: 'Năng lực cao cũng dễ quá tải. Cần nghỉ và phục hồi có chủ đích.',
          id: 'Semakin tinggi kemampuan, risiko overload juga ada. Butuh istirahat dan recovery yang disengaja.',
        }
      ),
      section(
        {
          ko: '🛠️ 추천 생산성 툴',
          en: '🛠️ Recommended tools',
          ja: '🛠️ おすすめ生産性ツール',
          'zh-CN': '🛠️ 推荐效率工具',
          'zh-TW': '🛠️ 推薦效率工具',
          vi: '🛠️ Công cụ năng suất gợi ý',
          id: '🛠️ Tools produktivitas rekomendasi',
        },
        {
          ko: '엔터프라이즈급 프로젝트 관리 솔루션·AI 자동화 풀 세트·지식 관리 시스템',
          en: 'Enterprise project suites · full AI automation stacks · knowledge systems',
          ja: 'エンタープライズ級プロジェクト管理・AI自動化フルセット・ナレッジ管理システム',
          'zh-CN': '企业级项目管理方案 · AI 自动化全套 · 知识管理系统',
          'zh-TW': '企業級專案管理方案 · AI 自動化全套 · 知識管理系統',
          vi: 'Giải pháp quản lý dự án enterprise · bộ AI tự động hóa đầy đủ · hệ thống quản lý tri thức',
          id: 'Solusi PM enterprise · full set otomasi AI · sistem knowledge management',
        }
      ),
      section(
        {
          ko: '🏅 인증',
          en: '🏅 Badge',
          ja: '🏅 認証',
          'zh-CN': '🏅 认证',
          'zh-TW': '🏅 認證',
          vi: '🏅 Chứng nhận',
          id: '🏅 Sertifikat',
        },
        {
          ko: '내 뇌 멀티태스킹 능력치: S급 인간 CPU 달성 🧠⚡',
          en: 'My brain multitasking score: S-rank Human CPU unlocked 🧠⚡',
          ja: '脳のマルチタスク能力値: S級 人間CPU達成 🧠⚡',
          'zh-CN': '我的大脑多任务能力值：S级人类 CPU 达成 🧠⚡',
          'zh-TW': '我的大腦多工能力值：S級人類 CPU 達成 🧠⚡',
          vi: 'Chỉ số đa nhiệm não: đạt S-rank CPU người 🧠⚡',
          id: 'Skor multitasking otakku: S-rank Human CPU unlocked 🧠⚡',
        }
      ),
    ],
    shareMessage: L({
      ko: '멀티태스킹 능력치: 인간 CPU S급 🧠⚡ 상위 5% 나왔음... 극한 압박 라운드에서 콤보 터짐 ㅋㅋ → 이거 생각보다 진짜 어려움 해봐',
      en: 'Multitasking score: Human CPU S-rank 🧠⚡ Top 5%... combo popped in the extreme pressure round lol → This is actually hard, try it',
      ja: 'マルチタスク能力値: 人間CPU S級 🧠⚡ 上位5%出た…極限プレッシャーラウンドでコンボ炸裂 笑 → 思ったよりマジでキツいからやってみて',
      'zh-CN': '多任务能力值：人类 CPU S级 🧠⚡ 前5%…极限压力关连击爆了哈哈 → 比想象难，来测测',
      'zh-TW': '多工能力值：人類 CPU S級 🧠⚡ 前5%…極限壓力關連擊爆了哈哈 → 比想像難，來測測',
      vi: 'Chỉ số đa nhiệm: CPU người S-rank 🧠⚡ Top 5%... round áp lực cực đại combo nổ 😂 → Khó hơn nghĩ, thử đi',
      id: 'Skor multitasking: Human CPU S-rank 🧠⚡ Top 5%... combo meledak di round tekanan ekstrem wkwk → Susah banget, coba deh',
    }),
  },
];

export function getPhase3MultitaskingAbilityResultByType(
  type: string
): Phase3MultitaskingAbilityResult | undefined {
  return phase3MultitaskingAbilityResults.find((r) => r.type === type);
}
