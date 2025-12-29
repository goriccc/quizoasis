// 도전! 나의 기억력 레벨 테스트 데이터

export interface Phase2MemoryLevelResult {
  type: string;
  emoji: string;
  range: [number, number]; // [minDigits, maxDigits]
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
  memoryCapacity: {
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

export const PHASE2_MEMORY_LEVEL_RESULTS: Phase2MemoryLevelResult[] = [
  {
    type: 'Type1',
    emoji: '🐟',
    range: [4, 5],
    title: {
      ko: '3초 기억력, 귀여운 금붕어',
      en: '3-Second Memory, Cute Goldfish',
      ja: '3秒の記憶力、可愛い金魚',
      zh: '3秒记忆力，可爱金鱼',
      'zh-TW': '3秒記憶力，可愛金魚',
      vi: 'Trí nhớ 3 giây, Cá vàng dễ thương',
      id: 'Ingatan 3 Detik, Ikan Mas Imut'
    },
    description: {
      ko: '"어... 방금 뭐였지? (뻐끔)" 심각합니다. 인증번호 6자리도 한 번에 외우기 힘들어서 두 번 왔다 갔다 하시나요? 건망증이 심하거나 현재 뇌가 매우 피로한 상태입니다. 뇌에 휴식을 주고 메모하는 습관을 들이는 것이 좋겠습니다.',
      en: '"Uh... what was that just now? (blink)" This is serious. Do you have to go back and forth twice to remember a 6-digit verification code? You have severe forgetfulness or your brain is very tired right now. It would be good to give your brain rest and develop a habit of taking notes.',
      ja: '「えっと...今何だったっけ？（ぱちぱち）」深刻です。認証番号6桁も一度に覚えられず、2回往復しますか？物忘れがひどいか、現在脳が非常に疲れている状態です。脳に休息を与え、メモする習慣をつけるのが良いでしょう。',
      zh: '"呃...刚才是什么来着？（眨眼）"情况严重。验证码6位数也需要来回两次才能记住吗？健忘严重或大脑非常疲劳。最好让大脑休息并养成记录的习惯。',
      'zh-TW': '"呃...剛才是什麼來著？（眨眼）"情況嚴重。驗證碼6位數也需要來回兩次才能記住嗎？健忘嚴重或大腦非常疲勞。最好讓大腦休息並養成記錄的習慣。',
      vi: '"Ờ... vừa nãy là gì nhỉ? (chớp mắt)" Nghiêm trọng đấy. Bạn có phải đi lại hai lần để nhớ mã xác nhận 6 chữ số không? Bạn bị đãng trí nghiêm trọng hoặc não đang rất mệt mỏi. Nên để não nghỉ ngơi và tạo thói quen ghi chú.',
      id: '"Eh... tadi apa ya? (berkedip)" Ini serius. Apakah Anda harus bolak-balik dua kali untuk mengingat kode verifikasi 6 digit? Anda memiliki pelupa parah atau otak Anda sangat lelah sekarang. Sebaiknya berikan istirahat pada otak dan kembangkan kebiasaan membuat catatan.'
    },
    memoryCapacity: {
      ko: '매우 낮음',
      en: 'Very Low',
      ja: '非常に低い',
      zh: '非常低',
      'zh-TW': '非常低',
      vi: 'Rất thấp',
      id: 'Sangat Rendah'
    },
    recommendation: {
      ko: '오메가3 섭취, 메모 습관',
      en: 'Omega-3 intake, memo habit',
      ja: 'オメガ3摂取、メモの習慣',
      zh: '补充Omega-3，养成记录习惯',
      'zh-TW': '補充Omega-3，養成記錄習慣',
      vi: 'Bổ sung Omega-3, thói quen ghi chú',
      id: 'Asupan Omega-3, kebiasaan memo'
    }
  },
  {
    type: 'Type2',
    emoji: '🐦',
    range: [6, 7],
    title: {
      ko: '깜빡깜빡, 건망증 참새',
      en: 'Blink Blink, Forgetful Sparrow',
      ja: 'チラチラ、物忘れスズメ',
      zh: '眨眼眨眼，健忘麻雀',
      'zh-TW': '眨眼眨眼，健忘麻雀',
      vi: 'Chớp chớp, Chim sẻ hay quên',
      id: 'Kedip-kedip, Burung Gereja Pelupa'
    },
    description: {
      ko: '"아, 알았는데! 혀끝에서 맴도네..." 딱 평균보다 조금 아래거나 평범한 수준입니다. 인간의 단기 기억 평균이 7자리인데, 컨디션에 따라 왔다 갔다 하는군요. 집중력을 조금만 더 키우면 평균 이상으로 올라갈 수 있습니다.',
      en: '"Ah, I knew it! It\'s on the tip of my tongue..." You\'re slightly below average or at a normal level. The average human short-term memory is 7 digits, but yours fluctuates depending on your condition. If you increase your concentration a bit, you can rise above average.',
      ja: '「あ、わかったのに！舌の先でうろうろしてる...」ちょうど平均より少し下か平凡なレベルです。人間の短期記憶の平均は7桁ですが、コンディションによって行ったり来たりしますね。集中力を少しでも高めれば平均以上に上がることができます。',
      zh: '"啊，我明明知道！就在嘴边..."你略低于平均水平或处于普通水平。人类短期记忆平均为7位数，但你的表现会根据状态波动。只要稍微提高专注力，就能超过平均水平。',
      'zh-TW': '"啊，我明明知道！就在嘴邊..."你略低於平均水平或處於普通水平。人類短期記憶平均為7位數，但你的表現會根據狀態波動。只要稍微提高專注力，就能超過平均水平。',
      vi: '"À, tôi biết mà! Nó cứ ở đầu lưỡi..." Bạn ở mức thấp hơn trung bình một chút hoặc ở mức bình thường. Trí nhớ ngắn hạn trung bình của con người là 7 chữ số, nhưng của bạn dao động tùy theo tình trạng. Nếu bạn tăng khả năng tập trung một chút, bạn có thể vượt trên trung bình.',
      id: '"Ah, saya tahu! Berputar-putar di ujung lidah..." Anda sedikit di bawah rata-rata atau pada tingkat normal. Memori jangka pendek manusia rata-rata adalah 7 digit, tetapi Anda berfluktuasi tergantung kondisi. Jika Anda meningkatkan konsentrasi sedikit, Anda bisa naik di atas rata-rata.'
    },
    memoryCapacity: {
      ko: '보통 (노력 필요)',
      en: 'Average (Effort Needed)',
      ja: '普通（努力が必要）',
      zh: '普通（需要努力）',
      'zh-TW': '普通（需要努力）',
      vi: 'Trung bình (Cần nỗ lực)',
      id: 'Rata-rata (Perlu Usaha)'
    },
    recommendation: {
      ko: '끝말잇기, 스도쿠',
      en: 'Word chain game, Sudoku',
      ja: 'しりとり、数独',
      zh: '词语接龙，数独',
      'zh-TW': '詞語接龍，數獨',
      vi: 'Trò chơi nối từ, Sudoku',
      id: 'Permainan rantai kata, Sudoku'
    }
  },
  {
    type: 'Type3',
    emoji: '🧑‍💼',
    range: [8, 9],
    title: {
      ko: '대한민국 표준, 일반인',
      en: 'Korean Standard, Average Person',
      ja: '大韓民国標準、一般人',
      zh: '韩国标准，普通人',
      'zh-TW': '韓國標準，普通人',
      vi: 'Tiêu chuẩn Hàn Quốc, Người bình thường',
      id: 'Standar Korea, Orang Rata-rata'
    },
    description: {
      ko: '"인간의 평균 기억력을 가졌습니다." 축하합니다! 당신은 지극히 정상적이고 건강한 뇌를 가졌습니다. 전화번호(11자리) 정도는 한두 번 만에 외울 수 있는 능력입니다. 일상생활에서 기억력 때문에 불편할 일은 거의 없습니다.',
      en: '"You have average human memory." Congratulations! You have an extremely normal and healthy brain. You can memorize a phone number (11 digits) in one or two tries. You rarely have memory-related inconveniences in daily life.',
      ja: '「人間の平均記憶力を持っています。」おめでとうございます！あなたは極めて正常で健康な脳を持っています。電話番号（11桁）程度は1、2回で覚えることができる能力です。日常生活で記憶力のために不便なことはほとんどありません。',
      zh: '"你拥有平均的人类记忆力。"恭喜！你拥有非常正常和健康的大脑。你能够在一两次尝试中记住电话号码（11位数）。在日常生活中很少因为记忆力而遇到不便。',
      'zh-TW': '"你擁有平均的人類記憶力。"恭喜！你擁有非常正常和健康的大腦。你能夠在一兩次嘗試中記住電話號碼（11位數）。在日常生活中很少因為記憶力而遇到不便。',
      vi: '"Bạn có trí nhớ trung bình của con người." Chúc mừng! Bạn có một bộ não cực kỳ bình thường và khỏe mạnh. Bạn có thể ghi nhớ số điện thoại (11 chữ số) trong một hoặc hai lần thử. Bạn hiếm khi gặp bất tiện liên quan đến trí nhớ trong cuộc sống hàng ngày.',
      id: '"Anda memiliki ingatan rata-rata manusia." Selamat! Anda memiliki otak yang sangat normal dan sehat. Anda dapat mengingat nomor telepon (11 digit) dalam satu atau dua kali percobaan. Anda jarang mengalami ketidaknyamanan terkait ingatan dalam kehidupan sehari-hari.'
    },
    memoryCapacity: {
      ko: '평균 이상 (양호)',
      en: 'Above Average (Good)',
      ja: '平均以上（良好）',
      zh: '高于平均（良好）',
      'zh-TW': '高於平均（良好）',
      vi: 'Trên trung bình (Tốt)',
      id: 'Di Atas Rata-rata (Baik)'
    },
    recommendation: {
      ko: '외국어 단어 암기 도전',
      en: 'Challenge to memorize foreign words',
      ja: '外国語単語の暗記チャレンジ',
      zh: '挑战记忆外语单词',
      'zh-TW': '挑戰記憶外語單詞',
      vi: 'Thử thách ghi nhớ từ vựng ngoại ngữ',
      id: 'Tantangan menghafal kata bahasa asing'
    }
  },
  {
    type: 'Type4',
    emoji: '🐘',
    range: [10, 11],
    title: {
      ko: '명석한 두뇌, 코끼리',
      en: 'Sharp Brain, Elephant',
      ja: '明晰な頭脳、ゾウ',
      zh: '敏锐大脑，大象',
      'zh-TW': '敏銳大腦，大象',
      vi: 'Bộ não sắc bén, Voi',
      id: 'Otak Tajam, Gajah'
    },
    description: {
      ko: '"한 번 본 건 절대 잊지 않지." 상당히 똑똑하시군요! 상위 10% 안에 드는 훌륭한 기억력입니다. 학창 시절에 암기 과목에서 꽤 점수가 좋았을 것입니다. 중요한 정보를 놓치지 않고 머릿속 서랍에 잘 정리해두는 능력이 있습니다.',
      en: '"I never forget what I\'ve seen once." You\'re quite smart! You have excellent memory in the top 10%. You probably scored quite well in memorization subjects during school. You have the ability to organize important information well in your mental drawers without missing anything.',
      ja: '「一度見たものは絶対に忘れない。」かなり賢いですね！上位10％に入る素晴らしい記憶力です。学生時代に暗記科目でかなり良い点数を取ったでしょう。重要な情報を見逃さず、頭の中の引き出しにうまく整理する能力があります。',
      zh: '"看一次就绝对忘不了。"你相当聪明！你拥有进入前10%的出色记忆力。学生时代在记忆类科目中可能得分不错。你有能力将重要信息很好地整理在脑海抽屉中，不会遗漏任何信息。',
      'zh-TW': '"看一次就絕對忘不了。"你相當聰明！你擁有進入前10%的出色記憶力。學生時代在記憶類科目中可能得分不錯。你有能力將重要信息很好地整理在腦海抽屜中，不會遺漏任何信息。',
      vi: '"Tôi không bao giờ quên những gì đã thấy một lần." Bạn khá thông minh! Bạn có trí nhớ xuất sắc trong top 10%. Có lẽ bạn đã đạt điểm khá cao trong các môn học thuộc lòng ở trường. Bạn có khả năng sắp xếp thông tin quan trọng tốt trong ngăn kéo tinh thần mà không bỏ sót.',
      id: '"Saya tidak pernah melupakan apa yang pernah saya lihat." Anda cukup pintar! Anda memiliki ingatan yang luar biasa di 10% teratas. Anda mungkin mendapat skor yang cukup baik dalam mata pelajaran hafalan selama sekolah. Anda memiliki kemampuan untuk mengatur informasi penting dengan baik di laci mental tanpa melewatkan apa pun.'
    },
    memoryCapacity: {
      ko: '우수 (상위권)',
      en: 'Excellent (Top Tier)',
      ja: '優秀（上位層）',
      zh: '优秀（上位层）',
      'zh-TW': '優秀（上位層）',
      vi: 'Xuất sắc (Tầng trên)',
      id: 'Luar Biasa (Tier Atas)'
    },
    recommendation: {
      ko: '로스쿨, 전문직 시험',
      en: 'Law school, professional exams',
      ja: 'ロースクール、専門職試験',
      zh: '法学院，专业考试',
      'zh-TW': '法學院，專業考試',
      vi: 'Trường luật, kỳ thi chuyên nghiệp',
      id: 'Sekolah hukum, ujian profesional'
    }
  },
  {
    type: 'Type5',
    emoji: '🐵',
    range: [12, 14],
    title: {
      ko: '사진 찍듯 기억하는, 침팬지',
      en: 'Photographic Memory, Chimpanzee',
      ja: '写真のように記憶する、チンパンジー',
      zh: '像拍照一样记忆，黑猩猩',
      'zh-TW': '像拍照一樣記憶，黑猩猩',
      vi: 'Ghi nhớ như chụp ảnh, Tinh tinh',
      id: 'Ingatan Fotografis, Simpanse'
    },
    description: {
      ko: '"순간 포착 능력이 압도적입니다." 침팬지의 순간 기억력이 인간보다 좋다는 사실, 아시나요? 당신은 마치 눈으로 사진을 찍듯 숫자를 이미지로 기억하는 능력을 가졌습니다. 멘사(Mensa) 회원 테스트에 도전해 봐도 좋을 수준입니다.',
      en: '"Your instant capture ability is overwhelming." Did you know that chimpanzees have better instant memory than humans? You have the ability to remember numbers as images, as if taking photos with your eyes. You\'re at a level where you could try the Mensa membership test.',
      ja: '「瞬間捕捉能力が圧倒的です。」チンパンジーの瞬間記憶力が人間より優れているという事実、ご存知ですか？あなたはまるで目で写真を撮るように数字を画像として記憶する能力を持っています。メンサ（Mensa）会員テストに挑戦しても良いレベルです。',
      zh: '"瞬间捕捉能力令人震撼。"你知道黑猩猩的瞬间记忆力比人类好吗？你拥有像用眼睛拍照一样将数字记忆为图像的能力。你已经达到可以尝试门萨(Mensa)会员测试的水平。',
      'zh-TW': '"瞬間捕捉能力令人震撼。"你知道黑猩猩的瞬間記憶力比人類好嗎？你擁有像用眼睛拍照一樣將數字記憶為圖像的能力。你已經達到可以嘗試門薩(Mensa)會員測試的水平。',
      vi: '"Khả năng nắm bắt tức thời của bạn thật áp đảo." Bạn có biết rằng tinh tinh có trí nhớ tức thời tốt hơn con người không? Bạn có khả năng ghi nhớ số như hình ảnh, như thể chụp ảnh bằng mắt. Bạn ở mức có thể thử bài kiểm tra thành viên Mensa.',
      id: '"Kemampuan penangkapan instan Anda sangat luar biasa." Tahukah Anda bahwa simpanse memiliki ingatan instan yang lebih baik daripada manusia? Anda memiliki kemampuan untuk mengingat angka sebagai gambar, seolah-olah mengambil foto dengan mata Anda. Anda berada pada level yang bisa mencoba tes keanggotaan Mensa.'
    },
    memoryCapacity: {
      ko: '최우수 (천재급)',
      en: 'Outstanding (Genius Level)',
      ja: '最優秀（天才級）',
      zh: '最优秀（天才级）',
      'zh-TW': '最優秀（天才級）',
      vi: 'Xuất sắc nhất (Cấp độ thiên tài)',
      id: 'Sangat Luar Biasa (Tingkat Jenius)'
    },
    recommendation: {
      ko: '멘사 가입, 기억력 대회',
      en: 'Join Mensa, memory competitions',
      ja: 'メンサ加入、記憶力大会',
      zh: '加入门萨，记忆力竞赛',
      'zh-TW': '加入門薩，記憶力競賽',
      vi: 'Tham gia Mensa, cuộc thi trí nhớ',
      id: 'Bergabung Mensa, kompetisi ingatan'
    }
  },
  {
    type: 'Type6',
    emoji: '🤖',
    range: [15, 999],
    title: {
      ko: '뇌 용량 무제한, AI 슈퍼컴퓨터',
      en: 'Unlimited Brain Capacity, AI Supercomputer',
      ja: '脳容量無制限、AIスーパーコンピューター',
      zh: '大脑容量 unlimited，AI超级计算机',
      'zh-TW': '大腦容量無限制，AI超級計算機',
      vi: 'Dung lượng não không giới hạn, Siêu máy tính AI',
      id: 'Kapasitas Otak Tak Terbatas, Superkomputer AI'
    },
    description: {
      ko: '"삐리릭. 데이터 저장 완료." 당신은 사람이 아닙니다. 혹시 눈에 녹화 기능이 달려있나요? 15자리 이상의 무작위 숫자를 단 몇 초 만에 외운다는 건 기적에 가깝습니다. 전 세계 0.1%의 \'포토그래픽 메모리\' 소유자로 인정합니다.',
      en: '"Beep. Data storage complete." You are not human. Do you have a recording function in your eyes? Memorizing 15 or more random digits in just a few seconds is close to a miracle. You are recognized as one of the 0.1% of \'photographic memory\' owners worldwide.',
      ja: '「ピリリリ。データ保存完了。」あなたは人間ではありません。もしかして目に録画機能が付いていますか？15桁以上のランダムな数字をわずか数秒で覚えるというのは奇跡に近いです。全世界0.1％の「フォトグラフィックメモリー」所有者として認めます。',
      zh: '"哔。数据存储完成。"你不是人类。难道你的眼睛有录像功能？在短短几秒内记住15位以上的随机数字几乎是个奇迹。你被公认为全球0.1%的"照相记忆"拥有者。',
      'zh-TW': '"嗶。數據存儲完成。"你不是人類。難道你的眼睛有錄像功能？在短短幾秒內記住15位以上的隨機數字幾乎是個奇跡。你被公認為全球0.1%的"照相記憶"擁有者。',
      vi: '"Bíp. Lưu trữ dữ liệu hoàn tất." Bạn không phải là con người. Phải chăng bạn có chức năng ghi hình trong mắt? Ghi nhớ 15 chữ số ngẫu nhiên trở lên chỉ trong vài giây gần như là một phép màu. Bạn được công nhận là một trong 0.1% người sở hữu \'trí nhớ hình ảnh\' trên toàn thế giới.',
      id: '"Bip. Penyimpanan data selesai." Anda bukan manusia. Apakah Anda memiliki fungsi rekaman di mata Anda? Menghafal 15 digit acak atau lebih hanya dalam beberapa detik hampir seperti keajaiban. Anda diakui sebagai salah satu dari 0.1% pemilik \'memori fotografis\' di seluruh dunia.'
    },
    memoryCapacity: {
      ko: '측정 불가 (GOD)',
      en: 'Immeasurable (GOD)',
      ja: '測定不能（GOD）',
      zh: '无法测量（GOD）',
      'zh-TW': '無法測量（GOD）',
      vi: 'Không thể đo lường (GOD)',
      id: 'Tak Terukur (GOD)'
    },
    recommendation: {
      ko: 'CIA 요원, 인간 문화재',
      en: 'CIA agent, human cultural asset',
      ja: 'CIAエージェント、人間文化財',
      zh: 'CIA特工，人类文化遗产',
      'zh-TW': 'CIA特工，人類文化遺產',
      vi: 'Đặc vụ CIA, tài sản văn hóa nhân loại',
      id: 'Agen CIA, aset budaya manusia'
    }
  }
];

// 숫자 생성 함수
export function generateNumber(digits: number): string {
  let number = '';
  for (let i = 0; i < digits; i++) {
    number += Math.floor(Math.random() * 10).toString();
  }
  return number;
}

// 노출 시간 계산 함수
export function getDisplayTime(digits: number): number {
  if (digits <= 7) return 1500; // 1.5초
  if (digits <= 12) return 2500; // 2.5초
  return 3500; // 3.5초
}

// 결과 계산 함수
export function calculatePhase2MemoryLevelResult(maxDigits: number): Phase2MemoryLevelResult {
  return PHASE2_MEMORY_LEVEL_RESULTS.find(r => maxDigits >= r.range[0] && maxDigits <= r.range[1]) || PHASE2_MEMORY_LEVEL_RESULTS[0];
}




