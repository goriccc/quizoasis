export interface Phase2EyesightResult {
  type: string;
  emoji: string;
  range: [number, number]; // [minLevel, maxLevel]
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
  estimatedVision: {
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

export const PHASE2_EYESIGHT_RESULTS: Phase2EyesightResult[] = [
  {
    type: 'Type1',
    emoji: '🕶️',
    range: [1, 5],
    title: {
      ko: '시력 0.1 이하, 흐릿한 두더지',
      en: 'Vision 0.1 or Below, Blurry Mole',
      ja: '視力0.1以下、ぼやけたモグラ',
      zh: '视力0.1以下，模糊的鼹鼠',
      'zh-TW': '視力0.1以下，模糊的鼴鼠',
      vi: 'Thị lực 0.1 trở xuống, Chuột chũi mờ mịt',
      id: 'Penglihatan 0.1 atau Di Bawah, Tikus Tanah Buram'
    },
    description: {
      ko: '"안경... 안경이 어디 갔지?" 당신의 눈은 휴식이 시급합니다. 큰 글씨도 흐릿하게 보일 정도로 눈이 많이 피로한 상태거나, 원래 시력이 좋지 않으시군요. 스마트폰을 너무 가까이서 보고 있진 않나요? 지금 당장 먼 산을 바라보며 눈 운동을 해주세요.',
      en: '"Glasses... where are my glasses?" Your eyes urgently need rest. Your vision is so blurred that even large text looks fuzzy, either from extreme eye fatigue or naturally poor vision. Are you holding your smartphone too close? Right now, look at distant mountains and do eye exercises.',
      ja: '「メガネ...メガネはどこだっけ？」あなたの目は休息が急務です。大きな文字もぼやけて見えるほど、目が非常に疲れているか、元々視力が良くないようです。スマートフォンを近すぎる距離で見ていませんか？今すぐ遠くの山を見て目を動かしてください。',
      zh: '“眼镜……眼镜去哪了？”你的眼睛急需休息。连大字也模糊不清，说明眼睛非常疲劳，或者原本视力就不太好。你是不是把手机拿得太近了？现在请立刻眺望远山，做眼保健操。',
      'zh-TW': '「眼鏡……眼鏡去哪了？」你的眼睛急需休息。連大字也模糊不清，說明眼睛非常疲勞，或者原本視力就不太好。你是不是把手機拿得太近了？現在請立刻眺望遠山，做眼保健操。',
      vi: '"Kính... kính của tôi ở đâu?" Mắt bạn cần được nghỉ ngơi ngay lập tức. Thị lực của bạn mờ đến mức ngay cả chữ lớn cũng nhìn không rõ, có thể do mắt quá mệt mỏi hoặc thị lực tự nhiên kém. Bạn có đang cầm điện thoại quá gần không? Ngay bây giờ, hãy nhìn ra những ngọn núi xa và tập thể dục cho mắt.',
      id: '"Kacamata... di mana kacamata saya?" Mata Anda sangat membutuhkan istirahat. Penglihatan Anda begitu kabur sehingga bahkan teks besar terlihat samar, baik karena kelelahan mata yang ekstrem atau penglihatan yang secara alami buruk. Apakah Anda memegang smartphone terlalu dekat? Sekarang, lihatlah gunung yang jauh dan lakukan latihan mata.'
    },
    estimatedVision: {
      ko: '추정 시력: 0.1 마이너스',
      en: 'Estimated Vision: Below 0.1',
      ja: '推定視力：0.1未満',
      zh: '预估视力：0.1以下',
      'zh-TW': '預估視力：0.1以下',
      vi: 'Thị lực ước tính: Dưới 0.1',
      id: 'Penglihatan Taksiran: Di Bawah 0.1'
    },
    recommendation: {
      ko: '블루라이트 차단 안경, 안과 방문',
      en: 'Blue light blocking glasses, Visit eye doctor',
      ja: 'ブルーライトカットメガネ、眼科受診',
      zh: '防蓝光眼镜，就诊眼科',
      'zh-TW': '防藍光眼鏡，就診眼科',
      vi: 'Kính chặn ánh sáng xanh, Đến khám bác sĩ mắt',
      id: 'Kacamata pemblokir cahaya biru, Kunjungi dokter mata'
    }
  },
  {
    type: 'Type2',
    emoji: '🐼',
    range: [6, 9],
    title: {
      ko: '시력 0.5, 침침한 판다',
      en: 'Vision 0.5, Dim Panda',
      ja: '視力0.5、ぼんやりしたパンダ',
      zh: '视力0.5，模糊的熊猫',
      'zh-TW': '視力0.5，模糊的熊貓',
      vi: 'Thị lực 0.5, Gấu trúc mờ mịt',
      id: 'Penglihatan 0.5, Panda Buram'
    },
    description: {
      ko: '"보일 듯 말 듯... 아리송하네요." 생활하는 데 큰 지장은 없지만, 멀리 있는 간판이나 버스 번호가 잘 안 보일 때가 있습니다. 눈을 찌푸리고 보는 습관이 생길 수 있으니 주의하세요. 루테인이 풍부한 당근과 시금치를 챙겨 드시는 건 어떨까요?',
      en: '"I can see it... or can I? It\'s unclear." Daily life isn\'t significantly affected, but distant signs or bus numbers can be hard to read sometimes. Be careful not to develop a habit of squinting. How about eating more carrots and spinach rich in lutein?',
      ja: '「見えるような...見えないような...はっきりしませんね。」日常生活に大きな支障はありませんが、遠くの看板やバス番号がよく見えないことがあります。目を細めて見る癖がつく可能性があるので注意してください。ルテインが豊富なニンジンとホウレンソウを食べてみませんか？',
      zh: '“看得见又看不见……不太清楚。”日常生活影响不大，但远处招牌或公交车号有时看不清。注意别养成眯眼看的习惯。不如多吃些富含叶黄素的胡萝卜和菠菜？',
      'zh-TW': '「看得見又看不見……不太清楚。」日常生活影響不大，但遠處招牌或公車號有時看不清。注意別養成瞇眼看的習慣。不如多吃些富含葉黃素的胡蘿蔔和菠菜？',
      vi: '"Có vẻ thấy... nhưng không rõ lắm." Cuộc sống hàng ngày không bị ảnh hưởng nhiều, nhưng đôi khi biển hiệu xa hoặc số xe buýt khó đọc. Hãy cẩn thận đừng để phát triển thói quen nheo mắt. Bạn thử ăn thêm cà rốt và rau bina giàu lutein nhé?',
      id: '"Terlihat... atau tidak? Tidak jelas." Kehidupan sehari-hari tidak terlalu terpengaruh, tetapi tanda-tanda jauh atau nomor bus kadang sulit dibaca. Hati-hati jangan sampai mengembangkan kebiasaan menyipitkan mata. Bagaimana jika makan lebih banyak wortel dan bayam yang kaya lutein?'
    },
    estimatedVision: {
      ko: '추정 시력: 0.3 ~ 0.5',
      en: 'Estimated Vision: 0.3 ~ 0.5',
      ja: '推定視力：0.3〜0.5',
      zh: '预估视力：0.3 ~ 0.5',
      'zh-TW': '預估視力：0.3 ~ 0.5',
      vi: 'Thị lực ước tính: 0.3 ~ 0.5',
      id: 'Penglihatan Taksiran: 0.3 ~ 0.5'
    },
    recommendation: {
      ko: '인공눈물 점안, 당근 주스',
      en: 'Artificial tears, Carrot juice',
      ja: '人工涙液の点眼、ニンジンジュース',
      zh: '人工泪液滴眼，胡萝卜汁',
      'zh-TW': '人工淚液滴眼，胡蘿蔔汁',
      vi: 'Thuốc nhỏ mắt nhân tạo, Nước ép cà rốt',
      id: 'Air mata buatan, Jus wortel'
    }
  },
  {
    type: 'Type3',
    emoji: '🧑‍💼',
    range: [10, 13],
    title: {
      ko: '시력 1.0, 건강한 일반인',
      en: 'Vision 1.0, Healthy Average',
      ja: '視力1.0、健康な一般人',
      zh: '视力1.0，健康的普通人',
      'zh-TW': '視力1.0，健康的普通人',
      vi: 'Thị lực 1.0, Người bình thường khỏe mạnh',
      id: 'Penglihatan 1.0, Rata-rata Sehat'
    },
    description: {
      ko: '"딱 평균입니다! 건강한 눈을 가지셨네요." 축하합니다. 당신은 대한민국 평균 이상의 건강한 시력을 유지하고 있습니다. 일상생활, 운전, 업무 등 모든 영역에서 불편함이 없는 \'축복받은 눈\'입니다. 지금 상태를 유지하기 위해 50분 작업 후 10분 휴식을 지켜주세요.',
      en: '"Exactly average! You have healthy eyes." Congratulations. You maintain healthy vision above the Korean average. You have "blessed eyes" with no discomfort in daily life, driving, work, and all areas. To maintain this, follow the 50-minute work, 10-minute rest rule.',
      ja: '「まさに平均です！健康な目をお持ちですね。」おめでとうございます。あなたは韓国の平均以上の健康な視力を維持しています。日常生活、運転、仕事など、あらゆる分野で不便のない「恵まれた目」です。この状態を維持するために、50分作業後10分休憩を守ってください。',
      zh: '“正好是平均水平！你有一双健康的眼睛。”恭喜。你的视力高于韩国平均水平。在日常生活中、驾驶、工作等所有领域都不受影响，拥有“被祝福的眼睛”。要保持现状，请遵守工作50分钟后休息10分钟的规则。',
      'zh-TW': '「正好是平均水平！你有一雙健康的眼睛。」恭喜。你的視力高於韓國平均水平。在日常生活中、駕駛、工作等所有領域都不受影響，擁有「被祝福的眼睛」。要保持現狀，請遵守工作50分鐘後休息10分鐘的規則。',
      vi: '"Đúng mức trung bình! Bạn có đôi mắt khỏe mạnh." Chúc mừng. Bạn duy trì thị lực khỏe mạnh trên mức trung bình của Hàn Quốc. Bạn có "đôi mắt được ban phước" không có bất tiện nào trong cuộc sống hàng ngày, lái xe, công việc và mọi lĩnh vực. Để duy trì điều này, hãy tuân thủ quy tắc làm việc 50 phút, nghỉ 10 phút.',
      id: '"Tepat rata-rata! Anda memiliki mata yang sehat." Selamat. Anda mempertahankan penglihatan sehat di atas rata-rata Korea. Anda memiliki "mata yang diberkati" tanpa ketidaknyamanan dalam kehidupan sehari-hari, mengemudi, bekerja, dan semua bidang. Untuk mempertahankan ini, ikuti aturan bekerja 50 menit, istirahat 10 menit.'
    },
    estimatedVision: {
      ko: '추정 시력: 0.8 ~ 1.0',
      en: 'Estimated Vision: 0.8 ~ 1.0',
      ja: '推定視力：0.8〜1.0',
      zh: '预估视力：0.8 ~ 1.0',
      'zh-TW': '預估視力：0.8 ~ 1.0',
      vi: 'Thị lực ước tính: 0.8 ~ 1.0',
      id: 'Penglihatan Taksiran: 0.8 ~ 1.0'
    },
    recommendation: {
      ko: '온열 안대, 주기적인 휴식',
      en: 'Heating eye mask, Regular breaks',
      ja: '温熱アイマスク、定期的な休憩',
      zh: '热敷眼罩，定期休息',
      'zh-TW': '熱敷眼罩，定期休息',
      vi: 'Mặt nạ ấm cho mắt, Nghỉ ngơi định kỳ',
      id: 'Masker mata hangat, Istirahat teratur'
    }
  },
  {
    type: 'Type4',
    emoji: '🔭',
    range: [14, 16],
    title: {
      ko: '시력 1.5, 예리한 정찰병',
      en: 'Vision 1.5, Sharp Scout',
      ja: '視力1.5、鋭い偵察兵',
      zh: '视力1.5，敏锐的侦察兵',
      'zh-TW': '視力1.5，敏銳的偵察兵',
      vi: 'Thị lực 1.5, Trinh sát sắc sảo',
      id: 'Penglihatan 1.5, Pengintai Tajam'
    },
    description: {
      ko: '"저 멀리 있는 모공까지 보이겠어요!" 상당히 좋은 시력을 가지고 계십니다. 친구들이 "저거 뭐라고 쓰여있어?"라고 물어볼 때 대신 읽어주는 인간 망원경 역할을 하시겠군요. 눈 관리를 아주 잘하셨거나, 타고난 유전자가 좋습니다.',
      en: '"You can probably see the pores on that distant face!" You have quite good vision. You\'ll be the human telescope when friends ask "What does that say?" Your eye care is excellent, or you have great genetics.',
      ja: '「あの遠くの毛穴まで見えそうですね！」かなり良い視力をお持ちです。友達が「あれ何て書いてあるの？」と聞いた時に代わりに読んであげる人間望遠鏡の役割をすることになりそうですね。目のケアが非常に良かったか、生まれ持った遺伝子が良いのでしょう。',
      zh: '“你大概连远处的毛孔都看得见！”你拥有相当不错的视力。当朋友问“那上面写的是什么？”时，你会成为人肉望远镜。你的眼部护理做得很好，或者基因天赋不错。',
      'zh-TW': '「你大概連遠處的毛孔都看得見！」你擁有相當不錯的視力。當朋友問「那上面寫的是什麼？」時，你會成為人肉望遠鏡。你的眼部護理做得很好，或者基因天賦不錯。',
      vi: '"Bạn có thể thấy cả lỗ chân lông ở xa kia!" Bạn có thị lực khá tốt. Bạn sẽ đóng vai "kính viễn vọng người" khi bạn bè hỏi "Cái kia viết gì vậy?" Việc chăm sóc mắt của bạn rất tốt, hoặc gen di truyền của bạn tốt.',
      id: '"Anda mungkin bisa melihat pori-pori di wajah yang jauh itu!" Anda memiliki penglihatan yang cukup baik. Anda akan menjadi teleskop manusia ketika teman bertanya "Apa yang tertulis di sana?" Perawatan mata Anda sangat baik, atau genetik Anda bagus.'
    },
    estimatedVision: {
      ko: '추정 시력: 1.2 ~ 1.5',
      en: 'Estimated Vision: 1.2 ~ 1.5',
      ja: '推定視力：1.2〜1.5',
      zh: '预估视力：1.2 ~ 1.5',
      'zh-TW': '預估視力：1.2 ~ 1.5',
      vi: 'Thị lực ước tính: 1.2 ~ 1.5',
      id: 'Penglihatan Taksiran: 1.2 ~ 1.5'
    },
    recommendation: {
      ko: '선글라스 착용 (자외선 보호)',
      en: 'Wear sunglasses (UV protection)',
      ja: 'サングラス着用（紫外線保護）',
      zh: '佩戴太阳镜（防紫外线）',
      'zh-TW': '佩戴太陽鏡（防紫外線）',
      vi: 'Đeo kính râm (Bảo vệ tia UV)',
      id: 'Pakai kacamata hitam (Perlindungan UV)'
    }
  },
  {
    type: 'Type5',
    emoji: '🦅',
    range: [17, 19],
    title: {
      ko: '시력 2.0, 하늘의 제왕 매',
      en: 'Vision 2.0, Sky Emperor Eagle',
      ja: '視力2.0、空の帝王ワシ',
      zh: '视力2.0，天空之王老鹰',
      'zh-TW': '視力2.0，天空之王老鷹',
      vi: 'Thị lực 2.0, Đại bàng vua của bầu trời',
      id: 'Penglihatan 2.0, Elang Kaisar Langit'
    },
    description: {
      ko: '"와우! 인간의 눈이 맞나요? 소름 돋아요." 당신의 눈은 하늘을 나는 매처럼 날카롭습니다. 아주 미세한 차이와 흐릿한 형체까지 완벽하게 잡아냅니다. 파일럿이나 저격수 지원을 고려해 보셔도 될 정도입니다. 남들이 못 보는 세상을 보고 계시는군요!',
      en: '"Wow! Are these really human eyes? Chills!" Your eyes are as sharp as a soaring eagle. You perfectly capture even the tiniest differences and faint shapes. You could consider becoming a pilot or sniper. You see a world others can\'t!',
      ja: '「わあ！人間の目ですか？鳥肌が立ちます。」あなたの目は空を飛ぶワシのように鋭いです。非常に微細な違いやぼやけた形まで完璧に捉えます。パイロットや狙撃手への応募を考えてもいいレベルです。他の人が見えない世界を見ているんですね！',
      zh: '“哇！这真的是人眼吗？起鸡皮疙瘩了。”你的眼睛像翱翔的雄鹰一样锐利。你完美地捕捉到最微小的差异和模糊的形状。你可以考虑成为飞行员或狙击手。你看到了别人看不到的世界！',
      'zh-TW': '「哇！這真的是人眼嗎？起雞皮疙瘩了。」你的眼睛像翱翔的雄鷹一樣銳利。你完美地捕捉到最微小的差異和模糊的形狀。你可以考慮成為飛行員或狙擊手。你看到了別人看不到的世界！',
      vi: '"Wow! Đây có phải mắt người không? Nổi da gà!" Mắt bạn sắc như đại bàng bay trên trời. Bạn nắm bắt hoàn hảo cả những khác biệt nhỏ nhất và hình dạng mờ nhạt. Bạn có thể cân nhắc trở thành phi công hoặc xạ thủ. Bạn đang nhìn thấy thế giới mà người khác không thể!',
      id: '"Wow! Apakah ini benar-benar mata manusia? Merinding!" Mata Anda setajam elang yang terbang tinggi. Anda menangkap dengan sempurna bahkan perbedaan terkecil dan bentuk samar. Anda bisa mempertimbangkan menjadi pilot atau penembak jitu. Anda melihat dunia yang tidak bisa dilihat orang lain!'
    },
    estimatedVision: {
      ko: '추정 시력: 2.0 (인간계 최상)',
      en: 'Estimated Vision: 2.0 (Top of Human Level)',
      ja: '推定視力：2.0（人間界最高）',
      zh: '预估视力：2.0（人类顶级）',
      'zh-TW': '預估視力：2.0（人類頂級）',
      vi: 'Thị lực ước tính: 2.0 (Cấp độ cao nhất của con người)',
      id: 'Penglihatan Taksiran: 2.0 (Tingkat Tertinggi Manusia)'
    },
    recommendation: {
      ko: '공군 파일럿 지원',
      en: 'Apply for Air Force pilot',
      ja: '空軍パイロット応募',
      zh: '申请空军飞行员',
      'zh-TW': '申請空軍飛行員',
      vi: 'Đăng ký phi công Không quân',
      id: 'Mendaftar pilot Angkatan Udara'
    }
  },
  {
    type: 'Type6',
    emoji: '🇲🇳',
    range: [20, 20],
    title: {
      ko: '시력 5.0, 몽골의 독수리',
      en: 'Vision 5.0, Mongolian Eagle',
      ja: '視力5.0、モンゴルのワシ',
      zh: '视力5.0，蒙古雄鹰',
      'zh-TW': '視力5.0，蒙古雄鷹',
      vi: 'Thị lực 5.0, Đại bàng Mông Cổ',
      id: 'Penglihatan 5.0, Elang Mongolia'
    },
    description: {
      ko: '"당신은 혹시... 몽골에서 오셨나요?" 이건 말도 안 됩니다. 당신은 스마트폰 픽셀까지 볼 수 있는 초능력을 가졌습니다. 드넓은 초원에서 양 떼를 지키던 유전자가 흐르고 있을지도 모릅니다. 전설적인 시력의 소유자로 인정합니다. (혹시 찍어서 맞춘 건 아니겠죠?)',
      en: '"Are you... by any chance... from Mongolia?" This is impossible. You have superhuman vision that can see smartphone pixels. The genes of those who guarded sheep flocks across vast grasslands may flow in you. We recognize you as a legendary vision owner. (You didn\'t just guess, right?)',
      ja: '「あなたはもしかして...モンゴルから来たんですか？」これはあり得ません。あなたはスマートフォンのピクセルまで見ることができる超能力を持っています。広大な草原で羊の群れを守っていた遺伝子が流れているのかもしれません。伝説的な視力の所有者として認めます。（もしかして当てずっぽうで当てたんじゃないでしょうね？）',
      zh: '“你该不会……是从蒙古来的吧？”这不可能。你拥有能看到手机像素的超人视力。守护广阔草原上羊群的基因可能在你体内流淌。我们承认你是传说中的视力拥有者。（你不会是瞎猜的吧？）',
      'zh-TW': '「你該不會……是從蒙古來的吧？」這不可能。你擁有能看到手機像素的超人視力。守護廣闊草原上羊群的基因可能在你體內流淌。我們承認你是傳說中的視力擁有者。（你不會是瞎猜的吧？）',
      vi: '"Bạn có phải... đến từ Mông Cổ không?" Điều này là không thể. Bạn có thị lực siêu phàm có thể nhìn thấy cả pixel trên điện thoại thông minh. Gen của những người từng bảo vệ đàn cừu trên đồng cỏ rộng lớn có thể đang chảy trong bạn. Chúng tôi công nhận bạn là chủ sở hữu thị lực huyền thoại. (Bạn không phải đoán mò đấy chứ?)',
      id: '"Apakah Anda... kebetulan... dari Mongolia?" Ini tidak mungkin. Anda memiliki penglihatan superhuman yang bisa melihat pixel smartphone. Gen dari mereka yang menjaga kawanan domba di padang rumput yang luas mungkin mengalir di dalam diri Anda. Kami mengakui Anda sebagai pemilik penglihatan legendaris. (Anda tidak hanya menebak, kan?)'
    },
    estimatedVision: {
      ko: '추정 시력: 5.0 (측정 불가)',
      en: 'Estimated Vision: 5.0 (Unmeasurable)',
      ja: '推定視力：5.0（測定不可能）',
      zh: '预估视力：5.0（无法测量）',
      'zh-TW': '預估視力：5.0（無法測量）',
      vi: 'Thị lực ước tính: 5.0 (Không thể đo lường)',
      id: 'Penglihatan Taksiran: 5.0 (Tidak Terukur)'
    },
    recommendation: {
      ko: '기네스북 도전',
      en: 'Challenge Guinness World Records',
      ja: 'ギネス世界記録に挑戦',
      zh: '挑战吉尼斯世界纪录',
      'zh-TW': '挑戰吉尼斯世界紀錄',
      vi: 'Thử thách Kỷ lục Guinness',
      id: 'Tantang Rekor Dunia Guinness'
    }
  }
];

export function calculatePhase2EyesightResult(level: number): Phase2EyesightResult {
  return PHASE2_EYESIGHT_RESULTS.find(r => level >= r.range[0] && level <= r.range[1]) || PHASE2_EYESIGHT_RESULTS[0];
}

