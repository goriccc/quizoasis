export interface Phase2RelationshipCutQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    typePoints: number[]; // 각 선택지가 점수를 주는 Type들 (1-6)
  }[];
}

export interface Phase2RelationshipCutResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  cutSpeed: Record<string, string>; // 손절 속도
  characteristics: Record<string, string>; // 주요 특징
  goodMatch: Record<string, string>; // 환상의 짝꿍
  badMatch: Record<string, string>; // 환장의 짝꿍
}

export const phase2RelationshipCutQuestions: Phase2RelationshipCutQuestion[] = [
  {
    id: 1,
    question: {
      ko: "친구가 선을 넘는 농담을 해서 기분이 나빴다.",
      en: "A friend made an inappropriate joke that made you feel bad.",
      ja: "友達が線を越える冗談を言って気分が悪くなった。",
      'zh-CN': "朋友开了过分的玩笑，让你心情不好。",
      'zh-TW': "朋友開了過分的玩笑，讓你心情不好。",
      vi: "Bạn bè nói đùa quá đà khiến bạn cảm thấy khó chịu.",
      id: "Teman membuat lelucon yang melewati batas sehingga membuat Anda merasa tidak enak."
    },
    options: [
      {
        text: {
          ko: "\"그 말 좀 심한데?\" 정색하고 바로 불쾌함을 표현한다",
          en: "\"That's a bit harsh, isn't it?\" I show displeasure immediately with a serious face",
          ja: "「その言葉ちょっとひどくない？」真顔で即座に不快感を表現する",
          'zh-CN': "「这话有点过分吧？」立即板着脸表达不满",
          'zh-TW': "「這話有點過分吧？」立即板著臉表達不滿",
          vi: "\"Câu nói đó hơi quá đấy?\" Tôi tỏ ra không vui ngay với vẻ mặt nghiêm túc",
          id: "\"Kata-kata itu agak keras, bukan?\" Saya menunjukkan ketidaksenangan segera dengan wajah serius"
        },
        typePoints: [1, 3] // Type 1, 3
      },
      {
        text: {
          ko: "일단 웃어넘기지만 마음속 '손절 노트'에 이름과 날짜를 기록한다",
          en: "I laugh it off for now but record the name and date in my mental 'cut-off notebook'",
          ja: "とりあえず笑ってごまかすが、心の中の「手切れノート」に名前と日付を記録する",
          'zh-CN': "先笑着敷衍过去，但在心里的'断交笔记'上记下名字和日期",
          'zh-TW': "先笑著敷衍過去，但在心裡的「斷交筆記」上記下名字和日期",
          vi: "Tạm thời cười cho qua nhưng ghi tên và ngày vào 'sổ tay cắt đứt' trong lòng",
          id: "Saya tertawa untuk saat ini tetapi mencatat nama dan tanggal di 'buku catatan pemutusan' mental saya"
        },
        typePoints: [3, 2] // Type 3, 2
      },
      {
        text: {
          ko: "분위기 망치기 싫어서 그냥 내가 예민한 탓이라며 넘긴다",
          en: "I don't want to ruin the mood, so I just brush it off saying I'm being too sensitive",
          ja: "雰囲気を壊したくないので、ただ私が敏感なせいだと言ってやり過ごす",
          'zh-CN': "不想破坏气氛，所以只是说自己太敏感就过去了",
          'zh-TW': "不想破壞氣氛，所以只是說自己太敏感就過去了",
          vi: "Không muốn phá hỏng không khí nên chỉ bỏ qua và cho rằng mình quá nhạy cảm",
          id: "Saya tidak ingin merusak suasana, jadi saya hanya mengabaikannya dengan mengatakan saya terlalu sensitif"
        },
        typePoints: [6, 5] // Type 6, 5
      },
      {
        text: {
          ko: "그 자리에선 참고 집에 가서 연락을 씹거나 서서히 피한다",
          en: "I hold back at the moment, but when I get home I ignore their messages or gradually avoid them",
          ja: "その場では我慢するが、家に帰ってから連絡を無視したり徐々に避けたりする",
          'zh-CN': "当场忍住，但回家后不回复消息或逐渐避开",
          'zh-TW': "當場忍住，但回家後不回覆訊息或逐漸避開",
          vi: "Tại chỗ thì nhịn, nhưng về nhà thì không trả lời tin nhắn hoặc dần tránh mặt",
          id: "Saya menahan diri saat itu, tetapi ketika pulang ke rumah saya mengabaikan pesan mereka atau secara bertahap menghindari mereka"
        },
        typePoints: [2, 4] // Type 2, 4
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "연락처 정리를 마음먹었다. 당신의 기준은?",
      en: "You've decided to clean up your contacts. What's your criteria?",
      ja: "連絡先の整理を決めた。あなたの基準は？",
      'zh-CN': "你决定整理联系人。你的标准是什么？",
      'zh-TW': "你決定整理聯絡人。你的標準是什麼？",
      vi: "Bạn quyết định dọn dẹp danh bạ. Tiêu chí của bạn là gì?",
      id: "Anda memutuskan untuk membersihkan kontak. Apa kriteria Anda?"
    },
    options: [
      {
        text: {
          ko: "최근 1년간 연락 안 한 사람은 가차 없이 삭제한다",
          en: "Delete anyone I haven't contacted in the past year without hesitation",
          ja: "最近1年間連絡していない人は容赦なく削除する",
          'zh-CN': "毫不犹豫地删除最近一年没联系过的人",
          'zh-TW': "毫不猶豫地刪除最近一年沒聯繫過的人",
          vi: "Xóa không thương tiếc những người không liên lạc trong 1 năm qua",
          id: "Hapus siapa pun yang tidak saya hubungi dalam setahun terakhir tanpa ragu-ragu"
        },
        typePoints: [1] // Type 1
      },
      {
        text: {
          ko: "나에게 도움 안 되거나 부정적인 영향을 주는 사람을 골라낸다",
          en: "Pick out people who don't help me or have a negative impact",
          ja: "私に役立たないか否定的な影響を与える人を選び出す",
          'zh-CN': "挑选那些对我没有帮助或产生负面影响的人",
          'zh-TW': "挑選那些對我沒有幫助或產生負面影響的人",
          vi: "Chọn ra những người không giúp ích hoặc có ảnh hưởng tiêu cực",
          id: "Pilih orang yang tidak membantu saya atau memiliki dampak negatif"
        },
        typePoints: [5] // Type 5
      },
      {
        text: {
          ko: "지우려고 봤다가 '언젤가 보겠지' 하고 다시 놔둔다",
          en: "I look at them to delete but think 'I'll see them someday' and leave them",
          ja: "消そうと思って見たが「いつか会うだろう」と思ってまた置いておく",
          'zh-CN': "想删除但看了之后觉得'总有一天会见面的'又留下了",
          'zh-TW': "想刪除但看了之後覺得「總有一天會見面的」又留下了",
          vi: "Xem để xóa nhưng nghĩ 'sẽ gặp lại thôi' rồi lại để yên",
          id: "Saya melihat mereka untuk dihapus tetapi berpikir 'Saya akan bertemu mereka suatu hari nanti' dan membiarkannya"
        },
        typePoints: [6, 2] // Type 6, 2
      },
      {
        text: {
          ko: "굳이 정리 안 한다. 폰 용량도 많은데 뭐 하러?",
          en: "I don't bother organizing. My phone has plenty of storage, so why bother?",
          ja: "わざわざ整理しない。スマホの容量も多いし、何のために？",
          'zh-CN': "懒得整理。手机容量也够，何必呢？",
          'zh-TW': "懶得整理。手機容量也夠，何必呢？",
          vi: "Không buồn dọn dẹp. Dung lượng điện thoại còn nhiều, làm gì phải?",
          id: "Saya tidak repot-repot mengatur. Ponsel saya memiliki banyak penyimpanan, jadi mengapa repot?"
        },
        typePoints: [4] // Type 4
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "더 이상 만나고 싶지 않은 친구가 밥 먹자고 연락이 왔다.",
      en: "A friend you no longer want to meet contacts you to grab a meal.",
      ja: "もう会いたくない友達からご飯を食べようと連絡が来た。",
      'zh-CN': "一个你不想再见的朋友联系你一起吃饭。",
      'zh-TW': "一個你不想再見的朋友聯繫你一起吃飯。",
      vi: "Một người bạn bạn không muốn gặp nữa nhắn rủ đi ăn.",
      id: "Teman yang tidak ingin Anda temui lagi menghubungi Anda untuk makan bersama."
    },
    options: [
      {
        text: {
          ko: "\"나 당분간 바빠서 시간 안 될 것 같아.\" 둘러대며 거절한다",
          en: "\"I'm busy for a while, so I probably won't have time.\" I decline with an excuse",
          ja: "「私しばらく忙しくて時間が取れそうにない。」言い訳して断る",
          'zh-CN': "「我最近很忙，可能没时间。」找借口拒绝",
          'zh-TW': "「我最近很忙，可能沒時間。」找藉口拒絕",
          vi: "\"Mình bận một thời gian nên có lẽ không có thời gian.\" Từ chối bằng cách viện cớ",
          id: "\"Saya sibuk untuk sementara, jadi mungkin tidak punya waktu.\" Saya menolak dengan alasan"
        },
        typePoints: [2, 4] // Type 2, 4
      },
      {
        text: {
          ko: "(읽씹/안읽씹) 답장을 안 해서 자연스럽게 의사를 표현한다",
          en: "(Read/Unread) I don't reply, naturally expressing my intention",
          ja: "（既読スルー/未読スルー）返信をしないことで自然に意思を表現する",
          'zh-CN': "（已读不回/未读不回）不回复，自然表达我的意思",
          'zh-TW': "（已讀不回/未讀不回）不回覆，自然表達我的意思",
          vi: "(Đã đọc/Chưa đọc) Không trả lời để tự nhiên thể hiện ý định",
          id: "(Dibaca/Tidak dibaca) Saya tidak membalas, secara alami mengekspresikan niat saya"
        },
        typePoints: [2] // Type 2
      },
      {
        text: {
          ko: "\"그래, 언제 볼까?\" 거절을 못 해서 억지로 약속을 잡는다",
          en: "\"Sure, when should we meet?\" I can't refuse, so I reluctantly make plans",
          ja: "「うん、いつ会おうか？」断れなくて無理やり約束を入れる",
          'zh-CN': "「好啊，什么时候见？」因为拒绝不了，所以勉强约了",
          'zh-TW': "「好啊，什麼時候見？」因為拒絕不了，所以勉強約了",
          vi: "\"Ừ, khi nào gặp nhỉ?\" Không thể từ chối nên miễn cưỡng hẹn",
          id: "\"Tentu, kapan kita bertemu?\" Saya tidak bisa menolak, jadi dengan enggan membuat rencana"
        },
        typePoints: [6] // Type 6
      },
      {
        text: {
          ko: "\"솔직히 너랑 만나는 거 불편해.\" 직설적으로 말한다",
          en: "\"Honestly, meeting you makes me uncomfortable.\" I say it directly",
          ja: "「正直言うと、あなたと会うのは気まずい。」率直に言う",
          'zh-CN': "「老实说，和你见面让我不舒服。」直接说出来",
          'zh-TW': "「老實說，和你見面讓我不舒服。」直接說出來",
          vi: "\"Thật lòng thì gặp bạn làm mình không thoải mái.\" Nói thẳng",
          id: "\"Jujur, bertemu denganmu membuat saya tidak nyaman.\" Saya mengatakannya langsung"
        },
        typePoints: [1] // Type 1
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "SNS 팔로우(친구) 관리 스타일은?",
      en: "What's your SNS follow (friend) management style?",
      ja: "SNSフォロー（友達）管理スタイルは？",
      'zh-CN': "你的SNS关注（好友）管理风格是？",
      'zh-TW': "你的SNS關注（好友）管理風格是？",
      vi: "Phong cách quản lý follow (bạn bè) trên SNS của bạn là gì?",
      id: "Apa gaya manajemen follow (teman) SNS Anda?"
    },
    options: [
      {
        text: {
          ko: "나랑 소통 안 하거나 보기 싫은 사람은 바로 언팔/차단한다",
          en: "I immediately unfollow/block people who don't communicate with me or I don't want to see",
          ja: "私と交流しないか見たくない人はすぐにアンフォロー/ブロックする",
          'zh-CN': "立即取消关注/屏蔽那些不和我交流或我不想看到的人",
          'zh-TW': "立即取消關注/屏蔽那些不和我交流或我不想看到的人",
          vi: "Lập tức unfollow/block những người không giao tiếp hoặc không muốn thấy",
          id: "Saya segera unfollow/block orang yang tidak berkomunikasi dengan saya atau tidak ingin saya lihat"
        },
        typePoints: [1] // Type 1
      },
      {
        text: {
          ko: "굳이 언팔하진 않고 '숨기기'나 '무음' 처리로 안 보이게 한다",
          en: "I don't unfollow, but use 'hide' or 'mute' to make them invisible",
          ja: "わざわざアンフォローはせず、「非表示」や「ミュート」処理で見えないようにする",
          'zh-CN': "不取消关注，而是用'隐藏'或'静音'处理让他们看不见",
          'zh-TW': "不取消關注，而是用「隱藏」或「靜音」處理讓他們看不見",
          vi: "Không unfollow mà dùng 'ẩn' hoặc 'tắt tiếng' để không thấy",
          id: "Saya tidak unfollow, tetapi menggunakan 'sembunyikan' atau 'bisu' untuk membuat mereka tidak terlihat"
        },
        typePoints: [2, 4] // Type 2, 4
      },
      {
        text: {
          ko: "맞팔은 예의니까 싫은 사람이라도 유지는 한다",
          en: "Mutual follow is courtesy, so I maintain it even with people I don't like",
          ja: "相互フォローは礼儀だから、嫌いな人でも維持する",
          'zh-CN': "互相关注是礼貌，所以即使是不喜欢的人也保持",
          'zh-TW': "互相關注是禮貌，所以即使是不喜歡的人也保持",
          vi: "Follow lẫn nhau là lịch sự nên dù không thích vẫn giữ",
          id: "Follow timbal balik adalah sopan santun, jadi saya mempertahankannya bahkan dengan orang yang tidak saya sukai"
        },
        typePoints: [5] // Type 5
      },
      {
        text: {
          ko: "내 팔로워 수가 줄어드는 게 싫어서 관리만 한다",
          en: "I don't like my follower count decreasing, so I just manage it",
          ja: "自分のフォロワー数が減るのが嫌で管理だけする",
          'zh-CN': "不喜欢粉丝数减少，所以只是管理一下",
          'zh-TW': "不喜歡粉絲數減少，所以只是管理一下",
          vi: "Không muốn số follower giảm nên chỉ quản lý thôi",
          id: "Saya tidak suka jumlah pengikut saya berkurang, jadi saya hanya mengelolanya"
        },
        typePoints: [3, 6] // Type 3, 6
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "연인과 헤어질 때 당신의 모습은?",
      en: "What are you like when breaking up with a partner?",
      ja: "恋人と別れるとき、あなたの様子は？",
      'zh-CN': "和恋人分手时你的样子是？",
      'zh-TW': "和戀人分手時你的樣子是？",
      vi: "Bạn như thế nào khi chia tay người yêu?",
      id: "Bagaimana Anda saat putus dengan pasangan?"
    },
    options: [
      {
        text: {
          ko: "\"여기까지 하자.\" 감정 정리 끝내고 통보한다",
          en: "\"Let's end it here.\" I finish sorting out my emotions and inform them",
          ja: "「ここまでにしよう。」感情を整理し終えて通知する",
          'zh-CN': "「就到这里吧。」整理完情绪后通知对方",
          'zh-TW': "「就到這裡吧。」整理完情緒後通知對方",
          vi: "\"Dừng ở đây thôi.\" Sắp xếp xong cảm xúc rồi thông báo",
          id: "\"Mari kita akhiri di sini.\" Saya menyelesaikan pengaturan emosi dan memberi tahu mereka"
        },
        typePoints: [1] // Type 1
      },
      {
        text: {
          ko: "상대방이 먼저 헤어지자고 할 때까지 식은 티를 낸다",
          en: "I act cold until the other person suggests breaking up first",
          ja: "相手が先に別れようと言うまで冷たい態度を取る",
          'zh-CN': "直到对方先提出分手为止都表现冷淡",
          'zh-TW': "直到對方先提出分手為止都表現冷淡",
          vi: "Tỏ ra lạnh nhạt cho đến khi đối phương đề nghị chia tay trước",
          id: "Saya bertindak dingin sampai orang lain menyarankan putus terlebih dahulu"
        },
        typePoints: [2] // Type 2
      },
      {
        text: {
          ko: "헤어지고 싶지만 정 때문에 망설이며 시간을 끈다",
          en: "I want to break up but hesitate due to feelings and drag it out",
          ja: "別れたいが情のため躊躇して時間を引き延ばす",
          'zh-CN': "想分手但因为感情而犹豫，拖延时间",
          'zh-TW': "想分手但因為感情而猶豫，拖延時間",
          vi: "Muốn chia tay nhưng do tình cảm nên do dự và kéo dài",
          id: "Saya ingin putus tetapi ragu-ragu karena perasaan dan menunda-nunda"
        },
        typePoints: [6] // Type 6
      },
      {
        text: {
          ko: "합의하에 좋게 마무리하고 서로의 앞날을 응원한다",
          en: "I end it well by mutual agreement and cheer for each other's future",
          ja: "合意の上でうまく終わらせ、お互いの将来を応援する",
          'zh-CN': "在双方同意下友好结束，互相祝福对方的未来",
          'zh-TW': "在雙方同意下友好結束，互相祝福對方的未來",
          vi: "Kết thúc tốt đẹp bằng sự đồng ý và chúc nhau tương lai",
          id: "Saya mengakhirinya dengan baik berdasarkan kesepakatan bersama dan saling menyemangati masa depan satu sama lain"
        },
        typePoints: [5] // Type 5
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "누군가를 손절하게 되는 결정적인 계기는?",
      en: "What's the decisive moment that makes you cut someone off?",
      ja: "誰かを手切れにする決定的なきっかけは？",
      'zh-CN': "决定和某人断交的决定性时刻是？",
      'zh-TW': "決定和某人斷交的決定性時刻是？",
      vi: "Khoảnh khắc quyết định khiến bạn cắt đứt với ai đó là gì?",
      id: "Apa momen penentu yang membuat Anda memutuskan hubungan dengan seseorang?"
    },
    options: [
      {
        text: {
          ko: "약속 시간 위반, 돈 문제 등 신뢰가 깨졌을 때",
          en: "When trust is broken, like breaking appointment times or money issues",
          ja: "約束時間違反、お金の問題など信頼が壊れたとき",
          'zh-CN': "当信任被打破时，比如违反约定时间或金钱问题",
          'zh-TW': "當信任被打破時，比如違反約定時間或金錢問題",
          vi: "Khi niềm tin bị phá vỡ, như vi phạm giờ hẹn hoặc vấn đề tiền bạc",
          id: "Ketika kepercayaan hancur, seperti melanggar waktu janji atau masalah uang"
        },
        typePoints: [1, 5] // Type 1, 5
      },
      {
        text: {
          ko: "배려심 없고 예의 없는 태도가 반복될 때",
          en: "When inconsiderate and impolite attitudes are repeated",
          ja: "思いやりがなく礼儀のない態度が繰り返されるとき",
          'zh-CN': "当不体贴和不礼貌的态度反复出现时",
          'zh-TW': "當不體貼和不禮貌的態度反覆出現時",
          vi: "Khi thái độ thiếu quan tâm và không lịch sự lặp lại",
          id: "Ketika sikap tidak peduli dan tidak sopan diulangi"
        },
        typePoints: [3, 4] // Type 3, 4
      },
      {
        text: {
          ko: "대화가 안 통하고 가치관이 너무 다를 때",
          en: "When we can't communicate and values are too different",
          ja: "会話が通じず価値観が違いすぎるとき",
          'zh-CN': "当无法沟通且价值观差异太大时",
          'zh-TW': "當無法溝通且價值觀差異太大時",
          vi: "Khi không thể giao tiếp và giá trị quan quá khác biệt",
          id: "Ketika kita tidak bisa berkomunikasi dan nilai-nilai terlalu berbeda"
        },
        typePoints: [2, 5] // Type 2, 5
      },
      {
        text: {
          ko: "그냥 이유 없이 어느 순간 정이 뚝 떨어질 때",
          en: "When feelings just drop suddenly for no reason at some point",
          ja: "理由もなくある瞬間に情がぽっきり落ちるとき",
          'zh-CN': "当在某个时刻无缘无故突然没感情时",
          'zh-TW': "當在某個時刻無緣無故突然沒感情時",
          vi: "Khi cảm xúc đột ngột biến mất không lý do vào một lúc nào đó",
          id: "Ketika perasaan tiba-tiba hilang tanpa alasan di suatu saat"
        },
        typePoints: [2, 4] // Type 2, 4
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "손절한 친구가 \"미안해, 다시 잘 지내보자\"라고 연락이 온다면?",
      en: "If a friend you cut off contacts you saying \"I'm sorry, let's get along again\"?",
      ja: "手切れした友達から「ごめん、また仲良くしよう」と連絡が来たら？",
      'zh-CN': "如果被你断交的朋友联系你说「对不起，我们重新和好吧」？",
      'zh-TW': "如果被你斷交的朋友聯繫你說「對不起，我們重新和好吧」？",
      vi: "Nếu người bạn bạn đã cắt đứt liên lạc nói \"Xin lỗi, chúng ta hòa giải lại nhé\"?",
      id: "Jika teman yang Anda putuskan hubungannya menghubungi Anda mengatakan \"Maaf, mari kita rukun lagi\"?"
    },
    options: [
      {
        text: {
          ko: "\"이미 늦었어.\" 차단하거나 무시한다",
          en: "\"It's already too late.\" I block or ignore them",
          ja: "「もう遅いよ。」ブロックするか無視する",
          'zh-CN': "「已经太晚了。」屏蔽或无视",
          'zh-TW': "「已經太晚了。」屏蔽或無視",
          vi: "\"Đã muộn rồi.\" Chặn hoặc bỏ qua",
          id: "\"Sudah terlambat.\" Saya memblokir atau mengabaikan mereka"
        },
        typePoints: [1, 3] // Type 1, 3
      },
      {
        text: {
          ko: "진심으로 반성하는 것 같으면 한 번은 기회를 준다",
          en: "If they seem genuinely remorseful, I give them one chance",
          ja: "心から反省しているようであれば一度は機会を与える",
          'zh-CN': "如果看起来真心悔改，会给一次机会",
          'zh-TW': "如果看起來真心悔改，會給一次機會",
          vi: "Nếu có vẻ thật lòng hối lỗi thì cho một cơ hội",
          id: "Jika mereka tampak benar-benar menyesal, saya memberi mereka satu kesempatan"
        },
        typePoints: [5] // Type 5
      },
      {
        text: {
          ko: "옛 정이 생각나서 흔들리며 받아준다",
          en: "Old feelings come back, I waver and accept them",
          ja: "昔の情が思い出されて揺れ動きながら受け入れる",
          'zh-CN': "想起旧情，动摇后接受",
          'zh-TW': "想起舊情，動搖後接受",
          vi: "Nhớ lại tình cảm cũ, dao động rồi chấp nhận",
          id: "Perasaan lama muncul, saya goyah dan menerima mereka"
        },
        typePoints: [6] // Type 6
      },
      {
        text: {
          ko: "\"그래~\" 받아주긴 하지만 예전만큼 마음을 열진 않는다",
          en: "\"Sure~\" I accept them but don't open my heart as much as before",
          ja: "「うん～」受け入れるが以前ほど心を開かない",
          'zh-CN': "「好吧～」接受但不会像以前那样敞开心扉",
          'zh-TW': "「好吧～」接受但不會像以前那樣敞開心扉",
          vi: "\"Ừ~\" Chấp nhận nhưng không mở lòng như trước",
          id: "\"Tentu~\" Saya menerima mereka tetapi tidak membuka hati sebanyak sebelumnya"
        },
        typePoints: [2, 4] // Type 2, 4
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "당신이 생각하는 '이상적인 인간관계'는?",
      en: "What do you think is an 'ideal human relationship'?",
      ja: "あなたが考える「理想的な人間関係」は？",
      'zh-CN': "你认为的'理想人际关系'是什么？",
      'zh-TW': "你認為的「理想人際關係」是什麼？",
      vi: "Bạn nghĩ 'mối quan hệ lý tưởng' là gì?",
      id: "Apa yang Anda pikirkan sebagai 'hubungan manusia yang ideal'?"
    },
    options: [
      {
        text: {
          ko: "좁고 깊게. 내 사람 몇 명만 있으면 된다",
          en: "Narrow and deep. A few of my people are enough",
          ja: "狭く深く。私の人何人かいればいい",
          'zh-CN': "窄而深。有几个自己人就够了",
          'zh-TW': "窄而深。有幾個自己人就夠了",
          vi: "Hẹp và sâu. Chỉ cần vài người thân là đủ",
          id: "Sempit dan dalam. Beberapa orang saya sudah cukup"
        },
        typePoints: [1, 3] // Type 1, 3
      },
      {
        text: {
          ko: "넓고 얕게. 적당한 거리두기가 편하다",
          en: "Wide and shallow. Appropriate distance is comfortable",
          ja: "広く浅く。適度な距離感が楽",
          'zh-CN': "广而浅。适当的距离很舒服",
          'zh-TW': "廣而淺。適當的距離很舒服",
          vi: "Rộng và nông. Giữ khoảng cách phù hợp thì thoải mái",
          id: "Luas dan dangkal. Jarak yang tepat nyaman"
        },
        typePoints: [2, 4] // Type 2, 4
      },
      {
        text: {
          ko: "오는 사람 안 막고 가는 사람 안 잡는 쿨한 관계",
          en: "Cool relationships where I don't stop those who come or hold those who go",
          ja: "来る人を止めず、去る人を留めないクールな関係",
          'zh-CN': "不阻止来的人，不挽留走的人的冷静关系",
          'zh-TW': "不阻止來的人，不挽留走的人的冷靜關係",
          vi: "Mối quan hệ bình tĩnh: không chặn người đến, không giữ người đi",
          id: "Hubungan yang tenang di mana saya tidak menghentikan yang datang atau menahan yang pergi"
        },
        typePoints: [5] // Type 5
      },
      {
        text: {
          ko: "한 번 맺은 인연은 소중히 여기고 끝까지 가는 관계",
          en: "Relationships where once-formed bonds are treasured and maintained to the end",
          ja: "一度結んだ縁は大切にし、最後まで行く関係",
          'zh-CN': "珍惜一旦建立的关系并维持到最后",
          'zh-TW': "珍惜一旦建立的關係並維持到最後",
          vi: "Mối quan hệ coi trọng nhân duyên đã tạo và duy trì đến cuối",
          id: "Hubungan di mana ikatan yang telah terbentuk dihargai dan dipertahankan sampai akhir"
        },
        typePoints: [6] // Type 6
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "친구 사이에서 소외감을 느낄 때?",
      en: "When you feel excluded among friends?",
      ja: "友達の間で疎外感を感じるとき？",
      'zh-CN': "在朋友中感到被排斥时？",
      'zh-TW': "在朋友中感到被排斥時？",
      vi: "Khi cảm thấy bị loại trừ trong nhóm bạn?",
      id: "Ketika Anda merasa dikucilkan di antara teman?"
    },
    options: [
      {
        text: {
          ko: "\"나 빼고 재밌나 보네.\" 쿨하게 마이웨이 한다",
          en: "\"Looks fun without me.\" I coolly go my own way",
          ja: "「私抜きで楽しそうだね。」クールにマイウェイする",
          'zh-CN': "「看起来没有我也很开心。」冷静地走自己的路",
          'zh-TW': "「看起來沒有我也很開心。」冷靜地走自己的路",
          vi: "\"Có vẻ vui khi không có mình.\" Bình tĩnh đi theo cách riêng",
          id: "\"Terlihat menyenangkan tanpa saya.\" Saya dengan tenang menjalani cara saya sendiri"
        },
        typePoints: [1, 4] // Type 1, 4
      },
      {
        text: {
          ko: "내가 뭘 잘못했나 싶어서 눈치를 보고 비위를 맞춘다",
          en: "I wonder what I did wrong, so I watch their reactions and try to please them",
          ja: "私が何か間違えたのかと思って空気を読み、機嫌を取る",
          'zh-CN': "想知道自己做错了什么，所以察言观色并讨好",
          'zh-TW': "想知道自己做錯了什麼，所以察言觀色並討好",
          vi: "Nghĩ mình đã làm sai gì nên quan sát và cố làm hài lòng",
          id: "Saya bertanya-tanya apa yang saya lakukan salah, jadi saya mengawasi reaksi mereka dan mencoba menyenangkan mereka"
        },
        typePoints: [6] // Type 6
      },
      {
        text: {
          ko: "서운함을 토로하고 대화로 풀려고 시도한다",
          en: "I express my hurt feelings and try to resolve it through conversation",
          ja: "残念な気持ちを吐露し、対話で解決しようとする",
          'zh-CN': "表达受伤的感觉，尝试通过对话解决",
          'zh-TW': "表達受傷的感覺，嘗試通過對話解決",
          vi: "Bày tỏ cảm giác bị tổn thương và cố giải quyết qua đối thoại",
          id: "Saya mengungkapkan perasaan tersakiti dan mencoba menyelesaikannya melalui percakapan"
        },
        typePoints: [3, 5] // Type 3, 5
      },
      {
        text: {
          ko: "조용히 그 무리에서 빠져나와 다른 친구를 찾는다",
          en: "I quietly leave that group and find other friends",
          ja: "静かにその群れから抜け出して他の友達を探す",
          'zh-CN': "悄悄离开那个群体，寻找其他朋友",
          'zh-TW': "悄悄離開那個群體，尋找其他朋友",
          vi: "Lặng lẽ rời khỏi nhóm đó và tìm bạn khác",
          id: "Saya diam-diam meninggalkan kelompok itu dan mencari teman lain"
        },
        typePoints: [2] // Type 2
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "관계를 정리하고 난 후의 감정은?",
      en: "What are your emotions after ending a relationship?",
      ja: "関係を整理した後の感情は？",
      'zh-CN': "结束关系后的感受是？",
      'zh-TW': "結束關係後的感受是？",
      vi: "Cảm xúc sau khi kết thúc mối quan hệ là gì?",
      id: "Apa emosi Anda setelah mengakhiri suatu hubungan?"
    },
    options: [
      {
        text: {
          ko: "앓던 이가 빠진 것처럼 속이 시원하다",
          en: "I feel relieved, like a bad tooth has been pulled",
          ja: "痛んでいた歯が抜けたように胸がすっきりする",
          'zh-CN': "感觉轻松，就像拔掉了坏牙",
          'zh-TW': "感覺輕鬆，就像拔掉了壞牙",
          vi: "Cảm thấy nhẹ nhõm như vừa nhổ răng đau",
          id: "Saya merasa lega, seperti gigi yang sakit telah dicabut"
        },
        typePoints: [1] // Type 1
      },
      {
        text: {
          ko: "'내가 너무 했나?' 죄책감이 들고 찝찝하다",
          en: "'Did I go too far?' I feel guilty and uncomfortable",
          ja: "「私がやりすぎた？」罪悪感が湧き、気持ち悪い",
          'zh-CN': "「我做得太过分了吗？」感到内疚和不舒服",
          'zh-TW': "「我做得太過分了嗎？」感到內疚和不舒服",
          vi: "'Mình có quá đáng không?' Cảm thấy tội lỗi và khó chịu",
          id: "'Apakah saya berlebihan?' Saya merasa bersalah dan tidak nyaman"
        },
        typePoints: [6] // Type 6
      },
      {
        text: {
          ko: "허전하고 슬프지만 어쩔 수 없다고 생각한다",
          en: "I feel empty and sad but think there's nothing I can do",
          ja: "虚しさと悲しみを感じるが、仕方がないと思う",
          'zh-CN': "感到空虚和悲伤，但认为没办法",
          'zh-TW': "感到空虛和悲傷，但認為沒辦法",
          vi: "Cảm thấy trống rỗng và buồn nhưng nghĩ không thể làm gì",
          id: "Saya merasa kosong dan sedih tetapi berpikir tidak ada yang bisa saya lakukan"
        },
        typePoints: [5] // Type 5
      },
      {
        text: {
          ko: "곱씹으면서 그 사람 욕을 하거나 화를 낸다",
          en: "I dwell on it, curse them, or get angry",
          ja: "思い返しながらその人を罵ったり怒ったりする",
          'zh-CN': "反复回想，骂他们或生气",
          'zh-TW': "反覆回想，罵他們或生氣",
          vi: "Nghĩ đi nghĩ lại, chửi họ hoặc tức giận",
          id: "Saya merenungkannya, mengutuk mereka, atau marah"
        },
        typePoints: [3] // Type 3
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "평소 인간관계로 인한 스트레스 정도는?",
      en: "How much stress do you usually have from human relationships?",
      ja: "普段の人間関係によるストレス程度は？",
      'zh-CN': "平时人际关系带来的压力程度是？",
      'zh-TW': "平時人際關係帶來的壓力程度是？",
      vi: "Mức độ căng thẳng từ các mối quan hệ thường ngày là bao nhiêu?",
      id: "Seberapa besar stres yang biasanya Anda alami dari hubungan manusia?"
    },
    options: [
      {
        text: {
          ko: "거의 없다. 싫으면 안 보면 그만이다",
          en: "Almost none. If I don't like them, I just don't see them",
          ja: "ほとんどない。嫌なら会わなければそれでいい",
          'zh-CN': "几乎没有。不喜欢就不见",
          'zh-TW': "幾乎沒有。不喜歡就不見",
          vi: "Hầu như không có. Không thích thì không gặp thôi",
          id: "Hampir tidak ada. Jika saya tidak suka mereka, saya hanya tidak melihat mereka"
        },
        typePoints: [1, 4] // Type 1, 4
      },
      {
        text: {
          ko: "꽤 높다. 신경 쓸 게 너무 많다",
          en: "Quite high. There's too much to worry about",
          ja: "かなり高い。気を使うことが多すぎる",
          'zh-CN': "相当高。要操心的事太多",
          'zh-TW': "相當高。要操心的事太多",
          vi: "Khá cao. Có quá nhiều thứ phải lo",
          id: "Cukup tinggi. Terlalu banyak yang harus dikhawatirkan"
        },
        typePoints: [3, 6] // Type 3, 6
      },
      {
        text: {
          ko: "보통이다. 좋은 사람들과 지내기도 바쁘다",
          en: "Normal. I'm busy enough being with good people",
          ja: "普通だ。良い人たちと過ごすのも忙しい",
          'zh-CN': "一般。和好人相处也很忙",
          'zh-TW': "一般。和好人相處也很忙",
          vi: "Bình thường. Bận rộn với những người tốt rồi",
          id: "Normal. Saya cukup sibuk bersama orang-orang baik"
        },
        typePoints: [5] // Type 5
      },
      {
        text: {
          ko: "스트레스받지만 혼자가 되는 게 더 무섭다",
          en: "I'm stressed but being alone is scarier",
          ja: "ストレスは受けるが、一人になることの方がもっと怖い",
          'zh-CN': "有压力，但一个人更可怕",
          'zh-TW': "有壓力，但一個人更可怕",
          vi: "Có căng thẳng nhưng ở một mình còn đáng sợ hơn",
          id: "Saya stres tetapi sendirian lebih menakutkan"
        },
        typePoints: [6] // Type 6
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "나에게 '인맥'이란?",
      en: "What does 'social network' mean to me?",
      ja: "私にとって「人脈」とは？",
      'zh-CN': "对我来说'人脉'是什么？",
      'zh-TW': "對我來說「人脈」是什麼？",
      vi: "'Mạng lưới xã hội' đối với bạn là gì?",
      id: "Apa arti 'jaringan sosial' bagi saya?"
    },
    options: [
      {
        text: {
          ko: "나의 능력과 가치를 높여주는 자산",
          en: "An asset that enhances my abilities and value",
          ja: "私の能力と価値を高めてくれる資産",
          'zh-CN': "提升我能力和价值的资产",
          'zh-TW': "提升我能力和價值的資產",
          vi: "Tài sản nâng cao khả năng và giá trị của tôi",
          id: "Aset yang meningkatkan kemampuan dan nilai saya"
        },
        typePoints: [1] // Type 1
      },
      {
        text: {
          ko: "삶을 즐겁게 해주는 동반자",
          en: "Companions who make life enjoyable",
          ja: "人生を楽しくしてくれる仲間",
          'zh-CN': "让生活变得愉快的伙伴",
          'zh-TW': "讓生活變得愉快的夥伴",
          vi: "Những người bạn làm cuộc sống vui vẻ",
          id: "Teman yang membuat hidup menyenangkan"
        },
        typePoints: [5, 6] // Type 5, 6
      },
      {
        text: {
          ko: "있으면 좋고 없어도 그만인 옵션",
          en: "An option that's nice to have but not necessary",
          ja: "あればいいが、なくても構わないオプション",
          'zh-CN': "有的话很好，没有也无所谓的选项",
          'zh-TW': "有的話很好，沒也無所謂的選項",
          vi: "Một lựa chọn có thì tốt, không có cũng không sao",
          id: "Opsi yang bagus untuk dimiliki tetapi tidak perlu"
        },
        typePoints: [2, 4] // Type 2, 4
      },
      {
        text: {
          ko: "관리하고 유지해야 하는 숙제 같은 것",
          en: "Something like homework that needs to be managed and maintained",
          ja: "管理し維持しなければならない宿題のようなもの",
          'zh-CN': "像作业一样需要管理和维持的东西",
          'zh-TW': "像作業一樣需要管理和維持的東西",
          vi: "Thứ gì đó như bài tập cần được quản lý và duy trì",
          id: "Sesuatu seperti pekerjaan rumah yang perlu dikelola dan dipertahankan"
        },
        typePoints: [3] // Type 3
      }
    ]
  }
];

export const phase2RelationshipCutResults: Phase2RelationshipCutResult[] = [
  {
    type: "Type1",
    emoji: "✂️",
    title: {
      ko: "냉혹한 스나이퍼, 칼손절형",
      en: "Ruthless Sniper, Sharp Cut-off Type",
      ja: "冷酷なスナイパー、カット型",
      'zh-CN': "冷酷的狙击手，果断断交型",
      'zh-TW': "冷酷的狙擊手，果斷斷交型",
      vi: "Xạ thủ tàn nhẫn, Kiểu cắt đứt sắc bén",
      id: "Penembak Jitu Kejam, Tipe Pemutusan Tajam"
    },
    shortDescription: {
      ko: "\"내 인생에 불필요한 사람은 사절합니다.\"",
      en: "\"I decline unnecessary people in my life.\"",
      ja: "「私の人生に不要な人はお断りします。」",
      'zh-CN': "「我拒绝我生活中不必要的人。」",
      'zh-TW': "「我拒絕我生活中不必要的人。」",
      vi: "\"Tôi từ chối những người không cần thiết trong cuộc đời mình.\"",
      id: "\"Saya menolak orang yang tidak perlu dalam hidup saya.\""
    },
    description: {
      ko: "당신은 기준이 명확하고 결단력이 빠릅니다. 나에게 해가 되거나 가치가 없다고 판단되면 뒤도 돌아보지 않고 관계를 정리합니다. 시간과 감정 낭비를 극도로 싫어하며, \"아닌 건 아닌거야\"라는 마인드로 깔끔한 인맥을 유지합니다. 멘탈은 편하지만 때로는 너무 냉정하다는 평가를 받을 수 있습니다.",
      en: "You have clear standards and quick decision-making. If you judge someone as harmful or worthless to you, you end the relationship without looking back. You extremely dislike wasting time and emotions, and maintain a clean social network with the mindset that \"what's not right is not right.\" Your mental state is comfortable, but you may sometimes be evaluated as too cold.",
      ja: "あなたは基準が明確で決断力が速いです。私に害を与えるか価値がないと判断されれば、振り返らずに関係を整理します。時間と感情の浪費を極度に嫌い、「違うものは違う」というマインドでクリーンな人脈を維持します。メンタルは楽ですが、時には冷たすぎると評価されることがあります。",
      'zh-CN': "你有明确的标准和快速的决断力。如果判断某人对我有害或没有价值，你会毫不犹豫地结束关系。你极度讨厌浪费时间和情感，以\"不对就是不对\"的心态维持干净的人际网络。你的心理状态很舒适，但有时可能被评价为太冷漠。",
      'zh-TW': "你有明確的標準和快速的決斷力。如果判斷某人對我有害或沒有價值，你會毫不猶豫地結束關係。你極度討厭浪費時間和情感，以「不對就是不對」的心態維持乾淨的人際網絡。你的心理狀態很舒適，但有時可能被評價為太冷漠。",
      vi: "Bạn có tiêu chuẩn rõ ràng và quyết định nhanh. Nếu đánh giá ai đó có hại hoặc vô giá trị, bạn kết thúc mối quan hệ không ngoảnh lại. Bạn cực kỳ ghét lãng phí thời gian và cảm xúc, duy trì mạng lưới xã hội sạch sẽ với tư duy \"sai là sai\". Tâm trạng bạn thoải mái nhưng đôi khi bị đánh giá là quá lạnh lùng.",
      id: "Anda memiliki standar yang jelas dan pengambilan keputusan yang cepat. Jika Anda menilai seseorang berbahaya atau tidak berharga bagi Anda, Anda mengakhiri hubungan tanpa menoleh ke belakang. Anda sangat tidak suka membuang-buang waktu dan emosi, dan mempertahankan jaringan sosial yang bersih dengan pola pikir bahwa \"yang salah adalah salah.\" Kondisi mental Anda nyaman, tetapi Anda mungkin kadang dievaluasi terlalu dingin."
    },
    cutSpeed: {
      ko: "LTE급 (3초 컷)",
      en: "LTE-level (3-second cut)",
      ja: "LTE級（3秒カット）",
      'zh-CN': "LTE级（3秒断交）",
      'zh-TW': "LTE級（3秒斷交）",
      vi: "Cấp độ LTE (Cắt đứt 3 giây)",
      id: "Tingkat LTE (Pemutusan 3 detik)"
    },
    characteristics: {
      ko: "차단 목록 빵빵함, 후회 없음",
      en: "Block list full, No regrets",
      ja: "ブロックリスト満載、後悔なし",
      'zh-CN': "屏蔽列表满满，不后悔",
      'zh-TW': "屏蔽列表滿滿，不後悔",
      vi: "Danh sách chặn đầy, Không hối tiếc",
      id: "Daftar blokir penuh, Tidak menyesal"
    },
    goodMatch: {
      ko: "Type 4 (안전거리 유지형)",
      en: "Type 4 (Safe Distance Maintainer)",
      ja: "Type 4 (安全距離維持型)",
      'zh-CN': "Type 4 (保持安全距离型)",
      'zh-TW': "Type 4 (保持安全距離型)",
      vi: "Type 4 (Giữ khoảng cách an toàn)",
      id: "Type 4 (Pemelihara Jarak Aman)"
    },
    badMatch: {
      ko: "Type 6 (질척이는 호구형)",
      en: "Type 6 (Sticky Pushover Type)",
      ja: "Type 6 (ベタベタするお人好し型)",
      'zh-CN': "Type 6 (黏腻的老好人型)",
      'zh-TW': "Type 6 (黏膩的老好人型)",
      vi: "Type 6 (Kiểu dễ bị lợi dụng)",
      id: "Type 6 (Tipe Penurut Lengket)"
    }
  },
  {
    type: "Type2",
    emoji: "🚢",
    title: {
      ko: "조용히 사라지는, 잠수함형",
      en: "Quietly Disappearing, Submarine Type",
      ja: "静かに消える、潜水艦型",
      'zh-CN': "悄悄消失，潜艇型",
      'zh-TW': "悄悄消失，潛艇型",
      vi: "Lặng lẽ biến mất, Kiểu tàu ngầm",
      id: "Menghilang Diam-diam, Tipe Kapal Selam"
    },
    shortDescription: {
      ko: "\"굳이 싸우기 싫어... 그냥 조용히 멀어질래.\"",
      en: "\"I don't want to fight... I'd rather just quietly drift away.\"",
      ja: "「わざわざ喧嘩したくない...ただ静かに離れたい。」",
      'zh-CN': "「不想吵架...只想悄悄远离。」",
      'zh-TW': "「不想吵架...只想悄悄遠離。」",
      vi: "\"Không muốn cãi nhau... Chỉ muốn lặng lẽ rời xa.\"",
      id: "\"Saya tidak ingin bertengkar... Saya lebih suka diam-diam menjauh.\""
    },
    description: {
      ko: "당신은 갈등을 싫어하는 회피형입니다. 상대방 면전에서 싫은 소리를 하느니, 차라리 내가 조용히 사라지는 편을 택합니다. 서서히 연락을 줄이거나 읽씹/안읽씹 스킬을 시전하여 상대방이 제풀에 지쳐 떨어져 나가게 만듭니다. '손절'보다는 '자연 소멸'을 선호합니다.",
      en: "You're an avoidant type who dislikes conflict. Rather than saying unpleasant things to someone's face, you prefer to quietly disappear yourself. You gradually reduce contact or use read/unread skills to make the other person tired and naturally drift away. You prefer 'natural extinction' over 'cutting off'.",
      ja: "あなたは葛藤を嫌う回避型です。相手の面前で嫌なことを言うより、むしろ自分が静かに消える方を選びます。徐々に連絡を減らしたり既読スルー/未読スルースキルを使ったりして、相手が自然に疲れて離れていくようにします。「手切れ」よりも「自然消滅」を好みます。",
      'zh-CN': "你是讨厌冲突的回避型。与其当面说难听的话，你更愿意自己悄悄消失。你逐渐减少联系或使用已读不回/未读不回技能，让对方自然疲惫而离开。你更喜欢'自然消失'而不是'断交'。",
      'zh-TW': "你是討厭衝突的迴避型。與其當面說難聽的話，你更願意自己悄悄消失。你逐漸減少聯繫或使用已讀不回/未讀不回技能，讓對方自然疲憊而離開。你更喜歡「自然消失」而不是「斷交」。",
      vi: "Bạn là kiểu tránh né, ghét xung đột. Thay vì nói điều khó chịu trước mặt, bạn chọn cách lặng lẽ biến mất. Bạn dần giảm liên lạc hoặc dùng kỹ năng đã đọc/không đọc để đối phương tự mệt và rời đi. Bạn thích 'tự nhiên biến mất' hơn 'cắt đứt'.",
      id: "Anda adalah tipe menghindar yang tidak suka konflik. Daripada mengatakan hal yang tidak menyenangkan di hadapan seseorang, Anda lebih suka menghilang dengan tenang. Anda secara bertahap mengurangi kontak atau menggunakan keterampilan baca/tidak baca untuk membuat orang lain lelah dan secara alami menjauh. Anda lebih suka 'kepunahan alami' daripada 'memutuskan'."
    },
    cutSpeed: {
      ko: "서서히 (알 수 없음)",
      en: "Gradually (Unknown)",
      ja: "徐々に（不明）",
      'zh-CN': "逐渐（未知）",
      'zh-TW': "逐漸（未知）",
      vi: "Dần dần (Không rõ)",
      id: "Bertahap (Tidak diketahui)"
    },
    characteristics: {
      ko: "회피 만렙, 겉으로는 평온함",
      en: "Max avoidance, Outwardly calm",
      ja: "回避マックス、外見は平穏",
      'zh-CN': "回避满级，表面平静",
      'zh-TW': "迴避滿級，表面平靜",
      vi: "Tránh né tối đa, Bề ngoài bình tĩnh",
      id: "Penghindaran maksimal, Secara lahiriah tenang"
    },
    goodMatch: {
      ko: "Type 1 (알아서 정리해줌)",
      en: "Type 1 (Takes Care of It Themselves)",
      ja: "Type 1 (自分で整理してくれる)",
      'zh-CN': "Type 1 (自己会处理)",
      'zh-TW': "Type 1 (自己會處理)",
      vi: "Type 1 (Tự biết xử lý)",
      id: "Type 1 (Mengurus Sendiri)"
    },
    badMatch: {
      ko: "Type 3 (끝까지 이유를 물어봄)",
      en: "Type 3 (Asks for Reasons Until the End)",
      ja: "Type 3 (最後まで理由を聞く)",
      'zh-CN': "Type 3 (一直追问原因)",
      'zh-TW': "Type 3 (一直追問原因)",
      vi: "Type 3 (Hỏi lý do đến cùng)",
      id: "Type 3 (Bertanya Alasan Sampai Akhir)"
    }
  },
  {
    type: "Type3",
    emoji: "💣",
    title: {
      ko: "참다 참다 폭발하는, 시한폭탄형",
      en: "Enduring Then Exploding, Time Bomb Type",
      ja: "我慢して我慢して爆発する、時限爆弾型",
      'zh-CN': "忍了又忍然后爆发，定时炸弹型",
      'zh-TW': "忍了又忍然後爆發，定時炸彈型",
      vi: "Nhịn nhịn rồi bùng nổ, Kiểu bom hẹn giờ",
      id: "Bertahan Lalu Meledak, Tipe Bom Waktu"
    },
    shortDescription: {
      ko: "\"내가 호구로 보이니? 참는 데도 한계가 있어!\"",
      en: "\"Do I look like a pushover? There's a limit to how much I can endure!\"",
      ja: "「私がお人好しに見える？我慢にも限界がある！」",
      'zh-CN': "「我看上去像老好人吗？忍耐也是有限度的！」",
      'zh-TW': "「我看上去像老好人嗎？忍耐也是有限度的！」",
      vi: "\"Tôi trông như người dễ bị lợi dụng à? Nhịn nhịn cũng có giới hạn!\"",
      id: "\"Apakah saya terlihat seperti penurut? Ada batas untuk berapa banyak yang bisa saya tahan!\""
    },
    description: {
      ko: "당신은 인내심이 강해서 웬만하면 참고 넘어갑니다. 하지만 마음속에 '참을 인(忍)' 자를 새기며 불만을 차곡차곡 마일리지처럼 쌓아둡니다. 그러다 임계점을 넘는 순간 대폭발하여 과거의 일까지 모두 쏟아내고 관계를 끝내버립니다. 상대방은 \"갑자기 왜 저래?\"라며 당황할 수 있습니다.",
      en: "You have strong patience, so you usually endure and let things pass. But you carve the character 'endure (忍)' in your heart and accumulate dissatisfaction like mileage points. Then, the moment you cross the critical point, you explode massively, pouring out everything including past events, and end the relationship. The other person may be confused, saying \"Why are you suddenly like this?\"",
      ja: "あなたは忍耐力が強いので、普通は我慢してやり過ごします。しかし心の中に「忍」という字を刻み、不満をマイルのように積み重ねます。そして臨界点を超える瞬間、大爆発して過去の出来事まで全て吐き出し、関係を終わらせてしまいます。相手は「急にどうしたの？」と戸惑うかもしれません。",
      'zh-CN': "你很有耐心，所以通常会忍耐并让事情过去。但你在心里刻下'忍'字，像积累里程一样积累不满。然后，当你越过临界点的瞬间，你会大爆发，把包括过去的事情都倾泻出来，结束关系。对方可能会困惑地说「为什么突然这样？」",
      'zh-TW': "你很有耐心，所以通常會忍耐並讓事情過去。但你在心裡刻下「忍」字，像積累里程一樣積累不滿。然後，當你越過臨界點的瞬間，你會大爆發，把包括過去的事情都傾瀉出來，結束關係。對方可能會困惑地說「為什麼突然這樣？」",
      vi: "Bạn rất kiên nhẫn nên thường nhịn và bỏ qua. Nhưng bạn khắc chữ 'nhẫn' trong lòng và tích lũy bất mãn như điểm thưởng. Rồi khi vượt qua điểm tới hạn, bạn bùng nổ, trút hết mọi thứ kể cả quá khứ và kết thúc mối quan hệ. Đối phương có thể bối rối: \"Sao đột nhiên thế?\"",
      id: "Anda memiliki kesabaran yang kuat, jadi Anda biasanya menahan dan membiarkan hal-hal berlalu. Tetapi Anda mengukir karakter 'tahan (忍)' di hati Anda dan mengakumulasi ketidakpuasan seperti poin mileage. Kemudian, saat Anda melewati titik kritis, Anda meledak besar-besaran, menuangkan segalanya termasuk peristiwa masa lalu, dan mengakhiri hubungan. Orang lain mungkin bingung, mengatakan \"Mengapa Anda tiba-tiba seperti ini?\""
    },
    cutSpeed: {
      ko: "느리지만 파괴력 큼",
      en: "Slow but highly destructive",
      ja: "遅いが破壊力大",
      'zh-CN': "慢但破坏力大",
      'zh-TW': "慢但破壞力大",
      vi: "Chậm nhưng sức phá hủy lớn",
      id: "Lambat tetapi sangat merusak"
    },
    characteristics: {
      ko: "마일리지 적립, 한 번 돌아서면 끝",
      en: "Mileage accumulation, Once turned away, it's over",
      ja: "マイル積立、一度背を向けたら終わり",
      'zh-CN': "积累里程，一旦转身就结束",
      'zh-TW': "積累里程，一旦轉身就結束",
      vi: "Tích lũy điểm, Quay lưng một lần là hết",
      id: "Akumulasi mileage, Sekali berbalik, selesai"
    },
    goodMatch: {
      ko: "Type 5 (건강한 대화형)",
      en: "Type 5 (Healthy Conversation Type)",
      ja: "Type 5 (健康的な対話型)",
      'zh-CN': "Type 5 (健康对话型)",
      'zh-TW': "Type 5 (健康對話型)",
      vi: "Type 5 (Kiểu đối thoại lành mạnh)",
      id: "Type 5 (Tipe Percakapan Sehat)"
    },
    badMatch: {
      ko: "Type 2 (반응이 없어서 답답함)",
      en: "Type 2 (Frustrating Because No Response)",
      ja: "Type 2 (反応がなくてイライラする)",
      'zh-CN': "Type 2 (没有回应让人沮丧)",
      'zh-TW': "Type 2 (沒有回應讓人沮喪)",
      vi: "Type 2 (Không phản hồi nên bực mình)",
      id: "Type 2 (Frustasi Karena Tidak Ada Respons)"
    }
  },
  {
    type: "Type4",
    emoji: "🦔",
    title: {
      ko: "안전거리 유지, 고슴도치형",
      en: "Maintaining Safe Distance, Hedgehog Type",
      ja: "安全距離維持、ハリネズミ型",
      'zh-CN': "保持安全距离，刺猬型",
      'zh-TW': "保持安全距離，刺蝟型",
      vi: "Giữ khoảng cách an toàn, Kiểu nhím",
      id: "Mempertahankan Jarak Aman, Tipe Landak"
    },
    shortDescription: {
      ko: "\"가까이 오지 마세요. 이 정도 거리가 딱 좋아.\"",
      en: "\"Don't come too close. This distance is just right.\"",
      ja: "「近づかないでください。この距離がちょうどいい。」",
      'zh-CN': "「不要靠太近。这个距离正好。」",
      'zh-TW': "「不要靠太近。這個距離正好。」",
      vi: "\"Đừng đến gần. Khoảng cách này vừa đủ.\"",
      id: "\"Jangan terlalu dekat. Jarak ini pas.\""
    },
    description: {
      ko: "당신은 타인에게 마음을 쉽게 열지 않습니다. 처음부터 선을 긋고 적당한 거리를 유지하기 때문에 굳이 손절할 일도 별로 없습니다. 좁고 깊은 관계보다는 넓고 얕은 관계, 혹은 좁고 얕은 관계를 선호합니다. 상처받기 싫어서 미리 방어막을 치는 타입입니다.",
      en: "You don't easily open your heart to others. You draw a line from the start and maintain an appropriate distance, so you rarely need to cut people off. You prefer wide and shallow relationships, or narrow and shallow relationships, rather than narrow and deep ones. You're the type who erects a defensive barrier in advance because you don't want to get hurt.",
      ja: "あなたは他人に心を簡単に開きません。最初から線を引いて適度な距離を保つため、わざわざ手切れする必要もあまりありません。狭く深い関係よりも広く浅い関係、あるいは狭く浅い関係を好みます。傷つきたくないので事前に防御壁を張るタイプです。",
      'zh-CN': "你不轻易向他人敞开心扉。从一开始就划清界限并保持适当距离，所以很少需要断交。你更喜欢广而浅的关系，或窄而浅的关系，而不是窄而深的关系。你是那种因为不想受伤而提前设置防御屏障的类型。",
      'zh-TW': "你不輕易向他人敞開心扉。從一開始就劃清界線並保持適當距離，所以很少需要斷交。你更喜歡廣而淺的關係，或窄而淺的關係，而不是窄而深的關係。你是那種因為不想受傷而提前設置防禦屏障的類型。",
      vi: "Bạn không dễ mở lòng với người khác. Bạn vạch ranh giới ngay từ đầu và giữ khoảng cách phù hợp nên ít khi cần cắt đứt. Bạn thích mối quan hệ rộng và nông, hoặc hẹp và nông, hơn là hẹp và sâu. Bạn là kiểu dựng rào chắn phòng thủ trước vì không muốn bị tổn thương.",
      id: "Anda tidak mudah membuka hati kepada orang lain. Anda menarik garis dari awal dan mempertahankan jarak yang tepat, jadi Anda jarang perlu memutuskan hubungan. Anda lebih suka hubungan yang luas dan dangkal, atau sempit dan dangkal, daripada yang sempit dan dalam. Anda adalah tipe yang memasang penghalang pertahanan terlebih dahulu karena tidak ingin terluka."
    },
    cutSpeed: {
      ko: "해당 없음 (진입 장벽 높음)",
      en: "Not applicable (High entry barrier)",
      ja: "該当なし（参入障壁高い）",
      'zh-CN': "不适用（进入门槛高）",
      'zh-TW': "不適用（進入門檻高）",
      vi: "Không áp dụng (Rào cản vào cao)",
      id: "Tidak berlaku (Penghalang masuk tinggi)"
    },
    characteristics: {
      ko: "낯가림, 개인주의, 사생활 중시",
      en: "Shy with strangers, Individualistic, Privacy-focused",
      ja: "人見知り、個人主義、プライバシー重視",
      'zh-CN': "认生，个人主义，重视隐私",
      'zh-TW': "認生，個人主義，重視隱私",
      vi: "Nhút nhát, Cá nhân chủ nghĩa, Coi trọng riêng tư",
      id: "Pemalu dengan orang asing, Individualistis, Fokus pada privasi"
    },
    goodMatch: {
      ko: "Type 1 (서로 터치 안 함)",
      en: "Type 1 (Don't Touch Each Other)",
      ja: "Type 1 (お互い触らない)",
      'zh-CN': "Type 1 (互不触碰)",
      'zh-TW': "Type 1 (互不觸碰)",
      vi: "Type 1 (Không chạm vào nhau)",
      id: "Type 1 (Tidak Saling Menyentuh)"
    },
    badMatch: {
      ko: "Type 6 (자꾸 선 넘으려 함)",
      en: "Type 6 (Keeps Trying to Cross the Line)",
      ja: "Type 6 (しつこく線を越えようとする)",
      'zh-CN': "Type 6 (总是试图越界)",
      'zh-TW': "Type 6 (總是試圖越界)",
      vi: "Type 6 (Cứ cố vượt ranh giới)",
      id: "Type 6 (Terus Mencoba Melewati Garis)"
    }
  },
  {
    type: "Type5",
    emoji: "⚖️",
    title: {
      ko: "성숙한 조율자, 건강한 대화형",
      en: "Mature Mediator, Healthy Conversation Type",
      ja: "成熟した調停者、健康的な対話型",
      'zh-CN': "成熟的调解者，健康对话型",
      'zh-TW': "成熟的調解者，健康對話型",
      vi: "Người hòa giải trưởng thành, Kiểu đối thoại lành mạnh",
      id: "Mediator Dewasa, Tipe Percakapan Sehat"
    },
    shortDescription: {
      ko: "\"우리 관계에 대해 이야기 좀 할까?\"",
      en: "\"Shall we talk about our relationship?\"",
      ja: "「私たちの関係について話しませんか？」",
      'zh-CN': "「我们谈谈我们的关系好吗？」",
      'zh-TW': "「我們談談我們的關係好嗎？」",
      vi: "\"Chúng ta nói chuyện về mối quan hệ của chúng ta nhé?\"",
      id: "\"Bisakah kita berbicara tentang hubungan kita?\""
    },
    description: {
      ko: "당신은 문제가 생기면 대화로 풀려고 노력하는 성숙한 사람입니다. 무조건 참거나 끊어내기보다는, 서로의 입장을 이해하고 조율점을 찾으려 합니다. 그래도 안 되면 서로를 위해 좋게 마무리 짓습니다. 가장 이상적이지만 감정 소모가 큽니다.",
      en: "You're a mature person who tries to resolve problems through conversation. Rather than unconditionally enduring or cutting off, you try to understand each other's positions and find a compromise. If that doesn't work, you end it well for each other's sake. It's the most ideal, but emotionally draining.",
      ja: "あなたは問題が生じたら対話で解決しようと努力する成熟した人です。無条件に我慢したり断ち切ったりするより、お互いの立場を理解し、調整点を見つけようとします。それでもうまくいかない場合は、お互いのためにうまく終わらせます。最も理想的ですが、感情的な消耗が大きいです。",
      'zh-CN': "你是一个成熟的人，当问题出现时，你努力通过对话解决。与其无条件忍耐或断交，你试图理解彼此的立场并找到妥协点。如果那样也不行，你会为了彼此好而友好地结束。这是最理想的，但情感消耗很大。",
      'zh-TW': "你是一個成熟的人，當問題出現時，你努力通過對話解決。與其無條件忍耐或斷交，你試圖理解彼此的立場並找到妥協點。如果那樣也不行，你會為了彼此好而友好地結束。這是最理想的，但情感消耗很大。",
      vi: "Bạn là người trưởng thành, cố giải quyết vấn đề qua đối thoại. Thay vì nhịn vô điều kiện hoặc cắt đứt, bạn cố hiểu lập trường của nhau và tìm điểm thỏa hiệp. Nếu không được, bạn kết thúc tốt đẹp vì nhau. Lý tưởng nhất nhưng hao tổn cảm xúc nhiều.",
      id: "Anda adalah orang dewasa yang mencoba menyelesaikan masalah melalui percakapan. Daripada menahan tanpa syarat atau memutuskan, Anda mencoba memahami posisi satu sama lain dan menemukan kompromi. Jika itu tidak berhasil, Anda mengakhirinya dengan baik demi kepentingan satu sama lain. Ini yang paling ideal, tetapi melelahkan secara emosional."
    },
    cutSpeed: {
      ko: "신중함",
      en: "Cautious",
      ja: "慎重",
      'zh-CN': "谨慎",
      'zh-TW': "謹慎",
      vi: "Thận trọng",
      id: "Hati-hati"
    },
    characteristics: {
      ko: "매너 있음, 뒤끝 없음, 평화주의",
      en: "Mannered, No grudges, Pacifist",
      ja: "マナーがある、後味がない、平和主義",
      'zh-CN': "有礼貌，不记仇，和平主义",
      'zh-TW': "有禮貌，不記仇，和平主義",
      vi: "Có phép tắc, Không hậu họa, Hòa bình chủ nghĩa",
      id: "Berperilaku baik, Tidak menyimpan dendam, Pasifis"
    },
    goodMatch: {
      ko: "Type 3 (들어주면 풀림)",
      en: "Type 3 (Resolves When Listened To)",
      ja: "Type 3 (聞いてもらえば解決する)",
      'zh-CN': "Type 3 (倾听后能解决)",
      'zh-TW': "Type 3 (傾聽後能解決)",
      vi: "Type 3 (Lắng nghe thì giải quyết được)",
      id: "Type 3 (Terselesaikan Saat Didengarkan)"
    },
    badMatch: {
      ko: "Type 2 (대화를 피해서 힘듦)",
      en: "Type 2 (Difficult Because They Avoid Conversation)",
      ja: "Type 2 (対話を避けるので大変)",
      'zh-CN': "Type 2 (因为回避对话而困难)",
      'zh-TW': "Type 2 (因為迴避對話而困難)",
      vi: "Type 2 (Tránh đối thoại nên khó khăn)",
      id: "Type 2 (Sulit Karena Menghindari Percakapan)"
    }
  },
  {
    type: "Type6",
    emoji: "🥺",
    title: {
      ko: "정에 약한, 질척이는 호구형",
      en: "Weak to Emotions, Sticky Pushover Type",
      ja: "情に弱い、ベタベタするお人好し型",
      'zh-CN': "感情脆弱，黏腻的老好人型",
      'zh-TW': "感情脆弱，黏膩的老好人型",
      vi: "Yếu đuối trước tình cảm, Kiểu dễ bị lợi dụng",
      id: "Lemah Terhadap Emosi, Tipe Penurut Lengket"
    },
    shortDescription: {
      ko: "\"그래도 친구잖아... 내가 더 잘할게.\"",
      en: "\"But we're still friends... I'll do better.\"",
      ja: "「それでも友達じゃん...私がもっと頑張る。」",
      'zh-CN': "「但我们是朋友啊...我会做得更好的。」",
      'zh-TW': "「但我們是朋友啊...我會做得更好的。」",
      vi: "\"Nhưng vẫn là bạn mà... Mình sẽ làm tốt hơn.\"",
      id: "\"Tapi kita masih teman... Saya akan melakukan lebih baik.\""
    },
    description: {
      ko: "당신은 사람을 너무 좋아하고 정이 많아서 탈인 유형입니다. 상대방이 나에게 상처를 줘도 \"그럴 만한 이유가 있었겠지\"라며 합리화하고 용서합니다. 관계를 끊는 것을 두려워하며, 악연인 줄 알면서도 질질 끌고 갑니다. 끊어내는 용기가 필요합니다.",
      en: "You're a type who likes people too much and has too much affection, which is a problem. Even when someone hurts you, you rationalize and forgive them, thinking \"They must have had a reason.\" You're afraid of cutting off relationships, and even when you know it's a bad relationship, you drag it on. You need the courage to cut it off.",
      ja: "あなたは人を好きすぎて情が多すぎて困るタイプです。相手が私を傷つけても「それなりの理由があっただろう」と合理化して許します。関係を断つことを恐れ、悪縁だと分かっていてもだらだらと続けます。断ち切る勇気が必要です。",
      'zh-CN': "你是那种太喜欢人、感情太多而成为问题的类型。即使对方伤害了你，你也会合理化并原谅，认为「他们一定有理由」。你害怕切断关系，即使知道是恶缘，也会拖拖拉拉地继续。你需要切断的勇气。",
      'zh-TW': "你是那種太喜歡人、感情太多而成為問題的類型。即使對方傷害了你，你也會合理化並原諒，認為「他們一定有理由」。你害怕切斷關係，即使知道是惡緣，也會拖拖拉拉地繼續。你需要切斷的勇氣。",
      vi: "Bạn là kiểu quá thích người và quá nhiều tình cảm nên gặp vấn đề. Dù người khác làm tổn thương, bạn vẫn biện minh và tha thứ, nghĩ \"Họ chắc có lý do\". Bạn sợ cắt đứt mối quan hệ, dù biết là ác duyên vẫn kéo dài. Bạn cần can đảm để cắt đứt.",
      id: "Anda adalah tipe yang terlalu menyukai orang dan memiliki terlalu banyak kasih sayang, yang menjadi masalah. Bahkan ketika seseorang menyakiti Anda, Anda merasionalisasi dan memaafkan mereka, berpikir \"Mereka pasti punya alasan.\" Anda takut memutuskan hubungan, dan bahkan ketika Anda tahu itu adalah hubungan yang buruk, Anda menyeretnya. Anda perlu keberanian untuk memutuskannya."
    },
    cutSpeed: {
      ko: "불가능 (못 함)",
      en: "Impossible (Can't do it)",
      ja: "不可能（できない）",
      'zh-CN': "不可能（做不到）",
      'zh-TW': "不可能（做不到）",
      vi: "Không thể (Không làm được)",
      id: "Tidak mungkin (Tidak bisa melakukannya)"
    },
    characteristics: {
      ko: "거절 못 함, 미련 많음, 상처 잘 받음",
      en: "Can't refuse, Lots of lingering feelings, Gets hurt easily",
      ja: "断れない、未練が多い、傷つきやすい",
      'zh-CN': "无法拒绝，留恋很多，容易受伤",
      'zh-TW': "無法拒絕，留戀很多，容易受傷",
      vi: "Không thể từ chối, Nhiều luyến tiếc, Dễ bị tổn thương",
      id: "Tidak bisa menolak, Banyak perasaan yang tersisa, Mudah terluka"
    },
    goodMatch: {
      ko: "Type 5 (나를 존중해줌)",
      en: "Type 5 (Respects Me)",
      ja: "Type 5 (私を尊重してくれる)",
      'zh-CN': "Type 5 (尊重我)",
      'zh-TW': "Type 5 (尊重我)",
      vi: "Type 5 (Tôn trọng tôi)",
      id: "Type 5 (Menghormati Saya)"
    },
    badMatch: {
      ko: "Type 1 (가차 없이 버려짐)",
      en: "Type 1 (Ruthlessly Abandoned)",
      ja: "Type 1 (容赦なく見捨てられる)",
      'zh-CN': "Type 1 (被无情抛弃)",
      'zh-TW': "Type 1 (被無情拋棄)",
      vi: "Type 1 (Bị bỏ rơi không thương tiếc)",
      id: "Type 1 (Ditinggalkan Tanpa Ampun)"
    }
  }
];

// 채점 함수: 각 답변의 typePoints를 합산하여 가장 높은 점수의 Type 반환
export function calculatePhase2RelationshipCutResult(answers: number[]): string {
  // Type별 점수 초기화 (1-6)
  const typeScores: Record<number, number> = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0
  };

  // 각 질문의 답변에 대해 해당하는 Type들에 점수 추가
  answers.forEach((selectedOptionIndex, questionIndex) => {
    const question = phase2RelationshipCutQuestions[questionIndex];
    if (question && question.options[selectedOptionIndex]) {
      const selectedOption = question.options[selectedOptionIndex];
      // 선택된 옵션의 typePoints 배열에 있는 모든 Type에 1점씩 추가
      selectedOption.typePoints.forEach(type => {
        typeScores[type] = (typeScores[type] || 0) + 1;
      });
    }
  });

  // 가장 높은 점수를 가진 Type 찾기
  let maxScore = 0;
  let resultType = 1; // 기본값

  // 동점일 경우 우선순위: Type 3 > Type 2 > Type 6 > Type 1 > Type 4 > Type 5
  const priority = [3, 2, 6, 1, 4, 5];

  for (const type of priority) {
    if (typeScores[type] > maxScore) {
      maxScore = typeScores[type];
      resultType = type;
    }
  }

  return `Type${resultType}`;
}
