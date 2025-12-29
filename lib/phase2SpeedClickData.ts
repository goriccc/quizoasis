// 1to25: 빛의 속도 (순발력 & 동체시력 측정) 테스트 데이터

export interface Phase2SpeedClickResult {
  type: string;
  emoji: string;
  range: [number, number]; // [minSeconds, maxSeconds]
  title: {
    ko: string;
    en: string;
    ja: string;
    'zh-CN': string;
    'zh-TW': string;
    vi: string;
    id: string;
  };
  description: {
    ko: string;
    en: string;
    ja: string;
    'zh-CN': string;
    'zh-TW': string;
    vi: string;
    id: string;
  };
  percentile: {
    ko: string;
    en: string;
    ja: string;
    'zh-CN': string;
    'zh-TW': string;
    vi: string;
    id: string;
  };
  recommendation: {
    ko: string;
    en: string;
    ja: string;
    'zh-CN': string;
    'zh-TW': string;
    vi: string;
    id: string;
  };
}

export const PHASE2_SPEED_CLICK_RESULTS: Phase2SpeedClickResult[] = [
  {
    type: 'Type1',
    emoji: '⚡',
    range: [0, 7.99],
    title: {
      ko: '빛의 속도, 더 플래시',
      en: 'Speed of Light, The Flash',
      ja: '光の速度、ザ・フラッシュ',
      'zh-CN': '光速，闪电侠',
      'zh-TW': '光速，閃電俠',
      vi: 'Tốc độ ánh sáng, The Flash',
      id: 'Kecepatan Cahaya, The Flash'
    },
    description: {
      ko: '사람의 눈으로 쫓을 수 없는 속도입니다. 와... 이게 가능한가요? 당신의 동체 시력과 반사 신경은 올림픽 국가대표급입니다. 눈으로 숫자를 찾기도 전에 손이 먼저 반응하는 경지입니다. 이 기록을 캡처해서 자랑하세요. 아무도 못 이깁니다.',
      en: 'A speed that human eyes cannot follow. Wow... is this even possible? Your dynamic vision and reflexes are at Olympic national team level. Your hand reacts before your eyes even find the number. Capture this record and show it off. No one can beat it.',
      ja: '人間の目では追えない速度です。わあ...これが可能なのか？あなたの動体視力と反射神経はオリンピック代表級です。目で数字を見つける前に手が先に反応する境地です。この記録をキャプチャして自慢してください。誰も勝てません。',
      'zh-CN': '这是人类眼睛无法跟上的速度。哇...这可能吗？你的动态视力和反射神经达到奥运会国家队水平。你的手在眼睛找到数字之前就已经反应了。截图这个记录并炫耀吧。没人能超越。',
      'zh-TW': '這是人類眼睛無法跟上的速度。哇...這可能嗎？你的動態視力和反射神經達到奧運會國家隊水平。你的手在眼睛找到數字之前就已經反應了。截圖這個記錄並炫耀吧。沒人能超越。',
      vi: 'Tốc độ mà mắt người không thể theo kịp. Wow... điều này có thể không? Thị lực động và phản xạ của bạn ở cấp độ đội tuyển Olympic. Tay bạn phản ứng trước khi mắt tìm thấy số. Chụp màn hình kỷ lục này và khoe đi. Không ai có thể đánh bại.',
      id: 'Kecepatan yang tidak bisa diikuti mata manusia. Wow... apakah ini mungkin? Penglihatan dinamis dan refleks Anda setara dengan tim nasional Olimpiade. Tangan Anda bereaksi sebelum mata menemukan angka. Tangkap rekaman ini dan pamerkan. Tidak ada yang bisa mengalahkannya.'
    },
    percentile: {
      ko: '상위: 1% (신계)',
      en: 'Top: 1% (Divine)',
      ja: '上位：1%（神界）',
      'zh-CN': '上位：1%（神界）',
      'zh-TW': '上位：1%（神界）',
      vi: 'Top: 1% (Thần giới)',
      id: 'Top: 1% (Dewa)'
    },
    recommendation: {
      ko: 'F1 레이서, 프로게이머',
      en: 'F1 racer, pro gamer',
      ja: 'F1レーサー、プロゲーマー',
      'zh-CN': 'F1赛车手，职业玩家',
      'zh-TW': 'F1賽車手，職業玩家',
      vi: 'Tay đua F1, game thủ chuyên nghiệp',
      id: 'Pembalap F1, gamer profesional'
    }
  },
  {
    type: 'Type2',
    emoji: '🎮',
    range: [8.0, 11.99],
    title: {
      ko: '신들린 손가락, 프로게이머',
      en: 'Divine Fingers, Pro Gamer',
      ja: '神がかった指、プロゲーマー',
      'zh-CN': '神之手指，职业玩家',
      'zh-TW': '神之手指，職業玩家',
      vi: 'Ngón tay thần thánh, Game thủ chuyên nghiệp',
      id: 'Jari Dewa, Gamer Profesional'
    },
    description: {
      ko: '피지컬이 장난 아니시네요! 엄청납니다! 일반인들 사이에서는 압도적인 1등을 할 수 있는 실력입니다. 주변 시야가 넓어서 다음 숫자를 미리 파악하는 능력이 탁월합니다. 게임할 때 "피지컬 좋다"는 소리 좀 들으시죠?',
      en: 'Your physical skills are no joke! Amazing! You have the skills to overwhelmingly take first place among ordinary people. Your peripheral vision is wide, giving you excellent ability to identify the next number in advance. You probably hear "good physical skills" when gaming, right?',
      ja: 'フィジカルが半端ないですね！すごいです！一般人の中では圧倒的な1位を取れる実力です。周辺視野が広く、次の数字を事前に把握する能力が卓越しています。ゲームする時「フィジカルいい」という声を聞きますよね？',
      'zh-CN': '你的身体素质不是开玩笑的！太厉害了！在普通人中你拥有压倒性的第一实力。你的周边视野很广，能够提前识别下一个数字的能力非常出色。玩游戏时应该经常听到"身体素质好"的称赞吧？',
      'zh-TW': '你的身體素質不是開玩笑的！太厲害了！在普通人中你擁有壓倒性的第一實力。你的周邊視野很廣，能夠提前識別下一個數字的能力非常出色。玩遊戲時應該經常聽到"身體素質好"的稱讚吧？',
      vi: 'Kỹ năng thể chất của bạn không phải chuyện đùa! Tuyệt vời! Bạn có kỹ năng để áp đảo giành vị trí số 1 trong số những người bình thường. Tầm nhìn ngoại vi của bạn rộng, khả năng xác định số tiếp theo trước rất xuất sắc. Bạn có nghe "kỹ năng thể chất tốt" khi chơi game không?',
      id: 'Keterampilan fisik Anda bukan main! Luar biasa! Anda memiliki keterampilan untuk mendominasi peringkat pertama di antara orang biasa. Penglihatan periferal Anda luas, kemampuan mengidentifikasi angka berikutnya sebelumnya sangat luar biasa. Anda mungkin mendengar "keterampilan fisik bagus" saat bermain game, kan?'
    },
    percentile: {
      ko: '상위: 10% (다이아몬드)',
      en: 'Top: 10% (Diamond)',
      ja: '上位：10%（ダイヤモンド）',
      'zh-CN': '上位：10%（钻石）',
      'zh-TW': '上位：10%（鑽石）',
      vi: 'Top: 10% (Kim cương)',
      id: 'Top: 10% (Berlian)'
    },
    recommendation: {
      ko: 'FPS 게임 랭커',
      en: 'FPS game ranker',
      ja: 'FPSゲームランカー',
      'zh-CN': 'FPS游戏排名玩家',
      'zh-TW': 'FPS遊戲排名玩家',
      vi: 'Xếp hạng game FPS',
      id: 'Peringkat game FPS'
    }
  },
  {
    type: 'Type3',
    emoji: '🐱',
    range: [12.0, 15.99],
    title: {
      ko: '민첩한 고양이',
      en: 'Agile Cat',
      ja: '敏捷な猫',
      'zh-CN': '敏捷的猫',
      'zh-TW': '敏捷的貓',
      vi: 'Mèo nhanh nhẹn',
      id: 'Kucing Lincah'
    },
    description: {
      ko: '평균보다 훨씬 빠릅니다! 상당히 빠른 편입니다. 20대 평균 기록보다 상위권에 속합니다. 집중력이 좋고 손놀림이 경쾌하시군요. 조금만 더 연습하면 프로게이머 등급(Type 2)으로 올라갈 수 있습니다.',
      en: 'Much faster than average! You\'re quite fast. You\'re in the upper ranks compared to the average record for people in their 20s. You have good concentration and nimble hands. With a bit more practice, you can rise to pro gamer level (Type 2).',
      ja: '平均よりずっと速いです！かなり速い方です。20代の平均記録より上位に属します。集中力が良く、手の動きが軽快ですね。もう少し練習すればプロゲーマー級（Type 2）に上がれます。',
      'zh-CN': '比平均快得多！你相当快。你属于20多岁平均记录的上位。你专注力好，手部动作轻快。只要再练习一点，就能提升到职业玩家等级（Type 2）。',
      'zh-TW': '比平均快得多！你相當快。你屬於20多歲平均記錄的上位。你專注力好，手部動作輕快。只要再練習一點，就能提升到職業玩家等級（Type 2）。',
      vi: 'Nhanh hơn trung bình rất nhiều! Bạn khá nhanh. Bạn thuộc hàng trên so với kỷ lục trung bình của những người ở độ tuổi 20. Bạn có khả năng tập trung tốt và tay nhanh nhẹn. Chỉ cần luyện tập thêm một chút, bạn có thể lên cấp game thủ chuyên nghiệp (Type 2).',
      id: 'Jauh lebih cepat dari rata-rata! Anda cukup cepat. Anda berada di peringkat atas dibandingkan dengan rekor rata-rata untuk orang berusia 20-an. Anda memiliki konsentrasi yang baik dan tangan yang lincah. Dengan sedikit latihan lagi, Anda bisa naik ke level gamer profesional (Type 2).'
    },
    percentile: {
      ko: '상위: 30% (골드)',
      en: 'Top: 30% (Gold)',
      ja: '上位：30%（ゴールド）',
      'zh-CN': '上位：30%（黄金）',
      'zh-TW': '上位：30%（黃金）',
      vi: 'Top: 30% (Vàng)',
      id: 'Top: 30% (Emas)'
    },
    recommendation: {
      ko: '배드민턴, 탁구',
      en: 'Badminton, table tennis',
      ja: 'バドミントン、卓球',
      'zh-CN': '羽毛球，乒乓球',
      'zh-TW': '羽毛球，乒乓球',
      vi: 'Cầu lông, bóng bàn',
      id: 'Bulu tangkis, tenis meja'
    }
  },
  {
    type: 'Type4',
    emoji: '🏃',
    range: [16.0, 20.99],
    title: {
      ko: '평범한 지구인',
      en: 'Average Earthling',
      ja: '平凡な地球人',
      'zh-CN': '平凡的地球人',
      'zh-TW': '平凡的地球人',
      vi: 'Người Trái đất bình thường',
      id: 'Manusia Bumi Rata-rata'
    },
    description: {
      ko: '딱 평균입니다. 인간적이네요. 대한민국 성인 평균 기록입니다. 처음엔 잘 나가다가 중간에 숫자 하나가 안 보여서 "어? 13 어디 갔어!" 하고 버벅거렸을 확률이 높습니다. 그 위기만 넘겼어도 기록이 훨씬 좋았을 거예요!',
      en: 'Exactly average. Very human. This is the average record for Korean adults. You probably started well but got stuck in the middle when you couldn\'t find a number, thinking "Huh? Where did 13 go!" If you had just gotten past that crisis, your record would have been much better!',
      ja: 'ちょうど平均です。人間的ですね。大韓民国成人の平均記録です。最初はうまくいきましたが、途中で数字が1つ見えなくて「え？13どこ行った！」とつまずいた確率が高いです。その危機さえ乗り越えれば記録がずっと良かったでしょう！',
      'zh-CN': '正好是平均。很人性化。这是韩国成年人的平均记录。你可能一开始很顺利，但中间有一个数字找不到，想着"咦？13去哪了！"而卡住了。只要度过那个危机，记录就会好得多！',
      'zh-TW': '正好是平均。很人性化。這是韓國成年人的平均記錄。你可能一開始很順利，但中間有一個數字找不到，想著"咦？13去哪了！"而卡住了。只要度過那個危機，記錄就會好得多！',
      vi: 'Đúng mức trung bình. Rất con người. Đây là kỷ lục trung bình của người trưởng thành Hàn Quốc. Bạn có thể đã bắt đầu tốt nhưng bị kẹt ở giữa khi không tìm thấy một số, nghĩ "Ồ? 13 đi đâu rồi!" Nếu bạn chỉ vượt qua khủng hoảng đó, kỷ lục của bạn sẽ tốt hơn nhiều!',
      id: 'Tepat rata-rata. Sangat manusiawi. Ini adalah rekor rata-rata untuk orang dewasa Korea. Anda mungkin mulai dengan baik tetapi terjebak di tengah ketika tidak menemukan angka, berpikir "Hah? 13 kemana!" Jika Anda hanya melewati krisis itu, rekor Anda akan jauh lebih baik!'
    },
    percentile: {
      ko: '상위: 50% (실버)',
      en: 'Top: 50% (Silver)',
      ja: '上位：50%（シルバー）',
      'zh-CN': '上位：50%（白银）',
      'zh-TW': '上位：50%（白銀）',
      vi: 'Top: 50% (Bạc)',
      id: 'Top: 50% (Perak)'
    },
    recommendation: {
      ko: '사무직, 운전병',
      en: 'Office worker, driver',
      ja: '事務職、運転手',
      'zh-CN': '办公室工作，司机',
      'zh-TW': '辦公室工作，司機',
      vi: 'Nhân viên văn phòng, tài xế',
      id: 'Pekerja kantor, sopir'
    }
  },
  {
    type: 'Type5',
    emoji: '🐢',
    range: [21.0, 29.99],
    title: {
      ko: '느긋한 거북이',
      en: 'Leisurely Turtle',
      ja: 'のんびりしたカメ',
      'zh-CN': '悠闲的乌龟',
      'zh-TW': '悠閒的烏龜',
      vi: 'Rùa thong thả',
      id: 'Kura-kura Santai'
    },
    description: {
      ko: '천천히... 침착하게... 꼼꼼한 성격이시군요. 빨리 누르는 것보다 틀리지 않는 것에 집중하셨나요? 아니면 숫자가 눈에 잘 안 들어오나요? 눈 운동을 좀 하고 다시 도전해보세요. 승부욕을 조금 더 태워야 합니다!',
      en: 'Slowly... calmly... You have a meticulous personality. Did you focus on not making mistakes rather than pressing quickly? Or do numbers not come into your eyes well? Do some eye exercises and try again. You need to light a bit more competitive spirit!',
      ja: 'ゆっくり...落ち着いて...几帳面な性格ですね。早く押すことより間違えないことに集中しましたか？それとも数字が目に入りにくいですか？目の運動をしてから再挑戦してみてください。勝負欲をもう少し燃やす必要があります！',
      'zh-CN': '慢慢来...冷静...你性格细致。你是否专注于不出错而不是快速点击？或者数字不容易进入你的视线？做一些眼部运动再挑战吧。你需要点燃更多的竞争精神！',
      'zh-TW': '慢慢來...冷靜...你性格細緻。你是否專注於不出錯而不是快速點擊？或者數字不容易進入你的視線？做一些眼部運動再挑戰吧。你需要點燃更多的競爭精神！',
      vi: 'Từ từ... bình tĩnh... Bạn có tính cách cẩn thận. Bạn có tập trung vào việc không mắc lỗi thay vì nhấn nhanh không? Hay số không dễ nhìn thấy? Làm một số bài tập mắt và thử lại. Bạn cần thắp lên tinh thần cạnh tranh một chút nữa!',
      id: 'Perlahan... tenang... Anda memiliki kepribadian yang teliti. Apakah Anda fokus pada tidak membuat kesalahan daripada menekan dengan cepat? Atau apakah angka tidak mudah terlihat? Lakukan beberapa latihan mata dan coba lagi. Anda perlu menyalakan semangat kompetitif sedikit lagi!'
    },
    percentile: {
      ko: '상위: 80% (브론즈)',
      en: 'Top: 80% (Bronze)',
      ja: '上位：80%（ブロンズ）',
      'zh-CN': '上位：80%（青铜）',
      'zh-TW': '上位：80%（青銅）',
      vi: 'Top: 80% (Đồng)',
      id: 'Top: 80% (Perunggu)'
    },
    recommendation: {
      ko: '장기, 바둑',
      en: 'Go, chess',
      ja: '囲碁、将棋',
      'zh-CN': '围棋，象棋',
      'zh-TW': '圍棋，象棋',
      vi: 'Cờ vây, cờ vua',
      id: 'Go, catur'
    }
  },
  {
    type: 'Type6',
    emoji: '🦥',
    range: [30.0, 999],
    title: {
      ko: '여유로운 나무늘보',
      en: 'Leisurely Sloth',
      ja: 'のんびりしたナマケモノ',
      'zh-CN': '悠闲的树懒',
      'zh-TW': '悠閒的樹懶',
      vi: 'Con lười thong thả',
      id: 'Kungkang Santai'
    },
    description: {
      ko: '숫자 숨바꼭질 하시나요? 혹시 1부터 25까지 숫자를 세면서 찾으셨나요? 세월아 네월아~ 여유가 넘칩니다. 급할 것 없는 당신의 느긋한 성격이 반영된 기록입니다. 친구랑 내기했다면 밥값은 당신이 내야겠군요.',
      en: 'Are you playing hide and seek with numbers? Did you count from 1 to 25 while searching? Time flies~ You have plenty of leisure. This record reflects your relaxed personality that\'s in no hurry. If you made a bet with a friend, you\'d have to pay for the meal.',
      ja: '数字のかくれんぼをしていますか？もしかして1から25まで数字を数えながら探しましたか？月日が流れる～余裕が溢れています。急ぐことのないあなたののんびりした性格が反映された記録です。友達と賭けをしたなら、食事代はあなたが払わなければなりませんね。',
      'zh-CN': '你在和数字玩捉迷藏吗？你是否从1数到25地寻找？岁月如流~你非常悠闲。这个记录反映了你不急不躁的悠闲性格。如果你和朋友打赌，你得请客了。',
      'zh-TW': '你在和數字玩捉迷藏嗎？你是否從1數到25地尋找？歲月如流~你非常悠閒。這個記錄反映了你不急不躁的悠閒性格。如果你和朋友打賭，你得請客了。',
      vi: 'Bạn đang chơi trốn tìm với số không? Bạn có đếm từ 1 đến 25 khi tìm kiếm không? Thời gian trôi qua~ Bạn rất thong thả. Kỷ lục này phản ánh tính cách thong thả không vội vàng của bạn. Nếu bạn đặt cược với bạn, bạn sẽ phải trả tiền ăn.',
      id: 'Apakah Anda bermain petak umpet dengan angka? Apakah Anda menghitung dari 1 hingga 25 sambil mencari? Waktu berlalu~ Anda sangat santai. Rekor ini mencerminkan kepribadian santai Anda yang tidak terburu-buru. Jika Anda bertaruh dengan teman, Anda harus membayar makan.'
    },
    percentile: {
      ko: '상위: 99% (심해)',
      en: 'Top: 99% (Deep Sea)',
      ja: '上位：99%（深海）',
      'zh-CN': '上位：99%（深海）',
      'zh-TW': '上位：99%（深海）',
      vi: 'Top: 99% (Biển sâu)',
      id: 'Top: 99% (Laut dalam)'
    },
    recommendation: {
      ko: '낚시, 명상',
      en: 'Fishing, meditation',
      ja: '釣り、瞑想',
      'zh-CN': '钓鱼，冥想',
      'zh-TW': '釣魚，冥想',
      vi: 'Câu cá, thiền định',
      id: 'Memancing, meditasi'
    }
  }
];

// 5x5 그리드 생성 함수 (1~25 무작위 배치)
export function generateGrid(): number[] {
  const numbers = Array.from({ length: 25 }, (_, i) => i + 1);
  // Fisher-Yates shuffle
  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }
  return numbers;
}

// 결과 계산 함수 (시간 기준)
export function calculatePhase2SpeedClickResult(timeInSeconds: number): Phase2SpeedClickResult {
  return PHASE2_SPEED_CLICK_RESULTS.find(r => timeInSeconds >= r.range[0] && timeInSeconds <= r.range[1]) || PHASE2_SPEED_CLICK_RESULTS[PHASE2_SPEED_CLICK_RESULTS.length - 1];
}

// 시간 포맷 함수 (초.밀리초)
export function formatTime(seconds: number): string {
  const wholeSeconds = Math.floor(seconds);
  const milliseconds = Math.floor((seconds - wholeSeconds) * 100);
  return `${wholeSeconds}.${milliseconds.toString().padStart(2, '0')}`;
}


