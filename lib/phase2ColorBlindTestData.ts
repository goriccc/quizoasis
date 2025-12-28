export interface ColorBlindQuestion {
  id: number;
  image: string; // 이미지 파일 경로
  correctAnswer: string; // 정답 숫자/도형
  type: 'control' | 'red-green' | 'blue-yellow' | 'intensity'; // 질문 유형
  normalVisionSees: string; // 정상 시력자가 보는 것
  redGreenDeficientSees?: string; // 적록색약이 보는 것
  blueYellowDeficientSees?: string; // 청황색약이 보는 것
}

export interface Phase2ColorBlindResult {
  type: string;
  emoji: string;
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
  characteristics: {
    ko: string;
    en: string;
    ja: string;
    zh: string;
    'zh-TW': string;
    vi: string;
    id: string;
  };
  recommendation: {
    ko: string;
    en: string;
    ja: string;
    zh: string;
    'zh-TW': string;
    vi: string;
    id: string;
  };
}

// 12개 질문 데이터 (이미지는 나중에 추가)
export const COLOR_BLIND_QUESTIONS: ColorBlindQuestion[] = [
  // Q1: Control - 누구나 보이는 숫자
  {
    id: 1,
    image: '/test-images/ishihara/ishihara_01_control.jpg',
    correctAnswer: '12',
    type: 'control',
    normalVisionSees: '12',
  },
  // Q2-6: 적록 색각 이상 선별
  {
    id: 2,
    image: '/test-images/ishihara/ishihara_02_redgreen.jpg',
    correctAnswer: '74',
    type: 'red-green',
    normalVisionSees: '74',
    redGreenDeficientSees: '21',
  },
  {
    id: 3,
    image: '/test-images/ishihara/ishihara_03_redgreen.jpg',
    correctAnswer: '42',
    type: 'red-green',
    normalVisionSees: '42',
    redGreenDeficientSees: '2',
  },
  {
    id: 4,
    image: '/test-images/ishihara/ishihara_04_redgreen.jpg',
    correctAnswer: '26',
    type: 'red-green',
    normalVisionSees: '26',
    redGreenDeficientSees: '6',
  },
  {
    id: 5,
    image: '/test-images/ishihara/ishihara_05_redgreen.jpg',
    correctAnswer: '16',
    type: 'red-green',
    normalVisionSees: '16',
    redGreenDeficientSees: 'nothing',
  },
  {
    id: 6,
    image: '/test-images/ishihara/ishihara_06_redgreen.jpg',
    correctAnswer: '35',
    type: 'red-green',
    normalVisionSees: '35',
    redGreenDeficientSees: '5',
  },
  // Q7-9: 청황 색각 이상 선별
  {
    id: 7,
    image: '/test-images/ishihara/ishihara_07_blueyellow.jpg',
    correctAnswer: '26',
    type: 'blue-yellow',
    normalVisionSees: '26',
    blueYellowDeficientSees: 'nothing',
  },
  {
    id: 8,
    image: '/test-images/ishihara/ishihara_08_blueyellow.jpg',
    correctAnswer: '45',
    type: 'blue-yellow',
    normalVisionSees: '45',
    blueYellowDeficientSees: 'nothing',
  },
  {
    id: 9,
    image: '/test-images/ishihara/ishihara_09_blueyellow.jpg',
    correctAnswer: '29',
    type: 'blue-yellow',
    normalVisionSees: '29',
    blueYellowDeficientSees: '70',
  },
  // Q10-12: 강도 측정
  {
    id: 10,
    image: '/test-images/ishihara/ishihara_10_intensity.jpg',
    correctAnswer: '57',
    type: 'intensity',
    normalVisionSees: '57',
    redGreenDeficientSees: '35',
  },
  {
    id: 11,
    image: '/test-images/ishihara/ishihara_11_intensity.jpg',
    correctAnswer: '73',
    type: 'intensity',
    normalVisionSees: '73',
    redGreenDeficientSees: '7',
  },
  {
    id: 12,
    image: '/test-images/ishihara/ishihara_12_intensity.jpg',
    correctAnswer: '8',
    type: 'intensity',
    normalVisionSees: '8',
    redGreenDeficientSees: 'nothing',
  },
];

