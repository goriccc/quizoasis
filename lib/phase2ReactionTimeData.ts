export interface Phase2ReactionTimeResult {
  type: string;
  emoji: string;
  range: [number, number]; // [minMs, maxMs]
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
  survivalInstinct: { // 매핑: 당신의 속도 (Your Speed)
    ko: string;
    en: string;
    ja: string;
    zh: string;
    'zh-TW': string;
    vi: string;
    id: string;
  };
  advice: { // 매핑: 추천 직업 (Recommended Job)
    ko: string;
    en: string;
    ja: string;
    zh: string;
    'zh-TW': string;
    vi: string;
    id: string;
  };
}

export const PHASE2_REACTION_TIME_RESULTS: Phase2ReactionTimeResult[] = [
  {
    type: 'Type1',
    emoji: '⚡',
    range: [0, 180],
    title: {
      ko: '빛의 속도, 신의 손가락',
      en: 'Speed of Light, God\'s Finger',
      ja: '光の速度、神の指',
      zh: '光速，神之手指',
      'zh-TW': '光速，神之手指',
      vi: 'Tốc độ ánh sáng, Ngón tay thần thánh',
      id: 'Kecepatan Cahaya, Jari Dewa'
    },
    description: {
      ko: '"혹시 프로게이머세요? 아니면 AI?" 당신의 반응속도는 인간의 한계를 뛰어넘었습니다. 0.1초대의 영역은 훈련된 운동선수나 프로게이머(Faker급)에게서나 볼 수 있는 수치입니다. 어디 가서 \'피지컬 좋다\'고 자랑하셔도 됩니다. 총알도 피할 수 있을 것 같네요!',
      en: '"Are you a pro gamer? Or AI?" Your reaction speed exceeds human limits. The 0.1-second range is seen only in trained athletes or pro gamers. You can brag about your physical skills anywhere. You could probably dodge bullets!',
      ja: '「プロゲーマーですか？それともAI？」あなたの反応速度は人間の限界を超えています。0.1秒台の領域は、訓練されたアスリートやプロゲーマーでしか見られない数値です。どこに行っても「フィジカルがすごい」と自慢できます。弾丸も避けられそうですね！',
      zh: '“你是职业玩家吗？还是AI？”你的反应速度超越了人类极限。0.1秒的领域只有受过训练的运动员或职业玩家才能达到。你可以到处炫耀你的身体素质。感觉连子弹都能躲过！',
      'zh-TW': '“你是職業玩家嗎？還是AI？”你的反應速度超越了人類極限。0.1秒的領域只有受過訓練的運動員或職業玩家才能達到。你可以到處炫耀你的身體素質。感覺連子彈都能躲過！',
      vi: '"Bạn có phải là game thủ chuyên nghiệp không? Hay là AI?" Tốc độ phản ứng của bạn vượt qua giới hạn con người. Phạm vi 0,1 giây chỉ thấy ở các vận động viên được đào tạo hoặc game thủ chuyên nghiệp. Bạn có thể khoe khoang về kỹ năng thể chất của mình. Có lẽ bạn còn tránh được cả đạn!',
      id: '"Apakah Anda gamer pro? Atau AI?" Kecepatan reaksi Anda melebihi batas manusia. Kisaran 0,1 detik hanya terlihat pada atlet terlatih atau gamer pro. Anda bisa menyombongkan keterampilan fisik Anda di mana saja. Anda mungkin bisa menghindari peluru!'
    },
    survivalInstinct: {
      ko: '상위 1% (신계)',
      en: 'Top 1% (Divine)',
      ja: '上位1%（神階）',
      zh: '上位1%（神阶）',
      'zh-TW': '上位1%（神階）',
      vi: 'Top 1% (Thần thánh)',
      id: 'Top 1% (Dewa)'
    },
    advice: {
      ko: '프로게이머, F1 레이서, 닌자',
      en: 'Pro Gamer, F1 Racer, Ninja',
      ja: 'プロゲーマー、F1レーサー、忍者',
      zh: '职业玩家，F1赛车手，忍者',
      'zh-TW': '職業玩家，F1賽車手，忍者',
      vi: 'Game thủ chuyên nghiệp, Tay đua F1, Ninja',
      id: 'Gamer Pro, Pembalap F1, Ninja'
    }
  },
  {
    type: 'Type2',
    emoji: '🦅',
    range: [181, 210],
    title: {
      ko: '매의 눈, 슈퍼 소닉',
      en: 'Hawk Eye, Super Sonic',
      ja: '鷹の目、スーパーソニック',
      zh: '鹰眼，超音速',
      'zh-TW': '鷹眼，超音速',
      vi: 'Mắt ưng, Siêu thanh',
      id: 'Mata Elang, Super Sonic'
    },
    description: {
      ko: '"와! 진짜 빠르시네요. 인정합니다." 일반인 중에서 최상위권에 속하는 엄청난 순발력입니다. 남들보다 반 템포 빠르게 반응하기 때문에, FPS 게임이나 스포츠에서 두각을 나타낼 타입입니다. 동체 시력과 신경 전달 속도가 매우 뛰어납니다.',
      en: '"Wow! You\'re really fast. I admit it." Incredible reflexes belonging to the top tier of ordinary people. You react half a beat faster than others, so you\'ll stand out in FPS games or sports. Your dynamic vision and nerve transmission speed are excellent.',
      ja: '「わあ！本当に速いですね。認めます。」一般人の中で最上位圏に属する凄まじい瞬発力です。他の人より半テンポ早く反応するため、FPSゲームやスポーツで頭角を現すタイプです。動体視力と神経伝達速度が非常に優れています。',
      zh: '“哇！真的很快。佩服。”属于普通人中顶尖的惊人爆发力。因为比别人快半拍反应，是在FPS游戏或运动中崭露头角的类型。动态视力和神经传导速度非常出色。',
      'zh-TW': '“哇！真的很快。佩服。”屬於普通人中頂尖的驚人爆發力。因為比別人快半拍反應，是在FPS遊戲或運動中嶄露頭角的類型。動態視力和神經傳導速度非常出色。',
      vi: '"Wow! Bạn thực sự rất nhanh. Tôi thừa nhận điều đó." Phản xạ đáng kinh ngạc thuộc hàng top trong số người bình thường. Bạn phản ứng nhanh hơn người khác nửa nhịp, vì vậy bạn sẽ nổi bật trong các trò chơi FPS hoặc thể thao. Thị lực động và tốc độ truyền thần kinh của bạn rất xuất sắc.',
      id: '"Wow! Kamu benar-benar cepat. Aku akui itu." Refleks luar biasa yang termasuk tingkat atas orang biasa. Anda bereaksi setengah ketukan lebih cepat dari orang lain, jadi Anda akan menonjol dalam game FPS atau olahraga. Penglihatan dinamis dan kecepatan transmisi saraf Anda sangat baik.'
    },
    survivalInstinct: {
      ko: '상위 10% (다이아몬드)',
      en: 'Top 10% (Diamond)',
      ja: '上位10%（ダイヤモンド）',
      zh: '上位10%（钻石）',
      'zh-TW': '上位10%（鑽石）',
      vi: 'Top 10% (Kim cương)',
      id: 'Top 10% (Berlian)'
    },
    advice: {
      ko: '야구 타자, 격투기 선수',
      en: 'Baseball Batter, MMA Fighter',
      ja: '野球打者、格闘技選手',
      zh: '棒球击球手，格斗选手',
      'zh-TW': '棒球擊球手，格鬥選手',
      vi: 'Vận động viên bóng chày, Võ sĩ MMA',
      id: 'Pemukul Bisbol, Petarung MMA'
    }
  },
  {
    type: 'Type3',
    emoji: '🐱',
    range: [211, 240],
    title: {
      ko: '민첩한 고양이',
      en: 'Agile Cat',
      ja: '敏捷な猫',
      zh: '敏捷的猫',
      'zh-TW': '敏捷的貓',
      vi: 'Mèo nhanh nhẹn',
      id: 'Kucing Lincah'
    },
    description: {
      ko: '"평균 이상입니다! 꽤 쓸만한 반사신경이군요." 아주 훌륭합니다! 20대 초반의 평균적인 반응속도보다 조금 더 빠릅니다. 일상생활에서 컵이 떨어질 때 낚아채거나, 날아오는 공을 피하는 데 전혀 문제가 없습니다. 어디 가서 느리다는 소리는 절대 안 듣겠네요.',
      en: '"Above average! Quite useful reflexes." Very good! Slightly faster than the average reaction speed of someone in their early 20s. You have no problem catching a falling cup or dodging a flying ball in daily life. You\'ll never hear anyone call you slow.',
      ja: '「平均以上です！なかなか使える反射神経ですね。」素晴らしいです！20代前半の平均的な反応速度より少し速いです。日常生活でコップが落ちた時に掴んだり、飛んでくるボールを避けるのに全く問題ありません。どこに行っても遅いと言われることは絶対ないでしょう。',
      zh: '“高于平均水平！相当不错的反射神经。”非常棒！比20多岁年轻人的平均反应速度稍快。在日常生活中接住掉落的杯子或躲避飞来的球完全没有问题。绝对不会有人说你慢。',
      'zh-TW': '“高於平均水平！相當不錯的反射神經。”非常棒！比20多歲年輕人的平均反應速度稍快。在日常生活中接住掉落的杯子或躲避飛來的球完全沒有問題。絕對不會有人說你慢。',
      vi: '"Trên trung bình! Phản xạ khá hữu ích." Rất tốt! Nhanh hơn một chút so với tốc độ phản ứng trung bình của người ở độ tuổi 20. Bạn không gặp vấn đề gì khi bắt chiếc cốc rơi hoặc tránh quả bóng bay trong cuộc sống hàng ngày. Bạn sẽ không bao giờ nghe ai nói mình chậm chạp.',
      id: '"Di atas rata-rata! Refleks yang cukup berguna." Sangat bagus! Sedikit lebih cepat dari kecepatan reaksi rata-rata seseorang di awal usia 20-an. Anda tidak masalah menangkap cangkir jatuh atau menghindari bola terbang dalam kehidupan sehari-hari. Anda tidak akan pernah mendengar orang menyebut Anda lambat.'
    },
    survivalInstinct: {
      ko: '상위 30% (골드)',
      en: 'Top 30% (Gold)',
      ja: '上位30%（ゴールド）',
      zh: '上位30%（黄金）',
      'zh-TW': '上位30%（黃金）',
      vi: 'Top 30% (Vàng)',
      id: 'Top 30% (Emas)'
    },
    advice: {
      ko: '배드민턴 선수, 형사',
      en: 'Badminton Player, Detective',
      ja: 'バドミントン選手、刑事',
      zh: '羽毛球选手，刑警',
      'zh-TW': '羽毛球選手，刑警',
      vi: 'Vận động viên cầu lông, Thám tử',
      id: 'Pemain Bulu Tangkis, Detektif'
    }
  },
  {
    type: 'Type4',
    emoji: '🙋‍♂️',
    range: [241, 280],
    title: {
      ko: '평범한 지구인',
      en: 'Ordinary Earthling',
      ja: '平凡な地球人',
      zh: '平凡的地球人',
      'zh-TW': '平凡的地球人',
      vi: 'Người Trái đất bình thường',
      id: 'Manusia Bumi Biasa'
    },
    description: {
      ko: '"지극히 정상입니다. 딱 인간의 평균치네요." 축하합니다. 당신은 지극히 평범한 뇌와 신경을 가졌습니다. 이 구간은 전 세계 성인의 평균 반응속도입니다. 빠르지도 느리지도 않지만, 컨디션이 좋으면 더 좋은 기록이 나올 수 있습니다. 오늘은 커피 한 잔 마시고 다시 해볼까요?',
      en: '"Perfectly normal. Just the human average." Congratulations. You have a perfectly ordinary brain and nerves. This range is the average reaction speed of adults worldwide. Neither fast nor slow, but you might get a better record if you\'re in good condition. Shall we have a coffee and try again?',
      ja: '「至って正常です。まさに人間の平均値ですね。」おめでとうございます。あなたは至って平凡な脳と神経を持っています。この区間は全世界の成人の平均反応速度です。速くも遅くもありませんが、コンディションが良ければもっと良い記録が出るかもしれません。今日はコーヒーを一杯飲んでからまたやってみましょうか？',
      zh: '“极其正常。正好是人类的平均值。”恭喜。你拥有极其平凡的大脑和神经。这个区间是全世界成年人的平均反应速度。不快也不慢，但如果状态好，可能会有更好的记录。今天要不要喝杯咖啡再试一次？',
      'zh-TW': '“極其正常。正好是人類的平均值。”恭喜。你擁有極其平凡的大腦和神經。這個區間是全世界成年人的平均反應速度。不快也不慢，但如果狀態好，可能會有更好的記錄。今天要不要喝杯咖啡再試一次？',
      vi: '"Hoàn toàn bình thường. Đúng mức trung bình của con người." Chúc mừng. Bạn có bộ não và dây thần kinh hoàn toàn bình thường. Phạm vi này là tốc độ phản ứng trung bình của người lớn trên toàn thế giới. Không nhanh cũng không chậm, nhưng bạn có thể đạt kỷ lục tốt hơn nếu ở trong tình trạng tốt. Chúng ta uống cà phê và thử lại nhé?',
      id: '"Sangat normal. Hanya rata-rata manusia." Selamat. Anda memiliki otak dan saraf yang sangat biasa. Kisaran ini adalah kecepatan reaksi rata-rata orang dewasa di seluruh dunia. Tidak cepat atau lambat, tetapi Anda mungkin mendapatkan rekor yang lebih baik jika kondisi Anda baik. Haruskah kita minum kopi dan mencoba lagi?'
    },
    survivalInstinct: {
      ko: '상위 50% (실버)',
      en: 'Top 50% (Silver)',
      ja: '上位50%（シルバー）',
      zh: '上位50%（白银）',
      'zh-TW': '上位50%（白銀）',
      vi: 'Top 50% (Bạc)',
      id: 'Top 50% (Perak)'
    },
    advice: {
      ko: '사무직, 학생',
      en: 'Office Worker, Student',
      ja: '事務職、学生',
      zh: '文职，学生',
      'zh-TW': '文職，學生',
      vi: 'Nhân viên văn phòng, Học sinh',
      id: 'Pekerja Kantor, Pelajar'
    }
  },
  {
    type: 'Type5',
    emoji: '🐢',
    range: [281, 350],
    title: {
      ko: '느긋한 거북이',
      en: 'Relaxed Turtle',
      ja: 'のんびりした亀',
      zh: '悠闲的乌龟',
      'zh-TW': '悠閒的烏龜',
      vi: 'Con rùa thư thái',
      id: 'Kura-kura Santai'
    },
    description: {
      ko: '"어... 음... 보고 누른 거 맞죠?" 조금 느긋하시군요. 뇌에서 "눌러!"라고 신호를 보냈는데 손가락이 "잠시만요~" 하고 늦게 출발한 것 같습니다. 혹시 지금 졸리거나 술을 드셨나요? 아니라면 당신은 평화주의자일 확률이 높습니다.',
      en: '"Uh... um... you did press it after seeing it, right?" You\'re a bit relaxed. Your brain signaled "Press!", but your finger seems to have started late saying "Just a moment~". Are you sleepy or drunk right now? If not, you\'re likely a pacifist.',
      ja: '「えっと…うーん…見てから押しましたよね？」少しのんびりしていますね。脳から「押せ！」と信号を送ったのに、指が「ちょっと待ってください〜」と遅れて出発したようです。もしかして今眠いですか、それともお酒を飲みましたか？でなければ、あなたは平和主義者である確率が高いです。',
      zh: '“额……那个……是看着按的吧？”你有点悠闲呢。大脑发出了“按！”的信号，但手指好像说“稍等一下~”然后晚出发了。难道你现在很困或者喝酒了吗？如果不是，你是和平主义者的概率很高。',
      'zh-TW': '“額……那個……是看著按的吧？”你有點悠閒呢。大腦發出了“按！”的信號，但手指好像說“稍等一下~”然後晚出發了。難道你現在很困或者喝酒了嗎？如果不是，你是和平主義者的概率很高。',
      vi: '"Ơ... ừm... bạn đã nhấn sau khi nhìn thấy nó, phải không?" Bạn hơi thư thái. Bộ não của bạn ra hiệu "Nhấn!", nhưng ngón tay của bạn dường như đã bắt đầu muộn khi nói "Chờ một chút~". Bạn đang buồn ngủ hay say rượu? Nếu không, bạn có khả năng là một người theo chủ nghĩa hòa bình.',
      id: '"Uh... um... kamu menekannya setelah melihatnya, kan?" Anda sedikit santai. Otak Anda memberi sinyal "Tekan!", tetapi jari Anda sepertinya terlambat memulai dengan mengatakan "Tunggu sebentar~". Apakah Anda mengantuk atau mabuk sekarang? Jika tidak, Anda kemungkinan besar adalah seorang pasifis.'
    },
    survivalInstinct: {
      ko: '하위 30% (브론즈)',
      en: 'Bottom 30% (Bronze)',
      ja: '下位30%（ブロンズ）',
      zh: '下位30%（青铜）',
      'zh-TW': '下位30%（青銅）',
      vi: 'Dưới 30% (Đồng)',
      id: 'Bawah 30% (Perunggu)'
    },
    advice: {
      ko: '장기 기사, 낚시꾼',
      en: 'Shogi Player, Angler',
      ja: '将棋棋士、釣り人',
      zh: '象棋棋手，垂钓者',
      'zh-TW': '象棋棋手，垂釣者',
      vi: 'Kỳ thủ cờ tướng, Cần thủ',
      id: 'Pemain Shogi, Pemancing'
    }
  },
  {
    type: 'Type6',
    emoji: '🐌',
    range: [351, 9999],
    title: {
      ko: '렉 걸린 인터넷 익스플로러',
      en: 'Lagging Internet Explorer',
      ja: 'ラグいInternet Explorer',
      zh: '卡顿的Internet Explorer',
      'zh-TW': '卡頓的Internet Explorer',
      vi: 'Internet Explorer bị lag',
      id: 'Internet Explorer Ngelag'
    },
    description: {
      ko: '"여보세요? 거기 누구 없나요?" 심각합니다. 신호등이 초록불로 바뀌고 나서 뒤차가 경적을 울려야 출발하시겠군요. 반응속도보다는 \'예측\'으로 살아가야 할 것 같습니다. 오늘 하루는 푹 쉬고 내일 다시 도전해 보세요. 피로가 원인일 수 있습니다.',
      en: '"Hello? Anyone there?" It\'s serious. You\'d probably start driving only after the car behind honks when the light turns green. You might need to live by \'prediction\' rather than reaction speed. Get some rest today and try again tomorrow. Fatigue might be the cause.',
      ja: '「もしもし？そこに誰かいませんか？」深刻です。信号が青に変わってから後ろの車がクラクションを鳴らしてやっと出発しそうですね。反応速度よりは「予測」で生きていく必要がありそうです。今日はゆっくり休んで明日また挑戦してみてください。疲労が原因かもしれません。',
      zh: '“喂？有人在吗？”很严重。红绿灯变绿后，估计要等后面的车按喇叭你才会出发。与其靠反应速度，不如靠“预测”生活。今天好好休息，明天再来挑战吧。可能是疲劳的原因。',
      'zh-TW': '“喂？有人在嗎？”很嚴重。紅綠燈變綠後，估計要等後面的車按喇叭你才會出發。與其靠反應速度，不如靠“預測”生活。今天好好休息，明天再來挑戰吧。可能是疲勞的原因。',
      vi: '"Alo? Có ai ở đó không?" Nghiêm trọng đấy. Bạn có lẽ sẽ chỉ bắt đầu lái xe sau khi xe phía sau bóp còi khi đèn chuyển sang màu xanh. Bạn có thể cần phải sống bằng \'dự đoán\' hơn là tốc độ phản ứng. Hãy nghỉ ngơi hôm nay và thử lại vào ngày mai. Mệt mỏi có thể là nguyên nhân.',
      id: '"Halo? Ada orang di sana?" Ini serius. Anda mungkin baru akan mulai mengemudi setelah mobil di belakang membunyikan klakson saat lampu berubah hijau. Anda mungkin perlu hidup dengan \'prediksi\' daripada kecepatan reaksi. Istirahatlah hari ini dan coba lagi besok. Kelelahan mungkin menjadi penyebabnya.'
    },
    survivalInstinct: {
      ko: '하위 5% (로딩 중...)',
      en: 'Bottom 5% (Loading...)',
      ja: '下位5%（ロード中...）',
      zh: '下位5%（加载中...）',
      'zh-TW': '下位5%（加載中...）',
      vi: 'Dưới 5% (Đang tải...)',
      id: 'Bawah 5% (Memuat...)'
    },
    advice: {
      ko: '나무늘보 사육사',
      en: 'Sloth Zookeeper',
      ja: 'ナマケモノの飼育員',
      zh: '树懒饲养员',
      'zh-TW': '樹懶飼養員',
      vi: 'Người chăm sóc lười',
      id: 'Penjaga Kebun Binatang Kukang'
    }
  }
];

export function calculatePhase2ReactionTimeResult(averageMs: number): Phase2ReactionTimeResult {
  return PHASE2_REACTION_TIME_RESULTS.find(r => averageMs >= r.range[0] && averageMs <= r.range[1]) || PHASE2_REACTION_TIME_RESULTS[PHASE2_REACTION_TIME_RESULTS.length - 1];
}

