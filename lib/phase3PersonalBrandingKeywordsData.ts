/** 나의 '퍼스널 브랜딩' 키워드 — 12문항 4지선다, A=0 B=1 C=2 D=3, 총점 0~36 → Type1~6 */

type Locale = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';
type ML = Record<Locale, string>;

function L(m: ML): Record<string, string> {
  return m;
}

function opt(m: ML, score: number): { text: Record<string, string>; score: number } {
  return { text: L(m), score };
}

function section(title: ML, content: ML): Phase3PersonalBrandingKeywordsResultSection {
  return { title: L(title), content: L(content) };
}

export interface Phase3PersonalBrandingKeywordsQuestion {
  id: number;
  question: Record<string, string>;
  options: { text: Record<string, string>; score: number }[];
}

export interface Phase3PersonalBrandingKeywordsResultSection {
  title: Record<string, string>;
  content: Record<string, string>;
}

export interface Phase3PersonalBrandingKeywordsResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  keywords: Record<string, string>;
  englishKeywords: Record<string, string>;
  sections: Phase3PersonalBrandingKeywordsResultSection[];
  shareMessage: Record<string, string>;
}

export function calculatePhase3PersonalBrandingKeywordsResult(answers: number[]): string {
  const total = answers.reduce((sum, s) => sum + (s ?? 0), 0);
  if (total <= 5) return 'Type1';
  if (total <= 11) return 'Type2';
  if (total <= 19) return 'Type3';
  if (total <= 27) return 'Type4';
  if (total <= 33) return 'Type5';
  return 'Type6';
}

// Shared section titles (identical across all 6 result types)
const SECTION_TITLE_JOB: ML = {
  ko: '💼 이 키워드가 강조되는 직종',
  en: '💼 Industries Where This Keyword Stands Out',
  ja: '💼 このキーワードが強調される職種',
  'zh-CN': '💼 这个关键词突出的职业领域',
  'zh-TW': '💼 這個關鍵詞突出的職業領域',
  vi: '💼 Ngành nghề mà từ khóa này được đề cao',
  id: '💼 Bidang Pekerjaan yang Menonjolkan Kata Kunci Ini',
};

const SECTION_TITLE_HEADLINE: ML = {
  ko: '🔗 링크드인 헤드라인 예시',
  en: '🔗 LinkedIn Headline Example',
  ja: '🔗 リンクトインヘッドラインの例',
  'zh-CN': '🔗 LinkedIn标题示例',
  'zh-TW': '🔗 LinkedIn標題範例',
  vi: '🔗 Ví dụ tiêu đề LinkedIn',
  id: '🔗 Contoh Headline LinkedIn',
};

const SECTION_TITLE_RESUME: ML = {
  ko: '📄 이력서 자기소개 첫 문장 예시',
  en: '📄 Resume Self-Introduction Opening Line Example',
  ja: '📄 履歴書自己紹介の最初の一文の例',
  'zh-CN': '📄 履历自我介绍开头例句',
  'zh-TW': '📄 履歷自我介紹開頭範例',
  vi: '📄 Ví dụ câu mở đầu giới thiệu bản thân trong CV',
  id: '📄 Contoh Kalimat Pembuka Perkenalan Diri di CV',
};

const SECTION_TITLE_STRENGTH: ML = {
  ko: '✨ 이 키워드의 강점',
  en: '✨ Strength of This Keyword',
  ja: '✨ このキーワードの強み',
  'zh-CN': '✨ 这个关键词的优势',
  'zh-TW': '✨ 這個關鍵詞的優勢',
  vi: '✨ Điểm mạnh của từ khóa này',
  id: '✨ Kekuatan Kata Kunci Ini',
};

const SECTION_TITLE_BOOST: ML = {
  ko: '💪 더 강화하는 방법',
  en: '💪 How to Strengthen It Further',
  ja: '💪 さらに強化する方法',
  'zh-CN': '💪 进一步强化的方法',
  'zh-TW': '💪 進一步強化的方法',
  vi: '💪 Cách củng cố thêm',
  id: '💪 Cara Memperkuat Lebih Lanjut',
};

