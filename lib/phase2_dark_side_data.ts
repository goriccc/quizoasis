export interface Phase2DarkSideQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    types: string[]; // 각 선택지가 어떤 타입에 점수를 주는지
  }[];
}

export interface Phase2DarkSideResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  darkStyle: Record<string, string>; // 흑화 스타일
  dangerLevel: Record<string, string>; // 위험도
  goodMatch: Record<string, string>; // 환상의 짝꿍
  badMatch: Record<string, string>; // 환장의 짝꿍
}

export const phase2DarkSideQuestions: Phase2DarkSideQuestion[] = [
  {
    id: 1,
    question: {
      ko: "누군가 내 신경을 계속 긁을 때, 당신의 1차 경고는?",
      en: "When someone keeps getting on your nerves, what is your first warning?",
      ja: "誰かがあなたの神経をずっと刺激するとき、あなたの一次警告は？",
      "zh-CN": "当有人一直刺激你的神经时，你的第一次警告是什么？",
      "zh-TW": "當有人一直刺激你的神經時，你的第一次警告是什麼？",
      vi: "Khi ai đó liên tục chọc tức bạn, cảnh báo đầu tiên của bạn là gì?",
      id: "Ketika seseorang terus mengganggu saraf Anda, peringatan pertama Anda adalah?"
    },
    options: [
      {
        text: {
          ko: "싸늘한 표정으로 쳐다보며 침묵한다",
          en: "Stare with a cold expression and remain silent",
          ja: "冷たい表情で見つめて沈黙する",
          "zh-CN": "用冷漠的表情盯着并保持沉默",
          "zh-TW": "用冷漠的表情盯著並保持沉默",
          vi: "Nhìn chằm chằm với vẻ mặt lạnh lùng và im lặng",
          id: "Menatap dengan ekspresi dingin dan tetap diam"
        },
        types: ["Type1", "Type3"]
      },
      {
        text: {
          ko: "\"적당히 해라.\" 웃음기 뺀 목소리로 말한다",
          en: "\"That's enough.\" I say in a voice without any laughter",
          ja: "「適当にしろ。」笑いのない声で言う",
          "zh-CN": "\"适可而止。\"用没有笑意的声音说",
          "zh-TW": "「適可而止。」用沒有笑意的聲音說",
          vi: "\"Vừa phải thôi.\" Tôi nói bằng giọng không có chút vui vẻ",
          id: "\"Cukup.\" Saya berkata dengan suara tanpa tawa"
        },
        types: ["Type2", "Type4"]
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "당신이 생각하는 최악의 배신은?",
      en: "What do you think is the worst betrayal?",
      ja: "あなたが考える最悪の裏切りは？",
      "zh-CN": "你认为最严重的背叛是什么？",
      "zh-TW": "你認為最嚴重的背叛是什麼？",
      vi: "Bạn nghĩ sự phản bội tồi tệ nhất là gì?",
      id: "Apa yang Anda pikir adalah pengkhianatan terburuk?"
    },
    options: [
      {
        text: {
          ko: "내 비밀을 여기저기 떠벌리고 다니는 것",
          en: "Spreading my secrets everywhere",
          ja: "私の秘密をあちこちで言いふらすこと",
          "zh-CN": "到处散布我的秘密",
          "zh-TW": "到處散布我的秘密",
          vi: "Lan truyền bí mật của tôi khắp nơi",
          id: "Menyebarkan rahasia saya ke mana-mana"
        },
        types: ["Type4", "Type5"]
      },
      {
        text: {
          ko: "결정적인 순간에 나를 이용하고 버리는 것",
          en: "Using me and then abandoning me at a critical moment",
          ja: "決定的な瞬間に私を利用して捨てること",
          "zh-CN": "在关键时刻利用我然后抛弃我",
          "zh-TW": "在關鍵時刻利用我然後拋棄我",
          vi: "Sử dụng tôi rồi bỏ rơi tôi vào thời điểm quyết định",
          id: "Menggunakan saya lalu meninggalkan saya di momen kritis"
        },
        types: ["Type3", "Type6"]
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "정말 화가 났을 때 당신의 모습은?",
      en: "What are you like when you're really angry?",
      ja: "本当に怒ったとき、あなたの様子は？",
      "zh-CN": "当你真的很生气时，你是什么样子？",
      "zh-TW": "當你真的很生氣時，你是什麼樣子？",
      vi: "Bạn như thế nào khi thực sự tức giận?",
      id: "Bagaimana Anda saat benar-benar marah?"
    },
    options: [
      {
        text: {
          ko: "머리가 차갑게 식으며 논리적으로 변한다",
          en: "My head turns cold and I become logical",
          ja: "頭が冷たくなり、論理的になる",
          "zh-CN": "头脑变冷，变得理性",
          "zh-TW": "頭腦變冷，變得理性",
          vi: "Đầu tôi trở nên lạnh lùng và tôi trở nên logic",
          id: "Kepala saya menjadi dingin dan saya menjadi logis"
        },
        types: ["Type1", "Type3", "Type5"]
      },
      {
        text: {
          ko: "눈앞이 하얘지고 감정이 주체가 안 된다",
          en: "My vision goes white and I can't control my emotions",
          ja: "目の前が真っ白になり、感情がコントロールできない",
          "zh-CN": "眼前一片空白，无法控制情绪",
          "zh-TW": "眼前一片空白，無法控制情緒",
          vi: "Tầm nhìn trắng xóa và tôi không thể kiểm soát cảm xúc",
          id: "Penglihatan saya menjadi putih dan saya tidak bisa mengendalikan emosi"
        },
        types: ["Type2", "Type6"]
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "복수를 한다면 어떤 방식이 좋을까?",
      en: "If you were to take revenge, what method would be good?",
      ja: "復讐するとしたら、どんな方法がいい？",
      "zh-CN": "如果要复仇，什么方式比较好？",
      "zh-TW": "如果要復仇，什麼方式比較好？",
      vi: "Nếu bạn muốn trả thù, cách nào sẽ tốt?",
      id: "Jika Anda akan membalas dendam, metode apa yang baik?"
    },
    options: [
      {
        text: {
          ko: "그 사람이 가진 모든 것을 잃게 만든다",
          en: "Make them lose everything they have",
          ja: "その人が持っているすべてを失わせる",
          "zh-CN": "让他们失去所拥有的一切",
          "zh-TW": "讓他們失去所擁有的一切",
          vi: "Khiến họ mất tất cả những gì họ có",
          id: "Membuat mereka kehilangan semua yang mereka miliki"
        },
        types: ["Type1", "Type5"]
      },
      {
        text: {
          ko: "내가 느꼈던 고통을 똑같이, 아니 그 이상으로 돌려준다",
          en: "Return the pain I felt, exactly the same or even more",
          ja: "私が感じた痛みを同じように、いやそれ以上に返す",
          "zh-CN": "把我感受到的痛苦原样或加倍还回去",
          "zh-TW": "把我感受到的痛苦原樣或加倍還回去",
          vi: "Trả lại nỗi đau tôi đã cảm nhận, y hệt hoặc thậm chí nhiều hơn",
          id: "Mengembalikan rasa sakit yang saya rasakan, sama persis atau bahkan lebih"
        },
        types: ["Type2", "Type3", "Type4"]
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "흑화한 당신을 본 친구들의 반응은?",
      en: "What is your friends' reaction when they see your dark side?",
      ja: "黒化したあなたを見た友達の反応は？",
      "zh-CN": "朋友们看到你黑化时的反应是什么？",
      "zh-TW": "朋友們看到你黑化時的反應是什麼？",
      vi: "Phản ứng của bạn bè khi thấy mặt tối của bạn là gì?",
      id: "Apa reaksi teman-teman saat melihat sisi gelap Anda?"
    },
    options: [
      {
        text: {
          ko: "\"너 이런 모습 처음 봐... 무서워\"",
          en: "\"I've never seen you like this before... It's scary\"",
          ja: "「あなたこんな姿初めて見た...怖い」",
          "zh-CN": "\"我第一次看到你这样...好可怕\"",
          "zh-TW": "「我第一次看到你這樣...好可怕」",
          vi: "\"Tôi chưa bao giờ thấy bạn như thế này... Đáng sợ\"",
          id: "\"Aku belum pernah melihatmu seperti ini... Menakutkan\""
        },
        types: ["Type1", "Type3", "Type5"]
      },
      {
        text: {
          ko: "\"너 진짜 독하다. 소름 돋아\"",
          en: "\"You're really vicious. It gives me chills\"",
          ja: "「あなた本当に毒がある。鳥肌が立つ」",
          "zh-CN": "\"你真的很毒辣。让人起鸡皮疙瘩\"",
          "zh-TW": "「你真的很毒辣。讓人起雞皮疙瘩」",
          vi: "\"Bạn thực sự độc ác. Làm tôi nổi da gà\"",
          id: "\"Kamu benar-benar jahat. Membuatku merinding\""
        },
        types: ["Type2", "Type4", "Type6"]
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "드라마 속 악역에게 공감한 적이 있나요?",
      en: "Have you ever empathized with villains in dramas?",
      ja: "ドラマの悪役に共感したことがありますか？",
      "zh-CN": "你是否曾经对电视剧中的反派产生过共情？",
      "zh-TW": "你是否曾經對電視劇中的反派產生過共情？",
      vi: "Bạn đã bao giờ đồng cảm với nhân vật phản diện trong phim chưa?",
      id: "Pernahkah Anda berempati dengan penjahat dalam drama?"
    },
    options: [
      {
        text: {
          ko: "있다. 그들도 사정이 있고, 착한 주인공보다 매력적이다",
          en: "Yes. They also have their reasons, and they're more attractive than the good protagonists",
          ja: "ある。彼らにも事情があり、良い主人公より魅力的だ",
          "zh-CN": "有。他们也有苦衷，而且比善良的主角更有魅力",
          "zh-TW": "有。他們也有苦衷，而且比善良的主角更有魅力",
          vi: "Có. Họ cũng có lý do của mình, và họ hấp dẫn hơn nhân vật chính tốt",
          id: "Ya. Mereka juga punya alasan, dan mereka lebih menarik daripada protagonis yang baik"
        },
        types: ["Type4", "Type6"]
      },
      {
        text: {
          ko: "없다. 그래도 나쁜 짓은 정당화될 수 없다",
          en: "No. Bad deeds cannot be justified",
          ja: "ない。それでも悪いことは正当化できない",
          "zh-CN": "没有。即便如此，坏事也不能被正当化",
          "zh-TW": "沒有。即便如此，壞事也不能被正當化",
          vi: "Không. Dù sao thì việc xấu cũng không thể được biện minh",
          id: "Tidak. Tetap saja perbuatan buruk tidak bisa dibenarkan"
        },
        types: ["Type1", "Type2", "Type3", "Type5"]
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "나를 화나게 한 사람이 사과를 한다면?",
      en: "What if the person who made me angry apologizes?",
      ja: "私を怒らせた人が謝罪したら？",
      "zh-CN": "如果让我生气的人道歉了会怎样？",
      "zh-TW": "如果讓我生氣的人道歉了會怎樣？",
      vi: "Nếu người làm tôi tức giận xin lỗi thì sao?",
      id: "Bagaimana jika orang yang membuat saya marah meminta maaf?"
    },
    options: [
      {
        text: {
          ko: "진심이 느껴지면 한 번은 용서해 준다",
          en: "If I feel their sincerity, I'll forgive them once",
          ja: "本心が感じられれば一度は許してあげる",
          "zh-CN": "如果感受到他们的真心，我会原谅一次",
          "zh-TW": "如果感受到他們的真心，我會原諒一次",
          vi: "Nếu tôi cảm nhận được sự chân thành, tôi sẽ tha thứ một lần",
          id: "Jika saya merasakan ketulusan mereka, saya akan memaafkan sekali"
        },
        types: ["Type2", "Type6"]
      },
      {
        text: {
          ko: "이미 늦었다. 용서는 없다",
          en: "It's already too late. There is no forgiveness",
          ja: "もう遅い。許しはない",
          "zh-CN": "已经太晚了。没有原谅",
          "zh-TW": "已經太晚了。沒有原諒",
          vi: "Đã quá muộn rồi. Không có sự tha thứ",
          id: "Sudah terlambat. Tidak ada pengampunan"
        },
        types: ["Type1", "Type3", "Type4", "Type5"]
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "당신이 흑화하게 되는 결정적인 계기는?",
      en: "What is the decisive trigger that makes you turn dark?",
      ja: "あなたが黒化する決定的なきっかけは？",
      "zh-CN": "让你黑化的决定性契机是什么？",
      "zh-TW": "讓你黑化的決定性契機是什麼？",
      vi: "Điều gì là nguyên nhân quyết định khiến bạn trở nên tối tăm?",
      id: "Apa pemicu yang menentukan yang membuat Anda berubah menjadi gelap?"
    },
    options: [
      {
        text: {
          ko: "나의 자존심이나 능력을 무시당했을 때",
          en: "When my pride or abilities are ignored",
          ja: "私の自尊心や能力が無視されたとき",
          "zh-CN": "当我的自尊心或能力被忽视时",
          "zh-TW": "當我的自尊心或能力被忽視時",
          vi: "Khi lòng tự trọng hoặc khả năng của tôi bị coi thường",
          id: "Ketika harga diri atau kemampuan saya diabaikan"
        },
        types: ["Type1", "Type5"]
      },
      {
        text: {
          ko: "내가 소중하게 생각하는 사람을 건드렸을 때",
          en: "When someone touches a person I care about",
          ja: "私が大切に思う人に触れたとき",
          "zh-CN": "当有人触碰我珍视的人时",
          "zh-TW": "當有人觸碰我珍視的人時",
          vi: "Khi ai đó chạm vào người tôi quý trọng",
          id: "Ketika seseorang menyentuh orang yang saya sayangi"
        },
        types: ["Type2", "Type3"]
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "싸울 때 당신의 말버릇은?",
      en: "What is your habit when fighting?",
      ja: "喧嘩するとき、あなたの口癖は？",
      "zh-CN": "吵架时你的口头禅是什么？",
      "zh-TW": "吵架時你的口頭禪是什麼？",
      vi: "Thói quen của bạn khi cãi nhau là gì?",
      id: "Apa kebiasaan Anda saat bertengkar?"
    },
    options: [
      {
        text: {
          ko: "상대방의 가장 아픈 약점을 골라서 찌른다",
          en: "Pick out the opponent's most painful weakness and stab it",
          ja: "相手の最も痛い弱点を選んで突く",
          "zh-CN": "挑选对方最痛的弱点来攻击",
          "zh-TW": "挑選對方最痛的弱點來攻擊",
          vi: "Chọn điểm yếu đau nhất của đối phương và tấn công",
          id: "Memilih kelemahan paling menyakitkan lawan dan menusuknya"
        },
        types: ["Type3", "Type4"]
      },
      {
        text: {
          ko: "\"그래서? 어쩌라고?\" 상대방의 말을 무시하고 차단한다",
          en: "\"So what? What are you going to do?\" I ignore and block the opponent's words",
          ja: "「だから？どうするの？」相手の言葉を無視して遮る",
          "zh-CN": "\"那又怎样？你能怎样？\"我无视并屏蔽对方的话",
          "zh-TW": "「那又怎樣？你能怎樣？」我無視並屏蔽對方的話",
          vi: "\"Vậy thì sao? Bạn sẽ làm gì?\" Tôi bỏ qua và chặn lời nói của đối phương",
          id: "\"Jadi? Apa yang akan kamu lakukan?\" Saya mengabaikan dan memblokir kata-kata lawan"
        },
        types: ["Type1", "Type5"]
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "만약 당신이 영화 속 빌런이라면?",
      en: "If you were a villain in a movie?",
      ja: "もしあなたが映画の悪役だったら？",
      "zh-CN": "如果你是电影中的反派？",
      "zh-TW": "如果你是電影中的反派？",
      vi: "Nếu bạn là nhân vật phản diện trong phim?",
      id: "Jika Anda adalah penjahat dalam film?"
    },
    options: [
      {
        text: {
          ko: "세상을 내 뜻대로 통제하고 지배하는 독재자",
          en: "A dictator who controls and rules the world according to my will",
          ja: "世界を自分の意思通りにコントロールし支配する独裁者",
          "zh-CN": "按照我的意志控制和统治世界的独裁者",
          "zh-TW": "按照我的意志控制和統治世界的獨裁者",
          vi: "Một kẻ độc tài kiểm soát và cai trị thế giới theo ý muốn của mình",
          id: "Seorang diktator yang mengontrol dan memerintah dunia sesuai kehendak saya"
        },
        types: ["Type1", "Type5"]
      },
      {
        text: {
          ko: "질서따윈 필요 없다. 모든 것을 파괴하는 혼돈의 제왕",
          en: "Order is unnecessary. The king of chaos who destroys everything",
          ja: "秩序なんて必要ない。すべてを破壊する混沌の帝王",
          "zh-CN": "秩序根本不需要。摧毁一切的混沌之王",
          "zh-TW": "秩序根本不需要。摧毀一切的混沌之王",
          vi: "Trật tự không cần thiết. Vua của hỗn loạn phá hủy mọi thứ",
          id: "Tatanan tidak diperlukan. Raja kekacauan yang menghancurkan segalanya"
        },
        types: ["Type2", "Type6"]
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "평소에 스트레스를 푸는 방식은?",
      en: "How do you usually relieve stress?",
      ja: "普段ストレスを解消する方法は？",
      "zh-CN": "你平时如何缓解压力？",
      "zh-TW": "你平時如何緩解壓力？",
      vi: "Bạn thường giải tỏa căng thẳng bằng cách nào?",
      id: "Bagaimana Anda biasanya menghilangkan stres?"
    },
    options: [
      {
        text: {
          ko: "혼자만의 공간에서 조용히 삭힌다",
          en: "Quietly suppress it in my own space",
          ja: "一人だけの空間で静かに抑える",
          "zh-CN": "在自己的空间里安静地压抑",
          "zh-TW": "在自己的空間裡安靜地壓抑",
          vi: "Âm thầm kìm nén trong không gian riêng của mình",
          id: "Diam-diam menekannya di ruang saya sendiri"
        },
        types: ["Type1", "Type3"]
      },
      {
        text: {
          ko: "친구들에게 하소연하거나 무언가를 부수고 싶다",
          en: "Complain to friends or want to break something",
          ja: "友達に愚痴を言うか、何かを壊したくなる",
          "zh-CN": "向朋友抱怨或想砸东西",
          "zh-TW": "向朋友抱怨或想砸東西",
          vi: "Than phiền với bạn bè hoặc muốn đập vỡ thứ gì đó",
          id: "Mengeluh kepada teman atau ingin memecahkan sesuatu"
        },
        types: ["Type2", "Type6"]
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "이 테스트를 하는 이유는?",
      en: "Why are you taking this test?",
      ja: "このテストをする理由は？",
      "zh-CN": "你做这个测试的原因是什么？",
      "zh-TW": "你做這個測試的原因是什麼？",
      vi: "Lý do bạn làm bài kiểm tra này là gì?",
      id: "Mengapa Anda mengikuti tes ini?"
    },
    options: [
      {
        text: {
          ko: "내가 얼마나 착한 사람인지 확인하려고",
          en: "To check how good a person I am",
          ja: "自分がどれだけ良い人か確認するため",
          "zh-CN": "想确认自己有多善良",
          "zh-TW": "想確認自己有多善良",
          vi: "Để kiểm tra xem tôi là người tốt đến mức nào",
          id: "Untuk memeriksa seberapa baik saya sebagai orang"
        },
        types: ["Type1", "Type2", "Type5"]
      },
      {
        text: {
          ko: "내 안에 숨겨진 위험한 본성이 궁금해서",
          en: "Because I'm curious about the dangerous nature hidden inside me",
          ja: "自分の中に隠された危険な本性が気になるから",
          "zh-CN": "因为好奇我内心隐藏的危险本性",
          "zh-TW": "因為好奇我內心隱藏的危險本性",
          vi: "Vì tôi tò mò về bản chất nguy hiểm ẩn giấu trong tôi",
          id: "Karena saya penasaran dengan sifat berbahaya yang tersembunyi di dalam diri saya"
        },
        types: ["Type3", "Type4", "Type6"]
      }
    ]
  }
];

export const phase2DarkSideResults: Phase2DarkSideResult[] = [
  {
    type: "Type1",
    emoji: "🤖",
    title: {
      ko: "감정 없는 처단자, 냉혈한 AI",
      en: "Emotionless Executioner, Cold-Blooded AI",
      ja: "感情のない処刑者、冷血なAI",
      "zh-CN": "无情的处决者，冷血AI",
      "zh-TW": "無情的處決者，冷血AI",
      vi: "Kẻ hành quyết vô cảm, AI máu lạnh",
      id: "Algo Eksekutor Tanpa Emosi, AI Berdarah Dingin"
    },
    shortDescription: {
      ko: "\"입력된 용서가 없습니다. 삭제합니다.\"",
      en: "\"No forgiveness input detected. Deleting.\"",
      ja: "「入力された許しがありません。削除します。」",
      "zh-CN": "\"未检测到宽恕输入。正在删除。\"",
      "zh-TW": "「未檢測到寬恕輸入。正在刪除。」",
      vi: "\"Không phát hiện sự tha thứ. Đang xóa.\"",
      id: "\"Tidak ada pengampunan yang dimasukkan. Menghapus.\""
    },
    description: {
      ko: "당신이 흑화하면 세상에서 가장 차가운 사람이 됩니다. 화를 내거나 소리를 지르지 않습니다. 그저 상대를 투명 인간 취급하거나, 영혼까지 털어버리는 팩트 폭격으로 상대를 말라죽게 만듭니다. 당신의 무관심이 가장 큰 형벌입니다.",
      en: "When you turn dark, you become the coldest person in the world. You don't get angry or shout. You just treat the other person as invisible, or make them wither away with fact bombs that strip away even their soul. Your indifference is the greatest punishment.",
      ja: "あなたが黒化すると、世界で最も冷たい人になります。怒ったり叫んだりしません。ただ相手を透明人間として扱うか、魂まで剥ぎ取る事実爆撃で相手を枯れさせます。あなたの無関心が最大の刑罰です。",
      "zh-CN": "当你黑化时，你会成为世界上最冷漠的人。你不会生气或大喊。你只是把对方当作透明人，或者用事实轰炸让他们连灵魂都被剥光而枯萎。你的冷漠是最大的惩罚。",
      "zh-TW": "當你黑化時，你會成為世界上最冷漠的人。你不會生氣或大喊。你只是把對方當作透明人，或者用事實轟炸讓他們連靈魂都被剝光而枯萎。你的冷漠是最大的懲罰。",
      vi: "Khi bạn trở nên tối tăm, bạn trở thành người lạnh lùng nhất thế giới. Bạn không tức giận hay la hét. Bạn chỉ đối xử với người khác như họ vô hình, hoặc làm họ héo úa bằng những cú ném sự thật tước đi cả linh hồn của họ. Sự thờ ơ của bạn là hình phạt lớn nhất.",
      id: "Ketika Anda berubah menjadi gelap, Anda menjadi orang yang paling dingin di dunia. Anda tidak marah atau berteriak. Anda hanya memperlakukan orang lain sebagai tidak terlihat, atau membuat mereka layu dengan bom fakta yang merampas bahkan jiwa mereka. Ketidakpedulian Anda adalah hukuman terbesar."
    },
    darkStyle: {
      ko: "무시, 손절, 냉소",
      en: "Ignoring, cutting off, cynicism",
      ja: "無視、切断、冷笑",
      "zh-CN": "无视、切断、冷嘲",
      "zh-TW": "無視、切斷、冷嘲",
      vi: "Bỏ qua, cắt đứt, châm biếm",
      id: "Mengabaikan, memutus, sinisme"
    },
    dangerLevel: {
      ko: "⭐⭐⭐ (조용히 무서움)",
      en: "⭐⭐⭐ (Quietly scary)",
      ja: "⭐⭐⭐ (静かに怖い)",
      "zh-CN": "⭐⭐⭐ (安静地可怕)",
      "zh-TW": "⭐⭐⭐ (安靜地可怕)",
      vi: "⭐⭐⭐ (Đáng sợ một cách im lặng)",
      id: "⭐⭐⭐ (Menakutkan dengan tenang)"
    },
    goodMatch: {
      ko: "Type 4 (웃는 얼굴의 암살자)",
      en: "Type 4 (Smiling Assassin)",
      ja: "Type 4 (笑顔の暗殺者)",
      "zh-CN": "Type 4 (微笑的刺客)",
      "zh-TW": "Type 4 (微笑的刺客)",
      vi: "Type 4 (Sát thủ với nụ cười)",
      id: "Type 4 (Pembunuh Tersenyum)"
    },
    badMatch: {
      ko: "Type 2 (분노조절장애 헐크)",
      en: "Type 2 (Anger Management Disorder Hulk)",
      ja: "Type 2 (怒り制御障害ハルク)",
      "zh-CN": "Type 2 (愤怒管理障碍浩克)",
      "zh-TW": "Type 2 (憤怒管理障礙浩克)",
      vi: "Type 2 (Hulk rối loạn kiểm soát cơn giận)",
      id: "Type 2 (Hulk Gangguan Pengendalian Amarah)"
    }
  },
  {
    type: "Type2",
    emoji: "💥",
    title: {
      ko: "통제 불능 파괴신, 분노조절장애 헐크",
      en: "Uncontrollable Destroyer, Anger Management Disorder Hulk",
      ja: "制御不能の破壊神、怒り制御障害ハルク",
      "zh-CN": "失控的破坏神，愤怒管理障碍浩克",
      "zh-TW": "失控的破壞神，憤怒管理障礙浩克",
      vi: "Thần hủy diệt không kiểm soát, Hulk rối loạn kiểm soát cơn giận",
      id: "Penghancur Tak Terkendali, Hulk Gangguan Pengendalian Amarah"
    },
    shortDescription: {
      ko: "\"다 부숴버릴 거야!!! 건드리지 마!!\"",
      en: "\"I'm going to destroy everything!!! Don't touch me!!\"",
      ja: "「全部壊してやる!!! 触るな!!」",
      "zh-CN": "\"我要摧毁一切！！！别碰我！！\"",
      "zh-TW": "「我要摧毀一切！！！別碰我！！」",
      vi: "\"Tôi sẽ phá hủy tất cả!!! Đừng chạm vào tôi!!\"",
      id: "\"Aku akan menghancurkan segalanya!!! Jangan sentuh aku!!\""
    },
    description: {
      ko: "평소엔 활발하고 좋지만, 한번 뚜껑이 열리면 아무도 말릴 수 없습니다. 앞뒤 재지 않고 감정을 폭발시키며, 눈에 보이는 것이 없습니다. 당신의 분노는 불과 같아서 주변을 다 태워버리지만, 뒤끝은 없는 편입니다. (주변이 초토화될 뿐...)",
      en: "Usually you're active and good, but once the lid opens, no one can stop you. You explode with emotions without thinking ahead, and you can't see anything. Your anger is like fire, burning everything around you, but you don't hold grudges. (The surroundings just become devastated...)",
      ja: "普段は活発で良いですが、一度蓋が開くと誰にも止められません。前後を考えずに感情を爆発させ、目に見えるものがありません。あなたの怒りは火のようで、周りをすべて燃やし尽くしますが、後味はない方です。（周りが焦土化されるだけ...）",
      "zh-CN": "平时你很活跃很好，但一旦盖子打开，没人能阻止你。你不顾前后地爆发情绪，眼前一片空白。你的愤怒像火一样，烧毁周围的一切，但你不会记仇。（只是周围变成焦土...）",
      "zh-TW": "平時你很活躍很好，但一旦蓋子打開，沒人能阻止你。你不顧前後地爆發情緒，眼前一片空白。你的憤怒像火一樣，燒毀周圍的一切，但你不會記仇。（只是周圍變成焦土...）",
      vi: "Bình thường bạn hoạt bát và tốt, nhưng một khi nắp mở ra, không ai có thể ngăn cản bạn. Bạn bùng nổ cảm xúc mà không suy nghĩ trước sau, và bạn không thấy gì cả. Cơn giận của bạn như lửa, thiêu rụi mọi thứ xung quanh, nhưng bạn không giữ thù hận. (Chỉ là xung quanh bị tàn phá...)",
      id: "Biasanya Anda aktif dan baik, tetapi begitu tutupnya terbuka, tidak ada yang bisa menghentikan Anda. Anda meledakkan emosi tanpa memikirkan masa depan, dan Anda tidak bisa melihat apa pun. Kemarahan Anda seperti api, membakar segalanya di sekitar Anda, tetapi Anda tidak menyimpan dendam. (Sekitar hanya menjadi hancur...)"
    },
    darkStyle: {
      ko: "고성, 물건 던짐, 폭주",
      en: "Shouting, throwing things, rampage",
      ja: "大声、物投げ、暴走",
      "zh-CN": "大喊、扔东西、暴走",
      "zh-TW": "大喊、扔東西、暴走",
      vi: "La hét, ném đồ vật, cuồng loạn",
      id: "Berteriak, melempar barang, mengamuk"
    },
    dangerLevel: {
      ko: "⭐⭐⭐⭐⭐ (재난 경보)",
      en: "⭐⭐⭐⭐⭐ (Disaster alert)",
      ja: "⭐⭐⭐⭐⭐ (災害警報)",
      "zh-CN": "⭐⭐⭐⭐⭐ (灾难警报)",
      "zh-TW": "⭐⭐⭐⭐⭐ (災難警報)",
      vi: "⭐⭐⭐⭐⭐ (Cảnh báo thảm họa)",
      id: "⭐⭐⭐⭐⭐ (Peringatan bencana)"
    },
    goodMatch: {
      ko: "Type 5 (뒤에서 조종하는 흑막)",
      en: "Type 5 (Dark Mastermind Behind the Scenes)",
      ja: "Type 5 (裏で操る黒幕)",
      "zh-CN": "Type 5 (幕后操纵的黑手)",
      "zh-TW": "Type 5 (幕後操縱的黑手)",
      vi: "Type 5 (Bộ não đen thao túng phía sau)",
      id: "Type 5 (Dalang Gelap di Belakang Layar)"
    },
    badMatch: {
      ko: "Type 1 (냉혈한 AI)",
      en: "Type 1 (Cold-Blooded AI)",
      ja: "Type 1 (冷血なAI)",
      "zh-CN": "Type 1 (冷血AI)",
      "zh-TW": "Type 1 (冷血AI)",
      vi: "Type 1 (AI máu lạnh)",
      id: "Type 1 (AI Berdarah Dingin)"
    }
  },
  {
    type: "Type3",
    emoji: "🐍",
    title: {
      ko: "치밀한 설계자, 복수의 화신",
      en: "Meticulous Designer, Incarnation of Revenge",
      ja: "緻密な設計者、復讐の化身",
      "zh-CN": "精密的策划者，复仇的化身",
      "zh-TW": "精密的策劃者，復仇的化身",
      vi: "Nhà thiết kế tỉ mỉ, hiện thân của sự trả thù",
      id: "Perancang Teliti, Perwujudan Balas Dendam"
    },
    shortDescription: {
      ko: "\"눈에는 눈, 이에는 이. 받은 만큼 돌려줄게.\"",
      en: "\"An eye for an eye, a tooth for a tooth. I'll return what I received.\"",
      ja: "「目には目、歯には歯。受けた分だけ返してやる。」",
      "zh-CN": "\"以眼还眼，以牙还牙。我会把收到的还回去。\"",
      "zh-TW": "「以眼還眼，以牙還牙。我會把收到的還回去。」",
      vi: "\"Mắt đền mắt, răng đền răng. Tôi sẽ trả lại những gì đã nhận.\"",
      id: "\"Mata untuk mata, gigi untuk gigi. Aku akan mengembalikan apa yang diterima.\""
    },
    description: {
      ko: "당신은 자신에게 피해를 준 사람을 절대 잊지 않습니다. 당장 화내지 않고 때를 기다립니다. 가장 완벽한 타이밍에, 가장 잔인한 방법으로 상대를 무너뜨릴 계획을 세웁니다. 당신의 데스노트에 이름이 적히면 끝장입니다.",
      en: "You never forget those who have harmed you. You don't get angry immediately, but wait for the right time. You plan to bring down your opponent at the most perfect timing, in the most cruel way. Once a name is written in your death note, it's over.",
      ja: "あなたは自分に害を与えた人を絶対に忘れません。すぐに怒らず、時を待ちます。最も完璧なタイミングに、最も残酷な方法で相手を崩す計画を立てます。あなたのデスノートに名前が書かれれば終わりです。",
      "zh-CN": "你永远不会忘记伤害过你的人。你不会立即生气，而是等待时机。你计划在最完美的时机，用最残忍的方式击垮对手。一旦名字被写进你的死亡笔记，就结束了。",
      "zh-TW": "你永遠不會忘記傷害過你的人。你不會立即生氣，而是等待時機。你計劃在最完美的時機，用最殘忍的方式擊垮對手。一旦名字被寫進你的死亡筆記，就結束了。",
      vi: "Bạn không bao giờ quên những người đã làm hại bạn. Bạn không tức giận ngay lập tức, mà chờ đợi thời cơ. Bạn lên kế hoạch đánh gục đối thủ vào thời điểm hoàn hảo nhất, bằng cách tàn nhẫn nhất. Một khi tên được viết vào sổ tử thần của bạn, thì đã hết.",
      id: "Anda tidak pernah melupakan mereka yang telah menyakiti Anda. Anda tidak marah segera, tetapi menunggu waktu yang tepat. Anda merencanakan untuk menjatuhkan lawan pada waktu yang paling sempurna, dengan cara yang paling kejam. Begitu nama tertulis di buku kematian Anda, semuanya berakhir."
    },
    darkStyle: {
      ko: "계획적 복수, 함정, 증거 수집",
      en: "Planned revenge, traps, evidence collection",
      ja: "計画的な復讐、罠、証拠収集",
      "zh-CN": "有计划的复仇、陷阱、证据收集",
      "zh-TW": "有計劃的復仇、陷阱、證據收集",
      vi: "Trả thù có kế hoạch, bẫy, thu thập bằng chứng",
      id: "Balas dendam terencana, jebakan, pengumpulan bukti"
    },
    dangerLevel: {
      ko: "⭐⭐⭐⭐ (지능형 범죄)",
      en: "⭐⭐⭐⭐ (Intelligent crime)",
      ja: "⭐⭐⭐⭐ (知能型犯罪)",
      "zh-CN": "⭐⭐⭐⭐ (智能犯罪)",
      "zh-TW": "⭐⭐⭐⭐ (智能犯罪)",
      vi: "⭐⭐⭐⭐ (Tội phạm thông minh)",
      id: "⭐⭐⭐⭐ (Kejahatan cerdas)"
    },
    goodMatch: {
      ko: "Type 6 (혼돈의 조커)",
      en: "Type 6 (Chaos Joker)",
      ja: "Type 6 (混沌のジョーカー)",
      "zh-CN": "Type 6 (混沌小丑)",
      "zh-TW": "Type 6 (混沌小丑)",
      vi: "Type 6 (Joker hỗn loạn)",
      id: "Type 6 (Joker Kekacauan)"
    },
    badMatch: {
      ko: "Type 2 (무계획적임)",
      en: "Type 2 (Unplanned)",
      ja: "Type 2 (無計画)",
      "zh-CN": "Type 2 (无计划)",
      "zh-TW": "Type 2 (無計劃)",
      vi: "Type 2 (Không có kế hoạch)",
      id: "Type 2 (Tidak Terencana)"
    }
  },
  {
    type: "Type4",
    emoji: "🎭",
    title: {
      ko: "웃는 얼굴의 암살자, 소시오패스 재질",
      en: "Smiling Assassin, Sociopath Material",
      ja: "笑顔の暗殺者、ソシオパス素材",
      "zh-CN": "微笑的刺客，反社会人格材料",
      "zh-TW": "微笑的刺客，反社會人格材料",
      vi: "Sát thủ với nụ cười, chất liệu xã hội học",
      id: "Pembunuh Tersenyum, Bahan Sosiopat"
    },
    shortDescription: {
      ko: "\"어머, 왜 그래? 장난인데~ (비웃음)\"",
      en: "\"Oh my, why are you like that? It's just a joke~ (sneer)\"",
      ja: "「あら、どうして？冗談なのに〜（冷笑）」",
      "zh-CN": "\"哦，你怎么了？只是开玩笑而已~（冷笑）\"",
      "zh-TW": "「哦，你怎麼了？只是開玩笑而已~（冷笑）」",
      vi: "\"Ồ, sao vậy? Chỉ là đùa thôi mà~ (cười nhạo)\"",
      id: "\"Oh, kenapa begitu? Ini hanya lelucon~ (mengejek)\""
    },
    description: {
      ko: "당신이 흑화하면 도덕적 기준이 사라집니다. 겉으로는 웃으며 친절하게 대하지만, 뒤에서는 교묘하게 상대를 조종하고 가스라이팅 합니다. 남의 고통에 무감각해지며, 자신의 이익을 위해서라면 무엇이든 이용합니다.",
      en: "When you turn dark, moral standards disappear. On the surface, you smile and treat others kindly, but behind the scenes, you skillfully manipulate and gaslight them. You become insensitive to others' pain, and you'll use anything for your own benefit.",
      ja: "あなたが黒化すると、道徳的基準が消えます。表向きは笑って親切に対応しますが、裏では巧妙に相手を操り、ガスライティングします。他人の苦痛に無感覚になり、自分の利益のためなら何でも利用します。",
      "zh-CN": "当你黑化时，道德标准会消失。表面上你微笑着友好对待，但背后你巧妙地操纵和进行煤气灯操控。你对别人的痛苦变得麻木，为了自己的利益会利用一切。",
      "zh-TW": "當你黑化時，道德標準會消失。表面上你微笑著友好對待，但背後你巧妙地操縱和進行煤氣燈操控。你對別人的痛苦變得麻木，為了自己的利益會利用一切。",
      vi: "Khi bạn trở nên tối tăm, tiêu chuẩn đạo đức biến mất. Bề ngoài bạn cười và đối xử tử tế, nhưng đằng sau bạn khéo léo thao túng và thao túng tâm lý họ. Bạn trở nên vô cảm với nỗi đau của người khác, và bạn sẽ sử dụng bất cứ thứ gì vì lợi ích của mình.",
      id: "Ketika Anda berubah menjadi gelap, standar moral menghilang. Di permukaan, Anda tersenyum dan memperlakukan orang lain dengan baik, tetapi di belakang layar, Anda dengan terampil memanipulasi dan melakukan gaslighting. Anda menjadi tidak peka terhadap rasa sakit orang lain, dan Anda akan menggunakan apa pun untuk keuntungan Anda sendiri."
    },
    darkStyle: {
      ko: "가스라이팅, 정치질, 연기",
      en: "Gaslighting, manipulation, acting",
      ja: "ガスライティング、政治、演技",
      "zh-CN": "煤气灯操控、操纵、表演",
      "zh-TW": "煤氣燈操控、操縱、表演",
      vi: "Thao túng tâm lý, thao túng, diễn xuất",
      id: "Gaslighting, manipulasi, akting"
    },
    dangerLevel: {
      ko: "⭐⭐⭐⭐⭐ (최악의 빌런)",
      en: "⭐⭐⭐⭐⭐ (Worst villain)",
      ja: "⭐⭐⭐⭐⭐ (最悪の悪役)",
      "zh-CN": "⭐⭐⭐⭐⭐ (最坏的反派)",
      "zh-TW": "⭐⭐⭐⭐⭐ (最壞的反派)",
      vi: "⭐⭐⭐⭐⭐ (Kẻ phản diện tồi tệ nhất)",
      id: "⭐⭐⭐⭐⭐ (Penjahat terburuk)"
    },
    goodMatch: {
      ko: "Type 1 (냉혈한 AI)",
      en: "Type 1 (Cold-Blooded AI)",
      ja: "Type 1 (冷血なAI)",
      "zh-CN": "Type 1 (冷血AI)",
      "zh-TW": "Type 1 (冷血AI)",
      vi: "Type 1 (AI máu lạnh)",
      id: "Type 1 (AI Berdarah Dingin)"
    },
    badMatch: {
      ko: "Type 6 (통제가 안 됨)",
      en: "Type 6 (Uncontrollable)",
      ja: "Type 6 (制御不能)",
      "zh-CN": "Type 6 (无法控制)",
      "zh-TW": "Type 6 (無法控制)",
      vi: "Type 6 (Không thể kiểm soát)",
      id: "Type 6 (Tidak Terkendali)"
    }
  },
  {
    type: "Type5",
    emoji: "🍷",
    title: {
      ko: "뒤에서 조종하는 흑막, 어둠의 지배자",
      en: "Dark Mastermind Behind the Scenes, Lord of Darkness",
      ja: "裏で操る黒幕、闇の支配者",
      "zh-CN": "幕后操纵的黑手，黑暗的统治者",
      "zh-TW": "幕後操縱的黑手，黑暗的統治者",
      vi: "Bộ não đen thao túng phía sau, Chúa tể bóng tối",
      id: "Dalang Gelap di Belakang Layar, Penguasa Kegelapan"
    },
    shortDescription: {
      ko: "\"내 손에 피 묻히긴 싫어.\"",
      en: "\"I don't want blood on my hands.\"",
      ja: "「私の手に血を染み込ませたくない。」",
      "zh-CN": "\"我不想手上沾血。\"",
      "zh-TW": "「我不想手上沾血。」",
      vi: "\"Tôi không muốn máu dính vào tay mình.\"",
      id: "\"Saya tidak ingin darah di tangan saya.\""
    },
    description: {
      ko: "당신은 직접 나서서 싸우지 않습니다. 권력이나 인맥, 돈을 이용해 상대를 사회적으로 매장시키거나 고립시킵니다. 우아하고 고상해 보이지만, 그 속은 시커먼 욕망으로 가득 차 있습니다. 모든 상황을 체스판처럼 내려다봅니다.",
      en: "You don't fight directly. You use power, connections, or money to socially bury or isolate your opponent. You look elegant and noble, but inside you're filled with dark desires. You look down on every situation like a chessboard.",
      ja: "あなたは直接出て行って戦いません。権力や人脈、お金を利用して相手を社会的に葬り去ったり孤立させたりします。優雅で高貴に見えますが、その中身は真っ黒な欲望で満たされています。すべての状況をチェス盤のように見下ろします。",
      "zh-CN": "你不会直接出面战斗。你利用权力、人脉或金钱在社交上埋葬或孤立对手。你看起来优雅高贵，但内心充满了黑暗的欲望。你像看棋盘一样俯视所有情况。",
      "zh-TW": "你不會直接出面戰鬥。你利用權力、人脈或金錢在社交上埋葬或孤立對手。你看起來優雅高貴，但內心充滿了黑暗的欲望。你像看棋盤一樣俯視所有情況。",
      vi: "Bạn không trực tiếp chiến đấu. Bạn sử dụng quyền lực, mối quan hệ, hoặc tiền bạc để chôn vùi hoặc cô lập đối thủ về mặt xã hội. Bạn trông thanh lịch và cao quý, nhưng bên trong bạn đầy những ham muốn đen tối. Bạn nhìn xuống mọi tình huống như một bàn cờ.",
      id: "Anda tidak bertarung langsung. Anda menggunakan kekuasaan, koneksi, atau uang untuk mengubur atau mengisolasi lawan secara sosial. Anda terlihat elegan dan mulia, tetapi di dalamnya penuh dengan keinginan gelap. Anda memandang setiap situasi seperti papan catur."
    },
    darkStyle: {
      ko: "여론 조작, 이간질, 권력 남용",
      en: "Public opinion manipulation, divide and conquer, power abuse",
      ja: "世論操作、離間、権力乱用",
      "zh-CN": "舆论操纵、离间、权力滥用",
      "zh-TW": "輿論操縱、離間、權力濫用",
      vi: "Thao túng dư luận, chia rẽ, lạm dụng quyền lực",
      id: "Manipulasi opini publik, memecah belah, penyalahgunaan kekuasaan"
    },
    dangerLevel: {
      ko: "⭐⭐⭐⭐ (권력형 빌런)",
      en: "⭐⭐⭐⭐ (Power-type villain)",
      ja: "⭐⭐⭐⭐ (権力型悪役)",
      "zh-CN": "⭐⭐⭐⭐ (权力型反派)",
      "zh-TW": "⭐⭐⭐⭐ (權力型反派)",
      vi: "⭐⭐⭐⭐ (Kẻ phản diện quyền lực)",
      id: "⭐⭐⭐⭐ (Penjahat tipe kekuasaan)"
    },
    goodMatch: {
      ko: "Type 2 (대신 싸워줌)",
      en: "Type 2 (Fights for me)",
      ja: "Type 2 (代わりに戦ってくれる)",
      "zh-CN": "Type 2 (替我战斗)",
      "zh-TW": "Type 2 (替我戰鬥)",
      vi: "Type 2 (Chiến đấu thay tôi)",
      id: "Type 2 (Berjuang untuk saya)"
    },
    badMatch: {
      ko: "Type 3 (내 머리 꼭대기에 있음)",
      en: "Type 3 (Above my head)",
      ja: "Type 3 (私の頭の上にいる)",
      "zh-CN": "Type 3 (在我头上)",
      "zh-TW": "Type 3 (在我頭上)",
      vi: "Type 3 (Ở trên đầu tôi)",
      id: "Type 3 (Di atas kepala saya)"
    }
  },
  {
    type: "Type6",
    emoji: "🃏",
    title: {
      ko: "통제 불가능, 혼돈의 조커",
      en: "Uncontrollable, Chaos Joker",
      ja: "制御不能、混沌のジョーカー",
      "zh-CN": "无法控制，混沌小丑",
      "zh-TW": "無法控制，混沌小丑",
      vi: "Không thể kiểm soát, Joker hỗn loạn",
      id: "Tidak Terkendali, Joker Kekacauan"
    },
    shortDescription: {
      ko: "\"Why so serious? 그냥 다 같이 망하자!\"",
      en: "\"Why so serious? Let's all just go down together!\"",
      ja: "「Why so serious? みんなで一緒に滅びよう！」",
      "zh-CN": "\"为什么这么严肃？让我们一起毁灭吧！\"",
      "zh-TW": "「為什麼這麼嚴肅？讓我們一起毀滅吧！」",
      vi: "\"Tại sao nghiêm túc thế? Hãy cùng nhau sụp đổ đi!\"",
      id: "\"Kenapa begitu serius? Mari kita semua hancur bersama!\""
    },
    description: {
      ko: "당신이 흑화하면 이성이 마비되고 광기가 깨어납니다. 이득도, 복수도 중요하지 않습니다. 그냥 세상이 불타는 게 재미있을 뿐입니다. 예측불허의 행동으로 주변 사람들을 공포에 떨게 만듭니다. 당신은 질서가 싫습니다.",
      en: "When you turn dark, your reason becomes paralyzed and madness awakens. Profit and revenge don't matter. It's just fun to watch the world burn. Your unpredictable actions make people around you tremble with fear. You hate order.",
      ja: "あなたが黒化すると、理性が麻痺し狂気が目覚めます。利益も復讐も重要ではありません。ただ世界が燃えるのが面白いだけです。予測不可能な行動で周りの人々を恐怖に震わせます。あなたは秩序が嫌いです。",
      "zh-CN": "当你黑化时，理性会麻痹，疯狂会觉醒。利益和复仇都不重要。只是看着世界燃烧很有趣。你不可预测的行为让周围的人因恐惧而颤抖。你讨厌秩序。",
      "zh-TW": "當你黑化時，理性會麻痺，瘋狂會覺醒。利益和復仇都不重要。只是看著世界燃燒很有趣。你不可預測的行為讓周圍的人因恐懼而顫抖。你討厭秩序。",
      vi: "Khi bạn trở nên tối tăm, lý trí của bạn bị tê liệt và sự điên rồ thức tỉnh. Lợi ích và trả thù không quan trọng. Chỉ là thú vị khi xem thế giới cháy. Hành động không thể đoán trước của bạn khiến mọi người xung quanh run rẩy vì sợ hãi. Bạn ghét trật tự.",
      id: "Ketika Anda berubah menjadi gelap, akal Anda menjadi lumpuh dan kegilaan bangun. Keuntungan dan balas dendam tidak penting. Hanya menyenangkan melihat dunia terbakar. Tindakan tak terduga Anda membuat orang di sekitar gemetar ketakutan. Anda benci tatanan."
    },
    darkStyle: {
      ko: "트롤링, 자폭, 예측 불가",
      en: "Trolling, self-destruction, unpredictable",
      ja: "トローリング、自爆、予測不可能",
      "zh-CN": "挑衅、自爆、不可预测",
      "zh-TW": "挑釁、自爆、不可預測",
      vi: "Khiêu khích, tự hủy, không thể đoán trước",
      id: "Trolling, penghancuran diri, tidak dapat diprediksi"
    },
    dangerLevel: {
      ko: "⭐⭐⭐⭐⭐⭐ (측정 불가)",
      en: "⭐⭐⭐⭐⭐⭐ (Immeasurable)",
      ja: "⭐⭐⭐⭐⭐⭐ (測定不可能)",
      "zh-CN": "⭐⭐⭐⭐⭐⭐ (无法测量)",
      "zh-TW": "⭐⭐⭐⭐⭐⭐ (無法測量)",
      vi: "⭐⭐⭐⭐⭐⭐ (Không thể đo lường)",
      id: "⭐⭐⭐⭐⭐⭐ (Tidak Terukur)"
    },
    goodMatch: {
      ko: "Type 3 (재밌는 판을 깔아줌)",
      en: "Type 3 (Sets up an interesting game)",
      ja: "Type 3 (面白い盤を用意してくれる)",
      "zh-CN": "Type 3 (布置有趣的棋局)",
      "zh-TW": "Type 3 (佈置有趣的棋局)",
      vi: "Type 3 (Dọn sẵn một ván cờ thú vị)",
      id: "Type 3 (Menyiapkan permainan yang menarik)"
    },
    badMatch: {
      ko: "Type 4 (나를 조종하려 함)",
      en: "Type 4 (Tries to control me)",
      ja: "Type 4 (私を操ろうとする)",
      "zh-CN": "Type 4 (试图控制我)",
      "zh-TW": "Type 4 (試圖控制我)",
      vi: "Type 4 (Cố gắng kiểm soát tôi)",
      id: "Type 4 (Mencoba mengendalikan saya)"
    }
  }
];

export function calculatePhase2DarkSideResult(
  answers: Array<{ questionId: number; selectedTypes: string[] }>
): string {
  const typeScores: Record<string, number> = {
    Type1: 0, Type2: 0, Type3: 0, Type4: 0, Type5: 0, Type6: 0
  };

  answers.forEach(answer => {
    answer.selectedTypes.forEach(type => {
      if (typeScores.hasOwnProperty(type)) {
        typeScores[type] += 1;
      }
    });
  });

  let maxScore = -1;
  let resultType = "Type4"; // Default value (highest priority)
  const priority = ["Type4", "Type6", "Type3", "Type2", "Type1", "Type5"];
  
  priority.forEach(type => {
    if (typeScores[type] > maxScore) {
      maxScore = typeScores[type];
      resultType = type;
    }
  });
  return resultType;
}
