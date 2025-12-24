export interface Phase2SocialLevelQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    score: number; // A=0, B=1, C=2, D=3
  }[];
}

export interface Phase2SocialLevelResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  socialLevel: Record<string, string>; // "Lv. 1", "Lv. 10" 등
  characteristics: Record<string, string>; // 주요 특징
  goodMatch: Record<string, string>; // 환상의 짝꿍
  badMatch: Record<string, string>; // 환장의 짝꿍
}

export const phase2SocialLevelQuestions: Phase2SocialLevelQuestion[] = [
  {
    id: 1,
    question: {
      ko: "금요일 저녁, 아무 약속이 없다면?",
      en: "Friday evening, no plans?",
      ja: "金曜日の夜、予定がないなら？",
      'zh-CN': "周五晚上，如果没有任何计划？",
      'zh-TW': "週五晚上，如果沒有任何計劃？",
      vi: "Tối thứ Sáu, không có kế hoạch gì?",
      id: "Jumat malam, tidak ada rencana?"
    },
    options: [
      {
        text: {
          ko: "\"아싸! 개이득.\" 넷플릭스와 함께 행복한 혼자만의 시간",
          en: "\"Yes! Jackpot.\" Happy alone time with Netflix",
          ja: "\"やったー！大当たり。\" Netflixと一緒の幸せなひとりの時間",
          'zh-CN': "\"太好了！\"和Netflix一起的幸福独处时光",
          'zh-TW': "「太好了！」和Netflix一起的幸福獨處時光",
          vi: "\"Tuyệt vời!\" Thời gian một mình hạnh phúc với Netflix",
          id: "\"Yes! Jackpot.\" Waktu bahagia sendirian dengan Netflix"
        },
        score: 0 // A
      },
      {
        text: {
          ko: "\"좀 심심한가?\" 연락처를 뒤적거려 보지만 결국 집에 있는다",
          en: "\"A bit bored?\" Scroll through contacts but end up staying home",
          ja: "\"少し退屈かな？\" 連絡先を探してみるけど結局家にいる",
          'zh-CN': "\"有点无聊？\"翻翻联系人但最终还是待在家里",
          'zh-TW': "「有點無聊？」翻翻聯絡人但最終還是待在家裡",
          vi: "\"Hơi buồn chán?\" Lướt danh bạ nhưng cuối cùng vẫn ở nhà",
          id: "\"Sedikit bosan?\" Gulir kontak tapi akhirnya tetap di rumah"
        },
        score: 1 // B
      },
      {
        text: {
          ko: "\"나 오늘 한가해~\" 단톡방에 생존 신고를 하며 약속을 잡는다",
          en: "\"I'm free today~\" Post in group chat and make plans",
          ja: "\"今日時間あるよ〜\" グループチャットに生存報告をして約束を入れる",
          'zh-CN': "\"我今天有空~\"在群聊里发消息并安排计划",
          'zh-TW': "「我今天有空〜」在群聊裡發訊息並安排計劃",
          vi: "\"Hôm nay mình rảnh~\" Đăng trong nhóm chat và sắp xếp kế hoạch",
          id: "\"Saya bebas hari ini~\" Posting di grup chat dan membuat rencana"
        },
        score: 2 // C
      },
      {
        text: {
          ko: "\"이미 풀약속.\" 금요일에 집에 있는 건 죄악이다",
          en: "\"Already fully booked.\" Staying home on Friday is a sin",
          ja: "\"すでに予定満杯。\" 金曜日に家にいるのは罪だ",
          'zh-CN': "\"已经约满了。\"周五待在家里是罪过",
          'zh-TW': "「已經約滿了。」週五待在家裡是罪過",
          vi: "\"Đã kín lịch rồi.\" Ở nhà vào thứ Sáu là một tội lỗi",
          id: "\"Sudah penuh jadwal.\" Tinggal di rumah pada hari Jumat adalah dosa"
        },
        score: 3 // D
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "모르는 사람이 길을 물어본다면?",
      en: "If a stranger asks for directions?",
      ja: "見知らぬ人が道を尋ねてきたら？",
      'zh-CN': "如果陌生人问路？",
      'zh-TW': "如果陌生人問路？",
      vi: "Nếu người lạ hỏi đường?",
      id: "Jika orang asing bertanya arah?"
    },
    options: [
      {
        text: {
          ko: "(이어폰 꽂은 척) 못 들은 척 빠르게 지나간다",
          en: "(Pretend to have earbuds in) Pretend not to hear and quickly walk past",
          ja: "（イヤホンをしているふり）聞こえないふりをして素早く通り過ぎる",
          'zh-CN': "（假装戴着耳机）假装没听见快速走过",
          'zh-TW': "（假裝戴著耳機）假裝沒聽見快速走過",
          vi: "(Giả vờ đang đeo tai nghe) Giả vờ không nghe thấy và nhanh chóng bước qua",
          id: "(Berpura-pura memakai earbud) Berpura-pura tidak mendengar dan cepat berjalan lewat"
        },
        score: 0
      },
      {
        text: {
          ko: "\"어... 저기...\" 당황하며 손가락으로 방향만 가리킨다",
          en: "\"Um... there...\" Flustered, just point with finger",
          ja: "\"あの...そこ...\" 慌てながら指で方向だけ指す",
          'zh-CN': "\"嗯...那里...\"慌乱地只用手指指方向",
          'zh-TW': "「嗯...那裡...」慌亂地隻用手指指方向",
          vi: "\"Ờ... đằng kia...\" Bối rối, chỉ dùng ngón tay chỉ hướng",
          id: "\"Um... di sana...\" Bingung, hanya menunjuk dengan jari"
        },
        score: 1
      },
      {
        text: {
          ko: "\"아, 거기는요~\" 친절하게 설명해 주고 갈 길 간다",
          en: "\"Ah, that place~\" Kindly explain and go on your way",
          ja: "\"ああ、そこは〜\" 親切に説明して自分の道を進む",
          'zh-CN': "\"啊，那里~\"友善地解释后继续走自己的路",
          'zh-TW': "「啊，那裡〜」友善地解釋後繼續走自己的路",
          vi: "\"À, chỗ đó~\" Giải thích tử tế rồi tiếp tục đi",
          id: "\"Ah, tempat itu~\" Jelaskan dengan baik dan lanjutkan jalan"
        },
        score: 2
      },
      {
        text: {
          ko: "\"저도 그쪽 가는데 같이 가요!\" TMI 대잔치를 벌이며 동행한다",
          en: "\"I'm going that way too! Let's go together!\" Walk together sharing TMI",
          ja: "\"私もそっち行くから一緒に行こう！\" TMI大盛りで同行する",
          'zh-CN': "\"我也要去那边，一起走吧！\"一路同行并分享过多信息",
          'zh-TW': "「我也要去那邊，一起走吧！」一路同行並分享過多信息",
          vi: "\"Mình cũng đi hướng đó, đi cùng nhé!\" Đi cùng và chia sẻ quá nhiều thông tin cá nhân",
          id: "\"Saya juga ke arah sana! Mari pergi bersama!\" Berjalan bersama sambil berbagi TMI"
        },
        score: 3
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "엘리베이터에 탔는데 어색한 이웃과 단둘이 남았다.",
      en: "Got on the elevator and it's just you and an awkward neighbor.",
      ja: "エレベーターに乗ったら、気まずい隣人と二人きりになった。",
      'zh-CN': "上了电梯，只剩下你和尴尬的邻居。",
      'zh-TW': "上了電梯，隻剩下你和尷尬的鄰居。",
      vi: "Lên thang máy và chỉ còn bạn và một người hàng xóm khó xử.",
      id: "Naik lift dan hanya tinggal Anda dan tetangga yang canggung."
    },
    options: [
      {
        text: {
          ko: "핸드폰만 뚫어져라 쳐다보며 층수가 바뀌기만을 기다린다",
          en: "Stare intently at phone, just waiting for the floor to change",
          ja: "スマホをじっと見つめながら階数が変わるのを待つ",
          'zh-CN': "专注地盯着手机，只等着楼层变化",
          'zh-TW': "專注地盯著手機，隻等著樓層變化",
          vi: "Nhìn chằm chằm vào điện thoại, chỉ chờ tầng thay đổi",
          id: "Menatap ponsel dengan intens, hanya menunggu lantai berubah"
        },
        score: 0
      },
      {
        text: {
          ko: "가볍게 목례만 하고 구석에 서 있는다",
          en: "Lightly nod and stand in the corner",
          ja: "軽く会釈して隅に立つ",
          'zh-CN': "轻轻点头，站在角落",
          'zh-TW': "輕輕點頭，站在角落",
          vi: "Gật đầu nhẹ và đứng ở góc",
          id: "Anggukkan kepala ringan dan berdiri di sudut"
        },
        score: 1
      },
      {
        text: {
          ko: "\"오늘 날씨가 춥죠?\" 가벼운 스몰토크를 시도한다",
          en: "\"It's cold today, right?\" Try some light small talk",
          ja: "\"今日寒いですね？\" 軽い雑談を試みる",
          'zh-CN': "\"今天很冷吧？\"尝试轻松的闲聊",
          'zh-TW': "「今天很冷吧？」嘗試輕鬆的閒聊",
          vi: "\"Hôm nay lạnh nhỉ?\" Thử một chút trò chuyện nhẹ nhàng",
          id: "\"Hari ini dingin, kan?\" Mencoba obrolan ringan"
        },
        score: 2
      },
      {
        text: {
          ko: "\"장 보고 오시나 봐요? 저녁 메뉴 뭐예요?\" 수다의 장을 연다",
          en: "\"Coming back from shopping? What's for dinner?\" Start chatting",
          ja: "\"お買い物からですか？夕食は何にします？\" おしゃべりを始める",
          'zh-CN': "\"去购物了吗？晚饭吃什么？\"开始聊天",
          'zh-TW': "「去購物了嗎？晚飯吃什麼？」開始聊天",
          vi: "\"Đi mua sắm à? Tối nay ăn gì?\" Bắt đầu trò chuyện",
          id: "\"Baru pulang belanja? Makan malam apa?\" Mulai mengobrol"
        },
        score: 3
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "노래방에 갔다! 당신의 포지션은?",
      en: "Went to karaoke! What's your position?",
      ja: "カラオケに行った！あなたのポジションは？",
      'zh-CN': "去KTV了！你的位置是？",
      'zh-TW': "去KTV了！你的位置是？",
      vi: "Đi karaoke! Vị trí của bạn là gì?",
      id: "Pergi ke karaoke! Apa posisi Anda?"
    },
    options: [
      {
        text: {
          ko: "구석에서 탬버린만 치거나 남들 노래 듣기만 한다",
          en: "Stay in corner clapping tambourine or just listen to others sing",
          ja: "隅でタンバリンを叩くか、他の人の歌を聞くだけ",
          'zh-CN': "在角落打手鼓或只听别人唱歌",
          'zh-TW': "在角落打手鼓或隻聽別人唱歌",
          vi: "Ở góc chỉ đánh tambourine hoặc chỉ nghe người khác hát",
          id: "Berdiri di sudut memainkan tamborin atau hanya mendengarkan orang lain bernyanyi"
        },
        score: 0
      },
      {
        text: {
          ko: "발라드나 조용한 노래 한두 곡 부르고 만족한다",
          en: "Sing one or two ballads or quiet songs and be satisfied",
          ja: "バラードや静かな歌を1、2曲歌って満足する",
          'zh-CN': "唱一两首民谣或安静的歌曲就满足了",
          'zh-TW': "唱一兩首民謠或安靜的歌曲就滿足了",
          vi: "Hát một hai bài ballad hoặc bài nhạc nhẹ và hài lòng",
          id: "Menyanyikan satu atau dua lagu ballad atau lagu tenang dan puas"
        },
        score: 1
      },
      {
        text: {
          ko: "유행하는 댄스곡을 부르며 분위기를 띄운다",
          en: "Sing trendy dance songs and lift the mood",
          ja: "流行りのダンス曲を歌って雰囲気を盛り上げる",
          'zh-CN': "唱流行舞曲活跃气氛",
          'zh-TW': "唱流行舞曲活躍氣氛",
          vi: "Hát các bài nhạc dance thịnh hành và làm không khí sôi động",
          id: "Menyanyikan lagu dansa trendi dan mengangkat suasana"
        },
        score: 2
      },
      {
        text: {
          ko: "테이블 위에 올라가서 춤추고 마이크를 놓지 않는다",
          en: "Get on the table, dance, and never let go of the mic",
          ja: "テーブルの上に乗って踊り、マイクを手放さない",
          'zh-CN': "跳到桌子上跳舞，不放下麦克风",
          'zh-TW': "跳到桌子上跳舞，不放下麥克風",
          vi: "Nhảy lên bàn, nhảy múa và không bao giờ rời tay khỏi mic",
          id: "Naik ke meja, menari, dan tidak pernah melepaskan mikrofon"
        },
        score: 3
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "미용실 직원이 말을 계속 걸 때?",
      en: "When the salon staff keeps talking?",
      ja: "美容室のスタッフが話しかけ続けるとき？",
      'zh-CN': "当美容院员工不停地说话时？",
      'zh-TW': "當美容院員工不停地說話時？",
      vi: "Khi nhân viên tiệm làm đẹp cứ tiếp tục nói chuyện?",
      id: "Ketika staf salon terus berbicara?"
    },
    options: [
      {
        text: {
          ko: "단답형으로 대답하며 자는 척 눈을 감는다",
          en: "Answer briefly and pretend to sleep by closing eyes",
          ja: "短答型で答えながら、眠ったふりをして目を閉じる",
          'zh-CN': "简短回答并假装睡觉闭上眼睛",
          'zh-TW': "簡短回答並假裝睡覺閉上眼睛",
          vi: "Trả lời ngắn gọn và giả vờ ngủ bằng cách nhắm mắt",
          id: "Jawab singkat dan berpura-pura tidur dengan menutup mata"
        },
        score: 0
      },
      {
        text: {
          ko: "어색하게 웃으며 대답은 해주지만 속으론 기 빨린다",
          en: "Awkwardly smile and answer but feel drained inside",
          ja: "気まずく笑いながら答えるけど、内心は気が抜ける",
          'zh-CN': "尴尬地笑着回答，但内心很累",
          'zh-TW': "尷尬地笑著回答，但內心很累",
          vi: "Cười một cách khó xử và trả lời nhưng cảm thấy kiệt sức bên trong",
          id: "Tersenyum canggung dan menjawab tapi merasa lelah di dalam"
        },
        score: 1
      },
      {
        text: {
          ko: "적당히 맞장구치며 대화를 이어간다",
          en: "Appropriately respond and continue the conversation",
          ja: "適度に相槌を打ちながら会話を続ける",
          'zh-CN': "适当地回应并继续对话",
          'zh-TW': "適當地回應並繼續對話",
          vi: "Phản ứng phù hợp và tiếp tục cuộc trò chuyện",
          id: "Merespons dengan tepat dan melanjutkan percakapan"
        },
        score: 2
      },
      {
        text: {
          ko: "직원 언니/오빠랑 인스타 맞팔하고 인생 고민 상담까지 한다",
          en: "Follow each other on Instagram with staff and even consult about life problems",
          ja: "スタッフのお姉さん/お兄さんとインスタで相互フォローして人生相談までする",
          'zh-CN': "和员工互相在Instagram关注，甚至还咨询人生烦恼",
          'zh-TW': "和員工互相在Instagram關注，甚至還諮詢人生煩惱",
          vi: "Theo dõi nhau trên Instagram với nhân viên và thậm chí tư vấn về vấn đề cuộc sống",
          id: "Saling follow di Instagram dengan staf dan bahkan konsultasi masalah kehidupan"
        },
        score: 3
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "단체 모임에서 자기소개를 해야 한다면?",
      en: "If you have to introduce yourself at a group gathering?",
      ja: "団体の集まりで自己紹介をしなければならないなら？",
      'zh-CN': "如果在团体聚会上必须自我介绍？",
      'zh-TW': "如果在團體聚會上必須自我介紹？",
      vi: "Nếu bạn phải giới thiệu bản thân trong một buổi họp nhóm?",
      id: "Jika Anda harus memperkenalkan diri di pertemuan kelompok?"
    },
    options: [
      {
        text: {
          ko: "\"안녕하세요... (이름)\" 최대한 짧게 끝내고 앉는다",
          en: "\"Hello... (name)\" Finish as briefly as possible and sit down",
          ja: "\"こんにちは...（名前）\" できるだけ短く終えて座る",
          'zh-CN': "\"你好...（姓名）\"尽可能简短地结束然后坐下",
          'zh-TW': "「你好...（姓名）」盡可能簡短地結束然後坐下",
          vi: "\"Xin chào... (tên)\" Kết thúc càng ngắn càng tốt và ngồi xuống",
          id: "\"Halo... (nama)\" Selesaikan sesingkat mungkin dan duduk"
        },
        score: 0
      },
      {
        text: {
          ko: "준비한 멘트를 더듬거리며 말하고 얼굴이 빨개진다",
          en: "Stutter through prepared lines and face turns red",
          ja: "準備したメッセージをどもりながら言って顔が赤くなる",
          'zh-CN': "结结巴巴地说准备好的话，脸红了",
          'zh-TW': "結結巴巴地說準備好的話，臉紅了",
          vi: "Nói lắp bắp những gì đã chuẩn bị và mặt đỏ lên",
          id: "Gagap melalui kalimat yang sudah disiapkan dan wajah memerah"
        },
        score: 1
      },
      {
        text: {
          ko: "또박또박 내 장점을 어필하며 깔끔하게 소개한다",
          en: "Clearly introduce yourself highlighting your strengths",
          ja: "はっきりと自分の長所をアピールしながらきれいに紹介する",
          'zh-CN': "清晰地介绍自己，突出自己的优点",
          'zh-TW': "清晰地介紹自己，突出自己的優點",
          vi: "Giới thiệu rõ ràng bản thân, làm nổi bật điểm mạnh",
          id: "Perkenalkan diri dengan jelas sambil menyoroti kekuatan Anda"
        },
        score: 2
      },
      {
        text: {
          ko: "성대모사나 개인기를 섞어 좌중을 폭소케 한다",
          en: "Mix in impressions or talents to make everyone burst into laughter",
          ja: "ものまねや特技を混ぜて座中を爆笑させる",
          'zh-CN': "加入模仿或才艺让全场爆笑",
          'zh-TW': "加入模仿或才藝讓全場爆笑",
          vi: "Trộn lẫn giọng bắt chước hoặc tài năng để làm mọi người bật cười",
          id: "Campurkan kesan atau bakat untuk membuat semua orang tertawa terbahak-bahak"
        },
        score: 3
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "친구가 친구를 데려와도 되냐고 물었다.",
      en: "Friend asked if they can bring their friend.",
      ja: "友達が友達を連れてきてもいいかと尋ねた。",
      'zh-CN': "朋友问能否带他们的朋友来。",
      'zh-TW': "朋友問能否帶他們的朋友來。",
      vi: "Bạn hỏi liệu họ có thể mang bạn của họ đến không.",
      id: "Teman bertanya apakah mereka bisa membawa teman mereka."
    },
    options: [
      {
        text: {
          ko: "\"아... 오늘은 좀 그런데...\" 낯가림 때문에 거절한다",
          en: "\"Um... today's a bit...\" Refuse because of shyness",
          ja: "\"あの...今日はちょっと...\" 人見知りのために断る",
          'zh-CN': "\"嗯...今天有点...\"因为害羞而拒绝",
          'zh-TW': "「嗯...今天有點...」因為害羞而拒絕",
          vi: "\"Ờ... hôm nay hơi...\" Từ chối vì nhút nhát",
          id: "\"Um... hari ini agak...\" Menolak karena malu"
        },
        score: 0
      },
      {
        text: {
          ko: "\"어? 그래...\" 불편하지만 어쩔 수 없이 허락한다",
          en: "\"Huh? Sure...\" Uncomfortable but can't help but allow it",
          ja: "\"え？そう...\" 不快だけど仕方なく許可する",
          'zh-CN': "\"嗯？好吧...\"不舒服但不得不允许",
          'zh-TW': "「嗯？好吧...」不舒服但不得不允許",
          vi: "\"Ờ? Được...\" Khó chịu nhưng không thể không đồng ý",
          id: "\"Huh? Baiklah...\" Tidak nyaman tapi terpaksa mengizinkan"
        },
        score: 1
      },
      {
        text: {
          ko: "\"오 좋아! 누구야?\" 새로운 만남에 호기심을 갖는다",
          en: "\"Oh great! Who is it?\" Curious about the new meeting",
          ja: "\"おお、いいね！誰？\" 新しい出会いに好奇心を持つ",
          'zh-CN': "\"太好了！是谁？\"对新见面感到好奇",
          'zh-TW': "「太好了！是誰？」對新見面感到好奇",
          vi: "\"Ồ tốt! Là ai vậy?\" Tò mò về cuộc gặp mới",
          id: "\"Oh bagus! Siapa?\" Penasaran dengan pertemuan baru"
        },
        score: 2
      },
      {
        text: {
          ko: "\"대환영! 다 부르자!\" 사람이 많을수록 즐겁다",
          en: "\"Welcome! Let's invite everyone!\" More people, more fun",
          ja: "\"大歓迎！みんな呼ぼう！\" 人が多いほど楽しい",
          'zh-CN': "\"非常欢迎！都叫来吧！\"人越多越开心",
          'zh-TW': "「非常歡迎！都叫來吧！」人越多越開心",
          vi: "\"Chào mừng! Gọi tất cả đi!\" Càng nhiều người càng vui",
          id: "\"Selamat datang! Ayo ajak semua!\" Semakin banyak orang semakin menyenangkan"
        },
        score: 3
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "길을 가다 넘어졌다! 사람들이 쳐다본다.",
      en: "Fell down while walking! People are staring.",
      ja: "歩いているときに転んだ！人々がじっと見ている。",
      'zh-CN': "走路时摔倒了！人们在盯着看。",
      'zh-TW': "走路時摔倒了！人們在盯著看。",
      vi: "Ngã khi đang đi! Mọi người đang nhìn.",
      id: "Jatuh saat berjalan! Orang-orang menatap."
    },
    options: [
      {
        text: {
          ko: "빛의 속도로 일어나서 아무 일 없던 척 도망간다",
          en: "Get up at light speed and run away pretending nothing happened",
          ja: "光の速さで立ち上がって何もなかったふりをして逃げる",
          'zh-CN': "以光速站起来假装什么都没发生然后逃跑",
          'zh-TW': "以光速站起來假裝什麼都沒發生然後逃跑",
          vi: "Đứng dậy với tốc độ ánh sáng và chạy đi giả vờ như không có gì xảy ra",
          id: "Bangun dengan kecepatan cahaya dan lari berpura-pura tidak ada yang terjadi"
        },
        score: 0
      },
      {
        text: {
          ko: "아픔보다 쪽팔림이 더 크다. 고개를 푹 숙인다",
          en: "Embarrassment is worse than pain. Bury head down",
          ja: "痛みより恥ずかしさの方が大きい。頭を深く下げる",
          'zh-CN': "尴尬比疼痛更严重。深深低下头",
          'zh-TW': "尷尬比疼痛更嚴重。深深低下頭",
          vi: "Xấu hổ hơn đau. Cúi đầu xuống",
          id: "Malu lebih buruk daripada sakit. Membenamkan kepala"
        },
        score: 1
      },
      {
        text: {
          ko: "\"아이고야~\" 털털하게 웃으며 털고 일어난다",
          en: "\"Oh my~\" Laugh it off casually, brush off, and get up",
          ja: "\"あらら〜\" さっぱりと笑って払って立ち上がる",
          'zh-CN': "\"哎呀~\"轻松地笑着拍掉灰尘站起来",
          'zh-TW': "「哎呀〜」輕鬆地笑著拍掉灰塵站起來",
          vi: "\"Ôi trời~\" Cười một cách thoải mái, phủi bụi và đứng dậy",
          id: "\"Oh my~\" Tertawa dengan santai, menyeka, dan bangun"
        },
        score: 2
      },
      {
        text: {
          ko: "\"방금 제 슬랩스틱 보셨나요?\" 주변 사람들에게 너스레를 떤다",
          en: "\"Did you see my slapstick just now?\" Joke around with people nearby",
          ja: "\"今の私のスラップスティック見ました？\" 周りの人に冗談を言う",
          'zh-CN': "\"你们看到我刚才的滑稽表演了吗？\"和周围的人开玩笑",
          'zh-TW': "「你們看到我剛才的滑稽表演了嗎？」和周圍的人開玩笑",
          vi: "\"Các bạn có thấy màn hài kịch của tôi vừa rồi không?\" Đùa với những người xung quanh",
          id: "\"Apakah Anda melihat slapstick saya tadi?\" Bercanda dengan orang di sekitar"
        },
        score: 3
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "핸드폰 배터리가 1% 남았는데 밖이다.",
      en: "Phone battery is at 1% and you're outside.",
      ja: "スマホのバッテリーが1%なのに外にいる。",
      'zh-CN': "手机电池只剩1%但你在外面。",
      'zh-TW': "手機電池隻剩1%但你在外面。",
      vi: "Pin điện thoại còn 1% và bạn đang ở ngoài.",
      id: "Baterai ponsel 1% dan Anda di luar."
    },
    options: [
      {
        text: {
          ko: "꺼지면 꺼지는 거지. 불안하지만 그냥 집에 간다",
          en: "If it dies, it dies. Anxious but just go home",
          ja: "切れたら切れたで。不安だけどそのまま帰る",
          'zh-CN': "没电就没电吧。不安但还是直接回家",
          'zh-TW': "沒電就沒電吧。不安但還是直接回家",
          vi: "Tắt thì tắt vậy. Lo lắng nhưng cứ về nhà",
          id: "Kalau mati ya mati. Cemas tapi langsung pulang"
        },
        score: 0
      },
      {
        text: {
          ko: "편의점에 들어가서 충전기를 급하게 산다",
          en: "Rush into convenience store and buy a charger",
          ja: "コンビニに駆け込んで充電器を急いで買う",
          'zh-CN': "冲进便利店匆忙买充电器",
          'zh-TW': "衝進便利店匆忙買充電器",
          vi: "Chạy vào cửa hàng tiện lợi và mua cáp sạc gấp",
          id: "Berlari ke minimarket dan buru-buru beli charger"
        },
        score: 1
      },
      {
        text: {
          ko: "카페 직원에게 충전을 정중하게 부탁한다",
          en: "Politely ask café staff to charge it",
          ja: "カフェのスタッフに充電を丁寧に頼む",
          'zh-CN': "礼貌地请求咖啡店员工充电",
          'zh-TW': "禮貌地請求咖啡店員工充電",
          vi: "Lịch sự nhờ nhân viên quán cà phê sạc",
          id: "Meminta dengan sopan kepada staf kafe untuk mengisi daya"
        },
        score: 2
      },
      {
        text: {
          ko: "지나가는 사람 아무나 붙잡고 보조배터리를 빌린다",
          en: "Stop any passerby and borrow a power bank",
          ja: "通りすがりの人を誰でも捕まえてモバイルバッテリーを借りる",
          'zh-CN': "拦住任何路过的人借充电宝",
          'zh-TW': "攔住任何路過的人借充電寶",
          vi: "Bắt bất kỳ người đi đường nào và mượn pin dự phòng",
          id: "Menghentikan orang yang lewat dan meminjam power bank"
        },
        score: 3
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "SNS(인스타그램 등) 활동 스타일은?",
      en: "What's your SNS (Instagram etc.) activity style?",
      ja: "SNS（Instagramなど）の活動スタイルは？",
      'zh-CN': "你的SNS（Instagram等）活动风格是？",
      'zh-TW': "你的SNS（Instagram等）活動風格是？",
      vi: "Phong cách hoạt động trên SNS (Instagram, v.v.) của bạn là gì?",
      id: "Apa gaya aktivitas SNS (Instagram dll) Anda?"
    },
    options: [
      {
        text: {
          ko: "계정 없음. 혹은 눈팅용 비공개 계정",
          en: "No account. Or private account for lurking",
          ja: "アカウントなし。または閲覧専用の非公開アカウント",
          'zh-CN': "没有账号。或者用于浏览的私密账号",
          'zh-TW': "沒有帳號。或者用於瀏覽的私密帳號",
          vi: "Không có tài khoản. Hoặc tài khoản riêng tư chỉ để xem",
          id: "Tidak ada akun. Atau akun privat untuk melihat saja"
        },
        score: 0
      },
      {
        text: {
          ko: "게시물은 거의 없고 스토리만 가끔 올린다",
          en: "Rarely post, only upload stories occasionally",
          ja: "投稿はほとんどなく、ストーリーだけ時々上げる",
          'zh-CN': "几乎不发帖，只是偶尔上传动态",
          'zh-TW': "幾乎不發帖，隻是偶爾上傳動態",
          vi: "Hiếm khi đăng bài, chỉ thỉnh thoảng đăng story",
          id: "Jarang posting, hanya sesekali upload story"
        },
        score: 1
      },
      {
        text: {
          ko: "맛집, 여행 사진 등을 주기적으로 업로드하고 소통한다",
          en: "Regularly upload food spots, travel photos and interact",
          ja: "グルメ、旅行写真などを定期的にアップロードして交流する",
          'zh-CN': "定期上传美食、旅行照片并互动",
          'zh-TW': "定期上傳美食、旅行照片並互動",
          vi: "Đăng tải đều đặn ảnh quán ăn, du lịch và tương tác",
          id: "Secara teratur upload foto tempat makan, perjalanan dan berinteraksi"
        },
        score: 2
      },
      {
        text: {
          ko: "1일 10스토리 기본, 라이브 방송까지 켠다",
          en: "10 stories per day minimum, even go live",
          ja: "1日10ストーリー基本、ライブ配信までする",
          'zh-CN': "每天至少10条动态，甚至开直播",
          'zh-TW': "每天至少10條動態，甚至開直播",
          vi: "Tối thiểu 10 story mỗi ngày, thậm chí còn live stream",
          id: "Minimal 10 story per hari, bahkan siaran langsung"
        },
        score: 3
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "당신의 패션 철학은?",
      en: "What's your fashion philosophy?",
      ja: "あなたのファッション哲学は？",
      'zh-CN': "你的时尚哲学是？",
      'zh-TW': "你的時尚哲學是？",
      vi: "Triết lý thời trang của bạn là gì?",
      id: "Apa filosofi fashion Anda?"
    },
    options: [
      {
        text: {
          ko: "무채색, 기본템. 눈에 띄지 않는 게 최고다",
          en: "Neutral colors, basics. Not standing out is best",
          ja: "無彩色、基本アイテム。目立たないのが最高",
          'zh-CN': "中性色，基础款。不引人注目最好",
          'zh-TW': "中性色，基礎款。不引人注目最好",
          vi: "Màu trung tính, đồ cơ bản. Không nổi bật là tốt nhất",
          id: "Warna netral, item dasar. Tidak mencolok adalah yang terbaik"
        },
        score: 0
      },
      {
        text: {
          ko: "유행은 따르지만 너무 튀는 건 부담스럽다",
          en: "Follow trends but too flashy is burdensome",
          ja: "流行は追うけど派手すぎるのは負担",
          'zh-CN': "跟随时尚但太显眼有负担",
          'zh-TW': "跟隨時尚但太顯眼有負擔",
          vi: "Theo xu hướng nhưng quá nổi bật thì có gánh nặng",
          id: "Mengikuti tren tapi terlalu mencolok memberatkan"
        },
        score: 1
      },
      {
        text: {
          ko: "트렌디한 아이템으로 포인트 주는 걸 좋아한다",
          en: "Like adding trendy items as accent pieces",
          ja: "トレンディなアイテムでポイントを付けるのが好き",
          'zh-CN': "喜欢用时尚单品作为点缀",
          'zh-TW': "喜歡用時尚單品作為點綴",
          vi: "Thích thêm các món đồ trendy làm điểm nhấn",
          id: "Suka menambahkan item trendi sebagai aksen"
        },
        score: 2
      },
      {
        text: {
          ko: "형광색, 호피무늬도 소화 가능. 시선 집중을 즐긴다",
          en: "Can pull off neon colors, leopard print. Enjoy attention",
          ja: "蛍光色、ヒョウ柄もこなせる。視線集中を楽しむ",
          'zh-CN': "荧光色、豹纹也能驾驭。享受被关注",
          'zh-TW': "螢光色、豹紋也能駕馭。享受被關注",
          vi: "Có thể mặc màu neon, họa tiết báo. Thích được chú ý",
          id: "Bisa memakai warna neon, motif macan tutul. Menikmati perhatian"
        },
        score: 3
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "당신에게 '관심'이란?",
      en: "What does 'attention' mean to you?",
      ja: "あなたにとって「関心」とは？",
      'zh-CN': "对你来说'关注'是什么？",
      'zh-TW': "對你來說「關注」是什麼？",
      vi: "'Sự chú ý' đối với bạn là gì?",
      id: "Apa arti 'perhatian' bagi Anda?"
    },
    options: [
      {
        text: {
          ko: "부담스럽고 피하고 싶은 것",
          en: "Burdensome and something to avoid",
          ja: "負担で避けたいもの",
          'zh-CN': "有负担，想避免的东西",
          'zh-TW': "有負擔，想避免的東西",
          vi: "Gánh nặng và điều muốn tránh",
          id: "Memberatkan dan sesuatu yang ingin dihindari"
        },
        score: 0
      },
      {
        text: {
          ko: "조금은 쑥스럽지만 싫지는 않은 것",
          en: "A bit embarrassing but not disliked",
          ja: "少し恥ずかしいけど嫌ではないもの",
          'zh-CN': "有点尴尬但不讨厌的东西",
          'zh-TW': "有點尷尬但不討厭的東西",
          vi: "Hơi xấu hổ nhưng không ghét",
          id: "Sedikit memalukan tapi tidak dibenci"
        },
        score: 1
      },
      {
        text: {
          ko: "적당히 받으면 기분 좋은 활력소",
          en: "Nice energy booster when received in moderation",
          ja: "適度に受けると気分のいい活力源",
          'zh-CN': "适度获得时令人愉快的能量来源",
          'zh-TW': "適度獲得時令人愉快的能量來源",
          vi: "Nguồn năng lượng dễ chịu khi nhận được một cách vừa phải",
          id: "Penguat energi yang menyenangkan ketika diterima dalam jumlah sedang"
        },
        score: 2
      },
      {
        text: {
          ko: "내가 살아가는 이유",
          en: "The reason I live",
          ja: "私が生きる理由",
          'zh-CN': "我活着的理由",
          'zh-TW': "我活著的理由",
          vi: "Lý do tôi sống",
          id: "Alasan saya hidup"
        },
        score: 3
      }
    ]
  }
];

export const phase2SocialLevelResults: Phase2SocialLevelResult[] = [
  {
    type: "Type1",
    emoji: "🧘‍♂️",
    title: {
      ko: "자발적 아싸, 방구석 철학자",
      en: "Voluntary Outsider, Room Philosopher",
      ja: "自発的なアウトサイダー、部屋の哲学者",
      'zh-CN': "自愿的外向者，房间哲学家",
      'zh-TW': "自願的外向者，房間哲學家",
      vi: "Người tự nguyện hướng nội, Triết gia phòng ngủ",
      id: "Outsider Sukarela, Filsuf Kamar"
    },
    shortDescription: {
      ko: "\"이불 밖은 위험해! 혼자가 제일 좋아\"",
      en: "\"Outside the blanket is dangerous! Being alone is best\"",
      ja: "「布団の外は危険！一人が一番いい」",
      'zh-CN': "\"被子外面很危险！一个人最好\"",
      'zh-TW': "「被子外面很危險！一個人最好」",
      vi: "\"Bên ngoài chăn nguy hiểm! Một mình là tốt nhất\"",
      id: "\"Di luar selimut berbahaya! Sendirian adalah yang terbaik\""
    },
    description: {
      ko: "당신은 혼자 있는 시간에서 에너지를 얻는 파워 내향형입니다. 사람을 싫어하는 건 아니지만, 불필요한 감정 소모와 얕은 관계를 피곤해합니다. 남들의 시선을 신경 쓰지 않고 나만의 세계를 즐기는 당신은 진정한 고독한 미식가입니다.",
      en: "You're a power introvert who gets energy from alone time. You don't hate people, but you're tired of unnecessary emotional consumption and shallow relationships. You enjoy your own world without caring about others' gazes - you're a true connoisseur of solitude.",
      ja: "あなたは一人の時間からエネルギーを得るパワー内向型です。人を嫌うわけではありませんが、不必要な感情消費と浅い関係に疲れています。他人の視線を気にせず、自分だけの世界を楽しむあなたは、真の孤独の美食家です。",
      'zh-CN': "你是一个从独处中获得能量的强力内向型。你不是讨厌人，而是厌倦了不必要的情绪消耗和肤浅的关系。你不关心别人的眼光，享受自己的世界——你是真正的孤独美食家。",
      'zh-TW': "你是一個從獨處中獲得能量的強力內向型。你不是討厭人，而是厭倦了不必要的情緒消耗和膚淺的關係。你不關心別人的眼光，享受自己的世界——你是真正的孤獨美食家。",
      vi: "Bạn là kiểu người hướng nội mạnh mẽ, lấy năng lượng từ thời gian một mình. Bạn không ghét mọi người, nhưng bạn mệt mỏi với việc tiêu hao cảm xúc không cần thiết và các mối quan hệ nông cạn. Bạn tận hưởng thế giới của riêng mình mà không quan tâm đến ánh nhìn của người khác - bạn là người sành điệu thực sự về sự cô đơn.",
      id: "Anda adalah introvert kuat yang mendapat energi dari waktu sendirian. Anda tidak membenci orang, tapi lelah dengan konsumsi emosional yang tidak perlu dan hubungan yang dangkal. Anda menikmati dunia sendiri tanpa peduli pandangan orang lain - Anda adalah penikmat sejati kesendirian."
    },
    socialLevel: {
      ko: "Lv. 1 (배터리 5%)",
      en: "Lv. 1 (Battery 5%)",
      ja: "Lv. 1 (バッテリー5%)",
      'zh-CN': "Lv. 1 (电池5%)",
      'zh-TW': "Lv. 1 (電池5%)",
      vi: "Lv. 1 (Pin 5%)",
      id: "Lv. 1 (Baterai 5%)"
    },
    characteristics: {
      ko: "약속 취소되면 내적 환호, 카톡 알림 꺼둠",
      en: "Inner cheer when plans cancelled, keep Kakao notifications off",
      ja: "予定がキャンセルされると内面で喜び、カカオトーク通知をオフにしておく",
      'zh-CN': "计划取消时内心欢呼，关闭Kakao通知",
      'zh-TW': "計劃取消時內心歡呼，關閉Kakao通知",
      vi: "Vui mừng trong lòng khi kế hoạch bị hủy, tắt thông báo Kakao",
      id: "Kegembiraan batin saat rencana dibatalkan, tetap matikan notifikasi Kakao"
    },
    goodMatch: {
      ko: "Type 2 (수줍은 관찰자)",
      en: "Type 2 (Shy Observer)",
      ja: "Type 2 (恥ずかしがり屋の観察者)",
      'zh-CN': "Type 2 (害羞的观察者)",
      'zh-TW': "Type 2 (害羞的觀察者)",
      vi: "Type 2 (Người quan sát nhút nhát)",
      id: "Type 2 (Pengamat Pemalu)"
    },
    badMatch: {
      ko: "Type 5 (파워 핵인싸)",
      en: "Type 5 (Power Social Butterfly)",
      ja: "Type 5 (パワー社交家)",
      'zh-CN': "Type 5 (强力社交达人)",
      'zh-TW': "Type 5 (強力社交達人)",
      vi: "Type 5 (Người xã hội mạnh mẽ)",
      id: "Type 5 (Kupu-kupu Sosial Kuat)"
    }
  },
  {
    type: "Type2",
    emoji: "🙈",
    title: {
      ko: "수줍은 관찰자, 샤이 관종",
      en: "Shy Observer, Shy Attention Seeker",
      ja: "恥ずかしがり屋の観察者、シャイな注目欲しがり",
      'zh-CN': "害羞的观察者，害羞的注意力寻求者",
      'zh-TW': "害羞的觀察者，害羞的注意力尋求者",
      vi: "Người quan sát nhút nhát, Người tìm kiếm sự chú ý nhút nhát",
      id: "Pengamat Pemalu, Pencari Perhatian Pemalu"
    },
    shortDescription: {
      ko: "\"끼고 싶지만 용기가 안 나...\"",
      en: "\"Want to join in but no courage...\"",
      ja: "「加わりたいけど勇気が出ない...」",
      'zh-CN': "\"想加入但没有勇气...\"",
      'zh-TW': "「想加入但沒有勇氣...」",
      vi: "\"Muốn tham gia nhưng không có can đảm...\"",
      id: "\"Ingin bergabung tapi tidak punya keberanian...\""
    },
    description: {
      ko: "당신은 마음속으로는 사람들과 어울리고 싶지만, 막상 멍석을 깔아주면 부끄러워하는 스타일입니다. 낯가림이 심해서 친해지는 데 시간이 걸리지만, 한번 친해지면 엽기적인 모습까지 보여주는 반전 매력의 소유자입니다.",
      en: "Deep down you want to mingle with people, but when the opportunity comes, you get shy. You're quite reserved with strangers, so it takes time to get close, but once you do, you show even quirky sides - you have a charming reverse appeal.",
      ja: "あなたは心の中では人々と仲良くしたいけど、いざ機会が来ると恥ずかしがるタイプです。人見知りが激しいので親しくなるのに時間がかかりますが、一度親しくなると奇抜な姿まで見せてくれる反転魅力の持ち主です。",
      'zh-CN': "你内心深处想和人们交往，但机会来临时却变得害羞。你很认生，所以需要时间才能亲近，但一旦亲近，你会展现出甚至古怪的一面——你拥有迷人的反转魅力。",
      'zh-TW': "你內心深處想和人們交往，但機會來臨時卻變得害羞。你很認生，所以需要時間才能親近，但一旦親近，你會展現出甚至古怪的一面——你擁有迷人的反轉魅力。",
      vi: "Trong lòng bạn muốn hòa nhập với mọi người, nhưng khi cơ hội đến, bạn trở nên nhút nhát. Bạn rất nhút nhát với người lạ, nên cần thời gian để thân thiết, nhưng một khi đã thân, bạn thể hiện cả những mặt kỳ quặc - bạn có sức hút ngược đầy quyến rũ.",
      id: "Di dalam hati Anda ingin bergaul dengan orang, tapi saat kesempatan datang, Anda menjadi malu. Anda sangat pemalu dengan orang asing, jadi butuh waktu untuk menjadi dekat, tapi begitu dekat, Anda menunjukkan bahkan sisi-sisi aneh - Anda memiliki daya tarik terbalik yang menawan."
    },
    socialLevel: {
      ko: "Lv. 10 (배터리 20%)",
      en: "Lv. 10 (Battery 20%)",
      ja: "Lv. 10 (バッテリー20%)",
      'zh-CN': "Lv. 10 (电池20%)",
      'zh-TW': "Lv. 10 (電池20%)",
      vi: "Lv. 10 (Pin 20%)",
      id: "Lv. 10 (Baterai 20%)"
    },
    characteristics: {
      ko: "단톡방 읽씹(사실 다 읽음), 친한 친구랑만 놈",
      en: "Read but don't reply in group chat (actually read everything), only hang out with close friends",
      ja: "グループチャットで既読スルー（実は全部読んでいる）、親しい友達とだけ遊ぶ",
      'zh-CN': "群聊已读不回（其实都读了），只和亲密朋友玩",
      'zh-TW': "群聊已讀不回（其實都讀了），隻和親密朋友玩",
      vi: "Đã đọc nhưng không trả lời trong nhóm chat (thực ra đọc hết), chỉ chơi với bạn thân",
      id: "Baca tapi tidak balas di grup chat (sebenarnya baca semuanya), hanya bergaul dengan teman dekat"
    },
    goodMatch: {
      ko: "Type 4 (은근한 인싸)",
      en: "Type 4 (Subtle Social Butterfly)",
      ja: "Type 4 (控えめな社交家)",
      'zh-CN': "Type 4 (低调的社交达人)",
      'zh-TW': "Type 4 (低調的社交達人)",
      vi: "Type 4 (Người xã hội tinh tế)",
      id: "Type 4 (Kupu-kupu Sosial Halus)"
    },
    badMatch: {
      ko: "Type 6 (관심이 필요해)",
      en: "Type 6 (Needs Attention)",
      ja: "Type 6 (関心が必要)",
      'zh-CN': "Type 6 (需要关注)",
      'zh-TW': "Type 6 (需要關注)",
      vi: "Type 6 (Cần sự chú ý)",
      id: "Type 6 (Butuh Perhatian)"
    }
  },
  {
    type: "Type3",
    emoji: "🦎",
    title: {
      ko: "눈치 100단, 사회성 만렙 카멜레온",
      en: "Social Awareness Level 100, Max Social Skills Chameleon",
      ja: "空気読み100段、社会性マックスカメレオン",
      'zh-CN': "察言观色100级，社交技能满级变色龙",
      'zh-TW': "察言觀色100級，社交技能滿級變色龍",
      vi: "Nhận biết xã hội cấp 100, Tắc kè hoa kỹ năng xã hội tối đa",
      id: "Kesadaran Sosial Level 100, Bunglon Keterampilan Sosial Maksimal"
    },
    shortDescription: {
      ko: "\"어느 무리에서도 살아남는 적응력\"",
      en: "\"Adaptability to survive in any group\"",
      ja: "「どんな集団でも生き残る適応力」",
      'zh-CN': "\"在任何群体中都能生存的适应力\"",
      'zh-TW': "「在任何群體中都能生存的適應力」",
      vi: "\"Khả năng thích ứng để sống sót trong bất kỳ nhóm nào\"",
      id: "\"Kemampuan adaptasi untuk bertahan di kelompok mana pun\""
    },
    description: {
      ko: "당신은 튀지 않으면서도 적당히 분위기를 맞출 줄 아는 처세술의 달인입니다. 인싸들 틈에서는 인싸처럼, 아싸들 틈에서는 조용하게 잘 어울립니다. 선을 넘지 않는 센스와 배려심으로 적을 만들지 않는 평화주의자입니다.",
      en: "You're a master of social skills who can blend in appropriately without standing out. Among social butterflies, you act like one; among introverts, you blend in quietly. You're a pacifist with good sense and consideration who doesn't make enemies.",
      ja: "あなたは目立たずに適度に雰囲気を合わせられる処世術の達人です。社交家たちの中では社交家のように、内向的な人々の中では静かにうまく溶け込みます。線を越えないセンスと配慮で敵を作らない平和主義者です。",
      'zh-CN': "你是一个社交大师，能在不突出的情况下适当配合气氛。在社交达人中间，你表现得像社交达人；在内向者中间，你安静地融入。你是一个有良好判断力和体贴之心的和平主义者，不会树敌。",
      'zh-TW': "你是一個社交大師，能在不突出的情況下適當配合氣氛。在社交達人中間，你表現得像社交達人；在內向者中間，你安靜地融入。你是一個有良好判斷力和體貼之心的和平主義者，不會樹敵。",
      vi: "Bạn là bậc thầy về kỹ năng xã hội, biết cách hòa hợp phù hợp mà không nổi bật. Giữa những người xã hội, bạn hành động như họ; giữa những người hướng nội, bạn hòa nhập một cách yên lặng. Bạn là người theo chủ nghĩa hòa bình với sự nhạy bén và quan tâm, không tạo kẻ thù.",
      id: "Anda adalah master keterampilan sosial yang bisa berbaur dengan tepat tanpa menonjol. Di antara kupu-kupu sosial, Anda bertindak seperti mereka; di antara introvert, Anda berbaur dengan tenang. Anda adalah pasifis dengan akal sehat dan pertimbangan yang tidak membuat musuh."
    },
    socialLevel: {
      ko: "Lv. 50 (배터리 50%)",
      en: "Lv. 50 (Battery 50%)",
      ja: "Lv. 50 (バッテリー50%)",
      'zh-CN': "Lv. 50 (电池50%)",
      'zh-TW': "Lv. 50 (電池50%)",
      vi: "Lv. 50 (Pin 50%)",
      id: "Lv. 50 (Baterai 50%)"
    },
    characteristics: {
      ko: "리액션 좋음, 공감 능력 탁월",
      en: "Great reactions, excellent empathy",
      ja: "リアクション良好、共感能力抜群",
      'zh-CN': "反应好，共情能力出色",
      'zh-TW': "反應好，共情能力出色",
      vi: "Phản ứng tốt, khả năng đồng cảm xuất sắc",
      id: "Reaksi bagus, empati luar biasa"
    },
    goodMatch: {
      ko: "Type 3 (눈치 100단)",
      en: "Type 3 (Social Awareness Level 100)",
      ja: "Type 3 (空気読み100段)",
      'zh-CN': "Type 3 (察言观色100级)",
      'zh-TW': "Type 3 (察言觀色100級)",
      vi: "Type 3 (Nhận biết xã hội cấp 100)",
      id: "Type 3 (Kesadaran Sosial Level 100)"
    },
    badMatch: {
      ko: "Type 1 (자발적 아싸)",
      en: "Type 1 (Voluntary Outsider)",
      ja: "Type 1 (自発的なアウトサイダー)",
      'zh-CN': "Type 1 (自愿的外向者)",
      'zh-TW': "Type 1 (自願的外向者)",
      vi: "Type 1 (Người tự nguyện hướng nội)",
      id: "Type 1 (Outsider Sukarela)"
    }
  },
  {
    type: "Type4",
    emoji: "🎉",
    title: {
      ko: "은근한 인싸, 분위기 메이커",
      en: "Subtle Social Butterfly, Mood Maker",
      ja: "控えめな社交家、雰囲気メーカー",
      'zh-CN': "低调的社交达人，氛围制造者",
      'zh-TW': "低調的社交達人，氛圍製造者",
      vi: "Người xã hội tinh tế, Người tạo không khí",
      id: "Kupu-kupu Sosial Halus, Pembuat Suasana"
    },
    shortDescription: {
      ko: "\"내가 굳이 나서진 않지만, 내가 없으면 심심할걸?\"",
      en: "\"I don't need to step forward, but it'd be boring without me, right?\"",
      ja: "「私がわざわざ前に出ることはないけど、私がいなければ退屈だろう？」",
      'zh-CN': "\"我不需要主动站出来，但没有我会很无聊吧？\"",
      'zh-TW': "「我不需要主動站出來，但沒有我會很無聊吧？」",
      vi: "\"Mình không cần phải ra mặt, nhưng không có mình thì sẽ nhàm chán nhỉ?\"",
      id: "\"Saya tidak perlu maju, tapi akan membosankan tanpa saya, kan?\""
    },
    description: {
      ko: "당신은 굳이 나서서 주도하지 않아도 사람들이 자연스럽게 모여드는 매력이 있습니다. 유머 감각이 있고 대화를 즐거워해서 모임의 윤활유 역할을 합니다. 적당히 즐기고 적당히 빠질 줄 아는 쿨한 인싸입니다.",
      en: "You have the charm that makes people naturally gather without needing to take the lead. You have a good sense of humor and enjoy conversations, playing the role of social lubricant. You're a cool social butterfly who knows how to enjoy in moderation and leave in moderation.",
      ja: "あなたはわざわざ前に出て主導しなくても、人々が自然に集まってくる魅力があります。ユーモアのセンスがあり会話を楽しむので、集まりの潤滑油の役割をします。適度に楽しんで適度に抜けることができるクールな社交家です。",
      'zh-CN': "你有一种魅力，即使不需要主动带领，人们也会自然聚集。你有幽默感，喜欢对话，起到聚会润滑剂的作用。你是一个很酷的社交达人，知道适度享受和适度离开。",
      'zh-TW': "你有一種魅力，即使不需要主動帶領，人們也會自然聚集。你有幽默感，喜歡對話，起到聚會潤滑劑的作用。你是一個很酷的社交達人，知道適度享受和適度離開。",
      vi: "Bạn có sức hút khiến mọi người tự nhiên tụ tập mà không cần phải dẫn dắt. Bạn có khiếu hài hước và thích trò chuyện, đóng vai trò như chất bôi trơn xã hội. Bạn là một người xã hội mát mẻ, biết cách tận hưởng vừa phải và rời đi vừa phải.",
      id: "Anda memiliki pesona yang membuat orang secara alami berkumpul tanpa perlu mengambil alih. Anda memiliki selera humor yang baik dan menikmati percakapan, memainkan peran sebagai pelumas sosial. Anda adalah kupu-kupu sosial yang keren yang tahu cara menikmati dalam jumlah sedang dan pergi dalam jumlah sedang."
    },
    socialLevel: {
      ko: "Lv. 70 (배터리 75%)",
      en: "Lv. 70 (Battery 75%)",
      ja: "Lv. 70 (バッテリー75%)",
      'zh-CN': "Lv. 70 (电池75%)",
      'zh-TW': "Lv. 70 (電池75%)",
      vi: "Lv. 70 (Pin 75%)",
      id: "Lv. 70 (Baterai 75%)"
    },
    characteristics: {
      ko: "술자리 좋아함, 친구의 친구와도 금방 친해짐",
      en: "Love drinking parties, quickly become friends with friend's friends",
      ja: "飲み会好き、友達の友達ともすぐに仲良くなる",
      'zh-CN': "喜欢聚会，很快和朋友的 friend成为朋友",
      'zh-TW': "喜歡聚會，很快和朋友的 friend成為朋友",
      vi: "Thích các buổi tiệc rượu, nhanh chóng kết bạn với bạn của bạn",
      id: "Suka pesta minum, cepat menjadi teman dengan teman teman"
    },
    goodMatch: {
      ko: "Type 2 (수줍은 관찰자)",
      en: "Type 2 (Shy Observer)",
      ja: "Type 2 (恥ずかしがり屋の観察者)",
      'zh-CN': "Type 2 (害羞的观察者)",
      'zh-TW': "Type 2 (害羞的觀察者)",
      vi: "Type 2 (Người quan sát nhút nhát)",
      id: "Type 2 (Pengamat Pemalu)"
    },
    badMatch: {
      ko: "없음 (누구와도 잘 어울리는 둥글둥글한 성격)",
      en: "None (Gets along with everyone, easygoing personality)",
      ja: "なし（誰とでもよく合う柔らかい性格）",
      'zh-CN': "无（和谁都处得来，随和的性格）",
      'zh-TW': "無（和誰都處得來，隨和的性格）",
      vi: "Không có (Hòa hợp với mọi người, tính cách dễ chịu)",
      id: "Tidak ada (Bergaul dengan semua orang, kepribadian mudah bergaul)"
    }
  },
  {
    type: "Type5",
    emoji: "📢",
    title: {
      ko: "파워 핵인싸, 인간 확성기",
      en: "Power Social Butterfly, Human Megaphone",
      ja: "パワー社交家、人間メガホン",
      'zh-CN': "强力社交达人，人类扩音器",
      'zh-TW': "強力社交達人，人類擴音器",
      vi: "Người xã hội mạnh mẽ, Loa phóng thanh người",
      id: "Kupu-kupu Sosial Kuat, Megafon Manusia"
    },
    shortDescription: {
      ko: "\"나를 따르라! 이 구역의 주인공은 나\"",
      en: "\"Follow me! I'm the main character of this area\"",
      ja: "「私についてこい！このエリアの主人公は私」",
      'zh-CN': "\"跟随我！我是这个区域的主角\"",
      'zh-TW': "「跟隨我！我是這個區域的主角」",
      vi: "\"Hãy theo tôi! Tôi là nhân vật chính của khu vực này\"",
      id: "\"Ikuti saya! Saya adalah karakter utama area ini\""
    },
    description: {
      ko: "당신은 모임의 중심이 되어야 직성이 풀리는 리더형 인싸입니다. 365일 약속이 꽉 차 있으며, 집에 있으면 몸이 근질거립니다. 처음 보는 사람과도 1분 만에 형, 동생 할 수 있는 미친 친화력을 가졌습니다.",
      en: "You're a leader-type social butterfly who needs to be at the center of gatherings. Your schedule is packed 365 days a year, and you get restless when home. You have incredible friendliness that lets you become friends with strangers in just 1 minute.",
      ja: "あなたは集まりの中心にならないと気が済まないリーダー型の社交家です。365日約束でいっぱいで、家にいると体がむずむずします。初対面の人とも1分で兄弟のようにできる信じられない親和力を持っています。",
      'zh-CN': "你是一个领导型社交达人，必须成为聚会的中心。一年365天行程都排满了，在家就会坐立不安。你拥有令人难以置信的亲和力，能在1分钟内和陌生人成为朋友。",
      'zh-TW': "你是一個領導型社交達人，必須成為聚會的中心。一年365天行程都排滿了，在家就會坐立不安。你擁有令人難以置信的親和力，能在1分鐘內和陌生人成為朋友。",
      vi: "Bạn là kiểu người xã hội lãnh đạo, cần phải ở trung tâm của các buổi tụ tập. Lịch trình của bạn kín 365 ngày một năm, và bạn bồn chồn khi ở nhà. Bạn có sự thân thiện đáng kinh ngạc, có thể kết bạn với người lạ chỉ trong 1 phút.",
      id: "Anda adalah kupu-kupu sosial tipe pemimpin yang perlu berada di pusat pertemuan. Jadwal Anda penuh 365 hari setahun, dan Anda gelisah saat di rumah. Anda memiliki keramahan luar biasa yang memungkinkan Anda menjadi teman dengan orang asing hanya dalam 1 menit."
    },
    socialLevel: {
      ko: "Lv. 90 (배터리 99%)",
      en: "Lv. 90 (Battery 99%)",
      ja: "Lv. 90 (バッテリー99%)",
      'zh-CN': "Lv. 90 (电池99%)",
      'zh-TW': "Lv. 90 (電池99%)",
      vi: "Lv. 90 (Pin 99%)",
      id: "Lv. 90 (Baterai 99%)"
    },
    characteristics: {
      ko: "목소리 큼, 텐션 높음, 아는 사람 천지",
      en: "Loud voice, high energy, know people everywhere",
      ja: "声が大きい、テンション高い、知り合いがどこにでもいる",
      'zh-CN': "声音大，能量高，到处都有认识的人",
      'zh-TW': "聲音大，能量高，到處都有認識的人",
      vi: "Giọng nói lớn, năng lượng cao, quen biết mọi người ở khắp nơi",
      id: "Suara keras, energi tinggi, kenal orang di mana-mana"
    },
    goodMatch: {
      ko: "Type 6 (관심이 필요해)",
      en: "Type 6 (Needs Attention)",
      ja: "Type 6 (関心が必要)",
      'zh-CN': "Type 6 (需要关注)",
      'zh-TW': "Type 6 (需要關注)",
      vi: "Type 6 (Cần sự chú ý)",
      id: "Type 6 (Butuh Perhatian)"
    },
    badMatch: {
      ko: "Type 1 (자발적 아싸)",
      en: "Type 1 (Voluntary Outsider)",
      ja: "Type 1 (自発的なアウトサイダー)",
      'zh-CN': "Type 1 (自愿的外向者)",
      'zh-TW': "Type 1 (自願的外向者)",
      vi: "Type 1 (Người tự nguyện hướng nội)",
      id: "Type 1 (Outsider Sukarela)"
    }
  },
  {
    type: "Type6",
    emoji: "✨",
    title: {
      ko: "관심이 필요해, 본 투 비 연예인",
      en: "Needs Attention, Born to Be Celebrity",
      ja: "関心が必要、生まれながらの有名人",
      'zh-CN': "需要关注，天生明星",
      'zh-TW': "需要關注，天生明星",
      vi: "Cần sự chú ý, Sinh ra để trở thành người nổi tiếng",
      id: "Butuh Perhatian, Lahir untuk Jadi Selebritas"
    },
    shortDescription: {
      ko: "\"관심은 나의 힘! 무플보다 악플이 낫다\"",
      en: "\"Attention is my power! Hate comments are better than no comments\"",
      ja: "「関心は私の力！無反応より悪いコメントの方がいい」",
      'zh-CN': "\"关注是我的力量！恶评比没评论好\"",
      'zh-TW': "「關注是我的力量！惡評比沒評論好」",
      vi: "\"Sự chú ý là sức mạnh của tôi! Bình luận xấu còn hơn không có bình luận\"",
      id: "\"Perhatian adalah kekuatan saya! Komentar kebencian lebih baik daripada tidak ada komentar\""
    },
    description: {
      ko: "당신은 남들의 시선과 관심을 먹고 자라는 연예인 기질을 타고났습니다. 평범한 것은 거부하며, 언제 어디서나 튀어야 합니다. 무대 체질이며, 사람들이 나를 쳐다보고 환호해 줄 때 살아있음을 느낍니다.",
      en: "You were born with a celebrity temperament that feeds on others' gazes and attention. You reject being ordinary and must stand out anytime, anywhere. You're stage material and feel alive when people stare and cheer for you.",
      ja: "あなたは他人の視線と関心を食べて育つ有名人気質を生まれつき持っています。平凡なものを拒否し、いつでもどこでも目立たなければなりません。舞台体質であり、人々が私を見つめて喝采してくれるときに生きていると感じます。",
      'zh-CN': "你天生具有明星气质，靠别人的目光和关注为生。你拒绝平凡，必须随时随地脱颖而出。你是舞台体质，当人们盯着你并为你欢呼时，你才感到自己活着。",
      'zh-TW': "你天生具有明星氣質，靠別人的目光和關注為生。你拒絕平凡，必須隨時隨地脫穎而出。你是舞台體質，當人們盯著你並為你歡呼時，你才感到自己活著。",
      vi: "Bạn được sinh ra với tính cách người nổi tiếng, sống bằng ánh nhìn và sự chú ý của người khác. Bạn từ chối sự bình thường và phải nổi bật bất cứ lúc nào, ở đâu. Bạn là chất liệu sân khấu và cảm thấy mình sống khi mọi người nhìn chằm chằm và cổ vũ cho bạn.",
      id: "Anda dilahirkan dengan temperamen selebritas yang hidup dari pandangan dan perhatian orang lain. Anda menolak menjadi biasa-biasa saja dan harus menonjol kapan pun, di mana pun. Anda adalah materi panggung dan merasa hidup ketika orang-orang menatap dan bersorak untuk Anda."
    },
    socialLevel: {
      ko: "Lv. 99+ (배터리 폭발)",
      en: "Lv. 99+ (Battery Exploded)",
      ja: "Lv. 99+ (バッテリー爆発)",
      'zh-CN': "Lv. 99+ (电池爆炸)",
      'zh-TW': "Lv. 99+ (電池爆炸)",
      vi: "Lv. 99+ (Pin nổ)",
      id: "Lv. 99+ (Baterai Meledak)"
    },
    characteristics: {
      ko: "관종끼 다분, SNS 중독, 패션 피플",
      en: "Very attention-seeking, SNS addicted, fashion people",
      ja: "注目欲しがり度が高い、SNS中毒、ファッションピープル",
      'zh-CN': "非常寻求关注，SNS成瘾，时尚达人",
      'zh-TW': "非常尋求關注，SNS成癮，時尚達人",
      vi: "Rất thích được chú ý, nghiện SNS, người thời trang",
      id: "Sangat mencari perhatian, kecanduan SNS, orang fashion"
    },
    goodMatch: {
      ko: "Type 5 (파워 핵인싸)",
      en: "Type 5 (Power Social Butterfly)",
      ja: "Type 5 (パワー社交家)",
      'zh-CN': "Type 5 (强力社交达人)",
      'zh-TW': "Type 5 (強力社交達人)",
      vi: "Type 5 (Người xã hội mạnh mẽ)",
      id: "Type 5 (Kupu-kupu Sosial Kuat)"
    },
    badMatch: {
      ko: "Type 2 (수줍은 관찰자)",
      en: "Type 2 (Shy Observer)",
      ja: "Type 2 (恥ずかしがり屋の観察者)",
      'zh-CN': "Type 2 (害羞的观察者)",
      'zh-TW': "Type 2 (害羞的觀察者)",
      vi: "Type 2 (Người quan sát nhút nhát)",
      id: "Type 2 (Pengamat Pemalu)"
    }
  }
];

export function calculatePhase2SocialLevelResult(answers: number[]): string {
  const totalScore = answers.reduce((sum, score) => sum + score, 0);
  
  if (totalScore >= 0 && totalScore <= 5) {
    return "Type1";
  } else if (totalScore >= 6 && totalScore <= 11) {
    return "Type2";
  } else if (totalScore >= 12 && totalScore <= 19) {
    return "Type3";
  } else if (totalScore >= 20 && totalScore <= 27) {
    return "Type4";
  } else if (totalScore >= 28 && totalScore <= 33) {
    return "Type5";
  } else if (totalScore >= 34 && totalScore <= 36) {
    return "Type6";
  } else {
    // Fallback for any unexpected scores
    return "Type6";
  }
}

