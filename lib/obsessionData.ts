export interface ObsessionQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    scores: Record<string, number>;
  }[];
}

export interface ObsessionResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  description: Record<string, string>;
  detailedDescription: Record<string, string>;
  symptoms: Record<string, string>;
  riskLevel: Record<string, string>;
  impact: Record<string, string>;
  advice: Record<string, string>;
  managementTips: Record<string, string>[];
}

export const obsessionQuestions: ObsessionQuestion[] = [
  {
    id: 1,
    question: {
      ko: "외출 전 문 잠금 확인할 때?",
      en: "How do you check door locks before leaving?",
      ja: "外出前にドアの施錠を確認する時？",
      'zh-CN': "出门前检查门锁时？",
      'zh-TW': "出門前檢查門鎖時？",
      id: "Bagaimana Anda memeriksa kunci pintu sebelum pergi?",
      vi: "Khi kiểm tra khóa cửa trước khi ra ngoài?"
    },
    options: [
      {
        text: {
          ko: "한두 번 확인하고 나옴",
          en: "Check once or twice and leave",
          ja: "1、2回確認して出る",
          'zh-CN': "检查一两次就出门",
          'zh-TW': "檢查一兩次就出門",
          id: "Periksa sekali atau dua kali lalu pergi",
          vi: "Kiểm tra một hoặc hai lần rồi đi"
        },
        scores: { healthy: 0 }
      },
      {
        text: {
          ko: "여러 번 확인하고 나와도 불안함",
          en: "Check multiple times and still feel anxious",
          ja: "何度も確認しても不安",
          'zh-CN': "检查多次仍然不安",
          'zh-TW': "檢查多次仍然不安",
          id: "Periksa berkali-kali dan masih merasa cemas",
          vi: "Kiểm tra nhiều lần vẫn cảm thấy lo lắng"
        },
        scores: { obsession: 2 }
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "손 씻기에 대해?",
      en: "How do you feel about hand washing?",
      ja: "手洗いについて？",
      'zh-CN': "关于洗手？",
      'zh-TW': "關於洗手？",
      id: "Bagaimana perasaan Anda tentang mencuci tangan?",
      vi: "Về việc rửa tay?"
    },
    options: [
      {
        text: {
          ko: "필요할 때 적절히 씻음",
          en: "Wash appropriately when needed",
          ja: "必要な時に適切に洗う",
          'zh-CN': "需要时适当清洗",
          'zh-TW': "需要時適當清洗",
          id: "Cuci dengan tepat saat diperlukan",
          vi: "Rửa đúng cách khi cần"
        },
        scores: { healthy: 0 }
      },
      {
        text: {
          ko: "하루에 수십 번, 피부가 거칠어질 정도",
          en: "Dozens of times a day, skin becomes rough",
          ja: "1日に何十回も、肌が荒れるほど",
          'zh-CN': "一天几十次，皮肤变粗糙",
          'zh-TW': "一天幾十次，皮膚變粗糙",
          id: "Puluhan kali sehari, kulit menjadi kasar",
          vi: "Hàng chục lần một ngày, da trở nên thô ráp"
        },
        scores: { obsession: 2 }
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "물건 정리할 때?",
      en: "How do you organize things?",
      ja: "物を整理する時？",
      'zh-CN': "整理物品时？",
      'zh-TW': "整理物品時？",
      id: "Bagaimana Anda mengatur barang?",
      vi: "Khi sắp xếp đồ đạc?"
    },
    options: [
      {
        text: {
          ko: "깔끔하게 하지만 약간 어긋나도 괜찮음",
          en: "Neatly but okay if slightly out of place",
          ja: "きれいにするが少しずれても大丈夫",
          'zh-CN': "整洁但稍有偏差也无妨",
          'zh-TW': "整潔但稍有偏差也無妨",
          id: "Rapi tapi tidak apa-apa jika sedikit keluar",
          vi: "Gọn gàng nhưng hơi lệch cũng không sao"
        },
        scores: { healthy: 0 }
      },
      {
        text: {
          ko: "완벽하게 정렬되지 않으면 계속 신경 쓰임",
          en: "Can't stop thinking about it if not perfectly aligned",
          ja: "完璧に整列していないと気になり続ける",
          'zh-CN': "没有完美对齐就持续在意",
          'zh-TW': "沒有完美對齊就持續在意",
          id: "Tidak bisa berhenti memikirkannya jika tidak selaras sempurna",
          vi: "Không thể ngừng nghĩ về nó nếu không sắp xếp hoàn hảo"
        },
        scores: { obsession: 2 }
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "계획이 틀어지면?",
      en: "What happens when plans fall apart?",
      ja: "計画が狂ったら？",
      'zh-CN': "计划被打乱时？",
      'zh-TW': "計劃被打亂時？",
      id: "Apa yang terjadi ketika rencana berantakan?",
      vi: "Khi kế hoạch bị đảo lộn?"
    },
    options: [
      {
        text: {
          ko: "당황스럽지만 다른 방법 찾음",
          en: "Feel confused but find another way",
          ja: "慌てるが別の方法を見つける",
          'zh-CN': "虽然慌乱但寻找其他方法",
          'zh-TW': "雖然慌亂但尋找其他方法",
          id: "Merasa bingung tapi menemukan cara lain",
          vi: "Hoang mang nhưng tìm cách khác"
        },
        scores: { healthy: 0 }
      },
      {
        text: {
          ko: "극도로 불안하고 하루 종일 신경 쓰임",
          en: "Extremely anxious and bothers me all day",
          ja: "極度に不安で一日中気になる",
          'zh-CN': "极度不安，整天困扰",
          'zh-TW': "極度不安，整天困擾",
          id: "Sangat cemas dan mengganggu sepanjang hari",
          vi: "Vô cùng lo lắng và ám ảnh cả ngày"
        },
        scores: { obsession: 2 }
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "특정 숫자나 순서에 대해?",
      en: "About specific numbers or order?",
      ja: "特定の数字や順序について？",
      'zh-CN': "关于特定数字或顺序？",
      'zh-TW': "關於特定數字或順序？",
      id: "Tentang angka atau urutan tertentu?",
      vi: "Về số hoặc thứ tự cụ thể?"
    },
    options: [
      {
        text: {
          ko: "특별히 신경 안 씀",
          en: "Don't particularly care",
          ja: "特に気にしない",
          'zh-CN': "不太在意",
          'zh-TW': "不太在意",
          id: "Tidak terlalu peduli",
          vi: "Không đặc biệt quan tâm"
        },
        scores: { healthy: 0 }
      },
      {
        text: {
          ko: "꼭 지켜야 하는 나만의 숫자나 순서가 있음",
          en: "Have my own numbers or order I must follow",
          ja: "必ず守らなければならない自分だけの数字や順序がある",
          'zh-CN': "有我必须遵守的专属数字或顺序",
          'zh-TW': "有我必須遵守的專屬數字或順序",
          id: "Memiliki angka atau urutan saya sendiri yang harus diikuti",
          vi: "Có số hoặc thứ tự riêng của tôi phải tuân theo"
        },
        scores: { obsession: 2 }
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "반복적인 생각이 들 때?",
      en: "When repetitive thoughts come?",
      ja: "繰り返しの考えが浮かぶ時？",
      'zh-CN': "出现重复想法时？",
      'zh-TW': "出現重複想法時？",
      id: "Ketika pikiran berulang muncul?",
      vi: "Khi có suy nghĩ lặp đi lặp lại?"
    },
    options: [
      {
        text: {
          ko: "생각이 들어도 금방 넘어감",
          en: "Thoughts come but quickly pass",
          ja: "考えが浮かんでもすぐに通り過ぎる",
          'zh-CN': "虽然有想法但很快过去",
          'zh-TW': "雖然有想法但很快過去",
          id: "Pikiran muncul tapi cepat berlalu",
          vi: "Có suy nghĩ nhưng nhanh chóng qua đi"
        },
        scores: { healthy: 0 }
      },
      {
        text: {
          ko: "특정 생각이 계속 떠올라서 괴로움",
          en: "Specific thoughts keep coming up and bother me",
          ja: "特定の考えが続けて浮かび苦しい",
          'zh-CN': "特定想法持续出现，令人困扰",
          'zh-TW': "特定想法持續出現，令人困擾",
          id: "Pikiran tertentu terus muncul dan mengganggu",
          vi: "Suy nghĩ cụ thể cứ xuất hiện và làm phiền"
        },
        scores: { obsession: 2 }
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "청소나 정리를 할 때?",
      en: "When cleaning or organizing?",
      ja: "掃除や整理をする時？",
      'zh-CN': "打扫或整理时？",
      'zh-TW': "打掃或整理時？",
      id: "Saat membersihkan atau mengatur?",
      vi: "Khi dọn dẹp hoặc sắp xếp?"
    },
    options: [
      {
        text: {
          ko: "깔끔하게 하고 끝냄",
          en: "Clean nicely and finish",
          ja: "きれいにして終わる",
          'zh-CN': "清理干净就结束",
          'zh-TW': "清理乾淨就結束",
          id: "Bersihkan dengan baik dan selesai",
          vi: "Dọn sạch rồi kết thúc"
        },
        scores: { healthy: 0 }
      },
      {
        text: {
          ko: "몇 시간씩 걸리고 완벽하지 않으면 다시 함",
          en: "Takes hours and redo if not perfect",
          ja: "何時間もかかり完璧でなければやり直す",
          'zh-CN': "花几个小时，不完美就重做",
          'zh-TW': "花幾個小時，不完美就重做",
          id: "Memakan waktu berjam-jam dan mengulang jika tidak sempurna",
          vi: "Mất vài giờ và làm lại nếu không hoàn hảo"
        },
        scores: { obsession: 2 }
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "확인 행동에 대해?",
      en: "About checking behaviors?",
      ja: "確認行動について？",
      'zh-CN': "关于确认行为？",
      'zh-TW': "關於確認行為？",
      id: "Tentang perilaku memeriksa?",
      vi: "Về hành vi kiểm tra?"
    },
    options: [
      {
        text: {
          ko: "필요한 만큼만 확인",
          en: "Check only as needed",
          ja: "必要な分だけ確認",
          'zh-CN': "只检查需要的",
          'zh-TW': "只檢查需要的",
          id: "Periksa hanya yang diperlukan",
          vi: "Chỉ kiểm tra khi cần"
        },
        scores: { healthy: 0 }
      },
      {
        text: {
          ko: "\"혹시나\" 하는 마음에 계속 재확인",
          en: "Keep rechecking \"just in case\"",
          ja: "「もしかして」という気持ちで再確認し続ける",
          'zh-CN': "因为\"万一\"的心情持续重新确认",
          'zh-TW': "因為「萬一」的心情持續重新確認",
          id: "Terus memeriksa ulang \"untuk berjaga-jaga\"",
          vi: "Tiếp tục kiểm tra lại \"phòng trường hợp\""
        },
        scores: { obsession: 2 }
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "하루 일과가?",
      en: "Your daily routine?",
      ja: "一日の日課は？",
      'zh-CN': "你的日常安排？",
      'zh-TW': "你的日常安排？",
      id: "Rutinitas harian Anda?",
      vi: "Nhịp sinh hoạt hàng ngày của bạn?"
    },
    options: [
      {
        text: {
          ko: "루틴이 있지만 유연하게 조절",
          en: "Have routine but adjust flexibly",
          ja: "ルーティンはあるが柔軟に調整",
          'zh-CN': "有惯例但灵活调整",
          'zh-TW': "有慣例但靈活調整",
          id: "Memiliki rutinitas tapi menyesuaikan dengan fleksibel",
          vi: "Có thói quen nhưng điều chỉnh linh hoạt"
        },
        scores: { healthy: 0 }
      },
      {
        text: {
          ko: "정확한 순서대로 하지 않으면 불안함",
          en: "Feel anxious if not done in exact order",
          ja: "正確な順序でしないと不安",
          'zh-CN': "不按准确顺序就不安",
          'zh-TW': "不按準確順序就不安",
          id: "Merasa cemas jika tidak dilakukan dalam urutan yang tepat",
          vi: "Cảm thấy lo lắng nếu không làm đúng thứ tự"
        },
        scores: { obsession: 2 }
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "완벽하지 않은 결과물에 대해?",
      en: "About imperfect results?",
      ja: "完璧でない結果について？",
      'zh-CN': "关于不完美的结果？",
      'zh-TW': "關於不完美的結果？",
      id: "Tentang hasil yang tidak sempurna?",
      vi: "Về kết quả không hoàn hảo?"
    },
    options: [
      {
        text: {
          ko: "\"충분히 잘했어\" 받아들임",
          en: "Accept \"done well enough\"",
          ja: "「十分よくできた」と受け入れる",
          'zh-CN': "接受\"已经足够好了\"",
          'zh-TW': "接受「已經足夠好了」",
          id: "Menerima \"sudah cukup baik\"",
          vi: "Chấp nhận \"đã đủ tốt\""
        },
        scores: { healthy: 0 }
      },
      {
        text: {
          ko: "계속 신경 쓰이고 고치고 싶음",
          en: "Keep bothering me and want to fix it",
          ja: "続けて気になり直したい",
          'zh-CN': "持续困扰，想要修改",
          'zh-TW': "持續困擾，想要修改",
          id: "Terus mengganggu dan ingin memperbaikinya",
          vi: "Tiếp tục làm phiền và muốn sửa nó"
        },
        scores: { obsession: 2 }
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "타인이 당신의 방식을 안 따르면?",
      en: "When others don't follow your way?",
      ja: "他人があなたの方式に従わない時？",
      'zh-CN': "当他人不遵循你的方式时？",
      'zh-TW': "當他人不遵循你的方式時？",
      id: "Ketika orang lain tidak mengikuti cara Anda?",
      vi: "Khi người khác không theo cách của bạn?"
    },
    options: [
      {
        text: {
          ko: "\"사람마다 다르지\" 이해함",
          en: "Understand \"everyone is different\"",
          ja: "「人それぞれ」と理解する",
          'zh-CN': "理解\"每个人不同\"",
          'zh-TW': "理解「每個人不同」",
          id: "Memahami \"setiap orang berbeda\"",
          vi: "Hiểu \"mỗi người khác nhau\""
        },
        scores: { healthy: 0 }
      },
      {
        text: {
          ko: "답답하고 화가 나며 고쳐주고 싶음",
          en: "Feel frustrated and angry, want to fix them",
          ja: "イライラして怒り、直してあげたい",
          'zh-CN': "感到沮丧愤怒，想要纠正他们",
          'zh-TW': "感到沮喪憤怒，想要糾正他們",
          id: "Merasa frustrasi dan marah, ingin memperbaiki mereka",
          vi: "Cảm thấy bực bội và tức giận, muốn sửa họ"
        },
        scores: { obsession: 2 }
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "이런 행동들이 일상생활에?",
      en: "How do these behaviors affect daily life?",
      ja: "これらの行動が日常生活に？",
      'zh-CN': "这些行为对日常生活的影响？",
      'zh-TW': "這些行為對日常生活的影響？",
      id: "Bagaimana perilaku ini mempengaruhi kehidupan sehari-hari?",
      vi: "Những hành vi này ảnh hưởng đến cuộc sống hàng ngày như thế nào?"
    },
    options: [
      {
        text: {
          ko: "별 영향 없음",
          en: "No particular impact",
          ja: "特に影響なし",
          'zh-CN': "没有特别影响",
          'zh-TW': "沒有特別影響",
          id: "Tidak ada dampak khusus",
          vi: "Không có ảnh hưởng đặc biệt"
        },
        scores: { healthy: 0 }
      },
      {
        text: {
          ko: "시간 소비, 피로, 관계 문제 등 영향 있음",
          en: "Impacts time, fatigue, relationships",
          ja: "時間の消費、疲労、関係の問題など影響あり",
          'zh-CN': "影响时间、疲劳、关系问题等",
          'zh-TW': "影響時間、疲勞、關係問題等",
          id: "Mempengaruhi waktu, kelelahan, hubungan",
          vi: "Ảnh hưởng đến thời gian, mệt mỏi, các vấn đề về mối quan hệ"
        },
        scores: { obsession: 2 }
      }
    ]
  }
];

export const obsessionResults: ObsessionResult[] = [
  {
    type: 'Type1',
    emoji: '🚨',
    title: {
      ko: '강박 수준 - 전문가 상담 권장',
      en: 'Obsession Level - Professional Consultation Recommended',
      ja: '強迫レベル - 専門家相談推奨',
      'zh-CN': '强迫水平 - 建议专业咨询',
      'zh-TW': '強迫水平 - 建議專業諮詢',
      id: 'Tingkat Obsesi - Konsultasi Profesional Direkomendasikan',
      vi: 'Mức Độ Ám Ảnh - Khuyến Nghị Tư Vấn Chuyên Nghiệp'
    },
    description: {
      ko: '일상이 힘들어요... 도움이 필요합니다',
      en: 'Daily life is difficult... help is needed',
      ja: '日常生活が困難です...助けが必要です',
      'zh-CN': '日常生活很困难...需要帮助',
      'zh-TW': '日常生活很困難...需要幫助',
      id: 'Kehidupan sehari-hari sulit... bantuan diperlukan',
      vi: 'Cuộc sống hàng ngày khó khăn... cần sự giúp đỡ'
    },
    detailedDescription: {
      ko: '강박 수준이 매우 높아 일상생활에 심각한 영향을 받고 있습니다. 반복적인 생각과 행동으로 많은 시간과 에너지를 소모하고, 불안과 스트레스가 매우 높습니다. 혼자 해결하기 어려운 수준으로, 전문가의 도움이 필요합니다. 강박장애일 가능성이 있으니 정신건강의학과 상담을 권장합니다.',
      en: 'The obsession level is very high and severely affecting daily life. Repetitive thoughts and behaviors consume a lot of time and energy, and anxiety and stress are very high. It is difficult to solve alone, and professional help is needed. OCD is possible, so psychiatric consultation is recommended.',
      ja: '強迫レベルが非常に高く、日常生活に深刻な影響を受けています。反復的な思考と行動で多くの時間とエネルギーを消費し、不安とストレスが非常に高いです。一人で解決するのが困難なレベルで、専門家の助けが必要です。強迫性障害の可能性があるため、精神科相談を推奨します。',
      'zh-CN': '强迫水平非常高，严重影响日常生活。重复的想法和行为消耗大量时间和精力，焦虑和压力非常高。独自解决有困难，需要专业人士的帮助。可能是强迫症，建议进行精神科咨询。',
      'zh-TW': '強迫水平非常高，嚴重影響日常生活。重複的想法和行為消耗大量時間和精力，焦慮和壓力非常高。獨自解決有困難，需要專業人士的幫助。可能是強迫症，建議進行精神科諮詢。',
      id: 'Tingkat obsesi sangat tinggi dan mempengaruhi kehidupan sehari-hari secara serius. Pikiran dan perilaku berulang menghabiskan banyak waktu dan energi, dan kecemasan serta stres sangat tinggi. Sulit diselesaikan sendiri, dan bantuan profesional diperlukan. Kemungkinan OCD, jadi konsultasi psikiatri direkomendasikan.',
      vi: 'Mức độ ám ảnh rất cao và ảnh hưởng nghiêm trọng đến cuộc sống hàng ngày. Suy nghĩ và hành vi lặp đi lặp lại tiêu tốn nhiều thời gian và năng lượng, và lo âu và căng thẳng rất cao. Khó giải quyết một mình, và cần sự giúp đỡ chuyên nghiệp. Có khả năng bị rối loạn ám ảnh cưỡng chế, nên khuyến nghị tư vấn tâm thần.'
    },
    symptoms: {
      ko: '반복 행동, 극심한 불안, 일상 불가능',
      en: 'Repetitive behaviors, extreme anxiety, daily life impossible',
      ja: '反復行動、極度の不安、日常生活不可能',
      'zh-CN': '重复行为、极度焦虑、无法正常生活',
      'zh-TW': '重複行為、極度焦慮、無法正常生活',
      id: 'Perilaku berulang, kecemasan ekstrem, kehidupan sehari-hari tidak mungkin',
      vi: 'Hành vi lặp đi lặp lại, lo âu cực độ, không thể sống bình thường'
    },
    riskLevel: {
      ko: '⚠️⚠️⚠️⚠️⚠️ 매우 높음',
      en: '⚠️⚠️⚠️⚠️⚠️ Very High',
      ja: '⚠️⚠️⚠️⚠️⚠️ 非常に高い',
      'zh-CN': '⚠️⚠️⚠️⚠️⚠️ 非常高',
      'zh-TW': '⚠️⚠️⚠️⚠️⚠️ 非常高',
      id: '⚠️⚠️⚠️⚠️⚠️ Sangat Tinggi',
      vi: '⚠️⚠️⚠️⚠️⚠️ Rất Cao'
    },
    impact: {
      ko: '업무 불가능, 관계 손상, 삶의 질 저하',
      en: 'Work impossible, relationship damage, quality of life decline',
      ja: '仕事不可能、関係損傷、生活の質低下',
      'zh-CN': '无法工作、关系受损、生活质量下降',
      'zh-TW': '無法工作、關係受損、生活質量下降',
      id: 'Pekerjaan tidak mungkin, kerusakan hubungan, penurunan kualitas hidup',
      vi: 'Không thể làm việc, tổn thương mối quan hệ, chất lượng cuộc sống giảm'
    },
    advice: {
      ko: '혼자 고민하지 마세요. 강박장애는 치료 가능한 질환입니다. 정신건강의학과를 방문하거나 심리상담센터에 연락해보세요.',
      en: 'Don\'t suffer alone. OCD is a treatable condition. Visit a psychiatrist or contact a counseling center.',
      ja: '一人で悩まないでください。強迫性障害は治療可能な疾患です。精神科を受診するか心理カウンセリングセンターに連絡してください。',
      'zh-CN': '不要独自承受。强迫症是可以治疗的疾病。请访问精神科或联系心理咨询中心。',
      'zh-TW': '不要獨自承受。強迫症是可以治療的疾病。請訪問精神科或聯繫心理諮詢中心。',
      id: 'Jangan menderita sendirian. OCD adalah kondisi yang dapat diobati. Kunjungi psikiater atau hubungi pusat konseling.',
      vi: 'Đừng chịu đựng một mình. Rối loạn ám ảnh cưỡng chế là một tình trạng có thể điều trị. Hãy đến gặp bác sĩ tâm thần hoặc liên hệ trung tâm tư vấn.'
    },
    managementTips: [
      {
        ko: '정신건강의학과 방문',
        en: 'Visit psychiatrist',
        ja: '精神科受診',
        'zh-CN': '访问精神科',
        'zh-TW': '訪問精神科',
        id: 'Kunjungi psikiater',
        vi: 'Đến gặp bác sĩ tâm thần'
      },
      {
        ko: '심리상담 전문가 상담',
        en: 'Consult psychology expert',
        ja: '心理カウンセリング専門家相談',
        'zh-CN': '咨询心理专家',
        'zh-TW': '諮詢心理專家',
        id: 'Konsultasi ahli psikologi',
        vi: 'Tư vấn chuyên gia tâm lý'
      },
      {
        ko: '인지행동치료 고려',
        en: 'Consider cognitive behavioral therapy',
        ja: '認知行動療法を検討',
        'zh-CN': '考虑认知行为治疗',
        'zh-TW': '考慮認知行為治療',
        id: 'Pertimbangkan terapi perilaku kognitif',
        vi: 'Cân nhắc liệu pháp nhận thức hành vi'
      },
      {
        ko: '가족/친구의 도움 요청',
        en: 'Ask for help from family/friends',
        ja: '家族・友人の助けを求める',
        'zh-CN': '向家人/朋友寻求帮助',
        'zh-TW': '向家人/朋友尋求幫助',
        id: 'Minta bantuan dari keluarga/teman',
        vi: 'Yêu cầu sự giúp đỡ từ gia đình/bạn bè'
      }
    ]
  },
  {
    type: 'Type2',
    emoji: '⚠️',
    title: {
      ko: '강박 경향 - 주의 필요',
      en: 'Obsession Tendency - Caution Needed',
      ja: '強迫傾向 - 注意が必要',
      'zh-CN': '强迫倾向 - 需要注意',
      'zh-TW': '強迫傾向 - 需要注意',
      id: 'Kecenderungan Obsesi - Perhatian Diperlukan',
      vi: 'Xu Hướng Ám Ảnh - Cần Thận Trọng'
    },
    description: {
      ko: '조금씩 힘들어지고 있어요',
      en: 'Slowly getting harder',
      ja: '徐々に辛くなってきています',
      'zh-CN': '逐渐变得困难',
      'zh-TW': '逐漸變得困難',
      id: 'Perlahan-lahan menjadi lebih sulit',
      vi: 'Dần dần trở nên khó khăn'
    },
    detailedDescription: {
      ko: '강박 경향이 있어 주의가 필요합니다. 특정 행동이나 생각에 과도하게 집착하고, 불안감이 높습니다. 아직 일상생활은 가능하지만 점점 더 힘들어질 수 있습니다. 지금부터 관리하지 않으면 악화될 수 있으니, 자가 관리나 상담을 고려해보세요. 스트레스 관리와 이완 기법이 도움이 됩니다.',
      en: 'There is an obsession tendency that requires attention. You are excessively attached to certain behaviors or thoughts, and anxiety is high. Daily life is still possible but may become increasingly difficult. If not managed now, it can worsen, so consider self-management or counseling. Stress management and relaxation techniques help.',
      ja: '強迫傾向があり注意が必要です。特定の行動や思考に過度に執着し、不安感が高いです。まだ日常生活は可能ですが、次第に困難になる可能性があります。今から管理しないと悪化する可能性があるため、自己管理やカウンセリングを検討してください。ストレス管理とリラックス技法が役立ちます。',
      'zh-CN': '有强迫倾向需要注意。对特定行为或想法过度执着，焦虑感很高。虽然日常生活仍有可能，但可能变得越来越困难。如果不从现在开始管理，可能会恶化，所以考虑自我管理或咨询。压力管理和放松技巧有帮助。',
      'zh-TW': '有強迫傾向需要注意。對特定行為或想法過度執著，焦慮感很高。雖然日常生活仍有可能，但可能變得越來越困難。如果不從現在開始管理，可能會惡化，所以考慮自我管理或諮詢。壓力管理和放鬆技巧有幫助。',
      id: 'Ada kecenderungan obsesi yang memerlukan perhatian. Anda berlebihan terikat pada perilaku atau pikiran tertentu, dan kecemasan tinggi. Kehidupan sehari-hari masih mungkin tetapi bisa menjadi semakin sulit. Jika tidak dikelola sekarang, bisa memburuk, jadi pertimbangkan manajemen diri atau konseling. Manajemen stres dan teknik relaksasi membantu.',
      vi: 'Có xu hướng ám ảnh cần chú ý. Bạn quá chú tâm vào các hành vi hoặc suy nghĩ cụ thể, và lo âu cao. Cuộc sống hàng ngày vẫn có thể nhưng có thể trở nên khó khăn hơn. Nếu không quản lý ngay bây giờ, có thể tồi tệ hơn, vì vậy hãy cân nhắc tự quản lý hoặc tư vấn. Quản lý căng thẳng và kỹ thuật thư giãn giúp ích.'
    },
    symptoms: {
      ko: '반복 확인, 높은 불안, 시간 소비',
      en: 'Repetitive checking, high anxiety, time consumption',
      ja: '反復確認、高い不安、時間の消費',
      'zh-CN': '重复检查、高度焦虑、消耗时间',
      'zh-TW': '重複檢查、高度焦慮、消耗時間',
      id: 'Pemeriksaan berulang, kecemasan tinggi, konsumsi waktu',
      vi: 'Kiểm tra lặp đi lặp lại, lo âu cao, tiêu tốn thời gian'
    },
    riskLevel: {
      ko: '⚠️⚠️⚠️ 중간-높음',
      en: '⚠️⚠️⚠️ Medium-High',
      ja: '⚠️⚠️⚠️ 中-高',
      'zh-CN': '⚠️⚠️⚠️ 中-高',
      'zh-TW': '⚠️⚠️⚠️ 中-高',
      id: '⚠️⚠️⚠️ Sedang-Tinggi',
      vi: '⚠️⚠️⚠️ Trung Bình-Cao'
    },
    impact: {
      ko: '피로, 시간 낭비, 스트레스',
      en: 'Fatigue, time waste, stress',
      ja: '疲労、時間の無駄、ストレス',
      'zh-CN': '疲劳、浪费时间、压力',
      'zh-TW': '疲勞、浪費時間、壓力',
      id: 'Kelelahan, pemborosan waktu, stres',
      vi: 'Mệt mỏi, lãng phí thời gian, căng thẳng'
    },
    advice: {
      ko: '명상, 요가, 심호흡 등 이완 기법을 배우세요. 불안이 심해지면 상담을 받아보세요. 악화되기 전에 관리가 중요합니다.',
      en: 'Learn relaxation techniques like meditation, yoga, breathing. Get counseling if anxiety worsens. Management before it gets worse is important.',
      ja: '瞑想、ヨガ、深呼吸などのリラックス技法を学びましょう。不安が悪化したらカウンセリングを受けましょう。悪化する前の管理が重要です。',
      'zh-CN': '学习放松技巧，如冥想、瑜伽、深呼吸。如果焦虑加重，请咨询。在恶化前管理很重要。',
      'zh-TW': '學習放鬆技巧，如冥想、瑜伽、深呼吸。如果焦慮加重，請諮詢。在惡化前管理很重要。',
      id: 'Pelajari teknik relaksasi seperti meditasi, yoga, pernapasan. Dapatkan konseling jika kecemasan memburuk. Manajemen sebelum memburuk adalah penting.',
      vi: 'Học các kỹ thuật thư giãn như thiền, yoga, thở sâu. Tư vấn nếu lo âu trở nên tồi tệ hơn. Quản lý trước khi trở nên tồi tệ là quan trọng.'
    },
    managementTips: [
      {
        ko: '호흡 명상 하루 10분',
        en: 'Breathing meditation 10 minutes daily',
        ja: '呼吸瞑想1日10分',
        'zh-CN': '每天呼吸冥想10分钟',
        'zh-TW': '每天呼吸冥想10分鐘',
        id: 'Meditasi pernapasan 10 menit sehari',
        vi: 'Thiền thở 10 phút mỗi ngày'
      },
      {
        ko: '확인 횟수 제한하기 (1-2회만)',
        en: 'Limit checking times (1-2 times only)',
        ja: '確認回数を制限（1-2回のみ）',
        'zh-CN': '限制检查次数（仅1-2次）',
        'zh-TW': '限制檢查次數（僅1-2次）',
        id: 'Batasi waktu pemeriksaan (hanya 1-2 kali)',
        vi: 'Giới hạn số lần kiểm tra (chỉ 1-2 lần)'
      },
      {
        ko: '불안 일기 쓰기',
        en: 'Write anxiety diary',
        ja: '不安日記を書く',
        'zh-CN': '写焦虑日记',
        'zh-TW': '寫焦慮日記',
        id: 'Tulis buku harian kecemasan',
        vi: 'Viết nhật ký lo âu'
      },
      {
        ko: '필요시 전문가 상담',
        en: 'Professional consultation if needed',
        ja: '必要に応じて専門家相談',
        'zh-CN': '必要时专业咨询',
        'zh-TW': '必要時專業諮詢',
        id: 'Konsultasi profesional jika diperlukan',
        vi: 'Tư vấn chuyên gia nếu cần'
      }
    ]
  },
  {
    type: 'Type3',
    emoji: '📐',
    title: {
      ko: '완벽주의 성향',
      en: 'Perfectionist Tendency',
      ja: '完璧主義傾向',
      'zh-CN': '完美主义倾向',
      'zh-TW': '完美主義傾向',
      id: 'Kecenderungan Perfeksionis',
      vi: 'Xu Hướng Hoàn Hảo'
    },
    description: {
      ko: '높은 기준이 있지만 유연해요',
      en: 'High standards but flexible',
      ja: '高い基準があるが柔軟',
      'zh-CN': '有高标准但灵活',
      'zh-TW': '有高標準但靈活',
      id: 'Standar tinggi tapi fleksibel',
      vi: 'Tiêu chuẩn cao nhưng linh hoạt'
    },
    detailedDescription: {
      ko: '완벽주의 성향이 있지만 건강한 수준입니다. 높은 기준을 가지고 있지만 융통성도 있고, 완벽하지 않아도 받아들일 수 있습니다. 불안보다는 성취욕에서 비롯된 기준이며, 일상생활에 큰 지장은 없습니다. 다만 스트레스 받을 때는 강박적 행동이 나올 수 있으니 자신을 관찰하세요.',
      en: 'You have perfectionist tendencies but at a healthy level. You have high standards but also flexibility, and can accept imperfection. Your standards come from achievement drive rather than anxiety, and do not significantly interfere with daily life. However, you may exhibit obsessive behaviors when stressed, so observe yourself.',
      ja: '完璧主義の傾向がありますが、健康的なレベルです。高い基準を持っていますが柔軟性もあり、完璧でなくても受け入れることができます。不安よりも達成欲から来た基準であり、日常生活に大きな支障はありません。ただし、ストレスを受けると強迫的行動が出る可能性があるので、自分を観察してください。',
      'zh-CN': '你有完美主义倾向，但在健康水平。你有高标准但也有灵活性，可以接受不完美。你的标准来自成就欲而非焦虑，不会显著干扰日常生活。然而，压力时可能出现强迫行为，所以要观察自己。',
      'zh-TW': '你有完美主義傾向，但在健康水平。你有高標準但也有靈活性，可以接受不完美。你的標準來自成就欲而非焦慮，不會顯著干擾日常生活。然而，壓力時可能出現強迫行為，所以要觀察自己。',
      id: 'Anda memiliki kecenderungan perfeksionis tetapi pada tingkat yang sehat. Anda memiliki standar tinggi tetapi juga fleksibilitas, dan dapat menerima ketidaksempurnaan. Standar Anda berasal dari dorongan pencapaian daripada kecemasan, dan tidak secara signifikan mengganggu kehidupan sehari-hari. Namun, Anda mungkin menunjukkan perilaku obsesif saat stres, jadi amati diri sendiri.',
      vi: 'Bạn có xu hướng hoàn hảo nhưng ở mức lành mạnh. Bạn có tiêu chuẩn cao nhưng cũng linh hoạt, và có thể chấp nhận sự không hoàn hảo. Tiêu chuẩn của bạn xuất phát từ động lực thành tựu hơn là lo âu, và không cản trở đáng kể cuộc sống hàng ngày. Tuy nhiên, bạn có thể thể hiện hành vi ám ảnh khi căng thẳng, vì vậy hãy quan sát bản thân.'
    },
    symptoms: {
      ko: '높은 기준, 성취욕, 유연성',
      en: 'High standards, achievement drive, flexibility',
      ja: '高い基準、達成欲、柔軟性',
      'zh-CN': '高标准、成就欲、灵活性',
      'zh-TW': '高標準、成就欲、靈活性',
      id: 'Standar tinggi, dorongan pencapaian, fleksibilitas',
      vi: 'Tiêu chuẩn cao, động lực thành tựu, tính linh hoạt'
    },
    riskLevel: {
      ko: '⚠️⚠️ 낮음-중간',
      en: '⚠️⚠️ Low-Medium',
      ja: '⚠️⚠️ 低-中',
      'zh-CN': '⚠️⚠️ 低-中',
      'zh-TW': '⚠️⚠️ 低-中',
      id: '⚠️⚠️ Rendah-Sedang',
      vi: '⚠️⚠️ Thấp-Trung Bình'
    },
    impact: {
      ko: '긍정적 영향 많음, 가끔 스트레스',
      en: 'Many positive impacts, occasional stress',
      ja: 'ポジティブな影響が多い、時々ストレス',
      'zh-CN': '积极影响多，偶尔压力',
      'zh-TW': '積極影響多，偶爾壓力',
      id: 'Banyak dampak positif, stres sesekali',
      vi: 'Nhiều tác động tích cực, thỉnh thoảng căng thẳng'
    },
    advice: {
      ko: '완벽은 없다는 것을 기억하세요. "충분히 좋다"를 받아들이는 연습을 하세요. 스트레스 관리가 중요합니다.',
      en: 'Remember perfection doesn\'t exist. Practice accepting "good enough". Stress management is important.',
      ja: '完璧はないことを覚えておきましょう。「十分良い」を受け入れる練習をしましょう。ストレス管理が重要です。',
      'zh-CN': '记住完美不存在。练习接受"足够好"。压力管理很重要。',
      'zh-TW': '記住完美不存在。練習接受「足夠好」。壓力管理很重要。',
      id: 'Ingat kesempurnaan tidak ada. Berlatih menerima "cukup baik". Manajemen stres penting.',
      vi: 'Nhớ rằng sự hoàn hảo không tồn tại. Thực hành chấp nhận "đủ tốt". Quản lý căng thẳng là quan trọng.'
    },
    managementTips: [
      {
        ko: '"Good enough" 철학 받아들이기',
        en: 'Accept "Good enough" philosophy',
        ja: '「十分良い」哲学を受け入れる',
        'zh-CN': '接受"足够好"的哲学',
        'zh-TW': '接受「足夠好」的哲學',
        id: 'Terima filosofi "Cukup baik"',
        vi: 'Chấp nhận triết lý "Đủ tốt"'
      },
      {
        ko: '우선순위 정하기 (모든 것을 완벽하게 할 순 없음)',
        en: 'Set priorities (can\'t perfect everything)',
        ja: '優先順位を決める（すべてを完璧にすることはできない）',
        'zh-CN': '设定优先级（无法让一切都完美）',
        'zh-TW': '設定優先級（無法讓一切都完美）',
        id: 'Tetapkan prioritas (tidak bisa menyempurnakan segalanya)',
        vi: 'Đặt ưu tiên (không thể hoàn hảo mọi thứ)'
      },
      {
        ko: '자신에게 너그럽기',
        en: 'Be generous to yourself',
        ja: '自分に寛大になる',
        'zh-CN': '对自己宽容',
        'zh-TW': '對自己寬容',
        id: 'Bersikap murah hati pada diri sendiri',
        vi: 'Hãy khoan dung với bản thân'
      },
      {
        ko: '실수를 배움의 기회로',
        en: 'Make mistakes a learning opportunity',
        ja: '失敗を学びの機会に',
        'zh-CN': '把错误当作学习机会',
        'zh-TW': '把錯誤當作學習機會',
        id: 'Jadikan kesalahan sebagai peluang belajar',
        vi: 'Biến sai lầm thành cơ hội học hỏi'
      }
    ]
  },
  {
    type: 'Type4',
    emoji: '⚖️',
    title: {
      ko: '균형잡힌 기준형',
      en: 'Balanced Standard Type',
      ja: 'バランスの取れた基準型',
      'zh-CN': '平衡标准型',
      'zh-TW': '平衡標準型',
      id: 'Tipe Standar Seimbang',
      vi: 'Loại Tiêu Chuẩn Cân Bằng'
    },
    description: {
      ko: '적절한 기준! 건강한 삶의 태도',
      en: 'Appropriate standards! Healthy life attitude',
      ja: '適切な基準！健康的な生活態度',
      'zh-CN': '适当的标准！健康的生活态度',
      'zh-TW': '適當的標準！健康的生活態度',
      id: 'Standar yang tepat! Sikap hidup sehat',
      vi: 'Tiêu chuẩn phù hợp! Thái độ sống lành mạnh'
    },
    detailedDescription: {
      ko: '건강하고 균형잡힌 기준을 가지고 있습니다. 깔끔함과 계획성은 있지만 과도하지 않고, 상황에 맞게 유연하게 대처합니다. 불안이나 강박 없이 자신만의 기준을 건강하게 유지합니다. 가장 이상적인 상태로, 현재의 균형을 잘 유지하면 됩니다.',
      en: 'You have healthy and balanced standards. You have cleanliness and planning but not excessive, and handle situations flexibly. You maintain your own standards healthily without anxiety or obsession. This is the most ideal state, and you should maintain your current balance.',
      ja: '健康的でバランスの取れた基準を持っています。きれいさと計画性はありますが過度ではなく、状況に応じて柔軟に対処します。不安や強迫なしに自分なりの基準を健康的に維持しています。最も理想的な状態で、現在のバランスをよく維持すればよいです。',
      'zh-CN': '你有健康和平衡的标准。你有整洁和计划性但不过度，能够灵活应对情况。你在没有焦虑或强迫的情况下健康地保持自己的标准。这是最理想的状态，你应该保持目前的平衡。',
      'zh-TW': '你有健康和平衡的標準。你有整潔和計劃性但不過度，能夠靈活應對情況。你在沒有焦慮或強迫的情況下健康地保持自己的標準。這是最理想的狀態，你應該保持目前的平衡。',
      id: 'Anda memiliki standar yang sehat dan seimbang. Anda memiliki kebersihan dan perencanaan tetapi tidak berlebihan, dan menangani situasi dengan fleksibel. Anda mempertahankan standar Anda sendiri dengan sehat tanpa kecemasan atau obsesi. Ini adalah keadaan yang paling ideal, dan Anda harus mempertahankan keseimbangan Anda saat ini.',
      vi: 'Bạn có tiêu chuẩn lành mạnh và cân bằng. Bạn có sự sạch sẽ và kế hoạch nhưng không quá mức, và xử lý tình huống một cách linh hoạt. Bạn duy trì tiêu chuẩn của riêng mình một cách lành mạnh mà không lo âu hay ám ảnh. Đây là trạng thái lý tưởng nhất, và bạn nên duy trì sự cân bằng hiện tại của mình.'
    },
    symptoms: {
      ko: '균형, 유연성, 적응력, 평온',
      en: 'Balance, flexibility, adaptability, peace',
      ja: 'バランス、柔軟性、適応力、平穏',
      'zh-CN': '平衡、灵活性、适应力、平静',
      'zh-TW': '平衡、靈活性、適應力、平靜',
      id: 'Keseimbangan, fleksibilitas, adaptabilitas, kedamaian',
      vi: 'Cân bằng, linh hoạt, khả năng thích ứng, bình yên'
    },
    riskLevel: {
      ko: '✅ 없음',
      en: '✅ None',
      ja: '✅ なし',
      'zh-CN': '✅ 无',
      'zh-TW': '✅ 無',
      id: '✅ Tidak Ada',
      vi: '✅ Không Có'
    },
    impact: {
      ko: '긍정적, 생산적, 건강함',
      en: 'Positive, productive, healthy',
      ja: 'ポジティブ、生産的、健康的',
      'zh-CN': '积极、高效、健康',
      'zh-TW': '積極、高效、健康',
      id: 'Positif, produktif, sehat',
      vi: 'Tích cực, hiệu quả, lành mạnh'
    },
    advice: {
      ko: '완벽해요! 지금처럼 균형잡힌 삶을 유지하세요. 당신의 태도는 많은 사람들의 롤모델입니다.',
      en: 'Perfect! Maintain your balanced life as is. Your attitude is a role model for many.',
      ja: '完璧です！今のようにバランスの取れた生活を維持しましょう。あなたの態度は多くの人のロールモデルです。',
      'zh-CN': '完美！保持你现在的平衡生活。你的态度是许多人的榜样。',
      'zh-TW': '完美！保持你現在的平衡生活。你的態度是許多人的榜樣。',
      id: 'Sempurna! Pertahankan kehidupan seimbang Anda seperti sekarang. Sikap Anda adalah panutan bagi banyak orang.',
      vi: 'Hoàn hảo! Duy trì cuộc sống cân bằng của bạn như hiện tại. Thái độ của bạn là hình mẫu cho nhiều người.'
    },
    managementTips: [
      {
        ko: '지금의 균형 유지하기',
        en: 'Maintain current balance',
        ja: '現在のバランスを維持',
        'zh-CN': '保持当前平衡',
        'zh-TW': '保持當前平衡',
        id: 'Pertahankan keseimbangan saat ini',
        vi: 'Duy trì sự cân bằng hiện tại'
      },
      {
        ko: '스트레스 관리 지속하기',
        en: 'Continue stress management',
        ja: 'ストレス管理を継続',
        'zh-CN': '持续压力管理',
        'zh-TW': '持續壓力管理',
        id: 'Lanjutkan manajemen stres',
        vi: 'Tiếp tục quản lý căng thẳng'
      },
      {
        ko: '필요시 기준 조정의 유연성',
        en: 'Flexibility to adjust standards when needed',
        ja: '必要に応じて基準調整の柔軟性',
        'zh-CN': '必要时灵活调整标准',
        'zh-TW': '必要時靈活調整標準',
        id: 'Fleksibilitas untuk menyesuaikan standar saat diperlukan',
        vi: 'Linh hoạt điều chỉnh tiêu chuẩn khi cần'
      },
      {
        ko: '자기 자신 돌보기',
        en: 'Take care of yourself',
        ja: '自分自身を大切にする',
        'zh-CN': '照顾好自己',
        'zh-TW': '照顧好自己',
        id: 'Jaga diri sendiri',
        vi: 'Chăm sóc bản thân'
      }
    ]
  },
  {
    type: 'Type5',
    emoji: '🌿',
    title: {
      ko: '편안한 자유형',
      en: 'Comfortable Free Type',
      ja: '快適な自由型',
      'zh-CN': '舒适自由型',
      'zh-TW': '舒適自由型',
      id: 'Tipe Bebas Nyaman',
      vi: 'Loại Tự Do Thoải Mái'
    },
    description: {
      ko: '너무 신경 안 써요! 여유로운 삶',
      en: 'Don\'t worry too much! Relaxed life',
      ja: 'あまり気にしない！ゆとりのある生活',
      'zh-CN': '不太担心！轻松的生活',
      'zh-TW': '不太擔心！輕鬆的生活',
      id: 'Jangan terlalu khawatir! Kehidupan santai',
      vi: 'Đừng lo lắng quá nhiều! Cuộc sống thoải mái'
    },
    detailedDescription: {
      ko: '기준이 느슨하고 자유로운 편입니다. 세세한 것에 신경 쓰지 않고 편하게 살아갑니다. 강박과는 거리가 멀고 불안도 적습니다. 여유롭고 스트레스가 적지만, 때로는 약간의 기준이 필요할 수도 있습니다. 너무 느슨하면 중요한 것을 놓칠 수 있으니 적절한 균형을 찾으세요.',
      en: 'You have loose and free standards. You live comfortably without worrying about details. You are far from obsession and have little anxiety. You are relaxed with low stress, but may sometimes need some standards. If too loose, you may miss important things, so find an appropriate balance.',
      ja: '基準が緩くて自由な傾向です。細かいことに神経を使わずに快適に生きています。強迫とは距離があり、不安も少ないです。余裕がありストレスが少ないですが、時には少しの基準が必要かもしれません。緩すぎると重要なことを見逃す可能性があるので、適切なバランスを見つけてください。',
      'zh-CN': '你的标准松弛且自由。你生活得舒适，不担心细节。你远离强迫，焦虑很少。你轻松压力低，但有时可能需要一些标准。太松弛可能错过重要事情，所以要找到适当的平衡。',
      'zh-TW': '你的標準鬆弛且自由。你生活得舒適，不擔心細節。你遠離強迫，焦慮很少。你輕鬆壓力低，但有時可能需要一些標準。太鬆弛可能錯過重要事情，所以要找到適當的平衡。',
      id: 'Anda memiliki standar yang longgar dan bebas. Anda hidup nyaman tanpa khawatir tentang detail. Anda jauh dari obsesi dan memiliki sedikit kecemasan. Anda santai dengan stres rendah, tetapi kadang-kadang mungkin memerlukan beberapa standar. Jika terlalu longgar, Anda mungkin melewatkan hal-hal penting, jadi temukan keseimbangan yang tepat.',
      vi: 'Bạn có tiêu chuẩn lỏng lẻo và tự do. Bạn sống thoải mái mà không lo lắng về chi tiết. Bạn xa ám ảnh và có ít lo âu. Bạn thoải mái với căng thẳng thấp, nhưng đôi khi có thể cần một số tiêu chuẩn. Nếu quá lỏng lẻo, bạn có thể bỏ lỡ những điều quan trọng, vì vậy hãy tìm sự cân bằng phù hợp.'
    },
    symptoms: {
      ko: '자유로움, 여유, 낮은 스트레스',
      en: 'Freedom, ease, low stress',
      ja: '自由さ、余裕、低ストレス',
      'zh-CN': '自由、轻松、低压',
      'zh-TW': '自由、輕鬆、低壓',
      id: 'Kebebasan, kemudahan, stres rendah',
      vi: 'Tự do, thoải mái, căng thẳng thấp'
    },
    riskLevel: {
      ko: '✅ 없음',
      en: '✅ None',
      ja: '✅ なし',
      'zh-CN': '✅ 无',
      'zh-TW': '✅ 無',
      id: '✅ Tidak Ada',
      vi: '✅ Không Có'
    },
    impact: {
      ko: '편안함, 가끔 무계획',
      en: 'Comfort, occasional lack of planning',
      ja: '快適さ、時々無計画',
      'zh-CN': '舒适，偶尔缺乏计划',
      'zh-TW': '舒適，偶爾缺乏計劃',
      id: 'Kenyamanan, terkadang kurang perencanaan',
      vi: 'Thoải mái, thỉnh thoảng thiếu kế hoạch'
    },
    advice: {
      ko: '여유로운 건 좋지만 최소한의 기준은 있으면 좋아요. 중요한 일은 챙기세요!',
      en: 'Being relaxed is good but minimum standards help. Keep track of important things!',
      ja: '余裕があるのは良いが、最低限の基準があると良いです。重要なことは守りましょう！',
      'zh-CN': '轻松很好，但最低标准有帮助。注意重要的事情！',
      'zh-TW': '輕鬆很好，但最低標準有幫助。注意重要的事情！',
      id: 'Santai itu baik tapi standar minimum membantu. Awasi hal-hal penting!',
      vi: 'Thoải mái là tốt nhưng tiêu chuẩn tối thiểu sẽ giúp ích. Theo dõi những điều quan trọng!'
    },
    managementTips: [
      {
        ko: '중요한 일은 리스트 만들기',
        en: 'Make a list of important things',
        ja: '重要なことはリストを作る',
        'zh-CN': '列出重要事项',
        'zh-TW': '列出重要事項',
        id: 'Buat daftar hal-hal penting',
        vi: 'Lập danh sách những việc quan trọng'
      },
      {
        ko: '최소한의 청결과 정리',
        en: 'Minimum cleanliness and organization',
        ja: '最低限の清潔さと整理',
        'zh-CN': '最低限度的清洁和整理',
        'zh-TW': '最低限度的清潔和整理',
        id: 'Kebersihan dan organisasi minimum',
        vi: 'Vệ sinh và tổ chức tối thiểu'
      },
      {
        ko: '건강 관리 루틴',
        en: 'Health management routine',
        ja: '健康管理ルーティン',
        'zh-CN': '健康管理常规',
        'zh-TW': '健康管理常規',
        id: 'Rutinitas manajemen kesehatan',
        vi: 'Thói quen quản lý sức khỏe'
      },
      {
        ko: '약속과 마감 지키기',
        en: 'Keep promises and deadlines',
        ja: '約束と締切を守る',
        'zh-CN': '遵守承诺和截止日期',
        'zh-TW': '遵守承諾和截止日期',
        id: 'Jaga janji dan tenggat waktu',
        vi: 'Giữ lời hứa và thời hạn'
      }
    ]
  },
  {
    type: 'Type6',
    emoji: '🦋',
    title: {
      ko: '매우 자유로운형',
      en: 'Very Free Type',
      ja: '非常に自由な型',
      'zh-CN': '非常自由型',
      'zh-TW': '非常自由型',
      id: 'Tipe Sangat Bebas',
      vi: 'Loại Rất Tự Do'
    },
    description: {
      ko: '기준? 그게 뭔데? 완전 자유인',
      en: 'Standards? What\'s that? Completely free',
      ja: '基準？それは何？完全に自由',
      'zh-CN': '标准？那是什么？完全自由',
      'zh-TW': '標準？那是什麼？完全自由',
      id: 'Standar? Apa itu? Sepenuhnya bebas',
      vi: 'Tiêu chuẩn? Đó là gì? Hoàn toàn tự do'
    },
    detailedDescription: {
      ko: '거의 모든 것에 신경 쓰지 않는 매우 자유로운 타입입니다. 강박과는 정반대로, 기준이나 규칙에 전혀 얽매이지 않습니다. 스트레스는 없지만 때로는 생활에 혼란이 올 수 있습니다. 건강, 위생, 안전 등 기본적인 것은 챙기는 것이 좋습니다.',
      en: 'You are a very free type who doesn\'t care about almost anything. You are the opposite of obsession, not bound by any standards or rules. There is no stress, but sometimes life can be confusing. It is good to keep track of basic things like health, hygiene, and safety.',
      ja: 'ほとんどすべてのことに神経を使わない非常に自由なタイプです。強迫とは正反対で、基準や規則に全く縛られません。ストレスはありませんが、時には生活に混乱が生じる可能性があります。健康、衛生、安全などの基本的なことは気にするのが良いです。',
      'zh-CN': '你是一个几乎不关心任何事情的非常自由的类型。你是强迫的反面，不受任何标准或规则约束。没有压力，但有时生活可能会混乱。最好关注基本事物，如健康、卫生和安全。',
      'zh-TW': '你是一個幾乎不關心任何事情的非常自由的類型。你是強迫的反面，不受任何標準或規則約束。沒有壓力，但有時生活可能會混亂。最好關注基本事物，如健康、衛生和安全。',
      id: 'Anda adalah tipe yang sangat bebas yang tidak peduli tentang hampir segalanya. Anda adalah kebalikan dari obsesi, tidak terikat oleh standar atau aturan apa pun. Tidak ada stres, tetapi kadang-kadang hidup bisa membingungkan. Baik untuk memperhatikan hal-hal dasar seperti kesehatan, kebersihan, dan keselamatan.',
      vi: 'Bạn là loại rất tự do không quan tâm đến hầu hết mọi thứ. Bạn là mặt đối lập của ám ảnh, không bị ràng buộc bởi bất kỳ tiêu chuẩn hoặc quy tắc nào. Không có căng thẳng, nhưng đôi khi cuộc sống có thể gây nhầm lẫn. Tốt là theo dõi những điều cơ bản như sức khỏe, vệ sinh và an toàn.'
    },
    symptoms: {
      ko: '극도의 자유, 무계획, 즉흥적',
      en: 'Extreme freedom, no planning, spontaneous',
      ja: '極度の自由、無計画、即興的',
      'zh-CN': '极度自由、无计划、即兴',
      'zh-TW': '極度自由、無計劃、即興',
      id: 'Kebebasan ekstrem, tanpa rencana, spontan',
      vi: 'Tự do cực độ, không kế hoạch, tự phát'
    },
    riskLevel: {
      ko: '⚠️ 약간 (너무 자유로운형이라)',
      en: '⚠️ Slight (too free type)',
      ja: '⚠️ 少し（自由すぎる型のため）',
      'zh-CN': '⚠️ 轻微（过于自由型）',
      'zh-TW': '⚠️ 輕微（過於自由型）',
      id: '⚠️ Sedikit (tipe terlalu bebas)',
      vi: '⚠️ Nhẹ (loại quá tự do)'
    },
    impact: {
      ko: '편함, 하지만 혼란 가능',
      en: 'Comfortable, but possible confusion',
      ja: '快適だが混乱の可能性',
      'zh-CN': '舒适，但可能混乱',
      'zh-TW': '舒適，但可能混亂',
      id: 'Nyaman, tapi kemungkinan kebingungan',
      vi: 'Thoải mái, nhưng có thể gây nhầm lẫn'
    },
    advice: {
      ko: '자유도 좋지만 건강과 안전을 위한 최소한의 기준은 필요해요!',
      en: 'Freedom is good but minimum standards for en:health and safety are needed!',
      ja: '自由も良いが、健康と安全のための最低限の基準は必要です！',
      'zh-CN': '自由很好，但需要健康和安全的最低标准！',
      'zh-TW': '自由很好，但需要健康和安全的最低標準！',
      id: 'Kebebasan baik tapi standar minimum untuk kesehatan dan keselamatan diperlukan!',
      vi: 'Tự do tốt nhưng cần tiêu chuẩn tối thiểu cho sức khỏe và an toàn!'
    },
    managementTips: [
      {
        ko: '기본 위생 (샤워, 양치)',
        en: 'Basic hygiene (shower, brushing teeth)',
        ja: '基本的な衛生（シャワー、歯磨き）',
        'zh-CN': '基本卫生（淋浴、刷牙）',
        'zh-TW': '基本衛生（淋浴、刷牙）',
        id: 'Kebersihan dasar (mandi, sikat gigi)',
        vi: 'Vệ sinh cơ bản (tắm, đánh răng)'
      },
      {
        ko: '건강 관리 (식사, 수면)',
        en: 'Health management (meals, sleep)',
        ja: '健康管理（食事、睡眠）',
        'zh-CN': '健康管理（饮食、睡眠）',
        'zh-TW': '健康管理（飲食、睡眠）',
        id: 'Manajemen kesehatan (makan, tidur)',
        vi: 'Quản lý sức khỏe (ăn uống, ngủ)'
      },
      {
        ko: '안전 (문 잠금, 가스 확인)',
        en: 'Safety (door locks, gas check)',
        ja: '安全（ドアの施錠、ガス確認）',
        'zh-CN': '安全（门锁、燃气检查）',
        'zh-TW': '安全（門鎖、燃氣檢查）',
        id: 'Keselamatan (kunci pintu, cek gas)',
        vi: 'An toàn (khóa cửa, kiểm tra gas)'
      },
      {
        ko: '중요한 약속 지키기',
        en: 'Keep important promises',
        ja: '重要な約束を守る',
        'zh-CN': '遵守重要承诺',
        'zh-TW': '遵守重要承諾',
        id: 'Jaga janji penting',
        vi: 'Giữ lời hứa quan trọng'
      }
    ]
  }
];

export function calculateObsessionResult(answers: Array<Record<string, number>>): string {
  let obsessionScore = 0;
  
  answers.forEach(answer => {
    obsessionScore += answer.obsession || 0;
  });
  
  // 점수 범위로 결과 결정
  if (obsessionScore >= 20) return 'Type1';
  if (obsessionScore >= 14) return 'Type2';
  if (obsessionScore >= 8) return 'Type3';
  if (obsessionScore >= 4) return 'Type4';
  if (obsessionScore >= 2) return 'Type5';
  return 'Type6';
}

