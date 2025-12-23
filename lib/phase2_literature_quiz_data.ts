export interface Phase2LiteratureQuizQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
  }[];
  correctAnswer: number; // 0=A, 1=B, 2=C, 3=D
}

export interface Phase2LiteratureQuizResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  correctCount: Record<string, string>; // "0 ~ 2개"
  literatureLevel: Record<string, string>; // "Lv. 1"
  recommendation: Record<string, string>; // 추천 내용
}

export const phase2LiteratureQuizQuestions: Phase2LiteratureQuizQuestion[] = [
  {
    id: 1,
    question: {
      ko: "[난이도 하] \"가장 중요한 건 눈에 보이지 않아.\"라는 명대사를 남긴 소설 <어린 왕자>의 작가는?",
      en: "[Easy] Who is the author of the novel \"The Little Prince\" that left the famous line \"What is essential is invisible to the eye\"?",
      ja: "[難易度低] 「最も大切なものは目に見えない」という名セリフを残した小説『星の王子さま』の作者は？",
      'zh-CN': "[难度低] 留下名句\"最重要的东西是看不见的\"的小说《小王子》的作者是？",
      'zh-TW': "[難度低] 留下名句「最重要的東西是看不見的」的小說《小王子》的作者是？",
      vi: "[Dễ] Ai là tác giả của tiểu thuyết \"Hoàng tử bé\" với câu nói nổi tiếng \"Điều quan trọng nhất là vô hình\"?",
      id: "[Mudah] Siapa penulis novel \"Pangeran Kecil\" yang meninggalkan kalimat terkenal \"Yang terpenting tidak terlihat oleh mata\"?"
    },
    options: [
      {
        text: {
          ko: "앙투안 드 생텍쥐페리",
          en: "Antoine de Saint-Exupéry",
          ja: "アントワーヌ・ド・サン＝テグジュペリ",
          'zh-CN': "安托万·德·圣埃克苏佩里",
          'zh-TW': "安托萬·德·聖埃克蘇佩里",
          vi: "Antoine de Saint-Exupéry",
          id: "Antoine de Saint-Exupéry"
        }
      },
      {
        text: {
          ko: "빅토르 위고",
          en: "Victor Hugo",
          ja: "ヴィクトル・ユーゴー",
          'zh-CN': "维克多·雨果",
          'zh-TW': "維克多·雨果",
          vi: "Victor Hugo",
          id: "Victor Hugo"
        }
      },
      {
        text: {
          ko: "알베르 카뮈",
          en: "Albert Camus",
          ja: "アルベール・カミュ",
          'zh-CN': "阿尔贝·加缪",
          'zh-TW': "阿爾貝·卡繆",
          vi: "Albert Camus",
          id: "Albert Camus"
        }
      },
      {
        text: {
          ko: "장 자크 루소",
          en: "Jean-Jacques Rousseau",
          ja: "ジャン＝ジャック・ルソー",
          'zh-CN': "让-雅克·卢梭",
          'zh-TW': "讓-雅克·盧梭",
          vi: "Jean-Jacques Rousseau",
          id: "Jean-Jacques Rousseau"
        }
      }
    ],
    correctAnswer: 0 // A (생텍쥐페리)
  },
  {
    id: 2,
    question: {
      ko: "[난이도 하] 가문 간의 원수, 비극적인 사랑 이야기를 다룬 희곡 <로미오와 줄리엣>의 작가는?",
      en: "[Easy] Who is the author of the play \"Romeo and Juliet\" that deals with a feud between families and a tragic love story?",
      ja: "[難易度低] 家門間の怨み、悲劇的な恋物語を描いた戯曲『ロミオとジュリエット』の作者は？",
      'zh-CN': "[难度低] 描写家族间仇恨和悲剧爱情故事的戏剧《罗密欧与朱丽叶》的作者是？",
      'zh-TW': "[難度低] 描寫家族間仇恨和悲劇愛情故事的戲劇《羅密歐與朱麗葉》的作者是？",
      vi: "[Dễ] Ai là tác giả của vở kịch \"Romeo và Juliet\" kể về mối thù giữa các gia đình và câu chuyện tình yêu bi thảm?",
      id: "[Mudah] Siapa penulis drama \"Romeo dan Juliet\" yang menceritakan permusuhan antar keluarga dan kisah cinta tragis?"
    },
    options: [
      {
        text: {
          ko: "찰스 디킨스",
          en: "Charles Dickens",
          ja: "チャールズ・ディケンズ",
          'zh-CN': "查尔斯·狄更斯",
          'zh-TW': "查爾斯·狄更斯",
          vi: "Charles Dickens",
          id: "Charles Dickens"
        }
      },
      {
        text: {
          ko: "윌리엄 셰익스피어",
          en: "William Shakespeare",
          ja: "ウィリアム・シェイクスピア",
          'zh-CN': "威廉·莎士比亚",
          'zh-TW': "威廉·莎士比亞",
          vi: "William Shakespeare",
          id: "William Shakespeare"
        }
      },
      {
        text: {
          ko: "제인 오스틴",
          en: "Jane Austen",
          ja: "ジェーン・オースティン",
          'zh-CN': "简·奥斯汀",
          'zh-TW': "珍·奧斯汀",
          vi: "Jane Austen",
          id: "Jane Austen"
        }
      },
      {
        text: {
          ko: "샬롯 브론테",
          en: "Charlotte Brontë",
          ja: "シャーロット・ブロンテ",
          'zh-CN': "夏洛蒂·勃朗特",
          'zh-TW': "夏綠蒂·勃朗特",
          vi: "Charlotte Brontë",
          id: "Charlotte Brontë"
        }
      }
    ],
    correctAnswer: 1 // B (셰익스피어)
  },
  {
    id: 3,
    question: {
      ko: "[난이도 하] 베이커 가 221B, 천재 탐정 <셜록 홈즈> 시리즈를 탄생시킨 작가는?",
      en: "[Easy] Who is the author who created the genius detective \"Sherlock Holmes\" series at 221B Baker Street?",
      ja: "[難易度低] ベーカー街221B、天才探偵『シャーロック・ホームズ』シリーズを生み出した作者は？",
      'zh-CN': "[难度低] 创造了贝克街221B的天才侦探《福尔摩斯》系列的作者是？",
      'zh-TW': "[難度低] 創造了貝克街221B的天才偵探《福爾摩斯》系列的作者是？",
      vi: "[Dễ] Ai là tác giả đã tạo ra loạt truyện thám tử thiên tài \"Sherlock Holmes\" tại 221B Phố Baker?",
      id: "[Mudah] Siapa penulis yang menciptakan seri detektif jenius \"Sherlock Holmes\" di 221B Baker Street?"
    },
    options: [
      {
        text: {
          ko: "아서 코난 도일",
          en: "Arthur Conan Doyle",
          ja: "アーサー・コナン・ドイル",
          'zh-CN': "阿瑟·柯南·道尔",
          'zh-TW': "亞瑟·柯南·道爾",
          vi: "Arthur Conan Doyle",
          id: "Arthur Conan Doyle"
        }
      },
      {
        text: {
          ko: "애거서 크리스티",
          en: "Agatha Christie",
          ja: "アガサ・クリスティ",
          'zh-CN': "阿加莎·克里斯蒂",
          'zh-TW': "阿嘉莎·克莉絲蒂",
          vi: "Agatha Christie",
          id: "Agatha Christie"
        }
      },
      {
        text: {
          ko: "모리스 르블랑",
          en: "Maurice Leblanc",
          ja: "モーリス・ルブラン",
          'zh-CN': "莫里斯·勒布朗",
          'zh-TW': "莫里斯·勒布朗",
          vi: "Maurice Leblanc",
          id: "Maurice Leblanc"
        }
      },
      {
        text: {
          ko: "에드거 앨런 포",
          en: "Edgar Allan Poe",
          ja: "エドガー・アラン・ポー",
          'zh-CN': "埃德加·爱伦·坡",
          'zh-TW': "愛倫·坡",
          vi: "Edgar Allan Poe",
          id: "Edgar Allan Poe"
        }
      }
    ],
    correctAnswer: 0 // A (아서 코난 도일)
  },
  {
    id: 4,
    question: {
      ko: "[난이도 중] 1920년대 미국 재즈 시대를 배경으로 한 소설 <위대한 개츠비>의 작가는?",
      en: "[Medium] Who is the author of the novel \"The Great Gatsby\" set in the American Jazz Age of the 1920s?",
      ja: "[難易度中] 1920年代のアメリカ・ジャズ時代を背景にした小説『グレート・ギャツビー』の作者は？",
      'zh-CN': "[难度中] 以1920年代美国爵士时代为背景的小说《了不起的盖茨比》的作者是？",
      'zh-TW': "[難度中] 以1920年代美國爵士時代為背景的小說《大亨小傳》的作者是？",
      vi: "[Trung bình] Ai là tác giả của tiểu thuyết \"Đại gia Gatsby\" lấy bối cảnh thời đại Jazz Mỹ những năm 1920?",
      id: "[Sedang] Siapa penulis novel \"The Great Gatsby\" yang berlatar belakang era Jazz Amerika tahun 1920-an?"
    },
    options: [
      {
        text: {
          ko: "어니스트 헤밍웨이",
          en: "Ernest Hemingway",
          ja: "アーネスト・ヘミングウェイ",
          'zh-CN': "欧内斯特·海明威",
          'zh-TW': "歐內斯特·海明威",
          vi: "Ernest Hemingway",
          id: "Ernest Hemingway"
        }
      },
      {
        text: {
          ko: "F. 스콧 피츠제럴드",
          en: "F. Scott Fitzgerald",
          ja: "F・スコット・フィッツジェラルド",
          'zh-CN': "F·斯科特·菲茨杰拉德",
          'zh-TW': "F·史考特·費茲傑羅",
          vi: "F. Scott Fitzgerald",
          id: "F. Scott Fitzgerald"
        }
      },
      {
        text: {
          ko: "존 스타인벡",
          en: "John Steinbeck",
          ja: "ジョン・スタインベック",
          'zh-CN': "约翰·斯坦贝克",
          'zh-TW': "約翰·史坦貝克",
          vi: "John Steinbeck",
          id: "John Steinbeck"
        }
      },
      {
        text: {
          ko: "마크 트웨인",
          en: "Mark Twain",
          ja: "マーク・トウェイン",
          'zh-CN': "马克·吐温",
          'zh-TW': "馬克·吐溫",
          vi: "Mark Twain",
          id: "Mark Twain"
        }
      }
    ],
    correctAnswer: 1 // B (피츠제럴드)
  },
  {
    id: 5,
    question: {
      ko: "[난이도 중] 엘리자베스 베넷과 다아시의 사랑과 오해를 다룬 소설 <오만과 편견>의 작가는?",
      en: "[Medium] Who is the author of the novel \"Pride and Prejudice\" that deals with the love and misunderstandings between Elizabeth Bennet and Darcy?",
      ja: "[難易度中] エリザベス・ベネットとダーシーの恋と誤解を描いた小説『高慢と偏見』の作者は？",
      'zh-CN': "[难度中] 描写伊丽莎白·班纳特和达西的爱情与误解的小说《傲慢与偏见》的作者是？",
      'zh-TW': "[難度中] 描寫伊麗莎白·班納特和達西的愛情與誤解的小說《傲慢與偏見》的作者是？",
      vi: "[Trung bình] Ai là tác giả của tiểu thuyết \"Kiêu hãnh và định kiến\" kể về tình yêu và hiểu lầm giữa Elizabeth Bennet và Darcy?",
      id: "[Sedang] Siapa penulis novel \"Pride and Prejudice\" yang menceritakan cinta dan kesalahpahaman antara Elizabeth Bennet dan Darcy?"
    },
    options: [
      {
        text: {
          ko: "에밀리 브론테",
          en: "Emily Brontë",
          ja: "エミリー・ブロンテ",
          'zh-CN': "艾米莉·勃朗特",
          'zh-TW': "艾蜜莉·勃朗特",
          vi: "Emily Brontë",
          id: "Emily Brontë"
        }
      },
      {
        text: {
          ko: "버지니아 울프",
          en: "Virginia Woolf",
          ja: "ヴァージニア・ウルフ",
          'zh-CN': "弗吉尼亚·伍尔夫",
          'zh-TW': "維吉尼亞·吳爾芙",
          vi: "Virginia Woolf",
          id: "Virginia Woolf"
        }
      },
      {
        text: {
          ko: "제인 오스틴",
          en: "Jane Austen",
          ja: "ジェーン・オースティン",
          'zh-CN': "简·奥斯汀",
          'zh-TW': "珍·奧斯汀",
          vi: "Jane Austen",
          id: "Jane Austen"
        }
      },
      {
        text: {
          ko: "루이자 메이 올콧",
          en: "Louisa May Alcott",
          ja: "ルイーザ・メイ・オルコット",
          'zh-CN': "路易莎·梅·奥尔科特",
          'zh-TW': "露易莎·梅·奧爾科特",
          vi: "Louisa May Alcott",
          id: "Louisa May Alcott"
        }
      }
    ],
    correctAnswer: 2 // C (제인 오스틴)
  },
  {
    id: 6,
    question: {
      ko: "[난이도 중] \"새는 알을 깨고 나온다.\" 싱클레어의 성장기를 다룬 소설 <데미안>의 작가는?",
      en: "[Medium] Who is the author of the novel \"Demian\" that deals with Sinclair's coming-of-age story with the quote \"The bird fights its way out of the egg\"?",
      ja: "[難易度中] 「鳥は卵を破って出てくる」シンクレアの成長期を描いた小説『デミアン』の作者は？",
      'zh-CN': "[难度中] 以\"鸟要挣脱出壳\"描写辛克莱成长历程的小说《德米安》的作者是？",
      'zh-TW': "[難度中] 以「鳥要掙脫出殼」描寫辛克萊成長歷程的小說《徬徨少年時》的作者是？",
      vi: "[Trung bình] Ai là tác giả của tiểu thuyết \"Demian\" kể về quá trình trưởng thành của Sinclair với câu nói \"Con chim đấu tranh để thoát khỏi quả trứng\"?",
      id: "[Sedang] Siapa penulis novel \"Demian\" yang menceritakan kisah kedewasaan Sinclair dengan kutipan \"Burung berjuang keluar dari telur\"?"
    },
    options: [
      {
        text: {
          ko: "요한 볼프강 폰 괴테",
          en: "Johann Wolfgang von Goethe",
          ja: "ヨハン・ヴォルフガング・フォン・ゲーテ",
          'zh-CN': "约翰·沃尔夫冈·冯·歌德",
          'zh-TW': "約翰·沃爾夫岡·馮·歌德",
          vi: "Johann Wolfgang von Goethe",
          id: "Johann Wolfgang von Goethe"
        }
      },
      {
        text: {
          ko: "토마스 만",
          en: "Thomas Mann",
          ja: "トーマス・マン",
          'zh-CN': "托马斯·曼",
          'zh-TW': "湯瑪斯·曼",
          vi: "Thomas Mann",
          id: "Thomas Mann"
        }
      },
      {
        text: {
          ko: "프란츠 카프카",
          en: "Franz Kafka",
          ja: "フランツ・カフカ",
          'zh-CN': "弗兰茨·卡夫卡",
          'zh-TW': "法蘭茲·卡夫卡",
          vi: "Franz Kafka",
          id: "Franz Kafka"
        }
      },
      {
        text: {
          ko: "헤르만 헤세",
          en: "Hermann Hesse",
          ja: "ヘルマン・ヘッセ",
          'zh-CN': "赫尔曼·黑塞",
          'zh-TW': "赫爾曼·黑塞",
          vi: "Hermann Hesse",
          id: "Hermann Hesse"
        }
      }
    ],
    correctAnswer: 3 // D (헤르만 헤세)
  },
  {
    id: 7,
    question: {
      ko: "[난이도 중] 어느 날 아침, 잠에서 깨어나니 거대한 벌레로 변해버린 주인공 그레고르 잠자. 이 소설 <변신>의 작가는?",
      en: "[Medium] Who is the author of the novel \"The Metamorphosis\" where the protagonist Gregor Samsa wakes up one morning transformed into a giant insect?",
      ja: "[難易度中] ある朝、目を覚ますと巨大な虫に変身してしまった主人公グレゴール・ザムザ。この小説『変身』の作者は？",
      'zh-CN': "[难度中] 主人公格里高尔·萨姆沙某天早晨醒来发现自己变成了巨大的虫子。这部小说《变形记》的作者是？",
      'zh-TW': "[難度中] 主角格里高爾·薩姆沙某天早晨醒來發現自己變成了巨大的蟲子。這部小說《變形記》的作者是？",
      vi: "[Trung bình] Ai là tác giả của tiểu thuyết \"Hóa thân\" nơi nhân vật chính Gregor Samsa thức dậy một buổi sáng và biến thành một con côn trùng khổng lồ?",
      id: "[Sedang] Siapa penulis novel \"Metamorfosis\" di mana protagonis Gregor Samsa bangun suatu pagi berubah menjadi serangga raksasa?"
    },
    options: [
      {
        text: {
          ko: "프란츠 카프카",
          en: "Franz Kafka",
          ja: "フランツ・カフカ",
          'zh-CN': "弗兰茨·卡夫卡",
          'zh-TW': "法蘭茲·卡夫卡",
          vi: "Franz Kafka",
          id: "Franz Kafka"
        }
      },
      {
        text: {
          ko: "밀란 쿤데라",
          en: "Milan Kundera",
          ja: "ミラン・クンデラ",
          'zh-CN': "米兰·昆德拉",
          'zh-TW': "米蘭·昆德拉",
          vi: "Milan Kundera",
          id: "Milan Kundera"
        }
      },
      {
        text: {
          ko: "알베르 카뮈",
          en: "Albert Camus",
          ja: "アルベール・カミュ",
          'zh-CN': "阿尔贝·加缪",
          'zh-TW': "阿爾貝·卡繆",
          vi: "Albert Camus",
          id: "Albert Camus"
        }
      },
      {
        text: {
          ko: "조지 오웰",
          en: "George Orwell",
          ja: "ジョージ・オーウェル",
          'zh-CN': "乔治·奥威尔",
          'zh-TW': "喬治·歐威爾",
          vi: "George Orwell",
          id: "George Orwell"
        }
      }
    ],
    correctAnswer: 0 // A (프란츠 카프카)
  },
  {
    id: 8,
    question: {
      ko: "[난이도 상] \"빅 브라더가 당신을 지켜보고 있다.\" 전체주의 사회를 비판한 디스토피아 소설 <1984>의 작가는?",
      en: "[Hard] Who is the author of the dystopian novel \"1984\" that criticizes totalitarian society with the quote \"Big Brother is watching you\"?",
      ja: "[難易度高] 「ビッグブラザーがあなたを見ている」全体主義社会を批判したディストピア小説『1984』の作者は？",
      'zh-CN': "[难度高] 以\"老大哥在看着你\"批判极权主义社会的反乌托邦小说《1984》的作者是？",
      'zh-TW': "[難度高] 以「老大哥在看著你」批判極權主義社會的反烏托邦小說《1984》的作者是？",
      vi: "[Khó] Ai là tác giả của tiểu thuyết phản địa đàng \"1984\" phê phán xã hội toàn trị với câu nói \"Anh Cả đang theo dõi bạn\"?",
      id: "[Sulit] Siapa penulis novel distopia \"1984\" yang mengkritik masyarakat totaliter dengan kutipan \"Big Brother sedang mengawasi Anda\"?"
    },
    options: [
      {
        text: {
          ko: "올더스 헉슬리",
          en: "Aldous Huxley",
          ja: "オルダス・ハクスリー",
          'zh-CN': "奥尔德斯·赫胥黎",
          'zh-TW': "奧爾德斯·赫胥黎",
          vi: "Aldous Huxley",
          id: "Aldous Huxley"
        }
      },
      {
        text: {
          ko: "조지 오웰",
          en: "George Orwell",
          ja: "ジョージ・オーウェル",
          'zh-CN': "乔治·奥威尔",
          'zh-TW': "喬治·歐威爾",
          vi: "George Orwell",
          id: "George Orwell"
        }
      },
      {
        text: {
          ko: "J.R.R. 톨킨",
          en: "J.R.R. Tolkien",
          ja: "J・R・R・トールキン",
          'zh-CN': "J.R.R.托尔金",
          'zh-TW': "J·R·R·托爾金",
          vi: "J.R.R. Tolkien",
          id: "J.R.R. Tolkien"
        }
      },
      {
        text: {
          ko: "C.S. 루이스",
          en: "C.S. Lewis",
          ja: "C・S・ルイス",
          'zh-CN': "C.S.刘易斯",
          'zh-TW': "C·S·路易斯",
          vi: "C.S. Lewis",
          id: "C.S. Lewis"
        }
      }
    ],
    correctAnswer: 1 // B (조지 오웰)
  },
  {
    id: 9,
    question: {
      ko: "[난이도 상] \"오늘 엄마가 죽었다. 아니 어쩌면 어제.\"라는 충격적인 첫 문장으로 유명한 소설 <이방인>의 작가는?",
      en: "[Hard] Who is the author of the novel \"The Stranger\" famous for its shocking opening line \"Mother died today. Or maybe yesterday\"?",
      ja: "[難易度高] 「今日、母が死んだ。いや、もしかしたら昨日かもしれない」という衝撃的な冒頭で有名な小説『異邦人』の作者は？",
      'zh-CN': "[难度高] 以\"今天，妈妈死了。也许是昨天\"这一震撼开篇而闻名的小说《局外人》的作者是？",
      'zh-TW': "[難度高] 以「今天，媽媽死了。也許是昨天」這一震撼開篇而聞名的小說《異鄉人》的作者是？",
      vi: "[Khó] Ai là tác giả của tiểu thuyết \"Người xa lạ\" nổi tiếng với câu mở đầu gây sốc \"Mẹ chết hôm nay. Hoặc có thể là hôm qua\"?",
      id: "[Sulit] Siapa penulis novel \"Orang Asing\" yang terkenal dengan kalimat pembuka yang mengejutkan \"Ibu meninggal hari ini. Atau mungkin kemarin\"?"
    },
    options: [
      {
        text: {
          ko: "장 폴 사르트르",
          en: "Jean-Paul Sartre",
          ja: "ジャン＝ポール・サルトル",
          'zh-CN': "让-保罗·萨特",
          'zh-TW': "尚-保羅·沙特",
          vi: "Jean-Paul Sartre",
          id: "Jean-Paul Sartre"
        }
      },
      {
        text: {
          ko: "알베르 카뮈",
          en: "Albert Camus",
          ja: "アルベール・カミュ",
          'zh-CN': "阿尔贝·加缪",
          'zh-TW': "阿爾貝·卡繆",
          vi: "Albert Camus",
          id: "Albert Camus"
        }
      },
      {
        text: {
          ko: "앙드레 지드",
          en: "André Gide",
          ja: "アンドレ・ジッド",
          'zh-CN': "安德烈·纪德",
          'zh-TW': "安德烈·紀德",
          vi: "André Gide",
          id: "André Gide"
        }
      },
      {
        text: {
          ko: "시몬 드 보부아르",
          en: "Simone de Beauvoir",
          ja: "シモーヌ・ド・ボーヴォワール",
          'zh-CN': "西蒙娜·德·波伏娃",
          'zh-TW': "西蒙·波娃",
          vi: "Simone de Beauvoir",
          id: "Simone de Beauvoir"
        }
      }
    ],
    correctAnswer: 1 // B (알베르 카뮈)
  },
  {
    id: 10,
    question: {
      ko: "[난이도 상] 풍차를 거인으로 착각하고 돌진하는 기사, <돈키호테>를 쓴 스페인의 대문호는?",
      en: "[Hard] Who is the great Spanish writer who wrote \"Don Quixote\" about a knight who mistakes windmills for giants and charges at them?",
      ja: "[難易度高] 風車を巨人と勘違いして突進する騎士、『ドン・キホーテ』を書いたスペインの大文豪は？",
      'zh-CN': "[难度高] 写了关于将风车误认为巨人并冲向它们的骑士的《堂吉诃德》的西班牙大文豪是？",
      'zh-TW': "[難度高] 寫了關於將風車誤認為巨人並衝向它們的騎士的《唐吉訶德》的西班牙大文豪是？",
      vi: "[Khó] Ai là nhà văn vĩ đại của Tây Ban Nha đã viết \"Don Quixote\" về một hiệp sĩ nhầm cối xay gió là người khổng lồ và lao vào chúng?",
      id: "[Sulit] Siapa penulis besar Spanyol yang menulis \"Don Quixote\" tentang seorang ksatria yang mengira kincir angin sebagai raksasa dan menyerangnya?"
    },
    options: [
      {
        text: {
          ko: "미겔 데 세르반테스",
          en: "Miguel de Cervantes",
          ja: "ミゲル・デ・セルバンテス",
          'zh-CN': "米格尔·德·塞万提斯",
          'zh-TW': "米格爾·德·塞萬提斯",
          vi: "Miguel de Cervantes",
          id: "Miguel de Cervantes"
        }
      },
      {
        text: {
          ko: "가브리엘 가르시아 마르케스",
          en: "Gabriel García Márquez",
          ja: "ガブリエル・ガルシア・マルケス",
          'zh-CN': "加夫列尔·加西亚·马尔克斯",
          'zh-TW': "加布列·賈西亞·馬奎斯",
          vi: "Gabriel García Márquez",
          id: "Gabriel García Márquez"
        }
      },
      {
        text: {
          ko: "호르헤 루이스 보르헤스",
          en: "Jorge Luis Borges",
          ja: "ホルヘ・ルイス・ボルヘス",
          'zh-CN': "豪尔赫·路易斯·博尔赫斯",
          'zh-TW': "豪爾赫·路易斯·波赫士",
          vi: "Jorge Luis Borges",
          id: "Jorge Luis Borges"
        }
      },
      {
        text: {
          ko: "파울로 코엘료",
          en: "Paulo Coelho",
          ja: "パウロ・コエリョ",
          'zh-CN': "保罗·科埃略",
          'zh-TW': "保羅·科爾賀",
          vi: "Paulo Coelho",
          id: "Paulo Coelho"
        }
      }
    ],
    correctAnswer: 0 // A (세르반테스)
  },
  {
    id: 11,
    question: {
      ko: "[난이도 최상] 장발장, 코제트, 자베르 경감이 등장하는 대하소설 <레 미제라블>의 작가는?",
      en: "[Very Hard] Who is the author of the epic novel \"Les Misérables\" featuring Jean Valjean, Cosette, and Inspector Javert?",
      ja: "[難易度最高] ジャン・バルジャン、コゼット、ジャベール警部が登場する大河小説『レ・ミゼラブル』の作者は？",
      'zh-CN': "[难度最高] 以让·瓦尔让、珂赛特、沙威警长为主角的史诗小说《悲惨世界》的作者是？",
      'zh-TW': "[難度最高] 以尚·瓦讓、珂賽特、賈維警長為主角的史詩小說《悲慘世界》的作者是？",
      vi: "[Rất khó] Ai là tác giả của tiểu thuyết sử thi \"Những người khốn khổ\" với các nhân vật Jean Valjean, Cosette và Thanh tra Javert?",
      id: "[Sangat Sulit] Siapa penulis novel epik \"Les Misérables\" yang menampilkan Jean Valjean, Cosette, dan Inspektur Javert?"
    },
    options: [
      {
        text: {
          ko: "알렉상드르 뒤마",
          en: "Alexandre Dumas",
          ja: "アレクサンドル・デュマ",
          'zh-CN': "大仲马",
          'zh-TW': "大仲馬",
          vi: "Alexandre Dumas",
          id: "Alexandre Dumas"
        }
      },
      {
        text: {
          ko: "귀스타브 플로베르",
          en: "Gustave Flaubert",
          ja: "ギュスターヴ・フローベール",
          'zh-CN': "居斯塔夫·福楼拜",
          'zh-TW': "居斯塔夫·福樓拜",
          vi: "Gustave Flaubert",
          id: "Gustave Flaubert"
        }
      },
      {
        text: {
          ko: "에밀 졸라",
          en: "Émile Zola",
          ja: "エミール・ゾラ",
          'zh-CN': "埃米尔·左拉",
          'zh-TW': "愛彌爾·左拉",
          vi: "Émile Zola",
          id: "Émile Zola"
        }
      },
      {
        text: {
          ko: "빅토르 위고",
          en: "Victor Hugo",
          ja: "ヴィクトル・ユーゴー",
          'zh-CN': "维克多·雨果",
          'zh-TW': "維克多·雨果",
          vi: "Victor Hugo",
          id: "Victor Hugo"
        }
      }
    ],
    correctAnswer: 3 // D (빅토르 위고)
  },
  {
    id: 12,
    question: {
      ko: "[난이도 최상] 전당포 노파를 살해한 라스콜니코프의 죄의식과 구원을 다룬 러시아 소설 <죄와 벌>의 작가는?",
      en: "[Very Hard] Who is the author of the Russian novel \"Crime and Punishment\" that deals with Raskolnikov's guilt and redemption after murdering a pawnbroker?",
      ja: "[難易度最高] 質屋の老婆を殺害したラスコーリニコフの罪悪感と救済を描いたロシア小説『罪と罰』の作者は？",
      'zh-CN': "[难度最高] 描写杀害当铺老妇人的拉斯柯尔尼科夫的罪恶感与救赎的俄罗斯小说《罪与罚》的作者是？",
      'zh-TW': "[難度最高] 描寫殺害當鋪老婦人的拉斯柯尼科夫的罪惡感與救贖的俄羅斯小說《罪與罰》的作者是？",
      vi: "[Rất khó] Ai là tác giả của tiểu thuyết Nga \"Tội ác và trừng phạt\" kể về cảm giác tội lỗi và sự cứu rỗi của Raskolnikov sau khi giết một bà già cầm đồ?",
      id: "[Sangat Sulit] Siapa penulis novel Rusia \"Kejahatan dan Hukuman\" yang menceritakan rasa bersalah dan penebusan Raskolnikov setelah membunuh seorang rentenir?"
    },
    options: [
      {
        text: {
          ko: "레프 톨스토이",
          en: "Leo Tolstoy",
          ja: "レフ・トルストイ",
          'zh-CN': "列夫·托尔斯泰",
          'zh-TW': "列夫·托爾斯泰",
          vi: "Leo Tolstoy",
          id: "Leo Tolstoy"
        }
      },
      {
        text: {
          ko: "표도르 도스토옙스키",
          en: "Fyodor Dostoevsky",
          ja: "フョードル・ドストエフスキー",
          'zh-CN': "费奥多尔·陀思妥耶夫斯基",
          'zh-TW': "費奧多爾·杜斯妥也夫斯基",
          vi: "Fyodor Dostoevsky",
          id: "Fyodor Dostoevsky"
        }
      },
      {
        text: {
          ko: "안톤 체호프",
          en: "Anton Chekhov",
          ja: "アントン・チェーホフ",
          'zh-CN': "安东·契诃夫",
          'zh-TW': "安東·契訶夫",
          vi: "Anton Chekhov",
          id: "Anton Chekhov"
        }
      },
      {
        text: {
          ko: "알렉산드르 푸시킨",
          en: "Alexander Pushkin",
          ja: "アレクサンドル・プーシキン",
          'zh-CN': "亚历山大·普希金",
          'zh-TW': "亞歷山大·普希金",
          vi: "Alexander Pushkin",
          id: "Alexander Pushkin"
        }
      }
    ],
    correctAnswer: 1 // B (도스토옙스키)
  }
];

