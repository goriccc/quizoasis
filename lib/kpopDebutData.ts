export interface KpopDebutQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    scores: {
      Type1?: number;
      Type2?: number;
      Type3?: number;
      Type4?: number;
      Type5?: number;
    };
  }[];
}

export interface KpopDebutResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  position: Record<string, string>;
  agency: Record<string, string>;
  entryPoint: Record<string, string>;
}

// 질문 데이터 (한국어만 먼저 작성)
export const kpopDebutQuestions: KpopDebutQuestion[] = [
  {
    id: 1,
    question: {
      ko: "데뷔 조 편성을 위한 첫 평가 날, 당신의 마음가짐은?",
      en: "On the first evaluation day for debut team formation, what is your mindset?",
      ja: "デビュー組編成のための初評価の日、あなたの心構えは？",
      'zh-CN': "在出道组选拔的第一天，你的心态是什么？",
      'zh-TW': "在出道組選拔的第一天，你的心態是什麼？",
      vi: "Vào ngày đánh giá đầu tiên để thành lập nhóm debut, tâm thế của bạn là gì?",
      id: "Pada hari evaluasi pertama untuk pembentukan tim debut, apa mindset Anda?"
    },
    options: [
      {
        text: {
          ko: "\"무조건 1등 해서 데뷔해야지.\" 불타는 야망과 경쟁심.",
          en: "\"I must debut by ranking first.\" Burning ambition and competitiveness.",
          ja: "「絶対に1位でデビューしなければ。」燃えるような野心と競争心。",
          'zh-CN': "「必须拿到第一才能出道。」燃烧的野心和竞争心。",
          'zh-TW': "「必須拿到第一才能出道。」燃燒的野心和競爭心。",
          vi: "\"Phải đứng nhất để debut.\" Tham vọng và tinh thần cạnh tranh cháy bỏng.",
          id: "\"Harus debut dengan ranking pertama.\" Ambisi dan semangat kompetitif yang membara."
        },
        scores: { Type1: 1, Type3: 1 }
      },
      {
        text: {
          ko: "\"즐기면서 후회 없이 보여주자.\" 무대 자체에 대한 설렘.",
          en: "\"Let's enjoy and show without regrets.\" Excitement about the stage itself.",
          ja: "「楽しみながら後悔なく見せよう。」ステージそのものへのときめき。",
          'zh-CN': "「享受并毫无遗憾地展示。」对舞台本身的兴奋。",
          'zh-TW': "「享受並毫無遺憾地展示。」對舞台本身的興奮。",
          vi: "\"Hãy tận hưởng và thể hiện không hối tiếc.\" Sự phấn khích về sân khấu.",
          id: "「Mari nikmati dan tunjukkan tanpa penyesalan.」Kegembiraan tentang panggung itu sendiri."
        },
        scores: { Type2: 1, Type5: 1 }
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "연습실에서 가장 듣기 싫은 지적은?",
      en: "What criticism do you hate hearing most in the practice room?",
      ja: "練習室で最も聞きたくない指摘は？",
      'zh-CN': "在练习室里你最不想听到的批评是什么？",
      'zh-TW': "在練習室裡你最不想聽到的批評是什麼？",
      vi: "Lời chỉ trích nào bạn ghét nghe nhất trong phòng tập?",
      id: "Kritik apa yang paling tidak ingin Anda dengar di ruang latihan?"
    },
    options: [
      {
        text: {
          ko: "\"박자가 안 맞잖아. 더 연습해.\"",
          en: "\"Your rhythm is off. Practice more.\"",
          ja: "「リズムが合ってない。もっと練習して。」",
          'zh-CN': "「节奏不对。多练习。」",
          'zh-TW': "「節奏不對。多練習。」",
          vi: "\"Nhịp điệu không đúng. Tập thêm đi.\"",
          id: "\"Ritmenya tidak pas. Latihan lagi.\""
        },
        scores: { Type3: 1, Type4: 1 }
      },
      {
        text: {
          ko: "\"표정이 왜 그래? 끼 좀 부려봐.\"",
          en: "\"Why that expression? Show some charisma.\"",
          ja: "「表情がどうしたの？もっと個性を見せて。」",
          'zh-CN': "「表情怎么了？展现一些魅力。」",
          'zh-TW': "「表情怎麼了？展現一些魅力。」",
          vi: "\"Biểu cảm sao vậy? Thể hiện cá tính đi.\"",
          id: "\"Ekspresi kenapa begitu? Tunjukkan karisma.\""
        },
        scores: { Type2: 1, Type5: 1 }
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "그룹 내에서 내가 맡고 싶은 역할은?",
      en: "What role do you want to take in the group?",
      ja: "グループ内で自分が担いたい役割は？",
      'zh-CN': "在团队中你想承担什么角色？",
      'zh-TW': "在團隊中你想承擔什麼角色？",
      vi: "Bạn muốn đảm nhận vai trò gì trong nhóm?",
      id: "Peran apa yang ingin Anda ambil dalam grup?"
    },
    options: [
      {
        text: {
          ko: "멤버들을 다독이고 이끌어가는 든든한 멘토 역할.",
          en: "A reliable mentor role who comforts and leads the members.",
          ja: "メンバーを励まし導く頼もしいメンター役。",
          'zh-CN': "安慰和引导成员的可靠导师角色。",
          'zh-TW': "安慰和引導成員的可靠導師角色。",
          vi: "Vai trò người cố vấn đáng tin cậy, an ủi và dẫn dắt các thành viên.",
          id: "Peran mentor yang dapat diandalkan yang menghibur dan memimpin anggota."
        },
        scores: { Type1: 1 }
      },
      {
        text: {
          ko: "팀의 분위기를 띄우고 웃음을 주는 막내 같은 역할.",
          en: "A maknae-like role who lifts the team's mood and brings laughter.",
          ja: "チームの雰囲気を盛り上げ、笑いを届ける末っ子のような役割。",
          'zh-CN': "活跃团队气氛、带来笑声的老幺角色。",
          'zh-TW': "活躍團隊氣氛、帶來笑聲的老么角色。",
          vi: "Vai trò như em út, tạo không khí vui vẻ và mang lại tiếng cười cho đội.",
          id: "Peran seperti maknae yang mengangkat suasana tim dan membawa tawa."
        },
        scores: { Type5: 1 }
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "무대 위, 나에게 주어진 단독 10초 타임! 무엇을 보여줄까?",
      en: "On stage, I have a solo 10-second moment! What should I show?",
      ja: "ステージ上、私に与えられたソロ10秒！何を見せよう？",
      'zh-CN': "在舞台上，我得到了10秒独舞时间！应该展示什么？",
      'zh-TW': "在舞台上，我得到了10秒獨舞時間！應該展示什麼？",
      vi: "Trên sân khấu, tôi có 10 giây solo! Nên thể hiện gì?",
      id: "Di atas panggung, saya mendapat 10 detik solo! Apa yang harus ditampilkan?"
    },
    options: [
      {
        text: {
          ko: "소름 돋는 3단 고음이나 현란한 랩 스킬.",
          en: "Chilling 3-octave high note or flashy rap skills.",
          ja: "鳥肌が立つ3段階の高音や華麗なラップスキル。",
          'zh-CN': "令人起鸡皮疙瘩的三段高音或华丽的说唱技巧。",
          'zh-TW': "令人起雞皮疙瘩的三段高音或華麗的說唱技巧。",
          vi: "Nốt cao 3 quãng tám gây ớn lạnh hoặc kỹ năng rap ấn tượng.",
          id: "Nada tinggi 3 oktaf yang merinding atau skill rap yang mencolok."
        },
        scores: { Type3: 1, Type4: 1 }
      },
      {
        text: {
          ko: "치명적인 눈빛 연기와 춤선이 돋보이는 댄스 브레이크.",
          en: "Deadly eye-acting and a dance break that highlights dance lines.",
          ja: "致命的な眼差しの演技とダンスラインが際立つダンスブレイク。",
          'zh-CN': "致命的眼神演技和突出舞蹈线条的舞蹈片段。",
          'zh-TW': "致命的眼神演技和突出舞蹈線條的舞蹈片段。",
          vi: "Diễn xuất ánh mắt chết người và phần nhảy nổi bật đường nét.",
          id: "Akting tatapan mematikan dan dance break yang menonjolkan garis tarian."
        },
        scores: { Type2: 1, Type4: 1 }
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "팬들이 나를 좋아해 줬으면 하는 포인트는?",
      en: "What point do you want fans to like about you?",
      ja: "ファンに好きになってほしいポイントは？",
      'zh-CN': "你希望粉丝喜欢你哪一点？",
      'zh-TW': "你希望粉絲喜歡你哪一點？",
      vi: "Bạn muốn fan yêu thích điểm nào ở mình?",
      id: "Titik apa yang ingin Anda disukai oleh fans?"
    },
    options: [
      {
        text: {
          ko: "\"본업 천재! 실력 미쳤다.\" 능력에 대한 인정.",
          en: "\"Vocational genius! Amazing skills.\" Recognition of ability.",
          ja: "「本業の天才！実力がすごい。」能力への承認。",
          'zh-CN': "「本职天才！实力超强。」对能力的认可。",
          'zh-TW': "「本職天才！實力超強。」對能力的認可。",
          vi: "\"Thiên tài nghề nghiệp! Kỹ năng tuyệt vời.\" Sự công nhận về năng lực.",
          id: "\"Jenius profesional! Skill luar biasa.\" Pengakuan kemampuan."
        },
        scores: { Type1: 1, Type3: 1, Type4: 1 }
      },
      {
        text: {
          ko: "\"얼굴 천재! 존재 자체가 복지다.\" 비주얼과 매력 찬양.",
          en: "\"Visual genius! Your existence itself is a benefit.\" Praise for visuals and charm.",
          ja: "「顔の天才！存在そのものが福利だ。」ビジュアルと魅力の称賛。",
          'zh-CN': "「颜值天才！存在本身就是福利。」对视觉和魅力的赞美。",
          'zh-TW': "「顏值天才！存在本身就是福利。」對視覺和魅力的讚美。",
          vi: "\"Thiên tài ngoại hình! Sự tồn tại của bạn là phúc lợi.\" Ca ngợi ngoại hình và sức hút.",
          id: "\"Jenius visual! Keberadaan Anda sendiri adalah manfaat.\" Pujian untuk visual dan pesona."
        },
        scores: { Type2: 1, Type5: 1 }
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "음악 방송 엔딩 요정이 되었다! 당신의 포즈는?",
      en: "You became the ending fairy of a music show! What's your pose?",
      ja: "音楽番組のエンディング妖精になった！あなたのポーズは？",
      'zh-CN': "你成为了音乐节目的结尾精灵！你的姿势是什么？",
      'zh-TW': "你成為了音樂節目的結尾精靈！你的姿勢是什麼？",
      vi: "Bạn trở thành tiên nữ kết thúc của chương trình âm nhạc! Tư thế của bạn là gì?",
      id: "Anda menjadi peri ending acara musik! Pose Anda apa?"
    },
    options: [
      {
        text: {
          ko: "숨을 헐떡이며 카리스마 있는 눈빛 발사.",
          en: "Panting while shooting a charismatic gaze.",
          ja: "息を切らしながらカリスマのある眼差しを放つ。",
          'zh-CN': "喘着气，发出有魅力的眼神。",
          'zh-TW': "喘著氣，發出有魅力的眼神。",
          vi: "Thở hổn hển và phát ra ánh nhìn đầy cá tính.",
          id: "Terengah-engah sambil menembakkan tatapan karismatik."
        },
        scores: { Type4: 1 }
      },
      {
        text: {
          ko: "상큼하게 윙크를 날리며 손 키스.",
          en: "Freshly winking and blowing a kiss.",
          ja: "爽やかにウインクを飛ばし、ハンドキス。",
          'zh-CN': "清爽地眨眼并飞吻。",
          'zh-TW': "清爽地眨眼並飛吻。",
          vi: "Nhấp nháy mắt tươi tắn và thổi nụ hôn bằng tay.",
          id: "Mengedipkan mata segar dan meniup ciuman dengan tangan."
        },
        scores: { Type2: 1 }
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "멤버들과 의견 충돌이 생겼을 때 당신은?",
      en: "When conflicts arise with members, what do you do?",
      ja: "メンバーと意見が衝突したとき、あなたは？",
      'zh-CN': "当与成员发生意见冲突时，你会怎么做？",
      'zh-TW': "當與成員發生意見衝突時，你會怎麼做？",
      vi: "Khi xảy ra xung đột ý kiến với các thành viên, bạn làm gì?",
      id: "Ketika konflik pendapat terjadi dengan anggota, apa yang Anda lakukan?"
    },
    options: [
      {
        text: {
          ko: "\"일단 모여봐.\" 회의를 소집해 이성적으로 중재한다.",
          en: "\"Let's gather first.\" Call a meeting and mediate rationally.",
          ja: "「まず集まろう。」会議を招集し、理性的に仲裁する。",
          'zh-CN': "「先聚在一起。」召开会议并理性调解。",
          'zh-TW': "「先聚在一起。」召開會議並理性調解。",
          vi: "\"Hãy tụ tập trước đã.\" Tổ chức cuộc họp và hòa giải một cách hợp lý.",
          id: "\"Mari kumpul dulu.\" Mengadakan rapat dan menengahi secara rasional."
        },
        scores: { Type1: 1 }
      },
      {
        text: {
          ko: "\"맛있는 거 먹고 풀자!\" 분위기를 환기하며 유하게 넘긴다.",
          en: "\"Let's eat something delicious and resolve it!\" Lighten the mood and pass it over smoothly.",
          ja: "「美味しいもの食べて解決しよう！」雰囲気を和らげ、柔軟に乗り越える。",
          'zh-CN': "「吃点好吃的解决吧！」活跃气氛，轻松化解。",
          'zh-TW': "「吃點好吃的解決吧！」活躍氣氛，輕鬆化解。",
          vi: "\"Ăn gì ngon và giải quyết thôi!\" Tạo không khí vui vẻ và vượt qua nhẹ nhàng.",
          id: "\"Makan sesuatu yang enak dan selesaikan!\" Meringankan suasana dan melewatinya dengan halus."
        },
        scores: { Type5: 1 }
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "예능 프로그램에 나갔다! 당신의 활약상은?",
      en: "You appeared on a variety show! How do you perform?",
      ja: "バラエティ番組に出た！あなたの活躍は？",
      'zh-CN': "你参加了综艺节目！你的表现如何？",
      'zh-TW': "你參加了綜藝節目！你的表現如何？",
      vi: "Bạn xuất hiện trong chương trình giải trí! Bạn thể hiện như thế nào?",
      id: "Anda muncul di acara variety! Bagaimana performa Anda?"
    },
    options: [
      {
        text: {
          ko: "진행을 도우며 멤버들의 분량을 챙겨주는 MC 스타일.",
          en: "MC style helping with hosting and ensuring members get screen time.",
          ja: "進行を助け、メンバーの出番を確保するMCスタイル。",
          'zh-CN': "MC风格，帮助主持并确保成员有镜头。",
          'zh-TW': "MC風格，幫助主持並確保成員有鏡頭。",
          vi: "Phong cách MC, giúp dẫn chương trình và đảm bảo các thành viên có thời lượng.",
          id: "Gaya MC membantu hosting dan memastikan anggota mendapat screen time."
        },
        scores: { Type1: 1 }
      },
      {
        text: {
          ko: "엉뚱한 개인기나 몸개그로 짤을 생성하는 예능캐 스타일.",
          en: "Variety show character style creating memes with quirky talents or physical comedy.",
          ja: "とんでもない特技や身体ギャグでミームを生成するバラエティキャラスタイル。",
          'zh-CN': "综艺角色风格，用搞怪才艺或身体搞笑制造表情包。",
          'zh-TW': "綜藝角色風格，用搞怪才藝或身體搞笑製造表情包。",
          vi: "Phong cách nhân vật giải trí, tạo meme bằng tài năng kỳ lạ hoặc hài kịch thể chất.",
          id: "Gaya karakter variety show yang menciptakan meme dengan bakat aneh atau komedi fisik."
        },
        scores: { Type5: 1 }
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "데뷔 곡 컨셉을 고를 수 있다면?",
      en: "If you could choose your debut song concept?",
      ja: "デビュー曲のコンセプトを選べるとしたら？",
      'zh-CN': "如果你可以选择出道曲概念？",
      'zh-TW': "如果你可以選擇出道曲概念？",
      vi: "Nếu bạn có thể chọn concept bài hát debut?",
      id: "Jika Anda bisa memilih konsep lagu debut?"
    },
    options: [
      {
        text: {
          ko: "강렬한 비트, 제복, 칼군무가 돋보이는 '걸크러쉬/다크' 컨셉.",
          en: "A 'girl crush/dark' concept with intense beats, uniforms, and sharp choreography.",
          ja: "強烈なビート、制服、カッコいい振り付けが際立つ「ガールクラッシュ/ダーク」コンセプト。",
          'zh-CN': "强烈的节拍、制服、突出整齐编舞的「Girl Crush/暗黑」概念。",
          'zh-TW': "強烈的節拍、制服、突出整齊編舞的「Girl Crush/暗黑」概念。",
          vi: "Concept 'girl crush/dark' với nhịp điệu mạnh mẽ, đồng phục và vũ đạo sắc nét.",
          id: "Konsep 'girl crush/dark' dengan beat intens, seragam, dan koreografi tajam."
        },
        scores: { Type1: 1, Type4: 1 }
      },
      {
        text: {
          ko: "청량한 멜로디, 교복, 상큼한 미소가 돋보이는 '하이틴/청순' 컨셉.",
          en: "A 'teen/innocent' concept with refreshing melody, school uniforms, and bright smiles.",
          ja: "爽やかなメロディ、制服、爽やかな笑顔が際立つ「ティーン/清純」コンセプト。",
          'zh-CN': "清爽的旋律、校服、突出清新笑容的「青春/清纯」概念。",
          'zh-TW': "清爽的旋律、校服、突出清新笑容的「青春/清純」概念。",
          vi: "Concept 'teen/ngây thơ' với giai điệu tươi mát, đồng phục học sinh và nụ cười tươi sáng.",
          id: "Konsep 'teen/innocent' dengan melodi segar, seragam sekolah, dan senyuman cerah."
        },
        scores: { Type2: 1, Type3: 1 }
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "숙소 생활 중, 나는 어떤 멤버일까?",
      en: "During dorm life, what kind of member am I?",
      ja: "寮生活の中で、私はどんなメンバー？",
      'zh-CN': "在宿舍生活中，我是什么样的成员？",
      'zh-TW': "在宿舍生活中，我是什麼樣的成員？",
      vi: "Trong cuộc sống ký túc xá, tôi là thành viên như thế nào?",
      id: "Selama kehidupan asrama, anggota seperti apa saya?"
    },
    options: [
      {
        text: {
          ko: "청소 당번 정하고 규칙을 만드는 '잔소리꾼 엄마/아빠'.",
          en: "A 'nagging mom/dad' who assigns cleaning duties and makes rules.",
          ja: "掃除当番を決め、ルールを作る「お小言ママ/パパ」。",
          'zh-CN': "分配打扫任务并制定规则的「唠叨妈妈/爸爸」。",
          'zh-TW': "分配打掃任務並制定規則的「嘮叨媽媽/爸爸」。",
          vi: "Người 'mẹ/bố hay cằn nhằn' phân công việc dọn dẹp và đặt ra quy tắc.",
          id: "Seorang 'ibu/ayah yang cerewet' yang menetapkan tugas bersih-bersih dan membuat aturan."
        },
        scores: { Type1: 1 }
      },
      {
        text: {
          ko: "늦잠 자고 배달 음식 시키는 '자유로운 영혼'.",
          en: "A 'free spirit' who sleeps in and orders delivery food.",
          ja: "遅くまで寝て、デリバリーを注文する「自由な魂」。",
          'zh-CN': "睡懒觉并点外卖的「自由灵魂」。",
          'zh-TW': "睡懶覺並點外賣的「自由靈魂」。",
          vi: "Linh hồn tự do' ngủ nướng và gọi đồ ăn giao hàng.",
          id: "Jiwa bebas' yang tidur larut dan memesan makanan delivery."
        },
        scores: { Type2: 1, Type5: 1 }
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "무대에서 실수를 했을 때 대처법은?",
      en: "How do you handle mistakes on stage?",
      ja: "ステージでミスをしたときの対処法は？",
      'zh-CN': "在舞台上犯错时你如何处理？",
      'zh-TW': "在舞台上犯錯時你如何處理？",
      vi: "Bạn xử lý như thế nào khi mắc lỗi trên sân khấu?",
      id: "Bagaimana Anda menangani kesalahan di atas panggung?"
    },
    options: [
      {
        text: {
          ko: "전혀 티 내지 않고 뻔뻔하게 다음 동작을 이어간다.",
          en: "Continue to the next move shamelessly without showing any sign.",
          ja: "全く気づかれず、図々しく次の動きに続く。",
          'zh-CN': "完全不动声色，厚着脸皮继续下一个动作。",
          'zh-TW': "完全不動聲色，厚著臉皮繼續下一個動作。",
          vi: "Tiếp tục động tác tiếp theo một cách vô tư mà không để lộ dấu hiệu gì.",
          id: "Lanjutkan ke gerakan berikutnya dengan tidak tahu malu tanpa menunjukkan tanda apapun."
        },
        scores: { Type1: 1, Type4: 1 }
      },
      {
        text: {
          ko: "살짝 당황하지만 귀여운 웃음으로 무마한다.",
          en: "Slightly panicked but cover it up with a cute smile.",
          ja: "少し慌てるが、可愛い笑顔でごまかす。",
          'zh-CN': "有点慌张但用可爱的笑容掩盖。",
          'zh-TW': "有點慌張但用可愛的笑容掩蓋。",
          vi: "Hơi hoảng sợ nhưng che giấu bằng nụ cười dễ thương.",
          id: "Sedikit panik tapi menutupinya dengan senyuman lucu."
        },
        scores: { Type2: 1, Type5: 1 }
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "아이돌로서 나의 최종 목표는?",
      en: "What is my ultimate goal as an idol?",
      ja: "アイドルとしての私の最終目標は？",
      'zh-CN': "作为偶像，我的最终目标是什么？",
      'zh-TW': "作為偶像，我的最終目標是什麼？",
      vi: "Mục tiêu cuối cùng của tôi với tư cách là thần tượng là gì?",
      id: "Apa tujuan akhir saya sebagai idol?"
    },
    options: [
      {
        text: {
          ko: "빌보드 차트 진입! 음악으로 인정받는 아티스트.",
          en: "Enter the Billboard charts! An artist recognized for music.",
          ja: "ビルボードチャート入り！音楽で認められるアーティスト。",
          'zh-CN': "进入Billboard排行榜！以音乐获得认可的艺术家。",
          'zh-TW': "進入Billboard排行榜！以音樂獲得認可的藝術家。",
          vi: "Lọt vào bảng xếp hạng Billboard! Nghệ sĩ được công nhận về âm nhạc.",
          id: "Masuk chart Billboard! Artis yang diakui untuk musik."
        },
        scores: { Type1: 1, Type3: 1 }
      },
      {
        text: {
          ko: "CF, 드라마, 예능까지 섭렵하는 만능 엔터테이너.",
          en: "An all-round entertainer conquering CFs, dramas, and variety shows.",
          ja: "CF、ドラマ、バラエティまで制覇する万能エンターテイナー。",
          'zh-CN': "征服广告、电视剧、综艺的全能艺人。",
          'zh-TW': "征服廣告、電視劇、綜藝的全能藝人。",
          vi: "Nghệ sĩ đa năng chinh phục quảng cáo, phim truyền hình và chương trình giải trí.",
          id: "Entertainer serba bisa yang menaklukkan CF, drama, dan variety show."
        },
        scores: { Type2: 1, Type5: 1 }
      }
    ]
  }
];

// 결과 데이터 (한국어만 먼저 작성)
export const kpopDebutResults: KpopDebutResult[] = [
  {
    type: "Type1",
    emoji: "👑",
    title: {
      ko: "갓벽한 육각형 리더",
      en: "Perfect All-Rounder Leader",
      ja: "完璧なオールラウンダーリーダー",
      'zh-CN': "完美的全能型队长",
      'zh-TW': "完美的全能型隊長",
      vi: "Thủ lĩnh toàn năng hoàn hảo",
      id: "Pemimpin All-Rounder Sempurna"
    },
    shortDescription: {
      ko: "\"나만 믿고 따라와, 카리스마 통솔자\"",
      en: "\"Just trust and follow me, charismatic leader\"",
      ja: "「私を信じてついて来て、カリスマ統率者」",
      'zh-CN': "「相信我，跟着我，魅力领袖」",
      'zh-TW': "「相信我，跟著我，魅力領袖」",
      vi: "\"Chỉ cần tin và theo tôi, thủ lĩnh đầy cá tính\"",
      id: "\"Percaya dan ikuti saya, pemimpin karismatik\""
    },
    description: {
      ko: "당신은 뛰어난 실력은 물론, 멤버들을 아우르는 리더십까지 갖춘 사기 캐릭터입니다. 위기 상황에서도 침착하게 팀을 이끌며, 무대 위에서는 중심을 잡아줍니다. 팬들에게는 '믿고 보는 리더'로 불리며 절대적인 지지를 받습니다.",
      en: "You are an amazing character with outstanding skills and leadership that brings members together. You calmly lead the team even in crisis situations, and hold the center on stage. Fans call you a 'trustworthy leader' and give you absolute support.",
      ja: "あなたは優れた実力はもちろん、メンバーをまとめるリーダーシップまで備えたすごいキャラクターです。危機的状況でも冷静にチームを導き、ステージ上では中心を担います。ファンからは「信頼できるリーダー」と呼ばれ、絶対的な支持を受けます。",
      'zh-CN': "你是一个拥有出色实力和团结成员的领导力的出色角色。即使在危机情况下也能冷静地带领团队，在舞台上占据中心位置。粉丝称你为「值得信赖的队长」，给予绝对支持。",
      'zh-TW': "你是一個擁有出色實力和團結成員的領導力的出色角色。即使在危機情況下也能冷靜地帶領團隊，在舞台上佔據中心位置。粉絲稱你為「值得信賴的隊長」，給予絕對支持。",
      vi: "Bạn là nhân vật tuyệt vời với kỹ năng xuất sắc và khả năng lãnh đạo tập hợp các thành viên. Bạn dẫn dắt đội một cách bình tĩnh ngay cả trong tình huống khủng hoảng, và giữ vị trí trung tâm trên sân khấu. Fan gọi bạn là 'thủ lĩnh đáng tin cậy' và ủng hộ tuyệt đối.",
      id: "Anda adalah karakter luar biasa dengan keterampilan luar biasa dan kepemimpinan yang menyatukan anggota. Anda dengan tenang memimpin tim bahkan dalam situasi krisis, dan memegang pusat di atas panggung. Fans menyebut Anda 'pemimpin yang dapat dipercaya' dan memberikan dukungan absolut."
    },
    position: {
      ko: "리더, 올라운더 (보컬/댄스 다 됨)",
      en: "Leader, All-Rounder (Vocal/Dance all good)",
      ja: "リーダー、オールラウンダー（ボーカル/ダンス両方OK）",
      'zh-CN': "队长，全能型（唱歌/舞蹈都行）",
      'zh-TW': "隊長，全能型（唱歌/舞蹈都行）",
      vi: "Thủ lĩnh, Toàn năng (Hát/Nhảy đều tốt)",
      id: "Pemimpin, All-Rounder (Vokal/Dance semua bagus)"
    },
    agency: {
      ko: "실력파 아티스트들이 많은 대형 기획사",
      en: "Large agency with many skilled artists",
      ja: "実力派アーティストが多い大型企画会社",
      'zh-CN': "拥有众多实力派艺术家的大型公司",
      'zh-TW': "擁有眾多實力派藝術家的大型公司",
      vi: "Công ty lớn với nhiều nghệ sĩ tài năng",
      id: "Agensi besar dengan banyak artis berbakat"
    },
    entryPoint: {
      ko: "본업 존잘, 든든함, 가끔 보이는 허당미",
      en: "Professional excellence, reliability, occasional clumsiness",
      ja: "本業がすごい、頼もしい、たまに見せる天然さ",
      'zh-CN': "专业出色，可靠，偶尔的呆萌",
      'zh-TW': "專業出色，可靠，偶爾的呆萌",
      vi: "Xuất sắc chuyên nghiệp, đáng tin cậy, thỉnh thoảng hơi vụng về",
      id: "Keunggulan profesional, dapat diandalkan, kadang-kadang kikuk"
    }
  },
  {
    type: "Type2",
    emoji: "💖",
    title: {
      ko: "확신의 센터상, 비주얼 센터",
      en: "Confident Center, Visual Center",
      ja: "確信のセンター、ビジュアルセンター",
      'zh-CN': "自信的中心位，视觉中心",
      'zh-TW': "自信的中心位，視覺中心",
      vi: "Trung tâm tự tin, Trung tâm ngoại hình",
      id: "Center Percaya Diri, Visual Center"
    },
    shortDescription: {
      ko: "\"숨만 쉬어도 입덕, 모태 아이돌\"",
      en: "\"Just breathing makes fans fall in love, born idol\"",
      ja: "「息をするだけで入坑、生まれながらのアイドル」",
      'zh-CN': "「光是呼吸就能入坑，天生的偶像」",
      'zh-TW': "「光是呼吸就能入坑，天生的偶像」",
      vi: "\"Chỉ cần thở thôi cũng khiến fan yêu, thần tượng bẩm sinh\"",
      id: "\"Hanya bernapas saja membuat fans jatuh cinta, idol bawaan lahir\""
    },
    description: {
      ko: "당신은 태어날 때부터 아이돌 할 운명입니다. 무대에 서는 순간 모든 조명을 흡수하며, 시선을 뗄 수 없게 만드는 아우라가 있습니다. 실력도 중요하지만, 타고난 끼와 매력으로 팬들을 조련하는 능력이 탁월합니다.",
      en: "You were destined to be an idol from birth. The moment you step on stage, you absorb all the lighting and have an aura that makes it impossible to look away. Skills are important too, but your natural talent and charm make you excellent at captivating fans.",
      ja: "あなたは生まれたときからアイドルの運命です。ステージに立つ瞬間、すべての照明を吸収し、目を離せなくなるオーラがあります。実力も重要ですが、生まれ持った才能と魅力でファンを魅了する能力が卓越しています。",
      'zh-CN': "你从出生起就注定成为偶像。站在舞台上的瞬间，你吸收所有灯光，拥有让人无法移开视线的气场。实力也很重要，但你天生的才华和魅力让你在吸引粉丝方面表现出色。",
      'zh-TW': "你從出生起就註定成為偶像。站在舞台上的瞬間，你吸收所有燈光，擁有讓人無法移開視線的氣場。實力也很重要，但你天生的才華和魅力讓你在吸引粉絲方面表現出色。",
      vi: "Bạn được định mệnh trở thành thần tượng từ khi sinh ra. Khoảnh khắc bạn bước lên sân khấu, bạn hấp thụ tất cả ánh sáng và có một hào quang khiến không thể rời mắt. Kỹ năng cũng quan trọng, nhưng tài năng và sức hút bẩm sinh khiến bạn xuất sắc trong việc thu hút fan.",
      id: "Anda ditakdirkan menjadi idol sejak lahir. Saat Anda melangkah ke panggung, Anda menyerap semua pencahayaan dan memiliki aura yang membuat tidak mungkin untuk memalingkan pandangan. Keterampilan juga penting, tetapi bakat dan pesona alami Anda membuat Anda unggul dalam memikat fans."
    },
    position: {
      ko: "센터, 서브보컬, 비주얼",
      en: "Center, Sub-Vocal, Visual",
      ja: "センター、サブボーカル、ビジュアル",
      'zh-CN': "中心位，副主唱，视觉担当",
      'zh-TW': "中心位，副主唱，視覺擔當",
      vi: "Trung tâm, Phụ ca, Ngoại hình",
      id: "Center, Sub-Vokal, Visual"
    },
    agency: {
      ko: "비주얼과 스타성을 중시하는 트렌디한 기획사",
      en: "Trendy agency that values visuals and star quality",
      ja: "ビジュアルとスター性を重視するトレンディな企画会社",
      'zh-CN': "重视视觉和明星气质的时尚公司",
      'zh-TW': "重視視覺和明星氣質的時尚公司",
      vi: "Công ty thời thượng coi trọng ngoại hình và chất ngôi sao",
      id: "Agensi trendi yang menghargai visual dan kualitas bintang"
    },
    entryPoint: {
      ko: "미친 비주얼, 엔딩 요정, 팬 조련 스킬",
      en: "Amazing visuals, ending fairy, fan-captivating skills",
      ja: "すごいビジュアル、エンディング妖精、ファン魅了スキル",
      'zh-CN': "惊人的视觉，结尾精灵，粉丝吸引技能",
      'zh-TW': "驚人的視覺，結尾精靈，粉絲吸引技能",
      vi: "Ngoại hình tuyệt vời, tiên nữ kết thúc, kỹ năng thu hút fan",
      id: "Visual luar biasa, peri ending, skill memikat fans"
    }
  },
  {
    type: "Type3",
    emoji: "🎤",
    title: {
      ko: "성대 차력쇼, 메인보컬",
      en: "Vocal Powerhouse, Main Vocal",
      ja: "声帯の力技ショー、メインボーカル",
      'zh-CN': "声带力量秀，主唱",
      'zh-TW': "聲帶力量秀，主唱",
      vi: "Sức mạnh giọng hát, Giọng ca chính",
      id: "Kekuatan Vokal, Main Vokal"
    },
    shortDescription: {
      ko: "\"고막이 녹아내리는 천상의 목소리\"",
      en: "\"Heavenly voice that melts eardrums\"",
      ja: "「鼓膜が溶け落ちる天上の声」",
      'zh-CN': "「融化耳膜的天籁之音」",
      'zh-TW': "「融化耳膜的天籟之音」",
      vi: "\"Giọng hát thiên đường làm tan chảy màng nhĩ\"",
      id: "\"Suara surgawi yang melelehkan gendang telinga\""
    },
    description: {
      ko: "당신은 팀의 음악적 색깔을 결정하는 핵심 멤버입니다. 하이라이트 고음을 시원하게 질러줄 때 팬들은 카타르시스를 느낍니다. 평소엔 조용하다가도 마이크만 잡으면 돌변하는 반전 매력의 소유자입니다.",
      en: "You are a core member who determines the team's musical color. When you hit the highlight high note powerfully, fans feel catharsis. You're usually quiet, but the moment you grab the mic, you transform - the owner of reverse charm.",
      ja: "あなたはチームの音楽的な色を決定する核心メンバーです。ハイライトの高音を爽快に響かせるとき、ファンはカタルシスを感じます。普段は静かでも、マイクを握れば豹変する逆転魅力の持ち主です。",
      'zh-CN': "你是决定团队音乐色彩的核心成员。当你有力地唱出高音亮点时，粉丝会感到宣泄。你平时很安静，但一拿起麦克风就会转变——拥有反转魅力的人。",
      'zh-TW': "你是決定團隊音樂色彩的核心成員。當你有力地唱出高音亮點時，粉絲會感到宣洩。你平時很安靜，但一拿起麥克風就會轉變——擁有反轉魅力的人。",
      vi: "Bạn là thành viên cốt lõi quyết định màu sắc âm nhạc của đội. Khi bạn hát nốt cao mạnh mẽ, fan cảm thấy giải tỏa. Bạn thường im lặng, nhưng khi cầm mic, bạn biến đổi - chủ nhân của sức hút ngược.",
      id: "Anda adalah anggota inti yang menentukan warna musik tim. Ketika Anda menyanyikan nada tinggi dengan kuat, fans merasakan katarsis. Anda biasanya pendiam, tetapi saat memegang mic, Anda berubah - pemilik pesona terbalik."
    },
    position: {
      ko: "메인보컬",
      en: "Main Vocal",
      ja: "メインボーカル",
      'zh-CN': "主唱",
      'zh-TW': "主唱",
      vi: "Giọng ca chính",
      id: "Main Vokal"
    },
    agency: {
      ko: "음원 강자로 불리는 실력파 기획사",
      en: "Skilled agency known as music powerhouse",
      ja: "音源強者と呼ばれる実力派企画会社",
      'zh-CN': "被称为音源强者的实力派公司",
      'zh-TW': "被稱為音源強者的實力派公司",
      vi: "Công ty tài năng được gọi là cường quốc âm nhạc",
      id: "Agensi berbakat yang dikenal sebagai kekuatan musik"
    },
    entryPoint: {
      ko: "음색 깡패, 라이브 장인, 감성 보컬",
      en: "Unique vocal color, live performance master, emotional vocal",
      ja: "音色の強盗、ライブ職人、感性ボーカル",
      'zh-CN': "独特音色，现场大师，感性主唱",
      'zh-TW': "獨特音色，現場大師，感性主唱",
      vi: "Màu sắc giọng hát độc đáo, bậc thầy biểu diễn trực tiếp, giọng ca đầy cảm xúc",
      id: "Warna vokal unik, master live performance, vokal emosional"
    }
  },
  {
    type: "Type4",
    emoji: "🕺",
    title: {
      ko: "무대 찢는 춤신춤왕, 메인댄서",
      en: "Stage-Destroying Dance King, Main Dancer",
      ja: "ステージを引き裂くダンスの神様、メインダンサー",
      'zh-CN': "撕裂舞台的舞王，主舞",
      'zh-TW': "撕裂舞台的舞王，主舞",
      vi: "Vua nhảy phá sân khấu, Vũ công chính",
      id: "Raja Tari Penghancur Panggung, Main Dancer"
    },
    shortDescription: {
      ko: "\"관절이 따로 노는 인간 각도기\"",
      en: "\"Human protractor with joints moving separately\"",
      ja: "「関節が別々に動く人間分度器」",
      'zh-CN': "「关节独立运动的人形量角器」",
      'zh-TW': "「關節獨立運動的人形量角器」",
      vi: "\"Thước đo góc người với các khớp di chuyển riêng biệt\"",
      id: "\"Busur derajat manusia dengan sendi yang bergerak terpisah\""
    },
    description: {
      ko: "당신은 음악이 나오면 눈빛부터 변합니다. 칼군무의 중심을 잡고, 댄스 브레이크 타임에 독무를 추며 팬들을 열광시킵니다. 말보다는 몸으로 표현하는 것이 편하며, 무대 아래 순둥한 모습과의 갭차이가 매력입니다.",
      en: "The moment music plays, your eyes change first. You hold the center of sharp choreography, perform solo dances during dance breaks, and drive fans wild. You're more comfortable expressing with your body than words, and the gap between your fierce stage presence and gentle off-stage appearance is charming.",
      ja: "あなたは音楽が流れると、まず目つきが変わります。カッコいい振り付けの中心を担い、ダンスブレイクタイムにソロダンスを踊り、ファンを熱狂させます。言葉より体で表現する方が楽で、ステージ下の優しい姿とのギャップが魅力です。",
      'zh-CN': "音乐一响起，你的眼神首先改变。你占据整齐编舞的中心，在舞蹈片段时表演独舞，让粉丝疯狂。你更习惯用身体表达而不是言语，舞台上强烈的存在感与台下温柔模样的反差很有魅力。",
      'zh-TW': "音樂一響起，你的眼神首先改變。你佔據整齊編舞的中心，在舞蹈片段時表演獨舞，讓粉絲瘋狂。你更習慣用身體表達而不是言語，舞台上強烈的存在感與台下溫柔模樣的反差很有魅力。",
      vi: "Khoảnh khắc nhạc vang lên, ánh mắt bạn thay đổi trước tiên. Bạn nắm giữ trung tâm của vũ đạo sắc nét, biểu diễn solo trong phần nhảy, và khiến fan phát cuồng. Bạn thoải mái hơn khi thể hiện bằng cơ thể hơn là lời nói, và sự khác biệt giữa sự hiện diện mạnh mẽ trên sân khấu và vẻ ngoài dịu dàng ngoài sân khấu rất quyến rũ.",
      id: "Saat musik dimainkan, mata Anda berubah terlebih dahulu. Anda memegang pusat koreografi tajam, melakukan tarian solo selama dance break, dan membuat fans gila. Anda lebih nyaman mengekspresikan dengan tubuh daripada kata-kata, dan gap antara kehadiran panggung yang kuat dan penampilan lembut di luar panggung sangat menawan."
    },
    position: {
      ko: "메인댄서, 래퍼",
      en: "Main Dancer, Rapper",
      ja: "メインダンサー、ラッパー",
      'zh-CN': "主舞，说唱",
      'zh-TW': "主舞，說唱",
      vi: "Vũ công chính, Rapper",
      id: "Main Dancer, Rapper"
    },
    agency: {
      ko: "퍼포먼스가 강한 힙합 베이스 기획사",
      en: "Hip-hop based agency with strong performance",
      ja: "パフォーマンスが強いヒップホップベースの企画会社",
      'zh-CN': "以表演见长的嘻哈风格公司",
      'zh-TW': "以表演見長的嘻哈風格公司",
      vi: "Công ty hip-hop với màn trình diễn mạnh mẽ",
      id: "Agensi berbasis hip-hop dengan performa kuat"
    },
    entryPoint: {
      ko: "춤선, 카리스마, 무대 장악력",
      en: "Dance lines, charisma, stage presence",
      ja: "ダンスライン、カリスマ、ステージ支配力",
      'zh-CN': "舞蹈线条，魅力，舞台掌控力",
      'zh-TW': "舞蹈線條，魅力，舞台掌控力",
      vi: "Đường nét nhảy, cá tính, khả năng làm chủ sân khấu",
      id: "Garis tarian, karisma, kehadiran panggung"
    }
  },
  {
    type: "Type5",
    emoji: "🐥",
    title: {
      ko: "매력 화수분, 입덕요정 막내",
      en: "Charm Fountain, Fan-Entry Fairy Maknae",
      ja: "魅力の湧き水、入坑妖精の末っ子",
      'zh-CN': "魅力源泉，入坑精灵老幺",
      'zh-TW': "魅力源泉，入坑精靈老么",
      vi: "Nguồn sức hút, Tiên nữ thu hút fan em út",
      id: "Sumber Pesona, Peri Fan-Entry Maknae"
    },
    shortDescription: {
      ko: "\"출구 없는 매력, 팀의 활력소\"",
      en: "\"Endless charm, team's energy source\"",
      ja: "「出口のない魅力、チームの活力源」",
      'zh-CN': "「无尽的魅力，团队的活力源泉」",
      'zh-TW': "「無盡的魅力，團隊的活力源泉」",
      vi: "\"Sức hút vô tận, nguồn năng lượng của đội\"",
      id: "\"Pesona tak berujung, sumber energi tim\""
    },
    description: {
      ko: "당신은 팀 내에서 분위기 메이커를 담당합니다. 예능감, 애교, 엉뚱함으로 팬들을 '입덕'시키는 문지기 역할을 합니다. 언니/형들에게 사랑받는 막내 포지션이며, 해피 바이러스를 뿜어냅니다.",
      en: "You serve as the mood maker within the team. You play the role of a gatekeeper who makes fans 'fall in love' with your variety sense, aegyo, and quirkiness. You're in the maknae position loved by your older members, and you radiate happy virus.",
      ja: "あなたはチーム内で雰囲気メーカーを担当します。バラエティ感、愛嬌、とんでもなさでファンを「入坑」させる門番の役割をします。お姉さん/お兄さんたちに愛される末っ子ポジションであり、ハッピーバイラスを撒き散らします。",
      'zh-CN': "你在团队中担任气氛制造者。你扮演守门人的角色，用综艺感、撒娇和搞怪让粉丝「入坑」。你是被哥哥姐姐们宠爱的老幺，散发着快乐病毒。",
      'zh-TW': "你在團隊中擔任氣氛製造者。你扮演守門人的角色，用綜藝感、撒嬌和搞怪讓粉絲「入坑」。你是被哥哥姐姐們寵愛的老么，散發著快樂病毒。",
      vi: "Bạn đảm nhận vai trò tạo không khí trong đội. Bạn đóng vai trò người gác cổng khiến fan 'yêu thích' bằng khả năng giải trí, sự dễ thương và tính cách kỳ lạ. Bạn ở vị trí em út được các anh chị yêu thương, và tỏa ra virus hạnh phúc.",
      id: "Anda berfungsi sebagai pembuat suasana dalam tim. Anda memainkan peran penjaga gerbang yang membuat fans 'jatuh cinta' dengan sense variety, aegyo, dan keanehan Anda. Anda berada di posisi maknae yang dicintai oleh anggota yang lebih tua, dan Anda memancarkan virus bahagia."
    },
    position: {
      ko: "서브보컬, 예능 담당, 막내",
      en: "Sub-Vocal, Variety Show, Maknae",
      ja: "サブボーカル、バラエティ担当、末っ子",
      'zh-CN': "副主唱，综艺担当，老幺",
      'zh-TW': "副主唱，綜藝擔當，老么",
      vi: "Phụ ca, Giải trí, Em út",
      id: "Sub-Vokal, Variety Show, Maknae"
    },
    agency: {
      ko: "가족 같은 분위기의 친근한 기획사",
      en: "Friendly agency with family-like atmosphere",
      ja: "家族のような雰囲気の親しみやすい企画会社",
      'zh-CN': "拥有家庭般氛围的友好公司",
      'zh-TW': "擁有家庭般氛圍的友好公司",
      vi: "Công ty thân thiện với không khí như gia đình",
      id: "Agensi ramah dengan suasana seperti keluarga"
    },
    entryPoint: {
      ko: "비글미, 예능감, 관계성(케미) 요정",
      en: "Beagle charm, variety sense, chemistry fairy",
      ja: "ビーグル魅力、バラエティ感、関係性（ケミ）妖精",
      'zh-CN': "比格魅力，综艺感，化学反应精灵",
      'zh-TW': "比格魅力，綜藝感，化學反應精靈",
      vi: "Sức hút beagle, khả năng giải trí, tiên nữ hóa học",
      id: "Pesona beagle, sense variety, peri chemistry"
    }
  }
];

export function calculateKpopDebutResult(answers: any[]): string {
  const scores = { Type1: 0, Type2: 0, Type3: 0, Type4: 0, Type5: 0 };
  
  answers.forEach(answer => {
    Object.keys(answer).forEach(type => {
      if (scores[type as keyof typeof scores] !== undefined) {
        scores[type as keyof typeof scores] += answer[type] || 0;
      }
    });
  });
  
  // 최고 점수의 타입 반환
  const maxScore = Math.max(...Object.values(scores));
  const maxTypes = Object.keys(scores).filter(type => scores[type as keyof typeof scores] === maxScore);
  
  // 동점일 경우 우선순위: Type 2 > Type 5 > Type 1 > Type 3 > Type 4
  if (maxTypes.length > 1) {
    const priority = ['Type2', 'Type5', 'Type1', 'Type3', 'Type4'];
    for (const type of priority) {
      if (maxTypes.includes(type)) {
        return type;
      }
    }
  }
  
  return maxTypes[0] || "Type1";
}