export const PHASE2_COLOR_BLIND_RESULTS: Phase2ColorBlindResult[] = [
  {
    type: 'Type1',
    emoji: '🌈',
    title: {
      ko: '선명한 총천연색, 정상',
      en: 'Crystal Clear Full Color, Normal',
      ja: '鮮やかな全色彩、正常',
      zh: '清晰的全彩，正常',
      'zh-TW': '清晰的全彩，正常',
      vi: 'Màu sắc rõ ràng, Bình thường',
      id: 'Warna Jelas Penuh, Normal'
    },
    description: {
      ko: '"세상의 모든 색을 완벽하게 보고 계시네요!" 축하합니다. 당신의 원추세포(색상 감지 세포) 3가지는 모두 건강하게 작동하고 있습니다. 미세한 색의 차이까지 정확하게 구별할 수 있으며, 일상생활이나 색채 관련 직업을 갖는 데 전혀 문제가 없는 건강한 눈입니다.',
      en: '"You see all the colors of the world perfectly!" Congratulations. All three types of your cone cells (color-detecting cells) are working healthily. You can accurately distinguish even subtle color differences, and have healthy eyes with no problems in daily life or color-related professions.',
      ja: '「世界のすべての色を完璧に見ていますね！」おめでとうございます。あなたの錐体細胞（色を感知する細胞）3種類はすべて健康に機能しています。微細な色の違いまで正確に区別することができ、日常生活や色彩関連の職業を持つことには全く問題のない健康な目です。',
      zh: '“你能完美地看到世界上所有的颜色！”恭喜。你的三种视锥细胞（颜色检测细胞）都健康地工作着。你能准确区分细微的颜色差异，拥有健康的眼睛，在日常生活中或从事与颜色相关的职业都没有任何问题。',
      'zh-TW': '「你能完美地看到世界上所有的顏色！」恭喜。你的三種視錐細胞（顏色檢測細胞）都健康地工作著。你能準確區分細微的顏色差異，擁有健康的眼睛，在日常生活中或從事與顏色相關的職業都沒有任何問題。',
      vi: '"Bạn nhìn thấy tất cả màu sắc của thế giới một cách hoàn hảo!" Chúc mừng. Tất cả ba loại tế bào nón (tế bào phát hiện màu sắc) của bạn đều hoạt động khỏe mạnh. Bạn có thể phân biệt chính xác ngay cả sự khác biệt màu sắc tinh tế, và có đôi mắt khỏe mạnh không có vấn đề gì trong cuộc sống hàng ngày hoặc các nghề nghiệp liên quan đến màu sắc.',
      id: '"Anda melihat semua warna dunia dengan sempurna!" Selamat. Ketiga jenis sel kerucut (sel pendeteksi warna) Anda bekerja dengan sehat. Anda dapat membedakan dengan akurat bahkan perbedaan warna halus, dan memiliki mata yang sehat tanpa masalah dalam kehidupan sehari-hari atau profesi terkait warna.'
    },
    characteristics: {
      ko: '모든 문항 정답',
      en: 'All answers correct',
      ja: 'すべての問題が正解',
      zh: '所有问题都答对',
      'zh-TW': '所有問題都答對',
      vi: 'Tất cả câu trả lời đều đúng',
      id: 'Semua jawaban benar'
    },
    recommendation: {
      ko: '미술가, 디자이너, 파일럿',
      en: 'Artist, Designer, Pilot',
      ja: '美術家、デザイナー、パイロット',
      zh: '艺术家，设计师，飞行员',
      'zh-TW': '藝術家，設計師，飛行員',
      vi: 'Nghệ sĩ, Nhà thiết kế, Phi công',
      id: 'Seniman, Desainer, Pilot'
    }
  },
  {
    type: 'Type2',
    emoji: '🚦',
    title: {
      ko: '흔한 케이스, 적록 색약',
      en: 'Common Case, Red-Green Deficiency',
      ja: 'よくあるケース、赤緑色覚異常',
      zh: '常见情况，红绿色盲',
      'zh-TW': '常見情況，紅綠色盲',
      vi: 'Trường hợp phổ biến, Khiếm khuyết Đỏ-Xanh',
      id: 'Kasus Umum, Defisiensi Merah-Hijau'
    },
    description: {
      ko: '"빨강과 초록의 경계가 가끔 모호한가요?" 가장 흔한 유형의 색각 이상입니다. 적색이나 녹색을 감지하는 세포의 기능이 약간 떨어져 있습니다. 일상생활에 큰 지장은 없지만, 채도가 낮은 붉은색과 초록색을 구별할 때(예: 고기 굽기 정도, 신호등) 헷갈릴 수 있습니다. 남성의 약 5%가 이에 해당합니다.',
      en: '"Is the boundary between red and green sometimes ambiguous?" This is the most common type of color vision deficiency. The function of cells detecting red or green is slightly impaired. Daily life isn\'t significantly affected, but you may confuse low-saturation red and green (e.g., meat doneness, traffic lights). About 5% of men fall into this category.',
      ja: '「赤と緑の境界が時々曖昧ですか？」最も一般的な色覚異常のタイプです。赤色や緑色を感知する細胞の機能がやや低下しています。日常生活に大きな支障はありませんが、彩度の低い赤と緑を区別する際（例：肉の焼き具合、信号）に混乱する可能性があります。男性の約5%がこれに該当します。',
      zh: '“红色和绿色的边界有时模糊吗？”这是最常见的色觉异常类型。检测红色或绿色的细胞功能略有下降。日常生活影响不大，但在区分低饱和度的红色和绿色时（例如：肉的熟度、红绿灯）可能会混淆。大约5%的男性属于此类。',
      'zh-TW': '「紅色和綠色的邊界有時模糊嗎？」這是最常見的色覺異常類型。檢測紅色或綠色的細胞功能略有下降。日常生活影響不大，但在區分低飽和度的紅色和綠色時（例如：肉的熟度、紅綠燈）可能會混淆。大約5%的男性屬於此類。',
      vi: '"Ranh giới giữa đỏ và xanh lá có đôi khi mơ hồ không?" Đây là loại khiếm khuyết thị giác màu phổ biến nhất. Chức năng của các tế bào phát hiện màu đỏ hoặc xanh lá hơi suy giảm. Cuộc sống hàng ngày không bị ảnh hưởng đáng kể, nhưng bạn có thể nhầm lẫn giữa đỏ và xanh lá có độ bão hòa thấp (ví dụ: độ chín của thịt, đèn giao thông). Khoảng 5% nam giới thuộc nhóm này.',
      id: '"Apakah batas antara merah dan hijau terkadang ambigu?" Ini adalah jenis defisiensi penglihatan warna yang paling umum. Fungsi sel yang mendeteksi merah atau hijau sedikit terganggu. Kehidupan sehari-hari tidak terlalu terpengaruh, tetapi Anda mungkin membingungkan merah dan hijau dengan saturasi rendah (misalnya: kematangan daging, lampu lalu lintas). Sekitar 5% pria termasuk dalam kategori ini.'
    },
    characteristics: {
      ko: 'Q2~Q6 구간에서 오답 발생',
      en: 'Wrong answers in Q2~Q6',
      ja: 'Q2〜Q6で誤答発生',
      zh: 'Q2~Q6出现错误答案',
      'zh-TW': 'Q2~Q6出現錯誤答案',
      vi: 'Câu trả lời sai trong Q2~Q6',
      id: 'Jawaban salah di Q2~Q6'
    },
    recommendation: {
      ko: '색깔보다는 위치나 명암으로 구별하는 습관이 도움 됩니다',
      en: 'It helps to distinguish by position or brightness rather than color',
      ja: '色よりも位置や明暗で区別する習慣が役立ちます',
      zh: '通过位置或亮度而非颜色来区分的习惯会有帮助',
      'zh-TW': '通過位置或亮度而非顏色來區分的習慣會有幫助',
      vi: 'Thói quen phân biệt bằng vị trí hoặc độ sáng thay vì màu sắc sẽ hữu ích',
      id: 'Membedakan berdasarkan posisi atau kecerahan daripada warna akan membantu'
    }
  },
  {
    type: 'Type3',
    emoji: '🌊',
    title: {
      ko: '희귀한 유형, 청황 색약',
      en: 'Rare Type, Blue-Yellow Deficiency',
      ja: '希少なタイプ、青黄色覚異常',
      zh: '罕见类型，蓝黄色盲',
      'zh-TW': '罕見類型，藍黃色盲',
      vi: 'Loại hiếm, Khiếm khuyết Xanh dương-Vàng',
      id: 'Jenis Langka, Defisiensi Biru-Kuning'
    },
    description: {
      ko: '"파란색과 노란색이 다르게 보이나요?" 비교적 드문 유형입니다. 청색을 감지하는 세포에 이상이 있는 경우로, 파란색과 초록색을 혼동하거나 노란색과 보라색을 구별하기 어려워할 수 있습니다. 후천적(질환 등)으로 생기는 경우도 있으니, 갑자기 색이 다르게 보인다면 안과 검진을 권장합니다.',
      en: '"Do blue and yellow look different to you?" This is a relatively rare type. It occurs when there is an abnormality in cells that detect blue, and you may confuse blue with green or have difficulty distinguishing yellow from purple. It can also occur acquired (due to disease), so if colors suddenly look different, an eye exam is recommended.',
      ja: '「青と黄色が違って見えますか？」比較的まれなタイプです。青色を感知する細胞に異常がある場合で、青と緑を混同したり、黄色と紫色を区別することが難しくなることがあります。後天的（疾患など）に生じる場合もあるので、突然色が違って見える場合は眼科検診を推奨します。',
      zh: '“蓝色和黄色看起来不同吗？”这是一个相对罕见的类型。当检测蓝色的细胞出现异常时，你可能会混淆蓝色和绿色，或难以区分黄色和紫色。也可能是后天发生的（由于疾病），所以如果颜色突然看起来不同，建议进行眼科检查。',
      'zh-TW': '「藍色和黃色看起來不同嗎？」這是一個相對罕見的類型。當檢測藍色的細胞出現異常時，你可能會混淆藍色和綠色，或難以區分黃色和紫色。也可能是後天發生的（由於疾病），所以如果顏色突然看起來不同，建議進行眼科檢查。',
      vi: '"Màu xanh dương và màu vàng có trông khác nhau không?" Đây là loại tương đối hiếm. Nó xảy ra khi có bất thường trong các tế bào phát hiện màu xanh dương, và bạn có thể nhầm lẫn xanh dương với xanh lá hoặc khó phân biệt vàng với tím. Nó cũng có thể xảy ra mắc phải (do bệnh), vì vậy nếu màu sắc đột nhiên trông khác, nên khám mắt.',
      id: '"Apakah biru dan kuning terlihat berbeda untuk Anda?" Ini adalah jenis yang relatif langka. Terjadi ketika ada kelainan pada sel yang mendeteksi biru, dan Anda mungkin membingungkan biru dengan hijau atau kesulitan membedakan kuning dari ungu. Itu juga bisa terjadi didapat (karena penyakit), jadi jika warna tiba-tiba terlihat berbeda, pemeriksaan mata direkomendasikan.'
    },
    characteristics: {
      ko: 'Q7~Q9 구간에서 오답 발생',
      en: 'Wrong answers in Q7~Q9',
      ja: 'Q7〜Q9で誤答発生',
      zh: 'Q7~Q9出现错误答案',
      'zh-TW': 'Q7~Q9出現錯誤答案',
      vi: 'Câu trả lời sai trong Q7~Q9',
      id: 'Jawaban salah di Q7~Q9'
    },
    recommendation: {
      ko: '정밀 검사를 받아보는 것이 좋습니다',
      en: 'It is recommended to get a detailed examination',
      ja: '精密検査を受けることが推奨されます',
      zh: '建议进行详细检查',
      'zh-TW': '建議進行詳細檢查',
      vi: 'Nên khám chi tiết',
      id: 'Disarankan untuk mendapatkan pemeriksaan rinci'
    }
  },
  {
    type: 'Type4',
    emoji: '🎬',
    title: {
      ko: '흑백 영화 속 주인공, 전색맹/강도 색약',
      en: 'Black & White Movie Hero, Monochromacy/Severe Deficiency',
      ja: 'モノクロ映画の主人公、全色盲/強度色覚異常',
      zh: '黑白电影主角，全色盲/重度色盲',
      'zh-TW': '黑白電影主角，全色盲/重度色盲',
      vi: 'Nhân vật phim đen trắng, Mù màu toàn bộ/Khiếm khuyết nặng',
      id: 'Pahlawan Film Hitam Putih, Monokromasi/Defisiensi Parah'
    },
    description: {
      ko: '"색보다는 명암이 더 뚜렷하게 다가오나요?" 색상을 구별하는 능력이 매우 약하거나, 흑백으로 세상을 보는 경우입니다. 색깔 정보보다는 사물의 밝기(명도)와 형태에 의존하여 세상을 인식합니다. 매우 희귀한 케이스이며, 대신 야간 시력이 일반인보다 좋은 경우도 있습니다.',
      en: '"Do brightness and contrast feel more distinct than color?" This is when your ability to distinguish colors is very weak, or you see the world in black and white. You recognize the world by relying on the brightness (luminance) and shape of objects rather than color information. This is a very rare case, and you may have better night vision than the average person.',
      ja: '「色よりも明暗がよりはっきりと近づいてきますか？」色を区別する能力が非常に弱い、または白黒で世界を見ている場合です。色情報よりも物の明るさ（明度）と形状に依存して世界を認識します。非常にまれなケースであり、代わりに夜間視力が一般人よりも良い場合もあります。',
      zh: '“亮度和对比度是否比颜色更明显？”这是指你区分颜色的能力非常弱，或你看到的是黑白世界。你通过依赖物体的亮度（明度）和形状而不是颜色信息来识别世界。这是一个非常罕见的案例，你可能比普通人拥有更好的夜视能力。',
      'zh-TW': '「亮度和對比度是否比顏色更明顯？」這是指你區分顏色的能力非常弱，或你看到的是黑白世界。你通過依賴物體的亮度（明度）和形狀而不是顏色信息來識別世界。這是一個非常罕見的案例，你可能比普通人擁有更好的夜視能力。',
      vi: '"Độ sáng và độ tương phản có cảm thấy rõ ràng hơn màu sắc không?" Đây là khi khả năng phân biệt màu sắc của bạn rất yếu, hoặc bạn nhìn thế giới bằng màu đen trắng. Bạn nhận biết thế giới bằng cách dựa vào độ sáng (độ chói) và hình dạng của vật thể hơn là thông tin màu sắc. Đây là trường hợp rất hiếm, và bạn có thể có thị lực ban đêm tốt hơn người bình thường.',
      id: '"Apakah kecerahan dan kontras terasa lebih jelas daripada warna?" Ini adalah ketika kemampuan Anda untuk membedakan warna sangat lemah, atau Anda melihat dunia dalam hitam dan putih. Anda mengenali dunia dengan mengandalkan kecerahan (luminansi) dan bentuk objek daripada informasi warna. Ini adalah kasus yang sangat langka, dan Anda mungkin memiliki penglihatan malam yang lebih baik daripada rata-rata orang.'
    },
    characteristics: {
      ko: 'Q1(Control)을 제외한 대부분의 문항 오답',
      en: 'Wrong answers in most questions except Q1 (Control)',
      ja: 'Q1（コントロール）を除くほとんどの問題で誤答',
      zh: '除Q1（对照）外，大部分问题都答错',
      'zh-TW': '除Q1（對照）外，大部分問題都答錯',
      vi: 'Câu trả lời sai ở hầu hết câu hỏi ngoại trừ Q1 (Đối chứng)',
      id: 'Jawaban salah di sebagian besar pertanyaan kecuali Q1 (Kontrol)'
    },
    recommendation: {
      ko: '반드시 전문의와 상담하세요',
      en: 'Be sure to consult with a specialist',
      ja: '必ず専門医に相談してください',
      zh: '务必咨询专科医生',
      'zh-TW': '務必諮詢專科醫生',
      vi: 'Nhất định phải tham khảo ý kiến chuyên gia',
      id: 'Pastikan untuk berkonsultasi dengan spesialis'
    }
  }
];