export const phase2LiteratureQuizResults: Phase2LiteratureQuizResult[] = [
  {
    type: "Type1",
    emoji: "📺",
    title: {
      ko: "책보다 넷플릭스, 영상 콘텐츠 매니아",
      en: "Netflix Over Books, Video Content Enthusiast",
      ja: "本よりNetflix、映像コンテンツマニア",
      'zh-CN': "比起书更喜欢Netflix，视频内容爱好者",
      'zh-TW': "比起書更喜歡Netflix，影片內容愛好者",
      vi: "Netflix Hơn Sách, Người Đam Mê Nội Dung Video",
      id: "Netflix Daripada Buku, Penggemar Konten Video"
    },
    shortDescription: {
      ko: "\"책은 수면제 아닌가요?\"",
      en: "\"Aren't books sleeping pills?\"",
      ja: "「本は睡眠薬じゃないですか？」",
      'zh-CN': "\"书不是安眠药吗？\"",
      'zh-TW': "「書不是安眠藥嗎？」",
      vi: "\"Sách không phải là thuốc ngủ sao?\"",
      id: "\"Bukankah buku itu pil tidur?\""
    },
    description: {
      ko: "당신은 활자보다는 영상이 훨씬 편한 타입입니다. 어린 왕자나 셜록 홈즈 같은 아주 유명한 작품은 들어봤지만, 작가 이름까지 외우는 건 무리입니다. 하지만 걱정 마세요. 영화나 드라마로 만들어진 명작들을 보면서 하나씩 알아가면 되니까요!",
      en: "You're much more comfortable with video than text. You've heard of very famous works like The Little Prince or Sherlock Holmes, but memorizing the authors' names is too much. But don't worry! You can learn one by one by watching masterpieces made into movies or dramas!",
      ja: "あなたは活字よりも映像の方がずっと快適なタイプです。『星の王子さま』や『シャーロック・ホームズ』のような非常に有名な作品は聞いたことがありますが、作者名まで覚えるのは無理です。でも心配しないでください。映画やドラマになった名作を見ながら一つずつ学べばいいのですから！",
      'zh-CN': "你更喜欢视频而不是文字。你听说过《小王子》或《福尔摩斯》这样非常著名的作品，但记住作者的名字太难了。但别担心！你可以通过观看改编成电影或戏剧的名著来一个一个地学习！",
      'zh-TW': "你更喜歡影片而不是文字。你聽說過《小王子》或《福爾摩斯》這樣非常著名的作品，但記住作者的名字太難了。但別擔心！你可以通過觀看改編成電影或戲劇的名著來一個一個地學習！",
      vi: "Bạn thoải mái với video hơn là văn bản. Bạn đã nghe nói về các tác phẩm rất nổi tiếng như Hoàng tử bé hoặc Sherlock Holmes, nhưng việc ghi nhớ tên tác giả là quá khó. Nhưng đừng lo lắng! Bạn có thể học từng cái một bằng cách xem các kiệt tác được chuyển thể thành phim hoặc phim truyền hình!",
      id: "Anda jauh lebih nyaman dengan video daripada teks. Anda pernah mendengar karya-karya yang sangat terkenal seperti Pangeran Kecil atau Sherlock Holmes, tetapi menghafal nama penulis terlalu sulit. Tapi jangan khawatir! Anda bisa belajar satu per satu dengan menonton mahakarya yang dibuat menjadi film atau drama!"
    },
    correctCount: {
      ko: "0 ~ 2개",
      en: "0 ~ 2",
      ja: "0 ~ 2個",
      'zh-CN': "0 ~ 2个",
      'zh-TW': "0 ~ 2個",
      vi: "0 ~ 2",
      id: "0 ~ 2"
    },
    literatureLevel: {
      ko: "Lv. 1",
      en: "Lv. 1",
      ja: "Lv. 1",
      'zh-CN': "Lv. 1",
      'zh-TW': "Lv. 1",
      vi: "Lv. 1",
      id: "Lv. 1"
    },
    recommendation: {
      ko: "영화 '위대한 개츠비' 감상하기.",
      en: "Watch the movie 'The Great Gatsby'.",
      ja: "映画『グレート・ギャツビー』を鑑賞する。",
      'zh-CN': "观看电影《了不起的盖茨比》。",
      'zh-TW': "觀看電影《大亨小傳》。",
      vi: "Xem phim 'Đại gia Gatsby'.",
      id: "Tonton film 'The Great Gatsby'."
    }
  },
  {
    type: "Type2",
    emoji: "📔",
    title: {
      ko: "제목만 아는, 책 표지 수집가",
      en: "Only Know Titles, Book Cover Collector",
      ja: "タイトルだけ知っている、本の表紙コレクター",
      'zh-CN': "只知道标题，书籍封面收藏家",
      'zh-TW': "只知道標題，書籍封面收藏家",
      vi: "Chỉ Biết Tên Sách, Người Sưu Tập Bìa Sách",
      id: "Hanya Tahu Judul, Kolektor Sampul Buku"
    },
    shortDescription: {
      ko: "\"어? 이거 들어본 제목인데!\"",
      en: "\"Huh? I've heard this title before!\"",
      ja: "「あれ？これ聞いたことあるタイトルだ！」",
      'zh-CN': "\"咦？我听过这个标题！\"",
      'zh-TW': "「咦？我聽過這個標題！」",
      vi: "\"Hả? Tôi đã nghe tên này rồi!\"",
      id: "\"Hah? Saya pernah mendengar judul ini!\""
    },
    description: {
      ko: "서점에 가서 베스트셀러 코너를 구경하는 건 좋아하지만, 막상 끝까지 읽은 책은 많지 않군요. 유명한 소설 제목들은 알지만 작가와 연결하는 건 헷갈려 합니다. 그래도 독서에 대한 관심은 있으니 이제 첫 페이지를 넘겨볼 차례입니다.",
      en: "You like going to bookstores and browsing the bestseller section, but you haven't actually finished reading many books. You know famous novel titles but get confused connecting them to authors. Still, you have an interest in reading, so it's time to turn the first page.",
      ja: "書店に行ってベストセラーコーナーを見るのは好きですが、実際に最後まで読んだ本は多くありません。有名な小説のタイトルは知っていますが、作者と結びつけるのは混乱します。それでも読書への関心はあるので、今度は最初のページをめくってみる番です。",
      'zh-CN': "你喜欢去书店浏览畅销书区，但实际上读完的书并不多。你知道著名的小说标题，但将它们与作者联系起来会让你困惑。不过，你对阅读有兴趣，所以是时候翻开第一页了。",
      'zh-TW': "你喜歡去書店瀏覽暢銷書區，但實際上讀完的書並不多。你知道著名的小說標題，但它們與作者聯繫起來會讓你困惑。不過，你對閱讀有興趣，所以是時候翻開第一頁了。",
      vi: "Bạn thích đến hiệu sách và xem khu vực sách bán chạy, nhưng bạn chưa thực sự đọc hết nhiều cuốn sách. Bạn biết tên các tiểu thuyết nổi tiếng nhưng bối rối khi kết nối chúng với tác giả. Tuy nhiên, bạn có hứng thú với việc đọc sách, vì vậy đã đến lúc lật trang đầu tiên.",
      id: "Anda suka pergi ke toko buku dan melihat bagian buku terlaris, tetapi Anda belum benar-benar menyelesaikan membaca banyak buku. Anda tahu judul novel terkenal tetapi bingung menghubungkannya dengan penulis. Namun, Anda memiliki minat membaca, jadi sekarang saatnya membalik halaman pertama."
    },
    correctCount: {
      ko: "3 ~ 4개",
      en: "3 ~ 4",
      ja: "3 ~ 4個",
      'zh-CN': "3 ~ 4个",
      'zh-TW': "3 ~ 4個",
      vi: "3 ~ 4",
      id: "3 ~ 4"
    },
    literatureLevel: {
      ko: "Lv. 10",
      en: "Lv. 10",
      ja: "Lv. 10",
      'zh-CN': "Lv. 10",
      'zh-TW': "Lv. 10",
      vi: "Lv. 10",
      id: "Lv. 10"
    },
    recommendation: {
      ko: "단편 소설부터 가볍게 시작해 보세요.",
      en: "Start lightly with short stories.",
      ja: "短編小説から軽く始めてみる。",
      'zh-CN': "从短篇小说开始轻松阅读。",
      'zh-TW': "從短篇小說開始輕鬆閱讀。",
      vi: "Bắt đầu nhẹ nhàng với truyện ngắn.",
      id: "Mulai dengan ringan dari cerita pendek."
    }
  },
  {
    type: "Type3",
    emoji: "📖",
    title: {
      ko: "교양 있는 시민, 베스트셀러 독자",
      en: "Cultured Citizen, Bestseller Reader",
      ja: "教養のある市民、ベストセラー読者",
      'zh-CN': "有教养的市民，畅销书读者",
      'zh-TW': "有教養的市民，暢銷書讀者",
      vi: "Công Dân Có Văn Hóa, Người Đọc Sách Bán Chạy",
      id: "Warga Berbudaya, Pembaca Buku Terlaris"
    },
    shortDescription: {
      ko: "\"유명한 건 읽어봤어요.\"",
      en: "\"I've read the famous ones.\"",
      ja: "「有名なのは読みました。」",
      'zh-CN': "\"我读过那些著名的。\"",
      'zh-TW': "「我讀過那些著名的。」",
      vi: "\"Tôi đã đọc những cuốn nổi tiếng.\"",
      id: "\"Saya sudah membaca yang terkenal.\""
    },
    description: {
      ko: "당신은 기본적인 문학 소양을 갖추고 있습니다. 학창 시절 필독 도서나 유명한 고전들은 어느 정도 꿰뚫고 있네요. 데미안이나 오만과 편견 같은 작품의 대략적인 줄거리는 알고 있습니다. 어디 가서 \"무식하다\"는 소리는 절대 듣지 않을 수준입니다.",
      en: "You have basic literary knowledge. You have a good grasp of required reading from school days and famous classics. You know the general plots of works like Demian or Pride and Prejudice. You'll never be called \"ignorant\" anywhere.",
      ja: "あなたは基本的な文学教養を身につけています。学生時代の必読書や有名な古典はある程度把握していますね。『デミアン』や『高慢と偏見』のような作品の大まかなあらすじは知っています。どこに行っても「無知だ」と言われることは絶対にないレベルです。",
      'zh-CN': "你拥有基本的文学素养。你对学生时代的必读书和著名经典有一定了解。你知道像《德米安》或《傲慢与偏见》这样作品的大致情节。无论走到哪里，你都不会被称为\"无知\"。",
      'zh-TW': "你擁有基本的文學素養。你對學生時代的必讀書和著名經典有一定了解。你知道像《徬徨少年時》或《傲慢與偏見》這樣作品的大致情節。無論走到哪裡，你都不會被稱為「無知」。",
      vi: "Bạn có kiến thức văn học cơ bản. Bạn nắm khá tốt các tác phẩm bắt buộc đọc thời đi học và các tác phẩm kinh điển nổi tiếng. Bạn biết cốt truyện đại khái của các tác phẩm như Demian hoặc Kiêu hãnh và định kiến. Bạn sẽ không bao giờ bị gọi là \"dốt nát\" ở bất cứ đâu.",
      id: "Anda memiliki pengetahuan sastra dasar. Anda memiliki pemahaman yang baik tentang bacaan wajib dari masa sekolah dan klasik terkenal. Anda tahu alur cerita umum dari karya-karya seperti Demian atau Pride and Prejudice. Anda tidak akan pernah disebut \"bodoh\" di mana pun."
    },
    correctCount: {
      ko: "5 ~ 6개",
      en: "5 ~ 6",
      ja: "5 ~ 6個",
      'zh-CN': "5 ~ 6个",
      'zh-TW': "5 ~ 6個",
      vi: "5 ~ 6",
      id: "5 ~ 6"
    },
    literatureLevel: {
      ko: "Lv. 40",
      en: "Lv. 40",
      ja: "Lv. 40",
      'zh-CN': "Lv. 40",
      'zh-TW': "Lv. 40",
      vi: "Lv. 40",
      id: "Lv. 40"
    },
    recommendation: {
      ko: "'민음사 세계문학전집' 도장 깨기 도전.",
      en: "Challenge yourself to complete the 'Minumsa World Literature Collection'.",
      ja: "「民音社世界文学全集」のスタンプ破りに挑戦。",
      'zh-CN': "挑战完成'民音社世界文学全集'。",
      'zh-TW': "挑戰完成「民音社世界文學全集」。",
      vi: "Thử thách bản thân hoàn thành 'Bộ sưu tập Văn học Thế giới Minumsa'.",
      id: "Tantang diri Anda untuk menyelesaikan 'Koleksi Sastra Dunia Minumsa'."
    }
  },
  {
    type: "Type4",
    emoji: "🧐",
    title: {
      ko: "문학 소년/소녀, 다독가 (Book Lover)",
      en: "Literature Boy/Girl, Book Lover",
      ja: "文学少年/少女、多読家（ブックラバー）",
      'zh-CN': "文学少年/少女，多读书的人（爱书人）",
      'zh-TW': "文學少年/少女，多讀書的人（愛書人）",
      vi: "Chàng Trai/Cô Gái Văn Học, Người Đọc Nhiều (Người Yêu Sách)",
      id: "Anak Laki/Perempuan Sastra, Pencinta Buku"
    },
    shortDescription: {
      ko: "\"책 냄새가 너무 좋아요.\"",
      en: "\"I love the smell of books.\"",
      ja: "「本の匂いが大好きです。」",
      'zh-CN': "\"我太喜欢书的味道了。\"",
      'zh-TW': "「我太喜歡書的味道了。」",
      vi: "\"Tôi yêu mùi sách.\"",
      id: "\"Saya suka bau buku.\""
    },
    description: {
      ko: "당신은 책 읽기를 진심으로 즐기는 독서가입니다. 꽤 난이도 있는 작품들의 작가도 정확히 기억하고 있군요. 카프카의 변신이나 조지 오웰의 1984 같은 작품의 주제 의식까지 이해하고 있을 확률이 높습니다. 친구들에게 책을 추천해 주는 역할을 합니다.",
      en: "You're a bookworm who genuinely enjoys reading. You accurately remember the authors of quite challenging works. You're likely to understand the thematic consciousness of works like Kafka's Metamorphosis or George Orwell's 1984. You play the role of recommending books to friends.",
      ja: "あなたは読書を心から楽しむ読書家です。かなり難易度の高い作品の作者も正確に覚えていますね。カフカの『変身』やジョージ・オーウェルの『1984』のような作品の主題意識まで理解している可能性が高いです。友達に本を推薦する役割を果たしています。",
      'zh-CN': "你是一个真正享受阅读的书虫。你准确地记住了相当有挑战性的作品的作者。你很可能会理解像卡夫卡的《变形记》或乔治·奥威尔的《1984》这样作品的主题意识。你扮演着向朋友推荐书籍的角色。",
      'zh-TW': "你是一個真正享受閱讀的書蟲。你準確地記住了相當有挑戰性的作品的作者。你可能會理解像卡夫卡的《變形記》或喬治·歐威爾的《1984》這樣作品的主題意識。你扮演著向朋友推薦書籍的角色。",
      vi: "Bạn là một người đọc sách thực sự thích đọc. Bạn nhớ chính xác các tác giả của những tác phẩm khá khó. Bạn có khả năng hiểu ý thức chủ đề của các tác phẩm như Hóa thân của Kafka hoặc 1984 của George Orwell. Bạn đóng vai trò giới thiệu sách cho bạn bè.",
      id: "Anda adalah kutu buku yang benar-benar menikmati membaca. Anda mengingat dengan akurat penulis karya-karya yang cukup menantang. Anda kemungkinan besar memahami kesadaran tematik dari karya-karya seperti Metamorfosis Kafka atau 1984 George Orwell. Anda memainkan peran merekomendasikan buku kepada teman-teman."
    },
    correctCount: {
      ko: "7 ~ 9개",
      en: "7 ~ 9",
      ja: "7 ~ 9個",
      'zh-CN': "7 ~ 9个",
      'zh-TW': "7 ~ 9個",
      vi: "7 ~ 9",
      id: "7 ~ 9"
    },
    literatureLevel: {
      ko: "Lv. 70",
      en: "Lv. 70",
      ja: "Lv. 70",
      'zh-CN': "Lv. 70",
      'zh-TW': "Lv. 70",
      vi: "Lv. 70",
      id: "Lv. 70"
    },
    recommendation: {
      ko: "독서 모임에 참여해 깊이 있는 토론 나누기.",
      en: "Join a book club and have in-depth discussions.",
      ja: "読書会に参加して深い議論を交わす。",
      'zh-CN': "参加读书会进行深入讨论。",
      'zh-TW': "參加讀書會進行深入討論。",
      vi: "Tham gia câu lạc bộ sách và có những cuộc thảo luận sâu sắc.",
      id: "Bergabung dengan klub buku dan diskusi mendalam."
    }
  },
  {
    type: "Type5",
    emoji: "📚",
    title: {
      ko: "걸어 다니는 도서관, 문학 덕후",
      en: "Walking Library, Literature Enthusiast",
      ja: "歩く図書館、文学オタク",
      'zh-CN': "行走的图书馆，文学爱好者",
      'zh-TW': "行走的圖書館，文學愛好者",
      vi: "Thư Viện Biết Đi, Người Đam Mê Văn Học",
      id: "Perpustakaan Berjalan, Penggemar Sastra"
    },
    shortDescription: {
      ko: "\"작가의 문체만 봐도 누군지 알죠.\"",
      en: "\"I can tell who it is just by the author's writing style.\"",
      ja: "「作者の文体だけ見ても誰か分かりますよ。」",
      'zh-CN': "\"只看作者的文风我就能知道是谁。\"",
      'zh-TW': "「只看作者的文風我就能知道是誰。」",
      vi: "\"Chỉ cần nhìn phong cách viết của tác giả là tôi biết ai rồi.\"",
      id: "\"Saya bisa tahu siapa itu hanya dengan melihat gaya menulis penulis.\""
    },
    description: {
      ko: "당신은 문학에 대한 깊은 애정과 지식을 가지고 있습니다. 러시아 문학이나 실존주의 문학 같은 어려운 분야도 섭렵했습니다. 작가의 삶과 시대적 배경까지 꿰뚫고 있는 당신은 진정한 지식인입니다. 서점에 가면 시간 가는 줄 모르는 타입이군요.",
      en: "You have deep affection and knowledge for literature. You've mastered difficult fields like Russian literature or existentialist literature. You're a true intellectual who understands authors' lives and historical backgrounds. You're the type who loses track of time when you go to a bookstore.",
      ja: "あなたは文学に対する深い愛情と知識を持っています。ロシア文学や実存主義文学のような難しい分野も習得しています。作者の人生や時代的背景まで把握しているあなたは真の知識人です。書店に行くと時間の経つのを忘れるタイプですね。",
      'zh-CN': "你对文学有着深厚的感情和知识。你已经掌握了像俄罗斯文学或存在主义文学这样困难的领域。你是一个真正的知识分子，了解作者的生活和时代背景。你是那种去书店就忘记时间流逝的类型。",
      'zh-TW': "你對文學有著深厚的感情和知識。你已經掌握了像俄羅斯文學或存在主義文學這樣困難的領域。你是一個真正的知識分子，了解作者的生活和時代背景。你是那種去書店就忘記時間流逝的類型。",
      vi: "Bạn có tình yêu và kiến thức sâu sắc về văn học. Bạn đã nắm vững các lĩnh vực khó như văn học Nga hoặc văn học hiện sinh. Bạn là một trí thức thực sự hiểu về cuộc sống của tác giả và bối cảnh lịch sử. Bạn là kiểu người quên mất thời gian khi đến hiệu sách.",
      id: "Anda memiliki kasih sayang dan pengetahuan yang mendalam tentang sastra. Anda telah menguasai bidang-bidang sulit seperti sastra Rusia atau sastra eksistensialis. Anda adalah intelektual sejati yang memahami kehidupan penulis dan latar belakang historis. Anda adalah tipe yang lupa waktu ketika pergi ke toko buku."
    },
    correctCount: {
      ko: "10 ~ 11개",
      en: "10 ~ 11",
      ja: "10 ~ 11個",
      'zh-CN': "10 ~ 11个",
      'zh-TW': "10 ~ 11個",
      vi: "10 ~ 11",
      id: "10 ~ 11"
    },
    literatureLevel: {
      ko: "Lv. 90",
      en: "Lv. 90",
      ja: "Lv. 90",
      'zh-CN': "Lv. 90",
      'zh-TW': "Lv. 90",
      vi: "Lv. 90",
      id: "Lv. 90"
    },
    recommendation: {
      ko: "직접 글을 써보는 건 어떨까요? 작가의 자질이 보입니다.",
      en: "How about writing yourself? I see the qualities of a writer in you.",
      ja: "自分で書いてみるのはどうですか？作家の資質が見えます。",
      'zh-CN': "自己写写看怎么样？我看到了作家的潜质。",
      'zh-TW': "自己寫寫看怎麼樣？我看到了作家的潛質。",
      vi: "Bạn có muốn tự mình viết không? Tôi thấy phẩm chất của một nhà văn trong bạn.",
      id: "Bagaimana kalau menulis sendiri? Saya melihat kualitas penulis dalam diri Anda."
    }
  },
  {
    type: "Type6",
    emoji: "🏆",
    title: {
      ko: "노벨 문학상 심사위원급, 마스터",
      en: "Nobel Prize in Literature Judge Level, Master",
      ja: "ノーベル文学賞審査員級、マスター",
      'zh-CN': "诺贝尔文学奖评委级别，大师",
      'zh-TW': "諾貝爾文學獎評委級別，大師",
      vi: "Cấp Độ Giám Khảo Giải Nobel Văn Học, Bậc Thầy",
      id: "Tingkat Juri Hadiah Nobel Sastra, Master"
    },
    shortDescription: {
      ko: "\"문학은 인생 그 자체입니다.\"",
      en: "\"Literature is life itself.\"",
      ja: "「文学は人生そのものです。」",
      'zh-CN': "\"文学就是人生本身。\"",
      'zh-TW': "「文學就是人生本身。」",
      vi: "\"Văn học chính là cuộc sống.\"",
      id: "\"Sastra adalah kehidupan itu sendiri.\""
    },
    description: {
      ko: "축하합니다! 만점입니다. 당신은 전 세계 문학사를 통달한 마스터입니다. 사소한 함정 문제도 가볍게 피해 가며 작가와 작품을 완벽하게 매칭했습니다. 국문과나 영문과 교수님, 혹은 문학 평론가 수준의 지식을 갖추고 계시군요. 존경합니다!",
      en: "Congratulations! Perfect score. You're a master who has mastered world literature history. You easily avoided minor trap questions and perfectly matched authors with their works. You have the knowledge level of a Korean or English literature professor, or a literary critic. I respect you!",
      ja: "おめでとうございます！満点です。あなたは世界文学史をマスターしたマスターです。些細な罠問題も軽々と回避し、作者と作品を完璧にマッチングしました。国文科や英文科の教授、あるいは文学評論家レベルの知識をお持ちですね。尊敬します！",
      'zh-CN': "恭喜！满分。你是一位精通世界文学史的大师。你轻松避开了小陷阱问题，完美地匹配了作者和作品。你拥有韩国文学或英语文学教授，或文学评论家水平的知识。我尊敬你！",
      'zh-TW': "恭喜！滿分。你是一位精通世界文學史的大師。你輕鬆避開了小陷阱問題，完美地匹配了作者和作品。你擁有韓國文學或英語文學教授，或文學評論家水準的知識。我尊敬你！",
      vi: "Chúc mừng! Điểm tuyệt đối. Bạn là một bậc thầy đã thông thạo lịch sử văn học thế giới. Bạn dễ dàng tránh các câu hỏi bẫy nhỏ và hoàn hảo kết hợp tác giả với tác phẩm của họ. Bạn có trình độ kiến thức của một giáo sư văn học Hàn Quốc hoặc Anh, hoặc một nhà phê bình văn học. Tôi kính trọng bạn!",
      id: "Selamat! Skor sempurna. Anda adalah master yang telah menguasai sejarah sastra dunia. Anda dengan mudah menghindari pertanyaan jebakan kecil dan dengan sempurna mencocokkan penulis dengan karya mereka. Anda memiliki tingkat pengetahuan profesor sastra Korea atau Inggris, atau kritikus sastra. Saya menghormati Anda!"
    },
    correctCount: {
      ko: "12개 (만점)",
      en: "12 (Perfect Score)",
      ja: "12個（満点）",
      'zh-CN': "12个（满分）",
      'zh-TW': "12個（滿分）",
      vi: "12 (Điểm Tuyệt Đối)",
      id: "12 (Skor Sempurna)"
    },
    literatureLevel: {
      ko: "Lv. 99 (MAX)",
      en: "Lv. 99 (MAX)",
      ja: "Lv. 99 (MAX)",
      'zh-CN': "Lv. 99 (MAX)",
      'zh-TW': "Lv. 99 (MAX)",
      vi: "Lv. 99 (MAX)",
      id: "Lv. 99 (MAX)"
    },
    recommendation: {
      ko: "당신의 서재를 구경하고 싶습니다.",
      en: "I'd like to see your library.",
      ja: "あなたの書斎を見てみたいです。",
      'zh-CN': "我想看看你的书房。",
      'zh-TW': "我想看看你的書房。",
      vi: "Tôi muốn xem thư viện của bạn.",
      id: "Saya ingin melihat perpustakaan Anda."
    }
  }
];

export function calculatePhase2LiteratureQuizResult(answers: Record<number, number>, questions: Phase2LiteratureQuizQuestion[]): string {
  let correctCount = 0;
  
  // answers는 원래 질문 인덱스를 키로, 선택한 옵션 인덱스를 값으로 가짐
  Object.keys(answers).forEach(originalIndexStr => {
    const originalIndex = parseInt(originalIndexStr);
    const selectedOption = answers[originalIndex];
    const question = questions[originalIndex];
    
    if (question && selectedOption === question.correctAnswer) {
      correctCount++;
    }
  });
  
  // 정답 개수에 따라 결과 결정
  if (correctCount >= 0 && correctCount <= 2) {
    return "Type1";
  } else if (correctCount >= 3 && correctCount <= 4) {
    return "Type2";
  } else if (correctCount >= 5 && correctCount <= 6) {
    return "Type3";
  } else if (correctCount >= 7 && correctCount <= 9) {
    return "Type4";
  } else if (correctCount >= 10 && correctCount <= 11) {
    return "Type5";
  } else if (correctCount === 12) {
    return "Type6";
  } else {
    // Fallback
    return "Type1";
  }
}