export const phase3PersonalBrandingKeywordsQuestions: Phase3PersonalBrandingKeywordsQuestion[] = [
  {
    id: 1,
    question: L({
      ko: '프로젝트가 시작됐을 때 나는 자연스럽게 어떤 역할을 맡나요?',
      en: 'When a project starts, what role do I naturally take on?',
      ja: 'プロジェクトが始まったとき、私は自然にどんな役割を担いますか？',
      'zh-CN': '项目开始时，我自然会承担什么角色？',
      'zh-TW': '專案開始時，我自然會承擔什麼角色？',
      vi: 'Khi một dự án bắt đầu, tôi tự nhiên đảm nhận vai trò gì?',
      id: 'Saat sebuah proyek dimulai, peran apa yang secara alami aku ambil?',
    }),
    options: [
      opt(
        {
          ko: '하나씩 차근차근 실행하는 역할. 믿고 맡길 수 있는 사람',
          en: 'The role of executing things step by step. Someone you can trust to get it done',
          ja: '一つずつ着実に実行する役割。信頼して任せられる人',
          'zh-CN': '一步一步稳扎稳打执行的角色。是能让人放心托付的人',
          'zh-TW': '一步一步穩紮穩打執行的角色。是能讓人放心託付的人',
          vi: 'Vai trò thực hiện từng bước một cách chắc chắn. Người có thể tin tưởng giao việc',
          id: 'Peran mengeksekusi satu per satu dengan cermat. Orang yang bisa dipercaya untuk menyelesaikan tugas',
        },
        0
      ),
      opt(
        {
          ko: '팀원들과 소통하며 방향을 맞추는 역할. 분위기를 만드는 사람',
          en: 'The role of communicating with teammates to align direction. Someone who sets the mood',
          ja: 'チームメンバーとコミュニケーションを取り、方向を合わせる役割。空気を作る人',
          'zh-CN': '与团队成员沟通、协调方向的角色。是营造氛围的人',
          'zh-TW': '與團隊成員溝通、協調方向的角色。是營造氛圍的人',
          vi: 'Vai trò giao tiếp với đồng đội để thống nhất hướng đi. Người tạo ra không khí làm việc',
          id: 'Peran berkomunikasi dengan anggota tim untuk menyamakan arah. Orang yang membangun suasana',
        },
        1
      ),
      opt(
        {
          ko: '새로운 아이디어를 내고 접근법을 제안하는 역할. 틀을 깨는 사람',
          en: 'The role of bringing new ideas and suggesting approaches. Someone who breaks the mold',
          ja: '新しいアイデアを出し、アプローチを提案する役割。型を破る人',
          'zh-CN': '提出新点子、建议新方法的角色。是打破常规的人',
          'zh-TW': '提出新點子、建議新方法的角色。是打破常規的人',
          vi: 'Vai trò đưa ra ý tưởng mới và đề xuất cách tiếp cận. Người phá vỡ khuôn mẫu',
          id: 'Peran memberikan ide baru dan mengusulkan pendekatan. Orang yang mendobrak batasan',
        },
        2
      ),
      opt(
        {
          ko: '전략을 설계하고 우선순위를 정하는 역할. 방향을 잡는 사람',
          en: 'The role of designing strategy and setting priorities. Someone who sets the direction',
          ja: '戦略を設計し優先順位を決める役割。方向を定める人',
          'zh-CN': '设计战略、制定优先顺序的角色。是把握方向的人',
          'zh-TW': '設計戰略、制定優先順序的角色。是把握方向的人',
          vi: 'Vai trò thiết kế chiến lược và xác định thứ tự ưu tiên. Người xác định phương hướng',
          id: 'Peran merancang strategi dan menentukan prioritas. Orang yang menentukan arah',
        },
        3
      ),
    ],
  },
  {
    id: 2,
    question: L({
      ko: '내가 가장 인정받은 순간을 떠올리면?',
      en: 'When I think of the moment I was most recognized?',
      ja: '私が最も認められた瞬間を思い出すと？',
      'zh-CN': '回想我最受认可的瞬间？',
      'zh-TW': '回想我最受認可的瞬間？',
      vi: 'Khi nhớ lại thời điểm tôi được công nhận nhiều nhất?',
      id: 'Kalau mengingat saat aku paling diakui?',
    }),
    options: [
      opt(
        {
          ko: '맡은 일을 꼼꼼하게 마무리해서 신뢰를 얻었을 때',
          en: 'When I earned trust by carefully finishing a task I was responsible for',
          ja: '担当した仕事を丁寧に仕上げて信頼を得たとき',
          'zh-CN': '把负责的事情细致完成后赢得信任的时候',
          'zh-TW': '把負責的事情細膩完成後贏得信任的時候',
          vi: 'Khi tôi hoàn thành công việc được giao một cách tỉ mỉ và giành được sự tin tưởng',
          id: 'Saat aku mendapatkan kepercayaan karena menyelesaikan tugas dengan cermat',
        },
        0
      ),
      opt(
        {
          ko: '팀 분위기가 어려울 때 중재하거나 연결해줬을 때',
          en: 'When I mediated or connected people during a difficult team atmosphere',
          ja: 'チームの雰囲気が難しいとき、仲介したりつないだりしたとき',
          'zh-CN': '团队氛围紧张时进行调解或牵线连接的时候',
          'zh-TW': '團隊氛圍緊張時進行調解或牽線連結的時候',
          vi: 'Khi tôi làm trung gian hoặc kết nối mọi người trong lúc không khí nhóm khó khăn',
          id: 'Saat aku menjadi penengah atau menghubungkan orang ketika suasana tim sulit',
        },
        1
      ),
      opt(
        {
          ko: '아무도 생각하지 못한 방식으로 문제를 해결했을 때',
          en: 'When I solved a problem in a way no one else thought of',
          ja: '誰も思いつかなかった方法で問題を解決したとき',
          'zh-CN': '用没人想到的方式解决问题的时候',
          'zh-TW': '用沒人想到的方式解決問題的時候',
          vi: 'Khi tôi giải quyết vấn đề theo cách không ai nghĩ tới',
          id: 'Saat aku memecahkan masalah dengan cara yang tidak terpikirkan orang lain',
        },
        2
      ),
      opt(
        {
          ko: '복잡한 상황을 구조화하고 결과로 증명했을 때',
          en: 'When I structured a complex situation and proved it with results',
          ja: '複雑な状況を構造化し、結果で証明したとき',
          'zh-CN': '把复杂状况结构化并用结果证明的时候',
          'zh-TW': '把複雜狀況結構化並用結果證明的時候',
          vi: 'Khi tôi cấu trúc hóa một tình huống phức tạp và chứng minh bằng kết quả',
          id: 'Saat aku menyusun situasi rumit dan membuktikannya lewat hasil',
        },
        3
      ),
    ],
  },
  {
    id: 3,
    question: L({
      ko: '동료들이 나에게 자주 부탁하는 것은?',
      en: 'What do colleagues often ask me for?',
      ja: '同僚が私によく頼むことは？',
      'zh-CN': '同事经常拜托我的事情是？',
      'zh-TW': '同事經常拜託我的事情是？',
      vi: 'Điều đồng nghiệp thường nhờ tôi làm là gì?',
      id: 'Hal yang sering diminta rekan kerja kepadaku adalah?',
    }),
    options: [
      opt(
        {
          ko: '중요한 일의 최종 검토 또는 꼼꼼한 실행',
          en: 'Final review of important tasks or meticulous execution',
          ja: '重要な仕事の最終確認、または丁寧な実行',
          'zh-CN': '重要事项的最终审核，或细致的执行',
          'zh-TW': '重要事項的最終審核，或細膩的執行',
          vi: 'Rà soát cuối cùng cho việc quan trọng hoặc thực hiện tỉ mỉ',
          id: 'Peninjauan akhir untuk hal penting atau eksekusi yang cermat',
        },
        0
      ),
      opt(
        {
          ko: '대화가 필요한 상황에서의 중재나 소통',
          en: 'Mediation or communication in situations that need dialogue',
          ja: '対話が必要な状況での仲介やコミュニケーション',
          'zh-CN': '需要对话的场合中的调解或沟通',
          'zh-TW': '需要對話的場合中的調解或溝通',
          vi: 'Làm trung gian hoặc giao tiếp trong tình huống cần đối thoại',
          id: 'Menjadi penengah atau komunikasi dalam situasi yang perlu dialog',
        },
        1
      ),
      opt(
        {
          ko: '막혔을 때 새로운 관점이나 아이디어',
          en: 'A new perspective or idea when things are stuck',
          ja: '行き詰まったときの新しい視点やアイデア',
          'zh-CN': '陷入僵局时的新视角或点子',
          'zh-TW': '陷入僵局時的新視角或點子',
          vi: 'Góc nhìn mới hoặc ý tưởng khi bị bế tắc',
          id: 'Perspektif atau ide baru saat mentok',
        },
        2
      ),
      opt(
        {
          ko: '전체 흐름 파악과 다음 단계 정리',
          en: 'Grasping the overall flow and organizing next steps',
          ja: '全体の流れの把握と次のステップの整理',
          'zh-CN': '把握整体流程与整理下一步计划',
          'zh-TW': '把握整體流程與整理下一步計劃',
          vi: 'Nắm bắt toàn bộ tiến trình và sắp xếp bước tiếp theo',
          id: 'Memahami keseluruhan alur dan merangkum langkah berikutnya',
        },
        3
      ),
    ],
  },
  {
    id: 4,
    question: L({
      ko: '업무에서 내가 가장 잘하는 것을 솔직하게 고른다면?',
      en: 'Honestly, what am I best at in my work?',
      ja: '仕事の中で私が一番得意なことを正直に選ぶなら？',
      'zh-CN': '如果诚实地选出我工作中最擅长的事情？',
      'zh-TW': '如果誠實地選出我工作中最擅長的事情？',
      vi: 'Nếu thành thật chọn ra điều tôi làm tốt nhất trong công việc?',
      id: 'Kalau memilih dengan jujur hal yang paling aku kuasai dalam pekerjaan?',
    }),
    options: [
      opt(
        {
          ko: '기한 내에 완성도 있게 마무리하는 것',
          en: 'Finishing things with high quality by the deadline',
          ja: '期限内に完成度高く仕上げること',
          'zh-CN': '在期限内高质量完成任务',
          'zh-TW': '在期限內高品質完成任務',
          vi: 'Hoàn thành công việc đúng hạn với chất lượng cao',
          id: 'Menyelesaikan tugas dengan kualitas tinggi sesuai tenggat waktu',
        },
        0
      ),
      opt(
        {
          ko: '다양한 사람과 관계를 잘 유지하고 협력하는 것',
          en: 'Maintaining good relationships and cooperating with various people',
          ja: '様々な人と良い関係を維持し協力すること',
          'zh-CN': '与各种人维持良好关系并合作',
          'zh-TW': '與各種人維持良好關係並合作',
          vi: 'Duy trì quan hệ tốt và hợp tác với nhiều kiểu người khác nhau',
          id: 'Menjaga hubungan baik dan bekerja sama dengan berbagai orang',
        },
        1
      ),
      opt(
        {
          ko: '없던 것을 만들거나 기존과 다르게 접근하는 것',
          en: 'Creating something new or approaching things differently than before',
          ja: 'なかったものを作ったり、既存とは違うアプローチをすること',
          'zh-CN': '创造前所未有的东西，或用与以往不同的方式切入',
          'zh-TW': '創造前所未有的東西，或用與以往不同的方式切入',
          vi: 'Tạo ra thứ chưa từng có hoặc tiếp cận khác với cách trước đây',
          id: 'Membuat sesuatu yang belum ada atau mendekati dengan cara yang berbeda dari biasanya',
        },
        2
      ),
      opt(
        {
          ko: '데이터와 맥락을 종합해서 판단하고 결정하는 것',
          en: 'Synthesizing data and context to judge and decide',
          ja: 'データと文脈を総合して判断し決定すること',
          'zh-CN': '综合数据与背景做出判断与决策',
          'zh-TW': '綜合數據與背景做出判斷與決策',
          vi: 'Tổng hợp dữ liệu và bối cảnh để đưa ra phán đoán và quyết định',
          id: 'Menyatukan data dan konteks untuk menilai dan memutuskan',
        },
        3
      ),
    ],
  },
  {
    id: 5,
    question: L({
      ko: '내가 가장 에너지를 쏟는 업무 순간은?',
      en: 'The work moment where I pour in the most energy?',
      ja: '私が最もエネルギーを注ぐ業務の瞬間は？',
      'zh-CN': '我最投入精力的工作瞬间是？',
      'zh-TW': '我最投入精力的工作瞬間是？',
      vi: 'Khoảnh khắc công việc mà tôi dồn nhiều năng lượng nhất là?',
      id: 'Momen kerja di mana aku paling mencurahkan energi adalah?',
    }),
    options: [
      opt(
        {
          ko: '계획대로 착착 진행되면서 결과물이 완성될 때',
          en: 'When things proceed smoothly according to plan and the result comes together',
          ja: '計画通りに順調に進み、成果物が完成するとき',
          'zh-CN': '按计划顺利推进、成果逐渐完成的时候',
          'zh-TW': '按計劃順利推進、成果逐漸完成的時候',
          vi: 'Khi mọi thứ diễn ra suôn sẻ theo kế hoạch và kết quả được hoàn thành',
          id: 'Saat semuanya berjalan lancar sesuai rencana dan hasilnya selesai',
        },
        0
      ),
      opt(
        {
          ko: '여러 이해관계자를 조율해서 합의점을 찾았을 때',
          en: 'When I coordinate multiple stakeholders and find common ground',
          ja: '複数の関係者を調整して合意点を見つけたとき',
          'zh-CN': '协调多方利益相关者并找到共识点的时候',
          'zh-TW': '協調多方利益相關者並找到共識點的時候',
          vi: 'Khi tôi điều phối nhiều bên liên quan và tìm ra điểm thống nhất',
          id: 'Saat aku mengoordinasikan banyak pemangku kepentingan dan menemukan titik kesepakatan',
        },
        1
      ),
      opt(
        {
          ko: '브레인스토밍에서 예상치 못한 아이디어가 나왔을 때',
          en: 'When an unexpected idea comes out during brainstorming',
          ja: 'ブレインストーミングで予想外のアイデアが出たとき',
          'zh-CN': '头脑风暴中出现意想不到点子的时候',
          'zh-TW': '腦力激盪中出現意想不到點子的時候',
          vi: 'Khi có ý tưởng bất ngờ xuất hiện trong buổi brainstorming',
          id: 'Saat ide tak terduga muncul dalam brainstorming',
        },
        2
      ),
      opt(
        {
          ko: '복잡한 문제의 구조를 파악하고 해결 방향이 잡혔을 때',
          en: 'When I grasp the structure of a complex problem and the solution direction becomes clear',
          ja: '複雑な問題の構造を把握し、解決の方向が定まったとき',
          'zh-CN': '把握复杂问题的结构、找到解决方向的时候',
          'zh-TW': '把握複雜問題的結構、找到解決方向的時候',
          vi: 'Khi tôi nắm bắt được cấu trúc của vấn đề phức tạp và hướng giải quyết được xác định',
          id: 'Saat aku memahami struktur masalah rumit dan arah solusinya menjadi jelas',
        },
        3
      ),
    ],
  },
  {
    id: 6,
    question: L({
      ko: '내 강점이 가장 빛나는 환경은?',
      en: 'The environment where my strengths shine the most?',
      ja: '私の強みが最も輝く環境は？',
      'zh-CN': '我的强项最能发挥的环境是？',
      'zh-TW': '我的強項最能發揮的環境是？',
      vi: 'Môi trường mà điểm mạnh của tôi tỏa sáng nhất là?',
      id: 'Lingkungan di mana kekuatanku paling bersinar adalah?',
    }),
    options: [
      opt(
        {
          ko: '명확한 목표와 프로세스가 있는 안정적인 환경',
          en: 'A stable environment with clear goals and processes',
          ja: '明確な目標とプロセスがある安定した環境',
          'zh-CN': '有明确目标与流程的稳定环境',
          'zh-TW': '有明確目標與流程的穩定環境',
          vi: 'Môi trường ổn định có mục tiêu và quy trình rõ ràng',
          id: 'Lingkungan stabil dengan tujuan dan proses yang jelas',
        },
        0
      ),
      opt(
        {
          ko: '다양한 사람들과 협력하는 팀 중심 환경',
          en: 'A team-centered environment collaborating with diverse people',
          ja: '様々な人と協力するチーム中心の環境',
          'zh-CN': '与多元人才协作、以团队为核心的环境',
          'zh-TW': '與多元人才協作、以團隊為核心的環境',
          vi: 'Môi trường lấy nhóm làm trung tâm, hợp tác với nhiều kiểu người khác nhau',
          id: 'Lingkungan berpusat pada tim dengan kolaborasi berbagai orang',
        },
        1
      ),
      opt(
        {
          ko: '새로운 시도가 장려되는 자율적인 환경',
          en: 'An autonomous environment where new attempts are encouraged',
          ja: '新しい試みが奨励される自律的な環境',
          'zh-CN': '鼓励新尝试的自主环境',
          'zh-TW': '鼓勵新嘗試的自主環境',
          vi: 'Môi trường tự chủ nơi những thử nghiệm mới được khuyến khích',
          id: 'Lingkungan otonom yang mendorong percobaan baru',
        },
        2
      ),
      opt(
        {
          ko: '전략적 판단이 필요한 도전적인 환경',
          en: 'A challenging environment that requires strategic judgment',
          ja: '戦略的判断が必要な挑戦的な環境',
          'zh-CN': '需要战略判断的挑战性环境',
          'zh-TW': '需要戰略判斷的挑戰性環境',
          vi: 'Môi trường đầy thử thách cần đến khả năng phán đoán chiến lược',
          id: 'Lingkungan penuh tantangan yang membutuhkan penilaian strategis',
        },
        3
      ),
    ],
  },
  {
    id: 7,
    question: L({
      ko: '상대방이 나와 일한 후 하는 말을 고른다면?',
      en: 'What would people say after working with me?',
      ja: '相手が私と一緒に仕事した後にする言葉を選ぶなら？',
      'zh-CN': '如果选出对方与我合作后会说的话？',
      'zh-TW': '如果選出對方與我合作後會說的話？',
      vi: 'Nếu chọn ra câu người khác nói sau khi làm việc với tôi?',
      id: 'Kalau memilih kata-kata yang diucapkan orang setelah bekerja denganku?',
    }),
    options: [
      opt(
        {
          ko: '"믿고 맡길 수 있는 사람이야. 항상 제대로 해와"',
          en: '"You can trust and rely on them. They always deliver properly"',
          ja: '「信頼して任せられる人だよ。いつもしっかりやってくる」',
          'zh-CN': '「那是个能让人放心托付的人。总能好好完成」',
          'zh-TW': '「那是個能讓人放心託付的人。總能好好完成」',
          vi: '"Là người có thể tin tưởng giao việc. Luôn hoàn thành tốt"',
          id: '"Orang yang bisa dipercaya untuk mengerjakan tugas. Selalu mengerjakannya dengan baik"',
        },
        0
      ),
      opt(
        {
          ko: '"저 사람이랑 일하면 소통이 잘 되고 편해"',
          en: '"Working with that person is comfortable, and communication flows well"',
          ja: '「あの人と仕事するとコミュニケーションがうまくいって楽だ」',
          'zh-CN': '「和那个人一起工作沟通很顺畅、也很轻松」',
          'zh-TW': '「和那個人一起工作溝通很順暢、也很輕鬆」',
          vi: '"Làm việc với người đó giao tiếp trôi chảy và thoải mái"',
          id: '"Kalau kerja sama dengan orang itu, komunikasinya lancar dan nyaman"',
        },
        1
      ),
      opt(
        {
          ko: '"이 사람 아이디어가 항상 신선해. 생각지도 못했던 것들을 꺼내"',
          en: '"This person\'s ideas are always fresh. They bring up things you\'d never think of"',
          ja: '「この人のアイデアはいつも新鮮だ。思いもしなかったことを出してくる」',
          'zh-CN': '「这个人的点子总是很新鲜，能提出你完全没想到的东西」',
          'zh-TW': '「這個人的點子總是很新鮮，能提出你完全沒想到的東西」',
          vi: '"Ý tưởng của người này luôn mới mẻ. Đưa ra những thứ mình chưa từng nghĩ tới"',
          id: '"Ide orang ini selalu segar. Mengeluarkan hal-hal yang tidak terpikirkan sebelumnya"',
        },
        2
      ),
      opt(
        {
          ko: '"상황 파악이 빠르고 방향을 잘 잡아. 같이 일하면 든든해"',
          en: '"They grasp situations fast and set a good direction. It\'s reassuring to work with them"',
          ja: '「状況把握が速くて方向をよく定める。一緒に仕事すると頼りになる」',
          'zh-CN': '「掌握状况很快，方向抓得也很好。一起工作很安心」',
          'zh-TW': '「掌握狀況很快，方向抓得也很好。一起工作很安心」',
          vi: '"Nắm bắt tình huống nhanh và xác định hướng tốt. Làm việc cùng rất yên tâm"',
          id: '"Cepat memahami situasi dan menentukan arah dengan baik. Bekerja sama jadi tenang"',
        },
        3
      ),
    ],
  },
  {
    id: 8,
    question: L({
      ko: '나를 한 마디로 소개하는 문장에 가장 가까운 것은?',
      en: 'Which sentence is closest to introducing myself in one line?',
      ja: '私を一言で紹介する文章に最も近いものは？',
      'zh-CN': '最贴近用一句话介绍我的句子是？',
      'zh-TW': '最貼近用一句話介紹我的句子是？',
      vi: 'Câu nào gần nhất với cách giới thiệu bản thân tôi trong một câu?',
      id: 'Kalimat mana yang paling mendekati untuk memperkenalkan diriku dalam satu kalimat?',
    }),
    options: [
      opt(
        {
          ko: '"맡은 것은 반드시 완성해내는 사람입니다"',
          en: '"I am someone who always completes what I take on"',
          ja: '「任されたことは必ず完成させる人です」',
          'zh-CN': '「我是一个所负责的事必定完成的人」',
          'zh-TW': '「我是一個所負責的事必定完成的人」',
          vi: '"Tôi là người luôn hoàn thành những việc được giao"',
          id: '"Saya adalah orang yang pasti menyelesaikan apa yang dipercayakan"',
        },
        0
      ),
      opt(
        {
          ko: '"사람과의 연결을 통해 결과를 만드는 사람입니다"',
          en: '"I am someone who creates results through connections with people"',
          ja: '「人とのつながりを通じて結果を作る人です」',
          'zh-CN': '「我是通过与人的连接来创造成果的人」',
          'zh-TW': '「我是透過與人的連結來創造成果的人」',
          vi: '"Tôi là người tạo ra kết quả thông qua kết nối với con người"',
          id: '"Saya adalah orang yang menciptakan hasil melalui koneksi dengan orang lain"',
        },
        1
      ),
      opt(
        {
          ko: '"새로운 관점으로 문제를 다르게 보는 사람입니다"',
          en: '"I am someone who sees problems differently through new perspectives"',
          ja: '「新しい視点で問題を違って見る人です」',
          'zh-CN': '「我是用新视角来看待问题的人」',
          'zh-TW': '「我是用新視角來看待問題的人」',
          vi: '"Tôi là người nhìn nhận vấn đề khác đi bằng góc nhìn mới"',
          id: '"Saya adalah orang yang melihat masalah secara berbeda melalui perspektif baru"',
        },
        2
      ),
      opt(
        {
          ko: '"복잡한 것을 단순하게 만들고 실행을 이끄는 사람입니다"',
          en: '"I am someone who simplifies complexity and leads execution"',
          ja: '「複雑なことをシンプルにし、実行を導く人です」',
          'zh-CN': '「我是把复杂变简单、并带动执行的人」',
          'zh-TW': '「我是把複雜變簡單、並帶動執行的人」',
          vi: '"Tôi là người đơn giản hóa sự phức tạp và dẫn dắt việc thực thi"',
          id: '"Saya adalah orang yang menyederhanakan kerumitan dan memimpin eksekusi"',
        },
        3
      ),
    ],
  },
  {
    id: 9,
    question: L({
      ko: '어려운 상황이 왔을 때 나는?',
      en: 'When a difficult situation comes, I...',
      ja: '難しい状況が来たとき、私は？',
      'zh-CN': '遇到困难状况时，我会？',
      'zh-TW': '遇到困難狀況時，我會？',
      vi: 'Khi gặp tình huống khó khăn, tôi sẽ?',
      id: 'Saat situasi sulit datang, aku akan?',
    }),
    options: [
      opt(
        {
          ko: '원칙과 프로세스를 지키며 묵묵히 해결한다',
          en: 'Quietly solve it while sticking to principles and processes',
          ja: '原則とプロセスを守りながら黙々と解決する',
          'zh-CN': '坚持原则与流程，默默解决',
          'zh-TW': '堅持原則與流程，默默解決',
          vi: 'Lặng lẽ giải quyết trong khi vẫn tuân theo nguyên tắc và quy trình',
          id: 'Diam-diam menyelesaikannya sambil menjaga prinsip dan proses',
        },
        0
      ),
      opt(
        {
          ko: '주변 사람들과 힘을 합쳐서 함께 헤쳐나간다',
          en: 'Join forces with people around me and get through it together',
          ja: '周りの人と力を合わせて一緒に乗り越える',
          'zh-CN': '和周围的人齐心协力一起渡过难关',
          'zh-TW': '和周圍的人齊心協力一起度過難關',
          vi: 'Hợp lực với những người xung quanh để cùng vượt qua',
          id: 'Bersatu dengan orang-orang di sekitar dan melewatinya bersama',
        },
        1
      ),
      opt(
        {
          ko: '기존과 다른 방법을 찾아서 돌파구를 만든다',
          en: 'Find a different method than before and create a breakthrough',
          ja: '既存とは違う方法を見つけて突破口を作る',
          'zh-CN': '寻找与以往不同的方法，开创突破口',
          'zh-TW': '尋找與以往不同的方法，開創突破口',
          vi: 'Tìm phương pháp khác với trước đây để tạo lối thoát',
          id: 'Mencari metode yang berbeda dari sebelumnya untuk menciptakan jalan keluar',
        },
        2
      ),
      opt(
        {
          ko: '상황을 분석하고 가장 효율적인 전략을 세운다',
          en: 'Analyze the situation and build the most efficient strategy',
          ja: '状況を分析し、最も効率的な戦略を立てる',
          'zh-CN': '分析状况，制定最有效率的战略',
          'zh-TW': '分析狀況，制定最有效率的戰略',
          vi: 'Phân tích tình huống và xây dựng chiến lược hiệu quả nhất',
          id: 'Menganalisis situasi dan menyusun strategi paling efisien',
        },
        3
      ),
    ],
  },
  {
    id: 10,
    question: L({
      ko: '내 커리어에서 가장 중요하게 생각하는 가치는?',
      en: 'The value I consider most important in my career?',
      ja: '私のキャリアで最も重要だと考える価値は？',
      'zh-CN': '我在职业生涯中最看重的价值是？',
      'zh-TW': '我在職業生涯中最看重的價值是？',
      vi: 'Giá trị tôi coi là quan trọng nhất trong sự nghiệp là gì?',
      id: 'Nilai yang aku anggap paling penting dalam kariernya adalah?',
    }),
    options: [
      opt(
        {
          ko: '신뢰와 책임감. 한번 맡은 일은 끝까지 한다',
          en: 'Trust and responsibility. Once I take something on, I see it through to the end',
          ja: '信頼と責任感。一度任されたことは最後までやり抜く',
          'zh-CN': '信任与责任感。一旦接手的事就要做到底',
          'zh-TW': '信任與責任感。一旦接手的事就要做到底',
          vi: 'Sự tin tưởng và trách nhiệm. Việc đã nhận là làm đến cùng',
          id: 'Kepercayaan dan tanggung jawab. Begitu menerima tugas, dikerjakan sampai tuntas',
        },
        0
      ),
      opt(
        {
          ko: '관계와 영향력. 함께 성장하는 것이 진짜 성과다',
          en: 'Relationships and influence. Growing together is the real achievement',
          ja: '関係と影響力。一緒に成長することが本当の成果だ',
          'zh-CN': '关系与影响力。一起成长才是真正的成果',
          'zh-TW': '關係與影響力。一起成長才是真正的成果',
          vi: 'Quan hệ và tầm ảnh hưởng. Cùng nhau phát triển mới là thành tích thực sự',
          id: 'Hubungan dan pengaruh. Bertumbuh bersama adalah pencapaian sejati',
        },
        1
      ),
      opt(
        {
          ko: '창의와 혁신. 새로운 것을 만드는 것이 살아있다는 느낌이다',
          en: "Creativity and innovation. Making something new is what makes me feel alive",
          ja: '創造と革新。新しいものを作ることが生きている実感だ',
          'zh-CN': '创意与革新。创造新事物才让我感觉自己活着',
          'zh-TW': '創意與革新。創造新事物才讓我感覺自己活著',
          vi: 'Sáng tạo và đổi mới. Tạo ra điều mới mẻ chính là cảm giác được sống',
          id: 'Kreativitas dan inovasi. Menciptakan hal baru adalah rasanya benar-benar hidup',
        },
        2
      ),
      opt(
        {
          ko: '성과와 전략. 결과로 증명하는 것이 가장 중요하다',
          en: 'Results and strategy. Proving it through outcomes is what matters most',
          ja: '成果と戦略。結果で証明することが最も重要だ',
          'zh-CN': '成果与战略。用结果证明才是最重要的',
          'zh-TW': '成果與戰略。用結果證明才是最重要的',
          vi: 'Thành tích và chiến lược. Chứng minh bằng kết quả là điều quan trọng nhất',
          id: 'Hasil dan strategi. Membuktikan lewat hasil adalah yang paling penting',
        },
        3
      ),
    ],
  },
  {
    id: 11,
    question: L({
      ko: '내 이력서나 자기소개서에서 가장 설득력 있게 쓸 수 있는 경험은?',
      en: 'What experience could I write most persuasively in my resume or cover letter?',
      ja: '私の履歴書や自己紹介書で最も説得力を持って書ける経験は？',
      'zh-CN': '在我的履历或自我介绍中最能说服人心的经历是？',
      'zh-TW': '在我的履歷或自我介紹中最能說服人心的經歷是？',
      vi: 'Kinh nghiệm nào tôi có thể viết thuyết phục nhất trong CV hoặc thư xin việc?',
      id: 'Pengalaman apa yang bisa aku tulis paling meyakinkan di CV atau surat lamaran?',
    }),
    options: [
      opt(
        {
          ko: '꼼꼼하게 실행해서 품질을 높인 경험',
          en: 'An experience of executing meticulously to raise quality',
          ja: '丁寧に実行して品質を高めた経験',
          'zh-CN': '细致执行、提升品质的经历',
          'zh-TW': '細膩執行、提升品質的經歷',
          vi: 'Kinh nghiệm thực hiện tỉ mỉ để nâng cao chất lượng',
          id: 'Pengalaman melakukan tugas secara cermat untuk meningkatkan kualitas',
        },
        0
      ),
      opt(
        {
          ko: '이해관계자를 조율하거나 팀을 이끈 경험',
          en: 'An experience of coordinating stakeholders or leading a team',
          ja: '関係者を調整したり、チームを率いた経験',
          'zh-CN': '协调各方或带领团队的经历',
          'zh-TW': '協調各方或帶領團隊的經歷',
          vi: 'Kinh nghiệm điều phối các bên liên quan hoặc dẫn dắt nhóm',
          id: 'Pengalaman mengoordinasikan pemangku kepentingan atau memimpin tim',
        },
        1
      ),
      opt(
        {
          ko: '새로운 방법을 도입해서 변화를 만든 경험',
          en: 'An experience of introducing a new method to create change',
          ja: '新しい方法を導入して変化を作った経験',
          'zh-CN': '引入新方法、带来变化的经历',
          'zh-TW': '引入新方法、帶來變化的經歷',
          vi: 'Kinh nghiệm áp dụng phương pháp mới để tạo ra sự thay đổi',
          id: 'Pengalaman memperkenalkan metode baru untuk menciptakan perubahan',
        },
        2
      ),
      opt(
        {
          ko: '데이터나 논리로 의사결정을 주도한 경험',
          en: 'An experience of leading decision-making through data or logic',
          ja: 'データや論理で意思決定を主導した経験',
          'zh-CN': '以数据或逻辑主导决策的经历',
          'zh-TW': '以數據或邏輯主導決策的經歷',
          vi: 'Kinh nghiệm dẫn dắt việc ra quyết định bằng dữ liệu hoặc logic',
          id: 'Pengalaman memimpin pengambilan keputusan berdasarkan data atau logika',
        },
        3
      ),
    ],
  },
  {
    id: 12,
    question: L({
      ko: '링크드인 헤드라인에 나를 표현할 단어를 고른다면?',
      en: 'If choosing words to express myself in a LinkedIn headline?',
      ja: 'リンクトインヘッドラインで私を表現する言葉を選ぶなら？',
      'zh-CN': '如果要选一个能表达自己的词放在LinkedIn标题里？',
      'zh-TW': '如果要選一個能表達自己的詞放在LinkedIn標題裡？',
      vi: 'Nếu chọn từ để thể hiện bản thân trong tiêu đề LinkedIn?',
      id: 'Kalau memilih kata untuk mendeskripsikan diri di headline LinkedIn?',
    }),
    options: [
      opt(
        {
          ko: '실행력·완성도·신뢰성',
          en: 'Execution · Quality · Reliability',
          ja: '実行力・完成度・信頼性',
          'zh-CN': '执行力·完成度·可靠性',
          'zh-TW': '執行力·完成度·可靠性',
          vi: 'Khả năng thực thi · Độ hoàn thiện · Đáng tin cậy',
          id: 'Kemampuan Eksekusi · Kualitas · Keandalan',
        },
        0
      ),
      opt(
        {
          ko: '소통·협력·관계 구축',
          en: 'Communication · Collaboration · Relationship-building',
          ja: 'コミュニケーション・協力・関係構築',
          'zh-CN': '沟通·协作·关系建立',
          'zh-TW': '溝通·協作·關係建立',
          vi: 'Giao tiếp · Hợp tác · Xây dựng quan hệ',
          id: 'Komunikasi · Kolaborasi · Membangun Relasi',
        },
        1
      ),
      opt(
        {
          ko: '창의·혁신·문제 해결',
          en: 'Creativity · Innovation · Problem-solving',
          ja: '創造・革新・問題解決',
          'zh-CN': '创意·创新·问题解决',
          'zh-TW': '創意·創新·問題解決',
          vi: 'Sáng tạo · Đổi mới · Giải quyết vấn đề',
          id: 'Kreativitas · Inovasi · Pemecahan Masalah',
        },
        2
      ),
      opt(
        {
          ko: '전략·리더십·성과 지향',
          en: 'Strategy · Leadership · Results-oriented',
          ja: '戦略・リーダーシップ・成果志向',
          'zh-CN': '战略·领导力·成果导向',
          'zh-TW': '戰略·領導力·成果導向',
          vi: 'Chiến lược · Khả năng lãnh đạo · Định hướng kết quả',
          id: 'Strategi · Kepemimpinan · Berorientasi Hasil',
        },
        3
      ),
    ],
  },
];

