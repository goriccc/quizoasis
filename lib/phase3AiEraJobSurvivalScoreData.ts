/** AI 시대, 내 직업 생존 점수 — 12문항 4지선다, A=0 B=1 C=2 D=3, 총점 0~36 → Type1~6 */

type Locale = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';
type ML = Record<Locale, string>;

function L(m: ML): Record<string, string> {
  return m;
}

function opt(m: ML, score: number): { text: Record<string, string>; score: number } {
  return { text: L(m), score };
}

function section(titleM: ML, contentM: ML): Phase3AiEraJobSurvivalScoreResultSection {
  return { title: L(titleM), content: L(contentM) };
}

export interface Phase3AiEraJobSurvivalScoreQuestion {
  id: number;
  question: Record<string, string>;
  options: { text: Record<string, string>; score: number }[];
}

export interface Phase3AiEraJobSurvivalScoreResultSection {
  title: Record<string, string>;
  content: Record<string, string>;
}

export interface Phase3AiEraJobSurvivalScoreResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  survivalScore: Record<string, string>;
  aiRiskLevel: Record<string, string>;
  sections: Phase3AiEraJobSurvivalScoreResultSection[];
  shareMessage: Record<string, string>;
}

export function calculatePhase3AiEraJobSurvivalScoreResult(answers: number[]): string {
  const total = answers.reduce((sum, s) => sum + (s ?? 0), 0);
  if (total <= 5) return 'Type1';
  if (total <= 11) return 'Type2';
  if (total <= 19) return 'Type3';
  if (total <= 27) return 'Type4';
  if (total <= 33) return 'Type5';
  return 'Type6';
}

