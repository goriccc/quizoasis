// 얼굴로 보는 추천 직업 테스트 데이터

export interface FaceOccupationsResult {
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
    success: Record<string, string[]>; // 성공 확률
    hidden: Record<string, string[]>; // 숨겨진 가능성
  };
}

export interface FaceOccupationsTestClientProps {
  locale: string;
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  playCount?: number;
  similarTests?: any[];
  isLatestTest?: boolean;
}

// 얼굴로 보는 추천 직업 결과 데이터
export const faceOccupationsResults: FaceOccupationsResult[] = [
  {
    id: 1,
    title: {
      ko: '리더형',
      en: 'Leader Type',
      ja: 'リーダー型',
      'zh-CN': '领导者型',
      'zh-TW': '領導者型',
      vi: 'Kiểu Lãnh Đạo',
      id: 'Tipe Pemimpin'
    },
    description: {
      ko: [
        '당신의 얼굴은 강인한 의지와 뛰어난 지도력을 보여줍니다. 타인의 마음을 움직이고 큰 목표를 향해 나아가는 천부적인 자질이 있습니다.',
        '확고한 의지와 배짱이 얼굴에 드러나 있습니다. 팀을 이끌고 멀리 보는 시야로 조직을 발전시키는 데 적합한 인재입니다.',
        '의욕이 넘치고 추진력이 강한 얼굴입니다. 기업가정신과 CEO의 자질을 갖추고 있어 자기 사업이나 경영직에 성공할 가능성이 높습니다.',
        '선견지명과 판단력이 뛰어난 얼굴입니다. 위기 상황에서도 침착하게 결정을 내릴 수 있는 리더십을 가지고 있습니다.',
        '강한 추진력과 목표 지향적 성향이 나타납니다. 자신감과 결단력으로 큰 도전을 성공시키는 데 능합니다.',
        '타고난 카리스마가 느껴지는 얼굴입니다. 사람들을 설득하고 동기부여하는 능력이 뛰어나 팀 리더로서의 성공이 기대됩니다.',
        '전략적 사고와 리더십이 돋보입니다. 조직 내에서 빠르게 성장하며 높은 지위에 오를 가능성이 큽니다.',
        '목표를 향한 끈기와 추진력이 강합니다. CEO, 경영진, 정치인 등 리더십이 필요한 직무에 최적화되어 있습니다.',
        '강한 책임감과 의지력이 얼굴에 드러납니다. 팀을 통솔하고 큰 프로젝트를 성공시키는 데 능한 인재입니다.',
        '의욕적이고 진취적인 기운이 돋보입니다. 사업가, 기업가, 경영자 등 리더십을 발휘하는 직업에서 큰 성공을 거둘 것입니다.'
      ],
      en: [
        'Your face shows strong will and excellent leadership. You have an innate ability to move people\'s hearts and move toward great goals.',
        'Your strong will and courage are evident in your face. You are suitable for leading teams and developing organizations with far-sighted vision.',
        'Your face shows overflowing motivation and strong drive. You have entrepreneurial spirit and CEO qualities, and are likely to succeed in your own business or management.',
        'You have a face with excellent foresight and judgment. You have leadership that can make decisions calmly even in crisis situations.',
        'Strong drive and goal-oriented tendencies are evident. You are capable of achieving great challenges with confidence and determination.',
        'Your face shows natural charisma. You excel at persuading and motivating people, and are expected to succeed as a team leader.',
        'Strategic thinking and leadership stand out. You are likely to grow quickly in an organization and reach high positions.',
        'You have strong persistence and drive toward your goals. You are optimized for positions requiring leadership such as CEO, executives, and politicians.',
        'Strong sense of responsibility and willpower are evident in your face. You are a talent capable of leading teams and succeeding in large projects.',
        'Motivational and pioneering spirit stands out. You will achieve great success in occupations that demonstrate leadership such as entrepreneurs, business owners, and managers.'
      ],
      ja: [
        'あなたの顔は強固な意志と卓越したリーダーシップを示しています。他人の心を動かし、大きな目標に向かって進む先天的な資質があります。',
        '確固たる意志と度胸が顔に現れています。チームを導き、遠くを見る視野で組織を発展させるのに適した人材です。',
        '意欲が溢れ、推進力が強い顔です。起業家精神とCEOの資質を備えており、自己事業や経営職に成功する可能性が高いです。',
        '先見の明と判断力に優れた顔です。危機的な状況でも冷静に決定を下すことができるリーダーシップを持っています。',
        '強い推進力と目標指向的な傾向が現れています。自信と決断力で大きな挑戦を成功させる能力があります。',
        '生来のカリスマ性が感じられる顔です。人々を説得し、動機づけする能力に優れ、チームリーダーとしての成功が期待されます。',
        '戦略的思考とリーダーシップが目立ちます。組織内で急速に成長し、高い地位に上る可能性があります。',
        '目標への粘り強さと推進力が強いです。CEO、経営陣、政治家など、リーダーシップが必要な職務に最適化されています。',
        '強い責任感と意志力が顔に現れています。チームを統率し、大きなプロジェクトを成功させる能力を持つ人材です。',
        '意欲的で進取的な雰囲気が目立ちます。実業家、起業家、経営者など、リーダーシップを発揮する職業で大きな成功を収めるでしょう。'
      ],
      'zh-CN': [
        '你的面部显示出坚强的意志和卓越的领导力。你有天生的能力打动人心并朝着伟大目标前进。',
        '坚定的意志和胆识在你的脸上显而易见。你适合领导团队并以远见卓识发展组织。',
        '你的脸显示出充沛的动机和强大的推动力。你具备企业家精神和CEO品质，很可能在自己的事业或管理职位上成功。',
        '你有出色的远见和判断力。即使在危机情况下也能冷静地做出决定的领导力。',
        '强大的推动力和目标导向明显。你能够以信心和决心迎接重大挑战。',
        '你的脸显示出天生的魅力。你善于说服和激励他人，有望在团队领导方面取得成功。',
        '战略思维和领导力突出。你很可能在组织内快速成长并达到高位。',
        '你对目标有强烈的毅力和推动力。你适合需要领导力的职位，如CEO、高管和政治家。',
        '强烈的责任感和意志力在你的脸上显而易见。你是一名能够领导团队并在大型项目中取得成功的优秀人才。',
        '动机强烈和开拓精神突出。你将在展现领导力的职业如企业家、企业主和管理者中获得巨大成功。'
      ],
      'zh-TW': [
        '你的臉部顯示出堅強的意志和卓越的領導力。你有天生的能力打動人心並朝著偉大目標前進。',
        '堅定的意志和膽識在你的臉上顯而易見。你適合領導團隊並以遠見卓識發展組織。',
        '你的臉顯示出充沛的動機和強大的推動力。你具備企業家精神和CEO品質，很可能在自己的事業或管理職位成功。',
        '你有出色的遠見和判斷力。即使在危機情況下也能冷靜地做出決定的領導力。',
        '強大的推動力和目標導向明顯。你能夠以信心和決心迎接重大挑戰。',
        '你的臉顯示出天生的魅力。你善於說服和激勵他人，有望在團隊領導方面取得成功。',
        '戰略思維和領導力突出。你很可能在組織內快速成長並達到高位。',
        '你對目標有強烈的毅力和推動力。你適合需要領導力的職位，如CEO、高管和政治家。',
        '強烈的責任感和意志力在你的臉上顯而易見。你是一名能夠領導團隊並在大型專案中取得成功的優秀人才。',
        '動機強烈和開拓精神突出。你將在展現領導力的職業如企業家、企業主和管理者中獲得巨大成功。'
      ],
      vi: [
        'Khuôn mặt của bạn thể hiện ý chí mạnh mẽ và khả năng lãnh đạo xuất sắc. Bạn có tài năng bẩm sinh để lay động lòng người và hướng tới những mục tiêu lớn.',
        'Ý chí kiên định và lòng can đảm hiện rõ trên khuôn mặt của bạn. Bạn phù hợp để dẫn dắt nhóm và phát triển tổ chức với tầm nhìn xa.',
        'Khuôn mặt của bạn thể hiện động lực tràn đầy và sức đẩy mạnh. Bạn có tinh thần doanh nhân và phẩm chất CEO, và có khả năng thành công trong việc kinh doanh riêng hoặc quản lý.',
        'Bạn có khuôn mặt với tầm nhìn xa và khả năng phán đoán xuất sắc. Bạn có khả năng lãnh đạo để đưa ra quyết định một cách bình tĩnh ngay cả trong tình huống khủng hoảng.',
        'Sức đẩy mạnh và xu hướng hướng tới mục tiêu rõ ràng. Bạn có khả năng đạt được những thách thức lớn với sự tự tin và quyết tâm.',
        'Khuôn mặt của bạn thể hiện sự hấp dẫn tự nhiên. Bạn xuất sắc trong việc thuyết phục và động viên mọi người, và được mong đợi sẽ thành công như một nhà lãnh đạo nhóm.',
        'Tư duy chiến lược và khả năng lãnh đạo nổi bật. Bạn có khả năng phát triển nhanh chóng trong một tổ chức và đạt được vị trí cao.',
        'Bạn có sự kiên trì và sức đẩy mạnh mẽ hướng tới mục tiêu của mình. Bạn được tối ưu hóa cho các vị trí đòi hỏi khả năng lãnh đạo như CEO, giám đốc điều hành và chính trị gia.',
        'Cảm giác trách nhiệm mạnh mẽ và ý chí hiện rõ trên khuôn mặt của bạn. Bạn là một tài năng có khả năng dẫn dắt nhóm và thành công trong các dự án lớn.',
        'Tinh thần động viên và tiên phong nổi bật. Bạn sẽ đạt được thành công lớn trong các nghề nghiệp thể hiện khả năng lãnh đạo như doanh nhân, chủ doanh nghiệp và nhà quản lý.'
      ],
      id: [
        'Wajah Anda menunjukkan tekad yang kuat dan kepemimpinan yang luar biasa. Anda memiliki bakat bawaan untuk menyentuh hati orang dan bergerak menuju tujuan besar.',
        'Tekad yang kuat dan keberanian terlihat jelas di wajah Anda. Anda cocok untuk memimpin tim dan mengembangkan organisasi dengan visi yang jauh ke depan.',
        'Wajah Anda menunjukkan motivasi yang meluap dan dorongan yang kuat. Anda memiliki semangat kewirausahaan dan kualitas CEO, dan kemungkinan besar akan sukses dalam bisnis sendiri atau manajemen.',
        'Anda memiliki wajah dengan wawasan yang jauh ke depan dan penilaian yang sangat baik. Anda memiliki kepemimpinan yang dapat membuat keputusan dengan tenang bahkan dalam situasi krisis.',
        'Dorongan yang kuat dan kecenderungan orientasi tujuan jelas terlihat. Anda mampu mencapai tantangan besar dengan percaya diri dan tekad.',
        'Wajah Anda menunjukkan karisma alami. Anda unggul dalam meyakinkan dan memotivasi orang, dan diharapkan sukses sebagai pemimpin tim.',
        'Pemikiran strategis dan kepemimpinan menonjol. Anda kemungkinan besar akan tumbuh dengan cepat dalam organisasi dan mencapai posisi tinggi.',
        'Anda memiliki ketekunan dan dorongan yang kuat menuju tujuan Anda. Anda dioptimalkan untuk posisi yang memerlukan kepemimpinan seperti CEO, eksekutif, dan politisi.',
        'Rasa tanggung jawab yang kuat dan kekuatan tekad terlihat jelas di wajah Anda. Anda adalah bakat yang mampu memimpin tim dan sukses dalam proyek besar.',
        'Semangat motivasi dan perintis menonjol. Anda akan mencapai kesuksesan besar dalam karir yang menunjukkan kepemimpinan seperti pengusaha, pemilik bisnis, dan manajer.'
      ]
    },
    emoji: '👑',
    scoreRange: [90, 100],
    strengths: {
      ko: ['리더십', '의지력', '결단력', '카리스마', '목표 지향성', '책임감', '추진력', '전략적 사고', '설득력', '자신감'],
      en: ['Leadership', 'Willpower', 'Decision-making', 'Charisma', 'Goal-oriented', 'Responsibility', 'Drive', 'Strategic thinking', 'Persuasion', 'Confidence'],
      ja: ['リーダーシップ', '意志力', '決断力', 'カリスマ', '目標指向性', '責任感', '推進力', '戦略的思考', '説得力', '自信'],
      'zh-CN': ['领导力', '意志力', '决策力', '魅力', '目标导向', '责任感', '推动力', '战略思维', '说服力', '自信'],
      'zh-TW': ['領導力', '意志力', '決策力', '魅力', '目標導向', '責任感', '推動力', '戰略思維', '說服力', '自信'],
      vi: ['Lãnh đạo', 'Ý chí', 'Quyết đoán', 'Hấp dẫn', 'Hướng mục tiêu', 'Trách nhiệm', 'Động lực', 'Tư duy chiến lược', 'Thuyết phục', 'Tự tin'],
      id: ['Kepemimpinan', 'Kekuatan tekad', 'Pengambilan keputusan', 'Karisma', 'Berorientasi tujuan', 'Tanggung jawab', 'Dorongan', 'Pemikiran strategis', 'Kemampuan meyakinkan', 'Kepercayaan diri']
    },
    recommendations: {
      ko: ['CEO', '경영자', '기업가', '정치인', '경영 컨설턴트', '팀 리더', '프로젝트 매니저', '경영진', '투자자', '창업가'],
      en: ['CEO', 'Executive', 'Entrepreneur', 'Politician', 'Management Consultant', 'Team Leader', 'Project Manager', 'Senior Management', 'Investor', 'Startup Founder'],
      ja: ['CEO', '経営者', '起業家', '政治家', '経営コンサルタント', 'チームリーダー', 'プロジェクトマネージャー', '経営陣', '投資家', '起業家'],
      'zh-CN': ['首席执行官', '管理者', '企业家', '政治家', '管理顾问', '团队领导者', '项目经理', '高层管理', '投资者', '创业家'],
      'zh-TW': ['首席執行官', '管理者', '企業家', '政治家', '管理顧問', '團隊領導者', '專案經理', '高層管理', '投資者', '創業家'],
      vi: ['CEO', 'Giám đốc điều hành', 'Doanh nhân', 'Chính trị gia', 'Tư vấn quản lý', 'Trưởng nhóm', 'Quản lý dự án', 'Quản lý cấp cao', 'Nhà đầu tư', 'Người sáng lập'],
      id: ['CEO', 'Eksekutif', 'Pengusaha', 'Politisi', 'Konsultan Manajemen', 'Pemimpin Tim', 'Manajer Proyek', 'Manajemen Senior', 'Investor', 'Pendiri Startup']
    },
    personality: {
      ko: [
        '강한 추진력과 목표 의식이 있는 성격입니다. 어려운 일도 포기하지 않고 끝까지 해내는 끈기가 있습니다.',
        '자신감과 결단력이 뛰어난 사람입니다. 위기 상황에서도 침착하게 판단하고 빠르게 결정을 내립니다.',
        '타인을 이끌고 동기부여하는 능력이 뛰어납니다. 팀의 목표를 명확히 설정하고 모두가 그 목표를 달성하도록 돕습니다.',
        '전략적 사고와 판단력이 뛰어난 사람입니다. 먼저 사물을 보고 올바른 방향을 제시하는 지도력이 있습니다.',
        '책임감이 강하고 신뢰할 수 있는 사람입니다. 약속을 지키고 자신의 역할을 완벽하게 수행합니다.',
        '카리스마가 있고 사람들에게 강한 인상을 남기는 성격입니다. 많은 사람들에게 존경을 받고 따르는 대상이 됩니다.',
        '도전 정신이 강하고 새로운 일을 시도하는 것을 좋아합니다. 편안한 일상보다는 성장과 발전을 추구합니다.',
        '의지력이 강하고 포기하지 않는 성격입니다. 장애물이 있어도 그것을 돌파할 힘이 있습니다.',
        '사람을 보는 눈이 있고, 각자의 장점을 발휘하도록 돕습니다. 팀 내에서 조화로운 분위기를 만드는 능력이 있습니다.',
        '성취욕이 강하고 목표를 달성하는 데 집중합니다. 큰 성과를 내는 것을 즐기고 성공에 대한 집착이 있습니다.'
      ],
      en: [
        'You have a strong drive and sense of purpose. You have the tenacity to never give up on difficult things and see them through to the end.',
        'You are a person with excellent confidence and decision-making skills. You remain calm and make quick decisions even in crisis situations.',
        'You excel at leading and motivating others. You clearly set team goals and help everyone achieve those goals.',
        'You are a person with excellent strategic thinking and judgment. You have the leadership to see things ahead and suggest the right direction.',
        'You are a person with a strong sense of responsibility and reliability. You keep your promises and perform your role perfectly.',
        'You have charisma and leave a strong impression on people. You become an object of respect and following for many people.',
        'You have a strong spirit of challenge and enjoy trying new things. You pursue growth and development rather than a comfortable daily life.',
        'You have a strong will and do not give up. You have the power to break through obstacles.',
        'You have an eye for people and help each person demonstrate their strengths. You have the ability to create a harmonious atmosphere within the team.',
        'You have a strong desire for achievement and focus on achieving goals. You enjoy producing great results and have an obsession with success.'
      ],
      ja: [
        '強い推進力と目標意識がある性格です。難しいことでも諦めずに最後までやり遂げる粘り強さがあります。',
        '自信と決断力に優れた人です。危機的な状況でも冷静に判断し、迅速に決定を下します。',
        '他人を導き、動機づけする能力に優れています。チームの目標を明確に設定し、すべての人がその目標を達成できるように助けます。',
        '戦略的思考と判断力に優れた人です。先に物事を見て、正しい方向を示すリーダーシップがあります。',
        '責任感が強く、信頼できる人です。約束を守り、自分の役割を完璧に実行します。',
        'カリスマがあり、人々に強い印象を与える性格です。多くの人から尊敬され、従う対象になります。',
        '挑戦精神が強く、新しいことを試すことを好みます。心地よい日常よりも成長と発展を追求します。',
        '意志力が強く、諦めない性格です。障害があってもそれを突破する力があります。',
        '人を見る目があり、各自の長所を発揮させるように助けます。チーム内で調和の取れた雰囲気を作る能力があります。',
        '達成欲が強く、目標達成に集中します。大きな成果を出すことを楽しみ、成功への執着があります。'
      ],
      'zh-CN': [
        '你具有强烈的推动力和目标意识。即使困难的事情也不会放弃，会坚持到底。',
        '你是一个自信心和决策力出色的人。即使在危机情况下也能冷静判断并快速做出决定。',
        '你善于领导和激励他人。你明确设定团队目标并帮助每个人实现这些目标。',
        '你是一个战略思维和判断力出色的人。你有先见之明并提出正确方向的领导力。',
        '你是一个责任心强、值得信赖的人。你会信守承诺并完美地履行自己的职责。',
        '你有魅力并能给人留下深刻印象。你会成为许多人尊重和追随的对象。',
        '你有强烈的挑战精神，喜欢尝试新事物。你追求成长和发展，而不是安逸的日常生活。',
        '你意志坚强，不轻易放弃。你有力量突破障碍。',
        '你有识人之能，帮助每个人发挥自己的长处。你有能力在团队内营造和谐的氛围。',
        '你有强烈的成就欲，专注于实现目标。你享受取得巨大成果，对成功有执着追求。'
      ],
      'zh-TW': [
        '你具有強烈的推動力和目標意識。即使困難的事情也不會放棄，會堅持到底。',
        '你是一個自信心和決策力出色的人。即使在危機情況下也能冷靜判斷並快速做出決定。',
        '你善於領導和激勵他人。你明確設定團隊目標並幫助每個人實現這些目標。',
        '你是一個戰略思維和判斷力出色的人。你有先見之明並提出正確方向的領導力。',
        '你是一個責任心強、值得信賴的人。你會信守承諾並完美地履行自己的職責。',
        '你有魅力並能給人留下深刻印象。你會成為許多人尊重和追隨的對象。',
        '你有強烈的挑戰精神，喜歡嘗試新事物。你追求成長和發展，而不是安逸的日常生活。',
        '你意志堅強，不輕易放棄。你有力量突破障礙。',
        '你有識人之能，幫助每個人發揮自己的長處。你有能力在團隊內營造和諧的氛圍。',
        '你有強烈的成就欲，專注於實現目標。你享受取得巨大成果，對成功有執著追求。'
      ],
      vi: [
        'Bạn có tính cách với động lực mạnh mẽ và ý thức mục tiêu. Bạn có sự kiên trì để không bỏ cuộc trước những việc khó và xử lý chúng đến cùng.',
        'Bạn là người có sự tự tin và khả năng đưa ra quyết định xuất sắc. Bạn giữ bình tĩnh và đưa ra quyết định nhanh chóng ngay cả trong tình huống khủng hoảng.',
        'Bạn xuất sắc trong việc dẫn dắt và động viên người khác. Bạn đặt mục tiêu nhóm rõ ràng và giúp mọi người đạt được những mục tiêu đó.',
        'Bạn là người có tư duy chiến lược và khả năng phán đoán xuất sắc. Bạn có khả năng lãnh đạo để nhìn thấy mọi thứ trước và đề xuất hướng đi đúng đắn.',
        'Bạn là người có ý thức trách nhiệm mạnh và đáng tin cậy. Bạn giữ lời hứa và thực hiện vai trò của mình một cách hoàn hảo.',
        'Bạn có sự hấp dẫn và để lại ấn tượng mạnh mẽ với mọi người. Bạn trở thành đối tượng được tôn trọng và theo dõi cho nhiều người.',
        'Bạn có tinh thần thử thách mạnh và thích thử những điều mới. Bạn theo đuổi sự phát triển và tiến bộ hơn là cuộc sống hàng ngày thoải mái.',
        'Bạn có ý chí mạnh và không bỏ cuộc. Bạn có sức mạnh để vượt qua các trở ngại.',
        'Bạn có khả năng nhìn người và giúp mỗi người thể hiện điểm mạnh của họ. Bạn có khả năng tạo ra không khí hài hòa trong nhóm.',
        'Bạn có mong muốn thành tích mạnh và tập trung vào việc đạt được mục tiêu. Bạn thích tạo ra kết quả lớn và có sự ám ảnh với thành công.'
      ],
      id: [
        'Anda memiliki kepribadian dengan dorongan yang kuat dan kesadaran tujuan. Anda memiliki ketekunan untuk tidak menyerah pada hal-hal yang sulit dan menyelesaikannya sampai akhir.',
        'Anda adalah orang dengan kepercayaan diri yang luar biasa dan keterampilan pengambilan keputusan. Anda tetap tenang dan membuat keputusan cepat bahkan dalam situasi krisis.',
        'Anda unggul dalam memimpin dan memotivasi orang lain. Anda dengan jelas menetapkan tujuan tim dan membantu semua orang mencapai tujuan tersebut.',
        'Anda adalah orang dengan pemikiran strategis dan penilaian yang luar biasa. Anda memiliki kepemimpinan untuk melihat hal-hal ke depan dan menyarankan arah yang tepat.',
        'Anda adalah orang dengan rasa tanggung jawab yang kuat dan dapat diandalkan. Anda menepati janji dan menjalankan peran Anda dengan sempurna.',
        'Anda memiliki karisma dan meninggalkan kesan yang kuat pada orang. Anda menjadi objek rasa hormat dan pengikut banyak orang.',
        'Anda memiliki semangat tantangan yang kuat dan menikmati mencoba hal-hal baru. Anda mengejar pertumbuhan dan perkembangan daripada kehidupan sehari-hari yang nyaman.',
        'Anda memiliki kemauan yang kuat dan tidak menyerah. Anda memiliki kekuatan untuk menembus rintangan.',
        'Anda memiliki mata untuk orang dan membantu setiap orang menunjukkan kekuatan mereka. Anda memiliki kemampuan untuk menciptakan suasana harmonis dalam tim.',
        'Anda memiliki keinginan yang kuat untuk pencapaian dan fokus pada pencapaian tujuan. Anda menikmati menghasilkan hasil yang besar dan memiliki obsesi terhadap kesuksesan.'
      ]
    },
    advice: {
      ko: [
        '당신의 강한 리더십을 활용하여 큰 목표를 세우고 팀을 이끌어보세요. CEO나 경영자의 길을 추천합니다. 당신은 리더로서 사람들에게 방향을 제시하고 그들을 성장시키며 함께 목표를 달성하는 능력이 뛰어나므로 경영직에서 큰 성공을 거둘 수 있습니다.',
        '자신의 사업을 시작하거나 높은 위치의 경영직을 노려보세요. 당신의 판단력과 추진력으로 성공할 것입니다. 특히 자영업이나 창업을 통해 자신만의 비즈니스를 만들고 독립적인 경영을 하는 것도 좋은 선택이 될 수 있으며, 대기업의 최고 경영진이 되어 조직을 이끄는 것도 당신의 능력을 발휘할 수 있는 분야입니다.',
        '정치인이나 공공 기관의 관리자로서 사회에 기여할 수 있는 길을 고려해보세요. 당신은 개인의 이익보다는 사회 전체의 이익을 생각하는 큰 마음이 있고, 많은 사람들에게 도움이 되는 정책이나 사업을 추진하는 데 적합한 성향을 가지고 있어 공공 분야에서도 뛰어난 성과를 낼 수 있습니다.',
        '당신의 카리스마를 활용하여 많은 사람들에게 영향을 미칠 수 있는 직업을 선택하세요. 연사, 강연자, 세미나 전문가, 또는 교육 분야에서 많은 사람들에게 영감을 주고 그들을 이끄는 역할을 하는 것도 좋은 선택입니다. 당신의 목소리와 메시지는 사람들에게 긍정적인 변화를 가져다 줄 것입니다.',
        '책임감 있는 위치에서 팀을 통솔하고 큰 프로젝트를 성공시키는 데 집중하세요. 프로젝트 매니저, 프로그램 관리자, 사업부장 등 큰 규모의 프로젝트나 사업을 담당하는 역할에서 당신의 능력을 최대한 발휘할 수 있으며, 팀 전체의 성과를 높이고 조직의 목표를 달성하는 데 기여할 수 있습니다.',
        '경영 컨설턴트나 경영 컨설턴트로 활동하며 많은 기업을 도울 수 있습니다. 당신은 다양한 기업의 경영 상황을 분석하고 개선 방안을 제시하는 능력이 뛰어나 경영 컨설팅 분야에서도 성공할 수 있으며, 여러 기업의 자문 역할을 하면서 그들의 성장을 돕는 보람 있는 일을 할 수 있습니다.',
        '투자자나 벤처 캐피털리스트로서 혁신적인 기업에 투자하고 성장시키는 일을 해보세요. 당신은 좋은 기회를 발견하고 그것을 현실화시키는 능력이 뛰어나 잠재력 있는 스타트업이나 기업을 발굴하고 지원하여 함께 성장하는 것이 당신에게 적합한 분야일 수 있습니다.',
        '당신의 전략적 사고와 지도력을 활용하여 복잡한 문제를 해결하는 역할을 맡으세요. 전략기획팀, 경영기획팀, 또는 비즈니스 개발팀 등에서 조직의 미래를 그려내고 새로운 비즈니스 모델을 개발하는 일을 하는 것도 당신의 능력을 발휘할 수 있는 좋은 분야입니다.',
        'CEO나 최고경영자(CMO, CFO 등)로서 조직을 이끌고 성장시키는 일을 추천합니다. 당신은 조직 전체의 성과를 책임지고 장기적인 비전을 수립하며 실행하는 능력이 뛰어나 최고 경영진의 역할을 맡을 수 있으며, 그러한 위치에서 조직을 새로운 차원으로 끌어올릴 수 있습니다.',
        '창업가로서 새로운 사업 아이디어를 현실화하고 성공시키는 것을 고려해보세요. 당신의 추진력이 큰 성공을 가져다줄 것입니다. 당신은 아이디어를 현실화하고 비즈니스를 만들어나가는 모든 과정에서 필요한 능력들을 갖추고 있어 창업 분야에서도 뛰어난 성과를 낼 수 있으며, 혁신적인 사업 모델을 만들어 사회에 긍정적인 영향을 미칠 수 있습니다.'
      ],
      en: [
        'Use your strong leadership to set great goals and lead a team. I recommend the path of CEO or executive. As a leader, you excel at providing direction to people, helping them grow, and working together to achieve goals, so you can achieve great success in management positions.',
        'Consider starting your own business or aiming for high-level management positions. Your judgment and drive will lead to success. Starting your own business or becoming part of top management in a large corporation are both excellent ways to utilize your abilities and demonstrate your leadership.',
        'Consider a path to contribute to society as a politician or administrator of public institutions. You have a big heart that thinks about the benefit of society as a whole rather than personal gain, and you are well-suited to promoting policies and projects that help many people, allowing you to achieve excellent results in the public sector.',
        'Use your charisma to choose a profession that can influence many people. Being a speaker, lecturer, seminar expert, or working in education where you inspire and lead many people are also great choices. Your voice and message will bring positive change to people.',
        'Focus on leading teams and succeeding in large projects in responsible positions. In roles such as project manager, program manager, or business unit head that handle large-scale projects, you can maximize your abilities, improve team performance, and contribute to achieving organizational goals.',
        'You can work as a management consultant or business advisor and help many companies. You excel at analyzing the management situations of various companies and proposing improvement plans, allowing you to succeed in the management consulting field and gain fulfillment from helping companies grow through advisory roles.',
        'As an investor or venture capitalist, try investing in innovative companies and growing them. You excel at discovering good opportunities and making them happen, so identifying and supporting promising startups or companies to grow together may be an ideal field for you.',
        'Take on the role of solving complex problems using your strategic thinking and leadership. Working in strategy planning teams, management planning teams, or business development teams to envision the future of the organization and develop new business models is also a great field where you can demonstrate your abilities.',
        'I recommend leading and growing organizations as a CEO or C-level executive (CMO, CFO, etc.). You excel at taking responsibility for the overall performance of the organization, establishing long-term visions, and executing them, making you capable of taking on C-suite roles and elevating the organization to new heights from such positions.',
        'As an entrepreneur, consider realizing and succeeding new business ideas. Your drive will bring great success. You have all the abilities needed throughout the process of realizing ideas and building businesses, allowing you to achieve excellent results in entrepreneurship and create innovative business models that positively impact society.'
      ],
      ja: [
        'あなたの強いリーダーシップを活用して、大きな目標を設定し、チームを導いてみてください。CEOや経営者の道をお勧めします。リーダーとして、あなたは人々に方向を示し、彼らを成長させ、一緒に目標を達成する能力に優れているため、経営職で大きな成功を収めることができます。',
        '自分の事業を始めるか、高い位置の経営職を目指してみてください。あなたの判断力と推進力で成功するでしょう。特に個人事業や起業を通じて自分だけのビジネスを作り、独立した経営を行うことも良い選択肢になることがあり、大企業の最高経営陣となって組織を導くこともあなたの能力を発揮できる分野です。',
        '政治家や公共機関の管理者として社会に貢献できる道を考えてみてください。あなたは個人の利益よりも社会全体の利益を考える大きな心を持ち、多くの人々に役立つ政策や事業を推進するのに適した傾向を持っているため、公共分野でも優れた成果を上げることができます。',
        'あなたのカリスマを活用して、多くの人に影響を与えられる職業を選択してください。スピーカー、講師、セミナー専門家、または教育分野で多くの人々にインスピレーションを与え、彼らを導く役割をすることも良い選択です。あなたの声とメッセージは人々にポジティブな変化をもたらします。',
        '責任のある位置でチームを統率し、大きなプロジェクトを成功させることに集中してください。プロジェクトマネージャー、プログラムマネージャー、事業部長など、大規模なプロジェクトや事業を担当する役割では、あなたの能力を最大限に発揮することができ、チーム全体のパフォーマンスを向上させ、組織の目標達成に貢献できます。',
        '経営コンサルタントや経営アドバイザーとして活動し、多くの企業を助けることができます。あなたは様々な企業の経営状況を分析し、改善策を提案する能力に優れているため、経営コンサルティング分野でも成功でき、複数の企業の顧問として彼らの成長を助けるやりがいのある仕事ができます。',
        '投資家やベンチャーキャピタリストとして、革新的な企業に投資し、成長させることをしてみてください。あなたは良い機会を発見し、それを現実化する能力に優れているため、有望なスタートアップや企業を発掘し、支援して一緒に成長することがあなたに適した分野かもしれません。',
        'あなたの戦略的思考とリーダーシップを活用して、複雑な問題を解決する役割を担ってください。戦略企画チーム、経営企画チーム、またはビジネス開発チームなどで、組織の未来を描き、新しいビジネスモデルを開発する仕事をすることも、あなたの能力を発揮できる良い分野です。',
        'CEOや最高経営責任者(CMO、CFOなど)として組織を導き、成長させることをお勧めします。あなたは組織全体のパフォーマンスに責任を持ち、長期的なビジョンを策定し、実行する能力に優れているため、最高経営陣の役割を担うことができ、そのような立場から組織を新しい次元に引き上げることができます。',
        '起業家として新しいビジネスアイデアを実現し、成功させることを考えてみてください。あなたの推進力が大きな成功をもたらすでしょう。あなたはアイデアを現実化し、ビジネスを作り上げていくすべてのプロセスにおいて必要な能力を備えているため、起業分野でも優れた成果を上げることができ、革新的なビジネスモデルを作り、社会にポジティブな影響を与えることができます。'
      ],
      'zh-CN': [
        '运用你强大的领导力设定伟大目标并领导团队。我推荐CEO或高管的道路。作为领导者，你善于给人们指明方向，帮助他们成长，并一起实现目标，因此你可以在管理职位上取得巨大成功。',
        '考虑创业或争取高级管理职位。你的判断力和推动力将带来成功。特别是通过自营职业或创业来建立自己的业务并进行独立管理，可能是一个很好的选择，成为大型企业的最高管理层领导组织也是你可以发挥能力的领域。',
        '考虑作为政治家或公共机构管理者为社会做出贡献的道路。你有大格局思维，考虑整个社会的利益而不仅仅是个人利益，适合推进帮助许多人的政策或项目，使你在公共部门也能取得优秀成果。',
        '利用你的魅力选择能够影响许多人的职业。成为演讲者、讲师、研讨会专家或在教育领域激励和引导许多人，也是很好的选择。你的声音和信息将给人们带来积极的改变。',
        '专注于在负责任的位置上领导团队并在大型项目中取得成功。在担任项目经理、程序管理员或业务部门负责人等处理大型项目或业务的角色中，你可以最大程度地发挥自己的能力，提高团队整体绩效，并为实现组织目标做出贡献。',
        '你可以作为管理顾问或商业顾问帮助许多公司。你善于分析各公司的管理情况并提出改进方案，这使你能在管理咨询领域获得成功，并在担任多家公司的顾问角色时帮助它们成长，这是一份有意义的工作。',
        '作为投资者或风险资本家，尝试投资创新公司并推动其增长。你善于发现好机会并将其变为现实，因此发掘和支持有潜力的初创企业或公司一起成长，可能是适合你的领域。',
        '承担使用你的战略思维和领导力解决复杂问题的角色。在战略规划团队、管理规划团队或业务开发团队中描绘组织的未来并开发新的商业模式，也是你可以发挥能力的好领域。',
        '我建议作为CEO或C级高管（CMO、CFO等）领导和增长组织。你善于承担组织整体绩效的责任，建立长期愿景并执行，使你有能力担任高级管理职务，并从这些位置将组织提升到新的高度。',
        '作为企业家，考虑实现并成功推出新的商业想法。你的推动力将带来巨大成功。你在实现想法和建立业务的整个过程中都拥有所需的能力，使你能在创业领域取得优秀成果，并创建对社会产生积极影响的创新商业模式。'
      ],
      'zh-TW': [
        '運用你強大的領導力設定偉大目標並領導團隊。我推薦CEO或高管的道路。作為領導者，你善於給人們指明方向，幫助他們成長，並一起實現目標，因此你可以在管理職位上取得巨大成功。',
        '考慮創業或爭取高級管理職位。你的判斷力和推動力將帶來成功。特別是通過自營職業或創業來建立自己的業務並進行獨立管理，可能是一個很好的選擇，成為大型企業的最高管理層領導組織也是你可以發揮能力的領域。',
        '考慮作為政治家或公共機構管理者為社會做出貢獻的道路。你有大格局思維，考慮整個社會的利益而不僅僅是個人利益，適合推進幫助許多人人的政策或專案，使你在公共部門也能取得優秀成果。',
        '利用你的魅力選擇能夠影響許多人的職業。成為演講者、講師、研討會專家或在教育領域激勵和引導許多人，也是很好的選擇。你的聲音和資訊將給人們帶來積極的改變。',
        '專注於在負責任的位置上領導團隊並在大型專案中取得成功。在擔任專案經理、程式管理員或業務部門負責人等處理大型專案或業務的角色中，你可以最大程度地發揮自己的能力，提高團隊整體績效，並為實現組織目標做出貢獻。',
        '你可以作為管理顧問或商業顧問幫助許多公司。你善於分析各公司的管理情況並提出改進方案，這使你能在管理顧問領域獲得成功，並在擔任多家公司的顧問角色時幫助它們成長，這是一份有意義的工作。',
        '作為投資者或風險資本家，嘗試投資創新公司並推動其增長。你善於發現好機會並將其變為現實，因此發掘和支持有潛力的初創企業或公司一起成長，可能是適合你的領域。',
        '承擔使用你的戰略思維和領導力解決複雜問題的角色。在戰略規劃團隊、管理規劃團隊或業務開發團隊中描繪組織的未來並開發新的商業模式，也是你可以發揮能力的好領域。',
        '我建議作為CEO或C級高管（CMO、CFO等）領導和增長組織。你善於承擔組織整體績效的責任，建立長期願景並執行，使你有能力擔任高級管理職務，並從這些位置將組織提升到新的高度。',
        '作為企業家，考慮實現並成功推出新的商業想法。你的推動力將帶來巨大成功。你在實現想法和建立業務的整個過程中都擁有所需的能力，使你能在創業領域取得優秀成果，並創建對社會產生積極影響的創新商業模式。'
      ],
      vi: [
        'Sử dụng khả năng lãnh đạo mạnh mẽ của bạn để đặt mục tiêu lớn và dẫn dắt một nhóm. Tôi khuyên bạn nên theo con đường CEO hoặc giám đốc điều hành. Với tư cách là một nhà lãnh đạo, bạn xuất sắc trong việc cung cấp hướng dẫn cho mọi người, giúp họ phát triển và làm việc cùng nhau để đạt được mục tiêu, vì vậy bạn có thể đạt được thành công lớn trong các vị trí quản lý.',
        'Hãy cân nhắc bắt đầu công việc kinh doanh riêng của mình hoặc hướng tới các vị trí quản lý cấp cao. Khả năng phán đoán và động lực của bạn sẽ dẫn đến thành công. Đặc biệt, việc bắt đầu kinh doanh riêng hoặc khởi nghiệp để tạo ra doanh nghiệp của riêng mình và quản lý độc lập có thể là lựa chọn tốt, và việc trở thành cấp quản lý cao nhất của các tập đoàn lớn để lãnh đạo tổ chức cũng là lĩnh vực nơi bạn có thể phát huy khả năng của mình.',
        'Hãy cân nhắc một con đường để đóng góp cho xã hội như một chính trị gia hoặc quản trị viên của các tổ chức công cộng. Bạn có tấm lòng rộng lớn nghĩ về lợi ích của toàn xã hội thay vì lợi ích cá nhân, và bạn có xu hướng phù hợp để thúc đẩy các chính sách hoặc dự án giúp ích cho nhiều người, cho phép bạn đạt được kết quả xuất sắc trong lĩnh vực công cộng.',
        'Sử dụng sự hấp dẫn của bạn để chọn một nghề nghiệp có thể ảnh hưởng đến nhiều người. Việc trở thành diễn giả, giảng viên, chuyên gia hội thảo, hoặc làm việc trong lĩnh vực giáo dục nơi bạn truyền cảm hứng và dẫn dắt nhiều người cũng là những lựa chọn tốt. Giọng nói và thông điệp của bạn sẽ mang lại thay đổi tích cực cho mọi người.',
        'Tập trung vào việc dẫn dắt nhóm và thành công trong các dự án lớn ở các vị trí có trách nhiệm. Trong các vai trò như quản lý dự án, quản lý chương trình hoặc trưởng bộ phận kinh doanh xử lý các dự án hoặc doanh nghiệp quy mô lớn, bạn có thể tối đa hóa khả năng của mình, cải thiện hiệu suất của nhóm và đóng góp vào việc đạt được mục tiêu của tổ chức.',
        'Bạn có thể làm việc như một cố vấn quản lý hoặc cố vấn kinh doanh và giúp đỡ nhiều công ty. Bạn xuất sắc trong việc phân tích tình hình quản lý của các công ty khác nhau và đề xuất các kế hoạch cải thiện, cho phép bạn thành công trong lĩnh vực tư vấn quản lý và có được sự viên mãn từ việc giúp các công ty phát triển thông qua vai trò cố vấn.',
        'Như một nhà đầu tư hoặc nhà đầu tư mạo hiểm, hãy thử đầu tư vào các công ty sáng tạo và phát triển chúng. Bạn xuất sắc trong việc khám phá các cơ hội tốt và biến chúng thành hiện thực, vì vậy việc xác định và hỗ trợ các công ty khởi nghiệp hoặc công ty đầy hứa hẹn để cùng phát triển có thể là lĩnh vực lý tưởng cho bạn.',
        'Đảm nhận vai trò giải quyết các vấn đề phức tạp bằng cách sử dụng tư duy chiến lược và khả năng lãnh đạo của bạn. Làm việc trong các đội lập kế hoạch chiến lược, các đội lập kế hoạch quản lý, hoặc các đội phát triển kinh doanh để hình dung tương lai của tổ chức và phát triển các mô hình kinh doanh mới cũng là lĩnh vực tuyệt vời nơi bạn có thể thể hiện khả năng của mình.',
        'Tôi khuyên bạn nên dẫn dắt và phát triển các tổ chức như một CEO hoặc giám đốc điều hành cấp C (CMO, CFO, v.v.). Bạn xuất sắc trong việc chịu trách nhiệm về hiệu suất tổng thể của tổ chức, thiết lập tầm nhìn dài hạn và thực thi chúng, khiến bạn có khả năng đảm nhận các vai trò cấp C và nâng tổ chức lên tầm cao mới từ các vị trí như vậy.',
        'Như một doanh nhân, hãy cân nhắc thực hiện và thành công trong các ý tưởng kinh doanh mới. Động lực của bạn sẽ mang lại thành công lớn. Bạn có tất cả các khả năng cần thiết trong suốt quá trình hiện thực hóa ý tưởng và xây dựng doanh nghiệp, cho phép bạn đạt được kết quả xuất sắc trong kinh doanh và tạo ra các mô hình kinh doanh sáng tạo tác động tích cực đến xã hội.'
      ],
      id: [
        'Gunakan kepemimpinan Anda yang kuat untuk menetapkan tujuan besar dan memimpin tim. Saya merekomendasikan jalur CEO atau eksekutif. Sebagai seorang pemimpin, Anda unggul dalam memberikan arahan kepada orang-orang, membantu mereka tumbuh, dan bekerja sama untuk mencapai tujuan, sehingga Anda dapat mencapai kesuksesan besar dalam posisi manajemen.',
        'Pertimbangkan untuk memulai bisnis sendiri atau menargetkan posisi manajemen tingkat tinggi. Penilaian dan dorongan Anda akan mengarah pada kesuksesan. Secara khusus, memulai bisnis sendiri atau berwirausaha untuk menciptakan bisnis Anda sendiri dan mengelola secara independen dapat menjadi pilihan yang baik, dan menjadi eksekutif tertinggi perusahaan besar untuk memimpin organisasi juga merupakan bidang di mana Anda dapat memanfaatkan kemampuan Anda.',
        'Pertimbangkan jalur untuk berkontribusi pada masyarakat sebagai politisi atau administrator lembaga publik. Anda memiliki hati yang besar yang memikirkan kepentingan seluruh masyarakat daripada keuntungan pribadi, dan Anda memiliki kecenderungan yang cocok untuk mempromosikan kebijakan atau proyek yang membantu banyak orang, memungkinkan Anda mencapai hasil yang sangat baik di sektor publik.',
        'Gunakan karisma Anda untuk memilih profesi yang dapat memengaruhi banyak orang. Menjadi pembicara, dosen, ahli seminar, atau bekerja di bidang pendidikan di mana Anda menginspirasi dan memimpin banyak orang juga merupakan pilihan yang bagus. Suara dan pesan Anda akan membawa perubahan positif bagi orang-orang.',
        'Fokus pada memimpin tim dan berhasil dalam proyek besar di posisi yang bertanggung jawab. Dalam peran seperti manajer proyek, manajer program, atau kepala unit bisnis yang menangani proyek atau bisnis skala besar, Anda dapat memaksimalkan kemampuan Anda, meningkatkan kinerja tim, dan berkontribusi pada pencapaian tujuan organisasi.',
        'Anda dapat bekerja sebagai konsultan manajemen atau penasihat bisnis dan membantu banyak perusahaan. Anda unggul dalam menganalisis situasi manajemen berbagai perusahaan dan mengajukan rencana perbaikan, memungkinkan Anda untuk sukses di bidang konsultasi manajemen dan memperoleh kepuasan dari membantu perusahaan tumbuh melalui peran penasihat.',
        'Sebagai investor atau kapitalis ventura, coba investasikan pada perusahaan inovatif dan kembangkan mereka. Anda unggul dalam menemukan peluang baik dan mewujudkannya, jadi mengidentifikasi dan mendukung startup atau perusahaan yang menjanjikan untuk tumbuh bersama mungkin merupakan bidang yang ideal untuk Anda.',
        'Ambil peran menyelesaikan masalah kompleks menggunakan pemikiran strategis dan kepemimpinan Anda. Bekerja di tim perencanaan strategis, tim perencanaan manajemen, atau tim pengembangan bisnis untuk memvisualisasikan masa depan organisasi dan mengembangkan model bisnis baru juga merupakan bidang hebat di mana Anda dapat menunjukkan kemampuan Anda.',
        'Saya merekomendasikan memimpin dan mengembangkan organisasi sebagai CEO atau eksekutif tingkat C (CMO, CFO, dll.). Anda unggul dalam mengambil tanggung jawab untuk kinerja keseluruhan organisasi, menetapkan visi jangka panjang, dan mengeksekusinya, membuat Anda mampu mengambil peran tingkat C dan mengangkat organisasi ke tingkat baru dari posisi tersebut.',
        'Sebagai pengusaha, pertimbangkan untuk mewujudkan dan berhasil dalam ide bisnis baru. Dorongan Anda akan membawa kesuksesan besar. Anda memiliki semua kemampuan yang dibutuhkan sepanjang proses mewujudkan ide dan membangun bisnis, memungkinkan Anda untuk mencapai hasil yang sangat baik dalam kewirausahaan dan menciptakan model bisnis inovatif yang berdampak positif pada masyarakat.'
      ]
    },
    fortune: {
      success: {
        ko: [
          '당신은 CEO나 경영자로서 큰 성공을 이룰 가능성이 90% 이상입니다. 이는 단순한 예상이 아니라 당신의 얼굴에서 드러나는 강인한 의지력, 뛰어난 판단력, 그리고 사람들을 이끌어가는 천부적인 카리스마를 바탕으로 한 것입니다.',
          '당신의 리더십으로 조직을 크게 발전시킬 수 있습니다. 특히 팀원들의 잠재력을 깨우고 그들이 자신의 능력을 최대한 발휘할 수 있도록 돕는 능력이 뛰어나 조직 전체의 성장을 이끌어낼 수 있습니다.',
          '자신의 사업을 시작하면 높은 성공률을 기대할 수 있습니다. 당신은 사업 아이디어를 현실화하고 시장에서 성공시키는 데 필요한 모든 능력을 갖추고 있으며, 위험을 관리하고 기회를 포착하는 직관력이 뛰어납니다.',
          '팀을 이끌고 목표를 달성하는 능력이 뛰어나 경영직에 최적입니다. 단순히 명령하는 것이 아니라 팀원들과 함께 목표를 공유하고 그들을 동기부여하여 모두가 함께 성장하는 환경을 만들어낼 수 있습니다.',
          '전략적 사고와 판단력으로 복잡한 문제를 해결할 수 있습니다. 당신은 문제의 본질을 파악하고 다양한 관점에서 해결책을 모색하는 능력이 있으며, 장기적인 관점에서 최선의 선택을 할 수 있습니다.',
          '많은 사람들에게 동기부여하고 변화를 만들어내는 카리스마가 있습니다. 당신의 말과 행동은 사람들에게 영감을 주고 그들이 변화를 두려워하지 않고 도전하도록 용기를 주는 힘이 있습니다.',
          '위기 상황에서도 침착하게 결정을 내리는 능력이 탁월합니다. 다른 사람들이 당황하고 흔들릴 때 당신은 냉정함을 유지하고 상황을 정확히 판단하여 최선의 결정을 내릴 수 있습니다.',
          '조직을 성장시키고 발전시킬 수 있는 잠재력이 큽니다. 당신은 단기적인 성과뿐만 아니라 장기적인 비전을 가지고 조직의 지속 가능한 성장을 계획하고 실행할 수 있는 능력이 있습니다.',
          '책임감 있는 위치에서 큰 프로젝트를 성공적으로 완수할 수 있습니다. 당신은 프로젝트의 모든 단계를 체계적으로 관리하고 위험을 사전에 예측하여 대비하는 능력이 뛰어나 큰 일도 성공적으로 마칠 수 있습니다.',
          '혁신적인 아이디어로 새로운 사업 영역을 개척할 수 있습니다. 당신은 기존의 틀에 얽매이지 않고 새로운 가능성을 발견하고 실행하는 능력이 있어 시장에서 처음 시도되는 분야에서도 성공할 수 있습니다.'
        ],
        en: [
          'You have a 90% or higher chance of achieving great success as a CEO or executive. This is not just a prediction, but a result based on the strong willpower, excellent judgment, and natural charisma to lead people that are evident in your face.',
          'Your leadership can greatly develop organizations. Your ability to awaken the potential of team members and help them maximize their abilities is outstanding, enabling you to lead the overall growth of the organization.',
          'If you start your own business, you can expect a high success rate. You have all the abilities needed to realize business ideas and succeed in the market, with excellent intuition for risk management and opportunity capture.',
          'Your ability to lead teams and achieve goals is outstanding, making you ideal for management positions. Rather than just giving orders, you can share goals with team members, motivate them, and create an environment where everyone grows together.',
          'Your strategic thinking and judgment allow you to solve complex problems. You have the ability to identify the essence of problems and seek solutions from various perspectives, and you can make the best choices from a long-term perspective.',
          'You have charisma that motivates many people and drives change. Your words and actions inspire people and give them the courage to embrace change and take on challenges without fear.',
          'Your ability to make calm decisions even in crisis situations is outstanding. When others panic and waver, you maintain composure, accurately assess the situation, and make the best decisions.',
          'You have great potential to grow and develop organizations. You have the ability not only for short-term results but also for long-term vision to plan and execute sustainable organizational growth.',
          'You can successfully complete large projects in responsible positions. Your ability to systematically manage all stages of a project and predict and prepare for risks in advance is outstanding, allowing you to successfully complete even major tasks.',
          'You can pioneer new business areas with innovative ideas. You have the ability to discover and execute new possibilities without being bound by existing frameworks, allowing you to succeed even in fields that are being attempted for the first time in the market.'
        ],
        ja: [
          'あなたはCEOや経営者として大きな成功を達成する可能性が90%以上です。これは単なる予測ではなく、あなたの顔に表れる強い意志力、優れた判断力、そして人々を導く天性のカリスマ性に基づいたものです。',
          'あなたのリーダーシップで組織を大きく発展させることができます。特にチームメンバーの潜在能力を呼び覚まし、彼らが自分の能力を最大限に発揮できるよう支援する能力に優れており、組織全体の成長を導くことができます。',
          '自分の事業を始めれば、高い成功率を期待できます。あなたは事業のアイデアを現実化し、市場で成功させるために必要なすべての能力を備えており、リスクを管理し機会を捉える直感力に優れています。',
          'チームを導き、目標を達成する能力に優れ、経営職に最適です。単に命令するのではなく、チームメンバーとともに目標を共有し、彼らを動機づけて全員がともに成長できる環境を作り出すことができます。',
          '戦略的思考と判断力で複雑な問題を解決できます。あなたは問題の本質を把握し、様々な視点から解決策を模索する能力があり、長期的な視点から最善の選択をすることができます。',
          '多くの人に動機づけし、変化を作り出すカリスマ性があります。あなたの言葉と行動は人々にインスピレーションを与え、彼らが変化を恐れず挑戦する勇気を与える力があります。',
          '危機的な状況でも冷静に決定を下す能力が優れています。他の人々が動揺し揺れ動くとき、あなたは冷静さを保ち、状況を正確に判断して最善の決定を下すことができます。',
          '組織を成長させ、発展させることができる可能性が大きいです。あなたは短期的な成果だけでなく、長期的なビジョンを持ち、組織の持続可能な成長を計画し実行する能力があります。',
          '責任のある位置で大きなプロジェクトを成功させることができます。あなたはプロジェクトのすべての段階を体系的に管理し、リスクを事前に予測して備える能力に優れており、大きな仕事も成功裏に完成させることができます。',
          '革新的なアイデアで新しい事業分野を開拓することができます。あなたは既存の枠に縛られず、新しい可能性を発見し実行する能力があり、市場で初めて試みられる分野でも成功することができます。'
        ],
        'zh-CN': [
          '你有90%或更高的机会作为CEO或高管取得巨大成功。这不仅仅是一个预测，而是基于你脸上显现的强大意志力、卓越的判断力以及带领人们的天生魅力而得出的结果。',
          '你的领导力可以极大地发展组织。你唤醒团队成员潜能并帮助他们最大限度发挥能力的能力非常出色，使你能够引领组织的整体成长。',
          '如果你创业，你可以期待很高的成功率。你拥有实现商业想法并在市场取得成功所需的所有能力，对风险管理和抓住机会有着出色的直觉。',
          '你领导团队和实现目标的能力非常出色，非常适合管理职位。不仅仅是下达命令，你可以与团队成员共享目标，激励他们，并创造一个每个人都共同成长的环境。',
          '你的战略思维和判断力使你能够解决复杂问题。你有能力识别问题的本质并从各种角度寻求解决方案，能够从长远角度做出最佳选择。',
          '你有激励许多人并推动变革的魅力。你的言行启发人们，给他们拥抱变化和勇于挑战的勇气。',
          '你在危机情况下做出冷静决策的能力非常出色。当其他人恐慌和动摇时，你保持冷静，准确评估情况，并做出最佳决策。',
          '你有很大的潜力成长和发展组织。你不仅有短期成果的能力，还有长期愿景的能力，能够计划并执行组织的可持续增长。',
          '你能够在负责任的位置上成功完成大型项目。你系统地管理项目所有阶段并提前预测和准备风险的能力非常出色，使你能够成功完成重要任务。',
          '你可以用创新的想法开拓新的业务领域。你有能力发现并执行新的可能性，不受现有框架束缚，使你能够在市场上首次尝试的领域取得成功。'
        ],
        'zh-TW': [
          '你有90%或更高的機會作為CEO或高管取得巨大成功。這不僅僅是一個預測，而是基於你臉上顯現的強大意志力、卓越的判斷力以及帶領人們的天生魅力而得出的結果。',
          '你的領導力可以極大地發展組織。你喚醒團隊成員潛能並幫助他們最大限度發揮能力的能力非常出色，使你能夠引領組織的整體成長。',
          '如果你創業，你可以期待很高的成功率。你擁有實現商業想法並在市場取得成功所需的所有能力，對風險管理和抓住機會有著出色的直覺。',
          '你領導團隊和實現目標的能力非常出色，非常適合管理職位。不僅僅是下達命令，你可以與團隊成員共享目標，激勵他們，並創造一個每個人都共同成長的環境。',
          '你的戰略思維和判斷力使你能夠解決複雜問題。你有能力識別問題的本質並從各種角度尋求解決方案，能夠從長遠角度做出最佳選擇。',
          '你有激勵許多人並推動變革的魅力。你的言行啟發人們，給他們擁抱變化和勇於挑戰的勇氣。',
          '你在危機情況下做出冷靜決策的能力非常出色。當其他人恐慌和動搖時，你保持冷靜，準確評估情況，並做出最佳決策。',
          '你有很大的潛力成長和發展組織。你不僅有短期成果的能力，還有長期願景的能力，能夠計劃並執行組織的可持續增長。',
          '你能夠在負責任的位置上成功完成大型專案。你系統地管理專案所有階段並提前預測和準備風險的能力非常出色，使你能夠成功完成重要任務。',
          '你可以用創新的想法開拓新的業務領域。你有能力發現並執行新的可能性，不受現有框架束縛，使你能夠在市場上首次嘗試的領域取得成功。'
        ],
        vi: [
          'Bạn có khả năng cao (90% trở lên) đạt được thành công lớn với tư cách là CEO hoặc giám đốc điều hành. Đây không chỉ là một dự đoán mà là kết quả dựa trên ý chí mạnh mẽ, khả năng phán đoán xuất sắc và sức hấp dẫn tự nhiên để dẫn dắt mọi người thể hiện rõ trên khuôn mặt bạn.',
          'Khả năng lãnh đạo của bạn có thể phát triển mạnh mẽ các tổ chức. Khả năng đánh thức tiềm năng của các thành viên trong nhóm và giúp họ phát huy tối đa khả năng của mình là xuất sắc, cho phép bạn dẫn dắt sự phát triển tổng thể của tổ chức.',
          'Nếu bạn bắt đầu công việc kinh doanh riêng, bạn có thể mong đợi tỷ lệ thành công cao. Bạn có tất cả các khả năng cần thiết để hiện thực hóa ý tưởng kinh doanh và thành công trên thị trường, với trực giác tuyệt vời về quản lý rủi ro và nắm bắt cơ hội.',
          'Khả năng dẫn dắt nhóm và đạt được mục tiêu của bạn là xuất sắc, khiến bạn trở thành ứng viên lý tưởng cho các vị trí quản lý. Thay vì chỉ ra lệnh, bạn có thể chia sẻ mục tiêu với các thành viên trong nhóm, động viên họ và tạo ra một môi trường nơi mọi người cùng phát triển.',
          'Tư duy chiến lược và khả năng phán đoán của bạn cho phép bạn giải quyết các vấn đề phức tạp. Bạn có khả năng xác định bản chất của vấn đề và tìm kiếm giải pháp từ nhiều góc độ khác nhau, đồng thời có thể đưa ra những lựa chọn tốt nhất từ quan điểm dài hạn.',
          'Bạn có sức hấp dẫn động viên nhiều người và thúc đẩy sự thay đổi. Lời nói và hành động của bạn truyền cảm hứng cho mọi người và mang lại cho họ sự dũng cảm để chấp nhận thay đổi và đón nhận những thách thức mà không sợ hãi.',
          'Khả năng đưa ra quyết định bình tĩnh ngay cả trong các tình huống khủng hoảng của bạn là xuất sắc. Khi những người khác hoảng sợ và dao động, bạn giữ được bình tĩnh, đánh giá chính xác tình huống và đưa ra quyết định tốt nhất.',
          'Bạn có tiềm năng lớn để phát triển và mở rộng các tổ chức. Bạn có khả năng không chỉ đạt được kết quả ngắn hạn mà còn có tầm nhìn dài hạn để lập kế hoạch và thực hiện sự phát triển bền vững của tổ chức.',
          'Bạn có thể hoàn thành thành công các dự án lớn ở các vị trí có trách nhiệm. Khả năng quản lý có hệ thống tất cả các giai đoạn của dự án và dự đoán, chuẩn bị cho rủi ro trước của bạn là xuất sắc, cho phép bạn hoàn thành thành công ngay cả những nhiệm vụ lớn.',
          'Bạn có thể mở ra các lĩnh vực kinh doanh mới với những ý tưởng sáng tạo. Bạn có khả năng khám phá và thực hiện những khả năng mới mà không bị ràng buộc bởi các khuôn khổ hiện có, cho phép bạn thành công ngay cả trong những lĩnh vực đang được thử nghiệm lần đầu tiên trên thị trường.'
        ],
        id: [
          'Anda memiliki peluang 90% atau lebih tinggi untuk mencapai kesuksesan besar sebagai CEO atau eksekutif. Ini bukan hanya prediksi, tetapi hasil berdasarkan tekad yang kuat, penilaian yang luar biasa, dan karisma alami untuk memimpin orang yang terlihat jelas di wajah Anda.',
          'Kepemimpinan Anda dapat mengembangkan organisasi secara signifikan. Kemampuan Anda untuk membangkitkan potensi anggota tim dan membantu mereka memaksimalkan kemampuan mereka sangat luar biasa, memungkinkan Anda memimpin pertumbuhan keseluruhan organisasi.',
          'Jika Anda memulai bisnis sendiri, Anda dapat mengharapkan tingkat kesuksesan yang tinggi. Anda memiliki semua kemampuan yang diperlukan untuk mewujudkan ide-ide bisnis dan berhasil di pasar, dengan intuisi yang luar biasa untuk manajemen risiko dan penangkapan peluang.',
          'Kemampuan Anda untuk memimpin tim dan mencapai tujuan sangat luar biasa, membuat Anda ideal untuk posisi manajemen. Daripada hanya memberi perintah, Anda dapat berbagi tujuan dengan anggota tim, memotivasi mereka, dan menciptakan lingkungan di mana semua orang tumbuh bersama.',
          'Pemikiran strategis dan penilaian Anda memungkinkan Anda menyelesaikan masalah kompleks. Anda memiliki kemampuan untuk mengidentifikasi esensi masalah dan mencari solusi dari berbagai perspektif, dan Anda dapat membuat pilihan terbaik dari perspektif jangka panjang.',
          'Anda memiliki karisma yang memotivasi banyak orang dan mendorong perubahan. Kata-kata dan tindakan Anda menginspirasi orang dan memberi mereka keberanian untuk menerima perubahan dan menghadapi tantangan tanpa rasa takut.',
          'Kemampuan Anda untuk membuat keputusan yang tenang bahkan dalam situasi krisis sangat luar biasa. Ketika orang lain panik dan goyah, Anda tetap tenang, menilai situasi dengan akurat, dan membuat keputusan terbaik.',
          'Anda memiliki potensi besar untuk menumbuhkan dan mengembangkan organisasi. Anda memiliki kemampuan tidak hanya untuk hasil jangka pendek tetapi juga untuk visi jangka panjang untuk merencanakan dan mengeksekusi pertumbuhan organisasi yang berkelanjutan.',
          'Anda dapat berhasil menyelesaikan proyek besar di posisi yang bertanggung jawab. Kemampuan Anda untuk secara sistematis mengelola semua tahap proyek dan memprediksi serta mempersiapkan risiko sebelumnya sangat luar biasa, memungkinkan Anda untuk berhasil menyelesaikan bahkan tugas-tugas besar.',
          'Anda dapat merintis area bisnis baru dengan ide-ide inovatif. Anda memiliki kemampuan untuk menemukan dan mengeksekusi kemungkinan baru tanpa terikat pada kerangka kerja yang ada, memungkinkan Anda untuk berhasil bahkan di bidang yang dicoba untuk pertama kali di pasar.'
        ]
      },
      hidden: {
        ko: [
          '사회 전체에 긍정적인 영향을 미칠 수 있는 큰 비전을 가지고 있습니다. 당신은 개인적인 성공만을 추구하는 것이 아니라 조직과 사회, 나아가 인류 전체에 도움이 되는 가치 있는 일을 하고 싶어 하며, 이를 실현할 수 있는 능력과 추진력을 가지고 있습니다.',
          '많은 사람들에게 영감을 주고 변화를 이끄는 카리스마가 있습니다. 당신의 목소리와 행동은 사람들의 마음을 움직이고 그들이 자신도 모르게 따라오게 만드는 힘이 있어 새로운 트렌드를 만들고 사회를 변화시킬 수 있습니다.',
          '조직을 세계적인 수준으로 끌어올릴 수 있는 잠재력이 있습니다. 당신은 글로벌 경쟁력을 갖춘 조직을 만들고 국제 시장에서 인정받는 기업을 키워낼 수 있는 비전과 실행력을 가지고 있습니다.',
          '혁신적인 사고와 창의력으로 새로운 가치를 만들어낼 수 있습니다. 당신은 기존의 방식에 만족하지 않고 항상 더 나은 방법을 찾아내며, 시장에 존재하지 않던 새로운 가치를 창출하여 산업을 변화시킬 수 있습니다.',
          '강한 추진력과 끈기로 어려운 상황을 돌파할 수 있는 능력이 있습니다. 많은 사람들이 포기하고 물러설 때 당신은 끝까지 버티고 해결책을 찾아내어 불가능해 보이는 상황도 극복할 수 있습니다.',
          '타인을 이해하고 동기부여하는 능력이 뛰어나 뛰어난 경영자가 될 수 있습니다. 당신은 사람들의 마음을 읽고 그들이 무엇을 원하는지 알고 있으며, 그들의 잠재력을 끌어내어 함께 성장할 수 있습니다.',
          '미래를 내다보는 통찰력으로 위기를 기회로 전환할 수 있습니다. 당신은 다른 사람들이 위기라고 보는 상황에서도 새로운 가능성을 발견하고 그 상황을 역으로 활용하여 더 큰 성공을 만들어낼 수 있습니다.',
          '다양한 사람들과 협력하여 시너지를 만들어내는 능력이 탁월합니다. 당신은 서로 다른 배경과 생각을 가진 사람들을 모아 그들이 각자의 강점을 발휘할 수 있도록 조율하며, 팀 전체가 한 개인이 할 수 없었던 큰 성과를 낼 수 있도록 이끕니다.',
          '체계적이고 전략적인 접근으로 복잡한 문제를 해결할 수 있습니다. 당신은 문제를 작은 단위로 나누고 각각을 차근차근 해결해 나가며, 장기적인 관점에서 근본적인 해결책을 찾아내는 능력이 있습니다.',
          '끊임없는 자기계발과 성장 욕구로 더 큰 성취를 이룰 수 있습니다. 당신은 자신의 현재 능력에 만족하지 않고 항상 새로운 것을 배우고 개선하려는 자세를 가지고 있어 시간이 지날수록 더욱 뛰어난 리더가 될 수 있습니다.'
        ],
        en: [
          'You have a great vision that can positively impact the entire society. You do not just seek personal success but want to do valuable work that helps organizations, society, and even all of humanity, and you have the ability and drive to make this happen.',
          'You have charisma that inspires many people and drives change. Your voice and actions have the power to move people and make them unconsciously follow you, allowing you to create new trends and change society.',
          'You have the potential to raise organizations to world-class levels. You have the vision and execution power to create organizations with global competitiveness and grow companies recognized in international markets.',
          'You can create new value with innovative thinking and creativity. You are not satisfied with existing methods and always find better ways, creating new value that did not exist in the market and transforming industries.',
          'You have the ability to break through difficult situations with strong drive and persistence. When many people give up and retreat, you persist to the end and find solutions, allowing you to overcome seemingly impossible situations.',
          'You excel at understanding and motivating others, making you an excellent manager. You can read people\'s minds, know what they want, and draw out their potential to grow together.',
          'You can turn crises into opportunities with your foresight and insight. You can discover new possibilities even in situations that others see as crises and utilize those situations to create greater success.',
          'You excel at creating synergy by collaborating with diverse people. You bring together people with different backgrounds and thoughts, allowing them to each demonstrate their strengths, leading the team to achieve great results that no individual could have accomplished alone.',
          'You can solve complex problems with systematic and strategic approaches. You break down problems into smaller units and solve them step by step, with the ability to find fundamental solutions from a long-term perspective.',
          'You can achieve greater accomplishments with continuous self-development and growth mindset. You are not satisfied with your current abilities and always have the attitude of learning and improving, making you an increasingly excellent leader over time.'
        ],
        ja: [
          '社会全体に肯定的な影響を与えられる大きなビジョンを持っています。あなたは個人的な成功だけを追求するのではなく、組織や社会、さらに人類全体にとって価値のある仕事をしたいと考えており、それを実現する能力と推進力を持っています。',
          '多くの人にインスピレーションを与え、変化を導くカリスマ性があります。あなたの声と行動は人々の心を動かし、彼らを無意識に従わせる力を持っており、新しいトレンドを作り出し、社会を変えることができます。',
          '組織を世界的なレベルに引き上げる可能性があります。あなたはグローバルな競争力を備えた組織を作り、国際市場で認められる企業を育てるビジョンと実行力を持っています。',
          '革新的な思考と創造力で新しい価値を生み出すことができます。あなたは既存の方法に満足せず、常に良い方法を見つけ出し、市場に存在しなかった新しい価値を創出して産業を変革することができます。',
          '強い推進力と粘り強さで困難な状況を突破する能力があります。多くの人々が諦めて撤退する時、あなたは最後まで粘り強く解決策を見つけ出し、不可能に見える状況も克服することができます。',
          '他人を理解し、動機づけする能力に優れ、優れた経営者になることができます。あなたは人々の心を読み取り、彼らが何を望んでいるかを知っており、彼らの潜在能力を引き出して一緒に成長させることができます。',
          '未来を見通す洞察力で危機を機会に転換することができます。あなたは他の人々が危機と見なす状況でも新しい可能性を発見し、その状況を逆に利用してより大きな成功を作り出すことができます。',
          '多様な人々と協力してシナジーを作り出す能力が優れています。あなたは異なる背景と思想を持つ人々を集め、彼らがそれぞれの強みを発揮できるように調整し、チーム全体が個人では達成できない大きな成果を生み出すことができるように導きます。',
          '体系的で戦略的なアプローチで複雑な問題を解決することができます。あなたは問題を小さな単位に分割し、それぞれを順を追って解決し、長期的な観点から根本的な解決策を見つける能力があります。',
          '絶え間ない自己開発と成長への欲求でより大きな成果を達成することができます。あなたは自分の現在の能力に満足せず、常に新しいことを学び改善しようとする姿勢を持っており、時間が経つにつれてますます優れたリーダーになることができます。'
        ],
        'zh-CN': [
          '你有一个可以对整个社会产生积极影响的伟大愿景。你不仅追求个人成功，还想做对组织、社会乃至全人类都有帮助的有价值的工作，你拥有实现这一目标的能力和推动力。',
          '你有激励许多人并推动变革的魅力。你的声音和行动具有感动人们并让他们不知不觉跟随你的力量，能够创造新趋势并改变社会。',
          '你有潜力将组织提升到世界级水平。你拥有创建具有全球竞争力的组织和在国际市场上被认可的企业所需的愿景和执行能力。',
          '你可以用创新思维和创造力创造新价值。你不满足于现有方法，总是寻找更好的方式，创造市场中从未存在过的新价值并改变行业。',
          '你有强烈的推动力和毅力突破困难情况的能力。当许多人放弃并退缩时，你坚持到底并找到解决方案，使你能够克服看似不可能的情况。',
          '你善于理解和激励他人，使你成为优秀的管理者。你能读懂人们的心思，知道他们想要什么，并激发他们的潜力一起成长。',
          '你可以用对未来的洞察力将危机转化为机会。即使在别人认为危机的情况下，你也能发现新的可能性并利用那些情况创造更大的成功。',
          '你善于通过与不同的人合作创造协同效应。你将具有不同背景和思想的人聚集在一起，使每个人都能发挥自己的优势，领导团队取得任何个人都无法单独完成的巨大成果。',
          '你可以用系统和战略性的方法解决复杂问题。你将问题分解成小单位并逐步解决，有能力从长远角度找到根本解决方案。',
          '你可以通过不断的自我发展和成长心态取得更大的成就。你不满足于自己当前的能力，总是有学习和改进的态度，随着时间推移使你成为一个越来越优秀的领导者。'
        ],
        'zh-TW': [
          '你有一個可以對整個社會產生積極影響的偉大願景。你不僅追求個人成功，還想做對組織、社會乃至全人類都有幫助的有價值的工作，你擁有實現這一目標的能力和推動力。',
          '你有激勵許多人並推動變革的魅力。你的聲音和行動具有感動人們並讓他們不知不覺跟隨你的力量，能夠創造新趨勢並改變社會。',
          '你有潛力將組織提升到世界級水平。你擁有創建具有全球競爭力的組織和在國際市場上被認可的企業所需的願景和執行能力。',
          '你可以用創新思維和創造力創造新價值。你不滿足於現有方法，總是尋找更好的方式，創造市場中從未存在過的新價值並改變行業。',
          '你有強烈的推動力和毅力突破困難情況的能力。當許多人放棄並退縮時，你堅持到底並找到解決方案，使你能夠克服看似不可能的情況。',
          '你善於理解和激勵他人，使你成為優秀的管理者。你能讀懂人們的心思，知道他們想要什麼，並激發他們的潛力一起成長。',
          '你可以用對未來的洞察力將危機轉化為機會。即使在別人認為危機的情況下，你也能發現新的可能性並利用那些情況創造更大的成功。',
          '你善於通過與不同的人合作創造協同效應。你將具有不同背景和思想的人聚集在一起，使每個人都能發揮自己的優勢，領導團隊取得任何個人都無法單獨完成的巨大成果。',
          '你可以用系統和戰略性的方法解決複雜問題。你將問題分解成小單位並逐步解決，有能力從長遠角度找到根本解決方案。',
          '你可以通過不斷的自我發展和成長心態取得更大的成就。你不滿足於自己當前的能力，總是有學習和改進的態度，隨著時間推移使你成為一個越來越優秀的領導者。'
        ],
        vi: [
          'Bạn có một tầm nhìn lớn có thể tác động tích cực đến toàn xã hội. Bạn không chỉ theo đuổi thành công cá nhân mà muốn làm công việc có giá trị giúp ích cho các tổ chức, xã hội và thậm chí toàn nhân loại, và bạn có khả năng và động lực để thực hiện điều này.',
          'Bạn có sự hấp dẫn truyền cảm hứng cho nhiều người và thúc đẩy sự thay đổi. Giọng nói và hành động của bạn có sức mạnh lay động mọi người và khiến họ vô thức đi theo bạn, cho phép bạn tạo ra xu hướng mới và thay đổi xã hội.',
          'Bạn có tiềm năng đưa các tổ chức lên mức đẳng cấp thế giới. Bạn có tầm nhìn và khả năng thực thi để tạo ra các tổ chức có tính cạnh tranh toàn cầu và phát triển các công ty được công nhận trên thị trường quốc tế.',
          'Bạn có thể tạo ra giá trị mới với tư duy đổi mới và sáng tạo. Bạn không hài lòng với các phương pháp hiện có và luôn tìm cách tốt hơn, tạo ra giá trị mới không tồn tại trên thị trường và biến đổi các ngành công nghiệp.',
          'Bạn có khả năng vượt qua các tình huống khó khăn với động lực mạnh và sự kiên trì. Khi nhiều người từ bỏ và rút lui, bạn kiên trì đến cùng và tìm ra giải pháp, cho phép bạn vượt qua những tình huống có vẻ không thể.',
          'Bạn xuất sắc trong việc hiểu và động viên người khác, khiến bạn trở thành một nhà quản lý tuyệt vời. Bạn có thể đọc được suy nghĩ của mọi người, biết họ muốn gì và khơi dậy tiềm năng của họ để cùng phát triển.',
          'Bạn có thể biến khủng hoảng thành cơ hội với tầm nhìn và sự hiểu biết của mình. Bạn có thể khám phá ra những khả năng mới ngay cả trong những tình huống mà người khác coi là khủng hoảng và tận dụng những tình huống đó để tạo ra thành công lớn hơn.',
          'Bạn xuất sắc trong việc tạo ra sức mạnh tổng hợp bằng cách hợp tác với nhiều người khác nhau. Bạn tập hợp những người có nền tảng và suy nghĩ khác nhau, cho phép họ mỗi người thể hiện thế mạnh của mình, dẫn dắt nhóm đạt được những kết quả tuyệt vời mà không cá nhân nào có thể hoàn thành một mình.',
          'Bạn có thể giải quyết các vấn đề phức tạp với các phương pháp tiếp cận có hệ thống và chiến lược. Bạn chia nhỏ vấn đề thành các đơn vị nhỏ hơn và giải quyết từng bước, có khả năng tìm ra giải pháp cơ bản từ góc độ dài hạn.',
          'Bạn có thể đạt được thành tựu lớn hơn với sự phát triển bản thân liên tục và tư duy tăng trưởng. Bạn không hài lòng với khả năng hiện tại của mình và luôn có thái độ học hỏi và cải thiện, khiến bạn trở thành một nhà lãnh đạo ngày càng xuất sắc theo thời gian.'
        ],
        id: [
          'Anda memiliki visi besar yang dapat berdampak positif pada seluruh masyarakat. Anda tidak hanya mengejar kesuksesan pribadi tetapi ingin melakukan pekerjaan berharga yang membantu organisasi, masyarakat, dan bahkan seluruh umat manusia, dan Anda memiliki kemampuan dan dorongan untuk mewujudkannya.',
          'Anda memiliki karisma yang menginspirasi banyak orang dan mendorong perubahan. Suara dan tindakan Anda memiliki kekuatan untuk menggerakkan orang dan membuat mereka mengikuti Anda tanpa disadari, memungkinkan Anda menciptakan tren baru dan mengubah masyarakat.',
          'Anda memiliki potensi untuk mengangkat organisasi ke tingkat kelas dunia. Anda memiliki visi dan daya eksekusi untuk menciptakan organisasi dengan daya saing global dan mengembangkan perusahaan yang diakui di pasar internasional.',
          'Anda dapat menciptakan nilai baru dengan pemikiran inovatif dan kreativitas. Anda tidak puas dengan metode yang ada dan selalu menemukan cara yang lebih baik, menciptakan nilai baru yang tidak ada di pasar dan mentransformasi industri.',
          'Anda memiliki kemampuan untuk menembus situasi sulit dengan dorongan yang kuat dan ketekunan. Ketika banyak orang menyerah dan mundur, Anda bertahan hingga akhir dan menemukan solusi, memungkinkan Anda mengatasi situasi yang tampaknya mustahil.',
          'Anda unggul dalam memahami dan memotivasi orang lain, membuat Anda menjadi manajer yang sangat baik. Anda dapat membaca pikiran orang, tahu apa yang mereka inginkan, dan menarik potensi mereka untuk tumbuh bersama.',
          'Anda dapat mengubah krisis menjadi peluang dengan wawasan dan wawasan masa depan Anda. Anda dapat menemukan kemungkinan baru bahkan dalam situasi yang dianggap orang lain sebagai krisis dan memanfaatkan situasi tersebut untuk menciptakan kesuksesan yang lebih besar.',
          'Anda unggul dalam menciptakan sinergi dengan berkolaborasi dengan berbagai orang. Anda mengumpulkan orang-orang dengan latar belakang dan pemikiran yang berbeda, memungkinkan mereka masing-masing menunjukkan kekuatan mereka, memimpin tim untuk mencapai hasil besar yang tidak dapat dicapai oleh individu mana pun sendirian.',
          'Anda dapat menyelesaikan masalah kompleks dengan pendekatan sistematis dan strategis. Anda memecah masalah menjadi unit yang lebih kecil dan menyelesaikannya langkah demi langkah, dengan kemampuan untuk menemukan solusi mendasar dari perspektif jangka panjang.',
          'Anda dapat mencapai prestasi yang lebih besar dengan pengembangan diri yang berkelanjutan dan mindset pertumbuhan. Anda tidak puas dengan kemampuan Anda saat ini dan selalu memiliki sikap belajar dan memperbaiki, menjadikan Anda seorang pemimpin yang semakin baik dari waktu ke waktu.'
        ]
      }
    }
  },
  {
    id: 2,
    title: { ko: '크리에이터형', en: 'Creator Type', ja: 'クリエイター型', 'zh-CN': '创造者型', 'zh-TW': '創造者型', vi: 'Kiểu Sáng Tạo', id: 'Tipe Kreator' },
    description: {
      ko: [
        '당신의 얼굴은 창의성과 독창성을 보여줍니다. 새로운 아이디어를 만들어내고 표현하는 타고난 재능이 있습니다.',
        '예술적 감성이 뛰어나고 상상력이 풍부한 얼굴입니다. 자신만의 독특한 세계를 만들어내는 능력이 있습니다.',
        '혁신적인 사고와 창의력을 가진 얼굴입니다. 기존의 틀을 깨고 새로운 방식을 만들어냅니다.',
        '디자인이나 예술 분야에서 뛰어난 재능을 보여줄 것입니다. 자신만의 독특한 스타일로 성공할 수 있습니다.',
        '새로운 것을 만들어내는 것을 즐기는 성향이 강합니다. 창작 활동을 통해 큰 만족감을 느낍니다.',
        '감성적이고 직관적인 기운이 얼굴에 드러납니다. 아름다움과 예술을 통해 자신을 표현하는 것을 좋아합니다.',
        '독창적인 시각과 새로운 관점을 가지고 있습니다. 기존과 다른 방식으로 문제를 해결할 수 있는 능력이 있습니다.',
        '표현욕이 강하고 자신의 세계를 만들어내는 재주가 있습니다. 많은 사람들에게 영감을 줄 수 있는 작품을 만들 수 있습니다.',
        '유연한 사고와 창의적 문제 해결 능력이 돋보입니다. 제약이 있는 상황에서도 창의적인 해결책을 찾아냅니다.',
        '독특하고 차별화된 아이디어로 세상에 새로운 가치를 제공할 수 있습니다. 자신만의 고유한 색깔로 성공할 것입니다.'
      ],
      en: [
        'Your face shows creativity and originality. You have an innate talent for creating and expressing new ideas.',
        'You have an artistic sensibility and rich imagination. You have the ability to create your own unique world.',
        'You have innovative thinking and creativity. You break existing frameworks and create new ways.',
        'You will show outstanding talent in design or art. You can succeed with your own unique style.',
        'You have a strong tendency to enjoy creating new things. You feel great satisfaction through creative activities.'
      ],
      ja: [
        'あなたの顔は創造性と独創性を示しています。新しいアイデアを作り出し、表現する先天的な才能があります。',
        '芸術的センスが優れ、想像力が豊かな顔です。自分だけの独特な世界を作り出す能力があります。',
        '革新的な思考と創造力を持った顔です。既存の枠を破り、新しい方法を作り出します。',
        'デザインや芸術分野で優秀な才能を示すでしょう。自分だけの独特なスタイルで成功できます。',
        '新しいものを作り出すことを楽しむ傾向が強いです。創作活動を通して大きな満足感を感じます。'
      ],
      'zh-CN': [
        '你的脸显示出创造力和独创性。你有创造和表达新想法的天生才能。',
        '你有艺术感和丰富的想象力。你有能力创造自己独特的世界。',
        '你有创新的思维和创造力。你打破现有框架并创造新方式。',
        '你将在设计或艺术领域展现出色才能。你可以用自己的独特风格取得成功。',
        '你有强烈的倾向享受创造新事物。你通过创作活动感受到巨大满足。'
      ],
      'zh-TW': [
        '你的臉顯示出創造力和獨創性。你有創造和表達新想法的天生才能。',
        '你有藝術感和豐富的想像力。你有能力創造自己獨特的世界。',
        '你有創新的思維和創造力。你打破現有框架並創造新方式。',
        '你將在設計或藝術領域展現出色才能。你可以用自己的獨特風格取得成功。',
        '你有強烈的傾向享受創造新事物。你通過創作活動感受到巨大滿足。'
      ],
      vi: [
        'Khuôn mặt của bạn thể hiện sự sáng tạo và độc đáo. Bạn có tài năng bẩm sinh để tạo ra và thể hiện những ý tưởng mới.',
        'Bạn có cảm nhận nghệ thuật và trí tưởng tượng phong phú. Bạn có khả năng tạo ra thế giới độc đáo của riêng mình.',
        'Bạn có tư duy đổi mới và sáng tạo. Bạn phá vỡ các khuôn khổ hiện có và tạo ra những cách mới.',
        'Bạn sẽ thể hiện tài năng xuất sắc trong thiết kế hoặc nghệ thuật. Bạn có thể thành công với phong cách độc đáo của riêng mình.',
        'Bạn có xu hướng mạnh mẽ thích tạo ra những điều mới. Bạn cảm thấy sự hài lòng lớn thông qua hoạt động sáng tạo.'
      ],
      id: [
        'Wajah Anda menunjukkan kreativitas dan orisinalitas. Anda memiliki bakat bawaan untuk menciptakan dan mengekspresikan ide-ide baru.',
        'Anda memiliki kepekaan artistik dan imajinasi yang kaya. Anda memiliki kemampuan untuk menciptakan dunia unik Anda sendiri.',
        'Anda memiliki pemikiran inovatif dan kreativitas. Anda merusak kerangka yang ada dan menciptakan cara-cara baru.',
        'Anda akan menunjukkan bakat luar biasa dalam desain atau seni. Anda dapat sukses dengan gaya unik Anda sendiri.',
        'Anda memiliki kecenderungan kuat untuk menikmati menciptakan hal-hal baru. Anda merasakan kepuasan besar melalui kegiatan kreatif.'
      ]
    },
    emoji: '🎨',
    scoreRange: [80, 89],
    strengths: { ko: ['창의성', '독창성', '예술성', '상상력', '혁신성', '표현력', '미적 감각', '아이디어력', '유연성', '직관력'], en: ['Creativity', 'Originality', 'Artistry', 'Imagination', 'Innovation', 'Expression', 'Aesthetic Sense', 'Ideation', 'Flexibility', 'Intuition'], ja: ['創造性', '独創性', '芸術性', '想像力', '革新性', '表現力', '美的センス', 'アイデア力', '柔軟性', '直感力'], 'zh-CN': ['创造力', '独创性', '艺术性', '想象力', '创新性', '表现力', '美学感觉', '想法力', '灵活性', '直觉力'], 'zh-TW': ['創造力', '獨創性', '藝術性', '想像力', '創新性', '表現力', '美學感覺', '想法力', '靈活性', '直覺力'], vi: ['Sáng tạo', 'Độc đáo', 'Nghệ thuật', 'Tưởng tượng', 'Đổi mới', 'Biểu hiện', 'Cảm giác thẩm mỹ', 'Ý tưởng', 'Linh hoạt', 'Trực giác'], id: ['Kreativitas', 'Orisinalitas', 'Seni', 'Imajinasi', 'Inovasi', 'Ekspresi', 'Rasa Estetika', 'Ideasi', 'Fleksibilitas', 'Intuisi'] },
    recommendations: { ko: ['디자이너', '예술가', '작가', '영화감독', '광고 기획자', '건축가', '프로덕션 디자이너', '일러스트레이터', '사진작가', '뮤지션'], en: ['Designer', 'Artist', 'Writer', 'Film Director', 'Advertising Planner', 'Architect', 'Production Designer', 'Illustrator', 'Photographer', 'Musician'], ja: ['デザイナー', '芸術家', '作家', '映画監督', '広告企画者', '建築家', 'プロダクションデザイナー', 'イラストレーター', '写真家', 'ミュージシャン'], 'zh-CN': ['设计师', '艺术家', '作家', '电影导演', '广告策划', '建筑师', '制作设计师', '插画家', '摄影师', '音乐家'], 'zh-TW': ['設計師', '藝術家', '作家', '電影導演', '廣告策劃', '建築師', '製作設計師', '插畫家', '攝影師', '音樂家'], vi: ['Nhà thiết kế', 'Nghệ sĩ', 'Nhà văn', 'Đạo diễn phim', 'Người lập kế hoạch quảng cáo', 'Kiến trúc sư', 'Nhà thiết kế sản xuất', 'Họa sĩ minh họa', 'Nhiếp ảnh gia', 'Nhạc sĩ'], id: ['Desainer', 'Seniman', 'Penulis', 'Sutradara Film', 'Perencana Iklan', 'Arsitek', 'Desainer Produksi', 'Ilustrator', 'Fotografer', 'Musisi'] },
    personality: { 
      ko: [
        '창의적이고 독창적인 성격입니다. 기존의 틀에 얽매이지 않고 자유롭게 사고하는 능력이 있습니다.',
        '예술적 감성이 뛰어나며 아름다운 것에 대한 감각이 예리합니다. 미학적 안목을 가지고 있습니다.',
        '상상력이 풍부하고 새로운 아이디어를 만들어내는 능력이 탁월합니다. 먼저 떠올리는 아이디어가 많습니다.',
        '혁신적인 사고를 하며 기존 방식을 개선하거나 완전히 새로운 방향을 제시할 수 있습니다.',
        '자유로운 영혼을 가지고 있으며 규칙과 틀에 얽매이기를 싫어합니다. 자유로운 환경에서 더 잘 성장합니다.',
        '직관적이고 감성적인 판단을 잘합니다. 논리보다는 느낌과 감을 믿는 편입니다.',
        '표현욕이 강하고 자신의 생각이나 감정을 예술적으로 표현하는 것을 좋아합니다.',
        '유연한 사고와 적응력을 가지고 있어 변화하는 상황에서도 잘 대처할 수 있습니다.',
        '독특함과 차별화를 추구하며 남들과 다른 것을 추구합니다. 개성 있는 스타일을 중요하게 생각합니다.',
        '창작 활동을 통해 큰 만족감과 성취감을 느끼며, 자신의 작품이 사람들에게 영향을 미치는 것을 좋아합니다.'
      ],
      en: ['You are creative and original.', 'You have excellent artistic sensibility.', 'You have rich imagination.', 'You think innovatively.', 'You have a free spirit.'], 
      ja: ['創造的で独創的な性格です。', '芸術的センスが優れています。', '想像力が豊かです。', '革新的な思考をします。', '自由な魂を持っています。'], 
      'zh-CN': ['你富有创造力且独到。', '你有出色的艺术感。', '你想象力丰富。', '你进行创新思考。', '你拥有自由的精神。'], 
      'zh-TW': ['你富有創造力且獨到。', '你有出色的藝術感。', '你想像力豐富。', '你進行創新思考。', '你擁有自由的精神。'], 
      vi: ['Bạn sáng tạo và độc đáo.', 'Bạn có cảm nhận nghệ thuật xuất sắc.', 'Bạn có trí tưởng tượng phong phú.', 'Bạn suy nghĩ đổi mới.', 'Bạn có tinh thần tự do.'], 
      id: ['Anda kreatif dan orisinal.', 'Anda memiliki kepekaan artistik yang luar biasa.', 'Anda memiliki imajinasi yang kaya.', 'Anda berpikir secara inovatif.', 'Anda memiliki jiwa bebas.'] 
    },
    advice: { 
      ko: [
        '디자인이나 예술 분야에서 자신만의 스타일을 개발하세요. 남들과 차별화된 독특한 작품을 만들어보세요. 이것은 단순히 남들보다 더 예쁘게 만드는 것이 아니라 자신만의 고유한 시각과 표현 방식을 찾아내는 것입니다. 당신이 가진 독특한 체험과 관점을 작품에 녹여내면 자연스럽게 남들과 다른 작품이 나오게 됩니다.',
        '창작 활동을 통해 자신을 표현하세요. 자신만의 이야기와 감정을 작품에 담아보세요. 작품은 당신의 또 다른 언어입니다. 말로 표현하기 어려운 생각과 감정을 시각적, 감각적인 방법으로 표현하면 그것은 당신만의 독특한 작품이 되며, 사람들은 그 안에서 인간적인 공감을 느끼게 됩니다.',
        '새로운 기술과 도구를 배워보세요. 최신 디지털 도구나 전통 기법 모두 익히면 좋습니다. 기술은 생각을 현실화하는 도구입니다. 다양한 도구와 기법을 익힐수록 당신의 표현 범위가 넓어지며, 새로운 방식으로 아이디어를 구현할 수 있게 됩니다. 전통과 현대를 모두 아우르는 능력은 당신을 더욱 경쟁력 있는 크리에이터로 만듭니다.',
        '다양한 경험을 통해 영감을 얻으세요. 여행, 전시회, 음악 등 다양한 문화 체험이 도움이 됩니다. 창작의 영감은 일상의 경험에서 나옵니다. 새로운 곳을 가보고, 다른 문화를 접하고, 다양한 예술 작품을 감상할수록 당신의 창의적 저수지는 풍부해지며, 이것들이 조합되어 독특한 작품으로 탄생하게 됩니다.',
        '자신의 작품을 세상에 알리세요. SNS나 전시를 통해 사람들과 소통하고 피드백을 받으세요. 좋은 작품도 알리지 않으면 사람들이 볼 수 없습니다. 지금은 SNS와 다양한 온라인 플랫폼을 통해 쉽게 많은 사람들에게 작품을 보여줄 수 있는 시대입니다. 작품을 공유하고 사람들과 소통하며 피드백을 받는 과정에서 당신은 더 성장할 수 있습니다.',
        '다른 크리에이터들과 협업해보세요. 함께 작업하면 더 큰 시너지를 만들어낼 수 있습니다. 혼자서는 생각할 수 없는 아이디어와 접근 방식이 협업을 통해 나올 수 있습니다. 다른 분야의 크리에이터와 함께 작업하면 서로의 강점을 결합하여 더욱 혁신적이고 풍부한 작품을 만들 수 있으며, 이것은 당신에게 새로운 경험과 영감을 제공합니다.',
        '지속적으로 포트폴리오를 구축하세요. 자신의 작품을 체계적으로 정리하고 발전시켜 나가세요. 포트폴리오는 당신의 커리어 여정을 보여주는 자료입니다. 시간이 지나면서 당신의 작품들을 다시 보면 자신의 성장 과정을 확인할 수 있고, 일관된 스타일과 변화하는 스타일을 동시에 확인할 수 있습니다. 이것은 당신의 다음 작품을 더욱 발전시킬 수 있는 기초가 됩니다.',
        '트렌드를 따르되 자신만의 해석을 가미하세요. 유행에 민감하면서도 독창성을 잃지 마세요. 트렌드는 시장의 흐름을 알려주는 지표이지만, 그것에만 의존하면 당신만의 개성이 사라질 수 있습니다. 트렌드를 이해하고 그것을 자신만의 방식으로 재해석하여 적용한다면 유행에 맞추면서도 독특한 작품을 만들 수 있습니다.',
        '비판과 피드백을 열린 마음으로 받아들이세요. 다른 사람의 의견에서 배울 점을 찾아보세요. 비판은 때로 아프지만 당신을 더 강하게 만들어줍니다. 모든 비판을 받아들일 필요는 없지만, 그 안에 담긴 귀중한 조언을 발견하고 적용한다면 당신의 작품은 더욱 발전할 것입니다. 성장하는 크리에이터는 비판을 두려워하지 않고 거기서 배우는 자세를 가집니다.',
        '끊임없이 실험하고 도전하세요. 실패를 두려워하지 않고 새로운 것을 시도하는 용기를 가지세요. 당신은 새로운 기법이나 스타일을 시도할 때 아깝지 않고 기꺼이 도전합니다. 실패를 두려워하지 않고 시도하는 용기 있는 자세가 당신이 크리에이터로서 성장하게 만드는 원동력이 됩니다. 실패는 배움의 기회이며, 반복된 실험 끝에 찾은 것들이야말로 당신만의 독특한 스타일이 됩니다.'
      ],
      en: [
        'Develop your own style in design or art. Create unique works that are differentiated from others. This is not simply making things prettier than others but finding your own unique perspective and way of expression. When you infuse your works with your unique experiences and perspectives, works that are naturally different from others will emerge.',
        'Express yourself through creative activities. Try incorporating your own stories and emotions into your works. Works are your other language. When you express thoughts and emotions that are difficult to express in words through visual and sensory methods, they become your unique works, and people feel human empathy in them.',
        'Learn new techniques and tools. It is good to learn both the latest digital tools and traditional techniques. Technology is a tool to realize thoughts. The more diverse tools and techniques you learn, the broader your range of expression becomes, allowing you to implement ideas in new ways. The ability to embrace both tradition and modernity makes you a more competitive creator.',
        'Get inspiration through diverse experiences. Travel, exhibitions, music, and various cultural experiences are helpful. Inspiration for creation comes from everyday experiences. The more you visit new places, encounter different cultures, and appreciate various artworks, the richer your creative reservoir becomes, and these combine to give birth to unique works.',
        'Share your works with the world. Communicate with people and receive feedback through SNS or exhibitions. Even good works cannot be seen by people if they are not promoted. We live in an era where you can easily show your works to many people through SNS and various online platforms. You can grow further in the process of sharing works and communicating with people to receive feedback.',
        'Collaborate with other creators. Working together can create greater synergy. Ideas and approaches that one person could not think of can emerge through collaboration. When working with creators in different fields, combining each other\'s strengths can create more innovative and rich works, and this provides you with new experiences and inspiration.',
        'Build your portfolio continuously. Organize and develop your works systematically. A portfolio is a material that shows your career journey. When you look back at your works as time passes, you can confirm your growth process, seeing both consistent and changing styles simultaneously. This becomes the foundation for developing your next work further.',
        'Follow trends but add your own interpretation. Be sensitive to trends but do not lose your originality. Trends are indicators that tell the flow of the market, but relying only on them can make your individuality disappear. If you understand trends and reinterpret them in your own way to apply them, you can create unique works while fitting trends.',
        'Accept criticism and feedback with an open mind. Find things to learn from others\' opinions. Criticism can hurt sometimes, but it makes you stronger. You do not need to accept all criticisms, but if you discover and apply the valuable advice within them, your works will develop further. Growing creators have the attitude of not fearing criticism but learning from it.',
        'Experiment and challenge constantly. Have the courage to try new things without fearing failure. You do not hesitate and gladly challenge when trying new techniques or styles. The courageous attitude of trying without fearing failure becomes the driving force that makes you grow as a creator. Failure is an opportunity to learn, and things found after repeated experiments become your own unique style.'
      ], 
      ja: [
        'デザインや芸術分野で自分だけのスタイルを開発してください。他人と差別化された独特な作品を作ってみてください。これは単に他人よりも美しく作ることではなく、自分だけの独特な視点と表現方法を見つけることです。あなたが持つ独特な体験と視点を作品に溶け込ませると、自然と他人とは異なる作品が出てきます。',
        '創作活動を通して自分を表現してください。自分だけの物語と感情を作品に込めてみてください。作品はあなたのもう一つの言語です。言葉で表現することが難しい思考や感情を視覚的、感覚的な方法で表現すると、それはあなただけの独特な作品となり、人々はその中に人間的な共感を感じます。',
        '新しい技術とツールを学んでください。最新のデジタルツールや伝統的な技法をすべて習得するのが良いです。技術は思考を現実化するツールです。様々なツールと技法を習得すればするほど、あなたの表現範囲が広がり、新しい方法でアイデアを実装できるようになります。伝統と現代の両方を網羅する能力は、あなたをより競争力のあるクリエイターにします。',
        '多様な経験を通してインスピレーションを得てください。旅行、展示会、音楽など多様な文化体験が役立ちます。創作のインスピレーションは日常の経験から生まれます。新しい場所に行き、異なる文化に触れ、様々な芸術作品を鑑賞すればするほど、あなたの創造的な貯水池は豊かになり、これらが組み合わされて独特な作品が生まれます。',
        '自分の作品を世界に知らせてください。SNSや展示を通じて人々とコミュニケーションを取ってフィードバックを受け取ってください。良い作品も宣伝しなければ人々が見ることはできません。今はSNSや様々なオンラインプラットフォームを通じて簡単に多くの人々に作品を見せることができる時代です。作品を共有し、人々とコミュニケーションを取りながらフィードバックを受け取る過程で、あなたはさらに成長することができます。',
        '他のクリエイターと協力してみてください。一緒に作業すると、より大きなシナジーを作り出すことができます。一人では考えられないアイデアとアプローチが協力を通じて生まれることがあります。異なる分野のクリエイターと一緒に作業すると、お互いの強みを結合してより革新的で豊かな作品を作ることができ、これはあなたに新しい経験とインスピレーションを提供します。',
        '継続的にポートフォリオを構築してください。自分の作品を体系的に整理して発展させてください。ポートフォリオはあなたのキャリアの旅を示す資料です。時間が経ってあなたの作品を振り返ると、自分の成長過程を確認でき、一貫したスタイルと変化するスタイルを同時に確認できます。これはあなたの次の作品をさらに発展させることができる基盤になります。',
        'トレンドに従いながら自分だけの解釈を加えてください。流行に敏感でありながら独創性を失わないでください。トレンドは市場の流れを教えてくれる指標ですが、それだけに依存するとあなただけの個性が消えてしまうことがあります。トレンドを理解し、それを自分だけの方法で再解釈して適用すると、流行に合わせながらも独特な作品を作ることができます。',
        '批判とフィードバックを心を開いて受け入れてください。他人の意見から学ぶべき点を見つけてください。批判は時々痛いかもしれませんが、あなたをより強くします。すべての批判を受け入れる必要はありませんが、その中に含まれる貴重な助言を発見して適用すると、あなたの作品はさらに発展します。成長するクリエイターは批判を恐れず、そこから学ぶ姿勢を持っています。',
        '絶えず実験し挑戦してください。失敗を恐れず新しいことを試す勇気を持ってください。あなたは新しい技法やスタイルを試す際に惜しまず喜んで挑戦します。失敗を恐れずに試す勇気ある姿勢が、あなたをクリエイターとして成長させる原動力になります。失敗は学びの機会であり、繰り返される実験の末に見つかったものが、あなただけの独特なスタイルになります。'
      ], 
      'zh-CN': [
        '在设计或艺术领域发展自己的风格。创建与他人差异化的独特作品。这不是简单地把作品做得比别人更漂亮，而是找到你自己独特的视角和表达方式。当你将自己的独特体验和视角融入到作品中时，自然会创作出与众不同的作品。',
        '通过创作活动表达自己。试着将自己的故事和情感融入作品。作品是你的另一种语言。当你用视觉和感官的方式表达难以用语言表达的思考和情感时，它们就成为你独特的作品，人们在其中感受到人性的共鸣。',
        '学习新技术和工具。掌握最新数字工具和传统技法都很好。技术是将思想变为现实的工具。你学习的工具和技法越多样化，你的表达范围就越广，能够以新方式实现想法。兼具传统和现代的能力使你成为更有竞争力的创作者。',
        '通过多样体验获得灵感。旅行、展览、音乐等多样文化体验都有帮助。创作的灵感来自日常体验。你越去新地方、接触不同文化、欣赏各种艺术作品，你的创作贮水池就越丰富，这些组合在一起就会诞生独特的作品。',
        '向世界展示你的作品。通过社交网络或展览与人交流并接收反馈。即使好作品如果不宣传也无法被人们看到。我们现在身处可以通过社交网络和各种在线平台轻松向许多人展示作品的时代。在分享作品并与人交流以接收反馈的过程中，你可以进一步成长。',
        '与其他创作者合作。一起工作可以产生更大的协同效应。通过协作可以产生一个人想不到的想法和方法。与不同领域的创作者合作时，结合彼此的强项可以创造更具创新性和丰富的作品，为你提供新的经验和启发。',
        '持续构建你的作品集。系统化地整理和发展自己的作品。作品集是展示你职业旅程的材料。当你随着时间回顾自己的作品时，你可以确认自己的成长过程，同时看到一致和变化的风格。这是进一步发展你下一个作品的基础。',
        '跟随趋势但加入自己的诠释。对流行敏感但不要失去原创性。趋势是告知市场流向的指标，但仅依赖趋势可能会让你的个性消失。如果你理解趋势并以自己的方式重新诠释并应用，你就可以在顺应流行的同时创作独特作品。',
        '以开放心态接受批评和反馈。从他人意见中寻找值得学习的点。批评有时可能令人痛苦，但它会让你更坚强。你不需要接受所有批评，但如果发现并应用其中的宝贵建议，你的作品会进一步发展。成长的创作者有不畏惧批评而是从中学习的态度。',
        '持续实验和挑战。有勇气不畏惧失败地尝试新事物。你在尝试新技法或风格时毫不犹豫并乐于挑战。不畏惧失败尝试的勇敢态度是让你作为创作者成长的驱动力。失败是学习的机会，经过反复实验找到的东西成为你自己独特的风格。'
      ], 
      'zh-TW': [
        '在設計或藝術領域發展自己的風格。創建與他人差異化的獨特作品。這不是簡單地把作品做得比別人更漂亮，而是找到你自己獨特的視角和表達方式。當你將自己的獨特體驗和視角融入到作品中時，自然會創作與眾不同的作品。',
        '通過創作活動表達自己。試著將自己的故事和情感融入作品。作品是你的另一種語言。當你用視覺和感官的方式表達難以用語言表達的思考和情感時，它們就成為你獨特的作品，人們在其中感受到人性的共鳴。',
        '學習新技術和工具。掌握最新數位工具和傳統技法都很好。技術是將思想變為現實的工具。你學習的工具和技法越多樣化，你的表達範圍就越廣，能夠以新方式實現想法。兼具傳統和現代的能力使你成為更有競爭力的創作者。',
        '通過多樣體驗獲得靈感。旅行、展覽、音樂等多樣文化體驗都有幫助。創作的靈感來自日常體驗。你越去新地方、接觸不同文化、欣賞各種藝術作品，你的創作貯水池就越豐富，這些組合在一起就會誕生獨特的作品。',
        '向世界展示你的作品。通過社群網絡或展覽與人交流並接收回饋。即使好作品如果不宣傳也無法被人們看到。我們現在身處可以通過社群網絡和各種線上平台輕鬆向許多人展示作品的時代。在分享作品並與人交流以接收回饋的過程中，你可以進一步成長。',
        '與其他創作者合作。一起工作可以產生更大的協同效應。通過協作可以產生一個人想不到的想法和方法。與不同領域的創作者合作時，結合彼此的強項可以創造更具創新性和豐富的作品，為你提供新的經驗和啟發。',
        '持續構建你的作品集。系統化地整理和發展自己的作品。作品集是展示你職業旅程的材料。當你隨著時間回顧自己的作品時，你可以確認自己的成長過程，同時看到一致和變化的風格。這是進一步發展你下一個作品的基礎。',
        '跟隨趨勢但加入自己的詮釋。對流行敏感但不要失去原創性。趨勢是告知市場流向的指標，但僅依賴趨勢可能會讓你的個性消失。如果你理解趨勢並以自己的方式重新詮釋並應用，你就可以在順應流行的同時創作獨特作品。',
        '以開放心態接受批評和回饋。從他人意見中尋找值得學習的點。批評有時可能令人痛苦，但它會讓你更堅強。你不需要接受所有批評，但如果發現並應用其中的寶貴建議，你的作品會進一步發展。成長的創作者有不畏懼批評而是從中學習的態度。',
        '持續實驗和挑戰。有勇氣不畏懼失敗地嘗試新事物。你在嘗試新技法或風格時毫不猶豫並樂於挑戰。不畏懼失敗嘗試的勇敢態度是讓你作為創作者成長的驅動力。失敗是學習的機會，經過反覆實驗找到的東西成為你自己獨特的風格。'
      ], 
      vi: [
        'Phát triển phong cách riêng của bạn trong thiết kế hoặc nghệ thuật. Tạo ra các tác phẩm độc đáo khác biệt với người khác. Đây không chỉ đơn giản là làm cho mọi thứ đẹp hơn người khác mà còn là tìm ra góc nhìn và cách biểu đạt độc đáo của riêng bạn. Khi bạn thấm nhuần các tác phẩm với trải nghiệm và góc nhìn độc đáo của mình, các tác phẩm khác biệt với người khác sẽ xuất hiện một cách tự nhiên.',
        'Thể hiện bản thân thông qua hoạt động sáng tạo. Thử kết hợp câu chuyện và cảm xúc của riêng bạn vào tác phẩm. Tác phẩm là ngôn ngữ khác của bạn. Khi bạn thể hiện những suy nghĩ và cảm xúc khó diễn đạt bằng lời nói thông qua các phương pháp thị giác và cảm giác, chúng trở thành tác phẩm độc đáo của riêng bạn, và mọi người cảm thấy sự đồng cảm của con người trong đó.',
        'Học các kỹ thuật và công cụ mới. Sẽ rất tốt nếu học cả các công cụ kỹ thuật số mới nhất và các kỹ thuật truyền thống. Công nghệ là công cụ để biến suy nghĩ thành hiện thực. Bạn càng học nhiều công cụ và kỹ thuật đa dạng, phạm vi biểu đạt của bạn càng rộng, cho phép bạn triển khai ý tưởng theo những cách mới. Khả năng bao quát cả truyền thống và hiện đại khiến bạn trở thành một nhà sáng tạo cạnh tranh hơn.',
        'Lấy cảm hứng thông qua trải nghiệm đa dạng. Du lịch, triển lãm, âm nhạc và các trải nghiệm văn hóa đa dạng đều hữu ích. Cảm hứng cho sự sáng tạo đến từ trải nghiệm hàng ngày. Bạn càng đến nhiều nơi mới, gặp gỡ các nền văn hóa khác nhau và thưởng thức các tác phẩm nghệ thuật đa dạng, hồ sơ sáng tạo của bạn càng phong phú, và những điều này kết hợp để tạo ra các tác phẩm độc đáo.',
        'Chia sẻ tác phẩm của bạn với thế giới. Giao tiếp với mọi người và nhận phản hồi thông qua mạng xã hội hoặc triển lãm. Ngay cả những tác phẩm tốt cũng không thể được mọi người xem nếu không được quảng bá. Chúng ta đang sống trong thời đại mà bạn có thể dễ dàng cho nhiều người xem tác phẩm của mình thông qua mạng xã hội và các nền tảng trực tuyến khác nhau. Bạn có thể phát triển hơn nữa trong quá trình chia sẻ tác phẩm và giao tiếp với mọi người để nhận phản hồi.',
        'Cộng tác với các nhà sáng tạo khác. Làm việc cùng nhau có thể tạo ra sức mạnh tổng hợp lớn hơn. Các ý tưởng và phương pháp tiếp cận mà một người không thể nghĩ ra có thể xuất hiện thông qua cộng tác. Khi làm việc với các nhà sáng tạo trong các lĩnh vực khác nhau, kết hợp thế mạnh của nhau có thể tạo ra các tác phẩm đổi mới và phong phú hơn, và điều này cung cấp cho bạn trải nghiệm và cảm hứng mới.',
        'Xây dựng danh mục tác phẩm của bạn một cách liên tục. Tổ chức và phát triển tác phẩm của bạn một cách có hệ thống. Danh mục tác phẩm là tài liệu cho thấy hành trình nghề nghiệp của bạn. Khi bạn xem lại tác phẩm của mình khi thời gian trôi qua, bạn có thể xác nhận quá trình phát triển của mình, nhìn thấy cả phong cách nhất quán và thay đổi cùng một lúc. Điều này trở thành nền tảng để phát triển tác phẩm tiếp theo của bạn hơn nữa.',
        'Theo dõi xu hướng nhưng thêm giải thích của riêng bạn. Nhạy cảm với xu hướng nhưng đừng đánh mất tính độc đáo của bạn. Xu hướng là chỉ số cho biết dòng chảy của thị trường, nhưng chỉ dựa vào chúng có thể làm cho tính cá nhân của bạn biến mất. Nếu bạn hiểu xu hướng và diễn giải lại chúng theo cách riêng của mình để áp dụng, bạn có thể tạo ra các tác phẩm độc đáo trong khi phù hợp với xu hướng.',
        'Chấp nhận phê bình và phản hồi với tâm trí cởi mở. Tìm những điểm để học hỏi từ ý kiến của người khác. Phê bình đôi khi có thể làm tổn thương, nhưng nó làm cho bạn mạnh mẽ hơn. Bạn không cần phải chấp nhận tất cả các phê bình, nhưng nếu bạn phát hiện và áp dụng lời khuyên quý giá trong đó, tác phẩm của bạn sẽ phát triển hơn nữa. Các nhà sáng tạo đang phát triển có thái độ không sợ hãi phê bình mà học hỏi từ đó.',
        'Thử nghiệm và thử thách liên tục. Có can đảm để thử những điều mới mà không sợ thất bại. Bạn không do dự và vui vẻ thử thách khi thử các kỹ thuật hoặc phong cách mới. Thái độ dũng cảm của việc thử mà không sợ thất bại trở thành động lực làm cho bạn phát triển như một nhà sáng tạo. Thất bại là cơ hội để học hỏi, và những thứ tìm thấy sau các thử nghiệm lặp đi lặp lại trở thành phong cách độc đáo của riêng bạn.'
      ], 
      id: [
        'Kembangkan gaya Anda sendiri dalam desain atau seni. Buat karya unik yang dibedakan dari yang lain. Ini bukan hanya membuat hal-hal lebih cantik daripada yang lain tetapi menemukan perspektif dan cara ekspresi unik Anda sendiri. Ketika Anda menyusupi karya Anda dengan pengalaman dan perspektif unik Anda, karya yang secara alami berbeda dari yang lain akan muncul.',
        'Ekspresikan diri Anda melalui kegiatan kreatif. Cobalah menggabungkan cerita dan emosi Anda sendiri ke dalam karya Anda. Karya adalah bahasa lain Anda. Ketika Anda mengekspresikan pikiran dan emosi yang sulit diekspresikan dengan kata-kata melalui metode visual dan sensoris, mereka menjadi karya unik Anda, dan orang-orang merasakan empati manusia di dalamnya.',
        'Pelajari teknik dan alat baru. Adalah baik untuk mempelajari baik alat digital terbaru maupun teknik tradisional. Teknologi adalah alat untuk mewujudkan pikiran. Semakin banyak alat dan teknik beragam yang Anda pelajari, semakin luas jangkauan ekspresi Anda menjadi, memungkinkan Anda untuk mengimplementasikan ide dengan cara baru. Kemampuan untuk mencakup tradisi dan modernitas membuat Anda menjadi kreator yang lebih kompetitif.',
        'Dapatkan inspirasi melalui pengalaman beragam. Perjalanan, pameran, musik, dan berbagai pengalaman budaya membantu. Inspirasi untuk penciptaan datang dari pengalaman sehari-hari. Semakin banyak Anda mengunjungi tempat-tempat baru, menemui budaya berbeda, dan mengagumi berbagai karya seni, semakin kaya reservoir kreatif Anda menjadi, dan ini bergabung untuk melahirkan karya unik.',
        'Bagikan karya Anda kepada dunia. Berkomunikasi dengan orang-orang dan terima umpan balik melalui SNS atau pameran. Karya yang baik pun tidak dapat dilihat orang-orang jika tidak dipromosikan. Kami hidup di era di mana Anda dapat dengan mudah menampilkan karya Anda kepada banyak orang melalui SNS dan berbagai platform online. Anda dapat tumbuh lebih jauh dalam proses berbagi karya dan berkomunikasi dengan orang-orang untuk menerima umpan balik.',
        'Berkolaborasi dengan kreator lain. Bekerja bersama dapat menciptakan sinergi yang lebih besar. Ide dan pendekatan yang tidak dapat dipikirkan oleh satu orang dapat muncul melalui kolaborasi. Ketika bekerja dengan kreator di berbagai bidang, menggabungkan kekuatan masing-masing dapat menciptakan karya yang lebih inovatif dan kaya, dan ini memberi Anda pengalaman dan inspirasi baru.',
        'Bangun portofolio Anda secara terus menerus. Atur dan kembangkan karya Anda secara sistematis. Portofolio adalah bahan yang menunjukkan perjalanan karier Anda. Ketika Anda melihat kembali karya Anda seiring berlalunya waktu, Anda dapat mengkonfirmasi proses pertumbuhan Anda, melihat gaya yang konsisten dan berubah secara bersamaan. Ini menjadi fondasi untuk mengembangkan karya Anda berikutnya lebih lanjut.',
        'Ikuti tren tetapi tambahkan interpretasi Anda sendiri. Peka terhadap tren tetapi jangan kehilangan orisinalitas Anda. Tren adalah indikator yang memberitahu aliran pasar, tetapi hanya bergantung pada mereka dapat membuat individualitas Anda hilang. Jika Anda memahami tren dan menafsirkan ulang mereka dengan cara Anda sendiri untuk menerapkannya, Anda dapat menciptakan karya unik sambil menyesuaikan tren.',
        'Terima kritik dan umpan balik dengan pikiran terbuka. Temukan hal-hal untuk dipelajari dari pendapat orang lain. Kritik kadang-kadang bisa menyakitkan, tetapi itu membuat Anda lebih kuat. Anda tidak perlu menerima semua kritik, tetapi jika Anda menemukan dan menerapkan saran berharga di dalamnya, karya Anda akan berkembang lebih lanjut. Kreator yang tumbuh memiliki sikap tidak takut akan kritik tetapi belajar darinya.',
        'Eksperimen dan tantang terus menerus. Miliki keberanian untuk mencoba hal-hal baru tanpa takut gagal. Anda tidak ragu-ragu dan dengan senang hati menantang ketika mencoba teknik atau gaya baru. Sikap berani mencoba tanpa takut gagal menjadi kekuatan pendorong yang membuat Anda tumbuh sebagai kreator. Kegagalan adalah kesempatan untuk belajar, dan hal-hal yang ditemukan setelah eksperimen berulang menjadi gaya unik Anda sendiri.'
      ] 
    },
    fortune: {
      success: { 
        ko: [
          '창의적 직업에서 큰 성공을 이룰 가능성이 높습니다. 자신만의 독특한 세계관과 스타일이 큰 자산이 될 것입니다. 당신은 남들과 다른 시각과 표현 방식을 가지고 있어서 시장에서 차별화된 위치를 확보할 수 있으며, 이로 인해 많은 사람들이 당신의 작품에 관심을 가지게 됩니다.',
          '자신만의 독특한 스타일로 인정받을 것입니다. 남들과 차별화된 작품으로 큰 주목을 받을 수 있습니다. 당신의 작품은 시각적 독창성뿐만 아니라 메시지와 의미에서도 깊이를 가지고 있어 사람들이 단순히 예쁘다고 생각하는 것을 넘어서 그 안에 담긴 이야기에 공감하고 감동받게 됩니다.',
          '아이디어로 새로운 가치를 만들어낼 수 있습니다. 혁신적인 작품으로 업계에 큰 파급을 만들 수 있습니다. 당신은 기존의 방식을 따르는 것이 아니라 새로운 접근과 실험을 통해 업계 전반의 스타일과 트렌드를 바꿀 수 있는 영향을 미치며, 다른 크리에이터들도 당신의 스타일을 참고하게 됩니다.',
          '예술적 감성으로 많은 사람들에게 감동을 줄 것입니다. 아름다운 작품으로 사람들의 마음을 움직일 수 있습니다. 당신의 작품은 단순히 기술적으로 뛰어난 것이 아니라 사람들의 마음속 깊숙이 스며들어 오랫동안 기억에 남는 감동을 주며, 이는 당신에게 충성도 높은 팬베이스를 만들어줍니다.',
          '혁신적인 작품으로 세상을 변화시킬 수 있습니다. 트렌드를 만들어내는 선구자가 될 수 있습니다. 당신은 세상이 어떻게 변하고 있는지 민감하게 감지하며, 그것을 작품에 반영하여 사람들에게 새로운 경험과 인식을 제공하며 미래의 방향을 제시할 수 있습니다.',
          '자신만의 브랜드를 만들어 큰 성공을 이룰 수 있습니다. 독특한 네임밸류로 인정받을 수 있습니다. 당신의 이름 자체가 하나의 브랜드가 되어 사람들이 당신의 작품을 찾아오게 되며, 이는 지속적인 수입과 안정적인 커리어를 만들어줄 것입니다.',
          '창작 활동을 통해 경제적 성공과 함께 정신적 만족을 얻을 수 있습니다. 재능과 열정으로 부를 창출할 수 있습니다. 당신은 자신이 좋아하는 일을 하면서 동시에 경제적 독립도 이룰 수 있는 행운을 갖게 되며, 이는 많은 사람들이 꿈꾸지만 쉽게 얻을 수 없는 삶을 살 수 있게 해줍니다.',
          '다양한 분야에서 활동하며 자신의 능력을 발휘할 수 있습니다. 크로스오버 프로젝트에서 뛰어난 성과를 낼 수 있습니다. 당신은 한 분야에만 국한되지 않고 여러 영역에서 자신의 창의력을 발휘할 수 있어 더 많은 기회와 도전을 만날 수 있으며, 이를 통해 지속적인 성장과 발전을 이루어낼 수 있습니다.',
          '세계적인 수준의 작품을 만들어 국제적 인정을 받을 수 있습니다. 글로벌 무대에서 성공할 수 있습니다. 당신의 작품은 언어와 문화의 경계를 넘어서는 보편적인 가치를 가지고 있어 전 세계의 사람들에게 사랑받게 되며, 국제 전시회나 프라이즈에서도 인정받을 수 있는 가능성이 높습니다.',
          '후대에 남을 작품을 만들어 낼 가능성이 높습니다. 영향력 있는 아티스트나 디자이너로 인정받을 수 있습니다. 당신의 작품은 시간이 지나도 여전히 그 가치를 인정받으며, 미술사나 디자인사에 이름을 남길 수 있는 위대한 작품을 만들어낼 수 있는 잠재력을 가지고 있습니다.'
        ],
        en: [
          'You have a high chance of achieving great success in creative professions. Your own unique worldview and style will be a great asset. You have different perspectives and ways of expression than others, allowing you to secure a differentiated position in the market, and this causes many people to be interested in your works.',
          'You will be recognized for your own unique style. You can receive great attention with works that are differentiated from others. Your works have not only visual originality but also depth in message and meaning, causing people to empathize and be moved by the story within beyond just thinking they look good.',
          'You can create new value with ideas. You can create a great impact on the industry with innovative works. You can influence the styles and trends of the entire industry through new approaches and experiments rather than following existing methods, and other creators also reference your style.',
          'You will move many people with your artistic sensibility. You can move people\'s hearts with beautiful works. Your works seep deep into people\'s hearts to give lasting impressions, not just technically excellent, creating a highly loyal fanbase for you.',
          'You can change the world with innovative works. You can become a pioneer who creates trends. You sensitively sense how the world is changing, reflect it in your works to provide new experiences and awareness to people, and can suggest future directions.',
          'You can create your own brand and achieve great success. You can be recognized for unique name value. Your name itself becomes a brand, making people seek your works, which will create continuous income and a stable career.',
          'You can gain both economic success and spiritual satisfaction through creative activities. You can create wealth with talent and passion. You have the luck to achieve economic independence while doing what you love, allowing you to live a life many people dream of but cannot easily obtain.',
          'You can be active in various fields and demonstrate your abilities. You can achieve excellent results in crossover projects. You are not limited to one field but can demonstrate creativity in multiple areas, encountering more opportunities and challenges, through which you can achieve continuous growth and development.',
          'You can create world-class works and receive international recognition. You can succeed on the global stage. Your works have universal value that transcends language and cultural boundaries, being loved by people worldwide, with high potential for recognition at international exhibitions and prizes.',
          'You have a high possibility of creating works that will remain for future generations. You can be recognized as an influential artist or designer. Your works continue to be recognized in value even as time passes, and you have the potential to create great works that can leave your name in art or design history.'
        ], 
        ja: [
          '創造的な職業で大きな成功を収める可能性が高いです。自分だけの独特な世界観とスタイルが大きな資産となるでしょう。あなたは他人とは異なる視点と表現方法を持っているため、市場で差別化されたポジションを確保でき、これにより多くの人々があなたの作品に興味を持つようになります。',
          '自分だけの独特なスタイルで認められるでしょう。他人と差別化された作品で大きな注目を集めることができます。あなたの作品は視覚的な独創性だけでなく、メッセージと意味においても深さを持っており、人々が単に美しいと思うことを超えて、その中に込められた物語に共感し、感動させられます。',
          'アイデアで新しい価値を生み出すことができます。革新的な作品で業界に大きな波及効果を作ることができます。あなたは既存の方法に従うのではなく、新しいアプローチと実験を通じて業界全体のスタイルとトレンドを変える影響を与え、他のクリエイターもあなたのスタイルを参考にします。',
          '芸術的センスで多くの人に感動を与えるでしょう。美しい作品で人々の心を動かすことができます。あなたの作品は単に技術的に優れているだけでなく、人々の心の奥深くに染み込み、長い間記憶に残る感動を与え、これはあなたに忠誠度の高いファンベースを作ります。',
          '革新的な作品で世界を変えることができます。トレンドを作り出す先駆者になることができます。あなたは世界がどのように変化しているかを敏感に感知し、それを作品に反映させて人々に新しい経験と認識を提供し、未来の方向を示すことができます。',
          '自分だけのブランドを作って大きな成功を収めることができます。独特なネームバリューで認められることができます。あなたの名前自体が一つのブランドになり、人々があなたの作品を求めに来るようになり、これは持続的な収入と安定したキャリアを作ります。',
          '創作活動を通じて経済的成功と精神的な満足を得ることができます。才能と情熱で富を創出することができます。あなたは好きなことをしながら同時に経済的な独立も達成できる幸運を持ち、これは多くの人々が夢見るが簡単に手に入れることができない人生を送ることができるようにします。',
          '様々な分野で活動し、自分の能力を発揮することができます。クロスオーバープロジェクトで優れた成果を上げることができます。あなたは一つの分野に限定されず、複数の領域で自分の創造性を発揮できるため、より多くの機会と挑戦に遭遇し、これを通じて持続的な成長と発展を達成できます。',
          '世界的なレベルの作品を作って国際的な認証を受けることができます。グローバルな舞台で成功することができます。あなたの作品は言語と文化の境界を超越する普遍的な価値を持っているため、世界中の人々に愛され、国際展示会やプライズでも認証を受ける可能性が高いです。',
          '後世に残る作品を作り出す可能性が高いです。影響力のあるアーティストやデザイナーとして認められることができます。あなたの作品は時間が経過してもその価値が認められ続け、美術史やデザイン史に名前を残すことができる偉大な作品を作り出す潜在力を持っています。'
        ], 
        'zh-CN': [
          '你在创意职业中取得巨大成功的可能性很高。你自己独特的世界观和风格将是一笔巨大的财富。你拥有与他人不同的视角和表达方式，使你能够在市场中占据差异化地位，这会让许多人对你的作品感兴趣。',
          '你会因自己独特的风格而被认可。你可以用与他人差异化的作品获得极大关注。你的作品不仅具有视觉独创性，在信息和意义方面也具有深度，使人们超越仅仅认为作品好看而能与其中蕴含的故事产生共鸣并被感动。',
          '你可以用想法创造新价值。你可以用创新作品在行业内产生巨大影响。你不是遵循现有方法，而是通过新方法和实验来影响整个行业的风格和趋势，其他创作者也会参考你的风格。',
          '你会用艺术感感动许多人。你可以用美丽的作品打动人们的心。你的作品不仅技术精湛，更能深入人心，留下持久的印象，为你建立高度忠诚的粉丝群。',
          '你可以用创新作品改变世界。你可以成为创造趋势的先锋。你敏锐地感知世界如何变化，将其反映在作品中，为人们提供新的体验和认知，并能指出未来的方向。',
          '你可以创建自己的品牌并取得巨大成功。你可以因独特的名称价值而被认可。你的名字本身就成为一个品牌，让人们主动寻找你的作品，这将为你带来持续的收入和稳定的职业。',
          '你可以通过创作活动获得经济成功和精神满足。你可以用才能和激情创造财富。你拥有在从事热爱事业的同时实现经济独立的幸运，让你能够过上许多人梦想却难以轻易获得的生活。',
          '你可以在各个领域活跃并展示你的能力。你可以在跨界项目中取得优异成绩。你不局限于单一领域，可以在多个领域展现创造力，遇到更多机会和挑战，通过这种方式实现持续成长和发展。',
          '你可以创作世界级作品并获得国际认可。你可以在国际舞台上取得成功。你的作品具有超越语言和文化边界的普世价值，被全世界的人喜爱，在国际展览和奖项中获得认可的可能性很高。',
          '你很有可能创作出流传后世的作品。你可以被认可为有影响力的艺术家或设计师。你的作品即使时光流逝仍能持续获得价值认可，你有潜力创作出能在艺术史或设计史上留下名字的伟大作品。'
        ], 
        'zh-TW': [
          '你在創意職業中取得巨大成功的可能性很高。你自己獨特的世界觀和風格將是一筆巨大的財富。你擁有與他人不同的視角和表達方式，使你能夠在市場中佔據差異化地位，這會讓許多人對你的作品感興趣。',
          '你會因自己獨特的風格而被認可。你可以用與他人差異化的作品獲得極大關注。你的作品不僅具有視覺獨創性，在資訊和意義方面也具有深度，使人們超越僅僅認為作品好看而能與其中蘊含的故事產生共鳴並被感動。',
          '你可以用想法創造新價值。你可以用創新作品在行業內產生巨大影響。你不是遵循現有方法，而是通過新方法和實驗來影響整個行業的風格和趨勢，其他創作者也會參考你的風格。',
          '你會用藝術感感動許多人。你可以用美麗的作品打動人們的心。你的作品不僅技術精湛，更能深入人心，留下持久的印象，為你建立高度忠誠的粉絲群。',
          '你可以用創新作品改變世界。你可以成為創造趨勢的先鋒。你敏銳地感知世界如何變化，將其反映在作品中，為人們提供新的體驗和認知，並能指出未來的方向。',
          '你可以創建自己的品牌並取得巨大成功。你可以因獨特的名稱價值而被認可。你的名字本身就成為一個品牌，讓人們主動尋找你的作品，這將為你帶來持續的收入和穩定的職業。',
          '你可以通過創作活動獲得經濟成功和精神滿足。你可以用才能和激情創造財富。你擁有在從事熱愛事業的同時實現經濟獨立的幸運，讓你能夠過上許多人夢想卻難以輕易獲得的生活。',
          '你可以在各個領域活躍並展示你的能力。你可以在跨界專案中取得優異成績。你不局限於單一領域，可以在多個領域展現創造力，遇到更多機會和挑戰，通過這種方式實現持續成長和發展。',
          '你可以創作世界級作品並獲得國際認可。你可以在國際舞台上取得成功。你的作品具有超越語言和文化邊界的普世價值，被全世界的人喜愛，在國際展覽和獎項中獲得認可的可能性很高。',
          '你很有可能創作出流傳後世的作品。你可以被認可為有影響力的藝術家或設計師。你的作品即使時光流逝仍能持續獲得價值認可，你有潛力創作出能在藝術史或設計史上留下名字的偉大作品。'
        ], 
        vi: [
          'Bạn có khả năng cao đạt được thành công lớn trong các ngành nghề sáng tạo. Thế giới quan và phong cách độc đáo của riêng bạn sẽ là tài sản lớn. Bạn có góc nhìn và cách biểu đạt khác với người khác, cho phép bạn chiếm vị trí khác biệt trong thị trường, và điều này khiến nhiều người quan tâm đến tác phẩm của bạn.',
          'Bạn sẽ được công nhận cho phong cách độc đáo của riêng mình. Bạn có thể nhận được sự chú ý lớn với các tác phẩm khác biệt với người khác. Tác phẩm của bạn không chỉ có tính độc đáo về mặt thị giác mà còn có chiều sâu về thông điệp và ý nghĩa, khiến mọi người cảm thông và cảm động với câu chuyện bên trong vượt ra ngoài việc chỉ nghĩ rằng chúng trông đẹp.',
          'Bạn có thể tạo ra giá trị mới với ý tưởng. Bạn có thể tạo ra tác động lớn đến ngành công nghiệp với các tác phẩm đổi mới. Bạn có thể ảnh hưởng đến phong cách và xu hướng của toàn bộ ngành thông qua các phương pháp tiếp cận và thử nghiệm mới thay vì tuân theo các phương pháp hiện có, và các nhà sáng tạo khác cũng tham khảo phong cách của bạn.',
          'Bạn sẽ lay động nhiều người với cảm nhận nghệ thuật của mình. Bạn có thể lay động trái tim mọi người bằng các tác phẩm đẹp. Tác phẩm của bạn thấm sâu vào trái tim mọi người để tạo ấn tượng lâu dài, không chỉ xuất sắc về mặt kỹ thuật, tạo ra cơ sở người hâm mộ trung thành cao cho bạn.',
          'Bạn có thể thay đổi thế giới với các tác phẩm đổi mới. Bạn có thể trở thành người tiên phong tạo ra xu hướng. Bạn cảm nhận nhạy bén cách thế giới đang thay đổi, phản ánh nó trong tác phẩm của mình để cung cấp trải nghiệm và nhận thức mới cho mọi người, và có thể đề xuất các hướng tương lai.',
          'Bạn có thể tạo ra thương hiệu riêng của mình và đạt được thành công lớn. Bạn có thể được công nhận vì giá trị tên độc đáo. Tên của bạn trở thành một thương hiệu, khiến mọi người tìm kiếm tác phẩm của bạn, điều này sẽ tạo ra thu nhập liên tục và sự nghiệp ổn định.',
          'Bạn có thể đạt được cả thành công kinh tế và sự hài lòng về mặt tinh thần thông qua các hoạt động sáng tạo. Bạn có thể tạo ra của cải bằng tài năng và niềm đam mê. Bạn có vận may đạt được độc lập kinh tế trong khi làm những gì bạn yêu thích, cho phép bạn sống một cuộc sống mà nhiều người mơ ước nhưng không thể dễ dàng có được.',
          'Bạn có thể hoạt động trong các lĩnh vực khác nhau và thể hiện khả năng của mình. Bạn có thể đạt được kết quả xuất sắc trong các dự án giao thoa. Bạn không bị giới hạn trong một lĩnh vực mà có thể thể hiện sự sáng tạo trong nhiều lĩnh vực, gặp nhiều cơ hội và thử thách hơn, qua đó bạn có thể đạt được sự phát triển và tăng trưởng liên tục.',
          'Bạn có thể tạo ra các tác phẩm cấp thế giới và nhận được sự công nhận quốc tế. Bạn có thể thành công trên sân khấu toàn cầu. Tác phẩm của bạn có giá trị phổ quát vượt qua ranh giới ngôn ngữ và văn hóa, được yêu mến bởi mọi người trên toàn thế giới, với tiềm năng cao được công nhận tại các triển lãm và giải thưởng quốc tế.',
          'Bạn có khả năng cao tạo ra các tác phẩm sẽ còn lại cho các thế hệ tương lai. Bạn có thể được công nhận là một nghệ sĩ hoặc nhà thiết kế có ảnh hưởng. Tác phẩm của bạn tiếp tục được công nhận về giá trị ngay cả khi thời gian trôi qua, và bạn có tiềm năng tạo ra các tác phẩm vĩ đại có thể để lại tên của bạn trong lịch sử nghệ thuật hoặc thiết kế.'
        ], 
        id: [
          'Anda memiliki peluang tinggi untuk mencapai kesuksesan besar dalam profesi kreatif. Pandangan dunia dan gaya unik Anda sendiri akan menjadi aset besar. Anda memiliki perspektif dan cara ekspresi yang berbeda dengan orang lain, memungkinkan Anda untuk mengamankan posisi yang dibedakan di pasar, dan ini menyebabkan banyak orang tertarik pada karya Anda.',
          'Anda akan diakui untuk gaya unik Anda sendiri. Anda dapat menerima perhatian besar dengan karya yang dibedakan dari yang lain. Karya Anda tidak hanya memiliki orisinalitas visual tetapi juga kedalaman dalam pesan dan makna, menyebabkan orang berempati dan terpukau dengan cerita di dalamnya di luar sekadar berpikir mereka terlihat bagus.',
          'Anda dapat menciptakan nilai baru dengan ide. Anda dapat menciptakan dampak besar pada industri dengan karya inovatif. Anda dapat mempengaruhi gaya dan tren seluruh industri melalui pendekatan dan eksperimen baru daripada mengikuti metode yang ada, dan kreator lain juga merujuk gaya Anda.',
          'Anda akan menggerakkan banyak orang dengan kepekaan artistik Anda. Anda dapat menggerakkan hati orang dengan karya yang indah. Karya Anda meresap jauh ke dalam hati orang untuk memberikan kesan yang bertahan lama, tidak hanya sangat baik secara teknis, menciptakan basis penggemar yang sangat loyal untuk Anda.',
          'Anda dapat mengubah dunia dengan karya inovatif. Anda dapat menjadi perintis yang menciptakan tren. Anda merasakan dengan sensitif bagaimana dunia berubah, memantulkannya dalam karya Anda untuk memberikan pengalaman dan kesadaran baru kepada orang-orang, dan dapat menyarankan arah masa depan.',
          'Anda dapat menciptakan merek Anda sendiri dan mencapai kesuksesan besar. Anda dapat diakui untuk nilai nama unik. Nama Anda sendiri menjadi merek, membuat orang mencari karya Anda, yang akan menciptakan pendapatan berkelanjutan dan karier yang stabil.',
          'Anda dapat memperoleh baik kesuksesan ekonomi maupun kepuasan spiritual melalui kegiatan kreatif. Anda dapat menciptakan kekayaan dengan bakat dan gairah. Anda memiliki keberuntungan untuk mencapai kemandirian ekonomi sambil melakukan apa yang Anda cintai, memungkinkan Anda untuk menjalani kehidupan yang diimpikan oleh banyak orang tetapi tidak mudah diperoleh.',
          'Anda dapat aktif di berbagai bidang dan menunjukkan kemampuan Anda. Anda dapat mencapai hasil yang sangat baik dalam proyek lintas. Anda tidak terbatas pada satu bidang tetapi dapat menunjukkan kreativitas di beberapa bidang, menghadapi lebih banyak peluang dan tantangan, melalui mana Anda dapat mencapai pertumbuhan dan pengembangan berkelanjutan.',
          'Anda dapat menciptakan karya kelas dunia dan menerima pengakuan internasional. Anda dapat berhasil di panggung global. Karya Anda memiliki nilai universal yang melampaui batas bahasa dan budaya, dicintai oleh orang-orang di seluruh dunia, dengan potensi tinggi untuk pengakuan di pameran dan penghargaan internasional.',
          'Anda memiliki kemungkinan tinggi untuk menciptakan karya yang akan tetap untuk generasi mendatang. Anda dapat diakui sebagai seniman atau desainer yang berpengaruh. Karya Anda terus diakui nilainya bahkan ketika waktu berlalu, dan Anda memiliki potensi untuk menciptakan karya besar yang dapat meninggalkan nama Anda dalam sejarah seni atau desain.'
        ] 
      },
      hidden: { 
        ko: [
          '세상을 바꾸는 혁신적인 아이디어를 만들어낼 잠재력이 있습니다. 작은 아이디어가 큰 변화를 만들어낼 수 있습니다. 당신의 창의력은 지금 당장은 작고 미미해 보일지 모르지만, 그것이 시간이 지나면서 점점 더 큰 영향력을 발휘하게 되며, 사회 전반에 긍정적인 변화를 가져다 줄 수 있는 힘을 가지고 있습니다.',
          '많은 사람들에게 영감을 주는 작품을 만들 수 있습니다. 세상을 더 아름답게 만드는 일에 기여할 수 있습니다. 당신의 작품을 본 사람들은 단순히 감동받는 것을 넘어서 그것이 자신의 삶을 바꾸는 계기를 만나게 되며, 당신은 그들에게 용기와 희망을 주는 존재가 됩니다.',
          '자신만의 브랜드를 만들어 큰 성공을 이룰 수 있습니다. 독특한 아이덴티티로 스타로 성장할 수 있습니다. 당신의 개성과 스타일이 많은 사람들에게 어필되어 당신을 따르는 팬들이 생기며, 이는 당신에게 안정적이고 지속 가능한 커리어를 제공해줍니다.',
          '예술계에서 인정받는 거장이 될 가능성이 높습니다. 시간이 지나도 기억되는 작품을 만들어낼 수 있습니다. 당신의 작품은 컬렉션의 대상이 되고 미술관이나 갤러리에 전시되며, 미래의 세대들에게도 계속해서 사랑받는 작품이 될 수 있습니다.',
          '창의적 영역에서 선도적인 역할을 할 수 있습니다. 업계의 스타일 리더가 될 수 있습니다. 다른 크리에이터들이 당신의 작품을 보며 영감을 받고 당신의 스타일을 따라하게 되며, 당신은 업계 전반의 방향을 제시하는 영향력 있는 인물이 됩니다.',
          '세대를 아우르는 작품을 만들어낼 수 있습니다. 모든 연령층에게 사랑받는 크리에이터가 될 수 있습니다. 나이가 들어도 당신의 작품은 계속해서 사람들에게 사랑받으며, 다양한 세대의 사람들이 당신의 메시지에 공감하고 그에게 영감을 받습니다.',
          '국제적으로 인정받는 아티스트가 될 가능성이 높습니다. 글로벌 팬베이스를 만들 수 있습니다. 당신의 작품은 언어와 문화의 장벽을 넘어서 전 세계의 사람들에게 전달되며, 다양한 국가에서 전시회가 열리고 당신의 작품을 구매하는 사람들이 늘어납니다.',
          '여러 분야를 넘나드는 유니버설 재능을 가지고 있습니다. 크로스오버 프로젝트에서 뛰어난 능력을 발휘할 수 있습니다. 당신은 예술뿐만 아니라 디자인, 음악, 문학 등 다양한 분야에서 활동하며, 서로 다른 분야를 융합하는 혁신적인 작품을 만들어낼 수 있습니다.',
          '교육자나 멘토로서 다른 크리에이터들을 양성할 수 있는 능력이 있습니다. 후진 양성에도 큰 역할을 할 수 있습니다. 당신은 자신의 경험과 노하우를 후배들에게 전수하여 그들이 더 쉽게 성공할 수 있도록 도와주며, 이는 당신에게 큰 보람과 의미를 줍니다.',
          '지속 가능한 창작 활동을 통해 평생 동안 성공하는 크리에이터가 될 수 있습니다. 한순간의 유행이 아닌 오래가는 명성을 쌓을 수 있습니다. 당신은 트렌드에 흔들리지 않고 자신만의 핵심 가치와 스타일을 유지하며, 이것이 시간이 지날수록 더욱 빛나게 됩니다.'
        ],
        en: [
          'You have the potential to create innovative ideas that change the world. Small ideas can create great changes. Your creativity may seem small and insignificant now, but it will exert increasingly greater influence as time passes, having the power to bring positive changes to society as a whole.',
          'You can create works that inspire many people. You can contribute to making the world more beautiful. People who see your works experience not just being moved but also that it becomes an opportunity to change their lives, making you a presence that gives them courage and hope.',
          'You can create your own brand and achieve great success. You can grow to become a star with a unique identity. Your personality and style appeal to many people, creating fans who follow you, which provides you with a stable and sustainable career.',
          'You have a high chance of becoming a recognized master in the art world. You can create works that are remembered even as time passes. Your works become objects of collection and are exhibited in museums or galleries, being works that continue to be loved by future generations as well.',
          'You can play a leading role in creative areas. You can become an industry style leader. Other creators get inspired by seeing your works and follow your style, making you an influential figure who suggests directions for the entire industry.',
          'You can create works that transcend generations. You can become a creator loved by all age groups. Your works continue to be loved even as you age, with people of different generations empathizing with your message and getting inspired by you.',
          'You have a high chance of becoming an internationally recognized artist. You can build a global fanbase. Your works reach people worldwide beyond language and cultural barriers, with exhibitions opening in various countries and increasing numbers of people purchasing your works.',
          'You have a universal talent that crosses multiple fields. You can demonstrate excellent abilities in crossover projects. You are active not only in art but also in various fields such as design, music, and literature, able to create innovative works that fuse different areas.',
          'You have the ability to nurture other creators as an educator or mentor. You can play a significant role in developing successors. You impart your experiences and know-how to juniors to help them succeed more easily, which gives you great satisfaction and meaning.',
          'You can become a successful creator throughout your life through sustainable creative activities. You can build lasting fame rather than momentary trends. You maintain your own core values and style without being swayed by trends, which shines even brighter over time.'
        ], 
        ja: [
          '世界を変える革新的なアイデアを作り出す可能性があります。小さなアイデアが大きな変化を作り出すことができます。あなたの創造力は今すぐには小さくてささやかに見えるかもしれませんが、それが時間が経つにつれてますます大きな影響力を発揮し、社会全体に肯定的な変化をもたらす力を備えています。',
          '多くの人にインスピレーションを与える作品を作ることができます。世界をより美しくする仕事に貢献することができます。あなたの作品を見た人々は単に感動するだけでなく、それが自分たちの人生を変えるきっかけに出会い、あなたは彼らに勇気と希望を与える存在となります。',
          '自分だけのブランドを作って大きな成功を収めることができます。独特なアイデンティティでスターに成長することができます。あなたの個性とスタイルが多くの人々にアピールし、あなたをフォローするファンが生まれ、これはあなたに安定した持続可能なキャリアを提供します。',
          '芸術界で認められる巨匠になる可能性が高いです。時間が経過しても記憶される作品を作り出すことができます。あなたの作品はコレクションの対象となり、美術館やギャラリーに展示され、将来の世代にも引き続き愛される作品となることができます。',
          '創造的領域で先導的な役割を果たすことができます。業界のスタイルリーダーになることができます。他のクリエイターがあなたの作品を見てインスピレーションを受け、あなたのスタイルに従うようになり、あなたは業界全体の方向性を示す影響力のある人物となります。',
          '世代を超えた作品を作り出すことができます。あらゆる年齢層に愛されるクリエイターになることができます。年を取ってもあなたの作品は引き続き人々に愛され、様々な世代の人々があなたのメッセージに共感し、それにインスピレーションを受けます。',
          '国際的に認められるアーティストになる可能性が高いです。グローバルなファンベースを構築することができます。あなたの作品は言語と文化の障壁を超えて世界中の人々に伝わり、様々な国で展示会が開かれ、あなたの作品を購入する人々が増加します。',
          '複数の分野をまたぐユニバーサルな才能を持っています。クロスオーバープロジェクトで優れた能力を発揮することができます。あなたは芸術だけでなく、デザイン、音楽、文学など様々な分野で活動し、異なる分野を融合する革新的な作品を作り出すことができます。',
          '教育者やメンターとして他のクリエイターを育成する能力があります。後進の育成にも大きな役割を果たすことができます。あなたは自分の経験とノウハウを後輩に伝えて、彼らがより簡単に成功できるように助け、これはあなたに大きな喜びと意味を与えます。',
          '持続可能な創作活動を通じて生涯を通じて成功するクリエイターになることができます。一瞬の流行ではなく長続きする名声を築くことができます。あなたはトレンドに揺さぶられずに自分だけのコアバリューとスタイルを維持し、これは時間が経つにつれてさらに輝きを増します。'
        ], 
        'zh-CN': [
          '你有潜力创造出改变世界的创新想法。小想法可以创造巨大变化。你的创造力可能现在看起来很小微不足道，但随着时间推移它会发挥越来越大的影响力，拥有为整个社会带来积极变化的 power。',
          '你可以创作出激励许多人的作品。你可以为让世界更美丽做出贡献。看过你作品的人们不仅会被感动，还会遇到改变人生的契机，使你成为给他们勇气和希望的存在。',
          '你可以创建自己的品牌并取得巨大成功。你可以用独特的身份成长为明星。你的个性和风格吸引许多人，产生追随你的粉丝，为你提供稳定可持续的职业。',
          '你在艺术界成为公认大师的可能性很高。你可以创作出即使时光流逝仍被铭记的作品。你的作品成为收藏对象，在博物馆或画廊展出，成为未来世代也会持续喜爱的作品。',
          '你可以在创意领域发挥主导作用。你可以成为行业风格领袖。其他创作者看到你的作品受到启发并跟随你的风格，使你成为为整个行业指明方向的有影响力的人物。',
          '你可以创作出超越时代的作品。你可以成为所有年龄段都喜爱的创作者。即使随着年龄增长，你的作品也会持续被人们喜爱，不同世代的人都会与你的信息产生共鸣并从中获得启发。',
          '你很有可能成为国际公认的艺术家。你可以建立全球粉丝群。你的作品超越语言和文化障碍传达给全世界的人，在各国举办展览，购买你作品的人不断增加。',
          '你拥有跨越多个领域的通用才能。你可以在跨界项目中展现卓越能力。你不仅在艺术领域，还在设计、音乐、文学等各个领域活跃，能够创作出融合不同领域的创新作品。',
          '你有能力作为教育者或导师培养其他创作者。你可以在培养后辈方面发挥重要作用。你将你的经验和诀窍传授给后辈，帮助他们更容易成功，这给你带来巨大的满足感和意义。',
          '你可以通过可持续的创作活动成为终身成功的创作者。你可以建立持久的声誉而非一时潮流。你不被趋势左右地保持自己的核心价值和风格，这会让你的作品随时间流逝更加闪耀。'
        ], 
        'zh-TW': [
          '你有潛力創造出改變世界的創新想法。小想法可以創造巨大變化。你的創造力可能現在看起來很小微不足道，但隨著時間推移它會發揮越來越大的影響力，擁有為整個社會帶來積極變化的 power。',
          '你可以創作出激勵許多人的作品。你可以為讓世界更美麗做出貢獻。看過你作品的人們不僅會被感動，還會遇到改變人生的契機，使你成為給他們勇氣和希望的存在。',
          '你可以創建自己的品牌並取得巨大成功。你可以用獨特的身份成長為明星。你的個性和風格吸引許多人，產生追隨你的粉絲，為你提供穩定可持續的職業。',
          '你在藝術界成為公認大師的可能性很高。你可以創作出即使時光流逝仍被銘記的作品。你的作品成為收藏對象，在博物館或畫廊展出，成為未來世代也會持續喜愛的作品。',
          '你可以在創意領域發揮主導作用。你可以成為行業風格領袖。其他創作者看到你的作品受到啟發並跟隨你的風格，使你成為為整個行業指明方向的有影響力的人物。',
          '你可以創作出超越時代的作品。你可以成為所有年齡段都喜愛的創作者。即使隨著年齡增長，你的作品也會持續被人們喜愛，不同世代的人都會與你的資訊產生共鳴並從中獲得啟發。',
          '你很有可能成為國際公認的藝術家。你可以建立全球粉絲群。你的作品超越語言和文化障礙傳達給全世界的人，在各國舉辦展覽，購買你作品的人不斷增加。',
          '你擁有跨越多個領域的通用才能。你可以在跨界專案中展現卓越能力。你不僅在藝術領域，還在設計、音樂、文學等各個領域活躍，能夠創作出融合不同領域的創新作品。',
          '你有能力作為教育者或導師培養其他創作者。你可以在培養後輩方面發揮重要作用。你將你的經驗和訣竅傳授給後輩，幫助他們更容易成功，這給你帶來巨大的滿足感和意義。',
          '你可以通過可持續的創作活動成為終身成功的創作者。你可以建立持久的聲譽而非一時潮流。你不被趨勢左右地保持自己的核心價值和風格，這會讓你的作品隨時間流逝更加閃耀。'
        ], 
        vi: [
          'Bạn có tiềm năng tạo ra những ý tưởng đổi mới thay đổi thế giới. Những ý tưởng nhỏ có thể tạo ra những thay đổi lớn. Sự sáng tạo của bạn có vẻ nhỏ và không đáng kể ngay bây giờ, nhưng nó sẽ phát huy ảnh hưởng ngày càng lớn hơn khi thời gian trôi qua, có khả năng mang lại những thay đổi tích cực cho toàn xã hội.',
          'Bạn có thể tạo ra các tác phẩm truyền cảm hứng cho nhiều người. Bạn có thể đóng góp vào việc làm cho thế giới trở nên đẹp đẽ hơn. Những người xem tác phẩm của bạn không chỉ bị cảm động mà còn gặp được cơ hội thay đổi cuộc đời mình, khiến bạn trở thành sự hiện diện mang lại cho họ can đảm và hy vọng.',
          'Bạn có thể tạo ra thương hiệu riêng của mình và đạt được thành công lớn. Bạn có thể lớn lên trở thành một ngôi sao với bản sắc độc đáo. Tính cách và phong cách của bạn thu hút nhiều người, tạo ra những người hâm mộ theo dõi bạn, điều này cung cấp cho bạn một sự nghiệp ổn định và bền vững.',
          'Bạn có khả năng cao trở thành bậc thầy được công nhận trong giới nghệ thuật. Bạn có thể tạo ra các tác phẩm được ghi nhớ ngay cả khi thời gian trôi qua. Tác phẩm của bạn trở thành đối tượng của bộ sưu tập và được trưng bày trong các viện bảo tàng hoặc phòng triển lãm, là các tác phẩm tiếp tục được yêu mến bởi các thế hệ tương lai.',
          'Bạn có thể đóng vai trò dẫn đầu trong các lĩnh vực sáng tạo. Bạn có thể trở thành người dẫn dắt phong cách trong ngành. Các nhà sáng tạo khác được truyền cảm hứng khi xem tác phẩm của bạn và theo phong cách của bạn, khiến bạn trở thành một nhân vật có ảnh hưởng đề xuất hướng đi cho toàn bộ ngành.',
          'Bạn có thể tạo ra các tác phẩm vượt qua các thế hệ. Bạn có thể trở thành một nhà sáng tạo được yêu mến bởi tất cả các nhóm tuổi. Tác phẩm của bạn tiếp tục được yêu mến ngay cả khi bạn già đi, với những người ở các thế hệ khác nhau đồng cảm với thông điệp của bạn và được truyền cảm hứng từ bạn.',
          'Bạn có khả năng cao trở thành một nghệ sĩ được công nhận quốc tế. Bạn có thể xây dựng một cơ sở người hâm mộ toàn cầu. Tác phẩm của bạn đến với mọi người trên toàn thế giới vượt qua các rào cản ngôn ngữ và văn hóa, với các triển lãm được mở ở các quốc gia khác nhau và số lượng người mua tác phẩm của bạn ngày càng tăng.',
          'Bạn có tài năng phổ quát vượt qua nhiều lĩnh vực. Bạn có thể thể hiện khả năng xuất sắc trong các dự án giao thoa. Bạn hoạt động không chỉ trong nghệ thuật mà còn trong các lĩnh vực khác nhau như thiết kế, âm nhạc và văn học, có thể tạo ra các tác phẩm đổi mới kết hợp các lĩnh vực khác nhau.',
          'Bạn có khả năng nuôi dưỡng các nhà sáng tạo khác như một nhà giáo dục hoặc người cố vấn. Bạn có thể đóng một vai trò quan trọng trong việc phát triển người kế thừa. Bạn truyền đạt kinh nghiệm và bí quyết của mình cho các thế hệ trẻ để giúp họ thành công dễ dàng hơn, điều này mang lại cho bạn sự hài lòng và ý nghĩa lớn.',
          'Bạn có thể trở thành một nhà sáng tạo thành công suốt đời thông qua các hoạt động sáng tạo bền vững. Bạn có thể xây dựng danh tiếng lâu dài thay vì xu hướng nhất thời. Bạn duy trì giá trị và phong cách cốt lõi của riêng mình mà không bị lay động bởi các xu hướng, điều này càng tỏa sáng hơn theo thời gian.'
        ], 
        id: [
          'Anda memiliki potensi untuk menciptakan ide-ide inovatif yang mengubah dunia. Ide-ide kecil dapat menciptakan perubahan besar. Kreativitas Anda mungkin tampak kecil dan tidak signifikan sekarang, tetapi akan mengerahkan pengaruh yang semakin besar seiring berjalannya waktu, memiliki kekuatan untuk membawa perubahan positif ke seluruh masyarakat.',
          'Anda dapat menciptakan karya yang menginspirasi banyak orang. Anda dapat berkontribusi untuk membuat dunia menjadi lebih indah. Orang-orang yang melihat karya Anda tidak hanya tersentuh tetapi juga menemukan bahwa itu menjadi kesempatan untuk mengubah hidup mereka, membuat Anda menjadi kehadiran yang memberi mereka keberanian dan harapan.',
          'Anda dapat menciptakan merek Anda sendiri dan mencapai kesuksesan besar. Anda dapat tumbuh menjadi bintang dengan identitas unik. Kepribadian dan gaya Anda menarik bagi banyak orang, menciptakan penggemar yang mengikuti Anda, yang memberi Anda karier yang stabil dan berkelanjutan.',
          'Anda memiliki peluang tinggi menjadi master yang diakui di dunia seni. Anda dapat menciptakan karya yang diingat bahkan ketika waktu berlalu. Karya Anda menjadi objek koleksi dan dipamerkan di museum atau galeri, menjadi karya yang terus dicintai oleh generasi mendatang juga.',
          'Anda dapat memainkan peran terdepan di bidang kreatif. Anda dapat menjadi pemimpin gaya industri. Kreator lain terinspirasi dengan melihat karya Anda dan mengikuti gaya Anda, membuat Anda menjadi tokoh berpengaruh yang menyarankan arah untuk seluruh industri.',
          'Anda dapat menciptakan karya yang melampaui generasi. Anda dapat menjadi kreator yang dicintai oleh semua kelompok umur. Karya Anda terus dicintai bahkan saat Anda menua, dengan orang-orang dari berbagai generasi berempati dengan pesan Anda dan mendapatkan inspirasi dari Anda.',
          'Anda memiliki peluang tinggi menjadi seniman yang diakui secara internasional. Anda dapat membangun basis penggemar global. Karya Anda mencapai orang-orang di seluruh dunia di luar batas bahasa dan budaya, dengan pameran dibuka di berbagai negara dan jumlah orang yang membeli karya Anda meningkat.',
          'Anda memiliki bakat universal yang melintasi beberapa bidang. Anda dapat menunjukkan kemampuan luar biasa dalam proyek lintas. Anda aktif tidak hanya dalam seni tetapi juga di berbagai bidang seperti desain, musik, dan sastra, mampu menciptakan karya inovatif yang menggabungkan bidang yang berbeda.',
          'Anda memiliki kemampuan untuk membina kreator lain sebagai pendidik atau mentor. Anda dapat memainkan peran signifikan dalam mengembangkan penerus. Anda memberikan pengalaman dan pengetahuan Anda kepada junior untuk membantu mereka berhasil lebih mudah, yang memberi Anda kepuasan dan makna besar.',
          'Anda dapat menjadi kreator sukses sepanjang hidup melalui kegiatan kreatif berkelanjutan. Anda dapat membangun ketenaran yang bertahan lama daripada tren sesaat. Anda mempertahankan nilai dan gaya inti Anda sendiri tanpa terpengaruh oleh tren, yang bersinar lebih terang seiring waktu.'
        ] 
      }
    }
  },
  {
    id: 3,
    title: { ko: '분석가형', en: 'Analyst Type', ja: 'アナリスト型', 'zh-CN': '分析师型', 'zh-TW': '分析師型', vi: 'Kiểu Phân Tích', id: 'Tipe Analis' },
    description: {
      ko: [
        '당신의 얼굴은 냉철한 이성과 정밀한 분석력을 보여줍니다. 데이터와 사실에 기반한 객관적 판단 능력이 뛰어납니다.',
        '논리적 사고와 집중력이 뛰어난 얼굴입니다. 복잡한 문제를 단계적으로 풀어나가는 능력이 탁월합니다.',
        '꼼꼼하고 신중한 성격이 얼굴에 드러납니다. 실수를 줄이고 정확한 결과를 도출하는 것에 능합니다.',
        '수학적이고 과학적인 사고를 하는 얼굴입니다. 패턴을 읽고 규칙을 찾아내는 재주가 있습니다.',
        '객관적이고 공정한 판단력을 가진 얼굴입니다. 감정에 좌우되지 않고 사실에 기반해 결정합니다.',
        '빠른 학습 능력과 이해력이 돋보입니다. 새로운 지식을 빠르게 습득하고 적용할 수 있습니다.',
        '전략적 사고와 계획 수립 능력이 뛰어납니다. 여러 가능성을 고려하여 최적의 방안을 선택합니다.',
        '인내심과 끈기가 있어 어려운 과제도 끝까지 해내는 성격입니다. 꼼꼼함으로 완벽한 결과를 만듭니다.',
        '호기심이 많고 탐구 정신이 강합니다. 미지의 영역에 대한 지적 욕구가 강해서 연구에 적합합니다.',
        '정확성과 신뢰성을 중시하는 얼굴입니다. 데이터와 증거를 중시하며 체계적인 접근을 선호합니다.'
      ],
      en: [
        'Your face shows cool rationality and precise analytical ability. You excel at objective judgment based on data and facts.',
        'You have exceptional logical thinking and concentration. You have excellent ability to solve complex problems step by step.',
        'Your careful and cautious personality is evident in your face. You are skilled at minimizing errors and deriving accurate results.',
        'Your face reflects mathematical and scientific thinking. You have a talent for reading patterns and finding rules.',
        'Your face shows objective and fair judgment. You make decisions based on facts rather than emotions.',
        'You stand out with rapid learning ability and comprehension. You can quickly acquire and apply new knowledge.',
        'You have excellent strategic thinking and planning ability. You consider multiple possibilities and select the optimal solution.',
        'Your patient and persistent personality enables you to complete difficult tasks. You create perfect results through meticulousness.',
        'You have strong curiosity and investigative spirit. Your strong intellectual desire for the unknown makes you suitable for research.',
        'Your face values accuracy and reliability. You emphasize data and evidence and prefer systematic approaches.'
      ], 
      ja: [
        'あなたの顔は冷静な理性と精密な分析力を示しています。データと事実に基づいた客観的判断能力に優れています。',
        '論理的思考と集中力が優れた顔です。複雑な問題を段階的に解決する能力が卓越しています。',
        'きめ細かく慎重な性格が顔に現れています。ミスを減らし正確な結果を導き出すことに長けています。',
        '数学的で科学的な思考をする顔です。パターンを読みルールを見つける才能があります。',
        '客観的で公正な判断力を持った顔です。感情に左右されず事実に基づいて決定します。',
        '素早い学習能力と理解力が目立ちます。新しい知識を迅速に習得し適用できます。',
        '戦略的思考と計画立案能力が優れています。複数の可能性を考慮し最適な方策を選択します。',
        '忍耐力と粘り強さがあり困難な課題も最後までやり遂げる性格です。きめ細かさで完璧な結果を作ります。',
        '好奇心が強く探究心が強いです。未知の領域への知的欲求が強く研究に適しています。',
        '正確性と信頼性を重視する顔です。データと証拠を重視し体系的なアプローチを好みます。'
      ], 
      'zh-CN': [
        '你的面相展现了冷静的理性与精密的分析力。你在基于数据与事实的客观判断上表现出色。',
        '你拥有卓越的逻辑思维与专注力。你擅长逐步解决复杂问题。',
        '你细密而谨慎的个性在面相中显现。你擅长减少错误并得出准确结果。',
        '你的面相体现出数学与科学的思维方式。你具备解读规律与发现规则的天赋。',
        '你的面相展现出客观与公正的判断力。你基于事实而非情感做决策。',
        '你以快速学习能力与理解力见长。你能快速获取并应用新知识。',
        '你拥有出色的战略思维与规划能力。你会考虑多种可能并选择最优方案。',
        '你耐心的性格使你能够完成困难任务。你通过细致达成完美结果。',
        '你有强烈的好奇心与探究精神。你对未知领域的智力渴望使你很适合研究。',
        '你的面相重视准确性与可靠性。你强调数据与证据并偏好系统性方法。'
      ], 
      'zh-TW': [
        '你的面相展現了冷靜的理性與精密的分析力。你在基於數據與事實的客觀判斷上表現出色。',
        '你擁有卓越的邏輯思維與專注力。你擅長逐步解決複雜問題。',
        '你細密而謹慎的個性在面相中顯現。你擅長減少錯誤並得出準確結果。',
        '你的面相體現出數學與科學的思維方式。你具備解讀規律與發現規則的天賦。',
        '你的面相展現出客觀與公正的判斷力。你基於事實而非情感做決策。',
        '你以快速學習能力與理解力見長。你能快速獲取並應用新知識。',
        '你擁有出色的戰略思維與規劃能力。你會考慮多種可能並選擇最優方案。',
        '你耐心的性格使你能夠完成困難任務。你通過細緻達成完美結果。',
        '你有強烈的好奇心與探究精神。你對未知領域的智力渴望使你很適合研究。',
        '你的面相重視準確性與可靠性。你強調數據與證據並偏好系統性方法。'
      ], 
      vi: [
        'Khuôn mặt bạn thể hiện khả năng lý trí lạnh lùng và phân tích chính xác. Bạn giỏi phán đoán khách quan dựa trên dữ liệu và sự thật.',
        'Bạn có tư duy logic và khả năng tập trung xuất sắc. Bạn có khả năng tuyệt vời giải quyết các vấn đề phức tạp từng bước.',
        'Tính cách cẩn thận và thận trọng của bạn rõ ràng trên khuôn mặt. Bạn giỏi giảm thiểu sai sót và đưa ra kết quả chính xác.',
        'Khuôn mặt bạn phản ánh tư duy toán học và khoa học. Bạn có tài năng đọc mẫu và tìm quy tắc.',
        'Khuôn mặt bạn thể hiện phán đoán khách quan và công bằng. Bạn đưa ra quyết định dựa trên sự thật thay vì cảm xúc.',
        'Bạn nổi bật với khả năng học tập nhanh và hiểu biết. Bạn có thể nhanh chóng tiếp thu và áp dụng kiến thức mới.',
        'Bạn có tư duy chiến lược và khả năng lập kế hoạch xuất sắc. Bạn xem xét nhiều khả năng và chọn giải pháp tối ưu.',
        'Tính kiên nhẫn và bền bỉ của bạn cho phép bạn hoàn thành các nhiệm vụ khó khăn. Bạn tạo ra kết quả hoàn hảo thông qua sự tỉ mỉ.',
        'Bạn có sự tò mò mạnh mẽ và tinh thần điều tra. Khao khát trí tuệ mạnh mẽ về những điều chưa biết khiến bạn phù hợp với nghiên cứu.',
        'Khuôn mặt bạn coi trọng độ chính xác và độ tin cậy. Bạn nhấn mạnh dữ liệu và bằng chứng, ưu tiên các phương pháp tiếp cận có hệ thống.'
      ], 
      id: [
        'Wajah Anda menunjukkan rasionalitas yang dingin dan kemampuan analitis yang presisi. Anda unggul dalam penilaian objektif berdasarkan data dan fakta.',
        'Anda memiliki pemikiran logis dan konsentrasi yang luar biasa. Anda memiliki kemampuan luar biasa untuk menyelesaikan masalah kompleks langkah demi langkah.',
        'Kepribadian hati-hati dan waspada Anda terlihat jelas di wajah. Anda terampil meminimalkan kesalahan dan menghasilkan hasil yang akurat.',
        'Wajah Anda mencerminkan pemikiran matematis dan ilmiah. Anda memiliki bakat membaca pola dan menemukan aturan.',
        'Wajah Anda menunjukkan penilaian yang objektif dan adil. Anda membuat keputusan berdasarkan fakta daripada emosi.',
        'Anda menonjol dengan kemampuan belajar dan pemahaman yang cepat. Anda dapat dengan cepat memperoleh dan menerapkan pengetahuan baru.',
        'Anda memiliki pemikiran strategis dan kemampuan perencanaan yang luar biasa. Anda mempertimbangkan berbagai kemungkinan dan memilih solusi optimal.',
        'Kepribadian sabar dan gigih Anda memungkinkan Anda menyelesaikan tugas sulit. Anda menciptakan hasil sempurna melalui ketelitian.',
        'Anda memiliki rasa ingin tahu yang kuat dan semangat penyelidikan. Keinginan intelektual yang kuat untuk yang tidak diketahui membuat Anda cocok untuk penelitian.',
        'Wajah Anda menghargai akurasi dan keandalan. Anda menekankan data dan bukti serta lebih memilih pendekatan sistematis.'
      ]
    },
    emoji: '🔬',
    scoreRange: [70, 79],
    strengths: { 
      ko: ['논리력', '분석력', '집중력', '정확성', '객관성', '체계성', '학습능력', '인내심', '탐구정신', '전략적사고'], 
      en: ['Logic', 'Analysis', 'Focus', 'Accuracy', 'Objectivity', 'Systematic', 'Learning', 'Patience', 'Curiosity', 'Strategic'], 
      ja: ['論理力', '分析力', '集中力', '正確性', '客観性', '体系性', '学習能力', '忍耐力', '探求精神', '戦略的思考'], 
      'zh-CN': ['逻辑力', '分析力', '专注力', '准确性', '客观性', '系统性', '学习能力', '耐心', '探索精神', '战略思维'], 
      'zh-TW': ['邏輯力', '分析力', '專注力', '準確性', '客觀性', '系統性', '學習能力', '耐心', '探索精神', '戰略思維'], 
      vi: ['Logic', 'Phân tích', 'Tập trung', 'Chính xác', 'Khách quan', 'Hệ thống', 'Học tập', 'Kiên nhẫn', 'Tò mò', 'Chiến lược'], 
      id: ['Logika', 'Analisis', 'Fokus', 'Akurasi', 'Objektivitas', 'Sistematis', 'Belajar', 'Kesabaran', 'Rasa ingin tahu', 'Strategis'] 
    },
    recommendations: { 
      ko: ['데이터 분석가', '연구원', '과학자', '수학자', '변호사', '회계사', '컨설턴트', '프로그래머', '엔지니어', '전략기획자'], 
      en: ['Data Analyst', 'Researcher', 'Scientist', 'Mathematician', 'Lawyer', 'Accountant', 'Consultant', 'Programmer', 'Engineer', 'Strategy Planner'], 
      ja: ['データアナリスト', '研究者', '科学者', '数学者', '弁護士', '会計士', 'コンサルタント', 'プログラマー', 'エンジニア', '戦略企画者'], 
      'zh-CN': ['数据分析师', '研究员', '科学家', '数学家', '律师', '会计师', '顾问', '程序员', '工程师', '战略规划者'], 
      'zh-TW': ['數據分析師', '研究員', '科學家', '數學家', '律師', '會計師', '顧問', '程式設計師', '工程師', '戰略規劃者'], 
      vi: ['Nhà phân tích dữ liệu', 'Nhà nghiên cứu', 'Nhà khoa học', 'Nhà toán học', 'Luật sư', 'Kế toán', 'Cố vấn', 'Lập trình viên', 'Kỹ sư', 'Người lập kế hoạch chiến lược'], 
      id: ['Analis Data', 'Peneliti', 'Ilmuwan', 'Matematikawan', 'Pengacara', 'Akuntan', 'Konsultan', 'Programmer', 'Insinyur', 'Perencana Strategi'] 
    },
    personality: { 
      ko: [
        '논리적이고 분석적인 성격입니다. 감정보다는 이성으로 판단하는 경우가 많습니다.',
        '꼼꼼하고 정밀한 성향이 강합니다. 작은 세부사항도 놓치지 않고 챙기는 편입니다.',
        '호기심이 많고 배움을 좋아합니다. 새로운 지식을 습득하는 것을 즐깁니다.',
        '인내심이 강하고 끈기가 있습니다. 어려운 문제도 포기하지 않고 해결합니다.',
        '객관적이고 공정한 태도를 가지고 있습니다. 감정에 좌우되지 않습니다.',
        '체계적이고 조직적인 사고를 합니다. 일을 계획적으로 진행하는 것을 선호합니다.',
        '전략적이고 장기적인 관점을 가지고 있습니다. 한 걸음 앞을 내다보는 능력이 있습니다.',
        '명확하고 정확한 커뮤니케이션을 중시합니다. 애매한 표현보다는 확실한 말을 선호합니다.',
        '지적 탐구욕이 강합니다. 근본 원인을 찾아내는 것에 만족감을 느낍니다.',
        '신뢰할 수 있고 책임감이 강한 성격입니다. 남들에게 믿음을 주는 사람입니다.'
      ],
      en: [
        'You have a logical and analytical personality. You often judge with reason rather than emotion.',
        'You have strong tendency to be careful and precise. You don\'t miss small details.',
        'You have much curiosity and love learning. You enjoy acquiring new knowledge.',
        'You have strong patience and perseverance. You don\'t give up on difficult problems.',
        'You have an objective and fair attitude. You are not swayed by emotions.',
        'You think systematically and organized. You prefer to work methodically.',
        'You have a strategic and long-term perspective. You have the ability to look ahead.',
        'You value clear and accurate communication. You prefer certain words over ambiguous expressions.',
        'You have strong intellectual curiosity. You feel satisfaction in finding the root cause.',
        'You are trustworthy and have strong responsibility. You are someone who gives trust to others.'
      ], 
      ja: [
        '論理的で分析的な性格です。感情よりも理性で判断することが多いです。',
        'きめ細かく精密な傾向が強いです。小さな細部も見落とさずカバーするほうです。',
        '好奇心旺盛で学習が好きです。新しい知識を習得することを楽しみます。',
        '忍耐力が強く粘り強さがあります。難しい問題も諦めずに解決します。',
        '客観的で公正な態度を持っています。感情に左右されません。',
        '体系的で組織的な思考をします。計画的な作業進行を好みます。',
        '戦略的で長期的な視点を持っています。一歩先を見通す能力があります。',
        '明確で正確なコミュニケーションを重視します。曖昧な表現よりも確実な言葉を好みます。',
        '知的探求欲が強いです。根本原因を見つけることに満足感を感じます。',
        '信頼でき責任感が強い性格です。他人に信頼を与える人物です。'
      ], 
      'zh-CN': [
        '你拥有逻辑与分析个性。你更常以理性而非情感判断。',
        '你倾向细密与精准。你不会遗漏小细节。',
        '你好奇心强并热爱学习。你享受获取新知。',
        '你有强大的耐心与坚持力。你不会放弃困难问题。',
        '你采取客观与公正的态度。你不会被情绪左右。',
        '你以系统与组织化的方式思考。你偏好有条不紊地推进工作。',
        '你具备战略与长期视角。你有前瞻判断能力。',
        '你重视清晰与准确的沟通。你偏好确定性表述而非模糊表达。',
        '你有强烈的求知欲。你在发现根本原因时感到满足。',
        '你值得信赖且责任感强。你是能给人信任的人。'
      ], 
      'zh-TW': [
        '你擁有邏輯與分析個性。你更常以理性而非情感判斷。',
        '你傾向細密與精准。你不會遺漏小細節。',
        '你好奇心強並熱愛學習。你享受獲取新知。',
        '你有強大的耐心與堅持力。你不會放棄困難問題。',
        '你採取客觀與公正的態度。你不會被情緒左右。',
        '你以系統與組織化的方式思考。你偏好有條不紊地推進工作。',
        '你具備戰略與長期視角。你有前瞻判斷能力。',
        '你重視清晰與準確的溝通。你偏好確定性表述而非模糊表達。',
        '你有強烈的求知慾。你在發現根本原因時感到滿足。',
        '你值得信賴且責任感強。你是能給人信任的人。'
      ], 
      vi: [
        'Bạn có tính cách logic và phân tích. Bạn thường đánh giá bằng lý trí hơn là cảm xúc.',
        'Bạn có xu hướng cẩn thận và chính xác mạnh mẽ. Bạn không bỏ lỡ các chi tiết nhỏ.',
        'Bạn có nhiều tò mò và yêu thích học hỏi. Bạn thích tiếp thu kiến thức mới.',
        'Bạn có sự kiên nhẫn và kiên trì mạnh mẽ. Bạn không từ bỏ các vấn đề khó khăn.',
        'Bạn có thái độ khách quan và công bằng. Bạn không bị chi phối bởi cảm xúc.',
        'Bạn suy nghĩ có hệ thống và tổ chức. Bạn thích làm việc một cách có phương pháp.',
        'Bạn có góc nhìn chiến lược và dài hạn. Bạn có khả năng nhìn trước một bước.',
        'Bạn coi trọng giao tiếp rõ ràng và chính xác. Bạn thích từ ngữ chắc chắn hơn là biểu đạt mơ hồ.',
        'Bạn có sự tò mò trí tuệ mạnh mẽ. Bạn cảm thấy hài lòng khi tìm ra nguyên nhân gốc rễ.',
        'Bạn đáng tin cậy và có trách nhiệm mạnh mẽ. Bạn là người mang lại niềm tin cho người khác.'
      ], 
      id: [
        'Anda memiliki kepribadian logis dan analitis. Anda sering menilai dengan akal daripada emosi.',
        'Anda memiliki kecenderungan yang kuat untuk hati-hati dan tepat. Anda tidak melewatkan detail kecil.',
        'Anda memiliki banyak rasa ingin tahu dan suka belajar. Anda menikmati memperoleh pengetahuan baru.',
        'Anda memiliki kesabaran dan ketekunan yang kuat. Anda tidak menyerah pada masalah yang sulit.',
        'Anda memiliki sikap yang objektif dan adil. Anda tidak terpengaruh oleh emosi.',
        'Anda berpikir secara sistematis dan terorganisir. Anda lebih suka mengerjakan sesuatu dengan metodis.',
        'Anda memiliki perspektif strategis dan jangka panjang. Anda memiliki kemampuan untuk melihat ke depan.',
        'Anda menghargai komunikasi yang jelas dan akurat. Anda lebih suka kata-kata yang pasti daripada ekspresi yang ambigu.',
        'Anda memiliki rasa ingin tahu intelektual yang kuat. Anda merasa puas dalam menemukan akar penyebabnya.',
        'Anda dapat dipercaya dan memiliki tanggung jawab yang kuat. Anda adalah seseorang yang memberikan kepercayaan kepada orang lain.'
      ]
    },
    advice: { 
      ko: [
        '데이터 분석이나 연구 분야에서 전문성을 키우세요. 지속적인 학습이 필수입니다. 분석가로서 성공하려면 끊임없이 새로운 지식을 배우고 업데이트해야 합니다. 데이터 분석 도구와 연구 방법론을 계속 학습하고 실전에 적용하여 당신의 전문성을 더욱 발전시켜 나가야 합니다.',
        '논리적 사고력을 더욱 개발하세요. 다양한 문제를 해결하는 연습을 하세요. 논리적 사고는 분석가의 핵심 능력입니다. 다양한 문제들을 접하고 그것을 논리적으로 분석하고 해결하는 연습을 지속적으로 해야 합니다. 이러한 연습은 당신의 분석 능력을 더욱 향상시켜 줄 것입니다.',
        '전문 자격증을 취득하세요. 객관적인 평가를 받을 수 있는 공인 자격이 도움이 됩니다. 전문 자격증은 당신의 능력을 객관적으로 증명하는 수단입니다. 관련 분야의 자격증을 취득하면 전문성에 대한 신뢰를 얻을 수 있고, 더 나은 기회를 찾을 수 있습니다.',
        '네트워킹을 통해 전문가들과 교류하세요. 같은 분야의 사람들과의 소통이 중요합니다. 동료나 선배 전문가들과의 네트워킹은 새로운 지식과 기회를 가져다줍니다. 학회, 세미나, 온라인 커뮤니티 등에서 활동하며 전문가들과 교류하고 정보를 공유하는 것이 중요합니다.',
        '실무 경험을 쌓아보세요. 이론만으로는 부족하니 실제 업무 경험이 필요합니다. 이론적 지식은 중요하지만 실제 업무 경험이 더욱 중요합니다. 실제 프로젝트를 수행하며 문제를 해결하고 결과를 도출하는 경험을 쌓아야 당신의 전문성이 완성됩니다.',
        '글로벌 트렌드를 파악하세요. 국제적인 시각으로 업계를 관찰하세요. 업계의 글로벌 트렌드를 이해하고 국제적인 동향을 파악하는 것은 중요합니다. 해외 논문, 국제 학회, 글로벌 기업의 사례 등을 공부하며 국제적인 시각을 키워야 합니다.',
        '다양한 도구와 기술을 익히세요. 최신 기술에 대한 이해가 경쟁력입니다. 분석가로서 다양한 도구와 기술을 익혀야 합니다. 프로그래밍 언어, 데이터 분석 도구, 머신러닝 등 최신 기술을 학습하고 활용할 수 있는 능력이 경쟁력이 됩니다.',
        '논문이나 학술적 성과를 쌓으세요. 연구 능력을 인정받을 수 있습니다. 논문이나 학술 연구는 당신의 전문성을 증명하는 중요한 수단입니다. 지속적으로 연구를 수행하고 그 결과를 논문으로 발표하며 학술적 성과를 쌓아가야 합니다.',
        '멘토를 찾아 지도를 받으세요. 경험 많은 선배의 조언이 큰 도움이 됩니다. 경험 많은 선배나 멘토의 조언은 매우 소중합니다. 그들의 경험과 노하우를 배우고 자신의 업무에 적용하면 더 빠르게 성장할 수 있습니다.',
        '지속 가능한 전문성을 확보하세요. 평생 학습하는 자세가 필요합니다. 전문성은 한 번 쌓고 끝나는 것이 아닙니다. 기술과 지식은 계속 발전하므로 평생에 걸쳐 학습하는 자세가 필요합니다. 지속적인 학습을 통해 당신의 전문성을 유지하고 발전시켜 나가야 합니다.'
      ],
      en: [
        'Build expertise in data analysis or research fields. Continuous learning is essential. To succeed as an analyst, you must constantly learn and update new knowledge. You must continue to learn data analysis tools and research methodologies and apply them in practice to further develop your expertise.',
        'Develop your logical thinking skills further. Practice solving various problems. Logical thinking is a core ability for analysts. You must continuously practice encountering various problems and analyzing and solving them logically. Such practice will further improve your analytical abilities.',
        'Obtain professional certifications. Official certifications that provide objective evaluation are helpful. Professional certifications are a means to objectively prove your abilities. Obtaining certifications in related fields allows you to gain trust in your expertise and find better opportunities.',
        'Network with experts through networking. Communication with people in the same field is important. Networking with colleagues or senior experts brings new knowledge and opportunities. It is important to be active in conferences, seminars, online communities, etc., interact with experts, and share information.',
        'Build practical experience. Theory alone is insufficient; practical work experience is needed. Theoretical knowledge is important, but practical work experience is even more important. You must accumulate experience performing actual projects, solving problems, and deriving results to complete your expertise.',
        'Understand global trends. Observe the industry with an international perspective. Understanding industry trends and grasping international movements is important. You must develop an international perspective by studying overseas papers, international conferences, cases of global companies, etc.',
        'Learn various tools and technologies. Understanding the latest technologies is competitiveness. As an analyst, you must learn various tools and technologies. The ability to learn and utilize programming languages, data analysis tools, machine learning, etc., becomes your competitiveness.',
        'Build papers or academic achievements. Your research abilities can be recognized. Papers or academic research are important means to prove your expertise. You must continuously conduct research, publish results as papers, and accumulate academic achievements.',
        'Find a mentor and receive guidance. Advice from experienced seniors is very helpful. Advice from experienced seniors or mentors is very valuable. Learning their experiences and know-how and applying them to your work allows you to grow faster.',
        'Secure sustainable expertise. A lifelong learning attitude is needed. Expertise is not something you build once and finish. Technologies and knowledge continue to develop, so a lifelong learning attitude is needed. You must maintain and develop your expertise through continuous learning.'
      ], 
      ja: [
        'データ分析や研究分野で専門性を構築してください。継続的な学習が不可欠です。アナリストとして成功するには、常に新しい知識を学び、更新する必要があります。データ分析ツールと研究方法論を継続的に学習し、実践に適用して専門性をさらに発展させなければなりません。',
        '論理的思考能力をさらに開発してください。様々な問題を解決する練習をしてください。論理的思考はアナリストの核心能力です。様々な問題に遭遇し、それを論理的に分析して解決する練習を継続的に行う必要があります。このような練習は分析能力をさらに向上させます。',
        '専門資格を取得してください。客観的な評価を受けることができる公認資格が役立ちます。専門資格はあなたの能力を客観的に証明する手段です。関連分野の資格を取得すると、専門性に対する信頼を得ることができ、より良い機会を見つけることができます。',
        'ネットワーキングを通じて専門家と交流してください。同じ分野の人々とのコミュニケーションが重要です。同僚や先輩専門家とのネットワーキングは新しい知識と機会をもたらします。学会、セミナー、オンラインコミュニティなどで活動し、専門家と交流し、情報を共有することが重要です。',
        '実務経験を積んでください。理論だけでは不十分なので、実際の業務経験が必要です。理論的知識は重要ですが、実際の業務経験がさらに重要です。実際のプロジェクトを遂行し、問題を解決し、結果を導出する経験を積まなければ、専門性が完成しません。',
        'グローバルトレンドを把握してください。国際的な視点で業界を観察してください。業界のグローバルトレンドを理解し、国際的な動向を把握することは重要です。海外論文、国際学会、グローバル企業の事例などを勉強しながら国際的な視点を育てる必要があります。',
        '様々なツールと技術を習得してください。最新技術への理解が競争力です。アナリストとして様々なツールと技術を習得する必要があります。プログラミング言語、データ分析ツール、機械学習などの最新技術を学習し、活用できる能力が競争力になります。',
        '論文や学術的成果を積んでください。研究能力が認められます。論文や学術研究はあなたの専門性を証明する重要な手段です。継続的に研究を実施し、その結果を論文として発表しながら学術的成果を積み上げる必要があります。',
        'メンターを見つけて指導を受けてください。経験豊富な先輩のアドバイスが非常に役立ちます。経験豊富な先輩やメンターのアドバイスは非常に貴重です。彼らの経験とノウハウを学び、自分の業務に適用すると、より早く成長できます。',
        '持続可能な専門性を確保してください。生涯学習する姿勢が必要です。専門性は一度築いて終わるものではありません。技術と知識は継続的に発展するため、生涯にわたって学習する姿勢が必要です。継続的な学習を通じて専門性を維持し、発展させていかなければなりません。'
      ], 
      'zh-CN': [
        '在数据分析或研究领域建立专业性。持续学习至关重要。作为分析师要成功，你必须不断学习和更新新知识。你必须持续学习数据分析工具和研究方法论，并在实践中应用以进一步发展你的专业性。',
        '进一步发展你的逻辑思维能力。练习解决各种问题。逻辑思维是分析师的核心能力。你必须持续练习接触各种问题并逻辑地分析和解决它们。这样的练习将进一步改善你的分析能力。',
        '获得专业认证。能提供客观评估的官方认证很有帮助。专业认证是客观证明你能力的手段。获得相关领域的认证能使你获得对你专业性的信任并找到更好的机会。',
        '通过网络与专家交流。与同一领域的人沟通很重要。与同事或资深专家建立网络会带来新知识和机会。在会议、研讨会、在线社区等中活跃，与专家互动并分享信息很重要。',
        '积累实践经验。仅理论是不够的；需要实际工作经验。理论知识很重要，但实际工作经验更重要。你必须积累执行实际项目、解决问题和得出结果的经验来完成你的专业性。',
        '了解全球趋势。以国际化视角观察行业。理解行业趋势并掌握国际动态很重要。你必须通过学习海外论文、国际会议、全球企业案例等来培养国际视角。',
        '学习各种工具和技术。对最新技术的理解是竞争力。作为分析师，你必须学习各种工具和技术。学习和利用编程语言、数据分析工具、机器学习等最新技术的能力成为你的竞争力。',
        '积累论文或学术成就。你的研究能力可以得到认可。论文或学术研究是证明你专业性的重要手段。你必须持续进行研究，将结果作为论文发表，并积累学术成就。',
        '找导师并获得指导。经验丰富的资深人士的建议非常有帮助。来自经验丰富的资深人士或导师的建议非常宝贵。学习他们的经验和诀窍并将其应用于你的工作可以让你成长更快。',
        '确保可持续的专业性。需要终身学习的态度。专业性不是一旦建立就结束的事情。技术和知识持续发展，因此需要终身学习的态度。你必须通过持续学习来保持和发展你的专业性。'
      ], 
      'zh-TW': [
        '在數據分析或研究領域建立專業性。持續學習至關重要。作為分析師要成功，你必須不斷學習和更新新知識。你必須持續學習數據分析工具和研究方法論，並在實踐中應用以進一步發展你的專業性。',
        '進一步發展你的邏輯思維能力。練習解決各種問題。邏輯思維是分析師的核心能力。你必須持續練習接觸各種問題並邏輯地分析和解決它們。這樣的練習將進一步改善你的分析能力。',
        '獲得專業認證。能提供客觀評估的官方認證很有幫助。專業認證是客觀證明你能力的手段。獲得相關領域的認證能使你獲得對你專業性的信任並找到更好的機會。',
        '通過網絡與專家交流。與同一領域的人溝通很重要。與同事或資深專家建立網絡會帶來新知識和機會。在會議、研討會、線上社群等中活躍，與專家互動並分享資訊很重要。',
        '積累實踐經驗。僅理論是不夠的；需要實際工作經驗。理論知識很重要，但實際工作經驗更重要。你必須積累執行實際專案、解決問題和得出結果的經驗來完成你的專業性。',
        '了解全球趨勢。以國際化視角觀察行業。理解行業趨勢並掌握國際動態很重要。你必須通過學習海外論文、國際會議、全球企業案例等來培養國際視角。',
        '學習各種工具和技術。對最新技術的理解是競爭力。作為分析師，你必須學習各種工具和技術。學習和利用程式語言、數據分析工具、機器學習等最新技術的能力成為你的競爭力。',
        '積累論文或學術成就。你的研究能力可以得到認可。論文或學術研究是證明你專業性的重要手段。你必須持續進行研究，將結果作為論文發表，並積累學術成就。',
        '找導師並獲得指導。經驗豐富的資深人士的建議非常有幫助。來自經驗豐富的資深人士或導師的建議非常寶貴。學習他們的經驗和訣竅並將其應用於你的工作可以讓你成長更快。',
        '確保可持續的專業性。需要終身學習的態度。專業性不是一旦建立就結束的事情。技術和知識持續發展，因此需要終身學習的態度。你必須通過持續學習來保持和發展你的專業性。'
      ], 
      vi: [
        'Xây dựng chuyên môn trong các lĩnh vực phân tích dữ liệu hoặc nghiên cứu. Học tập liên tục là điều cần thiết. Để thành công như một nhà phân tích, bạn phải liên tục học hỏi và cập nhật kiến thức mới. Bạn phải tiếp tục học các công cụ phân tích dữ liệu và phương pháp nghiên cứu và áp dụng chúng trong thực tế để phát triển hơn nữa chuyên môn của bạn.',
        'Phát triển kỹ năng tư duy logic của bạn hơn nữa. Thực hành giải quyết các vấn đề khác nhau. Tư duy logic là một khả năng cốt lõi cho các nhà phân tích. Bạn phải liên tục thực hành gặp phải các vấn đề khác nhau và phân tích và giải quyết chúng một cách logic. Việc thực hành như vậy sẽ cải thiện hơn nữa khả năng phân tích của bạn.',
        'Có được chứng chỉ chuyên nghiệp. Các chứng chỉ chính thức cung cấp đánh giá khách quan là hữu ích. Chứng chỉ chuyên nghiệp là phương tiện để chứng minh khách quan khả năng của bạn. Có được chứng chỉ trong các lĩnh vực liên quan cho phép bạn có được sự tin cậy về chuyên môn và tìm thấy cơ hội tốt hơn.',
        'Mạng lưới với các chuyên gia thông qua mạng. Giao tiếp với những người trong cùng lĩnh vực là quan trọng. Mạng lưới với đồng nghiệp hoặc chuyên gia cấp cao mang lại kiến thức và cơ hội mới. Điều quan trọng là phải hoạt động trong các hội nghị, hội thảo, cộng đồng trực tuyến, v.v., tương tác với các chuyên gia và chia sẻ thông tin.',
        'Xây dựng kinh nghiệm thực tế. Chỉ lý thuyết không đủ; kinh nghiệm làm việc thực tế là cần thiết. Kiến thức lý thuyết quan trọng, nhưng kinh nghiệm làm việc thực tế còn quan trọng hơn. Bạn phải tích lũy kinh nghiệm thực hiện các dự án thực tế, giải quyết vấn đề và rút ra kết quả để hoàn thiện chuyên môn của mình.',
        'Hiểu các xu hướng toàn cầu. Quan sát ngành công nghiệp với góc nhìn quốc tế. Hiểu các xu hướng ngành và nắm bắt các chuyển động quốc tế là quan trọng. Bạn phải phát triển góc nhìn quốc tế bằng cách nghiên cứu các bài viết nước ngoài, hội nghị quốc tế, trường hợp của các công ty toàn cầu, v.v.',
        'Học các công cụ và công nghệ khác nhau. Hiểu các công nghệ mới nhất là tính cạnh tranh. Là một nhà phân tích, bạn phải học các công cụ và công nghệ khác nhau. Khả năng học và sử dụng ngôn ngữ lập trình, công cụ phân tích dữ liệu, máy học, v.v., trở thành tính cạnh tranh của bạn.',
        'Xây dựng các bài viết hoặc thành tích học thuật. Khả năng nghiên cứu của bạn có thể được công nhận. Các bài viết hoặc nghiên cứu học thuật là phương tiện quan trọng để chứng minh chuyên môn của bạn. Bạn phải liên tục tiến hành nghiên cứu, công bố kết quả như các bài viết và tích lũy thành tích học thuật.',
        'Tìm một người cố vấn và nhận hướng dẫn. Lời khuyên từ các đồng nghiệp cấp cao giàu kinh nghiệm rất hữu ích. Lời khuyên từ các đồng nghiệp cấp cao hoặc người cố vấn giàu kinh nghiệm rất quý giá. Học hỏi kinh nghiệm và bí quyết của họ và áp dụng chúng vào công việc của bạn cho phép bạn phát triển nhanh hơn.',
        'Đảm bảo chuyên môn bền vững. Thái độ học tập suốt đời là cần thiết. Chuyên môn không phải là thứ bạn xây dựng một lần và kết thúc. Công nghệ và kiến thức tiếp tục phát triển, vì vậy thái độ học tập suốt đời là cần thiết. Bạn phải duy trì và phát triển chuyên môn của mình thông qua học tập liên tục.'
      ], 
      id: [
        'Bangun keahlian dalam bidang analisis data atau penelitian. Pembelajaran berkelanjutan adalah penting. Untuk berhasil sebagai analis, Anda harus terus belajar dan memperbarui pengetahuan baru. Anda harus terus mempelajari alat analisis data dan metodologi penelitian dan menerapkannya dalam praktik untuk lebih mengembangkan keahlian Anda.',
        'Kembangkan keterampilan berpikir logis Anda lebih lanjut. Latih menyelesaikan berbagai masalah. Berpikir logis adalah kemampuan inti untuk analis. Anda harus terus berlatih menghadapi berbagai masalah dan menganalisis serta menyelesaikannya secara logis. Latihan seperti ini akan lebih meningkatkan kemampuan analitis Anda.',
        'Dapatkan sertifikasi profesional. Sertifikasi resmi yang memberikan evaluasi objektif sangat membantu. Sertifikasi profesional adalah sarana untuk membuktikan kemampuan Anda secara objektif. Memperoleh sertifikasi di bidang terkait memungkinkan Anda mendapatkan kepercayaan pada keahlian dan menemukan peluang yang lebih baik.',
        'Jalin jaringan dengan para ahli melalui jaringan. Komunikasi dengan orang-orang di bidang yang sama adalah penting. Jaringan dengan kolega atau ahli senior membawa pengetahuan dan peluang baru. Penting untuk aktif dalam konferensi, seminar, komunitas online, dll., berinteraksi dengan para ahli, dan berbagi informasi.',
        'Bangun pengalaman praktis. Hanya teori tidak cukup; pengalaman kerja praktis diperlukan. Pengetahuan teoretis penting, tetapi pengalaman kerja praktis bahkan lebih penting. Anda harus mengumpulkan pengalaman melakukan proyek aktual, menyelesaikan masalah, dan memperoleh hasil untuk menyelesaikan keahlian Anda.',
        'Pahami tren global. Amati industri dengan perspektif internasional. Memahami tren industri dan memahami pergerakan internasional adalah penting. Anda harus mengembangkan perspektif internasional dengan mempelajari makalah luar negeri, konferensi internasional, kasus perusahaan global, dll.',
        'Pelajari berbagai alat dan teknologi. Memahami teknologi terbaru adalah daya saing. Sebagai analis, Anda harus mempelajari berbagai alat dan teknologi. Kemampuan untuk mempelajari dan memanfaatkan bahasa pemrograman, alat analisis data, pembelajaran mesin, dll., menjadi daya saing Anda.',
        'Bangun makalah atau prestasi akademik. Kemampuan penelitian Anda dapat diakui. Makalah atau penelitian akademik adalah sarana penting untuk membuktikan keahlian Anda. Anda harus secara terus-menerus melakukan penelitian, mempublikasikan hasil sebagai makalah, dan mengumpulkan prestasi akademik.',
        'Temukan seorang mentor dan terima bimbingan. Nasihat dari senior berpengalaman sangat membantu. Nasihat dari senior atau mentor berpengalaman sangat berharga. Belajar dari pengalaman dan keahlian mereka dan menerapkannya pada pekerjaan Anda memungkinkan Anda tumbuh lebih cepat.',
        'Amankan keahlian berkelanjutan. Sikap pembelajaran seumur hidup diperlukan. Keahlian bukanlah sesuatu yang Anda bangun sekali dan selesai. Teknologi dan pengetahuan terus berkembang, sehingga sikap pembelajaran seumur hidup diperlukan. Anda harus mempertahankan dan mengembangkan keahlian Anda melalui pembelajaran berkelanjutan.'
      ] 
    },
    fortune: {
      success: { 
        ko: [
          '전문 분야에서 뛰어난 성과를 낼 가능성이 높습니다. 분석 능력으로 차별화할 수 있습니다. 당신의 냉철한 이성과 체계적인 사고 방식은 복잡한 문제를 정확하게 해결할 수 있게 해주며, 이러한 능력은 업계에서 매우 높이 평가됩니다. 많은 사람들이 우연과 직감에 의존할 때 당신은 데이터와 사실에 기반한 정확한 판단으로 차별화를 이룰 수 있습니다.',
          '신뢰받는 전문가가 될 수 있습니다. 정확성과 신뢰성으로 인정받을 수 있습니다. 당신의 철저하고 꼼꼼한 태도는 사람들에게 신뢰를 주며, 중요한 의사결정이 필요할 때마다 당신의 의견을 구하게 됩니다. 시간이 지날수록 당신의 전문성이 쌓여가며 업계에서 권위 있는 전문가가 됩니다.',
          '논문이나 연구로 학계에 기여할 수 있습니다. 연구 성과로 명성을 얻을 수 있습니다. 당신의 탐구 정신과 분석 능력은 학술 연구에 매우 적합하며, 논문으로 학계에 기여하고 인정받을 수 있습니다. 이러한 성과는 당신의 명성을 높이고 더 많은 기회를 가져다 줄 것입니다.',
          '고소득 전문직에 성공할 가능성이 높습니다. 전문성으로 경제적 성공을 이룰 수 있습니다. 당신의 전문성과 정확성은 시장에서 높은 가치를 가지며, 이러한 능력은 높은 급여와 안정적인 경력을 보장해줍니다. 전문가로서의 경력을 쌓아가면서 경제적 성공도 함께 이루어낼 수 있습니다.',
          '복잡한 문제를 해결하는 데 탁월한 능력을 발휘할 수 있습니다. 분석력으로 승부할 수 있습니다. 다른 사람들이 어려워하는 복잡한 문제들을 당신은 단계적으로 분석하고 해결할 수 있습니다. 이러한 능력은 문제 해결 전문가로서 당신의 위치를 만들어주며, 많은 사람들이 당신에게 도움을 청하게 됩니다.',
          '데이터 기반 의사결정에서 선도적인 역할을 할 수 있습니다. 정량적 분석으로 신뢰를 얻을 수 있습니다. 당신의 객관적이고 체계적인 접근 방식은 의사결정자들에게 매우 중요한 정보를 제공하며, 이를 통해 조직이나 프로젝트의 성공 가능성을 크게 높일 수 있습니다.',
          '혁신적인 문제 해결 방법을 개발할 수 있습니다. 창의적 분석으로 새로운 접근을 시도할 수 있습니다. 당신은 기존의 틀에 갇히지 않고 새로운 관점에서 문제를 바라보며, 혁신적인 해결책을 찾아낼 수 있는 능력이 있습니다.',
          '글로벌 수준의 전문가로 성장할 수 있습니다. 국제적 기회를 활용할 수 있습니다. 당신의 전문성과 분석 능력은 국제적인 시장에서도 인정받을 수 있으며, 해외 프로젝트나 국제 협력에 참여하여 더 넓은 영역에서 활동할 수 있습니다.',
          '교육과 지식 전수 분야에서 탁월한 능력을 발휘할 수 있습니다. 복잡한 개념을 쉽게 설명할 수 있습니다. 당신의 체계적인 사고와 명확한 전달 능력은 교육자나 트레이너로서 매우 효과적이며, 많은 사람들에게 유용한 지식을 전달할 수 있습니다.',
          '장기적인 경력 발전에서 지속적인 성장을 이룰 수 있습니다. 전문성이 계속 쌓여갑니다. 당신의 끊임없는 학습 의지와 분석 능력은 시간이 지날수록 더욱 발전하며, 평생에 걸쳐 전문가로서 성장하고 발전할 수 있는 기반이 됩니다.'
        ],
        en: [
          'You have a high possibility of achieving outstanding results in professional fields. You can differentiate yourself with analytical abilities. Your cool rationality and systematic thinking enable you to accurately solve complex problems, and these abilities are highly valued in the industry. While many rely on chance and intuition, you can achieve differentiation through accurate judgments based on data and facts.',
          'You can become a trusted expert. You can gain recognition through accuracy and reliability. Your thorough and meticulous attitude builds trust in people, and they seek your opinions when important decisions need to be made. As time passes, your expertise accumulates, and you become an authoritative expert in the industry.',
          'You can contribute to academia through papers or research. You can gain fame through research achievements. Your spirit of inquiry and analytical abilities are highly suitable for academic research, and you can contribute to academia and gain recognition through papers. These achievements will enhance your reputation and bring more opportunities.',
          'You have a high possibility of succeeding in high-income professional jobs. You can achieve economic success through expertise. Your expertise and accuracy have high value in the market, and these abilities guarantee high salaries and stable careers. As you build a career as an expert, you can also achieve economic success.',
          'You can demonstrate excellent abilities in solving complex problems. You can compete with analytical skills. You can systematically analyze and solve complex problems that others find difficult. This ability establishes your position as a problem-solving expert, and many people will seek your help.',
          'You can play a leading role in data-based decision making. You can gain trust through quantitative analysis. Your objective and systematic approach provides crucial information to decision makers, significantly increasing the success potential of organizations or projects through this.',
          'You can develop innovative problem-solving methods. You can attempt new approaches through creative analysis. You have the ability to look at problems from new perspectives without being confined to existing frameworks, and to find innovative solutions.',
          'You can grow into a global-level expert. You can utilize international opportunities. Your expertise and analytical abilities can be recognized even in international markets, and you can participate in overseas projects or international cooperation to be active in broader areas.',
          'You can demonstrate excellent abilities in education and knowledge transfer. You can easily explain complex concepts. Your systematic thinking and clear communication skills are highly effective as an educator or trainer, and you can transfer useful knowledge to many people.',
          'You can achieve continuous growth in long-term career development. Expertise continues to accumulate. Your continuous learning will and analytical abilities develop even more over time, forming a foundation for lifelong growth and development as an expert.'
        ], 
        ja: [
          '専門分野で優れた成果を上げる可能性が高いです。分析力で差別化することができます。あなたの冷徹な理性と体系的な思考方式は複雑な問題を正確に解決することができ、これらの能力は業界で非常に高く評価されます。多くの人々が偶然と直感に依存する時、あなたはデータと事実に基づいた正確な判断で差別化を達成できます。',
          '信頼される専門家になることができます。正確性と信頼性で認証を受けることができます。あなたの徹底的で慎重な態度は人々に信頼を与え、重要な意思決定が必要な時はいつでもあなたの意見を求めます。時間が経つにつれてあなたの専門性が蓄積され、業界で権威ある専門家となります。',
          '論文や研究で学界に貢献することができます。研究成果で名声を得ることができます。あなたの探求精神と分析能力は学術研究に非常に適しており、論文で学界に貢献し認証を受けることができます。これらの成果はあなたの名声を高め、より多くの機会をもたらします。',
          '高所得専門職で成功する可能性が高いです。専門性で経済的成功を達成することができます。あなたの専門性と正確性は市場で高い価値を持ち、これらの能力は高い給与と安定したキャリアを保証します。専門家としてのキャリアを築きながら経済的成功も一緒に達成できます。',
          '複雑な問題を解決する際に卓越した能力を発揮することができます。分析力で勝負することができます。他の人々が困難に感じる複雑な問題をあなたは段階的に分析し解決することができます。この能力は問題解決専門家としてあなたの位置を作り出し、多くの人々があなたに助けを求めるようになります。',
          'データベースの意思決定で先導的な役割をすることができます。定量分析で信頼を得ることができます。あなたの客観的で体系的なアプローチは意思決定者に非常に重要な情報を提供し、これを通じて組織やプロジェクトの成功可能性を大きく高めることができます。',
          '革新的な問題解決方法を開発することができます。創造的分析で新しいアプローチを試すことができます。あなたは既存の枠に閉じ込められずに新しい観点から問題を見つめ、革新的な解決策を見つける能力があります。',
          'グローバルレベルの専門家に成長することができます。国際的機会を活用することができます。あなたの専門性と分析能力は国際市場でも認証を受けることができ、海外プロジェクトや国際協力に参加してより広い領域で活動できます。',
          '教育と知識伝授分野で卓越した能力を発揮することができます。複雑な概念を簡単に説明することができます。あなたの体系的な思考と明確な伝達能力は教育者やトレーナーとして非常に効果的であり、多くの人々に有用な知識を伝えることができます。',
          '長期的なキャリア発展で持続的な成長を達成することができます。専門性が継続的に蓄積されます。あなたの絶え間ない学習意志と分析能力は時間が経つにつれてさらに発展し、一生にわたって専門家として成長し発展できる基盤となります。'
        ], 
        'zh-CN': [
          '你在专业领域取得出色成果的可能性很高。你可以用分析能力实现差异化。你的冷静理性和系统性思维方式能够准确解决复杂问题，这些能力在业内备受推崇。当许多人依赖偶然和直觉时，你能通过基于数据和事实的准确判断实现差异化。',
          '你可以成为值得信赖的专家。你可以通过准确性和可靠性获得认可。你的严谨细致态度会给人信任感，每当需要做出重要决策时人们都会寻求你的意见。随着时间推移，你的专业性会不断积累，成为行业权威专家。',
          '你可以通过论文或研究为学术界做出贡献。你可以通过研究成果获得声望。你的探索精神和分析能力非常适合学术研究，你可以通过论文为学术界做出贡献并获得认可。这些成就将提升你的声誉并带来更多机会。',
          '你在高收入专业职业上取得成功的可能性很高。你可以通过专业性实现经济成功。你的专业性和准确性在市场上具有很高价值，这些能力保证高薪和稳定的职业。在建立作为专家的职业的同时，你也可以实现经济成功。',
          '你能在处理复杂问题时展现出卓越能力。你可以用分析力胜出。你可以系统地分析和解决他人觉得困难的复杂问题。这种能力确立了作为问题解决专家的地位，许多人会寻求你的帮助。',
          '你可以在数据决策中发挥主导作用。你可以通过定量分析获得信任。你的客观系统性方法为决策者提供关键信息，从而大幅提高组织或项目的成功可能性。',
          '你可以开发创新的问题解决方法。你可以通过创造性分析尝试新方法。你有能力不被现有框架束缚，从新角度审视问题，找到创新解决方案。',
          '你可以成长为全球级专家。你可以利用国际机会。你的专业性和分析能力可以在国际市场得到认可，你可以参与海外项目或国际合作，在更广泛的领域活动。',
          '你可以在教育和知识传授领域展现卓越能力。你可以轻松解释复杂概念。你的系统性思维和清晰表达能力作为教育者或培训师非常有效，可以向许多人传递有用知识。',
          '你可以在长期职业发展中实现持续增长。专业性会不断积累。你的持续学习意愿和分析能力会随时间进一步发展，为终生作为专家成长发展奠定基础。'
        ], 
        'zh-TW': [
          '你在專業領域取得出色成果的可能性很高。你可以用分析能力實現差異化。你的冷靜理性和系統性思維方式能夠準確解決複雜問題，這些能力在業內備受推崇。當許多人依賴偶然和直覺時，你能通過基於數據和事實的準確判斷實現差異化。',
          '你可以成為值得信賴的專家。你可以通過準確性和可靠性獲得認可。你的嚴謹細緻態度會給人信任感，每當需要做出重要決策時人們都會尋求你的意見。隨著時間推移，你的專業性會不斷積累，成為行業權威專家。',
          '你可以通過論文或研究為學術界做出貢獻。你可以通過研究成果獲得聲望。你的探索精神和分析能力非常適合學術研究，你可以通過論文為學術界做出貢獻並獲得認可。這些成就將提升你的聲譽並帶來更多機會。',
          '你在高收入專業職業上取得成功的可能性很高。你可以通過專業性實現經濟成功。你的專業性和準確性在市場上具有很高價值，這些能力保證高薪和穩定的職業。在建立作為專家的職業的同時，你也可以實現經濟成功。',
          '你能在處理複雜問題時展現出卓越能力。你可以用分析力勝出。你可以系統地分析和解決他人覺得困難的複雜問題。這種能力確立了作為問題解決專家的地位，許多人會尋求你的幫助。',
          '你可以在數據決策中發揮主導作用。你可以通過定量分析獲得信任。你的客觀系統性方法為決策者提供關鍵資訊，從而大幅提高組織或專案的成功可能性。',
          '你可以開發創新的問題解決方法。你可以通過創造性分析嘗試新方法。你有能力不被現有框架束縛，從新角度審視問題，找到創新解決方案。',
          '你可以成長為全球級專家。你可以利用國際機會。你的專業性和分析能力可以在國際市場得到認可，你可以參與海外專案或國際合作，在更廣泛的領域活動。',
          '你可以在教育和知識傳授領域展現卓越能力。你可以輕鬆解釋複雜概念。你的系統性思維和清晰表達能力作為教育者或培訓師非常有效，可以向許多人傳遞有用知識。',
          '你可以在長期職業發展中實現持續增長。專業性會不斷積累。你的持續學習意願和分析能力會隨時間進一步發展，為終生作為專家成長發展奠定基礎。'
        ], 
        vi: [
          'Bạn có khả năng cao đạt được kết quả xuất sắc trong các lĩnh vực chuyên môn. Bạn có thể phân biệt hóa bản thân với khả năng phân tích. Sự lý trí lạnh lùng và tư duy có hệ thống của bạn cho phép bạn giải quyết chính xác các vấn đề phức tạp, và những khả năng này được đánh giá cao trong ngành. Trong khi nhiều người dựa vào may mắn và trực giác, bạn có thể đạt được sự phân biệt hóa thông qua các phán đoán chính xác dựa trên dữ liệu và thực tế.',
          'Bạn có thể trở thành một chuyên gia đáng tin cậy. Bạn có thể được công nhận thông qua sự chính xác và độ tin cậy. Thái độ thận trọng và cẩn thận của bạn xây dựng niềm tin ở mọi người, và họ tìm kiếm ý kiến của bạn khi cần đưa ra các quyết định quan trọng. Theo thời gian, chuyên môn của bạn tích lũy, và bạn trở thành một chuyên gia có thẩm quyền trong ngành.',
          'Bạn có thể đóng góp cho học viện thông qua các bài báo hoặc nghiên cứu. Bạn có thể có được danh tiếng thông qua thành tích nghiên cứu. Tinh thần tìm hiểu và khả năng phân tích của bạn rất phù hợp với nghiên cứu học thuật, và bạn có thể đóng góp cho học viện và được công nhận thông qua các bài báo. Những thành tựu này sẽ nâng cao danh tiếng của bạn và mang lại nhiều cơ hội hơn.',
          'Bạn có khả năng cao thành công trong các công việc chuyên môn có thu nhập cao. Bạn có thể đạt được thành công kinh tế thông qua chuyên môn. Chuyên môn và độ chính xác của bạn có giá trị cao trong thị trường, và những khả năng này đảm bảo mức lương cao và sự nghiệp ổn định. Khi bạn xây dựng sự nghiệp như một chuyên gia, bạn cũng có thể đạt được thành công kinh tế.',
          'Bạn có thể thể hiện khả năng xuất sắc trong việc giải quyết các vấn đề phức tạp. Bạn có thể cạnh tranh với kỹ năng phân tích. Bạn có thể phân tích và giải quyết một cách có hệ thống các vấn đề phức tạp mà người khác gặp khó khăn. Khả năng này thiết lập vị trí của bạn như một chuyên gia giải quyết vấn đề, và nhiều người sẽ tìm kiếm sự giúp đỡ của bạn.',
          'Bạn có thể đóng vai trò dẫn đầu trong việc ra quyết định dựa trên dữ liệu. Bạn có thể có được niềm tin thông qua phân tích định lượng. Phương pháp tiếp cận khách quan và có hệ thống của bạn cung cấp thông tin quan trọng cho những người ra quyết định, tăng đáng kể tiềm năng thành công của tổ chức hoặc dự án thông qua điều này.',
          'Bạn có thể phát triển các phương pháp giải quyết vấn đề sáng tạo. Bạn có thể thử các cách tiếp cận mới thông qua phân tích sáng tạo. Bạn có khả năng nhìn các vấn đề từ những góc độ mới mà không bị ràng buộc bởi các khuôn khổ hiện có, và tìm ra các giải pháp sáng tạo.',
          'Bạn có thể phát triển thành một chuyên gia cấp độ toàn cầu. Bạn có thể tận dụng các cơ hội quốc tế. Chuyên môn và khả năng phân tích của bạn có thể được công nhận ngay cả trong thị trường quốc tế, và bạn có thể tham gia vào các dự án ở nước ngoài hoặc hợp tác quốc tế để hoạt động ở các lĩnh vực rộng hơn.',
          'Bạn có thể thể hiện khả năng xuất sắc trong giáo dục và truyền đạt kiến thức. Bạn có thể dễ dàng giải thích các khái niệm phức tạp. Tư duy có hệ thống và kỹ năng giao tiếp rõ ràng của bạn rất hiệu quả như một nhà giáo dục hoặc huấn luyện viên, và bạn có thể truyền đạt kiến thức hữu ích cho nhiều người.',
          'Bạn có thể đạt được sự phát triển liên tục trong sự phát triển nghề nghiệp dài hạn. Chuyên môn tiếp tục tích lũy. Ý chí học tập liên tục và khả năng phân tích của bạn phát triển hơn nữa theo thời gian, tạo nền tảng cho sự phát triển và tăng trưởng suốt đời như một chuyên gia.'
        ], 
        id: [
          'Anda memiliki kemungkinan tinggi mencapai hasil yang luar biasa di bidang profesional. Anda dapat membedakan diri dengan kemampuan analitis. Rasionalitas dingin dan pemikiran sistematis Anda memungkinkan Anda untuk secara akurat memecahkan masalah kompleks, dan kemampuan ini sangat dihargai di industri. Sementara banyak bergantung pada peluang dan intuisi, Anda dapat mencapai diferensiasi melalui penilaian akurat berdasarkan data dan fakta.',
          'Anda dapat menjadi ahli tepercaya. Anda dapat memperoleh pengakuan melalui akurasi dan keandalan. Sikap menyeluruh dan teliti Anda membangun kepercayaan pada orang, dan mereka mencari pendapat Anda ketika keputusan penting perlu dibuat. Seiring berjalannya waktu, keahlian Anda terakumulasi, dan Anda menjadi ahli yang berwenang di industri.',
          'Anda dapat berkontribusi pada akademi melalui makalah atau penelitian. Anda dapat memperoleh ketenaran melalui pencapaian penelitian. Semangat penyelidikan dan kemampuan analitis Anda sangat cocok untuk penelitian akademis, dan Anda dapat berkontribusi pada akademi dan memperoleh pengakuan melalui makalah. Pencapaian ini akan meningkatkan reputasi Anda dan membawa lebih banyak peluang.',
          'Anda memiliki kemungkinan tinggi sukses dalam pekerjaan profesional berpenghasilan tinggi. Anda dapat mencapai kesuksesan ekonomi melalui keahlian. Keahlian dan akurasi Anda memiliki nilai tinggi di pasar, dan kemampuan ini menjamin gaji tinggi dan karir yang stabil. Saat Anda membangun karir sebagai ahli, Anda juga dapat mencapai kesuksesan ekonomi.',
          'Anda dapat menunjukkan kemampuan luar biasa dalam memecahkan masalah kompleks. Anda dapat bersaing dengan keterampilan analitis. Anda dapat secara sistematis menganalisis dan memecahkan masalah kompleks yang ditemukan orang lain sulit. Kemampuan ini menetapkan posisi Anda sebagai ahli pemecahan masalah, dan banyak orang akan mencari bantuan Anda.',
          'Anda dapat memainkan peran terdepan dalam pengambilan keputusan berbasis data. Anda dapat memperoleh kepercayaan melalui analisis kuantitatif. Pendekatan objektif dan sistematis Anda menyediakan informasi penting bagi pembuat keputusan, secara signifikan meningkatkan potensi kesuksesan organisasi atau proyek melalui ini.',
          'Anda dapat mengembangkan metode pemecahan masalah yang inovatif. Anda dapat mencoba pendekatan baru melalui analisis kreatif. Anda memiliki kemampuan untuk melihat masalah dari perspektif baru tanpa terkekang oleh kerangka kerja yang ada, dan menemukan solusi inovatif.',
          'Anda dapat tumbuh menjadi ahli tingkat global. Anda dapat memanfaatkan peluang internasional. Keahlian dan kemampuan analitis Anda dapat diakui bahkan di pasar internasional, dan Anda dapat berpartisipasi dalam proyek luar negeri atau kerjasama internasional untuk aktif di area yang lebih luas.',
          'Anda dapat menunjukkan kemampuan luar biasa dalam pendidikan dan transfer pengetahuan. Anda dapat dengan mudah menjelaskan konsep kompleks. Pemikiran sistematis dan keterampilan komunikasi yang jelas Anda sangat efektif sebagai pendidik atau pelatih, dan Anda dapat mentransfer pengetahuan yang berguna kepada banyak orang.',
          'Anda dapat mencapai pertumbuhan berkelanjutan dalam pengembangan karir jangka panjang. Keahlian terus terakumulasi. Kemauan belajar terus-menerus dan kemampuan analitis Anda berkembang bahkan lebih dari waktu ke waktu, membentuk fondasi untuk pertumbuhan dan pengembangan seumur hidup sebagai ahli.'
        ] 
      },
      hidden: { 
        ko: [
          '세계적인 연구자가 될 가능성이 있습니다. 국제 학회에서 인정받을 수 있습니다. 당신의 연구 능력과 학문적 성취는 국제적인 수준으로 발전할 수 있으며, 세계적인 학회에서 발표하고 인정받을 수 있습니다. 이러한 성과는 당신을 세계적인 권위자로 만들어줄 것입니다.',
          '혁신적인 발견이나 발명을 할 수 있습니다. 과학적 직관력이 뛰어납니다. 당신은 기존의 지식과 패턴을 분석하다가 새로운 가능성을 발견할 수 있는 능력이 있습니다. 이러한 발견은 과학이나 기술 발전에 기여하며, 많은 사람들에게 영향을 미치는 혁신이 될 수 있습니다.',
          '업계의 전문가로 인정받을 수 있습니다. 전문 분야의 권위자가 될 수 있습니다. 당신의 깊은 전문성과 정확한 분석 능력은 업계에서 인정받을 수 있으며, 전문 분야의 최고 권위자로 성장할 수 있습니다. 많은 사람들이 당신의 의견과 조언을 찾아오게 됩니다.',
          '교육자나 멘토로서 많은 사람을 가르칠 수 있습니다. 지식을 전수하는 능력이 있습니다. 당신의 체계적인 사고와 명확한 전달 능력은 교육자나 멘토로서 매우 적합합니다. 복잡한 개념을 쉽게 설명하고 이해시킬 수 있는 능력은 많은 학생이나 후배들에게 큰 도움이 되며, 당신은 그들에게 영감을 주는 선생님이 됩니다.',
          '장기적으로 안정적인 직업 경력을 쌓을 수 있습니다. 전문성이 계속 쌓여갑니다. 당신의 전문성은 시간이 지날수록 더욱 깊어지고 넓어집니다. 이러한 지속적인 성장은 당신에게 안정적이고 장기적인 경력을 보장해주며, 평생 동안 전문가로서 활동할 수 있는 토대가 됩니다.',
          '복잡한 시스템을 이해하고 개선할 수 있는 천재적인 능력이 있습니다. 체계적 사고로 혁신을 만들어낼 수 있습니다. 당신은 대규모 시스템의 구조와 흐름을 파악하고, 그 안에서 개선할 점을 찾아내는 능력이 뛰어나며, 이를 통해 근본적인 혁신을 만들어낼 수 있습니다.',
          '미래의 트렌드와 변화를 예측하는 능력이 탁월합니다. 데이터 분석으로 미래를 내다볼 수 있습니다. 당신은 현재의 데이터와 패턴을 분석하여 미래의 변화를 예측할 수 있는 능력이 있으며, 이를 통해 전략적인 기회를 포착할 수 있습니다.',
          '다양한 분야를 융합하는 통합적 사고력을 가지고 있습니다. 크로스디스ципли너리 연구에 적합합니다. 당신은 한 분야에만 머무르지 않고 여러 분야의 지식을 결합하여 새로운 관점과 해결책을 만들어낼 수 있는 능력이 있습니다.',
          '사회에 긍정적인 영향을 미치는 연구를 수행할 수 있습니다. 공공의 이익을 위한 전문가가 될 수 있습니다. 당신의 연구와 전문성은 개인의 성공뿐만 아니라 사회 전반에 도움이 되는 방향으로 발전할 수 있으며, 많은 사람들에게 이익을 제공하는 전문가가 될 수 있습니다.',
          '평생에 걸쳐 존경받는 학자나 전문가로 기억될 수 있습니다. 후대에 큰 영향을 남길 수 있습니다. 당신의 연구 성과와 전문성은 시간이 지나도 계속해서 가치를 가지며, 후대의 전문가들에게 영감을 주는 중요한 기여를 남길 수 있습니다.'
        ],
        en: [
          'You have the potential to become a world-class researcher. You can be recognized at international conferences. Your research abilities and academic achievements can develop to international levels, and you can present and be recognized at world-class conferences. These achievements will make you a world authority.',
          'You can make innovative discoveries or inventions. You have excellent scientific intuition. You have the ability to analyze existing knowledge and patterns and discover new possibilities. These discoveries contribute to scientific or technological advancement and can become innovations that influence many people.',
          'You can be recognized as an expert in the industry. You can become an authority in your professional field. Your deep expertise and accurate analytical abilities can be recognized in the industry, and you can grow into the top authority in your professional field. Many people will seek your opinions and advice.',
          'You can teach many people as an educator or mentor. You have the ability to transfer knowledge. Your systematic thinking and clear communication skills are very suitable as an educator or mentor. The ability to easily explain and help understand complex concepts greatly helps many students or juniors, and you become a teacher who inspires them.',
          'You can build a stable long-term career. Expertise continues to accumulate. Your expertise deepens and broadens over time. This continuous growth ensures a stable and long-term career for you, forming a foundation for lifelong activity as an expert.',
          'You have a genius ability to understand and improve complex systems. You can create innovation through systematic thinking. You excel at grasping the structure and flow of large-scale systems and finding areas for improvement within them, and through this you can create fundamental innovations.',
          'You have excellent ability to predict future trends and changes. You can see the future through data analysis. You have the ability to analyze current data and patterns to predict future changes, and through this you can capture strategic opportunities.',
          'You have integrated thinking that fuses various fields. You are suitable for cross-disciplinary research. You have the ability to go beyond staying in one field and combine knowledge from multiple fields to create new perspectives and solutions.',
          'You can conduct research that positively impacts society. You can become an expert for public interest. Your research and expertise can develop not only for personal success but also in directions that help society as a whole, and you can become an expert who provides benefits to many people.',
          'You can be remembered as a respected scholar or expert for life. You can leave a great impact on future generations. Your research achievements and expertise continue to hold value even as time passes, and you can leave important contributions that inspire future experts.'
        ], 
        ja: [
          '世界的研究者になる可能性があります。国際学会で認証を受けることができます。あなたの研究能力と学問的達成は国際的なレベルに発展することができ、世界的な学会で発表し認証を受けることができます。これらの成果はあなたを世界的な権威者にします。',
          '革新的な発見や発明をすることができます。科学的直観力が優れています。あなたは既存の知識とパターンを分析しながら新しい可能性を発見する能力があります。これらの発見は科学や技術発展に貢献し、多くの人々に影響を与える革新になります。',
          '業界の専門家として認証を受けることができます。専門分野の権威者になることができます。あなたの深い専門性と正確な分析能力は業界で認証を受けることができ、専門分野の最高権威者に成長できます。多くの人々があなたの意見とアドバイスを求めに来ます。',
          '教育者やメンターとして多くの人を教えることができます。知識を伝授する能力があります。あなたの体系的な思考と明確な伝達能力は教育者やメンターとして非常に適しています。複雑な概念を簡単に説明し理解させる能力は多くの学生や後輩に大きな助けとなり、あなたは彼らにインスピレーションを与える先生になります。',
          '長期的に安定した職業キャリアを築くことができます。専門性が継続的に蓄積されます。あなたの専門性は時間が経つにつれてさらに深まり広がります。これらの持続的な成長はあなたに安定した長期的なキャリアを保証し、一生を通じて専門家として活動できる基盤となります。',
          '複雑なシステムを理解し改善できる天才的な能力があります。体系的思考で革新を作り出すことができます。あなたは大規模システムの構造と流れを把握し、その中で改善点を見つける能力が優れており、これを通じて根本的な革新を作り出すことができます。',
          '未来のトレンドと変化を予測する能力が卓越しています。データ分析で未来を見通すことができます。あなたは現在のデータとパターンを分析して未来の変化を予測する能力があり、これを通じて戦略的な機会を捕捉できます。',
          '様々な分野を融合する統合的思考力を持っています。クロスディシプリナリー研究に適しています。あなたは一つの分野だけにとどまらず、複数の分野の知識を結合して新しい観点と解決策を作り出す能力があります。',
          '社会に肯定的な影響を与える研究を遂行できます。公共の利益のための専門家になることができます。あなたの研究と専門性は個人の成功だけでなく、社会全体に役立つ方向に発展でき、多くの人々に利益を提供する専門家になることができます。',
          '一生を通じて尊重される学者や専門家として記憶されます。後世に大きな影響を残すことができます。あなたの研究成果と専門性は時間が経っても継続的に価値を持ち、後世の専門家にインスピレーションを与える重要な貢献を残すことができます。'
        ], 
        'zh-CN': [
          '你有潜力成为世界级研究者。你可以在国际会议上获得认可。你的研究能力和学术成就可以发展到国际水平，你可以在世界级会议上发表并得到认可。这些成就将使你成为世界权威。',
          '你可以进行创新发现或发明。你的科学直觉出色。你有能力分析现有知识和模式并发现新的可能性。这些发现有助于科学或技术进步，可以成为影响许多人的创新。',
          '你可以被认可为行业专家。你可以成为专业领域的权威。你深厚的专业性和准确的分析能力可以在行业中获得认可，你可以成长为专业领域的最高权威。许多人会寻求你的意见和建议。',
          '你可以作为教育者或导师教授许多人。你有传授知识的能力。你的系统性思维和清晰的沟通能力非常适合作为教育者或导师。能够轻松解释和帮助理解复杂概念的能力对许多学生或后辈大有帮助，你将成为激励他们的老师。',
          '你可以建立稳定的长期职业。专业性会不断积累。你的专业性会随时间加深和拓宽。这种持续增长确保你有稳定长期的职业，为终生作为专家活动奠定基础。',
          '你有理解并改进复杂系统的天才能力。你可以通过系统性思维创造创新。你擅长掌握大规模系统的结构和流程并从中发现改进领域，通过这种方式你可以创造根本性创新。',
          '你有出色的预测未来趋势和变化的能力。你可以通过数据分析看到未来。你有能力分析当前数据和模式以预测未来变化，通过这种方式你可以捕捉战略机会。',
          '你拥有融合多个领域的综合思维。你适合跨学科研究。你有能力超越停留在单一领域，结合多个领域的知识创造新观点和解决方案。',
          '你可以进行对社会产生积极影响的研究。你可以成为为公共利益服务的专家。你的研究和专业知识不仅可以为个人成功发展，也可以朝着帮助整个社会的方向发展，你可以成为为许多人提供利益的专家。',
          '你可以被终生铭记为受尊敬的学者或专家。你可以对后代产生巨大影响。你的研究成就和专业知识即使随时间流逝也会持续保持价值，你可以留下激励未来专家的重要贡献。'
        ], 
        'zh-TW': [
          '你有潛力成為世界級研究者。你可以在國際會議上獲得認可。你的研究能力和學術成就可以發展到國際水平，你可以在世界級會議上發表並得到認可。這些成就將使你成為世界權威。',
          '你可以進行創新發現或發明。你的科學直覺出色。你有能力分析現有知識和模式並發現新的可能性。這些發現有助於科學或技術進步，可以成為影響許多人的創新。',
          '你可以被認可為行業專家。你可以成為專業領域的權威。你深厚的專業性和準確的分析能力可以在行業中獲得認可，你可以成長為專業領域的最高權威。許多人會尋求你的意見和建議。',
          '你可以作為教育者或導師教授許多人。你有傳授知識的能力。你的系統性思維和清晰的溝通能力非常適合作為教育者或導師。能夠輕鬆解釋和幫助理解複雜概念的能力對許多學生或後輩大有幫助，你將成為激勵他們的老師。',
          '你可以建立穩定的長期職業。專業性會不斷積累。你的專業性會隨時間加深和拓寬。這種持續增長確保你有穩定長期的職業，為終生作為專家活動奠定基礎。',
          '你有理解並改進複雜系統的天才能力。你可以通過系統性思維創造創新。你擅長掌握大規模系統的結構和流程並從中發現改進領域，通過這種方式你可以創造根本性創新。',
          '你有出色的預測未來趨勢和變化的能力。你可以通過數據分析看到未來。你有能力分析當前數據和模式以預測未來變化，通過這種方式你可以捕捉戰略機會。',
          '你擁有融合多個領域的綜合思維。你適合跨學科研究。你有能力超越停留在單一領域，結合多個領域的知識創造新觀點和解決方案。',
          '你可以進行對社會產生積極影響的研究。你可以成為為公共利益服務的專家。你的研究和專業知識不僅可以為個人成功發展，也可以朝著幫助整個社會的方向發展，你可以成為為許多人提供利益的專家。',
          '你可以被終生銘記為受尊敬的學者或專家。你可以對後代產生巨大影響。你的研究成就和專業知識即使隨時間流逝也會持續保持價值，你可以留下激勵未來專家的重要貢獻。'
        ], 
        vi: [
          'Bạn có tiềm năng trở thành nhà nghiên cứu đẳng cấp thế giới. Bạn có thể được công nhận tại các hội nghị quốc tế. Khả năng nghiên cứu và thành tựu học thuật của bạn có thể phát triển đến mức quốc tế, và bạn có thể trình bày và được công nhận tại các hội nghị đẳng cấp thế giới. Những thành tựu này sẽ biến bạn thành một nhà có uy tín trên thế giới.',
          'Bạn có thể thực hiện các khám phá hoặc phát minh đổi mới. Bạn có trực giác khoa học xuất sắc. Bạn có khả năng phân tích kiến thức và mô hình hiện có và khám phá các khả năng mới. Những khám phá này đóng góp vào việc phát triển khoa học hoặc công nghệ và có thể trở thành những đổi mới ảnh hưởng đến nhiều người.',
          'Bạn có thể được công nhận như một chuyên gia trong ngành. Bạn có thể trở thành một nhà có uy tín trong lĩnh vực chuyên môn của mình. Chuyên môn sâu sắc và khả năng phân tích chính xác của bạn có thể được công nhận trong ngành, và bạn có thể phát triển thành nhà có uy tín hàng đầu trong lĩnh vực chuyên môn của mình. Nhiều người sẽ tìm kiếm ý kiến và lời khuyên của bạn.',
          'Bạn có thể dạy nhiều người như một nhà giáo dục hoặc người cố vấn. Bạn có khả năng truyền đạt kiến thức. Tư duy có hệ thống và kỹ năng giao tiếp rõ ràng của bạn rất phù hợp như một nhà giáo dục hoặc người cố vấn. Khả năng dễ dàng giải thích và giúp hiểu các khái niệm phức tạp rất hữu ích cho nhiều sinh viên hoặc đồng nghiệp trẻ, và bạn trở thành một giáo viên truyền cảm hứng cho họ.',
          'Bạn có thể xây dựng một sự nghiệp lâu dài ổn định. Chuyên môn tiếp tục tích lũy. Chuyên môn của bạn sâu sắc và rộng hơn theo thời gian. Sự phát triển liên tục này đảm bảo một sự nghiệp ổn định và lâu dài cho bạn, tạo nền tảng cho hoạt động suốt đời như một chuyên gia.',
          'Bạn có khả năng thiên tài để hiểu và cải thiện các hệ thống phức tạp. Bạn có thể tạo ra sự đổi mới thông qua tư duy có hệ thống. Bạn xuất sắc trong việc nắm bắt cấu trúc và luồng của các hệ thống quy mô lớn và tìm ra các lĩnh vực cần cải thiện trong chúng, và thông qua điều này bạn có thể tạo ra những đổi mới cơ bản.',
          'Bạn có khả năng xuất sắc để dự đoán các xu hướng và thay đổi trong tương lai. Bạn có thể nhìn thấy tương lai thông qua phân tích dữ liệu. Bạn có khả năng phân tích dữ liệu và mô hình hiện tại để dự đoán các thay đổi trong tương lai, và thông qua điều này bạn có thể nắm bắt các cơ hội chiến lược.',
          'Bạn có tư duy tích hợp hòa hợp nhiều lĩnh vực. Bạn phù hợp với nghiên cứu liên ngành. Bạn có khả năng vượt ra ngoài việc ở lại trong một lĩnh vực duy nhất và kết hợp kiến thức từ nhiều lĩnh vực để tạo ra các quan điểm và giải pháp mới.',
          'Bạn có thể tiến hành nghiên cứu ảnh hưởng tích cực đến xã hội. Bạn có thể trở thành một chuyên gia phục vụ lợi ích công cộng. Nghiên cứu và chuyên môn của bạn không chỉ có thể phát triển cho thành công cá nhân mà còn theo hướng giúp ích cho toàn xã hội, và bạn có thể trở thành một chuyên gia cung cấp lợi ích cho nhiều người.',
          'Bạn có thể được ghi nhớ suốt đời như một học giả hoặc chuyên gia được tôn trọng. Bạn có thể để lại tác động lớn cho các thế hệ tương lai. Thành tựu nghiên cứu và chuyên môn của bạn tiếp tục giữ giá trị ngay cả khi thời gian trôi qua, và bạn có thể để lại những đóng góp quan trọng truyền cảm hứng cho các chuyên gia tương lai.'
        ], 
        id: [
          'Anda memiliki potensi menjadi peneliti kelas dunia. Anda dapat diakui di konferensi internasional. Kemampuan penelitian dan pencapaian akademis Anda dapat berkembang ke tingkat internasional, dan Anda dapat mempresentasikan dan diakui di konferensi kelas dunia. Pencapaian ini akan membuat Anda menjadi otoritas dunia.',
          'Anda dapat membuat penemuan atau penemuan inovatif. Anda memiliki intuisi ilmiah yang sangat baik. Anda memiliki kemampuan untuk menganalisis pengetahuan dan pola yang ada dan menemukan kemungkinan baru. Penemuan ini berkontribusi pada kemajuan ilmiah atau teknologi dan dapat menjadi inovasi yang mempengaruhi banyak orang.',
          'Anda dapat diakui sebagai ahli di industri. Anda dapat menjadi otoritas di bidang profesional Anda. Keahlian mendalam dan kemampuan analitis yang akurat Anda dapat diakui di industri, dan Anda dapat tumbuh menjadi otoritas teratas di bidang profesional Anda. Banyak orang akan mencari pendapat dan saran Anda.',
          'Anda dapat mengajar banyak orang sebagai pendidik atau mentor. Anda memiliki kemampuan untuk mentransfer pengetahuan. Pemikiran sistematis dan keterampilan komunikasi yang jelas Anda sangat cocok sebagai pendidik atau mentor. Kemampuan untuk dengan mudah menjelaskan dan membantu memahami konsep kompleks sangat membantu banyak siswa atau junior, dan Anda menjadi guru yang menginspirasi mereka.',
          'Anda dapat membangun karir panjang yang stabil. Keahlian terus terakumulasi. Keahlian Anda mendalam dan melebar seiring waktu. Pertumbuhan berkelanjutan ini memastikan karir yang stabil dan jangka panjang untuk Anda, membentuk fondasi untuk aktivitas seumur hidup sebagai ahli.',
          'Anda memiliki kemampuan jenius untuk memahami dan meningkatkan sistem kompleks. Anda dapat menciptakan inovasi melalui pemikiran sistematis. Anda unggul dalam memahami struktur dan aliran sistem skala besar dan menemukan area untuk peningkatan di dalamnya, dan melalui ini Anda dapat menciptakan inovasi fundamental.',
          'Anda memiliki kemampuan luar biasa untuk memprediksi tren dan perubahan masa depan. Anda dapat melihat masa depan melalui analisis data. Anda memiliki kemampuan untuk menganalisis data dan pola saat ini untuk memprediksi perubahan masa depan, dan melalui ini Anda dapat menangkap peluang strategis.',
          'Anda memiliki pemikiran terintegrasi yang menggabungkan berbagai bidang. Anda cocok untuk penelitian lintas disiplin. Anda memiliki kemampuan untuk melampaui tinggal di satu bidang dan menggabungkan pengetahuan dari beberapa bidang untuk menciptakan perspektif dan solusi baru.',
          'Anda dapat melakukan penelitian yang berdampak positif pada masyarakat. Anda dapat menjadi ahli yang melayani kepentingan publik. Penelitian dan keahlian Anda tidak hanya dapat berkembang untuk kesuksesan pribadi tetapi juga dalam arah yang membantu masyarakat secara keseluruhan, dan Anda dapat menjadi ahli yang memberikan manfaat kepada banyak orang.',
          'Anda dapat diingat sebagai sarjana atau ahli yang dihormati seumur hidup. Anda dapat meninggalkan dampak besar pada generasi mendatang. Pencapaian penelitian dan keahlian Anda terus memegang nilai bahkan saat waktu berlalu, dan Anda dapat meninggalkan kontribusi penting yang menginspirasi para ahli di masa depan.'
        ] 
      }
    }
  },
  {
    id: 4,
    title: { ko: '커뮤니케이터형', en: 'Communicator Type', ja: 'コミュニケーター型', 'zh-CN': '沟通者型', 'zh-TW': '溝通者型', vi: 'Kiểu Giao Tiếp', id: 'Tipe Komunikator' },
    description: {
      ko: [
        '당신의 얼굴은 밝고 열린 마음을 보여줍니다. 사람들과 소통하고 관계를 맺는 것을 좋아하는 성격입니다.',
        '표현력이 뛰어나고 말재주가 있는 얼굴입니다. 자신의 생각을 명확하게 전달하는 능력이 있습니다.',
        '공감 능력이 높고 감수성이 풍부합니다. 다른 사람의 감정을 잘 이해하고 공감합니다.',
        '사교성이 좋고 친근한 인상입니다. 많은 사람들과 원만한 관계를 유지할 수 있습니다.',
        '설득력이 있어서 사람들을 움직이는 능력이 있습니다. 자신의 의견을 효과적으로 전달합니다.',
        '긍정적이고 밝은 에너지가 느껴집니다. 주변 사람들에게 좋은 영향을 미칩니다.',
        '유머 감각이 있어서 분위기를 밝게 만듭니다. 재미있는 대화로 사람들을 즐겁게 합니다.',
        '협상력과 중재 능력이 뛰어납니다. 갈등을 해결하고 조화를 이끌어냅니다.',
        '네트워킹 능력이 뛰어납니다. 다양한 사람들과 의미 있는 관계를 만들어갑니다.',
        '리스닝 스킬이 뛰어나서 상대방의 말을 잘 들어줍니다. 이해하고 경청하는 능력이 있습니다.'
      ],
      en: [
        'Your face shows a bright and open mind. You have a personality that loves communicating and building relationships with people.',
        'You have excellent expression and verbal skills. You have the ability to clearly convey your thoughts.',
        'You have high empathy and rich sensitivity. You understand and empathize with others\' emotions well.',
        'You have good sociability and a friendly impression. You can maintain harmonious relationships with many people.',
        'You have persuasive power and ability to move people. You effectively convey your opinions.',
        'Positive and bright energy is felt. You have a good influence on people around you.',
        'You have a sense of humor that brightens the atmosphere. You make people happy with interesting conversations.',
        'You have excellent negotiation and mediation skills. You resolve conflicts and bring harmony.',
        'You have excellent networking skills. You build meaningful relationships with diverse people.',
        'You have excellent listening skills and listen well to others. You have the ability to understand and listen attentively.'
      ], 
      ja: [
        'あなたの顔は明るく開かれた心を示しています。人々とコミュニケーションを取り関係を築くことを好む性格です。',
        '表現力が優れ口が上手い顔です。自分の考えを明確に伝える能力があります。',
        '共感能力が高く感受性が豊かです。他の人の感情をよく理解し共感します。',
        '社交性が良く親しみやすい印象です。多くの人々と円満な関係を維持できます。',
        '説得力があり人々を動かす能力があります。自分の意見を効果的に伝えます。',
        'ポジティブで明るいエネルギーが感じられます。周りの人々に良い影響を与えます。',
        'ユーモアのセンスがあり雰囲気を明るくします。面白い会話で人々を楽しくさせます。',
        '交渉力と調停能力が優れています。対立を解決し調和をもたらします。',
        'ネットワーキング能力が優れています。多様な人々と意味のある関係を築きます。',
        'リスニングスキルが優れており相手の話をよく聞きます。理解し傾聴する能力があります。'
      ], 
      'zh-CN': [
        '你的面相展现出开朗与开放的心态。你拥有喜欢与人们沟通并建立关系的个性。',
        '你拥有出色的表达与口才。你能清晰地传达自己的想法。',
        '你共情力强且敏感度高。你很好地理解并共情他人情绪。',
        '你社交性强且给人友好的印象。你能与许多人保持和谐关系。',
        '你有说服力且能带动他人。你有效传达自己的观点。',
        '你能感受到积极与明亮的气息。你对周围产生正向影响。',
        '你具备幽默感，能活跃氛围。你用有趣的对话让人愉悦。',
        '你拥有出色的谈判与调解技能。你化解冲突并带来和谐。',
        '你拥有出色的社交技能。你与不同的人建立有意义的关系。',
        '你的倾听能力出色，能认真倾听他人。你具备理解与专注倾听的能力。'
      ], 
      'zh-TW': [
        '你的面相展現出開朗與開放的心態。你擁有喜歡與人們溝通並建立關係的個性。',
        '你擁有出色的表達與口才。你能清晰地傳達自己的想法。',
        '你共情力強且敏感度高。你很好地理解並共情他人情緒。',
        '你社交性強且給人友好的印象。你能與許多人保持和諧關係。',
        '你有說服力且能帶動他人。你有效傳達自己的觀點。',
        '你能感受到積極與明亮的氣息。你對周圍產生正向影響。',
        '你具備幽默感，能活躍氛圍。你用有趣的對話讓人愉悅。',
        '你擁有出色的談判與調解技能。你化解衝突並帶來和諧。',
        '你擁有出色的社交技能。你與不同的人建立有意義的關係。',
        '你的傾聽能力出色，能認真傾聽他人。你具備理解與專注傾聽的能力。'
      ], 
      vi: [
        'Khuôn mặt bạn thể hiện tâm trí tươi sáng và cởi mở. Bạn có tính cách thích giao tiếp và xây dựng mối quan hệ với mọi người.',
        'Bạn có khả năng biểu đạt và kỹ năng nói xuất sắc. Bạn có khả năng truyền đạt ý nghĩ rõ ràng.',
        'Bạn có khả năng đồng cảm cao và nhạy cảm phong phú. Bạn hiểu và đồng cảm với cảm xúc của người khác tốt.',
        'Bạn có tính xã hội tốt và ấn tượng thân thiện. Bạn có thể duy trì mối quan hệ hài hòa với nhiều người.',
        'Bạn có sức thuyết phục và khả năng thúc đẩy người khác. Bạn truyền đạt ý kiến hiệu quả.',
        'Năng lượng tích cực và tươi sáng được cảm nhận. Bạn có ảnh hưởng tốt đến những người xung quanh.',
        'Bạn có khiếu hài hước tạo bầu không khí tươi sáng. Bạn làm mọi người vui vẻ bằng những cuộc trò chuyện thú vị.',
        'Bạn có kỹ năng đàm phán và hòa giải xuất sắc. Bạn giải quyết xung đột và mang lại sự hài hòa.',
        'Bạn có kỹ năng kết nối xuất sắc. Bạn xây dựng mối quan hệ có ý nghĩa với nhiều người khác nhau.',
        'Bạn có kỹ năng lắng nghe xuất sắc và lắng nghe người khác tốt. Bạn có khả năng hiểu và chú ý lắng nghe.'
      ], 
      id: [
        'Wajah Anda menunjukkan pikiran yang cerah dan terbuka. Anda memiliki kepribadian yang suka berkomunikasi dan membangun hubungan dengan orang-orang.',
        'Anda memiliki ekspresi dan keterampilan verbal yang luar biasa. Anda memiliki kemampuan untuk menyampaikan pikiran Anda dengan jelas.',
        'Anda memiliki empati tinggi dan sensitivitas yang kaya. Anda memahami dan merasakan emosi orang lain dengan baik.',
        'Anda memiliki sosialisasi yang baik dan kesan yang ramah. Anda dapat menjaga hubungan harmonis dengan banyak orang.',
        'Anda memiliki daya persuasi dan kemampuan untuk menggerakkan orang. Anda menyampaikan pendapat Anda secara efektif.',
        'Energi positif dan cerah terasa. Anda memiliki pengaruh yang baik pada orang-orang di sekitar Anda.',
        'Anda memiliki selera humor yang mencerahkan suasana. Anda membuat orang bahagia dengan percakapan yang menarik.',
        'Anda memiliki keterampilan negosiasi dan mediasi yang luar biasa. Anda menyelesaikan konflik dan membawa harmoni.',
        'Anda memiliki keterampilan jaringan yang luar biasa. Anda membangun hubungan bermakna dengan berbagai orang.',
        'Anda memiliki keterampilan mendengarkan yang luar biasa dan mendengarkan orang lain dengan baik. Anda memiliki kemampuan untuk memahami dan mendengarkan dengan penuh perhatian.'
      ]
    },
    emoji: '💬',
    scoreRange: [60, 69],
    strengths: { 
      ko: ['사교성', '표현력', '공감력', '설득력', '긍정성', '유머감각', '협상력', '네트워킹', '경청능력', '리더십'], 
      en: ['Sociability', 'Expression', 'Empathy', 'Persuasion', 'Positivity', 'Humor', 'Negotiation', 'Networking', 'Listening', 'Leadership'], 
      ja: ['社交性', '表現力', '共感力', '説得力', '積極性', 'ユーモア', '交渉力', 'ネットワーキング', '聴く能力', 'リーダーシップ'], 
      'zh-CN': ['社交性', '表达能力', '共情力', '说服力', '积极性', '幽默感', '谈判能力', '网络能力', '倾听能力', '领导力'], 
      'zh-TW': ['社交性', '表達能力', '共情力', '說服力', '積極性', '幽默感', '談判能力', '網絡能力', '傾聽能力', '領導力'], 
      vi: ['Tính xã hội', 'Biểu hiện', 'Đồng cảm', 'Thuyết phục', 'Tích cực', 'Hài hước', 'Thương lượng', 'Mạng lưới', 'Nghe', 'Lãnh đạo'], 
      id: ['Sosial', 'Ekspresi', 'Empati', 'Persuasi', 'Positivitas', 'Humor', 'Negosiasi', 'Jaringan', 'Mendengarkan', 'Kepemimpinan'] 
    },
    recommendations: { 
      ko: ['변호사', '판사', '기자', '아나운서', 'MC', '강사', '교육자', '상담사', '영업사원', 'HR담당자'], 
      en: ['Lawyer', 'Judge', 'Journalist', 'Broadcaster', 'MC', 'Instructor', 'Educator', 'Counselor', 'Salesperson', 'HR Manager'], 
      ja: ['弁護士', '判事', '記者', 'アナウンサー', 'MC', '講師', '教育者', 'カウンセラー', '営業員', '人事担当者'], 
      'zh-CN': ['律师', '法官', '记者', '播音员', '主持人', '讲师', '教育者', '咨询师', '销售员', '人力资源经理'], 
      'zh-TW': ['律師', '法官', '記者', '播音員', '主持人', '講師', '教育者', '諮詢師', '銷售員', '人力資源經理'], 
      vi: ['Luật sư', 'Thẩm phán', 'Nhà báo', 'Phát thanh viên', 'MC', 'Giảng viên', 'Nhà giáo dục', 'Cố vấn', 'Nhân viên bán hàng', 'Nhân viên HR'], 
      id: ['Pengacara', 'Hakim', 'Jurnalis', 'Penyiar', 'MC', 'Instruktur', 'Pendidik', 'Konselor', 'Salesperson', 'HR Manager'] 
    },
    personality: { 
      ko: [
        '밝고 사교적인 성격입니다. 사람들과 어울리는 것을 좋아합니다.',
        '표현력이 뛰어나고 말을 잘합니다. 자신의 의견을 잘 전달합니다.',
        '공감 능력이 높아서 다른 사람을 이해합니다.',
        '긍정적이고 낙관적인 성향이 강합니다.',
        '유머 감각이 있어서 분위기를 좋게 만듭니다.',
        '협상과 중재에 능숙합니다. 갈등을 해결합니다.',
        '네트워킹에 능하여 많은 사람을 알고 있습니다.',
        '경청을 잘하고 상대방의 말에 집중합니다.',
        '설득력이 있어서 목표를 달성합니다.',
        '리더십이 있어서 그룹을 이끕니다.'
      ],
      en: [
        'You have a bright and sociable personality. You like to get along with people.',
        'You have excellent expression and speaking skills. You convey your opinions well.',
        'You have high empathy and understand others.',
        'You have a strong tendency to be positive and optimistic.',
        'You have a sense of humor that makes the atmosphere good.',
        'You are skilled at negotiation and mediation. You resolve conflicts.',
        'You are good at networking and know many people.',
        'You listen well and focus on what others say.',
        'You have persuasive power and achieve goals.',
        'You have leadership and lead groups.'
      ], 
      ja: [
        '明るく社交的な性格です。人々と付き合うことを好みます。',
        '表現力が優れ話が上手です。自分の意見をよく伝えます。',
        '共感能力が高く他の人を理解します。',
        'ポジティブで楽観的な傾向が強いです。',
        'ユーモアのセンスがあり雰囲気を良くします。',
        '交渉と調停に熟達しています。対立を解決します。',
        'ネットワーキングに長けて多くの人を知っています。',
        '傾聴を良くし相手の話に集中します。',
        '説得力があり目標を達成します。',
        'リーダーシップがありグループを導きます。'
      ], 
      'zh-CN': [
        '你性格开朗而善于社交。你喜欢与人相处。',
        '你的表达与口才出色。你善于传达自己的观点。',
        '你共情力强且理解他人。',
        '你倾向积极与乐观。',
        '你具有幽默感，能让氛围变好。',
        '你擅长谈判与调解。你化解冲突。',
        '你擅长社交，认识许多人。',
        '你善于倾听并专注于对方所说。',
        '你有说服力并能达成目标。',
        '你具备领导力并引导团体。'
      ], 
      'zh-TW': [
        '你性格開朗而善於社交。你喜歡與人相處。',
        '你的表達與口才出色。你善於傳達自己的觀點。',
        '你共情力強且理解他人。',
        '你傾向積極與樂觀。',
        '你具有幽默感，能讓氛圍變好。',
        '你擅長談判與調解。你化解衝突。',
        '你擅長社交，認識許多人。',
        '你善於傾聽並專注於對方所說。',
        '你有說服力並能達成目標。',
        '你具備領導力並引導團體。'
      ], 
      vi: [
        'Bạn có tính cách tươi sáng và xã hội. Bạn thích giao lưu với mọi người.',
        'Bạn có khả năng diễn đạt và nói chuyện xuất sắc. Bạn truyền đạt ý kiến tốt.',
        'Bạn có khả năng đồng cảm cao và hiểu người khác.',
        'Bạn có xu hướng mạnh mẽ để tích cực và lạc quan.',
        'Bạn có khiếu hài hước làm cho bầu không khí tốt.',
        'Bạn thành thạo trong đàm phán và hòa giải. Bạn giải quyết xung đột.',
        'Bạn giỏi kết nối và biết nhiều người.',
        'Bạn lắng nghe tốt và tập trung vào những gì người khác nói.',
        'Bạn có sức thuyết phục và đạt được mục tiêu.',
        'Bạn có khả năng lãnh đạo và dẫn dắt nhóm.'
      ], 
      id: [
        'Anda memiliki kepribadian yang cerah dan sosial. Anda suka bergaul dengan orang-orang.',
        'Anda memiliki ekspresi dan keterampilan berbicara yang luar biasa. Anda menyampaikan pendapat Anda dengan baik.',
        'Anda memiliki empati tinggi dan memahami orang lain.',
        'Anda memiliki kecenderungan yang kuat untuk menjadi positif dan optimis.',
        'Anda memiliki selera humor yang membuat suasana menjadi baik.',
        'Anda terampil dalam negosiasi dan mediasi. Anda menyelesaikan konflik.',
        'Anda pandai dalam jaringan dan mengenal banyak orang.',
        'Anda mendengarkan dengan baik dan fokus pada apa yang dikatakan orang lain.',
        'Anda memiliki daya persuasi dan mencapai tujuan.',
        'Anda memiliki kepemimpinan dan memimpin kelompok.'
      ]
    },
    advice: { 
      ko: [
        '커뮤니케이션 스킬을 더욱 개발하세요. 다양한 상황에서 효과적으로 소통하는 방법을 배우세요. 정기적으로 토론이나 대화 연습을 하고, 다양한 사람들과 소통하며 경험을 쌓아야 합니다. 각 상황에 맞는 적절한 소통 방식을 익히면 더욱 효과적인 커뮤니케이터가 될 수 있습니다.',
        '네트워킹을 적극적으로 하세요. 다양한 사람들과 관계를 맺고 유지하세요. 업계 이벤트, 세미나, 모임 등에 적극 참여하고 사람들과 교류해야 합니다. 넓은 네트워크는 당신에게 기회와 정보를 가져다주며, 커리어 발전에 큰 도움이 됩니다.',
        '발표나 프레젠테이션 능력을 키우세요. 많은 사람 앞에서 말하는 연습을 하세요. 발표 클럽이나 토론 동아리에 참여하여 공식적인 발표 경험을 쌓고, 피드백을 받으며 향상시켜야 합니다. 뛰어난 발표 능력은 전문성을 증명하는 중요한 수단이 됩니다.',
        '여러 언어를 배우세요. 다국어 능력이 큰 경쟁력이 됩니다. 특히 영어와 중국어 등 글로벌 비즈니스에 필수적인 언어를 마스터하면 국제적인 기회를 잡을 수 있습니다. 언어는 문화를 이해하는 통로이므로 언어 학습은 매우 중요합니다.',
        '관찰력과 인사이트를 키우세요. 사람들의 심리를 파악하는 능력이 중요합니다. 일상에서 사람들의 행동과 말을 관찰하고, 그들이 무엇을 원하는지 생각하는 연습을 해야 합니다. 이러한 능력은 더 효과적인 소통과 관계 구축에 도움이 됩니다.',
        '갈등 해결 능력을 개발하세요. 중재자로서의 역할을 배워보세요. 갈등 상황에서 양쪽의 입장을 이해하고 중재할 수 있는 능력을 키워야 합니다. 이러한 능력은 팀 리더나 매니저 역할에서 매우 중요하며, 당신의 가치를 높여줍니다.',
        '마케팅이나 영업 분야에서 경험을 쌓으세요. 실전에서 소통 능력을 키울 수 있습니다. 직접 고객을 만나고 소통하는 경험은 당신의 커뮤니케이션 능력을 크게 향상시킬 수 있습니다. 이러한 경험은 무엇보다 값진 경험이며, 향후 어떤 분야에서도 활용할 수 있습니다.',
        '미디어나 방송 분야에서 활동해보세요. 자신의 능력을 발휘할 수 있는 좋은 무대입니다. TV, 라디오, 팟캐스트 등 다양한 미디어 플랫폼에 출연하여 자신을 알리고 경험을 쌓아야 합니다. 이러한 경험은 당신의 커리어에 큰 자산이 됩니다.',
        '교육이나 강의 분야를 고려해보세요. 지식을 전달하는 것에 적합합니다. 대학이나 전문교육원에서 강사로 활동하거나 온라인 강의를 만들어보는 것도 좋습니다. 당신의 명확한 설명 능력은 많은 학생들에게 도움이 되며, 교육자로서 큰 보람을 느낄 수 있습니다.',
        '글로벌 환경에서 일하는 것을 고려하세요. 국제적인 소통 능력이 필요합니다. 외국계 기업이나 국제기구에서 일하는 것을 고려해보고, 해외 취업이나 국제 프로젝트에 참여해보는 것도 좋습니다. 국제적인 경험은 당신의 시야를 넓혀주고 더 큰 기회를 만들 수 있습니다.'
      ],
      en: [
        'Develop your communication skills further. Learn how to communicate effectively in various situations. Practice discussions or conversations regularly and communicate with various people to gain experience. Learning appropriate communication methods for each situation will make you a more effective communicator.',
        'Actively network. Build and maintain relationships with various people. Participate actively in industry events, seminars, meetings, and interact with people. A wide network brings opportunities and information to you and is very helpful for career development.',
        'Build your presentation skills. Practice speaking in front of many people. Join presentation clubs or debate groups to gain formal presentation experience and improve through feedback. Excellent presentation skills are an important means to prove your expertise.',
        'Learn multiple languages. Multilingual abilities become a great competitive advantage. Mastering languages essential to global business like English and Chinese allows you to seize international opportunities. Language is a gateway to understanding culture, so language learning is very important.',
        'Develop observation and insight. The ability to understand people\'s psychology is important. Practice observing people\'s behavior and words in everyday life and thinking about what they want. These abilities help with more effective communication and relationship building.',
        'Develop conflict resolution skills. Learn to play the role of a mediator. Build the ability to understand and mediate both positions in conflict situations. These abilities are very important in team leader or manager roles and increase your value.',
        'Gain experience in marketing or sales. You can build communication skills in the field. The experience of meeting customers directly and communicating with them can greatly improve your communication abilities. These experiences are extremely valuable and can be applied in any field in the future.',
        'Try activities in media or broadcasting. They provide a good stage to demonstrate your abilities. Appear on various media platforms like TV, radio, and podcasts to promote yourself and gain experience. These experiences become major assets for your career.',
        'Consider the field of education or lecturing. It suits transmitting knowledge. It\'s good to work as a lecturer at universities or professional training centers or create online courses. Your clear explanation skills help many students, and you can feel great satisfaction as an educator.',
        'Consider working in a global environment. International communication skills are necessary. Consider working for foreign companies or international organizations, and it\'s also good to work overseas or participate in international projects. International experiences broaden your vision and can create greater opportunities.'
      ], 
      ja: [
        'コミュニケーションスキルをさらに開発してください。様々な状況で効果的にコミュニケーションする方法を学びます。定期的に討論や会話の練習を行い、様々な人々とコミュニケーションして経験を積む必要があります。各状況に適した適切なコミュニケーション方式を習得すると、より効果的なコミュニケーターになれます。',
        'ネットワーキングを積極的にしてください。様々な人々と関係を築き維持します。業界イベント、セミナー、ミーティングなどに積極的に参加し、人々と交流する必要があります。広いネットワークは機会と情報を提供し、キャリア発展に大きく貢献します。',
        '発表やプレゼンテーション能力を高めてください。多くの人の前で話す練習をします。発表クラブや討論同好会に参加して公式発表の経験を積み、フィードバックを受けながら向上させる必要があります。優れた発表能力は専門性を証明する重要な手段となります。',
        '複数の言語を学んでください。多言語能力が大きな競争力となります。特に英語や中国語などグローバルビジネスに必須な言語をマスターすると国際的な機会を掴むことができます。言語は文化を理解する通路なので言語学習は非常に重要です。',
        '観察力とインサイトを育ててください。人々の心理を把握する能力が重要です。日常で人々の行動と言葉を観察し、彼らが何を望んでいるか考える練習をすべきです。これらの能力はより効果的なコミュニケーションと関係構築に役立ちます。',
        '対立解決能力を開発してください。調停者としての役割を学びます。対立状況で両側の立場を理解し調停できる能力を育てる必要があります。これらの能力はチームリーダーやマネージャーの役割で非常に重要で、あなたの価値を高めます。',
        'マーケティングや営業分野で経験を積んでください。実戦でコミュニケーション能力を育てることができます。直接顧客に会ってコミュニケーションする経験はコミュニケーション能力を大きく向上させることができます。これらの経験は極めて貴重で、今後どの分野でも活用できます。',
        'メディアや放送分野で活動してみてください。自分の能力を発揮できる良い舞台です。TV、ラジオ、ポッドキャストなど様々なメディアプラットフォームに出演して自分を宣伝し経験を積むべきです。これらの経験はキャリアに大きな資産となります。',
        '教育や講義分野を検討してください。知識を伝えることに適しています。大学や専門教育院で講師として活動したり、オンライン講義を作ることも良いです。明確な説明能力は多くの学生に役立ち、教育者として大きなやりがいを感じることができます。',
        'グローバル環境で働くことを検討してください。国際的なコミュニケーション能力が必要です。外資系企業や国際機関で働くことを検討し、海外就職や国際プロジェクトに参加することも良いです。国際的な経験は視野を広げ、より大きな機会を作ることができます。'
      ], 
      'zh-CN': [
        '进一步培养你的沟通技能。学习在各种情况下有效交流的方法。定期练习讨论或对话，与不同的人交流积累经验。掌握适合每种情况的交流方式会使你成为更高效的沟通者。',
        '积极参与社交网络。与不同的人建立并维持关系。积极参与行业活动、研讨会、聚会并与他人交流。广泛的人脉为你带来机会和信息，对职业发展有很大帮助。',
        '培养演讲或演示能力。练习在许多人面前说话。加入演讲俱乐部或辩论小组以积累正式演讲经验，通过反馈提升。出色的演讲能力是证明专业性的重要手段。',
        '学习多种语言。多语言能力是巨大的竞争优势。掌握英语和中文等全球商务所需的语言，可以抓住国际机遇。语言是理解文化的通道，因此语言学习非常重要。',
        '培养观察力与洞察力。理解他人心理的能力很重要。练习在日常中观察人们的行为与话语，思考他们想要什么。这些能力有助于更高效的交流与关系建立。',
        '培养冲突解决能力。学习承担调解者角色。培养在冲突场景中理解双方立场并进行调解的能力。这些能力在团队领导或管理者角色中至关重要，并提升你的价值。',
        '在营销或销售领域积累经验。可以在实战中提升交流能力。直接接触并与客户沟通能显著提升你的沟通能力。这些经历极其宝贵，今后可用于任何领域。',
        '尝试在媒体或广播领域活动。这是展示你能力的良好舞台。在电视、广播、播客等各种媒体平台露面，提升知名度并积累经验。这些经验将成为你职业生涯的宝贵资产。',
        '考虑教育或讲课领域。这适合知识传递。在大学或专业培训中心担任讲师，或创建在线课程都是不错的选择。你清晰的解释能力对许多学生有帮助，让你在教育者角色中感受到巨大满足。',
        '考虑在全球化环境中工作。需要国际交流能力。考虑在外资企业或国际组织工作，在海外就业或参与国际项目也是不错的选择。国际经验会拓宽你的视野并创造更大机遇。'
      ], 
      'zh-TW': [
        '進一步培養你的溝通技能。學習在各種情況下有效交流的方法。定期練習討論或對話，與不同的人交流積累經驗。掌握適合每種情況的交流方式會使你成為更高效的溝通者。',
        '積極參與社交網絡。與不同的人建立並維持關係。積極參與行業活動、研討會、聚會並與他人交流。廣泛的人脈為你帶來機會和資訊，對職涯發展有很大幫助。',
        '培養演講或演示能力。練習在許多人面前說話。加入演講社團或辯論小組以積累正式演講經驗，透過回饋提升。出色的演講能力是證明專業性的重要手段。',
        '學習多種語言。多語言能力是巨大的競爭優勢。掌握英語和中文等全球商務所需的語言，可以抓住國際機遇。語言是理解文化的通道，因此語言學習非常重要。',
        '培養觀察力與洞察力。理解他人心理的能力很重要。練習在日常中觀察人們的行為與話語，思考他們想要什麼。這些能力有助於更高效的交流與關係建立。',
        '培養衝突解決能力。學習承擔調解者角色。培養在衝突場景中理解雙方立場並進行調解的能力。這些能力在團隊領導或管理者角色中至關重要，並提升你的價值。',
        '在行銷或銷售領域積累經驗。可以在實戰中提升交流能力。直接接觸並與客戶溝通能顯著提升你的溝通能力。這些經歷極其寶貴，今後可用於任何領域。',
        '嘗試在媒體或廣播領域活動。這是展示你能力的良好舞台。在電視、廣播、播客等各種媒體平台露面，提升知名度並積累經驗。這些經驗將成為你職涯的寶貴資產。',
        '考慮教育或授課領域。這適合知識傳遞。在大學或專業培訓中心擔任講師，或創建線上課程都是不錯的選擇。你清晰的解釋能力對許多學生有幫助，讓你在教育者角色中感受到巨大滿足。',
        '考慮在全球化環境中工作。需要國際交流能力。考慮在外資企業或國際組織工作，在海外就業或參與國際專案也是不錯的選擇。國際經驗會拓寬你的視野並創造更大機遇。'
      ], 
      vi: [
        'Phát triển thêm kỹ năng giao tiếp của bạn. Học cách giao tiếp hiệu quả trong các tình huống khác nhau. Thường xuyên luyện tập thảo luận hoặc trò chuyện, và giao tiếp với nhiều người khác nhau để tích lũy kinh nghiệm. Học các phương pháp giao tiếp phù hợp cho từng tình huống sẽ làm cho bạn trở thành một người giao tiếp hiệu quả hơn.',
        'Tích cực mạng lưới. Xây dựng và duy trì mối quan hệ với nhiều người khác nhau. Tham gia tích cực vào các sự kiện ngành, hội thảo, cuộc họp và tương tác với mọi người. Mạng lưới rộng mang lại cơ hội và thông tin cho bạn và rất hữu ích cho sự phát triển sự nghiệp.',
        'Xây dựng kỹ năng thuyết trình của bạn. Luyện tập nói trước nhiều người. Tham gia các câu lạc bộ thuyết trình hoặc nhóm tranh luận để có kinh nghiệm thuyết trình chính thức và cải thiện thông qua phản hồi. Kỹ năng thuyết trình xuất sắc là phương tiện quan trọng để chứng minh chuyên môn của bạn.',
        'Học nhiều ngôn ngữ. Khả năng đa ngôn ngữ trở thành lợi thế cạnh tranh lớn. Thành thạo các ngôn ngữ cần thiết cho kinh doanh toàn cầu như tiếng Anh và tiếng Trung cho phép bạn nắm bắt cơ hội quốc tế. Ngôn ngữ là cánh cửa để hiểu văn hóa, vì vậy việc học ngôn ngữ rất quan trọng.',
        'Phát triển khả năng quan sát và hiểu biết. Khả năng hiểu tâm lý con người rất quan trọng. Thực hành quan sát hành vi và lời nói của mọi người trong cuộc sống hàng ngày và suy nghĩ về những gì họ muốn. Những khả năng này giúp giao tiếp và xây dựng mối quan hệ hiệu quả hơn.',
        'Phát triển kỹ năng giải quyết xung đột. Học cách đóng vai trò trung gian. Xây dựng khả năng hiểu và trung gian cho cả hai bên trong tình huống xung đột. Những khả năng này rất quan trọng trong vai trò lãnh đạo nhóm hoặc quản lý và tăng giá trị của bạn.',
        'Tích lũy kinh nghiệm trong marketing hoặc sales. Bạn có thể phát triển kỹ năng giao tiếp trong lĩnh vực. Kinh nghiệm gặp khách hàng trực tiếp và giao tiếp với họ có thể cải thiện đáng kể khả năng giao tiếp của bạn. Những trải nghiệm này cực kỳ quý giá và có thể được áp dụng trong bất kỳ lĩnh vực nào trong tương lai.',
        'Thử các hoạt động trong truyền thông hoặc phát thanh. Chúng cung cấp một sân khấu tốt để thể hiện khả năng của bạn. Xuất hiện trên các nền tảng truyền thông khác nhau như TV, radio và podcast để quảng bá bản thân và tích lũy kinh nghiệm. Những trải nghiệm này trở thành tài sản quan trọng cho sự nghiệp của bạn.',
        'Cân nhắc lĩnh vực giáo dục hoặc giảng dạy. Nó phù hợp để truyền đạt kiến thức. Rất tốt khi làm việc như một giảng viên tại các trường đại học hoặc trung tâm đào tạo chuyên nghiệp hoặc tạo các khóa học trực tuyến. Kỹ năng giải thích rõ ràng của bạn giúp ích cho nhiều sinh viên, và bạn có thể cảm thấy sự hài lòng lớn như một nhà giáo dục.',
        'Cân nhắc làm việc trong môi trường toàn cầu. Kỹ năng giao tiếp quốc tế là cần thiết. Cân nhắc làm việc cho các công ty nước ngoài hoặc tổ chức quốc tế, và cũng rất tốt khi làm việc ở nước ngoài hoặc tham gia các dự án quốc tế. Trải nghiệm quốc tế mở rộng tầm nhìn của bạn và có thể tạo ra cơ hội lớn hơn.'
      ], 
      id: [
        'Kembangkan keterampilan komunikasi Anda lebih lanjut. Pelajari cara berkomunikasi secara efektif dalam berbagai situasi. Berlatih diskusi atau percakapan secara teratur dan berkomunikasi dengan berbagai orang untuk mendapatkan pengalaman. Mempelajari metode komunikasi yang tepat untuk setiap situasi akan menjadikan Anda komunikator yang lebih efektif.',
        'Aktif dalam jaringan. Bangun dan pertahankan hubungan dengan berbagai orang. Berpartisipasi aktif dalam acara industri, seminar, pertemuan, dan berinteraksi dengan orang-orang. Jaringan yang luas memberikan peluang dan informasi kepada Anda dan sangat membantu untuk pengembangan karier.',
        'Bangun keterampilan presentasi Anda. Berlatih berbicara di depan banyak orang. Bergabung dengan klub presentasi atau grup debat untuk mendapatkan pengalaman presentasi formal dan meningkat melalui umpan balik. Keterampilan presentasi yang luar biasa adalah sarana penting untuk membuktikan keahlian Anda.',
        'Pelajari beberapa bahasa. Kemampuan multibahasa menjadi keuntungan kompetitif yang besar. Menguasai bahasa-bahasa yang penting untuk bisnis global seperti bahasa Inggris dan China memungkinkan Anda untuk meraih peluang internasional. Bahasa adalah gateway untuk memahami budaya, jadi pembelajaran bahasa sangat penting.',
        'Kembangkan observasi dan wawasan. Kemampuan untuk memahami psikologi orang sangat penting. Berlatih mengamati perilaku dan kata-kata orang dalam kehidupan sehari-hari dan memikirkan apa yang mereka inginkan. Kemampuan ini membantu komunikasi dan membangun hubungan yang lebih efektif.',
        'Kembangkan keterampilan resolusi konflik. Belajarlah untuk memainkan peran sebagai mediator. Bangun kemampuan untuk memahami dan memediasi kedua pihak dalam situasi konflik. Kemampuan ini sangat penting dalam peran pemimpin tim atau manajer dan meningkatkan nilai Anda.',
        'Dapatkan pengalaman dalam pemasaran atau penjualan. Anda dapat membangun keterampilan komunikasi di lapangan. Pengalaman bertemu pelanggan secara langsung dan berkomunikasi dengan mereka dapat sangat meningkatkan kemampuan komunikasi Anda. Pengalaman ini sangat berharga dan dapat diterapkan di bidang apa pun di masa depan.',
        'Coba aktivitas di media atau penyiaran. Mereka memberikan panggung yang baik untuk mendemonstrasikan kemampuan Anda. Muncul di berbagai platform media seperti TV, radio, dan podcast untuk mempromosikan diri dan mendapatkan pengalaman. Pengalaman ini menjadi aset utama bagi karier Anda.',
        'Pertimbangkan bidang pendidikan atau pengajaran. Ini cocok untuk mentransmisikan pengetahuan. Sangat baik untuk bekerja sebagai dosen di universitas atau pusat pelatihan profesional atau membuat kursus online. Keterampilan penjelasan yang jelas Anda membantu banyak siswa, dan Anda dapat merasakan kepuasan besar sebagai pendidik.',
        'Pertimbangkan bekerja di lingkungan global. Keterampilan komunikasi internasional diperlukan. Pertimbangkan bekerja untuk perusahaan asing atau organisasi internasional, dan juga sangat baik untuk bekerja di luar negeri atau berpartisipasi dalam proyek internasional. Pengalaman internasional memperluas visi Anda dan dapat menciptakan peluang yang lebih besar.'
      ]
    },
    fortune: {
      success: { 
        ko: [
          '커뮤니케이션 분야에서 큰 성공을 이룰 가능성이 높습니다. 당신의 뛰어난 표현력과 공감 능력은 사람들과의 소통을 원활하게 만들어주며, 이러한 능력은 영업, 마케팅, 미디어 등 다양한 분야에서 큰 강점이 됩니다. 사람들과의 관계를 잘 구축하고 유지할 수 있는 능력은 당신의 성공을 이끌어가는 핵심 역량이 될 것입니다.',
          '많은 사람들과 좋은 관계를 맺을 수 있습니다. 당신의 사교성과 친근함은 사람들로 하여금 당신을 편안하게 느끼게 만들며, 자연스럽게 많은 사람들과 좋은 관계를 형성하게 됩니다. 이러한 광범위한 네트워크는 당신에게 다양한 기회와 도움을 가져다주며, 당신의 커리어 발전에 큰 자산이 됩니다.',
          '영업이나 마케팅에서 뛰어난 성과를 낼 수 있습니다. 당신의 설득력과 표현력은 영업 분야에서 매우 강력한 무기가 됩니다. 고객과의 관계를 잘 구축하고 그들의 니즈를 파악하여 적절한 솔루션을 제시할 수 있는 능력으로 높은 성과를 낼 수 있으며, 이는 경제적 성공으로도 이어질 것입니다.',
          '미디어 분야에서 인정받을 수 있습니다. 당신의 뛰어난 표현력과 카리스마는 방송이나 미디어 분야에서 매우 인정받을 수 있습니다. 많은 사람들에게 정보를 전달하고 감동을 주는 역할을 할 수 있으며, 이러한 경험은 당신의 명성과 경력을 높이는데 기여할 것입니다.',
          '교육이나 강의에서 성공할 수 있습니다. 당신의 명확한 전달 능력과 사람들을 이해시키는 능력은 교육자나 강사로서 매우 적합합니다. 복잡한 내용도 쉽고 명확하게 설명할 수 있어 많은 사람들이 당신의 강의를 좋아하게 되며, 교육 분야에서 뛰어난 성과를 낼 수 있습니다.',
          '협상과 중재에서 탁월한 결과를 만들 수 있습니다. 갈등 상황에서도 냉정하게 핵심을 파악하고 모두가 납득할 수 있는 해결책을 제시하는 능력은 조직 내외에서 높은 신뢰를 얻게 하며, 중요한 프로젝트를 성공으로 이끄는 원동력이 됩니다.',
          '브랜딩과 퍼스널 브랜드 구축에 강점을 보입니다. 당신의 스토리텔링과 일관된 메시지는 대중과 시장에서 강력한 인지도를 형성하게 하고, 장기적으로 안정적인 영향력과 비즈니스 기회를 만들어냅니다.',
          '대중연설과 프레젠테이션에서 두각을 나타낼 수 있습니다. 복잡한 내용을 쉽게 구조화하고 설득력 있게 전달하는 능력으로 청중의 신뢰와 공감을 이끌어내며, 중요한 의사결정에 영향을 미치는 구심점이 됩니다.',
          '디지털 커뮤니케이션 채널에서 빠르게 성장할 수 있습니다. 콘텐츠 기획과 커뮤니티 운영 역량을 바탕으로 온라인 플랫폼에서 영향력을 확장하며, 글로벌 시장에서도 경쟁력 있는 커뮤니케이터로 자리매김할 수 있습니다.',
          '파트너십과 네트워킹을 통해 기회를 확장합니다. 다양한 이해관계자와의 신뢰 기반 관계를 넓혀가며 협업을 성사시키고, 장기적인 성장과 성과를 이어갈 수 있는 생태계를 구축합니다.'
        ],
        en: [
          'You are highly likely to achieve major success in communication fields. Your excellent expression and empathy skills make interactions smooth, which becomes a strong advantage across sales, marketing, and media. Your ability to build and maintain relationships will be a core competency that drives your success.',
          'You can build strong relationships with many people. Your sociability and friendliness make others feel comfortable around you, naturally helping you form positive connections. This wide network brings opportunities and support, becoming a major asset for your career growth.',
          'You can produce outstanding results in sales or marketing. Your persuasion and articulation are powerful assets. By building trust with customers, identifying their needs, and proposing proper solutions, you can drive high performance that also translates into financial success.',
          'You can be recognized in media fields. Your delivery and charisma are highly valued in broadcasting and media. You can inform and move audiences, and such experiences will elevate your reputation and career.',
          'You can succeed in education or lecturing. Your clarity and ability to help others understand complex topics make you well-suited as an educator. Many people will appreciate your lectures, and you can achieve strong outcomes in the education space.',
          'You can excel in negotiation and mediation. Even in conflict, you can identify the essence and present solutions acceptable to all parties, earning trust inside and outside organizations and propelling key projects to success.',
          'You show strength in branding and personal brand building. Your storytelling and consistent messaging form strong market recognition, creating long-term influence and business opportunities.',
          'You can stand out in public speaking and presentations. You structure complexity simply and deliver convincingly, drawing trust and empathy from audiences and influencing critical decisions.',
          'You can grow rapidly on digital channels. With content planning and community management, you expand your presence on online platforms and compete as a communicator in global markets.',
          'You expand opportunities through partnerships and networking. You broaden trust-based relationships with stakeholders, enable collaborations, and build an ecosystem for sustainable growth and performance.'
        ], 
        ja: [
          'コミュニケーション分野で大きな成功を収める可能性が高いです。優れた表現力と共感力によって対人関係が円滑になり、営業・マーケティング・メディアなど幅広い領域で強みとなります。関係を構築・維持する能力は、あなたの成功を牽引する中核的な資質になります。',
          '多くの人々と良好な関係を築くことができます。社交性と親しみやすさにより相手は安心感を覚え、自然と良い関係が形成されます。広いネットワークは機会と支援をもたらし、キャリアの大きな資産になります。',
          '営業やマーケティングで卓越した成果を上げられます。説得力と表現力は強力な武器です。顧客との信頼関係を築き、ニーズを把握して最適解を示すことで高い成果を実現し、経済的成功にもつながります。',
          'メディア領域で評価されるでしょう。明瞭な伝達力とカリスマ性は放送・メディア分野で高く評価されます。情報を伝え人々を感動させる役割を担い、その経験は評判と経歴の向上に寄与します。',
          '教育や講義でも成功できます。分かりやすい説明と理解を促す力により教育者として適性があります。複雑な内容も平易に伝えられ、多くの人に支持され優れた成果を上げられます。',
          '交渉・仲裁で卓越した結果を生み出せます。対立局面でも本質を捉え、全員が納得できる解決策を提示し、組織内外で高い信頼を獲得して重要案件を成功に導きます。',
          'ブランディング・パーソナルブランディングに強みがあります。ストーリーテリングと一貫したメッセージで強固な認知を形成し、長期的な影響力とビジネス機会を創出します。',
          'スピーチやプレゼンで頭角を現します。複雑さを整理し説得力をもって届け、聴衆の信頼と共感を獲得し重要な意思決定に影響を与えます。',
          'デジタルチャネルで急速に成長できます。コンテンツ企画とコミュニティ運営を通じてオンラインで影響力を拡大し、グローバル市場でも競争力あるコミュニケーターになれます。',
          'パートナーシップとネットワーキングで機会を拡大します。利害関係者との信頼関係を広げ協業を実現し、持続的成長と成果のためのエコシステムを構築します。'
        ], 
        'zh-CN': [
          '你在沟通领域取得巨大成功的可能性很高。你出色的表达与共情能力让交流顺畅，这在销售、营销、媒体等多个领域都是强项。你构建并维护关系的能力将成为推动你成功的核心竞争力。',
          '你能与许多人建立良好关系。你的社交性与亲和力让人感到放松，自然而然形成积极的人际网络。这一广泛网络为你的职业发展带来机会与支持。',
          '你能在销售或营销中取得卓越成绩。你的说服力与表达力是强有力的武器。通过建立信任、识别用户需求并提出恰当方案，你将实现高绩效并转化为经济成功。',
          '你能在媒体领域获得认可。你清晰的传达力与个人魅力在广播与媒体中备受重视。你能够传递信息并打动人心，这些经验将提升你的声誉与职业高度。',
          '你能在教育或授课中取得成功。你清晰的表达与助人理解的能力使你非常适合成为教育者。你能够用通俗方式讲解复杂内容，赢得听众喜爱并取得优异成果。',
          '你在谈判与调解中能够取得出色结果。即使在冲突场景下，你也能抓住本质并提出各方可接受的解决方案，从而赢得组织内外的高度信任并推动关键项目成功。',
          '你在品牌与个人品牌打造上具备优势。你的故事叙述与一致的信息传递将形成强势认知，创造长期影响力与商业机会。',
          '你在公众演讲与演示中表现突出。你能将复杂问题结构化并有力呈现，赢得受众信任与共鸣，并影响关键决策。',
          '你能在数字渠道快速成长。凭借内容策划与社群运营，你在在线平台扩展影响力，并在全球市场保持沟通竞争力。',
          '你通过伙伴关系与社交网络拓展机会。你扩大与各方的信任关系，促成合作，构建可持续增长与成果的生态系统。'
        ], 
        'zh-TW': [
          '你在溝通領域取得巨大成功的可能性很高。你出色的表達與共感能力讓交流順暢，這在銷售、行銷、媒體等多個領域都是強項。你建立並維持關係的能力將成為推動你成功的核心競爭力。',
          '你能與許多人建立良好關係。你的社交性與親和力讓人感到放鬆，自然而然形成積極的人際網絡。這一廣泛網絡為你的職涯帶來機會與支持。',
          '你能在銷售或行銷中取得卓越成績。你的說服力與表達力是強而有力的武器。透過建立信任、掌握需求並提出恰當方案，你將實現高績效並轉化為經濟成功。',
          '你能在媒體領域獲得認可。你清晰的傳達與個人魅力在廣播與媒體中備受重視。你能傳遞資訊並打動人心，這些經驗將提升你的聲譽與職涯高度。',
          '你能在教育或授課中取得成功。你清晰的說明與助人理解的能力使你非常適合成為教育者。你能以淺顯方式講解複雜內容，贏得聽眾喜愛並獲得優異成果。',
          '你在談判與調解中能取得出色結果。即使在衝突場景下，你也能抓住本質並提出各方可接受的解方，因而贏得組織內外的高度信任並推動關鍵專案成功。',
          '你在品牌與個人品牌打造上具備優勢。你的故事敘述與一致訊息將形成強勢認知，創造長期影響力與商機。',
          '你在公開演講與簡報中表現突出。你能將複雜議題結構化並有力呈現，贏得受眾信任與共鳴，並影響關鍵決策。',
          '你能在數位管道快速成長。憑藉內容規劃與社群經營，你在線上平台擴展影響力，並在全球市場維持溝通競爭力。',
          '你透過夥伴關係與人脈網絡拓展機會。你擴大與各方的信任關係，促成合作，建立可持續成長與成果的生態系統。'
        ], 
        vi: [
          'Bạn có khả năng cao đạt được thành công lớn trong lĩnh vực giao tiếp. Khả năng diễn đạt và thấu cảm xuất sắc giúp tương tác trở nên trơn tru, trở thành lợi thế mạnh trong bán hàng, marketing và truyền thông. Năng lực xây dựng và duy trì mối quan hệ sẽ là năng lực cốt lõi thúc đẩy thành công của bạn.',
          'Bạn có thể xây dựng mối quan hệ tốt với nhiều người. Tính hoà đồng và sự thân thiện giúp người khác cảm thấy thoải mái, từ đó tự nhiên hình thành mạng lưới tích cực. Mạng lưới rộng này mang lại cơ hội và hỗ trợ cho sự phát triển sự nghiệp của bạn.',
          'Bạn có thể tạo ra thành tích xuất sắc trong bán hàng hoặc marketing. Sự thuyết phục và khả năng diễn đạt là vũ khí mạnh mẽ. Bằng việc xây dựng lòng tin, thấu hiểu nhu cầu và đề xuất giải pháp phù hợp, bạn đạt hiệu suất cao và chuyển hoá thành thành công tài chính.',
          'Bạn có thể được công nhận trong lĩnh vực truyền thông. Khả năng truyền đạt rõ ràng và sức hút cá nhân của bạn được đánh giá cao trong phát thanh và truyền hình. Bạn có thể truyền thông tin và truyền cảm hứng cho khán giả, từ đó nâng tầm danh tiếng và sự nghiệp.',
          'Bạn có thể thành công trong giáo dục hoặc giảng dạy. Khả năng trình bày rõ ràng và giúp người khác hiểu vấn đề phức tạp khiến bạn phù hợp với vai trò nhà giáo dục. Nhiều người sẽ yêu thích bài giảng của bạn và bạn đạt kết quả vượt trội trong giáo dục.',
          'Bạn có thể xuất sắc trong đàm phán và hoà giải. Ngay cả khi có xung đột, bạn vẫn nắm bắt được cốt lõi và đưa ra giải pháp mà các bên có thể chấp nhận, nhờ đó giành được niềm tin cao và thúc đẩy các dự án then chốt thành công.',
          'Bạn mạnh về xây dựng thương hiệu và thương hiệu cá nhân. Khả năng kể chuyện và thông điệp nhất quán của bạn tạo nên nhận diện mạnh mẽ, hình thành ảnh hưởng dài hạn và cơ hội kinh doanh.',
          'Bạn có thể nổi bật trong diễn thuyết và thuyết trình. Bạn cấu trúc vấn đề phức tạp một cách đơn giản và trình bày thuyết phục, từ đó nhận được niềm tin và sự đồng cảm của khán giả, ảnh hưởng đến các quyết định quan trọng.',
          'Bạn có thể tăng trưởng nhanh trên các kênh số. Với hoạch định nội dung và vận hành cộng đồng, bạn mở rộng hiện diện trên nền tảng trực tuyến và cạnh tranh như một nhà giao tiếp ở thị trường toàn cầu.',
          'Bạn mở rộng cơ hội qua quan hệ đối tác và mạng lưới. Bạn xây dựng quan hệ tin cậy với các bên liên quan, thúc đẩy hợp tác và kiến tạo hệ sinh thái cho tăng trưởng bền vững và thành tích lâu dài.'
        ], 
        id: [
          'Anda sangat berpeluang meraih kesuksesan besar di bidang komunikasi. Kemampuan ekspresi dan empati yang unggul membuat interaksi menjadi lancar, menjadi keunggulan kuat di penjualan, pemasaran, dan media. Kemampuan membangun dan menjaga relasi akan menjadi kompetensi inti yang mendorong kesuksesan Anda.',
          'Anda dapat membangun hubungan baik dengan banyak orang. Sifat sosial dan keakraban Anda membuat orang lain merasa nyaman, sehingga secara alami terbentuk jejaring positif. Jejaring luas ini membawa peluang dan dukungan, menjadi aset besar bagi perkembangan karier Anda.',
          'Anda dapat mencetak hasil unggul di penjualan atau pemasaran. Daya persuasi dan artikulasi Anda merupakan senjata yang kuat. Dengan membangun kepercayaan, memahami kebutuhan, dan menawarkan solusi tepat, Anda mendorong kinerja tinggi yang berujung pada keberhasilan finansial.',
          'Anda dapat diakui di ranah media. Kejelasan penyampaian dan karisma Anda sangat dihargai di penyiaran dan media. Anda mampu menyampaikan informasi dan menyentuh audiens, dan pengalaman ini akan mengangkat reputasi serta karier Anda.',
          'Anda dapat sukses di pendidikan atau pengajaran. Kejelasan penjelasan dan kemampuan membantu orang memahami topik kompleks membuat Anda cocok sebagai pendidik. Banyak orang akan menyukai materi Anda dan Anda meraih hasil kuat di bidang pendidikan.',
          'Anda unggul dalam negosiasi dan mediasi. Bahkan dalam konflik, Anda dapat menangkap esensi dan menawarkan solusi yang dapat diterima semua pihak, meraih kepercayaan tinggi dan mendorong proyek penting menuju keberhasilan.',
          'Anda kuat dalam membangun brand dan personal brand. Storytelling dan pesan yang konsisten membentuk pengenalan pasar yang kuat, menciptakan pengaruh jangka panjang serta peluang bisnis.',
          'Anda menonjol dalam pidato publik dan presentasi. Anda menstrukturkan kompleksitas dengan sederhana dan menyampaikannya secara meyakinkan, memperoleh kepercayaan dan empati audiens serta memengaruhi keputusan penting.',
          'Anda dapat tumbuh pesat di kanal digital. Dengan perencanaan konten dan pengelolaan komunitas, Anda memperluas kehadiran di platform online dan bersaing sebagai komunikator di pasar global.',
          'Anda memperluas peluang melalui kemitraan dan jaringan. Anda memperluas relasi berbasis kepercayaan dengan para pemangku kepentingan, memungkinkan kolaborasi, dan membangun ekosistem untuk pertumbuhan berkelanjutan dan kinerja jangka panjang.'
        ] 
      },
      hidden: { 
        ko: [
          '국제적인 활동가가 될 가능성이 있습니다. 당신의 다국어 능력과 문화적 이해력은 국제적인 활동에 적합합니다. 글로벌 환경에서 다양한 사람들과 소통하고 협력할 수 있는 능력은 국제기구나 글로벌 기업에서 성공할 수 있는 가능성을 만들어줍니다.',
          '평판이 좋은 전문가가 될 수 있습니다. 당신의 정직하고 신뢰할 수 있는 성격은 업계에서 좋은 평판을 만들어줍니다. 시간이 지날수록 당신의 평판은 더욱 좋아지며, 많은 사람들이 당신에게 기회와 도움을 주게 됩니다.',
          '사회적 영향력을 갖게 될 가능성이 있습니다. 당신의 목소리와 메시지는 많은 사람들에게 영향을 미칠 수 있습니다. 미디어를 통해 당신의 이야기를 전달하거나 사회적 이슈에 목소리를 내며 긍정적인 변화를 이끌어낼 수 있습니다.',
          '교육자로 많은 사람을 가르칠 수 있습니다. 당신의 명확한 설명 능력과 사람들과의 소통 능력은 교육자로서 매우 적합합니다. 많은 학생들이 당신의 강의를 듣고 배우며 성장하게 되며, 당신은 그들에게 영감을 주는 교사가 됩니다.',
          '장기적으로 지속 가능한 커리어를 쌓을 수 있습니다. 사람들과의 관계와 소통 능력은 시간이 지날수록 더욱 가치 있게 됩니다. 이러한 능력은 평생 동안 활용할 수 있으며, 다양한 분야에서 지속적으로 성공할 수 있는 기반이 됩니다.',
          '브랜드 아메바서더나 파트너십 매니저로 성장할 수 있습니다. 당신의 네트워킹과 관계 구축 능력은 기업 간 협력을 성사시키고, 장기적인 파트너십을 유지하는 핵심 역할을 수행하게 만들며, 조직의 전략적 성장을 이끌어냅니다.',
          '훌륭한 마케팅 전략가가 될 가능성이 있습니다. 시장 트렌드와 소비자 니즈를 꿰뚫고, 적절한 메시지와 채널을 통해 성과를 극대화하는 능력으로 브랜드 가치와 매출을 동시에 올릴 수 있습니다.',
          '언론과 미디어에서 영향력 있는 목소리를 내게 됩니다. 당신의 객관성과 설득력은 대중의 신뢰를 받으며, 중요한 사회 이슈를 다루고 공정한 여론 형성에 기여하는 저널리스트나 코멘테이터로 발전합니다.',
          '글로벌 팀과의 협업에서 핵심 역할을 맡게 됩니다. 문화적 차이를 이해하고 포괄적인 의사소통으로 다국적 프로젝트를 성공으로 이끌어내며, 국제 경영이나 비즈니스 개발에서 독보적인 전문성을 쌓습니다.',
          '데이터 기반 커뮤니케이션 전략을 수립할 능력이 탁월합니다. 분석과 스토리텔링을 결합해 정확하고 설득력 있는 전략으로 조직의 목표 달성률을 높이고, ROI가 명확한 마케팅과 프레젠테이션을 설계합니다.',
          '고객 성공(Customer Success) 분야에서 두각을 보입니다. 고객의 장기적 가치와 만족도를 높이는 커뮤니케이션 전략으로 이탈률을 낮추고, 지속적 성장과 리뷰·추천을 이끌어내는 핵심 인재가 됩니다.',
          '트레이너나 온보딩 전문가로 명성을 쌓습니다. 신규 입사자나 파트너를 효율적이고 즐겁게 조직에 통합하며, 환류와 개선을 반영해 체계적인 성장 프로그램을 만들어 사람과 조직 모두의 성과를 향상시킵니다.',
          '부모교육이나 패밀리 라이프 컨설팅 영역으로 확장할 가능성이 있습니다. 감정 기반 소통과 관계 조율 능력을 활용해 가족 간 대화, 교육, 역량 강화를 지원하며, 사회 전반의 관계 회복에 이바지합니다.',
          '디지털 명예와 평판 리스크 관리 전문가가 됩니다. 온라인 커뮤니케이션 트렌드를 선도하고, 위기 상황의 신속한 대응과 복구를 이끌며, 개인과 조직의 디지털 자산을 보호하고 가치를 극대화합니다.'
        ],
        en: [
          'You have the potential to become an international activist. Your multilingual abilities and cultural understanding suit international work. Your capacity to communicate and cooperate with diverse people in global settings creates success pathways in international organizations and multinational companies.',
          'You can become a reputable expert. Your honest and reliable character builds a strong industry reputation. Over time, it strengthens further, and many people offer you opportunities and support.',
          'You could gain social influence. Your voice and message can move many. Through media you share your story or address social issues, driving positive change.',
          'You can teach many as an educator. Your clear explanations and interpersonal skills fit education. Many students learn from your lectures and grow, making you an inspiring teacher.',
          'You can build a sustainable long-term career. Relationship and communication skills become more valuable over time. These abilities last a lifetime and form a foundation for ongoing success across fields.',
          'You can grow into a brand ambassador or partnership manager. Your networking and relationship-building skills help close inter-firm deals, maintain long-term partnerships, and drive strategic organizational growth.',
          'You have the potential to be an outstanding marketing strategist. You can boost brand value and revenue by identifying market trends, consumer needs, and maximizing performance through tailored messages and channels.',
          'Your voice gains influence in media and the press. Your objectivity and persuasiveness earn public trust, allowing you to develop as a journalist or commentator who covers important issues and supports fair public discourse.',
          'You take a central role in global team collaboration. Understanding cultural differences and inclusive communication help you steer multinational projects to success, building distinctive expertise in international management and business development.',
          'You excel at creating data-driven communication strategies. Combining analysis with storytelling, you design accurate, persuasive plans that lift organizational goal achievement and deliver clear ROI in marketing and presentations.',
          'You stand out in Customer Success. Strategies that increase long-term value and satisfaction lower churn, making you a key contributor to sustained growth, reviews, and referrals.',
          'You build renown as a trainer and onboarding specialist. Efficiently and positively integrating new hires and partners, you design systematic programs that reflect feedback and improvement, elevating outcomes for people and organizations.',
          'You may expand into parent education or family life consulting. Leveraging emotional communication and relationship coordination, you support family dialogue, education, and capacity building, contributing to broader relationship recovery.',
          'You become a specialist in digital reputation and risk management. Leading online trends, driving rapid crisis response and recovery, you protect and maximize the value of personal and organizational digital assets.'
        ], 
        ja: [
          'あなたには国際的な活動家になる可能性があります。多言語能力と文化的理解力が国際的な活動に適しています。グローバル環境で多様な人々とコミュニケーションを取り協力する能力は、国際機関やグローバル企業での成功の可能性を生み出します。',
          '評判の良い専門家になることができます。誠実で信頼できる性格は業界で良い評判を築きます。時間が経つにつれて評判はさらに良くなり、多くの人々があなたに機会と支援を提供します。',
          '社会的影響力を持つようになる可能性があります。あなたの声とメッセージは多くの人々に影響を与えることができます。メディアを通じてあなたの物語を伝えたり、社会的問題に声を上げたりして、積極的な変化をもたらすことができます。',
          '教育者として多くの人を教えることができます。明確な説明能力と人々とのコミュニケーション能力は教育者として非常に適しています。多くの学生があなたの講義を聞いて学び成長し、あなたは彼らにインスピレーションを与える教師になります。',
          '長期的に持続可能なキャリアを築くことができます。人々との関係とコミュニケーション能力は時間の経過とともにさらに価値あるものになります。これらの能力は生涯にわたって活用でき、様々な分野で継続的に成功する基盤となります。',
          'ブランドアンバサダーまたはパートナーシップマネージャーに成長する可能性があります。ネットワーキングと関係構築能力は企業間の協力を実現し、長期パートナーシップを維持し、組織の戦略的成長を牽引する重要な役割を果たします。',
          '優れたマーケティング戦略家になる可能性があります。市場トレンドと消費者ニーズを把握し、適切なメッセージとチャネルを通じて成果を最大化する能力により、ブランド価値と売上を同時に向上させることができます。',
          'メディアと報道で影響力のある声を持つようになります。あなたの客観性と説得力は大衆の信頼を得て、重要な社会問題を扱い公正な世論形成に貢献するジャーナリストやコメンテーターとして発展します。',
          'グローバルチームとの協力で中心的な役割を果たします。文化的差異を理解し包括的なコミュニケーションで多国籍プロジェクトを成功に導き、国際経営やビジネス開発で卓越した専門性を築きます。',
          'データ駆動型コミュニケーション戦略を策定する能力が優れています。分析とストーリーテリングを組み合わせ、正確で説得力のある戦略で組織の目標達成率を高め、ROIが明確なマーケティングとプレゼンテーションを設計します。'
        ], 
        'zh-CN': [
          '你有潜力成为国际活动家。你的多语言能力和文化理解力适合国际工作。在全球环境中与不同的人沟通与协作的能力，为你创造了在国际组织和跨国企业取得成功的途径。',
          '你可以成为声誉卓著的专家。你的诚实与可靠品格会树立良好的行业声誉。随时间推移，它会进一步强化，许多人会向你提供机会与支持。',
          '你可能获得社会影响力。你的声音与信息能影响许多人。通过媒体分享你的故事或回应社会议题，你能推动积极变化。',
          '你能作为教育者教授许多人。你清晰的解释与沟通能力很适合教育角色。很多学生会从你的课程中学习与成长，你将成为一位启发人的教师。',
          '你能建立可持续的长期职业。关系与沟通技能会随时间变得更有价值。这些能力可以终身使用，并在多个领域持续成功的基础。',
          '你可以成长为品牌大使或合作伙伴经理。你的社交与关系建设能力将促成组织间协作，维系长期伙伴关系，并驱动战略性组织增长。',
          '你有潜力成为出色的营销策略师。通过把握市场趋势、消费者需求，并借助合适信息与渠道最大化成果，你能够同时提升品牌价值与收入。',
          '你在媒体与新闻界将拥有有影响力的声音。你的客观性与说服力赢得公众信任，使你作为记者或评论员发展，处理重要社会议题并支持公正公共讨论。',
          '你将在全球化团队协作中担任核心角色。理解文化差异并以包容性沟通引导多国项目取得成功，在国际管理与业务发展领域积累独特专长。',
          '你擅长制定数据驱动的沟通策略。结合分析与叙事，你设计准确、有说服力的方案，提高组织目标达成率并交付明确的营销与展示投资回报。'
        ], 
        'zh-TW': [
          '你有潛力成為國際活動家。你的多語言能力和文化理解力適合國際工作。在全球環境中與不同的人溝通與協作的能力，為你創造了在國際組織和跨國企業取得成功的途徑。',
          '你可以成為聲譽卓著的專家。你的誠實與可靠品格會樹立良好的行業聲譽。隨時間推移，它會進一步強化，許多人會向你提供機會與支持。',
          '你可能獲得社會影響力。你的聲音與信息能影響許多人。通過媒體分享你的故事或回應社會議題，你能推動積極變化。',
          '你能作為教育者教授許多人。你清晰的解釋與溝通能力很適合教育角色。很多學生會從你的課程中學習與成長，你將成為一位啟發人的教師。',
          '你能建立可持續的長期職涯。關係與溝通技能會隨時間變得更有價值。這些能力可以終身使用，並在在多個領域持續成功的基礎。',
          '你可以成長為品牌大使或合作夥伴經理。你的社交與關係建設能力將促成組織間協作，維繫長期夥伴關係，並驅動戰略性組織增長。',
          '你有潛力成為出色的行銷策略師。透過把握市場趨勢、消費者需求，並藉助合適信息與渠道最大化成果，你能夠同時提升品牌價值與收入。',
          '你在媒體與新聞界將擁有有影響力的聲音。你的客觀性與說服力贏得公眾信任，使你作為記者或評論員發展，處理重要社會議題並支持公正公共討論。',
          '你將在全球化團隊協作中擔任核心角色。理解文化差異並以包容性溝通引導多國專案取得成功，在國際管理與業務發展領域積累獨特專長。',
          '你擅長制定數據驅動的溝通策略。結合分析與敘事，你設計準確、有說服力的方案，提高組織目標達成率並交付明確的行銷與展示投資回報。'
        ], 
        vi: [
          'Bạn có tiềm năng trở thành nhà hoạt động quốc tế. Khả năng đa ngôn ngữ và hiểu biết văn hoá phù hợp với hoạt động quốc tế. Năng lực giao tiếp và hợp tác với nhiều người trong môi trường toàn cầu tạo ra con đường thành công trong các tổ chức quốc tế và công ty đa quốc gia.',
          'Bạn có thể trở thành chuyên gia có danh tiếng. Tính cách trung thực và đáng tin cậy xây dựng uy tín ngành mạnh mẽ. Theo thời gian, nó càng củng cố, và nhiều người cung cấp cơ hội và hỗ trợ cho bạn.',
          'Bạn có thể có ảnh hưởng xã hội. Tiếng nói và thông điệp của bạn có thể tác động đến nhiều người. Thông qua phương tiện truyền thông, bạn chia sẻ câu chuyện của mình hoặc giải quyết các vấn đề xã hội, thúc đẩy sự thay đổi tích cực.',
          'Bạn có thể dạy nhiều người với tư cách là nhà giáo dục. Kỹ năng giải thích rõ ràng và kỹ năng giao tiếp cá nhân phù hợp với giáo dục. Nhiều sinh viên học từ bài giảng của bạn và lớn lên, làm cho bạn trở thành một giáo viên truyền cảm hứng.',
          'Bạn có thể xây dựng một sự nghiệp dài hạn bền vững. Kỹ năng xây dựng mối quan hệ và giao tiếp trở nên có giá trị hơn theo thời gian. Những khả năng này kéo dài suốt đời và tạo thành nền tảng cho thành công liên tục trên các lĩnh vực.'
        ], 
        id: [
          'Anda memiliki potensi menjadi aktivis internasional. Kemampuan multibahasa dan pemahaman budaya Anda cocok untuk pekerjaan internasional. Kemampuan Anda untuk berkomunikasi dan bekerja sama dengan orang-orang beragam di lingkungan global menciptakan jalur kesuksesan di organisasi internasional dan perusahaan multinasional.',
          'Anda dapat menjadi ahli bereputasi baik. Karakter jujur dan andal Anda membangun reputasi industri yang kuat. Seiring waktu, semakin menguat, dan banyak orang menawarkan peluang dan dukungan kepada Anda.',
          'Anda dapat memperoleh pengaruh sosial. Suara dan pesan Anda dapat mempengaruhi banyak orang. Melalui media, Anda berbagi cerita atau mengatasi masalah sosial, mendorong perubahan positif.',
          'Anda dapat mengajar banyak orang sebagai pendidik. Keterampilan penjelasan yang jelas dan keterampilan interpersonal Anda cocok untuk pendidikan. Banyak siswa belajar dari kuliah Anda dan tumbuh, menjadikan Anda guru yang menginspirasi.',
          'Anda dapat membangun karier jangka panjang yang berkelanjutan. Keterampilan hubungan dan komunikasi menjadi lebih berharga dari waktu ke waktu. Kemampuan ini bertahan seumur hidup dan membentuk fondasi kesuksesan berkelanjutan di berbagai bidang.'
        ] 
      }
    }
  },
  {
    id: 5,
    title: { ko: '조직가형', en: 'Organizer Type', ja: '組織者型', 'zh-CN': '组织者型', 'zh-TW': '組織者型', vi: 'Kiểu Tổ Chức', id: 'Tipe Organizer' },
    description: {
      ko: [
        '당신의 얼굴은 체계적이고 조직적인 면모를 보여줍니다. 일을 계획적으로 진행하고 정리하는 능력이 뛰어납니다.',
        '꼼꼼함과 신뢰성이 얼굴에 드러납니다. 세부 사항을 놓치지 않고 완벽하게 처리하는 성향이 강합니다.',
        '시간 관리와 효율성을 중시하는 얼굴입니다. 업무를 체계적으로 처리하고 일정을 잘 관리합니다.',
        '책임감이 강하고 신뢰할 수 있는 인상입니다. 맡은 일을 완벽하게 수행하는 능력이 있습니다.',
        '안정성과 순서를 중요하게 생각합니다. 변화보다는 체계를 선호하는 성향이 있습니다.',
        '조화롭고 균형 잡힌 얼굴입니다. 여러 요소를 조율하고 조화시키는 능력이 뛰어납니다.',
        '인내심과 끈기가 있어 어려운 일도 꾸준히 해낼 수 있습니다. 포기하지 않고 끝까지 완수합니다.',
        '예측 가능하고 안정적인 성향을 보입니다. 계획에 따라 진행하는 것을 좋아합니다.',
        '협력과 조율 능력이 뛰어납니다. 팀 내에서 화합을 만들어내고 협업을 잘 합니다.',
        '기록과 정리를 잘하는 성격입니다. 문서화와 체계화에 능숙합니다.'
      ],
      en: [
        'Your face shows systematic and organizational traits. You have excellent ability to proceed methodically and organize tasks.',
        'Carefulness and reliability are evident in your face. You have a strong tendency to perfectly handle details without missing anything.',
        'Your face emphasizes time management and efficiency. You systematically handle work and manage schedules well.',
        'You give an impression of strong responsibility and trustworthiness. You have the ability to perfectly perform assigned tasks.',
        'You value stability and order. You have a tendency to prefer systems over change.',
        'Your face is harmonious and balanced. You have excellent ability to coordinate and harmonize various elements.',
        'You have patience and perseverance, enabling you to consistently accomplish difficult tasks. You don\'t give up and complete things to the end.',
        'You show predictable and stable tendencies. You like to proceed according to plans.',
        'You have excellent cooperation and coordination abilities. You create harmony within teams and collaborate well.',
        'You have a personality good at recording and organizing. You are skilled at documentation and systematization.'
      ], 
      ja: [
        'あなたの顔は体系的で組織的な特徴を示しています。計画的に作業を進め整理する能力に優れています。',
        'きめ細かさと信頼性が顔に現れています。細部を漏らさず完璧に処理する傾向が強いです。',
        '時間管理と効率を重視する顔です。業務を体系的に処理しスケジュールをよく管理します。',
        '責任感が強く信頼できる印象です。担当業務を完璧に遂行する能力があります。',
        '安定性と順序を重要視します。変化よりも体系を好む傾向があります。',
        '調和が取れバランスの取れた顔です。様々な要素を調整し調和させる能力に優れています。',
        '忍耐力と粘り強さがあり困難なことも着実にやり遂げられます。諦めず最後まで完遂します。',
        '予測可能で安定した傾向を示します。計画に従って進めることを好みます。',
        '協力と調整能力に優れています。チーム内で和を生み出し協働をよくします。',
        '記録と整理が上手な性格です。文書化と体系化に熟達しています。'
      ], 
      'zh-CN': [
        '你的面相体现出系统性与组织性特征。你在有条不紊推进与整理任务上表现突出。',
        '谨慎与可靠性在面相中显现。你倾向妥善处理细节、不遗漏任何事物。',
        '你的面相强调时间管理与效率。你系统化处理工作并妥善管理日程。',
        '你呈现强烈的责任感与可信印象。你具备完美执行所分配任务的能力。',
        '你重视稳定性与秩序。你偏好体系而非变化。',
        '你的面相和谐且平衡。你在协调与整合不同要素上表现突出。',
        '你具备耐心与坚持力，能持续完成困难任务。你不放弃并坚持到底。',
        '你呈现可预测与稳定的倾向。你偏好按计划推进。',
        '你拥有出色的合作与协调能力。你在团队中营造和谐并善于协作。',
        '你具备善于记录与整理的个性。你在文档化与系统化上表现突出。'
      ], 
      'zh-TW': [
        '你的面相體現出系統性與組織性特徵。你在有條不紊推進與整理任務上表現突出。',
        '謹慎與可靠性在面相中顯現。你傾向妥善處理細節、不遺漏任何事物。',
        '你的面相強調時間管理與效率。你系統化處理工作並妥善管理日程。',
        '你呈現強烈的責任感與可信印象。你具備完美執行所分配任務的能力。',
        '你重視穩定性與秩序。你偏好體系而非變化。',
        '你的面相和諧且平衡。你在協調與整合不同要素上表現突出。',
        '你具備耐心與堅持力，能持續完成困難任務。你不放棄並堅持到底。',
        '你呈現可預測與穩定的傾向。你偏好按計劃推進。',
        '你擁有出色的合作與協調能力。你在團隊中營造和諧並善於協作。',
        '你具備善於記錄與整理的個性。你在文檔化與系統化上表現突出。'
      ], 
      vi: [
        'Khuôn mặt bạn thể hiện những đặc điểm có hệ thống và tổ chức. Bạn có khả năng xuất sắc tiến hành một cách có phương pháp và tổ chức các nhiệm vụ.',
        'Sự cẩn thận và đáng tin cậy rõ ràng trên khuôn mặt của bạn. Bạn có xu hướng mạnh mẽ xử lý hoàn hảo các chi tiết mà không bỏ sót điều gì.',
        'Khuôn mặt bạn nhấn mạnh quản lý thời gian và hiệu quả. Bạn xử lý công việc một cách có hệ thống và quản lý lịch trình tốt.',
        'Bạn tạo ấn tượng về trách nhiệm và đáng tin cậy mạnh mẽ. Bạn có khả năng thực hiện hoàn hảo các nhiệm vụ được giao.',
        'Bạn coi trọng sự ổn định và trật tự. Bạn có xu hướng thích hệ thống hơn thay đổi.',
        'Khuôn mặt bạn hài hòa và cân đối. Bạn có khả năng xuất sắc phối hợp và hài hòa các yếu tố khác nhau.',
        'Bạn có sự kiên nhẫn và bền bỉ, cho phép bạn liên tục hoàn thành các nhiệm vụ khó khăn. Bạn không từ bỏ và hoàn thành mọi việc đến cùng.',
        'Bạn thể hiện xu hướng có thể dự đoán và ổn định. Bạn thích tiến hành theo kế hoạch.',
        'Bạn có khả năng hợp tác và điều phối xuất sắc. Bạn tạo ra sự hài hòa trong nhóm và cộng tác tốt.',
        'Bạn có tính cách tốt trong ghi chép và tổ chức. Bạn thành thạo trong việc tài liệu hóa và hệ thống hóa.'
      ], 
      id: [
        'Wajah Anda menunjukkan ciri-ciri sistematis dan organisasi. Anda memiliki kemampuan luar biasa untuk melanjutkan secara metodis dan mengorganisasi tugas.',
        'Kehati-hatian dan keandalan jelas terlihat di wajah Anda. Anda memiliki kecenderungan yang kuat untuk menangani detail dengan sempurna tanpa melewatkan apa pun.',
        'Wajah Anda menekankan manajemen waktu dan efisiensi. Anda menangani pekerjaan secara sistematis dan mengelola jadwal dengan baik.',
        'Anda memberikan kesan tanggung jawab dan keandalan yang kuat. Anda memiliki kemampuan untuk melaksanakan tugas yang diberikan dengan sempurna.',
        'Anda menghargai stabilitas dan tatanan. Anda memiliki kecenderungan untuk lebih menyukai sistem daripada perubahan.',
        'Wajah Anda harmonis dan seimbang. Anda memiliki kemampuan luar biasa untuk mengoordinasikan dan mengharmonisasikan berbagai elemen.',
        'Anda memiliki kesabaran dan ketekunan, memungkinkan Anda untuk secara konsisten menyelesaikan tugas sulit. Anda tidak menyerah dan menyelesaikan hal-hal sampai akhir.',
        'Anda menunjukkan kecenderungan yang dapat diprediksi dan stabil. Anda suka melanjutkan sesuai dengan rencana.',
        'Anda memiliki kemampuan kerjasama dan koordinasi yang luar biasa. Anda menciptakan harmoni dalam tim dan berkolaborasi dengan baik.',
        'Anda memiliki kepribadian yang pandai mencatat dan mengorganisir. Anda terampil dalam dokumentasi dan sistematisasi.'
      ]
    },
    emoji: '📋',
    scoreRange: [50, 59],
    strengths: { 
      ko: ['체계성', '정리능력', '책임감', '신뢰성', '꼼꼼함', '시간관리', '조율능력', '협력성', '인내심', '안정성'], 
      en: ['Organization', 'Management', 'Responsibility', 'Reliability', 'Detail', 'Time', 'Coordination', 'Cooperation', 'Patience', 'Stability'], 
      ja: ['体系性', '整理能力', '責任感', '信頼性', 'きめ細かさ', '時間管理', '調整能力', '協力性', '忍耐力', '安定性'], 
      'zh-CN': ['系统性', '整理能力', '责任感', '可靠性', '细致', '时间管理', '协调能力', '合作性', '耐心', '稳定性'], 
      'zh-TW': ['系統性', '整理能力', '責任感', '可靠性', '細緻', '時間管理', '協調能力', '合作性', '耐心', '穩定性'], 
      vi: ['Tổ chức', 'Quản lý', 'Trách nhiệm', 'Đáng tin', 'Chi tiết', 'Thời gian', 'Phối hợp', 'Hợp tác', 'Kiên nhẫn', 'Ổn định'], 
      id: ['Organisasi', 'Manajemen', 'Tanggung jawab', 'Keandalan', 'Detail', 'Waktu', 'Koordinasi', 'Kerjasama', 'Kesabaran', 'Stabilitas'] 
    },
    recommendations: { 
      ko: ['행정직', '문서관리자', '비서', '회계사', '재무담당자', '인사담당자', '총무', '서기', '기록보관자', '일정관리자'], 
      en: ['Administrator', 'Document Manager', 'Secretary', 'Accountant', 'Financial Officer', 'HR Officer', 'General Affairs', 'Clerk', 'Archivist', 'Scheduler'], 
      ja: [], 'zh-CN': [], 'zh-TW': [], vi: [], id: [] 
    },
    personality: { 
      ko: [
        '체계적이고 조직적인 성격입니다.',
        '꼼꼼하고 정확한 작업을 선호합니다.',
        '책임감이 강하고 신뢰할 수 있습니다.',
        '시간 관리를 잘합니다.',
        '계획에 따라 일을 진행합니다.',
        '안정적인 환경을 선호합니다.',
        '협력과 조화를 중시합니다.',
        '인내심과 끈기가 있습니다.',
        '정리와 문서화에 능숙합니다.',
        '신뢰할 수 있는 동료가 됩니다.'
      ],
      en: [
        'You have a systematic and organized personality.',
        'You prefer careful and accurate work.',
        'You have strong responsibility and are trustworthy.',
        'You manage time well.',
        'You proceed with work according to plans.',
        'You prefer stable environments.',
        'You value cooperation and harmony.',
        'You have patience and perseverance.',
        'You are skilled at organizing and documentation.',
        'You become a reliable colleague.'
      ], 
      ja: [
        '体系的で組織的な性格です。',
        'きめ細かく正確な作業を好みます。',
        '責任感が強く信頼できます。',
        '時間管理をよくします。',
        '計画に従って仕事を進めます。',
        '安定した環境を好みます。',
        '協力と調和を重視します。',
        '忍耐力と粘り強さがあります。',
        '整理と文書化に熟達しています。',
        '信頼できる同僚になります。'
      ], 
      'zh-CN': [
        '你拥有系统与组织的个性。',
        '你偏好细致而准确的工作。',
        '你有强烈的责任感且值得信赖。',
        '你善于时间管理。',
        '你按计划推进工作。',
        '你偏好稳定的环境。',
        '你重视合作与和谐。',
        '你具备耐心与坚持力。',
        '你擅长整理与文档化。',
        '你会成为可靠的同事。'
      ], 
      'zh-TW': [
        '你擁有系統與組織的個性。',
        '你偏好細緻而準確的工作。',
        '你有強烈的責任感且值得信賴。',
        '你善於時間管理。',
        '你按計劃推進工作。',
        '你偏好穩定的環境。',
        '你重視合作與和諧。',
        '你具備耐心與堅持力。',
        '你擅長整理與文檔化。',
        '你會成為可靠的同事。'
      ], 
      vi: [
        'Bạn có tính cách có hệ thống và tổ chức.',
        'Bạn thích công việc cẩn thận và chính xác.',
        'Bạn có trách nhiệm mạnh mẽ và đáng tin cậy.',
        'Bạn quản lý thời gian tốt.',
        'Bạn tiến hành công việc theo kế hoạch.',
        'Bạn thích môi trường ổn định.',
        'Bạn coi trọng hợp tác và hài hòa.',
        'Bạn có kiên nhẫn và bền bỉ.',
        'Bạn thành thạo trong tổ chức và tài liệu hóa.',
        'Bạn trở thành một đồng nghiệp đáng tin cậy.'
      ], 
      id: [
        'Anda memiliki kepribadian yang sistematis dan terorganisir.',
        'Anda lebih suka pekerjaan yang hati-hati dan akurat.',
        'Anda memiliki tanggung jawab yang kuat dan dapat dipercaya.',
        'Anda mengelola waktu dengan baik.',
        'Anda melanjutkan pekerjaan sesuai rencana.',
        'Anda lebih suka lingkungan yang stabil.',
        'Anda menghargai kerja sama dan harmoni.',
        'Anda memiliki kesabaran dan ketekunan.',
        'Anda terampil dalam pengorganisasian dan dokumentasi.',
        'Anda menjadi rekan kerja yang dapat diandalkan.'
      ]
    },
    advice: { 
      ko: [
        '행정이나 관리 분야에서 전문성을 키우세요. 행정 관리, 문서 관리, 일정 관리 등의 분야에서 전문적인 능력을 키워야 합니다. 이러한 능력들은 어느 조직에서나 필요하며, 당신의 가치를 높여줄 수 있습니다. 관련 교육이나 훈련을 받으며 지속적으로 발전시켜 나가야 합니다.',
        '체계화된 업무 환경에서 경력을 쌓으세요. 큰 회사나 정부 기관 등 체계화된 업무 환경에서 경력을 쌓으면 당신의 조직 능력을 더욱 발전시킬 수 있습니다. 이러한 환경에서는 규칙과 체계가 명확하므로 당신의 장점을 최대한 발휘할 수 있습니다.',
        '자격증 취득이 도움이 됩니다. 행정 관리, 회계, 재무 관리 등 관련 자격증을 취득하면 전문성을 증명할 수 있습니다. 자격증은 당신의 능력을 객관적으로 보여주는 수단이 되며, 더 나은 직장을 찾는데 도움이 됩니다.',
        '컴퓨터 스킬을 익히세요. 문서 작성, 스프레드시트, 데이터베이스 관리 등 컴퓨터 스킬은 매우 중요합니다. 특히 Excel, 데이터 분석 도구, 문서 관리 시스템 등을 능숙하게 다룰 수 있으면 업무 효율성이 크게 향상됩니다.',
        '디테일한 관리 능력을 강화하세요. 작은 세부사항까지 놓치지 않고 관리할 수 있는 능력을 키워야 합니다. 체크리스트를 만들고 시스템을 구축하여 업무를 체계적으로 관리하는 방법을 익혀야 합니다.',
        '안정적인 조직에서 근무를 고려하세요. 큰 기업이나 정부 기관 등 안정적인 조직에서 근무하면 장기적인 경력을 쌓을 수 있습니다. 이러한 조직에서는 변화가 적고 예측 가능한 환경이므로 당신에게 가장 적합합니다.',
        '회계나 재무 분야를 배워보세요. 회계나 재무 관리 지식은 행정 업무에 매우 유용합니다. 재무 정보를 이해하고 관리할 수 있는 능력은 당신의 전문성을 높여주며, 더 많은 기회를 만들 수 있습니다.',
        '효율적인 워크플로우를 설계하는 능력을 키우세요. 업무를 더 효율적으로 처리할 수 있도록 워크플로우를 설계하고 개선하는 능력을 키워야 합니다. 이러한 능력은 조직 전체의 효율성을 높이는 데 기여하며, 당신의 가치를 높여줍니다.',
        '노하우를 축적하여 전문가가 되세요. 경력을 쌓으면서 각종 업무의 노하우를 축적하고 정리해야 합니다. 이러한 노하우는 당신만의 자산이 되며, 전문가로서 인정받는데 중요한 역할을 합니다.',
        '신뢰성을 최우선으로 생각하세요. 약속한 일은 반드시 지키고, 맡은 업무는 완벽하게 수행하는 것이 중요합니다. 신뢰성은 한 번 잃으면 다시 찾기 어렵기 때문에 항상 최우선으로 생각하고 행동해야 합니다.'
      ],
      en: [
        'Build expertise in administration or management. You should develop professional abilities in areas such as administrative management, document management, and scheduling. These skills are needed in any organization and can enhance your value. Receive relevant education and training and continually improve.',
        'Build your career in a structured work environment. Working in large companies or government agencies helps develop your organizational skills. In such environments, rules and systems are clear, allowing you to maximize your strengths.',
        'Certification helps. Earning certifications in administrative management, accounting, and financial management demonstrates expertise. Certifications provide an objective measure of ability and aid in finding better positions.',
        'Learn computer skills. Skills like document creation, spreadsheets, and database management are important. Mastery of Excel, data analysis tools, and document management systems can significantly improve work efficiency.',
        'Strengthen detailed management skills. You should develop the ability to manage even small details. Learn to build checklists and systems for systematic work management.',
        'Consider working in a stable organization. Stable positions in large companies or government agencies enable long-term career building. These environments offer predictable settings with minimal change, ideal for your profile.',
        'Study accounting or finance. Knowledge of accounting and financial management is highly useful in administrative work. The ability to understand and manage financial information enhances your expertise and opens more opportunities.',
        'Develop the ability to design efficient workflows. Build skills to design and improve workflows for more effective task handling. These abilities contribute to overall organizational efficiency and raise your value.',
        'Accumulate know-how to become an expert. Build and organize professional knowledge while developing your career. This knowledge becomes your asset and is crucial for recognition as an expert.',
        'Prioritize reliability above all. It is essential to honor commitments and execute assigned tasks perfectly. Reliability, once lost, is difficult to regain, so always think and act with it as your top priority.'
      ], 
      ja: [
        '行政や管理の分野で専門性を高めます。行政管理、文書管理、スケジュール管理などの分野で専門的な能力を開発します。これらの能力はどの組織でも必要とされ、あなたの価値を高めます。関連する教育や訓練を受け、継続的に発展させます。',
        '体系化された職場環境でキャリアを積みます。大きな会社や政府機関などでキャリアを積むと組織能力をさらに発展させます。このような環境では規則と体系が明確なため、あなたの長所を最大限に発揮できます。',
        '資格取得が役立ちます。行政管理、会計、財務管理などの関連資格を取得すると専門性を証明できます。資格は能力を客観的に示す手段となり、より良い職場を見つけるのに役立ちます。',
        'コンピュータスキルを習得します。文書作成、スプレッドシート、データベース管理などのスキルは重要です。特にExcel、データ分析ツール、文書管理システムなどを熟練すると業務効率が大幅に向上します。',
        '詳細な管理能力を強化します。小さな詳細まで見落とさず管理できる能力を開発します。チェックリストを作成しシステムを構築し、業務を体系的に管理する方法を習得します。',
        '安定した組織での勤務を検討します。大きな企業や政府機関などで勤務すると長期的なキャリアを積めます。このような組織では変化が少なく予測可能な環境のため、あなたに最も適しています。',
        '会計や財務の分野を学びます。会計や財務管理の知識は行政業務に非常に有用です。財務情報を理解し管理できる能力はあなたの専門性を高め、より多くの機会を創出します。',
        '効率的なワークフローを設計する能力を開発します。業務をより効率的に処理できるようワークフローを設計・改善する能力を高めます。この能力は組織全体の効率向上に貢献し、あなたの価値を高めます。',
        'ノウハウを蓄積して専門家になります。キャリアを積む際、様々な業務のノウハウを蓄積し整理します。このノウハウはあなただけの資産となり、専門家として認められる重要な役割を果たします。',
        '信頼性を最優先に考えます。約束したことは必ず守り、担当業務は完璧に遂行することが重要です。信頼性は一度失うと取り戻すのが困難なため、常に最優先に考え行動します。'
      ], 
      'zh-CN': [
        '在行政或管理领域培养专业能力。你应在行政管理、文档管理、日程管理等领域发展专业能力。这些能力在所有组织都必需，并能提升你的价值。接受相关教育或培训并持续进步。',
        '在结构化工作环境中积累经验。在大型企业或政府机构工作有助于发展组织技能。这类环境规则与系统清晰，能最大化你的优势。',
        '获取资格有帮助。取得行政管理、会计、财务管理等相关资格可证明专业能力。资格作为能力的客观指标，有助于寻找更佳职位。',
        '学习计算机技能。文档创建、电子表格、数据库管理等技能很重要。熟练使用Excel、数据分析工具与文档管理系统可显著提升工作效率。',
        '强化细节管理能力。培养不遗漏细小细节的管理能力。学会建立清单与系统以系统化管理工作。',
        '考虑在稳定的组织任职。在大型企业或政府机构等稳定组织工作可实现长期职业发展。这些组织变化少、可预测，最适合你。',
        '学习会计或财务。会计与财务管理知识在行政工作中非常有用。理解与管理财务信息的能力可提升专业度并创造更多机会。',
        '培养设计高效工作流的能力。提升设计与改进工作流的技能以更高效处理工作。这些能力有助于提高整体效率并提升你的价值。',
        '积累经验知识成为专家。在职业发展中积累并整理各类工作的经验知识。这些知识成为你的资产，对获得专家认可很重要。',
        '将可靠性视为最优先。信守承诺并完美执行分配的任务至关重要。可靠性一旦失去难以恢复，因此始终将其视为最高优先级。'
      ], 
      'zh-TW': [
        '在行政或管理領域培養專業能力。你應在行政管理、文檔管理、日程管理等功能發展專業能力。這些能力在所有組織都必需，並能提升你的價值。接受相關教育或培訓並持續進步。',
        '在結構化工作環境中累積經驗。在大型企業或政府機構工作有助於發展組織技能。這類環境規則與系統清晰，能最大化你的優勢。',
        '取得資格有幫助。獲得行政管理、會計、財務管理等相關資格可證明專業能力。資格作為能力的客觀指標，有助於尋找更佳職位。',
        '學習電腦技能。文檔創建、電子表格、數據庫管理等技能很重要。熟練使用Excel、數據分析工具與文檔管理系統可顯著提升工作效率。',
        '強化細節管理能力。培養不遺漏細小細節的管理能力。學會建立清單與系統以系統化管理工作。',
        '考慮在穩定的組織任職。在大型企業或政府機構等穩定組織工作可實現長期職涯發展。這些組織變化少、可預測，最適合你。',
        '學習會計或財務。會計與財務管理知識在行政工作中非常有用。理解與管理財務資訊的能力可提升專業度並創造更多機會。',
        '培養設計高效工作流程的能力。提升設計與改進工作流程的技能以更高效處理工作。這些能力有助於提高整體效率並提升你的價值。',
        '累積經驗知識成為專家。在職業發展中累積並整理各類工作的經驗知識。這些知識成為你的資產，對獲得專家認可很重要。',
        '將可靠性視為最優先。信守承諾並完美執行分配的任務至關重要。可靠性一旦失去難以恢復，因此始終將其視為最高優先級。'
      ], 
      vi: [
        'Xây dựng chuyên môn trong hành chính hoặc quản lý. Bạn nên phát triển khả năng chuyên nghiệp trong các lĩnh vực như quản lý hành chính, quản lý tài liệu và lập lịch. Những kỹ năng này cần thiết ở mọi tổ chức và có thể nâng cao giá trị của bạn. Nhận giáo dục và đào tạo liên quan và cải thiện liên tục.',
        'Xây dựng sự nghiệp trong môi trường làm việc có cấu trúc. Làm việc trong các công ty lớn hoặc cơ quan chính phủ giúp phát triển kỹ năng tổ chức của bạn. Trong những môi trường như vậy, quy tắc và hệ thống rõ ràng, cho phép bạn tối đa hóa thế mạnh của mình.',
        'Chứng chỉ có ích. Kiếm chứng chỉ trong quản lý hành chính, kế toán và quản lý tài chính chứng minh chuyên môn. Chứng chỉ cung cấp thước đo khách quan về khả năng và hỗ trợ tìm vị trí tốt hơn.',
        'Học kỹ năng máy tính. Các kỹ năng như tạo tài liệu, bảng tính và quản lý cơ sở dữ liệu rất quan trọng. Thành thạo Excel, công cụ phân tích dữ liệu và hệ thống quản lý tài liệu có thể cải thiện đáng kể hiệu quả công việc.',
        'Tăng cường kỹ năng quản lý chi tiết. Bạn nên phát triển khả năng quản lý ngay cả các chi tiết nhỏ. Học cách xây dựng danh sách kiểm tra và hệ thống để quản lý công việc có hệ thống.',
        'Cân nhắc làm việc trong một tổ chức ổn định. Các vị trí ổn định trong các công ty lớn hoặc cơ quan chính phủ cho phép xây dựng sự nghiệp dài hạn. Những môi trường này cung cấp cài đặt dự đoán được với thay đổi tối thiểu, lý tưởng cho hồ sơ của bạn.',
        'Học kế toán hoặc tài chính. Kiến thức về kế toán và quản lý tài chính rất hữu ích trong công việc hành chính. Khả năng hiểu và quản lý thông tin tài chính nâng cao chuyên môn của bạn và mở ra nhiều cơ hội hơn.',
        'Phát triển khả năng thiết kế quy trình làm việc hiệu quả. Xây dựng kỹ năng thiết kế và cải thiện quy trình làm việc để xử lý tác vụ hiệu quả hơn. Những khả năng này góp phần vào hiệu quả tổ chức tổng thể và nâng cao giá trị của bạn.',
        'Tích lũy bí quyết để trở thành chuyên gia. Xây dựng và tổ chức kiến thức chuyên nghiệp trong khi phát triển sự nghiệp của bạn. Kiến thức này trở thành tài sản của bạn và rất quan trọng để được công nhận như một chuyên gia.',
        'Ưu tiên độ tin cậy trên tất cả. Điều cần thiết là tôn trọng cam kết và thực hiện các nhiệm vụ được giao một cách hoàn hảo. Độ tin cậy, một khi mất đi, rất khó lấy lại, vì vậy hãy luôn nghĩ và hành động với nó như ưu tiên hàng đầu của bạn.',
        'Tiếp tục học tập và cải thiện liên tục. Lĩnh vực hành chính và quản lý đang phát triển, vì vậy điều quan trọng là phải cập nhật các xu hướng mới và phát triển kỹ năng của bạn. Tham gia các khóa học, hội thảo và đọc sách chuyên ngành để duy trì tính cạnh tranh.'
      ], 
      id: [
        'Bangun keahlian dalam administrasi atau manajemen. Anda harus mengembangkan kemampuan profesional di area seperti manajemen administrasi, manajemen dokumen, dan penjadwalan. Keterampilan ini dibutuhkan di setiap organisasi dan dapat meningkatkan nilai Anda. Terima pendidikan dan pelatihan terkait dan terus tingkatkan.',
        'Bangun karier Anda di lingkungan kerja yang terstruktur. Bekerja di perusahaan besar atau lembaga pemerintah membantu mengembangkan keterampilan organisasi Anda. Di lingkungan seperti itu, aturan dan sistem jelas, memungkinkan Anda memaksimalkan kekuatan Anda.',
        'Sertifikasi membantu. Memperoleh sertifikasi di manajemen administrasi, akuntansi, dan manajemen keuangan menunjukkan keahlian. Sertifikasi memberikan ukuran objektif kemampuan dan membantu menemukan posisi yang lebih baik.',
        'Pelajari keterampilan komputer. Keterampilan seperti pembuatan dokumen, spreadsheet, dan manajemen database penting. Penguasaan Excel, alat analisis data, dan sistem manajemen dokumen dapat secara signifikan meningkatkan efisiensi kerja.',
        'Perkuat keterampilan manajemen detail. Anda harus mengembangkan kemampuan untuk mengelola bahkan detail kecil sekalipun. Belajarlah untuk membangun daftar periksa dan sistem untuk manajemen kerja yang sistematis.',
        'Pertimbangkan bekerja di organisasi yang stabil. Posisi stabil di perusahaan besar atau lembaga pemerintah memungkinkan pembangunan karier jangka panjang. Lingkungan ini menawarkan pengaturan yang dapat diprediksi dengan perubahan minimal, ideal untuk profil Anda.',
        'Pelajari akuntansi atau keuangan. Pengetahuan tentang akuntansi dan manajemen keuangan sangat berguna dalam pekerjaan administrasi. Kemampuan untuk memahami dan mengelola informasi keuangan meningkatkan keahlian Anda dan membuka lebih banyak peluang.',
        'Kembangkan kemampuan untuk merancang alur kerja yang efisien. Bangun keterampilan untuk merancang dan meningkatkan alur kerja untuk penanganan tugas yang lebih efektif. Kemampuan ini berkontribusi pada efisiensi organisasi secara keseluruhan dan meningkatkan nilai Anda.',
        'Akumulasi know-how untuk menjadi ahli. Bangun dan atur pengetahuan profesional sambil mengembangkan karier Anda. Pengetahuan ini menjadi aset Anda dan penting untuk diakui sebagai ahli.',
        'Prioritaskan keandalan di atas segalanya. Sangat penting untuk menghormati komitmen dan mengeksekusi tugas yang ditugaskan dengan sempurna. Keandalan, sekali hilang, sulit untuk mendapatkan kembali, jadi selalu berpikir dan bertindak dengan itu sebagai prioritas utama Anda.'
      ]
    },
    fortune: {
      success: { 
        ko: [
          '안정적인 직장에서 성공할 수 있습니다. 당신의 체계적이고 신뢰할 수 있는 성격은 조직에서 매우 인정받을 수 있으며, 안정적인 환경에서 장기적인 경력을 쌓을 수 있습니다. 변화가 많은 환경보다는 안정되고 예측 가능한 업무 환경에서 당신은 더 큰 성과를 낼 수 있습니다.',
          '신뢰받는 전문가가 될 수 있습니다. 당신의 꼼꼼함과 책임감은 동료와 상사들에게 큰 신뢰를 주며, 중요한 업무를 맡을 수 있게 됩니다. 시간이 지날수록 당신의 전문성은 더욱 쌓여가며 조직 내에서 없어서는 안 될 핵심 인력이 됩니다.',
          '장기적인 경력을 쌓을 수 있습니다. 당신의 안정적이고 지속적인 성향은 장기적인 경력 발전에 매우 적합합니다. 한 조직에서 오래 일하며 깊이 있는 전문성을 쌓고, 조직의 성장과 함께 자신도 성장해 갈 수 있습니다.',
          '목표 달성에 성공할 가능성이 높습니다. 당신의 계획적이고 체계적인 접근 방식은 목표를 설정하고 그것을 달성하는 데 매우 효과적입니다. 단계별로 계획을 세우고 실행하는 능력은 놓치는 일 없이 목표를 완벽하게 달성할 수 있게 해줍니다.',
          '조직 내에서 인정받을 수 있습니다. 당신의 협력적이고 책임감 있는 태도는 동료들과 좋은 관계를 만들어주며, 조직 내에서 인정받고 높은 평가를 받을 수 있습니다. 당신은 조직이 성공하는데 기여하는 중요한 구성원이 됩니다.',
          '프로젝트 관리자로서 뛰어난 성과를 거두는 존재가 됩니다. 일정·자원·위험을 통합 관리하고 목표를 달성하는 체계적 접근으로 조직의 역량을 극대화하며, 복잡한 프로젝트를 성공적으로 이끕니다.',
          '대규모 조직에서 이직 없이 경력을 쌓아가며 평판 있는 인사가 됩니다. 신뢰와 안정성을 바탕으로 리더십과 프로세스 개선에 기여하고, 조직 문화와 성과 향상을 주도합니다.',
          '행정·재무·품질·컴플라이언스 분야의 전문가로 성장합니다. 정책 수립, 프로세스 체계화, 리스크 관리로 조직의 추진력과 순응성을 높이고, 장기 안정성과 지속 가능성에 기여합니다.',
          '다수의 규칙과 절차를 통합 관리하는 최적화 전문가가 됩니다. 효율성과 일관성을 확보하며, 프로세스·시스템 개선으로 생산성을 높이고, 워크플로우 최적화로 비용을 절감합니다.',
          '교육·온보딩·정책 공유에서 체계적인 아웃리치가 핵심 역할을 맡습니다. 공정성과 투명성을 바탕으로 모든 구성원의 이해도를 높이고, 조직 동원력을 강화하며 일관성을 확보합니다.',
          '장기 프로젝트와 전략적 이니셔티브의 안정적인 관리자로 자리매김합니다. 초기 목표부터 실행·피드백·개선을 지속하고, 리스크·변화 관리에 강점을 보여 예측 가능한 성과를 낸다.',
          '체계적이고 효율적인 데이터와 문서 관리로 조직의 지식 자산을 보호·증대시킵니다. 검색·분석이 용이한 아카이빙으로 의사결정 품질을 높이고, 온보딩·학습 비용을 절감한다.',
          '경영·행정·운영 리더십의 핵심 멤버로 성장합니다. 조직력과 전략적 사고를 결합해 장기 안정성·성장성·혁신을 모두 이끌며, 승계와 지속 가능한 성장에 기여한다.',
          '컴플라이언스와 리스크 관리에서 신뢰할 수 있는 검증·회고·보고 역할을 맡습니다. 조직의 순응성과 윤리를 강화하고, 중요 의사결정을 지원하며, 장기 리스크를 최소화합니다.'
        ],
        en: [
          'You can be recognized within the organization. Your cooperative and responsible attitude fosters good relationships with colleagues, earning recognition and high evaluations. You become a key member contributing to organizational success.',
          'You deliver outstanding results as a project manager. Managing schedules, resources, and risks with a systematic approach, you maximize organizational capability and successfully lead complex projects to completion.',
          'You build a distinguished career with long tenure in a large organization. Based on trust and stability, you contribute to leadership and process improvement, driving organizational culture and performance.',
          'You grow as an expert in administration, finance, quality, and compliance. By formulating policies, systematizing processes, and managing risks, you enhance organizational drive and compliance, supporting long-term stability and sustainability.',
          'You become an optimization specialist who manages multiple rules and procedures. Ensuring efficiency and consistency, you improve processes and systems, boost productivity, and reduce costs through workflow optimization.',
          'You play a central role in systematic outreach for education, onboarding, and policy dissemination. Grounded in fairness and transparency, you raise understanding across the organization, strengthen mobilization, and maintain consistency.',
          'You establish yourself as a steady manager of long-term projects and strategic initiatives. Managing execution, feedback, and improvement from initial goals, you excel at risk and change management, delivering predictable results.',
          'You protect and grow organizational knowledge assets through systematic, efficient data and document management. By building searchable, analyzable archives, you improve decision quality and reduce onboarding and learning costs.',
          'You grow as a core member of management, administration, and operational leadership. Combining organizational capacity with strategic thinking, you drive long-term stability, growth, and innovation while supporting succession and sustainable development.',
          'You assume a trusted role in compliance and risk management for verification, review, and reporting. Strengthening organizational adherence and ethics, you support key decisions and minimize long-term risks.'
        ], 
        ja: [
          '組織内で認められることができます。協力的で責任感のある態度は同僚と良い関係を築き、組織内で認められ高い評価を受けます。あなたは組織の成功に貢献する重要な構成員になります。',
          'プロジェクトマネージャーとして卓越した成果を上げる存在になります。スケジュール・資源・リスクを統合管理し目標を達成する体系的なアプローチで組織の能力を最大化し、複雑なプロジェクトを成功に導きます。',
          '大規模組織で転職せずにキャリアを積み上げ、評判ある人物になります。信頼と安定性を基盤にリーダーシップとプロセス改善に貢献し、組織文化と業績向上を主導します。',
          '行政・財務・品質・コンプライアンス分野の専門家に成長します。政策策定、プロセス体系化、リスク管理で組織の推進力と順応性を高め、長期安定性と持続可能性に貢献します。',
          '多数の規則と手順を統合管理する最適化スペシャリストになります。効率性と一貫性を確保し、プロセス・システム改善で生産性を向上させ、ワークフロー最適化でコストを削減します。',
          '教育・オンボーディング・政策共有で体系的なアウトリーチが中心的な役割を果たします。公正性と透明性を基盤に全構成員の理解度を高め、組織動員力を強化し一貫性を確保します。',
          '長期プロジェクトと戦略的イニシアチブの安定した管理者として定着します。初期目標から実行・フィードバック・改善を継続し、リスク・変化管理に強みを見せ予測可能な成果を出します。',
          '体系的で効率的なデータと文書管理で組織の知識資産を保護・増大させます。検索・分析が容易なアーカイビングで意思決定品質を高め、オンボーディング・学習コストを削減します。',
          '経営・行政・運営リーダーシップの中核メンバーに成長します。組織力と戦略的思考を組み合わせ長期安定性・成長性・革新をすべて牽引し、承継と持続可能な成長に貢献します。',
          'コンプライアンスとリスク管理で信頼できる検証・回顧・報告の役割を担います。組織の順応性と倫理を強化し、重要な意思決定を支援し、長期リスクを最小化します。'
        ], 
        'zh-CN': [
          '你能在组织内获得认可。你合作与负责的态度有助于与同事建立良好关系，在组织内获得认可与高度评价。你将成为促进组织成功的重要一员。',
          '你将成为作为项目经理取得卓越成果的人才。通过整合管理进度、资源与风险的系统方法，你最大化组织能力并成功引导复杂项目。',
          '你在大型组织中持续积累经验而无频繁调动，成为受人尊敬的人员。基于信任与稳定，你贡献于领导力与流程改进，推动组织文化与绩效。',
          '你在行政、财务、质量与合规领域成长为专家。通过制定政策、系统化流程与管理风险，你提升组织驱动力与遵守度，支持长期稳定与可持续性。',
          '你成为整合管理多项规则与程序的最优化专家。确保效率与一致性，你改进流程与系统以提升生产力，并通过工作流优化降低成本。',
          '你在教育、入职与政策传达中担任系统的外联核心角色。以公平与透明为基础，你提升全员理解度，强化动员力并保持一致性。',
          '你在长期项目与战略举措上成为稳定的管理者。持续管理从初始目标到执行、反馈与改进，你在风险与变化管理上展现优势，产出可预期的成果。',
          '通过系统而高效的数据与文档管理，你保护并扩大组织知识资产。借助易于搜索与分析的知识库，你提升决策质量并降低入职与学习成本。',
          '你在经营、行政与运营领导力上成长为核心成员。结合组织能力与战略思维，你推动长期稳定、增长与创新，并支持传承与可持续发展。',
          '你在合规与风险管理中担任可信的验证、回顾与报告角色。强化组织遵守度与道德，你支持关键决策并最小化长期风险。'
        ], 
        'zh-TW': [
          '你能在組織內獲得認可。你合作與負責任的態度有助於與同事建立良好關係，在組織內獲得認可與高度評價。你將成為促進組織成功的重要一員。',
          '你將成為作為專案經理取得卓越成果的人才。透過整合管理進度、資源與風險的系統方法，你最大化組織能力並成功引導複雜專案。',
          '你在大型組織中持續累積經驗而無頻繁調動，成為受人尊敬的人員。基於信任與穩定，你貢獻於領導力與流程改進，推動組織文化與績效。',
          '你在行政、財務、品質與合規領域成長為專家。透過制定政策、系統化流程與管理風險，你提升組織驅動力與遵守度，支持長期穩定與可持續性。',
          '你成為整合管理多項規則與程序的最優化專家。確保效率與一致性，你改進流程與系統以提升生產力，並透過工作流最優化降低成本。',
          '你在教育、入職與政策傳達中擔任系統的外聯核心角色。以公平與透明為基礎，你提升全員理解度，強化動員力並保持一致性。',
          '你在長期專案與戰略舉措上成為穩定的管理者。持續管理從初始目標到執行、反饋與改進，你在風險與變化管理上展現優勢，產出可預期的成果。',
          '透過系統而高效的數據與文檔管理，你保護並擴大組織知識資產。借助易於搜索與分析的知識庫，你提升決策品質並降低入職與學習成本。',
          '你在經營、行政與運營領導力上成長為核心成員。結合組織能力與戰略思維，你推動長期穩定、增長與創新，並支持傳承與可持續發展。',
          '你在合規與風險管理中擔任可信的驗證、回顧與報告角色。強化組織遵守度與道德，你支持關鍵決策並最小化長期風險。'
        ], 
        vi: [
          'Bạn có thể được công nhận trong tổ chức. Thái độ hợp tác và trách nhiệm của bạn xây dựng mối quan hệ tốt với đồng nghiệp, nhận được sự công nhận và đánh giá cao. Bạn trở thành thành viên quan trọng đóng góp vào thành công của tổ chức.',
          'Bạn trở thành người đạt kết quả xuất sắc với tư cách là người quản lý dự án. Quản lý tích hợp lịch trình, nguồn lực và rủi ro, bạn tối đa hóa năng lực tổ chức và thành công dẫn dắt các dự án phức tạp.',
          'Bạn xây dựng danh tiếng với công việc lâu dài tại một tổ chức lớn. Dựa trên niềm tin và sự ổn định, bạn đóng góp cho lãnh đạo và cải thiện quy trình, thúc đẩy văn hóa và hiệu quả tổ chức.',
          'Bạn phát triển thành chuyên gia trong hành chính, tài chính, chất lượng và tuân thủ. Bằng cách xây dựng chính sách, hệ thống hóa quy trình và quản lý rủi ro, bạn nâng cao động lực và tuân thủ, hỗ trợ tính ổn định và bền vững lâu dài.',
          'Bạn trở thành chuyên gia tối ưu hóa quản lý nhiều quy tắc và thủ tục. Đảm bảo hiệu quả và nhất quán, bạn cải thiện quy trình và hệ thống, tăng năng suất và giảm chi phí thông qua tối ưu hóa quy trình làm việc.',
          'Bạn đóng vai trò trung tâm trong tiếp cận có hệ thống cho giáo dục, tích hợp và phổ biến chính sách. Dựa trên công bằng và minh bạch, bạn nâng cao hiểu biết trong toàn tổ chức, tăng cường động viên và duy trì tính nhất quán.',
          'Bạn thiết lập vị trí của mình như một người quản lý ổn định cho các dự án dài hạn và sáng kiến chiến lược. Quản lý thực thi, phản hồi và cải thiện từ mục tiêu ban đầu, bạn xuất sắc trong quản lý rủi ro và thay đổi, mang lại kết quả có thể dự đoán.',
          'Bạn bảo vệ và tăng trưởng tài sản tri thức của tổ chức thông qua quản lý dữ liệu và tài liệu có hệ thống, hiệu quả. Bằng cách xây dựng kho lưu trữ có thể tìm kiếm và phân tích, bạn cải thiện chất lượng quyết định và giảm chi phí tích hợp và học tập.',
          'Bạn phát triển thành thành viên cốt lõi của lãnh đạo quản lý, hành chính và vận hành. Kết hợp năng lực tổ chức với tư duy chiến lược, bạn thúc đẩy tính ổn định dài hạn, tăng trưởng và đổi mới, đồng thời hỗ trợ kế thừa và phát triển bền vững.',
          'Bạn đảm nhận vai trò đáng tin cậy trong quản lý tuân thủ và rủi ro cho xác minh, xem xét và báo cáo. Tăng cường tuân thủ và đạo đức tổ chức, bạn hỗ trợ các quyết định quan trọng và giảm thiểu rủi ro dài hạn.'
        ], 
        id: [
          'Anda dapat diakui dalam organisasi. Sikap kooperatif dan bertanggung jawab Anda membangun hubungan baik dengan rekan kerja, meraih pengakuan dan evaluasi tinggi. Anda menjadi anggota kunci yang berkontribusi pada kesuksesan organisasi.',
          'Anda menjadi pribadi yang menghasilkan kinerja luar biasa sebagai manajer proyek. Dengan mengelola jadwal, sumber daya, dan risiko secara sistematis, Anda memaksimalkan kapabilitas organisasi dan berhasil memimpin proyek kompleks.',
          'Anda membangun reputasi melalui karier panjang di organisasi besar. Berdasarkan kepercayaan dan stabilitas, Anda berkontribusi pada kepemimpinan dan perbaikan proses, mendorong budaya dan kinerja organisasi.',
          'Anda tumbuh sebagai ahli dalam administrasi, keuangan, kualitas, dan kepatuhan. Dengan merumuskan kebijakan, mensistematisasi proses, dan mengelola risiko, Anda meningkatkan daya dorong dan kepatuhan organisasi, mendukung stabilitas dan keberlanjutan jangka panjang.',
          'Anda menjadi spesialis optimasi yang mengelola banyak aturan dan prosedur. Dengan memastikan efisiensi dan konsistensi, Anda meningkatkan proses dan sistem, meningkatkan produktivitas, dan mengurangi biaya melalui optimasi alur kerja.',
          'Anda memainkan peran sentral dalam pendekatan sistematis untuk pendidikan, onboarding, dan penyebaran kebijakan. Berdasarkan keadilan dan transparansi, Anda meningkatkan pemahaman di seluruh organisasi, memperkuat mobilisasi, dan mempertahankan konsistensi.',
          'Anda menetapkan diri sebagai manajer yang stabil untuk proyek jangka panjang dan inisiatif strategis. Mengelola pelaksanaan, umpan balik, dan perbaikan dari tujuan awal, Anda unggul dalam manajemen risiko dan perubahan, menghasilkan hasil yang dapat diprediksi.',
          'Anda melindungi dan mengembangkan aset pengetahuan organisasi melalui manajemen data dan dokumen yang sistematis dan efisien. Dengan membangun arsip yang dapat dicari dan dianalisis, Anda meningkatkan kualitas keputusan dan mengurangi biaya onboarding dan pembelajaran.',
          'Anda tumbuh sebagai anggota inti kepemimpinan manajemen, administrasi, dan operasional. Menggabungkan kapasitas organisasi dengan pemikiran strategis, Anda mendorong stabilitas jangka panjang, pertumbuhan, dan inovasi sambil mendukung suksesi dan pembangunan berkelanjutan.',
          'Anda mengambil peran terpercaya dalam manajemen kepatuhan dan risiko untuk verifikasi, tinjauan, dan pelaporan. Dengan memperkuat kepatuhan dan etika organisasi, Anda mendukung keputusan kunci dan meminimalkan risiko jangka panjang.'
        ] 
      },
      hidden: { 
        ko: [
          '조직의 핵심 인력이 될 수 있습니다. 당신의 체계적인 업무 처리 능력과 신뢰성은 조직에서 핵심 인력으로 성장할 수 있게 해줍니다. 시간이 지날수록 당신의 역할과 책임은 커지며, 조직의 중요한 업무를 담당하게 됩니다.',
          '안정적인 생활을 이룰 수 있습니다. 당신의 안정적인 경력과 신뢰받는 전문성은 경제적으로 안정적인 생활을 가능하게 해줍니다. 변화가 많은 시기에도 당신의 능력은 항상 필요한 것이므로 안정적인 수입을 기대할 수 있습니다.',
          '팀의 중심이 될 가능성이 있습니다. 당신의 협력적이고 조율 능력이 뛰어난 성격은 팀 내에서 중심 역할을 할 수 있게 해줍니다. 팀원들이 당신을 신뢰하고 의지하며, 당신은 팀의 화합과 성과 향상에 기여합니다.',
          '장기적으로 고용 안정이 보장됩니다. 당신의 꼼꼼함과 신뢰성은 장기적으로 고용 안정을 보장해줍니다. 조직은 당신과 같이 신뢰할 수 있고 체계적으로 업무를 처리하는 인재를 잃고 싶어하지 않기 때문입니다.',
          '목표 달성과 성공을 이룰 수 있습니다. 당신의 계획적이고 체계적인 접근 방식은 어떤 목표든 달성할 수 있게 해줍니다. 작은 목표부터 큰 목표까지 단계적으로 계획하고 실행하는 능력은 당신이 원하는 성공을 이루어낼 수 있게 해줍니다.',
          '시스템 아키텍트나 조직 설계자로서 대규모 프로세스 혁신을 주도합니다. 기존 절차를 분석하고 경로를 최적화하여 조직 전체의 효율성과 가시성을 높이며, 비용·시간·오류를 동시에 개선합니다.',
          '행정·감사·보고·컴플라이언스 전문가로 위험을 사전 차단하는 핵심 역할을 맡습니다. 규정 준수와 보안을 보장해 조직의 평판과 운영 안정을 지키며, 법적·윤리적 리스크를 최소화합니다.',
          '자원 배정과 예산·일정 최적화에서 탁월한 능력을 보입니다. 한정된 자원으로 최대 성과를 내며, 비용 절감과 일정 준수를 동시에 달성하고, 자원 효율성을 극대화하는 전략적 사고를 지닙니다.',
          '온보딩·교육·멘토링 프로그램의 핵심 설계자가 됩니다. 단계적 가이드와 체계적 피드백을 제공해 신규 구성원의 적응과 역량 향상을 지원하며, 조직의 학습 문화를 구축합니다.',
          '다양한 이해관계자 간의 조율과 소통을 담당하는 릴레이션십 매니저가 됩니다. 팀·부서·파트너십을 연결하며 일관된 목표와 프로세스를 유지하고, 조직의 통합성과 일관성을 강화합니다.',
          '레거시 시스템과 프로세스를 현대화·디지털화하는 변화 주도자가 됩니다. 오래된 관행을 체계적으로 분석하고 대안을 도입하며, 단계적으로 혁신을 전개해 조직의 경쟁력을 개선합니다.',
          '품질 관리와 검증 프로세스의 전문가로 완벽주의와 일관성을 추구합니다. 오류를 사전에 발견하고 수정하며, 높은 표준을 유지해 제품·서비스의 신뢰성을 보장하고 고객 만족을 높입니다.',
          '조직의 운영 기술(KT) 지식을 체계적으로 문서화·아카이빙하며 보존합니다. 노하우와 모범 사례를 축적하고 전수해 경험 손실을 막고, 팀의 지속적 성장과 일관된 품질을 지원합니다.',
          '인사·조직문화·직원 복지를 담당하는 HR 전문가로서 신뢰받는 역할을 합니다. 균형 잡힌 정책과 공정한 절차로 조직 전반의 만족과 몰입을 높이며, 장기적으로 인재 확보와 유지에 기여합니다.'
        ],
        en: [
          'You can achieve goals and success. Your planned and systematic approach enables you to attain any objective. Your ability to plan and execute step by step, from small to large goals, helps you reach your desired success.',
          'As a systems architect or organizational designer, you lead large-scale process innovation. Analyzing existing procedures and optimizing workflows, you raise organizational efficiency and visibility while improving costs, time, and error rates.',
          'As an administration, audit, reporting, and compliance specialist, you assume a central role in preemptive risk prevention. Ensuring regulatory adherence and security, you protect organizational reputation and operational stability, minimizing legal and ethical risks.',
          'You show exceptional skill in resource allocation and budget/schedule optimization. Delivering maximum results with limited resources, you achieve cost reduction and on-time delivery while maximizing resource efficiency through strategic thinking.',
          'You become a core designer of onboarding, education, and mentoring programs. Providing structured guidance and systematic feedback, you support new members’ adaptation and capability development while building organizational learning culture.',
          'You become a relationship manager coordinating communication among diverse stakeholders. Connecting teams, departments, and partnerships, you maintain consistent goals and processes, strengthening organizational integration and consistency.',
          'You become a change agent modernizing and digitalizing legacy systems and processes. Systematically analyzing old practices and introducing alternatives, you drive innovation step by step, improving organizational competitiveness.',
          'As a quality management and verification specialist, you pursue perfectionism and consistency. Detecting and correcting errors early, you maintain high standards, ensuring product and service reliability and raising customer satisfaction.',
          'You systematically document and archive organizational operational knowledge, preserving KT insights. Accumulating and transferring know-how and best practices, you prevent knowledge loss and support continuous team growth and consistent quality.',
          'As an HR specialist in personnel, organizational culture, and employee well-being, you play a trusted role. With balanced policies and fair procedures, you raise organizational satisfaction and engagement, contributing long-term to talent acquisition and retention.'
        ], 
        ja: [
          '目標達成と成功を実現できます。計画的で体系的なアプローチにより、どんな目標でも達成できるようになります。小さな目標から大きな目標まで段階的に計画し実行する能力は、望む成功を実現できます。',
          'システムアーキテクトまたは組織デザイナーとして、大規模なプロセス革新を主導します。既存手順を分析し最適化することで組織全体の効率性と可視性を高め、コスト・時間・エラーを同時に改善します。',
          '行政・監査・報告・コンプライアンス専門家として、リスクを事前に防止する中心的な役割を果たします。規定順守とセキュリティを確保し、組織の評判と運営安定を守り、法的・倫理的リスクを最小化します。',
          'リソース配分と予算・スケジュール最適化で卓越した能力を示します。限られたリソースで最大成果を上げ、コスト削減とスケジュール遵守を同時に達成し、リソース効率を最大化する戦略的思考を持ちます。',
          'オンボーディング・教育・メンタリングプログラムの中心設計者になります。段階的ガイドと体系的なフィードバックを提供し、新規メンバーの適応と能力向上を支援し、組織の学習文化を構築します。',
          '多様な利害関係者間の調整とコミュニケーションを担うリレーションシップマネージャーになります。チーム・部門・パートナーシップを結び、一貫した目標とプロセスを維持し、組織の統合性と一貫性を強化します。',
          'レガシーシステムとプロセスを近代化・デジタル化する変化の牽引者になります。古い慣行を体系的に分析し代替案を導入し、段階的に革新を展開し組織の競争力を改善します。',
          '品質管理と検証プロセスの専門家として、完璧主義と一貫性を追求します。エラーを事前に発見して修正し、高い基準を維持することで製品・サービスの信頼性を確保し、顧客満足を向上させます。',
          '組織の運営知識（KT）を体系的に文書化・アーカイブし保存します。ノウハウとベストプラクティスを蓄積・継承し、経験損失を防ぎ、チームの継続的成長と一貫した品質を支援します。',
          '人事・組織文化・従業員の福利を担うHR専門家として、信頼される役割を果たします。バランスの取れた政策と公正な手続きで組織全体の満足と関与を高め、長期的に人材確保と維持に貢献します。'
        ], 
        'zh-CN': [
          '你能实现目标与成功。你计划与系统的方法使你达成任何目标。从较小目标到较大目标，逐步规划与执行的能力助你实现期待的成功。',
          '作为系统架构师或组织设计师，你主导大规模流程创新。分析现有程序并优化工作流，提升整体效率与透明度，同时改善成本、时间与错误率。',
          '作为行政、审计、报告与合规专家，你承担事前风险预防的核心角色。确保符合规定与安全，保护组织声誉与运营稳定，最小化法律与伦理风险。',
          '你在资源分配与预算/进度优化上展现突出能力。以有限资源产出最大成果，同时实现成本削减与按时交付，并通过战略思维最大化资源效率。',
          '你成为入职、教育与指导计划的核心设计者。提供结构化引导与系统性反馈，支持新成员适应与能力发展，同时建立组织学习文化。',
          '你成为协调不同利益相关者沟通的关系经理。连接团队、部门与合作伙伴关系，维持一致的目标与流程，强化组织整合与一致性。',
          '你成为推动旧系统与流程现代化、数字化的变革驱动者。系统性分析既有实践并引入替代方案，逐步推进创新，提升组织竞争力。',
          '作为质量管理与验证专家，你追求完美与一致性。及早发现并修正错误，保持高标准，确保产品与服务可靠性并提升客户满意度。',
          '你系统性记录与归档组织运营知识，保护传承洞察。累积与传承经验与最佳实践，防止知识流失，支持团队持续成长与一致品质。',
          '作为人事、组织文化与员工福利方面的HR专家，你扮演受信赖角色。以平衡的政策与公正的程序，提升组织满意与参与，长期促进人才获取与保留。'
        ], 
        'zh-TW': [
          '你能實現目標與成功。你計劃與系統的方法使你達成任何目標。從較小目標到較大目標，逐步規劃與執行的能力助你實現期待的成功。',
          '作為系統架構師或組織設計師，你主導大規模流程創新。分析現有程序並優化工作流，提升整體效率與透明度，同時改善成本、時間與錯誤率。',
          '作為行政、審計、報告與合規專家，你承擔事前風險預防的核心角色。確保符合規定與安全，保護組織聲譽與運營穩定，最小化法律與倫理風險。',
          '你在資源分配與預算/進度優化上展現突出能力。以有限資源產出最大成果，同時實現成本削減與按時交付，並通過戰略思維最大化資源效率。',
          '你成為入職、教育與指導計畫的核心設計者。提供結構化引導與系統性反饋，支持新成員適應與能力發展，同時建立組織學習文化。',
          '你成為協調不同利益相關者溝通的关系經理。連接團隊、部門與合作關係，維持一致的目標與流程，強化組織整合與一致性。',
          '你成為推動舊系統與流程現代化、數位化的變革驅動者。系統性分析既有實踐並引入替代方案，逐步推進創新，提升組織競爭力。',
          '作為品質管理與驗證專家，你追求完美與一致性。及早發現並修正錯誤，保持高標準，確保產品與服務可靠性並提升客戶滿意度。',
          '你系統性記錄與歸檔組織營運知識，保護傳承洞察。累積與傳承經驗與最佳實踐，防止知識流失，支持團隊持續成長與一致品質。',
          '作為人事、組織文化與員工福利方面的HR專家，你扮演受信賴角色。以平衡的政策與公正的程序，提升組織滿意與參與，長期促進人才獲取與保留。'
        ], 
        vi: [
          'Bạn có thể đạt được mục tiêu và thành công. Phương pháp có kế hoạch và có hệ thống của bạn cho phép bạn đạt được bất kỳ mục tiêu nào. Khả năng lập kế hoạch và thực hiện từng bước từ mục tiêu nhỏ đến lớn giúp bạn đạt được thành công mong muốn.',
          'Với tư cách là kiến trúc sư hệ thống hoặc người thiết kế tổ chức, bạn dẫn dắt đổi mới quy trình quy mô lớn. Bằng cách phân tích các thủ tục hiện có và tối ưu hóa quy trình, bạn nâng cao hiệu quả và tính minh bạch của tổ chức trong khi cải thiện chi phí, thời gian và tỷ lệ lỗi.',
          'Là chuyên gia hành chính, kiểm toán, báo cáo và tuân thủ, bạn đảm nhận vai trò trung tâm trong phòng ngừa rủi ro sớm. Bằng cách đảm bảo tuân thủ quy định và bảo mật, bạn bảo vệ danh tiếng và sự ổn định hoạt động của tổ chức, giảm thiểu rủi ro pháp lý và đạo đức.',
          'Bạn thể hiện kỹ năng xuất sắc trong phân bổ nguồn lực và tối ưu hóa ngân sách / lịch trình. Cung cấp kết quả tối đa với nguồn lực hạn chế, bạn đạt được giảm chi phí và giao hàng đúng hạn trong khi tối đa hóa hiệu quả nguồn lực thông qua tư duy chiến lược.',
          'Bạn trở thành nhà thiết kế cốt lõi của các chương trình onboarding, giáo dục và cố vấn. Cung cấp hướng dẫn có cấu trúc và phản hồi có hệ thống, bạn hỗ trợ sự thích ứng và phát triển khả năng của các thành viên mới trong khi xây dựng văn hóa học tập của tổ chức.',
          'Bạn trở thành người quản lý quan hệ điều phối giao tiếp giữa các bên liên quan đa dạng. Kết nối nhóm, bộ phận và quan hệ đối tác, bạn duy trì các mục tiêu và quy trình nhất quán, tăng cường tính toàn vẹn và nhất quán của tổ chức.',
          'Bạn trở thành người dẫn dắt thay đổi hiện đại hóa và số hóa các hệ thống và quy trình cũ. Bằng cách phân tích có hệ thống các thực hành cũ và giới thiệu các phương án thay thế, bạn thúc đẩy đổi mới từng bước, cải thiện khả năng cạnh tranh của tổ chức.',
          'Là chuyên gia quản lý chất lượng và xác minh, bạn theo đuổi chủ nghĩa hoàn hảo và tính nhất quán. Phát hiện và sửa lỗi sớm, bạn duy trì tiêu chuẩn cao, đảm bảo độ tin cậy của sản phẩm và dịch vụ, nâng cao sự hài lòng của khách hàng.',
          'Bạn tài liệu hóa và lưu trữ có hệ thống kiến thức vận hành của tổ chức, bảo tồn thông tin chi tiết KT. Tích lũy và chuyển giao kiến thức và thực hành tốt nhất, bạn ngăn chặn mất kiến thức và hỗ trợ tăng trưởng liên tục của nhóm và chất lượng nhất quán.',
          'Là chuyên gia HR về nhân sự, văn hóa tổ chức và phúc lợi nhân viên, bạn đóng vai trò đáng tin cậy. Với các chính sách cân bằng và quy trình công bằng, bạn nâng cao sự hài lòng và tham gia của tổ chức, góp phần dài hạn vào thu hút và giữ chân nhân tài.'
        ], 
        id: [
          'Anda dapat mencapai tujuan dan kesuksesan. Pendekatan yang direncanakan dan sistematis memungkinkan Anda mencapai tujuan apa pun. Kemampuan Anda untuk merencanakan dan mengeksekusi langkah demi langkah, dari tujuan kecil hingga besar, membantu Anda mencapai kesuksesan yang diinginkan.',
          'Sebagai arsitek sistem atau desainer organisasi, Anda memimpin inovasi proses skala besar. Menganalisis prosedur yang ada dan mengoptimalkan alur kerja, Anda meningkatkan efisiensi dan visibilitas organisasi sambil meningkatkan biaya, waktu, dan tingkat kesalahan.',
          'Sebagai spesialis administrasi, audit, pelaporan, dan kepatuhan, Anda mengambil peran sentral dalam pencegahan risiko dini. Dengan memastikan kepatuhan terhadap peraturan dan keamanan, Anda melindungi reputasi dan stabilitas operasional organisasi, meminimalkan risiko hukum dan etika.',
          'Anda menunjukkan keterampilan luar biasa dalam alokasi sumber daya dan optimasi anggaran / jadwal. Menyampaikan hasil maksimal dengan sumber daya terbatas, Anda mencapai pengurangan biaya dan pengiriman tepat waktu sambil memaksimalkan efisiensi sumber daya melalui pemikiran strategis.',
          'Anda menjadi desainer inti program onboarding, pendidikan, dan mentoring. Memberikan panduan terstruktur dan umpan balik sistematis, Anda mendukung adaptasi dan pengembangan kemampuan anggota baru sambil membangun budaya pembelajaran organisasi.',
          'Anda menjadi manajer hubungan yang mengoordinasikan komunikasi di antara berbagai pemangku kepentingan. Menghubungkan tim, departemen, dan kemitraan, Anda mempertahankan tujuan dan proses yang konsisten, memperkuat integritas dan konsistensi organisasi.',
          'Anda menjadi agen perubahan yang memodernisasi dan mendigitalkan sistem dan proses warisan. Dengan menganalisis secara sistematis praktik-praktik lama dan memperkenalkan alternatif, Anda mendorong inovasi langkah demi langkah, meningkatkan daya saing organisasi.',
          'Sebagai spesialis manajemen kualitas dan verifikasi, Anda mengejar perfeksionisme dan konsistensi. Mendeteksi dan memperbaiki kesalahan sejak dini, Anda mempertahankan standar tinggi, memastikan keandalan produk dan layanan, meningkatkan kepuasan pelanggan.',
          'Anda secara sistematis mendokumentasikan dan mengarsipkan pengetahuan operasional organisasi, melestarikan wawasan KT. Mengakumulasi dan mentransfer know-how dan praktik terbaik, Anda mencegah kehilangan pengetahuan dan mendukung pertumbuhan tim yang berkelanjutan dan kualitas yang konsisten.',
          'Sebagai spesialis HR dalam personel, budaya organisasi, dan kesejahteraan karyawan, Anda memainkan peran terpercaya. Dengan kebijakan yang seimbang dan prosedur yang adil, Anda meningkatkan kepuasan dan keterlibatan organisasi, berkontribusi jangka panjang pada akuisisi dan retensi talenta.'
        ] 
      }
    }
  },
  {
    id: 6,
    title: { ko: '기술자형', en: 'Technician Type', ja: '技術者型', 'zh-CN': '技术者型', 'zh-TW': '技術者型', vi: 'Kiểu Kỹ Thuật', id: 'Tipe Teknisi' },
    description: {
      ko: [
        '당신의 얼굴은 실용적이고 기술적인 면모를 보여줍니다. 손으로 무언가를 만드는 것을 좋아하고 실무 능력이 뛰어납니다.',
        '집중력과 정밀함이 얼굴에 드러납니다. 디테일한 작업을 정확하게 수행하는 능력이 있습니다.',
        '문제 해결 능력이 뛰어난 얼굴입니다. 기술적 문제를 실용적으로 해결해냅니다.',
        '안정적이고 신중한 성향을 보입니다. 확실한 방법을 선택하고 실수를 줄입니다.',
        '손재주와 기술이 뛰어난 면모가 보입니다. 도구를 다루고 기계를 작동시키는 것이 능숙합니다.',
        '현실적이고 실용적인 사고를 합니다. 이론보다는 실제 적용을 중시합니다.',
        '끈기와 인내심이 있어 어려운 과제도 끝까지 해냅니다. 포기하지 않고 완성도 높은 결과를 냅니다.',
        '독립적으로 일하는 것을 좋아합니다. 혼자서도 충분히 능력을 발휘할 수 있습니다.',
        '기술 향상에 대한 욕구가 강합니다. 새로운 기술을 배우고 익히는 것을 즐깁니다.',
        '신뢰할 수 있는 전문 기술자입니다. 정확하고 안정적인 작업으로 인정받습니다.'
      ],
      en: [
        'Your face shows practical and technical traits. You like to create things with your hands and have excellent practical abilities.',
        'Concentration and precision are evident in your face. You have the ability to accurately perform detailed tasks.',
        'Your face shows excellent problem-solving ability. You solve technical problems practically.',
        'You show stable and cautious tendencies. You choose sure methods and reduce mistakes.',
        'Your excellent manual skills and technical traits are evident. You are skilled at handling tools and operating machines.',
        'You think realistically and practically. You value practical application over theory.',
        'You have persistence and patience, enabling you to complete difficult tasks to the end. You don\'t give up and produce high-quality results.',
        'You like to work independently. You can sufficiently demonstrate your abilities alone.',
        'You have strong desire to improve skills. You enjoy learning and mastering new technologies.',
        'You are a reliable professional technician. You are recognized for accurate and stable work.'
      ], 
      ja: [
        'あなたの顔は実用的で技術的な特徴を示しています。手で何かを作ることを好み実務能力に優れています。',
        '集中力と精密さが顔に現れています。細かな作業を正確に遂行する能力があります。',
        '問題解決能力に優れた顔です。技術的問題を実用的に解決します。',
        '安定した慎重な傾向を示します。確実な方法を選択し間違いを減らします。',
        '手先の器用さと技術に優れた特徴が現れています。工具を扱い機械を操作することが得意です。',
        '現実的で実用的な思考をします。理論よりも実地適用を重視します。',
        '粘り強さと忍耐力があり困難な課題も最後までやり遂げます。諦めず完成度の高い結果を出します。',
        '独立して働くことを好みます。一人でも十分に能力を発揮できます。',
        '技能向上への欲求が強いです。新しい技術を学び習得することを楽しみます。',
        '信頼できる専門技術者です。正確で安定した作業で認められます。'
      ], 
      'zh-CN': [
        '你的面相展现出实用与技术特征。你喜欢用手创造事物，具备出色的实践能力。',
        '专注与精准在面相中显现。你能准确执行细致任务。',
        '你的面相显示出色的问题解决能力。你以实用方式解决技术问题。',
        '你呈现稳定与谨慎的倾向。你选择可靠方法并减少错误。',
        '你出色的手工技能与技术特征明显。你擅长处理工具与操作机器。',
        '你以现实与实用方式思考。你重视实践应用超过理论。',
        '你具备坚持与耐心，能完成困难任务直到最后。你不放弃并产出高质量结果。',
        '你喜欢独立工作。你独自也能充分展现能力。',
        '你有强烈的技能提升愿望。你享受学习与掌握新技术。',
        '你是值得信赖的专业技术者。你以准确与稳定的工作获得认可。'
      ], 
      'zh-TW': [
        '你的面相展現出實用與技術特徵。你喜歡用手創造事物，具備出色的實踐能力。',
        '專注與精準在面相中顯現。你能準確執行細緻任務。',
        '你的面相顯示出色的問題解決能力。你以實用方式解決技術問題。',
        '你呈現穩定與謹慎的傾向。你選擇可靠方法並減少錯誤。',
        '你出色的手工技能與技術特徵明顯。你擅長處理工具與操作機器。',
        '你以現實與實用方式思考。你重視實踐應用超過理論。',
        '你具備堅持與耐心，能完成困難任務直到最後。你不放棄並產出高質量結果。',
        '你喜歡獨立工作。你獨自也能充分展現能力。',
        '你有強烈的技能提升願望。你享受學習與掌握新技術。',
        '你是值得信賴的專業技術者。你以準確與穩定的工作獲得認可。'
      ], 
      vi: [
        'Khuôn mặt bạn thể hiện những đặc điểm thực tế và kỹ thuật. Bạn thích tạo ra mọi thứ bằng tay và có khả năng thực tế xuất sắc.',
        'Sự tập trung và chính xác rõ ràng trên khuôn mặt của bạn. Bạn có khả năng thực hiện chính xác các nhiệm vụ chi tiết.',
        'Khuôn mặt bạn thể hiện khả năng giải quyết vấn đề xuất sắc. Bạn giải quyết các vấn đề kỹ thuật một cách thực tế.',
        'Bạn thể hiện xu hướng ổn định và thận trọng. Bạn chọn các phương pháp chắc chắn và giảm sai lầm.',
        'Những đặc điểm tay khéo léo và kỹ thuật xuất sắc của bạn rõ ràng. Bạn thành thạo trong việc xử lý công cụ và vận hành máy móc.',
        'Bạn suy nghĩ một cách thực tế và thực dụng. Bạn coi trọng ứng dụng thực tế hơn lý thuyết.',
        'Bạn có sự bền bỉ và kiên nhẫn, cho phép bạn hoàn thành các nhiệm vụ khó khăn đến cùng. Bạn không từ bỏ và tạo ra kết quả chất lượng cao.',
        'Bạn thích làm việc độc lập. Bạn có thể thể hiện đủ khả năng của mình một mình.',
        'Bạn có mong muốn mạnh mẽ để cải thiện kỹ năng. Bạn thích học và thành thạo các công nghệ mới.',
        'Bạn là một kỹ thuật viên chuyên nghiệp đáng tin cậy. Bạn được công nhận vì công việc chính xác và ổn định.'
      ], 
      id: [
        'Wajah Anda menunjukkan ciri-ciri praktis dan teknis. Anda suka menciptakan hal-hal dengan tangan Anda dan memiliki kemampuan praktis yang luar biasa.',
        'Konsentrasi dan presisi jelas terlihat di wajah Anda. Anda memiliki kemampuan untuk secara akurat melakukan tugas-tugas detail.',
        'Wajah Anda menunjukkan kemampuan memecahkan masalah yang luar biasa. Anda memecahkan masalah teknis secara praktis.',
        'Anda menunjukkan kecenderungan stabil dan hati-hati. Anda memilih metode yang pasti dan mengurangi kesalahan.',
        'Ciri-ciri keterampilan manual dan teknis yang luar biasa Anda jelas terlihat. Anda terampil dalam menangani alat dan mengoperasikan mesin.',
        'Anda berpikir secara realistis dan praktis. Anda menghargai aplikasi praktis daripada teori.',
        'Anda memiliki ketekunan dan kesabaran, memungkinkan Anda menyelesaikan tugas sulit sampai akhir. Anda tidak menyerah dan menghasilkan hasil berkualitas tinggi.',
        'Anda suka bekerja secara independen. Anda dapat cukup menunjukkan kemampuan Anda sendiri.',
        'Anda memiliki keinginan kuat untuk meningkatkan keterampilan. Anda menikmati belajar dan menguasai teknologi baru.',
        'Anda adalah teknisi profesional yang dapat diandalkan. Anda diakui karena pekerjaan yang akurat dan stabil.'
      ]
    },
    emoji: '🔧',
    scoreRange: [40, 49],
    strengths: { 
      ko: ['실용성', '정밀함', '손재주', '문제해결', '집중력', '인내심', '독립성', '신뢰성', '기술력', '실무능력'], 
      en: ['Practical', 'Precision', 'Skill', 'Problem Solving', 'Focus', 'Patience', 'Independence', 'Reliability', 'Technical', 'Practical'], 
      ja: [], 'zh-CN': [], 'zh-TW': [], vi: [], id: [] 
    },
    recommendations: { 
      ko: ['기계공', '전기기사', '배관공', '목수', '설비기사', '자동차정비사', '제조업', '건축기사', '공인중개사', '기술직'], 
      en: ['Mechanic', 'Electrician', 'Plumber', 'Carpenter', 'Facility Technician', 'Auto Mechanic', 'Manufacturing', 'Architect', 'Real Estate Agent', 'Technical Jobs'], 
      ja: ['機械工', '電気技師', '配管工', '大工', '設備技師', '自動車整備士', '製造業', '建築技師', '公認仲介人', '技術職'], 
      'zh-CN': ['机械工', '电工', '管道工', '木工', '设备技师', '汽车维修工', '制造业', '建筑技师', '房产中介', '技术工作'], 
      'zh-TW': ['機械工', '電工', '管道工', '木工', '設備技師', '汽車維修工', '製造業', '建築技師', '房產仲介', '技術工作'], 
      vi: ['Thợ máy', 'Thợ điện', 'Thợ ống nước', 'Thợ mộc', 'Kỹ thuật viên thiết bị', 'Thợ sửa ô tô', 'Sản xuất', 'Kỹ sư xây dựng', 'Môi giới bất động sản', 'Công việc kỹ thuật'], 
      id: ['Mekanik', 'Tukang Listrik', 'Tukang Ledeng', 'Tukang Kayu', 'Teknisi Fasilitas', 'Mekanik Mobil', 'Manufaktur', 'Arsitek', 'Agen Properti', 'Pekerjaan Teknis'] 
    },
    personality: { 
      ko: [
        '실용적이고 현실적인 성격입니다.',
        '손으로 무언가 만드는 것을 좋아합니다.',
        '문제를 실용적으로 해결합니다.',
        '정밀한 작업에 능합니다.',
        '독립적으로 일하는 것을 선호합니다.',
        '기술 향상에 관심이 많습니다.',
        '끈기와 인내심이 강합니다.',
        '신뢰할 수 있는 직업인입니다.',
        '실무 능력이 뛰어납니다.',
        '안정적인 생활을 추구합니다.'
      ],
      en: [
        'You have a practical and realistic personality.',
        'You like to create things with your hands.',
        'You solve problems practically.',
        'You excel at precise work.',
        'You prefer to work independently.',
        'You have much interest in skill improvement.',
        'You have strong persistence and patience.',
        'You are a reliable professional.',
        'You have excellent practical abilities.',
        'You pursue stable living.'
      ], 
      ja: [
        '実用的で現実的な性格です。',
        '手で何かを作ることを好みます。',
        '問題を実用的に解決します。',
        '精密な作業に長けています。',
        '独立して働くことを好みます。',
        '技能向上に多くの関心があります。',
        '粘り強さと忍耐力が強いです。',
        '信頼できる職業人です。',
        '実務能力に優れています。',
        '安定した生活を追求します。'
      ], 
      'zh-CN': [
        '你拥有实用与现实的个性。',
        '你喜欢用手创造事物。',
        '你以实用方式解决问题。',
        '你擅长细致工作。',
        '你偏好独立工作。',
        '你对技能提升很有兴趣。',
        '你有强烈的坚持与耐心。',
        '你是值得信赖的职业人。',
        '你具备出色的实践能力。',
        '你追求稳定生活。'
      ], 
      'zh-TW': [
        '你擁有實用與現實的個性。',
        '你喜歡用手創造事物。',
        '你以實用方式解決問題。',
        '你擅長細緻工作。',
        '你偏好獨立工作。',
        '你對技能提升很有興趣。',
        '你有強烈的堅持與耐心。',
        '你是值得信賴的職業人。',
        '你具備出色的實踐能力。',
        '你追求穩定生活。'
      ], 
      vi: [
        'Bạn có tính cách thực tế và thực dụng.',
        'Bạn thích tạo ra mọi thứ bằng tay.',
        'Bạn giải quyết vấn đề một cách thực tế.',
        'Bạn giỏi công việc chính xác.',
        'Bạn thích làm việc độc lập.',
        'Bạn có nhiều quan tâm đến việc cải thiện kỹ năng.',
        'Bạn có sự bền bỉ và kiên nhẫn mạnh mẽ.',
        'Bạn là một người nghề nghiệp đáng tin cậy.',
        'Bạn có khả năng thực tế xuất sắc.',
        'Bạn theo đuổi cuộc sống ổn định.'
      ], 
      id: [
        'Anda memiliki kepribadian yang praktis dan realistis.',
        'Anda suka menciptakan hal-hal dengan tangan Anda.',
        'Anda memecahkan masalah secara praktis.',
        'Anda unggul dalam pekerjaan yang tepat.',
        'Anda lebih suka bekerja secara independen.',
        'Anda memiliki banyak minat pada peningkatan keterampilan.',
        'Anda memiliki ketekunan dan kesabaran yang kuat.',
        'Anda adalah profesional yang dapat diandalkan.',
        'Anda memiliki kemampuan praktis yang luar biasa.',
        'Anda mengejar kehidupan yang stabil.'
      ]
    },
    advice: {
      ko: [
        '전문 기술을 배우고 자격증을 취득하세요. 기술자로서 성공하려면 관련 전문 기술을 탄탄히 익혀야 합니다. 기술학교나 직업훈련원에서 체계적으로 교육을 받고, 국가 기술자격증을 취득하여 전문성을 증명해야 합니다. 자격증은 당신의 능력을 객관적으로 보여주는 수단이며, 더 나은 기회를 만들어줍니다.',
        '실무 경험을 많이 쌓으세요. 기술은 이론보다 실전입니다. 실제 현장에서 일하며 다양한 상황과 문제를 경험하고 해결하는 과정에서 진짜 능력이 만들어집니다. 여러 프로젝트를 수행하며 경험을 쌓고, 각종 문제 해결 경험을 통해 당신의 기술력을 향상시켜야 합니다.',
        '도구와 기계에 익숙해지세요. 기술자에게 도구와 기계는 필수입니다. 각종 전동공구, 측정기기, 작업장비 등을 능숙하게 다룰 수 있어야 합니다. 도구의 특성과 사용법을 정확히 이해하고, 적절한 도구를 선택하여 사용할 수 있는 능력을 키워야 합니다.',
        '새로운 기술을 지속적으로 학습하세요. 기술은 계속 발전합니다. 새로운 도구, 재료, 기법이 계속 나오므로 평생에 걸쳐 학습하는 자세가 필요합니다. 관련 교육과정이나 세미나에 참여하고, 최신 기술 트렌드를 파악하며 지속적으로 업데이트해야 합니다.',
        '안전 규칙을 준수하세요. 기술 작업은 위험할 수 있습니다. 안전 수칙을 철저히 준수하고, 안전 장비를 반드시 착용하며, 위험 상황을 미리 파악하고 대비해야 합니다. 안전은 당신의 생명과 건강을 지키는 가장 중요한 것입니다.',
        '신뢰할 수 있는 전문가가 되세요. 기술자로서 정직하고 신뢰할 수 있는 사람이 되어야 합니다. 약속한 기한을 지키고, 품질을 보장하며, 고객과의 약속을 반드시 지켜야 합니다. 좋은 평판은 당신에게 더 많은 기회와 더 나은 조건을 가져다줍니다.',
        '체력 관리가 중요합니다. 기술 작업은 육체적 노동이 많습니다. 규칙적인 운동으로 체력을 유지하고, 작업 시 부상을 예방할 수 있는 근력을 키워야 합니다. 건강한 신체는 장기적으로 기술자로서 활동할 수 있는 기반이 됩니다.',
        '원가 계산 능력을 키우세요. 기술뿐만 아니라 사업 감각도 중요합니다. 재료비, 인건비, 시간을 계산하여 적정한 가격을 책정할 수 있는 능력을 키워야 합니다. 이러한 능력은 자신의 사업을 시작할 때나 프리랜서로 일할 때 매우 유용합니다.',
        '고객과의 소통 능력을 개발하세요. 기술자라고 해서 기계만 다루는 것이 아닙니다. 고객과 대화하며 그들의 요구를 이해하고, 작업 내용을 설명하고, 문제를 해결하는 소통 능력이 필요합니다. 고객과의 좋은 관계는 재계약과 추천으로 이어집니다.',
        '장기적인 경력을 설계하세요. 기술자는 경력이 쌓일수록 더욱 가치가 높아집니다. 초기에는 다양한 경험을 쌓고, 그 다음에는 전문 분야를 정하여 깊이를 키우고, 마지막에는 마스터나 교육자로 성장하는 경력 로드맵을 설계해야 합니다.'
      ],
      en: [
        'Learn professional skills and obtain certifications. To succeed as a technician, you need to learn related expertise solidly. Receive systematic education at technical schools or vocational training centers, and earn national technical certifications to prove expertise. Certifications demonstrate ability and create better opportunities.',
        'Build extensive field experience. Technology is more about practice than theory. Real ability is built by working on site, experiencing situations, and solving problems. Perform projects to gain experience and improve skills through problem-solving.',
        'Familiarize yourself with tools and machines. Tools and machines are essential. Master power tools, measurement equipment, and work gear. Understand uses precisely and choose appropriate tools.',
        'Continuously learn new technologies. Technologies evolve. New tools, materials, and methods emerge, so adopt a lifelong learning mindset. Join courses or seminars and update knowledge.',
        'Follow safety rules. Technical work can be dangerous. Observe safety rules, wear safety gear, and be ready for hazards. Safety protects life and health.',
        'Become a reliable expert. Be honest and dependable. Meet deadlines, ensure quality, and honor commitments. Good reputation brings more opportunities.',
        'Maintain physical fitness. Technical work is physically demanding. Exercise regularly to stay fit and prevent injuries. A healthy body supports long-term work.',
        'Build cost estimation. Business sense matters. Calculate material, labor, and time to price appropriately. This helps if starting your own business or freelancing.',
        'Develop customer communication. Don’t only handle machines. Talk to customers, understand needs, explain work, and solve problems. Good relationships lead to repeat business.',
        'Design a long-term career. Technicians gain value with experience. Early on, gain varied experience; next, specialize and deepen; finally, aim to become a master or educator.'
      ], ja: [
        '専門技能を学び資格を取得します。技術者として成功するには関連専門技能を固く習得する必要があります。技術学校や職業訓練院で体系的に教育を受け、国家技術者資格を取得して専門性を証明すべきです。資格は能力を示し機会を作ります。',
        '実務経験を多く積みます。技術は理論より実戦です。現地で働き状況を経験し問題を解決する過程で真の能力が作られます。プロジェクトを遂行し経験を積み問題解決を通じて技能を向上させます。',
        '工具と機械に慣れます。工具と機械は必須です。電動工具、計測器、作業設備を熟達し扱えます。特性と使用法を正確に理解し適切に選択使用する能力を養います。',
        '新技術を継続的に学習します。技術は発展し続けます。新工具、材料、技法が次々現れるので一生学習する姿勢が必要です。関連課程やセミナーに参加し最新トレンドを把握し更新し続けます。',
        '安全規則を遵守します。技術作業は危険になる可能性があります。安全規則を徹底的に遵守し安全装備を必ず装着し危険状況を事前に把握し備えます。安全は生命と健康を守る最重要事項です。',
        '信頼できる専門家になります。技術者として正直で信頼できる人になります。約束した期限を守り品質を保証し顧客との約束を必ず守ります。良い評判は機会と条件をもたらします。',
        '体力管理が重要です。技術作業は肉体労働が多いです。規則的運動で体力を維持し作業時傷害を防げる筋力を作ります。健康な身体は長期的技術者活動の基盤です。',
        '原価計算能力を育みます。技術だけでなく事業感覚も重要です。材料費、人件費、時間を計算し適正価格を設定する能力を養います。この能力は事業開始時やフリーランス時に有用です。',
        '顧客との交流能力を開発します。機械だけ扱うものではありません。顧客と対話し要求を理解し作業内容を説明し問題を解決する交流能力が必要です。良好な関係は再契約と推薦につながります。',
        '長期的キャリアを設計します。技術者は経験が積まれるほど価値が高まります。初期に多様な経験を積み次に専門分野を定め深め最後にマスターや教育者に成長するキャリアロードマップを設計します。'
      ], 'zh-CN': [
        '学习专业技能并获取认证。要在技术岗位上成功，需要扎实学习相关专业技能。在技术学校或职业训练中心接受系统教育，取得国家技术认证以证明专业度。认证是展示能力的客观手段，并为求职带来更多机会。',
        '积累大量实践经验。技术更看重实战而非理论。通过现场作业、处理各种情况与解决问题来培养真实能力。多做项目积累经验，通过问题解决提升技术能力。',
        '熟悉工具和机器。对技术者而言工具与机器必不可少。需熟练使用各类电动工具、测量仪器、作业设备等。准确理解工具特性和用法，培养选择合适工具并正确使用的能力。',
        '持续学习新技术。技术不断发展，新工具、材料、工艺层出不穷，保持终身学习。参与相关课程或研讨会，把握最新趋势并持续更新。',
        '遵守安全规则。技术作业可能存在危险。严格遵守安全规章，务必穿戴防护装备，提前识别危险并做好准备。安全关乎生命与健康。',
        '成为可信赖的专家。作为技术者需诚实且可靠。履约守时，保证质量，履行对客户承诺。良好声誉带来更多机会与更好的条件。',
        '注重体能管理。技术作业多为体力劳动。通过规律运动保持体能，增强肌力以预防作业中的伤害。健康体魄是长期从事技术工作的基础。',
        '培养成本估算能力。除技术外商业敏感度也很重要。培养计算材料费、人工费与时间以合理定价的能力。在自主创业或成为自由职业者时特别有用。',
        '发展客户沟通能力。技术者不只需处理机器，还需与客户对话以理解需求、说明作业与解决问题。良好的关系带来复购与推荐。',
        '规划长期职业路径。技术者随经验积累价值递增。初期积累多样经验，随后选专业领域深化，最终向大师或教育者方向发展。'
      ], 'zh-TW': [
        '學習專業技能並取得認證。要在技術崗位成功，需要紮實學習相關專業技能。在技術學校或職業訓練中心接受系統教育，取得國家技術認證以證明專業度。認證是展示能力的客觀手段，並為求職帶來更多機會。',
        '積累大量實踐經驗。技術更看重實戰而非理論。透過現場作業、處理各種情況與解決問題來培養真實能力。多做專案積累經驗，透過問題解決提升技術能力。',
        '熟悉工具和機器。對技術者而言工具與機器必不可少。需熟練使用各類電動工具、測量儀器、作業設備等。準確理解工具特性和用法，培養選擇合適工具並正確使用的能力。',
        '持續學習新技術。技術不斷發展，新工具、材料、工藝層出不窮，保持終身學習。參與相關課程或研討會，把握最新趨勢並持續更新。',
        '遵守安全規則。技術作業可能存在危險。嚴格遵守安全規章，務必穿戴防護裝備，提前識別危險並做好準備。安全關乎生命與健康。',
        '成為可信賴的專家。作為技術者需誠實且可靠。履約守時，保證質量，履行對客戶承諾。良好聲譽帶來更多機會與更好的條件。',
        '注重體能管理。技術作業多為體力勞動。透過規律運動保持體能，增強肌力以預防作業中的傷害。健康體魄是長期從事技術工作的基礎。',
        '培養成本估算能力。除技術外商業敏感度也很重要。培養計算材料費、人工費與時間以合理定價的能力。在自主創業或成為自由職業者時特別有用。',
        '發展客戶溝通能力。技術者不只需處理機器，還需與客戶對話以理解需求、說明作業與解決問題。良好的關係帶來復購與推薦。',
        '規劃長期職涯路徑。技術者隨經驗積累價值遞增。初期積累多樣經驗，隨後選專業領域深化，最終向大師或教育者方向發展。'
      ], vi: [
        'Học kỹ thuật chuyên nghiệp và lấy chứng nhận. Để thành công như một thợ kỹ thuật, bạn cần học chuyên môn liên quan vững chắc. Nhận giáo dục có hệ thống tại trường kỹ thuật hoặc trung tâm dạy nghề, và lấy chứng nhận kỹ thuật quốc gia để chứng minh chuyên môn.',
        'Xây dựng kinh nghiệm thực tế rộng rãi. Kỹ thuật là thực hành hơn lý thuyết. Khả năng thực sự được xây dựng bằng việc làm việc tại hiện trường, trải nghiệm tình huống, và giải quyết vấn đề.',
        'Làm quen với công cụ và máy móc. Công cụ và máy móc là điều cần thiết. Làm chủ công cụ điện, thiết bị đo lường, và thiết bị làm việc. Hiểu rõ cách sử dụng và chọn công cụ phù hợp.',
        'Liên tục học các công nghệ mới. Công nghệ phát triển. Công cụ, vật liệu, và phương pháp mới xuất hiện, vì vậy áp dụng tư duy học tập suốt đời. Tham gia khóa học hoặc hội thảo và cập nhật kiến thức.',
        'Tuân thủ quy tắc an toàn. Công việc kỹ thuật có thể nguy hiểm. Tuân thủ quy tắc an toàn, đeo thiết bị an toàn, và chuẩn bị cho nguy hiểm. An toàn bảo vệ tính mạng và sức khỏe.',
        'Trở thành chuyên gia đáng tin cậy. Hãy trung thực và đáng tin cậy. Đáp ứng thời hạn, đảm bảo chất lượng, và tôn trọng cam kết. Danh tiếng tốt mang lại nhiều cơ hội hơn.',
        'Duy trì thể lực. Công việc kỹ thuật đòi hỏi thể chất. Tập thể dục thường xuyên để giữ dáng và ngăn ngừa chấn thương. Thân thể khỏe mạnh hỗ trợ công việc lâu dài.',
        'Xây dựng ước tính chi phí. Cảm nhận kinh doanh quan trọng. Tính toán vật liệu, lao động, và thời gian để định giá phù hợp. Điều này giúp nếu bắt đầu kinh doanh riêng hoặc freelancing.',
        'Phát triển giao tiếp khách hàng. Đừng chỉ xử lý máy móc. Nói chuyện với khách hàng, hiểu nhu cầu, giải thích công việc, và giải quyết vấn đề. Mối quan hệ tốt dẫn đến kinh doanh lặp lại.',
        'Thiết kế sự nghiệp dài hạn. Thợ kỹ thuật tăng giá trị với kinh nghiệm. Ban đầu, có kinh nghiệm đa dạng; tiếp theo, chuyên môn hóa và sâu hơn; cuối cùng, nhắm đến trở thành bậc thầy hoặc nhà giáo dục.'
      ], id: [
        'Pelajari keterampilan profesional dan peroleh sertifikasi. Untuk sukses sebagai teknisi, Anda perlu mempelajari keahlian terkait dengan solid. Terima pendidikan sistematis di sekolah teknis atau pusat pelatihan vokasional, dan dapatkan sertifikasi teknis nasional untuk membuktikan keahlian.',
        'Bangun pengalaman lapangan yang luas. Teknologi lebih tentang praktik daripada teori. Kemampuan sejati dibangun dengan bekerja di lokasi, mengalami situasi, dan memecahkan masalah. Lakukan proyek untuk mendapatkan pengalaman dan meningkatkan keterampilan melalui pemecahan masalah.',
        'Biasakan diri dengan alat dan mesin. Alat dan mesin sangat penting. Kuasai alat-alat listrik, peralatan pengukuran, dan peralatan kerja. Pahami penggunaan dengan tepat dan pilih alat yang sesuai.',
        'Terus pelajari teknologi baru. Teknologi berkembang. Alat, bahan, dan metode baru muncul, jadi terapkan pola pikir pembelajaran seumur hidup. Bergabunglah dengan kursus atau seminar dan perbarui pengetahuan.',
        'Ikuti aturan keselamatan. Pekerjaan teknis bisa berbahaya. Patuhi aturan keselamatan, kenakan peralatan keselamatan, dan bersiaplah menghadapi bahaya. Keselamatan melindungi kehidupan dan kesehatan.',
        'Menjadi ahli yang dapat dipercaya. Jadilah jujur dan dapat diandalkan. Penuhi tenggat waktu, jamin kualitas, dan hormati komitmen. Reputasi yang baik membawa lebih banyak peluang.',
        'Pertahankan kebugaran fisik. Pekerjaan teknis menuntut secara fisik. Olahraga teratur untuk tetap fit dan mencegah cedera. Tubuh yang sehat mendukung pekerjaan jangka panjang.',
        'Bangun perkiraan biaya. Rasa bisnis penting. Hitung material, tenaga kerja, dan waktu untuk menetapkan harga yang sesuai. Ini membantu jika memulai bisnis sendiri atau freelancing.',
        'Kembangkan komunikasi pelanggan. Jangan hanya menangani mesin. Bicaralah dengan pelanggan, pahami kebutuhan, jelaskan pekerjaan, dan pecahkan masalah. Hubungan yang baik mengarah pada bisnis berulang.',
        'Desain karier jangka panjang. Teknisi mendapatkan nilai dengan pengalaman. Awalnya, dapatkan pengalaman yang beragam; selanjutnya, spesialisasi dan perdalam; akhirnya, bertujuan menjadi master atau pendidik.'
      ]
    },
    fortune: {
      success: { 
        ko: [
          '전문 기술자로 인정받을 수 있습니다. 당신의 정확하고 신뢰할 수 있는 작업 능력은 업계에서 인정받을 수 있으며, 전문 기술자로서 명성을 얻을 수 있습니다. 꾸준히 좋은 결과를 만들어내는 당신은 많은 사람들이 찾는 기술자가 됩니다.',
          '안정적인 수입을 얻을 수 있습니다. 기술자는 항상 필요한 직업입니다. 기술력이 있는 사람은 어느 시대에도 필요하며, 당신의 능력에 대한 대가는 안정적으로 보장됩니다. 경력이 쌓일수록 더 높은 급여를 받을 수 있습니다.',
          '자신만의 기술을 개발할 수 있습니다. 당신의 실용적 사고와 문제 해결 능력은 새로운 기술과 방법을 개발할 수 있게 해줍니다. 기존의 방식을 개선하거나 더 효율적인 방법을 찾아내는 능력으로 차별화할 수 있습니다.',
          '장기적으로 성공할 가능성이 높습니다. 기술자는 경력이 쌓일수록 더 가치가 높아집니다. 당신의 끈기와 인내심은 장기적으로 안정적이고 성공적인 경력을 만들어줍니다.',
          '경쟁력 있는 직업인이 될 수 있습니다. 당신의 기술력과 전문성은 시장에서 높은 경쟁력을 가집니다. 좋은 기술자에게는 항상 일이 있으며, 당신은 선택받는 인재가 될 수 있습니다.'
        ],
        en: [
          'You can be recognized as a professional technician. Your accurate and reliable work ability is recognized by the industry, and you can gain reputation as a professional technician. As you consistently produce good results, you become a technician sought by many people.',
          'You can earn stable income. Technicians are always needed professions. People with technical skills are needed in any era, and compensation for your abilities is stably guaranteed. As your career builds, you can receive higher wages.',
          'You can develop your own technology. Your practical thinking and problem-solving abilities enable you to develop new technologies and methods. You can differentiate yourself through the ability to improve existing methods or find more efficient approaches.',
          'You have a high likelihood of long-term success. Technicians become more valuable as their careers build. Your persistence and patience create a stable and successful career long-term.',
          'You can become a competitive professional. Your technical skills and expertise have high competitiveness in the market. There is always work for good technicians, and you can become a sought-after talent.'
        ], ja: [
          '専門技術者として認められます。正確で信頼できる作業能力は業界で認められ、専門技術者として評判を得られます。良い結果を着実に作るあなたは多くの人が求める技術者になります。',
          '安定した収入を得られます。技術者は常に必要な職業です。技能のある人はどの時代にも必要で、能力に対する報酬は安定して保証されます。キャリアが積まれるほど高い給料を得られます。',
          '自分だけの技術を開発できます。実用的思考と問題解決能力は新技術と方法を開発できます。既存方式を改善したりより効率的な方法を見つける能力で差別化できます。',
          '長期的に成功する可能性が高いです。技術者はキャリアが積まれるほど価値が高まります。粘り強さと忍耐力は長期的に安定した成功キャリアを作ります。',
          '競争力のある職業人になれます。技術力と専門性は市場で高い競争力があります。良い技術者には常に仕事があり、選択される人材になれます。'
        ], 'zh-CN': [
          '你可以被认可为专业技术者。你准确可靠的工作能力得到行业认可，你能获得专业技术者的声誉。随着你持续产出良好成果，你成为许多人寻找的技术者。',
          '你可以获得稳定收入。技术者始终是需要的职业。具备技术技能的人在任何一个时代都必不可少，你能力的报酬得到稳定保障。随着职业积累，你可以获得更高薪资。',
          '你可以开发自己的技术。你实用性的思维与问题解决能力使你能够开发新技术与方法。你可以通过改进现有方法或发现更高效途径的能力实现差异化。',
          '你长期成功的可能性高。技术者随职业积累价值递增。你的坚持与耐心创造长期稳定且成功的职业。',
          '你可以成为有竞争力的职业人。你的技术能力与专业度在市场上拥有高竞争力。优秀技术者总有机会，你可以成为被选中的人才。'
        ], 'zh-TW': [
          '你可以被認可為專業技術者。你準確可靠的工作能力得到行業認可，你能獲得專業技術者的聲譽。隨著你持續產出良好成果，你成為許多人尋找的技術者。',
          '你可以獲得穩定收入。技術者始終是需要的職業。具備技術技能的人在任何一個時代都必不可少，你能力的報酬得到穩定保障。隨著職業積累，你可以獲得更高薪資。',
          '你可以開發自己的技術。你實用性的思維與問題解決能力使你能夠開發新技術與方法。你可以通過改進現有方法或發現更高效途徑的能力實現差異化。',
          '你長期成功的可能性高。技術者隨職業積累價值遞增。你的堅持與耐心創造長期穩定且成功的職業。',
          '你可以成為有競爭力的職業人。你的技術能力與專業度在市場上擁有高競爭力。優秀技術者總有機會，你可以成為被選中的人才。'
        ], vi: [
          'Bạn có thể được công nhận như một kỹ thuật viên chuyên nghiệp. Khả năng làm việc chính xác và đáng tin cậy của bạn được ngành công nhận, và bạn có thể giành được danh tiếng như một kỹ thuật viên chuyên nghiệp. Khi bạn liên tục tạo ra kết quả tốt, bạn trở thành một kỹ thuật viên được nhiều người tìm kiếm.',
          'Bạn có thể kiếm thu nhập ổn định. Kỹ thuật viên là những nghề luôn cần thiết. Người có kỹ năng kỹ thuật luôn cần thiết trong bất kỳ thời đại nào, và lương thưởng cho khả năng của bạn được đảm bảo ổn định. Khi sự nghiệp của bạn xây dựng, bạn có thể nhận lương cao hơn.',
          'Bạn có thể phát triển công nghệ của riêng mình. Tư duy thực tế và khả năng giải quyết vấn đề của bạn cho phép bạn phát triển các công nghệ và phương pháp mới. Bạn có thể phân biệt hóa bản thân thông qua khả năng cải thiện các phương pháp hiện có hoặc tìm ra các cách tiếp cận hiệu quả hơn.',
          'Bạn có khả năng thành công dài hạn cao. Kỹ thuật viên trở nên có giá trị hơn khi sự nghiệp của họ xây dựng. Sự bền bỉ và kiên nhẫn của bạn tạo ra một sự nghiệp ổn định và thành công lâu dài.',
          'Bạn có thể trở thành một người nghề nghiệp có khả năng cạnh tranh. Kỹ năng kỹ thuật và chuyên môn của bạn có khả năng cạnh tranh cao trên thị trường. Luôn có công việc cho kỹ thuật viên tốt, và bạn có thể trở thành tài năng được tìm kiếm.'
        ], id: [
          'Anda dapat diakui sebagai teknisi profesional. Kemampuan kerja yang akurat dan andal Anda diakui oleh industri, dan Anda dapat memperoleh reputasi sebagai teknisi profesional. Saat Anda secara konsisten menghasilkan hasil yang baik, Anda menjadi teknisi yang dicari banyak orang.',
          'Anda dapat memperoleh pendapatan stabil. Teknisi adalah profesi yang selalu diperlukan. Orang dengan keterampilan teknis diperlukan di era apa pun, dan kompensasi untuk kemampuan Anda dijamin dengan stabil. Seiring berkembangnya karier Anda, Anda dapat menerima upah yang lebih tinggi.',
          'Anda dapat mengembangkan teknologi Anda sendiri. Pemikiran praktis dan kemampuan pemecahan masalah Anda memungkinkan Anda mengembangkan teknologi dan metode baru. Anda dapat membedakan diri melalui kemampuan untuk memperbaiki metode yang ada atau menemukan pendekatan yang lebih efisien.',
          'Anda memiliki kemungkinan sukses jangka panjang yang tinggi. Teknisi menjadi lebih berharga seiring berkembangnya karier mereka. Ketekunan dan kesabaran Anda menciptakan karier yang stabil dan sukses jangka panjang.',
          'Anda dapat menjadi profesional yang kompetitif. Keterampilan teknis dan keahlian Anda memiliki daya saing tinggi di pasar. Selalu ada pekerjaan untuk teknisi yang baik, dan Anda dapat menjadi bakat yang dicari.'
        ] 
      },
      hidden: { 
        ko: [
          '자신만의 기술로 사업을 시작할 수 있습니다. 당신의 기술력과 경험을 바탕으로 자신만의 사업을 시작할 수 있습니다. 기술 서비스 사업이나 제조업 분야에서 독립하여 더 큰 성공을 이룰 수 있습니다.',
          '고수익 창업도 가능합니다. 당신의 기술력과 사업 감각을 결합하면 고수익을 내는 사업을 만들 수 있습니다. 독특한 기술이나 서비스로 차별화하여 프리미엄을 받을 수 있습니다.',
          '명인이 될 가능성이 있습니다. 당신의 끊임없는 학습과 노력은 업계에서 명인으로 인정받을 수 있는 수준까지 발전시킬 수 있습니다. 명인으로서 당신은 많은 사람들이 찾는 최고의 기술자가 됩니다.',
          '교육자로 후배를 양성할 수 있습니다. 당신의 경험과 노하우를 후배들에게 전수하여 그들이 더 쉽게 성장할 수 있도록 도와줄 수 있습니다. 교육자로서의 역할은 당신에게 큰 보람을 주며, 업계 발전에도 기여합니다.',
          '세계적인 기술자로 성장할 수 있습니다. 당신의 기술력과 의지는 국제적인 수준까지 발전시킬 수 있습니다. 글로벌 프로젝트에 참여하거나 해외에서 활동하며 세계적인 기술자가 될 수 있습니다.'
        ],
        en: [
          'You can start a business with your own technology. Based on your technical skills and experience, you can start your own business. You can achieve greater success by becoming independent in technical service businesses or manufacturing fields.',
          'High-profit startups are also possible. Combining your technical skills and business sense can create high-profit businesses. You can differentiate with unique technologies or services and receive premiums.',
          'You have the potential to become a master. Your endless learning and effort can develop to the level recognized as a master in the industry. As a master, you become the best technician sought by many people.',
          'You can nurture juniors as an educator. You can pass on your experience and know-how to juniors to help them grow more easily. The role as an educator gives you great satisfaction and contributes to industry development.',
          'You can grow into a global technician. Your technical skills and will can develop to international levels. You can participate in global projects or work overseas to become a worldwide technician.'
        ], ja: [
          '自分だけの技術で事業を開始できます。技術力と経験を基盤に自分だけの事業を始められます。技術サービス事業や製造業分野で独立しより大きな成功を達成できます。',
          '高収益の創業も可能です。技術力と事業感覚を結合すれば高収益を出す事業を作れます。独特な技術やサービスで差別化しプレミアムを受けられます。',
          '名工になる可能性があります。絶え間ない学習と努力は業界で名工として認められるレベルまで発展させられます。名工として多くの人が求める最高の技術者になります。',
          '教育者として後輩を育成できます。経験とノウハウを後輩に伝授しより簡単に成長できるよう助けられます。教育者としての役割は大きなやりがいを与え業界発展にも貢献します。',
          '世界的技術者に成長できます。技術力と意志は国際レベルまで発展させられます。グローバルプロジェクトに参加したり海外で活動し世界的技術者になれます。'
        ], 'zh-CN': [
          '你可以凭借自己的技术开始创业。基于你的技术技能与经验，你可以开始自己的事业。在技术服务业务或制造领域独立，可取得更大成功。',
          '高收益创业也可行。将你的技术能力与商业洞察结合，可打造高收益业务。通过独特技术或服务实现差异化，获得溢价。',
          '你有潜力成为大师。你持续的学习与努力可发展到行业认可的大师水平。作为大师，你成为许多人寻找的顶尖技术者。',
          '你可以作为教育者培养后辈。你将经验与诀窍传授给后辈，助其更轻松成长。教育者角色给你带来成就感并助力行业发展。',
          '你可以成长为全球技术者。你的技术能力与意志可发展到国际水平。参与全球项目或在海外工作，成为世界级技术者。'
        ], 'zh-TW': [
          '你可以憑藉自己的技術開始創業。基於你的技術技能與經驗，你可以開始自己的事業。在技術服務業務或製造領域獨立，可取得更大成功。',
          '高收益創業也可行。將你的技術能力與商業洞察結合，可打造高收益業務。透過獨特技術或服務實現差異化，獲得溢價。',
          '你有潛力成為大師。你持續的學習與努力可發展到行業認可的大師水平。作為大師，你成為許多人尋找的頂尖技術者。',
          '你可以作為教育者培養後輩。你將經驗與訣竅傳授給後輩，助其更輕鬆成長。教育者角色給你帶來成就感並助力行業發展。',
          '你可以成長為全球技術者。你的技術能力與意志可發展到國際水平。參與全球專案或在海外工作，成為世界級技術者。'
        ], vi: [
          'Bạn có thể bắt đầu kinh doanh bằng công nghệ của riêng mình. Dựa trên kỹ năng kỹ thuật và kinh nghiệm của bạn, bạn có thể bắt đầu doanh nghiệp của riêng mình. Bạn có thể đạt được thành công lớn hơn bằng cách trở nên độc lập trong các doanh nghiệp dịch vụ kỹ thuật hoặc lĩnh vực sản xuất.',
          'Khởi nghiệp lợi nhuận cao cũng có thể. Kết hợp kỹ năng kỹ thuật và cảm nhận kinh doanh của bạn có thể tạo ra các doanh nghiệp lợi nhuận cao. Bạn có thể phân biệt hóa với các công nghệ hoặc dịch vụ độc đáo và nhận được phụ phí.',
          'Bạn có tiềm năng trở thành bậc thầy. Việc học tập và nỗ lực không ngừng của bạn có thể phát triển đến mức được công nhận là bậc thầy trong ngành. Với tư cách là bậc thầy, bạn trở thành kỹ thuật viên tốt nhất được nhiều người tìm kiếm.',
          'Bạn có thể nuôi dưỡng các thế hệ trẻ như một nhà giáo dục. Bạn có thể truyền lại kinh nghiệm và bí quyết của mình cho thế hệ trẻ để giúp họ phát triển dễ dàng hơn. Vai trò như một nhà giáo dục mang lại cho bạn sự hài lòng lớn và đóng góp cho sự phát triển ngành công nghiệp.',
          'Bạn có thể phát triển thành kỹ thuật viên toàn cầu. Kỹ năng kỹ thuật và ý chí của bạn có thể phát triển đến mức quốc tế. Bạn có thể tham gia vào các dự án toàn cầu hoặc làm việc ở nước ngoài để trở thành kỹ thuật viên trên toàn thế giới.'
        ], id: [
          'Anda dapat memulai bisnis dengan teknologi Anda sendiri. Berdasarkan keterampilan teknis dan pengalaman Anda, Anda dapat memulai bisnis Anda sendiri. Anda dapat mencapai kesuksesan yang lebih besar dengan menjadi independen dalam bisnis layanan teknis atau bidang manufaktur.',
          'Startup berprofit tinggi juga memungkinkan. Menggabungkan keterampilan teknis dan naluri bisnis Anda dapat menciptakan bisnis berprofit tinggi. Anda dapat membedakan dengan teknologi atau layanan unik dan menerima premi.',
          'Anda memiliki potensi untuk menjadi master. Pembelajaran dan upaya Anda yang tiada henti dapat berkembang ke tingkat yang diakui sebagai master di industri. Sebagai master, Anda menjadi teknisi terbaik yang dicari banyak orang.',
          'Anda dapat membina junior sebagai pendidik. Anda dapat meneruskan pengalaman dan pengetahuan Anda kepada junior untuk membantu mereka tumbuh dengan lebih mudah. Peran sebagai pendidik memberi Anda kepuasan besar dan berkontribusi pada pengembangan industri.',
          'Anda dapat berkembang menjadi teknisi global. Keterampilan teknis dan tekad Anda dapat berkembang ke tingkat internasional. Anda dapat berpartisipasi dalam proyek global atau bekerja di luar negeri untuk menjadi teknisi di seluruh dunia.'
        ] 
      }
    }
  },
  {
    id: 7,
    title: { ko: '서비스형', en: 'Service Type', ja: 'サービス型', 'zh-CN': '服务型', 'zh-TW': '服務型', vi: 'Kiểu Dịch Vụ', id: 'Tipe Layanan' },
    description: {
      ko: [
        '당신의 얼굴은 친절함과 배려심을 보여줍니다. 사람들을 돌보고 도와주는 것을 좋아하는 성격입니다.',
        '따뜻하고 포용적인 인상입니다. 누구에게나 환대하고 환영하는 마음이 있습니다.',
        '세심함과 배려가 얼굴에 드러납니다. 다른 사람의 필요를 먼저 파악하고 도와줍니다.',
        '참을성이 많고 온화한 성향을 보입니다. 고객의 요구사항을 잘 들어주고 처리합니다.',
        '긍정적이고 밝은 에너지를 가지고 있습니다. 주변 사람들에게 긍정적인 영향을 미칩니다.',
        '이해심이 많고 공감 능력이 높습니다. 상대방의 입장을 잘 이해하고 공감합니다.',
        '협력과 팀워크를 중시합니다. 팀의 일원으로서 역할을 완벽하게 수행합니다.',
        '디테일한 서비스를 제공하는 능력이 뛰어납니다. 작은 것까지 놓치지 않고 챙깁니다.',
        '관계 구축 능력이 뛰어납니다. 고객들과 좋은 관계를 유지하고 신뢰를 얻습니다.',
        '에티켓과 전문성을 갖춘 서비스 제공자입니다. 예의 바르고 전문적으로 업무를 처리합니다.'
      ],
      en: [
        'Your face shows kindness and consideration. You have a personality that likes to care for and help people.',
        'You have a warm and welcoming impression. You have a welcoming and embracing heart for everyone.',
        'Carefulness and consideration are evident in your face. You first understand others\' needs and help them.',
        'You show much patience and gentle tendencies. You listen to and handle customers\' requirements well.',
        'You have positive and bright energy. You have a positive influence on people around you.',
        'You have much understanding and high empathy. You understand and empathize with others\' positions well.',
        'You value cooperation and teamwork. You perform your role as a team member perfectly.',
        'You have excellent ability to provide detailed service. You don\'t miss even small things.',
        'You have excellent relationship-building ability. You maintain good relationships with customers and gain trust.',
        'You are a service provider with etiquette and professionalism. You handle work politely and professionally.'
      ], 
      ja: [
        'あなたの顔は親切さと思いやりを示しています。人々を世話し助けることを好む性格です。',
        '温かく包容力のある印象です。誰に対しても歓待し歓迎する心があります。',
        '細かさと思いやりが顔に現れています。他の人の必要を最初に把握し助けます。',
        '忍耐が強く穏やかな傾向を示します。顧客の要求事項をよく聞き処理します。',
        'ポジティブで明るいエネルギーを持っています。周りの人々にポジティブな影響を与えます。',
        '理解力が強く共感能力が高いです。相手の立場をよく理解し共感します。',
        '協力とチームワークを重視します。チームの一員として役割を完璧に遂行します。',
        '細かなサービスを提供する能力に優れています。小さなことまで見落とさずケアします。',
        '関係構築能力に優れています。顧客と良い関係を維持し信頼を得ます。',
        'エチケットと専門性を備えたサービス提供者です。礼儀正しく専門的に業務を処理します。'
      ], 
      'zh-CN': [
        '你的面相展现出亲切与体贴。你拥有喜欢照顾并帮助他人的个性。',
        '你给人温暖与包容的印象。你对所有人都有欢迎与接纳之心。',
        '细心与体贴在面相中显现。你会首先理解他人的需求并帮助他们。',
        '你呈现出很强的耐心与温和倾向。你善于倾听并处理客户要求。',
        '你拥有积极与明亮的气息。你对周围的人产生积极影响。',
        '你理解力强且共情能力高。你善于理解并共情他人的立场。',
        '你重视合作与团队协作。你完美履行作为团队成员的角色。',
        '你具备出色的细致服务能力。你连细节都不会遗漏。',
        '你拥有出色的人际关系建设能力。你与客户保持良好关系并获得信任。',
        '你是具备礼仪与专业性的服务提供者。你礼貌并专业地处理工作。'
      ], 
      'zh-TW': [
        '你的面相展現出親切與體貼。你擁有喜歡照顧並幫助他人的個性。',
        '你給人溫暖與包容的印象。你對所有人都有歡迎與接納之心。',
        '細心與體貼在面相中顯現。你會首先理解他人的需求並幫助他們。',
        '你呈現出很強的耐心與溫和傾向。你善於傾聽並處理客戶要求。',
        '你擁有積極與明亮的氣息。你對周圍的人產生積極影響。',
        '你理解力強且共情能力高。你善於理解並共情他人的立場。',
        '你重視合作與團隊協作。你完美履行作為團隊成員的角色。',
        '你具備出色的細緻服務能力。你連細節都不會遺漏。',
        '你擁有出色的人際關係建設能力。你與客戶保持良好關係並獲得信任。',
        '你是具備禮儀與專業性的服務提供者。你禮貌並專業地處理工作。'
      ], 
      vi: [
        'Khuôn mặt bạn thể hiện sự tử tế và quan tâm. Bạn có tính cách thích chăm sóc và giúp đỡ mọi người.',
        'Bạn có ấn tượng ấm áp và bao dung. Bạn có trái tim chào đón và ôm ấp tất cả mọi người.',
        'Sự cẩn thận và quan tâm rõ ràng trên khuôn mặt của bạn. Bạn hiểu nhu cầu của người khác trước và giúp họ.',
        'Bạn thể hiện nhiều kiên nhẫn và xu hướng hiền hòa. Bạn lắng nghe và xử lý yêu cầu của khách hàng tốt.',
        'Bạn có năng lượng tích cực và tươi sáng. Bạn có ảnh hưởng tích cực đến những người xung quanh.',
        'Bạn có sự hiểu biết và khả năng đồng cảm cao. Bạn hiểu và đồng cảm với vị trí của người khác tốt.',
        'Bạn coi trọng sự hợp tác và làm việc nhóm. Bạn thực hiện vai trò như một thành viên trong nhóm một cách hoàn hảo.',
        'Bạn có khả năng cung cấp dịch vụ chi tiết xuất sắc. Bạn không bỏ lỡ ngay cả những điều nhỏ.',
        'Bạn có khả năng xây dựng mối quan hệ xuất sắc. Bạn duy trì mối quan hệ tốt với khách hàng và giành được niềm tin.',
        'Bạn là nhà cung cấp dịch vụ có phép tắc và chuyên nghiệp. Bạn xử lý công việc một cách lịch sự và chuyên nghiệp.'
      ], 
      id: [
        'Wajah Anda menunjukkan kebaikan dan pertimbangan. Anda memiliki kepribadian yang suka merawat dan membantu orang.',
        'Anda memiliki kesan hangat dan ramah. Anda memiliki hati yang menyambut dan merangkul semua orang.',
        'Kehati-hatian dan pertimbangan jelas terlihat di wajah Anda. Anda memahami kebutuhan orang lain terlebih dahulu dan membantu mereka.',
        'Anda menunjukkan banyak kesabaran dan kecenderungan lembut. Anda mendengarkan dan menangani persyaratan pelanggan dengan baik.',
        'Anda memiliki energi positif dan cerah. Anda memiliki pengaruh positif pada orang-orang di sekitar Anda.',
        'Anda memiliki banyak pemahaman dan kemampuan empati yang tinggi. Anda memahami dan merasakan posisi orang lain dengan baik.',
        'Anda menghargai kerja sama dan kerja tim. Anda menjalankan peran sebagai anggota tim dengan sempurna.',
        'Anda memiliki kemampuan luar biasa untuk menyediakan layanan detail. Anda tidak melewatkan bahkan hal-hal kecil.',
        'Anda memiliki kemampuan membangun hubungan yang luar biasa. Anda mempertahankan hubungan baik dengan pelanggan dan mendapatkan kepercayaan.',
        'Anda adalah penyedia layanan dengan etiket dan profesionalisme. Anda menangani pekerjaan dengan sopan dan profesional.'
      ]
    },
    emoji: '🤝',
    scoreRange: [30, 39],
    strengths: { 
      ko: ['친절함', '배려심', '공감력', '세심함', '참을성', '긍정성', '협력성', '관계구축', '서비스정신', '예의바름'], 
      en: ['Kindness', 'Consideration', 'Empathy', 'Carefulness', 'Patience', 'Positivity', 'Cooperation', 'Relationship Building', 'Service Mindset', 'Courtesy'], 
      ja: ['親切さ', '思いやり', '共感力', '細心', '忍耐', '積極性', '協力性', '関係構築', 'サービス精神', '礼儀正しさ'], 
      'zh-CN': ['亲切', '体贴', '共情力', '细心', '耐心', '积极性', '合作性', '关系建设', '服务精神', '礼貌'], 
      'zh-TW': ['親切', '體貼', '共情力', '細心', '耐心', '積極性', '合作性', '關係建設', '服務精神', '禮貌'], 
      vi: ['Tử tế', 'Quan tâm', 'Đồng cảm', 'Cẩn thận', 'Kiên nhẫn', 'Tích cực', 'Hợp tác', 'Xây dựng mối quan hệ', 'Tinh thần phục vụ', 'Lịch sự'], 
      id: ['Kebaikan', 'Pertimbangan', 'Empati', 'Kewaspadaan', 'Kesabaran', 'Positivitas', 'Kerjasama', 'Pembangunan Hubungan', 'Semangat Pelayanan', 'Sopan santun'] 
    },
    recommendations: { 
      ko: ['요리사', '서빙', '호텔직원', '항공승무원', '미용사', '에스테티션', '안내데스크', '카운터직', '고객서비스', '리셉셔니스트'], 
      en: ['Chef', 'Waiter/Waitress', 'Hotel Staff', 'Flight Attendant', 'Hairdresser', 'Esthetician', 'Information Desk', 'Counter Staff', 'Customer Service', 'Receptionist'], 
      ja: ['シェフ', '給仕', 'ホテルスタッフ', '客室乗務員', '美容師', 'エステティシャン', '案内デスク', '受付係', 'カスタマーサービス', '受付'], 
      'zh-CN': ['厨师', '服务员', '酒店员工', '空乘人员', '理发师', '美容师', '问询台', '柜台员工', '客服', '接待员'], 
      'zh-TW': ['廚師', '服務員', '酒店員工', '空乘人員', '理髮師', '美容師', '問詢台', '櫃台員工', '客服', '接待員'], 
      vi: ['Đầu bếp', 'Nhân viên phục vụ', 'Nhân viên khách sạn', 'Tiếp viên hàng không', 'Thợ làm tóc', 'Chuyên viên làm đẹp', 'Bàn hướng dẫn', 'Nhân viên quầy', 'Dịch vụ khách hàng', 'Lễ tân'], 
      id: ['Koki', 'Pelayan', 'Staf Hotel', 'Pramugari', 'Penata Rambut', 'Estetisian', 'Meja Informasi', 'Staf Konter', 'Layanan Pelanggan', 'Resepsionis'] 
    },
    personality: { 
      ko: [
        '친절하고 배려심이 많은 성격입니다.',
        '사람들을 돌보는 것을 좋아합니다.',
        '따뜻하고 포용적인 성향이 강합니다.',
        '세심하고 정성스럽게 일합니다.',
        '참을성이 많습니다.',
        '긍정적이고 밝습니다.',
        '협력과 팀워크를 중시합니다.',
        '관계를 소중히 여깁니다.',
        '서비스 정신이 투철합니다.',
        '예의 바르고 매너가 좋습니다.'
      ],
      en: [
        'You have a kind and considerate personality.',
        'You like to take care of people.',
        'You have strong tendencies to be warm and embracing.',
        'You work carefully and earnestly.',
        'You have much patience.',
        'You are positive and bright.',
        'You value cooperation and teamwork.',
        'You cherish relationships.',
        'You have a strong service spirit.',
        'You are polite and have good manners.'
      ], ja: [
        '親切で思いやりが多い性格です。',
        '人々を世話することを好みます。',
        '温かく包容的な傾向が強いです。',
        '細かく丁寧に仕事をします。',
        '忍耐が多いです。',
        'ポジティブで明るいです。',
        '協力とチームワークを重視します。',
        '関係を大切にします。',
        'サービス精神が強固です。',
        '礼儀正しくマナーが良いです。'
      ], 'zh-CN': [
        '你拥有亲切且体贴的个性。',
        '你喜欢照顾他人。',
        '你呈现很强的温暖与包容倾向。',
        '你工作仔细且认真。',
        '你很有耐心。',
        '你积极且开朗。',
        '你重视合作与团队协作。',
        '你珍视关系。',
        '你具备强烈的服务精神。',
        '你彬彬有礼且举止良好。'
      ], 'zh-TW': [
        '你擁有親切且體貼的個性。',
        '你喜歡照顧他人。',
        '你呈現很強的溫暖與包容傾向。',
        '你工作仔細且認真。',
        '你很有耐心。',
        '你積極且開朗。',
        '你重視合作與團隊協作。',
        '你珍視關係。',
        '你具備強烈的服務精神。',
        '你彬彬有禮且舉止良好。'
      ], vi: [
        'Bạn có tính cách tử tế và quan tâm.',
        'Bạn thích chăm sóc mọi người.',
        'Bạn có xu hướng ấm áp và bao dung mạnh mẽ.',
        'Bạn làm việc cẩn thận và chân thành.',
        'Bạn có nhiều kiên nhẫn.',
        'Bạn tích cực và tươi sáng.',
        'Bạn coi trọng hợp tác và làm việc nhóm.',
        'Bạn trân trọng các mối quan hệ.',
        'Bạn có tinh thần phục vụ mạnh mẽ.',
        'Bạn lịch sự và có cách cư xử tốt.'
      ], id: [
        'Anda memiliki kepribadian yang baik dan perhatian.',
        'Anda suka merawat orang-orang.',
        'Anda memiliki kecenderungan yang kuat untuk hangat dan merangkul.',
        'Anda bekerja dengan hati-hati dan sungguh-sungguh.',
        'Anda memiliki banyak kesabaran.',
        'Anda positif dan cerah.',
        'Anda menghargai kerja sama dan kerja tim.',
        'Anda menghargai hubungan.',
        'Anda memiliki semangat pelayanan yang kuat.',
        'Anda sopan dan memiliki tata krama yang baik.'
      ]
    },
    advice: { 
      ko: [
        '서비스 마인드를 더욱 키우세요. 고객을 진심으로 대하고 그들이 행복해하는 모습을 보며 기쁨을 느낄 수 있는 마인드를 가져야 합니다. 고객 중심의 사고를 하고, 항상 고객의 입장에서 생각하며 최선의 서비스를 제공해야 합니다.',
        '고객 대응 능력을 향상시키세요. 다양한 성향의 고객들을 만나고 적절하게 대응할 수 있는 능력을 키워야 합니다. 고객의 요구를 빠르게 파악하고 적절한 해결책을 제시할 수 있는 능력이 중요합니다.',
        '커뮤니케이션 스킬을 개발하세요. 고객과의 소통에서 예의와 정중함을 잃지 않으면서도 친근하게 대할 수 있는 능력을 키워야 합니다. 말투, 태도, 몸짓 등 모든 것이 고객 경험에 영향을 미치므로 신경써야 합니다.',
        '외국어를 배워보세요. 글로벌 시대에 외국어 능력은 큰 경쟁력입니다. 특히 영어와 중국어 등은 호텔이나 항공 등 글로벌 서비스 업계에서 필수입니다. 외국어 능력은 당신의 가능성을 넓혀줍니다.',
        '분위기를 만드는 능력을 키우세요. 서비스 환경의 분위기는 고객 경험에 큰 영향을 미칩니다. 밝고 긍정적인 분위기를 만들어 고객들이 편안하고 즐거운 경험을 할 수 있도록 해야 합니다.',
        '건강 관리가 중요합니다. 서비스 업무는 육체적으로 피로할 수 있습니다. 규칙적인 운동과 충분한 휴식으로 건강을 관리해야 합니다. 건강한 몸이 곧 좋은 서비스를 제공할 수 있는 기반입니다.',
        '스트레스 관리 방법을 익히세요. 다양한 고객들을 상대하다 보면 스트레스가 쌓일 수 있습니다. 명상, 운동, 취미 등 스트레스를 해소할 수 있는 방법을 찾고, 일과 삶의 균형을 맞춰야 합니다.',
        '전문성을 쌓아가세요. 단순히 서빙만 하는 것이 아니라 해당 분야의 전문가가 되어야 합니다. 메뉴, 와인, 에티켓 등 전문 지식을 쌓아 고객에게 더 나은 조언과 서비스를 제공할 수 있어야 합니다.',
        '긍정적인 태도를 유지하세요. 서비스 종사자는 항상 밝고 긍정적인 태도가 필요합니다. 어려운 상황에서도 긍정적인 에너지를 유지하며 고객들에게 좋은 인상을 남겨야 합니다.',
        '고객 피드백을 수용하세요. 고객의 피드백은 당신을 성장시키는 귀중한 자료입니다. 비판도 겸허하게 받아들이고 개선해야 할 점을 찾아 발전해야 합니다. 고객의 목소리에 귀를 기울이는 것은 좋은 서비스의 시작입니다.'
      ],
      en: [
        'Develop your service mindset further. You should have the mindset to treat customers sincerely and feel joy when you see them happy. Think customer-centrically and always consider from the customer\'s perspective to provide the best service.',
        'Improve your customer handling abilities. You need to build the ability to meet customers of various dispositions and respond appropriately. The ability to quickly understand customer needs and present appropriate solutions is important.',
        'Develop communication skills. You must build the ability to be friendly with customers while maintaining courtesy and politeness in communication. Every aspect including tone, attitude, and gestures affects the customer experience, so pay attention.',
        'Learn foreign languages. In the global era, foreign language ability is a great competitive advantage. Especially English, Chinese, etc. are essential in global service industries like hotels and aviation. Foreign language ability expands your possibilities.',
        'Develop the ability to create atmosphere. The atmosphere of a service environment greatly affects the customer experience. Create bright and positive atmosphere so customers can have comfortable and enjoyable experiences.',
        'Health management is important. Service work can be physically tiring. Manage your health through regular exercise and sufficient rest. A healthy body is the foundation for providing good service.',
        'Learn stress management methods. Dealing with various customers can build up stress. Find ways to relieve stress through meditation, exercise, hobbies, etc., and balance work and life.',
        'Build expertise. Don\'t just serve, but become an expert in your field. Build professional knowledge in menu, wine, etiquette, etc. to provide better advice and service to customers.',
        'Maintain a positive attitude. Service workers always need bright and positive attitudes. Even in difficult situations, maintain positive energy and leave good impressions on customers.',
        'Accept customer feedback. Customer feedback is valuable material that helps you grow. Humble yourself to accept criticism and find areas to improve. Listening to customer voices is the start of good service.'
      ], ja: [
        'サービスマインドをさらに育てます。顧客を真心で扱い彼らが幸せそうに見える姿を見て喜びを感じられるマインドを持つべきです。顧客中心の思考をし常に顧客の立場から考え最高のサービスを提供すべきです。',
        '顧客対応能力を向上させます。多様な性向の顧客に出会い適切に対応できる能力を育てる必要があります。顧客の要求を素早く把握し適切な解決策を提示できる能力が重要です。',
        'コミュニケーションスキルを開発します。顧客との交流で礼儀と丁寧さを失わず親しみやすく接することができる能力を育てる必要があります。口調、態度、身振りなど全てが顧客経験に影響するので注意します。',
        '外国語を学びます。グローバル時代に外国語能力は大きな競争力です。特に英語と中国語などはホテルや航空などグローバルサービス業界で必須です。外国語能力は可能性を広げます。',
        '雰囲気を作る能力を育てます。サービス環境の雰囲気は顧客経験に大きな影響を与えます。明るくポジティブな雰囲気を作り顧客が快適で楽しい経験ができるようにします。',
        '健康管理が重要です。サービスの仕事は肉体的に疲れることがあります。規則的な運動と十分な休息で健康を管理すべきです。健康な体は良いサービスを提供できる基盤です。',
        'ストレス管理方法を習得します。多様な顧客を相手にしているとストレスが積もることがあります。瞑想、運動、趣味などストレスを解消できる方法を見つけ仕事と生活のバランスを合わせます。',
        '専門性を積み上げます。単純に給仕だけするのではなく該当分野の専門家になるべきです。メニュー、ワイン、エチケットなど専門知識を積み顧客に良い助言とサービスを提供できます。',
        'ポジティブな態度を維持します。サービス従事者は常に明るくポジティブな態度が必要です。困難な状況でもポジティブなエネルギーを維持し顧客に良い印象を残します。',
        '顧客フィードバックを受け入れます。顧客のフィードバックは成長させる貴重な資料です。批判も謙虚に受け入れ改善すべき点を見つけて発展すべきです。顧客の声に耳を傾けることは良いサービスの始まりです。'
      ], 'zh-CN': [
        '进一步培养服务意识。你应真诚对待客户，并因看到他们开心而欣慰。以客户为中心思考，始终站在客户立场，提供最佳服务。',
        '提升客户应对能力。你需要培养与各类倾向客户接触并恰当应对的能力。快速把握需求并提出合适解决方案的能力很重要。',
        '发展沟通技能。在客户沟通中，你既要保持礼貌与尊重，又要能亲切待人。语调、态度、肢体等都会影响客户体验，需注意。',
        '学习外语。外语能力在全球化时代是重要竞争力。英语、中文等在酒店或航空等全球服务行业必不可少。外语能力能扩展你的可能性。',
        '培养营造氛围的能力。服务环境的氛围对客户体验影响很大。营造积极氛围，让客户获得舒适且愉快的体验。',
        '健康管理很重要。服务工作在身体上可能劳累。通过规律运动和充分休息维护健康。健康身体是提供优质服务的基础。',
        '学习压力管理方法。与各类客户打交道可能累积压力。通过冥想、运动、爱好等找到释压方法，保持工作与生活的平衡。',
        '积累专业性。不只在岗位上服务，还要成为该领域专家。积累菜单、酒水、礼仪等专业知识，为客户提供更好的建议与服务。',
        '保持积极态度。服务从业者始终需要积极态度。即便在困境中也要保持积极能量，给客户留下良好印象。',
        '接受客户反馈。客户反馈是帮助你成长的宝贵资料。虚心接受批评，找出改进点并持续成长。倾听客户的声音是优质服务的起点。'
      ], 'zh-TW': [
        '進一步培養服務意識。你應真誠對待客戶，並因看到他們開心而欣慰。以客戶為中心思考，始終站在客戶立場，提供最佳服務。',
        '提升客戶應對能力。你需要培養與各類傾向客戶接觸並恰當應對的能力。快速把握需求並提出合適解決方案的能力很重要。',
        '發展溝通技能。在客戶溝通中，你既要保持禮貌與尊重，又要能親切待人。語調、態度、肢體等都會影響客戶體驗，需注意。',
        '學習外語。外語能力在全球化時代是重要競爭力。英語、中文等在酒店或航空等全球服務行業必不可少。外語能力能擴展你的可能性。',
        '培養營造氛圍的能力。服務環境的氛圍對客戶體驗影響很大。營造積極氛圍，讓客戶獲得舒適且愉快的體驗。',
        '健康管理很重要。服務工作在身體上可能勞累。透過規律運動和充分休息維護健康。健康身體是提供優質服務的基礎。',
        '學習壓力管理方法。與各類客戶打交道可能累積壓力。透過冥想、運動、愛好等找到釋壓方法，保持工作與生活的平衡。',
        '積累專業性。不只在崗位上服務，還要成為該領域專家。積累菜單、酒水、禮儀等專業知識，為客戶提供更好的建議與服務。',
        '保持積極態度。服務從業者始終需要積極態度。即便在困境中也要保持積極能量，給客戶留下良好印象。',
        '接受客戶回饋。客戶回饋是幫助你成長的寶貴資料。虛心接受批評，找出改進點並持續成長。傾聽客戶的聲音是優質服務的起點。'
      ], vi: [
        'Phát triển tinh thần phục vụ của bạn hơn nữa. Bạn nên có tâm lý đối xử với khách hàng chân thành và cảm thấy vui khi thấy họ hạnh phúc. Suy nghĩ tập trung vào khách hàng và luôn xem xét từ quan điểm của khách hàng để cung cấp dịch vụ tốt nhất.',
        'Cải thiện khả năng xử lý khách hàng của bạn. Bạn cần xây dựng khả năng gặp khách hàng với nhiều khuynh hướng khác nhau và phản ứng phù hợp. Khả năng nhanh chóng hiểu nhu cầu của khách hàng và trình bày giải pháp phù hợp là quan trọng.',
        'Phát triển kỹ năng giao tiếp. Bạn phải xây dựng khả năng thân thiện với khách hàng trong khi duy trì sự lịch sự và lịch lãm trong giao tiếp. Mọi khía cạnh bao gồm giọng nói, thái độ và cử chỉ ảnh hưởng đến trải nghiệm khách hàng, vì vậy hãy chú ý.',
        'Học ngoại ngữ. Trong thời đại toàn cầu, khả năng ngoại ngữ là một lợi thế cạnh tranh lớn. Đặc biệt là tiếng Anh, tiếng Trung, v.v. là điều cần thiết trong các ngành dịch vụ toàn cầu như khách sạn và hàng không. Khả năng ngoại ngữ mở rộng khả năng của bạn.',
        'Phát triển khả năng tạo bầu không khí. Bầu không khí của môi trường dịch vụ ảnh hưởng lớn đến trải nghiệm khách hàng. Tạo ra bầu không khí tươi sáng và tích cực để khách hàng có trải nghiệm thoải mái và thú vị.',
        'Quản lý sức khỏe là quan trọng. Công việc dịch vụ có thể mệt mỏi về thể chất. Quản lý sức khỏe của bạn thông qua tập thể dục thường xuyên và nghỉ ngơi đầy đủ. Một cơ thể khỏe mạnh là nền tảng để cung cấp dịch vụ tốt.',
        'Học các phương pháp quản lý căng thẳng. Đối phó với nhiều khách hàng khác nhau có thể tích tụ căng thẳng. Tìm cách giảm căng thẳng thông qua thiền định, tập thể dục, sở thích, v.v., và cân bằng công việc và cuộc sống.',
        'Xây dựng chuyên môn. Đừng chỉ phục vụ, mà hãy trở thành chuyên gia trong lĩnh vực của bạn. Xây dựng kiến thức chuyên môn về thực đơn, rượu vang, nghi thức, v.v. để cung cấp lời khuyên và dịch vụ tốt hơn cho khách hàng.',
        'Duy trì thái độ tích cực. Nhân viên dịch vụ luôn cần thái độ tươi sáng và tích cực. Ngay cả trong tình huống khó khăn, duy trì năng lượng tích cực và để lại ấn tượng tốt cho khách hàng.',
        'Chấp nhận phản hồi của khách hàng. Phản hồi của khách hàng là tài liệu quý giá giúp bạn phát triển. Khiêm nhường để chấp nhận lời chỉ trích và tìm những lĩnh vực để cải thiện. Lắng nghe tiếng nói của khách hàng là khởi đầu của dịch vụ tốt.'
      ], id: [
        'Kembangkan pola pikir layanan Anda lebih lanjut. Anda harus memiliki pola pikir untuk memperlakukan pelanggan dengan tulus dan merasakan kegembiraan ketika melihat mereka bahagia. Pikirkan berpusat pada pelanggan dan selalu pertimbangkan dari perspektif pelanggan untuk memberikan layanan terbaik.',
        'Tingkatkan kemampuan penanganan pelanggan Anda. Anda perlu membangun kemampuan untuk bertemu pelanggan dengan berbagai kecenderungan dan merespons dengan tepat. Kemampuan untuk cepat memahami kebutuhan pelanggan dan menyajikan solusi yang tepat adalah penting.',
        'Kembangkan keterampilan komunikasi. Anda harus membangun kemampuan untuk bersikap ramah dengan pelanggan sambil mempertahankan sopan santun dan kesopanan dalam komunikasi. Setiap aspek termasuk nada, sikap, dan gerakan mempengaruhi pengalaman pelanggan, jadi perhatikan.',
        'Pelajari bahasa asing. Di era global, kemampuan bahasa asing adalah keunggulan kompetitif yang besar. Terutama bahasa Inggris, bahasa Cina, dll. adalah penting dalam industri layanan global seperti hotel dan penerbangan. Kemampuan bahasa asing memperluas kemungkinan Anda.',
        'Kembangkan kemampuan untuk menciptakan suasana. Suasana lingkungan layanan sangat mempengaruhi pengalaman pelanggan. Ciptakan suasana yang cerah dan positif sehingga pelanggan dapat memiliki pengalaman yang nyaman dan menyenangkan.',
        'Manajemen kesehatan adalah penting. Pekerjaan layanan bisa membuat fisik lelah. Kelola kesehatan Anda melalui olahraga teratur dan istirahat yang cukup. Tubuh yang sehat adalah fondasi untuk memberikan layanan yang baik.',
        'Pelajari metode manajemen stres. Menghadapi berbagai pelanggan dapat membangun stres. Temukan cara untuk meredakan stres melalui meditasi, olahraga, hobi, dll., dan seimbangkan pekerjaan dan kehidupan.',
        'Bangun keahlian. Jangan hanya melayani, tetapi menjadi ahli di bidang Anda. Bangun pengetahuan profesional tentang menu, anggur, etiket, dll. untuk memberikan saran dan layanan yang lebih baik kepada pelanggan.',
        'Pertahankan sikap positif. Pekerja layanan selalu membutuhkan sikap cerah dan positif. Bahkan dalam situasi sulit, pertahankan energi positif dan tinggalkan kesan yang baik pada pelanggan.',
        'Terima umpan balik pelanggan. Umpan balik pelanggan adalah materi berharga yang membantu Anda tumbuh. Rendah hati untuk menerima kritik dan temukan area yang perlu diperbaiki. Mendengarkan suara pelanggan adalah awal dari layanan yang baik.'
      ]
    },
    fortune: {
      success: { 
        ko: [
          '서비스 업계에서 성공할 수 있습니다. 당신의 친절함과 배려심은 서비스 업계에서 매우 높이 평가됩니다. 고객들을 만족시키는 당신의 능력은 조직에서 큰 자산이 되며, 승진이나 더 나은 조건의 직장을 찾을 수 있게 해줍니다.',
          '고객들에게 사랑받을 수 있습니다. 당신의 따뜻하고 친근한 성격은 고객들에게 좋은 인상을 남기며, 많은 단골 고객이 생기게 됩니다. 고객들은 당신을 기억하고 다시 찾아오며, 당신의 서비스를 추천합니다.',
          '좋은 평가를 받을 수 있습니다. 당신의 신중하고 정성스러운 서비스는 고객들로부터 좋은 평가를 받게 됩니다. 온라인 리뷰나 고객 설문조사에서 높은 점수를 받으며, 이것은 당신의 커리어에 큰 도움이 됩니다.',
          '안정적인 직장을 찾을 수 있습니다. 당신의 능력과 태도는 좋은 직장을 찾는데 도움이 됩니다. 좋은 서비스를 제공하는 사람은 항상 필요한 존재이므로 안정적인 고용이 보장됩니다.',
          '전문성을 인정받을 수 있습니다. 당신의 해당 분야에 대한 전문성과 노하우는 업계에서 인정받을 수 있습니다. 전문가로서의 위치를 확보하고 더 나은 기회를 얻을 수 있습니다.'
        ],
        en: [
          'You can succeed in the service industry. Your kindness and consideration are highly valued in the service industry. Your ability to satisfy customers becomes a great asset to the organization and helps you find promotions or better workplaces.',
          'You can be loved by customers. Your warm and friendly personality leaves good impressions on customers, creating many regular customers. Customers remember you, come back, and recommend your service.',
          'You can receive good evaluations. Your careful and sincere service receives good evaluations from customers. You score high in online reviews or customer surveys, which greatly helps your career.',
          'You can find a stable workplace. Your ability and attitude help you find good jobs. People who provide good service are always needed, so stable employment is guaranteed.',
          'You can be recognized for your expertise. Your expertise and know-how in your field can be recognized by the industry. You can secure your position as an expert and gain better opportunities.'
        ], ja: [
          'サービス業界で成功できます。親切さと思いやりはサービス業界で高く評価されます。顧客を満足させるあなたの能力は組織で大きな資産となり昇進やより良い条件の職場を見つけられます。',
          '顧客から愛されることができます。温かく親しみやすい性格は顧客に良い印象を残し多くの常連顧客が生まれます。顧客はあなたを覚え再度訪れサービスを推薦します。',
          '良い評価を受けることができます。慎重で丁寧なサービスは顧客から良い評価を受けます。オンラインレビューや顧客アンケートで高い点数を受けこれはキャリアに大いに助けます。',
          '安定した職場を見つけることができます。能力と態度は良い職場を見つけるのに助けます。良いサービスを提供する人は常に必要なので安定した雇用が保証されます。',
          '専門性を認められます。該当分野に対する専門性とノウハウは業界で認められます。専門家としての位置を確保しより良い機会を得られます。'
        ], 'zh-CN': [
          '你可以在服务行业取得成功。你的亲切与体贴在服务行业备受重视。你满足客户的能力是组织的资产，助你获得晋升或更好的工作。',
          '你能受到客户喜爱。你温暖友好的个性给客户留下好印象，带来许多常客。客户会记住你、再次光临并推荐你的服务。',
          '你能获得好评。你谨慎细致的服务会得到客户好评。在线评论或客户问卷中取得高分，为你的职业加分。',
          '你能找到稳定的工作岗位。你的能力与态度助你找到好工作。提供优质服务的人始终被需要，因此就业稳定有保障。',
          '你能因专业度获得认可。你在该领域的专业性与诀窍可得到行业认可。确立专家地位并获得更好机会。'
        ], 'zh-TW': [
          '你可以在服務行業取得成功。你的親切與體貼在服務行業備受重視。你滿足客戶的能力是組織的資產，助你獲得晉升或更好的工作。',
          '你能受到客戶喜愛。你溫暖友好的個性給客戶留下好印象，帶來許多常客。客戶會記住你、再次光臨並推薦你的服務。',
          '你能獲得好評。你謹慎細緻的服務會得到客戶好評。線上評論或客戶問卷中取得高分，為你的職業加分。',
          '你能找到穩定的工作崗位。你的能力與態度助你找到好工作。提供優質服務的人始終被需要，因此就業穩定有保障。',
          '你能因專業度獲得認可。你在該領域的專業性與訣竅可得到行業認可。確立專家地位並獲得更好機會。'
        ], vi: [
          'Bạn có thể thành công trong ngành dịch vụ. Sự tử tế và quan tâm của bạn được đánh giá cao trong ngành dịch vụ. Khả năng làm hài lòng khách hàng của bạn trở thành tài sản quý giá cho tổ chức và giúp bạn tìm thấy cơ hội thăng tiến hoặc nơi làm việc tốt hơn.',
          'Bạn có thể được khách hàng yêu mến. Tính cách ấm áp và thân thiện của bạn để lại ấn tượng tốt cho khách hàng, tạo ra nhiều khách hàng thường xuyên. Khách hàng nhớ bạn, quay lại và giới thiệu dịch vụ của bạn.',
          'Bạn có thể nhận được đánh giá tốt. Dịch vụ cẩn thận và chân thành của bạn nhận được đánh giá tốt từ khách hàng. Bạn đạt điểm cao trong đánh giá trực tuyến hoặc khảo sát khách hàng, điều này rất giúp sự nghiệp của bạn.',
          'Bạn có thể tìm một nơi làm việc ổn định. Khả năng và thái độ của bạn giúp bạn tìm công việc tốt. Những người cung cấp dịch vụ tốt luôn được cần, vì vậy việc làm ổn định được đảm bảo.',
          'Bạn có thể được công nhận về chuyên môn. Chuyên môn và bí quyết của bạn trong lĩnh vực có thể được ngành công nhận. Bạn có thể đảm bảo vị trí của mình như một chuyên gia và có được cơ hội tốt hơn.'
        ], id: [
          'Anda dapat berhasil di industri layanan. Kebaikan dan pertimbangan Anda sangat dihargai di industri layanan. Kemampuan Anda untuk memuaskan pelanggan menjadi aset besar bagi organisasi dan membantu Anda menemukan promosi atau tempat kerja yang lebih baik.',
          'Anda dapat dicintai oleh pelanggan. Kepribadian hangat dan ramah Anda meninggalkan kesan yang baik pada pelanggan, menciptakan banyak pelanggan tetap. Pelanggan mengingat Anda, kembali, dan merekomendasikan layanan Anda.',
          'Anda dapat menerima evaluasi yang baik. Layanan hati-hati dan tulus Anda menerima evaluasi yang baik dari pelanggan. Anda mendapat skor tinggi dalam ulasan online atau survei pelanggan, yang sangat membantu karier Anda.',
          'Anda dapat menemukan tempat kerja yang stabil. Kemampuan dan sikap Anda membantu Anda menemukan pekerjaan yang baik. Orang yang menyediakan layanan yang baik selalu dibutuhkan, sehingga pekerjaan yang stabil dijamin.',
          'Anda dapat diakui atas keahlian Anda. Keahlian dan pengetahuan Anda di bidang Anda dapat diakui oleh industri. Anda dapat mengamankan posisi Anda sebagai ahli dan mendapatkan peluang yang lebih baik.'
        ]
      },
      hidden: { 
        ko: [
          '명인이나 마스터가 될 가능성이 있습니다. 당신의 꾸준한 노력과 열정은 해당 분야의 명인이나 마스터가 될 수 있는 수준까지 발전시킬 수 있습니다. 오랜 경험과 노하우로 최고의 서비스를 제공하는 사람이 됩니다.',
          '자신만의 서비스 스타일을 개발할 수 있습니다. 당신의 개성과 경험이 결합되어 고유한 서비스 스타일을 만들 수 있습니다. 남들과 차별화된 서비스로 고객들에게 더욱 강한 인상을 남길 수 있습니다.',
          '오픈 창업도 가능합니다. 당신의 서비스 능력과 경험을 바탕으로 자신만의 사업을 시작할 수 있습니다. 호텔, 식당, 미용실 등 자신의 전문 분야에서 창업하여 성공할 수 있습니다.',
          '훈장이나 표창을 받을 수 있는 가능성이 있습니다. 뛰어난 서비스 능력과 고객 만족도로 인해 업계에서 표창을 받거나, 우수 서비스 제공자로 선정될 수 있습니다. 이러한 인정은 당신의 커리어를 한 단계 높여줍니다.',
          '장기적으로 성공할 수 있습니다. 서비스 능력은 시간이 지날수록 더욱 향상되고, 경험이 쌓일수록 더 큰 가치가 됩니다. 장기적인 경력을 쌓으며 안정적이고 성공적인 커리어를 만들어갈 수 있습니다.'
        ],
        en: [
          'You have the potential to become a master or expert. Your consistent effort and passion can develop to the level of becoming a master or expert in your field. You become someone who provides the best service through long experience and know-how.',
          'You can develop your own service style. Your personality and experience can combine to create a unique service style. You can leave stronger impressions on customers with differentiated service.',
          'Starting your own business is also possible. Based on your service ability and experience, you can start your own business. You can succeed by starting a business in your specialized field like hotels, restaurants, or salons.',
          'You have the potential to receive awards or commendations. Due to excellent service ability and customer satisfaction, you may receive commendations from the industry or be selected as an outstanding service provider. Such recognition elevates your career.',
          'You can succeed long-term. Service ability improves over time and becomes more valuable as experience builds. You can build a stable and successful career while accumulating long-term experience.'
        ], ja: [
          '名工やマスターになる可能性があります。着実な努力と情熱は該当分野の名工やマスターになれるレベルまで発展させられます。長い経験とノウハウで最高のサービスを提供する人になります。',
          '自分だけのサービススタイルを開発できます。個性と経験が結合され固有のサービススタイルを作れます。他と差別化されたサービスで顧客に強烈な印象を残せます。',
          'オープン創業も可能です。サービス能力と経験を基盤に自分だけの事業を始められます。ホテル、飲食店、美容室など自分の専門分野で創業し成功できます。',
          '勲章や表彰を受ける可能性があります。卓越したサービス能力と顧客満足度で業界から表彰を受けるか優良サービス提供者に選定されます。このような認識はキャリアを一段階高めます。',
          '長期的に成功できます。サービス能力は時間が過ぎるほど向上し経験が積まれるほど大きな価値になります。長期的経験を積みながら安定した成功キャリアを作れます。'
        ], 'zh-CN': [
          '你有潜力成为大师或专家。你持续的努力与热情可发展到该领域的大师或专家水平。你通过长期经验与诀窍成为提供最佳服务的人。',
          '你能发展出自己的服务风格。你的个性与经验结合可创造出独特的服务风格。你用差异化服务给客户留下更深刻的印记。',
          '自主创业也可行。基于你的服务能力与经验，可开始自己的事业。在酒店、餐厅、美容院等专业领域创业并取得成功。',
          '你有机会获得勋章或表彰。凭借出色的服务能力与客户满意度，你可能获得行业表彰或被选为优秀服务提供者。这一认可会提升你的职业高度。',
          '你能获得长期成功。服务能力随时间提升，随经验积累价值递增。你在积累长期经验的过程中打造稳定而成功的职业。'
        ], 'zh-TW': [
          '你有潛力成為大師或專家。你持續的努力與熱情可發展到該領域的大師或專家水平。你透過長期經驗與訣竅成為提供最佳服務的人。',
          '你能發展出自己的服務風格。你的個性與經驗結合可創造出獨特的服務風格。你用差異化服務給客戶留下更深刻的印記。',
          '自主創業也可行。基於你的服務能力與經驗，可開始自己的事業。在酒店、餐廳、美容院等專業領域創業並取得成功。',
          '你有機會獲得勳章或表彰。憑藉出色的服務能力與客戶滿意度，你可能獲得行業表彰或被選為優秀服務提供者。這一認可會提升你的職業高度。',
          '你能獲得長期成功。服務能力隨時間提升，隨經驗累積價值遞增。你在累積長期經驗的過程中打造穩定而成功的職業。'
        ], vi: [
          'Bạn có tiềm năng trở thành bậc thầy hoặc chuyên gia. Nỗ lực và niềm đam mê nhất quán của bạn có thể phát triển đến mức trở thành bậc thầy hoặc chuyên gia trong lĩnh vực của bạn. Bạn trở thành người cung cấp dịch vụ tốt nhất thông qua kinh nghiệm lâu dài và bí quyết.',
          'Bạn có thể phát triển phong cách dịch vụ của riêng mình. Tính cách và kinh nghiệm của bạn có thể kết hợp để tạo ra một phong cách dịch vụ độc đáo. Bạn có thể để lại ấn tượng mạnh hơn cho khách hàng với dịch vụ được phân biệt hóa.',
          'Bắt đầu doanh nghiệp riêng cũng có thể. Dựa trên khả năng dịch vụ và kinh nghiệm của bạn, bạn có thể bắt đầu doanh nghiệp của riêng mình. Bạn có thể thành công bằng cách bắt đầu một doanh nghiệp trong lĩnh vực chuyên môn của bạn như khách sạn, nhà hàng hoặc tiệm làm đẹp.',
          'Bạn có tiềm năng nhận giải thưởng hoặc sự khen ngợi. Do khả năng dịch vụ xuất sắc và sự hài lòng của khách hàng, bạn có thể nhận được sự khen ngợi từ ngành hoặc được chọn làm nhà cung cấp dịch vụ xuất sắc. Sự công nhận như vậy nâng cao sự nghiệp của bạn.',
          'Bạn có thể thành công dài hạn. Khả năng dịch vụ được cải thiện theo thời gian và trở nên có giá trị hơn khi kinh nghiệm xây dựng. Bạn có thể xây dựng một sự nghiệp ổn định và thành công trong khi tích lũy kinh nghiệm dài hạn.'
        ], id: [
          'Anda memiliki potensi untuk menjadi master atau ahli. Upaya dan semangat konsisten Anda dapat berkembang ke tingkat menjadi master atau ahli di bidang Anda. Anda menjadi seseorang yang menyediakan layanan terbaik melalui pengalaman panjang dan pengetahuan.',
          'Anda dapat mengembangkan gaya layanan Anda sendiri. Kepribadian dan pengalaman Anda dapat digabungkan untuk menciptakan gaya layanan yang unik. Anda dapat meninggalkan kesan yang lebih kuat pada pelanggan dengan layanan yang dibedakan.',
          'Memulai bisnis Anda sendiri juga memungkinkan. Berdasarkan kemampuan layanan dan pengalaman Anda, Anda dapat memulai bisnis Anda sendiri. Anda dapat berhasil dengan memulai bisnis di bidang khusus Anda seperti hotel, restoran, atau salon.',
          'Anda memiliki potensi untuk menerima penghargaan atau pujian. Karena kemampuan layanan yang luar biasa dan kepuasan pelanggan, Anda mungkin menerima pujian dari industri atau dipilih sebagai penyedia layanan yang luar biasa. Pengakuan semacam itu meningkatkan karier Anda.',
          'Anda dapat berhasil jangka panjang. Kemampuan layanan meningkat seiring waktu dan menjadi lebih berharga ketika pengalaman berkembang. Anda dapat membangun karier yang stabil dan sukses sambil mengumpulkan pengalaman jangka panjang.'
        ]
      }
    }
  },
  {
    id: 8,
    title: { ko: '예술가형', en: 'Artist Type', ja: '芸術家型', 'zh-CN': '艺术家型', 'zh-TW': '藝術家型', vi: 'Kiểu Nghệ Sĩ', id: 'Tipe Seniman' },
    description: {
      ko: [
        '당신의 얼굴은 섬세한 감성과 예술적 감각을 보여줍니다. 아름다움과 예술에 대한 탁월한 감각이 있습니다.',
        '창의적이고 독특한 면모가 돋보입니다. 자신만의 독특한 스타일과 세계관을 가지고 있습니다.',
        '표현력이 뛰어나고 감수성이 풍부합니다. 자신의 내면을 예술적으로 표현하는 능력이 있습니다.',
        '직관적이고 감성적인 판단을 잘합니다. 논리보다는 느낌과 감을 믿는 편입니다.',
        '자유로운 영혼과 독창적 사고를 가진 얼굴입니다. 기존의 틀에 얽매이지 않고 독특하게 행동합니다.',
        '감정 표현력이 뛰어납니다. 다양한 감정을 예술적 작품으로 승화시킬 수 있습니다.',
        '상상력과 창의력이 풍부합니다. 평범한 것도 다르게 보는 능력이 있습니다.',
        '예술적 완성도에 대한 욕구가 강합니다. 최고의 작품을 만들기 위해 끊임없이 노력합니다.',
        '아름다움에 대한 철학과 감각을 가지고 있습니다. 미학적 기준이 높습니다.',
        '자신의 감정과 생각을 시각적으로 표현하는 재주가 있습니다. 많은 사람들에게 영감을 줍니다.'
      ],
      en: [
        'Your face shows delicate sensibility and artistic sense. You have excellent sense for beauty and art.',
        'Creative and unique aspects stand out. You have your own unique style and worldview.',
        'You have excellent expressiveness and rich sensibility. You have the ability to express your inner self artistically.',
        'You make intuitive and emotional judgments well. You tend to trust feelings and instincts rather than logic.',
        'You have a free spirit and original thinking face. You act uniquely without being bound by existing frameworks.',
        'You have excellent emotional expressiveness. You can sublimate various emotions into artistic works.',
        'You have rich imagination and creativity. You have the ability to see ordinary things differently.',
        'You have a strong desire for artistic perfection. You constantly strive to create the best work.',
        'You have philosophy and sense for beauty. You have high aesthetic standards.',
        'You have talent for visually expressing your emotions and thoughts. You inspire many people.'
      ], ja: [
        '繊細な感性と芸術的感覚を示します。美と芸術に対する卓越した感覚があります。',
        '創造的で独特な面が目立ちます。自分だけの独特なスタイルと世界観を持っています。',
        '表現力が優れ感性が豊かです。内面を芸術的に表現する能力があります。',
        '直感的で感情的な判断を良くします。論理よりは感じと感覚を信じる傾向です。',
        '自由な魂と独創的思考を持つ顔です。既存の枠に縛られず独創的に行動します。',
        '感情表現力が優れています。多様な感情を芸術作品に昇華できます。',
        '想像力と創造力が豊かです。平凡なものも違って見る能力があります。',
        '芸術的完成度への欲求が強いです。最高の作品を作るために絶え間なく努力します。',
        '美に対する哲学と感覚を持っています。美学的基準が高いです。',
        '自分の感情と思考を視覚的に表現する才能があります。多くの人にインスピレーションを与えます。'
      ], 'zh-CN': [
        '你的面相呈现细腻感性与艺术感知。你在美感与艺术方面感知敏锐。',
        '创造性独特性突出。你拥有自己独特的风格与世界观。',
        '你表达能力与感性出色。你有将内心以艺术方式呈现的能力。',
        '你直觉与感性判断力强。更相信感觉与直觉而非逻辑。',
        '你具有自由精神与独创思维。你独到行事，不受既有框架束缚。',
        '你情感表达出色。能将多种情绪升华为艺术作品。',
        '你想象力与创造力丰富。你能以不同方式观察平常事物。',
        '你对艺术完成度的诉求强烈。为创作最高作品不懈努力。',
        '你具有美感哲学与感知。你的美学标准很高。',
        '你擅长以视觉方式呈现情感与思考。为许多人带来灵感。'
      ], 'zh-TW': [
        '你的面相呈現細膩感性與藝術感知。你在美感與藝術方面感知敏銳。',
        '創造性獨特性突出。你擁有自己獨特的風格與世界觀。',
        '你表達能力與感性出色。你有將內心以藝術方式呈現的能力。',
        '你直覺與感性判斷力強。更相信感覺與直覺而非邏輯。',
        '你具有自由精神與獨創思維。你獨到行事，不受既有框架束縛。',
        '你情感表達出色。能將多種情緒昇華為藝術作品。',
        '你想象力與創造力豐富。你能以不同方式觀察平常事物。',
        '你對藝術完成度的訴求強烈。為創作最高作品不懈努力。',
        '你具有美感哲學與感知。你的美學標準很高。',
        '你擅長以視覺方式呈現情感與思考。為許多人帶來靈感。'
      ], vi: [
        'Khuôn mặt của bạn thể hiện cảm xúc tinh tế và ý thức nghệ thuật. Bạn có ý thức xuất sắc về vẻ đẹp và nghệ thuật.',
        'Các khía cạnh sáng tạo và độc đáo nổi bật. Bạn có phong cách và thế giới quan độc đáo của riêng mình.',
        'Bạn có khả năng biểu cảm xuất sắc và cảm xúc phong phú. Bạn có khả năng thể hiện bản thân bên trong một cách nghệ thuật.',
        'Bạn đưa ra các phán đoán trực quan và tình cảm tốt. Bạn có xu hướng tin tưởng cảm giác và bản năng hơn logic.',
        'Bạn có một linh hồn tự do và suy nghĩ độc đáo. Bạn hành động độc đáo mà không bị ràng buộc bởi các khuôn khổ hiện có.',
        'Bạn có khả năng biểu cảm cảm xúc xuất sắc. Bạn có thể thăng hoa các cảm xúc khác nhau thành các tác phẩm nghệ thuật.',
        'Bạn có trí tưởng tượng và sự sáng tạo phong phú. Bạn có khả năng nhìn thấy những điều bình thường khác đi.',
        'Bạn có mong muốn mạnh mẽ về sự hoàn hảo nghệ thuật. Bạn liên tục phấn đấu để tạo ra công việc tốt nhất.',
        'Bạn có triết lý và ý thức về vẻ đẹp. Bạn có tiêu chuẩn thẩm mỹ cao.',
        'Bạn có tài năng biểu diễn trực quan các cảm xúc và suy nghĩ của mình. Bạn truyền cảm hứng cho nhiều người.'
      ], id: [
        'Wajah Anda menunjukkan sensitivitas halus dan rasa artistik. Anda memiliki rasa yang luar biasa untuk keindahan dan seni.',
        'Aspek kreatif dan unik menonjol. Anda memiliki gaya dan pandangan dunia yang unik sendiri.',
        'Anda memiliki ekspresivitas yang luar biasa dan sensitivitas yang kaya. Anda memiliki kemampuan untuk mengekspresikan diri batin Anda secara artistik.',
        'Anda membuat penilaian intuitif dan emosional dengan baik. Anda cenderung mempercayai perasaan dan naluri daripada logika.',
        'Anda memiliki jiwa bebas dan pemikiran orisinal. Anda bertindak secara unik tanpa terikat oleh kerangka kerja yang ada.',
        'Anda memiliki ekspresivitas emosional yang luar biasa. Anda dapat menyempurnakan berbagai emosi menjadi karya seni.',
        'Anda memiliki imajinasi dan kreativitas yang kaya. Anda memiliki kemampuan untuk melihat hal-hal biasa secara berbeda.',
        'Anda memiliki keinginan yang kuat untuk kesempurnaan artistik. Anda terus berusaha menciptakan karya terbaik.',
        'Anda memiliki filosofi dan rasa keindahan. Anda memiliki standar estetika yang tinggi.',
        'Anda memiliki bakat untuk mengekspresikan emosi dan pemikiran secara visual. Anda menginspirasi banyak orang.'
      ]
    },
    emoji: '🎭',
    scoreRange: [20, 29],
    strengths: { 
      ko: ['예술성', '감수성', '창의성', '표현력', '직관력', '독창성', '상상력', '완성도', '미적감각', '감정표현'], 
      en: ['Artistic', 'Sensitivity', 'Creativity', 'Expression', 'Intuition', 'Originality', 'Imagination', 'Perfection', 'Aesthetic', 'Emotional'], 
      ja: ['芸術性', '感性', '創造性', '表現力', '直観力', '独創性', '想像力', '完成度', '美的感覚', '感情表現'], 
      'zh-CN': ['艺术性', '感性', '创造性', '表现力', '直觉力', '独创性', '想象力', '完成度', '美感', '情感表达'], 
      'zh-TW': ['藝術性', '感性', '創造性', '表現力', '直覺力', '獨創性', '想象力', '完成度', '美感', '情感表達'], 
      vi: ['Nghệ thuật', 'Nhạy cảm', 'Sáng tạo', 'Biểu hiện', 'Trực giác', 'Độc đáo', 'Tưởng tượng', 'Hoàn hảo', 'Thẩm mỹ', 'Cảm xúc'], 
      id: ['Artistik', 'Sensitivitas', 'Kreativitas', 'Ekspresi', 'Intuisi', 'Orisinalitas', 'Imajinasi', 'Kesempurnaan', 'Estetika', 'Emosional'] 
    },
    recommendations: { 
      ko: ['화가', '조각가', '음악가', '무용가', '연기자', '작가', '시인', '패션디자이너', '모델', '예술가'], 
      en: ['Painter', 'Sculptor', 'Musician', 'Dancer', 'Actor', 'Writer', 'Poet', 'Fashion Designer', 'Model', 'Artist'], 
      ja: ['画家', '彫刻家', '音楽家', '舞踊家', '俳優', '作家', '詩人', 'ファッションデザイナー', 'モデル', '芸術家'], 
      'zh-CN': ['画家', '雕塑家', '音乐家', '舞蹈家', '演员', '作家', '诗人', '时装设计师', '模特', '艺术家'], 
      'zh-TW': ['畫家', '雕塑家', '音樂家', '舞蹈家', '演員', '作家', '詩人', '時裝設計師', '模特', '藝術家'], 
      vi: ['Họa sĩ', 'Điêu khắc gia', 'Nhạc sĩ', 'Vũ công', 'Diễn viên', 'Nhà văn', 'Nhà thơ', 'Nhà thiết kế thời trang', 'Người mẫu', 'Nghệ sĩ'], 
      id: ['Pelukis', 'Pematung', 'Musisi', 'Penari', 'Aktor', 'Penulis', 'Penyair', 'Desainer Fesyen', 'Model', 'Seniman'] 
    },
    personality: { 
      ko: [
        '예술적이고 감성적인 성격입니다.',
        '섬세하고 민감한 성향이 강합니다.',
        '창의적이고 독창적인 사고를 합니다.',
        '표현력을 중시하며 자신을 드러냅니다.',
        '직관적 판단을 믿습니다.',
        '자유로운 영혼을 가지고 있습니다.',
        '감정 표현력이 뛰어납니다.',
        '상상력이 풍부합니다.',
        '완성도를 추구합니다.',
        '아름다움을 사랑합니다.'
      ],
      en: [
        'You have an artistic and emotional personality.',
        'You have a strong tendency to be delicate and sensitive.',
        'You think creatively and originally.',
        'You value expressiveness and reveal yourself.',
        'You trust intuitive judgments.',
        'You have a free spirit.',
        'You have excellent emotional expressiveness.',
        'You have rich imagination.',
        'You pursue perfection.',
        'You love beauty.'
      ], ja: [
        '芸術的で感情的な性格です。',
        '繊細で敏感な傾向が強いです。',
        '創造的で独創的な思考をします。',
        '表現力を重視し自分を表します。',
        '直感的判断を信じます。',
        '自由な魂を持っています。',
        '感情表現力が優れています。',
        '想像力が豊かです。',
        '完成度を追求します。',
        '美を愛します。'
      ], 'zh-CN': [
        '你具有艺术与感性的个性。',
        '你呈现很强的细腻与敏感倾向。',
        '你进行创造性及独创的思考。',
        '你重视表现力并展现自我。',
        '你相信直觉判断。',
        '你拥有自由精神。',
        '你情感表达出色。',
        '你想象力丰富。',
        '你追求完成度。',
        '你喜爱美感。'
      ], 'zh-TW': [
        '你具有藝術與感性的個性。',
        '你呈現很強的細膩與敏感傾向。',
        '你進行創造性及獨創的思考。',
        '你重視表現力並展現自我。',
        '你相信直覺判斷。',
        '你擁有自由精神。',
        '你情感表達出色。',
        '你想象力豐富。',
        '你追求完成度。',
        '你喜愛美感。'
      ], vi: [
        'Bạn có tính cách nghệ thuật và cảm xúc.',
        'Bạn có xu hướng mạnh mẽ để tinh tế và nhạy cảm.',
        'Bạn suy nghĩ sáng tạo và độc đáo.',
        'Bạn coi trọng khả năng biểu cảm và bộc lộ bản thân.',
        'Bạn tin tưởng các phán đoán trực giác.',
        'Bạn có một linh hồn tự do.',
        'Bạn có khả năng biểu cảm cảm xúc xuất sắc.',
        'Bạn có trí tưởng tượng phong phú.',
        'Bạn theo đuổi sự hoàn hảo.',
        'Bạn yêu vẻ đẹp.'
      ], id: [
        'Anda memiliki kepribadian artistik dan emosional.',
        'Anda memiliki kecenderungan kuat untuk halus dan sensitif.',
        'Anda berpikir secara kreatif dan orisinal.',
        'Anda menghargai ekspresivitas dan mengungkapkan diri.',
        'Anda mempercayai penilaian intuitif.',
        'Anda memiliki jiwa bebas.',
        'Anda memiliki ekspresivitas emosional yang luar biasa.',
        'Anda memiliki imajinasi yang kaya.',
        'Anda mengejar kesempurnaan.',
        'Anda mencintai keindahan.'
      ]
    },
    advice: { 
      ko: [
        '자신만의 예술 세계를 구축하세요. 독특하고 개성 있는 예술 세계를 만드는 것은 중요합니다. 당신만의 시각과 철학을 작품에 녹여내어 차별화된 예술 세계를 만들어야 합니다. 이것은 당신을 다른 예술가들과 구별해주는 핵심 요소입니다.',
        '지속적인 작품 활동을 하세요. 예술가는 끊임없이 작품을 만들어야 합니다. 슬럼프가 와도 계속 작업을 이어가며 발전시켜 나가야 합니다. 지속적인 활동은 당신의 기술을 향상시키고, 더 나은 작품을 만들어낼 수 있게 해줍니다.',
        '다양한 예술 장르를 탐험하세요. 여러 장르를 경험하고 학습하는 것은 중요한 일입니다. 다른 장르의 예술을 탐험하다보면 새로운 영감을 얻을 수 있으며, 당신의 작품에 다양한 요소를 융합할 수 있습니다.',
        '전시회나 공연을 자주 참관하세요. 다른 예술가들의 작품을 보는 것은 매우 중요합니다. 다양한 작품을 감상하며 영감을 얻고, 트렌드를 파악하며, 예술적 안목을 키워야 합니다.',
        '다른 예술가들과 교류하세요. 예술가 커뮤니티에서 활동하며 다른 예술가들과 교류해야 합니다. 서로의 작품을 보며 피드백을 나누고, 협업하며, 함께 전시하거나 프로젝트를 하면 서로 성장할 수 있습니다.',
        '기술을 배우고 익히세요. 예술적 감각뿐만 아니라 기술도 중요합니다. 기본기를 탄탄히 하고, 다양한 기법을 학습하며, 최신 기술과 도구에도 익숙해져야 합니다. 기술과 감성의 조화가 완벽한 작품을 만들어냅니다.',
        '포트폴리오를 꾸준히 관리하세요. 포트폴리오는 당신의 예술 여정을 보여주는 자료입니다. 지속적으로 작품을 추가하고 정리하며, 온라인과 오프라인 모두에서 자신의 작품을 효과적으로 보여줄 수 있도록 관리해야 합니다.',
        '자신의 작품을 적극적으로 홍보하세요. 좋은 작품도 홍보하지 않으면 사람들이 볼 수 없습니다. SNS, 갤러리, 전시회 등 다양한 채널을 활용하여 자신의 작품을 알리고 팬과 구매자를 만들어야 합니다.',
        '정신 건강을 잘 관리하세요. 예술 작업은 때로 고독하고 스트레스가 많습니다. 정기적으로 운동하고, 충분히 휴식하며, 다른 사람들과 소통하며 정신 건강을 관리해야 합니다. 건강한 정신이 좋은 작품을 만듭니다.',
        '예술적 완성도를 높이기 위해 노력하세요. 작품의 완성도를 높이는 것은 중요합니다. 작은 디테일까지 신경쓰고, 여러 번 수정하며, 완벽해질 때까지 노력해야 합니다. 높은 완성도의 작품은 당신의 전문성을 증명합니다.'
      ],
      en: [
        'Build your own artistic world. Creating a unique and distinctive artistic world is important. Infuse your vision and philosophy into your work to create a differentiated artistic world. This is a key element that distinguishes you from other artists.',
        'Engage in continuous creative work. Artists must constantly create works. Even when you hit a slump, continue your work and develop it. Continuous activity improves your skills and enables you to create better works.',
        'Explore various artistic genres. It is important to experience and learn multiple genres. By exploring different genres of art, you can gain new inspiration and fuse various elements into your work.',
        'Frequently attend exhibitions and performances. Seeing works by other artists is very important. Appreciate various works to gain inspiration, understand trends, and develop artistic insight.',
        'Network with other artists. You should engage in artistic communities and network with other artists. View each other\'s works for feedback, collaborate, and exhibit or do projects together to grow.',
        'Learn and master techniques. Technique is important as well as artistic sensibility. Solidify fundamentals, learn various techniques, and become familiar with the latest technologies and tools. Harmony of technique and sensibility creates perfect works.',
        'Maintain your portfolio consistently. Your portfolio shows your artistic journey. Continually add and organize works and manage it so you can effectively showcase your work both online and offline.',
        'Actively promote your work. Even good works cannot be seen if not promoted. Use various channels like SNS, galleries, and exhibitions to let people know about your work and build fans and buyers.',
        'Manage your mental health well. Artistic work can be lonely and stressful at times. Exercise regularly, rest sufficiently, and communicate with others to manage mental health. A healthy mind creates good works.',
        'Strive to raise artistic perfection. Raising work completion is important. Pay attention to small details, revise multiple times, and strive until perfection. High completion works prove your professionalism.'
      ], ja: [
        '自分だけの芸術世界を構築します。独特で個性ある芸術世界を作ることは重要です。自分の視覚と哲学を作品に込めて差別化された芸術世界を作ります。これは他の芸術家と区別する核心要素です。',
        '持続的な作品活動をします。芸術家は絶えず作品を作る必要があります。スランプが来ても続け作業を発展させます。持続的活動は技術を向上させより良い作品を作れます。',
        '多様な芸術ジャンルを探査します。複数のジャンルを経験し学習することは重要です。他のジャンルの芸術を探査すると新しいインスピレーションを得られ作品に多様な要素を融合できます。',
        '展示会や公演を頻繁に参観します。他の芸術家の作品を見ることは非常に重要です。多様な作品を鑑賞しインスピレーションを得てトレンドを把握し芸術的見識を育てます。',
        '他の芸術家と交流します。芸術家コミュニティで活動し他の芸術家と交流します。お互いの作品を見てフィードバックを共有し協作し一緒に展示やプロジェクトをするとお互いに成長できます。',
        '技術を学び習得します。芸術的感覚だけでなく技術も重要です。基本を固くし多様な技法を学習し最新技術とツールにも慣れます。技術と感性の調和が完璧な作品を作ります。',
        'ポートフォリオを着実に管理します。ポートフォリオは芸術の旅を示す資料です。持続的に作品を追加し整理しオンラインとオフラインの両方で効果的に見せることができるよう管理します。',
        '自分の作品を積極的に宣伝します。良い作品も宣伝しなければ人々が見ることができません。SNS、ギャラリー、展示会など多様なチャネルを活用し作品を宣伝しファンと購入者を作ります。',
        '精神健康を良く管理します。芸術作業は時々孤独でストレスが多いです。定期的に運動し十分に休息し他の人と交流し精神健康を管理します。健康な精神が良い作品を作ります。',
        '芸術的完成度を高めるために努力します。作品の完成度を高めることは重要です。小さなディテールまで注意し複数回修正し完璧になるまで努力します。高い完成度の作品は専門性を証明します。'
      ], 'zh-CN': [
        '建立你自己的艺术世界。创造独特且富有个性的艺术世界很重要。将你的视角与哲学融入作品，形成差异化艺术世界。这是与其他艺术家区分的核心要素。',
        '持续创作作品。艺术家必须持续创作。即使遇到低谷也要继续并推进工作。持续活动提升技能，让你创作出更好作品。',
        '探索多种艺术流派。体验和学习多种流派很重要。探索不同流派可获得新灵感，并将多样元素融入作品。',
        '经常参观展览与演出。观看其他艺术家的作品很重要。欣赏各类作品获取灵感、把握趋势并培养艺术见识。',
        '与其他艺术家交流。参与艺术社群并与他人交流。互相欣赏作品分享反馈，协作并共同办展或开展项目以共同成长。',
        '学习并掌握技法。技法与艺术感同样重要。夯实基础，学习多种技法，熟悉最新技术与工具。技法与感性的调和产生完美作品。',
        '持续维护作品集。作品集展示你的艺术历程。持续添加与整理作品，并兼顾线上与线下以有效呈现。',
        '积极推广你的作品。再好的作品不推广也无法被看到。利用社交媒体、画廊、展览等渠道让更多人了解，建立受众与买家。',
        '妥善管理心理健康。艺术创作有时孤独且有压力。规律运动、充分休息并与他人交流以维护心理健康。健康心态产出好作品。',
        '努力提升艺术完成度。提升作品完成度很重要。注意细节、反复调整并力求完善。高完成度作品证明你的专业性。'
      ], 'zh-TW': [
        '建立你自己的藝術世界。創造獨特且富有個性的藝術世界很重要。將你的視角與哲學融入作品，形成差異化藝術世界。這是與其他藝術家區分的核心要素。',
        '持續創作作品。藝術家必須持續創作。即使遇到低谷也要繼續並推進工作。持續活動提升技能，讓你創作出更好作品。',
        '探索多種藝術流派。體驗和學習多種流派很重要。探索不同流派可獲得新靈感，並將多樣元素融入作品。',
        '經常參觀展覽與演出。觀看其他藝術家的作品很重要。欣賞各類作品獲取靈感、把握趨勢並培養藝術見識。',
        '與其他藝術家交流。參與藝術社群並與他人交流。互相欣賞作品分享反饋，協作並共同辦展或開展項目以共同成長。',
        '學習並掌握技法。技法與藝術感同樣重要。夯實基礎，學習多種技法，熟悉最新技術與工具。技法與感性的調和產生完美作品。',
        '持續維護作品集。作品集展示你的藝術歷程。持續添加與整理作品，並兼顧線上與線下以有效呈現。',
        '積極推廣你的作品。再好的作品不推廣也無法被看到。利用社交媒體、畫廊、展覽等渠道讓更多人了解，建立受眾與買家。',
        '妥善管理心理健康。藝術創作有時孤獨且有壓力。規律運動、充分休息並與他人交流以維護心理健康。健康心態產出好作品。',
        '努力提升藝術完成度。提升作品完成度很重要。注意細節、反覆調整並力求完善。高完成度作品證明你的專業性。'
      ], vi: [
        'Xây dựng thế giới nghệ thuật của riêng bạn. Tạo ra một thế giới nghệ thuật độc đáo và đặc biệt là quan trọng. Làm mờ ý tưởng và triết lý của bạn vào tác phẩm để tạo ra một thế giới nghệ thuật khác biệt. Đây là yếu tố quan trọng phân biệt bạn với các nghệ sĩ khác.',
        'Tham gia vào công việc sáng tạo liên tục. Nghệ sĩ phải liên tục tạo ra tác phẩm. Ngay cả khi bạn gặp phải một khoảng thời gian khó khăn, hãy tiếp tục công việc của bạn và phát triển nó. Hoạt động liên tục cải thiện kỹ năng của bạn và cho phép bạn tạo ra các tác phẩm tốt hơn.',
        'Khám phá các thể loại nghệ thuật khác nhau. Việc trải nghiệm và học hỏi nhiều thể loại là quan trọng. Bằng cách khám phá các thể loại nghệ thuật khác nhau, bạn có thể đạt được nguồn cảm hứng mới và hợp nhất các yếu tố khác nhau vào tác phẩm của bạn.',
        'Thường xuyên tham dự các triển lãm và buổi biểu diễn. Xem tác phẩm của các nghệ sĩ khác là rất quan trọng. Đánh giá cao các tác phẩm khác nhau để đạt được cảm hứng, hiểu xu hướng và phát triển cái nhìn nghệ thuật.',
        'Kết nối với các nghệ sĩ khác. Bạn nên tham gia vào các cộng đồng nghệ thuật và kết nối với các nghệ sĩ khác. Xem tác phẩm của nhau để nhận phản hồi, hợp tác và triển lãm hoặc thực hiện các dự án cùng nhau để phát triển.',
        'Học và làm chủ các kỹ thuật. Kỹ thuật cũng quan trọng như cảm giác nghệ thuật. Củng cố cơ bản, học các kỹ thuật khác nhau và trở nên quen thuộc với các công nghệ và công cụ mới nhất. Sự hài hòa của kỹ thuật và cảm giác tạo ra các tác phẩm hoàn hảo.',
        'Duy trì danh mục tác phẩm của bạn một cách nhất quán. Danh mục tác phẩm của bạn cho thấy hành trình nghệ thuật của bạn. Tiếp tục thêm và tổ chức các tác phẩm và quản lý nó để bạn có thể trình bày hiệu quả tác phẩm của mình cả trực tuyến và ngoại tuyến.',
        'Tích cực quảng bá tác phẩm của bạn. Ngay cả các tác phẩm tốt cũng không thể được nhìn thấy nếu không được quảng bá. Sử dụng các kênh khác nhau như mạng xã hội, phòng trưng bày và triển lãm để cho mọi người biết về tác phẩm của bạn và xây dựng người hâm mộ và người mua.',
        'Quản lý sức khỏe tinh thần của bạn tốt. Công việc nghệ thuật có thể cô đơn và căng thẳng đôi khi. Tập thể dục thường xuyên, nghỉ ngơi đầy đủ và giao tiếp với người khác để quản lý sức khỏe tinh thần. Một tâm trí khỏe mạnh tạo ra các tác phẩm tốt.',
        'Nỗ lực nâng cao sự hoàn hảo nghệ thuật. Nâng cao sự hoàn thành công việc là quan trọng. Chú ý đến chi tiết nhỏ, sửa đổi nhiều lần và phấn đấu cho đến khi hoàn hảo. Các tác phẩm hoàn thành cao chứng minh chuyên môn của bạn.'
      ], id: [
        'Bangun dunia artistik Anda sendiri. Menciptakan dunia artistik yang unik dan khas penting. Masukkan visi dan filosofi Anda ke dalam karya Anda untuk menciptakan dunia artistik yang dibedakan. Ini adalah elemen kunci yang membedakan Anda dari seniman lain.',
        'Terlibat dalam pekerjaan kreatif yang berkelanjutan. Seniman harus terus menciptakan karya. Bahkan ketika Anda mengalami masa sulit, lanjutkan pekerjaan Anda dan kembangkan. Aktivitas berkelanjutan meningkatkan keterampilan Anda dan memungkinkan Anda menciptakan karya yang lebih baik.',
        'Jelajahi berbagai genre artistik. Penting untuk mengalami dan mempelajari beberapa genre. Dengan menjelajahi genre seni yang berbeda, Anda dapat memperoleh inspirasi baru dan menggabungkan berbagai elemen ke dalam karya Anda.',
        'Sering menghadiri pameran dan pertunjukan. Melihat karya seniman lain sangat penting. Hargai berbagai karya untuk mendapatkan inspirasi, memahami tren, dan mengembangkan wawasan artistik.',
        'Berjejaring dengan seniman lain. Anda harus terlibat dalam komunitas artistik dan berjejaring dengan seniman lain. Lihat karya satu sama lain untuk umpan balik, berkolaborasi, dan memamerkan atau melakukan proyek bersama untuk tumbuh.',
        'Pelajari dan kuasai teknik. Teknik penting serta sensibilitas artistik. Perkuat dasar, pelajari berbagai teknik, dan kenali teknologi dan alat terbaru. Harmoni teknik dan sensibilitas menciptakan karya sempurna.',
        'Pertahankan portofolio Anda secara konsisten. Portofolio Anda menunjukkan perjalanan artistik Anda. Terus tambahkan dan atur karya dan kelola sehingga Anda dapat menunjukkan karya Anda secara efektif baik online maupun offline.',
        'Aktif promosikan karya Anda. Bahkan karya yang baik tidak dapat dilihat jika tidak dipromosikan. Gunakan berbagai saluran seperti media sosial, galeri, dan pameran untuk memberi tahu orang tentang karya Anda dan membangun penggemar dan pembeli.',
        'Kelola kesehatan mental Anda dengan baik. Pekerjaan artistik bisa kesepian dan membuat stres terkadang. Berolahraga secara teratur, istirahat yang cukup, dan berkomunikasi dengan orang lain untuk mengelola kesehatan mental. Pikiran yang sehat menciptakan karya yang baik.',
        'Berusaha meningkatkan kesempurnaan artistik. Meningkatkan penyelesaian pekerjaan penting. Perhatikan detail kecil, revisi beberapa kali, dan berusaha hingga sempurna. Karya penyelesaian tinggi membuktikan profesionalisme Anda.'
      ]
    },
    fortune: {
      success: { 
        ko: [
          '예술 분야에서 큰 성공을 이룰 수 있습니다. 당신의 예술적 감성과 창의력은 예술 분야에서 큰 성공을 이룰 수 있게 해줍니다. 독특한 작품과 감동적인 표현은 많은 사람들에게 사랑받게 되며, 예술계에서 인정받을 수 있습니다.',
          '자신의 작품으로 인정받을 수 있습니다. 당신의 진솔하고 독창적인 작품은 사람들로부터 큰 인정을 받게 됩니다. 시간이 지나도 기억에 남는 작품을 만들어내며, 예술사에 이름을 남길 수 있습니다.',
          '전시나 공연에서 주목받을 수 있습니다. 당신의 작품은 전시회나 공연에서 많은 관객들에게 주목받고 사랑받게 됩니다. 전문가들로부터도 좋은 평가를 받으며, 당신의 명성은 더욱 높아집니다.',
          '독특한 스타일로 차별화할 수 있습니다. 당신만의 독창적인 스타일과 세계관은 시장에서 차별화된 위치를 만들어줍니다. 남들과 다른 접근과 표현으로 독특한 작품을 만들어냅니다.',
          '창의적 작품으로 성공할 수 있습니다. 당신의 창의력과 예술적 감각은 혁신적인 작품을 만들어낼 수 있게 해줍니다. 이러한 작품들은 예술계에 새로운 바람을 불어넣으며, 당신의 성공을 이끌어갑니다.'
        ],
        en: [
          'You can achieve great success in the art field. Your artistic sensibility and creativity enable great success in the art field. Unique works and touching expressions become loved by many people and can be recognized in the art world.',
          'You can be recognized for your works. Your sincere and original works receive great recognition from people. You create works that remain in memory even over time and can leave your name in art history.',
          'You can gain attention at exhibitions or performances. Your works gain attention and love from many audiences at exhibitions or performances. You also receive good evaluations from experts, and your reputation rises further.',
          'You can differentiate yourself with a unique style. Your own original style and worldview create a differentiated position in the market. You create unique works with approaches and expressions different from others.',
          'You can succeed with creative works. Your creativity and artistic sense enable you to create innovative works. Such works breathe new life into the art world and lead your success.'
        ], ja: [
          '芸術分野で大きな成功を遂げられます。芸術的感性と創造力は芸術分野で大きな成功を遂げられます。独特な作品と感動的な表現は多くの人に愛され芸術界で認められます。',
          '自分の作品で認められます。真心で独創的な作品は人々から大きな認めを受けます。時間が過ぎても記憶に残る作品を作り出し芸術史に名前を残せます。',
          '展示や公演で注目されます。作品は展示会や公演で多くの観客に注目され愛されます。専門家からも良い評価を受け名声はさらに高まります。',
          '独特なスタイルで差別化できます。自分だけの独創的スタイルと世界観は市場で差別化された位置を作ります。他人と違うアプローチと表現で独特な作品を作ります。',
          '創造的作品で成功できます。創造力と芸術的感覚は革新的作品を作れます。これらの作品は芸術界に新しい風を吹き込み成功を導きます。'
        ], 'zh-CN': [
          '你可以在艺术领域取得巨大成功。你的艺术感性与创造力让你在艺术领域取得成功。独特作品与感人表达会得到众人喜爱，并获得艺术界认可。',
          '你能因自己的作品受到认可。你真诚且独创的作品会获得众人广泛认可。创作会经久难忘，并能在艺术史上留名。',
          '你能在展览或演出中获得关注。你的作品会在展览或演出中备受观众关注与喜爱。同时获得专家好评，你的声誉会进一步提升。',
          '你能以独特风格实现差异化。你自己独创的风格与世界观在市场中形成差异化定位。以不同于他人的方法与表达创造独特作品。',
          '你能以创造性作品取得成功。你的创造力与艺术感使你创作出创新作品。这些作品为艺术界带来新风，并引领你的成功。'
        ], 'zh-TW': [
          '你可以在藝術領域取得巨大成功。你的藝術感性與創造力讓你在藝術領域取得成功。獨特作品與感人表達會得到眾人喜愛，並獲得藝術界認可。',
          '你能因自己的作品受到認可。你真誠且獨創的作品會獲得眾人廣泛認可。創作會經久難忘，並能在藝術史上留名。',
          '你能在展覽或演出中獲得關注。你的作品會在展覽或演出中備受觀眾關注與喜愛。同時獲得專家好評，你的聲譽會進一步提升。',
          '你能以獨特風格實現差異化。你自己獨創的風格與世界觀在市場中形成差異化定位。以不同於他人的方法與表達創造獨特作品。',
          '你能以創造性作品取得成功。你的創造力與藝術感使你創作出創新作品。這些作品為藝術界帶來新風，並引領你的成功。'
        ], vi: [
          'Bạn có thể đạt được thành công lớn trong lĩnh vực nghệ thuật. Cảm xúc nghệ thuật và khả năng sáng tạo của bạn cho phép thành công lớn trong lĩnh vực nghệ thuật. Các tác phẩm độc đáo và biểu hiện cảm động trở thành được yêu mến bởi nhiều người và có thể được công nhận trong thế giới nghệ thuật.',
          'Bạn có thể được công nhận cho các tác phẩm của bạn. Các tác phẩm chân thành và độc đáo của bạn nhận được sự công nhận lớn từ mọi người. Bạn tạo ra các tác phẩm vẫn còn trong ký ức ngay cả theo thời gian và có thể để lại tên của bạn trong lịch sử nghệ thuật.',
          'Bạn có thể đạt được sự chú ý tại các triển lãm hoặc buổi biểu diễn. Các tác phẩm của bạn đạt được sự chú ý và tình yêu từ nhiều khán giả tại các triển lãm hoặc buổi biểu diễn. Bạn cũng nhận được đánh giá tốt từ các chuyên gia, và danh tiếng của bạn tăng thêm.',
          'Bạn có thể phân biệt hóa bản thân bằng một phong cách độc đáo. Phong cách và thế giới quan độc đáo của riêng bạn tạo ra một vị trí được phân biệt hóa trong thị trường. Bạn tạo ra các tác phẩm độc đáo với các cách tiếp cận và biểu hiện khác với người khác.',
          'Bạn có thể thành công với các tác phẩm sáng tạo. Khả năng sáng tạo và cảm giác nghệ thuật của bạn cho phép bạn tạo ra các tác phẩm sáng tạo. Các tác phẩm như vậy thổi luồng gió mới vào thế giới nghệ thuật và dẫn dắt thành công của bạn.'
        ], id: [
          'Anda dapat mencapai kesuksesan besar di bidang seni. Sensibilitas artistik dan kreativitas Anda memungkinkan kesuksesan besar di bidang seni. Karya unik dan ekspresi yang menyentuh menjadi dicintai oleh banyak orang dan dapat diakui dalam dunia seni.',
          'Anda dapat diakui untuk karya Anda. Karya tulus dan orisinal Anda menerima pengakuan besar dari orang-orang. Anda menciptakan karya yang tetap dalam memori bahkan seiring waktu dan dapat meninggalkan nama Anda dalam sejarah seni.',
          'Anda dapat mendapat perhatian di pameran atau pertunjukan. Karya Anda mendapat perhatian dan cinta dari banyak penonton di pameran atau pertunjukan. Anda juga menerima evaluasi yang baik dari para ahli, dan reputasi Anda meningkat lebih lanjut.',
          'Anda dapat membedakan diri dengan gaya unik. Gaya dan pandangan dunia orisinal Anda sendiri menciptakan posisi yang dibedakan di pasar. Anda menciptakan karya unik dengan pendekatan dan ekspresi yang berbeda dari yang lain.',
          'Anda dapat berhasil dengan karya kreatif. Kreativitas dan rasa artistik Anda memungkinkan Anda menciptakan karya inovatif. Karya-karya semacam itu meniupkan angin baru ke dalam dunia seni dan mengarahkan kesuksesan Anda.'
        ]
      },
      hidden: { 
        ko: [
          '유명한 예술가가 될 가능성이 있습니다. 당신의 뛰어난 작품과 지속적인 활동은 당신을 유명한 예술가로 만들어줍니다. 전 세계의 사람들이 당신의 작품을 알고 사랑하게 되며, 당신은 영향력 있는 아티스트가 됩니다.',
          '세상에 새로운 미학을 제시할 수 있습니다. 당신의 독창적인 시각과 혁신적인 접근은 새로운 미학적 경향을 만들어낼 수 있습니다. 당신의 작품은 미래 세대에게도 영향을 미치며, 예술사에 새로운 장을 열 수 있습니다.',
          '영감을 주는 작품을 만들 수 있습니다. 당신의 작품은 많은 사람들에게 영감을 주고 용기를 북돋아줍니다. 사람들이 당신의 작품을 보고 자신의 꿈을 키우고 더 나은 삶을 살게 되는 힘을 줍니다.',
          '전시회나 공연에서 성공할 수 있습니다. 당신의 작품은 큰 규모의 전시회나 공연에서 큰 성공을 거둘 수 있습니다. 관객들의 열렬한 환호와 전문가들의 높은 평가를 받으며, 당신의 명성은 더욱 넓어집니다.',
          '예술계의 거장이 될 수 있습니다. 당신의 지속적인 노력과 예술적 성취는 당신을 예술계의 거장으로 만들어줍니다. 당신의 작품은 미술관에 전시되고, 예술사에 영원히 남는 작품이 됩니다.'
        ],
        en: [
          'You have the potential to become a famous artist. Your excellent works and continuous activity make you a famous artist. People all over the world come to know and love your works, and you become an influential artist.',
          'You can present new aesthetics to the world. Your original vision and innovative approach can create new aesthetic trends. Your works also influence future generations and can open new chapters in art history.',
          'You can create inspirational works. Your works inspire and encourage many people. People see your works and gain the power to nurture their dreams and live better lives.',
          'You can succeed at exhibitions or performances. Your works can achieve great success at large-scale exhibitions or performances. You receive enthusiastic cheers from audiences and high evaluations from experts, and your fame expands further.',
          'You can become a master in the art world. Your consistent effort and artistic achievements make you a master in the art world. Your works are exhibited in art museums and become works that remain forever in art history.'
        ], ja: [
          '有名な芸術家になる可能性があります。優れた作品と持続的活動は有名な芸術家にします。全世界の人が作品を知り愛するようになり影響力のあるアーティストになります。',
          '世界に新しい美学を提示できます。独創的視覚と革新的アプローチは新しい美学的傾向を作れます。作品は未来世代にも影響し芸術史に新しい章を開けます。',
          'インスピレーションを与える作品を作れます。作品は多くの人にインスピレーションを与え勇気を奮い立たせます。人々が作品を見て自分の夢を育ちより良い人生を生きる力を得ます。',
          '展示会や公演で成功できます。作品は大規模な展示会や公演で大きな成功を収められます。観客の熱烈な歓呼と専門家の高い評価を受け名声はさらに広がります。',
          '芸術界の巨匠になれます。持続的努力と芸術的達成は芸術界の巨匠にします。作品は美術館に展示され芸術史に永遠に残る作品になります。'
        ], 'zh-CN': [
          '你有机会成为知名艺术家。你出色的作品与持续的活动成就你成为知名艺术家。全世界的人们了解并喜爱你的作品，你将成为有影响力的艺术家。',
          '你能向世界呈现新的美学。你独创的视野与创新方法可创造新的美学趋势。你的作品影响未来世代，并为艺术史开启新篇章。',
          '你能创作启发人的作品。你的作品为许多人带来灵感与鼓励。人们看到你的作品后获得追求梦想与过上更好生活的力量。',
          '你能在展览或演出中取得成功。你的作品能在大型展览或演出中获得巨大成功。你会收获观众热烈喝彩与专家高评，你的声誉会进一步扩大。',
          '你能成为艺术界大师。你持续的努力与艺术成就让你成为艺术界大师。你的作品在美术馆展出，并成为艺术史上永存的作品。'
        ], 'zh-TW': [
          '你有機會成為知名藝術家。你出色的作品與持續的活動成就你成為知名藝術家。全世界的人們了解並喜愛你的作品，你將成為有影響力的藝術家。',
          '你能向世界呈現新的美學。你獨創的視野與創新方法可創造新的美學趨勢。你的作品影響未來世代，並為藝術史開啟新篇章。',
          '你能創作啟發人的作品。你的作品為許多人帶來靈感與鼓勵。人們看到你的作品後獲得追求夢想與過上更好生活的力量。',
          '你能在展覽或演出中取得成功。你的作品能在大型展覽或演出中獲得巨大成功。你會收獲觀眾熱烈喝彩與專家高評，你的聲譽會進一步擴大。',
          '你能成為藝術界大師。你持續的努力與藝術成就讓你成為藝術界大師。你的作品在美術館展出，並成為藝術史上永存的作品。'
        ], vi: [
          'Bạn có tiềm năng trở thành một nghệ sĩ nổi tiếng. Các tác phẩm xuất sắc và hoạt động liên tục của bạn biến bạn thành một nghệ sĩ nổi tiếng. Mọi người trên khắp thế giới biết và yêu các tác phẩm của bạn, và bạn trở thành một nghệ sĩ có ảnh hưởng.',
          'Bạn có thể trình bày thẩm mỹ mới cho thế giới. Tầm nhìn độc đáo và cách tiếp cận sáng tạo của bạn có thể tạo ra xu hướng thẩm mỹ mới. Các tác phẩm của bạn cũng ảnh hưởng đến các thế hệ tương lai và có thể mở ra các chương mới trong lịch sử nghệ thuật.',
          'Bạn có thể tạo ra các tác phẩm truyền cảm hứng. Các tác phẩm của bạn truyền cảm hứng và khuyến khích nhiều người. Mọi người xem các tác phẩm của bạn và đạt được sức mạnh để nuôi dưỡng những giấc mơ của họ và sống cuộc sống tốt hơn.',
          'Bạn có thể thành công tại các triển lãm hoặc buổi biểu diễn. Các tác phẩm của bạn có thể đạt được thành công lớn tại các triển lãm hoặc buổi biểu diễn quy mô lớn. Bạn nhận được những cơn mưa rào nhiệt tình từ khán giả và đánh giá cao từ các chuyên gia, và danh tiếng của bạn mở rộng thêm.',
          'Bạn có thể trở thành một bậc thầy trong thế giới nghệ thuật. Nỗ lực nhất quán và thành tựu nghệ thuật của bạn biến bạn thành một bậc thầy trong thế giới nghệ thuật. Các tác phẩm của bạn được triển lãm trong các bảo tàng nghệ thuật và trở thành các tác phẩm vẫn còn mãi trong lịch sử nghệ thuật.'
        ], id: [
          'Anda memiliki potensi untuk menjadi seniman terkenal. Karya Anda yang luar biasa dan aktivitas berkelanjutan membuat Anda menjadi seniman terkenal. Orang-orang di seluruh dunia mengetahui dan menyukai karya Anda, dan Anda menjadi seniman yang berpengaruh.',
          'Anda dapat menyajikan estetika baru kepada dunia. Visi orisinal dan pendekatan inovatif Anda dapat menciptakan tren estetika baru. Karya Anda juga mempengaruhi generasi mendatang dan dapat membuka bab-bab baru dalam sejarah seni.',
          'Anda dapat menciptakan karya yang menginspirasi. Karya Anda menginspirasi dan mendorong banyak orang. Orang melihat karya Anda dan mendapatkan kekuatan untuk memelihara mimpi mereka dan hidup lebih baik.',
          'Anda dapat berhasil di pameran atau pertunjukan. Karya Anda dapat mencapai kesuksesan besar di pameran atau pertunjukan skala besar. Anda menerima sorak antusias dari penonton dan evaluasi tinggi dari para ahli, dan ketenaran Anda meluas lebih lanjut.',
          'Anda dapat menjadi master di dunia seni. Upaya konsisten dan pencapaian artistik Anda membuat Anda menjadi master di dunia seni. Karya Anda dipamerkan di museum seni dan menjadi karya yang tetap selamanya dalam sejarah seni.'
        ]
      }
    }
  },
  {
    id: 9,
    title: { ko: '연구자형', en: 'Researcher Type', ja: '研究者型', 'zh-CN': '研究者型', 'zh-TW': '研究者型', vi: 'Kiểu Nghiên Cứu', id: 'Tipe Peneliti' },
    description: {
      ko: [
        '당신의 얼굴은 호기심과 탐구심을 보여줍니다. 세상에 대한 궁금증과 학습 욕구가 강합니다.',
        '지적 욕구가 강하고 배움을 좋아합니다. 새로운 지식을 습득하는 것을 즐깁니다.',
        '신중하고 깊이 있는 사고를 합니다. 표면적이 아닌 본질을 파악하려고 노력합니다.',
        '인내심과 집중력이 뛰어납니다. 오랜 시간 동안 한 가지에 집중할 수 있습니다.',
        '비판적 사고와 객관적 분석 능력이 있습니다. 사실과 증거를 중시합니다.',
        '체계적이고 논리적인 접근을 선호합니다. 계획에 따라 연구를 진행합니다.',
        '세세한 관찰과 정밀한 기록 능력이 있습니다. 작은 변화도 놓치지 않습니다.',
        '문제 해결을 위한 창의적 방법을 찾습니다. 기존 방식의 개선을 고민합니다.',
        '학술적 성과에 대한 욕구가 강합니다. 논문이나 연구로 인정받고 싶어 합니다.',
        '진리 탐구에 대한 열정이 느껴집니다. 학문적 진보에 기여하고 싶은 마음이 큽니다.'
      ],
      en: [
        'Your face shows curiosity and inquiry. You have strong questions about the world and desire to learn.',
        'You have strong intellectual desires and love learning. You enjoy acquiring new knowledge.',
        'You think carefully and deeply. You try to grasp the essence, not the surface.',
        'You have excellent patience and focus. You can concentrate on one thing for a long time.',
        'You have critical thinking and objective analysis abilities. You value facts and evidence.',
        'You prefer systematic and logical approaches. You conduct research according to plan.',
        'You have detailed observation and precise recording abilities. You don\'t miss even small changes.',
        'You find creative methods for problem solving. You think about improving existing methods.',
        'You have strong desires for academic achievement. You want to be recognized through papers or research.',
        'You feel passion for truth exploration. You have a strong desire to contribute to academic advancement.'
      ], ja: [
        '好奇心と探求心を示します。世界に対する疑問と学習欲求が強いです。',
        '知的欲求が強く学びを好みます。新知識を習得することを楽しみます。',
        '慎重で深い思考をします。表面的でなく本質を把握しようと努力します。',
        '忍耐力と集中力が優れています。長時間一つのことに集中できます。',
        '批判的思考と客観的分析能力があります。事実と証拠を重視します。',
        '体系的で論理的なアプローチを好みます。計画に従って研究を進めます。',
        '細かな観察と精密な記録能力があります。小さな変化も見逃しません。',
        '問題解決のための創造的方法を見つけます。既存方式の改善を考えます。',
        '学術的成果への欲求が強いです。論文や研究で認められたいと望みます。',
        '真理探求への情熱が感じられます。学問的進歩に貢献したい心が大きいです。'
      ], 'zh-CN': [
        '你的面相呈现好奇与探索。你对世界充满疑问且有强烈学习动机。',
        '你有强烈的求知欲并喜爱学习。享受获取新知识。',
        '你进行慎重且深入的思考。致力于把握本质而非表面。',
        '你有出色的耐心与专注。能长时间专注一件事。',
        '你具备批判性思考与客观分析能力。重视事实与证据。',
        '你偏好系统化与逻辑化方法。按计划推进研究。',
        '你具备细致观察与精确记录能力。不遗漏细微变化。',
        '你为解决问题寻找创新方法。思考改进既有方法。',
        '你对学术成就的诉求很强。希望通过论文或研究获得认可。',
        '你体现出探索真理的热情。强烈期望为学术进步做贡献。'
      ], 'zh-TW': [
        '你的面相呈現好奇與探索。你對世界充滿疑問且有強烈學習動機。',
        '你有強烈的求知欲並喜愛學習。享受獲取新知識。',
        '你進行慎重且深入的思考。致力於把握本質而非表面。',
        '你有出色的耐心與專注。能長時間專注一件事。',
        '你具備批判性思考與客觀分析能力。重視事實與證據。',
        '你偏好系統化與邏輯化方法。按計劃推進研究。',
        '你具備細致觀察與精確記錄能力。不漏掉細微變化。',
        '你為解決問題尋找創新方法。思考改進既有方法。',
        '你對學術成就的訴求很強。希望通過論文或研究獲得認可。',
        '你體現出探索真理的熱情。強烈期望為學術進步做貢獻。'
      ], vi: [
        'Khuôn mặt của bạn thể hiện sự tò mò và tìm hiểu. Bạn có những câu hỏi mạnh mẽ về thế giới và mong muốn học hỏi.',
        'Bạn có mong muốn trí tuệ mạnh mẽ và yêu thích học hỏi. Bạn thích thu nhận kiến thức mới.',
        'Bạn suy nghĩ cẩn thận và sâu sắc. Bạn cố gắng nắm bắt bản chất, không phải bề mặt.',
        'Bạn có sự kiên nhẫn và tập trung xuất sắc. Bạn có thể tập trung vào một điều trong một thời gian dài.',
        'Bạn có khả năng tư duy phê phán và phân tích khách quan. Bạn coi trọng sự thật và bằng chứng.',
        'Bạn thích các cách tiếp cận có hệ thống và logic. Bạn tiến hành nghiên cứu theo kế hoạch.',
        'Bạn có khả năng quan sát chi tiết và ghi chép chính xác. Bạn không bỏ lỡ ngay cả những thay đổi nhỏ.',
        'Bạn tìm ra các phương pháp sáng tạo để giải quyết vấn đề. Bạn suy nghĩ về việc cải thiện các phương pháp hiện có.',
        'Bạn có mong muốn mạnh mẽ cho thành tích học thuật. Bạn muốn được công nhận thông qua các bài báo hoặc nghiên cứu.',
        'Bạn cảm thấy đam mê cho khám phá sự thật. Bạn có mong muốn mạnh mẽ để đóng góp cho tiến bộ học thuật.'
      ], id: [
        'Wajah Anda menunjukkan rasa ingin tahu dan penyelidikan. Anda memiliki pertanyaan kuat tentang dunia dan keinginan untuk belajar.',
        'Anda memiliki keinginan intelektual yang kuat dan suka belajar. Anda menikmati memperoleh pengetahuan baru.',
        'Anda berpikir dengan hati-hati dan mendalam. Anda mencoba memahami esensi, bukan permukaannya.',
        'Anda memiliki kesabaran dan fokus yang luar biasa. Anda dapat berkonsentrasi pada satu hal untuk waktu yang lama.',
        'Anda memiliki kemampuan berpikir kritis dan analisis objektif. Anda menghargai fakta dan bukti.',
        'Anda lebih suka pendekatan yang sistematis dan logis. Anda melakukan penelitian sesuai rencana.',
        'Anda memiliki kemampuan pengamatan yang rinci dan pencatatan yang tepat. Anda tidak melewatkan bahkan perubahan kecil.',
        'Anda menemukan metode kreatif untuk pemecahan masalah. Anda berpikir tentang meningkatkan metode yang ada.',
        'Anda memiliki keinginan yang kuat untuk pencapaian akademis. Anda ingin diakui melalui makalah atau penelitian.',
        'Anda merasakan gairah untuk eksplorasi kebenaran. Anda memiliki keinginan kuat untuk berkontribusi pada kemajuan akademis.'
      ]
    },
    emoji: '🔍',
    scoreRange: [10, 19],
    strengths: { 
      ko: ['호기심', '탐구심', '학습능력', '집중력', '인내심', '비판적사고', '논리성', '관찰력', '학문적열정', '문제해결'], 
      en: ['Curiosity', 'Inquiry', 'Learning', 'Focus', 'Patience', 'Critical Thinking', 'Logic', 'Observation', 'Academic', 'Problem Solving'], 
      ja: ['好奇心', '探求心', '学習能力', '集中力', '忍耐力', '批判的思考', '論理性', '観察力', '学問的熱情', '問題解決'], 
      'zh-CN': ['好奇心', '探索心', '学习能力', '专注力', '耐心', '批判性思考', '逻辑性', '观察力', '学术热情', '问题解决'], 
      'zh-TW': ['好奇心', '探索心', '學習能力', '專注力', '耐心', '批判性思考', '邏輯性', '觀察力', '學術熱情', '問題解決'], 
      vi: ['Tò mò', 'Tìm hiểu', 'Học hỏi', 'Tập trung', 'Kiên nhẫn', 'Tư duy phê phán', 'Logic', 'Quan sát', 'Học thuật', 'Giải quyết vấn đề'], 
      id: ['Rasa Ingin Tahu', 'Penyelidikan', 'Pembelajaran', 'Fokus', 'Kesabaran', 'Pemikiran Kritis', 'Logika', 'Observasi', 'Akademis', 'Pemecahan Masalah'] 
    },
    recommendations: { 
      ko: ['연구원', '과학자', '학자', '교수', '박사', '박물관연구원', '도서관사서', '역사학자', '언어학자', '철학자'], 
      en: ['Researcher', 'Scientist', 'Scholar', 'Professor', 'PhD', 'Museum Researcher', 'Librarian', 'Historian', 'Linguist', 'Philosopher'], 
      ja: ['研究員', '科学者', '学者', '教授', '博士', '博物館研究員', '図書館司書', '歴史学者', '言語学者', '哲学者'], 
      'zh-CN': ['研究员', '科学家', '学者', '教授', '博士', '博物馆研究员', '图书管理员', '历史学家', '语言学家', '哲学家'], 
      'zh-TW': ['研究員', '科學家', '學者', '教授', '博士', '博物館研究員', '圖書管理員', '歷史學家', '語言學家', '哲學家'], 
      vi: ['Nhà nghiên cứu', 'Nhà khoa học', 'Học giả', 'Giáo sư', 'Tiến sĩ', 'Nhà nghiên cứu bảo tàng', 'Thủ thư', 'Nhà sử học', 'Nhà ngôn ngữ học', 'Triết gia'], 
      id: ['Peneliti', 'Ilmuwan', 'Cendekiawan', 'Profesor', 'PhD', 'Peneliti Museum', 'Pustakawan', 'Sejarawan', 'Bahasa', 'Filsuf'] 
    },
    personality: { 
      ko: [
        '호기심이 많고 탐구심이 강합니다.',
        '학습을 좋아하고 배움에 열정적입니다.',
        '신중하고 깊이 있게 생각합니다.',
        '인내심과 집중력이 뛰어납니다.',
        '비판적이고 객관적으로 분석합니다.',
        '체계적이고 논리적 접근을 선호합니다.',
        '세심한 관찰과 정밀한 기록을 합니다.',
        '창의적 문제 해결 능력이 있습니다.',
        '학술적 성과에 대한 욕구가 강합니다.',
        '진리 탐구에 열정적입니다.'
      ],
      en: [
        'You have much curiosity and strong inquiry.',
        'You love learning and are passionate about knowledge.',
        'You think carefully and deeply.',
        'You have excellent patience and focus.',
        'You analyze critically and objectively.',
        'You prefer systematic and logical approaches.',
        'You make careful observations and precise records.',
        'You have creative problem-solving abilities.',
        'You have strong desires for academic achievement.',
        'You are passionate about truth exploration.'
      ], ja: [
        '好奇心が多く探求心が強いです。',
        '学習を好み学びに情熱的です。',
        '慎重で深く考えます。',
        '忍耐力と集中力が優れています。',
        '批判的で客観的に分析します。',
        '体系的で論理的アプローチを好みます。',
        '細心な観察と精密な記録をします。',
        '創造的問題解決能力があります。',
        '学術的成果への欲求が強いです。',
        '真理探求に情熱的です。'
      ], 'zh-CN': [
        '你好奇心强且探索心强。',
        '你热爱学习并对知识充满热情。',
        '你进行慎重且深入的思考。',
        '你有出色的耐心与专注。',
        '你进行批判性与客观的分析。',
        '你偏好系统化与逻辑化方法。',
        '你进行细致观察与精确记录。',
        '你具备创造性问题解决能力。',
        '你对学术成就的诉求很强。',
        '你探索真理充满热情。'
      ], 'zh-TW': [
        '你好奇心強且探索心強。',
        '你熱愛學習並對知識充滿熱情。',
        '你進行慎重且深入的思考。',
        '你有出色的耐心與專注。',
        '你進行批判性與客觀的分析。',
        '你偏好系統化與邏輯化方法。',
        '你進行細致觀察與精確記錄。',
        '你具備創造性問題解決能力。',
        '你對學術成就的訴求很強。',
        '你探索真理充滿熱情。'
      ], vi: [
        'Bạn có nhiều sự tò mò và khả năng tìm hiểu mạnh mẽ.',
        'Bạn yêu thích học hỏi và đam mê về kiến thức.',
        'Bạn suy nghĩ cẩn thận và sâu sắc.',
        'Bạn có sự kiên nhẫn và tập trung xuất sắc.',
        'Bạn phân tích một cách phê phán và khách quan.',
        'Bạn thích các cách tiếp cận có hệ thống và logic.',
        'Bạn thực hiện quan sát cẩn thận và ghi chép chính xác.',
        'Bạn có khả năng giải quyết vấn đề sáng tạo.',
        'Bạn có mong muốn mạnh mẽ cho thành tích học thuật.',
        'Bạn đam mê khám phá sự thật.'
      ], id: [
        'Anda memiliki banyak rasa ingin tahu dan penyelidikan yang kuat.',
        'Anda menyukai pembelajaran dan bersemangat tentang pengetahuan.',
        'Anda berpikir dengan hati-hati dan mendalam.',
        'Anda memiliki kesabaran dan fokus yang luar biasa.',
        'Anda menganalisis secara kritis dan objektif.',
        'Anda lebih suka pendekatan yang sistematis dan logis.',
        'Anda melakukan pengamatan yang cermat dan catatan yang tepat.',
        'Anda memiliki kemampuan pemecahan masalah yang kreatif.',
        'Anda memiliki keinginan yang kuat untuk pencapaian akademis.',
        'Anda bersemangat tentang eksplorasi kebenaran.'
      ]
    },
    advice: { 
      ko: [
        '학문적 기초를 탄탄히 다지세요. 연구자에게 기본기는 매우 중요합니다. 해당 분야의 이론과 개념을 정확히 이해하고, 기본적인 연구 방법론을 숙지해야 합니다. 탄탄한 기초 위에서만 혁신적인 연구가 가능합니다.',
        '박사학위 취득을 고려하세요. 연구자로서 제대로 된 경력을 쌓으려면 박사학위는 필수입니다. 깊이 있는 연구와 학문적 성과를 통해 전문성을 인정받고, 더 많은 기회를 얻을 수 있습니다.',
        '논문 작성 능력을 키우세요. 논문은 연구자의 핵심 역량입니다. 논리적이고 명확한 글쓰기 능력을 키우고, 국제 학술지에 게재할 수 있는 수준의 논문을 작성할 수 있어야 합니다.',
        '국제 학회에 참석하세요. 국제 학회에 참석하여 최신 연구 동향을 파악하고, 다른 연구자들과 교류하며, 자신의 연구를 발표해야 합니다. 국제 학회는 당신의 시야를 넓혀주는 중요한 경험이 됩니다.',
        '다른 연구자들과 협업하세요. 혼자서는 모든 것을 할 수 없습니다. 다른 연구자들과 협업하며 시너지를 만들 수 있어야 합니다. 다양한 관점과 전문성을 가진 연구자들과 함께 연구하면 더 큰 성과를 낼 수 있습니다.',
        '최신 연구 동향을 파악하세요. 연구는 계속 발전합니다. 최신 논문들을 읽고, 새로운 연구 방법론과 기술을 학습하며, 업계의 트렌드를 파악해야 합니다.',
        '실험과 연구에 집중하세요. 연구자는 실험과 연구에 충실해야 합니다. 체계적으로 연구를 설계하고, 정확하게 실행하며, 객관적으로 결과를 분석해야 합니다.',
        '학술지에 논문을 발표하세요. 논문은 연구자의 성과를 증명하는 수단입니다. 지속적으로 논문을 발표하며 연구 성과를 쌓아야 합니다. 높은 수준의 학술지에 게재하는 것을 목표로 하세요.',
        '멘토를 찾아 지도를 받으세요. 경험 많은 선배 연구자의 조언은 매우 소중합니다. 그들의 연구 방법과 노하우를 배우고, 자신의 연구에 적용하며 성장해야 합니다.',
        '장기적인 연구 계획을 수립하세요. 연구자는 장기적인 비전이 필요합니다. 10년, 20년 후의 목표를 설정하고, 단계적으로 계획을 실행하며 장기적인 연구 성과를 만들어야 합니다.'
      ],
      en: [
        'Build a solid academic foundation. Fundamentals are crucial for researchers. Accurately understand the theories and concepts in your field and master basic research methodologies. Only with a solid foundation can you conduct innovative research.',
        'Consider obtaining a doctorate degree. To build a proper career as a researcher, a doctorate degree is essential. Gain deep research and academic achievements to receive professional recognition and more opportunities.',
        'Build paper writing skills. Papers are a researcher\'s core competency. Develop logical and clear writing abilities and be able to write papers at a level that can be published in international journals.',
        'Attend international conferences. Attend international conferences to understand the latest research trends, network with other researchers, and present your own research. International conferences are important experiences that broaden your horizons.',
        'Collaborate with other researchers. You cannot do everything alone. You should be able to collaborate with other researchers and create synergy. Researching with researchers with diverse perspectives and expertise can yield greater results.',
        'Keep up with the latest research trends. Research continues to advance. Read the latest papers, learn new research methodologies and technologies, and understand industry trends.',
        'Focus on experiments and research. Researchers should be committed to experiments and research. Design research systematically, execute accurately, and analyze results objectively.',
        'Publish papers in academic journals. Papers are a means to prove a researcher\'s achievements. Continuously publish papers and build research accomplishments. Aim for publication in high-level academic journals.',
        'Find a mentor and receive guidance. The advice of experienced senior researchers is very valuable. Learn their research methods and know-how, apply them to your research, and grow.',
        'Establish long-term research plans. Researchers need long-term vision. Set goals for 10 and 20 years later, execute plans step by step, and create long-term research achievements.'
      ], ja: [
        '学問的基礎を固くします。研究者に基本は非常に重要です。該当分野の理論と概念を正確に理解し基本的な研究方法論を熟知すべきです。固い基礎の上でだけ革新的研究が可能です。',
        '博士学位取得を考慮します。研究者として適切なキャリアを積むには博士学位は必須です。深い研究と学問的成果を通じて専門性を認められより多くの機会を得られます。',
        '論文作成能力を育てます。論文は研究者の核心力量です。論理的で明確な文章能力を育て国際学術誌に掲載可能なレベルの論文を作成できます。',
        '国際学会に出席します。国際学会に出席し最新研究動向を把握し他の研究者と交流し自分の研究を発表します。国際学会は視野を広げる重要な経験です。',
        '他の研究者と協力します。一人では全てができません。他の研究者と協力しシナジーを作れます。多様な視角と専門性を持つ研究者と共に研究するとより大きな成果を出せます。',
        '最新研究動向を把握します。研究は継続的に発展します。最新論文を読み新しい研究方法論と技術を学習し業界のトレンドを把握します。',
        '実験と研究に集中します。研究者は実験と研究に忠実です。体系的に研究を設計し正確に実行し客観的に結果を分析します。',
        '学術誌に論文を発表します。論文は研究者の成果を証明する手段です。持続的に論文を発表し研究成果を積みます。高いレベルの学術誌への掲載を目標にします。',
        'メンターを見つけ指導を受けます。経験豊富な先輩研究者の助言は非常に貴重です。研究方法とノウハウを学び自分の研究に適用し成長します。',
        '長期的研究計画を樹立します。研究者は長期的ビジョンが必要です。10年、20年後の目標を設定し段階的に計画を実行し長期的研究成果を作ります。'
      ], 'zh-CN': [
        '夯实学术基础。对研究者而言基础很重要。准确理解该领域的理论与概念，并掌握基础研究方法论。只有在稳固基础上才能开展创新研究。',
        '考虑获得博士学位。作为研究者要建立起色职业，博士学位是必需的。通过深度研究与学术成果获得专业认可并获得更多机会。',
        '培养论文写作能力。论文是研究者的核心能力。培养逻辑且清晰的写作能力，能写出达到国际期刊发表水平的论文。',
        '参加国际会议。参加国际会议以把握最新研究趋势，与其他研究者交流并发表自己的研究。国际会议是拓展视野的重要经验。',
        '与其他研究者协作。你无法独自完成所有工作。需能与其他研究者协作并产生协同效应。与拥有多元视角与专业度的研究者共同研究可产出更大成果。',
        '掌握最新研究趋势。研究持续发展。阅读最新论文，学习新研究方法论与技术，并把握行业趋势。',
        '专注于实验与研究。研究者需致力于实验与研究。系统设计研究、准确执行并客观分析结果。',
        '在学术期刊发表论文。论文是证明研究者成果的手段。持续发表论文并积累研究成果。以在高级别学术期刊发表为目标。',
        '寻找导师并获得指导。资深研究者的建议十分宝贵。学习他们的研究方法与诀窍，运用到自己的研究中并成长。',
        '制定长期研究计划。研究者需要长期愿景。设定10年、20年后目标，逐步执行计划并产出长期研究成果。'
      ], 'zh-TW': [
        '夯實學術基礎。對研究者而言基礎很重要。準確理解該領域的理論與概念，並掌握基礎研究方法論。只有在穩固基礎上才能開展創新研究。',
        '考慮獲得博士學位。作為研究者要建立起色職業，博士學位是必需的。通過深度研究與學術成果獲得專業認可並獲得更多機會。',
        '培養論文寫作能力。論文是研究者的核心能力。培養邏輯且清晰的寫作能力，能寫出達到國際期刊發表水平的論文。',
        '參加國際會議。參加國際會議以把握最新研究趨勢，與其他研究者交流並發表自己的研究。國際會議是拓展視野的重要經驗。',
        '與其他研究者協作。你無法獨自完成所有工作。需能與其他研究者協作並產生協同效應。與擁有多元視角與專業度的研究者共同研究可產出更大成果。',
        '掌握最新研究趨勢。研究持續發展。閱讀最新論文，學習新研究方法論與技術，並把握行業趨勢。',
        '專注於實驗與研究。研究者需致力於實驗與研究。系統設計研究、準確執行並客觀分析結果。',
        '在學術期刊發表論文。論文是證明研究者成果的手段。持續發表論文並積累研究成果。以在高級別學術期刊發表為目標。',
        '尋找導師並獲得指導。資深研究者的建議十分寶貴。學習他們的研究方法與訣竅，運用到自己的研究中並成長。',
        '制定長期研究計劃。研究者需要長期願景。設定10年、20年後目標，逐步執行計劃並產出長期研究成果。'
      ], vi: [
        'Xây dựng nền tảng học thuật vững chắc. Cơ bản là rất quan trọng đối với các nhà nghiên cứu. Hiểu chính xác các lý thuyết và khái niệm trong lĩnh vực của bạn và làm chủ các phương pháp nghiên cứu cơ bản. Chỉ có với nền tảng vững chắc, bạn mới có thể tiến hành nghiên cứu sáng tạo.',
        'Cân nhắc việc lấy bằng tiến sĩ. Để xây dựng một sự nghiệp đúng đắn như một nhà nghiên cứu, bằng tiến sĩ là điều cần thiết. Đạt được nghiên cứu sâu và thành tích học thuật để nhận được sự công nhận chuyên môn và nhiều cơ hội hơn.',
        'Xây dựng kỹ năng viết bài báo. Các bài báo là năng lực cốt lõi của một nhà nghiên cứu. Phát triển khả năng viết logic và rõ ràng và có thể viết các bài báo ở mức độ có thể được xuất bản trên các tạp chí quốc tế.',
        'Tham dự các hội nghị quốc tế. Tham dự các hội nghị quốc tế để hiểu xu hướng nghiên cứu mới nhất, kết nối với các nhà nghiên cứu khác và trình bày nghiên cứu của chính bạn. Các hội nghị quốc tế là kinh nghiệm quan trọng mở rộng tầm nhìn của bạn.',
        'Hợp tác với các nhà nghiên cứu khác. Bạn không thể làm mọi thứ một mình. Bạn nên có thể hợp tác với các nhà nghiên cứu khác và tạo ra sự hợp tác. Nghiên cứu với các nhà nghiên cứu có quan điểm và chuyên môn đa dạng có thể mang lại kết quả lớn hơn.',
        'Cập nhật các xu hướng nghiên cứu mới nhất. Nghiên cứu tiếp tục tiến bộ. Đọc các bài báo mới nhất, tìm hiểu các phương pháp nghiên cứu và công nghệ mới, và hiểu xu hướng ngành.',
        'Tập trung vào thí nghiệm và nghiên cứu. Các nhà nghiên cứu nên cam kết với thí nghiệm và nghiên cứu. Thiết kế nghiên cứu một cách có hệ thống, thực hiện chính xác và phân tích kết quả một cách khách quan.',
        'Xuất bản các bài báo trên các tạp chí học thuật. Các bài báo là phương tiện để chứng minh thành tích của một nhà nghiên cứu. Tiếp tục xuất bản các bài báo và xây dựng thành tích nghiên cứu. Nhắm đến việc xuất bản trên các tạp chí học thuật cấp cao.',
        'Tìm một cố vấn và nhận hướng dẫn. Lời khuyên của các nhà nghiên cứu cao cấp có kinh nghiệm rất có giá trị. Học các phương pháp nghiên cứu và kiến thức của họ, áp dụng chúng vào nghiên cứu của bạn và phát triển.',
        'Thiết lập kế hoạch nghiên cứu dài hạn. Các nhà nghiên cứu cần tầm nhìn dài hạn. Đặt mục tiêu cho 10 và 20 năm sau, thực hiện kế hoạch từng bước và tạo ra thành tích nghiên cứu dài hạn.'
      ], id: [
        'Bangun fondasi akademis yang solid. Dasar sangat penting bagi para peneliti. Pahami secara akurat teori dan konsep dalam bidang Anda dan kuasai metodologi penelitian dasar. Hanya dengan fondasi yang solid Anda dapat melakukan penelitian inovatif.',
        'Pertimbangkan untuk mendapatkan gelar doktor. Untuk membangun karier yang tepat sebagai peneliti, gelar doktor sangat penting. Raih penelitian mendalam dan pencapaian akademis untuk menerima pengakuan profesional dan lebih banyak peluang.',
        'Bangun keterampilan penulisan makalah. Makalah adalah kompetensi inti seorang peneliti. Kembangkan kemampuan menulis yang logis dan jelas dan dapat menulis makalah pada tingkat yang dapat diterbitkan dalam jurnal internasional.',
        'Hadiri konferensi internasional. Hadiri konferensi internasional untuk memahami tren penelitian terbaru, terhubung dengan peneliti lain, dan mempresentasikan penelitian Anda sendiri. Konferensi internasional adalah pengalaman penting yang memperluas wawasan Anda.',
        'Berkolaborasi dengan peneliti lain. Anda tidak dapat melakukan segalanya sendiri. Anda harus dapat berkolaborasi dengan peneliti lain dan menciptakan sinergi. Meneliti dengan peneliti yang memiliki perspektif dan keahlian beragam dapat menghasilkan hasil yang lebih besar.',
        'Ikuti tren penelitian terbaru. Penelitian terus maju. Baca makalah terbaru, pelajari metodologi dan teknologi penelitian baru, dan pahami tren industri.',
        'Fokus pada eksperimen dan penelitian. Peneliti harus berkomitmen pada eksperimen dan penelitian. Rancang penelitian secara sistematis, lakukan dengan akurat, dan analisis hasil secara objektif.',
        'Terbitkan makalah di jurnal akademis. Makalah adalah sarana untuk membuktikan pencapaian seorang peneliti. Terus terbitkan makalah dan bangun pencapaian penelitian. Tuju publikasi di jurnal akademis tingkat tinggi.',
        'Temukan mentor dan terima bimbingan. Nasihat peneliti senior berpengalaman sangat berharga. Pelajari metode dan pengetahuan penelitian mereka, terapkan pada penelitian Anda, dan tumbuh.',
        'Bentuk rencana penelitian jangka panjang. Peneliti membutuhkan visi jangka panjang. Tetapkan tujuan untuk 10 dan 20 tahun ke depan, jalankan rencana langkah demi langkah, dan ciptakan pencapaian penelitian jangka panjang.'
      ]
    },
    fortune: {
      success: { 
        ko: [
          '연구 분야에서 뛰어난 성과를 낼 수 있습니다. 당신의 탐구 정신과 분석 능력은 연구 분야에서 뛰어난 성과를 낼 수 있게 해줍니다. 깊이 있는 연구와 혁신적인 발견으로 학계에 기여하며, 명성을 얻을 수 있습니다.',
          '학계에서 인정받을 수 있습니다. 당신의 학문적 성과와 연구 능력은 학계에서 인정받을 수 있습니다. 국내외 학회에서 발표하고 논문을 게재하며, 학계에서 중요한 위치를 차지할 수 있습니다.',
          '논문으로 명성을 얻을 수 있습니다. 당신의 논문은 많은 인용을 받고 학계에 영향을 미칠 수 있습니다. 뛰어난 논문으로 업계에서 인정받으며, 당신의 명성은 더욱 높아집니다.',
          '혁신적인 발견을 할 수 있습니다. 당신의 창의적 사고와 끊임없는 탐구는 혁신적인 발견을 만들어낼 수 있습니다. 이러한 발견은 과학 발전에 기여하며, 인류에게 도움이 됩니다.',
          '교육자로도 성공할 수 있습니다. 당신의 지식과 경험은 많은 학생들에게 큰 도움이 됩니다. 교수나 교육자로서 후배들을 양성하며, 교육 분야에서도 뛰어난 성과를 낼 수 있습니다.'
        ],
        en: [
          'You can achieve excellent results in the research field. Your spirit of inquiry and analytical abilities enable you to achieve excellent results in the research field. Contribute to the academic world through deep research and innovative discoveries and gain fame.',
          'You can be recognized in academia. Your academic achievements and research abilities can be recognized in academia. Present at domestic and international conferences, publish papers, and take important positions in academia.',
          'You can gain fame through papers. Your papers can receive many citations and influence academia. Be recognized in the industry with excellent papers, and your reputation rises further.',
          'You can make innovative discoveries. Your creative thinking and endless inquiry can produce innovative discoveries. Such discoveries contribute to scientific advancement and help humanity.',
          'You can also succeed as an educator. Your knowledge and experience greatly help many students. Nurture juniors as a professor or educator and achieve excellent results in the education field as well.'
        ], ja: [
          '研究分野で優れた成果を出せます。探究精神と分析能力は研究分野で優れた成果を出させます。深い研究と革新的発見で学界に貢献し名声を得られます。',
          '学界で認められます。学問的成果と研究能力は学界で認められます。国内外学会で発表し論文を掲載し学界で重要な位置を占められます。',
          '論文で名声を得られます。論文は多くの引用を受け学界に影響します。優れた論文で業界で認められ名声はさらに高まります。',
          '革新的発見ができます。創造的思考と絶え間ない探究は革新的発見を作れます。これらの発見は科学発展に貢献し人類に役立ちます。',
          '教育者としても成功できます。知識と経験は多くの学生に大いに助けます。教授や教育者として後輩を育成し教育分野でも優れた成果を出せます。'
        ], 'zh-CN': [
          '你可在研究领域取得出色成果。你的探索精神与分析能力使你在研究领域取得出色成果。通过深度研究与创新发现为学术界贡献力量并获得声誉。',
          '你可获得学术界认可。你的学术成果与研究能力获得学术界认可。在国内外会议发表并在期刊发布论文，在学术界占据重要位置。',
          '你可通过论文获得声誉。你的论文获得大量引用并影响学术界。以出色论文在行业中受认可，你的声誉会进一步提升。',
          '你能做出创新性发现。你的创造性思维与持续探索可产生创新性发现。这些发现促进科学发展并为人类带来益处。',
          '你也可作为教育者取得成功。你的知识与经验为众多学生提供很大帮助。作为教授或教育者培养后辈，并在教育领域取得出色成果。'
        ], 'zh-TW': [
          '你可見在研究領域取得出色成果。你的探索精神與分析能力使你在研究領域取得出色成果。透過深度研究與創新發現為學術界貢獻力量並獲得聲譽。',
          '你可獲得學術界認可。你的學術成果與研究能力獲得學術界認可。在國內外會議發表並在期刊發佈論文，在學術界佔據重要位置。',
          '你可通過論文獲得聲譽。你的論文獲得大量引用並影響學術界。以出色論文在行業中受認可，你的聲譽會進一步提升。',
          '你能做出創新性發現。你的創造性思維與持續探索可產生創新性發現。這些發現促進科學發展並為人類帶來益處。',
          '你也可作為教育者取得成功。你的知識與經驗為眾多學生提供很大幫助。作為教授或教育者培養後輩，並在教育領域取得出色成果。'
        ], vi: [
          'Bạn có thể đạt được kết quả xuất sắc trong lĩnh vực nghiên cứu. Tinh thần tìm hiểu và khả năng phân tích của bạn cho phép bạn đạt được kết quả xuất sắc trong lĩnh vực nghiên cứu. Đóng góp cho thế giới học thuật thông qua nghiên cứu sâu và khám phá sáng tạo và đạt được danh tiếng.',
          'Bạn có thể được công nhận trong giới học thuật. Thành tích học thuật và khả năng nghiên cứu của bạn có thể được công nhận trong giới học thuật. Trình bày tại các hội nghị trong nước và quốc tế, xuất bản các bài báo và có vị trí quan trọng trong giới học thuật.',
          'Bạn có thể đạt được danh tiếng thông qua các bài báo. Các bài báo của bạn có thể nhận được nhiều trích dẫn và ảnh hưởng đến giới học thuật. Được công nhận trong ngành với các bài báo xuất sắc, và danh tiếng của bạn tăng thêm.',
          'Bạn có thể tạo ra các khám phá sáng tạo. Suy nghĩ sáng tạo và tìm hiểu không ngừng của bạn có thể tạo ra các khám phá sáng tạo. Các khám phá như vậy góp phần vào sự tiến bộ khoa học và giúp nhân loại.',
          'Bạn cũng có thể thành công như một nhà giáo dục. Kiến thức và kinh nghiệm của bạn giúp đỡ nhiều học sinh rất nhiều. Nuôi dưỡng thế hệ trẻ như một giáo sư hoặc nhà giáo dục và đạt được kết quả xuất sắc trong lĩnh vực giáo dục.'
        ], id: [
          'Anda dapat mencapai hasil yang luar biasa di bidang penelitian. Semangat penyelidikan dan kemampuan analitis Anda memungkinkan Anda mencapai hasil yang luar biasa di bidang penelitian. Berkontribusi pada dunia akademis melalui penelitian mendalam dan penemuan inovatif dan memperoleh ketenaran.',
          'Anda dapat diakui dalam dunia akademis. Pencapaian akademis dan kemampuan penelitian Anda dapat diakui dalam dunia akademis. Presentasikan di konferensi domestik dan internasional, terbitkan makalah, dan ambil posisi penting dalam dunia akademis.',
          'Anda dapat memperoleh ketenaran melalui makalah. Makalah Anda dapat menerima banyak kutipan dan mempengaruhi dunia akademis. Diakui dalam industri dengan makalah yang luar biasa, dan reputasi Anda meningkat lebih lanjut.',
          'Anda dapat membuat penemuan inovatif. Pemikiran kreatif dan penyelidikan yang tiada henti Anda dapat menghasilkan penemuan inovatif. Penemuan semacam itu berkontribusi pada kemajuan ilmiah dan membantu umat manusia.',
          'Anda juga dapat berhasil sebagai pendidik. Pengetahuan dan pengalaman Anda sangat membantu banyak siswa. Membina junior sebagai profesor atau pendidik dan mencapai hasil yang luar biasa di bidang pendidikan juga.'
        ]
      },
      hidden: { 
        ko: [
          '세계적인 연구자가 될 가능성이 있습니다. 당신의 연구 능력과 학문적 성취는 세계적인 수준까지 발전할 수 있습니다. 국제 학회에서 인정받고, 글로벌 연구 프로젝트에 참여하며, 세계적인 연구자가 될 수 있습니다.',
          '노벨상 수상도 기대할 수 있습니다. 당신의 혁신적인 연구와 발견은 노벨상 수상까지 이어질 수 있습니다. 이러한 영예는 당신에게만이 아니라 인류 전체에게 큰 기여를 함을 의미합니다.',
          '학계의 권위자가 될 수 있습니다. 당신의 전문성과 성과는 학계에서 권위자로 인정받을 수 있게 해줍니다. 많은 연구자들이 당신의 논문을 참고하고, 당신은 학계의 리더가 됩니다.',
          '후세에 이름을 남길 수 있습니다. 당신의 연구 성과는 학술사에 남게 됩니다. 미래의 연구자들이 당신의 연구를 바탕으로 더 발전시켜가며, 당신의 이름은 학계 역사에 영원히 남습니다.',
          '인류에 기여하는 연구를 할 수 있습니다. 당신의 연구는 단순히 학문적 성과만이 아닙니다. 당신의 발견과 연구는 인류의 삶을 개선하고 발전시키는데 기여할 수 있습니다.'
        ],
        en: [
          'You have the potential to become a world-class researcher. Your research abilities and academic achievements can develop to a world-class level. Be recognized at international conferences, participate in global research projects, and become a world-class researcher.',
          'You can expect to win the Nobel Prize. Your innovative research and discoveries can lead to winning the Nobel Prize. Such honor means great contribution not only to you but to all of humanity.',
          'You can become an authority in academia. Your expertise and achievements enable you to be recognized as an authority in academia. Many researchers reference your papers, and you become a leader in academia.',
          'You can leave your name for posterity. Your research achievements will remain in academic history. Future researchers will build upon your research and further develop it, and your name remains forever in academic history.',
          'You can conduct research that contributes to humanity. Your research is not merely academic achievement. Your discoveries and research can contribute to improving and advancing human life.'
        ], ja: [
          '世界的な研究者になる可能性があります。研究能力と学問的達成は世界的レベルまで発展できます。国際学会で認められグローバル研究プロジェクトに参加し世界的な研究者になれます。',
          'ノーベル賞受賞も期待できます。革新的な研究と発見はノーベル賞受賞までつながります。このような名誉はあなただけでなく人類全体に大きな貢献を意味します。',
          '学界の権威者になれます。専門性と成果は学界で権威者として認められます。多くの研究者が論文を参考にしあなたは学界のリーダーになります。',
          '後世に名前を残せます。研究成果は学術史に残ります。未来の研究者が研究を基にさらに発展させあなたの名前は学界歴史に永遠に残ります。',
          '人類に貢献する研究ができます。研究は単純に学問的成果だけではありません。発見と研究は人類の生活を改善し発展させることに貢献できます。'
        ], 'zh-CN': [
          '你有可能成为世界级研究者。你的研究能力与学术成就可发展到世界级水平。在国际会议获得认可，参与全球研究项目，成为世界级研究者。',
          '你有望获得诺贝尔奖。你的创新研究与发现有望走向诺贝尔奖。这一荣誉不仅对你也是对全人类的贡献。',
          '你能成为学术界权威。你的专业度与成就使你在学术界被认可为权威。许多研究者会参考你的论文，你成为学术界的引领者。',
          '你能在后世留名。你的研究成果将留在学术史中。未来的研究者会基于你的研究继续推进，你的名字将永久留在学术史。',
          '你能从事对人类有贡献的研究。你的研究不仅只有学术成果。你的发现与研究可对改善与推进人类生活做出贡献。'
        ], 'zh-TW': [
          '你有可能成為世界級研究者。你的研究能力與學術成就可發展到世界級水平。在國際會議獲得認可，參與全球研究項目，成為世界級研究者。',
          '你有望獲得諾貝爾獎。你的創新研究與發現有望走向諾貝爾獎。這一榮譽不僅對你也是對全人類的貢獻。',
          '你能成為學術界權威。你的專業度與成就使你在學術界被認可為權威。許多研究者會參考你的論文，你成為學術界的引領者。',
          '你能在後世留名。你的研究成果將留在學術史中。未來的研究者會基於你的研究繼續推進，你的名字將永久留在學術史。',
          '你能從事對人類有貢獻的研究。你的研究不僅只有學術成果。你的發現與研究可對改善與推進人類生活做出貢獻。'
        ], vi: [
          'Bạn có tiềm năng trở thành một nhà nghiên cứu đẳng cấp thế giới. Khả năng nghiên cứu và thành tựu học thuật của bạn có thể phát triển đến cấp độ đẳng cấp thế giới. Được công nhận tại các hội nghị quốc tế, tham gia vào các dự án nghiên cứu toàn cầu và trở thành một nhà nghiên cứu đẳng cấp thế giới.',
          'Bạn có thể mong đợi giành giải thưởng Nobel. Nghiên cứu sáng tạo và khám phá của bạn có thể dẫn đến giành giải thưởng Nobel. Vinh dự như vậy có nghĩa là đóng góp lớn không chỉ cho bạn mà cho toàn bộ nhân loại.',
          'Bạn có thể trở thành một cơ quan trong giới học thuật. Chuyên môn và thành tựu của bạn cho phép bạn được công nhận như một cơ quan trong giới học thuật. Nhiều nhà nghiên cứu tham khảo các bài báo của bạn, và bạn trở thành một nhà lãnh đạo trong giới học thuật.',
          'Bạn có thể để lại tên của mình cho hậu thế. Thành tựu nghiên cứu của bạn sẽ vẫn còn trong lịch sử học thuật. Các nhà nghiên cứu tương lai sẽ xây dựng dựa trên nghiên cứu của bạn và phát triển thêm, và tên của bạn vẫn còn mãi trong lịch sử học thuật.',
          'Bạn có thể tiến hành nghiên cứu đóng góp cho nhân loại. Nghiên cứu của bạn không chỉ đơn giản là thành tựu học thuật. Khám phá và nghiên cứu của bạn có thể đóng góp vào việc cải thiện và phát triển cuộc sống con người.'
        ], id: [
          'Anda memiliki potensi untuk menjadi peneliti kelas dunia. Kemampuan penelitian dan pencapaian akademis Anda dapat berkembang ke tingkat kelas dunia. Diakui di konferensi internasional, berpartisipasi dalam proyek penelitian global, dan menjadi peneliti kelas dunia.',
          'Anda dapat berharap memenangkan Hadiah Nobel. Penelitian inovatif dan penemuan Anda dapat mengarah pada memenangkan Hadiah Nobel. Kehormatan seperti itu berarti kontribusi besar tidak hanya untuk Anda tetapi untuk seluruh umat manusia.',
          'Anda dapat menjadi otoritas dalam dunia akademis. Keahlian dan pencapaian Anda memungkinkan Anda diakui sebagai otoritas dalam dunia akademis. Banyak peneliti merujuk pada makalah Anda, dan Anda menjadi pemimpin dalam dunia akademis.',
          'Anda dapat meninggalkan nama untuk generasi mendatang. Pencapaian penelitian Anda akan tetap dalam sejarah akademis. Peneliti masa depan akan membangun atas penelitian Anda dan mengembangkannya lebih lanjut, dan nama Anda tetap selamanya dalam sejarah akademis.',
          'Anda dapat melakukan penelitian yang berkontribusi pada umat manusia. Penelitian Anda bukan hanya pencapaian akademis. Penemuan dan penelitian Anda dapat berkontribusi pada peningkatan dan kemajuan kehidupan manusia.'
        ]
      }
    }
  },
  {
    id: 10,
    title: { ko: '전문가형', en: 'Specialist Type', ja: '専門家型', 'zh-CN': '专家型', 'zh-TW': '專家型', vi: 'Kiểu Chuyên Gia', id: 'Tipe Spesialis' },
    description: {
      ko: [
        '당신의 얼굴은 전문성과 신뢰성을 보여줍니다. 특정 분야에 대한 깊은 지식과 경험이 있다는 인상을 줍니다.',
        '자신감과 확신이 있는 얼굴입니다. 자신의 전문 분야에 대한 확고한 이해를 가지고 있습니다.',
        '정확성과 정밀성을 중시하는 성향이 보입니다. 완벽한 결과물을 만들어내는 데 집중합니다.',
        '안정적이고 신뢰할 수 있는 인상입니다. 전문 지식으로 사람들을 도울 수 있습니다.',
        '체계적이고 조직적인 접근 방식을 선호합니다. 업무를 단계별로 처리하는 능력이 뛰어납니다.',
        '지속적인 학습과 자기계발에 관심이 많습니다. 최신 지식을 습득하려고 노력합니다.',
        '신중하고 사려깊은 판단력이 있습니다. 급하게 결정하기보다는 신중하게 검토합니다.',
        '책임감이 강하고 신뢰성을 중시합니다. 약속한 일은 반드시 완수합니다.',
        '전문 자격과 인증에 대한 욕구가 있습니다. 객관적으로 인정받는 자격을 추구합니다.',
        '장기적인 경력 발전을 계획합니다. 한 분야에 몰입하여 전문성을 극대화하고 싶어 합니다.'
      ],
      en: [
        'Your face shows expertise and reliability. It gives the impression that you have deep knowledge and experience in a specific field.',
        'You have a confident and assured face. You have a firm understanding of your field of expertise.',
        'You show tendencies that value accuracy and precision. You focus on creating perfect results.',
        'You have a stable and reliable impression. You can help people with professional knowledge.',
        'You prefer systematic and organized approaches. You have excellent ability to handle work step by step.',
        'You have much interest in continuous learning and self-development. You strive to acquire the latest knowledge.',
        'You have careful and thoughtful judgment. You review carefully rather than deciding hastily.',
        'You have strong responsibility and value reliability. You definitely complete what you promise.',
        'You have desires for professional qualifications and certifications. You pursue qualifications that are objectively recognized.',
        'You plan long-term career development. You want to immerse yourself in one field and maximize expertise.'
      ], ja: [
        '専門性と信頼性を示します。特定分野に対する深い知識と経験がある印象を与えます。',
        '自信と確信がある顔です。自分の専門分野に対する確固な理解を持っています。',
        '正確性と精密性を重視する傾向が見られます。完璧な結果物を作り出すことに集中します。',
        '安定していて信頼できる印象です。専門知識で人々を助けることができます。',
        '体系的で組織的なアプローチ方式を好みます。業務を段階的に処理する能力が優れています。',
        '持続的な学習と自己開発に興味が多いです。最新知識を習得しようと努力します。',
        '慎重で思慮深い判断力があります。急いで決定するよりは慎重に検討します。',
        '責任感が強く信頼性を重視します。約束したことは必ず完了します。',
        '専門資格と認証への欲求があります。客観的に認められる資格を追求します。',
        '長期的キャリア発展を計画します。一つの分野に没頭し専門性を最大化したいと望みます。'
      ], 'zh-CN': [
        '你的面相呈现专业性与可靠性。它给人的印象是你在特定领域拥有深入知识与经验。',
        '你呈现自信与坚定的面相。你对所从事专业具有稳固理解。',
        '你呈现重视准确与精细的倾向。专注于产出完美结果。',
        '你有稳定且可信赖的印象。你能以专业知识帮助他人。',
        '你偏好系统化与组织化方法。你在逐步处理工作方面能力出色。',
        '你在持续学习与自我发展方面兴趣浓厚。努力获取最新知识。',
        '你具备谨慎且周密的判断力。倾向于仔细审查而非匆忙决定。',
        '你有强烈的责任感并重视可靠性。必定完成所承诺之事。',
        '你在专业资格与认证方面有诉求。追求获得客观认可的资格。',
        '你规划长期职业发展。你希望在某个领域深入投入并使专业性最大化。'
      ], 'zh-TW': [
        '你的面相呈現專業性與可靠性。它給人的印象是你在特定領域擁有深入知識與經驗。',
        '你呈現自信與堅定的面相。你對所從事專業具有穩固理解。',
        '你呈現重視準確與精細的傾向。專注於產出完美結果。',
        '你有穩定且可信賴的印象。你能以專業知識幫助他人。',
        '你偏好系統化與組織化方法。你在逐步處理工作方面能力出色。',
        '你在持續學習與自我發展方面興趣濃厚。努力獲取最新知識。',
        '你具備謹慎且周密的判斷力。傾向於仔細審查而非匆忙決定。',
        '你有強烈的責任感並重視可靠性。必定完成所承諾之事。',
        '你在專業資格與認證方面有訴求。追求獲得客觀認可的資格。',
        '你規劃長期職業發展。你希望在某個領域深入投入並使專業性最大化。'
      ], vi: [
        'Khuôn mặt của bạn thể hiện chuyên môn và độ tin cậy. Nó tạo ấn tượng rằng bạn có kiến thức sâu sắc và kinh nghiệm trong một lĩnh vực cụ thể.',
        'Bạn có một khuôn mặt tự tin và chắc chắn. Bạn có sự hiểu biết vững chắc về lĩnh vực chuyên môn của mình.',
        'Bạn thể hiện các xu hướng coi trọng độ chính xác và độ chính xác. Bạn tập trung vào việc tạo ra kết quả hoàn hảo.',
        'Bạn có ấn tượng ổn định và đáng tin cậy. Bạn có thể giúp đỡ mọi người bằng kiến thức chuyên nghiệp.',
        'Bạn thích các cách tiếp cận có hệ thống và tổ chức. Bạn có khả năng xuất sắc để xử lý công việc từng bước.',
        'Bạn có nhiều quan tâm đến việc học tập liên tục và tự phát triển. Bạn phấn đấu để thu nhận kiến thức mới nhất.',
        'Bạn có sự phán đoán cẩn thận và có suy nghĩ. Bạn xem xét cẩn thận hơn là quyết định một cách vội vàng.',
        'Bạn có trách nhiệm mạnh mẽ và coi trọng độ tin cậy. Bạn chắc chắn hoàn thành những gì bạn hứa.',
        'Bạn có mong muốn về các điều kiện và chứng nhận chuyên nghiệp. Bạn theo đuổi các điều kiện được công nhận một cách khách quan.',
        'Bạn lập kế hoạch phát triển sự nghiệp dài hạn. Bạn muốn đắm mình trong một lĩnh vực và tối đa hóa chuyên môn.'
      ], id: [
        'Wajah Anda menunjukkan keahlian dan keandalan. Ini memberi kesan bahwa Anda memiliki pengetahuan dan pengalaman mendalam di bidang tertentu.',
        'Anda memiliki wajah yang percaya diri dan meyakinkan. Anda memiliki pemahaman yang kuat tentang bidang keahlian Anda.',
        'Anda menunjukkan kecenderungan yang menghargai akurasi dan presisi. Anda fokus pada penciptaan hasil yang sempurna.',
        'Anda memiliki kesan yang stabil dan dapat diandalkan. Anda dapat membantu orang dengan pengetahuan profesional.',
        'Anda lebih suka pendekatan yang sistematis dan terorganisir. Anda memiliki kemampuan luar biasa untuk menangani pekerjaan langkah demi langkah.',
        'Anda memiliki banyak minat dalam pembelajaran berkelanjutan dan pengembangan diri. Anda berusaha memperoleh pengetahuan terbaru.',
        'Anda memiliki penilaian yang hati-hati dan bijaksana. Anda meninjau dengan hati-hati daripada memutuskan dengan tergesa-gesa.',
        'Anda memiliki tanggung jawab yang kuat dan menghargai keandalan. Anda pasti menyelesaikan apa yang Anda janjikan.',
        'Anda memiliki keinginan untuk kualifikasi dan sertifikasi profesional. Anda mengejar kualifikasi yang diakui secara objektif.',
        'Anda merencanakan pengembangan karier jangka panjang. Anda ingin membenamkan diri dalam satu bidang dan memaksimalkan keahlian.'
      ]
    },
    emoji: '💼',
    scoreRange: [0, 9],
    strengths: { 
      ko: ['전문성', '신뢰성', '자신감', '정확성', '정밀성', '체계성', '학습능력', '신중함', '책임감', '안정성'], 
      en: ['Expertise', 'Reliability', 'Confidence', 'Accuracy', 'Precision', 'Systematic', 'Learning', 'Prudence', 'Responsibility', 'Stability'], 
      ja: ['専門性', '信頼性', '自信', '正確性', '精密性', '体系性', '学習能力', '慎重さ', '責任感', '安定性'], 
      'zh-CN': ['专业性', '可靠性', '自信心', '准确性', '精密性', '系统性', '学习能力', '谨慎', '责任感', '稳定性'], 
      'zh-TW': ['專業性', '可靠性', '自信心', '準確性', '精密性', '系統性', '學習能力', '謹慎', '責任感', '穩定性'], 
      vi: ['Chuyên môn', 'Độ tin cậy', 'Tự tin', 'Độ chính xác', 'Độ chính xác', 'Hệ thống', 'Học tập', 'Thận trọng', 'Trách nhiệm', 'Ổn định'], 
      id: ['Keahlian', 'Keandalan', 'Kepercayaan Diri', 'Akurasi', 'Presisi', 'Sistematis', 'Pembelajaran', 'Kesederhanaan', 'Tanggung Jawab', 'Stabilitas'] 
    },
    recommendations: { 
      ko: ['의사', '변호사', '공인회계사', '세무사', '노무사', '변리사', '건축사', '기사', '약사', '전문직'], 
      en: ['Doctor', 'Lawyer', 'CPA', 'Tax Accountant', 'Labor Attorney', 'Patent Attorney', 'Architect', 'Engineer', 'Pharmacist', 'Professional'], 
      ja: ['医師', '弁護士', '公認会計士', '税理士', '社労士', '弁理士', '建築士', '技師', '薬剤師', '専門職'], 
      'zh-CN': ['医生', '律师', '注册会计师', '税务会计师', '劳动律师', '专利律师', '建筑师', '工程师', '药剂师', '专业人士'], 
      'zh-TW': ['醫生', '律師', '註冊會計師', '稅務會計師', '勞動律師', '專利律師', '建築師', '工程師', '藥劑師', '專業人士'], 
      vi: ['Bác sĩ', 'Luật sư', 'CPA', 'Kế toán thuế', 'Luật sư lao động', 'Luật sư bằng sáng chế', 'Kiến trúc sư', 'Kỹ sư', 'Dược sĩ', 'Chuyên nghiệp'], 
      id: ['Dokter', 'Pengacara', 'CPA', 'Akuntan Pajak', 'Pengacara Tenaga Kerja', 'Pengacara Paten', 'Arsitek', 'Insinyur', 'Apoteker', 'Profesional'] 
    },
    personality: { 
      ko: [
        '전문성에 대한 자부심이 있습니다.',
        '신뢰성을 최우선으로 생각합니다.',
        '자신감 있게 업무를 처리합니다.',
        '정확성을 중시합니다.',
        '정밀한 작업을 선호합니다.',
        '체계적으로 일을 처리합니다.',
        '지속적으로 학습합니다.',
        '신중하게 판단합니다.',
        '책임감이 강합니다.',
        '안정적인 경력을 추구합니다.'
      ],
      en: [
        'You have pride in your expertise.',
        'You prioritize reliability above all.',
        'You handle work with confidence.',
        'You value accuracy.',
        'You prefer precise work.',
        'You handle tasks systematically.',
        'You learn continuously.',
        'You judge carefully.',
        'You have strong responsibility.',
        'You pursue a stable career.'
      ], ja: [
        '専門性への誇りがあります。',
        '信頼性を最優先に考えます。',
        '自信を持って業務を処理します。',
        '正確性を重視します。',
        '精密な作業を好みます。',
        '体系的に仕事を処理します。',
        '継続的に学習します。',
        '慎重に判断します。',
        '責任感が強いです。',
        '安定したキャリアを追求します。'
      ], 'zh-CN': [
        '你对专业性抱有自豪。',
        '你将可靠性置于首位。',
        '你自信地处理工作。',
        '你重视准确性。',
        '你偏好精细工作。',
        '你系统化处理事务。',
        '你持续学习。',
        '你谨慎判断。',
        '你有强烈责任感。',
        '你追求稳定的职业。'
      ], 'zh-TW': [
        '你對專業性抱有自豪。',
        '你將可靠性置於首位。',
        '你自信地處理工作。',
        '你重視準確性。',
        '你偏好精細工作。',
        '你系統化處理事務。',
        '你持續學習。',
        '你謹慎判斷。',
        '你有強烈責任感。',
        '你追求穩定的職業。'
      ], vi: [
        'Bạn tự hào về chuyên môn của mình.',
        'Bạn ưu tiên độ tin cậy trên tất cả.',
        'Bạn xử lý công việc với sự tự tin.',
        'Bạn coi trọng độ chính xác.',
        'Bạn thích công việc chính xác.',
        'Bạn xử lý nhiệm vụ một cách có hệ thống.',
        'Bạn học liên tục.',
        'Bạn đánh giá cẩn thận.',
        'Bạn có trách nhiệm mạnh mẽ.',
        'Bạn theo đuổi một sự nghiệp ổn định.'
      ], id: [
        'Anda memiliki kebanggaan atas keahlian Anda.',
        'Anda memprioritaskan keandalan di atas segalanya.',
        'Anda menangani pekerjaan dengan percaya diri.',
        'Anda menghargai akurasi.',
        'Anda lebih suka pekerjaan yang presisi.',
        'Anda menangani tugas secara sistematis.',
        'Anda belajar secara terus-menerus.',
        'Anda menilai dengan hati-hati.',
        'Anda memiliki tanggung jawab yang kuat.',
        'Anda mengejar karier yang stabil.'
      ]
    },
    advice: { 
      ko: [
        '전문 자격증을 반드시 취득하세요. 전문직으로 활동하려면 해당 분야의 전문 자격증이 필수입니다. 공인회계사, 변호사, 의사 등 각 분야에 맞는 자격증을 취득하여 전문성을 인정받아야 합니다.',
        '지속적인 교육을 받으세요. 전문가는 계속 배워야 합니다. 법규, 규정, 트렌드가 계속 변하므로 지속적인 교육과 연수를 받으며 최신 지식을 습득해야 합니다. 평생 학습하는 자세가 필요합니다.',
        '실무 경험을 풍부하게 쌓으세요. 이론뿐만 아니라 실무 경험이 중요합니다. 다양한 사례를 경험하고, 복잡한 문제를 해결하며, 실전에서 전문성을 발전시켜야 합니다.',
        '전문가 네트워크를 구축하세요. 동료 전문가들과의 네트워크는 매우 중요합니다. 정보를 공유하고, 협력하며, 서로 발전할 수 있습니다. 업계 모임이나 협회에 가입하여 활동하세요.',
        '윤리와 철학을 중시하세요. 전문가는 윤리가 중요합니다. 고객의 이익을 최우선으로 하고, 정직하고 윤리적으로 업무를 처리해야 합니다. 윤리 없는 전문가는 신뢰를 잃게 됩니다.',
        '고객 신뢰를 최우선으로 하세요. 전문가에게 고객 신뢰는 생명입니다. 약속을 지키고, 정직하게 조언하며, 고객의 이익을 최우선으로 생각해야 합니다. 신뢰는 당신의 가장 큰 자산입니다.',
        '최신 법규와 트렌드를 파악하세요. 전문 분야의 법규와 규정은 계속 변합니다. 최신 정보를 파악하고, 업계 트렌드를 이해하며, 변화에 대비해야 합니다. 최신 정보는 전문가의 경쟁력입니다.',
        '전문 분야의 깊이를 키우세요. 전문가는 자신의 분야에 대해 깊은 지식을 가져야 합니다. 얕은 지식이 아니라 깊이 있는 전문성을 쌓아야 합니다. 전문성의 깊이가 당신의 가치를 결정합니다.',
        '장기적 경력 설계를 하세요. 전문가는 장기적인 관점에서 경력을 설계해야 합니다. 초기에는 넓은 경험을 쌓고, 중기에 전문 분야를 정하여 깊이를 키우고, 후기에 권위자로 성장하는 로드맵을 만들어야 합니다.',
        '평판 관리를 신중하게 하세요. 전문가의 평판은 매우 중요합니다. 한 번의 실수도 평판에 큰 영향을 미칠 수 있으므로 신중하게 행동해야 합니다. 평판은 시간이 지나면서 쌓이는 것이므로 꾸준히 관리해야 합니다.'
      ],
      en: [
        'Obtain specialized certifications and licenses. To succeed as a professional, you must first obtain recognized certifications and licenses. Earn qualifications in your field through formal training, and constantly update your certifications to maintain expertise.',
        'Build a professional network. Networks with fellow professionals are crucial. Share information, cooperate, and help each other develop. Join industry associations and actively participate.',
        'Emphasize ethics and philosophy. Ethics are critical for professionals. Prioritize customer interests and work honestly and ethically. Professionals without ethics lose trust.',
        'Prioritize customer trust above all. Trust is lifeblood for professionals. Keep promises, advise honestly, and prioritize customer interests. Trust is your greatest asset.',
        'Stay updated on latest regulations and trends. Regulations and rules in your field constantly change. Track the latest information, understand industry trends, and prepare for changes. Current information is a professional\'s competitive edge.',
        'Deepen your expertise. Professionals must have deep knowledge in their field. Build deep expertise, not shallow knowledge. The depth of your expertise determines your value.',
        'Plan your long-term career. Professionals should design careers with a long-term perspective. Early on, gain broad experience; mid-career, specialize and deepen; later, grow into an authority. Create this roadmap.',
        'Manage your reputation carefully. A professional\'s reputation is extremely important. One mistake can significantly impact reputation, so act carefully. Reputation builds over time, so manage it consistently.'
      ], ja: [
        '専門資格と免許を取得します。専門家として成功するにはまず認められた資格と免許を取得する必要があります。正式な訓練を通じて分野で資格を獲得し常に資格を更新して専門性を維持します。',
        '専門家ネットワークを構築します。同僚専門家とのネットワークは非常に重要です。情報を共有し協力し合い発展できます。業界の集会や協会に加入して活動します。',
        '倫理と哲学を重視します。専門家には倫理が重要です。顧客の利益を最優先にし正直で倫理的に業務を処理すべきです。倫理のない専門家は信頼を失います。',
        '顧客信頼を最優先にします。専門家に顧客信頼は生命です。約束を守り正直に助言し顧客の利益を最優先に考えます。信頼は最大の資産です。',
        '最新法規とトレンドを把握します。専門分野の法規と規定は継続的に変化します。最新情報を把握し業界トレンドを理解し変化に備えます。最新情報は専門家の競争力です。',
        '専門分野の深さを育てます。専門家は自分の分野について深い知識を持つべきです。浅い知識ではなく深い専門性を積みます。専門性の深さが価値を決定します。',
        '長期的キャリアを設計します。専門家は長期的な観点からキャリアを設計すべきです。初期には広い経験を積み中期に専門分野を定めて深め後期に権威者に成長するロードマップを作ります。',
        '評判管理を慎重にします。専門家の評判は非常に重要です。一度の失敗も評判に大きな影響を与えることがあるので慎重に行動すべきです。評判は時間が過ぎながら積まれるものなので着実に管理します。'
      ], 'zh-CN': [
        '获得专业认证与执照。作为专业人员，需先获得认可的认证与执照。通过正式培训获得资格，并持续更新以维持专业度。',
        '建立专业人士网络。与同行网络很重要。共享信息、协作并互相促进。加入行业组织并积极参与。',
        '重视伦理与理念。专业人员需把伦理放在首位。优先客户利益，诚实且伦理地处理业务。无伦理的专业人员会失去信任。',
        '将客户信任置于首位。对专业人员而言信任是根本。信守承诺、诚实建议并优先客户利益。信任是最重要的资产。',
        '把握最新法规与趋势。领域的法规与规定持续变化。追踪最新信息、理解行业趋势并为变化做准备。最新信息是专业人员的竞争力。',
        '深化专业深度。专业人员需在领域拥有深入知识。积累深度专业而非表面知识。专业深度决定你的价值。',
        '进行长期职业规划。专业人员应从长期角度规划职业。初期积累广泛经验，中期选定领域并深化，后期发展为权威。制定此路线图。',
        '谨慎管理声誉。专业人员的声誉非常重要。一次失误可能显著影响声誉，因此需谨慎行事。声誉随时间积累，需持续管理。'
      ], 'zh-TW': [
        '獲得專業認證與執照。作為專業人員，需先獲得認可的認證與執照。透過正式培訓獲得資格，並持續更新以維持專業度。',
        '建立專業人士網絡。與同行網絡很重要。共享信息、協作並互相促進。加入行業組織並積極參與。',
        '重視倫理與理念。專業人員需把倫理放在首位。優先客戶利益，誠實且倫理地處理業務。無倫理的專業人員會失去信任。',
        '將客戶信任置於首位。對專業人員而言信任是根本。信守承諾、誠實建議並優先客戶利益。信任是最重要的資產。',
        '把握最新法規與趨勢。領域的法規與規定持續變化。追蹤最新信息、理解行業趨勢並為變化做準備。最新信息是專業人員的競爭力。',
        '深化專業深度。專業人員需在領域擁有深入知識。積累深度專業而非表面知識。專業深度決定你的價值。',
        '進行長期職業規劃。專業人員應從長期角度規劃職業。初期積累廣泛經驗，中期選定領域並深化，後期發展為權威。制定此路線圖。',
        '謹慎管理聲譽。專業人員的聲譽非常重要。一次失誤可能顯著影響聲譽，因此需謹慎行事。聲譽隨時間積累，需持續管理。'
      ], vi: [
        'Lấy chứng nhận và giấy phép chuyên môn. Để thành công như một chuyên gia, bạn phải trước tiên lấy các chứng nhận và giấy phép được công nhận. Kiếm được các điều kiện trong lĩnh vực của bạn thông qua đào tạo chính thức, và liên tục cập nhật các chứng nhận của bạn để duy trì chuyên môn.',
        'Xây dựng một mạng lưới chuyên nghiệp. Mạng lưới với các chuyên gia đồng nghiệp là rất quan trọng. Chia sẻ thông tin, hợp tác và giúp nhau phát triển. Tham gia các hiệp hội ngành và tham gia tích cực.',
        'Nhấn mạnh đạo đức và triết lý. Đạo đức là quan trọng đối với chuyên gia. Ưu tiên lợi ích của khách hàng và làm việc trung thực và đạo đức. Các chuyên gia không có đạo đức mất niềm tin.',
        'Ưu tiên niềm tin của khách hàng trên hết. Niềm tin là sinh mệnh đối với chuyên gia. Giữ lời hứa, tư vấn trung thực và ưu tiên lợi ích của khách hàng. Niềm tin là tài sản lớn nhất của bạn.',
        'Cập nhật các quy định và xu hướng mới nhất. Quy định và quy tắc trong lĩnh vực của bạn liên tục thay đổi. Theo dõi thông tin mới nhất, hiểu xu hướng ngành và chuẩn bị cho thay đổi. Thông tin hiện tại là lợi thế cạnh tranh của một chuyên gia.',
        'Sâu sắc chuyên môn của bạn. Chuyên gia phải có kiến thức sâu sắc trong lĩnh vực của họ. Xây dựng chuyên môn sâu sắc, không phải kiến thức nông cạn. Độ sâu của chuyên môn của bạn quyết định giá trị của bạn.',
        'Lập kế hoạch sự nghiệp dài hạn của bạn. Chuyên gia nên thiết kế sự nghiệp với quan điểm dài hạn. Ban đầu, có kinh nghiệm rộng; giữa sự nghiệp, chuyên môn hóa và sâu sắc; sau đó, phát triển thành một cơ quan. Tạo lộ trình này.',
        'Quản lý danh tiếng của bạn một cách cẩn thận. Danh tiếng của một chuyên gia là cực kỳ quan trọng. Một sai lầm có thể ảnh hưởng đáng kể đến danh tiếng, vì vậy hãy hành động cẩn thận. Danh tiếng xây dựng theo thời gian, vì vậy quản lý nó một cách nhất quán.'
      ], id: [
        'Dapatkan sertifikasi dan lisensi khusus. Untuk berhasil sebagai profesional, Anda harus terlebih dahulu mendapatkan sertifikasi dan lisensi yang diakui. Dapatkan kualifikasi di bidang Anda melalui pelatihan formal, dan terus perbarui sertifikasi Anda untuk mempertahankan keahlian.',
        'Bangun jaringan profesional. Jaringan dengan profesional sesama sangat penting. Bagikan informasi, bekerja sama, dan saling membantu berkembang. Bergabunglah dengan asosiasi industri dan berpartisipasi secara aktif.',
        'Tekankan etika dan filosofi. Etika penting bagi para profesional. Prioritaskan kepentingan pelanggan dan bekerja dengan jujur dan etis. Profesional tanpa etika kehilangan kepercayaan.',
        'Prioritaskan kepercayaan pelanggan di atas segalanya. Kepercayaan adalah nyawa bagi para profesional. Tepati janji, nasihatkan dengan jujur, dan prioritaskan kepentingan pelanggan. Kepercayaan adalah aset terbesar Anda.',
        'Tetap diperbarui tentang peraturan dan tren terbaru. Peraturan dan aturan di bidang Anda terus berubah. Lacak informasi terbaru, pahami tren industri, dan bersiaplah untuk perubahan. Informasi terkini adalah keunggulan kompetitif seorang profesional.',
        'Perdalam keahlian Anda. Profesional harus memiliki pengetahuan mendalam di bidang mereka. Bangun keahlian yang mendalam, bukan pengetahuan dangkal. Kedalaman keahlian Anda menentukan nilai Anda.',
        'Rencanakan karier jangka panjang Anda. Profesional harus merancang karier dengan perspektif jangka panjang. Awalnya, dapatkan pengalaman luas; pertengahan karier, spesialisasi dan pendalaman; kemudian, berkembang menjadi otoritas. Buat roadmap ini.',
        'Kelola reputasi Anda dengan hati-hati. Reputasi seorang profesional sangat penting. Satu kesalahan dapat berdampak signifikan pada reputasi, jadi bertindaklah dengan hati-hati. Reputasi berkembang dari waktu ke waktu, jadi kelola secara konsisten.'
      ]
    },
    fortune: {
      success: { 
        ko: [
          '고소득 전문가가 될 가능성이 높습니다. 당신의 전문성과 신뢰성은 시장에서 높은 가치를 가지며, 이는 높은 급여와 보수로 이어집니다. 전문가로서 인정받을수록 더 나은 조건을 제시받을 수 있습니다.',
          '업계에서 인정받는 전문가가 됩니다. 당신의 깊은 전문성과 뛰어난 업무 능력은 업계에서 인정받을 수 있게 해줍니다. 전문 분야의 권위자로 성장하며, 많은 사람들이 당신의 의견을 구하게 됩니다.',
          '고객 신뢰를 받는 전문가가 됩니다. 당신의 정직하고 신뢰할 수 있는 태도는 고객들에게 큰 신뢰를 줍니다. 고객들은 당신을 추천하고, 당신에게 다시 찾아오며, 당신의 평판은 더욱 좋아집니다.',
          '안정적이고 존경받는 직업인이 됩니다. 전문가로서의 경력은 매우 안정적이며, 사회에서도 존경받는 직업입니다. 전문성과 윤리를 갖춘 전문가는 어느 시대에도 필요하며 존경받습니다.',
          '장기적으로 성공하는 커리어를 쌓습니다. 당신의 전문성은 시간이 지날수록 더욱 깊어지고 넓어집니다. 장기적인 경력을 쌓으며 안정적이고 성공적인 전문가가 되어갈 수 있습니다.'
        ],
        en: [
          'You have a high likelihood of becoming a high-income professional. Your expertise and reliability have high value in the market, leading to high salaries and compensation. As you gain recognition as a professional, you can receive better terms.',
          'You become a professional recognized by the industry. Your deep expertise and excellent work ability enable recognition by the industry. You grow into an authority in your field, and many people seek your opinions.',
          'You become a professional trusted by customers. Your honest and reliable attitude gives great trust to customers. Customers recommend you, return to you, and your reputation improves further.',
          'You become a stable and respected professional. A career as a professional is very stable and is a respected profession in society. Professionals with expertise and ethics are needed and respected in any era.',
          'You build a successful career long-term. Your expertise deepens and broadens over time. You can become a stable and successful professional while building long-term experience.'
        ], ja: [
          '高収入専門家になる可能性が高いです。専門性と信頼性は市場で高い価値を持ち高い給与と報酬につながります。専門家として認められるほどより良い条件を提示されます。',
          '業界で認められる専門家になります。深い専門性と優れた業務能力は業界で認められます。専門分野の権威者に成長し多くの人が意見を求めます。',
          '顧客信頼を受ける専門家になります。正直で信頼できる態度は顧客に大きな信頼を与えます。顧客はあなたを推薦し再度訪れ評判はさらに良くなります。',
          '安定した尊敬される職業人になります。専門家としてのキャリアは非常に安定し社会でも尊敬される職業です。専門性と倫理を備えた専門家はどの時代にも必要で尊敬されます。',
          '長期的に成功するキャリアを積みます。専門性は時間が過ぎるほどさらに深まり広がります。長期的経験を積みながら安定した成功専門家になれます。'
        ], 'zh-CN': [
          '你成为高收入专业人员的可能性很高。你的专业度与可靠性在市场中价值高，带来更高薪资与报酬。作为专业人员越受认可，越能获得更优待遇。',
          '你成为行业认可的专业人员。你的深度专业与出色工作能力让你获得行业认可。成长为领域权威，许多人会寻求你的意见。',
          '你成为受客户信任的专业人员。你诚实可靠的态度给客户带去信任。客户会推荐你、再次选择你，你的声誉也会更好。',
          '你成为稳定且受尊敬的专业人士。专业职业非常稳定，是社会中的受尊重职业。具备专业度与伦理的专业人员在任何一个时代都被需要并受尊敬。',
          '你积累长期成功的职业。你的专业度随时间加深与拓宽。在积累长期经验的过程中成为稳定而成功的专业人员。'
        ], 'zh-TW': [
          '你成為高收入專業人員的可能性很高。你的專業度與可靠性在市場中價值高，帶來更高薪資與報酬。作為專業人員越受認可，越能獲得更優待遇。',
          '你成為行業認可的專業人員。你的深度專業與出色工作能力讓你獲得行業認可。成長為領域權威，許多人會尋求你的意見。',
          '你成為受客戶信任的專業人員。你誠實可靠的態度給客戶帶去信任。客戶會推薦你、再次選擇你，你的聲譽也會更好。',
          '你成為穩定且受尊敬的專業人士。專業職業非常穩定，是社會中的受尊重職業。具備專業度與倫理的專業人員在任何一個時代都被需要並受尊敬。',
          '你積累長期成功的職業。你的專業度隨時間加深與拓寬。在積累長期經驗的過程中成為穩定而成功的專業人員。'
        ], vi: [
          'Bạn có khả năng cao trở thành chuyên gia thu nhập cao. Chuyên môn và độ tin cậy của bạn có giá trị cao trong thị trường, dẫn đến mức lương và mức bồi thường cao. Khi bạn được công nhận như một chuyên gia, bạn có thể nhận được các điều kiện tốt hơn.',
          'Bạn trở thành một chuyên gia được ngành công nhận. Chuyên môn sâu và khả năng làm việc xuất sắc của bạn cho phép được ngành công nhận. Bạn phát triển thành một cơ quan trong lĩnh vực của mình, và nhiều người tìm kiếm ý kiến của bạn.',
          'Bạn trở thành một chuyên gia được khách hàng tin tưởng. Thái độ trung thực và đáng tin cậy của bạn mang lại niềm tin lớn cho khách hàng. Khách hàng giới thiệu bạn, quay lại với bạn, và danh tiếng của bạn được cải thiện thêm.',
          'Bạn trở thành một chuyên gia ổn định và được tôn trọng. Sự nghiệp như một chuyên gia rất ổn định và là một nghề được tôn trọng trong xã hội. Các chuyên gia có chuyên môn và đạo đức được cần thiết và tôn trọng trong bất kỳ thời đại nào.',
          'Bạn xây dựng một sự nghiệp thành công dài hạn. Chuyên môn của bạn sâu hơn và mở rộng theo thời gian. Bạn có thể trở thành một chuyên gia ổn định và thành công trong khi xây dựng kinh nghiệm dài hạn.'
        ], id: [
          'Anda memiliki kemungkinan tinggi untuk menjadi profesional berpenghasilan tinggi. Keahlian dan keandalan Anda memiliki nilai tinggi di pasar, mengarah pada gaji dan kompensasi yang tinggi. Saat Anda mendapatkan pengakuan sebagai profesional, Anda dapat menerima persyaratan yang lebih baik.',
          'Anda menjadi seorang profesional yang diakui oleh industri. Keahlian mendalam dan kemampuan kerja yang luar biasa Anda memungkinkan pengakuan oleh industri. Anda berkembang menjadi otoritas di bidang Anda, dan banyak orang mencari pendapat Anda.',
          'Anda menjadi seorang profesional yang dipercaya oleh pelanggan. Sikap jujur dan andal Anda memberikan kepercayaan besar kepada pelanggan. Pelanggan merekomendasikan Anda, kembali kepada Anda, dan reputasi Anda meningkat lebih lanjut.',
          'Anda menjadi seorang profesional yang stabil dan dihormati. Karier sebagai profesional sangat stabil dan merupakan profesi yang dihormati dalam masyarakat. Profesional dengan keahlian dan etika dibutuhkan dan dihormati di era apa pun.',
          'Anda membangun karier yang sukses jangka panjang. Keahlian Anda semakin mendalam dan meluas seiring waktu. Anda dapat menjadi seorang profesional yang stabil dan sukses sambil membangun pengalaman jangka panjang.'
        ]
      },
      hidden: { 
        ko: [
          '업계 최고의 전문가가 될 수 있습니다. 당신의 꾸준한 노력과 전문성은 업계 최고 수준까지 발전시킬 수 있습니다. 많은 전문가들이 있을 때도 당신은 그들 중 최고가 될 수 있으며, 시장에서 최상급 대우를 받을 수 있습니다.',
          '자신만의 전문 영역을 개척할 수 있습니다. 당신의 전문성을 바탕으로 새로운 전문 분야를 만들거나, 기존 분야에서 새로운 접근을 시도할 수 있습니다. 이러한 혁신은 업계의 새로운 방향을 제시할 수 있습니다.',
          '교육자로 후배를 양성할 수 있습니다. 당신의 경험과 노하우를 후배들에게 전수하여 그들이 더 쉽게 성장할 수 있도록 도와줄 수 있습니다. 교육자로서 많은 전문가를 배출하며, 업계 발전에도 기여합니다.',
          '사회적 영향력을 갖게 됩니다. 전문가로서 당신의 의견과 조언은 많은 사람들에게 영향을 미칩니다. 정책 결정이나 사회적 이슈에 전문가로서 목소리를 내며, 사회에 긍정적인 변화를 만들어낼 수 있습니다.',
          '평생 직업으로 안정적으로 발전합니다. 전문직은 평생에 걸쳐 안정적으로 활동할 수 있는 직업입니다. 당신의 전문성은 나이가 들어도 계속 가치가 있으며, 평생 동안 전문가로서 활동할 수 있습니다.'
        ],
        en: [
          'You can become the top professional in the industry. Your consistent effort and expertise can develop to the top level in the industry. Even when there are many professionals, you can be the best among them and receive top-tier treatment in the market.',
          'You can pioneer your own professional domain. Based on your expertise, you can create new professional fields or try new approaches in existing fields. Such innovation can present new directions for the industry.',
          'You can nurture juniors as an educator. You can pass on your experience and know-how to juniors to help them grow more easily. As an educator, you produce many professionals and contribute to industry development.',
          'You gain social influence. As a professional, your opinions and advice influence many people. You can speak out as a professional on policy decisions or social issues and create positive change in society.',
          'You develop stably as a lifelong career. Professional occupations are careers that can be stably maintained throughout life. Your expertise continues to have value even as you age, and you can work as a professional throughout your life.'
        ], ja: [
          '業界最高の専門家になれます。着実な努力と専門性は業界最高レベルまで発展させられます。多くの専門家がいても最高になれ市場で最高級の待遇を受けられます。',
          '自分だけの専門領域を開拓できます。専門性を基盤に新しい専門分野を作ったり既存分野で新しいアプローチを試みます。このような革新は業界の新しい方向を提示できます。',
          '教育者として後輩を育成できます。経験とノウハウを後輩に伝授しより簡単に成長できるよう助けます。教育者として多くの専門家を輩出し業界発展にも貢献します。',
          '社会的影響力を持ちます。専門家として意見と助言は多くの人に影響します。政策決定や社会的イシューに専門家として声を出し社会に肯定的な変化を作れます。',
          '一生涯職業として安定して発展します。専門職は一生涯にわたり安定して活動できる職業です。専門性は年齢を重ねても継続して価値があり一生涯にわたり専門家として活動できます。'
        ], 'zh-CN': [
          '你有可能成为行业顶尖专业人员。你持续的努力与专业度可发展到行业顶尖水平。即使在同领域有多人，你也能成为其中最优，并在市场获得顶级待遇。',
          '你能开创自己的专业领域。基于你的专业度，你可创造新专业领域或在现有领域尝试新方法。此类创新可为行业指明新方向。',
          '你能作为教育者培养后辈。你将经验与诀窍传授给后辈，助其更轻松成长。作为教育者培养更多专业人员，并推动行业发展。',
          '你具备社会影响力。作为专业人员，你的意见与建议影响许多人。你能在政策决定或社会议题中代表专业人员发声，为社会带来正向变化。',
          '你将作为终生职业稳定发展。专业职业可终生稳定从事。你的专业度即便随年龄增长仍持续有价值，你可终生以专业人员身份活动。'
        ], 'zh-TW': [
          '你有可能成為行業頂尖專業人員。你持續的努力與專業度可發展到行業頂尖水平。即使在同領域有多人，你也能成為其中最優，並在市場獲得頂級待遇。',
          '你能開創自己的專業領域。基於你的專業度，你可創造新專業領域或在現有領域嘗試新方法。此類創新可為行業指明新方向。',
          '你能作為教育者培養後輩。你將經驗與訣竅傳授給後輩，助其更輕鬆成長。作為教育者培養更多專業人員，並推動行業發展。',
          '你具備社會影響力。作為專業人員，你的意見與建議影響許多人。你能在政策決定或社會議題中代表專業人員發聲，為社會帶來正向變化。',
          '你將作為終生職業穩定發展。專業職業可終生穩定從事。你的專業度即便隨年齡增長仍持續有價值，你可終生以專業人員身份活動。'
        ], vi: [
          'Bạn có thể trở thành chuyên gia hàng đầu trong ngành. Nỗ lực và chuyên môn nhất quán của bạn có thể phát triển đến cấp độ hàng đầu trong ngành. Ngay cả khi có nhiều chuyên gia, bạn có thể là tốt nhất trong số họ và nhận được sự đối xử hàng đầu trong thị trường.',
          'Bạn có thể mở đường cho miền chuyên môn của riêng mình. Dựa trên chuyên môn của bạn, bạn có thể tạo ra các lĩnh vực chuyên môn mới hoặc thử các cách tiếp cận mới trong các lĩnh vực hiện có. Sự đổi mới như vậy có thể trình bày các hướng mới cho ngành.',
          'Bạn có thể nuôi dưỡng thế hệ trẻ như một nhà giáo dục. Bạn có thể truyền lại kinh nghiệm và bí quyết của mình cho thế hệ trẻ để giúp họ phát triển dễ dàng hơn. Với tư cách là một nhà giáo dục, bạn tạo ra nhiều chuyên gia và đóng góp cho sự phát triển ngành.',
          'Bạn có được ảnh hưởng xã hội. Với tư cách là một chuyên gia, ý kiến và lời khuyên của bạn ảnh hưởng đến nhiều người. Bạn có thể lên tiếng như một chuyên gia về các quyết định chính sách hoặc các vấn đề xã hội và tạo ra thay đổi tích cực trong xã hội.',
          'Bạn phát triển ổn định như một sự nghiệp suốt đời. Nghề nghiệp chuyên môn là những sự nghiệp có thể được duy trì ổn định suốt cuộc đời. Chuyên môn của bạn tiếp tục có giá trị ngay cả khi bạn già đi, và bạn có thể làm việc như một chuyên gia suốt cuộc đời.'
        ], id: [
          'Anda dapat menjadi profesional teratas di industri. Upaya dan keahlian konsisten Anda dapat berkembang ke tingkat teratas di industri. Bahkan ketika ada banyak profesional, Anda dapat menjadi yang terbaik di antara mereka dan menerima perlakuan tingkat atas di pasar.',
          'Anda dapat memelopori domain profesional Anda sendiri. Berdasarkan keahlian Anda, Anda dapat membuat bidang profesional baru atau mencoba pendekatan baru di bidang yang ada. Inovasi semacam itu dapat menyajikan arah baru untuk industri.',
          'Anda dapat membina junior sebagai pendidik. Anda dapat meneruskan pengalaman dan pengetahuan Anda kepada junior untuk membantu mereka tumbuh dengan lebih mudah. Sebagai pendidik, Anda menghasilkan banyak profesional dan berkontribusi pada pengembangan industri.',
          'Anda mendapatkan pengaruh sosial. Sebagai profesional, pendapat dan nasihat Anda mempengaruhi banyak orang. Anda dapat berbicara sebagai profesional tentang keputusan kebijakan atau masalah sosial dan menciptakan perubahan positif dalam masyarakat.',
          'Anda berkembang secara stabil sebagai karier seumur hidup. Pekerjaan profesional adalah karier yang dapat dipertahankan secara stabil sepanjang hidup. Keahlian Anda terus memiliki nilai bahkan seiring bertambahnya usia, dan Anda dapat bekerja sebagai profesional sepanjang hidup Anda.'
        ]
      }
    }
  }
];

// 결과 계산 함수
export function calculateFaceOccupationsResult(faceDetected: boolean, faceQuality: number): FaceOccupationsResult {
  if (!faceDetected) {
    // 얼굴이 감지되지 않은 경우 랜덤하게 하나 선택
    const randomIndex = Math.floor(Math.random() * faceOccupationsResults.length);
    return faceOccupationsResults[randomIndex];
  }

  // 10개 타입이 골고루 나오도록 완전 랜덤 선택
  // faceQuality는 참고용으로만 사용하고, 실제로는 랜덤하게 타입을 결정
  const randomIndex = Math.floor(Math.random() * faceOccupationsResults.length);
  return faceOccupationsResults[randomIndex];
}

