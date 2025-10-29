// 날짜 생성 헬퍼 함수 - 런타임에 현재 날짜를 확인하여 미래 날짜 생성
function getFutureMonth(monthsFromNow: number): string {
  const now = new Date();
  const future = new Date(now.getFullYear(), now.getMonth() + monthsFromNow, 1);
  
  const year = future.getFullYear();
  const month = future.getMonth() + 1;
  const currentYear = now.getFullYear();
  
  if (year > currentYear) {
    return `${year}년 ${month}월`;
  } else if (month > now.getMonth() + 1) {
    return `${month}월`;
  } else {
    // 이미 지난 경우 내년 같은 달
    return `${year + 1}년 ${month}월`;
  }
}

function getFutureMonthShort(monthsFromNow: number): string {
  const now = new Date();
  const future = new Date(now.getFullYear(), now.getMonth() + monthsFromNow, 1);
  
  const year = future.getFullYear();
  const month = future.getMonth() + 1;
  const currentYear = now.getFullYear();
  
  if (year > currentYear) {
    return `내년 ${month}월`;
  } else {
    return `${month}월`;
  }
}

function getFutureSeason(monthsFromNow: number): string {
  const now = new Date();
  const future = new Date(now.getFullYear(), now.getMonth() + monthsFromNow, 1);
  const month = future.getMonth() + 1;
  
  if (month >= 3 && month <= 5) return '봄';
  if (month >= 6 && month <= 8) return '여름';
  if (month >= 9 && month <= 11) return '가을';
  return '겨울';
}

// 영어 날짜 생성
function getFutureMonthShortEn(monthsFromNow: number): string {
  const now = new Date();
  const future = new Date(now.getFullYear(), now.getMonth() + monthsFromNow, 1);
  const monthName = future.toLocaleString('en-US', { month: 'long' });
  const year = future.getFullYear();
  const currentYear = now.getFullYear();
  
  if (year > currentYear) {
    return `next year ${monthName}`;
  } else {
    return `this ${monthName}`;
  }
}

// 일본어 날짜 생성
function getFutureMonthShortJa(monthsFromNow: number): string {
  const now = new Date();
  const future = new Date(now.getFullYear(), now.getMonth() + monthsFromNow, 1);
  const year = future.getFullYear();
  const month = future.getMonth() + 1;
  const currentYear = now.getFullYear();
  
  if (year > currentYear) {
    return `来年${month}月`;
  } else {
    return `${month}月`;
  }
}

// 중국어 간체 날짜 생성
function getFutureMonthShortZhCN(monthsFromNow: number): string {
  const now = new Date();
  const future = new Date(now.getFullYear(), now.getMonth() + monthsFromNow, 1);
  const year = future.getFullYear();
  const month = future.getMonth() + 1;
  const currentYear = now.getFullYear();
  
  if (year > currentYear) {
    return `明年${month}月`;
  } else {
    return `${month}月`;
  }
}

// 중국어 번체 날짜 생성
function getFutureMonthShortZhTW(monthsFromNow: number): string {
  const now = new Date();
  const future = new Date(now.getFullYear(), now.getMonth() + monthsFromNow, 1);
  const year = future.getFullYear();
  const month = future.getMonth() + 1;
  const currentYear = now.getFullYear();
  
  if (year > currentYear) {
    return `明年${month}月`;
  } else {
    return `${month}月`;
  }
}

// 베트남어 날짜 생성
function getFutureMonthShortVi(monthsFromNow: number): string {
  const now = new Date();
  const future = new Date(now.getFullYear(), now.getMonth() + monthsFromNow, 1);
  const year = future.getFullYear();
  const month = future.getMonth() + 1;
  const currentYear = now.getFullYear();
  
  if (year > currentYear) {
    return `năm sau tháng ${month}`;
  } else {
    return `tháng ${month}`;
  }
}

// 인도네시아어 날짜 생성
function getFutureMonthShortId(monthsFromNow: number): string {
  const now = new Date();
  const future = new Date(now.getFullYear(), now.getMonth() + monthsFromNow, 1);
  const year = future.getFullYear();
  const month = future.getMonth() + 1;
  const currentYear = now.getFullYear();
  
  const monthNames = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 
                      'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
  
  if (year > currentYear) {
    return `tahun depan ${monthNames[month - 1]}`;
  } else {
    return `${monthNames[month - 1]}`;
  }
}

// 얼굴로 보는 올해 나의 운세 테스트 데이터
export interface FaceFortuneResult {
  id: number;
  title: Record<string, string>;
  description: Record<string, string[]>; // 10개
  emoji: string;
  scoreRange: [number, number];
  strengths: Record<string, string[]>; // 10개
  recommendations: Record<string, string[]>; // 10개
  advice: Record<string, string[]>; // 10개
  fortune: {
    wealth: Record<string, string[]>; // 재물운 (10개)
    health: Record<string, string[]>; // 건강운 (10개)
    love: Record<string, string[]>; // 연애운 (10개)
    business: Record<string, string[]>; // 사업운 (10개)
    study: Record<string, string[]>; // 학업운 (10개)
    goodTime: Record<string, string[]>; // 좋은 시기 (10개)
    warning: Record<string, string[]>; // 주의해야 할 시기 (10개)
  };
}

export interface FaceFortuneTestClientProps {
  locale: string;
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  playCount?: number;
  similarTests?: any[];
}

export function calculateFaceFortuneResult(score: number): FaceFortuneResult {
  const result = faceFortuneResults.find(r => 
    score >= r.scoreRange[0] && score <= r.scoreRange[1]
  );
  return result || faceFortuneResults[faceFortuneResults.length - 1];
}

// 얼굴로 보는 올해 나의 운세 결과 데이터 (6개 타입)
export const faceFortuneResults: FaceFortuneResult[] = [
  {
    id: 1,
    title: {
      ko: '올해 대길상 - 만사형통하는 운세',
      en: 'Great Fortune This Year - Everything Goes Well',
      ja: '今年大吉相 - 万事順調な運勢',
      'zh-CN': '今年大吉相 - 万事顺利的运势',
      'zh-TW': '今年大吉相 - 萬事順利的運勢',
      vi: 'Đại Cát Tướng Năm Nay - Vận May Mắn Mọi Thứ',
      id: 'Keberuntungan Besar Tahun Ini - Semuanya Berjalan Lancar'
    },
    description: {
      get ko() {
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth() + 1;
        
        let periodText = '';
        if (currentMonth <= 10) {
          periodText = `${currentYear}년 말`;
        } else if (currentMonth === 11) {
          periodText = `${currentYear}년 말 또는 ${currentYear + 1}년 초`;
        } else {
          periodText = `${currentYear + 1}년 초`;
        }
        
        return [
          `${periodText} 당신에게 모든 면에서 큰 행운이 찾아올 것입니다! 재물, 건강, 연애, 사업, 학업 모든 분야에서 좋은 소식이 있을 것입니다.`,
          `${periodText} 당신은 전반적으로 매우 좋은 운세를 맞이하게 됩니다. 모든 일이 순조롭게 진행되며 원하는 목표를 달성할 수 있을 것입니다.`,
          `${periodText} 당신에게 대길한 시기가 찾아옵니다. 여러 분야에서 기회가 생기며 성공할 수 있는 좋은 조건들이 만들어질 것입니다.`,
          `${periodText} 당신은 올해 전반적으로 행운을 만날 것입니다. 재물운, 건강운, 연애운, 사업운, 학업운 모든 면에서 긍정적인 변화를 경험하게 됩니다.`,
          `${periodText} 당신에게 모든 면에서 좋은 일들이 일어날 것입니다. 준비한 것들이 결실을 맺고 원하는 결과를 얻을 수 있을 것입니다.`,
          `올해 당신은 운세가 매우 좋은 시기를 맞이합니다. ${periodText}을 기점으로 모든 일이 나아지기 시작하며 성공의 기운을 느낄 수 있을 것입니다.`,
          `${periodText} 당신에게 전반적으로 좋은 운기가 감돌게 됩니다. 재물, 건강, 인간관계, 사업 등 모든 영역에서 긍정적인 변화가 나타날 것입니다.`,
          `${periodText} 당신은 올해 여러 분야에서 성공을 거둘 수 있는 좋은 운세를 가지고 있습니다. 노력하는 만큼 좋은 결과를 얻을 수 있을 것입니다.`,
          `${periodText} 당신에게 대길한 에너지가 찾아옵니다. 모든 일이 순조롭게 진행되며 원하는 목표를 향해 한 걸음씩 다가갈 수 있을 것입니다.`,
          `${periodText} 당신은 올해 전반적으로 행복하고 성공적인 한 해를 보내게 될 것입니다. 준비한 모든 것들이 좋은 결과로 이어질 것입니다.`
        ];
      },
      en: [
        'Great fortune will come to you in all aspects this year! You will receive good news in all areas: wealth, health, love, business, and studies.',
        'You will experience very good overall fortune this year. Everything will proceed smoothly, and you will be able to achieve your desired goals.',
        'A time of great fortune will come to you. Opportunities will arise in various areas, and favorable conditions for success will be created.',
        'You will experience overall good fortune this year. You will experience positive changes in all aspects: wealth, health, love, business, and studies.',
        'Good things will happen to you in all aspects. What you have prepared will bear fruit, and you will be able to achieve the desired results.',
        'This year you will experience a period of very good fortune. Starting from this period, everything will begin to improve, and you will be able to feel the energy of success.',
        'Overall good fortune will surround you. Positive changes will appear in all areas: wealth, health, relationships, and business.',
        'You have good fortune this year to succeed in various areas. You will be able to achieve good results commensurate with your efforts.',
        'Great energy will come to you. Everything will proceed smoothly, and you will be able to take steps toward your desired goals.',
        'You will spend an overall happy and successful year. Everything you have prepared will lead to good results.'
      ],
      ja: [
        '今年あなたにすべての面で大きな幸運が訪れるでしょう！財運、健康、恋愛、事業、学業すべての分野で良い知らせがあるでしょう。',
        'あなたは全体的に非常に良い運勢を迎えることになります。すべてのことが順調に進み、望む目標を達成することができるでしょう。',
        'あなたに大吉な時期が訪れます。様々な分野で機会が生まれ、成功できる良い条件が作り出されるでしょう。',
        'あなたは今年全体的に運に恵まれるでしょう。財運、健康運、恋愛運、事業運、学業運すべての面で前向きな変化を経験することになります。',
        'あなたにすべての面で良いことが起こるでしょう。準備したことが実を結び、望む結果を得ることができるでしょう。',
        '今年あなたは運勢が非常に良い時期を迎えます。この時期を起点にすべてのことが良くなり始め、成功の気を感じることができるでしょう。',
        'あなたに全体的に良い運気が漂うことになります。財運、健康、人間関係、事業などすべての領域で前向きな変化が現れるでしょう。',
        'あなたは今年様々な分野で成功を収めることができる良い運勢を持っています。努力するだけ良い結果を得ることができるでしょう。',
        'あなたに大吉なエネルギーが訪れます。すべてのことが順調に進み、望む目標に向かって一歩ずつ近づくことができるでしょう。',
        'あなたは今年全体的に幸福で成功した一年を過ごすことになるでしょう。準備したすべてのことが良い結果につながるでしょう。'
      ],
      'zh-CN': [
        '今年你在各方面都会迎来大运！在财富、健康、恋爱、事业、学业等所有领域都会有好消息。',
        '你今年整体运势非常好。一切都会顺利进行，你将能够实现你期望的目标。',
        '大吉时期将到来。各个领域都会出现机会，创造成功的良好条件。',
        '你今年整体运势很好。你将在财富、健康、恋爱、事业、学业等各方面经历积极的变化。',
        '你在各方面都会发生好事。你准备的一切都会结出果实，你将能够获得期望的结果。',
        '今年你将迎来运势非常好的时期。从这个时期开始，一切都会开始好转，你将能够感受到成功的能量。',
        '整体好运将围绕着你。财富、健康、人际关系、事业等所有领域都会出现积极的变化。',
        '你今年有在各个领域取得成功的好运。你将能够获得与努力相称的好结果。',
        '大吉能量将来到你身边。一切都会顺利进行，你将能够朝着期望的目标一步步前进。',
        '你今年将度过一个整体幸福和成功的一年。你准备的一切都会带来好结果。'
      ],
      'zh-TW': [
        '今年你在各方面都會迎來大運！在財富、健康、戀愛、事業、學業等所有領域都會有好消息。',
        '你今年整體運勢非常好。一切都會順利進行，你將能夠實現你期望的目標。',
        '大吉時期將到來。各個領域都會出現機會，創造成功的良好條件。',
        '你今年整體運勢很好。你將在財富、健康、戀愛、事業、學業等各方面經歷積極的變化。',
        '你在各方面都會發生好事。你準備的一切都會結出果實，你將能夠獲得期望的結果。',
        '今年你將迎來運勢非常好的時期。從這個時期開始，一切都會開始好轉，你將能夠感受到成功的能量。',
        '整體好運將圍繞著你。財富、健康、人際關係、事業等所有領域都會出現積極的變化。',
        '你今年有在各個領域取得成功的好運。你將能夠獲得與努力相稱的好結果。',
        '大吉能量將來到你身邊。一切都會順利進行，你將能夠朝著期望的目標一步步前進。',
        '你今年將度過一個整體幸福和成功的一年。你準備的一切都會帶來好結果。'
      ],
      vi: [
        'Vận may lớn sẽ đến với bạn ở mọi khía cạnh trong năm nay! Bạn sẽ nhận được tin tốt trong tất cả các lĩnh vực: tài chính, sức khỏe, tình yêu, kinh doanh và học tập.',
        'Bạn sẽ trải nghiệm vận may tổng thể rất tốt trong năm nay. Mọi thứ sẽ diễn ra suôn sẻ, và bạn sẽ có thể đạt được các mục tiêu mong muốn.',
        'Thời kỳ đại cát sẽ đến với bạn. Cơ hội sẽ nảy sinh ở nhiều lĩnh vực khác nhau, và điều kiện thuận lợi cho thành công sẽ được tạo ra.',
        'Bạn sẽ trải nghiệm vận may tổng thể tốt trong năm nay. Bạn sẽ trải nghiệm những thay đổi tích cực ở tất cả các khía cạnh: tài chính, sức khỏe, tình yêu, kinh doanh và học tập.',
        'Những điều tốt sẽ xảy ra với bạn ở mọi khía cạnh. Những gì bạn đã chuẩn bị sẽ mang lại kết quả, và bạn sẽ có thể đạt được kết quả mong muốn.',
        'Năm nay bạn sẽ trải nghiệm một thời kỳ vận may rất tốt. Bắt đầu từ thời kỳ này, mọi thứ sẽ bắt đầu cải thiện, và bạn sẽ có thể cảm nhận năng lượng thành công.',
        'Vận may tổng thể sẽ bao quanh bạn. Những thay đổi tích cực sẽ xuất hiện ở tất cả các lĩnh vực: tài chính, sức khỏe, mối quan hệ và kinh doanh.',
        'Bạn có vận may tốt trong năm nay để thành công ở nhiều lĩnh vực. Bạn sẽ có thể đạt được kết quả tốt tương xứng với nỗ lực của mình.',
        'Năng lượng đại cát sẽ đến với bạn. Mọi thứ sẽ diễn ra suôn sẻ, và bạn sẽ có thể thực hiện các bước tiến tới mục tiêu mong muốn.',
        'Bạn sẽ trải qua một năm tổng thể hạnh phúc và thành công. Mọi thứ bạn đã chuẩn bị sẽ dẫn đến kết quả tốt.'
      ],
      id: [
        'Keberuntungan besar akan datang kepada Anda di semua aspek tahun ini! Anda akan menerima berita baik di semua bidang: kekayaan, kesehatan, cinta, bisnis, dan studi.',
        'Anda akan mengalami keberuntungan keseluruhan yang sangat baik tahun ini. Semuanya akan berjalan lancar, dan Anda akan dapat mencapai tujuan yang diinginkan.',
        'Masa kejayaan besar akan datang kepada Anda. Peluang akan muncul di berbagai bidang, dan kondisi yang menguntungkan untuk sukses akan tercipta.',
        'Anda akan mengalami keberuntungan keseluruhan yang baik tahun ini. Anda akan mengalami perubahan positif di semua aspek: kekayaan, kesehatan, cinta, bisnis, dan studi.',
        'Hal-hal baik akan terjadi pada Anda di semua aspek. Apa yang telah Anda siapkan akan membuahkan hasil, dan Anda akan dapat mencapai hasil yang diinginkan.',
        'Tahun ini Anda akan mengalami periode keberuntungan yang sangat baik. Mulai dari periode ini, segalanya akan mulai membaik, dan Anda akan dapat merasakan energi kesuksesan.',
        'Keberuntungan keseluruhan akan mengelilingi Anda. Perubahan positif akan muncul di semua bidang: kekayaan, kesehatan, hubungan, dan bisnis.',
        'Anda memiliki keberuntungan baik tahun ini untuk berhasil di berbagai bidang. Anda akan dapat mencapai hasil yang baik sesuai dengan upaya Anda.',
        'Energi kejayaan besar akan datang kepada Anda. Semuanya akan berjalan lancar,そして Anda akan dapat mengambil langkah-langkah menuju tujuan yang diinginkan.',
        'Anda akan menghabiskan tahun yang bahagia dan sukses secara keseluruhan. Semua yang telah Anda siapkan akan menghasilkan hasil yang baik.'
      ]
    },
    emoji: '✨',
    scoreRange: [90, 100],
    strengths: {
      ko: ['긍정적 에너지', '노력', '끈기', '리더십', '창의성', '판단력', '인내심', '협조성', '적응력', '목표 의식'],
      en: ['Positive Energy', 'Effort', 'Persistence', 'Leadership', 'Creativity', 'Judgment', 'Patience', 'Cooperation', 'Adaptability', 'Goal Awareness'],
      ja: ['ポジティブなエネルギー', '努力', '粘り強さ', 'リーダーシップ', '創造性', '判断力', '忍耐', '協調性', '適応力', '目標意識'],
      'zh-CN': ['积极能量', '努力', '坚持', '领导力', '创造力', '判断力', '耐心', '合作性', '适应性', '目标意识'],
      'zh-TW': ['積極能量', '努力', '堅持', '領導力', '創造力', '判斷力', '耐心', '合作性', '適應性', '目標意識'],
      vi: ['Năng Lượng Tích Cực', 'Nỗ Lực', 'Kiên Trì', 'Khả Năng Lãnh Đạo', 'Sáng Tạo', 'Khả Năng Phán Đoán', 'Kiên Nhẫn', 'Hợp Tác', 'Thích Ứng', 'Ý Thức Mục Tiêu'],
      id: ['Energi Positif', 'Usaha', 'Ketekunan', 'Kepemimpinan', 'Kreativitas', 'Penilaian', 'Kesabaran', 'Kerjasama', 'Adaptabilitas', 'Kesadaran Tujuan']
    },
    recommendations: {
      ko: ['적극적인 도전', '계획 수립', '인간관계 확대', '자기계발', '건강 관리', '목표 설정', '시간 관리', '긍정적 사고', '협력 관계 구축', '성장 마인드셋'],
      en: ['Active Challenge', 'Planning', 'Expanding Relationships', 'Self-Development', 'Health Management', 'Goal Setting', 'Time Management', 'Positive Thinking', 'Building Cooperative Relationships', 'Growth Mindset'],
      ja: ['積極的な挑戦', '計画立案', '人間関係の拡大', '自己啓発', '健康管理', '目標設定', '時間管理', 'ポジティブな思考', '協力関係の構築', '成長マインドセット'],
      'zh-CN': ['积极挑战', '制定计划', '扩大人际关系', '自我发展', '健康管理', '设定目标', '时间管理', '积极思考', '建立合作关系', '成长思维'],
      'zh-TW': ['積極挑戰', '制定計畫', '擴大人際關係', '自我發展', '健康管理', '設定目標', '時間管理', '積極思考', '建立合作關係', '成長思維'],
      vi: ['Thử Thách Tích Cực', 'Lập Kế Hoạch', 'Mở Rộng Mối Quan Hệ', 'Phát Triển Bản Thân', 'Quản Lý Sức Khỏe', 'Thiết Lập Mục Tiêu', 'Quản Lý Thời Gian', 'Suy Nghĩ Tích Cực', 'Xây Dựng Mối Quan Hệ Hợp Tác', 'Tư Duy Phát Triển'],
      id: ['Tantangan Aktif', 'Perencanaan', 'Memperluas Hubungan', 'Pengembangan Diri', 'Manajemen Kesehatan', 'Penetapan Tujuan', 'Manajemen Waktu', 'Berpikir Positif', 'Membangun Hubungan Kerjasama', 'Mindset Pertumbuhan']
    },
    advice: {
      ko: [
        '올해 모든 면에서 좋은 운세를 잡았습니다. 하지만 운만 믿지 말고 적극적인 노력과 준비를 해야 합니다.',
        '여러 분야에서 기회가 생길 것입니다. 하지만 모든 것을 동시에 추구하기보다는 우선순위를 정해 집중하는 것이 좋습니다.',
        '좋은 운세를 활용하기 위해서는 주변 사람들과의 관계를 원만하게 유지하는 것이 중요합니다.',
        '재물, 건강, 연애, 사업, 학업 모든 면에서 좋은 일이 있을 것이므로 각 분야에 균형을 맞추는 것이 좋습니다.',
        '성공의 기운이 강하므로 도전적인 목표를 설정하고 적극적으로 나아가는 것을 권장합니다.',
        '좋은 운세를 유지하기 위해서는 감사하는 마음을 가지고 긍정적으로 생각하는 것이 중요합니다.',
        '모든 일이 순조롭게 진행될 것이지만, 방심하지 말고 꾸준히 노력하는 자세를 유지해야 합니다.',
        '여러 분야에서 성공할 수 있는 기회가 있을 것이므로 준비된 자세로 기회를 잡을 수 있도록 해야 합니다.',
        '좋은 운세를 바탕으로 더 큰 목표를 향해 나아가는 것을 권장합니다. 하지만 무리하지 않도록 주의해야 합니다.',
        '올해는 전반적으로 행운의 해가 될 것입니다. 긍정적인 에너지를 가지고 원하는 목표를 향해 노력하면 좋은 결과를 얻을 수 있을 것입니다.'
      ],
      en: [
        'You have caught good fortune in all aspects this year. However, do not rely solely on luck; active effort and preparation are necessary.',
        'Opportunities will arise in various fields. However, rather than pursuing everything at once, it is good to prioritize and focus.',
        'To take advantage of good fortune, it is important to maintain smooth relationships with people around you.',
        'Good things will happen in all aspects: wealth, health, love, business, and studies, so it is good to balance each area.',
        'Since the energy of success is strong, it is recommended to set challenging goals and move forward actively.',
        'To maintain good fortune, it is important to have a grateful heart and think positively.',
        'Everything will proceed smoothly, but you should not be careless and maintain an attitude of constant effort.',
        'There will be opportunities to succeed in various fields, so you must be prepared to seize opportunities.',
        'It is recommended to move toward bigger goals based on good fortune. However, be careful not to overdo it.',
        'This year will be an overall lucky year. With positive energy, you can move toward your desired goals and achieve good results.'
      ],
      ja: [
        '今年すべての面で良い運勢を掴みました。しかし運だけを信じず、積極的な努力と準備をする必要があります。',
        '様々な分野で機会が生まれるでしょう。しかしすべてを同時に追求するよりも、優先順位を決めて集中することが良いでしょう。',
        '良い運勢を活用するためには、周囲の人々との関係を円滑に保つことが重要です。',
        '財運、健康、恋愛、事業、学業すべての面で良いことがあるので、各分野にバランスを取ることが良いでしょう。',
        '成功の気が強いので、挑戦的な目標を設定し、積極的に進むことをお勧めします。',
        '良い運勢を維持するためには、感謝の気持ちを持ち、ポジティブに考えることが重要です。',
        'すべてのことが順調に進むでしょうが、油断せずに継続的に努力する姿勢を維持する必要があります。',
        '様々な分野で成功できる機会があるでしょうので、準備された姿勢で機会を掴むことができるようにすべきです。',
        '良い運勢を基に、より大きな目標に向かって進むことをお勧めします。しかし無理をしないように注意する必要があります。',
        '今年は全体的に幸運な年になるでしょう。ポジティブなエネルギーを持って、望む目標に向かって努力すれば、良い結果を得ることができるでしょう。'
      ],
      'zh-CN': [
        '今年你在各方面都抓住了好运。但不要只依赖运气，需要积极的努力和准备。',
        '各个领域都会出现机会。但与其同时追求所有事情，不如确定优先级并集中精力。',
        '为了利用好运，保持与周围人的关系融洽很重要。',
        '财富、健康、恋爱、事业、学业等各方面都会有好事，所以平衡各个领域是好的。',
        '由于成功的能量很强，建议设定挑战性的目标并积极前进。',
        '为了维持好运，保持感恩的心态和积极思考很重要。',
        '一切都会顺利进行，但不应大意，应保持持续努力的态度。',
        '会有在各个领域取得成功的机会，所以必须准备好抓住机会。',
        '建议基于好运朝着更大的目标前进。但要注意不要过度。',
        '今年将是整体幸运的一年。以积极的能量朝着期望的目标努力，你可以获得好结果。'
      ],
      'zh-TW': [
        '今年你在各方面都抓住了好運。但不要只依賴運氣，需要積極的努力和準備。',
        '各個領域都會出現機會。但與其同時追求所有事情，不如確定優先級並集中精力。',
        '為了利用好運，保持與周圍人的關係融洽很重要。',
        '財富、健康、戀愛、事業、學業等各方面都會有好事，所以平衡各個領域是好的。',
        '由於成功的能量很強，建議設定挑戰性的目標並積極前進。',
        '為了維持好運，保持感恩的心態和積極思考很重要。',
        '一切都會順利進行，但不應大意，應保持持續努力的態度。',
        '會在各個領域取得成功的機會，所以必須準備好抓住機會。',
        '建議基於好運朝著更大的目標前進。但要注意不要過度。',
        '今年將是整體幸運的一年。以積極的能量朝著期望的目標努力，你可以獲得好結果。'
      ],
      vi: [
        'Bạn đã bắt được vận may trong tất cả các khía cạnh năm nay. Tuy nhiên, đừng chỉ dựa vào may mắn; nỗ lực tích cực và chuẩn bị là cần thiết.',
        'Cơ hội sẽ nảy sinh trong nhiều lĩnh vực. Tuy nhiên, thay vì theo đuổi mọi thứ cùng một lúc, tốt hơn là ưu tiên và tập trung.',
        'Để tận dụng vận may tốt, điều quan trọng là duy trì mối quan hệ tốt với những người xung quanh bạn.',
        'Những điều tốt sẽ xảy ra ở tất cả các khía cạnh: tài chính, sức khỏe, tình yêu, kinh doanh và học tập, vì vậy tốt hơn là cân bằng từng lĩnh vực.',
        'Vì năng lượng thành công mạnh mẽ, nên đặt mục tiêu thách thức và tiến lên tích cực.',
        'Để duy trì vận may tốt, điều quan trọng là có lòng biết ơn và suy nghĩ tích cực.',
        'Mọi thứ sẽ diễn ra suôn sẻ, nhưng bạn không nên cẩu thả và duy trì thái độ nỗ lực không ngừng.',
        'Sẽ có cơ hội để thành công trong nhiều lĩnh vực, vì vậy bạn phải sẵn sàng nắm bắt cơ hội.',
        'Nên tiến tới các mục tiêu lớn hơn dựa trên vận may tốt. Tuy nhiên, hãy cẩn thận không làm quá sức.',
        'Năm nay sẽ là một năm tổng thể may mắn. Với năng lượng tích cực, bạn có thể tiến tới các mục tiêu mong muốn và đạt được kết quả tốt.'
      ],
      id: [
        'Anda telah menangkap keberuntungan baik di semua aspek tahun ini. Namun, jangan hanya mengandalkan keberuntungan; upaya aktif dan persiapan diperlukan.',
        'Peluang akan muncul di berbagai bidang. Namun, daripada mengejar segalanya sekaligus, lebih baik memprioritaskan dan fokus.',
        'Untuk memanfaatkan keberuntungan baik, penting untuk mempertahankan hubungan yang mulus dengan orang-orang di sekitar Anda.',
        'Hal-hal baik akan terjadi di semua aspek: kekayaan, kesehatan, cinta, bisnis, dan studi, jadi baik untuk menyeimbangkan setiap area.',
        'Karena energi kesuksesan kuat, disarankan untuk menetapkan tujuan yang menantang dan bergerak maju secara aktif.',
        'Untuk mempertahankan keberuntungan baik, penting untuk memiliki hati yang bersyukur dan berpikir positif.',
        'Semuanya akan berjalan lancar, tetapi Anda tidak boleh ceroboh dan mempertahankan sikap usaha konstan.',
        'Akan ada peluang untuk berhasil di berbagai bidang, jadi Anda harus siap untuk memanfaatkan peluang.',
        'Disarankan untuk bergerak menuju tujuan yang lebih besar berdasarkan keberuntungan baik. Namun, berhati-hatilah untuk tidak berlebihan.',
        'Tahun ini akan menjadi tahun yang beruntung secara keseluruhan. Dengan energi positif, Anda dapat bergerak menuju tujuan yang diinginkan dan mencapai hasil yang baik.'
      ]
    },
    fortune: {
      wealth: {
        ko: [
          `${getFutureMonthShort(2)}에 재물이 들어올 기회가 생길 것입니다. 이 시기에 투자나 사업 기회를 적극적으로 모색하시기 바랍니다.`,
          `${getFutureMonthShort(4)}에 예상치 못한 금전적 이득이 있을 수 있습니다. 하지만 함부로 사용하기보다는 신중하게 계획하시기 바랍니다.`,
          `재물운이 크게 상승할 것으로 보입니다. 특히 ${getFutureMonthShort(6)}부터는 수입 증대의 기회가 많을 것입니다.`,
          `${getFutureMonthShort(3)}에 좋은 재물의 기회가 찾아올 것입니다. 이 시기를 놓치지 않고 적극적으로 행동하시기 바랍니다.`,
          `올해 재물운은 전반적으로 좋은 편입니다. 하지만 함부로 투자하기보다는 계획적인 재무 관리가 필요합니다.`,
          `${getFutureMonthShort(5)}에 재물 관련 좋은 소식이 있을 것입니다. 이 시기에는 새로운 수입원을 찾는 것이 좋습니다.`,
          `올해 재물운은 안정적이면서도 점진적으로 증가할 것입니다. ${getFutureMonthShort(7)}부터는 더 큰 성장을 기대할 수 있습니다.`,
          `${getFutureMonthShort(1)}부터 재물의 흐름이 좋아지기 시작할 것입니다. 이 시기부터 재무 계획을 세우는 것을 권장합니다.`,
          `${getFutureMonthShort(8)}부터는 재물운이 본격적으로 활성화될 것입니다. 이 시기에는 대규모 투자도 고려해볼 수 있습니다.`,
          `${getFutureMonthShort(9)}에 재물 관련 큰 기회가 있을 수 있습니다. 하지만 서두르지 말고 신중하게 판단하시기 바랍니다.`
        ],
        get en() {
          return [
            `In ${getFutureMonthShortEn(2)}, an opportunity for wealth will come. During this period, it is recommended to actively seek investment or business opportunities.`,
            `In ${getFutureMonthShortEn(4)}, there may be unexpected financial gains. However, it is better to plan carefully rather than spend recklessly.`,
            `Wealth fortune will rise significantly. Especially from ${getFutureMonthShortEn(6)}, there will be many opportunities to increase income.`,
            `In ${getFutureMonthShortEn(3)}, a good opportunity for wealth will arrive. Do not miss this period and act proactively.`,
            `This year's wealth fortune is generally good. However, systematic financial management is needed rather than reckless investment.`,
            `In ${getFutureMonthShortEn(5)}, there will be good news about wealth. During this period, it is good to find new sources of income.`,
            `This year's wealth fortune will be stable and gradually increasing. From ${getFutureMonthShortEn(7)}, greater growth can be expected.`,
            `From ${getFutureMonthShortEn(1)}, the flow of wealth will begin to improve. It is recommended to make financial plans starting from this period.`,
            `From ${getFutureMonthShortEn(8)}, wealth fortune will be fully activated. During this period, large-scale investments can also be considered.`,
            `In ${getFutureMonthShortEn(9)}, there may be a big opportunity related to wealth. However, do not rush and make careful judgments.`
          ];
        },
        get ja() {
          return [
            `${getFutureMonthShortJa(2)}に財運の機会が訪れるでしょう。この時期に投資や事業の機会を積極的に模索することをお勧めします。`,
            `${getFutureMonthShortJa(4)}に予期しない金銭的利益があるかもしれません。しかし、無計画に使用するよりも慎重に計画することをお勧めします。`,
            `財運が大幅に上昇することが予想されます。特に${getFutureMonthShortJa(6)}からは収入増加の機会が多くあるでしょう。`,
            `${getFutureMonthShortJa(3)}に良い財運の機会が訪れるでしょう。この時期を逃さず積極的に行動することをお勧めします。`,
            `今年の財運は全体的に良い方です。しかし、無計画に投資するよりも計画的な財務管理が必要です。`,
            `${getFutureMonthShortJa(5)}に財運に関する良い知らせがあるでしょう。この時期には新しい収入源を探すことが良いでしょう。`,
            `今年の財運は安定しながらも段階的に増加するでしょう。${getFutureMonthShortJa(7)}からはより大きな成長が期待できます。`,
            `${getFutureMonthShortJa(1)}から財運の流れが良くなり始めるでしょう。この時期から財務計画を立てることをお勧めします。`,
            `${getFutureMonthShortJa(8)}からは財運が本格的に活性化するでしょう。この時期には大規模な投資も検討できます。`,
            `${getFutureMonthShortJa(9)}に財運に関する大きな機会があるかもしれません。しかし、急がず慎重に判断することをお勧めします。`
          ];
        },
        get 'zh-CN'() {
          return [
            `${getFutureMonthShortZhCN(2)}会有财富机会到来。在这个时期，建议积极寻找投资或商业机会。`,
            `${getFutureMonthShortZhCN(4)}可能会有意外的财务收益。但与其随意使用，不如谨慎计划。`,
            `财运将大幅上升。特别是从${getFutureMonthShortZhCN(6)}开始，将有很多增加收入的机会。`,
            `${getFutureMonthShortZhCN(3)}会有良好的财富机会到来。不要错过这个时期，要积极行动。`,
            `今年的财运总体良好。但与其随意投资，更需要计划性的财务管理。`,
            `${getFutureMonthShortZhCN(5)}会有关于财富的好消息。在这个时期，寻找新的收入来源是好的。`,
            `今年的财运将稳定且逐步增加。从${getFutureMonthShortZhCN(7)}开始，可以期待更大的增长。`,
            `从${getFutureMonthShortZhCN(1)}开始，财富流将开始改善。建议从这一时期开始制定财务计划。`,
            `从${getFutureMonthShortZhCN(8)}开始，财运将全面激活。在这个时期，也可以考虑大规模投资。`,
            `${getFutureMonthShortZhCN(9)}可能会有与财富相关的重大机会。但不要匆忙，要谨慎判断。`
          ];
        },
        get 'zh-TW'() {
          return [
            `${getFutureMonthShortZhTW(2)}會有財富機會到來。在這個時期，建議積極尋找投資或商業機會。`,
            `${getFutureMonthShortZhTW(4)}可能會有意外的財務收益。但與其隨意使用，不如謹慎計劃。`,
            `財運將大幅上升。特別是從${getFutureMonthShortZhTW(6)}開始，將有很多增加收入的機會。`,
            `${getFutureMonthShortZhTW(3)}會有良好的財富機會到來。不要錯過這個時期，要積極行動。`,
            `今年的財運總體良好。但與其隨意投資，更需要計劃性的財務管理。`,
            `${getFutureMonthShortZhTW(5)}會有關於財富的好消息。在這個時期，尋找新的收入來源是好的。`,
            `今年的財運將穩定且逐步增加。從${getFutureMonthShortZhTW(7)}開始，可以期待更大的增長。`,
            `從${getFutureMonthShortZhTW(1)}開始，財富流將開始改善。建議從這一時期開始制定財務計劃。`,
            `從${getFutureMonthShortZhTW(8)}開始，財運將全面激活。在這個時期，也可以考慮大規模投資。`,
            `${getFutureMonthShortZhTW(9)}可能會有與財富相關的重大機會。但不要匆忙，要謹慎判斷。`
          ];
        },
        get vi() {
          return [
            `Vào ${getFutureMonthShortVi(2)}, cơ hội tài chính sẽ đến. Trong thời kỳ này, nên tích cực tìm kiếm cơ hội đầu tư hoặc kinh doanh.`,
            `Vào ${getFutureMonthShortVi(4)}, có thể có lợi ích tài chính bất ngờ. Tuy nhiên, nên lập kế hoạch cẩn thận thay vì sử dụng bừa bãi.`,
            `Vận tài chính sẽ tăng lên đáng kể. Đặc biệt từ ${getFutureMonthShortVi(6)}, sẽ có nhiều cơ hội tăng thu nhập.`,
            `Vào ${getFutureMonthShortVi(3)}, cơ hội tài chính tốt sẽ đến. Đừng bỏ lỡ thời kỳ này và hãy hành động tích cực.`,
            `Vận tài chính năm nay nói chung là tốt. Tuy nhiên, cần quản lý tài chính có kế hoạch thay vì đầu tư bừa bãi.`,
            `Vào ${getFutureMonthShortVi(5)}, sẽ có tin tốt về tài chính. Trong thời kỳ này, nên tìm nguồn thu nhập mới.`,
            `Vận tài chính năm nay sẽ ổn định và tăng dần. Từ ${getFutureMonthShortVi(7)}, có thể mong đợi tăng trưởng lớn hơn.`,
            `Từ ${getFutureMonthShortVi(1)}, dòng chảy tài chính sẽ bắt đầu cải thiện. Nên lập kế hoạch tài chính từ thời kỳ này.`,
            `Từ ${getFutureMonthShortVi(8)}, vận tài chính sẽ được kích hoạt đầy đủ. Trong thời kỳ này, cũng có thể cân nhắc đầu tư quy mô lớn.`,
            `Vào ${getFutureMonthShortVi(9)}, có thể có cơ hội lớn liên quan đến tài chính. Tuy nhiên, đừng vội vàng và hãy đưa ra quyết định cẩn thận.`
          ];
        },
        get id() {
          return [
            `Pada ${getFutureMonthShortId(2)}, peluang kekayaan akan datang. Selama periode ini, disarankan untuk secara aktif mencari peluang investasi atau bisnis.`,
            `Pada ${getFutureMonthShortId(4)}, mungkin ada keuntungan finansial yang tidak terduga. Namun, lebih baik merencanakan dengan hati-hati daripada menghabiskan secara sembarangan.`,
            `Keberuntungan kekayaan akan meningkat secara signifikan. Terutama dari ${getFutureMonthShortId(6)}, akan ada banyak peluang untuk meningkatkan pendapatan.`,
            `Pada ${getFutureMonthShortId(3)}, peluang kekayaan yang baik akan tiba. Jangan lewatkan periode ini dan bertindaklah secara proaktif.`,
            `Keberuntungan kekayaan tahun ini umumnya baik. Namun, manajemen keuangan sistematis diperlukan daripada investasi yang sembarangan.`,
            `Pada ${getFutureMonthShortId(5)}, akan ada berita baik tentang kekayaan. Selama periode ini, baik untuk menemukan sumber pendapatan baru.`,
            `Keberuntungan kekayaan tahun ini akan stabil dan meningkat secara bertahap. Dari ${getFutureMonthShortId(7)}, pertumbuhan yang lebih besar dapat diharapkan.`,
            `Dari ${getFutureMonthShortId(1)}, aliran kekayaan akan mulai membaik. Disarankan untuk membuat rencana keuangan mulai dari periode ini.`,
            `Dari ${getFutureMonthShortId(8)}, keberuntungan kekayaan akan diaktifkan sepenuhnya. Selama periode ini, investasi skala besar juga dapat dipertimbangkan.`,
            `Pada ${getFutureMonthShortId(9)}, mungkin ada peluang besar terkait kekayaan. Namun, jangan terburu-buru dan buat penilaian yang hati-hati.`
          ];
        }
      },
      health: {
        ko: [
          `올해 건강운은 전반적으로 양호할 것으로 예상됩니다. 특히 ${getFutureMonthShort(2)}부터는 더욱 좋아질 것입니다.`,
          `${getFutureMonthShort(3)}에 건강 관련 좋은 변화가 있을 것입니다. 이 시기부터 운동이나 식단 관리를 시작하는 것이 좋습니다.`,
          `${getFutureMonthShort(5)}부터 건강운이 크게 상승할 것입니다. 이 시기에는 병원 방문이나 건강 검진을 권장합니다.`,
          `${getFutureMonthShort(1)}부터 건강 관리에 더욱 신경 쓰시기 바랍니다. 작은 증상이라도 무시하지 않는 것이 좋습니다.`,
          `올해 건강운은 안정적일 것입니다. 하지만 ${getFutureMonthShort(7)}에는 몸 상태를 주의 깊게 살펴봐야 할 수도 있습니다.`,
          `${getFutureMonthShort(4)}에는 건강 관련 새로운 시작을 할 수 있는 좋은 시기입니다. 새로운 운동이나 건강 관리 루틴을 시작해보세요.`,
          `올해 건강운은 점진적으로 개선될 것입니다. ${getFutureMonthShort(6)}부터는 더 큰 변화를 경험할 수 있을 것입니다.`,
          `${getFutureMonthShort(2)}에 건강 관련 좋은 소식이 있을 것입니다. 이 시기를 놓치지 않고 건강 관리를 시작하시기 바랍니다.`,
          `${getFutureMonthShort(8)}부터는 건강운이 본격적으로 좋아질 것입니다. 이 시기에는 전반적인 체력 향상이 예상됩니다.`,
          `${getFutureMonthShort(9)}에 건강 관련 큰 전환점이 있을 수 있습니다. 긍정적인 변화를 위해 노력하시기 바랍니다.`
        ],
        get en() {
          return [
            `This year's health fortune is expected to be generally good. Especially from ${getFutureMonthShortEn(2)}, it will improve even more.`,
            `In ${getFutureMonthShortEn(3)}, there will be good changes related to health. From this period, it is good to start exercise or diet management.`,
            `From ${getFutureMonthShortEn(5)}, health fortune will rise significantly. During this period, it is recommended to visit hospitals or get health checkups.`,
            `From ${getFutureMonthShortEn(1)}, pay more attention to health management. It is better not to ignore even small symptoms.`,
            `This year's health fortune will be stable. However, in ${getFutureMonthShortEn(7)}, you may need to carefully examine your physical condition.`,
            `In ${getFutureMonthShortEn(4)}, there is a good time to start something new related to health. Try starting new exercises or health management routines.`,
            `This year's health fortune will improve gradually. From ${getFutureMonthShortEn(6)}, you can expect greater changes.`,
            `In ${getFutureMonthShortEn(2)}, there will be good news related to health. Do not miss this period and start health management.`,
            `From ${getFutureMonthShortEn(8)}, health fortune will improve significantly. During this period, overall physical strength improvement is expected.`,
            `In ${getFutureMonthShortEn(9)}, there may be a big turning point related to health. Work hard for positive changes.`
          ];
        },
        get ja() {
          return [
            `今年の健康運は全体的に良好であることが予想されます。特に${getFutureMonthShortJa(2)}からはさらに良くなるでしょう。`,
            `${getFutureMonthShortJa(3)}に健康に関する良い変化があるでしょう。この時期から運動や食事管理を始めることが良いでしょう。`,
            `${getFutureMonthShortJa(5)}から健康運が大きく上昇するでしょう。この時期には病院訪問や健康診断をお勧めします。`,
            `${getFutureMonthShortJa(1)}から健康管理により神経を使うことをお勧めします。小さな症状でも無視しないことが良いでしょう。`,
            `今年の健康運は安定するでしょう。しかし、${getFutureMonthShortJa(7)}には体の状態を注意深く見る必要があるかもしれません。`,
            `${getFutureMonthShortJa(4)}には健康関連の新しい始まりをすることができる良い時期です。新しい運動や健康管理ルーティンを始めてみてください。`,
            `今年の健康運は段階的に改善するでしょう。${getFutureMonthShortJa(6)}からはより大きな変化を経験できるでしょう。`,
            `${getFutureMonthShortJa(2)}に健康に関する良い知らせがあるでしょう。この時期を逃さず健康管理を始めることをお勧めします。`,
            `${getFutureMonthShortJa(8)}からは健康運が本格的に良くなるでしょう。この時期には全体的な体力向上が予想されます。`,
            `${getFutureMonthShortJa(9)}に健康に関する大きな転換点があるかもしれません。前向きな変化のために努力することをお勧めします。`
          ];
        },
        get 'zh-CN'() {
          return [
            `今年的健康运预计总体良好。特别是从${getFutureMonthShortZhCN(2)}开始，将会进一步改善。`,
            `${getFutureMonthShortZhCN(3)}会有与健康相关的好变化。从这个时期开始，开始运动或饮食管理是好的。`,
            `从${getFutureMonthShortZhCN(5)}开始，健康运将大幅上升。在这个时期，建议去医院或进行健康检查。`,
            `从${getFutureMonthShortZhCN(1)}开始，需要更加关注健康管理。即使是很小的症状也不要忽视。`,
            `今年的健康运将稳定。但在${getFutureMonthShortZhCN(7)}，你可能需要仔细检查身体状况。`,
            `${getFutureMonthShortZhCN(4)}是开始与健康相关的新事物的好时机。尝试开始新的运动或健康管理例行程序。`,
            `今年的健康运将逐步改善。从${getFutureMonthShortZhCN(6)}开始，可以期待更大的变化。`,
            `${getFutureMonthShortZhCN(2)}会有与健康相关的好消息。不要错过这个时期，开始健康管理。`,
            `从${getFutureMonthShortZhCN(8)}开始，健康运将显著改善。在这个时期，预计整体体力将提高。`,
            `${getFutureMonthShortZhCN(9)}可能会有与健康相关的重大转折点。努力实现积极的变化。`
          ];
        },
        get 'zh-TW'() {
          return [
            `今年的健康運預計總體良好。特別是從${getFutureMonthShortZhTW(2)}開始，將會進一步改善。`,
            `${getFutureMonthShortZhTW(3)}會有與健康相關的好變化。從這個時期開始，開始運動或飲食管理是好的。`,
            `從${getFutureMonthShortZhTW(5)}開始，健康運將大幅上升。在這個時期，建議去醫院或進行健康檢查。`,
            `從${getFutureMonthShortZhTW(1)}開始，需要更加關注健康管理。即使是很小的症狀也不要忽視。`,
            `今年的健康運將穩定。但在${getFutureMonthShortZhTW(7)}，你可能需要仔細檢查身體狀況。`,
            `${getFutureMonthShortZhTW(4)}是開始與健康相關的新事物的好時機。嘗試開始新的運動或健康管理例行程序。`,
            `今年的健康運將逐步改善。從${getFutureMonthShortZhTW(6)}開始，可以期待更大的變化。`,
            `${getFutureMonthShortZhTW(2)}會有與健康相關的好消息。不要錯過這個時期，開始健康管理。`,
            `從${getFutureMonthShortZhTW(8)}開始，健康運將顯著改善。在這個時期，預計整體體力將提高。`,
            `${getFutureMonthShortZhTW(9)}可能會有與健康相關的重大轉折點。努力實現積極的變化。`
          ];
        },
        get vi() {
          return [
            `Vận sức khỏe năm nay được dự kiến sẽ tốt về tổng thể. Đặc biệt từ ${getFutureMonthShortVi(2)}, sẽ cải thiện hơn nữa.`,
            `Vào ${getFutureMonthShortVi(3)}, sẽ có những thay đổi tốt liên quan đến sức khỏe. Từ thời kỳ này, nên bắt đầu tập thể dục hoặc quản lý chế độ ăn uống.`,
            `Từ ${getFutureMonthShortVi(5)}, vận sức khỏe sẽ tăng lên đáng kể. Trong thời kỳ này, nên đến bệnh viện hoặc kiểm tra sức khỏe.`,
            `Từ ${getFutureMonthShortVi(1)}, nên chú ý hơn đến việc quản lý sức khỏe. Tốt hơn là đừng bỏ qua ngay cả những triệu chứng nhỏ.`,
            `Vận sức khỏe năm nay sẽ ổn định. Tuy nhiên, vào ${getFutureMonthShortVi(7)}, bạn có thể cần kiểm tra tình trạng cơ thể cẩn thận.`,
            `Vào ${getFutureMonthShortVi(4)}, có thời điểm tốt để bắt đầu điều gì đó mới liên quan đến sức khỏe. Hãy thử bắt đầu các bài tập mới hoặc thói quen quản lý sức khỏe.`,
            `Vận sức khỏe năm nay sẽ cải thiện dần dần. Từ ${getFutureMonthShortVi(6)}, bạn có thể mong đợi những thay đổi lớn hơn.`,
            `Vào ${getFutureMonthShortVi(2)}, sẽ có tin tốt liên quan đến sức khỏe. Đừng bỏ lỡ thời kỳ này và hãy bắt đầu quản lý sức khỏe.`,
            `Từ ${getFutureMonthShortVi(8)}, vận sức khỏe sẽ cải thiện đáng kể. Trong thời kỳ này, sự cải thiện thể lực tổng thể được mong đợi.`,
            `Vào ${getFutureMonthShortVi(9)}, có thể có bước ngoặt lớn liên quan đến sức khỏe. Hãy nỗ lực vì những thay đổi tích cực.`
          ];
        },
        get id() {
          return [
            `Keberuntungan kesehatan tahun ini diperkirakan akan baik secara keseluruhan. Terutama dari ${getFutureMonthShortId(2)}, akan meningkat lebih lanjut.`,
            `Pada ${getFutureMonthShortId(3)}, akan ada perubahan baik yang terkait kesehatan. Dari periode ini, baik untuk mulai olahraga atau manajemen diet.`,
            `Dari ${getFutureMonthShortId(5)}, keberuntungan kesehatan akan meningkat secara signifikan. Selama periode ini, disarankan untuk mengunjungi rumah sakit atau melakukan pemeriksaan kesehatan.`,
            `Dari ${getFutureMonthShortId(1)}, perhatikan lebih pada manajemen kesehatan. Lebih baik tidak mengabaikan bahkan gejala kecil.`,
            `Keberuntungan kesehatan tahun ini akan stabil. Namun, pada ${getFutureMonthShortId(7)}, Anda mungkin perlu memeriksa kondisi fisik dengan teliti.`,
            `Pada ${getFutureMonthShortId(4)}, ada waktu yang baik untuk memulai sesuatu yang baru terkait kesehatan. Coba mulai latihan baru atau rutinitas manajemen kesehatan.`,
            `Keberuntungan kesehatan tahun ini akan membaik secara bertahap. Dari ${getFutureMonthShortId(6)}, Anda dapat mengharapkan perubahan yang lebih besar.`,
            `Pada ${getFutureMonthShortId(2)}, akan ada berita baik terkait kesehatan. Jangan lewatkan periode ini dan mulailah manajemen kesehatan.`,
            `Dari ${getFutureMonthShortId(8)}, keberuntungan kesehatan akan membaik secara signifikan. Selama periode ini, peningkatan kekuatan fisik secara keseluruhan diharapkan.`,
            `Pada ${getFutureMonthShortId(9)}, mungkin ada titik balik besar terkait kesehatan. Berusahalah untuk perubahan positif.`
          ];
        }
      },
      love: {
        ko: [
          `${getFutureMonthShort(3)}에 좋은 인연을 만날 기회가 생길 것입니다. 이 시기에는 적극적으로 만남을 추구하는 것이 좋습니다.`,
          `${getFutureMonthShort(5)}부터 연애운이 크게 상승할 것입니다. 이 시기에는 새로운 인연을 만날 확률이 높습니다.`,
          `${getFutureMonthShort(2)}에 연애 관련 좋은 변화가 있을 것입니다. 기존 관계가 있다면 더욱 깊어질 수 있습니다.`,
          `올해 연애운은 전반적으로 좋은 편입니다. 특히 ${getFutureMonthShort(6)}부터는 더 큰 변화를 경험할 수 있을 것입니다.`,
          `${getFutureMonthShort(4)}에 운명적인 인연을 만날 수 있는 기회가 있을 것입니다. 이 시기를 놓치지 않도록 주의하시기 바랍니다.`,
          `${getFutureMonthShort(8)}부터는 연애운이 본격적으로 활성화될 것입니다. 이 시기에는 새로운 시작을 할 수 있습니다.`,
          `${getFutureMonthShort(1)}부터 연애운이 좋아지기 시작할 것입니다. 이 시기부터는 인간관계에 더욱 적극적으로 나서는 것이 좋습니다.`,
          `올해 연애운은 점진적으로 개선될 것입니다. ${getFutureMonthShort(7)}부터는 더 큰 발전을 기대할 수 있습니다.`,
          `${getFutureMonthShort(9)}에 연애 관련 큰 전환점이 있을 수 있습니다. 긍정적인 변화를 위해 노력하시기 바랍니다.`,
          `올해 연애운은 안정적이면서도 발전적일 것입니다. ${getFutureMonthShort(10)}부터는 더욱 좋은 결과를 얻을 수 있을 것입니다.`
        ],
        get en() {
          return [
            `In ${getFutureMonthShortEn(3)}, there will be an opportunity to meet a good connection. During this period, it is good to actively seek meetings.`,
            `From ${getFutureMonthShortEn(5)}, love fortune will rise significantly. During this period, the probability of meeting a new connection is high.`,
            `In ${getFutureMonthShortEn(2)}, there will be good changes related to love. If you have an existing relationship, it can deepen further.`,
            `This year's love fortune is generally good. Especially from ${getFutureMonthShortEn(6)}, you can experience greater changes.`,
            `In ${getFutureMonthShortEn(4)}, there will be an opportunity to meet a destined person. Be careful not to miss this period.`,
            `From ${getFutureMonthShortEn(8)}, love fortune will be fully activated. During this period, you can make a new start.`,
            `From ${getFutureMonthShortEn(1)}, love fortune will begin to improve. From this period, it is good to be more active in relationships.`,
            `This year's love fortune will improve gradually. From ${getFutureMonthShortEn(7)}, greater development can be expected.`,
            `In ${getFutureMonthShortEn(9)}, there may be a big turning point related to love. Work hard for positive changes.`,
            `This year's love fortune will be stable and progressive. From ${getFutureMonthShortEn(10)}, even better results can be achieved.`
          ];
        },
        get ja() {
          return [
            `${getFutureMonthShortJa(3)}に良い縁に会う機会が生じるでしょう。この時期には積極的に出会いを求めることが良いでしょう。`,
            `${getFutureMonthShortJa(5)}から恋愛運が大きく上昇するでしょう。この時期には新しい縁に会う確率が高いでしょう。`,
            `${getFutureMonthShortJa(2)}に恋愛に関する良い変化があるでしょう。既存の関係があればさらに深まる可能性があります。`,
            `今年の恋愛運は全体的に良い方です。特に${getFutureMonthShortJa(6)}からはより大きな変化を経験できるでしょう。`,
            `${getFutureMonthShortJa(4)}に運命的な人に会うことができる機会があるでしょう。この時期を逃さないように注意することをお勧めします。`,
            `${getFutureMonthShortJa(8)}からは恋愛運が本格的に活性化するでしょう。この時期には新しい始まりをすることができます。`,
            `${getFutureMonthShortJa(1)}から恋愛運が良くなり始めるでしょう。この時期からは人間関係により積極的に出ることが良いでしょう。`,
            `今年の恋愛運は段階的に改善するでしょう。${getFutureMonthShortJa(7)}からはより大きな発展が期待できます。`,
            `${getFutureMonthShortJa(9)}に恋愛に関する大きな転換点があるかもしれません。前向きな変化のために努力することをお勧めします。`,
            `今年の恋愛運は安定しながらも発展的でしょう。${getFutureMonthShortJa(10)}からはさらに良い結果を得ることができるでしょう。`
          ];
        },
        get 'zh-CN'() {
          return [
            `${getFutureMonthShortZhCN(3)}会有遇到良缘的机会。在这个时期，积极寻求相遇是好的。`,
            `从${getFutureMonthShortZhCN(5)}开始，恋爱运将大幅上升。在这个时期，遇到新缘分的概率很高。`,
            `${getFutureMonthShortZhCN(2)}会有与恋爱相关的好变化。如果你有现有关系，可以进一步加深。`,
            `今年的恋爱运总体良好。特别是从${getFutureMonthShortZhCN(6)}开始，你可以体验更大的变化。`,
            `${getFutureMonthShortZhCN(4)}会有遇到命中注定的人的机会。注意不要错过这个时期。`,
            `从${getFutureMonthShortZhCN(8)}开始，恋爱运将全面激活。在这个时期，你可以重新开始。`,
            `从${getFutureMonthShortZhCN(1)}开始，恋爱运将开始改善。从这个时期开始，在人际关系中更加主动是好的。`,
            `今年的恋爱运将逐步改善。从${getFutureMonthShortZhCN(7)}开始，可以期待更大的发展。`,
            `${getFutureMonthShortZhCN(9)}可能会有与恋爱相关的重大转折点。努力实现积极的变化。`,
            `今年的恋爱运将稳定且进步。从${getFutureMonthShortZhCN(10)}开始，可以获得更好的结果。`
          ];
        },
        get 'zh-TW'() {
          return [
            `${getFutureMonthShortZhTW(3)}會有遇到良緣的機會。在這個時期，積極尋求相遇是好的。`,
            `從${getFutureMonthShortZhTW(5)}開始，戀愛運將大幅上升。在這個時期，遇到新緣分的概率很高。`,
            `${getFutureMonthShortZhTW(2)}會有與戀愛相關的好變化。如果你有現有關係，可以進一步加深。`,
            `今年的戀愛運總體良好。特別是從${getFutureMonthShortZhTW(6)}開始，你可以體驗更大的變化。`,
            `${getFutureMonthShortZhTW(4)}會有遇到命中註定的人的機會。注意不要錯過這個時期。`,
            `從${getFutureMonthShortZhTW(8)}開始，戀愛運將全面激活。在這個時期，你可以重新開始。`,
            `從${getFutureMonthShortZhTW(1)}開始，戀愛運將開始改善。從這個時期開始，在人際關係中更加主動是好的。`,
            `今年的戀愛運將逐步改善。從${getFutureMonthShortZhTW(7)}開始，可以期待更大的發展。`,
            `${getFutureMonthShortZhTW(9)}可能會有與戀愛相關的重大轉折點。努力實現積極的變化。`,
            `今年的戀愛運將穩定且進步。從${getFutureMonthShortZhTW(10)}開始，可以獲得更好的結果。`
          ];
        },
        get vi() {
          return [
            `Vào ${getFutureMonthShortVi(3)}, sẽ có cơ hội gặp được mối duyên tốt. Trong thời kỳ này, nên tích cực tìm kiếm các cuộc gặp gỡ.`,
            `Từ ${getFutureMonthShortVi(5)}, vận tình yêu sẽ tăng lên đáng kể. Trong thời kỳ này, khả năng gặp được mối duyên mới là cao.`,
            `Vào ${getFutureMonthShortVi(2)}, sẽ có những thay đổi tốt liên quan đến tình yêu. Nếu bạn có một mối quan hệ hiện tại, nó có thể sâu sắc hơn.`,
            `Vận tình yêu năm nay nói chung là tốt. Đặc biệt từ ${getFutureMonthShortVi(6)}, bạn có thể trải nghiệm những thay đổi lớn hơn.`,
            `Vào ${getFutureMonthShortVi(4)}, sẽ có cơ hội gặp người định mệnh. Hãy cẩn thận đừng bỏ lỡ thời kỳ này.`,
            `Từ ${getFutureMonthShortVi(8)}, vận tình yêu sẽ được kích hoạt đầy đủ. Trong thời kỳ này, bạn có thể bắt đầu lại.`,
            `Từ ${getFutureMonthShortVi(1)}, vận tình yêu sẽ bắt đầu cải thiện. Từ thời kỳ này, nên tích cực hơn trong các mối quan hệ.`,
            `Vận tình yêu năm nay sẽ cải thiện dần dần. Từ ${getFutureMonthShortVi(7)}, có thể mong đợi sự phát triển lớn hơn.`,
            `Vào ${getFutureMonthShortVi(9)}, có thể có bước ngoặt lớn liên quan đến tình yêu. Hãy nỗ lực vì những thay đổi tích cực.`,
            `Vận tình yêu năm nay sẽ ổn định và tiến bộ. Từ ${getFutureMonthShortVi(10)}, có thể đạt được kết quả tốt hơn.`
          ];
        },
        get id() {
          return [
            `Pada ${getFutureMonthShortId(3)}, akan ada peluang untuk bertemu jodoh yang baik. Selama periode ini, baik untuk secara aktif mencari pertemuan.`,
            `Dari ${getFutureMonthShortId(5)}, keberuntungan cinta akan meningkat secara signifikan. Selama periode ini, kemungkinan bertemu jodoh baru tinggi.`,
            `Pada ${getFutureMonthShortId(2)}, akan ada perubahan baik yang terkait cinta. Jika Anda memiliki hubungan yang ada, dapat diperdalam lebih lanjut.`,
            `Keberuntungan cinta tahun ini umumnya baik. Terutama dari ${getFutureMonthShortId(6)}, Anda dapat mengalami perubahan yang lebih besar.`,
            `Pada ${getFutureMonthShortId(4)}, akan ada peluang untuk bertemu orang yang ditakdirkan. Berhati-hatilah untuk tidak melewatkan periode ini.`,
            `Dari ${getFutureMonthShortId(8)}, keberuntungan cinta akan diaktifkan sepenuhnya. Selama periode ini, Anda dapat memulai yang baru.`,
            `Dari ${getFutureMonthShortId(1)}, keberuntungan cinta akan mulai membaik. Dari periode ini, baik untuk lebih aktif dalam hubungan.`,
            `Keberuntungan cinta tahun ini akan membaik secara bertahap. Dari ${getFutureMonthShortId(7)}, perkembangan yang lebih besar dapat diharapkan.`,
            `Pada ${getFutureMonthShortId(9)}, mungkin ada titik balik besar terkait cinta. Berusahalah untuk perubahan positif.`,
            `Keberuntungan cinta tahun ini akan stabil dan progresif. Dari ${getFutureMonthShortId(10)}, hasil yang bahkan lebih baik dapat dicapai.`
          ];
        }
      },
      business: {
        ko: [
          `${getFutureMonthShort(3)}에 사업 관련 좋은 기회가 생길 것입니다. 이 시기에 새로운 프로젝트를 시작하는 것을 권장합니다.`,
          `${getFutureMonthShort(5)}부터 사업운이 크게 상승할 것입니다. 이 시기에는 확장이나 새로운 도전을 고려해볼 수 있습니다.`,
          `${getFutureMonthShort(2)}에 사업 관련 좋은 변화가 있을 것입니다. 이 시기부터는 더욱 적극적으로 나아가는 것이 좋습니다.`,
          `올해 사업운은 전반적으로 좋은 편입니다. 특히 ${getFutureMonthShort(6)}부터는 더 큰 성장을 기대할 수 있습니다.`,
          `${getFutureMonthShort(4)}에 사업 관련 큰 전환점이 있을 수 있습니다. 이 시기를 놓치지 않고 적극적으로 행동하시기 바랍니다.`,
          `${getFutureMonthShort(8)}부터는 사업운이 본격적으로 활성화될 것입니다. 이 시기에는 대규모 프로젝트도 가능합니다.`,
          `${getFutureMonthShort(1)}부터 사업운이 좋아지기 시작할 것입니다. 이 시기부터는 새로운 기회를 찾는 것이 좋습니다.`,
          `올해 사업운은 점진적으로 개선될 것입니다. ${getFutureMonthShort(7)}부터는 더 큰 성공을 기대할 수 있습니다.`,
          `${getFutureMonthShort(9)}에 사업 관련 큰 기회가 있을 수 있습니다. 하지만 신중하게 판단하고 계획적으로 접근하시기 바랍니다.`,
          `올해 사업운은 안정적이면서도 발전적일 것입니다. ${getFutureMonthShort(10)}부터는 더욱 좋은 결과를 얻을 수 있을 것입니다.`
        ],
        get en() {
          return [
            `In ${getFutureMonthShortEn(3)}, a good business opportunity will arise. During this period, it is recommended to start a new project.`,
            `From ${getFutureMonthShortEn(5)}, business fortune will rise significantly. During this period, expansion or new challenges can be considered.`,
            `In ${getFutureMonthShortEn(2)}, there will be good changes related to business. From this period, it is good to move forward more actively.`,
            `This year's business fortune is generally good. Especially from ${getFutureMonthShortEn(6)}, greater growth can be expected.`,
            `In ${getFutureMonthShortEn(4)}, there may be a big turning point related to business. Do not miss this period and act proactively.`,
            `From ${getFutureMonthShortEn(8)}, business fortune will be fully activated. During this period, large-scale projects are also possible.`,
            `From ${getFutureMonthShortEn(1)}, business fortune will begin to improve. From this period, it is good to look for new opportunities.`,
            `This year's business fortune will improve gradually. From ${getFutureMonthShortEn(7)}, greater success can be expected.`,
            `In ${getFutureMonthShortEn(9)}, there may be a big opportunity related to business. However, judge carefully and approach systematically.`,
            `This year's business fortune will be stable and progressive. From ${getFutureMonthShortEn(10)}, even better results can be achieved.`
          ];
        },
        get ja() {
          return [
            `${getFutureMonthShortJa(3)}に事業に関する良い機会が生じるでしょう。この時期に新しいプロジェクトを始めることをお勧めします。`,
            `${getFutureMonthShortJa(5)}から事業運が大きく上昇するでしょう。この時期には拡張や新しい挑戦を検討できます。`,
            `${getFutureMonthShortJa(2)}に事業に関する良い変化があるでしょう。この時期からはより積極的に進むことが良いでしょう。`,
            `今年の事業運は全体的に良い方です。特に${getFutureMonthShortJa(6)}からはより大きな成長が期待できます。`,
            `${getFutureMonthShortJa(4)}に事業に関する大きな転換点があるかもしれません。この時期を逃さず積極的に行動することをお勧めします。`,
            `${getFutureMonthShortJa(8)}からは事業運が本格的に活性化するでしょう。この時期には大規模なプロジェクトも可能です。`,
            `${getFutureMonthShortJa(1)}から事業運が良くなり始めるでしょう。この時期からは新しい機会を探すことが良いでしょう。`,
            `今年の事業運は段階的に改善するでしょう。${getFutureMonthShortJa(7)}からはより大きな成功が期待できます。`,
            `${getFutureMonthShortJa(9)}に事業に関する大きな機会があるかもしれません。しかし、慎重に判断し計画的にアプローチすることをお勧めします。`,
            `今年の事業運は安定しながらも発展的でしょう。${getFutureMonthShortJa(10)}からはさらに良い結果を得ることができるでしょう。`
          ];
        },
        get 'zh-CN'() {
          return [
            `${getFutureMonthShortZhCN(3)}会有与商业相关的好机会。在这个时期，建议开始新项目。`,
            `从${getFutureMonthShortZhCN(5)}开始，事业运将大幅上升。在这个时期，可以考虑扩张或新挑战。`,
            `${getFutureMonthShortZhCN(2)}会有与商业相关的好变化。从这个时期开始，更加积极主动是好的。`,
            `今年的事业运总体良好。特别是从${getFutureMonthShortZhCN(6)}开始，可以期待更大的增长。`,
            `${getFutureMonthShortZhCN(4)}可能会有与商业相关的重大转折点。不要错过这个时期，要积极行动。`,
            `从${getFutureMonthShortZhCN(8)}开始，事业运将全面激活。在这个时期，大规模项目也是可能的。`,
            `从${getFutureMonthShortZhCN(1)}开始，事业运将开始改善。从这个时期开始，寻找新机会是好的。`,
            `今年的事业运将逐步改善。从${getFutureMonthShortZhCN(7)}开始，可以期待更大的成功。`,
            `${getFutureMonthShortZhCN(9)}可能会有与商业相关的重大机会。但要谨慎判断并系统性地接近。`,
            `今年的事业运将稳定且进步。从${getFutureMonthShortZhCN(10)}开始，可以获得更好的结果。`
          ];
        },
        get 'zh-TW'() {
          return [
            `${getFutureMonthShortZhTW(3)}會有與商業相關的好機會。在這個時期，建議開始新專案。`,
            `從${getFutureMonthShortZhTW(5)}開始，事業運將大幅上升。在這個時期，可以考慮擴張或新挑戰。`,
            `${getFutureMonthShortZhTW(2)}會有與商業相關的好變化。從這個時期開始，更加積極主動是好的。`,
            `今年的事業運總體良好。特別是從${getFutureMonthShortZhTW(6)}開始，可以期待更大的增長。`,
            `${getFutureMonthShortZhTW(4)}可能會有與商業相關的重大轉折點。不要錯過這個時期，要積極行動。`,
            `從${getFutureMonthShortZhTW(8)}開始，事業運將全面激活。在這個時期，大規模專案也是可能的。`,
            `從${getFutureMonthShortZhTW(1)}開始，事業運將開始改善。從這個時期開始，尋找新機會是好的。`,
            `今年的事業運將逐步改善。從${getFutureMonthShortZhTW(7)}開始，可以期待更大的成功。`,
            `${getFutureMonthShortZhTW(9)}可能會有與商業相關的重大機會。但要謹慎判斷並系統性地接近。`,
            `今年的事業運將穩定且進步。從${getFutureMonthShortZhTW(10)}開始，可以獲得更好的結果。`
          ];
        },
        get vi() {
          return [
            `Vào ${getFutureMonthShortVi(3)}, cơ hội kinh doanh tốt sẽ nảy sinh. Trong thời kỳ này, nên bắt đầu một dự án mới.`,
            `Từ ${getFutureMonthShortVi(5)}, vận kinh doanh sẽ tăng lên đáng kể. Trong thời kỳ này, có thể cân nhắc mở rộng hoặc thử thách mới.`,
            `Vào ${getFutureMonthShortVi(2)}, sẽ có những thay đổi tốt liên quan đến kinh doanh. Từ thời kỳ này, nên tiến lên tích cực hơn.`,
            `Vận kinh doanh năm nay nói chung là tốt. Đặc biệt từ ${getFutureMonthShortVi(6)}, có thể mong đợi tăng trưởng lớn hơn.`,
            `Vào ${getFutureMonthShortVi(4)}, có thể có bước ngoặt lớn liên quan đến kinh doanh. Đừng bỏ lỡ thời kỳ này và hãy hành động tích cực.`,
            `Từ ${getFutureMonthShortVi(8)}, vận kinh doanh sẽ được kích hoạt đầy đủ. Trong thời kỳ này, các dự án quy mô lớn cũng có thể thực hiện.`,
            `Từ ${getFutureMonthShortVi(1)}, vận kinh doanh sẽ bắt đầu cải thiện. Từ thời kỳ này, nên tìm kiếm cơ hội mới.`,
            `Vận kinh doanh năm nay sẽ cải thiện dần dần. Từ ${getFutureMonthShortVi(7)}, có thể mong đợi thành công lớn hơn.`,
            `Vào ${getFutureMonthShortVi(9)}, có thể có cơ hội lớn liên quan đến kinh doanh. Tuy nhiên, hãy đánh giá cẩn thận và tiếp cận có hệ thống.`,
            `Vận kinh doanh năm nay sẽ ổn định và tiến bộ. Từ ${getFutureMonthShortVi(10)}, có thể đạt được kết quả tốt hơn.`
          ];
        },
        get id() {
          return [
            `Pada ${getFutureMonthShortId(3)}, peluang bisnis yang baik akan muncul. Selama periode ini, disarankan untuk memulai proyek baru.`,
            `Dari ${getFutureMonthShortId(5)}, keberuntungan bisnis akan meningkat secara signifikan. Selama periode ini, ekspansi atau tantangan baru dapat dipertimbangkan.`,
            `Pada ${getFutureMonthShortId(2)}, akan ada perubahan baik yang terkait bisnis. Dari periode ini, baik untuk maju lebih aktif.`,
            `Keberuntungan bisnis tahun ini umumnya baik. Terutama dari ${getFutureMonthShortId(6)}, pertumbuhan yang lebih besar dapat diharapkan.`,
            `Pada ${getFutureMonthShortId(4)}, mungkin ada titik balik besar terkait bisnis. Jangan lewatkan periode ini dan bertindaklah secara proaktif.`,
            `Dari ${getFutureMonthShortId(8)}, keberuntungan bisnis akan diaktifkan sepenuhnya. Selama periode ini, proyek skala besar juga dimungkinkan.`,
            `Dari ${getFutureMonthShortId(1)}, keberuntungan bisnis akan mulai membaik. Dari periode ini, baik untuk mencari peluang baru.`,
            `Keberuntungan bisnis tahun ini akan membaik secara bertahap. Dari ${getFutureMonthShortId(7)}, kesuksesan yang lebih besar dapat diharapkan.`,
            `Pada ${getFutureMonthShortId(9)}, mungkin ada peluang besar terkait bisnis. Namun, putuskan dengan hati-hati dan dekati secara sistematis.`,
            `Keberuntungan bisnis tahun ini akan stabil dan progresif. Dari ${getFutureMonthShortId(10)}, hasil yang bahkan lebih baik dapat dicapai.`
          ];
        }
      },
      study: {
        ko: [
          `${getFutureMonthShort(2)}에 학업 관련 좋은 변화가 있을 것입니다. 이 시기부터는 학습에 더욱 집중하는 것이 좋습니다.`,
          `${getFutureMonthShort(5)}부터 학업운이 크게 상승할 것입니다. 이 시기에는 시험이나 평가에서 좋은 결과를 얻을 수 있습니다.`,
          `${getFutureMonthShort(3)}에 학업 관련 좋은 기회가 생길 것입니다. 이 시기에 새로운 공부를 시작하거나 자격증을 취득하는 것을 권장합니다.`,
          `올해 학업운은 전반적으로 좋은 편입니다. 특히 ${getFutureMonthShort(6)}부터는 더 큰 성과를 기대할 수 있습니다.`,
          `${getFutureMonthShort(4)}에 학업 관련 큰 전환점이 있을 수 있습니다. 이 시기를 놓치지 않고 노력하시기 바랍니다.`,
          `${getFutureMonthShort(8)}부터는 학업운이 본격적으로 활성화될 것입니다. 이 시기에는 목표를 향해 큰 발전을 이룰 수 있습니다.`,
          `${getFutureMonthShort(1)}부터 학업운이 좋아지기 시작할 것입니다. 이 시기부터는 학습 계획을 세우고 실천하는 것이 좋습니다.`,
          `올해 학업운은 점진적으로 개선될 것입니다. ${getFutureMonthShort(7)}부터는 더 큰 성공을 기대할 수 있습니다.`,
          `${getFutureMonthShort(9)}에 학업 관련 큰 성과가 있을 수 있습니다. 하지만 방심하지 말고 꾸준히 노력하시기 바랍니다.`,
          `올해 학업운은 안정적이면서도 발전적일 것입니다. ${getFutureMonthShort(10)}부터는 더욱 좋은 결과를 얻을 수 있을 것입니다.`
        ],
        get en() {
          return [
            `In ${getFutureMonthShortEn(2)}, there will be good changes related to studies. From this period, it is good to focus more on learning.`,
            `From ${getFutureMonthShortEn(5)}, study fortune will rise significantly. During this period, you can achieve good results in exams or evaluations.`,
            `In ${getFutureMonthShortEn(3)}, there will be a good opportunity related to studies. During this period, it is recommended to start new studies or obtain certifications.`,
            `This year's study fortune is generally good. Especially from ${getFutureMonthShortEn(6)}, greater achievements can be expected.`,
            `In ${getFutureMonthShortEn(4)}, there may be a big turning point related to studies. Do not miss this period and work hard.`,
            `From ${getFutureMonthShortEn(8)}, study fortune will be fully activated. During this period, you can achieve great progress toward your goals.`,
            `From ${getFutureMonthShortEn(1)}, study fortune will begin to improve. From this period, it is good to make study plans and practice them.`,
            `This year's study fortune will improve gradually. From ${getFutureMonthShortEn(7)}, greater success can be expected.`,
            `In ${getFutureMonthShortEn(9)}, there may be a big achievement related to studies. However, do not let your guard down and keep working steadily.`,
            `This year's study fortune will be stable and progressive. From ${getFutureMonthShortEn(10)}, even better results can be achieved.`
          ];
        },
        get ja() {
          return [
            `${getFutureMonthShortJa(2)}に学業に関する良い変化があるでしょう。この時期からは学習により集中することが良いでしょう。`,
            `${getFutureMonthShortJa(5)}から学業運が大きく上昇するでしょう。この時期には試験や評価で良い結果を得ることができるでしょう。`,
            `${getFutureMonthShortJa(3)}に学業に関する良い機会が生じるでしょう。この時期に新しい勉強を始めたり資格を取得することをお勧めします。`,
            `今年の学業運は全体的に良い方です。特に${getFutureMonthShortJa(6)}からはより大きな成果が期待できます。`,
            `${getFutureMonthShortJa(4)}に学業に関する大きな転換点があるかもしれません。この時期を逃さず努力することをお勧めします。`,
            `${getFutureMonthShortJa(8)}からは学業運が本格的に活性化するでしょう。この時期には目標に向かって大きな発展を成し遂げることができます。`,
            `${getFutureMonthShortJa(1)}から学業運が良くなり始めるでしょう。この時期からは学習計画を立てて実践することが良いでしょう。`,
            `今年の学業運は段階的に改善するでしょう。${getFutureMonthShortJa(7)}からはより大きな成功が期待できます。`,
            `${getFutureMonthShortJa(9)}に学業に関する大きな成果があるかもしれません。しかし、油断せずに着実に努力することをお勧めします。`,
            `今年の学業運は安定しながらも発展的でしょう。${getFutureMonthShortJa(10)}からはさらに良い結果を得ることができるでしょう。`
          ];
        },
        get 'zh-CN'() {
          return [
            `${getFutureMonthShortZhCN(2)}会有与学习相关的好变化。从这个时期开始，更加专注于学习是好的。`,
            `从${getFutureMonthShortZhCN(5)}开始，学业运将大幅上升。在这个时期，你可以在考试或评估中获得好结果。`,
            `${getFutureMonthShortZhCN(3)}会有与学习相关的好机会。在这个时期，建议开始新的学习或获得证书。`,
            `今年的学业运总体良好。特别是从${getFutureMonthShortZhCN(6)}开始，可以期待更大的成就。`,
            `${getFutureMonthShortZhCN(4)}可能会有与学习相关的重大转折点。不要错过这个时期，要努力。`,
            `从${getFutureMonthShortZhCN(8)}开始，学业运将全面激活。在这个时期，你可以朝着目标取得巨大进步。`,
            `从${getFutureMonthShortZhCN(1)}开始，学业运将开始改善。从这个时期开始，制定学习计划并实践是好的。`,
            `今年的学业运将逐步改善。从${getFutureMonthShortZhCN(7)}开始，可以期待更大的成功。`,
            `${getFutureMonthShortZhCN(9)}可能会有与学习相关的重大成就。但不要松懈，要继续稳步努力。`,
            `今年的学业运将稳定且进步。从${getFutureMonthShortZhCN(10)}开始，可以获得更好的结果。`
          ];
        },
        get 'zh-TW'() {
          return [
            `${getFutureMonthShortZhTW(2)}會有與學習相關的好變化。從這個時期開始，更加專注於學習是好的。`,
            `從${getFutureMonthShortZhTW(5)}開始，學業運將大幅上升。在這個時期，你可以在考試或評估中獲得好結果。`,
            `${getFutureMonthShortZhTW(3)}會有與學習相關的好機會。在這個時期，建議開始新的學習或獲得證書。`,
            `今年的學業運總體良好。特別是從${getFutureMonthShortZhTW(6)}開始，可以期待更大的成就。`,
            `${getFutureMonthShortZhTW(4)}可能會有與學習相關的重大轉折點。不要錯過這個時期，要努力。`,
            `從${getFutureMonthShortZhTW(8)}開始，學業運將全面激活。在這個時期，你可以朝著目標取得巨大進步。`,
            `從${getFutureMonthShortZhTW(1)}開始，學業運將開始改善。從這個時期開始，制定學習計劃並實踐是好的。`,
            `今年的學業運將逐步改善。從${getFutureMonthShortZhTW(7)}開始，可以期待更大的成功。`,
            `${getFutureMonthShortZhTW(9)}可能會有與學習相關的重大成就。但不要鬆懈，要繼續穩步努力。`,
            `今年的學業運將穩定且進步。從${getFutureMonthShortZhTW(10)}開始，可以獲得更好的結果。`
          ];
        },
        get vi() {
          return [
            `Vào ${getFutureMonthShortVi(2)}, sẽ có những thay đổi tốt liên quan đến học tập. Từ thời kỳ này, nên tập trung hơn vào việc học.`,
            `Từ ${getFutureMonthShortVi(5)}, vận học tập sẽ tăng lên đáng kể. Trong thời kỳ này, bạn có thể đạt được kết quả tốt trong các kỳ thi hoặc đánh giá.`,
            `Vào ${getFutureMonthShortVi(3)}, sẽ có cơ hội tốt liên quan đến học tập. Trong thời kỳ này, nên bắt đầu học tập mới hoặc lấy chứng chỉ.`,
            `Vận học tập năm nay nói chung là tốt. Đặc biệt từ ${getFutureMonthShortVi(6)}, có thể mong đợi thành tựu lớn hơn.`,
            `Vào ${getFutureMonthShortVi(4)}, có thể có bước ngoặt lớn liên quan đến học tập. Đừng bỏ lỡ thời kỳ này và hãy nỗ lực.`,
            `Từ ${getFutureMonthShortVi(8)}, vận học tập sẽ được kích hoạt đầy đủ. Trong thời kỳ này, bạn có thể đạt được tiến bộ lớn hướng tới mục tiêu của mình.`,
            `Từ ${getFutureMonthShortVi(1)}, vận học tập sẽ bắt đầu cải thiện. Từ thời kỳ này, nên lập kế hoạch học tập và thực hành chúng.`,
            `Vận học tập năm nay sẽ cải thiện dần dần. Từ ${getFutureMonthShortVi(7)}, có thể mong đợi thành công lớn hơn.`,
            `Vào ${getFutureMonthShortVi(9)}, có thể có thành tựu lớn liên quan đến học tập. Tuy nhiên, đừng để mất cảnh giác và hãy tiếp tục nỗ lực đều đặn.`,
            `Vận học tập năm nay sẽ ổn định và tiến bộ. Từ ${getFutureMonthShortVi(10)}, có thể đạt được kết quả tốt hơn.`
          ];
        },
        get id() {
          return [
            `Pada ${getFutureMonthShortId(2)}, akan ada perubahan baik yang terkait studi. Dari periode ini, baik untuk lebih fokus pada pembelajaran.`,
            `Dari ${getFutureMonthShortId(5)}, keberuntungan studi akan meningkat secara signifikan. Selama periode ini, Anda dapat mencapai hasil yang baik dalam ujian atau evaluasi.`,
            `Pada ${getFutureMonthShortId(3)}, akan ada peluang baik yang terkait studi. Selama periode ini, disarankan untuk memulai studi baru atau memperoleh sertifikasi.`,
            `Keberuntungan studi tahun ini umumnya baik. Terutama dari ${getFutureMonthShortId(6)}, pencapaian yang lebih besar dapat diharapkan.`,
            `Pada ${getFutureMonthShortId(4)}, mungkin ada titik balik besar terkait studi. Jangan lewatkan periode ini dan berusahalah.`,
            `Dari ${getFutureMonthShortId(8)}, keberuntungan studi akan diaktifkan sepenuhnya. Selama periode ini, Anda dapat mencapai kemajuan besar menuju tujuan Anda.`,
            `Dari ${getFutureMonthShortId(1)}, keberuntungan studi akan mulai membaik. Dari periode ini, baik untuk membuat rencana studi dan mempraktikkannya.`,
            `Keberuntungan studi tahun ini akan membaik secara bertahap. Dari ${getFutureMonthShortId(7)}, kesuksesan yang lebih besar dapat diharapkan.`,
            `Pada ${getFutureMonthShortId(9)}, mungkin ada pencapaian besar terkait studi. Namun, jangan lengah dan teruslah bekerja dengan tekun.`,
            `Keberuntungan studi tahun ini akan stabil dan progresif. Dari ${getFutureMonthShortId(10)}, hasil yang bahkan lebih baik dapat dicapai.`
          ];
        }
      },
      goodTime: {
        ko: [
          `${getFutureMonthShort(2)}은 올해 가장 좋은 시기 중 하나입니다. 모든 면에서 긍정적인 변화를 경험할 수 있을 것입니다.`,
          `${getFutureMonthShort(4)}부터 ${getFutureMonthShort(6)}까지는 특히 운세가 좋은 시기입니다. 이 기간 동안 중요한 결정을 내리는 것을 권장합니다.`,
          `올해 봄과 가을 시즌은 전체적으로 좋은 운세를 경험할 수 있는 시기입니다. 이 시기를 잘 활용하시기 바랍니다.`,
          `${getFutureMonthShort(5)}에 특히 좋은 기운이 감돌게 됩니다. 이 시기에는 새로운 시작을 하거나 목표를 향해 나아가는 것이 좋습니다.`,
          `${getFutureMonthShort(8)}부터는 전반적으로 운세가 상승하는 시기입니다. 이 시기를 준비하는 것이 중요합니다.`,
          `${getFutureMonthShort(3)}부터 ${getFutureMonthShort(7)}까지는 꾸준히 좋은 운세를 경험할 수 있는 시기입니다. 이 기간을 놓치지 않도록 하세요.`,
          `${getFutureMonthShort(6)}은 전환점이 될 수 있는 좋은 시기입니다. 이 시기를 잘 활용하면 큰 발전을 이룰 수 있습니다.`,
          `${getFutureMonthShort(1)}부터 시작되는 올해 초반은 준비하는 시기입니다. 하지만 ${getFutureMonthShort(3)}부터는 본격적으로 좋아질 것입니다.`,
          `${getFutureMonthShort(9)}과 ${getFutureMonthShort(10)}은 성과를 거둘 수 있는 좋은 시기입니다. 이 시기에는 노력한 만큼 결과를 얻을 수 있을 것입니다.`,
          `전체적으로 올해는 좋은 운세를 경험할 수 있는 해입니다. 특히 ${getFutureMonthShort(5)}, ${getFutureMonthShort(8)}, ${getFutureMonthShort(11)}는 더욱 좋은 시기입니다.`
        ],
        get en() {
          return [
            `${getFutureMonthShortEn(2)} is one of the best periods of the year. You can experience positive changes in all aspects.`,
            `From ${getFutureMonthShortEn(4)} to ${getFutureMonthShortEn(6)} is a particularly good fortune period. It is recommended to make important decisions during this period.`,
            `Spring and fall seasons this year are times when you can experience overall good fortune. Make good use of this period.`,
            `In ${getFutureMonthShortEn(5)}, especially good energy will flow. During this period, it is good to make new beginnings or move toward goals.`,
            `From ${getFutureMonthShortEn(8)}, it is a period when overall fortune rises. It is important to prepare for this period.`,
            `From ${getFutureMonthShortEn(3)} to ${getFutureMonthShortEn(7)} is a period when you can consistently experience good fortune. Do not miss this period.`,
            `${getFutureMonthShortEn(6)} is a good period that can be a turning point. If you make good use of this period, you can achieve great development.`,
            `The early part of this year starting from ${getFutureMonthShortEn(1)} is a preparation period. However, from ${getFutureMonthShortEn(3)}, it will improve significantly.`,
            `${getFutureMonthShortEn(9)} and ${getFutureMonthShortEn(10)} are good periods when you can achieve results. During this period, you will get results commensurate with your efforts.`,
            `Overall, this year is a year when you can experience good fortune. Especially ${getFutureMonthShortEn(5)}, ${getFutureMonthShortEn(8)}, and ${getFutureMonthShortEn(11)} are even better periods.`
          ];
        },
        get ja() {
          return [
            `${getFutureMonthShortJa(2)}は今年最も良い時期の一つです。すべての面で前向きな変化を経験できるでしょう。`,
            `${getFutureMonthShortJa(4)}から${getFutureMonthShortJa(6)}まで特に運勢が良い時期です。この期間中に重要な決定を下すことをお勧めします。`,
            `今年の春と秋の季節は全体的に良い運勢を経験できる時期です。この時期をよく活用することをお勧めします。`,
            `${getFutureMonthShortJa(5)}に特に良い気が漂うでしょう。この時期には新しい始まりをしたり目標に向かって進むことが良いでしょう。`,
            `${getFutureMonthShortJa(8)}からは全体的に運勢が上昇する時期です。この時期を準備することが重要です。`,
            `${getFutureMonthShortJa(3)}から${getFutureMonthShortJa(7)}まで着実に良い運勢を経験できる時期です。この期間を逃さないようにしてください。`,
            `${getFutureMonthShortJa(6)}は転換点になることができる良い時期です。この時期をよく活用すれば大きな発展を成し遂げることができます。`,
            `${getFutureMonthShortJa(1)}から始まる今年初めは準備する時期です。しかし${getFutureMonthShortJa(3)}からは本格的に良くなるでしょう。`,
            `${getFutureMonthShortJa(9)}と${getFutureMonthShortJa(10)}は成果を収めることができる良い時期です。この時期には努力しただけ結果を得ることができるでしょう。`,
            `全体的に今年は良い運勢を経験できる年です。特に${getFutureMonthShortJa(5)}、${getFutureMonthShortJa(8)}、${getFutureMonthShortJa(11)}はさらに良い時期です。`
          ];
        },
        get 'zh-CN'() {
          return [
            `${getFutureMonthShortZhCN(2)}是今年最佳时期之一。你可以在所有方面体验积极的变化。`,
            `从${getFutureMonthShortZhCN(4)}到${getFutureMonthShortZhCN(6)}是运势特别好的时期。建议在这个时期做重要决定。`,
            `今年的春季和秋季是你可以体验整体好运的时期。好好利用这个时期。`,
            `${getFutureMonthShortZhCN(5)}会有特别好的能量流动。在这个时期，重新开始或朝着目标前进是好的。`,
            `从${getFutureMonthShortZhCN(8)}开始，是整体运势上升的时期。准备这个时期很重要。`,
            `从${getFutureMonthShortZhCN(3)}到${getFutureMonthShortZhCN(7)}是可以持续体验好运的时期。不要错过这个时期。`,
            `${getFutureMonthShortZhCN(6)}是可以成为转折点的好时期。如果你好好利用这个时期，可以取得巨大发展。`,
            `从${getFutureMonthShortZhCN(1)}开始的今年初是准备时期。但从${getFutureMonthShortZhCN(3)}开始，将显著改善。`,
            `${getFutureMonthShortZhCN(9)}和${getFutureMonthShortZhCN(10)}是可以取得成果的好时期。在这个时期，你会得到与努力相称的结果。`,
            `整体而言，今年是可以体验好运的一年。特别是${getFutureMonthShortZhCN(5)}、${getFutureMonthShortZhCN(8)}和${getFutureMonthShortZhCN(11)}是更好的时期。`
          ];
        },
        get 'zh-TW'() {
          return [
            `${getFutureMonthShortZhTW(2)}是今年最佳時期之一。你可以在所有方面體驗積極的變化。`,
            `從${getFutureMonthShortZhTW(4)}到${getFutureMonthShortZhTW(6)}是運勢特別好的時期。建議在這個時期做重要決定。`,
            `今年的春季和秋季是你可以體驗整體好運的時期。好好利用這個時期。`,
            `${getFutureMonthShortZhTW(5)}會有特別好的能量流動。在這個時期，重新開始或朝著目標前進是好的。`,
            `從${getFutureMonthShortZhTW(8)}開始，是整體運勢上升的時期。準備這個時期很重要。`,
            `從${getFutureMonthShortZhTW(3)}到${getFutureMonthShortZhTW(7)}是可以持續體驗好運的時期。不要錯過這個時期。`,
            `${getFutureMonthShortZhTW(6)}是可以成為轉折點的好時期。如果你好好利用這個時期，可以取得巨大發展。`,
            `從${getFutureMonthShortZhTW(1)}開始的今年初是準備時期。但從${getFutureMonthShortZhTW(3)}開始，將顯著改善。`,
            `${getFutureMonthShortZhTW(9)}和${getFutureMonthShortZhTW(10)}是可以取得成果的好時期。在這個時期，你會得到與努力相稱的結果。`,
            `整體而言，今年是可以體驗好運的一年。特別是${getFutureMonthShortZhTW(5)}、${getFutureMonthShortZhTW(8)}和${getFutureMonthShortZhTW(11)}是更好的時期。`
          ];
        },
        get vi() {
          return [
            `${getFutureMonthShortVi(2)} là một trong những thời kỳ tốt nhất trong năm. Bạn có thể trải nghiệm những thay đổi tích cực ở mọi khía cạnh.`,
            `Từ ${getFutureMonthShortVi(4)} đến ${getFutureMonthShortVi(6)} là thời kỳ vận may đặc biệt tốt. Nên đưa ra quyết định quan trọng trong thời kỳ này.`,
            `Mùa xuân và mùa thu năm nay là thời điểm bạn có thể trải nghiệm vận may tổng thể tốt. Hãy tận dụng tốt thời kỳ này.`,
            `Vào ${getFutureMonthShortVi(5)}, năng lượng đặc biệt tốt sẽ chảy. Trong thời kỳ này, nên bắt đầu lại hoặc tiến tới các mục tiêu.`,
            `Từ ${getFutureMonthShortVi(8)}, đây là thời kỳ vận may tổng thể tăng lên. Việc chuẩn bị cho thời kỳ này là quan trọng.`,
            `Từ ${getFutureMonthShortVi(3)} đến ${getFutureMonthShortVi(7)} là thời kỳ bạn có thể trải nghiệm vận may tốt một cách ổn định. Đừng bỏ lỡ thời kỳ này.`,
            `${getFutureMonthShortVi(6)} là thời kỳ tốt có thể trở thành điểm ngoặt. Nếu bạn tận dụng tốt thời kỳ này, bạn có thể đạt được phát triển lớn.`,
            `Phần đầu năm nay bắt đầu từ ${getFutureMonthShortVi(1)} là thời kỳ chuẩn bị. Tuy nhiên, từ ${getFutureMonthShortVi(3)}, nó sẽ cải thiện đáng kể.`,
            `${getFutureMonthShortVi(9)} và ${getFutureMonthShortVi(10)} là những thời kỳ tốt khi bạn có thể đạt được kết quả. Trong thời kỳ này, bạn sẽ nhận được kết quả tương xứng với nỗ lực của mình.`,
            `Nhìn chung, năm nay là năm bạn có thể trải nghiệm vận may tốt. Đặc biệt ${getFutureMonthShortVi(5)}, ${getFutureMonthShortVi(8)} và ${getFutureMonthShortVi(11)} là những thời kỳ còn tốt hơn.`
          ];
        },
        get id() {
          return [
            `${getFutureMonthShortId(2)} adalah salah satu periode terbaik tahun ini. Anda dapat mengalami perubahan positif di semua aspek.`,
            `Dari ${getFutureMonthShortId(4)} hingga ${getFutureMonthShortId(6)} adalah periode keberuntungan yang sangat baik. Disarankan untuk membuat keputusan penting selama periode ini.`,
            `Musim semi dan musim gugur tahun ini adalah waktu ketika Anda dapat mengalami keberuntungan keseluruhan yang baik. Manfaatkan periode ini dengan baik.`,
            `Pada ${getFutureMonthShortId(5)}, energi yang sangat baik akan mengalir. Selama periode ini, baik untuk memulai baru atau bergerak menuju tujuan.`,
            `Dari ${getFutureMonthShortId(8)}, ini adalah periode ketika keberuntungan keseluruhan meningkat. Penting untuk mempersiapkan periode ini.`,
            `Dari ${getFutureMonthShortId(3)} hingga ${getFutureMonthShortId(7)} adalah periode ketika Anda dapat secara konsisten mengalami keberuntungan baik. Jangan lewatkan periode ini.`,
            `${getFutureMonthShortId(6)} adalah periode baik yang dapat menjadi titik balik. Jika Anda memanfaatkan periode ini dengan baik, Anda dapat mencapai perkembangan besar.`,
            `Bagian awal tahun ini mulai dari ${getFutureMonthShortId(1)} adalah periode persiapan. Namun, dari ${getFutureMonthShortId(3)}, akan meningkat secara signifikan.`,
            `${getFutureMonthShortId(9)} dan ${getFutureMonthShortId(10)} adalah periode baik ketika Anda dapat mencapai hasil. Selama periode ini, Anda akan mendapatkan hasil yang sebanding dengan upaya Anda.`,
            `Secara keseluruhan, tahun ini adalah tahun ketika Anda dapat mengalami keberuntungan baik. Terutama ${getFutureMonthShortId(5)}, ${getFutureMonthShortId(8)}, dan ${getFutureMonthShortId(11)} adalah periode yang bahkan lebih baik.`
          ];
        }
      },
      warning: {
        ko: [
          `${getFutureMonthShort(1)}에는 다소 조심해야 할 시기입니다. 중요한 결정은 신중하게 내리는 것이 좋습니다.`,
          `${getFutureMonthShort(7)}에는 감정 기복이나 스트레스가 있을 수 있습니다. 이 시기에는 무리하지 않는 것이 좋습니다.`,
          `${getFutureMonthShort(11)}에는 재물 관련 주의가 필요합니다. 큰 지출이나 투자는 신중하게 결정하시기 바랍니다.`,
          `${getFutureMonthShort(6)}에는 건강 관리에 더욱 주의를 기울여야 할 시기입니다. 작은 증상이라도 간과하지 마세요.`,
          `${getFutureMonthShort(9)}에는 인간관계에서 주의해야 할 시기가 있을 수 있습니다. 이 시기에는 소통에 더욱 신경 쓰시기 바랍니다.`,
          `${getFutureMonthShort(2)}에는 사업이나 업무 관련 주의가 필요할 수 있습니다. 이 시기에는 서두르기보다는 신중하게 판단하시기 바랍니다.`,
          `${getFutureMonthShort(10)}에는 전반적으로 속도를 조절해야 할 시기입니다. 무리한 행동은 피하는 것이 좋습니다.`,
          `${getFutureMonthShort(8)}에는 학업이나 시험 관련 주의가 필요할 수 있습니다. 이 시기에는 준비를 더 철저히 하는 것이 좋습니다.`,
          `${getFutureMonthShort(12)}에는 감정적 스트레스나 피로가 있을 수 있습니다. 이 시기에는 휴식과 회복에 집중하시기 바랍니다.`,
          `전체적으로 올해는 좋은 운세이지만, 때로는 속도를 조절하고 신중하게 행동하는 것이 중요합니다. 특히 ${getFutureMonthShort(4)}과 ${getFutureMonthShort(8)}에는 더욱 주의가 필요합니다.`
        ],
        get en() {
          return [
            `In ${getFutureMonthShortEn(1)}, it is a period that requires some caution. It is good to make important decisions carefully.`,
            `In ${getFutureMonthShortEn(7)}, there may be emotional ups and downs or stress. During this period, it is good not to overdo things.`,
            `In ${getFutureMonthShortEn(11)}, caution is needed regarding wealth. It is recommended to carefully decide on large expenses or investments.`,
            `In ${getFutureMonthShortEn(6)}, it is a period when you need to pay more attention to health management. Do not overlook even small symptoms.`,
            `In ${getFutureMonthShortEn(9)}, there may be a period when you need to be cautious in relationships. During this period, pay more attention to communication.`,
            `In ${getFutureMonthShortEn(2)}, caution may be needed regarding business or work. During this period, it is good to judge carefully rather than rushing.`,
            `In ${getFutureMonthShortEn(10)}, it is a period when you need to control your speed overall. It is good to avoid excessive actions.`,
            `In ${getFutureMonthShortEn(8)}, caution may be needed regarding studies or exams. During this period, it is good to prepare more thoroughly.`,
            `In ${getFutureMonthShortEn(12)}, there may be emotional stress or fatigue. During this period, focus on rest and recovery.`,
            `Overall, this year has good fortune, but it is important to sometimes control speed and act carefully. Especially in ${getFutureMonthShortEn(4)} and ${getFutureMonthShortEn(8)}, more caution is needed.`
          ];
        },
        get ja() {
          return [
            `${getFutureMonthShortJa(1)}にはやや注意が必要な時期です。重要な決定は慎重に下すことが良いでしょう。`,
            `${getFutureMonthShortJa(7)}には感情の波やストレスがあるかもしれません。この時期には無理をしないことが良いでしょう。`,
            `${getFutureMonthShortJa(11)}には財運に関する注意が必要です。大きな支出や投資は慎重に決定することをお勧めします。`,
            `${getFutureMonthShortJa(6)}には健康管理により注意を払う必要がある時期です。小さな症状でも見落とさないでください。`,
            `${getFutureMonthShortJa(9)}には人間関係で注意が必要な時期があるかもしれません。この時期にはコミュニケーションにより神経を使うことをお勧めします。`,
            `${getFutureMonthShortJa(2)}には事業や業務に関する注意が必要かもしれません。この時期には急ぐよりも慎重に判断することをお勧めします。`,
            `${getFutureMonthShortJa(10)}には全体的に速度を調整する必要がある時期です。無理な行動は避けることが良いでしょう。`,
            `${getFutureMonthShortJa(8)}には学業や試験に関する注意が必要かもしれません。この時期には準備をより徹底することが良いでしょう。`,
            `${getFutureMonthShortJa(12)}には感情的ストレスや疲労があるかもしれません。この時期には休息と回復に集中することをお勧めします。`,
            `全体的に今年は良い運勢ですが、時には速度を調整し慎重に行動することが重要です。特に${getFutureMonthShortJa(4)}と${getFutureMonthShortJa(8)}にはより注意が必要です。`
          ];
        },
        get 'zh-CN'() {
          return [
            `${getFutureMonthShortZhCN(1)}是需要谨慎的时期。谨慎地做重要决定是好的。`,
            `${getFutureMonthShortZhCN(7)}可能会有情绪波动或压力。在这个时期，不要过度是好的。`,
            `${getFutureMonthShortZhCN(11)}需要关于财富的谨慎。建议谨慎决定大额支出或投资。`,
            `${getFutureMonthShortZhCN(6)}是需要更加关注健康管理的时期。即使是很小的症状也不要忽视。`,
            `${getFutureMonthShortZhCN(9)}可能需要在人际关系中谨慎的时期。在这个时期，更加注意沟通。`,
            `${getFutureMonthShortZhCN(2)}可能需要注意商业或工作。在这个时期，谨慎判断而不是匆忙是好的。`,
            `${getFutureMonthShortZhCN(10)}是需要整体控制速度的时期。避免过度行动是好的。`,
            `${getFutureMonthShortZhCN(8)}可能需要注意学习或考试。在这个时期，更彻底地准备是好的。`,
            `${getFutureMonthShortZhCN(12)}可能会有情绪压力或疲劳。在这个时期，专注于休息和恢复。`,
            `整体而言，今年有好运，但有时控制速度并谨慎行动是重要的。特别是在${getFutureMonthShortZhCN(4)}和${getFutureMonthShortZhCN(8)}，需要更多的谨慎。`
          ];
        },
        get 'zh-TW'() {
          return [
            `${getFutureMonthShortZhTW(1)}是需要謹慎的時期。謹慎地做重要決定是好的。`,
            `${getFutureMonthShortZhTW(7)}可能會有情緒波動或壓力。在這個時期，不要過度是好的。`,
            `${getFutureMonthShortZhTW(11)}需要關於財富的謹慎。建議謹慎決定大額支出或投資。`,
            `${getFutureMonthShortZhTW(6)}是需要更加關注健康管理的時期。即使是很小的症狀也不要忽視。`,
            `${getFutureMonthShortZhTW(9)}可能需要在人際關係中謹慎的時期。在這個時期，更加注意溝通。`,
            `${getFutureMonthShortZhTW(2)}可能需要注意商業或工作。在這個時期，謹慎判斷而不是匆忙是好的。`,
            `${getFutureMonthShortZhTW(10)}是需要整體控制速度的時期。避免過度行動是好的。`,
            `${getFutureMonthShortZhTW(8)}可能需要注意學習或考試。在這個時期，更徹底地準備是好的。`,
            `${getFutureMonthShortZhTW(12)}可能會有情緒壓力或疲勞。在這個時期，專注於休息和恢復。`,
            `整體而言，今年有好運，但有時控制速度並謹慎行動是重要的。特別是在${getFutureMonthShortZhTW(4)}和${getFutureMonthShortZhTW(8)}，需要更多的謹慎。`
          ];
        },
        get vi() {
          return [
            `Vào ${getFutureMonthShortVi(1)}, đây là thời kỳ cần một chút thận trọng. Nên đưa ra quyết định quan trọng một cách cẩn thận.`,
            `Vào ${getFutureMonthShortVi(7)}, có thể có biến động cảm xúc hoặc căng thẳng. Trong thời kỳ này, nên không làm quá sức.`,
            `Vào ${getFutureMonthShortVi(11)}, cần thận trọng về tài chính. Nên quyết định cẩn thận về các khoản chi lớn hoặc đầu tư.`,
            `Vào ${getFutureMonthShortVi(6)}, đây là thời kỳ bạn cần chú ý hơn đến việc quản lý sức khỏe. Đừng bỏ qua ngay cả những triệu chứng nhỏ.`,
            `Vào ${getFutureMonthShortVi(9)}, có thể có thời kỳ bạn cần thận trọng trong các mối quan hệ. Trong thời kỳ này, nên chú ý hơn đến giao tiếp.`,
            `Vào ${getFutureMonthShortVi(2)}, có thể cần thận trọng về kinh doanh hoặc công việc. Trong thời kỳ này, nên đánh giá cẩn thận thay vì vội vàng.`,
            `Vào ${getFutureMonthShortVi(10)}, đây là thời kỳ bạn cần kiểm soát tốc độ tổng thể. Nên tránh các hành động quá mức.`,
            `Vào ${getFutureMonthShortVi(8)}, có thể cần thận trọng về học tập hoặc thi cử. Trong thời kỳ này, nên chuẩn bị kỹ lưỡng hơn.`,
            `Vào ${getFutureMonthShortVi(12)}, có thể có căng thẳng cảm xúc hoặc mệt mỏi. Trong thời kỳ này, hãy tập trung vào nghỉ ngơi và phục hồi.`,
            `Nhìn chung, năm nay có vận may tốt, nhưng đôi khi kiểm soát tốc độ và hành động cẩn thận là quan trọng. Đặc biệt vào ${getFutureMonthShortVi(4)} và ${getFutureMonthShortVi(8)}, cần thận trọng hơn.`
          ];
        },
        get id() {
          return [
            `Pada ${getFutureMonthShortId(1)}, ini adalah periode yang memerlukan sedikit kehati-hatian. Baik untuk membuat keputusan penting dengan hati-hati.`,
            `Pada ${getFutureMonthShortId(7)}, mungkin ada fluktuasi emosional atau stres. Selama periode ini, baik untuk tidak berlebihan.`,
            `Pada ${getFutureMonthShortId(11)}, kehati-hatian diperlukan terkait kekayaan. Disarankan untuk memutuskan dengan hati-hati tentang pengeluaran besar atau investasi.`,
            `Pada ${getFutureMonthShortId(6)}, ini adalah periode ketika Anda perlu lebih memperhatikan manajemen kesehatan. Jangan abaikan bahkan gejala kecil.`,
            `Pada ${getFutureMonthShortId(9)}, mungkin ada periode ketika Anda perlu waspada dalam hubungan. Selama periode ini, perhatikan lebih pada komunikasi.`,
            `Pada ${getFutureMonthShortId(2)}, kehati-hatian mungkin diperlukan terkait bisnis atau pekerjaan. Selama periode ini, baik untuk menilai dengan hati-hati daripada terburu-buru.`,
            `Pada ${getFutureMonthShortId(10)}, ini adalah periode ketika Anda perlu mengontrol kecepatan secara keseluruhan. Baik untuk menghindari tindakan yang berlebihan.`,
            `Pada ${getFutureMonthShortId(8)}, kehati-hatian mungkin diperlukan terkait studi atau ujian. Selama periode ini, baik untuk mempersiapkan lebih teliti.`,
            `Pada ${getFutureMonthShortId(12)}, mungkin ada stres emosional atau kelelahan. Selama periode ini, fokuslah pada istirahat dan pemulihan.`,
            `Secara keseluruhan, tahun ini memiliki keberuntungan baik, tetapi terkadang mengontrol kecepatan dan bertindak hati-hati adalah penting. Terutama pada ${getFutureMonthShortId(4)} dan ${getFutureMonthShortId(8)}, lebih banyak kehati-hatian diperlukan.`
          ];
        }
      }
    }
  },
  {
    id: 2,
    title: {
      ko: '좋은 운세 기대 가능',
      en: 'Good Fortune Expected',
      ja: '良い運勢期待可能',
      'zh-CN': '有望好运',
      'zh-TW': '有望好運',
      vi: 'Vận May Tốt Có Thể Mong Đợi',
      id: 'Keberuntungan Baik Diharapkan'
    },
    description: {
      get ko() {
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth() + 1;
        let periodText = '';
        if (currentMonth <= 10) {
          periodText = `${currentYear}년 말`;
        } else if (currentMonth === 11) {
          periodText = `${currentYear}년 말 또는 ${currentYear + 1}년 초`;
        } else {
          periodText = `${currentYear + 1}년 초`;
        }
        return [
          `${periodText} 당신은 전반적으로 좋은 운세를 경험할 것입니다. 재물, 건강, 연애, 사업, 학업 모든 면에서 긍정적인 변화를 만날 수 있습니다.`,
          `${periodText} 당신에게 여러 분야에서 좋은 일들이 일어날 것입니다. 준비한 것들이 좋은 결과로 이어질 가능성이 높습니다.`,
          `${periodText} 당신은 올해 좋은 운세를 맞이하게 됩니다. 노력하는 만큼 좋은 결과를 얻을 수 있는 시기입니다.`,
          `${periodText} 당신에게 전반적으로 긍정적인 에너지가 흐를 것입니다. 새로운 기회들이 생기며 성장할 수 있는 시기가 될 것입니다.`,
          `${periodText} 당신은 올해 여러 면에서 발전을 경험할 수 있습니다. 준비된 자세로 기회를 잡으면 성공할 수 있을 것입니다.`,
          `올해 당신은 운세가 좋은 시기를 맞이합니다. ${periodText}을 기점으로 많은 일들이 좋은 방향으로 흘러갈 것입니다.`,
          `${periodText} 당신에게 좋은 일들이 생길 것입니다. 재물, 건강, 인간관계, 사업 등에서 긍정적인 변화를 경험할 수 있습니다.`,
          `${periodText} 당신은 올해 여러 분야에서 성공할 수 있는 기회를 만날 것입니다. 노력과 준비가 더욱 중요해지는 시기입니다.`,
          `${periodText} 당신에게 좋은 운기가 감돌게 됩니다. 모든 일이 순조롭게 진행되며 원하는 목표에 한 걸음씩 다가갈 수 있을 것입니다.`,
          `${periodText} 당신은 올해 전반적으로 행운을 경험할 수 있는 해가 될 것입니다. 긍정적인 마음가짐으로 준비하면 좋은 결과를 얻을 수 있습니다.`
        ];
      },
      en: [
        'You will experience good overall fortune this year. Positive changes will occur in all areas: wealth, health, love, business, and studies.',
        'Good things will happen to you in various fields. Things you have prepared will likely lead to good results.',
        'You will welcome good fortune this year. This is a time when you can achieve good results commensurate with your efforts.',
        'Overall positive energy will flow to you. New opportunities will arise, and it will be a time for growth.',
        'You can experience development in various aspects this year. If you seize opportunities with a prepared attitude, you can succeed.',
        'This year you will welcome a period of good fortune. Starting from this period, many things will flow in a good direction.',
        'Good things will happen to you. You can experience positive changes in wealth, health, relationships, and business.',
        'You will have opportunities to succeed in various fields this year. This is a time when effort and preparation become even more important.',
        'Good fortune energy will surround you. Everything will proceed smoothly, and you can take steps toward your desired goals.',
        'This year will be an overall fortunate year. With a positive mindset and preparation, you can achieve good results.'
      ],
      ja: [
        '全体的に良い運勢を経験することになるでしょう。財運、健康、恋愛、事業、学業すべての面で前向きな変化が起こります。',
        '様々な分野で良いことが起こるでしょう。準備したことが良い結果につながる可能性が高いです。',
        '今年良い運勢を迎えることになるでしょう。努力するだけ良い結果を得ることができる時期です。',
        '全体的にポジティブなエネルギーが流れるでしょう。新しい機会が生まれ、成長できる時期になるでしょう。',
        '今年様々な面で発展を経験できるでしょう。準備された姿勢で機会を掴めば成功できるでしょう。',
        '今年あなたは運勢が良い時期を迎えます。この時期を起点に多くのことが良い方向に流れるでしょう。',
        '良いことが起こるでしょう。財運、健康、人間関係、事業などで前向きな変化を経験できるでしょう。',
        '今年様々な分野で成功する機会を迎えるでしょう。努力と準備がより重要になる時期です。',
        '良い運気が漂うでしょう。すべてのことが順調に進み、望む目標に向かって一歩ずつ進むことができるでしょう。',
        '今年は全体的に幸運な年になるでしょう。ポジティブな心構えで準備すれば良い結果を得られるでしょう。'
      ],
      'zh-CN': [
        '你将经历整体好运。在财富、健康、恋爱、事业、学业等各方面都会发生积极的变化。',
        '你在各个领域都会发生好事。你准备的一切很可能会带来好结果。',
        '你将迎来今年好运。这是一个你可以获得与努力相称的好结果的时期。',
        '整体正能量将流向你。新的机会会出现，这将是一个成长的时期。',
        '你可以在今年各个方面经历发展。如果你以准备好的态度抓住机会，你可以成功。',
        '今年你将迎来运势好的时期。从这个时期开始，很多事情都会朝着好的方向发展。',
        '好事会发生在你身上。你可以在财富、健康、人际关系、事业等方面经历积极的变化。',
        '你今年会有机会在各个领域取得成功。这是一个努力和准备变得更加重要的时期。',
        '好运能量将围绕着你。一切都会顺利进行，你可以朝着期望的目标前进。',
        '今年将是一个整体幸运的一年。以积极的心态和准备，你可以获得好结果。'
      ],
      'zh-TW': [
        '你將經歷整體好運。在財富、健康、戀愛、事業、學業等各方面都會發生積極的變化。',
        '你在各個領域都會發生好事。你準備的一切很可能會帶來好結果。',
        '你將迎來今年好運。這是一個你可以獲得與努力相稱的好結果的時期。',
        '整體正能量將流向你。新的機會會出現，這將是一個成長的時期。',
        '你可以在今年各個方面經歷發展。如果你以準備好的態度抓住機會，你可以成功。',
        '今年你將迎來運勢好的時期。從這個時期開始，很多事情都會朝著好的方向發展。',
        '好事會發生在你身上。你可以在財富、健康、人際關係、事業等方面經歷積極的變化。',
        '你今年會有機會在各個領域取得成功。這是一個努力和準備變得更加重要的時期。',
        '好運能量將圍繞著你。一切都會順利進行，你可以朝著期望的目標前進。',
        '今年將是一個整體幸運的一年。以積極的心態和準備，你可以獲得好結果。'
      ],
      vi: [
        'Bạn sẽ trải nghiệm vận may tổng thể tốt trong năm nay. Những thay đổi tích cực sẽ xảy ra ở tất cả các lĩnh vực: tài chính, sức khỏe, tình yêu, kinh doanh và học tập.',
        'Những điều tốt sẽ xảy ra với bạn trong nhiều lĩnh vực. Những gì bạn đã chuẩn bị sẽ có khả năng dẫn đến kết quả tốt.',
        'Bạn sẽ đón nhận vận may tốt trong năm nay. Đây là thời điểm bạn có thể đạt được kết quả tốt tương xứng với nỗ lực của mình.',
        'Năng lượng tích cực tổng thể sẽ chảy đến bạn. Cơ hội mới sẽ nảy sinh, và đây sẽ là thời điểm để phát triển.',
        'Bạn có thể trải nghiệm sự phát triển ở nhiều khía cạnh trong năm nay. Nếu bạn nắm bắt cơ hội với thái độ chuẩn bị, bạn có thể thành công.',
        'Năm nay bạn sẽ đón nhận một thời kỳ vận may tốt. Bắt đầu từ thời kỳ này, nhiều điều sẽ chảy theo hướng tốt.',
        'Những điều tốt sẽ xảy ra với bạn. Bạn có thể trải nghiệm những thay đổi tích cực trong tài chính, sức khỏe, mối quan hệ và kinh doanh.',
        'Bạn sẽ có cơ hội thành công trong nhiều lĩnh vực năm nay. Đây là thời điểm khi nỗ lực và chuẩn bị trở nên quan trọng hơn nữa.',
        'Năng lượng vận may tốt sẽ bao quanh bạn. Mọi thứ sẽ diễn ra suôn sẻ, và bạn có thể thực hiện các bước tiến tới mục tiêu mong muốn.',
        'Năm nay sẽ là một năm tổng thể may mắn. Với tư duy tích cực và sự chuẩn bị, bạn có thể đạt được kết quả tốt.'
      ],
      id: [
        'Anda akan mengalami keberuntungan keseluruhan yang baik tahun ini. Perubahan positif akan terjadi di semua bidang: kekayaan, kesehatan, cinta, bisnis, dan studi.',
        'Hal-hal baik akan terjadi pada Anda di berbagai bidang. Hal-hal yang telah Anda siapkan kemungkinan besar akan menghasilkan hasil yang baik.',
        'Anda akan menyambut keberuntungan baik tahun ini. Ini adalah waktu ketika Anda dapat mencapai hasil yang baik sebanding dengan upaya Anda.',
        'Energi positif keseluruhan akan mengalir kepada Anda. Peluang baru akan muncul, dan ini akan menjadi waktu untuk pertumbuhan.',
        'Anda dapat mengalami perkembangan di berbagai aspek tahun ini. Jika Anda memanfaatkan peluang dengan sikap yang siap, Anda dapat berhasil.',
        'Tahun ini Anda akan menyambut periode keberuntungan baik. Mulai dari periode ini, banyak hal akan mengalir ke arah yang baik.',
        'Hal-hal baik akan terjadi pada Anda. Anda dapat mengalami perubahan positif dalam kekayaan, kesehatan, hubungan, dan bisnis.',
        'Anda akan memiliki peluang untuk berhasil di berbagai bidang tahun ini. Ini adalah waktu ketika upaya dan persiapan menjadi lebih penting.',
        'Energi keberuntungan baik akan mengelilingi Anda. Semuanya akan berjalan lancar, dan Anda dapat mengambil langkah menuju tujuan yang diinginkan.',
        'Tahun ini akan menjadi tahun yang beruntung secara keseluruhan. Dengan pola pikir positif dan persiapan, Anda dapat mencapai hasil yang baik.'
      ]
    },
    emoji: '🌟',
    scoreRange: [80, 89],
    strengths: {
      ko: ['긍정적 에너지', '노력', '인내심', '계획성', '협조성', '적응력', '리더십', '창의성', '판단력', '목표 의식'],
      en: ['Positive Energy', 'Effort', 'Patience', 'Planning', 'Cooperation', 'Adaptability', 'Leadership', 'Creativity', 'Judgment', 'Goal Awareness'],
      ja: ['ポジティブなエネルギー', '努力', '忍耐', '計画性', '協調性', '適応力', 'リーダーシップ', '創造性', '判断力', '目標意識'],
      'zh-CN': ['积极能量', '努力', '耐心', '计划性', '合作性', '适应性', '领导力', '创造力', '判断力', '目标意识'],
      'zh-TW': ['積極能量', '努力', '耐心', '計畫性', '合作性', '適應性', '領導力', '創造力', '判斷力', '目標意識'],
      vi: ['Năng Lượng Tích Cực', 'Nỗ Lực', 'Kiên Nhẫn', 'Tính Kế Hoạch', 'Hợp Tác', 'Thích Ứng', 'Khả Năng Lãnh Đạo', 'Sáng Tạo', 'Khả Năng Phán Đoán', 'Ý Thức Mục Tiêu'],
      id: ['Energi Positif', 'Usaha', 'Kesabaran', 'Perencanaan', 'Kerjasama', 'Adaptabilitas', 'Kepemimpinan', 'Kreativitas', 'Penilaian', 'Kesadaran Tujuan']
    },
    recommendations: {
      ko: ['적극적인 도전', '계획 수립', '인간관계 확대', '자기계발', '건강 관리', '목표 설정', '시간 관리', '긍정적 사고', '협력 관계 구축', '성장 마인드셋'],
      en: ['Active Challenge', 'Planning', 'Expanding Relationships', 'Self-Development', 'Health Management', 'Goal Setting', 'Time Management', 'Positive Thinking', 'Building Cooperative Relationships', 'Growth Mindset'],
      ja: ['積極的な挑戦', '計画立案', '人間関係の拡大', '自己啓発', '健康管理', '目標設定', '時間管理', 'ポジティブな思考', '協力関係の構築', '成長マインドセット'],
      'zh-CN': ['积极挑战', '制定计划', '扩大人际关系', '自我发展', '健康管理', '设定目标', '时间管理', '积极思考', '建立合作关系', '成长思维'],
      'zh-TW': ['積極挑戰', '制定計畫', '擴大人際關係', '自我發展', '健康管理', '設定目標', '時間管理', '積極思考', '建立合作關係', '成長思維'],
      vi: ['Thử Thách Tích Cực', 'Lập Kế Hoạch', 'Mở Rộng Mối Quan Hệ', 'Phát Triển Bản Thân', 'Quản Lý Sức Khỏe', 'Thiết Lập Mục Tiêu', 'Quản Lý Thời Gian', 'Suy Nghĩ Tích Cực', 'Xây Dựng Mối Quan Hệ Hợp Tác', 'Tư Duy Phát Triển'],
      id: ['Tantangan Aktif', 'Perencanaan', 'Memperluas Hubungan', 'Pengembangan Diri', 'Manajemen Kesehatan', 'Penetapan Tujuan', 'Manajemen Waktu', 'Berpikir Positif', 'Membangun Hubungan Kerjasama', 'Mindset Pertumbuhan']
    },
    advice: {
      ko: [
        '올해 좋은 운세를 잡았습니다. 하지만 운만 믿지 말고 적극적인 노력과 준비를 함께 해야 합니다.',
        '여러 분야에서 기회가 생길 것입니다. 하지만 모든 것을 동시에 추구하기보다는 우선순위를 정해 집중하는 것이 좋습니다.',
        '좋은 운세를 활용하기 위해서는 주변 사람들과의 관계를 원만하게 유지하는 것이 중요합니다.',
        '재물, 건강, 연애, 사업, 학업 모든 면에서 좋은 일이 있을 것이므로 각 분야에 균형을 맞추는 것이 좋습니다.',
        '성공의 기운이 있으므로 도전적인 목표를 설정하고 적극적으로 나아가는 것을 권장합니다.',
        '좋은 운세를 유지하기 위해서는 감사하는 마음을 가지고 긍정적으로 생각하는 것이 중요합니다.',
        '모든 일이 순조롭게 진행될 것이지만, 방심하지 말고 꾸준히 노력하는 자세를 유지해야 합니다.',
        '여러 분야에서 성공할 수 있는 기회가 있을 것이므로 준비된 자세로 기회를 잡을 수 있도록 해야 합니다.',
        '좋은 운세를 바탕으로 더 큰 목표를 향해 나아가는 것을 권장합니다. 하지만 무리하지 않도록 주의해야 합니다.',
        '올해는 전반적으로 행운의 해가 될 것입니다. 긍정적인 에너지를 가지고 원하는 목표를 향해 노력하면 좋은 결과를 얻을 수 있을 것입니다.'
      ],
      en: [
        'You have caught good fortune this year. However, do not rely solely on luck; active effort and preparation are necessary.',
        'Opportunities will arise in various fields. However, rather than pursuing everything at once, it is good to prioritize and focus.',
        'To take advantage of good fortune, it is important to maintain smooth relationships with people around you.',
        'Good things will happen in all aspects: wealth, health, love, business, and studies, so it is good to balance each area.',
        'Since there is an energy of success, it is recommended to set challenging goals and move forward actively.',
        'To maintain good fortune, it is important to have a grateful heart and think positively.',
        'Everything will proceed smoothly, but you should not be careless and maintain an attitude of constant effort.',
        'There will be opportunities to succeed in various fields, so you must be prepared to seize opportunities.',
        'It is recommended to move toward bigger goals based on good fortune. However, be careful not to overdo it.',
        'This year will be an overall lucky year. With positive energy, you can move toward your desired goals and achieve good results.'
      ],
      ja: [
        '今年良い運勢を掴みました。しかし運だけを信じず、積極的な努力と準備をする必要があります。',
        '様々な分野で機会が生まれるでしょう。しかしすべてを同時に追求するよりも、優先順位を決めて集中することが良いでしょう。',
        '良い運勢を活用するためには、周囲の人々との関係を円滑に保つことが重要です。',
        '財運、健康、恋愛、事業、学業すべての面で良いことがあるので、各分野にバランスを取ることが良いでしょう。',
        '成功の気があるので、挑戦的な目標を設定し、積極的に進むことをお勧めします。',
        '良い運勢を維持するためには、感謝の気持ちを持ち、ポジティブに考えることが重要です。',
        'すべてのことが順調に進むでしょうが、油断せずに継続的に努力する姿勢を維持する必要があります。',
        '様々な分野で成功できる機会があるでしょうので、準備された姿勢で機会を掴むことができるようにすべきです。',
        '良い運勢を基に、より大きな目標に向かって進むことをお勧めします。しかし無理をしないように注意する必要があります。',
        '今年は全体的に幸運な年になるでしょう。ポジティブなエネルギーを持って、望む目標に向かって努力すれば、良い結果を得ることができるでしょう。'
      ],
      'zh-CN': [
        '今年你抓住了好运。但不要只依赖运气，需要积极的努力和准备。',
        '各个领域都会出现机会。但与其同时追求所有事情，不如确定优先级并集中精力。',
        '为了利用好运，保持与周围人的关系融洽很重要。',
        '财富、健康、恋爱、事业、学业等各方面都会有好事，所以平衡各个领域是好的。',
        '由于有成功的能量，建议设定挑战性的目标并积极前进。',
        '为了维持好运，保持感恩的心态和积极思考很重要。',
        '一切都会顺利进行，但不应大意，应保持持续努力的态度。',
        '会有在各个领域取得成功的机会，所以必须准备好抓住机会。',
        '建议基于好运朝着更大的目标前进。但要注意不要过度。',
        '今年将是整体幸运的一年。以积极的能量朝着期望的目标努力，你可以获得好结果。'
      ],
      'zh-TW': [
        '今年你抓住了好運。但不要只依賴運氣，需要積極的努力和準備。',
        '各個領域都會出現機會。但與其同時追求所有事情，不如確定優先級並集中精力。',
        '為了利用好運，保持與周圍人的關係融洽很重要。',
        '財富、健康、戀愛、事業、學業等各方面都會有好事，所以平衡各個領域是好的。',
        '由於有成功的能量，建議設定挑戰性的目標並積極前進。',
        '為了維持好運，保持感恩的心態和積極思考很重要。',
        '一切都會順利進行，但不應大意，應保持持續努力的態度。',
        '會在各個領域取得成功的機會，所以必須準備好抓住機會。',
        '建議基於好運朝著更大的目標前進。但要注意不要過度。',
        '今年將是整體幸運的一年。以積極的能量朝著期望的目標努力，你可以獲得好結果。'
      ],
      vi: [
        'Bạn đã bắt được vận may tốt trong năm nay. Tuy nhiên, đừng chỉ dựa vào may mắn; nỗ lực tích cực và chuẩn bị là cần thiết.',
        'Cơ hội sẽ nảy sinh trong nhiều lĩnh vực. Tuy nhiên, thay vì theo đuổi mọi thứ cùng một lúc, tốt hơn là ưu tiên và tập trung.',
        'Để tận dụng vận may tốt, điều quan trọng là duy trì mối quan hệ tốt với những người xung quanh bạn.',
        'Những điều tốt sẽ xảy ra ở tất cả các khía cạnh: tài chính, sức khỏe, tình yêu, kinh doanh và học tập, vì vậy tốt hơn là cân bằng từng lĩnh vực.',
        'Vì có năng lượng thành công, nên đặt mục tiêu thách thức và tiến lên tích cực.',
        'Để duy trì vận may tốt, điều quan trọng là có lòng biết ơn và suy nghĩ tích cực.',
        'Mọi thứ sẽ diễn ra suôn sẻ, nhưng bạn không nên cẩu thả và duy trì thái độ nỗ lực không ngừng.',
        'Sẽ có cơ hội để thành công trong nhiều lĩnh vực, vì vậy bạn phải sẵn sàng nắm bắt cơ hội.',
        'Nên tiến tới các mục tiêu lớn hơn dựa trên vận may tốt. Tuy nhiên, hãy cẩn thận không làm quá sức.',
        'Năm nay sẽ là một năm tổng thể may mắn. Với năng lượng tích cực, bạn có thể tiến tới các mục tiêu mong muốn và đạt được kết quả tốt.'
      ],
      id: [
        'Anda telah menangkap keberuntungan baik tahun ini. Namun, jangan hanya mengandalkan keberuntungan; upaya aktif dan persiapan diperlukan.',
        'Peluang akan muncul di berbagai bidang. Namun, daripada mengejar segalanya sekaligus, lebih baik memprioritaskan dan fokus.',
        'Untuk memanfaatkan keberuntungan baik, penting untuk mempertahankan hubungan yang mulus dengan orang-orang di sekitar Anda.',
        'Hal-hal baik akan terjadi di semua aspek: kekayaan, kesehatan, cinta, bisnis, dan studi, jadi baik untuk menyeimbangkan setiap area.',
        'Karena ada energi kesuksesan, disarankan untuk menetapkan tujuan yang menantang dan bergerak maju secara aktif.',
        'Untuk mempertahankan keberuntungan baik, penting untuk memiliki hati yang bersyukur dan berpikir positif.',
        'Semuanya akan berjalan lancar, tetapi Anda tidak boleh ceroboh dan mempertahankan sikap usaha konstan.',
        'Akan ada peluang untuk berhasil di berbagai bidang, jadi Anda harus siap untuk memanfaatkan peluang.',
        'Disarankan untuk bergerak menuju tujuan yang lebih besar berdasarkan keberuntungan baik. Namun, berhati-hatilah untuk tidak berlebihan.',
        'Tahun ini akan menjadi tahun yang beruntung secara keseluruhan. Dengan energi positif, Anda dapat bergerak menuju tujuan yang diinginkan dan mencapai hasil yang baik.'
      ]
    },
    fortune: {
      wealth: {
        ko: [
          `${getFutureMonthShort(2)}에 재물 관련 좋은 기회가 있을 것입니다. 이 시기에 적극적으로 재무 계획을 세우시기 바랍니다.`,
          `${getFutureMonthShort(4)}에 예상치 못한 수입 증대가 있을 수 있습니다. 하지만 계획적으로 관리하시기 바랍니다.`,
          `재물운이 점진적으로 상승할 것으로 보입니다. 특히 ${getFutureMonthShort(6)}부터는 더 큰 기회가 있을 것입니다.`,
          `${getFutureMonthShort(3)}에 재물 관련 긍정적인 변화가 있을 것입니다. 이 시기를 놓치지 않고 행동하시기 바랍니다.`,
          `올해 재물운은 전반적으로 안정적입니다. 하지만 ${getFutureMonthShort(5)}에는 특히 주의 깊게 관리하시기 바랍니다.`,
          `${getFutureMonthShort(4)}에 재물 관련 작은 성공이 있을 것입니다. 이 시기에는 새로운 수입원을 모색하는 것이 좋습니다.`,
          `올해 재물운은 점진적으로 개선될 것입니다. ${getFutureMonthShort(7)}부터는 더 큰 발전을 기대할 수 있습니다.`,
          `${getFutureMonthShort(1)}부터 재물의 흐름이 좋아지기 시작할 것입니다. 이 시기부터는 신중하게 투자하시기 바랍니다.`,
          `${getFutureMonthShort(8)}부터는 재물운이 더욱 활성화될 것입니다. 이 시기에는 중장기 계획을 세우는 것이 좋습니다.`,
          `${getFutureMonthShort(9)}에 재물 관련 좋은 소식이 있을 수 있습니다. 하지만 서두르지 말고 신중하게 판단하시기 바랍니다.`
        ],
        get en() {
          return [
            `In ${getFutureMonthShortEn(2)}, there will be a good opportunity related to wealth. During this period, it is recommended to actively make financial plans.`,
            `In ${getFutureMonthShortEn(4)}, there may be unexpected income increases. However, manage them systematically.`,
            `Wealth fortune will gradually rise. Especially from ${getFutureMonthShortEn(6)}, there will be greater opportunities.`,
            `In ${getFutureMonthShortEn(3)}, there will be positive changes related to wealth. Do not miss this period and act.`,
            `This year's wealth fortune is generally stable. However, in ${getFutureMonthShortEn(5)}, manage it especially carefully.`,
            `In ${getFutureMonthShortEn(4)}, there will be small success related to wealth. During this period, it is good to seek new sources of income.`,
            `This year's wealth fortune will improve gradually. From ${getFutureMonthShortEn(7)}, greater development can be expected.`,
            `From ${getFutureMonthShortEn(1)}, the flow of wealth will begin to improve. From this period, invest carefully.`,
            `From ${getFutureMonthShortEn(8)}, wealth fortune will be more activated. During this period, it is good to make medium to long-term plans.`,
            `In ${getFutureMonthShortEn(9)}, there may be good news related to wealth. However, do not rush and make careful judgments.`
          ];
        },
        get ja() {
          return [
            `${getFutureMonthShortJa(2)}に財運に関する良い機会があるでしょう。この時期に積極的に財務計画を立てることをお勧めします。`,
            `${getFutureMonthShortJa(4)}に予期しない収入増加があるかもしれません。しかし、計画的に管理することをお勧めします。`,
            `財運が徐々に上昇することが予想されます。特に${getFutureMonthShortJa(6)}からはより大きな機会があるでしょう。`,
            `${getFutureMonthShortJa(3)}に財運に関する前向きな変化があるでしょう。この時期を逃さず行動することをお勧めします。`,
            `今年の財運は全体的に安定しています。しかし、${getFutureMonthShortJa(5)}には特に注意深く管理することをお勧めします。`,
            `${getFutureMonthShortJa(4)}に財運に関する小さな成功があるでしょう。この時期には新しい収入源を模索することが良いでしょう。`,
            `今年の財運は段階的に改善するでしょう。${getFutureMonthShortJa(7)}からはより大きな発展が期待できます。`,
            `${getFutureMonthShortJa(1)}から財運の流れが良くなり始めるでしょう。この時期からは慎重に投資することをお勧めします。`,
            `${getFutureMonthShortJa(8)}からは財運がより活性化するでしょう。この時期には中長期計画を立てることが良いでしょう。`,
            `${getFutureMonthShortJa(9)}に財運に関する良い知らせがあるかもしれません。しかし、急がず慎重に判断することをお勧めします。`
          ];
        },
        get 'zh-CN'() {
          return [
            `${getFutureMonthShortZhCN(2)}会有与财富相关的好机会。在这个时期，建议积极制定财务计划。`,
            `${getFutureMonthShortZhCN(4)}可能会有意外收入增加。但要系统地管理它们。`,
            `财运将逐步上升。特别是从${getFutureMonthShortZhCN(6)}开始，将会有更大的机会。`,
            `${getFutureMonthShortZhCN(3)}会有与财富相关的积极变化。不要错过这个时期，要积极行动。`,
            `今年的财运总体稳定。但在${getFutureMonthShortZhCN(5)}，要特别仔细地管理。`,
            `${getFutureMonthShortZhCN(4)}会有与财富相关的小成功。在这个时期，寻找新的收入来源是好的。`,
            `今年的财运将逐步改善。从${getFutureMonthShortZhCN(7)}开始，可以期待更大的发展。`,
            `从${getFutureMonthShortZhCN(1)}开始，财富流将开始改善。从这个时期开始，要谨慎投资。`,
            `从${getFutureMonthShortZhCN(8)}开始，财运将更加活跃。在这个时期，制定中长期计划是好的。`,
            `${getFutureMonthShortZhCN(9)}可能会有与财富相关的好消息。但不要匆忙，要谨慎判断。`
          ];
        },
        get 'zh-TW'() {
          return [
            `${getFutureMonthShortZhTW(2)}會有與財富相關的好機會。在這個時期，建議積極制定財務計劃。`,
            `${getFutureMonthShortZhTW(4)}可能會有意收入增加。但要系統地管理它們。`,
            `財運將逐步上升。特別是從${getFutureMonthShortZhTW(6)}開始，將會有更大的機會。`,
            `${getFutureMonthShortZhTW(3)}會有與財富相關的積極變化。不要錯過這個時期，要積極行動。`,
            `今年的財運總體穩定。但在${getFutureMonthShortZhTW(5)}，要特別仔細地管理。`,
            `${getFutureMonthShortZhTW(4)}會有與財富相關的小成功。在這個時期，尋找新的收入來源是好的。`,
            `今年的財運將逐步改善。從${getFutureMonthShortZhTW(7)}開始，可以期待更大的發展。`,
            `從${getFutureMonthShortZhTW(1)}開始，財富流將開始改善。從這個時期開始，要謹慎投資。`,
            `從${getFutureMonthShortZhTW(8)}開始，財運將更加活躍。在這個時期，制定中長期計劃是好的。`,
            `${getFutureMonthShortZhTW(9)}可能會有與財富相關的好消息。但不要匆忙，要謹慎判斷。`
          ];
        },
        get vi() {
          return [
            `Vào ${getFutureMonthShortVi(2)}, sẽ có cơ hội tốt liên quan đến tài chính. Trong thời kỳ này, nên tích cực lập kế hoạch tài chính.`,
            `Vào ${getFutureMonthShortVi(4)}, có thể có sự tăng thu nhập bất ngờ. Tuy nhiên, hãy quản lý chúng một cách có hệ thống.`,
            `Vận tài chính sẽ tăng dần. Đặc biệt từ ${getFutureMonthShortVi(6)}, sẽ có cơ hội lớn hơn.`,
            `Vào ${getFutureMonthShortVi(3)}, sẽ có những thay đổi tích cực liên quan đến tài chính. Đừng bỏ lỡ thời kỳ này và hãy hành động.`,
            `Vận tài chính năm nay nói chung là ổn định. Tuy nhiên, vào ${getFutureMonthShortVi(5)}, hãy quản lý nó đặc biệt cẩn thận.`,
            `Vào ${getFutureMonthShortVi(4)}, sẽ có thành công nhỏ liên quan đến tài chính. Trong thời kỳ này, nên tìm kiếm nguồn thu nhập mới.`,
            `Vận tài chính năm nay sẽ cải thiện dần dần. Từ ${getFutureMonthShortVi(7)}, có thể mong đợi phát triển lớn hơn.`,
            `Từ ${getFutureMonthShortVi(1)}, dòng chảy tài chính sẽ bắt đầu cải thiện. Từ thời kỳ này, hãy đầu tư cẩn thận.`,
            `Từ ${getFutureMonthShortVi(8)}, vận tài chính sẽ được kích hoạt nhiều hơn. Trong thời kỳ này, nên lập kế hoạch trung đến dài hạn.`,
            `Vào ${getFutureMonthShortVi(9)}, có thể có tin tốt liên quan đến tài chính. Tuy nhiên, đừng vội vàng và hãy đưa ra quyết định cẩn thận.`
          ];
        },
        get id() {
          return [
            `Pada ${getFutureMonthShortId(2)}, akan ada peluang baik terkait kekayaan. Selama periode ini, disarankan untuk secara aktif membuat rencana keuangan.`,
            `Pada ${getFutureMonthShortId(4)}, mungkin ada peningkatan pendapatan yang tidak terduga. Namun, kelola mereka secara sistematis.`,
            `Keberuntungan kekayaan akan meningkat secara bertahap. Terutama dari ${getFutureMonthShortId(6)}, akan ada peluang yang lebih besar.`,
            `Pada ${getFutureMonthShortId(3)}, akan ada perubahan positif terkait kekayaan. Jangan lewatkan periode ini dan bertindaklah.`,
            `Keberuntungan kekayaan tahun ini umumnya stabil. Namun, pada ${getFutureMonthShortId(5)}, kelola dengan sangat hati-hati.`,
            `Pada ${getFutureMonthShortId(4)}, akan ada keberhasilan kecil terkait kekayaan. Selama periode ini, baik untuk mencari sumber pendapatan baru.`,
            `Keberuntungan kekayaan tahun ini akan membaik secara bertahap. Dari ${getFutureMonthShortId(7)}, perkembangan yang lebih besar dapat diharapkan.`,
            `Dari ${getFutureMonthShortId(1)}, aliran kekayaan akan mulai membaik. Dari periode ini, investasikan dengan hati-hati.`,
            `Dari ${getFutureMonthShortId(8)}, keberuntungan kekayaan akan lebih diaktifkan. Selama periode ini, baik untuk membuat rencana menengah hingga jangka panjang.`,
            `Pada ${getFutureMonthShortId(9)}, mungkin ada berita baik terkait kekayaan. Namun, jangan terburu-buru dan buat penilaian yang hati-hati.`
          ];
        }
      },
      health: {
        ko: [
          `올해 건강운은 전반적으로 양호할 것으로 예상됩니다. 특히 ${getFutureMonthShort(2)}부터는 더욱 좋아질 것입니다.`,
          `${getFutureMonthShort(3)}에 건강 관련 긍정적인 변화가 있을 것입니다. 이 시기부터는 생활 습관 개선을 시작하시기 바랍니다.`,
          `${getFutureMonthShort(5)}부터 건강운이 개선될 것입니다. 이 시기에는 정기 검진을 권장합니다.`,
          `${getFutureMonthShort(1)}부터 건강 관리에 더욱 신경 쓰시기 바랍니다. 작은 증상이라도 무시하지 않는 것이 좋습니다.`,
          `올해 건강운은 안정적일 것입니다. 하지만 ${getFutureMonthShort(6)}에는 몸 상태를 주의 깊게 살펴봐야 할 수도 있습니다.`,
          `${getFutureMonthShort(4)}에는 건강 관련 새로운 시작을 할 수 있는 좋은 시기입니다. 새로운 운동 루틴을 시작해보세요.`,
          `올해 건강운은 점진적으로 개선될 것입니다. ${getFutureMonthShort(7)}부터는 더 큰 변화를 경험할 수 있을 것입니다.`,
          `${getFutureMonthShort(2)}에 건강 관련 좋은 소식이 있을 것입니다. 이 시기를 놓치지 않고 건강 관리를 시작하시기 바랍니다.`,
          `${getFutureMonthShort(8)}부터는 건강운이 더욱 좋아질 것입니다. 이 시기에는 전반적인 체력 향상이 예상됩니다.`,
          `${getFutureMonthShort(9)}에 건강 관련 긍정적인 전환점이 있을 수 있습니다. 건강한 생활 습관을 유지하시기 바랍니다.`
        ],
        get en() {
          return [
            `This year's health fortune is expected to be generally good. Especially from ${getFutureMonthShortEn(2)}, it will improve even more.`,
            `In ${getFutureMonthShortEn(3)}, there will be positive changes related to health. From this period, start improving lifestyle habits.`,
            `From ${getFutureMonthShortEn(5)}, health fortune will improve. During this period, regular checkups are recommended.`,
            `From ${getFutureMonthShortEn(1)}, pay more attention to health management. It is better not to ignore even small symptoms.`,
            `This year's health fortune will be stable. However, in ${getFutureMonthShortEn(6)}, you may need to carefully examine your physical condition.`,
            `In ${getFutureMonthShortEn(4)}, there is a good time to start something new related to health. Try starting new exercise routines.`,
            `This year's health fortune will improve gradually. From ${getFutureMonthShortEn(7)}, you can expect greater changes.`,
            `In ${getFutureMonthShortEn(2)}, there will be good news related to health. Do not miss this period and start health management.`,
            `From ${getFutureMonthShortEn(8)}, health fortune will improve even more. During this period, overall physical strength improvement is expected.`,
            `In ${getFutureMonthShortEn(9)}, there may be a positive turning point related to health. Maintain healthy lifestyle habits.`
          ];
        },
        get ja() {
          return [
            `今年の健康運は全体的に良好であることが予想されます。特に${getFutureMonthShortJa(2)}からはさらに良くなるでしょう。`,
            `${getFutureMonthShortJa(3)}に健康に関する前向きな変化があるでしょう。この時期からは生活習慣改善を始めることをお勧めします。`,
            `${getFutureMonthShortJa(5)}から健康運が改善するでしょう。この時期には定期健診をお勧めします。`,
            `${getFutureMonthShortJa(1)}から健康管理により神経を使うことをお勧めします。小さな症状でも無視しないことが良いでしょう。`,
            `今年の健康運は安定するでしょう。しかし、${getFutureMonthShortJa(6)}には体の状態を注意深く見る必要があるかもしれません。`,
            `${getFutureMonthShortJa(4)}には健康関連の新しい始まりをすることができる良い時期です。新しい運動ルーティンを始めてみてください。`,
            `今年の健康運は段階的に改善するでしょう。${getFutureMonthShortJa(7)}からはより大きな変化を経験できるでしょう。`,
            `${getFutureMonthShortJa(2)}に健康に関する良い知らせがあるでしょう。この時期を逃さず健康管理を始めることをお勧めします。`,
            `${getFutureMonthShortJa(8)}からは健康運がさらに良くなるでしょう。この時期には全体的な体力向上が予想されます。`,
            `${getFutureMonthShortJa(9)}に健康に関する前向きな転換点があるかもしれません。健康的な生活習慣を維持することをお勧めします。`
          ];
        },
        get 'zh-CN'() {
          return [
            `今年的健康运预计总体良好。特别是从${getFutureMonthShortZhCN(2)}开始，将会进一步改善。`,
            `${getFutureMonthShortZhCN(3)}会有与健康相关的积极变化。从这个时期开始，开始改善生活习惯。`,
            `从${getFutureMonthShortZhCN(5)}开始，健康运将改善。在这个时期，建议定期检查。`,
            `从${getFutureMonthShortZhCN(1)}开始，需要更加关注健康管理。即使是很小的症状也不要忽视。`,
            `今年的健康运将稳定。但在${getFutureMonthShortZhCN(6)}，你可能需要仔细检查身体状况。`,
            `${getFutureMonthShortZhCN(4)}是开始与健康相关的新事物的好时机。尝试开始新的运动例行程序。`,
            `今年的健康运将逐步改善。从${getFutureMonthShortZhCN(7)}开始，可以期待更大的变化。`,
            `${getFutureMonthShortZhCN(2)}会有与健康相关的好消息。不要错过这个时期，开始健康管理。`,
            `从${getFutureMonthShortZhCN(8)}开始，健康运将进一步改善。在这个时期，预计整体体力将提高。`,
            `${getFutureMonthShortZhCN(9)}可能会有与健康相关的积极转折点。保持健康的生活习惯。`
          ];
        },
        get 'zh-TW'() {
          return [
            `今年的健康運預計總體良好。特別是從${getFutureMonthShortZhTW(2)}開始，將會進一步改善。`,
            `${getFutureMonthShortZhTW(3)}會有與健康相關的積極變化。從這個時期開始，開始改善生活習慣。`,
            `從${getFutureMonthShortZhTW(5)}開始，健康運將改善。在這個時期，建議定期檢查。`,
            `從${getFutureMonthShortZhTW(1)}開始，需要更加關注健康管理。即使是很小的症狀也不要忽視。`,
            `今年的健康運將穩定。但在${getFutureMonthShortZhTW(6)}，你可能需要仔細檢查身體狀況。`,
            `${getFutureMonthShortZhTW(4)}是開始與健康相關的新事物的好時機。嘗試開始新的運動例行程序。`,
            `今年的健康運將逐步改善。從${getFutureMonthShortZhTW(7)}開始，可以期待更大的變化。`,
            `${getFutureMonthShortZhTW(2)}會有與健康相關的好消息。不要錯過這個時期，開始健康管理。`,
            `從${getFutureMonthShortZhTW(8)}開始，健康運將進一步改善。在這個時期，預計整體體力將提高。`,
            `${getFutureMonthShortZhTW(9)}可能會有與健康相關的積極轉折點。保持健康的生活習慣。`
          ];
        },
        get vi() {
          return [
            `Vận sức khỏe năm nay được dự kiến sẽ tốt về tổng thể. Đặc biệt từ ${getFutureMonthShortVi(2)}, sẽ cải thiện hơn nữa.`,
            `Vào ${getFutureMonthShortVi(3)}, sẽ có những thay đổi tích cực liên quan đến sức khỏe. Từ thời kỳ này, hãy bắt đầu cải thiện thói quen sống.`,
            `Từ ${getFutureMonthShortVi(5)}, vận sức khỏe sẽ cải thiện. Trong thời kỳ này, nên kiểm tra sức khỏe định kỳ.`,
            `Từ ${getFutureMonthShortVi(1)}, nên chú ý hơn đến việc quản lý sức khỏe. Tốt hơn là đừng bỏ qua ngay cả những triệu chứng nhỏ.`,
            `Vận sức khỏe năm nay sẽ ổn định. Tuy nhiên, vào ${getFutureMonthShortVi(6)}, bạn có thể cần kiểm tra tình trạng cơ thể cẩn thận.`,
            `Vào ${getFutureMonthShortVi(4)}, có thời điểm tốt để bắt đầu điều gì đó mới liên quan đến sức khỏe. Hãy thử bắt đầu các bài tập mới.`,
            `Vận sức khỏe năm nay sẽ cải thiện dần dần. Từ ${getFutureMonthShortVi(7)}, bạn có thể mong đợi những thay đổi lớn hơn.`,
            `Vào ${getFutureMonthShortVi(2)}, sẽ có tin tốt liên quan đến sức khỏe. Đừng bỏ lỡ thời kỳ này và hãy bắt đầu quản lý sức khỏe.`,
            `Từ ${getFutureMonthShortVi(8)}, vận sức khỏe sẽ cải thiện hơn nữa. Trong thời kỳ này, sự cải thiện thể lực tổng thể được mong đợi.`,
            `Vào ${getFutureMonthShortVi(9)}, có thể có bước ngoặt tích cực liên quan đến sức khỏe. Duy trì thói quen sống lành mạnh.`
          ];
        },
        get id() {
          return [
            `Keberuntungan kesehatan tahun ini diperkirakan akan baik secara keseluruhan. Terutama dari ${getFutureMonthShortId(2)}, akan meningkat lebih lanjut.`,
            `Pada ${getFutureMonthShortId(3)}, akan ada perubahan positif yang terkait kesehatan. Dari periode ini, mulailah meningkatkan kebiasaan gaya hidup.`,
            `Dari ${getFutureMonthShortId(5)}, keberuntungan kesehatan akan membaik. Selama periode ini, pemeriksaan rutin direkomendasikan.`,
            `Dari ${getFutureMonthShortId(1)}, perhatikan lebih pada manajemen kesehatan. Lebih baik tidak mengabaikan bahkan gejala kecil.`,
            `Keberuntungan kesehatan tahun ini akan stabil. Namun, pada ${getFutureMonthShortId(6)}, Anda mungkin perlu memeriksa kondisi fisik dengan teliti.`,
            `Pada ${getFutureMonthShortId(4)}, ada waktu yang baik untuk memulai sesuatu yang baru terkait kesehatan. Coba mulai rutinitas latihan baru.`,
            `Keberuntungan kesehatan tahun ini akan membaik secara bertahap. Dari ${getFutureMonthShortId(7)}, Anda dapat mengharapkan perubahan yang lebih besar.`,
            `Pada ${getFutureMonthShortId(2)}, akan ada berita baik terkait kesehatan. Jangan lewatkan periode ini dan mulailah manajemen kesehatan.`,
            `Dari ${getFutureMonthShortId(8)}, keberuntungan kesehatan akan membaik lebih lanjut. Selama periode ini, peningkatan kekuatan fisik secara keseluruhan diharapkan.`,
            `Pada ${getFutureMonthShortId(9)}, mungkin ada titik balik positif terkait kesehatan. Pertahankan kebiasaan gaya hidup sehat.`
          ];
        }
      },
      love: {
        ko: [
          `${getFutureMonthShort(3)}에 좋은 인연을 만날 가능성이 높습니다. 이 시기에는 적극적으로 만남을 추구하는 것이 좋습니다.`,
          `${getFutureMonthShort(5)}부터 연애운이 개선될 것입니다. 이 시기에는 새로운 인연을 만날 확률이 높습니다.`,
          `${getFutureMonthShort(2)}에 연애 관련 긍정적인 변화가 있을 것입니다. 기존 관계가 있다면 더욱 발전할 수 있습니다.`,
          `올해 연애운은 전반적으로 좋은 편입니다. 특히 ${getFutureMonthShort(6)}부터는 더 큰 변화를 경험할 수 있을 것입니다.`,
          `${getFutureMonthShort(4)}에 만족스러운 인연을 만날 수 있는 기회가 있을 것입니다. 이 시기를 놓치지 않도록 주의하시기 바랍니다.`,
          `${getFutureMonthShort(8)}부터는 연애운이 더욱 활성화될 것입니다. 이 시기에는 새로운 시작을 할 수 있습니다.`,
          `${getFutureMonthShort(1)}부터 연애운이 좋아지기 시작할 것입니다. 이 시기부터는 인간관계에 더욱 적극적으로 나서는 것이 좋습니다.`,
          `올해 연애운은 점진적으로 개선될 것입니다. ${getFutureMonthShort(7)}부터는 더 큰 발전을 기대할 수 있습니다.`,
          `${getFutureMonthShort(9)}에 연애 관련 긍정적인 전환점이 있을 수 있습니다. 긍정적인 변화를 위해 노력하시기 바랍니다.`,
          `올해 연애운은 안정적이면서도 발전적일 것입니다. ${getFutureMonthShort(10)}부터는 더욱 좋은 결과를 얻을 수 있을 것입니다.`
        ],
        get en() {
          return [
            `In ${getFutureMonthShortEn(3)}, there is a high possibility of meeting a good connection. During this period, it is good to actively seek meetings.`,
            `From ${getFutureMonthShortEn(5)}, love fortune will improve. During this period, the probability of meeting a new connection is high.`,
            `In ${getFutureMonthShortEn(2)}, there will be positive changes related to love. If you have an existing relationship, it can develop further.`,
            `This year's love fortune is generally good. Especially from ${getFutureMonthShortEn(6)}, you can experience greater changes.`,
            `In ${getFutureMonthShortEn(4)}, there will be an opportunity to meet a satisfying person. Be careful not to miss this period.`,
            `From ${getFutureMonthShortEn(8)}, love fortune will be more activated. During this period, you can make a new start.`,
            `From ${getFutureMonthShortEn(1)}, love fortune will begin to improve. From this period, it is good to be more active in relationships.`,
            `This year's love fortune will improve gradually. From ${getFutureMonthShortEn(7)}, greater development can be expected.`,
            `In ${getFutureMonthShortEn(9)}, there may be a positive turning point related to love. Work hard for positive changes.`,
            `This year's love fortune will be stable and progressive. From ${getFutureMonthShortEn(10)}, even better results can be achieved.`
          ];
        },
        get ja() {
          return [
            `${getFutureMonthShortJa(3)}に良い縁に会う可能性が高いでしょう。この時期には積極的に出会いを求めることが良いでしょう。`,
            `${getFutureMonthShortJa(5)}から恋愛運が改善するでしょう。この時期には新しい縁に会う確率が高いでしょう。`,
            `${getFutureMonthShortJa(2)}に恋愛に関する前向きな変化があるでしょう。既存の関係があればさらに発展できるでしょう。`,
            `今年の恋愛運は全体的に良い方です。特に${getFutureMonthShortJa(6)}からはより大きな変化を経験できるでしょう。`,
            `${getFutureMonthShortJa(4)}に満足のいく人に会うことができる機会があるでしょう。この時期を逃さないように注意することをお勧めします。`,
            `${getFutureMonthShortJa(8)}からは恋愛運がより活性化するでしょう。この時期には新しい始まりをすることができます。`,
            `${getFutureMonthShortJa(1)}から恋愛運が良くなり始めるでしょう。この時期からは人間関係により積極的に出ることが良いでしょう。`,
            `今年の恋愛運は段階的に改善するでしょう。${getFutureMonthShortJa(7)}からはより大きな発展が期待できます。`,
            `${getFutureMonthShortJa(9)}に恋愛に関する前向きな転換点があるかもしれません。前向きな変化のために努力することをお勧めします。`,
            `今年の恋愛運は安定しながらも発展的でしょう。${getFutureMonthShortJa(10)}からはさらに良い結果を得ることができるでしょう。`
          ];
        },
        get 'zh-CN'() {
          return [
            `${getFutureMonthShortZhCN(3)}遇到良缘的可能性很高。在这个时期，积极寻求相遇是好的。`,
            `从${getFutureMonthShortZhCN(5)}开始，恋爱运将改善。在这个时期，遇到新缘分的概率很高。`,
            `${getFutureMonthShortZhCN(2)}会有与恋爱相关的积极变化。如果你有现有关系，可以进一步发展。`,
            `今年的恋爱运总体良好。特别是从${getFutureMonthShortZhCN(6)}开始，你可以体验更大的变化。`,
            `${getFutureMonthShortZhCN(4)}会有遇到令人满意的人的机会。注意不要错过这个时期。`,
            `从${getFutureMonthShortZhCN(8)}开始，恋爱运将更加活跃。在这个时期，你可以重新开始。`,
            `从${getFutureMonthShortZhCN(1)}开始，恋爱运将开始改善。从这个时期开始，在人际关系中更加主动是好的。`,
            `今年的恋爱运将逐步改善。从${getFutureMonthShortZhCN(7)}开始，可以期待更大的发展。`,
            `${getFutureMonthShortZhCN(9)}可能会有与恋爱相关的积极转折点。努力实现积极的变化。`,
            `今年的恋爱运将稳定且进步。从${getFutureMonthShortZhCN(10)}开始，可以获得更好的结果。`
          ];
        },
        get 'zh-TW'() {
          return [
            `${getFutureMonthShortZhTW(3)}遇到良緣的可能性很高。在這個時期，積極尋求相遇是好的。`,
            `從${getFutureMonthShortZhTW(5)}開始，戀愛運將改善。在這個時期，遇到新緣分的概率很高。`,
            `${getFutureMonthShortZhTW(2)}會有與戀愛相關的積極變化。如果你有現有關係，可以進一步發展。`,
            `今年的戀愛運總體良好。特別是從${getFutureMonthShortZhTW(6)}開始，你可以體驗更大的變化。`,
            `${getFutureMonthShortZhTW(4)}會有遇到令人滿意的人的機會。注意不要錯過這個時期。`,
            `從${getFutureMonthShortZhTW(8)}開始，戀愛運將更加活躍。在這個時期，你可以重新開始。`,
            `從${getFutureMonthShortZhTW(1)}開始，戀愛運將開始改善。從這個時期開始，在人際關係中更加主動是好的。`,
            `今年的戀愛運將逐步改善。從${getFutureMonthShortZhTW(7)}開始，可以期待更大的發展。`,
            `${getFutureMonthShortZhTW(9)}可能會有與戀愛相關的積極轉折點。努力實現積極的變化。`,
            `今年的戀愛運將穩定且進步。從${getFutureMonthShortZhTW(10)}開始，可以獲得更好的結果。`
          ];
        },
        get vi() {
          return [
            `Vào ${getFutureMonthShortVi(3)}, khả năng cao là sẽ gặp được mối duyên tốt. Trong thời kỳ này, nên tích cực tìm kiếm các cuộc gặp gỡ.`,
            `Từ ${getFutureMonthShortVi(5)}, vận tình yêu sẽ cải thiện. Trong thời kỳ này, khả năng gặp được mối duyên mới là cao.`,
            `Vào ${getFutureMonthShortVi(2)}, sẽ có những thay đổi tích cực liên quan đến tình yêu. Nếu bạn có một mối quan hệ hiện tại, nó có thể phát triển thêm.`,
            `Vận tình yêu năm nay nói chung là tốt. Đặc biệt từ ${getFutureMonthShortVi(6)}, bạn có thể trải nghiệm những thay đổi lớn hơn.`,
            `Vào ${getFutureMonthShortVi(4)}, sẽ có cơ hội gặp người thỏa mãn. Hãy cẩn thận đừng bỏ lỡ thời kỳ này.`,
            `Từ ${getFutureMonthShortVi(8)}, vận tình yêu sẽ được kích hoạt nhiều hơn. Trong thời kỳ này, bạn có thể bắt đầu lại.`,
            `Từ ${getFutureMonthShortVi(1)}, vận tình yêu sẽ bắt đầu cải thiện. Từ thời kỳ này, nên tích cực hơn trong các mối quan hệ.`,
            `Vận tình yêu năm nay sẽ cải thiện dần dần. Từ ${getFutureMonthShortVi(7)}, có thể mong đợi sự phát triển lớn hơn.`,
            `Vào ${getFutureMonthShortVi(9)}, có thể có bước ngoặt tích cực liên quan đến tình yêu. Hãy nỗ lực vì những thay đổi tích cực.`,
            `Vận tình yêu năm nay sẽ ổn định và tiến bộ. Từ ${getFutureMonthShortVi(10)}, có thể đạt được kết quả tốt hơn.`
          ];
        },
        get id() {
          return [
            `Pada ${getFutureMonthShortId(3)}, ada kemungkinan tinggi bertemu jodoh yang baik. Selama periode ini, baik untuk secara aktif mencari pertemuan.`,
            `Dari ${getFutureMonthShortId(5)}, keberuntungan cinta akan membaik. Selama periode ini, kemungkinan bertemu jodoh baru tinggi.`,
            `Pada ${getFutureMonthShortId(2)}, akan ada perubahan positif terkait cinta. Jika Anda memiliki hubungan yang ada, dapat berkembang lebih lanjut.`,
            `Keberuntungan cinta tahun ini umumnya baik. Terutama dari ${getFutureMonthShortId(6)}, Anda dapat mengalami perubahan yang lebih besar.`,
            `Pada ${getFutureMonthShortId(4)}, akan ada peluang untuk bertemu orang yang memuaskan. Berhati-hatilah untuk tidak melewatkan periode ini.`,
            `Dari ${getFutureMonthShortId(8)}, keberuntungan cinta akan lebih diaktifkan. Selama periode ini, Anda dapat memulai yang baru.`,
            `Dari ${getFutureMonthShortId(1)}, keberuntungan cinta akan mulai membaik. Dari periode ini, baik untuk lebih aktif dalam hubungan.`,
            `Keberuntungan cinta tahun ini akan membaik secara bertahap. Dari ${getFutureMonthShortId(7)}, perkembangan yang lebih besar dapat diharapkan.`,
            `Pada ${getFutureMonthShortId(9)}, mungkin ada titik balik positif terkait cinta. Berusahalah untuk perubahan positif.`,
            `Keberuntungan cinta tahun ini akan stabil dan progresif. Dari ${getFutureMonthShortId(10)}, hasil yang bahkan lebih baik dapat dicapai.`
          ];
        }
      },
      business: {
        ko: [
          `${getFutureMonthShort(3)}에 사업 관련 좋은 기회가 있을 것입니다. 이 시기에 새로운 프로젝트를 시작하는 것을 권장합니다.`,
          `${getFutureMonthShort(5)}부터 사업운이 개선될 것입니다. 이 시기에는 확장이나 새로운 도전을 고려해볼 수 있습니다.`,
          `${getFutureMonthShort(2)}에 사업 관련 긍정적인 변화가 있을 것입니다. 이 시기부터는 더욱 적극적으로 나아가는 것이 좋습니다.`,
          `올해 사업운은 전반적으로 좋은 편입니다. 특히 ${getFutureMonthShort(6)}부터는 더 큰 성장을 기대할 수 있습니다.`,
          `${getFutureMonthShort(4)}에 사업 관련 작은 성공이 있을 수 있습니다. 이 시기를 놓치지 않고 행동하시기 바랍니다.`,
          `${getFutureMonthShort(8)}부터는 사업운이 더욱 활성화될 것입니다. 이 시기에는 중장기 프로젝트도 가능합니다.`,
          `${getFutureMonthShort(1)}부터 사업운이 좋아지기 시작할 것입니다. 이 시기부터는 새로운 기회를 찾는 것이 좋습니다.`,
          `올해 사업운은 점진적으로 개선될 것입니다. ${getFutureMonthShort(7)}부터는 더 큰 성공을 기대할 수 있습니다.`,
          `${getFutureMonthShort(9)}에 사업 관련 긍정적인 전환점이 있을 수 있습니다. 하지만 신중하게 판단하고 계획적으로 접근하시기 바랍니다.`,
          `올해 사업운은 안정적이면서도 발전적일 것입니다. ${getFutureMonthShort(10)}부터는 더욱 좋은 결과를 얻을 수 있을 것입니다.`
        ],
        get en() {
          return [
            `In ${getFutureMonthShortEn(3)}, there will be a good opportunity related to business. During this period, it is recommended to start a new project.`,
            `From ${getFutureMonthShortEn(5)}, business fortune will improve. During this period, expansion or new challenges can be considered.`,
            `In ${getFutureMonthShortEn(2)}, there will be positive changes related to business. From this period, it is good to move forward more actively.`,
            `This year's business fortune is generally good. Especially from ${getFutureMonthShortEn(6)}, greater growth can be expected.`,
            `In ${getFutureMonthShortEn(4)}, there may be small success related to business. Do not miss this period and act.`,
            `From ${getFutureMonthShortEn(8)}, business fortune will be more activated. During this period, medium to long-term projects are also possible.`,
            `From ${getFutureMonthShortEn(1)}, business fortune will begin to improve. From this period, it is good to look for new opportunities.`,
            `This year's business fortune will improve gradually. From ${getFutureMonthShortEn(7)}, greater success can be expected.`,
            `In ${getFutureMonthShortEn(9)}, there may be a positive turning point related to business. However, judge carefully and approach systematically.`,
            `This year's business fortune will be stable and progressive. From ${getFutureMonthShortEn(10)}, even better results can be achieved.`
          ];
        },
        get ja() {
          return [
            `${getFutureMonthShortJa(3)}に事業に関する良い機会があるでしょう。この時期に新しいプロジェクトを始めることをお勧めします。`,
            `${getFutureMonthShortJa(5)}から事業運が改善するでしょう。この時期には拡張や新しい挑戦を検討できます。`,
            `${getFutureMonthShortJa(2)}に事業に関する前向きな変化があるでしょう。この時期からはより積極的に進むことが良いでしょう。`,
            `今年の事業運は全体的に良い方です。特に${getFutureMonthShortJa(6)}からはより大きな成長が期待できます。`,
            `${getFutureMonthShortJa(4)}に事業に関する小さな成功があるかもしれません。この時期を逃さず行動することをお勧めします。`,
            `${getFutureMonthShortJa(8)}からは事業運がより活性化するでしょう。この時期には中長期プロジェクトも可能です。`,
            `${getFutureMonthShortJa(1)}から事業運が良くなり始めるでしょう。この時期からは新しい機会を探すことが良いでしょう。`,
            `今年の事業運は段階的に改善するでしょう。${getFutureMonthShortJa(7)}からはより大きな成功が期待できます。`,
            `${getFutureMonthShortJa(9)}に事業に関する前向きな転換点があるかもしれません。しかし、慎重に判断し計画的にアプローチすることをお勧めします。`,
            `今年の事業運は安定しながらも発展的でしょう。${getFutureMonthShortJa(10)}からはさらに良い結果を得ることができるでしょう。`
          ];
        },
        get 'zh-CN'() {
          return [
            `${getFutureMonthShortZhCN(3)}会有与商业相关的好机会。在这个时期，建议开始新项目。`,
            `从${getFutureMonthShortZhCN(5)}开始，事业运将改善。在这个时期，可以考虑扩张或新挑战。`,
            `${getFutureMonthShortZhCN(2)}会有与商业相关的积极变化。从这个时期开始，更加积极主动是好的。`,
            `今年的事业运总体良好。特别是从${getFutureMonthShortZhCN(6)}开始，可以期待更大的增长。`,
            `${getFutureMonthShortZhCN(4)}可能会有与商业相关的小成功。不要错过这个时期，要积极行动。`,
            `从${getFutureMonthShortZhCN(8)}开始，事业运将更加活跃。在这个时期，中长期项目也是可能的。`,
            `从${getFutureMonthShortZhCN(1)}开始，事业运将开始改善。从这个时期开始，寻找新机会是好的。`,
            `今年的事业运将逐步改善。从${getFutureMonthShortZhCN(7)}开始，可以期待更大的成功。`,
            `${getFutureMonthShortZhCN(9)}可能会有与商业相关的积极转折点。但要谨慎判断并系统性地接近。`,
            `今年的事业运将稳定且进步。从${getFutureMonthShortZhCN(10)}开始，可以获得更好的结果。`
          ];
        },
        get 'zh-TW'() {
          return [
            `${getFutureMonthShortZhTW(3)}會有與商業相關的好機會。在這個時期，建議開始新專案。`,
            `從${getFutureMonthShortZhTW(5)}開始，事業運將改善。在這個時期，可以考慮擴張或新挑戰。`,
            `${getFutureMonthShortZhTW(2)}會有與商業相關的積極變化。從這個時期開始，更加積極主動是好的。`,
            `今年的事業運總體良好。特別是從${getFutureMonthShortZhTW(6)}開始，可以期待更大的增長。`,
            `${getFutureMonthShortZhTW(4)}可能會有與商業相關的小成功。不要錯過這個時期，要積極行動。`,
            `從${getFutureMonthShortZhTW(8)}開始，事業運將更加活躍。在這個時期，中長期專案也是可能的。`,
            `從${getFutureMonthShortZhTW(1)}開始，事業運將開始改善。從這個時期開始，尋找新機會是好的。`,
            `今年的事業運將逐步改善。從${getFutureMonthShortZhTW(7)}開始，可以期待更大的成功。`,
            `${getFutureMonthShortZhTW(9)}可能會有與商業相關的積極轉折點。但要謹慎判斷並系統性地接近。`,
            `今年的事業運將穩定且進步。從${getFutureMonthShortZhTW(10)}開始，可以獲得更好的結果。`
          ];
        },
        get vi() {
          return [
            `Vào ${getFutureMonthShortVi(3)}, sẽ có cơ hội tốt liên quan đến kinh doanh. Trong thời kỳ này, nên bắt đầu một dự án mới.`,
            `Từ ${getFutureMonthShortVi(5)}, vận kinh doanh sẽ cải thiện. Trong thời kỳ này, có thể cân nhắc mở rộng hoặc thử thách mới.`,
            `Vào ${getFutureMonthShortVi(2)}, sẽ có những thay đổi tích cực liên quan đến kinh doanh. Từ thời kỳ này, nên tiến lên tích cực hơn.`,
            `Vận kinh doanh năm nay nói chung là tốt. Đặc biệt từ ${getFutureMonthShortVi(6)}, có thể mong đợi tăng trưởng lớn hơn.`,
            `Vào ${getFutureMonthShortVi(4)}, có thể có thành công nhỏ liên quan đến kinh doanh. Đừng bỏ lỡ thời kỳ này và hãy hành động.`,
            `Từ ${getFutureMonthShortVi(8)}, vận kinh doanh sẽ được kích hoạt nhiều hơn. Trong thời kỳ này, các dự án trung đến dài hạn cũng có thể thực hiện.`,
            `Từ ${getFutureMonthShortVi(1)}, vận kinh doanh sẽ bắt đầu cải thiện. Từ thời kỳ này, nên tìm kiếm cơ hội mới.`,
            `Vận kinh doanh năm nay sẽ cải thiện dần dần. Từ ${getFutureMonthShortVi(7)}, có thể mong đợi thành công lớn hơn.`,
            `Vào ${getFutureMonthShortVi(9)}, có thể có bước ngoặt tích cực liên quan đến kinh doanh. Tuy nhiên, hãy đánh giá cẩn thận và tiếp cận có hệ thống.`,
            `Vận kinh doanh năm nay sẽ ổn định và tiến bộ. Từ ${getFutureMonthShortVi(10)}, có thể đạt được kết quả tốt hơn.`
          ];
        },
        get id() {
          return [
            `Pada ${getFutureMonthShortId(3)}, akan ada peluang baik terkait bisnis. Selama periode ini, disarankan untuk memulai proyek baru.`,
            `Dari ${getFutureMonthShortId(5)}, keberuntungan bisnis akan membaik. Selama periode ini, ekspansi atau tantangan baru dapat dipertimbangkan.`,
            `Pada ${getFutureMonthShortId(2)}, akan ada perubahan positif terkait bisnis. Dari periode ini, baik untuk maju lebih aktif.`,
            `Keberuntungan bisnis tahun ini umumnya baik. Terutama dari ${getFutureMonthShortId(6)}, pertumbuhan yang lebih besar dapat diharapkan.`,
            `Pada ${getFutureMonthShortId(4)}, mungkin ada keberhasilan kecil terkait bisnis. Jangan lewatkan periode ini dan bertindaklah.`,
            `Dari ${getFutureMonthShortId(8)}, keberuntungan bisnis akan lebih diaktifkan. Selama periode ini, proyek menengah hingga jangka panjang juga dimungkinkan.`,
            `Dari ${getFutureMonthShortId(1)}, keberuntungan bisnis akan mulai membaik. Dari periode ini, baik untuk mencari peluang baru.`,
            `Keberuntungan bisnis tahun ini akan membaik secara bertahap. Dari ${getFutureMonthShortId(7)}, kesuksesan yang lebih besar dapat diharapkan.`,
            `Pada ${getFutureMonthShortId(9)}, mungkin ada titik balik positif terkait bisnis. Namun, putuskan dengan hati-hati dan dekati secara sistematis.`,
            `Keberuntungan bisnis tahun ini akan stabil dan progresif. Dari ${getFutureMonthShortId(10)}, hasil yang bahkan lebih baik dapat dicapai.`
          ];
        }
      },
      study: {
        ko: [
          `${getFutureMonthShort(2)}에 학업 관련 긍정적인 변화가 있을 것입니다. 이 시기부터는 학습에 더욱 집중하는 것이 좋습니다.`,
          `${getFutureMonthShort(5)}부터 학업운이 개선될 것입니다. 이 시기에는 시험이나 평가에서 좋은 결과를 얻을 수 있습니다.`,
          `${getFutureMonthShort(3)}에 학업 관련 좋은 기회가 있을 것입니다. 이 시기에 새로운 공부를 시작하거나 자격증을 취득하는 것을 권장합니다.`,
          `올해 학업운은 전반적으로 좋은 편입니다. 특히 ${getFutureMonthShort(6)}부터는 더 큰 성과를 기대할 수 있습니다.`,
          `${getFutureMonthShort(4)}에 학업 관련 작은 성공이 있을 수 있습니다. 이 시기를 놓치지 않고 노력하시기 바랍니다.`,
          `${getFutureMonthShort(8)}부터는 학업운이 더욱 활성화될 것입니다. 이 시기에는 목표를 향해 큰 발전을 이룰 수 있습니다.`,
          `${getFutureMonthShort(1)}부터 학업운이 좋아지기 시작할 것입니다. 이 시기부터는 학습 계획을 세우고 실천하는 것이 좋습니다.`,
          `올해 학업운은 점진적으로 개선될 것입니다. ${getFutureMonthShort(7)}부터는 더 큰 성공을 기대할 수 있습니다.`,
          `${getFutureMonthShort(9)}에 학업 관련 긍정적인 전환점이 있을 수 있습니다. 하지만 방심하지 말고 꾸준히 노력하시기 바랍니다.`,
          `올해 학업운은 안정적이면서도 발전적일 것입니다. ${getFutureMonthShort(10)}부터는 더욱 좋은 결과를 얻을 수 있을 것입니다.`
        ],
        get en() {
          return [
            `In ${getFutureMonthShortEn(2)}, there will be positive changes related to studies. From this period, it is good to focus more on learning.`,
            `From ${getFutureMonthShortEn(5)}, study fortune will improve. During this period, you can achieve good results in exams or evaluations.`,
            `In ${getFutureMonthShortEn(3)}, there will be a good opportunity related to studies. During this period, it is recommended to start new studies or obtain certifications.`,
            `This year's study fortune is generally good. Especially from ${getFutureMonthShortEn(6)}, greater achievements can be expected.`,
            `In ${getFutureMonthShortEn(4)}, there may be small success related to studies. Do not miss this period and work hard.`,
            `From ${getFutureMonthShortEn(8)}, study fortune will be more activated. During this period, you can achieve great progress toward your goals.`,
            `From ${getFutureMonthShortEn(1)}, study fortune will begin to improve. From this period, it is good to make study plans and practice them.`,
            `This year's study fortune will improve gradually. From ${getFutureMonthShortEn(7)}, greater success can be expected.`,
            `In ${getFutureMonthShortEn(9)}, there may be a positive turning point related to studies. However, do not let your guard down and keep working steadily.`,
            `This year's study fortune will be stable and progressive. From ${getFutureMonthShortEn(10)}, even better results can be achieved.`
          ];
        },
        get ja() {
          return [
            `${getFutureMonthShortJa(2)}に学業に関する前向きな変化があるでしょう。この時期からは学習により集中することが良いでしょう。`,
            `${getFutureMonthShortJa(5)}から学業運が改善するでしょう。この時期には試験や評価で良い結果を得ることができるでしょう。`,
            `${getFutureMonthShortJa(3)}に学業に関する良い機会が生じるでしょう。この時期に新しい勉強を始めたり資格を取得することをお勧めします。`,
            `今年の学業運は全体的に良い方です。特に${getFutureMonthShortJa(6)}からはより大きな成果が期待できます。`,
            `${getFutureMonthShortJa(4)}に学業に関する小さな成功があるかもしれません。この時期を逃さず努力することをお勧めします。`,
            `${getFutureMonthShortJa(8)}からは学業運がより活性化するでしょう。この時期には目標に向かって大きな発展を成し遂げることができます。`,
            `${getFutureMonthShortJa(1)}から学業運が良くなり始めるでしょう。この時期からは学習計画を立てて実践することが良いでしょう。`,
            `今年の学業運は段階的に改善するでしょう。${getFutureMonthShortJa(7)}からはより大きな成功が期待できます。`,
            `${getFutureMonthShortJa(9)}に学業に関する前向きな転換点があるかもしれません。しかし、油断せずに着実に努力することをお勧めします。`,
            `今年の学業運は安定しながらも発展的でしょう。${getFutureMonthShortJa(10)}からはさらに良い結果を得ることができるでしょう。`
          ];
        },
        get 'zh-CN'() {
          return [
            `${getFutureMonthShortZhCN(2)}会有与学习相关的积极变化。从这个时期开始，更加专注于学习是好的。`,
            `从${getFutureMonthShortZhCN(5)}开始，学业运将改善。在这个时期，你可以在考试或评估中获得好结果。`,
            `${getFutureMonthShortZhCN(3)}会有与学习相关的好机会。在这个时期，建议开始新的学习或获得证书。`,
            `今年的学业运总体良好。特别是从${getFutureMonthShortZhCN(6)}开始，可以期待更大的成就。`,
            `${getFutureMonthShortZhCN(4)}可能会有与学习相关的小成功。不要错过这个时期，要努力。`,
            `从${getFutureMonthShortZhCN(8)}开始，学业运将更加活跃。在这个时期，你可以朝着目标取得巨大进步。`,
            `从${getFutureMonthShortZhCN(1)}开始，学业运将开始改善。从这个时期开始，制定学习计划并实践是好的。`,
            `今年的学业运将逐步改善。从${getFutureMonthShortZhCN(7)}开始，可以期待更大的成功。`,
            `${getFutureMonthShortZhCN(9)}可能会有与学习相关的积极转折点。但不要松懈，要继续稳步努力。`,
            `今年的学业运将稳定且进步。从${getFutureMonthShortZhCN(10)}开始，可以获得更好的结果。`
          ];
        },
        get 'zh-TW'() {
          return [
            `${getFutureMonthShortZhTW(2)}會有與學習相關的積極變化。從這個時期開始，更加專注於學習是好的。`,
            `從${getFutureMonthShortZhTW(5)}開始，學業運將改善。在這個時期，你可以在考試或評估中獲得好結果。`,
            `${getFutureMonthShortZhTW(3)}會有與學習相關的好機會。在這個時期，建議開始新的學習或獲得證書。`,
            `今年的學業運總體良好。特別是從${getFutureMonthShortZhTW(6)}開始，可以期待更大的成就。`,
            `${getFutureMonthShortZhTW(4)}可能會有與學習相關的小成功。不要錯過這個時期，要努力。`,
            `從${getFutureMonthShortZhTW(8)}開始，學業運將更加活躍。在這個時期，你可以朝著目標取得巨大進步。`,
            `從${getFutureMonthShortZhTW(1)}開始，學業運將開始改善。從這個時期開始，制定學習計劃並實踐是好的。`,
            `今年的學業運將逐步改善。從${getFutureMonthShortZhTW(7)}開始，可以期待更大的成功。`,
            `${getFutureMonthShortZhTW(9)}可能會有與學習相關的積極轉折點。但不要鬆懈，要繼續穩步努力。`,
            `今年的學業運將穩定且進步。從${getFutureMonthShortZhTW(10)}開始，可以獲得更好的結果。`
          ];
        },
        get vi() {
          return [
            `Vào ${getFutureMonthShortVi(2)}, sẽ có những thay đổi tích cực liên quan đến học tập. Từ thời kỳ này, nên tập trung hơn vào việc học.`,
            `Từ ${getFutureMonthShortVi(5)}, vận học tập sẽ cải thiện. Trong thời kỳ này, bạn có thể đạt được kết quả tốt trong các kỳ thi hoặc đánh giá.`,
            `Vào ${getFutureMonthShortVi(3)}, sẽ có cơ hội tốt liên quan đến học tập. Trong thời kỳ này, nên bắt đầu học tập mới hoặc lấy chứng chỉ.`,
            `Vận học tập năm nay nói chung là tốt. Đặc biệt từ ${getFutureMonthShortVi(6)}, có thể mong đợi thành tựu lớn hơn.`,
            `Vào ${getFutureMonthShortVi(4)}, có thể có thành công nhỏ liên quan đến học tập. Đừng bỏ lỡ thời kỳ này và hãy nỗ lực.`,
            `Từ ${getFutureMonthShortVi(8)}, vận học tập sẽ được kích hoạt nhiều hơn. Trong thời kỳ này, bạn có thể đạt được tiến bộ lớn hướng tới mục tiêu của mình.`,
            `Từ ${getFutureMonthShortVi(1)}, vận học tập sẽ bắt đầu cải thiện. Từ thời kỳ này, nên lập kế hoạch học tập và thực hành chúng.`,
            `Vận học tập năm nay sẽ cải thiện dần dần. Từ ${getFutureMonthShortVi(7)}, có thể mong đợi thành công lớn hơn.`,
            `Vào ${getFutureMonthShortVi(9)}, có thể có bước ngoặt tích cực liên quan đến học tập. Tuy nhiên, đừng để mất cảnh giác và hãy tiếp tục nỗ lực đều đặn.`,
            `Vận học tập năm nay sẽ ổn định và tiến bộ. Từ ${getFutureMonthShortVi(10)}, có thể đạt được kết quả tốt hơn.`
          ];
        },
        get id() {
          return [
            `Pada ${getFutureMonthShortId(2)}, akan ada perubahan positif yang terkait studi. Dari periode ini, baik untuk lebih fokus pada pembelajaran.`,
            `Dari ${getFutureMonthShortId(5)}, keberuntungan studi akan membaik. Selama periode ini, Anda dapat mencapai hasil yang baik dalam ujian atau evaluasi.`,
            `Pada ${getFutureMonthShortId(3)}, akan ada peluang baik yang terkait studi. Selama periode ini, disarankan untuk memulai studi baru atau memperoleh sertifikasi.`,
            `Keberuntungan studi tahun ini umumnya baik. Terutama dari ${getFutureMonthShortId(6)}, pencapaian yang lebih besar dapat diharapkan.`,
            `Pada ${getFutureMonthShortId(4)}, mungkin ada keberhasilan kecil terkait studi. Jangan lewatkan periode ini dan berusahalah.`,
            `Dari ${getFutureMonthShortId(8)}, keberuntungan studi akan lebih diaktifkan. Selama periode ini, Anda dapat mencapai kemajuan besar menuju tujuan Anda.`,
            `Dari ${getFutureMonthShortId(1)}, keberuntungan studi akan mulai membaik. Dari periode ini, baik untuk membuat rencana studi dan mempraktikkannya.`,
            `Keberuntungan studi tahun ini akan membaik secara bertahap. Dari ${getFutureMonthShortId(7)}, kesuksesan yang lebih besar dapat diharapkan.`,
            `Pada ${getFutureMonthShortId(9)}, mungkin ada titik balik positif terkait studi. Namun, jangan lengah dan teruslah bekerja dengan tekun.`,
            `Keberuntungan studi tahun ini akan stabil dan progresif. Dari ${getFutureMonthShortId(10)}, hasil yang bahkan lebih baik dapat dicapai.`
          ];
        }
      },
      goodTime: {
        ko: [
          `${getFutureMonthShort(2)}은 올해 좋은 시기 중 하나입니다. 모든 면에서 긍정적인 변화를 경험할 수 있을 것입니다.`,
          `${getFutureMonthShort(4)}부터 ${getFutureMonthShort(6)}까지는 특히 운세가 좋은 시기입니다. 이 기간 동안 중요한 결정을 내리는 것을 권장합니다.`,
          `올해 봄과 가을 시즌은 전체적으로 좋은 운세를 경험할 수 있는 시기입니다. 이 시기를 잘 활용하시기 바랍니다.`,
          `${getFutureMonthShort(5)}에 특히 좋은 기운이 감돌게 됩니다. 이 시기에는 새로운 시작을 하거나 목표를 향해 나아가는 것이 좋습니다.`,
          `${getFutureMonthShort(8)}부터는 전반적으로 운세가 상승하는 시기입니다. 이 시기를 준비하는 것이 중요합니다.`,
          `${getFutureMonthShort(3)}부터 ${getFutureMonthShort(7)}까지는 꾸준히 좋은 운세를 경험할 수 있는 시기입니다. 이 기간을 놓치지 않도록 하세요.`,
          `${getFutureMonthShort(6)}은 전환점이 될 수 있는 좋은 시기입니다. 이 시기를 잘 활용하면 큰 발전을 이룰 수 있습니다.`,
          `${getFutureMonthShort(1)}부터 시작되는 올해 초반은 준비하는 시기입니다. 하지만 ${getFutureMonthShort(3)}부터는 본격적으로 좋아질 것입니다.`,
          `${getFutureMonthShort(9)}과 ${getFutureMonthShort(10)}은 성과를 거둘 수 있는 좋은 시기입니다. 이 시기에는 노력한 만큼 결과를 얻을 수 있을 것입니다.`,
          `전체적으로 올해는 좋은 운세를 경험할 수 있는 해입니다. 특히 ${getFutureMonthShort(5)}, ${getFutureMonthShort(8)}, ${getFutureMonthShort(11)}는 더욱 좋은 시기입니다.`
        ],
        get en() {
          return [
            `${getFutureMonthShortEn(2)} is one of the good periods of the year. You can experience positive changes in all aspects.`,
            `From ${getFutureMonthShortEn(4)} to ${getFutureMonthShortEn(6)} is a particularly good fortune period. It is recommended to make important decisions during this period.`,
            `Spring and fall seasons this year are times when you can experience overall good fortune. Make good use of this period.`,
            `In ${getFutureMonthShortEn(5)}, especially good energy will flow. During this period, it is good to make new beginnings or move toward goals.`,
            `From ${getFutureMonthShortEn(8)}, it is a period when overall fortune rises. It is important to prepare for this period.`,
            `From ${getFutureMonthShortEn(3)} to ${getFutureMonthShortEn(7)} is a period when you can consistently experience good fortune. Do not miss this period.`,
            `${getFutureMonthShortEn(6)} is a good period that can be a turning point. If you make good use of this period, you can achieve great development.`,
            `The early part of this year starting from ${getFutureMonthShortEn(1)} is a preparation period. However, from ${getFutureMonthShortEn(3)}, it will improve significantly.`,
            `${getFutureMonthShortEn(9)} and ${getFutureMonthShortEn(10)} are good periods when you can achieve results. During this period, you will get results commensurate with your efforts.`,
            `Overall, this year is a year when you can experience good fortune. Especially ${getFutureMonthShortEn(5)}, ${getFutureMonthShortEn(8)}, and ${getFutureMonthShortEn(11)} are even better periods.`
          ];
        },
        get ja() {
          return [
            `${getFutureMonthShortJa(2)}は今年良い時期の一つです。すべての面で前向きな変化を経験できるでしょう。`,
            `${getFutureMonthShortJa(4)}から${getFutureMonthShortJa(6)}まで特に運勢が良い時期です。この期間中に重要な決定を下すことをお勧めします。`,
            `今年の春と秋の季節は全体的に良い運勢を経験できる時期です。この時期をよく活用することをお勧めします。`,
            `${getFutureMonthShortJa(5)}に特に良い気が漂うでしょう。この時期には新しい始まりをしたり目標に向かって進むことが良いでしょう。`,
            `${getFutureMonthShortJa(8)}からは全体的に運勢が上昇する時期です。この時期を準備することが重要です。`,
            `${getFutureMonthShortJa(3)}から${getFutureMonthShortJa(7)}まで着実に良い運勢を経験できる時期です。この期間を逃さないようにしてください。`,
            `${getFutureMonthShortJa(6)}は転換点になることができる良い時期です。この時期をよく活用すれば大きな発展を成し遂げることができます。`,
            `${getFutureMonthShortJa(1)}から始まる今年初めは準備する時期です。しかし${getFutureMonthShortJa(3)}からは本格的に良くなるでしょう。`,
            `${getFutureMonthShortJa(9)}と${getFutureMonthShortJa(10)}は成果を収めることができる良い時期です。この時期には努力しただけ結果を得ることができるでしょう。`,
            `全体的に今年は良い運勢を経験できる年です。特に${getFutureMonthShortJa(5)}、${getFutureMonthShortJa(8)}、${getFutureMonthShortJa(11)}はさらに良い時期です。`
          ];
        },
        get 'zh-CN'() {
          return [
            `${getFutureMonthShortZhCN(2)}是今年好时期之一。你可以在所有方面体验积极的变化。`,
            `从${getFutureMonthShortZhCN(4)}到${getFutureMonthShortZhCN(6)}是运势特别好的时期。建议在这个时期做重要决定。`,
            `今年的春季和秋季是你可以体验整体好运的时期。好好利用这个时期。`,
            `${getFutureMonthShortZhCN(5)}会有特别好的能量流动。在这个时期，重新开始或朝着目标前进是好的。`,
            `从${getFutureMonthShortZhCN(8)}开始，是整体运势上升的时期。准备这个时期很重要。`,
            `从${getFutureMonthShortZhCN(3)}到${getFutureMonthShortZhCN(7)}是可以持续体验好运的时期。不要错过这个时期。`,
            `${getFutureMonthShortZhCN(6)}是可以成为转折点的好时期。如果你好好利用这个时期，可以取得巨大发展。`,
            `从${getFutureMonthShortZhCN(1)}开始的今年初是准备时期。但从${getFutureMonthShortZhCN(3)}开始，将显著改善。`,
            `${getFutureMonthShortZhCN(9)}和${getFutureMonthShortZhCN(10)}是可以取得成果的好时期。在这个时期，你会得到与努力相称的结果。`,
            `整体而言，今年是可以体验好运的一年。特别是${getFutureMonthShortZhCN(5)}、${getFutureMonthShortZhCN(8)}和${getFutureMonthShortZhCN(11)}是更好的时期。`
          ];
        },
        get 'zh-TW'() {
          return [
            `${getFutureMonthShortZhTW(2)}是今年好時期之一。你可以在所有方面體驗積極的變化。`,
            `從${getFutureMonthShortZhTW(4)}到${getFutureMonthShortZhTW(6)}是運勢特別好的時期。建議在這個時期做重要決定。`,
            `今年的春季和秋季是你可以體驗整體好運的時期。好好利用這個時期。`,
            `${getFutureMonthShortZhTW(5)}會有特別好的能量流動。在這個時期，重新開始或朝著目標前進是好的。`,
            `從${getFutureMonthShortZhTW(8)}開始，是整體運勢上升的時期。準備這個時期很重要。`,
            `從${getFutureMonthShortZhTW(3)}到${getFutureMonthShortZhTW(7)}是可以持續體驗好運的時期。不要錯過這個時期。`,
            `${getFutureMonthShortZhTW(6)}是可以成為轉折點的好時期。如果你好好利用這個時期，可以取得巨大發展。`,
            `從${getFutureMonthShortZhTW(1)}開始的今年初是準備時期。但從${getFutureMonthShortZhTW(3)}開始，將顯著改善。`,
            `${getFutureMonthShortZhTW(9)}和${getFutureMonthShortZhTW(10)}是可以取得成果的好時期。在這個時期，你會得到與努力相稱的結果。`,
            `整體而言，今年是可以體驗好運的一年。特別是${getFutureMonthShortZhTW(5)}、${getFutureMonthShortZhTW(8)}和${getFutureMonthShortZhTW(11)}是更好的時期。`
          ];
        },
        get vi() {
          return [
            `${getFutureMonthShortVi(2)} là một trong những thời kỳ tốt trong năm. Bạn có thể trải nghiệm những thay đổi tích cực ở mọi khía cạnh.`,
            `Từ ${getFutureMonthShortVi(4)} đến ${getFutureMonthShortVi(6)} là thời kỳ vận may đặc biệt tốt. Nên đưa ra quyết định quan trọng trong thời kỳ này.`,
            `Mùa xuân và mùa thu năm nay là thời điểm bạn có thể trải nghiệm vận may tổng thể tốt. Hãy tận dụng tốt thời kỳ này.`,
            `Vào ${getFutureMonthShortVi(5)}, năng lượng đặc biệt tốt sẽ chảy. Trong thời kỳ này, nên bắt đầu lại hoặc tiến tới các mục tiêu.`,
            `Từ ${getFutureMonthShortVi(8)}, đây là thời kỳ vận may tổng thể tăng lên. Việc chuẩn bị cho thời kỳ này là quan trọng.`,
            `Từ ${getFutureMonthShortVi(3)} đến ${getFutureMonthShortVi(7)} là thời kỳ bạn có thể trải nghiệm vận may tốt một cách ổn định. Đừng bỏ lỡ thời kỳ này.`,
            `${getFutureMonthShortVi(6)} là thời kỳ tốt có thể trở thành điểm ngoặt. Nếu bạn tận dụng tốt thời kỳ này, bạn có thể đạt được phát triển lớn.`,
            `Phần đầu năm nay bắt đầu từ ${getFutureMonthShortVi(1)} là thời kỳ chuẩn bị. Tuy nhiên, từ ${getFutureMonthShortVi(3)}, nó sẽ cải thiện đáng kể.`,
            `${getFutureMonthShortVi(9)} và ${getFutureMonthShortVi(10)} là những thời kỳ tốt khi bạn có thể đạt được kết quả. Trong thời kỳ này, bạn sẽ nhận được kết quả tương xứng với nỗ lực của mình.`,
            `Nhìn chung, năm nay là năm bạn có thể trải nghiệm vận may tốt. Đặc biệt ${getFutureMonthShortVi(5)}, ${getFutureMonthShortVi(8)} và ${getFutureMonthShortVi(11)} là những thời kỳ còn tốt hơn.`
          ];
        },
        get id() {
          return [
            `${getFutureMonthShortId(2)} adalah salah satu periode baik tahun ini. Anda dapat mengalami perubahan positif di semua aspek.`,
            `Dari ${getFutureMonthShortId(4)} hingga ${getFutureMonthShortId(6)} adalah periode keberuntungan yang sangat baik. Disarankan untuk membuat keputusan penting selama periode ini.`,
            `Musim semi dan musim gugur tahun ini adalah waktu ketika Anda dapat mengalami keberuntungan keseluruhan yang baik. Manfaatkan periode ini dengan baik.`,
            `Pada ${getFutureMonthShortId(5)}, energi yang sangat baik akan mengalir. Selama periode ini, baik untuk memulai baru atau bergerak menuju tujuan.`,
            `Dari ${getFutureMonthShortId(8)}, ini adalah periode ketika keberuntungan keseluruhan meningkat. Penting untuk mempersiapkan periode ini.`,
            `Dari ${getFutureMonthShortId(3)} hingga ${getFutureMonthShortId(7)} adalah periode ketika Anda dapat secara konsisten mengalami keberuntungan baik. Jangan lewatkan periode ini.`,
            `${getFutureMonthShortId(6)} adalah periode baik yang dapat menjadi titik balik. Jika Anda memanfaatkan periode ini dengan baik, Anda dapat mencapai perkembangan besar.`,
            `Bagian awal tahun ini mulai dari ${getFutureMonthShortId(1)} adalah periode persiapan. Namun, dari ${getFutureMonthShortId(3)}, akan meningkat secara signifikan.`,
            `${getFutureMonthShortId(9)} dan ${getFutureMonthShortId(10)} adalah periode baik ketika Anda dapat mencapai hasil. Selama periode ini, Anda akan mendapatkan hasil yang sebanding dengan upaya Anda.`,
            `Secara keseluruhan, tahun ini adalah tahun ketika Anda dapat mengalami keberuntungan baik. Terutama ${getFutureMonthShortId(5)}, ${getFutureMonthShortId(8)}, dan ${getFutureMonthShortId(11)} adalah periode yang bahkan lebih baik.`
          ];
        }
      },
      warning: {
        ko: [
          `${getFutureMonthShort(1)}에는 다소 조심해야 할 시기입니다. 중요한 결정은 신중하게 내리는 것이 좋습니다.`,
          `${getFutureMonthShort(7)}에는 감정 기복이나 스트레스가 있을 수 있습니다. 이 시기에는 무리하지 않는 것이 좋습니다.`,
          `${getFutureMonthShort(11)}에는 재물 관련 주의가 필요합니다. 큰 지출이나 투자는 신중하게 결정하시기 바랍니다.`,
          `${getFutureMonthShort(6)}에는 건강 관리에 더욱 주의를 기울여야 할 시기입니다. 작은 증상이라도 간과하지 마세요.`,
          `${getFutureMonthShort(9)}에는 인간관계에서 주의해야 할 시기가 있을 수 있습니다. 이 시기에는 소통에 더욱 신경 쓰시기 바랍니다.`,
          `${getFutureMonthShort(2)}에는 사업이나 업무 관련 주의가 필요할 수 있습니다. 이 시기에는 서두르기보다는 신중하게 판단하시기 바랍니다.`,
          `${getFutureMonthShort(10)}에는 전반적으로 속도를 조절해야 할 시기입니다. 무리한 행동은 피하는 것이 좋습니다.`,
          `${getFutureMonthShort(8)}에는 학업이나 시험 관련 주의가 필요할 수 있습니다. 이 시기에는 준비를 더 철저히 하는 것이 좋습니다.`,
          `${getFutureMonthShort(12)}에는 감정적 스트레스나 피로가 있을 수 있습니다. 이 시기에는 휴식과 회복에 집중하시기 바랍니다.`,
          `전체적으로 올해는 좋은 운세이지만, 때로는 속도를 조절하고 신중하게 행동하는 것이 중요합니다. 특히 ${getFutureMonthShort(4)}과 ${getFutureMonthShort(8)}에는 더욱 주의가 필요합니다.`
        ],
        get en() {
          return [
            `In ${getFutureMonthShortEn(1)}, it is a period that requires some caution. It is good to make important decisions carefully.`,
            `In ${getFutureMonthShortEn(7)}, there may be emotional ups and downs or stress. During this period, it is good not to overdo things.`,
            `In ${getFutureMonthShortEn(11)}, caution is needed regarding wealth. It is recommended to carefully decide on large expenses or investments.`,
            `In ${getFutureMonthShortEn(6)}, it is a period when you need to pay more attention to health management. Do not overlook even small symptoms.`,
            `In ${getFutureMonthShortEn(9)}, there may be a period when you need to be cautious in relationships. During this period, pay more attention to communication.`,
            `In ${getFutureMonthShortEn(2)}, caution may be needed regarding business or work. During this period, it is good to judge carefully rather than rushing.`,
            `In ${getFutureMonthShortEn(10)}, it is a period when you need to control your speed overall. It is good to avoid excessive actions.`,
            `In ${getFutureMonthShortEn(8)}, caution may be needed regarding studies or exams. During this period, it is good to prepare more thoroughly.`,
            `In ${getFutureMonthShortEn(12)}, there may be emotional stress or fatigue. During this period, focus on rest and recovery.`,
            `Overall, this year has good fortune, but it is important to sometimes control speed and act carefully. Especially in ${getFutureMonthShortEn(4)} and ${getFutureMonthShortEn(8)}, more caution is needed.`
          ];
        },
        get ja() {
          return [
            `${getFutureMonthShortJa(1)}にはやや注意が必要な時期です。重要な決定は慎重に下すことが良いでしょう。`,
            `${getFutureMonthShortJa(7)}には感情の波やストレスがあるかもしれません。この時期には無理をしないことが良いでしょう。`,
            `${getFutureMonthShortJa(11)}には財運に関する注意が必要です。大きな支出や投資は慎重に決定することをお勧めします。`,
            `${getFutureMonthShortJa(6)}には健康管理により注意を払う必要がある時期です。小さな症状でも見落とさないでください。`,
            `${getFutureMonthShortJa(9)}には人間関係で注意が必要な時期があるかもしれません。この時期にはコミュニケーションにより神経を使うことをお勧めします。`,
            `${getFutureMonthShortJa(2)}には事業や業務に関する注意が必要かもしれません。この時期には急ぐよりも慎重に判断することをお勧めします。`,
            `${getFutureMonthShortJa(10)}には全体的に速度を調整する必要がある時期です。無理な行動は避けることが良いでしょう。`,
            `${getFutureMonthShortJa(8)}には学業や試験に関する注意が必要かもしれません。この時期には準備をより徹底することが良いでしょう。`,
            `${getFutureMonthShortJa(12)}には感情的ストレスや疲労があるかもしれません。この時期には休息と回復に集中することをお勧めします。`,
            `全体的に今年は良い運勢ですが、時には速度を調整し慎重に行動することが重要です。特に${getFutureMonthShortJa(4)}と${getFutureMonthShortJa(8)}にはより注意が必要です。`
          ];
        },
        get 'zh-CN'() {
          return [
            `${getFutureMonthShortZhCN(1)}是需要谨慎的时期。谨慎地做重要决定是好的。`,
            `${getFutureMonthShortZhCN(7)}可能会有情绪波动或压力。在这个时期，不要过度是好的。`,
            `${getFutureMonthShortZhCN(11)}需要关于财富的谨慎。建议谨慎决定大额支出或投资。`,
            `${getFutureMonthShortZhCN(6)}是需要更加关注健康管理的时期。即使是很小的症状也不要忽视。`,
            `${getFutureMonthShortZhCN(9)}可能需要在人际关系中谨慎的时期。在这个时期，更加注意沟通。`,
            `${getFutureMonthShortZhCN(2)}可能需要注意商业或工作。在这个时期，谨慎判断而不是匆忙是好的。`,
            `${getFutureMonthShortZhCN(10)}是需要整体控制速度的时期。避免过度行动是好的。`,
            `${getFutureMonthShortZhCN(8)}可能需要注意学习或考试。在这个时期，更彻底地准备是好的。`,
            `${getFutureMonthShortZhCN(12)}可能会有情绪压力或疲劳。在这个时期，专注于休息和恢复。`,
            `整体而言，今年有好运，但有时控制速度并谨慎行动是重要的。特别是在${getFutureMonthShortZhCN(4)}和${getFutureMonthShortZhCN(8)}，需要更多的谨慎。`
          ];
        },
        get 'zh-TW'() {
          return [
            `${getFutureMonthShortZhTW(1)}是需要謹慎的時期。謹慎地做重要決定是好的。`,
            `${getFutureMonthShortZhTW(7)}可能會有情緒波動或壓力。在這個時期，不要過度是好的。`,
            `${getFutureMonthShortZhTW(11)}需要關於財富的謹慎。建議謹慎決定大額支出或投資。`,
            `${getFutureMonthShortZhTW(6)}是需要更加關注健康管理的時期。即使是很小的症狀也不要忽視。`,
            `${getFutureMonthShortZhTW(9)}可能需要在人際關係中謹慎的時期。在這個時期，更加注意溝通。`,
            `${getFutureMonthShortZhTW(2)}可能需要注意商業或工作。在這個時期，謹慎判斷而不是匆忙是好的。`,
            `${getFutureMonthShortZhTW(10)}是需要整體控制速度的時期。避免過度行動是好的。`,
            `${getFutureMonthShortZhTW(8)}可能需要注意學習或考試。在這個時期，更徹底地準備是好的。`,
            `${getFutureMonthShortZhTW(12)}可能會有情緒壓力或疲勞。在這個時期，專注於休息和恢復。`,
            `整體而言，今年有好運，但有時控制速度並謹慎行動是重要的。特別是在${getFutureMonthShortZhTW(4)}和${getFutureMonthShortZhTW(8)}，需要更多的謹慎。`
          ];
        },
        get vi() {
          return [
            `Vào ${getFutureMonthShortVi(1)}, đây là thời kỳ cần một chút thận trọng. Nên đưa ra quyết định quan trọng một cách cẩn thận.`,
            `Vào ${getFutureMonthShortVi(7)}, có thể có biến động cảm xúc hoặc căng thẳng. Trong thời kỳ này, nên không làm quá sức.`,
            `Vào ${getFutureMonthShortVi(11)}, cần thận trọng về tài chính. Nên quyết định cẩn thận về các khoản chi lớn hoặc đầu tư.`,
            `Vào ${getFutureMonthShortVi(6)}, đây là thời kỳ bạn cần chú ý hơn đến việc quản lý sức khỏe. Đừng bỏ qua ngay cả những triệu chứng nhỏ.`,
            `Vào ${getFutureMonthShortVi(9)}, có thể có thời kỳ bạn cần thận trọng trong các mối quan hệ. Trong thời kỳ này, nên chú ý hơn đến giao tiếp.`,
            `Vào ${getFutureMonthShortVi(2)}, có thể cần thận trọng về kinh doanh hoặc công việc. Trong thời kỳ này, nên đánh giá cẩn thận thay vì vội vàng.`,
            `Vào ${getFutureMonthShortVi(10)}, đây là thời kỳ bạn cần kiểm soát tốc độ tổng thể. Nên tránh các hành động quá mức.`,
            `Vào ${getFutureMonthShortVi(8)}, có thể cần thận trọng về học tập hoặc thi cử. Trong thời kỳ này, nên chuẩn bị kỹ lưỡng hơn.`,
            `Vào ${getFutureMonthShortVi(12)}, có thể có căng thẳng cảm xúc hoặc mệt mỏi. Trong thời kỳ này, hãy tập trung vào nghỉ ngơi và phục hồi.`,
            `Nhìn chung, năm nay có vận may tốt, nhưng đôi khi kiểm soát tốc độ và hành động cẩn thận là quan trọng. Đặc biệt vào ${getFutureMonthShortVi(4)} và ${getFutureMonthShortVi(8)}, cần thận trọng hơn.`
          ];
        },
        get id() {
          return [
            `Pada ${getFutureMonthShortId(1)}, ini adalah periode yang memerlukan sedikit kehati-hatian. Baik untuk membuat keputusan penting dengan hati-hati.`,
            `Pada ${getFutureMonthShortId(7)}, mungkin ada fluktuasi emosional atau stres. Selama periode ini, baik untuk tidak berlebihan.`,
            `Pada ${getFutureMonthShortId(11)}, kehati-hatian diperlukan terkait kekayaan. Disarankan untuk memutuskan dengan hati-hati tentang pengeluaran besar atau investasi.`,
            `Pada ${getFutureMonthShortId(6)}, ini adalah periode ketika Anda perlu lebih memperhatikan manajemen kesehatan. Jangan abaikan bahkan gejala kecil.`,
            `Pada ${getFutureMonthShortId(9)}, mungkin ada periode ketika Anda perlu waspada dalam hubungan. Selama periode ini, perhatikan lebih pada komunikasi.`,
            `Pada ${getFutureMonthShortId(2)}, kehati-hatian mungkin diperlukan terkait bisnis atau pekerjaan. Selama periode ini, baik untuk menilai dengan hati-hati daripada terburu-buru.`,
            `Pada ${getFutureMonthShortId(10)}, ini adalah periode ketika Anda perlu mengontrol kecepatan secara keseluruhan. Baik untuk menghindari tindakan yang berlebihan.`,
            `Pada ${getFutureMonthShortId(8)}, kehati-hatian mungkin diperlukan terkait studi atau ujian. Selama periode ini, baik untuk mempersiapkan lebih teliti.`,
            `Pada ${getFutureMonthShortId(12)}, mungkin ada stres emosional atau kelelahan. Selama periode ini, fokuslah pada istirahat dan pemulihan.`,
            `Secara keseluruhan, tahun ini memiliki keberuntungan baik, tetapi terkadang mengontrol kecepatan dan bertindak hati-hati adalah penting. Terutama pada ${getFutureMonthShortId(4)} dan ${getFutureMonthShortId(8)}, lebih banyak kehati-hatian diperlukan.`
          ];
        }
      }
    }
  },
  {
    id: 3,
    title: {
      ko: '보통 운세',
      en: 'Average Fortune',
      ja: '普通の運勢',
      'zh-CN': '普通运势',
      'zh-TW': '普通運勢',
      vi: 'Vận May Trung Bình',
      id: 'Keberuntungan Rata-Rata'
    },
    description: {
      get ko() {
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth() + 1;
        let periodText = '';
        if (currentMonth <= 10) {
          periodText = `${currentYear}년 말`;
        } else if (currentMonth === 11) {
          periodText = `${currentYear}년 말 또는 ${currentYear + 1}년 초`;
        } else {
          periodText = `${currentYear + 1}년 초`;
        }
        return [
          `${periodText} 당신은 전반적으로 안정적인 운세를 경험할 것입니다. 큰 변화는 없지만 꾸준한 발전을 이룰 수 있습니다.`,
          `${periodText} 당신에게는 보통 수준의 운세가 예상됩니다. 큰 기복 없이 안정적으로 나아갈 수 있는 시기입니다.`,
          `${periodText} 당신은 올해 평범하지만 안정적인 한 해를 보낼 수 있습니다. 꾸준한 노력으로 점진적인 발전을 이룰 수 있을 것입니다.`,
          `${periodText} 당신에게는 특별한 행운이나 어려움 없이 평온한 운세가 예상됩니다. 일상적인 일들이 순조롭게 진행될 것입니다.`,
          `${periodText} 당신은 올해 중간 정도의 운세를 경험하게 됩니다. 큰 기대 없이 꾸준히 나아가는 것이 중요합니다.`,
          `올해 당신은 안정적인 흐름 속에서 점진적인 발전을 이룰 수 있습니다. ${periodText}을 기점으로 더 좋아질 수 있습니다.`,
          `${periodText} 당신에게는 평범하지만 무난한 운세가 예상됩니다. 큰 변화보다는 안정성에 중점을 두는 것이 좋습니다.`,
          `${periodText} 당신은 올해 특별한 일 없이 일상적인 흐름을 유지할 수 있습니다. 꾸준함이 중요한 시기입니다.`,
          `${periodText} 당신에게는 보통 수준의 운세가 흐를 것입니다. 큰 성공이나 실패 없이 안정적으로 지나갈 수 있을 것입니다.`,
          `${periodText} 당신은 올해 전반적으로 무난한 운세를 경험하게 됩니다. 꾸준한 노력으로 목표를 향해 나아갈 수 있을 것입니다.`
        ];
      },
      en: [
        'You will experience overall stable fortune. While there are no major changes, you can achieve steady progress.',
        'Average level of fortune is expected. It is a time when you can move forward stably without major fluctuations.',
        'This year you can have an ordinary but stable year. With steady effort, you can achieve gradual progress.',
        'You can expect peaceful fortune without special luck or difficulties. Daily affairs will proceed smoothly.',
        'You will experience mid-level fortune this year. It is important to keep moving forward steadily without high expectations.',
        'This year you can achieve gradual progress in a stable flow. Things can get better starting from this period.',
        'Ordinary but comfortable fortune is expected. It is better to focus on stability rather than major changes.',
        'This year you can maintain the daily flow without special events. Consistency is important during this time.',
        'Average level of fortune will flow to you. You can pass the time stably without major success or failure.',
        'This year you will experience overall comfortable fortune. With steady effort, you can move toward your goals.'
      ],
      ja: [
        '全体的に安定した運勢を経験することになるでしょう。大きな変化はありませんが、着実な発展を達成できます。',
        '普通レベルの運勢が予想されます。大きな変動なく安定して進むことができる時期です。',
        '今年は平凡ながらも安定した一年を過ごすことができます。着実な努力で漸進的な発展を達成できるでしょう。',
        '特別な幸運や困難なく平穏な運勢が予想されます。日常的なことが順調に進むでしょう。',
        '今年は中程度の運勢を経験することになります。大きな期待を持たずに着実に進むことが重要です。',
        '今年は安定した流れの中で漸進的な発展を達成できます。この時期を起点により良くなる可能性があります。',
        '平凡ながらも無難な運勢が予想されます。大きな変化よりも安定性に重点を置くことが良いでしょう。',
        '今年は特別な出来事なく日常的な流れを維持できます。一貫性が重要な時期です。',
        '普通レベルの運勢が流れるでしょう。大きな成功や失敗なく安定して過ごすことができるでしょう。',
        '今年は全体的に無難な運勢を経験することになります。着実な努力で目標に向かって進むことができるでしょう。'
      ],
      'zh-CN': [
        '你将经历整体稳定的运势。虽然没有大的变化，但你可以实现稳步发展。',
        '预期会有普通水平的运势。这是一个可以稳定前进而没有大波动的时期。',
        '今年你可以过平凡但稳定的一年。通过持续努力，你可以实现逐步发展。',
        '你可以预期平静的运势，没有特别的幸运或困难。日常事务会顺利进行。',
        '今年你将经历中等水平的运势。在不抱太高期望的情况下持续前进很重要。',
        '今年你可以在稳定的流动中实现逐步发展。从这个时期开始，情况可能会变得更好。',
        '预期会有平凡但舒适的运势。最好专注于稳定性而不是大的变化。',
        '今年你可以维持日常的流动，没有特殊事件。一致性在这个时期很重要。',
        '普通水平的运势会流向你。你可以在没有重大成功或失败的情况下稳定度过。',
        '今年你将经历整体舒适的运势。通过持续努力，你可以朝着目标前进。'
      ],
      'zh-TW': [
        '你將經歷整體穩定的運勢。雖然沒有大的變化，但你可以實現穩步發展。',
        '預期會有普通水平的運勢。這是一個可以穩定前進而沒有大波動的時期。',
        '今年你可以過平凡但穩定的一年。通過持續努力，你可以實現逐步發展。',
        '你可以預期平靜的運勢，沒有特別的幸運或困難。日常事務會順利進行。',
        '今年你將經歷中等水平的運勢。在不抱太高期望的情況下持續前進很重要。',
        '今年你可以在穩定的流動中實現逐步發展。從這個時期開始，情況可能會變得更好。',
        '預期會有平凡但舒適的運勢。最好專注於穩定性而不是大的變化。',
        '今年你可以維持日常的流動，沒有特殊事件。一致性在這個時期很重要。',
        '普通水平的運勢會流向你。你可以在沒有重大成功或失敗的情況下穩定度過。',
        '今年你將經歷整體舒適的運勢。通過持續努力，你可以朝著目標前進。'
      ],
      vi: [
        'Bạn sẽ trải nghiệm vận may ổn định tổng thể. Mặc dù không có thay đổi lớn, bạn có thể đạt được tiến bộ ổn định.',
        'Mức vận may trung bình được mong đợi. Đây là thời điểm bạn có thể tiến lên một cách ổn định mà không có biến động lớn.',
        'Năm nay bạn có thể có một năm bình thường nhưng ổn định. Với nỗ lực ổn định, bạn có thể đạt được tiến bộ dần dần.',
        'Bạn có thể mong đợi vận may yên bình mà không có may mắn đặc biệt hay khó khăn. Các công việc hàng ngày sẽ diễn ra suôn sẻ.',
        'Bạn sẽ trải nghiệm vận may ở mức trung bình trong năm nay. Điều quan trọng là tiếp tục tiến lên ổn định mà không có kỳ vọng cao.',
        'Năm nay bạn có thể đạt được tiến bộ dần dần trong dòng chảy ổn định. Mọi thứ có thể tốt hơn bắt đầu từ thời kỳ này.',
        'Vận may bình thường nhưng thoải mái được mong đợi. Tốt hơn là tập trung vào sự ổn định hơn là những thay đổi lớn.',
        'Năm nay bạn có thể duy trì dòng chảy hàng ngày mà không có sự kiện đặc biệt. Tính nhất quán là quan trọng trong thời gian này.',
        'Mức vận may trung bình sẽ chảy đến bạn. Bạn có thể trải qua thời gian ổn định mà không có thành công hay thất bại lớn.',
        'Năm nay bạn sẽ trải nghiệm vận may tổng thể thoải mái. Với nỗ lực ổn định, bạn có thể tiến tới mục tiêu của mình.'
      ],
      id: [
        'Anda akan mengalami keberuntungan stabil secara keseluruhan. Meskipun tidak ada perubahan besar, Anda dapat mencapai kemajuan yang stabil.',
        'Tingkat keberuntungan rata-rata diharapkan. Ini adalah waktu ketika Anda dapat bergerak maju secara stabil tanpa fluktuasi besar.',
        'Tahun ini Anda dapat memiliki tahun yang biasa tetapi stabil. Dengan upaya yang stabil, Anda dapat mencapai kemajuan bertahap.',
        'Anda dapat mengharapkan keberuntungan yang damai tanpa keberuntungan khusus atau kesulitan. Urusan sehari-hari akan berjalan lancar.',
        'Anda akan mengalami keberuntungan tingkat menengah tahun ini. Penting untuk terus bergerak maju secara stabil tanpa harapan tinggi.',
        'Tahun ini Anda dapat mencapai kemajuan bertahap dalam aliran yang stabil. Hal-hal dapat menjadi lebih baik mulai dari periode ini.',
        'Keberuntungan biasa tetapi nyaman diharapkan. Lebih baik fokus pada stabilitas daripada perubahan besar.',
        'Tahun ini Anda dapat mempertahankan aliran harian tanpa peristiwa khusus. Konsistensi penting selama waktu ini.',
        'Tingkat keberuntungan rata-rata akan mengalir kepada Anda. Anda dapat melewati waktu secara stabil tanpa kesuksesan atau kegagalan besar.',
        'Tahun ini Anda akan mengalami keberuntungan keseluruhan yang nyaman. Dengan upaya yang stabil, Anda dapat bergerak menuju tujuan Anda.'
      ]
    },
    emoji: '⭐',
    scoreRange: [70, 79],
    strengths: {
      ko: ['안정성', '꾸준함', '신중함', '책임감', '인내력', '계획성', '절제력', '현실감각', '협조성', '성실함'],
      en: ['Stability', 'Consistency', 'Prudence', 'Responsibility', 'Patience', 'Planning', 'Self-control', 'Realism', 'Cooperation', 'Sincerity'],
      ja: ['安定性', '一貫性', '慎重さ', '責任感', '忍耐力', '計画性', '自制心', '現実感覚', '協調性', '誠実さ'],
      'zh-CN': ['稳定性', '一致性', '谨慎', '责任感', '耐心', '计划性', '自制力', '现实感', '合作性', '诚实'],
      'zh-TW': ['穩定性', '一致性', '謹慎', '責任感', '耐心', '計畫性', '自制力', '現實感', '合作性', '誠實'],
      vi: ['Tính Ổn Định', 'Tính Nhất Quán', 'Sự Thận Trọng', 'Trách Nhiệm', 'Kiên Nhẫn', 'Tính Kế Hoạch', 'Tự Kiểm Soát', 'Cảm Giác Thực Tế', 'Hợp Tác', 'Chân Thành'],
      id: ['Stabilitas', 'Konsistensi', 'Kehati-hatian', 'Tanggung Jawab', 'Kesabaran', 'Perencanaan', 'Kontrol Diri', 'Kesadaran Realitas', 'Kerjasama', 'Ketulusan']
    },
    recommendations: {
      ko: ['안정적인 계획 수립', '꾸준한 자기계발', '신중한 결정', '현실적인 목표 설정', '규칙적인 생활 패턴', '건강 관리', '인간관계 유지', '저축과 투자 계획', '시간 관리', '차분한 마음가짐'],
      en: ['Establish stable plans', 'Consistent self-development', 'Careful decisions', 'Realistic goal setting', 'Regular lifestyle patterns', 'Health management', 'Maintain relationships', 'Savings and investment plans', 'Time management', 'Calm mindset'],
      ja: ['安定した計画立案', '着実な自己啓発', '慎重な決定', '現実的な目標設定', '規則的な生活パターン', '健康管理', '人間関係の維持', '貯蓄と投資計画', '時間管理', '落ち着いた心構え'],
      'zh-CN': ['制定稳定计划', '持续自我发展', '谨慎决定', '设定现实目标', '规律的生活方式', '健康管理', '维持人际关系', '储蓄和投资计划', '时间管理', '冷静心态'],
      'zh-TW': ['制定穩定計畫', '持續自我發展', '謹慎決定', '設定現實目標', '規律的生活方式', '健康管理', '維持人際關係', '儲蓄和投資計畫', '時間管理', '冷靜心態'],
      vi: ['Thiết Lập Kế Hoạch Ổn Định', 'Phát Triển Bản Thân Nhất Quán', 'Quyết Định Thận Trọng', 'Thiết Lập Mục Tiêu Thực Tế', 'Mẫu Sinh Hoạt Thường Xuyên', 'Quản Lý Sức Khỏe', 'Duy Trì Mối Quan Hệ', 'Kế Hoạch Tiết Kiệm và Đầu Tư', 'Quản Lý Thời Gian', 'Tư Duy Bình Tĩnh'],
      id: ['Buat Rencana Stabil', 'Pengembangan Diri Konsisten', 'Keputusan Hati-Hati', 'Penetapan Tujuan Realistis', 'Pola Gaya Hidup Teratur', 'Manajemen Kesehatan', 'Pertahankan Hubungan', 'Rencana Tabungan dan Investasi', 'Manajemen Waktu', 'Pola Pikir Tenang']
    },
    advice: {
      ko: [
        '올해는 안정적인 운세이므로 급하게 서두르기보다는 꾸준히 나아가는 것이 중요합니다.',
        '큰 변화보다는 작은 발전을 추구하는 것이 좋습니다. 계획적으로 한 걸음씩 나아가시기 바랍니다.',
        '안정적인 운세를 활용하기 위해서는 규칙적인 생활과 계획적인 접근이 필요합니다.',
        '올해는 전반적으로 무난한 한 해가 될 것이므로 긍정적인 마음가짐을 유지하는 것이 중요합니다.',
        '큰 기복 없이 안정적으로 흐르는 운세이므로 꾸준한 노력으로 목표를 향해 나아가시기 바랍니다.',
        '특별한 행운을 기대하기보다는 일상적인 일들을 잘 관리하는 것이 올해의 포인트입니다.',
        '안정적인 운세를 바탕으로 더 큰 목표를 향해 차근차근 나아가는 것을 권장합니다.',
        '올해는 큰 변화보다는 안정성에 중점을 두고 생활하는 것이 좋습니다.',
        '꾸준함이 중요한 시기이므로 한 가지씩 차근차근 해결해 나가는 것이 좋습니다.',
        '올해는 전반적으로 평온한 한 해가 될 것이므로 감사하는 마음으로 지내시기 바랍니다.'
      ],
      en: [
        'Since this year has stable fortune, it is important to move forward steadily rather than rushing.',
        'It is better to pursue small progress rather than big changes. Please move forward step by step systematically.',
        'To take advantage of stable fortune, regular lifestyle and systematic approach are necessary.',
        'Since this year will be generally comfortable, it is important to maintain a positive mindset.',
        'Since the fortune flows stably without major fluctuations, please move toward your goals with steady effort.',
        'Rather than expecting special luck, managing daily affairs well is the key point for this year.',
        'It is recommended to gradually move toward bigger goals based on stable fortune.',
        'This year it is better to focus on stability rather than big changes in your life.',
        'Since consistency is important during this time, it is good to solve things one by one step by step.',
        'Since this year will be generally peaceful, please live with a grateful heart.'
      ],
      ja: [
        '今年は安定した運勢なので、急いで進むよりも着実に進むことが重要です。',
        '大きな変化よりも小さな発展を追求することが良いでしょう。計画的に一歩ずつ進むことをお勧めします。',
        '安定した運勢を活用するためには、規則的な生活と計画的なアプローチが必要です。',
        '今年は全体的に無難な一年になるので、ポジティブな心構えを維持することが重要です。',
        '大きな変動なく安定して流れる運勢なので、着実な努力で目標に向かって進むことをお勧めします。',
        '特別な幸運を期待するよりも、日常的なことをよく管理することが今年のポイントです。',
        '安定した運勢を基に、より大きな目標に向かって着実に進むことをお勧めします。',
        '今年は大きな変化よりも安定性に重点を置いて生活することが良いでしょう。',
        '一貫性が重要な時期なので、一つずつ着実に解決していくことが良いでしょう。',
        '今年は全体的に平穏な一年になるので、感謝の気持ちで過ごすことをお勧めします。'
      ],
      'zh-CN': [
        '由于今年有稳定的运势，稳步前进而不是匆忙前行很重要。',
        '最好追求小的进展而不是大的变化。请系统地一步一步前进。',
        '为了利用稳定的运势，需要规律的生活方式和系统的方法。',
        '由于今年总体上会很舒适，保持积极的心态很重要。',
        '由于运势在没有大波动的情况下稳定流动，请通过持续努力朝着目标前进。',
        '与其期待特别的运气，不如很好地管理日常事务是今年的关键点。',
        '建议基于稳定的运势逐步朝着更大的目标前进。',
        '今年最好专注于稳定性而不是生活中的大变化。',
        '由于一致性在这个时期很重要，逐步一个一个解决问题是好的。',
        '由于今年总体上会很平静，请怀着感恩的心生活。'
      ],
      'zh-TW': [
        '由於今年有穩定的運勢，穩步前進而不是匆忙前行很重要。',
        '最好追求小的進展而不是大的變化。請系統地一步一步前進。',
        '為了利用穩定的運勢，需要規律的生活方式和系統的方法。',
        '由於今年總體上會很舒適，保持積極的心態很重要。',
        '由於運勢在沒有大波動的情況下穩定流動，請通過持續努力朝著目標前進。',
        '與其期待特別的運氣，不如很好地管理日常事務是今年的關鍵點。',
        '建議基於穩定的運勢逐步朝著更大的目標前進。',
        '今年最好專注於穩定性而不是生活中的大變化。',
        '由於一致性在這個時期很重要，逐步一個一個解決問題是好的。',
        '由於今年總體上會很平靜，請懷著感恩的心生活。'
      ],
      vi: [
        'Vì năm nay có vận may ổn định, điều quan trọng là tiến lên ổn định hơn là vội vã.',
        'Tốt hơn là theo đuổi tiến bộ nhỏ hơn là thay đổi lớn. Vui lòng tiến lên từng bước một một cách có hệ thống.',
        'Để tận dụng vận may ổn định, cần có lối sống thường xuyên và cách tiếp cận có hệ thống.',
        'Vì năm nay sẽ thoải mái nói chung, điều quan trọng là duy trì tư duy tích cực.',
        'Vì vận may chảy ổn định mà không có biến động lớn, vui lòng tiến tới mục tiêu của bạn với nỗ lực ổn định.',
        'Thay vì mong đợi may mắn đặc biệt, quản lý tốt các công việc hàng ngày là điểm then chốt cho năm nay.',
        'Nên dần dần tiến tới các mục tiêu lớn hơn dựa trên vận may ổn định.',
        'Năm nay tốt hơn là tập trung vào sự ổn định hơn là những thay đổi lớn trong cuộc sống của bạn.',
        'Vì tính nhất quán là quan trọng trong thời gian này, tốt là giải quyết mọi thứ từng cái một từng bước.',
        'Vì năm nay sẽ yên bình nói chung, vui lòng sống với trái tim biết ơn.'
      ],
      id: [
        'Karena tahun ini memiliki keberuntungan stabil, penting untuk bergerak maju secara stabil daripada terburu-buru.',
        'Lebih baik mengejar kemajuan kecil daripada perubahan besar. Silakan bergerak maju langkah demi langkah secara sistematis.',
        'Untuk memanfaatkan keberuntungan stabil, diperlukan gaya hidup teratur dan pendekatan sistematis.',
        'Karena tahun ini akan nyaman secara keseluruhan, penting untuk mempertahankan pola pikir positif.',
        'Karena keberuntungan mengalir stabil tanpa fluktuasi besar, silakan bergerak menuju tujuan Anda dengan upaya yang stabil.',
        'Daripada mengharapkan keberuntungan khusus, mengelola urusan sehari-hari dengan baik adalah titik kunci untuk tahun ini.',
        'Disarankan untuk secara bertahap bergerak menuju tujuan yang lebih besar berdasarkan keberuntungan stabil.',
        'Tahun ini lebih baik fokus pada stabilitas daripada perubahan besar dalam hidup Anda.',
        'Karena konsistensi penting selama waktu ini, baik untuk menyelesaikan hal-hal satu per satu langkah demi langkah.',
        'Karena tahun ini akan damai secara keseluruhan, silakan hidup dengan hati yang bersyukur.'
      ]
    },
    fortune: {
      wealth: {
        ko: [
          `${getFutureMonthShort(3)}부터 재물의 흐름이 안정적으로 유지될 것입니다. 큰 변화는 없지만 점진적으로 개선될 수 있습니다.`,
          `올해 재물운은 전반적으로 평범한 수준입니다. ${getFutureMonthShort(5)}부터는 조금 더 나아질 수 있습니다.`,
          `${getFutureMonthShort(2)}에 재물 관련 작은 성과가 있을 수 있습니다. 하지만 계획적으로 관리하시기 바랍니다.`,
          `올해 재물운은 큰 기복 없이 안정적입니다. ${getFutureMonthShort(6)}에는 더 신중하게 관리하는 것이 좋습니다.`,
          `${getFutureMonthShort(4)}부터 재물의 흐름이 좋아질 수 있습니다. 하지만 서두르지 말고 신중하게 접근하시기 바랍니다.`,
          `올해 재물운은 전반적으로 무난합니다. ${getFutureMonthShort(7)}부터는 더 큰 발전을 기대할 수 있을 것입니다.`,
          `${getFutureMonthShort(1)}부터 재물 관리에 더욱 신경 쓰시기 바랍니다. 규칙적인 저축 계획을 세우는 것이 좋습니다.`,
          `올해 재물운은 점진적으로 개선될 것입니다. ${getFutureMonthShort(8)}부터는 더 안정적인 흐름을 유지할 수 있을 것입니다.`,
          `${getFutureMonthShort(9)}에 재물 관련 긍정적인 변화가 있을 수 있습니다. 하지만 무리한 투자는 피하시기 바랍니다.`,
          `올해 재물운은 안정적이면서도 발전적입니다. ${getFutureMonthShort(10)}부터는 더 좋은 결과를 얻을 수 있을 것입니다.`
        ],
        get en() {
          return [
            `From ${getFutureMonthShortEn(3)}, the flow of wealth will remain stable. While there are no major changes, gradual improvement is possible.`,
            `This year's wealth fortune is generally average. From ${getFutureMonthShortEn(5)}, it can improve a bit more.`,
            `In ${getFutureMonthShortEn(2)}, there may be small achievements related to wealth. However, manage them systematically.`,
            `This year's wealth fortune is stable without major fluctuations. In ${getFutureMonthShortEn(6)}, it is good to manage more carefully.`,
            `From ${getFutureMonthShortEn(4)}, the flow of wealth can improve. However, do not rush and approach carefully.`,
            `This year's wealth fortune is generally comfortable. From ${getFutureMonthShortEn(7)}, greater development can be expected.`,
            `From ${getFutureMonthShortEn(1)}, pay more attention to wealth management. It is good to establish regular savings plans.`,
            `This year's wealth fortune will improve gradually. From ${getFutureMonthShortEn(8)}, a more stable flow can be maintained.`,
            `In ${getFutureMonthShortEn(9)}, there may be positive changes related to wealth. However, avoid excessive investments.`,
            `This year's wealth fortune is stable and progressive. From ${getFutureMonthShortEn(10)}, better results can be achieved.`
          ];
        },
        get ja() {
          return [
            `${getFutureMonthShortJa(3)}から財運の流れが安定して維持されるでしょう。大きな変化はありませんが、段階的な改善が可能です。`,
            `今年の財運は全体的に平均的です。${getFutureMonthShortJa(5)}からは少しずつ良くなる可能性があります。`,
            `${getFutureMonthShortJa(2)}に財運に関する小さな成果があるかもしれません。しかし、計画的に管理することをお勧めします。`,
            `今年の財運は大きな変動なく安定しています。${getFutureMonthShortJa(6)}にはより慎重に管理することが良いでしょう。`,
            `${getFutureMonthShortJa(4)}から財運の流れが良くなる可能性があります。しかし、急がず慎重にアプローチすることをお勧めします。`,
            `今年の財運は全体的に無難です。${getFutureMonthShortJa(7)}からはより大きな発展が期待できるでしょう。`,
            `${getFutureMonthShortJa(1)}から財運管理により神経を使うことをお勧めします。規則的な貯蓄計画を立てることが良いでしょう。`,
            `今年の財運は段階的に改善するでしょう。${getFutureMonthShortJa(8)}からはより安定した流れを維持できるでしょう。`,
            `${getFutureMonthShortJa(9)}に財運に関する前向きな変化があるかもしれません。しかし、無理な投資は避けることをお勧めします。`,
            `今年の財運は安定しながらも発展的です。${getFutureMonthShortJa(10)}からはより良い結果を得ることができるでしょう。`
          ];
        },
        get 'zh-CN'() {
          return [
            `从${getFutureMonthShortZhCN(3)}开始，财富流将保持稳定。虽然没有大的变化，但可以逐步改善。`,
            `今年的财运总体平均。从${getFutureMonthShortZhCN(5)}开始，可以稍微改善。`,
            `${getFutureMonthShortZhCN(2)}可能会有与财富相关的小成就。但要系统地管理它们。`,
            `今年的财运稳定，没有大波动。在${getFutureMonthShortZhCN(6)}，更仔细地管理是好的。`,
            `从${getFutureMonthShortZhCN(4)}开始，财富流可以改善。但不要匆忙，要谨慎接近。`,
            `今年的财运总体舒适。从${getFutureMonthShortZhCN(7)}开始，可以期待更大的发展。`,
            `从${getFutureMonthShortZhCN(1)}开始，需要更加关注财富管理。制定定期储蓄计划是好的。`,
            `今年的财运将逐步改善。从${getFutureMonthShortZhCN(8)}开始，可以保持更稳定的流动。`,
            `${getFutureMonthShortZhCN(9)}可能会有与财富相关的积极变化。但要避免过度投资。`,
            `今年的财运稳定且进步。从${getFutureMonthShortZhCN(10)}开始，可以获得更好的结果。`
          ];
        },
        get 'zh-TW'() {
          return [
            `從${getFutureMonthShortZhTW(3)}開始，財富流將保持穩定。雖然沒有大的變化，但可以逐步改善。`,
            `今年的財運總體平均。從${getFutureMonthShortZhTW(5)}開始，可以稍微改善。`,
            `${getFutureMonthShortZhTW(2)}可能會有與財富相關的小成就。但要系統地管理它們。`,
            `今年的財運穩定，沒有大波動。在${getFutureMonthShortZhTW(6)}，更仔細地管理是好的。`,
            `從${getFutureMonthShortZhTW(4)}開始，財富流可以改善。但不要匆忙，要謹慎接近。`,
            `今年的財運總體舒適。從${getFutureMonthShortZhTW(7)}開始，可以期待更大的發展。`,
            `從${getFutureMonthShortZhTW(1)}開始，需要更加關注財富管理。制定定期儲蓄計劃是好的。`,
            `今年的財運將逐步改善。從${getFutureMonthShortZhTW(8)}開始，可以保持更穩定的流動。`,
            `${getFutureMonthShortZhTW(9)}可能會有與財富相關的積極變化。但要避免過度投資。`,
            `今年的財運穩定且進步。從${getFutureMonthShortZhTW(10)}開始，可以獲得更好的結果。`
          ];
        },
        get vi() {
          return [
            `Từ ${getFutureMonthShortVi(3)}, dòng chảy tài chính sẽ duy trì ổn định. Mặc dù không có thay đổi lớn, cải thiện dần dần là có thể.`,
            `Vận tài chính năm nay nói chung ở mức trung bình. Từ ${getFutureMonthShortVi(5)}, có thể cải thiện hơn một chút.`,
            `Vào ${getFutureMonthShortVi(2)}, có thể có thành tựu nhỏ liên quan đến tài chính. Tuy nhiên, hãy quản lý chúng một cách có hệ thống.`,
            `Vận tài chính năm nay ổn định mà không có biến động lớn. Vào ${getFutureMonthShortVi(6)}, quản lý cẩn thận hơn là tốt.`,
            `Từ ${getFutureMonthShortVi(4)}, dòng chảy tài chính có thể cải thiện. Tuy nhiên, đừng vội vàng và hãy tiếp cận cẩn thận.`,
            `Vận tài chính năm nay nói chung thoải mái. Từ ${getFutureMonthShortVi(7)}, có thể mong đợi phát triển lớn hơn.`,
            `Từ ${getFutureMonthShortVi(1)}, cần chú ý hơn đến việc quản lý tài chính. Lập kế hoạch tiết kiệm thường xuyên là tốt.`,
            `Vận tài chính năm nay sẽ cải thiện dần dần. Từ ${getFutureMonthShortVi(8)}, có thể duy trì dòng chảy ổn định hơn.`,
            `Vào ${getFutureMonthShortVi(9)}, có thể có những thay đổi tích cực liên quan đến tài chính. Tuy nhiên, hãy tránh đầu tư quá mức.`,
            `Vận tài chính năm nay ổn định và tiến bộ. Từ ${getFutureMonthShortVi(10)}, có thể đạt được kết quả tốt hơn.`
          ];
        },
        get id() {
          return [
            `Dari ${getFutureMonthShortId(3)}, aliran kekayaan akan tetap stabil. Meskipun tidak ada perubahan besar, perbaikan bertahap dimungkinkan.`,
            `Keberuntungan kekayaan tahun ini umumnya rata-rata. Dari ${getFutureMonthShortId(5)}, dapat meningkat sedikit lebih.`,
            `Pada ${getFutureMonthShortId(2)}, mungkin ada pencapaian kecil terkait kekayaan. Namun, kelola mereka secara sistematis.`,
            `Keberuntungan kekayaan tahun ini stabil tanpa fluktuasi besar. Pada ${getFutureMonthShortId(6)}, baik untuk mengelola lebih hati-hati.`,
            `Dari ${getFutureMonthShortId(4)}, aliran kekayaan dapat membaik. Namun, jangan terburu-buru dan dekati dengan hati-hati.`,
            `Keberuntungan kekayaan tahun ini umumnya nyaman. Dari ${getFutureMonthShortId(7)}, perkembangan yang lebih besar dapat diharapkan.`,
            `Dari ${getFutureMonthShortId(1)}, perhatikan lebih pada manajemen kekayaan. Baik untuk membuat rencana tabungan teratur.`,
            `Keberuntungan kekayaan tahun ini akan membaik secara bertahap. Dari ${getFutureMonthShortId(8)}, aliran yang lebih stabil dapat dipertahankan.`,
            `Pada ${getFutureMonthShortId(9)}, mungkin ada perubahan positif terkait kekayaan. Namun, hindari investasi berlebihan.`,
            `Keberuntungan kekayaan tahun ini stabil dan progresif. Dari ${getFutureMonthShortId(10)}, hasil yang lebih baik dapat dicapai.`
          ];
        }
      },
      health: {
        ko: [
          `올해 건강운은 전반적으로 양호합니다. ${getFutureMonthShort(2)}부터는 더욱 좋아질 수 있습니다.`,
          `${getFutureMonthShort(3)}에 건강 관련 긍정적인 변화가 있을 수 있습니다. 규칙적인 건강 관리를 시작하시기 바랍니다.`,
          `올해 건강운은 안정적으로 유지될 것입니다. ${getFutureMonthShort(4)}부터는 더욱 신경 쓰시기 바랍니다.`,
          `${getFutureMonthShort(1)}부터 건강 관리에 더욱 주의를 기울이는 것이 좋습니다. 작은 증상도 무시하지 마세요.`,
          `올해 건강운은 전반적으로 무난합니다. ${getFutureMonthShort(5)}에는 정기 검진을 권장합니다.`,
          `${getFutureMonthShort(6)}에 건강 관련 작은 개선이 있을 수 있습니다. 하지만 계속해서 관리를 유지하시기 바랍니다.`,
          `올해 건강운은 큰 변화 없이 안정적입니다. ${getFutureMonthShort(7)}부터는 더 큰 변화를 기대할 수 있을 것입니다.`,
          `${getFutureMonthShort(8)}에 건강 관련 좋은 소식이 있을 수 있습니다. 규칙적인 운동을 시작하는 것이 좋습니다.`,
          `${getFutureMonthShort(9)}부터는 건강운이 더욱 좋아질 수 있습니다. 하지만 무리하지 않도록 주의하시기 바랍니다.`,
          `올해 건강운은 안정적이면서도 발전적입니다. ${getFutureMonthShort(10)}부터는 더 좋은 결과를 얻을 수 있을 것입니다.`
        ],
        get en() {
          return [
            `This year's health fortune is generally good. From ${getFutureMonthShortEn(2)}, it can improve even more.`,
            `In ${getFutureMonthShortEn(3)}, there may be positive changes related to health. Start regular health management.`,
            `This year's health fortune will remain stable. From ${getFutureMonthShortEn(4)}, pay more attention.`,
            `From ${getFutureMonthShortEn(1)}, it is good to pay more attention to health management. Do not ignore even small symptoms.`,
            `This year's health fortune is generally comfortable. In ${getFutureMonthShortEn(5)}, regular checkups are recommended.`,
            `In ${getFutureMonthShortEn(6)}, there may be small improvements related to health. However, continue to maintain management.`,
            `This year's health fortune is stable without major changes. From ${getFutureMonthShortEn(7)}, greater changes can be expected.`,
            `In ${getFutureMonthShortEn(8)}, there may be good news related to health. It is good to start regular exercise.`,
            `From ${getFutureMonthShortEn(9)}, health fortune can improve significantly. However, be careful not to overdo things.`,
            `This year's health fortune is stable and progressive. From ${getFutureMonthShortEn(10)}, better results can be achieved.`
          ];
        },
        get ja() {
          return [
            `今年の健康運は全体的に良好です。${getFutureMonthShortJa(2)}からはさらに良くなる可能性があります。`,
            `${getFutureMonthShortJa(3)}に健康に関する前向きな変化があるかもしれません。規則的な健康管理を始めることをお勧めします。`,
            `今年の健康運は安定して維持されるでしょう。${getFutureMonthShortJa(4)}からはより神経を使うことをお勧めします。`,
            `${getFutureMonthShortJa(1)}から健康管理により注意を払うことが良いでしょう。小さな症状でも無視しないでください。`,
            `今年の健康運は全体的に無難です。${getFutureMonthShortJa(5)}には定期健診をお勧めします。`,
            `${getFutureMonthShortJa(6)}に健康に関する小さな改善があるかもしれません。しかし、継続して管理を維持することをお勧めします。`,
            `今年の健康運は大きな変化なく安定しています。${getFutureMonthShortJa(7)}からはより大きな変化が期待できるでしょう。`,
            `${getFutureMonthShortJa(8)}に健康に関する良い知らせがあるかもしれません。規則的な運動を始めることが良いでしょう。`,
            `${getFutureMonthShortJa(9)}からは健康運がさらに良くなる可能性があります。しかし、無理をしないように注意することをお勧めします。`,
            `今年の健康運は安定しながらも発展的です。${getFutureMonthShortJa(10)}からはより良い結果を得ることができるでしょう。`
          ];
        },
        get 'zh-CN'() {
          return [
            `今年的健康运总体良好。从${getFutureMonthShortZhCN(2)}开始，可以进一步改善。`,
            `${getFutureMonthShortZhCN(3)}可能会有与健康相关的积极变化。开始定期健康管理。`,
            `今年的健康运将保持稳定。从${getFutureMonthShortZhCN(4)}开始，要更加注意。`,
            `从${getFutureMonthShortZhCN(1)}开始，更加关注健康管理是好的。即使是很小的症状也不要忽视。`,
            `今年的健康运总体舒适。在${getFutureMonthShortZhCN(5)}，建议定期检查。`,
            `${getFutureMonthShortZhCN(6)}可能会有与健康相关的小改善。但要继续维持管理。`,
            `今年的健康运稳定，没有大变化。从${getFutureMonthShortZhCN(7)}开始，可以期待更大的变化。`,
            `${getFutureMonthShortZhCN(8)}可能会有与健康相关的好消息。开始定期运动是好的。`,
            `从${getFutureMonthShortZhCN(9)}开始，健康运可以显著改善。但要注意不要过度。`,
            `今年的健康运稳定且进步。从${getFutureMonthShortZhCN(10)}开始，可以获得更好的结果。`
          ];
        },
        get 'zh-TW'() {
          return [
            `今年的健康運總體良好。從${getFutureMonthShortZhTW(2)}開始，可以進一步改善。`,
            `${getFutureMonthShortZhTW(3)}可能會有與健康相關的積極變化。開始定期健康管理。`,
            `今年的健康運將保持穩定。從${getFutureMonthShortZhTW(4)}開始，要更加注意。`,
            `從${getFutureMonthShortZhTW(1)}開始，更加關注健康管理是好的。即使是很小的症狀也不要忽視。`,
            `今年的健康運總體舒適。在${getFutureMonthShortZhTW(5)}，建議定期檢查。`,
            `${getFutureMonthShortZhTW(6)}可能會有與健康相關的小改善。但要繼續維持管理。`,
            `今年的健康運穩定，沒有大變化。從${getFutureMonthShortZhTW(7)}開始，可以期待更大的變化。`,
            `${getFutureMonthShortZhTW(8)}可能會有與健康相關的好消息。開始定期運動是好的。`,
            `從${getFutureMonthShortZhTW(9)}開始，健康運可以顯著改善。但要注意不要過度。`,
            `今年的健康運穩定且進步。從${getFutureMonthShortZhTW(10)}開始，可以獲得更好的結果。`
          ];
        },
        get vi() {
          return [
            `Vận sức khỏe năm nay nói chung tốt. Từ ${getFutureMonthShortVi(2)}, có thể cải thiện hơn nữa.`,
            `Vào ${getFutureMonthShortVi(3)}, có thể có những thay đổi tích cực liên quan đến sức khỏe. Hãy bắt đầu quản lý sức khỏe thường xuyên.`,
            `Vận sức khỏe năm nay sẽ duy trì ổn định. Từ ${getFutureMonthShortVi(4)}, nên chú ý hơn.`,
            `Từ ${getFutureMonthShortVi(1)}, nên chú ý hơn đến việc quản lý sức khỏe. Đừng bỏ qua ngay cả những triệu chứng nhỏ.`,
            `Vận sức khỏe năm nay nói chung thoải mái. Vào ${getFutureMonthShortVi(5)}, nên kiểm tra sức khỏe định kỳ.`,
            `Vào ${getFutureMonthShortVi(6)}, có thể có những cải thiện nhỏ liên quan đến sức khỏe. Tuy nhiên, hãy tiếp tục duy trì quản lý.`,
            `Vận sức khỏe năm nay ổn định mà không có thay đổi lớn. Từ ${getFutureMonthShortVi(7)}, có thể mong đợi những thay đổi lớn hơn.`,
            `Vào ${getFutureMonthShortVi(8)}, có thể có tin tốt liên quan đến sức khỏe. Nên bắt đầu tập thể dục thường xuyên.`,
            `Từ ${getFutureMonthShortVi(9)}, vận sức khỏe có thể cải thiện đáng kể. Tuy nhiên, hãy cẩn thận đừng làm quá sức.`,
            `Vận sức khỏe năm nay ổn định và tiến bộ. Từ ${getFutureMonthShortVi(10)}, có thể đạt được kết quả tốt hơn.`
          ];
        },
        get id() {
          return [
            `Keberuntungan kesehatan tahun ini umumnya baik. Dari ${getFutureMonthShortId(2)}, dapat meningkat lebih lanjut.`,
            `Pada ${getFutureMonthShortId(3)}, mungkin ada perubahan positif terkait kesehatan. Mulailah manajemen kesehatan rutin.`,
            `Keberuntungan kesehatan tahun ini akan tetap stabil. Dari ${getFutureMonthShortId(4)}, perhatikan lebih.`,
            `Dari ${getFutureMonthShortId(1)}, baik untuk memperhatikan lebih pada manajemen kesehatan. Jangan abaikan bahkan gejala kecil.`,
            `Keberuntungan kesehatan tahun ini umumnya nyaman. Pada ${getFutureMonthShortId(5)}, pemeriksaan rutin direkomendasikan.`,
            `Pada ${getFutureMonthShortId(6)}, mungkin ada peningkatan kecil terkait kesehatan. Namun, teruslah menjaga manajemen.`,
            `Keberuntungan kesehatan tahun ini stabil tanpa perubahan besar. Dari ${getFutureMonthShortId(7)}, perubahan yang lebih besar dapat diharapkan.`,
            `Pada ${getFutureMonthShortId(8)}, mungkin ada berita baik terkait kesehatan. Baik untuk mulai olahraga rutin.`,
            `Dari ${getFutureMonthShortId(9)}, keberuntungan kesehatan dapat membaik secara signifikan. Namun, berhati-hatilah untuk tidak berlebihan.`,
            `Keberuntungan kesehatan tahun ini stabil dan progresif. Dari ${getFutureMonthShortId(10)}, hasil yang lebih baik dapat dicapai.`
          ];
        }
      },
      love: {
        ko: [
          `${getFutureMonthShort(3)}에 연애 관련 안정적인 변화가 있을 수 있습니다. 기존 관계가 있다면 더욱 발전시킬 수 있습니다.`,
          `올해 연애운은 전반적으로 평범한 수준입니다. ${getFutureMonthShort(4)}부터는 조금 더 나아질 수 있습니다.`,
          `${getFutureMonthShort(2)}에 연애 관련 작은 성과가 있을 수 있습니다. 하지만 인내심을 가지고 접근하시기 바랍니다.`,
          `올해 연애운은 큰 기복 없이 안정적입니다. ${getFutureMonthShort(5)}부터는 더 활발해질 수 있습니다.`,
          `${getFutureMonthShort(6)}에 연애 관련 긍정적인 변화가 있을 수 있습니다. 이 시기를 놓치지 않고 노력하시기 바랍니다.`,
          `올해 연애운은 전반적으로 무난합니다. ${getFutureMonthShort(7)}부터는 더 큰 발전을 기대할 수 있을 것입니다.`,
          `${getFutureMonthShort(1)}부터 연애 운에 더욱 신경 쓰시기 바랍니다. 하지만 서두르지 말고 천천히 나아가시기 바랍니다.`,
          `올해 연애운은 점진적으로 개선될 것입니다. ${getFutureMonthShort(8)}부터는 더 안정적인 관계를 맺을 수 있을 것입니다.`,
          `${getFutureMonthShort(9)}에 연애 관련 작은 기쁨이 있을 수 있습니다. 하지만 현실적인 기대를 가지시기 바랍니다.`,
          `올해 연애운은 안정적이면서도 발전적입니다. ${getFutureMonthShort(10)}부터는 더 좋은 결과를 얻을 수 있을 것입니다.`
        ],
        get en() {
          return [
            `In ${getFutureMonthShortEn(3)}, there may be stable changes related to love. If you have an existing relationship, it can develop further.`,
            `This year's love fortune is generally average. From ${getFutureMonthShortEn(4)}, it can improve a bit more.`,
            `In ${getFutureMonthShortEn(2)}, there may be small achievements related to love. However, approach with patience.`,
            `This year's love fortune is stable without major fluctuations. From ${getFutureMonthShortEn(5)}, it can become more active.`,
            `In ${getFutureMonthShortEn(6)}, there may be positive changes related to love. Do not miss this period and work hard.`,
            `This year's love fortune is generally comfortable. From ${getFutureMonthShortEn(7)}, greater development can be expected.`,
            `From ${getFutureMonthShortEn(1)}, pay more attention to love fortune. However, do not rush and proceed slowly.`,
            `This year's love fortune will improve gradually. From ${getFutureMonthShortEn(8)}, more stable relationships can be formed.`,
            `In ${getFutureMonthShortEn(9)}, there may be small joys related to love. However, have realistic expectations.`,
            `This year's love fortune is stable and progressive. From ${getFutureMonthShortEn(10)}, better results can be achieved.`
          ];
        },
        get ja() {
          return [
            `${getFutureMonthShortJa(3)}に恋愛に関する安定した変化があるかもしれません。既存の関係があればさらに発展させることができます。`,
            `今年の恋愛運は全体的に平均的です。${getFutureMonthShortJa(4)}からは少しずつ良くなる可能性があります。`,
            `${getFutureMonthShortJa(2)}に恋愛に関する小さな成果があるかもしれません。しかし、忍耐強くアプローチすることをお勧めします。`,
            `今年の恋愛運は大きな変動なく安定しています。${getFutureMonthShortJa(5)}からはより活発になる可能性があります。`,
            `${getFutureMonthShortJa(6)}に恋愛に関する前向きな変化があるかもしれません。この時期を逃さず努力することをお勧めします。`,
            `今年の恋愛運は全体的に無難です。${getFutureMonthShortJa(7)}からはより大きな発展が期待できるでしょう。`,
            `${getFutureMonthShortJa(1)}から恋愛運により神経を使うことをお勧めします。しかし、急がずゆっくり進むことをお勧めします。`,
            `今年の恋愛運は段階的に改善するでしょう。${getFutureMonthShortJa(8)}からはより安定した関係を築くことができるでしょう。`,
            `${getFutureMonthShortJa(9)}に恋愛に関する小さな喜びがあるかもしれません。しかし、現実的な期待を持つことをお勧めします。`,
            `今年の恋愛運は安定しながらも発展的です。${getFutureMonthShortJa(10)}からはより良い結果を得ることができるでしょう。`
          ];
        },
        get 'zh-CN'() {
          return [
            `${getFutureMonthShortZhCN(3)}可能会有与恋爱相关的稳定变化。如果你有现有关系，可以进一步发展。`,
            `今年的恋爱运总体平均。从${getFutureMonthShortZhCN(4)}开始，可以稍微改善。`,
            `${getFutureMonthShortZhCN(2)}可能会有与恋爱相关的小成就。但要耐心接近。`,
            `今年的恋爱运稳定，没有大波动。从${getFutureMonthShortZhCN(5)}开始，可以变得更加活跃。`,
            `${getFutureMonthShortZhCN(6)}可能会有与恋爱相关的积极变化。不要错过这个时期，要努力。`,
            `今年的恋爱运总体舒适。从${getFutureMonthShortZhCN(7)}开始，可以期待更大的发展。`,
            `从${getFutureMonthShortZhCN(1)}开始，需要更加关注恋爱运。但不要匆忙，要慢慢前进。`,
            `今年的恋爱运将逐步改善。从${getFutureMonthShortZhCN(8)}开始，可以建立更稳定的关系。`,
            `${getFutureMonthShortZhCN(9)}可能会有与恋爱相关的小喜悦。但要有现实的期望。`,
            `今年的恋爱运稳定且进步。从${getFutureMonthShortZhCN(10)}开始，可以获得更好的结果。`
          ];
        },
        get 'zh-TW'() {
          return [
            `${getFutureMonthShortZhTW(3)}可能會有與戀愛相關的穩定變化。如果你有現有關係，可以進一步發展。`,
            `今年的戀愛運總體平均。從${getFutureMonthShortZhTW(4)}開始，可以稍微改善。`,
            `${getFutureMonthShortZhTW(2)}可能會有與戀愛相關的小成就。但要耐心接近。`,
            `今年的戀愛運穩定，沒有大波動。從${getFutureMonthShortZhTW(5)}開始，可以變得更加活躍。`,
            `${getFutureMonthShortZhTW(6)}可能會有與戀愛相關的積極變化。不要錯過這個時期，要努力。`,
            `今年的戀愛運總體舒適。從${getFutureMonthShortZhTW(7)}開始，可以期待更大的發展。`,
            `從${getFutureMonthShortZhTW(1)}開始，需要更加關注戀愛運。但不要匆忙，要慢慢前進。`,
            `今年的戀愛運將逐步改善。從${getFutureMonthShortZhTW(8)}開始，可以建立更穩定的關係。`,
            `${getFutureMonthShortZhTW(9)}可能會有與戀愛相關的小喜悅。但要有現實的期望。`,
            `今年的戀愛運穩定且進步。從${getFutureMonthShortZhTW(10)}開始，可以獲得更好的結果。`
          ];
        },
        get vi() {
          return [
            `Vào ${getFutureMonthShortVi(3)}, có thể có những thay đổi ổn định liên quan đến tình yêu. Nếu bạn có một mối quan hệ hiện tại, nó có thể phát triển thêm.`,
            `Vận tình yêu năm nay nói chung ở mức trung bình. Từ ${getFutureMonthShortVi(4)}, có thể cải thiện hơn một chút.`,
            `Vào ${getFutureMonthShortVi(2)}, có thể có thành tựu nhỏ liên quan đến tình yêu. Tuy nhiên, hãy tiếp cận với sự kiên nhẫn.`,
            `Vận tình yêu năm nay ổn định mà không có biến động lớn. Từ ${getFutureMonthShortVi(5)}, có thể trở nên tích cực hơn.`,
            `Vào ${getFutureMonthShortVi(6)}, có thể có những thay đổi tích cực liên quan đến tình yêu. Đừng bỏ lỡ thời kỳ này và hãy nỗ lực.`,
            `Vận tình yêu năm nay nói chung thoải mái. Từ ${getFutureMonthShortVi(7)}, có thể mong đợi phát triển lớn hơn.`,
            `Từ ${getFutureMonthShortVi(1)}, nên chú ý hơn đến vận tình yêu. Tuy nhiên, đừng vội vàng và hãy tiến lên từ từ.`,
            `Vận tình yêu năm nay sẽ cải thiện dần dần. Từ ${getFutureMonthShortVi(8)}, có thể hình thành các mối quan hệ ổn định hơn.`,
            `Vào ${getFutureMonthShortVi(9)}, có thể có niềm vui nhỏ liên quan đến tình yêu. Tuy nhiên, hãy có kỳ vọng thực tế.`,
            `Vận tình yêu năm nay ổn định và tiến bộ. Từ ${getFutureMonthShortVi(10)}, có thể đạt được kết quả tốt hơn.`
          ];
        },
        get id() {
          return [
            `Pada ${getFutureMonthShortId(3)}, mungkin ada perubahan stabil terkait cinta. Jika Anda memiliki hubungan yang ada, dapat berkembang lebih lanjut.`,
            `Keberuntungan cinta tahun ini umumnya rata-rata. Dari ${getFutureMonthShortId(4)}, dapat meningkat sedikit lebih.`,
            `Pada ${getFutureMonthShortId(2)}, mungkin ada pencapaian kecil terkait cinta. Namun, dekati dengan kesabaran.`,
            `Keberuntungan cinta tahun ini stabil tanpa fluktuasi besar. Dari ${getFutureMonthShortId(5)}, dapat menjadi lebih aktif.`,
            `Pada ${getFutureMonthShortId(6)}, mungkin ada perubahan positif terkait cinta. Jangan lewatkan periode ini dan berusahalah.`,
            `Keberuntungan cinta tahun ini umumnya nyaman. Dari ${getFutureMonthShortId(7)}, perkembangan yang lebih besar dapat diharapkan.`,
            `Dari ${getFutureMonthShortId(1)}, perhatikan lebih pada keberuntungan cinta. Namun, jangan terburu-buru dan lanjutkan perlahan.`,
            `Keberuntungan cinta tahun ini akan membaik secara bertahap. Dari ${getFutureMonthShortId(8)}, hubungan yang lebih stabil dapat dibentuk.`,
            `Pada ${getFutureMonthShortId(9)}, mungkin ada kegembiraan kecil terkait cinta. Namun, miliki harapan yang realistis.`,
            `Keberuntungan cinta tahun ini stabil dan progresif. Dari ${getFutureMonthShortId(10)}, hasil yang lebih baik dapat dicapai.`
          ];
        }
      },
      business: {
        ko: [
          `${getFutureMonthShort(3)}부터 사업운이 안정적으로 유지될 것입니다. 큰 변화는 없지만 점진적으로 개선될 수 있습니다.`,
          `올해 사업운은 전반적으로 평범한 수준입니다. ${getFutureMonthShort(4)}부터는 조금 더 나아질 수 있습니다.`,
          `${getFutureMonthShort(2)}에 사업 관련 작은 성과가 있을 수 있습니다. 하지만 계획적으로 접근하시기 바랍니다.`,
          `올해 사업운은 큰 기복 없이 안정적입니다. ${getFutureMonthShort(5)}에는 더 신중하게 결정하는 것이 좋습니다.`,
          `${getFutureMonthShort(6)}부터 사업운이 좋아질 수 있습니다. 하지만 서두르지 말고 신중하게 접근하시기 바랍니다.`,
          `올해 사업운은 전반적으로 무난합니다. ${getFutureMonthShort(7)}부터는 더 큰 발전을 기대할 수 있을 것입니다.`,
          `${getFutureMonthShort(1)}부터 사업 계획에 더욱 신경 쓰시기 바랍니다. 현실적인 목표를 설정하는 것이 좋습니다.`,
          `올해 사업운은 점진적으로 개선될 것입니다. ${getFutureMonthShort(8)}부터는 더 안정적인 흐름을 유지할 수 있을 것입니다.`,
          `${getFutureMonthShort(9)}에 사업 관련 긍정적인 변화가 있을 수 있습니다. 하지만 무리한 확장은 피하시기 바랍니다.`,
          `올해 사업운은 안정적이면서도 발전적입니다. ${getFutureMonthShort(10)}부터는 더 좋은 결과를 얻을 수 있을 것입니다.`
        ],
        get en() {
          return [
            `From ${getFutureMonthShortEn(3)}, business fortune will remain stable. While there are no major changes, gradual improvement is possible.`,
            `This year's business fortune is generally average. From ${getFutureMonthShortEn(4)}, it can improve a bit more.`,
            `In ${getFutureMonthShortEn(2)}, there may be small achievements related to business. However, approach systematically.`,
            `This year's business fortune is stable without major fluctuations. In ${getFutureMonthShortEn(5)}, it is good to decide more carefully.`,
            `From ${getFutureMonthShortEn(6)}, business fortune can improve. However, do not rush and approach carefully.`,
            `This year's business fortune is generally comfortable. From ${getFutureMonthShortEn(7)}, greater development can be expected.`,
            `From ${getFutureMonthShortEn(1)}, pay more attention to business planning. It is good to set realistic goals.`,
            `This year's business fortune will improve gradually. From ${getFutureMonthShortEn(8)}, a more stable flow can be maintained.`,
            `In ${getFutureMonthShortEn(9)}, there may be positive changes related to business. However, avoid excessive expansion.`,
            `This year's business fortune is stable and progressive. From ${getFutureMonthShortEn(10)}, better results can be achieved.`
          ];
        },
        get ja() {
          return [
            `${getFutureMonthShortJa(3)}から事業運が安定して維持されるでしょう。大きな変化はありませんが、段階的な改善が可能です。`,
            `今年の事業運は全体的に平均的です。${getFutureMonthShortJa(4)}からは少しずつ良くなる可能性があります。`,
            `${getFutureMonthShortJa(2)}に事業に関する小さな成果があるかもしれません。しかし、計画的にアプローチすることをお勧めします。`,
            `今年の事業運は大きな変動なく安定しています。${getFutureMonthShortJa(5)}にはより慎重に決定することが良いでしょう。`,
            `${getFutureMonthShortJa(6)}から事業運が良くなる可能性があります。しかし、急がず慎重にアプローチすることをお勧めします。`,
            `今年の事業運は全体的に無難です。${getFutureMonthShortJa(7)}からはより大きな発展が期待できるでしょう。`,
            `${getFutureMonthShortJa(1)}から事業計画により神経を使うことをお勧めします。現実的な目標を設定することが良いでしょう。`,
            `今年の事業運は段階的に改善するでしょう。${getFutureMonthShortJa(8)}からはより安定した流れを維持できるでしょう。`,
            `${getFutureMonthShortJa(9)}に事業に関する前向きな変化があるかもしれません。しかし、無理な拡張は避けることをお勧めします。`,
            `今年の事業運は安定しながらも発展的です。${getFutureMonthShortJa(10)}からはより良い結果を得ることができるでしょう。`
          ];
        },
        get 'zh-CN'() {
          return [
            `从${getFutureMonthShortZhCN(3)}开始，事业运将保持稳定。虽然没有大的变化，但可以逐步改善。`,
            `今年的事业运总体平均。从${getFutureMonthShortZhCN(4)}开始，可以稍微改善。`,
            `${getFutureMonthShortZhCN(2)}可能会有与商业相关的小成就。但要系统性地接近。`,
            `今年的事业运稳定，没有大波动。在${getFutureMonthShortZhCN(5)}，更谨慎地决定是好的。`,
            `从${getFutureMonthShortZhCN(6)}开始，事业运可以改善。但不要匆忙，要谨慎接近。`,
            `今年的事业运总体舒适。从${getFutureMonthShortZhCN(7)}开始，可以期待更大的发展。`,
            `从${getFutureMonthShortZhCN(1)}开始，需要更加关注商业计划。设定现实目标是好的。`,
            `今年的事业运将逐步改善。从${getFutureMonthShortZhCN(8)}开始，可以保持更稳定的流动。`,
            `${getFutureMonthShortZhCN(9)}可能会有与商业相关的积极变化。但要避免过度扩张。`,
            `今年的事业运稳定且进步。从${getFutureMonthShortZhCN(10)}开始，可以获得更好的结果。`
          ];
        },
        get 'zh-TW'() {
          return [
            `從${getFutureMonthShortZhTW(3)}開始，事業運將保持穩定。雖然沒有大的變化，但可以逐步改善。`,
            `今年的事業運總體平均。從${getFutureMonthShortZhTW(4)}開始，可以稍微改善。`,
            `${getFutureMonthShortZhTW(2)}可能會有與商業相關的小成就。但要系統性地接近。`,
            `今年的事業運穩定，沒有大波動。在${getFutureMonthShortZhTW(5)}，更謹慎地決定是好的。`,
            `從${getFutureMonthShortZhTW(6)}開始，事業運可以改善。但不要匆忙，要謹慎接近。`,
            `今年的事業運總體舒適。從${getFutureMonthShortZhTW(7)}開始，可以期待更大的發展。`,
            `從${getFutureMonthShortZhTW(1)}開始，需要更加關注商業計劃。設定現實目標是好的。`,
            `今年的事業運將逐步改善。從${getFutureMonthShortZhTW(8)}開始，可以保持更穩定的流動。`,
            `${getFutureMonthShortZhTW(9)}可能會有與商業相關的積極變化。但要避免過度擴張。`,
            `今年的事業運穩定且進步。從${getFutureMonthShortZhTW(10)}開始，可以獲得更好的結果。`
          ];
        },
        get vi() {
          return [
            `Từ ${getFutureMonthShortVi(3)}, vận kinh doanh sẽ duy trì ổn định. Mặc dù không có thay đổi lớn, cải thiện dần dần là có thể.`,
            `Vận kinh doanh năm nay nói chung ở mức trung bình. Từ ${getFutureMonthShortVi(4)}, có thể cải thiện hơn một chút.`,
            `Vào ${getFutureMonthShortVi(2)}, có thể có thành tựu nhỏ liên quan đến kinh doanh. Tuy nhiên, hãy tiếp cận có hệ thống.`,
            `Vận kinh doanh năm nay ổn định mà không có biến động lớn. Vào ${getFutureMonthShortVi(5)}, quyết định cẩn thận hơn là tốt.`,
            `Từ ${getFutureMonthShortVi(6)}, vận kinh doanh có thể cải thiện. Tuy nhiên, đừng vội vàng và hãy tiếp cận cẩn thận.`,
            `Vận kinh doanh năm nay nói chung thoải mái. Từ ${getFutureMonthShortVi(7)}, có thể mong đợi phát triển lớn hơn.`,
            `Từ ${getFutureMonthShortVi(1)}, cần chú ý hơn đến kế hoạch kinh doanh. Đặt mục tiêu thực tế là tốt.`,
            `Vận kinh doanh năm nay sẽ cải thiện dần dần. Từ ${getFutureMonthShortVi(8)}, có thể duy trì dòng chảy ổn định hơn.`,
            `Vào ${getFutureMonthShortVi(9)}, có thể có những thay đổi tích cực liên quan đến kinh doanh. Tuy nhiên, hãy tránh mở rộng quá mức.`,
            `Vận kinh doanh năm nay ổn định và tiến bộ. Từ ${getFutureMonthShortVi(10)}, có thể đạt được kết quả tốt hơn.`
          ];
        },
        get id() {
          return [
            `Dari ${getFutureMonthShortId(3)}, keberuntungan bisnis akan tetap stabil. Meskipun tidak ada perubahan besar, perbaikan bertahap dimungkinkan.`,
            `Keberuntungan bisnis tahun ini umumnya rata-rata. Dari ${getFutureMonthShortId(4)}, dapat meningkat sedikit lebih.`,
            `Pada ${getFutureMonthShortId(2)}, mungkin ada pencapaian kecil terkait bisnis. Namun, dekati secara sistematis.`,
            `Keberuntungan bisnis tahun ini stabil tanpa fluktuasi besar. Pada ${getFutureMonthShortId(5)}, baik untuk memutuskan lebih hati-hati.`,
            `Dari ${getFutureMonthShortId(6)}, keberuntungan bisnis dapat membaik. Namun, jangan terburu-buru dan dekati dengan hati-hati.`,
            `Keberuntungan bisnis tahun ini umumnya nyaman. Dari ${getFutureMonthShortId(7)}, perkembangan yang lebih besar dapat diharapkan.`,
            `Dari ${getFutureMonthShortId(1)}, perhatikan lebih pada perencanaan bisnis. Baik untuk menetapkan tujuan realistis.`,
            `Keberuntungan bisnis tahun ini akan membaik secara bertahap. Dari ${getFutureMonthShortId(8)}, aliran yang lebih stabil dapat dipertahankan.`,
            `Pada ${getFutureMonthShortId(9)}, mungkin ada perubahan positif terkait bisnis. Namun, hindari ekspansi berlebihan.`,
            `Keberuntungan bisnis tahun ini stabil dan progresif. Dari ${getFutureMonthShortId(10)}, hasil yang lebih baik dapat dicapai.`
          ];
        }
      },
      study: {
        ko: [
          `${getFutureMonthShort(2)}에 학업 관련 안정적인 변화가 있을 수 있습니다. 꾸준한 노력이 필요한 시기입니다.`,
          `올해 학업운은 전반적으로 평범한 수준입니다. ${getFutureMonthShort(3)}부터는 조금 더 나아질 수 있습니다.`,
          `${getFutureMonthShort(4)}에 학업 관련 작은 성과가 있을 수 있습니다. 하지만 계속해서 노력하시기 바랍니다.`,
          `올해 학업운은 큰 기복 없이 안정적입니다. ${getFutureMonthShort(5)}에는 더 집중하는 것이 좋습니다.`,
          `${getFutureMonthShort(6)}부터 학업운이 좋아질 수 있습니다. 하지만 서두르지 말고 꾸준히 나아가시기 바랍니다.`,
          `올해 학업운은 전반적으로 무난합니다. ${getFutureMonthShort(7)}부터는 더 큰 발전을 기대할 수 있을 것입니다.`,
          `${getFutureMonthShort(1)}부터 학습 계획에 더욱 신경 쓰시기 바랍니다. 규칙적인 학습 습관을 만드는 것이 좋습니다.`,
          `올해 학업운은 점진적으로 개선될 것입니다. ${getFutureMonthShort(8)}부터는 더 안정적인 성과를 얻을 수 있을 것입니다.`,
          `${getFutureMonthShort(9)}에 학업 관련 긍정적인 변화가 있을 수 있습니다. 하지만 방심하지 말고 계속 노력하시기 바랍니다.`,
          `올해 학업운은 안정적이면서도 발전적입니다. ${getFutureMonthShort(10)}부터는 더 좋은 결과를 얻을 수 있을 것입니다.`
        ],
        get en() {
          return [
            `In ${getFutureMonthShortEn(2)}, there may be stable changes related to studies. This is a period requiring steady effort.`,
            `This year's study fortune is generally average. From ${getFutureMonthShortEn(3)}, it can improve a bit more.`,
            `In ${getFutureMonthShortEn(4)}, there may be small achievements related to studies. However, continue to work hard.`,
            `This year's study fortune is stable without major fluctuations. In ${getFutureMonthShortEn(5)}, it is good to focus more.`,
            `From ${getFutureMonthShortEn(6)}, study fortune can improve. However, do not rush and proceed steadily.`,
            `This year's study fortune is generally comfortable. From ${getFutureMonthShortEn(7)}, greater development can be expected.`,
            `From ${getFutureMonthShortEn(1)}, pay more attention to study planning. It is good to establish regular study habits.`,
            `This year's study fortune will improve gradually. From ${getFutureMonthShortEn(8)}, more stable achievements can be obtained.`,
            `In ${getFutureMonthShortEn(9)}, there may be positive changes related to studies. However, do not let your guard down and keep working.`,
            `This year's study fortune is stable and progressive. From ${getFutureMonthShortEn(10)}, better results can be achieved.`
          ];
        },
        get ja() {
          return [
            `${getFutureMonthShortJa(2)}に学業に関する安定した変化があるかもしれません。着実な努力が必要な時期です。`,
            `今年の学業運は全体的に平均的です。${getFutureMonthShortJa(3)}からは少しずつ良くなる可能性があります。`,
            `${getFutureMonthShortJa(4)}に学業に関する小さな成果があるかもしれません。しかし、継続して努力することをお勧めします。`,
            `今年の学業運は大きな変動なく安定しています。${getFutureMonthShortJa(5)}にはより集中することが良いでしょう。`,
            `${getFutureMonthShortJa(6)}から学業運が良くなる可能性があります。しかし、急がず着実に進むことをお勧めします。`,
            `今年の学業運は全体的に無難です。${getFutureMonthShortJa(7)}からはより大きな発展が期待できるでしょう。`,
            `${getFutureMonthShortJa(1)}から学習計画により神経を使うことをお勧めします。規則的な学習習慣を作ることが良いでしょう。`,
            `今年の学業運は段階的に改善するでしょう。${getFutureMonthShortJa(8)}からはより安定した成果を得ることができるでしょう。`,
            `${getFutureMonthShortJa(9)}に学業に関する前向きな変化があるかもしれません。しかし、油断せずに継続して努力することをお勧めします。`,
            `今年の学業運は安定しながらも発展的です。${getFutureMonthShortJa(10)}からはより良い結果を得ることができるでしょう。`
          ];
        },
        get 'zh-CN'() {
          return [
            `${getFutureMonthShortZhCN(2)}可能会有与学习相关的稳定变化。这是一个需要持续努力的时期。`,
            `今年的学业运总体平均。从${getFutureMonthShortZhCN(3)}开始，可以稍微改善。`,
            `${getFutureMonthShortZhCN(4)}可能会有与学习相关的小成就。但要继续努力。`,
            `今年的学业运稳定，没有大波动。在${getFutureMonthShortZhCN(5)}，更加专注是好的。`,
            `从${getFutureMonthShortZhCN(6)}开始，学业运可以改善。但不要匆忙，要稳步前进。`,
            `今年的学业运总体舒适。从${getFutureMonthShortZhCN(7)}开始，可以期待更大的发展。`,
            `从${getFutureMonthShortZhCN(1)}开始，需要更加关注学习计划。建立定期学习习惯是好的。`,
            `今年的学业运将逐步改善。从${getFutureMonthShortZhCN(8)}开始，可以获得更稳定的成就。`,
            `${getFutureMonthShortZhCN(9)}可能会有与学习相关的积极变化。但不要松懈，要继续努力。`,
            `今年的学业运稳定且进步。从${getFutureMonthShortZhCN(10)}开始，可以获得更好的结果。`
          ];
        },
        get 'zh-TW'() {
          return [
            `${getFutureMonthShortZhTW(2)}可能會有與學習相關的穩定變化。這是一個需要持續努力的時期。`,
            `今年的學業運總體平均。從${getFutureMonthShortZhTW(3)}開始，可以稍微改善。`,
            `${getFutureMonthShortZhTW(4)}可能會有與學習相關的小成就。但要繼續努力。`,
            `今年的學業運穩定，沒有大波動。在${getFutureMonthShortZhTW(5)}，更加專注是好的。`,
            `從${getFutureMonthShortZhTW(6)}開始，學業運可以改善。但不要匆忙，要穩步前進。`,
            `今年的學業運總體舒適。從${getFutureMonthShortZhTW(7)}開始，可以期待更大的發展。`,
            `從${getFutureMonthShortZhTW(1)}開始，需要更加關注學習計劃。建立定期學習習慣是好的。`,
            `今年的學業運將逐步改善。從${getFutureMonthShortZhTW(8)}開始，可以獲得更穩定的成就。`,
            `${getFutureMonthShortZhTW(9)}可能會有與學習相關的積極變化。但不要鬆懈，要繼續努力。`,
            `今年的學業運穩定且進步。從${getFutureMonthShortZhTW(10)}開始，可以獲得更好的結果。`
          ];
        },
        get vi() {
          return [
            `Vào ${getFutureMonthShortVi(2)}, có thể có những thay đổi ổn định liên quan đến học tập. Đây là thời kỳ cần nỗ lực ổn định.`,
            `Vận học tập năm nay nói chung ở mức trung bình. Từ ${getFutureMonthShortVi(3)}, có thể cải thiện hơn một chút.`,
            `Vào ${getFutureMonthShortVi(4)}, có thể có thành tựu nhỏ liên quan đến học tập. Tuy nhiên, hãy tiếp tục nỗ lực.`,
            `Vận học tập năm nay ổn định mà không có biến động lớn. Vào ${getFutureMonthShortVi(5)}, tập trung hơn là tốt.`,
            `Từ ${getFutureMonthShortVi(6)}, vận học tập có thể cải thiện. Tuy nhiên, đừng vội vàng và hãy tiến lên đều đặn.`,
            `Vận học tập năm nay nói chung thoải mái. Từ ${getFutureMonthShortVi(7)}, có thể mong đợi phát triển lớn hơn.`,
            `Từ ${getFutureMonthShortVi(1)}, cần chú ý hơn đến kế hoạch học tập. Lập thói quen học tập thường xuyên là tốt.`,
            `Vận học tập năm nay sẽ cải thiện dần dần. Từ ${getFutureMonthShortVi(8)}, có thể đạt được thành tựu ổn định hơn.`,
            `Vào ${getFutureMonthShortVi(9)}, có thể có những thay đổi tích cực liên quan đến học tập. Tuy nhiên, đừng để mất cảnh giác và hãy tiếp tục làm việc.`,
            `Vận học tập năm nay ổn định và tiến bộ. Từ ${getFutureMonthShortVi(10)}, có thể đạt được kết quả tốt hơn.`
          ];
        },
        get id() {
          return [
            `Pada ${getFutureMonthShortId(2)}, mungkin ada perubahan stabil terkait studi. Ini adalah periode yang memerlukan upaya stabil.`,
            `Keberuntungan studi tahun ini umumnya rata-rata. Dari ${getFutureMonthShortId(3)}, dapat meningkat sedikit lebih.`,
            `Pada ${getFutureMonthShortId(4)}, mungkin ada pencapaian kecil terkait studi. Namun, teruslah bekerja keras.`,
            `Keberuntungan studi tahun ini stabil tanpa fluktuasi besar. Pada ${getFutureMonthShortId(5)}, baik untuk lebih fokus.`,
            `Dari ${getFutureMonthShortId(6)}, keberuntungan studi dapat membaik. Namun, jangan terburu-buru dan lanjutkan dengan stabil.`,
            `Keberuntungan studi tahun ini umumnya nyaman. Dari ${getFutureMonthShortId(7)}, perkembangan yang lebih besar dapat diharapkan.`,
            `Dari ${getFutureMonthShortId(1)}, perhatikan lebih pada perencanaan studi. Baik untuk membangun kebiasaan belajar teratur.`,
            `Keberuntungan studi tahun ini akan membaik secara bertahap. Dari ${getFutureMonthShortId(8)}, pencapaian yang lebih stabil dapat diperoleh.`,
            `Pada ${getFutureMonthShortId(9)}, mungkin ada perubahan positif terkait studi. Namun, jangan lengah dan teruslah bekerja.`,
            `Keberuntungan studi tahun ini stabil dan progresif. Dari ${getFutureMonthShortId(10)}, hasil yang lebih baik dapat dicapai.`
          ];
        }
      },
      goodTime: {
        ko: [
          `${getFutureMonthShort(3)}은 올해 안정적인 시기 중 하나입니다. 큰 변화보다는 꾸준한 발전에 집중하시기 바랍니다.`,
          `${getFutureMonthShort(5)}부터 ${getFutureMonthShort(7)}까지는 비교적 운세가 좋은 시기입니다. 이 기간을 잘 활용하시기 바랍니다.`,
          `${getFutureMonthShort(8)}부터는 전반적으로 운세가 개선될 수 있습니다. 이 시기를 준비하는 것이 중요합니다.`,
          `${getFutureMonthShort(4)}에 특히 안정적인 기운이 감돌게 됩니다. 이 시기에는 계획을 세우거나 정리하는 것이 좋습니다.`,
          `${getFutureMonthShort(6)}은 전환점이 될 수 있는 시기입니다. 이 시기를 잘 활용하면 발전할 수 있습니다.`,
          `${getFutureMonthShort(2)}부터 ${getFutureMonthShort(4)}까지는 준비하는 시기입니다. 하지만 ${getFutureMonthShort(5)}부터는 본격적으로 나아갈 수 있습니다.`,
          `${getFutureMonthShort(9)}과 ${getFutureMonthShort(10)}은 꾸준한 노력으로 성과를 거둘 수 있는 시기입니다.`,
          `전체적으로 올해는 안정적인 운세를 경험할 수 있는 해입니다. 특히 ${getFutureMonthShort(5)}, ${getFutureMonthShort(8)}는 더욱 좋은 시기입니다.`,
          `${getFutureMonthShort(11)}에 전반적으로 좋은 기운이 감돌게 됩니다. 이 시기에는 작은 목표를 달성할 수 있을 것입니다.`,
          `올해는 큰 기복 없이 안정적으로 흐르는 한 해가 될 것입니다. 특히 ${getFutureMonthShort(6)}, ${getFutureMonthShort(9)}는 더욱 좋은 시기입니다.`
        ],
        get en() {
          return [
            `${getFutureMonthShortEn(3)} is one of the stable periods of this year. Focus on steady development rather than major changes.`,
            `From ${getFutureMonthShortEn(5)} to ${getFutureMonthShortEn(7)} is a relatively good fortune period. Make good use of this period.`,
            `From ${getFutureMonthShortEn(8)}, overall fortune can improve. It is important to prepare for this period.`,
            `In ${getFutureMonthShortEn(4)}, especially stable energy will flow. During this period, it is good to make plans or organize things.`,
            `${getFutureMonthShortEn(6)} is a period that can be a turning point. If you make good use of this period, you can develop.`,
            `From ${getFutureMonthShortEn(2)} to ${getFutureMonthShortEn(4)} is a preparation period. However, from ${getFutureMonthShortEn(5)}, you can move forward in earnest.`,
            `${getFutureMonthShortEn(9)} and ${getFutureMonthShortEn(10)} are periods when you can achieve results with steady effort.`,
            `Overall, this year is a year when you can experience stable fortune. Especially ${getFutureMonthShortEn(5)} and ${getFutureMonthShortEn(8)} are even better periods.`,
            `In ${getFutureMonthShortEn(11)}, generally good energy will flow. During this period, you can achieve small goals.`,
            `This year will be a stable year flowing without major fluctuations. Especially ${getFutureMonthShortEn(6)} and ${getFutureMonthShortEn(9)} are even better periods.`
          ];
        },
        get ja() {
          return [
            `${getFutureMonthShortJa(3)}は今年の安定した時期の一つです。大きな変化よりも着実な発展に集中することをお勧めします。`,
            `${getFutureMonthShortJa(5)}から${getFutureMonthShortJa(7)}まで比較的運勢が良い時期です。この期間をよく活用することをお勧めします。`,
            `${getFutureMonthShortJa(8)}からは全体的に運勢が改善する可能性があります。この時期を準備することが重要です。`,
            `${getFutureMonthShortJa(4)}に特に安定した気が漂うでしょう。この時期には計画を立てたり整理することが良いでしょう。`,
            `${getFutureMonthShortJa(6)}は転換点になることができる時期です。この時期をよく活用すれば発展できます。`,
            `${getFutureMonthShortJa(2)}から${getFutureMonthShortJa(4)}まで準備する時期です。しかし${getFutureMonthShortJa(5)}からは本格的に進むことができます。`,
            `${getFutureMonthShortJa(9)}と${getFutureMonthShortJa(10)}は着実な努力で成果を収めることができる時期です。`,
            `全体的に今年は安定した運勢を経験できる年です。特に${getFutureMonthShortJa(5)}と${getFutureMonthShortJa(8)}はさらに良い時期です。`,
            `${getFutureMonthShortJa(11)}に全体的に良い気が漂うでしょう。この時期には小さな目標を達成できるでしょう。`,
            `今年は大きな変動なく安定して流れる一年になるでしょう。特に${getFutureMonthShortJa(6)}と${getFutureMonthShortJa(9)}はさらに良い時期です。`
          ];
        },
        get 'zh-CN'() {
          return [
            `${getFutureMonthShortZhCN(3)}是今年稳定时期之一。专注于稳步发展而不是大的变化。`,
            `从${getFutureMonthShortZhCN(5)}到${getFutureMonthShortZhCN(7)}是运势相对较好的时期。好好利用这个时期。`,
            `从${getFutureMonthShortZhCN(8)}开始，整体运势可以改善。准备这个时期很重要。`,
            `${getFutureMonthShortZhCN(4)}会有特别稳定的能量流动。在这个时期，制定计划或整理事情是好的。`,
            `${getFutureMonthShortZhCN(6)}是可以成为转折点的时期。如果你好好利用这个时期，可以发展。`,
            `从${getFutureMonthShortZhCN(2)}到${getFutureMonthShortZhCN(4)}是准备时期。但从${getFutureMonthShortZhCN(5)}开始，你可以认真地前进。`,
            `${getFutureMonthShortZhCN(9)}和${getFutureMonthShortZhCN(10)}是通过持续努力可以取得成果的时期。`,
            `整体而言，今年是可以体验稳定运势的一年。特别是${getFutureMonthShortZhCN(5)}和${getFutureMonthShortZhCN(8)}是更好的时期。`,
            `${getFutureMonthShortZhCN(11)}会有整体良好的能量流动。在这个时期，你可以实现小目标。`,
            `今年将是无大波动稳定流动的一年。特别是${getFutureMonthShortZhCN(6)}和${getFutureMonthShortZhCN(9)}是更好的时期。`
          ];
        },
        get 'zh-TW'() {
          return [
            `${getFutureMonthShortZhTW(3)}是今年穩定時期之一。專注於穩步發展而不是大的變化。`,
            `從${getFutureMonthShortZhTW(5)}到${getFutureMonthShortZhTW(7)}是運勢相對較好的時期。好好利用這個時期。`,
            `從${getFutureMonthShortZhTW(8)}開始，整體運勢可以改善。準備這個時期很重要。`,
            `${getFutureMonthShortZhTW(4)}會有特別穩定的能量流動。在這個時期，制定計劃或整理事情是好的。`,
            `${getFutureMonthShortZhTW(6)}是可以成為轉折點的時期。如果你好好利用這個時期，可以發展。`,
            `從${getFutureMonthShortZhTW(2)}到${getFutureMonthShortZhTW(4)}是準備時期。但從${getFutureMonthShortZhTW(5)}開始，你可以認真地前進。`,
            `${getFutureMonthShortZhTW(9)}和${getFutureMonthShortZhTW(10)}是通過持續努力可以取得成果的時期。`,
            `整體而言，今年是可以體驗穩定運勢的一年。特別是${getFutureMonthShortZhTW(5)}和${getFutureMonthShortZhTW(8)}是更好的時期。`,
            `${getFutureMonthShortZhTW(11)}會有整體良好的能量流動。在這個時期，你可以實現小目標。`,
            `今年將是無大波動穩定流動的一年。特別是${getFutureMonthShortZhTW(6)}和${getFutureMonthShortZhTW(9)}是更好的時期。`
          ];
        },
        get vi() {
          return [
            `${getFutureMonthShortVi(3)} là một trong những thời kỳ ổn định của năm nay. Tập trung vào phát triển ổn định hơn là những thay đổi lớn.`,
            `Từ ${getFutureMonthShortVi(5)} đến ${getFutureMonthShortVi(7)} là thời kỳ vận may tương đối tốt. Hãy tận dụng tốt thời kỳ này.`,
            `Từ ${getFutureMonthShortVi(8)}, vận may tổng thể có thể cải thiện. Việc chuẩn bị cho thời kỳ này là quan trọng.`,
            `Vào ${getFutureMonthShortVi(4)}, năng lượng đặc biệt ổn định sẽ chảy. Trong thời kỳ này, lập kế hoạch hoặc sắp xếp mọi thứ là tốt.`,
            `${getFutureMonthShortVi(6)} là thời kỳ có thể trở thành điểm ngoặt. Nếu bạn tận dụng tốt thời kỳ này, bạn có thể phát triển.`,
            `Từ ${getFutureMonthShortVi(2)} đến ${getFutureMonthShortVi(4)} là thời kỳ chuẩn bị. Tuy nhiên, từ ${getFutureMonthShortVi(5)}, bạn có thể tiến lên một cách nghiêm túc.`,
            `${getFutureMonthShortVi(9)} và ${getFutureMonthShortVi(10)} là những thời kỳ bạn có thể đạt được kết quả với nỗ lực ổn định.`,
            `Nhìn chung, năm nay là năm bạn có thể trải nghiệm vận may ổn định. Đặc biệt ${getFutureMonthShortVi(5)} và ${getFutureMonthShortVi(8)} là những thời kỳ còn tốt hơn.`,
            `Vào ${getFutureMonthShortVi(11)}, năng lượng tốt nói chung sẽ chảy. Trong thời kỳ này, bạn có thể đạt được các mục tiêu nhỏ.`,
            `Năm nay sẽ là một năm ổn định chảy mà không có biến động lớn. Đặc biệt ${getFutureMonthShortVi(6)} và ${getFutureMonthShortVi(9)} là những thời kỳ còn tốt hơn.`
          ];
        },
        get id() {
          return [
            `${getFutureMonthShortId(3)} adalah salah satu periode stabil tahun ini. Fokus pada perkembangan stabil daripada perubahan besar.`,
            `Dari ${getFutureMonthShortId(5)} hingga ${getFutureMonthShortId(7)} adalah periode keberuntungan yang relatif baik. Manfaatkan periode ini dengan baik.`,
            `Dari ${getFutureMonthShortId(8)}, keberuntungan keseluruhan dapat membaik. Penting untuk mempersiapkan periode ini.`,
            `Pada ${getFutureMonthShortId(4)}, energi yang sangat stabil akan mengalir. Selama periode ini, baik untuk membuat rencana atau mengorganisir hal-hal.`,
            `${getFutureMonthShortId(6)} adalah periode yang dapat menjadi titik balik. Jika Anda memanfaatkan periode ini dengan baik, Anda dapat berkembang.`,
            `Dari ${getFutureMonthShortId(2)} hingga ${getFutureMonthShortId(4)} adalah periode persiapan. Namun, dari ${getFutureMonthShortId(5)}, Anda dapat maju dengan sungguh-sungguh.`,
            `${getFutureMonthShortId(9)} dan ${getFutureMonthShortId(10)} adalah periode ketika Anda dapat mencapai hasil dengan upaya stabil.`,
            `Secara keseluruhan, tahun ini adalah tahun ketika Anda dapat mengalami keberuntungan stabil. Terutama ${getFutureMonthShortId(5)} dan ${getFutureMonthShortId(8)} adalah periode yang bahkan lebih baik.`,
            `Pada ${getFutureMonthShortId(11)}, energi baik secara umum akan mengalir. Selama periode ini, Anda dapat mencapai tujuan kecil.`,
            `Tahun ini akan menjadi tahun stabil yang mengalir tanpa fluktuasi besar. Terutama ${getFutureMonthShortId(6)} dan ${getFutureMonthShortId(9)} adalah periode yang bahkan lebih baik.`
          ];
        }
      },
      warning: {
        ko: [
          `${getFutureMonthShort(1)}에는 다소 신중해야 할 시기입니다. 중요한 결정은 천천히 내리는 것이 좋습니다.`,
          `${getFutureMonthShort(7)}에는 감정 기복이나 스트레스가 있을 수 있습니다. 이 시기에는 무리하지 않는 것이 좋습니다.`,
          `${getFutureMonthShort(11)}에는 재물 관련 주의가 필요합니다. 큰 지출이나 투자는 신중하게 결정하시기 바랍니다.`,
          `${getFutureMonthShort(4)}에는 건강 관리에 더욱 주의를 기울여야 할 시기입니다. 작은 증상이라도 간과하지 마세요.`,
          `${getFutureMonthShort(9)}에는 인간관계에서 주의해야 할 시기가 있을 수 있습니다. 이 시기에는 소통에 더욱 신경 쓰시기 바랍니다.`,
          `${getFutureMonthShort(2)}에는 사업이나 업무 관련 주의가 필요할 수 있습니다. 이 시기에는 서두르기보다는 신중하게 판단하시기 바랍니다.`,
          `${getFutureMonthShort(10)}에는 전반적으로 속도를 조절해야 할 시기입니다. 무리한 행동은 피하는 것이 좋습니다.`,
          `${getFutureMonthShort(6)}에는 학업이나 시험 관련 주의가 필요할 수 있습니다. 이 시기에는 준비를 더 철저히 하는 것이 좋습니다.`,
          `${getFutureMonthShort(12)}에는 감정적 스트레스나 피로가 있을 수 있습니다. 이 시기에는 휴식과 회복에 집중하시기 바랍니다.`,
          `전체적으로 올해는 안정적인 운세이지만, 때로는 신중하게 행동하는 것이 중요합니다. 특히 ${getFutureMonthShort(3)}과 ${getFutureMonthShort(8)}에는 더욱 주의가 필요합니다.`
        ],
        get en() {
          return [
            `In ${getFutureMonthShortEn(1)}, it is a period that requires some caution. It is good to make important decisions slowly.`,
            `In ${getFutureMonthShortEn(7)}, there may be emotional ups and downs or stress. During this period, it is good not to overdo things.`,
            `In ${getFutureMonthShortEn(11)}, caution is needed regarding wealth. It is recommended to carefully decide on large expenses or investments.`,
            `In ${getFutureMonthShortEn(4)}, it is a period when you need to pay more attention to health management. Do not overlook even small symptoms.`,
            `In ${getFutureMonthShortEn(9)}, there may be a period when you need to be cautious in relationships. During this period, pay more attention to communication.`,
            `In ${getFutureMonthShortEn(2)}, caution may be needed regarding business or work. During this period, it is good to judge carefully rather than rushing.`,
            `In ${getFutureMonthShortEn(10)}, it is a period when you need to control your speed overall. It is good to avoid excessive actions.`,
            `In ${getFutureMonthShortEn(6)}, caution may be needed regarding studies or exams. During this period, it is good to prepare more thoroughly.`,
            `In ${getFutureMonthShortEn(12)}, there may be emotional stress or fatigue. During this period, focus on rest and recovery.`,
            `Overall, this year has stable fortune, but it is important to sometimes act carefully. Especially in ${getFutureMonthShortEn(3)} and ${getFutureMonthShortEn(8)}, more caution is needed.`
          ];
        },
        get ja() {
          return [
            `${getFutureMonthShortJa(1)}にはやや慎重である必要がある時期です。重要な決定はゆっくり下すことが良いでしょう。`,
            `${getFutureMonthShortJa(7)}には感情の波やストレスがあるかもしれません。この時期には無理をしないことが良いでしょう。`,
            `${getFutureMonthShortJa(11)}には財運に関する注意が必要です。大きな支出や投資は慎重に決定することをお勧めします。`,
            `${getFutureMonthShortJa(4)}には健康管理により注意を払う必要がある時期です。小さな症状でも見落とさないでください。`,
            `${getFutureMonthShortJa(9)}には人間関係で注意が必要な時期があるかもしれません。この時期にはコミュニケーションにより神経を使うことをお勧めします。`,
            `${getFutureMonthShortJa(2)}には事業や業務に関する注意が必要かもしれません。この時期には急ぐよりも慎重に判断することをお勧めします。`,
            `${getFutureMonthShortJa(10)}には全体的に速度を調整する必要がある時期です。無理な行動は避けることが良いでしょう。`,
            `${getFutureMonthShortJa(6)}には学業や試験に関する注意が必要かもしれません。この時期には準備をより徹底することが良いでしょう。`,
            `${getFutureMonthShortJa(12)}には感情的ストレスや疲労があるかもしれません。この時期には休息と回復に集中することをお勧めします。`,
            `全体的に今年は安定した運勢ですが、時には慎重に行動することが重要です。特に${getFutureMonthShortJa(3)}と${getFutureMonthShortJa(8)}にはより注意が必要です。`
          ];
        },
        get 'zh-CN'() {
          return [
            `${getFutureMonthShortZhCN(1)}是需要谨慎的时期。慢慢做重要决定是好的。`,
            `${getFutureMonthShortZhCN(7)}可能会有情绪波动或压力。在这个时期，不要过度是好的。`,
            `${getFutureMonthShortZhCN(11)}需要关于财富的谨慎。建议谨慎决定大额支出或投资。`,
            `${getFutureMonthShortZhCN(4)}是需要更加关注健康管理的时期。即使是很小的症状也不要忽视。`,
            `${getFutureMonthShortZhCN(9)}可能需要在人际关系中谨慎的时期。在这个时期，更加注意沟通。`,
            `${getFutureMonthShortZhCN(2)}可能需要注意商业或工作。在这个时期，谨慎判断而不是匆忙是好的。`,
            `${getFutureMonthShortZhCN(10)}是需要整体控制速度的时期。避免过度行动是好的。`,
            `${getFutureMonthShortZhCN(6)}可能需要注意学习或考试。在这个时期，更彻底地准备是好的。`,
            `${getFutureMonthShortZhCN(12)}可能会有情绪压力或疲劳。在这个时期，专注于休息和恢复。`,
            `整体而言，今年有稳定的运势，但有时谨慎行动是重要的。特别是在${getFutureMonthShortZhCN(3)}和${getFutureMonthShortZhCN(8)}，需要更多的谨慎。`
          ];
        },
        get 'zh-TW'() {
          return [
            `${getFutureMonthShortZhTW(1)}是需要謹慎的時期。慢慢做重要決定是好的。`,
            `${getFutureMonthShortZhTW(7)}可能會有情緒波動或壓力。在這個時期，不要過度是好的。`,
            `${getFutureMonthShortZhTW(11)}需要關於財富的謹慎。建議謹慎決定大額支出或投資。`,
            `${getFutureMonthShortZhTW(4)}是需要更加關注健康管理的時期。即使是很小的症狀也不要忽視。`,
            `${getFutureMonthShortZhTW(9)}可能需要在人際關係中謹慎的時期。在這個時期，更加注意溝通。`,
            `${getFutureMonthShortZhTW(2)}可能需要注意商業或工作。在這個時期，謹慎判斷而不是匆忙是好的。`,
            `${getFutureMonthShortZhTW(10)}是需要整體控制速度的時期。避免過度行動是好的。`,
            `${getFutureMonthShortZhTW(6)}可能需要注意學習或考試。在這個時期，更徹底地準備是好的。`,
            `${getFutureMonthShortZhTW(12)}可能會有情緒壓力或疲勞。在這個時期，專注於休息和恢復。`,
            `整體而言，今年有穩定的運勢，但有時謹慎行動是重要的。特別是在${getFutureMonthShortZhTW(3)}和${getFutureMonthShortZhTW(8)}，需要更多的謹慎。`
          ];
        },
        get vi() {
          return [
            `Vào ${getFutureMonthShortVi(1)}, đây là thời kỳ cần một chút thận trọng. Nên đưa ra quyết định quan trọng một cách chậm rãi.`,
            `Vào ${getFutureMonthShortVi(7)}, có thể có biến động cảm xúc hoặc căng thẳng. Trong thời kỳ này, nên không làm quá sức.`,
            `Vào ${getFutureMonthShortVi(11)}, cần thận trọng về tài chính. Nên quyết định cẩn thận về các khoản chi lớn hoặc đầu tư.`,
            `Vào ${getFutureMonthShortVi(4)}, đây là thời kỳ bạn cần chú ý hơn đến việc quản lý sức khỏe. Đừng bỏ qua ngay cả những triệu chứng nhỏ.`,
            `Vào ${getFutureMonthShortVi(9)}, có thể có thời kỳ bạn cần thận trọng trong các mối quan hệ. Trong thời kỳ này, nên chú ý hơn đến giao tiếp.`,
            `Vào ${getFutureMonthShortVi(2)}, có thể cần thận trọng về kinh doanh hoặc công việc. Trong thời kỳ này, nên đánh giá cẩn thận thay vì vội vàng.`,
            `Vào ${getFutureMonthShortVi(10)}, đây là thời kỳ bạn cần kiểm soát tốc độ tổng thể. Nên tránh các hành động quá mức.`,
            `Vào ${getFutureMonthShortVi(6)}, có thể cần thận trọng về học tập hoặc thi cử. Trong thời kỳ này, nên chuẩn bị kỹ lưỡng hơn.`,
            `Vào ${getFutureMonthShortVi(12)}, có thể có căng thẳng cảm xúc hoặc mệt mỏi. Trong thời kỳ này, hãy tập trung vào nghỉ ngơi và phục hồi.`,
            `Nhìn chung, năm nay có vận may ổn định, nhưng đôi khi hành động cẩn thận là quan trọng. Đặc biệt vào ${getFutureMonthShortVi(3)} và ${getFutureMonthShortVi(8)}, cần thận trọng hơn.`
          ];
        },
        get id() {
          return [
            `Pada ${getFutureMonthShortId(1)}, ini adalah periode yang memerlukan sedikit kehati-hatian. Baik untuk membuat keputusan penting perlahan-lahan.`,
            `Pada ${getFutureMonthShortId(7)}, mungkin ada fluktuasi emosional atau stres. Selama periode ini, baik untuk tidak berlebihan.`,
            `Pada ${getFutureMonthShortId(11)}, kehati-hatian diperlukan terkait kekayaan. Disarankan untuk memutuskan dengan hati-hati tentang pengeluaran besar atau investasi.`,
            `Pada ${getFutureMonthShortId(4)}, ini adalah periode ketika Anda perlu lebih memperhatikan manajemen kesehatan. Jangan abaikan bahkan gejala kecil.`,
            `Pada ${getFutureMonthShortId(9)}, mungkin ada periode ketika Anda perlu waspada dalam hubungan. Selama periode ini, perhatikan lebih pada komunikasi.`,
            `Pada ${getFutureMonthShortId(2)}, kehati-hatian mungkin diperlukan terkait bisnis atau pekerjaan. Selama periode ini, baik untuk menilai dengan hati-hati daripada terburu-buru.`,
            `Pada ${getFutureMonthShortId(10)}, ini adalah periode ketika Anda perlu mengontrol kecepatan secara keseluruhan. Baik untuk menghindari tindakan yang berlebihan.`,
            `Pada ${getFutureMonthShortId(6)}, kehati-hatian mungkin diperlukan terkait studi atau ujian. Selama periode ini, baik untuk mempersiapkan lebih teliti.`,
            `Pada ${getFutureMonthShortId(12)}, mungkin ada stres emosional atau kelelahan. Selama periode ini, fokuslah pada istirahat dan pemulihan.`,
            `Secara keseluruhan, tahun ini memiliki keberuntungan stabil, tetapi terkadang bertindak hati-hati adalah penting. Terutama pada ${getFutureMonthShortId(3)} dan ${getFutureMonthShortId(8)}, lebih banyak kehati-hatian diperlukan.`
          ];
        }
      }
    }
  },
  {
    id: 4,
    title: {
      ko: '조금 어려운 운세',
      en: 'Slightly Difficult Fortune',
      ja: '少し困難な運勢',
      'zh-CN': '稍有困难的运势',
      'zh-TW': '稍有困難的運勢',
      vi: 'Vận May Hơi Khó Khăn',
      id: 'Keberuntungan Sedikit Sulit'
    },
    description: {
      get ko() {
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth() + 1;
        let periodText = '';
        if (currentMonth <= 10) {
          periodText = `${currentYear}년 말 또는 ${currentYear + 1}년 초`;
        } else if (currentMonth === 11) {
          periodText = `${currentYear + 1}년 초`;
        } else {
          periodText = `${currentYear + 1}년 초`;
        }
        return [
          `${periodText} 당신은 조금 어려운 운세를 경험할 수 있습니다. 하지만 포기하지 않고 노력하면 극복할 수 있을 것입니다.`,
          `${periodText} 당신에게는 다소 어려운 시기가 올 수 있습니다. 인내심을 가지고 꾸준히 노력하는 것이 중요합니다.`,
          `${periodText} 당신은 올해 일부 어려움을 겪을 수 있지만, 이는 모두 극복 가능합니다. 긍정적인 마음가짐이 필요합니다.`,
          `${periodText} 당신에게는 약간의 도전이 있을 수 있습니다. 하지만 강한 의지와 노력으로 모든 어려움을 이겨낼 수 있을 것입니다.`,
          `${periodText} 당신은 올해 조금 힘든 시기를 보낼 수 있지만, 인내와 노력으로 극복할 수 있는 운세입니다.`,
          `올해 당신은 일부 어려움을 겪을 수 있습니다. 하지만 ${periodText}부터는 점진적으로 개선될 수 있습니다.`,
          `${periodText} 당신에게는 약간의 어려움이 예상됩니다. 하지만 긍정적인 태도와 꾸준한 노력으로 극복할 수 있을 것입니다.`,
          `${periodText} 당신은 올해 다소 험난한 시기를 경험할 수 있습니다. 하지만 포기하지 않는 마음으로 나아가면 좋아질 것입니다.`,
          `${periodText} 당신에게는 조금 어려운 운세가 예상됩니다. 하지만 인내심과 노력, 그리고 긍정적인 마음가짐이 중요합니다.`,
          `${periodText} 당신은 올해 일부 어려움을 겪을 수 있지만, 모든 것은 극복 가능합니다. 꾸준한 노력과 인내가 필요합니다.`
        ];
      },
      en: [
        'You may experience slightly difficult fortune. However, with persistence and effort, you can overcome it.',
        'You may face somewhat difficult times. Patience and steady effort are important.',
        'You may encounter some difficulties this year, but all are overcomeable. A positive mindset is needed.',
        'You may face some challenges. However, with strong will and effort, you can overcome all difficulties.',
        'You may have a somewhat difficult year, but it is fortune that can be overcome with patience and effort.',
        'This year you may face some difficulties. However, starting from this period, things can improve gradually.',
        'Some difficulties are expected. However, with a positive attitude and steady effort, you can overcome them.',
        'You may experience somewhat rough times this year. However, if you move forward without giving up, things will get better.',
        'Slightly difficult fortune is expected. However, patience, effort, and a positive mindset are important.',
        'You may face some difficulties this year, but everything is overcomeable. Steady effort and patience are needed.'
      ],
      ja: [
        '少し困難な運勢を経験する可能性があります。しかし諦めずに努力すれば克服できるでしょう。',
        'やや困難な時期が来る可能性があります。忍耐を持って着実に努力することが重要です。',
        '今年一部の困難に直面する可能性がありますが、すべて克服可能です。ポジティブな心構えが必要です。',
        'いくつかの挑戦が生じる可能性があります。しかし強い意志と努力で、すべての困難を乗り越えられるでしょう。',
        '今年やや困難な時期を過ごす可能性がありますが、忍耐と努力で克服できる運勢です。',
        '今年一部の困難に直面する可能性があります。しかしこの時期からは段階的に改善できる可能性があります。',
        'いくつかの困難が予想されます。しかしポジティブな態度と着実な努力で克服できるでしょう。',
        '今年やや険しい時期を経験する可能性があります。しかし諦めない心で進めば良くなるでしょう。',
        '少し困難な運勢が予想されます。しかし忍耐と努力、そしてポジティブな心構えが重要です。',
        '今年一部の困難に直面する可能性がありますが、すべては克服可能です。着実な努力と忍耐が必要です。'
      ],
      'zh-CN': [
        '你可能会经历稍有困难的运势。但通过坚持和努力，你可以克服它。',
        '你可能会面临有些困难的时期。耐心和持续努力很重要。',
        '今年你可能会遇到一些困难，但所有都是可以克服的。需要积极的心态。',
        '你可能会面临一些挑战。但通过坚强的意志和努力，你可以克服所有困难。',
        '今年你可能会有一些困难的时期，但这是可以通过耐心和努力克服的运势。',
        '今年你可能会面临一些困难。但从这个时期开始，情况可能会逐步改善。',
        '预期会有一些困难。但通过积极的态度和持续努力，你可以克服它们。',
        '今年你可能会经历一些艰难的时期。但如果不放弃地前进，情况会变好。',
        '预期会有稍有困难的运势。但耐心、努力和积极的心态很重要。',
        '今年你可能会面临一些困难，但一切都是可以克服的。需要持续的努力和耐心。'
      ],
      'zh-TW': [
        '你可能會經歷稍有困難的運勢。但通過堅持和努力，你可以克服它。',
        '你可能會面臨有些困難的時期。耐心和持續努力很重要。',
        '今年你可能會遇到一些困難，但所有都是可以克服的。需要積極的心態。',
        '你可能會面臨一些挑戰。但通過堅強的意志和努力，你可以克服所有困難。',
        '今年你可能會有一些困難的時期，但這是可以通過耐心和努力克服的運勢。',
        '今年你可能會面臨一些困難。但從這個時期開始，情況可能會逐步改善。',
        '預期會有一些困難。但通過積極的態度和持續努力，你可以克服它們。',
        '今年你可能會經歷一些艱難的時期。但如果不放棄地前進，情況會變好。',
        '預期會有稍有困難的運勢。但耐心、努力和積極的心態很重要。',
        '今年你可能會面臨一些困難，但一切都是可以克服的。需要持續的努力和耐心。'
      ],
      vi: [
        'Bạn có thể trải nghiệm vận may hơi khó khăn. Tuy nhiên, với sự kiên trì và nỗ lực, bạn có thể vượt qua nó.',
        'Bạn có thể phải đối mặt với những thời điểm hơi khó khăn. Sự kiên nhẫn và nỗ lực ổn định là quan trọng.',
        'Bạn có thể gặp phải một số khó khăn trong năm nay, nhưng tất cả đều có thể vượt qua. Cần có tư duy tích cực.',
        'Bạn có thể phải đối mặt với một số thách thức. Tuy nhiên, với ý chí mạnh mẽ và nỗ lực, bạn có thể vượt qua mọi khó khăn.',
        'Bạn có thể có một năm hơi khó khăn, nhưng đây là vận may có thể vượt qua bằng sự kiên nhẫn và nỗ lực.',
        'Năm nay bạn có thể phải đối mặt với một số khó khăn. Tuy nhiên, bắt đầu từ thời kỳ này, mọi thứ có thể cải thiện dần.',
        'Một số khó khăn được mong đợi. Tuy nhiên, với thái độ tích cực và nỗ lực ổn định, bạn có thể vượt qua chúng.',
        'Bạn có thể trải nghiệm những thời điểm hơi khó khăn trong năm nay. Tuy nhiên, nếu bạn tiến lên mà không từ bỏ, mọi thứ sẽ trở nên tốt hơn.',
        'Vận may hơi khó khăn được mong đợi. Tuy nhiên, sự kiên nhẫn, nỗ lực và tư duy tích cực là quan trọng.',
        'Bạn có thể phải đối mặt với một số khó khăn trong năm nay, nhưng mọi thứ đều có thể vượt qua. Cần có nỗ lực ổn định và sự kiên nhẫn.'
      ],
      id: [
        'Anda mungkin mengalami keberuntungan yang sedikit sulit. Namun, dengan ketekunan dan upaya, Anda dapat mengatasinya.',
        'Anda mungkin menghadapi waktu yang agak sulit. Kesabaran dan upaya yang stabil adalah penting.',
        'Anda mungkin menghadapi beberapa kesulitan tahun ini, tetapi semuanya dapat diatasi. Pola pikir positif diperlukan.',
        'Anda mungkin menghadapi beberapa tantangan. Namun, dengan kemauan yang kuat dan upaya, Anda dapat mengatasi semua kesulitan.',
        'Anda mungkin memiliki tahun yang agak sulit, tetapi ini adalah keberuntungan yang dapat diatasi dengan kesabaran dan upaya.',
        'Tahun ini Anda mungkin menghadapi beberapa kesulitan. Namun, mulai dari periode ini, hal-hal dapat membaik secara bertahap.',
        'Beberapa kesulitan diharapkan. Namun, dengan sikap positif dan upaya yang stabil, Anda dapat mengatasinya.',
        'Anda mungkin mengalami waktu yang agak sulit tahun ini. Namun, jika Anda bergerak maju tanpa menyerah, hal-hal akan menjadi lebih baik.',
        'Keberuntungan yang sedikit sulit diharapkan. Namun, kesabaran, upaya, dan pola pikir positif adalah penting.',
        'Anda mungkin menghadapi beberapa kesulitan tahun ini, tetapi semuanya dapat diatasi. Diperlukan upaya yang stabil dan kesabaran.'
      ]
    },
    emoji: '💫',
    scoreRange: [60, 69],
    strengths: {
      ko: ['인내심', '회복력', '끈기', '적응력', '긍정적 사고', '문제 해결력', '책임감', '현실감각', '유연성', '의지력'],
      en: ['Patience', 'Resilience', 'Persistence', 'Adaptability', 'Positive Thinking', 'Problem Solving', 'Responsibility', 'Realism', 'Flexibility', 'Willpower'],
      ja: ['忍耐', '回復力', '粘り強さ', '適応力', 'ポジティブ思考', '問題解決力', '責任感', '現実感覚', '柔軟性', '意志力'],
      'zh-CN': ['耐心', '恢复力', '坚持', '适应性', '积极思考', '解决问题能力', '责任感', '现实感', '灵活性', '意志力'],
      'zh-TW': ['耐心', '恢復力', '堅持', '適應性', '積極思考', '解決問題能力', '責任感', '現實感', '靈活性', '意志力'],
      vi: ['Kiên Nhẫn', 'Khả Năng Phục Hồi', 'Kiên Trì', 'Thích Ứng', 'Suy Nghĩ Tích Cực', 'Khả Năng Giải Quyết Vấn Đề', 'Trách Nhiệm', 'Cảm Giác Thực Tế', 'Linh Hoạt', 'Ý Chí'],
      id: ['Kesabaran', 'Pemulihan', 'Ketekunan', 'Adaptabilitas', 'Berpikir Positif', 'Kemampuan Memecahkan Masalah', 'Tanggung Jawab', 'Kesadaran Realitas', 'Fleksibilitas', 'Kemauan']
    },
    recommendations: {
      ko: ['꾸준한 자기계발', '긍정적 사고 유지', '인내심 기르기', '문제 해결 능력 향상', '건강 관리', '스트레스 관리', '주변 사람들과 소통', '현실적인 목표 설정', '단계별 접근', '도움 요청하기'],
      en: ['Consistent Self-Development', 'Maintain Positive Thinking', 'Cultivate Patience', 'Improve Problem-Solving Skills', 'Health Management', 'Stress Management', 'Communication with People Around', 'Set Realistic Goals', 'Step-by-Step Approach', 'Ask for Help'],
      ja: ['着実な自己啓発', 'ポジティブ思考の維持', '忍耐を育てる', '問題解決能力の向上', '健康管理', 'ストレス管理', '周囲の人々とのコミュニケーション', '現実的な目標設定', '段階的なアプローチ', '助けを求める'],
      'zh-CN': ['持续自我发展', '保持积极思考', '培养耐心', '提高解决问题能力', '健康管理', '压力管理', '与周围的人沟通', '设定现实目标', '逐步方法', '寻求帮助'],
      'zh-TW': ['持續自我發展', '保持積極思考', '培養耐心', '提高解決問題能力', '健康管理', '壓力管理', '與周圍的人溝通', '設定現實目標', '逐步方法', '尋求幫助'],
      vi: ['Phát Triển Bản Thân Nhất Quán', 'Duy Trì Suy Nghĩ Tích Cực', 'Nuôi Dưỡng Kiên Nhẫn', 'Cải Thiện Kỹ Năng Giải Quyết Vấn Đề', 'Quản Lý Sức Khỏe', 'Quản Lý Căng Thẳng', 'Giao Tiếp Với Những Người Xung Quanh', 'Thiết Lập Mục Tiêu Thực Tế', 'Tiếp Cận Từng Bước', 'Yêu Cầu Giúp Đỡ'],
      id: ['Pengembangan Diri Konsisten', 'Pertahankan Berpikir Positif', 'Kembangkan Kesabaran', 'Tingkatkan Keterampilan Memecahkan Masalah', 'Manajemen Kesehatan', 'Manajemen Stres', 'Komunikasi dengan Orang Sekitar', 'Tetapkan Tujuan Realistis', 'Pendekatan Bertahap', 'Minta Bantuan']
    },
    advice: {
      ko: [
        '올해는 조금 어려운 운세이지만 절대 포기하지 마세요. 인내심을 가지고 꾸준히 노력하면 극복할 수 있습니다.',
        '어려움이 있어도 긍정적인 마음가짐을 유지하는 것이 중요합니다. 긍정적 사고가 상황을 개선하는 데 도움이 됩니다.',
        '혼자 해결하려고 하지 말고 주변 사람들에게 도움을 요청하는 것도 좋은 방법입니다. 소통과 협력이 중요합니다.',
        '어려운 시기일수록 건강 관리에 더욱 신경 써야 합니다. 몸과 마음의 건강이 모든 것의 기초입니다.',
        '큰 목표보다는 작은 목표를 세워서 하나씩 달성해 나가는 것이 좋습니다. 단계별 접근이 중요합니다.',
        '스트레스 관리를 잘 해야 합니다. 무리하지 말고 적절히 휴식하는 것도 노력의 일부입니다.',
        '현실적인 목표를 설정하고 계획적으로 접근하시기 바랍니다. 무리한 계획은 오히려 역효과를 낼 수 있습니다.',
        '어려운 시기일수록 인내심을 가지고 천천히 나아가는 것이 좋습니다. 서두르지 말고 차근차근 진행하세요.',
        '긍정적인 에너지를 유지하기 위해 취미 활동이나 자기계발에 시간을 투자하는 것을 권장합니다.',
        '절대 혼자 감당하려고 하지 마세요. 필요한 경우 전문가의 도움을 받는 것도 현명한 선택입니다.'
      ],
      en: [
        'This year has slightly difficult fortune, but never give up. With patience and steady effort, you can overcome it.',
        'Even when there are difficulties, maintaining a positive mindset is important. Positive thinking helps improve situations.',
        'Do not try to solve everything alone. Asking people around you for help is also a good method. Communication and cooperation are important.',
        'The more difficult the time, the more you should pay attention to health management. Physical and mental health is the foundation of everything.',
        'Rather than setting big goals, it is better to set small goals and achieve them one by one. Step-by-step approach is important.',
        'You must manage stress well. Not overdoing it and taking proper rest is also part of effort.',
        'Please set realistic goals and approach systematically. Unrealistic plans can have the opposite effect.',
        'The more difficult the time, the better it is to move forward slowly with patience. Do not rush, proceed step by step.',
        'It is recommended to invest time in hobbies or self-development to maintain positive energy.',
        'Never try to handle everything alone. If necessary, seeking expert help is also a wise choice.'
      ],
      ja: [
        '今年は少し困難な運勢ですが、絶対に諦めないでください。忍耐を持って着実に努力すれば克服できます。',
        '困難があってもポジティブな心構えを維持することが重要です。ポジティブ思考が状況を改善するのに役立ちます。',
        '一人で解決しようとせず、周囲の人々に助けを求めることも良い方法です。コミュニケーションと協力が重要です。',
        '困難な時期ほど健康管理により多くの注意を払う必要があります。体と心の健康がすべての基礎です。',
        '大きな目標よりも小さな目標を設定して一つずつ達成していくことが良いでしょう。段階的なアプローチが重要です。',
        'ストレス管理をよくする必要があります。無理をせず適切に休息を取ることも努力の一部です。',
        '現実的な目標を設定し、計画的にアプローチすることをお勧めします。無理な計画は逆効果になる可能性があります。',
        '困難な時期ほど忍耐を持ってゆっくり進むことが良いでしょう。急がないで一つずつ進めてください。',
        'ポジティブなエネルギーを維持するために、趣味活動や自己啓発に時間を投資することをお勧めします。',
        '絶対に一人で処理しようとしないでください。必要に応じて専門家の助けを得ることも賢明な選択です。'
      ],
      'zh-CN': [
        '今年有稍有困难的运势，但绝对不要放弃。通过耐心和持续努力，你可以克服它。',
        '即使有困难，保持积极心态很重要。积极思考有助于改善情况。',
        '不要试图独自解决一切。向周围的人寻求帮助也是一个好方法。沟通和合作很重要。',
        '越是困难的时期，越应该注意健康管理。身心健康是一切的基础。',
        '与其设定大目标，不如设定小目标并逐一实现。逐步方法很重要。',
        '必须很好地管理压力。不过度劳累并适当休息也是努力的一部分。',
        '请设定现实目标并系统地接近。不切实际的计划可能适得其反。',
        '越是困难的时期，越应该耐心地慢慢前进。不要匆忙，逐步进行。',
        '建议投资时间于爱好或自我发展以保持正能量。',
        '永远不要试图独自处理一切。如有必要，寻求专家帮助也是明智的选择。'
      ],
      'zh-TW': [
        '今年有稍有困難的運勢，但絕對不要放棄。通過耐心和持續努力，你可以克服它。',
        '即使有困難，保持積極心態很重要。積極思考有助於改善情況。',
        '不要試圖獨自解決一切。向周圍的人尋求幫助也是一個好方法。溝通和合作很重要。',
        '越是困難的時期，越應該注意健康管理。身心健康是一切的基础。',
        '與其設定大目標，不如設定小目標並逐一實現。逐步方法很重要。',
        '必須很好地管理壓力。不過度勞累並適當休息也是努力的一部分。',
        '請設定現實目標並系統地接近。不切實際的計劃可能適得其反。',
        '越是困難的時期，越應該耐心地慢慢前進。不要匆忙，逐步進行。',
        '建議投資時間於愛好或自我發展以保持正能量。',
        '永遠不要試圖獨自處理一切。如有必要，尋求專家幫助也是明智的選擇。'
      ],
      vi: [
        'Năm nay có vận may hơi khó khăn, nhưng tuyệt đối đừng từ bỏ. Với sự kiên nhẫn và nỗ lực ổn định, bạn có thể vượt qua nó.',
        'Ngay cả khi có khó khăn, duy trì tư duy tích cực là quan trọng. Suy nghĩ tích cực giúp cải thiện tình huống.',
        'Đừng cố gắng giải quyết mọi thứ một mình. Yêu cầu những người xung quanh giúp đỡ cũng là một phương pháp tốt. Giao tiếp và hợp tác là quan trọng.',
        'Càng khó khăn, bạn càng phải chú ý đến quản lý sức khỏe. Sức khỏe thể chất và tinh thần là nền tảng của mọi thứ.',
        'Thay vì đặt mục tiêu lớn, tốt hơn là đặt mục tiêu nhỏ và đạt được từng cái một. Tiếp cận từng bước là quan trọng.',
        'Bạn phải quản lý căng thẳng tốt. Không làm quá sức và nghỉ ngơi đúng cách cũng là một phần của nỗ lực.',
        'Vui lòng đặt mục tiêu thực tế và tiếp cận một cách có hệ thống. Những kế hoạch không thực tế có thể phản tác dụng.',
        'Càng khó khăn, càng tốt là tiến lên chậm rãi với sự kiên nhẫn. Đừng vội vã, tiến hành từng bước.',
        'Nên đầu tư thời gian vào sở thích hoặc phát triển bản thân để duy trì năng lượng tích cực.',
        'Tuyệt đối đừng cố gắng xử lý mọi thứ một mình. Nếu cần, tìm kiếm sự giúp đỡ từ chuyên gia cũng là lựa chọn khôn ngoan.'
      ],
      id: [
        'Tahun ini memiliki keberuntungan yang sedikit sulit, tetapi jangan pernah menyerah. Dengan kesabaran dan upaya yang stabil, Anda dapat mengatasinya.',
        'Bahkan ketika ada kesulitan, mempertahankan pola pikir positif adalah penting. Berpikir positif membantu meningkatkan situasi.',
        'Jangan mencoba menyelesaikan semuanya sendirian. Meminta bantuan orang-orang di sekitar Anda juga merupakan metode yang baik. Komunikasi dan kerjasama adalah penting.',
        'Semakin sulit waktunya, semakin Anda harus memperhatikan manajemen kesehatan. Kesehatan fisik dan mental adalah dasar dari segalanya.',
        'Daripada menetapkan tujuan besar, lebih baik menetapkan tujuan kecil dan mencapainya satu per satu. Pendekatan bertahap adalah penting.',
        'Anda harus mengelola stres dengan baik. Tidak berlebihan dan beristirahat dengan benar juga merupakan bagian dari upaya.',
        'Silakan tetapkan tujuan yang realistis dan pendekatan secara sistematis. Rencana yang tidak realistis dapat memiliki efek sebaliknya.',
        'Semakin sulit waktunya, semakin baik bergerak maju perlahan dengan kesabaran. Jangan terburu-buru, lanjutkan langkah demi langkah.',
        'Disarankan untuk menginvestasikan waktu dalam hobi atau pengembangan diri untuk mempertahankan energi positif.',
        'Jangan pernah mencoba menangani semuanya sendirian. Jika perlu, mencari bantuan ahli juga merupakan pilihan yang bijaksana.'
      ]
    },
    fortune: {
      wealth: {
        ko: [
          `${getFutureMonthShort(2)}부터 재물 관리에 더욱 신중하게 접근해야 할 시기입니다. 큰 투자나 지출은 피하는 것이 좋습니다.`,
          `올해 재물운은 신중한 접근이 필요합니다. ${getFutureMonthShort(3)}부터는 계획적인 재무 관리가 중요해집니다.`,
          `${getFutureMonthShort(4)}에 재물 관련 주의가 필요할 수 있습니다. 이 시기에는 충동적인 지출을 삼가하시기 바랍니다.`,
          `올해 재물운은 다소 어려울 수 있지만, ${getFutureMonthShort(5)}부터는 점진적으로 개선될 가능성이 있습니다.`,
          `${getFutureMonthShort(1)}부터 재물 관리에 더욱 집중하시기 바랍니다. 저축 계획을 세우고 실천하는 것이 좋습니다.`,
          `올해 재물운은 큰 기대보다는 안정성에 중점을 두는 것이 좋습니다. ${getFutureMonthShort(6)}부터는 더 신중하게 접근하세요.`,
          `${getFutureMonthShort(7)}에 재물 관련 작은 어려움이 있을 수 있습니다. 하지만 계획적으로 관리하면 극복할 수 있습니다.`,
          `올해 재물운은 인내심을 가지고 관리하는 것이 중요합니다. ${getFutureMonthShort(8)}부터는 조금씩 나아질 수 있을 것입니다.`,
          `${getFutureMonthShort(9)}에 재물 관련 긍정적인 변화가 있을 수 있습니다. 하지만 서두르지 말고 신중하게 판단하시기 바랍니다.`,
          `올해 재물운은 전반적으로 신중한 접근이 필요합니다. ${getFutureMonthShort(10)}부터는 더 안정적인 흐름을 기대할 수 있습니다.`
        ],
        get en() {
          return [
            `From ${getFutureMonthShortEn(2)}, you need a more cautious approach to wealth management. It is best to avoid large investments or expenses.`,
            `This year's wealth fortune requires a cautious approach. From ${getFutureMonthShortEn(3)}, systematic financial management becomes important.`,
            `In ${getFutureMonthShortEn(4)}, caution may be needed regarding wealth. During this period, avoid impulsive spending.`,
            `This year's wealth fortune may be somewhat difficult, but from ${getFutureMonthShortEn(5)}, there is a possibility of gradual improvement.`,
            `From ${getFutureMonthShortEn(1)}, focus more on wealth management. It is good to create and practice a savings plan.`,
            `This year's wealth fortune is better focused on stability rather than high expectations. From ${getFutureMonthShortEn(6)}, be more cautious.`,
            `In ${getFutureMonthShortEn(7)}, there may be small difficulties related to wealth. However, if managed systematically, you can overcome them.`,
            `This year's wealth fortune requires patient management. From ${getFutureMonthShortEn(8)}, things can improve gradually.`,
            `In ${getFutureMonthShortEn(9)}, there may be positive changes related to wealth. However, do not rush and make careful judgments.`,
            `This year's wealth fortune requires an overall cautious approach. From ${getFutureMonthShortEn(10)}, you can expect a more stable flow.`
          ];
        },
        get ja() {
          return [
            `${getFutureMonthShortJa(2)}から財運管理により慎重なアプローチが必要です。大きな投資や支出は避けることが良いでしょう。`,
            `今年の財運は慎重なアプローチが必要です。${getFutureMonthShortJa(3)}からは計画的金融管理が重要になります。`,
            `${getFutureMonthShortJa(4)}に財運に関する注意が必要かもしれません。この時期には衝動的な支出を控えることをお勧めします。`,
            `今年の財運はやや困難かもしれませんが、${getFutureMonthShortJa(5)}からは段階的な改善の可能性があります。`,
            `${getFutureMonthShortJa(1)}から財運管理により集中することをお勧めします。貯蓄計画を立てて実践することが良いでしょう。`,
            `今年の財運は大きな期待よりも安定性に重点を置くことが良いでしょう。${getFutureMonthShortJa(6)}からはより慎重にアプローチしてください。`,
            `${getFutureMonthShortJa(7)}に財運に関する小さな困難があるかもしれません。しかし、計画的に管理すれば克服できます。`,
            `今年の財運は忍耐を持って管理することが重要です。${getFutureMonthShortJa(8)}からは少しずつ良くなる可能性があります。`,
            `${getFutureMonthShortJa(9)}に財運に関する前向きな変化があるかもしれません。しかし、急がずに慎重に判断することをお勧めします。`,
            `今年の財運は全体的に慎重なアプローチが必要です。${getFutureMonthShortJa(10)}からはより安定した流れを期待できるでしょう。`
          ];
        },
        get 'zh-CN'() {
          return [
            `从${getFutureMonthShortZhCN(2)}开始，你需要更谨慎地管理财富。最好避免大额投资或支出。`,
            `今年的财运需要谨慎的方法。从${getFutureMonthShortZhCN(3)}开始，系统的财务管理变得重要。`,
            `在${getFutureMonthShortZhCN(4)}，可能需要关于财富的谨慎。在这个时期，避免冲动消费。`,
            `今年的财运可能有些困难，但从${getFutureMonthShortZhCN(5)}开始，有逐步改善的可能性。`,
            `从${getFutureMonthShortZhCN(1)}开始，更加关注财富管理。制定并实践储蓄计划是好的。`,
            `今年的财运最好专注于稳定性而不是高期望。从${getFutureMonthShortZhCN(6)}开始，要更加谨慎。`,
            `在${getFutureMonthShortZhCN(7)}，可能会有与财富相关的小困难。但如果系统地管理，你可以克服它们。`,
            `今年的财运需要耐心管理。从${getFutureMonthShortZhCN(8)}开始，情况可以逐步改善。`,
            `在${getFutureMonthShortZhCN(9)}，可能会有与财富相关的积极变化。但不要匆忙，要仔细判断。`,
            `今年的财运需要整体谨慎的方法。从${getFutureMonthShortZhCN(10)}开始，你可以期待更稳定的流动。`
          ];
        },
        get 'zh-TW'() {
          return [
            `從${getFutureMonthShortZhTW(2)}開始，你需要更謹慎地管理財富。最好避免大額投資或支出。`,
            `今年的財運需要謹慎的方法。從${getFutureMonthShortZhTW(3)}開始，系統的財務管理變得重要。`,
            `在${getFutureMonthShortZhTW(4)}，可能需要關於財富的謹慎。在這個時期，避免衝動消費。`,
            `今年的財運可能有些困難，但從${getFutureMonthShortZhTW(5)}開始，有逐步改善的可能性。`,
            `從${getFutureMonthShortZhTW(1)}開始，更加關注財富管理。制定並實踐儲蓄計畫是好的。`,
            `今年的財運最好專注於穩定性而不是高期望。從${getFutureMonthShortZhTW(6)}開始，要更加謹慎。`,
            `在${getFutureMonthShortZhTW(7)}，可能會有與財富相關的小困難。但如果系統地管理，你可以克服它們。`,
            `今年的財運需要耐心管理。從${getFutureMonthShortZhTW(8)}開始，情況可以逐步改善。`,
            `在${getFutureMonthShortZhTW(9)}，可能會有與財富相關的積極變化。但不要匆忙，要仔細判斷。`,
            `今年的財運需要整體謹慎的方法。從${getFutureMonthShortZhTW(10)}開始，你可以期待更穩定的流動。`
          ];
        },
        get vi() {
          return [
            `Từ ${getFutureMonthShortVi(2)}, bạn cần tiếp cận thận trọng hơn với quản lý tài chính. Tốt nhất là tránh các khoản đầu tư hoặc chi tiêu lớn.`,
            `Vận tài chính năm nay yêu cầu một cách tiếp cận thận trọng. Từ ${getFutureMonthShortVi(3)}, quản lý tài chính có hệ thống trở nên quan trọng.`,
            `Vào ${getFutureMonthShortVi(4)}, có thể cần thận trọng về tài chính. Trong thời kỳ này, tránh chi tiêu bốc đồng.`,
            `Vận tài chính năm nay có thể hơi khó khăn, nhưng từ ${getFutureMonthShortVi(5)}, có khả năng cải thiện dần dần.`,
            `Từ ${getFutureMonthShortVi(1)}, tập trung nhiều hơn vào quản lý tài chính. Lập và thực hành kế hoạch tiết kiệm là tốt.`,
            `Vận tài chính năm nay nên tập trung vào sự ổn định thay vì kỳ vọng cao. Từ ${getFutureMonthShortVi(6)}, hãy thận trọng hơn.`,
            `Vào ${getFutureMonthShortVi(7)}, có thể có những khó khăn nhỏ liên quan đến tài chính. Tuy nhiên, nếu quản lý có hệ thống, bạn có thể vượt qua chúng.`,
            `Vận tài chính năm nay yêu cầu quản lý kiên nhẫn. Từ ${getFutureMonthShortVi(8)}, mọi thứ có thể cải thiện dần dần.`,
            `Vào ${getFutureMonthShortVi(9)}, có thể có những thay đổi tích cực liên quan đến tài chính. Tuy nhiên, đừng vội vàng và hãy đưa ra phán đoán cẩn thận.`,
            `Vận tài chính năm nay yêu cầu một cách tiếp cận thận trọng tổng thể. Từ ${getFutureMonthShortVi(10)}, bạn có thể mong đợi một dòng chảy ổn định hơn.`
          ];
        },
        get id() {
          return [
            `Dari ${getFutureMonthShortId(2)}, Anda perlu pendekatan yang lebih hati-hati terhadap manajemen kekayaan. Terbaik adalah menghindari investasi besar atau pengeluaran.`,
            `Keberuntungan kekayaan tahun ini memerlukan pendekatan yang hati-hati. Dari ${getFutureMonthShortId(3)}, manajemen keuangan yang sistematis menjadi penting.`,
            `Pada ${getFutureMonthShortId(4)}, kehati-hatian mungkin diperlukan terkait kekayaan. Selama periode ini, hindari pengeluaran impulsif.`,
            `Keberuntungan kekayaan tahun ini mungkin agak sulit, tetapi dari ${getFutureMonthShortId(5)}, ada kemungkinan perbaikan bertahap.`,
            `Dari ${getFutureMonthShortId(1)}, fokus lebih pada manajemen kekayaan. Baik untuk membuat dan mempraktikkan rencana tabungan.`,
            `Keberuntungan kekayaan tahun ini lebih baik difokuskan pada stabilitas daripada ekspektasi tinggi. Dari ${getFutureMonthShortId(6)}, lebih berhati-hati.`,
            `Pada ${getFutureMonthShortId(7)}, mungkin ada kesulitan kecil terkait kekayaan. Namun, jika dikelola secara sistematis, Anda dapat mengatasinya.`,
            `Keberuntungan kekayaan tahun ini memerlukan manajemen yang sabar. Dari ${getFutureMonthShortId(8)}, hal-hal dapat membaik secara bertahap.`,
            `Pada ${getFutureMonthShortId(9)}, mungkin ada perubahan positif terkait kekayaan. Namun, jangan terburu-buru dan buat penilaian yang hati-hati.`,
            `Keberuntungan kekayaan tahun ini memerlukan pendekatan hati-hati secara keseluruhan. Dari ${getFutureMonthShortId(10)}, Anda dapat mengharapkan aliran yang lebih stabil.`
          ];
        }
      },
      health: {
        ko: [
          `${getFutureMonthShort(2)}부터 건강 관리에 더욱 주의를 기울여야 할 시기입니다. 정기적인 건강 검진을 권장합니다.`,
          `올해 건강운은 신중한 관리가 필요합니다. ${getFutureMonthShort(3)}부터는 생활 습관 개선에 집중하시기 바랍니다.`,
          `${getFutureMonthShort(4)}에 건강 관련 작은 어려움이 있을 수 있습니다. 하지만 꾸준한 관리로 극복할 수 있습니다.`,
          `올해 건강운은 주기적인 관심이 필요합니다. ${getFutureMonthShort(5)}부터는 더욱 신경 쓰시기 바랍니다.`,
          `${getFutureMonthShort(1)}부터 건강 관리를 철저히 하시기 바랍니다. 작은 증상이라도 무시하지 않는 것이 중요합니다.`,
          `올해 건강운은 꾸준한 관리가 필요합니다. ${getFutureMonthShort(6)}부터는 더 큰 개선을 기대할 수 있을 것입니다.`,
          `${getFutureMonthShort(7)}에 건강 관련 주의가 필요할 수 있습니다. 이 시기에는 충분한 휴식과 회복이 중요합니다.`,
          `올해 건강운은 인내심을 가지고 관리하는 것이 중요합니다. ${getFutureMonthShort(8)}부터는 조금씩 개선될 수 있을 것입니다.`,
          `${getFutureMonthShort(9)}에 건강 관련 긍정적인 변화가 있을 수 있습니다. 하지만 계속해서 관리에 신경 쓰시기 바랍니다.`,
          `올해 건강운은 전반적으로 신중한 관리가 필요합니다. ${getFutureMonthShort(10)}부터는 더 안정적인 상태를 기대할 수 있습니다.`
        ],
        get en() {
          return [
            `From ${getFutureMonthShortEn(2)}, you need to pay more attention to health management. Regular health checkups are recommended.`,
            `This year's health fortune requires careful management. From ${getFutureMonthShortEn(3)}, focus on improving lifestyle habits.`,
            `In ${getFutureMonthShortEn(4)}, there may be small difficulties related to health. However, you can overcome them with consistent management.`,
            `This year's health fortune requires periodic attention. From ${getFutureMonthShortEn(5)}, pay even more attention.`,
            `From ${getFutureMonthShortEn(1)}, manage your health thoroughly. It is important not to ignore even small symptoms.`,
            `This year's health fortune requires consistent management. From ${getFutureMonthShortEn(6)}, you can expect greater improvement.`,
            `In ${getFutureMonthShortEn(7)}, caution may be needed regarding health. During this period, sufficient rest and recovery are important.`,
            `This year's health fortune requires patient management. From ${getFutureMonthShortEn(8)}, things can improve gradually.`,
            `In ${getFutureMonthShortEn(9)}, there may be positive changes related to health. However, continue to pay attention to management.`,
            `This year's health fortune requires overall careful management. From ${getFutureMonthShortEn(10)}, you can expect a more stable condition.`
          ];
        },
        get ja() {
          return [
            `${getFutureMonthShortJa(2)}から健康管理により多くの注意を払う必要がある時期です。定期的な健康診断をお勧めします。`,
            `今年の健康運は慎重な管理が必要です。${getFutureMonthShortJa(3)}からは生活習慣の改善に集中することをお勧めします。`,
            `${getFutureMonthShortJa(4)}に健康に関する小さな困難があるかもしれません。しかし、継続的な管理で克服できます。`,
            `今年の健康運は定期的な関心が必要です。${getFutureMonthShortJa(5)}からはさらに神経を使うことをお勧めします。`,
            `${getFutureMonthShortJa(1)}から健康管理を徹底することをお勧めします。小さな症状でも無視しないことが重要です。`,
            `今年の健康運は一貫した管理が必要です。${getFutureMonthShortJa(6)}からはより大きな改善が期待できるでしょう。`,
            `${getFutureMonthShortJa(7)}に健康に関する注意が必要かもしれません。この時期には十分な休息と回復が重要です。`,
            `今年の健康運は忍耐を持って管理することが重要です。${getFutureMonthShortJa(8)}からは少しずつ改善する可能性があります。`,
            `${getFutureMonthShortJa(9)}に健康に関する前向きな変化があるかもしれません。しかし、継続して管理に神経を使うことをお勧めします。`,
            `今年の健康運は全体的に慎重な管理が必要です。${getFutureMonthShortJa(10)}からはより安定した状態を期待できるでしょう。`
          ];
        },
        get 'zh-CN'() {
          return [
            `从${getFutureMonthShortZhCN(2)}开始，你需要更加关注健康管理。建议定期健康检查。`,
            `今年的健康运需要谨慎管理。从${getFutureMonthShortZhCN(3)}开始，专注于改善生活习惯。`,
            `在${getFutureMonthShortZhCN(4)}，可能会有与健康相关的小困难。但通过持续管理，你可以克服它们。`,
            `今年的健康运需要定期关注。从${getFutureMonthShortZhCN(5)}开始，需要更加注意。`,
            `从${getFutureMonthShortZhCN(1)}开始，彻底管理健康。即使是很小的症状也不要忽视，这很重要。`,
            `今年的健康运需要持续管理。从${getFutureMonthShortZhCN(6)}开始，可以期待更大的改善。`,
            `在${getFutureMonthShortZhCN(7)}，可能需要关于健康的谨慎。在这个时期，充分的休息和恢复很重要。`,
            `今年的健康运需要耐心管理。从${getFutureMonthShortZhCN(8)}开始，情况可以逐步改善。`,
            `在${getFutureMonthShortZhCN(9)}，可能会有与健康相关的积极变化。但要继续注意管理。`,
            `今年的健康运需要整体谨慎管理。从${getFutureMonthShortZhCN(10)}开始，你可以期待更稳定的状态。`
          ];
        },
        get 'zh-TW'() {
          return [
            `從${getFutureMonthShortZhTW(2)}開始，你需要更加關注健康管理。建議定期健康檢查。`,
            `今年的健康運需要謹慎管理。從${getFutureMonthShortZhTW(3)}開始，專注於改善生活習慣。`,
            `在${getFutureMonthShortZhTW(4)}，可能會有與健康相關的小困難。但通過持續管理，你可以克服它們。`,
            `今年的健康運需要定期關注。從${getFutureMonthShortZhTW(5)}開始，需要更加注意。`,
            `從${getFutureMonthShortZhTW(1)}開始，徹底管理健康。即使是很小的症狀也不要忽視，這很重要。`,
            `今年的健康運需要持續管理。從${getFutureMonthShortZhTW(6)}開始，可以期待更大的改善。`,
            `在${getFutureMonthShortZhTW(7)}，可能需要關於健康的謹慎。在這個時期，充分的休息和恢復很重要。`,
            `今年的健康運需要耐心管理。從${getFutureMonthShortZhTW(8)}開始，情況可以逐步改善。`,
            `在${getFutureMonthShortZhTW(9)}，可能會有與健康相關的積極變化。但要繼續注意管理。`,
            `今年的健康運需要整體謹慎管理。從${getFutureMonthShortZhTW(10)}開始，你可以期待更穩定的狀態。`
          ];
        },
        get vi() {
          return [
            `Từ ${getFutureMonthShortVi(2)}, bạn cần chú ý nhiều hơn đến quản lý sức khỏe. Khám sức khỏe định kỳ được khuyến nghị.`,
            `Vận sức khỏe năm nay yêu cầu quản lý cẩn thận. Từ ${getFutureMonthShortVi(3)}, tập trung vào cải thiện thói quen sinh hoạt.`,
            `Vào ${getFutureMonthShortVi(4)}, có thể có những khó khăn nhỏ liên quan đến sức khỏe. Tuy nhiên, bạn có thể vượt qua chúng bằng cách quản lý nhất quán.`,
            `Vận sức khỏe năm nay yêu cầu sự quan tâm định kỳ. Từ ${getFutureMonthShortVi(5)}, hãy chú ý nhiều hơn nữa.`,
            `Từ ${getFutureMonthShortVi(1)}, quản lý sức khỏe của bạn một cách triệt để. Việc không bỏ qua ngay cả những triệu chứng nhỏ là quan trọng.`,
            `Vận sức khỏe năm nay yêu cầu quản lý nhất quán. Từ ${getFutureMonthShortVi(6)}, bạn có thể mong đợi cải thiện lớn hơn.`,
            `Vào ${getFutureMonthShortVi(7)}, có thể cần thận trọng về sức khỏe. Trong thời kỳ này, nghỉ ngơi và phục hồi đầy đủ là quan trọng.`,
            `Vận sức khỏe năm nay yêu cầu quản lý kiên nhẫn. Từ ${getFutureMonthShortVi(8)}, mọi thứ có thể cải thiện dần dần.`,
            `Vào ${getFutureMonthShortVi(9)}, có thể có những thay đổi tích cực liên quan đến sức khỏe. Tuy nhiên, hãy tiếp tục chú ý đến quản lý.`,
            `Vận sức khỏe năm nay yêu cầu quản lý cẩn thận tổng thể. Từ ${getFutureMonthShortVi(10)}, bạn có thể mong đợi một tình trạng ổn định hơn.`
          ];
        },
        get id() {
          return [
            `Dari ${getFutureMonthShortId(2)}, Anda perlu lebih memperhatikan manajemen kesehatan. Pemeriksaan kesehatan rutin direkomendasikan.`,
            `Keberuntungan kesehatan tahun ini memerlukan manajemen yang hati-hati. Dari ${getFutureMonthShortId(3)}, fokus pada peningkatan kebiasaan gaya hidup.`,
            `Pada ${getFutureMonthShortId(4)}, mungkin ada kesulitan kecil terkait kesehatan. Namun, Anda dapat mengatasinya dengan manajemen yang konsisten.`,
            `Keberuntungan kesehatan tahun ini memerlukan perhatian berkala. Dari ${getFutureMonthShortId(5)}, perhatikan lebih banyak lagi.`,
            `Dari ${getFutureMonthShortId(1)}, kelola kesehatan Anda secara menyeluruh. Penting untuk tidak mengabaikan bahkan gejala kecil.`,
            `Keberuntungan kesehatan tahun ini memerlukan manajemen yang konsisten. Dari ${getFutureMonthShortId(6)}, Anda dapat mengharapkan perbaikan yang lebih besar.`,
            `Pada ${getFutureMonthShortId(7)}, kehati-hatian mungkin diperlukan terkait kesehatan. Selama periode ini, istirahat dan pemulihan yang cukup adalah penting.`,
            `Keberuntungan kesehatan tahun ini memerlukan manajemen yang sabar. Dari ${getFutureMonthShortId(8)}, hal-hal dapat membaik secara bertahap.`,
            `Pada ${getFutureMonthShortId(9)}, mungkin ada perubahan positif terkait kesehatan. Namun, teruslah memperhatikan manajemen.`,
            `Keberuntungan kesehatan tahun ini memerlukan manajemen hati-hati secara keseluruhan. Dari ${getFutureMonthShortId(10)}, Anda dapat mengharapkan kondisi yang lebih stabil.`
          ];
        }
      },
      love: {
        ko: [
          `${getFutureMonthShort(3)}부터 연애 운에 더욱 인내심이 필요한 시기입니다. 서두르지 말고 천천히 나아가는 것이 좋습니다.`,
          `올해 연애운은 인내와 노력이 필요한 시기입니다. ${getFutureMonthShort(4)}부터는 조금씩 개선될 수 있을 것입니다.`,
          `${getFutureMonthShort(2)}에 연애 관련 작은 어려움이 있을 수 있습니다. 하지만 소통으로 극복할 수 있습니다.`,
          `올해 연애운은 꾸준한 노력이 필요합니다. ${getFutureMonthShort(5)}부터는 더 긍정적인 변화를 기대할 수 있습니다.`,
          `${getFutureMonthShort(1)}부터 연애 운에 더욱 신경 쓰시기 바랍니다. 하지만 성급하게 나서는 것은 피하세요.`,
          `올해 연애운은 인내심을 가지고 접근하는 것이 중요합니다. ${getFutureMonthShort(6)}부터는 더 나은 시기를 기대할 수 있습니다.`,
          `${getFutureMonthShort(7)}에 연애 관련 주의가 필요할 수 있습니다. 이 시기에는 상대방과의 소통이 중요합니다.`,
          `올해 연애운은 점진적으로 개선될 수 있습니다. ${getFutureMonthShort(8)}부터는 더 안정적인 관계를 맺을 수 있을 것입니다.`,
          `${getFutureMonthShort(9)}에 연애 관련 긍정적인 전환점이 있을 수 있습니다. 하지만 현실적인 기대를 가지시기 바랍니다.`,
          `올해 연애운은 전반적으로 인내와 소통이 중요한 시기입니다. ${getFutureMonthShort(10)}부터는 더 좋은 결과를 기대할 수 있습니다.`
        ],
        get en() {
          return [
            `From ${getFutureMonthShortEn(3)}, more patience is needed in love fortune. It is good not to rush and proceed slowly.`,
            `This year's love fortune is a period requiring patience and effort. From ${getFutureMonthShortEn(4)}, things can improve gradually.`,
            `In ${getFutureMonthShortEn(2)}, there may be small difficulties related to love. However, you can overcome them through communication.`,
            `This year's love fortune requires consistent effort. From ${getFutureMonthShortEn(5)}, you can expect more positive changes.`,
            `From ${getFutureMonthShortEn(1)}, pay more attention to love fortune. However, avoid acting hastily.`,
            `This year's love fortune is important to approach with patience. From ${getFutureMonthShortEn(6)}, you can expect better times.`,
            `In ${getFutureMonthShortEn(7)}, caution may be needed regarding love. During this period, communication with your partner is important.`,
            `This year's love fortune can improve gradually. From ${getFutureMonthShortEn(8)}, you can establish more stable relationships.`,
            `In ${getFutureMonthShortEn(9)}, there may be a positive turning point related to love. However, have realistic expectations.`,
            `This year's love fortune is overall a period where patience and communication are important. From ${getFutureMonthShortEn(10)}, you can expect better results.`
          ];
        },
        get ja() {
          return [
            `${getFutureMonthShortJa(3)}から恋愛運により多くの忍耐が必要な時期です。急がずにゆっくり進むことが良いでしょう。`,
            `今年の恋愛運は忍耐と努力が必要な時期です。${getFutureMonthShortJa(4)}からは少しずつ改善する可能性があります。`,
            `${getFutureMonthShortJa(2)}に恋愛に関する小さな困難があるかもしれません。しかし、コミュニケーションで克服できます。`,
            `今年の恋愛運は一貫した努力が必要です。${getFutureMonthShortJa(5)}からはより前向きな変化が期待できるでしょう。`,
            `${getFutureMonthShortJa(1)}から恋愛運により神経を使うことをお勧めします。しかし、性急に動くことは避けてください。`,
            `今年の恋愛運は忍耐を持ってアプローチすることが重要です。${getFutureMonthShortJa(6)}からはより良い時期が期待できるでしょう。`,
            `${getFutureMonthShortJa(7)}に恋愛に関する注意が必要かもしれません。この時期には相手とのコミュニケーションが重要です。`,
            `今年の恋愛運は段階的に改善可能です。${getFutureMonthShortJa(8)}からはより安定した関係を築けるでしょう。`,
            `${getFutureMonthShortJa(9)}に恋愛に関する前向きな転換点があるかもしれません。しかし、現実的な期待を持つことをお勧めします。`,
            `今年の恋愛運は全体的に忍耐とコミュニケーションが重要な時期です。${getFutureMonthShortJa(10)}からはより良い結果が期待できるでしょう。`
          ];
        },
        get 'zh-CN'() {
          return [
            `从${getFutureMonthShortZhCN(3)}开始，恋爱运需要更多耐心。不要匆忙，慢慢前进是好的。`,
            `今年的恋爱运是需要耐心和努力的时期。从${getFutureMonthShortZhCN(4)}开始，情况可以逐步改善。`,
            `在${getFutureMonthShortZhCN(2)}，可能会有与恋爱相关的小困难。但通过沟通，你可以克服它们。`,
            `今年的恋爱运需要持续努力。从${getFutureMonthShortZhCN(5)}开始，可以期待更积极的变化。`,
            `从${getFutureMonthShortZhCN(1)}开始，更加关注恋爱运。但要避免仓促行动。`,
            `今年的恋爱运重要的是耐心对待。从${getFutureMonthShortZhCN(6)}开始，可以期待更好的时期。`,
            `在${getFutureMonthShortZhCN(7)}，可能需要关于恋爱的谨慎。在这个时期，与伴侣的沟通很重要。`,
            `今年的恋爱运可以逐步改善。从${getFutureMonthShortZhCN(8)}开始，你可以建立更稳定的关系。`,
            `在${getFutureMonthShortZhCN(9)}，可能会有与恋爱相关的积极转折点。但要有现实的期望。`,
            `今年的恋爱运整体上是一个耐心和沟通都很重要的时期。从${getFutureMonthShortZhCN(10)}开始，可以期待更好的结果。`
          ];
        },
        get 'zh-TW'() {
          return [
            `從${getFutureMonthShortZhTW(3)}開始，戀愛運需要更多耐心。不要匆忙，慢慢前進是好的。`,
            `今年的戀愛運是需要耐心和努力的時期。從${getFutureMonthShortZhTW(4)}開始，情況可以逐步改善。`,
            `在${getFutureMonthShortZhTW(2)}，可能會有與戀愛相關的小困難。但通過溝通，你可以克服它們。`,
            `今年的戀愛運需要持續努力。從${getFutureMonthShortZhTW(5)}開始，可以期待更積極的變化。`,
            `從${getFutureMonthShortZhTW(1)}開始，更加關注戀愛運。但要避免倉促行動。`,
            `今年的戀愛運重要的是耐心對待。從${getFutureMonthShortZhTW(6)}開始，可以期待更好的時期。`,
            `在${getFutureMonthShortZhTW(7)}，可能需要關於戀愛的謹慎。在這個時期，與伴侶的溝通很重要。`,
            `今年的戀愛運可以逐步改善。從${getFutureMonthShortZhTW(8)}開始，你可以建立更穩定的關係。`,
            `在${getFutureMonthShortZhTW(9)}，可能會有與戀愛相關的積極轉折點。但要有現實的期望。`,
            `今年的戀愛運整體上是一個耐心和溝通都很重要的時期。從${getFutureMonthShortZhTW(10)}開始，可以期待更好的結果。`
          ];
        },
        get vi() {
          return [
            `Từ ${getFutureMonthShortVi(3)}, cần nhiều kiên nhẫn hơn trong vận tình yêu. Không nên vội vàng mà tiến lên chậm rãi là tốt.`,
            `Vận tình yêu năm nay là thời kỳ cần sự kiên nhẫn và nỗ lực. Từ ${getFutureMonthShortVi(4)}, mọi thứ có thể cải thiện dần dần.`,
            `Vào ${getFutureMonthShortVi(2)}, có thể có những khó khăn nhỏ liên quan đến tình yêu. Tuy nhiên, bạn có thể vượt qua chúng thông qua giao tiếp.`,
            `Vận tình yêu năm nay yêu cầu nỗ lực nhất quán. Từ ${getFutureMonthShortVi(5)}, bạn có thể mong đợi những thay đổi tích cực hơn.`,
            `Từ ${getFutureMonthShortVi(1)}, chú ý nhiều hơn đến vận tình yêu. Tuy nhiên, tránh hành động vội vàng.`,
            `Vận tình yêu năm nay, điều quan trọng là tiếp cận với sự kiên nhẫn. Từ ${getFutureMonthShortVi(6)}, bạn có thể mong đợi thời kỳ tốt hơn.`,
            `Vào ${getFutureMonthShortVi(7)}, có thể cần thận trọng về tình yêu. Trong thời kỳ này, giao tiếp với đối tác của bạn là quan trọng.`,
            `Vận tình yêu năm nay có thể cải thiện dần dần. Từ ${getFutureMonthShortVi(8)}, bạn có thể thiết lập các mối quan hệ ổn định hơn.`,
            `Vào ${getFutureMonthShortVi(9)}, có thể có bước ngoặt tích cực liên quan đến tình yêu. Tuy nhiên, hãy có kỳ vọng thực tế.`,
            `Vận tình yêu năm nay nói chung là thời kỳ mà sự kiên nhẫn và giao tiếp là quan trọng. Từ ${getFutureMonthShortVi(10)}, bạn có thể mong đợi kết quả tốt hơn.`
          ];
        },
        get id() {
          return [
            `Dari ${getFutureMonthShortId(3)}, lebih banyak kesabaran diperlukan dalam keberuntungan cinta. Baik untuk tidak terburu-buru dan melanjutkan perlahan.`,
            `Keberuntungan cinta tahun ini adalah periode yang memerlukan kesabaran dan upaya. Dari ${getFutureMonthShortId(4)}, hal-hal dapat membaik secara bertahap.`,
            `Pada ${getFutureMonthShortId(2)}, mungkin ada kesulitan kecil terkait cinta. Namun, Anda dapat mengatasinya melalui komunikasi.`,
            `Keberuntungan cinta tahun ini memerlukan upaya yang konsisten. Dari ${getFutureMonthShortId(5)}, Anda dapat mengharapkan perubahan yang lebih positif.`,
            `Dari ${getFutureMonthShortId(1)}, perhatikan lebih pada keberuntungan cinta. Namun, hindari bertindak tergesa-gesa.`,
            `Keberuntungan cinta tahun ini penting untuk didekati dengan kesabaran. Dari ${getFutureMonthShortId(6)}, Anda dapat mengharapkan waktu yang lebih baik.`,
            `Pada ${getFutureMonthShortId(7)}, kehati-hatian mungkin diperlukan terkait cinta. Selama periode ini, komunikasi dengan pasangan Anda adalah penting.`,
            `Keberuntungan cinta tahun ini dapat membaik secara bertahap. Dari ${getFutureMonthShortId(8)}, Anda dapat membangun hubungan yang lebih stabil.`,
            `Pada ${getFutureMonthShortId(9)}, mungkin ada titik balik positif terkait cinta. Namun, miliki ekspektasi yang realistis.`,
            `Keberuntungan cinta tahun ini secara keseluruhan adalah periode di mana kesabaran dan komunikasi adalah penting. Dari ${getFutureMonthShortId(10)}, Anda dapat mengharapkan hasil yang lebih baik.`
          ];
        }
      },
      business: {
        ko: [
          `${getFutureMonthShort(3)}부터 사업운에 더욱 신중한 접근이 필요한 시기입니다. 큰 결정은 천천히 내리는 것이 좋습니다.`,
          `올해 사업운은 신중한 계획과 실행이 필요합니다. ${getFutureMonthShort(4)}부터는 점진적으로 나아갈 수 있을 것입니다.`,
          `${getFutureMonthShort(2)}에 사업 관련 작은 어려움이 있을 수 있습니다. 하지만 인내심으로 극복할 수 있습니다.`,
          `올해 사업운은 꾸준한 노력이 필요합니다. ${getFutureMonthShort(5)}부터는 더 긍정적인 변화를 기대할 수 있습니다.`,
          `${getFutureMonthShort(1)}부터 사업 계획에 더욱 신경 쓰시기 바랍니다. 현실적인 목표 설정이 중요합니다.`,
          `올해 사업운은 인내심을 가지고 접근하는 것이 중요합니다. ${getFutureMonthShort(6)}부터는 더 나은 시기를 기대할 수 있습니다.`,
          `${getFutureMonthShort(7)}에 사업 관련 주의가 필요할 수 있습니다. 이 시기에는 무리한 확장을 피하는 것이 좋습니다.`,
          `올해 사업운은 점진적으로 개선될 수 있습니다. ${getFutureMonthShort(8)}부터는 더 안정적인 흐름을 기대할 수 있을 것입니다.`,
          `${getFutureMonthShort(9)}에 사업 관련 긍정적인 전환점이 있을 수 있습니다. 하지만 신중하게 판단하고 접근하시기 바랍니다.`,
          `올해 사업운은 전반적으로 신중한 접근과 인내가 필요한 시기입니다. ${getFutureMonthShort(10)}부터는 더 좋은 결과를 기대할 수 있습니다.`
        ],
        get en() {
          return [
            `From ${getFutureMonthShortEn(3)}, a more cautious approach to business fortune is needed. It is good to make important decisions slowly.`,
            `This year's business fortune requires careful planning and execution. From ${getFutureMonthShortEn(4)}, you can move forward gradually.`,
            `In ${getFutureMonthShortEn(2)}, there may be small difficulties related to business. However, you can overcome them with patience.`,
            `This year's business fortune requires consistent effort. From ${getFutureMonthShortEn(5)}, you can expect more positive changes.`,
            `From ${getFutureMonthShortEn(1)}, pay more attention to business planning. Setting realistic goals is important.`,
            `This year's business fortune is important to approach with patience. From ${getFutureMonthShortEn(6)}, you can expect better times.`,
            `In ${getFutureMonthShortEn(7)}, caution may be needed regarding business. During this period, it is good to avoid excessive expansion.`,
            `This year's business fortune can improve gradually. From ${getFutureMonthShortEn(8)}, you can expect a more stable flow.`,
            `In ${getFutureMonthShortEn(9)}, there may be a positive turning point related to business. However, make careful judgments and approach cautiously.`,
            `This year's business fortune is overall a period where cautious approach and patience are needed. From ${getFutureMonthShortEn(10)}, you can expect better results.`
          ];
        },
        get ja() {
          return [
            `${getFutureMonthShortJa(3)}から事業運により慎重なアプローチが必要な時期です。大きな決定はゆっくり下すことが良いでしょう。`,
            `今年の事業運は慎重な計画と実行が必要です。${getFutureMonthShortJa(4)}からは段階的に進むことができます。`,
            `${getFutureMonthShortJa(2)}に事業に関する小さな困難があるかもしれません。しかし、忍耐で克服できます。`,
            `今年の事業運は一貫した努力が必要です。${getFutureMonthShortJa(5)}からはより前向きな変化が期待できるでしょう。`,
            `${getFutureMonthShortJa(1)}から事業計画により神経を使うことをお勧めします。現実的な目標設定が重要です。`,
            `今年の事業運は忍耐を持ってアプローチすることが重要です。${getFutureMonthShortJa(6)}からはより良い時期が期待できるでしょう。`,
            `${getFutureMonthShortJa(7)}に事業に関する注意が必要かもしれません。この時期には無理な拡張を避けることが良いでしょう。`,
            `今年の事業運は段階的に改善可能です。${getFutureMonthShortJa(8)}からはより安定した流れが期待できるでしょう。`,
            `${getFutureMonthShortJa(9)}に事業に関する前向きな転換点があるかもしれません。しかし、慎重に判断し慎重にアプローチすることをお勧めします。`,
            `今年の事業運は全体的に慎重なアプローチと忍耐が必要な時期です。${getFutureMonthShortJa(10)}からはより良い結果が期待できるでしょう。`
          ];
        },
        get 'zh-CN'() {
          return [
            `从${getFutureMonthShortZhCN(3)}开始，需要更谨慎地对待事业运。慢慢做重要决定是好的。`,
            `今年的事业运需要谨慎的计划和执行。从${getFutureMonthShortZhCN(4)}开始，你可以逐步前进。`,
            `在${getFutureMonthShortZhCN(2)}，可能会有与商业相关的小困难。但通过耐心，你可以克服它们。`,
            `今年的事业运需要持续努力。从${getFutureMonthShortZhCN(5)}开始，可以期待更积极的变化。`,
            `从${getFutureMonthShortZhCN(1)}开始，更加关注商业计划。设定现实目标很重要。`,
            `今年的事业运重要的是耐心对待。从${getFutureMonthShortZhCN(6)}开始，可以期待更好的时期。`,
            `在${getFutureMonthShortZhCN(7)}，可能需要关于商业的谨慎。在这个时期，避免过度扩张是好的。`,
            `今年的事业运可以逐步改善。从${getFutureMonthShortZhCN(8)}开始，可以期待更稳定的流动。`,
            `在${getFutureMonthShortZhCN(9)}，可能会有与商业相关的积极转折点。但要仔细判断并谨慎对待。`,
            `今年的事业运整体上是一个需要谨慎方法和耐心的时期。从${getFutureMonthShortZhCN(10)}开始，可以期待更好的结果。`
          ];
        },
        get 'zh-TW'() {
          return [
            `從${getFutureMonthShortZhTW(3)}開始，需要更謹慎地對待事業運。慢慢做重要決定是好的。`,
            `今年的事業運需要謹慎的計畫和執行。從${getFutureMonthShortZhTW(4)}開始，你可以逐步前進。`,
            `在${getFutureMonthShortZhTW(2)}，可能會有與商業相關的小困難。但通過耐心，你可以克服它們。`,
            `今年的事業運需要持續努力。從${getFutureMonthShortZhTW(5)}開始，可以期待更積極的變化。`,
            `從${getFutureMonthShortZhTW(1)}開始，更加關注商業計畫。設定現實目標很重要。`,
            `今年的事業運重要的是耐心對待。從${getFutureMonthShortZhTW(6)}開始，可以期待更好的時期。`,
            `在${getFutureMonthShortZhTW(7)}，可能需要關於商業的謹慎。在這個時期，避免過度擴張是好的。`,
            `今年的事業運可以逐步改善。從${getFutureMonthShortZhTW(8)}開始，可以期待更穩定的流動。`,
            `在${getFutureMonthShortZhTW(9)}，可能會有與商業相關的積極轉折點。但要仔細判斷並謹慎對待。`,
            `今年的事業運整體上是一個需要謹慎方法和耐心的時期。從${getFutureMonthShortZhTW(10)}開始，可以期待更好的結果。`
          ];
        },
        get vi() {
          return [
            `Từ ${getFutureMonthShortVi(3)}, cần tiếp cận thận trọng hơn với vận kinh doanh. Nên đưa ra quyết định quan trọng một cách chậm rãi.`,
            `Vận kinh doanh năm nay yêu cầu kế hoạch và thực hiện cẩn thận. Từ ${getFutureMonthShortVi(4)}, bạn có thể tiến lên dần dần.`,
            `Vào ${getFutureMonthShortVi(2)}, có thể có những khó khăn nhỏ liên quan đến kinh doanh. Tuy nhiên, bạn có thể vượt qua chúng bằng sự kiên nhẫn.`,
            `Vận kinh doanh năm nay yêu cầu nỗ lực nhất quán. Từ ${getFutureMonthShortVi(5)}, bạn có thể mong đợi những thay đổi tích cực hơn.`,
            `Từ ${getFutureMonthShortVi(1)}, chú ý nhiều hơn đến kế hoạch kinh doanh. Việc thiết lập mục tiêu thực tế là quan trọng.`,
            `Vận kinh doanh năm nay, điều quan trọng là tiếp cận với sự kiên nhẫn. Từ ${getFutureMonthShortVi(6)}, bạn có thể mong đợi thời kỳ tốt hơn.`,
            `Vào ${getFutureMonthShortVi(7)}, có thể cần thận trọng về kinh doanh. Trong thời kỳ này, nên tránh mở rộng quá mức.`,
            `Vận kinh doanh năm nay có thể cải thiện dần dần. Từ ${getFutureMonthShortVi(8)}, bạn có thể mong đợi một dòng chảy ổn định hơn.`,
            `Vào ${getFutureMonthShortVi(9)}, có thể có bước ngoặt tích cực liên quan đến kinh doanh. Tuy nhiên, hãy đưa ra phán đoán cẩn thận và tiếp cận một cách thận trọng.`,
            `Vận kinh doanh năm nay nói chung là thời kỳ mà cách tiếp cận thận trọng và sự kiên nhẫn là cần thiết. Từ ${getFutureMonthShortVi(10)}, bạn có thể mong đợi kết quả tốt hơn.`
          ];
        },
        get id() {
          return [
            `Dari ${getFutureMonthShortId(3)}, pendekatan yang lebih hati-hati terhadap keberuntungan bisnis diperlukan. Baik untuk membuat keputusan penting perlahan-lahan.`,
            `Keberuntungan bisnis tahun ini memerlukan perencanaan dan eksekusi yang hati-hati. Dari ${getFutureMonthShortId(4)}, Anda dapat maju secara bertahap.`,
            `Pada ${getFutureMonthShortId(2)}, mungkin ada kesulitan kecil terkait bisnis. Namun, Anda dapat mengatasinya dengan kesabaran.`,
            `Keberuntungan bisnis tahun ini memerlukan upaya yang konsisten. Dari ${getFutureMonthShortId(5)}, Anda dapat mengharapkan perubahan yang lebih positif.`,
            `Dari ${getFutureMonthShortId(1)}, perhatikan lebih pada perencanaan bisnis. Menetapkan tujuan yang realistis adalah penting.`,
            `Keberuntungan bisnis tahun ini penting untuk didekati dengan kesabaran. Dari ${getFutureMonthShortId(6)}, Anda dapat mengharapkan waktu yang lebih baik.`,
            `Pada ${getFutureMonthShortId(7)}, kehati-hatian mungkin diperlukan terkait bisnis. Selama periode ini, baik untuk menghindari ekspansi berlebihan.`,
            `Keberuntungan bisnis tahun ini dapat membaik secara bertahap. Dari ${getFutureMonthShortId(8)}, Anda dapat mengharapkan aliran yang lebih stabil.`,
            `Pada ${getFutureMonthShortId(9)}, mungkin ada titik balik positif terkait bisnis. Namun, buat penilaian yang hati-hati dan pendekatan dengan hati-hati.`,
            `Keberuntungan bisnis tahun ini secara keseluruhan adalah periode di mana pendekatan hati-hati dan kesabaran diperlukan. Dari ${getFutureMonthShortId(10)}, Anda dapat mengharapkan hasil yang lebih baik.`
          ];
        }
      },
      study: {
        ko: [
          `${getFutureMonthShort(2)}부터 학업에 더욱 집중이 필요한 시기입니다. 꾸준한 노력과 인내심이 중요합니다.`,
          `올해 학업운은 인내와 노력이 필요한 시기입니다. ${getFutureMonthShort(3)}부터는 조금씩 개선될 수 있을 것입니다.`,
          `${getFutureMonthShort(4)}에 학업 관련 작은 어려움이 있을 수 있습니다. 하지만 꾸준한 학습으로 극복할 수 있습니다.`,
          `올해 학업운은 꾸준한 노력이 필요합니다. ${getFutureMonthShort(5)}부터는 더 긍정적인 변화를 기대할 수 있습니다.`,
          `${getFutureMonthShort(1)}부터 학습 계획에 더욱 신경 쓰시기 바랍니다. 현실적인 목표 설정이 중요합니다.`,
          `올해 학업운은 인내심을 가지고 접근하는 것이 중요합니다. ${getFutureMonthShort(6)}부터는 더 나은 시기를 기대할 수 있습니다.`,
          `${getFutureMonthShort(7)}에 학업 관련 주의가 필요할 수 있습니다. 이 시기에는 준비를 더 철저히 하는 것이 좋습니다.`,
          `올해 학업운은 점진적으로 개선될 수 있습니다. ${getFutureMonthShort(8)}부터는 더 안정적인 성과를 기대할 수 있을 것입니다.`,
          `${getFutureMonthShort(9)}에 학업 관련 긍정적인 전환점이 있을 수 있습니다. 하지만 방심하지 말고 계속 노력하시기 바랍니다.`,
          `올해 학업운은 전반적으로 인내와 꾸준함이 중요한 시기입니다. ${getFutureMonthShort(10)}부터는 더 좋은 결과를 기대할 수 있습니다.`
        ],
        get en() {
          return [
            `From ${getFutureMonthShortEn(2)}, more focus on studies is needed. Steady effort and patience are important.`,
            `This year's study fortune is a period requiring patience and effort. From ${getFutureMonthShortEn(3)}, things can improve gradually.`,
            `In ${getFutureMonthShortEn(4)}, there may be small difficulties related to studies. However, you can overcome them with consistent learning.`,
            `This year's study fortune requires consistent effort. From ${getFutureMonthShortEn(5)}, you can expect more positive changes.`,
            `From ${getFutureMonthShortEn(1)}, pay more attention to study planning. Setting realistic goals is important.`,
            `This year's study fortune is important to approach with patience. From ${getFutureMonthShortEn(6)}, you can expect better times.`,
            `In ${getFutureMonthShortEn(7)}, caution may be needed regarding studies. During this period, it is good to prepare more thoroughly.`,
            `This year's study fortune can improve gradually. From ${getFutureMonthShortEn(8)}, you can expect more stable achievements.`,
            `In ${getFutureMonthShortEn(9)}, there may be a positive turning point related to studies. However, do not let your guard down and keep working.`,
            `This year's study fortune is overall a period where patience and consistency are important. From ${getFutureMonthShortEn(10)}, you can expect better results.`
          ];
        },
        get ja() {
          return [
            `${getFutureMonthShortJa(2)}から学業により多くの集中が必要な時期です。着実な努力と忍耐が重要です。`,
            `今年の学業運は忍耐と努力が必要な時期です。${getFutureMonthShortJa(3)}からは少しずつ改善する可能性があります。`,
            `${getFutureMonthShortJa(4)}に学業に関する小さな困難があるかもしれません。しかし、継続的な学習で克服できます。`,
            `今年の学業運は一貫した努力が必要です。${getFutureMonthShortJa(5)}からはより前向きな変化が期待できるでしょう。`,
            `${getFutureMonthShortJa(1)}から学習計画により神経を使うことをお勧めします。現実的な目標設定が重要です。`,
            `今年の学業運は忍耐を持ってアプローチすることが重要です。${getFutureMonthShortJa(6)}からはより良い時期が期待できるでしょう。`,
            `${getFutureMonthShortJa(7)}に学業に関する注意が必要かもしれません。この時期には準備をより徹底することが良いでしょう。`,
            `今年の学業運は段階的に改善可能です。${getFutureMonthShortJa(8)}からはより安定した成果が期待できるでしょう。`,
            `${getFutureMonthShortJa(9)}に学業に関する前向きな転換点があるかもしれません。しかし、油断せずに継続して努力することをお勧めします。`,
            `今年の学業運は全体的に忍耐と一貫性が重要な時期です。${getFutureMonthShortJa(10)}からはより良い結果が期待できるでしょう。`
          ];
        },
        get 'zh-CN'() {
          return [
            `从${getFutureMonthShortZhCN(2)}开始，需要更多关注学习。持续努力和耐心很重要。`,
            `今年的学业运是需要耐心和努力的时期。从${getFutureMonthShortZhCN(3)}开始，情况可以逐步改善。`,
            `在${getFutureMonthShortZhCN(4)}，可能会有与学习相关的小困难。但通过持续学习，你可以克服它们。`,
            `今年的学业运需要持续努力。从${getFutureMonthShortZhCN(5)}开始，可以期待更积极的变化。`,
            `从${getFutureMonthShortZhCN(1)}开始，更加关注学习计划。设定现实目标很重要。`,
            `今年的学业运重要的是耐心对待。从${getFutureMonthShortZhCN(6)}开始，可以期待更好的时期。`,
            `在${getFutureMonthShortZhCN(7)}，可能需要关于学习的谨慎。在这个时期，更彻底地准备是好的。`,
            `今年的学业运可以逐步改善。从${getFutureMonthShortZhCN(8)}开始，可以期待更稳定的成就。`,
            `在${getFutureMonthShortZhCN(9)}，可能会有与学习相关的积极转折点。但不要松懈，要继续努力。`,
            `今年的学业运整体上是一个耐心和一致性都很重要的时期。从${getFutureMonthShortZhCN(10)}开始，可以期待更好的结果。`
          ];
        },
        get 'zh-TW'() {
          return [
            `從${getFutureMonthShortZhTW(2)}開始，需要更多關注學習。持續努力和耐心很重要。`,
            `今年的學業運是需要耐心和努力的時期。從${getFutureMonthShortZhTW(3)}開始，情況可以逐步改善。`,
            `在${getFutureMonthShortZhTW(4)}，可能會有與學習相關的小困難。但通過持續學習，你可以克服它們。`,
            `今年的學業運需要持續努力。從${getFutureMonthShortZhTW(5)}開始，可以期待更積極的變化。`,
            `從${getFutureMonthShortZhTW(1)}開始，更加關注學習計畫。設定現實目標很重要。`,
            `今年的學業運重要的是耐心對待。從${getFutureMonthShortZhTW(6)}開始，可以期待更好的時期。`,
            `在${getFutureMonthShortZhTW(7)}，可能需要關於學習的謹慎。在這個時期，更徹底地準備是好的。`,
            `今年的學業運可以逐步改善。從${getFutureMonthShortZhTW(8)}開始，可以期待更穩定的成就。`,
            `在${getFutureMonthShortZhTW(9)}，可能會有與學習相關的積極轉折點。但不要鬆懈，要繼續努力。`,
            `今年的學業運整體上是一個耐心和一致性都很重要的時期。從${getFutureMonthShortZhTW(10)}開始，可以期待更好的結果。`
          ];
        },
        get vi() {
          return [
            `Từ ${getFutureMonthShortVi(2)}, cần tập trung nhiều hơn vào học tập. Nỗ lực ổn định và sự kiên nhẫn là quan trọng.`,
            `Vận học tập năm nay là thời kỳ cần sự kiên nhẫn và nỗ lực. Từ ${getFutureMonthShortVi(3)}, mọi thứ có thể cải thiện dần dần.`,
            `Vào ${getFutureMonthShortVi(4)}, có thể có những khó khăn nhỏ liên quan đến học tập. Tuy nhiên, bạn có thể vượt qua chúng bằng cách học tập nhất quán.`,
            `Vận học tập năm nay yêu cầu nỗ lực nhất quán. Từ ${getFutureMonthShortVi(5)}, bạn có thể mong đợi những thay đổi tích cực hơn.`,
            `Từ ${getFutureMonthShortVi(1)}, chú ý nhiều hơn đến kế hoạch học tập. Việc thiết lập mục tiêu thực tế là quan trọng.`,
            `Vận học tập năm nay, điều quan trọng là tiếp cận với sự kiên nhẫn. Từ ${getFutureMonthShortVi(6)}, bạn có thể mong đợi thời kỳ tốt hơn.`,
            `Vào ${getFutureMonthShortVi(7)}, có thể cần thận trọng về học tập. Trong thời kỳ này, nên chuẩn bị kỹ lưỡng hơn.`,
            `Vận học tập năm nay có thể cải thiện dần dần. Từ ${getFutureMonthShortVi(8)}, bạn có thể mong đợi thành tựu ổn định hơn.`,
            `Vào ${getFutureMonthShortVi(9)}, có thể có bước ngoặt tích cực liên quan đến học tập. Tuy nhiên, đừng để mất cảnh giác và hãy tiếp tục làm việc.`,
            `Vận học tập năm nay nói chung là thời kỳ mà sự kiên nhẫn và tính nhất quán là quan trọng. Từ ${getFutureMonthShortVi(10)}, bạn có thể mong đợi kết quả tốt hơn.`
          ];
        },
        get id() {
          return [
            `Dari ${getFutureMonthShortId(2)}, lebih fokus pada studi diperlukan. Upaya stabil dan kesabaran adalah penting.`,
            `Keberuntungan studi tahun ini adalah periode yang memerlukan kesabaran dan upaya. Dari ${getFutureMonthShortId(3)}, hal-hal dapat membaik secara bertahap.`,
            `Pada ${getFutureMonthShortId(4)}, mungkin ada kesulitan kecil terkait studi. Namun, Anda dapat mengatasinya dengan pembelajaran yang konsisten.`,
            `Keberuntungan studi tahun ini memerlukan upaya yang konsisten. Dari ${getFutureMonthShortId(5)}, Anda dapat mengharapkan perubahan yang lebih positif.`,
            `Dari ${getFutureMonthShortId(1)}, perhatikan lebih pada perencanaan studi. Menetapkan tujuan yang realistis adalah penting.`,
            `Keberuntungan studi tahun ini penting untuk didekati dengan kesabaran. Dari ${getFutureMonthShortId(6)}, Anda dapat mengharapkan waktu yang lebih baik.`,
            `Pada ${getFutureMonthShortId(7)}, kehati-hatian mungkin diperlukan terkait studi. Selama periode ini, baik untuk mempersiapkan lebih teliti.`,
            `Keberuntungan studi tahun ini dapat membaik secara bertahap. Dari ${getFutureMonthShortId(8)}, Anda dapat mengharapkan pencapaian yang lebih stabil.`,
            `Pada ${getFutureMonthShortId(9)}, mungkin ada titik balik positif terkait studi. Namun, jangan lengah dan teruslah bekerja.`,
            `Keberuntungan studi tahun ini secara keseluruhan adalah periode di mana kesabaran dan konsistensi adalah penting. Dari ${getFutureMonthShortId(10)}, Anda dapat mengharapkan hasil yang lebih baik.`
          ];
        }
      },
      goodTime: {
        ko: [
          `${getFutureMonthShort(3)}부터는 인내의 시기가 시작됩니다. 천천히 준비하고 기다리시기 바랍니다.`,
          `${getFutureMonthShort(5)}부터 ${getFutureMonthShort(7)}까지는 회복과 준비의 시기입니다. 이 기간을 잘 활용하시기 바랍니다.`,
          `${getFutureMonthShort(8)}부터는 전반적으로 운세가 개선될 가능성이 있습니다. 이 시기를 준비하는 것이 중요합니다.`,
          `${getFutureMonthShort(4)}에 특히 인내심을 기르는 좋은 시기가 됩니다. 이 시기에는 자기계발에 집중하세요.`,
          `${getFutureMonthShort(6)}은 전환점이 될 수 있는 시기입니다. 어려움을 극복하면 더 큰 발전이 가능합니다.`,
          `${getFutureMonthShort(2)}부터 ${getFutureMonthShort(4)}까지는 준비와 기다림의 시기입니다. 하지만 ${getFutureMonthShort(5)}부터는 나아질 것입니다.`,
          `${getFutureMonthShort(9)}과 ${getFutureMonthShort(10)}은 인내와 노력으로 작은 성과를 거둘 수 있는 시기입니다.`,
          `전체적으로 올해는 인내와 회복의 시기입니다. 특히 ${getFutureMonthShort(5)}, ${getFutureMonthShort(8)}는 더욱 중요한 시기입니다.`,
          `${getFutureMonthShort(11)}에 전반적으로 운세가 개선될 가능성이 있습니다. 이 시기에는 긍정적인 변화를 기대할 수 있습니다.`,
          `올해는 어려움이 있지만 극복 가능한 해입니다. 특히 ${getFutureMonthShort(6)}, ${getFutureMonthShort(9)}는 더욱 중요한 시기입니다.`
        ],
        get en() {
          return [
            `From ${getFutureMonthShortEn(3)}, a period of patience will begin. Prepare slowly and wait patiently.`,
            `From ${getFutureMonthShortEn(5)} to ${getFutureMonthShortEn(7)} is a period of recovery and preparation. Make good use of this period.`,
            `From ${getFutureMonthShortEn(8)}, there is a possibility that overall fortune will improve. It is important to prepare for this period.`,
            `In ${getFutureMonthShortEn(4)}, it becomes an especially good time to cultivate patience. During this period, focus on self-development.`,
            `${getFutureMonthShortEn(6)} is a period that can be a turning point. If you overcome difficulties, greater development is possible.`,
            `From ${getFutureMonthShortEn(2)} to ${getFutureMonthShortEn(4)} is a period of preparation and waiting. However, from ${getFutureMonthShortEn(5)}, things will improve.`,
            `${getFutureMonthShortEn(9)} and ${getFutureMonthShortEn(10)} are periods when you can achieve small results with patience and effort.`,
            `Overall, this year is a period of patience and recovery. Especially ${getFutureMonthShortEn(5)} and ${getFutureMonthShortEn(8)} are even more important periods.`,
            `In ${getFutureMonthShortEn(11)}, there is a possibility that overall fortune will improve. During this period, you can expect positive changes.`,
            `This year is difficult but overcomeable. Especially ${getFutureMonthShortEn(6)} and ${getFutureMonthShortEn(9)} are even more important periods.`
          ];
        },
        get ja() {
          return [
            `${getFutureMonthShortJa(3)}から忍耐の時期が始まります。ゆっくり準備して待つことをお勧めします。`,
            `${getFutureMonthShortJa(5)}から${getFutureMonthShortJa(7)}まで回復と準備の時期です。この期間をよく活用することをお勧めします。`,
            `${getFutureMonthShortJa(8)}からは全体的に運勢が改善する可能性があります。この時期を準備することが重要です。`,
            `${getFutureMonthShortJa(4)}に特に忍耐を育てる良い時期になります。この時期には自己啓発に集中してください。`,
            `${getFutureMonthShortJa(6)}は転換点になることができる時期です。困難を克服すればより大きな発展が可能です。`,
            `${getFutureMonthShortJa(2)}から${getFutureMonthShortJa(4)}まで準備と待機の時期です。しかし${getFutureMonthShortJa(5)}からは良くなるでしょう。`,
            `${getFutureMonthShortJa(9)}と${getFutureMonthShortJa(10)}は忍耐と努力で小さな成果を収めることができる時期です。`,
            `全体的に今年は忍耐と回復の時期です。特に${getFutureMonthShortJa(5)}と${getFutureMonthShortJa(8)}はさらに重要な時期です。`,
            `${getFutureMonthShortJa(11)}に全体的に運勢が改善する可能性があります。この時期には前向きな変化が期待できるでしょう。`,
            `今年は困難だが克服可能な年です。特に${getFutureMonthShortJa(6)}と${getFutureMonthShortJa(9)}はさらに重要な時期です。`
          ];
        },
        get 'zh-CN'() {
          return [
            `从${getFutureMonthShortZhCN(3)}开始，耐心时期将开始。慢慢准备，耐心等待。`,
            `从${getFutureMonthShortZhCN(5)}到${getFutureMonthShortZhCN(7)}是恢复和准备的时期。好好利用这个时期。`,
            `从${getFutureMonthShortZhCN(8)}开始，整体运势有改善的可能性。准备这个时期很重要。`,
            `${getFutureMonthShortZhCN(4)}是培养耐心的好时机。在这个时期，专注于自我发展。`,
            `${getFutureMonthShortZhCN(6)}是可以成为转折点的时期。如果你克服困难，更大的发展是可能的。`,
            `从${getFutureMonthShortZhCN(2)}到${getFutureMonthShortZhCN(4)}是准备和等待的时期。但从${getFutureMonthShortZhCN(5)}开始，情况会改善。`,
            `${getFutureMonthShortZhCN(9)}和${getFutureMonthShortZhCN(10)}是通过耐心和努力可以取得小成果的时期。`,
            `整体而言，今年是耐心和恢复的时期。特别是${getFutureMonthShortZhCN(5)}和${getFutureMonthShortZhCN(8)}是更重要的时期。`,
            `${getFutureMonthShortZhCN(11)}整体运势有改善的可能性。在这个时期，你可以期待积极的变化。`,
            `今年是困难但可克服的。特别是${getFutureMonthShortZhCN(6)}和${getFutureMonthShortZhCN(9)}是更重要的时期。`
          ];
        },
        get 'zh-TW'() {
          return [
            `從${getFutureMonthShortZhTW(3)}開始，耐心時期將開始。慢慢準備，耐心等待。`,
            `從${getFutureMonthShortZhTW(5)}到${getFutureMonthShortZhTW(7)}是恢復和準備的時期。好好利用這個時期。`,
            `從${getFutureMonthShortZhTW(8)}開始，整體運勢有改善的可能性。準備這個時期很重要。`,
            `${getFutureMonthShortZhTW(4)}是培養耐心的好時機。在這個時期，專注於自我發展。`,
            `${getFutureMonthShortZhTW(6)}是可以成為轉折點的時期。如果你克服困難，更大的發展是可能的。`,
            `從${getFutureMonthShortZhTW(2)}到${getFutureMonthShortZhTW(4)}是準備和等待的時期。但從${getFutureMonthShortZhTW(5)}開始，情況會改善。`,
            `${getFutureMonthShortZhTW(9)}和${getFutureMonthShortZhTW(10)}是通過耐心和努力可以取得小成果的時期。`,
            `整體而言，今年是耐心和恢復的時期。特別是${getFutureMonthShortZhTW(5)}和${getFutureMonthShortZhTW(8)}是更重要的時期。`,
            `${getFutureMonthShortZhTW(11)}整體運勢有改善的可能性。在這個時期，你可以期待積極的變化。`,
            `今年是困難但可克服的。特別是${getFutureMonthShortZhTW(6)}和${getFutureMonthShortZhTW(9)}是更重要的時期。`
          ];
        },
        get vi() {
          return [
            `Từ ${getFutureMonthShortVi(3)}, thời kỳ kiên nhẫn sẽ bắt đầu. Chuẩn bị chậm rãi và chờ đợi một cách kiên nhẫn.`,
            `Từ ${getFutureMonthShortVi(5)} đến ${getFutureMonthShortVi(7)} là thời kỳ phục hồi và chuẩn bị. Hãy tận dụng tốt thời kỳ này.`,
            `Từ ${getFutureMonthShortVi(8)}, có khả năng vận may tổng thể sẽ cải thiện. Việc chuẩn bị cho thời kỳ này là quan trọng.`,
            `Vào ${getFutureMonthShortVi(4)}, nó trở thành thời điểm đặc biệt tốt để nuôi dưỡng kiên nhẫn. Trong thời kỳ này, hãy tập trung vào phát triển bản thân.`,
            `${getFutureMonthShortVi(6)} là thời kỳ có thể trở thành điểm ngoặt. Nếu bạn vượt qua khó khăn, phát triển lớn hơn là có thể.`,
            `Từ ${getFutureMonthShortVi(2)} đến ${getFutureMonthShortVi(4)} là thời kỳ chuẩn bị và chờ đợi. Tuy nhiên, từ ${getFutureMonthShortVi(5)}, mọi thứ sẽ cải thiện.`,
            `${getFutureMonthShortVi(9)} và ${getFutureMonthShortVi(10)} là những thời kỳ bạn có thể đạt được kết quả nhỏ với kiên nhẫn và nỗ lực.`,
            `Nhìn chung, năm nay là thời kỳ kiên nhẫn và phục hồi. Đặc biệt ${getFutureMonthShortVi(5)} và ${getFutureMonthShortVi(8)} là những thời kỳ còn quan trọng hơn.`,
            `Vào ${getFutureMonthShortVi(11)}, có khả năng vận may tổng thể sẽ cải thiện. Trong thời kỳ này, bạn có thể mong đợi những thay đổi tích cực.`,
            `Năm nay khó khăn nhưng có thể vượt qua. Đặc biệt ${getFutureMonthShortVi(6)} và ${getFutureMonthShortVi(9)} là những thời kỳ còn quan trọng hơn.`
          ];
        },
        get id() {
          return [
            `Dari ${getFutureMonthShortId(3)}, periode kesabaran akan dimulai. Bersiaplah perlahan dan tunggu dengan sabar.`,
            `Dari ${getFutureMonthShortId(5)} hingga ${getFutureMonthShortId(7)} adalah periode pemulihan dan persiapan. Manfaatkan periode ini dengan baik.`,
            `Dari ${getFutureMonthShortId(8)}, ada kemungkinan keberuntungan keseluruhan akan membaik. Penting untuk mempersiapkan periode ini.`,
            `Pada ${getFutureMonthShortId(4)}, ini menjadi waktu yang sangat baik untuk mengembangkan kesabaran. Selama periode ini, fokus pada pengembangan diri.`,
            `${getFutureMonthShortId(6)} adalah periode yang dapat menjadi titik balik. Jika Anda mengatasi kesulitan, perkembangan yang lebih besar dimungkinkan.`,
            `Dari ${getFutureMonthShortId(2)} hingga ${getFutureMonthShortId(4)} adalah periode persiapan dan menunggu. Namun, dari ${getFutureMonthShortId(5)}, hal-hal akan membaik.`,
            `${getFutureMonthShortId(9)} dan ${getFutureMonthShortId(10)} adalah periode ketika Anda dapat mencapai hasil kecil dengan kesabaran dan upaya.`,
            `Secara keseluruhan, tahun ini adalah periode kesabaran dan pemulihan. Terutama ${getFutureMonthShortId(5)} dan ${getFutureMonthShortId(8)} adalah periode yang bahkan lebih penting.`,
            `Pada ${getFutureMonthShortId(11)}, ada kemungkinan keberuntungan keseluruhan akan membaik. Selama periode ini, Anda dapat mengharapkan perubahan positif.`,
            `Tahun ini sulit tapi bisa diatasi. Terutama ${getFutureMonthShortId(6)} dan ${getFutureMonthShortId(9)} adalah periode yang bahkan lebih penting.`
          ];
        }
      },
      warning: {
        ko: [
          `${getFutureMonthShort(1)}에는 매우 신중해야 할 시기입니다. 중요한 결정은 천천히 신중하게 내리는 것이 좋습니다.`,
          `${getFutureMonthShort(7)}에는 감정 기복이나 스트레스가 클 수 있습니다. 이 시기에는 무리하지 말고 충분히 휴식하세요.`,
          `${getFutureMonthShort(11)}에는 재물 관련 매우 주의가 필요합니다. 큰 지출이나 투자는 절대 삼가야 합니다.`,
          `${getFutureMonthShort(6)}에는 건강 관리에 최대한 주의를 기울여야 할 시기입니다. 작은 증상이라도 즉시 대응하세요.`,
          `${getFutureMonthShort(9)}에는 인간관계에서 매우 주의해야 할 시기가 있을 수 있습니다. 이 시기에는 소통을 더욱 신경 쓰세요.`,
          `${getFutureMonthShort(2)}에는 사업이나 업무 관련 매우 신중한 접근이 필요합니다. 이 시기에는 성급한 결정을 피하세요.`,
          `${getFutureMonthShort(10)}에는 전반적으로 속도를 최대한 조절해야 할 시기입니다. 무리한 행동은 절대 피해야 합니다.`,
          `${getFutureMonthShort(8)}에는 학업이나 시험 관련 매우 주의가 필요할 수 있습니다. 이 시기에는 준비를 더욱 철저히 하세요.`,
          `${getFutureMonthShort(12)}에는 감정적 스트레스나 피로가 클 수 있습니다. 이 시기에는 반드시 휴식과 회복에 집중하세요.`,
          `전체적으로 올해는 조금 어려운 운세이므로, 항상 신중하게 행동하는 것이 중요합니다. 특히 ${getFutureMonthShort(3)}, ${getFutureMonthShort(8)}, ${getFutureMonthShort(11)}에는 더욱 주의가 필요합니다.`
        ],
        get en() {
          return [
            `In ${getFutureMonthShortEn(1)}, it is a period that requires great caution. It is good to make important decisions slowly and carefully.`,
            `In ${getFutureMonthShortEn(7)}, there may be large emotional ups and downs or stress. During this period, do not overdo it and rest sufficiently.`,
            `In ${getFutureMonthShortEn(11)}, very high caution is needed regarding wealth. You must absolutely avoid large expenses or investments.`,
            `In ${getFutureMonthShortEn(6)}, it is a period when you need to pay maximum attention to health management. Respond immediately even to small symptoms.`,
            `In ${getFutureMonthShortEn(9)}, there may be a period when you need to be very cautious in relationships. During this period, pay even more attention to communication.`,
            `In ${getFutureMonthShortEn(2)}, a very cautious approach is needed regarding business or work. During this period, avoid hasty decisions.`,
            `In ${getFutureMonthShortEn(10)}, it is a period when you need to control your speed to the maximum overall. You must absolutely avoid excessive actions.`,
            `In ${getFutureMonthShortEn(8)}, very high caution may be needed regarding studies or exams. During this period, prepare even more thoroughly.`,
            `In ${getFutureMonthShortEn(12)}, there may be large emotional stress or fatigue. During this period, you must focus on rest and recovery.`,
            `Overall, this year has slightly difficult fortune, so it is important to always act carefully. Especially in ${getFutureMonthShortEn(3)}, ${getFutureMonthShortEn(8)}, and ${getFutureMonthShortEn(11)}, even more caution is needed.`
          ];
        },
        get ja() {
          return [
            `${getFutureMonthShortJa(1)}には非常に慎重である必要がある時期です。重要な決定はゆっくり慎重に下すことが良いでしょう。`,
            `${getFutureMonthShortJa(7)}には大きな感情の波やストレスがあるかもしれません。この時期には無理をせず十分に休息してください。`,
            `${getFutureMonthShortJa(11)}には財運に関する非常に高い注意が必要です。大きな支出や投資は絶対に避けなければなりません。`,
            `${getFutureMonthShortJa(6)}には健康管理に最大限の注意を払う必要がある時期です。小さな症状でもすぐに対応してください。`,
            `${getFutureMonthShortJa(9)}には人間関係で非常に注意が必要な時期があるかもしれません。この時期にはコミュニケーションにより神経を使ってください。`,
            `${getFutureMonthShortJa(2)}には事業や業務に関する非常に慎重なアプローチが必要です。この時期には性急な決定を避けてください。`,
            `${getFutureMonthShortJa(10)}には全体的に速度を最大限調整する必要がある時期です。無理な行動は絶対に避けなければなりません。`,
            `${getFutureMonthShortJa(8)}には学業や試験に関する非常に高い注意が必要かもしれません。この時期には準備をさらに徹底してください。`,
            `${getFutureMonthShortJa(12)}には大きな感情的ストレスや疲労があるかもしれません。この時期には必ず休息と回復に集中してください。`,
            `全体的に今年は少し困難な運勢なので、常に慎重に行動することが重要です。特に${getFutureMonthShortJa(3)}と${getFutureMonthShortJa(8)}と${getFutureMonthShortJa(11)}にはさらに注意が必要です。`
          ];
        },
        get 'zh-CN'() {
          return [
            `在${getFutureMonthShortZhCN(1)}，这是一个需要非常谨慎的时期。慢慢仔细地做重要决定是好的。`,
            `在${getFutureMonthShortZhCN(7)}，可能会有大的情绪波动或压力。在这个时期，不要过度劳累，要充分休息。`,
            `在${getFutureMonthShortZhCN(11)}，需要关于财富的非常高的谨慎。必须绝对避免大额支出或投资。`,
            `在${getFutureMonthShortZhCN(6)}，这是一个需要最大关注健康管理的时期。即使是很小的症状也要立即应对。`,
            `在${getFutureMonthShortZhCN(9)}，可能需要在人际关系中非常谨慎的时期。在这个时期，要更加注意沟通。`,
            `在${getFutureMonthShortZhCN(2)}，需要关于商业或工作的非常谨慎的方法。在这个时期，避免仓促决定。`,
            `在${getFutureMonthShortZhCN(10)}，这是一个需要最大程度控制速度的时期。必须绝对避免过度的行动。`,
            `在${getFutureMonthShortZhCN(8)}，可能需要注意学习或考试的非常高的谨慎。在这个时期，要更彻底地准备。`,
            `在${getFutureMonthShortZhCN(12)}，可能会有大的情绪压力或疲劳。在这个时期，必须专注于休息和恢复。`,
            `整体而言，今年有稍有困难的运势，所以始终谨慎行动是重要的。特别是在${getFutureMonthShortZhCN(3)}、${getFutureMonthShortZhCN(8)}和${getFutureMonthShortZhCN(11)}，需要更多的谨慎。`
          ];
        },
        get 'zh-TW'() {
          return [
            `在${getFutureMonthShortZhTW(1)}，這是一個需要非常謹慎的時期。慢慢仔細地做重要決定是好的。`,
            `在${getFutureMonthShortZhTW(7)}，可能會有大的情緒波動或壓力。在這個時期，不要過度勞累，要充分休息。`,
            `在${getFutureMonthShortZhTW(11)}，需要關於財富的非常高的謹慎。必須絕對避免大額支出或投資。`,
            `在${getFutureMonthShortZhTW(6)}，這是一個需要最大關注健康管理的時期。即使是很小的症狀也要立即應對。`,
            `在${getFutureMonthShortZhTW(9)}，可能需要在人際關係中非常謹慎的時期。在這個時期，要更加注意溝通。`,
            `在${getFutureMonthShortZhTW(2)}，需要關於商業或工作的非常謹慎的方法。在這個時期，避免倉促決定。`,
            `在${getFutureMonthShortZhTW(10)}，這是一個需要最大程度控制速度的時期。必須絕對避免過度的行動。`,
            `在${getFutureMonthShortZhTW(8)}，可能需要注意學習或考試的非常高的謹慎。在這個時期，要更徹底地準備。`,
            `在${getFutureMonthShortZhTW(12)}，可能會有大的情緒壓力或疲勞。在這個時期，必須專注於休息和恢復。`,
            `整體而言，今年有稍有困難的運勢，所以始終謹慎行動是重要的。特別是在${getFutureMonthShortZhTW(3)}、${getFutureMonthShortZhTW(8)}和${getFutureMonthShortZhTW(11)}，需要更多的謹慎。`
          ];
        },
        get vi() {
          return [
            `Vào ${getFutureMonthShortVi(1)}, đây là thời kỳ cần rất thận trọng. Nên đưa ra quyết định quan trọng một cách chậm rãi và cẩn thận.`,
            `Vào ${getFutureMonthShortVi(7)}, có thể có biến động cảm xúc lớn hoặc căng thẳng. Trong thời kỳ này, đừng làm quá sức và nghỉ ngơi đầy đủ.`,
            `Vào ${getFutureMonthShortVi(11)}, cần thận trọng rất cao về tài chính. Bạn phải tuyệt đối tránh các khoản chi lớn hoặc đầu tư.`,
            `Vào ${getFutureMonthShortVi(6)}, đây là thời kỳ bạn cần chú ý tối đa đến quản lý sức khỏe. Hãy phản ứng ngay lập tức ngay cả với những triệu chứng nhỏ.`,
            `Vào ${getFutureMonthShortVi(9)}, có thể có thời kỳ bạn cần rất thận trọng trong các mối quan hệ. Trong thời kỳ này, hãy chú ý hơn nữa đến giao tiếp.`,
            `Vào ${getFutureMonthShortVi(2)}, cần tiếp cận rất thận trọng về kinh doanh hoặc công việc. Trong thời kỳ này, tránh quyết định vội vàng.`,
            `Vào ${getFutureMonthShortVi(10)}, đây là thời kỳ bạn cần kiểm soát tốc độ tối đa tổng thể. Bạn phải tuyệt đối tránh các hành động quá mức.`,
            `Vào ${getFutureMonthShortVi(8)}, có thể cần thận trọng rất cao về học tập hoặc thi cử. Trong thời kỳ này, hãy chuẩn bị kỹ lưỡng hơn nữa.`,
            `Vào ${getFutureMonthShortVi(12)}, có thể có căng thẳng cảm xúc lớn hoặc mệt mỏi. Trong thời kỳ này, bạn phải tập trung vào nghỉ ngơi và phục hồi.`,
            `Nhìn chung, năm nay có vận may hơi khó khăn, vì vậy luôn hành động cẩn thận là quan trọng. Đặc biệt vào ${getFutureMonthShortVi(3)}, ${getFutureMonthShortVi(8)} và ${getFutureMonthShortVi(11)}, cần thận trọng hơn nữa.`
          ];
        },
        get id() {
          return [
            `Pada ${getFutureMonthShortId(1)}, ini adalah periode yang memerlukan sangat kehati-hatian. Baik untuk membuat keputusan penting perlahan-lahan dan hati-hati.`,
            `Pada ${getFutureMonthShortId(7)}, mungkin ada fluktuasi emosional besar atau stres. Selama periode ini, jangan berlebihan dan istirahat yang cukup.`,
            `Pada ${getFutureMonthShortId(11)}, kehati-hatian sangat tinggi diperlukan terkait kekayaan. Anda harus benar-benar menghindari pengeluaran besar atau investasi.`,
            `Pada ${getFutureMonthShortId(6)}, ini adalah periode ketika Anda perlu memperhatikan maksimum manajemen kesehatan. Tanggapi segera bahkan gejala kecil.`,
            `Pada ${getFutureMonthShortId(9)}, mungkin ada periode ketika Anda perlu sangat waspada dalam hubungan. Selama periode ini, perhatikan lebih pada komunikasi.`,
            `Pada ${getFutureMonthShortId(2)}, pendekatan sangat hati-hati diperlukan terkait bisnis atau pekerjaan. Selama periode ini, hindari keputusan yang terburu-buru.`,
            `Pada ${getFutureMonthShortId(10)}, ini adalah periode ketika Anda perlu mengontrol kecepatan maksimum secara keseluruhan. Anda harus benar-benar menghindari tindakan yang berlebihan.`,
            `Pada ${getFutureMonthShortId(8)}, kehati-hatian sangat tinggi mungkin diperlukan terkait studi atau ujian. Selama periode ini, persiapkan lebih teliti lagi.`,
            `Pada ${getFutureMonthShortId(12)}, mungkin ada stres emosional besar atau kelelahan. Selama periode ini, Anda harus fokus pada istirahat dan pemulihan.`,
            `Secara keseluruhan, tahun ini memiliki keberuntungan yang sedikit sulit, jadi selalu bertindak hati-hati adalah penting. Terutama pada ${getFutureMonthShortId(3)}, ${getFutureMonthShortId(8)} dan ${getFutureMonthShortId(11)}, lebih banyak kehati-hatian diperlukan.`
          ];
        }
      }
    }
  },
  {
    id: 5,
    title: {
      ko: '어려운 운세',
      en: 'Difficult Fortune',
      ja: '困難な運勢',
      'zh-CN': '困难的运势',
      'zh-TW': '困難的運勢',
      vi: 'Vận May Khó Khăn',
      id: 'Keberuntungan Sulit'
    },
    description: {
      get ko() {
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth() + 1;
        let periodText = '';
        if (currentMonth <= 9) {
          periodText = `${currentYear}년 말 또는 ${currentYear + 1}년 초`;
        } else if (currentMonth === 10) {
          periodText = `${currentYear}년 말 또는 ${currentYear + 1}년 초`;
        } else {
          periodText = `${currentYear + 1}년 초 또는 중반`;
        }
        return [
          `${periodText} 당신은 어려운 운세를 경험할 수 있습니다. 하지만 강한 의지와 노력으로 극복할 수 있을 것입니다.`,
          `${periodText} 당신에게는 많은 어려움이 예상됩니다. 하지만 포기하지 않고 꾸준히 노력하면 극복 가능합니다.`,
          `${periodText} 당신은 올해 상당한 어려움을 겪을 수 있지만, 모든 것은 극복 가능합니다. 긍정적인 마음가짐이 중요합니다.`,
          `${periodText} 당신에게는 큰 도전이 있을 수 있습니다. 하지만 강한 의지력과 인내심, 그리고 노력으로 모든 어려움을 이겨낼 수 있을 것입니다.`,
          `${periodText} 당신은 올해 매우 힘든 시기를 보낼 수 있지만, 인내와 노력, 그리고 긍정적 자세로 극복할 수 있는 운세입니다.`,
          `올해 당신은 많은 어려움을 겪을 수 있습니다. 하지만 ${periodText}부터는 점진적으로 개선될 가능성이 있습니다.`,
          `${periodText} 당신에게는 상당한 어려움이 예상됩니다. 하지만 긍정적인 태도와 꾸준한 노력, 그리고 주변의 도움으로 극복할 수 있을 것입니다.`,
          `${periodText} 당신은 올해 매우 험난한 시기를 경험할 수 있습니다. 하지만 포기하지 않는 마음과 강한 의지로 극복할 수 있을 것입니다.`,
          `${periodText} 당신에게는 어려운 운세가 예상됩니다. 하지만 인내심과 노력, 그리고 긍정적인 마음가짐, 전문가의 도움이 중요합니다.`,
          `${periodText} 당신은 올해 많은 어려움을 겪을 수 있지만, 모든 것은 극복 가능합니다. 꾸준한 노력과 인내, 그리고 강한 의지력이 필요합니다.`
        ];
      },
      en: [
        'You may experience difficult fortune. However, with strong will and effort, you can overcome it.',
        'Many difficulties are expected. However, if you do not give up and continue to work hard, you can overcome them.',
        'You may encounter considerable difficulties this year, but everything is overcomeable. A positive mindset is important.',
        'You may face major challenges. However, with strong willpower, patience, and effort, you can overcome all difficulties.',
        'You may have a very difficult year, but it is fortune that can be overcome with patience, effort, and a positive attitude.',
        'This year you may face many difficulties. However, starting from this period, things can improve gradually.',
        'Considerable difficulties are expected. However, with a positive attitude, steady effort, and help from those around you, you can overcome them.',
        'You may experience very rough times this year. However, with a heart that does not give up and strong will, you can overcome it.',
        'Difficult fortune is expected. However, patience, effort, a positive mindset, and expert help are important.',
        'You may face many difficulties this year, but everything is overcomeable. Steady effort, patience, and strong willpower are needed.'
      ],
      ja: [
        '困難な運勢を経験する可能性があります。しかし強い意志と努力で克服できるでしょう。',
        '多くの困難が予想されます。しかし諦めずに着実に努力すれば克服可能です。',
        '今年かなりの困難に直面する可能性がありますが、すべて克服可能です。ポジティブな心構えが重要です。',
        '大きな挑戦が生じる可能性があります。しかし強い意志力と忍耐、そして努力で、すべての困難を乗り越えられるでしょう。',
        '今年非常に困難な時期を過ごす可能性がありますが、忍耐と努力、そしてポジティブな姿勢で克服できる運勢です。',
        '今年多くの困難に直面する可能性があります。しかしこの時期からは段階的に改善できる可能性があります。',
        'かなりの困難が予想されます。しかしポジティブな態度と着実な努力、そして周囲の助けで克服できるでしょう。',
        '今年非常に険しい時期を経験する可能性があります。しかし諦めない心と強い意志で乗り越えられるでしょう。',
        '困難な運勢が予想されます。しかし忍耐と努力、そしてポジティブな心構え、専門家の助けが重要です。',
        '今年多くの困難に直面する可能性がありますが、すべては克服可能です。着実な努力と忍耐、そして強い意志力が必要です。'
      ],
      'zh-CN': [
        '你可能会经历困难的运势。但通过坚强的意志和努力，你可以克服它。',
        '预期会有许多困难。但如果你不放弃并继续努力，你可以克服它们。',
        '今年你可能会遇到相当大的困难，但所有都是可以克服的。积极的心态很重要。',
        '你可能会面临重大挑战。但通过坚强的意志力、耐心和努力，你可以克服所有困难。',
        '今年你可能会有非常困难的时期，但这是可以通过耐心、努力和积极态度克服的运势。',
        '今年你可能会面临许多困难。但从这个时期开始，情况可能会逐步改善。',
        '预期会有相当大的困难。但通过积极的态度、持续努力和周围人的帮助，你可以克服它们。',
        '今年你可能会经历非常艰难的时期。但以不放弃的心和坚强的意志，你可以克服它。',
        '预期会有困难的运势。但耐心、努力、积极的心态和专家的帮助很重要。',
        '今年你可能会面临许多困难，但一切都是可以克服的。需要持续的努力、耐心和坚强的意志力。'
      ],
      'zh-TW': [
        '你可能會經歷困難的運勢。但通過堅強的意志和努力，你可以克服它。',
        '預期會有許多困難。但如果你不放棄並繼續努力，你可以克服它們。',
        '今年你可能會遇到相當大的困難，但所有都是可以克服的。積極的心態很重要。',
        '你可能會面臨重大挑戰。但通過堅強的意志力、耐心和努力，你可以克服所有困難。',
        '今年你可能會有非常困難的時期，但這是可以通過耐心、努力和積極態度克服的運勢。',
        '今年你可能會面臨許多困難。但從這個時期開始，情況可能會逐步改善。',
        '預期會有相當大的困難。但通過積極的態度、持續努力和周圍人的幫助，你可以克服它們。',
        '今年你可能會經歷非常艱難的時期。但以不放棄的心和堅強的意志，你可以克服它。',
        '預期會有困難的運勢。但耐心、努力、積極的心態和專家的幫助很重要。',
        '今年你可能會面臨許多困難，但一切都是可以克服的。需要持續的努力、耐心和堅強的意志力。'
      ],
      vi: [
        'Bạn có thể trải nghiệm vận may khó khăn. Tuy nhiên, với ý chí mạnh mẽ và nỗ lực, bạn có thể vượt qua nó.',
        'Nhiều khó khăn được mong đợi. Tuy nhiên, nếu bạn không từ bỏ và tiếp tục làm việc chăm chỉ, bạn có thể vượt qua chúng.',
        'Bạn có thể gặp phải khó khăn đáng kể trong năm nay, nhưng mọi thứ đều có thể vượt qua. Tư duy tích cực là quan trọng.',
        'Bạn có thể phải đối mặt với những thách thức lớn. Tuy nhiên, với ý chí mạnh mẽ, sự kiên nhẫn và nỗ lực, bạn có thể vượt qua mọi khó khăn.',
        'Bạn có thể có một năm rất khó khăn, nhưng đây là vận may có thể vượt qua bằng sự kiên nhẫn, nỗ lực và thái độ tích cực.',
        'Năm nay bạn có thể phải đối mặt với nhiều khó khăn. Tuy nhiên, bắt đầu từ thời kỳ này, mọi thứ có thể cải thiện dần.',
        'Khó khăn đáng kể được mong đợi. Tuy nhiên, với thái độ tích cực, nỗ lực ổn định và sự giúp đỡ từ những người xung quanh, bạn có thể vượt qua chúng.',
        'Bạn có thể trải nghiệm những thời điểm rất khó khăn trong năm nay. Tuy nhiên, với trái tim không từ bỏ và ý chí mạnh mẽ, bạn có thể vượt qua nó.',
        'Vận may khó khăn được mong đợi. Tuy nhiên, sự kiên nhẫn, nỗ lực, tư duy tích cực và sự giúp đỡ từ chuyên gia là quan trọng.',
        'Bạn có thể phải đối mặt với nhiều khó khăn trong năm nay, nhưng mọi thứ đều có thể vượt qua. Cần có nỗ lực ổn định, sự kiên nhẫn và ý chí mạnh mẽ.'
      ],
      id: [
        'Anda mungkin mengalami keberuntungan yang sulit. Namun, dengan kemauan kuat dan upaya, Anda dapat mengatasinya.',
        'Banyak kesulitan diharapkan. Namun, jika Anda tidak menyerah dan terus bekerja keras, Anda dapat mengatasinya.',
        'Anda mungkin menghadapi kesulitan yang cukup besar tahun ini, tetapi semuanya dapat diatasi. Pola pikir positif adalah penting.',
        'Anda mungkin menghadapi tantangan besar. Namun, dengan kemauan yang kuat, kesabaran, dan upaya, Anda dapat mengatasi semua kesulitan.',
        'Anda mungkin memiliki tahun yang sangat sulit, tetapi ini adalah keberuntungan yang dapat diatasi dengan kesabaran, upaya, dan sikap positif.',
        'Tahun ini Anda mungkin menghadapi banyak kesulitan. Namun, mulai dari periode ini, hal-hal dapat membaik secara bertahap.',
        'Kesulitan yang cukup besar diharapkan. Namun, dengan sikap positif, upaya yang stabil, dan bantuan dari orang-orang di sekitar, Anda dapat mengatasinya.',
        'Anda mungkin mengalami waktu yang sangat sulit tahun ini. Namun, dengan hati yang tidak menyerah dan kemauan kuat, Anda dapat mengatasinya.',
        'Keberuntungan yang sulit diharapkan. Namun, kesabaran, upaya, pola pikir positif, dan bantuan ahli adalah penting.',
        'Anda mungkin menghadapi banyak kesulitan tahun ini, tetapi semuanya dapat diatasi. Diperlukan upaya yang stabil, kesabaran, dan kemauan yang kuat.'
      ]
    },
    emoji: '🌀',
    scoreRange: [40, 59],
    strengths: {
      ko: ['강한 의지력', '끈기', '회복력', '인내심', '적응력', '문제 해결 능력', '긍정적 사고', '책임감', '현실감각', '유연성'],
      en: ['Strong Willpower', 'Persistence', 'Resilience', 'Patience', 'Adaptability', 'Problem-Solving Ability', 'Positive Thinking', 'Responsibility', 'Realism', 'Flexibility'],
      ja: ['強い意志力', '粘り強さ', '回復力', '忍耐', '適応力', '問題解決能力', 'ポジティブ思考', '責任感', '現実感覚', '柔軟性'],
      'zh-CN': ['坚强意志力', '坚持', '恢复力', '耐心', '适应性', '解决问题能力', '积极思考', '责任感', '现实感', '灵活性'],
      'zh-TW': ['堅強意志力', '堅持', '恢復力', '耐心', '適應性', '解決問題能力', '積極思考', '責任感', '現實感', '靈活性'],
      vi: ['Ý Chí Mạnh Mẽ', 'Kiên Trì', 'Khả Năng Phục Hồi', 'Kiên Nhẫn', 'Thích Ứng', 'Khả Năng Giải Quyết Vấn Đề', 'Suy Nghĩ Tích Cực', 'Trách Nhiệm', 'Cảm Giác Thực Tế', 'Linh Hoạt'],
      id: ['Kemauan Kuat', 'Ketekunan', 'Pemulihan', 'Kesabaran', 'Adaptabilitas', 'Kemampuan Memecahkan Masalah', 'Berpikir Positif', 'Tanggung Jawab', 'Kesadaran Realitas', 'Fleksibilitas']
    },
    recommendations: {
      ko: ['자기계발 집중', '긍정적 사고 유지', '인내심 강화', '문제 해결 능력 향상', '건강 관리 철저히', '스트레스 관리', '주변 사람들과 소통', '현실적인 목표 설정', '단계별 접근', '전문가 도움 요청'],
      en: ['Focus on Self-Development', 'Maintain Positive Thinking', 'Strengthen Patience', 'Improve Problem-Solving Skills', 'Thorough Health Management', 'Stress Management', 'Communication with People Around', 'Set Realistic Goals', 'Step-by-Step Approach', 'Seek Expert Help'],
      ja: ['自己啓発集中', 'ポジティブ思考の維持', '忍耐の強化', '問題解決能力の向上', '徹底的な健康管理', 'ストレス管理', '周囲の人々とのコミュニケーション', '現実的な目標設定', '段階的なアプローチ', '専門家の助けを求める'],
      'zh-CN': ['专注自我发展', '保持积极思考', '增强耐心', '提高解决问题能力', '彻底的健康管理', '压力管理', '与周围的人沟通', '设定现实目标', '逐步方法', '寻求专家帮助'],
      'zh-TW': ['專注自我發展', '保持積極思考', '增強耐心', '提高解決問題能力', '徹底的健康管理', '壓力管理', '與周圍的人溝通', '設定現實目標', '逐步方法', '尋求專家幫助'],
      vi: ['Tập Trung Phát Triển Bản Thân', 'Duy Trì Suy Nghĩ Tích Cực', 'Tăng Cường Kiên Nhẫn', 'Cải Thiện Kỹ Năng Giải Quyết Vấn Đề', 'Quản Lý Sức Khỏe Triệt Để', 'Quản Lý Căng Thẳng', 'Giao Tiếp Với Những Người Xung Quanh', 'Thiết Lập Mục Tiêu Thực Tế', 'Tiếp Cận Từng Bước', 'Tìm Kiếm Sự Giúp Đỡ Từ Chuyên Gia'],
      id: ['Fokus Pengembangan Diri', 'Pertahankan Berpikir Positif', 'Perkuat Kesabaran', 'Tingkatkan Keterampilan Memecahkan Masalah', 'Manajemen Kesehatan Menyeluruh', 'Manajemen Stres', 'Komunikasi dengan Orang Sekitar', 'Tetapkan Tujuan Realistis', 'Pendekatan Bertahap', 'Cari Bantuan Ahli']
    },
    advice: {
      ko: [
        '올해는 어려운 운세이지만 절대 포기하지 마세요. 강한 의지력과 인내심을 가지고 꾸준히 노력하면 극복할 수 있습니다.',
        '어려움이 많아도 긍정적인 마음가짐을 유지하는 것이 매우 중요합니다. 긍정적 사고가 상황을 개선하는 핵심입니다.',
        '혼자 감당하려고 하지 말고 주변 사람들에게 적극적으로 도움을 요청하세요. 소통과 협력, 그리고 전문가의 도움이 중요합니다.',
        '어려운 시기일수록 건강 관리에 더욱 신경 써야 합니다. 몸과 마음의 건강이 모든 것의 기초이며, 이것이 없으면 아무것도 할 수 없습니다.',
        '큰 목표보다는 작은 목표를 세워서 하나씩 달성해 나가는 것이 좋습니다. 단계별 접근과 현실적인 계획이 중요합니다.',
        '스트레스 관리를 매우 잘 해야 합니다. 무리하지 말고 적절히 휴식하며, 필요한 경우 전문가의 상담을 받는 것도 좋은 방법입니다.',
        '현실적인 목표를 설정하고 계획적으로 접근하시기 바랍니다. 무리한 계획은 오히려 역효과를 낼 수 있으므로 신중하게 결정하세요.',
        '어려운 시기일수록 인내심을 가지고 천천히 나아가는 것이 좋습니다. 서두르지 말고 차근차근, 하지만 포기하지 않고 진행하세요.',
        '긍정적인 에너지를 유지하기 위해 취미 활동이나 자기계발에 시간을 투자하는 것을 권장합니다. 이것이 어려움을 극복하는 힘이 됩니다.',
        '절대 혼자 감당하려고 하지 마세요. 필요한 경우 전문가의 도움을 적극적으로 받는 것이 현명한 선택이며, 이것이 어려움을 극복하는 가장 빠른 길입니다.'
      ],
      en: [
        'This year has difficult fortune, but never give up. With strong willpower and patience, you can overcome it.',
        'Even when there are many difficulties, maintaining a positive mindset is very important. Positive thinking is the key to improving situations.',
        'Do not try to handle everything alone. Actively ask people around you for help. Communication, cooperation, and expert help are important.',
        'The more difficult the time, the more you should pay attention to health management. Physical and mental health is the foundation of everything, and without it, you can do nothing.',
        'Rather than setting big goals, it is better to set small goals and achieve them one by one. Step-by-step approach and realistic plans are important.',
        'You must manage stress very well. Do not overdo it, take proper rest, and if necessary, consulting with experts is also a good method.',
        'Please set realistic goals and approach systematically. Unrealistic plans can have the opposite effect, so decide carefully.',
        'The more difficult the time, the better it is to move forward slowly with patience. Do not rush, proceed step by step, but do not give up.',
        'It is recommended to invest time in hobbies or self-development to maintain positive energy. This becomes the strength to overcome difficulties.',
        'Never try to handle everything alone. If necessary, actively seeking expert help is a wise choice, and this is the fastest way to overcome difficulties.'
      ],
      ja: [
        '今年は困難な運勢ですが、絶対に諦めないでください。強い意志力と忍耐を持って着実に努力すれば克服できます。',
        '多くの困難があってもポジティブな心構えを維持することが非常に重要です。ポジティブ思考が状況を改善する核心です。',
        '一人で処理しようとせず、周囲の人々に積極的に助けを求めてください。コミュニケーションと協力、そして専門家の助けが重要です。',
        '困難な時期ほど健康管理により多くの注意を払う必要があります。体と心の健康がすべての基礎であり、これがなければ何もできません。',
        '大きな目標よりも小さな目標を設定して一つずつ達成していくことが良いでしょう。段階的なアプローチと現実的な計画が重要です。',
        'ストレス管理を非常に良くする必要があります。無理をせず適切に休息し、必要に応じて専門家の相談を受けることも良い方法です。',
        '現実的な目標を設定し、計画的にアプローチすることをお勧めします。無理な計画は逆効果になる可能性があるため、慎重に決定してください。',
        '困難な時期ほど忍耐を持ってゆっくり進むことが良いでしょう。急がないで一つずつ、しかし諦めずに進めてください。',
        'ポジティブなエネルギーを維持するために、趣味活動や自己啓発に時間を投資することをお勧めします。これが困難を克服する力になります。',
        '絶対に一人で処理しようとしないでください。必要に応じて専門家の助けを積極的に受けることが賢明な選択であり、これが困難を克服する最も早い道です。'
      ],
      'zh-CN': [
        '今年有困难的运势，但绝对不要放弃。通过坚强的意志力和耐心，你可以克服它。',
        '即使有很多困难，保持积极心态也非常重要。积极思考是改善情况的关键。',
        '不要试图独自处理一切。积极向周围的人寻求帮助。沟通、合作和专家的帮助很重要。',
        '越是困难的时期，越应该注意健康管理。身心健康是一切的基础，没有它，你什么都做不了。',
        '与其设定大目标，不如设定小目标并逐一实现。逐步方法和现实计划很重要。',
        '必须很好地管理压力。不过度劳累，适当休息，如有必要，咨询专家也是一个好方法。',
        '请设定现实目标并系统地接近。不切实际的计划可能适得其反，所以要仔细决定。',
        '越是困难的时期，越应该耐心地慢慢前进。不要匆忙，逐步进行，但不要放弃。',
        '建议投资时间于爱好或自我发展以保持正能量。这成为克服困难的力量。',
        '永远不要试图独自处理一切。如有必要，积极寻求专家帮助是明智的选择，这是克服困难最快的途径。'
      ],
      'zh-TW': [
        '今年有困難的運勢，但絕對不要放棄。通過堅強的意志力和耐心，你可以克服它。',
        '即使有很多困難，保持積極心態也非常重要。積極思考是改善情況的關鍵。',
        '不要試圖獨自處理一切。積極向周圍的人尋求幫助。溝通、合作和專家的幫助很重要。',
        '越是困難的時期，越應該注意健康管理。身心健康是一切的基础，沒有它，你什麼都做不了。',
        '與其設定大目標，不如設定小目標並逐一實現。逐步方法和現實計劃很重要。',
        '必須很好地管理壓力。不過度勞累，適當休息，如有必要，諮詢專家也是一個好方法。',
        '請設定現實目標並系統地接近。不切實際的計劃可能適得其反，所以要仔細決定。',
        '越是困難的時期，越應該耐心地慢慢前進。不要匆忙，逐步進行，但不要放棄。',
        '建議投資時間於愛好或自我發展以保持正能量。這成為克服困難的力量。',
        '永遠不要試圖獨自處理一切。如有必要，積極尋求專家幫助是明智的選擇，這是克服困難最快的途徑。'
      ],
      vi: [
        'Năm nay có vận may khó khăn, nhưng tuyệt đối đừng từ bỏ. Với ý chí mạnh mẽ và sự kiên nhẫn, bạn có thể vượt qua nó.',
        'Ngay cả khi có nhiều khó khăn, duy trì tư duy tích cực là rất quan trọng. Suy nghĩ tích cực là chìa khóa để cải thiện tình huống.',
        'Đừng cố gắng xử lý mọi thứ một mình. Tích cực yêu cầu những người xung quanh giúp đỡ. Giao tiếp, hợp tác và sự giúp đỡ từ chuyên gia là quan trọng.',
        'Càng khó khăn, bạn càng phải chú ý đến quản lý sức khỏe. Sức khỏe thể chất và tinh thần là nền tảng của mọi thứ, và không có nó, bạn không thể làm gì.',
        'Thay vì đặt mục tiêu lớn, tốt hơn là đặt mục tiêu nhỏ và đạt được từng cái một. Tiếp cận từng bước và kế hoạch thực tế là quan trọng.',
        'Bạn phải quản lý căng thẳng rất tốt. Không làm quá sức, nghỉ ngơi đúng cách, và nếu cần, tư vấn với chuyên gia cũng là một phương pháp tốt.',
        'Vui lòng đặt mục tiêu thực tế và tiếp cận một cách có hệ thống. Những kế hoạch không thực tế có thể phản tác dụng, vì vậy hãy quyết định cẩn thận.',
        'Càng khó khăn, càng tốt là tiến lên chậm rãi với sự kiên nhẫn. Đừng vội vã, tiến hành từng bước, nhưng đừng từ bỏ.',
        'Nên đầu tư thời gian vào sở thích hoặc phát triển bản thân để duy trì năng lượng tích cực. Điều này trở thành sức mạnh để vượt qua khó khăn.',
        'Tuyệt đối đừng cố gắng xử lý mọi thứ một mình. Nếu cần, tích cực tìm kiếm sự giúp đỡ từ chuyên gia là lựa chọn khôn ngoan, và đây là cách nhanh nhất để vượt qua khó khăn.'
      ],
      id: [
        'Tahun ini memiliki keberuntungan yang sulit, tetapi jangan pernah menyerah. Dengan kemauan kuat dan kesabaran, Anda dapat mengatasinya.',
        'Bahkan ketika ada banyak kesulitan, mempertahankan pola pikir positif sangat penting. Berpikir positif adalah kunci untuk meningkatkan situasi.',
        'Jangan mencoba menangani semuanya sendirian. Secara aktif mintalah bantuan dari orang-orang di sekitar Anda. Komunikasi, kerjasama, dan bantuan ahli adalah penting.',
        'Semakin sulit waktunya, semakin Anda harus memperhatikan manajemen kesehatan. Kesehatan fisik dan mental adalah dasar dari segalanya, dan tanpanya, Anda tidak dapat melakukan apa pun.',
        'Daripada menetapkan tujuan besar, lebih baik menetapkan tujuan kecil dan mencapainya satu per satu. Pendekatan bertahap dan rencana realistis adalah penting.',
        'Anda harus mengelola stres dengan sangat baik. Jangan berlebihan, beristirahat dengan benar, dan jika perlu, berkonsultasi dengan ahli juga merupakan metode yang baik.',
        'Silakan tetapkan tujuan yang realistis dan pendekatan secara sistematis. Rencana yang tidak realistis dapat memiliki efek sebaliknya, jadi putuskan dengan hati-hati.',
        'Semakin sulit waktunya, semakin baik bergerak maju perlahan dengan kesabaran. Jangan terburu-buru, lanjutkan langkah demi langkah, tetapi jangan menyerah.',
        'Disarankan untuk menginvestasikan waktu dalam hobi atau pengembangan diri untuk mempertahankan energi positif. Ini menjadi kekuatan untuk mengatasi kesulitan.',
        'Jangan pernah mencoba menangani semuanya sendirian. Jika perlu, secara aktif mencari bantuan ahli adalah pilihan yang bijaksana, dan ini adalah cara tercepat untuk mengatasi kesulitan.'
      ]
    },
    fortune: {
      wealth: {
        ko: [
          `${getFutureMonthShort(2)}부터 재물 관리에 매우 신중하게 접근해야 할 시기입니다. 큰 투자나 지출은 절대 삼가야 합니다.`,
          `올해 재물운은 매우 신중한 접근이 필요합니다. ${getFutureMonthShort(3)}부터는 계획적인 재무 관리가 필수적입니다.`,
          `${getFutureMonthShort(4)}에 재물 관련 큰 주의가 필요할 수 있습니다. 이 시기에는 충동적인 지출은 절대 피해야 합니다.`,
          `올해 재물운은 상당히 어려울 수 있지만, ${getFutureMonthShort(5)}부터는 점진적으로 개선될 가능성이 있습니다.`,
          `${getFutureMonthShort(1)}부터 재물 관리에 최대한 집중하시기 바랍니다. 저축 계획을 세우고 철저히 실천하는 것이 중요합니다.`,
          `올해 재물운은 큰 기대보다는 안정성에 최대한 중점을 두는 것이 좋습니다. ${getFutureMonthShort(6)}부터는 더욱 신중하게 접근하세요.`,
          `${getFutureMonthShort(7)}에 재물 관련 어려움이 있을 수 있습니다. 하지만 계획적으로 관리하고 인내심을 가지면 극복할 수 있습니다.`,
          `올해 재물운은 많은 인내심을 가지고 관리하는 것이 매우 중요합니다. ${getFutureMonthShort(8)}부터는 조금씩 나아질 수 있을 것입니다.`,
          `${getFutureMonthShort(9)}에 재물 관련 긍정적인 변화가 있을 수 있습니다. 하지만 서두르지 말고 매우 신중하게 판단하시기 바랍니다.`,
          `올해 재물운은 전반적으로 매우 신중한 접근이 필요합니다. ${getFutureMonthShort(10)}부터는 더 안정적인 흐름을 기대할 수 있습니다.`
        ],
        get en() {
          return [
            `From ${getFutureMonthShortEn(2)}, you need a very cautious approach to wealth management. You must absolutely avoid large investments or expenses.`,
            `This year's wealth fortune requires a very cautious approach. From ${getFutureMonthShortEn(3)}, systematic financial management is essential.`,
            `In ${getFutureMonthShortEn(4)}, great caution may be needed regarding wealth. During this period, you must absolutely avoid impulsive spending.`,
            `This year's wealth fortune may be quite difficult, but from ${getFutureMonthShortEn(5)}, there is a possibility of gradual improvement.`,
            `From ${getFutureMonthShortEn(1)}, focus on wealth management as much as possible. It is important to create and thoroughly practice a savings plan.`,
            `This year's wealth fortune is better to focus on stability as much as possible rather than high expectations. From ${getFutureMonthShortEn(6)}, be even more cautious.`,
            `In ${getFutureMonthShortEn(7)}, there may be difficulties related to wealth. However, if managed systematically and with patience, you can overcome them.`,
            `This year's wealth fortune requires very patient management. From ${getFutureMonthShortEn(8)}, things can improve gradually.`,
            `In ${getFutureMonthShortEn(9)}, there may be positive changes related to wealth. However, do not rush and make very careful judgments.`,
            `This year's wealth fortune requires an overall very cautious approach. From ${getFutureMonthShortEn(10)}, you can expect a more stable flow.`
          ];
        },
        get ja() {
          return [
            `${getFutureMonthShortJa(2)}から財運管理に非常に慎重なアプローチが必要な時期です。大きな投資や支出は絶対に避けなければなりません。`,
            `今年の財運は非常に慎重なアプローチが必要です。${getFutureMonthShortJa(3)}からは計画的金融管理が不可欠です。`,
            `${getFutureMonthShortJa(4)}に財運に関する大きな注意が必要かもしれません。この時期には衝動的な支出は絶対に避ける必要があります。`,
            `今年の財運はかなり困難かもしれませんが、${getFutureMonthShortJa(5)}からは段階的な改善の可能性があります。`,
            `${getFutureMonthShortJa(1)}から財運管理に最大限集中することをお勧めします。貯蓄計画を立てて徹底的に実践することが重要です。`,
            `今年の財運は大きな期待よりも安定性に最大限重点を置くことが良いでしょう。${getFutureMonthShortJa(6)}からはさらに慎重にアプローチしてください。`,
            `${getFutureMonthShortJa(7)}に財運に関する困難があるかもしれません。しかし、計画的に管理し忍耐を持てば克服できます。`,
            `今年の財運は非常に忍耐を持って管理することが非常に重要です。${getFutureMonthShortJa(8)}からは少しずつ良くなる可能性があります。`,
            `${getFutureMonthShortJa(9)}に財運に関する前向きな変化があるかもしれません。しかし、急がずに非常に慎重に判断することをお勧めします。`,
            `今年の財運は全体的に非常に慎重なアプローチが必要です。${getFutureMonthShortJa(10)}からはより安定した流れが期待できるでしょう。`
          ];
        },
        get 'zh-CN'() {
          return [
            `从${getFutureMonthShortZhCN(2)}开始，你需要非常谨慎地管理财富。必须绝对避免大额投资或支出。`,
            `今年的财运需要非常谨慎的方法。从${getFutureMonthShortZhCN(3)}开始，系统的财务管理是必不可少的。`,
            `在${getFutureMonthShortZhCN(4)}，可能需要关于财富的极大谨慎。在这个时期，必须绝对避免冲动消费。`,
            `今年的财运可能相当困难，但从${getFutureMonthShortZhCN(5)}开始，有逐步改善的可能性。`,
            `从${getFutureMonthShortZhCN(1)}开始，尽可能关注财富管理。制定并彻底实践储蓄计划很重要。`,
            `今年的财运最好尽可能专注于稳定性而不是高期望。从${getFutureMonthShortZhCN(6)}开始，要更加谨慎。`,
            `在${getFutureMonthShortZhCN(7)}，可能会有与财富相关的困难。但如果系统地管理并有耐心，你可以克服它们。`,
            `今年的财运需要非常耐心的管理。从${getFutureMonthShortZhCN(8)}开始，情况可以逐步改善。`,
            `在${getFutureMonthShortZhCN(9)}，可能会有与财富相关的积极变化。但不要匆忙，要非常仔细地判断。`,
            `今年的财运需要整体非常谨慎的方法。从${getFutureMonthShortZhCN(10)}开始，你可以期待更稳定的流动。`
          ];
        },
        get 'zh-TW'() {
          return [
            `從${getFutureMonthShortZhTW(2)}開始，你需要非常謹慎地管理財富。必須絕對避免大額投資或支出。`,
            `今年的財運需要非常謹慎的方法。從${getFutureMonthShortZhTW(3)}開始，系統的財務管理是必不可少的。`,
            `在${getFutureMonthShortZhTW(4)}，可能需要關於財富的極大謹慎。在這個時期，必須絕對避免衝動消費。`,
            `今年的財運可能相當困難，但從${getFutureMonthShortZhTW(5)}開始，有逐步改善的可能性。`,
            `從${getFutureMonthShortZhTW(1)}開始，盡可能關注財富管理。制定並徹底實踐儲蓄計畫很重要。`,
            `今年的財運最好盡可能專注於穩定性而不是高期望。從${getFutureMonthShortZhTW(6)}開始，要更加謹慎。`,
            `在${getFutureMonthShortZhTW(7)}，可能會有與財富相關的困難。但如果系統地管理並有耐心，你可以克服它們。`,
            `今年的財運需要非常耐心的管理。從${getFutureMonthShortZhTW(8)}開始，情況可以逐步改善。`,
            `在${getFutureMonthShortZhTW(9)}，可能會有與財富相關的積極變化。但不要匆忙，要非常仔細地判斷。`,
            `今年的財運需要整體非常謹慎的方法。從${getFutureMonthShortZhTW(10)}開始，你可以期待更穩定的流動。`
          ];
        },
        get vi() {
          return [
            `Từ ${getFutureMonthShortVi(2)}, bạn cần tiếp cận rất thận trọng với quản lý tài chính. Bạn phải tuyệt đối tránh các khoản đầu tư hoặc chi tiêu lớn.`,
            `Vận tài chính năm nay yêu cầu một cách tiếp cận rất thận trọng. Từ ${getFutureMonthShortVi(3)}, quản lý tài chính có hệ thống là điều cần thiết.`,
            `Vào ${getFutureMonthShortVi(4)}, có thể cần sự thận trọng rất cao về tài chính. Trong thời kỳ này, bạn phải tuyệt đối tránh chi tiêu bốc đồng.`,
            `Vận tài chính năm nay có thể khá khó khăn, nhưng từ ${getFutureMonthShortVi(5)}, có khả năng cải thiện dần dần.`,
            `Từ ${getFutureMonthShortVi(1)}, tập trung vào quản lý tài chính càng nhiều càng tốt. Việc tạo và thực hành triệt để kế hoạch tiết kiệm là quan trọng.`,
            `Vận tài chính năm nay nên tập trung vào sự ổn định càng nhiều càng tốt thay vì kỳ vọng cao. Từ ${getFutureMonthShortVi(6)}, hãy thận trọng hơn nữa.`,
            `Vào ${getFutureMonthShortVi(7)}, có thể có những khó khăn liên quan đến tài chính. Tuy nhiên, nếu quản lý có hệ thống và với sự kiên nhẫn, bạn có thể vượt qua chúng.`,
            `Vận tài chính năm nay yêu cầu quản lý rất kiên nhẫn. Từ ${getFutureMonthShortVi(8)}, mọi thứ có thể cải thiện dần dần.`,
            `Vào ${getFutureMonthShortVi(9)}, có thể có những thay đổi tích cực liên quan đến tài chính. Tuy nhiên, đừng vội vàng và hãy đưa ra phán đoán rất cẩn thận.`,
            `Vận tài chính năm nay yêu cầu một cách tiếp cận rất thận trọng tổng thể. Từ ${getFutureMonthShortVi(10)}, bạn có thể mong đợi một dòng chảy ổn định hơn.`
          ];
        },
        get id() {
          return [
            `Dari ${getFutureMonthShortId(2)}, Anda perlu pendekatan yang sangat hati-hati terhadap manajemen kekayaan. Anda harus benar-benar menghindari investasi besar atau pengeluaran.`,
            `Keberuntungan kekayaan tahun ini memerlukan pendekatan yang sangat hati-hati. Dari ${getFutureMonthShortId(3)}, manajemen keuangan yang sistematis adalah penting.`,
            `Pada ${getFutureMonthShortId(4)}, kehati-hatian yang sangat tinggi mungkin diperlukan terkait kekayaan. Selama periode ini, Anda harus benar-benar menghindari pengeluaran impulsif.`,
            `Keberuntungan kekayaan tahun ini mungkin cukup sulit, tetapi dari ${getFutureMonthShortId(5)}, ada kemungkinan perbaikan bertahap.`,
            `Dari ${getFutureMonthShortId(1)}, fokus pada manajemen kekayaan sebanyak mungkin. Penting untuk membuat dan mempraktikkan secara menyeluruh rencana tabungan.`,
            `Keberuntungan kekayaan tahun ini lebih baik difokuskan pada stabilitas sebanyak mungkin daripada ekspektasi tinggi. Dari ${getFutureMonthShortId(6)}, lebih berhati-hati lagi.`,
            `Pada ${getFutureMonthShortId(7)}, mungkin ada kesulitan terkait kekayaan. Namun, jika dikelola secara sistematis dan dengan kesabaran, Anda dapat mengatasinya.`,
            `Keberuntungan kekayaan tahun ini memerlukan manajemen yang sangat sabar. Dari ${getFutureMonthShortId(8)}, hal-hal dapat membaik secara bertahap.`,
            `Pada ${getFutureMonthShortId(9)}, mungkin ada perubahan positif terkait kekayaan. Namun, jangan terburu-buru dan buat penilaian yang sangat hati-hati.`,
            `Keberuntungan kekayaan tahun ini memerlukan pendekatan sangat hati-hati secara keseluruhan. Dari ${getFutureMonthShortId(10)}, Anda dapat mengharapkan aliran yang lebih stabil.`
          ];
        }
      },
      health: {
        ko: [
          `${getFutureMonthShort(2)}부터 건강 관리에 최대한 주의를 기울여야 할 시기입니다. 정기적인 건강 검진을 필수로 받아야 합니다.`,
          `올해 건강운은 매우 신중한 관리가 필요합니다. ${getFutureMonthShort(3)}부터는 생활 습관 개선에 집중하시기 바랍니다.`,
          `${getFutureMonthShort(4)}에 건강 관련 어려움이 있을 수 있습니다. 하지만 꾸준한 관리와 전문가의 도움으로 극복할 수 있습니다.`,
          `올해 건강운은 주기적이고 철저한 관심이 필요합니다. ${getFutureMonthShort(5)}부터는 더욱 신경 쓰시기 바랍니다.`,
          `${getFutureMonthShort(1)}부터 건강 관리를 매우 철저히 하시기 바랍니다. 작은 증상이라도 절대 무시하지 않는 것이 중요합니다.`,
          `올해 건강운은 꾸준하고 체계적인 관리가 필요합니다. ${getFutureMonthShort(6)}부터는 더 큰 개선을 기대할 수 있을 것입니다.`,
          `${getFutureMonthShort(7)}에 건강 관련 큰 주의가 필요할 수 있습니다. 이 시기에는 충분한 휴식과 회복, 그리고 전문가 상담이 중요합니다.`,
          `올해 건강운은 많은 인내심을 가지고 관리하는 것이 매우 중요합니다. ${getFutureMonthShort(8)}부터는 조금씩 개선될 수 있을 것입니다.`,
          `${getFutureMonthShort(9)}에 건강 관련 긍정적인 변화가 있을 수 있습니다. 하지만 계속해서 관리에 더욱 신경 쓰시기 바랍니다.`,
          `올해 건강운은 전반적으로 매우 신중하고 체계적인 관리가 필요합니다. ${getFutureMonthShort(10)}부터는 더 안정적인 상태를 기대할 수 있습니다.`
        ],
        get en() {
          return [
            `From ${getFutureMonthShortEn(2)}, you need to pay maximum attention to health management. Regular health checkups are essential.`,
            `This year's health fortune requires very careful management. From ${getFutureMonthShortEn(3)}, focus on improving lifestyle habits.`,
            `In ${getFutureMonthShortEn(4)}, there may be difficulties related to health. However, you can overcome them with consistent management and expert help.`,
            `This year's health fortune requires periodic and thorough attention. From ${getFutureMonthShortEn(5)}, pay even more attention.`,
            `From ${getFutureMonthShortEn(1)}, manage your health very thoroughly. It is important not to ignore even small symptoms.`,
            `This year's health fortune requires consistent and systematic management. From ${getFutureMonthShortEn(6)}, you can expect greater improvement.`,
            `In ${getFutureMonthShortEn(7)}, very high caution may be needed regarding health. During this period, sufficient rest and recovery, as well as expert consultation, are important.`,
            `This year's health fortune requires very patient management. From ${getFutureMonthShortEn(8)}, things can improve gradually.`,
            `In ${getFutureMonthShortEn(9)}, there may be positive changes related to health. However, continue to pay even more attention to management.`,
            `This year's health fortune requires overall very cautious and systematic management. From ${getFutureMonthShortEn(10)}, you can expect a more stable condition.`
          ];
        },
        get ja() {
          return [
            `${getFutureMonthShortJa(2)}から健康管理に最大限の注意を払う必要がある時期です。定期的な健康診断を必須で受ける必要があります。`,
            `今年の健康運は非常に慎重な管理が必要です。${getFutureMonthShortJa(3)}からは生活習慣の改善に集中することをお勧めします。`,
            `${getFutureMonthShortJa(4)}に健康に関する困難があるかもしれません。しかし、継続的な管理と専門家の助けで克服できます。`,
            `今年の健康運は定期的で徹底的な関心が必要です。${getFutureMonthShortJa(5)}からはさらに神経を使うことをお勧めします。`,
            `${getFutureMonthShortJa(1)}から健康管理を非常に徹底することをお勧めします。小さな症状でも絶対に無視しないことが重要です。`,
            `今年の健康運は一貫した体系的な管理が必要です。${getFutureMonthShortJa(6)}からはより大きな改善が期待できるでしょう。`,
            `${getFutureMonthShortJa(7)}に健康に関する非常に高い注意が必要かもしれません。この時期には十分な休息と回復、そして専門家の相談が重要です。`,
            `今年の健康運は非常に忍耐を持って管理することが非常に重要です。${getFutureMonthShortJa(8)}からは少しずつ改善する可能性があります。`,
            `${getFutureMonthShortJa(9)}に健康に関する前向きな変化があるかもしれません。しかし、継続して管理により神経を使うことをお勧めします。`,
            `今年の健康運は全体的に非常に慎重で体系的な管理が必要です。${getFutureMonthShortJa(10)}からはより安定した状態を期待できるでしょう。`
          ];
        },
        get 'zh-CN'() {
          return [
            `从${getFutureMonthShortZhCN(2)}开始，你需要最大程度关注健康管理。定期健康检查是必不可少的。`,
            `今年的健康运需要非常谨慎管理。从${getFutureMonthShortZhCN(3)}开始，专注于改善生活习惯。`,
            `在${getFutureMonthShortZhCN(4)}，可能会有与健康相关的困难。但通过持续管理和专家帮助，你可以克服它们。`,
            `今年的健康运需要定期和彻底关注。从${getFutureMonthShortZhCN(5)}开始，需要更加注意。`,
            `从${getFutureMonthShortZhCN(1)}开始，非常彻底地管理健康。即使是很小的症状也不要忽视，这很重要。`,
            `今年的健康运需要持续和系统的管理。从${getFutureMonthShortZhCN(6)}开始，可以期待更大的改善。`,
            `在${getFutureMonthShortZhCN(7)}，可能需要关于健康的极高谨慎。在这个时期，充分的休息和恢复，以及专家咨询很重要。`,
            `今年的健康运需要非常耐心的管理。从${getFutureMonthShortZhCN(8)}开始，情况可以逐步改善。`,
            `在${getFutureMonthShortZhCN(9)}，可能会有与健康相关的积极变化。但要继续更加注意管理。`,
            `今年的健康运需要整体非常谨慎和系统的管理。从${getFutureMonthShortZhCN(10)}开始，你可以期待更稳定的状态。`
          ];
        },
        get 'zh-TW'() {
          return [
            `從${getFutureMonthShortZhTW(2)}開始，你需要最大程度關注健康管理。定期健康檢查是必不可少的。`,
            `今年的健康運需要非常謹慎管理。從${getFutureMonthShortZhTW(3)}開始，專注於改善生活習慣。`,
            `在${getFutureMonthShortZhTW(4)}，可能會有與健康相關的困難。但通過持續管理和專家幫助，你可以克服它們。`,
            `今年的健康運需要定期和徹底關注。從${getFutureMonthShortZhTW(5)}開始，需要更加注意。`,
            `從${getFutureMonthShortZhTW(1)}開始，非常徹底地管理健康。即使是很小的症狀也不要忽視，這很重要。`,
            `今年的健康運需要持續和系統的管理。從${getFutureMonthShortZhTW(6)}開始，可以期待更大的改善。`,
            `在${getFutureMonthShortZhTW(7)}，可能需要關於健康的極高謹慎。在這個時期，充分的休息和恢復，以及專家諮詢很重要。`,
            `今年的健康運需要非常耐心的管理。從${getFutureMonthShortZhTW(8)}開始，情況可以逐步改善。`,
            `在${getFutureMonthShortZhTW(9)}，可能會有與健康相關的積極變化。但要繼續更加注意管理。`,
            `今年的健康運需要整體非常謹慎和系統的管理。從${getFutureMonthShortZhTW(10)}開始，你可以期待更穩定的狀態。`
          ];
        },
        get vi() {
          return [
            `Từ ${getFutureMonthShortVi(2)}, bạn cần chú ý tối đa đến quản lý sức khỏe. Khám sức khỏe định kỳ là điều cần thiết.`,
            `Vận sức khỏe năm nay yêu cầu quản lý rất cẩn thận. Từ ${getFutureMonthShortVi(3)}, tập trung vào cải thiện thói quen sinh hoạt.`,
            `Vào ${getFutureMonthShortVi(4)}, có thể có những khó khăn liên quan đến sức khỏe. Tuy nhiên, bạn có thể vượt qua chúng bằng cách quản lý nhất quán và sự giúp đỡ từ chuyên gia.`,
            `Vận sức khỏe năm nay yêu cầu sự quan tâm định kỳ và triệt để. Từ ${getFutureMonthShortVi(5)}, hãy chú ý nhiều hơn nữa.`,
            `Từ ${getFutureMonthShortVi(1)}, quản lý sức khỏe của bạn rất triệt để. Việc không bỏ qua ngay cả những triệu chứng nhỏ là quan trọng.`,
            `Vận sức khỏe năm nay yêu cầu quản lý nhất quán và có hệ thống. Từ ${getFutureMonthShortVi(6)}, bạn có thể mong đợi cải thiện lớn hơn.`,
            `Vào ${getFutureMonthShortVi(7)}, có thể cần thận trọng rất cao về sức khỏe. Trong thời kỳ này, nghỉ ngơi và phục hồi đầy đủ, cũng như tư vấn chuyên gia là quan trọng.`,
            `Vận sức khỏe năm nay yêu cầu quản lý rất kiên nhẫn. Từ ${getFutureMonthShortVi(8)}, mọi thứ có thể cải thiện dần dần.`,
            `Vào ${getFutureMonthShortVi(9)}, có thể có những thay đổi tích cực liên quan đến sức khỏe. Tuy nhiên, hãy tiếp tục chú ý hơn nữa đến quản lý.`,
            `Vận sức khỏe năm nay yêu cầu quản lý rất thận trọng và có hệ thống tổng thể. Từ ${getFutureMonthShortVi(10)}, bạn có thể mong đợi một tình trạng ổn định hơn.`
          ];
        },
        get id() {
          return [
            `Dari ${getFutureMonthShortId(2)}, Anda perlu memperhatikan maksimum manajemen kesehatan. Pemeriksaan kesehatan rutin adalah penting.`,
            `Keberuntungan kesehatan tahun ini memerlukan manajemen yang sangat hati-hati. Dari ${getFutureMonthShortId(3)}, fokus pada peningkatan kebiasaan gaya hidup.`,
            `Pada ${getFutureMonthShortId(4)}, mungkin ada kesulitan terkait kesehatan. Namun, Anda dapat mengatasinya dengan manajemen yang konsisten dan bantuan ahli.`,
            `Keberuntungan kesehatan tahun ini memerlukan perhatian rutin dan menyeluruh. Dari ${getFutureMonthShortId(5)}, perhatikan lebih banyak lagi.`,
            `Dari ${getFutureMonthShortId(1)}, kelola kesehatan Anda sangat menyeluruh. Penting untuk tidak mengabaikan bahkan gejala kecil.`,
            `Keberuntungan kesehatan tahun ini memerlukan manajemen yang konsisten dan sistematis. Dari ${getFutureMonthShortId(6)}, Anda dapat mengharapkan perbaikan yang lebih besar.`,
            `Pada ${getFutureMonthShortId(7)}, kehati-hatian sangat tinggi mungkin diperlukan terkait kesehatan. Selama periode ini, istirahat dan pemulihan yang cukup, serta konsultasi ahli adalah penting.`,
            `Keberuntungan kesehatan tahun ini memerlukan manajemen yang sangat sabar. Dari ${getFutureMonthShortId(8)}, hal-hal dapat membaik secara bertahap.`,
            `Pada ${getFutureMonthShortId(9)}, mungkin ada perubahan positif terkait kesehatan. Namun, teruslah memperhatikan lebih pada manajemen.`,
            `Keberuntungan kesehatan tahun ini memerlukan manajemen sangat hati-hati dan sistematis secara keseluruhan. Dari ${getFutureMonthShortId(10)}, Anda dapat mengharapkan kondisi yang lebih stabil.`
          ];
        }
      },
      love: {
        ko: [
          `${getFutureMonthShort(3)}부터 연애 운에 매우 많은 인내심이 필요한 시기입니다. 서두르지 말고 매우 천천히 나아가는 것이 좋습니다.`,
          `올해 연애운은 많은 인내와 노력이 필요한 시기입니다. ${getFutureMonthShort(4)}부터는 조금씩 개선될 수 있을 것입니다.`,
          `${getFutureMonthShort(2)}에 연애 관련 어려움이 있을 수 있습니다. 하지만 소통과 이해로 극복할 수 있습니다.`,
          `올해 연애운은 꾸준하고 많은 노력이 필요합니다. ${getFutureMonthShort(5)}부터는 더 긍정적인 변화를 기대할 수 있습니다.`,
          `${getFutureMonthShort(1)}부터 연애 운에 매우 신경 쓰시기 바랍니다. 하지만 성급하게 나서는 것은 절대 피하세요.`,
          `올해 연애운은 많은 인내심을 가지고 접근하는 것이 매우 중요합니다. ${getFutureMonthShort(6)}부터는 더 나은 시기를 기대할 수 있습니다.`,
          `${getFutureMonthShort(7)}에 연애 관련 큰 주의가 필요할 수 있습니다. 이 시기에는 상대방과의 소통이 매우 중요합니다.`,
          `올해 연애운은 점진적으로 개선될 수 있습니다. ${getFutureMonthShort(8)}부터는 더 안정적인 관계를 맺을 수 있을 것입니다.`,
          `${getFutureMonthShort(9)}에 연애 관련 긍정적인 전환점이 있을 수 있습니다. 하지만 현실적인 기대를 가지시기 바랍니다.`,
          `올해 연애운은 전반적으로 많은 인내와 소통이 중요한 시기입니다. ${getFutureMonthShort(10)}부터는 더 좋은 결과를 기대할 수 있습니다.`
        ],
        get en() {
          return [
            `From ${getFutureMonthShortEn(3)}, very much patience is needed in love fortune. It is good not to rush and proceed very slowly.`,
            `This year's love fortune is a period requiring much patience and effort. From ${getFutureMonthShortEn(4)}, things can improve gradually.`,
            `In ${getFutureMonthShortEn(2)}, there may be difficulties related to love. However, you can overcome them through communication and understanding.`,
            `This year's love fortune requires consistent and much effort. From ${getFutureMonthShortEn(5)}, you can expect more positive changes.`,
            `From ${getFutureMonthShortEn(1)}, pay very much attention to love fortune. However, you must absolutely avoid acting hastily.`,
            `This year's love fortune is very important to approach with much patience. From ${getFutureMonthShortEn(6)}, you can expect better times.`,
            `In ${getFutureMonthShortEn(7)}, very high caution may be needed regarding love. During this period, communication with your partner is very important.`,
            `This year's love fortune can improve gradually. From ${getFutureMonthShortEn(8)}, you can establish more stable relationships.`,
            `In ${getFutureMonthShortEn(9)}, there may be a positive turning point related to love. However, have realistic expectations.`,
            `This year's love fortune is overall a period where much patience and communication are important. From ${getFutureMonthShortEn(10)}, you can expect better results.`
          ];
        },
        get ja() {
          return [
            `${getFutureMonthShortJa(3)}から恋愛運に非常に多くの忍耐が必要な時期です。急がずに非常にゆっくり進むことが良いでしょう。`,
            `今年の恋愛運は多くの忍耐と努力が必要な時期です。${getFutureMonthShortJa(4)}からは少しずつ改善する可能性があります。`,
            `${getFutureMonthShortJa(2)}に恋愛に関する困難があるかもしれません。しかし、コミュニケーションと理解で克服できます。`,
            `今年の恋愛運は一貫した多くの努力が必要です。${getFutureMonthShortJa(5)}からはより前向きな変化が期待できるでしょう。`,
            `${getFutureMonthShortJa(1)}から恋愛運に非常に神経を使うことをお勧めします。しかし、性急に動くことは絶対に避けてください。`,
            `今年の恋愛運は多くの忍耐を持ってアプローチすることが非常に重要です。${getFutureMonthShortJa(6)}からはより良い時期が期待できるでしょう。`,
            `${getFutureMonthShortJa(7)}に恋愛に関する非常に高い注意が必要かもしれません。この時期には相手とのコミュニケーションが非常に重要です。`,
            `今年の恋愛運は段階的に改善可能です。${getFutureMonthShortJa(8)}からはより安定した関係を築けるでしょう。`,
            `${getFutureMonthShortJa(9)}に恋愛に関する前向きな転換点があるかもしれません。しかし、現実的な期待を持つことをお勧めします。`,
            `今年の恋愛運は全体的に多くの忍耐とコミュニケーションが重要な時期です。${getFutureMonthShortJa(10)}からはより良い結果が期待できるでしょう。`
          ];
        },
        get 'zh-CN'() {
          return [
            `从${getFutureMonthShortZhCN(3)}开始，恋爱运需要非常多的耐心。不要匆忙，非常缓慢地前进是好的。`,
            `今年的恋爱运是需要很多耐心和努力的时期。从${getFutureMonthShortZhCN(4)}开始，情况可以逐步改善。`,
            `在${getFutureMonthShortZhCN(2)}，可能会有与恋爱相关的困难。但通过沟通和理解，你可以克服它们。`,
            `今年的恋爱运需要持续和很多努力。从${getFutureMonthShortZhCN(5)}开始，可以期待更积极的变化。`,
            `从${getFutureMonthShortZhCN(1)}开始，非常关注恋爱运。但必须绝对避免仓促行动。`,
            `今年的恋爱运重要的是非常有耐心地对待。从${getFutureMonthShortZhCN(6)}开始，可以期待更好的时期。`,
            `在${getFutureMonthShortZhCN(7)}，可能需要关于恋爱的极高谨慎。在这个时期，与伴侣的沟通非常重要。`,
            `今年的恋爱运可以逐步改善。从${getFutureMonthShortZhCN(8)}开始，你可以建立更稳定的关系。`,
            `在${getFutureMonthShortZhCN(9)}，可能会有与恋爱相关的积极转折点。但要有现实的期望。`,
            `今年的恋爱运整体上是一个很多耐心和沟通都很重要的时期。从${getFutureMonthShortZhCN(10)}开始，可以期待更好的结果。`
          ];
        },
        get 'zh-TW'() {
          return [
            `從${getFutureMonthShortZhTW(3)}開始，戀愛運需要非常多的耐心。不要匆忙，非常緩慢地前進是好的。`,
            `今年的戀愛運是需要很多耐心和努力的時期。從${getFutureMonthShortZhTW(4)}開始，情況可以逐步改善。`,
            `在${getFutureMonthShortZhTW(2)}，可能會有與戀愛相關的困難。但通過溝通和理解，你可以克服它們。`,
            `今年的戀愛運需要持續和很多努力。從${getFutureMonthShortZhTW(5)}開始，可以期待更積極的變化。`,
            `從${getFutureMonthShortZhTW(1)}開始，非常關注戀愛運。但必須絕對避免倉促行動。`,
            `今年的戀愛運重要的是非常有耐心地對待。從${getFutureMonthShortZhTW(6)}開始，可以期待更好的時期。`,
            `在${getFutureMonthShortZhTW(7)}，可能需要關於戀愛的極高謹慎。在這個時期，與伴侶的溝通非常重要。`,
            `今年的戀愛運可以逐步改善。從${getFutureMonthShortZhTW(8)}開始，你可以建立更穩定的關係。`,
            `在${getFutureMonthShortZhTW(9)}，可能會有與戀愛相關的積極轉折點。但要有現實的期望。`,
            `今年的戀愛運整體上是一個很多耐心和溝通都很重要的時期。從${getFutureMonthShortZhTW(10)}開始，可以期待更好的結果。`
          ];
        },
        get vi() {
          return [
            `Từ ${getFutureMonthShortVi(3)}, cần rất nhiều kiên nhẫn trong vận tình yêu. Không nên vội vàng mà tiến lên rất chậm rãi là tốt.`,
            `Vận tình yêu năm nay là thời kỳ cần rất nhiều sự kiên nhẫn và nỗ lực. Từ ${getFutureMonthShortVi(4)}, mọi thứ có thể cải thiện dần dần.`,
            `Vào ${getFutureMonthShortVi(2)}, có thể có những khó khăn liên quan đến tình yêu. Tuy nhiên, bạn có thể vượt qua chúng thông qua giao tiếp và hiểu biết.`,
            `Vận tình yêu năm nay yêu cầu nỗ lực nhất quán và nhiều. Từ ${getFutureMonthShortVi(5)}, bạn có thể mong đợi những thay đổi tích cực hơn.`,
            `Từ ${getFutureMonthShortVi(1)}, hãy rất chú ý đến vận tình yêu. Tuy nhiên, bạn phải tuyệt đối tránh hành động vội vàng.`,
            `Vận tình yêu năm nay, điều rất quan trọng là tiếp cận với rất nhiều kiên nhẫn. Từ ${getFutureMonthShortVi(6)}, bạn có thể mong đợi thời kỳ tốt hơn.`,
            `Vào ${getFutureMonthShortVi(7)}, có thể cần thận trọng rất cao về tình yêu. Trong thời kỳ này, giao tiếp với đối tác của bạn là rất quan trọng.`,
            `Vận tình yêu năm nay có thể cải thiện dần dần. Từ ${getFutureMonthShortVi(8)}, bạn có thể thiết lập các mối quan hệ ổn định hơn.`,
            `Vào ${getFutureMonthShortVi(9)}, có thể có bước ngoặt tích cực liên quan đến tình yêu. Tuy nhiên, hãy có kỳ vọng thực tế.`,
            `Vận tình yêu năm nay nói chung là thời kỳ mà rất nhiều kiên nhẫn và giao tiếp là quan trọng. Từ ${getFutureMonthShortVi(10)}, bạn có thể mong đợi kết quả tốt hơn.`
          ];
        },
        get id() {
          return [
            `Dari ${getFutureMonthShortId(3)}, sangat banyak kesabaran diperlukan dalam keberuntungan cinta. Baik untuk tidak terburu-buru dan melanjutkan sangat perlahan.`,
            `Keberuntungan cinta tahun ini adalah periode yang memerlukan banyak kesabaran dan upaya. Dari ${getFutureMonthShortId(4)}, hal-hal dapat membaik secara bertahap.`,
            `Pada ${getFutureMonthShortId(2)}, mungkin ada kesulitan terkait cinta. Namun, Anda dapat mengatasinya melalui komunikasi dan pemahaman.`,
            `Keberuntungan cinta tahun ini memerlukan upaya yang konsisten dan banyak. Dari ${getFutureMonthShortId(5)}, Anda dapat mengharapkan perubahan yang lebih positif.`,
            `Dari ${getFutureMonthShortId(1)}, perhatikan sangat pada keberuntungan cinta. Namun, Anda harus benar-benar menghindari bertindak tergesa-gesa.`,
            `Keberuntungan cinta tahun ini sangat penting untuk didekati dengan banyak kesabaran. Dari ${getFutureMonthShortId(6)}, Anda dapat mengharapkan waktu yang lebih baik.`,
            `Pada ${getFutureMonthShortId(7)}, kehati-hatian sangat tinggi mungkin diperlukan terkait cinta. Selama periode ini, komunikasi dengan pasangan Anda adalah sangat penting.`,
            `Keberuntungan cinta tahun ini dapat membaik secara bertahap. Dari ${getFutureMonthShortId(8)}, Anda dapat membangun hubungan yang lebih stabil.`,
            `Pada ${getFutureMonthShortId(9)}, mungkin ada titik balik positif terkait cinta. Namun, miliki ekspektasi yang realistis.`,
            `Keberuntungan cinta tahun ini secara keseluruhan adalah periode di mana banyak kesabaran dan komunikasi adalah penting. Dari ${getFutureMonthShortId(10)}, Anda dapat mengharapkan hasil yang lebih baik.`
          ];
        }
      },
      business: {
        ko: [
          `${getFutureMonthShort(3)}부터 사업운에 매우 신중한 접근이 필요한 시기입니다. 큰 결정은 매우 천천히 신중하게 내리는 것이 좋습니다.`,
          `올해 사업운은 매우 신중한 계획과 실행이 필요합니다. ${getFutureMonthShort(4)}부터는 점진적으로 나아갈 수 있을 것입니다.`,
          `${getFutureMonthShort(2)}에 사업 관련 어려움이 있을 수 있습니다. 하지만 인내심과 전략으로 극복할 수 있습니다.`,
          `올해 사업운은 꾸준하고 많은 노력이 필요합니다. ${getFutureMonthShort(5)}부터는 더 긍정적인 변화를 기대할 수 있습니다.`,
          `${getFutureMonthShort(1)}부터 사업 계획에 매우 신경 쓰시기 바랍니다. 현실적인 목표 설정이 매우 중요합니다.`,
          `올해 사업운은 많은 인내심을 가지고 접근하는 것이 매우 중요합니다. ${getFutureMonthShort(6)}부터는 더 나은 시기를 기대할 수 있습니다.`,
          `${getFutureMonthShort(7)}에 사업 관련 큰 주의가 필요할 수 있습니다. 이 시기에는 무리한 확장은 절대 피하는 것이 좋습니다.`,
          `올해 사업운은 점진적으로 개선될 수 있습니다. ${getFutureMonthShort(8)}부터는 더 안정적인 흐름을 기대할 수 있을 것입니다.`,
          `${getFutureMonthShort(9)}에 사업 관련 긍정적인 전환점이 있을 수 있습니다. 하지만 매우 신중하게 판단하고 접근하시기 바랍니다.`,
          `올해 사업운은 전반적으로 매우 신중한 접근과 많은 인내가 필요한 시기입니다. ${getFutureMonthShort(10)}부터는 더 좋은 결과를 기대할 수 있습니다.`
        ],
        get en() {
          return [
            `From ${getFutureMonthShortEn(3)}, a very cautious approach to business fortune is needed. It is good to make important decisions very slowly and carefully.`,
            `This year's business fortune requires very careful planning and execution. From ${getFutureMonthShortEn(4)}, you can move forward gradually.`,
            `In ${getFutureMonthShortEn(2)}, there may be difficulties related to business. However, you can overcome them with patience and strategy.`,
            `This year's business fortune requires consistent and much effort. From ${getFutureMonthShortEn(5)}, you can expect more positive changes.`,
            `From ${getFutureMonthShortEn(1)}, pay very much attention to business planning. Setting realistic goals is very important.`,
            `This year's business fortune is very important to approach with much patience. From ${getFutureMonthShortEn(6)}, you can expect better times.`,
            `In ${getFutureMonthShortEn(7)}, very high caution may be needed regarding business. During this period, it is good to absolutely avoid excessive expansion.`,
            `This year's business fortune can improve gradually. From ${getFutureMonthShortEn(8)}, you can expect a more stable flow.`,
            `In ${getFutureMonthShortEn(9)}, there may be a positive turning point related to business. However, make very careful judgments and approach cautiously.`,
            `This year's business fortune is overall a period where very cautious approach and much patience are needed. From ${getFutureMonthShortEn(10)}, you can expect better results.`
          ];
        },
        get ja() {
          return [
            `${getFutureMonthShortJa(3)}から事業運に非常に慎重なアプローチが必要な時期です。大きな決定は非常にゆっくり慎重に下すことが良いでしょう。`,
            `今年の事業運は非常に慎重な計画と実行が必要です。${getFutureMonthShortJa(4)}からは段階的に進むことができます。`,
            `${getFutureMonthShortJa(2)}に事業に関する困難があるかもしれません。しかし、忍耐と戦略で克服できます。`,
            `今年の事業運は一貫した多くの努力が必要です。${getFutureMonthShortJa(5)}からはより前向きな変化が期待できるでしょう。`,
            `${getFutureMonthShortJa(1)}から事業計画に非常に神経を使うことをお勧めします。現実的な目標設定が非常に重要です。`,
            `今年の事業運は多くの忍耐を持ってアプローチすることが非常に重要です。${getFutureMonthShortJa(6)}からはより良い時期が期待できるでしょう。`,
            `${getFutureMonthShortJa(7)}に事業に関する非常に高い注意が必要かもしれません。この時期には無理な拡張は絶対に避けることが良いでしょう。`,
            `今年の事業運は段階的に改善可能です。${getFutureMonthShortJa(8)}からはより安定した流れが期待できるでしょう。`,
            `${getFutureMonthShortJa(9)}に事業に関する前向きな転換点があるかもしれません。しかし、非常に慎重に判断し慎重にアプローチすることをお勧めします。`,
            `今年の事業運は全体的に非常に慎重なアプローチと多くの忍耐が必要な時期です。${getFutureMonthShortJa(10)}からはより良い結果が期待できるでしょう。`
          ];
        },
        get 'zh-CN'() {
          return [
            `从${getFutureMonthShortZhCN(3)}开始，需要非常谨慎地对待事业运。非常缓慢仔细地做重要决定是好的。`,
            `今年的事业运需要非常谨慎的计划和执行。从${getFutureMonthShortZhCN(4)}开始，你可以逐步前进。`,
            `在${getFutureMonthShortZhCN(2)}，可能会有与商业相关困难。但通过耐心和策略，你可以克服它们。`,
            `今年的事业运需要持续和很多努力。从${getFutureMonthShortZhCN(5)}开始，可以期待更积极的变化。`,
            `从${getFutureMonthShortZhCN(1)}开始，非常关注商业计划。设定现实目标非常重要。`,
            `今年的事业运重要的是非常有耐心地对待。从${getFutureMonthShortZhCN(6)}开始，可以期待更好的时期。`,
            `在${getFutureMonthShortZhCN(7)}，可能需要关于商业的极高谨慎。在这个时期，绝对避免过度扩张是好的。`,
            `今年的事业运可以逐步改善。从${getFutureMonthShortZhCN(8)}开始，可以期待更稳定的流动。`,
            `在${getFutureMonthShortZhCN(9)}，可能会有与商业相关的积极转折点。但要非常仔细判断并谨慎对待。`,
            `今年的事业运整体上是一个需要非常谨慎方法和很多耐心的时期。从${getFutureMonthShortZhCN(10)}开始，可以期待更好的结果。`
          ];
        },
        get 'zh-TW'() {
          return [
            `從${getFutureMonthShortZhTW(3)}開始，需要非常謹慎地對待事業運。非常緩慢仔細地做重要決定是好的。`,
            `今年的事業運需要非常謹慎的計畫和執行。從${getFutureMonthShortZhTW(4)}開始，你可以逐步前進。`,
            `在${getFutureMonthShortZhTW(2)}，可能會有與商業相關困難。但通過耐心和策略，你可以克服它們。`,
            `今年的事業運需要持續和很多努力。從${getFutureMonthShortZhTW(5)}開始，可以期待更積極的變化。`,
            `從${getFutureMonthShortZhTW(1)}開始，非常關注商業計畫。設定現實目標非常重要。`,
            `今年的事業運重要的是非常有耐心地對待。從${getFutureMonthShortZhTW(6)}開始，可以期待更好的時期。`,
            `在${getFutureMonthShortZhTW(7)}，可能需要關於商業的極高謹慎。在這個時期，絕對避免過度擴張是好的。`,
            `今年的事業運可以逐步改善。從${getFutureMonthShortZhTW(8)}開始，可以期待更穩定的流動。`,
            `在${getFutureMonthShortZhTW(9)}，可能會有與商業相關的積極轉折點。但要非常仔細判斷並謹慎對待。`,
            `今年的事業運整體上是一個需要非常謹慎方法和很多耐心的時期。從${getFutureMonthShortZhTW(10)}開始，可以期待更好的結果。`
          ];
        },
        get vi() {
          return [
            `Từ ${getFutureMonthShortVi(3)}, cần tiếp cận rất thận trọng với vận kinh doanh. Nên đưa ra quyết định quan trọng một cách rất chậm rãi và cẩn thận.`,
            `Vận kinh doanh năm nay yêu cầu kế hoạch và thực hiện rất cẩn thận. Từ ${getFutureMonthShortVi(4)}, bạn có thể tiến lên dần dần.`,
            `Vào ${getFutureMonthShortVi(2)}, có thể có những khó khăn liên quan đến kinh doanh. Tuy nhiên, bạn có thể vượt qua chúng bằng sự kiên nhẫn và chiến lược.`,
            `Vận kinh doanh năm nay yêu cầu nỗ lực nhất quán và nhiều. Từ ${getFutureMonthShortVi(5)}, bạn có thể mong đợi những thay đổi tích cực hơn.`,
            `Từ ${getFutureMonthShortVi(1)}, hãy rất chú ý đến kế hoạch kinh doanh. Việc thiết lập mục tiêu thực tế là rất quan trọng.`,
            `Vận kinh doanh năm nay, điều rất quan trọng là tiếp cận với rất nhiều kiên nhẫn. Từ ${getFutureMonthShortVi(6)}, bạn có thể mong đợi thời kỳ tốt hơn.`,
            `Vào ${getFutureMonthShortVi(7)}, có thể cần thận trọng rất cao về kinh doanh. Trong thời kỳ này, nên tuyệt đối tránh mở rộng quá mức.`,
            `Vận kinh doanh năm nay có thể cải thiện dần dần. Từ ${getFutureMonthShortVi(8)}, bạn có thể mong đợi một dòng chảy ổn định hơn.`,
            `Vào ${getFutureMonthShortVi(9)}, có thể có bước ngoặt tích cực liên quan đến kinh doanh. Tuy nhiên, hãy đưa ra phán đoán rất cẩn thận và tiếp cận một cách thận trọng.`,
            `Vận kinh doanh năm nay nói chung là thời kỳ mà cách tiếp cận rất thận trọng và rất nhiều kiên nhẫn là cần thiết. Từ ${getFutureMonthShortVi(10)}, bạn có thể mong đợi kết quả tốt hơn.`
          ];
        },
        get id() {
          return [
            `Dari ${getFutureMonthShortId(3)}, pendekatan yang sangat hati-hati terhadap keberuntungan bisnis diperlukan. Baik untuk membuat keputusan penting sangat perlahan-lahan dan hati-hati.`,
            `Keberuntungan bisnis tahun ini memerlukan perencanaan dan eksekusi yang sangat hati-hati. Dari ${getFutureMonthShortId(4)}, Anda dapat maju secara bertahap.`,
            `Pada ${getFutureMonthShortId(2)}, mungkin ada kesulitan terkait bisnis. Namun, Anda dapat mengatasinya dengan kesabaran dan strategi.`,
            `Keberuntungan bisnis tahun ini memerlukan upaya yang konsisten dan banyak. Dari ${getFutureMonthShortId(5)}, Anda dapat mengharapkan perubahan yang lebih positif.`,
            `Dari ${getFutureMonthShortId(1)}, perhatikan sangat pada perencanaan bisnis. Menetapkan tujuan yang realistis adalah sangat penting.`,
            `Keberuntungan bisnis tahun ini sangat penting untuk didekati dengan banyak kesabaran. Dari ${getFutureMonthShortId(6)}, Anda dapat mengharapkan waktu yang lebih baik.`,
            `Pada ${getFutureMonthShortId(7)}, kehati-hatian sangat tinggi mungkin diperlukan terkait bisnis. Selama periode ini, baik untuk benar-benar menghindari ekspansi berlebihan.`,
            `Keberuntungan bisnis tahun ini dapat membaik secara bertahap. Dari ${getFutureMonthShortId(8)}, Anda dapat mengharapkan aliran yang lebih stabil.`,
            `Pada ${getFutureMonthShortId(9)}, mungkin ada titik balik positif terkait bisnis. Namun, buat penilaian yang sangat hati-hati dan pendekatan dengan hati-hati.`,
            `Keberuntungan bisnis tahun ini secara keseluruhan adalah periode di mana pendekatan sangat hati-hati dan banyak kesabaran diperlukan. Dari ${getFutureMonthShortId(10)}, Anda dapat mengharapkan hasil yang lebih baik.`
          ];
        }
      },
      study: {
        ko: [
          `${getFutureMonthShort(2)}부터 학업에 매우 집중이 필요한 시기입니다. 꾸준한 노력과 많은 인내심이 매우 중요합니다.`,
          `올해 학업운은 많은 인내와 노력이 필요한 시기입니다. ${getFutureMonthShort(3)}부터는 조금씩 개선될 수 있을 것입니다.`,
          `${getFutureMonthShort(4)}에 학업 관련 어려움이 있을 수 있습니다. 하지만 꾸준한 학습과 전문가의 도움으로 극복할 수 있습니다.`,
          `올해 학업운은 꾸준하고 많은 노력이 필요합니다. ${getFutureMonthShort(5)}부터는 더 긍정적인 변화를 기대할 수 있습니다.`,
          `${getFutureMonthShort(1)}부터 학습 계획에 매우 신경 쓰시기 바랍니다. 현실적인 목표 설정이 매우 중요합니다.`,
          `올해 학업운은 많은 인내심을 가지고 접근하는 것이 매우 중요합니다. ${getFutureMonthShort(6)}부터는 더 나은 시기를 기대할 수 있습니다.`,
          `${getFutureMonthShort(7)}에 학업 관련 큰 주의가 필요할 수 있습니다. 이 시기에는 준비를 매우 철저히 하는 것이 좋습니다.`,
          `올해 학업운은 점진적으로 개선될 수 있습니다. ${getFutureMonthShort(8)}부터는 더 안정적인 성과를 기대할 수 있을 것입니다.`,
          `${getFutureMonthShort(9)}에 학업 관련 긍정적인 전환점이 있을 수 있습니다. 하지만 방심하지 말고 계속 노력하시기 바랍니다.`,
          `올해 학업운은 전반적으로 많은 인내와 꾸준함이 매우 중요한 시기입니다. ${getFutureMonthShort(10)}부터는 더 좋은 결과를 기대할 수 있습니다.`
        ],
        get en() {
          return [
            `From ${getFutureMonthShortEn(2)}, very high focus on studies is needed. Steady effort and much patience are very important.`,
            `This year's study fortune is a period requiring much patience and effort. From ${getFutureMonthShortEn(3)}, things can improve gradually.`,
            `In ${getFutureMonthShortEn(4)}, there may be difficulties related to studies. However, you can overcome them with consistent learning and expert help.`,
            `This year's study fortune requires consistent and much effort. From ${getFutureMonthShortEn(5)}, you can expect more positive changes.`,
            `From ${getFutureMonthShortEn(1)}, pay very much attention to study planning. Setting realistic goals is very important.`,
            `This year's study fortune is very important to approach with much patience. From ${getFutureMonthShortEn(6)}, you can expect better times.`,
            `In ${getFutureMonthShortEn(7)}, very high caution may be needed regarding studies. During this period, it is good to prepare very thoroughly.`,
            `This year's study fortune can improve gradually. From ${getFutureMonthShortEn(8)}, you can expect more stable achievements.`,
            `In ${getFutureMonthShortEn(9)}, there may be a positive turning point related to studies. However, do not let your guard down and keep working.`,
            `This year's study fortune is overall a period where much patience and consistency are very important. From ${getFutureMonthShortEn(10)}, you can expect better results.`
          ];
        },
        get ja() {
          return [
            `${getFutureMonthShortJa(2)}から学業に非常に多くの集中が必要な時期です。着実な努力と多くの忍耐が非常に重要です。`,
            `今年の学業運は多くの忍耐と努力が必要な時期です。${getFutureMonthShortJa(3)}からは少しずつ改善する可能性があります。`,
            `${getFutureMonthShortJa(4)}に学業に関する困難があるかもしれません。しかし、継続的な学習と専門家の助けで克服できます。`,
            `今年の学業運は一貫した多くの努力が必要です。${getFutureMonthShortJa(5)}からはより前向きな変化が期待できるでしょう。`,
            `${getFutureMonthShortJa(1)}から学習計画に非常に神経を使うことをお勧めします。現実的な目標設定が非常に重要です。`,
            `今年の学業運は多くの忍耐を持ってアプローチすることが非常に重要です。${getFutureMonthShortJa(6)}からはより良い時期が期待できるでしょう。`,
            `${getFutureMonthShortJa(7)}に学業に関する非常に高い注意が必要かもしれません。この時期には準備を非常に徹底することが良いでしょう。`,
            `今年の学業運は段階的に改善可能です。${getFutureMonthShortJa(8)}からはより安定した成果が期待できるでしょう。`,
            `${getFutureMonthShortJa(9)}に学業に関する前向きな転換点があるかもしれません。しかし、油断せずに継続して努力することをお勧めします。`,
            `今年の学業運は全体的に多くの忍耐と一貫性が非常に重要な時期です。${getFutureMonthShortJa(10)}からはより良い結果が期待できるでしょう。`
          ];
        },
        get 'zh-CN'() {
          return [
            `从${getFutureMonthShortZhCN(2)}开始，需要非常关注学习。持续努力和很多耐心非常重要。`,
            `今年的学业运是需要很多耐心和努力的时期。从${getFutureMonthShortZhCN(3)}开始，情况可以逐步改善。`,
            `在${getFutureMonthShortZhCN(4)}，可能会有与学习相关的困难。但通过持续学习和专家帮助，你可以克服它们。`,
            `今年的学业运需要持续和很多努力。从${getFutureMonthShortZhCN(5)}开始，可以期待更积极的变化。`,
            `从${getFutureMonthShortZhCN(1)}开始，非常关注学习计划。设定现实目标非常重要。`,
            `今年的学业运重要的是非常有耐心地对待。从${getFutureMonthShortZhCN(6)}开始，可以期待更好的时期。`,
            `在${getFutureMonthShortZhCN(7)}，可能需要关于学习的极高谨慎。在这个时期，非常彻底地准备是好的。`,
            `今年的学业运可以逐步改善。从${getFutureMonthShortZhCN(8)}开始，可以期待更稳定的成就。`,
            `在${getFutureMonthShortZhCN(9)}，可能会有与学习相关的积极转折点。但不要松懈，要继续努力。`,
            `今年的学业运整体上是一个很多耐心和一致性都很重要的时期。从${getFutureMonthShortZhCN(10)}开始，可以期待更好的结果。`
          ];
        },
        get 'zh-TW'() {
          return [
            `從${getFutureMonthShortZhTW(2)}開始，需要非常關注學習。持續努力和很多耐心非常重要。`,
            `今年的學業運是需要很多耐心和努力的時期。從${getFutureMonthShortZhTW(3)}開始，情況可以逐步改善。`,
            `在${getFutureMonthShortZhTW(4)}，可能會有與學習相關的困難。但通過持續學習和專家幫助，你可以克服它們。`,
            `今年的學業運需要持續和很多努力。從${getFutureMonthShortZhTW(5)}開始，可以期待更積極的變化。`,
            `從${getFutureMonthShortZhTW(1)}開始，非常關注學習計畫。設定現實目標非常重要。`,
            `今年的學業運重要的是非常有耐心地對待。從${getFutureMonthShortZhTW(6)}開始，可以期待更好的時期。`,
            `在${getFutureMonthShortZhTW(7)}，可能需要關於學習的極高謹慎。在這個時期，非常徹底地準備是好的。`,
            `今年的學業運可以逐步改善。從${getFutureMonthShortZhTW(8)}開始，可以期待更穩定的成就。`,
            `在${getFutureMonthShortZhTW(9)}，可能會有與學習相關的積極轉折點。但不要鬆懈，要繼續努力。`,
            `今年的學業運整體上是一個很多耐心和一致性都很重要的時期。從${getFutureMonthShortZhTW(10)}開始，可以期待更好的結果。`
          ];
        },
        get vi() {
          return [
            `Từ ${getFutureMonthShortVi(2)}, cần tập trung rất cao vào học tập. Nỗ lực ổn định và rất nhiều kiên nhẫn là rất quan trọng.`,
            `Vận học tập năm nay là thời kỳ cần rất nhiều sự kiên nhẫn và nỗ lực. Từ ${getFutureMonthShortVi(3)}, mọi thứ có thể cải thiện dần dần.`,
            `Vào ${getFutureMonthShortVi(4)}, có thể có những khó khăn liên quan đến học tập. Tuy nhiên, bạn có thể vượt qua chúng bằng cách học tập nhất quán và sự giúp đỡ từ chuyên gia.`,
            `Vận học tập năm nay yêu cầu nỗ lực nhất quán và nhiều. Từ ${getFutureMonthShortVi(5)}, bạn có thể mong đợi những thay đổi tích cực hơn.`,
            `Từ ${getFutureMonthShortVi(1)}, hãy rất chú ý đến kế hoạch học tập. Việc thiết lập mục tiêu thực tế là rất quan trọng.`,
            `Vận học tập năm nay, điều rất quan trọng là tiếp cận với rất nhiều kiên nhẫn. Từ ${getFutureMonthShortVi(6)}, bạn có thể mong đợi thời kỳ tốt hơn.`,
            `Vào ${getFutureMonthShortVi(7)}, có thể cần thận trọng rất cao về học tập. Trong thời kỳ này, nên chuẩn bị rất kỹ lưỡng.`,
            `Vận học tập năm nay có thể cải thiện dần dần. Từ ${getFutureMonthShortVi(8)}, bạn có thể mong đợi thành tựu ổn định hơn.`,
            `Vào ${getFutureMonthShortVi(9)}, có thể có bước ngoặt tích cực liên quan đến học tập. Tuy nhiên, đừng để mất cảnh giác và hãy tiếp tục làm việc.`,
            `Vận học tập năm nay nói chung là thời kỳ mà rất nhiều kiên nhẫn và tính nhất quán là rất quan trọng. Từ ${getFutureMonthShortVi(10)}, bạn có thể mong đợi kết quả tốt hơn.`
          ];
        },
        get id() {
          return [
            `Dari ${getFutureMonthShortId(2)}, fokus sangat tinggi pada studi diperlukan. Upaya stabil dan banyak kesabaran adalah sangat penting.`,
            `Keberuntungan studi tahun ini adalah periode yang memerlukan banyak kesabaran dan upaya. Dari ${getFutureMonthShortId(3)}, hal-hal dapat membaik secara bertahap.`,
            `Pada ${getFutureMonthShortId(4)}, mungkin ada kesulitan terkait studi. Namun, Anda dapat mengatasinya dengan pembelajaran yang konsisten dan bantuan ahli.`,
            `Keberuntungan studi tahun ini memerlukan upaya yang konsisten dan banyak. Dari ${getFutureMonthShortId(5)}, Anda dapat mengharapkan perubahan yang lebih positif.`,
            `Dari ${getFutureMonthShortId(1)}, perhatikan sangat pada perencanaan studi. Menetapkan tujuan yang realistis adalah sangat penting.`,
            `Keberuntungan studi tahun ini sangat penting untuk didekati dengan banyak kesabaran. Dari ${getFutureMonthShortId(6)}, Anda dapat mengharapkan waktu yang lebih baik.`,
            `Pada ${getFutureMonthShortId(7)}, kehati-hatian sangat tinggi mungkin diperlukan terkait studi. Selama periode ini, baik untuk mempersiapkan sangat teliti.`,
            `Keberuntungan studi tahun ini dapat membaik secara bertahap. Dari ${getFutureMonthShortId(8)}, Anda dapat mengharapkan pencapaian yang lebih stabil.`,
            `Pada ${getFutureMonthShortId(9)}, mungkin ada titik balik positif terkait studi. Namun, jangan lengah dan teruslah bekerja.`,
            `Keberuntungan studi tahun ini secara keseluruhan adalah periode di mana banyak kesabaran dan konsistensi adalah sangat penting. Dari ${getFutureMonthShortId(10)}, Anda dapat mengharapkan hasil yang lebih baik.`
          ];
        }
      },
      goodTime: {
        ko: [
          `${getFutureMonthShort(3)}부터는 많은 인내의 시기가 시작됩니다. 매우 천천히 준비하고 기다리시기 바랍니다.`,
          `${getFutureMonthShort(5)}부터 ${getFutureMonthShort(7)}까지는 회복과 준비의 시기입니다. 이 기간을 매우 잘 활용하시기 바랍니다.`,
          `${getFutureMonthShort(8)}부터는 전반적으로 운세가 개선될 가능성이 있습니다. 이 시기를 준비하는 것이 매우 중요합니다.`,
          `${getFutureMonthShort(4)}에 특히 많은 인내심을 기르는 좋은 시기가 됩니다. 이 시기에는 자기계발에 집중하세요.`,
          `${getFutureMonthShort(6)}은 전환점이 될 수 있는 시기입니다. 어려움을 극복하면 더 큰 발전이 가능합니다.`,
          `${getFutureMonthShort(2)}부터 ${getFutureMonthShort(4)}까지는 준비와 기다림의 시기입니다. 하지만 ${getFutureMonthShort(5)}부터는 나아질 것입니다.`,
          `${getFutureMonthShort(9)}과 ${getFutureMonthShort(10)}은 많은 인내와 노력으로 작은 성과를 거둘 수 있는 시기입니다.`,
          `전체적으로 올해는 많은 인내와 회복의 시기입니다. 특히 ${getFutureMonthShort(5)}, ${getFutureMonthShort(8)}는 더욱 중요한 시기입니다.`,
          `${getFutureMonthShort(11)}에 전반적으로 운세가 개선될 가능성이 있습니다. 이 시기에는 긍정적인 변화를 기대할 수 있습니다.`,
          `올해는 많은 어려움이 있지만 극복 가능한 해입니다. 특히 ${getFutureMonthShort(6)}, ${getFutureMonthShort(9)}는 더욱 중요한 시기입니다.`
        ],
        get en() {
          return [
            `From ${getFutureMonthShortEn(3)}, a period of much patience will begin. Prepare very slowly and wait patiently.`,
            `From ${getFutureMonthShortEn(5)} to ${getFutureMonthShortEn(7)} is a period of recovery and preparation. Make very good use of this period.`,
            `From ${getFutureMonthShortEn(8)}, there is a possibility that overall fortune will improve. It is very important to prepare for this period.`,
            `In ${getFutureMonthShortEn(4)}, it becomes an especially good time to cultivate much patience. During this period, focus on self-development.`,
            `${getFutureMonthShortEn(6)} is a period that can be a turning point. If you overcome difficulties, greater development is possible.`,
            `From ${getFutureMonthShortEn(2)} to ${getFutureMonthShortEn(4)} is a period of preparation and waiting. However, from ${getFutureMonthShortEn(5)}, things will improve.`,
            `${getFutureMonthShortEn(9)} and ${getFutureMonthShortEn(10)} are periods when you can achieve small results with much patience and effort.`,
            `Overall, this year is a period of much patience and recovery. Especially ${getFutureMonthShortEn(5)} and ${getFutureMonthShortEn(8)} are even more important periods.`,
            `In ${getFutureMonthShortEn(11)}, there is a possibility that overall fortune will improve. During this period, you can expect positive changes.`,
            `This year is difficult but overcomeable with many difficulties. Especially ${getFutureMonthShortEn(6)} and ${getFutureMonthShortEn(9)} are even more important periods.`
          ];
        },
        get ja() {
          return [
            `${getFutureMonthShortJa(3)}から多くの忍耐の時期が始まります。非常にゆっくり準備して待つことをお勧めします。`,
            `${getFutureMonthShortJa(5)}から${getFutureMonthShortJa(7)}まで回復と準備の時期です。この期間を非常に良く活用することをお勧めします。`,
            `${getFutureMonthShortJa(8)}からは全体的に運勢が改善する可能性があります。この時期を準備することが非常に重要です。`,
            `${getFutureMonthShortJa(4)}に特に多くの忍耐を育てる良い時期になります。この時期には自己啓発に集中してください。`,
            `${getFutureMonthShortJa(6)}は転換点になることができる時期です。困難を克服すればより大きな発展が可能です。`,
            `${getFutureMonthShortJa(2)}から${getFutureMonthShortJa(4)}まで準備と待機の時期です。しかし${getFutureMonthShortJa(5)}からは良くなるでしょう。`,
            `${getFutureMonthShortJa(9)}と${getFutureMonthShortJa(10)}は多くの忍耐と努力で小さな成果を収めることができる時期です。`,
            `全体的に今年は多くの忍耐と回復の時期です。特に${getFutureMonthShortJa(5)}と${getFutureMonthShortJa(8)}はさらに重要な時期です。`,
            `${getFutureMonthShortJa(11)}に全体的に運勢が改善する可能性があります。この時期には前向きな変化が期待できるでしょう。`,
            `今年は多くの困難があるが克服可能な年です。特に${getFutureMonthShortJa(6)}と${getFutureMonthShortJa(9)}はさらに重要な時期です。`
          ];
        },
        get 'zh-CN'() {
          return [
            `从${getFutureMonthShortZhCN(3)}开始，很多耐心时期将开始。非常缓慢地准备，耐心等待。`,
            `从${getFutureMonthShortZhCN(5)}到${getFutureMonthShortZhCN(7)}是恢复和准备的时期。非常好好地利用这个时期。`,
            `从${getFutureMonthShortZhCN(8)}开始，整体运势有改善的可能性。准备这个时期非常重要。`,
            `${getFutureMonthShortZhCN(4)}是培养很多耐心的好时机。在这个时期，专注于自我发展。`,
            `${getFutureMonthShortZhCN(6)}是可以成为转折点的时期。如果你克服困难，更大的发展是可能的。`,
            `从${getFutureMonthShortZhCN(2)}到${getFutureMonthShortZhCN(4)}是准备和等待的时期。但从${getFutureMonthShortZhCN(5)}开始，情况会改善。`,
            `${getFutureMonthShortZhCN(9)}和${getFutureMonthShortZhCN(10)}是通过很多耐心和努力可以取得小成果的时期。`,
            `整体而言，今年是很多耐心和恢复的时期。特别是${getFutureMonthShortZhCN(5)}和${getFutureMonthShortZhCN(8)}是更重要的时期。`,
            `${getFutureMonthShortZhCN(11)}整体运势有改善的可能性。在这个时期，你可以期待积极的变化。`,
            `今年是有很多困难但可克服的。特别是${getFutureMonthShortZhCN(6)}和${getFutureMonthShortZhCN(9)}是更重要的时期。`
          ];
        },
        get 'zh-TW'() {
          return [
            `從${getFutureMonthShortZhTW(3)}開始，很多耐心時期將開始。非常緩慢地準備，耐心等待。`,
            `從${getFutureMonthShortZhTW(5)}到${getFutureMonthShortZhTW(7)}是恢復和準備的時期。非常好好地利用這個時期。`,
            `從${getFutureMonthShortZhTW(8)}開始，整體運勢有改善的可能性。準備這個時期非常重要。`,
            `${getFutureMonthShortZhTW(4)}是培養很多耐心的好時機。在這個時期，專注於自我發展。`,
            `${getFutureMonthShortZhTW(6)}是可以成為轉折點的時期。如果你克服困難，更大的發展是可能的。`,
            `從${getFutureMonthShortZhTW(2)}到${getFutureMonthShortZhTW(4)}是準備和等待的時期。但從${getFutureMonthShortZhTW(5)}開始，情況會改善。`,
            `${getFutureMonthShortZhTW(9)}和${getFutureMonthShortZhTW(10)}是通過很多耐心和努力可以取得小成果的時期。`,
            `整體而言，今年是很多耐心和恢復的時期。特別是${getFutureMonthShortZhTW(5)}和${getFutureMonthShortZhTW(8)}是更重要的時期。`,
            `${getFutureMonthShortZhTW(11)}整體運勢有改善的可能性。在這個時期，你可以期待積極的變化。`,
            `今年是有很多困難但可克服的。特別是${getFutureMonthShortZhTW(6)}和${getFutureMonthShortZhTW(9)}是更重要的時期。`
          ];
        },
        get vi() {
          return [
            `Từ ${getFutureMonthShortVi(3)}, thời kỳ rất nhiều kiên nhẫn sẽ bắt đầu. Chuẩn bị rất chậm rãi và chờ đợi một cách kiên nhẫn.`,
            `Từ ${getFutureMonthShortVi(5)} đến ${getFutureMonthShortVi(7)} là thời kỳ phục hồi và chuẩn bị. Hãy tận dụng rất tốt thời kỳ này.`,
            `Từ ${getFutureMonthShortVi(8)}, có khả năng vận may tổng thể sẽ cải thiện. Việc chuẩn bị cho thời kỳ này là rất quan trọng.`,
            `Vào ${getFutureMonthShortVi(4)}, nó trở thành thời điểm đặc biệt tốt để nuôi dưỡng rất nhiều kiên nhẫn. Trong thời kỳ này, hãy tập trung vào phát triển bản thân.`,
            `${getFutureMonthShortVi(6)} là thời kỳ có thể trở thành điểm ngoặt. Nếu bạn vượt qua khó khăn, phát triển lớn hơn là có thể.`,
            `Từ ${getFutureMonthShortVi(2)} đến ${getFutureMonthShortVi(4)} là thời kỳ chuẩn bị và chờ đợi. Tuy nhiên, từ ${getFutureMonthShortVi(5)}, mọi thứ sẽ cải thiện.`,
            `${getFutureMonthShortVi(9)} và ${getFutureMonthShortVi(10)} là những thời kỳ bạn có thể đạt được kết quả nhỏ với rất nhiều kiên nhẫn và nỗ lực.`,
            `Nhìn chung, năm nay là thời kỳ rất nhiều kiên nhẫn và phục hồi. Đặc biệt ${getFutureMonthShortVi(5)} và ${getFutureMonthShortVi(8)} là những thời kỳ còn quan trọng hơn.`,
            `Vào ${getFutureMonthShortVi(11)}, có khả năng vận may tổng thể sẽ cải thiện. Trong thời kỳ này, bạn có thể mong đợi những thay đổi tích cực.`,
            `Năm nay khó khăn nhưng có thể vượt qua với nhiều khó khăn. Đặc biệt ${getFutureMonthShortVi(6)} và ${getFutureMonthShortVi(9)} là những thời kỳ còn quan trọng hơn.`
          ];
        },
        get id() {
          return [
            `Dari ${getFutureMonthShortId(3)}, periode banyak kesabaran akan dimulai. Bersiaplah sangat perlahan dan tunggu dengan sabar.`,
            `Dari ${getFutureMonthShortId(5)} hingga ${getFutureMonthShortId(7)} adalah periode pemulihan dan persiapan. Manfaatkan periode ini dengan sangat baik.`,
            `Dari ${getFutureMonthShortId(8)}, ada kemungkinan keberuntungan keseluruhan akan membaik. Sangat penting untuk mempersiapkan periode ini.`,
            `Pada ${getFutureMonthShortId(4)}, ini menjadi waktu yang sangat baik untuk mengembangkan banyak kesabaran. Selama periode ini, fokus pada pengembangan diri.`,
            `${getFutureMonthShortId(6)} adalah periode yang dapat menjadi titik balik. Jika Anda mengatasi kesulitan, perkembangan yang lebih besar dimungkinkan.`,
            `Dari ${getFutureMonthShortId(2)} hingga ${getFutureMonthShortId(4)} adalah periode persiapan dan menunggu. Namun, dari ${getFutureMonthShortId(5)}, hal-hal akan membaik.`,
            `${getFutureMonthShortId(9)} dan ${getFutureMonthShortId(10)} adalah periode ketika Anda dapat mencapai hasil kecil dengan banyak kesabaran dan upaya.`,
            `Secara keseluruhan, tahun ini adalah periode banyak kesabaran dan pemulihan. Terutama ${getFutureMonthShortId(5)} dan ${getFutureMonthShortId(8)} adalah periode yang bahkan lebih penting.`,
            `Pada ${getFutureMonthShortId(11)}, ada kemungkinan keberuntungan keseluruhan akan membaik. Selama periode ini, Anda dapat mengharapkan perubahan positif.`,
            `Tahun ini sulit tapi bisa diatasi dengan banyak kesulitan. Terutama ${getFutureMonthShortId(6)} dan ${getFutureMonthShortId(9)} adalah periode yang bahkan lebih penting.`
          ];
        }
      },
      warning: {
        ko: [
          `${getFutureMonthShort(1)}에는 매우 신중해야 할 시기입니다. 중요한 결정은 매우 천천히 신중하게 내리는 것이 좋습니다.`,
          `${getFutureMonthShort(7)}에는 감정 기복이나 스트레스가 매우 클 수 있습니다. 이 시기에는 절대 무리하지 말고 충분히 휴식하세요.`,
          `${getFutureMonthShort(11)}에는 재물 관련 매우 큰 주의가 필요합니다. 큰 지출이나 투자는 절대 삼가야 합니다.`,
          `${getFutureMonthShort(6)}에는 건강 관리에 최대한 주의를 기울여야 할 시기입니다. 작은 증상이라도 즉시 대응하세요.`,
          `${getFutureMonthShort(9)}에는 인간관계에서 매우 큰 주의가 필요할 수 있습니다. 이 시기에는 소통을 최대한 신경 쓰세요.`,
          `${getFutureMonthShort(2)}에는 사업이나 업무 관련 매우 신중한 접근이 필요합니다. 이 시기에는 성급한 결정을 절대 피하세요.`,
          `${getFutureMonthShort(10)}에는 전반적으로 속도를 최대한 조절해야 할 시기입니다. 무리한 행동은 절대 피해야 합니다.`,
          `${getFutureMonthShort(8)}에는 학업이나 시험 관련 매우 큰 주의가 필요할 수 있습니다. 이 시기에는 준비를 최대한 철저히 하세요.`,
          `${getFutureMonthShort(12)}에는 감정적 스트레스나 피로가 매우 클 수 있습니다. 이 시기에는 반드시 휴식과 회복에 집중하세요.`,
          `전체적으로 올해는 어려운 운세이므로, 항상 매우 신중하게 행동하는 것이 매우 중요합니다. 특히 ${getFutureMonthShort(3)}, ${getFutureMonthShort(8)}, ${getFutureMonthShort(11)}에는 최대한 주의가 필요합니다.`
        ],
        get en() {
          return [
            `In ${getFutureMonthShortEn(1)}, it is a period that requires great caution. It is good to make important decisions very slowly and carefully.`,
            `In ${getFutureMonthShortEn(7)}, there may be very large emotional ups and downs or stress. During this period, you must absolutely not overdo it and rest sufficiently.`,
            `In ${getFutureMonthShortEn(11)}, very high caution is needed regarding wealth. You must absolutely avoid large expenses or investments.`,
            `In ${getFutureMonthShortEn(6)}, it is a period when you need to pay maximum attention to health management. Respond immediately even to small symptoms.`,
            `In ${getFutureMonthShortEn(9)}, there may be a period when you need to be very cautious in relationships. During this period, pay maximum attention to communication.`,
            `In ${getFutureMonthShortEn(2)}, a very cautious approach is needed regarding business or work. During this period, you must absolutely avoid hasty decisions.`,
            `In ${getFutureMonthShortEn(10)}, it is a period when you need to control your speed to the maximum overall. You must absolutely avoid excessive actions.`,
            `In ${getFutureMonthShortEn(8)}, very high caution may be needed regarding studies or exams. During this period, prepare as thoroughly as possible.`,
            `In ${getFutureMonthShortEn(12)}, there may be very large emotional stress or fatigue. During this period, you must focus on rest and recovery.`,
            `Overall, this year has difficult fortune, so it is very important to always act very carefully. Especially in ${getFutureMonthShortEn(3)}, ${getFutureMonthShortEn(8)}, and ${getFutureMonthShortEn(11)}, maximum caution is needed.`
          ];
        },
        get ja() {
          return [
            `${getFutureMonthShortJa(1)}には非常に慎重である必要がある時期です。重要な決定は非常にゆっくり慎重に下すことが良いでしょう。`,
            `${getFutureMonthShortJa(7)}には非常に大きな感情の波やストレスがあるかもしれません。この時期には絶対に無理をせず十分に休息してください。`,
            `${getFutureMonthShortJa(11)}には財運に関する非常に高い注意が必要です。大きな支出や投資は絶対に避けなければなりません。`,
            `${getFutureMonthShortJa(6)}には健康管理に最大限の注意を払う必要がある時期です。小さな症状でもすぐに対応してください。`,
            `${getFutureMonthShortJa(9)}には人間関係で非常に大きな注意が必要な時期があるかもしれません。この時期にはコミュニケーションに最大限神経を使ってください。`,
            `${getFutureMonthShortJa(2)}には事業や業務に関する非常に慎重なアプローチが必要です。この時期には性急な決定を絶対に避けてください。`,
            `${getFutureMonthShortJa(10)}には全体的に速度を最大限調整する必要がある時期です。無理な行動は絶対に避けなければなりません。`,
            `${getFutureMonthShortJa(8)}には学業や試験に関する非常に高い注意が必要かもしれません。この時期には準備を最大限徹底してください。`,
            `${getFutureMonthShortJa(12)}には非常に大きな感情的ストレスや疲労があるかもしれません。この時期には必ず休息と回復に集中してください。`,
            `全体的に今年は困難な運勢なので、常に非常に慎重に行動することが非常に重要です。特に${getFutureMonthShortJa(3)}と${getFutureMonthShortJa(8)}と${getFutureMonthShortJa(11)}には最大限の注意が必要です。`
          ];
        },
        get 'zh-CN'() {
          return [
            `在${getFutureMonthShortZhCN(1)}，这是一个需要非常谨慎的时期。非常缓慢仔细地做重要决定是好的。`,
            `在${getFutureMonthShortZhCN(7)}，可能会有非常大的情绪波动或压力。在这个时期，必须绝对不要过度劳累，要充分休息。`,
            `在${getFutureMonthShortZhCN(11)}，需要关于财富的非常高的谨慎。必须绝对避免大额支出或投资。`,
            `在${getFutureMonthShortZhCN(6)}，这是一个需要最大关注健康管理的时期。即使是很小的症状也要立即应对。`,
            `在${getFutureMonthShortZhCN(9)}，可能需要在人际关系中非常谨慎的时期。在这个时期，要最大程度注意沟通。`,
            `在${getFutureMonthShortZhCN(2)}，需要关于商业或工作的非常谨慎的方法。在这个时期，必须绝对避免仓促决定。`,
            `在${getFutureMonthShortZhCN(10)}，这是一个需要最大程度控制速度的时期。必须绝对避免过度的行动。`,
            `在${getFutureMonthShortZhCN(8)}，可能需要注意学习或考试的非常高的谨慎。在这个时期，要尽可能彻底地准备。`,
            `在${getFutureMonthShortZhCN(12)}，可能会有非常大的情绪压力或疲劳。在这个时期，必须专注于休息和恢复。`,
            `整体而言，今年有困难的运势，所以始终非常谨慎行动是非常重要的。特别是在${getFutureMonthShortZhCN(3)}、${getFutureMonthShortZhCN(8)}和${getFutureMonthShortZhCN(11)}，需要最大程度的谨慎。`
          ];
        },
        get 'zh-TW'() {
          return [
            `在${getFutureMonthShortZhTW(1)}，這是一個需要非常謹慎的時期。非常緩慢仔細地做重要決定是好的。`,
            `在${getFutureMonthShortZhTW(7)}，可能會有非常大的情緒波動或壓力。在這個時期，必須絕對不要過度勞累，要充分休息。`,
            `在${getFutureMonthShortZhTW(11)}，需要關於財富的非常高的謹慎。必須絕對避免大額支出或投資。`,
            `在${getFutureMonthShortZhTW(6)}，這是一個需要最大關注健康管理的時期。即使是很小的症狀也要立即應對。`,
            `在${getFutureMonthShortZhTW(9)}，可能需要在人際關係中非常謹慎的時期。在這個時期，要最大程度注意溝通。`,
            `在${getFutureMonthShortZhTW(2)}，需要關於商業或工作的非常謹慎的方法。在這個時期，必須絕對避免倉促決定。`,
            `在${getFutureMonthShortZhTW(10)}，這是一個需要最大程度控制速度的時期。必須絕對避免過度的行動。`,
            `在${getFutureMonthShortZhTW(8)}，可能需要注意學習或考試的非常高的謹慎。在這個時期，要盡可能徹底地準備。`,
            `在${getFutureMonthShortZhTW(12)}，可能會有非常大的情緒壓力或疲勞。在這個時期，必須專注於休息和恢復。`,
            `整體而言，今年有困難的運勢，所以始終非常謹慎行動是非常重要的。特別是在${getFutureMonthShortZhTW(3)}、${getFutureMonthShortZhTW(8)}和${getFutureMonthShortZhTW(11)}，需要最大程度的謹慎。`
          ];
        },
        get vi() {
          return [
            `Vào ${getFutureMonthShortVi(1)}, đây là thời kỳ cần rất thận trọng. Nên đưa ra quyết định quan trọng một cách rất chậm rãi và cẩn thận.`,
            `Vào ${getFutureMonthShortVi(7)}, có thể có biến động cảm xúc rất lớn hoặc căng thẳng. Trong thời kỳ này, bạn phải tuyệt đối không làm quá sức và nghỉ ngơi đầy đủ.`,
            `Vào ${getFutureMonthShortVi(11)}, cần thận trọng rất cao về tài chính. Bạn phải tuyệt đối tránh các khoản chi lớn hoặc đầu tư.`,
            `Vào ${getFutureMonthShortVi(6)}, đây là thời kỳ bạn cần chú ý tối đa đến quản lý sức khỏe. Hãy phản ứng ngay lập tức ngay cả với những triệu chứng nhỏ.`,
            `Vào ${getFutureMonthShortVi(9)}, có thể có thời kỳ bạn cần rất thận trọng trong các mối quan hệ. Trong thời kỳ này, hãy chú ý tối đa đến giao tiếp.`,
            `Vào ${getFutureMonthShortVi(2)}, cần tiếp cận rất thận trọng về kinh doanh hoặc công việc. Trong thời kỳ này, bạn phải tuyệt đối tránh quyết định vội vàng.`,
            `Vào ${getFutureMonthShortVi(10)}, đây là thời kỳ bạn cần kiểm soát tốc độ tối đa tổng thể. Bạn phải tuyệt đối tránh các hành động quá mức.`,
            `Vào ${getFutureMonthShortVi(8)}, có thể cần thận trọng rất cao về học tập hoặc thi cử. Trong thời kỳ này, hãy chuẩn bị càng kỹ lưỡng càng tốt.`,
            `Vào ${getFutureMonthShortVi(12)}, có thể có căng thẳng cảm xúc rất lớn hoặc mệt mỏi. Trong thời kỳ này, bạn phải tập trung vào nghỉ ngơi và phục hồi.`,
            `Nhìn chung, năm nay có vận may khó khăn, vì vậy luôn hành động rất cẩn thận là rất quan trọng. Đặc biệt vào ${getFutureMonthShortVi(3)}, ${getFutureMonthShortVi(8)} và ${getFutureMonthShortVi(11)}, cần thận trọng tối đa.`
          ];
        },
        get id() {
          return [
            `Pada ${getFutureMonthShortId(1)}, ini adalah periode yang memerlukan sangat kehati-hatian. Baik untuk membuat keputusan penting sangat perlahan-lahan dan hati-hati.`,
            `Pada ${getFutureMonthShortId(7)}, mungkin ada fluktuasi emosional sangat besar atau stres. Selama periode ini, Anda harus benar-benar tidak berlebihan dan beristirahat yang cukup.`,
            `Pada ${getFutureMonthShortId(11)}, kehati-hatian sangat tinggi diperlukan terkait kekayaan. Anda harus benar-benar menghindari pengeluaran besar atau investasi.`,
            `Pada ${getFutureMonthShortId(6)}, ini adalah periode ketika Anda perlu memperhatikan maksimum manajemen kesehatan. Tanggapi segera bahkan gejala kecil.`,
            `Pada ${getFutureMonthShortId(9)}, mungkin ada periode ketika Anda perlu sangat waspada dalam hubungan. Selama periode ini, perhatikan maksimum pada komunikasi.`,
            `Pada ${getFutureMonthShortId(2)}, pendekatan sangat hati-hati diperlukan terkait bisnis atau pekerjaan. Selama periode ini, Anda harus benar-benar menghindari keputusan yang terburu-buru.`,
            `Pada ${getFutureMonthShortId(10)}, ini adalah periode ketika Anda perlu mengontrol kecepatan maksimum secara keseluruhan. Anda harus benar-benar menghindari tindakan yang berlebihan.`,
            `Pada ${getFutureMonthShortId(8)}, kehati-hatian sangat tinggi mungkin diperlukan terkait studi atau ujian. Selama periode ini, persiapkan se teliti mungkin.`,
            `Pada ${getFutureMonthShortId(12)}, mungkin ada stres emosional sangat besar atau kelelahan. Selama periode ini, Anda harus fokus pada istirahat dan pemulihan.`,
            `Secara keseluruhan, tahun ini memiliki keberuntungan yang sulit, jadi selalu bertindak sangat hati-hati adalah sangat penting. Terutama pada ${getFutureMonthShortId(3)}, ${getFutureMonthShortId(8)} dan ${getFutureMonthShortId(11)}, kehati-hatian maksimum diperlukan.`
          ];
        }
      }
    }
  }
];


