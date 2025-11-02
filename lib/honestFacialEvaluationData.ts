// AI가 보는 솔직한 나의 얼굴 평가 테스트 데이터

export interface HonestFacialEvaluationResult {
  firstImpressionScore: number; // 0-100
  oppositeGenderScore: number; // 0-100
  sameGenderScore: number; // 0-100
  oppositeGenderScoreReason: {
    ko: string;
    en: string;
    ja: string;
    'zh-CN': string;
    'zh-TW': string;
    vi: string;
    id: string;
  };
  sameGenderScoreReason: {
    ko: string;
    en: string;
    ja: string;
    'zh-CN': string;
    'zh-TW': string;
    vi: string;
    id: string;
  };
  appearance: {
    facialFeatures: {
      ko: string[];
      en: string[];
      ja: string[];
      'zh-CN': string[];
      'zh-TW': string[];
      vi: string[];
      id: string[];
    };
  };
  attractiveFeatures: {
    ko: string[];
    en: string[];
    ja: string[];
    'zh-CN': string[];
    'zh-TW': string[];
    vi: string[];
    id: string[];
  };
  improvementSuggestions: {
    ko: string[];
    en: string[];
    ja: string[];
    'zh-CN': string[];
    'zh-TW': string[];
    vi: string[];
    id: string[];
  };
  summary: {
    ko: string;
    en: string;
    ja: string;
    'zh-CN': string;
    'zh-TW': string;
    vi: string;
    id: string;
  };
}

