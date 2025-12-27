export interface Phase2ColorSurvivalResult {
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
  survivalInstinct: {
    ko: string;
    en: string;
    ja: string;
    zh: string;
    'zh-TW': string;
    vi: string;
    id: string;
  };
  advice: {
    ko: string;
    en: string;
    ja: string;
    zh: string;
    'zh-TW': string;
    vi: string;
    id: string;
  };
}

export const PHASE2_COLOR_SURVIVAL_RESULTS: Phase2ColorSurvivalResult[] = [
  {
    type: 'Type1',
    emoji: '🐟',
    range: [0, 9],
    title: {
      ko: '3초 컷, 붕어 기억력',
      en: '3-Second Memory, Goldfish',
      ja: '3秒の記憶力、金魚',
      zh: '3秒记忆，金鱼',
      'zh-TW': '3秒記憶，金魚',
      vi: 'Trí nhớ 3 giây, Cá vàng',
      id: 'Ingatan 3 Detik, Ikan Mas'
    },
    description: {
      ko: '"어? 시작 버튼 눌렀는데 끝났어요." 순식간에 타임 오버! 초반에 시간을 벌어두지 못하고 광탈하셨군요. 눈보다 손이 먼저 나가서 실수를 연발했을 가능성이 큽니다.',
      en: '"Huh? I pressed start and it ended." Game over in a flash! You couldn\'t save time early on and got eliminated immediately. Likely, your hands moved faster than your eyes.',
      ja: '「え？スタートボタン押したのに終わりました。」瞬く間にタイムオーバー！序盤で時間を稼げずに脱落してしまいましたね。目より先に手が動いてミスを連発した可能性が高いです。',
      zh: '“咦？刚按开始就结束了。”瞬间时间耗尽！看来你没能在前期积累时间就光速淘汰了。很可能是手比眼快，导致连续失误。',
      'zh-TW': '「咦？剛按開始就結束了。」瞬間時間耗盡！看來你沒能在前期積累時間就光速淘汰了。很可能是手比眼快，導致連續失誤。',
      vi: '"Hả? Tôi vừa nhấn bắt đầu thì đã kết thúc." Hết giờ trong nháy mắt! Bạn đã không tiết kiệm được thời gian từ sớm và bị loại ngay lập tức. Có vẻ như tay bạn nhanh hơn mắt.',
      id: '"Hah? Saya menekan mulai dan itu berakhir." Game over dalam sekejap! Anda tidak bisa menghemat waktu di awal dan langsung tereliminasi. Kemungkinan besar, tangan Anda bergerak lebih cepat daripada mata Anda.'
    },
    advice: {
      ko: '릴스/쇼츠 그만 보고 눈 휴식하기',
      en: 'Stop watching Reels/Shorts and rest your eyes',
      ja: 'リール/ショート動画を見るのをやめて目を休める',
      zh: '停止刷短视频，让眼睛休息一下',
      'zh-TW': '停止刷短視頻，讓眼睛休息一下',
      vi: 'Ngừng xem Reels/Shorts và để mắt nghỉ ngơi',
      id: 'Berhenti menonton Reels/Shorts dan istirahatkan mata Anda'
    },
    survivalInstinct: {
      ko: '하위 5%',
      en: 'Bottom 5%',
      ja: '下位5%',
      zh: '下位5%',
      'zh-TW': '下位5%',
      vi: 'Dưới 5%',
      id: 'Bawah 5%'
    }
  },
  {
    type: 'Type2',
    emoji: '🕊️',
    range: [10, 19],
    title: {
      ko: '헐떡이는 비둘기',
      en: 'Panting Pigeon',
      ja: '息切れする鳩',
      zh: '气喘吁吁的鸽子',
      'zh-TW': '氣喘吁吁的鴿子',
      vi: 'Chim bồ câu thở hổn hển',
      id: 'Merpati Terengah-engah'
    },
    description: {
      ko: '"시간이... 시간이 부족해!" 초반 위기는 넘겼지만, 그리드가 4x4로 넘어가자마자 당황하셨군요. 색감이 나쁜 건 아니지만, 판단 속도가 조금 느린 편입니다.',
      en: '"Time... not enough time!" You survived the early crisis, but panicked as soon as the grid hit 4x4. Your color sense isn\'t bad, but your judgment speed is a bit slow.',
      ja: '「時間が…時間が足りない！」序盤の危機は乗り越えましたが、グリッドが4x4になった途端に慌ててしまいましたね。色彩感覚が悪いわけではありませんが、判断速度が少し遅いようです。',
      zh: '“时间……时间不够！”雖然度过了初期的危机，但网格一变成4x4你就慌了。你的色感不差，但判断速度稍慢。',
      'zh-TW': '“時間……時間不夠！”雖然度過了初期的危機，但網格一變成4x4你就慌了。你的色感不差，但判斷速度稍慢。',
      vi: '"Thời gian... không đủ thời gian!" Bạn đã vượt qua khủng hoảng ban đầu, nhưng hoảng loạn ngay khi lưới đạt 4x4. Cảm giác màu sắc của bạn không tệ, nhưng tốc độ phán đoán hơi chậm.',
      id: '"Waktu... tidak cukup waktu!" Anda selamat dari krisis awal, tetapi panik begitu grid mencapai 4x4. Indra warna Anda tidak buruk, tetapi kecepatan penilaian Anda sedikit lambat.'
    },
    advice: {
      ko: '동체 시력 훈련',
      en: 'Dynamic Visual Acuity Training',
      ja: '動体視力トレーニング',
      zh: '动态视力训练',
      'zh-TW': '動態視力訓練',
      vi: 'Rèn luyện thị lực động',
      id: 'Pelatihan Ketajaman Visual Dinamis'
    },
    survivalInstinct: {
      ko: '하위 20%',
      en: 'Bottom 20%',
      ja: '下位20%',
      zh: '下位20%',
      'zh-TW': '下位20%',
      vi: 'Dưới 20%',
      id: 'Bawah 20%'
    }
  },
  {
    type: 'Type3',
    emoji: '🐱',
    range: [20, 29],
    title: {
      ko: '눈치 빠른 고양이',
      en: 'Quick-Witted Cat',
      ja: '目端の利く猫',
      zh: '眼疾手快的猫',
      'zh-TW': '眼疾手快的貓',
      vi: 'Mèo nhanh trí',
      id: 'Kucing Cerdik'
    },
    description: {
      ko: '"평균 이상은 합니다. 나쁘지 않네요." 적당한 속도와 적당한 정확도로 무난하게 생존했습니다. 하지만 레벨 20을 넘어가면서 미세해진 색 차이에 눈이 피로해져 포기하셨군요.',
      en: '"Above average. Not bad." You survived smoothly with moderate speed and accuracy. However, past level 20, the subtle color differences strained your eyes and you gave up.',
      ja: '「平均以上です。悪くないですね。」適度な速度と正確さで無難に生き残りました。しかし、レベル20を超えて色が微妙に変わると目が疲れて諦めてしまいましたね。',
      zh: '“高于平均水平。还不赖。”你凭借适当的速度和准确度顺利生存。但是，超过20级后，微小的色差让你的眼睛疲劳，最终放弃。',
      'zh-TW': '“高於平均水平。還不賴。”你憑藉適當的速度和準確度順利生存。但是，超過20級後，微小的色差讓你的眼睛疲勞，最終放棄。',
      vi: '"Trên trung bình. Không tệ." Bạn đã sống sót suôn sẻ với tốc độ và độ chính xác vừa phải. Tuy nhiên, qua cấp độ 20, sự khác biệt màu sắc tinh tế làm mỏi mắt bạn và bạn đã bỏ cuộc.',
      id: '"Di atas rata-rata. Tidak buruk." Anda bertahan dengan lancar dengan kecepatan dan akurasi sedang. Namun, melewati level 20, perbedaan warna yang halus membuat mata Anda tegang dan Anda menyerah.'
    },
    advice: {
      ko: '루테인 챙겨 먹기',
      en: 'Take Lutein supplements',
      ja: 'ルテインを摂取する',
      zh: '补充叶黄素',
      'zh-TW': '補充葉黃素',
      vi: 'Bổ sung Lutein',
      id: 'Minum suplemen Lutein'
    },
    survivalInstinct: {
      ko: '상위 50% (평균)',
      en: 'Top 50% (Average)',
      ja: '上位50%（平均）',
      zh: '上位50%（平均）',
      'zh-TW': '上位50%（平均）',
      vi: 'Trên 50% (Trung bình)',
      id: 'Atas 50% (Rata-rata)'
    }
  },
  {
    type: 'Type4',
    emoji: '🦅',
    range: [30, 39],
    title: {
      ko: '사냥하는 독수리',
      en: 'Hunting Eagle',
      ja: '狩りをする鷲',
      zh: '捕猎的老鹰',
      'zh-TW': '捕獵的老鷹',
      vi: 'Đại bàng săn mồi',
      id: 'Elang Pemburu'
    },
    description: {
      ko: '"오~ 꽤 오래 버티시는데요?" 남다른 눈썰미와 순발력을 가졌습니다. 남들이 "다 똑같은 색 아냐?"라고 할 때 혼자서 정답을 콕콕 집어내는 능력자입니다.',
      en: '"Oh~ You lasted quite a while?" You have exceptional observation and reflexes. When others say "Aren\'t they all the same color?", you pick out the answer alone.',
      ja: '「お〜結構粘りますね？」並外れた観察眼と瞬発力を持っています。他の人が「全部同じ色じゃない？」と言う時に、一人で正解を次々と当てていく能力者です。',
      zh: '“哦~坚持了挺久嘛？”你拥有非凡的眼力和爆发力。当别人说“不都是一种颜色吗？”时，你是那个能独自指出正确答案的能力者。',
      'zh-TW': '“哦~堅持了挺久嘛？”你擁有非凡的眼力和爆發力。當別人說“不都是一種顏色嗎？”時，你是那個能獨自指出正確答案的能力者。',
      vi: '"Ồ~ Bạn trụ được khá lâu đấy?" Bạn có khả năng quan sát và phản xạ đặc biệt. Khi người khác nói "Chẳng phải tất cả đều cùng một màu sao?", bạn là người duy nhất chọn ra câu trả lời.',
      id: '"Oh~ Kamu bertahan cukup lama?" Anda memiliki pengamatan dan refleks yang luar biasa. Ketika orang lain berkata "Bukankah semuanya warnanya sama?", Anda memilih jawabannya sendiri.'
    },
    advice: {
      ko: '스나이퍼, 사진기자',
      en: 'Sniper, Photojournalist',
      ja: 'スナイパー、報道カメラマン',
      zh: '狙击手，摄影记者',
      'zh-TW': '狙擊手，攝影記者',
      vi: 'Lính bắn tỉa, Phóng viên ảnh',
      id: 'Penembak Jitu, Jurnalis Foto'
    },
    survivalInstinct: {
      ko: '상위 20%',
      en: 'Top 20%',
      ja: '上位20%',
      zh: '上位20%',
      'zh-TW': '上位20%',
      vi: 'Trên 20%',
      id: 'Atas 20%'
    }
  },
  {
    type: 'Type5',
    emoji: '🦉',
    range: [40, 49],
    title: {
      ko: '각성한 올빼미',
      en: 'Awakened Owl',
      ja: '覚醒したフクロウ',
      zh: '觉醒的猫头鹰',
      'zh-TW': '覺醒的貓頭鷹',
      vi: 'Cú thức tỉnh',
      id: 'Burung Hantu Terbangun'
    },
    description: {
      ko: '"기계세요? 인간의 반응 속도가 아닙니다." 엄청난 집중력입니다! 시간이 줄어드는 압박감 속에서도 흔들리지 않는 멘탈과 동체 시력을 가졌습니다. 미세한 픽셀 차이까지 잡아내는 당신은 진정한 \'절대색감\'의 소유자입니다.',
      en: '"Are you a machine? That\'s not human reaction speed." Incredible concentration! You possess unshakable mental strength and dynamic vision even under time pressure. You are a true master of \'Absolute Color\'.',
      ja: '「機械ですか？人間の反応速度ではありません。」凄まじい集中力です！時間が減っていくプレッシャーの中でも揺らぐことのないメンタルと動体視力を持っています。微細なピクセルの違いまで捉えるあなたは真の「絶対色感」の持ち主です。',
      zh: '“你是机器吗？这不是人类的反应速度。”惊人的专注力！即使在时间减少的压力下，你也拥有不动摇的心态和动态视力。能捕捉到微小像素差异的你，是真正的“绝对色感”拥有者。',
      'zh-TW': '“你是機器嗎？這不是人類的反應速度。”驚人的專注力！即使在時間減少的壓力下，你也擁有不動搖的心態和動態視力。能捕捉到微小像素差異的你，是真正的“絕對色感”擁有者。',
      vi: '"Bạn là máy à? Đó không phải tốc độ phản ứng của con người." Sự tập trung đáng kinh ngạc! Bạn sở hữu tinh thần thép và thị lực động ngay cả dưới áp lực thời gian. Bạn là bậc thầy thực sự của \'Cảm giác màu tuyệt đối\'.',
      id: '"Apakah Anda mesin? Itu bukan kecepatan reaksi manusia." Konsentrasi yang luar biasa! Anda memiliki kekuatan mental yang tak tergoyahkan dan penglihatan dinamis bahkan di bawah tekanan waktu. Anda adalah master sejati \'Warna Mutlak\'.'
    },
    advice: {
      ko: '프로게이머, 전투기 조종사',
      en: 'Pro Gamer, Fighter Pilot',
      ja: 'プロゲーマー、戦闘機パイロット',
      zh: '职业玩家，战斗机飞行员',
      'zh-TW': '職業玩家，戰鬥機飛行員',
      vi: 'Game thủ chuyên nghiệp, Phi công chiến đấu',
      id: 'Gamer Pro, Pilot Pesawat Tempur'
    },
    survivalInstinct: {
      ko: '상위 5%',
      en: 'Top 5%',
      ja: '上位5%',
      zh: '上位5%',
      'zh-TW': '上位5%',
      vi: 'Trên 5%',
      id: 'Atas 5%'
    }
  },
  {
    type: 'Type6',
    emoji: '🔮',
    range: [50, 9999],
    title: {
      ko: '시간을 지배하는 자, 닥터 스트레인지',
      en: 'Doctor Strange, Master of Time',
      ja: '時間を支配する者、ドクター・ストレンジ',
      zh: '时间支配者，奇异博士',
      'zh-TW': '時間支配者，奇異博士',
      vi: 'Doctor Strange, Bậc thầy thời gian',
      id: 'Doctor Strange, Penguasa Waktu'
    },
    description: {
      ko: '"도대체 언제 끝나나요? 끝이 없네..." 당신은 시간을 가지고 놀고 있습니다. 제작자가 의도한 난이도를 파괴해버린 \'색감의 신\'입니다. 아마 눈에서 레이저가 나오고 있을지도 모릅니다.',
      en: '"When does it end? It never ends..." You are toying with time. You are a \'God of Color\' who has destroyed the difficulty intended by the creator. Lasers might be shooting out of your eyes.',
      ja: '「一体いつ終わるんですか？終わりがないですね...」あなたは時間を弄んでいます。製作者が意図した難易度を破壊してしまった「色感の神」です。おそらく目からレーザーが出ていることでしょう。',
      zh: '“到底什么时候结束？没完没了……”你在玩弄时间。你是破坏了创作者预设难度的“色感之神”。也许你的眼睛里正在发射激光。',
      'zh-TW': '“到底什麼時候結束？沒完沒了……”你在玩弄時間。你是破壞了創作者預設難度的“色感之神”。也許你的眼睛裡正在發射激光。',
      vi: '"Khi nào thì kết thúc? Nó không bao giờ kết thúc..." Bạn đang đùa giỡn với thời gian. Bạn là \'Thần Màu Sắc\', người đã phá hủy độ khó mà người tạo ra mong muốn. Có thể tia laser đang bắn ra từ mắt bạn.',
      id: '"Kapan ini berakhir? Tidak pernah berakhir..." Anda mempermainkan waktu. Anda adalah \'Dewa Warna\' yang telah menghancurkan kesulitan yang dimaksudkan oleh pembuatnya. Laser mungkin keluar dari mata Anda.'
    },
    advice: {
      ko: 'AI 감별사, 몽골인',
      en: 'AI Identifier, Mongolian',
      ja: 'AI識別者、モンゴル人',
      zh: 'AI鉴别师，蒙古人',
      'zh-TW': 'AI鑑別師，蒙古人',
      vi: 'Nhận dạng AI, Người Mông Cổ',
      id: 'Pengenal AI, Mongolia'
    },
    survivalInstinct: {
      ko: '상위 1% (신계)',
      en: 'Top 1% (Divine)',
      ja: '上位1%（神階）',
      zh: '上位1%（神阶）',
      'zh-TW': '上位1%（神階）',
      vi: 'Trên 1% (Thần cấp)',
      id: 'Atas 1% (Tingkat Dewa)'
    }
  }
];

export function calculatePhase2ColorSurvivalResult(level: number): Phase2ColorSurvivalResult {
  return PHASE2_COLOR_SURVIVAL_RESULTS.find(r => level >= r.range[0] && level <= r.range[1]) || PHASE2_COLOR_SURVIVAL_RESULTS[0];
}

