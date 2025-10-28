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
        'You are likely to meet someone in spring or autumn this year.',
        'Actively participate in new gatherings or activities.',
        'Treat the other person with a sincere heart.',
        'Don\'t rush, let it flow naturally.',
        'Respect and consider the other person\'s feelings.',
        'Communicate with honesty and an open mind.',
        'Cherish the time spent together.',
        'Support each other\'s dreams and goals.',
        'Try to create romantic moments.',
        'Develop the relationship with patience.'
      ],
      ja: [
        '今年の春や秋に縁に出会う可能性が高いです。',
        '新しい集まりや活動に積極的に参加してください。',
        '心から相手を扱ってください。',
        '急がず、自然に流れるようにしてください。',
        '相手の感情を尊重し、配慮してください。',
        '正直で開かれた心でコミュニケーションしてください。',
        '一緒にする時間を大切にしてください。',
        'お互いの夢や目標を応援してください。',
        'ロマンチックな瞬間を作ろうとしてください。',
        '忍耐を持って関係を発展させてください。'
      ],
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
          const future1 = new Date(now.getFullYear(), now.getMonth() + 1, 1);
          const future2 = new Date(now.getFullYear(), now.getMonth() + 2, 1);
          const future3 = new Date(now.getFullYear(), now.getMonth() + 3, 1);
          const future4 = new Date(now.getFullYear(), now.getMonth() + 4, 1);
          const future5 = new Date(now.getFullYear(), now.getMonth() + 5, 1);
          const future6 = new Date(now.getFullYear(), now.getMonth() + 6, 1);
          
          const getMonthStr = (date: Date) => {
            const monthName = date.toLocaleString('en-US', { month: 'long' });
            if (date.getFullYear() > now.getFullYear()) {
              return `Next ${monthName}`;
            }
            return monthName;
          };
          
          return [
            `${getMonthStr(future1)} destiny`,
            `${getMonthStr(future2)} meeting`,
            `${getMonthStr(future3)} chance`,
            `${getMonthStr(future4)} partner`,
            `${getMonthStr(future5)} start`,
            `${getMonthStr(future6)} true love`,
            'Online community',
            'During travels',
            'Daily routine',
            'Friend intro'
          ];
        },
        ja: [
          '今年の春（3〜5月）に運命的な縁に出会うでしょう。',
          '新しい出会いの機会が多い時期です。',
          '秋（9〜11月）にも良い縁が訪れる可能性があります。',
          '平凡な日常の中で特別な出会いが起こるでしょう。',
          '友人や知人を通じた紹介で縁に出会うことができます。',
          '趣味活動や新しい経験を通じて縁が始まります。',
          '予想外の場所で運命的な出会いがあります。',
          'オンラインコミュニティや集まりで縁に出会う可能性が高いです。',
          '旅行や出張中に特別な人に出会うことができます。',
          '仕事や勉強する場所で自然に縁が始まります。'
        ],
        'zh-CN': [
          '今年春天（3~5月）将遇到命中注定的缘分。',
          '这是有很多新相遇机会的时期。',
          '秋天（9~11月）也可能会有好的缘分到来。',
          '在平凡的日常生活中会发生特别的相遇。',
          '可以通过朋友或熟人的介绍遇到缘分。',
          '通过爱好活动或新经历开始缘分。',
          '在意想不到的地方会有命中注定的相遇。',
          '在在线社区或聚会中遇到缘分的可能性很高。',
          '在旅行或出差期间可以遇到特别的人。',
          '在工作或学习的地方自然开始缘分。'
        ],
        'zh-TW': [
          '今年春天（3~5月）將遇到命中註定的緣分。',
          '這是有很多新相遇機會的時期。',
          '秋天（9~11月）也可能會有好的緣分到來。',
          '在平凡的日常生活中會發生特別的相遇。',
          '可以通過朋友或熟人的介紹遇到緣分。',
          '通過愛好活動或新經歷開始緣分。',
          '在意想不到的地方會有命中註定的相遇。',
          '在線上社區或聚會中遇到緣分的可能性很高。',
          '在旅行或出差期間可以遇到特別的人。',
          '在工作或學習的地方自然開始緣分。'
        ],
        vi: [
          'Bạn sẽ gặp đối tác định mệnh vào mùa xuân năm nay (tháng 3-5).',
          'Đây là thời điểm có nhiều cơ hội gặp gỡ mới.',
          'Một kết nối tốt cũng có thể đến vào mùa thu (tháng 9-11).',
          'Một cuộc gặp gỡ đặc biệt sẽ xảy ra trong cuộc sống hàng ngày bình thường của bạn.',
          'Bạn có thể gặp thông qua giới thiệu của bạn bè hoặc người quen.',
          'Một kết nối sẽ bắt đầu thông qua sở thích hoặc trải nghiệm mới.',
          'Sẽ có một cuộc gặp gỡ định mệnh ở một nơi không ngờ tới.',
          'Bạn có khả năng gặp ai đó trong cộng đồng trực tuyến hoặc các buổi gặp gỡ.',
          'Bạn có thể gặp một người đặc biệt trong chuyến du lịch hoặc công tác.',
          'Một kết nối sẽ tự nhiên bắt đầu ở nơi làm việc hoặc học tập.'
        ],
        id: [
          'Anda akan bertemu pasangan yang ditakdirkan di musim semi tahun ini (Maret-Mei).',
          'Ini adalah waktu dengan banyak peluang untuk pertemuan baru.',
          'Koneksi yang baik juga dapat datang di musim gugur (September-November).',
          'Pertemuan khusus akan terjadi dalam kehidupan sehari-hari Anda yang biasa.',
          'Anda dapat bertemu melalui pengenalan oleh teman atau kenalan.',
          'Koneksi akan dimulai melalui hobi atau pengalaman baru.',
          'Akan ada pertemuan yang ditakdirkan di tempat yang tidak terduga.',
          'Anda kemungkinan akan bertemu seseorang di komunitas online atau pertemuan.',
          'Anda dapat bertemu orang khusus selama perjalanan atau perjalanan bisnis.',
          'Koneksi akan secara alami dimulai di tempat kerja atau tempat belajar.'
        ]
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
          'A person with a caring and warm heart.',
          'Has an honest and sincere personality.',
          'Has a romantic and emotional side.',
          'Enjoys growing and developing together.',
          'Values communication and enjoys conversation.',
          'Pursues sincere love.',
          'A stable and trustworthy person.',
          'Has excellent empathy and understanding.',
          'An active and energetic personality.',
          'Has a big heart that respects and cares for others.'
        ],
        ja: [
          '思いやりがあり、心温まる人です。',
          '正直で誠実な性格を持っています。',
          'ロマンチックで感情的な面があります。',
          '一緒に成長し、発展することを好きです。',
          'コミュニケーションを重視し、会話を楽しみます。',
          '心からの愛を追求します。',
          '安定していて信頼できる人です。',
          '共感力が優れており、理解力があります。',
          '活発でエネルギッシュな性格です。',
          '相手を尊重し、思いやる心が大きいです。'
        ],
        'zh-CN': [
          '一个有着关怀和温暖之心的人。',
          '有着诚实和真诚的性格。',
          '有浪漫和感性的一面。',
          '喜欢一起成长和发展。',
          '重视沟通，享受对话。',
          '追求真诚的爱。',
          '一个稳定和值得信赖的人。',
          '有出色的共情能力和理解力。',
          '一个活跃和充满活力的性格。',
          '有一颗尊重和关怀他人的心。'
        ],
        'zh-TW': [
          '一個有著關懷和溫暖之心的人。',
          '有著誠實和真誠的性格。',
          '有浪漫和感性的一面。',
          '喜歡一起成長和發展。',
          '重視溝通，享受對話。',
          '追求真誠的愛。',
          '一個穩定和值得信賴的人。',
          '有出色的共情能力和理解力。',
          '一個活躍和充滿活力的性格。',
          '有一顆尊重和關懷他人的心。'
        ],
        vi: [
          'Một người có trái tim quan tâm và ấm áp.',
          'Có tính cách trung thực và chân thành.',
          'Có mặt lãng mạn và cảm xúc.',
          'Thích cùng nhau phát triển và tiến bộ.',
          'Coi trọng giao tiếp và thích trò chuyện.',
          'Theo đuổi tình yêu chân thành.',
          'Một người ổn định và đáng tin cậy.',
          'Có khả năng đồng cảm và hiểu biết xuất sắc.',
          'Một tính cách năng động và tràn đầy năng lượng.',
          'Có trái tim lớn biết tôn trọng và quan tâm người khác.'
        ],
        id: [
          'Seseorang dengan hati yang peduli dan hangat.',
          'Memiliki kepribadian yang jujur dan tulus.',
          'Memiliki sisi romantis dan emosional.',
          'Menikmati tumbuh dan berkembang bersama.',
          'Menghargai komunikasi dan menikmati percakapan.',
          'Mengejar cinta yang tulus.',
          'Orang yang stabil dan dapat dipercaya.',
          'Memiliki empati dan pemahaman yang sangat baik.',
          'Kepribadian yang aktif dan energik.',
          'Memiliki hati yang besar yang menghormati dan peduli pada orang lain.'
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
          
          return [
            `${getMonthStr(future2)} mood swing`,
            `${getMonthStr(future4)} don't rush`,
            `${getMonthStr(future6)} no high hopes`,
            `${getMonthStr(future8)} jealousy`,
            `${getMonthStr(future10)} money issue`,
            'Family oppose',
            'Hasty decisions',
            'Poor comm',
            'Past wounds',
            'Rash judgment'
          ];
        },
        ja: [
          '夏（6〜8月）には感情の浮き沈みがあるかもしれないので注意してください。',
          '急がずにゆっくり関係を発展させることが良いです。',
          '過度な期待は失望につながる可能性があります。',
          '相手の感情を尊重しないと問題が生じる可能性があります。',
          '頻繁な嫉妬や疑いは関係を損なう可能性があります。',
          '経済的な問題による対立に注意してください。',
          '家族や友人からの反対に注意する必要があるかもしれません。',
          '急いで決心すると後悔する可能性があります。',
          '相手とのコミュニケーション不足に注意してください。',
          '過去の傷を現在の関係に持ち込まないでください。'
        ],
        'zh-CN': [
          '夏天（6~8月）可能会有情绪波动，请注意。',
          '最好慢慢发展关系，不要着急。',
          '过度的期望可能导致失望。',
          '如果不尊重对方的感受，可能会出现问题。',
          '频繁的嫉妒或怀疑可能损害关系。',
          '请注意因经济问题引起的冲突。',
          '你可能需要注意来自家人或朋友的反对。',
          '如果过于仓促做决定，你可能会后悔。',
          '请注意与对方沟通不足。',
          '不要把过去的伤痛带入当前的关系。'
        ],
        'zh-TW': [
          '夏天（6~8月）可能會有情緒波動，請注意。',
          '最好慢慢發展關係，不要著急。',
          '過度的期望可能導致失望。',
          '如果不尊重對方的感受，可能會出現問題。',
          '頻繁的嫉妒或懷疑可能損害關係。',
          '請注意因經濟問題引起的衝突。',
          '你可能需要注意來自家人或朋友的反對。',
          '如果過於倉促做決定，你可能會後悔。',
          '請注意與對方溝通不足。',
          '不要把過去的傷痛帶入當前的關係。'
        ],
        vi: [
          'Hãy cẩn thận vì có thể có biến động cảm xúc vào mùa hè (tháng 6-8).',
          'Tốt hơn là phát triển mối quan hệ một cách chậm rãi mà không vội vàng.',
          'Kỳ vọng quá mức có thể dẫn đến thất vọng.',
          'Vấn đề có thể phát sinh nếu bạn không tôn trọng cảm xúc của người khác.',
          'Ghen tuông hoặc nghi ngờ thường xuyên có thể làm tổn hại mối quan hệ.',
          'Hãy cẩn thận với xung đột do vấn đề tài chính.',
          'Bạn có thể cần cẩn thận với sự phản đối từ gia đình hoặc bạn bè.',
          'Nếu bạn đưa ra quyết định quá vội vàng, bạn có thể hối tiếc.',
          'Hãy cẩn thận với việc thiếu giao tiếp với người kia.',
          'Đừng mang những vết thương trong quá khứ vào mối quan hệ hiện tại.'
        ],
        id: [
          'Hati-hati karena mungkin ada fluktuasi emosional di musim panas (Juni-Agustus).',
          'Lebih baik mengembangkan hubungan secara perlahan tanpa terburu-buru.',
          'Ekspektasi berlebihan dapat menyebabkan kekecewaan.',
          'Masalah dapat muncul jika Anda tidak menghormati perasaan orang lain.',
          'Kecemburuan atau kecurigaan yang sering dapat merusak hubungan.',
          'Hati-hati terhadap konflik karena masalah keuangan.',
          'Anda mungkin perlu berhati-hati terhadap oposisi dari keluarga atau teman.',
          'Jika Anda membuat keputusan terlalu terburu-buru, Anda mungkin menyesal.',
          'Hati-hati terhadap kurangnya komunikasi dengan orang lain.',
          'Jangan membawa luka masa lalu ke dalam hubungan saat ini.'
        ]
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
        'Try to actively meet people.',
        'Communicate sincerely with your partner.',
        'Take your time and progress naturally.',
        'Respect and care for emotions.',
        'Pursue honest conversations.'
      ],
      ja: [
        '積極的に出会いを試みてください。',
        '心から相手とコミュニケーションしてください。',
        '急がず、自然に進めてください。',
        '感情を尊重し、思いやりを持ってください。',
        '正直な会話を追求してください。'
      ],
      'zh-CN': [
        '积极尝试见面。',
        '真诚地与对方沟通。',
        '慢慢来，自然进展。',
        '尊重并关怀情感。',
        '追求真诚的对话。'
      ],
      'zh-TW': [
        '積極嘗試見面。',
        '真誠地與對方溝通。',
        '慢慢來，自然進展。',
        '尊重並關懷情感。',
        '追求真誠的對話。'
      ],
      vi: [
        'Hãy thử gặp gỡ tích cực.',
        'Giao tiếp chân thành với đối tác.',
        'Hãy từ từ và tiến triển tự nhiên.',
        'Tôn trọng và quan tâm đến cảm xúc.',
        'Theo đuổi các cuộc trò chuyện trung thực.'
      ],
      id: [
        'Cobalah untuk secara aktif bertemu orang.',
        'Berkomunikasi dengan tulus dengan pasangan Anda.',
        'Luangkan waktu Anda dan maju secara alami.',
        'Hormati dan peduli pada emosi.',
        'Kejar percakapan yang jujur.'
      ]
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
        en: [
          'You can meet a good connection.',
          'Many opportunities for new meetings will arise.',
          'A good opportunity will come to you.',
          'A meeting with a sincere person is expected.',
          'A new beginning connection will come.'
        ],
        ja: [
          '良い縁に会えるでしょう。',
          '新しい出会いの機会が多くなります。',
          '良い機会が訪れるでしょう。',
          '心からの人との出会いが予想されます。',
          '新しい始まりの縁が訪れるでしょう。'
        ],
        'zh-CN': [
          '你可以遇到好的缘分。',
          '将有许多新相遇的机会。',
          '好机会将会到来。',
          '预期会遇到真诚的人。',
          '新的开始的缘分将会到来。'
        ],
        'zh-TW': [
          '你可以遇到好的緣分。',
          '將有許多新相遇的機會。',
          '好機會將會到來。',
          '預期會遇到真誠的人。',
          '新的開始的緣分將會到來。'
        ],
        vi: [
          'Bạn có thể gặp một kết nối tốt.',
          'Nhiều cơ hội cho các cuộc gặp gỡ mới sẽ nảy sinh.',
          'Một cơ hội tốt sẽ đến với bạn.',
          'Một cuộc gặp gỡ với một người chân thành được mong đợi.',
          'Một kết nối khởi đầu mới sẽ đến.'
        ],
        id: [
          'Anda dapat bertemu koneksi yang baik.',
          'Banyak peluang untuk pertemuan baru akan muncul.',
          'Kesempatan baik akan datang kepada Anda.',
          'Pertemuan dengan orang yang tulus diharapkan.',
          'Koneksi awal yang baru akan datang.'
        ]
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
          'A caring and warm person.',
          'Has an honest and sincere personality.',
          'Has a romantic and emotional side.',
          'Enjoys growing together.',
          'Values communication.'
        ],
        ja: [
          '思いやりがあり、温かい人です。',
          '正直で誠実な性格を持っています。',
          'ロマンチックで感情的な面があります。',
          '一緒に成長することを楽しみます。',
          'コミュニケーションを重視します。'
        ],
        'zh-CN': [
          '一个关怀和温暖的人。',
          '有着诚实和真诚的性格。',
          '有浪漫和感性的一面。',
          '喜欢一起成长。',
          '重视沟通。'
        ],
        'zh-TW': [
          '一個關懷和溫暖的人。',
          '有著誠實和真誠的性格。',
          '有浪漫和感性的一面。',
          '喜歡一起成長。',
          '重視溝通。'
        ],
        vi: [
          'Một người quan tâm và ấm áp.',
          'Có tính cách trung thực và chân thành.',
          'Có mặt lãng mạn và cảm xúc.',
          'Thích cùng nhau phát triển.',
          'Coi trọng giao tiếp.'
        ],
        id: [
          'Seseorang yang peduli dan hangat.',
          'Memiliki kepribadian yang jujur dan tulus.',
          'Memiliki sisi romantis dan emosional.',
          'Menikmati tumbuh bersama.',
          'Menghargai komunikasi.'
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
        en: [
          'Be careful of emotional fluctuations.',
          'Don\'t rush, take your time.',
          'Avoid excessive expectations.',
          'Beware of jealousy and suspicion.',
          'Be careful of financial issues.'
        ],
        ja: [
          '感情の浮き沈みに注意してください。',
          '急がず、時間をかけてください。',
          '過度な期待は避けてください。',
          '嫉妬と疑いを警戒してください。',
          '経済的な問題に注意してください。'
        ],
        'zh-CN': [
          '注意情绪波动。',
          '不要着急，慢慢来。',
          '避免过度期望。',
          '警惕嫉妒和怀疑。',
          '注意经济问题。'
        ],
        'zh-TW': [
          '注意情緒波動。',
          '不要著急，慢慢來。',
          '避免過度期望。',
          '警惕嫉妒和懷疑。',
          '注意經濟問題。'
        ],
        vi: [
          'Hãy cẩn thận với biến động cảm xúc.',
          'Đừng vội vàng, hãy dành thời gian.',
          'Tránh kỳ vọng quá mức.',
          'Hãy cảnh giác với sự ghen tuông và nghi ngờ.',
          'Hãy cẩn thận với các vấn đề tài chính.'
        ],
        id: [
          'Hati-hati terhadap fluktuasi emosional.',
          'Jangan terburu-buru, luangkan waktu Anda.',
          'Hindari ekspektasi berlebihan.',
          'Waspadai kecemburuan dan kecurigaan.',
          'Hati-hati terhadap masalah keuangan.'
        ]
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
      en: [
        'Prepare yourself first.',
        'Don\'t rush, develop relationships slowly.',
        'Have patience and make steady efforts.',
        'Maintain a positive mindset.',
        'Build various experiences.'
      ],
      ja: [
        'まず自分を準備してください。',
        '急がず、ゆっくり関係を発展させてください。',
        '忍耐を持って着実に努力してください。',
        'ポジティブな心構えを維持してください。',
        '様々な経験を積んでください。'
      ],
      'zh-CN': [
        '首先准备好自己。',
        '不要着急，慢慢发展关系。',
        '要有耐心，持续努力。',
        '保持积极的心态。',
        '积累各种经验。'
      ],
      'zh-TW': [
        '首先準備好自己。',
        '不要著急，慢慢發展關係。',
        '要有耐心，持續努力。',
        '保持積極的心態。',
        '積累各種經驗。'
      ],
      vi: [
        'Hãy chuẩn bị bản thân trước.',
        'Đừng vội vàng, hãy phát triển các mối quan hệ từ từ.',
        'Hãy kiên nhẫn và nỗ lực ổn định.',
        'Duy trì tư duy tích cực.',
        'Xây dựng các trải nghiệm khác nhau.'
      ],
      id: [
        'Persiapkan diri Anda terlebih dahulu.',
        'Jangan terburu-buru, kembangkan hubungan perlahan.',
        'Miliki kesabaran dan lakukan upaya yang stabil.',
        'Pertahankan pola pikir positif.',
        'Bangun berbagai pengalaman.'
      ]
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
        en: [
          'There may be opportunities for new meetings.',
          'Connections can develop gradually.',
          'It is good to focus on inner growth first.',
          'There is a possibility of meeting a good connection.',
          'Small meetings can develop into major connections.'
        ],
        ja: [
          '新しい出会いの機会があるかもしれません。',
          '縁は徐々に発展することができます。',
          'まず内面の成長に集中するのが良いでしょう。',
          '良い縁に会える可能性があります。',
          '小さな出会いが大きな縁に発展することができます。'
        ],
        'zh-CN': [
          '可能会有新相遇的机会。',
          '缘分可以逐渐发展。',
          '首先专注于内在成长是好的。',
          '有可能遇到好的缘分。',
          '小的相遇可以发展成大的缘分。'
        ],
        'zh-TW': [
          '可能會有新相遇的機會。',
          '緣分可以逐漸發展。',
          '首先專注於內在成長是好的。',
          '有可能遇到好的緣分。',
          '小的相遇可以發展成大的緣分。'
        ],
        vi: [
          'Có thể có cơ hội cho các cuộc gặp gỡ mới.',
          'Các kết nối có thể phát triển dần dần.',
          'Tốt là tập trung vào sự phát triển nội tâm trước.',
          'Có khả năng gặp một kết nối tốt.',
          'Các cuộc gặp gỡ nhỏ có thể phát triển thành kết nối lớn.'
        ],
        id: [
          'Mungkin ada peluang untuk pertemuan baru.',
          'Koneksi dapat berkembang secara bertahap.',
          'Baik untuk fokus pada pertumbuhan batin terlebih dahulu.',
          'Ada kemungkinan bertemu koneksi yang baik.',
          'Pertemuan kecil dapat berkembang menjadi koneksi besar.'
        ]
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
          'A stable and cautious person.',
          'Has balanced and realistic thinking.',
          'Is sincere and makes steady efforts.',
          'Values communication but doesn\'t rush.',
          'Controls emotions well.'
        ],
        ja: [
          '安定していて慎重な性格の人です。',
          'バランス感があり、現実的な思考をする人です。',
          '誠実で着実な努力をする人です。',
          'コミュニケーションを重視しますが、急ぎません。',
          '自分の感情をよくコントロールする人です。'
        ],
        'zh-CN': [
          '一个稳定和谨慎的人。',
          '有着平衡和现实的思维。',
          '真诚并持续努力。',
          '重视沟通但不匆忙。',
          '能够很好地控制情绪。'
        ],
        'zh-TW': [
          '一個穩定和謹慎的人。',
          '有著平衡和現實的思維。',
          '真誠並持續努力。',
          '重視溝通但不匆忙。',
          '能夠很好地控制情緒。'
        ],
        vi: [
          'Một người ổn định và thận trọng.',
          'Có suy nghĩ cân bằng và thực tế.',
          'Chân thành và nỗ lực ổn định.',
          'Coi trọng giao tiếp nhưng không vội vàng.',
          'Kiểm soát cảm xúc tốt.'
        ],
        id: [
          'Seseorang yang stabil dan hati-hati.',
          'Memiliki pemikiran seimbang dan realistis.',
          'Tulus dan melakukan upaya yang stabil.',
          'Menghargai komunikasi tetapi tidak terburu-buru.',
          'Mengontrol emosi dengan baik.'
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
        en: [
          'Be careful of passive attitudes.',
          'Beware of hasty decisions.',
          'Be careful of excessive realism.',
          'Watch out for lack of communication.',
          'Be careful of lack of confidence.'
        ],
        ja: [
          '消極的な態度に注意してください。',
          '性急な決定を警戒してください。',
          '過度な現実主義に注意してください。',
          'コミュニケーション不足に注意してください。',
          '自信不足に注意してください。'
        ],
        'zh-CN': [
          '注意消极的态度。',
          '警惕草率的决定。',
          '注意过度的现实主义。',
          '注意缺乏沟通。',
          '注意缺乏自信。'
        ],
        'zh-TW': [
          '注意消極的態度。',
          '警惕草率的決定。',
          '注意過度的現實主義。',
          '注意缺乏溝通。',
          '注意缺乏自信。'
        ],
        vi: [
          'Hãy cẩn thận với thái độ thụ động.',
          'Hãy cảnh giác với các quyết định vội vàng.',
          'Hãy cẩn thận với chủ nghĩa hiện thực quá mức.',
          'Hãy coi chừng thiếu giao tiếp.',
          'Hãy cẩn thận với thiếu tự tin.'
        ],
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
      en: [
        'Don\'t give up is most important.',
        'Focus on developing yourself first.',
        'Maintain a positive mindset.',
        'Value honest communication.',
        'Start from small things step by step.'
      ],
      ja: [
        '諦めないことが最も重要です。',
        'まず自分を発展させることに集中してください。',
        'ポジティブな心構えを維持してください。',
        '正直なコミュニケーションを重視してください。',
        '小さなことから着実に始めてください。'
      ],
      'zh-CN': [
        '不放弃是最重要的。',
        '首先专注于发展自己。',
        '保持积极的心态。',
        '重视真诚的沟通。',
        '从小事开始一步一步进行。'
      ],
      'zh-TW': [
        '不放棄是最重要的。',
        '首先專注於發展自己。',
        '保持積極的心態。',
        '重視真誠的溝通。',
        '從小事開始一步一步進行。'
      ],
      vi: [
        'Đừng bỏ cuộc là quan trọng nhất.',
        'Tập trung vào việc phát triển bản thân trước.',
        'Duy trì tư duy tích cực.',
        'Coi trọng giao tiếp trung thực.',
        'Bắt đầu từ những điều nhỏ từng bước một.'
      ],
      id: [
        'Jangan menyerah adalah yang paling penting.',
        'Fokus pada pengembangan diri terlebih dahulu.',
        'Pertahankan pola pikir positif.',
        'Hargai komunikasi yang jujur.',
        'Mulai dari hal-hal kecil langkah demi langkah.'
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
        en: [
          'You can make a new start.',
          'If you have patience and make efforts, you can get good results.',
          'It is an important time to develop yourself first.',
          'Gradual good changes may occur.',
          'Small meetings can develop into major connections.'
        ],
        ja: [
          '新しい始まりをすることができる時期です。',
          '忍耐を持って努力すれば良い結果を得ることができる時期です。',
          'まず自分を発展させることが重要な時期です。',
          '段階的に良い変化があるかもしれない時期です。',
          '小さな出会いが大きな縁に発展することができる時期です。'
        ],
        'zh-CN': [
          '你可以开始新的开始。',
          '如果你有耐心并努力，可以获得好的结果。',
          '这是首先发展自己的重要时期。',
          '可能会有渐进的好变化。',
          '小的相遇可以发展成大的缘分。'
        ],
        'zh-TW': [
          '你可以開始新的開始。',
          '如果你有耐心並努力，可以獲得好的結果。',
          '這是首先發展自己的重要時期。',
          '可能會有漸進的好變化。',
          '小的相遇可以發展成大的緣分。'
        ],
        vi: [
          'Bạn có thể bắt đầu một khởi đầu mới.',
          'Nếu bạn có sự kiên nhẫn và nỗ lực, bạn có thể đạt được kết quả tốt.',
          'Đây là thời điểm quan trọng để phát triển bản thân trước.',
          'Có thể có những thay đổi tốt dần dần.',
          'Các cuộc gặp gỡ nhỏ có thể phát triển thành kết nối lớn.'
        ],
        id: [
          'Anda dapat membuat awal baru.',
          'Jika Anda memiliki kesabaran dan berusaha, Anda dapat mendapatkan hasil yang baik.',
          'Ini adalah waktu penting untuk mengembangkan diri terlebih dahulu.',
          'Perubahan baik yang bertahap mungkin terjadi.',
          'Pertemuan kecil dapat berkembang menjadi koneksi besar.'
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
          'A person with patience and ability to overcome difficulties.',
          'A person with positive thinking who doesn\'t lose hope.',
          'A person with strong will to grow.',
          'A person with resilience who can stand up again after failure.',
          'A person with honest and sincere personality.'
        ],
        ja: [
          '忍耐があり、困難を克服する能力がある人です。',
          'ポジティブな思考を持ち、希望を失わない人です。',
          '成長しようとする意志が強い人です。',
          '回復力があり、失敗しても再び立ち上がることができる人です。',
          '正直で誠実な性格の人です。'
        ],
        'zh-CN': [
          '有耐心和克服困难能力的人。',
          '有积极思维、不失去希望的人。',
          '有强烈成长意愿的人。',
          '有恢复力、失败后能重新站起来的人。',
          '有诚实和真诚性格的人。'
        ],
        'zh-TW': [
          '有耐心和克服困難能力的人。',
          '有積極思維、不失去希望的人。',
          '有強烈成長意願的人。',
          '有恢復力、失敗後能重新站起來的人。',
          '有誠實和真誠性格的人。'
        ],
        vi: [
          'Một người có sự kiên nhẫn và khả năng vượt qua khó khăn.',
          'Một người có suy nghĩ tích cực không mất hy vọng.',
          'Một người có ý chí mạnh mẽ để phát triển.',
          'Một người có khả năng phục hồi có thể đứng dậy lại sau thất bại.',
          'Một người có tính cách trung thực và chân thành.'
        ],
        id: [
          'Seseorang dengan kesabaran dan kemampuan untuk mengatasi kesulitan.',
          'Seseorang dengan pemikiran positif yang tidak kehilangan harapan.',
          'Seseorang dengan keinginan kuat untuk tumbuh.',
          'Seseorang dengan ketahanan yang dapat bangkit kembali setelah kegagalan.',
          'Seseorang dengan kepribadian yang jujur dan tulus.'
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
        en: [
          'Don\'t give up is most important.',
          'Beware of hasty decisions.',
          'Beware of excessive expectations.',
          'Watch out for lack of communication.',
          'Be careful of lack of confidence.'
        ],
        ja: [
          '諦めないことが最も重要です。',
          '性急な決定を警戒してください。',
          '過度な期待は警戒してください。',
          'コミュニケーション不足に注意してください。',
          '自信不足に注意してください。'
        ],
        'zh-CN': [
          '不放弃是最重要的。',
          '警惕草率的决定。',
          '警惕过度的期望。',
          '注意缺乏沟通。',
          '注意缺乏自信。'
        ],
        'zh-TW': [
          '不放棄是最重要的。',
          '警惕草率的決定。',
          '警惕過度的期望。',
          '注意缺乏溝通。',
          '注意缺乏自信。'
        ],
        vi: [
          'Đừng bỏ cuộc là quan trọng nhất.',
          'Hãy cảnh giác với các quyết định vội vàng.',
          'Hãy cảnh giác với kỳ vọng quá mức.',
          'Hãy coi chừng thiếu giao tiếp.',
          'Hãy cẩn thận với thiếu tự tin.'
        ],
        id: [
          'Jangan menyerah adalah yang paling penting.',
          'Waspadai keputusan yang tergesa-gesa.',
          'Waspadai ekspektasi berlebihan.',
          'Waspadai kurangnya komunikasi.',
          'Hati-hati terhadap kurangnya kepercayaan diri.'
        ]
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
      en: [
        'Not giving up is most important.',
        'Fully focus on developing yourself first.',
        'Always maintain a positive mindset.',
        'Strengthen patience even more.',
        'Build various experiences while finding yourself.'
      ],
      ja: [
        '諦めないことが最も重要です。',
        'まず自分を発展させることに完全に集中してください。',
        '常にポジティブな心構えを維持してください。',
        '忍耐をさらに強化してください。',
        '様々な経験を積みながら自分を見つけてください。'
      ],
      'zh-CN': [
        '不放弃是最重要的。',
        '完全专注于首先发展自己。',
        '始终保持积极的心态。',
        '进一步加强耐心。',
        '积累各种经验的同时找到自己。'
      ],
      'zh-TW': [
        '不放棄是最重要的。',
        '完全專注於首先發展自己。',
        '始終保持積極的心態。',
        '進一步加強耐心。',
        '積累各種經驗的同時找到自己。'
      ],
      vi: [
        'Không bỏ cuộc là quan trọng nhất.',
        'Hoàn toàn tập trung vào việc phát triển bản thân trước.',
        'Luôn duy trì tư duy tích cực.',
        'Tăng cường sự kiên nhẫn hơn nữa.',
        'Xây dựng các trải nghiệm khác nhau trong khi tìm hiểu bản thân.'
      ],
      id: [
        'Tidak menyerah adalah yang paling penting.',
        'Sepenuhnya fokus pada pengembangan diri terlebih dahulu.',
        'Selalu pertahankan pola pikir positif.',
        'Perkuat kesabaran bahkan lebih lagi.',
        'Bangun berbagai pengalaman sambil menemukan diri sendiri.'
      ]
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
        en: [
          'You can prepare for a new start.',
          'If you have patience and make efforts, there may be small changes.',
          'It is an important time to fully focus on developing yourself.',
          'Small changes may be expected over time.',
          'Small meetings can accumulate and develop into good connections later.'
        ],
        ja: [
          '新しい始まりを準備することができる時期です。',
          '忍耐を持って努力すれば小さな変化があるかもしれない時期です。',
          '自分を発展させることに完全に集中することが重要な時期です。',
          '時間が経つにつれて小さな変化が予想される時期です。',
          '小さな出会いが積み重ねられ、後で良い縁に発展することができる時期です。'
        ],
        'zh-CN': [
          '你可以准备新的开始。',
          '如果你有耐心并努力，可能会有小的变化。',
          '这是完全专注于发展自己的重要时期。',
          '随着时间的推移，可能会有小的变化。',
          '小的相遇可以累积，后来发展成好的缘分。'
        ],
        'zh-TW': [
          '你可以準備新的開始。',
          '如果你有耐心並努力，可能會有小的變化。',
          '這是完全專注於發展自己的重要時期。',
          '隨著時間的推移，可能會有小的變化。',
          '小的相遇可以累積，後來發展成好的緣分。'
        ],
        vi: [
          'Bạn có thể chuẩn bị cho một khởi đầu mới.',
          'Nếu bạn có sự kiên nhẫn và nỗ lực, có thể có những thay đổi nhỏ.',
          'Đây là thời điểm quan trọng để hoàn toàn tập trung vào việc phát triển bản thân.',
          'Những thay đổi nhỏ có thể được mong đợi theo thời gian.',
          'Các cuộc gặp gỡ nhỏ có thể tích lũy và phát triển thành các kết nối tốt sau này.'
        ],
        id: [
          'Anda dapat mempersiapkan awal baru.',
          'Jika Anda memiliki kesabaran dan berusaha, mungkin ada perubahan kecil.',
          'Ini adalah waktu penting untuk sepenuhnya fokus pada pengembangan diri.',
          'Perubahan kecil mungkin diharapkan seiring waktu.',
          'Pertemuan kecil dapat terakumulasi dan berkembang menjadi koneksi yang baik di kemudian hari.'
        ]
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
          'A person with very strong patience and persistence who doesn\'t give up.',
          'A person with strong resilience who can become stronger through difficulties.',
          'A person with very strong will to grow.',
          'A person with positive thinking who doesn\'t lose hope.',
          'A person with honest and sincere personality.'
        ],
        ja: [
          '非常に強い忍耐があり、諦めない粘り強さがある人です。',
          '強い回復力があり、困難を通じてより強くなることのできる人です。',
          '成長しようとする意志が非常に強い人です。',
          'ポジティブな思考を持ち、希望を失わない人です。',
          '正直で誠実な性格の人です。'
        ],
        'zh-CN': [
          '有非常强的耐心和永不放弃的坚持的人。',
          '有很强的恢复力，可以通过困难变得更强的人。',
          '有非常强烈的成长意愿的人。',
          '有积极思维、不失去希望的人。',
          '有诚实和真诚性格的人。'
        ],
        'zh-TW': [
          '有非常強的耐心和永不放棄的堅持的人。',
          '有很強的恢復力，可以通過困難變得更強的人。',
          '有非常強烈的成長意願的人。',
          '有積極思維、不失去希望的人。',
          '有誠實和真誠性格的人。'
        ],
        vi: [
          'Một người có sự kiên nhẫn rất mạnh mẽ và sự bền bỉ không bỏ cuộc.',
          'Một người có khả năng phục hồi mạnh mẽ có thể trở nên mạnh mẽ hơn thông qua khó khăn.',
          'Một người có ý chí rất mạnh mẽ để phát triển.',
          'Một người có suy nghĩ tích cực không mất hy vọng.',
          'Một người có tính cách trung thực và chân thành.'
        ],
        id: [
          'Seseorang dengan kesabaran yang sangat kuat dan ketetapan yang tidak menyerah.',
          'Seseorang dengan ketahanan yang kuat yang dapat menjadi lebih kuat melalui kesulitan.',
          'Seseorang dengan keinginan yang sangat kuat untuk tumbuh.',
          'Seseorang dengan pemikiran positif yang tidak kehilangan harapan.',
          'Seseorang dengan kepribadian yang jujur dan tulus.'
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
        en: [
          'Never give up is most important.',
          'Absolutely beware of hasty decisions.',
          'Beware of excessive expectations.',
          'Very careful of lack of communication.',
          'Very careful of lack of confidence.'
        ],
        ja: [
          '絶対に諦めないことが最も重要です。',
          '性急な決定を絶対に警戒してください。',
          '過度な期待を警戒してください。',
          'コミュニケーション不足に非常に注意してください。',
          '自信不足に非常に注意してください。'
        ],
        'zh-CN': [
          '永不放弃是最重要的。',
          '绝对要警惕草率的决定。',
          '警惕过度的期望。',
          '非常注意缺乏沟通。',
          '非常注意缺乏自信。'
        ],
        'zh-TW': [
          '永不放棄是最重要的。',
          '絕對要警惕草率的決定。',
          '警惕過度的期望。',
          '非常注意缺乏溝通。',
          '非常注意缺乏自信。'
        ],
        vi: [
          'Không bao giờ bỏ cuộc là quan trọng nhất.',
          'Tuyệt đối cảnh giác với các quyết định vội vàng.',
          'Hãy cảnh giác với kỳ vọng quá mức.',
          'Rất cẩn thận với thiếu giao tiếp.',
          'Rất cẩn thận với thiếu tự tin.'
        ],
        id: [
          'Tidak pernah menyerah adalah yang paling penting.',
          'Sangat waspada terhadap keputusan yang tergesa-gesa.',
          'Waspadai ekspektasi berlebihan.',
          'Sangat hati-hati terhadap kurangnya komunikasi.',
          'Sangat hati-hati terhadap kurangnya kepercayaan diri.'
        ]
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
      en: [
        'Absolutely not giving up is most important.',
        'It is essential to fully focus on developing yourself first.',
        'It is very important to always maintain a positive mindset.',
        'Maximize patience.',
        'Build various experiences while completely finding yourself.'
      ],
      ja: [
        '絶対に諦めないことが最も重要です。',
        'まず自分を発展させることに完全に集中することが必須です。',
        '常にポジティブな心構えを維持することが非常に重要です。',
        '忍耐を最大化してください。',
        '様々な経験を積みながら完全に自分を見つけてください。'
      ],
      'zh-CN': [
        '绝对不放弃是最重要的。',
        '完全专注于首先发展自己是必需的。',
        '始终保持积极的心态非常重要。',
        '最大限度地加强耐心。',
        '积累各种经验的同时完全找到自己。'
      ],
      'zh-TW': [
        '絕對不放棄是最重要的。',
        '完全專注於首先發展自己是必需的。',
        '始終保持積極的心態非常重要。',
        '最大限度地加強耐心。',
        '積累各種經驗的同時完全找到自己。'
      ],
      vi: [
        'Hoàn toàn không bỏ cuộc là quan trọng nhất.',
        'Việc hoàn toàn tập trung vào phát triển bản thân trước là điều cần thiết.',
        'Việc luôn duy trì tư duy tích cực là rất quan trọng.',
        'Tối đa hóa sự kiên nhẫn.',
        'Xây dựng các trải nghiệm khác nhau trong khi hoàn toàn tìm hiểu bản thân.'
      ],
      id: [
        'Sangat tidak menyerah adalah yang paling penting.',
        'Penting untuk sepenuhnya fokus pada pengembangan diri terlebih dahulu.',
        'Sangat penting untuk selalu mempertahankan pola pikir positif.',
        'Maksimalkan kesabaran.',
        'Bangun berbagai pengalaman sambil sepenuhnya menemukan diri sendiri.'
      ]
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
        en: [
          'You can prepare for a very important new start.',
          'If you have patience and make continuous efforts, there may be small changes.',
          'It is a very important time to fully focus on developing yourself.',
          'Small changes may be expected after much time passes.',
          'Small meetings can accumulate and develop into good connections later.'
        ],
        ja: [
          '非常に重要な新しい始まりを準備することができる時期です。',
          '忍耐を持って絶え間なく努力すれば小さな変化があるかもしれない時期です。',
          '自分を発展させることに完全に集中することが非常に重要な時期です。',
          '多くの時間が経った後、小さな変化が予想される時期です。',
          '小さな出会いが積み重ねられ、後で良い縁に発展することができる時期です。'
        ],
        'zh-CN': [
          '你可以准备一个非常重要的新开始。',
          '如果你有耐心并持续努力，可能会有小的变化。',
          '这是完全专注于发展自己的非常重要的时期。',
          '经过很长时间后，可能会有小的变化。',
          '小的相遇可以累积，后来发展成好的缘分。'
        ],
        'zh-TW': [
          '你可以準備一個非常重要的新開始。',
          '如果你有耐心並持續努力，可能會有小的變化。',
          '這是完全專注於發展自己的非常重要的時期。',
          '經過很長時間後，可能會有小的變化。',
          '小的相遇可以累積，後來發展成好的緣分。'
        ],
        vi: [
          'Bạn có thể chuẩn bị cho một khởi đầu mới rất quan trọng.',
          'Nếu bạn có sự kiên nhẫn và nỗ lực liên tục, có thể có những thay đổi nhỏ.',
          'Đây là thời điểm rất quan trọng để hoàn toàn tập trung vào việc phát triển bản thân.',
          'Những thay đổi nhỏ có thể được mong đợi sau khi nhiều thời gian trôi qua.',
          'Các cuộc gặp gỡ nhỏ có thể tích lũy và phát triển thành các kết nối tốt sau này.'
        ],
        id: [
          'Anda dapat mempersiapkan awal baru yang sangat penting.',
          'Jika Anda memiliki kesabaran dan melakukan upaya berkelanjutan, mungkin ada perubahan kecil.',
          'Ini adalah waktu yang sangat penting untuk sepenuhnya fokus pada pengembangan diri.',
          'Perubahan kecil mungkin diharapkan setelah banyak waktu berlalu.',
          'Pertemuan kecil dapat terakumulasi dan berkembang menjadi koneksi yang baik di kemudian hari.'
        ]
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
          'A person with extremely strong persistence and patience who absolutely does not give up.',
          'A person with extremely strong resilience who can become even stronger through difficulties.',
          'A person with extremely strong will to grow.',
          'A person with positive thinking who absolutely does not lose hope.',
          'A person with honest and sincere personality.'
        ],
        ja: [
          '極めて強い粘り強さと忍耐があり、絶対に諦めない人です。',
          '極めて強い回復力があり、困難を通じてより強くなることのできる人です。',
          '成長しようとする意志が極めて強い人です。',
          'ポジティブな思考を持ち、希望を絶対に失わない人です。',
          '正直で誠実な性格の人です。'
        ],
        'zh-CN': [
          '有极其强的坚持和耐心，绝对不放弃的人。',
          '有极强的恢复力，可以通过困难变得更强的人。',
          '有极其强烈的成长意愿的人。',
          '有积极思维、绝对不失去希望的人。',
          '有诚实和真诚性格的人。'
        ],
        'zh-TW': [
          '有極其強的堅持和耐心，絕對不放棄的人。',
          '有極強的恢復力，可以通過困難變得更強的人。',
          '有極其強烈的成長意願的人。',
          '有積極思維、絕對不失去希望的人。',
          '有誠實和真誠性格的人。'
        ],
        vi: [
          'Một người có sự bền bỉ và kiên nhẫn cực kỳ mạnh mẽ hoàn toàn không bỏ cuộc.',
          'Một người có khả năng phục hồi cực kỳ mạnh mẽ có thể trở nên mạnh mẽ hơn thông qua khó khăn.',
          'Một người có ý chí cực kỳ mạnh mẽ để phát triển.',
          'Một người có suy nghĩ tích cực hoàn toàn không mất hy vọng.',
          'Một người có tính cách trung thực và chân thành.'
        ],
        id: [
          'Seseorang dengan ketetapan dan kesabaran yang sangat kuat yang benar-benar tidak menyerah.',
          'Seseorang dengan ketahanan yang sangat kuat yang dapat menjadi lebih kuat melalui kesulitan.',
          'Seseorang dengan keinginan yang sangat kuat untuk tumbuh.',
          'Seseorang dengan pemikiran positif yang benar-benar tidak kehilangan harapan.',
          'Seseorang dengan kepribadian yang jujur dan tulus.'
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
        en: [
          'Absolutely never give up is most important.',
          'Absolutely absolutely beware of hasty decisions.',
          'Very beware of excessive expectations.',
          'Absolutely careful of lack of communication.',
          'Absolutely careful of lack of confidence.'
        ],
        ja: [
          '絶対に絶対に諦めないことが最も重要です。',
          '性急な決定を絶対に絶対に警戒してください。',
          '過度な期待を非常に警戒してください。',
          'コミュニケーション不足に絶対に注意してください。',
          '自信不足に絶対に注意してください。'
        ],
        'zh-CN': [
          '绝对永不放弃是最重要的。',
          '绝对要警惕草率的决定。',
          '非常警惕过度的期望。',
          '绝对注意缺乏沟通。',
          '绝对注意缺乏自信。'
        ],
        'zh-TW': [
          '絕對永不放棄是最重要的。',
          '絕對要警惕草率的決定。',
          '非常警惕過度的期望。',
          '絕對注意缺乏溝通。',
          '絕對注意缺乏自信。'
        ],
        vi: [
          'Hoàn toàn không bao giờ bỏ cuộc là quan trọng nhất.',
          'Tuyệt đối tuyệt đối cảnh giác với các quyết định vội vàng.',
          'Rất cảnh giác với kỳ vọng quá mức.',
          'Tuyệt đối cẩn thận với thiếu giao tiếp.',
          'Tuyệt đối cẩn thận với thiếu tự tin.'
        ],
        id: [
          'Sangat tidak pernah menyerah adalah yang paling penting.',
          'Sangat sangat waspada terhadap keputusan yang tergesa-gesa.',
          'Sangat waspada terhadap ekspektasi berlebihan.',
          'Sangat hati-hati terhadap kurangnya komunikasi.',
          'Sangat hati-hati terhadap kurangnya kepercayaan diri.'
        ]
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

