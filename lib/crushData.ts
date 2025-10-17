export interface CrushQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    scores: Record<string, number>;
  }[];
}

export interface CrushResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  description: Record<string, string>;
  currentState: Record<string, string>;
  recommendation: Record<string, string>;
  warning: Record<string, string>;
  advice: Record<string, string>;
}

export const crushQuestions: CrushQuestion[] = [
  {
    id: 1,
    question: {
      ko: "최근 한 달간 상대방과 대화 빈도는?",
      en: "How often have you talked to your crush in the past month?",
      ja: "最近1ヶ月間、相手との会話頻度は？",
      'zh-CN': "最近一个月你和暗恋对象的对话频率是？",
      'zh-TW': "最近一個月你和暗戀對象的對話頻率是？",
      id: "Seberapa sering Anda berbicara dengan gebetan dalam sebulan terakhir?",
      vi: "Tần suất trò chuyện với người bạn thích trong tháng qua là bao nhiêu?"
    },
    options: [
      {
        text: {
          ko: "거의 매일 자연스럽게 대화한다",
          en: "Almost every day, naturally",
          ja: "ほぼ毎日自然に話している",
          'zh-CN': "几乎每天都很自然地聊天",
          'zh-TW': "幾乎每天都很自然地聊天",
          id: "Hampir setiap hari, secara alami",
          vi: "Gần như mỗi ngày, một cách tự nhiên"
        },
        scores: { Type6: 10 }
      },
      {
        text: {
          ko: "일주일에 2-3번 정도 대화한다",
          en: "About 2-3 times a week",
          ja: "週に2-3回程度話している",
          'zh-CN': "一周大约2-3次",
          'zh-TW': "一週大約2-3次",
          id: "Sekitar 2-3 kali seminggu",
          vi: "Khoảng 2-3 lần một tuần"
        },
        scores: { Type5: 10 }
      },
      {
        text: {
          ko: "가끔 인사 정도만 나눈다",
          en: "Occasionally, just greetings",
          ja: "たまに挨拶程度だけ",
          'zh-CN': "偶尔只是打个招呼",
          'zh-TW': "偶爾只是打個招呼",
          id: "Kadang-kadang, hanya salam",
          vi: "Thỉnh thoảng chỉ chào hỏi"
        },
        scores: { Type3: 10 }
      },
      {
        text: {
          ko: "거의 대화하지 못한다",
          en: "Hardly talk at all",
          ja: "ほとんど話せない",
          'zh-CN': "几乎不聊天",
          'zh-TW': "幾乎不聊天",
          id: "Hampir tidak berbicara sama sekali",
          vi: "Hầu như không nói chuyện"
        },
        scores: { Type1: 10 }
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "상대방이 나를 보는 눈빛은?",
      en: "How does your crush look at you?",
      ja: "相手があなたを見る目は？",
      'zh-CN': "暗恋对象看你的眼神是？",
      'zh-TW': "暗戀對象看你的眼神是？",
      id: "Bagaimana gebetan memandang Anda?",
      vi: "Người bạn thích nhìn bạn như thế nào?"
    },
    options: [
      {
        text: {
          ko: "따뜻하고 관심 있어 보인다",
          en: "Warm and interested",
          ja: "温かくて関心があるように見える",
          'zh-CN': "温暖且有关心的样子",
          'zh-TW': "溫暖且有關心的樣子",
          id: "Hangat dan tertarik",
          vi: "Ấm áp và quan tâm"
        },
        scores: { Type6: 10 }
      },
      {
        text: {
          ko: "친구처럼 편안해 보인다",
          en: "Comfortable like a friend",
          ja: "友達のようにリラックスしている",
          'zh-CN': "像朋友一样舒适",
          'zh-TW': "像朋友一樣舒適",
          id: "Nyaman seperti teman",
          vi: "Thoải mái như bạn bè"
        },
        scores: { Type4: 10 }
      },
      {
        text: {
          ko: "평범하고 특별한 감정은 없어 보인다",
          en: "Normal, no special feelings",
          ja: "普通で特別な感情はないように見える",
          'zh-CN': "普通，没有特殊感情",
          'zh-TW': "普通，沒有特殊感情",
          id: "Normal, tidak ada perasaan khusus",
          vi: "Bình thường, không có cảm xúc đặc biệt"
        },
        scores: { Type2: 10 }
      },
      {
        text: {
          ko: "잘 모르겠다, 눈 마주친 적이 거의 없다",
          en: "Not sure, hardly made eye contact",
          ja: "よくわからない、目を合わせたことがほとんどない",
          'zh-CN': "不太清楚，几乎没有眼神接触",
          'zh-TW': "不太清楚，幾乎沒有眼神接觸",
          id: "Tidak yakin, hampir tidak pernah kontak mata",
          vi: "Không chắc, hầu như không có giao tiếp bằng mắt"
        },
        scores: { Type1: 10 }
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "상대방이 먼저 연락한 적은?",
      en: "Has your crush contacted you first?",
      ja: "相手から先に連絡してきたことは？",
      'zh-CN': "暗恋对象主动联系过你吗？",
      'zh-TW': "暗戀對象主動聯繫過你嗎？",
      id: "Apakah gebetan pernah menghubungi Anda terlebih dahulu?",
      vi: "Người bạn thích có bao giờ liên lạc trước không?"
    },
    options: [
      {
        text: {
          ko: "자주 있다, 먼저 연락하는 경우가 많다",
          en: "Often, they contact me first frequently",
          ja: "よくある、先に連絡してくることが多い",
          'zh-CN': "经常有，他们经常主动联系",
          'zh-TW': "經常有，他們經常主動聯繫",
          id: "Sering, mereka sering menghubungi saya terlebih dahulu",
          vi: "Thường xuyên, họ thường liên lạc trước"
        },
        scores: { Type6: 10 }
      },
      {
        text: {
          ko: "가끔 있다, 필요할 때 연락한다",
          en: "Sometimes, when needed",
          ja: "たまにある、必要な時に連絡する",
          'zh-CN': "偶尔有，需要的时候联系",
          'zh-TW': "偶爾有，需要的時候聯繫",
          id: "Kadang-kadang, saat diperlukan",
          vi: "Thỉnh thoảng, khi cần thiết"
        },
        scores: { Type4: 10 }
      },
      {
        text: {
          ko: "거의 없다, 내가 주로 먼저 한다",
          en: "Rarely, I usually initiate",
          ja: "ほとんどない、私が主に先に連絡する",
          'zh-CN': "几乎没有，我通常主动联系",
          'zh-TW': "幾乎沒有，我通常主動聯繫",
          id: "Hampir tidak pernah, saya yang biasanya memulai",
          vi: "Hầu như không, tôi thường là người chủ động"
        },
        scores: { Type2: 10 }
      },
      {
        text: {
          ko: "한 번도 없다",
          en: "Never",
          ja: "一度もない",
          'zh-CN': "从来没有",
          'zh-TW': "從來沒有",
          id: "Tidak pernah",
          vi: "Chưa bao giờ"
        },
        scores: { Type1: 10 }
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "둘만의 만남을 가진 적은?",
      en: "Have you had one-on-one meetings?",
      ja: "二人だけの会ったことは？",
      'zh-CN': "你们有过单独见面吗？",
      'zh-TW': "你們有過單獨見面嗎？",
      id: "Apakah Anda pernah bertemu berdua saja?",
      vi: "Bạn có bao giờ gặp riêng hai người không?"
    },
    options: [
      {
        text: {
          ko: "여러 번 있다, 편하게 만난다",
          en: "Several times, we meet comfortably",
          ja: "何度もある、気楽に会っている",
          'zh-CN': "好几次，我们见面很轻松",
          'zh-TW': "好幾次，我們見面很輕鬆",
          id: "Beberapa kali, kami bertemu dengan nyaman",
          vi: "Nhiều lần, chúng tôi gặp nhau thoải mái"
        },
        scores: { Type6: 10 }
      },
      {
        text: {
          ko: "한두 번 있다",
          en: "Once or twice",
          ja: "1-2回ある",
          'zh-CN': "一两次",
          'zh-TW': "一兩次",
          id: "Sekali atau dua kali",
          vi: "Một hoặc hai lần"
        },
        scores: { Type5: 10 }
      },
      {
        text: {
          ko: "아직 없지만 기회를 만들고 있다",
          en: "Not yet, but trying to create opportunities",
          ja: "まだないが、機会を作ろうとしている",
          'zh-CN': "还没有，但正在创造机会",
          'zh-TW': "還沒有，但正在創造機會",
          id: "Belum, tapi sedang mencoba membuat kesempatan",
          vi: "Chưa có, nhưng đang cố gắng tạo cơ hội"
        },
        scores: { Type3: 10 }
      },
      {
        text: {
          ko: "없고, 만들기도 어려운 상황이다",
          en: "No, and it's difficult to arrange",
          ja: "なくて、作るのも難しい状況だ",
          'zh-CN': "没有，而且很难安排",
          'zh-TW': "沒有，而且很難安排",
          id: "Tidak ada, dan sulit untuk mengatur",
          vi: "Không có, và khó để sắp xếp"
        },
        scores: { Type1: 10 }
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "상대방과 공통점은?",
      en: "What do you have in common with your crush?",
      ja: "相手との共通点は？",
      'zh-CN': "你和暗恋对象的共同点是什么？",
      'zh-TW': "你和暗戀對象的共同點是什麼？",
      id: "Apa kesamaan Anda dengan gebetan?",
      vi: "Bạn có điểm chung gì với người bạn thích?"
    },
    options: [
      {
        text: {
          ko: "취미, 관심사가 많이 겹친다",
          en: "Many overlapping hobbies and interests",
          ja: "趣味や関心事が多く重なっている",
          'zh-CN': "有很多重叠的爱好和兴趣",
          'zh-TW': "有很多重疊的愛好和興趣",
          id: "Banyak hobi dan minat yang tumpang tindih",
          vi: "Nhiều sở thích và quan tâm trùng lặp"
        },
        scores: { Type5: 10 }
      },
      {
        text: {
          ko: "어느 정도 공통점이 있다",
          en: "Some commonalities exist",
          ja: "ある程度共通点がある",
          'zh-CN': "有一些共同点",
          'zh-TW': "有一些共同點",
          id: "Ada beberapa kesamaan",
          vi: "Có một số điểm chung"
        },
        scores: { Type4: 10 }
      },
      {
        text: {
          ko: "거의 없지만 알아가는 중이다",
          en: "Almost none, but getting to know each other",
          ja: "ほとんどないが、知り合っている途中だ",
          'zh-CN': "几乎没有，但正在了解中",
          'zh-TW': "幾乎沒有，但正在了解中",
          id: "Hampir tidak ada, tapi sedang saling mengenal",
          vi: "Hầu như không có, nhưng đang tìm hiểu nhau"
        },
        scores: { Type3: 10 }
      },
      {
        text: {
          ko: "잘 모르겠다, 아직 잘 모른다",
          en: "Not sure, don't know well yet",
          ja: "よくわからない、まだよく知らない",
          'zh-CN': "不太清楚，还不太了解",
          'zh-TW': "不太清楚，還不太了解",
          id: "Tidak yakin, belum mengenal dengan baik",
          vi: "Không chắc, chưa hiểu rõ lắm"
        },
        scores: { Type2: 10 }
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "상대방의 현재 연애 상태는?",
      en: "What is your crush's current relationship status?",
      ja: "相手の現在の恋愛状況は？",
      'zh-CN': "你暗恋对象目前的恋爱状态是？",
      'zh-TW': "你暗戀對象目前的戀愛狀態是？",
      id: "Apa status hubungan gebetan saat ini?",
      vi: "Tình trạng tình cảm hiện tại của người bạn thích là gì?"
    },
    options: [
      {
        text: {
          ko: "확실히 싱글이다",
          en: "Definitely single",
          ja: "確実に独身だ",
          'zh-CN': "肯定是单身",
          'zh-TW': "肯定是單身",
          id: "Pasti single",
          vi: "Chắc chắn độc thân"
        },
        scores: { Type6: 10 }
      },
      {
        text: {
          ko: "아마 싱글인 것 같다",
          en: "Probably single",
          ja: "おそらく独身だと思う",
          'zh-CN': "可能是单身",
          'zh-TW': "可能是單身",
          id: "Mungkin single",
          vi: "Có lẽ độc thân"
        },
        scores: { Type5: 10 }
      },
      {
        text: {
          ko: "잘 모르겠다",
          en: "Not sure",
          ja: "よくわからない",
          'zh-CN': "不太清楚",
          'zh-TW': "不太清楚",
          id: "Tidak yakin",
          vi: "Không chắc"
        },
        scores: { Type3: 10 }
      },
      {
        text: {
          ko: "연애 중이거나 관심 있는 사람이 있는 것 같다",
          en: "Seems to be dating or interested in someone",
          ja: "恋愛中か気になる人がいるようだ",
          'zh-CN': "似乎在恋爱中或对某人有兴趣",
          'zh-TW': "似乎在戀愛中或對某人有興趣",
          id: "Sepertinya sedang pacaran atau tertarik pada seseorang",
          vi: "Có vẻ đang hẹn hò hoặc quan tâm đến ai đó"
        },
        scores: { Type1: 10 }
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "나의 매력 어필 정도는?",
      en: "How much do you show your charm?",
      ja: "自分の魅力アピールの程度は？",
      'zh-CN': "你展现魅力的程度是？",
      'zh-TW': "你展現魅力的程度是？",
      id: "Seberapa banyak Anda menunjukkan daya tarik?",
      vi: "Bạn thể hiện sức hấp dẫn của mình ở mức độ nào?"
    },
    options: [
      {
        text: {
          ko: "적극적으로 좋은 모습 보여주려 노력 중",
          en: "Actively trying to show my best side",
          ja: "積極的に良い姿を見せようと努力している",
          'zh-CN': "积极努力展现自己最好的一面",
          'zh-TW': "積極努力展現自己最好的一面",
          id: "Aktif berusaha menunjukkan sisi terbaik saya",
          vi: "Tích cực cố gắng thể hiện mặt tốt nhất của mình"
        },
        scores: { Type6: 10 }
      },
      {
        text: {
          ko: "자연스럽게 내 모습을 보여준다",
          en: "Naturally show my true self",
          ja: "自然に自分の姿を見せている",
          'zh-CN': "自然地展现真实的自己",
          'zh-TW': "自然地展現真實的自己",
          id: "Secara alami menunjukkan diri saya yang sebenarnya",
          vi: "Tự nhiên thể hiện con người thật của mình"
        },
        scores: { Type4: 10 }
      },
      {
        text: {
          ko: "어필하고 싶지만 용기가 안 난다",
          en: "Want to appeal but lack courage",
          ja: "アピールしたいが勇気が出ない",
          'zh-CN': "想要展现魅力但缺乏勇气",
          'zh-TW': "想要展現魅力但缺乏勇氣",
          id: "Ingin menarik perhatian tapi tidak punya keberanian",
          vi: "Muốn thể hiện sức hấp dẫn nhưng thiếu can đảm"
        },
        scores: { Type2: 10 }
      },
      {
        text: {
          ko: "거의 티를 안 낸다, 못 낸다",
          en: "Hardly show any, can't do it",
          ja: "ほとんど見せない、できない",
          'zh-CN': "几乎不展现，做不到",
          'zh-TW': "幾乎不展現，做不到",
          id: "Hampir tidak menunjukkan, tidak bisa",
          vi: "Hầu như không thể hiện, không làm được"
        },
        scores: { Type1: 10 }
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "주변 친구들의 도움은?",
      en: "How are your friends helping?",
      ja: "周りの友達の助けは？",
      'zh-CN': "周围朋友们的帮助是？",
      'zh-TW': "周圍朋友們的幫助是？",
      id: "Bagaimana bantuan teman-teman sekitar?",
      vi: "Sự giúp đỡ của bạn bè xung quanh như thế nào?"
    },
    options: [
      {
        text: {
          ko: "친구들이 적극적으로 도와주고 있다",
          en: "Friends are actively helping",
          ja: "友達が積極的に手伝ってくれている",
          'zh-CN': "朋友们积极帮助",
          'zh-TW': "朋友們積極幫助",
          id: "Teman-teman aktif membantu",
          vi: "Bạn bè tích cực giúp đỡ"
        },
        scores: { Type5: 10 }
      },
      {
        text: {
          ko: "친구들이 응원해준다",
          en: "Friends are cheering me on",
          ja: "友達が応援してくれている",
          'zh-CN': "朋友们为我加油",
          'zh-TW': "朋友們為我加油",
          id: "Teman-teman mendukung saya",
          vi: "Bạn bè cổ vũ tôi"
        },
        scores: { Type4: 10 }
      },
      {
        text: {
          ko: "아직 말 안 했다",
          en: "Haven't told them yet",
          ja: "まだ言っていない",
          'zh-CN': "还没有告诉他们",
          'zh-TW': "還沒有告訴他們",
          id: "Belum memberitahu mereka",
          vi: "Chưa nói với họ"
        },
        scores: { Type2: 10 }
      },
      {
        text: {
          ko: "주변에 경쟁자가 있는 것 같다",
          en: "Seems like there are competitors around",
          ja: "周りにライバルがいるようだ",
          'zh-CN': "周围似乎有竞争对手",
          'zh-TW': "周圍似乎有競爭對手",
          id: "Sepertinya ada pesaing di sekitar",
          vi: "Có vẻ như có đối thủ cạnh tranh xung quanh"
        },
        scores: { Type1: 10 }
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "상대방의 이상형과 나의 비슷한 정도는?",
      en: "How similar are you to your crush's ideal type?",
      ja: "相手の理想型と自分の似ている程度は？",
      'zh-CN': "你和暗恋对象理想型的相似程度是？",
      'zh-TW': "你和暗戀對象理想型的相似程度是？",
      id: "Seberapa mirip Anda dengan tipe ideal gebetan?",
      vi: "Bạn giống với kiểu lý tưởng của người bạn thích ở mức độ nào?"
    },
    options: [
      {
        text: {
          ko: "상대방 이상형에 잘 맞는 편이다",
          en: "I fit their ideal type well",
          ja: "相手の理想型によく合う方だ",
          'zh-CN': "我符合他们的理想型",
          'zh-TW': "我符合他們的理想型",
          id: "Saya cocok dengan tipe ideal mereka",
          vi: "Tôi phù hợp với kiểu lý tưởng của họ"
        },
        scores: { Type6: 10 }
      },
      {
        text: {
          ko: "어느 정도 맞는다",
          en: "Somewhat matches",
          ja: "ある程度合う",
          'zh-CN': "某种程度上匹配",
          'zh-TW': "某種程度上匹配",
          id: "Agak cocok",
          vi: "Khá phù hợp"
        },
        scores: { Type5: 10 }
      },
      {
        text: {
          ko: "잘 모르겠다",
          en: "Not sure",
          ja: "よくわからない",
          'zh-CN': "不太清楚",
          'zh-TW': "不太清楚",
          id: "Tidak yakin",
          vi: "Không chắc"
        },
        scores: { Type3: 10 }
      },
      {
        text: {
          ko: "거의 안 맞는 것 같다",
          en: "Doesn't seem to match much",
          ja: "ほとんど合わないようだ",
          'zh-CN': "似乎不太匹配",
          'zh-TW': "似乎不太匹配",
          id: "Sepertinya tidak cocok",
          vi: "Có vẻ không phù hợp lắm"
        },
        scores: { Type2: 10 }
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "고백 계획은?",
      en: "What's your confession plan?",
      ja: "告白の計画は？",
      'zh-CN': "你的告白计划是？",
      'zh-TW': "你的告白計劃是？",
      id: "Apa rencana pengakuan Anda?",
      vi: "Kế hoạch tỏ tình của bạn là gì?"
    },
    options: [
      {
        text: {
          ko: "구체적인 계획이 있다",
          en: "Have a specific plan",
          ja: "具体的な計画がある",
          'zh-CN': "有具体的计划",
          'zh-TW': "有具體的計劃",
          id: "Ada rencana yang spesifik",
          vi: "Có kế hoạch cụ thể"
        },
        scores: { Type6: 10 }
      },
      {
        text: {
          ko: "타이밍을 보고 있다",
          en: "Waiting for the right timing",
          ja: "タイミングを見ている",
          'zh-CN': "在等待合适的时机",
          'zh-TW': "在等待合適的時機",
          id: "Menunggu waktu yang tepat",
          vi: "Đang chờ thời điểm thích hợp"
        },
        scores: { Type5: 10 }
      },
      {
        text: {
          ko: "생각은 하지만 무섭다",
          en: "Thinking about it but scared",
          ja: "考えているが怖い",
          'zh-CN': "在考虑但害怕",
          'zh-TW': "在考慮但害怕",
          id: "Memikirkannya tapi takut",
          vi: "Đang nghĩ về nó nhưng sợ hãi"
        },
        scores: { Type3: 10 }
      },
      {
        text: {
          ko: "아직 시기상조인 것 같다",
          en: "Still seems too early",
          ja: "まだ時期尚早だと思う",
          'zh-CN': "似乎还为时过早",
          'zh-TW': "似乎還為時過早",
          id: "Masih terasa terlalu awal",
          vi: "Vẫn còn quá sớm"
        },
        scores: { Type2: 10 }
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "상대방의 관심 신호는?",
      en: "What are your crush's interest signals?",
      ja: "相手の関心のサインは？",
      'zh-CN': "暗恋对象的兴趣信号是？",
      'zh-TW': "暗戀對象的興趣信號是？",
      id: "Apa sinyal ketertarikan gebetan?",
      vi: "Tín hiệu quan tâm của người bạn thích là gì?"
    },
    options: [
      {
        text: {
          ko: "나에게 관심 있다는 신호가 많다",
          en: "Many signals showing interest in me",
          ja: "私に興味があるというサインが多い",
          'zh-CN': "有很多对我有兴趣的信号",
          'zh-TW': "有很多對我有興趣的信號",
          id: "Banyak sinyal menunjukkan ketertarikan pada saya",
          vi: "Nhiều tín hiệu cho thấy quan tâm đến tôi"
        },
        scores: { Type6: 10 }
      },
      {
        text: {
          ko: "호감은 있는 것 같다",
          en: "Seems to have some interest",
          ja: "好感はあるようだ",
          'zh-CN': "似乎有一些好感",
          'zh-TW': "似乎有一些好感",
          id: "Sepertinya ada ketertarikan",
          vi: "Có vẻ có một chút quan tâm"
        },
        scores: { Type4: 10 }
      },
      {
        text: {
          ko: "친구 이상은 아닌 것 같다",
          en: "Doesn't seem more than friendship",
          ja: "友達以上ではないようだ",
          'zh-CN': "似乎不超过友谊",
          'zh-TW': "似乎不超過友誼",
          id: "Sepertinya tidak lebih dari persahabatan",
          vi: "Có vẻ không hơn gì tình bạn"
        },
        scores: { Type3: 10 }
      },
      {
        text: {
          ko: "관심 없는 것 같다",
          en: "Doesn't seem interested",
          ja: "興味がないようだ",
          'zh-CN': "似乎没有兴趣",
          'zh-TW': "似乎沒有興趣",
          id: "Sepertinya tidak tertarik",
          vi: "Có vẻ không quan tâm"
        },
        scores: { Type1: 10 }
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "나의 자신감 수준은?",
      en: "What's your confidence level?",
      ja: "自分の自信レベルは？",
      'zh-CN': "你的自信水平是？",
      'zh-TW': "你的自信水平是？",
      id: "Berapa tingkat kepercayaan diri Anda?",
      vi: "Mức độ tự tin của bạn là gì?"
    },
    options: [
      {
        text: {
          ko: "잘 되리라 확신한다",
          en: "Confident it will work out",
          ja: "うまくいくと確信している",
          'zh-CN': "确信会成功",
          'zh-TW': "確信會成功",
          id: "Yakin akan berhasil",
          vi: "Tin chắc sẽ thành công"
        },
        scores: { Type6: 10 }
      },
      {
        text: {
          ko: "가능성 있다고 생각한다",
          en: "Think there's a possibility",
          ja: "可能性があると思う",
          'zh-CN': "认为有可能",
          'zh-TW': "認為有可能",
          id: "Berpikir ada kemungkinan",
          vi: "Nghĩ có khả năng"
        },
        scores: { Type5: 10 }
      },
      {
        text: {
          ko: "반반인 것 같다",
          en: "Seems like 50-50",
          ja: "五分五分だと思う",
          'zh-CN': "似乎是五五开",
          'zh-TW': "似乎是五五開",
          id: "Sepertinya 50-50",
          vi: "Có vẻ như 50-50"
        },
        scores: { Type4: 10 }
      },
      {
        text: {
          ko: "솔직히 자신 없다",
          en: "Honestly not confident",
          ja: "正直自信がない",
          'zh-CN': "老实说没有自信",
          'zh-TW': "老實說沒有自信",
          id: "Jujur tidak percaya diri",
          vi: "Thành thật không tự tin"
        },
        scores: { Type2: 10 }
      }
    ]
  }
];

export const crushResults: CrushResult[] = [
  {
    type: "Type1",
    emoji: "💔",
    title: {
      ko: "성공률 10% 이하",
      en: "Success Rate 10% or Below",
      ja: "成功率10%以下",
      'zh-CN': "成功率10%以下",
      'zh-TW': "成功率10%以下",
      id: "Tingkat Keberhasilan 10% atau Di Bawah",
      vi: "Tỷ lệ thành công 10% trở xuống"
    },
    description: {
      ko: "현실을 직시하세요... 지금은 아닌 것 같아요. 안타깝지만 현재 상황으로는 성공 가능성이 매우 낮습니다. 상대방과의 접점이 부족하거나, 상대방이 이미 다른 사람에게 관심이 있거나, 아직 나를 잘 모르는 상태입니다. 지금 고백하면 거절당할 확률이 높고, 관계가 어색해질 수 있습니다. 급하게 접근하기보다는 먼저 친해지는 시간이 필요합니다.",
      en: "Face reality... it doesn't seem like the right time. Unfortunately, the current situation has a very low chance of success. There's a lack of connection with the other person, they may already be interested in someone else, or they don't know you well yet. Confessing now would likely result in rejection and make the relationship awkward. You need time to become friends first rather than rushing in.",
      ja: "現実を直視してください...今は違うようです。残念ながら現在の状況では成功の可能性が非常に低いです。相手との接点が不足していたり、相手がすでに他の人に興味を持っていたり、まだあなたをよく知らない状態です。今告白すると拒否される確率が高く、関係がぎこちなくなる可能性があります。急いでアプローチするよりも、まず友達になる時間が必要です。",
      'zh-CN': "面对现实吧...现在似乎不是时候。遗憾的是，目前的情况成功可能性很低。与对方的接触点不足，或者对方已经对其他人有兴趣，或者还不了解你。现在告白很可能被拒绝，关系会变得尴尬。与其急于接近，不如先花时间成为朋友。",
      'zh-TW': "面對現實吧...現在似乎不是時候。遺憾的是，目前的情況成功可能性很低。與對方的接觸點不足，或者對方已經對其他人有興趣，或者還不了解你。現在告白很可能被拒絕，關係會變得尷尬。與其急於接近，不如先花時間成為朋友。",
      id: "Hadapi kenyataan... sepertinya bukan saatnya. Sayangnya, situasi saat ini memiliki peluang sukses yang sangat rendah. Kurangnya koneksi dengan lawan, mereka mungkin sudah tertarik pada orang lain, atau belum mengenal Anda dengan baik. Mengaku sekarang kemungkinan besar akan ditolak dan membuat hubungan canggung. Anda perlu waktu untuk menjadi teman terlebih dahulu daripada terburu-buru.",
      vi: "Hãy đối mặt với thực tế... bây giờ có vẻ chưa phải lúc. Thật không may, tình huống hiện tại có khả năng thành công rất thấp. Thiếu sự kết nối với đối phương, họ có thể đã quan tâm đến ai đó khác, hoặc chưa hiểu rõ về bạn. Tỏ tình bây giờ có khả năng cao bị từ chối và làm mối quan hệ trở nên khó xử. Bạn cần thời gian để trở thành bạn bè trước thay vì vội vàng."
    },
    currentState: {
      ko: "접점 부족, 상대방 무관심, 일방적 감정, 타이밍 나쁨",
      en: "Lack of connection, other person's disinterest, one-sided feelings, bad timing",
      ja: "接点不足、相手の無関心、一方的な感情、タイミングが悪い",
      'zh-CN': "接触点不足，对方不关心，单方面感情，时机不好",
      'zh-TW': "接觸點不足，對方不關心，單方面感情，時機不好",
      id: "Kurang koneksi, ketidakpedulian lawan, perasaan sepihak, timing buruk",
      vi: "Thiếu kết nối, đối phương không quan tâm, cảm xúc một chiều, thời điểm xấu"
    },
    recommendation: {
      ko: "자연스러운 대화 기회 만들기, 공통 관심사 찾기, 천천히 친해지기",
      en: "Create natural conversation opportunities, find common interests, slowly become friends",
      ja: "自然な会話の機会を作る、共通の関心事を見つける、ゆっくり親しくなる",
      'zh-CN': "创造自然的对话机会，找到共同兴趣，慢慢成为朋友",
      'zh-TW': "創造自然的對話機會，找到共同興趣，慢慢成為朋友",
      id: "Ciptakan kesempatan berbicara alami, temukan minat bersama, perlahan menjadi teman",
      vi: "Tạo cơ hội trò chuyện tự nhiên, tìm sở thích chung, từ từ trở thành bạn bè"
    },
    warning: {
      ko: "급한 고백은 금물! 스토킹 주의!",
      en: "No hasty confessions! Beware of stalking!",
      ja: "急いだ告白は禁物！ストーキング注意！",
      'zh-CN': "不要急于告白！注意不要跟踪！",
      'zh-TW': "不要急於告白！注意不要跟蹤！",
      id: "Jangan terburu-buru mengaku! Waspada stalking!",
      vi: "Đừng vội vàng tỏ tình! Cẩn thận với việc theo dõi!"
    },
    advice: {
      ko: "아직 포기하지 마세요. 먼저 친구로 시작하세요. 시간을 갖고 천천히 다가가면 기회가 올 수 있습니다. 상대방을 알아가는 과정 자체를 즐기세요!",
      en: "Don't give up yet. Start as friends first. Take your time and approach slowly, and opportunities may come. Enjoy the process of getting to know the other person!",
      ja: "まだ諦めないでください。まず友達から始めましょう。時間をかけてゆっくりアプローチすれば、機会が来るかもしれません。相手を知る過程そのものを楽しんでください！",
      'zh-CN': "不要放弃。先从朋友开始。花时间慢慢接近，机会可能会来。享受了解对方的过程！",
      'zh-TW': "不要放棄。先從朋友開始。花時間慢慢接近，機會可能會來。享受了解對方的過程！",
      id: "Jangan menyerah dulu. Mulai sebagai teman terlebih dahulu. Luangkan waktu dan pendekatan perlahan, dan kesempatan mungkin datang. Nikmati proses mengenal lawan!",
      vi: "Đừng từ bỏ. Hãy bắt đầu từ bạn bè. Dành thời gian và tiếp cận từ từ, cơ hội có thể đến. Hãy tận hưởng quá trình tìm hiểu đối phương!"
    }
  },
  {
    type: "Type2",
    emoji: "🤔",
    title: {
      ko: "성공률 30%",
      en: "Success Rate 30%",
      ja: "成功率30%",
      'zh-CN': "成功率30%",
      'zh-TW': "成功率30%",
      id: "Tingkat Keberhasilan 30%",
      vi: "Tỷ lệ thành công 30%"
    },
    description: {
      ko: "가능성은 있지만... 노력이 더 필요해요. 나쁘지 않지만 확실하지 않은 상태입니다. 상대방이 나를 인식하고 있지만 아직 호감까지는 아닌 것 같습니다. 지금 고백하면 50대 50이지만, 조금 더 준비하면 성공률을 높일 수 있습니다. 친구 단계는 넘었지만 연인으로 가기에는 한 발짝 더 필요한 상황입니다.",
      en: "There's potential but... more effort is needed. It's not bad but the situation is uncertain. The other person recognizes me but doesn't seem to have feelings yet. Confessing now would be 50-50, but with a bit more preparation, you can increase the success rate. You've passed the friend stage but need one more step to become lovers.",
      ja: "可能性はあるが...もっと努力が必要です。悪くはないが確実ではない状態です。相手は私を認識しているが、まだ好感までは持っていないようです。今告白すれば50対50ですが、もう少し準備すれば成功率を上げることができます。友達段階は越えたが、恋人になるにはもう一歩必要な状況です。",
      'zh-CN': "有可能性但...需要更多努力。不算坏但情况不确定。对方认识我但似乎还没有好感。现在告白是五五开，但稍微准备一下可以提高成功率。已经过了朋友阶段，但要成为恋人还需要一步。",
      'zh-TW': "有可能性但...需要更多努力。不算壞但情況不確定。對方認識我但似乎還沒有好感。現在告白是五五開，但稍微準備一下可以提高成功率。已經過了朋友階段，但要成為戀人還需要一步。",
      id: "Ada potensi tapi... butuh lebih banyak usaha. Tidak buruk tapi situasinya tidak pasti. Lawan mengenali saya tapi sepertinya belum ada perasaan. Mengaku sekarang akan 50-50, tapi dengan sedikit persiapan lagi, Anda bisa meningkatkan tingkat keberhasilan. Sudah melewati tahap teman tapi butuh satu langkah lagi untuk menjadi kekasih.",
      vi: "Có khả năng nhưng... cần nỗ lực thêm. Không tệ nhưng tình huống không chắc chắn. Đối phương nhận ra tôi nhưng có vẻ chưa có cảm tình. Tỏ tình bây giờ sẽ là 50-50, nhưng với một chút chuẩn bị thêm, bạn có thể tăng tỷ lệ thành công. Đã vượt qua giai đoạn bạn bè nhưng cần thêm một bước nữa để trở thành người yêu."
    },
    currentState: {
      ko: "인지는 됨, 친구 단계, 호감 불확실, 기회 있음",
      en: "Recognized, friend stage, uncertain feelings, opportunity exists",
      ja: "認識されている、友達段階、好感不確実、機会あり",
      'zh-CN': "被认识，朋友阶段，好感不确定，有机会",
      'zh-TW': "被認識，朋友階段，好感不確定，有機會",
      id: "Dikenali, tahap teman, perasaan tidak pasti, ada kesempatan",
      vi: "Được nhận ra, giai đoạn bạn bè, cảm tình không chắc chắn, có cơ hội"
    },
    recommendation: {
      ko: "둘만의 시간 늘리기, 매력 어필하기, 관심사 공유하기",
      en: "Increase alone time, show your charm, share interests",
      ja: "二人だけの時間を増やす、魅力アピール、関心事を共有する",
      'zh-CN': "增加独处时间，展现魅力，分享兴趣",
      'zh-TW': "增加獨處時間，展現魅力，分享興趣",
      id: "Tingkatkan waktu berdua, tunjukkan daya tarik, bagikan minat",
      vi: "Tăng thời gian riêng tư, thể hiện sức hấp dẫn, chia sẻ sở thích"
    },
    warning: {
      ko: "너무 급하면 친구로 남을 수 있어요",
      en: "If you rush too much, you might stay as friends",
      ja: "急ぎすぎると友達のままになる可能性があります",
      'zh-CN': "太急的话可能会停留在朋友关系",
      'zh-TW': "太急的話可能會停留在朋友關係",
      id: "Jika terlalu terburu-buru, mungkin akan tetap sebagai teman",
      vi: "Nếu vội vàng quá, có thể sẽ mãi ở mức bạn bè"
    },
    advice: {
      ko: "적극적으로 다가가되 부담스럽지 않게! 공통 관심사로 자연스럽게 가까워지고, 상대방의 고민을 들어주면서 신뢰를 쌓으세요. 타이밍이 중요합니다!",
      en: "Approach actively but not pressuring! Get closer naturally through common interests and build trust by listening to their concerns. Timing is important!",
      ja: "積極的にアプローチするが、プレッシャーをかけないように！共通の関心事で自然に近づき、相手の悩みを聞いて信頼を築いてください。タイミングが重要です！",
      'zh-CN': "积极接近但不要有压力！通过共同兴趣自然接近，通过倾听对方的烦恼来建立信任。时机很重要！",
      'zh-TW': "積極接近但不要有壓力！通過共同興趣自然接近，通過傾聽對方的煩惱來建立信任。時機很重要！",
      id: "Dekati secara aktif tapi jangan memaksa! Dekat secara alami melalui minat bersama dan bangun kepercayaan dengan mendengarkan kekhawatiran mereka. Timing penting!",
      vi: "Tiếp cận tích cực nhưng đừng gây áp lực! Hãy gần gũi tự nhiên thông qua sở thích chung và xây dựng niềm tin bằng cách lắng nghe những lo lắng của họ. Thời điểm rất quan trọng!"
    }
  },
  {
    type: "Type3",
    emoji: "💭",
    title: {
      ko: "성공률 50%",
      en: "Success Rate 50%",
      ja: "成功率50%",
      'zh-CN': "成功率50%",
      'zh-TW': "成功率50%",
      id: "Tingkat Keberhasilan 50%",
      vi: "Tỷ lệ thành công 50%"
    },
    description: {
      ko: "반반! 당신의 노력에 달렸어요. 정확히 반반의 상황입니다. 상대방이 나에게 어느 정도 호감은 있지만 확신은 없는 상태입니다. 지금이 가장 중요한 순간이에요. 어떻게 행동하느냐에 따라 성공할 수도, 실패할 수도 있습니다. 전략적으로 접근하면 충분히 가능성이 있습니다.",
      en: "Fifty-fifty! It depends on your effort. It's exactly a 50-50 situation. The other person has some feelings for me but isn't certain. This is the most important moment. Depending on how you act, you could succeed or fail. There's plenty of potential if you approach strategically.",
      ja: "五分五分！あなたの努力次第です。正確に五分五分の状況です。相手は私にある程度好感を持っていますが、確信はない状態です。今が最も重要な瞬間です。どう行動するかによって成功することも失敗することもあります。戦略的にアプローチすれば十分可能性があります。",
      'zh-CN': "五五开！取决于你的努力。正是五五开的情况。对方对我有一定好感但不确定。现在是最重要的时刻。根据你的行动，可能成功也可能失败。如果策略性地接近，有足够的可能性。",
      'zh-TW': "五五開！取決於你的努力。正是五五開的情況。對方對我有一定好感但不確定。現在是最重要的時刻。根據你的行動，可能成功也可能失敗。如果策略性地接近，有足夠的可能性。",
      id: "Lima puluh-lima puluh! Tergantung pada usaha Anda. Situasinya tepat 50-50. Lawan memiliki perasaan tertentu pada saya tapi tidak yakin. Ini adalah momen terpenting. Tergantung bagaimana Anda bertindak, bisa sukses atau gagal. Ada banyak potensi jika Anda mendekati secara strategis.",
      vi: "Năm mươi-năm mươi! Tùy thuộc vào nỗ lực của bạn. Đây chính xác là tình huống 50-50. Đối phương có một chút cảm tình với tôi nhưng không chắc chắn. Bây giờ là khoảnh khắc quan trọng nhất. Tùy thuộc vào cách bạn hành động, có thể thành công hoặc thất bại. Có đủ khả năng nếu bạn tiếp cận một cách chiến lược."
    },
    currentState: {
      ko: "호감 있음, 관심 있음, 경쟁자 가능성, 타이밍 중요",
      en: "Has feelings, interested, potential competitors, timing important",
      ja: "好感あり、関心あり、ライバル可能性、タイミング重要",
      'zh-CN': "有好感，有兴趣，可能有竞争对手，时机重要",
      'zh-TW': "有好感，有興趣，可能有競爭對手，時機重要",
      id: "Ada perasaan, tertarik, kemungkinan pesaing, timing penting",
      vi: "Có cảm tình, quan tâm, khả năng có đối thủ, thời điểm quan trọng"
    },
    recommendation: {
      ko: "결정적 순간 만들기, 진심 보여주기, 차별화된 매력 어필",
      en: "Create decisive moments, show sincerity, appeal with differentiated charm",
      ja: "決定的な瞬間を作る、真心を見せる、差別化された魅力アピール",
      'zh-CN': "创造决定性时刻，展现真心，展现差异化魅力",
      'zh-TW': "創造決定性時刻，展現真心，展現差異化魅力",
      id: "Ciptakan momen penentu, tunjukkan ketulusan, menarik dengan daya tarik yang berbeda",
      vi: "Tạo khoảnh khắc quyết định, thể hiện chân thành, thể hiện sức hấp dẫn khác biệt"
    },
    warning: {
      ko: "우유부단하면 친구존에 갇혀요",
      en: "If you're indecisive, you'll be stuck in the friend zone",
      ja: "優柔不断だと友達ゾーンに閉じ込められます",
      'zh-CN': "优柔寡断的话会困在朋友区",
      'zh-TW': "優柔寡斷的話會困在朋友區",
      id: "Jika ragu-ragu, Anda akan terjebak di zona teman",
      vi: "Nếu do dự, bạn sẽ bị kẹt trong vùng bạn bè"
    },
    advice: {
      ko: "이제 결단의 시간입니다! 너무 오래 끌면 기회를 놓칠 수 있어요. 용기를 내서 마음을 전하되, 부담 없이 자연스럽게 고백하세요. 거절당해도 후회 없게!",
      en: "It's time to decide! If you drag it out too long, you might miss the opportunity. Have courage to express your feelings, but confess naturally without pressure. Even if rejected, have no regrets!",
      ja: "今が決断の時です！長く引き延ばすと機会を逃すかもしれません。勇気を出して気持ちを伝え、プレッシャーなく自然に告白してください。振られても後悔しないように！",
      'zh-CN': "现在是决断的时候！拖太久可能会错过机会。鼓起勇气表达心意，但要自然轻松地告白。即使被拒绝也不后悔！",
      'zh-TW': "現在是決斷的時候！拖太久可能會錯過機會。鼓起勇氣表達心意，但要自然輕鬆地告白。即使被拒絕也不後悔！",
      id: "Sekarang saatnya memutuskan! Jika terlalu lama, Anda mungkin melewatkan kesempatan. Beranilah mengungkapkan perasaan, tapi mengaku secara alami tanpa tekanan. Meski ditolak, jangan menyesal!",
      vi: "Bây giờ là lúc quyết định! Nếu kéo dài quá lâu, bạn có thể bỏ lỡ cơ hội. Hãy dũng cảm bày tỏ tình cảm, nhưng tỏ tình một cách tự nhiên không áp lực. Dù bị từ chối cũng đừng hối tiếc!"
    }
  },
  {
    type: "Type4",
    emoji: "💕",
    title: {
      ko: "성공률 70%",
      en: "Success Rate 70%",
      ja: "成功率70%",
      'zh-CN': "成功率70%",
      'zh-TW': "成功率70%",
      id: "Tingkat Keberhasilan 70%",
      vi: "Tỷ lệ thành công 70%"
    },
    description: {
      ko: "거의 성공! 조금만 더 용기를 내세요. 상당히 높은 성공률입니다! 상대방이 나에게 분명히 호감이 있고, 관심도 보이고 있습니다. 상대방도 어쩌면 나를 기다리고 있을 수 있어요. 타이밍만 잘 잡으면 거의 확실합니다. 망설이지 말고 용기를 내세요!",
      en: "Almost success! Just a little more courage. It's a quite high success rate! The other person clearly has feelings for me and shows interest. They might even be waiting for me. If you catch the right timing, it's almost certain. Don't hesitate, have courage!",
      ja: "ほぼ成功！あと少し勇気を出してください。かなり高い成功率です！相手は私に明確に好感を持っており、関心も示しています。相手ももしかしたら私を待っているかもしれません。タイミングさえうまくつかめればほぼ確実です。ためらわずに勇気を出してください！",
      'zh-CN': "几乎成功！再鼓起一点勇气。相当高的成功率！对方明显对我有好感，也表现出关心。对方也许也在等我。只要把握好时机，几乎确定。不要犹豫，鼓起勇气！",
      'zh-TW': "幾乎成功！再鼓起一點勇氣。相當高的成功率！對方明顯對我有好感，也表現出關心。對方也許也在等我。只要把握好時機，幾乎確定。不要猶豫，鼓起勇氣！",
      id: "Hampir sukses! Sedikit lagi keberanian. Tingkat keberhasilan yang cukup tinggi! Lawan jelas memiliki perasaan pada saya dan menunjukkan ketertarikan. Mereka mungkin bahkan menunggu saya. Jika Anda menangkap timing yang tepat, hampir pasti. Jangan ragu, beranilah!",
      vi: "Gần như thành công! Chỉ cần thêm một chút can đảm. Tỷ lệ thành công khá cao! Đối phương rõ ràng có cảm tình với tôi và thể hiện sự quan tâm. Họ có thể thậm chí đang chờ đợi tôi. Chỉ cần nắm bắt đúng thời điểm, gần như chắc chắn. Đừng do dự, hãy can đảm!"
    },
    currentState: {
      ko: "확실한 호감, 긍정 신호, 좋은 분위기, 성공 임박",
      en: "Definite feelings, positive signals, good atmosphere, success imminent",
      ja: "確実な好感、ポジティブなサイン、良い雰囲気、成功間近",
      'zh-CN': "确定的好感，积极信号，良好氛围，成功在即",
      'zh-TW': "確定的好感，積極信號，良好氛圍，成功在即",
      id: "Perasaan pasti, sinyal positif, suasana baik, sukses sudah dekat",
      vi: "Cảm tình chắc chắn, tín hiệu tích cực, không khí tốt, thành công sắp tới"
    },
    recommendation: {
      ko: "로맨틱한 분위기 만들기, 진심 고백 준비하기",
      en: "Create romantic atmosphere, prepare sincere confession",
      ja: "ロマンチックな雰囲気を作る、真心の告白を準備する",
      'zh-CN': "营造浪漫氛围，准备真心告白",
      'zh-TW': "營造浪漫氛圍，準備真心告白",
      id: "Ciptakan suasana romantis, siapkan pengakuan tulus",
      vi: "Tạo không khí lãng mạn, chuẩn bị tỏ tình chân thành"
    },
    warning: {
      ko: "너무 오래 끌면 상대방이 지칠 수 있어요",
      en: "If you drag it out too long, the other person might get tired",
      ja: "長く引き延ばすと相手が疲れるかもしれません",
      'zh-CN': "拖太久的话对方可能会累",
      'zh-TW': "拖太久的話對方可能會累",
      id: "Jika terlalu lama, lawan mungkin lelah",
      vi: "Nếu kéo dài quá lâu, đối phương có thể mệt mỏi"
    },
    advice: {
      ko: "이제 고백만 남았습니다! 상대방도 당신의 마음을 알고 기다리는 중일 수 있어요. 너무 완벽한 타이밍을 기다리지 말고, 진심을 담아 솔직하게 표현하세요. 거의 다 왔어요!",
      en: "Now only confession is left! The other person might already know your feelings and be waiting. Don't wait for the perfect timing, express yourself sincerely and honestly. You're almost there!",
      ja: "今は告白だけが残っています！相手もあなたの気持ちを知って待っているかもしれません。完璧なタイミングを待たずに、真心を込めて素直に表現してください。もうすぐです！",
      'zh-CN': "现在只剩下告白了！对方可能已经知道你的心意在等待。不要等待完美的时机，真诚坦率地表达。快到了！",
      'zh-TW': "現在只剩下告白了！對方可能已經知道你的心意在等待。不要等待完美的時機，真誠坦率地表達。快到了！",
      id: "Sekarang hanya tinggal mengaku! Lawan mungkin sudah tahu perasaan Anda dan menunggu. Jangan menunggu timing sempurna, ekspresikan diri dengan tulus dan jujur. Hampir sampai!",
      vi: "Bây giờ chỉ còn tỏ tình! Đối phương có thể đã biết tình cảm của bạn và đang chờ đợi. Đừng chờ thời điểm hoàn hảo, hãy thể hiện chân thành và thẳng thắn. Sắp đến rồi!"
    }
  },
  {
    type: "Type5",
    emoji: "💖",
    title: {
      ko: "성공률 90%",
      en: "Success Rate 90%",
      ja: "成功率90%",
      'zh-CN': "成功率90%",
      'zh-TW': "成功率90%",
      id: "Tingkat Keberhasilan 90%",
      vi: "Tỷ lệ thành công 90%"
    },
    description: {
      ko: "거의 확정! 고백만 하면 됩니다. 축하합니다! 거의 확실한 상황입니다. 상대방이 나에게 분명한 호감을 보이고 있고, 주변에서도 이미 커플처럼 보인다는 말을 들을 정도입니다. 상대방도 당신의 고백을 기다리고 있을 가능성이 높습니다. 이제 형식적인 고백만 남았어요!",
      en: "Almost confirmed! Just confess. Congratulations! It's almost certain. The other person clearly shows feelings for me, and people around are already saying we look like a couple. The other person is likely waiting for your confession too. Now only a formal confession is left!",
      ja: "ほぼ確定！告白するだけです。おめでとうございます！ほぼ確実な状況です。相手は私に明確な好感を示しており、周りからもすでにカップルのように見えると言われるほどです。相手もあなたの告白を待っている可能性が高いです。今は形式的な告白だけが残っています！",
      'zh-CN': "几乎确定！只需要告白。恭喜！几乎是确定的情况。对方明显对我有好感，周围的人已经说我们看起来像情侣了。对方很可能也在等待你的告白。现在只剩下正式的告白了！",
      'zh-TW': "幾乎確定！只需要告白。恭喜！幾乎是確定的情況。對方明顯對我有好感，周圍的人已經說我們看起來像情侶了。對方很可能也在等待你的告白。現在只剩下正式的告白了！",
      id: "Hampir dipastikan! Tinggal mengaku saja. Selamat! Situasinya hampir pasti. Lawan jelas menunjukkan perasaan pada saya, dan orang-orang di sekitar sudah mengatakan kami terlihat seperti pasangan. Lawan juga kemungkinan besar menunggu pengakuan Anda. Sekarang hanya tinggal pengakuan formal!",
      vi: "Gần như chắc chắn! Chỉ cần tỏ tình thôi. Chúc mừng! Tình huống gần như chắc chắn. Đối phương rõ ràng thể hiện cảm tình với tôi, và những người xung quanh đã nói chúng tôi trông như một cặp đôi. Đối phương cũng có khả năng cao đang chờ đợi lời tỏ tình của bạn. Bây giờ chỉ còn lời tỏ tình chính thức!"
    },
    currentState: {
      ko: "양방향 호감, 썸 타는 중, 커플 분위기, 상대방도 기다리는 중",
      en: "Mutual feelings, in the talking stage, couple atmosphere, other person also waiting",
      ja: "相互好感、話している段階、カップル雰囲気、相手も待っている",
      'zh-CN': "双向好感，暧昧阶段，情侣氛围，对方也在等待",
      'zh-TW': "雙向好感，曖昧階段，情侶氛圍，對方也在等待",
      id: "Perasaan timbal balik, dalam tahap berbicara, suasana pasangan, lawan juga menunggu",
      vi: "Cảm tình hai chiều, đang trong giai đoạn tìm hiểu, không khí cặp đôi, đối phương cũng đang chờ đợi"
    },
    recommendation: {
      ko: "멋진 고백으로 마무리하기, 기억에 남을 순간 만들기",
      en: "Finish with a great confession, create memorable moments",
      ja: "素晴らしい告白で締めくくる、思い出に残る瞬間を作る",
      'zh-CN': "用精彩的告白结束，创造难忘的时刻",
      'zh-TW': "用精彩的告白結束，創造難忘的時刻",
      id: "Selesaikan dengan pengakuan yang hebat, ciptakan momen yang berkesan",
      vi: "Kết thúc bằng lời tỏ tình tuyệt vời, tạo ra những khoảnh khắc đáng nhớ"
    },
    warning: {
      ko: "너무 오래 끌면 상대방이 「나한테 관심 없나?」 오해할 수 있어요",
      en: "If you drag it out too long, the other person might misunderstand 'Are they not interested in me?'",
      ja: "長く引き延ばすと相手が「私に興味がないの？」と誤解するかもしれません",
      'zh-CN': "拖太久的话对方可能会误解'对我没兴趣吗？'",
      'zh-TW': "拖太久的話對方可能會誤解'對我沒興趣嗎？'",
      id: "Jika terlalu lama, lawan mungkin salah paham 'Apakah mereka tidak tertarik padaku?'",
      vi: "Nếu kéo dài quá lâu, đối phương có thể hiểu lầm 'Họ không quan tâm đến tôi sao?'"
    },
    advice: {
      ko: "더 이상 망설이지 마세요! 상대방도 당신을 좋아하고 있습니다. 자신감을 갖고 진심을 전하세요. 어떤 방식으로 고백해도 성공할 거예요. 행복하세요!",
      en: "Don't hesitate anymore! The other person likes you too. Have confidence and convey your true feelings. No matter how you confess, you'll succeed. Be happy!",
      ja: "もうためらわないでください！相手もあなたを好きです。自信を持って真心を伝えてください。どんな方法で告白しても成功します。幸せになってください！",
      'zh-CN': "不要再犹豫了！对方也喜欢你。自信地传达真心。无论用什么方式告白都会成功。要幸福！",
      'zh-TW': "不要再猶豫了！對方也喜歡你。自信地傳達真心。無論用什麼方式告白都會成功。要幸福！",
      id: "Jangan ragu lagi! Lawan juga menyukai Anda. Miliki kepercayaan diri dan sampaikan perasaan sejati. Tidak peduli bagaimana Anda mengaku, Anda akan berhasil. Bahagialah!",
      vi: "Đừng do dự nữa! Đối phương cũng thích bạn. Hãy tự tin và truyền đạt tình cảm chân thật. Dù tỏ tình bằng cách nào cũng sẽ thành công. Hãy hạnh phúc!"
    }
  },
  {
    type: "Type6",
    emoji: "🎉",
    title: {
      ko: "성공률 100%",
      en: "Success Rate 100%",
      ja: "成功率100%",
      'zh-CN': "成功率100%",
      'zh-TW': "成功率100%",
      id: "Tingkat Keberhasilan 100%",
      vi: "Tỷ lệ thành công 100%"
    },
    description: {
      ko: "이미 성공! 둘이 모르는 건 당신들뿐! 완벽합니다! 사실상 이미 사귀는 것이나 다름없는 상태입니다. 양쪽 모두 서로를 좋아하고, 주변에서도 다 알고 있는 공공연한 비밀입니다. 고백은 그저 확인 절차에 불과합니다. 빨리 고백하고 공식 커플이 되세요!",
      en: "Already successful! You two are the only ones who don't know! Perfect! You're practically already dating. Both sides like each other, and everyone around knows it's an open secret. Confession is just a confirmation process. Confess quickly and become an official couple!",
      ja: "すでに成功！知らないのはあなたたちだけ！完璧です！実質的にもう付き合っているような状態です。両方ともお互いを好きで、周りもみんな知っている公然の秘密です。告白はただの確認手続きです。早く告白して正式なカップルになりましょう！",
      'zh-CN': "已经成功！只有你们俩不知道！完美！实际上已经在交往了。双方都喜欢对方，周围人都知道这是公开的秘密。告白只是确认程序。快点告白成为正式情侣！",
      'zh-TW': "已經成功！只有你們倆不知道！完美！實際上已經在交往了。雙方都喜歡對方，周圍人都知道這是公開的秘密。告白只是確認程序。快點告白成為正式情侶！",
      id: "Sudah berhasil! Hanya kalian berdua yang tidak tahu! Sempurna! Secara praktis sudah pacaran. Kedua belah pihak saling menyukai, dan semua orang di sekitar tahu itu rahasia umum. Pengakuan hanya prosedur konfirmasi. Cepat mengaku dan jadilah pasangan resmi!",
      vi: "Đã thành công! Chỉ có hai bạn không biết! Hoàn hảo! Thực tế đã hẹn hò rồi. Cả hai bên đều thích nhau, và mọi người xung quanh đều biết đó là bí mật công khai. Tỏ tình chỉ là thủ tục xác nhận. Hãy tỏ tình nhanh và trở thành cặp đôi chính thức!"
    },
    currentState: {
      ko: "사실상 커플, 양방향 확실, 모두가 아는 사이, 고백만 남음",
      en: "Practically a couple, mutual certainty, everyone knows, only confession left",
      ja: "実質カップル、相互確実、みんなが知っている、告白だけ残り",
      'zh-CN': "实际上是情侣，双向确定，大家都知道，只剩告白",
      'zh-TW': "實際上是情侶，雙向確定，大家都知道，只剩告白",
      id: "Secara praktis pasangan, kepastian timbal balik, semua orang tahu, hanya tinggal pengakuan",
      vi: "Thực tế là cặp đôi, chắc chắn hai chiều, mọi người đều biết, chỉ còn tỏ tình"
    },
    recommendation: {
      ko: "지금 당장 고백하기! 더 늦으면 어색해요",
      en: "Confess right now! Any later will be awkward",
      ja: "今すぐ告白！もっと遅くなると気まずいです",
      'zh-CN': "现在马上告白！再晚就尴尬了",
      'zh-TW': "現在馬上告白！再晚就尷尬了",
      id: "Mengaku sekarang juga! Lebih lambat akan canggung",
      vi: "Tỏ tình ngay bây giờ! Muộn hơn sẽ khó xử"
    },
    warning: {
      ko: "너무 안 하면 상대방이 「왜 안 하지?」 답답해해요",
      en: "If you don't do it, the other person will be frustrated 'Why aren't they doing it?'",
      ja: "やらないと相手が「なぜやらないの？」とイライラします",
      'zh-CN': "不做的话对方会着急'为什么不告白？'",
      'zh-TW': "不做的話對方會著急'為什麼不告白？'",
      id: "Jika tidak dilakukan, lawan akan frustrasi 'Mengapa mereka tidak melakukannya?'",
      vi: "Nếu không làm, đối phương sẽ bực bội 'Tại sao họ không làm?'"
    },
    advice: {
      ko: "뭘 더 망설이나요?! 오늘 당장 고백하세요! 상대방은 이미 당신의 연인이라고 생각하고 있을 수도 있어요. 기억에 남을 멋진 고백으로 공식 커플이 되세요. 축하합니다!",
      en: "What are you hesitating for?! Confess today! The other person might already think of you as their lover. Become an official couple with a memorable confession. Congratulations!",
      ja: "何をためらっているの？！今日告白してください！相手はすでにあなたを恋人だと思っているかもしれません。思い出に残る素晴らしい告白で正式なカップルになりましょう。おめでとうございます！",
      'zh-CN': "还在犹豫什么？！今天就去告白！对方可能已经把你当作恋人了。用难忘的精彩告白成为正式情侣。恭喜！",
      'zh-TW': "還在猶豫什麼？！今天就去告白！對方可能已經把你當作戀人了。用難忘的精彩告白成為正式情侶。恭喜！",
      id: "Apa yang Anda ragukan?! Mengaku hari ini! Lawan mungkin sudah menganggap Anda sebagai kekasih mereka. Jadilah pasangan resmi dengan pengakuan yang berkesan. Selamat!",
      vi: "Còn do dự gì nữa?! Hãy tỏ tình hôm nay! Đối phương có thể đã coi bạn là người yêu của họ. Hãy trở thành cặp đôi chính thức với lời tỏ tình đáng nhớ. Chúc mừng!"
    }
  }
];

export function calculateCrushResult(answers: any[]): string {
  const scores = { Type1: 0, Type2: 0, Type3: 0, Type4: 0, Type5: 0, Type6: 0 };
  
  answers.forEach(answer => {
    Object.keys(answer).forEach(type => {
      if (scores[type as keyof typeof scores] !== undefined) {
        scores[type as keyof typeof scores] += answer[type];
      }
    });
  });
  
  // 최고 점수의 타입 반환
  const maxScore = Math.max(...Object.values(scores));
  const resultType = Object.keys(scores).find(type => scores[type as keyof typeof scores] === maxScore);
  
  // 동점일 경우 Q10-Q12의 선택을 우선 반영 (마지막 3개 답변 확인)
  if (resultType && answers.length >= 10) {
    const lastThreeAnswers = answers.slice(-3);
    const lastThreeScores = { Type1: 0, Type2: 0, Type3: 0, Type4: 0, Type5: 0, Type6: 0 };
    
    lastThreeAnswers.forEach(answer => {
      Object.keys(answer).forEach(type => {
        if (lastThreeScores[type as keyof typeof lastThreeScores] !== undefined) {
          lastThreeScores[type as keyof typeof lastThreeScores] += answer[type];
        }
      });
    });
    
    const maxLastScore = Math.max(...Object.values(lastThreeScores));
    const lastResultType = Object.keys(lastThreeScores).find(type => lastThreeScores[type as keyof typeof lastThreeScores] === maxLastScore);
    
    return lastResultType || resultType;
  }
  
  return resultType || "Type1";
}