// 결과 계산 함수
export function calculatePhase2ColorBlindResult(answers: { [questionId: number]: string }): Phase2ColorBlindResult {
  // 질문 ID로 빠르게 찾기 위한 Map 생성
  const questionMap = new Map(COLOR_BLIND_QUESTIONS.map(q => [q.id, q]));
  
  // 디버깅: 답변 확인
  console.log('Answers received:', answers);
  
  // Q1 (Control) 체크는 참고용으로만 사용, 직접 결과에 반영하지 않음
  const q1Answer = answers[1];
  const q1Correct = questionMap.get(1)?.correctAnswer;
  const q1CorrectCheck = q1Answer === q1Correct;
  console.log('Q1 Answer:', q1Answer, 'Correct:', q1Correct, 'IsCorrect:', q1CorrectCheck);
  
  // Q2-6: 적록색약 체크
  let redGreenWrongCount = 0;
  for (let i = 2; i <= 6; i++) {
    const question = questionMap.get(i);
    if (question) {
      // 답변이 없거나 정답과 다르면 오답으로 카운트
      if (!answers[i] || answers[i] !== question.correctAnswer) {
        redGreenWrongCount++;
        console.log(`Q${i} wrong: answered "${answers[i]}", correct is "${question.correctAnswer}"`);
      }
    }
  }
  
  // Q7-9: 청황색약 체크
  let blueYellowWrongCount = 0;
  for (let i = 7; i <= 9; i++) {
    const question = questionMap.get(i);
    if (question) {
      // 답변이 없거나 정답과 다르면 오답으로 카운트
      if (!answers[i] || answers[i] !== question.correctAnswer) {
        blueYellowWrongCount++;
        console.log(`Q${i} wrong: answered "${answers[i]}", correct is "${question.correctAnswer}"`);
      }
    }
  }
  
  // Q10-12: 강도 측정
  let intensityWrongCount = 0;
  for (let i = 10; i <= 12; i++) {
    const question = questionMap.get(i);
    if (question) {
      // 답변이 없거나 정답과 다르면 오답으로 카운트
      if (!answers[i] || answers[i] !== question.correctAnswer) {
        intensityWrongCount++;
        console.log(`Q${i} wrong: answered "${answers[i]}", correct is "${question.correctAnswer}"`);
      }
    }
  }
  
  // 판정 로직 (우선순위: Type4 > Type3 > Type2 > Type1)
  // Q1은 제외하고 Q2-12만 체크 (총 11개)
  const totalWrong = redGreenWrongCount + blueYellowWrongCount + intensityWrongCount;
  
  console.log('Wrong counts - RedGreen:', redGreenWrongCount, 'BlueYellow:', blueYellowWrongCount, 'Intensity:', intensityWrongCount, 'Total:', totalWrong, '(Q2-12 out of 11)');
  
  // Type4: 전색맹 (Q1 제외한 대부분 오답: 8개 이상 오답)
  if (totalWrong >= 8) {
    console.log('Returning Type4');
    return PHASE2_COLOR_BLIND_RESULTS[3]; // Type4
  }
  
  // Type3: 청황색약 (Q7-9에서 2개 이상 오답)
  if (blueYellowWrongCount >= 2) {
    console.log('Returning Type3');
    return PHASE2_COLOR_BLIND_RESULTS[2]; // Type3
  }
  
  // Type2: 적록색약 (Q2-6에서 2개 이상 오답)
  if (redGreenWrongCount >= 2) {
    console.log('Returning Type2');
    return PHASE2_COLOR_BLIND_RESULTS[1]; // Type2
  }
  
  // Type1: 정상 (Q2-12에서 1개 이하 오답)
  console.log('Returning Type1');
  return PHASE2_COLOR_BLIND_RESULTS[0]; // Type1
}