export const phase3PersonalBrandingKeywordsResults: Phase3PersonalBrandingKeywordsResult[] = [
  {
    type: 'Type1',
    emoji: '🎯',
    title: L({
      ko: '믿고 맡길 수 있는 사람, 신중한 실행가',
      en: 'Someone You Can Trust and Rely On, The Careful Executor',
      ja: '信頼して任せられる人、慎重な実行家',
      'zh-CN': '值得信赖托付的人，谨慎的执行者',
      'zh-TW': '值得信賴託付的人，謹慎的執行者',
      vi: 'Người có thể tin tưởng giao việc, Nhà thực thi cẩn trọng',
      id: 'Orang yang Bisa Dipercaya, Sang Eksekutor yang Cermat',
    }),
    shortDescription: L({
      ko: "당신을 가장 잘 표현하는 단어는 '맡기면 반드시 해온다'입니다.",
      en: "The phrase that best describes you is 'Give it to them, and it's done.'",
      ja: 'あなたを最もよく表す言葉は「任せれば必ずやってくる」です。',
      'zh-CN': '最能形容你的一句话是「交给你就一定能完成」。',
      'zh-TW': '最能形容你的一句話是「交給你就一定能完成」。',
      vi: 'Câu nói mô tả bạn chính xác nhất là "Giao là chắc chắn xong."',
      id: 'Kata yang paling menggambarkan dirimu adalah "kalau dipercayakan, pasti diselesaikan."',
    }),
    description: L({
      ko: '꼼꼼하게 실행하고 기한을 지키며 결과물의 완성도가 높은 사람입니다. 화려하게 나서지 않아도 주변에서 "저 사람한테 맡기면 돼"라는 신뢰가 자연스럽게 쌓이는 타입입니다. 이 강점은 어떤 직종에서도 가장 기본이면서 가장 희귀한 역량입니다.',
      en: 'You execute meticulously, keep deadlines, and consistently deliver high-quality results. Even without standing out flashily, you naturally build the kind of trust that makes people say "you can just leave it to them." This strength is the most basic yet rarest ability in any profession.',
      ja: '丁寧に実行し、期限を守り、成果物の完成度が高い人です。目立たなくても周りから「あの人に任せれば大丈夫」という信頼が自然に積み重なるタイプです。この強みはどんな職種でも最も基本でありながら最も希少な能力です。',
      'zh-CN': '你是执行细致、遵守期限、成品完成度高的人。即使不张扬，也能让周围人自然而然产生「交给那个人就行」的信任感。这种强项在任何职业中都是最基本却也最稀缺的能力。',
      'zh-TW': '你是執行細膩、遵守期限、成品完成度高的人。即使不張揚，也能讓周圍人自然而然產生「交給那個人就行」的信任感。這種強項在任何職業中都是最基本卻也最稀缺的能力。',
      vi: 'Bạn là người thực hiện tỉ mỉ, đúng thời hạn và luôn cho ra kết quả hoàn thiện cao. Dù không nổi bật rực rỡ, bạn vẫn tự nhiên xây dựng được sự tin tưởng khiến người khác nghĩ "giao cho người đó là được." Đây là năng lực cơ bản nhất nhưng cũng hiếm nhất trong bất kỳ ngành nghề nào.',
      id: 'Kamu adalah orang yang menjalankan tugas dengan cermat, menepati tenggat waktu, dan selalu menghasilkan karya dengan kualitas tinggi. Meski tidak tampil mencolok, kepercayaan "kalau dipercayakan ke orang itu, pasti aman" terbentuk secara alami di sekitarmu. Kekuatan ini adalah kemampuan paling dasar namun paling langka di bidang pekerjaan apa pun.',
    }),
    keywords: L({
      ko: '신뢰성 · 완성도 · 책임감',
      en: 'Reliability · Quality-driven · Accountable',
      ja: '信頼性・完成度・責任感',
      'zh-CN': '可靠性·完成度·责任感',
      'zh-TW': '可靠性·完成度·責任感',
      vi: 'Đáng tin cậy · Chú trọng chất lượng · Có trách nhiệm',
      id: 'Keandalan · Berorientasi Kualitas · Bertanggung Jawab',
    }),
    englishKeywords: L({
      ko: 'Reliability · Quality-driven · Accountable',
      en: 'Reliability · Quality-driven · Accountable',
      ja: 'Reliability · Quality-driven · Accountable',
      'zh-CN': 'Reliability · Quality-driven · Accountable',
      'zh-TW': 'Reliability · Quality-driven · Accountable',
      vi: 'Reliability · Quality-driven · Accountable',
      id: 'Reliability · Quality-driven · Accountable',
    }),
    sections: [
      section(SECTION_TITLE_JOB, {
        ko: '프로젝트 관리·품질 관리·운영·회계·법무',
        en: 'Project Management · Quality Control · Operations · Accounting · Legal',
        ja: 'プロジェクト管理・品質管理・運営・会計・法務',
        'zh-CN': '项目管理·质量管理·运营·会计·法务',
        'zh-TW': '專案管理·品質管理·營運·會計·法務',
        vi: 'Quản lý dự án · Quản lý chất lượng · Vận hành · Kế toán · Pháp chế',
        id: 'Manajemen Proyek · Kontrol Kualitas · Operasional · Akuntansi · Hukum',
      }),
      section(SECTION_TITLE_HEADLINE, {
        ko: '높은 완성도와 신뢰성으로 결과를 만드는 [직무] 전문가',
        en: '[Role] expert who delivers results with high quality and reliability',
        ja: '高い完成度と信頼性で結果を出す[職種]専門家',
        'zh-CN': '以高完成度与可靠性创造成果的[职位]专家',
        'zh-TW': '以高完成度與可靠性創造成果的[職位]專家',
        vi: 'Chuyên gia [vị trí] tạo ra kết quả với độ hoàn thiện và độ tin cậy cao',
        id: 'Ahli [posisi] yang menghasilkan hasil kerja dengan kualitas dan keandalan tinggi',
      }),
      section(SECTION_TITLE_RESUME, {
        ko: '맡은 업무를 끝까지 책임지고 완성도 있게 마무리하는 [직무]입니다',
        en: "I'm a [Role] who takes full responsibility for assigned tasks and finishes them with high quality",
        ja: '担当業務を最後まで責任を持って完成度高く仕上げる[職種]です',
        'zh-CN': '我是一名对所负责的工作负责到底、并高质量完成的[职位]',
        'zh-TW': '我是一名對所負責的工作負責到底、並高品質完成的[職位]',
        vi: 'Tôi là [vị trí] chịu trách nhiệm đến cùng với công việc được giao và hoàn thành với độ hoàn thiện cao',
        id: 'Saya adalah [posisi] yang bertanggung jawab penuh atas tugas yang diberikan dan menyelesaikannya dengan kualitas tinggi',
      }),
      section(SECTION_TITLE_STRENGTH, {
        ko: '어떤 팀에서도 안정감을 주는 핵심 인재 포지셔닝',
        en: 'Positioning as a core talent who brings stability to any team',
        ja: 'どんなチームにも安定感を与える核心人材としてのポジショニング',
        'zh-CN': '在任何团队中都能带来安定感的核心人才定位',
        'zh-TW': '在任何團隊中都能帶來安定感的核心人才定位',
        vi: 'Định vị là nhân tài chủ lực mang lại sự ổn định cho bất kỳ nhóm nào',
        id: 'Positioning sebagai talenta inti yang memberi rasa aman di tim mana pun',
      }),
      section(SECTION_TITLE_BOOST, {
        ko: '완성한 프로젝트의 품질 지표나 신뢰 사례를 수치로 표현하기',
        en: 'Express the quality metrics or trust cases of completed projects in numbers',
        ja: '完成したプロジェクトの品質指標や信頼事例を数値で表現する',
        'zh-CN': '用数字表达完成项目的质量指标或信赖案例',
        'zh-TW': '用數字表達完成專案的品質指標或信賴案例',
        vi: 'Thể hiện các chỉ số chất lượng hoặc trường hợp được tin tưởng của dự án đã hoàn thành bằng số liệu cụ thể',
        id: 'Menyatakan indikator kualitas atau contoh kepercayaan dari proyek yang telah diselesaikan dalam bentuk angka',
      }),
    ],
    shareMessage: L({
      ko: '내 퍼스널 브랜딩 키워드: #신뢰성 #완성도 #책임감 🎯 맡기면 반드시 해오는 유형이래... 링크드인 헤드라인에 바로 씀 → 너는 어떤 키워드 나왔어?',
      en: "My personal branding keywords: #Reliability #QualityDriven #Accountable 🎯 Apparently I'm the type who always delivers when you hand something off... putting this straight in my LinkedIn headline lol → What keywords did you get?",
      ja: '私のパーソナルブランディングキーワード：#信頼性 #完成度 #責任感 🎯 任せれば必ずやってくるタイプらしい…リンクトインヘッドラインにそのまま使う（笑）→ あなたはどんなキーワードが出た？',
      'zh-CN': '我的个人品牌关键词：#可靠性 #完成度 #责任感 🎯 据说是交给我就一定能完成的类型…直接写进LinkedIn标题了哈哈 → 你测出了什么关键词？',
      'zh-TW': '我的個人品牌關鍵詞：#可靠性 #完成度 #責任感 🎯 據說是交給我就一定能完成的類型…直接寫進LinkedIn標題了哈哈 → 你測出了什麼關鍵詞？',
      vi: 'Từ khóa thương hiệu cá nhân của tôi: #ĐángTinCậy #ChúTrọngChấtLượng #CóTráchNhiệm 🎯 Nghe nói là kiểu giao là chắc chắn xong... cho luôn vào tiêu đề LinkedIn ha ha → Bạn ra từ khóa gì?',
      id: 'Kata kunci personal branding-ku: #Keandalan #BerorientasiKualitas #BertanggungJawab 🎯 Katanya aku tipe yang kalau dipercayakan pasti selesai... langsung dipakai di headline LinkedIn wkwk → Kata kunci apa yang kamu dapat?',
    }),
  },
  {
    type: 'Type2',
    emoji: '🤝',
    title: L({
      ko: '관계로 결과를 만드는 사람, 따뜻한 협력가',
      en: 'Someone Who Creates Results Through Relationships, The Warm Collaborator',
      ja: '関係性で結果を作る人、温かい協力者',
      'zh-CN': '靠关系创造成果的人，温暖的协作者',
      'zh-TW': '靠關係創造成果的人，溫暖的協作者',
      vi: 'Người tạo kết quả từ mối quan hệ, Nhà hợp tác ấm áp',
      id: 'Orang yang Menciptakan Hasil Lewat Relasi, Sang Kolaborator yang Hangat',
    }),
    shortDescription: L({
      ko: "당신을 가장 잘 표현하는 단어는 '함께하면 더 잘된다'입니다.",
      en: "The phrase that best describes you is 'Things go better together.'",
      ja: 'あなたを最もよく表す言葉は「一緒にやればもっとうまくいく」です。',
      'zh-CN': '最能形容你的一句话是「一起做会更好」。',
      'zh-TW': '最能形容你的一句話是「一起做會更好」。',
      vi: 'Câu nói mô tả bạn chính xác nhất là "Cùng nhau làm sẽ tốt hơn."',
      id: 'Kata yang paling menggambarkan dirimu adalah "kalau bersama, hasilnya lebih baik."',
    }),
    description: L({
      ko: '다양한 사람들과 자연스럽게 관계를 맺고 팀 시너지를 만들어내는 사람입니다. 어려운 상황에서 갈등을 중재하고 이해관계자를 연결하는 역할을 자연스럽게 맡습니다. 조직의 온도를 높이는 사람입니다.',
      en: 'You naturally build relationships with a wide range of people and create team synergy. In difficult situations, you naturally take on the role of mediating conflicts and connecting stakeholders. You are someone who raises the warmth of an organization.',
      ja: '様々な人と自然に関係を築き、チームのシナジーを生み出す人です。難しい状況では対立を仲介し、関係者をつなぐ役割を自然に担います。組織の温度を上げる人です。',
      'zh-CN': '你能自然地与各种人建立关系，创造团队协同效应。在困难情况下，你会自然地承担调解冲突、连接相关人员的角色。你是能提升组织温度的人。',
      'zh-TW': '你能自然地與各種人建立關係，創造團隊協同效應。在困難情況下，你會自然地承擔調解衝突、連接相關人員的角色。你是能提升組織溫度的人。',
      vi: 'Bạn là người tự nhiên xây dựng quan hệ với nhiều kiểu người khác nhau và tạo ra sự cộng hưởng cho nhóm. Trong những tình huống khó khăn, bạn tự nhiên đóng vai trò hòa giải xung đột và kết nối các bên liên quan. Bạn là người nâng cao nhiệt độ của tổ chức.',
      id: 'Kamu adalah orang yang secara alami membangun hubungan dengan berbagai orang dan menciptakan sinergi tim. Dalam situasi sulit, kamu secara alami mengambil peran menengahi konflik dan menghubungkan para pemangku kepentingan. Kamu adalah orang yang menghangatkan suasana organisasi.',
    }),
    keywords: L({
      ko: '소통력 · 팀워크 · 공감능력',
      en: 'Communication · Teamwork · Empathy',
      ja: 'コミュニケーション力・チームワーク・共感力',
      'zh-CN': '沟通力·团队合作·共情能力',
      'zh-TW': '溝通力·團隊合作·共情能力',
      vi: 'Khả năng giao tiếp · Làm việc nhóm · Khả năng đồng cảm',
      id: 'Kemampuan Komunikasi · Kerja Tim · Kemampuan Berempati',
    }),
    englishKeywords: L({
      ko: 'Communication · Collaboration · Empathy',
      en: 'Communication · Collaboration · Empathy',
      ja: 'Communication · Collaboration · Empathy',
      'zh-CN': 'Communication · Collaboration · Empathy',
      'zh-TW': 'Communication · Collaboration · Empathy',
      vi: 'Communication · Collaboration · Empathy',
      id: 'Communication · Collaboration · Empathy',
    }),
    sections: [
      section(SECTION_TITLE_JOB, {
        ko: 'HR·고객 서비스·교육·영업·기획·PR',
        en: 'HR · Customer Service · Education · Sales · Planning · PR',
        ja: '人事・カスタマーサービス・教育・営業・企画・PR',
        'zh-CN': '人力资源·客户服务·教育·销售·企划·公关',
        'zh-TW': '人力資源·客戶服務·教育·銷售·企劃·公關',
        vi: 'Nhân sự · Dịch vụ khách hàng · Giáo dục · Kinh doanh · Hoạch định · PR',
        id: 'HR · Layanan Pelanggan · Pendidikan · Penjualan · Perencanaan · PR',
      }),
      section(SECTION_TITLE_HEADLINE, {
        ko: '소통과 협력으로 팀 성과를 이끄는 [직무] 전문가',
        en: '[Role] expert who drives team performance through communication and collaboration',
        ja: 'コミュニケーションと協力でチームの成果を導く[職種]専門家',
        'zh-CN': '以沟通与协作带动团队成果的[职位]专家',
        'zh-TW': '以溝通與協作帶動團隊成果的[職位]專家',
        vi: 'Chuyên gia [vị trí] dẫn dắt thành tích nhóm thông qua giao tiếp và hợp tác',
        id: 'Ahli [posisi] yang menghasilkan performa tim melalui komunikasi dan kolaborasi',
      }),
      section(SECTION_TITLE_RESUME, {
        ko: '다양한 이해관계자와의 소통을 통해 팀 시너지를 만드는 [직무]입니다',
        en: "I'm a [Role] who creates team synergy through communication with diverse stakeholders",
        ja: '多様な関係者とのコミュニケーションを通じてチームのシナジーを作る[職種]です',
        'zh-CN': '我是一名通过与多方利益相关者沟通来创造团队协同效应的[职位]',
        'zh-TW': '我是一名透過與多方利益相關者溝通來創造團隊協同效應的[職位]',
        vi: 'Tôi là [vị trí] tạo ra sự cộng hưởng cho nhóm thông qua giao tiếp với nhiều bên liên quan khác nhau',
        id: 'Saya adalah [posisi] yang menciptakan sinergi tim melalui komunikasi dengan berbagai pemangku kepentingan',
      }),
      section(SECTION_TITLE_STRENGTH, {
        ko: 'AI가 대체하기 가장 어려운 휴먼 스킬 포지셔닝',
        en: 'Positioning as the human skill that AI finds hardest to replace',
        ja: 'AIが代替するのが最も難しいヒューマンスキルのポジショニング',
        'zh-CN': 'AI最难取代的人类技能定位',
        'zh-TW': 'AI最難取代的人類技能定位',
        vi: 'Định vị là kỹ năng con người mà AI khó thay thế nhất',
        id: 'Positioning sebagai soft skill manusia yang paling sulit digantikan AI',
      }),
      section(SECTION_TITLE_BOOST, {
        ko: '갈등 해결·팀 성과 향상 사례를 구체적 에피소드로 표현하기',
        en: 'Express conflict resolution and team performance improvement cases as specific episodes',
        ja: '対立解決・チーム成果向上事例を具体的なエピソードで表現する',
        'zh-CN': '用具体案例表达冲突解决与团队成果提升的事例',
        'zh-TW': '用具體案例表達衝突解決與團隊成果提升的事例',
        vi: 'Thể hiện các trường hợp giải quyết xung đột và cải thiện thành tích nhóm bằng các câu chuyện cụ thể',
        id: 'Menyatakan contoh penyelesaian konflik dan peningkatan performa tim melalui episode konkret',
      }),
    ],
    shareMessage: L({
      ko: '내 퍼스널 브랜딩 키워드: #소통력 #팀워크 #공감능력 🤝 함께하면 더 잘된다는 유형이래... 이력서에 쓸 키워드 찾았다 → 너는 어떤 키워드 나왔어?',
      en: "My personal branding keywords: #Communication #Teamwork #Empathy 🤝 Apparently I'm the type where things go better together... found my resume keywords → What keywords did you get?",
      ja: '私のパーソナルブランディングキーワード：#コミュニケーション力 #チームワーク #共感力 🤝 一緒にやればもっとうまくいくタイプらしい…履歴書に使うキーワード見つけた → あなたはどんなキーワードが出た？',
      'zh-CN': '我的个人品牌关键词：#沟通力 #团队合作 #共情能力 🤝 据说是一起做会更好的类型…找到了简历要用的关键词 → 你测出了什么关键词？',
      'zh-TW': '我的個人品牌關鍵詞：#溝通力 #團隊合作 #共情能力 🤝 據說是一起做會更好的類型…找到了履歷要用的關鍵詞 → 你測出了什麼關鍵詞？',
      vi: 'Từ khóa thương hiệu cá nhân của tôi: #KhảNăngGiaoTiếp #LàmViệcNhóm #KhảNăngĐồngCảm 🤝 Nghe nói là kiểu cùng nhau làm sẽ tốt hơn... tìm được từ khóa để viết vào CV rồi → Bạn ra từ khóa gì?',
      id: 'Kata kunci personal branding-ku: #KemampuanKomunikasi #KerjaTim #KemampuanBerempati 🤝 Katanya aku tipe yang kalau bersama hasilnya lebih baik... nemu kata kunci buat CV → Kata kunci apa yang kamu dapat?',
    }),
  },
  {
    type: 'Type3',
    emoji: '💡',
    title: L({
      ko: '틀을 깨는 사람, 창의적 문제해결사',
      en: 'The Mold-Breaker, Creative Problem Solver',
      ja: '型を破る人、創造的問題解決者',
      'zh-CN': '打破常规的人，创意型问题解决者',
      'zh-TW': '打破常規的人，創意型問題解決者',
      vi: 'Người phá vỡ khuôn mẫu, Nhà giải quyết vấn đề sáng tạo',
      id: 'Sang Pendobrak Batasan, Pemecah Masalah yang Kreatif',
    }),
    shortDescription: L({
      ko: "당신을 가장 잘 표현하는 단어는 '아무도 생각 못 한 방법을 찾는다'입니다.",
      en: "The phrase that best describes you is 'Finds ways no one else thought of.'",
      ja: 'あなたを最もよく表す言葉は「誰も思いつかなかった方法を見つける」です。',
      'zh-CN': '最能形容你的一句话是「找到别人都想不到的方法」。',
      'zh-TW': '最能形容你的一句話是「找到別人都想不到的方法」。',
      vi: 'Câu nói mô tả bạn chính xác nhất là "Tìm ra cách mà không ai nghĩ tới."',
      id: 'Kata yang paling menggambarkan dirimu adalah "menemukan cara yang tidak terpikirkan orang lain."',
    }),
    description: L({
      ko: '기존 방식에 의문을 품고 새로운 관점으로 문제에 접근하는 사람입니다. 막힌 상황에서 돌파구를 찾는 역할을 자연스럽게 맡고 아이디어가 풍부합니다. 조직에 신선한 자극을 주는 사람입니다.',
      en: "You question existing methods and approach problems from new perspectives. You naturally take on the role of finding breakthroughs in stuck situations, and you're full of ideas. You are someone who gives fresh stimulation to an organization.",
      ja: '既存の方法に疑問を持ち、新しい視点で問題にアプローチする人です。行き詰まった状況で突破口を見つける役割を自然に担い、アイデアが豊富です。組織に新鮮な刺激を与える人です。',
      'zh-CN': '你会对既有方式提出疑问，用新的视角切入问题。在陷入僵局的情况下，你会自然地承担寻找突破口的角色，点子也很丰富。你是能为组织带来新鲜刺激的人。',
      'zh-TW': '你會對既有方式提出疑問，用新的視角切入問題。在陷入僵局的情況下，你會自然地承擔尋找突破口的角色，點子也很豐富。你是能為組織帶來新鮮刺激的人。',
      vi: 'Bạn là người luôn đặt câu hỏi với những cách làm hiện có và tiếp cận vấn đề bằng góc nhìn mới. Bạn tự nhiên đảm nhận vai trò tìm ra lối thoát trong tình huống bế tắc và có nhiều ý tưởng. Bạn là người mang lại sự kích thích mới mẻ cho tổ chức.',
      id: 'Kamu adalah orang yang mempertanyakan cara-cara lama dan mendekati masalah dari perspektif baru. Kamu secara alami mengambil peran mencari jalan keluar saat situasi mentok, dan penuh ide. Kamu adalah orang yang memberikan stimulasi segar bagi organisasi.',
    }),
    keywords: L({
      ko: '창의성 · 혁신 · 문제해결력',
      en: 'Creativity · Innovation · Problem-solving',
      ja: '創造性・イノベーション・問題解決力',
      'zh-CN': '创意·创新·问题解决能力',
      'zh-TW': '創意·創新·問題解決能力',
      vi: 'Sáng tạo · Đổi mới · Khả năng giải quyết vấn đề',
      id: 'Kreativitas · Inovasi · Kemampuan Memecahkan Masalah',
    }),
    englishKeywords: L({
      ko: 'Creativity · Innovation · Problem-solving',
      en: 'Creativity · Innovation · Problem-solving',
      ja: 'Creativity · Innovation · Problem-solving',
      'zh-CN': 'Creativity · Innovation · Problem-solving',
      'zh-TW': 'Creativity · Innovation · Problem-solving',
      vi: 'Creativity · Innovation · Problem-solving',
      id: 'Creativity · Innovation · Problem-solving',
    }),
    sections: [
      section(SECTION_TITLE_JOB, {
        ko: '마케팅·디자인·콘텐츠·제품기획·R&D·스타트업',
        en: 'Marketing · Design · Content · Product Planning · R&D · Startups',
        ja: 'マーケティング・デザイン・コンテンツ・製品企画・R&D・スタートアップ',
        'zh-CN': '市场营销·设计·内容·产品企划·研发·创业公司',
        'zh-TW': '市場行銷·設計·內容·產品企劃·研發·新創公司',
        vi: 'Marketing · Thiết kế · Nội dung · Hoạch định sản phẩm · R&D · Startup',
        id: 'Marketing · Desain · Konten · Perencanaan Produk · R&D · Startup',
      }),
      section(SECTION_TITLE_HEADLINE, {
        ko: '창의적 문제 해결로 새로운 가능성을 여는 [직무] 전문가',
        en: '[Role] expert who opens new possibilities through creative problem-solving',
        ja: '創造的な問題解決で新しい可能性を開く[職種]専門家',
        'zh-CN': '以创意问题解决开启新可能性的[职位]专家',
        'zh-TW': '以創意問題解決開啟新可能性的[職位]專家',
        vi: 'Chuyên gia [vị trí] mở ra khả năng mới bằng cách giải quyết vấn đề sáng tạo',
        id: 'Ahli [posisi] yang membuka kemungkinan baru melalui pemecahan masalah kreatif',
      }),
      section(SECTION_TITLE_RESUME, {
        ko: '기존 방식에 의문을 품고 혁신적인 접근으로 결과를 만드는 [직무]입니다',
        en: "I'm a [Role] who questions existing methods and creates results through innovative approaches",
        ja: '既存の方法に疑問を持ち、革新的なアプローチで結果を出す[職種]です',
        'zh-CN': '我是一名对既有方式提出疑问、以创新方式创造成果的[职位]',
        'zh-TW': '我是一名對既有方式提出疑問、以創新方式創造成果的[職位]',
        vi: 'Tôi là [vị trí] luôn đặt câu hỏi với cách làm hiện có và tạo ra kết quả bằng phương pháp đổi mới',
        id: 'Saya adalah [posisi] yang mempertanyakan cara lama dan menghasilkan hasil melalui pendekatan inovatif',
      }),
      section(SECTION_TITLE_STRENGTH, {
        ko: 'AI 시대에 가장 차별화되는 인간 고유 역량 포지셔닝',
        en: 'Positioning as the uniquely human ability most differentiated in the AI era',
        ja: 'AI時代に最も差別化される人間固有の能力のポジショニング',
        'zh-CN': 'AI时代最具差异化的人类特有能力定位',
        'zh-TW': 'AI時代最具差異化的人類特有能力定位',
        vi: 'Định vị là năng lực đặc trưng của con người khác biệt nhất trong thời đại AI',
        id: 'Positioning sebagai kemampuan unik manusia yang paling membedakan di era AI',
      }),
      section(SECTION_TITLE_BOOST, {
        ko: '"기존 방식 대신 이렇게 했더니 결과가 달라졌다"는 구체적 사례 필수',
        en: 'A specific case of "I did it this way instead of the usual method, and the result changed" is essential',
        ja: '「既存の方法の代わりにこうしたら結果が変わった」という具体的な事例が必須',
        'zh-CN': '「用这种方法代替原来的方式后，结果不一样了」这样的具体案例是必需的',
        'zh-TW': '「用這種方法代替原來的方式後，結果不一樣了」這樣的具體案例是必需的',
        vi: 'Cần có ví dụ cụ thể kiểu "tôi đã làm thế này thay vì cách cũ và kết quả đã thay đổi"',
        id: 'Contoh konkret seperti "aku melakukan ini alih-alih cara biasa, dan hasilnya berubah" sangat diperlukan',
      }),
    ],
    shareMessage: L({
      ko: '내 퍼스널 브랜딩 키워드: #창의성 #혁신 #문제해결력 💡 틀을 깨는 유형이래... AI 시대에 제일 필요한 키워드라는 거 ㅋㅋ → 너는 어떤 키워드 나왔어?',
      en: "My personal branding keywords: #Creativity #Innovation #ProblemSolving 💡 Apparently I'm the mold-breaker type... they say it's the most needed keyword in the AI era lol → What keywords did you get?",
      ja: '私のパーソナルブランディングキーワード：#創造性 #イノベーション #問題解決力 💡 型を破るタイプらしい…AI時代に一番必要なキーワードだって（笑）→ あなたはどんなキーワードが出た？',
      'zh-CN': '我的个人品牌关键词：#创意 #创新 #问题解决能力 💡 据说是打破常规的类型…说是AI时代最需要的关键词哈哈 → 你测出了什么关键词？',
      'zh-TW': '我的個人品牌關鍵詞：#創意 #創新 #問題解決能力 💡 據說是打破常規的類型…說是AI時代最需要的關鍵詞哈哈 → 你測出了什麼關鍵詞？',
      vi: 'Từ khóa thương hiệu cá nhân của tôi: #SángTạo #ĐổiMới #KhảNăngGiảiQuyếtVấnĐề 💡 Nghe nói là kiểu phá vỡ khuôn mẫu... nghe nói đây là từ khóa cần nhất trong thời đại AI ha ha → Bạn ra từ khóa gì?',
      id: 'Kata kunci personal branding-ku: #Kreativitas #Inovasi #KemampuanMemecahkanMasalah 💡 Katanya aku tipe pendobrak batasan... katanya ini kata kunci paling dibutuhkan di era AI wkwk → Kata kunci apa yang kamu dapat?',
    }),
  },
  {
    type: 'Type4',
    emoji: '📊',
    title: L({
      ko: '복잡함을 단순하게 만드는 사람, 전략적 혁신가',
      en: 'The One Who Simplifies Complexity, Strategic Innovator',
      ja: '複雑さをシンプルにする人、戦略的イノベーター',
      'zh-CN': '把复杂变简单的人，战略型革新者',
      'zh-TW': '把複雜變簡單的人，戰略型革新者',
      vi: 'Người đơn giản hóa sự phức tạp, Nhà cải tiến chiến lược',
      id: 'Sang Penyederhana Kompleksitas, Inovator Strategis',
    }),
    shortDescription: L({
      ko: "당신을 가장 잘 표현하는 단어는 '복잡한 것을 단순하게 만들고 실행한다'입니다.",
      en: "The phrase that best describes you is 'Simplifies complexity and gets it done.'",
      ja: 'あなたを最もよく表す言葉は「複雑なことをシンプルにして実行する」です。',
      'zh-CN': '最能形容你的一句话是「把复杂的事变简单再执行」。',
      'zh-TW': '最能形容你的一句話是「把複雜的事變簡單再執行」。',
      vi: 'Câu nói mô tả bạn chính xác nhất là "Đơn giản hóa việc phức tạp rồi thực thi."',
      id: 'Kata yang paling menggambarkan dirimu adalah "menyederhanakan hal yang rumit lalu mengeksekusinya."',
    }),
    description: L({
      ko: '상황을 빠르게 파악하고 핵심을 구조화해서 방향을 제시하는 사람입니다. 데이터와 맥락을 종합해서 판단하고 그것을 실행으로 연결하는 역량이 있습니다. 조직에서 나침반 역할을 하는 사람입니다.',
      en: 'You grasp situations quickly, structure the core essentials, and present direction. You have the ability to synthesize data and context to make judgments and connect them to execution. You are the compass of the organization.',
      ja: '状況を素早く把握し、核心を構造化して方向性を示す人です。データと文脈を総合して判断し、それを実行につなげる能力があります。組織で羅針盤の役割をする人です。',
      'zh-CN': '你能迅速把握情况，将核心结构化并提出方向。你有综合数据与背景做出判断，并将其转化为执行的能力。你是组织中扮演指南针角色的人。',
      'zh-TW': '你能迅速把握情況，將核心結構化並提出方向。你有綜合數據與背景做出判斷，並將其轉化為執行的能力。你是組織中扮演指南針角色的人。',
      vi: 'Bạn là người nhanh chóng nắm bắt tình huống, cấu trúc hóa cốt lõi và đưa ra hướng đi. Bạn có khả năng tổng hợp dữ liệu và bối cảnh để đưa ra quyết định và kết nối nó với việc thực thi. Bạn là người đóng vai trò kim chỉ nam trong tổ chức.',
      id: 'Kamu adalah orang yang cepat memahami situasi, menyusun inti masalah, dan menunjukkan arah. Kamu punya kemampuan menyatukan data dan konteks untuk membuat keputusan dan menghubungkannya dengan eksekusi. Kamu adalah kompas bagi organisasi.',
    }),
    keywords: L({
      ko: '전략적 사고 · 분석력 · 실행력',
      en: 'Strategic Thinking · Analytical · Execution',
      ja: '戦略的思考・分析力・実行力',
      'zh-CN': '战略思维·分析力·执行力',
      'zh-TW': '戰略思維·分析力·執行力',
      vi: 'Tư duy chiến lược · Khả năng phân tích · Khả năng thực thi',
      id: 'Pemikiran Strategis · Kemampuan Analitis · Kemampuan Eksekusi',
    }),
    englishKeywords: L({
      ko: 'Strategic Thinking · Analytical · Execution',
      en: 'Strategic Thinking · Analytical · Execution',
      ja: 'Strategic Thinking · Analytical · Execution',
      'zh-CN': 'Strategic Thinking · Analytical · Execution',
      'zh-TW': 'Strategic Thinking · Analytical · Execution',
      vi: 'Strategic Thinking · Analytical · Execution',
      id: 'Strategic Thinking · Analytical · Execution',
    }),
    sections: [
      section(SECTION_TITLE_JOB, {
        ko: '전략기획·컨설팅·데이터·비즈니스 개발·운영 최적화',
        en: 'Strategic Planning · Consulting · Data · Business Development · Operations Optimization',
        ja: '戦略企画・コンサルティング・データ・ビジネス開発・運営最適化',
        'zh-CN': '战略企划·咨询·数据·业务开发·运营优化',
        'zh-TW': '戰略企劃·顧問·數據·業務開發·營運優化',
        vi: 'Hoạch định chiến lược · Tư vấn · Dữ liệu · Phát triển kinh doanh · Tối ưu vận hành',
        id: 'Perencanaan Strategis · Konsultasi · Data · Pengembangan Bisnis · Optimasi Operasional',
      }),
      section(SECTION_TITLE_HEADLINE, {
        ko: '전략적 분석과 실행력으로 비즈니스 성과를 만드는 [직무] 전문가',
        en: '[Role] expert who creates business results through strategic analysis and execution',
        ja: '戦略的分析と実行力でビジネス成果を出す[職種]専門家',
        'zh-CN': '以战略分析与执行力创造商业成果的[职位]专家',
        'zh-TW': '以戰略分析與執行力創造商業成果的[職位]專家',
        vi: 'Chuyên gia [vị trí] tạo ra thành tích kinh doanh bằng phân tích chiến lược và khả năng thực thi',
        id: 'Ahli [posisi] yang menciptakan hasil bisnis melalui analisis strategis dan eksekusi',
      }),
      section(SECTION_TITLE_RESUME, {
        ko: '복잡한 문제를 구조화하고 전략적 실행으로 성과를 이끄는 [직무]입니다',
        en: "I'm a [Role] who structures complex problems and drives results through strategic execution",
        ja: '複雑な問題を構造化し、戦略的実行で成果を導く[職種]です',
        'zh-CN': '我是一名将复杂问题结构化、以战略执行带来成果的[职位]',
        'zh-TW': '我是一名將複雜問題結構化、以戰略執行帶來成果的[職位]',
        vi: 'Tôi là [vị trí] cấu trúc hóa các vấn đề phức tạp và dẫn dắt thành tích thông qua thực thi chiến lược',
        id: 'Saya adalah [posisi] yang menyusun masalah kompleks dan menghasilkan kinerja melalui eksekusi strategis',
      }),
      section(SECTION_TITLE_STRENGTH, {
        ko: '시니어·리더십 포지션으로 성장하기 가장 유리한 키워드 조합',
        en: 'The keyword combination most favorable for growing into senior or leadership positions',
        ja: 'シニア・リーダーシップポジションへ成長するのに最も有利なキーワードの組み合わせ',
        'zh-CN': '最有利于成长为高级或领导岗位的关键词组合',
        'zh-TW': '最有利於成長為高階或領導職位的關鍵詞組合',
        vi: 'Tổ hợp từ khóa thuận lợi nhất để phát triển lên vị trí cấp cao và lãnh đạo',
        id: 'Kombinasi kata kunci yang paling menguntungkan untuk berkembang ke posisi senior atau kepemimpinan',
      }),
      section(SECTION_TITLE_BOOST, {
        ko: '전략 수립→실행→성과 수치로 이어지는 스토리라인 구성하기',
        en: 'Build a storyline that flows from strategy formulation → execution → performance metrics',
        ja: '戦略立案→実行→成果数値へとつながるストーリーラインを構成する',
        'zh-CN': '构建从战略制定→执行→成果数据一脉相承的故事线',
        'zh-TW': '構建從戰略制定→執行→成果數據一脈相承的故事線',
        vi: 'Xây dựng câu chuyện nối liền từ hoạch định chiến lược → thực thi → số liệu thành tích',
        id: 'Menyusun alur cerita dari penyusunan strategi → eksekusi → angka hasil kinerja',
      }),
    ],
    shareMessage: L({
      ko: '내 퍼스널 브랜딩 키워드: #전략적사고 #분석력 #실행력 📊 복잡한 걸 단순하게 만드는 유형이래... 이력서 자기소개에 바로 씀 → 너는 어떤 키워드 나왔어?',
      en: "My personal branding keywords: #StrategicThinking #Analytical #Execution 📊 Apparently I'm the type who simplifies complexity... putting this straight into my resume intro → What keywords did you get?",
      ja: '私のパーソナルブランディングキーワード：#戦略的思考 #分析力 #実行力 📊 複雑なことをシンプルにするタイプらしい…履歴書の自己紹介にそのまま使う → あなたはどんなキーワードが出た？',
      'zh-CN': '我的个人品牌关键词：#战略思维 #分析力 #执行力 📊 据说是把复杂变简单的类型…直接写进履历自我介绍了 → 你测出了什么关键词？',
      'zh-TW': '我的個人品牌關鍵詞：#戰略思維 #分析力 #執行力 📊 據說是把複雜變簡單的類型…直接寫進履歷自我介紹了 → 你測出了什麼關鍵詞？',
      vi: 'Từ khóa thương hiệu cá nhân của tôi: #TưDuyChiếnLược #KhảNăngPhânTích #KhảNăngThựcThi 📊 Nghe nói là kiểu đơn giản hóa sự phức tạp... cho luôn vào phần giới thiệu CV → Bạn ra từ khóa gì?',
      id: 'Kata kunci personal branding-ku: #PemikiranStrategis #KemampuanAnalitis #KemampuanEksekusi 📊 Katanya aku tipe penyederhana kompleksitas... langsung dipakai di perkenalan CV → Kata kunci apa yang kamu dapat?',
    }),
  },
  {
    type: 'Type5',
    emoji: '🌐',
    title: L({
      ko: '사람과 아이디어를 연결하는 사람, 영향력 있는 연결자',
      en: 'The Connector of People and Ideas, Influential Networker',
      ja: '人とアイデアをつなぐ人、影響力のあるコネクター',
      'zh-CN': '连接人与创意的人，具影响力的连接者',
      'zh-TW': '連接人與創意的人，具影響力的連結者',
      vi: 'Người kết nối con người và ý tưởng, Người kết nối có tầm ảnh hưởng',
      id: 'Sang Penghubung Orang dan Ide, Konektor yang Berpengaruh',
    }),
    shortDescription: L({
      ko: "당신을 가장 잘 표현하는 단어는 '사람과 기회를 연결해서 큰 그림을 만든다'입니다.",
      en: "The phrase that best describes you is 'Connects people and opportunities to create the big picture.'",
      ja: 'あなたを最もよく表す言葉は「人と機会をつないで大きな絵を描く」です。',
      'zh-CN': '最能形容你的一句话是「连接人与机会，绘出大格局」。',
      'zh-TW': '最能形容你的一句話是「連接人與機會，繪出大格局」。',
      vi: 'Câu nói mô tả bạn chính xác nhất là "Kết nối con người và cơ hội để tạo nên bức tranh lớn."',
      id: 'Kata yang paling menggambarkan dirimu adalah "menghubungkan orang dan peluang untuk menciptakan gambaran besar."',
    }),
    description: L({
      ko: '다양한 분야의 사람들과 네트워크를 구축하고 그 연결을 통해 새로운 기회를 만들어내는 사람입니다. 팀을 이끌거나 다양한 이해관계자에게 영향력을 행사하는 역할을 자연스럽게 합니다.',
      en: 'You build networks with people from various fields and create new opportunities through those connections. You naturally take on the role of leading teams or exercising influence over diverse stakeholders.',
      ja: '様々な分野の人々とネットワークを構築し、そのつながりを通じて新しい機会を作り出す人です。チームを率いたり、様々な関係者に影響力を行使する役割を自然に行います。',
      'zh-CN': '你会与各领域的人构建人际网络，并通过这些连接创造新机会。你会自然地承担带领团队或对多方利益相关者发挥影响力的角色。',
      'zh-TW': '你會與各領域的人構建人際網絡，並透過這些連結創造新機會。你會自然地承擔帶領團隊或對多方利益相關者發揮影響力的角色。',
      vi: 'Bạn là người xây dựng mạng lưới quan hệ với những người ở nhiều lĩnh vực khác nhau và tạo ra cơ hội mới thông qua các kết nối đó. Bạn tự nhiên đảm nhận vai trò dẫn dắt nhóm hoặc gây ảnh hưởng đến nhiều bên liên quan khác nhau.',
      id: 'Kamu adalah orang yang membangun jaringan dengan orang-orang dari berbagai bidang dan menciptakan peluang baru melalui koneksi tersebut. Kamu secara alami mengambil peran memimpin tim atau memberi pengaruh kepada berbagai pemangku kepentingan.',
    }),
    keywords: L({
      ko: '네트워킹 · 리더십 · 영향력',
      en: 'Networking · Leadership · Influence',
      ja: 'ネットワーキング・リーダーシップ・影響力',
      'zh-CN': '人际网络·领导力·影响力',
      'zh-TW': '人際網絡·領導力·影響力',
      vi: 'Kết nối mạng lưới · Khả năng lãnh đạo · Tầm ảnh hưởng',
      id: 'Jejaring · Kepemimpinan · Pengaruh',
    }),
    englishKeywords: L({
      ko: 'Networking · Leadership · Influence',
      en: 'Networking · Leadership · Influence',
      ja: 'Networking · Leadership · Influence',
      'zh-CN': 'Networking · Leadership · Influence',
      'zh-TW': 'Networking · Leadership · Influence',
      vi: 'Networking · Leadership · Influence',
      id: 'Networking · Leadership · Influence',
    }),
    sections: [
      section(SECTION_TITLE_JOB, {
        ko: '비즈니스 개발·파트너십·세일즈·팀장급 이상·커뮤니티 매니저',
        en: 'Business Development · Partnerships · Sales · Team Lead and Above · Community Manager',
        ja: 'ビジネス開発・パートナーシップ・セールス・チームリーダー以上・コミュニティマネージャー',
        'zh-CN': '业务开发·合作伙伴关系·销售·组长级以上·社区经理',
        'zh-TW': '業務開發·合作夥伴關係·銷售·組長級以上·社群經理',
        vi: 'Phát triển kinh doanh · Đối tác · Kinh doanh/Bán hàng · Từ cấp trưởng nhóm trở lên · Quản lý cộng đồng',
        id: 'Pengembangan Bisnis · Kemitraan · Sales · Setingkat Team Leader ke Atas · Community Manager',
      }),
      section(SECTION_TITLE_HEADLINE, {
        ko: '네트워킹과 리더십으로 비즈니스 기회를 만드는 [직무] 전문가',
        en: '[Role] expert who creates business opportunities through networking and leadership',
        ja: 'ネットワーキングとリーダーシップでビジネスチャンスを作る[職種]専門家',
        'zh-CN': '以人际网络与领导力创造商机的[职位]专家',
        'zh-TW': '以人際網絡與領導力創造商機的[職位]專家',
        vi: 'Chuyên gia [vị trí] tạo ra cơ hội kinh doanh bằng kết nối mạng lưới và khả năng lãnh đạo',
        id: 'Ahli [posisi] yang menciptakan peluang bisnis melalui jejaring dan kepemimpinan',
      }),
      section(SECTION_TITLE_RESUME, {
        ko: '다양한 이해관계자를 연결하고 영향력으로 성과를 이끄는 [직무]입니다',
        en: "I'm a [Role] who connects diverse stakeholders and drives results through influence",
        ja: '様々な関係者をつなぎ、影響力で成果を導く[職種]です',
        'zh-CN': '我是一名连接多方利益相关者、并以影响力带来成果的[职位]',
        'zh-TW': '我是一名連結多方利益相關者、並以影響力帶來成果的[職位]',
        vi: 'Tôi là [vị trí] kết nối nhiều bên liên quan khác nhau và dẫn dắt thành tích bằng tầm ảnh hưởng',
        id: 'Saya adalah [posisi] yang menghubungkan berbagai pemangku kepentingan dan menghasilkan kinerja melalui pengaruh',
      }),
      section(SECTION_TITLE_STRENGTH, {
        ko: '중간 관리자·비즈니스 개발 포지션에서 가장 강력한 키워드 조합',
        en: 'The most powerful keyword combination for middle management and business development positions',
        ja: '中間管理者・ビジネス開発ポジションで最も強力なキーワードの組み合わせ',
        'zh-CN': '在中层管理者、业务开发岗位中最具威力的关键词组合',
        'zh-TW': '在中層管理者、業務開發職位中最具威力的關鍵詞組合',
        vi: 'Tổ hợp từ khóa mạnh nhất cho vị trí quản lý cấp trung và phát triển kinh doanh',
        id: 'Kombinasi kata kunci paling kuat untuk posisi manajer menengah dan pengembangan bisnis',
      }),
      section(SECTION_TITLE_BOOST, {
        ko: '연결해서 만들어낸 비즈니스 성과·파트너십 사례를 수치로 표현하기',
        en: 'Express business results and partnership cases created through connections in numbers',
        ja: 'つないで作り出したビジネス成果・パートナーシップ事例を数値で表現する',
        'zh-CN': '用数字表达通过连接创造出的商业成果与合作案例',
        'zh-TW': '用數字表達透過連結創造出的商業成果與合作案例',
        vi: 'Thể hiện thành tích kinh doanh, các trường hợp hợp tác được tạo ra từ việc kết nối bằng số liệu cụ thể',
        id: 'Menyatakan hasil bisnis dan contoh kemitraan yang tercipta dari koneksi dalam bentuk angka',
      }),
    ],
    shareMessage: L({
      ko: '내 퍼스널 브랜딩 키워드: #네트워킹 #리더십 #영향력 🌐 사람과 기회를 연결하는 유형이래... 링크드인 헤드라인 업데이트 완료 → 너는 어떤 키워드 나왔어?',
      en: "My personal branding keywords: #Networking #Leadership #Influence 🌐 Apparently I'm the type who connects people and opportunities... LinkedIn headline updated → What keywords did you get?",
      ja: '私のパーソナルブランディングキーワード：#ネットワーキング #リーダーシップ #影響力 🌐 人と機会をつなぐタイプらしい…リンクトインヘッドライン更新完了 → あなたはどんなキーワードが出た？',
      'zh-CN': '我的个人品牌关键词：#人际网络 #领导力 #影响力 🌐 据说是连接人与机会的类型…LinkedIn标题已更新完成 → 你测出了什么关键词？',
      'zh-TW': '我的個人品牌關鍵詞：#人際網絡 #領導力 #影響力 🌐 據說是連結人與機會的類型…LinkedIn標題已更新完成 → 你測出了什麼關鍵詞？',
      vi: 'Từ khóa thương hiệu cá nhân của tôi: #KếtNốiMạngLưới #KhảNăngLãnhĐạo #TầmẢnhHưởng 🌐 Nghe nói là kiểu kết nối người và cơ hội... cập nhật tiêu đề LinkedIn xong rồi → Bạn ra từ khóa gì?',
      id: 'Kata kunci personal branding-ku: #Jejaring #Kepemimpinan #Pengaruh 🌐 Katanya aku tipe penghubung orang dan peluang... headline LinkedIn sudah diupdate → Kata kunci apa yang kamu dapat?',
    }),
  },
  {
    type: 'Type6',
    emoji: '🚀',
    title: L({
      ko: '방향을 제시하는 사람, 비전 있는 리더',
      en: 'The Direction-Setter, Visionary Leader',
      ja: '方向を示す人、ビジョンあるリーダー',
      'zh-CN': '指引方向的人，有远见的领导者',
      'zh-TW': '指引方向的人，有遠見的領導者',
      vi: 'Người chỉ ra phương hướng, Nhà lãnh đạo có tầm nhìn',
      id: 'Sang Penentu Arah, Pemimpin yang Visioner',
    }),
    shortDescription: L({
      ko: "당신을 가장 잘 표현하는 단어는 '방향을 정하고 팀을 이끌어 결과를 만든다'입니다.",
      en: "The phrase that best describes you is 'Sets the direction and leads the team to results.'",
      ja: 'あなたを最もよく表す言葉は「方向を決めてチームを率いて結果を作る」です。',
      'zh-CN': '最能形容你的一句话是「定方向、带团队、出成果」。',
      'zh-TW': '最能形容你的一句話是「定方向、帶團隊、出成果」。',
      vi: 'Câu nói mô tả bạn chính xác nhất là "Xác định phương hướng và dẫn dắt nhóm tạo ra kết quả."',
      id: 'Kata yang paling menggambarkan dirimu adalah "menentukan arah dan memimpin tim untuk menghasilkan hasil."',
    }),
    description: L({
      ko: '큰 그림을 보고 방향을 제시하며 팀을 이끌어 실질적인 성과를 만들어내는 사람입니다. 복잡한 상황에서도 목표를 잃지 않고 조직 전체에 에너지를 불어넣는 리더십이 있습니다.',
      en: 'You see the big picture, set direction, and lead teams to create tangible results. Even in complex situations, you never lose sight of the goal and have the leadership to energize the whole organization.',
      ja: '大きな絵を見て方向性を示し、チームを率いて実質的な成果を生み出す人です。複雑な状況でも目標を失わず、組織全体にエネルギーを吹き込むリーダーシップがあります。',
      'zh-CN': '你能看清全局、指出方向，带领团队创造实质性的成果。即便在复杂情况下也不会迷失目标，拥有为整个组织注入能量的领导力。',
      'zh-TW': '你能看清全局、指出方向，帶領團隊創造實質性的成果。即便在複雜情況下也不會迷失目標，擁有為整個組織注入能量的領導力。',
      vi: 'Bạn là người nhìn thấy bức tranh lớn, chỉ ra phương hướng và dẫn dắt nhóm tạo ra kết quả thực chất. Ngay cả trong những tình huống phức tạp, bạn không đánh mất mục tiêu và có khả năng lãnh đạo truyền năng lượng cho toàn bộ tổ chức.',
      id: 'Kamu adalah orang yang melihat gambaran besar, menunjukkan arah, dan memimpin tim untuk menciptakan hasil nyata. Bahkan dalam situasi kompleks, kamu tidak kehilangan tujuan dan memiliki kepemimpinan yang mengalirkan energi ke seluruh organisasi.',
    }),
    keywords: L({
      ko: '비전 · 추진력 · 성과 지향',
      en: 'Vision · Drive · Results-oriented',
      ja: 'ビジョン・推進力・成果志向',
      'zh-CN': '愿景·推动力·成果导向',
      'zh-TW': '願景·推動力·成果導向',
      vi: 'Tầm nhìn · Động lực thúc đẩy · Định hướng kết quả',
      id: 'Visi · Daya Dorong · Berorientasi Hasil',
    }),
    englishKeywords: L({
      ko: 'Visionary · Drive · Results-oriented',
      en: 'Visionary · Drive · Results-oriented',
      ja: 'Visionary · Drive · Results-oriented',
      'zh-CN': 'Visionary · Drive · Results-oriented',
      'zh-TW': 'Visionary · Drive · Results-oriented',
      vi: 'Visionary · Drive · Results-oriented',
      id: 'Visionary · Drive · Results-oriented',
    }),
    sections: [
      section(SECTION_TITLE_JOB, {
        ko: '경영진·팀장·사업부장·창업가·전략 리더십 포지션',
        en: 'Executives · Team Leads · Division Heads · Founders · Strategic Leadership Positions',
        ja: '経営陣・チームリーダー・事業部長・創業者・戦略リーダーシップポジション',
        'zh-CN': '经营层·组长·事业部长·创业者·战略领导岗位',
        'zh-TW': '經營層·組長·事業部長·創業者·戰略領導職位',
        vi: 'Ban điều hành · Trưởng nhóm · Trưởng bộ phận kinh doanh · Người sáng lập · Vị trí lãnh đạo chiến lược',
        id: 'Manajemen Eksekutif · Team Leader · Kepala Divisi · Founder · Posisi Kepemimpinan Strategis',
      }),
      section(SECTION_TITLE_HEADLINE, {
        ko: '비전과 추진력으로 팀과 조직의 성장을 이끄는 [직무] 리더',
        en: '[Role] leader who drives team and organizational growth through vision and drive',
        ja: 'ビジョンと推進力でチームと組織の成長を導く[職種]リーダー',
        'zh-CN': '以愿景与推动力带领团队与组织成长的[职位]领导者',
        'zh-TW': '以願景與推動力帶領團隊與組織成長的[職位]領導者',
        vi: 'Nhà lãnh đạo [vị trí] dẫn dắt sự phát triển của nhóm và tổ chức bằng tầm nhìn và động lực thúc đẩy',
        id: 'Pemimpin [posisi] yang menggerakkan pertumbuhan tim dan organisasi melalui visi dan daya dorong',
      }),
      section(SECTION_TITLE_RESUME, {
        ko: '명확한 방향성과 강한 추진력으로 팀과 함께 성과를 만드는 [직무]입니다',
        en: "I'm a [Role] who creates results together with the team through clear direction and strong drive",
        ja: '明確な方向性と強い推進力でチームと共に成果を作る[職種]です',
        'zh-CN': '我是一名以明确方向与强大推动力带领团队共同创造成果的[职位]',
        'zh-TW': '我是一名以明確方向與強大推動力帶領團隊共同創造成果的[職位]',
        vi: 'Tôi là [vị trí] tạo ra thành tích cùng nhóm bằng phương hướng rõ ràng và động lực thúc đẩy mạnh mẽ',
        id: 'Saya adalah [posisi] yang menghasilkan kinerja bersama tim melalui arah yang jelas dan daya dorong yang kuat',
      }),
      section(SECTION_TITLE_STRENGTH, {
        ko: 'C레벨·시니어 리더십 포지션에서 가장 강력한 퍼스널 브랜딩 키워드',
        en: 'The most powerful personal branding keywords for C-level and senior leadership positions',
        ja: 'Cレベル・シニアリーダーシップポジションで最も強力なパーソナルブランディングキーワード',
        'zh-CN': '在C级、高级领导岗位中最具威力的个人品牌关键词',
        'zh-TW': '在C級、高階領導職位中最具威力的個人品牌關鍵詞',
        vi: 'Từ khóa thương hiệu cá nhân mạnh nhất cho vị trí cấp C và lãnh đạo cấp cao',
        id: 'Kata kunci personal branding paling kuat untuk posisi C-level dan kepemimpinan senior',
      }),
      section(SECTION_TITLE_BOOST, {
        ko: '이끈 팀의 성과·조직 변화·매출·성장률 등 결과 수치로 뒷받침하기',
        en: 'Back it up with result metrics like team performance you led, organizational change, revenue, and growth rate',
        ja: '率いたチームの成果・組織の変化・売上・成長率などの結果数値で裏付ける',
        'zh-CN': '用带领团队的成果、组织变革、营收、增长率等数据来支撑',
        'zh-TW': '用帶領團隊的成果、組織變革、營收、成長率等數據來支撐',
        vi: 'Củng cố bằng các số liệu kết quả như thành tích của nhóm đã dẫn dắt, thay đổi tổ chức, doanh thu, tỷ lệ tăng trưởng, v.v.',
        id: 'Dukung dengan angka hasil seperti kinerja tim yang dipimpin, perubahan organisasi, omzet, tingkat pertumbuhan, dan lainnya',
      }),
    ],
    shareMessage: L({
      ko: '내 퍼스널 브랜딩 키워드: #비전 #추진력 #성과지향 🚀 방향 제시하고 이끄는 리더 유형이래... 이거 이력서에 쓰면 딱 좋겠다 → 너는 어떤 키워드 나왔어?',
      en: "My personal branding keywords: #Vision #Drive #ResultsOriented 🚀 Apparently I'm the leader type who sets direction and leads... this would be perfect for my resume → What keywords did you get?",
      ja: '私のパーソナルブランディングキーワード：#ビジョン #推進力 #成果志向 🚀 方向を示して率いるリーダータイプらしい…これ履歴書に使ったらぴったりそう → あなたはどんなキーワードが出た？',
      'zh-CN': '我的个人品牌关键词：#愿景 #推动力 #成果导向 🚀 据说是指方向、带团队的领导类型…这个用在履历上正合适 → 你测出了什么关键词？',
      'zh-TW': '我的個人品牌關鍵詞：#願景 #推動力 #成果導向 🚀 據說是指方向、帶團隊的領導類型…這個用在履歷上正合適 → 你測出了什麼關鍵詞？',
      vi: 'Từ khóa thương hiệu cá nhân của tôi: #TầmNhìn #ĐộngLựcThúcĐẩy #ĐịnhHướngKếtQuả 🚀 Nghe nói là kiểu lãnh đạo chỉ hướng và dẫn dắt... cái này viết vào CV thì hợp lý quá → Bạn ra từ khóa gì?',
      id: 'Kata kunci personal branding-ku: #Visi #DayaDorong #BerorientasiHasil 🚀 Katanya aku tipe pemimpin yang menentukan arah dan memimpin... ini pas banget dipakai di CV → Kata kunci apa yang kamu dapat?',
    }),
  },
];
