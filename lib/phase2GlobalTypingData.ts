// 글로벌 타자왕 테스트 데이터

export interface Phase2GlobalTypingRound {
  round: number;
  sentence: {
    ko: string;
    en: string;
    ja: string;
    zh: string;
    'zh-TW': string;
    vi: string;
    id: string;
  };
}

export interface Phase2GlobalTypingResult {
  type: string;
  emoji: string;
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
  characteristics: {
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

// 7개 언어별 5라운드 문장 데이터
export const PHASE2_GLOBAL_TYPING_ROUNDS: Phase2GlobalTypingRound[] = [
  {
    round: 1,
    sentence: {
      ko: '안녕하세요. 만나서 반갑습니다.',
      en: 'Hello world, nice to meet you.',
      ja: 'こんにちは。元気ですか。',
      zh: '你好，很高兴见到你。',
      'zh-TW': '你好，很高興見到你。',
      vi: 'Xin chào, chúc bạn một ngày tốt lành.',
      id: 'Halo, apa kabar? Senang bertemu denganmu.'
    }
  },
  {
    round: 2,
    sentence: {
      ko: '가는 말이 고와야 오는 말이 곱다.',
      en: 'The quick brown fox jumps over the lazy dog.',
      ja: '猿も木から落ちる。',
      zh: '有志者，事竟成。',
      'zh-TW': '路遙知馬力，日久見人心。',
      vi: 'Ăn quả nhớ kẻ trồng cây.',
      id: 'Sedia payung sebelum hujan.'
    }
  },
  {
    round: 3,
    sentence: {
      ko: '늦었다고 생각할 때가 가장 빠른 때이다.',
      en: 'To be, or not to be, that is the question.',
      ja: '庭には二羽鶏がいる。',
      zh: '敏捷的棕色狐狸跳过了懒狗。',
      'zh-TW': '敏捷的棕色狐狸跳過了懶狗。',
      vi: 'Có công mài sắt, có ngày nên kim.',
      id: 'Bhinneka Tunggal Ika, berbeda-beda tetapi tetap satu.'
    }
  },
  {
    round: 4,
    sentence: {
      ko: '동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세.',
      en: 'Success is walking from failure to failure with no loss of enthusiasm.',
      ja: '吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。',
      zh: '欲穷千里目，更上一层楼。',
      'zh-TW': '人有悲歡離合，月有陰晴圓缺，此事古難全。',
      vi: 'Trăm năm trong cõi người ta, chữ tài chữ mệnh khéo là ghét nhau.',
      id: 'Burung kakak tua hinggap di jendela. Nenek sudah tua giginya tinggal dua.'
    }
  },
  {
    round: 5,
    sentence: {
      ko: '내가 그린 기린 그림은 잘 그린 기린 그림이고, 네가 그린 기린 그림은 못 그린 기린 그림이다.',
      en: 'Even though the future seems far away, it is actually beginning right now.',
      ja: '祇園精舎の鐘の声、諸行無常の響きあり。沙羅双樹の花の色。',
      zh: '学而时习之，不亦说乎？有朋自远方来，不亦乐乎？',
      'zh-TW': '天將降大任於斯人也，必先苦其心志，勞其筋骨。',
      vi: 'Công cha như núi Thái Sơn, nghĩa mẹ như nước trong nguồn chảy ra.',
      id: 'Keadilan sosial bagi seluruh rakyat Indonesia adalah cita-cita bangsa.'
    }
  }
];

// 언어별 문자 수 계산 함수
export function countCharacters(text: string, locale: string): number {
  if (locale === 'ko') {
    // 한국어: 자모 분리 타수 (가=2타, 강=3타)
    // 한글 유니코드 범위: AC00-D7AF
    let count = 0;
    for (let i = 0; i < text.length; i++) {
      const code = text.charCodeAt(i);
      if (code >= 0xAC00 && code <= 0xD7AF) {
        // 한글 완성형: (초성 * 588) + (중성 * 28) + 종성 + 44032
        const base = code - 0xAC00;
        const 초성 = Math.floor(base / 588);
        const 중성 = Math.floor((base % 588) / 28);
        const 종성 = base % 28;
        count += 2 + (종성 > 0 ? 1 : 0); // 초성+중성(2) + 종성(0 또는 1)
      } else {
        count += 1;
      }
    }
    return count;
  } else if (locale === 'zh' || locale === 'zh-CN' || locale === 'zh-TW' || locale === 'ja') {
    // CJK: 최종 변환된 문자 수 (중국어 간체/번체, 일본어는 문자 수 그대로)
    // Note: zh-CN is mapped to 'zh' in data, zh-TW remains 'zh-TW'
    return text.length;
  } else {
    // Latin (EN/ID/VN): 알파벳+공백 타수 (베트남어 성조 포함)
    return text.length;
  }
}

// 결과 데이터 (6가지 등급)
export const PHASE2_GLOBAL_TYPING_RESULTS: Phase2GlobalTypingResult[] = [
  {
    type: 'Type1',
    emoji: '🦅',
    title: {
      ko: '한 땀 한 땀, 독수리 타법',
      en: 'One Step at a Time, Eagle Typing',
      ja: '一歩ずつ、ワシのタイピング',
      zh: '一步一个脚印，老鹰打字法',
      'zh-TW': '一步一個腳印，老鷹打字法',
      vi: 'Từng bước một, Đại bàng đánh máy',
      id: 'Satu Langkah Sekaligus, Elang Mengetik'
    },
    description: {
      ko: '"키보드에서 글자 찾기 바쁘시군요! 5라운드를 완주한 것만으로도 대단합니다. 연습이 필요해요."',
      en: '"Busy finding letters on the keyboard! Just completing 5 rounds is impressive. You need practice."',
      ja: '"キーボードで文字を探すのに忙しいですね！5ラウンドを完走しただけでも素晴らしいです。練習が必要です。"',
      zh: '"忙着在键盘上找字母！能完成5轮已经很了不起了。需要多练习。"',
      'zh-TW': '"忙著在鍵盤上找字母！能完成5輪已經很了不起了。需要多練習。"',
      vi: '"Bận rộn tìm chữ cái trên bàn phím! Chỉ việc hoàn thành 5 vòng đã rất ấn tượng. Bạn cần luyện tập."',
      id: '"Sibuk mencari huruf di keyboard! Hanya menyelesaikan 5 putaran sudah mengesankan. Anda perlu berlatih."'
    },
    characteristics: {
      ko: '평균 타수 낮음',
      en: 'Low average typing speed',
      ja: '平均タイプ数が低い',
      zh: '平均打字数较低',
      'zh-TW': '平均打字數較低',
      vi: 'Tốc độ đánh máy trung bình thấp',
      id: 'Kecepatan mengetik rata-rata rendah'
    },
    recommendation: {
      ko: '타자 연습 프로그램, 천천히 정확하게',
      en: 'Typing practice program, slow and accurate',
      ja: 'タイピング練習プログラム、ゆっくり正確に',
      zh: '打字练习程序，缓慢而准确',
      'zh-TW': '打字練習程序，緩慢而準確',
      vi: 'Chương trình luyện đánh máy, chậm và chính xác',
      id: 'Program latihan mengetik, lambat dan akurat'
    }
  },
  {
    type: 'Type2',
    emoji: '🐢',
    title: {
      ko: '엉금엉금, 아기 거북이',
      en: 'Slow and Steady, Baby Turtle',
      ja: 'のんびり、子ガメ',
      zh: '慢吞吞，小乌龟',
      'zh-TW': '慢吞吞，小烏龜',
      vi: 'Chậm rãi, Rùa con',
      id: 'Pelan-pelan, Kura-kura Kecil'
    },
    description: {
      ko: '"이제 자판은 안 보고 칠 수 있네요. 하지만 긴 문장이나 특수문자가 나오면 당황하는 단계입니다."',
      en: '"You can now type without looking at the keyboard. But you panic when long sentences or special characters appear."',
      ja: '"もうキーボードを見ずにタイプできますね。しかし、長い文や特殊文字が出ると慌ててしまう段階です。"',
      zh: '"现在可以不看键盘打字了。但遇到长句或特殊字符时还是会慌张。"',
      'zh-TW': '"現在可以不看鍵盤打字了。但遇到長句或特殊字符時還是會慌張。"',
      vi: '"Bây giờ bạn có thể gõ mà không cần nhìn bàn phím. Nhưng bạn sẽ hoảng loạn khi gặp câu dài hoặc ký tự đặc biệt."',
      id: '"Sekarang Anda bisa mengetik tanpa melihat keyboard. Tetapi Anda panik ketika kalimat panjang atau karakter khusus muncul."'
    },
    characteristics: {
      ko: '기초 단계',
      en: 'Beginner level',
      ja: '基礎段階',
      zh: '基础阶段',
      'zh-TW': '基礎階段',
      vi: 'Giai đoạn cơ bản',
      id: 'Tingkat pemula'
    },
    recommendation: {
      ko: '꾸준한 연습, 자주 쓰는 문장 집중',
      en: 'Consistent practice, focus on frequently used sentences',
      ja: '継続的な練習、よく使う文に集中',
      zh: '持续练习，专注于常用句子',
      'zh-TW': '持續練習，專注於常用句子',
      vi: 'Luyện tập đều đặn, tập trung vào câu thường dùng',
      id: 'Latihan konsisten, fokus pada kalimat yang sering digunakan'
    }
  },
  {
    type: 'Type3',
    emoji: '💼',
    title: {
      ko: '무난한 시민, 평범한 회사원',
      en: 'Average Citizen, Ordinary Office Worker',
      ja: '無難な市民、平凡な会社員',
      zh: '普通市民，平凡上班族',
      'zh-TW': '普通市民，平凡上班族',
      vi: 'Công dân bình thường, Nhân viên văn phòng bình thường',
      id: 'Warga Rata-rata, Karyawan Biasa'
    },
    description: {
      ko: '"딱 현지인 평균 속도입니다! 메신저, 이메일, 보고서 작성에 전혀 문제가 없는 \'실전 압축형\' 손가락입니다."',
      en: '"Exactly the average speed of locals! Your fingers are \'practical compressed\' with no problems in messaging, emails, or report writing."',
      ja: '"まさに現地人の平均速度です！メッセージ、メール、報告書作成に全く問題のない「実戦圧縮型」の指です。"',
      zh: '"正是当地人的平均速度！你的手指是\'实战压缩型\'，在聊天、邮件、报告写作上完全没有问题。"',
      'zh-TW': '"正是當地人的平均速度！你的手指是\'實戰壓縮型\'，在聊天、郵件、報告寫作上完全沒有問題。"',
      vi: '"Đúng là tốc độ trung bình của người địa phương! Ngón tay của bạn là \'loại nén thực tế\' không có vấn đề gì trong nhắn tin, email hoặc viết báo cáo."',
      id: '"Tepat kecepatan rata-rata penduduk setempat! Jari Anda adalah \'tipe terkompresi praktis\' tanpa masalah dalam pesan, email, atau penulisan laporan."'
    },
    characteristics: {
      ko: '평균 속도',
      en: 'Average speed',
      ja: '平均速度',
      zh: '平均速度',
      'zh-TW': '平均速度',
      vi: 'Tốc độ trung bình',
      id: 'Kecepatan rata-rata'
    },
    recommendation: {
      ko: '현재 속도 유지, 업무에 최적화',
      en: 'Maintain current speed, optimized for work',
      ja: '現在の速度を維持、業務に最適化',
      zh: '保持当前速度，针对工作优化',
      'zh-TW': '保持當前速度，針對工作優化',
      vi: 'Duy trì tốc độ hiện tại, tối ưu cho công việc',
      id: 'Pertahankan kecepatan saat ini, dioptimalkan untuk pekerjaan'
    }
  },
  {
    type: 'Type4',
    emoji: '⚔️',
    title: {
      ko: '현란한 손놀림, 키보드 워리어',
      en: 'Dazzling Hand Movement, Keyboard Warrior',
      ja: '華麗な手さばき、キーボードウォリアー',
      zh: '华丽手速，键盘战士',
      'zh-TW': '華麗手速，鍵盤戰士',
      vi: 'Chuyển động tay rực rỡ, Chiến binh bàn phím',
      id: 'Gerakan Tangan yang Memukau, Prajurit Keyboard'
    },
    description: {
      ko: '"상당히 빠릅니다! 5문장 평균이 이 정도라면, 채팅방에서 누구보다 빠르게 반응하는 \'수다쟁이\'일 확률이 높습니다."',
      en: '"Quite fast! If the average of 5 sentences is this high, you\'re likely the \'chatty\' one who responds faster than anyone in chat rooms."',
      ja: '"かなり速いです！5文の平均がこれなら、チャットルームで誰よりも速く反応する「おしゃべり好き」の可能性が高いです。"',
      zh: '"相当快！如果5句话的平均值这么高，你很可能是在聊天室里反应最快的\'话痨\'。"',
      'zh-TW': '"相當快！如果5句話的平均值這麼高，你很可能是聊天室裡反應最快的\'話癆\'。"',
      vi: '"Khá nhanh! Nếu trung bình 5 câu cao như thế này, bạn có khả năng là người \'nói nhiều\' phản ứng nhanh hơn bất kỳ ai trong phòng chat."',
      id: '"Cukup cepat! Jika rata-rata 5 kalimat setinggi ini, kemungkinan Anda adalah yang \'cerewet\' yang merespons lebih cepat daripada siapa pun di ruang obrolan."'
    },
    characteristics: {
      ko: '빠른 속도',
      en: 'Fast speed',
      ja: '速い速度',
      zh: '速度快',
      'zh-TW': '速度快',
      vi: 'Tốc độ nhanh',
      id: 'Kecepatan cepat'
    },
    recommendation: {
      ko: '채팅, 소셜 미디어 최적화, 실시간 커뮤니케이션',
      en: 'Optimized for chat, social media, real-time communication',
      ja: 'チャット、ソーシャルメディアに最適化、リアルタイムコミュニケーション',
      zh: '针对聊天、社交媒体、实时通信优化',
      'zh-TW': '針對聊天、社交媒體、實時通信優化',
      vi: 'Tối ưu cho chat, mạng xã hội, giao tiếp thời gian thực',
      id: 'Dioptimalkan untuk obrolan, media sosial, komunikasi real-time'
    }
  },
  {
    type: 'Type5',
    emoji: '💻',
    title: {
      ko: '보이지 않는 손, 해커',
      en: 'Invisible Hand, Hacker',
      ja: '見えない手、ハッカー',
      zh: '无形之手，黑客',
      'zh-TW': '無形之手，駭客',
      vi: 'Bàn tay vô hình, Hacker',
      id: 'Tangan Tak Terlihat, Peretas'
    },
    description: {
      ko: '"영화 속 해커가 여기 있었군요. 장문과 단문 가리지 않고 기복 없는 실력을 보여줍니다. 전문 타이피스트 수준입니다."',
      en: '"The hacker from movies is here. You show consistent skill regardless of long or short sentences. Professional typist level."',
      ja: '"映画のハッカーがここにいましたね。長文も短文も関係なく、揺るぎない実力を示しています。プロタイピストレベルです。"',
      zh: '"电影里的黑客在这里。无论是长句还是短句，你都展现出稳定的实力。专业打字员水平。"',
      'zh-TW': '"電影裡的駭客在這裡。無論是長句還是短句，你都展現出穩定的實力。專業打字員水平。"',
      vi: '"Hacker trong phim đã ở đây. Bạn thể hiện kỹ năng nhất quán bất kể câu dài hay ngắn. Cấp độ chuyên nghiệp."',
      id: '"Peretas dari film ada di sini. Anda menunjukkan keterampilan yang konsisten terlepas dari kalimat panjang atau pendek. Tingkat juru ketik profesional."'
    },
    characteristics: {
      ko: '전문가 수준',
      en: 'Professional level',
      ja: '専門家レベル',
      zh: '专业水平',
      'zh-TW': '專業水平',
      vi: 'Cấp độ chuyên nghiệp',
      id: 'Tingkat profesional'
    },
    recommendation: {
      ko: '전문 타이피스트, 프로그래머, 작가',
      en: 'Professional typist, programmer, writer',
      ja: 'プロタイピスト、プログラマー、作家',
      zh: '专业打字员、程序员、作家',
      'zh-TW': '專業打字員、程序員、作家',
      vi: 'Thợ đánh máy chuyên nghiệp, lập trình viên, nhà văn',
      id: 'Juru ketik profesional, programmer, penulis'
    }
  },
  {
    type: 'Type6',
    emoji: '⚡',
    title: {
      ko: '신의 경지, 타자의 신',
      en: 'Divine Realm, God of Typing',
      ja: '神の境地、タイピングの神',
      zh: '神之境界，打字之神',
      'zh-TW': '神之境界，打字之神',
      vi: 'Cảnh giới thần thánh, Thần đánh máy',
      id: 'Alam Ilahi, Dewa Mengetik'
    },
    description: {
      ko: '"이건 기계입니다! 각 언어 입력 시스템의 한계를 시험하고 계시네요. 전 세계 상위 1% 안에 드는 \'신의 손가락\'입니다."',
      en: '"This is a machine! You\'re testing the limits of each language input system. You\'re in the top 1% worldwide with \'divine fingers\'."',
      ja: '"これは機械です！各言語入力システムの限界を試していますね。世界中の上位1％に入る「神の指」です。"',
      zh: '"这是机器！你在测试每种语言输入系统的极限。你拥有\'神之手指\'，跻身全球前1%。"',
      'zh-TW': '"這是機器！你在測試每種語言輸入系統的極限。你擁有\'神之手指\'，躋身全球前1%。"',
      vi: '"Đây là một cỗ máy! Bạn đang kiểm tra giới hạn của từng hệ thống nhập liệu ngôn ngữ. Bạn nằm trong top 1% toàn cầu với \'ngón tay thần thánh\'."',
      id: '"Ini adalah mesin! Anda sedang menguji batas setiap sistem input bahasa. Anda berada di 1% teratas di seluruh dunia dengan \'jari ilahi\'."'
    },
    characteristics: {
      ko: '전설적 수준',
      en: 'Legendary level',
      ja: '伝説レベル',
      zh: '传奇水平',
      'zh-TW': '傳奇水平',
      vi: 'Cấp độ huyền thoại',
      id: 'Tingkat legendaris'
    },
    recommendation: {
      ko: '타이핑 챔피언십, 세계 기록 도전, AI와 경쟁',
      en: 'Typing championships, world record challenges, compete with AI',
      ja: 'タイピング選手権、世界記録挑戦、AIとの競争',
      zh: '打字锦标赛、世界纪录挑战、与AI竞争',
      'zh-TW': '打字錦標賽、世界紀錄挑戰、與AI競爭',
      vi: 'Giải vô địch đánh máy, thách thức kỷ lục thế giới, cạnh tranh với AI',
      id: 'Kejuaraan mengetik, tantangan rekor dunia, bersaing dengan AI'
    }
  }
];

// 언어별 컷라인 정의 (CPM 기준)
const CUTOFF_LINES = {
  ko: { Type1: 150, Type2: 250, Type3: 400, Type4: 600, Type5: 800 }, // 한국어
  en: { Type1: 100, Type2: 180, Type3: 280, Type4: 380, Type5: 480 }, // 영어 (Latin)
  id: { Type1: 100, Type2: 180, Type3: 280, Type4: 380, Type5: 480 }, // 인도네시아어 (Latin)
  vi: { Type1: 100, Type2: 180, Type3: 280, Type4: 380, Type5: 480 }, // 베트남어 (Latin)
  ja: { Type1: 30, Type2: 50, Type3: 80, Type4: 120, Type5: 160 }, // 일본어 (CJK)
  'zh-CN': { Type1: 30, Type2: 50, Type3: 80, Type4: 120, Type5: 160 }, // 중국어 간체 (CJK)
  'zh-TW': { Type1: 30, Type2: 50, Type3: 80, Type4: 120, Type5: 160 }, // 중국어 번체 (CJK)
};

// 결과 계산 함수
export function calculatePhase2GlobalTypingResult(
  averageCPM: number,
  locale: string
): Phase2GlobalTypingResult {
  // locale 매핑
  const langKey = locale === 'zh-CN' ? 'zh-CN' : locale === 'zh-TW' ? 'zh-TW' : locale;
  const cutoffs = CUTOFF_LINES[langKey as keyof typeof CUTOFF_LINES] || CUTOFF_LINES.en;
  
  // Type6: 최고 등급 (컷라인 초과)
  if (averageCPM >= cutoffs.Type5) {
    return PHASE2_GLOBAL_TYPING_RESULTS[5]; // Type6
  }
  // Type5
  if (averageCPM >= cutoffs.Type4) {
    return PHASE2_GLOBAL_TYPING_RESULTS[4]; // Type5
  }
  // Type4
  if (averageCPM >= cutoffs.Type3) {
    return PHASE2_GLOBAL_TYPING_RESULTS[3]; // Type4
  }
  // Type3
  if (averageCPM >= cutoffs.Type2) {
    return PHASE2_GLOBAL_TYPING_RESULTS[2]; // Type3
  }
  // Type2
  if (averageCPM >= cutoffs.Type1) {
    return PHASE2_GLOBAL_TYPING_RESULTS[1]; // Type2
  }
  // Type1: 최하위
  return PHASE2_GLOBAL_TYPING_RESULTS[0]; // Type1
}

