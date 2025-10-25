export interface CompetitivenessQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    scores: {
      type1: number;
      type2: number;
      type3: number;
      type4: number;
      type5: number;
    };
  }[];
}

export interface CompetitivenessResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  strengths: Record<string, string>[];
  weaknesses: Record<string, string>[];
  score: Record<string, string>;
  advice: Record<string, string>;
  warningTitle: Record<string, string>;
  warningItems: Record<string, string[]>;
}

export const competitivenessQuestions: CompetitivenessQuestion[] = [
  {
    id: 1,
    question: {
      ko: "게임이나 경기에서 졌을 때?",
      en: "When you lose in a game or competition?",
      ja: "ゲームや競技で負けた時？",
      'zh-CN': "在游戏或比赛中输了时？",
      'zh-TW': "在遊戲或比賽中輸了時？",
      vi: "Khi bạn thua trong một trò chơi hoặc cuộc thi?",
      id: "Saat Anda kalah dalam permainan atau kompetisi?"
    },
    options: [
      {
        text: {
          ko: "화나고 분해서 다시 하고 싶음",
          en: "Angry and frustrated, want to try again",
          ja: "怒って悔しくてもう一度やりたい",
          'zh-CN': "愤怒和沮丧，想再试一次",
          'zh-TW': "憤怒和沮喪，想再試一次",
          vi: "Tức giận và thất vọng, muốn thử lại",
          id: "Marah dan frustrasi, ingin mencoba lagi"
        },
        scores: { type1: 3, type2: 0, type3: 0, type4: 0, type5: 0 }
      },
      {
        text: {
          ko: "아쉽지만 다음엔 이기겠다고 생각",
          en: "Disappointed but think I'll win next time",
          ja: "残念だけど次は勝つと思う",
          'zh-CN': "失望但认为下次会赢",
          'zh-TW': "失望但認為下次會贏",
          vi: "Thất vọng nhưng nghĩ lần sau sẽ thắng",
          id: "Kecewa tapi berpikir akan menang lain kali"
        },
        scores: { type1: 0, type2: 3, type3: 0, type4: 0, type5: 0 }
      },
      {
        text: {
          ko: "\"재미있었어\" 결과보다 과정에 만족",
          en: "\"It was fun\" Satisfied with the process more than result",
          ja: "「楽しかった」結果より過程に満足",
          'zh-CN': "「很好玩」过程比结果更让人满足",
          'zh-TW': "「很好玩」過程比結果更讓人滿足",
          vi: "\"Vui quá\" Hài lòng với quá trình hơn kết quả",
          id: "\"Menyenangkan\" Puas dengan proses lebih dari hasil"
        },
        scores: { type1: 0, type2: 0, type3: 3, type4: 0, type5: 0 }
      },
      {
        text: {
          ko: "별로 신경 안 씀",
          en: "Don't really care",
          ja: "あまり気にしない",
          'zh-CN': "不太在意",
          'zh-TW': "不太在意",
          vi: "Không thực sự quan tâm",
          id: "Tidak terlalu peduli"
        },
        scores: { type1: 0, type2: 0, type3: 0, type4: 8, type5: 2 }
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "친구가 나보다 좋은 성적을 받았을 때?",
      en: "When a friend gets better grades than you?",
      ja: "友達が自分より良い成績を取った時？",
      'zh-CN': "朋友成绩比你好的时候？",
      'zh-TW': "朋友成績比你好的時候？",
      vi: "Khi bạn bè nhận được điểm cao hơn bạn?",
      id: "Saat teman mendapat nilai lebih baik dari Anda?"
    },
    options: [
      {
        text: {
          ko: "질투나고 나도 더 잘해야겠다고 생각",
          en: "Jealous and think I need to do better",
          ja: "嫉妬して自分ももっと頑張らなければと思う",
          'zh-CN': "嫉妒并认为自己需要做得更好",
          'zh-TW': "嫉妒並認為自己需要做得更好",
          vi: "Ghen tị và nghĩ mình cần làm tốt hơn",
          id: "Cemburu dan berpikir saya perlu berbuat lebih baik"
        },
        scores: { type1: 3, type2: 0, type3: 0, type4: 0, type5: 0 }
      },
      {
        text: {
          ko: "축하해주지만 속으로 자극받음",
          en: "Congratulate but feel motivated inside",
          ja: "お祝いするが心の中では刺激を受ける",
          'zh-CN': "祝贺但内心受到激励",
          'zh-TW': "祝賀但內心受到激勵",
          vi: "Chúc mừng nhưng cảm thấy được động viên",
          id: "Memberi selamat tapi merasa termotivasi di dalam"
        },
        scores: { type1: 0, type2: 3, type3: 0, type4: 0, type5: 0 }
      },
      {
        text: {
          ko: "진심으로 축하하고 배울 점 찾음",
          en: "Sincerely congratulate and look for what to learn",
          ja: "心からお祝いして学ぶ点を見つける",
          'zh-CN': "真诚祝贺并寻找学习之处",
          'zh-TW': "真誠祝賀並尋找學習之處",
          vi: "Chúc mừng chân thành và tìm điều để học hỏi",
          id: "Mengucapkan selamat dengan tulus dan mencari hal untuk dipelajari"
        },
        scores: { type1: 0, type2: 0, type3: 3, type4: 0, type5: 0 }
      },
      {
        text: {
          ko: "그 사람은 그 사람, 나는 나",
          en: "That person is that person, I am me",
          ja: "その人はその人、私は私",
          'zh-CN': "他是他，我是我",
          'zh-TW': "他是他，我是我",
          vi: "Người đó là người đó, tôi là tôi",
          id: "Orang itu adalah orang itu, saya adalah saya"
        },
        scores: { type1: 0, type2: 0, type3: 0, type4: 8, type5: 2 }
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "팀 프로젝트에서 당신의 목표는?",
      en: "What is your goal in a team project?",
      ja: "チームプロジェクトでのあなたの目標は？",
      'zh-CN': "在团队项目中你的目标是？",
      'zh-TW': "在團隊項目中你的目標是？",
      vi: "Mục tiêu của bạn trong dự án nhóm là gì?",
      id: "Apa tujuan Anda dalam proyek tim?"
    },
    options: [
      {
        text: {
          ko: "무조건 1등, 최고의 결과",
          en: "Must be first, best results",
          ja: "絶対1位、最高の結果",
          'zh-CN': "必须是第一，最好的结果",
          'zh-TW': "必須是第一，最好的結果",
          vi: "Phải đứng nhất, kết quả tốt nhất",
          id: "Harus pertama, hasil terbaik"
        },
        scores: { type1: 3, type2: 0, type3: 0, type4: 0, type5: 0 }
      },
      {
        text: {
          ko: "좋은 결과를 내고 싶음",
          en: "Want to achieve good results",
          ja: "良い結果を出したい",
          'zh-CN': "想要取得好结果",
          'zh-TW': "想要取得好結果",
          vi: "Muốn đạt kết quả tốt",
          id: "Ingin mencapai hasil yang baik"
        },
        scores: { type1: 0, type2: 3, type3: 0, type4: 0, type5: 0 }
      },
      {
        text: {
          ko: "팀원들과 협력하며 즐기기",
          en: "Enjoy cooperating with team members",
          ja: "チームメンバーと協力しながら楽しむ",
          'zh-CN': "与团队成员合作并享受",
          'zh-TW': "與團隊成員合作並享受",
          vi: "Tận hưởng khi hợp tác với các thành viên nhóm",
          id: "Menikmati bekerja sama dengan anggota tim"
        },
        scores: { type1: 0, type2: 0, type3: 3, type4: 0, type5: 0 }
      },
      {
        text: {
          ko: "적당히 해서 끝내기",
          en: "Do moderately and finish",
          ja: "適当にやって終わらせる",
          'zh-CN': "适度完成即可",
          'zh-TW': "適度完成即可",
          vi: "Làm vừa phải và hoàn thành",
          id: "Melakukan secara moderat dan selesai"
        },
        scores: { type1: 0, type2: 0, type3: 0, type4: 8, type5: 2 }
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "시험 성적이 기대보다 낮았을 때?",
      en: "When exam results are lower than expected?",
      ja: "試験の成績が期待より低かった時？",
      'zh-CN': "考试结果低于预期时？",
      'zh-TW': "考試結果低於預期時？",
      vi: "Khi kết quả thi thấp hơn mong đợi?",
      id: "Saat hasil ujian lebih rendah dari yang diharapkan?"
    },
    options: [
      {
        text: {
          ko: "너무 화나고 자존심 상함",
          en: "Very angry and ego hurt",
          ja: "とても怒って自尊心が傷つく",
          'zh-CN': "非常愤怒，自尊心受损",
          'zh-TW': "非常憤怒，自尊心受損",
          vi: "Rất tức giận và tự ái bị tổn thương",
          id: "Sangat marah dan ego terluka"
        },
        scores: { type1: 3, type2: 0, type3: 0, type4: 0, type5: 0 }
      },
      {
        text: {
          ko: "다음엔 더 잘하겠다고 다짐",
          en: "Promise to do better next time",
          ja: "次はもっと頑張ると決意",
          'zh-CN': "决心下次做得更好",
          'zh-TW': "決心下次做得更好",
          vi: "Hứa sẽ làm tốt hơn lần sau",
          id: "Berjanji untuk berbuat lebih baik lain kali"
        },
        scores: { type1: 0, type2: 3, type3: 0, type4: 0, type5: 0 }
      },
      {
        text: {
          ko: "아쉽지만 최선을 다했으니 괜찮음",
          en: "Disappointing but okay since I did my best",
          ja: "残念だけど最善を尽くしたから大丈夫",
          'zh-CN': "遗憾但已尽力所以没关系",
          'zh-TW': "遺憾但已盡力所以沒關係",
          vi: "Thất vọng nhưng ổn vì đã cố gắng hết sức",
          id: "Mengecewakan tapi tidak apa-apa karena sudah berusaha maksimal"
        },
        scores: { type1: 0, type2: 0, type3: 3, type4: 0, type5: 0 }
      },
      {
        text: {
          ko: "별로 신경 안 씀",
          en: "Don't really care",
          ja: "あまり気にしない",
          'zh-CN': "不太在意",
          'zh-TW': "不太在意",
          vi: "Không thực sự quan tâm",
          id: "Tidak terlalu peduli"
        },
        scores: { type1: 0, type2: 0, type3: 0, type4: 2, type5: 8 }
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "동료가 승진했을 때?",
      en: "When a colleague gets promoted?",
      ja: "同僚が昇進した時？",
      'zh-CN': "同事升职时？",
      'zh-TW': "同事升職時？",
      vi: "Khi đồng nghiệp được thăng chức?",
      id: "Saat rekan kerja dipromosikan?"
    },
    options: [
      {
        text: {
          ko: "질투나고 내가 더 노력해야겠다고 생각",
          en: "Jealous and think I need to work harder",
          ja: "嫉妬して自分ももっと努力しなければと思う",
          'zh-CN': "嫉妒并认为自己需要更努力",
          'zh-TW': "嫉妒並認為自己需要更努力",
          vi: "Ghen tị và nghĩ mình cần cố gắng hơn",
          id: "Cemburu dan berpikir saya perlu bekerja lebih keras"
        },
        scores: { type1: 3, type2: 0, type3: 0, type4: 0, type5: 0 }
      },
      {
        text: {
          ko: "축하하지만 나도 빨리 올라가야지",
          en: "Congratulate but I need to rise faster too",
          ja: "お祝いするが自分も早く上がらなければ",
          'zh-CN': "祝贺但我也需要尽快晋升",
          'zh-TW': "祝賀但我也需要盡快晉升",
          vi: "Chúc mừng nhưng tôi cũng cần thăng tiến nhanh",
          id: "Memberi selamat tapi saya juga perlu naik cepat"
        },
        scores: { type1: 0, type2: 3, type3: 0, type4: 0, type5: 0 }
      },
      {
        text: {
          ko: "진심으로 축하하고 응원함",
          en: "Sincerely congratulate and cheer",
          ja: "心からお祝いして応援する",
          'zh-CN': "真诚祝贺并支持",
          'zh-TW': "真誠祝賀並支持",
          vi: "Chúc mừng chân thành và cổ vũ",
          id: "Mengucapkan selamat dengan tulus dan menyemangati"
        },
        scores: { type1: 0, type2: 0, type3: 3, type4: 0, type5: 0 }
      },
      {
        text: {
          ko: "관심 없음",
          en: "Not interested",
          ja: "興味なし",
          'zh-CN': "不感兴趣",
          'zh-TW': "不感興趣",
          vi: "Không quan tâm",
          id: "Tidak tertarik"
        },
        scores: { type1: 0, type2: 0, type3: 0, type4: 2, type5: 8 }
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "운동이나 게임을 할 때?",
      en: "When exercising or playing games?",
      ja: "運動やゲームをする時？",
      'zh-CN': "运动或玩游戏时？",
      'zh-TW': "運動或玩遊戲時？",
      vi: "Khi tập thể dục hoặc chơi game?",
      id: "Saat berolahraga atau bermain game?"
    },
    options: [
      {
        text: {
          ko: "이기는 것이 목표, 지면 재미없음",
          en: "Winning is the goal, losing is no fun",
          ja: "勝つことが目標、負けるとつまらない",
          'zh-CN': "获胜是目标，输了就没意思",
          'zh-TW': "獲勝是目標，輸了就沒意思",
          vi: "Thắng là mục tiêu, thua thì không vui",
          id: "Menang adalah tujuan, kalah tidak menyenangkan"
        },
        scores: { type1: 3, type2: 0, type3: 0, type4: 0, type5: 0 }
      },
      {
        text: {
          ko: "이기면 좋지만 즐기는 것도 중요",
          en: "Winning is good but enjoying is also important",
          ja: "勝てればいいが楽しむことも重要",
          'zh-CN': "赢了固然好，但享受过程也很重要",
          'zh-TW': "贏了固然好，但享受過程也很重要",
          vi: "Thắng thì tốt nhưng tận hưởng cũng quan trọng",
          id: "Menang itu baik tapi menikmati juga penting"
        },
        scores: { type1: 0, type2: 3, type3: 0, type4: 0, type5: 0 }
      },
      {
        text: {
          ko: "결과보다 운동 자체가 좋음",
          en: "Exercise itself is better than results",
          ja: "結果より運動自体が良い",
          'zh-CN': "运动本身比结果更重要",
          'zh-TW': "運動本身比結果更重要",
          vi: "Bản thân việc tập thể dục tốt hơn kết quả",
          id: "Olahraga itu sendiri lebih baik dari hasil"
        },
        scores: { type1: 0, type2: 0, type3: 3, type4: 0, type5: 0 }
      },
      {
        text: {
          ko: "그냥 시간 때우기",
          en: "Just passing time",
          ja: "ただ時間つぶし",
          'zh-CN': "只是打发时间",
          'zh-TW': "只是打發時間",
          vi: "Chỉ là giết thời gian",
          id: "Hanya membuang waktu"
        },
        scores: { type1: 0, type2: 0, type3: 0, type4: 2, type5: 8 }
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "SNS에서 남들의 성공을 봤을 때?",
      en: "When you see others' success on SNS?",
      ja: "SNSで他人の成功を見た時？",
      'zh-CN': "在SNS上看到他人成功时？",
      'zh-TW': "在SNS上看到他人成功時？",
      vi: "Khi bạn thấy thành công của người khác trên SNS?",
      id: "Saat Anda melihat kesuksesan orang lain di SNS?"
    },
    options: [
      {
        text: {
          ko: "부럽고 나도 더 잘해야겠다고 생각",
          en: "Envious and think I need to do better",
          ja: "羨ましくて自分ももっと頑張らなければと思う",
          'zh-CN': "羡慕并认为自己需要做得更好",
          'zh-TW': "羨慕並認為自己需要做得更好",
          vi: "Ghen tị và nghĩ mình cần làm tốt hơn",
          id: "Iri dan berpikir saya perlu berbuat lebih baik"
        },
        scores: { type1: 3, type2: 0, type3: 0, type4: 0, type5: 0 }
      },
      {
        text: {
          ko: "자극받고 동기부여됨",
          en: "Feel stimulated and motivated",
          ja: "刺激を受けてやる気になる",
          'zh-CN': "受到激励并产生动力",
          'zh-TW': "受到激勵並產生動力",
          vi: "Cảm thấy được kích thích và có động lực",
          id: "Merasa terstimulasi dan termotivasi"
        },
        scores: { type1: 0, type2: 3, type3: 0, type4: 0, type5: 0 }
      },
      {
        text: {
          ko: "진심으로 좋아요 누르고 축하",
          en: "Sincerely like and congratulate",
          ja: "心からいいねを押して祝福",
          'zh-CN': "真诚点赞并祝贺",
          'zh-TW': "真誠點讚並祝賀",
          vi: "Chân thành like và chúc mừng",
          id: "Menyukai dan mengucapkan selamat dengan tulus"
        },
        scores: { type1: 0, type2: 0, type3: 3, type4: 0, type5: 0 }
      },
      {
        text: {
          ko: "별 감흥 없음",
          en: "No special feeling",
          ja: "特別な感動なし",
          'zh-CN': "没什么特别感受",
          'zh-TW': "沒什麼特別感受",
          vi: "Không có cảm xúc đặc biệt",
          id: "Tidak ada perasaan khusus"
        },
        scores: { type1: 0, type2: 0, type3: 0, type4: 2, type5: 8 }
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "경쟁이 있는 상황에서?",
      en: "In a competitive situation?",
      ja: "競争がある状況で？",
      'zh-CN': "在有竞争的情况下？",
      'zh-TW': "在有競爭的情況下？",
      vi: "Trong tình huống có cạnh tranh?",
      id: "Dalam situasi kompetitif?"
    },
    options: [
      {
        text: {
          ko: "불타오르고 힘이 남",
          en: "Burn with passion and full of energy",
          ja: "燃え上がって力がみなぎる",
          'zh-CN': "激情燃烧并充满力量",
          'zh-TW': "激情燃燒並充滿力量",
          vi: "Cháy bỏng đam mê và tràn đầy năng lượng",
          id: "Terbakar dengan semangat dan penuh energi"
        },
        scores: { type1: 3, type2: 0, type3: 0, type4: 0, type5: 0 }
      },
      {
        text: {
          ko: "적당히 자극받고 노력함",
          en: "Feel moderately stimulated and work hard",
          ja: "適度に刺激を受けて努力する",
          'zh-CN': "适度受到激励并努力",
          'zh-TW': "適度受到激勵並努力",
          vi: "Cảm thấy được kích thích vừa phải và cố gắng",
          id: "Merasa terstimulasi secara moderat dan bekerja keras"
        },
        scores: { type1: 0, type2: 3, type3: 0, type4: 0, type5: 0 }
      },
      {
        text: {
          ko: "경쟁보다 협력이 좋음",
          en: "Cooperation is better than competition",
          ja: "競争より協力が良い",
          'zh-CN': "合作比竞争更好",
          'zh-TW': "合作比競爭更好",
          vi: "Hợp tác tốt hơn cạnh tranh",
          id: "Kerja sama lebih baik dari kompetisi"
        },
        scores: { type1: 0, type2: 0, type3: 3, type4: 0, type5: 0 }
      },
      {
        text: {
          ko: "경쟁 자체가 부담스러움",
          en: "Competition itself is burdensome",
          ja: "競争自体が負担",
          'zh-CN': "竞争本身是负担",
          'zh-TW': "競爭本身是負擔",
          vi: "Bản thân sự cạnh tranh là gánh nặng",
          id: "Kompetisi itu sendiri membebani"
        },
        scores: { type1: 0, type2: 0, type3: 0, type4: 8, type5: 2 }
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "1등의 의미는?",
      en: "What does being first mean?",
      ja: "1位の意味は？",
      'zh-CN': "第一名的意义是？",
      'zh-TW': "第一名的意義是？",
      vi: "Ý nghĩa của việc đứng nhất là gì?",
      id: "Apa arti menjadi yang pertama?"
    },
    options: [
      {
        text: {
          ko: "인생에서 가장 중요한 것",
          en: "The most important thing in life",
          ja: "人生で最も重要なこと",
          'zh-CN': "人生中最重要的",
          'zh-TW': "人生中最重要的",
          vi: "Điều quan trọng nhất trong cuộc sống",
          id: "Hal paling penting dalam hidup"
        },
        scores: { type1: 3, type2: 0, type3: 0, type4: 0, type5: 0 }
      },
      {
        text: {
          ko: "중요하지만 전부는 아님",
          en: "Important but not everything",
          ja: "重要だが全部ではない",
          'zh-CN': "重要但不是全部",
          'zh-TW': "重要但不是全部",
          vi: "Quan trọng nhưng không phải tất cả",
          id: "Penting tapi bukan segalanya"
        },
        scores: { type1: 0, type2: 3, type3: 0, type4: 0, type5: 0 }
      },
      {
        text: {
          ko: "별로 중요하지 않음",
          en: "Not very important",
          ja: "あまり重要でない",
          'zh-CN': "不太重要",
          'zh-TW': "不太重要",
          vi: "Không quan trọng lắm",
          id: "Tidak terlalu penting"
        },
        scores: { type1: 0, type2: 0, type3: 2, type4: 8, type5: 0 }
      },
      {
        text: {
          ko: "전혀 관심 없음",
          en: "No interest at all",
          ja: "全く興味なし",
          'zh-CN': "完全不感兴趣",
          'zh-TW': "完全不感興趣",
          vi: "Hoàn toàn không quan tâm",
          id: "Tidak tertarik sama sekali"
        },
        scores: { type1: 0, type2: 0, type3: 0, type4: 2, type5: 8 }
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "누군가 나를 이겼을 때?",
      en: "When someone beats you?",
      ja: "誰かが自分を負かした時？",
      'zh-CN': "有人胜过你时？",
      'zh-TW': "有人勝過你時？",
      vi: "Khi ai đó đánh bại bạn?",
      id: "Saat seseorang mengalahkan Anda?"
    },
    options: [
      {
        text: {
          ko: "참을 수 없고 반드시 역전하고 싶음",
          en: "Can't stand it and definitely want to reverse",
          ja: "我慢できず絶対に逆転したい",
          'zh-CN': "无法忍受，一定想要逆转",
          'zh-TW': "無法忍受，一定想要逆轉",
          vi: "Không thể chịu đựng và chắc chắn muốn đảo ngược",
          id: "Tidak tahan dan pasti ingin membalikkan"
        },
        scores: { type1: 3, type2: 0, type3: 0, type4: 0, type5: 0 }
      },
      {
        text: {
          ko: "분하지만 인정하고 더 노력",
          en: "Frustrated but acknowledge and work harder",
          ja: "悔しいが認めてさらに努力",
          'zh-CN': "沮丧但承认并更努力",
          'zh-TW': "沮喪但承認並更努力",
          vi: "Thất vọng nhưng thừa nhận và cố gắng hơn",
          id: "Frustrasi tapi akui dan bekerja lebih keras"
        },
        scores: { type1: 0, type2: 3, type3: 0, type4: 0, type5: 0 }
      },
      {
        text: {
          ko: "\"잘했네\" 인정하고 배움",
          en: "\"Well done\" acknowledge and learn",
          ja: "「よくやった」認めて学ぶ",
          'zh-CN': "「做得好」承认并学习",
          'zh-TW': "「做得好」承認並學習",
          vi: "\"Làm tốt\" thừa nhận và học hỏi",
          id: "\"Bagus\" akui dan pelajari"
        },
        scores: { type1: 0, type2: 0, type3: 3, type4: 0, type5: 0 }
      },
      {
        text: {
          ko: "별로 신경 안 씀",
          en: "Don't really care",
          ja: "あまり気にしない",
          'zh-CN': "不太在意",
          'zh-TW': "不太在意",
          vi: "Không thực sự quan tâm",
          id: "Tidak terlalu peduli"
        },
        scores: { type1: 0, type2: 0, type3: 0, type4: 8, type5: 2 }
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "실력이 비슷한 사람과 비교될 때?",
      en: "When compared with someone of similar skill?",
      ja: "実力が似た人と比較される時？",
      'zh-CN': "与实力相近的人比较时？",
      'zh-TW': "與實力相近的人比較時？",
      vi: "Khi được so sánh với người có năng lực tương tự?",
      id: "Saat dibandingkan dengan seseorang dengan keterampilan serupa?"
    },
    options: [
      {
        text: {
          ko: "절대 지면 안 된다는 생각",
          en: "Must never lose",
          ja: "絶対に負けてはいけないという考え",
          'zh-CN': "绝对不能输的想法",
          'zh-TW': "絕對不能輸的想法",
          vi: "Không bao giờ được thua",
          id: "Tidak boleh kalah"
        },
        scores: { type1: 3, type2: 0, type3: 0, type4: 0, type5: 0 }
      },
      {
        text: {
          ko: "자극받고 더 잘하고 싶음",
          en: "Feel stimulated and want to do better",
          ja: "刺激を受けてより良くしたい",
          'zh-CN': "受到激励并想要做得更好",
          'zh-TW': "受到激勵並想要做得更好",
          vi: "Cảm thấy được kích thích và muốn làm tốt hơn",
          id: "Merasa terstimulasi dan ingin berbuat lebih baik"
        },
        scores: { type1: 0, type2: 3, type3: 0, type4: 0, type5: 0 }
      },
      {
        text: {
          ko: "비교보다 각자의 길이 중요",
          en: "Each person's path is more important than comparison",
          ja: "比較よりそれぞれの道が重要",
          'zh-CN': "各自的路径比比较更重要",
          'zh-TW': "各自的路徑比比較更重要",
          vi: "Con đường của mỗi người quan trọng hơn so sánh",
          id: "Jalan masing-masing lebih penting dari perbandingan"
        },
        scores: { type1: 0, type2: 0, type3: 3, type4: 0, type5: 0 }
      },
      {
        text: {
          ko: "비교 자체가 의미 없음",
          en: "Comparison itself is meaningless",
          ja: "比較自体が意味ない",
          'zh-CN': "比较本身没有意义",
          'zh-TW': "比較本身沒有意義",
          vi: "Bản thân sự so sánh không có ý nghĩa",
          id: "Perbandingan itu sendiri tidak berarti"
        },
        scores: { type1: 0, type2: 0, type3: 0, type4: 2, type5: 8 }
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "당신에게 경쟁이란?",
      en: "What is competition to you?",
      ja: "あなたにとって競争とは？",
      'zh-CN': "对你来说竞争是什么？",
      'zh-TW': "對你來說競爭是什麼？",
      vi: "Cạnh tranh đối với bạn là gì?",
      id: "Apa itu kompetisi bagi Anda?"
    },
    options: [
      {
        text: {
          ko: "삶의 원동력이자 즐거움",
          en: "The driving force and joy of life",
          ja: "人生の原動力であり喜び",
          'zh-CN': "生活的动力和乐趣",
          'zh-TW': "生活的動力和樂趣",
          vi: "Động lực và niềm vui của cuộc sống",
          id: "Kekuatan penggerak dan kegembiraan hidup"
        },
        scores: { type1: 3, type2: 0, type3: 0, type4: 0, type5: 0 }
      },
      {
        text: {
          ko: "성장의 기회",
          en: "Opportunity for growth",
          ja: "成長の機会",
          'zh-CN': "成长的机会",
          'zh-TW': "成長的機會",
          vi: "Cơ hội để phát triển",
          id: "Peluang untuk tumbuh"
        },
        scores: { type1: 0, type2: 3, type3: 0, type4: 0, type5: 0 }
      },
      {
        text: {
          ko: "있어도 되고 없어도 됨",
          en: "Can be with or without",
          ja: "あってもなくてもいい",
          'zh-CN': "可有可无",
          'zh-TW': "可有可無",
          vi: "Có cũng được không có cũng được",
          id: "Bisa ada atau tidak ada"
        },
        scores: { type1: 0, type2: 0, type3: 2, type4: 8, type5: 0 }
      },
      {
        text: {
          ko: "불필요하고 피곤한 것",
          en: "Unnecessary and tiresome",
          ja: "不要で疲れるもの",
          'zh-CN': "不必要且令人疲惫",
          'zh-TW': "不必要且令人疲憊",
          vi: "Không cần thiết và mệt mỏi",
          id: "Tidak perlu dan melelahkan"
        },
        scores: { type1: 0, type2: 0, type3: 0, type4: 2, type5: 8 }
      }
    ]
  }
];

export const competitivenessResults: CompetitivenessResult[] = [
  {
    type: "Type1",
    emoji: "🔥",
    title: {
      ko: "초경쟁 투사형",
      en: "Extreme Competitor",
      ja: "超競争戦士型",
      'zh-CN': "超竞争战士型",
      'zh-TW': "超競爭戰士型",
      vi: "Người Chiến Đấu Cực Kỳ",
      id: "Pejuang Kompetitif Ekstrem"
    },
    shortDescription: {
      ko: "무조건 1등! 이기는 것이 전부",
      en: "Must be first! Winning is everything",
      ja: "絶対1位！勝つことが全て",
      'zh-CN': "必须是第一！获胜就是一切",
      'zh-TW': "必須是第一！獲勝就是一切",
      vi: "Phải đứng nhất! Thắng là tất cả",
      id: "Harus pertama! Menang adalah segalanya"
    },
    description: {
      ko: "모든 것에서 1등을 원합니다. 경쟁에서 지는 것을 참지 못하고, 이기기 위해 모든 것을 쏟아붓습니다. 승부욕이 너무 강해서 스트레스가 높고, 타인과의 비교에 집착합니다. 성공은 많이 하지만 행복도는 낮을 수 있습니다. 과정보다 결과에만 집중하면 번아웃 위험이 있습니다.",
      en: "You want to be first in everything. You can't stand losing in competition and pour everything into winning. Your competitiveness is so strong that stress is high and you obsess over comparing with others. You succeed a lot but happiness may be low. If you focus only on results rather than process, there's a burnout risk.",
      ja: "すべてにおいて1位を望みます。競争で負けることを我慢できず、勝つためにすべてを注ぎます。勝負欲が強すぎてストレスが高く、他人との比較にこだわります。成功は多いですが幸福感は低いかもしれません。過程より結果にだけ集中すると燃え尽きる危険があります。",
      'zh-CN': "在所有事情上都想要第一。无法忍受在竞争中失败，为获胜付出一切。竞争心过强导致压力大，执着于与他人比较。虽然成功很多但幸福感可能较低。只关注结果而非过程会有倦怠风险。",
      'zh-TW': "在所有事情上都想要第一。無法忍受在競爭中失敗，為獲勝付出一切。競爭心過強導致壓力大，執著於與他人比較。雖然成功很多但幸福感可能較低。只關注結果而非過程會有倦怠風險。",
      vi: "Bạn muốn đứng nhất trong mọi thứ. Bạn không thể chịu đựng việc thua trong cạnh tranh và đổ hết mọi thứ để thắng. Tính cạnh tranh của bạn quá mạnh khiến căng thẳng cao và bạn ám ảnh về việc so sánh với người khác. Bạn thành công nhiều nhưng hạnh phúc có thể thấp. Nếu bạn chỉ tập trung vào kết quả thay vì quá trình, có nguy cơ kiệt sức.",
      id: "Anda ingin menjadi yang pertama dalam segalanya. Anda tidak tahan kalah dalam kompetisi dan mencurahkan segalanya untuk menang. Kompetitif Anda sangat kuat sehingga stres tinggi dan Anda terobsesi membandingkan dengan orang lain. Anda berhasil banyak tetapi kebahagiaan mungkin rendah. Jika Anda hanya fokus pada hasil daripada proses, ada risiko kelelahan."
    },
    strengths: [
      {
        ko: "높은 성취",
        en: "High achievement",
        ja: "高い達成",
        'zh-CN': "高成就",
        'zh-TW': "高成就",
        vi: "Thành tựu cao",
        id: "Pencapaian tinggi"
      },
      {
        ko: "추진력",
        en: "Drive",
        ja: "推進力",
        'zh-CN': "驱动力",
        'zh-TW': "驅動力",
        vi: "Động lực",
        id: "Dorongan"
      },
      {
        ko: "목표 달성",
        en: "Goal achievement",
        ja: "目標達成",
        'zh-CN': "目标达成",
        'zh-TW': "目標達成",
        vi: "Đạt mục tiêu",
        id: "Pencapaian tujuan"
      }
    ],
    weaknesses: [
      {
        ko: "스트레스",
        en: "Stress",
        ja: "ストレス",
        'zh-CN': "压力",
        'zh-TW': "壓力",
        vi: "Căng thẳng",
        id: "Stres"
      },
      {
        ko: "번아웃",
        en: "Burnout",
        ja: "燃え尽き",
        'zh-CN': "倦怠",
        'zh-TW': "倦怠",
        vi: "Kiệt sức",
        id: "Kelelahan"
      },
      {
        ko: "관계 손상",
        en: "Relationship damage",
        ja: "関係損傷",
        'zh-CN': "关系受损",
        'zh-TW': "關係受損",
        vi: "Tổn thương mối quan hệ",
        id: "Kerusakan hubungan"
      },
      {
        ko: "행복도 낮음",
        en: "Low happiness",
        ja: "幸福感低い",
        'zh-CN': "幸福感低",
        'zh-TW': "幸福感低",
        vi: "Hạnh phúc thấp",
        id: "Kebahagiaan rendah"
      }
    ],
    score: {
      ko: "★★★★★ (5/5)",
      en: "★★★★★ (5/5)",
      ja: "★★★★★ (5/5)",
      'zh-CN': "★★★★★ (5/5)",
      'zh-TW': "★★★★★ (5/5)",
      vi: "★★★★★ (5/5)",
      id: "★★★★★ (5/5)"
    },
    advice: {
      ko: "이기는 것도 좋지만 과정과 건강도 중요해요. 승부욕이 당신을 파괴하지 않도록 조절이 필요합니다.",
      en: "Winning is good but process and health are also important. You need to control so that competitiveness doesn't destroy you.",
      ja: "勝つことも良いですが、過程と健康も重要です。勝負欲があなたを破壊しないように調整が必要です。",
      'zh-CN': "获胜固然好，但过程和健康也很重要。需要调节以免竞争心毁掉你。",
      'zh-TW': "獲勝固然好，但過程和健康也很重要。需要調節以免競爭心毀掉你。",
      vi: "Thắng là tốt nhưng quá trình và sức khỏe cũng quan trọng. Bạn cần kiểm soát để tính cạnh tranh không phá hủy bạn.",
      id: "Menang itu baik tapi proses dan kesehatan juga penting. Anda perlu mengontrol agar kompetitif tidak menghancurkan Anda."
    },
    warningTitle: {
      ko: "",
      en: "",
      ja: "",
      'zh-CN': "",
      'zh-TW': "",
      vi: "",
      id: ""
    },
    warningItems: {
      ko: [],
      en: [],
      ja: [],
      'zh-CN': [],
      'zh-TW': [],
      vi: [],
      id: []
    }
  },
  {
    type: "Type2",
    emoji: "💪",
    title: {
      ko: "높은 승부욕형",
      en: "High Competitiveness",
      ja: "高い勝負欲型",
      'zh-CN': "高竞争心型",
      'zh-TW': "高競爭心型",
      vi: "Cạnh Tranh Cao",
      id: "Kompetitif Tinggi"
    },
    shortDescription: {
      ko: "이기고 싶어! 건강한 경쟁심",
      en: "Want to win! Healthy competitiveness",
      ja: "勝ちたい！健康的な競争心",
      'zh-CN': "想赢！健康的竞争心",
      'zh-TW': "想贏！健康的競爭心",
      vi: "Muốn thắng! Cạnh tranh lành mạnh",
      id: "Ingin menang! Kompetitif sehat"
    },
    description: {
      ko: "승부욕이 높지만 건강한 수준입니다. 이기고 싶지만 과정도 즐기고, 져도 인정할 줄 압니다. 경쟁을 성장의 기회로 보며, 타인의 성공을 축하하면서도 자극받습니다. 가장 이상적인 승부욕으로, 성취도 높고 행복도도 높습니다.",
      en: "Your competitiveness is high but at a healthy level. You want to win but also enjoy the process, and know how to accept losing. You see competition as an opportunity for growth, and celebrate others' success while feeling motivated. This is the most ideal competitiveness, with both high achievement and high happiness.",
      ja: "勝負欲が高いが健康的なレベルです。勝ちたいが過程も楽しみ、負けても認めることができます。競争を成長の機会と見て、他人の成功を祝福しながらも刺激を受けます。最も理想的な勝負欲で、達成も高く幸福感も高いです。",
      'zh-CN': "竞争心高但处于健康水平。想赢但也能享受过程，知道如何接受失败。将竞争视为成长机会，在祝福他人成功的同时也受到激励。这是最理想的竞争心，成就高且幸福感也高。",
      'zh-TW': "競爭心高但處於健康水平。想贏但也能享受過程，知道如何接受失敗。將競爭視為成長機會，在祝福他人成功的同時也受到激勵。這是最理想的競爭心，成就高且幸福感也高。",
      vi: "Tính cạnh tranh của bạn cao nhưng ở mức lành mạnh. Bạn muốn thắng nhưng cũng tận hưởng quá trình và biết cách chấp nhận thua. Bạn coi cạnh tranh là cơ hội phát triển và chúc mừng thành công của người khác trong khi cảm thấy được động viên. Đây là tính cạnh tranh lý tưởng nhất, với cả thành tựu cao và hạnh phúc cao.",
      id: "Kompetitif Anda tinggi tetapi pada tingkat yang sehat. Anda ingin menang tetapi juga menikmati proses dan tahu cara menerima kekalahan. Anda melihat kompetisi sebagai peluang untuk tumbuh dan merayakan kesuksesan orang lain sambil merasa termotivasi. Ini adalah kompetitif paling ideal, dengan pencapaian tinggi dan kebahagiaan tinggi."
    },
    strengths: [
      {
        ko: "성취",
        en: "Achievement",
        ja: "達成",
        'zh-CN': "成就",
        'zh-TW': "成就",
        vi: "Thành tựu",
        id: "Pencapaian"
      },
      {
        ko: "성장",
        en: "Growth",
        ja: "成長",
        'zh-CN': "成长",
        'zh-TW': "成長",
        vi: "Phát triển",
        id: "Pertumbuhan"
      },
      {
        ko: "균형",
        en: "Balance",
        ja: "バランス",
        'zh-CN': "平衡",
        'zh-TW': "平衡",
        vi: "Cân bằng",
        id: "Keseimbangan"
      },
      {
        ko: "긍정적 동기",
        en: "Positive motivation",
        ja: "肯定的動機",
        'zh-CN': "积极动机",
        'zh-TW': "積極動機",
        vi: "Động lực tích cực",
        id: "Motivasi positif"
      }
    ],
    weaknesses: [
      {
        ko: "가끔 과도한 스트레스",
        en: "Occasional excessive stress",
        ja: "時々過度なストレス",
        'zh-CN': "偶尔过度压力",
        'zh-TW': "偶爾過度壓力",
        vi: "Thỉnh thoảng căng thẳng quá mức",
        id: "Stres berlebihan sesekali"
      }
    ],
    score: {
      ko: "★★★★☆ (4/5)",
      en: "★★★★☆ (4/5)",
      ja: "★★★★☆ (4/5)",
      'zh-CN': "★★★★☆ (4/5)",
      'zh-TW': "★★★★☆ (4/5)",
      vi: "★★★★☆ (4/5)",
      id: "★★★★☆ (4/5)"
    },
    advice: {
      ko: "완벽해요! 건강한 승부욕으로 계속 성장하세요!",
      en: "Perfect! Keep growing with healthy competitiveness!",
      ja: "完璧です！健康的な勝負欲で成長し続けてください！",
      'zh-CN': "完美！继续以健康的竞争心成长！",
      'zh-TW': "完美！繼續以健康的競爭心成長！",
      vi: "Hoàn hảo! Tiếp tục phát triển với tính cạnh tranh lành mạnh!",
      id: "Sempurna! Terus tumbuh dengan kompetitif sehat!"
    },
    warningTitle: {
      ko: "",
      en: "",
      ja: "",
      'zh-CN': "",
      'zh-TW': "",
      vi: "",
      id: ""
    },
    warningItems: {
      ko: [],
      en: [],
      ja: [],
      'zh-CN': [],
      'zh-TW': [],
      vi: [],
      id: []
    }
  },
  {
    type: "Type3",
    emoji: "⚖️",
    title: {
      ko: "적당한 균형형",
      en: "Balanced Type",
      ja: "適度なバランス型",
      'zh-CN': "适当平衡型",
      'zh-TW': "適當平衡型",
      vi: "Cân Bằng Vừa Phải",
      id: "Tipe Seimbang"
    },
    shortDescription: {
      ko: "이기면 좋고! 결과보다 과정",
      en: "Winning is nice! Process over results",
      ja: "勝てばいい！結果より過程",
      'zh-CN': "赢了固然好！过程重于结果",
      'zh-TW': "贏了固然好！過程重於結果",
      vi: "Thắng thì tốt! Quá trình quan trọng hơn kết quả",
      id: "Menang itu bagus! Proses lebih dari hasil"
    },
    description: {
      ko: "승부욕과 여유의 균형이 좋습니다. 이기면 기쁘지만 져도 괜찮고, 과정을 즐깁니다. 경쟁보다 협력을 선호하지만 필요하면 경쟁도 합니다. 스트레스 적고 행복도 높으며, 인간관계도 좋습니다. 가장 건강하고 행복한 타입입니다.",
      en: "You have a good balance between competitiveness and ease. You're happy when you win but okay when you lose, and enjoy the process. You prefer cooperation over competition but compete when needed. Low stress and high happiness, with good relationships. This is the healthiest and happiest type.",
      ja: "勝負欲と余裕のバランスが良いです。勝てば嬉しいが負けても大丈夫で、過程を楽しみます。競争より協力を好みますが、必要なら競争もします。ストレス少なく幸福感高く、人間関係も良いです。最も健康的で幸せなタイプです。",
      'zh-CN': "竞争心与从容的平衡很好。赢了会高兴但输了也没关系，享受过程。偏好合作而非竞争，但需要时也会竞争。压力小且幸福感高，人际关系也好。这是最健康最幸福的类型。",
      'zh-TW': "競爭心與從容的平衡很好。贏了會高興但輸了也沒關係，享受過程。偏好合作而非競爭，但需要時也會競爭。壓力小且幸福感高，人際關係也好。這是最健康最幸福的類型。",
      vi: "Bạn có sự cân bằng tốt giữa tính cạnh tranh và thoải mái. Bạn vui khi thắng nhưng ổn khi thua và tận hưởng quá trình. Bạn thích hợp tác hơn cạnh tranh nhưng cạnh tranh khi cần. Căng thẳng thấp và hạnh phúc cao, với các mối quan hệ tốt. Đây là loại khỏe mạnh và hạnh phúc nhất.",
      id: "Anda memiliki keseimbangan yang baik antara kompetitif dan kemudahan. Anda senang saat menang tetapi tidak apa-apa saat kalah dan menikmati proses. Anda lebih suka kerjasama daripada kompetisi tetapi berkompetisi saat diperlukan. Stres rendah dan kebahagiaan tinggi, dengan hubungan yang baik. Ini adalah tipe yang paling sehat dan bahagia."
    },
    strengths: [
      {
        ko: "균형",
        en: "Balance",
        ja: "バランス",
        'zh-CN': "平衡",
        'zh-TW': "平衡",
        vi: "Cân bằng",
        id: "Keseimbangan"
      },
      {
        ko: "행복",
        en: "Happiness",
        ja: "幸福",
        'zh-CN': "幸福",
        'zh-TW': "幸福",
        vi: "Hạnh phúc",
        id: "Kebahagiaan"
      },
      {
        ko: "좋은 관계",
        en: "Good relationships",
        ja: "良い関係",
        'zh-CN': "良好关系",
        'zh-TW': "良好關係",
        vi: "Mối quan hệ tốt",
        id: "Hubungan baik"
      },
      {
        ko: "스트레스 적음",
        en: "Low stress",
        ja: "ストレス少ない",
        'zh-CN': "压力小",
        'zh-TW': "壓力小",
        vi: "Căng thẳng thấp",
        id: "Stres rendah"
      }
    ],
    weaknesses: [
      {
        ko: "큰 성취 어려울 수 있음",
        en: "May struggle with big achievements",
        ja: "大きな達成が難しいかもしれない",
        'zh-CN': "可能难以取得大成就",
        'zh-TW': "可能難以取得大成就",
        vi: "Có thể khó đạt thành tựu lớn",
        id: "Mungkin kesulitan dengan pencapaian besar"
      }
    ],
    score: {
      ko: "★★★☆☆ (3/5)",
      en: "★★★☆☆ (3/5)",
      ja: "★★★☆☆ (3/5)",
      'zh-CN': "★★★☆☆ (3/5)",
      'zh-TW': "★★★☆☆ (3/5)",
      vi: "★★★☆☆ (3/5)",
      id: "★★★☆☆ (3/5)"
    },
    advice: {
      ko: "이상적인 균형이에요! 지금처럼 즐기세요!",
      en: "Ideal balance! Keep enjoying as you are!",
      ja: "理想的なバランスです！今のように楽しんでください！",
      'zh-CN': "理想的平衡！像现在这样享受吧！",
      'zh-TW': "理想的平衡！像現在這樣享受吧！",
      vi: "Cân bằng lý tưởng! Hãy tiếp tục tận hưởng như bạn đang làm!",
      id: "Keseimbangan ideal! Terus nikmati seperti sekarang!"
    },
    warningTitle: {
      ko: "",
      en: "",
      ja: "",
      'zh-CN': "",
      'zh-TW': "",
      vi: "",
      id: ""
    },
    warningItems: {
      ko: [],
      en: [],
      ja: [],
      'zh-CN': [],
      'zh-TW': [],
      vi: [],
      id: []
    }
  },
  {
    type: "Type4",
    emoji: "🌿",
    title: {
      ko: "낮은 승부욕형",
      en: "Low Competitiveness",
      ja: "低い勝負欲型",
      'zh-CN': "低竞争心型",
      'zh-TW': "低競爭心型",
      vi: "Cạnh Tranh Thấp",
      id: "Kompetitif Rendah"
    },
    shortDescription: {
      ko: "즐기면 돼! 경쟁보다 평화",
      en: "Just enjoy! Peace over competition",
      ja: "楽しめばいい！競争より平和",
      'zh-CN': "享受就好！和平胜过竞争",
      'zh-TW': "享受就好！和平勝過競爭",
      vi: "Chỉ cần tận hưởng! Hòa bình hơn cạnh tranh",
      id: "Nikmati saja! Perdamaian lebih dari kompetisi"
    },
    description: {
      ko: "승부욕이 낮고 경쟁에 관심이 적습니다. 이기고 지는 것이 중요하지 않고, 과정이나 경험이 더 중요합니다. 스트레스가 매우 적고 평화롭지만, 동기부여가 부족하고 성취가 낮을 수 있습니다. 큰 목표가 필요할 때는 적당한 승부욕도 필요합니다.",
      en: "Your competitiveness is low and you have little interest in competition. Winning and losing aren't important, and process or experience matter more. Very low stress and peaceful, but may lack motivation and have low achievement. When big goals are needed, some competitiveness is also needed.",
      ja: "勝負欲が低く競争に興味が少ないです。勝ち負けが重要ではなく、過程や経験がより重要です。ストレスが非常に少なく平和ですが、動機付けが不足し達成が低いかもしれません。大きな目標が必要な時は適度な勝負欲も必要です。",
      'zh-CN': "竞争心低且对竞争兴趣不大。输赢不重要，过程或经历更重要。压力非常小且平和，但可能缺乏动力且成就较低。需要大目标时也需要适当的竞争心。",
      'zh-TW': "競爭心低且對競爭興趣不大。輸贏不重要，過程或經歷更重要。壓力非常小且平和，但可能缺乏動力且成就較低。需要大目標時也需要適當的競爭心。",
      vi: "Tính cạnh tranh của bạn thấp và bạn ít quan tâm đến cạnh tranh. Thắng thua không quan trọng và quá trình hoặc trải nghiệm quan trọng hơn. Căng thẳng rất thấp và bình yên, nhưng có thể thiếu động lực và có thành tựu thấp. Khi cần những mục tiêu lớn, cũng cần một chút tính cạnh tranh.",
      id: "Kompetitif Anda rendah dan Anda memiliki sedikit minat pada kompetisi. Menang dan kalah tidak penting, dan proses atau pengalaman lebih penting. Stres sangat rendah dan damai, tetapi mungkin kurang motivasi dan memiliki pencapaian rendah. Ketika tujuan besar diperlukan, beberapa kompetitif juga diperlukan."
    },
    strengths: [
      {
        ko: "평화",
        en: "Peace",
        ja: "平和",
        'zh-CN': "和平",
        'zh-TW': "和平",
        vi: "Hòa bình",
        id: "Perdamaian"
      },
      {
        ko: "스트레스 없음",
        en: "No stress",
        ja: "ストレスなし",
        'zh-CN': "无压力",
        'zh-TW': "無壓力",
        vi: "Không căng thẳng",
        id: "Tidak ada stres"
      },
      {
        ko: "좋은 관계",
        en: "Good relationships",
        ja: "良い関係",
        'zh-CN': "良好关系",
        'zh-TW': "良好關係",
        vi: "Mối quan hệ tốt",
        id: "Hubungan baik"
      }
    ],
    weaknesses: [
      {
        ko: "동기부여 부족",
        en: "Lack of motivation",
        ja: "動機付け不足",
        'zh-CN': "缺乏动力",
        'zh-TW': "缺乏動力",
        vi: "Thiếu động lực",
        id: "Kurang motivasi"
      },
      {
        ko: "성취 낮음",
        en: "Low achievement",
        ja: "達成低い",
        'zh-CN': "成就低",
        'zh-TW': "成就低",
        vi: "Thành tựu thấp",
        id: "Pencapaian rendah"
      },
      {
        ko: "안주",
        en: "Complacency",
        ja: "安住",
        'zh-CN': "自满",
        'zh-TW': "自滿",
        vi: "Tự mãn",
        id: "Puas diri"
      }
    ],
    score: {
      ko: "★★☆☆☆ (2/5)",
      en: "★★☆☆☆ (2/5)",
      ja: "★★☆☆☆ (2/5)",
      'zh-CN': "★★☆☆☆ (2/5)",
      'zh-TW': "★★☆☆☆ (2/5)",
      vi: "★★☆☆☆ (2/5)",
      id: "★★☆☆☆ (2/5)"
    },
    advice: {
      ko: "평화도 좋지만 가끔은 도전도 필요해요! 작은 목표부터 세워보세요.",
      en: "Peace is good but sometimes you need challenges too! Start setting small goals.",
      ja: "平和も良いですが、時には挑戦も必要です！小さな目標から立ててみてください。",
      'zh-CN': "和平固然好，但有时也需要挑战！从小目标开始设定。",
      'zh-TW': "和平固然好，但有時也需要挑戰！從小目標開始設定。",
      vi: "Hòa bình là tốt nhưng đôi khi bạn cũng cần thử thách! Hãy bắt đầu đặt những mục tiêu nhỏ.",
      id: "Perdamaian itu baik tapi kadang-kadang Anda juga perlu tantangan! Mulai tetapkan tujuan kecil."
    },
    warningTitle: {
      ko: "",
      en: "",
      ja: "",
      'zh-CN': "",
      'zh-TW': "",
      vi: "",
      id: ""
    },
    warningItems: {
      ko: [],
      en: [],
      ja: [],
      'zh-CN': [],
      'zh-TW': [],
      vi: [],
      id: []
    }
  },
  {
    type: "Type5",
    emoji: "☁️",
    title: {
      ko: "무경쟁 초월형",
      en: "Transcendent Non-Competitor",
      ja: "無競争超越型",
      'zh-CN': "无竞争超越型",
      'zh-TW': "無競爭超越型",
      vi: "Siêu Việt Không Cạnh Tranh",
      id: "Non-Kompetitif Transenden"
    },
    shortDescription: {
      ko: "경쟁? 관심 없어! 완전 초월",
      en: "Competition? Not interested! Completely transcendent",
      ja: "競争？興味なし！完全超越",
      'zh-CN': "竞争？不感兴趣！完全超越",
      'zh-TW': "競爭？不感興趣！完全超越",
      vi: "Cạnh tranh? Không quan tâm! Hoàn toàn siêu việt",
      id: "Kompetisi? Tidak tertarik! Benar-benar transenden"
    },
    description: {
      ko: "경쟁심이 거의 없습니다. 승패에 전혀 관심이 없고, 타인과 비교하지 않습니다. 매우 평화롭고 스트레스가 없지만, 동기부여가 전혀 없어 성장이나 발전이 멈출 수 있습니다. 무기력하거나 우울할 위험도 있습니다. 최소한의 목표 의식은 필요합니다.",
      en: "You have almost no competitiveness. You have no interest in win-lose at all and don't compare with others. Very peaceful and stress-free, but with no motivation at all, growth or development may stop. There's also a risk of lethargy or depression. At least some goal awareness is needed.",
      ja: "競争心がほとんどありません。勝敗に全く興味がなく、他人と比較しません。非常に平和でストレスがありませんが、動機付けが全くなく成長や発展が止まる可能性があります。無気力や鬱になる危険もあります。少なくとも目標意識は必要です。",
      'zh-CN': "几乎没有竞争心。对输赢完全不感兴趣，也不与他人比较。非常平和且无压力，但完全没有动力，成长或发展可能停滞。也有变得无精打采或抑郁的风险。至少需要一些目标意识。",
      'zh-TW': "幾乎沒有競爭心。對輸贏完全不感興趣，也不與他人比較。非常平和且無壓力，但完全沒有動力，成長或發展可能停滯。也有變得無精打采或抑鬱的風險。至少需要一些目標意識。",
      vi: "Bạn hầu như không có tính cạnh tranh. Bạn hoàn toàn không quan tâm đến thắng thua và không so sánh với người khác. Rất bình yên và không căng thẳng, nhưng hoàn toàn không có động lực, tăng trưởng hoặc phát triển có thể dừng lại. Cũng có nguy cơ uể oải hoặc trầm cảm. Ít nhất cần một số nhận thức về mục tiêu.",
      id: "Anda hampir tidak memiliki kompetitif. Anda tidak tertarik pada menang-kalah sama sekali dan tidak membandingkan dengan orang lain. Sangat damai dan bebas stres, tetapi tanpa motivasi sama sekali, pertumbuhan atau perkembangan mungkin berhenti. Ada juga risiko kelesuan atau depresi. Setidaknya beberapa kesadaran tujuan diperlukan."
    },
    strengths: [
      {
        ko: "평화",
        en: "Peace",
        ja: "平和",
        'zh-CN': "和平",
        'zh-TW': "和平",
        vi: "Hòa bình",
        id: "Perdamaian"
      },
      {
        ko: "스트레스 제로",
        en: "Zero stress",
        ja: "ストレスゼロ",
        'zh-CN': "零压力",
        'zh-TW': "零壓力",
        vi: "Không căng thẳng",
        id: "Stres nol"
      }
    ],
    weaknesses: [
      {
        ko: "동기 없음",
        en: "No motivation",
        ja: "動機なし",
        'zh-CN': "无动力",
        'zh-TW': "無動力",
        vi: "Không có động lực",
        id: "Tidak ada motivasi"
      },
      {
        ko: "성장 정체",
        en: "Stagnant growth",
        ja: "成長停滞",
        'zh-CN': "成长停滞",
        'zh-TW': "成長停滯",
        vi: "Tăng trưởng trì trệ",
        id: "Pertumbuhan stagnan"
      },
      {
        ko: "무기력 위험",
        en: "Risk of lethargy",
        ja: "無気力リスク",
        'zh-CN': "无精打采风险",
        'zh-TW': "無精打采風險",
        vi: "Nguy cơ uể oải",
        id: "Risiko kelesuan"
      }
    ],
    score: {
      ko: "★☆☆☆☆ (1/5)",
      en: "★☆☆☆☆ (1/5)",
      ja: "★☆☆☆☆ (1/5)",
      'zh-CN': "★☆☆☆☆ (1/5)",
      'zh-TW': "★☆☆☆☆ (1/5)",
      vi: "★☆☆☆☆ (1/5)",
      id: "★☆☆☆☆ (1/5)"
    },
    advice: {
      ko: "경쟁은 싫어도 성장은 필요해요. 남과의 경쟁이 아닌 어제의 나와의 경쟁을 해보세요!",
      en: "Even if you hate competition, growth is needed. Compete with yesterday's you, not with others!",
      ja: "競争は嫌でも成長は必要です。他人との競争ではなく昨日の自分との競争をしてみてください！",
      'zh-CN': "即使讨厌竞争，成长也是必要的。与自己昨天竞争，而不是与他人竞争！",
      'zh-TW': "即使討厭競爭，成長也是必要的。與自己昨天競爭，而不是與他人競爭！",
      vi: "Ngay cả khi bạn ghét cạnh tranh, bạn vẫn cần phát triển. Hãy cạnh tranh với chính mình ngày hôm qua, không phải với người khác!",
      id: "Bahkan jika Anda membenci kompetisi, pertumbuhan diperlukan. Bersainglah dengan diri Anda kemarin, bukan dengan orang lain!"
    },
    warningTitle: {
      ko: "",
      en: "",
      ja: "",
      'zh-CN': "",
      'zh-TW': "",
      vi: "",
      id: ""
    },
    warningItems: {
      ko: [],
      en: [],
      ja: [],
      'zh-CN': [],
      'zh-TW': [],
      vi: [],
      id: []
    }
  }
];

export function calculateCompetitivenessResult(answers: any[]): string {
  const scores = {
    type1: 0,
    type2: 0,
    type3: 0,
    type4: 0,
    type5: 0
  };
  
  answers.forEach(answer => {
    if (answer.type1) scores.type1 += answer.type1;
    if (answer.type2) scores.type2 += answer.type2;
    if (answer.type3) scores.type3 += answer.type3;
    if (answer.type4) scores.type4 += answer.type4;
    if (answer.type5) scores.type5 += answer.type5;
  });
  
  // 최고 점수 Type이 결과
  const maxScore = Math.max(scores.type1, scores.type2, scores.type3, scores.type4, scores.type5);
  
  if (scores.type1 === maxScore) return "Type1";
  if (scores.type2 === maxScore) return "Type2";
  if (scores.type3 === maxScore) return "Type3";
  if (scores.type4 === maxScore) return "Type4";
  return "Type5";
}

