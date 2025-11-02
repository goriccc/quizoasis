export interface HonestFaceEvaluationProps {
  locale: string;
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  playCount?: number;
  similarTests?: any[];
}

export interface HonestFaceEvaluationResult {
  score: number; // 첫인상 점수 (0-100)
  charms: string[]; // 매력 포인트 (최대 3개)
  improvements: string[]; // 개선점 (최대 3개)
  overall: string; // 종합 평가
}

// AI 분석 로직
export function calculateHonestFaceEvaluation(
  landmarks: any,
  scores: any,
  locale: string
): HonestFaceEvaluationResult {
  // 감정 점수 계산
  const emotions = scores || {};
  const emotionScore = 
    (emotions.happy || 0) * 20 +
    (emotions.neutral || 0) * 15 +
    (emotions.surprised || 0) * 10 -
    (emotions.angry || 0) * 20 -
    (emotions.sad || 0) * 15;

  // 기본 점수 50에 감정 점수 추가
  let baseScore = Math.max(30, Math.min(90, 50 + emotionScore));
  
  // 랜덤 요소 추가 (±10)
  baseScore += (Math.random() * 20 - 10);
  baseScore = Math.max(40, Math.min(100, Math.round(baseScore)));

  // 감정 기반 매력 포인트
  const charms: string[] = [];
  if (emotions.happy > 0.3) {
    charms.push(locale === 'ko' ? '밝고 긍정적인 에너지' : 
                locale === 'en' ? 'Bright and positive energy' : 
                locale === 'ja' ? '明るく前向きなエネルギー' : 
                locale === 'zh-CN' ? '明亮积极的能量' : 
                locale === 'zh-TW' ? '明亮積極的能量' : 
                locale === 'vi' ? 'Năng lượng tích cực sáng sủa' : 
                'Energi positif yang cerah');
  }
  if (emotions.surprised > 0.2) {
    charms.push(locale === 'ko' ? '호기심 많고 적극적인 표정' : 
                locale === 'en' ? 'Curious and positive expression' : 
                locale === 'ja' ? '好奇心旺盛で積極的な表情' : 
                locale === 'zh-CN' ? '充满好奇和积极的表情' : 
                locale === 'zh-TW' ? '充滿好奇和積極的表情' : 
                locale === 'vi' ? 'Biểu cảm tích cực tò mò' : 
                'Ekspresi positif yang penasaran');
  }
  if (baseScore > 70) {
    charms.push(locale === 'ko' ? '전반적으로 균형잡힌 인상' : 
                locale === 'en' ? 'Well-balanced overall impression' : 
                locale === 'ja' ? '全体的にバランスの取れた印象' : 
                locale === 'zh-CN' ? '整体平衡的印象' : 
                locale === 'zh-TW' ? '整體平衡的印象' : 
                locale === 'vi' ? 'Ấn tượng cân bằng tổng thể' : 
                'Kesan seimbang secara keseluruhan');
  }
  
  // 최소 1개, 최대 3개
  if (charms.length === 0) {
    charms.push(locale === 'ko' ? '독특한 개성' : 
                locale === 'en' ? 'Unique personality' : 
                locale === 'ja' ? 'ユニークな個性' : 
                locale === 'zh-CN' ? '独特的个性' : 
                locale === 'zh-TW' ? '獨特的個性' : 
                locale === 'vi' ? 'Cá tính độc đáo' : 
                'Kepribadian unik');
  }

  // 감정 기반 개선점
  const improvements: string[] = [];
  if (emotions.angry > 0.3 || emotions.sad > 0.3) {
    improvements.push(locale === 'ko' ? '긴장을 풀고 편안한 표정 유지' : 
                      locale === 'en' ? 'Relax tension and maintain calm expression' : 
                      locale === 'ja' ? '緊張をほぐして穏やかな表情を保つ' : 
                      locale === 'zh-CN' ? '放松紧张，保持平静表情' : 
                      locale === 'zh-TW' ? '放鬆緊張，保持平靜表情' : 
                      locale === 'vi' ? 'Thả lỏng căng thẳng và giữ biểu cảm bình tĩnh' : 
                      'Relaksasi ketegangan dan pertahankan ekspresi tenang');
  }
  if (emotions.neutral > 0.7) {
    improvements.push(locale === 'ko' ? '표정에 생동감 더하기' : 
                      locale === 'en' ? 'Add liveliness to expression' : 
                      locale === 'ja' ? '表情に活気を与える' : 
                      locale === 'zh-CN' ? '给表情增添活力' : 
                      locale === 'zh-TW' ? '給表情增添活力' : 
                      locale === 'vi' ? 'Thêm sức sống cho biểu cảm' : 
                      'Tambahkan semangat pada ekspresi');
  }
  if (baseScore < 60) {
    improvements.push(locale === 'ko' ? '자신감 있는 미소 연습' : 
                      locale === 'en' ? 'Practice confident smile' : 
                      locale === 'ja' ? '自信のある笑顔を練習する' : 
                      locale === 'zh-CN' ? '练习自信的微笑' : 
                      locale === 'zh-TW' ? '練習自信的微笑' : 
                      locale === 'vi' ? 'Thực hành nụ cười tự tin' : 
                      'Latih senyuman percaya diri');
  }

  // 전체 평가
  let overall = '';
  if (baseScore >= 80) {
    overall = locale === 'ko' ? '첫인상이 매우 좋은 편입니다! 매력적인 포인트가 많은 당신은 주변 사람들에게 긍정적인 인상을 주는 스타일이네요.' : 
             locale === 'en' ? 'Great first impression! You have many charming points and give positive impressions to others.' : 
             locale === 'ja' ? '第一印象が非常に良いです！魅力的なポイントが多く、周りの人にポジティブな印象を与えるスタイルですね。' : 
             locale === 'zh-CN' ? '第一印象非常好！你有很多魅力点，能给周围的人留下积极印象。' : 
             locale === 'zh-TW' ? '第一印象非常好！你有很多魅力點，能給周圍的人留下積極印象。' : 
             locale === 'vi' ? 'Ấn tượng đầu tiên rất tốt! Bạn có nhiều điểm hấp dẫn và tạo ấn tượng tích cực với mọi người xung quanh.' : 
             'Kesan pertama sangat baik! Anda memiliki banyak poin menarik dan memberikan kesan positif kepada orang di sekitar.';
  } else if (baseScore >= 65) {
    overall = locale === 'ko' ? '표정이 밝고 긍정적이네요. 더 발전할 여지가 있지만 이미 좋은 기반을 갖추고 있습니다.' : 
             locale === 'en' ? 'Your expression is bright and positive. There\'s room for improvement, but you already have a good foundation.' : 
             locale === 'ja' ? '表情が明るくポジティブですね。さらに発展の余地はありますが、すでに良い基礎を築いています。' : 
             locale === 'zh-CN' ? '表情明亮积极。虽然还有改进空间，但你已经有了良好的基础。' : 
             locale === 'zh-TW' ? '表情明亮積極。雖然還有改進空間，但你已經有了良好的基礎。' : 
             locale === 'vi' ? 'Biểu cảm của bạn tươi sáng và tích cực. Có chỗ để cải thiện nhưng bạn đã có nền tảng tốt.' : 
             'Ekspresi Anda cerah dan positif. Ada ruang untuk perbaikan, tetapi Anda sudah memiliki fondasi yang baik.';
  } else {
    overall = locale === 'ko' ? '표정 관리에 조금 더 신경 쓰면 첫인상이 크게 개선될 것 같아요. 긍정적인 에너지를 더하면 좋겠습니다!' : 
             locale === 'en' ? 'With a bit more attention to expression management, your first impression could improve greatly. Try adding more positive energy!' : 
             locale === 'ja' ? '表情管理にもう少し気を配れば、第一印象が大きく改善されそうです。ポジティブなエネルギーを追加すると良いでしょう！' : 
             locale === 'zh-CN' ? '对表情管理稍加注意，第一印象就能大为改善。尝试增加更多正能量吧！' : 
             locale === 'zh-TW' ? '對表情管理稍加注意，第一印象就能大為改善。嘗試增加更多正能量吧！' : 
             locale === 'vi' ? 'Nếu chú ý hơn đến quản lý biểu cảm, ấn tượng đầu tiên của bạn sẽ cải thiện đáng kể. Hãy thêm năng lượng tích cực!' : 
             'Dengan perhatian lebih pada manajemen ekspresi, kesan pertama Anda bisa meningkat besar. Coba tambahkan lebih banyak energi positif!';
  }

  return {
    score: baseScore,
    charms: charms.slice(0, 3),
    improvements: improvements.slice(0, 3),
    overall
  };
}