// MediaPipe landmarks와 emotions를 기반으로 긍정적이고 낙관적인 얼굴 평가 생성
export function calculateHonestFacialEvaluationResult(
  landmarks: Array<{ x: number; y: number; z: number }>,
  emotions: Record<string, number>,
  blendshapes?: Array<{ categoryName: string; score: number }>
): HonestFacialEvaluationResult {
  // 기본 점수 계산 (긍정적으로 평가)
  let baseScore = 75; // 기본 75점으로 시작 (낙관적)
  
  // 감정 기반 점수 조정 (긍정적 감정 강조)
  if (emotions.happy > 0.3) {
    baseScore += 10;
  } else if (emotions.neutral > 0.4) {
    baseScore += 5;
  }
  
  // 얼굴 대칭성 계산 (landmarks 기반) - 긍정적으로 해석
  const leftEye = landmarks[33] || { x: 0, y: 0, z: 0 };
  const rightEye = landmarks[263] || { x: 0, y: 0, z: 0 };
  const noseTip = landmarks[4] || { x: 0, y: 0, z: 0 };
  
  const eyeSymmetry = Math.abs((leftEye.x + rightEye.x) / 2 - noseTip.x);
  if (eyeSymmetry < 0.05) { // 대칭적이면
    baseScore += 8;
  } else {
    baseScore += 3; // 대칭적이 아니어도 긍정적으로 해석
  }
  
  // 입꼬리 위치 (미소 분석)
  const leftMouth = landmarks[61] || { x: 0, y: 0, z: 0 };
  const rightMouth = landmarks[291] || { x: 0, y: 0, z: 0 };
  const mouthCenter = landmarks[13] || { x: 0, y: 0, z: 0 };
  
  const mouthCurve = mouthCenter.y - (leftMouth.y + rightMouth.y) / 2;
  if (mouthCurve < -0.01) { // 미소
    baseScore += 7;
  }
  
  // 눈 크기 (큰 눈은 긍정적으로)
  const leftEyeTop = landmarks[159] || { x: 0, y: 0, z: 0 };
  const leftEyeBottom = landmarks[145] || { x: 0, y: 0, z: 0 };
  const eyeOpenness = Math.abs(leftEyeBottom.y - leftEyeTop.y);
  if (eyeOpenness > 0.02) {
    baseScore += 5;
  }
  
  // 최종 점수 클램핑 (낙관적으로 70-100 범위로)
  const finalScore = Math.min(100, Math.max(70, baseScore));
  
  // 생김새 분석 (MediaPipe landmarks 기반)
  // 얼굴 각도와 구조 기반 성별 추정 (통계적 추정, 정확하지 않을 수 있음)
  const jawline = landmarks[172] || { x: 0, y: 0, z: 0 }; // 턱 끝
  const chin = landmarks[18] || { x: 0, y: 0, z: 0 }; // 턱 중심
  const forehead = landmarks[10] || { x: 0, y: 0, z: 0 }; // 이마
  const cheekboneLeft = landmarks[234] || { x: 0, y: 0, z: 0 };
  const cheekboneRight = landmarks[454] || { x: 0, y: 0, z: 0 };
  
  // 얼굴 폭/길이 비율 (일반적으로 남성이 더 각진, 여성이 더 둥근 경향)
  const faceWidth = Math.abs(cheekboneRight.x - cheekboneLeft.x);
  const faceHeight = Math.abs(jawline.y - forehead.y);
  const faceRatio = faceWidth / faceHeight;
  
  // 눈 크기 (일반적으로 여성이 더 큰 경향)
  const rightEyeTop = landmarks[386] || { x: 0, y: 0, z: 0 };
  const rightEyeBottom = landmarks[374] || { x: 0, y: 0, z: 0 };
  const rightEyeSize = Math.abs(rightEyeBottom.y - rightEyeTop.y);
  
  // 코 크기 (일반적으로 남성이 더 큰 경향)
  const noseBridge = landmarks[6] || { x: 0, y: 0, z: 0 };
  const noseWidth = Math.abs((landmarks[48]?.x || 0) - (landmarks[278]?.x || 0));
  
  // 성별 추정 (통계적 경향 기반, 정확도 낮음)
  const isLikelyMale = faceRatio > 0.75 || noseWidth > 0.03 || rightEyeSize < 0.018;
  
  // 성별 정보 생성
  const gender = {
    ko: isLikelyMale ? '남성' : '여성',
    en: isLikelyMale ? 'Male' : 'Female',
    ja: isLikelyMale ? '男性' : '女性',
    'zh-CN': isLikelyMale ? '男性' : '女性',
    'zh-TW': isLikelyMale ? '男性' : '女性',
    vi: isLikelyMale ? 'Nam' : 'Nữ',
    id: isLikelyMale ? 'Laki-laki' : 'Perempuan'
  };
  
  // 얼굴 특징 분석 (다양하게 최소 10개 이상 생성)
  const facialFeatures = {
    ko: [] as string[],
    en: [] as string[],
    ja: [] as string[],
    'zh-CN': [] as string[],
    'zh-TW': [] as string[],
    vi: [] as string[],
    id: [] as string[]
  };
  
  // 눈 크기 및 형태 (세분화, 감정별 다양한 표현)
  if (eyeOpenness > 0.03) {
    const eyeLargeOptions = [
      { ko: '매우 크고 밝은 눈으로 강렬한 시선을 전달합니다', en: 'Very large and bright eyes that convey an intense gaze', ja: '非常に大きく明るい目で強烈な視線を伝えます', 'zh-CN': '非常大的明亮眼睛，传达强烈的目光', 'zh-TW': '非常大的明亮眼睛，傳達強烈的目光', vi: 'Đôi mắt rất to và sáng truyền đạt ánh nhìn mạnh mẽ', id: 'Mata sangat besar dan cerah yang menyampaikan tatapan intens' },
      { ko: '크고 또렷한 눈으로 생동감 있는 표정을 연출합니다', en: 'Large and clear eyes that create a vibrant expression', ja: '大きくはっきりとした目で生き生きとした表情を演出します', 'zh-CN': '大而清晰的眼睛，营造生动的表情', 'zh-TW': '大而清晰的眼睛，營造生動的表情', vi: 'Đôi mắt to và rõ ràng tạo biểu cảm sống động', id: 'Mata besar dan jelas yang menciptakan ekspresi hidup' },
      { ko: '밝고 활기찬 눈매로 에너지 넘치는 인상을 줍니다', en: 'Bright and energetic eyes that give an energetic impression', ja: '明るく活気のある目元でエネルギッシュな印象を与えます', 'zh-CN': '明亮有活力的眼神，给人充满能量的印象', 'zh-TW': '明亮有活力的眼神，給人充滿能量的印象', vi: 'Đôi mắt sáng và tràn đầy sức sống tạo ấn tượng năng động', id: 'Mata cerah dan energetik yang memberi kesan energik' },
      { ko: '강렬한 시선의 큰 눈으로 확고한 의지를 전달합니다', en: 'Large eyes with an intense gaze that convey firm will', ja: '強烈な視線の大きな目で確固たる意志を伝えます', 'zh-CN': '具有强烈目光的大眼睛，传达坚定的意志', 'zh-TW': '具有強烈目光的大眼睛，傳達堅定的意志', vi: 'Đôi mắt to với ánh nhìn mạnh mẽ truyền đạt ý chí vững chắc', id: 'Mata besar dengan tatapan intens yang menyampaikan kemauan teguh' },
      { ko: '매력적이고 표현력 풍부한 큰 눈으로 감성을 전달합니다', en: 'Attractive large eyes rich in expressiveness that convey emotion', ja: '魅力的で表現力豊富な大きな目で感性を伝えます', 'zh-CN': '具有丰富表现力的大眼睛，传达感性', 'zh-TW': '具有豐富表現力的大眼睛，傳達感性', vi: 'Đôi mắt to hấp dẫn giàu biểu cảm truyền đạt cảm xúc', id: 'Mata besar yang menarik dan ekspresif yang menyampaikan emosi' }
    ];
    const eyeLargeIndex = Math.floor((emotions.happy * 1000 + emotions.surprised * 500 + eyeOpenness * 200) % eyeLargeOptions.length);
    const selectedEyeLarge = eyeLargeOptions[eyeLargeIndex];
    facialFeatures.ko.push(selectedEyeLarge.ko);
    facialFeatures.en.push(selectedEyeLarge.en);
    facialFeatures.ja.push(selectedEyeLarge.ja);
    facialFeatures['zh-CN'].push(selectedEyeLarge['zh-CN']);
    facialFeatures['zh-TW'].push(selectedEyeLarge['zh-TW']);
    facialFeatures.vi.push(selectedEyeLarge.vi);
    facialFeatures.id.push(selectedEyeLarge.id);
  } else if (eyeOpenness > 0.025) {
    const eyeMediumLargeOptions = [
      { ko: '크고 밝은 눈으로 시선이 명확하게 전달됩니다', en: 'Large and bright eyes that clearly convey your gaze', ja: '大きく明るい目で視線が明確に伝わります', 'zh-CN': '大而明亮的眼睛，清晰地传达你的目光', 'zh-TW': '大而明亮的眼睛，清晰地傳達你的目光', vi: 'Đôi mắt to và sáng truyền đạt ánh nhìn rõ ràng', id: 'Mata besar dan cerah yang menyampaikan pandangan dengan jelas' },
      { ko: '명확하고 또렷한 눈매로 자신감 있는 표정을 보여줍니다', en: 'Clear and sharp eyes that show a confident expression', ja: '明確ではっきりとした目元で自信のある表情を見せます', 'zh-CN': '清晰锐利的眼神，展现自信的表情', 'zh-TW': '清晰銳利的眼神，展現自信的表情', vi: 'Đôi mắt rõ ràng và sắc nét thể hiện biểu cảm tự tin', id: 'Mata jelas dan tajam yang menunjukkan ekspresi percaya diri' },
      { ko: '밝고 생기 있는 눈으로 긍정적인 에너지를 전달합니다', en: 'Bright and lively eyes that convey positive energy', ja: '明るく生気のある目で前向きなエネルギーを伝えます', 'zh-CN': '明亮有生机的眼睛，传达积极的能量', 'zh-TW': '明亮有生機的眼睛，傳達積極的能量', vi: 'Đôi mắt sáng và sống động truyền đạt năng lượng tích cực', id: 'Mata cerah dan hidup yang menyampaikan energi positif' },
      { ko: '표현력이 풍부한 큰 눈으로 감정을 잘 전달합니다', en: 'Large eyes rich in expressiveness that convey emotions well', ja: '表現力が豊富な大きな目で感情をよく伝えます', 'zh-CN': '表现力丰富的大眼睛，很好地传达情感', 'zh-TW': '表現力豐富的大眼睛，很好地傳達情感', vi: 'Đôi mắt to giàu biểu cảm truyền đạt cảm xúc tốt', id: 'Mata besar yang kaya ekspresi yang menyampaikan emosi dengan baik' },
      { ko: '인상 깊은 큰 눈으로 강렬한 존재감을 보여줍니다', en: 'Large impressive eyes that show a strong presence', ja: '印象深い大きな目で強烈な存在感を見せます', 'zh-CN': '给人深刻印象的大眼睛，展现强烈的存在感', 'zh-TW': '給人深刻印象的大眼睛，展現強烈的存在感', vi: 'Đôi mắt to ấn tượng thể hiện sự hiện diện mạnh mẽ', id: 'Mata besar yang mengesankan yang menunjukkan kehadiran yang kuat' }
    ];
    const eyeMediumLargeIndex = Math.floor((emotions.neutral * 1000 + emotions.happy * 500 + eyeOpenness * 150) % eyeMediumLargeOptions.length);
    const selectedEyeMediumLarge = eyeMediumLargeOptions[eyeMediumLargeIndex];
    facialFeatures.ko.push(selectedEyeMediumLarge.ko);
    facialFeatures.en.push(selectedEyeMediumLarge.en);
    facialFeatures.ja.push(selectedEyeMediumLarge.ja);
    facialFeatures['zh-CN'].push(selectedEyeMediumLarge['zh-CN']);
    facialFeatures['zh-TW'].push(selectedEyeMediumLarge['zh-TW']);
    facialFeatures.vi.push(selectedEyeMediumLarge.vi);
    facialFeatures.id.push(selectedEyeMediumLarge.id);
  } else if (eyeOpenness > 0.02) {
    const eyeMediumOptions = [
      { ko: '적절한 크기의 눈으로 균형감이 좋습니다', en: 'Well-proportioned eyes with good balance', ja: '適切な大きさの目でバランス感が良いです', 'zh-CN': '大小适中的眼睛，平衡感良好', 'zh-TW': '大小適中的眼睛，平衡感良好', vi: 'Đôi mắt có kích thước phù hợp với sự cân bằng tốt', id: 'Mata dengan proporsi yang baik dan keseimbangan bagus' },
      { ko: '균형잡힌 눈 크기로 안정적이고 신뢰감 있는 인상을 줍니다', en: 'Well-balanced eye size that gives a stable and trustworthy impression', ja: 'バランスの取れた目の大きさで安定していて信頼感のある印象を与えます', 'zh-CN': '平衡的眼睛大小，给人稳定可信的印象', 'zh-TW': '平衡的眼睛大小，給人穩定可信的印象', vi: 'Kích thước mắt cân đối tạo ấn tượng ổn định và đáng tin cậy', id: 'Ukuran mata yang seimbang memberi kesan stabil dan terpercaya' },
      { ko: '조화로운 눈 비율로 자연스러운 미를 보여줍니다', en: 'Harmonious eye proportions that show natural beauty', ja: '調和の取れた目の比率で自然な美しさを見せます', 'zh-CN': '和谐的眼睛比例，展现自然美', 'zh-TW': '和諧的眼睛比例，展現自然美', vi: 'Tỷ lệ mắt hài hòa thể hiện vẻ đẹp tự nhiên', id: 'Proporsi mata harmonis yang menunjukkan keindahan alami' },
      { ko: '표정에 균형을 주는 적절한 크기의 눈매', en: 'Eyes of appropriate size that give balance to expression', ja: '表情にバランスを与える適切な大きさの目元', 'zh-CN': '给表情带来平衡的适中大小眼睛', 'zh-TW': '給表情帶來平衡的適中大小眼睛', vi: 'Đôi mắt có kích thước phù hợp tạo cân bằng cho biểu cảm', id: 'Mata berukuran tepat yang memberi keseimbangan pada ekspresi' },
      { ko: '자연스럽고 편안한 인상을 주는 균형잡힌 눈', en: 'Well-balanced eyes that give a natural and comfortable impression', ja: '自然で快適な印象を与えるバランスの取れた目', 'zh-CN': '给人自然舒适印象的平衡眼睛', 'zh-TW': '給人自然舒適印象的平衡眼睛', vi: 'Đôi mắt cân đối tạo ấn tượng tự nhiên và thoải mái', id: 'Mata yang seimbang yang memberi kesan alami dan nyaman' }
    ];
    const eyeMediumIndex = Math.floor((emotions.neutral * 1000 + faceRatio * 500 + eyeOpenness * 100) % eyeMediumOptions.length);
    const selectedEyeMedium = eyeMediumOptions[eyeMediumIndex];
    facialFeatures.ko.push(selectedEyeMedium.ko);
    facialFeatures.en.push(selectedEyeMedium.en);
    facialFeatures.ja.push(selectedEyeMedium.ja);
    facialFeatures['zh-CN'].push(selectedEyeMedium['zh-CN']);
    facialFeatures['zh-TW'].push(selectedEyeMedium['zh-TW']);
    facialFeatures.vi.push(selectedEyeMedium.vi);
    facialFeatures.id.push(selectedEyeMedium.id);
  } else if (eyeOpenness > 0.015) {
    const eyeSmallOptions = [
      { ko: '차분하고 안정적인 눈매로 신뢰감을 줍니다', en: 'Calm and stable eyes that convey trust', ja: '落ち着いて安定した目元で信頼感を与えます', 'zh-CN': '平静稳定的眼神，传达信任感', 'zh-TW': '平靜穩定的眼神，傳達信任感', vi: 'Đôi mắt bình tĩnh và ổn định tạo cảm giác tin cậy', id: 'Mata tenang dan stabil yang menimbulkan kepercayaan' },
      { ko: '깊이 있고 신비로운 눈으로 내적 성찰이 느껴집니다', en: 'Deep and mysterious eyes that suggest inner reflection', ja: '深みがあり神秘的な目で内的反省が感じられます', 'zh-CN': '深邃神秘的眼睛，让人感受到内省', 'zh-TW': '深邃神秘的眼睛，讓人感受到內省', vi: 'Đôi mắt sâu thẳm và bí ẩn gợi lên sự phản ánh nội tâm', id: 'Mata yang dalam dan misterius yang menyarankan refleksi batin' },
      { ko: '침착하고 안정감 있는 눈매로 차분한 매력을 전달합니다', en: 'Composed and stable eyes that convey a calm charm', ja: '沈着で安定感のある目元で落ち着いた魅力を伝えます', 'zh-CN': '沉着稳定的眼神，传达沉静的魅力', 'zh-TW': '沉著穩定的眼神，傳達沉靜的魅力', vi: 'Đôi mắt điềm đạm và ổn định truyền đạt sức hút bình tĩnh', id: 'Mata yang tenang dan stabil yang menyampaikan pesona tenang' },
      { ko: '신중하고 사려 깊은 인상을 주는 차분한 눈', en: 'Calm eyes that give a cautious and thoughtful impression', ja: '慎重で思慮深い印象を与える落ち着いた目', 'zh-CN': '给人谨慎深思印象的平静眼睛', 'zh-TW': '給人謹慎深思印象的平靜眼睛', vi: 'Đôi mắt bình tĩnh tạo ấn tượng thận trọng và sâu sắc', id: 'Mata tenang yang memberi kesan hati-hati dan bijaksana' },
      { ko: '평온하고 고요한 눈으로 안정적인 분위기를 연출합니다', en: 'Peaceful and serene eyes that create a stable atmosphere', ja: '平穏で静かな目で安定した雰囲気を演出します', 'zh-CN': '平静安详的眼睛，营造稳定的氛围', 'zh-TW': '平靜安詳的眼睛，營造穩定的氛圍', vi: 'Đôi mắt bình yên và thanh thản tạo bầu không khí ổn định', id: 'Mata yang damai dan tenang yang menciptakan suasana stabil' }
    ];
    const eyeSmallIndex = Math.floor((emotions.sad * 1000 + emotions.neutral * 500 + eyeOpenness * 80) % eyeSmallOptions.length);
    const selectedEyeSmall = eyeSmallOptions[eyeSmallIndex];
    facialFeatures.ko.push(selectedEyeSmall.ko);
    facialFeatures.en.push(selectedEyeSmall.en);
    facialFeatures.ja.push(selectedEyeSmall.ja);
    facialFeatures['zh-CN'].push(selectedEyeSmall['zh-CN']);
    facialFeatures['zh-TW'].push(selectedEyeSmall['zh-TW']);
    facialFeatures.vi.push(selectedEyeSmall.vi);
    facialFeatures.id.push(selectedEyeSmall.id);
  } else {
    const eyeVerySmallOptions = [
      { ko: '차분하고 깊이 있는 눈으로 신뢰감을 줍니다', en: 'Calm and deep eyes that convey trust', ja: '落ち着いて深みのある目で信頼感を与えます', 'zh-CN': '平静深邃的眼睛，传达信任感', 'zh-TW': '平靜深邃的眼睛，傳達信任感', vi: 'Đôi mắt bình tĩnh và sâu thẳm tạo cảm giác tin cậy', id: 'Mata tenang dan dalam yang menimbulkan kepercayaan' },
      { ko: '신비롭고 매력적인 작은 눈으로 독특한 개성을 보여줍니다', en: 'Mysterious and charming small eyes that show unique personality', ja: '神秘的で魅力的な小さな目で独特な個性を見せます', 'zh-CN': '神秘迷人的小眼睛，展现独特的个性', 'zh-TW': '神秘迷人的小眼睛，展現獨特的個性', vi: 'Đôi mắt nhỏ bí ẩn và quyến rũ thể hiện cá tính độc đáo', id: 'Mata kecil yang misterius dan menawan yang menunjukkan kepribadian unik' },
      { ko: '집중력 있는 작은 눈으로 예리한 인상을 줍니다', en: 'Small focused eyes that give a sharp impression', ja: '集中力のある小さな目で鋭い印象を与えます', 'zh-CN': '专注的小眼睛，给人敏锐的印象', 'zh-TW': '專注的小眼睛，給人敏銳的印象', vi: 'Đôi mắt nhỏ tập trung tạo ấn tượng sắc bén', id: 'Mata kecil yang fokus yang memberi kesan tajam' },
      { ko: '차분하고 우아한 작은 눈매로 세련된 인상을 전달합니다', en: 'Calm and elegant small eyes that convey a refined impression', ja: '落ち着いて優雅な小さな目元で洗練された印象を伝えます', 'zh-CN': '平静优雅的小眼睛，传达精致的印象', 'zh-TW': '平靜優雅的小眼睛，傳達精緻的印象', vi: 'Đôi mắt nhỏ bình tĩnh và thanh lịch truyền đạt ấn tượng tinh tế', id: 'Mata kecil yang tenang dan elegan yang menyampaikan kesan halus' },
      { ko: '내면의 깊이를 보여주는 신중한 작은 눈', en: 'Thoughtful small eyes that show inner depth', ja: '内面の深さを見せる慎重な小さな目', 'zh-CN': '展现内心深度的深思小眼睛', 'zh-TW': '展現內心深度的深思小眼睛', vi: 'Đôi mắt nhỏ suy tư thể hiện chiều sâu nội tâm', id: 'Mata kecil yang bijaksana yang menunjukkan kedalaman batin' }
    ];
    const eyeVerySmallIndex = Math.floor((emotions.sad * 1000 + emotions.fearful * 500 + eyeOpenness * 60) % eyeVerySmallOptions.length);
    const selectedEyeVerySmall = eyeVerySmallOptions[eyeVerySmallIndex];
    facialFeatures.ko.push(selectedEyeVerySmall.ko);
    facialFeatures.en.push(selectedEyeVerySmall.en);
    facialFeatures.ja.push(selectedEyeVerySmall.ja);
    facialFeatures['zh-CN'].push(selectedEyeVerySmall['zh-CN']);
    facialFeatures['zh-TW'].push(selectedEyeVerySmall['zh-TW']);
    facialFeatures.vi.push(selectedEyeVerySmall.vi);
    facialFeatures.id.push(selectedEyeVerySmall.id);
  }
  
  // 눈 모양 추가 분석
  const eyeShape = rightEyeSize;
  if (eyeShape > 0.022) {
    facialFeatures.ko.push('둥근 눈 모양으로 순수하고 밝은 인상을 줍니다');
    facialFeatures.en.push('Round eye shape that gives a pure and bright impression');
    facialFeatures.ja.push('丸い目の形で純粋で明るい印象を与えます');
    facialFeatures['zh-CN'].push('圆润的眼型，给人纯净明亮的印象');
    facialFeatures['zh-TW'].push('圓潤的眼型，給人純淨明亮的印象');
    facialFeatures.vi.push('Hình dáng mắt tròn tạo ấn tượng trong sáng và tươi sáng');
    facialFeatures.id.push('Bentuk mata bulat memberi kesan murni dan cerah');
  } else if (eyeShape > 0.018) {
    facialFeatures.ko.push('세련된 눈 모양으로 우아한 인상을 줍니다');
    facialFeatures.en.push('Refined eye shape that gives an elegant impression');
    facialFeatures.ja.push('洗練された目の形で優雅な印象を与えます');
    facialFeatures['zh-CN'].push('精致的眼型，给人优雅的印象');
    facialFeatures['zh-TW'].push('精緻的眼型，給人優雅的印象');
    facialFeatures.vi.push('Hình dáng mắt tinh tế tạo ấn tượng thanh lịch');
    facialFeatures.id.push('Bentuk mata halus memberi kesan elegan');
  }
  
  // 얼굴 윤곽 및 형태 (세분화, 감정별 다양한 표현)
  if (faceRatio > 0.8) {
    const angularFaceOptions = [
      { ko: '각진 얼굴형으로 강인하고 결단력 있는 인상을 줍니다', en: 'Angular face shape that gives a strong and decisive impression', ja: '角張った顔型で強く決断力のある印象を与えます', 'zh-CN': '棱角分明的脸型，给人坚强果断的印象', 'zh-TW': '稜角分明的臉型，給人堅強果斷的印象', vi: 'Khuôn mặt góc cạnh tạo ấn tượng mạnh mẽ và quyết đoán', id: 'Bentuk wajah bersudut memberi kesan kuat dan tegas' },
      { ko: '선명한 윤곽의 각진 얼굴로 리더십이 느껴집니다', en: 'Angular face with clear contours that suggests leadership', ja: '鮮明な輪郭の角張った顔でリーダーシップが感じられます', 'zh-CN': '轮廓清晰的有棱角脸型，让人感受到领导力', 'zh-TW': '輪廓清晰的有稜角臉型，讓人感受到領導力', vi: 'Khuôn mặt góc cạnh với đường nét rõ ràng gợi lên khả năng lãnh đạo', id: 'Wajah bersudut dengan kontur jelas yang menyarankan kepemimpinan' },
      { ko: '강렬하고 단호한 인상을 주는 각진 얼굴 윤곽', en: 'Angular facial contour that gives a strong and resolute impression', ja: '強烈で断固とした印象を与える角張った顔の輪郭', 'zh-CN': '给人强烈坚决印象的有棱角面部轮廓', 'zh-TW': '給人強烈堅決印象的有稜角面部輪廓', vi: 'Đường nét khuôn mặt góc cạnh tạo ấn tượng mạnh mẽ và quyết đoán', id: 'Kontur wajah bersudut yang memberi kesan kuat dan tegas' },
      { ko: '확고한 신념을 보여주는 각이 진 얼굴형', en: 'Angular face shape showing firm conviction', ja: '確固とした信念を示す角の立った顔型', 'zh-CN': '展现坚定信念的有棱角脸型', 'zh-TW': '展現堅定信念的有稜角臉型', vi: 'Khuôn mặt góc cạnh thể hiện niềm tin vững chắc', id: 'Bentuk wajah bersudut yang menunjukkan keyakinan teguh' },
      { ko: '의지력이 강한 인상을 주는 명확한 얼굴 윤곽', en: 'Clear facial contour that gives an impression of strong will', ja: '意志力が強い印象を与える明確な顔の輪郭', 'zh-CN': '给人强烈意志力印象的清晰面部轮廓', 'zh-TW': '給人強烈意志力印象的清晰面部輪廓', vi: 'Đường nét khuôn mặt rõ ràng tạo ấn tượng ý chí mạnh mẽ', id: 'Kontur wajah yang jelas yang memberi kesan kemauan kuat' }
    ];
    const angularFaceIndex = Math.floor((emotions.angry * 1000 + emotions.contempt * 500 + faceRatio * 300) % angularFaceOptions.length);
    const selectedAngularFace = angularFaceOptions[angularFaceIndex];
    facialFeatures.ko.push(selectedAngularFace.ko);
    facialFeatures.en.push(selectedAngularFace.en);
    facialFeatures.ja.push(selectedAngularFace.ja);
    facialFeatures['zh-CN'].push(selectedAngularFace['zh-CN']);
    facialFeatures['zh-TW'].push(selectedAngularFace['zh-TW']);
    facialFeatures.vi.push(selectedAngularFace.vi);
    facialFeatures.id.push(selectedAngularFace.id);
  } else if (faceRatio > 0.75) {
    const balancedFaceOptions = [
      { ko: '균형 잡힌 얼굴형으로 안정적인 인상을 줍니다', en: 'Well-balanced face shape that gives a stable impression', ja: 'バランスの取れた顔型で安定した印象を与えます', 'zh-CN': '匀称的脸型，给人稳定的印象', 'zh-TW': '勻稱的臉型，給人穩定的印象', vi: 'Khuôn mặt cân đối tạo ấn tượng ổn định', id: 'Bentuk wajah yang seimbang memberi kesan stabil' },
      { ko: '이상적인 비율의 얼굴로 조화로운 인상', en: 'Face with ideal proportions that gives a harmonious impression', ja: '理想的な比率の顔で調和の取れた印象', 'zh-CN': '具有理想比例的脸，给人和谐的印象', 'zh-TW': '具有理想比例的臉，給人和諧的印象', vi: 'Khuôn mặt với tỷ lệ lý tưởng tạo ấn tượng hài hòa', id: 'Wajah dengan proporsi ideal yang memberi kesan harmonis' },
      { ko: '완벽한 균형감으로 신뢰감을 주는 얼굴형', en: 'Face shape with perfect balance that inspires trust', ja: '完璧なバランス感で信頼感を与える顔型', 'zh-CN': '具有完美平衡感的脸型，给人信任感', 'zh-TW': '具有完美平衡感的臉型，給人信任感', vi: 'Khuôn mặt với cảm giác cân bằng hoàn hảo tạo cảm giác tin cậy', id: 'Bentuk wajah dengan keseimbangan sempurna yang menginspirasi kepercayaan' },
      { ko: '자연스러운 비율로 안정감 있는 얼굴 구조', en: 'Facial structure with natural proportions that feels stable', ja: '自然な比率で安定感のある顔構造', 'zh-CN': '具有自然比例的面部结构，感觉稳定', 'zh-TW': '具有自然比例的面部結構，感覺穩定', vi: 'Cấu trúc khuôn mặt với tỷ lệ tự nhiên tạo cảm giác ổn định', id: 'Struktur wajah dengan proporsi alami yang terasa stabil' },
      { ko: '조화로운 얼굴 윤곽으로 평온한 인상을 전달합니다', en: 'Harmonious facial contour that conveys a peaceful impression', ja: '調和の取れた顔の輪郭で平穏な印象を伝えます', 'zh-CN': '和谐的面部轮廓，传达平静的印象', 'zh-TW': '和諧的面部輪廓，傳達平靜的印象', vi: 'Đường nét khuôn mặt hài hòa truyền đạt ấn tượng bình yên', id: 'Kontur wajah harmonis yang menyampaikan kesan damai' }
    ];
    const balancedFaceIndex = Math.floor((emotions.neutral * 1000 + emotions.happy * 500 + faceRatio * 250) % balancedFaceOptions.length);
    const selectedBalancedFace = balancedFaceOptions[balancedFaceIndex];
    facialFeatures.ko.push(selectedBalancedFace.ko);
    facialFeatures.en.push(selectedBalancedFace.en);
    facialFeatures.ja.push(selectedBalancedFace.ja);
    facialFeatures['zh-CN'].push(selectedBalancedFace['zh-CN']);
    facialFeatures['zh-TW'].push(selectedBalancedFace['zh-TW']);
    facialFeatures.vi.push(selectedBalancedFace.vi);
    facialFeatures.id.push(selectedBalancedFace.id);
  } else if (faceRatio > 0.7) {
    const refinedFaceOptions = [
      { ko: '세련되고 고급스러운 얼굴 윤곽을 가지고 있습니다', en: 'Refined and elegant facial contour', ja: '洗練された上品な顔の輪郭を持っています', 'zh-CN': '精致优雅的面部轮廓', 'zh-TW': '精緻優雅的面部輪廓', vi: 'Đường nét khuôn mặt tinh tế và thanh lịch', id: 'Kontur wajah yang halus dan elegan' },
      { ko: '우아하고 정제된 얼굴 윤곽으로 고급스러운 매력', en: 'Elegant and refined facial contour with sophisticated charm', ja: '優雅で洗練された顔の輪郭で上品な魅力', 'zh-CN': '优雅精致的面部轮廓，具有精致的魅力', 'zh-TW': '優雅精緻的面部輪廓，具有精緻的魅力', vi: 'Đường nét khuôn mặt thanh lịch và tinh tế với sức hút sang trọng', id: 'Kontur wajah elegan dan halus dengan pesona canggih' },
      { ko: '섬세하고 고급스러운 얼굴 윤곽으로 세련된 인상', en: 'Delicate and sophisticated facial contour that gives a refined impression', ja: '繊細で上品な顔の輪郭で洗練された印象', 'zh-CN': '细腻精致的面部轮廓，给人精致的印象', 'zh-TW': '細膩精緻的面部輪廓，給人精緻的印象', vi: 'Đường nét khuôn mặt tinh tế và sang trọng tạo ấn tượng tinh xảo', id: 'Kontur wajah halus dan canggih yang memberi kesan halus' },
      { ko: '품격 있는 얼굴 윤곽으로 완성도 높은 인상', en: 'Dignified facial contour that gives a highly finished impression', ja: '品格のある顔の輪郭で完成度の高い印象', 'zh-CN': '有品位的面部轮廓，给人高度完成的印象', 'zh-TW': '有品位的面部輪廓，給人高度完成的印象', vi: 'Đường nét khuôn mặt có phẩm cách tạo ấn tượng hoàn thiện cao', id: 'Kontur wajah bermartabat yang memberi kesan sangat selesai' },
      { ko: '정제된 미학을 가진 우아한 얼굴 윤곽', en: 'Elegant facial contour with refined aesthetics', ja: '洗練された美学を持つ優雅な顔の輪郭', 'zh-CN': '具有精致美学的优雅面部轮廓', 'zh-TW': '具有精緻美學的優雅面部輪廓', vi: 'Đường nét khuôn mặt thanh lịch với thẩm mỹ tinh tế', id: 'Kontur wajah elegan dengan estetika halus' }
    ];
    const refinedFaceIndex = Math.floor((emotions.disgusted * 1000 + emotions.neutral * 500 + faceRatio * 200) % refinedFaceOptions.length);
    const selectedRefinedFace = refinedFaceOptions[refinedFaceIndex];
    facialFeatures.ko.push(selectedRefinedFace.ko);
    facialFeatures.en.push(selectedRefinedFace.en);
    facialFeatures.ja.push(selectedRefinedFace.ja);
    facialFeatures['zh-CN'].push(selectedRefinedFace['zh-CN']);
    facialFeatures['zh-TW'].push(selectedRefinedFace['zh-TW']);
    facialFeatures.vi.push(selectedRefinedFace.vi);
    facialFeatures.id.push(selectedRefinedFace.id);
  } else if (faceRatio > 0.65) {
    const softFaceOptions = [
      { ko: '부드럽고 우아한 얼굴 윤곽으로 친근한 인상을 줍니다', en: 'Soft and elegant facial contour that gives a friendly impression', ja: '柔らかく優雅な顔の輪郭で親しみやすい印象を与えます', 'zh-CN': '柔和优雅的面部轮廓，给人友好的印象', 'zh-TW': '柔和優雅的面部輪廓，給人友好的印象', vi: 'Đường nét khuôn mặt mềm mại và thanh lịch tạo ấn tượng thân thiện', id: 'Kontur wajah lembut dan elegan memberi kesan ramah' },
      { ko: '온화하고 따뜻한 느낌의 부드러운 얼굴 윤곽', en: 'Soft facial contour with a gentle and warm feel', ja: '温和で温かい感じの柔らかい顔の輪郭', 'zh-CN': '具有温和温暖感觉的柔和面部轮廓', 'zh-TW': '具有溫和溫暖感覺的柔和面部輪廓', vi: 'Đường nét khuôn mặt mềm mại với cảm giác dịu dàng và ấm áp', id: 'Kontur wajah lembut dengan rasa lembut dan hangat' },
      { ko: '친근하고 매력적인 부드러운 얼굴형', en: 'Friendly and charming soft face shape', ja: '親しみやすく魅力的な柔らかい顔型', 'zh-CN': '友好迷人的柔和脸型', 'zh-TW': '友好迷人的柔和臉型', vi: 'Khuôn mặt mềm mại thân thiện và quyến rũ', id: 'Bentuk wajah lembut yang ramah dan menawan' },
      { ko: '사람을 끌어당기는 따뜻한 얼굴 윤곽', en: 'Warm facial contour that attracts people', ja: '人を引き寄せる温かい顔の輪郭', 'zh-CN': '吸引人的温暖面部轮廓', 'zh-TW': '吸引人的溫暖面部輪廓', vi: 'Đường nét khuôn mặt ấm áp thu hút mọi người', id: 'Kontur wajah hangat yang menarik orang' },
      { ko: '편안하고 자연스러운 부드러운 얼굴 인상', en: 'Comfortable and natural soft facial impression', ja: '快適で自然な柔らかい顔の印象', 'zh-CN': '舒适自然的柔和面部印象', 'zh-TW': '舒適自然的柔和面部印象', vi: 'Ấn tượng khuôn mặt mềm mại thoải mái và tự nhiên', id: 'Kesan wajah lembut yang nyaman dan alami' }
    ];
    const softFaceIndex = Math.floor((emotions.happy * 1000 + emotions.neutral * 500 + faceRatio * 150) % softFaceOptions.length);
    const selectedSoftFace = softFaceOptions[softFaceIndex];
    facialFeatures.ko.push(selectedSoftFace.ko);
    facialFeatures.en.push(selectedSoftFace.en);
    facialFeatures.ja.push(selectedSoftFace.ja);
    facialFeatures['zh-CN'].push(selectedSoftFace['zh-CN']);
    facialFeatures['zh-TW'].push(selectedSoftFace['zh-TW']);
    facialFeatures.vi.push(selectedSoftFace.vi);
    facialFeatures.id.push(selectedSoftFace.id);
  } else {
    const roundFaceOptions = [
      { ko: '부드럽고 둥근 얼굴형으로 따뜻한 인상을 줍니다', en: 'Soft and round face shape that gives a warm impression', ja: '柔らかく丸い顔型で温かい印象を与えます', 'zh-CN': '柔和圆润的脸型，给人温暖的印象', 'zh-TW': '柔和圓潤的臉型，給人溫暖的印象', vi: 'Khuôn mặt mềm mại và tròn tạo ấn tượng ấm áp', id: 'Bentuk wajah lembut dan bulat memberi kesan hangat' },
      { ko: '사랑스럽고 순수한 느낌의 둥근 얼굴형', en: 'Round face shape with a lovely and pure feel', ja: '愛らしく純粋な感じの丸い顔型', 'zh-CN': '具有可爱纯真感觉的圆润脸型', 'zh-TW': '具有可愛純真感覺的圓潤臉型', vi: 'Khuôn mặt tròn với cảm giác đáng yêu và trong sáng', id: 'Bentuk wajah bulat dengan rasa manis dan murni' },
      { ko: '따뜻하고 포근한 느낌의 부드러운 얼굴 윤곽', en: 'Soft facial contour with a warm and cozy feel', ja: '温かく心地よい感じの柔らかい顔の輪郭', 'zh-CN': '具有温暖舒适感觉的柔和面部轮廓', 'zh-TW': '具有溫暖舒適感覺的柔和面部輪廓', vi: 'Đường nét khuôn mặt mềm mại với cảm giác ấm áp và ấm cúng', id: 'Kontur wajah lembut dengan rasa hangat dan nyaman' },
      { ko: '친근하고 애정 넘치는 둥근 얼굴형', en: 'Friendly and affectionate round face shape', ja: '親しみやすく愛情に満ちた丸い顔型', 'zh-CN': '友好充满爱意的圆润脸型', 'zh-TW': '友好充滿愛意的圓潤臉型', vi: 'Khuôn mặt tròn thân thiện và tràn đầy tình cảm', id: 'Bentuk wajah bulat yang ramah dan penuh kasih sayang' },
      { ko: '자연스럽고 편안한 느낌의 순수한 얼굴형', en: 'Pure face shape with a natural and comfortable feel', ja: '自然で快適な感じの純粋な顔型', 'zh-CN': '具有自然舒适感觉的纯真脸型', 'zh-TW': '具有自然舒適感覺的純真臉型', vi: 'Khuôn mặt trong sáng với cảm giác tự nhiên và thoải mái', id: 'Bentuk wajah murni dengan rasa alami dan nyaman' }
    ];
    const roundFaceIndex = Math.floor((emotions.happy * 1000 + emotions.sad * 500 + faceRatio * 100) % roundFaceOptions.length);
    const selectedRoundFace = roundFaceOptions[roundFaceIndex];
    facialFeatures.ko.push(selectedRoundFace.ko);
    facialFeatures.en.push(selectedRoundFace.en);
    facialFeatures.ja.push(selectedRoundFace.ja);
    facialFeatures['zh-CN'].push(selectedRoundFace['zh-CN']);
    facialFeatures['zh-TW'].push(selectedRoundFace['zh-TW']);
    facialFeatures.vi.push(selectedRoundFace.vi);
    facialFeatures.id.push(selectedRoundFace.id);
  }
  
  // 얼굴 폭 분석 (감정별 다양한 표현)
  if (faceWidth > 0.15) {
    const wideFaceOptions = [
      { ko: '넓은 얼굴 폭으로 포용력 있는 인상을 줍니다', en: 'Wide face width that gives an inclusive impression', ja: '広い顔幅で包容力のある印象を与えます', 'zh-CN': '宽阔的面宽，给人包容的印象', 'zh-TW': '寬闊的面寬，給人包容的印象', vi: 'Chiều rộng khuôn mặt rộng tạo ấn tượng bao dung', id: 'Lebar wajah yang luas memberi kesan inklusif' },
      { ko: '관대하고 포용적인 느낌의 넓은 얼굴형', en: 'Wide face shape with a generous and inclusive feel', ja: '寛大で包容的な感じの広い顔型', 'zh-CN': '具有宽厚包容感的宽阔脸型', 'zh-TW': '具有寬厚包容感的寬闊臉型', vi: 'Khuôn mặt rộng với cảm giác rộng lượng và bao dung', id: 'Bentuk wajah lebar dengan rasa murah hati dan inklusif' },
      { ko: '자신감 넘치는 넓은 얼굴 폭으로 안정감을 줍니다', en: 'Wide face width overflowing with confidence that gives stability', ja: '自信に満ちた広い顔幅で安定感を与えます', 'zh-CN': '充满自信的宽阔面宽，给人稳定感', 'zh-TW': '充滿自信的寬闊面寬，給人穩定感', vi: 'Chiều rộng khuôn mặt rộng tràn đầy tự tin tạo cảm giác ổn định', id: 'Lebar wajah yang luas yang meluap dengan kepercayaan diri memberi stabilitas' },
      { ko: '리더십이 느껴지는 넓고 강인한 얼굴 폭', en: 'Wide and strong face width that suggests leadership', ja: 'リーダーシップが感じられる広く強靭な顔幅', 'zh-CN': '让人感受到领导力的宽阔强韧面宽', 'zh-TW': '讓人感受到領導力的寬闊強韌面寬', vi: 'Chiều rộng khuôn mặt rộng và mạnh mẽ gợi lên khả năng lãnh đạo', id: 'Lebar wajah yang luas dan kuat yang menyarankan kepemimpinan' },
      { ko: '대인관계에 유리한 넓은 얼굴 폭', en: 'Wide face width that is advantageous for interpersonal relationships', ja: '対人関係に有利な広い顔幅', 'zh-CN': '有利于人际关系的宽阔面宽', 'zh-TW': '有利於人際關係的寬闊面寬', vi: 'Chiều rộng khuôn mặt rộng thuận lợi cho các mối quan hệ giữa người với người', id: 'Lebar wajah yang luas yang menguntungkan untuk hubungan interpersonal' }
    ];
    const wideFaceIndex = Math.floor((emotions.contempt * 1000 + emotions.neutral * 500 + faceWidth * 300) % wideFaceOptions.length);
    const selectedWideFace = wideFaceOptions[wideFaceIndex];
    facialFeatures.ko.push(selectedWideFace.ko);
    facialFeatures.en.push(selectedWideFace.en);
    facialFeatures.ja.push(selectedWideFace.ja);
    facialFeatures['zh-CN'].push(selectedWideFace['zh-CN']);
    facialFeatures['zh-TW'].push(selectedWideFace['zh-TW']);
    facialFeatures.vi.push(selectedWideFace.vi);
    facialFeatures.id.push(selectedWideFace.id);
  } else if (faceWidth > 0.12) {
    const mediumFaceOptions = [
      { ko: '적절한 얼굴 폭으로 균형잡힌 비율을 보입니다', en: 'Appropriate face width showing balanced proportions', ja: '適切な顔幅でバランスの取れた比率を示しています', 'zh-CN': '适中的面宽，显示平衡的比例', 'zh-TW': '適中的面寬，顯示平衡的比例', vi: 'Chiều rộng khuôn mặt phù hợp thể hiện tỷ lệ cân đối', id: 'Lebar wajah yang tepat menunjukkan proporsi seimbang' },
      { ko: '이상적인 얼굴 폭으로 조화로운 인상', en: 'Ideal face width that gives a harmonious impression', ja: '理想的な顔幅で調和の取れた印象', 'zh-CN': '理想的面宽，给人和谐的印象', 'zh-TW': '理想的面寬，給人和諧的印象', vi: 'Chiều rộng khuôn mặt lý tưởng tạo ấn tượng hài hòa', id: 'Lebar wajah ideal yang memberi kesan harmonis' },
      { ko: '균형잡힌 얼굴 폭으로 자연스러운 미', en: 'Balanced face width that shows natural beauty', ja: 'バランスの取れた顔幅で自然な美しさ', 'zh-CN': '平衡的面宽，展现自然美', 'zh-TW': '平衡的面寬，展現自然美', vi: 'Chiều rộng khuôn mặt cân đối thể hiện vẻ đẹp tự nhiên', id: 'Lebar wajah seimbang yang menunjukkan keindahan alami' },
      { ko: '완벽한 비율의 얼굴 폭으로 세련된 인상', en: 'Face width with perfect proportions that gives a refined impression', ja: '完璧な比率の顔幅で洗練された印象', 'zh-CN': '具有完美比例的面宽，给人精致的印象', 'zh-TW': '具有完美比例的面寬，給人精緻的印象', vi: 'Chiều rộng khuôn mặt với tỷ lệ hoàn hảo tạo ấn tượng tinh xảo', id: 'Lebar wajah dengan proporsi sempurna yang memberi kesan halus' },
      { ko: '안정적이고 신뢰감 있는 얼굴 폭', en: 'Stable and trustworthy face width', ja: '安定していて信頼感のある顔幅', 'zh-CN': '稳定可信的面宽', 'zh-TW': '穩定可信的面寬', vi: 'Chiều rộng khuôn mặt ổn định và đáng tin cậy', id: 'Lebar wajah yang stabil dan terpercaya' }
    ];
    const mediumFaceIndex = Math.floor((emotions.neutral * 1000 + emotions.happy * 500 + faceWidth * 250) % mediumFaceOptions.length);
    const selectedMediumFace = mediumFaceOptions[mediumFaceIndex];
    facialFeatures.ko.push(selectedMediumFace.ko);
    facialFeatures.en.push(selectedMediumFace.en);
    facialFeatures.ja.push(selectedMediumFace.ja);
    facialFeatures['zh-CN'].push(selectedMediumFace['zh-CN']);
    facialFeatures['zh-TW'].push(selectedMediumFace['zh-TW']);
    facialFeatures.vi.push(selectedMediumFace.vi);
    facialFeatures.id.push(selectedMediumFace.id);
  } else {
    const narrowFaceOptions = [
      { ko: '세련된 얼굴 폭으로 정제된 인상을 줍니다', en: 'Refined face width that gives a polished impression', ja: '洗練された顔幅で上品な印象を与えます', 'zh-CN': '精致的面宽，给人优雅的印象', 'zh-TW': '精緻的面寬，給人優雅的印象', vi: 'Chiều rộng khuôn mặt tinh tế tạo ấn tượng thanh lịch', id: 'Lebar wajah yang halus memberi kesan elegan' },
      { ko: '우아하고 섬세한 얼굴 폭으로 고급스러운 매력', en: 'Elegant and delicate face width with sophisticated charm', ja: '優雅で繊細な顔幅で上品な魅力', 'zh-CN': '优雅细腻的面宽，具有精致的魅力', 'zh-TW': '優雅細膩的面寬，具有精緻的魅力', vi: 'Chiều rộng khuôn mặt thanh lịch và tinh tế với sức hút sang trọng', id: 'Lebar wajah elegan dan halus dengan pesona canggih' },
      { ko: '정제된 얼굴 폭으로 완성도 높은 인상', en: 'Refined face width that gives a highly finished impression', ja: '洗練された顔幅で完成度の高い印象', 'zh-CN': '精致的面宽，给人高度完成的印象', 'zh-TW': '精緻的面寬，給人高度完成的印象', vi: 'Chiều rộng khuôn mặt tinh tế tạo ấn tượng hoàn thiện cao', id: 'Lebar wajah halus yang memberi kesan sangat selesai' },
      { ko: '섬세하고 고급스러운 얼굴 폭', en: 'Delicate and sophisticated face width', ja: '繊細で上品な顔幅', 'zh-CN': '细腻精致的面宽', 'zh-TW': '細膩精緻的面寬', vi: 'Chiều rộng khuôn mặt tinh tế và sang trọng', id: 'Lebar wajah halus dan canggih' },
      { ko: '품격 있는 얼굴 폭으로 우아한 인상', en: 'Dignified face width that gives an elegant impression', ja: '品格のある顔幅で優雅な印象', 'zh-CN': '有品位的面宽，给人优雅的印象', 'zh-TW': '有品位的面寬，給人優雅的印象', vi: 'Chiều rộng khuôn mặt có phẩm cách tạo ấn tượng thanh lịch', id: 'Lebar wajah bermartabat yang memberi kesan elegan' }
    ];
    const narrowFaceIndex = Math.floor((emotions.disgusted * 1000 + emotions.neutral * 500 + faceWidth * 200) % narrowFaceOptions.length);
    const selectedNarrowFace = narrowFaceOptions[narrowFaceIndex];
    facialFeatures.ko.push(selectedNarrowFace.ko);
    facialFeatures.en.push(selectedNarrowFace.en);
    facialFeatures.ja.push(selectedNarrowFace.ja);
    facialFeatures['zh-CN'].push(selectedNarrowFace['zh-CN']);
    facialFeatures['zh-TW'].push(selectedNarrowFace['zh-TW']);
    facialFeatures.vi.push(selectedNarrowFace.vi);
    facialFeatures.id.push(selectedNarrowFace.id);
  }
  
  // 대칭성 (세분화)
  if (eyeSymmetry < 0.03) {
    facialFeatures.ko.push('거의 완벽한 대칭으로 매우 조화로운 얼굴 구조입니다');
    facialFeatures.en.push('Almost perfect symmetry creating a very harmonious facial structure');
    facialFeatures.ja.push('ほとんど完璧な対称で非常に調和の取れた顔構造です');
    facialFeatures['zh-CN'].push('近乎完美的对称，形成非常和谐的面部结构');
    facialFeatures['zh-TW'].push('近乎完美的對稱，形成非常和諧的面部結構');
    facialFeatures.vi.push('Gần như đối xứng hoàn hảo tạo cấu trúc khuôn mặt rất hài hòa');
    facialFeatures.id.push('Simetri hampir sempurna menciptakan struktur wajah yang sangat harmonis');
  } else if (eyeSymmetry < 0.05) {
    facialFeatures.ko.push('매우 대칭적인 얼굴 구조로 조화로움을 느낄 수 있습니다');
    facialFeatures.en.push('Highly symmetrical facial structure that feels harmonious');
    facialFeatures.ja.push('非常に左右対称な顔構造で調和を感じられます');
    facialFeatures['zh-CN'].push('高度对称的面部结构，感受和谐');
    facialFeatures['zh-TW'].push('高度對稱的面部結構，感受和諧');
    facialFeatures.vi.push('Cấu trúc khuôn mặt đối xứng cao tạo cảm giác hài hòa');
    facialFeatures.id.push('Struktur wajah yang sangat simetris terasa harmonis');
  } else if (eyeSymmetry < 0.08) {
    facialFeatures.ko.push('자연스러운 비대칭으로 개성을 갖추고 있습니다');
    facialFeatures.en.push('Natural asymmetry that adds personality');
    facialFeatures.ja.push('自然な非対称で個性を備えています');
    facialFeatures['zh-CN'].push('自然的非对称，彰显个性');
    facialFeatures['zh-TW'].push('自然的非對稱，彰顯個性');
    facialFeatures.vi.push('Sự bất đối xứng tự nhiên tạo thêm cá tính');
    facialFeatures.id.push('Asimetri alami yang menambah kepribadian');
  } else {
    facialFeatures.ko.push('독특한 비대칭으로 독창적인 매력을 보입니다');
    facialFeatures.en.push('Unique asymmetry showing distinctive charm');
    facialFeatures.ja.push('独特な非対称で独創的な魅力を見せています');
    facialFeatures['zh-CN'].push('独特的非对称，展现独创新魅力');
    facialFeatures['zh-TW'].push('獨特的非對稱，展現獨創新魅力');
    facialFeatures.vi.push('Sự bất đối xứng độc đáo thể hiện sức hút riêng biệt');
    facialFeatures.id.push('Asimetri unik yang menunjukkan pesona khas');
  }
  
  
  // 입꼬리 위치 분석 (mouthCenter는 이미 선언됨)
  const avgMouthY = (leftMouth.y + rightMouth.y) / 2;
  const mouthAngle = mouthCenter.y - avgMouthY;
  if (mouthAngle < -0.015) {
    facialFeatures.ko.push('자연스러운 미소 각도로 긍정적인 에너지를 보입니다');
    facialFeatures.en.push('Natural smile angle showing positive energy');
    facialFeatures.ja.push('自然な笑顔の角度で前向きなエネルギーを見せています');
    facialFeatures['zh-CN'].push('自然的微笑角度，展现积极能量');
    facialFeatures['zh-TW'].push('自然的微笑角度，展現積極能量');
    facialFeatures.vi.push('Góc cười tự nhiên thể hiện năng lượng tích cực');
    facialFeatures.id.push('Sudut senyum alami menunjukkan energi positif');
  }
  
  // 입술 및 입 모양 (mouthWidth 계산)
  const mouthWidth = Math.abs(rightMouth.x - leftMouth.x);
  if (mouthWidth > 0.1) {
    facialFeatures.ko.push('넓고 매력적인 입술로 표현력이 매우 풍부합니다');
    facialFeatures.en.push('Wide and attractive lips with very rich expressiveness');
    facialFeatures.ja.push('広く魅力的な唇で表現力が非常に豊富です');
    facialFeatures['zh-CN'].push('宽阔迷人的唇型，表现力非常丰富');
    facialFeatures['zh-TW'].push('寬闊迷人的唇型，表現力非常豐富');
    facialFeatures.vi.push('Đôi môi rộng và hấp dẫn với khả năng biểu cảm rất phong phú');
    facialFeatures.id.push('Bibir lebar dan menarik dengan ekspresi sangat kaya');
  } else if (mouthWidth > 0.08) {
    facialFeatures.ko.push('매력적인 입술 라인으로 표현력이 풍부합니다');
    facialFeatures.en.push('Attractive lip line with rich expressiveness');
    facialFeatures.ja.push('魅力的な唇のラインで表現力が豊富です');
    facialFeatures['zh-CN'].push('迷人的唇线，表现力丰富');
    facialFeatures['zh-TW'].push('迷人的唇線，表現力豐富');
    facialFeatures.vi.push('Đường môi hấp dẫn với khả năng biểu cảm phong phú');
    facialFeatures.id.push('Garis bibir yang menarik dengan ekspresi kaya');
  } else if (mouthWidth > 0.06) {
    facialFeatures.ko.push('조화로운 입 모양으로 균형잡힌 얼굴을 만듭니다');
    facialFeatures.en.push('Harmonious mouth shape that creates a balanced face');
    facialFeatures.ja.push('調和の取れた口の形でバランスの取れた顔を作ります');
    facialFeatures['zh-CN'].push('和谐的嘴型，创造平衡的面容');
    facialFeatures['zh-TW'].push('和諧的嘴型，創造平衡的面容');
    facialFeatures.vi.push('Hình dáng miệng hài hòa tạo khuôn mặt cân đối');
    facialFeatures.id.push('Bentuk mulut harmonis yang menciptakan wajah seimbang');
  } else {
    facialFeatures.ko.push('작고 정제된 입 모양으로 섬세한 인상을 줍니다');
    facialFeatures.en.push('Small and refined mouth shape that gives a delicate impression');
    facialFeatures.ja.push('小さく洗練された口の形で繊細な印象を与えます');
    facialFeatures['zh-CN'].push('小巧精致的嘴型，给人细腻的印象');
    facialFeatures['zh-TW'].push('小巧精緻的嘴型，給人細膩的印象');
    facialFeatures.vi.push('Hình dáng miệng nhỏ và tinh tế tạo ấn tượng tinh tế');
    facialFeatures.id.push('Bentuk mulut kecil dan halus memberi kesan halus');
  }
  
  // 코 형태 분석 (세분화, noseWidth는 이미 선언됨)
  const noseHeight = Math.abs(noseTip.y - noseBridge.y);
  if (noseHeight > 0.1) {
    facialFeatures.ko.push('매우 뚜렷한 코 윤곽으로 강렬한 입체감을 줍니다');
    facialFeatures.en.push('Very distinct nose contour that gives intense dimension');
    facialFeatures.ja.push('非常にはっきりとした鼻の輪郭で強烈な立体感を与えます');
    facialFeatures['zh-CN'].push('非常清晰的鼻梁轮廓，带来强烈的立体感');
    facialFeatures['zh-TW'].push('非常清晰的鼻樑輪廓，帶來強烈的立體感');
    facialFeatures.vi.push('Đường nét mũi rất rõ ràng tạo chiều sâu mạnh mẽ');
    facialFeatures.id.push('Kontur hidung yang sangat jelas memberikan dimensi intens');
  } else if (noseHeight > 0.08) {
    facialFeatures.ko.push('뚜렷한 코 윤곽으로 얼굴에 입체감을 줍니다');
    facialFeatures.en.push('Distinct nose contour that adds dimension to the face');
    facialFeatures.ja.push('はっきりとした鼻の輪郭で顔に立体感を与えます');
    facialFeatures['zh-CN'].push('清晰的鼻梁轮廓，为面部增加立体感');
    facialFeatures['zh-TW'].push('清晰的鼻樑輪廓，為面部增加立體感');
    facialFeatures.vi.push('Đường nét mũi rõ ràng tạo chiều sâu cho khuôn mặt');
    facialFeatures.id.push('Kontur hidung yang jelas menambah dimensi pada wajah');
  } else if (noseHeight > 0.06) {
    facialFeatures.ko.push('적절한 높이의 코로 균형잡힌 얼굴 비율을 만듭니다');
    facialFeatures.en.push('Appropriate nose height creating balanced facial proportions');
    facialFeatures.ja.push('適切な高さの鼻でバランスの取れた顔の比率を作ります');
    facialFeatures['zh-CN'].push('适当高度的鼻子，创造平衡的面部比例');
    facialFeatures['zh-TW'].push('適當高度的鼻子，創造平衡的面部比例');
    facialFeatures.vi.push('Chiều cao mũi phù hợp tạo tỷ lệ khuôn mặt cân đối');
    facialFeatures.id.push('Tinggi hidung yang tepat menciptakan proporsi wajah seimbang');
  }
  
  // 코 폭 분석
  if (noseWidth > 0.04) {
    facialFeatures.ko.push('넓은 코 폭으로 안정감 있는 얼굴 중심을 이룹니다');
    facialFeatures.en.push('Wide nose width creating a stable facial center');
    facialFeatures.ja.push('広い鼻幅で安定感のある顔の中心を成しています');
    facialFeatures['zh-CN'].push('宽阔的鼻宽，形成稳定的面部中心');
    facialFeatures['zh-TW'].push('寬闊的鼻寬，形成穩定的面部中心');
    facialFeatures.vi.push('Chiều rộng mũi rộng tạo trung tâm khuôn mặt ổn định');
    facialFeatures.id.push('Lebar hidung yang luas menciptakan pusat wajah yang stabil');
  } else if (noseWidth > 0.025) {
    facialFeatures.ko.push('적절한 코 폭으로 조화로운 얼굴 구성입니다');
    facialFeatures.en.push('Appropriate nose width creating harmonious facial composition');
    facialFeatures.ja.push('適切な鼻幅で調和の取れた顔構成です');
    facialFeatures['zh-CN'].push('适中的鼻宽，形成和谐的面部构成');
    facialFeatures['zh-TW'].push('適中的鼻寬，形成和諧的面部構成');
    facialFeatures.vi.push('Chiều rộng mũi phù hợp tạo cấu trúc khuôn mặt hài hòa');
    facialFeatures.id.push('Lebar hidung yang tepat menciptakan komposisi wajah harmonis');
  } else {
    facialFeatures.ko.push('작고 정제된 코로 섬세한 얼굴 인상을 만듭니다');
    facialFeatures.en.push('Small and refined nose creating a delicate facial impression');
    facialFeatures.ja.push('小さく洗練された鼻で繊細な顔の印象を作ります');
    facialFeatures['zh-CN'].push('小巧精致的鼻子，创造细腻的面部印象');
    facialFeatures['zh-TW'].push('小巧精緻的鼻子，創造細膩的面部印象');
    facialFeatures.vi.push('Mũi nhỏ và tinh tế tạo ấn tượng khuôn mặt tinh tế');
    facialFeatures.id.push('Hidung kecil dan halus menciptakan kesan wajah yang halus');
  }
  
  // 눈썹 위치 분석 (세분화)
  const leftEyebrow = landmarks[276] || { x: 0, y: 0, z: 0 };
  const rightEyebrow = landmarks[46] || { x: 0, y: 0, z: 0 };
  const eyebrowDistance = Math.abs(leftEyebrow.y - rightEyebrow.y);
  const avgEyebrowY = (leftEyebrow.y + rightEyebrow.y) / 2;
  const eyebrowHeight = Math.abs(avgEyebrowY - (landmarks[159]?.y || 0));
  
  if (eyebrowDistance < 0.015) {
    facialFeatures.ko.push('매우 균형잡힌 눈썹 위치로 완벽한 대칭을 보입니다');
    facialFeatures.en.push('Very balanced eyebrow position showing perfect symmetry');
    facialFeatures.ja.push('非常にバランスの取れた眉毛の位置で完璧な対称を見せています');
    facialFeatures['zh-CN'].push('非常平衡的眉毛位置，展现完美对称');
    facialFeatures['zh-TW'].push('非常平衡的眉毛位置，展現完美對稱');
    facialFeatures.vi.push('Vị trí lông mày rất cân đối thể hiện đối xứng hoàn hảo');
    facialFeatures.id.push('Posisi alis yang sangat seimbang menunjukkan simetri sempurna');
  } else if (eyebrowDistance < 0.02) {
    facialFeatures.ko.push('균형잡힌 눈썹 위치로 차분한 인상을 줍니다');
    facialFeatures.en.push('Balanced eyebrow position that gives a calm impression');
    facialFeatures.ja.push('バランスの取れた眉毛の位置で落ち着いた印象を与えます');
    facialFeatures['zh-CN'].push('平衡的眉毛位置，给人平静的印象');
    facialFeatures['zh-TW'].push('平衡的眉毛位置，給人平靜的印象');
    facialFeatures.vi.push('Vị trí lông mày cân đối tạo ấn tượng bình tĩnh');
    facialFeatures.id.push('Posisi alis yang seimbang memberi kesan tenang');
  } else {
    facialFeatures.ko.push('자연스러운 눈썹 각도로 개성 있는 표정을 만듭니다');
    facialFeatures.en.push('Natural eyebrow angle creating an expressive face');
    facialFeatures.ja.push('自然な眉毛の角度で個性的な表情を作ります');
    facialFeatures['zh-CN'].push('自然的眉毛角度，创造个性表情');
    facialFeatures['zh-TW'].push('自然的眉毛角度，創造個性表情');
    facialFeatures.vi.push('Góc lông mày tự nhiên tạo biểu cảm cá tính');
    facialFeatures.id.push('Sudut alis alami menciptakan ekspresi kepribadian');
  }
  
  // 눈썹 높이 분석
  if (eyebrowHeight > 0.08) {
    facialFeatures.ko.push('높은 눈썹으로 개방적이고 밝은 인상을 줍니다');
    facialFeatures.en.push('High eyebrows that give an open and bright impression');
    facialFeatures.ja.push('高い眉毛で開放的に明るい印象を与えます');
    facialFeatures['zh-CN'].push('高挑的眉毛，给人开放明亮的印象');
    facialFeatures['zh-TW'].push('高挑的眉毛，給人開放明亮的印象');
    facialFeatures.vi.push('Lông mày cao tạo ấn tượng cởi mở và tươi sáng');
    facialFeatures.id.push('Alis tinggi memberi kesan terbuka dan cerah');
  } else if (eyebrowHeight > 0.05) {
    facialFeatures.ko.push('적절한 눈썹 위치로 자연스러운 얼굴 비율을 보입니다');
    facialFeatures.en.push('Appropriate eyebrow position showing natural facial proportions');
    facialFeatures.ja.push('適切な眉毛の位置で自然な顔の比率を見せています');
    facialFeatures['zh-CN'].push('适当的眉毛位置，展现自然的面部比例');
    facialFeatures['zh-TW'].push('適當的眉毛位置，展現自然的面部比例');
    facialFeatures.vi.push('Vị trí lông mày phù hợp thể hiện tỷ lệ khuôn mặt tự nhiên');
    facialFeatures.id.push('Posisi alis yang tepat menunjukkan proporsi wajah alami');
  }
  
  // 얼굴 각도 및 입체감 (세분화)
  const faceDepth = Math.abs((landmarks[4]?.z || 0) - (landmarks[152]?.z || 0));
  if (faceDepth > 0.08) {
    facialFeatures.ko.push('매우 입체적인 얼굴 구조로 강렬한 생동감을 보입니다');
    facialFeatures.en.push('Very three-dimensional facial structure showing intense vitality');
    facialFeatures.ja.push('非常に立体的な顔構造で強烈な生き生きとした感じを見せています');
    facialFeatures['zh-CN'].push('非常立体的面部结构，展现强烈的生动感');
    facialFeatures['zh-TW'].push('非常立體的面部結構，展現強烈的生動感');
    facialFeatures.vi.push('Cấu trúc khuôn mặt rất ba chiều thể hiện sinh khí mạnh mẽ');
    facialFeatures.id.push('Struktur wajah tiga dimensi yang sangat menunjukkan vitalitas intens');
  } else if (faceDepth > 0.05) {
    facialFeatures.ko.push('입체적인 얼굴 구조로 생동감이 느껴집니다');
    facialFeatures.en.push('Three-dimensional facial structure that feels vibrant');
    facialFeatures.ja.push('立体的な顔構造で生き生きとした感じがします');
    facialFeatures['zh-CN'].push('立体的面部结构，感觉生动');
    facialFeatures['zh-TW'].push('立體的面部結構，感覺生動');
    facialFeatures.vi.push('Cấu trúc khuôn mặt ba chiều tạo cảm giác sống động');
    facialFeatures.id.push('Struktur wajah tiga dimensi yang terasa hidup');
  } else if (faceDepth > 0.03) {
    facialFeatures.ko.push('적절한 얼굴 입체감으로 자연스러운 비율을 보입니다');
    facialFeatures.en.push('Appropriate facial depth showing natural proportions');
    facialFeatures.ja.push('適切な顔の立体感で自然な比率を見せています');
    facialFeatures['zh-CN'].push('适当的面部立体感，展现自然比例');
    facialFeatures['zh-TW'].push('適當的面部立體感，展現自然比例');
    facialFeatures.vi.push('Chiều sâu khuôn mặt phù hợp thể hiện tỷ lệ tự nhiên');
    facialFeatures.id.push('Kedalaman wajah yang tepat menunjukkan proporsi alami');
  }
  
  // 턱선 및 얼굴 하단 분석 (jawline, chin은 이미 선언됨)
  const jawlineAngle = Math.abs(jawline.y - chin.y);
  if (jawlineAngle > 0.08) {
    facialFeatures.ko.push('뚜렷한 턱선으로 강인하고 결단력 있는 인상을 줍니다');
    facialFeatures.en.push('Distinct jawline that gives a strong and decisive impression');
    facialFeatures.ja.push('はっきりとした顎のラインで強く決断力のある印象を与えます');
    facialFeatures['zh-CN'].push('清晰的下颌线，给人坚强果断的印象');
    facialFeatures['zh-TW'].push('清晰的下顎線，給人堅強果斷的印象');
    facialFeatures.vi.push('Đường hàm rõ ràng tạo ấn tượng mạnh mẽ và quyết đoán');
    facialFeatures.id.push('Garis rahang yang jelas memberi kesan kuat dan tegas');
  } else if (jawlineAngle > 0.05) {
    facialFeatures.ko.push('적절한 턱선으로 균형잡힌 얼굴 하단을 보입니다');
    facialFeatures.en.push('Appropriate jawline showing balanced lower face');
    facialFeatures.ja.push('適切な顎のラインでバランスの取れた顔の下部を見せています');
    facialFeatures['zh-CN'].push('适当的下颌线，展现平衡的下半张脸');
    facialFeatures['zh-TW'].push('適當的下顎線，展現平衡的下半張臉');
    facialFeatures.vi.push('Đường hàm phù hợp thể hiện phần dưới khuôn mặt cân đối');
    facialFeatures.id.push('Garis rahang yang tepat menunjukkan bagian bawah wajah seimbang');
  } else {
    facialFeatures.ko.push('부드러운 턱선으로 온화하고 친근한 인상을 줍니다');
    facialFeatures.en.push('Soft jawline that gives a gentle and friendly impression');
    facialFeatures.ja.push('柔らかい顎のラインで温和で親しみやすい印象を与えます');
    facialFeatures['zh-CN'].push('柔和的下颌线，给人温和友好的印象');
    facialFeatures['zh-TW'].push('柔和的下顎線，給人溫和友好的印象');
    facialFeatures.vi.push('Đường hàm mềm mại tạo ấn tượng ôn hòa và thân thiện');
    facialFeatures.id.push('Garis rahang lembut memberi kesan lembut dan ramah');
  }
  
  // 이마 및 상단 얼굴 분석 (forehead는 이미 선언됨)
  const foreheadHeight = Math.abs(forehead.y - (landmarks[151]?.y || 0));
  if (foreheadHeight > 0.12) {
    facialFeatures.ko.push('넓은 이마로 지적이고 신뢰감 있는 인상을 줍니다');
    facialFeatures.en.push('Wide forehead that gives an intellectual and trustworthy impression');
    facialFeatures.ja.push('広い額で知的で信頼感のある印象を与えます');
    facialFeatures['zh-CN'].push('宽阔的额头，给人知性可信的印象');
    facialFeatures['zh-TW'].push('寬闊的額頭，給人知性可信的印象');
    facialFeatures.vi.push('Trán rộng tạo ấn tượng trí tuệ và đáng tin cậy');
    facialFeatures.id.push('Dahi lebar memberi kesan intelektual dan terpercaya');
  } else if (foreheadHeight > 0.08) {
    facialFeatures.ko.push('적절한 이마 높이로 균형잡힌 얼굴 비율을 보입니다');
    facialFeatures.en.push('Appropriate forehead height showing balanced facial proportions');
    facialFeatures.ja.push('適切な額の高さでバランスの取れた顔の比率を見せています');
    facialFeatures['zh-CN'].push('适当的额头高度，展现平衡的面部比例');
    facialFeatures['zh-TW'].push('適當的額頭高度，展現平衡的面部比例');
    facialFeatures.vi.push('Chiều cao trán phù hợp thể hiện tỷ lệ khuôn mặt cân đối');
    facialFeatures.id.push('Tinggi dahi yang tepat menunjukkan proporsi wajah seimbang');
  }
  
  // 얼굴 전체 비율 분석 (faceHeight는 이미 선언됨)
  const faceVerticalRatio = faceHeight / faceWidth;
  if (faceVerticalRatio > 1.5) {
    facialFeatures.ko.push('길고 세련된 얼굴 형태로 우아한 인상을 줍니다');
    facialFeatures.en.push('Long and refined face shape that gives an elegant impression');
    facialFeatures.ja.push('長く洗練された顔の形で優雅な印象を与えます');
    facialFeatures['zh-CN'].push('修长的脸型，给人优雅的印象');
    facialFeatures['zh-TW'].push('修長的臉型，給人優雅的印象');
    facialFeatures.vi.push('Hình dáng khuôn mặt dài và tinh tế tạo ấn tượng thanh lịch');
    facialFeatures.id.push('Bentuk wajah panjang dan halus memberi kesan elegan');
  } else if (faceVerticalRatio > 1.2) {
    facialFeatures.ko.push('적절한 얼굴 길이로 이상적인 비율을 보입니다');
    facialFeatures.en.push('Appropriate face length showing ideal proportions');
    facialFeatures.ja.push('適切な顔の長さで理想的な比率を見せています');
    facialFeatures['zh-CN'].push('适当的脸长，展现理想比例');
    facialFeatures['zh-TW'].push('適當的臉長，展現理想比例');
    facialFeatures.vi.push('Chiều dài khuôn mặt phù hợp thể hiện tỷ lệ lý tưởng');
    facialFeatures.id.push('Panjang wajah yang tepat menunjukkan proporsi ideal');
  }
  
  // 최소 10개 보장 (부족하면 기본 특징 추가)
  const defaultFeatures = {
    ko: [
      '자연스러운 얼굴 윤곽',
      '균형잡힌 얼굴 구성',
      '명확한 얼굴 특징',
      '독특한 개성이 느껴지는 얼굴',
      '조화로운 얼굴 비율'
    ],
    en: [
      'Natural facial contour',
      'Balanced facial composition',
      'Clear facial features',
      'Face with unique personality',
      'Harmonious facial proportions'
    ],
    ja: [
      '自然な顔の輪郭',
      'バランスの取れた顔構成',
      '明確な顔の特徴',
      '独特な個性が感じられる顔',
      '調和の取れた顔の比率'
    ],
    'zh-CN': [
      '自然的面部轮廓',
      '平衡的面部构成',
      '清晰的面部特征',
      '具有独特个性的面容',
      '和谐的面部比例'
    ],
    'zh-TW': [
      '自然的面部輪廓',
      '平衡的面部構成',
      '清晰的面部特徵',
      '具有獨特個性的面容',
      '和諧的面部比例'
    ],
    vi: [
      'Đường nét khuôn mặt tự nhiên',
      'Cấu trúc khuôn mặt cân đối',
      'Đặc điểm khuôn mặt rõ ràng',
      'Khuôn mặt có cá tính độc đáo',
      'Tỷ lệ khuôn mặt hài hòa'
    ],
    id: [
      'Kontur wajah alami',
      'Komposisi wajah seimbang',
      'Fitur wajah yang jelas',
      'Wajah dengan kepribadian unik',
      'Proporsi wajah harmonis'
    ]
  };
  
  // MediaPipe 값 기반으로 다양하게 선택 (최종 6개 제한)
  // 각 특징을 MediaPipe 값과 연결하여 점수화하고 상위 6개만 선택
  const facialTargetCount = 6;
  const facialLanguages: Array<keyof typeof defaultFeatures> = ['ko', 'en', 'ja', 'zh-CN', 'zh-TW', 'vi', 'id'];
  
  // MediaPipe 값들은 이미 위에서 계산됨 (mouthWidth, noseHeight, faceDepth, jawlineAngle, foreheadHeight, faceVerticalRatio, eyebrowHeight 등)
  
  type FeatureScore = { feature: string; score: number; index: number };
  
  facialLanguages.forEach(lang => {
    // 모든 특징에 대해 MediaPipe 값 기반 적합도 점수 계산 (특징 내용 기반)
    const scoredFeatures: FeatureScore[] = facialFeatures[lang].map((feature, index) => {
      let score = 0;
      
      // 특징 내용을 키워드로 분석하여 적합한 MediaPipe 값에 연결
      const featureLower = feature.toLowerCase();
      
      // 눈 관련 특징 (eye, 눈, 目 등)
      if (featureLower.includes('eye') || featureLower.includes('눈') || featureLower.includes('目') || 
          featureLower.includes('mắt') || featureLower.includes('mata') ||
          featureLower.includes('gaze') || featureLower.includes('시선') || featureLower.includes('視線')) {
        score += eyeOpenness * 500 + rightEyeSize * 300;
        if (eyeSymmetry < 0.05) score += 50; // 대칭적인 눈
      }
      // 얼굴 비율 관련 (face, 얼굴, 비율, ratio 등)
      else if (featureLower.includes('face') || featureLower.includes('얼굴') || featureLower.includes('顔') ||
               featureLower.includes('khuôn mặt') || featureLower.includes('wajah') ||
               featureLower.includes('ratio') || featureLower.includes('비율') || featureLower.includes('比率')) {
        score += Math.abs(faceRatio - 0.75) * 300 + faceWidth * 200;
        score += Math.abs(faceVerticalRatio - 1.3) * 100;
      }
      // 대칭성 관련 (symmetry, 대칭, 对称 등)
      else if (featureLower.includes('symmetry') || featureLower.includes('대칭') || featureLower.includes('対称') ||
               featureLower.includes('đối xứng') || featureLower.includes('simetri') ||
               featureLower.includes('균형') || featureLower.includes('平衡')) {
        score += (0.1 - Math.min(eyeSymmetry, 0.1)) * 400;
        if (eyebrowDistance < 0.02) score += 30;
      }
      // 입/입술 관련 (mouth, 입, 口 등)
      else if (featureLower.includes('mouth') || featureLower.includes('입') || featureLower.includes('口') ||
               featureLower.includes('miệng') || featureLower.includes('mulut') ||
               featureLower.includes('lip') || featureLower.includes('입술') || featureLower.includes('唇') ||
               featureLower.includes('smile') || featureLower.includes('미소') || featureLower.includes('笑')) {
        score += mouthWidth * 400;
        if (mouthAngle < -0.015) score += 50; // 미소
      }
      // 코 관련 (nose, 코, 鼻 등)
      else if (featureLower.includes('nose') || featureLower.includes('코') || featureLower.includes('鼻') ||
               featureLower.includes('mũi') || featureLower.includes('hidung')) {
        score += noseHeight * 300 + noseWidth * 200;
      }
      // 눈썹 관련 (eyebrow, 눈썹, 眉毛 등)
      else if (featureLower.includes('eyebrow') || featureLower.includes('눈썹') || featureLower.includes('眉毛') ||
               featureLower.includes('lông mày') || featureLower.includes('alis')) {
        score += eyebrowHeight * 300;
        if (eyebrowDistance < 0.02) score += 40;
      }
      // 입체감/깊이 관련 (depth, 입체, 立体 등)
      else if (featureLower.includes('depth') || featureLower.includes('입체') || featureLower.includes('立体') ||
               featureLower.includes('chiều sâu') || featureLower.includes('kedalaman') ||
               featureLower.includes('dimension') || featureLower.includes('입체감')) {
        score += faceDepth * 500;
      }
      // 턱선 관련 (jaw, 턱, 顎 등)
      else if (featureLower.includes('jaw') || featureLower.includes('턱') || featureLower.includes('顎') ||
               featureLower.includes('hàm') || featureLower.includes('rahang')) {
        score += jawlineAngle * 400;
      }
      // 이마 관련 (forehead, 이마, 額 등)
      else if (featureLower.includes('forehead') || featureLower.includes('이마') || featureLower.includes('額') ||
               featureLower.includes('trán') || featureLower.includes('dahi')) {
        score += foreheadHeight * 300;
      }
      // 기타 특징들은 모든 MediaPipe 값의 조합으로 평가
      else {
        score += (eyeOpenness * 100 + faceRatio * 50 + (0.1 - eyeSymmetry) * 100 + 
                 mouthWidth * 50 + noseHeight * 50 + faceDepth * 100) / 6;
      }
      
      // 감정 관련 특징 점수 추가 (8가지 감정 모두 고려) - 모든 특징에 적용
      // 감정 키워드가 특징에 포함된 경우 해당 감정 점수 강화
      if (featureLower.includes('표정') || featureLower.includes('expression') || 
          featureLower.includes('表情') || featureLower.includes('biểu cảm') ||
          featureLower.includes('ekspresi') || featureLower.includes('에너지') ||
          featureLower.includes('energy') || featureLower.includes('인상') ||
          featureLower.includes('impression') || featureLower.includes('印象') ||
          featureLower.includes('감정') || featureLower.includes('emotion')) {
        // 각 감정 키워드에 따라 가중치 부여
        if (featureLower.includes('강렬') || featureLower.includes('strong') || 
            featureLower.includes('強烈') || featureLower.includes('mạnh mẽ') ||
            featureLower.includes('결단') || featureLower.includes('decisive')) {
          score += emotions.angry * 500;
        }
        if (featureLower.includes('호기심') || featureLower.includes('curiosity') ||
            featureLower.includes('好奇心') || featureLower.includes('tò mò') ||
            featureLower.includes('생동') || featureLower.includes('vitality')) {
          score += emotions.surprised * 500;
        }
        if (featureLower.includes('신중') || featureLower.includes('cautious') ||
            featureLower.includes('慎重') || featureLower.includes('thận trọng') ||
            featureLower.includes('경계') || featureLower.includes('vigilant')) {
          score += emotions.fearful * 500;
        }
        if (featureLower.includes('세심') || featureLower.includes('meticulous') ||
            featureLower.includes('細心') || featureLower.includes('tỉ mỉ') ||
            featureLower.includes('까다') || featureLower.includes('selective')) {
          score += emotions.disgusted * 500;
        }
        if (featureLower.includes('자신감') || featureLower.includes('confidence') ||
            featureLower.includes('自信') || featureLower.includes('tự tin') ||
            featureLower.includes('독립') || featureLower.includes('independent')) {
          score += emotions.contempt * 500;
        }
        if (featureLower.includes('밝') || featureLower.includes('bright') ||
            featureLower.includes('明る') || featureLower.includes('sáng') ||
            featureLower.includes('긍정') || featureLower.includes('positive')) {
          score += emotions.happy * 500;
        }
        if (featureLower.includes('평온') || featureLower.includes('calm') ||
            featureLower.includes('平穏') || featureLower.includes('bình yên') ||
            featureLower.includes('안정') || featureLower.includes('stable')) {
          score += emotions.neutral * 500;
        }
        if (featureLower.includes('감성') || featureLower.includes('emotional') ||
            featureLower.includes('感情') || featureLower.includes('cảm xúc') ||
            featureLower.includes('깊이') || featureLower.includes('profound')) {
          score += emotions.sad * 500;
        }
        // 감정 관련이지만 특정 감정이 매칭되지 않은 경우, 가장 강한 감정 사용
        const maxEmotion = Math.max(emotions.angry, emotions.surprised, emotions.fearful, 
                                    emotions.disgusted, emotions.contempt, emotions.happy, 
                                    emotions.neutral, emotions.sad);
        score += maxEmotion * 200;
      } else {
        // 감정 키워드가 없는 특징에도 전체 감정 값의 가중 평균 추가 (약하게)
        const emotionScore = (emotions.angry * 50 + emotions.surprised * 50 + 
                             emotions.fearful * 50 + emotions.disgusted * 50 + 
                             emotions.contempt * 50 + emotions.happy * 100 + 
                             emotions.neutral * 50 + emotions.sad * 50) / 8;
        score += emotionScore * 100; // 다른 특징보다 낮은 가중치
      }
      
      // MediaPipe 값의 미세한 변화를 반영하기 위한 랜덤성 추가
      // 같은 사진이라도 약간의 노이즈로 다양성 확보 (감정 값 포함)
      const mediapipeNoise = (eyeOpenness * 123.456 + faceRatio * 234.567 + eyeSymmetry * 345.678 + 
                              mouthWidth * 456.789 + noseHeight * 567.890 +
                              emotions.angry * 111.111 + emotions.surprised * 222.222 + 
                              emotions.fearful * 333.333 + emotions.disgusted * 444.444 +
                              emotions.contempt * 555.555 + emotions.happy * 666.666 +
                              emotions.neutral * 777.777 + emotions.sad * 888.888) % 10;
      score += (mediapipeNoise - 5) * 2; // -10 ~ +10 범위
      
      return { feature, score, index };
    });
    
    // 점수 순으로 정렬 (높은 점수 우선) - MediaPipe 값에 가장 적합한 특징 우선
    scoredFeatures.sort((a, b) => b.score - a.score);
    
    // 상위 6개만 선택 (MediaPipe 값에 가장 적합한 특징들)
    const selectedFeatures = scoredFeatures.slice(0, facialTargetCount).map(s => s.feature);
    
    // 부족한 개수만큼 기본 특징 추가 (중복 방지)
    while (selectedFeatures.length < facialTargetCount) {
      const availableFeatures = defaultFeatures[lang].filter(f => !selectedFeatures.includes(f));
      if (availableFeatures.length > 0) {
        // MediaPipe 값들의 조합을 seed로 사용하여 결정론적 선택 (감정 값 포함)
        const emotionSeed = (emotions.angry * 100 + emotions.surprised * 200 + 
                            emotions.fearful * 300 + emotions.disgusted * 400 +
                            emotions.contempt * 500 + emotions.happy * 600 +
                            emotions.neutral * 700 + emotions.sad * 800);
        const mediapipeSeed = ((eyeOpenness * 1000 + faceRatio * 100 + eyeSymmetry * 10 + 
                               mouthWidth * 1000 + noseHeight * 100 + emotionSeed) % availableFeatures.length);
        const selectedIndex = Math.floor(mediapipeSeed);
        selectedFeatures.push(availableFeatures[selectedIndex]);
      } else {
        break;
      }
    }
    
    // 최종 6개로 제한 및 순서 최적화
    facialFeatures[lang] = selectedFeatures.slice(0, facialTargetCount);
  });
  
  // 매력적인 부분들 (긍정적으로 해석)
  const attractiveFeatures = {
    ko: [] as string[],
    en: [] as string[],
    ja: [] as string[],
    'zh-CN': [] as string[],
    'zh-TW': [] as string[],
    vi: [] as string[],
    id: [] as string[]
  };
  
  // 감정 기반 매력 포인트 (8가지 감정 모두 처리, 각 감정별 최소 5-10개 다양한 설명)
  // MediaPipe 감정 강도와 조합에 따라 다른 설명 선택
  
  // Angry 감정 (5가지 다양한 설명)
  if (emotions.angry > 0.15) {
    const angryOptions = [
      { ko: '강렬한 의지와 결단력을 보여주는 표정', en: 'Expression showing strong will and determination', ja: '強烈な意志と決断力を示す表情', 'zh-CN': '展现强烈意志和决断力的表情', 'zh-TW': '展現強烈意志和決斷力的表情', vi: 'Biểu cảm thể hiện ý chí mạnh mẽ và quyết đoán', id: 'Ekspresi yang menunjukkan kemauan kuat dan tekad' },
      { ko: '확고한 신념이 드러나는 강인한 표정', en: 'Strong expression revealing firm conviction', ja: '確固とした信念が現れる強い表情', 'zh-CN': '展现坚定信念的坚强表情', 'zh-TW': '展現堅定信念的堅強表情', vi: 'Biểu cảm mạnh mẽ thể hiện niềm tin vững chắc', id: 'Ekspresi kuat yang mengungkapkan keyakinan teguh' },
      { ko: '목표를 향한 확고한 의지가 느껴지는 표정', en: 'Expression showing unwavering determination toward goals', ja: '目標に向けた確固たる意志が感じられる表情', 'zh-CN': '展现对目标坚定不移意志的表情', 'zh-TW': '展現對目標堅定不移意志的表情', vi: 'Biểu cảm thể hiện ý chí kiên định hướng tới mục tiêu', id: 'Ekspresi yang menunjukkan tekad teguh menuju tujuan' },
      { ko: '단호하고 명확한 의사를 표현하는 표정', en: 'Expression showing resolute and clear intention', ja: '断固として明確な意思を表現する表情', 'zh-CN': '展现坚决明确意图的表情', 'zh-TW': '展現堅決明確意圖的表情', vi: 'Biểu cảm thể hiện ý định quyết đoán và rõ ràng', id: 'Ekspresi yang menunjukkan niat tegas dan jelas' },
      { ko: '열정과 추진력이 넘치는 리더십 표정', en: 'Leadership expression full of passion and drive', ja: '情熱と推進力に満ちたリーダーシップの表情', 'zh-CN': '充满激情和动力的领导力表情', 'zh-TW': '充滿激情和動力的領導力表情', vi: 'Biểu cảm lãnh đạo tràn đầy đam mê và động lực', id: 'Ekspresi kepemimpinan penuh gairah dan dorongan' }
    ];
    const angryIndex = Math.floor((emotions.angry * 1000 + eyeOpenness * 100 + faceRatio * 50) % angryOptions.length);
    const selectedAngry = angryOptions[angryIndex];
    attractiveFeatures.ko.push(selectedAngry.ko);
    attractiveFeatures.en.push(selectedAngry.en);
    attractiveFeatures.ja.push(selectedAngry.ja);
    attractiveFeatures['zh-CN'].push(selectedAngry['zh-CN']);
    attractiveFeatures['zh-TW'].push(selectedAngry['zh-TW']);
    attractiveFeatures.vi.push(selectedAngry.vi);
    attractiveFeatures.id.push(selectedAngry.id);
  }
  
  // Surprised 감정 (5가지 다양한 설명)
  if (emotions.surprised > 0.15) {
    const surprisedOptions = [
      { ko: '호기심과 생동감이 넘치는 표정', en: 'Expression full of curiosity and vitality', ja: '好奇心と活力に満ちた表情', 'zh-CN': '充满好奇心和活力的表情', 'zh-TW': '充滿好奇心和活力的表情', vi: 'Biểu cảm tràn đầy sự tò mò và sức sống', id: 'Ekspresi penuh rasa ingin tahu dan vitalitas' },
      { ko: '새로운 것에 대한 열린 마음을 보여주는 표정', en: 'Expression showing an open mind toward new things', ja: '新しいことへの開かれた心を示す表情', 'zh-CN': '展现对新事物开放心态的表情', 'zh-TW': '展現對新事物開放心態的表情', vi: 'Biểu cảm thể hiện tâm hồn cởi mở với những điều mới', id: 'Ekspresi yang menunjukkan pikiran terbuka terhadap hal baru' },
      { ko: '탐구 정신과 학습 의욕이 느껴지는 표정', en: 'Expression showing a spirit of inquiry and eagerness to learn', ja: '探究心と学習意欲が感じられる表情', 'zh-CN': '展现探索精神和学习热情的表情', 'zh-TW': '展現探索精神和學習熱情的表情', vi: 'Biểu cảm thể hiện tinh thần khám phá và ham muốn học hỏi', id: 'Ekspresi yang menunjukkan semangat eksplorasi dan hasrat belajar' },
      { ko: '활발하고 역동적인 에너지가 전해지는 표정', en: 'Expression conveying vibrant and dynamic energy', ja: '活発で動的なエネルギーが伝わる表情', 'zh-CN': '传达活跃动态能量的表情', 'zh-TW': '傳達活躍動態能量的表情', vi: 'Biểu cảm truyền đạt năng lượng sống động và năng động', id: 'Ekspresi yang menyampaikan energi dinamis dan hidup' },
      { ko: '창의성과 상상력이 풍부한 인상', en: 'Impression rich in creativity and imagination', ja: '創造性と想像力に富んだ印象', 'zh-CN': '充满创造力和想象力的印象', 'zh-TW': '充滿創造力和想像力的印象', vi: 'Ấn tượng giàu sáng tạo và trí tưởng tượng', id: 'Kesan yang kaya akan kreativitas dan imajinasi' }
    ];
    const surprisedIndex = Math.floor((emotions.surprised * 1000 + eyeOpenness * 200 + faceRatio * 100) % surprisedOptions.length);
    const selectedSurprised = surprisedOptions[surprisedIndex];
    attractiveFeatures.ko.push(selectedSurprised.ko);
    attractiveFeatures.en.push(selectedSurprised.en);
    attractiveFeatures.ja.push(selectedSurprised.ja);
    attractiveFeatures['zh-CN'].push(selectedSurprised['zh-CN']);
    attractiveFeatures['zh-TW'].push(selectedSurprised['zh-TW']);
    attractiveFeatures.vi.push(selectedSurprised.vi);
    attractiveFeatures.id.push(selectedSurprised.id);
  }
  
  // Fearful 감정 (5가지 다양한 설명)
  if (emotions.fearful > 0.15) {
    const fearfulOptions = [
      { ko: '신중하고 경계심 있는 표정', en: 'Cautious and vigilant expression', ja: '慎重で警戒心のある表情', 'zh-CN': '谨慎警惕的表情', 'zh-TW': '謹慎警惕的表情', vi: 'Biểu cảm thận trọng và cảnh giác', id: 'Ekspresi hati-hati dan waspada' },
      { ko: '상황을 면밀히 관찰하는 현명한 표정', en: 'Wise expression carefully observing the situation', ja: '状況を綿密に観察する賢明な表情', 'zh-CN': '仔细观察情况的明智表情', 'zh-TW': '仔細觀察情況的明智表情', vi: 'Biểu cảm khôn ngoan quan sát tình huống một cách cẩn thận', id: 'Ekspresi bijak yang mengamati situasi dengan cermat' },
      { ko: '안전을 우선시하는 책임감 있는 표정', en: 'Responsible expression prioritizing safety', ja: '安全を優先する責任感のある表情', 'zh-CN': '优先考虑安全的责任感表情', 'zh-TW': '優先考慮安全的責任感表情', vi: 'Biểu cảm có trách nhiệm ưu tiên an toàn', id: 'Ekspresi bertanggung jawab yang memprioritaskan keselamatan' },
      { ko: '세심한 주의력과 집중력을 보여주는 표정', en: 'Expression showing meticulous attention and focus', ja: '細心な注意力と集中力を示す表情', 'zh-CN': '展现细致注意力和专注力的表情', 'zh-TW': '展現細緻注意力和專注力的表情', vi: 'Biểu cảm thể hiện sự chú ý tỉ mỉ và khả năng tập trung', id: 'Ekspresi yang menunjukkan perhatian teliti dan fokus' },
      { ko: '예리한 판단력이 느껴지는 냉정한 표정', en: 'Calm expression showing sharp judgment', ja: '鋭い判断力が感じられる冷静な表情', 'zh-CN': '展现敏锐判断力的冷静表情', 'zh-TW': '展現敏銳判斷力的冷靜表情', vi: 'Biểu cảm điềm tĩnh thể hiện khả năng phán đoán sắc bén', id: 'Ekspresi tenang yang menunjukkan penilaian tajam' }
    ];
    const fearfulIndex = Math.floor((emotions.fearful * 1000 + eyeOpenness * 150 + eyeSymmetry * 100) % fearfulOptions.length);
    const selectedFearful = fearfulOptions[fearfulIndex];
    attractiveFeatures.ko.push(selectedFearful.ko);
    attractiveFeatures.en.push(selectedFearful.en);
    attractiveFeatures.ja.push(selectedFearful.ja);
    attractiveFeatures['zh-CN'].push(selectedFearful['zh-CN']);
    attractiveFeatures['zh-TW'].push(selectedFearful['zh-TW']);
    attractiveFeatures.vi.push(selectedFearful.vi);
    attractiveFeatures.id.push(selectedFearful.id);
  }
  
  // Disgusted 감정 (5가지 다양한 설명)
  if (emotions.disgusted > 0.15) {
    const disgustedOptions = [
      { ko: '세심하고 까다로운 취향을 가진 표정', en: 'Expression showing meticulous and selective taste', ja: '細心で厳格な好みを持つ表情', 'zh-CN': '展现细致挑剔品味的表情', 'zh-TW': '展現細緻挑剔品味的表情', vi: 'Biểu cảm thể hiện sở thích tỉ mỉ và khó tính', id: 'Ekspresi yang menunjukkan selera teliti dan selektif' },
      { ko: '명확한 기준과 원칙을 가진 단호한 표정', en: 'Resolute expression with clear standards and principles', ja: '明確な基準と原則を持つ断固とした表情', 'zh-CN': '具有明确标准和原则的坚决表情', 'zh-TW': '具有明確標準和原則的堅決表情', vi: 'Biểu cảm quyết đoán với tiêu chuẩn và nguyên tắc rõ ràng', id: 'Ekspresi tegas dengan standar dan prinsip yang jelas' },
      { ko: '품질을 중시하는 고급스러운 취향', en: 'Sophisticated taste that values quality', ja: '品質を重視する上品な好み', 'zh-CN': '重视品质的高雅品味', 'zh-TW': '重視品質的高雅品味', vi: 'Sở thích tinh tế coi trọng chất lượng', id: 'Selera canggih yang menghargai kualitas' },
      { ko: '완벽주의적 성향이 느껴지는 표정', en: 'Expression showing perfectionist tendencies', ja: '完璧主義的な傾向が感じられる表情', 'zh-CN': '展现完美主义倾向的表情', 'zh-TW': '展現完美主義傾向的表情', vi: 'Biểu cảm thể hiện xu hướng cầu toàn', id: 'Ekspresi yang menunjukkan kecenderungan perfeksionis' },
      { ko: '정제된 미적 감각을 가진 표정', en: 'Expression with refined aesthetic sense', ja: '洗練された美的感覚を持つ表情', 'zh-CN': '具有精致审美感的表情', 'zh-TW': '具有精緻審美感的表情', vi: 'Biểu cảm với giác quan thẩm mỹ tinh tế', id: 'Ekspresi dengan rasa estetika yang halus' }
    ];
    const disgustedIndex = Math.floor((emotions.disgusted * 1000 + noseHeight * 200 + faceRatio * 150) % disgustedOptions.length);
    const selectedDisgusted = disgustedOptions[disgustedIndex];
    attractiveFeatures.ko.push(selectedDisgusted.ko);
    attractiveFeatures.en.push(selectedDisgusted.en);
    attractiveFeatures.ja.push(selectedDisgusted.ja);
    attractiveFeatures['zh-CN'].push(selectedDisgusted['zh-CN']);
    attractiveFeatures['zh-TW'].push(selectedDisgusted['zh-TW']);
    attractiveFeatures.vi.push(selectedDisgusted.vi);
    attractiveFeatures.id.push(selectedDisgusted.id);
  }
  
  // Contempt 감정 (5가지 다양한 설명)
  if (emotions.contempt > 0.15) {
    const contemptOptions = [
      { ko: '자신감과 독립적인 태도를 보여주는 표정', en: 'Expression showing confidence and independent attitude', ja: '自信と独立した態度を示す表情', 'zh-CN': '展现自信和独立态度的表情', 'zh-TW': '展現自信和獨立態度的表情', vi: 'Biểu cảm thể hiện sự tự tin và thái độ độc lập', id: 'Ekspresi yang menunjukkan kepercayaan diri dan sikap independen' },
      { ko: '독자적인 판단력을 가진 강인한 표정', en: 'Strong expression with independent judgment', ja: '独自の判断力を持つ強い表情', 'zh-CN': '具有独立判断力的坚强表情', 'zh-TW': '具有獨立判斷力的堅強表情', vi: 'Biểu cảm mạnh mẽ với khả năng phán đoán độc lập', id: 'Ekspresi kuat dengan penilaian independen' },
      { ko: '자기 확신이 느껴지는 당당한 표정', en: 'Confident expression showing self-assurance', ja: '自己確信が感じられる堂々とした表情', 'zh-CN': '展现自信的堂堂表情', 'zh-TW': '展現自信的堂堂表情', vi: 'Biểu cảm đĩnh đạc thể hiện sự tự tin vào bản thân', id: 'Ekspresi tegas yang menunjukkan keyakinan diri' },
      { ko: '틀에 박히지 않는 창의적 사고', en: 'Creative thinking that breaks free from conventions', ja: '型にはまらない創造的思考', 'zh-CN': '不拘一格的创造性思维', 'zh-TW': '不拘一格的創造性思維', vi: 'Tư duy sáng tạo không bị ràng buộc bởi khuôn mẫu', id: 'Pemikiran kreatif yang bebas dari konvensi' },
      { ko: '강렬한 개성과 독특한 매력을 보여주는 표정', en: 'Expression showing intense personality and unique charm', ja: '強烈な個性と独特な魅力を示す表情', 'zh-CN': '展现强烈个性和独特魅力的表情', 'zh-TW': '展現強烈個性和獨特魅力的表情', vi: 'Biểu cảm thể hiện cá tính mạnh mẽ và sức hút độc đáo', id: 'Ekspresi yang menunjukkan kepribadian intens dan pesona unik' }
    ];
    const contemptIndex = Math.floor((emotions.contempt * 1000 + jawlineAngle * 300 + faceDepth * 200) % contemptOptions.length);
    const selectedContempt = contemptOptions[contemptIndex];
    attractiveFeatures.ko.push(selectedContempt.ko);
    attractiveFeatures.en.push(selectedContempt.en);
    attractiveFeatures.ja.push(selectedContempt.ja);
    attractiveFeatures['zh-CN'].push(selectedContempt['zh-CN']);
    attractiveFeatures['zh-TW'].push(selectedContempt['zh-TW']);
    attractiveFeatures.vi.push(selectedContempt.vi);
    attractiveFeatures.id.push(selectedContempt.id);
  }
  
  // Happy 감정 (5가지 다양한 설명)
  if (emotions.happy > 0.15) {
    const happyOptions = [
      { ko: '밝고 긍정적인 에너지가 느껴지는 표정', en: 'Bright and positive energy in your expression', ja: '明るく前向きなエネルギーを感じさせる表情', 'zh-CN': '表情中充满积极正面的能量', 'zh-TW': '表情中充滿積極正面的能量', vi: 'Biểu cảm toát ra năng lượng tích cực tươi sáng', id: 'Ekspresi yang memancarkan energi positif dan cerah' },
      { ko: '행복한 미소가 감돌며 따뜻함을 전달하는 표정', en: 'Expression with a happy smile conveying warmth', ja: '幸せな笑顔が漂い温かさを伝える表情', 'zh-CN': '带着幸福微笑传达温暖的表情', 'zh-TW': '帶著幸福微笑傳達溫暖的表情', vi: 'Biểu cảm với nụ cười hạnh phúc truyền đạt sự ấm áp', id: 'Ekspresi dengan senyum bahagia yang menyampaikan kehangatan' },
      { ko: '낙천적이고 활발한 기운이 넘치는 표정', en: 'Expression overflowing with optimistic and vibrant energy', ja: '楽観的で活発な気が溢れる表情', 'zh-CN': '充满乐观活跃能量的表情', 'zh-TW': '充滿樂觀活躍能量的表情', vi: 'Biểu cảm tràn ngập năng lượng lạc quan và sống động', id: 'Ekspresi yang meluap dengan energi optimis dan hidup' },
      { ko: '상대방에게 긍정적 에너지를 주는 매력적인 미소', en: 'Charming smile that gives positive energy to others', ja: '相手に前向きなエネルギーを与える魅力的な笑顔', 'zh-CN': '给他人带来积极能量的迷人微笑', 'zh-TW': '給他人帶來積極能量的迷人微笑', vi: 'Nụ cười quyến rũ mang lại năng lượng tích cực cho người khác', id: 'Senyum menawan yang memberi energi positif pada orang lain' },
      { ko: '자신감 넘치는 밝은 에너지가 전해지는 표정', en: 'Expression conveying bright energy full of confidence', ja: '自信に満ちた明るいエネルギーが伝わる表情', 'zh-CN': '传达充满自信的明亮能量表情', 'zh-TW': '傳達充滿自信的明亮能量表情', vi: 'Biểu cảm truyền đạt năng lượng tươi sáng đầy tự tin', id: 'Ekspresi yang menyampaikan energi cerah penuh percaya diri' }
    ];
    const happyIndex = Math.floor((emotions.happy * 1000 + mouthWidth * 300 + mouthAngle * 200) % happyOptions.length);
    const selectedHappy = happyOptions[happyIndex];
    attractiveFeatures.ko.push(selectedHappy.ko);
    attractiveFeatures.en.push(selectedHappy.en);
    attractiveFeatures.ja.push(selectedHappy.ja);
    attractiveFeatures['zh-CN'].push(selectedHappy['zh-CN']);
    attractiveFeatures['zh-TW'].push(selectedHappy['zh-TW']);
    attractiveFeatures.vi.push(selectedHappy.vi);
    attractiveFeatures.id.push(selectedHappy.id);
  }
  
  // Neutral 감정 (5가지 다양한 설명)
  if (emotions.neutral > 0.15) {
    const neutralOptions = [
      { ko: '평온하고 안정감 있는 인상', en: 'Calm and stable impression', ja: '平穏で安定感のある印象', 'zh-CN': '平静稳重的印象', 'zh-TW': '平靜穩重的印象', vi: 'Ấn tượng bình yên và ổn định', id: 'Kesan tenang dan stabil' },
      { ko: '신뢰감을 주는 차분하고 균형잡힌 표정', en: 'Calm and balanced expression that inspires trust', ja: '信頼感を与える落ち着いたバランスの取れた表情', 'zh-CN': '给人信任感的平静平衡表情', 'zh-TW': '給人信任感的平靜平衡表情', vi: 'Biểu cảm bình tĩnh và cân đối tạo cảm giác tin cậy', id: 'Ekspresi tenang dan seimbang yang menginspirasi kepercayaan' },
      { ko: '안정적이고 신중한 판단력이 느껴지는 표정', en: 'Expression showing stable and prudent judgment', ja: '安定していて慎重な判断力が感じられる表情', 'zh-CN': '展现稳定谨慎判断力的表情', 'zh-TW': '展現穩定謹慎判斷力的表情', vi: 'Biểu cảm thể hiện khả năng phán đoán ổn định và thận trọng', id: 'Ekspresi yang menunjukkan penilaian stabil dan bijaksana' },
      { ko: '여유 있고 품격 있는 고요한 인상', en: 'Peaceful impression with composure and elegance', ja: '余裕があり品格のある静かな印象', 'zh-CN': '从容优雅的平静印象', 'zh-TW': '從容優雅的平靜印象', vi: 'Ấn tượng yên tĩnh với sự điềm đạm và thanh lịch', id: 'Kesan damai dengan ketenangan dan keanggunan' },
      { ko: '균형잡힌 감정 표현으로 안정적인 매력', en: 'Stable charm with balanced emotional expression', ja: 'バランスの取れた感情表現による安定した魅力', 'zh-CN': '通过平衡情感表达展现的稳定魅力', 'zh-TW': '通過平衡情感表達展現的穩定魅力', vi: 'Sức hút ổn định với biểu cảm cảm xúc cân đối', id: 'Pesona stabil dengan ekspresi emosional seimbang' }
    ];
    const neutralIndex = Math.floor((emotions.neutral * 1000 + eyeSymmetry * 400 + faceRatio * 200) % neutralOptions.length);
    const selectedNeutral = neutralOptions[neutralIndex];
    attractiveFeatures.ko.push(selectedNeutral.ko);
    attractiveFeatures.en.push(selectedNeutral.en);
    attractiveFeatures.ja.push(selectedNeutral.ja);
    attractiveFeatures['zh-CN'].push(selectedNeutral['zh-CN']);
    attractiveFeatures['zh-TW'].push(selectedNeutral['zh-TW']);
    attractiveFeatures.vi.push(selectedNeutral.vi);
    attractiveFeatures.id.push(selectedNeutral.id);
  }
  
  // Sad 감정 (5가지 다양한 설명)
  if (emotions.sad > 0.15) {
    const sadOptions = [
      { ko: '감성적이고 깊이 있는 표정', en: 'Emotional and profound expression', ja: '感情的で深みのある表情', 'zh-CN': '感性和有深度的表情', 'zh-TW': '感性和有深度的表情', vi: 'Biểu cảm cảm xúc và sâu sắc', id: 'Ekspresi emosional dan mendalam' },
      { ko: '인간적인 따뜻함과 공감 능력이 느껴지는 표정', en: 'Expression showing human warmth and empathy', ja: '人間的な温かさと共感能力が感じられる表情', 'zh-CN': '展现人性温暖和共情能力的表情', 'zh-TW': '展現人性溫暖和共情能力的表情', vi: 'Biểu cảm thể hiện sự ấm áp con người và khả năng đồng cảm', id: 'Ekspresi yang menunjukkan kehangatan manusia dan empati' },
      { ko: '깊이 있는 사고와 내적 성찰이 보이는 표정', en: 'Expression showing deep thinking and inner reflection', ja: '深い思考と内的反省が見える表情', 'zh-CN': '展现深度思考和内省的表情', 'zh-TW': '展現深度思考和內省的表情', vi: 'Biểu cảm thể hiện suy nghĩ sâu sắc và phản ánh nội tâm', id: 'Ekspresi yang menunjukkan pemikiran mendalam dan refleksi batin' },
      { ko: '예술적 감수성이 풍부한 섬세한 인상', en: 'Delicate impression rich in artistic sensitivity', ja: '芸術的感性が豊かな繊細な印象', 'zh-CN': '具有丰富艺术敏感性的细腻印象', 'zh-TW': '具有豐富藝術敏感性的細膩印象', vi: 'Ấn tượng tinh tế giàu cảm tính nghệ thuật', id: 'Kesan halus yang kaya akan sensitivitas artistik' },
      { ko: '인간애와 연민이 느껴지는 따뜻한 표정', en: 'Warm expression showing humanity and compassion', ja: '人間愛と憐憫が感じられる温かい表情', 'zh-CN': '展现人性和同情心的温暖表情', 'zh-TW': '展現人性和同情心的溫暖表情', vi: 'Biểu cảm ấm áp thể hiện tình yêu thương con người và lòng trắc ẩn', id: 'Ekspresi hangat yang menunjukkan kemanusiaan dan belas kasihan' }
    ];
    const sadIndex = Math.floor((emotions.sad * 1000 + eyeSymmetry * 250 + faceDepth * 300) % sadOptions.length);
    const selectedSad = sadOptions[sadIndex];
    attractiveFeatures.ko.push(selectedSad.ko);
    attractiveFeatures.en.push(selectedSad.en);
    attractiveFeatures.ja.push(selectedSad.ja);
    attractiveFeatures['zh-CN'].push(selectedSad['zh-CN']);
    attractiveFeatures['zh-TW'].push(selectedSad['zh-TW']);
    attractiveFeatures.vi.push(selectedSad.vi);
    attractiveFeatures.id.push(selectedSad.id);
  }
  
  // 얼굴 구조 기반 매력 포인트 (세분화하여 다양하게)
  // 눈 관련
  if (eyeOpenness > 0.03) {
    attractiveFeatures.ko.push('매우 밝고 또렷한 눈매');
    attractiveFeatures.en.push('Very bright and clear eyes');
    attractiveFeatures.ja.push('非常に明るくはっきりとした目元');
    attractiveFeatures['zh-CN'].push('非常明亮清晰的眼神');
    attractiveFeatures['zh-TW'].push('非常明亮清晰的眼神');
    attractiveFeatures.vi.push('Đôi mắt rất sáng và rõ ràng');
    attractiveFeatures.id.push('Mata yang sangat terang dan jelas');
  } else if (eyeOpenness > 0.02) {
    attractiveFeatures.ko.push('밝고 또렷한 눈매');
    attractiveFeatures.en.push('Bright and clear eyes');
    attractiveFeatures.ja.push('明るくはっきりとした目元');
    attractiveFeatures['zh-CN'].push('明亮清晰的眼神');
    attractiveFeatures['zh-TW'].push('明亮清晰的眼神');
    attractiveFeatures.vi.push('Đôi mắt sáng và rõ ràng');
    attractiveFeatures.id.push('Mata yang terang dan jelas');
  } else if (eyeOpenness > 0.015) {
    attractiveFeatures.ko.push('차분하고 깊이 있는 눈매');
    attractiveFeatures.en.push('Calm and deep eyes');
    attractiveFeatures.ja.push('落ち着いて深みのある目元');
    attractiveFeatures['zh-CN'].push('平静深邃的眼神');
    attractiveFeatures['zh-TW'].push('平靜深邃的眼神');
    attractiveFeatures.vi.push('Đôi mắt bình tĩnh và sâu thẳm');
    attractiveFeatures.id.push('Mata yang tenang dan dalam');
  }
  
  if (rightEyeSize > 0.022) {
    attractiveFeatures.ko.push('둥근 눈 모양의 매력');
    attractiveFeatures.en.push('Charming round eye shape');
    attractiveFeatures.ja.push('丸い目の形の魅力');
    attractiveFeatures['zh-CN'].push('圆润眼型的魅力');
    attractiveFeatures['zh-TW'].push('圓潤眼型的魅力');
    attractiveFeatures.vi.push('Sức hút của hình dáng mắt tròn');
    attractiveFeatures.id.push('Pesona bentuk mata bulat');
  }
  
  // 얼굴 대칭성
  if (eyeSymmetry < 0.03) {
    attractiveFeatures.ko.push('거의 완벽한 얼굴 대칭');
    attractiveFeatures.en.push('Almost perfect facial symmetry');
    attractiveFeatures.ja.push('ほとんど完璧な顔の対称');
    attractiveFeatures['zh-CN'].push('近乎完美的面部对称');
    attractiveFeatures['zh-TW'].push('近乎完美的面部對稱');
    attractiveFeatures.vi.push('Sự đối xứng khuôn mặt gần như hoàn hảo');
    attractiveFeatures.id.push('Simetri wajah hampir sempurna');
  } else if (eyeSymmetry < 0.05) {
    attractiveFeatures.ko.push('균형 잡힌 얼굴 윤곽');
    attractiveFeatures.en.push('Well-balanced facial features');
    attractiveFeatures.ja.push('バランスの取れた顔立ち');
    attractiveFeatures['zh-CN'].push('匀称平衡的面部轮廓');
    attractiveFeatures['zh-TW'].push('勻稱平衡的面部輪廓');
    attractiveFeatures.vi.push('Đường nét khuôn mặt cân đối');
    attractiveFeatures.id.push('Fitur wajah yang seimbang');
  }
  
  // 입 관련
  if (mouthCurve < -0.015) {
    attractiveFeatures.ko.push('자연스러운 밝은 미소');
    attractiveFeatures.en.push('Natural bright smile');
    attractiveFeatures.ja.push('自然な明るい笑顔');
    attractiveFeatures['zh-CN'].push('自然明亮的微笑');
    attractiveFeatures['zh-TW'].push('自然明亮的微笑');
    attractiveFeatures.vi.push('Nụ cười tươi sáng tự nhiên');
    attractiveFeatures.id.push('Senyum cerah alami');
  } else if (mouthCurve < -0.01) {
    attractiveFeatures.ko.push('자연스러운 미소 라인');
    attractiveFeatures.en.push('Natural smile curve');
    attractiveFeatures.ja.push('自然な笑顔のライン');
    attractiveFeatures['zh-CN'].push('自然的微笑弧度');
    attractiveFeatures['zh-TW'].push('自然的微笑弧度');
    attractiveFeatures.vi.push('Đường cong nụ cười tự nhiên');
    attractiveFeatures.id.push('Garis senyum alami');
  }
  
  // mouthWidth는 이미 위에서 선언됨
  if (mouthWidth > 0.1) {
    attractiveFeatures.ko.push('표현력 풍부한 입술');
    attractiveFeatures.en.push('Expressive lips');
    attractiveFeatures.ja.push('表現力豊富な唇');
    attractiveFeatures['zh-CN'].push('表现力丰富的唇型');
    attractiveFeatures['zh-TW'].push('表現力豐富的唇型');
    attractiveFeatures.vi.push('Đôi môi biểu cảm phong phú');
    attractiveFeatures.id.push('Bibir ekspresif');
  } else if (mouthWidth > 0.08) {
    attractiveFeatures.ko.push('매력적인 입술 라인');
    attractiveFeatures.en.push('Attractive lip line');
    attractiveFeatures.ja.push('魅力的な唇のライン');
    attractiveFeatures['zh-CN'].push('迷人的唇线');
    attractiveFeatures['zh-TW'].push('迷人的唇線');
    attractiveFeatures.vi.push('Đường môi hấp dẫn');
    attractiveFeatures.id.push('Garis bibir menarik');
  }
  
  // 얼굴 형태
  if (faceRatio > 0.75 && faceRatio < 0.85) {
    attractiveFeatures.ko.push('이상적인 얼굴 비율');
    attractiveFeatures.en.push('Ideal facial proportions');
    attractiveFeatures.ja.push('理想的な顔の比率');
    attractiveFeatures['zh-CN'].push('理想的面部比例');
    attractiveFeatures['zh-TW'].push('理想的面部比例');
    attractiveFeatures.vi.push('Tỷ lệ khuôn mặt lý tưởng');
    attractiveFeatures.id.push('Proporsi wajah ideal');
  }
  
  if (faceWidth > 0.12 && faceWidth < 0.15) {
    attractiveFeatures.ko.push('적절한 얼굴 폭');
    attractiveFeatures.en.push('Appropriate face width');
    attractiveFeatures.ja.push('適切な顔幅');
    attractiveFeatures['zh-CN'].push('适中的面宽');
    attractiveFeatures['zh-TW'].push('適中的面寬');
    attractiveFeatures.vi.push('Chiều rộng khuôn mặt phù hợp');
    attractiveFeatures.id.push('Lebar wajah yang tepat');
  }
  
  // 코 관련
  if (noseHeight > 0.08 && noseHeight < 0.12) {
    attractiveFeatures.ko.push('적절한 높이의 코');
    attractiveFeatures.en.push('Appropriately proportioned nose');
    attractiveFeatures.ja.push('適切な高さの鼻');
    attractiveFeatures['zh-CN'].push('比例适中的鼻子');
    attractiveFeatures['zh-TW'].push('比例適中的鼻子');
    attractiveFeatures.vi.push('Mũi có tỷ lệ phù hợp');
    attractiveFeatures.id.push('Hidung dengan proporsi tepat');
  }
  
  if (noseWidth > 0.025 && noseWidth < 0.035) {
    attractiveFeatures.ko.push('균형잡힌 코 폭');
    attractiveFeatures.en.push('Well-balanced nose width');
    attractiveFeatures.ja.push('バランスの取れた鼻幅');
    attractiveFeatures['zh-CN'].push('平衡的鼻宽');
    attractiveFeatures['zh-TW'].push('平衡的鼻寬');
    attractiveFeatures.vi.push('Chiều rộng mũi cân đối');
    attractiveFeatures.id.push('Lebar hidung seimbang');
  }
  
  // 얼굴 입체감
  if (faceDepth > 0.05) {
    attractiveFeatures.ko.push('입체적인 얼굴 구조');
    attractiveFeatures.en.push('Three-dimensional facial structure');
    attractiveFeatures.ja.push('立体的な顔構造');
    attractiveFeatures['zh-CN'].push('立体的面部结构');
    attractiveFeatures['zh-TW'].push('立體的面部結構');
    attractiveFeatures.vi.push('Cấu trúc khuôn mặt ba chiều');
    attractiveFeatures.id.push('Struktur wajah tiga dimensi');
  }
  
  // 턱선
  if (jawlineAngle > 0.05 && jawlineAngle < 0.1) {
    attractiveFeatures.ko.push('명확한 턱선');
    attractiveFeatures.en.push('Clear jawline');
    attractiveFeatures.ja.push('明確な顎のライン');
    attractiveFeatures['zh-CN'].push('清晰的下颌线');
    attractiveFeatures['zh-TW'].push('清晰的下顎線');
    attractiveFeatures.vi.push('Đường hàm rõ ràng');
    attractiveFeatures.id.push('Garis rahang jelas');
  }
  
  // 이마
  if (foreheadHeight > 0.08 && foreheadHeight < 0.12) {
    attractiveFeatures.ko.push('균형잡힌 이마 높이');
    attractiveFeatures.en.push('Well-balanced forehead height');
    attractiveFeatures.ja.push('バランスの取れた額の高さ');
    attractiveFeatures['zh-CN'].push('平衡的额头高度');
    attractiveFeatures['zh-TW'].push('平衡的額頭高度');
    attractiveFeatures.vi.push('Chiều cao trán cân đối');
    attractiveFeatures.id.push('Tinggi dahi seimbang');
  }
  
  // 얼굴 길이
  if (faceVerticalRatio > 1.2 && faceVerticalRatio < 1.5) {
    attractiveFeatures.ko.push('이상적인 얼굴 길이');
    attractiveFeatures.en.push('Ideal face length');
    attractiveFeatures.ja.push('理想的な顔の長さ');
    attractiveFeatures['zh-CN'].push('理想的脸长');
    attractiveFeatures['zh-TW'].push('理想的臉長');
    attractiveFeatures.vi.push('Chiều dài khuôn mặt lý tưởng');
    attractiveFeatures.id.push('Panjang wajah ideal');
  }
  
  // 눈썹
  if (eyebrowHeight > 0.05 && eyebrowHeight < 0.08) {
    attractiveFeatures.ko.push('적절한 눈썹 위치');
    attractiveFeatures.en.push('Well-positioned eyebrows');
    attractiveFeatures.ja.push('適切な眉毛の位置');
    attractiveFeatures['zh-CN'].push('位置恰当的眉毛');
    attractiveFeatures['zh-TW'].push('位置恰當的眉毛');
    attractiveFeatures.vi.push('Vị trí lông mày phù hợp');
    attractiveFeatures.id.push('Posisi alis tepat');
  }
  
  // 기본 매력 포인트 (최소 10개 보장)
  const defaultAttractiveFeatures = {
    ko: [
      '독특한 개성이 느껴지는 얼굴',
      '자연스러운 얼굴 윤곽',
      '조화로운 얼굴 구성',
      '명확한 얼굴 특징',
      '균형잡힌 전체 비율',
      '자연스러운 표정',
      '세련된 얼굴 인상',
      '친근한 얼굴 분위기',
      '개성 있는 얼굴 구조',
      '매력적인 얼굴 비율'
    ],
    en: [
      'Face with unique personality',
      'Natural facial contour',
      'Harmonious facial composition',
      'Clear facial features',
      'Well-balanced overall proportions',
      'Natural expression',
      'Refined facial impression',
      'Friendly facial atmosphere',
      'Distinctive facial structure',
      'Attractive facial proportions'
    ],
    ja: [
      '独特な個性が感じられる顔',
      '自然な顔の輪郭',
      '調和の取れた顔構成',
      '明確な顔の特徴',
      'バランスの取れた全体の比率',
      '自然な表情',
      '洗練された顔の印象',
      '親しみやすい顔の雰囲気',
      '個性的な顔構造',
      '魅力的な顔の比率'
    ],
    'zh-CN': [
      '具有独特个性的面容',
      '自然的面部轮廓',
      '和谐的面部构成',
      '清晰的面部特征',
      '平衡的整体比例',
      '自然的表情',
      '精致的面部印象',
      '友好的面部氛围',
      '个性的面部结构',
      '迷人的面部比例'
    ],
    'zh-TW': [
      '具有獨特個性的面容',
      '自然的面部輪廓',
      '和諧的面部構成',
      '清晰的面部特徵',
      '平衡的整體比例',
      '自然的表情',
      '精緻的面部印象',
      '友好的面部氛圍',
      '個性的面部結構',
      '迷人的面部比例'
    ],
    vi: [
      'Khuôn mặt có cá tính độc đáo',
      'Đường nét khuôn mặt tự nhiên',
      'Cấu trúc khuôn mặt hài hòa',
      'Đặc điểm khuôn mặt rõ ràng',
      'Tỷ lệ tổng thể cân đối',
      'Biểu cảm tự nhiên',
      'Ấn tượng khuôn mặt tinh tế',
      'Không khí khuôn mặt thân thiện',
      'Cấu trúc khuôn mặt cá tính',
      'Tỷ lệ khuôn mặt hấp dẫn'
    ],
    id: [
      'Wajah dengan kepribadian unik',
      'Kontur wajah alami',
      'Komposisi wajah harmonis',
      'Fitur wajah yang jelas',
      'Proporsi keseluruhan seimbang',
      'Ekspresi alami',
      'Kesan wajah halus',
      'Suasana wajah ramah',
      'Struktur wajah kepribadian',
      'Proporsi wajah menarik'
    ]
  };
  
  // MediaPipe 값 기반으로 다양하게 선택 (최종 6개 제한, 중복 제거)
  const attractiveTargetCount = 6;
  const attractiveLanguages: Array<keyof typeof defaultAttractiveFeatures> = ['ko', 'en', 'ja', 'zh-CN', 'zh-TW', 'vi', 'id'];
  
  type AttractiveFeatureScore = { feature: string; score: number; index: number };
  
  attractiveLanguages.forEach(lang => {
    // 중복 제거 (같은 특징이 여러 번 추가되지 않도록)
    const uniqueFeatures: string[] = [];
    const seenFeatures = new Set<string>();
    for (const feature of attractiveFeatures[lang]) {
      if (!seenFeatures.has(feature)) {
        seenFeatures.add(feature);
        uniqueFeatures.push(feature);
      }
    }
    attractiveFeatures[lang] = uniqueFeatures;
    
    // 모든 특징에 대해 MediaPipe 값 기반 적합도 점수 계산 (특징 내용 기반)
    const scoredFeatures: AttractiveFeatureScore[] = attractiveFeatures[lang].map((feature, index) => {
      let score = 0;
      
      // 특징 내용을 키워드로 분석하여 적합한 MediaPipe 값에 연결
      const featureLower = feature.toLowerCase();
      
      // 감정 관련 특징 (표정, 에너지, 인상 등)
      if (featureLower.includes('표정') || featureLower.includes('expression') || 
          featureLower.includes('表情') || featureLower.includes('biểu cảm') ||
          featureLower.includes('ekspresi') || featureLower.includes('에너지') ||
          featureLower.includes('energy') || featureLower.includes('인상') ||
          featureLower.includes('impression') || featureLower.includes('印象')) {
        // 각 감정 점수에 따라 가중치 부여
        if (featureLower.includes('강렬') || featureLower.includes('strong') || 
            featureLower.includes('強烈') || featureLower.includes('mạnh mẽ')) {
          score += emotions.angry * 1000;
        }
        if (featureLower.includes('호기심') || featureLower.includes('curiosity') ||
            featureLower.includes('好奇心') || featureLower.includes('tò mò')) {
          score += emotions.surprised * 1000;
        }
        if (featureLower.includes('신중') || featureLower.includes('cautious') ||
            featureLower.includes('慎重') || featureLower.includes('thận trọng')) {
          score += emotions.fearful * 1000;
        }
        if (featureLower.includes('세심') || featureLower.includes('meticulous') ||
            featureLower.includes('細心') || featureLower.includes('tỉ mỉ')) {
          score += emotions.disgusted * 1000;
        }
        if (featureLower.includes('자신감') || featureLower.includes('confidence') ||
            featureLower.includes('自信') || featureLower.includes('tự tin')) {
          score += emotions.contempt * 1000;
        }
        if (featureLower.includes('밝') || featureLower.includes('bright') ||
            featureLower.includes('明る') || featureLower.includes('sáng')) {
          score += emotions.happy * 1000;
        }
        if (featureLower.includes('평온') || featureLower.includes('calm') ||
            featureLower.includes('平穏') || featureLower.includes('bình yên')) {
          score += emotions.neutral * 1000;
        }
        if (featureLower.includes('감성') || featureLower.includes('emotional') ||
            featureLower.includes('感情') || featureLower.includes('cảm xúc')) {
          score += emotions.sad * 1000;
        }
      }
      
      // 눈 관련 특징
      if (featureLower.includes('eye') || featureLower.includes('눈') || 
          featureLower.includes('目') || featureLower.includes('mắt') ||
          featureLower.includes('mata') || featureLower.includes('눈매')) {
        score += eyeOpenness * 500 + rightEyeSize * 300;
        if (eyeSymmetry < 0.05) score += 50;
      }
      // 얼굴 대칭/균형 관련
      else if (featureLower.includes('symmetry') || featureLower.includes('대칭') ||
               featureLower.includes('対称') || featureLower.includes('đối xứng') ||
               featureLower.includes('simetri') || featureLower.includes('균형') ||
               featureLower.includes('balance') || featureLower.includes('平衡')) {
        score += (0.1 - Math.min(eyeSymmetry, 0.1)) * 400;
      }
      // 입/입술 관련
      else if (featureLower.includes('mouth') || featureLower.includes('입') ||
               featureLower.includes('口') || featureLower.includes('miệng') ||
               featureLower.includes('mulut') || featureLower.includes('lip') ||
               featureLower.includes('입술') || featureLower.includes('唇') ||
               featureLower.includes('smile') || featureLower.includes('미소')) {
        score += mouthWidth * 400;
        if (mouthAngle < -0.015) score += 50;
      }
      // 코 관련
      else if (featureLower.includes('nose') || featureLower.includes('코') ||
               featureLower.includes('鼻') || featureLower.includes('mũi') ||
               featureLower.includes('hidung')) {
        score += noseHeight * 300 + noseWidth * 200;
      }
      // 얼굴 비율/구조 관련
      else if (featureLower.includes('face') || featureLower.includes('얼굴') ||
               featureLower.includes('顔') || featureLower.includes('khuôn mặt') ||
               featureLower.includes('wajah') || featureLower.includes('ratio') ||
               featureLower.includes('비율') || featureLower.includes('比率') ||
               featureLower.includes('proportion') || featureLower.includes('比例')) {
        score += Math.abs(faceRatio - 0.75) * 300 + faceWidth * 200;
        score += Math.abs(faceVerticalRatio - 1.3) * 100;
      }
      // 입체감/깊이 관련
      else if (featureLower.includes('depth') || featureLower.includes('입체') ||
               featureLower.includes('立体') || featureLower.includes('chiều sâu') ||
               featureLower.includes('kedalaman') || featureLower.includes('dimension')) {
        score += faceDepth * 500;
      }
      // 턱선 관련
      else if (featureLower.includes('jaw') || featureLower.includes('턱') ||
               featureLower.includes('顎') || featureLower.includes('hàm') ||
               featureLower.includes('rahang')) {
        score += jawlineAngle * 400;
      }
      // 이마 관련
      else if (featureLower.includes('forehead') || featureLower.includes('이마') ||
               featureLower.includes('額') || featureLower.includes('trán') ||
               featureLower.includes('dahi')) {
        score += foreheadHeight * 300;
      }
      // 눈썹 관련
      else if (featureLower.includes('eyebrow') || featureLower.includes('눈썹') ||
               featureLower.includes('眉毛') || featureLower.includes('lông mày') ||
               featureLower.includes('alis')) {
        score += eyebrowHeight * 300;
      }
      // 기타 특징들은 모든 MediaPipe 값의 조합으로 평가
      else {
        score += (eyeOpenness * 100 + faceRatio * 50 + (0.1 - eyeSymmetry) * 100 + 
                 mouthWidth * 50 + noseHeight * 50 + faceDepth * 100 + 
                 emotions.happy * 200 + emotions.neutral * 100) / 8;
      }
      
      // MediaPipe 값의 미세한 변화를 반영하기 위한 랜덤성 추가
      // 같은 사진이라도 약간의 노이즈로 다양성 확보
      const mediapipeNoise = (eyeOpenness * 123.456 + faceRatio * 234.567 + eyeSymmetry * 345.678 + 
                              mouthWidth * 456.789 + noseHeight * 567.890 + 
                              emotions.happy * 678.901 + emotions.neutral * 789.012) % 10;
      score += (mediapipeNoise - 5) * 2; // -10 ~ +10 범위
      
      return { feature, score, index };
    });
    
    // 점수 순으로 정렬 (높은 점수 우선) - MediaPipe 값에 가장 적합한 특징 우선
    scoredFeatures.sort((a, b) => b.score - a.score);
    
    // 상위 6개만 선택 (MediaPipe 값에 가장 적합한 특징들)
    const selectedFeatures = scoredFeatures.slice(0, attractiveTargetCount).map(s => s.feature);
    
    // 부족한 개수만큼 기본 특징 추가 (중복 방지)
    while (selectedFeatures.length < attractiveTargetCount) {
      const availableFeatures = defaultAttractiveFeatures[lang].filter(f => !selectedFeatures.includes(f));
      if (availableFeatures.length > 0) {
        // MediaPipe 값들의 조합을 seed로 사용하여 결정론적 선택
        const mediapipeSeed = ((eyeOpenness * 1000 + faceRatio * 100 + eyeSymmetry * 10 + 
                               mouthWidth * 1000 + noseHeight * 100 + emotions.happy * 50) % availableFeatures.length);
        const selectedIndex = Math.floor(mediapipeSeed);
        selectedFeatures.push(availableFeatures[selectedIndex]);
      } else {
        break;
      }
    }
    
    // 최종 6개로 제한 및 중복 최종 확인
    const finalFeatures: string[] = [];
    const finalSeen = new Set<string>();
    for (const feature of selectedFeatures.slice(0, attractiveTargetCount)) {
      if (!finalSeen.has(feature)) {
        finalSeen.add(feature);
        finalFeatures.push(feature);
      }
    }
    
    attractiveFeatures[lang] = finalFeatures.slice(0, attractiveTargetCount);
  });
  
  // 개선 제안 (건설적이고 긍정적으로) - MediaPipe로 감지된 부족한 부분 포함
  const improvementSuggestions = {
    ko: [] as string[],
    en: [] as string[],
    ja: [] as string[],
    'zh-CN': [] as string[],
    'zh-TW': [] as string[],
    vi: [] as string[],
    id: [] as string[]
  };
  
  // MediaPipe로 감지된 부족한 부분 분석
  
  // 눈 크기 개선 (작은 눈인 경우)
  if (eyeOpenness < 0.015) {
    improvementSuggestions.ko.push('눈을 살짝 더 크게 뜨면 생기 있고 밝은 인상을 줄 수 있어요');
    improvementSuggestions.en.push('Opening your eyes slightly wider can give a more lively and bright impression');
    improvementSuggestions.ja.push('目を少し大きく開けると生き生きとした明るい印象を与えることができます');
    improvementSuggestions['zh-CN'].push('稍微睁大眼睛可以给人更有活力明亮的印象');
    improvementSuggestions['zh-TW'].push('稍微睜大眼睛可以給人更有活力明亮的印象');
    improvementSuggestions.vi.push('Mở mắt to hơn một chút có thể tạo ấn tượng sống động và sáng hơn');
    improvementSuggestions.id.push('Membuka mata sedikit lebih lebar dapat memberi kesan lebih hidup dan cerah');
  }
  
  // 얼굴 대칭성 개선
  if (eyeSymmetry > 0.08) {
    improvementSuggestions.ko.push('얼굴의 대칭성을 조금 더 개선하면 더욱 조화로워 보일 거예요');
    improvementSuggestions.en.push('Improving facial symmetry a bit more can make you look more harmonious');
    improvementSuggestions.ja.push('顔の対称性を少しでも改善すると、より調和して見えるでしょう');
    improvementSuggestions['zh-CN'].push('稍微改善面部对称性可以看起来更和谐');
    improvementSuggestions['zh-TW'].push('稍微改善面部對稱性可以看起來更和諧');
    improvementSuggestions.vi.push('Cải thiện tính đối xứng khuôn mặt một chút có thể trông hài hòa hơn');
    improvementSuggestions.id.push('Meningkatkan simetri wajah sedikit lebih dapat membuat Anda terlihat lebih harmonis');
  }
  
  // 미소 개선 (미소가 없는 경우)
  if (mouthCurve >= -0.01) {
    improvementSuggestions.ko.push('자연스러운 미소를 연습하면 더욱 친근하고 매력적으로 보일 거예요');
    improvementSuggestions.en.push('Practicing a natural smile can make you look more friendly and attractive');
    improvementSuggestions.ja.push('自然な笑顔を練習すると、より親しみやすく魅力的に見えるでしょう');
    improvementSuggestions['zh-CN'].push('练习自然的微笑会让你看起来更友好和有魅力');
    improvementSuggestions['zh-TW'].push('練習自然的微笑會讓你看起來更友好和有魅力');
    improvementSuggestions.vi.push('Luyện tập nụ cười tự nhiên có thể làm bạn trông thân thiện và hấp dẫn hơn');
    improvementSuggestions.id.push('Berlatih senyum alami dapat membuat Anda terlihat lebih ramah dan menarik');
  }
  
  // 감정 기반 개선 제안
  if (emotions.sad > 0.2) {
    improvementSuggestions.ko.push('더 자주 밝은 표정을 지으면 더욱 매력적일 거예요');
    improvementSuggestions.en.push('More frequent bright expressions would add charm');
    improvementSuggestions.ja.push('もっと頻繁に明るい表情をするとより魅力的になります');
    improvementSuggestions['zh-CN'].push('更常展现明亮表情会更有魅力');
    improvementSuggestions['zh-TW'].push('更常展現明亮表情會更有魅力');
    improvementSuggestions.vi.push('Biểu cảm tươi sáng thường xuyên hơn sẽ thêm sức hút');
    improvementSuggestions.id.push('Ekspresi cerah lebih sering akan menambah pesona');
  }
  
  if (emotions.angry > 0.15) {
    improvementSuggestions.ko.push('부드러운 표정 연습이 도움이 될 수 있어요');
    improvementSuggestions.en.push('Practicing softer expressions could help');
    improvementSuggestions.ja.push('柔らかい表情の練習が役に立つかもしれません');
    improvementSuggestions['zh-CN'].push('练习更柔和的表情会有所帮助');
    improvementSuggestions['zh-TW'].push('練習更柔和的表情會有所幫助');
    improvementSuggestions.vi.push('Luyện tập biểu cảm nhẹ nhàng hơn có thể hữu ích');
    improvementSuggestions.id.push('Berlatih ekspresi yang lebih lembut bisa membantu');
  }
  
  // 얼굴 각도 및 자세 개선
  const faceAngle = Math.abs((landmarks[152]?.z || 0) - (landmarks[4]?.z || 0));
  if (faceAngle < 0.03) {
    improvementSuggestions.ko.push('얼굴을 정면으로 조금 더 향하면 더욱 명확한 인상을 줄 수 있어요');
    improvementSuggestions.en.push('Facing slightly more frontward can give a clearer impression');
    improvementSuggestions.ja.push('顔を正面にもう少し向けると、より明確な印象を与えることができます');
    improvementSuggestions['zh-CN'].push('稍微更正面朝向可以给人更清晰的印象');
    improvementSuggestions['zh-TW'].push('稍微更正面朝向可以給人更清晰的印象');
    improvementSuggestions.vi.push('Quay mặt về phía trước hơn một chút có thể tạo ấn tượng rõ ràng hơn');
    improvementSuggestions.id.push('Menghadap sedikit lebih ke depan dapat memberi kesan yang lebih jelas');
  }
  
  // 기본 개선 제안 (항상 포함)
  if (improvementSuggestions.ko.length < 2) {
    improvementSuggestions.ko.push('자신감 있는 표정이 더욱 빛날 거예요');
    improvementSuggestions.en.push('Confident expressions will shine even more');
    improvementSuggestions.ja.push('自信に満ちた表情がより輝くでしょう');
    improvementSuggestions['zh-CN'].push('自信的表情会更加闪耀');
    improvementSuggestions['zh-TW'].push('自信的表情會更加閃耀');
    improvementSuggestions.vi.push('Biểu cảm tự tin sẽ tỏa sáng hơn nữa');
    improvementSuggestions.id.push('Ekspresi percaya diri akan lebih bersinar');
  }
  
  // 8가지 감정 분석 및 코멘트 생성
  const emotionComments = {
    ko: [] as string[],
    en: [] as string[],
    ja: [] as string[],
    'zh-CN': [] as string[],
    'zh-TW': [] as string[],
    vi: [] as string[],
    id: [] as string[]
  };

  // 각 감정에 대한 코멘트 추가 (threshold: 0.15)
  // Angry 감정 코멘트 (10가지)
  if (emotions.angry > 0.15) {
    const angryComments = [
      { ko: '표정에서 강렬한 의지와 결단력이 느껴집니다', en: 'Your expression shows strong will and determination', ja: '表情から強烈な意志と決断力が感じられます', 'zh-CN': '表情中感受到强烈的意志和决断力', 'zh-TW': '表情中感受到強烈的意志和決斷力', vi: 'Biểu cảm của bạn thể hiện ý chí mạnh mẽ và quyết đoán', id: 'Ekspresi Anda menunjukkan kemauan kuat dan tekad' },
      { ko: '확고한 신념과 목표 지향적 태도가 드러납니다', en: 'Your expression reveals firm conviction and goal-oriented attitude', ja: '確固とした信念と目標指向的な態度が現れます', 'zh-CN': '你的表情显示出坚定的信念和目标导向的态度', 'zh-TW': '你的表情顯示出堅定的信念和目標導向的態度', vi: 'Biểu cảm của bạn thể hiện niềm tin vững chắc và thái độ hướng tới mục tiêu', id: 'Ekspresi Anda mengungkapkan keyakinan teguh dan sikap berorientasi tujuan' },
      { ko: '강인한 리더십과 추진력을 보여주는 표정입니다', en: 'Your expression shows strong leadership and drive', ja: '強靭なリーダーシップと推進力を示す表情です', 'zh-CN': '你的表情展现出强大的领导力和推动力', 'zh-TW': '你的表情展現出強大的領導力和推動力', vi: 'Biểu cảm của bạn thể hiện khả năng lãnh đạo mạnh mẽ và động lực', id: 'Ekspresi Anda menunjukkan kepemimpinan kuat dan dorongan' },
      { ko: '단호하고 명확한 의사표현이 돋보입니다', en: 'Your resolute and clear expression stands out', ja: '断固として明確な意思表明が目立ちます', 'zh-CN': '你坚决明确的表情很突出', 'zh-TW': '你堅決明確的表情很突出', vi: 'Biểu cảm quyết đoán và rõ ràng của bạn nổi bật', id: 'Ekspresi tegas dan jelas Anda menonjol' },
      { ko: '목표를 향한 불굴의 의지가 표정에 드러납니다', en: 'Your expression reveals unyielding will toward your goals', ja: '目標への不屈の意志が表情に現れます', 'zh-CN': '你的表情展现出对目标的坚定意志', 'zh-TW': '你的表情展現出對目標的堅定意志', vi: 'Biểu cảm của bạn thể hiện ý chí kiên cường hướng tới mục tiêu', id: 'Ekspresi Anda mengungkapkan kemauan yang teguh menuju tujuan Anda' },
      { ko: '열정과 결단력이 넘치는 강렬한 인상을 줍니다', en: 'Your expression gives a strong impression full of passion and determination', ja: '情熱と決断力に満ちた強烈な印象を与えます', 'zh-CN': '你的表情给人充满激情和决断力的强烈印象', 'zh-TW': '你的表情給人充滿激情和決斷力的強烈印象', vi: 'Biểu cảm của bạn tạo ấn tượng mạnh mẽ tràn đầy đam mê và quyết tâm', id: 'Ekspresi Anda memberi kesan kuat penuh gairah dan tekad' },
      { ko: '확신에 찬 의지력이 얼굴 전체에 감돕니다', en: 'Confident willpower permeates your entire face', ja: '確信に満ちた意志力が顔全体に漂います', 'zh-CN': '充满自信的意志力弥漫在你整个脸上', 'zh-TW': '充滿自信的意志力瀰漫在你整個臉上', vi: 'Ý chí đầy tự tin thấm đẫm toàn bộ khuôn mặt của bạn', id: 'Kemauan yang penuh keyakinan meresap ke seluruh wajah Anda' },
      { ko: '강렬한 에너지와 추진력이 표정에서 느껴집니다', en: 'Intense energy and drive can be felt in your expression', ja: '強烈なエネルギーと推進力が表情から感じられます', 'zh-CN': '你的表情中可以感受到强烈的能量和推动力', 'zh-TW': '你的表情中可以感受到強烈的能量和推動力', vi: 'Năng lượng mạnh mẽ và động lực có thể cảm nhận được trong biểu cảm của bạn', id: 'Energi intens dan dorongan dapat dirasakan dalam ekspresi Anda' },
      { ko: '독립적이고 주도적인 성향이 표정에 반영되어 있습니다', en: 'Independent and proactive tendencies are reflected in your expression', ja: '独立的で主導的な傾向が表情に反映されています', 'zh-CN': '你的表情反映出独立和主动的倾向', 'zh-TW': '你的表情反映出獨立和主動的傾向', vi: 'Xu hướng độc lập và chủ động được phản ánh trong biểu cảm của bạn', id: 'Kecenderungan independen dan proaktif tercermin dalam ekspresi Anda' },
      { ko: '목표 지향적이고 추진력 있는 리더십 표정입니다', en: 'Your expression shows goal-oriented and driven leadership', ja: '目標指向的で推進力のあるリーダーシップ表情です', 'zh-CN': '你的表情展现出目标导向和有动力的领导力', 'zh-TW': '你的表情展現出目標導向和有動力的領導力', vi: 'Biểu cảm của bạn thể hiện khả năng lãnh đạo hướng tới mục tiêu và có động lực', id: 'Ekspresi Anda menunjukkan kepemimpinan yang berorientasi tujuan dan didorong' }
    ];
    const angryIndex = Math.floor((emotions.angry * 1000 + eyeOpenness * 200 + faceRatio * 150) % angryComments.length);
    const selectedAngry = angryComments[angryIndex];
    emotionComments.ko.push(selectedAngry.ko);
    emotionComments.en.push(selectedAngry.en);
    emotionComments.ja.push(selectedAngry.ja);
    emotionComments['zh-CN'].push(selectedAngry['zh-CN']);
    emotionComments['zh-TW'].push(selectedAngry['zh-TW']);
    emotionComments.vi.push(selectedAngry.vi);
    emotionComments.id.push(selectedAngry.id);
  }
  
  // Surprised 감정 코멘트 (10가지)
  if (emotions.surprised > 0.15) {
    const surprisedComments = [
      { ko: '호기심과 생동감이 넘치는 표정입니다', en: 'Your expression is full of curiosity and vitality', ja: '好奇心と活力に満ちた表情です', 'zh-CN': '充满好奇心和活力的表情', 'zh-TW': '充滿好奇心和活力的表情', vi: 'Biểu cảm của bạn tràn đầy sự tò mò và sức sống', id: 'Ekspresi Anda penuh dengan rasa ingin tahu dan vitalitas' },
      { ko: '새로운 경험에 대한 열린 마음이 표정에 나타납니다', en: 'Your expression shows an open mind toward new experiences', ja: '新しい経験への開かれた心が表情に現れます', 'zh-CN': '你的表情显示出对新体验的开放心态', 'zh-TW': '你的表情顯示出對新體驗的開放心態', vi: 'Biểu cảm của bạn thể hiện tâm hồn cởi mở với những trải nghiệm mới', id: 'Ekspresi Anda menunjukkan pikiran terbuka terhadap pengalaman baru' },
      { ko: '탐구 정신과 학습 의욕이 느껴지는 활발한 표정', en: 'Your active expression shows a spirit of inquiry and eagerness to learn', ja: '探究心と学習意欲が感じられる活発な表情', 'zh-CN': '你活跃的表情展现出探索精神和学习热情', 'zh-TW': '你活躍的表情展現出探索精神和學習熱情', vi: 'Biểu cảm năng động của bạn thể hiện tinh thần khám phá và ham muốn học hỏi', id: 'Ekspresi aktif Anda menunjukkan semangat penyelidikan dan hasrat belajar' },
      { ko: '역동적이고 생기 넘치는 에너지가 표정에서 전해집니다', en: 'Dynamic and vibrant energy is conveyed in your expression', ja: '動的で生気に満ちたエネルギーが表情から伝わります', 'zh-CN': '你的表情传达出动态和充满生机的能量', 'zh-TW': '你的表情傳達出動態和充滿生機的能量', vi: 'Năng lượng năng động và sống động được truyền đạt trong biểu cảm của bạn', id: 'Energi dinamis dan hidup disampaikan dalam ekspresi Anda' },
      { ko: '창의성과 상상력이 풍부한 호기심 많은 표정입니다', en: 'Your expression shows rich creativity and imagination with curiosity', ja: '創造性と想像力に富んだ好奇心旺盛な表情です', 'zh-CN': '你的表情展现出丰富的创造力和想象力，充满好奇心', 'zh-TW': '你的表情展現出豐富的創造力和想像力，充滿好奇心', vi: 'Biểu cảm của bạn thể hiện sự sáng tạo và trí tưởng tượng phong phú với sự tò mò', id: 'Ekspresi Anda menunjukkan kreativitas dan imajinasi yang kaya dengan rasa ingin tahu' },
      { ko: '새로운 가능성에 대한 기대감이 표정에 가득합니다', en: 'Your expression is full of anticipation for new possibilities', ja: '新しい可能性への期待感が表情に満ちています', 'zh-CN': '你的表情充满对新可能性的期待', 'zh-TW': '你的表情充滿對新可能性的期待', vi: 'Biểu cảm của bạn tràn ngập sự kỳ vọng về những khả năng mới', id: 'Ekspresi Anda penuh dengan antisipasi akan kemungkinan baru' },
      { ko: '활발하고 긍정적인 에너지가 넘치는 밝은 표정', en: 'Your bright expression overflows with active and positive energy', ja: '活発で前向きなエネルギーに満ちた明るい表情', 'zh-CN': '你明亮的表情充满活跃和积极的能量', 'zh-TW': '你明亮的表情充滿活躍和積極的能量', vi: 'Biểu cảm tươi sáng của bạn tràn ngập năng lượng tích cực và năng động', id: 'Ekspresi cerah Anda meluap dengan energi aktif dan positif' },
      { ko: '학습하고 성장하려는 의지가 표정에서 느껴집니다', en: 'Your expression shows a will to learn and grow', ja: '学習し成長しようとする意志が表情から感じられます', 'zh-CN': '你的表情展现出学习和成长的意愿', 'zh-TW': '你的表情展現出學習和成長的意願', vi: 'Biểu cảm của bạn thể hiện ý chí học hỏi và phát triển', id: 'Ekspresi Anda menunjukkan kemauan untuk belajar dan tumbuh' },
      { ko: '생동감 넘치는 호기심으로 가득 찬 밝은 인상', en: 'Your bright impression is full of vibrant curiosity', ja: '生気に満ちた好奇心で満たされた明るい印象', 'zh-CN': '你明亮的印象充满生机勃勃的好奇心', 'zh-TW': '你明亮的印象充滿生機勃勃的好奇心', vi: 'Ấn tượng tươi sáng của bạn tràn đầy sự tò mò sống động', id: 'Kesan cerah Anda penuh dengan rasa ingin tahu yang hidup' },
      { ko: '새로운 발견에 대한 기쁨이 표정 전체를 감돕니다', en: 'Joy for new discoveries permeates your entire expression', ja: '新しい発見への喜びが表情全体に漂います', 'zh-CN': '对新发现的喜悦弥漫在你整个表情中', 'zh-TW': '對新發現的喜悅瀰漫在你整個表情中', vi: 'Niềm vui về những khám phá mới thấm đẫm toàn bộ biểu cảm của bạn', id: 'Kegembiraan atas penemuan baru meresap ke seluruh ekspresi Anda' }
    ];
    const surprisedIndex = Math.floor((emotions.surprised * 1000 + eyeOpenness * 300 + faceRatio * 200) % surprisedComments.length);
    const selectedSurprised = surprisedComments[surprisedIndex];
    emotionComments.ko.push(selectedSurprised.ko);
    emotionComments.en.push(selectedSurprised.en);
    emotionComments.ja.push(selectedSurprised.ja);
    emotionComments['zh-CN'].push(selectedSurprised['zh-CN']);
    emotionComments['zh-TW'].push(selectedSurprised['zh-TW']);
    emotionComments.vi.push(selectedSurprised.vi);
    emotionComments.id.push(selectedSurprised.id);
  }
  
  // Fearful 감정 코멘트 (10가지)
  if (emotions.fearful > 0.15) {
    const fearfulComments = [
      { ko: '신중하고 경계심 있는 표정으로 안전을 중시하는 모습입니다', en: 'Your cautious expression shows you value safety', ja: '慎重で警戒心のある表情は、安全を重視する様子を示しています', 'zh-CN': '谨慎和警觉的表情显示出你重视安全', 'zh-TW': '謹慎和警覺的表情顯示出你重視安全', vi: 'Biểu cảm thận trọng của bạn cho thấy bạn coi trọng an toàn', id: 'Ekspresi hati-hati Anda menunjukkan bahwa Anda menghargai keselamatan' },
      { ko: '상황을 면밀히 관찰하는 현명하고 신중한 표정', en: 'Your expression shows wise and cautious observation of the situation', ja: '状況を綿密に観察する賢明で慎重な表情', 'zh-CN': '你的表情显示出对情况的明智和谨慎观察', 'zh-TW': '你的表情顯示出對情況的明智和謹慎觀察', vi: 'Biểu cảm của bạn thể hiện sự quan sát khôn ngoan và thận trọng tình huống', id: 'Ekspresi Anda menunjukkan pengamatan yang bijaksana dan hati-hati terhadap situasi' },
      { ko: '책임감 있고 신중한 판단력을 보여주는 표정입니다', en: 'Your expression shows responsible and prudent judgment', ja: '責任感があり慎重な判断力を示す表情です', 'zh-CN': '你的表情展现出负责任和谨慎的判断力', 'zh-TW': '你的表情展現出負責任和謹慎的判斷力', vi: 'Biểu cảm của bạn thể hiện khả năng phán đoán có trách nhiệm và thận trọng', id: 'Ekspresi Anda menunjukkan penilaian yang bertanggung jawab dan bijaksana' },
      { ko: '예리한 주의력과 집중력이 느껴지는 경계적인 표정', en: 'Your vigilant expression shows sharp attention and focus', ja: '鋭い注意力と集中力が感じられる警戒的な表情', 'zh-CN': '你警觉的表情展现出敏锐的注意力和专注力', 'zh-TW': '你警覺的表情展現出敏銳的注意力和專注力', vi: 'Biểu cảm cảnh giác của bạn thể hiện sự chú ý và tập trung sắc bén', id: 'Ekspresi waspada Anda menunjukkan perhatian dan fokus yang tajam' },
      { ko: '안전을 우선시하는 신중한 사고방식이 드러납니다', en: 'Your expression reveals a cautious mindset that prioritizes safety', ja: '安全を優先する慎重な思考方法が現れます', 'zh-CN': '你的表情显示出优先考虑安全的谨慎思维方式', 'zh-TW': '你的表情顯示出優先考慮安全的謹慎思維方式', vi: 'Biểu cảm của bạn thể hiện tư duy thận trọng ưu tiên an toàn', id: 'Ekspresi Anda mengungkapkan pola pikir hati-hati yang memprioritaskan keselamatan' },
      { ko: '세심한 관찰력과 분석적 사고가 표정에 반영되어 있습니다', en: 'Your expression reflects meticulous observation and analytical thinking', ja: '細心な観察力と分析的思考が表情に反映されています', 'zh-CN': '你的表情反映出细致的观察力和分析思维', 'zh-TW': '你的表情反映出細緻的觀察力和分析思維', vi: 'Biểu cảm của bạn phản ánh khả năng quan sát tỉ mỉ và tư duy phân tích', id: 'Ekspresi Anda mencerminkan pengamatan yang teliti dan pemikiran analitis' },
      { ko: '예리한 판단력과 경계심이 공존하는 신중한 인상', en: 'Your cautious impression shows sharp judgment coexisting with vigilance', ja: '鋭い判断力と警戒心が共存する慎重な印象', 'zh-CN': '你谨慎的印象展现出敏锐的判断力与警觉并存', 'zh-TW': '你謹慎的印象展現出敏銳的判斷力與警覺並存', vi: 'Ấn tượng thận trọng của bạn thể hiện khả năng phán đoán sắc bén cùng với sự cảnh giác', id: 'Kesan hati-hati Anda menunjukkan penilaian tajam yang berdampingan dengan kewaspadaan' },
      { ko: '상황 파악 능력이 뛰어난 현명한 표정입니다', en: 'Your expression shows excellent situational awareness', ja: '状況把握能力が優れた賢明な表情です', 'zh-CN': '你的表情展现出出色的情境感知能力', 'zh-TW': '你的表情展現出出色的情境感知能力', vi: 'Biểu cảm của bạn thể hiện khả năng nhận thức tình huống xuất sắc', id: 'Ekspresi Anda menunjukkan kesadaran situasional yang sangat baik' },
      { ko: '안정감을 추구하는 신중하고 차분한 표정', en: 'Your cautious and calm expression seeks stability', ja: '安定感を求める慎重で落ち着いた表情', 'zh-CN': '你谨慎平静的表情寻求稳定感', 'zh-TW': '你謹慎平靜的表情尋求穩定感', vi: 'Biểu cảm thận trọng và bình tĩnh của bạn tìm kiếm sự ổn định', id: 'Ekspresi hati-hati dan tenang Anda mencari stabilitas' },
      { ko: '리스크 관리에 능한 신중한 의사결정이 표정에서 느껴집니다', en: 'Your expression shows cautious decision-making skilled in risk management', ja: 'リスク管理に長けた慎重な意思決定が表情から感じられます', 'zh-CN': '你的表情展现出擅长风险管理的谨慎决策', 'zh-TW': '你的表情展現出擅長風險管理的謹慎決策', vi: 'Biểu cảm của bạn thể hiện khả năng ra quyết định thận trọng giỏi quản lý rủi ro', id: 'Ekspresi Anda menunjukkan pengambilan keputusan hati-hati yang terampil dalam manajemen risiko' }
    ];
    const fearfulIndex = Math.floor((emotions.fearful * 1000 + eyeOpenness * 150 + eyeSymmetry * 100) % fearfulComments.length);
    const selectedFearful = fearfulComments[fearfulIndex];
    emotionComments.ko.push(selectedFearful.ko);
    emotionComments.en.push(selectedFearful.en);
    emotionComments.ja.push(selectedFearful.ja);
    emotionComments['zh-CN'].push(selectedFearful['zh-CN']);
    emotionComments['zh-TW'].push(selectedFearful['zh-TW']);
    emotionComments.vi.push(selectedFearful.vi);
    emotionComments.id.push(selectedFearful.id);
  }
  
  // Disgusted 감정 코멘트 (10가지)
  if (emotions.disgusted > 0.15) {
    const disgustedComments = [
      { ko: '세심하고 까다로운 취향을 가진 명확한 기준을 보여줍니다', en: 'Your expression shows meticulous taste with clear standards', ja: '細心で厳格な好みと明確な基準を示しています', 'zh-CN': '显示出细致挑剔的品味和明确的标准', 'zh-TW': '顯示出細緻挑剔的品味和明確的標準', vi: 'Biểu cảm của bạn thể hiện sở thích tỉ mỉ với tiêu chuẩn rõ ràng', id: 'Ekspresi Anda menunjukkan selera teliti dengan standar yang jelas' },
      { ko: '품질에 대한 높은 기준과 선택적 태도가 드러납니다', en: 'Your expression reveals high standards for quality and selective attitude', ja: '品質に対する高い基準と選択的な態度が現れます', 'zh-CN': '你的表情显示出对品质的高标准和不妥协的态度', 'zh-TW': '你的表情顯示出對品質的高標準和不妥協的態度', vi: 'Biểu cảm của bạn thể hiện tiêu chuẩn cao về chất lượng và thái độ không thỏa hiệp', id: 'Ekspresi Anda mengungkapkan standar tinggi untuk kualitas dan sikap selektif' },
      { ko: '완벽주의적 성향과 정제된 미적 감각을 보여줍니다', en: 'Your expression shows perfectionist tendencies and refined aesthetic sense', ja: '完璧主義的な傾向と洗練された美的感覚を示しています', 'zh-CN': '你的表情展现出完美主义倾向和精致的审美感', 'zh-TW': '你的表情展現出完美主義傾向和精緻的審美感', vi: 'Biểu cảm của bạn thể hiện xu hướng cầu toàn và giác quan thẩm mỹ tinh tế', id: 'Ekspresi Anda menunjukkan kecenderungan perfeksionis dan rasa estetika yang halus' },
      { ko: '고급스럽고 세련된 취향이 표정에서 느껴집니다', en: 'Sophisticated and refined taste can be felt in your expression', ja: '上品で洗練された好みが表情から感じられます', 'zh-CN': '你的表情中可以感受到高雅精致的品味', 'zh-TW': '你的表情中可以感受到高雅精緻的品味', vi: 'Sở thích sang trọng và tinh tế có thể cảm nhận được trong biểu cảm của bạn', id: 'Selera canggih dan halus dapat dirasakan dalam ekspresi Anda' },
      { ko: '명확한 선호도와 확고한 기준이 표정에 반영되어 있습니다', en: 'Your expression reflects clear preferences and firm standards', ja: '明確な好みと確固たる基準が表情に反映されています', 'zh-CN': '你的表情反映出明确的偏好和坚定的标准', 'zh-TW': '你的表情反映出明確的偏好和堅定的標準', vi: 'Biểu cảm của bạn phản ánh sở thích rõ ràng và tiêu chuẩn vững chắc', id: 'Ekspresi Anda mencerminkan preferensi yang jelas dan standar yang tegas' },
      { ko: '품질 중시의 철저한 선택 기준을 가진 표정입니다', en: 'Your expression shows thorough selection criteria that value quality', ja: '品質重視の徹底した選択基準を持つ表情です', 'zh-CN': '你的表情展现出重视品质的严格选择标准', 'zh-TW': '你的表情展現出重視品質的嚴格選擇標準', vi: 'Biểu cảm của bạn thể hiện tiêu chuẩn lựa chọn kỹ lưỡng coi trọng chất lượng', id: 'Ekspresi Anda menunjukkan kriteria seleksi yang teliti yang menghargai kualitas' },
      { ko: '정제된 감각과 세련된 취향이 얼굴에 드러납니다', en: 'Refined sense and sophisticated taste are revealed in your face', ja: '洗練された感覚と洗練された好みが顔に現れます', 'zh-CN': '你精致的感官和精致的品味在你的脸上显露出来', 'zh-TW': '你精緻的感官和精緻的品味在你的臉上顯露出來', vi: 'Giác quan tinh tế và sở thích sang trọng được thể hiện trên khuôn mặt của bạn', id: 'Rasa halus dan selera canggih terungkap di wajah Anda' },
      { ko: '완벽을 추구하는 까다롭고 정밀한 성향', en: 'Your expression shows demanding and precise tendencies that seek perfection', ja: '完璧を追求する厳格で精密な傾向', 'zh-CN': '你的表情展现出追求完美的严格精确倾向', 'zh-TW': '你的表情展現出追求完美的嚴格精確傾向', vi: 'Biểu cảm của bạn thể hiện xu hướng khắt khe và chính xác tìm kiếm sự hoàn hảo', id: 'Ekspresi Anda menunjukkan kecenderungan menuntut dan presisi yang mencari kesempurnaan' },
      { ko: '고급스러운 미적 기준을 가진 세심한 평가력을 보여줍니다', en: 'Your expression shows meticulous evaluation skills with sophisticated aesthetic standards', ja: '上品な美的基準を持つ細心な評価力を示しています', 'zh-CN': '你的表情展现出具有精致审美标准的细致评价能力', 'zh-TW': '你的表情展現出具有精緻審美標準的細緻評價能力', vi: 'Biểu cảm của bạn thể hiện khả năng đánh giá tỉ mỉ với tiêu chuẩn thẩm mỹ tinh tế', id: 'Ekspresi Anda menunjukkan keterampilan evaluasi yang teliti dengan standar estetika yang canggih' },
      { ko: '품격 있고 선택적인 취향이 표정 전체에 감돕니다', en: 'Dignified and selective taste permeates your entire expression', ja: '品格があり選択的な好みが表情全体に漂います', 'zh-CN': '有品位和选择性的品味弥漫在你整个表情中', 'zh-TW': '有品位和選擇性的品味瀰漫在你整個表情中', vi: 'Sở thích có phẩm cách và có chọn lọc thấm đẫm toàn bộ biểu cảm của bạn', id: 'Selera bermartabat dan selektif meresap ke seluruh ekspresi Anda' }
    ];
    const disgustedIndex = Math.floor((emotions.disgusted * 1000 + noseHeight * 200 + faceRatio * 150) % disgustedComments.length);
    const selectedDisgusted = disgustedComments[disgustedIndex];
    emotionComments.ko.push(selectedDisgusted.ko);
    emotionComments.en.push(selectedDisgusted.en);
    emotionComments.ja.push(selectedDisgusted.ja);
    emotionComments['zh-CN'].push(selectedDisgusted['zh-CN']);
    emotionComments['zh-TW'].push(selectedDisgusted['zh-TW']);
    emotionComments.vi.push(selectedDisgusted.vi);
    emotionComments.id.push(selectedDisgusted.id);
  }
  
  // Contempt 감정 코멘트 (10가지)
  if (emotions.contempt > 0.15) {
    const contemptComments = [
      { ko: '자신감과 독립적인 태도로 확고한 의견을 가지고 있습니다', en: 'Your confident expression shows firm opinions and independent attitude', ja: '自信と独立した態度で確固とした意見を持っています', 'zh-CN': '自信的表情显示出坚定的意见和独立的态度', 'zh-TW': '自信的表情顯示出堅定的意見和獨立的態度', vi: 'Biểu cảm tự tin của bạn thể hiện ý kiến vững chắc và thái độ độc lập', id: 'Ekspresi percaya diri Anda menunjukkan pendapat yang kuat dan sikap independen' },
      { ko: '독자적인 판단력과 강인한 의지가 표정에 드러납니다', en: 'Your expression reveals independent judgment and strong will', ja: '独自の判断力と強靭な意志が表情に現れます', 'zh-CN': '你的表情展现出独立的判断力和坚强的意志', 'zh-TW': '你的表情展現出獨立的判斷力和堅強的意志', vi: 'Biểu cảm của bạn thể hiện khả năng phán đoán độc lập và ý chí mạnh mẽ', id: 'Ekspresi Anda mengungkapkan penilaian independen dan kemauan yang kuat' },
      { ko: '자기 확신이 넘치는 당당하고 독립적인 표정입니다', en: 'Your expression shows confident and independent attitude overflowing with self-assurance', ja: '自己確信に満ちた堂々とした独立した表情です', 'zh-CN': '你的表情展现出充满自信的堂堂和独立的态度', 'zh-TW': '你的表情展現出充滿自信的堂堂和獨立的態度', vi: 'Biểu cảm của bạn thể hiện thái độ đĩnh đạc và độc lập tràn đầy tự tin vào bản thân', id: 'Ekspresi Anda menunjukkan sikap percaya diri dan independen yang meluap dengan keyakinan diri' },
      { ko: '틀에 박히지 않는 창의적이고 독립적인 사고방식', en: 'Your expression shows creative and independent thinking that breaks free from conventions', ja: '型にはまらない創造的で独立した思考方法', 'zh-CN': '你的表情展现出不拘一格的创造性和独立思考', 'zh-TW': '你的表情展現出不拘一格的創造性和獨立思考', vi: 'Biểu cảm của bạn thể hiện tư duy sáng tạo và độc lập không bị ràng buộc bởi khuôn mẫu', id: 'Ekspresi Anda menunjukkan pemikiran kreatif dan independen yang bebas dari konvensi' },
      { ko: '강렬한 개성과 독특한 매력이 표정에서 느껴집니다', en: 'Intense personality and unique charm can be felt in your expression', ja: '強烈な個性と独特な魅力が表情から感じられます', 'zh-CN': '你的表情中可以感受到强烈的个性和独特的魅力', 'zh-TW': '你的表情中可以感受到強烈的個性和獨特的魅力', vi: 'Cá tính mạnh mẽ và sức hút độc đáo có thể cảm nhận được trong biểu cảm của bạn', id: 'Kepribadian intens dan pesona unik dapat dirasakan dalam ekspresi Anda' },
      { ko: '자신만의 기준과 원칙을 가진 강인한 표정', en: 'Your strong expression shows your own standards and principles', ja: '自分だけの基準と原則を持つ強靭な表情', 'zh-CN': '你的坚强表情展现出你自己的一套标准和原则', 'zh-TW': '你的堅強表情展現出你自己的一套標準和原則', vi: 'Biểu cảm mạnh mẽ của bạn thể hiện tiêu chuẩn và nguyên tắc riêng của bạn', id: 'Ekspresi kuat Anda menunjukkan standar dan prinsip Anda sendiri' },
      { ko: '독립적이고 주도적인 성향이 얼굴 전체에 반영되어 있습니다', en: 'Independent and proactive tendencies are reflected throughout your entire face', ja: '独立的で主導的な傾向が顔全体に反映されています', 'zh-CN': '独立和主动的倾向反映在你整个脸上', 'zh-TW': '獨立和主動的傾向反映在你整個臉上', vi: 'Xu hướng độc lập và chủ động được phản ánh trên toàn bộ khuôn mặt của bạn', id: 'Kecenderungan independen dan proaktif tercermin di seluruh wajah Anda' },
      { ko: '확신에 찬 독자적 판단력이 표정에 드러납니다', en: 'Confident independent judgment is revealed in your expression', ja: '確信に満ちた独自の判断力が表情に現れます', 'zh-CN': '你自信的独立判断力在你的表情中显露出来', 'zh-TW': '你自信的獨立判斷力在你的表情中顯露出來', vi: 'Khả năng phán đoán độc lập đầy tự tin được thể hiện trong biểu cảm của bạn', id: 'Penilaian independen yang penuh keyakinan terungkap dalam ekspresi Anda' },
      { ko: '자기주도적이고 독창적인 사고를 보여주는 표정입니다', en: 'Your expression shows self-directed and original thinking', ja: '自己主導的で独創的な思考を示す表情です', 'zh-CN': '你的表情展现出自我导向和原创思维', 'zh-TW': '你的表情展現出自我導向和原創思維', vi: 'Biểu cảm của bạn thể hiện tư duy tự chủ và độc đáo', id: 'Ekspresi Anda menunjukkan pemikiran yang diarahkan sendiri dan orisinal' },
      { ko: '강렬한 개성과 자기 확신이 넘치는 독특한 매력', en: 'Your unique charm overflows with intense personality and self-confidence', ja: '強烈な個性と自己確信に満ちた独特な魅力', 'zh-CN': '你独特的魅力充满强烈的个性和自信', 'zh-TW': '你獨特的魅力充滿強烈的個性和自信', vi: 'Sức hút độc đáo của bạn tràn đầy cá tính mạnh mẽ và tự tin', id: 'Pesona unik Anda meluap dengan kepribadian intens dan kepercayaan diri' }
    ];
    const contemptIndex = Math.floor((emotions.contempt * 1000 + jawlineAngle * 300 + faceDepth * 200) % contemptComments.length);
    const selectedContempt = contemptComments[contemptIndex];
    emotionComments.ko.push(selectedContempt.ko);
    emotionComments.en.push(selectedContempt.en);
    emotionComments.ja.push(selectedContempt.ja);
    emotionComments['zh-CN'].push(selectedContempt['zh-CN']);
    emotionComments['zh-TW'].push(selectedContempt['zh-TW']);
    emotionComments.vi.push(selectedContempt.vi);
    emotionComments.id.push(selectedContempt.id);
  }
  
  // Happy 감정 코멘트 (10가지)
  if (emotions.happy > 0.15) {
    const happyComments = [
      { ko: '밝고 긍정적인 미소가 감돌며 행복한 기운을 전달합니다', en: 'Your bright smile radiates happiness and positive energy', ja: '明るく前向きな笑顔が漂い、幸せな気を伝えます', 'zh-CN': '明亮的微笑散发出幸福和积极的能量', 'zh-TW': '明亮的微笑散發出幸福和積極的能量', vi: 'Nụ cười tươi sáng của bạn tỏa ra niềm hạnh phúc và năng lượng tích cực', id: 'Senyum cerah Anda memancarkan kebahagiaan dan energi positif' },
      { ko: '행복한 미소가 얼굴 전체에 밝은 에너지를 전달합니다', en: 'Your happy smile conveys bright energy throughout your entire face', ja: '幸せな笑顔が顔全体に明るいエネルギーを伝えます', 'zh-CN': '你幸福的微笑在你整个脸上传达出明亮的能量', 'zh-TW': '你幸福的微笑在你整個臉上傳達出明亮的能量', vi: 'Nụ cười hạnh phúc của bạn truyền đạt năng lượng tươi sáng trên toàn bộ khuôn mặt', id: 'Senyum bahagia Anda menyampaikan energi cerah di seluruh wajah Anda' },
      { ko: '낙천적이고 활발한 기운이 넘치는 밝은 표정입니다', en: 'Your bright expression overflows with optimistic and vibrant energy', ja: '楽観的で活発な気が溢れる明るい表情です', 'zh-CN': '你明亮的表情充满乐观和充满活力的能量', 'zh-TW': '你明亮的表情充滿樂觀和充滿活力的能量', vi: 'Biểu cảm tươi sáng của bạn tràn ngập năng lượng lạc quan và sống động', id: 'Ekspresi cerah Anda meluap dengan energi optimis dan hidup' },
      { ko: '상대방에게 긍정적 에너지를 주는 매력적인 미소', en: 'Your charming smile gives positive energy to others', ja: '相手に前向きなエネルギーを与える魅力的な笑顔', 'zh-CN': '你迷人的微笑给他人带来积极的能量', 'zh-TW': '你迷人的微笑給他人帶來積極的能量', vi: 'Nụ cười quyến rũ của bạn mang lại năng lượng tích cực cho người khác', id: 'Senyum menawan Anda memberi energi positif pada orang lain' },
      { ko: '자신감 넘치는 밝은 에너지가 표정 전체에 전해집니다', en: 'Bright energy full of confidence is conveyed throughout your entire expression', ja: '自信に満ちた明るいエネルギーが表情全体に伝わります', 'zh-CN': '充满自信的明亮能量传达在你整个表情中', 'zh-TW': '充滿自信的明亮能量傳達在你整個表情中', vi: 'Năng lượng tươi sáng đầy tự tin được truyền đạt trên toàn bộ biểu cảm của bạn', id: 'Energi cerah penuh percaya diri disampaikan di seluruh ekspresi Anda' },
      { ko: '따뜻하고 친근한 미소로 긍정적인 분위기를 연출합니다', en: 'Your warm and friendly smile creates a positive atmosphere', ja: '温かく親しみやすい笑顔で前向きな雰囲気を演出します', 'zh-CN': '你温暖友好的微笑营造出积极的氛围', 'zh-TW': '你溫暖友好的微笑營造出積極的氛圍', vi: 'Nụ cười ấm áp và thân thiện của bạn tạo bầu không khí tích cực', id: 'Senyum hangat dan ramah Anda menciptakan suasana positif' },
      { ko: '밝고 생기 넘치는 행복한 기운이 표정에 가득합니다', en: 'Your expression is full of bright and vibrant happy energy', ja: '明るく生気に満ちた幸せな気が表情に満ちています', 'zh-CN': '你的表情充满明亮和充满生机的幸福能量', 'zh-TW': '你的表情充滿明亮和充滿生機的幸福能量', vi: 'Biểu cảm của bạn tràn ngập năng lượng hạnh phúc tươi sáng và sống động', id: 'Ekspresi Anda penuh dengan energi bahagia yang cerah dan hidup' },
      { ko: '긍정적이고 활기찬 에너지가 넘치는 밝은 인상', en: 'Your bright impression overflows with positive and energetic energy', ja: '前向きで活気のあるエネルギーに満ちた明るい印象', 'zh-CN': '你明亮的印象充满积极和充满活力的能量', 'zh-TW': '你明亮的印象充滿積極和充滿活力的能量', vi: 'Ấn tượng tươi sáng của bạn tràn ngập năng lượng tích cực và năng động', id: 'Kesan cerah Anda meluap dengan energi positif dan energik' },
      { ko: '행복한 미소가 감돌며 따뜻함을 전달하는 매력적인 표정', en: 'Your charming expression with a happy smile conveys warmth', ja: '幸せな笑顔が漂い温かさを伝える魅力的な表情', 'zh-CN': '你带着幸福微笑的迷人表情传达出温暖', 'zh-TW': '你帶著幸福微笑的迷人表情傳達出溫暖', vi: 'Biểu cảm quyến rũ của bạn với nụ cười hạnh phúc truyền đạt sự ấm áp', id: 'Ekspresi menawan Anda dengan senyum bahagia menyampaikan kehangatan' },
      { ko: '밝고 긍정적인 에너지가 얼굴 전체를 감돌며 전해집니다', en: 'Bright and positive energy permeates and is conveyed throughout your entire face', ja: '明るく前向きなエネルギーが顔全体に漂い伝わります', 'zh-CN': '明亮积极的能量弥漫在你整个脸上并传达出来', 'zh-TW': '明亮積極的能量瀰漫在你整個臉上並傳達出來', vi: 'Năng lượng tươi sáng và tích cực thấm đẫm và được truyền đạt trên toàn bộ khuôn mặt của bạn', id: 'Energi cerah dan positif meresap dan disampaikan di seluruh wajah Anda' }
    ];
    const happyIndex = Math.floor((emotions.happy * 1000 + mouthWidth * 300 + mouthAngle * 200) % happyComments.length);
    const selectedHappy = happyComments[happyIndex];
    emotionComments.ko.push(selectedHappy.ko);
    emotionComments.en.push(selectedHappy.en);
    emotionComments.ja.push(selectedHappy.ja);
    emotionComments['zh-CN'].push(selectedHappy['zh-CN']);
    emotionComments['zh-TW'].push(selectedHappy['zh-TW']);
    emotionComments.vi.push(selectedHappy.vi);
    emotionComments.id.push(selectedHappy.id);
  }
  
  // Neutral 감정 코멘트 (10가지)
  if (emotions.neutral > 0.15) {
    const neutralComments = [
      { ko: '평온하고 차분한 표정으로 신뢰감과 안정감을 줍니다', en: 'Your calm expression conveys trust and stability', ja: '平穏で落ち着いた表情は信頼感と安定感を与えます', 'zh-CN': '平静的表情传达出信任和稳定', 'zh-TW': '平靜的表情傳達出信任和穩定', vi: 'Biểu cảm bình tĩnh của bạn truyền cảm giác tin cậy và ổn định', id: 'Ekspresi tenang Anda menyampaikan kepercayaan dan stabilitas' },
      { ko: '신뢰감을 주는 차분하고 균형잡힌 표정입니다', en: 'Your calm and balanced expression inspires trust', ja: '信頼感を与える落ち着いたバランスの取れた表情です', 'zh-CN': '你平静平衡的表情给人信任感', 'zh-TW': '你平靜平衡的表情給人信任感', vi: 'Biểu cảm bình tĩnh và cân đối của bạn tạo cảm giác tin cậy', id: 'Ekspresi tenang dan seimbang Anda menginspirasi kepercayaan' },
      { ko: '안정적이고 신중한 판단력이 느껴지는 평온한 표정', en: 'Your peaceful expression shows stable and prudent judgment', ja: '安定していて慎重な判断力が感じられる平穏な表情', 'zh-CN': '你平静的表情展现出稳定谨慎的判断力', 'zh-TW': '你平靜的表情展現出穩定謹慎的判斷力', vi: 'Biểu cảm bình yên của bạn thể hiện khả năng phán đoán ổn định và thận trọng', id: 'Ekspresi damai Anda menunjukkan penilaian stabil dan bijaksana' },
      { ko: '여유 있고 품격 있는 고요한 인상', en: 'Your peaceful impression shows composure and elegance', ja: '余裕があり品格のある静かな印象', 'zh-CN': '你平静的印象展现出从容和优雅', 'zh-TW': '你平靜的印象展現出從容和優雅', vi: 'Ấn tượng bình yên của bạn thể hiện sự điềm đạm và thanh lịch', id: 'Kesan damai Anda menunjukkan ketenangan dan keanggunan' },
      { ko: '균형잡힌 감정 표현으로 안정적인 매력을 보여줍니다', en: 'Your expression shows stable charm with balanced emotional expression', ja: 'バランスの取れた感情表現で安定した魅力を示しています', 'zh-CN': '你的表情展现出平衡情感表达的稳定魅力', 'zh-TW': '你的表情展現出平衡情感表達的穩定魅力', vi: 'Biểu cảm của bạn thể hiện sức hút ổn định với biểu cảm cảm xúc cân đối', id: 'Ekspresi Anda menunjukkan pesona stabil dengan ekspresi emosional seimbang' },
      { ko: '차분하고 안정적인 표정으로 신뢰감을 주는 인상', en: 'Your calm and stable expression gives an impression of trustworthiness', ja: '落ち着いて安定した表情で信頼感を与える印象', 'zh-CN': '你平静稳定的表情给人值得信赖的印象', 'zh-TW': '你平靜穩定的表情給人值得信賴的印象', vi: 'Biểu cảm bình tĩnh và ổn định của bạn tạo ấn tượng đáng tin cậy', id: 'Ekspresi tenang dan stabil Anda memberi kesan dapat dipercaya' },
      { ko: '평온하고 고요한 표정으로 편안함을 전달합니다', en: 'Your peaceful and serene expression conveys comfort', ja: '平穏で静かな表情で快適さを伝えます', 'zh-CN': '你平静安详的表情传达出舒适感', 'zh-TW': '你平靜安詳的表情傳達出舒適感', vi: 'Biểu cảm bình yên và thanh thản của bạn truyền đạt sự thoải mái', id: 'Ekspresi damai dan tenang Anda menyampaikan kenyamanan' },
      { ko: '안정감 있고 신뢰할 수 있는 차분한 인상', en: 'Your calm impression feels stable and trustworthy', ja: '安定感があり信頼できる落ち着いた印象', 'zh-CN': '你平静的印象感觉稳定可靠', 'zh-TW': '你平靜的印象感覺穩定可靠', vi: 'Ấn tượng bình tĩnh của bạn tạo cảm giác ổn định và đáng tin cậy', id: 'Kesan tenang Anda terasa stabil dan terpercaya' },
      { ko: '균형잡히고 조화로운 감정 표현이 표정에 반영되어 있습니다', en: 'Balanced and harmonious emotional expression is reflected in your expression', ja: 'バランスが取れ調和の取れた感情表現が表情に反映されています', 'zh-CN': '你平衡和谐的情感表达反映在你的表情中', 'zh-TW': '你平衡和諧的情感表達反映在你的表情中', vi: 'Biểu cảm cảm xúc cân đối và hài hòa được phản ánh trong biểu cảm của bạn', id: 'Ekspresi emosional yang seimbang dan harmonis tercermin dalam ekspresi Anda' },
      { ko: '평온하고 안정적인 표정으로 편안한 분위기를 연출합니다', en: 'Your peaceful and stable expression creates a comfortable atmosphere', ja: '平穏で安定した表情で快適な雰囲気を演出します', 'zh-CN': '你平静稳定的表情营造出舒适的氛围', 'zh-TW': '你平靜穩定的表情營造出舒適的氛圍', vi: 'Biểu cảm bình yên và ổn định của bạn tạo bầu không khí thoải mái', id: 'Ekspresi damai dan stabil Anda menciptakan suasana nyaman' }
    ];
    const neutralIndex = Math.floor((emotions.neutral * 1000 + eyeSymmetry * 400 + faceRatio * 200) % neutralComments.length);
    const selectedNeutral = neutralComments[neutralIndex];
    emotionComments.ko.push(selectedNeutral.ko);
    emotionComments.en.push(selectedNeutral.en);
    emotionComments.ja.push(selectedNeutral.ja);
    emotionComments['zh-CN'].push(selectedNeutral['zh-CN']);
    emotionComments['zh-TW'].push(selectedNeutral['zh-TW']);
    emotionComments.vi.push(selectedNeutral.vi);
    emotionComments.id.push(selectedNeutral.id);
  }
  
  // Sad 감정 코멘트 (10가지)
  if (emotions.sad > 0.15) {
    const sadComments = [
      { ko: '감성적이고 깊이 있는 감정 표현으로 인간적인 매력을 보여줍니다', en: 'Your emotional expression shows deep human charm', ja: '感情的で深みのある感情表現は人間的な魅力を示しています', 'zh-CN': '感性的表情显示出深刻的人性魅力', 'zh-TW': '感性的表情顯示出深刻的人性魅力', vi: 'Biểu cảm cảm xúc của bạn thể hiện sức hút con người sâu sắc', id: 'Ekspresi emosional Anda menunjukkan pesona manusia yang mendalam' },
      { ko: '인간적인 따뜻함과 공감 능력이 표정에서 느껴집니다', en: 'Human warmth and empathy can be felt in your expression', ja: '人間的な温かさと共感能力が表情から感じられます', 'zh-CN': '你的表情中可以感受到人性的温暖和共情能力', 'zh-TW': '你的表情中可以感受到人性的溫暖和共情能力', vi: 'Sự ấm áp con người và khả năng đồng cảm có thể cảm nhận được trong biểu cảm của bạn', id: 'Kehangatan manusia dan empati dapat dirasakan dalam ekspresi Anda' },
      { ko: '깊이 있는 사고와 내적 성찰이 보이는 감성적인 표정', en: 'Your emotional expression shows deep thinking and inner reflection', ja: '深い思考と内的反省が見える感情的な表情', 'zh-CN': '你感性的表情展现出深度思考和内省', 'zh-TW': '你感性的表情展現出深度思考和內省', vi: 'Biểu cảm cảm xúc của bạn thể hiện suy nghĩ sâu sắc và phản ánh nội tâm', id: 'Ekspresi emosional Anda menunjukkan pemikiran mendalam dan refleksi batin' },
      { ko: '예술적 감수성이 풍부한 섬세하고 깊이 있는 인상', en: 'Your delicate and profound impression is rich in artistic sensitivity', ja: '芸術的感性が豊かな繊細で深みのある印象', 'zh-CN': '你细腻深刻的印象富有艺术敏感性', 'zh-TW': '你細膩深刻的印象富有藝術敏感性', vi: 'Ấn tượng tinh tế và sâu sắc của bạn giàu cảm tính nghệ thuật', id: 'Kesan halus dan mendalam Anda kaya akan sensitivitas artistik' },
      { ko: '인간애와 연민이 느껴지는 따뜻한 감정 표현', en: 'Your warm emotional expression shows humanity and compassion', ja: '人間愛と憐憫が感じられる温かい感情表現', 'zh-CN': '你温暖的情感表达展现出人性和同情心', 'zh-TW': '你溫暖的情感表達展現出人性和同情心', vi: 'Biểu cảm cảm xúc ấm áp của bạn thể hiện tình yêu thương con người và lòng trắc ẩn', id: 'Ekspresi emosional hangat Anda menunjukkan kemanusiaan dan belas kasihan' },
      { ko: '깊이 있는 감정 표현으로 인간적 매력이 돋보입니다', en: 'Your deep emotional expression makes human charm stand out', ja: '深みのある感情表現で人間的な魅力が目立ちます', 'zh-CN': '你深刻的情感表达使人性魅力突出', 'zh-TW': '你深刻的情感表達使人性魅力突出', vi: 'Biểu cảm cảm xúc sâu sắc của bạn làm nổi bật sức hút con người', id: 'Ekspresi emosional mendalam Anda membuat pesona manusia menonjol' },
      { ko: '감성적이고 공감 능력이 뛰어난 깊이 있는 표정', en: 'Your deep expression shows emotional and excellent empathy', ja: '感情的で共感能力が優れた深みのある表情', 'zh-CN': '你深刻的表情展现出感性和出色的共情能力', 'zh-TW': '你深刻的表情展現出感性和出色的共情能力', vi: 'Biểu cảm sâu sắc của bạn thể hiện cảm xúc và khả năng đồng cảm xuất sắc', id: 'Ekspresi mendalam Anda menunjukkan emosional dan empati yang sangat baik' },
      { ko: '내적 깊이와 성찰적 사고가 표정에 반영되어 있습니다', en: 'Inner depth and reflective thinking are reflected in your expression', ja: '内的深さと反省的思考が表情に反映されています', 'zh-CN': '你内在的深度和反思性思维反映在你的表情中', 'zh-TW': '你內在的深度和反思性思維反映在你的表情中', vi: 'Chiều sâu nội tâm và tư duy phản ánh được thể hiện trong biểu cảm của bạn', id: 'Kedalaman batin dan pemikiran reflektif tercermin dalam ekspresi Anda' },
      { ko: '인간적인 따뜻함과 깊이 있는 감정이 얼굴 전체에 감돕니다', en: 'Human warmth and deep emotions permeate throughout your entire face', ja: '人間的な温かさと深みのある感情が顔全体に漂います', 'zh-CN': '人性的温暖和深刻的情感弥漫在你整个脸上', 'zh-TW': '人性的溫暖和深刻的情感瀰漫在你整個臉上', vi: 'Sự ấm áp con người và cảm xúc sâu sắc thấm đẫm trên toàn bộ khuôn mặt của bạn', id: 'Kehangatan manusia dan emosi mendalam meresap di seluruh wajah Anda' },
      { ko: '예술적이고 감성적인 매력이 표정 전체에 드러납니다', en: 'Artistic and emotional charm is revealed throughout your entire expression', ja: '芸術的で感情的な魅力が表情全体に現れます', 'zh-CN': '艺术和情感的魅力在你整个表情中显露出来', 'zh-TW': '藝術和情感的魅力在你整個表情中顯露出來', vi: 'Sức hút nghệ thuật và cảm xúc được thể hiện trên toàn bộ biểu cảm của bạn', id: 'Pesona artistik dan emosional terungkap di seluruh ekspresi Anda' }
    ];
    const sadIndex = Math.floor((emotions.sad * 1000 + eyeSymmetry * 250 + faceDepth * 300) % sadComments.length);
    const selectedSad = sadComments[sadIndex];
    emotionComments.ko.push(selectedSad.ko);
    emotionComments.en.push(selectedSad.en);
    emotionComments.ja.push(selectedSad.ja);
    emotionComments['zh-CN'].push(selectedSad['zh-CN']);
    emotionComments['zh-TW'].push(selectedSad['zh-TW']);
    emotionComments.vi.push(selectedSad.vi);
    emotionComments.id.push(selectedSad.id);
  }

  // 감정 코멘트를 문장으로 조합
  const getEmotionSummary = (lang: keyof typeof emotionComments): string => {
    if (emotionComments[lang].length === 0) {
      return lang === 'ko' ? '다양한 감정이 조화롭게 어우러진 표정입니다' :
             lang === 'en' ? 'Your expression harmoniously blends various emotions' :
             lang === 'ja' ? '様々な感情が調和して調和した表情です' :
             lang === 'zh-CN' ? '各种情感和谐融合的表情' :
             lang === 'zh-TW' ? '各種情感和諧融合的表情' :
             lang === 'vi' ? 'Biểu cảm hòa quyện nhiều cảm xúc một cách hài hòa' :
             'Ekspresi yang menyelaraskan berbagai emosi secara harmonis';
    }
    return emotionComments[lang].join(', ');
  };

  // 요약 텍스트 생성 (8가지 감정 코멘트 포함)
  const summary = {
    ko: `당신의 얼굴에는 ${attractiveFeatures.ko.length > 0 ? attractiveFeatures.ko[0] : '독특한 매력'}이 있습니다. ${getEmotionSummary('ko')}. ${improvementSuggestions.ko.length > 0 ? improvementSuggestions.ko[0] : '자신감을 가지면 더욱 빛날 거예요'}.`,
    en: `Your face has ${attractiveFeatures.en.length > 0 ? attractiveFeatures.en[0] : 'unique charm'}. ${getEmotionSummary('en')}. ${improvementSuggestions.en.length > 0 ? improvementSuggestions.en[0] : 'With confidence, you\'ll shine even more'}.`,
    ja: `あなたの顔には${attractiveFeatures.ja.length > 0 ? attractiveFeatures.ja[0] : '独特な魅力'}があります。${getEmotionSummary('ja')}。${improvementSuggestions.ja.length > 0 ? improvementSuggestions.ja[0] : '自信を持てばさらに輝くでしょう'}。`,
    'zh-CN': `你的面容有${attractiveFeatures['zh-CN'].length > 0 ? attractiveFeatures['zh-CN'][0] : '独特的魅力'}。${getEmotionSummary('zh-CN')}。${improvementSuggestions['zh-CN'].length > 0 ? improvementSuggestions['zh-CN'][0] : '拥有自信会更加闪耀'}。`,
    'zh-TW': `你的面容有${attractiveFeatures['zh-TW'].length > 0 ? attractiveFeatures['zh-TW'][0] : '獨特的魅力'}。${getEmotionSummary('zh-TW')}。${improvementSuggestions['zh-TW'].length > 0 ? improvementSuggestions['zh-TW'][0] : '擁有自信會更加閃耀'}。`,
    vi: `Khuôn mặt bạn có ${attractiveFeatures.vi.length > 0 ? attractiveFeatures.vi[0] : 'sức hút độc đáo'}. ${getEmotionSummary('vi')}. ${improvementSuggestions.vi.length > 0 ? improvementSuggestions.vi[0] : 'Với sự tự tin, bạn sẽ tỏa sáng hơn nữa'}.`,
    id: `Wajah Anda memiliki ${attractiveFeatures.id.length > 0 ? attractiveFeatures.id[0] : 'pesona unik'}. ${getEmotionSummary('id')}. ${improvementSuggestions.id.length > 0 ? improvementSuggestions.id[0] : 'Dengan kepercayaan diri, Anda akan lebih bersinar'}.`
  };
  
  // 이성/동성 점수 계산
  // 이성 점수: MediaPipe 점수(finalScore) + 0~10 사이의 랜덤 값 (최대 100점)
  // 동성 점수: MediaPipe 점수(finalScore) 그대로
  
  // 이성 점수 계산 (0~10 사이 랜덤 값 추가, 100점 초과 불가)
  const randomBonus = Math.floor(Math.random() * 11); // 0~10 사이의 랜덤 정수
  const oppositeGenderScore = Math.min(100, finalScore + randomBonus);
  
  // 동성 점수 계산 (MediaPipe 점수 그대로)
  const sameGenderScore = finalScore;
  
  // 이성/동성 점수 설명
  const oppositeGenderScoreReason = {
    ko: '대칭성, 미소, 눈 크기 등이 이성에게 더 매력적으로 평가됩니다.',
    en: 'Symmetry, smile, and eye size are evaluated as more attractive to the opposite gender.',
    ja: '対称性、笑顔、目の大きさなどが異性により魅力的に評価されます。',
    'zh-CN': '对称性、微笑和眼睛大小对异性更具吸引力。',
    'zh-TW': '對稱性、微笑和眼睛大小對異性更具吸引力。',
    vi: 'Tính đối xứng, nụ cười và kích thước mắt được đánh giá hấp dẫn hơn với người khác giới.',
    id: 'Simetri, senyum, dan ukuran mata dinilai lebih menarik untuk lawan jenis.'
  };
  
  const sameGenderScoreReason = {
    ko: '입체감, 얼굴 균형, 개성적 요소 등이 동성에게 더 인상적으로 평가됩니다.',
    en: 'Three-dimensional features, facial balance, and distinctive elements are evaluated as more impressive to the same gender.',
    ja: '立体感、顔のバランス、個性的な要素などが同性により印象的に評価されます。',
    'zh-CN': '立体感、面部平衡和个性元素对同性更具印象。',
    'zh-TW': '立體感、面部平衡和個性元素對同性更具印象。',
    vi: 'Tính ba chiều, cân bằng khuôn mặt và yếu tố đặc biệt được đánh giá ấn tượng hơn với người cùng giới.',
    id: 'Fitur tiga dimensi, keseimbangan wajah, dan elemen khas dinilai lebih mengesankan untuk jenis kelamin yang sama.'
  };
  
  return {
    firstImpressionScore: finalScore,
    oppositeGenderScore,
    sameGenderScore,
    oppositeGenderScoreReason,
    sameGenderScoreReason,
    appearance: {
      facialFeatures
    },
    attractiveFeatures,
    improvementSuggestions,
    summary
  };
}