export const phase3AiEraJobSurvivalScoreQuestions: Phase3AiEraJobSurvivalScoreQuestion[] = [
  {
    id: 1,
    question: L({
      ko: '내 업무에서 반복적으로 하는 작업의 비중은?',
      en: 'What proportion of your work involves repetitive tasks?',
      ja: '自分の業務で繰り返し行う作業の割合は?',
      'zh-CN': '你的工作中重复性任务占多大比例？',
      'zh-TW': '你的工作中重複性任務佔多大比例？',
      vi: 'Tỷ lệ công việc lặp đi lặp lại trong công việc của bạn là bao nhiêu?',
      id: 'Berapa proporsi tugas berulang dalam pekerjaan Anda?',
    }),
    options: [
      opt(
        {
          ko: '대부분이 반복 업무다. 매일 비슷한 일을 한다',
          en: 'Mostly repetitive. I do similar things every day',
          ja: 'ほとんどが繰り返し業務。毎日似たようなことをしている',
          'zh-CN': '大部分是重复性工作。每天做的事情差不多',
          'zh-TW': '大部分是重複性工作。每天做的事情差不多',
          vi: 'Hầu hết là công việc lặp lại. Tôi làm những việc tương tự mỗi ngày',
          id: 'Sebagian besar berulang. Saya melakukan hal yang serupa setiap hari',
        },
        0
      ),
      opt(
        {
          ko: '반복 업무가 많지만 판단이 필요한 순간도 있다',
          en: 'A lot of repetitive work, but there are moments that require judgment',
          ja: '繰り返し業務は多いが、判断が必要な瞬間もある',
          'zh-CN': '重复性工作较多，但也有需要判断的时候',
          'zh-TW': '重複性工作較多，但也有需要判斷的時候',
          vi: 'Nhiều việc lặp lại, nhưng cũng có lúc cần phán đoán',
          id: 'Banyak tugas berulang, tapi ada saat-saat yang membutuhkan penilaian',
        },
        1
      ),
      opt(
        {
          ko: '반복 업무보다 새로운 상황 판단이 더 많다',
          en: 'More new-situation judgment than repetitive work',
          ja: '繰り返し業務より新しい状況判断の方が多い',
          'zh-CN': '比起重复性工作，更多的是对新情况的判断',
          'zh-TW': '比起重複性工作，更多的是對新情況的判斷',
          vi: 'Phán đoán tình huống mới nhiều hơn công việc lặp lại',
          id: 'Lebih banyak penilaian situasi baru daripada tugas berulang',
        },
        2
      ),
      opt(
        {
          ko: '거의 모든 업무가 맥락 판단과 창의적 사고를 요구한다',
          en: 'Almost all my work requires contextual judgment and creative thinking',
          ja: 'ほとんどの業務が文脈判断と創造的思考を要求する',
          'zh-CN': '几乎所有工作都需要情境判断和创造性思考',
          'zh-TW': '幾乎所有工作都需要情境判斷和創造性思考',
          vi: 'Hầu hết công việc đòi hỏi phán đoán bối cảnh và suy nghĩ sáng tạo',
          id: 'Hampir semua pekerjaan membutuhkan penilaian kontekstual dan pemikiran kreatif',
        },
        3
      ),
    ],
  },
  {
    id: 2,
    question: L({
      ko: "내 업무에서 '사람과의 관계·감정·신뢰'가 차지하는 비중은?",
      en: "How much do 'relationships, emotions, and trust with people' matter in your work?",
      ja: '自分の業務で「人との関係・感情・信頼」が占める割合は?',
      'zh-CN': '在你的工作中，"与人的关系、情感、信任"占多大比重？',
      'zh-TW': '在你的工作中，「與人的關係、情感、信任」佔多大比重？',
      vi: "Trong công việc của bạn, 'quan hệ, cảm xúc và niềm tin với con người' chiếm tỷ trọng bao nhiêu?",
      id: "Seberapa besar peran 'hubungan, emosi, dan kepercayaan dengan orang lain' dalam pekerjaan Anda?",
    }),
    options: [
      opt(
        {
          ko: '거의 없다. 혼자 처리하거나 시스템으로 돌아가는 일이다',
          en: "Almost none. It's work I handle alone or that runs on systems",
          ja: 'ほとんどない。一人で処理するかシステムで動く仕事だ',
          'zh-CN': '几乎没有。是独自处理或靠系统运转的工作',
          'zh-TW': '幾乎沒有。是獨自處理或靠系統運轉的工作',
          vi: 'Hầu như không có. Đó là công việc tôi tự xử lý hoặc do hệ thống vận hành',
          id: 'Hampir tidak ada. Ini adalah pekerjaan yang saya tangani sendiri atau berjalan dengan sistem',
        },
        0
      ),
      opt(
        {
          ko: '일부 있지만 크게 중요하지는 않다',
          en: 'Some, but not very important',
          ja: '少しはあるが、あまり重要ではない',
          'zh-CN': '有一些，但不算太重要',
          'zh-TW': '有一些，但不算太重要',
          vi: 'Có một chút nhưng không quá quan trọng',
          id: 'Ada sedikit, tapi tidak terlalu penting',
        },
        1
      ),
      opt(
        {
          ko: '꽤 중요하다. 사람과의 소통이 결과에 영향을 준다',
          en: 'Quite important. Communication with people affects the outcome',
          ja: 'かなり重要だ。人とのコミュニケーションが結果に影響する',
          'zh-CN': '相当重要。与人的沟通会影响结果',
          'zh-TW': '相當重要。與人的溝通會影響結果',
          vi: 'Khá quan trọng. Giao tiếp với con người ảnh hưởng đến kết quả',
          id: 'Cukup penting. Komunikasi dengan orang lain mempengaruhi hasil',
        },
        2
      ),
      opt(
        {
          ko: '핵심이다. 사람의 신뢰와 감정 없이는 내 일이 성립되지 않는다',
          en: "It's essential. My work can't exist without people's trust and emotions",
          ja: '核心だ。人の信頼と感情なしでは自分の仕事は成立しない',
          'zh-CN': '是核心。没有他人的信任和情感，我的工作就无法成立',
          'zh-TW': '是核心。沒有他人的信任和情感，我的工作就無法成立',
          vi: 'Đó là cốt lõi. Công việc của tôi không thể tồn tại nếu thiếu niềm tin và cảm xúc của con người',
          id: 'Ini inti pekerjaan. Pekerjaan saya tidak bisa berjalan tanpa kepercayaan dan emosi orang lain',
        },
        3
      ),
    ],
  },
  {
    id: 3,
    question: L({
      ko: 'AI 도구(ChatGPT·Midjourney·Copilot 등)를 업무에 활용하고 있나요?',
      en: 'Are you using AI tools (ChatGPT, Midjourney, Copilot, etc.) in your work?',
      ja: 'AIツール（ChatGPT・Midjourney・Copilotなど）を業務に活用していますか？',
      'zh-CN': '你在工作中使用AI工具（ChatGPT、Midjourney、Copilot等）吗？',
      'zh-TW': '你在工作中使用AI工具（ChatGPT、Midjourney、Copilot等）嗎？',
      vi: 'Bạn có đang sử dụng các công cụ AI (ChatGPT, Midjourney, Copilot, v.v.) trong công việc không?',
      id: 'Apakah Anda menggunakan alat AI (ChatGPT, Midjourney, Copilot, dll.) dalam pekerjaan Anda?',
    }),
    options: [
      opt(
        {
          ko: '거의 안 쓴다. 관심은 있지만 아직 써본 적이 없다',
          en: "Barely. I'm interested but haven't tried it yet",
          ja: 'ほとんど使わない。興味はあるがまだ使ったことがない',
          'zh-CN': '几乎不用。感兴趣但还没用过',
          'zh-TW': '幾乎不用。感興趣但還沒用過',
          vi: 'Hầu như không dùng. Tôi có quan tâm nhưng chưa từng thử',
          id: 'Hampir tidak pernah. Saya tertarik tapi belum pernah mencobanya',
        },
        0
      ),
      opt(
        {
          ko: '가끔 써보긴 했는데 본격적으로 활용하진 않는다',
          en: "I've tried it occasionally but don't use it seriously",
          ja: '時々使ってみたが本格的には活用していない',
          'zh-CN': '偶尔用过，但没有认真使用',
          'zh-TW': '偶爾用過，但沒有認真使用',
          vi: 'Tôi có thử vài lần nhưng chưa sử dụng nghiêm túc',
          id: 'Kadang mencoba, tapi belum digunakan secara serius',
        },
        1
      ),
      opt(
        {
          ko: '업무에서 어느 정도 활용하고 있다. 효율이 올랐다',
          en: 'I use it to some extent at work. Efficiency has improved',
          ja: '業務である程度活用している。効率が上がった',
          'zh-CN': '在工作中一定程度地使用。效率提高了',
          'zh-TW': '在工作中一定程度地使用。效率提高了',
          vi: 'Tôi sử dụng ở một mức độ nào đó trong công việc. Hiệu suất đã tăng lên',
          id: 'Saya menggunakannya sampai batas tertentu dalam pekerjaan. Efisiensi meningkat',
        },
        2
      ),
      opt(
        {
          ko: 'AI를 적극 활용해서 아웃풋을 높이고 있다. AI를 쓰는 사람이 안 쓰는 사람보다 낫다는 걸 안다',
          en: "I actively use AI to boost my output. I know that people who use AI outperform those who don't",
          ja: 'AIを積極的に活用してアウトプットを高めている。AIを使う人が使わない人より優れていることを知っている',
          'zh-CN': '积极使用AI来提升产出。我知道用AI的人比不用的人更有优势',
          'zh-TW': '積極使用AI來提升產出。我知道用AI的人比不用的人更有優勢',
          vi: 'Tôi chủ động sử dụng AI để nâng cao hiệu suất công việc. Tôi biết rằng người dùng AI vượt trội hơn người không dùng',
          id: 'Saya aktif menggunakan AI untuk meningkatkan output. Saya tahu orang yang menggunakan AI lebih unggul daripada yang tidak',
        },
        3
      ),
    ],
  },
  {
    id: 4,
    question: L({
      ko: '내가 가진 역량 중 AI가 대체하기 어렵다고 생각하는 것은?',
      en: 'Which of your abilities do you think AI would find hard to replace?',
      ja: '自分が持っている能力の中でAIが代替しにくいと思うものは?',
      'zh-CN': '在你的能力中，你认为AI难以取代的是什么？',
      'zh-TW': '在你的能力中，你認為AI難以取代的是什麼？',
      vi: 'Trong số các năng lực của bạn, điều gì bạn nghĩ AI khó có thể thay thế?',
      id: 'Dari kemampuan yang Anda miliki, mana yang menurut Anda sulit digantikan oleh AI?',
    }),
    options: [
      opt(
        {
          ko: '딱히 떠오르지 않는다. AI가 다 할 수 있을 것 같다',
          en: 'Nothing comes to mind. I feel AI could do it all',
          ja: '特に思い浮かばない。AIが全部できそうだ',
          'zh-CN': '想不出来。感觉AI都能做',
          'zh-TW': '想不出來。感覺AI都能做',
          vi: 'Không nghĩ ra được gì cả. Có vẻ AI có thể làm tất cả',
          id: 'Tidak ada yang terlintas. Rasanya AI bisa melakukan semuanya',
        },
        0
      ),
      opt(
        {
          ko: '오래 쌓은 경험이나 현장 감각 정도는 있다고 생각한다',
          en: 'I think I have long-accumulated experience and hands-on instinct, at least',
          ja: '長年積んだ経験や現場感覚くらいはあると思う',
          'zh-CN': '我觉得至少有长期积累的经验和现场直觉',
          'zh-TW': '我覺得至少有長期積累的經驗和現場直覺',
          vi: 'Tôi nghĩ mình có kinh nghiệm tích lũy lâu năm và trực giác thực tế',
          id: 'Saya pikir setidaknya saya punya pengalaman yang terkumpul lama dan intuisi lapangan',
        },
        1
      ),
      opt(
        {
          ko: '복잡한 상황에서 판단하고 설득하는 능력이 있다',
          en: 'I have the ability to judge and persuade in complex situations',
          ja: '複雑な状況で判断し説得する能力がある',
          'zh-CN': '有在复杂情况下判断和说服的能力',
          'zh-TW': '有在複雜情況下判斷和說服的能力',
          vi: 'Tôi có khả năng phán đoán và thuyết phục trong các tình huống phức tạp',
          id: 'Saya memiliki kemampuan menilai dan meyakinkan dalam situasi kompleks',
        },
        2
      ),
      opt(
        {
          ko: '창의성·전략적 사고·관계 구축·맥락 이해 등 여러 개가 있다',
          en: 'Several: creativity, strategic thinking, relationship building, contextual understanding, and more',
          ja: '創造性・戦略的思考・関係構築・文脈理解など複数ある',
          'zh-CN': '有多种：创造力、战略思维、关系建立、情境理解等',
          'zh-TW': '有多種：創造力、戰略思維、關係建立、情境理解等',
          vi: 'Có nhiều: sáng tạo, tư duy chiến lược, xây dựng quan hệ, hiểu bối cảnh, v.v.',
          id: 'Ada beberapa: kreativitas, pemikiran strategis, membangun hubungan, memahami konteks, dan lainnya',
        },
        3
      ),
    ],
  },
  {
    id: 5,
    question: L({
      ko: '내 직업이 5년 후에도 비슷한 형태로 존재할 것 같나요?',
      en: 'Do you think your job will still exist in a similar form 5 years from now?',
      ja: '自分の職業は5年後も似たような形で存在すると思いますか？',
      'zh-CN': '你认为你的职业5年后还会以类似的形式存在吗？',
      'zh-TW': '你認為你的職業5年後還會以類似的形式存在嗎？',
      vi: 'Bạn có nghĩ công việc của mình vẫn sẽ tồn tại dưới hình thức tương tự trong 5 năm nữa không?',
      id: 'Apakah menurut Anda pekerjaan Anda masih akan ada dalam bentuk serupa 5 tahun lagi?',
    }),
    options: [
      opt(
        {
          ko: '솔직히 자신 없다. 없어지거나 크게 바뀔 것 같다',
          en: "Honestly, I'm not confident. It seems likely to disappear or change dramatically",
          ja: '正直自信がない。なくなるか大きく変わりそうだ',
          'zh-CN': '说实话没有信心。感觉会消失或发生巨大变化',
          'zh-TW': '說實話沒有信心。感覺會消失或發生巨大變化',
          vi: 'Thật lòng tôi không tự tin. Có vẻ nó sẽ biến mất hoặc thay đổi lớn',
          id: 'Sejujurnya saya tidak yakin. Sepertinya akan hilang atau berubah drastis',
        },
        0
      ),
      opt(
        {
          ko: '형태가 바뀌겠지만 완전히 없어지진 않을 것 같다',
          en: "The form will change, but I don't think it will disappear entirely",
          ja: '形は変わるだろうが完全になくなりはしないと思う',
          'zh-CN': '形式会改变，但应该不会完全消失',
          'zh-TW': '形式會改變，但應該不會完全消失',
          vi: 'Hình thức sẽ thay đổi nhưng chắc không biến mất hoàn toàn',
          id: 'Bentuknya akan berubah, tapi sepertinya tidak akan hilang sepenuhnya',
        },
        1
      ),
      opt(
        {
          ko: '역할이 진화하겠지만 나는 적응할 자신이 있다',
          en: "My role will evolve, but I'm confident I can adapt",
          ja: '役割は進化するだろうが自分は適応できる自信がある',
          'zh-CN': '角色会演变，但我有信心适应',
          'zh-TW': '角色會演變，但我有信心適應',
          vi: 'Vai trò sẽ thay đổi nhưng tôi tự tin có thể thích nghi',
          id: 'Peran saya akan berkembang, tapi saya yakin bisa beradaptasi',
        },
        2
      ),
      opt(
        {
          ko: 'AI 덕분에 오히려 내 역할이 더 중요해질 것이라고 생각한다',
          en: 'I think my role will actually become more important thanks to AI',
          ja: 'AIのおかげで自分の役割はむしろより重要になると思う',
          'zh-CN': '我认为得益于AI，我的角色反而会变得更重要',
          'zh-TW': '我認為得益於AI，我的角色反而會變得更重要',
          vi: 'Tôi nghĩ nhờ AI, vai trò của tôi sẽ càng trở nên quan trọng hơn',
          id: 'Saya pikir justru berkat AI, peran saya akan menjadi lebih penting',
        },
        3
      ),
    ],
  },
  {
    id: 6,
    question: L({
      ko: "내 업무에서 '창의적 아이디어 또는 새로운 문제 정의'가 필요한 빈도는?",
      en: "How often does your work require 'creative ideas or defining new problems'?",
      ja: '自分の業務で「創造的なアイデアや新しい問題定義」が必要な頻度は?',
      'zh-CN': '在你的工作中，需要"创意想法或定义新问题"的频率是？',
      'zh-TW': '在你的工作中，需要「創意想法或定義新問題」的頻率是？',
      vi: "Trong công việc của bạn, mức độ thường xuyên cần 'ý tưởng sáng tạo hoặc xác định vấn đề mới' là bao nhiêu?",
      id: "Seberapa sering pekerjaan Anda membutuhkan 'ide kreatif atau mendefinisikan masalah baru'?",
    }),
    options: [
      opt(
        {
          ko: '거의 없다. 정해진 방식대로 처리한다',
          en: 'Almost never. I handle things in a set way',
          ja: 'ほとんどない。決まったやり方で処理する',
          'zh-CN': '几乎没有。按照既定方式处理',
          'zh-TW': '幾乎沒有。按照既定方式處理',
          vi: 'Hầu như không có. Tôi xử lý theo cách đã định',
          id: 'Hampir tidak pernah. Saya menanganinya dengan cara yang sudah ditentukan',
        },
        0
      ),
      opt(
        {
          ko: '가끔 있다. 주로 정해진 틀 안에서 일한다',
          en: 'Sometimes. I mostly work within a set framework',
          ja: '時々ある。主に決まった枠の中で働く',
          'zh-CN': '偶尔有。主要在既定框架内工作',
          'zh-TW': '偶爾有。主要在既定框架內工作',
          vi: 'Đôi khi có. Tôi chủ yếu làm việc trong một khuôn khổ cố định',
          id: 'Sesekali ada. Saya sebagian besar bekerja dalam kerangka yang sudah ditentukan',
        },
        1
      ),
      opt(
        {
          ko: '꽤 자주 있다. 상황마다 다르게 접근해야 한다',
          en: 'Quite often. I have to approach each situation differently',
          ja: 'かなり頻繁にある。状況ごとに異なるアプローチが必要だ',
          'zh-CN': '相当频繁。每种情况都需要不同的应对方式',
          'zh-TW': '相當頻繁。每種情況都需要不同的應對方式',
          vi: 'Khá thường xuyên. Tôi phải tiếp cận khác nhau tùy từng tình huống',
          id: 'Cukup sering. Saya harus mendekati setiap situasi secara berbeda',
        },
        2
      ),
      opt(
        {
          ko: '항상 있다. 새로운 문제를 발견하고 정의하는 것 자체가 내 일이다',
          en: 'Always. Discovering and defining new problems is literally my job',
          ja: '常にある。新しい問題を発見し定義すること自体が自分の仕事だ',
          'zh-CN': '一直都有。发现和定义新问题本身就是我的工作',
          'zh-TW': '一直都有。發現和定義新問題本身就是我的工作',
          vi: 'Luôn luôn có. Việc phát hiện và xác định vấn đề mới chính là công việc của tôi',
          id: 'Selalu ada. Menemukan dan mendefinisikan masalah baru adalah pekerjaan saya',
        },
        3
      ),
    ],
  },
  {
    id: 7,
    question: L({
      ko: '최근 1년간 새로운 기술이나 도구를 배우거나 시도한 것이 있나요?',
      en: 'In the past year, have you learned or tried any new technologies or tools?',
      ja: '最近1年間で新しい技術やツールを学んだり試したりしたことがありますか？',
      'zh-CN': '在过去一年里，你有学习或尝试过新技术或工具吗？',
      'zh-TW': '在過去一年裡，你有學習或嘗試過新技術或工具嗎？',
      vi: 'Trong năm qua, bạn có học hoặc thử nghiệm công nghệ hay công cụ mới nào không?',
      id: 'Dalam satu tahun terakhir, apakah Anda mempelajari atau mencoba teknologi atau alat baru?',
    }),
    options: [
      opt(
        {
          ko: '없다. 지금 하는 방식으로 충분하다',
          en: 'No. The way I do things now is enough',
          ja: 'ない。今のやり方で十分だ',
          'zh-CN': '没有。现在的方式就足够了',
          'zh-TW': '沒有。現在的方式就足夠了',
          vi: 'Không. Cách tôi làm hiện tại là đủ',
          id: 'Tidak ada. Cara saya sekarang sudah cukup',
        },
        0
      ),
      opt(
        {
          ko: '하나 정도. 관심은 있지만 적극적이진 않았다',
          en: 'About one. I was interested but not very proactive',
          ja: '1つくらい。興味はあるが積極的ではなかった',
          'zh-CN': '大概一个。有兴趣但不太主动',
          'zh-TW': '大概一個。有興趣但不太主動',
          vi: 'Khoảng một cái. Tôi có quan tâm nhưng không chủ động lắm',
          id: 'Sekitar satu. Saya tertarik tapi tidak terlalu proaktif',
        },
        1
      ),
      opt(
        {
          ko: '여러 개. 업무 효율을 높이기 위해 꾸준히 시도한다',
          en: 'Several. I keep trying new things to improve work efficiency',
          ja: '複数。業務効率を高めるために継続的に試している',
          'zh-CN': '多个。为了提高工作效率一直在尝试',
          'zh-TW': '多個。為了提高工作效率一直在嘗試',
          vi: 'Nhiều cái. Tôi liên tục thử nghiệm để nâng cao hiệu suất công việc',
          id: 'Beberapa. Saya terus mencoba untuk meningkatkan efisiensi kerja',
        },
        2
      ),
      opt(
        {
          ko: 'AI·자동화·데이터 관련 도구를 포함해 적극적으로 학습하고 있다',
          en: "I'm actively learning, including AI, automation, and data-related tools",
          ja: 'AI・自動化・データ関連ツールを含めて積極的に学習している',
          'zh-CN': '包括AI、自动化、数据相关工具，我都在积极学习',
          'zh-TW': '包括AI、自動化、數據相關工具，我都在積極學習',
          vi: 'Tôi đang tích cực học, bao gồm cả các công cụ AI, tự động hóa và dữ liệu',
          id: 'Saya aktif belajar, termasuk alat-alat AI, otomasi, dan data',
        },
        3
      ),
    ],
  },
  {
    id: 8,
    question: L({
      ko: '내 분야에서 AI 변화가 가져오는 기회에 대해 어떻게 생각하나요?',
      en: 'What do you think about the opportunities AI-driven change brings to your field?',
      ja: '自分の分野でAIの変化がもたらす機会についてどう思いますか？',
      'zh-CN': '你如何看待AI变革给你所在领域带来的机会？',
      'zh-TW': '你如何看待AI變革給你所在領域帶來的機會？',
      vi: 'Bạn nghĩ gì về cơ hội mà sự thay đổi của AI mang lại cho lĩnh vực của bạn?',
      id: 'Bagaimana pendapat Anda tentang peluang yang dibawa perubahan AI di bidang Anda?',
    }),
    options: [
      opt(
        {
          ko: '위협이다. AI 때문에 내 일이 줄어들 것 같아 불안하다',
          en: "It's a threat. I'm anxious that AI will reduce my work",
          ja: '脅威だ。AIのせいで自分の仕事が減りそうで不安だ',
          'zh-CN': '是威胁。我担心AI会让我的工作减少',
          'zh-TW': '是威脅。我擔心AI會讓我的工作減少',
          vi: 'Đó là mối đe dọa. Tôi lo lắng AI sẽ làm giảm công việc của tôi',
          id: 'Itu ancaman. Saya khawatir AI akan mengurangi pekerjaan saya',
        },
        0
      ),
      opt(
        {
          ko: '위협이기도 하고 기회이기도 한데 아직 방향을 못 잡았다',
          en: "It's both a threat and an opportunity, but I haven't found my direction yet",
          ja: '脅威でもあり機会でもあるが、まだ方向がつかめていない',
          'zh-CN': '既是威胁也是机会，但还没找到方向',
          'zh-TW': '既是威脅也是機會，但還沒找到方向',
          vi: 'Vừa là mối đe dọa vừa là cơ hội, nhưng tôi chưa tìm ra hướng đi',
          id: 'Ini ancaman sekaligus peluang, tapi saya belum menemukan arahnya',
        },
        1
      ),
      opt(
        {
          ko: '기회로 보고 있다. AI를 활용해서 더 잘할 수 있다고 생각한다',
          en: 'I see it as an opportunity. I think I can do better by using AI',
          ja: '機会だと見ている。AIを活用してもっと良くできると思う',
          'zh-CN': '我把它看作机会。我认为借助AI能做得更好',
          'zh-TW': '我把它看作機會。我認為借助AI能做得更好',
          vi: 'Tôi coi đó là cơ hội. Tôi nghĩ mình có thể làm tốt hơn nhờ sử dụng AI',
          id: 'Saya melihatnya sebagai peluang. Saya pikir bisa melakukan lebih baik dengan menggunakan AI',
        },
        2
      ),
      opt(
        {
          ko: '이미 기회로 전환하고 있다. AI 덕분에 더 높은 가치의 일에 집중할 수 있게 됐다',
          en: "I'm already turning it into an opportunity. Thanks to AI, I can focus on higher-value work",
          ja: 'すでに機会に転換している。AIのおかげでより高い価値の仕事に集中できるようになった',
          'zh-CN': '我已经将其转化为机会。得益于AI，我能专注于更高价值的工作',
          'zh-TW': '我已經將其轉化為機會。得益於AI，我能專注於更高價值的工作',
          vi: 'Tôi đã biến nó thành cơ hội. Nhờ AI, tôi có thể tập trung vào công việc giá trị cao hơn',
          id: 'Saya sudah mengubahnya menjadi peluang. Berkat AI, saya bisa fokus pada pekerjaan bernilai lebih tinggi',
        },
        3
      ),
    ],
  },
  {
    id: 9,
    question: L({
      ko: "내 업무 결과물이 '맥락·뉘앙스·문화적 이해'를 요구하는 정도는?",
      en: "To what extent does your work output require 'context, nuance, and cultural understanding'?",
      ja: '自分の業務結果物が「文脈・ニュアンス・文化的理解」を要求する程度は?',
      'zh-CN': '你的工作成果需要"情境、细微差别、文化理解"的程度是？',
      'zh-TW': '你的工作成果需要「情境、細微差別、文化理解」的程度是？',
      vi: "Mức độ kết quả công việc của bạn yêu cầu 'bối cảnh, sự tinh tế và hiểu biết văn hóa' là bao nhiêu?",
      id: "Sejauh mana hasil kerja Anda membutuhkan 'konteks, nuansa, dan pemahaman budaya'?",
    }),
    options: [
      opt(
        {
          ko: '낮다. 표준화된 결과물이 대부분이다',
          en: 'Low. Most output is standardized',
          ja: '低い。標準化された結果物がほとんどだ',
          'zh-CN': '低。大多数是标准化的成果',
          'zh-TW': '低。大多數是標準化的成果',
          vi: 'Thấp. Hầu hết kết quả đều được tiêu chuẩn hóa',
          id: 'Rendah. Sebagian besar hasilnya sudah terstandarisasi',
        },
        0
      ),
      opt(
        {
          ko: '보통이다. 어느 정도 맥락이 필요하지만 패턴화가 가능하다',
          en: 'Moderate. Some context is needed, but it can be patterned',
          ja: '普通だ。ある程度文脈が必要だがパターン化が可能だ',
          'zh-CN': '一般。需要一定情境，但可以模式化',
          'zh-TW': '一般。需要一定情境，但可以模式化',
          vi: 'Trung bình. Cần một chút bối cảnh nhưng có thể tạo thành khuôn mẫu',
          id: 'Sedang. Membutuhkan konteks tertentu, tapi bisa dijadikan pola',
        },
        1
      ),
      opt(
        {
          ko: '높다. 상황과 관계에 따라 결과물이 완전히 달라진다',
          en: 'High. The output completely changes depending on the situation and relationship',
          ja: '高い。状況と関係によって結果物が完全に変わる',
          'zh-CN': '高。结果会因情况和关系而完全不同',
          'zh-TW': '高。結果會因情況和關係而完全不同',
          vi: 'Cao. Kết quả hoàn toàn khác nhau tùy theo tình huống và mối quan hệ',
          id: 'Tinggi. Hasilnya sepenuhnya berbeda tergantung situasi dan hubungan',
        },
        2
      ),
      opt(
        {
          ko: '매우 높다. 사람의 맥락·감정·문화를 이해하지 않으면 가치 있는 결과가 나오지 않는다',
          en: "Very high. Without understanding people's context, emotions, and culture, no valuable output comes out",
          ja: '非常に高い。人の文脈・感情・文化を理解しなければ価値ある結果は出ない',
          'zh-CN': '非常高。如果不理解人的情境、情感和文化，就无法产生有价值的成果',
          'zh-TW': '非常高。如果不理解人的情境、情感和文化，就無法產生有價值的成果',
          vi: 'Rất cao. Nếu không hiểu bối cảnh, cảm xúc và văn hóa của con người, sẽ không có kết quả có giá trị',
          id: 'Sangat tinggi. Tanpa memahami konteks, emosi, dan budaya manusia, tidak akan ada hasil yang bernilai',
        },
        3
      ),
    ],
  },
  {
    id: 10,
    question: L({
      ko: "내 직업에서 '책임지는 결정'을 내리는 빈도는?",
      en: "How often do you make 'decisions you're accountable for' in your job?",
      ja: '自分の職業で「責任を負う決定」を下す頻度は?',
      'zh-CN': '在你的职业中，做出"需承担责任的决策"的频率是？',
      'zh-TW': '在你的職業中，做出「需承擔責任的決策」的頻率是？',
      vi: "Trong công việc của bạn, mức độ thường xuyên phải đưa ra 'quyết định chịu trách nhiệm' là bao nhiêu?",
      id: "Seberapa sering Anda membuat 'keputusan yang harus dipertanggungjawabkan' dalam pekerjaan Anda?",
    }),
    options: [
      opt(
        {
          ko: '거의 없다. 상사나 시스템이 결정하고 나는 실행한다',
          en: 'Almost never. My boss or the system decides and I execute',
          ja: 'ほとんどない。上司やシステムが決定し自分は実行する',
          'zh-CN': '几乎没有。由上司或系统决定，我负责执行',
          'zh-TW': '幾乎沒有。由上司或系統決定，我負責執行',
          vi: 'Hầu như không có. Cấp trên hoặc hệ thống quyết định, tôi chỉ thực hiện',
          id: 'Hampir tidak pernah. Atasan atau sistem yang memutuskan, saya hanya melaksanakan',
        },
        0
      ),
      opt(
        {
          ko: '가끔 있다. 일부 결정을 내리지만 큰 책임은 아니다',
          en: 'Sometimes. I make some decisions, but not with major responsibility',
          ja: '時々ある。一部の決定は下すが大きな責任ではない',
          'zh-CN': '偶尔有。会做出一些决定，但责任不大',
          'zh-TW': '偶爾有。會做出一些決定，但責任不大',
          vi: 'Đôi khi có. Tôi đưa ra một số quyết định nhưng không phải trách nhiệm lớn',
          id: 'Sesekali ada. Saya membuat beberapa keputusan tapi tanggung jawabnya tidak besar',
        },
        1
      ),
      opt(
        {
          ko: '자주 있다. 상당한 판단과 책임이 따른다',
          en: 'Often. It involves considerable judgment and responsibility',
          ja: '頻繁にある。かなりの判断と責任が伴う',
          'zh-CN': '经常有。伴随相当大的判断和责任',
          'zh-TW': '經常有。伴隨相當大的判斷和責任',
          vi: 'Thường xuyên có. Đi kèm với phán đoán và trách nhiệm đáng kể',
          id: 'Sering ada. Melibatkan penilaian dan tanggung jawab yang cukup besar',
        },
        2
      ),
      opt(
        {
          ko: '항상 있다. 내 판단과 결정이 결과에 직결되고 책임도 내가 진다',
          en: 'Always. My judgment and decisions directly determine the outcome, and I bear the responsibility',
          ja: '常にある。自分の判断と決定が結果に直結し責任も自分が負う',
          'zh-CN': '一直都有。我的判断和决策直接决定结果，责任也由我承担',
          'zh-TW': '一直都有。我的判斷和決策直接決定結果，責任也由我承擔',
          vi: 'Luôn luôn có. Phán đoán và quyết định của tôi ảnh hưởng trực tiếp đến kết quả, và tôi chịu trách nhiệm',
          id: 'Selalu ada. Penilaian dan keputusan saya langsung menentukan hasil, dan saya yang bertanggung jawab',
        },
        3
      ),
    ],
  },
  {
    id: 11,
    question: L({
      ko: '나는 AI가 대체할 수 없는 나만의 전문성·경험·네트워크가 있다고 생각하나요?',
      en: 'Do you believe you have your own expertise, experience, or network that AI cannot replace?',
      ja: '自分にはAIが代替できない自分だけの専門性・経験・ネットワークがあると思いますか？',
      'zh-CN': '你认为自己拥有AI无法取代的专业知识、经验或人脉吗？',
      'zh-TW': '你認為自己擁有AI無法取代的專業知識、經驗或人脈嗎？',
      vi: 'Bạn có nghĩ mình có chuyên môn, kinh nghiệm hoặc mạng lưới riêng mà AI không thể thay thế không?',
      id: 'Apakah Anda merasa memiliki keahlian, pengalaman, atau jaringan unik yang tidak bisa digantikan oleh AI?',
    }),
    options: [
      opt(
        {
          ko: '솔직히 모르겠다. AI도 충분히 할 수 있을 것 같다',
          en: "Honestly, I don't know. AI seems capable enough to do it too",
          ja: '正直分からない。AIでも十分できそうだ',
          'zh-CN': '说实话不知道。感觉AI也能做得很好',
          'zh-TW': '說實話不知道。感覺AI也能做得很好',
          vi: 'Thật lòng tôi không biết. Có vẻ AI cũng có thể làm được',
          id: 'Sejujurnya saya tidak tahu. Rasanya AI juga cukup mampu melakukannya',
        },
        0
      ),
      opt(
        {
          ko: '조금은 있다. 하지만 강점이 분명하지는 않다',
          en: "A little, but my strengths aren't very clear",
          ja: '少しはある。しかし強みが明確ではない',
          'zh-CN': '有一点，但优势不够明显',
          'zh-TW': '有一點，但優勢不夠明顯',
          vi: 'Có một chút nhưng thế mạnh không rõ ràng',
          id: 'Sedikit ada, tapi kekuatannya belum jelas',
        },
        1
      ),
      opt(
        {
          ko: '있다. 내가 가진 현장 경험과 판단력은 AI가 쉽게 모방하기 어렵다',
          en: 'Yes. My hands-on experience and judgment are hard for AI to easily imitate',
          ja: 'ある。自分が持つ現場経験と判断力はAIが簡単に模倣しにくい',
          'zh-CN': '有。我的现场经验和判断力是AI难以轻易模仿的',
          'zh-TW': '有。我的現場經驗和判斷力是AI難以輕易模仿的',
          vi: 'Có. Kinh nghiệm thực tế và khả năng phán đoán của tôi khó để AI dễ dàng bắt chước',
          id: 'Ada. Pengalaman lapangan dan kemampuan penilaian saya sulit ditiru dengan mudah oleh AI',
        },
        2
      ),
      opt(
        {
          ko: '확실히 있다. AI가 내 역할을 대체하려면 아직 멀었다. 오히려 AI를 활용할 줄 아는 내가 더 강해진다',
          en: "Definitely. AI is still far from replacing my role. In fact, knowing how to use AI makes me even stronger",
          ja: '確実にある。AIが自分の役割を代替するにはまだ遠い。むしろAIを活用できる自分がより強くなる',
          'zh-CN': '肯定有。AI要取代我的角色还差得远。反而是我懂得运用AI，让自己变得更强',
          'zh-TW': '肯定有。AI要取代我的角色還差得遠。反而是我懂得運用AI，讓自己變得更強',
          vi: 'Chắc chắn có. AI còn lâu mới thay thế được vai trò của tôi. Ngược lại, tôi biết cách sử dụng AI nên càng trở nên mạnh mẽ hơn',
          id: 'Pasti ada. AI masih jauh dari mampu menggantikan peran saya. Justru dengan bisa memanfaatkan AI, saya menjadi lebih kuat',
        },
        3
      ),
    ],
  },
  {
    id: 12,
    question: L({
      ko: '지금 이 순간 내 직업의 AI 대체 위험에 대한 솔직한 생각은?',
      en: "Right now, what's your honest thought about the risk of AI replacing your job?",
      ja: '今この瞬間、自分の職業のAI代替リスクについての率直な考えは?',
      'zh-CN': '此刻，你对自己职业被AI取代风险的真实想法是什么？',
      'zh-TW': '此刻，你對自己職業被AI取代風險的真實想法是什麼？',
      vi: 'Ngay lúc này, suy nghĩ thật của bạn về nguy cơ AI thay thế công việc của bạn là gì?',
      id: 'Saat ini, apa pikiran jujur Anda tentang risiko pekerjaan Anda digantikan oleh AI?',
    }),
    options: [
      opt(
        {
          ko: '불안하다. 언제 내 일이 없어질지 모른다',
          en: "I'm anxious. I don't know when my job might disappear",
          ja: '不安だ。いつ自分の仕事がなくなるか分からない',
          'zh-CN': '很不安。不知道我的工作什么时候会消失',
          'zh-TW': '很不安。不知道我的工作什麼時候會消失',
          vi: 'Tôi lo lắng. Không biết khi nào công việc của mình sẽ biến mất',
          id: 'Saya khawatir. Tidak tahu kapan pekerjaan saya akan hilang',
        },
        0
      ),
      opt(
        {
          ko: '걱정은 되지만 아직 당장은 아닌 것 같다',
          en: "I'm worried, but I don't think it's imminent yet",
          ja: '心配ではあるがまだ当面は大丈夫だと思う',
          'zh-CN': '有些担心，但感觉还不是迫在眉睫',
          'zh-TW': '有些擔心，但感覺還不是迫在眉睫',
          vi: 'Tôi lo lắng nhưng có vẻ chưa đến mức cấp bách ngay',
          id: 'Saya khawatir, tapi sepertinya belum akan terjadi dalam waktu dekat',
        },
        1
      ),
      opt(
        {
          ko: '위기감을 느끼고 준비하고 있다. 변화에 적응할 자신이 있다',
          en: "I feel a sense of crisis and am preparing. I'm confident I can adapt to change",
          ja: '危機感を感じて準備している。変化に適応できる自信がある',
          'zh-CN': '感受到危机感并在准备。我有信心适应变化',
          'zh-TW': '感受到危機感並在準備。我有信心適應變化',
          vi: 'Tôi cảm nhận được nguy cơ và đang chuẩn bị. Tôi tự tin có thể thích nghi với sự thay đổi',
          id: 'Saya merasakan tanda bahaya dan sedang bersiap. Saya yakin bisa beradaptasi dengan perubahan',
        },
        2
      ),
      opt(
        {
          ko: '크게 걱정하지 않는다. AI를 도구로 쓰면서 내 가치를 높이고 있다',
          en: "I'm not too worried. I use AI as a tool to increase my value",
          ja: '大きく心配していない。AIを道具として使いながら自分の価値を高めている',
          'zh-CN': '不太担心。我把AI当作工具，正在提升自己的价值',
          'zh-TW': '不太擔心。我把AI當作工具，正在提升自己的價值',
          vi: 'Tôi không lo lắng nhiều. Tôi sử dụng AI như một công cụ để nâng cao giá trị của mình',
          id: 'Saya tidak terlalu khawatir. Saya menggunakan AI sebagai alat untuk meningkatkan nilai diri saya',
        },
        3
      ),
    ],
  },
];

