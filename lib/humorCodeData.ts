// HumorCode Test Data
export interface HumorCodeQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    scores: Record<string, number>;
  }[];
}

export interface HumorCodeResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  description: Record<string, string>;
  pros: Record<string, string>[];
  cons: Record<string, string>[];
  advice: Record<string, string>;
  compatibility: {
    best: string[];
    good: string[];
    careful: string[];
    difficult: string[];
  };
}

// 유머 코드 테스트 질문들
export const humorCodeQuestions: HumorCodeQuestion[] = [
  {
    id: 1,
    question: {
      ko: "친구가 「오늘 기분이 묘해」라고 하면?",
      en: "When your friend says 「I feel weird today」, you would?",
      ja: "友達が「今日は気分が変だな」と言ったら？",
      "zh-CN": "朋友说「今天心情有点奇怪」时，你会？",
      "zh-TW": "朋友說「今天心情有點奇怪」時，你會？",
      vi: "Khi bạn bè nói 「Hôm nay tôi cảm thấy kỳ lạ」, bạn sẽ?",
      id: "Ketika teman berkata 「Hari ini aku merasa aneh」, kamu akan?"
    },
    options: [
      {
        text: {
          ko: "「묘하네? 고양이처럼?」 (말장난)",
          en: "「Weird? Like a cat?」 (wordplay)",
          ja: "「変だな？猫みたいに？」(言葉遊び)",
          "zh-CN": "「奇怪？像猫一样？」(文字游戏)",
          "zh-TW": "「奇怪？像貓一樣？」(文字遊戲)",
          vi: "「Kỳ lạ? Như mèo à?」(chơi chữ)",
          id: "「Aneh? Seperti kucing?」(permainan kata)"
        },
        scores: { "1": 3, "3": 1 }
      },
      {
        text: {
          ko: "과장된 표정으로 「어머머머!」하며 리액션",
          en: "React with exaggerated expression 「Oh my!」",
          ja: "大げさな表情で「おやおやおや！」とリアクション",
          "zh-CN": "用夸张的表情反应「哎呀呀！」",
          "zh-TW": "用誇張的表情反應「哎呀呀！」",
          vi: "Phản ứng với biểu cảm phóng đại 「Ôi trời ơi!」",
          id: "Bereaksi dengan ekspresi berlebihan 「Oh my!」"
        },
        scores: { "2": 3 }
      },
      {
        text: {
          ko: "「인생이 원래 묘하지, 뭐」라고 쿨하게",
          en: "Coolly say 「Life is originally weird, whatever」",
          ja: "「人生は元々変なものだよ、まあ」とクールに",
          "zh-CN": "酷酷地说「人生本来就很奇怪，无所谓」",
          "zh-TW": "酷酷地說「人生本來就很奇怪，無所謂」",
          vi: "Nói một cách lạnh lùng 「Cuộc sống vốn dĩ kỳ lạ, sao cũng được」",
          id: "Dengan dingin berkata 「Hidup memang aneh, terserah」"
        },
        scores: { "3": 8, "4": 2 }
      },
      {
        text: {
          ko: "「왜? 무슨 일 있어?」진심으로 걱정",
          en: "「Why? What happened?」genuinely worried",
          ja: "「なぜ？何かあったの？」心配して",
          "zh-CN": "「为什么？发生了什么事？」真心担心",
          "zh-TW": "「為什麼？發生了什麼事？」真心擔心",
          vi: "「Tại sao? Có chuyện gì xảy ra?」thực sự lo lắng",
          id: "「Mengapa? Ada apa?」benar-benar khawatir"
        },
        scores: { "5": 3, "6": 1 }
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "가장 웃긴다고 생각하는 상황은?",
      en: "What situation do you think is the funniest?",
      ja: "一番面白いと思う状況は？",
      "zh-CN": "你认为最有趣的情况是什么？",
      "zh-TW": "你認為最有趣的情況是什麼？",
      vi: "Tình huống nào bạn nghĩ là vui nhộn nhất?",
      id: "Situasi apa yang menurutmu paling lucu?"
    },
    options: [
      {
        text: {
          ko: "똑같은 말을 다른 의미로 해석하는 것",
          en: "Interpreting the same words with different meanings",
          ja: "同じ言葉を違う意味で解釈すること",
          "zh-CN": "用不同含义解释相同的话",
          "zh-TW": "用不同含義解釋相同的話",
          vi: "Giải thích cùng một từ với ý nghĩa khác nhau",
          id: "Menginterpretasikan kata yang sama dengan makna berbeda"
        },
        scores: { "1": 3, "3": 1 }
      },
      {
        text: {
          ko: "누가 넘어지거나 당황하는 장면",
          en: "Someone falling or being embarrassed",
          ja: "誰かが転んだり慌てたりする場面",
          "zh-CN": "有人摔倒或尴尬的场景",
          "zh-TW": "有人摔倒或尷尬的場景",
          vi: "Cảnh ai đó ngã hoặc bối rối",
          id: "Seseorang jatuh atau bingung"
        },
        scores: { "2": 3 }
      },
      {
        text: {
          ko: "예상 못한 반전이나 아이러니",
          en: "Unexpected twists or irony",
          ja: "予想外の展開やアイロニー",
          "zh-CN": "意想不到的反转或讽刺",
          "zh-TW": "意想不到的反轉或諷刺",
          vi: "Những bước ngoặt bất ngờ hoặc sự mỉa mai",
          id: "Twist yang tidak terduga atau ironi"
        },
        scores: { "4": 3 }
      },
      {
        text: {
          ko: "귀여운 동물이나 아기 영상",
          en: "Cute animals or baby videos",
          ja: "可愛い動物や赤ちゃんの動画",
          "zh-CN": "可爱的动物或婴儿视频",
          "zh-TW": "可愛的動物或嬰兒視頻",
          vi: "Video động vật dễ thương hoặc em bé",
          id: "Video hewan lucu atau bayi"
        },
        scores: { "5": 3, "6": 1 }
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "친구들과 있을 때 당신의 역할은?",
      en: "What is your role when you're with friends?",
      ja: "友達といるときのあなたの役割は？",
      "zh-CN": "和朋友在一起时你的角色是什么？",
      "zh-TW": "和朋友在一起時你的角色是什麼？",
      vi: "Vai trò của bạn khi ở cùng bạn bè là gì?",
      id: "Apa peranmu saat bersama teman-teman?"
    },
    options: [
      {
        text: {
          ko: "재치있는 한마디로 웃음 제공",
          en: "Provide laughter with witty one-liners",
          ja: "機知に富んだ一言で笑いを提供",
          "zh-CN": "用机智的一句话提供笑声",
          "zh-TW": "用機智的一句話提供笑聲",
          vi: "Cung cấp tiếng cười bằng những câu nói dí dỏm",
          id: "Memberikan tawa dengan kalimat jenaka"
        },
        scores: { "1": 3, "3": 2 }
      },
      {
        text: {
          ko: "온몸으로 연기하며 웃김",
          en: "Act with whole body to make people laugh",
          ja: "全身で演技して笑わせる",
          "zh-CN": "用全身表演来逗笑大家",
          "zh-TW": "用全身表演來逗笑大家",
          vi: "Diễn bằng cả cơ thể để làm mọi người cười",
          id: "Berakting dengan seluruh tubuh untuk membuat orang tertawa"
        },
        scores: { "2": 3 }
      },
      {
        text: {
          ko: "독설이나 디스로 분위기 살림",
          en: "Liven up the atmosphere with sharp remarks or disses",
          ja: "毒舌やディスで雰囲気を盛り上げる",
          "zh-CN": "用毒舌或吐槽活跃气氛",
          "zh-TW": "用毒舌或吐槽活躍氣氛",
          vi: "Làm sống động không khí bằng những lời nhận xét sắc sảo",
          id: "Menghidupkan suasana dengan komentar tajam atau sindiran"
        },
        scores: { "4": 3 }
      },
      {
        text: {
          ko: "밈이나 최신 유행어 공유",
          en: "Share memes or latest trendy phrases",
          ja: "ミームや最新の流行語を共有",
          "zh-CN": "分享表情包或最新流行语",
          "zh-TW": "分享表情包或最新流行語",
          vi: "Chia sẻ meme hoặc những câu nói thời thượng mới nhất",
          id: "Berbagi meme atau frasa trendi terbaru"
        },
        scores: { "6": 8 }
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "이 중 가장 재미있는 것은?",
      en: "Which of these is the most fun?",
      ja: "この中で一番面白いのは？",
      "zh-CN": "这些中最有趣的是什么？",
      "zh-TW": "這些中最有趣的是什麼？",
      vi: "Cái nào trong số này là thú vị nhất?",
      id: "Yang mana dari ini yang paling menyenangkan?"
    },
    options: [
      {
        text: {
          ko: "「식빵은 식빵인데 못 먹는 식빵은?」같은 수수께끼",
          en: "Riddles like 「Bread is bread, but what bread can't you eat?」",
          ja: "「パンはパンだが食べられないパンは？」のようななぞなぞ",
          "zh-CN": "像「面包是面包，但什么面包不能吃？」这样的谜语",
          "zh-TW": "像「麵包是麵包，但什麼麵包不能吃？」這樣的謎語",
          vi: "Những câu đố như 「Bánh mì là bánh mì, nhưng bánh mì nào không ăn được?」",
          id: "Teka-teki seperti 「Roti adalah roti, tapi roti apa yang tidak bisa dimakan?」"
        },
        scores: { "1": 3 }
      },
      {
        text: {
          ko: "런닝맨 같은 예능 프로그램",
          en: "Variety shows like Running Man",
          ja: "ランニングマンのようなバラエティ番組",
          "zh-CN": "像Running Man这样的综艺节目",
          "zh-TW": "像Running Man這樣的綜藝節目",
          vi: "Các chương trình giải trí như Running Man",
          id: "Acara varietas seperti Running Man"
        },
        scores: { "2": 3, "6": 1 }
      },
      {
        text: {
          ko: "스탠드업 코미디나 독설 개그",
          en: "Stand-up comedy or sharp-tongued jokes",
          ja: "スタンドアップコメディや毒舌ギャグ",
          "zh-CN": "脱口秀或毒舌笑话",
          "zh-TW": "脫口秀或毒舌笑話",
          vi: "Hài độc thoại hoặc những câu đùa sắc sảo",
          id: "Komedi stand-up atau lelucon tajam"
        },
        scores: { "4": 3 }
      },
      {
        text: {
          ko: "귀여운 캐릭터나 이모티콘",
          en: "Cute characters or emojis",
          ja: "可愛いキャラクターや絵文字",
          "zh-CN": "可爱的角色或表情符号",
          "zh-TW": "可愛的角色或表情符號",
          vi: "Nhân vật dễ thương hoặc emoji",
          id: "Karakter lucu atau emoji"
        },
        scores: { "5": 3 }
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "SNS에서 웃긴 게시물을 보면?",
      en: "When you see funny posts on SNS?",
      ja: "SNSで面白い投稿を見ると？",
      "zh-CN": "在社交媒体上看到有趣的帖子时？",
      "zh-TW": "在社交媒體上看到有趣的帖子時？",
      vi: "Khi thấy bài đăng vui nhộn trên SNS?",
      id: "Ketika melihat posting lucu di SNS?"
    },
    options: [
      {
        text: {
          ko: "댓글에 말장난이나 위트있는 답글",
          en: "Reply with wordplay or witty comments",
          ja: "コメントに言葉遊びや機知に富んだ返信",
          "zh-CN": "用文字游戏或机智的回复评论",
          "zh-TW": "用文字遊戲或機智的回覆評論",
          vi: "Trả lời bằng chơi chữ hoặc bình luận dí dỏm",
          id: "Membalas dengan permainan kata atau komentar jenaka"
        },
        scores: { "1": 3, "3": 2 }
      },
      {
        text: {
          ko: "리액션 영상 찍어서 올림",
          en: "Upload a reaction video",
          ja: "リアクション動画を撮って投稿",
          "zh-CN": "拍摄反应视频并上传",
          "zh-TW": "拍攝反應視頻並上傳",
          vi: "Quay video phản ứng và đăng lên",
          id: "Mengambil video reaksi dan mengunggahnya"
        },
        scores: { "2": 3 }
      },
      {
        text: {
          ko: "「ㅋㅋㅋ 이건 인정」공감 댓글",
          en: "「lol I agree」empathy comment",
          ja: "「wwこれは認める」共感コメント",
          "zh-CN": "「哈哈哈这个我认」共鸣评论",
          "zh-TW": "「哈哈哈這個我認」共鳴評論",
          vi: "「haha cái này tôi đồng ý」bình luận đồng cảm",
          id: "「haha ini setuju」komentar empati"
        },
        scores: { "3": 8, "4": 2 }
      },
      {
        text: {
          ko: "좋아요 누르고 친구들한테 공유",
          en: "Like it and share with friends",
          ja: "いいねを押して友達に共有",
          "zh-CN": "点赞并分享给朋友",
          "zh-TW": "點讚並分享給朋友",
          vi: "Thích và chia sẻ với bạn bè",
          id: "Like dan bagikan ke teman-teman"
        },
        scores: { "6": 3 }
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "친구가 실수했을 때 당신은?",
      en: "When your friend makes a mistake, you?",
      ja: "友達が失敗したときあなたは？",
      "zh-CN": "当朋友犯错时，你会？",
      "zh-TW": "當朋友犯錯時，你會？",
      vi: "Khi bạn bè mắc lỗi, bạn sẽ?",
      id: "Ketika teman membuat kesalahan, kamu akan?"
    },
    options: [
      {
        text: {
          ko: "「너 지금 ○○ 했네!」언어유희로 놀림",
          en: "「You just did ○○!」tease with wordplay",
          ja: "「君今○○したね！」言葉遊びでからかう",
          "zh-CN": "「你现在○○了！」用文字游戏开玩笑",
          "zh-TW": "「你現在○○了！」用文字遊戲開玩笑",
          vi: "「Bạn vừa ○○ rồi!」trêu chọc bằng chơi chữ",
          id: "「Kamu baru saja ○○!」menggoda dengan permainan kata"
        },
        scores: { "1": 3 }
      },
      {
        text: {
          ko: "그 상황을 흉내내며 재연",
          en: "Imitate and reenact the situation",
          ja: "その状況を真似して再演",
          "zh-CN": "模仿并重现那个情况",
          "zh-TW": "模仿並重現那個情況",
          vi: "Bắt chước và tái hiện tình huống đó",
          id: "Meniru dan memerankan kembali situasi itu"
        },
        scores: { "2": 3 }
      },
      {
        text: {
          ko: "「인생 종료ㅋㅋ」약간 독하게 놀림",
          en: "「Life ended lol」tease a bit harshly",
          ja: "「人生終了ww」少し毒づいてからかう",
          "zh-CN": "「人生结束了哈哈」稍微毒舌地开玩笑",
          "zh-TW": "「人生結束了哈哈」稍微毒舌地開玩笑",
          vi: "「Cuộc sống kết thúc rồi haha」trêu chọc hơi độc",
          id: "「Hidup selesai lol」menggoda agak keras"
        },
        scores: { "4": 3 }
      },
      {
        text: {
          ko: "「괜찮아?」웃으면서도 걱정",
          en: "「Are you okay?」laughing but worried",
          ja: "「大丈夫？」笑いながらも心配",
          "zh-CN": "「没事吧？」笑着但担心",
          "zh-TW": "「沒事吧？」笑著但擔心",
          vi: "「Có ổn không?」cười nhưng lo lắng",
          id: "「Gak apa-apa?」tertawa tapi khawatir"
        },
        scores: { "5": 3, "6": 1 }
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "가장 자주 보는 콘텐츠는?",
      en: "What content do you watch most often?",
      ja: "一番よく見るコンテンツは？",
      "zh-CN": "你最常看的内容是什么？",
      "zh-TW": "你最常看的內容是什麼？",
      vi: "Nội dung nào bạn xem thường xuyên nhất?",
      id: "Konten apa yang paling sering kamu tonton?"
    },
    options: [
      {
        text: {
          ko: "말장난이나 퀴즈 프로그램",
          en: "Wordplay or quiz shows",
          ja: "言葉遊びやクイズ番組",
          "zh-CN": "文字游戏或问答节目",
          "zh-TW": "文字遊戲或問答節目",
          vi: "Chương trình chơi chữ hoặc đố vui",
          id: "Acara permainan kata atau kuis"
        },
        scores: { "1": 3, "3": 1 }
      },
      {
        text: {
          ko: "몸개그나 리액션 유튜브",
          en: "Physical comedy or reaction YouTube",
          ja: "ボディギャグやリアクションYouTube",
          "zh-CN": "肢体喜剧或反应YouTube",
          "zh-TW": "肢體喜劇或反應YouTube",
          vi: "Hài kịch thể chất hoặc YouTube phản ứng",
          id: "Komedi fisik atau YouTube reaksi"
        },
        scores: { "2": 3 }
      },
      {
        text: {
          ko: "풍자나 비꼬는 유머",
          en: "Satirical or sarcastic humor",
          ja: "風刺や皮肉なユーモア",
          "zh-CN": "讽刺或挖苦的幽默",
          "zh-TW": "諷刺或挖苦的幽默",
          vi: "Hài hước châm biếm hoặc mỉa mai",
          id: "Humor satir atau sarkastik"
        },
        scores: { "4": 3 }
      },
      {
        text: {
          ko: "밈이나 짧은 릴스/숏츠",
          en: "Memes or short reels/shorts",
          ja: "ミームや短いリール/ショーツ",
          "zh-CN": "表情包或短视频",
          "zh-TW": "表情包或短視頻",
          vi: "Meme hoặc video ngắn/reels",
          id: "Meme atau video pendek/reels"
        },
        scores: { "6": 8 }
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "친구에게 장난칠 때?",
      en: "When playing pranks on friends?",
      ja: "友達にいたずらをするとき？",
      "zh-CN": "对朋友恶作剧时？",
      "zh-TW": "對朋友惡作劇時？",
      vi: "Khi trêu chọc bạn bè?",
      id: "Saat iseng dengan teman?"
    },
    options: [
      {
        text: {
          ko: "말로 헷갈리게 만들기",
          en: "Confuse them with words",
          ja: "言葉で混乱させる",
          "zh-CN": "用语言让他们困惑",
          "zh-TW": "用語言讓他們困惑",
          vi: "Làm họ bối rối bằng lời nói",
          id: "Membingungkan mereka dengan kata-kata"
        },
        scores: { "1": 3 }
      },
      {
        text: {
          ko: "놀래키거나 몸으로 장난",
          en: "Surprise them or physical pranks",
          ja: "驚かせたり体を使ったいたずら",
          "zh-CN": "吓唬他们或用身体恶作剧",
          "zh-TW": "嚇唬他們或用身體惡作劇",
          vi: "Làm họ giật mình hoặc trêu chọc bằng cơ thể",
          id: "Menakuti mereka atau iseng fisik"
        },
        scores: { "2": 3, "6": 1 }
      },
      {
        text: {
          ko: "살짝 디스하거나 놀리기",
          en: "Lightly diss or tease them",
          ja: "軽くディスしたりからかったり",
          "zh-CN": "轻微地吐槽或开玩笑",
          "zh-TW": "輕微地吐槽或開玩笑",
          vi: "Nhẹ nhàng châm chọc hoặc trêu ghẹo",
          id: "Sedikit mengejek atau menggoda"
        },
        scores: { "4": 3 }
      },
      {
        text: {
          ko: "귀엽게 애교 부리며 장난",
          en: "Cutely act cute while playing pranks",
          ja: "可愛く甘えていたずら",
          "zh-CN": "可爱地撒娇恶作剧",
          "zh-TW": "可愛地撒嬌惡作劇",
          vi: "Dễ thương và làm nũng khi trêu chọc",
          id: "Dengan lucu dan manja saat iseng"
        },
        scores: { "5": 3 }
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "코미디 영화 중 좋아하는 스타일은?",
      en: "What style of comedy movies do you prefer?",
      ja: "コメディ映画で好きなスタイルは？",
      "zh-CN": "你喜欢什么风格的喜剧电影？",
      "zh-TW": "你喜歡什麼風格的喜劇電影？",
      vi: "Bạn thích phong cách phim hài nào?",
      id: "Gaya film komedi apa yang kamu suka?"
    },
    options: [
      {
        text: {
          ko: "영리한 대사와 위트가 있는 영화",
          en: "Movies with clever dialogue and wit",
          ja: "機知に富んだ台詞とウィットがある映画",
          "zh-CN": "有聪明对话和机智的电影",
          "zh-TW": "有聰明對話和機智的電影",
          vi: "Phim có lời thoại thông minh và dí dỏm",
          id: "Film dengan dialog cerdas dan jenaka"
        },
        scores: { "1": 3, "3": 2 }
      },
      {
        text: {
          ko: "슬랩스틱이나 액션 코미디",
          en: "Slapstick or action comedy",
          ja: "スラップスティックやアクションコメディ",
          "zh-CN": "闹剧或动作喜剧",
          "zh-TW": "鬧劇或動作喜劇",
          vi: "Hài kịch tình huống hoặc hành động",
          id: "Komedi slapstick atau aksi"
        },
        scores: { "2": 3 }
      },
      {
        text: {
          ko: "블랙 코미디나 독특한 영화",
          en: "Black comedy or unique films",
          ja: "ブラックコメディや独特な映画",
          "zh-CN": "黑色喜剧或独特电影",
          "zh-TW": "黑色喜劇或獨特電影",
          vi: "Hài kịch đen hoặc phim độc đáo",
          id: "Komedi hitam atau film unik"
        },
        scores: { "4": 3 }
      },
      {
        text: {
          ko: "가족이 함께 볼 수 있는 따뜻한 코미디",
          en: "Warm comedies the whole family can watch",
          ja: "家族みんなで見られる温かいコメディ",
          "zh-CN": "全家可以一起看的温馨喜剧",
          "zh-TW": "全家可以一起看的溫馨喜劇",
          vi: "Phim hài ấm áp cả gia đình có thể xem",
          id: "Komedi hangat yang bisa ditonton seluruh keluarga"
        },
        scores: { "5": 3, "6": 1 }
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "단톡방에서 당신이 보내는 메시지는?",
      en: "What kind of messages do you send in group chats?",
      ja: "グループチャットで送るメッセージは？",
      "zh-CN": "你在群聊中发送什么样的消息？",
      "zh-TW": "你在群聊中發送什麼樣的消息？",
      vi: "Bạn gửi loại tin nhắn nào trong nhóm chat?",
      id: "Pesan seperti apa yang kamu kirim di grup chat?"
    },
    options: [
      {
        text: {
          ko: "재치있는 말장난이나 유머",
          en: "Witty wordplay or humor",
          ja: "機知に富んだ言葉遊びやユーモア",
          "zh-CN": "机智的文字游戏或幽默",
          "zh-TW": "機智的文字遊戲或幽默",
          vi: "Chơi chữ dí dỏm hoặc hài hước",
          id: "Permainan kata jenaka atau humor"
        },
        scores: { "1": 3, "3": 2 }
      },
      {
        text: {
          ko: "웃긴 움짤이나 표정 사진",
          en: "Funny GIFs or expression photos",
          ja: "面白いGIFや表情写真",
          "zh-CN": "有趣的表情包或表情照片",
          "zh-TW": "有趣的表情包或表情照片",
          vi: "Ảnh động vui nhộn hoặc ảnh biểu cảm",
          id: "GIF lucu atau foto ekspresi"
        },
        scores: { "2": 3 }
      },
      {
        text: {
          ko: "「역시 인생은...」같은 냉소적 유머",
          en: "Cynical humor like 「Life is...」",
          ja: "「やっぱり人生は...」のような皮肉なユーモア",
          "zh-CN": "像「果然人生是...」这样的讽刺幽默",
          "zh-TW": "像「果然人生是...」這樣的諷刺幽默",
          vi: "Hài hước mỉa mai như 「Cuộc sống thật là...」",
          id: "Humor sinis seperti 「Hidup memang...」"
        },
        scores: { "3": 8, "4": 2 }
      },
      {
        text: {
          ko: "귀여운 이모티콘이나 최신 밈",
          en: "Cute emojis or latest memes",
          ja: "可愛い絵文字や最新のミーム",
          "zh-CN": "可爱的表情符号或最新表情包",
          "zh-TW": "可愛的表情符號或最新表情包",
          vi: "Emoji dễ thương hoặc meme mới nhất",
          id: "Emoji lucu atau meme terbaru"
        },
        scores: { "5": 3, "6": 2 }
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "누군가의 개그가 별로일 때?",
      en: "When someone's joke is not that good?",
      ja: "誰かのギャグがイマイチなとき？",
      "zh-CN": "当某人的笑话不怎么样时？",
      "zh-TW": "當某人的笑話不怎麼樣時？",
      vi: "Khi câu đùa của ai đó không hay?",
      id: "Ketika lelucon seseorang tidak bagus?"
    },
    options: [
      {
        text: {
          ko: "「그건 좀...」돌려서 말함",
          en: "「That's a bit...」say it indirectly",
          ja: "「それはちょっと...」遠回しに言う",
          "zh-CN": "「那个有点...」委婉地说",
          "zh-TW": "「那個有點...」委婉地說",
          vi: "「Cái đó hơi...」nói gián tiếp",
          id: "「Itu agak...」bilang secara tidak langsung"
        },
        scores: { "3": 8 }
      },
      {
        text: {
          ko: "티 나게 무반응",
          en: "Obviously show no reaction",
          ja: "分かりやすく無反応",
          "zh-CN": "明显表现出无反应",
          "zh-TW": "明顯表現出無反應",
          vi: "Tỏ ra không phản ứng một cách rõ ràng",
          id: "Jelas-jelas tidak bereaksi"
        },
        scores: { "2": 3, "4": 2 }
      },
      {
        text: {
          ko: "「이게 웃겨?」직설적으로 말함",
          en: "「Is this funny?」say it directly",
          ja: "「これが面白い？」直接的にはっきり言う",
          "zh-CN": "「这好笑吗？」直接说出来",
          "zh-TW": "「這好笑嗎？」直接說出來",
          vi: "「Cái này có vui không?」nói thẳng",
          id: "「Ini lucu?」bilang langsung"
        },
        scores: { "4": 3 }
      },
      {
        text: {
          ko: "그래도 웃어줌",
          en: "Still laugh anyway",
          ja: "それでも笑ってあげる",
          "zh-CN": "还是笑了",
          "zh-TW": "還是笑了",
          vi: "Vẫn cười dù sao",
          id: "Tetap tertawa"
        },
        scores: { "5": 3, "6": 1 }
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "친구들이 당신을 뭐라고 부를까?",
      en: "What do your friends call you?",
      ja: "友達はあなたを何て呼ぶ？",
      "zh-CN": "你的朋友怎么称呼你？",
      "zh-TW": "你的朋友怎麼稱呼你？",
      vi: "Bạn bè gọi bạn như thế nào?",
      id: "Teman-teman memanggil kamu apa?"
    },
    options: [
      {
        text: {
          ko: "말 잘하는 재치쟁이",
          en: "Witty talker",
          ja: "話の上手な機知に富んだ人",
          "zh-CN": "善于言辞的机智鬼",
          "zh-TW": "善於言辭的機智鬼",
          vi: "Người nói chuyện dí dỏm",
          id: "Orang yang pintar bicara"
        },
        scores: { "1": 3, "3": 2 }
      },
      {
        text: {
          ko: "4차원 엉뚱이",
          en: "Weird fourth-dimensional person",
          ja: "4次元の変人",
          "zh-CN": "四次元怪人",
          "zh-TW": "四次元怪人",
          vi: "Người kỳ lạ bốn chiều",
          id: "Orang aneh empat dimensi"
        },
        scores: { "2": 3 }
      },
      {
        text: {
          ko: "독설 캐릭터",
          en: "Sharp-tongued character",
          ja: "毒舌キャラ",
          "zh-CN": "毒舌角色",
          "zh-TW": "毒舌角色",
          vi: "Nhân vật lưỡi sắc",
          id: "Karakter tajam lidah"
        },
        scores: { "4": 3 }
      },
      {
        text: {
          ko: "분위기 메이커",
          en: "Mood maker",
          ja: "ムードメーカー",
          "zh-CN": "气氛制造者",
          "zh-TW": "氣氛製造者",
          vi: "Người tạo không khí",
          id: "Pembuat suasana"
        },
        scores: { "6": 8 }
      }
    ]
  }
];

// 유머 코드 테스트 결과들
export const humorCodeResults: HumorCodeResult[] = [
  {
    type: "1",
    emoji: "🎯",
    title: {
      ko: "말장난 마스터",
      en: "Wordplay Master",
      ja: "言葉遊びマスター",
      "zh-CN": "文字游戏大师",
      "zh-TW": "文字遊戲大師",
      vi: "Bậc thầy chơi chữ",
      id: "Master permainan kata"
    },
    description: {
      ko: "언어의 마술사! 재치있는 한마디의 달인",
      en: "Magician of language! Master of witty one-liners",
      ja: "言語の魔術師！機知に富んだ一言の達人",
      "zh-CN": "语言魔术师！机智一句话的大师",
      "zh-TW": "語言魔術師！機智一句話的大師",
      vi: "Phù thủy ngôn ngữ! Bậc thầy của những câu nói dí dỏm",
      id: "Penyihir bahasa! Master dari kalimat jenaka"
    },
    pros: [
      {
        ko: "재치",
        en: "Wit",
        ja: "機知",
        "zh-CN": "机智",
        "zh-TW": "機智",
        vi: "Sự dí dỏm",
        id: "Kecerdasan"
      },
      {
        ko: "언어감각",
        en: "Language sense",
        ja: "言語感覚",
        "zh-CN": "语言感觉",
        "zh-TW": "語言感覺",
        vi: "Cảm giác ngôn ngữ",
        id: "Rasa bahasa"
      },
      {
        ko: "순발력",
        en: "Quick wit",
        ja: "機転",
        "zh-CN": "机智",
        "zh-TW": "機智",
        vi: "Phản ứng nhanh",
        id: "Kecerdikan cepat"
      },
      {
        ko: "지적 유머",
        en: "Intellectual humor",
        ja: "知的ユーモア",
        "zh-CN": "智力幽默",
        "zh-TW": "智力幽默",
        vi: "Hài hước trí tuệ",
        id: "Humor intelektual"
      }
    ],
    cons: [
      {
        ko: "아재개그로 오해",
        en: "Misunderstood as dad jokes",
        ja: "おやじギャグと誤解される",
        "zh-CN": "被误解为冷笑话",
        "zh-TW": "被誤解為冷笑話",
        vi: "Bị hiểu nhầm là trò đùa của bố",
        id: "Disalahpahami sebagai lelucon bapak-bapak"
      },
      {
        ko: "설명하면 재미없음",
        en: "Not funny when explained",
        ja: "説明すると面白くない",
        "zh-CN": "解释后就不好笑了",
        "zh-TW": "解釋後就不好笑了",
        vi: "Giải thích thì không vui",
        id: "Tidak lucu jika dijelaskan"
      }
    ],
    advice: {
      ko: "말장난과 언어유희를 즐기는 위트의 대가입니다. 똑같은 단어를 다른 의미로 사용하거나 발음이 비슷한 말로 재치있게 웃김을 만듭니다. 수수께끼나 퀴즈를 좋아하고 순발력이 뛰어납니다. 지적인 유머를 구사하지만 때로는 아재개그처럼 느껴질 수 있습니다.",
      en: "You are a master of wit who enjoys wordplay and linguistic games. You cleverly create humor by using the same words with different meanings or words with similar pronunciations. You love riddles and quizzes and have excellent quick wit. You use intellectual humor but can sometimes feel like dad jokes.",
      ja: "言葉遊びと言語ゲームを楽しむ機知の達人です。同じ単語を異なる意味で使用したり、発音が似ている言葉で巧妙にユーモアを作り出します。なぞなぞやクイズが好きで、機転が利きます。知的なユーモアを使いますが、時々おやじギャグのように感じられることがあります。",
      "zh-CN": "你是享受文字游戏和语言游戏的机智大师。你巧妙地通过使用相同单词的不同含义或发音相似的单词来创造幽默。你喜欢谜语和测验，反应敏捷。你使用智力幽默，但有时可能感觉像冷笑话。",
      "zh-TW": "你是享受文字遊戲和語言遊戲的機智大師。你巧妙地通過使用相同單詞的不同含義或發音相似的單詞來創造幽默。你喜歡謎語和測驗，反應敏捷。你使用智力幽默，但有時可能感覺像冷笑話。",
      vi: "Bạn là bậc thầy dí dỏm thích chơi chữ và trò chơi ngôn ngữ. Bạn tạo ra sự hài hước một cách thông minh bằng cách sử dụng cùng một từ với ý nghĩa khác nhau hoặc những từ có phát âm tương tự. Bạn thích câu đố và câu hỏi trắc nghiệm, có phản ứng nhanh nhẹn. Bạn sử dụng sự hài hước trí tuệ nhưng đôi khi có thể cảm thấy như những trò đùa của bố.",
      id: "Anda adalah master kecerdasan yang menikmati permainan kata dan permainan bahasa. Anda dengan cerdik menciptakan humor dengan menggunakan kata yang sama dengan makna berbeda atau kata dengan pengucapan yang mirip. Anda suka teka-teki dan kuis, memiliki kecerdikan cepat. Anda menggunakan humor intelektual tapi kadang bisa terasa seperti lelucon bapak-bapak."
    },
    compatibility: {
      best: ["1"],
      good: ["3"],
      careful: ["5"],
      difficult: []
    }
  },
  {
    type: "2",
    emoji: "🤸",
    title: {
      ko: "몸개그 엔터테이너",
      en: "Physical Comedy Entertainer",
      ja: "ボディギャグエンターテイナー",
      "zh-CN": "肢体喜剧演员",
      "zh-TW": "肢體喜劇演員",
      vi: "Diễn viên hài kịch thể chất",
      id: "Entertainer komedi fisik"
    },
    description: {
      ko: "온몸이 웃음! 액션으로 승부하는 개그맨",
      en: "Whole body is laughter! Comedian who wins with action",
      ja: "全身が笑い！アクションで勝負するギャグマン",
      "zh-CN": "全身都是笑声！用动作取胜的喜剧演员",
      "zh-TW": "全身都是笑聲！用動作取勝的喜劇演員",
      vi: "Toàn thân là tiếng cười! Diễn viên hài thắng bằng hành động",
      id: "Seluruh tubuh adalah tawa! Komedian yang menang dengan aksi"
    },
    pros: [
      {
        ko: "액션",
        en: "Action",
        ja: "アクション",
        "zh-CN": "动作",
        "zh-TW": "動作",
        vi: "Hành động",
        id: "Aksi"
      },
      {
        ko: "에너지",
        en: "Energy",
        ja: "エネルギー",
        "zh-CN": "能量",
        "zh-TW": "能量",
        vi: "Năng lượng",
        id: "Energi"
      },
      {
        ko: "표현력",
        en: "Expressiveness",
        ja: "表現力",
        "zh-CN": "表现力",
        "zh-TW": "表現力",
        vi: "Khả năng biểu cảm",
        id: "Ekspresif"
      },
      {
        ko: "외향성",
        en: "Extroversion",
        ja: "外向性",
        "zh-CN": "外向性",
        "zh-TW": "外向性",
        vi: "Hướng ngoại",
        id: "Ekstrover"
      }
    ],
    cons: [
      {
        ko: "시끄러움",
        en: "Noisy",
        ja: "うるさい",
        "zh-CN": "吵闹",
        "zh-TW": "吵鬧",
        vi: "Ồn ào",
        id: "Bising"
      },
      {
        ko: "민망함",
        en: "Embarrassing",
        ja: "恥ずかしい",
        "zh-CN": "尴尬",
        "zh-TW": "尷尬",
        vi: "Xấu hổ",
        id: "Memalukan"
      },
      {
        ko: "장소 가리지 않음",
        en: "Doesn't care about place",
        ja: "場所を選ばない",
        "zh-CN": "不挑地方",
        "zh-TW": "不挑地方",
        vi: "Không quan tâm nơi chốn",
        id: "Tidak peduli tempat"
      }
    ],
    advice: {
      ko: "과장된 표정과 몸짓으로 사람들을 웃깁니다. 연기하고 흉내내는 걸 좋아하며 슬랩스틱 코미디를 즐깁니다. 에너지가 넘치고 수치심이 없어서 어디서든 웃음을 만듭니다. 다만 TPO를 안 가리면 민망할 수 있으니 주의가 필요합니다.",
      en: "You make people laugh with exaggerated expressions and gestures. You like acting and mimicking, and enjoy slapstick comedy. You have overflowing energy and no shame, creating laughter anywhere. However, you need to be careful about time, place, and occasion to avoid embarrassment.",
      ja: "大げさな表情と身振りで人を笑わせます。演技や真似をするのが好きで、スラップスティックコメディを楽しみます。エネルギーが溢れ、恥知らずでどこでも笑いを作ります。ただしTPOを気にしないと恥ずかしいことになるので注意が必要です。",
      "zh-CN": "你用夸张的表情和动作逗人发笑。你喜欢表演和模仿，享受闹剧喜剧。你充满能量，没有羞耻心，在任何地方都能创造笑声。但是如果不注意时间、地点和场合，可能会很尴尬。",
      "zh-TW": "你用誇張的表情和動作逗人發笑。你喜歡表演和模仿，享受鬧劇喜劇。你充滿能量，沒有羞恥心，在任何地方都能創造笑聲。但是如果不注意時間、地點和場合，可能會很尷尬。",
      vi: "Bạn làm mọi người cười bằng biểu cảm và cử chỉ phóng đại. Bạn thích diễn và bắt chước, thích hài kịch tình huống. Bạn có năng lượng tràn đầy và không biết xấu hổ, tạo ra tiếng cười ở bất cứ đâu. Tuy nhiên, bạn cần cẩn thận về thời gian, địa điểm và hoàn cảnh để tránh xấu hổ.",
      id: "Anda membuat orang tertawa dengan ekspresi dan gerakan berlebihan. Anda suka berakting dan meniru, menikmati komedi slapstick. Anda memiliki energi yang melimpah dan tidak tahu malu, menciptakan tawa di mana saja. Namun, Anda perlu berhati-hati dengan waktu, tempat, dan kesempatan untuk menghindari rasa malu."
    },
    compatibility: {
      best: ["2"],
      good: ["6"],
      careful: ["3"],
      difficult: []
    }
  },
  {
    type: "3",
    emoji: "✨",
    title: {
      ko: "센스있는 위트형",
      en: "Sensible Wit Type",
      ja: "センスのあるウィット型",
      "zh-CN": "有品味的机智型",
      "zh-TW": "有品味的機智型",
      vi: "Kiểu dí dỏm có phong cách",
      id: "Tipe jenaka yang berkelas"
    },
    description: {
      ko: "똑똑하고 쿨한 유머! 지적인 웃음의 소유자",
      en: "Smart and cool humor! Owner of intellectual laughter",
      ja: "頭が良くてクールなユーモア！知的な笑いの持ち主",
      "zh-CN": "聪明酷炫的幽默！智慧笑声的拥有者",
      "zh-TW": "聰明酷炫的幽默！智慧笑聲的擁有者",
      vi: "Hài hước thông minh và mát mẻ! Chủ nhân của tiếng cười trí tuệ",
      id: "Humor pintar dan keren! Pemilik tawa intelektual"
    },
    pros: [
      {
        ko: "센스",
        en: "Sense",
        ja: "センス",
        "zh-CN": "品味",
        "zh-TW": "品味",
        vi: "Phong cách",
        id: "Rasa"
      },
      {
        ko: "타이밍",
        en: "Timing",
        ja: "タイミング",
        "zh-CN": "时机",
        "zh-TW": "時機",
        vi: "Thời điểm",
        id: "Timing"
      },
      {
        ko: "세련됨",
        en: "Sophistication",
        ja: "洗練",
        "zh-CN": "精致",
        "zh-TW": "精緻",
        vi: "Tinh tế",
        id: "Kecanggihan"
      },
      {
        ko: "지적",
        en: "Intellectual",
        ja: "知的",
        "zh-CN": "智力",
        "zh-TW": "智力",
        vi: "Trí tuệ",
        id: "Intelektual"
      }
    ],
    cons: [
      {
        ko: "때론 차갑게 느껴짐",
        en: "Sometimes feels cold",
        ja: "時々冷たく感じられる",
        "zh-CN": "有时感觉冷漠",
        "zh-TW": "有時感覺冷漠",
        vi: "Đôi khi cảm thấy lạnh lùng",
        id: "Kadang terasa dingin"
      },
      {
        ko: "공감 부족",
        en: "Lack of empathy",
        ja: "共感不足",
        "zh-CN": "缺乏共鸣",
        "zh-TW": "缺乏共鳴",
        vi: "Thiếu đồng cảm",
        id: "Kurang empati"
      }
    ],
    advice: {
      ko: "상황을 정확히 읽고 적절한 한마디로 웃깁니다. 센스있고 세련된 유머를 구사하며, 타이밍이 완벽합니다. 독설처럼 보이지만 선을 지키고, 상대를 불쾌하게 하지 않는 센스가 있습니다. 어른스럽고 지적인 웃음을 추구합니다.",
      en: "You read situations accurately and make people laugh with appropriate one-liners. You use sensible and sophisticated humor with perfect timing. You may seem sharp-tongued but know how to draw the line and have the sense not to make others uncomfortable. You pursue mature and intellectual laughter.",
      ja: "状況を正確に読み取り、適切な一言で笑わせます。センスがあり洗練されたユーモアを使い、タイミングが完璧です。毒舌に見えますが線を守り、相手を不愉快にしないセンスがあります。大人で知的な笑いを追求します。",
      "zh-CN": "你准确读懂情况，用恰当的一句话逗人发笑。你运用有品味和精致的幽默，时机完美。虽然看起来毒舌，但知道分寸，有不让别人不舒服的品味。你追求成熟和智慧的笑声。",
      "zh-TW": "你準確讀懂情況，用恰當的一句話逗人發笑。你運用有品味和精緻的幽默，時機完美。雖然看起來毒舌，但知道分寸，有不讓別人不舒服的品味。你追求成熟和智慧的笑聲。",
      vi: "Bạn đọc tình huống chính xác và làm mọi người cười bằng những câu nói thích hợp. Bạn sử dụng sự hài hước có phong cách và tinh tế với thời điểm hoàn hảo. Có vẻ như lưỡi sắc nhưng biết giới hạn và có phong cách không làm người khác khó chịu. Bạn theo đuổi tiếng cười trưởng thành và trí tuệ.",
      id: "Anda membaca situasi dengan akurat dan membuat orang tertawa dengan kalimat yang tepat. Anda menggunakan humor yang berkelas dan canggih dengan timing yang sempurna. Terlihat tajam lidah tapi tahu batas dan memiliki rasa untuk tidak membuat orang lain tidak nyaman. Anda mengejar tawa yang dewasa dan intelektual."
    },
    compatibility: {
      best: ["3"],
      good: ["1", "4"],
      careful: ["5"],
      difficult: []
    }
  },
  {
    type: "4",
    emoji: "💀",
    title: {
      ko: "블랙유머 전문가",
      en: "Black Humor Expert",
      ja: "ブラックユーモア専門家",
      "zh-CN": "黑色幽默专家",
      "zh-TW": "黑色幽默專家",
      vi: "Chuyên gia hài kịch đen",
      id: "Ahli humor hitam"
    },
    description: {
      ko: "독한 한마디! 아이러니를 즐기는 어둠의 유머",
      en: "Sharp words! Dark humor that enjoys irony",
      ja: "毒のある一言！アイロニーを楽しむ闇のユーモア",
      "zh-CN": "犀利的话语！享受讽刺的黑暗幽默",
      "zh-TW": "犀利的話語！享受諷刺的黑暗幽默",
      vi: "Lời nói sắc bén! Hài kịch đen tận hưởng sự mỉa mai",
      id: "Kata-kata tajam! Humor gelap yang menikmati ironi"
    },
    pros: [
      {
        ko: "독설",
        en: "Sharp tongue",
        ja: "毒舌",
        "zh-CN": "毒舌",
        "zh-TW": "毒舌",
        vi: "Lưỡi sắc",
        id: "Lidah tajam"
      },
      {
        ko: "풍자",
        en: "Satire",
        ja: "風刺",
        "zh-CN": "讽刺",
        "zh-TW": "諷刺",
        vi: "Châm biếm",
        id: "Satir"
      },
      {
        ko: "통찰력",
        en: "Insight",
        ja: "洞察力",
        "zh-CN": "洞察力",
        "zh-TW": "洞察力",
        vi: "Sự thấu hiểu",
        id: "Wawasan"
      },
      {
        ko: "독특함",
        en: "Uniqueness",
        ja: "独特さ",
        "zh-CN": "独特性",
        "zh-TW": "獨特性",
        vi: "Tính độc đáo",
        id: "Keunikan"
      }
    ],
    cons: [
      {
        ko: "불쾌감 유발",
        en: "Causes discomfort",
        ja: "不快感を引き起こす",
        "zh-CN": "引起不适",
        "zh-TW": "引起不適",
        vi: "Gây khó chịu",
        id: "Menyebabkan ketidaknyamanan"
      },
      {
        ko: "선 넘기 쉬움",
        en: "Easy to cross the line",
        ja: "線を越えやすい",
        "zh-CN": "容易越界",
        "zh-TW": "容易越界",
        vi: "Dễ vượt quá giới hạn",
        id: "Mudah melewati batas"
      }
    ],
    advice: {
      ko: "블랙유머와 풍자를 즐기는 어두운 유머의 대가입니다. 냉소적이고 비꼬는 듯하지만 그 안에 진실이 담겨있습니다. 금기를 깨고 불편한 진실을 웃음으로 풀어냅니다. 하지만 TPO를 안 지키면 싸움날 수 있으니 조심해야 합니다.",
      en: "You are a master of dark humor who enjoys black humor and satire. You seem cynical and sarcastic, but there is truth within. You break taboos and release uncomfortable truths through laughter. However, you need to be careful because not respecting time, place, and occasion can lead to fights.",
      ja: "ブラックユーモアと風刺を楽しむ闇のユーモアの達人です。冷笑的で皮肉に見えますが、その中に真実が込められています。タブーを破り、不快な真実を笑いで解き放ちます。ただしTPOを守らないと喧嘩になる可能性があるので注意が必要です。",
      "zh-CN": "你是享受黑色幽默和讽刺的黑暗幽默大师。你看起来愤世嫉俗和讽刺，但其中蕴含着真理。你打破禁忌，通过笑声释放令人不适的真理。但是如果不注意时间、地点和场合，可能会引起争吵。",
      "zh-TW": "你是享受黑色幽默和諷刺的黑暗幽默大師。你看起來憤世嫉俗和諷刺，但其中蘊含著真理。你打破禁忌，通過笑聲釋放令人不適的真理。但是如果不注意時間、地點和場合，可能會引起爭吵。",
      vi: "Bạn là bậc thầy hài kịch đen thích hài kịch đen và châm biếm. Bạn có vẻ hoài nghi và mỉa mai, nhưng bên trong có chứa sự thật. Bạn phá vỡ những điều cấm kỵ và giải phóng những sự thật khó chịu thông qua tiếng cười. Tuy nhiên, bạn cần cẩn thận vì không tôn trọng thời gian, địa điểm và hoàn cảnh có thể dẫn đến tranh cãi.",
      id: "Anda adalah master humor gelap yang menikmati humor hitam dan satir. Anda terlihat sinis dan sarkastik, tapi di dalamnya ada kebenaran. Anda memecahkan tabu dan melepaskan kebenaran yang tidak nyaman melalui tawa. Namun, Anda perlu berhati-hati karena tidak menghormati waktu, tempat, dan kesempatan dapat menyebabkan pertengkaran."
    },
    compatibility: {
      best: ["4"],
      good: ["3"],
      careful: ["5"],
      difficult: []
    }
  },
  {
    type: "5",
    emoji: "🌈",
    title: {
      ko: "순수 귀여움형",
      en: "Pure Cuteness Type",
      ja: "純粋可愛い型",
      "zh-CN": "纯真可爱型",
      "zh-TW": "純真可愛型",
      vi: "Kiểu dễ thương thuần khiết",
      id: "Tipe lucu murni"
    },
    description: {
      ko: "세상 무해한 웃음! 따뜻하고 귀여운 유머",
      en: "World's harmless laughter! Warm and cute humor",
      ja: "世界無害な笑い！温かくて可愛いユーモア",
      "zh-CN": "世界上无害的笑声！温暖可爱的幽默",
      "zh-TW": "世界上無害的笑聲！溫暖可愛的幽默",
      vi: "Tiếng cười vô hại của thế giới! Hài hước ấm áp và dễ thương",
      id: "Tawa tidak berbahaya dunia! Humor hangat dan lucu"
    },
    pros: [
      {
        ko: "순수함",
        en: "Purity",
        ja: "純粋さ",
        "zh-CN": "纯真",
        "zh-TW": "純真",
        vi: "Sự thuần khiết",
        id: "Kemurnian"
      },
      {
        ko: "귀여움",
        en: "Cuteness",
        ja: "可愛さ",
        "zh-CN": "可爱",
        "zh-TW": "可愛",
        vi: "Sự dễ thương",
        id: "Kelucuan"
      },
      {
        ko: "밝음",
        en: "Brightness",
        ja: "明るさ",
        "zh-CN": "明亮",
        "zh-TW": "明亮",
        vi: "Sự tươi sáng",
        id: "Kecerahan"
      },
      {
        ko: "무해함",
        en: "Harmlessness",
        ja: "無害さ",
        "zh-CN": "无害",
        "zh-TW": "無害",
        vi: "Sự vô hại",
        id: "Ketidakberbahayaan"
      }
    ],
    cons: [
      {
        ko: "유치함",
        en: "Childishness",
        ja: "幼稚さ",
        "zh-CN": "幼稚",
        "zh-TW": "幼稚",
        vi: "Sự trẻ con",
        id: "Kekanak-kanakan"
      },
      {
        ko: "재미없다는 소리",
        en: "Said to be not funny",
        ja: "面白くないと言われる",
        "zh-CN": "被认为不好笑",
        "zh-TW": "被認為不好笑",
        vi: "Bị nói là không vui",
        id: "Dikatakan tidak lucu"
      },
      {
        ko: "자극 부족",
        en: "Lack of stimulation",
        ja: "刺激不足",
        "zh-CN": "缺乏刺激",
        "zh-TW": "缺乏刺激",
        vi: "Thiếu kích thích",
        id: "Kurang stimulasi"
      }
    ],
    advice: {
      ko: "귀엽고 순수한 유머로 사람들의 마음을 녹입니다. 악의 없고 밝은 농담을 좋아하며, 귀여운 것에 약합니다. 동물이나 아기 영상에 환장하고, 이모티콘을 많이 씁니다. 모두가 편하게 웃을 수 있는 안전한 유머를 추구합니다.",
      en: "You melt people's hearts with cute and pure humor. You like harmless and bright jokes, and are weak to cute things. You are crazy about animal or baby videos and use many emojis. You pursue safe humor that everyone can laugh at comfortably.",
      ja: "可愛くて純粋なユーモアで人々の心を溶かします。悪意がなく明るい冗談が好きで、可愛いものに弱いです。動物や赤ちゃんの動画に夢中で、絵文字をたくさん使います。みんなが気軽に笑える安全なユーモアを追求します。",
      "zh-CN": "你用可爱纯真的幽默融化人们的心。你喜欢无恶意和明亮的笑话，对可爱的东西没有抵抗力。你痴迷于动物或婴儿视频，使用很多表情符号。你追求每个人都能舒适地笑的安全幽默。",
      "zh-TW": "你用可愛純真的幽默融化人們的心。你喜歡無惡意和明亮的笑話，對可愛的東西沒有抵抗力。你癡迷於動物或嬰兒視頻，使用很多表情符號。你追求每個人都能舒適地笑的安全幽默。",
      vi: "Bạn làm tan chảy trái tim mọi người bằng sự hài hước dễ thương và thuần khiết. Bạn thích những trò đùa vô hại và tươi sáng, và yếu đuối trước những thứ dễ thương. Bạn phát cuồng vì video động vật hoặc em bé và sử dụng nhiều emoji. Bạn theo đuổi sự hài hước an toàn mà mọi người có thể cười một cách thoải mái.",
      id: "Anda melelehkan hati orang dengan humor lucu dan murni. Anda suka lelucon yang tidak berbahaya dan cerah, dan lemah terhadap hal-hal lucu. Anda tergila-gila dengan video hewan atau bayi dan menggunakan banyak emoji. Anda mengejar humor yang aman yang bisa membuat semua orang tertawa dengan nyaman."
    },
    compatibility: {
      best: ["5"],
      good: ["6"],
      careful: ["4"],
      difficult: []
    }
  },
  {
    type: "6",
    emoji: "📱",
    title: {
      ko: "밈/트렌드형",
      en: "Meme/Trend Type",
      ja: "ミーム/トレンド型",
      "zh-CN": "表情包/趋势型",
      "zh-TW": "表情包/趨勢型",
      vi: "Kiểu meme/xu hướng",
      id: "Tipe meme/trend"
    },
    description: {
      ko: "최신 유행 1등! 트렌디한 밈 마스터",
      en: "Number 1 in latest trends! Trendy meme master",
      ja: "最新流行1位！トレンディなミームマスター",
      "zh-CN": "最新潮流第一名！时尚表情包大师",
      "zh-TW": "最新潮流第一名！時尚表情包大師",
      vi: "Số 1 trong xu hướng mới nhất! Bậc thầy meme thời thượng",
      id: "Nomor 1 dalam tren terbaru! Master meme trendi"
    },
    pros: [
      {
        ko: "트렌디",
        en: "Trendy",
        ja: "トレンディ",
        "zh-CN": "时尚",
        "zh-TW": "時尚",
        vi: "Thời thượng",
        id: "Trendi"
      },
      {
        ko: "빠름",
        en: "Fast",
        ja: "速い",
        "zh-CN": "快速",
        "zh-TW": "快速",
        vi: "Nhanh",
        id: "Cepat"
      },
      {
        ko: "SNS 활용",
        en: "SNS utilization",
        ja: "SNS活用",
        "zh-CN": "社交媒体运用",
        "zh-TW": "社交媒體運用",
        vi: "Sử dụng SNS",
        id: "Pemanfaatan SNS"
      },
      {
        ko: "시대 감각",
        en: "Sense of the times",
        ja: "時代感覚",
        "zh-CN": "时代感",
        "zh-TW": "時代感",
        vi: "Cảm giác thời đại",
        id: "Rasa zaman"
      }
    ],
    cons: [
      {
        ko: "유행 지나면 끝",
        en: "Ends when trend passes",
        ja: "流行が過ぎると終わり",
        "zh-CN": "潮流过去就结束",
        "zh-TW": "潮流過去就結束",
        vi: "Kết thúc khi xu hướng qua đi",
        id: "Berakhir saat tren berlalu"
      },
      {
        ko: "가벼움",
        en: "Lightness",
        ja: "軽さ",
        "zh-CN": "轻浮",
        "zh-TW": "輕浮",
        vi: "Sự nhẹ nhàng",
        id: "Ringan"
      }
    ],
    advice: {
      ko: "최신 유행어와 밈을 빠르게 캐치하는 트렌드 세터입니다. SNS를 열심히 하고 바이럴 콘텐츠에 민감합니다. 짧고 임팩트있는 유머를 좋아하고, 이미지와 영상으로 소통합니다. 유행에 뒤처지면 불안하고, 새로운 밈을 찾아다닙니다.",
      en: "You are a trend setter who quickly catches the latest buzzwords and memes. You work hard on SNS and are sensitive to viral content. You like short and impactful humor, and communicate through images and videos. You feel anxious when falling behind trends and search for new memes.",
      ja: "最新の流行語や慧memeを素早くキャッチするトレンドセッターです。SNSを熱心にやり、バイラルコンテンツに敏感です。短くてインパクトのあるユーモアが好きで、画像と動画でコミュニケーションします。流行に遅れると不安になり、新しい慧memeを探し回ります。",
      "zh-CN": "你是快速捕捉最新流行语和表情包的潮流引领者。你积极使用社交媒体，对病毒式内容敏感。你喜欢简短而有冲击力的幽默，通过图像和视频交流。当落后于潮流时会感到焦虑，会寻找新的表情包。",
      "zh-TW": "你是快速捕捉最新流行語和表情包的潮流引領者。你積極使用社交媒體，對病毒式內容敏感。你喜歡簡短而有衝擊力的幽默，通過圖像和視頻交流。當落後於潮流時會感到焦慮，會尋找新的表情包。",
      vi: "Bạn là người dẫn đầu xu hướng nhanh chóng nắm bắt những từ thịnh hành và meme mới nhất. Bạn tích cực sử dụng SNS và nhạy cảm với nội dung lan truyền. Bạn thích sự hài hước ngắn gọn và có tác động, giao tiếp thông qua hình ảnh và video. Bạn cảm thấy lo lắng khi tụt hậu so với xu hướng và tìm kiếm những meme mới.",
      id: "Anda adalah trend setter yang cepat menangkap kata-kata trending dan meme terbaru. Anda rajin menggunakan SNS dan sensitif terhadap konten viral. Anda suka humor pendek dan berdampak, berkomunikasi melalui gambar dan video. Anda merasa cemas ketika tertinggal tren dan mencari meme baru."
    },
    compatibility: {
      best: ["6"],
      good: ["2", "5"],
      careful: ["1"],
      difficult: []
    }
  }
];

// 결과 계산 함수
export function calculateHumorCodeResult(answers: any[]): HumorCodeResult {
  const typeScores = {
    "1": 0, // 말장난 마스터
    "2": 0, // 몸개그 엔터테이너
    "3": 0, // 센스있는 위트형
    "4": 0, // 블랙유머 전문가
    "5": 0, // 순수 귀여움형
    "6": 0  // 밈/트렌드형
  };

  // 각 답변에서 점수 합산
  answers.forEach((answer, index) => {
    if (answer && typeof answer === 'object') {
      Object.entries(answer).forEach(([type, score]) => {
        if (type in typeScores) {
          typeScores[type as keyof typeof typeScores] += score as number;
        }
      });
    }
  });

  // 최고 점수 타입 찾기
  const maxScore = Math.max(...Object.values(typeScores));
  const topTypes = Object.entries(typeScores)
    .filter(([_, score]) => score === maxScore)
    .map(([type, _]) => type);

  // 동점일 경우 Q10-Q12의 선택을 우선 반영
  let resultType = topTypes[0];
  if (topTypes.length > 1) {
    // Q10-Q12의 답변을 확인하여 우선순위 결정
    const q10Answer = answers[9]; // Q10 (인덱스 9)
    const q11Answer = answers[10]; // Q11 (인덱스 10)
    const q12Answer = answers[11]; // Q12 (인덱스 11)
    
    // Q10-Q12에서 가장 높은 점수를 받은 타입을 우선 선택
    let priorityScore = 0;
    let priorityType = topTypes[0];
    
    topTypes.forEach(type => {
      let score = 0;
      if (q10Answer && q10Answer[type]) {
        score += q10Answer[type] * 3; // Q10 가중치 3
      }
      if (q11Answer && q11Answer[type]) {
        score += q11Answer[type] * 2; // Q11 가중치 2
      }
      if (q12Answer && q12Answer[type]) {
        score += q12Answer[type] * 1; // Q12 가중치 1
      }
      
      if (score > priorityScore) {
        priorityScore = score;
        priorityType = type;
      }
    });
    
    resultType = priorityType;
  }
  const result = humorCodeResults.find(r => r.type === resultType);
  return result || humorCodeResults[0];
}
