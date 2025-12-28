export interface Phase2HearingAgeResult {
  type: string;
  emoji: string;
  maxFrequency: number;
  title: {
    ko: string;
    en: string;
    ja: string;
    zh: string;
    'zh-TW': string;
    vi: string;
    id: string;
  };
  description: {
    ko: string;
    en: string;
    ja: string;
    zh: string;
    'zh-TW': string;
    vi: string;
    id: string;
  };
  hearingAge: {
    ko: string;
    en: string;
    ja: string;
    zh: string;
    'zh-TW': string;
    vi: string;
    id: string;
  };
  advice: {
    ko: string;
    en: string;
    ja: string;
    zh: string;
    'zh-TW': string;
    vi: string;
    id: string;
  };
}

export const PHASE2_HEARING_AGE_RESULTS: Phase2HearingAgeResult[] = [
  {
    type: 'Type1',
    emoji: '👴',
    maxFrequency: 10000,
    title: {
      ko: '60대 이상, 가는 귀먹은 어르신',
      en: '60+ Years Old, Hard of Hearing Elder',
      ja: '60代以上、耳の遠いご老人',
      zh: '60岁以上，耳背的老人',
      'zh-TW': '60歲以上，耳背的老人',
      vi: 'Trên 60 tuổi, Người cao tuổi nghe kém',
      id: '60+ Tahun, Lansia yang Sulit Mendengar'
    },
    description: {
      ko: '뭐라고? 크게 좀 말해봐~ 당신의 청력 나이는 60대 이상입니다. 일상적인 대화에는 문제가 없지만, 고음역대의 소리는 거의 듣지 못합니다. TV 볼륨을 남들보다 크게 틀지 않나요? 귀 건강 관리가 시급합니다. 큰 소음에 노출되는 것을 피하세요.',
      en: 'What? Speak louder~ Your hearing age is 60+ years old. You have no problem with daily conversations, but you can barely hear high-frequency sounds. Do you turn up the TV volume louder than others? Ear health management is urgent. Avoid exposure to loud noise.',
      ja: '何？もっと大きな声で言って～あなたの聴力年齢は60代以上です。日常的な会話には問題がありませんが、高音域の音はほとんど聞こえません。TVの音量を他の人よりも大きくしていませんか？耳の健康管理が急務です。大きな騒音にさらされることを避けてください。',
      zh: '什么？说大声点～你的听力年龄是60岁以上。日常对话没问题，但几乎听不到高频声音。你是不是把电视音量开得比别人大？耳朵健康管理很紧急。避免暴露在大噪音中。',
      'zh-TW': '什麼？說大聲點～你的聽力年齡是60歲以上。日常對話沒問題，但幾乎聽不到高頻聲音。你是不是把電視音量開得比別人大？耳朵健康管理很緊急。避免暴露在大噪音中。',
      vi: 'Gì? Nói to hơn~ Tuổi thính giác của bạn là trên 60 tuổi. Bạn không có vấn đề với cuộc trò chuyện hàng ngày, nhưng bạn hầu như không nghe thấy âm thanh tần số cao. Bạn có tăng âm lượng TV lớn hơn người khác không? Quản lý sức khỏe tai là khẩn cấp. Tránh tiếp xúc với tiếng ồn lớn.',
      id: 'Apa? Bicara lebih keras~ Usia pendengaran Anda adalah 60+ tahun. Anda tidak memiliki masalah dengan percakapan sehari-hari, tetapi Anda hampir tidak dapat mendengar suara frekuensi tinggi. Apakah Anda menaikkan volume TV lebih keras dari orang lain? Manajemen kesehatan telinga sangat mendesak. Hindari paparan kebisingan keras.'
    },
    hearingAge: {
      ko: '최대 주파수: 12,000Hz 미만 청취 불가',
      en: 'Max Frequency: Cannot hear below 12,000Hz',
      ja: '最大周波数: 12,000Hz未満は聞こえない',
      zh: '最大频率: 无法听到12,000Hz以下',
      'zh-TW': '最大頻率: 無法聽到12,000Hz以下',
      vi: 'Tần số tối đa: Không thể nghe dưới 12,000Hz',
      id: 'Frekuensi Maksimum: Tidak dapat mendengar di bawah 12,000Hz'
    },
    advice: {
      ko: '청력 노화 진행 중',
      en: 'Hearing aging in progress',
      ja: '聴力の老化が進行中',
      zh: '听力老化进行中',
      'zh-TW': '聽力老化進行中',
      vi: 'Lão hóa thính giác đang tiến triển',
      id: 'Penuaan pendengaran sedang berlangsung'
    }
  },
  {
    type: 'Type2',
    emoji: '👔',
    maxFrequency: 12000,
    title: {
      ko: '50대, 중년의 귀',
      en: '50s, Middle-Aged Ears',
      ja: '50代、中年の耳',
      zh: '50岁，中年的耳朵',
      'zh-TW': '50歲，中年的耳朵',
      vi: '50 tuổi, Tai trung niên',
      id: '50-an, Telinga Paruh Baya'
    },
    description: {
      ko: '아직 청춘인 줄 알았는데... 세월이 야속해. 당신의 청력 나이는 50대입니다. 가는 세월은 잡을 수 없네요. 시끄러운 곳에서 대화하는 게 조금씩 힘들어질 수 있습니다. 이어폰 볼륨을 줄이고 귀를 쉬게 해주세요. 아직 늦지 않았습니다!',
      en: 'I thought I was still young... Time is cruel. Your hearing age is in your 50s. Time flies, doesn\'t it? It may become slightly difficult to have conversations in noisy places. Turn down your earbud volume and give your ears a rest. It\'s not too late yet!',
      ja: 'まだ青春だと思っていたのに...歳月は残酷ですね。あなたの聴力年齢は50代です。過ぎ去る歳月は掴めません。騒々しい場所での会話が少しずつ難しくなるかもしれません。イヤホンの音量を下げて耳を休めてください。まだ遅くありません！',
      zh: '我以为还年轻...岁月无情。你的听力年龄是50岁。时光飞逝啊。在嘈杂的地方对话可能会变得有点困难。把耳机音量调低，让耳朵休息一下。还不算晚！',
      'zh-TW': '我以為還年輕...歲月無情。你的聽力年齡是50歲。時光飛逝啊。在嘈雜的地方對話可能會變得有點困難。把耳機音量調低，讓耳朵休息一下。還不算晚！',
      vi: 'Tôi nghĩ mình vẫn còn trẻ... Thời gian thật tàn nhẫn. Tuổi thính giác của bạn là 50 tuổi. Thời gian trôi qua nhanh chóng, phải không? Có thể trở nên hơi khó khăn để trò chuyện ở những nơi ồn ào. Giảm âm lượng tai nghe và cho tai nghỉ ngơi. Vẫn chưa muộn!',
      id: 'Saya pikir saya masih muda... Waktu kejam. Usia pendengaran Anda adalah 50-an. Waktu berlalu begitu cepat, bukan? Mungkin menjadi sedikit sulit untuk berbicara di tempat-tempat yang bising. Turunkan volume earbud dan istirahatkan telinga Anda. Belum terlambat!'
    },
    hearingAge: {
      ko: '최대 주파수: 12,000Hz 청취 가능',
      en: 'Max Frequency: Can hear 12,000Hz',
      ja: '最大周波数: 12,000Hzが聞こえる',
      zh: '最大频率: 可以听到12,000Hz',
      'zh-TW': '最大頻率: 可以聽到12,000Hz',
      vi: 'Tần số tối đa: Có thể nghe 12,000Hz',
      id: 'Frekuensi Maksimum: Dapat mendengar 12,000Hz'
    },
    advice: {
      ko: '관리 필요',
      en: 'Management needed',
      ja: '管理が必要',
      zh: '需要管理',
      'zh-TW': '需要管理',
      vi: 'Cần quản lý',
      id: 'Manajemen diperlukan'
    }
  },
  {
    type: 'Type3',
    emoji: '💼',
    maxFrequency: 14000,
    title: {
      ko: '40대, 부장님 귀',
      en: '40s, Manager\'s Ears',
      ja: '40代、部長の耳',
      zh: '40岁，部长的耳朵',
      'zh-TW': '40歲，部長的耳朵',
      vi: '40 tuổi, Tai của giám đốc',
      id: '40-an, Telinga Manajer'
    },
    description: {
      ko: '어? 방금 무슨 소리 안 났어? (안 났음) 당신의 청력 나이는 40대입니다. 20-30대 직원들이 괴로워하는 고주파 소음(전자기기 노이즈 등)을 당신은 못 듣고 지나칠 수 있습니다. 평범한 수준의 노화가 진행되고 있습니다.',
      en: 'Huh? Did something just make a sound? (It didn\'t) Your hearing age is in your 40s. You might miss high-frequency noises (from electronic devices, etc.) that trouble employees in their 20s-30s. Normal levels of aging are progressing.',
      ja: 'え？今何か音がしなかった？(しなかった)あなたの聴力年齢は40代です。20-30代の従業員が困る高周波ノイズ(電子機器のノイズなど)をあなたは聞き逃すかもしれません。普通レベルの老化が進行しています。',
      zh: '嗯？刚才有什么声音吗？（没有）你的听力年龄是40岁。你可能会错过那些困扰20-30岁员工的高频噪音（来自电子设备等）。正常的衰老水平正在发展。',
      'zh-TW': '嗯？剛才有什麼聲音嗎？（沒有）你的聽力年齡是40歲。你可能會錯過那些困擾20-30歲員工的高頻噪音（來自電子設備等）。正常的衰老水平正在發展。',
      vi: 'Hả? Vừa rồi có tiếng gì không? (Không có) Tuổi thính giác của bạn là 40 tuổi. Bạn có thể bỏ lỡ tiếng ồn tần số cao (từ thiết bị điện tử, v.v.) làm phiền nhân viên ở độ tuổi 20-30. Mức độ lão hóa bình thường đang tiến triển.',
      id: 'Hah? Apakah ada suara tadi? (Tidak ada) Usia pendengaran Anda adalah 40-an. Anda mungkin melewatkan kebisingan frekuensi tinggi (dari perangkat elektronik, dll.) yang mengganggu karyawan berusia 20-30 tahun. Tingkat penuaan normal sedang berlangsung.'
    },
    hearingAge: {
      ko: '최대 주파수: 14,000Hz 청취 가능',
      en: 'Max Frequency: Can hear 14,000Hz',
      ja: '最大周波数: 14,000Hzが聞こえる',
      zh: '最大频率: 可以听到14,000Hz',
      'zh-TW': '最大頻率: 可以聽到14,000Hz',
      vi: 'Tần số tối đa: Có thể nghe 14,000Hz',
      id: 'Frekuensi Maksimum: Dapat mendengar 14,000Hz'
    },
    advice: {
      ko: '정상적인 노화',
      en: 'Normal aging',
      ja: '正常な老化',
      zh: '正常老化',
      'zh-TW': '正常老化',
      vi: 'Lão hóa bình thường',
      id: 'Penuaan normal'
    }
  },
  {
    type: 'Type4',
    emoji: '☕',
    maxFrequency: 15000,
    title: {
      ko: '30대, 사회초년생 귀',
      en: '30s, Early Career Ears',
      ja: '30代、社会人一年目の耳',
      zh: '30岁，职场新人的耳朵',
      'zh-TW': '30歲，職場新人的耳朵',
      vi: '30 tuổi, Tai của người mới vào nghề',
      id: '30-an, Telinga Karier Awal'
    },
    description: {
      ko: '아직은 쌩쌩합니다. 걱정 마세요. 당신의 청력 나이는 30대입니다. 청력이 가장 안정적인 시기입니다. 너무 높은 초고음은 안 들리지만, 생활하는 데 전혀 지장이 없는 건강한 귀를 가지고 있습니다. 지금 상태를 잘 유지하는 것이 중요합니다.',
      en: 'Still going strong. Don\'t worry. Your hearing age is in your 30s. This is when hearing is most stable. You can\'t hear extremely high frequencies, but you have healthy ears with no impact on daily life. It\'s important to maintain your current state.',
      ja: 'まだ元気です。心配しないでください。あなたの聴力年齢は30代です。聴力が最も安定している時期です。極めて高い超音波は聞こえませんが、日常生活に全く支障のない健康な耳を持っています。今の状態をよく維持することが重要です。',
      zh: '仍然很强健。别担心。你的听力年龄是30岁。这是听力最稳定的时期。你听不到极高的超音，但你拥有健康的耳朵，对日常生活没有任何影响。保持现在的状态很重要。',
      'zh-TW': '仍然很強健。別擔心。你的聽力年齡是30歲。這是聽力最穩定的時期。你聽不到極高的超音，但你擁有健康的耳朵，對日常生活沒有任何影響。保持現在的狀態很重要。',
      vi: 'Vẫn còn mạnh mẽ. Đừng lo lắng. Tuổi thính giác của bạn là 30 tuổi. Đây là thời điểm thính giác ổn định nhất. Bạn không thể nghe tần số cực cao, nhưng bạn có đôi tai khỏe mạnh không ảnh hưởng đến cuộc sống hàng ngày. Điều quan trọng là duy trì trạng thái hiện tại của bạn.',
      id: 'Masih kuat. Jangan khawatir. Usia pendengaran Anda adalah 30-an. Ini adalah saat pendengaran paling stabil. Anda tidak bisa mendengar frekuensi sangat tinggi, tetapi Anda memiliki telinga sehat tanpa dampak pada kehidupan sehari-hari. Penting untuk mempertahankan kondisi Anda saat ini.'
    },
    hearingAge: {
      ko: '최대 주파수: 15,000Hz 청취 가능',
      en: 'Max Frequency: Can hear 15,000Hz',
      ja: '最大周波数: 15,000Hzが聞こえる',
      zh: '最大频率: 可以听到15,000Hz',
      'zh-TW': '最大頻率: 可以聽到15,000Hz',
      vi: 'Tần số tối đa: Có thể nghe 15,000Hz',
      id: 'Frekuensi Maksimum: Dapat mendengar 15,000Hz'
    },
    advice: {
      ko: '건강함',
      en: 'Healthy',
      ja: '健康',
      zh: '健康',
      'zh-TW': '健康',
      vi: 'Khỏe mạnh',
      id: 'Sehat'
    }
  },
  {
    type: 'Type5',
    emoji: '✨',
    maxFrequency: 17000,
    title: {
      ko: '20대, 청춘의 귀',
      en: '20s, Youthful Ears',
      ja: '20代、青春の耳',
      zh: '20岁，青春的耳朵',
      'zh-TW': '20歲，青春的耳朵',
      vi: '20 tuổi, Tai tuổi trẻ',
      id: '20-an, Telinga Muda'
    },
    description: {
      ko: '작은 소리도 놓치지 않아요. 당신의 청력 나이는 파릇파릇한 20대입니다. 아주 미세한 고주파 소리까지 잡아낼 수 있는 예민한 귀를 가졌습니다. 강의실 뒤편에서 친구가 속삭이는 소리도 들을 수 있겠네요. 부러운 청력입니다!',
      en: 'I don\'t miss even small sounds. Your hearing age is a fresh 20s. You have sensitive ears that can catch even very subtle high-frequency sounds. You can probably hear your friend whispering from the back of the classroom. Enviable hearing!',
      ja: '小さな音も逃しません。あなたの聴力年齢は新鮮な20代です。非常に微細な高周波音まで捉えることができる敏感な耳を持っています。教室の後ろで友達が囁く音も聞こえるでしょう。羨ましい聴力です！',
      zh: '连小声音也不会错过。你的听力年龄是崭新的20岁。你拥有敏感的耳朵，可以捕捉到非常细微的高频声音。你可能能听到朋友在教室后面窃窃私语的声音。令人羡慕的听力！',
      'zh-TW': '連小聲音也不會錯過。你的聽力年齡是嶄新的20歲。你擁有敏感的耳朵，可以捕捉到非常細微的高頻聲音。你可能能聽到朋友在教室後面竊竊私語的聲音。令人羨慕的聽力！',
      vi: 'Tôi không bỏ lỡ ngay cả những âm thanh nhỏ. Tuổi thính giác của bạn là 20 tuổi tươi mới. Bạn có đôi tai nhạy cảm có thể bắt được cả những âm thanh tần số cao rất tinh tế. Bạn có thể nghe thấy bạn bè thì thầm từ phía sau lớp học. Thính giác đáng ghen tị!',
      id: 'Saya tidak melewatkan bahkan suara kecil. Usia pendengaran Anda adalah 20-an yang segar. Anda memiliki telinga sensitif yang dapat menangkap bahkan suara frekuensi tinggi yang sangat halus. Anda mungkin bisa mendengar teman Anda berbisik dari belakang kelas. Pendengaran yang membuat iri!'
    },
    hearingAge: {
      ko: '최대 주파수: 17,000Hz 청취 가능',
      en: 'Max Frequency: Can hear 17,000Hz',
      ja: '最大周波数: 17,000Hzが聞こえる',
      zh: '最大频率: 可以听到17,000Hz',
      'zh-TW': '最大頻率: 可以聽到17,000Hz',
      vi: 'Tần số tối đa: Có thể nghe 17,000Hz',
      id: 'Frekuensi Maksimum: Dapat mendengar 17,000Hz'
    },
    advice: {
      ko: '매우 좋음',
      en: 'Very good',
      ja: '非常に良い',
      zh: '非常好',
      'zh-TW': '非常好',
      vi: 'Rất tốt',
      id: 'Sangat baik'
    }
  },
  {
    type: 'Type6',
    emoji: '🦇',
    maxFrequency: 19000,
    title: {
      ko: '10대 미만, 초음파 탐지기',
      en: 'Under 10s, Ultrasonic Detector',
      ja: '10代未満、超音波探知機',
      zh: '10岁以下，超声波探测器',
      'zh-TW': '10歲以下，超聲波探測器',
      vi: 'Dưới 10 tuổi, Máy dò siêu âm',
      id: 'Di Bawah 10 Tahun, Detektor Ultrasonik'
    },
    description: {
      ko: '이 소리가 안 들린다고요? 귀 찢어질 것 같은데! 당신은 인간이라기보단 박쥐나 돌고래에 가깝습니다. 일명 \'모기 벨소리\'를 완벽하게 들을 수 있는 10대(혹은 그 이하)의 청력을 가졌습니다. 전자제품에서 나는 미세한 고주파음 때문에 가끔 스트레스를 받을 정도로 귀가 밝습니다. 소머즈 인정!',
      en: 'You can\'t hear this sound? It sounds like it\'ll tear your ears apart! You\'re closer to a bat or dolphin than a human. You have the hearing of a teenager (or younger) who can perfectly hear the so-called \'mosquito ringtone\'. Your ears are so sharp that you sometimes get stressed by the subtle high-frequency sounds from electronic devices. SoMeRz approved!',
      ja: 'この音が聞こえない？耳が裂けそう！あなたは人間というよりコウモリやイルカに近いです。いわゆる「蚊のベルの音」を完璧に聞くことができる10代（またはそれ以下）の聴力を持っています。電子機器から出る微細な高周波音のために時々ストレスを感じるほど耳が鋭いです。ソメルズ認定！',
      zh: '你听不到这个声音？听起来像要把耳朵撕裂！你更像蝙蝠或海豚，而不是人类。你拥有10多岁（或更小）的听力，可以完美听到所谓的"蚊子铃声"。你的耳朵如此敏锐，以至于你有时会因为电子设备发出的细微高频声音而感到压力。SoMeRz认证！',
      'zh-TW': '你聽不到這個聲音？聽起來像要把耳朵撕裂！你更像蝙蝠或海豚，而不是人類。你擁有10多歲（或更小）的聽力，可以完美聽到所謂的「蚊子鈴聲」。你的耳朵如此敏銳，以至於你有時會因為電子設備發出的細微高頻聲音而感到壓力。SoMeRz認證！',
      vi: 'Bạn không nghe thấy âm thanh này? Nghe như nó sẽ xé toạc tai bạn! Bạn giống dơi hoặc cá heo hơn là con người. Bạn có thính giác của một thiếu niên (hoặc trẻ hơn) có thể nghe hoàn hảo cái gọi là \'chuông muỗi\'. Tai bạn sắc đến mức đôi khi bạn cảm thấy căng thẳng bởi những âm thanh tần số cao tinh tế từ thiết bị điện tử. SoMeRz phê duyệt!',
      id: 'Anda tidak bisa mendengar suara ini? Sepertinya akan merobek telinga Anda! Anda lebih mirip kelelawar atau lumba-lumba daripada manusia. Anda memiliki pendengaran remaja (atau lebih muda) yang dapat mendengar dengan sempurna yang disebut \'ringtone nyamuk\'. Telinga Anda begitu tajam sehingga Anda kadang-kadang merasa stres oleh suara frekuensi tinggi halus dari perangkat elektronik. SoMeRz disetujui!'
    },
    hearingAge: {
      ko: '최대 주파수: 19,000Hz 이상 청취 가능',
      en: 'Max Frequency: Can hear 19,000Hz and above',
      ja: '最大周波数: 19,000Hz以上が聞こえる',
      zh: '最大频率: 可以听到19,000Hz及以上',
      'zh-TW': '最大頻率: 可以聽到19,000Hz及以上',
      vi: 'Tần số tối đa: Có thể nghe 19,000Hz trở lên',
      id: 'Frekuensi Maksimum: Dapat mendengar 19,000Hz ke atas'
    },
    advice: {
      ko: '신의 귀 (절대 청각)',
      en: 'Divine ears (Absolute hearing)',
      ja: '神の耳（絶対聴覚）',
      zh: '神之耳（绝对听觉）',
      'zh-TW': '神之耳（絕對聽覺）',
      vi: 'Tai thần thánh (Thính giác tuyệt đối)',
      id: 'Telinga ilahi (Pendengaran absolut)'
    }
  }
];