export const phase3AiEraJobSurvivalScoreResults: Phase3AiEraJobSurvivalScoreResult[] = [
  {
    type: 'Type1',
    emoji: '🔴',
    title: L({
      ko: '빨간불, 직업 생존 점수 15점',
      en: 'Red Light: Job Survival Score 15',
      ja: '赤信号、職業生存スコア15点',
      'zh-CN': '红灯警示，职业生存分数15分',
      'zh-TW': '紅燈警示，職業生存分數15分',
      vi: 'Đèn đỏ, điểm sống còn nghề nghiệp 15 điểm',
      id: 'Lampu Merah, Skor Kelangsungan Karier 15',
    }),
    shortDescription: L({
      ko: '솔직히 말씀드립니다. 지금 하는 일의 상당 부분이 3~5년 안에 AI로 대체될 가능성이 있습니다.',
      en: "Let's be honest. A significant portion of what you do now could be replaced by AI within 3-5 years.",
      ja: '正直にお伝えします。今している仕事のかなりの部分が3〜5年以内にAIに代替される可能性があります。',
      'zh-CN': '坦白说，你现在从事的工作中有相当一部分可能在3~5年内被AI取代。',
      'zh-TW': '坦白說，你現在從事的工作中有相當一部分可能在3~5年內被AI取代。',
      vi: 'Xin nói thật. Phần lớn công việc bạn đang làm có khả năng bị AI thay thế trong 3-5 năm tới.',
      id: 'Jujur saja. Sebagian besar pekerjaan yang Anda lakukan sekarang berpotensi digantikan oleh AI dalam 3-5 tahun.',
    }),
    description: L({
      ko: '반복 업무 중심·사람과의 관계 비중 낮음·AI 도구 미활용·새로운 학습 없음의 조합은 AI 대체 위험이 가장 높은 포지션입니다. 이 결과는 경고입니다. 동시에 지금 알게 됐다는 것이 기회입니다.',
      en: 'A combination of repetitive work focus, low relationship involvement, no AI tool use, and no new learning puts you in the highest-risk position for AI replacement. This result is a warning. At the same time, finding out now is an opportunity.',
      ja: '繰り返し業務中心・人との関係比重が低い・AIツール未活用・新しい学習なしという組み合わせはAI代替リスクが最も高いポジションです。この結果は警告です。同時に、今知ったことがチャンスでもあります。',
      'zh-CN': '以重复性工作为主、与人的关系比重低、未使用AI工具、没有新学习，这种组合是AI取代风险最高的位置。这个结果是一个警告。但同时，现在知道也是一个机会。',
      'zh-TW': '以重複性工作為主、與人的關係比重低、未使用AI工具、沒有新學習，這種組合是AI取代風險最高的位置。這個結果是一個警告。但同時，現在知道也是一個機會。',
      vi: 'Sự kết hợp giữa công việc lặp lại là chủ yếu, ít gắn với con người, không sử dụng công cụ AI và không học hỏi điều mới khiến bạn ở vị trí có nguy cơ bị AI thay thế cao nhất. Kết quả này là một lời cảnh báo. Nhưng đồng thời, việc biết được điều này ngay bây giờ cũng là một cơ hội.',
      id: 'Kombinasi fokus pada pekerjaan berulang, rendahnya keterlibatan hubungan dengan orang lain, tidak menggunakan alat AI, dan tidak ada pembelajaran baru menempatkan Anda pada posisi berisiko tertinggi untuk digantikan AI. Hasil ini adalah peringatan. Namun, mengetahuinya sekarang juga adalah sebuah peluang.',
    }),
    survivalScore: L({
      ko: '15/100',
      en: '15/100',
      ja: '15/100',
      'zh-CN': '15/100',
      'zh-TW': '15/100',
      vi: '15/100',
      id: '15/100',
    }),
    aiRiskLevel: L({
      ko: '매우 높음',
      en: 'Very High',
      ja: '非常に高い',
      'zh-CN': '非常高',
      'zh-TW': '非常高',
      vi: 'Rất cao',
      id: 'Sangat Tinggi',
    }),
    sections: [
      section(
        {
          ko: '⚠️ 가장 위험한 이유',
          en: '⚠️ Why It\'s Riskiest',
          ja: '⚠️ 最も危険な理由',
          'zh-CN': '⚠️ 最危险的原因',
          'zh-TW': '⚠️ 最危險的原因',
          vi: '⚠️ Lý do rủi ro nhất',
          id: '⚠️ Alasan Paling Berisiko',
        },
        {
          ko: '반복 가능·표준화 가능·맥락 불필요 업무 비중이 높음',
          en: "High proportion of work that's repeatable, standardizable, and doesn't require context",
          ja: '繰り返し可能・標準化可能・文脈不要な業務の比重が高い',
          'zh-CN': '可重复、可标准化、无需情境判断的工作比重较高',
          'zh-TW': '可重複、可標準化、無需情境判斷的工作比重較高',
          vi: 'Tỷ trọng công việc có thể lặp lại, tiêu chuẩn hóa và không cần bối cảnh cao',
          id: 'Proporsi tinggi pekerjaan yang dapat diulang, distandarisasi, dan tidak membutuhkan konteks',
        }
      ),
      section(
        {
          ko: '✅ 지금 당장 해야 할 것',
          en: '✅ What to Do Right Now',
          ja: '✅ 今すぐすべきこと',
          'zh-CN': '✅ 现在立刻要做的事',
          'zh-TW': '✅ 現在立刻要做的事',
          vi: '✅ Việc cần làm ngay bây giờ',
          id: '✅ Yang Harus Dilakukan Sekarang',
        },
        {
          ko: '• 내 업무 중 AI가 못하는 부분이 뭔지 목록 만들기\n• ChatGPT를 오늘 업무에 하나라도 써보기\n• AI가 강화시켜주는 방향으로 역할 재정의 고민 시작하기',
          en: "• Make a list of parts of your work AI can't do\n• Try using ChatGPT for at least one task today\n• Start thinking about redefining your role in a direction AI can strengthen",
          ja: '• 自分の業務のうちAIができない部分をリストアップする\n• 今日の業務で一つでもChatGPTを使ってみる\n• AIが強化してくれる方向へ役割を再定義することを考え始める',
          'zh-CN': '• 列出自己工作中AI做不到的部分\n• 今天至少在一项工作中尝试使用ChatGPT\n• 开始思考朝着AI能强化的方向重新定义自己的角色',
          'zh-TW': '• 列出自己工作中AI做不到的部分\n• 今天至少在一項工作中嘗試使用ChatGPT\n• 開始思考朝著AI能強化的方向重新定義自己的角色',
          vi: '• Lập danh sách những phần công việc mà AI không thể làm\n• Thử dùng ChatGPT cho ít nhất một việc hôm nay\n• Bắt đầu suy nghĩ về việc định nghĩa lại vai trò theo hướng AI có thể tăng cường',
          id: '• Buat daftar bagian pekerjaan Anda yang tidak bisa dilakukan AI\n• Coba gunakan ChatGPT untuk setidaknya satu tugas hari ini\n• Mulai memikirkan cara mendefinisikan ulang peran Anda ke arah yang diperkuat oleh AI',
        }
      ),
      section(
        {
          ko: '🚨 한 줄 경고',
          en: '🚨 One-Line Warning',
          ja: '🚨 一言警告',
          'zh-CN': '🚨 一句话警告',
          'zh-TW': '🚨 一句話警告',
          vi: '🚨 Cảnh báo ngắn',
          id: '🚨 Peringatan Singkat',
        },
        {
          ko: '5년 후 당신의 직업이 지금과 같은 형태로 있을 거라고 확신할 수 없습니다. 오늘부터 움직이세요',
          en: "You can't be sure your job will still look the same in 5 years. Start moving today",
          ja: '5年後、あなたの職業が今と同じ形で存在しているとは確信できません。今日から動いてください',
          'zh-CN': '无法确定5年后你的职业还会以现在的形式存在。从今天开始行动吧',
          'zh-TW': '無法確定5年後你的職業還會以現在的形式存在。從今天開始行動吧',
          vi: 'Không thể chắc chắn rằng công việc của bạn sau 5 năm nữa vẫn tồn tại dưới hình thức như hiện tại. Hãy hành động ngay từ hôm nay',
          id: 'Anda tidak bisa yakin pekerjaan Anda akan tetap sama dalam 5 tahun. Mulai bergerak dari hari ini',
        }
      ),
    ],
    shareMessage: L({
      ko: 'AI 시대 직업 생존 점수: 15점 🔴 솔직히 무섭다... 내 일 AI한테 뺏길 수 있다는 거 오늘 실감함 → 너는 몇 점이야? 안도감 vs 위기감 확인해봐',
      en: "AI Era Job Survival Score: 15 🔴 Honestly scary... today I realized AI could really take my job → What's your score? Check relief vs crisis",
      ja: 'AI時代 職業生存スコア: 15点 🔴 正直怖い…自分の仕事がAIに奪われるかもと今日実感した → あなたは何点？安心感vs危機感を確認してみて',
      'zh-CN': 'AI时代职业生存分数：15分 🔴 说实话有点吓人…今天真切感受到我的工作可能被AI取代 → 你多少分？看看是安心还是危机感',
      'zh-TW': 'AI時代職業生存分數：15分 🔴 說實話有點嚇人…今天真切感受到我的工作可能被AI取代 → 你多少分？看看是安心還是危機感',
      vi: 'Điểm sống còn nghề nghiệp thời AI: 15 điểm 🔴 Thật lòng thấy sợ... hôm nay tôi nhận ra công việc của mình có thể bị AI cướp mất → Bạn được mấy điểm? Kiểm tra xem an tâm hay khủng hoảng',
      id: 'Skor Kelangsungan Karier Era AI: 15 🔴 Sejujurnya menakutkan... hari ini saya sadar pekerjaan saya bisa direbut AI → Berapa skormu? Cek rasa lega vs krisis',
    }),
  },
  {
    type: 'Type2',
    emoji: '🟠',
    title: L({
      ko: '주의 필요, 직업 생존 점수 35점',
      en: 'Caution Needed: Job Survival Score 35',
      ja: '注意が必要、職業生存スコア35点',
      'zh-CN': '需要注意，职业生存分数35分',
      'zh-TW': '需要注意，職業生存分數35分',
      vi: 'Cần chú ý, điểm sống còn nghề nghiệp 35 điểm',
      id: 'Perlu Waspada, Skor Kelangsungan Karier 35',
    }),
    shortDescription: L({
      ko: '완전히 안전하지는 않습니다. AI가 점점 할 수 있는 영역이 늘어나고 있습니다.',
      en: 'Not completely safe. The areas AI can handle are steadily expanding.',
      ja: '完全に安全ではありません。AIができる領域は徐々に増えています。',
      'zh-CN': '并不完全安全。AI能够胜任的领域正在不断增加。',
      'zh-TW': '並不完全安全。AI能夠勝任的領域正在不斷增加。',
      vi: 'Không hoàn toàn an toàn. Phạm vi mà AI có thể làm được đang dần mở rộng.',
      id: 'Belum benar-benar aman. Area yang bisa dikerjakan AI semakin bertambah.',
    }),
    description: L({
      ko: '일부 업무는 AI 대체 위험이 있고 새로운 기술 학습이 부족하며 AI 도구 활용이 아직 미흡한 단계입니다. 지금 당장은 괜찮아 보이지만 2~3년 후를 생각하면 준비가 필요합니다.',
      en: "Some of your work has AI replacement risk, new tech learning is lacking, and AI tool use is still insufficient. It may seem fine right now, but you need to prepare with 2-3 years from now in mind.",
      ja: '一部の業務にはAI代替リスクがあり、新しい技術の学習が不足し、AIツールの活用もまだ不十分な段階です。今のところは大丈夫に見えますが、2〜3年後を考えると準備が必要です。',
      'zh-CN': '部分工作存在被AI取代的风险，新技术学习不足，AI工具的运用也还不充分。现在看起来还好，但考虑到2~3年后，需要做好准备。',
      'zh-TW': '部分工作存在被AI取代的風險，新技術學習不足，AI工具的運用也還不充分。現在看起來還好，但考慮到2~3年後，需要做好準備。',
      vi: 'Một số công việc có nguy cơ bị AI thay thế, việc học công nghệ mới còn thiếu, và việc sử dụng công cụ AI vẫn chưa đủ. Hiện tại có vẻ ổn nhưng cần chuẩn bị cho 2-3 năm tới.',
      id: 'Sebagian pekerjaan Anda memiliki risiko digantikan AI, pembelajaran teknologi baru masih kurang, dan penggunaan alat AI masih belum memadai. Saat ini mungkin terlihat baik-baik saja, tapi Anda perlu bersiap untuk 2-3 tahun mendatang.',
    }),
    survivalScore: L({
      ko: '35/100',
      en: '35/100',
      ja: '35/100',
      'zh-CN': '35/100',
      'zh-TW': '35/100',
      vi: '35/100',
      id: '35/100',
    }),
    aiRiskLevel: L({
      ko: '높음',
      en: 'High',
      ja: '高い',
      'zh-CN': '高',
      'zh-TW': '高',
      vi: 'Cao',
      id: 'Tinggi',
    }),
    sections: [
      section(
        {
          ko: '⚠️ 핵심 문제',
          en: '⚠️ The Core Problem',
          ja: '⚠️ 核心的な問題',
          'zh-CN': '⚠️ 核心问题',
          'zh-TW': '⚠️ 核心問題',
          vi: '⚠️ Vấn đề cốt lõi',
          id: '⚠️ Masalah Utama',
        },
        {
          ko: 'AI가 내 역할의 일부를 이미 대체할 수 있는 상황',
          en: 'AI can already replace part of your role',
          ja: 'AIが既に自分の役割の一部を代替できる状況',
          'zh-CN': 'AI已经能够取代你部分角色的现状',
          'zh-TW': 'AI已經能夠取代你部分角色的現狀',
          vi: 'Tình huống mà AI đã có thể thay thế một phần vai trò của bạn',
          id: 'Situasi di mana AI sudah bisa menggantikan sebagian peran Anda',
        }
      ),
      section(
        {
          ko: '✅ 지금 당장 해야 할 것',
          en: '✅ What to Do Right Now',
          ja: '✅ 今すぐすべきこと',
          'zh-CN': '✅ 现在立刻要做的事',
          'zh-TW': '✅ 現在立刻要做的事',
          vi: '✅ Việc cần làm ngay bây giờ',
          id: '✅ Yang Harus Dilakukan Sekarang',
        },
        {
          ko: '• 내 직종에서 AI 활용 사례 찾아보기\n• 반복 업무는 AI에게 위임하고 나는 더 높은 가치 업무에 집중하는 전환 시작\n• 1가지 AI 도구를 업무에 정식으로 도입해보기',
          en: '• Look for AI use cases in your field\n• Start delegating repetitive tasks to AI and focus on higher-value work\n• Formally adopt one AI tool into your workflow',
          ja: '• 自分の職種でのAI活用事例を探す\n• 繰り返し業務はAIに任せ、自分はより高い価値の業務に集中する転換を始める\n• 1つのAIツールを業務に正式に導入してみる',
          'zh-CN': '• 寻找自己行业中的AI应用案例\n• 开始把重复性工作交给AI，自己专注于更高价值的工作\n• 正式在工作中引入一款AI工具',
          'zh-TW': '• 尋找自己行業中的AI應用案例\n• 開始把重複性工作交給AI，自己專注於更高價值的工作\n• 正式在工作中引入一款AI工具',
          vi: '• Tìm các trường hợp ứng dụng AI trong ngành của bạn\n• Bắt đầu chuyển giao công việc lặp lại cho AI và tập trung vào công việc giá trị cao hơn\n• Chính thức áp dụng một công cụ AI vào công việc',
          id: '• Cari contoh penggunaan AI di bidang Anda\n• Mulai mendelegasikan tugas berulang ke AI dan fokus pada pekerjaan bernilai lebih tinggi\n• Terapkan satu alat AI secara resmi dalam pekerjaan Anda',
        }
      ),
      section(
        {
          ko: '🚨 한 줄 경고',
          en: '🚨 One-Line Warning',
          ja: '🚨 一言警告',
          'zh-CN': '🚨 一句话警告',
          'zh-TW': '🚨 一句話警告',
          vi: '🚨 Cảnh báo ngắn',
          id: '🚨 Peringatan Singkat',
        },
        {
          ko: '지금 시작하면 늦지 않습니다. 1년 후는 너무 늦을 수 있습니다',
          en: "Starting now isn't too late. A year from now might be too late",
          ja: '今始めれば遅くありません。1年後では遅すぎるかもしれません',
          'zh-CN': '现在开始还不算晚。一年后可能就太晚了',
          'zh-TW': '現在開始還不算晚。一年後可能就太晚了',
          vi: 'Bắt đầu ngay bây giờ vẫn chưa muộn. Một năm sau có thể sẽ quá muộn',
          id: 'Memulai sekarang belum terlambat. Satu tahun lagi bisa jadi sudah terlambat',
        }
      ),
    ],
    shareMessage: L({
      ko: 'AI 시대 직업 생존 점수: 35점 🟠 당장은 아닌데 2~3년 후가 걱정되는 수준이래... 오늘부터 AI 도구 써봐야겠다 → 너는 몇 점이야?',
      en: "AI Era Job Survival Score: 35 🟠 Not urgent now, but apparently 2-3 years from now is worrying... guess I should start using AI tools today → What's your score?",
      ja: 'AI時代 職業生存スコア: 35点 🟠 今すぐではないけど2〜3年後が心配なレベルらしい…今日からAIツール使ってみようかな → あなたは何点？',
      'zh-CN': 'AI时代职业生存分数：35分 🟠 现在还好，但据说2~3年后要担心了…看来今天就该开始用AI工具了 → 你多少分？',
      'zh-TW': 'AI時代職業生存分數：35分 🟠 現在還好，但據說2~3年後要擔心了…看來今天就該開始用AI工具了 → 你多少分？',
      vi: 'Điểm sống còn nghề nghiệp thời AI: 35 điểm 🟠 Chưa gấp ngay nhưng nghe nói 2-3 năm nữa sẽ đáng lo... có lẽ nên dùng công cụ AI từ hôm nay → Bạn được mấy điểm?',
      id: 'Skor Kelangsungan Karier Era AI: 35 🟠 Belum mendesak sekarang, tapi katanya 2-3 tahun lagi perlu waspada... sepertinya harus mulai pakai alat AI dari hari ini → Berapa skormu?',
    }),
  },
  {
    type: 'Type3',
    emoji: '🟡',
    title: L({
      ko: '적응 중, 직업 생존 점수 55점',
      en: 'Adapting: Job Survival Score 55',
      ja: '適応中、職業生存スコア55点',
      'zh-CN': '适应中，职业生存分数55分',
      'zh-TW': '適應中，職業生存分數55分',
      vi: 'Đang thích nghi, điểm sống còn nghề nghiệp 55 điểm',
      id: 'Sedang Beradaptasi, Skor Kelangsungan Karier 55',
    }),
    shortDescription: L({
      ko: 'AI 시대에 살아남을 가능성이 있습니다. 그러나 더 적극적인 준비가 필요합니다.',
      en: 'You have a chance to survive the AI era. But you need more proactive preparation.',
      ja: 'AI時代に生き残る可能性があります。しかし、より積極的な準備が必要です。',
      'zh-CN': '你有可能在AI时代生存下来，但需要更积极的准备。',
      'zh-TW': '你有可能在AI時代生存下來，但需要更積極的準備。',
      vi: 'Bạn có khả năng tồn tại trong thời đại AI. Nhưng cần chuẩn bị tích cực hơn.',
      id: 'Anda punya kemungkinan untuk bertahan di era AI. Namun perlu persiapan yang lebih proaktif.',
    }),
    description: L({
      ko: '반복 업무와 판단 업무가 공존하고 AI 도구를 어느 정도 활용하며 변화에 대한 인식이 있는 단계입니다. 방향은 맞습니다. 속도를 높이는 것이 관건입니다.',
      en: "You're at a stage where repetitive and judgment-based work coexist, you use AI tools to some extent, and you're aware of the change. Your direction is right. Picking up the pace is key.",
      ja: '繰り返し業務と判断業務が共存し、AIツールをある程度活用し、変化への認識がある段階です。方向は合っています。スピードを上げることが鍵です。',
      'zh-CN': '重复性工作和判断性工作并存，一定程度地使用AI工具，并对变化有所认识的阶段。方向是对的，关键在于加快速度。',
      'zh-TW': '重複性工作和判斷性工作並存，一定程度地使用AI工具，並對變化有所認識的階段。方向是對的，關鍵在於加快速度。',
      vi: 'Đây là giai đoạn công việc lặp lại và công việc phán đoán cùng tồn tại, sử dụng công cụ AI ở một mức độ nào đó, và có nhận thức về sự thay đổi. Hướng đi đúng. Vấn đề là cần tăng tốc.',
      id: 'Ini adalah tahap di mana pekerjaan berulang dan pekerjaan yang membutuhkan penilaian berdampingan, Anda menggunakan alat AI sampai batas tertentu, dan Anda menyadari adanya perubahan. Arah Anda sudah benar. Kuncinya adalah meningkatkan kecepatan.',
    }),
    survivalScore: L({
      ko: '55/100',
      en: '55/100',
      ja: '55/100',
      'zh-CN': '55/100',
      'zh-TW': '55/100',
      vi: '55/100',
      id: '55/100',
    }),
    aiRiskLevel: L({
      ko: '중간',
      en: 'Medium',
      ja: '中程度',
      'zh-CN': '中等',
      'zh-TW': '中等',
      vi: 'Trung bình',
      id: 'Sedang',
    }),
    sections: [
      section(
        {
          ko: '💪 강점',
          en: '💪 Strength',
          ja: '💪 強み',
          'zh-CN': '💪 优势',
          'zh-TW': '💪 優勢',
          vi: '💪 Điểm mạnh',
          id: '💪 Kekuatan',
        },
        {
          ko: 'AI 변화를 인식하고 있음·일부 도구 활용 중',
          en: 'Aware of AI-driven change, using some tools already',
          ja: 'AIの変化を認識している・一部ツールを活用中',
          'zh-CN': '认识到AI变化・正在使用部分工具',
          'zh-TW': '認識到AI變化・正在使用部分工具',
          vi: 'Nhận thức được sự thay đổi của AI・đang sử dụng một số công cụ',
          id: 'Menyadari perubahan AI・sedang menggunakan sebagian alat',
        }
      ),
      section(
        {
          ko: '⚠️ 약점',
          en: '⚠️ Weakness',
          ja: '⚠️ 弱み',
          'zh-CN': '⚠️ 弱点',
          'zh-TW': '⚠️ 弱點',
          vi: '⚠️ Điểm yếu',
          id: '⚠️ Kelemahan',
        },
        {
          ko: '아직 AI를 전략적으로 활용하는 수준은 아님',
          en: 'Not yet at the level of using AI strategically',
          ja: 'まだAIを戦略的に活用するレベルではない',
          'zh-CN': '尚未达到战略性运用AI的水平',
          'zh-TW': '尚未達到戰略性運用AI的水平',
          vi: 'Chưa đạt đến mức sử dụng AI một cách chiến lược',
          id: 'Belum berada di level memanfaatkan AI secara strategis',
        }
      ),
      section(
        {
          ko: '✅ 지금 당장 해야 할 것',
          en: '✅ What to Do Right Now',
          ja: '✅ 今すぐすべきこと',
          'zh-CN': '✅ 现在立刻要做的事',
          'zh-TW': '✅ 現在立刻要做的事',
          vi: '✅ Việc cần làm ngay bây giờ',
          id: '✅ Yang Harus Dilakukan Sekarang',
        },
        {
          ko: '• AI를 활용해 내 아웃풋을 2배로 만드는 방법 찾기\n• 내 분야에서 AI가 강화시켜주는 역할이 무엇인지 파악하기\n• 판단·전략·관계 영역 역량을 더 의식적으로 키우기',
          en: '• Find ways to double your output using AI\n• Identify which role AI strengthens in your field\n• Consciously build judgment, strategy, and relationship skills',
          ja: '• AIを活用してアウトプットを2倍にする方法を探す\n• 自分の分野でAIが強化してくれる役割は何かを把握する\n• 判断・戦略・関係の領域の能力をより意識的に伸ばす',
          'zh-CN': '• 寻找利用AI让产出翻倍的方法\n• 弄清楚在自己领域AI能强化的角色是什么\n• 更有意识地培养判断、战略、关系方面的能力',
          'zh-TW': '• 尋找利用AI讓產出翻倍的方法\n• 弄清楚在自己領域AI能強化的角色是什麼\n• 更有意識地培養判斷、戰略、關係方面的能力',
          vi: '• Tìm cách sử dụng AI để tăng gấp đôi hiệu suất công việc\n• Xác định vai trò mà AI có thể tăng cường trong lĩnh vực của bạn\n• Rèn luyện có ý thức các năng lực phán đoán, chiến lược và quan hệ',
          id: '• Cari cara menggunakan AI untuk melipatgandakan output Anda\n• Kenali peran apa yang diperkuat AI di bidang Anda\n• Bangun kemampuan penilaian, strategi, dan hubungan secara lebih sadar',
        }
      ),
      section(
        {
          ko: '💬 한 줄 평',
          en: '💬 One-Line Comment',
          ja: '💬 一言コメント',
          'zh-CN': '💬 一句话点评',
          'zh-TW': '💬 一句話點評',
          vi: '💬 Nhận xét ngắn',
          id: '💬 Komentar Singkat',
        },
        {
          ko: '중간 구간은 가장 변화가 빠른 구간입니다. 지금 속도를 높이세요',
          en: 'The middle range changes the fastest. Pick up your pace now',
          ja: '中間区間は最も変化が速い区間です。今すぐスピードを上げてください',
          'zh-CN': '中间区间是变化最快的区间。现在就加快速度吧',
          'zh-TW': '中間區間是變化最快的區間。現在就加快速度吧',
          vi: 'Nhóm trung bình là nhóm biến đổi nhanh nhất. Hãy tăng tốc ngay bây giờ',
          id: 'Rentang tengah adalah rentang yang paling cepat berubah. Tingkatkan kecepatan Anda sekarang',
        }
      ),
    ],
    shareMessage: L({
      ko: 'AI 시대 직업 생존 점수: 55점 🟡 적응 중인 유형... 방향은 맞는데 속도를 높여야 한다는 거 → 너는 몇 점이야? 내 직업 안전한지 확인해봐',
      en: "AI Era Job Survival Score: 55 🟡 The adapting type... my direction's right but I need to pick up the pace → What's your score? Check if your job is safe",
      ja: 'AI時代 職業生存スコア: 55点 🟡 適応中タイプ…方向は合ってるけどスピードを上げる必要があるらしい → あなたは何点？自分の職業が安全か確認してみて',
      'zh-CN': 'AI时代职业生存分数：55分 🟡 适应中类型…方向对了但要加快速度 → 你多少分？看看自己的职业安不安全',
      'zh-TW': 'AI時代職業生存分數：55分 🟡 適應中類型…方向對了但要加快速度 → 你多少分？看看自己的職業安不安全',
      vi: 'Điểm sống còn nghề nghiệp thời AI: 55 điểm 🟡 Kiểu đang thích nghi... hướng đi đúng nhưng cần tăng tốc → Bạn được mấy điểm? Kiểm tra xem công việc của bạn có an toàn không',
      id: 'Skor Kelangsungan Karier Era AI: 55 🟡 Tipe sedang beradaptasi... arahnya benar tapi perlu tingkatkan kecepatan → Berapa skormu? Cek apakah pekerjaanmu aman',
    }),
  },
  {
    type: 'Type4',
    emoji: '🟢',
    title: L({
      ko: '경쟁력 보유, 직업 생존 점수 72점',
      en: 'Competitive Edge: Job Survival Score 72',
      ja: '競争力保有、職業生存スコア72点',
      'zh-CN': '具备竞争力，职业生存分数72分',
      'zh-TW': '具備競爭力，職業生存分數72分',
      vi: 'Có năng lực cạnh tranh, điểm sống còn nghề nghiệp 72 điểm',
      id: 'Memiliki Daya Saing, Skor Kelangsungan Karier 72',
    }),
    shortDescription: L({
      ko: 'AI 시대에도 당신의 역할은 유효합니다. AI를 활용하면 오히려 더 강해집니다.',
      en: 'Your role remains valid even in the AI era. Using AI will only make you stronger.',
      ja: 'AI時代でもあなたの役割は有効です。AIを活用すればむしろより強くなります。',
      'zh-CN': '即使在AI时代，你的角色依然有效。善用AI反而会让你更强大。',
      'zh-TW': '即使在AI時代，你的角色依然有效。善用AI反而會讓你更強大。',
      vi: 'Vai trò của bạn vẫn có giá trị ngay cả trong thời đại AI. Sử dụng AI sẽ khiến bạn càng mạnh mẽ hơn.',
      id: 'Peran Anda tetap relevan bahkan di era AI. Memanfaatkan AI justru akan membuat Anda lebih kuat.',
    }),
    description: L({
      ko: '사람과의 관계·맥락 판단·창의적 문제 정의가 업무 핵심이고 AI 도구를 실제로 활용하고 있으며 변화를 기회로 인식하는 단계입니다. AI가 대체하기 어려운 영역에서 일하고 있습니다.',
      en: 'Relationships with people, contextual judgment, and creative problem definition are the core of your work, you actually use AI tools, and you see change as an opportunity. You work in an area AI finds hard to replace.',
      ja: '人との関係・文脈判断・創造的な問題定義が業務の核心であり、実際にAIツールを活用し、変化を機会として認識している段階です。AIが代替しにくい領域で働いています。',
      'zh-CN': '与人的关系、情境判断、创造性问题定义是工作核心，实际在使用AI工具，并把变化视为机会的阶段。你正在AI难以取代的领域工作。',
      'zh-TW': '與人的關係、情境判斷、創造性問題定義是工作核心，實際在使用AI工具，並把變化視為機會的階段。你正在AI難以取代的領域工作。',
      vi: 'Quan hệ với con người, phán đoán bối cảnh và định nghĩa vấn đề sáng tạo là trọng tâm công việc, bạn thực sự đang sử dụng công cụ AI và coi sự thay đổi là cơ hội. Bạn đang làm việc trong lĩnh vực AI khó thay thế.',
      id: 'Hubungan dengan orang lain, penilaian kontekstual, dan mendefinisikan masalah secara kreatif adalah inti pekerjaan Anda, Anda benar-benar menggunakan alat AI, dan Anda melihat perubahan sebagai peluang. Anda bekerja di area yang sulit digantikan AI.',
    }),
    survivalScore: L({
      ko: '72/100',
      en: '72/100',
      ja: '72/100',
      'zh-CN': '72/100',
      'zh-TW': '72/100',
      vi: '72/100',
      id: '72/100',
    }),
    aiRiskLevel: L({
      ko: '낮음',
      en: 'Low',
      ja: '低い',
      'zh-CN': '低',
      'zh-TW': '低',
      vi: 'Thấp',
      id: 'Rendah',
    }),
    sections: [
      section(
        {
          ko: '💪 강점',
          en: '💪 Strength',
          ja: '💪 強み',
          'zh-CN': '💪 优势',
          'zh-TW': '💪 優勢',
          vi: '💪 Điểm mạnh',
          id: '💪 Kekuatan',
        },
        {
          ko: 'AI 대체 어려운 역량 보유·도구 활용 능력·변화 적응력',
          en: 'AI-resistant skills, tool proficiency, and adaptability to change',
          ja: 'AI代替が難しい能力保有・ツール活用能力・変化適応力',
          'zh-CN': '拥有AI难以取代的能力・工具运用能力・变化适应力',
          'zh-TW': '擁有AI難以取代的能力・工具運用能力・變化適應力',
          vi: 'Có năng lực khó bị AI thay thế・khả năng sử dụng công cụ・khả năng thích nghi với thay đổi',
          id: 'Memiliki kemampuan yang sulit digantikan AI・kemampuan menggunakan alat・daya adaptasi terhadap perubahan',
        }
      ),
      section(
        {
          ko: '📋 남은 과제',
          en: '📋 Remaining Task',
          ja: '📋 残る課題',
          'zh-CN': '📋 待完成课题',
          'zh-TW': '📋 待完成課題',
          vi: '📋 Nhiệm vụ còn lại',
          id: '📋 Tugas yang Tersisa',
        },
        {
          ko: 'AI 활용을 더 전략적으로 확대해 생산성을 극대화하기',
          en: 'Expand AI use more strategically to maximize productivity',
          ja: 'AI活用をより戦略的に拡大し、生産性を最大化すること',
          'zh-CN': '更战略性地扩大AI运用，最大化生产力',
          'zh-TW': '更戰略性地擴大AI運用，最大化生產力',
          vi: 'Mở rộng việc sử dụng AI một cách chiến lược hơn để tối đa hóa năng suất',
          id: 'Perluas penggunaan AI secara lebih strategis untuk memaksimalkan produktivitas',
        }
      ),
      section(
        {
          ko: '✅ 지금 당장 해야 할 것',
          en: '✅ What to Do Right Now',
          ja: '✅ 今すぐすべきこと',
          'zh-CN': '✅ 现在立刻要做的事',
          'zh-TW': '✅ 現在立刻要做的事',
          vi: '✅ Việc cần làm ngay bây giờ',
          id: '✅ Yang Harus Dilakukan Sekarang',
        },
        {
          ko: '• 현재 AI 활용 범위를 더 확장하기. 내가 AI를 더 잘 쓸수록 경쟁자와 격차가 벌어짐\n• AI 대체 불가 영역 역량을 더 의식적으로 키우고 포트폴리오화하기',
          en: '• Expand your current use of AI further. The better you use AI, the wider your gap over competitors\n• Consciously build and showcase your AI-resistant capabilities',
          ja: '• 現在のAI活用範囲をさらに拡大する。自分がAIをより上手く使えば競争相手との差が広がる\n• AI代替不可能な領域の能力をより意識的に伸ばし、ポートフォリオ化する',
          'zh-CN': '• 进一步扩大目前AI的运用范围。你越擅长使用AI，与竞争者的差距就越大\n• 更有意识地培养AI无法取代的能力，并将其做成作品集',
          'zh-TW': '• 進一步擴大目前AI的運用範圍。你越擅長使用AI，與競爭者的差距就越大\n• 更有意識地培養AI無法取代的能力，並將其做成作品集',
          vi: '• Mở rộng hơn nữa phạm vi sử dụng AI hiện tại. Bạn dùng AI tốt hơn thì khoảng cách với đối thủ càng lớn\n• Xây dựng có ý thức và thể hiện các năng lực mà AI không thể thay thế',
          id: '• Perluas lagi jangkauan penggunaan AI Anda saat ini. Semakin baik Anda menggunakan AI, semakin besar jarak Anda dengan pesaing\n• Bangun secara sadar dan tampilkan kemampuan Anda yang tidak bisa digantikan AI',
        }
      ),
      section(
        {
          ko: '💬 한 줄 평',
          en: '💬 One-Line Comment',
          ja: '💬 一言コメント',
          'zh-CN': '💬 一句话点评',
          'zh-TW': '💬 一句話點評',
          vi: '💬 Nhận xét ngắn',
          id: '💬 Komentar Singkat',
        },
        {
          ko: 'AI 시대에 당신은 뒤처지지 않습니다. 이제 앞서 나가는 단계입니다',
          en: "You're not falling behind in the AI era. Now it's time to get ahead",
          ja: 'AI時代にあなたは遅れをとりません。今こそ先を行く段階です',
          'zh-CN': '在AI时代你不会被落下。现在是领先一步的阶段',
          'zh-TW': '在AI時代你不會被落下。現在是領先一步的階段',
          vi: 'Bạn không bị tụt hậu trong thời đại AI. Giờ là lúc để vượt lên phía trước',
          id: 'Anda tidak tertinggal di era AI. Sekarang adalah saatnya untuk melangkah lebih maju',
        }
      ),
    ],
    shareMessage: L({
      ko: 'AI 시대 직업 생존 점수: 72점 🟢 AI 시대에 경쟁력 있는 유형이래... 일단 안도함 ㅋㅋ → 너는 몇 점이야? 직장 동료한테 보내봐',
      en: "AI Era Job Survival Score: 72 🟢 Apparently I'm the competitive type in the AI era... feeling relieved lol → What's your score? Send it to a coworker",
      ja: 'AI時代 職業生存スコア: 72点 🟢 AI時代に競争力があるタイプらしい…とりあえず安心www → あなたは何点？会社の同僚に送ってみて',
      'zh-CN': 'AI时代职业生存分数：72分 🟢 据说是AI时代有竞争力的类型…先松了一口气哈哈 → 你多少分？发给同事看看',
      'zh-TW': 'AI時代職業生存分數：72分 🟢 據說是AI時代有競爭力的類型…先鬆了一口氣哈哈 → 你多少分？發給同事看看',
      vi: 'Điểm sống còn nghề nghiệp thời AI: 72 điểm 🟢 Nghe nói là kiểu có năng lực cạnh tranh trong thời đại AI... tạm thở phào nhẹ nhõm haha → Bạn được mấy điểm? Gửi cho đồng nghiệp xem thử',
      id: 'Skor Kelangsungan Karier Era AI: 72 🟢 Katanya ini tipe yang kompetitif di era AI... untuk sekarang agak lega hehe → Berapa skormu? Coba kirim ke rekan kerja',
    }),
  },
  {
    type: 'Type5',
    emoji: '🔵',
    title: L({
      ko: 'AI와 협력하는 레벨, 직업 생존 점수 88점',
      en: 'AI Collaboration Level: Job Survival Score 88',
      ja: 'AIと協力するレベル、職業生存スコア88点',
      'zh-CN': '与AI协作的水平，职业生存分数88分',
      'zh-TW': '與AI協作的水平，職業生存分數88分',
      vi: 'Cấp độ hợp tác với AI, điểm sống còn nghề nghiệp 88 điểm',
      id: 'Level Berkolaborasi dengan AI, Skor Kelangsungan Karier 88',
    }),
    shortDescription: L({
      ko: 'AI가 당신의 경쟁자가 아니라 도구입니다. AI를 쓰는 당신이 안 쓰는 사람보다 훨씬 강합니다.',
      en: "AI isn't your competitor—it's your tool. You, who use AI, are far stronger than those who don't.",
      ja: 'AIはあなたの競争相手ではなく道具です。AIを使うあなたは使わない人よりずっと強いです。',
      'zh-CN': 'AI不是你的竞争对手，而是工具。使用AI的你比不使用的人强得多。',
      'zh-TW': 'AI不是你的競爭對手，而是工具。使用AI的你比不使用的人強得多。',
      vi: 'AI không phải là đối thủ của bạn mà là công cụ. Bạn, người sử dụng AI, mạnh hơn rất nhiều so với người không sử dụng.',
      id: 'AI bukan pesaing Anda, melainkan alat. Anda yang menggunakan AI jauh lebih kuat dibanding yang tidak.',
    }),
    description: L({
      ko: 'AI 도구를 적극 활용하면서 AI가 대체하기 어려운 전략·관계·창의 영역에서 역량을 키우고 있습니다. AI 시대에 가장 경쟁력 있는 포지션 중 하나입니다.',
      en: "You actively use AI tools while building capabilities in strategy, relationships, and creativity—areas AI struggles to replace. This is one of the most competitive positions in the AI era.",
      ja: 'AIツールを積極的に活用しながら、AIが代替しにくい戦略・関係・創造性の領域で能力を伸ばしています。AI時代において最も競争力のあるポジションの一つです。',
      'zh-CN': '积极运用AI工具，同时在AI难以取代的战略、关系、创意领域培养能力。这是AI时代最具竞争力的位置之一。',
      'zh-TW': '積極運用AI工具，同時在AI難以取代的戰略、關係、創意領域培養能力。這是AI時代最具競爭力的位置之一。',
      vi: 'Bạn tích cực sử dụng công cụ AI, đồng thời phát triển năng lực trong các lĩnh vực chiến lược, quan hệ và sáng tạo—những lĩnh vực AI khó thay thế. Đây là một trong những vị trí có năng lực cạnh tranh nhất trong thời đại AI.',
      id: 'Anda aktif menggunakan alat AI sambil membangun kemampuan di bidang strategi, hubungan, dan kreativitas—area yang sulit digantikan AI. Ini adalah salah satu posisi paling kompetitif di era AI.',
    }),
    survivalScore: L({
      ko: '88/100',
      en: '88/100',
      ja: '88/100',
      'zh-CN': '88/100',
      'zh-TW': '88/100',
      vi: '88/100',
      id: '88/100',
    }),
    aiRiskLevel: L({
      ko: '매우 낮음',
      en: 'Very Low',
      ja: '非常に低い',
      'zh-CN': '非常低',
      'zh-TW': '非常低',
      vi: 'Rất thấp',
      id: 'Sangat Rendah',
    }),
    sections: [
      section(
        {
          ko: '💪 강점',
          en: '💪 Strength',
          ja: '💪 強み',
          'zh-CN': '💪 优势',
          'zh-TW': '💪 優勢',
          vi: '💪 Điểm mạnh',
          id: '💪 Kekuatan',
        },
        {
          ko: 'AI 활용 + AI 대체 불가 역량의 강력한 조합',
          en: 'A powerful combination of AI use and AI-resistant capabilities',
          ja: 'AI活用+AI代替不可能な能力の強力な組み合わせ',
          'zh-CN': 'AI运用+AI无法取代的能力的强大组合',
          'zh-TW': 'AI運用+AI無法取代的能力的強大組合',
          vi: 'Sự kết hợp mạnh mẽ giữa việc sử dụng AI và năng lực AI không thể thay thế',
          id: 'Kombinasi kuat antara penggunaan AI dan kemampuan yang tidak bisa digantikan AI',
        }
      ),
      section(
        {
          ko: '📋 남은 과제',
          en: '📋 Remaining Task',
          ja: '📋 残る課題',
          'zh-CN': '📋 待完成课题',
          'zh-TW': '📋 待完成課題',
          vi: '📋 Nhiệm vụ còn lại',
          id: '📋 Tugas yang Tersisa',
        },
        {
          ko: 'AI 기술 변화 속도에 맞춰 계속 업데이트하기. 지금의 강점도 2~3년 후 재점검 필요',
          en: "Keep updating at the pace of AI technology change. Even today's strengths need re-evaluation in 2-3 years",
          ja: 'AI技術の変化速度に合わせて継続的に更新すること。今の強みも2〜3年後に再点検が必要',
          'zh-CN': '跟上AI技术变化的速度持续更新。即使现在的优势，2~3年后也需要重新检视',
          'zh-TW': '跟上AI技術變化的速度持續更新。即使現在的優勢，2~3年後也需要重新檢視',
          vi: 'Tiếp tục cập nhật theo tốc độ thay đổi của công nghệ AI. Ngay cả điểm mạnh hiện tại cũng cần được kiểm tra lại sau 2-3 năm',
          id: 'Terus memperbarui diri sesuai kecepatan perubahan teknologi AI. Kekuatan Anda saat ini pun perlu dievaluasi ulang dalam 2-3 tahun',
        }
      ),
      section(
        {
          ko: '✅ 지금 당장 해야 할 것',
          en: '✅ What to Do Right Now',
          ja: '✅ 今すぐすべきこと',
          'zh-CN': '✅ 现在立刻要做的事',
          'zh-TW': '✅ 現在立刻要做的事',
          vi: '✅ Việc cần làm ngay bây giờ',
          id: '✅ Yang Harus Dilakukan Sekarang',
        },
        {
          ko: '• 내 분야에서 AI를 가장 잘 쓰는 사람이 되기 위한 다음 도구 찾기\n• 주변에 AI 활용 방법을 공유하고 가르치는 것이 자신의 전문성을 더 높여줌',
          en: '• Find the next tool to become the best AI user in your field\n• Sharing and teaching AI use to others further boosts your own expertise',
          ja: '• 自分の分野でAIを最も上手く使う人になるための次のツールを探す\n• 周りにAI活用法を共有し教えることが自分の専門性をさらに高める',
          'zh-CN': '• 寻找下一个能让你在自己领域成为最会用AI的人的工具\n• 与身边人分享并教授AI使用方法，会进一步提升自己的专业度',
          'zh-TW': '• 尋找下一個能讓你在自己領域成為最會用AI的人的工具\n• 與身邊人分享並教授AI使用方法，會進一步提升自己的專業度',
          vi: '• Tìm công cụ tiếp theo để trở thành người dùng AI tốt nhất trong lĩnh vực của bạn\n• Chia sẻ và hướng dẫn cách sử dụng AI cho người khác sẽ càng nâng cao chuyên môn của bản thân',
          id: '• Cari alat berikutnya untuk menjadi orang yang paling mahir menggunakan AI di bidang Anda\n• Membagikan dan mengajarkan cara menggunakan AI kepada orang lain akan semakin meningkatkan keahlian Anda',
        }
      ),
      section(
        {
          ko: '💬 한 줄 평',
          en: '💬 One-Line Comment',
          ja: '💬 一言コメント',
          'zh-CN': '💬 一句话点评',
          'zh-TW': '💬 一句話點評',
          vi: '💬 Nhận xét ngắn',
          id: '💬 Komentar Singkat',
        },
        {
          ko: '당신은 AI 시대의 수혜자입니다. 계속 앞서 나가세요',
          en: "You're a beneficiary of the AI era. Keep pushing ahead",
          ja: 'あなたはAI時代の受益者です。これからも先を行ってください',
          'zh-CN': '你是AI时代的受益者。继续保持领先吧',
          'zh-TW': '你是AI時代的受益者。繼續保持領先吧',
          vi: 'Bạn là người hưởng lợi từ thời đại AI. Hãy tiếp tục dẫn đầu',
          id: 'Anda adalah penerima manfaat dari era AI. Teruslah melangkah lebih maju',
        }
      ),
    ],
    shareMessage: L({
      ko: 'AI 시대 직업 생존 점수: 88점 🔵 AI가 경쟁자 아니라 도구인 레벨이래... 내 직업 안전하다는 거 확인함 → 너는 몇 점이야?',
      en: "AI Era Job Survival Score: 88 🔵 Apparently my level treats AI as a tool, not a competitor... confirmed my job is safe → What's your score?",
      ja: 'AI時代 職業生存スコア: 88点 🔵 AIが競争相手ではなく道具というレベルらしい…自分の職業が安全だと確認した → あなたは何点？',
      'zh-CN': 'AI时代职业生存分数：88分 🔵 据说这是把AI当工具而不是对手的水平…确认自己的职业很安全了 → 你多少分？',
      'zh-TW': 'AI時代職業生存分數：88分 🔵 據說這是把AI當工具而不是對手的水平…確認自己的職業很安全了 → 你多少分？',
      vi: 'Điểm sống còn nghề nghiệp thời AI: 88 điểm 🔵 Nghe nói đây là cấp độ coi AI là công cụ chứ không phải đối thủ... đã xác nhận công việc của mình an toàn → Bạn được mấy điểm?',
      id: 'Skor Kelangsungan Karier Era AI: 88 🔵 Katanya ini level yang menganggap AI sebagai alat, bukan pesaing... jadi lega pekerjaan saya aman → Berapa skormu?',
    }),
  },
  {
    type: 'Type6',
    emoji: '🏆',
    title: L({
      ko: 'AI 시대 선도자, 직업 생존 점수 99점',
      en: 'AI Era Pioneer: Job Survival Score 99',
      ja: 'AI時代の先導者、職業生存スコア99点',
      'zh-CN': 'AI时代的引领者，职业生存分数99分',
      'zh-TW': 'AI時代的引領者，職業生存分數99分',
      vi: 'Người dẫn đầu thời đại AI, điểm sống còn nghề nghiệp 99 điểm',
      id: 'Pelopor Era AI, Skor Kelangsungan Karier 99',
    }),
    shortDescription: L({
      ko: 'AI가 당신의 역할을 대체하려면 아직 멀었습니다. 오히려 AI 덕분에 당신의 가치가 올라갑니다.',
      en: "AI is still far from replacing your role. In fact, thanks to AI, your value is rising.",
      ja: 'AIがあなたの役割を代替するにはまだ遠いです。むしろAIのおかげであなたの価値は上がります。',
      'zh-CN': 'AI要取代你的角色还差得远。反而是得益于AI，你的价值在提升。',
      'zh-TW': 'AI要取代你的角色還差得遠。反而是得益於AI，你的價值在提升。',
      vi: 'AI còn lâu mới thay thế được vai trò của bạn. Trái lại, nhờ AI mà giá trị của bạn đang tăng lên.',
      id: 'AI masih jauh dari mampu menggantikan peran Anda. Justru berkat AI, nilai Anda semakin meningkat.',
    }),
    description: L({
      ko: 'AI를 전략적으로 활용하고, 맥락·판단·관계·창의 영역에서 깊은 역량을 가지고 있으며, AI 변화를 위기가 아닌 기회로 전환하고 있는 단계입니다. 이 테스트에서 가능한 가장 높은 점수 구간입니다.',
      en: "You use AI strategically, have deep capabilities in context, judgment, relationships, and creativity, and are turning AI-driven change into an opportunity rather than a crisis. This is the highest score range possible in this test.",
      ja: 'AIを戦略的に活用し、文脈・判断・関係・創造性の領域で深い能力を持ち、AIの変化を危機ではなくチャンスに転換している段階です。このテストで可能な最高得点の範囲です。',
      'zh-CN': '战略性地运用AI，在情境、判断、关系、创意领域拥有深厚的能力，并将AI变化转化为机会而非危机的阶段。这是本测试中可能的最高分数区间。',
      'zh-TW': '戰略性地運用AI，在情境、判斷、關係、創意領域擁有深厚的能力，並將AI變化轉化為機會而非危機的階段。這是本測試中可能的最高分數區間。',
      vi: 'Bạn sử dụng AI một cách chiến lược, có năng lực sâu sắc trong các lĩnh vực bối cảnh, phán đoán, quan hệ và sáng tạo, và đang biến sự thay đổi của AI thành cơ hội thay vì khủng hoảng. Đây là mức điểm cao nhất có thể trong bài test này.',
      id: 'Anda menggunakan AI secara strategis, memiliki kemampuan mendalam dalam konteks, penilaian, hubungan, dan kreativitas, serta mengubah perubahan AI menjadi peluang bukan krisis. Ini adalah rentang skor tertinggi yang mungkin dalam tes ini.',
    }),
    survivalScore: L({
      ko: '99/100',
      en: '99/100',
      ja: '99/100',
      'zh-CN': '99/100',
      'zh-TW': '99/100',
      vi: '99/100',
      id: '99/100',
    }),
    aiRiskLevel: L({
      ko: '거의 없음',
      en: 'Almost None',
      ja: 'ほとんどない',
      'zh-CN': '几乎没有',
      'zh-TW': '幾乎沒有',
      vi: 'Hầu như không có',
      id: 'Hampir Tidak Ada',
    }),
    sections: [
      section(
        {
          ko: '💪 강점',
          en: '💪 Strength',
          ja: '💪 強み',
          'zh-CN': '💪 优势',
          'zh-TW': '💪 優勢',
          vi: '💪 Điểm mạnh',
          id: '💪 Kekuatan',
        },
        {
          ko: 'AI 활용 능력 + AI 불가 역량 + 변화 선도 마인드셋 완성형',
          en: 'A complete package: AI proficiency + AI-resistant capabilities + a change-leading mindset',
          ja: 'AI活用能力+AI不可能領域の能力+変化先導マインドセットの完成形',
          'zh-CN': 'AI运用能力+AI无法取代的能力+引领变化的心态的完成型',
          'zh-TW': 'AI運用能力+AI無法取代的能力+引領變化的心態的完成型',
          vi: 'Dạng hoàn chỉnh của khả năng sử dụng AI + năng lực AI không thể thay thế + tư duy dẫn đầu sự thay đổi',
          id: 'Kombinasi lengkap: kemampuan menggunakan AI + kemampuan yang tidak bisa digantikan AI + pola pikir memimpin perubahan',
        }
      ),
      section(
        {
          ko: '🔍 남은 1%는 무엇인가',
          en: "🔍 What's the Remaining 1%?",
          ja: '🔍 残りの1%とは何か',
          'zh-CN': '🔍 剩下的1%是什么',
          'zh-TW': '🔍 剩下的1%是什麼',
          vi: '🔍 1% còn lại là gì',
          id: '🔍 Apa 1% yang Tersisa',
        },
        {
          ko: 'AI 기술 자체가 예측 불가 수준으로 발전하는 경우. 하지만 지금처럼 적응하고 있다면 그 변화도 따라갈 수 있습니다',
          en: 'The case where AI technology itself advances beyond prediction. But if you keep adapting like now, you can keep up with that change too',
          ja: 'AI技術自体が予測不可能なレベルまで発展するケース。しかし今のように適応していればその変化にもついていけます',
          'zh-CN': 'AI技术本身发展到无法预测的程度的情况。但如果像现在这样持续适应，也能跟上那种变化',
          'zh-TW': 'AI技術本身發展到無法預測的程度的情況。但如果像現在這樣持續適應，也能跟上那種變化',
          vi: 'Trường hợp công nghệ AI phát triển đến mức không thể dự đoán được. Nhưng nếu bạn tiếp tục thích nghi như hiện tại, bạn vẫn có thể theo kịp sự thay đổi đó',
          id: 'Kasus di mana teknologi AI itu sendiri berkembang di luar prediksi. Namun jika Anda terus beradaptasi seperti sekarang, Anda tetap bisa mengikuti perubahan tersebut',
        }
      ),
      section(
        {
          ko: '👥 이 결과를 보는 주변에게',
          en: '👥 To Those Around You Seeing This Result',
          ja: '👥 この結果を見る周りの人へ',
          'zh-CN': '👥 给看到这个结果的身边人',
          'zh-TW': '👥 給看到這個結果的身邊人',
          vi: '👥 Gửi những người xung quanh thấy kết quả này',
          id: '👥 Untuk Orang di Sekitar yang Melihat Hasil Ini',
        },
        {
          ko: '이 점수를 받은 사람에게 AI 활용 방법을 물어보세요. 가장 배울 점이 많은 사람입니다',
          en: "Ask the person who got this score how they use AI. They're the one you can learn the most from",
          ja: 'この点数を得た人にAI活用法を聞いてみてください。最も学べる人です',
          'zh-CN': '去问得到这个分数的人如何运用AI吧。他是最值得学习的人',
          'zh-TW': '去問得到這個分數的人如何運用AI吧。他是最值得學習的人',
          vi: 'Hãy hỏi người đạt được điểm số này về cách sử dụng AI. Đó là người bạn có thể học được nhiều nhất',
          id: 'Tanyakan cara menggunakan AI kepada orang yang mendapatkan skor ini. Dialah orang yang paling banyak bisa dipelajari',
        }
      ),
      section(
        {
          ko: '💬 한 줄 평',
          en: '💬 One-Line Comment',
          ja: '💬 一言コメント',
          'zh-CN': '💬 一句话点评',
          'zh-TW': '💬 一句話點評',
          vi: '💬 Nhận xét ngắn',
          id: '💬 Komentar Singkat',
        },
        {
          ko: 'AI 시대, 당신 같은 사람이 가장 필요합니다',
          en: 'In the AI era, people like you are needed most',
          ja: 'AI時代、あなたのような人が最も必要とされています',
          'zh-CN': '在AI时代，最需要的就是像你这样的人',
          'zh-TW': '在AI時代，最需要的就是像你這樣的人',
          vi: 'Trong thời đại AI, người như bạn là cần thiết nhất',
          id: 'Di era AI, orang seperti Anda yang paling dibutuhkan',
        }
      ),
    ],
    shareMessage: L({
      ko: 'AI 시대 직업 생존 점수: 99점 🏆 AI 시대 선도자 레벨... 내 직업 AI한테 안 뺏긴다는 거 인증 → 너는 몇 점이야? 위기감 vs 안도감 확인해봐',
      en: "AI Era Job Survival Score: 99 🏆 AI era pioneer level... confirmed my job won't be taken by AI → What's your score? Check crisis vs relief",
      ja: 'AI時代 職業生存スコア: 99点 🏆 AI時代の先導者レベル…自分の職業がAIに奪われないことを証明した → あなたは何点？危機感vs安心感を確認してみて',
      'zh-CN': 'AI时代职业生存分数：99分 🏆 AI时代引领者级别…证明我的工作不会被AI夺走 → 你多少分？看看是危机感还是安心感',
      'zh-TW': 'AI時代職業生存分數：99分 🏆 AI時代引領者級別…證明我的工作不會被AI奪走 → 你多少分？看看是危機感還是安心感',
      vi: 'Điểm sống còn nghề nghiệp thời AI: 99 điểm 🏆 Cấp độ người dẫn đầu thời đại AI... xác nhận công việc của tôi không bị AI cướp mất → Bạn được mấy điểm? Kiểm tra khủng hoảng vs an tâm',
      id: 'Skor Kelangsungan Karier Era AI: 99 🏆 Level pelopor era AI... terbukti pekerjaan saya tidak akan direbut AI → Berapa skormu? Cek rasa krisis vs lega',
    }),
  },
];
