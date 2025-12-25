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

// 런타임에 날짜 정보를 포함한 fortune 데이터 생성 함수
function generateWhenFortune(monthsAhead: number[], locales: string[]): Record<string, string[]> {
  const result: Record<string, string[]> = {};
  
  const koItems = monthsAhead.map(m => {
    const month = getFutureMonthShort(m);
    const season = getFutureSeason(m);
    return `${month}에 운명적 인연`;
  });
  
  const enItems = monthsAhead.map(m => {
    const now = new Date();
    const future = new Date(now.getFullYear(), now.getMonth() + m, 1);
    const monthName = future.toLocaleString('en-US', { month: 'long' });
    const year = future.getFullYear();
    const currentYear = now.getFullYear();
    if (year > currentYear) {
      return `Next year ${monthName}`;
    }
    return `This ${monthName}`;
  });
  
  // 한국어만 먼저 구현, 나머지는 나중에 추가
  result.ko = koItems;
  result.en = enItems;
  
  return result;
}

function generateWarningFortune(monthsAhead: number[], locales: string[]): Record<string, string[]> {
  const result: Record<string, string[]> = {};
  
  const koItems = monthsAhead.map(m => {
    const month = getFutureMonthShort(m);
    return `${month} 감정 기복 주의`;
  });
  
  const enItems = monthsAhead.map(m => {
    const now = new Date();
    const future = new Date(now.getFullYear(), now.getMonth() + m, 1);
    const monthName = future.toLocaleString('en-US', { month: 'long' });
    return `Emotional ups in ${monthName}`;
  });
  
  result.ko = koItems;
  result.en = enItems;
  
  return result;
}

// 얼굴로 보는 올해 나의 연애운 테스트 데이터
export interface FaceLoveFortuneResult {
  id: number;
  title: Record<string, string>;
  description: Record<string, string[]>; // 10개
  emoji: string;
  scoreRange: [number, number];
  strengths: Record<string, string[]>;
  recommendations: Record<string, string[]>;
  personality: Record<string, string[]>; // 10개 (성격 분석)
  advice: Record<string, string[]>; // 10개
  fortune: {
    when: Record<string, string[]>; // 언제 인연을 만날까
    style: Record<string, string[]>; // 그 사람은 어떤 스타일일까
    warning: Record<string, string[]>; // 주의해야 할 시기
  };
}

export interface FaceLoveFortuneTestClientProps {
  locale: string;
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  playCount?: number;
  similarTests?: any[];
  isLatestTest?: boolean;
}

// 얼굴로 보는 올해 나의 연애운 결과 데이터
export const faceLoveFortuneResults: FaceLoveFortuneResult[] = [
  {
    id: 1,
    title: {
      ko: '올해 인생의 반려자를 만날 상',
      en: 'You Will Meet Your Life Partner This Year',
      ja: '今年人生のパートナーと出会う相',
      'zh-CN': '今年将遇到人生伴侣',
      'zh-TW': '今年將遇到人生伴侶',
      vi: 'Gặp Người Bạn Đời Trong Năm Nay',
      id: 'Akan Bertemu Pasangan Hidup Tahun Ini'
    },
    description: {
      get ko() {
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth() + 1;
        
        // 현재 날짜에 따라 "올해 말" 또는 "내년 초" 표현 계산
        let periodText = '';
        if (currentMonth <= 10) {
          // 10월 이전: "올해 말"
          periodText = `${currentYear}년 말`;
        } else if (currentMonth === 11) {
          // 11월: "올해 말 또는 내년 초"
          periodText = `${currentYear}년 말 또는 ${currentYear + 1}년 초`;
        } else {
          // 12월: "내년 초"
          periodText = `${currentYear + 1}년 초`;
        }
        
        return [
          `${periodText} 당신에게 큰 인연이 찾아올 것입니다! 운명적인 상대를 만나게 될 확률이 매우 높으며, 진정한 사랑을 경험하게 됩니다.`,
          `${periodText} 당신은 진정한 사랑을 만날 것입니다. 평생을 함께할 사람과의 만남이 예상되며, 깊고 진실한 관계를 형성하게 됩니다.`,
          `${periodText} 운명의 상대를 만날 시기입니다. 그 사람과의 첫 만남이 운명적으로 느껴질 것이며, 서로에게 큰 의미가 될 것입니다.`,
          `${periodText} 진심 어린 사랑이 찾아올 것입니다. 진정한 배려와 이해를 바탕으로 한 깊은 인연을 맺게 됩니다.`,
          `${periodText} 당신은 평생을 함께할 사람을 만나게 됩니다. 그 사람과 함께 성장하고 발전하며 행복한 미래를 만들어 갈 것입니다.`,
          `${periodText} 당신은 연애운이 매우 좋은 시기가 될 것입니다. 진심 어린 마음으로 상대를 대하고 배려하는 관계를 형성할 수 있습니다.`,
          `당신은 진정한 사랑을 찾을 수 있는 능력을 가지고 있습니다. ${periodText} 그 능력이 발휘되어 운명적인 인연을 만나게 됩니다.`,
          `${periodText} 운명적인 인연을 만날 것입니다. 그 사람과 깊은 유대감을 형성하며 서로에게 평생의 반려자가 될 수 있습니다.`,
          `${periodText} 당신은 많은 사람들의 관심을 받게 되며, 그 중에서도 특별한 한 사람과 인연을 맺게 됩니다.`,
          `${periodText} 진정한 사랑을 만날 것입니다. 그 사람과의 첫 만남이 운명적으로 느껴지며, 함께 성장하는 아름다운 관계를 만들어 갈 것입니다.`
        ];
      },
      en: [
        'A great love will find you this year! You have a very high probability of meeting your destined partner and experiencing true love.',
        'This year, you will find true love. A meeting with someone to spend your life with is expected, and you will form a deep and sincere relationship.',
        'This is the time to meet your destined partner. Your first meeting with that person will feel destined and will be meaningful to each other.',
        'Sincere love will come to you this year. You will form a deep connection based on genuine care and understanding.',
        'This year, you will meet someone to spend your life with. You will grow and develop together, creating a happy future.',
        'This year will be a very good year for your love fortune. You can form a relationship where you treat each other with sincere hearts and care.',
        'You have the ability to find true love. This year, that ability will be demonstrated as you meet your destined partner.',
        'You will meet your destined partner this year. You will form a deep bond with that person and can become life partners for each other.',
        'This year, you will receive attention from many people, and among them, you will form a connection with one special person.',
        'You will find true love this year. Your first meeting with that person will feel destined, and you will create a beautiful relationship growing together.'
      ],
      ja: [
        '今年あなたに大きな縁が訪れるでしょう！運命的な相手と出会う確率が非常に高く、真実の愛を経験することになります。',
        '今年あなたは真実の愛を見つけるでしょう。一生を共にする人との出会いが予想され、深く誠実な関係を形成することになります。',
        '今年は運命の相手に出会う時期です。その人との最初の出会いは運命的に感じられ、お互いに大きな意味を持つでしょう。',
        '今年心からの愛が訪れるでしょう。真実の思いやりと理解を基盤とした深い縁を結ぶことになります。',
        '今年あなたは一生を共にする人に出会うでしょう。その人と共に成長し発展し、幸せな未来を作り上げていくでしょう。',
        '今年あなたは恋愛運が非常に良い一年になるでしょう。心からの気持ちで相手を扱い、思いやる関係を形成することができます。',
        'あなたは真実の愛を見つける能力を持っています。今年その能力が発揮され、運命的な縁に出会うでしょう。',
        '今年運命的な縁に出会うでしょう。その人と深い絆を形成し、お互いに一生のパートナーになることができます。',
        '今年あなたは多くの人から注目を受け、その中でも特別な一人と縁を結ぶでしょう。',
        '今年真実の愛に出会うでしょう。その人との最初の出会いは運命的に感じられ、共に成長する美しい関係を作り上げていくでしょう。'
      ],
      'zh-CN': [
        '今年大缘分将找到你！你遇到命中注定的人的概率非常高，将体验真爱。',
        '今年你将找到真爱。预计会遇到共度一生的人，并建立深厚真诚的关系。',
        '今年是遇到命中注定的人的时机。与那个人的初次相遇会感到命中注定，对彼此都具有重要意义。',
        '今年真挚的爱情将来到你身边。你将基于真正的关怀和理解建立深厚的缘分。',
        '今年你将遇到共度一生的人。你们将一起成长和发展，创造幸福的未来。',
        '今年你的恋爱运会非常好。你可以建立以真诚的心对待和关怀彼此的关系。',
        '你具有找到真爱的能力。今年这种能力将得到体现，你会遇到命中注定的人。',
        '今年你将遇到命中注定的人。你将与那个人建立深厚的纽带，可以成为彼此的人生伴侣。',
        '今年你将受到许多人的关注，在其中，你将与一个特别的人结缘。',
        '今年你将找到真爱。与那个人的初次相遇会感到命中注定，你们将共同成长，建立美好的关系。'
      ],
      'zh-TW': [
        '今年大緣分將找到你！你遇到命中註定的人的機率非常高，將體驗真愛。',
        '今年你將找到真愛。預計會遇到共度一生的人，並建立深厚真誠的關係。',
        '今年是遇到命中註定的人的時機。與那個人的初次相遇會感到命中註定，對彼此都具有重要意義。',
        '今年真摯的愛情將來到你身邊。你將基於真正的關懷和理解建立深厚的緣分。',
        '今年你將遇到共度一生的人。你們將一起成長和發展，創造幸福的未來。',
        '今年你的戀愛運會非常好。你可以建立以真誠的心對待和關懷彼此的關係。',
        '你具有找到真愛的能力。今年這種能力將得到體現，你會遇到命中註定的人。',
        '今年你將遇到命中註定的人。你將與那個人建立深厚的紐帶，可以成為彼此的人生伴侶。',
        '今年你將受到許多人關注，在其中，你將與一個特別的人結緣。',
        '今年你將找到真愛。與那個人的初次相遇會感到命中註定，你們將共同成長，建立美好的關係。'
      ],
      vi: [
        'Một tình yêu lớn sẽ tìm đến bạn trong năm nay! Bạn có xác suất rất cao gặp được người bạn đời định mệnh và trải nghiệm tình yêu đích thực.',
        'Năm nay, bạn sẽ tìm thấy tình yêu đích thực. Một cuộc gặp gỡ với người để đồng hành suốt đời được dự kiến, và bạn sẽ hình thành một mối quan hệ sâu sắc và chân thành.',
        'Đây là thời điểm để gặp người bạn đời định mệnh. Cuộc gặp gỡ đầu tiên với người đó sẽ cảm thấy như định mệnh và sẽ có ý nghĩa đối với nhau.',
        'Tình yêu chân thành sẽ đến với bạn trong năm nay. Bạn sẽ hình thành một kết nối sâu sắc dựa trên sự quan tâm và hiểu biết thực sự.',
        'Năm nay, bạn sẽ gặp người để đồng hành suốt đời. Bạn sẽ cùng nhau phát triển và tạo ra một tương lai hạnh phúc.',
        'Năm nay sẽ là một năm rất tốt cho vận tình duyên của bạn. Bạn có thể hình thành một mối quan hệ nơi bạn đối xử với nhau bằng trái tim chân thành và sự quan tâm.',
        'Bạn có khả năng tìm thấy tình yêu đích thực. Năm nay, khả năng đó sẽ được thể hiện khi bạn gặp người bạn đời định mệnh.',
        'Bạn sẽ gặp người bạn đời định mệnh trong năm nay. Bạn sẽ hình thành mối liên kết sâu sắc với người đó và có thể trở thành bạn đời của nhau.',
        'Năm nay, bạn sẽ nhận được sự chú ý từ nhiều người, và trong số đó, bạn sẽ kết nối với một người đặc biệt.',
        'Bạn sẽ tìm thấy tình yêu đích thực trong năm nay. Cuộc gặp gỡ đầu tiên với người đó sẽ cảm thấy như định mệnh, và bạn sẽ tạo ra một mối quan hệ đẹp đẽ cùng nhau phát triển.'
      ],
      id: [
        'Cinta besar akan menemukan Anda tahun ini! Anda memiliki probabilitas sangat tinggi untuk bertemu pasangan yang ditakdirkan dan mengalami cinta sejati.',
        'Tahun ini, Anda akan menemukan cinta sejati. Pertemuan dengan seseorang untuk menghabiskan hidup bersama diharapkan, dan Anda akan membentuk hubungan yang dalam dan tulus.',
        'Ini adalah waktu untuk bertemu pasangan yang ditakdirkan. Pertemuan pertama Anda dengan orang itu akan terasa ditakdirkan dan akan bermakna bagi satu sama lain.',
        'Cinta yang tulus akan datang kepada Anda tahun ini. Anda akan membentuk koneksi yang dalam berdasarkan kepedulian dan pemahaman yang tulus.',
        'Tahun ini, Anda akan bertemu seseorang untuk menghabiskan hidup bersama. Anda akan tumbuh dan berkembang bersama, menciptakan masa depan yang bahagia.',
        'Tahun ini akan menjadi tahun yang sangat baik untuk nasib cinta Anda. Anda dapat membentuk hubungan di mana Anda saling memperlakukan dengan hati yang tulus dan kepedulian.',
        'Anda memiliki kemampuan untuk menemukan cinta sejati. Tahun ini, kemampuan itu akan ditunjukkan saat Anda bertemu pasangan yang ditakdirkan.',
        'Anda akan bertemu pasangan yang ditakdirkan tahun ini. Anda akan membentuk ikatan yang dalam dengan orang itu dan dapat menjadi pasangan hidup satu sama lain.',
        'Tahun ini, Anda akan menerima perhatian dari banyak orang, dan di antara mereka, Anda akan terhubung dengan satu orang istimewa.',
        'Anda akan menemukan cinta sejati tahun ini. Pertemuan pertama Anda dengan orang itu akan terasa ditakdirkan, dan Anda akan menciptakan hubungan yang indah tumbuh bersama.'
      ]
    },
    emoji: '💕',
    scoreRange: [90, 100],
    strengths: {
      ko: ['매력적', '순수함', '배려심', '끈기', '로맨틱', '진실함', '신뢰할 수 있음', '따뜻함', '공감능력', '낙천적'],
      en: ['Charming', 'Pure', 'Caring', 'Persistent', 'Romantic', 'Sincere', 'Trustworthy', 'Warm', 'Empathetic', 'Optimistic'],
      ja: ['魅力的', '純粋', '思いやり', '粘り強い', 'ロマンチック', '誠実', '信頼できる', '温かい', '共感能力', '楽観的'],
      'zh-CN': ['有魅力', '纯洁', '体贴', '坚持', '浪漫', '真诚', '值得信赖', '温暖', '共情能力', '乐观'],
      'zh-TW': ['有魅力', '純潔', '體貼', '堅持', '浪漫', '真誠', '值得信賴', '溫暖', '共情能力', '樂觀'],
      vi: ['Quyến rũ', 'Trong sáng', 'Quan tâm', 'Kiên trì', 'Lãng mạn', 'Chân thành', 'Đáng tin cậy', 'Ấm áp', 'Đồng cảm', 'Lạc quan'],
      id: ['Menawan', 'Murni', 'Peduli', 'Tekun', 'Romantis', 'Tulus', 'Dapat dipercaya', 'Hangat', 'Berempati', 'Optimis']
    },
    recommendations: {
      ko: ['적극적인 만남', '솔직한 대화', '상대방 배려', '진심 어린 마음', '인내심', '로맨틱한 데이트', '공통 관심사 찾기', '서로의 꿈 응원', '감사 표현하기', '함께 성장하기'],
      en: ['Active meeting', 'Honest conversation', 'Consideration for others', 'Sincere heart', 'Patience', 'Romantic dates', 'Finding common interests', 'Supporting each other\'s dreams', 'Expressing gratitude', 'Growing together'],
      ja: ['積極的な出会い', '正直な会話', '相手への配慮', '心からの気持ち', '忍耐', 'ロマンチックなデート', '共通の興味を見つける', 'お互いの夢を応援', '感謝を表す', '一緒に成長する'],
      'zh-CN': ['积极见面', '真诚对话', '体谅对方', '真诚的心', '耐心', '浪漫约会', '寻找共同兴趣', '支持彼此的梦想', '表达感谢', '共同成长'],
      'zh-TW': ['積極見面', '真誠對話', '體諒對方', '真誠的心', '耐心', '浪漫約會', '尋找共同興趣', '支持彼此的夢想', '表達感謝', '共同成長'],
      vi: ['Gặp gỡ tích cực', 'Trò chuyện thành thật', 'Quan tâm người khác', 'Trái tim chân thành', 'Kiên nhẫn', 'Hẹn hò lãng mạn', 'Tìm sở thích chung', 'Ủng hộ ước mơ của nhau', 'Bày tỏ lòng biết ơn', 'Cùng nhau phát triển'],
      id: ['Pertemuan aktif', 'Percakapan jujur', 'Pertimbangan untuk orang lain', 'Hati tulus', 'Kesabaran', 'Kencan romantis', 'Menemukan minat bersama', 'Mendukung mimpi satu sama lain', 'Mengekspresikan rasa terima kasih', 'Tumbuh bersama']
    },
    personality: {
      ko: [
        '당신은 매력적이고 순수한 성격을 가지고 있습니다.',
        '타인을 배려하고 사랑하는 마음이 큽니다.',
        '진정한 사랑을 찾고 있으며, 인내심이 강합니다.',
        '로맨틱하고 감성적인 면이 있습니다.',
        '상대방의 감정을 잘 이해하고 공감합니다.',
        '진실하고 솔직한 소통을 선호합니다.',
        '깊은 유대감을 형성하는 것을 중요하게 생각합니다.',
        '함께 성장하고 발전하는 것을 좋아합니다.',
        '로맨스와 애정 표현을 즐깁니다.',
        '장기적인 관계를 선호합니다.'
      ],
      en: [
        'You have a charming and pure personality.',
        'You have a big heart that cares for and loves others.',
        'You are looking for true love and have strong patience.',
        'You have a romantic and emotional side.',
        'You understand and empathize with others\' emotions well.',
        'You prefer honest and sincere communication.',
        'You value forming deep bonds.',
        'You enjoy growing and developing together.',
        'You enjoy romance and expressions of affection.',
        'You prefer long-term relationships.'
      ],
      ja: [
        'あなたは魅力的で純粋な性格を持っています。',
        '他人を思いやり、愛する心が大きいです。',
        '真実の愛を求めていて、忍耐力が強いです。',
        'ロマンチックで感情的な面があります。',
        '相手の感情をよく理解し、共感します。',
        '真実で誠実なコミュニケーションを好みます。',
        '深い絆を形成することを重要に考えます。',
        '一緒に成長し、発展することを好きです。',
        'ロマンスと愛情表現を楽しみます。',
        '長期的な関係を好みます。'
      ],
      'zh-CN': [
        '你有着迷人和纯洁的性格。',
        '你有一颗关心和关爱他人的心。',
        '你正在寻找真爱，有着很强的耐心。',
        '你有浪漫和感性的一面。',
        '你很好地理解和共情他人的情感。',
        '你更喜欢诚实和真诚的沟通。',
        '你重视形成深厚的纽带。',
        '你喜欢一起成长和发展。',
        '你享受浪漫和情感表达。',
        '你更喜欢长期的关系。'
      ],
      'zh-TW': [
        '你有著迷人和純潔的性格。',
        '你有一顆關心和關愛他人的心。',
        '你正在尋找真愛，有著很強的耐心。',
        '你有浪漫和感性的一面。',
        '你很好地理解和共情他人的情感。',
        '你更喜歡誠實和真誠的溝通。',
        '你重視形成深厚的紐帶。',
        '你喜歡一起成長和發展。',
        '你享受浪漫和情感表達。',
        '你更喜歡長期的關係。'
      ],
      vi: [
        'Bạn có tính cách quyến rũ và trong sáng.',
        'Bạn có trái tim lớn biết quan tâm và yêu thương người khác.',
        'Bạn đang tìm kiếm tình yêu đích thực và có sự kiên nhẫn mạnh mẽ.',
        'Bạn có mặt lãng mạn và cảm xúc.',
        'Bạn hiểu và đồng cảm với cảm xúc của người khác rất tốt.',
        'Bạn thích giao tiếp chân thành và trung thực.',
        'Bạn coi trọng việc hình thành mối liên kết sâu sắc.',
        'Bạn thích cùng nhau phát triển và tiến bộ.',
        'Bạn thích sự lãng mạn và biểu hiện tình cảm.',
        'Bạn thích các mối quan hệ lâu dài.'
      ],
      id: [
        'Anda memiliki kepribadian yang menawan dan murni.',
        'Anda memiliki hati yang besar yang peduli dan mencintai orang lain.',
        'Anda sedang mencari cinta sejati dan memiliki kesabaran yang kuat.',
        'Anda memiliki sisi romantis dan emosional.',
        'Anda memahami dan berempati dengan emosi orang lain dengan baik.',
        'Anda lebih suka komunikasi yang jujur dan tulus.',
        'Anda menghargai membentuk ikatan yang mendalam.',
        'Anda menikmati tumbuh dan berkembang bersama.',
        'Anda menikmati romansa dan ekspresi kasih sayang.',
        'Anda lebih suka hubungan jangka panjang.'
      ]
    },
    advice: {
        ko: [
          '적극적인 만남을 시도하는 것이 필요합니다. 새로운 인연을 만나기 위해서는 적극적으로 나서는 자세가 중요하며, 다양한 활동이나 모임에 참여해보시기 바랍니다.',
          '진심으로 상대방과 소통하시기 바랍니다. 표면적인 대화가 아닌 마음을 열고 진솔하게 대화하며, 서로를 이해하려는 노력이 관계를 더욱 깊게 만들어줄 것입니다.',
          '서두르지 말고 천천히 진행하시기 바랍니다. 관계는 시간을 두고 자연스럽게 발전하는 것이 좋으므로, 무리하게 진행하려 하지 말고 차근차근 나아가시는 것이 중요합니다.',
          '감정을 존중하며 배려하는 것이 매우 중요합니다. 상대방의 감정과 생각을 이해하고 존중하며, 서로를 배려하는 마음으로 대하시면 관계가 더욱 깊어질 것입니다.',
          '솔직한 대화를 추구하는 것이 좋습니다. 숨기거나 거짓말하지 않고 진심을 담아 대화하며, 서로의 마음을 이해하고 공감하는 대화를 나누시기 바랍니다.',
          '함께 하는 시간을 소중히 여기시기 바랍니다. 단순히 함께 있는 것이 아니라, 그 시간을 의미 있게 활용하며 서로에게 좋은 추억을 만들어 가시기 바랍니다.',
          '서로의 꿈을 응원하는 것이 매우 중요합니다. 상대방의 목표와 꿈을 존중하고 응원하며, 함께 그 꿈을 이뤄나가는 과정에서 더욱 깊은 유대감을 형성할 수 있습니다.',
          '로맨틱한 순간을 만드는 것을 시도하시기 바랍니다. 특별한 날이나 일상 속에서도 작은 로맨틱한 순간들을 만들어 서로에 대한 사랑을 표현하시면 관계가 더욱 달콤해질 것입니다.',
          '인내심을 발휘하며 관계를 발전시키시기 바랍니다. 모든 관계에는 어려움이 있지만, 인내심을 가지고 서로 이해하고 노력한다면 어떤 어려움도 극복할 수 있을 것입니다.',
          '자연스럽게 관계를 발전시키는 것이 좋습니다. 강요하거나 억지로 만든 관계보다는 자연스럽게 흘러가는 관계가 더 오래 지속되며, 진정한 사랑을 나눌 수 있습니다.'
        ],
      en: [
        'It is necessary to try active meetings. An active attitude is important to meet new connections, and please participate in various activities or gatherings.',
        'Please communicate sincerely with your partner. Rather than superficial conversations, open your heart and have honest conversations, and efforts to understand each other will make the relationship deeper.',
        'Please proceed slowly without rushing. Relationships develop naturally over time, so it is important not to force progress but to move forward step by step.',
        'Respecting emotions and showing consideration is very important. Understanding and respecting your partner\'s emotions and thoughts, and treating each other with consideration will deepen the relationship.',
        'It is good to pursue honest conversations. Without hiding or lying, have conversations with sincerity, and please share conversations where you understand and empathize with each other\'s hearts.',
        'Please cherish the time spent together. Rather than simply being together, please make meaningful use of that time and create good memories for each other.',
        'Supporting each other\'s dreams is very important. Respect and support your partner\'s goals and dreams, and you can form deeper bonds in the process of achieving those dreams together.',
        'Please try to create romantic moments. Creating small romantic moments on special days or in daily life to express love for each other will make the relationship even sweeter.',
        'Please develop the relationship with patience. All relationships have difficulties, but if you understand and work together with patience, you can overcome any difficulty.',
        'It is good to let the relationship develop naturally. A relationship that flows naturally lasts longer than forced or forced relationships, and you can share true love.'
      ],
      get ja() {
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth() + 1;
        
        let periodText = '';
        if (currentMonth <= 10) {
          periodText = `${currentYear}年末または${currentYear + 1}年初`;
        } else if (currentMonth === 11) {
          periodText = `${currentYear}年末または${currentYear + 1}年初`;
        } else {
          periodText = `${currentYear + 1}年初`;
        }
        
        return [
          `${periodText}積極的な出会いを試みることが必要です。新しい縁に会うためには積極的に臨む姿勢が重要であり、様々な活動や集まりに参加してみてください。`,
          '心から相手とコミュニケーションを取ってください。表面的な会話ではなく、心を開いて誠実に会話し、お互いを理解しようとする努力が関係をより深くしてくれるでしょう。',
          '急がずにゆっくりと進めてください。関係は時間をかけて自然に発展するのが良いため、無理に進めようとせず、着実に前進することが重要です。',
          '感情を尊重し配慮することが非常に重要です。相手の感情と思考を理解し尊重し、お互いに配慮する心で接すれば、関係はより深まるでしょう。',
          '正直な会話を追求することが良いです。隠したり嘘をついたりせず、真心を込めて会話し、お互いの心を理解し共感する会話を交わしてください。',
          '一緒にする時間を大切にしてください。単に一緒にいるだけでなく、その時間を意味のあるものとして活用し、お互いに良い思い出を作ってください。',
          'お互いの夢を応援することが非常に重要です。相手の目標と夢を尊重し応援し、一緒にその夢を実現していく過程で、より深い絆を形成できます。',
          'ロマンチックな瞬間を作ることを試してみてください。特別な日や日常の中でも小さなロマンチックな瞬間を作り、お互いへの愛を表現すれば、関係はより甘美になるでしょう。',
          '忍耐力を発揮しながら関係を発展させてください。すべての関係には困難がありますが、忍耐力を持ってお互いを理解し努力すれば、どんな困難も克服できるでしょう。',
          '自然に関係を発展させることが良いです。強要したり無理やり作った関係よりも、自然に流れていく関係の方がより長く続き、真実の愛を分かち合うことができます。'
        ];
      },
      'zh-CN': [
        '今年春天或秋天遇到缘分的概率很高。',
        '积极参与新的聚会或活动。',
        '用真诚的心对待对方。',
        '不要着急，让它自然发展。',
        '尊重和体谅对方的感受。',
        '以诚实和开放的心态沟通。',
        '珍惜在一起的时光。',
        '支持彼此的梦想和目标。',
        '努力创造浪漫的时刻。',
        '用耐心发展关系。'
      ],
      'zh-TW': [
        '今年春天或秋天遇到緣分的概率很高。',
        '積極參與新的聚會或活動。',
        '用真誠的心對待對方。',
        '不要著急，讓它自然發展。',
        '尊重和體諒對方的感受。',
        '以誠實和開放的心態溝通。',
        '珍惜在一起的時光。',
        '支持彼此的夢想和目標。',
        '努力創造浪漫的時刻。',
        '用耐心發展關係。'
      ],
      vi: [
        'Bạn có khả năng gặp ai đó vào mùa xuân hoặc mùa thu năm nay.',
        'Tích cực tham gia các buổi gặp gỡ hoặc hoạt động mới.',
        'Đối xử với người khác bằng trái tim chân thành.',
        'Đừng vội vàng, hãy để nó tự nhiên.',
        'Tôn trọng và quan tâm đến cảm xúc của người khác.',
        'Giao tiếp với sự trung thực và tâm trí cởi mở.',
        'Trân trọng thời gian bên nhau.',
        'Hỗ trợ ước mơ và mục tiêu của nhau.',
        'Cố gắng tạo ra những khoảnh khắc lãng mạn.',
        'Phát triển mối quan hệ với sự kiên nhẫn.'
      ],
      id: [
        'Anda kemungkinan akan bertemu seseorang di musim semi atau musim gugur tahun ini.',
        'Berpartisipasi aktif dalam pertemuan atau kegiatan baru.',
        'Perlakukan orang lain dengan hati yang tulus.',
        'Jangan terburu-buru, biarkan mengalir secara alami.',
        'Hormati dan pertimbangkan perasaan orang lain.',
        'Berkomunikasi dengan kejujuran dan pikiran terbuka.',
        'Hargai waktu yang dihabiskan bersama.',
        'Dukung mimpi dan tujuan satu sama lain.',
        'Cobalah untuk menciptakan momen romantis.',
        'Kembangkan hubungan dengan kesabaran.'
      ]
    },
    fortune: {
      when: {
        get ko() {
          const now = new Date();
          const currentMonth = now.getMonth() + 1;
          const currentYear = now.getFullYear();
          
          // 현재 월에 따라 적절한 미래 시기 계산 (올해 말 ~ 내년 초)
          let when1, when2, when3, when4;
          
          if (currentMonth <= 10) {
            // 10월 이전: 다음 달, 다다음 달 등
            when1 = getFutureMonthShort(1); // 다음 달
            when2 = getFutureMonthShort(2); // 다다음 달
            when3 = getFutureMonthShort(3); // 3개월 후
            when4 = getFutureMonthShort(4); // 4개월 후
          } else if (currentMonth === 11) {
            // 11월: 12월, 내년 1월
            when1 = '12월';
            when2 = getFutureMonthShort(2); // 내년 1월
            when3 = getFutureMonthShort(3); // 내년 2월
            when4 = getFutureMonthShort(4); // 내년 3월
          } else {
            // 12월: 내년 1월, 2월
            when1 = getFutureMonthShort(1); // 내년 1월
            when2 = getFutureMonthShort(2); // 내년 2월
            when3 = getFutureMonthShort(3); // 내년 3월
            when4 = getFutureMonthShort(4); // 내년 4월
          }
          
          return [
            `${when1} 운명적인 인연을 만날 수 있는 가장 좋은 시기입니다. 이 시기에 만나는 사람은 평생의 반려자가 될 가능성이 매우 높습니다.`,
            `${when2} 특별한 사람과의 만남이 예상되는 시기입니다. 이 만남은 서로에게 큰 의미가 될 것이며, 깊은 인연으로 발전할 수 있습니다.`,
            `${when1} 또는 ${when2} 좋은 기회가 찾아올 것입니다. 새로운 인연을 맺을 수 있는 여러 기회가 생기며, 그 중에서도 특별한 인연을 만날 수 있습니다.`,
            `${when2} 또는 ${when3} 진정한 운명의 상대를 만날 수 있는 시기입니다. 이 사람은 당신의 삶을 더욱 풍요롭게 만들어 줄 것이며, 서로에게 평생의 동반자가 될 것입니다.`,
            `${when1} 또는 ${when2} 새로운 시작의 인연이 찾아옵니다. 이 인연은 과거의 모든 것을 잊게 할 만큼 새롭고 특별할 것이며, 새로운 인생의 장을 열어줄 것입니다.`,
            `${when2} 또는 ${when3} 평생의 사랑을 만날 수 있는 기회가 찾아옵니다. 이 시기에 만나는 사람은 진심으로 사랑할 수 있는 운명적인 상대가 될 것입니다.`,
            `${when1} 온라인 모임이나 커뮤니티에서 특별한 인연을 만날 수 있습니다. 온라인 공간에서도 진정한 사랑을 찾을 수 있는 좋은 기회가 될 것입니다.`,
            `${when2} 여행 중 운명적인 만남이 기다리고 있습니다. 새로운 장소에서 만나는 사람은 당신의 인생을 바꿀 만한 특별한 인연이 될 수 있습니다.`,
            `${when1} 또는 ${when2} 일상 속에서 찾아온 특별한 인연을 만날 수 있습니다. 평범해 보이는 일상 속에서도 운명적인 만남은 언제든지 찾아올 수 있습니다.`,
            `${when2} 친구나 지인의 소개로 맺어진 좋은 인연입니다. 신뢰할 수 있는 사람들의 소개로 만난 인연은 더욱 안정적이고 깊은 관계로 발전할 수 있습니다.`
          ];
        },
        get en() {
          const now = new Date();
          const currentMonth = now.getMonth() + 1;
          const currentYear = now.getFullYear();
          
          let when1, when2, when3, when4;
          
          if (currentMonth <= 10) {
            const future1 = new Date(now.getFullYear(), now.getMonth() + 1, 1);
            const future2 = new Date(now.getFullYear(), now.getMonth() + 2, 1);
            const future3 = new Date(now.getFullYear(), now.getMonth() + 3, 1);
            const future4 = new Date(now.getFullYear(), now.getMonth() + 4, 1);
            when1 = future1.getFullYear() > currentYear ? `Next ${future1.toLocaleString('en-US', { month: 'long' })}` : future1.toLocaleString('en-US', { month: 'long' });
            when2 = future2.getFullYear() > currentYear ? `Next ${future2.toLocaleString('en-US', { month: 'long' })}` : future2.toLocaleString('en-US', { month: 'long' });
            when3 = future3.getFullYear() > currentYear ? `Next ${future3.toLocaleString('en-US', { month: 'long' })}` : future3.toLocaleString('en-US', { month: 'long' });
            when4 = future4.getFullYear() > currentYear ? `Next ${future4.toLocaleString('en-US', { month: 'long' })}` : future4.toLocaleString('en-US', { month: 'long' });
          } else if (currentMonth === 11) {
            when1 = 'December';
            const future2 = new Date(now.getFullYear(), now.getMonth() + 2, 1);
            const future3 = new Date(now.getFullYear(), now.getMonth() + 3, 1);
            const future4 = new Date(now.getFullYear(), now.getMonth() + 4, 1);
            when2 = `Next ${future2.toLocaleString('en-US', { month: 'long' })}`;
            when3 = `Next ${future3.toLocaleString('en-US', { month: 'long' })}`;
            when4 = `Next ${future4.toLocaleString('en-US', { month: 'long' })}`;
          } else {
            const future1 = new Date(now.getFullYear(), now.getMonth() + 1, 1);
            const future2 = new Date(now.getFullYear(), now.getMonth() + 2, 1);
            const future3 = new Date(now.getFullYear(), now.getMonth() + 3, 1);
            const future4 = new Date(now.getFullYear(), now.getMonth() + 4, 1);
            when1 = `Next ${future1.toLocaleString('en-US', { month: 'long' })}`;
            when2 = `Next ${future2.toLocaleString('en-US', { month: 'long' })}`;
            when3 = `Next ${future3.toLocaleString('en-US', { month: 'long' })}`;
            when4 = `Next ${future4.toLocaleString('en-US', { month: 'long' })}`;
          }
          
          return [
            `${when1} is the best time to meet your destined partner. The person you meet during this period has a very high probability of becoming your life companion.`,
            `${when2} is when you are expected to meet a special person. This meeting will be very meaningful to both of you and can develop into a deep connection.`,
            `${when1} or ${when2} will bring good opportunities. You will have several chances to form new connections, and you may meet a special person among them.`,
            `${when2} or ${when3} is the time to meet your true destined partner. This person will enrich your life and become a lifelong companion for each other.`,
            `${when1} or ${when2} will bring a new beginning in your love life. This connection will be so new and special that it will make you forget the past and open a new chapter in your life.`,
            `${when2} or ${when3} will bring an opportunity to meet the love of your life. The person you meet during this time will be a destined partner whom you can love sincerely.`,
            `In ${when1}, you may meet a special person in online gatherings or communities. This will be a good opportunity to find true love even in online spaces.`,
            `In ${when2}, a destined meeting awaits you during your travels. The person you meet in a new place may be a special connection that will change your life.`,
            `In ${when1} or ${when2}, you may meet a special connection that finds you in your daily routine. A destined meeting can come to you at any time, even in seemingly ordinary daily life.`,
            `In ${when2}, a good connection formed through introductions from friends or acquaintances. A connection met through introductions from trustworthy people can develop into a more stable and deeper relationship.`
          ];
        },
        get ja() {
          const now = new Date();
          const currentMonth = now.getMonth() + 1;
          const currentYear = now.getFullYear();
          
          let when1, when2, when3, when4;
          
          if (currentMonth <= 10) {
            const future1 = new Date(now.getFullYear(), now.getMonth() + 1, 1);
            const future2 = new Date(now.getFullYear(), now.getMonth() + 2, 1);
            const future3 = new Date(now.getFullYear(), now.getMonth() + 3, 1);
            const future4 = new Date(now.getFullYear(), now.getMonth() + 4, 1);
            
            const getMonthStr = (date: Date) => {
              const monthName = date.toLocaleString('ja-JP', { month: 'long' });
              if (date.getFullYear() > currentYear) {
                return `来年${monthName}`;
              }
              return monthName;
            };
            
            when1 = getMonthStr(future1);
            when2 = getMonthStr(future2);
            when3 = getMonthStr(future3);
            when4 = getMonthStr(future4);
          } else if (currentMonth === 11) {
            when1 = '12月';
            const future2 = new Date(now.getFullYear(), now.getMonth() + 2, 1);
            const future3 = new Date(now.getFullYear(), now.getMonth() + 3, 1);
            const future4 = new Date(now.getFullYear(), now.getMonth() + 4, 1);
            when2 = `来年${future2.toLocaleString('ja-JP', { month: 'long' })}`;
            when3 = `来年${future3.toLocaleString('ja-JP', { month: 'long' })}`;
            when4 = `来年${future4.toLocaleString('ja-JP', { month: 'long' })}`;
          } else {
            const future1 = new Date(now.getFullYear(), now.getMonth() + 1, 1);
            const future2 = new Date(now.getFullYear(), now.getMonth() + 2, 1);
            const future3 = new Date(now.getFullYear(), now.getMonth() + 3, 1);
            const future4 = new Date(now.getFullYear(), now.getMonth() + 4, 1);
            when1 = `来年${future1.toLocaleString('ja-JP', { month: 'long' })}`;
            when2 = `来年${future2.toLocaleString('ja-JP', { month: 'long' })}`;
            when3 = `来年${future3.toLocaleString('ja-JP', { month: 'long' })}`;
            when4 = `来年${future4.toLocaleString('ja-JP', { month: 'long' })}`;
          }
          
          return [
            `${when1}は運命的なパートナーと出会う最も良い時期です。この時期に出会う人は一生の伴侶になる可能性が非常に高いです。`,
            `${when2}は特別な人との出会いが予想される時期です。この出会いはお互いに大きな意味を持ち、深い縁に発展することができます。`,
            `${when1}または${when2}に良い機会が訪れるでしょう。新しい縁を結ぶ機会がいくつかあり、その中でも特別な縁に出会うことができるでしょう。`,
            `${when2}または${when3}は真の運命的な相手と出会う時期です。この人はあなたの人生をより豊かにし、お互いに一生の伴侶になるでしょう。`,
            `${when1}または${when2}に新しい始まりの縁が訪れます。この縁は過去のすべてを忘れさせるほど新しく特別で、新しい人生の章を開いてくれるでしょう。`,
            `${when2}または${when3}に一生の愛に出会う機会が訪れます。この時期に出会う人は誠心誠意愛することのできる運命的な相手になるでしょう。`,
            `${when1}にはオンラインの集まりやコミュニティで特別な縁に出会うことができるでしょう。オンライン空間でも真実の愛を見つける良い機会になるでしょう。`,
            `${when2}には旅先で運命的な出会いが待っています。新しい場所で出会う人はあなたの人生を変えるような特別な縁になるかもしれません。`,
            `${when1}または${when2}には日常の中で訪れる特別な縁に出会うことができるでしょう。平凡に見える日常の中でも運命的な出会いはいつでも訪れることができます。`,
            `${when2}には友人や知人からの紹介で結ばれた良い縁です。信頼できる人々からの紹介で出会った縁は、より安定した深い関係に発展することができます。`
          ];
        },
        get 'zh-CN'() {
          const now = new Date();
          const currentMonth = now.getMonth() + 1;
          const currentYear = now.getFullYear();
          
          let when1, when2, when3, when4;
          
          const future1 = new Date(now.getFullYear(), now.getMonth() + 1, 1);
          const future2 = new Date(now.getFullYear(), now.getMonth() + 2, 1);
          const future3 = new Date(now.getFullYear(), now.getMonth() + 3, 1);
          const future4 = new Date(now.getFullYear(), now.getMonth() + 4, 1);
          
          const getMonthStr = (date: Date) => {
            const monthName = date.toLocaleString('zh-CN', { month: 'long' });
            if (date.getFullYear() > currentYear) {
              return `明年${monthName}`;
            }
            return monthName;
          };
          
          when1 = getMonthStr(future1);
          when2 = getMonthStr(future2);
          when3 = getMonthStr(future3);
          when4 = getMonthStr(future4);
          
          return [
            `${when1}是遇到命中注定缘分的最佳时机。在这个时期遇到的人很可能会成为你一生的伴侣。`,
            `${when2}是遇到特别的人的时期。这次相遇对彼此都具有重大意义，可以发展成为深厚的缘分。`,
            `${when1}或${when2}会有好机会到来。会有多个建立新缘分的机会，其中你可能会遇到特别的缘分。`,
            `${when2}或${when3}是遇到真正命中注定的人的时期。这个人将使你的生活更加丰富，成为彼此一生的伴侣。`,
            `${when1}或${when2}新的开始缘分将会到来。这个缘分会如此新鲜和特别，让你忘记过去的一切，开启新的人生篇章。`,
            `${when2}或${when3}是遇到一生真爱的机会。在这个时期遇到的人，将是你能真心相爱的命中注定的人。`,
            `${when1}可以在在线聚会或社区中遇到特别的缘分。即使在网络空间中，也可以找到真正爱情的好机会。`,
            `${when2}旅行中等待着你命中注定的相遇。在新地方遇到的人，可能会成为改变你人生的特别缘分。`,
            `${when1}或${when2}在日常生活中可以遇到特别的缘分。即使看似平凡的日常，命中注定的相遇也随时可能到来。`,
            `${when2}可以通过朋友或熟人的介绍建立好的缘分。通过值得信赖的人介绍认识的缘分，会更加稳定和深入。`
          ];
        },
        get 'zh-TW'() {
          const now = new Date();
          const currentMonth = now.getMonth() + 1;
          const currentYear = now.getFullYear();
          
          let when1, when2, when3, when4;
          
          const future1 = new Date(now.getFullYear(), now.getMonth() + 1, 1);
          const future2 = new Date(now.getFullYear(), now.getMonth() + 2, 1);
          const future3 = new Date(now.getFullYear(), now.getMonth() + 3, 1);
          const future4 = new Date(now.getFullYear(), now.getMonth() + 4, 1);
          
          const getMonthStr = (date: Date) => {
            const monthName = date.toLocaleString('zh-TW', { month: 'long' });
            if (date.getFullYear() > currentYear) {
              return `明年${monthName}`;
            }
            return monthName;
          };
          
          when1 = getMonthStr(future1);
          when2 = getMonthStr(future2);
          when3 = getMonthStr(future3);
          when4 = getMonthStr(future4);
          
          return [
            `${when1}是遇到命中註定緣分的最佳時機。在這個時期遇到的人很可能會成為你一生的伴侶。`,
            `${when2}是遇到特別的人的時期。這次相遇對彼此都具有重大意義，可以發展成為深厚的緣分。`,
            `${when1}或${when2}會有好機會到來。會有多個建立新緣分的機會，其中你可能會遇到特別的緣分。`,
            `${when2}或${when3}是遇到真正命中註定的人的時期。這個人將使你的生活更加豐富，成為彼此一生的伴侶。`,
            `${when1}或${when2}新的開始緣分將會到來。這個緣分會如此新鮮和特別，讓你忘記過去的一切，開啟新的人生篇章。`,
            `${when2}或${when3}是遇到一生真愛的機會。在這個時期遇到的人，將是你能真心相愛的命中註定的人。`,
            `${when1}可以在線上聚會或社區中遇到特別的緣分。即使在網路空間中，也可以找到真正愛情的好機會。`,
            `${when2}旅行中等待著你命中註定的相遇。在新地方遇到的人，可能會成為改變你人生的特別緣分。`,
            `${when1}或${when2}在日常生活中可以遇到特別的緣分。即使看似平凡的日常，命中註定的相遇也隨時可能到來。`,
            `${when2}可以通過朋友或熟人的介紹建立好的緣分。通過值得信賴的人介紹認識的緣分，會更加穩定和深入。`
          ];
        },
        get vi() {
          const now = new Date();
          const currentMonth = now.getMonth() + 1;
          const currentYear = now.getFullYear();
          
          let when1, when2, when3, when4;
          
          const future1 = new Date(now.getFullYear(), now.getMonth() + 1, 1);
          const future2 = new Date(now.getFullYear(), now.getMonth() + 2, 1);
          const future3 = new Date(now.getFullYear(), now.getMonth() + 3, 1);
          const future4 = new Date(now.getFullYear(), now.getMonth() + 4, 1);
          
          const getMonthStr = (date: Date) => {
            const monthName = date.toLocaleString('vi-VN', { month: 'long' });
            if (date.getFullYear() > currentYear) {
              return `Tháng ${monthName} năm sau`;
            }
            return monthName;
          };
          
          when1 = getMonthStr(future1);
          when2 = getMonthStr(future2);
          when3 = getMonthStr(future3);
          when4 = getMonthStr(future4);
          
          return [
            `${when1} là thời điểm tốt nhất để gặp được duyên phận định mệnh. Người bạn gặp trong thời kỳ này rất có thể sẽ trở thành người bạn đời của bạn.`,
            `${when2} là thời kỳ gặp được người đặc biệt. Cuộc gặp gỡ này sẽ có ý nghĩa lớn đối với cả hai bên và có thể phát triển thành mối liên kết sâu sắc.`,
            `${when1} hoặc ${when2} sẽ có những cơ hội tốt đến. Sẽ có nhiều cơ hội để hình thành duyên phận mới, trong đó bạn có thể gặp được duyên phận đặc biệt.`,
            `${when2} hoặc ${when3} là thời kỳ gặp được người thực sự định mệnh. Người này sẽ làm cho cuộc sống của bạn phong phú hơn và trở thành người bạn đời suốt đời của nhau.`,
            `${when1} hoặc ${when2} một duyên phận khởi đầu mới sẽ đến. Duyên phận này sẽ tươi mới và đặc biệt đến mức khiến bạn quên đi tất cả quá khứ và mở ra một chương mới trong cuộc đời.`,
            `${when2} hoặc ${when3} là cơ hội gặp được tình yêu đích thực của đời mình. Người bạn gặp trong thời kỳ này sẽ là người định mệnh mà bạn có thể chân thành yêu thương.`,
            `${when1} bạn có thể gặp được duyên phận đặc biệt trong các cuộc gặp gỡ trực tuyến hoặc cộng đồng. Ngay cả trong không gian trực tuyến, bạn cũng có thể tìm thấy cơ hội tốt cho tình yêu thực sự.`,
            `${when2} trong chuyến du lịch đang chờ đợi cuộc gặp gỡ định mệnh của bạn. Người bạn gặp ở nơi mới có thể trở thành duyên phận đặc biệt làm thay đổi cuộc đời bạn.`,
            `${when1} hoặc ${when2} bạn có thể gặp được duyên phận đặc biệt trong cuộc sống hàng ngày. Ngay cả trong cuộc sống hàng ngày có vẻ bình thường, cuộc gặp gỡ định mệnh có thể đến bất cứ lúc nào.`,
            `${when2} bạn có thể thiết lập duyên phận tốt thông qua giới thiệu của bạn bè hoặc người quen. Duyên phận gặp gỡ thông qua giới thiệu của những người đáng tin cậy sẽ ổn định hơn và sâu sắc hơn.`
          ];
        },
        get id() {
          const now = new Date();
          const currentMonth = now.getMonth() + 1;
          const currentYear = now.getFullYear();
          
          let when1, when2, when3, when4;
          
          const future1 = new Date(now.getFullYear(), now.getMonth() + 1, 1);
          const future2 = new Date(now.getFullYear(), now.getMonth() + 2, 1);
          const future3 = new Date(now.getFullYear(), now.getMonth() + 3, 1);
          const future4 = new Date(now.getFullYear(), now.getMonth() + 4, 1);
          
          const getMonthStr = (date: Date) => {
            const monthName = date.toLocaleString('id-ID', { month: 'long' });
            if (date.getFullYear() > currentYear) {
              return `${monthName} tahun depan`;
            }
            return monthName;
          };
          
          when1 = getMonthStr(future1);
          when2 = getMonthStr(future2);
          when3 = getMonthStr(future3);
          when4 = getMonthStr(future4);
          
          return [
            `${when1} adalah waktu terbaik untuk bertemu jodoh yang ditakdirkan. Orang yang Anda temui dalam periode ini sangat mungkin akan menjadi pasangan hidup Anda.`,
            `${when2} adalah periode bertemu orang yang istimewa. Pertemuan ini akan memiliki makna besar bagi satu sama lain dan dapat berkembang menjadi koneksi yang dalam.`,
            `${when1} atau ${when2} akan membawa peluang baik. Akan ada beberapa peluang untuk membentuk koneksi baru, di antaranya Anda mungkin bertemu koneksi yang istimewa.`,
            `${when2} atau ${when3} adalah periode bertemu orang yang benar-benar ditakdirkan. Orang ini akan membuat hidup Anda lebih kaya dan menjadi pasangan hidup seumur hidup satu sama lain.`,
            `${when1} atau ${when2} koneksi awal yang baru akan datang. Koneksi ini akan begitu segar dan istimewa sehingga membuat Anda melupakan semua masa lalu dan membuka bab baru dalam hidup.`,
            `${when2} atau ${when3} adalah peluang untuk bertemu cinta sejati seumur hidup. Orang yang Anda temui selama periode ini akan menjadi orang yang ditakdirkan yang dapat Anda cintai dengan tulus.`,
            `${when1} Anda dapat bertemu koneksi istimewa dalam pertemuan online atau komunitas. Bahkan dalam ruang online, Anda dapat menemukan peluang baik untuk cinta sejati.`,
            `${when2} dalam perjalanan menanti pertemuan yang ditakdirkan bagi Anda. Orang yang Anda temui di tempat baru mungkin menjadi koneksi istimewa yang mengubah hidup Anda.`,
            `${when1} atau ${when2} Anda dapat bertemu koneksi istimewa dalam kehidupan sehari-hari. Bahkan dalam momen sehari-hari yang tampak biasa, pertemuan yang ditakdirkan dapat datang kapan saja.`,
            `${when2} Anda dapat membentuk koneksi baik melalui pengenalan dari teman atau kenalan. Koneksi yang ditemui melalui pengenalan dari orang yang dapat dipercaya akan lebih stabil dan mendalam.`
          ];
        }
      },
      style: {
        ko: [
          '따뜻하고 배려심이 많은 사람입니다. 타인의 감정을 잘 이해하고 공감하는 능력이 뛰어나며, 항상 상대방을 먼저 생각하는 마음씨를 가지고 있습니다.',
          '진실하고 솔직한 성격을 소유한 사람입니다. 거짓 없이 마음을 열 수 있으며, 서로에게 정직한 대화를 나눌 수 있는 신뢰할 수 있는 사람입니다.',
          '로맨틱하고 감성적인 타입의 사람입니다. 작은 것에도 감동을 느끼며, 특별한 순간들을 만들어내는 것을 좋아하는 낭만적인 성향을 가지고 있습니다.',
          '함께 성장을 추구하는 사람입니다. 서로의 꿈과 목표를 응원하며, 함께 발전하고 성장해 나가는 것을 가장 중요하게 생각하는 사람입니다.',
          '소통을 중시하는 타입의 사람입니다. 대화를 통해 문제를 해결하고, 서로의 마음을 나누는 것을 소중하게 여기며, 깊은 유대감을 형성하는 것을 좋아합니다.',
          '진심으로 사랑할 수 있는 사람입니다. 허영심 없이 순수한 마음으로 상대방을 대하며, 진정한 사랑과 헌신을 보여줄 수 있는 신뢰할 수 있는 사람입니다.',
          '안정적이고 신뢰할 수 있는 사람입니다. 책임감이 강하며, 약속을 지키는 것을 중요하게 생각하며, 언제든지 의지할 수 있는 든든한 사람입니다.',
          '공감 능력이 탁월한 사람입니다. 상대방의 감정을 잘 이해하고 그에 맞는 적절한 반응을 보여주며, 서로를 위로하고 지지할 수 있는 사람입니다.',
          '활발하고 에너지가 넘치는 사람입니다. 밝고 긍정적인 에너지를 가지고 있으며, 함께 있는 시간을 즐겁고 활기차게 만들어주는 사람입니다.',
          '존중과 배려를 우선시하는 사람입니다. 상대방의 의견과 감정을 존중하며, 서로를 배려하는 마음으로 관계를 유지하는 것을 가장 중요하게 생각합니다.'
        ],
        en: [
          'A person with a caring and warm heart. They have an excellent ability to understand and empathize with others\' emotions, and they always think of others first with a considerate nature.',
          'A person with an honest and sincere personality. They can open their heart without falsehood and are trustworthy people with whom you can have honest conversations.',
          'A person with a romantic and emotional side. They are moved by small things, enjoy creating special moments, and have a romantic tendency.',
          'A person who pursues growth together. They support each other\'s dreams and goals, and consider growing and developing together as the most important thing.',
          'A person who values communication. They solve problems through dialogue, cherish sharing each other\'s hearts, and enjoy forming deep bonds.',
          'A person capable of sincere love. They treat their partner with a pure heart without vanity, and are trustworthy people who can show genuine love and devotion.',
          'A stable and trustworthy person. They have a strong sense of responsibility, value keeping promises, and are reliable people you can always depend on.',
          'A person with excellent empathy. They understand their partner\'s emotions well, show appropriate reactions, and can comfort and support each other.',
          'An active and energetic person. They have bright and positive energy and make time together enjoyable and lively.',
          'A person who prioritizes respect and consideration. They respect their partner\'s opinions and emotions, and consider maintaining relationships with mutual consideration as the most important thing.'
        ],
        ja: [
          '思いやりがあり、心温まる人です。他人の感情をよく理解し、共感する能力が優れており、いつも相手を先に考える心優しい人です。',
          '正直で誠実な性格を持っている人です。嘘偽りなく心を開くことができ、お互いに正直な会話を交わすことのできる信頼できる人です。',
          'ロマンチックで感情的なタイプの人です。小さなことにも感動し、特別な瞬間を作ることを好むロマンチックな傾向があります。',
          '一緒に成長を追求する人です。お互いの夢と目標を応援し、一緒に発展し成長していくことを最も重要に考えている人です。',
          'コミュニケーションを重視するタイプの人です。会話を通じて問題を解決し、お互いの心を共有することを大切にし、深い絆を形成することを好みます。',
          '誠心誠意愛することのできる人です。虚栄心なく純粋な心で相手に接し、真実の愛と献身を示すことのできる信頼できる人です。',
          '安定していて信頼できる人です。責任感が強く、約束を守ることを重要に考え、いつでも頼りになる人です。',
          '共感能力が優れている人です。相手の感情をよく理解し、それに適した適切な反応を示し、お互いを慰め支えることのできる人です。',
          '活発でエネルギーに溢れる人です。明るくポジティブなエネルギーを持ち、一緒にいる時間を楽しく活気のあるものにしてくれる人です。',
          '尊重と思いやりを優先する人です。相手の意見と感情を尊重し、お互いに思いやる心で関係を維持することを最も重要に考えています。'
        ],
        'zh-CN': [
          '一个有着关怀和温暖之心的人。他们有着出色的理解和共情他人情感的能力，总是以体贴的天性首先为他人着想。',
          '一个有着诚实和真诚性格的人。他们能够不带虚伪地敞开心扉，是可以与之进行诚实对话的值得信赖的人。',
          '一个浪漫和感性的人。他们会被小事感动，喜欢创造特别的时刻，具有浪漫的倾向。',
          '一个追求共同成长的人。他们支持彼此的梦想和目标，认为一起成长和发展是最重要的事情。',
          '一个重视沟通的人。他们通过对话解决问题，珍视分享彼此的心声，喜欢建立深厚的纽带。',
          '一个能够真心去爱的人。他们以纯真的心对待伴侣，不带虚荣心，是可以展现真正爱情和奉献的值得信赖的人。',
          '一个稳定和值得信赖的人。他们有强烈的责任感，重视遵守承诺，是你可以始终依靠的可靠的人。',
          '一个有着出色共情能力的人。他们很好地理解伴侣的情感，表现出适当的反应，能够互相安慰和支持。',
          '一个活跃且充满活力的人。他们有着明亮和积极的能量，使在一起的时光变得愉快和充满活力。',
          '一个优先考虑尊重和关怀的人。他们尊重伴侣的意见和情感，认为以相互关怀维护关系是最重要的事情。'
        ],
        'zh-TW': [
          '一個有著關懷和溫暖之心的人。他們有著出色的理解和共情他人情感的能力，總是以體貼的天性首先為他人著想。',
          '一個有著誠實和真誠性格的人。他們能夠不帶虛偽地敞開心扉，是可以與之進行誠實對話的值得信賴的人。',
          '一個浪漫和感性的人。他們會被小事感動，喜歡創造特別的時刻，具有浪漫的傾向。',
          '一個追求共同成長的人。他們支持彼此的夢想和目標，認為一起成長和發展是最重要的事情。',
          '一個重視溝通的人。他們通過對話解決問題，珍視分享彼此的心聲，喜歡建立深厚的紐帶。',
          '一個能夠真心去愛的人。他們以純真的心對待伴侶，不帶虛榮心，是可以展現真正愛情和奉獻的值得信賴的人。',
          '一個穩定和值得信賴的人。他們有強烈的責任感，重視遵守承諾，是你可以始終依靠的可靠的人。',
          '一個有著出色共情能力的人。他們很好地理解伴侶的情感，表現出適當的反應，能夠互相安慰和支持。',
          '一個活躍且充滿活力的人。他們有著明亮和積極的能量，使在一起的時光變得愉快和充滿活力。',
          '一個優先考慮尊重和關懷的人。他們尊重伴侶的意見和情感，認為以相互關懷維護關係是最重要的事情。'
        ],
        vi: [
          'Một người có trái tim quan tâm và ấm áp. Họ có khả năng hiểu và đồng cảm với cảm xúc của người khác một cách xuất sắc, và luôn nghĩ đến người khác trước với bản tính chu đáo.',
          'Một người có tính cách trung thực và chân thành. Họ có thể mở lòng mà không có sự giả dối và là những người đáng tin cậy mà bạn có thể có những cuộc trò chuyện chân thành.',
          'Một người có khía cạnh lãng mạn và cảm xúc. Họ xúc động bởi những điều nhỏ nhặt, thích tạo ra những khoảnh khắc đặc biệt, và có xu hướng lãng mạn.',
          'Một người theo đuổi sự phát triển cùng nhau. Họ ủng hộ ước mơ và mục tiêu của nhau, và coi việc cùng nhau phát triển là điều quan trọng nhất.',
          'Một người coi trọng giao tiếp. Họ giải quyết vấn đề thông qua đối thoại, trân trọng việc chia sẻ tâm tư của nhau, và thích hình thành mối liên kết sâu sắc.',
          'Một người có khả năng yêu chân thành. Họ đối xử với đối tác bằng trái tim thuần khiết mà không có sự phù phiếm, và là những người đáng tin cậy có thể thể hiện tình yêu và sự cống hiến thực sự.',
          'Một người ổn định và đáng tin cậy. Họ có ý thức trách nhiệm mạnh mẽ, coi trọng việc giữ lời hứa, và là những người đáng tin cậy mà bạn luôn có thể dựa vào.',
          'Một người có khả năng đồng cảm xuất sắc. Họ hiểu cảm xúc của đối tác rất tốt, thể hiện phản ứng phù hợp, và có thể an ủi và hỗ trợ lẫn nhau.',
          'Một người năng động và tràn đầy năng lượng. Họ có năng lượng tích cực và tươi sáng, và làm cho thời gian ở bên nhau trở nên vui vẻ và sôi động.',
          'Một người ưu tiên sự tôn trọng và quan tâm. Họ tôn trọng ý kiến và cảm xúc của đối tác, và coi việc duy trì mối quan hệ với sự quan tâm lẫn nhau là điều quan trọng nhất.'
        ],
        id: [
          'Seseorang dengan hati yang peduli dan hangat. Mereka memiliki kemampuan luar biasa untuk memahami dan berempati dengan emosi orang lain, dan selalu memikirkan orang lain terlebih dahulu dengan sifat yang penuh perhatian.',
          'Seseorang dengan kepribadian yang jujur dan tulus. Mereka dapat membuka hati tanpa kepalsuan dan merupakan orang yang dapat dipercaya dengan siapa Anda dapat melakukan percakapan yang jujur.',
          'Seseorang dengan sisi romantis dan emosional. Mereka terharu oleh hal-hal kecil, menikmati menciptakan momen spesial, dan memiliki kecenderungan romantis.',
          'Seseorang yang mengejar pertumbuhan bersama. Mereka mendukung mimpi dan tujuan satu sama lain, dan mempertimbangkan tumbuh dan berkembang bersama sebagai hal yang paling penting.',
          'Seseorang yang menghargai komunikasi. Mereka menyelesaikan masalah melalui dialog, menghargai berbagi hati satu sama lain, dan menikmati membentuk ikatan yang dalam.',
          'Seseorang yang mampu mencintai dengan tulus. Mereka memperlakukan pasangan mereka dengan hati yang murni tanpa kesombongan, dan merupakan orang yang dapat dipercaya yang dapat menunjukkan cinta dan pengabdian sejati.',
          'Seseorang yang stabil dan dapat dipercaya. Mereka memiliki rasa tanggung jawab yang kuat, menghargai menjaga janji, dan merupakan orang yang dapat diandalkan yang selalu dapat Anda andalkan.',
          'Seseorang dengan kemampuan empati yang luar biasa. Mereka memahami emosi pasangan mereka dengan baik, menunjukkan reaksi yang tepat, dan dapat saling menghibur dan mendukung.',
          'Seseorang yang aktif dan penuh energi. Mereka memiliki energi yang cerah dan positif serta membuat waktu bersama menyenangkan dan hidup.',
          'Seseorang yang memprioritaskan rasa hormat dan perhatian. Mereka menghormati pendapat dan emosi pasangan mereka, dan menganggap menjaga hubungan dengan saling perhatian sebagai hal yang paling penting.'
        ]
      },
      warning: {
        get ko() {
          const now = new Date();
          const next2 = getFutureMonthShort(2);
          const next4 = getFutureMonthShort(4);
          const next6 = getFutureMonthShort(6);
          const next8 = getFutureMonthShort(8);
          const next10 = getFutureMonthShort(10);
          return [
            `${next2} 감정의 기복에 주의하시기 바랍니다. 이 시기에는 감정이 불안정할 수 있으므로 중요한 결정은 보류하고 감정이 안정된 후에 판단하시는 것이 좋습니다.`,
            `${next4} 서두르지 말고 신중하게 결정하시기 바랍니다. 급하게 진행하면 나중에 후회할 수 있으므로 시간을 두고 깊이 생각해보시는 것이 중요합니다.`,
            `${next6} 과도한 기대는 실망을 불러올 수 있습니다. 현실적인 기대를 가지고 관계를 발전시켜 나가시는 것이 좋으며, 작은 것에도 감사하는 마음을 가지시기 바랍니다.`,
            `${next8} 질투와 의심을 경계하시기 바랍니다. 불필요한 오해와 의심은 관계를 해칠 수 있으므로, 신뢰를 바탕으로 소통하는 것이 중요합니다.`,
            `${next10} 경제적 갈등에 주의하시기 바랍니다. 금전 문제로 인한 갈등이 생길 수 있으므로 미리 대화를 통해 서로의 가치관을 나누고 이해하는 것이 필요합니다.`,
            '가족이나 친구들의 반대에 주의가 필요합니다. 주변 사람들의 반대는 관계에 부정적인 영향을 줄 수 있으므로, 주변 사람들을 설득하고 이해시키는 노력이 필요합니다.',
            '급한 결심은 위험할 수 있습니다. 중요한 결정은 충분한 시간을 두고 신중하게 고려하시며, 감정에 휘둘리지 않고 이성적으로 판단하시기 바랍니다.',
            '소통 부족 문제에 주의하시기 바랍니다. 대화가 부족하면 오해가 생기고 갈등이 커질 수 있으므로, 정기적으로 서로의 마음을 나누는 시간을 가지시기 바랍니다.',
            '과거 상처를 현재 관계에 경계하는 것이 필요합니다. 이전 관계에서 받은 상처를 새 관계에 적용하지 말고, 새로운 시작을 하는 마음가짐이 중요합니다.',
            '경솔한 판단은 금지해야 합니다. 중요한 일은 신중하게 판단하시며, 충분한 고민과 검토를 거친 후 결정을 내리시는 것이 바람직합니다.'
          ];
        },
        get en() {
          const now = new Date();
          const future2 = new Date(now.getFullYear(), now.getMonth() + 2, 1);
          const future4 = new Date(now.getFullYear(), now.getMonth() + 4, 1);
          const future6 = new Date(now.getFullYear(), now.getMonth() + 6, 1);
          const future8 = new Date(now.getFullYear(), now.getMonth() + 8, 1);
          const future10 = new Date(now.getFullYear(), now.getMonth() + 10, 1);
          
          const getMonthStr = (date: Date) => {
            const monthName = date.toLocaleString('en-US', { month: 'long' });
            if (date.getFullYear() > now.getFullYear()) {
              return `Next ${monthName}`;
            }
            return monthName;
          };
          
          const next2 = getMonthStr(future2);
          const next4 = getMonthStr(future4);
          const next6 = getMonthStr(future6);
          const next8 = getMonthStr(future8);
          const next10 = getMonthStr(future10);
          
          return [
            `Please be careful about emotional fluctuations in ${next2}. During this period, emotions may be unstable, so it is better to postpone important decisions and make judgments after your emotions have stabilized.`,
            `Please do not rush and make decisions carefully in ${next4}. If you proceed hastily, you may regret it later, so it is important to take time and think deeply.`,
            `Excessive expectations in ${next6} can lead to disappointment. It is good to develop the relationship with realistic expectations, and please have a grateful heart even for small things.`,
            `Please beware of jealousy and suspicion in ${next8}. Unnecessary misunderstandings and suspicions can damage the relationship, so it is important to communicate based on trust.`,
            `Please be careful about financial conflicts in ${next10}. Conflicts may arise due to money issues, so it is necessary to share and understand each other\'s values through dialogue in advance.`,
            'You need to be careful about opposition from family or friends. Opposition from people around you can have a negative impact on the relationship, so efforts to persuade and make them understand are necessary.',
            'Hasty decisions can be dangerous. Please consider important decisions carefully with sufficient time, and make judgments rationally without being swayed by emotions.',
            'Please be careful about communication problems. If there is insufficient dialogue, misunderstandings can arise and conflicts can grow, so please take time to share each other\'s hearts regularly.',
            'It is necessary to beware of bringing past wounds into the current relationship. Do not apply wounds received from previous relationships to new relationships, and it is important to have a mindset of starting fresh.',
            'Rash judgments should be avoided. Please judge important matters carefully, and it is desirable to make decisions after sufficient consideration and review.'
          ];
        },
        get ja() {
          const now = new Date();
          const future2 = new Date(now.getFullYear(), now.getMonth() + 2, 1);
          const future4 = new Date(now.getFullYear(), now.getMonth() + 4, 1);
          const future6 = new Date(now.getFullYear(), now.getMonth() + 6, 1);
          const future8 = new Date(now.getFullYear(), now.getMonth() + 8, 1);
          const future10 = new Date(now.getFullYear(), now.getMonth() + 10, 1);
          
          const getMonthStr = (date: Date) => {
            const monthName = date.toLocaleString('ja-JP', { month: 'long' });
            if (date.getFullYear() > now.getFullYear()) {
              return `来年${monthName}`;
            }
            return monthName;
          };
          
          const next2 = getMonthStr(future2);
          const next4 = getMonthStr(future4);
          const next6 = getMonthStr(future6);
          const next8 = getMonthStr(future8);
          const next10 = getMonthStr(future10);
          
          return [
            `${next2}には感情の浮き沈みに注意してください。この時期、感情が不安定になる可能性があるため、重要な決定は延期し、感情が安定してから判断することが良いでしょう。`,
            `${next4}には急がずに慎重に決断してください。急いで進めると後で後悔する可能性があるため、時間をかけて深く考えることが重要です。`,
            `${next6}には過度な期待は失望を招く可能性があります。現実的な期待を持って関係を発展させていくことが良く、小さなことにも感謝する心を持つことをお勧めします。`,
            `${next8}には嫉妬と疑いを警戒してください。不要な誤解や疑いは関係を損なう可能性があるため、信頼を基にコミュニケーションを取ることが重要です。`,
            `${next10}には経済的な対立に注意してください。お金の問題による対立が生じる可能性があるため、事前に対話を通じてお互いの価値観を共有し理解することが必要です。`,
            '家族や友人からの反対に注意が必要です。周りの人々の反対は関係に否定的な影響を与える可能性があるため、周りの人々を説得し理解させる努力が必要です。',
            '急いだ決断は危険な可能性があります。重要な決定は十分な時間をかけて慎重に考慮し、感情に流されず理性的に判断してください。',
            'コミュニケーション不足の問題に注意してください。対話が不足すると誤解が生じ、対立が大きくなる可能性があるため、定期的にお互いの心を共有する時間を持つことをお勧めします。',
            '過去の傷を現在の関係に警戒することが必要です。以前の関係で受けた傷を新しい関係に適用せず、新しいスタートを切る心構えが重要です。',
            '軽率な判断は避けるべきです。重要なことは慎重に判断し、十分な考慮と検討を経た後に決定を下すことが望ましいです。'
          ];
        },
        get 'zh-CN'() {
          const now = new Date();
          const future2 = new Date(now.getFullYear(), now.getMonth() + 2, 1);
          const future4 = new Date(now.getFullYear(), now.getMonth() + 4, 1);
          const future6 = new Date(now.getFullYear(), now.getMonth() + 6, 1);
          const future8 = new Date(now.getFullYear(), now.getMonth() + 8, 1);
          const future10 = new Date(now.getFullYear(), now.getMonth() + 10, 1);
          
          const getMonthStr = (date: Date) => {
            const monthName = date.toLocaleString('zh-CN', { month: 'long' });
            if (date.getFullYear() > now.getFullYear()) {
              return `明年${monthName}`;
            }
            return monthName;
          };
          
          const next2 = getMonthStr(future2);
          const next4 = getMonthStr(future4);
          const next6 = getMonthStr(future6);
          const next8 = getMonthStr(future8);
          const next10 = getMonthStr(future10);
          
          return [
            `${next2}请注意情绪波动。在这个时期，情绪可能不稳定，所以最好推迟重要决定，在情绪稳定后再做判断。`,
            `${next4}请不要着急，谨慎做决定。如果匆忙进行，以后可能会后悔，所以花时间深入思考是很重要的。`,
            `${next6}过度的期望可能导致失望。最好以现实的期望发展关系，并对小事情也保持感激之心。`,
            `${next8}请警惕嫉妒和怀疑。不必要的误解和怀疑可能损害关系，所以基于信任进行沟通是很重要的。`,
            `${next10}请注意经济冲突。可能会因为金钱问题产生冲突，所以有必要提前通过对话分享和理解彼此的价值观。`,
            '你需要注意来自家人或朋友的反对。周围人的反对可能对关系产生负面影响，所以需要努力说服并让他们理解。',
            '仓促的决定可能是危险的。请花足够的时间仔细考虑重要决定，并在不被情绪左右的情况下理性地做出判断。',
            '请注意沟通不足的问题。如果对话不足，可能会产生误解并导致冲突扩大，所以建议定期花时间分享彼此的心声。',
            '有必要警惕将过去的伤痛带入当前关系。不要将从前一段关系受到的伤害应用到新关系，以全新的开始的心态是很重要的。',
            '应该避免草率的判断。请仔细判断重要的事情，在经过充分的考虑和审查后再做决定是理想的。'
          ];
        },
        get 'zh-TW'() {
          const now = new Date();
          const future2 = new Date(now.getFullYear(), now.getMonth() + 2, 1);
          const future4 = new Date(now.getFullYear(), now.getMonth() + 4, 1);
          const future6 = new Date(now.getFullYear(), now.getMonth() + 6, 1);
          const future8 = new Date(now.getFullYear(), now.getMonth() + 8, 1);
          const future10 = new Date(now.getFullYear(), now.getMonth() + 10, 1);
          
          const getMonthStr = (date: Date) => {
            const monthName = date.toLocaleString('zh-TW', { month: 'long' });
            if (date.getFullYear() > now.getFullYear()) {
              return `明年${monthName}`;
            }
            return monthName;
          };
          
          const next2 = getMonthStr(future2);
          const next4 = getMonthStr(future4);
          const next6 = getMonthStr(future6);
          const next8 = getMonthStr(future8);
          const next10 = getMonthStr(future10);
          
          return [
            `${next2}請注意情緒波動。在這個時期，情緒可能不穩定，所以最好推遲重要決定，在情緒穩定後再做判斷。`,
            `${next4}請不要著急，謹慎做決定。如果匆忙進行，以後可能會後悔，所以花時間深入思考是很重要的。`,
            `${next6}過度的期望可能導致失望。最好以現實的期望發展關係，並對小事情也保持感激之心。`,
            `${next8}請警惕嫉妒和懷疑。不必要的誤解和懷疑可能損害關係，所以基於信任進行溝通是很重要的。`,
            `${next10}請注意經濟衝突。可能會因為金錢問題產生衝突，所以有必要提前通過對話分享和理解彼此的價值觀。`,
            '你需要注意來自家人或朋友的反對。周圍人的反對可能對關係產生負面影響，所以需要努力說服並讓他們理解。',
            '倉促的決定可能是危險的。請花足夠的時間仔細考慮重要決定，並在不被情緒左右的情況下理性地做出判斷。',
            '請注意溝通不足的問題。如果對話不足，可能會產生誤解並導致衝突擴大，所以建議定期花時間分享彼此的心聲。',
            '有必要警惕將過去的傷痛帶入當前關係。不要將從前一段關係受到的傷害應用到新關係，以全新的開始的心態是很重要的。',
            '應該避免草率的判斷。請仔細判斷重要的事情，在經過充分的考慮和審查後再做決定是理想的。'
          ];
        },
        get vi() {
          const now = new Date();
          const future2 = new Date(now.getFullYear(), now.getMonth() + 2, 1);
          const future4 = new Date(now.getFullYear(), now.getMonth() + 4, 1);
          const future6 = new Date(now.getFullYear(), now.getMonth() + 6, 1);
          const future8 = new Date(now.getFullYear(), now.getMonth() + 8, 1);
          const future10 = new Date(now.getFullYear(), now.getMonth() + 10, 1);
          
          const getMonthStr = (date: Date) => {
            const monthName = date.toLocaleString('vi-VN', { month: 'long' });
            if (date.getFullYear() > now.getFullYear()) {
              return `Tháng ${monthName} năm sau`;
            }
            return monthName;
          };
          
          const next2 = getMonthStr(future2);
          const next4 = getMonthStr(future4);
          const next6 = getMonthStr(future6);
          const next8 = getMonthStr(future8);
          const next10 = getMonthStr(future10);
          
          return [
            `${next2} hãy cẩn thận về biến động cảm xúc. Trong thời kỳ này, cảm xúc có thể không ổn định, vì vậy tốt hơn là hoãn các quyết định quan trọng và đưa ra phán đoán sau khi cảm xúc đã ổn định.`,
            `${next4} xin đừng vội vàng và hãy quyết định một cách cẩn thận. Nếu tiến hành một cách vội vàng, bạn có thể hối tiếc sau này, vì vậy điều quan trọng là dành thời gian và suy nghĩ sâu sắc.`,
            `${next6} kỳ vọng quá mức có thể dẫn đến thất vọng. Tốt hơn là phát triển mối quan hệ với kỳ vọng thực tế, và xin hãy có lòng biết ơn ngay cả đối với những điều nhỏ nhặt.`,
            `${next8} hãy cảnh giác với sự ghen tuông và nghi ngờ. Những hiểu lầm và nghi ngờ không cần thiết có thể làm tổn hại mối quan hệ, vì vậy điều quan trọng là giao tiếp dựa trên sự tin cậy.`,
            `${next10} hãy cẩn thận về xung đột tài chính. Xung đột có thể phát sinh do vấn đề tiền bạc, vì vậy cần thiết phải chia sẻ và hiểu giá trị của nhau thông qua đối thoại trước.`,
            'Bạn cần cẩn thận về sự phản đối từ gia đình hoặc bạn bè. Sự phản đối từ những người xung quanh có thể có tác động tiêu cực đến mối quan hệ, vì vậy cần nỗ lực thuyết phục và khiến họ hiểu.',
            'Quyết định vội vàng có thể nguy hiểm. Xin hãy xem xét cẩn thận các quyết định quan trọng với đủ thời gian, và đưa ra phán đoán một cách hợp lý mà không bị cảm xúc chi phối.',
            'Xin hãy cẩn thận về vấn đề thiếu giao tiếp. Nếu đối thoại không đủ, hiểu lầm có thể phát sinh và xung đột có thể lớn dần, vì vậy nên dành thời gian thường xuyên để chia sẻ tâm tư của nhau.',
            'Cần thiết phải cảnh giác với việc mang những vết thương trong quá khứ vào mối quan hệ hiện tại. Đừng áp dụng những vết thương nhận được từ các mối quan hệ trước đây vào các mối quan hệ mới, và điều quan trọng là có tâm thế bắt đầu mới.',
            'Nên tránh những phán đoán hấp tấp. Xin hãy xét đoán những việc quan trọng một cách cẩn thận, và điều mong muốn là đưa ra quyết định sau khi có đủ cân nhắc và xem xét.'
          ];
        },
        get id() {
          const now = new Date();
          const future2 = new Date(now.getFullYear(), now.getMonth() + 2, 1);
          const future4 = new Date(now.getFullYear(), now.getMonth() + 4, 1);
          const future6 = new Date(now.getFullYear(), now.getMonth() + 6, 1);
          const future8 = new Date(now.getFullYear(), now.getMonth() + 8, 1);
          const future10 = new Date(now.getFullYear(), now.getMonth() + 10, 1);
          
          const getMonthStr = (date: Date) => {
            const monthName = date.toLocaleString('id-ID', { month: 'long' });
            if (date.getFullYear() > now.getFullYear()) {
              return `${monthName} tahun depan`;
            }
            return monthName;
          };
          
          const next2 = getMonthStr(future2);
          const next4 = getMonthStr(future4);
          const next6 = getMonthStr(future6);
          const next8 = getMonthStr(future8);
          const next10 = getMonthStr(future10);
          
          return [
            `${next2} harap berhati-hati dengan fluktuasi emosional. Selama periode ini, emosi mungkin tidak stabil, jadi lebih baik menunda keputusan penting dan membuat penilaian setelah emosi Anda stabil.`,
            `${next4} harap jangan terburu-buru dan putuskan dengan hati-hati. Jika Anda melanjutkan dengan terburu-buru, Anda mungkin menyesal kemudian, jadi penting untuk meluangkan waktu dan berpikir mendalam.`,
            `${next6} ekspektasi berlebihan dapat menyebabkan kekecewaan. Adalah baik untuk mengembangkan hubungan dengan ekspektasi realistis, dan harap memiliki hati yang bersyukur bahkan untuk hal-hal kecil.`,
            `${next8} harap waspada terhadap kecemburuan dan kecurigaan. Kesalahpahaman dan kecurigaan yang tidak perlu dapat merusak hubungan, jadi penting untuk berkomunikasi berdasarkan kepercayaan.`,
            `${next10} harap berhati-hati dengan konflik keuangan. Konflik mungkin timbul karena masalah uang, jadi perlu berbagi dan memahami nilai-nilai satu sama lain melalui dialog sebelumnya.`,
            'Anda perlu berhati-hati terhadap oposisi dari keluarga atau teman. Oposisi dari orang di sekitar Anda dapat memiliki dampak negatif pada hubungan, jadi upaya untuk membujuk dan membuat mereka memahami diperlukan.',
            'Keputusan yang terburu-buru bisa berbahaya. Harap pertimbangkan keputusan penting dengan hati-hati dengan waktu yang cukup, dan buat penilaian secara rasional tanpa terpengaruh oleh emosi.',
            'Harap berhati-hati dengan masalah kurangnya komunikasi. Jika tidak ada cukup dialog, kesalahpahaman dapat timbul dan konflik dapat tumbuh, jadi harap luangkan waktu untuk berbagi hati satu sama lain secara teratur.',
            'Perlu waspada terhadap membawa luka masa lalu ke dalam hubungan saat ini. Jangan menerapkan luka yang diterima dari hubungan sebelumnya ke hubungan baru, dan penting untuk memiliki pola pikir memulai segar.',
            'Penilaian yang gegabah harus dihindari. Harap nilai hal-hal penting dengan hati-hati, dan diinginkan untuk membuat keputusan setelah pertimbangan dan tinjauan yang memadai.'
          ];
        }
      }
    }
  },
  {
    id: 2,
    title: {
      ko: '좋은 연애운 기대 가능',
      en: 'Good Love Fortune Expected',
      ja: '良い恋愛運が期待できます',
      'zh-CN': '恋爱运良好',
      'zh-TW': '戀愛運良好',
      vi: 'Vận Tình Duyên Tốt Được Mong Đợi',
      id: 'Nasib Cinta Baik Diharapkan'
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
          periodText = `${currentYear}년 말 또는 ${currentYear + 1}년 초`;
        } else {
          periodText = `${currentYear + 1}년 초`;
        }
        
        return [
          `${periodText} 좋은 인연을 만날 가능성이 높습니다. 운명적인 만남은 아니더라도 진심으로 상대할 수 있는 좋은 사람을 만나게 될 것입니다.`,
          `${periodText} 새로운 인연이 찾아올 것입니다. 서로를 이해하고 배려하며 함께 성장해 나갈 수 있는 관계를 맺을 수 있습니다.`,
          `${periodText} 연애운이 좋아지는 시기입니다. 적극적인 자세로 나서면 만족스러운 인연을 만날 수 있으며, 관계도 순조롭게 발전할 것입니다.`,
          `${periodText} 진심 어린 마음을 가진 사람을 만날 수 있습니다. 서로를 배려하고 존중하는 건강한 관계를 형성할 수 있는 좋은 기회가 찾아옵니다.`,
          `${periodText} 연애에서 긍정적인 변화가 예상됩니다. 새로운 인연이나 기존 관계의 발전을 통해 더욱 행복한 시간을 보낼 수 있을 것입니다.`,
          `${periodText} 좋은 인연을 만날 수 있는 기회가 많아집니다. 다양한 만남의 기회가 생기며, 그 중에서도 특별한 인연을 선택할 수 있습니다.`,
          `${periodText} 연애운이 상승하는 시기입니다. 자신감을 갖고 적극적으로 나서면 좋은 결과를 얻을 수 있으며, 만족스러운 관계를 맺을 수 있습니다.`,
          `${periodText} 안정적이고 진실한 인연을 만날 수 있습니다. 서로를 신뢰하고 의지할 수 있는 관계를 형성하며, 오래 지속될 수 있는 인연이 될 것입니다.`,
          `${periodText} 연애에서 행운이 따를 것입니다. 우연한 만남이나 예상치 못한 곳에서 좋은 인연을 만나게 되며, 그 인연이 큰 의미를 가질 것입니다.`,
          `${periodText} 진심 어린 사람과의 인연을 맺을 수 있습니다. 진실하고 솔직한 대화를 나눌 수 있으며, 서로에게 힘이 되어주는 관계를 만들 수 있습니다.`
        ];
      },
      en: [
        'You are likely to meet a good connection. Even if not a destined meeting, you will meet someone you can sincerely care for.',
        'A new connection will come to you. You can form a relationship where you understand, care for, and grow together.',
        'Your love fortune is improving. With an active attitude, you can meet a satisfying connection and the relationship will develop smoothly.',
        'You can meet someone with a sincere heart. A good opportunity comes to form a healthy relationship where you care for and respect each other.',
        'Positive changes in love are expected. Through new connections or development of existing relationships, you can enjoy happier times.',
        'There will be many opportunities to meet good connections. Various meeting opportunities will arise, and among them, you can choose a special one.',
        'Your love fortune is rising. With confidence and active attitude, you can get good results and form a satisfying relationship.',
        'You can meet a stable and sincere connection. You will form a relationship where you can trust and rely on each other, which will last long.',
        'Fortune will follow in love. You will meet a good connection by chance or in unexpected places, and that connection will have great meaning.',
        'You can form a connection with a sincere person. You can have honest and sincere conversations and create a relationship that supports each other.'
      ],
      ja: [
        '良い縁に会える可能性が高いです。運命的な出会いではないにしても、心から相手にできる良い人に会えるでしょう。',
        '新しい縁が訪れるでしょう。お互いを理解し、思いやり、共に成長していける関係を結ぶことができます。',
        '恋愛運が良くなる時期です。積極的な姿勢で臨めば満足のいく縁に会え、関係も順調に発展するでしょう。',
        '心からの気持ちを持った人に会えるでしょう。お互いを思いやり、尊重する健康的な関係を形成できる良い機会が訪れます。',
        '恋愛でポジティブな変化が予想されます。新しい縁や既存の関係の発展を通じて、より幸せな時間を過ごすことができるでしょう。',
        '良い縁に会える機会が多くなります。様々な出会いの機会が生まれ、その中から特別な縁を選ぶことができます。',
        '恋愛運が上昇する時期です。自信を持って積極的に臨めば良い結果を得られ、満足のいく関係を結ぶことができます。',
        '安定していて誠実な縁に会えるでしょう。お互いを信頼し、頼ることができる関係を形成し、長く続く縁になるでしょう。',
        '恋愛で幸運がついてくるでしょう。偶然の出会いや予想外の場所で良い縁に会い、その縁が大きな意味を持つでしょう。',
        '心からの人との縁を結ぶことができるでしょう。誠実で正直な会話を交わすことができ、お互いに力となれる関係を作ることができます。'
      ],
      'zh-CN': [
        '很可能遇到好的缘分。即使不是命中注定的相遇，也会遇到可以真心对待的好人。',
        '新的缘分会来到。可以形成相互理解、关怀并共同成长的关系。',
        '恋爱运好转的时期。以积极的态度应对，可以遇到满意的缘分，关系也会顺利发展。',
        '可以遇到真诚的人。形成相互关怀和尊重的健康关系的好机会即将到来。',
        '恋爱方面预期会有积极的变化。通过新的缘分或现有关系的发展，可以享受更快乐的时光。',
        '会有更多机会遇到好的缘分。各种相遇的机会会出现，从中可以选择特别的缘分。',
        '恋爱运上升的时期。带着信心积极应对，可以获得好的结果并形成满意的关系。',
        '可以遇到稳定和真诚的缘分。将形成可以相互信任和依赖的关系，这个缘分将长久持续。',
        '恋爱中会有好运跟随。会在偶然的相遇或意想不到的地方遇到好的缘分，这个缘分将具有重要意义。',
        '可以与真诚的人结缘。可以进行诚实和真诚的对话，创建相互支持的关系。'
      ],
      'zh-TW': [
        '很可能遇到好的緣分。即使不是命中註定的相遇，也會遇到可以真心對待的好人。',
        '新的緣分會來到。可以形成相互理解、關懷並共同成長的關係。',
        '戀愛運好轉的時期。以積極的態度應對，可以遇到滿意的緣分，關係也會順利發展。',
        '可以遇到真誠的人。形成相互關懷和尊重的健康關係的好機會即將到來。',
        '戀愛方面預期會有積極的變化。通過新的緣分或現有關係的發展，可以享受更快樂的時光。',
        '會有更多機會遇到好的緣分。各種相遇的機會會出現，從中可以選擇特別的緣分。',
        '戀愛運上升的時期。帶著信心積極應對，可以獲得好的結果並形成滿意的關係。',
        '可以遇到穩定和真誠的緣分。將形成可以相互信任和依賴的關係，這個緣分將長久持續。',
        '戀愛中會有好運跟隨。會在偶然的相遇或意想不到的地方遇到好的緣分，這個緣分將具有重要意義。',
        '可以與真誠的人結緣。可以進行誠實和真誠的對話，創建相互支持的關係。'
      ],
      vi: [
        'Bạn có khả năng cao gặp được một kết nối tốt. Ngay cả khi không phải là cuộc gặp gỡ định mệnh, bạn sẽ gặp ai đó mà bạn có thể chân thành quan tâm.',
        'Một kết nối mới sẽ đến với bạn. Bạn có thể hình thành một mối quan hệ nơi bạn hiểu, quan tâm và cùng nhau phát triển.',
        'Vận tình duyên của bạn đang cải thiện. Với thái độ tích cực, bạn có thể gặp một kết nối thỏa mãn và mối quan hệ sẽ phát triển suôn sẻ.',
        'Bạn có thể gặp ai đó có trái tim chân thành. Một cơ hội tốt đến để hình thành một mối quan hệ lành mạnh nơi bạn quan tâm và tôn trọng lẫn nhau.',
        'Những thay đổi tích cực trong tình yêu được mong đợi. Thông qua các kết nối mới hoặc phát triển của các mối quan hệ hiện có, bạn có thể tận hưởng những khoảng thời gian hạnh phúc hơn.',
        'Sẽ có nhiều cơ hội để gặp các kết nối tốt. Nhiều cơ hội gặp gỡ sẽ nảy sinh, và trong số đó, bạn có thể chọn một cái đặc biệt.',
        'Vận tình duyên của bạn đang tăng lên. Với sự tự tin và thái độ tích cực, bạn có thể đạt được kết quả tốt và hình thành một mối quan hệ thỏa mãn.',
        'Bạn có thể gặp một kết nối ổn định và chân thành. Bạn sẽ hình thành một mối quan hệ nơi bạn có thể tin tưởng và dựa vào nhau, điều này sẽ kéo dài.',
        'Vận may sẽ theo trong tình yêu. Bạn sẽ gặp một kết nối tốt một cách tình cờ hoặc ở những nơi không ngờ tới, và kết nối đó sẽ có ý nghĩa lớn.',
        'Bạn có thể hình thành một kết nối với một người chân thành. Bạn có thể có những cuộc trò chuyện trung thực và chân thành và tạo ra một mối quan hệ hỗ trợ lẫn nhau.'
      ],
      id: [
        'Anda kemungkinan akan bertemu koneksi yang baik. Bahkan jika bukan pertemuan yang ditakdirkan, Anda akan bertemu seseorang yang dapat Anda pedulikan dengan sungguh-sungguh.',
        'Koneksi baru akan datang kepada Anda. Anda dapat membentuk hubungan di mana Anda saling memahami, peduli, dan tumbuh bersama.',
        'Nasib cinta Anda sedang membaik. Dengan sikap aktif, Anda dapat bertemu koneksi yang memuaskan dan hubungan akan berkembang dengan mulus.',
        'Anda dapat bertemu seseorang dengan hati yang tulus. Kesempatan baik datang untuk membentuk hubungan yang sehat di mana Anda saling peduli dan menghormati.',
        'Perubahan positif dalam cinta diharapkan. Melalui koneksi baru atau pengembangan hubungan yang ada, Anda dapat menikmati waktu yang lebih bahagia.',
        'Akan ada banyak peluang untuk bertemu koneksi yang baik. Berbagai peluang pertemuan akan muncul, dan di antara mereka, Anda dapat memilih yang istimewa.',
        'Nasib cinta Anda sedang meningkat. Dengan kepercayaan diri dan sikap aktif, Anda dapat mendapatkan hasil yang baik dan membentuk hubungan yang memuaskan.',
        'Anda dapat bertemu koneksi yang stabil dan tulus. Anda akan membentuk hubungan di mana Anda dapat saling mempercayai dan mengandalkan, yang akan bertahan lama.',
        'Keberuntungan akan mengikuti dalam cinta. Anda akan bertemu koneksi yang baik secara kebetulan atau di tempat-tempat yang tidak terduga, dan koneksi itu akan memiliki arti besar.',
        'Anda dapat membentuk koneksi dengan seseorang yang tulus. Anda dapat melakukan percakapan yang jujur dan tulus dan menciptakan hubungan yang saling mendukung.'
      ]
    },
    emoji: '💖',
    scoreRange: [80, 89],
    strengths: {
      ko: ['배려심', '진실함', '로맨틱', '소통능력', '인내심', '이해심', '긍정적 에너지', '신뢰할 수 있음', '협조적', '유머감각'],
      en: ['Caring', 'Sincere', 'Romantic', 'Communication', 'Patience', 'Understanding', 'Positive energy', 'Trustworthy', 'Cooperative', 'Sense of humor'],
      ja: ['思いやり', '誠実', 'ロマンチック', 'コミュニケーション', '忍耐', '理解力', 'ポジティブなエネルギー', '信頼できる', '協力的', 'ユーモアのセンス'],
      'zh-CN': ['体贴', '真诚', '浪漫', '沟通能力', '耐心', '理解力', '正能量', '值得信赖', '合作', '幽默感'],
      'zh-TW': ['體貼', '真誠', '浪漫', '溝通能力', '耐心', '理解力', '正能量', '值得信賴', '合作', '幽默感'],
      vi: ['Quan tâm', 'Chân thành', 'Lãng mạn', 'Giao tiếp', 'Kiên nhẫn', 'Thấu hiểu', 'Năng lượng tích cực', 'Đáng tin cậy', 'Hợp tác', 'Khiếu hài hước'],
      id: ['Peduli', 'Tulus', 'Romantis', 'Komunikasi', 'Kesabaran', 'Pemahaman', 'Energi positif', 'Dapat dipercaya', 'Kooperatif', 'Selera humor']
    },
    recommendations: {
      ko: ['적극적인 만남', '솔직한 소통', '서로 배려', '인내심', '신뢰 구축', '공통 취미 활동', '데이트 계획하기', '서로의 감정 존중', '긍정적 피드백', '기념일 챙기기'],
      en: ['Active meetings', 'Honest communication', 'Mutual care', 'Patience', 'Building trust', 'Common hobby activities', 'Planning dates', 'Respecting each other\'s emotions', 'Positive feedback', 'Remembering anniversaries'],
      ja: ['積極的な出会い', '正直なコミュニケーション', '相互配慮', '忍耐', '信頼構築', '共通の趣味活動', 'デートの計画', 'お互いの感情を尊重', 'ポジティブなフィードバック', '記念日を覚える'],
      'zh-CN': ['积极见面', '真诚沟通', '相互体贴', '耐心', '建立信任', '共同爱好活动', '计划约会', '尊重彼此情感', '积极反馈', '记住纪念日'],
      'zh-TW': ['積極見面', '真誠溝通', '相互體貼', '耐心', '建立信任', '共同愛好活動', '計劃約會', '尊重彼此情感', '積極反饋', '記住紀念日'],
      vi: ['Gặp gỡ tích cực', 'Giao tiếp thành thật', 'Quan tâm lẫn nhau', 'Kiên nhẫn', 'Xây dựng niềm tin', 'Hoạt động sở thích chung', 'Lập kế hoạch hẹn hò', 'Tôn trọng cảm xúc của nhau', 'Phản hồi tích cực', 'Nhớ ngày kỷ niệm'],
      id: ['Pertemuan aktif', 'Komunikasi jujur', 'Perawatan bersama', 'Kesabaran', 'Membangun kepercayaan', 'Aktivitas hobi bersama', 'Merencanakan kencan', 'Menghormati emosi satu sama lain', 'Umpan balik positif', 'Mengingat hari jadi']
    },
    personality: {
      ko: [
        '배려심이 많고 타인을 생각하는 마음이 큽니다.',
        '진실하고 솔직한 성격으로 거짓이 없는 사람입니다.',
        '로맨틱한 순간을 만드는 것을 좋아합니다.',
        '소통을 통해 문제를 해결하려고 노력합니다.',
        '인내심이 있어 관계를 지켜나갈 수 있습니다.'
      ],
      en: [
        'You care deeply for others and think of them often.',
        'You have an honest and sincere personality with no falsehood.',
        'You enjoy creating romantic moments.',
        'You try to solve problems through communication.',
        'You have patience to maintain relationships.'
      ],
      ja: [
        '思いやりが多く、他人を考える心が大きいです。',
        '正直で誠実な性格で、嘘のない人です。',
        'ロマンチックな瞬間を作ることを好きです。',
        'コミュニケーションを通じて問題を解決しようと努力します。',
        '忍耐があり、関係を守っていくことができます。'
      ],
      'zh-CN': [
        '你非常关心他人，经常为他人着想。',
        '你有着诚实和真诚的性格，没有虚假。',
        '你喜欢创造浪漫的时刻。',
        '你努力通过沟通解决问题。',
        '你有耐心维持关系。'
      ],
      'zh-TW': [
        '你非常關心他人，經常為他人著想。',
        '你有著誠實和真誠的性格，沒有虛假。',
        '你喜歡創造浪漫的時刻。',
        '你努力通過溝通解決問題。',
        '你有耐心維持關係。'
      ],
      vi: [
        'Bạn quan tâm sâu sắc đến người khác và thường nghĩ về họ.',
        'Bạn có tính cách trung thực và chân thành không có sự giả dối.',
        'Bạn thích tạo ra những khoảnh khắc lãng mạn.',
        'Bạn cố gắng giải quyết vấn đề thông qua giao tiếp.',
        'Bạn có sự kiên nhẫn để duy trì các mối quan hệ.'
      ],
      id: [
        'Anda sangat peduli pada orang lain dan sering memikirkannya.',
        'Anda memiliki kepribadian yang jujur dan tulus tanpa kepalsuan.',
        'Anda menikmati menciptakan momen romantis.',
        'Anda mencoba menyelesaikan masalah melalui komunikasi.',
        'Anda memiliki kesabaran untuk mempertahankan hubungan.'
      ]
    },
    advice: {
      get ko() {
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth() + 1;
        
        let periodText = '';
        if (currentMonth <= 10) {
          periodText = `${currentYear}년 말 또는 ${currentYear + 1}년 초`;
        } else if (currentMonth === 11) {
          periodText = `${currentYear}년 말 또는 ${currentYear + 1}년 초`;
        } else {
          periodText = `${currentYear + 1}년 초`;
        }
        
        return [
          `${periodText} 적극적으로 만남을 시도하는 것이 좋습니다. 좋은 인연을 만나기 위해서는 나서는 자세가 중요하며, 다양한 모임에 참여해보시기 바랍니다.`,
          '진심으로 상대방과 소통하시기 바랍니다. 표면적인 대화보다는 마음을 열고 진솔하게 대화하며, 서로를 이해하는 노력이 관계를 더욱 깊게 만들어줄 것입니다.',
          '서두르지 말고 자연스럽게 진행하시기 바랍니다. 관계는 시간을 두고 천천히 발전하는 것이 좋으므로, 무리하게 진행하지 말고 자연스러운 흐름을 따르시기 바랍니다.',
          '감정을 존중하며 배려하는 것이 매우 중요합니다. 상대방의 감정과 생각을 이해하고 존중하며, 서로를 배려하는 마음으로 대하시면 관계가 더욱 좋아질 것입니다.',
          '솔직한 대화를 나누는 것이 좋습니다. 숨기거나 거짓말하지 않고 진심을 담아 대화하며, 서로의 마음을 이해하고 공감하는 대화를 나누시기 바랍니다.',
          '함께 하는 시간을 소중히 여기시기 바랍니다. 단순히 함께 있는 것이 아니라, 그 시간을 의미 있게 활용하며 서로에게 좋은 추억을 만들어 가시기 바랍니다.',
          '서로를 신뢰하고 지지하는 것이 중요합니다. 상대방의 목표와 꿈을 존중하고 응원하며, 함께 그 목표를 이뤄나가는 과정에서 더 깊은 유대감을 형성할 수 있습니다.',
          '작은 로맨틱한 순간들을 만드는 것을 시도하시기 바랍니다. 특별한 날뿐만 아니라 일상 속에서도 작은 로맨틱한 순간들을 만들어 서로에 대한 사랑을 표현하시면 관계가 더욱 좋아질 것입니다.',
          '인내심을 가지고 관계를 발전시키시기 바랍니다. 관계에 어려움이 있을 수 있지만, 인내심을 가지고 서로 이해하고 노력한다면 좋은 결과를 얻을 수 있을 것입니다.',
          '자연스럽게 관계를 발전시키는 것이 좋습니다. 강요하거나 억지로 만든 관계보다는 자연스럽게 흘러가는 관계가 더 오래 지속되며, 건강한 관계를 유지할 수 있습니다.'
        ];
      },
      en: [
        'It is necessary to try active meetings. An active attitude is important to meet new connections, and please participate in various activities or gatherings.',
        'Please communicate sincerely with your partner. Rather than superficial conversations, open your heart and have honest conversations, and efforts to understand each other will make the relationship deeper.',
        'Please proceed slowly without rushing. Relationships develop naturally over time, so it is important not to force progress but to move forward step by step.',
        'Respecting emotions and showing consideration is very important. Understanding and respecting your partner\'s emotions and thoughts, and treating each other with consideration will deepen the relationship.',
        'It is good to pursue honest conversations. Without hiding or lying, have conversations with sincerity, and please share conversations where you understand and empathize with each other\'s hearts.',
        'Please cherish the time spent together. Rather than simply being together, please make meaningful use of that time and create good memories for each other.',
        'Supporting each other\'s dreams is important. Respect and support your partner\'s goals and dreams, and you can form deeper bonds in the process of achieving those dreams together.',
        'Please try to create romantic moments. Creating small romantic moments on special days or in daily life to express love for each other will make the relationship even sweeter.',
        'Please develop the relationship with patience. All relationships have difficulties, but if you understand and work together with patience, you can overcome any difficulty.',
        'It is good to let the relationship develop naturally. A relationship that flows naturally lasts longer than forced relationships, and you can share true love.'
      ],
      get ja() {
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth() + 1;
        
        let periodText = '';
        if (currentMonth <= 10) {
          periodText = `${currentYear}年末または${currentYear + 1}年初`;
        } else if (currentMonth === 11) {
          periodText = `${currentYear}年末または${currentYear + 1}年初`;
        } else {
          periodText = `${currentYear + 1}年初`;
        }
        
        return [
          `${periodText}積極的に出会いを試みることが良いです。良い縁に会うためには臨む姿勢が重要であり、様々な集まりに参加してみてください。`,
          '心から相手とコミュニケーションを取ってください。表面的な会話よりも心を開いて誠実に会話し、お互いを理解する努力が関係をより深くしてくれるでしょう。',
          '急がずに自然に進めてください。関係は時間をかけてゆっくり発展するのが良いため、無理に進めず、自然な流れに従ってください。',
          '感情を尊重し配慮することが非常に重要です。相手の感情と思考を理解し尊重し、お互いに配慮する心で接すれば、関係はより良くなるでしょう。',
          '正直な会話を交わすことが良いです。隠したり嘘をついたりせず、真心を込めて会話し、お互いの心を理解し共感する会話を交わしてください。',
          '一緒にする時間を大切にしてください。単に一緒にいるだけでなく、その時間を意味のあるものとして活用し、お互いに良い思い出を作ってください。',
          'お互いを信頼し支えることが重要です。相手の目標と夢を尊重し応援し、一緒にその目標を実現していく過程で、より深い絆を形成できます。',
          '小さなロマンチックな瞬間を作ることを試してみてください。特別な日だけでなく日常の中でも小さなロマンチックな瞬間を作り、お互いへの愛を表現すれば、関係はより良くなるでしょう。',
          '忍耐力を持って関係を発展させてください。関係に困難があるかもしれませんが、忍耐力を持ってお互いを理解し努力すれば、良い結果を得られるでしょう。',
          '自然に関係を発展させることが良いです。強要したり無理やり作った関係よりも、自然に流れていく関係の方がより長く続き、健康的な関係を維持できます。'
        ];
      },
      get 'zh-CN'() {
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth() + 1;
        
        let periodText = '';
        if (currentMonth <= 10) {
          periodText = `${currentYear}年末或${currentYear + 1}年初`;
        } else if (currentMonth === 11) {
          periodText = `${currentYear}年末或${currentYear + 1}年初`;
        } else {
          periodText = `${currentYear + 1}年初`;
        }
        
        return [
          `${periodText}积极尝试见面是好的。为了遇到好的缘分，主动的态度很重要，请参与各种聚会。`,
          '请用真诚的心与对方沟通。与表面的对话相比，敞开心扉真诚地对话，理解彼此的努力将使关系更加深入。',
          '请不要着急，自然地进展。关系需要时间慢慢发展是好的，所以不要强行推进，请遵循自然的流程。',
          '尊重感情并给予关怀非常重要。理解并尊重对方的感情和想法，以相互关怀的心对待，关系会变得更好。',
          '进行真诚的对话是好的。不要隐瞒或撒谎，用真心对话，请进行理解并共情彼此心声的对话。',
          '请珍惜在一起的时间。不仅仅是简单地在一起，请有意义地利用那个时间，为彼此创造美好的回忆。',
          '相互信任和支持是重要的。尊重并支持对方的目标和梦想，在共同实现这些目标的过程中，可以形成更深的纽带。',
          '请尝试创造小的浪漫时刻。不仅在特殊的日子，在日常生活中也创造小的浪漫时刻表达彼此的爱，关系会变得更好。',
          '请以耐心发展关系。关系可能有困难，但如果你带着耐心理解彼此并努力，可以获得好的结果。',
          '自然地发展关系是好的。自然流淌的关系比强迫或勉强建立的关系持续更久，可以维持健康的关系。'
        ];
      },
      get 'zh-TW'() {
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth() + 1;
        
        let periodText = '';
        if (currentMonth <= 10) {
          periodText = `${currentYear}年末或${currentYear + 1}年初`;
        } else if (currentMonth === 11) {
          periodText = `${currentYear}年末或${currentYear + 1}年初`;
        } else {
          periodText = `${currentYear + 1}年初`;
        }
        
        return [
          `${periodText}積極嘗試見面是好的。為了遇到好的緣分，主動的態度很重要，請參與各種聚會。`,
          '請用真誠的心與對方溝通。與表面的對話相比，敞開心扉真誠地對話，理解彼此的努力將使關係更加深入。',
          '請不要著急，自然地進展。關係需要時間慢慢發展是好的，所以不要強行推進，請遵循自然的流程。',
          '尊重感情並給予關懷非常重要。理解並尊重對方的感情和想法，以相互關懷的心對待，關係會變得更好。',
          '進行真誠的對話是好的。不要隱瞞或撒謊，用真心對話，請進行理解並共情彼此心聲的對話。',
          '請珍惜在一起的時間。不僅僅是簡單地在一起，請有意義地利用那個時間，為彼此創造美好的回憶。',
          '相互信任和支持是重要的。尊重並支持對方的目標和夢想，在共同實現這些目標的過程中，可以形成更深的紐帶。',
          '請嘗試創造小的浪漫時刻。不僅在特殊的日子，在日常生活中也創造小的浪漫時刻表達彼此的愛，關係會變得更好。',
          '請以耐心發展關係。關係可能有困難，但如果你帶著耐心理解彼此並努力，可以獲得好的結果。',
          '自然地發展關係是好的。自然流淌的關係比強迫或勉強建立的關係持續更久，可以維持健康的關係。'
        ];
      },
      get vi() {
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth() + 1;
        
        let periodText = '';
        if (currentMonth <= 10) {
          periodText = `Cuối ${currentYear} hoặc đầu ${currentYear + 1}`;
        } else if (currentMonth === 11) {
          periodText = `Cuối ${currentYear} hoặc đầu ${currentYear + 1}`;
        } else {
          periodText = `Đầu ${currentYear + 1}`;
        }
        
        return [
          `${periodText} thử gặp gỡ tích cực là tốt. Để gặp được duyên phận tốt, thái độ chủ động là quan trọng, xin hãy tham gia các buổi gặp gỡ đa dạng.`,
          'Xin hãy giao tiếp chân thành với đối tác. Thay vì những cuộc trò chuyện bề mặt, hãy mở lòng và có những cuộc trò chuyện chân thành, nỗ lực hiểu nhau sẽ làm cho mối quan hệ trở nên sâu sắc hơn.',
          'Xin đừng vội vàng, hãy tiến triển một cách tự nhiên. Mối quan hệ phát triển tự nhiên theo thời gian là tốt, vì vậy điều quan trọng là không ép buộc tiến độ mà tiến lên từng bước.',
          'Tôn trọng cảm xúc và thể hiện sự quan tâm là rất quan trọng. Hiểu và tôn trọng cảm xúc, suy nghĩ của đối tác, và đối xử với nhau bằng sự quan tâm sẽ làm sâu sắc mối quan hệ.',
          'Theo đuổi những cuộc trò chuyện chân thành là tốt. Không giấu giếm hoặc nói dối, hãy có những cuộc trò chuyện với sự chân thành, và xin hãy chia sẻ những cuộc trò chuyện nơi bạn hiểu và đồng cảm với tâm tư của nhau.',
          'Xin hãy trân trọng thời gian ở bên nhau. Thay vì chỉ đơn giản là ở bên nhau, xin hãy sử dụng thời gian đó một cách có ý nghĩa và tạo ra những kỷ niệm đẹp cho nhau.',
          'Hỗ trợ ước mơ của nhau là quan trọng. Tôn trọng và ủng hộ mục tiêu, ước mơ của đối tác, và bạn có thể hình thành mối liên kết sâu sắc hơn trong quá trình cùng nhau đạt được những ước mơ đó.',
          'Xin hãy thử tạo ra những khoảnh khắc lãng mạn nhỏ. Tạo ra những khoảnh khắc lãng mạn nhỏ trong những ngày đặc biệt hoặc trong cuộc sống hàng ngày để thể hiện tình yêu cho nhau sẽ làm cho mối quan hệ trở nên ngọt ngào hơn.',
          'Xin hãy phát triển mối quan hệ với sự kiên nhẫn. Tất cả các mối quan hệ đều có khó khăn, nhưng nếu bạn hiểu và làm việc cùng nhau với sự kiên nhẫn, bạn có thể vượt qua mọi khó khăn.',
          'Để mối quan hệ phát triển tự nhiên là tốt. Một mối quan hệ trôi chảy tự nhiên sẽ kéo dài lâu hơn những mối quan hệ bị ép buộc, và bạn có thể chia sẻ tình yêu thực sự.'
        ];
      },
      get id() {
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth() + 1;
        
        let periodText = '';
        if (currentMonth <= 10) {
          periodText = `Akhir ${currentYear} atau awal ${currentYear + 1}`;
        } else if (currentMonth === 11) {
          periodText = `Akhir ${currentYear} atau awal ${currentYear + 1}`;
        } else {
          periodText = `Awal ${currentYear + 1}`;
        }
        
        return [
          `${periodText} mencoba pertemuan aktif adalah baik. Untuk bertemu koneksi yang baik, sikap aktif adalah penting, dan harap berpartisipasi dalam berbagai aktivitas atau pertemuan.`,
          'Harap berkomunikasi dengan tulus dengan pasangan Anda. Daripada percakapan yang dangkal, buka hati Anda dan lakukan percakapan yang jujur, dan upaya untuk saling memahami akan membuat hubungan lebih dalam.',
          'Harap lanjutkan perlahan tanpa terburu-buru. Hubungan berkembang secara alami seiring waktu, jadi penting untuk tidak memaksakan kemajuan tetapi bergerak maju langkah demi langkah.',
          'Menghormati emosi dan menunjukkan pertimbangan sangat penting. Memahami dan menghormati emosi dan pikiran pasangan Anda, dan saling memperlakukan dengan pertimbangan akan memperdalam hubungan.',
          'Baik untuk mengejar percakapan yang jujur. Tanpa menyembunyikan atau berbohong, lakukan percakapan dengan ketulusan, dan harap bagikan percakapan di mana Anda memahami dan berempati dengan hati satu sama lain.',
          'Harap hargai waktu yang dihabiskan bersama. Daripada hanya bersama-sama, harap gunakan waktu itu dengan bermakna dan ciptakan kenangan baik untuk satu sama lain.',
          'Mendukung mimpi satu sama lain adalah penting. Hormati dan dukung tujuan serta mimpi pasangan Anda, dan Anda dapat membentuk ikatan yang lebih dalam dalam proses mencapai mimpi tersebut bersama-sama.',
          'Harap coba ciptakan momen romantis. Menciptakan momen romantis kecil pada hari-hari khusus atau dalam kehidupan sehari-hari untuk mengekspresikan cinta satu sama lain akan membuat hubungan semakin manis.',
          'Harap kembangkan hubungan dengan kesabaran. Semua hubungan memiliki kesulitan, tetapi jika Anda memahami dan bekerja sama dengan kesabaran, Anda dapat mengatasi kesulitan apa pun.',
          'Baik untuk membiarkan hubungan berkembang secara alami. Hubungan yang mengalir secara alami bertahan lebih lama daripada hubungan yang dipaksakan, dan Anda dapat berbagi cinta sejati.'
        ];
      }
    },
    fortune: {
      when: {
        get ko() {
          const now = new Date();
          const currentMonth = now.getMonth() + 1;
          const currentYear = now.getFullYear();
          
          let when1, when2, when3, when4;
          
          if (currentMonth <= 9) {
            when1 = getFutureMonthShort(2);
            when2 = getFutureMonthShort(3);
            when3 = getFutureMonthShort(4);
            when4 = getFutureMonthShort(5);
          } else if (currentMonth === 10) {
            when1 = getFutureMonthShort(2);
            when2 = getFutureMonthShort(3);
            when3 = getFutureMonthShort(4);
            when4 = getFutureMonthShort(5);
          } else if (currentMonth === 11) {
            when1 = getFutureMonthShort(2);
            when2 = getFutureMonthShort(3);
            when3 = getFutureMonthShort(4);
            when4 = getFutureMonthShort(5);
          } else {
            when1 = getFutureMonthShort(2);
            when2 = getFutureMonthShort(3);
            when3 = getFutureMonthShort(4);
            when4 = getFutureMonthShort(5);
          }
          
          return [
            `${when1} 또는 ${when2} 좋은 인연을 만날 수 있는 시기입니다. 운명적이지는 않더라도 만족스러운 인연을 만날 수 있으며, 서로에게 좋은 기억을 남길 것입니다.`,
            `${when2} 또는 ${when3} 새로운 만남의 기회가 많은 시기입니다. 다양한 활동이나 모임에 참여하면 좋은 인연을 만날 수 있으며, 그 인연이 의미 있는 관계로 발전할 수 있습니다.`,
            `${when1} 좋은 기회가 찾아올 것입니다. 새로운 인연을 맺을 수 있는 여러 기회가 생기며, 그 중에서도 만족스러운 인연을 만날 수 있습니다.`,
            `${when2} 또는 ${when3} 진심 어린 사람과의 만남이 예상됩니다. 이 만남은 서로에게 긍정적인 영향을 줄 것이며, 건강한 관계를 형성할 수 있습니다.`,
            `${when3} 또는 ${when4} 새로운 시작의 인연이 찾아옵니다. 이 인연은 과거와 다른 새로운 경험을 선사할 것이며, 긍정적인 변화를 가져다 줄 것입니다.`,
            `${when2} 만족스러운 인연을 만날 수 있는 기회가 찾아옵니다. 이 시기에 만나는 사람은 서로에게 좋은 영향을 줄 것이며, 행복한 시간을 보낼 수 있습니다.`,
            `${when1} 또는 ${when2} 온라인이나 오프라인 모임에서 좋은 인연을 만날 수 있습니다. 새로운 사람들과의 만남을 통해 다양한 인연의 기회를 가질 수 있습니다.`,
            `${when2} 또는 ${when3} 취미 활동이나 새로운 경험을 통해 인연을 만날 수 있습니다. 공통 관심사를 가진 사람들과 만나며 자연스럽게 인연이 시작될 것입니다.`,
            `${when1} 일상 속에서 예상치 못한 좋은 인연을 만날 수 있습니다. 평범해 보이는 하루에도 특별한 만남은 언제든지 찾아올 수 있으며, 그 만남이 큰 의미를 가질 것입니다.`,
            `${when2} 친구나 지인의 소개로 좋은 인연을 맺을 수 있습니다. 신뢰할 수 있는 사람들의 소개로 만난 인연은 안정적이며, 서로를 더 잘 이해할 수 있는 관계가 될 것입니다.`
          ];
        },
        get en() {
          const now = new Date();
          const currentMonth = now.getMonth() + 1;
          const currentYear = now.getFullYear();
          
          let when1, when2, when3, when4;
          
          const future2 = new Date(now.getFullYear(), now.getMonth() + 2, 1);
          const future3 = new Date(now.getFullYear(), now.getMonth() + 3, 1);
          const future4 = new Date(now.getFullYear(), now.getMonth() + 4, 1);
          const future5 = new Date(now.getFullYear(), now.getMonth() + 5, 1);
          
          const getMonthStr = (date: Date) => {
            const monthName = date.toLocaleString('en-US', { month: 'long' });
            if (date.getFullYear() > currentYear) {
              return `Next ${monthName}`;
            }
            return monthName;
          };
          
          when1 = getMonthStr(future2);
          when2 = getMonthStr(future3);
          when3 = getMonthStr(future4);
          when4 = getMonthStr(future5);
          
          return [
            `${when1} or ${when2} is a time when you can meet a good connection. Even if it's not destined, you can meet a satisfying connection and leave good memories for each other.`,
            `${when2} or ${when3} is a period with many opportunities for new meetings. Participating in various activities or gatherings can help you meet good connections, and those connections can develop into meaningful relationships.`,
            `${when1} will bring good opportunities. You will have several chances to form new connections, and you may meet a satisfying connection among them.`,
            `${when2} or ${when3} is when you are expected to meet a sincere person. This meeting will have a positive impact on each other and can form a healthy relationship.`,
            `${when3} or ${when4} will bring a new beginning connection. This connection will bring new experiences different from the past and bring positive changes.`,
            `${when2} will bring an opportunity to meet a satisfying connection. The person you meet during this time will have a good influence on each other, and you can spend happy times together.`,
            `${when1} or ${when2} you can meet a good connection at online or offline gatherings. Through meetings with new people, you can have various opportunities for connections.`,
            `${when2} or ${when3} you can meet connections through hobby activities or new experiences. Meeting people with common interests will naturally start connections.`,
            `In ${when1}, you may meet an unexpectedly good connection in your daily routine. Even in seemingly ordinary days, special meetings can come to you at any time, and those meetings will have great meaning.`,
            `In ${when2}, you can form a good connection through introductions from friends or acquaintances. A connection met through introductions from trustworthy people will be stable and become a relationship where you can understand each other better.`
          ];
        },
        get ja() {
          const now = new Date();
          const currentMonth = now.getMonth() + 1;
          const currentYear = now.getFullYear();
          
          let when1, when2, when3, when4;
          
          const future2 = new Date(now.getFullYear(), now.getMonth() + 2, 1);
          const future3 = new Date(now.getFullYear(), now.getMonth() + 3, 1);
          const future4 = new Date(now.getFullYear(), now.getMonth() + 4, 1);
          const future5 = new Date(now.getFullYear(), now.getMonth() + 5, 1);
          
          const getMonthStr = (date: Date) => {
            const monthName = date.toLocaleString('ja-JP', { month: 'long' });
            if (date.getFullYear() > currentYear) {
              return `来年${monthName}`;
            }
            return monthName;
          };
          
          when1 = getMonthStr(future2);
          when2 = getMonthStr(future3);
          when3 = getMonthStr(future4);
          when4 = getMonthStr(future5);
          
          return [
            `${when1}または${when2}は良い縁に会える時期です。運命的ではないにしても満足のいく縁に会え、お互いに良い思い出を残すでしょう。`,
            `${when2}または${when3}は新しい出会いの機会が多い時期です。様々な活動や集まりに参加すれば良い縁に会え、その縁が意味のある関係に発展できます。`,
            `${when1}には良い機会が訪れるでしょう。新しい縁を結ぶ機会がいくつかあり、その中から満足のいく縁に会うことができるでしょう。`,
            `${when2}または${when3}は心からの人との出会いが予想されます。この出会いはお互いに肯定的な影響を与え、健康的な関係を形成できます。`,
            `${when3}または${when4}は新しい始まりの縁が訪れます。この縁は過去と異なる新しい経験をもたらし、肯定的な変化をもたらすでしょう。`,
            `${when2}には満足のいく縁に会える機会が訪れるでしょう。この時期に出会う人はお互いに良い影響を与え、幸せな時間を過ごすことができるでしょう。`,
            `${when1}または${when2}にはオンラインやオフラインの集まりで良い縁に会えるでしょう。新しい人々との出会いを通じて、様々な縁の機会を持つことができます。`,
            `${when2}または${when3}には趣味活動や新しい経験を通じて縁に会えるでしょう。共通の関心事を持つ人々と出会い、自然に縁が始まるでしょう。`,
            `${when1}には日常の中で予想外の良い縁に会えるでしょう。平凡に見える一日にも特別な出会いはいつでも訪れることができ、その出会いは大きな意味を持つでしょう。`,
            `${when2}には友人や知人からの紹介で良い縁を結ぶことができるでしょう。信頼できる人々からの紹介で出会った縁は安定しており、お互いをよりよく理解できる関係になるでしょう。`
          ];
        },
        get 'zh-CN'() {
          const now = new Date();
          const currentMonth = now.getMonth() + 1;
          const currentYear = now.getFullYear();
          
          let when1, when2, when3, when4;
          
          const future2 = new Date(now.getFullYear(), now.getMonth() + 2, 1);
          const future3 = new Date(now.getFullYear(), now.getMonth() + 3, 1);
          const future4 = new Date(now.getFullYear(), now.getMonth() + 4, 1);
          const future5 = new Date(now.getFullYear(), now.getMonth() + 5, 1);
          
          const getMonthStr = (date: Date) => {
            const monthName = date.toLocaleString('zh-CN', { month: 'long' });
            if (date.getFullYear() > currentYear) {
              return `明年${monthName}`;
            }
            return `${monthName}`;
          };
          
          when1 = getMonthStr(future2);
          when2 = getMonthStr(future3);
          when3 = getMonthStr(future4);
          when4 = getMonthStr(future5);
          
          return [
            `${when1}或${when2}是可以遇到好的缘分的时期。即使不是命中注定的，也可以遇到令人满意的缘分，会为彼此留下美好的回忆。`,
            `${when2}或${when3}是新相遇机会很多的时期。参加各种活动或聚会可以遇到好的缘分，那个缘分可以发展成有意义的关系。`,
            `${when1}会有好机会到来。会有多个结交新缘分的机会，在其中也可以遇到令人满意的缘分。`,
            `${when2}或${when3}预期会遇到真诚的人。这次相遇会给彼此带来积极的影响，可以形成健康的关系。`,
            `${when3}或${when4}会带来新的开始的缘分。这个缘分会带来与过去不同的新体验，会带来积极的变化。`,
            `${when2}会带来遇到令人满意的缘分的机会。这个时期遇到的人会给彼此带来好的影响，可以度过幸福的时光。`,
            `${when1}或${when2}可以在线上或线下聚会中遇到好的缘分。通过与新人的相遇，可以拥有各种缘分的机会。`,
            `${when2}或${when3}可以通过兴趣爱好活动或新体验遇到缘分。与有共同兴趣的人见面，缘分会自然开始。`,
            `在${when1}的日常生活中可能会遇到意想不到的好缘分。即使是在看似平凡的一天，特殊的相遇也可能随时到来，那个相遇会有很大的意义。`,
            `在${when2}可以通过朋友或熟人的介绍结下好的缘分。通过可信赖的人介绍相遇的缘分会很稳定，会成为更好地理解彼此的关系。`
          ];
        },
        get 'zh-TW'() {
          const now = new Date();
          const currentMonth = now.getMonth() + 1;
          const currentYear = now.getFullYear();
          
          let when1, when2, when3, when4;
          
          const future2 = new Date(now.getFullYear(), now.getMonth() + 2, 1);
          const future3 = new Date(now.getFullYear(), now.getMonth() + 3, 1);
          const future4 = new Date(now.getFullYear(), now.getMonth() + 4, 1);
          const future5 = new Date(now.getFullYear(), now.getMonth() + 5, 1);
          
          const getMonthStr = (date: Date) => {
            const monthName = date.toLocaleString('zh-TW', { month: 'long' });
            if (date.getFullYear() > currentYear) {
              return `明年${monthName}`;
            }
            return `${monthName}`;
          };
          
          when1 = getMonthStr(future2);
          when2 = getMonthStr(future3);
          when3 = getMonthStr(future4);
          when4 = getMonthStr(future5);
          
          return [
            `${when1}或${when2}是可以遇到好的緣分的時期。即使不是命中注定的，也可以遇到令人滿意的緣分，會為彼此留下美好的回憶。`,
            `${when2}或${when3}是新相遇機會很多的時期。參加各種活動或聚會可以遇到好的緣分，那個緣分可以發展成有意義的關係。`,
            `${when1}會有好機會到來。會有多個結交新緣分的機會，在其中也可以遇到令人滿意的緣分。`,
            `${when2}或${when3}預期會遇到真誠的人。這次相遇會給彼此帶來積極的影響，可以形成健康的關係。`,
            `${when3}或${when4}會帶來新的開始的緣分。這個緣分會帶來與過去不同的新體驗，會帶來積極的變化。`,
            `${when2}會帶來遇到令人滿意的緣分的機會。這個時期遇到的人會給彼此帶來好的影響，可以度過幸福的時光。`,
            `${when1}或${when2}可以在線上或線下聚會中遇到好的緣分。通過與新人的相遇，可以擁有各種緣分的機會。`,
            `${when2}或${when3}可以通過興趣愛好活動或新體驗遇到緣分。與有共同興趣的人見面，緣分會自然開始。`,
            `在${when1}的日常生活中可能會遇到意想不到的好緣分。即使是在看似平凡的一天，特殊的相遇也可能隨時到來，那個相遇會有很大的意義。`,
            `在${when2}可以通過朋友或熟人的介紹結下好的緣分。通過可信賴的人介紹相遇的緣分會很穩定，會成為更好地理解彼此的關係。`
          ];
        },
        get vi() {
          const now = new Date();
          const currentMonth = now.getMonth() + 1;
          const currentYear = now.getFullYear();
          
          let when1, when2, when3, when4;
          
          const future2 = new Date(now.getFullYear(), now.getMonth() + 2, 1);
          const future3 = new Date(now.getFullYear(), now.getMonth() + 3, 1);
          const future4 = new Date(now.getFullYear(), now.getMonth() + 4, 1);
          const future5 = new Date(now.getFullYear(), now.getMonth() + 5, 1);
          
          const getMonthStr = (date: Date) => {
            const monthName = date.toLocaleString('vi-VN', { month: 'long' });
            if (date.getFullYear() > currentYear) {
              return `Tháng ${date.getMonth() + 1} năm sau`;
            }
            return `Tháng ${monthName}`;
          };
          
          when1 = getMonthStr(future2);
          when2 = getMonthStr(future3);
          when3 = getMonthStr(future4);
          when4 = getMonthStr(future5);
          
          return [
            `${when1} hoặc ${when2} là thời điểm bạn có thể gặp một kết nối tốt. Ngay cả khi không phải là định mệnh, bạn có thể gặp một kết nối thỏa mãn và để lại những kỷ niệm đẹp cho nhau.`,
            `${when2} hoặc ${when3} là thời kỳ có nhiều cơ hội gặp gỡ mới. Tham gia các hoạt động hoặc buổi gặp gỡ đa dạng có thể giúp bạn gặp kết nối tốt, và những kết nối đó có thể phát triển thành mối quan hệ có ý nghĩa.`,
            `${when1} sẽ mang đến những cơ hội tốt. Bạn sẽ có một số cơ hội để hình thành kết nối mới, và bạn có thể gặp một kết nối thỏa mãn trong số đó.`,
            `${when2} hoặc ${when3} là khi bạn được kỳ vọng sẽ gặp một người chân thành. Cuộc gặp gỡ này sẽ có tác động tích cực lên nhau và có thể hình thành mối quan hệ lành mạnh.`,
            `${when3} hoặc ${when4} sẽ mang đến một kết nối khởi đầu mới. Kết nối này sẽ mang đến những trải nghiệm mới khác với quá khứ và mang đến những thay đổi tích cực.`,
            `${when2} sẽ mang đến cơ hội gặp một kết nối thỏa mãn. Người bạn gặp trong thời gian này sẽ có ảnh hưởng tốt lên nhau, và bạn có thể dành thời gian vui vẻ cùng nhau.`,
            `${when1} hoặc ${when2} bạn có thể gặp kết nối tốt tại các buổi gặp gỡ trực tuyến hoặc ngoại tuyến. Thông qua các cuộc gặp gỡ với người mới, bạn có thể có nhiều cơ hội kết nối đa dạng.`,
            `${when2} hoặc ${when3} bạn có thể gặp kết nối thông qua các hoạt động sở thích hoặc trải nghiệm mới. Gặp gỡ những người có sở thích chung sẽ tự nhiên bắt đầu kết nối.`,
            `Trong ${when1}, bạn có thể gặp một kết nối tốt bất ngờ trong cuộc sống hàng ngày. Ngay cả trong những ngày có vẻ bình thường, các cuộc gặp gỡ đặc biệt có thể đến với bạn bất cứ lúc nào, và những cuộc gặp gỡ đó sẽ có ý nghĩa lớn.`,
            `Trong ${when2}, bạn có thể hình thành kết nối tốt thông qua giới thiệu từ bạn bè hoặc người quen. Một kết nối được gặp thông qua giới thiệu từ những người đáng tin cậy sẽ ổn định và trở thành mối quan hệ nơi bạn có thể hiểu nhau tốt hơn.`
          ];
        },
        get id() {
          const now = new Date();
          const currentMonth = now.getMonth() + 1;
          const currentYear = now.getFullYear();
          
          let when1, when2, when3, when4;
          
          const future2 = new Date(now.getFullYear(), now.getMonth() + 2, 1);
          const future3 = new Date(now.getFullYear(), now.getMonth() + 3, 1);
          const future4 = new Date(now.getFullYear(), now.getMonth() + 4, 1);
          const future5 = new Date(now.getFullYear(), now.getMonth() + 5, 1);
          
          const getMonthStr = (date: Date) => {
            const monthNames = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
            const monthName = monthNames[date.getMonth()];
            if (date.getFullYear() > currentYear) {
              return `${monthName} tahun depan`;
            }
            return monthName;
          };
          
          when1 = getMonthStr(future2);
          when2 = getMonthStr(future3);
          when3 = getMonthStr(future4);
          when4 = getMonthStr(future5);
          
          return [
            `${when1} atau ${when2} adalah waktu ketika Anda dapat bertemu koneksi yang baik. Bahkan jika bukan takdir, Anda dapat bertemu koneksi yang memuaskan dan meninggalkan kenangan baik untuk satu sama lain.`,
            `${when2} atau ${when3} adalah periode dengan banyak peluang untuk pertemuan baru. Berpartisipasi dalam berbagai aktivitas atau pertemuan dapat membantu Anda bertemu koneksi yang baik, dan koneksi tersebut dapat berkembang menjadi hubungan yang bermakna.`,
            `${when1} akan membawa peluang baik. Anda akan memiliki beberapa kesempatan untuk membentuk koneksi baru, dan Anda mungkin bertemu koneksi yang memuaskan di antaranya.`,
            `${when2} atau ${when3} adalah ketika Anda diharapkan bertemu dengan orang yang tulus. Pertemuan ini akan memiliki dampak positif pada satu sama lain dan dapat membentuk hubungan yang sehat.`,
            `${when3} atau ${when4} akan membawa koneksi awal yang baru. Koneksi ini akan membawa pengalaman baru yang berbeda dari masa lalu dan membawa perubahan positif.`,
            `${when2} akan membawa kesempatan untuk bertemu koneksi yang memuaskan. Orang yang Anda temui selama waktu ini akan memiliki pengaruh baik pada satu sama lain, dan Anda dapat menghabiskan waktu yang bahagia bersama.`,
            `${when1} atau ${when2} Anda dapat bertemu koneksi yang baik di pertemuan online atau offline. Melalui pertemuan dengan orang baru, Anda dapat memiliki berbagai peluang koneksi.`,
            `${when2} atau ${when3} Anda dapat bertemu koneksi melalui aktivitas hobi atau pengalaman baru. Bertemu orang dengan minat yang sama akan secara alami memulai koneksi.`,
            `Dalam ${when1}, Anda mungkin bertemu koneksi yang baik secara tak terduga dalam rutinitas harian Anda. Bahkan pada hari-hari yang tampak biasa, pertemuan khusus dapat datang kepada Anda kapan saja, dan pertemuan tersebut akan memiliki makna besar.`,
            `Dalam ${when2}, Anda dapat membentuk koneksi yang baik melalui pengenalan dari teman atau kenalan. Koneksi yang bertemu melalui pengenalan dari orang yang dapat dipercaya akan stabil dan menjadi hubungan di mana Anda dapat saling memahami lebih baik.`
          ];
        }
      },
      style: {
        ko: [
          '배려심 많고 따뜻한 사람입니다. 타인의 감정을 이해하고 공감하는 능력이 있으며, 항상 상대방을 생각하는 마음씨를 가지고 있습니다.',
          '진실하고 솔직한 성격을 가진 사람입니다. 거짓 없이 마음을 열 수 있으며, 서로에게 정직한 대화를 나눌 수 있는 신뢰할 수 있는 사람입니다.',
          '로맨틱하고 감성적인 타입의 사람입니다. 작은 것에도 감동을 느끼며, 특별한 순간들을 만들어내는 것을 좋아하는 낭만적인 성향을 가지고 있습니다.',
          '함께 성장을 추구하는 사람입니다. 서로의 꿈과 목표를 응원하며, 함께 발전하고 성장해 나가는 것을 중요하게 생각하는 사람입니다.',
          '소통을 중시하는 타입의 사람입니다. 대화를 통해 문제를 해결하고, 서로의 마음을 나누는 것을 소중하게 여기며, 깊은 유대감을 형성하는 것을 좋아합니다.',
          '진심으로 사랑할 수 있는 사람입니다. 허영심 없이 순수한 마음으로 상대방을 대하며, 진정한 사랑을 보여줄 수 있는 신뢰할 수 있는 사람입니다.',
          '안정적이고 신뢰할 수 있는 사람입니다. 책임감이 강하며, 약속을 지키는 것을 중요하게 생각하며, 언제든지 의지할 수 있는 든든한 사람입니다.',
          '공감 능력이 좋은 사람입니다. 상대방의 감정을 이해하고 그에 맞는 반응을 보여주며, 서로를 위로하고 지지할 수 있는 사람입니다.',
          '활발하고 긍정적인 에너지를 가진 사람입니다. 밝고 긍정적인 에너지를 가지고 있으며, 함께 있는 시간을 즐겁게 만들어주는 사람입니다.',
          '존중과 배려를 우선시하는 사람입니다. 상대방의 의견과 감정을 존중하며, 서로를 배려하는 마음으로 관계를 유지하는 것을 중요하게 생각합니다.'
        ],
        en: [
          'A person with a caring and warm heart. They have the ability to understand and empathize with others\' emotions, and always think of others with a considerate nature.',
          'A person with an honest and sincere personality. They can open their heart without falsehood and are trustworthy people with whom you can have honest conversations.',
          'A person with a romantic and emotional type. They are moved by small things, enjoy creating special moments, and have a romantic tendency.',
          'A person who pursues growth together. They support each other\'s dreams and goals, and consider growing and developing together as important.',
          'A person who values communication. They solve problems through dialogue, cherish sharing each other\'s hearts, and enjoy forming deep bonds.',
          'A person capable of sincere love. They treat their partner with a pure heart without vanity, and are trustworthy people who can show genuine love.',
          'A stable and trustworthy person. They have a strong sense of responsibility, value keeping promises, and are reliable people you can always depend on.',
          'A person with good empathy. They understand their partner\'s emotions and show appropriate reactions, and can comfort and support each other.',
          'A person with active and positive energy. They have bright and positive energy and make time together enjoyable.',
          'A person who prioritizes respect and consideration. They respect their partner\'s opinions and emotions, and consider maintaining relationships with mutual consideration as important.'
        ],
        ja: [
          '思いやりがあり、温かい人です。他人の感情を理解し共感する能力があり、いつも相手を考える心優しい人です。',
          '正直で誠実な性格を持っている人です。嘘偽りなく心を開くことができ、お互いに正直な会話を交わすことのできる信頼できる人です。',
          'ロマンチックで感情的なタイプの人です。小さなことにも感動し、特別な瞬間を作ることを好むロマンチックな傾向があります。',
          '一緒に成長を追求する人です。お互いの夢と目標を応援し、一緒に発展し成長していくことを重要に考えている人です。',
          'コミュニケーションを重視するタイプの人です。会話を通じて問題を解決し、お互いの心を共有することを大切にし、深い絆を形成することを好みます。',
          '誠心誠意愛することのできる人です。虚栄心なく純粋な心で相手に接し、真実の愛を示すことのできる信頼できる人です。',
          '安定していて信頼できる人です。責任感が強く、約束を守ることを重要に考え、いつでも頼りになる人です。',
          '共感能力が良い人です。相手の感情を理解しそれに適した反応を示し、お互いを慰め支えることのできる人です。',
          '活発でポジティブなエネルギーを持っている人です。明るくポジティブなエネルギーを持ち、一緒にいる時間を楽しくしてくれる人です。',
          '尊重と思いやりを優先する人です。相手の意見と感情を尊重し、お互いに思いやる心で関係を維持することを重要に考えています。'
        ],
        'zh-CN': [
          '关怀和温暖的人。有理解他人感情并产生共鸣的能力，总是以关怀的心思考对方。',
          '拥有诚实和真诚性格的人。可以毫无虚假地敞开心扉，是能够彼此进行诚实对话的可信赖的人。',
          '浪漫和感性类型的人。会对小事感动，喜欢创造特别的瞬间，具有浪漫倾向。',
          '追求共同成长的人。支持彼此的梦想和目标，重视一起发展和成长。',
          '重视沟通的类型的人。通过对话解决问题，珍惜分享彼此的心意，喜欢形成深厚的纽带。',
          '能够真心去爱的人。以没有虚荣的纯真心对待对方，是能够展现真正爱情的可信赖的人。',
          '稳定且可信赖的人。责任感强，重视遵守承诺，是随时都可以依靠的可靠的人。',
          '共情能力好的人。理解对方的感情并做出相应的反应，是能够彼此安慰和支持的人。',
          '具有活力和正面能量的人。拥有明亮和正面的能量，是能够让在一起的时间变得愉快的人。',
          '优先考虑尊重和关怀的人。尊重对方的意见和感情，重视以互相关怀的心维持关系。'
        ],
        'zh-TW': [
          '關懷和溫暖的人。有理解他人感情並產生共鳴的能力，總是以關懷的心思考對方。',
          '擁有誠實和真誠性格的人。可以毫無虛假地敞開心扉，是能夠彼此進行誠實對話的可信賴的人。',
          '浪漫和感性類型的人。會對小事感動，喜歡創造特別的瞬間，具有浪漫傾向。',
          '追求共同成長的人。支持彼此的夢想和目標，重視一起發展和成長。',
          '重視溝通的類型的人。通過對話解決問題，珍惜分享彼此的心意，喜歡形成深厚的紐帶。',
          '能夠真心去愛的人。以沒有虛榮的純真心對待對方，是能夠展現真正愛情可信賴的人。',
          '穩定且可信賴的人。責任感強，重視遵守承諾，是隨時都可以依靠的可靠的人。',
          '共情能力好的人。理解對方的感情並做出相應的反應，是能夠彼此安慰和支持的人。',
          '具有活力和正面能量的人。擁有明亮和正面的能量，是能夠讓在一起的時間變得愉快的人。',
          '優先考慮尊重和關懷的人。尊重對方的意見和感情，重視以互相關懷的心維持關係。'
        ],
        vi: [
          'Một người có lòng quan tâm và ấm áp. Họ có khả năng hiểu và đồng cảm với cảm xúc của người khác, và luôn nghĩ về đối tác với sự chu đáo.',
          'Một người có tính cách trung thực và chân thành. Họ có thể mở lòng mà không có sự giả dối, và là người đáng tin cậy mà bạn có thể có những cuộc trò chuyện trung thực.',
          'Một người có kiểu lãng mạn và cảm xúc. Họ cảm động bởi những điều nhỏ nhặt, thích tạo ra những khoảnh khắc đặc biệt, và có xu hướng lãng mạn.',
          'Một người theo đuổi sự phát triển cùng nhau. Họ ủng hộ ước mơ và mục tiêu của nhau, và coi trọng việc phát triển và lớn lên cùng nhau.',
          'Một người coi trọng giao tiếp. Họ giải quyết vấn đề thông qua đối thoại, trân trọng việc chia sẻ tâm tư của nhau, và thích hình thành mối liên kết sâu sắc.',
          'Một người có khả năng yêu chân thành. Họ đối xử với đối tác bằng trái tim thuần khiết không có sự phô trương, và là người đáng tin cậy có thể thể hiện tình yêu thực sự.',
          'Một người ổn định và đáng tin cậy. Họ có ý thức trách nhiệm mạnh mẽ, coi trọng việc giữ lời hứa, và là người đáng tin cậy bạn luôn có thể dựa vào.',
          'Một người có khả năng đồng cảm tốt. Họ hiểu cảm xúc của đối tác và thể hiện phản ứng phù hợp, và là người có thể an ủi và hỗ trợ lẫn nhau.',
          'Một người có năng lượng tích cực và năng động. Họ có năng lượng tươi sáng và tích cực, và làm cho thời gian bên nhau trở nên vui vẻ.',
          'Một người ưu tiên sự tôn trọng và quan tâm. Họ tôn trọng ý kiến và cảm xúc của đối tác, và coi trọng việc duy trì mối quan hệ với sự quan tâm lẫn nhau.'
        ],
        id: [
          'Seseorang yang peduli dan hangat. Mereka memiliki kemampuan untuk memahami dan berempati dengan emosi orang lain, dan selalu memikirkan pasangan dengan kepedulian.',
          'Seseorang dengan kepribadian yang jujur dan tulus. Mereka dapat membuka hati tanpa kepalsuan dan merupakan orang yang dapat dipercaya dengan siapa Anda dapat melakukan percakapan yang jujur.',
          'Seseorang dengan tipe romantis dan emosional. Mereka terkesan oleh hal-hal kecil, menikmati menciptakan momen khusus, dan memiliki kecenderungan romantis.',
          'Seseorang yang mengejar pertumbuhan bersama. Mereka mendukung mimpi dan tujuan satu sama lain, dan menganggap tumbuh dan berkembang bersama sebagai penting.',
          'Seseorang yang menghargai komunikasi. Mereka menyelesaikan masalah melalui dialog, menghargai berbagi hati satu sama lain, dan menikmati membentuk ikatan yang dalam.',
          'Seseorang yang mampu mencintai dengan tulus. Mereka memperlakukan pasangan dengan hati yang murni tanpa kesombongan, dan merupakan orang yang dapat dipercaya yang dapat menunjukkan cinta sejati.',
          'Seseorang yang stabil dan dapat dipercaya. Mereka memiliki rasa tanggung jawab yang kuat, menghargai menepati janji, dan merupakan orang yang dapat diandalkan yang selalu dapat Anda andalkan.',
          'Seseorang dengan empati yang baik. Mereka memahami emosi pasangan dan menunjukkan reaksi yang sesuai, dan dapat saling menghibur dan mendukung.',
          'Seseorang dengan energi yang aktif dan positif. Mereka memiliki energi yang cerah dan positif dan membuat waktu bersama menjadi menyenangkan.',
          'Seseorang yang memprioritaskan rasa hormat dan pertimbangan. Mereka menghormati pendapat dan emosi pasangan, dan menganggap penting mempertahankan hubungan dengan pertimbangan timbal balik.'
        ]
      },
      warning: {
        get ko() {
          const now = new Date();
          const next2 = getFutureMonthShort(2);
          const next4 = getFutureMonthShort(4);
          const next6 = getFutureMonthShort(6);
          const next8 = getFutureMonthShort(8);
          const next10 = getFutureMonthShort(10);
          return [
            `${next2} 감정의 기복에 주의하시기 바랍니다. 이 시기에는 감정이 다소 불안정할 수 있으므로 중요한 결정은 신중하게 하시는 것이 좋습니다.`,
            `${next4} 서두르지 말고 천천히 진행하시기 바랍니다. 급하게 진행하면 나중에 후회할 수 있으므로 시간을 두고 깊이 생각해보시는 것이 중요합니다.`,
            `${next6} 과도한 기대는 실망을 불러올 수 있습니다. 현실적인 기대를 가지고 관계를 발전시켜 나가시는 것이 좋으며, 작은 것에도 감사하는 마음을 가지시기 바랍니다.`,
            `${next8} 질투나 의심을 경계하시기 바랍니다. 불필요한 오해와 의심은 관계를 해칠 수 있으므로, 신뢰를 바탕으로 소통하는 것이 중요합니다.`,
            `${next10} 경제적 문제에 주의하시기 바랍니다. 금전 문제로 인한 갈등이 생길 수 있으므로 미리 대화를 통해 서로의 가치관을 나누고 이해하는 것이 필요합니다.`,
            '가족이나 친구들의 반대에 주의가 필요할 수 있습니다. 주변 사람들의 반대는 관계에 부정적인 영향을 줄 수 있으므로, 주변 사람들을 설득하고 이해시키는 노력이 필요합니다.',
            '급한 결심은 위험할 수 있습니다. 중요한 결정은 충분한 시간을 두고 신중하게 고려하시며, 감정에 휘둘리지 않고 이성적으로 판단하시기 바랍니다.',
            '소통 부족 문제에 주의하시기 바랍니다. 대화가 부족하면 오해가 생기고 갈등이 커질 수 있으므로, 정기적으로 서로의 마음을 나누는 시간을 가지시기 바랍니다.',
            '과거 상처를 현재 관계에 적용하지 말아야 합니다. 이전 관계에서 받은 상처를 새 관계에 적용하지 말고, 새로운 시작을 하는 마음가짐이 중요합니다.',
            '경솔한 판단은 피해야 합니다. 중요한 일은 신중하게 판단하시며, 충분한 고민과 검토를 거친 후 결정을 내리시는 것이 바람직합니다.'
          ];
        },
        get en() {
          const now = new Date();
          const future2 = new Date(now.getFullYear(), now.getMonth() + 2, 1);
          const future4 = new Date(now.getFullYear(), now.getMonth() + 4, 1);
          const future6 = new Date(now.getFullYear(), now.getMonth() + 6, 1);
          const future8 = new Date(now.getFullYear(), now.getMonth() + 8, 1);
          const future10 = new Date(now.getFullYear(), now.getMonth() + 10, 1);
          
          const getMonthStr = (date: Date) => {
            const monthName = date.toLocaleString('en-US', { month: 'long' });
            if (date.getFullYear() > now.getFullYear()) {
              return `Next ${monthName}`;
            }
            return monthName;
          };
          
          const next2 = getMonthStr(future2);
          const next4 = getMonthStr(future4);
          const next6 = getMonthStr(future6);
          const next8 = getMonthStr(future8);
          const next10 = getMonthStr(future10);
          
          return [
            `Please be careful about emotional fluctuations in ${next2}. During this period, emotions may be somewhat unstable, so it is better to make important decisions carefully.`,
            `Please do not rush and proceed slowly in ${next4}. If you proceed hastily, you may regret it later, so it is important to take time and think deeply.`,
            `Excessive expectations in ${next6} can lead to disappointment. It is good to develop the relationship with realistic expectations, and please have a grateful heart even for small things.`,
            `Please beware of jealousy or suspicion in ${next8}. Unnecessary misunderstandings and suspicions can damage the relationship, so it is important to communicate based on trust.`,
            `Please be careful about financial problems in ${next10}. Conflicts may arise due to money issues, so it is necessary to share and understand each other\'s values through dialogue in advance.`,
            'You may need to be careful about opposition from family or friends. Opposition from people around you can have a negative impact on the relationship, so efforts to persuade and make them understand are necessary.',
            'Hasty decisions can be dangerous. Please consider important decisions carefully with sufficient time, and make judgments rationally without being swayed by emotions.',
            'Please be careful about communication problems. If there is insufficient dialogue, misunderstandings can arise and conflicts can grow, so please take time to share each other\'s hearts regularly.',
            'You should not apply past wounds to the current relationship. Do not apply wounds received from previous relationships to new relationships, and it is important to have a mindset of starting fresh.',
            'Rash judgments should be avoided. Please judge important matters carefully, and it is desirable to make decisions after sufficient consideration and review.'
          ];
        },
        get ja() {
          const now = new Date();
          const future2 = new Date(now.getFullYear(), now.getMonth() + 2, 1);
          const future4 = new Date(now.getFullYear(), now.getMonth() + 4, 1);
          const future6 = new Date(now.getFullYear(), now.getMonth() + 6, 1);
          const future8 = new Date(now.getFullYear(), now.getMonth() + 8, 1);
          const future10 = new Date(now.getFullYear(), now.getMonth() + 10, 1);
          
          const getMonthStr = (date: Date) => {
            const monthName = date.toLocaleString('ja-JP', { month: 'long' });
            if (date.getFullYear() > now.getFullYear()) {
              return `来年${monthName}`;
            }
            return monthName;
          };
          
          const next2 = getMonthStr(future2);
          const next4 = getMonthStr(future4);
          const next6 = getMonthStr(future6);
          const next8 = getMonthStr(future8);
          const next10 = getMonthStr(future10);
          
          return [
            `${next2}には感情の浮き沈みに注意してください。この時期、感情がやや不安定になる可能性があるため、重要な決定は慎重にするのが良いでしょう。`,
            `${next4}には急がずにゆっくりと進めてください。急いで進めると後で後悔する可能性があるため、時間をかけて深く考えることが重要です。`,
            `${next6}には過度な期待は失望を招く可能性があります。現実的な期待を持って関係を発展させていくことが良く、小さなことにも感謝する心を持つことをお勧めします。`,
            `${next8}には嫉妬や疑いを警戒してください。不要な誤解や疑いは関係を損なう可能性があるため、信頼を基にコミュニケーションを取ることが重要です。`,
            `${next10}には経済的な問題に注意してください。お金の問題による対立が生じる可能性があるため、事前に対話を通じてお互いの価値観を共有し理解することが必要です。`,
            '家族や友人からの反対に注意が必要な場合があります。周りの人々の反対は関係に否定的な影響を与える可能性があるため、周りの人々を説得し理解させる努力が必要です。',
            '急いだ決断は危険な可能性があります。重要な決定は十分な時間をかけて慎重に考慮し、感情に流されず理性的に判断してください。',
            'コミュニケーション不足の問題に注意してください。対話が不足すると誤解が生じ、対立が大きくなる可能性があるため、定期的にお互いの心を共有する時間を持つことをお勧めします。',
            '過去の傷を現在の関係に適用しないでください。以前の関係で受けた傷を新しい関係に適用せず、新しいスタートを切る心構えが重要です。',
            '軽率な判断は避けるべきです。重要なことは慎重に判断し、十分な考慮と検討を経た後に決定を下すことが望ましいです。'
          ];
        },
        get 'zh-CN'() {
          const now = new Date();
          const future2 = new Date(now.getFullYear(), now.getMonth() + 2, 1);
          const future4 = new Date(now.getFullYear(), now.getMonth() + 4, 1);
          const future6 = new Date(now.getFullYear(), now.getMonth() + 6, 1);
          const future8 = new Date(now.getFullYear(), now.getMonth() + 8, 1);
          const future10 = new Date(now.getFullYear(), now.getMonth() + 10, 1);
          
          const getMonthStr = (date: Date) => {
            const monthName = date.toLocaleString('zh-CN', { month: 'long' });
            if (date.getFullYear() > now.getFullYear()) {
              return `明年${monthName}`;
            }
            return `${monthName}`;
          };
          
          const next2 = getMonthStr(future2);
          const next4 = getMonthStr(future4);
          const next6 = getMonthStr(future6);
          const next8 = getMonthStr(future8);
          const next10 = getMonthStr(future10);
          
          return [
            `${next2}请注意情绪波动。这一时期情绪可能会有些不稳定，因此最好谨慎地做出重要决定。`,
            `${next4}请不要着急，慢慢进行。如果匆忙进行可能会后悔，因此重要的是花时间深思熟虑。`,
            `${next6}过度期望可能会导致失望。最好以现实的期望发展关系，即使对小事也要心存感激。`,
            `${next8}请警惕嫉妒或怀疑。不必要的误解和怀疑可能会损害关系，因此基于信任进行沟通很重要。`,
            `${next10}请注意经济问题。可能会因金钱问题产生冲突，因此有必要提前通过对话分享和理解彼此的价值观。`,
            '可能需要警惕来自家人或朋友的反对。周围人的反对可能会对关系产生负面影响，因此需要努力说服他们并让他们理解。',
            '匆忙的决定可能是危险的。请花足够的时间仔细考虑重要决定，理性判断不要被情绪左右。',
            '请注意沟通不足的问题。如果对话不足可能会产生误解，冲突可能会扩大，因此请定期花时间分享彼此的心意。',
            '不应该将过去的伤痛应用到当前关系。不要将从前一段关系中受到的伤痛应用到新关系，重要的是要有重新开始的心态。',
            '应该避免草率的判断。请仔细判断重要事项，最好在经过充分的考虑和审查后再做决定。'
          ];
        },
        get 'zh-TW'() {
          const now = new Date();
          const future2 = new Date(now.getFullYear(), now.getMonth() + 2, 1);
          const future4 = new Date(now.getFullYear(), now.getMonth() + 4, 1);
          const future6 = new Date(now.getFullYear(), now.getMonth() + 6, 1);
          const future8 = new Date(now.getFullYear(), now.getMonth() + 8, 1);
          const future10 = new Date(now.getFullYear(), now.getMonth() + 10, 1);
          
          const getMonthStr = (date: Date) => {
            const monthName = date.toLocaleString('zh-TW', { month: 'long' });
            if (date.getFullYear() > now.getFullYear()) {
              return `明年${monthName}`;
            }
            return `${monthName}`;
          };
          
          const next2 = getMonthStr(future2);
          const next4 = getMonthStr(future4);
          const next6 = getMonthStr(future6);
          const next8 = getMonthStr(future8);
          const next10 = getMonthStr(future10);
          
          return [
            `${next2}請注意情緒波動。這一時期情緒可能會有些不穩定，因此最好謹慎地做出重要決定。`,
            `${next4}請不要著急，慢慢進行。如果匆忙進行可能會後悔，因此重要的是花時間深思熟慮。`,
            `${next6}過度期望可能會導致失望。最好以現實的期望發展關係，即使對小事也要心存感激。`,
            `${next8}請警惕嫉妒或懷疑。不必要的誤解和懷疑可能會損害關係，因此基於信任進行溝通很重要。`,
            `${next10}請注意經濟問題。可能會因金錢問題產生衝突，因此有必要提前通過對話分享和理解彼此的價值觀。`,
            '可能需要警惕來自家人或朋友的反對。周圍人的反對可能會對關係產生負面影響，因此需要努力說服他們並讓他們理解。',
            '匆忙的決定可能是危險的。請花足夠的時間仔細考慮重要決定，理性判斷不要被情緒左右。',
            '請注意溝通不足的問題。如果對話不足可能會產生誤解，衝突可能會擴大，因此請定期花時間分享彼此的心意。',
            '不應該將過去的傷痛應用到當前關係。不要將從前一段關係中受到的傷痛應用到新關係，重要的是要有重新開始的心態。',
            '應該避免草率的判斷。請仔細判斷重要事項，最好在經過充分的考慮和審查後再做決定。'
          ];
        },
        get vi() {
          const now = new Date();
          const future2 = new Date(now.getFullYear(), now.getMonth() + 2, 1);
          const future4 = new Date(now.getFullYear(), now.getMonth() + 4, 1);
          const future6 = new Date(now.getFullYear(), now.getMonth() + 6, 1);
          const future8 = new Date(now.getFullYear(), now.getMonth() + 8, 1);
          const future10 = new Date(now.getFullYear(), now.getMonth() + 10, 1);
          
          const getMonthStr = (date: Date) => {
            const monthName = date.toLocaleString('vi-VN', { month: 'long' });
            if (date.getFullYear() > now.getFullYear()) {
              return `Tháng ${date.getMonth() + 1} năm sau`;
            }
            return `Tháng ${monthName}`;
          };
          
          const next2 = getMonthStr(future2);
          const next4 = getMonthStr(future4);
          const next6 = getMonthStr(future6);
          const next8 = getMonthStr(future8);
          const next10 = getMonthStr(future10);
          
          return [
            `Xin hãy cẩn thận với biến động cảm xúc trong ${next2}. Trong thời kỳ này, cảm xúc có thể hơi không ổn định, vì vậy tốt hơn là đưa ra quyết định quan trọng một cách cẩn thận.`,
            `Xin đừng vội vàng và tiến hành từ từ trong ${next4}. Nếu bạn tiến hành vội vàng, bạn có thể hối tiếc sau này, vì vậy điều quan trọng là dành thời gian và suy nghĩ sâu sắc.`,
            `Kỳ vọng quá mức trong ${next6} có thể dẫn đến thất vọng. Tốt là phát triển mối quan hệ với những kỳ vọng thực tế, và xin hãy có một tấm lòng biết ơn ngay cả với những điều nhỏ nhặt.`,
            `Xin hãy cảnh giác với sự ghen tuông hoặc nghi ngờ trong ${next8}. Những hiểu lầm và nghi ngờ không cần thiết có thể làm tổn hại mối quan hệ, vì vậy điều quan trọng là giao tiếp dựa trên sự tin cậy.`,
            `Xin hãy cẩn thận về các vấn đề tài chính trong ${next10}. Xung đột có thể phát sinh do vấn đề tiền bạc, vì vậy cần thiết là chia sẻ và hiểu giá trị của nhau thông qua đối thoại trước.`,
            'Bạn có thể cần cẩn thận về sự phản đối từ gia đình hoặc bạn bè. Sự phản đối từ những người xung quanh có thể có tác động tiêu cực đến mối quan hệ, vì vậy cần nỗ lực thuyết phục và làm cho họ hiểu.',
            'Quyết định vội vàng có thể nguy hiểm. Xin hãy cân nhắc các quyết định quan trọng một cách cẩn thận với đủ thời gian, và đưa ra phán đoán một cách hợp lý mà không bị cảm xúc chi phối.',
            'Xin hãy cẩn thận về vấn đề giao tiếp không đủ. Nếu không có đủ đối thoại, hiểu lầm có thể phát sinh và xung đột có thể lớn lên, vì vậy xin hãy dành thời gian để chia sẻ tâm tư của nhau thường xuyên.',
            'Bạn không nên áp dụng vết thương quá khứ vào mối quan hệ hiện tại. Đừng áp dụng vết thương nhận được từ các mối quan hệ trước đây vào các mối quan hệ mới, và điều quan trọng là có tư duy bắt đầu lại.',
            'Nên tránh những phán đoán hấp tấp. Xin hãy phán đoán các vấn đề quan trọng một cách cẩn thận, và mong muốn là đưa ra quyết định sau khi xem xét và rà soát đầy đủ.'
          ];
        },
        get id() {
          const now = new Date();
          const future2 = new Date(now.getFullYear(), now.getMonth() + 2, 1);
          const future4 = new Date(now.getFullYear(), now.getMonth() + 4, 1);
          const future6 = new Date(now.getFullYear(), now.getMonth() + 6, 1);
          const future8 = new Date(now.getFullYear(), now.getMonth() + 8, 1);
          const future10 = new Date(now.getFullYear(), now.getMonth() + 10, 1);
          
          const getMonthStr = (date: Date) => {
            const monthNames = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
            const monthName = monthNames[date.getMonth()];
            if (date.getFullYear() > now.getFullYear()) {
              return `${monthName} tahun depan`;
            }
            return monthName;
          };
          
          const next2 = getMonthStr(future2);
          const next4 = getMonthStr(future4);
          const next6 = getMonthStr(future6);
          const next8 = getMonthStr(future8);
          const next10 = getMonthStr(future10);
          
          return [
            `Harap berhati-hati tentang fluktuasi emosional di ${next2}. Selama periode ini, emosi mungkin agak tidak stabil, jadi lebih baik membuat keputusan penting dengan hati-hati.`,
            `Harap jangan terburu-buru dan lanjutkan perlahan di ${next4}. Jika Anda lanjutkan dengan terburu-buru, Anda mungkin menyesal kemudian, jadi penting untuk meluangkan waktu dan berpikir mendalam.`,
            `Ekspektasi berlebihan di ${next6} dapat menyebabkan kekecewaan. Baik untuk mengembangkan hubungan dengan ekspektasi yang realistis, dan harap memiliki hati yang bersyukur bahkan untuk hal-hal kecil.`,
            `Harap waspadai kecemburuan atau kecurigaan di ${next8}. Kesalahpahaman dan kecurigaan yang tidak perlu dapat merusak hubungan, jadi penting untuk berkomunikasi berdasarkan kepercayaan.`,
            `Harap berhati-hati tentang masalah keuangan di ${next10}. Konflik dapat timbul karena masalah uang, jadi perlu untuk berbagi dan memahami nilai-nilai satu sama lain melalui dialog sebelumnya.`,
            'Anda mungkin perlu berhati-hati tentang oposisi dari keluarga atau teman. Oposisi dari orang-orang di sekitar Anda dapat memiliki dampak negatif pada hubungan, jadi upaya untuk membujuk dan membuat mereka memahami diperlukan.',
            'Keputusan terburu-buru bisa berbahaya. Harap pertimbangkan keputusan penting dengan hati-hati dengan waktu yang cukup, dan buat penilaian secara rasional tanpa terpengaruh oleh emosi.',
            'Harap berhati-hati tentang masalah komunikasi yang tidak mencukupi. Jika tidak ada dialog yang cukup, kesalahpahaman dapat timbul dan konflik dapat tumbuh, jadi harap luangkan waktu untuk berbagi hati satu sama lain secara teratur.',
            'Anda seharusnya tidak menerapkan luka masa lalu ke hubungan saat ini. Jangan menerapkan luka yang diterima dari hubungan sebelumnya ke hubungan baru, dan penting untuk memiliki pola pikir memulai dari awal.',
            'Penilaian terburu-buru harus dihindari. Harap menilai hal-hal penting dengan hati-hati, dan diinginkan untuk membuat keputusan setelah pertimbangan dan tinjauan yang cukup.'
          ];
        }
      }
    }
  },
  {
    id: 3,
    title: {
      ko: '보통 연애운',
      en: 'Average Love Fortune',
      ja: '普通の恋愛運',
      'zh-CN': '普通恋爱运',
      'zh-TW': '普通戀愛運',
      vi: 'Vận Tình Duyên Bình Thường',
      id: 'Nasib Cinta Rata-Rata'
    },
    description: {
      get ko() {
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth() + 1;
        
        let periodText = '';
        if (currentMonth <= 9) {
          periodText = `${currentYear + 1}년 초`;
        } else if (currentMonth === 10) {
          periodText = `${currentYear + 1}년 초 또는 중반`;
        } else if (currentMonth === 11) {
          periodText = `${currentYear + 1}년 초 또는 중반`;
        } else {
          periodText = `${currentYear + 1}년 중반`;
        }
        
        return [
          `${periodText} 연애운이 평범하게 흐를 것입니다. 특별한 변화는 없지만 꾸준히 노력하면 좋은 인연을 만날 수 있는 기회가 있을 것입니다.`,
          `${periodText} 연애에서 큰 변화는 없을 것으로 예상됩니다. 하지만 작은 만남들을 통해 의미 있는 인연을 형성할 수 있는 가능성이 있습니다.`,
          `${periodText} 연애운이 안정적으로 유지될 것입니다. 급진적인 변화보다는 차근차근 관계를 발전시켜 나가는 것이 좋은 시기입니다.`,
          `${periodText} 새로운 인연을 만날 수 있지만 그 전에 자신을 잘 준비하는 것이 중요합니다. 내면의 성장을 통해 더 나은 인연을 끌어들일 수 있습니다.`,
          `${periodText} 연애에서 특별한 운은 없지만 노력을 통해 인연을 만들 수 있습니다. 적극적인 자세와 긍정적인 마음가짐이 중요한 시기입니다.`,
          `${periodText} 연애운이 보통 수준일 것입니다. 하지만 자신감을 가지고 적극적으로 나서면 만족스러운 인연을 만날 수 있는 기회가 생길 것입니다.`,
          `${periodText} 연애에서 큰 기복 없이 일정하게 흐를 것입니다. 인내심을 가지고 천천히 관계를 발전시키며 신뢰를 쌓아가는 것이 중요합니다.`,
          `${periodText} 연애운이 다소 둔화될 수 있지만, 포기하지 않고 계속 노력한다면 좋은 결과를 얻을 수 있을 것입니다.`,
          `${periodText} 새로운 만남의 기회가 있을 수 있지만, 서두르지 말고 신중하게 선택하는 것이 중요합니다. 성급함보다는 신중함이 필요한 시기입니다.`,
          `${periodText} 연애에서 점진적인 발전이 예상됩니다. 큰 변화는 없지만 작은 변화들을 통해 관계가 조금씩 나아질 수 있는 시기입니다.`
        ];
      },
      en: [
        'Your love fortune will flow normally. No special changes are expected, but with steady effort, opportunities to meet good connections may arise.',
        'No major changes in love are expected. However, there is potential to form meaningful connections through small meetings.',
        'Your love fortune will remain stable. This is a good time to develop relationships gradually rather than making radical changes.',
        'You can meet new connections, but it is important to prepare yourself well beforehand. You can attract better connections through inner growth.',
        'There is no special luck in love, but you can create connections through effort. An active attitude and positive mindset are important.',
        'Your love fortune will be average. However, with confidence and active approach, opportunities to meet satisfying connections may arise.',
        'Love will flow steadily without major fluctuations. It is important to develop relationships slowly with patience and build trust.',
        'Your love fortune may slow down somewhat, but if you continue to make efforts without giving up, you can achieve good results.',
        'There may be opportunities for new meetings, but it is important to choose carefully without rushing. Caution rather than haste is needed.',
        'Gradual progress in love is expected. While there are no major changes, relationships can improve little by little through small changes.'
      ],
      ja: [
        '恋愛運は普通に流れるでしょう。特別な変化はありませんが、着実な努力により良い縁に会える機会があるかもしれません。',
        '恋愛での大きな変化は予想されません。しかし、小さな出会いを通じて意味のある縁を形成する可能性があります。',
        '恋愛運は安定して維持されるでしょう。急進的な変化よりも、着実に関係を発展させていくのが良い時期です。',
        '新しい縁に会えるかもしれませんが、その前に自分をよく準備することが重要です。内面の成長を通じてより良い縁を引き寄せることができます。',
        '恋愛での特別な運はありませんが、努力を通じて縁を作ることができます。積極的な姿勢とポジティブな心構えが重要な時期です。',
        '恋愛運は平均的なレベルになるでしょう。しかし、自信を持って積極的に臨めば満足のいく縁に会える機会が生まれるかもしれません。',
        '恋愛で大きな浮き沈みなく一定に流れるでしょう。忍耐を持ってゆっくり関係を発展させ、信頼を築くことが重要です。',
        '恋愛運がやや鈍化する可能性がありますが、諦めずに努力を続ければ良い結果を得ることができるでしょう。',
        '新しい出会いの機会があるかもしれませんが、急がず慎重に選択することが重要です。性急さよりも慎重さが必要な時期です。',
        '恋愛での段階的な進展が予想されます。大きな変化はありませんが、小さな変化を通じて関係が少しずつ良くなる時期です。'
      ],
      'zh-CN': [
        '你的恋爱运将正常流动。虽然不会有什么特殊变化，但通过持续努力，可能会有遇到好缘分的机会。',
        '恋爱方面不会有重大变化。但通过小的相遇，有可能形成有意义的缘分。',
        '你的恋爱运将保持稳定。这是一个循序渐进发展关系的好时期，而不是激进变化。',
        '你可能会遇到新的缘分，但在此之前好好准备自己很重要。通过内在成长可以吸引更好的缘分。',
        '恋爱方面没有特殊运气，但可以通过努力创造缘分。积极主动的态度和积极的心态很重要。',
        '你的恋爱运将是平均水平。但如果带着信心积极主动，可能会有遇到满意缘分的机会。',
        '恋爱将稳定流动，不会有大的波动。耐心地慢慢发展关系并建立信任很重要。',
        '你的恋爱运可能会有些缓慢，但如果继续努力不放弃，可以获得好的结果。',
        '可能会有新相遇的机会，但重要的是不要匆忙，谨慎选择。需要谨慎而不是急躁。',
        '预期恋爱会有渐进的发展。虽然不会有大的变化，但通过小的变化，关系可以逐渐改善。'
      ],
      'zh-TW': [
        '你的戀愛運將正常流動。雖然不會有什麼特殊變化，但通過持續努力，可能會有遇到好緣分的機會。',
        '戀愛方面不會有重大變化。但通過小的相遇，有可能形成有意義的緣分。',
        '你的戀愛運將保持穩定。這是一個循序漸進發展關係的好時期，而不是激進變化。',
        '你可能會遇到新的緣分，但在此之前好好準備自己很重要。通過內在成長可以吸引更好的緣分。',
        '戀愛方面沒有特殊運氣，但可以通過努力創造緣分。積極主動的態度約積極的心態很重要。',
        '你的戀愛運將是平均水平。但如果帶著信心積極主動，可能會有遇到滿意緣分的機會。',
        '戀愛將穩定流動，不會有大的波動。耐心地慢慢發展關係並建立信任很重要。',
        '你的戀愛運可能會有些緩慢，但如果繼續努力不放棄，可以獲得好的結果。',
        '可能會有新相遇的機會，但重要的是不要匆忙，謹慎選擇。需要謹慎而不是急躁。',
        '預期戀愛會有漸進的發展。雖然不會有大的變化，但通過小的變化，關係可以逐漸改善。'
      ],
      vi: [
        'Vận tình duyên của bạn sẽ chảy bình thường. Không có thay đổi đặc biệt nào được mong đợi, nhưng với nỗ lực ổn định, cơ hội gặp các kết nối tốt có thể nảy sinh.',
        'Không có thay đổi lớn nào trong tình yêu được mong đợi. Tuy nhiên, có tiềm năng hình thành các kết nối có ý nghĩa thông qua các cuộc gặp gỡ nhỏ.',
        'Vận tình duyên của bạn sẽ duy trì ổn định. Đây là thời điểm tốt để phát triển các mối quan hệ dần dần thay vì thực hiện những thay đổi cấp tiến.',
        'Bạn có thể gặp các kết nối mới, nhưng điều quan trọng là chuẩn bị bản thân tốt trước đó. Bạn có thể thu hút các kết nối tốt hơn thông qua sự phát triển nội tâm.',
        'Không có vận may đặc biệt trong tình yêu, nhưng bạn có thể tạo ra các kết nối thông qua nỗ lực. Thái độ tích cực và tư duy tích cực là quan trọng.',
        'Vận tình duyên của bạn sẽ ở mức trung bình. Tuy nhiên, với sự tự tin và cách tiếp cận tích cực, cơ hội gặp các kết nối thỏa mãn có thể nảy sinh.',
        'Tình yêu sẽ chảy ổn định mà không có biến động lớn. Điều quan trọng là phát triển các mối quan hệ từ từ với sự kiên nhẫn và xây dựng niềm tin.',
        'Vận tình duyên của bạn có thể chậm lại một chút, nhưng nếu bạn tiếp tục nỗ lực không bỏ cuộc, bạn có thể đạt được kết quả tốt.',
        'Có thể có cơ hội cho các cuộc gặp gỡ mới, nhưng điều quan trọng là chọn lựa cẩn thận mà không vội vàng. Cần thận trọng hơn là hấp tấp.',
        'Tiến bộ dần dần trong tình yêu được mong đợi. Mặc dù không có thay đổi lớn, các mối quan hệ có thể cải thiện từng chút một thông qua những thay đổi nhỏ.'
      ],
      id: [
        'Nasib cinta Anda akan mengalir normal. Tidak ada perubahan khusus yang diharapkan, tetapi dengan usaha yang stabil, peluang untuk bertemu koneksi yang baik mungkin muncul.',
        'Tidak ada perubahan besar dalam cinta yang diharapkan. Namun, ada potensi untuk membentuk koneksi yang bermakna melalui pertemuan kecil.',
        'Nasib cinta Anda akan tetap stabil. Ini adalah waktu yang baik untuk mengembangkan hubungan secara bertahap daripada membuat perubahan radikal.',
        'Anda dapat bertemu koneksi baru, tetapi penting untuk mempersiapkan diri dengan baik sebelumnya. Anda dapat menarik koneksi yang lebih baik melalui pertumbuhan batin.',
        'Tidak ada keberuntungan khusus dalam cinta, tetapi Anda dapat menciptakan koneksi melalui usaha. Sikap aktif dan pola pikir positif penting.',
        'Nasib cinta Anda akan rata-rata. Namun, dengan keyakinan dan pendekatan aktif, peluang untuk bertemu koneksi yang memuaskan mungkin muncul.',
        'Cinta akan mengalir stabil tanpa fluktuasi besar. Penting untuk mengembangkan hubungan perlahan dengan kesabaran dan membangun kepercayaan.',
        'Nasib cinta Anda mungkin sedikit melambat, tetapi jika Anda terus berusaha tanpa menyerah, Anda dapat mencapai hasil yang baik.',
        'Mungkin ada peluang untuk pertemuan baru, tetapi penting untuk memilih dengan hati-hati tanpa terburu-buru. Kebutuhan kehati-hatian daripada tergesa-gesa.',
        'Kemajuan bertahap dalam cinta diharapkan. Meskipun tidak ada perubahan besar, hubungan dapat membaik sedikit demi sedikit melalui perubahan kecil.'
      ]
    },
    emoji: '💛',
    scoreRange: [70, 79],
    strengths: {
      ko: ['안정성', '신중함', '인내심', '성실함', '균형감', '현실적 사고', '책임감', '신뢰성', '꾸준함', '성숙함'],
      en: ['Stability', 'Caution', 'Patience', 'Sincerity', 'Balance', 'Realistic thinking', 'Responsibility', 'Reliability', 'Consistency', 'Maturity'],
      ja: ['安定性', '慎重', '忍耐', '誠実', 'バランス', '現実的な思考', '責任感', '信頼性', '一貫性', '成熟'],
      'zh-CN': ['稳定性', '谨慎', '耐心', '真诚', '平衡感', '现实思维', '责任感', '可靠性', '一致性', '成熟'],
      'zh-TW': ['穩定性', '謹慎', '耐心', '真誠', '平衡感', '現實思維', '責任感', '可靠性', '一致性', '成熟'],
      vi: ['Ổn định', 'Thận trọng', 'Kiên nhẫn', 'Chân thành', 'Cân bằng', 'Suy nghĩ thực tế', 'Trách nhiệm', 'Đáng tin cậy', 'Nhất quán', 'Trưởng thành'],
      id: ['Stabilitas', 'Kehati-hatian', 'Kesabaran', 'Ketulusan', 'Keseimbangan', 'Pemikiran realistis', 'Tanggung jawab', 'Keandalan', 'Konsistensi', 'Kedewasaan']
    },
    recommendations: {
      ko: ['천천히 발전', '신중한 선택', '내면 성장', '인내심', '긍정적 자세', '단계적 관계 발전', '서로의 공간 존중', '솔직한 대화', '현실적 기대', '작은 것에 감사'],
      en: ['Gradual development', 'Careful selection', 'Inner growth', 'Patience', 'Positive attitude', 'Gradual relationship development', 'Respecting each other\'s space', 'Honest conversations', 'Realistic expectations', 'Gratitude for small things'],
      ja: ['徐々な発展', '慎重な選択', '内面の成長', '忍耐', 'ポジティブな姿勢', '段階的な関係の発展', 'お互いの空間を尊重', '正直な会話', '現実的な期待', '小さなことに感謝'],
      'zh-CN': ['循序渐进', '谨慎选择', '内在成长', '耐心', '积极态度', '渐进关系发展', '尊重彼此空间', '真诚对话', '现实期望', '对小事感恩'],
      'zh-TW': ['循序漸進', '謹慎選擇', '內在成長', '耐心', '積極態度', '漸進關係發展', '尊重彼此空間', '真誠對話', '現實期望', '對小事感恩'],
      vi: ['Phát triển dần dần', 'Lựa chọn cẩn thận', 'Phát triển nội tâm', 'Kiên nhẫn', 'Thái độ tích cực', 'Phát triển mối quan hệ dần dần', 'Tôn trọng không gian của nhau', 'Trò chuyện trung thực', 'Kỳ vọng thực tế', 'Biết ơn những điều nhỏ'],
      id: ['Perkembangan bertahap', 'Pemilihan hati-hati', 'Pertumbuhan batin', 'Kesabaran', 'Sikap positif', 'Pengembangan hubungan bertahap', 'Menghormati ruang satu sama lain', 'Percakapan jujur', 'Ekspektasi realistis', 'Bersyukur atas hal-hal kecil']
    },
    personality: {
      ko: [
        '안정적이고 균형감 있는 성격입니다.',
        '신중하게 결정을 내리는 사람입니다.',
        '인내심이 있어 꾸준히 노력할 수 있습니다.',
        '성실하고 책임감 있는 태도를 가지고 있습니다.',
        '현실적이고 실용적인 사고를 합니다.'
      ],
      en: [
        'You have a stable and balanced personality.',
        'You make decisions carefully.',
        'You have patience to make steady efforts.',
        'You have a sincere and responsible attitude.',
        'You think practically and realistically.'
      ],
      ja: [
        '安定していてバランス感のある性格です。',
        '慎重に決定を下す人です。',
        '忍耐があり、着実に努力することができます。',
        '誠実で責任感のある態度を持っています。',
        '現実的で実用的な思考をします。'
      ],
      'zh-CN': [
        '你有着稳定和平衡的性格。',
        '你会谨慎地做出决定。',
        '你有耐心可以持续努力。',
        '你有着真诚和负责的态度。',
        '你思考务实和现实。'
      ],
      'zh-TW': [
        '你有著穩定和平衡的性格。',
        '你會謹慎地做出決定。',
        '你有耐心可以持續努力。',
        '你有著真誠和負責的態度。',
        '你思考務實和現實。'
      ],
      vi: [
        'Bạn có tính cách ổn định và cân bằng.',
        'Bạn đưa ra quyết định một cách cẩn thận.',
        'Bạn có sự kiên nhẫn để nỗ lực ổn định.',
        'Bạn có thái độ chân thành và có trách nhiệm.',
        'Bạn suy nghĩ thực tế và thực dụng.'
      ],
      id: [
        'Anda memiliki kepribadian yang stabil dan seimbang.',
        'Anda membuat keputusan dengan hati-hati.',
        'Anda memiliki kesabaran untuk upaya yang stabil.',
        'Anda memiliki sikap tulus dan bertanggung jawab.',
        'Anda berpikir praktis dan realistis.'
      ]
    },
    advice: {
      get ko() {
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth() + 1;
        
        let periodText = '';
        if (currentMonth <= 9) {
          periodText = `${currentYear + 1}년 초`;
        } else if (currentMonth === 10) {
          periodText = `${currentYear + 1}년 초 또는 중반`;
        } else if (currentMonth === 11) {
          periodText = `${currentYear + 1}년 초 또는 중반`;
        } else {
          periodText = `${currentYear + 1}년 중반`;
        }
        
        return [
          `${periodText} 자신을 먼저 준비하시기 바랍니다. 좋은 인연을 만나기 위해서는 먼저 자신을 알고 성장하는 것이 중요하며, 내면의 발전이 필요합니다.`,
          '서두르지 말고 천천히 관계를 발전시키시기 바랍니다. 성급한 결정보다는 시간을 두고 신중하게 관계를 살펴보며, 서로를 이해하는 것이 중요합니다.',
          '인내심을 가지고 꾸준히 노력하시기 바랍니다. 연애는 하루아침에 이루어지는 것이 아니므로, 작은 노력들을 쌓아가며 관계를 발전시켜 나가시기 바랍니다.',
          '긍정적인 마음가짐을 유지하시기 바랍니다. 어려움이 있어도 포기하지 않고 긍정적으로 생각하며, 좋은 변화가 있을 것이라고 믿는 것이 중요합니다.',
          '다양한 경험을 쌓아가시기 바랍니다. 새로운 취미나 활동을 통해 자신의 관심사를 넓히고, 이를 통해 새로운 인연의 기회를 만들어보시기 바랍니다.',
          '신중하게 인연을 선택하시기 바랍니다. 첫 인상에만 의존하지 말고, 시간을 두고 상대방의 진심을 확인하며, 성급하게 결정하지 않는 것이 좋습니다.',
          '자신의 감정을 솔직하게 표현하시기 바랍니다. 숨기거나 거짓말하지 않고 진솔하게 자신의 마음을 전달하며, 상대방도 자신을 이해할 수 있도록 하시기 바랍니다.',
          '관계에서 균형을 유지하시기 바랍니다. 너무 적극적이거나 너무 소극적인 것이 아니라, 서로에게 편안한 균형점을 찾으며 관계를 발전시켜 나가시기 바랍니다.',
          '작은 것부터 시작하시기 바랍니다. 큰 것을 바라기보다는 작은 변화와 발전을 기뻐하며, 한 걸음씩 나아가는 것이 중요합니다.',
          '자신을 사랑하는 것을 잊지 마시기 바랍니다. 다른 사람의 사랑을 받기 전에 먼저 자신을 소중히 여기며, 자신감을 갖는 것이 좋은 인연을 만드는 첫걸음입니다.'
        ];
      },
      get en() {
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth() + 1;
        
        let periodText = '';
        if (currentMonth <= 9) {
          periodText = `Early ${currentYear + 1}`;
        } else if (currentMonth === 10) {
          periodText = `Early to mid ${currentYear + 1}`;
        } else if (currentMonth === 11) {
          periodText = `Early to mid ${currentYear + 1}`;
        } else {
          periodText = `Mid ${currentYear + 1}`;
        }
        
        return [
          `Please prepare yourself first in ${periodText}. To meet good connections, it is important to first know and grow yourself, and inner development is necessary.`,
          'Please do not rush and develop relationships slowly. Rather than hasty decisions, take time to carefully observe relationships and understand each other.',
          'Please have patience and make steady efforts. Love is not achieved overnight, so please accumulate small efforts and develop relationships.',
          'Please maintain a positive mindset. Even if there are difficulties, do not give up and think positively, and it is important to believe that good changes will come.',
          'Please build various experiences. Expand your interests through new hobbies or activities, and try to create opportunities for new connections through them.',
          'Please choose connections carefully. Do not rely solely on first impressions, take time to confirm the other person\'s sincerity, and it is good not to make hasty decisions.',
          'Please express your emotions honestly. Without hiding or lying, convey your heart sincerely, and help your partner understand you as well.',
          'Please maintain balance in relationships. Rather than being too active or too passive, find a comfortable balance point for each other and develop relationships.',
          'Please start with small things. Rather than hoping for big things, rejoice in small changes and developments, and it is important to move forward step by step.',
          'Do not forget to love yourself. Before receiving love from others, first cherish yourself and having confidence is the first step to creating good connections.'
        ];
      },
      get ja() {
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth() + 1;
        
        let periodText = '';
        if (currentMonth <= 9) {
          periodText = `${currentYear + 1}年初`;
        } else if (currentMonth === 10) {
          periodText = `${currentYear + 1}年初または中旬`;
        } else if (currentMonth === 11) {
          periodText = `${currentYear + 1}年初または中旬`;
        } else {
          periodText = `${currentYear + 1}年中旬`;
        }
        
        return [
          `${periodText}まず自分を準備してください。良い縁に会うためにはまず自分を知り成長することが重要であり、内面の発展が必要です。`,
          '急がずにゆっくりと関係を発展させてください。性急な決定よりも時間をかけて慎重に関係を観察し、お互いを理解することが重要です。',
          '忍耐力を持って着実に努力してください。恋愛は一朝一夕には成り立たないため、小さな努力を積み重ねながら関係を発展させてください。',
          'ポジティブな心構えを維持してください。困難があっても諦めずにポジティブに考え、良い変化があると信じることが重要です。',
          '様々な経験を積んでください。新しい趣味や活動を通じて自分の興味を広げ、これを通じて新しい縁の機会を作ってみてください。',
          '慎重に縁を選択してください。第一印象だけに頼らず、時間をかけて相手の真心を確認し、性急に決定しないことが良いです。',
          '自分の感情を正直に表現してください。隠したり嘘をついたりせず、真心を込めて自分の心を伝え、相手も自分を理解できるようにしてください。',
          '関係でバランスを維持してください。あまり積極的すぎたり消極的すぎたりするのではなく、お互いに快適なバランスポイントを見つけながら関係を発展させてください。',
          '小さなことから始めてください。大きなことを望むよりも、小さな変化と発展を喜び、一歩ずつ前進することが重要です。',
          '自分を愛することを忘れないでください。他の人の愛を受ける前に、まず自分を大切にし、自信を持つことが良い縁を作る第一歩です。'
        ];
      },
      get 'zh-CN'() {
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth() + 1;
        
        let periodText = '';
        if (currentMonth <= 9) {
          periodText = `${currentYear + 1}年初`;
        } else if (currentMonth === 10) {
          periodText = `${currentYear + 1}年初或中旬`;
        } else if (currentMonth === 11) {
          periodText = `${currentYear + 1}年初或中旬`;
        } else {
          periodText = `${currentYear + 1}年中旬`;
        }
        
        return [
          `${periodText}请先准备好自己。为了遇到好的缘分，首先了解和成长自己是重要的，内在发展是必要的。`,
          '请不要着急，慢慢发展关系。比起匆忙的决定，重要的是花时间仔细观察关系并理解彼此。',
          '请有耐心并持续努力。恋爱不是一蹴而就的，所以请积累小的努力并发展关系。',
          '请保持积极的心态。即使有困难也不要放弃，积极思考，相信会有好的变化，这是很重要的。',
          '请积累各种经验。通过新的兴趣或活动扩展自己的兴趣，并通过这些尝试创造新缘分的机会。',
          '请谨慎地选择缘分。不要仅仅依赖第一印象，花时间确认对方的真心，不匆忙决定是好的。',
          '请诚实表达自己的感情。不要隐藏或撒谎，真诚地传达自己的心意，并帮助对方也理解你。',
          '请在关系中保持平衡。不要太积极或太被动，为彼此找到舒适平衡点，发展关系是好的。',
          '请从小事开始。比起希望大事，为小的变化和发展而高兴，一步一步前进是重要的。',
          '请不要忘记爱自己。在接受别人的爱之前，先珍惜自己，拥有自信是创造好缘分的第一步。'
        ];
      },
      get 'zh-TW'() {
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth() + 1;
        
        let periodText = '';
        if (currentMonth <= 9) {
          periodText = `${currentYear + 1}年初`;
        } else if (currentMonth === 10) {
          periodText = `${currentYear + 1}年初或中旬`;
        } else if (currentMonth === 11) {
          periodText = `${currentYear + 1}年初或中旬`;
        } else {
          periodText = `${currentYear + 1}年中旬`;
        }
        
        return [
          `${periodText}請先準備好自己。為了遇到好的緣分，首先了解和成長自己是重要的，內在發展是必要的。`,
          '請不要著急，慢慢發展關係。比起匆忙的決定，重要的是花時間仔細觀察關係並理解彼此。',
          '請有耐心並持續努力。戀愛不是一蹴而就的，所以請積累小的努力並發展關係。',
          '請保持積極的心態。即使有困難也不要放棄，積極思考，相信會有好的變化，這是很重要的。',
          '請積累各種經驗。通過新的興趣或活動擴展自己的興趣，並通過這些嘗試創造新緣分的機會。',
          '請謹慎地選擇緣分。不要僅僅依賴第一印象，花時間確認對方的真心，不匆忙決定是好的。',
          '請誠實表達自己的感情。不要隱藏或撒謊，真誠地傳達自己的心意，並幫助對方也理解你。',
          '請在關係中保持平衡。不要太積極或太被動，為彼此找到舒適平衡點，發展關係是好的。',
          '請從小事開始。比起希望大事，為小的變化和發展而高興，一步一步前進是重要的。',
          '請不要忘記愛自己。在接受別人的愛之前，先珍惜自己，擁有自信是創造好緣分的第一步。'
        ];
      },
      get vi() {
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth() + 1;
        
        let periodText = '';
        if (currentMonth <= 9) {
          periodText = `Đầu ${currentYear + 1}`;
        } else if (currentMonth === 10) {
          periodText = `Đầu đến giữa ${currentYear + 1}`;
        } else if (currentMonth === 11) {
          periodText = `Đầu đến giữa ${currentYear + 1}`;
        } else {
          periodText = `Giữa ${currentYear + 1}`;
        }
        
        return [
          `${periodText} xin hãy chuẩn bị bản thân trước. Để gặp các kết nối tốt, điều quan trọng là trước tiên biết và phát triển bản thân, và phát triển nội tâm là cần thiết.`,
          'Xin đừng vội vàng và phát triển các mối quan hệ từ từ. Thay vì những quyết định vội vàng, hãy dành thời gian để quan sát cẩn thận các mối quan hệ và hiểu nhau.',
          'Xin hãy có sự kiên nhẫn và nỗ lực ổn định. Tình yêu không đạt được trong một đêm, vì vậy xin hãy tích lũy những nỗ lực nhỏ và phát triển các mối quan hệ.',
          'Xin hãy duy trì một tư duy tích cực. Ngay cả khi có khó khăn, đừng bỏ cuộc và suy nghĩ tích cực, và điều quan trọng là tin rằng những thay đổi tốt sẽ đến.',
          'Xin hãy xây dựng các trải nghiệm khác nhau. Mở rộng sở thích của bạn thông qua các sở thích hoặc hoạt động mới, và thử tạo cơ hội cho các kết nối mới thông qua chúng.',
          'Xin hãy chọn các kết nối cẩn thận. Đừng chỉ dựa vào ấn tượng đầu tiên, hãy dành thời gian để xác nhận sự chân thành của người khác, và không đưa ra quyết định vội vàng là tốt.',
          'Xin hãy thể hiện cảm xúc của bạn một cách trung thực. Không giấu giếm hoặc nói dối, hãy truyền đạt trái tim của bạn một cách chân thành, và giúp đối tác hiểu bạn.',
          'Xin hãy duy trì sự cân bằng trong các mối quan hệ. Thay vì quá tích cực hoặc quá thụ động, hãy tìm một điểm cân bằng thoải mái cho nhau và phát triển các mối quan hệ.',
          'Xin hãy bắt đầu từ những điều nhỏ. Thay vì hy vọng những điều lớn, hãy vui mừng với những thay đổi và phát triển nhỏ, và điều quan trọng là tiến lên từng bước.',
          'Xin đừng quên yêu bản thân. Trước khi nhận tình yêu từ người khác, trước tiên hãy trân trọng chính mình, và có sự tự tin là bước đầu tiên để tạo ra các kết nối tốt.'
        ];
      },
      get id() {
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth() + 1;
        
        let periodText = '';
        if (currentMonth <= 9) {
          periodText = `Awal ${currentYear + 1}`;
        } else if (currentMonth === 10) {
          periodText = `Awal hingga pertengahan ${currentYear + 1}`;
        } else if (currentMonth === 11) {
          periodText = `Awal hingga pertengahan ${currentYear + 1}`;
        } else {
          periodText = `Pertengahan ${currentYear + 1}`;
        }
        
        return [
          `${periodText} harap persiapkan diri Anda terlebih dahulu. Untuk bertemu koneksi yang baik, penting untuk pertama-tama mengenal dan mengembangkan diri sendiri, dan pengembangan internal diperlukan.`,
          'Harap jangan terburu-buru dan kembangkan hubungan perlahan. Daripada keputusan terburu-buru, penting untuk meluangkan waktu untuk mengamati hubungan dengan hati-hati dan saling memahami.',
          'Harap miliki kesabaran dan lakukan upaya yang stabil. Cinta tidak dicapai dalam semalam, jadi harap akumulasikan upaya kecil dan kembangkan hubungan.',
          'Harap pertahankan pola pikir positif. Bahkan jika ada kesulitan, jangan menyerah dan berpikir positif, dan penting untuk percaya bahwa perubahan baik akan datang.',
          'Harap bangun berbagai pengalaman. Perluas minat Anda melalui hobi atau aktivitas baru, dan coba ciptakan peluang untuk koneksi baru melalui mereka.',
          'Harap pilih koneksi dengan hati-hati. Jangan hanya mengandalkan kesan pertama, luangkan waktu untuk mengkonfirmasi ketulusan orang lain, dan baik untuk tidak membuat keputusan terburu-buru.',
          'Harap ekspresikan emosi Anda dengan jujur. Tanpa menyembunyikan atau berbohong, sampaikan hati Anda dengan tulus, dan bantu pasangan memahami Anda juga.',
          'Harap pertahankan keseimbangan dalam hubungan. Daripada terlalu aktif atau terlalu pasif, temukan titik keseimbangan yang nyaman satu sama lain dan kembangkan hubungan.',
          'Harap mulai dari hal-hal kecil. Daripada berharap hal-hal besar, bersukacita atas perubahan dan perkembangan kecil, dan penting untuk bergerak maju selangkah demi selangkah.',
          'Jangan lupa untuk mencintai diri sendiri. Sebelum menerima cinta dari orang lain, hargai diri sendiri terlebih dahulu, dan memiliki kepercayaan diri adalah langkah pertama untuk menciptakan koneksi yang baik.'
        ];
      }
    },
    fortune: {
      when: {
        get ko() {
          const now = new Date();
          const currentMonth = now.getMonth() + 1;
          
          let when1, when2, when3, when4;
          
          if (currentMonth <= 9) {
            when1 = getFutureMonthShort(3);
            when2 = getFutureMonthShort(4);
            when3 = getFutureMonthShort(5);
            when4 = getFutureMonthShort(6);
          } else if (currentMonth === 10) {
            when1 = getFutureMonthShort(3);
            when2 = getFutureMonthShort(4);
            when3 = getFutureMonthShort(5);
            when4 = getFutureMonthShort(6);
          } else if (currentMonth === 11) {
            when1 = getFutureMonthShort(3);
            when2 = getFutureMonthShort(4);
            when3 = getFutureMonthShort(5);
            when4 = getFutureMonthShort(6);
          } else {
            when1 = getFutureMonthShort(3);
            when2 = getFutureMonthShort(4);
            when3 = getFutureMonthShort(5);
            when4 = getFutureMonthShort(6);
          }
          
          return [
            `${when1} 또는 ${when2} 새로운 만남의 기회가 있을 수 있습니다. 서두르지 말고 천천히 관계를 발전시키며, 서로를 신뢰할 수 있는 시간을 가지시기 바랍니다.`,
            `${when2} 또는 ${when3} 점진적으로 인연이 발전할 수 있는 시기입니다. 급하게 진행하지 말고 인내심을 가지고 관계를 쌓아가며, 자연스러운 흐름을 따르시기 바랍니다.`,
            `${when1} 내면의 성장을 먼저 하는 것이 좋습니다. 새로운 인연을 만나기 전에 자신을 잘 준비하고, 성장한 모습으로 더 나은 인연을 끌어들일 수 있습니다.`,
            `${when3} 또는 ${when4} 좋은 인연을 만날 수 있는 가능성이 있습니다. 하지만 서두르지 말고 신중하게 선택하며, 상대방의 진심을 확인하시기 바랍니다.`,
            `${when2} 작은 만남들이 쌓여 큰 인연으로 발전할 수 있는 시기입니다. 작은 것부터 시작하여 점진적으로 관계를 발전시키며, 인내심을 가지시기 바랍니다.`,
            `${when1} 또는 ${when2} 자신의 관심사와 취미를 공유할 수 있는 사람을 만날 수 있습니다. 공통점을 가진 사람과 만나며 자연스럽게 인연이 시작될 수 있습니다.`,
            `${when3} 또는 ${when4} 점진적으로 관계가 깊어질 수 있는 시기입니다. 급하게 진행하지 말고 시간을 두고 서로를 이해하며, 신뢰를 쌓아가는 것이 중요합니다.`,
            `${when2} 일상 속에서 작은 변화가 생길 수 있습니다. 평범해 보이는 순간에도 특별한 만남이 숨어 있을 수 있으므로, 주변을 둘러보시기 바랍니다.`,
            `${when1} 또는 ${when3} 자신을 향상시킬 수 있는 시간이 중요합니다. 새로운 인연을 만나기 전에 자신을 발전시키고, 더 나은 사람이 되어 좋은 인연을 끌어들일 수 있습니다.`,
            `${when2} 또는 ${when4} 인내심과 노력을 통해 좋은 결과를 얻을 수 있는 시기입니다. 포기하지 않고 꾸준히 노력한다면 만족스러운 인연을 만날 수 있을 것입니다.`
          ];
        },
        get en() {
          const now = new Date();
          const currentMonth = now.getMonth() + 1;
          const currentYear = now.getFullYear();
          
          let when1, when2, when3, when4;
          
          const future3 = new Date(now.getFullYear(), now.getMonth() + 3, 1);
          const future4 = new Date(now.getFullYear(), now.getMonth() + 4, 1);
          const future5 = new Date(now.getFullYear(), now.getMonth() + 5, 1);
          const future6 = new Date(now.getFullYear(), now.getMonth() + 6, 1);
          
          const getMonthStr = (date: Date) => {
            const monthName = date.toLocaleString('en-US', { month: 'long' });
            if (date.getFullYear() > currentYear) {
              return `Next ${monthName}`;
            }
            return monthName;
          };
          
          when1 = getMonthStr(future3);
          when2 = getMonthStr(future4);
          when3 = getMonthStr(future5);
          when4 = getMonthStr(future6);
          
          return [
            `${when1} or ${when2} there may be opportunities for new meetings. Please do not rush and develop relationships slowly, and take time to trust each other.`,
            `${when2} or ${when3} is a time when connections can develop gradually. Do not proceed hastily, build relationships with patience, and follow the natural flow.`,
            `${when1} it is good to focus on inner growth first. Before meeting new connections, prepare yourself well, and you can attract better connections as a grown person.`,
            `${when3} or ${when4} there is a possibility of meeting a good connection. However, do not rush and choose carefully, and please confirm the other person\'s sincerity.`,
            `${when2} is a time when small meetings can accumulate and develop into major connections. Start with small things and gradually develop relationships, and have patience.`,
            `${when1} or ${when2} you can meet someone with whom you can share your interests and hobbies. Meeting someone with commonalities can naturally start connections.`,
            `${when3} or ${when4} is a time when relationships can deepen gradually. Do not proceed hastily, take time to understand each other, and it is important to build trust.`,
            `In ${when2}, small changes may occur in daily life. Even in seemingly ordinary moments, special meetings may be hidden, so please look around you.`,
            `${when1} or ${when3} time to improve yourself is important. Before meeting new connections, develop yourself and become a better person to attract good connections.`,
            `${when2} or ${when4} is a time when you can achieve good results through patience and effort. If you continue to make efforts without giving up, you can meet satisfying connections.`
          ];
        },
        get ja() {
          const now = new Date();
          const currentMonth = now.getMonth() + 1;
          const currentYear = now.getFullYear();
          
          let when1, when2, when3, when4;
          
          const future3 = new Date(now.getFullYear(), now.getMonth() + 3, 1);
          const future4 = new Date(now.getFullYear(), now.getMonth() + 4, 1);
          const future5 = new Date(now.getFullYear(), now.getMonth() + 5, 1);
          const future6 = new Date(now.getFullYear(), now.getMonth() + 6, 1);
          
          const getMonthStr = (date: Date) => {
            const monthName = date.toLocaleString('ja-JP', { month: 'long' });
            if (date.getFullYear() > currentYear) {
              return `来年${monthName}`;
            }
            return monthName;
          };
          
          when1 = getMonthStr(future3);
          when2 = getMonthStr(future4);
          when3 = getMonthStr(future5);
          when4 = getMonthStr(future6);
          
          return [
            `${when1}または${when2}には新しい出会いの機会があるかもしれません。急がずにゆっくりと関係を発展させ、お互いを信頼できる時間を持ってください。`,
            `${when2}または${when3}は段階的に縁が発展できる時期です。急いで進めず、忍耐力を持って関係を築き、自然な流れに従ってください。`,
            `${when1}には内面の成長をまずすることが良いです。新しい縁に会う前に自分をよく準備し、成長した姿でより良い縁を引き寄せることができます。`,
            `${when3}または${when4}には良い縁に会える可能性があります。しかし急がずに慎重に選択し、相手の真心を確認してください。`,
            `${when2}は小さな出会いが積み重なって大きな縁に発展できる時期です。小さなことから始めて段階的に関係を発展させ、忍耐力を持ってください。`,
            `${when1}または${when2}には自分の興味や趣味を共有できる人に会えるでしょう。共通点を持つ人と出会い、自然に縁が始まることができます。`,
            `${when3}または${when4}は段階的に関係が深まることができる時期です。急いで進めず、時間をかけてお互いを理解し、信頼を築くことが重要です。`,
            `${when2}には日常の中で小さな変化が生じるかもしれません。平凡に見える瞬間にも特別な出会いが隠れている可能性があるため、周りを見回してください。`,
            `${when1}または${when3}には自分を向上させることができる時間が重要です。新しい縁に会う前に自分を発展させ、より良い人になって良い縁を引き寄せることができます。`,
            `${when2}または${when4}は忍耐力と努力を通じて良い結果を得られる時期です。諦めずに着実に努力すれば、満足のいく縁に会うことができるでしょう。`
          ];
        },
        get 'zh-CN'() {
          const now = new Date();
          const currentMonth = now.getMonth() + 1;
          const currentYear = now.getFullYear();
          
          let when1, when2, when3, when4;
          
          const future3 = new Date(now.getFullYear(), now.getMonth() + 3, 1);
          const future4 = new Date(now.getFullYear(), now.getMonth() + 4, 1);
          const future5 = new Date(now.getFullYear(), now.getMonth() + 5, 1);
          const future6 = new Date(now.getFullYear(), now.getMonth() + 6, 1);
          
          const getMonthStr = (date: Date) => {
            const monthName = date.toLocaleString('zh-CN', { month: 'long' });
            if (date.getFullYear() > currentYear) {
              return `明年${monthName}`;
            }
            return `${monthName}`;
          };
          
          when1 = getMonthStr(future3);
          when2 = getMonthStr(future4);
          when3 = getMonthStr(future5);
          when4 = getMonthStr(future6);
          
          return [
            `${when1}或${when2}可能会有新相遇的机会。请不要着急，慢慢发展关系，花时间彼此信任。`,
            `${when2}或${when3}是缘分可以逐渐发展的时期。不要匆忙进行，要有耐心地建立关系，并遵循自然的流程。`,
            `${when1}首先专注于内在成长是好的。在遇到新缘分之前，好好准备自己，以成长后的样子可以吸引更好的缘分。`,
            `${when3}或${when4}有可能遇到好的缘分。但是请不要着急，谨慎选择，请确认对方的真心。`,
            `${when2}是小的相遇积累发展成大的缘分的时期。从小事开始，逐渐发展关系，要有耐心。`,
            `${when1}或${when2}你可以遇到可以分享自己兴趣和爱好的人。与有共同点的人相遇，缘分会自然开始。`,
            `${when3}或${when4}是关系可以逐渐加深的时期。不要匆忙进行，花时间理解彼此，建立信任是重要的。`,
            `在${when2}的日常生活中可能会发生小的变化。即使在看似平凡的瞬间，也可能隐藏着特殊的相遇，所以请环顾四周。`,
            `${when1}或${when3}可以提升自己的时间很重要。在遇到新缘分之前，发展自己，成为更好的人，可以吸引好的缘分。`,
            `${when2}或${when4}是通过耐心和努力可以获得好结果的时期。如果不放弃继续努力，可以遇到令人满意的缘分。`
          ];
        },
        get 'zh-TW'() {
          const now = new Date();
          const currentMonth = now.getMonth() + 1;
          const currentYear = now.getFullYear();
          
          let when1, when2, when3, when4;
          
          const future3 = new Date(now.getFullYear(), now.getMonth() + 3, 1);
          const future4 = new Date(now.getFullYear(), now.getMonth() + 4, 1);
          const future5 = new Date(now.getFullYear(), now.getMonth() + 5, 1);
          const future6 = new Date(now.getFullYear(), now.getMonth() + 6, 1);
          
          const getMonthStr = (date: Date) => {
            const monthName = date.toLocaleString('zh-TW', { month: 'long' });
            if (date.getFullYear() > currentYear) {
              return `明年${monthName}`;
            }
            return `${monthName}`;
          };
          
          when1 = getMonthStr(future3);
          when2 = getMonthStr(future4);
          when3 = getMonthStr(future5);
          when4 = getMonthStr(future6);
          
          return [
            `${when1}或${when2}可能會有新相遇的機會。請不要著急，慢慢發展關係，花時間彼此信任。`,
            `${when2}或${when3}是緣分可以逐漸發展的時期。不要匆忙進行，要有耐心地建立關係，並遵循自然的流程。`,
            `${when1}首先專注於內在成長是好的。在遇到新緣分之前，好好準備自己，以成長後的樣子可以吸引更好的緣分。`,
            `${when3}或${when4}有可能遇到好的緣分。但是請不要著急，謹慎選擇，請確認對方的真心。`,
            `${when2}是小的相遇積累發展成大的緣分的時期。從小事開始，逐漸發展關係，要有耐心。`,
            `${when1}或${when2}你可以遇到可以分享自己興趣和愛好的人。與有共同點的人相遇，緣分會自然開始。`,
            `${when3}或${when4}是關係可以逐漸加深的時期。不要匆忙進行，花時間理解彼此，建立信任是重要的。`,
            `在${when2}的日常生活中可能會發生小的變化。即使在看似平凡的瞬間，也可能隱藏著特殊的相遇，所以請環顧四周。`,
            `${when1}或${when3}可以提升自己的時間很重要。在遇到新緣分之前，發展自己，成為更好的人，可以吸引好的緣分。`,
            `${when2}或${when4}是通過耐心和努力可以獲得好結果的時期。如果不放棄繼續努力，可以遇到令人滿意的緣分。`
          ];
        },
        get vi() {
          const now = new Date();
          const currentMonth = now.getMonth() + 1;
          const currentYear = now.getFullYear();
          
          let when1, when2, when3, when4;
          
          const future3 = new Date(now.getFullYear(), now.getMonth() + 3, 1);
          const future4 = new Date(now.getFullYear(), now.getMonth() + 4, 1);
          const future5 = new Date(now.getFullYear(), now.getMonth() + 5, 1);
          const future6 = new Date(now.getFullYear(), now.getMonth() + 6, 1);
          
          const getMonthStr = (date: Date) => {
            const monthName = date.toLocaleString('vi-VN', { month: 'long' });
            if (date.getFullYear() > currentYear) {
              return `Tháng ${date.getMonth() + 1} năm sau`;
            }
            return `Tháng ${monthName}`;
          };
          
          when1 = getMonthStr(future3);
          when2 = getMonthStr(future4);
          when3 = getMonthStr(future5);
          when4 = getMonthStr(future6);
          
          return [
            `${when1} hoặc ${when2} có thể có cơ hội cho các cuộc gặp gỡ mới. Xin đừng vội vàng và phát triển các mối quan hệ từ từ, và dành thời gian để tin tưởng lẫn nhau.`,
            `${when2} hoặc ${when3} là thời điểm các kết nối có thể phát triển dần dần. Đừng tiến hành vội vàng, hãy xây dựng mối quan hệ với sự kiên nhẫn, và tuân theo luồng tự nhiên.`,
            `${when1} tốt là tập trung vào sự phát triển nội tâm trước. Trước khi gặp các kết nối mới, hãy chuẩn bị bản thân tốt, và bạn có thể thu hút các kết nối tốt hơn như một người đã trưởng thành.`,
            `${when3} hoặc ${when4} có khả năng gặp một kết nối tốt. Tuy nhiên, đừng vội vàng và chọn lựa cẩn thận, và xin hãy xác nhận sự chân thành của người khác.`,
            `${when2} là thời điểm các cuộc gặp gỡ nhỏ có thể tích lũy và phát triển thành kết nối lớn. Bắt đầu từ những điều nhỏ và phát triển các mối quan hệ dần dần, và có sự kiên nhẫn.`,
            `${when1} hoặc ${when2} bạn có thể gặp ai đó mà bạn có thể chia sẻ sở thích và sở thích của mình. Gặp gỡ ai đó có điểm chung có thể tự nhiên bắt đầu kết nối.`,
            `${when3} hoặc ${when4} là thời điểm các mối quan hệ có thể sâu sắc dần dần. Đừng tiến hành vội vàng, hãy dành thời gian để hiểu nhau, và điều quan trọng là xây dựng niềm tin.`,
            `Trong ${when2}, những thay đổi nhỏ có thể xảy ra trong cuộc sống hàng ngày. Ngay cả trong những khoảnh khắc có vẻ bình thường, các cuộc gặp gỡ đặc biệt có thể được ẩn giấu, vì vậy xin hãy nhìn xung quanh bạn.`,
            `${when1} hoặc ${when3} thời gian để cải thiện bản thân là quan trọng. Trước khi gặp các kết nối mới, hãy phát triển bản thân và trở thành một người tốt hơn để thu hút các kết nối tốt.`,
            `${when2} hoặc ${when4} là thời điểm bạn có thể đạt được kết quả tốt thông qua sự kiên nhẫn và nỗ lực. Nếu bạn tiếp tục nỗ lực không bỏ cuộc, bạn có thể gặp các kết nối thỏa mãn.`
          ];
        },
        get id() {
          const now = new Date();
          const currentMonth = now.getMonth() + 1;
          const currentYear = now.getFullYear();
          
          let when1, when2, when3, when4;
          
          const future3 = new Date(now.getFullYear(), now.getMonth() + 3, 1);
          const future4 = new Date(now.getFullYear(), now.getMonth() + 4, 1);
          const future5 = new Date(now.getFullYear(), now.getMonth() + 5, 1);
          const future6 = new Date(now.getFullYear(), now.getMonth() + 6, 1);
          
          const getMonthStr = (date: Date) => {
            const monthNames = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
            const monthName = monthNames[date.getMonth()];
            if (date.getFullYear() > currentYear) {
              return `${monthName} tahun depan`;
            }
            return monthName;
          };
          
          when1 = getMonthStr(future3);
          when2 = getMonthStr(future4);
          when3 = getMonthStr(future5);
          when4 = getMonthStr(future6);
          
          return [
            `${when1} atau ${when2} mungkin ada peluang untuk pertemuan baru. Harap jangan terburu-buru dan kembangkan hubungan perlahan, dan luangkan waktu untuk saling mempercayai.`,
            `${when2} atau ${when3} adalah waktu ketika koneksi dapat berkembang secara bertahap. Jangan lanjutkan dengan terburu-buru, bangun hubungan dengan kesabaran, dan ikuti alur alami.`,
            `${when1} baik untuk fokus pada pertumbuhan batin terlebih dahulu. Sebelum bertemu koneksi baru, persiapkan diri Anda dengan baik, dan Anda dapat menarik koneksi yang lebih baik sebagai orang yang telah dewasa.`,
            `${when3} atau ${when4} ada kemungkinan bertemu koneksi yang baik. Namun, jangan terburu-buru dan pilih dengan hati-hati, dan harap konfirmasi ketulusan orang lain.`,
            `${when2} adalah waktu ketika pertemuan kecil dapat terakumulasi dan berkembang menjadi koneksi besar. Mulai dari hal-hal kecil dan kembangkan hubungan secara bertahap, dan miliki kesabaran.`,
            `${when1} atau ${when2} Anda dapat bertemu seseorang yang dengannya Anda dapat berbagi minat dan hobi Anda. Bertemu seseorang dengan kesamaan dapat secara alami memulai koneksi.`,
            `${when3} atau ${when4} adalah waktu ketika hubungan dapat dalam secara bertahap. Jangan lanjutkan dengan terburu-buru, luangkan waktu untuk saling memahami, dan penting untuk membangun kepercayaan.`,
            `Dalam ${when2}, perubahan kecil mungkin terjadi dalam kehidupan sehari-hari. Bahkan pada momen yang tampak biasa, pertemuan khusus mungkin tersembunyi, jadi harap lihat di sekitar Anda.`,
            `${when1} atau ${when3} waktu untuk meningkatkan diri adalah penting. Sebelum bertemu koneksi baru, kembangkan diri Anda dan jadilah orang yang lebih baik untuk menarik koneksi yang baik.`,
            `${when2} atau ${when4} adalah waktu ketika Anda dapat mencapai hasil yang baik melalui kesabaran dan upaya. Jika Anda terus berusaha tanpa menyerah, Anda dapat bertemu koneksi yang memuaskan.`
          ];
        }
      },
      style: {
        ko: [
          '안정적이고 신중한 성격의 사람입니다. 성급하게 결정하지 않고 신중하게 판단하며, 책임감 있는 태도를 가지고 있습니다.',
          '균형감 있고 현실적인 사고를 하는 사람입니다. 감정보다는 이성을 중시하며, 실용적인 관점에서 관계를 바라보는 사람입니다.',
          '성실하고 꾸준한 노력을 하는 사람입니다. 한 번 시작한 일을 끝까지 해내는 끈기가 있으며, 인내심이 많은 사람입니다.',
          '소통을 중시하지만 서두르지 않는 사람입니다. 대화를 통해 문제를 해결하려 하지만, 관계를 무리하게 발전시키지 않는 사람입니다.',
          '자신의 감정을 잘 조절하는 사람입니다. 감정적 기복이 크지 않으며, 안정적인 성격으로 상대방에게 안심을 주는 사람입니다.',
          '현실적이고 실용적인 타입의 사람입니다. 로맨틱한 것보다는 실용적인 것을 선호하며, 현실적인 계획을 세우는 것을 좋아합니다.',
          '독립적이면서도 상대방을 존중하는 사람입니다. 자신의 공간을 중요하게 생각하지만, 상대방의 의견도 존중하는 사람입니다.',
          '인내심이 많고 이해심이 깊은 사람입니다. 상대방의 감정을 이해하고 공감하며, 서로를 배려하는 마음을 가지고 있습니다.',
          '자신감이 있지만 자만하지 않는 사람입니다. 자신의 능력을 알고 있지만, 그것을 과시하지 않고 겸손한 태도를 유지합니다.',
          '점진적으로 관계를 발전시키는 것을 선호하는 사람입니다. 급한 변화보다는 천천히 발전하는 관계를 좋아하며, 안정성을 중시합니다.'
        ],
        en: [
          'A person with a stable and cautious personality. They do not make hasty decisions but judge carefully, and have a responsible attitude.',
          'A person with balanced and realistic thinking. They value reason over emotion, and view relationships from a practical perspective.',
          'A person who is sincere and makes steady efforts. They have the persistence to carry through what they start, and are very patient.',
          'A person who values communication but doesn\'t rush. They try to solve problems through dialogue, but do not force relationships to develop.',
          'A person who controls their emotions well. They do not have large emotional fluctuations, and are stable people who give reassurance to their partners.',
          'A person with a realistic and practical type. They prefer practical things over romantic ones, and like to make realistic plans.',
          'A person who is independent but respects their partner. They value their own space, but also respect their partner\'s opinions.',
          'A person with great patience and deep understanding. They understand and empathize with their partner\'s emotions, and have a considerate heart.',
          'A person who has confidence but is not arrogant. They know their abilities, but do not show off and maintain a humble attitude.',
          'A person who prefers to develop relationships gradually. They like relationships that develop slowly rather than sudden changes, and value stability.'
        ],
        ja: [
          '安定していて慎重な性格の人です。性急に決定せず慎重に判断し、責任感のある態度を持っています。',
          'バランス感があり、現実的な思考をする人です。感情よりも理性を重視し、実用的な観点から関係を見る人です。',
          '誠実で着実な努力をする人です。一度始めたことを最後までやり遂げる粘り強さがあり、忍耐力の多い人です。',
          'コミュニケーションを重視するが急がない人です。対話を通じて問題を解決しようとしますが、関係を無理に発展させない人です。',
          '自分の感情をよくコントロールする人です。感情的変動が大きくなく、安定した性格で相手に安心を与える人です。',
          '現実的で実用的なタイプの人です。ロマンチックなものよりも実用的なものを好み、現実的な計画を立てることを好みます。',
          '独立しながらも相手を尊重する人です。自分の空間を重要に考えますが、相手の意見も尊重する人です。',
          '忍耐力が多く理解力が深い人です。相手の感情を理解し共感し、お互いに配慮する心を持っています。',
          '自信があるが傲慢ではない人です。自分の能力を知っていますが、それを誇示せず謙虚な態度を維持します。',
          '段階的に関係を発展させることを好む人です。急な変化よりもゆっくり発展する関係を好み、安定性を重視します。'
        ],
        'zh-CN': [
          '稳定且谨慎性格的人。不匆忙决定，谨慎判断，拥有负责任的态度。',
          '拥有平衡感和现实思考的人。重视理性胜过感情，从实用角度看待关系的人。',
          '真诚并持续努力的人。有将开始的事情坚持到底的韧性，是具有很多耐心的人。',
          '重视沟通但不匆忙的人。通过对话试图解决问题，但不会强行发展关系的人。',
          '能够很好地控制自己感情的人。情绪波动不大，是以稳定的性格给对方安心感的人。',
          '现实且实用类型的人。比起浪漫的东西，更喜欢实用的东西，喜欢制定现实的计划。',
          '独立同时也尊重对方的人。重视自己的空间，但也尊重对方意见的人。',
          '有耐心且理解力深厚的人。理解并共情对方的感情，拥有相互关怀的心。',
          '有自信但不傲慢的人。知道自己的能力，但不炫耀并保持谦逊的态度。',
          '喜欢逐渐发展关系的人。比起急剧变化，喜欢慢慢发展的关系，重视稳定性。'
        ],
        'zh-TW': [
          '穩定且謹慎性格的人。不匆忙決定，謹慎判斷，擁有負責任的態度。',
          '擁有平衡感和現實思考的人。重視理性勝過感情，從實用角度看待關係的人。',
          '真誠並持續努力的人。有將開始的事情堅持到底的韌性，是具有很多耐心的人。',
          '重視溝通但不匆忙的人。通過對話試圖解決問題，但不會強行發展關係的人。',
          '能夠很好地控制自己感情的人。情緒波動不大，是以穩定的性格給對方安心感的人。',
          '現實且實用類型的人。比起浪漫的東西，更喜歡實用的東西，喜歡制定現實的計劃。',
          '獨立同時也尊重對方的人。重視自己的空間，但也尊重對方意見的人。',
          '有耐心且理解力深厚的人。理解並共情對方的感情，擁有相互關懷的心。',
          '有自信但不傲慢的人。知道自己的能力，但不炫耀並保持謙遜的態度。',
          '喜歡逐漸發展關係的人。比起急劇變化，喜歡慢慢發展的關係，重視穩定性。'
        ],
        vi: [
          'Một người có tính cách ổn định và thận trọng. Họ không đưa ra quyết định vội vàng mà phán đoán cẩn thận, và có thái độ có trách nhiệm.',
          'Một người có suy nghĩ cân bằng và thực tế. Họ coi trọng lý trí hơn cảm xúc, và là người nhìn các mối quan hệ từ góc độ thực tế.',
          'Một người chân thành và nỗ lực ổn định. Họ có sự kiên trì để hoàn thành những gì đã bắt đầu đến cuối cùng, và là người có nhiều sự kiên nhẫn.',
          'Một người coi trọng giao tiếp nhưng không vội vàng. Họ cố gắng giải quyết vấn đề thông qua đối thoại, nhưng là người không ép buộc các mối quan hệ phát triển.',
          'Một người kiểm soát cảm xúc của mình tốt. Họ không có biến động cảm xúc lớn, và là người có tính cách ổn định mang lại sự yên tâm cho đối tác.',
          'Một người có kiểu thực tế và thực dụng. Họ thích những điều thực tế hơn những điều lãng mạn, và thích lập kế hoạch thực tế.',
          'Một người độc lập nhưng cũng tôn trọng đối tác. Họ coi trọng không gian của chính mình, nhưng cũng tôn trọng ý kiến của đối tác.',
          'Một người có nhiều sự kiên nhẫn và hiểu biết sâu sắc. Họ hiểu và đồng cảm với cảm xúc của đối tác, và có một trái tim chu đáo.',
          'Một người có sự tự tin nhưng không kiêu ngạo. Họ biết khả năng của mình, nhưng không phô trương và duy trì một thái độ khiêm tốn.',
          'Một người thích phát triển các mối quan hệ dần dần. Họ thích các mối quan hệ phát triển chậm hơn là những thay đổi đột ngột, và coi trọng sự ổn định.'
        ],
        id: [
          'Seseorang dengan kepribadian yang stabil dan hati-hati. Mereka tidak membuat keputusan terburu-buru tetapi menilai dengan hati-hati, dan memiliki sikap yang bertanggung jawab.',
          'Seseorang dengan pemikiran yang seimbang dan realistis. Mereka menghargai akal daripada emosi, dan adalah orang yang memandang hubungan dari perspektif praktis.',
          'Seseorang yang tulus dan melakukan upaya yang stabil. Mereka memiliki ketekunan untuk menyelesaikan apa yang telah dimulai sampai akhir, dan adalah orang yang memiliki banyak kesabaran.',
          'Seseorang yang menghargai komunikasi tetapi tidak terburu-buru. Mereka mencoba memecahkan masalah melalui dialog, tetapi adalah orang yang tidak memaksakan hubungan untuk berkembang.',
          'Seseorang yang mengontrol emosi mereka dengan baik. Mereka tidak memiliki fluktuasi emosional yang besar, dan adalah orang yang memiliki kepribadian stabil yang memberikan ketenangan kepada pasangan.',
          'Seseorang dengan tipe yang realistis dan praktis. Mereka lebih suka hal-hal praktis daripada hal-hal romantis, dan suka membuat rencana yang realistis.',
          'Seseorang yang mandiri tetapi juga menghormati pasangan. Mereka menghargai ruang mereka sendiri, tetapi juga menghormati pendapat pasangan.',
          'Seseorang dengan banyak kesabaran dan pemahaman yang mendalam. Mereka memahami dan berempati dengan emosi pasangan, dan memiliki hati yang penuh pertimbangan.',
          'Seseorang yang memiliki kepercayaan diri tetapi tidak sombong. Mereka tahu kemampuan mereka, tetapi tidak pamer dan mempertahankan sikap yang rendah hati.',
          'Seseorang yang lebih suka mengembangkan hubungan secara bertahap. Mereka menyukai hubungan yang berkembang perlahan daripada perubahan mendadak, dan menghargai stabilitas.'
        ]
      },
      warning: {
        get ko() {
          const now = new Date();
          const next2 = getFutureMonthShort(2);
          const next4 = getFutureMonthShort(4);
          const next6 = getFutureMonthShort(6);
          const next8 = getFutureMonthShort(8);
          const next10 = getFutureMonthShort(10);
          return [
            `${next2} 소극적인 태도에 주의하시기 바랍니다. 너무 소극적이면 좋은 기회를 놓칠 수 있으므로, 적절히 적극성을 보이는 것이 중요합니다.`,
            `${next4} 성급한 결정을 경계하시기 바랍니다. 신중함이 좋지만 너무 오래 망설이면 기회를 놓칠 수 있으므로, 적절한 타이밍을 잡는 것이 중요합니다.`,
            `${next6} 과도한 현실주의에 주의하시기 바랍니다. 현실적 사고가 좋지만 때로는 감정도 중요하므로, 균형을 유지하는 것이 필요합니다.`,
            `${next8} 소통 부족에 주의하시기 바랍니다. 너무 신중하거나 소극적이면 상대방이 무시당한다고 느낄 수 있으므로, 적절한 소통이 필요합니다.`,
            `${next10} 자신감 부족에 주의하시기 바랍니다. 좋은 인연을 만나도 자신감이 없으면 관계가 발전하지 않을 수 있으므로, 자신을 믿는 것이 중요합니다.`,
            '포기하지 않는 것이 중요합니다. 어려움이 있어도 포기하지 않고 계속 노력한다면 좋은 결과를 얻을 수 있을 것입니다.',
            '과도한 기대를 경계해야 합니다. 현실적인 기대를 가지고 관계를 발전시키며, 작은 것에도 감사하는 마음을 가지시기 바랍니다.',
            '타인의 의견에 너무 휘둘리지 말아야 합니다. 주변 사람들의 의견도 중요하지만, 자신의 판단과 감정을 존중하는 것이 중요합니다.',
            '변화를 두려워하지 말아야 합니다. 안정적이지만 때로는 변화가 필요하므로, 새로운 시도를 두려워하지 않는 것이 좋습니다.',
            '자신을 너무 낮추지 말아야 합니다. 겸손함은 좋지만 자신감이 없으면 좋은 인연을 만들 수 없으므로, 자신의 가치를 인정하는 것이 중요합니다.'
          ];
        },
        get en() {
          const now = new Date();
          const future2 = new Date(now.getFullYear(), now.getMonth() + 2, 1);
          const future4 = new Date(now.getFullYear(), now.getMonth() + 4, 1);
          const future6 = new Date(now.getFullYear(), now.getMonth() + 6, 1);
          const future8 = new Date(now.getFullYear(), now.getMonth() + 8, 1);
          const future10 = new Date(now.getFullYear(), now.getMonth() + 10, 1);
          
          const getMonthStr = (date: Date) => {
            const monthName = date.toLocaleString('en-US', { month: 'long' });
            if (date.getFullYear() > now.getFullYear()) {
              return `Next ${monthName}`;
            }
            return monthName;
          };
          
          const next2 = getMonthStr(future2);
          const next4 = getMonthStr(future4);
          const next6 = getMonthStr(future6);
          const next8 = getMonthStr(future8);
          const next10 = getMonthStr(future10);
          
          return [
            `Please be careful about passive attitudes in ${next2}. If you are too passive, you may miss good opportunities, so it is important to show appropriate proactivity.`,
            `Please beware of hasty decisions in ${next4}. Caution is good, but if you hesitate too long, you may miss opportunities, so it is important to find the right timing.`,
            `Please be careful about excessive realism in ${next6}. Realistic thinking is good, but sometimes emotions are also important, so it is necessary to maintain balance.`,
            `Please be careful about lack of communication in ${next8}. If you are too cautious or passive, your partner may feel ignored, so appropriate communication is necessary.`,
            `Please be careful about lack of confidence in ${next10}. Even if you meet a good connection, if you lack confidence, the relationship may not develop, so it is important to believe in yourself.`,
            'Not giving up is important. Even if there are difficulties, if you continue to make efforts without giving up, you can achieve good results.',
            'You should beware of excessive expectations. Develop relationships with realistic expectations, and please have a grateful heart even for small things.',
            'You should not be overly swayed by others\' opinions. Others\' opinions are also important, but it is important to respect your own judgment and feelings.',
            'You should not be afraid of change. It is stable, but sometimes change is necessary, so it is good not to be afraid of new attempts.',
            'You should not lower yourself too much. Humility is good, but if you lack confidence, you cannot create good connections, so it is important to recognize your own value.'
          ];
        },
        get ja() {
          const now = new Date();
          const future2 = new Date(now.getFullYear(), now.getMonth() + 2, 1);
          const future4 = new Date(now.getFullYear(), now.getMonth() + 4, 1);
          const future6 = new Date(now.getFullYear(), now.getMonth() + 6, 1);
          const future8 = new Date(now.getFullYear(), now.getMonth() + 8, 1);
          const future10 = new Date(now.getFullYear(), now.getMonth() + 10, 1);
          
          const getMonthStr = (date: Date) => {
            const monthName = date.toLocaleString('ja-JP', { month: 'long' });
            if (date.getFullYear() > now.getFullYear()) {
              return `来年${monthName}`;
            }
            return monthName;
          };
          
          const next2 = getMonthStr(future2);
          const next4 = getMonthStr(future4);
          const next6 = getMonthStr(future6);
          const next8 = getMonthStr(future8);
          const next10 = getMonthStr(future10);
          
          return [
            `${next2}には消極的な態度に注意してください。あまり消極的だと良い機会を逃す可能性があるため、適切に積極性を示すことが重要です。`,
            `${next4}には性急な決定を警戒してください。慎重さは良いですが、あまり長くためらうと機会を逃す可能性があるため、適切なタイミングを掴むことが重要です。`,
            `${next6}には過度な現実主義に注意してください。現実的な思考は良いですが、時には感情も重要であるため、バランスを維持することが必要です。`,
            `${next8}にはコミュニケーション不足に注意してください。あまり慎重すぎたり消極的すぎると、相手が無視されたと感じる可能性があるため、適切なコミュニケーションが必要です。`,
            `${next10}には自信不足に注意してください。良い縁に会っても自信がなければ関係が発展しない可能性があるため、自分を信じることが重要です。`,
            '諦めないことが重要です。困難があっても諦めずに努力を続ければ、良い結果を得ることができるでしょう。',
            '過度な期待を警戒すべきです。現実的な期待を持って関係を発展させ、小さなことにも感謝する心を持ってください。',
            '他人の意見にあまり振り回されないでください。周りの人々の意見も重要ですが、自分の判断と感情を尊重することが重要です。',
            '変化を恐れないでください。安定していますが、時には変化が必要なため、新しい試みを恐れないことが良いです。',
            '自分をあまり低くしないでください。謙虚さは良いですが、自信がなければ良い縁を作ることができないため、自分の価値を認めることが重要です。'
          ];
        },
        get 'zh-CN'() {
          const now = new Date();
          const future2 = new Date(now.getFullYear(), now.getMonth() + 2, 1);
          const future4 = new Date(now.getFullYear(), now.getMonth() + 4, 1);
          const future6 = new Date(now.getFullYear(), now.getMonth() + 6, 1);
          const future8 = new Date(now.getFullYear(), now.getMonth() + 8, 1);
          const future10 = new Date(now.getFullYear(), now.getMonth() + 10, 1);
          
          const getMonthStr = (date: Date) => {
            const monthName = date.toLocaleString('zh-CN', { month: 'long' });
            if (date.getFullYear() > now.getFullYear()) {
              return `明年${monthName}`;
            }
            return `${monthName}`;
          };
          
          const next2 = getMonthStr(future2);
          const next4 = getMonthStr(future4);
          const next6 = getMonthStr(future6);
          const next8 = getMonthStr(future8);
          const next10 = getMonthStr(future10);
          
          return [
            `${next2}请注意消极的态度。如果太消极可能会错过好机会，所以重要的是适当表现出积极性。`,
            `${next4}请警惕草率的决定。谨慎是好的，但如果犹豫太久可能会错过机会，所以抓住合适的时机很重要。`,
            `${next6}请注意过度的现实主义。现实思考是好的，但有时感情也很重要，所以需要保持平衡。`,
            `${next8}请注意缺乏沟通。如果太谨慎或太消极，对方可能会感到被忽视，所以适当的沟通是必要的。`,
            `${next10}请注意缺乏自信。即使遇到好缘分，如果缺乏自信关系可能不会发展，所以相信自己很重要。`,
            '不放弃是重要的。即使有困难，如果不放弃继续努力，可以获得好结果。',
            '应该警惕过度的期望。以现实的期望发展关系，即使对小事也要心存感激。',
            '不应该被别人的意见过度左右。别人的意见也很重要，但尊重自己的判断和感情是重要的。',
            '不应该害怕变化。虽然稳定，但有时变化是必要的，所以不害怕新的尝试是好的。',
            '不应该太贬低自己。谦逊是好的，但如果缺乏自信就无法创造好缘分，所以承认自己的价值是重要的。'
          ];
        },
        get 'zh-TW'() {
          const now = new Date();
          const future2 = new Date(now.getFullYear(), now.getMonth() + 2, 1);
          const future4 = new Date(now.getFullYear(), now.getMonth() + 4, 1);
          const future6 = new Date(now.getFullYear(), now.getMonth() + 6, 1);
          const future8 = new Date(now.getFullYear(), now.getMonth() + 8, 1);
          const future10 = new Date(now.getFullYear(), now.getMonth() + 10, 1);
          
          const getMonthStr = (date: Date) => {
            const monthName = date.toLocaleString('zh-TW', { month: 'long' });
            if (date.getFullYear() > now.getFullYear()) {
              return `明年${monthName}`;
            }
            return `${monthName}`;
          };
          
          const next2 = getMonthStr(future2);
          const next4 = getMonthStr(future4);
          const next6 = getMonthStr(future6);
          const next8 = getMonthStr(future8);
          const next10 = getMonthStr(future10);
          
          return [
            `${next2}請注意消極的態度。如果太消極可能會錯過好機會，所以重要的是適當表現出積極性。`,
            `${next4}請警惕草率的決定。謹慎是好的，但如果猶豫太久可能會錯過機會，所以抓住合適的時機很重要。`,
            `${next6}請注意過度的現實主義。現實思考是好的，但有時感情也很重要，所以需要保持平衡。`,
            `${next8}請注意缺乏溝通。如果太謹慎或太消極，對方可能會感到被忽視，所以適當的溝通是必要的。`,
            `${next10}請注意缺乏自信。即使遇到好緣分，如果缺乏自信關係可能不會發展，所以相信自己很重要。`,
            '不放棄是重要的。即使有困難，如果不放棄繼續努力，可以獲得好結果。',
            '應該警惕過度的期望。以現實的期望發展關係，即使對小事也要心存感激。',
            '不應該被別人的意見過度左右。別人的意見也很重要，但尊重自己的判斷和感情是重要的。',
            '不應該害怕變化。雖然穩定，但有時變化是必要的，所以不害怕新的嘗試是好的。',
            '不應該太貶低自己。謙遜是好的，但如果缺乏自信就無法創造好緣分，所以承認自己的價值是重要的。'
          ];
        },
        get vi() {
          const now = new Date();
          const future2 = new Date(now.getFullYear(), now.getMonth() + 2, 1);
          const future4 = new Date(now.getFullYear(), now.getMonth() + 4, 1);
          const future6 = new Date(now.getFullYear(), now.getMonth() + 6, 1);
          const future8 = new Date(now.getFullYear(), now.getMonth() + 8, 1);
          const future10 = new Date(now.getFullYear(), now.getMonth() + 10, 1);
          
          const getMonthStr = (date: Date) => {
            const monthName = date.toLocaleString('vi-VN', { month: 'long' });
            if (date.getFullYear() > now.getFullYear()) {
              return `Tháng ${date.getMonth() + 1} năm sau`;
            }
            return `Tháng ${monthName}`;
          };
          
          const next2 = getMonthStr(future2);
          const next4 = getMonthStr(future4);
          const next6 = getMonthStr(future6);
          const next8 = getMonthStr(future8);
          const next10 = getMonthStr(future10);
          
          return [
            `Xin hãy cẩn thận với thái độ thụ động trong ${next2}. Nếu bạn quá thụ động, bạn có thể bỏ lỡ những cơ hội tốt, vì vậy điều quan trọng là thể hiện sự chủ động phù hợp.`,
            `Xin hãy cảnh giác với các quyết định vội vàng trong ${next4}. Thận trọng là tốt, nhưng nếu bạn do dự quá lâu, bạn có thể bỏ lỡ cơ hội, vì vậy điều quan trọng là tìm thời điểm thích hợp.`,
            `Xin hãy cẩn thận với chủ nghĩa hiện thực quá mức trong ${next6}. Suy nghĩ thực tế là tốt, nhưng đôi khi cảm xúc cũng quan trọng, vì vậy cần duy trì sự cân bằng.`,
            `Xin hãy cẩn thận về thiếu giao tiếp trong ${next8}. Nếu bạn quá thận trọng hoặc thụ động, đối tác có thể cảm thấy bị bỏ qua, vì vậy giao tiếp phù hợp là cần thiết.`,
            `Xin hãy cẩn thận về thiếu tự tin trong ${next10}. Ngay cả khi bạn gặp một kết nối tốt, nếu thiếu tự tin, mối quan hệ có thể không phát triển, vì vậy điều quan trọng là tin vào chính mình.`,
            'Không bỏ cuộc là quan trọng. Ngay cả khi có khó khăn, nếu bạn tiếp tục nỗ lực không bỏ cuộc, bạn có thể đạt được kết quả tốt.',
            'Bạn nên cảnh giác với những kỳ vọng quá mức. Phát triển các mối quan hệ với những kỳ vọng thực tế, và xin hãy có một tấm lòng biết ơn ngay cả với những điều nhỏ nhặt.',
            'Bạn không nên bị ảnh hưởng quá nhiều bởi ý kiến của người khác. Ý kiến của người khác cũng quan trọng, nhưng điều quan trọng là tôn trọng phán đoán và cảm xúc của chính bạn.',
            'Bạn không nên sợ thay đổi. Nó ổn định, nhưng đôi khi thay đổi là cần thiết, vì vậy tốt là không sợ những thử nghiệm mới.',
            'Bạn không nên hạ thấp bản thân quá mức. Khiêm tốn là tốt, nhưng nếu bạn thiếu tự tin, bạn không thể tạo ra các kết nối tốt, vì vậy điều quan trọng là nhận ra giá trị của chính bạn.'
          ];
        },
        id: [
          'Hati-hati terhadap sikap pasif.',
          'Waspadai keputusan yang tergesa-gesa.',
          'Hati-hati terhadap realisme berlebihan.',
          'Waspadai kurangnya komunikasi.',
          'Hati-hati terhadap kurangnya kepercayaan diri.'
        ]
      }
    }
  },
  {
    id: 4,
    title: {
      ko: '조금 어려운 연애운',
      en: 'Slightly Difficult Love Fortune',
      ja: '少し困難な恋愛運',
      'zh-CN': '稍困难的恋爱运',
      'zh-TW': '稍困難的戀愛運',
      vi: 'Vận Tình Duyên Hơi Khó Khăn',
      id: 'Nasib Cinta Sedikit Sulit'
    },
    description: {
      get ko() {
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth() + 1;
        
        let periodText = '';
        if (currentMonth <= 8) {
          periodText = `${currentYear + 1}년 중반 또는 후반`;
        } else if (currentMonth === 9) {
          periodText = `${currentYear + 1}년 중반 또는 후반`;
        } else if (currentMonth === 10) {
          periodText = `${currentYear + 1}년 후반`;
        } else if (currentMonth === 11) {
          periodText = `${currentYear + 1}년 후반 또는 ${currentYear + 2}년 초`;
        } else {
          periodText = `${currentYear + 2}년 초`;
        }
        
        return [
          `${periodText} 연애운이 다소 어려울 수 있습니다. 하지만 포기하지 않고 노력하면 좋은 변화가 있을 것입니다.`,
          `${periodText} 연애에서 어려움이 있을 수 있지만, 인내심을 가지고 꾸준히 노력한다면 해결할 수 있을 것입니다.`,
          `${periodText} 연애운이 다소 약해질 수 있습니다. 하지만 자신을 먼저 발전시키고 준비하면 더 나은 인연을 만날 수 있습니다.`,
          `${periodText} 연애에서 갈등이나 오해가 생길 수 있습니다. 하지만 솔직한 대화와 배려를 통해 관계를 개선할 수 있을 것입니다.`,
          `${periodText} 연애운이 불안정할 수 있습니다. 하지만 긍정적인 마음가짐을 유지하고 노력한다면 좋은 결과를 얻을 수 있습니다.`,
          `${periodText} 연애에서 시련이 있을 수 있지만, 이것은 성장의 기회입니다. 어려움을 극복하며 더 나은 관계를 만들어 갈 수 있습니다.`,
          `${periodText} 연애운이 주춤할 수 있습니다. 하지만 자신을 믿고 적극적으로 나선다면 새로운 기회를 만들 수 있을 것입니다.`,
          `${periodText} 연애에서 실망이 있을 수 있지만, 이것으로 끝이 아닙니다. 포기하지 않고 계속 노력한다면 더 나은 인연이 올 것입니다.`,
          `${periodText} 연애운이 변덕스러울 수 있습니다. 하지만 인내심을 가지고 천천히 관계를 발전시킨다면 안정적인 인연을 만날 수 있습니다.`,
          `${periodText} 연애에서 어려움이 있지만, 이것은 일시적입니다. 긍정적인 자세와 노력을 통해 어려움을 극복할 수 있을 것입니다.`
        ];
      },
      en: [
        'Your love fortune may be somewhat difficult. However, if you don\'t give up and continue to make efforts, there will be good changes.',
        'There may be difficulties in love, but if you have patience and continue to make efforts, you can overcome them.',
        'Your love fortune may weaken somewhat. However, if you develop and prepare yourself first, you can meet a better connection.',
        'Conflicts or misunderstandings may arise in love. However, through honest communication and care, you can improve the relationship.',
        'Your love fortune may be unstable. However, if you maintain a positive mindset and make efforts, you can achieve good results.',
        'There may be trials in love, but this is an opportunity for growth. You can overcome difficulties and build a better relationship.',
        'Your love fortune may slow down. However, if you believe in yourself and actively step forward, you can create new opportunities.',
        'There may be disappointments in love, but this is not the end. If you don\'t give up and continue to make efforts, a better connection will come.',
        'Your love fortune may be capricious. However, if you develop relationships slowly with patience, you can meet a stable connection.',
        'There are difficulties in love, but this is temporary. You can overcome difficulties with a positive attitude and efforts.'
      ],
      ja: [
        '恋愛運がやや困難かもしれません。しかし、諦めずに努力を続ければ良い変化があるでしょう。',
        '恋愛で困難があるかもしれませんが、忍耐を持って着実に努力すれば解決できるでしょう。',
        '恋愛運がやや弱くなるかもしれません。しかし、まず自分を発展させて準備すれば、より良い縁に会えるでしょう。',
        '恋愛で対立や誤解が生じるかもしれません。しかし、正直な会話と思いやりを通じて関係を改善できるでしょう。',
        '恋愛運が不安定かもしれません。しかし、ポジティブな心構えを維持して努力すれば良い結果を得られるでしょう。',
        '恋愛で試練があるかもしれませんが、これは成長の機会です。困難を克服しながらより良い関係を作ることができます。',
        '恋愛運が停滞するかもしれません。しかし、自分を信じて積極的に臨めば新しい機会を作ることができるでしょう。',
        '恋愛で失望があるかもしれませんが、これで終わりではありません。諦めずに努力を続ければより良い縁が来るでしょう。',
        '恋愛運が気まぐれかもしれません。しかし、忍耐を持ってゆっくり関係を発展させれば安定した縁に会えるでしょう。',
        '恋愛で困難がありますが、これは一時的なものです。ポジティブな姿勢と努力を通じて困難を克服できるでしょう。'
      ],
      'zh-CN': [
        '你的恋爱运可能会有些困难。但如果不放弃并继续努力，会有好的变化。',
        '恋爱中可能会有困难，但如果有耐心并持续努力，可以克服它们。',
        '你的恋爱运可能会有所减弱。但如果先发展并准备好自己，可以遇到更好的缘分。',
        '恋爱中可能会出现冲突或误解。但通过真诚的沟通和关怀，可以改善关系。',
        '你的恋爱运可能不稳定。但如果保持积极的心态并努力，可以获得好的结果。',
        '恋爱中可能会有考验，但这是成长的机会。可以克服困难并建立更好的关系。',
        '你的恋爱运可能会停滞。但如果相信自己并积极行动，可以创造新的机会。',
        '恋爱中可能会有失望，但这并不是结束。如果不放弃并继续努力，更好的缘分会到来。',
        '你的恋爱运可能会反复无常。但如果耐心地慢慢发展关系，可以遇到稳定的缘分。',
        '恋爱中有困难，但这是暂时的。可以通过积极的态度和努力克服困难。'
      ],
      'zh-TW': [
        '你的戀愛運可能會有些困難。但如果不放棄並繼續努力，會有好的變化。',
        '戀愛中可能會有困難，但如果有耐心並持續努力，可以克服它們。',
        '你的戀愛運可能會有所減弱。但如果先發展並準備好自己，可以遇到更好的緣分。',
        '戀愛中可能會出現衝突或誤解。但通過真誠的溝通和關懷，可以改善關係。',
        '你的戀愛運可能不穩定。但如果保持積極的心態並努力，可以獲得好的結果。',
        '戀愛中可能會有考驗，但這是成長的機會。可以克服困難並建立更好的關係。',
        '你的戀愛運可能會停滯。但如果相信自己並積極行動，可以創造新的機會。',
        '戀愛中可能會有失望，但這並不是結束。如果不放棄並繼續努力，更好的緣分會到來。',
        '你的戀愛運可能會反覆無常。但如果耐心地慢慢發展關係，可以遇到穩定的緣分。',
        '戀愛中有困難，但這是暫時的。可以通過積極的態度和努力克服困難。'
      ],
      vi: [
        'Vận tình duyên của bạn có thể hơi khó khăn. Tuy nhiên, nếu bạn không bỏ cuộc và tiếp tục nỗ lực, sẽ có những thay đổi tốt.',
        'Có thể có khó khăn trong tình yêu, nhưng nếu bạn có sự kiên nhẫn và tiếp tục nỗ lực, bạn có thể vượt qua chúng.',
        'Vận tình duyên của bạn có thể yếu đi một chút. Tuy nhiên, nếu bạn phát triển và chuẩn bị bản thân trước, bạn có thể gặp một kết nối tốt hơn.',
        'Xung đột hoặc hiểu lầm có thể nảy sinh trong tình yêu. Tuy nhiên, thông qua giao tiếp trung thực và quan tâm, bạn có thể cải thiện mối quan hệ.',
        'Vận tình duyên của bạn có thể không ổn định. Tuy nhiên, nếu bạn duy trì tư duy tích cực và nỗ lực, bạn có thể đạt được kết quả tốt.',
        'Có thể có thử thách trong tình yêu, nhưng đây là cơ hội để phát triển. Bạn có thể vượt qua khó khăn và xây dựng một mối quan hệ tốt hơn.',
        'Vận tình duyên của bạn có thể chậm lại. Tuy nhiên, nếu bạn tin vào bản thân và tích cực tiến lên, bạn có thể tạo ra những cơ hội mới.',
        'Có thể có sự thất vọng trong tình yêu, nhưng đây không phải là kết thúc. Nếu bạn không bỏ cuộc và tiếp tục nỗ lực, một kết nối tốt hơn sẽ đến.',
        'Vận tình duyên của bạn có thể thất thường. Tuy nhiên, nếu bạn phát triển các mối quan hệ từ từ với sự kiên nhẫn, bạn có thể gặp một kết nối ổn định.',
        'Có khó khăn trong tình yêu, nhưng điều này là tạm thời. Bạn có thể vượt qua khó khăn với thái độ tích cực và nỗ lực.'
      ],
      id: [
        'Nasib cinta Anda mungkin agak sulit. Namun, jika Anda tidak menyerah dan terus berusaha, akan ada perubahan baik.',
        'Mungkin ada kesulitan dalam cinta, tetapi jika Anda memiliki kesabaran dan terus berusaha, Anda dapat mengatasinya.',
        'Nasib cinta Anda mungkin sedikit melemah. Namun, jika Anda mengembangkan dan mempersiapkan diri terlebih dahulu, Anda dapat bertemu koneksi yang lebih baik.',
        'Konflik atau kesalahpahaman mungkin timbul dalam cinta. Namun, melalui komunikasi yang jujur dan kepedulian, Anda dapat meningkatkan hubungan.',
        'Nasib cinta Anda mungkin tidak stabil. Namun, jika Anda mempertahankan pola pikir positif dan berusaha, Anda dapat mencapai hasil yang baik.',
        'Mungkin ada ujian dalam cinta, tetapi ini adalah kesempatan untuk tumbuh. Anda dapat mengatasi kesulitan dan membangun hubungan yang lebih baik.',
        'Nasib cinta Anda mungkin melambat. Namun, jika Anda percaya pada diri sendiri dan secara aktif melangkah maju, Anda dapat menciptakan peluang baru.',
        'Mungkin ada kekecewaan dalam cinta, tetapi ini bukanlah akhirnya. Jika Anda tidak menyerah dan terus berusaha, koneksi yang lebih baik akan datang.',
        'Nasib cinta Anda mungkin berubah-ubah. Namun, jika Anda mengembangkan hubungan perlahan dengan kesabaran, Anda dapat bertemu koneksi yang stabil.',
        'Ada kesulitan dalam cinta, tetapi ini bersifat sementara. Anda dapat mengatasi kesulitan dengan sikap positif dan upaya.'
      ]
    },
    emoji: '💔',
    scoreRange: [60, 69],
    strengths: {
      ko: ['인내심', '회복력', '성장 의지', '긍정적 사고', '노력', '끈기', '유연성', '학습 능력', '적응력', '희망'],
      en: ['Patience', 'Resilience', 'Growth mindset', 'Positive thinking', 'Effort', 'Persistence', 'Flexibility', 'Learning ability', 'Adaptability', 'Hope'],
      ja: ['忍耐', '回復力', '成長意欲', 'ポジティブ思考', '努力', '粘り強さ', '柔軟性', '学習能力', '適応力', '希望'],
      'zh-CN': ['耐心', '恢复力', '成长意愿', '积极思考', '努力', '坚持', '灵活性', '学习能力', '适应力', '希望'],
      'zh-TW': ['耐心', '恢復力', '成長意願', '積極思考', '努力', '堅持', '靈活性', '學習能力', '適應力', '希望'],
      vi: ['Kiên nhẫn', 'Khả năng phục hồi', 'Tư duy phát triển', 'Suy nghĩ tích cực', 'Nỗ lực', 'Sự bền bỉ', 'Linh hoạt', 'Khả năng học hỏi', 'Khả năng thích ứng', 'Hy vọng'],
      id: ['Kesabaran', 'Ketahanan', 'Pola pikir pertumbuhan', 'Berpikir positif', 'Upaya', 'Ketetapan', 'Fleksibilitas', 'Kemampuan belajar', 'Kemampuan beradaptasi', 'Harapan']
    },
    recommendations: {
      ko: ['인내심 유지', '자기개발', '긍정적 자세', '소통 개선', '포기하지 않기', '작은 변화 인정', '스스로에게 친절하기', '서포트 받기', '새로운 경험 시도', '과거 놓아주기'],
      en: ['Maintain patience', 'Self-development', 'Positive attitude', 'Improve communication', 'Don\'t give up', 'Acknowledge small changes', 'Be kind to yourself', 'Accept support', 'Try new experiences', 'Let go of the past'],
      ja: ['忍耐の維持', '自己開発', 'ポジティブな姿勢', 'コミュニケーション改善', '諦めない', '小さな変化を認める', '自分に優しくする', 'サポートを受け入れる', '新しい経験を試す', '過去を手放す'],
      'zh-CN': ['保持耐心', '自我发展', '积极态度', '改善沟通', '不要放弃', '认可小变化', '善待自己', '接受支持', '尝试新体验', '放下过去'],
      'zh-TW': ['保持耐心', '自我發展', '積極態度', '改善溝通', '不要放棄', '認可小變化', '善待自己', '接受支持', '嘗試新體驗', '放下過去'],
      vi: ['Duy trì kiên nhẫn', 'Tự phát triển', 'Thái độ tích cực', 'Cải thiện giao tiếp', 'Đừng bỏ cuộc', 'Thừa nhận những thay đổi nhỏ', 'Tử tế với bản thân', 'Chấp nhận sự hỗ trợ', 'Thử những trải nghiệm mới', 'Buông bỏ quá khứ'],
      id: ['Pertahankan kesabaran', 'Pengembangan diri', 'Sikap positif', 'Tingkatkan komunikasi', 'Jangan menyerah', 'Akui perubahan kecil', 'Bersikap baik pada diri sendiri', 'Terima dukungan', 'Coba pengalaman baru', 'Lepaskan masa lalu']
    },
    personality: {
      ko: [
        '인내심이 강하고 어려움을 극복하는 능력이 있습니다.',
        '긍정적인 사고를 가지고 있어 어려움에서도 희망을 봅니다.',
        '성장하려는 의지가 있어 어려움을 통해 발전할 수 있습니다.',
        '회복력이 있어 실패해도 다시 일어설 수 있습니다.',
        '노력하는 자세를 가지고 있어 계속 발전할 수 있습니다.'
      ],
      en: [
        'You have strong patience and ability to overcome difficulties.',
        'You have positive thinking and see hope even in difficulties.',
        'You have the will to grow and can develop through difficulties.',
        'You have resilience and can stand up again even after failure.',
        'You have an effort-oriented attitude and can continue to develop.'
      ],
      ja: [
        '忍耐が強く、困難を克服する能力があります。',
        'ポジティブな思考を持ち、困難の中でも希望を見ます。',
        '成長しようとする意志があり、困難を通じて発展できます。',
        '回復力があり、失敗しても再び立ち上がることができます。',
        '努力する姿勢を持ち、継続的に発展できます。'
      ],
      'zh-CN': [
        '你有很强的耐心和克服困难的能力。',
        '你有积极的思维，即使在困难中也能看到希望。',
        '你有成长的意愿，可以通过困难来发展。',
        '你有恢复力，即使失败也能重新站起来。',
        '你有努力的态度，可以继续发展。'
      ],
      'zh-TW': [
        '你有很強的耐心和克服困難的能力。',
        '你有積極的思維，即使在困難中也能看到希望。',
        '你有成長的意願，可以通過困難來發展。',
        '你有恢復力，即使失敗也能重新站起來。',
        '你有努力的態度，可以繼續發展。'
      ],
      vi: [
        'Bạn có sự kiên nhẫn mạnh mẽ và khả năng vượt qua khó khăn.',
        'Bạn có suy nghĩ tích cực và thấy hy vọng ngay cả trong khó khăn.',
        'Bạn có ý chí phát triển và có thể phát triển thông qua khó khăn.',
        'Bạn có khả năng phục hồi và có thể đứng dậy lại ngay cả sau thất bại.',
        'Bạn có thái độ nỗ lực và có thể tiếp tục phát triển.'
      ],
      id: [
        'Anda memiliki kesabaran yang kuat dan kemampuan untuk mengatasi kesulitan.',
        'Anda memiliki pemikiran positif dan melihat harapan bahkan dalam kesulitan.',
        'Anda memiliki keinginan untuk tumbuh dan dapat berkembang melalui kesulitan.',
        'Anda memiliki ketahanan dan dapat bangkit kembali bahkan setelah kegagalan.',
        'Anda memiliki sikap yang berorientasi pada upaya dan dapat terus berkembang.'
      ]
    },
    advice: {
      get ko() {
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth() + 1;
        
        let periodText = '';
        if (currentMonth <= 8) {
          periodText = `${currentYear + 1}년 중반 또는 후반`;
        } else if (currentMonth === 9) {
          periodText = `${currentYear + 1}년 중반 또는 후반`;
        } else if (currentMonth === 10) {
          periodText = `${currentYear + 1}년 후반`;
        } else if (currentMonth === 11) {
          periodText = `${currentYear + 1}년 후반 또는 ${currentYear + 2}년 초`;
        } else {
          periodText = `${currentYear + 2}년 초`;
        }
        
        return [
          `${periodText} 포기하지 않는 것이 가장 중요합니다. 어려움이 있어도 인내심을 가지고 계속 노력한다면 좋은 변화가 있을 것입니다.`,
          '자신을 먼저 발전시키는 것에 집중하시기 바랍니다. 좋은 인연을 만나기 위해서는 먼저 자신이 준비되어 있어야 하며, 내면의 성장이 필요합니다.',
          '긍정적인 마음가짐을 유지하시기 바랍니다. 어려움이 있어도 긍정적으로 생각하며, 이것도 좋은 경험이 될 것이라고 믿는 것이 중요합니다.',
          '솔직한 소통을 중시하시기 바랍니다. 오해나 갈등이 있을 때는 솔직하게 대화하며, 서로의 마음을 이해하는 노력이 필요합니다.',
          '작은 것부터 차근차근 시작하시기 바랍니다. 큰 것을 기대하기보다는 작은 변화와 발전을 기뻐하며, 한 걸음씩 나아가는 것이 중요합니다.',
          '인내심을 가지고 천천히 관계를 발전시키시기 바랍니다. 급하게 진행하지 말고 시간을 두며, 자연스러운 흐름을 따르는 것이 좋습니다.',
          '자신을 사랑하고 소중히 여기시기 바랍니다. 다른 사람의 사랑을 받기 전에 먼저 자신을 사랑하며, 자신감을 갖는 것이 중요합니다.',
          '다양한 경험을 쌓아가시기 바랍니다. 새로운 취미나 활동을 통해 자신의 관심사를 넓히고, 이를 통해 새로운 인연의 기회를 만들어보시기 바랍니다.',
          '주변 사람들의 의견도 듣되 자신의 판단을 존중하시기 바랍니다. 타인의 조언도 중요하지만, 자신의 감정과 판단을 무시하지 않는 것이 중요합니다.',
          '변화를 두려워하지 말고 새로운 시도를 해보시기 바랍니다. 안정적인 것만 추구하면 발전이 없으므로, 적절한 변화와 도전은 필요합니다.'
        ];
      },
      get en() {
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth() + 1;
        
        let periodText = '';
        if (currentMonth <= 8) {
          periodText = `Mid to late ${currentYear + 1}`;
        } else if (currentMonth === 9) {
          periodText = `Mid to late ${currentYear + 1}`;
        } else if (currentMonth === 10) {
          periodText = `Late ${currentYear + 1}`;
        } else if (currentMonth === 11) {
          periodText = `Late ${currentYear + 1} or early ${currentYear + 2}`;
        } else {
          periodText = `Early ${currentYear + 2}`;
        }
        
        return [
          `Not giving up is most important in ${periodText}. Even if there are difficulties, if you continue to make efforts with patience, there will be good results.`,
          'Please focus on developing yourself first. To meet good connections, you must first be prepared, and inner growth is necessary.',
          'Please maintain a positive mindset. Even if there are difficulties, think positively, and it is important to believe that this will also be a good experience.',
          'Please value honest communication. When there are misunderstandings or conflicts, have honest conversations, and efforts to understand each other\'s hearts are necessary.',
          'Please start from small things step by step. Rather than expecting big things, rejoice in small changes and developments, and it is important to move forward step by step.',
          'Please develop relationships slowly with patience. Do not proceed hastily, take time, and it is good to follow the natural flow.',
          'Please love and cherish yourself. Before receiving love from others, first love yourself, and it is important to have confidence.',
          'Please build various experiences. Expand your interests through new hobbies or activities, and try to create opportunities for new connections through them.',
          'Please listen to others\' opinions but respect your own judgment. Others\' advice is also important, but it is important not to ignore your own feelings and judgment.',
          'Please do not be afraid of change and try new attempts. If you only pursue stability, there will be no development, so appropriate changes and challenges are necessary.'
        ];
      },
      get ja() {
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth() + 1;
        
        let periodText = '';
        if (currentMonth <= 8) {
          periodText = `${currentYear + 1}年中旬または後半`;
        } else if (currentMonth === 9) {
          periodText = `${currentYear + 1}年中旬または後半`;
        } else if (currentMonth === 10) {
          periodText = `${currentYear + 1}年後半`;
        } else if (currentMonth === 11) {
          periodText = `${currentYear + 1}年後半または${currentYear + 2}年初`;
        } else {
          periodText = `${currentYear + 2}年初`;
        }
        
        return [
          `${periodText}諦めないことが最も重要です。困難があっても忍耐力を持って努力を続ければ、良い変化があるでしょう。`,
          'まず自分を発展させることに集中してください。良い縁に会うためにはまず自分が準備されている必要があり、内面の成長が必要です。',
          'ポジティブな心構えを維持してください。困難があってもポジティブに考え、これも良い経験になると信じることが重要です。',
          '正直なコミュニケーションを重視してください。誤解や対立があるときは正直に対話し、お互いの心を理解する努力が必要です。',
          '小さなことから着実に始めてください。大きなことを期待するよりも、小さな変化と発展を喜び、一歩ずつ前進することが重要です。',
          '忍耐力を持ってゆっくりと関係を発展させてください。急いで進めず、時間をかけ、自然な流れに従うことが良いです。',
          '自分を愛し大切にしてください。他の人の愛を受ける前に、まず自分を愛し、自信を持つことが重要です。',
          '様々な経験を積んでください。新しい趣味や活動を通じて自分の興味を広げ、これを通じて新しい縁の機会を作ってみてください。',
          '周りの人々の意見も聞きますが、自分の判断を尊重してください。他人のアドバイスも重要ですが、自分の感情と判断を無視しないことが重要です。',
          '変化を恐れず、新しい試みをしてみてください。安定したものだけを追求すると発展がないため、適切な変化と挑戦が必要です。'
        ];
      },
      'zh-CN': [
        '不放弃是最重要的。即使有困难，如果继续努力，会有好的变化。',
        '首先专注于发展自己。为了遇到好的缘分，必须先准备好自己。',
        '保持积极的心态。即使有困难，也要积极思考，相信这是好的经历。',
        '重视真诚的沟通。有误解或冲突时，要诚实对话，努力理解彼此。',
        '从小事开始一步一步进行。不要期待大的变化，要珍惜小的进步。',
        '耐心地慢慢发展关系。不要急于求成，要遵循自然的节奏。',
        '爱自己，珍惜自己。在得到别人的爱之前，先要爱自己。',
        '积累各种经验。通过新的爱好或活动扩展兴趣，创造新的机会。',
        '听取他人意见但尊重自己的判断。别人的建议重要，但不要忽视自己的感受。',
        '不要害怕变化，尝试新的尝试。只追求稳定不会有发展，需要适当的变化。'
      ],
      'zh-TW': [
        '不放棄是最重要的。即使有困難，如果繼續努力，會有好的變化。',
        '首先專注於發展自己。為了遇到好的緣分，必須先準備好自己。',
        '保持積極的心態。即使有困難，也要積極思考，相信這是好的經歷。',
        '重視真誠的溝通。有誤解或衝突時，要誠實對話，努力理解彼此。',
        '從小事開始一步一步進行。不要期待大的變化，要珍惜小的進步。',
        '耐心地慢慢發展關係。不要急於求成，要遵循自然的節奏。',
        '愛自己，珍惜自己。在得到別人的愛之前，先要愛自己。',
        '積累各種經驗。通過新的愛好或活動擴展興趣，創造新的機會。',
        '聽取他人意見但尊重自己的判斷。別人的建議重要，但不要忽視自己的感受。',
        '不要害怕變化，嘗試新的嘗試。只追求穩定不會有發展，需要適當的變化。'
      ],
      vi: [
        'Không bỏ cuộc là quan trọng nhất. Ngay cả khi có khó khăn, nếu tiếp tục nỗ lực, sẽ có thay đổi tốt.',
        'Trước tiên hãy tập trung vào việc phát triển bản thân. Để gặp được duyên tốt, bạn phải chuẩn bị sẵn sàng.',
        'Duy trì tư duy tích cực. Ngay cả khi có khó khăn, hãy suy nghĩ tích cực, tin rằng đây là trải nghiệm tốt.',
        'Coi trọng giao tiếp chân thành. Khi có hiểu lầm hoặc xung đột, hãy trò chuyện chân thành, nỗ lực hiểu nhau.',
        'Bắt đầu từ những việc nhỏ một cách từng bước. Đừng mong đợi thay đổi lớn, hãy trân trọng tiến bộ nhỏ.',
        'Phát triển mối quan hệ một cách kiên nhẫn và chậm rãi. Đừng vội vàng, hãy theo nhịp điệu tự nhiên.',
        'Yêu bản thân, trân trọng bản thân. Trước khi nhận được tình yêu từ người khác, hãy yêu bản thân trước.',
        'Tích lũy các kinh nghiệm khác nhau. Mở rộng sở thích qua sở thích hoặc hoạt động mới, tạo cơ hội mới.',
        'Lắng nghe ý kiến của người khác nhưng tôn trọng phán đoán của mình. Lời khuyên của người khác quan trọng, nhưng đừng bỏ qua cảm xúc của mình.',
        'Đừng sợ thay đổi, hãy thử những điều mới. Chỉ theo đuổi sự ổn định sẽ không có phát triển, cần có thay đổi phù hợp.'
      ],
      id: [
        'Tidak menyerah adalah yang paling penting. Meskipun ada kesulitan, jika terus berusaha, akan ada perubahan baik.',
        'Pertama-tama fokus pada pengembangan diri. Untuk bertemu dengan koneksi yang baik, Anda harus siap terlebih dahulu.',
        'Pertahankan pola pikir positif. Meskipun ada kesulitan, berpikirlah positif, percayalah bahwa ini adalah pengalaman yang baik.',
        'Hargai komunikasi yang jujur. Ketika ada kesalahpahaman atau konflik, bicaralah dengan jujur, berusaha memahami satu sama lain.',
        'Mulai dari hal-hal kecil selangkah demi selangkah. Jangan mengharapkan perubahan besar, hargai kemajuan kecil.',
        'Kembangkan hubungan dengan sabar dan perlahan. Jangan terburu-buru, ikuti ritme alami.',
        'Cintai diri sendiri, hargai diri sendiri. Sebelum menerima cinta dari orang lain, cintai diri sendiri terlebih dahulu.',
        'Kumpulkan berbagai pengalaman. Perluas minat melalui hobi atau aktivitas baru, ciptakan peluang baru.',
        'Dengarkan pendapat orang lain tetapi hormati penilaian Anda sendiri. Saran orang lain penting, tetapi jangan abaikan perasaan Anda sendiri.',
        'Jangan takut perubahan, coba hal-hal baru. Hanya mengejar stabilitas tidak akan ada perkembangan, perlu perubahan yang sesuai.'
      ]
    },
    fortune: {
      when: {
        get ko() {
          const now = new Date();
          const currentMonth = now.getMonth() + 1;
          
          let when1, when2, when3, when4;
          
          if (currentMonth <= 8) {
            when1 = getFutureMonthShort(4);
            when2 = getFutureMonthShort(5);
            when3 = getFutureMonthShort(6);
            when4 = getFutureMonthShort(7);
          } else {
            when1 = getFutureMonthShort(4);
            when2 = getFutureMonthShort(5);
            when3 = getFutureMonthShort(6);
            when4 = getFutureMonthShort(7);
          }
          
          return [
            `${when1} 또는 ${when2} 새로운 시작을 할 수 있는 시기입니다. 과거의 어려움을 잊고 새로운 마음으로 시작하며, 긍정적인 변화를 만들어나가시기 바랍니다.`,
            `${when2} 또는 ${when3} 인내심을 가지고 노력한다면 좋은 결과를 얻을 수 있는 시기입니다. 포기하지 않고 계속 노력하면 만족스러운 인연을 만날 수 있을 것입니다.`,
            `${when1} 자신을 먼저 발전시키는 것이 중요한 시기입니다. 새로운 인연을 만나기 전에 자신을 준비하고, 성장한 모습으로 더 나은 인연을 끌어들일 수 있습니다.`,
            `${when3} 또는 ${when4} 점진적으로 좋은 변화가 있을 수 있는 시기입니다. 급하게 진행하지 말고 천천히 관계를 발전시키며, 신뢰를 쌓아가시기 바랍니다.`,
            `${when2} 작은 만남들이 모여 큰 인연으로 발전할 수 있는 시기입니다. 작은 것부터 시작하여 점진적으로 관계를 발전시키며, 인내심을 가지시기 바랍니다.`,
            `${when1} 또는 ${when2} 새로운 관점으로 관계를 바라볼 수 있는 시기입니다. 과거의 경험을 바탕으로 더 나은 관계를 만들어 나갈 수 있습니다.`,
            `${when3} 또는 ${when4} 어려움을 극복하며 관계가 발전할 수 있는 시기입니다. 갈등이나 오해가 있어도 솔직한 대화를 통해 해결할 수 있을 것입니다.`,
            `${when2} 일상 속에서 예상치 못한 만남이 있을 수 있습니다. 평범해 보이는 순간에도 특별한 인연의 씨앗이 숨어 있을 수 있으므로, 주변을 둘러보시기 바랍니다.`,
            `${when1} 또는 ${when3} 자신의 관심사와 취미를 통해 새로운 인연을 만날 수 있는 시기입니다. 공통 관심사를 가진 사람들과 만나며 자연스럽게 인연이 시작될 수 있습니다.`,
            `${when2} 또는 ${when4} 긍정적인 변화가 예상되는 시기입니다. 노력과 인내심을 가지고 계속 전진한다면 만족스러운 결과를 얻을 수 있을 것입니다.`
          ];
        },
        get en() {
          const now = new Date();
          const currentMonth = now.getMonth() + 1;
          const currentYear = now.getFullYear();
          
          let when1, when2, when3, when4;
          
          const future4 = new Date(now.getFullYear(), now.getMonth() + 4, 1);
          const future5 = new Date(now.getFullYear(), now.getMonth() + 5, 1);
          const future6 = new Date(now.getFullYear(), now.getMonth() + 6, 1);
          const future7 = new Date(now.getFullYear(), now.getMonth() + 7, 1);
          
          const getMonthStr = (date: Date) => {
            const monthName = date.toLocaleString('en-US', { month: 'long' });
            if (date.getFullYear() > currentYear) {
              return `Next ${monthName}`;
            }
            return monthName;
          };
          
          when1 = getMonthStr(future4);
          when2 = getMonthStr(future5);
          when3 = getMonthStr(future6);
          when4 = getMonthStr(future7);
          
          return [
            `${when1} or ${when2} is a time when you can make a new start. Forget past difficulties and start with a new heart, and please create positive changes.`,
            `${when2} or ${when3} is a time when you can get good results if you have patience and make efforts. If you continue to make efforts without giving up, you can meet satisfying connections.`,
            `${when1} is an important time to develop yourself first. Before meeting new connections, prepare yourself, and you can attract better connections as a grown person.`,
            `${when3} or ${when4} is a time when gradual good changes may occur. Do not proceed hastily and develop relationships slowly, and please build trust.`,
            `${when2} is a time when small meetings can accumulate and develop into major connections. Start with small things and gradually develop relationships, and have patience.`,
            `${when1} or ${when2} is a time when you can view relationships from a new perspective. Based on past experiences, you can build better relationships.`,
            `${when3} or ${when4} is a time when relationships can develop while overcoming difficulties. Even if there are conflicts or misunderstandings, you can resolve them through honest conversations.`,
            `In ${when2}, there may be unexpected meetings in daily life. Even in seemingly ordinary moments, seeds of special connections may be hidden, so please look around you.`,
            `${when1} or ${when3} is a time when you can meet new connections through your interests and hobbies. Meeting people with common interests can naturally start connections.`,
            `${when2} or ${when4} is a time when positive changes are expected. If you continue to move forward with effort and patience, you can achieve satisfying results.`
          ];
        },
        get ja() {
          const now = new Date();
          const currentMonth = now.getMonth() + 1;
          const currentYear = now.getFullYear();
          
          let when1, when2, when3, when4;
          
          const future4 = new Date(now.getFullYear(), now.getMonth() + 4, 1);
          const future5 = new Date(now.getFullYear(), now.getMonth() + 5, 1);
          const future6 = new Date(now.getFullYear(), now.getMonth() + 6, 1);
          const future7 = new Date(now.getFullYear(), now.getMonth() + 7, 1);
          
          const getMonthStr = (date: Date) => {
            const monthName = date.toLocaleString('ja-JP', { month: 'long' });
            if (date.getFullYear() > currentYear) {
              return `来年${monthName}`;
            }
            return monthName;
          };
          
          when1 = getMonthStr(future4);
          when2 = getMonthStr(future5);
          when3 = getMonthStr(future6);
          when4 = getMonthStr(future7);
          
          return [
            `${when1}または${when2}は新しい始まりをすることができる時期です。過去の困難を忘れ、新しい心で始め、ポジティブな変化を作ってください。`,
            `${when2}または${when3}は忍耐力を持って努力すれば良い結果を得ることができる時期です。諦めずに努力を続ければ、満足のいく縁に会えるでしょう。`,
            `${when1}はまず自分を発展させることが重要な時期です。新しい縁に会う前に自分を準備し、成長した姿でより良い縁を引き寄せることができます。`,
            `${when3}または${when4}は段階的に良い変化があるかもしれない時期です。急いで進めず、ゆっくりと関係を発展させ、信頼を築いてください。`,
            `${when2}は小さな出会いが集まって大きな縁に発展することができる時期です。小さなことから始めて段階的に関係を発展させ、忍耐力を持ってください。`,
            `${when1}または${when2}は新しい視点で関係を見ることができる時期です。過去の経験を基に、より良い関係を作ることができます。`,
            `${when3}または${when4}は困難を克服しながら関係が発展できる時期です。対立や誤解があっても、正直な対話を通じて解決できるでしょう。`,
            `${when2}には日常の中で予想外の出会いがあるかもしれません。平凡に見える瞬間にも特別な縁の種が隠れている可能性があるため、周りを見回してください。`,
            `${when1}または${when3}は自分の興味や趣味を通じて新しい縁に会える時期です。共通の興味を持つ人々と出会い、自然に縁が始まることができます。`,
            `${when2}または${when4}はポジティブな変化が予想される時期です。努力と忍耐力を持って前進し続ければ、満足のいく結果を得ることができるでしょう。`
          ];
        },
        'zh-CN': [
          '你可以开始新的开始。忘记过去的困难，以新的心态开始，创造积极的变化。',
          '如果你有耐心并努力，可以获得好的结果。不放弃并继续努力，可以遇到满意的缘分。',
          '这是首先发展自己的重要时期。在遇到新缘分之前，先准备好自己，以成长的样子吸引更好的缘分。',
          '可能会有渐进的好变化。不要急于求成，慢慢发展关系，建立信任。',
          '小的相遇可以发展成大的缘分。从小事开始，逐步发展关系，保持耐心。',
          '你可以从新的角度看待关系。基于过去的经验，可以建立更好的关系。',
          '在克服困难的同时，关系可以发展。即使有冲突或误解，也可以通过真诚的对话解决。',
          '在日常生活中可能会有意想不到的相遇。即使在看似平凡的时刻，也可能隐藏着特殊缘分的种子。',
          '你可以通过自己的兴趣和爱好遇到新的缘分。与有共同兴趣的人相遇，可以自然地开始缘分。',
          '预计会有积极的变化。如果继续努力和耐心前进，可以获得满意的结果。'
        ],
        'zh-TW': [
          '你可以開始新的開始。忘記過去的困難，以新的心態開始，創造積極的變化。',
          '如果你有耐心並努力，可以獲得好的結果。不放棄並繼續努力，可以遇到滿意的緣分。',
          '這是首先發展自己的重要時期。在遇到新緣分之前，先準備好自己，以成長的樣子吸引更好的緣分。',
          '可能會有漸進的好變化。不要急於求成，慢慢發展關係，建立信任。',
          '小的相遇可以發展成大的緣分。從小事開始，逐步發展關係，保持耐心。',
          '你可以從新的角度看待關係。基於過去的經驗，可以建立更好的關係。',
          '在克服困難的同時，關係可以發展。即使有衝突或誤解，也可以通過真誠的對話解決。',
          '在日常生活中可能會有意想不到的相遇。即使在看似平凡的時刻，也可能隱藏著特殊緣分的種子。',
          '你可以通過自己的興趣和愛好遇到新的緣分。與有共同興趣的人相遇，可以自然地開始緣分。',
          '預計會有積極的變化。如果繼續努力和耐心前進，可以獲得滿意的結果。'
        ],
        vi: [
          'Bạn có thể bắt đầu một khởi đầu mới. Quên đi những khó khăn trong quá khứ, bắt đầu với tâm trí mới, tạo ra những thay đổi tích cực.',
          'Nếu bạn có sự kiên nhẫn và nỗ lực, bạn có thể đạt được kết quả tốt. Không bỏ cuộc và tiếp tục nỗ lực, bạn có thể gặp được duyên tốt.',
          'Đây là thời điểm quan trọng để phát triển bản thân trước. Trước khi gặp duyên mới, hãy chuẩn bị sẵn sàng, thu hút duyên tốt hơn với hình ảnh đã phát triển.',
          'Có thể có những thay đổi tốt dần dần. Đừng vội vàng, phát triển mối quan hệ từ từ, xây dựng niềm tin.',
          'Các cuộc gặp gỡ nhỏ có thể phát triển thành kết nối lớn. Bắt đầu từ những việc nhỏ, phát triển mối quan hệ từng bước, giữ sự kiên nhẫn.',
          'Bạn có thể nhìn mối quan hệ từ góc độ mới. Dựa trên kinh nghiệm quá khứ, bạn có thể xây dựng mối quan hệ tốt hơn.',
          'Trong khi vượt qua khó khăn, mối quan hệ có thể phát triển. Ngay cả khi có xung đột hoặc hiểu lầm, bạn có thể giải quyết thông qua đối thoại chân thành.',
          'Trong cuộc sống hàng ngày có thể có những cuộc gặp gỡ bất ngờ. Ngay cả trong những khoảnh khắc tưởng chừng bình thường, cũng có thể ẩn chứa hạt giống của duyên đặc biệt.',
          'Bạn có thể gặp duyên mới thông qua sở thích và sở thích của mình. Gặp gỡ những người có sở thích chung, duyên có thể bắt đầu một cách tự nhiên.',
          'Dự kiến sẽ có những thay đổi tích cực. Nếu tiếp tục nỗ lực và kiên nhẫn tiến lên, bạn có thể đạt được kết quả hài lòng.'
        ],
        id: [
          'Anda dapat membuat awal baru. Lupakan kesulitan masa lalu, mulai dengan pikiran baru, ciptakan perubahan positif.',
          'Jika Anda memiliki kesabaran dan berusaha, Anda dapat mendapatkan hasil yang baik. Jangan menyerah dan terus berusaha, Anda dapat bertemu dengan koneksi yang memuaskan.',
          'Ini adalah waktu penting untuk mengembangkan diri terlebih dahulu. Sebelum bertemu koneksi baru, siapkan diri Anda, tarik koneksi yang lebih baik dengan citra yang telah berkembang.',
          'Perubahan baik yang bertahap mungkin terjadi. Jangan terburu-buru, kembangkan hubungan perlahan, bangun kepercayaan.',
          'Pertemuan kecil dapat berkembang menjadi koneksi besar. Mulai dari hal-hal kecil, kembangkan hubungan selangkah demi selangkah, pertahankan kesabaran.',
          'Anda dapat melihat hubungan dari perspektif baru. Berdasarkan pengalaman masa lalu, Anda dapat membangun hubungan yang lebih baik.',
          'Sambil mengatasi kesulitan, hubungan dapat berkembang. Bahkan jika ada konflik atau kesalahpahaman, Anda dapat menyelesaikannya melalui dialog yang jujur.',
          'Dalam kehidupan sehari-hari mungkin ada pertemuan yang tak terduga. Bahkan dalam momen yang tampaknya biasa, mungkin tersembunyi benih koneksi khusus.',
          'Anda dapat bertemu koneksi baru melalui minat dan hobi Anda. Bertemu dengan orang-orang yang memiliki minat yang sama, koneksi dapat dimulai secara alami.',
          'Perubahan positif diperkirakan akan terjadi. Jika terus berusaha dan sabar maju, Anda dapat mencapai hasil yang memuaskan.'
        ]
      },
      style: {
        ko: [
          '인내심이 많고 어려움을 극복하는 능력이 있는 사람입니다. 포기하지 않고 계속 노력하며, 어려움을 통해 성장할 수 있는 사람입니다.',
          '긍정적인 사고를 가지고 있어 희망을 잃지 않는 사람입니다. 어려움이 있어도 긍정적으로 생각하며, 좋은 변화가 있을 것이라고 믿는 사람입니다.',
          '성장하려는 의지가 강한 사람입니다. 어려움을 통해 배우고 발전하며, 더 나은 사람이 되기 위해 노력하는 사람입니다.',
          '회복력이 있어 실패해도 다시 일어설 수 있는 사람입니다. 좌절하지 않고 계속 시도하며, 경험을 통해 더 나은 선택을 할 수 있는 사람입니다.',
          '솔직하고 정직한 성격의 사람입니다. 거짓 없이 마음을 열 수 있으며, 진실한 대화를 통해 문제를 해결할 수 있는 사람입니다.',
          '배려심이 있고 이해심이 깊은 사람입니다. 상대방의 감정을 이해하고 공감하며, 서로를 지지할 수 있는 사람입니다.',
          '현실적이면서도 희망적인 사고를 하는 사람입니다. 현실을 직시하면서도 긍정적인 미래를 그리는 사람입니다.',
          '노력하는 자세를 가지고 있어 계속 발전할 수 있는 사람입니다. 포기하지 않고 꾸준히 노력하며, 작은 성공을 쌓아가는 사람입니다.',
          '독립적이면서도 협력할 수 있는 사람입니다. 자신의 공간을 중요하게 생각하지만, 필요할 때 상대방과 협력할 수 있는 사람입니다.',
          '자신을 잘 알고 있는 사람입니다. 자신의 강점과 약점을 알고 있으며, 이를 바탕으로 발전하려고 노력하는 사람입니다.'
        ],
        en: [
          'A person with great patience and ability to overcome difficulties. They continue to make efforts without giving up, and are people who can grow through difficulties.',
          'A person with positive thinking who doesn\'t lose hope. Even if there are difficulties, they think positively and believe that good changes will come.',
          'A person with strong will to grow. They learn and develop through difficulties, and are people who work to become better.',
          'A person with resilience who can stand up again after failure. They do not get discouraged and continue to try, and are people who can make better choices through experience.',
          'A person with an honest and sincere personality. They can open their heart without falsehood, and are people who can solve problems through truthful conversations.',
          'A person with a caring and understanding heart. They understand and empathize with their partner\'s emotions, and are people who can support each other.',
          'A person with realistic yet hopeful thinking. They face reality while drawing a positive future.',
          'A person with an effort-oriented attitude who can continue to develop. They continue to make efforts without giving up, and are people who accumulate small successes.',
          'A person who is independent but can cooperate. They value their own space, but are people who can cooperate with their partner when necessary.',
          'A person who knows themselves well. They know their strengths and weaknesses, and are people who work to develop based on this.'
        ],
        ja: [
          '忍耐力があり、困難を克服する能力がある人です。諦めずに努力を続け、困難を通じて成長できる人です。',
          'ポジティブな思考を持ち、希望を失わない人です。困難があってもポジティブに考え、良い変化があると信じる人です。',
          '成長しようとする意志が強い人です。困難を通じて学び発展し、より良い人になろうと努力する人です。',
          '回復力があり、失敗しても再び立ち上がることができる人です。挫けずに試みを続け、経験を通じてより良い選択ができる人です。',
          '正直で誠実な性格の人です。嘘偽りなく心を開くことができ、真実の対話を通じて問題を解決できる人です。',
          '思いやりがあり、理解力が深い人です。相手の感情を理解し共感し、お互いを支えることができる人です。',
          '現実的でありながら希望的思考をする人です。現実を直視しながらもポジティブな未来を描く人です。',
          '努力する姿勢を持ち、継続的に発展できる人です。諦めずに着実に努力し、小さな成功を積み重ねる人です。',
          '独立しながらも協力できる人です。自分の空間を重要に考えますが、必要に応じて相手と協力できる人です。',
          '自分をよく知っている人です。自分の強みと弱みを知り、これを基に発展しようと努力する人です。'
        ],
        'zh-CN': [
          '有耐心和克服困难能力的人。不放弃并继续努力，可以通过困难成长的人。',
          '有积极思维、不失去希望的人。即使有困难也积极思考，相信会有好变化的人。',
          '有强烈成长意愿的人。通过困难学习和发展，努力成为更好的人。',
          '有恢复力、失败后能重新站起来的人。不气馁继续尝试，通过经验做出更好选择的人。',
          '有诚实和真诚性格的人。可以毫无虚假地敞开心扉，通过真诚对话解决问题的人。',
          '有爱心和理解力的人。理解并同情对方的感受，能够相互支持的人。',
          '现实而充满希望思考的人。面对现实的同时描绘积极未来的人。',
          '有努力态度、能持续发展的人。不放弃持续努力，积累小成功的人。',
          '独立而能合作的人。重视自己的空间，但必要时能与对方合作的人。',
          '了解自己的人。知道自己的优缺点，基于此努力发展的人。'
        ],
        'zh-TW': [
          '有耐心和克服困難能力的人。不放棄並繼續努力，可以通過困難成長的人。',
          '有積極思維、不失去希望的人。即使有困難也積極思考，相信會有好變化的人。',
          '有強烈成長意願的人。通過困難學習和發展，努力成為更好的人。',
          '有恢復力、失敗後能重新站起來的人。不氣餒繼續嘗試，通過經驗做出更好選擇的人。',
          '有誠實和真誠性格的人。可以毫無虛假地敞開心扉，通過真誠對話解決問題的人。',
          '有愛心和理解力的人。理解並同情對方的感受，能夠相互支持的人。',
          '現實而充滿希望思考的人。面對現實的同時描繪積極未來的人。',
          '有努力態度、能持續發展的人。不放棄持續努力，積累小成功的人。',
          '獨立而能合作的人。重視自己的空間，但必要時能與對方合作的人。',
          '了解自己的人。知道自己的優缺點，基於此努力發展的人。'
        ],
        vi: [
          'Một người có sự kiên nhẫn và khả năng vượt qua khó khăn. Không bỏ cuộc và tiếp tục nỗ lực, có thể phát triển thông qua khó khăn.',
          'Một người có suy nghĩ tích cực không mất hy vọng. Ngay cả khi có khó khăn cũng suy nghĩ tích cực, tin rằng sẽ có thay đổi tốt.',
          'Một người có ý chí mạnh mẽ để phát triển. Học hỏi và phát triển thông qua khó khăn, nỗ lực trở thành người tốt hơn.',
          'Một người có khả năng phục hồi có thể đứng dậy lại sau thất bại. Không nản lòng tiếp tục thử, có thể đưa ra lựa chọn tốt hơn thông qua kinh nghiệm.',
          'Một người có tính cách trung thực và chân thành. Có thể mở lòng mà không có sự giả dối, giải quyết vấn đề thông qua đối thoại chân thành.',
          'Một người có tấm lòng quan tâm và hiểu biết. Hiểu và đồng cảm với cảm xúc của đối phương, có thể hỗ trợ lẫn nhau.',
          'Một người có suy nghĩ thực tế nhưng đầy hy vọng. Đối mặt với thực tế đồng thời vẽ nên tương lai tích cực.',
          'Một người có thái độ nỗ lực, có thể phát triển liên tục. Không bỏ cuộc tiếp tục nỗ lực, tích lũy những thành công nhỏ.',
          'Một người độc lập nhưng có thể hợp tác. Coi trọng không gian riêng của mình, nhưng khi cần thiết có thể hợp tác với đối phương.',
          'Một người hiểu rõ bản thân. Biết điểm mạnh và điểm yếu của mình, nỗ lực phát triển dựa trên điều đó.'
        ],
        id: [
          'Seseorang dengan kesabaran dan kemampuan untuk mengatasi kesulitan. Tidak menyerah dan terus berusaha, dapat berkembang melalui kesulitan.',
          'Seseorang dengan pemikiran positif yang tidak kehilangan harapan. Meskipun ada kesulitan tetap berpikir positif, percaya akan ada perubahan baik.',
          'Seseorang dengan keinginan kuat untuk tumbuh. Belajar dan berkembang melalui kesulitan, berusaha menjadi orang yang lebih baik.',
          'Seseorang dengan ketahanan yang dapat bangkit kembali setelah kegagalan. Tidak putus asa terus mencoba, dapat membuat pilihan yang lebih baik melalui pengalaman.',
          'Seseorang dengan kepribadian yang jujur dan tulus. Dapat membuka hati tanpa kepalsuan, menyelesaikan masalah melalui dialog yang jujur.',
          'Seseorang dengan hati yang peduli dan pemahaman. Memahami dan berempati dengan emosi pasangan, dapat saling mendukung.',
          'Seseorang dengan pemikiran realistis namun penuh harapan. Menghadapi kenyataan sambil menggambarkan masa depan yang positif.',
          'Seseorang dengan sikap berusaha yang dapat terus berkembang. Tidak menyerah terus berusaha, mengumpulkan kesuksesan kecil.',
          'Seseorang yang mandiri namun dapat bekerja sama. Menghargai ruang pribadinya, tetapi ketika diperlukan dapat bekerja sama dengan pasangan.',
          'Seseorang yang mengenal dirinya dengan baik. Mengetahui kelebihan dan kekurangan dirinya, berusaha berkembang berdasarkan hal tersebut.'
        ]
      },
      warning: {
        get ko() {
          const now = new Date();
          const next2 = getFutureMonthShort(2);
          const next4 = getFutureMonthShort(4);
          const next6 = getFutureMonthShort(6);
          const next8 = getFutureMonthShort(8);
          const next10 = getFutureMonthShort(10);
          return [
            `${next2} 포기하지 않는 것이 가장 중요합니다. 어려움이 있어도 인내심을 가지고 계속 노력한다면 좋은 결과를 얻을 수 있을 것입니다.`,
            `${next4} 성급한 결정을 경계하시기 바랍니다. 감정에 휘둘리지 말고 이성적으로 판단하며, 신중하게 결정하시기 바랍니다.`,
            `${next6} 과도한 기대를 경계하시기 바랍니다. 현실적인 기대를 가지고 관계를 발전시키며, 작은 것에도 감사하는 마음을 가지시기 바랍니다.`,
            `${next8} 소통 부족에 주의하시기 바랍니다. 대화가 부족하면 오해가 생기고 갈등이 커질 수 있으므로, 정기적으로 서로의 마음을 나누는 시간을 가지시기 바랍니다.`,
            `${next10} 자신감 부족에 주의하시기 바랍니다. 자신을 너무 낮추거나 자신감이 없으면 좋은 인연을 만들 수 없으므로, 자신의 가치를 인정하는 것이 중요합니다.`,
            '과거 상처를 현재 관계에 적용하지 말아야 합니다. 이전 관계에서 받은 상처를 새 관계에 적용하지 말고, 새로운 시작을 하는 마음가짐이 중요합니다.',
            '타인의 의견에 너무 휘둘리지 말아야 합니다. 주변 사람들의 의견도 중요하지만, 자신의 판단과 감정을 존중하는 것이 중요합니다.',
            '변화를 두려워하지 말아야 합니다. 어려움이 있어도 포기하지 않고 새로운 시도를 해보며, 변화를 통해 더 나은 관계를 만들 수 있습니다.',
            '감정에 휘둘리지 말아야 합니다. 중요한 결정은 이성적으로 판단하며, 감정적 기복에 주의하시기 바랍니다.',
            '자기 자신을 먼저 사랑하는 것이 중요합니다. 다른 사람의 사랑을 받기 전에 먼저 자신을 소중히 여기며, 자신감을 갖는 것이 좋은 인연을 만드는 첫걸음입니다.'
          ];
        },
        get en() {
          const now = new Date();
          const future2 = new Date(now.getFullYear(), now.getMonth() + 2, 1);
          const future4 = new Date(now.getFullYear(), now.getMonth() + 4, 1);
          const future6 = new Date(now.getFullYear(), now.getMonth() + 6, 1);
          const future8 = new Date(now.getFullYear(), now.getMonth() + 8, 1);
          const future10 = new Date(now.getFullYear(), now.getMonth() + 10, 1);
          
          const getMonthStr = (date: Date) => {
            const monthName = date.toLocaleString('en-US', { month: 'long' });
            if (date.getFullYear() > now.getFullYear()) {
              return `Next ${monthName}`;
            }
            return monthName;
          };
          
          const next2 = getMonthStr(future2);
          const next4 = getMonthStr(future4);
          const next6 = getMonthStr(future6);
          const next8 = getMonthStr(future8);
          const next10 = getMonthStr(future10);
          
          return [
            `Not giving up is most important in ${next2}. Even if there are difficulties, if you continue to make efforts with patience, you can achieve good results.`,
            `Please beware of hasty decisions in ${next4}. Do not be swayed by emotions, judge rationally, and please make decisions carefully.`,
            `Please beware of excessive expectations in ${next6}. Develop relationships with realistic expectations, and please have a grateful heart even for small things.`,
            `Please be careful about lack of communication in ${next8}. If there is insufficient dialogue, misunderstandings can arise and conflicts can grow, so please take time to share each other\'s hearts regularly.`,
            `Please be careful about lack of confidence in ${next10}. If you lower yourself too much or lack confidence, you cannot create good connections, so it is important to recognize your own value.`,
            'You should not apply past wounds to the current relationship. Do not apply wounds received from previous relationships to new relationships, and it is important to have a mindset of starting fresh.',
            'You should not be overly swayed by others\' opinions. Others\' opinions are also important, but it is important to respect your own judgment and feelings.',
            'You should not be afraid of change. Even if there are difficulties, do not give up and try new attempts, and you can create better relationships through change.',
            'You should not be swayed by emotions. Make important decisions rationally, and please be careful about emotional fluctuations.',
            'It is important to love yourself first. Before receiving love from others, first cherish yourself, and having confidence is the first step to creating good connections.'
          ];
        },
        get ja() {
          const now = new Date();
          const future2 = new Date(now.getFullYear(), now.getMonth() + 2, 1);
          const future4 = new Date(now.getFullYear(), now.getMonth() + 4, 1);
          const future6 = new Date(now.getFullYear(), now.getMonth() + 6, 1);
          const future8 = new Date(now.getFullYear(), now.getMonth() + 8, 1);
          const future10 = new Date(now.getFullYear(), now.getMonth() + 10, 1);
          
          const getMonthStr = (date: Date) => {
            const monthName = date.toLocaleString('ja-JP', { month: 'long' });
            if (date.getFullYear() > now.getFullYear()) {
              return `来年${monthName}`;
            }
            return monthName;
          };
          
          const next2 = getMonthStr(future2);
          const next4 = getMonthStr(future4);
          const next6 = getMonthStr(future6);
          const next8 = getMonthStr(future8);
          const next10 = getMonthStr(future10);
          
          return [
            `${next2}には諦めないことが最も重要です。困難があっても忍耐力を持って努力を続ければ、良い結果を得ることができるでしょう。`,
            `${next4}には性急な決定を警戒してください。感情に振り回されずに理性的に判断し、慎重に決定してください。`,
            `${next6}には過度な期待を警戒してください。現実的な期待を持って関係を発展させ、小さなことにも感謝する心を持ってください。`,
            `${next8}にはコミュニケーション不足に注意してください。対話が不足すると誤解が生じ、対立が大きくなる可能性があるため、定期的にお互いの心を共有する時間を持ってください。`,
            `${next10}には自信不足に注意してください。自分をあまり低くしたり自信がなければ良い縁を作ることができないため、自分の価値を認めることが重要です。`,
            '過去の傷を現在の関係に適用しないでください。以前の関係で受けた傷を新しい関係に適用せず、新しいスタートを切る心構えが重要です。',
            '他人の意見にあまり振り回されないでください。周りの人々の意見も重要ですが、自分の判断と感情を尊重することが重要です。',
            '変化を恐れないでください。困難があっても諦めずに新しい試みをしてみて、変化を通じてより良い関係を作ることができます。',
            '感情に振り回されないでください。重要な決定は理性的に判断し、感情的変動に注意してください。',
            '自分をまず愛することが重要です。他の人の愛を受ける前に、まず自分を大切にし、自信を持つことが良い縁を作る第一歩です。'
          ];
        },
        get 'zh-CN'() {
          const now = new Date();
          const future2 = new Date(now.getFullYear(), now.getMonth() + 2, 1);
          const future4 = new Date(now.getFullYear(), now.getMonth() + 4, 1);
          const future6 = new Date(now.getFullYear(), now.getMonth() + 6, 1);
          const future8 = new Date(now.getFullYear(), now.getMonth() + 8, 1);
          const future10 = new Date(now.getFullYear(), now.getMonth() + 10, 1);
          
          const getMonthStr = (date: Date) => {
            const monthNames = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
            const monthName = monthNames[date.getMonth()];
            if (date.getFullYear() > now.getFullYear()) {
              return `明年${monthName}`;
            }
            return monthName;
          };
          
          const next2 = getMonthStr(future2);
          const next4 = getMonthStr(future4);
          const next6 = getMonthStr(future6);
          const next8 = getMonthStr(future8);
          const next10 = getMonthStr(future10);
          
          return [
            `${next2}不放弃是最重要的。即使有困难，如果继续努力，可以获得好结果。`,
            `${next4}请警惕草率的决定。不要被感情左右，理性判断，谨慎决定。`,
            `${next6}请警惕过度的期望。以现实的期望发展关系，对小事也要心存感激。`,
            `${next8}请注意缺乏沟通。对话不足会产生误解和冲突，请定期互相分享心情。`,
            `${next10}请注意缺乏自信。过于贬低自己或缺乏自信就无法建立好缘分，认识自己的价值很重要。`,
            '不应将过去的伤痛应用到现在的感情中。不要将之前感情中的伤痛带到新的关系中，保持新的开始的心态很重要。',
            '不应过分受他人意见左右。他人的意见也重要，但尊重自己的判断和感受很重要。',
            '不应害怕变化。即使有困难也不要放弃，尝试新的方式，通过变化可以建立更好的关系。',
            '不应被感情左右。重要决定要理性判断，请注意情绪波动。',
            '首先要爱自己。在得到别人的爱之前，先要珍惜自己，拥有自信是建立好缘分的第一步。'
          ];
        },
        get 'zh-TW'() {
          const now = new Date();
          const future2 = new Date(now.getFullYear(), now.getMonth() + 2, 1);
          const future4 = new Date(now.getFullYear(), now.getMonth() + 4, 1);
          const future6 = new Date(now.getFullYear(), now.getMonth() + 6, 1);
          const future8 = new Date(now.getFullYear(), now.getMonth() + 8, 1);
          const future10 = new Date(now.getFullYear(), now.getMonth() + 10, 1);
          
          const getMonthStr = (date: Date) => {
            const monthNames = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
            const monthName = monthNames[date.getMonth()];
            if (date.getFullYear() > now.getFullYear()) {
              return `明年${monthName}`;
            }
            return monthName;
          };
          
          const next2 = getMonthStr(future2);
          const next4 = getMonthStr(future4);
          const next6 = getMonthStr(future6);
          const next8 = getMonthStr(future8);
          const next10 = getMonthStr(future10);
          
          return [
            `${next2}不放棄是最重要的。即使有困難，如果繼續努力，可以獲得好結果。`,
            `${next4}請警惕草率的決定。不要被感情左右，理性判斷，謹慎決定。`,
            `${next6}請警惕過度的期望。以現實的期望發展關係，對小事也要心存感激。`,
            `${next8}請注意缺乏溝通。對話不足會產生誤解和衝突，請定期互相分享心情。`,
            `${next10}請注意缺乏自信。過於貶低自己或缺乏自信就無法建立好緣分，認識自己的價值很重要。`,
            '不應將過去的傷痛應用到現在的感情中。不要將之前感情中的傷痛帶到新的關係中，保持新的開始的心態很重要。',
            '不應過分受他人意見左右。他人的意見也重要，但尊重自己的判斷和感受很重要。',
            '不應害怕變化。即使有困難也不要放棄，嘗試新的方式，通過變化可以建立更好的關係。',
            '不應被感情左右。重要決定要理性判斷，請注意情緒波動。',
            '首先要愛自己。在得到別人的愛之前，先要珍惜自己，擁有自信是建立好緣分的第一步。'
          ];
        },
        get vi() {
          const now = new Date();
          const future2 = new Date(now.getFullYear(), now.getMonth() + 2, 1);
          const future4 = new Date(now.getFullYear(), now.getMonth() + 4, 1);
          const future6 = new Date(now.getFullYear(), now.getMonth() + 6, 1);
          const future8 = new Date(now.getFullYear(), now.getMonth() + 8, 1);
          const future10 = new Date(now.getFullYear(), now.getMonth() + 10, 1);
          
          const getMonthStr = (date: Date) => {
            const monthNames = ['tháng 1', 'tháng 2', 'tháng 3', 'tháng 4', 'tháng 5', 'tháng 6', 'tháng 7', 'tháng 8', 'tháng 9', 'tháng 10', 'tháng 11', 'tháng 12'];
            const monthName = monthNames[date.getMonth()];
            if (date.getFullYear() > now.getFullYear()) {
              return `${monthName} năm sau`;
            }
            return monthName;
          };
          
          const next2 = getMonthStr(future2);
          const next4 = getMonthStr(future4);
          const next6 = getMonthStr(future6);
          const next8 = getMonthStr(future8);
          const next10 = getMonthStr(future10);
          
          return [
            `${next2} không bỏ cuộc là quan trọng nhất. Ngay cả khi có khó khăn, nếu tiếp tục nỗ lực, bạn có thể đạt được kết quả tốt.`,
            `${next4} hãy cảnh giác với các quyết định vội vàng. Đừng để cảm xúc chi phối, hãy phán đoán một cách hợp lý và quyết định thận trọng.`,
            `${next6} hãy cảnh giác với kỳ vọng quá mức. Phát triển mối quan hệ với kỳ vọng thực tế, hãy có lòng biết ơn ngay cả với những điều nhỏ.`,
            `${next8} hãy cẩn thận về thiếu giao tiếp. Nếu thiếu đối thoại sẽ phát sinh hiểu lầm và xung đột, vì vậy hãy dành thời gian thường xuyên chia sẻ tâm tư với nhau.`,
            `${next10} hãy cẩn thận về thiếu tự tin. Nếu bạn tự hạ thấp mình quá mức hoặc thiếu tự tin, bạn không thể tạo được duyên tốt, vì vậy việc nhận ra giá trị của bản thân là quan trọng.`,
            'Bạn không nên áp dụng những vết thương trong quá khứ vào mối quan hệ hiện tại. Đừng áp dụng những vết thương từ các mối quan hệ trước vào mối quan hệ mới, và có tâm trí khởi đầu mới là quan trọng.',
            'Bạn không nên quá để bị ảnh hưởng bởi ý kiến của người khác. Ý kiến của người khác cũng quan trọng, nhưng tôn trọng phán đoán và cảm xúc của chính mình là quan trọng.',
            'Bạn không nên sợ thay đổi. Ngay cả khi có khó khăn cũng đừng bỏ cuộc, hãy thử những cách mới, thông qua thay đổi bạn có thể tạo ra mối quan hệ tốt hơn.',
            'Bạn không nên để cảm xúc chi phối. Các quyết định quan trọng nên được phán đoán một cách hợp lý, và hãy cẩn thận về sự dao động cảm xúc.',
            'Việc yêu bản thân trước tiên là quan trọng. Trước khi nhận được tình yêu từ người khác, hãy quý trọng bản thân trước, và có tự tin là bước đầu tiên để tạo ra duyên tốt.'
          ];
        },
        get id() {
          const now = new Date();
          const future2 = new Date(now.getFullYear(), now.getMonth() + 2, 1);
          const future4 = new Date(now.getFullYear(), now.getMonth() + 4, 1);
          const future6 = new Date(now.getFullYear(), now.getMonth() + 6, 1);
          const future8 = new Date(now.getFullYear(), now.getMonth() + 8, 1);
          const future10 = new Date(now.getFullYear(), now.getMonth() + 10, 1);
          
          const getMonthStr = (date: Date) => {
            const monthNames = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
            const monthName = monthNames[date.getMonth()];
            if (date.getFullYear() > now.getFullYear()) {
              return `${monthName} tahun depan`;
            }
            return monthName;
          };
          
          const next2 = getMonthStr(future2);
          const next4 = getMonthStr(future4);
          const next6 = getMonthStr(future6);
          const next8 = getMonthStr(future8);
          const next10 = getMonthStr(future10);
          
          return [
            `${next2} tidak menyerah adalah yang paling penting. Meskipun ada kesulitan, jika terus berusaha, Anda dapat mencapai hasil yang baik.`,
            `${next4} harap waspada terhadap keputusan yang tergesa-gesa. Jangan terpengaruh emosi, pertimbangkan secara rasional, dan harap putuskan dengan hati-hati.`,
            `${next6} harap waspada terhadap ekspektasi berlebihan. Kembangkan hubungan dengan ekspektasi yang realistis, dan harap memiliki hati yang bersyukur bahkan untuk hal-hal kecil.`,
            `${next8} harap berhati-hati tentang kurangnya komunikasi. Jika dialog tidak cukup, kesalahpahaman dapat timbul dan konflik dapat tumbuh, jadi harap luangkan waktu untuk saling berbagi perasaan secara teratur.`,
            `${next10} harap berhati-hati tentang kurangnya kepercayaan diri. Jika Anda merendahkan diri terlalu rendah atau kurang percaya diri, Anda tidak dapat menciptakan koneksi yang baik, jadi penting untuk mengenali nilai Anda sendiri.`,
            'Anda tidak boleh menerapkan luka masa lalu ke hubungan saat ini. Jangan menerapkan luka yang diterima dari hubungan sebelumnya ke hubungan baru, dan penting untuk memiliki pola pikir memulai yang baru.',
            'Anda tidak boleh terlalu dipengaruhi oleh pendapat orang lain. Pendapat orang lain juga penting, tetapi penting untuk menghormati penilaian dan perasaan Anda sendiri.',
            'Anda tidak boleh takut perubahan. Meskipun ada kesulitan, jangan menyerah dan coba upaya baru, dan Anda dapat menciptakan hubungan yang lebih baik melalui perubahan.',
            'Anda tidak boleh dipengaruhi emosi. Putuskan keputusan penting secara rasional, dan harap berhati-hati tentang fluktuasi emosional.',
            'Penting untuk mencintai diri sendiri terlebih dahulu. Sebelum menerima cinta dari orang lain, hargai diri sendiri terlebih dahulu, dan memiliki kepercayaan diri adalah langkah pertama untuk menciptakan koneksi yang baik.'
          ];
        }
      }
    }
  },
  {
    id: 5,
    title: {
      ko: '어려운 연애운',
      en: 'Difficult Love Fortune',
      ja: '困難な恋愛運',
      'zh-CN': '困难的恋爱运',
      'zh-TW': '困難的戀愛運',
      vi: 'Vận Tình Duyên Khó Khăn',
      id: 'Nasib Cinta Sulit'
    },
    description: {
      get ko() {
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth() + 1;
        
        let periodText = '';
        if (currentMonth <= 7) {
          periodText = `${currentYear + 1}년 후반 또는 ${currentYear + 2}년 초`;
        } else if (currentMonth === 8) {
          periodText = `${currentYear + 1}년 후반 또는 ${currentYear + 2}년 초`;
        } else if (currentMonth === 9) {
          periodText = `${currentYear + 2}년 초`;
        } else if (currentMonth === 10) {
          periodText = `${currentYear + 2}년 초 또는 중반`;
        } else if (currentMonth === 11) {
          periodText = `${currentYear + 2}년 초 또는 중반`;
        } else {
          periodText = `${currentYear + 2}년 중반`;
        }
        
        return [
          `${periodText} 연애운이 매우 어려울 것으로 예상됩니다. 하지만 포기하지 않고 인내심을 가지고 노력한다면 언젠가 좋은 인연을 만날 수 있을 것입니다.`,
          `${periodText} 연애에서 큰 어려움이 있을 수 있습니다. 하지만 이것은 성장의 과정이며, 어려움을 극복하며 더 나은 사람이 될 수 있는 기회입니다.`,
          `${periodText} 연애운이 매우 약할 것으로 보입니다. 하지만 자신을 먼저 발전시키고 준비한다면, 시간이 지난 후 더 나은 인연을 만날 수 있을 것입니다.`,
          `${periodText} 연애에서 많은 시련과 어려움이 예상됩니다. 하지만 포기하지 않고 긍정적인 마음가짐을 유지한다면, 어려움을 극복할 수 있을 것입니다.`,
          `${periodText} 연애운이 매우 불안정할 수 있습니다. 하지만 인내심을 가지고 천천히 자신을 발전시킨다면, 언젠가 좋은 변화가 있을 것입니다.`,
          `${periodText} 연애에서 실망과 좌절이 있을 수 있지만, 이것으로 끝이 아닙니다. 계속 노력하고 자신을 믿는다면 더 나은 미래가 올 것입니다.`,
          `${periodText} 연애운이 많이 주춤할 것으로 예상됩니다. 하지만 포기하지 않고 내면의 성장에 집중한다면, 더 나은 인연을 끌어들일 수 있을 것입니다.`,
          `${periodText} 연애에서 어려움이 계속될 수 있지만, 이것은 일시적입니다. 긍정적인 자세와 지속적인 노력을 통해 어려움을 극복할 수 있습니다.`,
          `${periodText} 연애운이 변덕스럽고 예측하기 어려울 수 있습니다. 하지만 인내심을 가지고 자신을 발전시키며 준비한다면, 좋은 기회가 찾아올 것입니다.`,
          `${periodText} 연애에서 큰 시련이 있을 수 있지만, 이것은 당신을 더 강하게 만들 것입니다. 포기하지 않고 계속 전진한다면 더 나은 인연이 올 것입니다.`
        ];
      },
      en: [
        'Your love fortune is expected to be very difficult. However, if you don\'t give up and continue to make efforts with patience, you can eventually meet a good connection.',
        'There may be great difficulties in love. However, this is a process of growth, and you can become a better person by overcoming difficulties.',
        'Your love fortune appears to be very weak. However, if you develop and prepare yourself first, you can eventually meet a better connection after time passes.',
        'Many trials and difficulties are expected in love. However, if you don\'t give up and maintain a positive mindset, you can overcome difficulties.',
        'Your love fortune may be very unstable. However, if you develop yourself slowly with patience, there will eventually be good changes.',
        'There may be disappointments and frustrations in love, but this is not the end. If you continue to make efforts and believe in yourself, a better future will come.',
        'Your love fortune is expected to slow down significantly. However, if you don\'t give up and focus on inner growth, you can attract a better connection.',
        'Difficulties in love may continue, but this is temporary. You can overcome difficulties with a positive attitude and continuous efforts.',
        'Your love fortune may be capricious and unpredictable. However, if you develop and prepare yourself with patience, good opportunities will come.',
        'There may be great trials in love, but this will make you stronger. If you don\'t give up and continue to move forward, a better connection will come.'
      ],
      ja: [
        '恋愛運が非常に困難になることが予想されます。しかし、諦めずに忍耐を持って努力を続ければ、いつか良い縁に会えるでしょう。',
        '恋愛で大きな困難があるかもしれません。しかし、これは成長の過程であり、困難を克服しながらより良い人になる機会です。',
        '恋愛運が非常に弱いことが見られます。しかし、まず自分を発展させて準備すれば、時間が経った後により良い縁に会えるでしょう。',
        '恋愛で多くの試練と困難が予想されます。しかし、諦めずにポジティブな心構えを維持すれば、困難を克服できるでしょう。',
        '恋愛運が非常に不安定かもしれません。しかし、忍耐を持ってゆっくり自分を発展させれば、いつか良い変化があるでしょう。',
        '恋愛で失望と挫折があるかもしれませんが、これで終わりではありません。努力を続け、自分を信じればより良い未来が来るでしょう。',
        '恋愛運が大きく停滞することが予想されます。しかし、諦めずに内面の成長に集中すれば、より良い縁を引き寄せることができるでしょう。',
        '恋愛での困難が続くかもしれませんが、これは一時的なものです。ポジティブな姿勢と継続的な努力を通じて困難を克服できます。',
        '恋愛運が気まぐれで予測困難かもしれません。しかし、忍耐を持って自分を発展させ準備すれば、良い機会が訪れるでしょう。',
        '恋愛で大きな試練があるかもしれませんが、これはあなたをより強くするでしょう。諦めずに前進を続ければより良い縁が来るでしょう。'
      ],
      'zh-CN': [
        '你的恋爱运预期会非常困难。但如果不放弃并持续耐心努力，最终可以遇到好的缘分。',
        '恋爱中可能会有很大的困难。但这是成长的过程，可以通过克服困难成为更好的人。',
        '你的恋爱运似乎非常弱。但如果先发展和准备好自己，时间过去后最终可以遇到更好的缘分。',
        '预期恋爱中会有许多考验和困难。但如果不放弃并保持积极心态，可以克服困难。',
        '你的恋爱运可能非常不稳定。但如果耐心地慢慢发展自己，最终会有好的变化。',
        '恋爱中可能会有失望和挫折，但这并不是结束。如果继续努力并相信自己，更好的未来会到来。',
        '预期恋爱运会大幅放缓。但如果不放弃并专注于内在成长，可以吸引更好的缘分。',
        '恋爱中的困难可能会继续，但这是暂时的。可以通过积极的态度和持续的努力克服困难。',
        '你的恋爱运可能会反复无常且难以预测。但如果耐心地发展和准备好自己，好机会会到来。',
        '恋爱中可能会有很大的考验，但这会让你变得更强。如果不放弃并继续前进，更好的缘分会到来。'
      ],
      'zh-TW': [
        '你的戀愛運預期會非常困難。但如果不放棄並持續耐心努力，最終可以遇到好的緣分。',
        '戀愛中可能會有很大的困難。但這是成長的過程，可以通過克服困難成為更好的人。',
        '你的戀愛運似乎非常弱。但如果先發展並準備好自己，時間過去後最終可以遇到更好的緣分。',
        '預期戀愛中會有許多考驗和困難。但如果不放棄並保持積極心態，可以克服困難。',
        '你的戀愛運可能非常不穩定。但如果耐心地慢慢發展自己，最終會有好的變化。',
        '戀愛中可能會有失望和挫折，但這並不是結束。如果繼續努力並相信自己，更好的未來會到來。',
        '預期戀愛運會大幅放緩。但如果不放棄並專注於內在成長，可以吸引更好的緣分。',
        '戀愛中的困難可能會繼續，但這是暫時的。可以通過積極的態度和持續的努力克服困難。',
        '你的戀愛運可能會反覆無常且難以預測。但如果耐心地發展並準備好自己，好機會會到來。',
        '戀愛中可能會有很大的考驗，但這會讓你變得更強。如果不放棄並繼續前進，更好的緣分會到來。'
      ],
      vi: [
        'Vận tình duyên của bạn được dự đoán sẽ rất khó khăn. Tuy nhiên, nếu bạn không bỏ cuộc và tiếp tục nỗ lực với sự kiên nhẫn, bạn cuối cùng có thể gặp một kết nối tốt.',
        'Có thể có những khó khăn lớn trong tình yêu. Tuy nhiên, đây là quá trình phát triển, và bạn có thể trở thành một người tốt hơn bằng cách vượt qua khó khăn.',
        'Vận tình duyên của bạn có vẻ rất yếu. Tuy nhiên, nếu bạn phát triển và chuẩn bị bản thân trước, bạn cuối cùng có thể gặp một kết nối tốt hơn sau khi thời gian trôi qua.',
        'Nhiều thử thách và khó khăn được mong đợi trong tình yêu. Tuy nhiên, nếu bạn không bỏ cuộc và duy trì tư duy tích cực, bạn có thể vượt qua khó khăn.',
        'Vận tình duyên của bạn có thể rất không ổn định. Tuy nhiên, nếu bạn phát triển bản thân từ từ với sự kiên nhẫn, cuối cùng sẽ có những thay đổi tốt.',
        'Có thể có sự thất vọng và chán nản trong tình yêu, nhưng đây không phải là kết thúc. Nếu bạn tiếp tục nỗ lực và tin vào bản thân, một tương lai tốt hơn sẽ đến.',
        'Vận tình duyên của bạn được dự đoán sẽ chậm lại đáng kể. Tuy nhiên, nếu bạn không bỏ cuộc và tập trung vào sự phát triển nội tâm, bạn có thể thu hút một kết nối tốt hơn.',
        'Khó khăn trong tình yêu có thể tiếp tục, nhưng điều này là tạm thời. Bạn có thể vượt qua khó khăn với thái độ tích cực và nỗ lực liên tục.',
        'Vận tình duyên của bạn có thể thất thường và khó dự đoán. Tuy nhiên, nếu bạn phát triển và chuẩn bị bản thân với sự kiên nhẫn, những cơ hội tốt sẽ đến.',
        'Có thể có những thử thách lớn trong tình yêu, nhưng điều này sẽ làm cho bạn mạnh mẽ hơn. Nếu bạn không bỏ cuộc và tiếp tục tiến lên, một kết nối tốt hơn sẽ đến.'
      ],
      id: [
        'Nasib cinta Anda diperkirakan akan sangat sulit. Namun, jika Anda tidak menyerah dan terus berusaha dengan kesabaran, Anda pada akhirnya dapat bertemu koneksi yang baik.',
        'Mungkin ada kesulitan besar dalam cinta. Namun, ini adalah proses pertumbuhan, dan Anda dapat menjadi orang yang lebih baik dengan mengatasi kesulitan.',
        'Nasib cinta Anda tampaknya sangat lemah. Namun, jika Anda mengembangkan dan mempersiapkan diri terlebih dahulu, Anda pada akhirnya dapat bertemu koneksi yang lebih baik setelah waktu berlalu.',
        'Banyak ujian dan kesulitan diperkirakan dalam cinta. Namun, jika Anda tidak menyerah dan mempertahankan pola pikir positif, Anda dapat mengatasi kesulitan.',
        'Nasib cinta Anda mungkin sangat tidak stabil. Namun, jika Anda mengembangkan diri perlahan dengan kesabaran, pada akhirnya akan ada perubahan baik.',
        'Mungkin ada kekecewaan dan frustrasi dalam cinta, tetapi ini bukanlah akhirnya. Jika Anda terus berusaha dan percaya pada diri sendiri, masa depan yang lebih baik akan datang.',
        'Nasib cinta Anda diperkirakan akan melambat secara signifikan. Namun, jika Anda tidak menyerah dan fokus pada pertumbuhan batin, Anda dapat menarik koneksi yang lebih baik.',
        'Kesulitan dalam cinta mungkin terus berlanjut, tetapi ini bersifat sementara. Anda dapat mengatasi kesulitan dengan sikap positif dan upaya yang berkelanjutan.',
        'Nasib cinta Anda mungkin berubah-ubah dan tidak dapat diprediksi. Namun, jika Anda mengembangkan dan mempersiapkan diri dengan kesabaran, peluang baik akan datang.',
        'Mungkin ada ujian besar dalam cinta, tetapi ini akan membuat Anda lebih kuat. Jika Anda tidak menyerah dan terus maju, koneksi yang lebih baik akan datang.'
      ]
    },
    emoji: '😢',
    scoreRange: [40, 59],
    strengths: {
      ko: ['인내심', '회복력', '성장 의지', '끈기', '희망', '끈질김', '의지력', '용기', '자기계발', '멘탈 강인함'],
      en: ['Patience', 'Resilience', 'Growth mindset', 'Persistence', 'Hope', 'Tenacity', 'Willpower', 'Courage', 'Self-improvement', 'Mental strength'],
      ja: ['忍耐', '回復力', '成長意欲', '粘り強さ', '希望', '執念', '意志力', '勇気', '自己啓発', 'メンタルの強さ'],
      'zh-CN': ['耐心', '恢复力', '成长意愿', '坚持', '希望', '顽强', '意志力', '勇气', '自我提升', '心理韧性'],
      'zh-TW': ['耐心', '恢復力', '成長意願', '堅持', '希望', '頑強', '意志力', '勇氣', '自我提升', '心理韌性'],
      vi: ['Kiên nhẫn', 'Khả năng phục hồi', 'Tư duy phát triển', 'Sự bền bỉ', 'Hy vọng', 'Sự kiên trì', 'Ý chí', 'Lòng can đảm', 'Tự cải thiện', 'Sức mạnh tinh thần'],
      id: ['Kesabaran', 'Ketahanan', 'Pola pikir pertumbuhan', 'Ketetapan', 'Harapan', 'Ketekunan', 'Kemauan', 'Keberanian', 'Pengembangan diri', 'Kekuatan mental']
    },
    recommendations: {
      ko: ['인내심 강화', '자기개발 집중', '긍정적 사고', '포기하지 않기', '희망 유지', '작은 목표 설정', '일일 긍정 확인', '주변 사람들에게 도움 요청', '명상과 휴식', '미래 비전 상상'],
      en: ['Strengthen patience', 'Focus on self-development', 'Positive thinking', 'Don\'t give up', 'Maintain hope', 'Set small goals', 'Daily positive affirmations', 'Ask for help from those around you', 'Meditation and rest', 'Imagine future vision'],
      ja: ['忍耐の強化', '自己開発に集中', 'ポジティブ思考', '諦めない', '希望を維持', '小さな目標を設定', '毎日のポジティブな肯定', '周りの人に助けを求める', '瞑想と休息', '将来のビジョンを想像する'],
      'zh-CN': ['加强耐心', '专注自我发展', '积极思考', '不要放弃', '保持希望', '设定小目标', '每日积极肯定', '向周围人求助', '冥想和休息', '想象未来愿景'],
      'zh-TW': ['加強耐心', '專注自我發展', '積極思考', '不要放棄', '保持希望', '設定小目標', '每日積極肯定', '向周圍人求助', '冥想和休息', '想像未來願景'],
      vi: ['Tăng cường kiên nhẫn', 'Tập trung vào tự phát triển', 'Suy nghĩ tích cực', 'Đừng bỏ cuộc', 'Duy trì hy vọng', 'Đặt mục tiêu nhỏ', 'Khẳng định tích cực hàng ngày', 'Yêu cầu sự giúp đỡ từ những người xung quanh', 'Thiền định và nghỉ ngơi', 'Tưởng tượng tầm nhìn tương lai'],
      id: ['Perkuat kesabaran', 'Fokus pada pengembangan diri', 'Berpikir positif', 'Jangan menyerah', 'Pertahankan harapan', 'Tetapkan tujuan kecil', 'Afirmasi positif harian', 'Minta bantuan dari orang sekitar', 'Meditasi dan istirahat', 'Bayangkan visi masa depan']
    },
    personality: {
      ko: [
        '인내심이 강하고 포기하지 않는 끈기가 있습니다.',
        '회복력이 있어 어려움을 극복할 수 있는 능력이 있습니다.',
        '성장하려는 의지가 강하여 어려움을 통해 발전할 수 있습니다.',
        '희망을 잃지 않고 긍정적으로 생각하는 능력이 있습니다.',
        '끈기와 의지력이 있어 계속 노력할 수 있는 사람입니다.'
      ],
      en: [
        'You have strong patience and persistence that doesn\'t give up.',
        'You have resilience and ability to overcome difficulties.',
        'You have strong will to grow and can develop through difficulties.',
        'You have ability to maintain hope and think positively.',
        'You are a person with persistence and willpower to continue making efforts.'
      ],
      ja: [
        '忍耐が強く、諦めない粘り強さがあります。',
        '回復力があり、困難を克服する能力があります。',
        '成長しようとする意志が強く、困難を通じて発展できます。',
        '希望を失わず、ポジティブに考える能力があります。',
        '粘り強さと意志力があり、継続的に努力できる人です。'
      ],
      'zh-CN': [
        '你有很强的耐心和永不放弃的坚持。',
        '你有恢复力，能够克服困难的能力。',
        '你有强烈的成长意愿，可以通过困难来发展。',
        '你有不失去希望并积极思考的能力。',
        '你是有坚持和意志力，能够持续努力的人。'
      ],
      'zh-TW': [
        '你有很強的耐心和永不放棄的堅持。',
        '你有恢復力，能夠克服困難的能力。',
        '你有強烈的成長意願，可以通過困難來發展。',
        '你有不失去希望並積極思考的能力。',
        '你是有堅持和意志力，能夠持續努力的人。'
      ],
      vi: [
        'Bạn có sự kiên nhẫn mạnh mẽ và sự bền bỉ không bỏ cuộc.',
        'Bạn có khả năng phục hồi và khả năng vượt qua khó khăn.',
        'Bạn có ý chí mạnh mẽ để phát triển và có thể phát triển thông qua khó khăn.',
        'Bạn có khả năng duy trì hy vọng và suy nghĩ tích cực.',
        'Bạn là người có sự bền bỉ và ý chí để tiếp tục nỗ lực.'
      ],
      id: [
        'Anda memiliki kesabaran yang kuat dan ketetapan yang tidak menyerah.',
        'Anda memiliki ketahanan dan kemampuan untuk mengatasi kesulitan.',
        'Anda memiliki keinginan kuat untuk tumbuh dan dapat berkembang melalui kesulitan.',
        'Anda memiliki kemampuan untuk mempertahankan harapan dan berpikir positif.',
        'Anda adalah orang dengan ketetapan dan kemauan untuk terus berusaha.'
      ]
    },
    advice: {
      get ko() {
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth() + 1;
        
        let periodText = '';
        if (currentMonth <= 7) {
          periodText = `${currentYear + 1}년 후반 또는 ${currentYear + 2}년 초`;
        } else if (currentMonth === 8) {
          periodText = `${currentYear + 1}년 후반 또는 ${currentYear + 2}년 초`;
        } else if (currentMonth === 9) {
          periodText = `${currentYear + 2}년 초`;
        } else if (currentMonth === 10) {
          periodText = `${currentYear + 2}년 초 또는 중반`;
        } else if (currentMonth === 11) {
          periodText = `${currentYear + 2}년 초 또는 중반`;
        } else {
          periodText = `${currentYear + 2}년 중반`;
        }
        
        return [
          `${periodText} 포기하지 않는 것이 가장 중요합니다. 어려움이 계속되어도 인내심을 가지고 꾸준히 노력한다면, 언젠가 좋은 변화가 있을 것입니다.`,
          '자신을 먼저 발전시키는 것에 완전히 집중하시기 바랍니다. 좋은 인연을 만나기 위해서는 먼저 자신이 완전히 준비되어 있어야 하며, 내면의 성장이 필수적입니다.',
          '긍정적인 마음가짐을 항상 유지하시기 바랍니다. 어려움이 있어도 긍정적으로 생각하며, 이것도 나중에 도움이 될 거라고 믿는 것이 매우 중요합니다.',
          '인내심을 더욱 강화하시기 바랍니다. 연애는 시간이 필요한 것이므로, 서두르지 말고 천천히 자신을 발전시키며 준비하는 것이 좋습니다.',
          '다양한 경험을 쌓으며 자신을 찾아가시기 바랍니다. 새로운 취미나 활동을 통해 자신의 관심사와 재능을 발견하고, 이를 바탕으로 자신을 발전시키시기 바랍니다.',
          '과거의 실패나 상처에 집착하지 마시기 바랍니다. 새로운 시작을 하는 마음가짐으로 현재에 집중하며, 미래에 대한 희망을 가지시기 바랍니다.',
          '자신을 사랑하고 소중히 여기는 것이 매우 중요합니다. 다른 사람의 사랑을 받기 전에 먼저 자신을 사랑하며, 자신감을 갖는 것이 가장 중요합니다.',
          '주변 사람들과의 관계를 개선하시기 바랍니다. 가족이나 친구들과의 관계를 통해 소통 능력을 키우고, 이를 통해 더 나은 관계를 만들 수 있습니다.',
          '변화를 두려워하지 말고 적극적으로 새로운 시도를 해보시기 바랍니다. 안전지대에 머물면 발전이 없으므로, 적절한 변화와 도전은 반드시 필요합니다.',
          '희망을 잃지 말고 계속 전진하시기 바랍니다. 어려움이 있어도 포기하지 않고 희망을 가지며, 더 나은 미래를 위해 계속 노력하시기 바랍니다.'
        ];
      },
      get en() {
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth() + 1;
        
        let periodText = '';
        if (currentMonth <= 7) {
          periodText = `Late ${currentYear + 1} or early ${currentYear + 2}`;
        } else if (currentMonth === 8) {
          periodText = `Late ${currentYear + 1} or early ${currentYear + 2}`;
        } else if (currentMonth === 9) {
          periodText = `Early ${currentYear + 2}`;
        } else if (currentMonth === 10) {
          periodText = `Early to mid ${currentYear + 2}`;
        } else if (currentMonth === 11) {
          periodText = `Early to mid ${currentYear + 2}`;
        } else {
          periodText = `Mid ${currentYear + 2}`;
        }
        
        return [
          `Not giving up is most important in ${periodText}. Even if difficulties continue, if you continue to make efforts with patience, there will eventually be good changes.`,
          'Please fully focus on developing yourself first. To meet good connections, you must first be completely prepared, and inner growth is essential.',
          'Please always maintain a positive mindset. Even if there are difficulties, think positively, and it is very important to believe that this will also be helpful later.',
          'Please strengthen patience even more. Love requires time, so do not rush and it is good to slowly develop and prepare yourself.',
          'Please build various experiences while finding yourself. Discover your interests and talents through new hobbies or activities, and develop yourself based on this.',
          'Please do not be obsessed with past failures or wounds. Focus on the present with a mindset of starting fresh, and please have hope for the future.',
          'Loving and cherishing yourself is very important. Before receiving love from others, first love yourself, and having confidence is most important.',
          'Please improve relationships with people around you. Develop communication skills through relationships with family or friends, and you can build better relationships through this.',
          'Please do not be afraid of change and actively try new attempts. If you stay in your comfort zone, there will be no development, so appropriate changes and challenges are definitely necessary.',
          'Please do not lose hope and continue to move forward. Even if there are difficulties, do not give up and maintain hope, and please continue to make efforts for a better future.'
        ];
      },
      get ja() {
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth() + 1;
        
        let periodText = '';
        if (currentMonth <= 7) {
          periodText = `${currentYear + 1}年後半または${currentYear + 2}年初`;
        } else if (currentMonth === 8) {
          periodText = `${currentYear + 1}年後半または${currentYear + 2}年初`;
        } else if (currentMonth === 9) {
          periodText = `${currentYear + 2}年初`;
        } else if (currentMonth === 10) {
          periodText = `${currentYear + 2}年初または中旬`;
        } else if (currentMonth === 11) {
          periodText = `${currentYear + 2}年初または中旬`;
        } else {
          periodText = `${currentYear + 2}年中旬`;
        }
        
        return [
          `${periodText}諦めないことが最も重要です。困難が続いても忍耐力を持って努力を続ければ、いつか良い変化があるでしょう。`,
          'まず自分を発展させることに完全に集中してください。良い縁に会うためにはまず自分が完全に準備されている必要があり、内面の成長が必須です。',
          '常にポジティブな心構えを維持してください。困難があってもポジティブに考え、これも後で役立つと信じることが非常に重要です。',
          '忍耐をさらに強化してください。恋愛には時間が必要なため、急がずにゆっくりと自分を発展させ準備することが良いです。',
          '様々な経験を積みながら自分を見つけてください。新しい趣味や活動を通じて自分の興味と才能を発見し、これを基に自分を発展させてください。',
          '過去の失敗や傷に執着しないでください。新しいスタートを切る心構えで現在に集中し、未来への希望を持ってください。',
          '自分を愛し大切にすることは非常に重要です。他の人の愛を受ける前に、まず自分を愛し、自信を持つことが最も重要です。',
          '周りの人々との関係を改善してください。家族や友人との関係を通じてコミュニケーション能力を発展させ、これを通じてより良い関係を築くことができます。',
          '変化を恐れず、積極的に新しい試みをしてみてください。快適な領域に留まると発展がないため、適切な変化と挑戦は確実に必要です。',
          '希望を失わずに前進を続けてください。困難があっても諦めずに希望を維持し、より良い未来のために努力を続けてください。'
        ];
      },
      get 'zh-CN'() {
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth() + 1;
        
        let periodText = '';
        if (currentMonth <= 7) {
          periodText = `${currentYear + 1}年底或${currentYear + 2}年初`;
        } else if (currentMonth === 8) {
          periodText = `${currentYear + 1}年底或${currentYear + 2}年初`;
        } else if (currentMonth === 9) {
          periodText = `${currentYear + 2}年初`;
        } else if (currentMonth === 10) {
          periodText = `${currentYear + 2}年初或中期`;
        } else if (currentMonth === 11) {
          periodText = `${currentYear + 2}年初或中期`;
        } else {
          periodText = `${currentYear + 2}年中期`;
        }
        
        return [
          `${periodText}不放弃是最重要的。即使困难持续，如果继续耐心努力，最终会有好的变化。`,
          '完全专注于首先发展自己。要遇到好的缘分，必须先完全准备好自己，内在成长是必须的。',
          '始终保持积极的心态。即使有困难也要积极思考，相信这对以后会有帮助，这非常重要。',
          '进一步加强耐心。爱情需要时间，所以不要急于求成，慢慢发展并准备好自己是好的。',
          '积累各种经验的同时找到自己。通过新的爱好或活动发现自己的兴趣和才能，并基于此发展自己。',
          '不要执着于过去的失败或伤痛。以新的开始的心态专注于现在，并对未来抱有希望。',
          '爱自己并珍惜自己非常重要。在得到别人的爱之前，先要爱自己，拥有自信是最重要的。',
          '改善与周围人的关系。通过与家人或朋友的关系发展沟通能力，可以通过此建立更好的关系。',
          '不要害怕变化，积极尝试新的事物。停留在舒适区不会有发展，适当的变化和挑战是必须的。',
          '不要失去希望，继续前进。即使有困难也不要放弃，保持希望，继续为更好的未来努力。'
        ];
      },
      get 'zh-TW'() {
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth() + 1;
        
        let periodText = '';
        if (currentMonth <= 7) {
          periodText = `${currentYear + 1}年底或${currentYear + 2}年初`;
        } else if (currentMonth === 8) {
          periodText = `${currentYear + 1}年底或${currentYear + 2}年初`;
        } else if (currentMonth === 9) {
          periodText = `${currentYear + 2}年初`;
        } else if (currentMonth === 10) {
          periodText = `${currentYear + 2}年初或中期`;
        } else if (currentMonth === 11) {
          periodText = `${currentYear + 2}年初或中期`;
        } else {
          periodText = `${currentYear + 2}年中期`;
        }
        
        return [
          `${periodText}不放棄是最重要的。即使困難持續，如果繼續耐心努力，最終會有好的變化。`,
          '完全專注於首先發展自己。要遇到好的緣分，必須先完全準備好自己，內在成長是必須的。',
          '始終保持積極的心態。即使有困難也要積極思考，相信這對以後會有幫助，這非常重要。',
          '進一步加強耐心。愛情需要時間，所以不要急於求成，慢慢發展並準備好自己是好的。',
          '積累各種經驗的同時找到自己。通過新的愛好或活動發現自己的興趣和才能，並基於此發展自己。',
          '不要執著於過去的失敗或傷痛。以新的開始的心態專注於現在，並對未來抱有希望。',
          '愛自己並珍惜自己非常重要。在得到別人的愛之前，先要愛自己，擁有自信是最重要的。',
          '改善與周圍人的關係。通過與家人或朋友的關係發展溝通能力，可以通過此建立更好的關係。',
          '不要害怕變化，積極嘗試新的事物。停留在舒適區不會有發展，適當的變化和挑戰是必須的。',
          '不要失去希望，繼續前進。即使有困難也不要放棄，保持希望，繼續為更好的未來努力。'
        ];
      },
      get vi() {
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth() + 1;
        
        let periodText = '';
        if (currentMonth <= 7) {
          periodText = `Cuối ${currentYear + 1} hoặc đầu ${currentYear + 2}`;
        } else if (currentMonth === 8) {
          periodText = `Cuối ${currentYear + 1} hoặc đầu ${currentYear + 2}`;
        } else if (currentMonth === 9) {
          periodText = `Đầu ${currentYear + 2}`;
        } else if (currentMonth === 10) {
          periodText = `Đầu đến giữa ${currentYear + 2}`;
        } else if (currentMonth === 11) {
          periodText = `Đầu đến giữa ${currentYear + 2}`;
        } else {
          periodText = `Giữa ${currentYear + 2}`;
        }
        
        return [
          `${periodText} không bỏ cuộc là quan trọng nhất. Ngay cả khi khó khăn tiếp tục, nếu bạn tiếp tục nỗ lực với sự kiên nhẫn, cuối cùng sẽ có những thay đổi tốt.`,
          'Hoàn toàn tập trung vào việc phát triển bản thân trước. Để gặp được duyên tốt, bạn phải chuẩn bị sẵn sàng hoàn toàn trước, sự phát triển nội tâm là điều cần thiết.',
          'Luôn duy trì tư duy tích cực. Ngay cả khi có khó khăn hãy suy nghĩ tích cực, tin rằng điều này sẽ hữu ích sau này, điều này rất quan trọng.',
          'Tăng cường sự kiên nhẫn hơn nữa. Tình yêu cần thời gian, vì vậy đừng vội vàng, phát triển và chuẩn bị bản thân từ từ là tốt.',
          'Xây dựng các trải nghiệm khác nhau trong khi tìm hiểu bản thân. Khám phá sở thích và tài năng của bạn qua sở thích hoặc hoạt động mới, và phát triển bản thân dựa trên điều này.',
          'Đừng ám ảnh về những thất bại hoặc vết thương trong quá khứ. Tập trung vào hiện tại với tâm trí khởi đầu mới, và hãy có hy vọng cho tương lai.',
          'Yêu và trân trọng bản thân là rất quan trọng. Trước khi nhận được tình yêu từ người khác, hãy yêu bản thân trước, và có tự tin là quan trọng nhất.',
          'Cải thiện mối quan hệ với những người xung quanh. Phát triển kỹ năng giao tiếp thông qua mối quan hệ với gia đình hoặc bạn bè, và bạn có thể xây dựng mối quan hệ tốt hơn thông qua điều này.',
          'Đừng sợ thay đổi và tích cực thử những điều mới. Nếu bạn ở trong vùng an toàn của mình, sẽ không có phát triển, vì vậy những thay đổi và thử thách phù hợp là hoàn toàn cần thiết.',
          'Đừng mất hy vọng và tiếp tục tiến lên. Ngay cả khi có khó khăn cũng đừng bỏ cuộc và duy trì hy vọng, và hãy tiếp tục nỗ lực cho một tương lai tốt hơn.'
        ];
      },
      get id() {
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth() + 1;
        
        let periodText = '';
        if (currentMonth <= 7) {
          periodText = `Akhir ${currentYear + 1} atau awal ${currentYear + 2}`;
        } else if (currentMonth === 8) {
          periodText = `Akhir ${currentYear + 1} atau awal ${currentYear + 2}`;
        } else if (currentMonth === 9) {
          periodText = `Awal ${currentYear + 2}`;
        } else if (currentMonth === 10) {
          periodText = `Awal hingga pertengahan ${currentYear + 2}`;
        } else if (currentMonth === 11) {
          periodText = `Awal hingga pertengahan ${currentYear + 2}`;
        } else {
          periodText = `Pertengahan ${currentYear + 2}`;
        }
        
        return [
          `${periodText} tidak menyerah adalah yang paling penting. Meskipun kesulitan terus berlanjut, jika Anda terus berusaha dengan kesabaran, pada akhirnya akan ada perubahan baik.`,
          'Sepenuhnya fokus pada pengembangan diri terlebih dahulu. Untuk bertemu dengan koneksi yang baik, Anda harus siap sepenuhnya terlebih dahulu, pertumbuhan batin sangat penting.',
          'Selalu pertahankan pola pikir positif. Meskipun ada kesulitan, berpikirlah positif, percayalah bahwa ini juga akan membantu di kemudian hari, ini sangat penting.',
          'Perkuat kesabaran bahkan lebih lagi. Cinta membutuhkan waktu, jadi jangan terburu-buru, perlahan-lahan kembangkan dan siapkan diri adalah baik.',
          'Bangun berbagai pengalaman sambil menemukan diri sendiri. Temukan minat dan bakat Anda melalui hobi atau aktivitas baru, dan kembangkan diri berdasarkan hal ini.',
          'Jangan terobsesi dengan kegagalan atau luka masa lalu. Fokus pada sekarang dengan pola pikir memulai yang baru, dan harap memiliki harapan untuk masa depan.',
          'Mencintai dan menghargai diri sendiri sangat penting. Sebelum menerima cinta dari orang lain, cintai diri sendiri terlebih dahulu, dan memiliki kepercayaan diri adalah yang paling penting.',
          'Tingkatkan hubungan dengan orang-orang di sekitar Anda. Kembangkan keterampilan komunikasi melalui hubungan dengan keluarga atau teman, dan Anda dapat membangun hubungan yang lebih baik melalui ini.',
          'Jangan takut perubahan dan aktif mencoba hal-hal baru. Jika Anda tetap dalam zona nyaman Anda, tidak akan ada perkembangan, jadi perubahan dan tantangan yang sesuai pasti diperlukan.',
          'Jangan kehilangan harapan dan terus maju. Meskipun ada kesulitan, jangan menyerah dan pertahankan harapan, dan harap terus berusaha untuk masa depan yang lebih baik.'
        ];
      }
    },
    fortune: {
      when: {
        get ko() {
          const now = new Date();
          const currentMonth = now.getMonth() + 1;
          
          let when1, when2, when3, when4;
          
          if (currentMonth <= 7) {
            when1 = getFutureMonthShort(5);
            when2 = getFutureMonthShort(6);
            when3 = getFutureMonthShort(7);
            when4 = getFutureMonthShort(8);
          } else {
            when1 = getFutureMonthShort(5);
            when2 = getFutureMonthShort(6);
            when3 = getFutureMonthShort(7);
            when4 = getFutureMonthShort(8);
          }
          
          return [
            `${when1} 또는 ${when2} 새로운 시작을 준비하는 시기입니다. 과거의 어려움을 잊고 새로운 마음으로 시작하며, 긍정적인 변화를 만들어가시기 바랍니다.`,
            `${when2} 또는 ${when3} 인내심을 가지고 노력한다면 작은 변화가 있을 수 있는 시기입니다. 포기하지 않고 꾸준히 노력하면 점진적으로 좋은 결과를 얻을 수 있을 것입니다.`,
            `${when1} 자신을 발전시키는 것에 완전히 집중하는 것이 중요한 시기입니다. 새로운 인연을 만나기 전에 자신을 완전히 준비하고, 성장한 모습으로 더 나은 인연을 끌어들일 수 있습니다.`,
            `${when3} 또는 ${when4} 시간이 지나면서 작은 변화가 예상되는 시기입니다. 급하게 진행하지 말고 천천히 자신을 발전시키며, 인내심을 가지고 기다리시기 바랍니다.`,
            `${when2} 작은 만남들이 쌓여 나중에 좋은 인연으로 발전할 수 있는 시기입니다. 작은 것부터 시작하여 점진적으로 관계를 발전시키며, 포기하지 않는 것이 중요합니다.`,
            `${when1} 또는 ${when2} 새로운 관점으로 자신과 관계를 바라볼 수 있는 시기입니다. 과거의 경험을 바탕으로 더 나은 관계를 만들어 나갈 수 있는 기회입니다.`,
            `${when3} 또는 ${when4} 어려움을 극복하며 조금씩 발전할 수 있는 시기입니다. 갈등이나 오해가 있어도 인내심을 가지고 솔직한 대화를 통해 해결할 수 있을 것입니다.`,
            `${when2} 일상 속에서 예상치 못한 작은 만남이 있을 수 있는 시기입니다. 평범해 보이는 순간에도 작은 인연의 씨앗이 숨어 있을 수 있으므로, 주변을 주의 깊게 둘러보시기 바랍니다.`,
            `${when1} 또는 ${when3} 자신의 관심사와 취미를 통해 새로운 사람들을 만날 수 있는 시기입니다. 공통 관심사를 가진 사람들과 만나며 자연스럽게 인연이 시작될 수 있습니다.`,
            `${when2} 또는 ${when4} 긍정적인 변화가 예상되는 시기입니다. 포기하지 않고 계속 노력하며 인내심을 가지고 전진한다면, 점진적으로 만족스러운 결과를 얻을 수 있을 것입니다.`
          ];
        },
        get en() {
          const now = new Date();
          const currentMonth = now.getMonth() + 1;
          const currentYear = now.getFullYear();
          
          let when1, when2, when3, when4;
          
          const future5 = new Date(now.getFullYear(), now.getMonth() + 5, 1);
          const future6 = new Date(now.getFullYear(), now.getMonth() + 6, 1);
          const future7 = new Date(now.getFullYear(), now.getMonth() + 7, 1);
          const future8 = new Date(now.getFullYear(), now.getMonth() + 8, 1);
          
          const getMonthStr = (date: Date) => {
            const monthName = date.toLocaleString('en-US', { month: 'long' });
            if (date.getFullYear() > currentYear) {
              return `Next ${monthName}`;
            }
            return monthName;
          };
          
          when1 = getMonthStr(future5);
          when2 = getMonthStr(future6);
          when3 = getMonthStr(future7);
          when4 = getMonthStr(future8);
          
          return [
            `${when1} or ${when2} is a time when you can prepare for a new start. Forget past difficulties and start with a new heart, and please create positive changes.`,
            `${when2} or ${when3} is a time when there may be small changes if you have patience and make efforts. If you continue to make efforts without giving up, you can gradually achieve good results.`,
            `${when1} is an important time to fully focus on developing yourself. Before meeting new connections, completely prepare yourself, and you can attract better connections as a grown person.`,
            `${when3} or ${when4} is a time when small changes may be expected over time. Do not proceed hastily and slowly develop yourself, and please wait with patience.`,
            `${when2} is a time when small meetings can accumulate and develop into good connections later. Start with small things and gradually develop relationships, and not giving up is important.`,
            `${when1} or ${when2} is a time when you can view yourself and relationships from a new perspective. It is an opportunity to build better relationships based on past experiences.`,
            `${when3} or ${when4} is a time when you can develop little by little while overcoming difficulties. Even if there are conflicts or misunderstandings, you can resolve them through patient and honest conversations.`,
            `In ${when2}, there may be unexpected small meetings in daily life. Even in seemingly ordinary moments, seeds of small connections may be hidden, so please look around you carefully.`,
            `${when1} or ${when3} is a time when you can meet new people through your interests and hobbies. Meeting people with common interests can naturally start connections.`,
            `${when2} or ${when4} is a time when positive changes are expected. If you continue to make efforts without giving up and move forward with patience, you can gradually achieve satisfying results.`
          ];
        },
        get ja() {
          const now = new Date();
          const currentMonth = now.getMonth() + 1;
          const currentYear = now.getFullYear();
          
          let when1, when2, when3, when4;
          
          const future5 = new Date(now.getFullYear(), now.getMonth() + 5, 1);
          const future6 = new Date(now.getFullYear(), now.getMonth() + 6, 1);
          const future7 = new Date(now.getFullYear(), now.getMonth() + 7, 1);
          const future8 = new Date(now.getFullYear(), now.getMonth() + 8, 1);
          
          const getMonthStr = (date: Date) => {
            const monthName = date.toLocaleString('ja-JP', { month: 'long' });
            if (date.getFullYear() > currentYear) {
              return `来年${monthName}`;
            }
            return monthName;
          };
          
          when1 = getMonthStr(future5);
          when2 = getMonthStr(future6);
          when3 = getMonthStr(future7);
          when4 = getMonthStr(future8);
          
          return [
            `${when1}または${when2}は新しい始まりを準備することができる時期です。過去の困難を忘れ、新しい心で始め、ポジティブな変化を作ってください。`,
            `${when2}または${when3}は忍耐力を持って努力すれば小さな変化があるかもしれない時期です。諦めずに着実に努力すれば、段階的に良い結果を得られるでしょう。`,
            `${when1}は自分を発展させることに完全に集中することが重要な時期です。新しい縁に会う前に自分を完全に準備し、成長した姿でより良い縁を引き寄せることができます。`,
            `${when3}または${when4}は時間が経つにつれて小さな変化が予想される時期です。急いで進めず、ゆっくりと自分を発展させ、忍耐力を持って待ってください。`,
            `${when2}は小さな出会いが積み重なって後で良い縁に発展することができる時期です。小さなことから始めて段階的に関係を発展させ、諦めないことが重要です。`,
            `${when1}または${when2}は新しい視点で自分と関係を見ることができる時期です。過去の経験を基に、より良い関係を作ることができる機会です。`,
            `${when3}または${when4}は困難を克服しながら少しずつ発展できる時期です。対立や誤解があっても、忍耐力を持って正直な対話を通じて解決できるでしょう。`,
            `${when2}には日常の中で予想外の小さな出会いがあるかもしれません。平凡に見える瞬間にも小さな縁の種が隠れている可能性があるため、周りを注意深く見回してください。`,
            `${when1}または${when3}は自分の興味や趣味を通じて新しい人々に会える時期です。共通の興味を持つ人々と出会い、自然に縁が始まることができます。`,
            `${when2}または${when4}はポジティブな変化が予想される時期です。諦めずに努力を続け、忍耐力を持って前進すれば、段階的に満足のいく結果を得られるでしょう。`
          ];
        },
        get 'zh-CN'() {
          const now = new Date();
          const currentMonth = now.getMonth() + 1;
          const currentYear = now.getFullYear();
          
          let when1, when2, when3, when4;
          
          const future5 = new Date(now.getFullYear(), now.getMonth() + 5, 1);
          const future6 = new Date(now.getFullYear(), now.getMonth() + 6, 1);
          const future7 = new Date(now.getFullYear(), now.getMonth() + 7, 1);
          const future8 = new Date(now.getFullYear(), now.getMonth() + 8, 1);
          
          const getMonthStr = (date: Date) => {
            const monthNames = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
            const monthName = monthNames[date.getMonth()];
            if (date.getFullYear() > currentYear) {
              return `明年${monthName}`;
            }
            return monthName;
          };
          
          when1 = getMonthStr(future5);
          when2 = getMonthStr(future6);
          when3 = getMonthStr(future7);
          when4 = getMonthStr(future8);
          
          return [
            `${when1}或${when2}是准备新开始的时期。忘记过去的困难，以新的心态开始，创造积极的变化。`,
            `${when2}或${when3}如果有耐心并努力，可能会有小的变化。不放弃并持续努力，可以逐步获得好结果。`,
            `${when1}是完全专注于发展自己的重要时期。在遇到新缘分之前，先完全准备好自己，以成长的样子吸引更好的缘分。`,
            `${when3}或${when4}随着时间的推移，可能会预期有小的变化。不要急于求成，慢慢发展自己，耐心等待。`,
            `${when2}小的相遇可以累积，后来可以发展成好的缘分。从小事开始，逐步发展关系，不放弃很重要。`,
            `${when1}或${when2}可以从新的角度看待自己和关系。基于过去的经验，可以建立更好的关系。`,
            `${when3}或${when4}可以在克服困难的同时逐步发展。即使有冲突或误解，也可以通过耐心和真诚的对话解决。`,
            `${when2}在日常生活中可能会有意想不到的小相遇。即使在看似平凡的时刻，也可能隐藏着小缘分的种子。`,
            `${when1}或${when3}可以通过自己的兴趣和爱好遇到新的人。与有共同兴趣的人相遇，可以自然地开始缘分。`,
            `${when2}或${when4}预期会有积极的变化。不放弃继续努力，耐心前进，可以逐步获得满意的结果。`
          ];
        },
        get 'zh-TW'() {
          const now = new Date();
          const currentMonth = now.getMonth() + 1;
          const currentYear = now.getFullYear();
          
          let when1, when2, when3, when4;
          
          const future5 = new Date(now.getFullYear(), now.getMonth() + 5, 1);
          const future6 = new Date(now.getFullYear(), now.getMonth() + 6, 1);
          const future7 = new Date(now.getFullYear(), now.getMonth() + 7, 1);
          const future8 = new Date(now.getFullYear(), now.getMonth() + 8, 1);
          
          const getMonthStr = (date: Date) => {
            const monthNames = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
            const monthName = monthNames[date.getMonth()];
            if (date.getFullYear() > currentYear) {
              return `明年${monthName}`;
            }
            return monthName;
          };
          
          when1 = getMonthStr(future5);
          when2 = getMonthStr(future6);
          when3 = getMonthStr(future7);
          when4 = getMonthStr(future8);
          
          return [
            `${when1}或${when2}是準備新開始的時期。忘記過去的困難，以新的心態開始，創造積極的變化。`,
            `${when2}或${when3}如果有耐心並努力，可能會有小的變化。不放棄並持續努力，可以逐步獲得好結果。`,
            `${when1}是完全專注於發展自己的重要時期。在遇到新緣分之前，先完全準備好自己，以成長的樣子吸引更好的緣分。`,
            `${when3}或${when4}隨著時間的推移，可能會預期有小的變化。不要急於求成，慢慢發展自己，耐心等待。`,
            `${when2}小的相遇可以累積，後來可以發展成好的緣分。從小事開始，逐步發展關係，不放棄很重要。`,
            `${when1}或${when2}可以從新的角度看待自己和關係。基於過去的經驗，可以建立更好的關係。`,
            `${when3}或${when4}可以在克服困難的同時逐步發展。即使有衝突或誤解，也可以通過耐心和真誠的對話解決。`,
            `${when2}在日常生活中可能會有意想不到的小相遇。即使在看似平凡的時刻，也可能隱藏著小緣分的種子。`,
            `${when1}或${when3}可以通過自己的興趣和愛好遇到新的人。與有共同興趣的人相遇，可以自然地開始緣分。`,
            `${when2}或${when4}預計會有積極的變化。不放棄繼續努力，耐心前進，可以逐步獲得滿意的結果。`
          ];
        },
        get vi() {
          const now = new Date();
          const currentMonth = now.getMonth() + 1;
          const currentYear = now.getFullYear();
          
          let when1, when2, when3, when4;
          
          const future5 = new Date(now.getFullYear(), now.getMonth() + 5, 1);
          const future6 = new Date(now.getFullYear(), now.getMonth() + 6, 1);
          const future7 = new Date(now.getFullYear(), now.getMonth() + 7, 1);
          const future8 = new Date(now.getFullYear(), now.getMonth() + 8, 1);
          
          const getMonthStr = (date: Date) => {
            const monthNames = ['tháng 1', 'tháng 2', 'tháng 3', 'tháng 4', 'tháng 5', 'tháng 6', 'tháng 7', 'tháng 8', 'tháng 9', 'tháng 10', 'tháng 11', 'tháng 12'];
            const monthName = monthNames[date.getMonth()];
            if (date.getFullYear() > currentYear) {
              return `${monthName} năm sau`;
            }
            return monthName;
          };
          
          when1 = getMonthStr(future5);
          when2 = getMonthStr(future6);
          when3 = getMonthStr(future7);
          when4 = getMonthStr(future8);
          
          return [
            `${when1} hoặc ${when2} là thời điểm có thể chuẩn bị cho một khởi đầu mới. Quên đi những khó khăn trong quá khứ, bắt đầu với tâm trí mới, tạo ra những thay đổi tích cực.`,
            `${when2} hoặc ${when3} là thời điểm có thể có những thay đổi nhỏ nếu bạn có sự kiên nhẫn và nỗ lực. Nếu không bỏ cuộc và tiếp tục nỗ lực, bạn có thể dần dần đạt được kết quả tốt.`,
            `${when1} là thời điểm quan trọng để hoàn toàn tập trung vào việc phát triển bản thân. Trước khi gặp duyên mới, hãy chuẩn bị hoàn toàn sẵn sàng, và bạn có thể thu hút duyên tốt hơn với hình ảnh đã phát triển.`,
            `${when3} hoặc ${when4} là thời điểm có thể mong đợi những thay đổi nhỏ theo thời gian. Đừng vội vàng, phát triển bản thân từ từ, và hãy kiên nhẫn chờ đợi.`,
            `${when2} là thời điểm các cuộc gặp gỡ nhỏ có thể tích lũy và phát triển thành duyên tốt sau này. Bắt đầu từ những việc nhỏ và dần dần phát triển mối quan hệ, không bỏ cuộc là quan trọng.`,
            `${when1} hoặc ${when2} là thời điểm bạn có thể nhìn bản thân và mối quan hệ từ góc độ mới. Đây là cơ hội để xây dựng mối quan hệ tốt hơn dựa trên kinh nghiệm quá khứ.`,
            `${when3} hoặc ${when4} là thời điểm bạn có thể phát triển từng chút một trong khi vượt qua khó khăn. Ngay cả khi có xung đột hoặc hiểu lầm, bạn có thể giải quyết thông qua đối thoại kiên nhẫn và chân thành.`,
            `Trong ${when2}, có thể có những cuộc gặp gỡ nhỏ bất ngờ trong cuộc sống hàng ngày. Ngay cả trong những khoảnh khắc tưởng chừng bình thường, cũng có thể ẩn chứa hạt giống của duyên nhỏ.`,
            `${when1} hoặc ${when3} là thời điểm bạn có thể gặp những người mới qua sở thích và sở thích của mình. Gặp gỡ những người có sở thích chung có thể tự nhiên bắt đầu duyên.`,
            `${when2} hoặc ${when4} là thời điểm có thể mong đợi những thay đổi tích cực. Nếu tiếp tục nỗ lực không bỏ cuộc và tiến lên với sự kiên nhẫn, bạn có thể dần dần đạt được kết quả hài lòng.`
          ];
        },
        get id() {
          const now = new Date();
          const currentMonth = now.getMonth() + 1;
          const currentYear = now.getFullYear();
          
          let when1, when2, when3, when4;
          
          const future5 = new Date(now.getFullYear(), now.getMonth() + 5, 1);
          const future6 = new Date(now.getFullYear(), now.getMonth() + 6, 1);
          const future7 = new Date(now.getFullYear(), now.getMonth() + 7, 1);
          const future8 = new Date(now.getFullYear(), now.getMonth() + 8, 1);
          
          const getMonthStr = (date: Date) => {
            const monthNames = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
            const monthName = monthNames[date.getMonth()];
            if (date.getFullYear() > currentYear) {
              return `${monthName} tahun depan`;
            }
            return monthName;
          };
          
          when1 = getMonthStr(future5);
          when2 = getMonthStr(future6);
          when3 = getMonthStr(future7);
          when4 = getMonthStr(future8);
          
          return [
            `${when1} atau ${when2} adalah waktu ketika Anda dapat mempersiapkan awal baru. Lupakan kesulitan masa lalu, mulai dengan pikiran baru, ciptakan perubahan positif.`,
            `${when2} atau ${when3} adalah waktu ketika mungkin ada perubahan kecil jika Anda memiliki kesabaran dan berusaha. Jika terus berusaha tanpa menyerah, Anda dapat secara bertahap mencapai hasil yang baik.`,
            `${when1} adalah waktu penting untuk sepenuhnya fokus pada pengembangan diri. Sebelum bertemu koneksi baru, siapkan diri sepenuhnya, dan Anda dapat menarik koneksi yang lebih baik sebagai orang yang telah berkembang.`,
            `${when3} atau ${when4} adalah waktu ketika perubahan kecil dapat diharapkan seiring waktu. Jangan terburu-buru, kembangkan diri perlahan, dan harap tunggu dengan kesabaran.`,
            `${when2} adalah waktu ketika pertemuan kecil dapat terakumulasi dan berkembang menjadi koneksi yang baik di kemudian hari. Mulai dari hal-hal kecil dan kembangkan hubungan secara bertahap, tidak menyerah adalah penting.`,
            `${when1} atau ${when2} adalah waktu ketika Anda dapat melihat diri sendiri dan hubungan dari perspektif baru. Ini adalah kesempatan untuk membangun hubungan yang lebih baik berdasarkan pengalaman masa lalu.`,
            `${when3} atau ${when4} adalah waktu ketika Anda dapat berkembang sedikit demi sedikit sambil mengatasi kesulitan. Bahkan jika ada konflik atau kesalahpahaman, Anda dapat menyelesaikannya melalui percakapan yang sabar dan jujur.`,
            `Di ${when2}, mungkin ada pertemuan kecil yang tak terduga dalam kehidupan sehari-hari. Bahkan dalam momen yang tampaknya biasa, mungkin tersembunyi benih koneksi kecil.`,
            `${when1} atau ${when3} adalah waktu ketika Anda dapat bertemu orang baru melalui minat dan hobi Anda. Bertemu dengan orang yang memiliki minat bersama dapat secara alami memulai koneksi.`,
            `${when2} atau ${when4} adalah waktu ketika perubahan positif diharapkan. Jika terus berusaha tanpa menyerah dan maju dengan kesabaran, Anda dapat secara bertahap mencapai hasil yang memuaskan.`
          ];
        }
      },
      style: {
        ko: [
          '인내심이 매우 강하고 포기하지 않는 끈기가 있는 사람입니다. 어려움을 극복하며 성장할 수 있는 사람이며, 장기적인 관점을 가진 사람입니다.',
          '회복력이 강하고 어려움을 통해 더 강해질 수 있는 사람입니다. 실패해도 다시 일어설 수 있으며, 경험을 통해 더 나은 선택을 할 수 있는 사람입니다.',
          '성장하려는 의지가 매우 강한 사람입니다. 어려움을 배움의 기회로 여기며, 지속적으로 발전하려고 노력하는 사람입니다.',
          '긍정적인 사고를 가지고 있어 희망을 잃지 않는 사람입니다. 어려움이 있어도 긍정적으로 생각하며, 좋은 변화가 있을 것이라고 믿는 사람입니다.',
          '솔직하고 정직한 성격의 사람입니다. 거짓 없이 마음을 열 수 있으며, 진실한 대화를 통해 문제를 해결할 수 있는 사람입니다.',
          '배려심이 있고 이해심이 깊은 사람입니다. 상대방의 감정을 이해하고 공감하며, 서로를 지지할 수 있는 사람입니다.',
          '현실적이면서도 희망적인 사고를 하는 사람입니다. 현실을 직시하면서도 긍정적인 미래를 그리는 사람이며, 균형감이 있는 사람입니다.',
          '노력하는 자세를 가지고 있어 계속 발전할 수 있는 사람입니다. 포기하지 않고 꾸준히 노력하며, 작은 성공을 쌓아가는 사람입니다.',
          '독립적이면서도 협력할 수 있는 사람입니다. 자신의 공간을 중요하게 생각하지만, 필요할 때 상대방과 협력할 수 있는 사람입니다.',
          '자신을 잘 알고 있는 사람입니다. 자신의 강점과 약점을 알고 있으며, 이를 바탕으로 발전하려고 노력하는 사람입니다.'
        ],
        en: [
          'A person with very strong patience and persistence who doesn\'t give up. They are people who can grow while overcoming difficulties, and have a long-term perspective.',
          'A person with strong resilience who can become stronger through difficulties. They can stand up again even after failure, and are people who can make better choices through experience.',
          'A person with very strong will to grow. They see difficulties as learning opportunities, and are people who continuously work to develop.',
          'A person with positive thinking who doesn\'t lose hope. Even if there are difficulties, they think positively and believe that good changes will come.',
          'A person with an honest and sincere personality. They can open their heart without falsehood, and are people who can solve problems through truthful conversations.',
          'A person with a caring and understanding heart. They understand and empathize with their partner\'s emotions, and are people who can support each other.',
          'A person with realistic yet hopeful thinking. They face reality while drawing a positive future, and are balanced people.',
          'A person with an effort-oriented attitude who can continue to develop. They continue to make efforts without giving up, and are people who accumulate small successes.',
          'A person who is independent but can cooperate. They value their own space, but are people who can cooperate with their partner when necessary.',
          'A person who knows themselves well. They know their strengths and weaknesses, and are people who work to develop based on this.'
        ],
        ja: [
          '非常に強い忍耐力があり、諦めない粘り強さがある人です。困難を克服しながら成長でき、長期的な視点を持つ人です。',
          '強い回復力があり、困難を通じてより強くなることのできる人です。失敗しても再び立ち上がることができ、経験を通じてより良い選択ができる人です。',
          '成長しようとする意志が非常に強い人です。困難を学びの機会として見て、継続的に発展しようと努力する人です。',
          'ポジティブな思考を持ち、希望を失わない人です。困難があってもポジティブに考え、良い変化があると信じる人です。',
          '正直で誠実な性格の人です。嘘偽りなく心を開くことができ、真実の対話を通じて問題を解決できる人です。',
          '思いやりがあり、理解力が深い人です。相手の感情を理解し共感し、お互いを支えることができる人です。',
          '現実的でありながら希望的思考をする人です。現実を直視しながらもポジティブな未来を描き、バランス感のある人です。',
          '努力する姿勢を持ち、継続的に発展できる人です。諦めずに着実に努力し、小さな成功を積み重ねる人です。',
          '独立しながらも協力できる人です。自分の空間を重要に考えますが、必要に応じて相手と協力できる人です。',
          '自分をよく知っている人です。自分の強みと弱みを知り、これを基に発展しようと努力する人です。'
        ],
        'zh-CN': [
          '有非常强的耐心和永不放弃的坚持的人。可以克服困难成长的人，有长期视角的人。',
          '有很强的恢复力，可以通过困难变得更强的人。失败后也能重新站起来，通过经验做出更好选择的人。',
          '有非常强烈的成长意愿的人。将困难视为学习机会，持续努力发展的人。',
          '有积极思维、不失去希望的人。即使有困难也积极思考，相信会有好变化的人。',
          '有诚实和真诚性格的人。可以毫无虚假地敞开心扉，通过真诚对话解决问题的人。',
          '有爱心和理解力的人。理解并同情对方的感受，能够相互支持的人。',
          '现实而充满希望思考的人。面对现实的同时描绘积极未来，有平衡感的人。',
          '有努力态度、能持续发展的人。不放弃持续努力，积累小成功的人。',
          '独立而能合作的人。重视自己的空间，但必要时能与对方合作的人。',
          '了解自己的人。知道自己的优缺点，基于此努力发展的人。'
        ],
        'zh-TW': [
          '有非常強的耐心和永不放棄的堅持的人。可以克服困難成長的人，有長期視角的人。',
          '有很強的恢復力，可以通過困難變得更強的人。失敗後也能重新站起來，通過經驗做出更好選擇的人。',
          '有非常強烈的成長意願的人。將困難視為學習機會，持續努力發展的人。',
          '有積極思維、不失去希望的人。即使有困難也積極思考，相信會有好變化的人。',
          '有誠實和真誠性格的人。可以毫無虛假地敞開心扉，通過真誠對話解決問題的人。',
          '有愛心和理解力的人。理解並同情對方的感受，能夠相互支持的人。',
          '現實而充滿希望思考的人。面對現實的同時描繪積極未來，有平衡感的人。',
          '有努力態度、能持續發展的人。不放棄持續努力，積累小成功的人。',
          '獨立而能合作的人。重視自己的空間，但必要時能與對方合作的人。',
          '了解自己的人。知道自己的優缺點，基於此努力發展的人。'
        ],
        vi: [
          'Một người có sự kiên nhẫn rất mạnh mẽ và sự bền bỉ không bỏ cuộc. Họ là người có thể phát triển trong khi vượt qua khó khăn, và có quan điểm dài hạn.',
          'Một người có khả năng phục hồi mạnh mẽ có thể trở nên mạnh mẽ hơn thông qua khó khăn. Họ có thể đứng dậy lại ngay cả sau thất bại, và là người có thể đưa ra lựa chọn tốt hơn thông qua kinh nghiệm.',
          'Một người có ý chí rất mạnh mẽ để phát triển. Họ xem khó khăn như cơ hội học hỏi, và là người liên tục nỗ lực phát triển.',
          'Một người có suy nghĩ tích cực không mất hy vọng. Ngay cả khi có khó khăn, họ suy nghĩ tích cực và tin rằng sẽ có thay đổi tốt.',
          'Một người có tính cách trung thực và chân thành. Họ có thể mở lòng mà không có sự giả dối, và là người có thể giải quyết vấn đề thông qua đối thoại chân thành.',
          'Một người có tấm lòng quan tâm và hiểu biết. Họ hiểu và đồng cảm với cảm xúc của đối phương, và là người có thể hỗ trợ lẫn nhau.',
          'Một người có suy nghĩ thực tế nhưng đầy hy vọng. Họ đối mặt với thực tế đồng thời vẽ nên tương lai tích cực, và là người có sự cân bằng.',
          'Một người có thái độ nỗ lực, có thể phát triển liên tục. Họ tiếp tục nỗ lực không bỏ cuộc, và là người tích lũy những thành công nhỏ.',
          'Một người độc lập nhưng có thể hợp tác. Họ coi trọng không gian riêng của mình, nhưng khi cần thiết có thể hợp tác với đối phương.',
          'Một người hiểu rõ bản thân. Họ biết điểm mạnh và điểm yếu của mình, và nỗ lực phát triển dựa trên điều đó.'
        ],
        id: [
          'Seseorang dengan kesabaran yang sangat kuat dan ketetapan yang tidak menyerah. Mereka adalah orang yang dapat tumbuh sambil mengatasi kesulitan, dan memiliki perspektif jangka panjang.',
          'Seseorang dengan ketahanan yang kuat yang dapat menjadi lebih kuat melalui kesulitan. Mereka dapat bangkit kembali bahkan setelah kegagalan, dan adalah orang yang dapat membuat pilihan yang lebih baik melalui pengalaman.',
          'Seseorang dengan keinginan yang sangat kuat untuk tumbuh. Mereka melihat kesulitan sebagai kesempatan belajar, dan adalah orang yang terus bekerja untuk berkembang.',
          'Seseorang dengan pemikiran positif yang tidak kehilangan harapan. Meskipun ada kesulitan, mereka berpikir positif dan percaya bahwa perubahan baik akan datang.',
          'Seseorang dengan kepribadian yang jujur dan tulus. Mereka dapat membuka hati tanpa kepalsuan, dan adalah orang yang dapat menyelesaikan masalah melalui dialog yang jujur.',
          'Seseorang dengan hati yang peduli dan pemahaman. Mereka memahami dan berempati dengan emosi pasangan, dan adalah orang yang dapat saling mendukung.',
          'Seseorang dengan pemikiran realistis namun penuh harapan. Mereka menghadapi kenyataan sambil menggambarkan masa depan yang positif, dan adalah orang yang seimbang.',
          'Seseorang dengan sikap berusaha yang dapat terus berkembang. Mereka terus berusaha tanpa menyerah, dan adalah orang yang mengumpulkan kesuksesan kecil.',
          'Seseorang yang mandiri namun dapat bekerja sama. Mereka menghargai ruang pribadinya, tetapi ketika diperlukan dapat bekerja sama dengan pasangan.',
          'Seseorang yang mengenal dirinya dengan baik. Mereka mengetahui kelebihan dan kekurangan dirinya, dan berusaha berkembang berdasarkan hal tersebut.'
        ]
      },
      warning: {
        get ko() {
          const now = new Date();
          const next2 = getFutureMonthShort(2);
          const next4 = getFutureMonthShort(4);
          const next6 = getFutureMonthShort(6);
          const next8 = getFutureMonthShort(8);
          const next10 = getFutureMonthShort(10);
          return [
            `${next2} 절대 포기하지 않는 것이 가장 중요합니다. 어려움이 계속되어도 인내심을 가지고 계속 노력한다면, 언젠가 좋은 결과를 얻을 수 있을 것입니다.`,
            `${next4} 성급한 결정을 절대 경계하시기 바랍니다. 감정에 휘둘리지 말고 이성적으로 판단하며, 매우 신중하게 결정하시기 바랍니다.`,
            `${next6} 과도한 기대를 경계하시기 바랍니다. 현실적인 기대를 가지고 관계를 발전시키며, 작은 것에도 감사하는 마음을 가지시기 바랍니다.`,
            `${next8} 소통 부족에 매우 주의하시기 바랍니다. 대화가 부족하면 오해가 생기고 갈등이 커질 수 있으므로, 정기적으로 서로의 마음을 나누는 시간을 반드시 가지시기 바랍니다.`,
            `${next10} 자신감 부족에 매우 주의하시기 바랍니다. 자신을 너무 낮추거나 자신감이 없으면 좋은 인연을 만들 수 없으므로, 자신의 가치를 반드시 인정하는 것이 중요합니다.`,
            '과거 상처를 현재 관계에 절대 적용하지 말아야 합니다. 이전 관계에서 받은 상처를 새 관계에 적용하지 말고, 완전히 새로운 시작을 하는 마음가짐이 중요합니다.',
            '타인의 의견에 너무 휘둘리지 말아야 합니다. 주변 사람들의 의견도 중요하지만, 자신의 판단과 감정을 존중하고 믿는 것이 매우 중요합니다.',
            '변화를 두려워하지 말고 적극적으로 새로운 시도를 해보시기 바랍니다. 어려움이 있어도 포기하지 않고 새로운 시도를 해보며, 변화를 통해 더 나은 관계를 만들 수 있습니다.',
            '감정에 절대 휘둘리지 말아야 합니다. 중요한 결정은 반드시 이성적으로 판단하며, 감정적 기복에 매우 주의하시기 바랍니다.',
            '자기 자신을 먼저 사랑하는 것이 가장 중요합니다. 다른 사람의 사랑을 받기 전에 먼저 자신을 소중히 여기며, 자신감을 갖는 것이 좋은 인연을 만드는 가장 중요한 첫걸음입니다.'
          ];
        },
        get en() {
          const now = new Date();
          const future2 = new Date(now.getFullYear(), now.getMonth() + 2, 1);
          const future4 = new Date(now.getFullYear(), now.getMonth() + 4, 1);
          const future6 = new Date(now.getFullYear(), now.getMonth() + 6, 1);
          const future8 = new Date(now.getFullYear(), now.getMonth() + 8, 1);
          const future10 = new Date(now.getFullYear(), now.getMonth() + 10, 1);
          
          const getMonthStr = (date: Date) => {
            const monthName = date.toLocaleString('en-US', { month: 'long' });
            if (date.getFullYear() > now.getFullYear()) {
              return `Next ${monthName}`;
            }
            return monthName;
          };
          
          const next2 = getMonthStr(future2);
          const next4 = getMonthStr(future4);
          const next6 = getMonthStr(future6);
          const next8 = getMonthStr(future8);
          const next10 = getMonthStr(future10);
          
          return [
            `Never giving up is most important in ${next2}. Even if difficulties continue, if you continue to make efforts with patience, you can eventually achieve good results.`,
            `Please absolutely beware of hasty decisions in ${next4}. Do not be swayed by emotions, judge rationally, and please make decisions very carefully.`,
            `Please beware of excessive expectations in ${next6}. Develop relationships with realistic expectations, and please have a grateful heart even for small things.`,
            `Please be very careful about lack of communication in ${next8}. If there is insufficient dialogue, misunderstandings can arise and conflicts can grow, so please definitely take time to share each other\'s hearts regularly.`,
            `Please be very careful about lack of confidence in ${next10}. If you lower yourself too much or lack confidence, you cannot create good connections, so it is important to definitely recognize your own value.`,
            'You should absolutely not apply past wounds to the current relationship. Do not apply wounds received from previous relationships to new relationships, and it is important to have a mindset of completely starting fresh.',
            'You should not be overly swayed by others\' opinions. Others\' opinions are also important, but it is very important to respect and trust your own judgment and feelings.',
            'Please do not be afraid of change and actively try new attempts. Even if there are difficulties, do not give up and try new attempts, and you can create better relationships through change.',
            'You should absolutely not be swayed by emotions. Make important decisions rationally, and please be very careful about emotional fluctuations.',
            'Loving yourself first is most important. Before receiving love from others, first cherish yourself, and having confidence is the most important first step to creating good connections.'
          ];
        },
        get ja() {
          const now = new Date();
          const future2 = new Date(now.getFullYear(), now.getMonth() + 2, 1);
          const future4 = new Date(now.getFullYear(), now.getMonth() + 4, 1);
          const future6 = new Date(now.getFullYear(), now.getMonth() + 6, 1);
          const future8 = new Date(now.getFullYear(), now.getMonth() + 8, 1);
          const future10 = new Date(now.getFullYear(), now.getMonth() + 10, 1);
          
          const getMonthStr = (date: Date) => {
            const monthName = date.toLocaleString('ja-JP', { month: 'long' });
            if (date.getFullYear() > now.getFullYear()) {
              return `来年${monthName}`;
            }
            return monthName;
          };
          
          const next2 = getMonthStr(future2);
          const next4 = getMonthStr(future4);
          const next6 = getMonthStr(future6);
          const next8 = getMonthStr(future8);
          const next10 = getMonthStr(future10);
          
          return [
            `${next2}には絶対に諦めないことが最も重要です。困難が続いても忍耐力を持って努力を続ければ、いつか良い結果を得られるでしょう。`,
            `${next4}には性急な決定を絶対に警戒してください。感情に振り回されずに理性的に判断し、非常に慎重に決定してください。`,
            `${next6}には過度な期待を警戒してください。現実的な期待を持って関係を発展させ、小さなことにも感謝する心を持ってください。`,
            `${next8}にはコミュニケーション不足に非常に注意してください。対話が不足すると誤解が生じ、対立が大きくなる可能性があるため、定期的にお互いの心を共有する時間を必ず持ってください。`,
            `${next10}には自信不足に非常に注意してください。自分をあまり低くしたり自信がなければ良い縁を作ることができないため、自分の価値を必ず認めることが重要です。`,
            '過去の傷を現在の関係に絶対に適用しないでください。以前の関係で受けた傷を新しい関係に適用せず、完全に新しいスタートを切る心構えが重要です。',
            '他人の意見にあまり振り回されないでください。周りの人々の意見も重要ですが、自分の判断と感情を尊重し信じることが非常に重要です。',
            '変化を恐れず、積極的に新しい試みをしてみてください。困難があっても諦めずに新しい試みをしてみて、変化を通じてより良い関係を作ることができます。',
            '感情に絶対に振り回されないでください。重要な決定は必ず理性的に判断し、感情的変動に非常に注意してください。',
            '自分をまず愛することが最も重要です。他の人の愛を受ける前に、まず自分を大切にし、自信を持つことが良い縁を作る最も重要な第一歩です。'
          ];
        },
        get 'zh-CN'() {
          const now = new Date();
          const future2 = new Date(now.getFullYear(), now.getMonth() + 2, 1);
          const future4 = new Date(now.getFullYear(), now.getMonth() + 4, 1);
          const future6 = new Date(now.getFullYear(), now.getMonth() + 6, 1);
          const future8 = new Date(now.getFullYear(), now.getMonth() + 8, 1);
          const future10 = new Date(now.getFullYear(), now.getMonth() + 10, 1);
          
          const getMonthStr = (date: Date) => {
            const monthNames = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
            const monthName = monthNames[date.getMonth()];
            if (date.getFullYear() > now.getFullYear()) {
              return `明年${monthName}`;
            }
            return monthName;
          };
          
          const next2 = getMonthStr(future2);
          const next4 = getMonthStr(future4);
          const next6 = getMonthStr(future6);
          const next8 = getMonthStr(future8);
          const next10 = getMonthStr(future10);
          
          return [
            `${next2}永不放弃是最重要的。即使困难持续，如果继续耐心努力，最终可以获得好结果。`,
            `${next4}绝对要警惕草率的决定。不要被感情左右，理性判断，非常谨慎地决定。`,
            `${next6}请警惕过度的期望。以现实的期望发展关系，对小事也要心存感激。`,
            `${next8}请非常注意缺乏沟通。对话不足会产生误解和冲突，请一定定期互相分享心情。`,
            `${next10}请非常注意缺乏自信。过于贬低自己或缺乏自信就无法建立好缘分，一定要认识自己的价值。`,
            '绝对不应将过去的伤痛应用到现在的感情中。不要将之前感情中的伤痛带到新的关系中，保持完全新的开始的心态很重要。',
            '不应过分受他人意见左右。他人的意见也重要，但尊重并相信自己判断和感受非常重要。',
            '不要害怕变化，积极尝试新的事物。即使有困难也不要放弃，尝试新的方式，通过变化可以建立更好的关系。',
            '绝对不应被感情左右。重要决定一定要理性判断，请注意情绪波动。',
            '首先要爱自己是最重要的。在得到别人的爱之前，先要珍惜自己，拥有自信是建立好缘分最重要的第一步。'
          ];
        },
        get 'zh-TW'() {
          const now = new Date();
          const future2 = new Date(now.getFullYear(), now.getMonth() + 2, 1);
          const future4 = new Date(now.getFullYear(), now.getMonth() + 4, 1);
          const future6 = new Date(now.getFullYear(), now.getMonth() + 6, 1);
          const future8 = new Date(now.getFullYear(), now.getMonth() + 8, 1);
          const future10 = new Date(now.getFullYear(), now.getMonth() + 10, 1);
          
          const getMonthStr = (date: Date) => {
            const monthNames = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
            const monthName = monthNames[date.getMonth()];
            if (date.getFullYear() > now.getFullYear()) {
              return `明年${monthName}`;
            }
            return monthName;
          };
          
          const next2 = getMonthStr(future2);
          const next4 = getMonthStr(future4);
          const next6 = getMonthStr(future6);
          const next8 = getMonthStr(future8);
          const next10 = getMonthStr(future10);
          
          return [
            `${next2}永不放棄是最重要的。即使困難持續，如果繼續耐心努力，最終可以獲得好結果。`,
            `${next4}絕對要警惕草率的決定。不要被感情左右，理性判斷，非常謹慎地決定。`,
            `${next6}請警惕過度的期望。以現實的期望發展關係，對小事也要心存感激。`,
            `${next8}請非常注意缺乏溝通。對話不足會產生誤解和衝突，請一定定期互相分享心情。`,
            `${next10}請非常注意缺乏自信。過於貶低自己或缺乏自信就無法建立好緣分，一定要認識自己的價值。`,
            '絕對不應將過去的傷痛應用到現在的感情中。不要將之前感情中的傷痛帶到新的關係中，保持完全新的開始的心態很重要。',
            '不應過分受他人意見左右。他人的意見也重要，但尊重並相信自己判斷和感受非常重要。',
            '不要害怕變化，積極嘗試新的事物。即使有困難也不要放棄，嘗試新的方式，通過變化可以建立更好的關係。',
            '絕對不應被感情左右。重要決定一定要理性判斷，請注意情緒波動。',
            '首先要愛自己是最重要的。在得到別人的愛之前，先要珍惜自己，擁有自信是建立好緣分最重要的第一步。'
          ];
        },
        get vi() {
          const now = new Date();
          const future2 = new Date(now.getFullYear(), now.getMonth() + 2, 1);
          const future4 = new Date(now.getFullYear(), now.getMonth() + 4, 1);
          const future6 = new Date(now.getFullYear(), now.getMonth() + 6, 1);
          const future8 = new Date(now.getFullYear(), now.getMonth() + 8, 1);
          const future10 = new Date(now.getFullYear(), now.getMonth() + 10, 1);
          
          const getMonthStr = (date: Date) => {
            const monthNames = ['tháng 1', 'tháng 2', 'tháng 3', 'tháng 4', 'tháng 5', 'tháng 6', 'tháng 7', 'tháng 8', 'tháng 9', 'tháng 10', 'tháng 11', 'tháng 12'];
            const monthName = monthNames[date.getMonth()];
            if (date.getFullYear() > now.getFullYear()) {
              return `${monthName} năm sau`;
            }
            return monthName;
          };
          
          const next2 = getMonthStr(future2);
          const next4 = getMonthStr(future4);
          const next6 = getMonthStr(future6);
          const next8 = getMonthStr(future8);
          const next10 = getMonthStr(future10);
          
          return [
            `${next2} không bao giờ bỏ cuộc là quan trọng nhất. Ngay cả khi khó khăn tiếp tục, nếu bạn tiếp tục nỗ lực với sự kiên nhẫn, cuối cùng bạn có thể đạt được kết quả tốt.`,
            `${next4} tuyệt đối cảnh giác với các quyết định vội vàng. Đừng để cảm xúc chi phối, hãy phán đoán một cách hợp lý và quyết định rất thận trọng.`,
            `${next6} hãy cảnh giác với kỳ vọng quá mức. Phát triển mối quan hệ với kỳ vọng thực tế, hãy có lòng biết ơn ngay cả với những điều nhỏ.`,
            `${next8} hãy rất cẩn thận về thiếu giao tiếp. Nếu thiếu đối thoại sẽ phát sinh hiểu lầm và xung đột, vì vậy hãy chắc chắn dành thời gian thường xuyên chia sẻ tâm tư với nhau.`,
            `${next10} hãy rất cẩn thận về thiếu tự tin. Nếu bạn tự hạ thấp mình quá mức hoặc thiếu tự tin, bạn không thể tạo được duyên tốt, vì vậy việc nhận ra giá trị của bản thân là rất quan trọng.`,
            'Bạn tuyệt đối không nên áp dụng những vết thương trong quá khứ vào mối quan hệ hiện tại. Đừng áp dụng những vết thương từ các mối quan hệ trước vào mối quan hệ mới, và có tâm trí hoàn toàn khởi đầu mới là quan trọng.',
            'Bạn không nên quá để bị ảnh hưởng bởi ý kiến của người khác. Ý kiến của người khác cũng quan trọng, nhưng tôn trọng và tin tưởng phán đoán và cảm xúc của chính mình là rất quan trọng.',
            'Đừng sợ thay đổi và tích cực thử những điều mới. Ngay cả khi có khó khăn cũng đừng bỏ cuộc, hãy thử những cách mới, thông qua thay đổi bạn có thể tạo ra mối quan hệ tốt hơn.',
            'Bạn tuyệt đối không nên để cảm xúc chi phối. Các quyết định quan trọng phải được phán đoán một cách hợp lý, và hãy rất cẩn thận về sự dao động cảm xúc.',
            'Việc yêu bản thân trước tiên là quan trọng nhất. Trước khi nhận được tình yêu từ người khác, hãy quý trọng bản thân trước, và có tự tin là bước đầu tiên quan trọng nhất để tạo ra duyên tốt.'
          ];
        },
        get id() {
          const now = new Date();
          const future2 = new Date(now.getFullYear(), now.getMonth() + 2, 1);
          const future4 = new Date(now.getFullYear(), now.getMonth() + 4, 1);
          const future6 = new Date(now.getFullYear(), now.getMonth() + 6, 1);
          const future8 = new Date(now.getFullYear(), now.getMonth() + 8, 1);
          const future10 = new Date(now.getFullYear(), now.getMonth() + 10, 1);
          
          const getMonthStr = (date: Date) => {
            const monthNames = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
            const monthName = monthNames[date.getMonth()];
            if (date.getFullYear() > now.getFullYear()) {
              return `${monthName} tahun depan`;
            }
            return monthName;
          };
          
          const next2 = getMonthStr(future2);
          const next4 = getMonthStr(future4);
          const next6 = getMonthStr(future6);
          const next8 = getMonthStr(future8);
          const next10 = getMonthStr(future10);
          
          return [
            `${next2} tidak pernah menyerah adalah yang paling penting. Meskipun kesulitan terus berlanjut, jika Anda terus berusaha dengan kesabaran, pada akhirnya Anda dapat mencapai hasil yang baik.`,
            `${next4} harap sangat waspada terhadap keputusan yang tergesa-gesa. Jangan terpengaruh emosi, pertimbangkan secara rasional, dan harap putuskan dengan sangat hati-hati.`,
            `${next6} harap waspada terhadap ekspektasi berlebihan. Kembangkan hubungan dengan ekspektasi yang realistis, dan harap memiliki hati yang bersyukur bahkan untuk hal-hal kecil.`,
            `${next8} harap sangat berhati-hati tentang kurangnya komunikasi. Jika dialog tidak cukup, kesalahpahaman dapat timbul dan konflik dapat tumbuh, jadi harap pastikan luangkan waktu untuk saling berbagi perasaan secara teratur.`,
            `${next10} harap sangat berhati-hati tentang kurangnya kepercayaan diri. Jika Anda merendahkan diri terlalu rendah atau kurang percaya diri, Anda tidak dapat menciptakan koneksi yang baik, jadi penting untuk mengenali nilai Anda sendiri.`,
            'Anda tidak boleh menerapkan luka masa lalu ke hubungan saat ini. Jangan menerapkan luka yang diterima dari hubungan sebelumnya ke hubungan baru, dan penting untuk memiliki pola pikir memulai yang benar-benar baru.',
            'Anda tidak boleh terlalu dipengaruhi oleh pendapat orang lain. Pendapat orang lain juga penting, tetapi penting untuk menghormati dan mempercayai penilaian dan perasaan Anda sendiri.',
            'Jangan takut perubahan dan aktif mencoba hal-hal baru. Meskipun ada kesulitan, jangan menyerah dan coba upaya baru, dan Anda dapat menciptakan hubungan yang lebih baik melalui perubahan.',
            'Anda tidak boleh dipengaruhi emosi. Putuskan keputusan penting secara rasional, dan harap sangat berhati-hati tentang fluktuasi emosional.',
            'Penting untuk mencintai diri sendiri terlebih dahulu. Sebelum menerima cinta dari orang lain, hargai diri sendiri terlebih dahulu, dan memiliki kepercayaan diri adalah langkah pertama yang paling penting untuk menciptakan koneksi yang baik.'
          ];
        }
      }
    }
  },
  {
    id: 6,
    title: {
      ko: '매우 어려운 연애운',
      en: 'Very Difficult Love Fortune',
      ja: '非常に困難な恋愛運',
      'zh-CN': '非常困难的恋爱运',
      'zh-TW': '非常困難的戀愛運',
      vi: 'Vận Tình Duyên Rất Khó Khăn',
      id: 'Nasib Cinta Sangat Sulit'
    },
    description: {
      get ko() {
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth() + 1;
        
        let periodText = '';
        if (currentMonth <= 6) {
          periodText = `${currentYear + 2}년 초 또는 중반`;
        } else if (currentMonth === 7) {
          periodText = `${currentYear + 2}년 초 또는 중반`;
        } else if (currentMonth === 8) {
          periodText = `${currentYear + 2}년 중반`;
        } else if (currentMonth === 9) {
          periodText = `${currentYear + 2}년 중반 또는 후반`;
        } else if (currentMonth === 10) {
          periodText = `${currentYear + 2}년 후반`;
        } else if (currentMonth === 11) {
          periodText = `${currentYear + 2}년 후반 또는 ${currentYear + 3}년 초`;
        } else {
          periodText = `${currentYear + 3}년 초`;
        }
        
        return [
          `${periodText} 연애운이 극도로 어려울 것으로 예상됩니다. 하지만 절대 포기하지 않고 끊임없이 노력한다면, 시간이 지난 후 좋은 인연을 만날 수 있을 것입니다.`,
          `${periodText} 연애에서 매우 큰 어려움이 예상됩니다. 하지만 이것은 당신을 더욱 강하게 만드는 시련이며, 이를 극복하며 더 나은 사람이 될 수 있습니다.`,
          `${periodText} 연애운이 매우 약하고 불안정할 것으로 보입니다. 하지만 자신을 꾸준히 발전시키고 준비한다면, 언젠가 더 나은 인연을 만날 수 있을 것입니다.`,
          `${periodText} 연애에서 많은 시련과 좌절이 예상됩니다. 하지만 절대 포기하지 않고 긍정적인 마음가짐을 유지한다면, 어려움을 극복할 수 있을 것입니다.`,
          `${periodText} 연애운이 매우 불안정하고 예측하기 어려울 수 있습니다. 하지만 인내심을 가지고 천천히 자신을 발전시킨다면, 언젠가 좋은 변화가 있을 것입니다.`,
          `${periodText} 연애에서 큰 실망과 좌절이 있을 수 있지만, 이것으로 끝이 아닙니다. 계속 노력하고 자신을 믿는다면 더 나은 미래가 올 것입니다.`,
          `${periodText} 연애운이 완전히 주춤할 것으로 예상됩니다. 하지만 포기하지 않고 내면의 성장에 완전히 집중한다면, 더 나은 인연을 끌어들일 수 있을 것입니다.`,
          `${periodText} 연애에서 어려움이 오랫동안 계속될 수 있지만, 이것은 일시적입니다. 긍정적인 자세와 지속적인 노력을 통해 어려움을 극복할 수 있습니다.`,
          `${periodText} 연애운이 매우 변덕스럽고 예측 불가능할 수 있습니다. 하지만 인내심을 가지고 자신을 발전시키며 준비한다면, 언젠가 좋은 기회가 찾아올 것입니다.`,
          `${periodText} 연애에서 엄청난 시련이 있을 수 있지만, 이것은 당신을 더욱 강하게 만들 것입니다. 절대 포기하지 않고 계속 전진한다면 더 나은 인연이 올 것입니다.`
        ];
      },
      en: [
        'Your love fortune is expected to be extremely difficult. However, if you absolutely do not give up and continue to make efforts constantly, you can eventually meet a good connection after time passes.',
        'Very great difficulties are expected in love. However, this is a trial that makes you even stronger, and you can become a better person by overcoming it.',
        'Your love fortune appears to be very weak and unstable. However, if you continue to develop and prepare yourself, you can eventually meet a better connection someday.',
        'Many trials and frustrations are expected in love. However, if you absolutely do not give up and maintain a positive mindset, you can overcome difficulties.',
        'Your love fortune may be very unstable and unpredictable. However, if you develop yourself slowly with patience, there will eventually be good changes.',
        'There may be great disappointments and frustrations in love, but this is not the end. If you continue to make efforts and believe in yourself, a better future will come.',
        'Your love fortune is expected to completely stall. However, if you do not give up and fully focus on inner growth, you can attract a better connection.',
        'Difficulties in love may continue for a long time, but this is temporary. You can overcome difficulties with a positive attitude and continuous efforts.',
        'Your love fortune may be very capricious and unpredictable. However, if you develop and prepare yourself with patience, good opportunities will come someday.',
        'There may be tremendous trials in love, but this will make you even stronger. If you absolutely do not give up and continue to move forward, a better connection will come.'
      ],
      ja: [
        '恋愛運が極めて困難になることが予想されます。しかし、絶対に諦めずに絶え間なく努力を続ければ、時間が経った後良い縁に会えるでしょう。',
        '恋愛で非常に大きな困難が予想されます。しかし、これはあなたをより強くする試練であり、これを克服しながらより良い人になることができます。',
        '恋愛運が非常に弱く不安定であることが見られます。しかし、自分を着実に発展させて準備すれば、いつかより良い縁に会えるでしょう。',
        '恋愛で多くの試練と挫折が予想されます。しかし、絶対に諦めずにポジティブな心構えを維持すれば、困難を克服できるでしょう。',
        '恋愛運が非常に不安定で予測困難かもしれません。しかし、忍耐を持ってゆっくり自分を発展させれば、いつか良い変化があるでしょう。',
        '恋愛で大きな失望と挫折があるかもしれませんが、これで終わりではありません。努力を続け、自分を信じればより良い未来が来るでしょう。',
        '恋愛運が完全に停滞することが予想されます。しかし、諦めずに内面の成長に完全に集中すれば、より良い縁を引き寄せることができるでしょう。',
        '恋愛での困難が長期間続くかもしれませんが、これは一時的なものです。ポジティブな姿勢と継続的な努力を通じて困難を克服できます。',
        '恋愛運が非常に気まぐれで予測不可能かもしれません。しかし、忍耐を持って自分を発展させ準備すれば、いつか良い機会が訪れるでしょう。',
        '恋愛で途方もない試練があるかもしれませんが、これはあなたをより強くするでしょう。絶対に諦めずに前進を続ければより良い縁が来るでしょう。'
      ],
      'zh-CN': [
        '你的恋爱运预期会极度困难。但如果你绝对不放弃并持续不断地努力，时间过去后最终可以遇到好的缘分。',
        '预期恋爱中会有非常大的困难。但这是让你变得更强的考验，可以通过克服它成为更好的人。',
        '你的恋爱运似乎非常弱且不稳定。但如果持续发展和准备好自己，总有一天可以遇到更好的缘分。',
        '预期恋爱中会有许多考验和挫折。但如果你绝对不放弃并保持积极心态，可以克服困难。',
        '你的恋爱运可能非常不稳定且难以预测。但如果耐心地慢慢发展自己，最终会有好的变化。',
        '恋爱中可能会有很大的失望和挫折，但这并不是结束。如果继续努力并相信自己，更好的未来会到来。',
        '预期恋爱运会完全停滞。但如果不放弃并完全专注于内在成长，可以吸引更好的缘分。',
        '恋爱中的困难可能会持续很长时间，但这是暂时的。可以通过积极的态度和持续的努力克服困难。',
        '你的恋爱运可能会反复无常且难以预测。但如果耐心地发展和准备好自己，好机会总有一天会到来。',
        '恋爱中可能会有巨大的考验，但这会让你变得更强。如果你绝对不放弃并继续前进，更好的缘分会到来。'
      ],
      'zh-TW': [
        '你的戀愛運預期會極度困難。但如果你絕對不放棄並持續不斷地努力，時間過去後最終可以遇到好的緣分。',
        '預期戀愛中會有非常大的困難。但這是讓你變得更強的考驗，可以通過克服它成為更好的人。',
        '你的戀愛運似乎非常弱且不穩定。但如果持續發展並準備好自己，總有一天可以遇到更好的緣分。',
        '預期戀愛中會有許多考驗和挫折。但如果你絕對不放棄並保持積極心態，可以克服困難。',
        '你的戀愛運可能非常不穩定且難以預測。但如果耐心地慢慢發展自己，最終會有好的變化。',
        '戀愛中可能會有很大的失望和挫折，但這並不是結束。如果繼續努力並相信自己，更好的未來會到來。',
        '預期戀愛運會完全停滯。但如果不放棄並完全專注於內在成長，可以吸引更好的緣分。',
        '戀愛中的困難可能會持續很長時間，但這是暫時的。可以通過積極的態度和持續的努力克服困難。',
        '你的戀愛運可能會反覆無常且難以預測。但如果耐心地發展並準備好自己，好機會總有一天會到來。',
        '戀愛中可能會有巨大的考驗，但這會讓你變得更強。如果你絕對不放棄並繼續前進，更好的緣分會到來。'
      ],
      vi: [
        'Vận tình duyên của bạn được dự đoán sẽ cực kỳ khó khăn. Tuy nhiên, nếu bạn hoàn toàn không bỏ cuộc và tiếp tục nỗ lực không ngừng, bạn cuối cùng có thể gặp một kết nối tốt sau khi thời gian trôi qua.',
        'Những khó khăn rất lớn được mong đợi trong tình yêu. Tuy nhiên, đây là một thử thách làm cho bạn mạnh mẽ hơn, và bạn có thể trở thành một người tốt hơn bằng cách vượt qua nó.',
        'Vận tình duyên của bạn có vẻ rất yếu và không ổn định. Tuy nhiên, nếu bạn tiếp tục phát triển và chuẩn bị bản thân, bạn cuối cùng có thể gặp một kết nối tốt hơn một ngày nào đó.',
        'Nhiều thử thách và sự thất vọng được mong đợi trong tình yêu. Tuy nhiên, nếu bạn hoàn toàn không bỏ cuộc và duy trì tư duy tích cực, bạn có thể vượt qua khó khăn.',
        'Vận tình duyên của bạn có thể rất không ổn định và không thể dự đoán. Tuy nhiên, nếu bạn phát triển bản thân từ từ với sự kiên nhẫn, cuối cùng sẽ có những thay đổi tốt.',
        'Có thể có những sự thất vọng và chán nản lớn trong tình yêu, nhưng đây không phải là kết thúc. Nếu bạn tiếp tục nỗ lực và tin vào bản thân, một tương lai tốt hơn sẽ đến.',
        'Vận tình duyên của bạn được dự đoán sẽ hoàn toàn đình trệ. Tuy nhiên, nếu bạn không bỏ cuộc và hoàn toàn tập trung vào sự phát triển nội tâm, bạn có thể thu hút một kết nối tốt hơn.',
        'Khó khăn trong tình yêu có thể tiếp tục trong một thời gian dài, nhưng điều này là tạm thời. Bạn có thể vượt qua khó khăn với thái độ tích cực và nỗ lực liên tục.',
        'Vận tình duyên của bạn có thể rất thất thường và không thể dự đoán. Tuy nhiên, nếu bạn phát triển và chuẩn bị bản thân với sự kiên nhẫn, những cơ hội tốt sẽ đến một ngày nào đó.',
        'Có thể có những thử thách to lớn trong tình yêu, nhưng điều này sẽ làm cho bạn mạnh mẽ hơn. Nếu bạn hoàn toàn không bỏ cuộc và tiếp tục tiến lên, một kết nối tốt hơn sẽ đến.'
      ],
      id: [
        'Nasib cinta Anda diperkirakan akan sangat sulit. Namun, jika Anda benar-benar tidak menyerah dan terus berusaha tanpa henti, Anda pada akhirnya dapat bertemu koneksi yang baik setelah waktu berlalu.',
        'Kesulitan yang sangat besar diperkirakan dalam cinta. Namun, ini adalah ujian yang membuat Anda lebih kuat, dan Anda dapat menjadi orang yang lebih baik dengan mengatasinya.',
        'Nasib cinta Anda tampaknya sangat lemah dan tidak stabil. Namun, jika Anda terus mengembangkan dan mempersiapkan diri, Anda pada akhirnya dapat bertemu koneksi yang lebih baik suatu hari nanti.',
        'Banyak ujian dan frustrasi diperkirakan dalam cinta. Namun, jika Anda benar-benar tidak menyerah dan mempertahankan pola pikir positif, Anda dapat mengatasi kesulitan.',
        'Nasib cinta Anda mungkin sangat tidak stabil dan tidak dapat diprediksi. Namun, jika Anda mengembangkan diri perlahan dengan kesabaran, pada akhirnya akan ada perubahan baik.',
        'Mungkin ada kekecewaan dan frustrasi besar dalam cinta, tetapi ini bukanlah akhirnya. Jika Anda terus berusaha dan percaya pada diri sendiri, masa depan yang lebih baik akan datang.',
        'Nasib cinta Anda diperkirakan akan benar-benar terhenti. Namun, jika Anda tidak menyerah dan benar-benar fokus pada pertumbuhan batin, Anda dapat menarik koneksi yang lebih baik.',
        'Kesulitan dalam cinta mungkin berlanjut untuk waktu yang lama, tetapi ini bersifat sementara. Anda dapat mengatasi kesulitan dengan sikap positif dan upaya yang berkelanjutan.',
        'Nasib cinta Anda mungkin sangat berubah-ubah dan tidak dapat diprediksi. Namun, jika Anda mengembangkan dan mempersiapkan diri dengan kesabaran, peluang baik akan datang suatu hari nanti.',
        'Mungkin ada ujian yang luar biasa dalam cinta, tetapi ini akan membuat Anda lebih kuat. Jika Anda benar-benar tidak menyerah dan terus maju, koneksi yang lebih baik akan datang.'
      ]
    },
    emoji: '😭',
    scoreRange: [0, 39],
    strengths: {
      ko: ['끈기', '인내심', '회복력', '성장 의지', '희망', '강인함', '불굴의 의지', '자기 신뢰', '변화 수용', '미래 지향'],
      en: ['Persistence', 'Patience', 'Resilience', 'Growth mindset', 'Hope', 'Toughness', 'Indomitable will', 'Self-confidence', 'Accepting change', 'Future-oriented'],
      ja: ['粘り強さ', '忍耐', '回復力', '成長意欲', '希望', '強靭さ', '不屈の意志', '自信', '変化の受容', '未来志向'],
      'zh-CN': ['坚持', '耐心', '恢复力', '成长意愿', '希望', '坚韧', '不屈意志', '自信', '接受变化', '面向未来'],
      'zh-TW': ['堅持', '耐心', '恢復力', '成長意願', '希望', '堅韌', '不屈意志', '自信', '接受變化', '面向未來'],
      vi: ['Sự bền bỉ', 'Kiên nhẫn', 'Khả năng phục hồi', 'Tư duy phát triển', 'Hy vọng', 'Sự cứng rắn', 'Ý chí bất khuất', 'Tự tin', 'Chấp nhận thay đổi', 'Hướng tới tương lai'],
      id: ['Ketetapan', 'Kesabaran', 'Ketahanan', 'Pola pikir pertumbuhan', 'Harapan', 'Ketangguhan', 'Kemauan yang tak kenal menyerah', 'Kepercayaan diri', 'Menerima perubahan', 'Berorientasi masa depan']
    },
    recommendations: {
      ko: ['절대 포기하지 않기', '자기개발 완전 집중', '긍정적 사고 유지', '인내심 강화', '희망 유지', '매일 긍정 다이어리', '전문가 상담 받기', '성공 경험 쌓기', '긍정적 환경 만들기', '성장 마인드셋 유지'],
      en: ['Absolutely don\'t give up', 'Fully focus on self-development', 'Maintain positive thinking', 'Strengthen patience', 'Maintain hope', 'Daily positive journaling', 'Get professional counseling', 'Build success experiences', 'Create a positive environment', 'Maintain a growth mindset'],
      ja: ['絶対に諦めない', '自己開発に完全集中', 'ポジティブ思考の維持', '忍耐の強化', '希望を維持', '毎日のポジティブな日記', '専門家のカウンセリングを受ける', '成功体験を積む', 'ポジティブな環境を作る', '成長マインドセットを維持'],
      'zh-CN': ['绝对不要放弃', '完全专注自我发展', '保持积极思考', '加强耐心', '保持希望', '每日积极日记', '接受专业咨询', '积累成功经验', '创造积极环境', '保持成长心态'],
      'zh-TW': ['絕對不要放棄', '完全專注自我發展', '保持積極思考', '加強耐心', '保持希望', '每日積極日記', '接受專業諮詢', '積累成功經驗', '創造積極環境', '保持成長心態'],
      vi: ['Tuyệt đối đừng bỏ cuộc', 'Hoàn toàn tập trung vào tự phát triển', 'Duy trì suy nghĩ tích cực', 'Tăng cường kiên nhẫn', 'Duy trì hy vọng', 'Ghi chép tích cực hàng ngày', 'Tìm tư vấn chuyên nghiệp', 'Xây dựng trải nghiệm thành công', 'Tạo môi trường tích cực', 'Duy trì tư duy phát triển'],
      id: ['Sangat tidak menyerah', 'Sepenuhnya fokus pada pengembangan diri', 'Pertahankan berpikir positif', 'Perkuat kesabaran', 'Pertahankan harapan', 'Jurnal positif harian', 'Dapatkan konseling profesional', 'Bangun pengalaman sukses', 'Ciptakan lingkungan positif', 'Pertahankan pola pikir pertumbuhan']
    },
    personality: {
      ko: [
        '끈기와 인내심이 매우 강하고 절대 포기하지 않는 사람입니다.',
        '회복력이 매우 강하여 어려움을 통해 더욱 강해질 수 있는 사람입니다.',
        '성장하려는 의지가 극도로 강하여 어려움을 배움의 기회로 여기는 사람입니다.',
        '희망을 절대 잃지 않고 긍정적으로 생각하는 능력이 있는 사람입니다.',
        '끈기와 의지력이 매우 강하여 계속 노력할 수 있는 사람입니다.'
      ],
      en: [
        'You are a person with very strong persistence and patience who absolutely does not give up.',
        'You are a person with very strong resilience who can become even stronger through difficulties.',
        'You are a person with extremely strong will to grow who sees difficulties as learning opportunities.',
        'You are a person with ability to absolutely not lose hope and think positively.',
        'You are a person with very strong persistence and willpower to continue making efforts.'
      ],
      ja: [
        '非常に強い粘り強さと忍耐があり、絶対に諦めない人です。',
        '非常に強い回復力があり、困難を通じてより強くなることのできる人です。',
        '成長しようとする意志が極めて強く、困難を学びの機会と見なす人です。',
        '希望を絶対に失わず、ポジティブに考える能力がある人です。',
        '非常に強い粘り強さと意志力があり、継続的に努力できる人です。'
      ],
      'zh-CN': [
        '你是有非常强的坚持和耐心，绝对不放弃的人。',
        '你是有很强的恢复力，可以通过困难变得更强的人。',
        '你是有极其强烈的成长意愿，将困难视为学习机会的人。',
        '你是有绝对不失去希望并积极思考的能力的人。',
        '你是有很强的坚持和意志力，能够持续努力的人。'
      ],
      'zh-TW': [
        '你是有非常強的堅持和耐心，絕對不放棄的人。',
        '你是有很強的恢復力，可以通過困難變得更強的人。',
        '你是有極其強烈的成長意願，將困難視為學習機會的人。',
        '你是有絕對不失去希望並積極思考的能力的人。',
        '你是有很強的堅持和意志力，能夠持續努力的人。'
      ],
      vi: [
        'Bạn là người có sự bền bỉ và kiên nhẫn rất mạnh mẽ hoàn toàn không bỏ cuộc.',
        'Bạn là người có khả năng phục hồi rất mạnh mẽ có thể trở nên mạnh mẽ hơn thông qua khó khăn.',
        'Bạn là người có ý chí cực kỳ mạnh mẽ để phát triển xem khó khăn là cơ hội học hỏi.',
        'Bạn là người có khả năng hoàn toàn không mất hy vọng và suy nghĩ tích cực.',
        'Bạn là người có sự bền bỉ và ý chí rất mạnh mẽ để tiếp tục nỗ lực.'
      ],
      id: [
        'Anda adalah orang dengan ketetapan dan kesabaran yang sangat kuat yang benar-benar tidak menyerah.',
        'Anda adalah orang dengan ketahanan yang sangat kuat yang dapat menjadi lebih kuat melalui kesulitan.',
        'Anda adalah orang dengan keinginan yang sangat kuat untuk tumbuh yang melihat kesulitan sebagai peluang belajar.',
        'Anda adalah orang dengan kemampuan untuk benar-benar tidak kehilangan harapan dan berpikir positif.',
        'Anda adalah orang dengan ketetapan dan kemauan yang sangat kuat untuk terus berusaha.'
      ]
    },
    advice: {
      get ko() {
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth() + 1;
        
        let periodText = '';
        if (currentMonth <= 6) {
          periodText = `${currentYear + 2}년 초 또는 중반`;
        } else if (currentMonth === 7) {
          periodText = `${currentYear + 2}년 초 또는 중반`;
        } else if (currentMonth === 8) {
          periodText = `${currentYear + 2}년 중반`;
        } else if (currentMonth === 9) {
          periodText = `${currentYear + 2}년 중반 또는 후반`;
        } else if (currentMonth === 10) {
          periodText = `${currentYear + 2}년 후반`;
        } else if (currentMonth === 11) {
          periodText = `${currentYear + 2}년 후반 또는 ${currentYear + 3}년 초`;
        } else {
          periodText = `${currentYear + 3}년 초`;
        }
        
        return [
          `${periodText} 절대 포기하지 않는 것이 가장 중요합니다. 어려움이 계속되고 매우 힘들어도 인내심을 가지고 끊임없이 노력한다면, 언젠가 반드시 좋은 변화가 있을 것입니다.`,
          '자신을 먼저 발전시키는 것에 완전히 집중하는 것이 필수적입니다. 좋은 인연을 만나기 위해서는 먼저 자신이 완전히 준비되어 있어야 하며, 내면의 성장이 가장 중요합니다.',
          '긍정적인 마음가짐을 항상 유지하는 것이 매우 중요합니다. 어려움이 있어도 긍정적으로 생각하며, 이것도 나중에 큰 도움이 될 거라고 믿는 것이 가장 중요합니다.',
          '인내심을 최대한 강화하시기 바랍니다. 연애는 시간이 많이 필요한 것이므로, 절대 서두르지 말고 천천히 자신을 발전시키며 준비하는 것이 가장 좋습니다.',
          '다양한 경험을 쌓으며 자신을 완전히 찾아가시기 바랍니다. 새로운 취미나 활동을 통해 자신의 관심사와 재능을 발견하고, 이를 바탕으로 자신을 완전히 발전시키시기 바랍니다.',
          '과거의 실패나 상처에 절대 집착하지 마시기 바랍니다. 완전히 새로운 시작을 하는 마음가짐으로 현재에 집중하며, 미래에 대한 희망을 반드시 가지시기 바랍니다.',
          '자신을 사랑하고 소중히 여기는 것이 가장 중요합니다. 다른 사람의 사랑을 받기 전에 먼저 자신을 사랑하며, 자신감을 갖는 것이 좋은 인연을 만드는 가장 중요한 첫걸음입니다.',
          '주변 사람들과의 관계를 개선하는 것이 매우 중요합니다. 가족이나 친구들과의 관계를 통해 소통 능력을 키우고, 이를 통해 더 나은 관계를 만들 수 있도록 하시기 바랍니다.',
          '변화를 절대 두려워하지 말고 적극적으로 새로운 시도를 해보시기 바랍니다. 안전지대에 머물면 발전이 전혀 없으므로, 적절한 변화와 도전은 반드시 필요합니다.',
          '희망을 절대 잃지 말고 계속 전진하시기 바랍니다. 어려움이 있어도 절대 포기하지 않고 희망을 가지며, 더 나은 미래를 위해 끊임없이 노력하시기 바랍니다.'
        ];
      },
      get en() {
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth() + 1;
        
        let periodText = '';
        if (currentMonth <= 6) {
          periodText = `Early to mid ${currentYear + 2}`;
        } else if (currentMonth === 7) {
          periodText = `Early to mid ${currentYear + 2}`;
        } else if (currentMonth === 8) {
          periodText = `Mid ${currentYear + 2}`;
        } else if (currentMonth === 9) {
          periodText = `Mid to late ${currentYear + 2}`;
        } else if (currentMonth === 10) {
          periodText = `Late ${currentYear + 2}`;
        } else if (currentMonth === 11) {
          periodText = `Late ${currentYear + 2} or early ${currentYear + 3}`;
        } else {
          periodText = `Early ${currentYear + 3}`;
        }
        
        return [
          `Absolutely not giving up is most important in ${periodText}. Even if difficulties continue and are very hard, if you continue to make efforts with patience, there will definitely be good changes someday.`,
          'It is essential to fully focus on developing yourself first. To meet good connections, you must first be completely prepared, and inner growth is most important.',
          'It is very important to always maintain a positive mindset. Even if there are difficulties, think positively, and it is most important to believe that this will also be very helpful later.',
          'Please maximize patience. Love requires much time, so absolutely do not rush and it is best to slowly develop and prepare yourself.',
          'Please build various experiences while completely finding yourself. Discover your interests and talents through new hobbies or activities, and completely develop yourself based on this.',
          'Please absolutely do not be obsessed with past failures or wounds. Focus on the present with a mindset of completely starting fresh, and please definitely have hope for the future.',
          'Loving and cherishing yourself is most important. Before receiving love from others, first love yourself, and having confidence is the most important first step to creating good connections.',
          'It is very important to improve relationships with people around you. Develop communication skills through relationships with family or friends, and please make it so you can build better relationships through this.',
          'Please absolutely do not be afraid of change and actively try new attempts. If you stay in your comfort zone, there will be no development at all, so appropriate changes and challenges are definitely necessary.',
          'Please absolutely do not lose hope and continue to move forward. Even if there are difficulties, absolutely do not give up and maintain hope, and please continue to make efforts constantly for a better future.'
        ];
      },
      get ja() {
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth() + 1;
        
        let periodText = '';
        if (currentMonth <= 6) {
          periodText = `${currentYear + 2}年初または中旬`;
        } else if (currentMonth === 7) {
          periodText = `${currentYear + 2}年初または中旬`;
        } else if (currentMonth === 8) {
          periodText = `${currentYear + 2}年中旬`;
        } else if (currentMonth === 9) {
          periodText = `${currentYear + 2}年中旬または後半`;
        } else if (currentMonth === 10) {
          periodText = `${currentYear + 2}年後半`;
        } else if (currentMonth === 11) {
          periodText = `${currentYear + 2}年後半または${currentYear + 3}年初`;
        } else {
          periodText = `${currentYear + 3}年初`;
        }
        
        return [
          `${periodText}絶対に諦めないことが最も重要です。困難が続き非常に大変でも、忍耐力を持って絶え間なく努力すれば、いつか必ず良い変化があるでしょう。`,
          'まず自分を発展させることに完全に集中することが必須です。良い縁に会うためにはまず自分が完全に準備されている必要があり、内面の成長が最も重要です。',
          '常にポジティブな心構えを維持することが非常に重要です。困難があってもポジティブに考え、これも後で大きな役に立つと信じることが最も重要です。',
          '忍耐を最大化してください。恋愛には多くの時間が必要なため、絶対に急がず、ゆっくりと自分を発展させ準備することが最も良いです。',
          '様々な経験を積みながら完全に自分を見つけてください。新しい趣味や活動を通じて自分の興味と才能を発見し、これを基に自分を完全に発展させてください。',
          '過去の失敗や傷に絶対に執着しないでください。完全に新しいスタートを切る心構えで現在に集中し、未来への希望を必ず持ってください。',
          '自分を愛し大切にすることは最も重要です。他の人の愛を受ける前に、まず自分を愛し、自信を持つことが良い縁を作る最も重要な第一歩です。',
          '周りの人々との関係を改善することは非常に重要です。家族や友人との関係を通じてコミュニケーション能力を育て、これを通じてより良い関係を作ることができるようにしてください。',
          '変化を絶対に恐れず、積極的に新しい試みをしてみてください。安全地帯に留まると発展が全くないため、適切な変化と挑戦は必ず必要です。',
          '希望を絶対に失わずに前進を続けてください。困難があっても絶対に諦めずに希望を持ち、より良い未来のために絶え間なく努力してください。'
        ];
      },
      get 'zh-CN'() {
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth() + 1;
        
        let periodText = '';
        if (currentMonth <= 6) {
          periodText = `${currentYear + 2}年初或中期`;
        } else if (currentMonth === 7) {
          periodText = `${currentYear + 2}年初或中期`;
        } else if (currentMonth === 8) {
          periodText = `${currentYear + 2}年中期`;
        } else if (currentMonth === 9) {
          periodText = `${currentYear + 2}年中期或后期`;
        } else if (currentMonth === 10) {
          periodText = `${currentYear + 2}年后期`;
        } else if (currentMonth === 11) {
          periodText = `${currentYear + 2}年后期或${currentYear + 3}年初`;
        } else {
          periodText = `${currentYear + 3}年初`;
        }
        
        return [
          `${periodText}绝对不放弃是最重要的。即使困难持续且非常艰难，如果继续耐心努力，总有一天一定会有好的变化。`,
          '完全专注于首先发展自己是必需的。要遇到好的缘分，必须先完全准备好自己，内在成长是最重要的。',
          '始终保持积极的心态非常重要。即使有困难也要积极思考，相信这对以后会有很大帮助，这是最重要的。',
          '最大限度地加强耐心。爱情需要很多时间，所以绝对不要急于求成，慢慢发展并准备好自己是最好的。',
          '积累各种经验的同时完全找到自己。通过新的爱好或活动发现自己的兴趣和才能，并基于此完全发展自己。',
          '绝对不要执着于过去的失败或伤痛。以完全新的开始的心态专注于现在，一定要对未来抱有希望。',
          '爱自己并珍惜自己是最重要的。在得到别人的爱之前，先要爱自己，拥有自信是建立好缘分最重要的第一步。',
          '改善与周围人的关系非常重要。通过与家人或朋友的关系发展沟通能力，可以通过此建立更好的关系。',
          '绝对不要害怕变化，积极尝试新的事物。停留在舒适区不会有任何发展，适当的变化和挑战是必须的。',
          '绝对不要失去希望，继续前进。即使有困难也绝对不要放弃，保持希望，持续为更好的未来努力。'
        ];
      },
      get 'zh-TW'() {
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth() + 1;
        
        let periodText = '';
        if (currentMonth <= 6) {
          periodText = `${currentYear + 2}年初或中期`;
        } else if (currentMonth === 7) {
          periodText = `${currentYear + 2}年初或中期`;
        } else if (currentMonth === 8) {
          periodText = `${currentYear + 2}年中期`;
        } else if (currentMonth === 9) {
          periodText = `${currentYear + 2}年中期或後期`;
        } else if (currentMonth === 10) {
          periodText = `${currentYear + 2}年後期`;
        } else if (currentMonth === 11) {
          periodText = `${currentYear + 2}年後期或${currentYear + 3}年初`;
        } else {
          periodText = `${currentYear + 3}年初`;
        }
        
        return [
          `${periodText}絕對不放棄是最重要的。即使困難持續且非常艱難，如果繼續耐心努力，總有一天一定會有好的變化。`,
          '完全專注於首先發展自己是必需的。要遇到好的緣分，必須先完全準備好自己，內在成長是最重要的。',
          '始終保持積極的心態非常重要。即使有困難也要積極思考，相信這對以後會有很大幫助，這是最重要的。',
          '最大限度地加強耐心。愛情需要很多時間，所以絕對不要急於求成，慢慢發展並準備好自己是最好的。',
          '積累各種經驗的同時完全找到自己。通過新的愛好或活動發現自己的興趣和才能，並基於此完全發展自己。',
          '絕對不要執著於過去的失敗或傷痛。以完全新的開始的心態專注於現在，一定要對未來抱有希望。',
          '愛自己並珍惜自己是最重要的。在得到別人的愛之前，先要愛自己，擁有自信是建立好緣分最重要的第一步。',
          '改善與周圍人的關係非常重要。通過與家人或朋友的關係發展溝通能力，可以通過此建立更好的關係。',
          '絕對不要害怕變化，積極嘗試新的事物。停留在舒適區不會有任何發展，適當的變化和挑戰是必須的。',
          '絕對不要失去希望，繼續前進。即使有困難也絕對不要放棄，保持希望，持續為更好的未來努力。'
        ];
      },
      get vi() {
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth() + 1;
        
        let periodText = '';
        if (currentMonth <= 6) {
          periodText = `Đầu đến giữa ${currentYear + 2}`;
        } else if (currentMonth === 7) {
          periodText = `Đầu đến giữa ${currentYear + 2}`;
        } else if (currentMonth === 8) {
          periodText = `Giữa ${currentYear + 2}`;
        } else if (currentMonth === 9) {
          periodText = `Giữa đến cuối ${currentYear + 2}`;
        } else if (currentMonth === 10) {
          periodText = `Cuối ${currentYear + 2}`;
        } else if (currentMonth === 11) {
          periodText = `Cuối ${currentYear + 2} hoặc đầu ${currentYear + 3}`;
        } else {
          periodText = `Đầu ${currentYear + 3}`;
        }
        
        return [
          `${periodText} hoàn toàn không bỏ cuộc là quan trọng nhất. Ngay cả khi khó khăn tiếp tục và rất khó khăn, nếu bạn tiếp tục nỗ lực với sự kiên nhẫn, một ngày nào đó chắc chắn sẽ có những thay đổi tốt.`,
          'Việc hoàn toàn tập trung vào phát triển bản thân trước là điều cần thiết. Để gặp được duyên tốt, bạn phải chuẩn bị sẵn sàng hoàn toàn trước, sự phát triển nội tâm là quan trọng nhất.',
          'Việc luôn duy trì tư duy tích cực là rất quan trọng. Ngay cả khi có khó khăn hãy suy nghĩ tích cực, tin rằng điều này sẽ rất hữu ích sau này, điều này là quan trọng nhất.',
          'Tối đa hóa sự kiên nhẫn. Tình yêu cần rất nhiều thời gian, vì vậy tuyệt đối đừng vội vàng, phát triển và chuẩn bị bản thân từ từ là tốt nhất.',
          'Xây dựng các trải nghiệm khác nhau trong khi hoàn toàn tìm hiểu bản thân. Khám phá sở thích và tài năng của bạn qua sở thích hoặc hoạt động mới, và hoàn toàn phát triển bản thân dựa trên điều này.',
          'Tuyệt đối đừng ám ảnh về những thất bại hoặc vết thương trong quá khứ. Tập trung vào hiện tại với tâm trí hoàn toàn khởi đầu mới, và hãy chắc chắn có hy vọng cho tương lai.',
          'Yêu và trân trọng bản thân là quan trọng nhất. Trước khi nhận được tình yêu từ người khác, hãy yêu bản thân trước, và có tự tin là bước đầu tiên quan trọng nhất để tạo ra duyên tốt.',
          'Cải thiện mối quan hệ với những người xung quanh là rất quan trọng. Phát triển kỹ năng giao tiếp thông qua mối quan hệ với gia đình hoặc bạn bè, và hãy làm sao để bạn có thể xây dựng mối quan hệ tốt hơn thông qua điều này.',
          'Tuyệt đối đừng sợ thay đổi và tích cực thử những điều mới. Nếu bạn ở trong vùng an toàn của mình, sẽ không có phát triển gì cả, vì vậy những thay đổi và thử thách phù hợp là hoàn toàn cần thiết.',
          'Tuyệt đối đừng mất hy vọng và tiếp tục tiến lên. Ngay cả khi có khó khăn cũng tuyệt đối đừng bỏ cuộc và duy trì hy vọng, và hãy tiếp tục nỗ lực liên tục cho một tương lai tốt hơn.'
        ];
      },
      get id() {
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth() + 1;
        
        let periodText = '';
        if (currentMonth <= 6) {
          periodText = `Awal hingga pertengahan ${currentYear + 2}`;
        } else if (currentMonth === 7) {
          periodText = `Awal hingga pertengahan ${currentYear + 2}`;
        } else if (currentMonth === 8) {
          periodText = `Pertengahan ${currentYear + 2}`;
        } else if (currentMonth === 9) {
          periodText = `Pertengahan hingga akhir ${currentYear + 2}`;
        } else if (currentMonth === 10) {
          periodText = `Akhir ${currentYear + 2}`;
        } else if (currentMonth === 11) {
          periodText = `Akhir ${currentYear + 2} atau awal ${currentYear + 3}`;
        } else {
          periodText = `Awal ${currentYear + 3}`;
        }
        
        return [
          `${periodText} sangat tidak menyerah adalah yang paling penting. Meskipun kesulitan terus berlanjut dan sangat sulit, jika Anda terus berusaha dengan kesabaran, suatu hari pasti akan ada perubahan baik.`,
          'Penting untuk sepenuhnya fokus pada pengembangan diri terlebih dahulu. Untuk bertemu dengan koneksi yang baik, Anda harus siap sepenuhnya terlebih dahulu, pertumbuhan batin adalah yang paling penting.',
          'Sangat penting untuk selalu mempertahankan pola pikir positif. Meskipun ada kesulitan, berpikirlah positif, percayalah bahwa ini juga akan sangat membantu di kemudian hari, ini adalah yang paling penting.',
          'Maksimalkan kesabaran. Cinta membutuhkan banyak waktu, jadi sangat jangan terburu-buru, perlahan-lahan kembangkan dan siapkan diri adalah yang terbaik.',
          'Bangun berbagai pengalaman sambil sepenuhnya menemukan diri sendiri. Temukan minat dan bakat Anda melalui hobi atau aktivitas baru, dan sepenuhnya kembangkan diri berdasarkan hal ini.',
          'Sangat jangan terobsesi dengan kegagalan atau luka masa lalu. Fokus pada sekarang dengan pola pikir memulai yang benar-benar baru, dan harap pastikan memiliki harapan untuk masa depan.',
          'Mencintai dan menghargai diri sendiri sangat penting. Sebelum menerima cinta dari orang lain, cintai diri sendiri terlebih dahulu, dan memiliki kepercayaan diri adalah langkah pertama yang paling penting untuk menciptakan koneksi yang baik.',
          'Tingkatkan hubungan dengan orang-orang di sekitar Anda sangat penting. Kembangkan keterampilan komunikasi melalui hubungan dengan keluarga atau teman, dan harap buat agar Anda dapat membangun hubungan yang lebih baik melalui ini.',
          'Sangat jangan takut perubahan dan aktif mencoba hal-hal baru. Jika Anda tetap dalam zona nyaman Anda, tidak akan ada perkembangan sama sekali, jadi perubahan dan tantangan yang sesuai pasti diperlukan.',
          'Sangat jangan kehilangan harapan dan terus maju. Meskipun ada kesulitan, sangat jangan menyerah dan pertahankan harapan, dan harap terus berusaha tanpa henti untuk masa depan yang lebih baik.'
        ];
      }
    },
    fortune: {
      when: {
        get ko() {
          const now = new Date();
          const currentMonth = now.getMonth() + 1;
          
          let when1, when2, when3, when4;
          
          if (currentMonth <= 6) {
            when1 = getFutureMonthShort(6);
            when2 = getFutureMonthShort(7);
            when3 = getFutureMonthShort(8);
            when4 = getFutureMonthShort(9);
          } else {
            when1 = getFutureMonthShort(6);
            when2 = getFutureMonthShort(7);
            when3 = getFutureMonthShort(8);
            when4 = getFutureMonthShort(9);
          }
          
          return [
            `${when1} 또는 ${when2} 새로운 시작을 준비하는 매우 중요한 시기입니다. 과거의 모든 어려움을 잊고 완전히 새로운 마음으로 시작하며, 긍정적인 변화를 만들어가시기 바랍니다.`,
            `${when2} 또는 ${when3} 인내심을 가지고 끊임없이 노력한다면 작은 변화가 있을 수 있는 시기입니다. 절대 포기하지 않고 계속 노력하면 점진적으로 좋은 결과를 얻을 수 있을 것입니다.`,
            `${when1} 자신을 발전시키는 것에 완전히 집중하는 것이 매우 중요한 시기입니다. 새로운 인연을 만나기 전에 자신을 완전히 준비하고, 성장한 모습으로 더 나은 인연을 끌어들일 수 있습니다.`,
            `${when3} 또는 ${when4} 시간이 많이 지나면서 작은 변화가 예상되는 시기입니다. 절대 급하게 진행하지 말고 천천히 자신을 발전시키며, 인내심을 가지고 기다리시기 바랍니다.`,
            `${when2} 작은 만남들이 쌓여 나중에 좋은 인연으로 발전할 수 있는 시기입니다. 작은 것부터 시작하여 점진적으로 관계를 발전시키며, 절대 포기하지 않는 것이 중요합니다.`,
            `${when1} 또는 ${when2} 새로운 관점으로 자신과 관계를 바라볼 수 있는 시기입니다. 과거의 모든 경험을 바탕으로 더 나은 관계를 만들어 나갈 수 있는 기회입니다.`,
            `${when3} 또는 ${when4} 어려움을 극복하며 조금씩 발전할 수 있는 시기입니다. 갈등이나 오해가 있어도 인내심을 가지고 솔직한 대화를 통해 반드시 해결할 수 있을 것입니다.`,
            `${when2} 일상 속에서 예상치 못한 작은 만남이 있을 수 있는 시기입니다. 평범해 보이는 순간에도 작은 인연의 씨앗이 숨어 있을 수 있으므로, 주변을 매우 주의 깊게 둘러보시기 바랍니다.`,
            `${when1} 또는 ${when3} 자신의 관심사와 취미를 통해 새로운 사람들을 만날 수 있는 시기입니다. 공통 관심사를 가진 사람들과 만나며 자연스럽게 인연이 시작될 수 있습니다.`,
            `${when2} 또는 ${when4} 긍정적인 변화가 예상되는 시기입니다. 절대 포기하지 않고 계속 노력하며 인내심을 가지고 전진한다면, 점진적으로 만족스러운 결과를 얻을 수 있을 것입니다.`
          ];
        },
        get en() {
          const now = new Date();
          const currentMonth = now.getMonth() + 1;
          const currentYear = now.getFullYear();
          
          let when1, when2, when3, when4;
          
          const future6 = new Date(now.getFullYear(), now.getMonth() + 6, 1);
          const future7 = new Date(now.getFullYear(), now.getMonth() + 7, 1);
          const future8 = new Date(now.getFullYear(), now.getMonth() + 8, 1);
          const future9 = new Date(now.getFullYear(), now.getMonth() + 9, 1);
          
          const getMonthStr = (date: Date) => {
            const monthName = date.toLocaleString('en-US', { month: 'long' });
            if (date.getFullYear() > currentYear) {
              return `Next ${monthName}`;
            }
            return monthName;
          };
          
          when1 = getMonthStr(future6);
          when2 = getMonthStr(future7);
          when3 = getMonthStr(future8);
          when4 = getMonthStr(future9);
          
          return [
            `${when1} or ${when2} is a very important time when you can prepare for a new start. Forget all past difficulties and start with a completely new heart, and please create positive changes.`,
            `${when2} or ${when3} is a time when there may be small changes if you have patience and make continuous efforts. If you continue to make efforts without absolutely giving up, you can gradually achieve good results.`,
            `${when1} is a very important time to fully focus on developing yourself. Before meeting new connections, completely prepare yourself, and you can attract better connections as a grown person.`,
            `${when3} or ${when4} is a time when small changes may be expected after much time passes. Absolutely do not proceed hastily and slowly develop yourself, and please wait with patience.`,
            `${when2} is a time when small meetings can accumulate and develop into good connections later. Start with small things and gradually develop relationships, and absolutely not giving up is important.`,
            `${when1} or ${when2} is a time when you can view yourself and relationships from a new perspective. It is an opportunity to build better relationships based on all past experiences.`,
            `${when3} or ${when4} is a time when you can develop little by little while overcoming difficulties. Even if there are conflicts or misunderstandings, you can definitely resolve them through patient and honest conversations.`,
            `In ${when2}, there may be unexpected small meetings in daily life. Even in seemingly ordinary moments, seeds of small connections may be hidden, so please look around you very carefully.`,
            `${when1} or ${when3} is a time when you can meet new people through your interests and hobbies. Meeting people with common interests can naturally start connections.`,
            `${when2} or ${when4} is a time when positive changes are expected. If you continue to make efforts without absolutely giving up and move forward with patience, you can gradually achieve satisfying results.`
          ];
        },
        get ja() {
          const now = new Date();
          const currentMonth = now.getMonth() + 1;
          const currentYear = now.getFullYear();
          
          let when1, when2, when3, when4;
          
          const future6 = new Date(now.getFullYear(), now.getMonth() + 6, 1);
          const future7 = new Date(now.getFullYear(), now.getMonth() + 7, 1);
          const future8 = new Date(now.getFullYear(), now.getMonth() + 8, 1);
          const future9 = new Date(now.getFullYear(), now.getMonth() + 9, 1);
          
          const getMonthStr = (date: Date) => {
            const monthName = date.toLocaleString('ja-JP', { month: 'long' });
            if (date.getFullYear() > currentYear) {
              return `来年${monthName}`;
            }
            return monthName;
          };
          
          when1 = getMonthStr(future6);
          when2 = getMonthStr(future7);
          when3 = getMonthStr(future8);
          when4 = getMonthStr(future9);
          
          return [
            `${when1}または${when2}は非常に重要な新しい始まりを準備することができる時期です。過去のすべての困難を忘れ、完全に新しい心で始め、ポジティブな変化を作ってください。`,
            `${when2}または${when3}は忍耐力を持って絶え間なく努力すれば小さな変化があるかもしれない時期です。絶対に諦めずに努力を続ければ、段階的に良い結果を得られるでしょう。`,
            `${when1}は自分を発展させることに完全に集中することが非常に重要な時期です。新しい縁に会う前に自分を完全に準備し、成長した姿でより良い縁を引き寄せることができます。`,
            `${when3}または${when4}は多くの時間が経った後、小さな変化が予想される時期です。絶対に急いで進めず、ゆっくりと自分を発展させ、忍耐力を持って待ってください。`,
            `${when2}は小さな出会いが積み重なって後で良い縁に発展することができる時期です。小さなことから始めて段階的に関係を発展させ、絶対に諦めないことが重要です。`,
            `${when1}または${when2}は新しい視点で自分と関係を見ることができる時期です。過去のすべての経験を基に、より良い関係を作ることができる機会です。`,
            `${when3}または${when4}は困難を克服しながら少しずつ発展できる時期です。対立や誤解があっても、忍耐力を持って正直な対話を通じて必ず解決できるでしょう。`,
            `${when2}には日常の中で予想外の小さな出会いがあるかもしれません。平凡に見える瞬間にも小さな縁の種が隠れている可能性があるため、周りを非常に注意深く見回してください。`,
            `${when1}または${when3}は自分の興味や趣味を通じて新しい人々に会える時期です。共通の興味を持つ人々と出会い、自然に縁が始まることができます。`,
            `${when2}または${when4}はポジティブな変化が予想される時期です。絶対に諦めずに努力を続け、忍耐力を持って前進すれば、段階的に満足のいく結果を得られるでしょう。`
          ];
        },
        get 'zh-CN'() {
          const now = new Date();
          const currentMonth = now.getMonth() + 1;
          const currentYear = now.getFullYear();
          
          let when1, when2, when3, when4;
          
          const future6 = new Date(now.getFullYear(), now.getMonth() + 6, 1);
          const future7 = new Date(now.getFullYear(), now.getMonth() + 7, 1);
          const future8 = new Date(now.getFullYear(), now.getMonth() + 8, 1);
          const future9 = new Date(now.getFullYear(), now.getMonth() + 9, 1);
          
          const getMonthStr = (date: Date) => {
            const monthNames = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
            const monthName = monthNames[date.getMonth()];
            if (date.getFullYear() > currentYear) {
              return `明年${monthName}`;
            }
            return monthName;
          };
          
          when1 = getMonthStr(future6);
          when2 = getMonthStr(future7);
          when3 = getMonthStr(future8);
          when4 = getMonthStr(future9);
          
          return [
            `${when1}或${when2}是准备新开始的非常重要的时期。忘记所有过去的困难，以完全新的心态开始，创造积极的变化。`,
            `${when2}或${when3}如果有耐心并持续努力，可能会有小的变化。绝对不放弃继续努力，可以逐步获得好结果。`,
            `${when1}是完全专注于发展自己的非常重要的时期。在遇到新缘分之前，先完全准备好自己，以成长的样子吸引更好的缘分。`,
            `${when3}或${when4}经过很长时间后，可能会预期有小的变化。绝对不要急于求成，慢慢发展自己，耐心等待。`,
            `${when2}小的相遇可以累积，后来可以发展成好的缘分。从小事开始，逐步发展关系，绝对不放弃很重要。`,
            `${when1}或${when2}可以从新的角度看待自己和关系。基于所有过去的经验，可以建立更好的关系。`,
            `${when3}或${when4}可以在克服困难的同时逐步发展。即使有冲突或误解，也可以通过耐心和真诚的对话一定解决。`,
            `${when2}在日常生活中可能会有意想不到的小相遇。即使在看似平凡的时刻，也可能隐藏着小缘分的种子。`,
            `${when1}或${when3}可以通过自己的兴趣和爱好遇到新的人。与有共同兴趣的人相遇，可以自然地开始缘分。`,
            `${when2}或${when4}预期会有积极的变化。绝对不放弃继续努力，耐心前进，可以逐步获得满意的结果。`
          ];
        },
        get 'zh-TW'() {
          const now = new Date();
          const currentMonth = now.getMonth() + 1;
          const currentYear = now.getFullYear();
          
          let when1, when2, when3, when4;
          
          const future6 = new Date(now.getFullYear(), now.getMonth() + 6, 1);
          const future7 = new Date(now.getFullYear(), now.getMonth() + 7, 1);
          const future8 = new Date(now.getFullYear(), now.getMonth() + 8, 1);
          const future9 = new Date(now.getFullYear(), now.getMonth() + 9, 1);
          
          const getMonthStr = (date: Date) => {
            const monthNames = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
            const monthName = monthNames[date.getMonth()];
            if (date.getFullYear() > currentYear) {
              return `明年${monthName}`;
            }
            return monthName;
          };
          
          when1 = getMonthStr(future6);
          when2 = getMonthStr(future7);
          when3 = getMonthStr(future8);
          when4 = getMonthStr(future9);
          
          return [
            `${when1}或${when2}是準備新開始的非常重要的時期。忘記所有過去的困難，以完全新的心態開始，創造積極的變化。`,
            `${when2}或${when3}如果有耐心並持續努力，可能會有小的變化。絕對不放棄繼續努力，可以逐步獲得好結果。`,
            `${when1}是完全專注於發展自己的非常重要的時期。在遇到新緣分之前，先完全準備好自己，以成長的樣子吸引更好的緣分。`,
            `${when3}或${when4}經過很長時間後，可能會預期有小的變化。絕對不要急於求成，慢慢發展自己，耐心等待。`,
            `${when2}小的相遇可以累積，後來可以發展成好的緣分。從小事開始，逐步發展關係，絕對不放棄很重要。`,
            `${when1}或${when2}可以從新的角度看待自己和關係。基於所有過去的經驗，可以建立更好的關係。`,
            `${when3}或${when4}可以在克服困難的同時逐步發展。即使有衝突或誤解，也可以通過耐心和真誠的對話一定解決。`,
            `${when2}在日常生活中可能會有意想不到的小相遇。即使在看似平凡的時刻，也可能隱藏著小緣分的種子。`,
            `${when1}或${when3}可以通過自己的興趣和愛好遇到新的人。與有共同興趣的人相遇，可以自然地開始緣分。`,
            `${when2}或${when4}預計會有積極的變化。絕對不放棄繼續努力，耐心前進，可以逐步獲得滿意的結果。`
          ];
        },
        get vi() {
          const now = new Date();
          const currentMonth = now.getMonth() + 1;
          const currentYear = now.getFullYear();
          
          let when1, when2, when3, when4;
          
          const future6 = new Date(now.getFullYear(), now.getMonth() + 6, 1);
          const future7 = new Date(now.getFullYear(), now.getMonth() + 7, 1);
          const future8 = new Date(now.getFullYear(), now.getMonth() + 8, 1);
          const future9 = new Date(now.getFullYear(), now.getMonth() + 9, 1);
          
          const getMonthStr = (date: Date) => {
            const monthNames = ['tháng 1', 'tháng 2', 'tháng 3', 'tháng 4', 'tháng 5', 'tháng 6', 'tháng 7', 'tháng 8', 'tháng 9', 'tháng 10', 'tháng 11', 'tháng 12'];
            const monthName = monthNames[date.getMonth()];
            if (date.getFullYear() > currentYear) {
              return `${monthName} năm sau`;
            }
            return monthName;
          };
          
          when1 = getMonthStr(future6);
          when2 = getMonthStr(future7);
          when3 = getMonthStr(future8);
          when4 = getMonthStr(future9);
          
          return [
            `${when1} hoặc ${when2} là thời điểm rất quan trọng có thể chuẩn bị cho một khởi đầu mới. Quên đi tất cả những khó khăn trong quá khứ, bắt đầu với tâm trí hoàn toàn mới, tạo ra những thay đổi tích cực.`,
            `${when2} hoặc ${when3} là thời điểm có thể có những thay đổi nhỏ nếu bạn có sự kiên nhẫn và nỗ lực liên tục. Nếu tuyệt đối không bỏ cuộc và tiếp tục nỗ lực, bạn có thể dần dần đạt được kết quả tốt.`,
            `${when1} là thời điểm rất quan trọng để hoàn toàn tập trung vào việc phát triển bản thân. Trước khi gặp duyên mới, hãy chuẩn bị hoàn toàn sẵn sàng, và bạn có thể thu hút duyên tốt hơn với hình ảnh đã phát triển.`,
            `${when3} hoặc ${when4} là thời điểm có thể mong đợi những thay đổi nhỏ sau khi nhiều thời gian trôi qua. Tuyệt đối đừng vội vàng, phát triển bản thân từ từ, và hãy kiên nhẫn chờ đợi.`,
            `${when2} là thời điểm các cuộc gặp gỡ nhỏ có thể tích lũy và phát triển thành duyên tốt sau này. Bắt đầu từ những việc nhỏ và dần dần phát triển mối quan hệ, tuyệt đối không bỏ cuộc là quan trọng.`,
            `${when1} hoặc ${when2} là thời điểm bạn có thể nhìn bản thân và mối quan hệ từ góc độ mới. Đây là cơ hội để xây dựng mối quan hệ tốt hơn dựa trên tất cả kinh nghiệm quá khứ.`,
            `${when3} hoặc ${when4} là thời điểm bạn có thể phát triển từng chút một trong khi vượt qua khó khăn. Ngay cả khi có xung đột hoặc hiểu lầm, bạn có thể chắc chắn giải quyết thông qua đối thoại kiên nhẫn và chân thành.`,
            `Trong ${when2}, có thể có những cuộc gặp gỡ nhỏ bất ngờ trong cuộc sống hàng ngày. Ngay cả trong những khoảnh khắc tưởng chừng bình thường, cũng có thể ẩn chứa hạt giống của duyên nhỏ.`,
            `${when1} hoặc ${when3} là thời điểm bạn có thể gặp những người mới qua sở thích và sở thích của mình. Gặp gỡ những người có sở thích chung có thể tự nhiên bắt đầu duyên.`,
            `${when2} hoặc ${when4} là thời điểm có thể mong đợi những thay đổi tích cực. Nếu tiếp tục nỗ lực tuyệt đối không bỏ cuộc và tiến lên với sự kiên nhẫn, bạn có thể dần dần đạt được kết quả hài lòng.`
          ];
        },
        get id() {
          const now = new Date();
          const currentMonth = now.getMonth() + 1;
          const currentYear = now.getFullYear();
          
          let when1, when2, when3, when4;
          
          const future6 = new Date(now.getFullYear(), now.getMonth() + 6, 1);
          const future7 = new Date(now.getFullYear(), now.getMonth() + 7, 1);
          const future8 = new Date(now.getFullYear(), now.getMonth() + 8, 1);
          const future9 = new Date(now.getFullYear(), now.getMonth() + 9, 1);
          
          const getMonthStr = (date: Date) => {
            const monthNames = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
            const monthName = monthNames[date.getMonth()];
            if (date.getFullYear() > currentYear) {
              return `${monthName} tahun depan`;
            }
            return monthName;
          };
          
          when1 = getMonthStr(future6);
          when2 = getMonthStr(future7);
          when3 = getMonthStr(future8);
          when4 = getMonthStr(future9);
          
          return [
            `${when1} atau ${when2} adalah waktu yang sangat penting ketika Anda dapat mempersiapkan awal baru. Lupakan semua kesulitan masa lalu, mulai dengan pikiran yang benar-benar baru, ciptakan perubahan positif.`,
            `${when2} atau ${when3} adalah waktu ketika mungkin ada perubahan kecil jika Anda memiliki kesabaran dan melakukan upaya berkelanjutan. Jika benar-benar tidak menyerah dan terus berusaha, Anda dapat secara bertahap mencapai hasil yang baik.`,
            `${when1} adalah waktu yang sangat penting untuk sepenuhnya fokus pada pengembangan diri. Sebelum bertemu koneksi baru, siapkan diri sepenuhnya, dan Anda dapat menarik koneksi yang lebih baik sebagai orang yang telah berkembang.`,
            `${when3} atau ${when4} adalah waktu ketika perubahan kecil dapat diharapkan setelah banyak waktu berlalu. Sangat jangan terburu-buru, kembangkan diri perlahan, dan harap tunggu dengan kesabaran.`,
            `${when2} adalah waktu ketika pertemuan kecil dapat terakumulasi dan berkembang menjadi koneksi yang baik di kemudian hari. Mulai dari hal-hal kecil dan kembangkan hubungan secara bertahap, sangat tidak menyerah adalah penting.`,
            `${when1} atau ${when2} adalah waktu ketika Anda dapat melihat diri sendiri dan hubungan dari perspektif baru. Ini adalah kesempatan untuk membangun hubungan yang lebih baik berdasarkan semua pengalaman masa lalu.`,
            `${when3} atau ${when4} adalah waktu ketika Anda dapat berkembang sedikit demi sedikit sambil mengatasi kesulitan. Bahkan jika ada konflik atau kesalahpahaman, Anda dapat pasti menyelesaikannya melalui percakapan yang sabar dan jujur.`,
            `Di ${when2}, mungkin ada pertemuan kecil yang tak terduga dalam kehidupan sehari-hari. Bahkan dalam momen yang tampaknya biasa, mungkin tersembunyi benih koneksi kecil.`,
            `${when1} atau ${when3} adalah waktu ketika Anda dapat bertemu orang baru melalui minat dan hobi Anda. Bertemu dengan orang yang memiliki minat bersama dapat secara alami memulai koneksi.`,
            `${when2} atau ${when4} adalah waktu ketika perubahan positif diharapkan. Jika terus berusaha benar-benar tidak menyerah dan maju dengan kesabaran, Anda dapat secara bertahap mencapai hasil yang memuaskan.`
          ];
        }
      },
      style: {
        ko: [
          '끈기와 인내심이 극도로 강하고 절대 포기하지 않는 사람입니다. 어려움을 극복하며 계속 성장할 수 있는 사람이며, 매우 장기적인 관점을 가진 사람입니다.',
          '회복력이 극도로 강하고 어려움을 통해 더욱 강해질 수 있는 사람입니다. 실패해도 다시 일어설 수 있으며, 경험을 통해 더 나은 선택을 할 수 있는 사람입니다.',
          '성장하려는 의지가 극도로 강한 사람입니다. 어려움을 배움의 기회로 여기며, 끊임없이 발전하려고 노력하는 사람입니다.',
          '긍정적인 사고를 가지고 있어 희망을 절대 잃지 않는 사람입니다. 어려움이 있어도 긍정적으로 생각하며, 좋은 변화가 있을 것이라고 믿는 사람입니다.',
          '솔직하고 정직한 성격의 사람입니다. 거짓 없이 마음을 완전히 열 수 있으며, 진실한 대화를 통해 문제를 해결할 수 있는 사람입니다.',
          '배려심이 있고 이해심이 매우 깊은 사람입니다. 상대방의 감정을 이해하고 공감하며, 서로를 지지할 수 있는 사람입니다.',
          '현실적이면서도 희망적인 사고를 하는 사람입니다. 현실을 직시하면서도 긍정적인 미래를 그리는 사람이며, 매우 균형감이 있는 사람입니다.',
          '노력하는 자세를 가지고 있어 계속 발전할 수 있는 사람입니다. 절대 포기하지 않고 꾸준히 노력하며, 작은 성공을 쌓아가는 사람입니다.',
          '독립적이면서도 협력할 수 있는 사람입니다. 자신의 공간을 중요하게 생각하지만, 필요할 때 상대방과 협력할 수 있는 사람입니다.',
          '자신을 매우 잘 알고 있는 사람입니다. 자신의 강점과 약점을 알고 있으며, 이를 바탕으로 발전하려고 끊임없이 노력하는 사람입니다.'
        ],
        en: [
          'A person with extremely strong persistence and patience who absolutely does not give up. They are people who can continue to grow while overcoming difficulties, and have a very long-term perspective.',
          'A person with extremely strong resilience who can become even stronger through difficulties. They can stand up again even after failure, and are people who can make better choices through experience.',
          'A person with extremely strong will to grow. They see difficulties as learning opportunities, and are people who continuously work to develop without stopping.',
          'A person with positive thinking who absolutely does not lose hope. Even if there are difficulties, they think positively and believe that good changes will come.',
          'A person with an honest and sincere personality. They can completely open their heart without falsehood, and are people who can solve problems through truthful conversations.',
          'A person with a caring and very understanding heart. They understand and empathize with their partner\'s emotions, and are people who can support each other.',
          'A person with realistic yet hopeful thinking. They face reality while drawing a positive future, and are very balanced people.',
          'A person with an effort-oriented attitude who can continue to develop. They absolutely continue to make efforts without giving up, and are people who accumulate small successes.',
          'A person who is independent but can cooperate. They value their own space, but are people who can cooperate with their partner when necessary.',
          'A person who knows themselves very well. They know their strengths and weaknesses, and are people who continuously work to develop based on this.'
        ],
        ja: [
          '極めて強い粘り強さと忍耐があり、絶対に諦めない人です。困難を克服しながら継続的に成長でき、非常に長期的な視点を持つ人です。',
          '極めて強い回復力があり、困難を通じてより強くなることのできる人です。失敗しても再び立ち上がることができ、経験を通じてより良い選択ができる人です。',
          '成長しようとする意志が極めて強い人です。困難を学びの機会として見て、絶え間なく発展しようと努力する人です。',
          'ポジティブな思考を持ち、希望を絶対に失わない人です。困難があってもポジティブに考え、良い変化があると信じる人です。',
          '正直で誠実な性格の人です。嘘偽りなく心を完全に開くことができ、真実の対話を通じて問題を解決できる人です。',
          '思いやりがあり、理解力が非常に深い人です。相手の感情を理解し共感し、お互いを支えることができる人です。',
          '現実的でありながら希望的思考をする人です。現実を直視しながらもポジティブな未来を描き、非常にバランスの取れた人です。',
          '努力する姿勢を持ち、継続的に発展できる人です。絶対に諦めずに着実に努力し、小さな成功を積み重ねる人です。',
          '独立しながらも協力できる人です。自分の空間を重要に考えますが、必要に応じて相手と協力できる人です。',
          '自分を非常によく知っている人です。自分の強みと弱みを知り、これを基に発展しようと絶え間なく努力する人です。'
        ],
        'zh-CN': [
          '有极其强的坚持和耐心，绝对不放弃的人。可以克服困难继续成长的人，有非常长期视角的人。',
          '有极强的恢复力，可以通过困难变得更强的人。失败后也能重新站起来，通过经验做出更好选择的人。',
          '有极其强烈的成长意愿的人。将困难视为学习机会，持续不断努力发展的人。',
          '有积极思维、绝对不失去希望的人。即使有困难也积极思考，相信会有好变化的人。',
          '有诚实和真诚性格的人。可以毫无虚假地完全敞开心扉，通过真诚对话解决问题的人。',
          '有爱心和理解力的人。理解并同情对方的感受，能够相互支持的人。',
          '现实而充满希望思考的人。面对现实的同时描绘积极未来，非常有平衡感的人。',
          '有努力态度、能持续发展的人。绝对不放弃持续努力，积累小成功的人。',
          '独立而能合作的人。重视自己的空间，但必要时能与对方合作的人。',
          '非常了解自己的人。知道自己的优缺点，基于此持续努力发展的人。'
        ],
        'zh-TW': [
          '有極其強的堅持和耐心，絕對不放棄的人。可以克服困難繼續成長的人，有非常長期視角的人。',
          '有極強的恢復力，可以通過困難變得更強的人。失敗後也能重新站起來，通過經驗做出更好選擇的人。',
          '有極其強烈的成長意願的人。將困難視為學習機會，持續不斷努力發展的人。',
          '有積極思維、絕對不失去希望的人。即使有困難也積極思考，相信會有好變化的人。',
          '有誠實和真誠性格的人。可以毫無虛假地完全敞開心扉，通過真誠對話解決問題的人。',
          '有愛心和理解力的人。理解並同情對方的感受，能夠相互支持的人。',
          '現實而充滿希望思考的人。面對現實的同時描繪積極未來，非常有平衡感的人。',
          '有努力態度、能持續發展的人。絕對不放棄持續努力，積累小成功的人。',
          '獨立而能合作的人。重視自己的空間，但必要時能與對方合作的人。',
          '非常了解自己的人。知道自己的優缺點，基於此持續努力發展的人。'
        ],
        vi: [
          'Một người có sự bền bỉ và kiên nhẫn cực kỳ mạnh mẽ hoàn toàn không bỏ cuộc. Họ là người có thể tiếp tục phát triển trong khi vượt qua khó khăn, và có quan điểm rất dài hạn.',
          'Một người có khả năng phục hồi cực kỳ mạnh mẽ có thể trở nên mạnh mẽ hơn thông qua khó khăn. Họ có thể đứng dậy lại ngay cả sau thất bại, và là người có thể đưa ra lựa chọn tốt hơn thông qua kinh nghiệm.',
          'Một người có ý chí cực kỳ mạnh mẽ để phát triển. Họ xem khó khăn như cơ hội học hỏi, và là người liên tục làm việc để phát triển không ngừng.',
          'Một người có suy nghĩ tích cực hoàn toàn không mất hy vọng. Ngay cả khi có khó khăn, họ suy nghĩ tích cực và tin rằng sẽ có thay đổi tốt.',
          'Một người có tính cách trung thực và chân thành. Họ có thể hoàn toàn mở lòng mà không có sự giả dối, và là người có thể giải quyết vấn đề thông qua đối thoại chân thành.',
          'Một người có tấm lòng quan tâm và hiểu biết rất sâu. Họ hiểu và đồng cảm với cảm xúc của đối phương, và là người có thể hỗ trợ lẫn nhau.',
          'Một người có suy nghĩ thực tế nhưng đầy hy vọng. Họ đối mặt với thực tế đồng thời vẽ nên tương lai tích cực, và là người rất cân bằng.',
          'Một người có thái độ nỗ lực, có thể tiếp tục phát triển. Họ tuyệt đối tiếp tục nỗ lực không bỏ cuộc, và là người tích lũy những thành công nhỏ.',
          'Một người độc lập nhưng có thể hợp tác. Họ coi trọng không gian riêng của mình, nhưng khi cần thiết có thể hợp tác với đối phương.',
          'Một người hiểu rất rõ bản thân. Họ biết điểm mạnh và điểm yếu của mình, và nỗ lực liên tục phát triển dựa trên điều đó.'
        ],
        id: [
          'Seseorang dengan ketetapan dan kesabaran yang sangat kuat yang benar-benar tidak menyerah. Mereka adalah orang yang dapat terus tumbuh sambil mengatasi kesulitan, dan memiliki perspektif yang sangat jangka panjang.',
          'Seseorang dengan ketahanan yang sangat kuat yang dapat menjadi lebih kuat melalui kesulitan. Mereka dapat bangkit kembali bahkan setelah kegagalan, dan adalah orang yang dapat membuat pilihan yang lebih baik melalui pengalaman.',
          'Seseorang dengan keinginan yang sangat kuat untuk tumbuh. Mereka melihat kesulitan sebagai kesempatan belajar, dan adalah orang yang terus bekerja untuk berkembang tanpa berhenti.',
          'Seseorang dengan pemikiran positif yang benar-benar tidak kehilangan harapan. Meskipun ada kesulitan, mereka berpikir positif dan percaya bahwa perubahan baik akan datang.',
          'Seseorang dengan kepribadian yang jujur dan tulus. Mereka dapat sepenuhnya membuka hati tanpa kepalsuan, dan adalah orang yang dapat menyelesaikan masalah melalui dialog yang jujur.',
          'Seseorang dengan hati yang peduli dan pemahaman yang sangat dalam. Mereka memahami dan berempati dengan emosi pasangan, dan adalah orang yang dapat saling mendukung.',
          'Seseorang dengan pemikiran realistis namun penuh harapan. Mereka menghadapi kenyataan sambil menggambarkan masa depan yang positif, dan adalah orang yang sangat seimbang.',
          'Seseorang dengan sikap berusaha yang dapat terus berkembang. Mereka benar-benar terus berusaha tanpa menyerah, dan adalah orang yang mengumpulkan kesuksesan kecil.',
          'Seseorang yang mandiri namun dapat bekerja sama. Mereka menghargai ruang pribadinya, tetapi ketika diperlukan dapat bekerja sama dengan pasangan.',
          'Seseorang yang mengenal dirinya dengan sangat baik. Mereka mengetahui kelebihan dan kekurangan dirinya, dan terus bekerja untuk berkembang berdasarkan hal tersebut.'
        ]
      },
      warning: {
        get ko() {
          const now = new Date();
          const next2 = getFutureMonthShort(2);
          const next4 = getFutureMonthShort(4);
          const next6 = getFutureMonthShort(6);
          const next8 = getFutureMonthShort(8);
          const next10 = getFutureMonthShort(10);
          return [
            `${next2} 절대 절대 포기하지 않는 것이 가장 중요합니다. 어려움이 계속되고 매우 힘들어도 인내심을 가지고 끊임없이 노력한다면, 언젠가 반드시 좋은 결과를 얻을 수 있을 것입니다.`,
            `${next4} 성급한 결정을 절대 절대 경계하시기 바랍니다. 감정에 절대 휘둘리지 말고 이성적으로 판단하며, 매우 매우 신중하게 결정하시기 바랍니다.`,
            `${next6} 과도한 기대를 매우 경계하시기 바랍니다. 현실적인 기대를 가지고 관계를 발전시키며, 작은 것에도 감사하는 마음을 가지시기 바랍니다.`,
            `${next8} 소통 부족에 절대 주의하시기 바랍니다. 대화가 부족하면 오해가 생기고 갈등이 커질 수 있으므로, 정기적으로 서로의 마음을 나누는 시간을 반드시 가지시기 바랍니다.`,
            `${next10} 자신감 부족에 절대 주의하시기 바랍니다. 자신을 너무 낮추거나 자신감이 없으면 좋은 인연을 만들 수 없으므로, 자신의 가치를 반드시 인정하는 것이 매우 중요합니다.`,
            '과거 상처를 현재 관계에 절대 절대 적용하지 말아야 합니다. 이전 관계에서 받은 상처를 새 관계에 적용하지 말고, 완전히 완전히 새로운 시작을 하는 마음가짐이 매우 중요합니다.',
            '타인의 의견에 너무 휘둘리지 말아야 합니다. 주변 사람들의 의견도 중요하지만, 자신의 판단과 감정을 존중하고 믿는 것이 매우 매우 중요합니다.',
            '변화를 절대 두려워하지 말고 적극적으로 새로운 시도를 해보시기 바랍니다. 어려움이 있어도 절대 포기하지 않고 새로운 시도를 해보며, 변화를 통해 더 나은 관계를 만들 수 있습니다.',
            '감정에 절대 절대 휘둘리지 말아야 합니다. 중요한 결정은 반드시 반드시 이성적으로 판단하며, 감정적 기복에 매우 매우 주의하시기 바랍니다.',
            '자기 자신을 먼저 사랑하는 것이 가장 가장 중요합니다. 다른 사람의 사랑을 받기 전에 먼저 자신을 소중히 여기며, 자신감을 갖는 것이 좋은 인연을 만드는 가장 중요한 첫걸음입니다.'
          ];
        },
        get en() {
          const now = new Date();
          const future2 = new Date(now.getFullYear(), now.getMonth() + 2, 1);
          const future4 = new Date(now.getFullYear(), now.getMonth() + 4, 1);
          const future6 = new Date(now.getFullYear(), now.getMonth() + 6, 1);
          const future8 = new Date(now.getFullYear(), now.getMonth() + 8, 1);
          const future10 = new Date(now.getFullYear(), now.getMonth() + 10, 1);
          
          const getMonthStr = (date: Date) => {
            const monthName = date.toLocaleString('en-US', { month: 'long' });
            if (date.getFullYear() > now.getFullYear()) {
              return `Next ${monthName}`;
            }
            return monthName;
          };
          
          const next2 = getMonthStr(future2);
          const next4 = getMonthStr(future4);
          const next6 = getMonthStr(future6);
          const next8 = getMonthStr(future8);
          const next10 = getMonthStr(future10);
          
          return [
            `Absolutely never giving up is most important in ${next2}. Even if difficulties continue and are very hard, if you continue to make efforts with patience, you can definitely achieve good results someday.`,
            `Please absolutely beware of hasty decisions in ${next4}. Absolutely do not be swayed by emotions, judge rationally, and please make decisions very carefully.`,
            `Please be very careful about excessive expectations in ${next6}. Develop relationships with realistic expectations, and please have a grateful heart even for small things.`,
            `Please absolutely be careful about lack of communication in ${next8}. If there is insufficient dialogue, misunderstandings can arise and conflicts can grow, so please definitely take time to share each other\'s hearts regularly.`,
            `Please absolutely be careful about lack of confidence in ${next10}. If you lower yourself too much or lack confidence, you cannot create good connections, so it is very important to definitely recognize your own value.`,
            'You should absolutely not apply past wounds to the current relationship. Do not apply wounds received from previous relationships to new relationships, and it is very important to have a mindset of completely starting fresh.',
            'You should not be overly swayed by others\' opinions. Others\' opinions are also important, but it is very important to respect and trust your own judgment and feelings.',
            'Please absolutely do not be afraid of change and actively try new attempts. Even if there are difficulties, absolutely do not give up and try new attempts, and you can create better relationships through change.',
            'You should absolutely not be swayed by emotions. Make important decisions rationally, and please be very careful about emotional fluctuations.',
            'Loving yourself first is most important. Before receiving love from others, first cherish yourself, and having confidence is the most important first step to creating good connections.'
          ];
        },
        get ja() {
          const now = new Date();
          const future2 = new Date(now.getFullYear(), now.getMonth() + 2, 1);
          const future4 = new Date(now.getFullYear(), now.getMonth() + 4, 1);
          const future6 = new Date(now.getFullYear(), now.getMonth() + 6, 1);
          const future8 = new Date(now.getFullYear(), now.getMonth() + 8, 1);
          const future10 = new Date(now.getFullYear(), now.getMonth() + 10, 1);
          
          const getMonthStr = (date: Date) => {
            const monthName = date.toLocaleString('ja-JP', { month: 'long' });
            if (date.getFullYear() > now.getFullYear()) {
              return `来年${monthName}`;
            }
            return monthName;
          };
          
          const next2 = getMonthStr(future2);
          const next4 = getMonthStr(future4);
          const next6 = getMonthStr(future6);
          const next8 = getMonthStr(future8);
          const next10 = getMonthStr(future10);
          
          return [
            `${next2}には絶対に絶対に諦めないことが最も重要です。困難が続き非常に大変でも、忍耐力を持って絶え間なく努力すれば、いつか必ず良い結果を得られるでしょう。`,
            `${next4}には性急な決定を絶対に絶対に警戒してください。感情に絶対に振り回されずに理性的に判断し、非常に慎重に決定してください。`,
            `${next6}には過度な期待を非常に警戒してください。現実的な期待を持って関係を発展させ、小さなことにも感謝する心を持ってください。`,
            `${next8}にはコミュニケーション不足に絶対に注意してください。対話が不足すると誤解が生じ、対立が大きくなる可能性があるため、定期的にお互いの心を共有する時間を必ず持ってください。`,
            `${next10}には自信不足に絶対に注意してください。自分をあまり低くしたり自信がなければ良い縁を作ることができないため、自分の価値を必ず認めることが非常に重要です。`,
            '過去の傷を現在の関係に絶対に絶対に適用しないでください。以前の関係で受けた傷を新しい関係に適用せず、完全に完全に新しいスタートを切る心構えが非常に重要です。',
            '他人の意見にあまり振り回されないでください。周りの人々の意見も重要ですが、自分の判断と感情を尊重し信じることが非常に重要です。',
            '変化を絶対に恐れず、積極的に新しい試みをしてみてください。困難があっても絶対に諦めずに新しい試みをしてみて、変化を通じてより良い関係を作ることができます。',
            '感情に絶対に絶対に振り回されないでください。重要な決定は必ず必ず理性的に判断し、感情的変動に非常に注意してください。',
            '自分をまず愛することが最も最も重要です。他の人の愛を受ける前に、まず自分を大切にし、自信を持つことが良い縁を作る最も重要な第一歩です。'
          ];
        },
        get 'zh-CN'() {
          const now = new Date();
          const future2 = new Date(now.getFullYear(), now.getMonth() + 2, 1);
          const future4 = new Date(now.getFullYear(), now.getMonth() + 4, 1);
          const future6 = new Date(now.getFullYear(), now.getMonth() + 6, 1);
          const future8 = new Date(now.getFullYear(), now.getMonth() + 8, 1);
          const future10 = new Date(now.getFullYear(), now.getMonth() + 10, 1);
          
          const getMonthStr = (date: Date) => {
            const monthNames = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
            const monthName = monthNames[date.getMonth()];
            if (date.getFullYear() > now.getFullYear()) {
              return `明年${monthName}`;
            }
            return monthName;
          };
          
          const next2 = getMonthStr(future2);
          const next4 = getMonthStr(future4);
          const next6 = getMonthStr(future6);
          const next8 = getMonthStr(future8);
          const next10 = getMonthStr(future10);
          
          return [
            `${next2}绝对永不放弃是最重要的。即使困难持续且非常艰难，如果继续耐心努力，总有一天一定会有好结果。`,
            `${next4}绝对要警惕草率的决定。绝对不要被感情左右，理性判断，非常谨慎地决定。`,
            `${next6}请非常警惕过度的期望。以现实的期望发展关系，对小事也要心存感激。`,
            `${next8}请绝对注意缺乏沟通。对话不足会产生误解和冲突，请一定定期互相分享心情。`,
            `${next10}请绝对注意缺乏自信。过于贬低自己或缺乏自信就无法建立好缘分，一定要认识自己的价值，这非常重要。`,
            '绝对不应将过去的伤痛应用到现在的感情中。不要将之前感情中的伤痛带到新的关系中，保持完全新的开始的心态非常重要。',
            '不应过分受他人意见左右。他人的意见也重要，但尊重并相信自己判断和感受非常重要。',
            '绝对不要害怕变化，积极尝试新的事物。即使有困难也绝对不要放弃，尝试新的方式，通过变化可以建立更好的关系。',
            '绝对不应被感情左右。重要决定一定要理性判断，请注意情绪波动。',
            '首先要爱自己是最重要的。在得到别人的爱之前，先要珍惜自己，拥有自信是建立好缘分最重要的第一步。'
          ];
        },
        get 'zh-TW'() {
          const now = new Date();
          const future2 = new Date(now.getFullYear(), now.getMonth() + 2, 1);
          const future4 = new Date(now.getFullYear(), now.getMonth() + 4, 1);
          const future6 = new Date(now.getFullYear(), now.getMonth() + 6, 1);
          const future8 = new Date(now.getFullYear(), now.getMonth() + 8, 1);
          const future10 = new Date(now.getFullYear(), now.getMonth() + 10, 1);
          
          const getMonthStr = (date: Date) => {
            const monthNames = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
            const monthName = monthNames[date.getMonth()];
            if (date.getFullYear() > now.getFullYear()) {
              return `明年${monthName}`;
            }
            return monthName;
          };
          
          const next2 = getMonthStr(future2);
          const next4 = getMonthStr(future4);
          const next6 = getMonthStr(future6);
          const next8 = getMonthStr(future8);
          const next10 = getMonthStr(future10);
          
          return [
            `${next2}絕對永不放棄是最重要的。即使困難持續且非常艱難，如果繼續耐心努力，總有一天一定會有好結果。`,
            `${next4}絕對要警惕草率的決定。絕對不要被感情左右，理性判斷，非常謹慎地決定。`,
            `${next6}請非常警惕過度的期望。以現實的期望發展關係，對小事也要心存感激。`,
            `${next8}請絕對注意缺乏溝通。對話不足會產生誤解和衝突，請一定定期互相分享心情。`,
            `${next10}請絕對注意缺乏自信。過於貶低自己或缺乏自信就無法建立好緣分，一定要認識自己的價值，這非常重要。`,
            '絕對不應將過去的傷痛應用到現在的感情中。不要將之前感情中的傷痛帶到新的關係中，保持完全新的開始的心態非常重要。',
            '不應過分受他人意見左右。他人的意見也重要，但尊重並相信自己判斷和感受非常重要。',
            '絕對不要害怕變化，積極嘗試新的事物。即使有困難也絕對不要放棄，嘗試新的方式，通過變化可以建立更好的關係。',
            '絕對不應被感情左右。重要決定一定要理性判斷，請注意情緒波動。',
            '首先要愛自己是最重要的。在得到別人的愛之前，先要珍惜自己，擁有自信是建立好緣分最重要的第一步。'
          ];
        },
        get vi() {
          const now = new Date();
          const future2 = new Date(now.getFullYear(), now.getMonth() + 2, 1);
          const future4 = new Date(now.getFullYear(), now.getMonth() + 4, 1);
          const future6 = new Date(now.getFullYear(), now.getMonth() + 6, 1);
          const future8 = new Date(now.getFullYear(), now.getMonth() + 8, 1);
          const future10 = new Date(now.getFullYear(), now.getMonth() + 10, 1);
          
          const getMonthStr = (date: Date) => {
            const monthNames = ['tháng 1', 'tháng 2', 'tháng 3', 'tháng 4', 'tháng 5', 'tháng 6', 'tháng 7', 'tháng 8', 'tháng 9', 'tháng 10', 'tháng 11', 'tháng 12'];
            const monthName = monthNames[date.getMonth()];
            if (date.getFullYear() > now.getFullYear()) {
              return `${monthName} năm sau`;
            }
            return monthName;
          };
          
          const next2 = getMonthStr(future2);
          const next4 = getMonthStr(future4);
          const next6 = getMonthStr(future6);
          const next8 = getMonthStr(future8);
          const next10 = getMonthStr(future10);
          
          return [
            `${next2} hoàn toàn không bao giờ bỏ cuộc là quan trọng nhất. Ngay cả khi khó khăn tiếp tục và rất khó khăn, nếu bạn tiếp tục nỗ lực với sự kiên nhẫn, một ngày nào đó chắc chắn sẽ có kết quả tốt.`,
            `${next4} tuyệt đối tuyệt đối cảnh giác với các quyết định vội vàng. Tuyệt đối đừng để cảm xúc chi phối, hãy phán đoán một cách hợp lý và quyết định rất thận trọng.`,
            `${next6} hãy rất cảnh giác với kỳ vọng quá mức. Phát triển mối quan hệ với kỳ vọng thực tế, hãy có lòng biết ơn ngay cả với những điều nhỏ.`,
            `${next8} hãy tuyệt đối cẩn thận về thiếu giao tiếp. Nếu thiếu đối thoại sẽ phát sinh hiểu lầm và xung đột, vì vậy hãy chắc chắn dành thời gian thường xuyên chia sẻ tâm tư với nhau.`,
            `${next10} hãy tuyệt đối cẩn thận về thiếu tự tin. Nếu bạn tự hạ thấp mình quá mức hoặc thiếu tự tin, bạn không thể tạo được duyên tốt, vì vậy việc nhận ra giá trị của bản thân là rất quan trọng.`,
            'Bạn tuyệt đối tuyệt đối không nên áp dụng những vết thương trong quá khứ vào mối quan hệ hiện tại. Đừng áp dụng những vết thương từ các mối quan hệ trước vào mối quan hệ mới, và có tâm trí hoàn toàn khởi đầu mới là rất quan trọng.',
            'Bạn không nên quá để bị ảnh hưởng bởi ý kiến của người khác. Ý kiến của người khác cũng quan trọng, nhưng tôn trọng và tin tưởng phán đoán và cảm xúc của chính mình là rất quan trọng.',
            'Tuyệt đối đừng sợ thay đổi và tích cực thử những điều mới. Ngay cả khi có khó khăn cũng tuyệt đối đừng bỏ cuộc, hãy thử những cách mới, thông qua thay đổi bạn có thể tạo ra mối quan hệ tốt hơn.',
            'Bạn tuyệt đối tuyệt đối không nên để cảm xúc chi phối. Các quyết định quan trọng phải được phán đoán một cách hợp lý, và hãy rất cẩn thận về sự dao động cảm xúc.',
            'Việc yêu bản thân trước tiên là quan trọng nhất. Trước khi nhận được tình yêu từ người khác, hãy quý trọng bản thân trước, và có tự tin là bước đầu tiên quan trọng nhất để tạo ra duyên tốt.'
          ];
        },
        get id() {
          const now = new Date();
          const future2 = new Date(now.getFullYear(), now.getMonth() + 2, 1);
          const future4 = new Date(now.getFullYear(), now.getMonth() + 4, 1);
          const future6 = new Date(now.getFullYear(), now.getMonth() + 6, 1);
          const future8 = new Date(now.getFullYear(), now.getMonth() + 8, 1);
          const future10 = new Date(now.getFullYear(), now.getMonth() + 10, 1);
          
          const getMonthStr = (date: Date) => {
            const monthNames = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
            const monthName = monthNames[date.getMonth()];
            if (date.getFullYear() > now.getFullYear()) {
              return `${monthName} tahun depan`;
            }
            return monthName;
          };
          
          const next2 = getMonthStr(future2);
          const next4 = getMonthStr(future4);
          const next6 = getMonthStr(future6);
          const next8 = getMonthStr(future8);
          const next10 = getMonthStr(future10);
          
          return [
            `${next2} sangat tidak pernah menyerah adalah yang paling penting. Meskipun kesulitan terus berlanjut dan sangat sulit, jika Anda terus berusaha dengan kesabaran, suatu hari pasti akan ada hasil yang baik.`,
            `${next4} harap sangat sangat waspada terhadap keputusan yang tergesa-gesa. Sangat jangan terpengaruh emosi, pertimbangkan secara rasional, dan harap putuskan dengan sangat hati-hati.`,
            `${next6} harap sangat waspada terhadap ekspektasi berlebihan. Kembangkan hubungan dengan ekspektasi yang realistis, dan harap memiliki hati yang bersyukur bahkan untuk hal-hal kecil.`,
            `${next8} harap sangat berhati-hati tentang kurangnya komunikasi. Jika dialog tidak cukup, kesalahpahaman dapat timbul dan konflik dapat tumbuh, jadi harap pastikan luangkan waktu untuk saling berbagi perasaan secara teratur.`,
            `${next10} harap sangat berhati-hati tentang kurangnya kepercayaan diri. Jika Anda merendahkan diri terlalu rendah atau kurang percaya diri, Anda tidak dapat menciptakan koneksi yang baik, jadi penting untuk mengenali nilai Anda sendiri, ini sangat penting.`,
            'Anda tidak boleh menerapkan luka masa lalu ke hubungan saat ini. Jangan menerapkan luka yang diterima dari hubungan sebelumnya ke hubungan baru, dan penting untuk memiliki pola pikir memulai yang benar-benar baru, ini sangat penting.',
            'Anda tidak boleh terlalu dipengaruhi oleh pendapat orang lain. Pendapat orang lain juga penting, tetapi penting untuk menghormati dan mempercayai penilaian dan perasaan Anda sendiri, ini sangat penting.',
            'Sangat jangan takut perubahan dan aktif mencoba hal-hal baru. Meskipun ada kesulitan, sangat jangan menyerah dan coba upaya baru, dan Anda dapat menciptakan hubungan yang lebih baik melalui perubahan.',
            'Anda tidak boleh dipengaruhi emosi. Putuskan keputusan penting secara rasional, dan harap sangat berhati-hati tentang fluktuasi emosional.',
            'Penting untuk mencintai diri sendiri terlebih dahulu. Sebelum menerima cinta dari orang lain, hargai diri sendiri terlebih dahulu, dan memiliki kepercayaan diri adalah langkah pertama yang paling penting untuk menciptakan koneksi yang baik.'
          ];
        }
      }
    }
  }
];

// 얼굴로 보는 올해 나의 연애운 결과 계산 함수
export function calculateFaceLoveFortuneResult(faceDetected: boolean, faceQuality: number): FaceLoveFortuneResult {
  if (!faceDetected) {
    // 얼굴이 감지되지 않은 경우 기본 결과 반환
    return faceLoveFortuneResults[5]; // 매우 어려운 연애운
  }

  // 얼굴 품질에 따른 점수 계산 (0-100)
  const baseScore = Math.min(100, Math.max(0, faceQuality));
  
  // 랜덤 요소 추가 (±10점)
  const randomFactor = (Math.random() - 0.5) * 20;
  const finalScore = Math.min(100, Math.max(0, baseScore + randomFactor));

  // 점수에 따른 결과 반환 (6가지 타입)
  if (finalScore >= 90) return faceLoveFortuneResults[0]; // 올해 인생의 반려자를 만날 상
  if (finalScore >= 80) return faceLoveFortuneResults[1]; // 좋은 연애운 기대 가능
  if (finalScore >= 70) return faceLoveFortuneResults[2]; // 보통 연애운
  if (finalScore >= 60) return faceLoveFortuneResults[3]; // 조금 어려운 연애운
  if (finalScore >= 40) return faceLoveFortuneResults[4]; // 어려운 연애운
  return faceLoveFortuneResults[5]; // 매우 어려운 연애운
}