// Test Steps: [frequency in Hz, step name]
export const HEARING_TEST_STEPS = [
  { frequency: 1000, step: 0, name: 'volume_check' }, // Volume check
  { frequency: 8000, step: 1, name: 'step1' },
  { frequency: 12000, step: 2, name: 'step2' },
  { frequency: 14000, step: 3, name: 'step3' },
  { frequency: 15000, step: 4, name: 'step4' },
  { frequency: 17000, step: 5, name: 'step5' },
  { frequency: 19000, step: 6, name: 'step6' }
];

export function calculatePhase2HearingAgeResult(lastHeardStep: number): Phase2HearingAgeResult {
  // If user selected "X" (cannot hear) on step N, result is step N-1
  // If user heard all steps (including step 6), result is Type6
  
  if (lastHeardStep === 0) {
    // Volume check failed - treat as Type1
    return PHASE2_HEARING_AGE_RESULTS[0];
  }
  
  if (lastHeardStep >= 6) {
    // Heard step 6 (19000Hz+) - Type6
    return PHASE2_HEARING_AGE_RESULTS[5];
  }
  
  // Map last heard step to result type
  // Step 1 (8000Hz) -> Type1
  // Step 2 (12000Hz) -> Type2
  // Step 3 (14000Hz) -> Type3
  // Step 4 (15000Hz) -> Type4
  // Step 5 (17000Hz) -> Type5
  
  const resultIndex = Math.min(lastHeardStep - 1, PHASE2_HEARING_AGE_RESULTS.length - 1);
  return PHASE2_HEARING_AGE_RESULTS[Math.max(0, resultIndex)];
}

