export interface Phase2CreativityLevelQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    score: number; // A=0, B=1, C=2, D=3
  }[];
}

export interface Phase2CreativityLevelResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription?: Record<string, string>;
  description: Record<string, string>;
  creativityLevel: Record<string, string>; // "Lv. 1", "Lv. 20" 등
  characteristics: Record<string, string>; // 주요 특징
  goodMatch: Record<string, string>; // 환상의 짝꿍
  badMatch: Record<string, string>; // 환장의 짝꿍
}

export const phase2CreativityLevelQuestions: Phase2CreativityLevelQuestion[] = [
  {
    id: 1,
    question: {
      ko: "빈 종이에 동그라미 하나가 그려져 있다. 무엇으로 보이나요?",
      en: "A circle is drawn on a blank paper. What do you see it as?",
      ja: "白い紙に円が一つ描かれている。何に見えますか？",
      'zh-CN': "一张白纸上画了一个圆圈。你看到的是什么？",
      'zh-TW': "一張白紙上畫了一個圓圈。你看到的是什麼？",
      vi: "Một vòng tròn được vẽ trên tờ giấy trắng. Bạn thấy nó là gì?",
      id: "Sebuah lingkaran digambar di kertas kosong. Apa yang Anda lihat?"
    },
    options: [
      {
        text: { 
          ko: "그냥 동그라미", 
          en: "Just a circle",
          ja: "ただの円",
          'zh-CN': "只是一个圆圈",
          'zh-TW': "只是一個圓圈",
          vi: "Chỉ là một vòng tròn",
          id: "Hanya lingkaran"
        },
        score: 0
      },
      {
        text: { 
          ko: "동전, 바퀴, 공", 
          en: "Coin, wheel, ball",
          ja: "硬貨、車輪、ボール",
          'zh-CN': "硬币、轮子、球",
          'zh-TW': "硬幣、輪子、球",
          vi: "Đồng xu, bánh xe, quả bóng",
          id: "Koin, roda, bola"
        },
        score: 1
      },
      {
        text: { 
          ko: "위에서 내려다본 멕시코 모자 쓴 사람", 
          en: "A person wearing a Mexican hat seen from above",
          ja: "上から見たメキシコの帽子をかぶった人",
          'zh-CN': "从上方俯视的戴墨西哥帽的人",
          'zh-TW': "從上方俯視的戴墨西哥帽的人",
          vi: "Người đội mũ Mexico nhìn từ trên xuống",
          id: "Orang yang memakai topi Meksiko dilihat dari atas"
        },
        score: 2
      },
      {
        text: { 
          ko: "우주로 통하는 블랙홀 입구", 
          en: "A black hole entrance leading to space",
          ja: "宇宙へと続くブラックホールの入り口",
          'zh-CN': "通向宇宙的黑洞入口",
          'zh-TW': "通向宇宙的黑洞入口",
          vi: "Lỗ đen dẫn đến vũ trụ",
          id: "Pintu masuk lubang hitam yang menuju ke luar angkasa"
        },
        score: 3
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "\"만약 하늘을 날 수 있다면?\"이라는 질문을 받았다.",
      en: "You were asked, \"What if you could fly?\"",
      ja: "「もし空を飛べたら？」という質問を受けた。",
      'zh-CN': "你被问到：\"如果你能飞会怎样？\"",
      'zh-TW': "你被問到：「如果你能飛會怎樣？」",
      vi: "Bạn được hỏi: \"Nếu bạn có thể bay thì sao?\"",
      id: "Anda ditanya, \"Bagaimana jika Anda bisa terbang?\""
    },
    options: [
      {
        text: { 
          ko: "\"그럴 리가 없잖아.\" 현실적으로 불가능하다고 생각한다", 
          en: "\"That's impossible.\" I think it's realistically impossible",
          ja: "「そんなわけないじゃん。」現実的に不可能だと思う",
          'zh-CN': "\"那不可能。\"我认为这在现实中是不可能的",
          'zh-TW': "「那不可能。」我認為這在現實中是不可能的",
          vi: "\"Điều đó không thể xảy ra.\" Tôi nghĩ nó không thể xảy ra trong thực tế",
          id: "\"Itu tidak mungkin.\" Saya pikir itu tidak mungkin secara realistis"
        },
        score: 0
      },
      {
        text: { 
          ko: "\"비행기 값 굳어서 좋겠네.\" 실용적인 이득을 계산한다", 
          en: "\"I'd save on plane tickets.\" I calculate practical benefits",
          ja: "「飛行機代が浮いていいね。」実用的な利益を計算する",
          'zh-CN': "\"可以省下机票钱。\"我计算实际好处",
          'zh-TW': "「可以省下機票錢。」我計算實際好處",
          vi: "\"Tiết kiệm được tiền vé máy bay.\" Tôi tính toán lợi ích thực tế",
          id: "\"Saya akan menghemat tiket pesawat.\" Saya menghitung manfaat praktis"
        },
        score: 1
      },
      {
        text: { 
          ko: "\"구름 위에서 낮잠 자고 싶어.\" 낭만적인 상상을 한다", 
          en: "\"I want to nap on the clouds.\" I have romantic imagination",
          ja: "「雲の上で昼寝したい。」ロマンチックな想像をする",
          'zh-CN': "\"我想在云上小睡。\"我有浪漫的想象",
          'zh-TW': "「我想在雲上小睡。」我有浪漫的想像",
          vi: "\"Muốn ngủ trưa trên mây.\" Tôi có trí tưởng tượng lãng mạn",
          id: "\"Saya ingin tidur siang di atas awan.\" Saya memiliki imajinasi romantis"
        },
        score: 2
      },
      {
        text: { 
          ko: "\"날개는 어떤 원리야? 속도는?\" 구체적인 세계관을 설정한다", 
          en: "\"What's the principle of wings? What about speed?\" I set up a specific worldview",
          ja: "「翼の原理は？速度は？」具体的な世界観を設定する",
          'zh-CN': "\"翅膀的原理是什么？速度呢？\"我设定具体的世界观",
          'zh-TW': "「翅膀的原理是什麼？速度呢？」我設定具體的世界觀",
          vi: "\"Nguyên lý của cánh là gì? Tốc độ thì sao?\" Tôi xây dựng thế giới quan cụ thể",
          id: "\"Apa prinsip sayapnya? Bagaimana dengan kecepatan?\" Saya membuat worldview yang spesifik"
        },
        score: 3
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "컵을 사용하는 새로운 방법을 제안한다면?",
      en: "If you were to suggest a new way to use a cup?",
      ja: "カップを使う新しい方法を提案するとしたら？",
      'zh-CN': "如果要你提出使用杯子的新方法？",
      'zh-TW': "如果要你提出使用杯子的新方法？",
      vi: "Nếu bạn đề xuất cách sử dụng cốc mới?",
      id: "Jika Anda harus menyarankan cara baru menggunakan cangkir?"
    },
    options: [
      {
        text: { 
          ko: "물 마시는 용도 외에는 딱히 떠오르지 않는다", 
          en: "Nothing else comes to mind besides drinking water",
          ja: "水を飲む以外には特に思い浮かばない",
          'zh-CN': "除了喝水之外想不出别的",
          'zh-TW': "除了喝水之外想不出別的",
          vi: "Không nghĩ ra gì ngoài việc uống nước",
          id: "Tidak ada yang terpikir selain minum air"
        },
        score: 0
      },
      {
        text: { 
          ko: "연필꽂이, 화분, 칫솔 통으로 쓴다", 
          en: "Use it as a pencil holder, flowerpot, toothbrush holder",
          ja: "ペン立て、植木鉢、歯ブラシ立てとして使う",
          'zh-CN': "用作笔筒、花盆、牙刷架",
          'zh-TW': "用作筆筒、花盆、牙刷架",
          vi: "Dùng làm ống đựng bút, chậu hoa, ống đựng bàn chải",
          id: "Gunakan sebagai tempat pensil, pot bunga, tempat sikat gigi"
        },
        score: 1
      },
      {
        text: { 
          ko: "컵을 뒤집어서 벌레를 잡거나 소리를 증폭시킨다", 
          en: "Flip the cup to catch bugs or amplify sound",
          ja: "カップをひっくり返して虫を捕まえたり音を増幅したりする",
          'zh-CN': "把杯子倒过来抓虫子或放大声音",
          'zh-TW': "把杯子倒過來抓蟲子或放大聲音",
          vi: "Lật ngược cốc để bắt côn trùng hoặc khuếch đại âm thanh",
          id: "Balikkan cangkir untuk menangkap serangga atau memperkuat suara"
        },
        score: 2
      },
      {
        text: { 
          ko: "컵을 깨뜨려서 예술 작품을 만들거나 악기로 쓴다", 
          en: "Break the cup to make art or use it as a musical instrument",
          ja: "カップを割ってアート作品を作ったり楽器として使う",
          'zh-CN': "打碎杯子做艺术品或当乐器用",
          'zh-TW': "打碎杯子做藝術品或當樂器用",
          vi: "Đập vỡ cốc để làm tác phẩm nghệ thuật hoặc dùng làm nhạc cụ",
          id: "Hancurkan cangkir untuk membuat karya seni atau menggunakannya sebagai alat musik"
        },
        score: 3
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "길을 걷다 독특한 옷을 입은 사람을 봤다.",
      en: "While walking, you saw someone wearing unique clothes.",
      ja: "歩いていて、独特な服を着た人を見た。",
      'zh-CN': "走路时看到一个穿着独特衣服的人。",
      'zh-TW': "走路時看到一個穿著獨特衣服的人。",
      vi: "Đang đi đường, bạn thấy một người mặc quần áo độc đáo.",
      id: "Saat berjalan, Anda melihat seseorang yang memakai pakaian unik."
    },
    options: [
      {
        text: { 
          ko: "\"와, 특이하네.\" 하고 지나간다", 
          en: "\"Wow, that's unique.\" and pass by",
          ja: "「わあ、独特だね。」と言って通り過ぎる",
          'zh-CN': "\"哇，真特别。\"然后走过去",
          'zh-TW': "「哇，真特別。」然後走過去",
          vi: "\"Ồ, độc đáo nhỉ.\" và đi qua",
          id: "\"Wow, itu unik.\" dan lewat"
        },
        score: 0
      },
      {
        text: { 
          ko: "\"저 옷 어디 브랜드지?\" 정보를 궁금해한다", 
          en: "\"What brand is that?\" I'm curious about the information",
          ja: "「あの服はどこのブランド？」情報が気になる",
          'zh-CN': "\"那是什么品牌？\"对信息感到好奇",
          'zh-TW': "「那是什麼品牌？」對資訊感到好奇",
          vi: "\"Quần áo đó là thương hiệu gì?\" Tò mò về thông tin",
          id: "\"Merek apa itu?\" Saya penasaran dengan informasinya"
        },
        score: 1
      },
      {
        text: { 
          ko: "\"저 사람의 직업은 뭘까?\" 그 사람의 사연을 상상한다", 
          en: "\"What's that person's job?\" I imagine their story",
          ja: "「あの人の職業は何だろう？」その人の物語を想像する",
          'zh-CN': "\"那个人的职业是什么？\"想象他们的故事",
          'zh-TW': "「那個人的職業是什麼？」想像他們的故事",
          vi: "\"Nghề nghiệp của người đó là gì?\" Tưởng tượng câu chuyện của họ",
          id: "\"Apa pekerjaan orang itu?\" Saya membayangkan cerita mereka"
        },
        score: 2
      },
      {
        text: { 
          ko: "\"나도 저런 거 입어볼까? 리폼해볼까?\" 영감을 얻는다", 
          en: "\"Should I try wearing something like that? Should I upcycle?\" I get inspired",
          ja: "「私もあんなの着てみようかな？リフォームしてみようかな？」インスピレーションを得る",
          'zh-CN': "\"我也试试穿那样的？或者改造一下？\"我获得灵感",
          'zh-TW': "「我也試試穿那樣的？或者改造一下？」我獲得靈感",
          vi: "\"Mình cũng thử mặc thứ như vậy? Hay thử upcycle?\" Có cảm hứng",
          id: "\"Haruskah saya mencoba memakai sesuatu seperti itu? Haruskah saya upcycle?\" Saya mendapat inspirasi"
        },
        score: 3
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "멍 때릴 때 당신의 머릿속은?",
      en: "What's in your head when you zone out?",
      ja: "ぼーっとしているとき、あなたの頭の中は？",
      'zh-CN': "当你发呆时，你脑子里想什么？",
      'zh-TW': "當你發呆時，你腦子裡想什麼？",
      vi: "Khi bạn đang mơ màng, đầu óc bạn nghĩ gì?",
      id: "Apa yang ada di kepala Anda saat melamun?"
    },
    options: [
      {
        text: { 
          ko: "아무 생각 없다.", 
          en: "No thoughts at all.",
          ja: "何も考えていない。",
          'zh-CN': "什么都没想。",
          'zh-TW': "什麼都沒想。",
          vi: "Không nghĩ gì cả.",
          id: "Tidak ada pikiran sama sekali."
        },
        score: 0
      },
      {
        text: { 
          ko: "오늘 점심 메뉴, 할 일 목록 등 현실적인 생각", 
          en: "Realistic thoughts like today's lunch menu, to-do list",
          ja: "今日の昼食メニュー、やることリストなど現実的な考え",
          'zh-CN': "现实的想法，比如今天的午餐菜单、待办事项",
          'zh-TW': "現實的想法，比如今天的午餐菜單、待辦事項",
          vi: "Suy nghĩ thực tế như thực đơn trưa hôm nay, danh sách việc cần làm",
          id: "Pikiran realistis seperti menu makan siang hari ini, daftar tugas"
        },
        score: 1
      },
      {
        text: { 
          ko: "과거의 추억이나 미래에 대한 막연한 공상", 
          en: "Vague fantasies about past memories or the future",
          ja: "過去の思い出や未来への漠然とした空想",
          'zh-CN': "对过去回忆或未来的模糊幻想",
          'zh-TW': "對過去回憶或未來的模糊幻想",
          vi: "Tưởng tượng mơ hồ về kỷ niệm quá khứ hoặc tương lai",
          id: "Fantasi samar tentang kenangan masa lalu atau masa depan"
        },
        score: 2
      },
      {
        text: { 
          ko: "SF 영화 한 편을 찍을 정도로 꼬리에 꼬리를 무는 망상", 
          en: "Delusions that could make a full sci-fi movie, one thing leading to another",
          ja: "SF映画一本撮れるほど連鎖する妄想",
          'zh-CN': "可以拍一部科幻电影的连锁幻想",
          'zh-TW': "可以拍一部科幻電影的連鎖幻想",
          vi: "Ảo tưởng dây chuyền đủ để quay một bộ phim khoa học viễn tưởng",
          id: "Delusi yang bisa membuat film sci-fi penuh, satu hal mengarah ke hal lain"
        },
        score: 3
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "문제를 해결할 때 당신의 스타일은?",
      en: "What's your style when solving problems?",
      ja: "問題を解決するとき、あなたのスタイルは？",
      'zh-CN': "解决问题时你的风格是什么？",
      'zh-TW': "解決問題時你的風格是什麼？",
      vi: "Phong cách của bạn khi giải quyết vấn đề là gì?",
      id: "Apa gaya Anda saat menyelesaikan masalah?"
    },
    options: [
      {
        text: { 
          ko: "기존의 매뉴얼이나 규칙을 철저히 따른다", 
          en: "I thoroughly follow existing manuals or rules",
          ja: "既存のマニュアルやルールを徹底的に守る",
          'zh-CN': "严格遵守现有的手册或规则",
          'zh-TW': "嚴格遵守現有的手冊或規則",
          vi: "Tuân thủ nghiêm ngặt sách hướng dẫn hoặc quy tắc hiện có",
          id: "Saya mengikuti manual atau aturan yang ada dengan teliti"
        },
        score: 0
      },
      {
        text: { 
          ko: "선배나 경험자에게 조언을 구하고 따라 한다", 
          en: "I seek advice from seniors or experienced people and follow it",
          ja: "先輩や経験者にアドバイスを求めて従う",
          'zh-CN': "向前辈或有经验的人寻求建议并遵循",
          'zh-TW': "向前輩或有經驗的人尋求建議並遵循",
          vi: "Tìm lời khuyên từ người đi trước hoặc người có kinh nghiệm và làm theo",
          id: "Saya meminta saran dari senior atau orang berpengalaman dan mengikutinya"
        },
        score: 1
      },
      {
        text: { 
          ko: "나만의 방식대로 요리조리 시도해 본다", 
          en: "I try various ways in my own style",
          ja: "自分のやり方でいろいろ試してみる",
          'zh-CN': "用自己的方式尝试各种方法",
          'zh-TW': "用自己的方式嘗試各種方法",
          vi: "Thử nhiều cách theo phong cách riêng của mình",
          id: "Saya mencoba berbagai cara dengan gaya saya sendiri"
        },
        score: 2
      },
      {
        text: { 
          ko: "아예 새로운 룰을 만들거나 판을 뒤엎는다", 
          en: "I create completely new rules or flip the board",
          ja: "全く新しいルールを作ったり盤をひっくり返したりする",
          'zh-CN': "创造全新的规则或推翻局面",
          'zh-TW': "創造全新的規則或推翻局面",
          vi: "Tạo ra quy tắc hoàn toàn mới hoặc lật ngược tình thế",
          id: "Saya membuat aturan yang sama sekali baru atau membalikkan papan"
        },
        score: 3
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "구름 모양을 보고 드는 생각은?",
      en: "What do you think when you see cloud shapes?",
      ja: "雲の形を見て思うことは？",
      'zh-CN': "看到云朵形状时你会想什么？",
      'zh-TW': "看到雲朵形狀時你會想什麼？",
      vi: "Bạn nghĩ gì khi nhìn hình dạng mây?",
      id: "Apa yang Anda pikirkan saat melihat bentuk awan?"
    },
    options: [
      {
        text: { 
          ko: "\"오늘 날씨 흐리네. 비 오려나?\"", 
          en: "\"It's cloudy today. Will it rain?\"",
          ja: "「今日は曇りだね。雨降るかな？」",
          'zh-CN': "\"今天阴天。会下雨吗？\"",
          'zh-TW': "「今天陰天。會下雨嗎？」",
          vi: "\"Hôm nay trời nhiều mây. Sẽ mưa không?\"",
          id: "\"Hari ini mendung. Apakah akan hujan?\""
        },
        score: 0
      },
      {
        text: { 
          ko: "\"저 구름은 적란운이네.\" 과학적 지식", 
          en: "\"That's a cumulonimbus cloud.\" Scientific knowledge",
          ja: "「あの雲は積乱雲だね。」科学的知識",
          'zh-CN': "\"那是积雨云。\"科学知识",
          'zh-TW': "「那是積雨雲。」科學知識",
          vi: "\"Đó là mây tích mưa.\" Kiến thức khoa học",
          id: "\"Itu awan cumulonimbus.\" Pengetahuan ilmiah"
        },
        score: 1
      },
      {
        text: { 
          ko: "\"강아지 모양이다! 저건 솜사탕 같아\" 형상 연상", 
          en: "\"It looks like a puppy! That one looks like cotton candy\" Shape association",
          ja: "「子犬の形だ！あれは綿あめみたい」形状連想",
          'zh-CN': "\"像小狗！那个像棉花糖\"形状联想",
          'zh-TW': "「像小狗！那個像棉花糖」形狀聯想",
          vi: "\"Trông như chó con! Cái kia giống kẹo bông\" Liên tưởng hình dạng",
          id: "\"Seperti anak anjing! Yang itu seperti permen kapas\" Asosiasi bentuk"
        },
        score: 2
      },
      {
        text: { 
          ko: "\"저 구름 위에 성이 있고 거인이 살고 있을 거야\" 스토리텔링", 
          en: "\"There's a castle on that cloud and a giant lives there\" Storytelling",
          ja: "「あの雲の上に城があって巨人が住んでいるんだろうな」ストーリーテリング",
          'zh-CN': "\"那朵云上有座城堡，住着巨人\"故事叙述",
          'zh-TW': "「那朵雲上有座城堡，住著巨人」故事敘述",
          vi: "\"Trên đám mây đó có lâu đài và người khổng lồ sống ở đó\" Kể chuyện",
          id: "\"Ada kastil di atas awan itu dan raksasa tinggal di sana\" Bercerita"
        },
        score: 3
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "당신에게 '상자'란 무엇인가요?",
      en: "What is a 'box' to you?",
      ja: "あなたにとって「箱」とは何ですか？",
      'zh-CN': "对你来说'盒子'是什么？",
      'zh-TW': "對你來說「盒子」是什麼？",
      vi: "'Hộp' đối với bạn là gì?",
      id: "Apa itu 'kotak' bagi Anda?"
    },
    options: [
      {
        text: { 
          ko: "물건을 담는 도구", 
          en: "A tool to store things",
          ja: "物を入れる道具",
          'zh-CN': "装东西的工具",
          'zh-TW': "裝東西的工具",
          vi: "Công cụ để đựng đồ vật",
          id: "Alat untuk menyimpan barang"
        },
        score: 0
      },
      {
        text: { 
          ko: "정리 정돈을 위한 수납 공간", 
          en: "Storage space for organization",
          ja: "整理整頓のための収納スペース",
          'zh-CN': "用于整理收纳的空间",
          'zh-TW': "用於整理收納的空間",
          vi: "Không gian lưu trữ để sắp xếp",
          id: "Ruang penyimpanan untuk organisasi"
        },
        score: 1
      },
      {
        text: { 
          ko: "고양이의 집, 혹은 숨바꼭질 장소", 
          en: "A cat's house, or a hiding place",
          ja: "猫の家、またはかくれんぼの場所",
          'zh-CN': "猫的房子，或捉迷藏的地方",
          'zh-TW': "貓的房子，或捉迷藏的地方",
          vi: "Nhà của mèo, hoặc nơi chơi trốn tìm",
          id: "Rumah kucing, atau tempat bermain petak umpet"
        },
        score: 2
      },
      {
        text: { 
          ko: "슈뢰딩거의 고양이, 혹은 미지의 세계", 
          en: "Schrödinger's cat, or an unknown world",
          ja: "シュレーディンガーの猫、または未知の世界",
          'zh-CN': "薛定谔的猫，或未知的世界",
          'zh-TW': "薛丁格的貓，或未知的世界",
          vi: "Con mèo của Schrödinger, hoặc thế giới chưa biết",
          id: "Kucing Schrödinger, atau dunia yang tidak diketahui"
        },
        score: 3
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "여행 계획을 세울 때?",
      en: "When planning a trip?",
      ja: "旅行の計画を立てるときは？",
      'zh-CN': "制定旅行计划时？",
      'zh-TW': "制定旅行計劃時？",
      vi: "Khi lập kế hoạch du lịch?",
      id: "Saat merencanakan perjalanan?"
    },
    options: [
      {
        text: { 
          ko: "유명 관광지 위주로 효율적인 동선을 짠다", 
          en: "Plan an efficient route focusing on famous tourist spots",
          ja: "有名な観光地中心に効率的なルートを組む",
          'zh-CN': "规划以著名景点为主的高效路线",
          'zh-TW': "規劃以著名景點為主的高效路線",
          vi: "Lập lộ trình hiệu quả tập trung vào các điểm du lịch nổi tiếng",
          id: "Rencanakan rute yang efisien dengan fokus pada tempat wisata terkenal"
        },
        score: 0
      },
      {
        text: { 
          ko: "블로그 맛집과 핫플레이스를 검색한다", 
          en: "Search for blog-recommended restaurants and hot spots",
          ja: "ブログの名店やホットスポットを検索する",
          'zh-CN': "搜索博客推荐的美食店和热门地点",
          'zh-TW': "搜尋部落格推薦的美食店和熱門地點",
          vi: "Tìm kiếm nhà hàng và địa điểm hot được blog giới thiệu",
          id: "Cari restoran dan tempat populer yang direkomendasikan blog"
        },
        score: 1
      },
      {
        text: { 
          ko: "\"발길 닿는 대로!\" 지도 없이 골목을 탐험한다", 
          en: "\"Wherever my feet take me!\" Explore alleys without a map",
          ja: "「足の向くままに！」地図なしで路地を探検する",
          'zh-CN': "\"走到哪算哪！\"不用地图探索小巷",
          'zh-TW': "「走到哪算哪！」不用地圖探索小巷",
          vi: "\"Đi đến đâu hay đến đó!\" Khám phá ngõ hẻm không cần bản đồ",
          id: "\"Ke mana pun kaki membawa!\" Jelajahi gang tanpa peta"
        },
        score: 2
      },
      {
        text: { 
          ko: "테마를 정해서(예: 빵지순례, 귀신 탐방) 독특한 여행을 한다", 
          en: "Set a theme (e.g., bread pilgrimage, ghost tour) for a unique trip",
          ja: "テーマを決めて（例：パン巡礼、お化け探索）独特な旅行をする",
          'zh-CN': "设定主题（如：面包朝圣、探鬼）进行独特旅行",
          'zh-TW': "設定主題（如：麵包朝聖、探鬼）進行獨特旅行",
          vi: "Đặt chủ đề (ví dụ: hành hương bánh mì, khám phá ma) cho chuyến đi độc đáo",
          id: "Tetapkan tema (misalnya: ziarah roti, tur hantu) untuk perjalanan unik"
        },
        score: 3
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "\"1+1=?\"",
      en: "\"1+1=?\"",
      ja: "「1+1=？」",
      'zh-CN': "\"1+1=?\"",
      'zh-TW': "「1+1=？」",
      vi: "\"1+1=?\"",
      id: "\"1+1=?\""
    },
    options: [
      {
        text: { 
          ko: "2", 
          en: "2",
          ja: "2",
          'zh-CN': "2",
          'zh-TW': "2",
          vi: "2",
          id: "2"
        },
        score: 0
      },
      {
        text: { 
          ko: "창문 (田), 11", 
          en: "Window (田), 11",
          ja: "窓（田）、11",
          'zh-CN': "窗户（田），11",
          'zh-TW': "窗戶（田），11",
          vi: "Cửa sổ (田), 11",
          id: "Jendela (田), 11"
        },
        score: 1
      },
      {
        text: { 
          ko: "노동 + 노동 = 과로", 
          en: "Labor + Labor = Overwork",
          ja: "労働＋労働＝過労",
          'zh-CN': "劳动+劳动=过劳",
          'zh-TW': "勞動+勞動=過勞",
          vi: "Lao động + Lao động = Quá tải",
          id: "Tenaga kerja + Tenaga kerja = Terlalu banyak bekerja"
        },
        score: 2
      },
      {
        text: { 
          ko: "하나와 하나가 만나면 무한대", 
          en: "One and one meeting equals infinity",
          ja: "1と1が出会うと無限大",
          'zh-CN': "一加一相遇等于无穷大",
          'zh-TW': "一加一相遇等於無窮大",
          vi: "Một và một gặp nhau bằng vô cực",
          id: "Satu dan satu bertemu sama dengan tak terhingga"
        },
        score: 3
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "당신의 꿈(수면)은 어떤가요?",
      en: "What are your dreams (sleep) like?",
      ja: "あなたの夢（睡眠）はどんなですか？",
      'zh-CN': "你的梦（睡眠）是什么样的？",
      'zh-TW': "你的夢（睡眠）是什麼樣的？",
      vi: "Giấc mơ (khi ngủ) của bạn như thế nào?",
      id: "Bagaimana mimpi (tidur) Anda?"
    },
    options: [
      {
        text: { 
          ko: "꿈을 잘 안 꾸거나 기억이 안 난다", 
          en: "I rarely dream or don't remember them",
          ja: "夢をあまり見ないか覚えていない",
          'zh-CN': "很少做梦或记不住",
          'zh-TW': "很少做夢或記不住",
          vi: "Ít mơ hoặc không nhớ",
          id: "Saya jarang bermimpi atau tidak mengingatnya"
        },
        score: 0
      },
      {
        text: { 
          ko: "현실과 비슷한 내용의 꿈을 꾼다", 
          en: "I dream about things similar to reality",
          ja: "現実と似た内容の夢を見る",
          'zh-CN': "做与现实相似内容的梦",
          'zh-TW': "做與現實相似內容的夢",
          vi: "Mơ về những thứ tương tự thực tế",
          id: "Saya bermimpi tentang hal-hal yang mirip dengan kenyataan"
        },
        score: 1
      },
      {
        text: { 
          ko: "판타지 영화처럼 스펙터클하고 컬러풀한 꿈을 꾼다", 
          en: "I have spectacular and colorful dreams like fantasy movies",
          ja: "ファンタジー映画のようにスペクタクルでカラフルな夢を見る",
          'zh-CN': "做像奇幻电影一样壮观多彩的梦",
          'zh-TW': "做像奇幻電影一樣壯觀多彩的夢",
          vi: "Mơ những giấc mơ ngoạn mục và đầy màu sắc như phim giả tưởng",
          id: "Saya bermimpi spektakuler dan penuh warna seperti film fantasi"
        },
        score: 2
      },
      {
        text: { 
          ko: "자각몽(루시드 드림)을 꾸거나 꿈 내용을 조종한다", 
          en: "I have lucid dreams or control dream content",
          ja: "明晰夢（ルシッドドリーム）を見たり夢の内容を操る",
          'zh-CN': "做清醒梦或控制梦境内容",
          'zh-TW': "做清醒夢或控制夢境內容",
          vi: "Có giấc mơ sáng suốt hoặc điều khiển nội dung giấc mơ",
          id: "Saya mengalami mimpi jernih atau mengontrol konten mimpi"
        },
        score: 3
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "창의력이란 무엇이라고 생각하나요?",
      en: "What do you think creativity is?",
      ja: "創造力とは何だと思いますか？",
      'zh-CN': "你认为创造力是什么？",
      'zh-TW': "你認為創造力是什麼？",
      vi: "Bạn nghĩ sáng tạo là gì?",
      id: "Apa yang Anda pikirkan tentang kreativitas?"
    },
    options: [
      {
        text: { 
          ko: "타고난 천재들만의 재능", 
          en: "A talent only for born geniuses",
          ja: "生まれつきの天才だけの才能",
          'zh-CN': "只有天生天才才有的天赋",
          'zh-TW': "只有天生天才才有的天賦",
          vi: "Tài năng chỉ dành cho thiên tài bẩm sinh",
          id: "Bakat hanya untuk jenius yang lahir"
        },
        score: 0
      },
      {
        text: { 
          ko: "문제를 해결하는 똑똑함", 
          en: "Intelligence for solving problems",
          ja: "問題を解決する賢さ",
          'zh-CN': "解决问题的聪明才智",
          'zh-TW': "解決問題的聰明才智",
          vi: "Thông minh để giải quyết vấn đề",
          id: "Kecerdasan untuk menyelesaikan masalah"
        },
        score: 1
      },
      {
        text: { 
          ko: "세상을 아름답게 만드는 예술성", 
          en: "Artistry that makes the world beautiful",
          ja: "世界を美しくする芸術性",
          'zh-CN': "让世界更美的艺术性",
          'zh-TW': "讓世界更美的藝術性",
          vi: "Nghệ thuật làm thế giới đẹp hơn",
          id: "Seni yang membuat dunia indah"
        },
        score: 2
      },
      {
        text: { 
          ko: "고정관념을 깨고 무에서 유를 만드는 파괴력", 
          en: "Destructive power that breaks stereotypes and creates something from nothing",
          ja: "固定観念を打ち破り無から有を生み出す破壊力",
          'zh-CN': "打破固定观念、从无到有的破坏力",
          'zh-TW': "打破固定觀念、從無到有的破壞力",
          vi: "Sức mạnh phá hủy phá vỡ định kiến và tạo ra từ không",
          id: "Kekuatan destruktif yang menghancurkan stereotip dan menciptakan sesuatu dari ketiadaan"
        },
        score: 3
      }
    ]
  }
];

export const phase2CreativityLevelResults: Phase2CreativityLevelResult[] = [
  {
    type: "Type1",
    emoji: "🧱",
    title: {
      ko: "튼튼한 벽돌, 현실주의자",
      en: "Strong Brick, Realist",
      ja: "頑丈なレンガ、現実主義者",
      'zh-CN': "坚固的砖头，现实主义者",
      'zh-TW': "堅固的磚頭，現實主義者",
      vi: "Viên gạch vững chắc, Người thực tế",
      id: "Bata Kuat, Realis"
    },
    shortDescription: {
      ko: "\"창의력보단 팩트와 규칙이 중요해\"",
      en: "\"Facts and rules are more important than creativity\"",
      ja: "「創造力より事実とルールが重要」",
      'zh-CN': "\"事实和规则比创造力更重要\"",
      'zh-TW': "「事實和規則比創造力更重要」",
      vi: "\"Sự thật và quy tắc quan trọng hơn sáng tạo\"",
      id: "\"Fakta dan aturan lebih penting daripada kreativitas\""
    },
    description: {
      ko: "당신의 뇌는 매우 단단하고 현실적입니다. 뜬구름 잡는 소리보다는 눈에 보이는 확실한 결과를 선호합니다. 정해진 규칙을 잘 지키고 성실하지만, 융통성이나 상상력은 조금 부족할 수 있습니다. \"왜 굳이 다르게 해야 해?\"가 당신의 말버릇입니다.",
      en: "Your brain is very solid and realistic. You prefer visible, certain results over pie-in-the-sky talk. You follow established rules well and are sincere, but you may lack some flexibility or imagination. \"Why do we have to do it differently?\" is your catchphrase.",
      ja: "あなたの脳は非常に堅く、現実的です。雲を掴むような話より、目に見える確実な結果を好みます。決められたルールをよく守り、誠実ですが、柔軟性や想像力は少し不足しているかもしれません。「なぜわざわざ違う方法でやる必要があるの？」があなたの口癖です。",
      'zh-CN': "你的大脑非常坚实和现实。你更喜欢可见的、确定的结果，而不是不切实际的空谈。你很好地遵守既定规则并且真诚，但可能缺乏一些灵活性或想象力。\"为什么一定要用不同的方式？\"是你的口头禅。",
      'zh-TW': "你的大腦非常堅實和現實。你更喜歡可見的、確定的結果，而不是不切實際的空談。你很好地遵守既定規則並且真誠，但可能缺乏一些靈活性或想像力。「為什麼一定要用不同的方式？」是你的口頭禪。",
      vi: "Bộ não của bạn rất cứng nhắc và thực tế. Bạn thích kết quả rõ ràng, chắc chắn hơn là những lời nói viển vông. Bạn tuân thủ quy tắc đã định tốt và chân thành, nhưng có thể thiếu một chút linh hoạt hoặc trí tưởng tượng. \"Tại sao phải làm khác đi?\" là câu cửa miệng của bạn.",
      id: "Otak Anda sangat solid dan realistis. Anda lebih suka hasil yang terlihat dan pasti daripada omong kosong. Anda mengikuti aturan yang ditetapkan dengan baik dan tulus, tetapi Anda mungkin kurang fleksibilitas atau imajinasi. \"Mengapa kita harus melakukannya dengan cara yang berbeda?\" adalah kata-kata favorit Anda."
    },
    creativityLevel: {
      ko: "Lv. 1 (돌머리...가 아니라 굳은 머리)",
      en: "Lv. 1 (Not a stone head... but a solid head)",
      ja: "Lv. 1（石頭...ではなく堅い頭）",
      'zh-CN': "Lv. 1（不是石头脑袋...而是坚实的脑袋）",
      'zh-TW': "Lv. 1（不是石頭腦袋...而是堅實的腦袋）",
      vi: "Lv. 1 (Không phải đầu đá... mà là đầu cứng nhắc)",
      id: "Lv. 1 (Bukan kepala batu... tapi kepala yang solid)"
    },
    characteristics: {
      ko: "매뉴얼 준수, 변화 싫어함, 안정 추구",
      en: "Manual compliance, dislikes change, seeks stability",
      ja: "マニュアル遵守、変化嫌い、安定追求",
      'zh-CN': "遵守手册，讨厌变化，追求稳定",
      'zh-TW': "遵守手冊，討厭變化，追求穩定",
      vi: "Tuân thủ sách hướng dẫn, ghét thay đổi, tìm kiếm sự ổn định",
      id: "Kepatuhan manual, tidak suka perubahan, mencari stabilitas"
    },
    goodMatch: {
      ko: "Type 2 (모범생)",
      en: "Type 2 (Model Student)",
      ja: "タイプ2（模範生）",
      'zh-CN': "类型2（模范生）",
      'zh-TW': "類型2（模範生）",
      vi: "Loại 2 (Học sinh gương mẫu)",
      id: "Tipe 2 (Siswa Teladan)"
    },
    badMatch: {
      ko: "Type 6 (4차원 외계인)",
      en: "Type 6 (4D Alien)",
      ja: "タイプ6（4次元宇宙人）",
      'zh-CN': "类型6（四维外星人）",
      'zh-TW': "類型6（四維外星人）",
      vi: "Loại 6 (Người ngoài hành tinh 4D)",
      id: "Tipe 6 (Alien 4D)"
    }
  },
  {
    type: "Type2",
    emoji: "📏",
    title: {
      ko: "반듯한 자, 모범생",
      en: "Straight Ruler, Model Student",
      ja: "まっすぐな定規、模範生",
      'zh-CN': "笔直的尺子，模范生",
      'zh-TW': "筆直的尺子，模範生",
      vi: "Thước thẳng, Học sinh gương mẫu",
      id: "Penggaris Lurus, Siswa Teladan"
    },
    shortDescription: {
      ko: "\"배운 대로, 아는 대로! 정석이 최고야\"",
      en: "\"As learned, as known! The standard way is best\"",
      ja: "「学んだ通り、知っている通り！正攻法が最高」",
      'zh-CN': "\"按学的、按知道的！标准方法最好\"",
      'zh-TW': "「按學的、按知道的！標準方法最好」",
      vi: "\"Theo những gì đã học, đã biết! Cách chuẩn là tốt nhất\"",
      id: "\"Seperti yang dipelajari, seperti yang diketahui! Cara standar adalah yang terbaik\""
    },
    description: {
      ko: "당신은 학교에서 배운 지식과 상식을 잘 활용하는 모범생 타입입니다. 창의력이 없지는 않지만, 실패할까 봐 혹은 튀는 게 싫어서 안전한 길을 선택합니다. 기존의 것을 응용하는 능력은 좋지만, 완전히 새로운 것을 만들어내는 건 어려워합니다.",
      en: "You are a model student type who makes good use of knowledge and common sense learned in school. You're not without creativity, but you choose the safe path because you're afraid of failure or dislike standing out. You're good at applying existing things, but creating something completely new is difficult.",
      ja: "あなたは学校で学んだ知識と常識をうまく活用する模範生タイプです。創造力がないわけではありませんが、失敗を恐れたり、目立つのが嫌で安全な道を選びます。既存のものを応用する能力は良いですが、完全に新しいものを作り出すのは難しいです。",
      'zh-CN': "你是模范生类型，善于运用在学校学到的知识和常识。你不是没有创造力，但因为害怕失败或不喜欢突出而选择安全的路。你善于应用现有的东西，但创造全新的东西很困难。",
      'zh-TW': "你是模範生類型，善於運用在學校學到的知識和常識。你不是沒有創造力，但因為害怕失敗或不喜歡突出而選擇安全的路。你善於應用現有的東西，但創造全新的東西很困難。",
      vi: "Bạn là kiểu học sinh gương mẫu biết tận dụng kiến thức và thông thường đã học ở trường. Bạn không phải không có sáng tạo, nhưng bạn chọn con đường an toàn vì sợ thất bại hoặc không thích nổi bật. Bạn giỏi ứng dụng những thứ hiện có, nhưng tạo ra thứ hoàn toàn mới thì khó.",
      id: "Anda adalah tipe siswa teladan yang memanfaatkan pengetahuan dan akal sehat yang dipelajari di sekolah dengan baik. Anda tidak tanpa kreativitas, tetapi Anda memilih jalan yang aman karena takut gagal atau tidak suka menonjol. Anda pandai menerapkan hal-hal yang ada, tetapi menciptakan sesuatu yang benar-benar baru itu sulit."
    },
    creativityLevel: {
      ko: "Lv. 20 (새싹)",
      en: "Lv. 20 (Sprout)",
      ja: "Lv. 20（新芽）",
      'zh-CN': "Lv. 20（新芽）",
      'zh-TW': "Lv. 20（新芽）",
      vi: "Lv. 20 (Chồi non)",
      id: "Lv. 20 (Tunas)"
    },
    characteristics: {
      ko: "정리 정돈 잘함, 메모 습관, 논리적",
      en: "Good at organizing, note-taking habit, logical",
      ja: "整理整頓が得意、メモの習慣、論理的",
      'zh-CN': "善于整理，有做笔记习惯，逻辑性强",
      'zh-TW': "善於整理，有做筆記習慣，邏輯性強",
      vi: "Giỏi sắp xếp, có thói quen ghi chú, logic",
      id: "Pandai mengorganisir, kebiasaan mencatat, logis"
    },
    goodMatch: {
      ko: "Type 1 (현실주의자)",
      en: "Type 1 (Realist)",
      ja: "タイプ1（現実主義者）",
      'zh-CN': "类型1（现实主义者）",
      'zh-TW': "類型1（現實主義者）",
      vi: "Loại 1 (Người thực tế)",
      id: "Tipe 1 (Realis)"
    },
    badMatch: {
      ko: "Type 5 (몽상가)",
      en: "Type 5 (Dreamer)",
      ja: "タイプ5（夢想家）",
      'zh-CN': "类型5（梦想家）",
      'zh-TW': "類型5（夢想家）",
      vi: "Loại 5 (Người mơ mộng)",
      id: "Tipe 5 (Pemimpi)"
    }
  },
  {
    type: "Type3",
    emoji: "💡",
    title: {
      ko: "번뜩이는 전구, 아이디어 뱅크",
      en: "Bright Bulb, Idea Bank",
      ja: "輝く電球、アイデアバンク",
      'zh-CN': "闪亮的灯泡，创意银行",
      'zh-TW': "閃亮的燈泡，創意銀行",
      vi: "Bóng đèn sáng, Ngân hàng ý tưởng",
      id: "Bola Lampu Terang, Bank Ide"
    },
    shortDescription: {
      ko: "\"오, 이거 이렇게 하면 편하겠는데?\"",
      en: "\"Oh, wouldn't it be convenient if we did it this way?\"",
      ja: "「おお、これこうすれば便利じゃない？」",
      'zh-CN': "\"哦，这样做会不会更方便？\"",
      'zh-TW': "「哦，這樣做會不會更方便？」",
      vi: "\"Ồ, làm thế này có tiện không?\"",
      id: "\"Oh, bukankah akan lebih nyaman jika kita melakukannya dengan cara ini?\""
    },
    description: {
      ko: "당신은 일상 속에서 불편함을 찾고 개선하는 '생활 밀착형 창의력'을 가졌습니다. 잔머리가 잘 돌아가고 임기응변에 능합니다. 거창한 예술가는 아니지만, 문제를 해결하는 센스와 위트가 넘치는 스마트한 사람입니다.",
      en: "You have 'life-close creativity' that finds and improves inconveniences in daily life. Your quick thinking works well and you're good at improvising. You're not a grand artist, but you're a smart person full of problem-solving sense and wit.",
      ja: "あなたは日常生活の中で不便を見つけて改善する「生活密着型創造力」を持っています。機転が利き、臨機応変に優れています。壮大な芸術家ではありませんが、問題を解決するセンスと機知に富んだスマートな人です。",
      'zh-CN': "你拥有'生活贴近型创造力'，能在日常生活中发现并改善不便之处。你思维敏捷，善于随机应变。你不是伟大的艺术家，但你是一个充满解决问题能力和机智的聪明人。",
      'zh-TW': "你擁有「生活貼近型創造力」，能在日常生活中發現並改善不便之處。你思維敏捷，善於隨機應變。你不是偉大的藝術家，但你是一個充滿解決問題能力和機智的聰明人。",
      vi: "Bạn có 'sáng tạo gần gũi cuộc sống' tìm và cải thiện những bất tiện trong cuộc sống hàng ngày. Bạn nhanh trí và giỏi ứng biến. Bạn không phải nghệ sĩ vĩ đại, nhưng bạn là người thông minh đầy khả năng giải quyết vấn đề và dí dỏm.",
      id: "Anda memiliki 'kreativitas dekat kehidupan' yang menemukan dan memperbaiki ketidaknyamanan dalam kehidupan sehari-hari. Pikiran cepat Anda bekerja dengan baik dan Anda pandai berimprovisasi. Anda bukan seniman besar, tetapi Anda adalah orang pintar yang penuh dengan rasa pemecahan masalah dan kecerdasan."
    },
    creativityLevel: {
      ko: "Lv. 40 (중수)",
      en: "Lv. 40 (Intermediate)",
      ja: "Lv. 40（中級）",
      'zh-CN': "Lv. 40（中级）",
      'zh-TW': "Lv. 40（中級）",
      vi: "Lv. 40 (Trung cấp)",
      id: "Lv. 40 (Menengah)"
    },
    characteristics: {
      ko: "꿀팁 전수자, 효율 중시, 유머러스함",
      en: "Tip sharer, efficiency-focused, humorous",
      ja: "コツ伝授者、効率重視、ユーモラス",
      'zh-CN': "技巧传授者，注重效率，幽默",
      'zh-TW': "技巧傳授者，注重效率，幽默",
      vi: "Người chia sẻ mẹo, chú trọng hiệu quả, hài hước",
      id: "Pembagi tip, fokus efisiensi, humoris"
    },
    goodMatch: {
      ko: "Type 4 (예술가)",
      en: "Type 4 (Artist)",
      ja: "タイプ4（芸術家）",
      'zh-CN': "类型4（艺术家）",
      'zh-TW': "類型4（藝術家）",
      vi: "Loại 4 (Nghệ sĩ)",
      id: "Tipe 4 (Seniman)"
    },
    badMatch: {
      ko: "Type 1 (벽돌)",
      en: "Type 1 (Brick)",
      ja: "タイプ1（レンガ）",
      'zh-CN': "类型1（砖头）",
      'zh-TW': "類型1（磚頭）",
      vi: "Loại 1 (Viên gạch)",
      id: "Tipe 1 (Bata)"
    }
  },
  {
    type: "Type4",
    emoji: "🎨",
    title: {
      ko: "무지개 물감, 감성 아티스트",
      en: "Rainbow Paint, Sensitive Artist",
      ja: "虹の絵の具、感性アーティスト",
      'zh-CN': "彩虹颜料，感性艺术家",
      'zh-TW': "彩虹顏料，感性藝術家",
      vi: "Màu cầu vồng, Nghệ sĩ cảm tính",
      id: "Cat Pelangi, Seniman Sensitif"
    },
    shortDescription: {
      ko: "\"세상은 캔버스고 나는 화가야\"",
      en: "\"The world is a canvas and I am the painter\"",
      ja: "「世界はキャンバスで私は画家」",
      'zh-CN': "\"世界是画布，我是画家\"",
      'zh-TW': "「世界是畫布，我是畫家」",
      vi: "\"Thế giới là bức tranh và tôi là họa sĩ\"",
      id: "\"Dunia adalah kanvas dan saya adalah pelukis\""
    },
    description: {
      ko: "당신은 풍부한 감수성과 예술적 영감을 가지고 있습니다. 남들이 무심코 지나치는 풍경에서도 아름다움을 발견하고, 자신만의 방식으로 표현합니다. 논리보다는 감정과 직관이 발달했으며, 독창적인 취향을 가지고 있습니다.",
      en: "You have rich sensitivity and artistic inspiration. You discover beauty even in landscapes others pass by indifferently, and express it in your own way. Your emotions and intuition are more developed than logic, and you have original tastes.",
      ja: "あなたは豊かな感性と芸術的インスピレーションを持っています。他人が無関心に通り過ぎる風景からも美しさを発見し、自分なりの方法で表現します。論理よりも感情と直感が発達しており、独創的な好みを持っています。",
      'zh-CN': "你拥有丰富的感性和艺术灵感。即使在别人漠不关心走过的风景中，你也能发现美，并用你自己的方式表达。你的情感和直觉比逻辑更发达，你有独特的品味。",
      'zh-TW': "你擁有豐富的感性和藝術靈感。即使在別人漠不關心走過的風景中，你也能發現美，並用你自己的方式表達。你的情感和直覺比邏輯更發達，你有獨特的品味。",
      vi: "Bạn có cảm tính phong phú và cảm hứng nghệ thuật. Bạn phát hiện vẻ đẹp ngay cả trong những cảnh quan người khác bỏ qua, và thể hiện theo cách riêng. Cảm xúc và trực giác của bạn phát triển hơn logic, và bạn có gu độc đáo.",
      id: "Anda memiliki kepekaan yang kaya dan inspirasi artistik. Anda menemukan keindahan bahkan dalam pemandangan yang dilalui orang lain dengan acuh tak acuh, dan mengekspresikannya dengan cara Anda sendiri. Emosi dan intuisi Anda lebih berkembang daripada logika, dan Anda memiliki selera yang orisinal."
    },
    creativityLevel: {
      ko: "Lv. 60 (고수)",
      en: "Lv. 60 (Expert)",
      ja: "Lv. 60（上級）",
      'zh-CN': "Lv. 60（高级）",
      'zh-TW': "Lv. 60（高級）",
      vi: "Lv. 60 (Cao cấp)",
      id: "Lv. 60 (Ahli)"
    },
    characteristics: {
      ko: "감수성 풍부, 마이웨이, 독특한 패션",
      en: "Rich sensitivity, my way, unique fashion",
      ja: "感性豊富、マイウェイ、独特なファッション",
      'zh-CN': "感性丰富，我行我素，独特时尚",
      'zh-TW': "感性豐富，我行我素，獨特時尚",
      vi: "Cảm tính phong phú, theo cách riêng, thời trang độc đáo",
      id: "Kepekaan kaya, cara saya, fashion unik"
    },
    goodMatch: {
      ko: "Type 3 (아이디어 뱅크)",
      en: "Type 3 (Idea Bank)",
      ja: "タイプ3（アイデアバンク）",
      'zh-CN': "类型3（创意银行）",
      'zh-TW': "類型3（創意銀行）",
      vi: "Loại 3 (Ngân hàng ý tưởng)",
      id: "Tipe 3 (Bank Ide)"
    },
    badMatch: {
      ko: "Type 2 (모범생)",
      en: "Type 2 (Model Student)",
      ja: "タイプ2（模範生）",
      'zh-CN': "类型2（模范生）",
      'zh-TW': "類型2（模範生）",
      vi: "Loại 2 (Học sinh gương mẫu)",
      id: "Tipe 2 (Siswa Teladan)"
    }
  },
  {
    type: "Type5",
    emoji: "☁️",
    title: {
      ko: "몽글몽글 구름, 몽상가",
      en: "Fluffy Cloud, Dreamer",
      ja: "ふわふわ雲、夢想家",
      'zh-CN': "蓬松的云，梦想家",
      'zh-TW': "蓬鬆的雲，夢想家",
      vi: "Đám mây mềm mại, Người mơ mộng",
      id: "Awan Halus, Pemimpi"
    },
    shortDescription: {
      ko: "\"만약에 말이야... 상상은 자유잖아?\"",
      en: "\"What if... imagination is free, right?\"",
      ja: "「もしもさ...想像は自由でしょ？」",
      'zh-CN': "\"如果...想象是自由的，对吧？\"",
      'zh-TW': "「如果...想像是自由的，對吧？」",
      vi: "\"Nếu như... trí tưởng tượng là tự do mà, đúng không?\"",
      id: "\"Bagaimana jika... imajinasi itu bebas, kan?\""
    },
    description: {
      ko: "당신은 현실보다 머릿속 세상에서 사는 시간이 더 많습니다. 엉뚱하고 기발한 상상을 즐기며, 현실의 제약에 얽매이지 않습니다. 가끔은 너무 뜬구름 잡는 소리를 해서 주변을 당황시키지만, 그 순수한 상상력이 세상을 바꿀 씨앗이 됩니다.",
      en: "You spend more time living in the world inside your head than in reality. You enjoy whimsical and ingenious imagination, and aren't bound by real-world constraints. Sometimes you say things so outlandish that you confuse those around you, but that pure imagination becomes the seed that changes the world.",
      ja: "あなたは現実よりも頭の中の世界で過ごす時間の方が多いです。とんでもなく奇抜な想像を楽しみ、現実の制約に縛られません。時々、あまりにも非現実的なことを言って周りを困惑させますが、その純粋な想像力が世界を変える種となります。",
      'zh-CN': "你在脑海中的世界里生活的时间比在现实中更多。你享受古怪而巧妙的想象，不受现实约束。有时你说的话太不切实际，让周围的人困惑，但那种纯粹的想象力会成为改变世界的种子。",
      'zh-TW': "你在腦海中的世界裡生活的時間比在現實中更多。你享受古怪而巧妙的想像，不受現實約束。有時你說的話太不切實際，讓周圍的人困惑，但那種純粹的想像力會成為改變世界的種子。",
      vi: "Bạn dành nhiều thời gian sống trong thế giới trong đầu hơn là thực tế. Bạn thích trí tưởng tượng kỳ lạ và khéo léo, và không bị ràng buộc bởi hạn chế thực tế. Đôi khi bạn nói những điều quá viển vông khiến người xung quanh bối rối, nhưng trí tưởng tượng thuần khiết đó trở thành hạt giống thay đổi thế giới.",
      id: "Anda menghabiskan lebih banyak waktu hidup di dunia di dalam kepala Anda daripada kenyataan. Anda menikmati imajinasi yang aneh dan cerdik, dan tidak terikat oleh kendala dunia nyata. Terkadang Anda mengatakan hal-hal yang sangat tidak masuk akal sehingga membingungkan orang di sekitar Anda, tetapi imajinasi murni itu menjadi benih yang mengubah dunia."
    },
    creativityLevel: {
      ko: "Lv. 80 (천재성 보임)",
      en: "Lv. 80 (Genius Showing)",
      ja: "Lv. 80（天才性が見える）",
      'zh-CN': "Lv. 80（显现天才性）",
      'zh-TW': "Lv. 80（顯現天才性）",
      vi: "Lv. 80 (Thiên tài lộ diện)",
      id: "Lv. 80 (Genius Terlihat)"
    },
    characteristics: {
      ko: "공상 과학, 멍 때리기, 호기심 천국",
      en: "Science fiction, daydreaming, curiosity paradise",
      ja: "空想科学、ぼーっとする、好奇心の楽園",
      'zh-CN': "科幻，发呆，好奇心天堂",
      'zh-TW': "科幻，發呆，好奇心天堂",
      vi: "Khoa học viễn tưởng, mơ màng, thiên đường tò mò",
      id: "Fiksi ilmiah, melamun, surga keingintahuan"
    },
    goodMatch: {
      ko: "Type 6 (4차원 외계인)",
      en: "Type 6 (4D Alien)",
      ja: "タイプ6（4次元宇宙人）",
      'zh-CN': "类型6（四维外星人）",
      'zh-TW': "類型6（四維外星人）",
      vi: "Loại 6 (Người ngoài hành tinh 4D)",
      id: "Tipe 6 (Alien 4D)"
    },
    badMatch: {
      ko: "Type 2 (모범생)",
      en: "Type 2 (Model Student)",
      ja: "タイプ2（模範生）",
      'zh-CN': "类型2（模范生）",
      'zh-TW': "類型2（模範生）",
      vi: "Loại 2 (Học sinh gương mẫu)",
      id: "Tipe 2 (Siswa Teladan)"
    }
  },
  {
    type: "Type6",
    emoji: "👽",
    title: {
      ko: "미지으 블랙홀, 4차원 외계인",
      en: "Mysterious Black Hole, 4D Alien",
      ja: "神秘のブラックホール、4次元宇宙人",
      'zh-CN': "神秘的黑洞，四维外星人",
      'zh-TW': "神秘的黑洞，四維外星人",
      vi: "Lỗ đen bí ẩn, Người ngoài hành tinh 4D",
      id: "Lubang Hitam Misterius, Alien 4D"
    },
    shortDescription: {
      ko: "\"지구인의 상식으로는 나를 이해할 수 없어\"",
      en: "\"You can't understand me with Earthling common sense\"",
      ja: "「地球人の常識では私を理解できない」",
      'zh-CN': "\"用地球人的常识无法理解我\"",
      'zh-TW': "「用地球人的常識無法理解我」",
      vi: "\"Bạn không thể hiểu tôi bằng thông thường của người Trái đất\"",
      id: "\"Anda tidak bisa memahami saya dengan akal sehat manusia Bumi\""
    },
    description: {
      ko: "당신은 창의력을 넘어선 '광기'와 '천재성'을 동시에 가지고 있습니다. 기존의 모든 고정관념을 파괴하고, 누구도 생각지 못한 새로운 관점을 제시합니다. 천재 아니면 바보라는 소리를 듣지만, 스티브 잡스나 일론 머스크 같은 혁신가는 바로 이런 유형에서 나옵니다.",
      en: "You simultaneously possess 'madness' and 'genius' that goes beyond creativity. You destroy all existing stereotypes and present new perspectives that no one has thought of. You hear people say you're either a genius or a fool, but innovators like Steve Jobs or Elon Musk come from exactly this type.",
      ja: "あなたは創造力を超えた「狂気」と「天才性」を同時に持っています。既存のすべての固定観念を破壊し、誰も考えなかった新しい視点を提示します。天才かバカかという声を聞きますが、スティーブ・ジョブズやイーロン・マスクのような革新者はまさにこのタイプから生まれます。",
      'zh-CN': "你同时拥有超越创造力的'疯狂'和'天才'。你摧毁所有现有的固定观念，提出没有人想到的新观点。你听到人们说你不是天才就是傻瓜，但像史蒂夫·乔布斯或埃隆·马斯克这样的创新者正是来自这种类型。",
      'zh-TW': "你同時擁有超越創造力的「瘋狂」和「天才」。你摧毀所有現有的固定觀念，提出沒有人想到的新觀點。你聽到人們說你不是天才就是傻瓜，但像史蒂夫·賈伯斯或伊隆·馬斯克這樣的創新者正是來自這種類型。",
      vi: "Bạn đồng thời sở hữu 'sự điên rồ' và 'thiên tài' vượt quá sáng tạo. Bạn phá hủy mọi định kiến hiện có và đưa ra quan điểm mới mà không ai nghĩ đến. Bạn nghe người ta nói bạn hoặc là thiên tài hoặc là kẻ ngốc, nhưng những nhà đổi mới như Steve Jobs hay Elon Musk xuất thân từ chính kiểu này.",
      id: "Anda secara bersamaan memiliki 'kegilaan' dan 'kejeniusan' yang melampaui kreativitas. Anda menghancurkan semua stereotip yang ada dan menyajikan perspektif baru yang tidak pernah dipikirkan siapa pun. Anda mendengar orang mengatakan Anda adalah jenius atau bodoh, tetapi inovator seperti Steve Jobs atau Elon Musk berasal dari tipe ini."
    },
    creativityLevel: {
      ko: "Lv. 99 (측정 불가)",
      en: "Lv. 99 (Immeasurable)",
      ja: "Lv. 99（測定不可）",
      'zh-CN': "Lv. 99（无法测量）",
      'zh-TW': "Lv. 99（無法測量）",
      vi: "Lv. 99 (Không thể đo lường)",
      id: "Lv. 99 (Tidak Terukur)"
    },
    characteristics: {
      ko: "예측 불가, 기행, 혁신적 사고",
      en: "Unpredictable, eccentric behavior, innovative thinking",
      ja: "予測不可能、奇行、革新的思考",
      'zh-CN': "不可预测，古怪行为，创新思维",
      'zh-TW': "不可預測，古怪行為，創新思維",
      vi: "Không thể dự đoán, hành vi kỳ lạ, tư duy đổi mới",
      id: "Tidak dapat diprediksi, perilaku eksentrik, pemikiran inovatif"
    },
    goodMatch: {
      ko: "Type 5 (몽상가)",
      en: "Type 5 (Dreamer)",
      ja: "タイプ5（夢想家）",
      'zh-CN': "类型5（梦想家）",
      'zh-TW': "類型5（夢想家）",
      vi: "Loại 5 (Người mơ mộng)",
      id: "Tipe 5 (Pemimpi)"
    },
    badMatch: {
      ko: "Type 1 (현실주의자)",
      en: "Type 1 (Realist)",
      ja: "タイプ1（現実主義者）",
      'zh-CN': "类型1（现实主义者）",
      'zh-TW': "類型1（現實主義者）",
      vi: "Loại 1 (Người thực tế)",
      id: "Tipe 1 (Realis)"
    }
  }
];

export function calculatePhase2CreativityLevelResult(answers: number[]): string {
  const totalScore = answers.reduce((sum, score) => sum + score, 0);

  if (totalScore <= 5) {
    return "Type1";
  } else if (totalScore <= 11) {
    return "Type2";
  } else if (totalScore <= 19) {
    return "Type3";
  } else if (totalScore <= 27) {
    return "Type4";
  } else if (totalScore <= 33) {
    return "Type5";
  } else if (totalScore >= 34) {
    return "Type6";
  } else {
    return "Type3"; // Fallback
  }
}
