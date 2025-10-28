// 관상 보기 테스트 데이터
export interface FaceReadingResult {
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
    wealth: Record<string, string[]>; // 10개
    love: Record<string, string[]>; // 10개
    success: Record<string, string[]>; // 10개
  };
}

export interface FaceReadingTestClientProps {
  locale: string;
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  playCount?: number;
  similarTests?: any[];
}

// 관상 보기 결과 데이터
export const faceReadingResults: FaceReadingResult[] = [
  {
    id: 1,
    title: {
      ko: '대길상 - 천생 리더',
      en: 'Great Fortune - Natural Leader',
      ja: '大吉相 - 天然のリーダー',
      'zh-CN': '大吉相 - 天生领袖',
      'zh-TW': '大吉相 - 天生領袖',
      vi: 'Đại Cát Tướng - Lãnh Đạo Thiên Bẩm',
      id: 'Nasib Besar - Pemimpin Alami'
    },
    description: {
      ko: [
        '당신의 얼굴은 천생 리더의 상입니다! 이마가 넓고 눈이 밝으며, 코가 높고 입이 단정합니다. 이런 관상을 가진 분은 타고난 리더십과 카리스마를 가지고 있어 많은 사람들이 따르게 됩니다.',
        '대길상의 얼굴은 넓은 이마와 밝은 눈, 높은 코가 특징입니다. 이런 관상은 타고난 리더십과 강한 카리스마를 의미하며, 사람들을 자연스럽게 이끄는 능력을 가지고 있습니다.',
        '이마가 넓고 광택이 있으며, 눈이 크고 밝은 당신은 천생의 지도자 상입니다. 높은 코와 단정한 입은 확고한 의지와 통솔력을 나타냅니다.',
        '넓고 평평한 이마, 밝고 예리한 눈매, 높고 선명한 코는 당신이 타고난 리더임을 보여줍니다. 많은 사람들이 당신을 따르고 존경하게 될 것입니다.',
        '대길상의 관상은 이마의 넓이와 눈의 밝기, 코의 높이가 조화롭게 균형을 이룹니다. 이런 얼굴을 가진 분은 조직이나 집단에서 자연스럽게 중심 역할을 하게 됩니다.',
        '당신의 얼굴은 리더십의 모든 요소를 갖추고 있습니다. 넓은 이마는 지혜를, 밝은 눈은 판단력을, 높은 코는 의지를 나타냅니다.',
        '천생 리더의 상은 단순히 외모가 아니라 내면의 기질이 얼굴에 드러난 것입니다. 당신은 타인을 이끌고 변화를 만들어낼 수 있는 능력을 타고났습니다.',
        '넓은 이마와 높은 코, 단정한 입꼬리는 당신이 큰 일을 할 수 있는 관상입니다. 사람들이 자연스럽게 당신에게 의지하고 따르게 됩니다.',
        '대길상의 얼굴은 권위와 카리스마가 느껴집니다. 이런 관상을 가진 분은 정치, 사업, 교육 등 다양한 분야에서 두각을 나타낼 수 있습니다.',
        '이마, 눈, 코, 입이 모두 균형 잡히고 명확한 당신은 타고난 리더입니다. 많은 사람들이 당신의 판단을 신뢰하고 따를 것입니다.'
      ],
      en: [
        'Your face shows the signs of a natural leader! With a broad forehead, bright eyes, high nose, and well-shaped mouth, you possess innate leadership and charisma that naturally attracts followers.',
        'The face of great fortune features a broad forehead, bright eyes, and a high nose. This physiognomy signifies natural leadership and strong charisma, with the ability to naturally guide people.',
        'Your broad, glossy forehead and large, bright eyes indicate you are a born leader. Your high nose and well-formed mouth show firm will and leadership qualities.',
        'A wide, flat forehead, bright and sharp eyes, and a high, defined nose show that you are a natural leader. Many people will follow and respect you.',
        'The physiognomy of great fortune harmoniously balances the width of the forehead, the brightness of the eyes, and the height of the nose. Those with such faces naturally take center roles in organizations or groups.',
        'Your face possesses all the elements of leadership. A broad forehead represents wisdom, bright eyes represent judgment, and a high nose represents willpower.',
        'The face of a natural leader is not just appearance, but inner temperament revealed through facial features. You were born with the ability to guide others and create change.',
        'A broad forehead, high nose, and well-formed mouth corners indicate you can accomplish great things. People will naturally rely on and follow you.',
        'The face of great fortune exudes authority and charisma. Those with such physiognomy can excel in various fields such as politics, business, and education.',
        'Your balanced and clear forehead, eyes, nose, and mouth mark you as a natural leader. Many people will trust and follow your judgment.'
      ],
      ja: [
        'あなたの顔は天然のリーダーの相です！広い額、明るい目、高い鼻、整った口元を持つあなたは、生まれながらのリーダーシップとカリスマ性を持っています。',
        '大吉相の顔は広い額と明るい目、高い鼻が特徴です。この観相は生まれつきのリーダーシップと強いカリスマ性を意味し、人々を自然に導く能力を持っています。',
        '額が広く光沢があり、目が大きく明るいあなたは、天性の指導者の相です。高い鼻と整った口は、確固たる意志と統率力を表しています。',
        '広く平らな額、明るく鋭い目つき、高く明確な鼻は、あなたが生まれつきのリーダーであることを示しています。多くの人があなたに従い、尊敬するでしょう。',
        '大吉相の観相は、額の幅、目の明るさ、鼻の高さが調和の取れたバランスを保っています。このような顔を持つ人は、組織や集団で自然に中心的な役割を果たすことになります。',
        'あなたの顔はリーダーシップのすべての要素を持っています。広い額は知恵を、明るい目は判断力を、高い鼻は意志力を表しています。',
        '天然のリーダーの相は、単なる外見ではなく、内面の気質が顔に現れたものです。あなたは他人を導き、変化を生み出す能力を生まれつき持っています。',
        '広い額と高い鼻、整った口角は、あなたが大きなことを成し遂げることができる観相です。人々は自然にあなたに頼り、従うでしょう。',
        '大吉相の顔は権威とカリスマを放っています。このような観相を持つ人は、政治、ビジネス、教育など、さまざまな分野で頭角を現すことができます。',
        '額、目、鼻、口がすべてバランスが取れて明確なあなたは、生まれつきのリーダーです。多くの人があなたの判断を信頼し、従うでしょう。'
      ],
      'zh-CN': [
        '你的面相是大吉相！额头宽阔、眼睛明亮、鼻梁高挺、嘴巴端正，具有天生的领导力和魅力，自然吸引众人跟随。',
        '大吉相的面容特征是宽阔的额头、明亮的眼睛和高挺的鼻子。这种面相意味着天生的领导力和强大的魅力，具有自然引导他人的能力。',
        '你的额头宽阔有光泽，眼睛大而明亮，是天生的领导者面相。高挺的鼻子和端正的嘴巴显示出坚定的意志和领导力。',
        '宽阔平坦的额头、明亮锐利的眼神、高挺清晰的鼻梁显示出你是天生的领导者。许多人会跟随并尊敬你。',
        '大吉相的面相特点是额头宽度、眼睛明亮度和鼻梁高度和谐平衡。拥有这种面容的人在组织或团体中自然会担当核心角色。',
        '你的面容具备了领导力的所有要素。宽阔的额头代表智慧，明亮的眼睛代表判断力，高挺的鼻子代表意志力。',
        '天生领导者的面相不仅仅是外貌，而是内在气质通过面部特征的展现。你天生具有引导他人和创造变革的能力。',
        '宽阔的额头、高挺的鼻子和端正的嘴角表明你能够成就大事业。人们会自然地依赖并跟随你。',
        '大吉相的面容散发出权威和魅力。拥有这种面相的人可以在政治、商业、教育等各个领域脱颖而出。',
        '你的额头、眼睛、鼻子、嘴巴都平衡清晰，标志着你是天生的领导者。许多人会信任并遵循你的判断。'
      ],
      'zh-TW': [
        '你的面相是大吉相！額頭寬闊、眼睛明亮、鼻樑高挺、嘴巴端正，具有天生的領導力和魅力，自然吸引眾人跟隨。',
        '大吉相的面容特徵是寬闊的額頭、明亮的眼睛和高挺的鼻子。這種面相意味著天生的領導力和強大的魅力，具有自然引導他人的能力。',
        '你的額頭寬闊有光澤，眼睛大而明亮，是天生的領導者面相。高挺的鼻子和端正的嘴巴顯示出堅定的意志和領導力。',
        '寬闊平坦的額頭、明亮銳利的眼神、高挺清晰的鼻樑顯示出你是天生的領導者。許多人會跟隨並尊敬你。',
        '大吉相的面相特點是額頭寬度、眼睛明亮度和鼻樑高度和諧平衡。擁有這種面容的人在組織或團體中自然會擔當核心角色。',
        '你的面容具備了領導力的所有要素。寬闊的額頭代表智慧，明亮的眼睛代表判斷力，高挺的鼻子代表意志力。',
        '天生領導者的面相不僅僅是外貌，而是內在氣質通過面部特徵的展現。你天生具有引導他人和創造變革的能力。',
        '寬闊的額頭、高挺的鼻子和端正的嘴角表明你能夠成就大事業。人們會自然地依賴並跟隨你。',
        '大吉相的面容散發出權威和魅力。擁有這種面相的人可以在政治、商業、教育等各個領域脫穎而出。',
        '你的額頭、眼睛、鼻子、嘴巴都平衡清晰，標誌著你是天生的領導者。許多人會信任並遵循你的判斷。'
      ],
      vi: [
        'Khuôn mặt của bạn là tướng đại cát! Trán rộng, mắt sáng, mũi cao, miệng đều đặn, bạn có tài lãnh đạo và sức hút tự nhiên thu hút mọi người.',
        'Khuôn mặt đại cát có đặc điểm là trán rộng, mắt sáng và mũi cao. Tướng số này có nghĩa là tài lãnh đạo và sức hút mạnh mẽ bẩm sinh, có khả năng hướng dẫn người khác một cách tự nhiên.',
        'Trán rộng và bóng, mắt to và sáng, bạn có tướng lãnh đạo thiên bẩm. Mũi cao và miệng đều đặn cho thấy ý chí kiên định và khả năng lãnh đạo.',
        'Trán rộng và phẳng, đôi mắt sáng và sắc nét, sống mũi cao và rõ ràng cho thấy bạn là một nhà lãnh đạo bẩm sinh. Nhiều người sẽ theo bạn và tôn trọng bạn.',
        'Tướng số đại cát có đặc điểm là sự cân bằng hài hòa giữa độ rộng của trán, độ sáng của mắt và độ cao của mũi. Những người có khuôn mặt như vậy sẽ tự nhiên đảm nhận vai trò trung tâm trong các tổ chức hoặc nhóm.',
        'Khuôn mặt của bạn sở hữu tất cả các yếu tố của khả năng lãnh đạo. Trán rộng đại diện cho trí tuệ, mắt sáng đại diện cho khả năng phán đoán, mũi cao đại diện cho ý chí.',
        'Tướng số của một nhà lãnh đạo thiên bẩm không chỉ là ngoại hình, mà là tính cách bên trong được thể hiện qua các đặc điểm khuôn mặt. Bạn được sinh ra với khả năng hướng dẫn người khác và tạo ra thay đổi.',
        'Trán rộng, mũi cao và khóe miệng đều đặn cho thấy bạn có thể đạt được những thành tựu lớn. Mọi người sẽ tự nhiên phụ thuộc và theo bạn.',
        'Khuôn mặt đại cát toát ra quyền uy và sức hút. Những người có tướng số như vậy có thể nổi bật trong nhiều lĩnh vực như chính trị, kinh doanh và giáo dục.',
        'Trán, mắt, mũi và miệng của bạn đều cân đối và rõ ràng, đánh dấu bạn là một nhà lãnh đạo thiên bẩm. Nhiều người sẽ tin tưởng và tuân theo sự phán đoán của bạn.'
      ],
      id: [
        'Wajah Anda menunjukkan tanda pemimpin alami! Dengan dahi lebar, mata cerah, hidung tinggi, dan mulut yang rapi, Anda memiliki kepemimpinan dan karisma bawaan.',
        'Wajah nasib besar ditandai dengan dahi lebar, mata cerah, dan hidung tinggi. Fisiognomi ini menandakan kepemimpinan bawaan dan karisma kuat, dengan kemampuan untuk secara alami memandu orang lain.',
        'Dahi lebar dan berkilau, mata besar dan cerah, Anda memiliki wajah pemimpin bawaan. Hidung tinggi dan mulut rapi menunjukkan kemauan kuat dan kualitas kepemimpinan.',
        'Dahi lebar dan datar, mata cerah dan tajam, hidung tinggi dan jelas menunjukkan bahwa Anda adalah pemimpin alami. Banyak orang akan mengikuti dan menghormati Anda.',
        'Fisiognomi nasib besar memiliki keseimbangan harmonis antara lebar dahi, kecerahan mata, dan tinggi hidung. Mereka yang memiliki wajah seperti ini secara alami akan mengambil peran sentral dalam organisasi atau kelompok.',
        'Wajah Anda memiliki semua elemen kepemimpinan. Dahi lebar mewakili kebijaksanaan, mata cerah mewakili penilaian, dan hidung tinggi mewakili tekad.',
        'Wajah pemimpin alami bukan hanya penampilan, tetapi temperamen batin yang terungkap melalui fitur wajah. Anda dilahirkan dengan kemampuan untuk memandu orang lain dan menciptakan perubahan.',
        'Dahi lebar, hidung tinggi, dan sudut mulut yang rapi menunjukkan bahwa Anda dapat mencapai hal-hal besar. Orang akan secara alami bergantung pada dan mengikuti Anda.',
        'Wajah nasib besar memancarkan otoritas dan karisma. Mereka yang memiliki fisiognomi seperti ini dapat menonjol di berbagai bidang seperti politik, bisnis, dan pendidikan.',
        'Dahi, mata, hidung, dan mulut Anda yang seimbang dan jelas menandai Anda sebagai pemimpin alami. Banyak orang akan mempercayai dan mengikuti penilaian Anda.'
      ]
    },
    emoji: '👑',
    scoreRange: [90, 100],
    strengths: {
      ko: ['천생 리더십', '강한 카리스마', '뛰어난 판단력', '사람을 끌어당기는 매력'],
      en: ['Natural Leadership', 'Strong Charisma', 'Excellent Judgment', 'Magnetic Appeal'],
      ja: ['天然のリーダーシップ', '強いカリスマ', '優れた判断力', '人を引きつける魅力'],
      'zh-CN': ['天生领导力', '强大魅力', '卓越判断力', '吸引人的魅力'],
      'zh-TW': ['天生領導力', '強大魅力', '卓越判斷力', '吸引人的魅力'],
      vi: ['Tài lãnh đạo thiên bẩm', 'Sức hút mạnh mẽ', 'Khả năng phán đoán xuất sắc', 'Sức hút thu hút người khác'],
      id: ['Kepemimpinan Alami', 'Karisma Kuat', 'Penilaian Luar Biasa', 'Daya Tarik Magnetis']
    },
    recommendations: {
      ko: ['리더십 역할 도전', '사업 창업 고려', '정치/사회 활동 참여', '멘토 역할 수행'],
      en: ['Take on Leadership Roles', 'Consider Entrepreneurship', 'Engage in Politics/Social Activities', 'Become a Mentor'],
      ja: ['リーダーシップ役割への挑戦', '起業の検討', '政治・社会活動への参加', 'メンター役の実行'],
      'zh-CN': ['挑战领导角色', '考虑创业', '参与政治/社会活动', '担任导师'],
      'zh-TW': ['挑戰領導角色', '考慮創業', '參與政治/社會活動', '擔任導師'],
      vi: ['Thử thách vai trò lãnh đạo', 'Cân nhắc khởi nghiệp', 'Tham gia hoạt động chính trị/xã hội', 'Làm người cố vấn'],
      id: ['Tantang Peran Kepemimpinan', 'Pertimbangkan Kewirausahaan', 'Terlibat dalam Politik/Aktivitas Sosial', 'Jadilah Mentor']
    },
    personality: {
      ko: [
        '타고난 리더십과 강한 카리스마로 사람들을 자연스럽게 이끄는 능력이 있습니다.',
        '확고한 의지와 통솔력으로 어려운 상황에서도 침착하게 판단하고 실행합니다.',
        '넓은 시야와 뛰어난 판단력으로 복잡한 문제를 해결하는 능력이 탁월합니다.',
        '사람들의 마음을 읽고 공감하는 능력이 뛰어나 관계 형성에 능합니다.',
        '책임감이 강하고 목표 지향적이며 추진력이 뛰어난 성격입니다.',
        '권위를 자연스럽게 갖추고 있어 많은 사람들이 신뢰하고 따릅니다.',
        '도전 정신이 강하고 변화를 두려워하지 않으며 혁신을 추구합니다.',
        '타인의 의견을 존중하되 자신의 신념을 확고히 지키는 강인한 성격입니다.',
        '조직과 집단에서 중심 역할을 자연스럽게 수행하며 협력과 조화를 추구합니다.',
        '뛰어난 의사소통 능력으로 복잡한 상황을 명확하게 설명하고 설득합니다.'
      ],
      en: [
        'Natural leadership and strong charisma allow you to naturally guide people.',
        'Firm will and leadership enable calm judgment and execution even in difficult situations.',
        'Broad perspective and excellent judgment give you outstanding problem-solving abilities.',
        'Excellent ability to read and empathize with people makes you skilled at building relationships.',
        'Strong sense of responsibility, goal-oriented, with outstanding drive.',
        'Natural authority inspires trust and following from many people.',
        'Strong spirit of challenge, unafraid of change, pursues innovation.',
        'Respects others\' opinions but firmly maintains own beliefs with strong character.',
        'Naturally performs central roles in organizations and groups, pursuing cooperation and harmony.',
        'Excellent communication skills to clearly explain and persuade in complex situations.'
      ],
      ja: [
        '生まれながらのリーダーシップと強いカリスマ性で人々を自然に導く能力があります。',
        '確固たる意志と統率力で困難な状況でも冷静に判断し実行します。',
        '広い視野と優れた判断力で複雑な問題を解決する能力が卓越しています。',
        '人々の心を読み共感する能力が優れており、関係構築に長けています。',
        '責任感が強く目標志向で推進力に優れた性格です。',
        '権威を自然に備えており、多くの人が信頼し従います。',
        '挑戦精神が強く変化を恐れず革新を追求します。',
        '他人の意見を尊重しながらも自分の信念を固く守る強靭な性格です。',
        '組織や集団で中心的な役割を自然に果たし、協力と調和を追求します。',
        '優れたコミュニケーション能力で複雑な状況を明確に説明し説得します。'
      ],
      'zh-CN': [
        '天生的领导力和强大的魅力能自然地引导他人。',
        '坚定的意志和领导力能够在困难情况下冷静地判断和执行。',
        '广阔的视野和卓越的判断力让你拥有出色的解决问题的能力。',
        '出色的读懂他人和共情的能力使你在建立关系方面很擅长。',
        '强烈的责任感、目标导向、具有出色的执行力。',
        '自然的权威感让许多人信任并跟随你。',
        '强烈的挑战精神，不惧怕变化，追求创新。',
        '尊重他人意见但坚定维护自己信念的坚强性格。',
        '在组织和团体中自然地承担核心角色，追求合作与和谐。',
        '出色的沟通能力能够在复杂情况下清楚地解释和说服。'
      ],
      'zh-TW': [
        '天生的領導力和強大的魅力能自然地引導他人。',
        '堅定的意志和領導力能夠在困難情況下冷靜地判斷和執行。',
        '廣闊的視野和卓越的判斷力讓你擁有出色的解決問題的能力。',
        '出色的讀懂他人和共情的能力使你在建立關係方面很擅長。',
        '強烈的責任感、目標導向、具有出色的執行力。',
        '自然的權威感讓許多人信任並跟隨你。',
        '強烈的挑戰精神，不懼怕變化，追求創新。',
        '尊重他人意見但堅定維護自己信念的堅強性格。',
        '在組織和團體中自然地承擔核心角色，追求合作與和諧。',
        '出色的溝通能力能夠在複雜情況下清楚地解釋和說服。'
      ],
      vi: [
        'Tài lãnh đạo thiên bẩm và sức hút mạnh mẽ cho phép bạn tự nhiên hướng dẫn người khác.',
        'Ý chí kiên định và khả năng lãnh đạo cho phép phán đoán và thực thi bình tĩnh ngay cả trong tình huống khó khăn.',
        'Góc nhìn rộng và khả năng phán đoán xuất sắc mang lại khả năng giải quyết vấn đề vượt trội.',
        'Khả năng đọc và đồng cảm với người khác xuất sắc giúp bạn giỏi xây dựng mối quan hệ.',
        'Ý thức trách nhiệm mạnh mẽ, định hướng mục tiêu, với động lực xuất sắc.',
        'Quyền uy tự nhiên truyền cảm hứng tin tưởng và theo đuổi từ nhiều người.',
        'Tinh thần thử thách mạnh mẽ, không sợ thay đổi, theo đuổi đổi mới.',
        'Tôn trọng ý kiến người khác nhưng kiên định duy trì niềm tin của mình với tính cách mạnh mẽ.',
        'Tự nhiên thực hiện vai trò trung tâm trong tổ chức và nhóm, theo đuổi hợp tác và hòa hợp.',
        'Kỹ năng giao tiếp xuất sắc để giải thích và thuyết phục rõ ràng trong các tình huống phức tạp.'
      ],
      id: [
        'Kepemimpinan alami dan karisma kuat memungkinkan Anda secara alami memandu orang lain.',
        'Kemauan kuat dan kepemimpinan memungkinkan penilaian dan eksekusi yang tenang bahkan dalam situasi sulit.',
        'Perspektif luas dan penilaian yang sangat baik memberikan kemampuan pemecahan masalah yang luar biasa.',
        'Kemampuan membaca dan berempati dengan orang yang sangat baik membuat Anda terampil dalam membangun hubungan.',
        'Rasa tanggung jawab yang kuat, berorientasi pada tujuan, dengan dorongan yang luar biasa.',
        'Otoritas alami menginspirasi kepercayaan dan mengikuti dari banyak orang.',
        'Semangat tantangan yang kuat, tidak takut akan perubahan, mengejar inovasi.',
        'Menghormati pendapat orang lain tetapi tegas mempertahankan keyakinan sendiri dengan karakter yang kuat.',
        'Secara alami melakukan peran sentral dalam organisasi dan kelompok, mengejar kerjasama dan harmoni.',
        'Keterampilan komunikasi yang sangat baik untuk menjelaskan dan meyakinkan secara jelas dalam situasi kompleks.'
      ]
    },
    advice: {
      ko: [
        '당신의 타고난 리더십을 활용하여 더 큰 세상을 향해 도전하세요. 많은 사람들이 당신을 기다리고 있습니다.',
        '넓은 이마와 밝은 눈은 지혜와 판단력을 나타냅니다. 이 능력을 바탕으로 조직이나 집단에서 리더 역할을 수행해보세요.',
        '타고난 카리스마를 잘 활용하면 정치나 사업 분야에서 큰 성공을 거둘 수 있습니다. 자신감을 가지고 도전하세요.',
        '높은 코는 강한 의지를 의미합니다. 어려운 상황에서도 포기하지 말고 끝까지 밀어붙이면 반드시 성공할 것입니다.',
        '사람들을 이끄는 능력이 있으니, 멘토나 교육자로서 후배들을 가르치고 이끄는 역할도 고려해보세요.',
        '당신의 관상은 큰 일을 할 수 있는 상입니다. 작은 일에 만족하지 말고 더 큰 목표를 향해 나아가세요.',
        '리더십은 단순히 명령하는 것이 아닙니다. 타인의 마음을 읽고 공감하는 능력도 함께 발휘하세요.',
        '권위 있는 인상은 자연스럽게 존경을 받게 만듭니다. 하지만 자신의 권위를 남용하지 말고 신중하게 사용하세요.',
        '조직이나 집단에서 중심 역할을 수행할 준비가 되어 있습니다. 더 큰 무대에서 자신의 능력을 발휘해보세요.',
        '타고난 통솔력으로 어려운 문제를 해결하고 변화를 만들어내는 리더가 되세요.'
      ],
      en: [
        'Use your natural leadership to challenge yourself toward a bigger world. Many people are waiting for you.',
        'Your broad forehead and bright eyes represent wisdom and judgment. Use this ability to take on leadership roles in organizations or groups.',
        'Utilize your natural charisma well and you can achieve great success in politics or business. Challenge yourself with confidence.',
        'Your high nose means strong willpower. Don\'t give up even in difficult situations and push forward to the end, and you will definitely succeed.',
        'Since you have the ability to guide people, consider roles as a mentor or educator teaching and guiding juniors.',
        'Your physiognomy indicates you can accomplish great things. Don\'t be satisfied with small things and move toward bigger goals.',
        'Leadership is not simply giving orders. Also demonstrate your ability to read and empathize with others.',
        'Your authoritative impression naturally earns respect. But don\'t abuse your authority and use it carefully.',
        'You are ready to take on central roles in organizations or groups. Demonstrate your abilities on a bigger stage.',
        'Become a leader who solves difficult problems and creates change with your natural leadership ability.'
      ],
      ja: [
        'あなたの生まれ持ったリーダーシップを活用して、より大きな世界に挑戦してください。多くの人があなたを待っています。',
        '広い額と明るい目は知恵と判断力を表しています。この能力を基に組織や集団でリーダーの役割を果たしてみてください。',
        '生まれながらのカリスマ性をうまく活用すれば、政治やビジネス分野で大きな成功を収めることができます。自信を持って挑戦してください。',
        '高い鼻は強い意志を意味します。困難な状況でも諦めず、最後まで押し進めれば必ず成功するでしょう。',
        '人々を導く能力があるので、メンターや教育者として後輩を教え導く役割も検討してみてください。',
        'あなたの観相は大きなことを成し遂げることができる相です。小さなことに満足せず、より大きな目標に向かって進んでください。',
        'リーダーシップは単に命令することではありません。他人の心を読み共感する能力も同時に発揮してください。',
        '権威のある印象は自然に尊敬を受けるようになります。しかし自分の権威を乱用せず、慎重に使用してください。',
        '組織や集団で中心的な役割を果たす準備ができています。より大きな舞台で自分の能力を発揮してみてください。',
        '生まれながらの統率力で困難な問題を解決し、変化を作り出すリーダーになってください。'
      ],
      'zh-CN': [
        '运用你天生的领导力，向更大的世界挑战。很多人都在等待着你。',
        '你宽阔的额头和明亮的眼睛代表智慧和判断力。利用这个能力在组织或团体中担当领导角色。',
        '如果善用你天生的魅力，可以在政治或商业领域取得巨大成功。带着信心挑战自己。',
        '你高挺的鼻子意味着强大的意志力。即使在困难情况下也不要放弃，坚持到底，你一定会成功。',
        '既然你有引导他人的能力，考虑作为导师或教育者的角色来教导和引导后辈。',
        '你的面相表明你能成就大事。不要满足于小事，朝着更大的目标前进。',
        '领导力不仅仅是下命令。也要展现你读懂他人和共情的能力。',
        '你的权威印象自然能赢得尊重。但不要滥用你的权威，要谨慎使用。',
        '你已经准备好承担组织或团体的核心角色。在更大的舞台上展现你的能力。',
        '成为一个用你天生的领导能力解决困难问题和创造变化的领导者。'
      ],
      'zh-TW': [
        '運用你天生的領導力，向更大的世界挑戰。很多人都在等待著你。',
        '你寬闊的額頭和明亮的眼睛代表智慧和判斷力。利用這個能力在組織或團體中擔當領導角色。',
        '如果善用你天生的魅力，可以在政治或商業領域取得巨大成功。帶著信心挑戰自己。',
        '你高挺的鼻子意味著強大的意志力。即使在困難情況下也不要放棄，堅持到底，你一定會成功。',
        '既然你有引導他人的能力，考慮作為導師或教育者的角色來教導和引導後輩。',
        '你的面相表明你能成就大事。不要滿足於小事，朝著更大的目標前進。',
        '領導力不僅僅是下命令。也要展現你讀懂他人和共情的能力。',
        '你的權威印象自然能贏得尊重。但不要濫用你的權威，要謹慎使用。',
        '你已經準備好承擔組織或團體的核心角色。在更大的舞台上展現你的能力。',
        '成為一個用你天生的領導能力解決困難問題和創造變化的領導者。'
      ],
      vi: [
        'Hãy sử dụng tài lãnh đạo thiên bẩm của bạn để thách thức bản thân hướng tới thế giới lớn hơn. Nhiều người đang chờ đợi bạn.',
        'Trán rộng và mắt sáng của bạn đại diện cho trí tuệ và khả năng phán đoán. Sử dụng khả năng này để đảm nhận vai trò lãnh đạo trong các tổ chức hoặc nhóm.',
        'Tận dụng tốt sức hút thiên bẩm của bạn và bạn có thể đạt được thành công lớn trong chính trị hoặc kinh doanh. Thách thức bản thân với sự tự tin.',
        'Mũi cao của bạn có nghĩa là ý chí mạnh mẽ. Đừng bỏ cuộc ngay cả trong tình huống khó khăn và đẩy mạnh đến cuối cùng, và bạn chắc chắn sẽ thành công.',
        'Vì bạn có khả năng hướng dẫn người khác, hãy cân nhắc vai trò như một người cố vấn hoặc nhà giáo dục dạy và hướng dẫn các học viên trẻ.',
        'Tướng số của bạn cho thấy bạn có thể đạt được những điều vĩ đại. Đừng hài lòng với những điều nhỏ nhặt và tiến tới những mục tiêu lớn hơn.',
        'Khả năng lãnh đạo không chỉ đơn giản là ra lệnh. Cũng thể hiện khả năng đọc và đồng cảm với người khác của bạn.',
        'Ấn tượng có thẩm quyền của bạn tự nhiên giành được sự tôn trọng. Nhưng đừng lạm dụng quyền lực của bạn và sử dụng nó một cách cẩn thận.',
        'Bạn đã sẵn sàng đảm nhận vai trò trung tâm trong các tổ chức hoặc nhóm. Thể hiện khả năng của bạn trên một sân khấu lớn hơn.',
        'Trở thành một nhà lãnh đạo giải quyết các vấn đề khó khăn và tạo ra thay đổi với khả năng lãnh đạo thiên bẩm của bạn.'
      ],
      id: [
        'Gunakan kepemimpinan alami Anda untuk menantang diri sendiri menuju dunia yang lebih besar. Banyak orang menunggu Anda.',
        'Dahi lebar dan mata cerah Anda mewakili kebijaksanaan dan penilaian. Gunakan kemampuan ini untuk mengambil peran kepemimpinan dalam organisasi atau kelompok.',
        'Manfaatkan karisma alami Anda dengan baik dan Anda dapat mencapai kesuksesan besar dalam politik atau bisnis. Tantang diri sendiri dengan percaya diri.',
        'Hidung tinggi Anda berarti tekad yang kuat. Jangan menyerah bahkan dalam situasi sulit dan dorong sampai akhir, dan Anda pasti akan berhasil.',
        'Karena Anda memiliki kemampuan untuk memandu orang, pertimbangkan peran sebagai mentor atau pendidik yang mengajar dan membimbing junior.',
        'Fisiognomi Anda menunjukkan Anda dapat mencapai hal-hal besar. Jangan puas dengan hal-hal kecil dan bergerak menuju tujuan yang lebih besar.',
        'Kepemimpinan bukan hanya memberi perintah. Juga tunjukkan kemampuan Anda untuk membaca dan berempati dengan orang lain.',
        'Kesan otoritatif Anda secara alami mendapatkan rasa hormat. Tapi jangan menyalahgunakan otoritas Anda dan gunakan dengan hati-hati.',
        'Anda siap mengambil peran sentral dalam organisasi atau kelompok. Tunjukkan kemampuan Anda di panggung yang lebih besar.',
        'Jadilah pemimpin yang memecahkan masalah sulit dan menciptakan perubahan dengan kemampuan kepemimpinan alami Anda.'
      ]
    },
    fortune: {
      wealth: {
        ko: [
          '넓은 이마와 높은 코는 재물을 끌어들이는 좋은 관상입니다. 사업과 투자에서 큰 성공을 거둘 가능성이 높으며, 특히 리더십을 활용한 사업 창업이 유리합니다.',
          '이마가 넓고 광택이 있는 당신은 재물운이 매우 좋습니다. 투자나 부동산 사업에서 큰 수익을 얻을 수 있으며, 40대 후반부터 재정적 안정을 구축할 수 있습니다.',
          '타고난 리더십과 카리스마를 활용하면 사업 분야에서 큰 성공을 거둘 수 있습니다. 조직을 이끌고 사람들을 모으는 능력이 돈을 버는 데 큰 도움이 됩니다.',
          '넓은 이마는 지혜와 재물을 상징합니다. 현명한 투자 판단력으로 부동산이나 주식 투자에서 큰 성공을 기대할 수 있습니다.',
          '높은 코와 단정한 입은 강한 의지와 통솔력을 나타냅니다. 이런 관상을 가진 분은 독자적인 사업을 통해 큰 부를 쌓을 수 있습니다.',
          '천생 리더의 관상은 큰 사업을 성공시킬 수 있는 능력을 가지고 있습니다. 특히 제조업이나 서비스업 분야에서 두각을 나타낼 것입니다.',
          '사람들을 이끄는 카리스마가 있어 네트워크 마케팅이나 다단계 사업에서도 성공할 가능성이 높습니다. 많은 사람들이 당신을 따를 것입니다.',
          '정치나 사회 활동을 통해 재정적 이익을 얻을 수 있는 기회가 많습니다. 공직이나 정당 활동도 고려해볼 만합니다.',
          '교육이나 컨설팅 분야에서도 큰 수익을 얻을 수 있습니다. 당신의 지혜와 경험을 다른 사람에게 전수하면서도 좋은 수익을 올릴 수 있습니다.',
          '당신의 관상은 평생 안정적인 재정 상태를 유지할 수 있습니다. 큰 부를 일으키는 것보다 꾸준한 수입원을 만들어가는 것이 좋습니다.'
        ],
        en: [
          'Your broad forehead and high nose indicate good fortune for attracting wealth. High potential for great success in business and investments, especially entrepreneurship utilizing your leadership.',
          'Your wide, glossy forehead shows excellent wealth fortune. You can gain great profits from investments or real estate business and build financial stability from your late 40s.',
          'Utilizing your natural leadership and charisma can lead to great success in business. Your ability to lead organizations and gather people greatly helps in earning money.',
          'A broad forehead symbolizes wisdom and wealth. With wise investment judgment, you can expect great success in real estate or stock investments.',
          'A high nose and well-formed mouth show strong will and leadership. Those with such physiognomy can accumulate great wealth through independent business.',
          'The physiognomy of a natural leader has the ability to succeed in large businesses. You will particularly excel in manufacturing or service industries.',
          'Your charismatic ability to guide people gives high potential for success in network marketing or multi-level businesses. Many people will follow you.',
          'There are many opportunities to gain financial benefits through politics or social activities. Consider public office or political party activities.',
          'You can also earn great profits in education or consulting fields. You can make good income while passing on your wisdom and experience to others.',
          'Your physiognomy allows you to maintain stable finances throughout life. It\'s better to create steady income sources rather than seeking to make large fortunes.'
        ],
        ja: [
          '広い額と高い鼻は財産を引き寄せる良い観相です。ビジネスと投資で大きな成功を収める可能性が高く、特にリーダーシップを活用した起業が有利です。',
          '額が広く光沢があるあなたは財運が非常に良いです。投資や不動産ビジネスで大きな利益を得ることができ、40代後半から財政的安定を築くことができます。',
          '生まれながらのリーダーシップとカリスマ性を活用すれば、ビジネス分野で大きな成功を収めることができます。組織を導き人を集める能力がお金を稼ぐ上で大きな助けになります。',
          '広い額は知恵と財産を象徴しています。賢明な投資判断力で不動産や株式投資で大きな成功を期待できます。',
          '高い鼻と整った口は強い意志と統率力を表しています。このような観相を持つ人は独立した事業を通じて大きな富を築くことができます。',
          '天然リーダーの観相は大規模な事業を成功させる能力を持っています。特に製造業やサービス業分野で頭角を現すでしょう。',
          '人を導くカリスマ性があるため、ネットワークマーケティングや多層階ビジネスでも成功する可能性が高いです。多くの人があなたに従うでしょう。',
          '政治や社会活動を通じて財政的利益を得る機会が多くあります。公職や政党活動も検討する価値があります。',
          '教育やコンサルティング分野でも大きな収益を得ることができます。あなたの知恵と経験を他の人に伝えながらも良い収益を上げることができます。',
          'あなたの観相は一生安定した財政状態を維持することができます。大きな富を起こすよりも着実な収入源を作ることが良いでしょう。'
        ],
        'zh-CN': [
          '宽阔的额头和高挺的鼻子是吸引财富的好面相。在商业和投资方面取得巨大成功的可能性很高，特别是利用领导力创业特别有利。',
          '你宽阔有光泽的额头显示财运非常好。可以从投资或房地产业务中获得巨大利润，从40多岁后期开始可以建立财务稳定。',
          '利用你天生的领导力和魅力可以在商业领域取得巨大成功。你领导组织和聚集人群的能力对赚钱有很大帮助。',
          '宽阔的额头象征智慧和财富。凭借明智的投资判断力，可以期待在房地产或股票投资方面取得巨大成功。',
          '高挺的鼻子和端正的嘴巴显示坚强的意志和领导力。拥有这种面相的人可以通过独立业务积累巨大财富。',
          '天生领导者的面相具有成功大型业务的能力。特别是在制造业或服务业领域会脱颖而出。',
          '你引导他人的魅力能力为网络营销或多层次业务提供了很高的成功可能性。许多人会跟随你。',
          '通过政治或社会活动获得财政利益的机会很多。考虑公职或政党活动也是值得的。',
          '你也可以在教育或咨询领域获得巨大利润。在向他人传递你的智慧和经验的同时也能获得良好的收入。',
          '你的面相可以让你终生保持稳定的财务状况。创造稳定的收入来源比寻求获得巨大财富更好。'
        ],
        'zh-TW': [
          '寬闊的額頭和高挺的鼻子是吸引財富的好面相。在商業和投資方面取得巨大成功的可能性很高，特別是利用領導力創業特別有利。',
          '你寬闊有光澤的額頭顯示財運非常好。可以從投資或房地產業務中獲得巨大利潤，從40多歲後期開始可以建立財務穩定。',
          '利用你天生的領導力和魅力可以在商業領域取得巨大成功。你領導組織和聚集人群的能力對賺錢有很大幫助。',
          '寬闊的額頭象徵智慧和財富。憑藉明智的投資判斷力，可以期待在房地產或股票投資方面取得巨大成功。',
          '高挺的鼻子和端正的嘴巴顯示堅強的意志和領導力。擁有這種面相的人可以通過獨立業務積累巨大財富。',
          '天生領導者的面相具有成功大型業務的能力。特別是在製造業或服務業領域會脫穎而出。',
          '你引導他人的魅力能力為網絡營銷或多層次業務提供了很高的成功可能性。許多人會跟隨你。',
          '通過政治或社會活動獲得財政利益的機會很多。考慮公職或政黨活動也是值得的。',
          '你也可以在教育或諮詢領域獲得巨大利潤。在向他人傳遞你的智慧和經驗的同時也能獲得良好的收入。',
          '你的面相可以讓你終生保持穩定的財務狀況。創造穩定的收入來源比尋求獲得巨大財富更好。'
        ],
        vi: [
          'Trán rộng và mũi cao của bạn chỉ ra vận may tốt để thu hút sự giàu có. Khả năng cao đạt được thành công lớn trong kinh doanh và đầu tư, đặc biệt là khởi nghiệp sử dụng tài lãnh đạo của bạn.',
          'Trán rộng và bóng của bạn cho thấy vận tài lộc rất tốt. Bạn có thể thu được lợi nhuận lớn từ đầu tư hoặc kinh doanh bất động sản và xây dựng sự ổn định tài chính từ cuối những năm 40.',
          'Sử dụng tài lãnh đạo và sức hút thiên bẩm của bạn có thể dẫn đến thành công lớn trong kinh doanh. Khả năng lãnh đạo tổ chức và tập hợp mọi người của bạn rất giúp ích trong việc kiếm tiền.',
          'Trán rộng tượng trưng cho trí tuệ và sự giàu có. Với khả năng phán đoán đầu tư thông minh, bạn có thể mong đợi thành công lớn trong đầu tư bất động sản hoặc chứng khoán.',
          'Mũi cao và miệng đều đặn cho thấy ý chí mạnh mẽ và khả năng lãnh đạo. Những người có tướng số như vậy có thể tích lũy sự giàu có lớn thông qua kinh doanh độc lập.',
          'Tướng số của một nhà lãnh đạo thiên bẩm có khả năng thành công trong các doanh nghiệp lớn. Bạn sẽ đặc biệt xuất sắc trong ngành sản xuất hoặc dịch vụ.',
          'Khả năng quyến rũ hướng dẫn người khác của bạn mang lại khả năng cao thành công trong tiếp thị mạng lưới hoặc doanh nghiệp đa cấp. Nhiều người sẽ theo bạn.',
          'Có nhiều cơ hội để đạt được lợi ích tài chính thông qua chính trị hoặc hoạt động xã hội. Cân nhắc hoạt động công vụ hoặc đảng phái chính trị.',
          'Bạn cũng có thể kiếm được lợi nhuận lớn trong lĩnh vực giáo dục hoặc tư vấn. Bạn có thể kiếm được thu nhập tốt trong khi truyền lại trí tuệ và kinh nghiệm của mình cho người khác.',
          'Tướng số của bạn cho phép bạn duy trì tài chính ổn định suốt đời. Tốt hơn là tạo ra các nguồn thu nhập ổn định thay vì tìm kiếm để tạo ra tài sản lớn.'
        ],
        id: [
          'Dahi lebar dan hidung tinggi Anda menunjukkan keberuntungan baik untuk menarik kekayaan. Potensi tinggi untuk sukses besar dalam bisnis dan investasi, terutama kewirausahaan yang memanfaatkan kepemimpinan Anda.',
          'Dahi lebar dan berkilau Anda menunjukkan nasib kekayaan yang sangat baik. Anda dapat memperoleh keuntungan besar dari investasi atau bisnis real estat dan membangun stabilitas keuangan dari akhir 40-an.',
          'Memanfaatkan kepemimpinan alami dan karisma Anda dapat mengarah pada kesuksesan besar dalam bisnis. Kemampuan Anda untuk memimpin organisasi dan mengumpulkan orang sangat membantu dalam menghasilkan uang.',
          'Dahi lebar melambangkan kebijaksanaan dan kekayaan. Dengan penilaian investasi yang bijak, Anda dapat mengharapkan kesuksesan besar dalam investasi real estat atau saham.',
          'Hidung tinggi dan mulut yang rapi menunjukkan kemauan kuat dan kepemimpinan. Mereka yang memiliki fisiognomi seperti ini dapat mengumpulkan kekayaan besar melalui bisnis independen.',
          'Fisiognomi pemimpin alami memiliki kemampuan untuk sukses dalam bisnis besar. Anda akan unggul terutama di industri manufaktur atau jasa.',
          'Kemampuan karismatik Anda untuk memandu orang memberikan potensi tinggi untuk sukses dalam pemasaran jaringan atau bisnis multi-level. Banyak orang akan mengikuti Anda.',
          'Ada banyak peluang untuk mendapatkan manfaat keuangan melalui politik atau aktivitas sosial. Pertimbangkan aktivitas kantor publik atau partai politik.',
          'Anda juga dapat memperoleh keuntungan besar di bidang pendidikan atau konsultasi. Anda dapat menghasilkan pendapatan baik sambil meneruskan kebijaksanaan dan pengalaman Anda kepada orang lain.',
          'Fisiognomi Anda memungkinkan Anda menjaga keuangan stabil sepanjang hidup. Lebih baik menciptakan sumber pendapatan yang stabil daripada mencari untuk membuat kekayaan besar.'
        ]
      },
      love: {
        ko: [
          '카리스마 있는 매력과 넓은 이마로 많은 사람들이 당신에게 관심을 보입니다. 진정한 사랑을 찾을 가능성이 높으며, 특히 30대 중반 이후 안정적인 관계를 형성할 수 있습니다.',
          '밝은 눈과 단정한 입은 사랑에 대한 진지함을 나타냅니다. 당신은 깊고 진실한 사랑을 추구하며, 이런 성향이 좋은 인연을 만나게 해줍니다.',
          '타고난 리더십이 연애에서도 작용하여 상대방을 자연스럽게 이끌고 보호하는 능력이 있습니다. 이런 매력으로 많은 사람들이 당신에게 끌립니다.',
          '높은 코는 강한 의지를 의미하며, 연애에서도 한 사람을 향한 확고한 사랑을 보여줍니다. 배려심 깊고 책임감 있는 연인이 될 것입니다.',
          '부드러우면서도 권위 있는 인상으로 상대방에게 신뢰감을 줍니다. 특히 결혼을 원하는 이성들에게 매력적으로 보일 것입니다.',
          '사람들을 이끄는 능력이 있어 연애 초기부터 관계를 주도적으로 이끌어갑니다. 이런 리더십이 상대방에게 안정감을 줍니다.',
          '넓은 이마는 넓은 마음을 의미하며, 상대방의 결점을 받아들이고 포용하는 능력이 있습니다. 이런 성격이 오래가는 관계를 만듭니다.',
          '타고난 카리스마로 첫 만남에서 강한 인상을 남기며, 많은 사람들이 당신에게 호감을 보입니다. 하지만 진정한 사랑을 위해서는 깊은 교감이 필요합니다.',
          '조직이나 집단에서의 리더십이 연애 관계에도 영향을 미칩니다. 당신은 상대방과의 관계를 잘 관리하고 발전시킬 수 있는 능력이 있습니다.',
          '당신의 관상은 장기적인 관계를 선호합니다. 짧은 만남보다는 진지하고 깊은 사랑을 추구하며, 결혼 후에도 행복한 가정을 이룰 수 있습니다.'
        ],
        en: [
          'Your charismatic charm and broad forehead attract interest from many people. High possibility of finding true love, and you can form stable relationships especially after your mid-30s.',
          'Your bright eyes and well-formed mouth show seriousness about love. You pursue deep and true love, and this tendency helps you meet good relationships.',
          'Your natural leadership also works in love, with the ability to naturally guide and protect your partner. Many people are attracted to this charm.',
          'Your high nose means strong will, and shows firm love toward one person in relationships. You will be a caring and responsible partner.',
          'Your gentle yet authoritative impression gives a sense of trust to your partner. You will be particularly attractive to those who want to marry.',
          'Your ability to guide people allows you to lead relationships from the early stages. This leadership gives a sense of stability to your partner.',
          'A broad forehead means a broad mind, with the ability to accept and embrace your partner\'s flaws. This personality creates long-lasting relationships.',
          'Your natural charisma leaves a strong impression at first meeting, and many people show interest in you. But deep communication is needed for true love.',
          'Your leadership in organizations or groups also affects romantic relationships. You have the ability to manage and develop relationships with your partner well.',
          'Your physiognomy prefers long-term relationships. Rather than brief encounters, you pursue serious and deep love, and can build a happy family even after marriage.'
        ],
        ja: [
          'カリスマ的な魅力と広い額で多くの人があなたに関心を示します。真の愛を見つける可能性が高く、特に30代半ば以降は安定した関係を築くことができます。',
          '明るい目と整った口は愛に対する真剣さを表しています。あなたは深く真実の愛を追求し、この傾向が良い縁に巡り合わせてくれます。',
          '生まれながらのリーダーシップが恋愛でも作用し、相手を自然に導き守る能力があります。この魅力で多くの人があなたに惹かれます。',
          '高い鼻は強い意志を意味し、恋愛でも一人の人への確固たる愛を示します。思いやり深く責任感のある恋人になるでしょう。',
          '柔らかくも権威ある印象で相手に信頼感を与えます。特に結婚を望む異性に魅力的に映るでしょう。',
          '人を導く能力があるため、恋愛の初期段階から関係を主導的に進めます。このリーダーシップが相手に安定感を与えます。',
          '広い額は広い心を意味し、相手の欠点を受け入れ包容する能力があります。この性格が長続きする関係を作ります。',
          '生まれながらのカリスマ性で初対面から強い印象を残し、多くの人があなたに好感を示します。しかし真の愛のためには深い交感が必要です。',
          '組織や集団でのリーダーシップが恋愛関係にも影響を与えます。あなたは相手との関係をうまく管理し発展させることができる能力があります。',
          'あなたの観相は長期的な関係を好みます。短い出会いよりも真剣で深い愛を追求し、結婚後も幸せな家庭を築くことができます。'
        ],
        'zh-CN': [
          '你迷人的魅力和宽阔的额头吸引许多人关注你。找到真爱的可能性很高，特别是在30多岁中期之后可以形成稳定的关系。',
          '你明亮的眼睛和端正的嘴巴显示对爱情的认真。你追求深刻和真实的爱，这种倾向帮助你遇到好的缘分。',
          '你天生的领导力在恋爱中也起作用，具有自然地引导和保护伴侣的能力。许多人被这种魅力所吸引。',
          '你高挺的鼻子意味着坚强的意志，并在关系中显示对一个人的坚定爱情。你将是一个体贴和有责任感的伴侣。',
          '你温和而权威的印象给伴侣信任感。你会特别吸引那些想要结婚的人。',
          '你引导他人的能力让你从早期阶段就主导关系。这种领导力给伴侣稳定感。',
          '宽阔的额头意味着宽广的心胸，具有接受和包容伴侣缺点的能力。这种个性创造了持久的关系。',
          '你天生的魅力在初次见面就留下强烈印象，许多人对你表现出兴趣。但真正的爱情需要深刻的交流。',
          '你在组织或团体中的领导力也影响恋爱关系。你有能力很好地管理和发展与伴侣的关系。',
          '你的面相偏好长期关系。你追求认真和深刻的爱情而不是短暂的相遇，即使在结婚后也能建立幸福的家庭。'
        ],
        'zh-TW': [
          '你迷人的魅力和寬闊的額頭吸引許多人關注你。找到真愛的可能性很高，特別是在30多歲中期之後可以形成穩定的關係。',
          '你明亮的眼睛和端正的嘴巴顯示對愛情的認真。你追求深刻和真實的愛，這種傾向幫助你遇到好的緣分。',
          '你天生的領導力在戀愛中也起作用，具有自然地引導和保護伴侶的能力。許多人被這種魅力所吸引。',
          '你高挺的鼻子意味著堅強的意志，並在關係中顯示對一個人的堅定愛情。你將是一個體貼和有責任感的伴侶。',
          '你溫和而權威的印象給伴侶信任感。你會特別吸引那些想要結婚的人。',
          '你引導他人的能力讓你從早期階段就主導關係。這種領導力給伴侶穩定感。',
          '寬闊的額頭意味著寬廣的心胸，具有接受和包容伴侶缺點的能力。這種個性創造了持久的關係。',
          '你天生的魅力在初次見面就留下強烈印象，許多人對你表現出興趣。但真正的愛情需要深刻的交流。',
          '你在組織或團體中的領導力也影響戀愛關係。你有能力很好地管理和發展與伴侶的關係。',
          '你的面相偏好長期關係。你追求認真和深刻的愛情而不是短暫的相遇，即使在結婚後也能建立幸福的家庭。'
        ],
        vi: [
          'Sức hút quyến rũ và trán rộng của bạn thu hút sự quan tâm từ nhiều người. Khả năng cao tìm được tình yêu đích thực, và bạn có thể hình thành mối quan hệ ổn định đặc biệt là sau giữa những năm 30 của bạn.',
          'Đôi mắt sáng và miệng đều đặn của bạn cho thấy sự nghiêm túc về tình yêu. Bạn theo đuổi tình yêu sâu sắc và chân thật, và xu hướng này giúp bạn gặp được những mối quan hệ tốt.',
          'Tài lãnh đạo thiên bẩm của bạn cũng hoạt động trong tình yêu, với khả năng hướng dẫn và bảo vệ đối tác một cách tự nhiên. Nhiều người bị thu hút bởi sức hút này.',
          'Mũi cao của bạn có nghĩa là ý chí mạnh mẽ, và cho thấy tình yêu kiên định đối với một người trong các mối quan hệ. Bạn sẽ là một đối tác chu đáo và có trách nhiệm.',
          'Ấn tượng dịu dàng nhưng có thẩm quyền của bạn mang lại cảm giác tin tưởng cho đối tác của bạn. Bạn sẽ đặc biệt hấp dẫn đối với những người muốn kết hôn.',
          'Khả năng hướng dẫn người khác của bạn cho phép bạn dẫn dắt các mối quan hệ từ giai đoạn đầu. Khả năng lãnh đạo này mang lại cảm giác ổn định cho đối tác của bạn.',
          'Trán rộng có nghĩa là tâm trí rộng rãi, với khả năng chấp nhận và bao dung những thiếu sót của đối tác. Tính cách này tạo ra những mối quan hệ lâu dài.',
          'Sức hút thiên bẩm của bạn để lại ấn tượng mạnh mẽ trong lần gặp đầu tiên, và nhiều người thể hiện sự quan tâm đến bạn. Nhưng giao tiếp sâu sắc là cần thiết cho tình yêu đích thực.',
          'Khả năng lãnh đạo của bạn trong các tổ chức hoặc nhóm cũng ảnh hưởng đến các mối quan hệ lãng mạn. Bạn có khả năng quản lý và phát triển mối quan hệ với đối tác một cách tốt.',
          'Tướng số của bạn ưa thích các mối quan hệ lâu dài. Thay vì những cuộc gặp gỡ ngắn ngủi, bạn theo đuổi tình yêu nghiêm túc và sâu sắc, và có thể xây dựng một gia đình hạnh phúc ngay cả sau khi kết hôn.'
        ],
        id: [
          'Daya tarik karismatik dan dahi lebar Anda menarik minat dari banyak orang. Kemungkinan tinggi menemukan cinta sejati, dan Anda dapat membentuk hubungan yang stabil terutama setelah pertengahan 30-an.',
          'Mata cerah dan mulut rapi Anda menunjukkan keseriusan tentang cinta. Anda mengejar cinta yang dalam dan sejati, dan kecenderungan ini membantu Anda bertemu hubungan yang baik.',
          'Kepemimpinan alami Anda juga bekerja dalam cinta, dengan kemampuan untuk secara alami memandu dan melindungi pasangan Anda. Banyak orang tertarik pada pesona ini.',
          'Hidung tinggi Anda berarti kemauan kuat, dan menunjukkan cinta yang teguh terhadap satu orang dalam hubungan. Anda akan menjadi pasangan yang peduli dan bertanggung jawab.',
          'Kesan lembut namun otoritatif Anda memberikan rasa percaya pada pasangan Anda. Anda akan sangat menarik bagi mereka yang ingin menikah.',
          'Kemampuan Anda untuk memandu orang memungkinkan Anda memimpin hubungan dari tahap awal. Kepemimpinan ini memberikan rasa stabilitas pada pasangan Anda.',
          'Dahi lebar berarti pikiran yang luas, dengan kemampuan untuk menerima dan merangkul kelemahan pasangan Anda. Kepribadian ini menciptakan hubungan jangka panjang.',
          'Karisma alami Anda meninggalkan kesan yang kuat pada pertemuan pertama, dan banyak orang menunjukkan minat pada Anda. Tapi komunikasi yang dalam diperlukan untuk cinta sejati.',
          'Kepemimpinan Anda dalam organisasi atau kelompok juga mempengaruhi hubungan romantis. Anda memiliki kemampuan untuk mengelola dan mengembangkan hubungan dengan pasangan Anda dengan baik.',
          'Fisiognomi Anda lebih suka hubungan jangka panjang. Daripada pertemuan singkat, Anda mengejar cinta yang serius dan mendalam, dan dapat membangun keluarga yang bahagia bahkan setelah menikah.'
        ]
      },
      success: {
        ko: [
          '타고난 리더십과 강한 카리스마로 모든 분야에서 성공할 가능성이 높습니다. 특히 정치, 사업, 교육 분야에서 두각을 나타낼 것이며, 많은 사람들이 당신을 따를 것입니다.',
          '넓은 이마는 지혜를 나타내며, 높은 코는 강한 의지를 의미합니다. 이런 관상은 큰 성공을 이룰 수 있는 능력을 가지고 있습니다.',
          '조직이나 집단에서 중심 역할을 수행할 수 있는 능력이 있어, 경영자나 관리자로서 크게 성공할 수 있습니다.',
          '타인을 이끌고 변화를 만들어내는 능력이 있어 혁신적인 사업을 통해 큰 성공을 거둘 수 있습니다.',
          '정치나 사회 활동을 통해 명예와 지위를 얻을 수 있는 기회가 많습니다. 공직이나 정당 활동에서 성공할 가능성이 높습니다.',
          '교육이나 컨설팅 분야에서도 큰 성공을 기대할 수 있습니다. 당신의 지혜와 경험을 다른 사람에게 전수하면서도 높은 지위를 얻을 수 있습니다.',
          '사람들을 모으고 조직화하는 능력이 있어, 네트워크 사업이나 다단계 마케팅에서도 성공할 수 있습니다.',
          '당신의 관상은 평생 안정적인 성공을 보장합니다. 작은 성공에 만족하지 말고 더 큰 목표를 향해 도전하세요.',
          '권위 있는 인상으로 자연스럽게 존경을 받게 되며, 이런 인상이 성공을 더욱 가속화시킵니다.',
          '타고난 통솔력으로 어려운 문제를 해결하고 변화를 만들어내는 리더로서 역사에 이름을 남길 수 있습니다.'
        ],
        en: [
          'High potential for success in all fields with your natural leadership and strong charisma. You will particularly excel in politics, business, and education, and many people will follow you.',
          'Your broad forehead represents wisdom, and high nose means strong willpower. This physiognomy has the ability to achieve great success.',
          'You have the ability to perform central roles in organizations or groups, and can achieve great success as an executive or manager.',
          'Your ability to guide others and create change allows you to achieve great success through innovative business.',
          'There are many opportunities to gain honor and status through politics or social activities. High potential for success in public office or political party activities.',
          'You can also expect great success in education or consulting fields. You can gain high status while passing on your wisdom and experience to others.',
          'Your ability to gather and organize people allows you to succeed in network business or multi-level marketing.',
          'Your physiognomy guarantees stable success throughout life. Don\'t be satisfied with small successes and challenge yourself toward bigger goals.',
          'Your authoritative impression naturally earns respect, and this impression further accelerates your success.',
          'You can leave your name in history as a leader who solves difficult problems and creates change with your natural leadership ability.'
        ],
        ja: [
          '生まれながらのリーダーシップと強いカリスマ性で全ての分野で成功する可能性が高いです。特に政治、ビジネス、教育分野で頭角を現すでしょう。',
          '広い額は知恵を表し、高い鼻は強い意志を意味します。このような観相は大きな成功を成し遂げる能力を持っています。',
          '組織や集団で中心的な役割を果たす能力があるため、経営者や管理者として大きく成功することができます。',
          '他人を導き変化を作り出す能力があるため、革新的な事業を通じて大きな成功を収めることができます。',
          '政治や社会活動を通じて名誉と地位を得る機会が多くあります。公職や政党活動で成功する可能性が高いです。',
          '教育やコンサルティング分野でも大きな成功を期待できます。あなたの知恵と経験を他の人に伝えながらも高い地位を得ることができます。',
          '人々を集め組織化する能力があるため、ネットワーク事業や多層階マーケティングでも成功することができます。',
          'あなたの観相は一生安定した成功を保証します。小さな成功に満足せず、より大きな目標に向かって挑戦してください。',
          '権威のある印象で自然に尊敬を受けるようになり、この印象が成功をさらに加速させます。',
          '生まれながらの統率力で困難な問題を解決し変化を作り出すリーダーとして歴史に名前を残すことができます。'
        ],
        'zh-CN': [
          '凭借你天生的领导力和强大的魅力在所有领域都有很高的成功可能性。特别是在政治、商业、教育领域会脱颖而出，许多人会跟随你。',
          '你宽阔的额头代表智慧，高挺的鼻子意味着强大的意志力。这种面相具有取得巨大成功的能力。',
          '你有能力在组织或团体中承担核心角色，可以作为高管或经理取得巨大成功。',
          '你引导他人和创造变化的能力让你可以通过创新业务取得巨大成功。',
          '通过政治或社会活动获得荣誉和地位的机会很多。在公职或政党活动中成功的可能性很高。',
          '你也可以期待在教育或咨询领域取得巨大成功。在向他人传递你的智慧和经验的同时也能获得很高的地位。',
          '你聚集和组织人群的能力让你可以在网络业务或多层次营销中成功。',
          '你的面相保证你终生稳定的成功。不要满足于小的成功，向更大的目标挑战自己。',
          '你权威的印象自然能赢得尊重，这种印象进一步加速了你的成功。',
          '你可以作为一位用天生领导能力解决困难问题和创造变化的领导者而留名史册。'
        ],
        'zh-TW': [
          '憑藉你天生的領導力和強大的魅力在所有領域都有很高的成功可能性。特別是在政治、商業、教育領域會脫穎而出，許多人會跟隨你。',
          '你寬闊的額頭代表智慧，高挺的鼻子意味著強大的意志力。這種面相具有取得巨大成功的能力。',
          '你有能力在組織或團體中承擔核心角色，可以作為高管或經理取得巨大成功。',
          '你引導他人和創造變化的能力讓你可以通過創新業務取得巨大成功。',
          '通過政治或社會活動獲得榮譽和地位的機會很多。在公職或政黨活動中成功的可能性很高。',
          '你也可以期待在教育或諮詢領域取得巨大成功。在向他人傳遞你的智慧和經驗的同時也能獲得很高的地位。',
          '你聚集和組織人群的能力讓你可以網絡業務或多層次營銷中成功。',
          '你的面相保證你終生穩定的成功。不要滿足於小的成功，向更大的目標挑戰自己。',
          '你權威的印象自然能贏得尊重，這種印象進一步加速了你的成功。',
          '你可以作為一位用天生領導能力解決困難問題和創造變化的領導者而留名史冊。'
        ],
        vi: [
          'Khả năng cao thành công trong mọi lĩnh vực với tài lãnh đạo thiên bẩm và sức hút mạnh mẽ của bạn. Bạn sẽ đặc biệt xuất sắc trong chính trị, kinh doanh và giáo dục, và nhiều người sẽ theo bạn.',
          'Trán rộng của bạn đại diện cho trí tuệ, và mũi cao có nghĩa là ý chí mạnh mẽ. Tướng số này có khả năng đạt được thành công lớn.',
          'Bạn có khả năng thực hiện vai trò trung tâm trong các tổ chức hoặc nhóm, và có thể đạt được thành công lớn như một giám đốc điều hành hoặc người quản lý.',
          'Khả năng hướng dẫn người khác và tạo ra thay đổi của bạn cho phép bạn đạt được thành công lớn thông qua kinh doanh đổi mới.',
          'Có nhiều cơ hội để đạt được danh dự và địa vị thông qua chính trị hoặc hoạt động xã hội. Khả năng cao thành công trong hoạt động công vụ hoặc đảng phái chính trị.',
          'Bạn cũng có thể mong đợi thành công lớn trong lĩnh vực giáo dục hoặc tư vấn. Bạn có thể đạt được địa vị cao trong khi truyền lại trí tuệ và kinh nghiệm của mình cho người khác.',
          'Khả năng tập hợp và tổ chức mọi người của bạn cho phép bạn thành công trong kinh doanh mạng lưới hoặc tiếp thị đa cấp.',
          'Tướng số của bạn đảm bảo thành công ổn định suốt đời. Đừng hài lòng với những thành công nhỏ và thách thức bản thân hướng tới những mục tiêu lớn hơn.',
          'Ấn tượng có thẩm quyền của bạn tự nhiên giành được sự tôn trọng, và ấn tượng này càng tăng tốc thành công của bạn.',
          'Bạn có thể để lại tên mình trong lịch sử như một nhà lãnh đạo giải quyết các vấn đề khó khăn và tạo ra thay đổi với khả năng lãnh đạo thiên bẩm của bạn.'
        ],
        id: [
          'Potensi tinggi untuk sukses di semua bidang dengan kepemimpinan alami dan karisma kuat Anda. Anda akan unggul khususnya di politik, bisnis, dan pendidikan, dan banyak orang akan mengikuti Anda.',
          'Dahi lebar Anda mewakili kebijaksanaan, dan hidung tinggi berarti tekad yang kuat. Fisiognomi ini memiliki kemampuan untuk mencapai kesuksesan besar.',
          'Anda memiliki kemampuan untuk melakukan peran sentral dalam organisasi atau kelompok, dan dapat mencapai kesuksesan besar sebagai eksekutif atau manajer.',
          'Kemampuan Anda untuk memandu orang lain dan menciptakan perubahan memungkinkan Anda mencapai kesuksesan besar melalui bisnis inovatif.',
          'Ada banyak peluang untuk memperoleh kehormatan dan status melalui politik atau aktivitas sosial. Potensi tinggi untuk sukses dalam aktivitas kantor publik atau partai politik.',
          'Anda juga dapat mengharapkan kesuksesan besar di bidang pendidikan atau konsultasi. Anda dapat memperoleh status tinggi sambil meneruskan kebijaksanaan dan pengalaman Anda kepada orang lain.',
          'Kemampuan Anda untuk mengumpulkan dan mengorganisir orang memungkinkan Anda berhasil dalam bisnis jaringan atau pemasaran multi-level.',
          'Fisiognomi Anda menjamin kesuksesan stabil sepanjang hidup. Jangan puas dengan kesuksesan kecil dan tantang diri sendiri menuju tujuan yang lebih besar.',
          'Kesan otoritatif Anda secara alami mendapatkan rasa hormat, dan kesan ini semakin mempercepat kesuksesan Anda.',
          'Anda dapat meninggalkan nama Anda dalam sejarah sebagai pemimpin yang memecahkan masalah sulit dan menciptakan perubahan dengan kemampuan kepemimpinan alami Anda.'
        ]
      }
    }
  },
  {
    id: 2,
    title: {
      ko: '중길상 - 재물운 풍부',
      en: 'Good Fortune - Wealthy Destiny',
      ja: '中吉相 - 財運豊富',
      'zh-CN': '中吉相 - 财运丰富',
      'zh-TW': '中吉相 - 財運豐富',
      vi: 'Trung Cát Tướng - Vận Tài Lộc Dồi Dào',
      id: 'Nasib Baik - Kekayaan Berlimpah'
    },
    description: {
      ko: [
        '당신의 얼굴은 재물운이 매우 좋은 상입니다! 코가 높고 입이 크며, 이마에 광택이 있습니다. 이런 관상을 가진 분은 돈을 벌고 모으는 능력이 뛰어나며, 평생 안정적인 재정 상태를 유지할 수 있습니다.',
        '중길상의 얼굴은 높은 코와 큰 입, 광택 나는 이마가 특징입니다. 이런 관상은 재물을 끌어들이고 모으는 능력이 뛰어나다는 것을 의미합니다.',
        '코가 높고 뚜렷하며 입이 크고 단정한 당신은 재물운이 풍부한 상입니다. 돈을 벌고 관리하는 능력이 뛰어나며, 안정적인 재정 상태를 유지할 수 있습니다.',
        '이마에 광택이 있고 높은 코를 가진 당신은 타고난 재물운을 가지고 있습니다. 투자나 사업에서 큰 성공을 거둘 가능성이 높으며, 돈이 모이는 관상입니다.',
        '큰 입과 높은 코, 광택 나는 이마는 재물을 끌어들이는 좋은 징조입니다. 이런 관상을 가진 분은 적절한 투자와 절약으로 큰 부를 축적할 수 있습니다.',
        '중길상의 관상은 재물운과 직결됩니다. 높은 코는 강한 의지를, 큰 입은 큰 수입을 의미하며, 광택 있는 이마는 지혜로운 재정 관리를 나타냅니다.',
        '당신의 얼굴은 돈을 끌어들이는 매력이 있습니다. 높은 코와 큰 입의 조합은 재물운이 뛰어나다는 명확한 신호이며, 평생 재정적 풍요를 누릴 수 있습니다.',
        '이마의 광택과 높은 코, 큰 입은 모두 재물과 관련된 좋은 관상입니다. 이런 얼굴을 가진 분은 자연스럽게 돈이 모이고 축적되는 운을 타고났습니다.',
        '재물운 풍부한 관상은 단순히 외모가 아니라 내면의 재정적 감각이 얼굴에 드러난 것입니다. 당신은 돈을 벌고 관리하는 데 타고난 재능이 있습니다.',
        '높은 코와 큰 입, 광택 나는 이마는 당신이 평생 안정적인 재정 상태를 유지할 수 있는 관상입니다. 적절한 투자와 관리로 큰 부를 축적할 수 있습니다.'
      ],
      en: [
        'Your face shows excellent wealth fortune! With a high nose, large mouth, and glossy forehead, you have exceptional ability to earn and accumulate money, maintaining stable finances throughout life.',
        'The face of good fortune features a high nose, large mouth, and glossy forehead. This physiognomy means you have exceptional ability to attract and accumulate wealth.',
        'Your high, distinct nose and large, well-formed mouth indicate abundant wealth fortune. You have excellent ability to earn and manage money, maintaining stable finances.',
        'Your glossy forehead and high nose show you have natural wealth fortune. High potential for great success in investments or business, a physiognomy where money accumulates.',
        'A large mouth, high nose, and glossy forehead are good signs for attracting wealth. Those with such physiognomy can accumulate great riches through proper investment and saving.',
        'The physiognomy of good fortune is directly connected to wealth fortune. A high nose means strong will, a large mouth means large income, and a glossy forehead represents wise financial management.',
        'Your face has the charm to attract money. The combination of high nose and large mouth is a clear signal of excellent wealth fortune, allowing you to enjoy financial abundance throughout life.',
        'The glossy forehead, high nose, and large mouth are all good physiognomic signs related to wealth. Those with such faces are naturally born with fortune where money gathers and accumulates.',
        'A wealthy physiognomy is not just appearance, but inner financial sense revealed through facial features. You have natural talent in earning and managing money.',
        'Your high nose, large mouth, and glossy forehead indicate you can maintain stable finances throughout life. You can accumulate great wealth through proper investment and management.'
      ],
      ja: [
        'あなたの顔は財運が非常に良い相です！高い鼻、大きな口、光沢のある額を持つあなたは、お金を稼ぎ蓄える能力に優れています。',
        '中吉相の顔は高い鼻と大きな口、光沢のある額が特徴です。この観相は財産を引き寄せ蓄える能力が優れていることを意味します。',
        '鼻が高くはっきりとして、口が大きく整ったあなたは財運が豊富な相です。お金を稼ぎ管理する能力に優れ、安定した財政状態を維持することができます。',
        '額に光沢があり高い鼻を持つあなたは、生まれながらの財運を持っています。投資やビジネスで大きな成功を収める可能性が高く、お金が集まる観相です。',
        '大きな口と高い鼻、光沢のある額は財産を引き寄せる良い兆しです。このような観相を持つ人は、適切な投資と節約で大きな富を蓄積することができます。',
        '中吉相の観相は財運と直結しています。高い鼻は強い意志を、大きな口は大きな収入を意味し、光沢のある額は賢明な財務管理を表しています。',
        'あなたの顔はお金を引き寄せる魅力があります。高い鼻と大きな口の組み合わせは財運が優れている明確な信号であり、一生財政的な豊かさを享受できます。',
        '額の光沢と高い鼻、大きな口はすべて財産に関連する良い観相です。このような顔を持つ人は自然にお金が集まり蓄積される運を持って生まれています。',
        '財運豊富な観相は単なる外見ではなく、内面の財政的感覚が顔に現れたものです。あなたはお金を稼ぎ管理するのに生まれつきの才能があります。',
        '高い鼻と大きな口、光沢のある額は、あなたが一生安定した財政状態を維持できる観相です。適切な投資と管理で大きな富を蓄積することができます。'
      ],
      'zh-CN': [
        '你的面相财运很好！鼻梁高挺、嘴巴较大、额头有光泽，具有出色的赚钱和理财能力。',
        '中吉相的面容特征是鼻梁高、嘴巴大、额头有光泽。这种面相意味着具有出色的吸引和积累财富的能力。',
        '你高挺清晰的鼻子和较大端正的嘴巴显示财运丰富。你具有出色的赚钱和管理金钱的能力，能够保持稳定的财务状况。',
        '你有光泽的额头和高挺的鼻子显示你具有天生的财运。在投资或商业方面取得巨大成功的可能性很高，是金钱聚集的面相。',
        '大嘴巴、高鼻梁和有光泽的额头是吸引财富的好迹象。拥有这种面相的人可以通过适当的投资和储蓄积累巨大财富。',
        '中吉相的面相与财运直接相关。高鼻子意味着坚强的意志，大嘴巴意味着大收入，有光泽的额头代表明智的财务管理。',
        '你的面容具有吸引金钱的魅力。高鼻子和大嘴巴的组合是财运出色的明确信号，让你能够终生享受财务丰裕。',
        '有光泽的额头、高鼻子和大嘴巴都是与财富相关的好面相。拥有这种面容的人天生具有金钱聚集和积累的运势。',
        '财运丰富的面相不仅仅是外貌，而是通过面部特征展现的内在财务感。你在赚钱和管理金钱方面具有天赋。',
        '你高挺的鼻子、大嘴巴和有光泽的额头表明你能够终生保持稳定的财务状况。通过适当的投资和管理可以积累巨大财富。'
      ],
      'zh-TW': [
        '你的面相財運很好！鼻樑高挺、嘴巴較大、額頭有光澤，具有出色的賺錢和理財能力。',
        '中吉相的面容特徵是鼻樑高、嘴巴大、額頭有光澤。這種面相意味著具有出色的吸引和積累財富的能力。',
        '你高挺清晰的鼻子和較大端正的嘴巴顯示財運豐富。你具有出色的賺錢和管理金錢的能力，能夠保持穩定的財務狀況。',
        '你有光澤的額頭和高挺的鼻子顯示你具有天生的財運。在投資或商業方面取得巨大成功的可能性很高，是金錢聚集的面相。',
        '大嘴巴、高鼻樑和有光澤的額頭是吸引財富的好跡象。擁有這種面相的人可以通過適當的投資和儲蓄積累巨大財富。',
        '中吉相的面相與財運直接相關。高鼻子意味著堅強的意志，大嘴巴意味著大收入，有光澤的額頭代表明智的財務管理。',
        '你的面容具有吸引金錢的魅力。高鼻子和大嘴巴的組合是財運出色的明確信號，讓你能夠終生享受財務豐裕。',
        '有光澤的額頭、高鼻子和大嘴巴都是與財富相關的好面相。擁有這種面容的人天生具有金錢聚集和積累的運勢。',
        '財運豐富的面相不僅僅是外貌，而是通過面部特徵展現的內在財務感。你在賺錢和管理金錢方面具有天賦。',
        '你高挺的鼻子、大嘴巴和有光澤的額頭表明你能夠終生保持穩定的財務狀況。通過適當的投資和管理可以積累巨大財富。'
      ],
      vi: [
        'Khuôn mặt của bạn có vận tài lộc rất tốt! Mũi cao, miệng rộng, trán bóng loáng, bạn có khả năng kiếm tiền và tích lũy tài sản xuất sắc.',
        'Khuôn mặt trung cát có đặc điểm là mũi cao, miệng rộng và trán bóng. Tướng số này có nghĩa là bạn có khả năng xuất sắc để thu hút và tích lũy sự giàu có.',
        'Mũi cao và rõ ràng cùng miệng rộng và đều đặn của bạn cho thấy vận tài lộc dồi dào. Bạn có khả năng kiếm tiền và quản lý tiền bạc xuất sắc, duy trì tài chính ổn định.',
        'Trán bóng và mũi cao của bạn cho thấy bạn có vận tài lộc thiên bẩm. Khả năng cao đạt được thành công lớn trong đầu tư hoặc kinh doanh, một tướng số nơi tiền bạc tích tụ.',
        'Miệng rộng, mũi cao và trán bóng là những dấu hiệu tốt để thu hút sự giàu có. Những người có tướng số như vậy có thể tích lũy sự giàu có lớn thông qua đầu tư đúng đắn và tiết kiệm.',
        'Tướng số trung cát có liên quan trực tiếp đến vận tài lộc. Mũi cao có nghĩa là ý chí mạnh mẽ, miệng rộng có nghĩa là thu nhập lớn, và trán bóng đại diện cho quản lý tài chính khôn ngoan.',
        'Khuôn mặt của bạn có sức hút để thu hút tiền bạc. Sự kết hợp của mũi cao và miệng rộng là tín hiệu rõ ràng của vận tài lộc xuất sắc, cho phép bạn tận hưởng sự giàu có tài chính suốt đời.',
        'Trán bóng, mũi cao và miệng rộng đều là những dấu hiệu tướng số tốt liên quan đến sự giàu có. Những người có khuôn mặt như vậy được sinh ra với vận may nơi tiền bạc tụ tập và tích lũy.',
        'Tướng số giàu có không chỉ là ngoại hình, mà còn là cảm giác tài chính bên trong được thể hiện qua các đặc điểm khuôn mặt. Bạn có tài năng thiên bẩm trong việc kiếm tiền và quản lý tiền bạc.',
        'Mũi cao, miệng rộng và trán bóng của bạn cho thấy bạn có thể duy trì tài chính ổn định suốt đời. Bạn có thể tích lũy sự giàu có lớn thông qua đầu tư và quản lý đúng đắn.'
      ],
      id: [
        'Wajah Anda menunjukkan keberuntungan kekayaan yang sangat baik! Dengan hidung tinggi, mulut besar, dan dahi mengkilap, Anda memiliki kemampuan luar biasa untuk menghasilkan dan mengumpulkan uang.',
        'Wajah nasib baik ditandai dengan hidung tinggi, mulut besar, dan dahi berkilau. Fisiognomi ini berarti Anda memiliki kemampuan luar biasa untuk menarik dan mengumpulkan kekayaan.',
        'Hidung tinggi dan jelas serta mulut besar dan rapi Anda menunjukkan nasib kekayaan yang melimpah. Anda memiliki kemampuan luar biasa untuk menghasilkan dan mengelola uang, mempertahankan keuangan yang stabil.',
        'Dahi berkilau dan hidung tinggi Anda menunjukkan Anda memiliki nasib kekayaan bawaan. Potensi tinggi untuk sukses besar dalam investasi atau bisnis, fisiognomi di mana uang menumpuk.',
        'Mulut besar, hidung tinggi, dan dahi berkilau adalah tanda-tanda baik untuk menarik kekayaan. Mereka yang memiliki fisiognomi seperti ini dapat mengumpulkan kekayaan besar melalui investasi yang tepat dan penghematan.',
        'Fisiognomi nasib baik secara langsung terhubung dengan nasib kekayaan. Hidung tinggi berarti kemauan kuat, mulut besar berarti pendapatan besar, dan dahi berkilau mewakili manajemen keuangan yang bijaksana.',
        'Wajah Anda memiliki daya tarik untuk menarik uang. Kombinasi hidung tinggi dan mulut besar adalah sinyal jelas dari nasib kekayaan yang luar biasa, memungkinkan Anda menikmati kelimpahan finansial sepanjang hidup.',
        'Dahi berkilau, hidung tinggi, dan mulut besar semuanya adalah tanda fisiognomi yang baik terkait kekayaan. Mereka yang memiliki wajah seperti ini secara alami dilahirkan dengan keberuntungan di mana uang berkumpul dan menumpuk.',
        'Fisiognomi kekayaan bukan hanya penampilan, tetapi indra keuangan batin yang diungkapkan melalui fitur wajah. Anda memiliki bakat alami dalam menghasilkan dan mengelola uang.',
        'Hidung tinggi, mulut besar, dan dahi berkilau Anda menunjukkan Anda dapat mempertahankan keuangan yang stabil sepanjang hidup. Anda dapat mengumpulkan kekayaan besar melalui investasi dan manajemen yang tepat.'
      ]
    },
    emoji: '💰',
    scoreRange: [80, 89],
    strengths: {
      ko: ['뛰어난 재정 관리', '안정적인 수입', '투자 감각', '절약 정신'],
      en: ['Excellent Financial Management', 'Stable Income', 'Investment Sense', 'Frugal Mindset'],
      ja: ['優れた財務管理', '安定した収入', '投資センス', '倹約精神'],
      'zh-CN': ['卓越财务管理', '稳定收入', '投资眼光', '节俭精神'],
      'zh-TW': ['卓越財務管理', '穩定收入', '投資眼光', '節儉精神'],
      vi: ['Quản lý tài chính xuất sắc', 'Thu nhập ổn định', 'Cảm nhận đầu tư', 'Tinh thần tiết kiệm'],
      id: ['Manajemen Keuangan Luar Biasa', 'Pendapatan Stabil', 'Naluri Investasi', 'Mentalitas Hemat']
    },
    recommendations: {
      ko: ['부동산 투자', '주식/펀드 투자', '사업 확장', '저축 계획 수립'],
      en: ['Real Estate Investment', 'Stock/Fund Investment', 'Business Expansion', 'Create Savings Plan'],
      ja: ['不動産投資', '株式・ファンド投資', '事業拡張', '貯蓄計画の策定'],
      'zh-CN': ['房地产投资', '股票/基金投资', '业务扩展', '制定储蓄计划'],
      'zh-TW': ['房地產投資', '股票/基金投資', '業務擴展', '制定儲蓄計劃'],
      vi: ['Đầu tư bất động sản', 'Đầu tư cổ phiếu/quỹ', 'Mở rộng kinh doanh', 'Lập kế hoạch tiết kiệm'],
      id: ['Investasi Real Estat', 'Investasi Saham/Dana', 'Ekspansi Bisnis', 'Buat Rencana Tabungan']
    },
    personality: {
      ko: [
        '재정 감각이 뛰어나고 돈을 관리하는 능력이 탁월합니다.',
        '안정적인 수입원을 추구하며 절약 정신이 강한 성격입니다.',
        '투자에 대한 판단력이 뛰어나며 위험을 잘 관리합니다.',
        '꾸준하고 성실한 성격으로 장기적인 재정 계획을 잘 세웁니다.',
        '재물에 대한 욕심은 적당하지만 적극적으로 부를 축적하려는 의지가 있습니다.',
        '신중하고 현실적인 사고로 무리한 투자보다는 안정적인 방법을 선호합니다.',
        '계획적이고 체계적인 성격으로 재정 관리에 능합니다.',
        '타인의 재정 조언을 잘 듣고 활용하는 능력이 있습니다.',
        '절약을 즐기며 불필요한 지출을 줄이는 습관이 있습니다.',
        '장기적인 관점에서 재정적 안정을 추구하는 현실적인 성격입니다.'
      ],
      en: [
        'Excellent financial sense and outstanding ability to manage money.',
        'Seeks stable income sources with strong frugal mindset.',
        'Outstanding judgment in investments and good risk management.',
        'Steady and sincere personality, good at making long-term financial plans.',
        'Moderate desire for wealth but has active will to accumulate riches.',
        'Prudent and realistic thinking, prefers stable methods over risky investments.',
        'Planned and systematic personality, skilled in financial management.',
        'Good ability to listen to and utilize others\' financial advice.',
        'Enjoys saving and has habit of reducing unnecessary expenses.',
        'Realistic personality pursuing financial stability from long-term perspective.'
      ],
      ja: [
        '財政センスが優れており、お金を管理する能力が卓越しています。',
        '安定した収入源を追求し、倹約精神が強い性格です。',
        '投資に関する判断力が優れており、リスクをよく管理します。',
        '着実で誠実な性格で、長期的な財政計画をよく立てます。',
        '財産に対する欲は適度ですが、積極的に富を蓄積しようとする意志があります。',
        '慎重で現実的な思考で、無理な投資よりも安定した方法を好みます。',
        '計画的で体系的な性格で、財政管理に長けています。',
        '他人の財政助言をよく聞き活用する能力があります。',
        '倹約を楽しみ、不要な支出を減らす習慣があります。',
        '長期的な観点から財政的安定を追求する現実的な性格です。'
      ],
      'zh-CN': [
        '出色的财务感和卓越的理财能力。',
        '追求稳定的收入来源，具有强烈的节俭精神。',
        '在投资方面判断力出色，善于管理风险。',
        '稳健和诚实的性格，善于制定长期财务计划。',
        '对财富的欲望适度，但积极积累财富的意志很强。',
        '谨慎和现实的思维，喜欢稳定的方法而不是冒险的投资。',
        '有计划和有系统的性格，精通财务管理。',
        '善于听取和利用他人的财务建议。',
        '享受储蓄，有减少不必要支出的习惯。',
        '从长期角度追求财务稳定的现实性格。'
      ],
      'zh-TW': [
        '出色的財務感和卓越的理財能力。',
        '追求穩定的收入來源，具有強烈的節儉精神。',
        '在投資方面判斷力出色，善於管理風險。',
        '穩健和誠實的性格，善於制定長期財務計劃。',
        '對財富的欲望適度，但積極積累財富的意志很強。',
        '謹慎和現實的思維，喜歡穩定的方法而不是冒險的投資。',
        '有計劃和有系統的性格，精通財務管理。',
        '善於聽取和利用他人的財務建議。',
        '享受儲蓄，有減少不必要支出的習慣。',
        '從長期角度追求財務穩定的現實性格。'
      ],
      vi: [
        'Cảm nhận tài chính xuất sắc và khả năng quản lý tiền bạc vượt trội.',
        'Tìm kiếm nguồn thu nhập ổn định với tinh thần tiết kiệm mạnh mẽ.',
        'Khả năng phán đoán xuất sắc trong đầu tư và quản lý rủi ro tốt.',
        'Tính cách ổn định và chân thành, giỏi lập kế hoạch tài chính dài hạn.',
        'Ham muốn của cải ở mức vừa phải nhưng có ý chí tích cực tích lũy của cải.',
        'Suy nghĩ thận trọng và thực tế, thích phương pháp ổn định hơn đầu tư rủi ro.',
        'Tính cách có kế hoạch và hệ thống, giỏi quản lý tài chính.',
        'Khả năng tốt lắng nghe và sử dụng lời khuyên tài chính của người khác.',
        'Thích tiết kiệm và có thói quen giảm chi tiêu không cần thiết.',
        'Tính cách thực tế theo đuổi sự ổn định tài chính từ quan điểm dài hạn.'
      ],
      id: [
        'Indra keuangan yang sangat baik dan kemampuan luar biasa untuk mengelola uang.',
        'Mencari sumber pendapatan stabil dengan mentalitas hemat yang kuat.',
        'Penilaian luar biasa dalam investasi dan manajemen risiko yang baik.',
        'Kepribadian yang stabil dan tulus, pandai membuat rencana keuangan jangka panjang.',
        'Keinginan moderat untuk kekayaan tetapi memiliki kemauan aktif untuk mengumpulkan kekayaan.',
        'Pikiran yang hati-hati dan realistis, lebih suka metode stabil daripada investasi berisiko.',
        'Kepribadian yang terencana dan sistematis, terampil dalam manajemen keuangan.',
        'Kemampuan yang baik untuk mendengarkan dan memanfaatkan nasihat keuangan orang lain.',
        'Menikmati penghematan dan memiliki kebiasaan mengurangi pengeluaran yang tidak perlu.',
        'Kepribadian realistis yang mengejar stabilitas keuangan dari perspektif jangka panjang.'
      ]
    },
    advice: {
      ko: [
        '당신의 재물운을 활용하여 더 큰 부를 축적하세요. 하지만 나눔의 마음도 잊지 마세요.',
        '높은 코와 큰 입은 재물을 끌어들이는 좋은 관상입니다. 적극적인 투자와 사업 확장을 고려해보세요.',
        '이마의 광택은 지혜로운 재정 관리를 의미합니다. 현명한 투자 판단으로 더 큰 수익을 얻을 수 있습니다.',
        '재물운이 좋은 관상을 가졌으니, 부동산이나 주식 투자에 도전해보세요. 하지만 신중하게 접근하세요.',
        '큰 입은 큰 수입을 의미합니다. 능력을 발휘할 수 있는 분야에서 더 많은 기회를 찾아보세요.',
        '절약 정신을 유지하면서도 수익 기회를 놓치지 마세요. 안정성과 수익성을 균형있게 추구하세요.',
        '재물운이 좋으니 사업 확장이나 새로운 수입원을 창출하는 것을 고려해보세요.',
        '타인의 재정 조언을 듣되, 자신의 판단력도 신뢰하세요. 당신의 감각이 옳을 때가 많습니다.',
        '장기적인 관점에서 재정 계획을 세우고 꾸준히 실천하세요. 시간이 지날수록 재물이 늘어날 것입니다.',
        '재물을 모으는 것도 중요하지만, 행복하게 살 수 있는 균형을 찾는 것이 더 중요합니다.'
      ],
      en: [
        'Use your wealth fortune to accumulate greater riches, but don\'t forget the spirit of sharing.',
        'Your high nose and large mouth are good physiognomy for attracting wealth. Consider active investment and business expansion.',
        'The gloss on your forehead means wise financial management. You can gain greater profits through wise investment judgment.',
        'Since you have good wealth fortune physiognomy, try real estate or stock investments, but approach carefully.',
        'A large mouth means large income. Look for more opportunities in fields where you can demonstrate your abilities.',
        'Maintain your frugal spirit but don\'t miss profit opportunities. Pursue stability and profitability in balance.',
        'Since your wealth fortune is good, consider business expansion or creating new income sources.',
        'Listen to others\' financial advice, but also trust your own judgment. Your sense is often correct.',
        'Make long-term financial plans and practice them steadily. Wealth will increase over time.',
        'Accumulating wealth is important, but finding balance to live happily is even more important.'
      ],
      ja: [
        'あなたの財運を活用してより大きな富を蓄積してください。しかし、分かち合いの心も忘れずに。',
        '高い鼻と大きな口は財産を引き寄せる良い観相です。積極的な投資と事業拡張を検討してみてください。',
        '額の光沢は賢明な財務管理を意味します。賢明な投資判断でより大きな利益を得ることができます。',
        '財運が良い観相を持っているので、不動産や株式投資に挑戦してみてください。しかし慎重にアプローチしてください。',
        '大きな口は大きな収入を意味します。能力を発揮できる分野でより多くの機会を探してみてください。',
        '倹約精神を維持しながらも収益機会を逃さないでください。安定性と収益性をバランスよく追求してください。',
        '財運が良いので事業拡張や新しい収入源を創出することを検討してみてください。',
        '他人の財政助言を聞くが、自分の判断力も信頼してください。あなたのセンスが正しいことが多いです。',
        '長期的な観点から財政計画を立て、着実に実践してください。時間が経つにつれて財産が増えるでしょう。',
        '財産を蓄積することも重要ですが、幸せに暮らせるバランスを見つけることがより重要です。'
      ],
      'zh-CN': [
        '运用你的财运积累更多财富，但不要忘记分享的精神。',
        '你高挺的鼻子和大嘴巴是吸引财富的好面相。考虑积极的投资和业务扩展。',
        '你额头的光泽意味着明智的财务管理。通过明智的投资判断可以获得更大的利润。',
        '既然你有好的财运面相，尝试房地产或股票投资，但要谨慎行事。',
        '大嘴巴意味着大收入。在你能发挥能力的领域寻找更多机会。',
        '保持节俭精神但不要错过利润机会。平衡地追求稳定性和盈利能力。',
        '既然你的财运很好，考虑业务扩展或创造新的收入来源。',
        '听取他人的财务建议，但也要相信自己的判断。你的感觉往往是正确的。',
        '制定长期财务计划并稳步实践。随着时间的推移，财富会增加。',
        '积累财富很重要，但找到快乐生活的平衡更重要。'
      ],
      'zh-TW': [
        '運用你的財運積累更多財富，但不要忘記分享的精神。',
        '你高挺的鼻子和大嘴巴是吸引財富的好面相。考慮積極的投資和業務擴展。',
        '你額頭的光澤意味著明智的財務管理。通過明智的投資判斷可以獲得更大的利潤。',
        '既然你有好的財運面相，嘗試房地產或股票投資，但要謹慎行事。',
        '大嘴巴意味著大收入。在你能發揮能力的領域尋找更多機會。',
        '保持節儉精神但不要錯過利潤機會。平衡地追求穩定性和盈利能力。',
        '既然你的財運很好，考慮業務擴展或創造新的收入來源。',
        '聽取他人的財務建議，但也要相信自己的判斷。你的感覺往往是正確的。',
        '制定長期財務計劃並穩步實踐。隨著時間的推移，財富會增加。',
        '積累財富很重要，但找到快樂生活的平衡更重要。'
      ],
      vi: [
        'Hãy sử dụng vận tài lộc của bạn để tích lũy của cải lớn hơn, nhưng đừng quên tinh thần chia sẻ.',
        'Mũi cao và miệng rộng của bạn là tướng số tốt để thu hút sự giàu có. Hãy cân nhắc đầu tư tích cực và mở rộng kinh doanh.',
        'Độ bóng trên trán của bạn có nghĩa là quản lý tài chính khôn ngoan. Bạn có thể đạt được lợi nhuận lớn hơn thông qua phán đoán đầu tư thông minh.',
        'Vì bạn có tướng số vận tài lộc tốt, hãy thử đầu tư bất động sản hoặc cổ phiếu, nhưng tiếp cận một cách cẩn thận.',
        'Miệng rộng có nghĩa là thu nhập lớn. Hãy tìm kiếm nhiều cơ hội hơn trong các lĩnh vực mà bạn có thể thể hiện khả năng của mình.',
        'Duy trì tinh thần tiết kiệm của bạn nhưng đừng bỏ lỡ cơ hội lợi nhuận. Theo đuổi sự ổn định và khả năng sinh lời một cách cân bằng.',
        'Vì vận tài lộc của bạn tốt, hãy cân nhắc mở rộng kinh doanh hoặc tạo ra các nguồn thu nhập mới.',
        'Lắng nghe lời khuyên tài chính của người khác, nhưng cũng tin tưởng vào phán đoán của chính mình. Cảm nhận của bạn thường đúng.',
        'Lập kế hoạch tài chính dài hạn và thực hành chúng một cách ổn định. Của cải sẽ tăng lên theo thời gian.',
        'Tích lũy của cải là quan trọng, nhưng tìm kiếm sự cân bằng để sống hạnh phúc còn quan trọng hơn.'
      ],
      id: [
        'Gunakan keberuntungan kekayaan Anda untuk mengumpulkan kekayaan yang lebih besar, tetapi jangan lupa semangat berbagi.',
        'Hidung tinggi dan mulut besar Anda adalah fisiognomi yang baik untuk menarik kekayaan. Pertimbangkan investasi aktif dan ekspansi bisnis.',
        'Kilau di dahi Anda berarti manajemen keuangan yang bijaksana. Anda dapat memperoleh keuntungan yang lebih besar melalui penilaian investasi yang bijak.',
        'Karena Anda memiliki fisiognomi nasib kekayaan yang baik, coba investasi real estat atau saham, tetapi pendekatan dengan hati-hati.',
        'Mulut besar berarti pendapatan besar. Cari lebih banyak peluang di bidang di mana Anda dapat menunjukkan kemampuan Anda.',
        'Pertahankan semangat hemat Anda tetapi jangan lewatkan peluang keuntungan. Kejar stabilitas dan profitabilitas secara seimbang.',
        'Karena nasib kekayaan Anda baik, pertimbangkan ekspansi bisnis atau menciptakan sumber pendapatan baru.',
        'Dengarkan nasihat keuangan orang lain, tetapi juga percaya pada penilaian Anda sendiri. Indra Anda sering benar.',
        'Buat rencana keuangan jangka panjang dan praktikkan dengan mantap. Kekayaan akan meningkat seiring waktu.',
        'Mengumpulkan kekayaan itu penting, tetapi menemukan keseimbangan untuk hidup bahagia lebih penting.'
      ]
    },
    fortune: {
      wealth: {
        ko: [
          '높은 코와 큰 입, 광택 나는 이마는 재물을 끌어들이는 완벽한 조합입니다. 사업과 투자에서 큰 성공을 거둘 가능성이 높습니다.',
          '이마의 광택은 지혜로운 재정 관리를 의미하며, 높은 코는 강한 의지를 나타냅니다. 이런 관상으로 평생 재정적 안정을 구축할 수 있습니다.',
          '큰 입은 큰 수입을 의미합니다. 능력을 발휘할 수 있는 분야에서 적극적으로 활동하면 재물이 자연스럽게 모일 것입니다.',
          '재물운이 풍부한 관상을 가졌으니 부동산이나 주식 투자를 통해 큰 수익을 얻을 수 있습니다. 특히 40대 후반부터 큰 성공을 거둘 것입니다.',
          '높은 코는 강한 의지와 통솔력을 나타내며, 이런 성격으로 독자적인 사업을 통해 큰 부를 쌓을 수 있습니다.',
          '중길상의 관상은 재물과 직결됩니다. 적절한 투자와 관리를 통해 꾸준히 재물이 늘어날 것이며, 평생 안정적인 재정 상태를 유지할 수 있습니다.',
          '이마의 광택과 높은 코, 큰 입은 모두 재물과 관련된 좋은 관상입니다. 자연스럽게 돈이 모이고 축적되는 운을 타고났습니다.',
          '재정적 감각이 뛰어나고 투자 판단력이 좋습니다. 현명한 재정 관리를 통해 큰 부를 축적할 수 있으며, 특히 부동산 투자가 유리합니다.',
          '큰 입은 큰 수입을 의미하지만, 큰 지출도 의미할 수 있습니다. 절약 정신을 유지하면서 수입을 늘리는 것이 중요합니다.',
          '당신의 관상은 평생 안정적인 재정 상태를 보장합니다. 무리한 투자보다는 신중하고 꾸준한 재정 관리를 통해 큰 부를 축적하세요.'
        ],
        en: [
          'Your high nose, large mouth, and glossy forehead are a perfect combination for attracting wealth. High potential for great success in business and investments.',
          'The gloss on your forehead means wise financial management, and your high nose shows strong willpower. With this physiognomy, you can build financial stability throughout life.',
          'A large mouth means large income. By actively engaging in fields where you can demonstrate your abilities, wealth will naturally accumulate.',
          'Since you have physiognomy with abundant wealth fortune, you can gain great profits through real estate or stock investments. You will particularly achieve great success from your late 40s.',
          'Your high nose shows strong will and leadership, and with this personality, you can accumulate great wealth through independent business.',
          'The physiognomy of good fortune is directly connected to wealth. Through appropriate investment and management, wealth will steadily increase, and you can maintain stable finances throughout life.',
          'The glossy forehead, high nose, and large mouth are all good physiognomic signs related to wealth. You are naturally born with fortune where money gathers and accumulates.',
          'You have excellent financial sense and good investment judgment. Through wise financial management, you can accumulate great wealth, especially real estate investment is favorable.',
          'A large mouth means large income but can also mean large expenses. It\'s important to increase income while maintaining a frugal spirit.',
          'Your physiognomy guarantees stable finances throughout life. Accumulate great wealth through prudent and steady financial management rather than risky investments.'
        ],
        ja: [
          '高い鼻と大きな口、光沢のある額は財産を引き寄せる完璧な組み合わせです。ビジネスと投資で大きな成功を収める可能性が高いです。',
          '額の光沢は賢明な財務管理を意味し、高い鼻は強い意志を表しています。このような観相で一生財政的安定を築くことができます。',
          '大きな口は大きな収入を意味します。能力を発揮できる分野で積極的に活動すれば財産が自然に集まるでしょう。',
          '財運が豊富な観相を持っているので、不動産や株式投資を通じて大きな利益を得ることができます。特に40代後半から大きな成功を収めるでしょう。',
          '高い鼻は強い意志と統率力を表しており、このような性格で独立した事業を通じて大きな富を築くことができます。',
          '中吉相の観相は財運と直結しています。適切な投資と管理を通じて着実に財産が増えるでしょう。',
          '額の光沢と高い鼻、大きな口はすべて財産に関連する良い観相です。自然にお金が集まり蓄積される運を持って生まれています。',
          '財政的センスが優れており、投資判断力が良いです。賢明な財政管理を通じて大きな富を蓄積することができ、特に不動産投資が有利です。',
          '大きな口は大きな収入を意味しますが、大きな支出も意味する可能性があります。倹約精神を維持しながら収入を増やすことが重要です。',
          'あなたの観相は一生安定した財政状態を保証します。無理な投資よりも慎重で着実な財政管理を通じて大きな富を蓄積してください。'
        ],
        'zh-CN': [
          '你高挺的鼻子、大嘴巴和有光泽的额头是吸引财富的完美组合。在商业和投资方面取得巨大成功的可能性很高。',
          '你额头的光泽意味着明智的财务管理，你高挺的鼻子显示强大的意志力。拥有这种面相，你可以终生建立财务稳定。',
          '大嘴巴意味着大收入。在你能够发挥能力的领域积极活动，财富将自然积累。',
          '既然你拥有财运丰富的面相，可以通过房地产或股票投资获得巨大利润。特别是在40多岁后期会取得巨大成功。',
          '你高挺的鼻子显示坚强的意志和领导力，凭借这种个性，可以通过独立业务积累巨大财富。',
          '中吉相的面相与财运直接相关。通过适当的投资和管理，财富将稳步增加，你可以终生保持稳定的财务状况。',
          '有光泽的额头、高鼻子和大嘴巴都是与财富相关的好面相。你天生具有金钱聚集和积累的运势。',
          '你具有出色的财务感和良好的投资判断力。通过明智的财务管理可以积累巨大财富，特别是房地产投资有利。',
          '大嘴巴意味着大收入，但也可能意味着大支出。在保持节俭精神的同时增加收入很重要。',
          '你的面相保证你终生稳定的财务状况。通过谨慎和稳定的财务管理而不是冒险投资来积累巨大财富。'
        ],
        'zh-TW': [
          '你高挺的鼻子、大嘴巴和有光澤的額頭是吸引財富的完美組合。在商業和投資方面取得巨大成功的可能性很高。',
          '你額頭的光澤意味著明智的財務管理，你高挺的鼻子顯示強大的意志力。擁有這種面相，你可以終生建立財務穩定。',
          '大嘴巴意味著大收入。在你能夠發揮能力的領域積極活動，財富將自然積累。',
          '既然你擁有財運豐富的面相，可以通過房地產或股票投資獲得巨大利潤。特別是在40多歲後期會取得巨大成功。',
          '你高挺的鼻子顯示堅強的意志和領導力，憑藉這種個性，可以通過獨立業務積累巨大財富。',
          '中吉相的面相與財運直接相關。通過適當的投資和管理，財富將穩步增加，你可以終生保持穩定的財務狀況。',
          '有光澤的額頭、高鼻子和大嘴巴都是與財富相關的好面相。你天生具有金錢聚集和積累的運勢。',
          '你具有出色的財務感和良好的投資判斷力。通過明智的財務管理可以積累巨大財富，特別是房地產投資有利。',
          '大嘴巴意味著大收入，但也可能意味著大支出。在保持節儉精神的同時增加收入很重要。',
          '你的面相保證你終生穩定的財務狀況。通過謹慎和穩定的財務管理而不是冒險投資來積累巨大財富。'
        ],
        vi: [
          'Mũi cao, miệng rộng và trán bóng của bạn là sự kết hợp hoàn hảo để thu hút sự giàu có. Khả năng cao đạt được thành công lớn trong kinh doanh và đầu tư.',
          'Độ bóng trên trán của bạn có nghĩa là quản lý tài chính khôn ngoan, và mũi cao của bạn cho thấy ý chí mạnh mẽ. Với tướng số này, bạn có thể xây dựng sự ổn định tài chính suốt đời.',
          'Miệng rộng có nghĩa là thu nhập lớn. Bằng cách tham gia tích cực vào các lĩnh vực mà bạn có thể thể hiện khả năng của mình, của cải sẽ tự nhiên tích lũy.',
          'Vì bạn có tướng số vận tài lộc dồi dào, bạn có thể thu được lợi nhuận lớn thông qua đầu tư bất động sản hoặc cổ phiếu. Bạn sẽ đặc biệt đạt được thành công lớn từ cuối những năm 40.',
          'Mũi cao của bạn cho thấy ý chí mạnh mẽ và khả năng lãnh đạo, và với tính cách này, bạn có thể tích lũy sự giàu có lớn thông qua kinh doanh độc lập.',
          'Tướng số trung cát có liên quan trực tiếp đến của cải. Thông qua đầu tư và quản lý phù hợp, của cải sẽ tăng dần đều, và bạn có thể duy trì tài chính ổn định suốt đời.',
          'Trán bóng, mũi cao và miệng rộng đều là những dấu hiệu tướng số tốt liên quan đến sự giàu có. Bạn được sinh ra với vận may nơi tiền bạc tụ tập và tích lũy.',
          'Bạn có cảm nhận tài chính xuất sắc và khả năng phán đoán đầu tư tốt. Thông qua quản lý tài chính khôn ngoan, bạn có thể tích lũy sự giàu có lớn, đặc biệt là đầu tư bất động sản thuận lợi.',
          'Miệng rộng có nghĩa là thu nhập lớn nhưng cũng có thể có nghĩa là chi tiêu lớn. Điều quan trọng là tăng thu nhập trong khi duy trì tinh thần tiết kiệm.',
          'Tướng số của bạn đảm bảo tài chính ổn định suốt đời. Hãy tích lũy sự giàu có lớn thông qua quản lý tài chính thận trọng và ổn định thay vì đầu tư rủi ro.'
        ],
        id: [
          'Hidung tinggi, mulut besar, dan dahi berkilau Anda adalah kombinasi sempurna untuk menarik kekayaan. Potensi tinggi untuk sukses besar dalam bisnis dan investasi.',
          'Kilau di dahi Anda berarti manajemen keuangan yang bijaksana, dan hidung tinggi Anda menunjukkan tekad yang kuat. Dengan fisiognomi ini, Anda dapat membangun stabilitas keuangan sepanjang hidup.',
          'Mulut besar berarti pendapatan besar. Dengan terlibat aktif di bidang di mana Anda dapat menunjukkan kemampuan Anda, kekayaan akan secara alami menumpuk.',
          'Karena Anda memiliki fisiognomi dengan nasib kekayaan yang melimpah, Anda dapat memperoleh keuntungan besar melalui investasi real estat atau saham. Anda akan mencapai kesuksesan besar khususnya dari akhir 40-an.',
          'Hidung tinggi Anda menunjukkan kemauan kuat dan kepemimpinan, dan dengan kepribadian ini, Anda dapat mengumpulkan kekayaan besar melalui bisnis independen.',
          'Fisiognomi nasib baik secara langsung terhubung dengan kekayaan. Melalui investasi dan manajemen yang tepat, kekayaan akan terus meningkat, dan Anda dapat menjaga keuangan stabil sepanjang hidup.',
          'Dahi berkilau, hidung tinggi, dan mulut besar semuanya adalah tanda fisiognomi yang baik terkait kekayaan. Anda secara alami dilahirkan dengan keberuntungan di mana uang berkumpul dan menumpuk.',
          'Anda memiliki indra keuangan yang sangat baik dan penilaian investasi yang baik. Melalui manajemen keuangan yang bijaksana, Anda dapat mengumpulkan kekayaan besar, terutama investasi real estat menguntungkan.',
          'Mulut besar berarti pendapatan besar tetapi juga dapat berarti pengeluaran besar. Penting untuk meningkatkan pendapatan sambil mempertahankan semangat hemat.',
          'Fisiognomi Anda menjamin keuangan stabil sepanjang hidup. Kumpulkan kekayaan besar melalui manajemen keuangan yang hati-hati dan mantap daripada investasi berisiko.'
        ]
      },
      love: {
        ko: [
          '큰 입은 대인 관계에서 활발한 소통을 의미하며, 이런 성격이 좋은 인연을 만나게 해줍니다. 특히 사회적 만남이 많은 분야에서 좋은 관계를 형성할 수 있습니다.',
          '재물운이 좋은 관상은 경제적 안정을 제공하며, 이런 안정감이 연애 관계에도 긍정적인 영향을 미칩니다. 특히 결혼을 고려하는 상대방에게 매력적으로 보일 것입니다.',
          '이마의 광택은 넓은 마음을 의미하며, 상대방의 결점을 받아들이고 포용하는 능력이 있습니다. 이런 성격이 오래가는 관계를 만듭니다.',
          '재물 관리를 잘하는 성격은 연애에서도 신뢰감을 줍니다. 경제적으로 안정적인 모습이 상대방에게 안정감을 주며, 특히 장기적인 관계를 원하는 이성에게 매력적입니다.',
          '높은 코는 강한 의지를 나타내며, 연애에서도 한 사람을 향한 확고한 사랑을 보여줍니다. 배려심 깊고 책임감 있는 연인이 될 것입니다.',
          '재정적 감각이 뛰어나고 현실적인 성격으로, 연애에서도 실용적인 접근을 합니다. 이런 성향이 안정적인 관계를 만드는 데 도움이 됩니다.',
          '큰 입은 활발한 대화를 좋아하는 성격을 나타냅니다. 이런 성향이 연애 관계에서도 긍정적으로 작용하며, 상대방과의 소통이 원활합니다.',
          '재물운이 좋으니 경제적으로 여유가 있어 연애에 집중할 수 있습니다. 하지만 돈보다는 진정한 감정에 집중하는 것이 중요합니다.',
          '안정적인 재정 상태는 결혼 생활에 유리합니다. 특히 경제적 기반이 필요한 결혼을 생각하는 상대방에게 좋은 인상을 줄 것입니다.',
          '당신의 관상은 장기적인 관계를 선호합니다. 짧은 만남보다는 진지하고 깊은 사랑을 추구하며, 결혼 후에도 경제적으로 안정적인 가정을 이룰 수 있습니다.'
        ],
        en: [
          'A large mouth means active communication in interpersonal relationships, and this personality helps you meet good relationships. You can form good relationships especially in fields with many social encounters.',
          'Physiognomy with good wealth fortune provides economic stability, and this stability has a positive effect on romantic relationships. You will be particularly attractive to those considering marriage.',
          'The gloss on your forehead means a broad mind, with the ability to accept and embrace your partner\'s flaws. This personality creates long-lasting relationships.',
          'A personality good at managing wealth also gives trust in love. An economically stable appearance gives a sense of stability to your partner, and is particularly attractive to those who want long-term relationships.',
          'Your high nose shows strong will, and shows firm love toward one person in relationships. You will be a caring and responsible partner.',
          'Excellent financial sense and realistic personality, also taking a practical approach in love. This tendency helps create stable relationships.',
          'A large mouth shows a personality that enjoys active conversation. This tendency works positively in romantic relationships, and communication with your partner is smooth.',
          'Since your wealth fortune is good, you have economic leeway to focus on love. But it\'s more important to focus on true feelings rather than money.',
          'Stable finances are favorable for married life. You will make a particularly good impression on partners who think about marriage requiring an economic foundation.',
          'Your physiognomy prefers long-term relationships. Rather than brief encounters, you pursue serious and deep love, and can build an economically stable family even after marriage.'
        ],
        ja: [
          '大きな口は対人関係で活発なコミュニケーションを意味し、このような性格が良い縁に巡り合わせてくれます。特に社会的な出会いが多い分野で良い関係を築くことができます。',
          '財運が良い観相は経済的安定を提供し、この安定感が恋愛関係にも肯定的な影響を与えます。特に結婚を考慮する相手に魅力的に映るでしょう。',
          '額の光沢は広い心を意味し、相手の欠点を受け入れ包容する能力があります。この性格が長続きする関係を作ります。',
          '財産管理が上手な性格は恋愛でも信頼感を与えます。経済的に安定した姿が相手に安定感を与え、特に長期的な関係を望む異性に魅力的です。',
          '高い鼻は強い意志を表しており、恋愛でも一人の人への確固たる愛を示します。思いやり深く責任感のある恋人になるでしょう。',
          '財政的センスが優れており現実的な性格で、恋愛でも実用的なアプローチをします。この傾向が安定した関係を作るのに役立ちます。',
          '大きな口は活発な会話を好む性格を表しています。この傾向が恋愛関係でも肯定的に作用し、相手とのコミュニケーションが円滑です。',
          '財運が良いので経済的に余裕があり恋愛に集中できます。しかしお金よりも本当の感情に集中することが重要です。',
          '安定した財政状態は結婚生活に有利です。特に経済的基盤が必要な結婚を考える相手に良い印象を与えるでしょう。',
          'あなたの観相は長期的な関係を好みます。短い出会いよりも真剣で深い愛を追求し、結婚後も経済的に安定した家庭を築くことができます。'
        ],
        'zh-CN': [
          '大嘴巴意味着在人际关系中积极沟通，这种个性帮助你遇到好的关系。特别是在社交活动多的领域可以形成良好的关系。',
          '财运好的面相提供经济稳定，这种稳定感对恋爱关系也有积极影响。你会特别吸引那些考虑结婚的人。',
          '你额头的光泽意味着宽广的心胸，具有接受和包容伴侣缺点的能力。这种个性创造了持久的关系。',
          '善于管理财富的个性在恋爱中也给予信任感。经济稳定的外观给伴侣稳定感，特别吸引那些想要长期关系的人。',
          '你高挺的鼻子显示坚强的意志，在关系中显示对一个人的坚定爱情。你将是一个体贴和有责任感的伴侣。',
          '出色的财务感和现实的个性，在恋爱中也采取实用的方法。这种倾向有助于创造稳定的关系。',
          '大嘴巴显示喜欢积极对话的个性。这种倾向在恋爱关系中起积极作用，与伴侣的沟通顺畅。',
          '既然你的财运很好，你有经济余裕可以专注于爱情。但专注于真实感受而不是金钱更重要。',
          '稳定的财务状况对婚姻生活有利。你会给那些考虑需要经济基础的婚姻的人留下特别好的印象。',
          '你的面相偏好长期关系。你追求认真和深刻的爱情而不是短暂的相遇，即使在结婚后也能建立一个经济稳定的家庭。'
        ],
        'zh-TW': [
          '大嘴巴意味著在人際關係中積極溝通，這種個性幫助你遇到好的關係。特別是在社交活動多的領域可以形成良好的關係。',
          '財運好的面相提供經濟穩定，這種穩定感對戀愛關係也有積極影響。你會特別吸引那些考慮結婚的人。',
          '你額頭的光澤意味著寬廣的心胸，具有接受和包容伴侶缺點的能力。這種個性創造了持久的關係。',
          '善於管理財富的個性在戀愛中也給予信任感。經濟穩定的外觀給伴侶穩定感，特別吸引那些想要長期關係的人。',
          '你高挺的鼻子顯示堅強的意志，在關係中顯示對一個人的堅定愛情。你將是一個體貼和有責任感的伴侶。',
          '出色的財務感和現實的個性，在戀愛中也採取實用的方法。這種傾向有助於創造穩定的關係。',
          '大嘴巴顯示喜歡積極對話的個性。這種傾向在戀愛關係中起積極作用，與伴侶的溝通順暢。',
          '既然你的財運很好，你有經濟餘裕可以專注於愛情。但專注於真實感受而不是金錢更重要。',
          '穩定的財務狀況對婚姻生活有利。你會給那些考慮需要經濟基礎的婚姻的人留下特別好的印象。',
          '你的面相偏好長期關係。你追求認真和深刻的愛情而不是短暫的相遇，即使在結婚後也能建立一個經濟穩定的家庭。'
        ],
        vi: [
          'Miệng rộng có nghĩa là giao tiếp tích cực trong các mối quan hệ giữa các cá nhân, và tính cách này giúp bạn gặp được những mối quan hệ tốt. Bạn có thể hình thành những mối quan hệ tốt đặc biệt là trong các lĩnh vực có nhiều cuộc gặp gỡ xã hội.',
          'Tướng số với vận tài lộc tốt cung cấp sự ổn định kinh tế, và sự ổn định này có tác động tích cực đến các mối quan hệ lãng mạn. Bạn sẽ đặc biệt hấp dẫn đối với những người đang cân nhắc kết hôn.',
          'Độ bóng trên trán của bạn có nghĩa là tâm trí rộng rãi, với khả năng chấp nhận và bao dung những thiếu sót của đối tác. Tính cách này tạo ra những mối quan hệ lâu dài.',
          'Tính cách giỏi quản lý của cải cũng mang lại cảm giác tin tưởng trong tình yêu. Một vẻ ngoài ổn định về kinh tế mang lại cảm giác ổn định cho đối tác của bạn, và đặc biệt hấp dẫn đối với những người muốn mối quan hệ lâu dài.',
          'Mũi cao của bạn cho thấy ý chí mạnh mẽ, và cho thấy tình yêu kiên định đối với một người trong các mối quan hệ. Bạn sẽ là một đối tác chu đáo và có trách nhiệm.',
          'Cảm nhận tài chính xuất sắc và tính cách thực tế, cũng có cách tiếp cận thực dụng trong tình yêu. Xu hướng này giúp tạo ra những mối quan hệ ổn định.',
          'Miệng rộng cho thấy một tính cách thích những cuộc trò chuyện tích cực. Xu hướng này hoạt động tích cực trong các mối quan hệ lãng mạn, và giao tiếp với đối tác của bạn diễn ra suôn sẻ.',
          'Vì vận tài lộc của bạn tốt, bạn có dư dả về kinh tế để tập trung vào tình yêu. Nhưng điều quan trọng hơn là tập trung vào cảm xúc thực sự thay vì tiền bạc.',
          'Tài chính ổn định thuận lợi cho cuộc sống hôn nhân. Bạn sẽ tạo ấn tượng đặc biệt tốt đối với những người bạn đời đang nghĩ về hôn nhân cần nền tảng kinh tế.',
          'Tướng số của bạn ưa thích các mối quan hệ lâu dài. Thay vì những cuộc gặp gỡ ngắn ngủi, bạn theo đuổi tình yêu nghiêm túc và sâu sắc, và có thể xây dựng một gia đình ổn định về kinh tế ngay cả sau khi kết hôn.'
        ],
        id: [
          'Mulut besar berarti komunikasi aktif dalam hubungan interpersonal, dan kepribadian ini membantu Anda bertemu hubungan yang baik. Anda dapat membentuk hubungan yang baik terutama di bidang dengan banyak pertemuan sosial.',
          'Fisiognomi dengan nasib kekayaan yang baik memberikan stabilitas ekonomi, dan stabilitas ini memiliki efek positif pada hubungan romantis. Anda akan sangat menarik bagi mereka yang mempertimbangkan pernikahan.',
          'Kilau di dahi Anda berarti pikiran yang luas, dengan kemampuan untuk menerima dan merangkul kelemahan pasangan Anda. Kepribadian ini menciptakan hubungan jangka panjang.',
          'Kepribadian yang pandai mengelola kekayaan juga memberikan rasa percaya dalam cinta. Penampilan yang stabil secara ekonomi memberikan rasa stabilitas pada pasangan Anda, dan sangat menarik bagi mereka yang menginginkan hubungan jangka panjang.',
          'Hidung tinggi Anda menunjukkan kemauan yang kuat, dan menunjukkan cinta yang teguh terhadap satu orang dalam hubungan. Anda akan menjadi pasangan yang peduli dan bertanggung jawab.',
          'Indra keuangan yang sangat baik dan kepribadian yang realistis, juga mengambil pendekatan praktis dalam cinta. Kecenderungan ini membantu menciptakan hubungan yang stabil.',
          'Mulut besar menunjukkan kepribadian yang menikmati percakapan aktif. Kecenderungan ini bekerja positif dalam hubungan romantis, dan komunikasi dengan pasangan Anda lancar.',
          'Karena nasib kekayaan Anda baik, Anda memiliki kelonggaran ekonomi untuk fokus pada cinta. Tetapi lebih penting untuk fokus pada perasaan sejati daripada uang.',
          'Keuangan yang stabil menguntungkan untuk kehidupan pernikahan. Anda akan membuat kesan yang sangat baik pada pasangan yang berpikir tentang pernikahan yang memerlukan fondasi ekonomi.',
          'Fisiognomi Anda lebih suka hubungan jangka panjang. Daripada pertemuan singkat, Anda mengejar cinta yang serius dan mendalam, dan dapat membangun keluarga yang stabil secara ekonomi bahkan setelah menikah.'
        ]
      },
      success: {
        ko: [
          '재물운이 좋은 관상은 경제적 성공과 직결됩니다. 사업이나 투자를 통해 안정적인 성공을 거둘 수 있으며, 특히 부동산이나 금융 분야에서 두각을 나타낼 것입니다.',
          '높은 코는 강한 의지를 나타내며, 이런 성격으로 어려운 상황에서도 포기하지 않고 목표를 달성할 수 있습니다. 꾸준한 노력으로 큰 성공을 거둘 것입니다.',
          '이마의 광택과 높은 코, 큰 입의 조합은 재정적 성공을 보장합니다. 특히 40대 후반부터 본격적인 성공을 거둘 가능성이 높습니다.',
          '재정 감각이 뛰어나고 현실적인 사고로, 사업이나 투자에서 큰 성공을 기대할 수 있습니다. 하지만 무리하지 말고 신중하게 접근하세요.',
          '큰 입은 큰 수입을 의미하며, 능력을 발휘할 수 있는 분야에서 더 많은 기회를 얻을 수 있습니다. 적극적으로 활동하면 성공이 따라올 것입니다.',
          '재물운이 풍부하니 사업 확장이나 새로운 수입원 창출을 통해 큰 성공을 거둘 수 있습니다. 특히 안정적인 수익 구조를 만드는 것이 중요합니다.',
          '계획적이고 체계적인 성격으로, 재정 관리를 통해 평생 안정적인 성공을 보장할 수 있습니다. 장기적인 관점에서 목표를 세우고 실천하세요.',
          '재물 관리를 잘하는 능력이 사업 성공에도 큰 도움이 됩니다. 특히 재정적 기반이 중요한 분야에서 두각을 나타낼 것입니다.',
          '안정적인 재정 상태는 모든 분야에서 성공의 기반이 됩니다. 재정적 여유가 있으면 다른 분야에서도 도전할 수 있는 여력이 생깁니다.',
          '당신의 관상은 평생 안정적인 재정적 성공을 보장합니다. 작은 성공에 만족하지 말고 더 큰 목표를 향해 꾸준히 노력하세요.'
        ],
        en: [
          'Physiognomy with good wealth fortune is directly connected to economic success. You can achieve stable success through business or investment, and will particularly excel in real estate or finance fields.',
          'Your high nose shows strong willpower, and with this personality, you can achieve goals without giving up even in difficult situations. You will achieve great success through steady effort.',
          'The combination of glossy forehead, high nose, and large mouth guarantees financial success. You will particularly likely achieve full success from your late 40s.',
          'You have excellent financial sense and realistic thinking, so you can expect great success in business or investment. But don\'t overdo it and approach carefully.',
          'A large mouth means large income, and you can gain more opportunities in fields where you can demonstrate your abilities. If you act proactively, success will follow.',
          'Since your wealth fortune is abundant, you can achieve great success through business expansion or creating new income sources. It\'s particularly important to create a stable profit structure.',
          'With a planned and systematic personality, you can guarantee stable success throughout life through financial management. Set goals from a long-term perspective and practice them.',
          'Your ability to manage wealth well greatly helps in business success. You will particularly excel in fields where financial foundation is important.',
          'Stable finances are the foundation of success in all fields. When you have financial leeway, you gain the capacity to challenge in other fields as well.',
          'Your physiognomy guarantees stable financial success throughout life. Don\'t be satisfied with small successes and keep working steadily toward bigger goals.'
        ],
        ja: [
          '財運が良い観相は経済的成功と直結しています。ビジネスや投資を通じて安定した成功を収めることができ、特に不動産や金融分野で頭角を現すでしょう。',
          '高い鼻は強い意志を表しており、このような性格で困難な状況でも諦めずに目標を達成することができます。着実な努力で大きな成功を収めるでしょう。',
          '額の光沢と高い鼻、大きな口の組み合わせは財政的成功を保証します。特に40代後半から本格的な成功を収める可能性が高いです。',
          '財政センスが優れており現実的な思考で、ビジネスや投資で大きな成功を期待できます。しかし無理しないで慎重にアプローチしてください。',
          '大きな口は大きな収入を意味し、能力を発揮できる分野でより多くの機会を得ることができます。積極的に活動すれば成功が付いてくるでしょう。',
          '財運が豊富なので事業拡張や新しい収入源創出を通じて大きな成功を収めることができます。特に安定した収益構造を作ることが重要です。',
          '計画的で体系的な性格で、財政管理を通じて一生安定した成功を保証できます。長期的な観点から目標を立てて実践してください。',
          '財産管理が上手な能力がビジネス成功にも大きな助けになります。特に財政的基盤が重要な分野で頭角を現すでしょう。',
          '安定した財政状態はすべての分野で成功の基盤になります。財政的に余裕があれば他の分野でも挑戦できる余力が生まれます。',
          'あなたの観相は一生安定した財政的成功を保証します。小さな成功に満足せず、より大きな目標に向かって着実に努力してください。'
        ],
        'zh-CN': [
          '财运好的面相与经济成功直接相关。你可以通过商业或投资取得稳定的成功，特别是在房地产或金融领域会脱颖而出。',
          '你高挺的鼻子显示强大的意志力，凭借这种个性，即使在困难情况下也能不放弃地实现目标。通过稳步努力会取得巨大成功。',
          '有光泽的额头、高鼻子和大嘴巴的组合保证财务成功。特别是在40多岁后期很可能取得全面成功。',
          '你具有出色的财务感和现实的思维，所以可以期待在商业或投资方面取得巨大成功。但不要过度，要谨慎行事。',
          '大嘴巴意味着大收入，在你能够发挥能力的领域可以获得更多机会。如果积极行动，成功会随之而来。',
          '既然你的财运丰富，可以通过业务扩展或创造新的收入来源取得巨大成功。建立稳定的利润结构特别重要。',
          '凭借有计划和有系统的个性，可以通过财务管理保证终生稳定的成功。从长期角度设定目标并实践它们。',
          '你管理财富的能力对商业成功有很大帮助。特别是在财务基础重要的领域会脱颖而出。',
          '稳定的财务状况是所有领域成功的基础。当你有财务余裕时，你也会获得在其他领域挑战的能力。',
          '你的面相保证你终生稳定的财务成功。不要满足于小的成功，继续稳步朝着更大的目标努力。'
        ],
        'zh-TW': [
          '財運好的面相與經濟成功直接相關。你可以通過商業或投資取得穩定的成功，特別是在房地產或金融領域會脫穎而出。',
          '你高挺的鼻子顯示強大的意志力，憑藉這種個性，即使在困難情況下也能不放棄地實現目標。通過穩步努力會取得巨大成功。',
          '有光澤的額頭、高鼻子和大嘴巴的組合保證財務成功。特別是在40多歲後期很可能取得全面成功。',
          '你具有出色的財務感和現實的思維，所以可以期待在商業或投資方面取得巨大成功。但不要過度，要謹慎行事。',
          '大嘴巴意味著大收入，在你能夠發揮能力的領域可以獲得更多機會。如果積極行動，成功會隨之而來。',
          '既然你的財運豐富，可以通過業務擴展或創造新的收入來源取得巨大成功。建立穩定的利潤結構特別重要。',
          '憑藉有計劃和有系統的個性，可以通過財務管理保證終生穩定的成功。從長期角度設定目標並實踐它們。',
          '你管理財富的能力對商業成功有很大幫助。特別是在財務基礎重要的領域會脫穎而出。',
          '穩定的財務狀況是所有領域成功的基礎。當你有財務餘裕時，你也會獲得在其他領域挑戰的能力。',
          '你的面相保證你終生穩定的財務成功。不要滿足於小的成功，繼續穩步朝著更大的目標努力。'
        ],
        vi: [
          'Tướng số với vận tài lộc tốt có liên quan trực tiếp đến thành công kinh tế. Bạn có thể đạt được thành công ổn định thông qua kinh doanh hoặc đầu tư, và sẽ đặc biệt xuất sắc trong các lĩnh vực bất động sản hoặc tài chính.',
          'Mũi cao của bạn cho thấy ý chí mạnh mẽ, và với tính cách này, bạn có thể đạt được mục tiêu mà không từ bỏ ngay cả trong tình huống khó khăn. Bạn sẽ đạt được thành công lớn thông qua nỗ lực ổn định.',
          'Sự kết hợp của trán bóng, mũi cao và miệng rộng đảm bảo thành công tài chính. Bạn sẽ đặc biệt có khả năng đạt được thành công đầy đủ từ cuối những năm 40.',
          'Bạn có cảm nhận tài chính xuất sắc và suy nghĩ thực tế, vì vậy bạn có thể mong đợi thành công lớn trong kinh doanh hoặc đầu tư. Nhưng đừng làm quá mức và tiếp cận một cách cẩn thận.',
          'Miệng rộng có nghĩa là thu nhập lớn, và bạn có thể đạt được nhiều cơ hội hơn trong các lĩnh vực mà bạn có thể thể hiện khả năng của mình. Nếu bạn hành động tích cực, thành công sẽ theo sau.',
          'Vì vận tài lộc của bạn dồi dào, bạn có thể đạt được thành công lớn thông qua mở rộng kinh doanh hoặc tạo ra các nguồn thu nhập mới. Điều quan trọng đặc biệt là tạo ra cấu trúc lợi nhuận ổn định.',
          'Với tính cách có kế hoạch và hệ thống, bạn có thể đảm bảo thành công ổn định suốt đời thông qua quản lý tài chính. Đặt mục tiêu từ quan điểm dài hạn và thực hành chúng.',
          'Khả năng quản lý của cải tốt của bạn rất giúp ích cho thành công kinh doanh. Bạn sẽ đặc biệt xuất sắc trong các lĩnh vực nơi nền tảng tài chính quan trọng.',
          'Tài chính ổn định là nền tảng của thành công trong mọi lĩnh vực. Khi bạn có dư dả về tài chính, bạn cũng đạt được khả năng thách thức trong các lĩnh vực khác.',
          'Tướng số của bạn đảm bảo thành công tài chính ổn định suốt đời. Đừng hài lòng với những thành công nhỏ và tiếp tục làm việc ổn định hướng tới những mục tiêu lớn hơn.'
        ],
        id: [
          'Fisiognomi dengan nasib kekayaan yang baik secara langsung terhubung dengan kesuksesan ekonomi. Anda dapat mencapai kesuksesan stabil melalui bisnis atau investasi, dan akan unggul khususnya di bidang real estat atau keuangan.',
          'Hidung tinggi Anda menunjukkan tekad yang kuat, dan dengan kepribadian ini, Anda dapat mencapai tujuan tanpa menyerah bahkan dalam situasi sulit. Anda akan mencapai kesuksesan besar melalui upaya yang mantap.',
          'Kombinasi dahi berkilau, hidung tinggi, dan mulut besar menjamin kesuksesan finansial. Anda akan sangat mungkin mencapai kesuksesan penuh dari akhir 40-an.',
          'Anda memiliki indra keuangan yang sangat baik dan pemikiran realistis, jadi Anda dapat mengharapkan kesuksesan besar dalam bisnis atau investasi. Tapi jangan berlebihan dan pendekatan dengan hati-hati.',
          'Mulut besar berarti pendapatan besar, dan Anda dapat memperoleh lebih banyak peluang di bidang di mana Anda dapat menunjukkan kemampuan Anda. Jika Anda bertindak secara proaktif, kesuksesan akan mengikuti.',
          'Karena nasib kekayaan Anda melimpah, Anda dapat mencapai kesuksesan besar melalui ekspansi bisnis atau menciptakan sumber pendapatan baru. Sangat penting untuk menciptakan struktur keuntungan yang stabil.',
          'Dengan kepribadian yang terencana dan sistematis, Anda dapat menjamin kesuksesan stabil sepanjang hidup melalui manajemen keuangan. Tetapkan tujuan dari perspektif jangka panjang dan praktikkan mereka.',
          'Kemampuan Anda untuk mengelola kekayaan dengan baik sangat membantu dalam kesuksesan bisnis. Anda akan unggul khususnya di bidang di mana fondasi keuangan penting.',
          'Keuangan yang stabil adalah fondasi kesuksesan di semua bidang. Ketika Anda memiliki kelonggaran keuangan, Anda juga mendapatkan kapasitas untuk menantang di bidang lain juga.',
          'Fisiognomi Anda menjamin kesuksesan finansial yang stabil sepanjang hidup. Jangan puas dengan kesuksesan kecil dan terus bekerja dengan mantap menuju tujuan yang lebih besar.'
        ]
      }
    }
  },
  {
    id: 3,
    title: {
      ko: '소길상 - 인연운 좋음',
      en: 'Good Fortune - Fortunate in Relationships',
      ja: '小吉相 - 縁運良好',
      'zh-CN': '小吉相 - 人缘好',
      'zh-TW': '小吉相 - 人緣好',
      vi: 'Tiểu Cát Tướng - Vận Nhân Duyên Tốt',
      id: 'Nasib Kecil - Hubungan Baik'
    },
    description: {
      ko: [
        '당신의 얼굴은 인연운이 좋은 상입니다! 눈이 밝고 입꼬리가 올라가 있으며, 전체적으로 부드러운 인상입니다. 이런 관상을 가진 분은 사람들과의 관계에서 행운을 얻으며, 특히 연애와 결혼에서 좋은 결과를 얻을 수 있습니다.',
        '소길상의 얼굴은 밝은 눈과 올라간 입꼬리가 특징입니다. 이런 관상은 좋은 인연운을 의미하며, 사람들과의 관계에서 행운을 얻을 수 있습니다.',
        '당신의 얼굴은 따뜻하고 부드러운 인상을 줍니다. 밝은 눈과 미소 짓는 입꼬리는 좋은 대인관계와 인기있는 성격을 나타냅니다.',
        '이마가 적당히 넓고 눈이 밝으며, 입꼬리가 올라간 얼굴은 좋은 인연운의 상입니다. 특히 연애와 결혼에서 행운을 얻을 수 있습니다.',
        '소길상의 관상은 사람들과의 관계에서 행운을 가져다 줍니다. 밝은 눈과 부드러운 인상은 다른 사람들에게 긍정적인 영향을 미칩니다.',
        '당신의 얼굴은 인연을 끌어당기는 매력이 있습니다. 특히 눈의 밝기와 입꼬리의 미소는 사람들에게 좋은 첫인상을 줍니다.',
        '소길상의 얼굴은 따뜻한 성격과 좋은 대인관계를 나타냅니다. 이런 관상을 가진 분은 주변 사람들에게 사랑받고 존경받습니다.',
        '밝은 눈과 올라간 입꼬리는 긍정적인 성격과 좋은 인연운을 의미합니다. 특히 연애와 결혼에서 행운을 얻을 수 있는 관상입니다.',
        '당신의 얼굴은 사람들에게 안정감과 따뜻함을 줍니다. 이런 관상은 좋은 대인관계와 인기있는 성격을 나타내며, 특히 연애에서 행운을 얻습니다.',
        '소길상의 얼굴은 좋은 인연운을 의미합니다. 밝은 눈과 부드러운 인상은 사람들과의 관계에서 행운을 가져다 주며, 특히 결혼과 연애에서 좋은 결과를 얻을 수 있습니다.'
      ],
      en: [
        'Your face shows good relationship fortune! With bright eyes, upturned mouth corners, and an overall gentle impression, you have luck in relationships, especially in love and marriage.',
        'A face with bright eyes and upturned mouth corners indicates good relationship fortune. You will have luck in relationships, especially in love and marriage.',
        'Your face has a warm and gentle impression. Bright eyes and a smiling mouth corner indicate good interpersonal relationships and a popular personality.',
        'A face with a moderately wide forehead, bright eyes, and upturned mouth corners is a sign of good relationship fortune. You will especially have luck in love and marriage.',
        'This physiognomy brings luck in relationships with people. Bright eyes and a gentle impression have a positive impact on others.',
        'Your face has the charm to attract relationships. Especially the brightness of the eyes and the smile of the mouth corner give a good first impression to people.',
        'A face with good relationship fortune indicates a warm personality and good interpersonal relationships. People with this face are loved and respected by those around them.',
        'Bright eyes and upturned mouth corners mean a positive personality and good relationship fortune. This is a face that can have luck especially in love and marriage.',
        'Your face gives people a sense of stability and warmth. This physiognomy indicates good interpersonal relationships and a popular personality, and you will especially have luck in love.',
        'A face with good relationship fortune means good interpersonal luck. Bright eyes and a gentle impression bring luck in relationships with people, and you can especially get good results in marriage and love.'
      ],
      ja: [
        'あなたの顔は縁運が良い相です！明るい目、上がった口角、全体的に優しい印象を持つあなたは、人との関係で幸運を得ます。',
        '明るい目と上がった口角の顔は縁運が良い相です。恋愛や結婚で特に幸運を得ることができます。',
        'あなたの顔は温かく優しい印象を与えます。明るい目と微笑む口角は良い対人関係と人気のある性格を示しています。',
        '適度に広い額、明るい目、上がった口角の顔は縁運が良い相です。特に恋愛や結婚で幸運を得ることができます。',
        'この観相は人との関係で幸運をもたらします。明るい目と優しい印象は他の人に良い影響を与えます。',
        'あなたの顔は縁を引き寄せる魅力を持っています。特に目の明るさと口角の微笑みは人に良い第一印象を与えます。',
        '縁運が良い顔は温かい性格と良い対人関係を示しています。この顔を持つ人は周りの人から愛され、尊敬されます。',
        '明るい目と上がった口角は前向きな性格と良い縁運を意味します。これは特に恋愛や結婚で幸運を得ることができる観相です。',
        'あなたの顔は人に安定感と温かさを与えます。この観相は良い対人関係と人気のある性格を示し、特に恋愛で幸運を得ることができます。',
        '縁運が良い顔は良い対人運を意味します。明るい目と優しい印象は人との関係で幸運をもたらし、特に結婚や恋愛で良い結果を得ることができます。'
      ],
      'zh-CN': [
        '你的面相人缘很好！眼睛明亮、嘴角上扬、整体印象温和，在人际关系中会有好运。',
        '明亮眼睛和上扬嘴角的面相人缘很好。你将在人际关系中获得好运，特别是在恋爱和婚姻中。',
        '你的脸给人一种温暖和温和的印象。明亮的眼睛和微笑的嘴角表示良好的人际关系和受欢迎的性格。',
        '前额适度宽、眼睛明亮、嘴角上扬的脸是人缘好的相。你将特别是在恋爱和婚姻中获得好运。',
        '这个面相在人际关系中带来好运。明亮的眼睛和温和的印象对他人有积极影响。',
        '你的脸有吸引人缘的魅力。特别是眼睛的明亮和嘴角的微笑给人们留下了良好的第一印象。',
        '人缘好的脸表示温暖的个性和良好的人际关系。拥有这种面相的人会受到周围人的爱戴和尊重。',
        '明亮的眼睛和上扬的嘴角意味着积极的个性和良好的人缘。这是一个在恋爱和婚姻中特别能获得好运的面相。',
        '你的脸给人们带来稳定感和温暖感。这个面相表示良好的人际关系和受欢迎的性格，你将特别是在恋爱中获得好运。',
        '人缘好的脸意味着良好的人际运势。明亮的眼睛和温和的印象在人际关系中带来好运，你可以特别是在婚姻和恋爱中获得良好的结果。'
      ],
      'zh-TW': [
        '你的面相人緣很好！眼睛明亮、嘴角上揚、整體印象溫和，在人際關係中會有好運。',
        '明亮眼睛和上揚嘴角的面相人緣很好。你將在人際關係中獲得好運，特別是在戀愛和婚姻中。',
        '你的臉給人一種溫暖和溫和的印象。明亮的眼睛和微笑的嘴角表示良好的人際關係和受歡迎的性格。',
        '前額適度寬、眼睛明亮、嘴角上揚的臉是人緣好的相。你將特別是在戀愛和婚姻中獲得好運。',
        '這個面相在人際關係中帶來好運。明亮的眼睛和溫和的印象對他人有積極影響。',
        '你的臉有吸引人緣的魅力。特別是眼睛的明亮和嘴角的微笑給人們留下了良好的第一印象。',
        '人緣好的臉表示溫暖的個性和良好的人際關係。擁有這種面相的人會受到周圍人的愛戴和尊重。',
        '明亮的眼睛和上揚的嘴角意味著積極的個性和良好的人緣。這是一個在戀愛和婚姻中特別能獲得好運的面相。',
        '你的臉給人們帶來穩定感和溫暖感。這個面相表示良好的人際關係和受歡迎的性格，你將特別是在戀愛中獲得好運。',
        '人緣好的臉意味著良好的人際運勢。明亮的眼睛和溫和的印象在人際關係中帶來好運，你可以特別是在婚姻和戀愛中獲得良好的結果。'
      ],
      vi: [
        'Khuôn mặt của bạn có vận nhân duyên tốt! Mắt sáng, khóe miệng cong lên, ấn tượng tổng thể dịu dàng, bạn có may mắn trong các mối quan hệ.',
        'Khuôn mặt có mắt sáng và khóe miệng cong lên là tướng có vận nhân duyên tốt. Bạn sẽ có may mắn trong các mối quan hệ, đặc biệt là trong tình yêu và hôn nhân.',
        'Khuôn mặt của bạn tạo ấn tượng ấm áp và dịu dàng. Mắt sáng và khóe miệng cười cho thấy mối quan hệ tốt và tính cách được yêu mến.',
        'Khuôn mặt có trán rộng vừa phải, mắt sáng, khóe miệng cong lên là tướng có vận nhân duyên tốt. Bạn sẽ đặc biệt có may mắn trong tình yêu và hôn nhân.',
        'Tướng số này mang lại may mắn trong các mối quan hệ với mọi người. Mắt sáng và ấn tượng dịu dàng có tác động tích cực đến người khác.',
        'Khuôn mặt của bạn có sức hút để thu hút các mối quan hệ. Đặc biệt là độ sáng của mắt và nụ cười của khóe miệng tạo ấn tượng đầu tiên tốt cho mọi người.',
        'Khuôn mặt có vận nhân duyên tốt cho thấy tính cách ấm áp và mối quan hệ tốt. Người có khuôn mặt này được những người xung quanh yêu mến và tôn trọng.',
        'Mắt sáng và khóe miệng cong lên có nghĩa là tính cách tích cực và vận nhân duyên tốt. Đây là khuôn mặt có thể có may mắn đặc biệt trong tình yêu và hôn nhân.',
        'Khuôn mặt của bạn mang lại cảm giác ổn định và ấm áp cho mọi người. Tướng số này cho thấy mối quan hệ tốt và tính cách được yêu mến, và bạn sẽ đặc biệt có may mắn trong tình yêu.',
        'Khuôn mặt có vận nhân duyên tốt có nghĩa là vận may trong các mối quan hệ tốt. Mắt sáng và ấn tượng dịu dàng mang lại may mắn trong các mối quan hệ với mọi người, và bạn có thể đặc biệt đạt được kết quả tốt trong hôn nhân và tình yêu.'
      ],
      id: [
        'Wajah Anda menunjukkan keberuntungan hubungan yang baik! Dengan mata cerah, sudut mulut terangkat, dan kesan keseluruhan yang lembut, Anda beruntung dalam hubungan.',
        'Wajah dengan mata cerah dan sudut mulut terangkat adalah tanda keberuntungan hubungan yang baik. Anda akan beruntung dalam hubungan, terutama dalam cinta dan pernikahan.',
        'Wajah Anda memberikan kesan hangat dan lembut. Mata cerah dan sudut mulut yang tersenyum menunjukkan hubungan interpersonal yang baik dan kepribadian yang populer.',
        'Wajah dengan dahi yang cukup lebar, mata cerah, dan sudut mulut terangkat adalah tanda keberuntungan hubungan yang baik. Anda akan terutama beruntung dalam cinta dan pernikahan.',
        'Fisiognomi ini membawa keberuntungan dalam hubungan dengan orang lain. Mata cerah dan kesan lembut memiliki dampak positif pada orang lain.',
        'Wajah Anda memiliki daya tarik untuk menarik hubungan. Terutama kecerahan mata dan senyum sudut mulut memberikan kesan pertama yang baik kepada orang.',
        'Wajah dengan keberuntungan hubungan yang baik menunjukkan kepribadian hangat dan hubungan interpersonal yang baik. Orang dengan wajah ini dicintai dan dihormati oleh orang-orang di sekitar mereka.',
        'Mata cerah dan sudut mulut terangkat berarti kepribadian positif dan keberuntungan hubungan yang baik. Ini adalah wajah yang dapat memiliki keberuntungan terutama dalam cinta dan pernikahan.',
        'Wajah Anda memberi orang rasa stabilitas dan kehangatan. Fisiognomi ini menunjukkan hubungan interpersonal yang baik dan kepribadian populer, dan Anda akan terutama beruntung dalam cinta.',
        'Wajah dengan keberuntungan hubungan yang baik berarti keberuntungan interpersonal yang baik. Mata cerah dan kesan lembut membawa keberuntungan dalam hubungan dengan orang lain, dan Anda dapat terutama mendapatkan hasil yang baik dalam pernikahan dan cinta.'
      ]
    },
    emoji: '💕',
    scoreRange: [70, 79],
    strengths: {
      ko: ['뛰어난 소통 능력', '따뜻한 성격', '사람을 끌어당기는 매력', '충성심'],
      en: ['Excellent Communication', 'Warm Personality', 'Magnetic Appeal', 'Loyalty'],
      ja: ['優れたコミュニケーション能力', '温かい性格', '人を引きつける魅力', '忠誠心'],
      'zh-CN': ['卓越沟通能力', '温暖性格', '吸引人的魅力', '忠诚'],
      'zh-TW': ['卓越溝通能力', '溫暖性格', '吸引人的魅力', '忠誠'],
      vi: ['Khả năng giao tiếp xuất sắc', 'Tính cách ấm áp', 'Sức hút thu hút người khác', 'Lòng trung thành'],
      id: ['Kemampuan Komunikasi Luar Biasa', 'Kepribadian Hangat', 'Daya Tarik Magnetis', 'Kesetiaan']
    },
    recommendations: {
      ko: ['인맥 관리', '연애 활동', '결혼 계획', '사회 활동 참여'],
      en: ['Network Management', 'Dating Activities', 'Marriage Planning', 'Social Activities'],
      ja: ['人脈管理', '恋愛活動', '結婚計画', '社会活動への参加'],
      'zh-CN': ['人脉管理', '恋爱活动', '结婚计划', '参与社会活动'],
      'zh-TW': ['人脈管理', '戀愛活動', '結婚計劃', '參與社會活動'],
      vi: ['Quản lý mạng lưới', 'Hoạt động hẹn hò', 'Kế hoạch kết hôn', 'Tham gia hoạt động xã hội'],
      id: ['Manajemen Jaringan', 'Aktivitas Kencan', 'Perencanaan Pernikahan', 'Aktivitas Sosial']
    },
    personality: {
      ko: [
        '밝은 눈과 올라간 입꼬리는 밝고 긍정적인 성격을 나타냅니다.',
        '사람들과 대화하는 것을 좋아하며, 타인에게 친절하고 관대합니다.',
        '분위기를 밝게 만들고 다른 사람들을 행복하게 만드는 능력이 있습니다.',
        '연애 관계에서 충성스럽고 배려심이 깊어 상대방을 먼저 생각합니다.',
        '인간관계에서 협력적이고 상대방의 의견을 존중하는 성격입니다.',
        '커뮤니케이션 능력이 뛰어나고 감정 표현이 풍부합니다.',
        '새로운 사람을 만나는 것을 두려워하지 않고 적극적으로 친분을 쌓습니다.',
        '타인에 대한 공감 능력이 뛰어나며, 갈등 상황에서도 중재할 수 있습니다.',
        '긍정적인 에너지로 주변 사람들에게 좋은 영향을 미칩니다.',
        '인연을 소중히 여기며 오래가는 관계를 만들어가는 성격입니다.'
      ],
      en: [
        'Bright eyes and upturned mouth corners show a bright and positive personality.',
        'Enjoys talking with people and is kind and generous to others.',
        'Has ability to brighten atmosphere and make others happy.',
        'Loyal and caring in relationships, putting partner first.',
        'Cooperative in relationships, respecting others\' opinions.',
        'Excellent communication skills and rich emotional expression.',
        'Not afraid to meet new people, actively builds relationships.',
        'High empathy for others, can mediate in conflicts.',
        'Positive energy positively influences those around.',
        'Values connections and has personality that builds lasting relationships.'
      ],
      ja: [
        '明るい目と上がった口角は明るくポジティブな性格を示しています。',
        '人との会話を好み、他人に親切で寛大です。',
        '雰囲気を明るくし、他の人々を幸せにする能力があります。',
        '恋愛関係で忠実で思いやり深く、相手を優先します。',
        '人間関係で協力的で、相手の意見を尊重する性格です。',
        'コミュニケーション能力が優れており、感情表現が豊富です。',
        '新しい人と出会うことを恐れず、積極的に親交を築きます。',
        '他人への共感能力が優れており、対立状況でも調停できます。',
        'ポジティブなエネルギーで周囲の人々に良い影響を与えます。',
        '縁を大切にし、長続きする関係を作る性格です。'
      ],
      'zh-CN': [
        '明亮的眼睛和上扬的嘴角显示出开朗和积极的个性。',
        '喜欢与人交谈，对他人友善和慷慨。',
        '有能力使氛围明亮，让别人快乐。',
        '在关系中心忠诚和体贴，把伴侣放在第一位。',
        '在人际关系中合作，尊重他人的意见。',
        '出色的沟通能力和丰富的情感表达。',
        '不害怕认识新的人，积极建立友谊。',
        '对他人的共情能力出色，可以在冲突中调解。',
        '积极的能量对周围的人产生积极影响。',
        '重视缘分，具有建立持久关系的个性。'
      ],
      'zh-TW': [
        '明亮的眼睛和上揚的嘴角顯示出開朗和積極的個性。',
        '喜歡與人交談，對他人友善和慷慨。',
        '有能力使氛圍明亮，讓別人快樂。',
        '在關係中忠誠和體貼，把伴侶放在第一位。',
        '在人際關係中合作，尊重他人的意見。',
        '出色的溝通能力和豐富的情感表達。',
        '不害怕認識新的人，積極建立友誼。',
        '對他人的共情能力出色，可以在衝突中調解。',
        '積極的能量對周圍的人產生積極影響。',
        '重視緣分，具有建立持久關係的個性。'
      ],
      vi: [
        'Mắt sáng và khóe miệng cong lên cho thấy tính cách tươi sáng và tích cực.',
        'Thích nói chuyện với mọi người và tốt bụng, rộng lượng với người khác.',
        'Có khả năng làm sáng không khí và làm người khác hạnh phúc.',
        'Trung thành và chu đáo trong các mối quan hệ, đặt đối tác lên hàng đầu.',
        'Hợp tác trong các mối quan hệ, tôn trọng ý kiến của người khác.',
        'Kỹ năng giao tiếp xuất sắc và biểu cảm cảm xúc phong phú.',
        'Không sợ gặp người mới, tích cực xây dựng tình bạn.',
        'Khả năng đồng cảm cao với người khác, có thể hòa giải trong xung đột.',
        'Năng lượng tích cực ảnh hưởng tích cực đến những người xung quanh.',
        'Trân trọng kết nối và có tính cách xây dựng các mối quan hệ lâu dài.'
      ],
      id: [
        'Mata cerah dan sudut mulut terangkat menunjukkan kepribadian yang cerah dan positif.',
        'Menikmati berbicara dengan orang-orang dan baik hati serta murah hati kepada orang lain.',
        'Memiliki kemampuan untuk mencerahkan suasana dan membuat orang lain bahagia.',
        'Setia dan peduli dalam hubungan, mengutamakan pasangan.',
        'Kooperatif dalam hubungan, menghormati pendapat orang lain.',
        'Kemampuan komunikasi yang sangat baik dan ekspresi emosional yang kaya.',
        'Tidak takut bertemu orang baru, secara aktif membangun hubungan.',
        'Empati tinggi terhadap orang lain, dapat menjadi penengah dalam konflik.',
        'Energi positif mempengaruhi positif terhadap mereka yang berada di sekitar.',
        'Menghargai koneksi dan memiliki kepribadian yang membangun hubungan yang langgeng.'
      ]
    },
    advice: {
      ko: [
        '당신의 따뜻한 마음과 좋은 인연운을 믿고 사람들과의 관계를 소중히 여기세요.',
        '밝은 눈과 올라간 입꼬리는 좋은 인연을 끌어들이는 매력입니다. 적극적으로 사람들과 만나 친분을 쌓으세요.',
        '연애와 결혼에서 행운이 따르는 관상입니다. 진심을 담은 관계를 만들어가면 좋은 결과를 얻을 것입니다.',
        '사람들에게 친절하고 따뜻하게 대하는 당신의 성격이 큰 자산입니다. 이런 성격을 계속 유지하세요.',
        '인간관계에서 갈등이 생겨도 상대방을 이해하고 포용하는 마음으로 해결하세요. 당신의 포용력이 관계를 개선할 것입니다.',
        '새로운 만남을 두려워하지 마세요. 당신의 밝은 에너지가 좋은 인연을 만들어갑니다.',
        '연애 관계에서도 신뢰와 소통이 중요합니다. 상대방과 충분히 대화하며 서로를 이해하세요.',
        '결혼을 고려한다면 서로의 가치관과 미래 계획을 나누는 것이 중요합니다. 진지한 대화를 통해 관계를 깊게 만들어가세요.',
        '인맥 관리는 당신의 강점입니다. 다양한 분야의 사람들과 교류하며 네트워크를 넓혀가세요.',
        '긍정적인 에너지를 유지하세요. 당신의 밝은 모습이 주변 사람들에게 좋은 영향을 미치고, 그것이 다시 좋은 인연으로 돌아올 것입니다.'
      ],
      en: [
        'Trust your warm heart and good relationship fortune, and cherish your relationships with people.',
        'Your bright eyes and upturned mouth corners are charms that attract good relationships. Actively meet people and build friendships.',
        'Your physiognomy brings luck in love and marriage. Building genuine relationships will yield good results.',
        'Your kind and warm personality towards people is a great asset. Continue to maintain this personality.',
        'When conflicts arise in relationships, resolve them with understanding and a forgiving heart. Your tolerance will improve relationships.',
        'Don\'t be afraid of new encounters. Your bright energy creates good relationships.',
        'Trust and communication are important in romantic relationships as well. Talk enough with your partner and understand each other.',
        'If considering marriage, sharing values and future plans is important. Deepen relationships through serious conversations.',
        'Network management is your strength. Interact with people from various fields and expand your network.',
        'Maintain positive energy. Your bright appearance positively influences those around you, and it will return as good relationships.'
      ],
      ja: [
        'あなたの温かい心と良い縁運を信じて、人との関係を大切にしてください。',
        '明るい目と上がった口角は良い縁を引き寄せる魅力です。積極的に人と会って親交を築いてください。',
        '恋愛と結婚で幸運が伴う観相です。真心を込めた関係を作っていけば良い結果が得られるでしょう。',
        '人々に親切で温かく接するあなたの性格は大きな資産です。この性格を続けて維持してください。',
        '人間関係で対立が生まれても相手を理解し包容する心で解決してください。あなたの包容力が関係を改善するでしょう。',
        '新しい出会いを恐れないでください。あなたの明るいエネルギーが良い縁を作ります。',
        '恋愛関係でも信頼とコミュニケーションが重要です。相手と十分に話し合い、お互いを理解してください。',
        '結婚を考慮するなら、お互いの価値観と将来計画を共有することが重要です。真剣な対話を通じて関係を深めてください。',
        '人脈管理はあなたの強みです。様々な分野の人々と交流し、ネットワークを広げてください。',
        'ポジティブなエネルギーを維持してください。あなたの明るい姿が周囲の人々に良い影響を与え、それが再び良い縁として戻ってくるでしょう。'
      ],
      'zh-CN': [
        '相信你温暖的心和好人缘，珍惜与他人的关系。',
        '你明亮的眼睛和上扬的嘴角是吸引良好关系的魅力。积极与人见面，建立友谊。',
        '你的面相在恋爱和婚姻中会带来好运。建立真诚的关系会获得好结果。',
        '你对人们友善和温暖的性格是一笔巨大的资产。继续维持这种性格。',
        '即使人际关系中出现冲突，也要用理解和宽容的心来解决。你的包容力会改善关系。',
        '不要害怕新的相遇。你积极的能量会创造良好的关系。',
        '在恋爱关系中信任和沟通也很重要。与伴侣充分对话，互相理解。',
        '如果考虑结婚，分享彼此的价值观和未来计划很重要。通过认真的对话加深关系。',
        '人脉管理是你的优势。与不同领域的人交流，扩大你的网络。',
        '保持积极的能量。你积极的外表对你周围的人产生积极影响，它会作为良好的关系回报。'
      ],
      'zh-TW': [
        '相信你溫暖的心和好人緣，珍惜與他人的關係。',
        '你明亮的眼睛和上揚的嘴角是吸引良好關係的魅力。積極與人見面，建立友誼。',
        '你的面相在戀愛和婚姻中會帶來好運。建立真誠的關係會獲得好結果。',
        '你對人們友善和溫暖的性格是一筆巨大的資產。繼續維持這種性格。',
        '即使人際關係中出現衝突，也要用理解和寬容的心來解決。你的包容力會改善關係。',
        '不要害怕新的相遇。你積極的能量會創造良好的關係。',
        '在戀愛關係中信任和溝通也很重要。與伴侶充分對話，互相理解。',
        '如果考慮結婚，分享彼此的價值觀和未來計劃很重要。通過認真的對話加深關係。',
        '人脈管理是你的優勢。與不同領域的人交流，擴大你的網絡。',
        '保持積極的能量。你積極的外表對你周圍的人產生積極影響，它會作為良好的關係回報。'
      ],
      vi: [
        'Hãy tin tưởng vào trái tim ấm áp và vận nhân duyên tốt của bạn, trân trọng các mối quan hệ với mọi người.',
        'Mắt sáng và khóe miệng cong lên của bạn là sức hút thu hút các mối quan hệ tốt. Hãy tích cực gặp gỡ mọi người và xây dựng tình bạn.',
        'Tướng số của bạn mang lại may mắn trong tình yêu và hôn nhân. Xây dựng các mối quan hệ chân thành sẽ mang lại kết quả tốt.',
        'Tính cách tốt bụng và ấm áp của bạn đối với mọi người là một tài sản lớn. Hãy tiếp tục duy trì tính cách này.',
        'Khi xung đột phát sinh trong các mối quan hệ, hãy giải quyết bằng sự hiểu biết và trái tim khoan dung. Khả năng bao dung của bạn sẽ cải thiện các mối quan hệ.',
        'Đừng sợ những cuộc gặp gỡ mới. Năng lượng tích cực của bạn tạo ra các mối quan hệ tốt.',
        'Trong các mối quan hệ lãng mạn, sự tin tưởng và giao tiếp cũng rất quan trọng. Hãy nói chuyện đầy đủ với đối tác và hiểu nhau.',
        'Nếu đang cân nhắc kết hôn, việc chia sẻ giá trị và kế hoạch tương lai rất quan trọng. Làm sâu sắc các mối quan hệ thông qua các cuộc trò chuyện nghiêm túc.',
        'Quản lý mạng lưới là điểm mạnh của bạn. Tương tác với mọi người từ các lĩnh vực khác nhau và mở rộng mạng lưới của bạn.',
        'Duy trì năng lượng tích cực. Vẻ ngoài tích cực của bạn ảnh hưởng tích cực đến những người xung quanh, và nó sẽ trở lại như các mối quan hệ tốt.'
      ],
      id: [
        'Percayai hati hangat dan keberuntungan hubungan yang baik, dan hargai hubungan Anda dengan orang lain.',
        'Mata cerah dan sudut mulut terangkat Anda adalah daya tarik yang menarik hubungan baik. Secara aktif bertemu orang dan membangun persahabatan.',
        'Fisiognomi Anda membawa keberuntungan dalam cinta dan pernikahan. Membangun hubungan yang tulus akan menghasilkan hasil yang baik.',
        'Kepribadian baik dan hangat Anda terhadap orang adalah aset besar. Terus pertahankan kepribadian ini.',
        'Ketika konflik muncul dalam hubungan, selesaikan dengan pengertian dan hati yang memaafkan. Toleransi Anda akan meningkatkan hubungan.',
        'Jangan takut pertemuan baru. Energi cerah Anda menciptakan hubungan yang baik.',
        'Dalam hubungan romantis, kepercayaan dan komunikasi juga penting. Bicara cukup dengan pasangan dan pahami satu sama lain.',
        'Jika mempertimbangkan pernikahan, berbagi nilai dan rencana masa depan penting. Perdalam hubungan melalui percakapan serius.',
        'Manajemen jaringan adalah kekuatan Anda. Berinteraksi dengan orang dari berbagai bidang dan perluas jaringan Anda.',
        'Pertahankan energi positif. Penampilan cerah Anda mempengaruhi positif mereka di sekitar Anda, dan itu akan kembali sebagai hubungan yang baik.'
      ]
    },
    fortune: {
      wealth: {
        ko: [
          '인연운이 좋은 관상은 사람과의 관계를 통한 경제적 기회를 의미합니다. 좋은 인맥이 재물로 이어질 가능성이 높습니다.',
          '밝고 긍정적인 성격이 사업 상대방의 신뢰를 얻어 좋은 거래로 이어질 수 있습니다.',
          '사람들과의 원만한 관계가 협력 사업이나 공동 투자 기회를 만들어낼 수 있습니다.',
          '인간관계가 넓으면 새로운 정보나 기회를 더 많이 얻을 수 있어 재물운이 자연스럽게 좋아집니다.',
          '연애나 결혼을 통해 경제적으로 안정적인 파트너를 만날 가능성이 있습니다.',
          '다양한 사람들과의 교류를 통해 사업 기회나 새로운 수입원을 얻을 수 있습니다.',
          '협력적인 성격으로 동업이나 파트너십에서 좋은 결과를 얻을 수 있습니다.',
          '인맥 관리를 잘하면 필요할 때 도움을 받을 수 있어 경제적으로 유리해집니다.',
          '사람들의 도움으로 사업이나 투자에서 성공할 가능성이 높습니다.',
          '좋은 인연을 소중히 여기면 그 인연이 나중에 재물로 돌아올 것입니다.'
        ],
        en: [
          'Physiognomy with good relationship fortune means economic opportunities through relationships. Good connections likely lead to wealth.',
          'Bright and positive personality gains trust of business partners, leading to good deals.',
          'Harmonious relationships can create opportunities for joint ventures or co-investments.',
          'Wider relationships allow gaining more new information and opportunities, naturally improving wealth fortune.',
          'Possibility of meeting economically stable partner through love or marriage.',
          'Can gain business opportunities or new income sources through interaction with diverse people.',
          'Cooperative personality yields good results in partnerships or joint ventures.',
          'Good network management allows getting help when needed, economically advantageous.',
          'High possibility of success in business or investments with people\'s help.',
          'Valuing good relationships will later return as wealth.'
        ],
        ja: [
          '縁運が良い観相は人との関係を通じた経済的機会を意味します。良い人脈が財産につながる可能性が高いです。',
          '明るくポジティブな性格がビジネス相手の信頼を得て良い取引につながることができます。',
          '人々との円満な関係が協力事業や共同投資の機会を作り出すことができます。',
          '人間関係が広ければ新しい情報や機会をより多く得ることができ、財運が自然に良くなります。',
          '恋愛や結婚を通じて経済的に安定したパートナーに会う可能性があります。',
          '様々な人々との交流を通じてビジネス機会や新しい収入源を得ることができます。',
          '協力的な性格で共同事業やパートナーシップで良い結果を得ることができます。',
          '人脈管理が上手であれば必要な時に助けを受けることができ、経済的に有利です。',
          '人々の助けでビジネスや投資で成功する可能性が高いです。',
          '良い縁を大切にすれば、その縁が後で財産として返ってくるでしょう。'
        ],
        'zh-CN': [
          '人缘好的面相意味着通过关系获得经济机会。良好的人脉很可能带来财富。',
          '开朗和积极的个性获得生意伙伴的信任，带来好的交易。',
          '与他人和睦的关系可以创造合作业务或共同投资的机会。',
          '人际关系广泛可以获取更多新信息和机会，财运自然会变好。',
          '通过恋爱或婚姻可能遇到经济稳定的伴侣。',
          '通过与不同人的交流可以获得商业机会或新的收入来源。',
          '合作的个性在合资企业或伙伴关系中可以获得好结果。',
          '良好的人脉管理可以在需要时获得帮助，在经济上有利。',
          '在人们帮助下在商业或投资中成功的可能性很高。',
          '珍视良好的关系，这种关系以后会以财富回报。'
        ],
        'zh-TW': [
          '人緣好的面相意味著通過關係獲得經濟機會。良好的人脈很可能帶來財富。',
          '開朗和積極的個性獲得生意夥伴的信任，帶來好的交易。',
          '與他人和睦的關係可以創造合作業務或共同投資的機會。',
          '人際關係廣泛可以獲取更多新信息和機會，財運自然會變好。',
          '通過戀愛或婚姻可能遇到經濟穩定的伴侶。',
          '通過與不同人的交流可以獲得商業機會或新的收入來源。',
          '合作的個性在合資企業或夥伴關係中可以獲得好結果。',
          '良好的人脈管理可以在需要時獲得幫助，在經濟上有利。',
          '在人們幫助下在商業或投資中成功的可能性很高。',
          '珍視良好的關係，這種關係以後會以財富回報。'
        ],
        vi: [
          'Tướng số với vận nhân duyên tốt có nghĩa là cơ hội kinh tế thông qua các mối quan hệ. Các kết nối tốt có khả năng dẫn đến sự giàu có.',
          'Tính cách tươi sáng và tích cực giành được sự tin tưởng của đối tác kinh doanh, dẫn đến các giao dịch tốt.',
          'Các mối quan hệ hài hòa có thể tạo ra cơ hội cho các liên doanh hoặc đầu tư chung.',
          'Các mối quan hệ rộng rãi cho phép có được nhiều thông tin và cơ hội mới hơn, tự nhiên cải thiện vận tài lộc.',
          'Khả năng gặp đối tác ổn định về kinh tế thông qua tình yêu hoặc hôn nhân.',
          'Có thể đạt được cơ hội kinh doanh hoặc nguồn thu nhập mới thông qua tương tác với nhiều người khác nhau.',
          'Tính cách hợp tác mang lại kết quả tốt trong các quan hệ đối tác hoặc liên doanh.',
          'Quản lý mạng lưới tốt cho phép nhận được sự giúp đỡ khi cần, thuận lợi về kinh tế.',
          'Khả năng cao thành công trong kinh doanh hoặc đầu tư với sự giúp đỡ của mọi người.',
          'Trân trọng các mối quan hệ tốt sẽ sau này quay lại như sự giàu có.'
        ],
        id: [
          'Fisiognomi dengan nasib hubungan yang baik berarti peluang ekonomi melalui hubungan. Koneksi yang baik kemungkinan besar mengarah ke kekayaan.',
          'Kepribadian cerah dan positif mendapatkan kepercayaan mitra bisnis, mengarah ke kesepakatan yang baik.',
          'Hubungan harmonis dapat menciptakan peluang untuk usaha patungan atau investasi bersama.',
          'Hubungan yang lebih luas memungkinkan mendapatkan lebih banyak informasi dan peluang baru, secara alami meningkatkan nasib kekayaan.',
          'Kemungkinan bertemu pasangan yang stabil secara ekonomi melalui cinta atau pernikahan.',
          'Dapat memperoleh peluang bisnis atau sumber pendapatan baru melalui interaksi dengan orang-orang yang beragam.',
          'Kepribadian kooperatif menghasilkan hasil yang baik dalam kemitraan atau usaha patungan.',
          'Manajemen jaringan yang baik memungkinkan mendapat bantuan saat diperlukan, menguntungkan secara ekonomi.',
          'Kemungkinan tinggi sukses dalam bisnis atau investasi dengan bantuan orang.',
          'Menghargai hubungan yang baik akan kembali sebagai kekayaan nanti.'
        ]
      },
      love: {
        ko: [
          '밝은 눈과 올라간 입꼬리는 좋은 인연을 끌어들이는 완벽한 조합입니다. 특히 연애에서 행운이 따를 것입니다.',
          '당신의 따뜻하고 친절한 성격이 상대방에게 좋은 인상을 남겨 진심 어린 관계를 만들 수 있습니다.',
          '연애와 결혼에서 행운이 따르는 관상입니다. 진심으로 사랑하는 사람을 만나 평생 함께할 수 있습니다.',
          '대인 관계에서 활발한 소통 능력이 연애 관계에도 긍정적으로 작용합니다. 상대방과의 대화가 원활하게 이루어집니다.',
          '충성스럽고 배려심 깊은 성격으로 연인이 될 인물입니다. 상대방을 먼저 생각하는 마음이 관계를 오래 지속시킵니다.',
          '밝고 긍정적인 에너지가 상대방에게 편안함을 주어 진정한 사랑을 찾을 수 있습니다.',
          '인연운이 좋으니 새로운 만남을 적극적으로 추구하세요. 좋은 사람이 기다리고 있을 것입니다.',
          '연애에서도 신뢰와 소통이 중요합니다. 상대방과 충분히 대화하며 서로를 이해하는 관계를 만들어가세요.',
          '결혼을 고려한다면 서로의 가치관과 미래 계획을 나누는 것이 중요합니다. 진지한 대화를 통해 깊은 관계를 만들어가세요.',
          '당신의 관상은 장기적인 관계를 선호합니다. 짧은 만남보다는 진지하고 깊은 사랑을 추구하며, 결혼 후에도 행복한 가정을 이룰 수 있습니다.'
        ],
        en: [
          'Bright eyes and upturned mouth corners are a perfect combination for attracting good relationships. You will particularly have luck in love.',
          'Your warm and kind personality leaves good impression on partners, creating sincere relationships.',
          'Your physiognomy brings luck in love and marriage. You can meet someone you truly love and spend lifetime together.',
          'Active communication skills in interpersonal relationships also work positively in romantic relationships. Conversation with partner flows smoothly.',
          'With loyal and caring personality, you will be a good partner. Putting partner first maintains long-lasting relationships.',
          'Bright and positive energy gives comfort to partners, allowing finding true love.',
          'Since your relationship fortune is good, actively pursue new encounters. A good person is waiting.',
          'Trust and communication are important in love as well. Build relationships through sufficient conversation and mutual understanding.',
          'If considering marriage, sharing values and future plans is important. Build deep relationships through serious conversations.',
          'Your physiognomy prefers long-term relationships. Rather than brief encounters, pursue serious and deep love, and can build happy family even after marriage.'
        ],
        ja: [
          '明るい目と上がった口角は良い縁を引き寄せる完璧な組み合わせです。特に恋愛で幸運が伴うでしょう。',
          'あなたの温かく親切な性格が相手に良い印象を与え、真心のある関係を作ることができます。',
          '恋愛と結婚で幸運が伴う観相です。真心を込めて愛する人に会って一生を共にすることができます。',
          '対人関係で活発なコミュニケーション能力が恋愛関係にも肯定的に作用します。相手との会話が円滑に行われます。',
          '忠実で思いやり深い性格で、恋人になる人物です。相手を優先する心が関係を長く持続させます。',
          '明るくポジティブなエネルギーが相手に安らぎを与え、真の愛を見つけることができます。',
          '縁運が良いので新しい出会いを積極的に追求してください。良い人が待っているでしょう。',
          '恋愛でも信頼とコミュニケーションが重要です。相手と十分に話し合い、お互いを理解する関係を作ってください。',
          '結婚を考慮するなら、お互いの価値観と将来計画を共有することが重要です。真剣な対話を通じて深い関係を作ってください。',
          'あなたの観相は長期的な関係を好みます。短い出会いよりも真剣で深い愛を追求し、結婚後も幸せな家庭を築くことができます。'
        ],
        'zh-CN': [
          '明亮的眼睛和上扬的嘴角是吸引良好关系的完美组合。特别是在恋爱中会有好运。',
          '你温暖和善良的个性给伴侣留下好印象，创造真诚的关系。',
          '你的面相在恋爱和婚姻中会带来好运。你会遇到真正爱的人，并终生相伴。',
          '在人际关系中积极的沟通能力在恋爱关系中也起积极作用。与伴侣的对话顺畅。',
          '凭借忠诚和体贴的个性，你将是一个好伴侣。把伴侣放在第一位维持长久的关系。',
          '积极和正面的能量给伴侣舒适感，让你找到真爱。',
          '既然你的人缘很好，积极追求新的相遇。好人正在等待。',
          '在恋爱中信任和沟通也很重要。通过充分的对话和相互理解建立关系。',
          '如果考虑结婚，分享价值观和未来计划很重要。通过认真的对话建立深刻的关系。',
          '你的面相偏好长期关系。你追求认真和深刻的爱情而不是短暂的相遇，即使在结婚后也能建立一个幸福的家庭。'
        ],
        'zh-TW': [
          '明亮的眼睛和上揚的嘴角是吸引良好關係的完美組合。特別是在戀愛中會有好運。',
          '你溫暖和善良的個性給伴侶留下好印象，創造真誠的關係。',
          '你的面相在戀愛和婚姻中會帶來好運。你會遇到真正愛的人，並終生相伴。',
          '在人際關係中積極的溝通能力在戀愛關係中也起積極作用。與伴侶的對話順暢。',
          '憑藉忠誠和體貼的個性，你將是一個好伴侶。把伴侶放在第一位維持長久的關係。',
          '積極和正面的能量給伴侶舒適感，讓你找到真愛。',
          '既然你的人緣很好，積極追求新的相遇。好人正在等待。',
          '在戀愛中信任和溝通也很重要。通過充分的對話和相互理解建立關係。',
          '如果考慮結婚，分享價值觀和未來計劃很重要。通過認真的對話建立深刻的關係。',
          '你的面相偏好長期關係。你追求認真和深刻的愛情而不是短暫的相遇，即使在結婚後也能建立一個幸福的家庭。'
        ],
        vi: [
          'Mắt sáng và khóe miệng cong lên là sự kết hợp hoàn hảo để thu hút các mối quan hệ tốt. Bạn sẽ đặc biệt có may mắn trong tình yêu.',
          'Tính cách ấm áp và tốt bụng của bạn để lại ấn tượng tốt cho các đối tác, tạo ra các mối quan hệ chân thành.',
          'Tướng số của bạn mang lại may mắn trong tình yêu và hôn nhân. Bạn có thể gặp người mà bạn thực sự yêu và sống cùng nhau suốt đời.',
          'Kỹ năng giao tiếp tích cực trong các mối quan hệ giữa các cá nhân cũng hoạt động tích cực trong các mối quan hệ lãng mạn. Cuộc trò chuyện với đối tác diễn ra suôn sẻ.',
          'Với tính cách trung thành và chu đáo, bạn sẽ là một đối tác tốt. Đặt đối tác lên hàng đầu duy trì các mối quan hệ lâu dài.',
          'Năng lượng tích cực và tươi sáng mang lại sự thoải mái cho các đối tác, cho phép tìm thấy tình yêu thực sự.',
          'Vì vận nhân duyên của bạn tốt, hãy tích cực theo đuổi những cuộc gặp gỡ mới. Một người tốt đang chờ đợi.',
          'Sự tin tưởng và giao tiếp cũng quan trọng trong tình yêu. Xây dựng các mối quan hệ thông qua cuộc trò chuyện đầy đủ và sự hiểu biết lẫn nhau.',
          'Nếu đang cân nhắc kết hôn, việc chia sẻ giá trị và kế hoạch tương lai rất quan trọng. Xây dựng các mối quan hệ sâu sắc thông qua các cuộc trò chuyện nghiêm túc.',
          'Tướng số của bạn ưa thích các mối quan hệ lâu dài. Thay vì những cuộc gặp gỡ ngắn ngủi, hãy theo đuổi tình yêu nghiêm túc và sâu sắc, và có thể xây dựng một gia đình hạnh phúc ngay cả sau khi kết hôn.'
        ],
        id: [
          'Mata cerah dan sudut mulut terangkat adalah kombinasi sempurna untuk menarik hubungan yang baik. Anda akan sangat beruntung dalam cinta.',
          'Kepribadian hangat dan baik Anda meninggalkan kesan baik pada pasangan, menciptakan hubungan yang tulus.',
          'Fisiognomi Anda membawa keberuntungan dalam cinta dan pernikahan. Anda dapat bertemu seseorang yang benar-benar Anda cintai dan menghabiskan seumur hidup bersama.',
          'Kemampuan komunikasi aktif dalam hubungan interpersonal juga bekerja positif dalam hubungan romantis. Percakapan dengan pasangan mengalir lancar.',
          'Dengan kepribadian setia dan peduli, Anda akan menjadi pasangan yang baik. Mengutamakan pasangan mempertahankan hubungan yang langgeng.',
          'Energi cerah dan positif memberikan kenyamanan pada pasangan, memungkinkan menemukan cinta sejati.',
          'Karena nasib hubungan Anda baik, secara aktif mengejar pertemuan baru. Orang baik sedang menunggu.',
          'Kepercayaan dan komunikasi juga penting dalam cinta. Bangun hubungan melalui percakapan yang cukup dan saling memahami.',
          'Jika mempertimbangkan pernikahan, berbagi nilai dan rencana masa depan penting. Bangun hubungan yang dalam melalui percakapan serius.',
          'Fisiognomi Anda lebih suka hubungan jangka panjang. Daripada pertemuan singkat, kejar cinta yang serius dan mendalam, dan dapat membangun keluarga bahagia bahkan setelah menikah.'
        ]
      },
      success: {
        ko: [
          '좋은 인연운은 모든 분야에서 성공의 기반이 됩니다. 사람들과의 좋은 관계가 협력과 지원으로 이어집니다.',
          '밝고 긍정적인 성격이 사업 상대방의 신뢰를 얻어 좋은 기회를 만들어냅니다.',
          '인간관계가 넓으면 다양한 정보와 기회를 얻을 수 있어 성공 가능성이 높아집니다.',
          '협력적인 성격으로 팀워크가 중요한 분야에서 두각을 나타낼 것입니다.',
          '다양한 사람들과의 교류를 통해 새로운 아이디어나 사업 기회를 얻을 수 있습니다.',
          '인맥 관리를 잘하면 필요할 때 조언이나 지원을 받을 수 있어 성공에 도움이 됩니다.',
          '연애나 결혼을 통해 경제적으로 안정적인 파트너를 만나 사업이나 투자에서 성공할 수 있습니다.',
          '사람들의 도움으로 어려운 상황을 극복하고 목표를 달성할 수 있습니다.',
          '좋은 인연은 평생 자산입니다. 지금 만나는 사람들이 나중에 성공의 발판이 될 것입니다.',
          '당신의 관상은 협력을 통한 성공을 의미합니다. 혼자보다는 함께할 때 더 큰 성과를 낼 수 있습니다.'
        ],
        en: [
          'Good relationship fortune is the foundation of success in all fields. Good relationships lead to cooperation and support.',
          'Bright and positive personality gains trust of business partners, creating good opportunities.',
          'Wider relationships allow gaining diverse information and opportunities, increasing success possibility.',
          'Cooperative personality will excel in fields where teamwork is important.',
          'Can gain new ideas or business opportunities through interaction with diverse people.',
          'Good network management allows receiving advice or support when needed, helping success.',
          'Can meet economically stable partner through love or marriage, achieving success in business or investments.',
          'Can overcome difficult situations and achieve goals with people\'s help.',
          'Good relationships are lifetime assets. People you meet now will later become foundation of success.',
          'Your physiognomy means success through cooperation. Can achieve greater results together rather than alone.'
        ],
        ja: [
          '良い縁運はすべての分野で成功の基盤になります。人々との良い関係が協力と支援につながります。',
          '明るくポジティブな性格がビジネス相手の信頼を得て良い機会を作り出します。',
          '人間関係が広ければ様々な情報や機会を得ることができ、成功の可能性が高まります。',
          '協力的な性格でチームワークが重要な分野で頭角を現すでしょう。',
          '様々な人々との交流を通じて新しいアイデアやビジネス機会を得ることができます。',
          '人脈管理が上手であれば必要な時にアドバイスや支援を受けることができ、成功に役立ちます。',
          '恋愛や結婚を通じて経済的に安定したパートナーに会い、ビジネスや投資で成功することができます。',
          '人々の助けで困難な状況を克服し、目標を達成することができます。',
          '良い縁は一生の資産です。今出会う人々が後で成功の足がかりになるでしょう。',
          'あなたの観相は協力を通じた成功を意味します。一人よりも一緒にいる時に大きな成果を出すことができます。'
        ],
        'zh-CN': [
          '良好的人缘是所有领域成功的基础。良好的关系导致合作和支持。',
          '开朗和积极的个性获得生意伙伴的信任，创造好的机会。',
          '更广泛的关系可以获取多样化的信息和机会，增加成功的可能性。',
          '合作的个性会在团队合作重要的领域脱颖而出。',
          '可以通过与不同人的互动获得新想法或商业机会。',
          '良好的人脉管理可以在需要时获得建议或支持，有助于成功。',
          '可以通过恋爱或婚姻遇到经济稳定的伴侣，在商业或投资中取得成功。',
          '可以在人们的帮助下克服困难情况并实现目标。',
          '良好的关系是终生的资产。现在遇到的人以后会成为成功的基础。',
          '你的面相意味着通过合作获得成功。在一起时比独自一人能取得更大的成果。'
        ],
        'zh-TW': [
          '良好的人緣是所有領域成功的基礎。良好的關係導致合作和支持。',
          '開朗和積極的個性獲得生意夥伴的信任，創造好的機會。',
          '更廣泛的關係可以獲取多樣化的信息和機會，增加成功的可能性。',
          '合作的個性會在團隊合作重要的領域脫穎而出。',
          '可以通過與不同人的互動獲得新想法或商業機會。',
          '良好的人脈管理可以在需要時獲得建議或支持，有助於成功。',
          '可以通過戀愛或婚姻遇到經濟穩定的伴侶，在商業或投資中取得成功。',
          '可以在人們的幫助下克服困難情況並實現目標。',
          '良好的關係是終生的資產。現在遇到的人以後會成為成功的基礎。',
          '你的面相意味著通過合作獲得成功。在一起時比獨自一人能取得更大的成果。'
        ],
        vi: [
          'Vận nhân duyên tốt là nền tảng của thành công trong mọi lĩnh vực. Các mối quan hệ tốt dẫn đến hợp tác và hỗ trợ.',
          'Tính cách tươi sáng và tích cực giành được sự tin tưởng của đối tác kinh doanh, tạo ra cơ hội tốt.',
          'Các mối quan hệ rộng rãi cho phép có được thông tin và cơ hội đa dạng, tăng khả năng thành công.',
          'Tính cách hợp tác sẽ xuất sắc trong các lĩnh vực nơi làm việc nhóm quan trọng.',
          'Có thể đạt được ý tưởng mới hoặc cơ hội kinh doanh thông qua tương tác với nhiều người khác nhau.',
          'Quản lý mạng lưới tốt cho phép nhận được lời khuyên hoặc hỗ trợ khi cần, giúp thành công.',
          'Có thể gặp đối tác ổn định về kinh tế thông qua tình yêu hoặc hôn nhân, đạt thành công trong kinh doanh hoặc đầu tư.',
          'Có thể vượt qua các tình huống khó khăn và đạt được mục tiêu với sự giúp đỡ của mọi người.',
          'Các mối quan hệ tốt là tài sản suốt đời. Những người bạn gặp bây giờ sẽ sau này trở thành nền tảng của thành công.',
          'Tướng số của bạn có nghĩa là thành công thông qua hợp tác. Có thể đạt được kết quả lớn hơn khi làm việc cùng nhau thay vì một mình.'
        ],
        id: [
          'Nasib hubungan yang baik adalah fondasi kesuksesan di semua bidang. Hubungan yang baik mengarah ke kerja sama dan dukungan.',
          'Kepribadian cerah dan positif mendapatkan kepercayaan mitra bisnis, menciptakan peluang yang baik.',
          'Hubungan yang lebih luas memungkinkan mendapatkan informasi dan peluang yang beragam, meningkatkan kemungkinan kesuksesan.',
          'Kepribadian kooperatif akan unggul di bidang di mana kerja tim penting.',
          'Dapat memperoleh ide baru atau peluang bisnis melalui interaksi dengan orang-orang yang beragam.',
          'Manajemen jaringan yang baik memungkinkan menerima saran atau dukungan saat diperlukan, membantu kesuksesan.',
          'Dapat bertemu pasangan yang stabil secara ekonomi melalui cinta atau pernikahan, mencapai kesuksesan dalam bisnis atau investasi.',
          'Dapat mengatasi situasi sulit dan mencapai tujuan dengan bantuan orang.',
          'Hubungan yang baik adalah aset seumur hidup. Orang yang Anda temui sekarang akan menjadi fondasi kesuksesan nanti.',
          'Fisiognomi Anda berarti kesuksesan melalui kerja sama. Dapat mencapai hasil yang lebih besar bersama daripada sendirian.'
        ]
      }
    }
  },
  {
    id: 4,
    title: {
      ko: '평상상 - 안정적 운세',
      en: 'Normal Fortune - Stable Destiny',
      ja: '平常相 - 安定運勢',
      'zh-CN': '平常相 - 稳定运势',
      'zh-TW': '平常相 - 穩定運勢',
      vi: 'Bình Thường Tướng - Vận Mệnh Ổn Định',
      id: 'Nasib Normal - Takdir Stabil'
    },
    description: {
      ko: [
        '당신의 얼굴은 안정적인 운세를 보여줍니다. 특별히 뛰어난 부분은 없지만 균형 잡힌 인상으로, 꾸준한 노력과 성실함으로 원하는 것을 얻을 수 있습니다. 급하게 서두르지 말고 차근차근 나아가세요.',
        '평상상의 얼굴은 균형 잡힌 인상이 특징입니다. 특별히 눈에 띄는 부분은 없지만, 꾸준한 노력으로 원하는 것을 얻을 수 있습니다.',
        '당신의 얼굴은 안정감을 줍니다. 균형 잡힌 인상은 꾸준함과 성실함을 의미하며, 차근차근 나아가면 원하는 결과를 얻을 수 있습니다.',
        '이마와 눈, 코, 입이 균형있게 배치된 얼굴은 안정적인 운세를 나타냅니다. 급하게 서두르지 말고 계획적으로 나아가세요.',
        '평상상의 관상은 특별한 좋은 운도 나쁜 운도 없는 평범하지만 안정적인 운세입니다. 꾸준한 노력이 성공의 열쇠입니다.',
        '당신의 얼굴은 균형감이 뛰어납니다. 이런 관상은 안정적인 삶을 살 수 있도록 도와주며, 성실함으로 원하는 것을 얻을 수 있습니다.',
        '특별히 눈에 띄는 특징은 없지만, 전체적으로 균형 잡힌 얼굴은 안정적인 운세를 의미합니다. 꾸준한 자기계발이 중요합니다.',
        '평상상의 얼굴은 평범하지만 안정적입니다. 급하게 변하지 말고 현재의 리듬을 유지하며 꾸준히 나아가세요.',
        '당신의 얼굴은 안정감과 균형감을 나타냅니다. 이런 관상은 꾸준한 노력과 성실함으로 원하는 목표를 달성할 수 있게 해줍니다.',
        '균형 잡힌 인상의 얼굴은 안정적인 운세를 보여줍니다. 특별히 뛰어난 부분은 없지만, 꾸준함과 성실함으로 원하는 것을 얻을 수 있습니다.'
      ],
      en: [
        'Your face shows stable fortune. While not exceptionally outstanding, your balanced features mean you can achieve what you want through steady effort and sincerity. Don\'t rush, but move forward step by step.',
        'A face with balanced features indicates stable fortune. While not particularly outstanding, you can achieve what you want through consistent effort.',
        'Your face gives a sense of stability. Balanced features mean consistency and sincerity, and you can achieve desired results by moving forward step by step.',
        'A face with balanced placement of forehead, eyes, nose, and mouth indicates stable fortune. Don\'t rush, but move forward with a plan.',
        'This physiognomy means neither particularly good nor bad fortune, but stable and ordinary. Consistent effort is the key to success.',
        'Your face shows excellent balance. This physiognomy helps you live a stable life and achieve what you want through sincerity.',
        'While there are no particularly outstanding features, an overall balanced face means stable fortune. Consistent self-development is important.',
        'A face with stable fortune is ordinary but stable. Don\'t rush for change, but maintain your current rhythm and move forward steadily.',
        'Your face shows stability and balance. This physiognomy allows you to achieve your goals through consistent effort and sincerity.',
        'A face with balanced features shows stable fortune. While not particularly outstanding, you can achieve what you want through consistency and sincerity.'
      ],
      ja: [
        'あなたの顔は安定した運勢を示しています。特別に優れた部分はありませんが、バランスの取れた印象で、着実な努力と誠実さで望むものを得ることができます。',
        'バランスの取れた印象の顔は安定した運勢を示します。特に目立つ部分はありませんが、着実な努力で望むものを得ることができます。',
        'あなたの顔は安定感を与えます。バランスの取れた印象は着実さと誠実さを意味し、一歩一歩進めば望む結果を得ることができます。',
        '額、目、鼻、口がバランスよく配置された顔は安定した運勢を示します。急がずに計画的に進んでください。',
        '平常相の観相は特別に良い運も悪い運もない平凡だが安定した運勢です。着実な努力が成功の鍵です。',
        'あなたの顔はバランス感が優れています。この観相は安定した人生を送ることができるように助け、誠実さで望むものを得ることができます。',
        '特に目立つ特徴はありませんが、全体的にバランスの取れた顔は安定した運勢を意味します。着実な自己開発が重要です。',
        '平常相の顔は平凡だが安定しています。急に変わろうとせず、現在のリズムを維持しながら着実に進んでください。',
        'あなたの顔は安定感とバランス感を示しています。この観相は着実な努力と誠実さで望む目標を達成することができるようにしてくれます。',
        'バランスの取れた印象の顔は安定した運勢を示します。特に優れた部分はありませんが、着実さと誠実さで望むものを得ることができます。'
      ],
      'zh-CN': [
        '你的面相显示稳定的运势。虽然没有特别突出的部分，但平衡的印象意味着你可以通过稳定的努力和真诚获得想要的东西。',
        '平衡印象的脸显示稳定的运势。虽然没有特别突出的部分，但你可以通过稳定的努力获得想要的东西。',
        '你的脸给人一种稳定感。平衡的印象意味着稳定和真诚，通过一步一步前进，你可以达到想要的结果。',
        '前额、眼睛、鼻子、嘴巴平衡布置的脸显示稳定的运势。不要着急，要有计划地前进。',
        '平常相的面相意味着既没有特别好的运气也没有特别坏的运气，是平凡但稳定的运势。稳定的努力是成功的关键。',
        '你的脸显示出优秀的平衡感。这个面相帮助你过上稳定的生活，通过真诚达到想要的东西。',
        '虽然没有特别突出的特征，但整体平衡的脸意味着稳定的运势。稳定的自我发展很重要。',
        '稳定运势的脸是平凡但稳定的。不要急于改变，保持当前的节奏，稳步前进。',
        '你的脸显示稳定感和平衡感。这个面相允许你通过稳定的努力和真诚达到目标。',
        '平衡印象的脸显示稳定的运势。虽然没有特别突出的部分，但你可以通过稳定和真诚获得想要的东西。'
      ],
      'zh-TW': [
        '你的面相顯示穩定的運勢。雖然沒有特別突出的部分，但平衡的印象意味著你可以通過穩定的努力和真誠獲得想要的東西。',
        '平衡印象的臉顯示穩定的運勢。雖然沒有特別突出的部分，但你可以通過穩定的努力獲得想要的東西。',
        '你的臉給人一種穩定感。平衡的印象意味著穩定和真誠，通過一步一步前進，你可以達到想要的結果。',
        '前額、眼睛、鼻子、嘴巴平衡佈置的臉顯示穩定的運勢。不要著急，要有計劃地前進。',
        '平常相的面相意味著既沒有特別好的運氣也沒有特別壞的運氣，是平凡但穩定的運勢。穩定的努力是成功的關鍵。',
        '你的臉顯示出優秀的平衡感。這個面相幫助你過上穩定的生活，通過真誠達到想要的東西。',
        '雖然沒有特別突出的特徵，但整體平衡的臉意味著穩定的運勢。穩定的自我發展很重要。',
        '穩定運勢的臉是平凡但穩定的。不要急於改變，保持當前的節奏，穩步前進。',
        '你的臉顯示穩定感和平衡感。這個面相允許你通過穩定的努力和真誠達到目標。',
        '平衡印象的臉顯示穩定的運勢。雖然沒有特別突出的部分，但你可以通過穩定和真誠獲得想要的東西。'
      ],
      vi: [
        'Khuôn mặt của bạn cho thấy vận mệnh ổn định. Mặc dù không có phần nào nổi bật đặc biệt, nhưng ấn tượng cân bằng có nghĩa là bạn có thể đạt được những gì mình muốn thông qua nỗ lực ổn định và chân thành.',
        'Khuôn mặt có ấn tượng cân bằng cho thấy vận mệnh ổn định. Mặc dù không có phần nào nổi bật đặc biệt, nhưng bạn có thể đạt được những gì mình muốn thông qua nỗ lực ổn định.',
        'Khuôn mặt của bạn tạo cảm giác ổn định. Ấn tượng cân bằng có nghĩa là sự kiên trì và chân thành, và bạn có thể đạt được kết quả mong muốn bằng cách tiến từng bước.',
        'Khuôn mặt có trán, mắt, mũi, miệng được sắp xếp cân bằng cho thấy vận mệnh ổn định. Đừng vội vàng, hãy tiến lên một cách có kế hoạch.',
        'Tướng số bình thường có nghĩa là không có vận may đặc biệt tốt hay xấu, nhưng là vận mệnh bình thường và ổn định. Nỗ lực ổn định là chìa khóa thành công.',
        'Khuôn mặt của bạn cho thấy cảm giác cân bằng tuyệt vời. Tướng số này giúp bạn sống một cuộc sống ổn định và đạt được những gì mình muốn thông qua sự chân thành.',
        'Mặc dù không có đặc điểm nổi bật đặc biệt, nhưng khuôn mặt tổng thể cân bằng có nghĩa là vận mệnh ổn định. Sự phát triển bản thân ổn định là quan trọng.',
        'Khuôn mặt có vận mệnh ổn định là bình thường nhưng ổn định. Đừng vội vàng thay đổi, nhưng duy trì nhịp điệu hiện tại và tiến lên một cách ổn định.',
        'Khuôn mặt của bạn cho thấy cảm giác ổn định và cân bằng. Tướng số này cho phép bạn đạt được mục tiêu thông qua nỗ lực ổn định và chân thành.',
        'Khuôn mặt có ấn tượng cân bằng cho thấy vận mệnh ổn định. Mặc dù không có phần nào nổi bật đặc biệt, nhưng bạn có thể đạt được những gì mình muốn thông qua sự kiên trì và chân thành.'
      ],
      id: [
        'Wajah Anda menunjukkan nasib yang stabil. Meskipun tidak ada bagian yang luar biasa menonjol, kesan seimbang berarti Anda dapat mencapai apa yang Anda inginkan melalui upaya yang stabil dan ketulusan.',
        'Wajah dengan kesan seimbang menunjukkan nasib yang stabil. Meskipun tidak ada bagian yang luar biasa menonjol, Anda dapat mencapai apa yang Anda inginkan melalui upaya yang stabil.',
        'Wajah Anda memberikan rasa stabilitas. Kesan seimbang berarti konsistensi dan ketulusan, dan Anda dapat mencapai hasil yang diinginkan dengan bergerak maju langkah demi langkah.',
        'Wajah dengan dahi, mata, hidung, dan mulut yang ditempatkan secara seimbang menunjukkan nasib yang stabil. Jangan terburu-buru, tetapi maju dengan rencana.',
        'Fisiognomi normal berarti tidak ada keberuntungan yang sangat baik atau buruk, tetapi nasib yang biasa dan stabil. Upaya konsisten adalah kunci kesuksesan.',
        'Wajah Anda menunjukkan rasa keseimbangan yang sangat baik. Fisiognomi ini membantu Anda menjalani kehidupan yang stabil dan mencapai apa yang Anda inginkan melalui ketulusan.',
        'Meskipun tidak ada fitur yang luar biasa menonjol, wajah yang secara keseluruhan seimbang berarti nasib yang stabil. Pengembangan diri yang konsisten adalah penting.',
        'Wajah dengan nasib stabil adalah biasa tetapi stabil. Jangan terburu-buru untuk berubah, tetapi pertahankan ritme Anda saat ini dan maju dengan stabil.',
        'Wajah Anda menunjukkan stabilitas dan keseimbangan. Fisiognomi ini memungkinkan Anda mencapai tujuan melalui upaya yang konsisten dan ketulusan.',
        'Wajah dengan kesan seimbang menunjukkan nasib yang stabil. Meskipun tidak ada bagian yang luar biasa menonjol, Anda dapat mencapai apa yang Anda inginkan melalui konsistensi dan ketulusan.'
      ]
    },
    emoji: '⚖️',
    scoreRange: [60, 69],
    strengths: {
      ko: ['꾸준함', '성실함', '안정성', '균형감각'],
      en: ['Consistency', 'Sincerity', 'Stability', 'Sense of Balance'],
      ja: ['着実さ', '誠実さ', '安定性', 'バランス感覚'],
      'zh-CN': ['坚持', '真诚', '稳定性', '平衡感'],
      'zh-TW': ['堅持', '真誠', '穩定性', '平衡感'],
      vi: ['Kiên trì', 'Chân thành', 'Ổn định', 'Cảm giác cân bằng'],
      id: ['Konsistensi', 'Ketulusan', 'Stabilitas', 'Rasa Keseimbangan']
    },
    recommendations: {
      ko: ['꾸준한 자기계발', '안정적인 직장 생활', '규칙적인 생활', '장기 계획 수립'],
      en: ['Consistent Self-Development', 'Stable Work Life', 'Regular Lifestyle', 'Long-term Planning'],
      ja: ['着実な自己啓発', '安定した職場生活', '規則正しい生活', '長期計画の策定'],
      'zh-CN': ['持续自我发展', '稳定的工作生活', '规律的生活方式', '制定长期计划'],
      'zh-TW': ['持續自我發展', '穩定的工作生活', '規律的生活方式', '制定長期計劃'],
      vi: ['Phát triển bản thân liên tục', 'Cuộc sống công việc ổn định', 'Lối sống đều đặn', 'Lập kế hoạch dài hạn'],
      id: ['Pengembangan Diri Konsisten', 'Kehidupan Kerja Stabil', 'Gaya Hidup Teratur', 'Perencanaan Jangka Panjang']
    },
    personality: {
      ko: [
        '균형 잡힌 인상으로 안정적이고 신뢰할 수 있는 성격입니다.',
        '꾸준함과 성실함이 뛰어나 목표를 향해 차근차근 나아가는 스타일입니다.',
        '급하게 서두르지 않고 계획적으로 일을 처리하는 성격입니다.',
        '균형감각이 있어 갈등 상황에서도 중재할 수 있는 능력이 있습니다.',
        '특별히 뛰어난 부분은 없지만 모든 면에서 무난하고 안정적입니다.',
        '규칙적인 생활을 선호하며 변화보다는 안정을 추구합니다.',
        '성실한 일꾼 타입으로 약속을 잘 지키고 책임감이 강합니다.',
        '장기적인 관점에서 생각하며 단기적인 이익보다는 안정을 중시합니다.',
        '불필요한 위험을 피하고 안전한 방법을 선택하는 신중한 성격입니다.',
        '꾸준한 노력을 통해 원하는 것을 얻는 현실적인 성격입니다.'
      ],
      en: [
        'Balanced impression shows stable and trustworthy personality.',
        'Excellent consistency and sincerity, style of moving forward step by step toward goals.',
        'Personality that handles things systematically without rushing.',
        'Good sense of balance, can mediate in conflicts.',
        'Not exceptionally outstanding but stable in all aspects.',
        'Prefers regular lifestyle, pursues stability over change.',
        'Sincere worker type, good at keeping promises with strong responsibility.',
        'Thinks from long-term perspective, values stability over short-term gains.',
        'Prudent personality that avoids unnecessary risks and chooses safe methods.',
        'Realistic personality that achieves goals through steady effort.'
      ],
      ja: [
        'バランスの取れた印象で安定していて信頼できる性格です。',
        '着実さと誠実さに優れ、目標に向かって着実に前進するスタイルです。',
        '急がずに計画的に物事を処理する性格です。',
        'バランス感覚があり、対立状況でも調停できる能力があります。',
        '特別に優れた部分はありませんが、すべての面で無難で安定しています。',
        '規則正しい生活を好み、変化よりも安定を追求します。',
        '誠実な働き手タイプで、約束をよく守り責任感が強いです。',
        '長期的な観点から考え、短期的な利益よりも安定を重視します。',
        '不要なリスクを避け、安全な方法を選択する慎重な性格です。',
        '着実な努力を通じて望むものを得る現実的な性格です。'
      ],
      'zh-CN': [
        '平衡的印象显示稳定和可靠的个性。',
        '出色的坚持和真诚，逐步朝着目标前进的风格。',
        '不匆忙、有计划地处理事情的个性。',
        '有良好的平衡感，可以在冲突中调解。',
        '虽然没有特别突出的部分，但在所有方面都很稳定。',
        '喜欢规律的生活方式，追求稳定而不是改变。',
        '诚实的工人类型，善于遵守承诺，责任心强。',
        '从长远角度思考，重视稳定而不是短期利益。',
        '谨慎的个性，避免不必要的风险，选择安全的方法。',
        '通过稳定的努力实现目标的现实个性。'
      ],
      'zh-TW': [
        '平衡的印象顯示穩定和可靠的個性。',
        '出色的堅持和真誠，逐步朝著目標前進的風格。',
        '不匆忙、有計劃地處理事情的個性。',
        '有良好的平衡感，可以在衝突中調解。',
        '雖然沒有特別突出的部分，但在所有方面都很穩定。',
        '喜歡規律的生活方式，追求穩定而不是改變。',
        '誠實的工人類型，善於遵守承諾，責任心強。',
        '從長遠角度思考，重視穩定而不是短期利益。',
        '謹慎的個性，避免不必要的風險，選擇安全的方法。',
        '通過穩定的努力實現目標的現實個性。'
      ],
      vi: [
        'Ấn tượng cân bằng cho thấy tính cách ổn định và đáng tin cậy.',
        'Tính kiên trì và chân thành xuất sắc, phong cách tiến từng bước một cách ổn định hướng tới mục tiêu.',
        'Tính cách xử lý mọi việc một cách có hệ thống mà không vội vàng.',
        'Cảm giác cân bằng tốt, có thể hòa giải trong xung đột.',
        'Không nổi bật đặc biệt nhưng ổn định ở mọi khía cạnh.',
        'Thích lối sống đều đặn, theo đuổi sự ổn định hơn thay đổi.',
        'Kiểu người làm việc chân thành, giỏi giữ lời hứa với trách nhiệm mạnh mẽ.',
        'Suy nghĩ từ quan điểm dài hạn, coi trọng sự ổn định hơn lợi ích ngắn hạn.',
        'Tính cách thận trọng tránh rủi ro không cần thiết và chọn phương pháp an toàn.',
        'Tính cách thực tế đạt được mục tiêu thông qua nỗ lực ổn định.'
      ],
      id: [
        'Kesan seimbang menunjukkan kepribadian yang stabil dan dapat dipercaya.',
        'Konsistensi dan ketulusan yang sangat baik, gaya bergerak maju selangkah demi selangkah menuju tujuan.',
        'Kepribadian yang menangani hal-hal secara sistematis tanpa terburu-buru.',
        'Rasa keseimbangan yang baik, dapat menengahi dalam konflik.',
        'Tidak luar biasa menonjol tetapi stabil dalam semua aspek.',
        'Lebih suka gaya hidup teratur, mengejar stabilitas daripada perubahan.',
        'Tipe pekerja yang tulus, pandai menepati janji dengan tanggung jawab yang kuat.',
        'Berpikir dari perspektif jangka panjang, menghargai stabilitas daripada keuntungan jangka pendek.',
        'Kepribadian yang hati-hati menghindari risiko yang tidak perlu dan memilih metode yang aman.',
        'Kepribadian realistis yang mencapai tujuan melalui upaya yang mantap.'
      ]
    },
    advice: {
      ko: [
        '당신의 꾸준함과 성실함이 최고의 무기입니다. 급하게 서두르지 말고 차근차근 나아가세요.',
        '특별히 뛰어난 부분은 없지만 꾸준한 노력으로 원하는 것을 얻을 수 있습니다. 포기하지 마세요.',
        '안정적인 생활이 최고의 가치입니다. 무리한 도전보다는 꾸준한 자기계발에 집중하세요.',
        '균형 잡힌 인상은 신뢰를 줍니다. 이런 강점을 활용하여 안정적인 관계를 만들어가세요.',
        '규칙적인 생활과 장기적인 계획이 성공의 열쇠입니다. 단기적인 이익보다는 안정을 추구하세요.',
        '급하게 서두르지 말고 한 걸음씩 나아가세요. 시간이 지나면 원하는 결과를 얻을 수 있습니다.',
        '안정적인 직장 생활과 꾸준한 자기계발이 당신에게 가장 적합한 길입니다.',
        '특별한 재능이 없어도 성실함과 꾸준함으로 큰 성과를 낼 수 있습니다.',
        '균형감각을 활용하여 갈등 상황에서도 중재자 역할을 할 수 있습니다.',
        '장기적인 관점에서 목표를 세우고 꾸준히 노력하세요. 안정적인 성공이 따를 것입니다.'
      ],
      en: [
        'Your consistency and sincerity are your greatest weapons. Don\'t rush, but move forward step by step.',
        'While not exceptionally outstanding, you can achieve what you want through steady effort. Don\'t give up.',
        'Stable life is the highest value. Focus on steady self-development rather than risky challenges.',
        'Balanced impression gives trust. Use this strength to build stable relationships.',
        'Regular lifestyle and long-term planning are keys to success. Pursue stability over short-term gains.',
        'Don\'t rush, but move forward step by step. Over time, you can achieve desired results.',
        'Stable work life and consistent self-development are the most suitable path for you.',
        'Even without special talent, you can achieve great results through sincerity and consistency.',
        'Use your sense of balance to play mediator role even in conflicts.',
        'Set goals from long-term perspective and keep working steadily. Stable success will follow.'
      ],
      ja: [
        'あなたの着実さと誠実さが最高の武器です。急がずに着実に前進してください。',
        '特別に優れた部分はありませんが、着実な努力で望むものを得ることができます。諦めないでください。',
        '安定した生活が最高の価値です。無理な挑戦よりも着実な自己啓発に集中してください。',
        'バランスの取れた印象は信頼を与えます。この強みを活用して安定した関係を作ってください。',
        '規則正しい生活と長期的な計画が成功の鍵です。短期的な利益よりも安定を追求してください。',
        '急がずに着実に前進してください。時間が経てば望む結果を得ることができます。',
        '安定した職場生活と着実な自己啓発があなたに最も適した道です。',
        '特別な才能がなくても誠実さと着実さで大きな成果を出すことができます。',
        'バランス感覚を活用して対立状況でも調停者の役割を果たすことができます。',
        '長期的な観点から目標を立て、着実に努力してください。安定した成功が伴うでしょう。'
      ],
      'zh-CN': [
        '你的坚持和真诚是你最大的武器。不要急于求成，要稳步前进。',
        '虽然没有特别突出的部分，但通过稳定的努力可以获得你想要的东西。不要放弃。',
        '稳定的生活是最高价值。专注于稳定的自我发展而不是冒险的挑战。',
        '平衡的印象给予信任。利用这个优势建立稳定的关系。',
        '规律的生活和长期计划是成功的关键。追求稳定而不是短期利益。',
        '不要匆忙，要一步一步前进。随着时间的推移，你可以获得想要的结果。',
        '稳定的工作生活和持续的自我发展是最适合你的道路。',
        '即使没有特殊才能，你也可以通过真诚和坚持取得巨大成果。',
        '利用你的平衡感在冲突中发挥调解者的作用。',
        '从长期角度设定目标并持续稳定努力。稳定的成功会随之而来。'
      ],
      'zh-TW': [
        '你的堅持和真誠是你最大的武器。不要急於求成，要穩步前進。',
        '雖然沒有特別突出的部分，但通過穩定的努力可以獲得你想要的東西。不要放棄。',
        '穩定的生活是最高價值。專注於穩定的自我發展而不是冒險的挑戰。',
        '平衡的印象給予信任。利用這個優勢建立穩定的關係。',
        '規律的生活和長期計劃是成功的關鍵。追求穩定而不是短期利益。',
        '不要匆忙，要一步一步前進。隨著時間的推移，你可以獲得想要的結果。',
        '穩定的工作生活和持續的自我發展是最適合你的道路。',
        '即使沒有特殊才能，你也可以通過真誠和堅持取得巨大成果。',
        '利用你的平衡感在衝突中發揮調解者的作用。',
        '從長期角度設定目標並持續穩定努力。穩定的成功會隨之而來。'
      ],
      vi: [
        'Sự kiên trì và chân thành của bạn là vũ khí tốt nhất. Đừng vội vàng, hãy tiến từng bước một cách ổn định.',
        'Mặc dù không nổi bật đặc biệt, bạn có thể đạt được những gì mình muốn thông qua nỗ lực ổn định. Đừng từ bỏ.',
        'Cuộc sống ổn định là giá trị cao nhất. Tập trung vào phát triển bản thân ổn định thay vì những thách thức rủi ro.',
        'Ấn tượng cân bằng mang lại sự tin tưởng. Sử dụng điểm mạnh này để xây dựng các mối quan hệ ổn định.',
        'Lối sống đều đặn và kế hoạch dài hạn là chìa khóa của thành công. Theo đuổi sự ổn định hơn lợi ích ngắn hạn.',
        'Đừng vội vàng, hãy tiến từng bước một. Theo thời gian, bạn có thể đạt được kết quả mong muốn.',
        'Cuộc sống công việc ổn định và phát triển bản thân liên tục là con đường phù hợp nhất cho bạn.',
        'Ngay cả khi không có tài năng đặc biệt, bạn có thể đạt được kết quả lớn thông qua sự chân thành và kiên trì.',
        'Sử dụng cảm giác cân bằng của bạn để đóng vai trò hòa giải ngay cả trong xung đột.',
        'Đặt mục tiêu từ quan điểm dài hạn và tiếp tục làm việc ổn định. Thành công ổn định sẽ theo sau.'
      ],
      id: [
        'Konsistensi dan ketulusan Anda adalah senjata terbaik. Jangan terburu-buru, tetapi maju selangkah demi selangkah.',
        'Meskipun tidak luar biasa menonjol, Anda dapat mencapai apa yang Anda inginkan melalui upaya yang mantap. Jangan menyerah.',
        'Kehidupan yang stabil adalah nilai tertinggi. Fokus pada pengembangan diri yang mantap daripada tantangan berisiko.',
        'Kesan seimbang memberikan kepercayaan. Gunakan kekuatan ini untuk membangun hubungan yang stabil.',
        'Gaya hidup teratur dan perencanaan jangka panjang adalah kunci kesuksesan. Kejar stabilitas daripada keuntungan jangka pendek.',
        'Jangan terburu-buru, tetapi maju selangkah demi selangkah. Seiring waktu, Anda dapat mencapai hasil yang diinginkan.',
        'Kehidupan kerja yang stabil dan pengembangan diri yang konsisten adalah jalur yang paling cocok untuk Anda.',
        'Bahkan tanpa bakat khusus, Anda dapat mencapai hasil besar melalui ketulusan dan konsistensi.',
        'Gunakan rasa keseimbangan Anda untuk memainkan peran mediator bahkan dalam konflik.',
        'Tetapkan tujuan dari perspektif jangka panjang dan terus bekerja dengan mantap. Kesuksesan stabil akan mengikuti.'
      ]
    },
    fortune: {
      wealth: {
        ko: [
          '안정적인 관상은 꾸준한 수입을 의미합니다. 무리한 투자보다는 안정적인 재정 관리를 통해 재물을 모으세요.',
          '특별히 큰 재물운은 없지만 안정적인 수입으로 평생 부족함 없이 살 수 있습니다.',
          '꾸준한 노력과 성실함으로 재정적 안정을 확보할 수 있습니다. 급하게 돈을 벌려 하지 마세요.',
          '균형 잡힌 성격은 재정 관리에도 도움이 됩니다. 불필요한 지출을 피하고 계획적으로 저축하세요.',
          '안정적인 직장 생활을 통해 꾸준한 수입을 얻을 수 있습니다. 이직보다는 현재 자리에서 성장하세요.',
          '장기적인 관점에서 재정 계획을 세우고 꾸준히 실천하면 재물이 늘어날 것입니다.',
          '특별한 투자보다는 저축과 안정적인 수입원 확보에 집중하세요.',
          '규칙적인 생활과 절약 정신이 재물을 늘리는 가장 안전한 방법입니다.',
          '급하게 큰 돈을 벌려 하지 말고 꾸준한 노력으로 재정적 여유를 만들어가세요.',
          '당신의 관상은 평생 안정적인 재정 상태를 보장합니다. 포기하지 말고 꾸준히 노력하세요.'
        ],
        en: [
          'Stable physiognomy means steady income. Accumulate wealth through stable financial management rather than risky investments.',
          'While not exceptionally wealthy, stable income allows living without want throughout life.',
          'Can secure financial stability through steady effort and sincerity. Don\'t try to make money quickly.',
          'Balanced personality helps in financial management. Avoid unnecessary expenses and save systematically.',
          'Can gain steady income through stable work life. Grow in current position rather than changing jobs.',
          'Making long-term financial plans and practicing them steadily will increase wealth.',
          'Focus on savings and securing stable income sources rather than special investments.',
          'Regular lifestyle and frugal spirit are the safest ways to increase wealth.',
          'Don\'t try to make big money quickly, but create financial leeway through steady effort.',
          'Your physiognomy guarantees stable finances throughout life. Don\'t give up, keep working steadily.'
        ],
        ja: [
          '安定した観相は着実な収入を意味します。無理な投資よりも安定した財政管理を通じて財産を蓄積してください。',
          '特別に大きな財運はありませんが、安定した収入で一生不足なく生きることができます。',
          '着実な努力と誠実さで財政的安定を確保できます。急いでお金を稼ごうとしないでください。',
          'バランスの取れた性格は財政管理にも役立ちます。不要な支出を避け、計画的に貯蓄してください。',
          '安定した職場生活を通じて着実な収入を得ることができます。転職よりも現在の場所で成長してください。',
          '長期的な観点から財政計画を立て、着実に実践すれば財産が増えるでしょう。',
          '特別な投資よりも貯蓄と安定した収入源の確保に集中してください。',
          '規則正しい生活と倹約精神が財産を増やす最も安全な方法です。',
          '急いで大きなお金を稼ごうとせず、着実な努力で財政的な余裕を作ってください。',
          'あなたの観相は一生安定した財政状態を保証します。諦めずに着実に努力してください。'
        ],
        'zh-CN': [
          '稳定的面相意味着稳定收入。通过稳定的财务管理而不是冒险投资积累财富。',
          '虽然没有特别大的财运，但稳定收入可以让你终生不匮乏地生活。',
          '通过稳定的努力和真诚可以确保财务稳定。不要试图快速赚钱。',
          '平衡的个性有助于财务管理。避免不必要的支出，有计划地储蓄。',
          '通过稳定的工作生活可以获得稳定收入。在当前职位上成长而不是换工作。',
          '制定长期财务计划并稳步实践，财富会增加。',
          '专注于储蓄和确保稳定的收入来源，而不是特殊投资。',
          '规律的生活和节俭精神是增加财富最安全的方法。',
          '不要试图快速赚大钱，而是通过稳定的努力创造财务余裕。',
          '你的面相保证你终生稳定的财务状况。不要放弃，继续稳定努力。'
        ],
        'zh-TW': [
          '穩定的面相意味著穩定收入。通過穩定的財務管理而不是冒險投資積累財富。',
          '雖然沒有特別大的財運，但穩定收入可以讓你終生不匱乏地生活。',
          '通過穩定的努力和真誠可以確保財務穩定。不要試圖快速賺錢。',
          '平衡的個性有助於財務管理。避免不必要的支出，有計劃地儲蓄。',
          '通過穩定的工作生活可以獲得穩定收入。在當前職位上成長而不是換工作。',
          '制定長期財務計劃並穩步實踐，財富會增加。',
          '專注於儲蓄和確保穩定的收入來源，而不是特殊投資。',
          '規律的生活和節儉精神是增加財富最安全的方法。',
          '不要試圖快速賺大錢，而是通過穩定的努力創造財務餘裕。',
          '你的面相保證你終生穩定的財務狀況。不要放棄，繼續穩定努力。'
        ],
        vi: [
          'Tướng số ổn định có nghĩa là thu nhập ổn định. Tích lũy của cải thông qua quản lý tài chính ổn định thay vì đầu tư rủi ro.',
          'Mặc dù không đặc biệt giàu có, nhưng thu nhập ổn định cho phép sống không thiếu thốn suốt đời.',
          'Có thể đảm bảo sự ổn định tài chính thông qua nỗ lực ổn định và sự chân thành. Đừng cố gắng kiếm tiền nhanh.',
          'Tính cách cân bằng giúp ích trong quản lý tài chính. Tránh chi tiêu không cần thiết và tiết kiệm một cách có hệ thống.',
          'Có thể có thu nhập ổn định thông qua cuộc sống công việc ổn định. Phát triển ở vị trí hiện tại thay vì thay đổi công việc.',
          'Lập kế hoạch tài chính dài hạn và thực hành chúng một cách ổn định sẽ tăng của cải.',
          'Tập trung vào tiết kiệm và đảm bảo nguồn thu nhập ổn định thay vì đầu tư đặc biệt.',
          'Lối sống đều đặn và tinh thần tiết kiệm là những cách an toàn nhất để tăng của cải.',
          'Đừng cố gắng kiếm nhiều tiền nhanh, mà hãy tạo ra dư dả tài chính thông qua nỗ lực ổn định.',
          'Tướng số của bạn đảm bảo tài chính ổn định suốt đời. Đừng từ bỏ, hãy tiếp tục làm việc ổn định.'
        ],
        id: [
          'Fisiognomi stabil berarti pendapatan yang mantap. Akumulasi kekayaan melalui manajemen keuangan yang stabil daripada investasi berisiko.',
          'Meskipun tidak secara khusus kaya, pendapatan stabil memungkinkan hidup tanpa kekurangan sepanjang hidup.',
          'Dapat mengamankan stabilitas keuangan melalui upaya yang mantap dan ketulusan. Jangan mencoba menghasilkan uang dengan cepat.',
          'Kepribadian seimbang membantu dalam manajemen keuangan. Hindari pengeluaran yang tidak perlu dan hemat secara sistematis.',
          'Dapat memperoleh pendapatan yang mantap melalui kehidupan kerja yang stabil. Tumbuh di posisi saat ini daripada berganti pekerjaan.',
          'Membuat rencana keuangan jangka panjang dan mempraktikkannya dengan mantap akan meningkatkan kekayaan.',
          'Fokus pada tabungan dan mengamankan sumber pendapatan yang stabil daripada investasi khusus.',
          'Gaya hidup teratur dan semangat hemat adalah cara paling aman untuk meningkatkan kekayaan.',
          'Jangan mencoba menghasilkan banyak uang dengan cepat, tetapi ciptakan kelonggaran keuangan melalui upaya yang mantap.',
          'Fisiognomi Anda menjamin keuangan stabil sepanjang hidup. Jangan menyerah, terus bekerja dengan mantap.'
        ]
      },
      love: {
        ko: [
          '안정적인 관상은 안정적인 관계를 의미합니다. 급하게 상대방을 찾지 말고 천천히 만나보세요.',
          '특별히 화려한 매력은 없지만 성실하고 신뢰할 수 있는 모습이 좋은 인상을 줍니다.',
          '꾸준함과 성실함이 연애 관계에서도 강점입니다. 상대방에게 안정감을 줄 수 있습니다.',
          '규칙적인 생활과 안정적인 일상이 상대방에게 신뢰를 줍니다.',
          '급하게 연애를 시작하지 말고 진지한 관계를 만들어가세요. 시간이 지나면 좋은 인연을 만날 수 있습니다.',
          '안정적인 성격은 장기적인 관계에 유리합니다. 짧은 만남보다는 진지한 사랑을 추구하세요.',
          '특별한 로맨틱한 재능은 없어도 성실함으로 상대방의 마음을 얻을 수 있습니다.',
          '균형 감각이 있어 연애에서도 갈등을 잘 해결할 수 있는 능력이 있습니다.',
          '안정적인 재정 상태가 연애 관계에도 긍정적인 영향을 미칩니다.',
          '당신의 관상은 결혼 후에도 안정적인 가정을 이룰 수 있음을 의미합니다. 서두르지 말고 좋은 인연을 기다리세요.'
        ],
        en: [
          'Stable physiognomy means stable relationships. Don\'t rush to find a partner, meet slowly.',
          'While not exceptionally charming, sincere and trustworthy appearance leaves good impression.',
          'Consistency and sincerity are strengths in relationships as well. Can give stability to partner.',
          'Regular lifestyle and stable daily life give trust to partner.',
          'Don\'t rush into relationships, build serious relationships. Over time, you can meet good relationships.',
          'Stable personality is favorable for long-term relationships. Pursue serious love rather than brief encounters.',
          'Even without special romantic talent, can win partner\'s heart through sincerity.',
          'Has sense of balance, can solve conflicts well in relationships too.',
          'Stable finances positively affect relationships as well.',
          'Your physiognomy means you can build stable family even after marriage. Don\'t rush, wait for good relationships.'
        ],
        ja: [
          '安定した観相は安定した関係を意味します。急いで相手を探さず、ゆっくり会ってください。',
          '特別に華やかな魅力はありませんが、誠実で信頼できる姿が良い印象を与えます。',
          '着実さと誠実さは恋愛関係でも強みです。相手に安定感を与えることができます。',
          '規則正しい生活と安定した日常が相手に信頼を与えます。',
          '急いで恋愛を始めず、真剣な関係を作ってください。時間が経てば良い縁に会えるでしょう。',
          '安定した性格は長期的な関係に有利です。短い出会いよりも真剣な愛を追求してください。',
          '特別なロマンチックな才能がなくても誠実さで相手の心を得ることができます。',
          'バランス感覚があり、恋愛でも対立をよく解決できる能力があります。',
          '安定した財政状態が恋愛関係にも肯定的な影響を与えます。',
          'あなたの観相は結婚後も安定した家庭を築くことができることを意味します。急がず、良い縁を待ってください。'
        ],
        'zh-CN': [
          '稳定的面相意味着稳定的关系。不要匆忙寻找伴侣，慢慢相遇。',
          '虽然没有特别迷人的魅力，但真诚和值得信赖的外表会留下好印象。',
          '坚持和真诚在关系中也是优势。可以给伴侣稳定感。',
          '规律的生活和稳定的日常生活给伴侣信任。',
          '不要匆忙开始恋爱，建立认真的关系。随着时间的推移，你会遇到良好的关系。',
          '稳定的个性有利于长期关系。追求认真的爱情而不是短暂的相遇。',
          '即使没有特殊的浪漫天赋，也可以通过真诚赢得伴侣的心。',
          '有平衡感，在关系中也能够很好地解决冲突。',
          '稳定的财务状况也对关系产生积极影响。',
          '你的面相意味着即使在结婚后也能建立一个稳定的家庭。不要匆忙，等待良好的关系。'
        ],
        'zh-TW': [
          '穩定的面相意味著穩定的關係。不要匆忙尋找伴侶，慢慢相遇。',
          '雖然沒有特別迷人的魅力，但真誠和值得信賴的外表會留下好印象。',
          '堅持和真誠在關係中也是優勢。可以給伴侶穩定感。',
          '規律的生活和穩定的日常生活給伴侶信任。',
          '不要匆忙開始戀愛，建立認真的關係。隨著時間的推移，你會遇到良好的關係。',
          '穩定的個性有利於長期關係。追求認真的愛情而不是短暫的相遇。',
          '即使沒有特殊的浪漫天賦，也可以通過真誠贏得伴侶的心。',
          '有平衡感，在關係中也能夠很好地解決衝突。',
          '穩定的財務狀況也對關係產生積極影響。',
          '你的面相意味著即使在結婚後也能建立一個穩定的家庭。不要匆忙，等待良好的關係。'
        ],
        vi: [
          'Tướng số ổn định có nghĩa là các mối quan hệ ổn định. Đừng vội vàng tìm đối tác, hãy gặp gỡ từ từ.',
          'Mặc dù không đặc biệt quyến rũ, nhưng vẻ ngoài chân thành và đáng tin cậy để lại ấn tượng tốt.',
          'Tính kiên trì và chân thành cũng là điểm mạnh trong các mối quan hệ. Có thể mang lại cảm giác ổn định cho đối tác.',
          'Lối sống đều đặn và cuộc sống hàng ngày ổn định mang lại sự tin tưởng cho đối tác.',
          'Đừng vội vàng bắt đầu mối quan hệ, hãy xây dựng các mối quan hệ nghiêm túc. Theo thời gian, bạn có thể gặp được các mối quan hệ tốt.',
          'Tính cách ổn định thuận lợi cho các mối quan hệ lâu dài. Theo đuổi tình yêu nghiêm túc thay vì những cuộc gặp gỡ ngắn ngủi.',
          'Ngay cả khi không có tài năng lãng mạn đặc biệt, bạn có thể chinh phục trái tim đối tác thông qua sự chân thành.',
          'Có cảm giác cân bằng, cũng có thể giải quyết xung đột tốt trong các mối quan hệ.',
          'Tài chính ổn định cũng ảnh hưởng tích cực đến các mối quan hệ.',
          'Tướng số của bạn có nghĩa là bạn có thể xây dựng một gia đình ổn định ngay cả sau khi kết hôn. Đừng vội vàng, hãy chờ đợi các mối quan hệ tốt.'
        ],
        id: [
          'Fisiognomi stabil berarti hubungan yang stabil. Jangan terburu-buru mencari pasangan, temui perlahan.',
          'Meskipun tidak sangat menawan, penampilan yang tulus dan dapat dipercaya meninggalkan kesan yang baik.',
          'Konsistensi dan ketulusan juga merupakan kekuatan dalam hubungan. Dapat memberikan stabilitas pada pasangan.',
          'Gaya hidup teratur dan kehidupan sehari-hari yang stabil memberikan kepercayaan kepada pasangan.',
          'Jangan terburu-buru memulai hubungan, bangun hubungan yang serius. Seiring waktu, Anda dapat bertemu hubungan yang baik.',
          'Kepribadian yang stabil menguntungkan untuk hubungan jangka panjang. Mengejar cinta yang serius daripada pertemuan singkat.',
          'Bahkan tanpa bakat romantis khusus, dapat memenangkan hati pasangan melalui ketulusan.',
          'Memiliki rasa keseimbangan, dapat menyelesaikan konflik dengan baik dalam hubungan juga.',
          'Keuangan stabil juga mempengaruhi hubungan secara positif.',
          'Fisiognomi Anda berarti Anda dapat membangun keluarga yang stabil bahkan setelah menikah. Jangan terburu-buru, tunggu hubungan yang baik.'
        ]
      },
      success: {
        ko: [
          '안정적인 관상은 꾸준한 성공을 의미합니다. 급하게 큰 성과를 내려 하지 말고 차근차근 나아가세요.',
          '특별히 뛰어난 재능은 없지만 꾸준한 노력과 성실함으로 원하는 목표를 달성할 수 있습니다.',
          '안정적인 직장 생활을 통해 꾸준한 성장을 이루어갈 수 있습니다. 이직보다는 현재 자리에서 발전하세요.',
          '규칙적인 생활과 장기적인 계획이 성공의 열쇠입니다. 단기적인 이익보다는 안정을 추구하세요.',
          '꾸준함과 성실함이 모든 분야에서 성공의 기반이 됩니다. 포기하지 말고 계속 노력하세요.',
          '급하게 성공하려 하지 말고 한 걸음씩 나아가세요. 시간이 지나면 원하는 결과를 얻을 수 있습니다.',
          '안정적인 성격은 팀워크가 중요한 분야에서 강점이 됩니다. 협력적인 태도로 성공을 만들어가세요.',
          '특별한 재능이 없어도 성실함과 꾸준함으로 큰 성과를 낼 수 있습니다.',
          '균형감각을 활용하여 갈등 상황에서도 중재자 역할을 할 수 있습니다.',
          '당신의 관상은 평생 안정적인 성공을 보장합니다. 급하게 서두르지 말고 꾸준히 노력하세요.'
        ],
        en: [
          'Stable physiognomy means steady success. Don\'t try to achieve big results quickly, but move forward step by step.',
          'While not exceptionally talented, can achieve desired goals through steady effort and sincerity.',
          'Can achieve steady growth through stable work life. Develop in current position rather than changing jobs.',
          'Regular lifestyle and long-term planning are keys to success. Pursue stability over short-term gains.',
          'Consistency and sincerity are foundation of success in all fields. Don\'t give up, keep working.',
          'Don\'t try to succeed quickly, but move forward step by step. Over time, you can achieve desired results.',
          'Stable personality is strength in fields where teamwork is important. Create success with cooperative attitude.',
          'Even without special talent, can achieve great results through sincerity and consistency.',
          'Can play mediator role even in conflicts by using sense of balance.',
          'Your physiognomy guarantees stable success throughout life. Don\'t rush, keep working steadily.'
        ],
        ja: [
          '安定した観相は着実な成功を意味します。急いで大きな成果を出そうとせず、着実に前進してください。',
          '特別に優れた才能はありませんが、着実な努力と誠実さで望む目標を達成できます。',
          '安定した職場生活を通じて着実な成長を成し遂げることができます。転職よりも現在の場所で発展してください。',
          '規則正しい生活と長期的な計画が成功の鍵です。短期的な利益よりも安定を追求してください。',
          '着実さと誠実さがすべての分野で成功の基盤になります。諦めずに努力を続けてください。',
          '急いで成功しようとせず、一歩ずつ前進してください。時間が経てば望む結果を得ることができます。',
          '安定した性格はチームワークが重要な分野で強みになります。協力的な態度で成功を作ってください。',
          '特別な才能がなくても誠実さと着実さで大きな成果を出すことができます。',
          'バランス感覚を活用して対立状況でも調停者の役割を果たすことができます。',
          'あなたの観相は一生安定した成功を保証します。急がずに着実に努力してください。'
        ],
        'zh-CN': [
          '稳定的面相意味着稳定的成功。不要试图快速取得大成果，而要一步一步前进。',
          '虽然没有特别出色的才能，但通过稳定的努力和真诚可以实现想要的目标。',
          '通过稳定的工作生活可以实现稳定增长。在当前职位上发展而不是换工作。',
          '规律的生活和长期计划是成功的关键。追求稳定而不是短期利益。',
          '坚持和真诚是所有领域成功的基础。不要放弃，继续努力。',
          '不要试图快速成功，而要一步一步前进。随着时间的推移，你可以获得想要的结果。',
          '稳定的个性在团队合作重要的领域是优势。以合作的态度创造成功。',
          '即使没有特殊才能，也可以通过真诚和坚持取得巨大成果。',
          '利用平衡感在冲突中发挥调解者的作用。',
          '你的面相保证你终生稳定的成功。不要匆忙，继续稳定努力。'
        ],
        'zh-TW': [
          '穩定的面相意味著穩定的成功。不要試圖快速取得大成果，而要一步一步前進。',
          '雖然沒有特別出色的才能，但通過穩定的努力和真誠可以實現想要的目標。',
          '通過穩定的工作生活可以實現穩定增長。在當前職位上發展而不是換工作。',
          '規律的生活和長期計劃是成功的關鍵。追求穩定而不是短期利益。',
          '堅持和真誠是所有領域成功的基礎。不要放棄，繼續努力。',
          '不要試圖快速成功，而要一步一步前進。隨著時間的推移，你可以獲得想要的結果。',
          '穩定的個性在團隊合作重要的領域是優勢。以合作的態度創造成功。',
          '即使沒有特殊才能，也可以通過真誠和堅持取得巨大成果。',
          '利用平衡感在衝突中發揮調解者的作用。',
          '你的面相保證你終生穩定的成功。不要匆忙，繼續穩定努力。'
        ],
        vi: [
          'Tướng số ổn định có nghĩa là thành công ổn định. Đừng cố gắng đạt được kết quả lớn nhanh, mà hãy tiến từng bước một.',
          'Mặc dù không có tài năng đặc biệt, bạn có thể đạt được mục tiêu mong muốn thông qua nỗ lực ổn định và sự chân thành.',
          'Có thể đạt được sự phát triển ổn định thông qua cuộc sống công việc ổn định. Phát triển ở vị trí hiện tại thay vì thay đổi công việc.',
          'Lối sống đều đặn và kế hoạch dài hạn là chìa khóa của thành công. Theo đuổi sự ổn định hơn lợi ích ngắn hạn.',
          'Tính kiên trì và chân thành là nền tảng của thành công trong mọi lĩnh vực. Đừng từ bỏ, hãy tiếp tục làm việc.',
          'Đừng cố gắng thành công nhanh, mà hãy tiến từng bước một. Theo thời gian, bạn có thể đạt được kết quả mong muốn.',
          'Tính cách ổn định là điểm mạnh trong các lĩnh vực nơi làm việc nhóm quan trọng. Tạo ra thành công với thái độ hợp tác.',
          'Ngay cả khi không có tài năng đặc biệt, bạn có thể đạt được kết quả lớn thông qua sự chân thành và kiên trì.',
          'Có thể đóng vai trò hòa giải ngay cả trong xung đột bằng cách sử dụng cảm giác cân bằng.',
          'Tướng số của bạn đảm bảo thành công ổn định suốt đời. Đừng vội vàng, hãy tiếp tục làm việc ổn định.'
        ],
        id: [
          'Fisiognomi stabil berarti kesuksesan yang mantap. Jangan mencoba mencapai hasil besar dengan cepat, tetapi maju selangkah demi selangkah.',
          'Meskipun tidak memiliki bakat khusus, dapat mencapai tujuan yang diinginkan melalui upaya yang mantap dan ketulusan.',
          'Dapat mencapai pertumbuhan yang mantap melalui kehidupan kerja yang stabil. Kembangkan di posisi saat ini daripada berganti pekerjaan.',
          'Gaya hidup teratur dan perencanaan jangka panjang adalah kunci kesuksesan. Kejar stabilitas daripada keuntungan jangka pendek.',
          'Konsistensi dan ketulusan adalah fondasi kesuksesan di semua bidang. Jangan menyerah, terus bekerja.',
          'Jangan mencoba sukses dengan cepat, tetapi maju selangkah demi selangkah. Seiring waktu, Anda dapat mencapai hasil yang diinginkan.',
          'Kepribadian yang stabil adalah kekuatan di bidang di mana kerja tim penting. Ciptakan kesuksesan dengan sikap kooperatif.',
          'Bahkan tanpa bakat khusus, dapat mencapai hasil besar melalui ketulusan dan konsistensi.',
          'Dapat memainkan peran mediator bahkan dalam konflik dengan menggunakan rasa keseimbangan.',
          'Fisiognomi Anda menjamin kesuksesan stabil sepanjang hidup. Jangan terburu-buru, terus bekerja dengan mantap.'
        ]
      }
    }
  },
  {
    id: 5,
    title: {
      ko: '소흉상 - 주의 필요',
      en: 'Small Caution - Needs Attention',
      ja: '小凶相 - 注意必要',
      'zh-CN': '小凶相 - 需要注意',
      'zh-TW': '小凶相 - 需要注意',
      vi: 'Tiểu Hung Tướng - Cần Chú Ý',
      id: 'Nasib Kecil - Perlu Perhatian'
    },
    description: {
      ko: [
        '당신의 얼굴은 약간의 주의가 필요한 상입니다. 하지만 걱정하지 마세요! 관상은 고정된 것이 아니며, 마음가짐과 노력으로 충분히 개선할 수 있습니다. 긍정적인 마음과 꾸준한 자기계발로 운세를 바꿔보세요.',
        '소흉상의 얼굴은 약간의 주의가 필요한 상입니다. 하지만 관상은 변할 수 있으므로, 긍정적인 마음가짐과 노력으로 개선할 수 있습니다.',
        '당신의 얼굴은 주의가 필요한 부분이 있지만, 긍정적인 변화를 만들어낼 수 있습니다. 마음가짐과 노력이 중요합니다.',
        '소흉상의 관상은 완전히 나쁜 것은 아니지만 주의가 필요합니다. 긍정적인 사고와 꾸준한 자기계발로 운세를 개선할 수 있습니다.',
        '얼굴의 일부 특징이 주의를 요하지만, 전체적으로는 긍정적인 변화가 가능합니다. 노력과 인내심으로 운세를 바꿔보세요.',
        '소흉상의 얼굴은 약간의 우려가 있지만, 절망할 필요는 없습니다. 마음가짐과 노력으로 충분히 개선할 수 있습니다.',
        '당신의 얼굴은 주의가 필요한 부분이 있지만, 긍정적인 마음과 꾸준한 노력으로 운세를 바꿀 수 있습니다.',
        '소흉상의 관상은 고정된 것이 아닙니다. 긍정적인 사고와 자기계발로 얼굴의 운세를 개선할 수 있습니다.',
        '얼굴의 일부 특징이 주의를 필요로 하지만, 전체적으로는 성장과 개선의 여지가 있습니다. 긍정적인 마음가짐이 중요합니다.',
        '소흉상의 얼굴은 약간의 주의가 필요하지만, 노력과 인내로 충분히 개선 가능합니다. 긍정적인 변화를 만들어보세요.'
      ],
      en: [
        'Your face shows signs that need some attention. But don\'t worry! Facial features are not fixed, and you can definitely improve them through mindset and effort. Change your fortune with positive thinking and consistent self-development.',
        'A face with small caution signs needs some attention. But physiognomy can change, so you can improve it through positive mindset and effort.',
        'Your face has parts that need attention, but you can create positive changes. Mindset and effort are important.',
        'The physiognomy of small caution is not entirely bad but needs attention. You can improve your fortune through positive thinking and consistent self-development.',
        'Some facial features require attention, but overall, positive changes are possible. Try to change your fortune with effort and patience.',
        'A face with small caution has some concerns, but there\'s no need to despair. You can definitely improve it through mindset and effort.',
        'Your face has parts that need attention, but you can change your fortune with positive thinking and consistent effort.',
        'The physiognomy of small caution is not fixed. You can improve your facial fortune through positive thinking and self-development.',
        'Some facial features require attention, but overall, there is room for growth and improvement. A positive mindset is important.',
        'A face with small caution needs some attention, but it can definitely be improved through effort and patience. Create positive changes.'
      ],
      ja: [
        'あなたの顔は少し注意が必要な相です。しかし心配しないでください！顔相は固定されたものではなく、心構えと努力で十分改善できます。',
        '少し注意が必要な相の顔は気をつける必要があります。しかし観相は変わるので、前向きな心構えと努力で改善できます。',
        'あなたの顔には注意が必要な部分がありますが、前向きな変化を生み出すことができます。心構えと努力が重要です。',
        '小凶相の観相は完全に悪いわけではありませんが注意が必要です。前向きな思考と着実な自己開発で運勢を改善できます。',
        '顔の一部の特徴が注意を必要としますが、全体的には前向きな変化が可能です。努力と忍耐で運勢を変えてみてください。',
        '小凶相の顔は少し懸念がありますが、絶望する必要はありません。心構えと努力で十分改善できます。',
        'あなたの顔には注意が必要な部分がありますが、前向きな思考と着実な努力で運勢を変えることができます。',
        '小凶相の観相は固定されたものではありません。前向きな思考と自己開発で顔の運勢を改善できます。',
        '顔の一部の特徴が注意を必要としますが、全体的には成長と改善の余地があります。前向きな心構えが重要です。',
        '小凶相の顔は少し注意が必要ですが、努力と忍耐で十分改善可能です。前向きな変化を作ってみてください。'
      ],
      'zh-CN': [
        '你的面相需要一些注意。但不要担心！面相不是固定的，通过心态和努力完全可以改善。',
        '需要注意的面相需要一些关注。但面相可以改变，所以你可以通过积极的心态和努力来改善它。',
        '你的脸有需要注意的部分，但你可以创造积极的变化。心态和努力是重要的。',
        '小凶相的面相不是完全坏的，但需要注意。你可以通过积极思考和稳定的自我发展来改善运势。',
        '面部的一些特征需要注意，但总的来说，积极的变化是可能的。尝试用努力和耐心来改变你的运势。',
        '小凶相的脸有一些担忧，但没有必要绝望。你绝对可以通过心态和努力来改善它。',
        '你的脸有需要注意的部分，但你可以通过积极的思考和稳定的努力来改变运势。',
        '小凶相的面相不是固定的。你可以通过积极的思考和自我发展来改善面部运势。',
        '一些面部特征需要注意，但总的来说，有成长和改进的空间。积极的心态是重要的。',
        '小凶相的脸需要注意，但绝对可以通过努力和耐心来改善。创造积极的变化。'
      ],
      'zh-TW': [
        '你的面相需要一些注意。但不要擔心！面相不是固定的，通過心態和努力完全可以改善。',
        '需要注意的面相需要一些關注。但面相可以改變，所以你可以通過積極的心態和努力來改善它。',
        '你的臉有需要注意的部分，但你可以創造積極的變化。心態和努力是重要的。',
        '小凶相的面相不是完全壞的，但需要注意。你可以通過積極思考和穩定的自我發展來改善運勢。',
        '面部的一些特徵需要注意，但總的來說，積極的變化是可能的。嘗試用努力和耐心來改變你的運勢。',
        '小凶相的臉有一些擔憂，但沒有必要絕望。你絕對可以通過心態和努力來改善它。',
        '你的臉有需要注意的部分，但你可以通過積極的思考和穩定的努力來改變運勢。',
        '小凶相的面相不是固定的。你可以通過積極的思考和自我發展來改善面部運勢。',
        '一些面部特徵需要注意，但總的來說，有成長和改進的空間。積極的心態是重要的。',
        '小凶相的臉需要注意，但絕對可以通過努力和耐心來改善。創造積極的變化。'
      ],
      vi: [
        'Khuôn mặt của bạn cho thấy những dấu hiệu cần chú ý. Nhưng đừng lo lắng! Đặc điểm khuôn mặt không cố định và bạn hoàn toàn có thể cải thiện chúng thông qua tư duy và nỗ lực.',
        'Khuôn mặt với dấu hiệu cần chú ý nhỏ cần một số sự chú ý. Nhưng tướng số có thể thay đổi, vì vậy bạn có thể cải thiện nó thông qua tư duy tích cực và nỗ lực.',
        'Khuôn mặt của bạn có các phần cần chú ý, nhưng bạn có thể tạo ra những thay đổi tích cực. Tư duy và nỗ lực là quan trọng.',
        'Tướng số cần chú ý nhỏ không hoàn toàn xấu nhưng cần chú ý. Bạn có thể cải thiện vận may của mình thông qua suy nghĩ tích cực và phát triển bản thân ổn định.',
        'Một số đặc điểm trên khuôn mặt cần chú ý, nhưng nhìn chung, những thay đổi tích cực là có thể. Hãy thử thay đổi vận may của bạn bằng nỗ lực và sự kiên nhẫn.',
        'Khuôn mặt cần chú ý nhỏ có một số mối lo ngại, nhưng không cần tuyệt vọng. Bạn chắc chắn có thể cải thiện nó thông qua tư duy và nỗ lực.',
        'Khuôn mặt của bạn có các phần cần chú ý, nhưng bạn có thể thay đổi vận may của mình bằng suy nghĩ tích cực và nỗ lực ổn định.',
        'Tướng số cần chú ý nhỏ không cố định. Bạn có thể cải thiện vận may khuôn mặt của mình thông qua suy nghĩ tích cực và phát triển bản thân.',
        'Một số đặc điểm trên khuôn mặt cần chú ý, nhưng nhìn chung, có chỗ cho sự phát triển và cải thiện. Tư duy tích cực là quan trọng.',
        'Khuôn mặt cần chú ý nhỏ cần một số sự chú ý, nhưng nó chắc chắn có thể được cải thiện thông qua nỗ lực và sự kiên nhẫn. Hãy tạo ra những thay đổi tích cực.'
      ],
      id: [
        'Wajah Anda menunjukkan tanda-tanda yang perlu diperhatikan. Tapi jangan khawatir! Fitur wajah tidak tetap dan Anda pasti bisa memperbaikinya melalui pola pikir dan usaha.',
        'Wajah dengan tanda peringatan kecil memerlukan perhatian. Tapi fisiognomi bisa berubah, jadi Anda bisa memperbaikinya melalui pola pikir positif dan usaha.',
        'Wajah Anda memiliki bagian yang perlu diperhatikan, tetapi Anda bisa menciptakan perubahan positif. Pola pikir dan usaha adalah penting.',
        'Fisiognomi peringatan kecil tidak sepenuhnya buruk tetapi memerlukan perhatian. Anda bisa memperbaiki nasib Anda melalui pemikiran positif dan pengembangan diri yang konsisten.',
        'Beberapa fitur wajah memerlukan perhatian, tetapi secara keseluruhan, perubahan positif adalah mungkin. Coba ubah nasib Anda dengan usaha dan kesabaran.',
        'Wajah dengan peringatan kecil memiliki beberapa kekhawatiran, tetapi tidak perlu putus asa. Anda pasti bisa memperbaikinya melalui pola pikir dan usaha.',
        'Wajah Anda memiliki bagian yang perlu diperhatikan, tetapi Anda bisa mengubah nasib Anda dengan pemikiran positif dan usaha yang konsisten.',
        'Fisiognomi peringatan kecil tidak tetap. Anda bisa memperbaiki nasib wajah Anda melalui pemikiran positif dan pengembangan diri.',
        'Beberapa fitur wajah memerlukan perhatian, tetapi secara keseluruhan, ada ruang untuk pertumbuhan dan perbaikan. Pola pikir positif adalah penting.',
        'Wajah dengan peringatan kecil memerlukan perhatian, tetapi pasti bisa diperbaiki melalui usaha dan kesabaran. Ciptakan perubahan positif.'
      ]
    },
    emoji: '⚠️',
    scoreRange: [40, 59],
    strengths: {
      ko: ['개선 의지', '학습 능력', '적응력', '성장 가능성'],
      en: ['Improvement Will', 'Learning Ability', 'Adaptability', 'Growth Potential'],
      ja: ['改善意欲', '学習能力', '適応力', '成長可能性'],
      'zh-CN': ['改进意愿', '学习能力', '适应力', '成长潜力'],
      'zh-TW': ['改進意願', '學習能力', '適應力', '成長潛力'],
      vi: ['Ý chí cải thiện', 'Khả năng học hỏi', 'Khả năng thích ứng', 'Tiềm năng phát triển'],
      id: ['Kemauan Perbaikan', 'Kemampuan Belajar', 'Adaptabilitas', 'Potensi Pertumbuhan']
    },
    recommendations: {
      ko: ['긍정적 마음가짐', '꾸준한 자기계발', '좋은 습관 형성', '주변 환경 개선'],
      en: ['Positive Mindset', 'Consistent Self-Development', 'Form Good Habits', 'Improve Surroundings'],
      ja: ['ポジティブな心構え', '着実な自己啓発', '良い習慣の形成', '周囲の環境改善'],
      'zh-CN': ['积极心态', '持续自我发展', '养成好习惯', '改善周围环境'],
      'zh-TW': ['積極心態', '持續自我發展', '養成好習慣', '改善周圍環境'],
      vi: ['Tư duy tích cực', 'Phát triển bản thân liên tục', 'Hình thành thói quen tốt', 'Cải thiện môi trường xung quanh'],
      id: ['Pola Pikir Positif', 'Pengembangan Diri Konsisten', 'Bentuk Kebiasaan Baik', 'Perbaiki Lingkungan']
    },
    personality: {
      ko: [
        '현재는 약간의 주의가 필요한 상태이지만 개선 의지가 강한 성격입니다.',
        '학습 능력이 뛰어나 노력을 통해 많이 발전할 수 있는 가능성이 있습니다.',
        '적응력이 있어 환경이나 상황에 따라 자신을 변화시킬 수 있는 능력이 있습니다.',
        '현재의 부족함을 인정하고 개선하려는 마음가짐이 있는 성격입니다.',
        '긍정적인 생각을 하려고 노력하며 자기계발에 관심이 많습니다.',
        '다소 조심스러운 성격이지만 신중한 판단력을 가지고 있습니다.',
        '현재 상황을 개선하기 위한 방법을 찾으려는 적극적인 마음을 가지고 있습니다.',
        '성장 가능성이 높은 성격으로 노력하면 큰 발전을 이룰 수 있습니다.',
        '부정적인 상황에서도 긍정적인 면을 찾으려는 노력을 합니다.',
        '현재는 아쉬운 부분이 있지만 지속적인 노력으로 많은 변화가 가능한 성격입니다.'
      ],
      en: [
        'Currently needs some attention but has strong will to improve.',
        'Excellent learning ability, has high potential to develop much through effort.',
        'Adaptable, can change self according to environment or situations.',
        'Personality that acknowledges current shortcomings and has mindset to improve.',
        'Strives for positive thinking, very interested in self-development.',
        'Somewhat cautious personality but has prudent judgment.',
        'Has active mind to find ways to improve current situation.',
        'High growth potential personality, can achieve great development with effort.',
        'Strives to find positive aspects even in negative situations.',
        'Currently has some shortcomings but personality capable of much change through continuous effort.'
      ],
      ja: [
        '現在は少し注意が必要な状態ですが、改善意欲が強い性格です。',
        '学習能力が優れており、努力を通じて大きく発展する可能性があります。',
        '適応力があり、環境や状況に応じて自分を変化させることができます。',
        '現在の不足を認め、改善しようとする心構えがある性格です。',
        'ポジティブな考えをしようと努力し、自己啓発に関心が多いです。',
        'やや慎重な性格ですが、慎重な判断力を持っています。',
        '現在の状況を改善するための方法を見つけようとする積極的な心を持っています。',
        '成長可能性が高い性格で、努力すれば大きな発展を成し遂げられます。',
        '否定的な状況でもポジティブな面を見つけようと努力します。',
        '現在は少し残念な部分がありますが、継続的な努力で多くの変化が可能な性格です。'
      ],
      'zh-CN': [
        '目前需要一些注意，但有强烈的改进意愿。',
        '出色的学习能力，通过努力有很大的发展潜力。',
        '有适应力，可以根据环境或情况改变自己。',
        '承认当前不足并具有改进心态的个性。',
        '努力积极思考，对自我发展非常感兴趣。',
        '有些谨慎的个性，但有明智的判断力。',
        '有积极的心态来寻找改善当前情况的方法。',
        '高成长潜力的个性，通过努力可以实现很大发展。',
        '即使在消极情况下也努力寻找积极的方面。',
        '目前有一些不足，但通过持续努力可以实现很多改变的个性。'
      ],
      'zh-TW': [
        '目前需要一些注意，但有強烈的改進意願。',
        '出色的學習能力，通過努力有很大的發展潛力。',
        '有適應力，可以根據環境或情況改變自己。',
        '承認當前不足並具有改進心態的個性。',
        '努力積極思考，對自我發展非常感興趣。',
        '有些謹慎的個性，但有明智的判斷力。',
        '有積極的心態來尋找改善當前情況的方法。',
        '高成長潛力的個性，通過努力可以實現很大發展。',
        '即使在消極情況下也努力尋找積極的方面。',
        '目前有一些不足，但通過持續努力可以實現很多改變的個性。'
      ],
      vi: [
        'Hiện tại cần một chút chú ý nhưng có ý chí mạnh mẽ để cải thiện.',
        'Khả năng học hỏi xuất sắc, có tiềm năng cao phát triển nhiều thông qua nỗ lực.',
        'Có khả năng thích ứng, có thể thay đổi bản thân theo môi trường hoặc tình huống.',
        'Tính cách thừa nhận thiếu sót hiện tại và có tư duy cải thiện.',
        'Cố gắng suy nghĩ tích cực, rất quan tâm đến phát triển bản thân.',
        'Tính cách hơi thận trọng nhưng có khả năng phán đoán thận trọng.',
        'Có tinh thần tích cực để tìm cách cải thiện tình huống hiện tại.',
        'Tính cách có tiềm năng phát triển cao, có thể đạt được sự phát triển lớn với nỗ lực.',
        'Cố gắng tìm khía cạnh tích cực ngay cả trong tình huống tiêu cực.',
        'Hiện tại có một số thiếu sót nhưng tính cách có khả năng thay đổi nhiều thông qua nỗ lực liên tục.'
      ],
      id: [
        'Saat ini membutuhkan perhatian tetapi memiliki kemauan kuat untuk memperbaiki.',
        'Kemampuan belajar yang sangat baik, memiliki potensi tinggi untuk berkembang banyak melalui usaha.',
        'Adaptif, dapat mengubah diri sesuai lingkungan atau situasi.',
        'Kepribadian yang mengakui kekurangan saat ini dan memiliki pola pikir untuk memperbaiki.',
        'Berusaha untuk berpikir positif, sangat tertarik pada pengembangan diri.',
        'Kepribadian yang agak hati-hati tetapi memiliki penilaian yang hati-hati.',
        'Memiliki pikiran aktif untuk menemukan cara memperbaiki situasi saat ini.',
        'Kepribadian dengan potensi pertumbuhan tinggi, dapat mencapai perkembangan besar dengan usaha.',
        'Berusaha menemukan aspek positif bahkan dalam situasi negatif.',
        'Saat ini memiliki beberapa kekurangan tetapi kepribadian yang mampu banyak perubahan melalui usaha berkelanjutan.'
      ]
    },
    advice: {
      ko: [
        '관상은 마음가짐으로 바뀝니다. 긍정적인 생각과 꾸준한 노력으로 더 나은 운세를 만들어가세요.',
        '현재 약간의 주의가 필요하지만 걱정하지 마세요. 관상은 고정된 것이 아니며 노력으로 개선할 수 있습니다.',
        '긍정적인 마음가짐이 가장 중요합니다. 부정적인 생각을 줄이고 긍정적인 습관을 만들어보세요.',
        '꾸준한 자기계발이 운세를 바꾸는 열쇠입니다. 작은 변화부터 시작하여 점진적으로 개선하세요.',
        '좋은 습관을 형성하는 것이 중요합니다. 규칙적인 생활과 긍정적인 행동이 관상을 좋게 만듭니다.',
        '주변 환경을 개선하세요. 깨끗한 공간과 긍정적인 사람들과의 교류가 운세에 도움이 됩니다.',
        '현재 상황을 포기하지 마세요. 작은 개선이라도 지속하면 큰 변화를 만들 수 있습니다.',
        '학습과 성장에 집중하세요. 새로운 것을 배우고 자신을 발전시키는 것이 운세 개선의 방법입니다.',
        '타인에게 친절하게 대하세요. 좋은 마음을 가지고 행동하면 그 마음이 관상으로 나타납니다.',
        '지금부터 시작하세요. 과거는 바꿀 수 없지만 미래는 지금의 노력으로 바꿀 수 있습니다.'
      ],
      en: [
        'Facial features change with mindset. Create better fortune through positive thinking and consistent effort.',
        'Currently needs some attention but don\'t worry. Facial features are not fixed and can be improved through effort.',
        'Positive mindset is most important. Reduce negative thoughts and create positive habits.',
        'Consistent self-development is key to changing fortune. Start with small changes and improve gradually.',
        'Forming good habits is important. Regular lifestyle and positive actions improve facial features.',
        'Improve your surroundings. Clean space and interaction with positive people help fortune.',
        'Don\'t give up on current situation. Even small improvements, if sustained, can create big changes.',
        'Focus on learning and growth. Learning new things and developing yourself is the way to improve fortune.',
        'Be kind to others. Acting with good heart makes that heart appear in facial features.',
        'Start now. You can\'t change the past but can change the future through current effort.'
      ],
      ja: [
        '顔相は心構えで変わります。ポジティブな考えと着実な努力でより良い運勢を作り上げてください。',
        '現在少し注意が必要ですが、心配しないでください。顔相は固定されたものではなく、努力で改善できます。',
        'ポジティブな心構えが最も重要です。否定的な考えを減らし、ポジティブな習慣を作ってください。',
        '着実な自己啓発が運勢を変える鍵です。小さな変化から始めて段階的に改善してください。',
        '良い習慣を形成することが重要です。規則正しい生活とポジティブな行動が顔相を良くします。',
        '周囲の環境を改善してください。清潔な空間とポジティブな人々との交流が運勢に役立ちます。',
        '現在の状況を諦めないでください。小さな改善でも持続すれば大きな変化を作ることができます。',
        '学習と成長に集中してください。新しいことを学び、自分を発展させることが運勢改善の方法です。',
        '他人に親切に接してください。良い心を持って行動すれば、その心が顔相に現れます。',
        '今から始めてください。過去は変えられませんが、未来は今の努力で変えることができます。'
      ],
      'zh-CN': [
        '面相会因心态而改变。通过积极思考和持续努力创造更好的运势。',
        '目前需要一些注意，但不要担心。面相不是固定的，可以通过努力改善。',
        '积极的心态最重要。减少消极想法，养成积极的习惯。',
        '持续的自我发展是改变运势的关键。从小改变开始，逐步改善。',
        '养成好习惯很重要。规律的生活和积极的行为会改善面相。',
        '改善你的周围环境。干净的空间和与积极的人的互动有助于运势。',
        '不要放弃当前的情况。即使是很小的改进，如果持续下去，也能创造大变化。',
        '专注于学习和成长。学习新事物和发展自己是改善运势的方法。',
        '善待他人。以善良的心行动会让那种心体现在面相上。',
        '现在开始。你无法改变过去，但可以通过现在的努力改变未来。'
      ],
      'zh-TW': [
        '面相會因心態而改變。通過積極思考和持續努力創造更好的運勢。',
        '目前需要一些注意，但不要擔心。面相不是固定的，可以通過努力改善。',
        '積極的心態最重要。減少消極想法，養成積極的習慣。',
        '持續的自我發展是改變運勢的關鍵。從小改變開始，逐步改善。',
        '養成好習慣很重要。規律的生活和積極的行為會改善面相。',
        '改善你的周圍環境。乾淨的空間和與積極的人的互動有助於運勢。',
        '不要放棄當前的情況。即使是很小的改進，如果持續下去，也能創造大變化。',
        '專注於學習和成長。學習新事物和發展自己是改善運勢的方法。',
        '善待他人。以善良的心行動會讓那種心體現在面相上。',
        '現在開始。你無法改變過去，但可以通過現在的努力改變未來。'
      ],
      vi: [
        'Đặc điểm khuôn mặt thay đổi theo tư duy. Hãy tạo ra vận mệnh tốt hơn thông qua suy nghĩ tích cực và nỗ lực liên tục.',
        'Hiện tại cần một chút chú ý nhưng đừng lo lắng. Đặc điểm khuôn mặt không cố định và có thể cải thiện thông qua nỗ lực.',
        'Tư duy tích cực là quan trọng nhất. Giảm suy nghĩ tiêu cực và tạo thói quen tích cực.',
        'Phát triển bản thân liên tục là chìa khóa thay đổi vận mệnh. Bắt đầu từ những thay đổi nhỏ và cải thiện dần dần.',
        'Hình thành thói quen tốt là quan trọng. Lối sống đều đặn và hành động tích cực cải thiện đặc điểm khuôn mặt.',
        'Cải thiện môi trường xung quanh. Không gian sạch sẽ và tương tác với những người tích cực giúp vận mệnh.',
        'Đừng từ bỏ tình huống hiện tại. Ngay cả những cải thiện nhỏ, nếu được duy trì, có thể tạo ra thay đổi lớn.',
        'Tập trung vào học hỏi và phát triển. Học những điều mới và phát triển bản thân là cách cải thiện vận mệnh.',
        'Hãy tốt bụng với người khác. Hành động với trái tim tốt làm cho trái tim đó thể hiện trong đặc điểm khuôn mặt.',
        'Bắt đầu ngay bây giờ. Bạn không thể thay đổi quá khứ nhưng có thể thay đổi tương lai thông qua nỗ lực hiện tại.'
      ],
      id: [
        'Fitur wajah berubah dengan pola pikir. Ciptakan nasib yang lebih baik melalui pemikiran positif dan usaha yang konsisten.',
        'Saat ini membutuhkan perhatian tetapi jangan khawatir. Fitur wajah tidak tetap dan dapat diperbaiki melalui usaha.',
        'Pola pikir positif adalah yang paling penting. Kurangi pikiran negatif dan ciptakan kebiasaan positif.',
        'Pengembangan diri yang konsisten adalah kunci mengubah nasib. Mulai dengan perubahan kecil dan tingkatkan secara bertahap.',
        'Membentuk kebiasaan baik itu penting. Gaya hidup teratur dan tindakan positif meningkatkan fitur wajah.',
        'Perbaiki lingkungan Anda. Ruang bersih dan interaksi dengan orang positif membantu nasib.',
        'Jangan menyerah pada situasi saat ini. Bahkan perbaikan kecil, jika dipertahankan, dapat menciptakan perubahan besar.',
        'Fokus pada pembelajaran dan pertumbuhan. Belajar hal-hal baru dan mengembangkan diri adalah cara meningkatkan nasib.',
        'Bersikap baik kepada orang lain. Bertindak dengan hati yang baik membuat hati itu muncul dalam fitur wajah.',
        'Mulai sekarang. Anda tidak bisa mengubah masa lalu tetapi dapat mengubah masa depan melalui usaha saat ini.'
      ]
    },
    fortune: {
      wealth: {
        ko: [
          '현재 재물운이 약간 부족하지만 노력으로 개선할 수 있습니다. 무리한 투자는 피하고 안정적인 방법을 선택하세요.',
          '재정 관리를 신중하게 하세요. 불필요한 지출을 줄이고 계획적으로 저축하는 것이 중요합니다.',
          '급하게 큰 돈을 벌려 하지 마세요. 꾸준한 노력과 작은 수입부터 시작하여 점진적으로 개선하세요.',
          '안정적인 수입원을 확보하는 것이 중요합니다. 무리한 사업보다는 꾸준한 직장 생활이 유리합니다.',
          '재정적 계획을 세우고 꾸준히 실천하세요. 작은 저축이라도 시간이 지나면 큰 도움이 됩니다.',
          '현재는 어려울 수 있지만 포기하지 마세요. 긍정적인 마음가짐과 노력으로 재물운을 개선할 수 있습니다.',
          '타인과의 재정 거래는 신중하게 하세요. 서두르지 말고 충분히 검토한 후 결정하세요.',
          '절약하는 습관을 기르세요. 작은 돈이라도 소중히 여기면 재물이 모이기 시작합니다.',
          '새로운 수입원을 찾되 위험한 방법은 피하세요. 안정성과 수익성을 균형있게 고려하세요.',
          '현재의 어려움은 일시적입니다. 긍정적인 변화를 만들어가면 재물운도 함께 좋아질 것입니다.'
        ],
        en: [
          'Currently wealth fortune is somewhat lacking but can be improved through effort. Avoid risky investments and choose stable methods.',
          'Manage finances carefully. It\'s important to reduce unnecessary expenses and save systematically.',
          'Don\'t try to make big money quickly. Start with steady effort and small income, then improve gradually.',
          'Securing stable income source is important. Steady work life is more favorable than risky business.',
          'Make financial plans and practice them steadily. Even small savings will help greatly over time.',
          'May be difficult now but don\'t give up. Can improve wealth fortune with positive mindset and effort.',
          'Be careful with financial transactions with others. Don\'t rush, decide after sufficient review.',
          'Develop habit of saving. Even small amounts, if treasured, wealth will start accumulating.',
          'Look for new income sources but avoid risky methods. Consider stability and profitability in balance.',
          'Current difficulties are temporary. Creating positive changes will improve wealth fortune too.'
        ],
        ja: [
          '現在財運が少し不足していますが、努力で改善できます。無理な投資は避け、安定した方法を選択してください。',
          '財政管理を慎重に行ってください。不要な支出を減らし、計画的に貯蓄することが重要です。',
          '急いで大きなお金を稼ごうとしないでください。着実な努力と小さな収入から始めて段階的に改善してください。',
          '安定した収入源を確保することが重要です。無理な事業よりも着実な職場生活が有利です。',
          '財政計画を立て、着実に実践してください。小さな貯蓄でも時間が経てば大きな助けになります。',
          '現在は難しいかもしれませんが、諦めないでください。ポジティブな心構えと努力で財運を改善できます。',
          '他人との財政取引は慎重に行ってください。急がず、十分に検討した後決定してください。',
          '倹約する習慣を身につけてください。小さなお金でも大切にすれば財産が集まり始めます。',
          '新しい収入源を探しますが、危険な方法は避けてください。安定性と収益性をバランスよく考慮してください。',
          '現在の困難は一時的です。ポジティブな変化を作っていけば財運も良くなるでしょう。'
        ],
        'zh-CN': [
          '目前财运有些不足，但可以通过努力改善。避免冒险投资，选择稳定的方法。',
          '谨慎管理财务。减少不必要的支出并有计划地储蓄很重要。',
          '不要试图快速赚大钱。从稳定的努力和小的收入开始，然后逐步改善。',
          '确保稳定的收入来源很重要。稳定的工作生活比冒险的业务更有利。',
          '制定财务计划并稳步实践。即使是很小的储蓄，随着时间的推移也会有很大帮助。',
          '现在可能困难，但不要放弃。通过积极的心态和努力可以改善财运。',
          '与他人进行财务交易时要谨慎。不要匆忙，充分审查后再做决定。',
          '养成储蓄的习惯。即使是小额的，如果珍惜，财富就会开始积累。',
          '寻找新的收入来源，但要避免危险的方法。平衡考虑稳定性和盈利能力。',
          '当前的困难是暂时的。创造积极的变化也会改善财运。'
        ],
        'zh-TW': [
          '目前財運有些不足，但可以通過努力改善。避免冒險投資，選擇穩定的方法。',
          '謹慎管理財務。減少不必要的支出並有計劃地儲蓄很重要。',
          '不要試圖快速賺大錢。從穩定的努力和小的收入開始，然後逐步改善。',
          '確保穩定的收入來源很重要。穩定的工作生活比冒險的業務更有利。',
          '制定財務計劃並穩步實踐。即使是很小的儲蓄，隨著時間的推移也會有很大幫助。',
          '現在可能困難，但不要放棄。通過積極的心態和努力可以改善財運。',
          '與他人進行財務交易時要謹慎。不要匆忙，充分審查後再做決定。',
          '養成儲蓄的習慣。即使是小額的，如果珍惜，財富就會開始積累。',
          '尋找新的收入來源，但要避免危險的方法。平衡考慮穩定性和盈利能力。',
          '當前的困難是暫時的。創造積極的變化也會改善財運。'
        ],
        vi: [
          'Hiện tại vận tài lộc hơi thiếu nhưng có thể cải thiện thông qua nỗ lực. Tránh đầu tư rủi ro và chọn phương pháp ổn định.',
          'Quản lý tài chính một cách cẩn thận. Điều quan trọng là giảm chi tiêu không cần thiết và tiết kiệm có hệ thống.',
          'Đừng cố gắng kiếm nhiều tiền nhanh. Bắt đầu với nỗ lực ổn định và thu nhập nhỏ, sau đó cải thiện dần dần.',
          'Đảm bảo nguồn thu nhập ổn định là quan trọng. Cuộc sống công việc ổn định thuận lợi hơn kinh doanh rủi ro.',
          'Lập kế hoạch tài chính và thực hành chúng một cách ổn định. Ngay cả tiết kiệm nhỏ cũng sẽ giúp ích rất nhiều theo thời gian.',
          'Có thể khó khăn bây giờ nhưng đừng từ bỏ. Có thể cải thiện vận tài lộc với tư duy tích cực và nỗ lực.',
          'Hãy cẩn thận với các giao dịch tài chính với người khác. Đừng vội vàng, quyết định sau khi xem xét đầy đủ.',
          'Phát triển thói quen tiết kiệm. Ngay cả số tiền nhỏ, nếu được trân trọng, của cải sẽ bắt đầu tích lũy.',
          'Tìm kiếm nguồn thu nhập mới nhưng tránh phương pháp rủi ro. Cân nhắc sự ổn định và khả năng sinh lời một cách cân bằng.',
          'Những khó khăn hiện tại là tạm thời. Tạo ra những thay đổi tích cực cũng sẽ cải thiện vận tài lộc.'
        ],
        id: [
          'Saat ini nasib kekayaan agak kurang tetapi dapat diperbaiki melalui usaha. Hindari investasi berisiko dan pilih metode stabil.',
          'Kelola keuangan dengan hati-hati. Penting untuk mengurangi pengeluaran yang tidak perlu dan hemat secara sistematis.',
          'Jangan mencoba menghasilkan uang banyak dengan cepat. Mulai dengan usaha yang mantap dan pendapatan kecil, kemudian tingkatkan secara bertahap.',
          'Mengamankan sumber pendapatan stabil itu penting. Kehidupan kerja yang mantap lebih menguntungkan daripada bisnis berisiko.',
          'Buat rencana keuangan dan praktikkan dengan mantap. Bahkan tabungan kecil akan sangat membantu seiring waktu.',
          'Mungkin sulit sekarang tetapi jangan menyerah. Dapat meningkatkan nasib kekayaan dengan pola pikir positif dan usaha.',
          'Hati-hati dengan transaksi keuangan dengan orang lain. Jangan terburu-buru, putuskan setelah tinjauan yang cukup.',
          'Kembangkan kebiasaan menabung. Bahkan jumlah kecil, jika dihargai, kekayaan akan mulai menumpuk.',
          'Cari sumber pendapatan baru tetapi hindari metode berisiko. Pertimbangkan stabilitas dan profitabilitas secara seimbang.',
          'Kesulitan saat ini bersifat sementara. Menciptakan perubahan positif juga akan meningkatkan nasib kekayaan.'
        ]
      },
      love: {
        ko: [
          '현재 연애운이 약간 부족하지만 긍정적인 마음가짐으로 개선할 수 있습니다.',
          '상대방을 만날 때 긍정적인 에너지를 보여주세요. 당신의 밝은 모습이 좋은 인연을 끌어들일 것입니다.',
          '급하게 연애를 시작하지 마세요. 먼저 자신을 개선하고 준비된 모습으로 만나보세요.',
          '부정적인 생각을 줄이고 긍정적인 습관을 만들어가세요. 좋은 마음가짐이 좋은 인연을 만듭니다.',
          '타인에게 친절하게 대하는 것이 중요합니다. 작은 친절이 좋은 관계로 이어질 수 있습니다.',
          '자신을 사랑하는 것부터 시작하세요. 자신을 소중히 여기면 다른 사람도 당신을 소중히 여길 것입니다.',
          '현재 어려울 수 있지만 포기하지 마세요. 긍정적인 변화를 만들어가면 좋은 인연을 만날 수 있습니다.',
          '새로운 만남을 두려워하지 마세요. 적극적으로 사람들과 어울리고 교류를 넓혀보세요.',
          '연애 관계에서 신뢰와 소통이 중요합니다. 상대방과 충분히 대화하며 서로를 이해하세요.',
          '좋은 습관을 형성하세요. 규칙적인 생활과 긍정적인 행동이 당신의 매력을 높일 것입니다.'
        ],
        en: [
          'Currently relationship fortune is somewhat lacking but can be improved with positive mindset.',
          'Show positive energy when meeting others. Your bright appearance will attract good relationships.',
          'Don\'t rush into relationships. First improve yourself and meet with prepared appearance.',
          'Reduce negative thoughts and create positive habits. Good mindset creates good relationships.',
          'Being kind to others is important. Small kindness can lead to good relationships.',
          'Start by loving yourself. If you value yourself, others will value you too.',
          'May be difficult now but don\'t give up. Creating positive changes can lead to meeting good relationships.',
          'Don\'t be afraid of new encounters. Actively socialize with people and expand interactions.',
          'Trust and communication are important in relationships. Talk enough with partner and understand each other.',
          'Form good habits. Regular lifestyle and positive actions will increase your charm.'
        ],
        ja: [
          '現在恋愛運が少し不足していますが、ポジティブな心構えで改善できます。',
          '相手に会う時、ポジティブなエネルギーを見せてください。あなたの明るい姿が良い縁を引き寄せるでしょう。',
          '急いで恋愛を始めないでください。まず自分を改善し、準備した姿で会ってください。',
          '否定的な考えを減らし、ポジティブな習慣を作ってください。良い心構えが良い縁を作ります。',
          '他人に親切に接することが重要です。小さな親切が良い関係につながる可能性があります。',
          '自分を愛することから始めてください。自分を大切にすれば、他の人もあなたを大切にするでしょう。',
          '現在は難しいかもしれませんが、諦めないでください。ポジティブな変化を作っていけば良い縁に会えるでしょう。',
          '新しい出会いを恐れないでください。積極的に人々と付き合い、交流を広げてください。',
          '恋愛関係で信頼とコミュニケーションが重要です。相手と十分に話し合い、お互いを理解してください。',
          '良い習慣を形成してください。規則正しい生活とポジティブな行動があなたの魅力を高めるでしょう。'
        ],
        'zh-CN': [
          '目前恋爱运有些不足，但可以通过积极的心态改善。',
          '与他人见面时展现积极的能量。你积极的外表会吸引良好的关系。',
          '不要匆忙开始恋爱。先改善自己，以准备好的姿态去见面。',
          '减少消极想法，养成积极的习惯。良好的心态创造良好的关系。',
          '善待他人很重要。小小的善意可能导致良好的关系。',
          '从爱自己开始。如果你重视自己，别人也会重视你。',
          '现在可能困难，但不要放弃。创造积极的变化可能导致遇到良好的关系。',
          '不要害怕新的相遇。积极与人交往，扩大互动。',
          '在关系中信任和沟通很重要。与伴侣充分对话，互相理解。',
          '养成好习惯。规律的生活和积极的行为会增加你的魅力。'
        ],
        'zh-TW': [
          '目前戀愛運有些不足，但可以通過積極的心態改善。',
          '與他人見面時展現積極的能量。你積極的外表會吸引良好的關係。',
          '不要匆忙開始戀愛。先改善自己，以準備好的姿態去見面。',
          '減少消極想法，養成積極的習慣。良好的心態創造良好的關係。',
          '善待他人很重要。小小的善意可能導致良好的關係。',
          '從愛自己開始。如果你重視自己，別人也會重視你。',
          '現在可能困難，但不要放棄。創造積極的變化可能導致遇到良好的關係。',
          '不要害怕新的相遇。積極與人交往，擴大互動。',
          '在關係中信任和溝通很重要。與伴侶充分對話，互相理解。',
          '養成好習慣。規律的生活和積極的行為會增加你的魅力。'
        ],
        vi: [
          'Hiện tại vận nhân duyên hơi thiếu nhưng có thể cải thiện với tư duy tích cực.',
          'Thể hiện năng lượng tích cực khi gặp người khác. Vẻ ngoài tích cực của bạn sẽ thu hút các mối quan hệ tốt.',
          'Đừng vội vàng bắt đầu mối quan hệ. Trước tiên hãy cải thiện bản thân và gặp gỡ với vẻ ngoài đã được chuẩn bị.',
          'Giảm suy nghĩ tiêu cực và tạo thói quen tích cực. Tư duy tốt tạo ra các mối quan hệ tốt.',
          'Tốt bụng với người khác là quan trọng. Sự tử tế nhỏ có thể dẫn đến các mối quan hệ tốt.',
          'Bắt đầu bằng cách yêu bản thân. Nếu bạn trân trọng bản thân, người khác cũng sẽ trân trọng bạn.',
          'Có thể khó khăn bây giờ nhưng đừng từ bỏ. Tạo ra những thay đổi tích cực có thể dẫn đến gặp gỡ các mối quan hệ tốt.',
          'Đừng sợ những cuộc gặp gỡ mới. Tích cực giao lưu với mọi người và mở rộng tương tác.',
          'Sự tin tưởng và giao tiếp quan trọng trong các mối quan hệ. Hãy nói chuyện đầy đủ với đối tác và hiểu nhau.',
          'Hình thành thói quen tốt. Lối sống đều đặn và hành động tích cực sẽ tăng sức hút của bạn.'
        ],
        id: [
          'Saat ini nasib hubungan agak kurang tetapi dapat diperbaiki dengan pola pikir positif.',
          'Tunjukkan energi positif saat bertemu orang lain. Penampilan cerah Anda akan menarik hubungan yang baik.',
          'Jangan terburu-buru memulai hubungan. Pertama perbaiki diri sendiri dan temui dengan penampilan yang dipersiapkan.',
          'Kurangi pikiran negatif dan ciptakan kebiasaan positif. Pola pikir yang baik menciptakan hubungan yang baik.',
          'Bersikap baik kepada orang lain itu penting. Kebaikan kecil dapat menyebabkan hubungan yang baik.',
          'Mulai dengan mencintai diri sendiri. Jika Anda menghargai diri sendiri, orang lain akan menghargai Anda juga.',
          'Mungkin sulit sekarang tetapi jangan menyerah. Menciptakan perubahan positif dapat menyebabkan bertemu hubungan yang baik.',
          'Jangan takut pertemuan baru. Secara aktif bersosialisasi dengan orang dan perluas interaksi.',
          'Kepercayaan dan komunikasi penting dalam hubungan. Bicara cukup dengan pasangan dan pahami satu sama lain.',
          'Bentuk kebiasaan baik. Gaya hidup teratur dan tindakan positif akan meningkatkan daya tarik Anda.'
        ]
      },
      success: {
        ko: [
          '현재 성공운이 약간 부족하지만 노력으로 개선할 수 있습니다. 포기하지 마세요.',
          '긍정적인 마음가짐이 성공의 기반입니다. 부정적인 생각을 줄이고 긍정적인 습관을 만들어가세요.',
          '꾸준한 자기계발이 중요합니다. 작은 개선이라도 지속하면 큰 성과를 낼 수 있습니다.',
          '현재 어려울 수 있지만 이것은 성장의 기회입니다. 어려움을 통해 더 강해질 수 있습니다.',
          '목표를 세우고 꾸준히 노력하세요. 단기적인 결과보다는 장기적인 관점에서 생각하세요.',
          '좋은 습관을 형성하는 것이 성공의 열쇠입니다. 규칙적인 생활과 노력이 중요합니다.',
          '학습과 성장에 집중하세요. 새로운 것을 배우고 자신을 발전시키면 성공이 따라올 것입니다.',
          '타인과의 협력을 중시하세요. 혼자서 할 수 없는 것도 함께 하면 가능합니다.',
          '현재 상황을 개선하기 위한 작은 행동부터 시작하세요. 작은 변화가 큰 성과로 이어집니다.',
          '긍정적인 변화를 만들어가세요. 지금부터 시작하는 노력이 미래의 성공을 만듭니다.'
        ],
        en: [
          'Currently success fortune is somewhat lacking but can be improved through effort. Don\'t give up.',
          'Positive mindset is foundation of success. Reduce negative thoughts and create positive habits.',
          'Consistent self-development is important. Even small improvements, if sustained, can achieve great results.',
          'May be difficult now but this is opportunity for growth. Can become stronger through difficulties.',
          'Set goals and keep working. Think from long-term perspective rather than short-term results.',
          'Forming good habits is key to success. Regular lifestyle and effort are important.',
          'Focus on learning and growth. Learning new things and developing yourself will bring success.',
          'Value cooperation with others. Things impossible alone become possible together.',
          'Start with small actions to improve current situation. Small changes lead to great results.',
          'Create positive changes. Effort starting now creates future success.'
        ],
        ja: [
          '現在成功運が少し不足していますが、努力で改善できます。諦めないでください。',
          'ポジティブな心構えが成功の基盤です。否定的な考えを減らし、ポジティブな習慣を作ってください。',
          '着実な自己啓発が重要です。小さな改善でも持続すれば大きな成果を出すことができます。',
          '現在は難しいかもしれませんが、これは成長の機会です。困難を通じてより強くなることができます。',
          '目標を立て、着実に努力してください。短期的な結果よりも長期的な観点から考えてください。',
          '良い習慣を形成することが成功の鍵です。規則正しい生活と努力が重要です。',
          '学習と成長に集中してください。新しいことを学び、自分を発展させれば成功が付いてくるでしょう。',
          '他人との協力を重視してください。一人ではできないことも一緒にすれば可能です。',
          '現在の状況を改善するための小さな行動から始めてください。小さな変化が大きな成果につながります。',
          'ポジティブな変化を作ってください。今から始める努力が未来の成功を作ります。'
        ],
        'zh-CN': [
          '目前成功运有些不足，但可以通过努力改善。不要放弃。',
          '积极的心态是成功的基础。减少消极想法，养成积极的习惯。',
          '持续的自我发展很重要。即使是很小的改进，如果持续下去，也能取得巨大成果。',
          '现在可能困难，但这是成长的机会。可以通过困难变得更强。',
          '设定目标并继续努力。从长期角度思考，而不是短期结果。',
          '养成好习惯是成功的关键。规律的生活和努力很重要。',
          '专注于学习和成长。学习新事物和发展自己会带来成功。',
          '重视与他人的合作。独自无法完成的事情，一起做就变得可能。',
          '从改善当前情况的小行动开始。小变化会导致大成果。',
          '创造积极的变化。从现在开始的努力创造未来的成功。'
        ],
        'zh-TW': [
          '目前成功運有些不足，但可以通過努力改善。不要放棄。',
          '積極的心態是成功的基礎。減少消極想法，養成積極的習慣。',
          '持續的自我發展很重要。即使是很小的改進，如果持續下去，也能取得巨大成果。',
          '現在可能困難，但這是成長的機會。可以通過困難變得更強。',
          '設定目標並繼續努力。從長期角度思考，而不是短期結果。',
          '養成好習慣是成功的關鍵。規律的生活和努力很重要。',
          '專注於學習和成長。學習新事物和發展自己會帶來成功。',
          '重視與他人的合作。獨自無法完成的事情，一起做就變得可能。',
          '從改善當前情況的小行動開始。小變化會導致大成果。',
          '創造積極的變化。從現在開始的努力創造未來的成功。'
        ],
        vi: [
          'Hiện tại vận thành công hơi thiếu nhưng có thể cải thiện thông qua nỗ lực. Đừng từ bỏ.',
          'Tư duy tích cực là nền tảng của thành công. Giảm suy nghĩ tiêu cực và tạo thói quen tích cực.',
          'Phát triển bản thân liên tục là quan trọng. Ngay cả những cải thiện nhỏ, nếu được duy trì, có thể đạt được kết quả lớn.',
          'Có thể khó khăn bây giờ nhưng đây là cơ hội phát triển. Có thể trở nên mạnh mẽ hơn thông qua khó khăn.',
          'Đặt mục tiêu và tiếp tục làm việc. Suy nghĩ từ quan điểm dài hạn thay vì kết quả ngắn hạn.',
          'Hình thành thói quen tốt là chìa khóa của thành công. Lối sống đều đặn và nỗ lực là quan trọng.',
          'Tập trung vào học hỏi và phát triển. Học những điều mới và phát triển bản thân sẽ mang lại thành công.',
          'Trân trọng sự hợp tác với người khác. Những điều không thể làm một mình trở nên có thể khi làm cùng nhau.',
          'Bắt đầu với những hành động nhỏ để cải thiện tình huống hiện tại. Những thay đổi nhỏ dẫn đến kết quả lớn.',
          'Tạo ra những thay đổi tích cực. Nỗ lực bắt đầu bây giờ tạo ra thành công trong tương lai.'
        ],
        id: [
          'Saat ini nasib kesuksesan agak kurang tetapi dapat diperbaiki melalui usaha. Jangan menyerah.',
          'Pola pikir positif adalah fondasi kesuksesan. Kurangi pikiran negatif dan ciptakan kebiasaan positif.',
          'Pengembangan diri yang konsisten penting. Bahkan perbaikan kecil, jika dipertahankan, dapat mencapai hasil besar.',
          'Mungkin sulit sekarang tetapi ini adalah peluang pertumbuhan. Dapat menjadi lebih kuat melalui kesulitan.',
          'Tetapkan tujuan dan terus bekerja. Pikir dari perspektif jangka panjang daripada hasil jangka pendek.',
          'Membentuk kebiasaan baik adalah kunci kesuksesan. Gaya hidup teratur dan usaha penting.',
          'Fokus pada pembelajaran dan pertumbuhan. Belajar hal-hal baru dan mengembangkan diri akan membawa kesuksesan.',
          'Hargai kerja sama dengan orang lain. Hal-hal yang tidak mungkin dilakukan sendiri menjadi mungkin bersama.',
          'Mulai dengan tindakan kecil untuk memperbaiki situasi saat ini. Perubahan kecil mengarah ke hasil besar.',
          'Ciptakan perubahan positif. Usaha yang dimulai sekarang menciptakan kesuksesan di masa depan.'
        ]
      }
    }
  },
  {
    id: 6,
    title: {
      ko: '대흉상 - 변화 필요',
      en: 'Great Caution - Needs Change',
      ja: '大凶相 - 変化必要',
      'zh-CN': '大凶相 - 需要改变',
      'zh-TW': '大凶相 - 需要改變',
      vi: 'Đại Hung Tướng - Cần Thay Đổi',
      id: 'Nasib Besar - Perlu Perubahan'
    },
    description: {
      ko: [
        '당신의 얼굴은 큰 변화가 필요한 상입니다. 하지만 이것은 기회입니다! 관상은 마음가짐과 노력으로 완전히 바꿀 수 있습니다. 지금부터 긍정적인 변화를 시작하여 새로운 인생을 만들어가세요. 포기하지 마세요!',
        '대흉상의 얼굴은 큰 변화가 필요한 상입니다. 하지만 이것은 기회입니다! 긍정적인 마음가짐과 노력으로 운세를 완전히 바꿀 수 있습니다.',
        '당신의 얼굴은 주의가 많이 필요한 상입니다. 하지만 절망하지 마세요! 관상은 변할 수 있으며, 긍정적인 변화로 새로운 시작을 만들 수 있습니다.',
        '대흉상의 관상은 심각한 주의가 필요하지만, 이것은 동시에 기회입니다. 마음가짐과 노력으로 운세를 완전히 바꿀 수 있습니다.',
        '얼굴의 특징이 큰 변화를 필요로 하지만, 긍정적인 사고와 노력으로 충분히 개선할 수 있습니다. 포기하지 말고 도전하세요.',
        '대흉상의 얼굴은 어려움이 있지만, 이것은 새로운 시작의 기회입니다. 긍정적인 마음과 꾸준한 노력으로 운세를 바꿔보세요.',
        '당신의 얼굴은 주의가 많이 필요하지만, 관상은 고정된 것이 아닙니다. 긍정적인 변화를 시작하여 새로운 인생을 만들어가세요.',
        '대흉상의 관상은 완전히 바꿀 필요가 있지만, 마음가짐과 노력으로 충분히 가능합니다. 지금부터 긍정적인 변화를 시작하세요.',
        '얼굴의 특징이 큰 변화를 요구하지만, 이것은 기회입니다. 긍정적인 사고와 자기계발로 운세를 완전히 바꿀 수 있습니다.',
        '대흉상의 얼굴은 어려움이 있지만, 절망하지 마세요! 관상은 변할 수 있으며, 긍정적인 노력으로 새로운 운세를 만들어갈 수 있습니다.'
      ],
      en: [
        'Your face shows signs that need major changes. But this is an opportunity! Facial features can be completely changed through mindset and effort. Start positive changes now to create a new life. Don\'t give up!',
        'A face with great caution needs major changes. But this is an opportunity! You can completely change your fortune through positive mindset and effort.',
        'Your face shows signs that need much attention. But don\'t despair! Physiognomy can change, and you can create a new beginning through positive changes.',
        'The physiognomy of great caution needs serious attention, but this is also an opportunity. You can completely change your fortune through mindset and effort.',
        'Your facial features need major changes, but you can definitely improve them through positive thinking and effort. Don\'t give up and take on the challenge.',
        'A face with great caution has difficulties, but this is an opportunity for a new beginning. Try to change your fortune with positive thinking and consistent effort.',
        'Your face needs much attention, but physiognomy is not fixed. Start positive changes to create a new life.',
        'The physiognomy of great caution needs complete change, but it\'s definitely possible through mindset and effort. Start positive changes now.',
        'Your facial features require major changes, but this is an opportunity. You can completely change your fortune through positive thinking and self-development.',
        'A face with great caution has difficulties, but don\'t despair! Physiognomy can change, and you can create new fortune through positive effort.'
      ],
      ja: [
        'あなたの顔は大きな変化が必要な相です。しかし、これはチャンスです！顔相は心構えと努力で完全に変えることができます。',
        '大きな注意が必要な相の顔は大きな変化が必要です。しかし、これはチャンスです！前向きな心構えと努力で運勢を完全に変えることができます。',
        'あなたの顔は多くの注意が必要な相を示しています。しかし絶望しないでください！観相は変わり、前向きな変化で新しい始まりを作ることができます。',
        '大凶相の観相は深刻な注意が必要ですが、これは同時にチャンスです。心構えと努力で運勢を完全に変えることができます。',
        '顔の特徴が大きな変化を必要としますが、前向きな思考と努力で十分改善できます。諦めずに挑戦してください。',
        '大凶相の顔には困難がありますが、これは新しい始まりのチャンスです。前向きな心と着実な努力で運勢を変えてみてください。',
        'あなたの顔は多くの注意が必要ですが、観相は固定されたものではありません。前向きな変化を始めて新しい人生を作ってください。',
        '大凶相の観相は完全に変える必要がありますが、心構えと努力で十分可能です。今から前向きな変化を始めてください。',
        '顔の特徴が大きな変化を要求しますが、これはチャンスです。前向きな思考と自己開発で運勢を完全に変えることができます。',
        '大凶相の顔には困難がありますが、絶望しないでください！観相は変わり、前向きな努力で新しい運勢を作ることができます。'
      ],
      'zh-CN': [
        '你的面相需要重大改变。但这是一个机会！面相可以通过心态和努力完全改变。',
        '需要重大注意的面相需要重大改变。但这是一个机会！你可以通过积极的心态和努力完全改变运势。',
        '你的脸显示出需要很多注意的相。但不要绝望！面相可以改变，你可以通过积极的变化创造新的开始。',
        '大凶相的面相需要严重注意，但这也是一个机会。你可以通过心态和努力完全改变运势。',
        '面部特征需要重大改变，但你可以通过积极思考和努力来改善。不要放弃，接受挑战。',
        '大凶相的脸有困难，但这是新开始的机会。尝试用积极思考和稳定的努力来改变你的运势。',
        '你的脸需要很多注意，但面相不是固定的。开始积极的变化来创造新的生活。',
        '大凶相的面相需要完全改变，但通过心态和努力绝对可能。现在开始积极的变化。',
        '面部特征需要重大改变，但这是一个机会。你可以通过积极思考和自我发展完全改变运势。',
        '大凶相的脸有困难，但不要绝望！面相可以改变，你可以通过积极的努力创造新的运势。'
      ],
      'zh-TW': [
        '你的面相需要重大改變。但這是一個機會！面相可以通過心態和努力完全改變。',
        '需要重大注意的面相需要重大改變。但這是一個機會！你可以通過積極的心態和努力完全改變運勢。',
        '你的臉顯示出需要很多注意的相。但不要絕望！面相可以改變，你可以通過積極的變化創造新的開始。',
        '大凶相的面相需要嚴重注意，但這也是一個機會。你可以通過心態和努力完全改變運勢。',
        '面部特徵需要重大改變，但你可以通過積極思考和努力來改善。不要放棄，接受挑戰。',
        '大凶相的臉有困難，但這是新開始的機會。嘗試用積極思考和穩定的努力來改變你的運勢。',
        '你的臉需要很多注意，但面相不是固定的。開始積極的變化來創造新的生活。',
        '大凶相的面相需要完全改變，但通過心態和努力絕對可能。現在開始積極的變化。',
        '面部特徵需要重大改變，但這是一個機會。你可以通過積極思考和自我發展完全改變運勢。',
        '大凶相的臉有困難，但不要絕望！面相可以改變，你可以通過積極的努力創造新的運勢。'
      ],
      vi: [
        'Khuôn mặt của bạn cho thấy những dấu hiệu cần thay đổi lớn. Nhưng đây là cơ hội! Đặc điểm khuôn mặt có thể được thay đổi hoàn toàn thông qua tư duy và nỗ lực.',
        'Khuôn mặt cần chú ý lớn cần thay đổi lớn. Nhưng đây là cơ hội! Bạn có thể hoàn toàn thay đổi vận may của mình thông qua tư duy tích cực và nỗ lực.',
        'Khuôn mặt của bạn cho thấy những dấu hiệu cần nhiều sự chú ý. Nhưng đừng tuyệt vọng! Tướng số có thể thay đổi, và bạn có thể tạo ra khởi đầu mới thông qua những thay đổi tích cực.',
        'Tướng số cần chú ý lớn cần sự chú ý nghiêm trọng, nhưng đây cũng là cơ hội. Bạn có thể hoàn toàn thay đổi vận may của mình thông qua tư duy và nỗ lực.',
        'Các đặc điểm trên khuôn mặt của bạn cần thay đổi lớn, nhưng bạn chắc chắn có thể cải thiện chúng thông qua suy nghĩ tích cực và nỗ lực. Đừng bỏ cuộc và đón nhận thử thách.',
        'Khuôn mặt cần chú ý lớn có những khó khăn, nhưng đây là cơ hội để khởi đầu mới. Hãy thử thay đổi vận may của bạn bằng suy nghĩ tích cực và nỗ lực ổn định.',
        'Khuôn mặt của bạn cần nhiều sự chú ý, nhưng tướng số không cố định. Bắt đầu những thay đổi tích cực để tạo ra cuộc sống mới.',
        'Tướng số cần chú ý lớn cần thay đổi hoàn toàn, nhưng chắc chắn có thể thông qua tư duy và nỗ lực. Bắt đầu những thay đổi tích cực ngay bây giờ.',
        'Các đặc điểm trên khuôn mặt của bạn yêu cầu thay đổi lớn, nhưng đây là cơ hội. Bạn có thể hoàn toàn thay đổi vận may của mình thông qua suy nghĩ tích cực và phát triển bản thân.',
        'Khuôn mặt cần chú ý lớn có những khó khăn, nhưng đừng tuyệt vọng! Tướng số có thể thay đổi, và bạn có thể tạo ra vận may mới thông qua nỗ lực tích cực.'
      ],
      id: [
        'Wajah Anda menunjukkan tanda-tanda yang memerlukan perubahan besar. Tapi ini adalah kesempatan! Fitur wajah dapat diubah sepenuhnya melalui pola pikir dan usaha.',
        'Wajah yang memerlukan perhatian besar memerlukan perubahan besar. Tapi ini adalah kesempatan! Anda dapat sepenuhnya mengubah nasib Anda melalui pola pikir positif dan usaha.',
        'Wajah Anda menunjukkan tanda-tanda yang memerlukan banyak perhatian. Tapi jangan putus asa! Fisiognomi bisa berubah, dan Anda bisa menciptakan awal baru melalui perubahan positif.',
        'Fisiognomi yang memerlukan perhatian besar memerlukan perhatian serius, tapi ini juga kesempatan. Anda dapat sepenuhnya mengubah nasib Anda melalui pola pikir dan usaha.',
        'Fitur wajah Anda memerlukan perubahan besar, tetapi Anda pasti bisa memperbaikinya melalui pemikiran positif dan usaha. Jangan menyerah dan terima tantangan.',
        'Wajah yang memerlukan perhatian besar memiliki kesulitan, tapi ini adalah kesempatan untuk awal baru. Coba ubah nasib Anda dengan pemikiran positif dan usaha yang konsisten.',
        'Wajah Anda memerlukan banyak perhatian, tetapi fisiognomi tidak tetap. Mulai perubahan positif untuk menciptakan kehidupan baru.',
        'Fisiognomi yang memerlukan perhatian besar memerlukan perubahan lengkap, tetapi pasti mungkin melalui pola pikir dan usaha. Mulai perubahan positif sekarang.',
        'Fitur wajah Anda memerlukan perubahan besar, tetapi ini adalah kesempatan. Anda dapat sepenuhnya mengubah nasib Anda melalui pemikiran positif dan pengembangan diri.',
        'Wajah yang memerlukan perhatian besar memiliki kesulitan, tetapi jangan putus asa! Fisiognomi bisa berubah, dan Anda bisa menciptakan nasib baru melalui usaha positif.'
      ]
    },
    emoji: '🔄',
    scoreRange: [0, 39],
    strengths: {
      ko: ['변화 의지', '새로운 시작', '강한 의지력', '무한한 가능성'],
      en: ['Will to Change', 'New Beginning', 'Strong Willpower', 'Infinite Possibilities'],
      ja: ['変化意欲', '新しい始まり', '強い意志力', '無限の可能性'],
      'zh-CN': ['改变意愿', '新的开始', '坚强意志力', '无限可能'],
      'zh-TW': ['改變意願', '新的開始', '堅強意志力', '無限可能'],
      vi: ['Ý chí thay đổi', 'Khởi đầu mới', 'Ý chí mạnh mẽ', 'Khả năng vô hạn'],
      id: ['Kemauan Berubah', 'Awal Baru', 'Kemauan Kuat', 'Kemungkinan Tak Terbatas']
    },
    recommendations: {
      ko: ['완전한 마음가짐 변화', '새로운 환경 찾기', '전문가 상담', '단계별 목표 설정'],
      en: ['Complete Mindset Change', 'Find New Environment', 'Professional Counseling', 'Set Step-by-Step Goals'],
      ja: ['完全な心構えの変化', '新しい環境探し', '専門家相談', '段階的目標設定'],
      'zh-CN': ['完全改变心态', '寻找新环境', '专业咨询', '设定阶段性目标'],
      'zh-TW': ['完全改變心態', '尋找新環境', '專業諮詢', '設定階段性目標'],
      vi: ['Thay đổi hoàn toàn tư duy', 'Tìm môi trường mới', 'Tư vấn chuyên gia', 'Đặt mục tiêu từng bước'],
      id: ['Perubahan Pola Pikir Lengkap', 'Temukan Lingkungan Baru', 'Konseling Profesional', 'Tetapkan Tujuan Bertahap']
    },
    personality: {
      ko: [
        '현재는 큰 변화가 필요한 상태이지만 변화에 대한 강한 의지를 가지고 있는 성격입니다.',
        '새로운 시작을 두려워하지 않고 오히려 기회로 받아들이는 용기가 있습니다.',
        '과거를 묶어두지 않고 미래를 향해 나아갈 수 있는 강한 의지력을 가지고 있습니다.',
        '현재의 어려움을 인정하되 그것을 바꿀 수 있다고 믿는 긍정적인 태도를 가지고 있습니다.',
        '변화를 통해 자신을 발전시킬 수 있다는 가능성을 믿는 성격입니다.',
        '포기하지 않는 강인함을 가지고 있으며 어려움을 극복할 수 있다고 믿습니다.',
        '무한한 가능성을 가지고 있으며 노력하면 무엇이든 바꿀 수 있다고 생각합니다.',
        '현재의 한계를 받아들이지 않고 항상 개선하려는 마음을 가지고 있습니다.',
        '전문가의 조언을 듣고 새로운 방법을 시도하려는 개방적인 성격입니다.',
        '변화는 어렵지만 가능하다고 믿으며 지속적인 노력을 할 수 있는 성격입니다.'
      ],
      en: [
        'Currently needs major changes but has strong will for change.',
        'Has courage to not fear new beginnings and accept them as opportunities.',
        'Has strong willpower to not be bound by past and move toward future.',
        'Acknowledges current difficulties but has positive attitude believing they can be changed.',
        'Personality that believes in possibility of developing self through change.',
        'Has strength of not giving up and believes can overcome difficulties.',
        'Has infinite possibilities and thinks can change anything with effort.',
        'Doesn\'t accept current limitations and always has mind to improve.',
        'Open personality that listens to experts\' advice and tries new methods.',
        'Believes change is difficult but possible, personality capable of continuous effort.'
      ],
      ja: [
        '現在は大きな変化が必要な状態ですが、変化に対する強い意志を持っている性格です。',
        '新しい始まりを恐れず、むしろ機会として受け入れる勇気があります。',
        '過去に縛られず、未来に向かって進むことができる強い意志力を持っています。',
        '現在の困難を認めつつ、それを変えることができると信じるポジティブな態度を持っています。',
        '変化を通じて自分を発展させることができるという可能性を信じる性格です。',
        '諦めない強さを持っており、困難を克服できると信じています。',
        '無限の可能性を持っており、努力すれば何でも変えることができると考えています。',
        '現在の限界を受け入れず、常に改善しようとする心を持っています。',
        '専門家のアドバイスを聞き、新しい方法を試そうとする開放的な性格です。',
        '変化は難しいが可能だと信じ、継続的な努力をすることができる性格です。'
      ],
      'zh-CN': [
        '目前需要重大改变，但有强烈的改变意愿。',
        '有勇气不害怕新的开始，而是将其视为机会。',
        '有坚强的意志力不被过去束缚，能够朝着未来前进。',
        '承认当前的困难，但相信可以改变它们的积极态度。',
        '相信通过变化可以发展自己的可能性的个性。',
        '拥有不放弃的力量，相信可以克服困难。',
        '拥有无限可能，认为通过努力可以改变任何事情。',
        '不接受当前的局限性，总是有改进的心态。',
        '开放的性格，愿意听取专家的建议并尝试新方法。',
        '相信变化虽然困难但是可能的，能够持续努力的个性。'
      ],
      'zh-TW': [
        '目前需要重大改變，但有強烈的改變意願。',
        '有勇氣不害怕新的開始，而是將其視為機會。',
        '有堅強的意志力不被過去束縛，能夠朝著未來前進。',
        '承認當前的困難，但相信可以改變它們的積極態度。',
        '相信通過變化可以發展自己的可能性的個性。',
        '擁有不放棄的力量，相信可以克服困難。',
        '擁有無限可能，認為通過努力可以改變任何事情。',
        '不接受當前的局限性，總是有改進的心態。',
        '開放的性格，願意聽取專家的建議並嘗試新方法。',
        '相信變化雖然困難但是可能的，能夠持續努力的個性。'
      ],
      vi: [
        'Hiện tại cần thay đổi lớn nhưng có ý chí mạnh mẽ cho sự thay đổi.',
        'Có can đảm không sợ khởi đầu mới và chấp nhận chúng như cơ hội.',
        'Có ý chí mạnh mẽ để không bị ràng buộc bởi quá khứ và tiến về tương lai.',
        'Thừa nhận khó khăn hiện tại nhưng có thái độ tích cực tin rằng có thể thay đổi chúng.',
        'Tính cách tin vào khả năng phát triển bản thân thông qua thay đổi.',
        'Có sức mạnh không từ bỏ và tin rằng có thể vượt qua khó khăn.',
        'Có khả năng vô hạn và nghĩ rằng có thể thay đổi bất cứ điều gì với nỗ lực.',
        'Không chấp nhận giới hạn hiện tại và luôn có tư duy cải thiện.',
        'Tính cách cởi mở lắng nghe lời khuyên của chuyên gia và thử các phương pháp mới.',
        'Tin rằng thay đổi khó khăn nhưng có thể, tính cách có khả năng nỗ lực liên tục.'
      ],
      id: [
        'Saat ini membutuhkan perubahan besar tetapi memiliki kemauan kuat untuk perubahan.',
        'Memiliki keberanian untuk tidak takut awal baru dan menerima mereka sebagai peluang.',
        'Memiliki kemauan kuat untuk tidak terikat oleh masa lalu dan bergerak menuju masa depan.',
        'Mengakui kesulitan saat ini tetapi memiliki sikap positif percaya mereka dapat diubah.',
        'Kepribadian yang percaya pada kemungkinan mengembangkan diri melalui perubahan.',
        'Memiliki kekuatan tidak menyerah dan percaya dapat mengatasi kesulitan.',
        'Memiliki kemungkinan tak terbatas dan berpikir dapat mengubah apa pun dengan usaha.',
        'Tidak menerima keterbatasan saat ini dan selalu memiliki pikiran untuk memperbaiki.',
        'Kepribadian terbuka yang mendengarkan saran ahli dan mencoba metode baru.',
        'Percaya perubahan itu sulit tetapi mungkin, kepribadian yang mampu usaha berkelanjutan.'
      ]
    },
    advice: {
      ko: [
        '지금이 바로 변화의 때입니다! 포기하지 말고 새로운 인생을 시작하세요. 당신은 충분히 할 수 있습니다.',
        '큰 변화가 필요하지만 이것은 기회입니다. 관상은 마음가짐과 노력으로 완전히 바꿀 수 있습니다.',
        '과거에 매달리지 마세요. 새로운 환경을 찾고 새로운 시작을 만들어가세요.',
        '전문가의 조언을 구하세요. 올바른 가이드를 받으면 변화가 더 쉬워집니다.',
        '단계별 목표를 세우고 하나씩 달성해가세요. 작은 성공이 큰 변화를 만듭니다.',
        '긍정적인 사람들과 어울리세요. 좋은 에너지가 당신의 변화를 돕습니다.',
        '완전한 마음가짐 변화가 필요합니다. 부정적인 생각을 버리고 긍정적인 습관을 만들어가세요.',
        '지금부터 시작하세요. 내일이 아닌 오늘, 바로 지금부터 시작하는 것이 중요합니다.',
        '포기하지 마세요. 어려울 수 있지만 지속적인 노력으로 충분히 바꿀 수 있습니다.',
        '당신은 무한한 가능성을 가지고 있습니다. 변화를 두려워하지 말고 용기를 내세요.'
      ],
      en: [
        'Now is the time for change! Don\'t give up and start a new life. You can definitely do it.',
        'Major changes are needed but this is an opportunity. Facial features can be completely changed through mindset and effort.',
        'Don\'t cling to the past. Find new environment and create new beginnings.',
        'Seek expert advice. With proper guidance, change becomes easier.',
        'Set step-by-step goals and achieve them one by one. Small successes create big changes.',
        'Associate with positive people. Good energy helps your change.',
        'Complete mindset change is needed. Let go of negative thoughts and create positive habits.',
        'Start now. Not tomorrow but today, starting right now is important.',
        'Don\'t give up. May be difficult but can definitely change with continuous effort.',
        'You have infinite possibilities. Don\'t fear change, be courageous.'
      ],
      ja: [
        '今こそ変化の時です！諦めずに新しい人生を始めてください。あなたなら必ずできます。',
        '大きな変化が必要ですが、これは機会です。顔相は心構えと努力で完全に変えることができます。',
        '過去にしがみつかないでください。新しい環境を見つけ、新しい始まりを作ってください。',
        '専門家のアドバイスを求めてください。適切なガイダンスを受ければ変化がより簡単になります。',
        '段階的な目標を立て、一つずつ達成してください。小さな成功が大きな変化を作ります。',
        'ポジティブな人々と付き合ってください。良いエネルギーがあなたの変化を助けます。',
        '完全な心構えの変化が必要です。否定的な考えを捨て、ポジティブな習慣を作ってください。',
        '今から始めてください。明日ではなく今日、今すぐ始めることが重要です。',
        '諦めないでください。難しいかもしれませんが、継続的な努力で必ず変えることができます。',
        'あなたは無限の可能性を持っています。変化を恐れず、勇気を出してください。'
      ],
      'zh-CN': [
        '现在正是改变的时候！不要放弃，开始新的人生。你一定可以做到。',
        '需要重大改变，但这是一个机会。面相可以通过心态和努力完全改变。',
        '不要沉溺于过去。寻找新环境，创造新的开始。',
        '寻求专家建议。有了正确的指导，改变会更容易。',
        '设定阶段性目标，逐一实现。小的成功创造大的变化。',
        '与积极的人交往。好的能量有助于你的改变。',
        '需要完全改变心态。抛弃消极想法，养成积极习惯。',
        '现在开始。不是明天而是今天，立即开始很重要。',
        '不要放弃。可能困难，但通过持续努力一定可以改变。',
        '你有无限可能。不要害怕改变，勇敢面对。'
      ],
      'zh-TW': [
        '現在正是改變的時候！不要放棄，開始新的人生。你一定可以做到。',
        '需要重大改變，但這是一個機會。面相可以通過心態和努力完全改變。',
        '不要沉溺於過去。尋找新環境，創造新的開始。',
        '尋求專家建議。有了正確的指導，改變會更容易。',
        '設定階段性目標，逐一實現。小的成功創造大的變化。',
        '與積極的人交往。好的能量有助於你的改變。',
        '需要完全改變心態。拋棄消極想法，養成積極習慣。',
        '現在開始。不是明天而是今天，立即開始很重要。',
        '不要放棄。可能困難，但通過持續努力一定可以改變。',
        '你有無限可能。不要害怕改變，勇敢面對。'
      ],
      vi: [
        'Bây giờ chính là lúc thay đổi! Đừng bỏ cuộc và bắt đầu cuộc sống mới. Bạn hoàn toàn có thể làm được.',
        'Cần thay đổi lớn nhưng đây là cơ hội. Đặc điểm khuôn mặt có thể được thay đổi hoàn toàn thông qua tư duy và nỗ lực.',
        'Đừng bám víu vào quá khứ. Tìm môi trường mới và tạo ra khởi đầu mới.',
        'Tìm kiếm lời khuyên của chuyên gia. Với hướng dẫn đúng, thay đổi trở nên dễ dàng hơn.',
        'Đặt mục tiêu từng bước và đạt được từng cái một. Những thành công nhỏ tạo ra thay đổi lớn.',
        'Giao lưu với những người tích cực. Năng lượng tốt giúp sự thay đổi của bạn.',
        'Cần thay đổi hoàn toàn tư duy. Bỏ suy nghĩ tiêu cực và tạo thói quen tích cực.',
        'Bắt đầu ngay bây giờ. Không phải ngày mai mà hôm nay, bắt đầu ngay bây giờ là quan trọng.',
        'Đừng từ bỏ. Có thể khó khăn nhưng hoàn toàn có thể thay đổi với nỗ lực liên tục.',
        'Bạn có khả năng vô hạn. Đừng sợ thay đổi, hãy can đảm.'
      ],
      id: [
        'Sekarang adalah waktunya untuk berubah! Jangan menyerah dan mulai hidup baru. Anda pasti bisa melakukannya.',
        'Perubahan besar diperlukan tetapi ini adalah kesempatan. Fitur wajah dapat diubah sepenuhnya melalui pola pikir dan usaha.',
        'Jangan menggantungkan diri pada masa lalu. Temukan lingkungan baru dan ciptakan awal baru.',
        'Cari saran ahli. Dengan bimbingan yang tepat, perubahan menjadi lebih mudah.',
        'Tetapkan tujuan bertahap dan capai satu per satu. Kesuksesan kecil menciptakan perubahan besar.',
        'Bergaul dengan orang positif. Energi baik membantu perubahan Anda.',
        'Perubahan pola pikir lengkap diperlukan. Lepaskan pikiran negatif dan ciptakan kebiasaan positif.',
        'Mulai sekarang. Bukan besok tapi hari ini, memulai sekarang adalah penting.',
        'Jangan menyerah. Mungkin sulit tetapi pasti bisa berubah dengan usaha berkelanjutan.',
        'Anda memiliki kemungkinan tak terbatas. Jangan takut perubahan, berani.'
      ]
    },
    fortune: {
      wealth: {
        ko: [
          '현재 재물운이 크게 부족하지만 완전한 변화를 통해 개선할 수 있습니다. 새로운 방법을 시도하세요.',
          '재정 관리를 완전히 바꿔야 합니다. 과거의 잘못된 습관을 버리고 새로운 시스템을 만드세요.',
          '전문가의 도움을 받으세요. 재정 상담을 통해 올바른 방법을 배울 수 있습니다.',
          '급하게 큰 돈을 벌려 하지 마세요. 새로운 시작이므로 차근차근 기반을 다지세요.',
          '안정적인 수입원을 확보하는 것이 최우선입니다. 위험한 투자는 피하고 신중하게 접근하세요.',
          '과거의 재정 실패에서 배우세요. 같은 실수를 반복하지 않도록 주의하세요.',
          '새로운 환경에서 새로운 기회를 찾아보세요. 변화된 환경이 새로운 재물운을 만들어줄 것입니다.',
          '작은 저축부터 시작하세요. 작은 것이라도 소중히 여기면 나중에 큰 도움이 됩니다.',
          '재정 계획을 완전히 새롭게 세우세요. 과거의 계획이 실패했다면 다른 방법을 시도해야 합니다.',
          '포기하지 마세요. 재물운은 마음가짐과 노력으로 바꿀 수 있습니다. 지금부터 시작하세요.'
        ],
        en: [
          'Currently wealth fortune is greatly lacking but can be improved through complete change. Try new methods.',
          'Must completely change financial management. Let go of past wrong habits and create new system.',
          'Get expert help. Can learn correct methods through financial counseling.',
          'Don\'t try to make big money quickly. Since it\'s new beginning, build foundation step by step.',
          'Securing stable income source is top priority. Avoid risky investments and approach carefully.',
          'Learn from past financial failures. Be careful not to repeat same mistakes.',
          'Look for new opportunities in new environment. Changed environment will create new wealth fortune.',
          'Start with small savings. Even small amounts, if treasured, will help greatly later.',
          'Make financial plans completely new. If past plans failed, must try different methods.',
          'Don\'t give up. Wealth fortune can be changed through mindset and effort. Start now.'
        ],
        ja: [
          '現在財運が大きく不足していますが、完全な変化を通じて改善できます。新しい方法を試してください。',
          '財政管理を完全に変える必要があります。過去の間違った習慣を捨て、新しいシステムを作ってください。',
          '専門家の助けを受けてください。財政相談を通じて正しい方法を学ぶことができます。',
          '急いで大きなお金を稼ごうとしないでください。新しい始まりなので着実に基盤を固めてください。',
          '安定した収入源を確保することが最優先です。危険な投資は避け、慎重にアプローチしてください。',
          '過去の財政失敗から学んでください。同じ過ちを繰り返さないように注意してください。',
          '新しい環境で新しい機会を探してください。変化した環境が新しい財運を作ってくれるでしょう。',
          '小さな貯蓄から始めてください。小さなものでも大切にすれば後で大きな助けになります。',
          '財政計画を完全に新しく立ててください。過去の計画が失敗したなら、別の方法を試す必要があります。',
          '諦めないでください。財運は心構えと努力で変えることができます。今から始めてください。'
        ],
        'zh-CN': [
          '目前财运严重不足，但可以通过完全改变改善。尝试新方法。',
          '必须完全改变财务管理。放弃过去的错误习惯，建立新系统。',
          '寻求专家帮助。通过财务咨询可以学习正确的方法。',
          '不要试图快速赚大钱。由于是新的开始，要一步一步建立基础。',
          '确保稳定的收入来源是首要任务。避免冒险投资，谨慎行事。',
          '从过去的财务失败中学习。注意不要重复同样的错误。',
          '在新环境中寻找新机会。改变的环境将创造新的财运。',
          '从小额储蓄开始。即使是小额的，如果珍惜，以后会有很大帮助。',
          '制定全新的财务计划。如果过去的计划失败了，必须尝试不同的方法。',
          '不要放弃。财运可以通过心态和努力改变。现在开始。'
        ],
        'zh-TW': [
          '目前財運嚴重不足，但可以通過完全改變改善。嘗試新方法。',
          '必須完全改變財務管理。放棄過去的錯誤習慣，建立新系統。',
          '尋求專家幫助。通過財務諮詢可以學習正確的方法。',
          '不要試圖快速賺大錢。由於是新的開始，要一步一步建立基礎。',
          '確保穩定的收入來源是首要任務。避免冒險投資，謹慎行事。',
          '從過去的財務失敗中學習。注意不要重複同樣的錯誤。',
          '在新環境中尋找新機會。改變的環境將創造新的財運。',
          '從小額儲蓄開始。即使是小額的，如果珍惜，以後會有很大幫助。',
          '制定全新的財務計劃。如果過去的計劃失敗了，必須嘗試不同的方法。',
          '不要放棄。財運可以通過心態和努力改變。現在開始。'
        ],
        vi: [
          'Hiện tại vận tài lộc thiếu hụt nhiều nhưng có thể cải thiện thông qua thay đổi hoàn toàn. Hãy thử các phương pháp mới.',
          'Phải thay đổi hoàn toàn quản lý tài chính. Từ bỏ thói quen sai lầm trong quá khứ và tạo hệ thống mới.',
          'Nhận sự giúp đỡ của chuyên gia. Có thể học các phương pháp đúng thông qua tư vấn tài chính.',
          'Đừng cố gắng kiếm nhiều tiền nhanh. Vì đây là khởi đầu mới, hãy xây dựng nền tảng từng bước một.',
          'Đảm bảo nguồn thu nhập ổn định là ưu tiên hàng đầu. Tránh đầu tư rủi ro và tiếp cận cẩn thận.',
          'Học từ những thất bại tài chính trong quá khứ. Hãy cẩn thận không lặp lại những sai lầm tương tự.',
          'Tìm kiếm cơ hội mới trong môi trường mới. Môi trường thay đổi sẽ tạo ra vận tài lộc mới.',
          'Bắt đầu với tiết kiệm nhỏ. Ngay cả số tiền nhỏ, nếu được trân trọng, sẽ giúp ích rất nhiều sau này.',
          'Lập kế hoạch tài chính hoàn toàn mới. Nếu kế hoạch trong quá khứ thất bại, phải thử các phương pháp khác.',
          'Đừng từ bỏ. Vận tài lộc có thể thay đổi thông qua tư duy và nỗ lực. Bắt đầu ngay bây giờ.'
        ],
        id: [
          'Saat ini nasib kekayaan sangat kurang tetapi dapat diperbaiki melalui perubahan lengkap. Coba metode baru.',
          'Harus sepenuhnya mengubah manajemen keuangan. Lepaskan kebiasaan salah masa lalu dan buat sistem baru.',
          'Dapatkan bantuan ahli. Dapat mempelajari metode yang benar melalui konseling keuangan.',
          'Jangan mencoba menghasilkan uang banyak dengan cepat. Karena ini awal baru, bangun fondasi selangkah demi selangkah.',
          'Mengamankan sumber pendapatan stabil adalah prioritas utama. Hindari investasi berisiko dan pendekatan dengan hati-hati.',
          'Belajar dari kegagalan keuangan masa lalu. Hati-hati jangan ulangi kesalahan yang sama.',
          'Cari peluang baru di lingkungan baru. Lingkungan yang berubah akan menciptakan nasib kekayaan baru.',
          'Mulai dengan tabungan kecil. Bahkan jumlah kecil, jika dihargai, akan sangat membantu nanti.',
          'Buat rencana keuangan yang benar-benar baru. Jika rencana masa lalu gagal, harus mencoba metode yang berbeda.',
          'Jangan menyerah. Nasib kekayaan dapat diubah melalui pola pikir dan usaha. Mulai sekarang.'
        ]
      },
      love: {
        ko: [
          '현재 연애운이 크게 부족하지만 완전한 변화를 통해 개선할 수 있습니다.',
          '먼저 자신을 사랑하는 것부터 시작하세요. 자신을 소중히 여기지 못하면 다른 사람도 그렇게 하지 않을 것입니다.',
          '부정적인 관계 패턴을 완전히 바꿔야 합니다. 과거의 실패에서 배우고 새로운 방법을 시도하세요.',
          '새로운 환경에서 새로운 만남을 찾아보세요. 변화된 환경이 새로운 인연을 만들어줄 것입니다.',
          '전문가의 상담을 받아보세요. 관계 전문가의 조언이 도움이 될 수 있습니다.',
          '급하게 연애를 시작하지 마세요. 먼저 자신을 개선하고 준비된 모습으로 만나보세요.',
          '긍정적인 사람들과 어울리세요. 좋은 에너지가 당신의 연애운을 바꿔줄 것입니다.',
          '자신의 매력을 개발하세요. 규칙적인 생활과 긍정적인 행동이 당신을 더 매력적으로 만듭니다.',
          '과거에 매달리지 마세요. 새로운 사람을 만나고 새로운 관계를 만들어가세요.',
          '포기하지 마세요. 연애운은 마음가짐과 노력으로 바꿀 수 있습니다. 지금부터 시작하세요.'
        ],
        en: [
          'Currently relationship fortune is greatly lacking but can be improved through complete change.',
          'Start by loving yourself first. If you don\'t value yourself, others won\'t either.',
          'Must completely change negative relationship patterns. Learn from past failures and try new methods.',
          'Look for new encounters in new environment. Changed environment will create new relationships.',
          'Get professional counseling. Advice from relationship experts can help.',
          'Don\'t rush into relationships. First improve yourself and meet with prepared appearance.',
          'Associate with positive people. Good energy will change your relationship fortune.',
          'Develop your charm. Regular lifestyle and positive actions make you more attractive.',
          'Don\'t cling to the past. Meet new people and create new relationships.',
          'Don\'t give up. Relationship fortune can be changed through mindset and effort. Start now.'
        ],
        ja: [
          '現在恋愛運が大きく不足していますが、完全な変化を通じて改善できます。',
          'まず自分を愛することから始めてください。自分を大切にしなければ、他の人もそうしません。',
          '否定的な関係パターンを完全に変える必要があります。過去の失敗から学び、新しい方法を試してください。',
          '新しい環境で新しい出会いを探してください。変化した環境が新しい縁を作ってくれるでしょう。',
          '専門家の相談を受けてください。関係専門家のアドバイスが役立つ可能性があります。',
          '急いで恋愛を始めないでください。まず自分を改善し、準備した姿で会ってください。',
          'ポジティブな人々と付き合ってください。良いエネルギーがあなたの恋愛運を変えてくれるでしょう。',
          '自分の魅力を開発してください。規則正しい生活とポジティブな行動があなたをもっと魅力的にします。',
          '過去にしがみつかないでください。新しい人に会い、新しい関係を作ってください。',
          '諦めないでください。恋愛運は心構えと努力で変えることができます。今から始めてください。'
        ],
        'zh-CN': [
          '目前恋爱运严重不足，但可以通过完全改变改善。',
          '首先从爱自己开始。如果你不重视自己，别人也不会。',
          '必须完全改变消极的关系模式。从过去的失败中学习，尝试新方法。',
          '在新环境中寻找新的相遇。改变的环境将创造新的关系。',
          '寻求专业咨询。关系专家的建议可能有帮助。',
          '不要匆忙开始恋爱。先改善自己，以准备好的姿态去见面。',
          '与积极的人交往。好的能量会改变你的恋爱运。',
          '发展你的魅力。规律的生活和积极的行为会让你更有吸引力。',
          '不要沉溺于过去。认识新的人，建立新的关系。',
          '不要放弃。恋爱运可以通过心态和努力改变。现在开始。'
        ],
        'zh-TW': [
          '目前戀愛運嚴重不足，但可以通過完全改變改善。',
          '首先從愛自己開始。如果你不重視自己，別人也不會。',
          '必須完全改變消極的關係模式。從過去的失敗中學習，嘗試新方法。',
          '在新環境中尋找新的相遇。改變的環境將創造新的關係。',
          '尋求專業諮詢。關係專家的建議可能有幫助。',
          '不要匆忙開始戀愛。先改善自己，以準備好的姿態去見面。',
          '與積極的人交往。好的能量會改變你的戀愛運。',
          '發展你的魅力。規律的生活和積極的行為會讓你更有吸引力。',
          '不要沉溺於過去。認識新的人，建立新的關係。',
          '不要放棄。戀愛運可以通過心態和努力改變。現在開始。'
        ],
        vi: [
          'Hiện tại vận nhân duyên thiếu hụt nhiều nhưng có thể cải thiện thông qua thay đổi hoàn toàn.',
          'Bắt đầu bằng cách yêu bản thân trước. Nếu bạn không trân trọng bản thân, người khác cũng sẽ không.',
          'Phải thay đổi hoàn toàn các mẫu quan hệ tiêu cực. Học từ những thất bại trong quá khứ và thử các phương pháp mới.',
          'Tìm kiếm các cuộc gặp gỡ mới trong môi trường mới. Môi trường thay đổi sẽ tạo ra các mối quan hệ mới.',
          'Nhận tư vấn chuyên nghiệp. Lời khuyên từ các chuyên gia quan hệ có thể giúp ích.',
          'Đừng vội vàng bắt đầu mối quan hệ. Trước tiên hãy cải thiện bản thân và gặp gỡ với vẻ ngoài đã được chuẩn bị.',
          'Giao lưu với những người tích cực. Năng lượng tốt sẽ thay đổi vận nhân duyên của bạn.',
          'Phát triển sức hút của bạn. Lối sống đều đặn và hành động tích cực làm cho bạn hấp dẫn hơn.',
          'Đừng bám víu vào quá khứ. Gặp gỡ người mới và tạo ra các mối quan hệ mới.',
          'Đừng từ bỏ. Vận nhân duyên có thể thay đổi thông qua tư duy và nỗ lực. Bắt đầu ngay bây giờ.'
        ],
        id: [
          'Saat ini nasib hubungan sangat kurang tetapi dapat diperbaiki melalui perubahan lengkap.',
          'Mulai dengan mencintai diri sendiri dulu. Jika Anda tidak menghargai diri sendiri, orang lain juga tidak akan.',
          'Harus sepenuhnya mengubah pola hubungan negatif. Belajar dari kegagalan masa lalu dan coba metode baru.',
          'Cari pertemuan baru di lingkungan baru. Lingkungan yang berubah akan menciptakan hubungan baru.',
          'Dapatkan konseling profesional. Saran dari para ahli hubungan dapat membantu.',
          'Jangan terburu-buru memulai hubungan. Pertama perbaiki diri sendiri dan temui dengan penampilan yang dipersiapkan.',
          'Bergaul dengan orang positif. Energi baik akan mengubah nasib hubungan Anda.',
          'Kembangkan daya tarik Anda. Gaya hidup teratur dan tindakan positif membuat Anda lebih menarik.',
          'Jangan menggantungkan diri pada masa lalu. Temui orang baru dan ciptakan hubungan baru.',
          'Jangan menyerah. Nasib hubungan dapat diubah melalui pola pikir dan usaha. Mulai sekarang.'
        ]
      },
      success: {
        ko: [
          '현재 성공운이 크게 부족하지만 완전한 변화를 통해 개선할 수 있습니다.',
          '완전한 마음가짐 변화가 필요합니다. 부정적인 생각을 버리고 긍정적인 습관을 만들어가세요.',
          '새로운 환경을 찾으세요. 변화된 환경이 새로운 성공 기회를 만들어줄 것입니다.',
          '전문가의 조언을 구하세요. 올바른 가이드를 받으면 성공하는 방법을 더 잘 알 수 있습니다.',
          '단계별 목표를 세우고 하나씩 달성해가세요. 작은 성공이 큰 변화를 만듭니다.',
          '과거의 실패에서 배우되 그것에 매달리지 마세요. 새로운 방법을 시도하세요.',
          '포기하지 않는 강인함이 필요합니다. 어려울 수 있지만 지속적인 노력으로 충분히 바꿀 수 있습니다.',
          '좋은 습관을 형성하세요. 규칙적인 생활과 긍정적인 행동이 성공의 기반이 됩니다.',
          '타인과의 협력을 중시하세요. 혼자서 할 수 없는 것도 함께 하면 가능합니다.',
          '지금부터 시작하세요. 당신은 무한한 가능성을 가지고 있습니다. 변화를 두려워하지 말고 용기를 내세요.'
        ],
        en: [
          'Currently success fortune is greatly lacking but can be improved through complete change.',
          'Complete mindset change is needed. Let go of negative thoughts and create positive habits.',
          'Find new environment. Changed environment will create new success opportunities.',
          'Seek expert advice. With proper guidance, can better understand how to succeed.',
          'Set step-by-step goals and achieve them one by one. Small successes create big changes.',
          'Learn from past failures but don\'t cling to them. Try new methods.',
          'Need strength of not giving up. May be difficult but can definitely change with continuous effort.',
          'Form good habits. Regular lifestyle and positive actions become foundation of success.',
          'Value cooperation with others. Things impossible alone become possible together.',
          'Start now. You have infinite possibilities. Don\'t fear change, be courageous.'
        ],
        ja: [
          '現在成功運が大きく不足していますが、完全な変化を通じて改善できます。',
          '完全な心構えの変化が必要です。否定的な考えを捨て、ポジティブな習慣を作ってください。',
          '新しい環境を見つけてください。変化した環境が新しい成功機会を作ってくれるでしょう。',
          '専門家のアドバイスを求めてください。適切なガイダンスを受ければ、成功する方法をよりよく理解できます。',
          '段階的な目標を立て、一つずつ達成してください。小さな成功が大きな変化を作ります。',
          '過去の失敗から学びますが、それにしがみつかないでください。新しい方法を試してください。',
          '諦めない強さが必要です。難しいかもしれませんが、継続的な努力で必ず変えることができます。',
          '良い習慣を形成してください。規則正しい生活とポジティブな行動が成功の基盤になります。',
          '他人との協力を重視してください。一人ではできないことも一緒にすれば可能です。',
          '今から始めてください。あなたは無限の可能性を持っています。変化を恐れず、勇気を出してください。'
        ],
        'zh-CN': [
          '目前成功运严重不足，但可以通过完全改变改善。',
          '需要完全改变心态。抛弃消极想法，养成积极习惯。',
          '寻找新环境。改变的环境将创造新的成功机会。',
          '寻求专家建议。有了正确的指导，可以更好地理解如何成功。',
          '设定阶段性目标，逐一实现。小的成功创造大的变化。',
          '从过去的失败中学习，但不要沉溺于它们。尝试新方法。',
          '需要不放弃的力量。可能困难，但通过持续努力一定可以改变。',
          '养成好习惯。规律的生活和积极的行为成为成功的基础。',
          '重视与他人的合作。独自无法完成的事情，一起做就变得可能。',
          '现在开始。你有无限可能。不要害怕改变，勇敢面对。'
        ],
        'zh-TW': [
          '目前成功運嚴重不足，但可以通過完全改變改善。',
          '需要完全改變心態。拋棄消極想法，養成積極習慣。',
          '尋找新環境。改變的環境將創造新的成功機會。',
          '尋求專家建議。有了正確的指導，可以更好地理解如何成功。',
          '設定階段性目標，逐一實現。小的成功創造大的變化。',
          '從過去的失敗中學習，但不要沉溺於它們。嘗試新方法。',
          '需要不放棄的力量。可能困難，但通過持續努力一定可以改變。',
          '養成好習慣。規律的生活和積極的行為成為成功的基礎。',
          '重視與他人的合作。獨自無法完成的事情，一起做就變得可能。',
          '現在開始。你有無限可能。不要害怕改變，勇敢面對。'
        ],
        vi: [
          'Hiện tại vận thành công thiếu hụt nhiều nhưng có thể cải thiện thông qua thay đổi hoàn toàn.',
          'Cần thay đổi hoàn toàn tư duy. Từ bỏ suy nghĩ tiêu cực và tạo thói quen tích cực.',
          'Tìm môi trường mới. Môi trường thay đổi sẽ tạo ra các cơ hội thành công mới.',
          'Tìm kiếm lời khuyên của chuyên gia. Với hướng dẫn đúng, có thể hiểu rõ hơn cách thành công.',
          'Đặt mục tiêu từng bước và đạt được từng cái một. Những thành công nhỏ tạo ra thay đổi lớn.',
          'Học từ những thất bại trong quá khứ nhưng đừng bám víu vào chúng. Hãy thử các phương pháp mới.',
          'Cần sức mạnh không từ bỏ. Có thể khó khăn nhưng hoàn toàn có thể thay đổi với nỗ lực liên tục.',
          'Hình thành thói quen tốt. Lối sống đều đặn và hành động tích cực trở thành nền tảng của thành công.',
          'Trân trọng sự hợp tác với người khác. Những điều không thể làm một mình trở nên có thể khi làm cùng nhau.',
          'Bắt đầu ngay bây giờ. Bạn có khả năng vô hạn. Đừng sợ thay đổi, hãy can đảm.'
        ],
        id: [
          'Saat ini nasib kesuksesan sangat kurang tetapi dapat diperbaiki melalui perubahan lengkap.',
          'Perubahan pola pikir lengkap diperlukan. Lepaskan pikiran negatif dan ciptakan kebiasaan positif.',
          'Temukan lingkungan baru. Lingkungan yang berubah akan menciptakan peluang kesuksesan baru.',
          'Cari saran ahli. Dengan bimbingan yang tepat, dapat lebih memahami cara sukses.',
          'Tetapkan tujuan bertahap dan capai satu per satu. Kesuksesan kecil menciptakan perubahan besar.',
          'Belajar dari kegagalan masa lalu tetapi jangan menggantungkan diri pada mereka. Coba metode baru.',
          'Kekuatan tidak menyerah diperlukan. Mungkin sulit tetapi pasti bisa berubah dengan usaha berkelanjutan.',
          'Bentuk kebiasaan baik. Gaya hidup teratur dan tindakan positif menjadi fondasi kesuksesan.',
          'Hargai kerja sama dengan orang lain. Hal-hal yang tidak mungkin dilakukan sendiri menjadi mungkin bersama.',
          'Mulai sekarang. Anda memiliki kemungkinan tak terbatas. Jangan takut perubahan, berani.'
        ]
      }
    }
  }
];

// 관상 보기 결과 계산 함수
export function calculateFaceReadingResult(faceDetected: boolean, faceQuality: number): FaceReadingResult {
  if (!faceDetected) {
    // 얼굴이 감지되지 않은 경우 기본 결과 반환
    return faceReadingResults[5]; // 대흉상
  }

  // 얼굴 품질에 따른 점수 계산 (0-100)
  const baseScore = Math.min(100, Math.max(0, faceQuality));
  
  // 랜덤 요소 추가 (±10점)
  const randomFactor = (Math.random() - 0.5) * 20;
  const finalScore = Math.min(100, Math.max(0, baseScore + randomFactor));

  // 점수에 따른 결과 반환
  if (finalScore >= 90) return faceReadingResults[0]; // 대길상
  if (finalScore >= 80) return faceReadingResults[1]; // 중길상
  if (finalScore >= 70) return faceReadingResults[2]; // 소길상
  if (finalScore >= 60) return faceReadingResults[3]; // 평상상
  if (finalScore >= 40) return faceReadingResults[4]; // 소흉상
  return faceReadingResults[5]; // 대흉상
}
