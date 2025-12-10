export interface TimePerspectiveQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    score: number; // A=0 (과거 지향), B=1 (미래 지향)
  }[];
}

export interface TimePerspectiveResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  timePerspective: Record<string, string>; // "과거 90% + 현재 10%" 등
  characteristics: Record<string, string>; // 주요 특징
  goodMatch: Record<string, string>; // 환상의 짝꿍
  badMatch: Record<string, string>; // 환장의 짝꿍
}

export const timePerspectiveQuestions: TimePerspectiveQuestion[] = [
  {
    id: 1,
    question: {
      ko: "타임머신이 개발되었다. 딱 한 번 이용할 수 있다면?",
      en: "A time machine has been developed. If you could use it just once?",
      ja: "タイムマシンが開発されました。一度だけ使えるとしたら？",
      'zh-CN': "时光机已经开发出来了。如果只能使用一次？",
      'zh-TW': "時光機已經開發出來了。如果只能使用一次？",
      vi: "Cỗ máy thời gian đã được phát minh. Nếu bạn chỉ có thể sử dụng một lần?",
      id: "Mesin waktu telah dikembangkan. Jika Anda hanya bisa menggunakannya sekali?"
    },
    options: [
      {
        text: {
          ko: "가장 행복했던 어린 시절이나, 후회되는 순간을 바꾸러 과거로 간다.",
          en: "Go to the past to change the happiest childhood moment or a moment of regret.",
          ja: "最も幸せだった幼少期や、後悔している瞬間を変えるために過去へ行く。",
          'zh-CN': "回到过去改变最幸福的童年时光或后悔的瞬间。",
          'zh-TW': "回到過去改變最幸福的童年時光或後悔的瞬間。",
          vi: "Quay về quá khứ để thay đổi khoảnh khắc hạnh phúc nhất thời thơ ấu hoặc khoảnh khắc hối tiếc.",
          id: "Pergi ke masa lalu untuk mengubah momen masa kecil paling bahagia atau momen penyesalan."
        },
        score: 0 // A = 과거 지향
      },
      {
        text: {
          ko: "10년 뒤, 50년 뒤 세상이 어떻게 변했을지 확인하러 미래로 간다.",
          en: "Go to the future to see how the world has changed in 10 or 50 years.",
          ja: "10年後、50年後の世界がどう変わったか確認するために未来へ行く。",
          'zh-CN': "前往未来看看10年或50年后世界如何变化。",
          'zh-TW': "前往未來看看10年或50年後世界如何變化。",
          vi: "Đi đến tương lai để xem thế giới đã thay đổi như thế nào sau 10 hoặc 50 năm.",
          id: "Pergi ke masa depan untuk melihat bagaimana dunia berubah dalam 10 atau 50 tahun."
        },
        score: 1 // B = 미래 지향
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "멍하니 있을 때 주로 하는 생각은?",
      en: "What do you usually think about when spacing out?",
      ja: "ぼーっとしているとき、主に何を考える？",
      'zh-CN': "发呆时你主要想什么？",
      'zh-TW': "發呆時你主要想什麼？",
      vi: "Bạn thường nghĩ gì khi đang mơ màng?",
      id: "Apa yang biasanya Anda pikirkan saat melamun?"
    },
    options: [
      {
        text: {
          ko: "\"그때 참 좋았지...\" 옛날 일이나 헤어진 연인, 학창 시절 생각.",
          en: "\"Those were the good times...\" Thinking about old times, ex-lovers, school days.",
          ja: "「あの頃は良かったな...」昔のことや別れた恋人、学生時代のことを考える。",
          'zh-CN': "「那时候真好...」想着过去的事、分手的恋人、学生时代。",
          'zh-TW': "「那時候真好...」想著過去的事、分手的戀人、學生時代。",
          vi: "\"Những ngày đó thật tốt...\" Nghĩ về quá khứ, người yêu cũ, thời học sinh.",
          id: "\"Masa-masa itu menyenangkan...\" Memikirkan masa lalu, mantan kekasih, masa sekolah."
        },
        score: 0
      },
      {
        text: {
          ko: "\"앞으로 뭐 해 먹고 살지?\" 내일 할 일이나 노후 계획, 커리어 생각.",
          en: "\"What will I do to make a living?\" Thinking about tomorrow's tasks, retirement plans, career.",
          ja: "「これから何をして食べていくんだろう？」明日やることや老後の計画、キャリアのことを考える。",
          'zh-CN': "「以后要做什么来生活？」想着明天要做的事、退休计划、职业。",
          'zh-TW': "「以後要做什麼來生活？」想著明天要做的事、退休計劃、職業。",
          vi: "\"Sau này sẽ làm gì để sống?\" Nghĩ về công việc ngày mai, kế hoạch nghỉ hưu, sự nghiệp.",
          id: "\"Apa yang akan saya lakukan untuk mencari nafkah?\" Memikirkan tugas besok, rencana pensiun, karier."
        },
        score: 1
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "10억 복권에 당첨되었다! 당신의 첫 번째 행동은?",
      en: "You won 1 billion in the lottery! What's your first action?",
      ja: "10億円の宝くじに当選した！あなたの最初の行動は？",
      'zh-CN': "你中了10亿彩票！你的第一个行动是？",
      'zh-TW': "你中了10億彩票！你的第一個行動是？",
      vi: "Bạn trúng xổ số 1 tỷ! Hành động đầu tiên của bạn là gì?",
      id: "Anda memenangkan 1 miliar dalam lotre! Apa tindakan pertama Anda?"
    },
    options: [
      {
        text: {
          ko: "그동안 고마웠던 사람들에게 빚을 갚거나 부모님 집을 사드린다.",
          en: "Pay back debts to people who helped me or buy my parents a house.",
          ja: "これまでお世話になった人に借金を返すか、両親に家を買ってあげる。",
          'zh-CN': "还清帮助过我的人的债务，或给父母买房子。",
          'zh-TW': "還清幫助過我的人的債務，或給父母買房子。",
          vi: "Trả nợ cho những người đã giúp đỡ mình hoặc mua nhà cho bố mẹ.",
          id: "Membayar utang kepada orang yang telah membantu atau membelikan rumah untuk orang tua."
        },
        score: 0
      },
      {
        text: {
          ko: "이 돈을 어떻게 불릴지 투자처를 알아보거나 창업 계획을 세운다.",
          en: "Research investment opportunities or make a business plan to grow this money.",
          ja: "このお金をどう増やすか投資先を調べたり、起業計画を立てる。",
          'zh-CN': "研究投资机会或制定商业计划来让这笔钱增值。",
          'zh-TW': "研究投資機會或制定商業計劃來讓這筆錢增值。",
          vi: "Nghiên cứu cơ hội đầu tư hoặc lập kế hoạch kinh doanh để làm tăng số tiền này.",
          id: "Meneliti peluang investasi atau membuat rencana bisnis untuk mengembangkan uang ini."
        },
        score: 1
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "당신의 스마트폰 갤러리(사진첩)는?",
      en: "What is your smartphone gallery (photo album) like?",
      ja: "あなたのスマートフォンのギャラリー（写真アルバム）は？",
      'zh-CN': "你的智能手机相册是什么样的？",
      'zh-TW': "你的智能手機相冊是什麼樣的？",
      vi: "Thư viện ảnh (album ảnh) trên điện thoại thông minh của bạn như thế nào?",
      id: "Bagaimana galeri (album foto) smartphone Anda?"
    },
    options: [
      {
        text: {
          ko: "몇 년 전 사진부터 캡처한 추억들이 수만 장 쌓여 있다.",
          en: "Tens of thousands of memories from years ago and screenshots are piled up.",
          ja: "数年前の写真からキャプチャした思い出が数万枚積み重なっている。",
          'zh-CN': "从几年前的照片到截图的回忆堆积了数万张。",
          'zh-TW': "從幾年前的照片到截圖的回憶堆積了數萬張。",
          vi: "Hàng chục nghìn kỷ niệm từ nhiều năm trước và ảnh chụp màn hình được tích lũy.",
          id: "Puluhan ribu kenangan dari bertahun-tahun lalu dan tangkapan layar menumpuk."
        },
        score: 0
      },
      {
        text: {
          ko: "필요한 사진만 남기고 주기적으로 정리한다.",
          en: "Keep only necessary photos and organize them regularly.",
          ja: "必要な写真だけ残して定期的に整理する。",
          'zh-CN': "只保留必要的照片并定期整理。",
          'zh-TW': "只保留必要的照片並定期整理。",
          vi: "Chỉ giữ lại những bức ảnh cần thiết và thường xuyên sắp xếp chúng.",
          id: "Hanya menyimpan foto yang diperlukan dan mengaturnya secara teratur."
        },
        score: 1
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "노래방에서 즐겨 부르는 노래 스타일은?",
      en: "What style of songs do you like to sing at karaoke?",
      ja: "カラオケでよく歌う曲のスタイルは？",
      'zh-CN': "你在KTV喜欢唱什么风格的歌？",
      'zh-TW': "你在KTV喜歡唱什麼風格的歌？",
      vi: "Bạn thích hát phong cách bài hát nào ở karaoke?",
      id: "Gaya lagu apa yang Anda suka nyanyikan di karaoke?"
    },
    options: [
      {
        text: {
          ko: "\"역시 옛날 노래가 명곡이지.\" 감성을 자극하는 추억의 발라드.",
          en: "\"Old songs are truly masterpieces.\" Nostalgic ballads that stir emotions.",
          ja: "「やっぱり昔の歌が名曲だな。」感情を刺激する懐かしいバラード。",
          'zh-CN': "「果然老歌是经典。」唤起情感回忆的民谣。",
          'zh-TW': "「果然老歌是經典。」喚起情感回憶的民謠。",
          vi: "\"Quả nhiên những bài hát cũ là kiệt tác.\" Những bản ballad gợi nhớ kích thích cảm xúc.",
          id: "\"Lagu lama memang karya agung.\" Balada nostalgia yang membangkitkan emosi."
        },
        score: 0
      },
      {
        text: {
          ko: "\"요즘 이게 핫하더라.\" 최신 유행하는 아이돌 노래나 힙합.",
          en: "\"This is hot right now.\" Latest trending idol songs or hip-hop.",
          ja: "「最近これが流行ってるんだよ。」最新の流行アイドル曲やヒップホップ。",
          'zh-CN': "「这个现在很火。」最新流行的偶像歌曲或嘻哈。",
          'zh-TW': "「這個現在很火。」最新流行的偶像歌曲或嘻哈。",
          vi: "\"Cái này đang hot đấy.\" Những bài hát thần tượng hoặc hip-hop đang thịnh hành.",
          id: "\"Ini sedang populer sekarang.\" Lagu idola atau hip-hop terbaru yang sedang tren."
        },
        score: 1
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "친구와 대화할 때 더 자주 하는 말은?",
      en: "What do you say more often when talking with friends?",
      ja: "友達と話すとき、より頻繁に言うことは？",
      'zh-CN': "和朋友聊天时你更常说什么？",
      'zh-TW': "和朋友聊天時你更常說什麼？",
      vi: "Bạn thường nói gì khi trò chuyện với bạn bè?",
      id: "Apa yang lebih sering Anda katakan saat berbicara dengan teman?"
    },
    options: [
      {
        text: {
          ko: "\"야, 너 그거 기억나?\" 옛날 에피소드 이야기.",
          en: "\"Hey, do you remember that?\" Talking about old episodes.",
          ja: "「おい、それ覚えてる？」昔のエピソードの話。",
          'zh-CN': "「嘿，你还记得那个吗？」谈论过去的趣事。",
          'zh-TW': "「嘿，你還記得那個嗎？」談論過去的趣事。",
          vi: "\"Này, cậu có nhớ cái đó không?\" Nói về những câu chuyện cũ.",
          id: "\"Hei, kamu ingat itu?\" Membicarakan episode lama."
        },
        score: 0
      },
      {
        text: {
          ko: "\"우리 다음에 이거 하자.\" 앞으로의 계획이나 목표 이야기.",
          en: "\"Let's do this next time.\" Talking about future plans or goals.",
          ja: "「次はこれをやろう。」今後の計画や目標の話。",
          'zh-CN': "「我们下次做这个吧。」谈论未来的计划或目标。",
          'zh-TW': "「我們下次做這個吧。」談論未來的計劃或目標。",
          vi: "\"Lần sau chúng ta làm cái này nhé.\" Nói về kế hoạch hoặc mục tiêu tương lai.",
          id: "\"Mari kita lakukan ini lain kali.\" Membicarakan rencana atau tujuan masa depan."
        },
        score: 1
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "새로운 도전이나 변화를 앞두고 있을 때?",
      en: "When facing a new challenge or change?",
      ja: "新しい挑戦や変化に直面しているとき？",
      'zh-CN': "面对新的挑战或变化时？",
      'zh-TW': "面對新的挑戰或變化時？",
      vi: "Khi đối mặt với thử thách hoặc thay đổi mới?",
      id: "Ketika menghadapi tantangan atau perubahan baru?"
    },
    options: [
      {
        text: {
          ko: "익숙한 것이 사라지는 게 두렵고, 실패했던 기억이 떠올라 망설인다.",
          en: "I'm afraid of losing familiar things, and memories of past failures make me hesitate.",
          ja: "慣れ親しんだものがなくなるのが怖く、失敗した記憶がよみがえって躊躇する。",
          'zh-CN': "害怕失去熟悉的东西，想起过去的失败而犹豫。",
          'zh-TW': "害怕失去熟悉的東西，想起過去的失敗而猶豫。",
          vi: "Tôi sợ mất đi những điều quen thuộc, và ký ức về thất bại trong quá khứ khiến tôi do dự.",
          id: "Saya takut kehilangan hal-hal yang familiar, dan ingatan tentang kegagalan masa lalu membuat saya ragu-ragu."
        },
        score: 0
      },
      {
        text: {
          ko: "새로운 환경에서 펼쳐질 일들이 기대되고 설렌다.",
          en: "I'm excited and thrilled about what will unfold in the new environment.",
          ja: "新しい環境で展開されることに期待してワクワクする。",
          'zh-CN': "对新环境中即将展开的事情感到期待和兴奋。",
          'zh-TW': "對新環境中即將展開的事情感到期待和興奮。",
          vi: "Tôi háo hức và phấn khích về những gì sẽ diễn ra trong môi trường mới.",
          id: "Saya bersemangat dan gembira tentang apa yang akan terjadi di lingkungan baru."
        },
        score: 1
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "당신에게 '후회'란?",
      en: "What does 'regret' mean to you?",
      ja: "あなたにとって「後悔」とは？",
      'zh-CN': "对你来说'后悔'是什么？",
      'zh-TW': "對你來說「後悔」是什麼？",
      vi: "'Hối tiếc' đối với bạn là gì?",
      id: "Apa arti 'penyesalan' bagi Anda?"
    },
    options: [
      {
        text: {
          ko: "\"그때 그러지 말걸.\" 이미 지나간 일을 계속 곱씹으며 괴로워하는 것.",
          en: "\"I shouldn't have done that then.\" Continuously dwelling on past events and suffering.",
          ja: "「あの時そうしなければよかった。」すでに過ぎ去ったことをずっと考えて苦しむこと。",
          'zh-CN': "「那时不该那样做。」不断纠结于已经过去的事并痛苦。",
          'zh-TW': "「那時不該那樣做。」不斷糾結於已經過去的事並痛苦。",
          vi: "\"Lúc đó đáng lẽ không nên làm vậy.\" Liên tục suy nghĩ về những việc đã qua và đau khổ.",
          id: "\"Seharusnya saya tidak melakukan itu saat itu.\" Terus memikirkan peristiwa masa lalu dan menderita."
        },
        score: 0
      },
      {
        text: {
          ko: "\"앞으로 안 그러면 돼.\" 교훈만 얻고 훌훌 털어버리는 것.",
          en: "\"Just don't do it again in the future.\" Learn the lesson and shake it off.",
          ja: "「今後しなければいい。」教訓だけを得てサッと振り払うこと。",
          'zh-CN': "「以后不再这样做就行了。」只吸取教训然后轻松放下。",
          'zh-TW': "「以後不再這樣做就行了。」只吸取教訓然後輕鬆放下。",
          vi: "\"Chỉ cần không làm lại nữa là được.\" Rút ra bài học và quên đi.",
          id: "\"Hanya jangan melakukannya lagi di masa depan.\" Ambil pelajaran dan lupakan."
        },
        score: 1
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "물건을 버릴 때 당신의 마음은?",
      en: "How do you feel when throwing things away?",
      ja: "物を捨てるとき、あなたの気持ちは？",
      'zh-CN': "扔东西时你的心情是？",
      'zh-TW': "扔東西時你的心情是？",
      vi: "Bạn cảm thấy thế nào khi vứt bỏ đồ vật?",
      id: "Bagaimana perasaan Anda saat membuang barang?"
    },
    options: [
      {
        text: {
          ko: "추억이 담긴 물건이라 버리기 너무 아쉽고 마음이 아프다.",
          en: "It's too sad and painful to throw away because it contains memories.",
          ja: "思い出が詰まった物なので、捨てるのがとても惜しくて心が痛む。",
          'zh-CN': "因为承载着回忆，扔掉太可惜，心里很痛。",
          'zh-TW': "因為承載著回憶，扔掉太可惜，心裡很痛。",
          vi: "Thật buồn và đau lòng khi vứt bỏ vì nó chứa đựng kỷ niệm.",
          id: "Sangat menyedihkan dan menyakitkan untuk dibuang karena mengandung kenangan."
        },
        score: 0
      },
      {
        text: {
          ko: "안 쓰는 건 짐이다. 과감하게 버려야 새것을 채울 수 있다.",
          en: "Unused things are just clutter. I need to throw them away decisively to make room for new things.",
          ja: "使わないものは荷物だ。思い切って捨てないと新しいものを入れることができない。",
          'zh-CN': "不用的东西是负担。必须果断扔掉才能装新东西。",
          'zh-TW': "不用的東西是負擔。必須果斷扔掉才能裝新東西。",
          vi: "Những thứ không dùng là rác. Phải quyết đoán vứt bỏ để có chỗ cho thứ mới.",
          id: "Barang yang tidak digunakan adalah sampah. Harus membuangnya dengan tegas untuk memberi ruang bagi hal baru."
        },
        score: 1
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "당신이 생각하는 '성공한 삶'이란?",
      en: "What do you think a 'successful life' is?",
      ja: "あなたが考える「成功した人生」とは？",
      'zh-CN': "你认为'成功的人生'是什么？",
      'zh-TW': "你認為「成功的人生」是什麼？",
      vi: "Bạn nghĩ 'cuộc sống thành công' là gì?",
      id: "Apa yang Anda pikirkan tentang 'hidup yang sukses'?"
    },
    options: [
      {
        text: {
          ko: "인생을 되돌아봤을 때 부끄러움 없이 아름다운 추억이 많은 삶.",
          en: "A life with many beautiful memories without shame when looking back.",
          ja: "人生を振り返ったとき、恥ずかしさなく美しい思い出が多い人生。",
          'zh-CN': "回顾人生时，有很多美好回忆而不感到羞耻的生活。",
          'zh-TW': "回顧人生時，有很多美好回憶而不感到羞恥的生活。",
          vi: "Một cuộc sống có nhiều kỷ niệm đẹp không xấu hổ khi nhìn lại.",
          id: "Hidup dengan banyak kenangan indah tanpa rasa malu saat melihat ke belakang."
        },
        score: 0
      },
      {
        text: {
          ko: "남들이 우러러볼 만한 성취를 이루고 역사를 새로 쓰는 삶.",
          en: "A life that achieves accomplishments others admire and rewrites history.",
          ja: "人々が憧れるような達成を成し遂げ、歴史を新たに書く人生。",
          'zh-CN': "取得令人钦佩的成就并改写历史的生活。",
          'zh-TW': "取得令人欽佩的成就並改寫歷史的生活。",
          vi: "Một cuộc sống đạt được thành tựu khiến người khác ngưỡng mộ và viết lại lịch sử.",
          id: "Hidup yang mencapai prestasi yang dikagumi orang lain dan menulis ulang sejarah."
        },
        score: 1
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "힘든 일이 닥쳤을 때 위로받는 방식은?",
      en: "How do you comfort yourself when something difficult happens?",
      ja: "困難なことが起きたとき、慰めを受ける方法は？",
      'zh-CN': "遇到困难时你如何安慰自己？",
      'zh-TW': "遇到困難時你如何安慰自己？",
      vi: "Bạn tự an ủi mình như thế nào khi gặp khó khăn?",
      id: "Bagaimana Anda menghibur diri saat menghadapi kesulitan?"
    },
    options: [
      {
        text: {
          ko: "익숙하고 편안한 장소에서 예전에 좋아했던 영화나 책을 본다.",
          en: "Watch movies or read books I used to like in a familiar and comfortable place.",
          ja: "慣れ親しんだ快適な場所で、以前好きだった映画や本を見る。",
          'zh-CN': "在熟悉舒适的地方看以前喜欢的电影或书。",
          'zh-TW': "在熟悉舒適的地方看以前喜歡的電影或書。",
          vi: "Xem phim hoặc đọc sách mình từng thích ở một nơi quen thuộc và thoải mái.",
          id: "Menonton film atau membaca buku yang dulu saya sukai di tempat yang familiar dan nyaman."
        },
        score: 0
      },
      {
        text: {
          ko: "\"이 또한 지나가리라\" 생각하며 해결책을 찾고 미래를 대비한다.",
          en: "Think \"This too shall pass\" and find solutions while preparing for the future.",
          ja: "「これも過ぎ去るだろう」と考え、解決策を見つけ、未来に備える。",
          'zh-CN': "想着「这也会过去」并寻找解决方案，同时为未来做准备。",
          'zh-TW': "想著「這也會過去」並尋找解決方案，同時為未來做準備。",
          vi: "Nghĩ \"Điều này cũng sẽ qua\" và tìm giải pháp trong khi chuẩn bị cho tương lai.",
          id: "Berpikir \"Ini juga akan berlalu\" dan mencari solusi sambil mempersiapkan masa depan."
        },
        score: 1
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "당신의 일기장(혹은 SNS)에는 무엇이 더 많나요?",
      en: "What is more in your diary (or SNS)?",
      ja: "あなたの日記（またはSNS）には何がより多い？",
      'zh-CN': "你的日记（或SNS）中什么更多？",
      'zh-TW': "你的日記（或SNS）中什麼更多？",
      vi: "Trong nhật ký (hoặc SNS) của bạn có gì nhiều hơn?",
      id: "Apa yang lebih banyak di buku harian (atau SNS) Anda?"
    },
    options: [
      {
        text: {
          ko: "그날 있었던 일, 감정, 지난 일에 대한 회고록.",
          en: "What happened that day, emotions, reflections on past events.",
          ja: "その日あったこと、感情、過去の出来事についての回顧録。",
          'zh-CN': "那天发生的事、情感、对过去事件的回顾。",
          'zh-TW': "那天發生的事、情感、對過去事件的回顧。",
          vi: "Những gì xảy ra trong ngày, cảm xúc, hồi tưởng về những sự kiện trong quá khứ.",
          id: "Apa yang terjadi hari itu, emosi, refleksi tentang peristiwa masa lalu."
        },
        score: 0
      },
      {
        text: {
          ko: "버킷리스트, 다짐, 앞으로의 투두 리스트(To-Do List).",
          en: "Bucket lists, resolutions, future to-do lists.",
          ja: "バケットリスト、決意、今後のTo-Doリスト。",
          'zh-CN': "愿望清单、决心、未来的待办事项清单。",
          'zh-TW': "願望清單、決心、未來的待辦事項清單。",
          vi: "Danh sách mong muốn, quyết tâm, danh sách việc cần làm trong tương lai.",
          id: "Daftar keinginan, tekad, daftar to-do masa depan."
        },
        score: 1
      }
    ]
  }
];

export const timePerspectiveResults: TimePerspectiveResult[] = [
  {
    type: "Type1",
    emoji: "🎞️",
    title: {
      ko: "기억을 걷는 시간, 아련한 감성가",
      en: "Time Walking Through Memories, Nostalgic Sentimentalist",
      ja: "記憶を歩く時間、切ない感性家",
      'zh-CN': "在记忆中行走的时光，感伤的感性者",
      'zh-TW': "在記憶中行走的時光，感傷的感性者",
      vi: "Thời gian bước qua ký ức, Người đa cảm hoài niệm",
      id: "Waktu Berjalan Melalui Kenangan, Sentimentalis Nostalgia"
    },
    shortDescription: {
      ko: "\"그때가 좋았어... 추억은 나의 힘\"",
      en: "\"Those were the good times... Memories are my strength\"",
      ja: "「あの頃は良かった...思い出は私の力」",
      'zh-CN': "「那时候真好...回忆是我的力量」",
      'zh-TW': "「那時候真好...回憶是我的力量」",
      vi: "\"Những ngày đó thật tốt... Kỷ niệm là sức mạnh của tôi\"",
      id: "\"Masa-masa itu menyenangkan... Kenangan adalah kekuatan saya\""
    },
    description: {
      ko: "당신은 과거의 기억을 소중히 여기고 그 안에서 안정을 찾는 타입입니다. 감수성이 풍부하고 정이 많아, 사소한 물건 하나도 쉽게 버리지 못합니다. 아름다운 추억은 삶의 원동력이 되지만, 지나간 후회에 얽매여 앞으로 나아가는 것을 주저할 수도 있습니다.",
      en: "You are a type who cherishes past memories and finds stability in them. You have rich sensitivity and deep emotions, so you can't easily throw away even small items. Beautiful memories become the driving force of your life, but you may hesitate to move forward, bound by past regrets.",
      ja: "あなたは過去の記憶を大切にし、その中で安定を見つけるタイプです。感受性が豊かで情が深く、些細な物一つも簡単に捨てられません。美しい思い出は人生の原動力になりますが、過ぎ去った後悔に縛られて前に進むことを躊躇するかもしれません。",
      'zh-CN': "你是珍惜过去回忆并在其中寻找稳定感的类型。你敏感丰富、情感深厚，连小物件也舍不得扔掉。美好的回忆成为你生活的动力，但可能会因过去的后悔而犹豫不前。",
      'zh-TW': "你是珍惜過去回憶並在其中尋找穩定感的類型。你敏感豐富、情感深厚，連小物件也捨不得扔掉。美好的回憶成為你生活的動力，但可能會因過去的後悔而猶豫不前。",
      vi: "Bạn là kiểu người trân trọng ký ức quá khứ và tìm thấy sự ổn định trong đó. Bạn có cảm xúc phong phú và tình cảm sâu sắc, nên không thể dễ dàng vứt bỏ ngay cả những vật nhỏ. Những kỷ niệm đẹp trở thành động lực sống, nhưng bạn có thể do dự tiến về phía trước, bị ràng buộc bởi những hối tiếc trong quá khứ.",
      id: "Anda adalah tipe yang menghargai kenangan masa lalu dan menemukan stabilitas di dalamnya. Anda memiliki kepekaan yang kaya dan emosi yang dalam, sehingga tidak bisa dengan mudah membuang bahkan barang kecil. Kenangan indah menjadi kekuatan hidup Anda, tetapi Anda mungkin ragu untuk maju, terikat oleh penyesalan masa lalu."
    },
    timePerspective: {
      ko: "과거 90% + 현재 10%",
      en: "Past 90% + Present 10%",
      ja: "過去90% + 現在10%",
      'zh-CN': "过去90% + 现在10%",
      'zh-TW': "過去90% + 現在10%",
      vi: "Quá khứ 90% + Hiện tại 10%",
      id: "Masa Lalu 90% + Masa Kini 10%"
    },
    characteristics: {
      ko: "향수병, 수집광, 눈물 많음",
      en: "Nostalgia, Collector, Tears a lot",
      ja: "ノスタルジー、コレクター、涙もろい",
      'zh-CN': "怀旧、收藏癖、爱哭",
      'zh-TW': "懷舊、收藏癖、愛哭",
      vi: "Hoài niệm, Người sưu tập, Dễ khóc",
      id: "Nostalgia, Kolektor, Sering menangis"
    },
    goodMatch: {
      ko: "Type 2 (전통의 수호자)",
      en: "Type 2 (Guardian of Tradition)",
      ja: "Type 2 (伝統の守護者)",
      'zh-CN': "Type 2 (传统的守护者)",
      'zh-TW': "Type 2 (傳統的守護者)",
      vi: "Type 2 (Người bảo vệ truyền thống)",
      id: "Type 2 (Penjaga Tradisi)"
    },
    badMatch: {
      ko: "Type 6 (미래에서 온 야망가)",
      en: "Type 6 (Ambitious Visionary from the Future)",
      ja: "Type 6 (未来から来た野心家)",
      'zh-CN': "Type 6 (来自未来的野心家)",
      'zh-TW': "Type 6 (來自未來的野心家)",
      vi: "Type 6 (Người đầy tham vọng từ tương lai)",
      id: "Type 6 (Visioner Ambisius dari Masa Depan)"
    }
  },
  {
    type: "Type2",
    emoji: "🌳",
    title: {
      ko: "뿌리 깊은 나무, 신중한 보수주의자",
      en: "Deep-Rooted Tree, Cautious Conservative",
      ja: "根深い木、慎重な保守主義者",
      'zh-CN': "根深蒂固的树，谨慎的保守主义者",
      'zh-TW': "根深蒂固的樹，謹慎的保守主義者",
      vi: "Cây rễ sâu, Người bảo thủ thận trọng",
      id: "Pohon Berakar Dalam, Konservatif Hati-hati"
    },
    shortDescription: {
      ko: "\"검증된 게 최고야. 변화보다는 안정을.\"",
      en: "\"Proven is best. Stability over change.\"",
      ja: "「検証されたものが最高だ。変化より安定を。」",
      'zh-CN': "「经过验证的最好。稳定胜过变化。」",
      'zh-TW': "「經過驗證的最好。穩定勝過變化。」",
      vi: "\"Đã được chứng minh là tốt nhất. Ổn định hơn thay đổi.\"",
      id: "\"Yang terbukti adalah yang terbaik. Stabilitas lebih dari perubahan.\""
    },
    description: {
      ko: "당신은 과거의 경험과 데이터를 바탕으로 현재를 살아가는 신중한 사람입니다. 급격한 변화보다는 익숙하고 안정적인 것을 선호합니다. \"구관이 명관이다\"라는 말을 믿으며, 실패할 확률을 최소화하는 선택을 합니다. 믿음직스럽지만 때로는 융통성이 없다는 소리를 들을 수 있습니다.",
      en: "You are a cautious person who lives in the present based on past experiences and data. You prefer familiar and stable things over rapid changes. You believe in the saying 'old ways are best' and make choices that minimize the probability of failure. You are reliable, but sometimes you may be told that you lack flexibility.",
      ja: "あなたは過去の経験とデータに基づいて現在を生きる慎重な人です。急激な変化よりも慣れ親しんだ安定したものを好みます。「旧きは良き」という言葉を信じ、失敗する確率を最小限にする選択をします。信頼できる人ですが、時には柔軟性がないと言われることがあります。",
      'zh-CN': "你是基于过去的经验和数据活在当下的谨慎的人。你更喜欢熟悉稳定的东西，而不是急剧的变化。你相信'旧的就是好的'这句话，做出能最小化失败概率的选择。你值得信赖，但有时可能会被说缺乏灵活性。",
      'zh-TW': "你是基於過去的經驗和數據活在當下的謹慎的人。你更喜歡熟悉穩定的東西，而不是急劇的變化。你相信「舊的就是好的」這句話，做出能最小化失敗概率的選擇。你值得信賴，但有時可能會被說缺乏靈活性。",
      vi: "Bạn là người thận trọng sống trong hiện tại dựa trên kinh nghiệm và dữ liệu quá khứ. Bạn thích những điều quen thuộc và ổn định hơn là thay đổi đột ngột. Bạn tin vào câu nói 'cách cũ là tốt nhất' và đưa ra lựa chọn giảm thiểu khả năng thất bại. Bạn đáng tin cậy, nhưng đôi khi có thể bị nói là thiếu linh hoạt.",
      id: "Anda adalah orang yang hati-hati yang hidup di masa kini berdasarkan pengalaman dan data masa lalu. Anda lebih suka hal-hal yang familiar dan stabil daripada perubahan drastis. Anda percaya pada pepatah 'cara lama adalah yang terbaik' dan membuat pilihan yang meminimalkan kemungkinan kegagalan. Anda dapat diandalkan, tetapi terkadang mungkin dikatakan kurang fleksibel."
    },
    timePerspective: {
      ko: "과거 60% + 현재 40%",
      en: "Past 60% + Present 40%",
      ja: "過去60% + 現在40%",
      'zh-CN': "过去60% + 现在40%",
      'zh-TW': "過去60% + 現在40%",
      vi: "Quá khứ 60% + Hiện tại 40%",
      id: "Masa Lalu 60% + Masa Kini 40%"
    },
    characteristics: {
      ko: "원칙주의, 안전제일, 꼼꼼함",
      en: "Principle-oriented, Safety first, Meticulous",
      ja: "原則主義、安全第一、几帳面",
      'zh-CN': "原则主义、安全第一、细致",
      'zh-TW': "原則主義、安全第一、細緻",
      vi: "Theo nguyên tắc, An toàn trước tiên, Tỉ mỉ",
      id: "Berprinsip, Keselamatan pertama, Teliti"
    },
    goodMatch: {
      ko: "Type 1 (아련한 감성가)",
      en: "Type 1 (Nostalgic Sentimentalist)",
      ja: "Type 1 (切ない感性家)",
      'zh-CN': "Type 1 (感伤的感性者)",
      'zh-TW': "Type 1 (感傷的感性者)",
      vi: "Type 1 (Người đa cảm hoài niệm)",
      id: "Type 1 (Sentimentalis Nostalgia)"
    },
    badMatch: {
      ko: "Type 5 (돌진하는 불도저)",
      en: "Type 5 (Charging Bulldozer)",
      ja: "Type 5 (突進するブルドーザー)",
      'zh-CN': "Type 5 (冲锋的推土机)",
      'zh-TW': "Type 5 (衝鋒的推土機)",
      vi: "Type 5 (Máy ủi lao tới)",
      id: "Type 5 (Bulldozer yang Menyerbu)"
    }
  },
  {
    type: "Type3",
    emoji: "🏠",
    title: {
      ko: "현재에 충실한, 현실적인 생활인",
      en: "Dedicated to the Present, Realistic Life Person",
      ja: "現在に忠実な、現実的な生活人",
      'zh-CN': "专注于当下，现实的生活者",
      'zh-TW': "專注於當下，現實的生活者",
      vi: "Tận tâm với hiện tại, Người sống thực tế",
      id: "Setia pada Masa Kini, Orang Hidup Realistis"
    },
    shortDescription: {
      ko: "\"어제는 지났고 내일은 몰라. 오늘을 살자.\"",
      en: "\"Yesterday is gone and tomorrow is unknown. Let's live today.\"",
      ja: "「昨日は過ぎ去り、明日はわからない。今日を生きよう。」",
      'zh-CN': "「昨天已过去，明天未知。让我们活在今天。」",
      'zh-TW': "「昨天已過去，明天未知。讓我們活在今天。」",
      vi: "\"Hôm qua đã qua và ngày mai không biết. Hãy sống hôm nay.\"",
      id: "\"Kemarin sudah lewat dan besok tidak diketahui. Mari hidup hari ini.\""
    },
    description: {
      ko: "당신은 과거를 후회하지도, 미래를 걱정하지도 않는 지극히 현실적인 사람입니다. 당장 내 눈앞에 놓인 문제 해결과 일상의 소소한 행복에 집중합니다. 뜬구름 잡는 소리보다는 실질적인 이득을 중요하게 생각합니다. 마음 편하게 사는 멘탈 관리의 고수입니다.",
      en: "You are an extremely realistic person who neither regrets the past nor worries about the future. You focus on solving problems right in front of you and the small daily joys. You value practical benefits over empty talk. You are a master of mental management, living comfortably.",
      ja: "あなたは過去を後悔せず、未来を心配もしない極めて現実的な人です。目の前にある問題の解決と日常の小さな幸せに集中します。空論よりも実質的な利益を重要視します。心を楽に生きるメンタル管理の達人です。",
      'zh-CN': "你是一个极其现实的人，既不后悔过去，也不担心未来。你专注于解决眼前的问题和日常的小幸福。你重视实际利益胜过空谈。你是心理管理的高手，生活得轻松自在。",
      'zh-TW': "你是一個極其現實的人，既不後悔過去，也不擔心未來。你專注於解決眼前的問題和日常的小幸福。你重視實際利益勝過空談。你是心理管理的高手，生活得輕鬆自在。",
      vi: "Bạn là người cực kỳ thực tế, không hối tiếc quá khứ cũng không lo lắng về tương lai. Bạn tập trung vào việc giải quyết vấn đề ngay trước mắt và những niềm vui nhỏ hàng ngày. Bạn coi trọng lợi ích thực tế hơn là nói suông. Bạn là bậc thầy quản lý tinh thần, sống thoải mái.",
      id: "Anda adalah orang yang sangat realistis yang tidak menyesali masa lalu maupun mengkhawatirkan masa depan. Anda fokus pada menyelesaikan masalah yang ada di depan mata dan kebahagiaan kecil sehari-hari. Anda menghargai manfaat praktis daripada omong kosong. Anda adalah master manajemen mental, hidup dengan nyaman."
    },
    timePerspective: {
      ko: "현재 80% + 과거 10% + 미래 10%",
      en: "Present 80% + Past 10% + Future 10%",
      ja: "現在80% + 過去10% + 未来10%",
      'zh-CN': "现在80% + 过去10% + 未来10%",
      'zh-TW': "現在80% + 過去10% + 未來10%",
      vi: "Hiện tại 80% + Quá khứ 10% + Tương lai 10%",
      id: "Masa Kini 80% + Masa Lalu 10% + Masa Depan 10%"
    },
    characteristics: {
      ko: "워라밸, 소확행, 실용주의",
      en: "Work-life balance, Small happiness, Pragmatism",
      ja: "ワークライフバランス、小確幸、実用主義",
      'zh-CN': "工作生活平衡、小确幸、实用主义",
      'zh-TW': "工作生活平衡、小確幸、實用主義",
      vi: "Cân bằng công việc-cuộc sống, Hạnh phúc nhỏ, Chủ nghĩa thực dụng",
      id: "Keseimbangan kerja-hidup, Kebahagiaan kecil, Pragmatisme"
    },
    goodMatch: {
      ko: "Type 4 (욜로족)",
      en: "Type 4 (YOLO Tribe)",
      ja: "Type 4 (ヨロ族)",
      'zh-CN': "Type 4 (YOLO族)",
      'zh-TW': "Type 4 (YOLO族)",
      vi: "Type 4 (Bộ tộc YOLO)",
      id: "Type 4 (Suku YOLO)"
    },
    badMatch: {
      ko: "Type 6 (미래에서 온 야망가)",
      en: "Type 6 (Ambitious Visionary from the Future)",
      ja: "Type 6 (未来から来た野心家)",
      'zh-CN': "Type 6 (来自未来的野心家)",
      'zh-TW': "Type 6 (來自未來的野心家)",
      vi: "Type 6 (Người đầy tham vọng từ tương lai)",
      id: "Type 6 (Visioner Ambisius dari Masa Depan)"
    }
  },
  {
    type: "Type4",
    emoji: "🎉",
    title: {
      ko: "순간을 즐기는, 자유로운 욜로(YOLO)족",
      en: "Enjoying the Moment, Free-Spirited YOLO Tribe",
      ja: "瞬間を楽しむ、自由なヨロ(YOLO)族",
      'zh-CN': "享受当下，自由自在的YOLO族",
      'zh-TW': "享受當下，自由自在的YOLO族",
      vi: "Tận hưởng khoảnh khắc, Bộ tộc YOLO tự do",
      id: "Menikmati Momen, Suku YOLO Bebas"
    },
    shortDescription: {
      ko: "\"노는 게 제일 좋아! 인생은 한 번뿐이야.\"",
      en: "\"Having fun is the best! Life is only once.\"",
      ja: "「遊ぶのが一番好き！人生は一度だけ。」",
      'zh-CN': "「玩得开心最重要！人生只有一次。」",
      'zh-TW': "「玩得開心最重要！人生只有一次。」",
      vi: "\"Vui chơi là tốt nhất! Cuộc sống chỉ có một lần.\"",
      id: "\"Bersenang-senang adalah yang terbaik! Hidup hanya sekali.\""
    },
    description: {
      ko: "당신은 현재의 쾌락과 즐거움을 최우선으로 생각합니다. 미래를 위해 현재를 희생하는 것은 바보 같은 짓이라고 생각합니다. 충동적일 수 있지만, 그만큼 매 순간 열정적이고 에너지가 넘칩니다. 어디로 튈지 모르는 매력적인 캐릭터입니다.",
      en: "You prioritize current pleasure and joy above all. You think sacrificing the present for the future is foolish. You can be impulsive, but you're equally passionate and full of energy every moment. You're an attractive character who's unpredictable.",
      ja: "あなたは現在の快楽と楽しみを最優先に考えます。未来のために現在を犠牲にするのは愚かなことだと考えます。衝動的になることもありますが、その分、毎瞬間情熱的でエネルギーに満ちています。どこに飛び出すかわからない魅力的なキャラクターです。",
      'zh-CN': "你把当前的快乐和乐趣放在首位。你认为为了未来而牺牲现在是愚蠢的。你可能很冲动，但同样地，每一刻都充满激情和能量。你是一个不可预测的有魅力的角色。",
      'zh-TW': "你把當前的快樂和樂趣放在首位。你認為為了未來而犧牲現在是愚蠢的。你可能很衝動，但同樣地，每一刻都充滿激情和能量。你是一個不可預測的有魅力的角色。",
      vi: "Bạn ưu tiên niềm vui và khoái cảm hiện tại hơn tất cả. Bạn nghĩ hy sinh hiện tại cho tương lai là ngu ngốc. Bạn có thể bốc đồng, nhưng bạn cũng đầy đam mê và năng lượng trong mỗi khoảnh khắc. Bạn là một nhân vật hấp dẫn và khó đoán.",
      id: "Anda memprioritaskan kesenangan dan kegembiraan saat ini di atas segalanya. Anda berpikir mengorbankan masa kini untuk masa depan adalah bodoh. Anda bisa impulsif, tetapi Anda sama-sama penuh semangat dan energi setiap saat. Anda adalah karakter yang menarik dan tidak dapat diprediksi."
    },
    timePerspective: {
      ko: "현재 90% + 미래 10%",
      en: "Present 90% + Future 10%",
      ja: "現在90% + 未来10%",
      'zh-CN': "现在90% + 未来10%",
      'zh-TW': "現在90% + 未來10%",
      vi: "Hiện tại 90% + Tương lai 10%",
      id: "Masa Kini 90% + Masa Depan 10%"
    },
    characteristics: {
      ko: "즉흥적, 탕진잼, 경험 중시",
      en: "Spontaneous, Spendthrift, Experience-focused",
      ja: "即興的、浪費家、経験重視",
      'zh-CN': "即兴、挥霍、重视体验",
      'zh-TW': "即興、揮霍、重視體驗",
      vi: "Tự phát, Phung phí, Tập trung vào trải nghiệm",
      id: "Spontan, Boros, Fokus pada pengalaman"
    },
    goodMatch: {
      ko: "Type 3 (현실적인 생활인)",
      en: "Type 3 (Realistic Life Person)",
      ja: "Type 3 (現実的な生活人)",
      'zh-CN': "Type 3 (现实的生活者)",
      'zh-TW': "Type 3 (現實的生活者)",
      vi: "Type 3 (Người sống thực tế)",
      id: "Type 3 (Orang Hidup Realistis)"
    },
    badMatch: {
      ko: "Type 2 (신중한 보수주의자)",
      en: "Type 2 (Cautious Conservative)",
      ja: "Type 2 (慎重な保守主義者)",
      'zh-CN': "Type 2 (谨慎的保守主义者)",
      'zh-TW': "Type 2 (謹慎的保守主義者)",
      vi: "Type 2 (Người bảo thủ thận trọng)",
      id: "Type 2 (Konservatif Hati-hati)"
    }
  },
  {
    type: "Type5",
    emoji: "🚄",
    title: {
      ko: "앞만 보고 달리는, 돌진하는 불도저",
      en: "Charging Bulldozer, Looking Only Forward",
      ja: "前だけを見て走る、突進するブルドーザー",
      'zh-CN': "只向前冲，冲锋的推土机",
      'zh-TW': "只向前衝，衝鋒的推土機",
      vi: "Máy ủi lao tới, Chỉ nhìn về phía trước",
      id: "Bulldozer yang Menyerbu, Hanya Melihat ke Depan"
    },
    shortDescription: {
      ko: "\"멈추면 도태된다. 목표를 향해 전진!\"",
      en: "\"If I stop, I fall behind. Forward toward the goal!\"",
      ja: "「止まれば取り残される。目標に向かって前進！」",
      'zh-CN': "「停下就会落后。向着目标前进！」",
      'zh-TW': "「停下就會落後。向著目標前進！」",
      vi: "\"Nếu dừng lại, tôi sẽ bị tụt hậu. Tiến về phía mục tiêu!\"",
      id: "\"Jika berhenti, saya akan tertinggal. Maju menuju tujuan!\""
    },
    description: {
      ko: "당신은 성취 지향적이고 목표가 뚜렷한 사람입니다. 현재의 만족보다는 더 나은 미래를 위해 끊임없이 자신을 채찍질합니다. 과거의 실수는 쿨하게 잊고, 오로지 성장과 발전을 위해 에너지를 쏟습니다. 성공할 확률이 높지만 번아웃이 올 수도 있습니다.",
      en: "You are achievement-oriented with clear goals. You constantly push yourself for a better future rather than current satisfaction. You coolly forget past mistakes and pour all your energy into growth and development. You have a high probability of success, but burnout may come.",
      ja: "あなたは達成志向で目標が明確な人です。現在の満足よりもより良い未来のために絶えず自分を鞭打ちます。過去の失敗はクールに忘れ、成長と発展のためだけにエネルギーを注ぎます。成功する確率は高いですが、燃え尽き症候群が来るかもしれません。",
      'zh-CN': "你是成就导向、目标明确的人。你为了更美好的未来而不断鞭策自己，而不是满足于现在。你冷静地忘记过去的错误，只把精力投入到成长和发展上。你成功的概率很高，但可能会精疲力竭。",
      'zh-TW': "你是成就導向、目標明確的人。你為了更美好的未來而不斷鞭策自己，而不是滿足於現在。你冷靜地忘記過去的錯誤，只把精力投入到成長和發展上。你成功的概率很高，但可能會精疲力竭。",
      vi: "Bạn là người hướng tới thành tựu với mục tiêu rõ ràng. Bạn liên tục thúc đẩy bản thân vì một tương lai tốt hơn thay vì sự hài lòng hiện tại. Bạn lạnh lùng quên đi những sai lầm trong quá khứ và đổ toàn bộ năng lượng vào sự phát triển. Bạn có khả năng thành công cao, nhưng có thể bị kiệt sức.",
      id: "Anda adalah orang yang berorientasi pada pencapaian dengan tujuan yang jelas. Anda terus-menerus mendorong diri sendiri untuk masa depan yang lebih baik daripada kepuasan saat ini. Anda dengan tenang melupakan kesalahan masa lalu dan mencurahkan semua energi untuk pertumbuhan dan pengembangan. Anda memiliki probabilitas sukses yang tinggi, tetapi kelelahan mungkin datang."
    },
    timePerspective: {
      ko: "미래 70% + 현재 30%",
      en: "Future 70% + Present 30%",
      ja: "未来70% + 現在30%",
      'zh-CN': "未来70% + 现在30%",
      'zh-TW': "未來70% + 現在30%",
      vi: "Tương lai 70% + Hiện tại 30%",
      id: "Masa Depan 70% + Masa Kini 30%"
    },
    characteristics: {
      ko: "자기계발, 계획적, 워커홀릭",
      en: "Self-improvement, Planned, Workaholic",
      ja: "自己啓発、計画的、ワーカホリック",
      'zh-CN': "自我提升、有计划、工作狂",
      'zh-TW': "自我提升、有計劃、工作狂",
      vi: "Tự phát triển, Có kế hoạch, Nghiện công việc",
      id: "Pengembangan diri, Terencana, Workaholic"
    },
    goodMatch: {
      ko: "Type 6 (미래에서 온 야망가)",
      en: "Type 6 (Ambitious Visionary from the Future)",
      ja: "Type 6 (未来から来た野心家)",
      'zh-CN': "Type 6 (来自未来的野心家)",
      'zh-TW': "Type 6 (來自未來的野心家)",
      vi: "Type 6 (Người đầy tham vọng từ tương lai)",
      id: "Type 6 (Visioner Ambisius dari Masa Depan)"
    },
    badMatch: {
      ko: "Type 1 (아련한 감성가)",
      en: "Type 1 (Nostalgic Sentimentalist)",
      ja: "Type 1 (切ない感性家)",
      'zh-CN': "Type 1 (感伤的感性者)",
      'zh-TW': "Type 1 (感傷的感性者)",
      vi: "Type 1 (Người đa cảm hoài niệm)",
      id: "Type 1 (Sentimentalis Nostalgia)"
    }
  },
  {
    type: "Type6",
    emoji: "🚀",
    title: {
      ko: "미래에서 온 야망가, SF 비저너리",
      en: "Ambitious Visionary from the Future, SF Visionary",
      ja: "未来から来た野心家、SFビジョナリー",
      'zh-CN': "来自未来的野心家，科幻愿景家",
      'zh-TW': "來自未來的野心家，科幻願景家",
      vi: "Người đầy tham vọng từ tương lai, Nhà tầm nhìn SF",
      id: "Visioner Ambisius dari Masa Depan, Visioner SF"
    },
    shortDescription: {
      ko: "\"내 머릿속엔 이미 10년 뒤가 그려져 있어.\"",
      en: "\"I already have 10 years from now mapped out in my head.\"",
      ja: "「私の頭の中にはすでに10年後が描かれている。」",
      'zh-CN': "「我的脑海里已经描绘出了10年后的样子。」",
      'zh-TW': "「我的腦海裡已經描繪出了10年後的樣子。」",
      vi: "\"Trong đầu tôi đã vẽ ra 10 năm sau.\"",
      id: "\"Di kepala saya sudah terpetakan 10 tahun ke depan.\""
    },
    description: {
      ko: "당신은 남들이 보지 못하는 먼 미래를 내다보는 통찰력을 가졌습니다. 현실적인 제약에 얽매이지 않고 원대한 꿈을 꾸며, 혁신적인 아이디어를 쏟아냅니다. 때로는 엉뚱하다는 소리를 듣지만, 세상을 바꾸는 리더들은 대부분 당신 같은 유형입니다.",
      en: "You have the insight to see the distant future that others cannot. You dream big without being bound by realistic constraints and pour out innovative ideas. You sometimes hear that you're eccentric, but most leaders who change the world are your type.",
      ja: "あなたは他人が見えない遠い未来を見通す洞察力を持っています。現実的な制約に縛られず、壮大な夢を描き、革新的なアイデアを生み出します。時には突飛だと言われることもありますが、世界を変えるリーダーの多くはあなたのようなタイプです。",
      'zh-CN': "你有洞察力，能看到别人看不到的遥远未来。你不受现实约束的束缚，做着宏大的梦，并不断提出创新想法。有时你会被说成是古怪，但改变世界的领导者大多是你这种类型。",
      'zh-TW': "你有洞察力，能看到別人看不到的遙遠未來。你不受現實約束的束縛，做著宏大的夢，並不斷提出創新想法。有時你會被說成是古怪，但改變世界的領導者大多是你這種類型。",
      vi: "Bạn có khả năng nhìn thấy tương lai xa mà người khác không thể. Bạn mơ ước lớn mà không bị ràng buộc bởi những hạn chế thực tế và đổ ra những ý tưởng đổi mới. Bạn đôi khi bị nói là kỳ lạ, nhưng hầu hết những nhà lãnh đạo thay đổi thế giới đều là kiểu người như bạn.",
      id: "Anda memiliki wawasan untuk melihat masa depan yang jauh yang tidak dapat dilihat orang lain. Anda bermimpi besar tanpa terikat oleh kendala realistis dan mencurahkan ide-ide inovatif. Anda terkadang dikatakan eksentrik, tetapi sebagian besar pemimpin yang mengubah dunia adalah tipe Anda."
    },
    timePerspective: {
      ko: "미래 100%",
      en: "Future 100%",
      ja: "未来100%",
      'zh-CN': "未来100%",
      'zh-TW': "未來100%",
      vi: "Tương lai 100%",
      id: "Masa Depan 100%"
    },
    characteristics: {
      ko: "큰 그림, 혁신, 몽상가",
      en: "Big picture, Innovation, Dreamer",
      ja: "大きな絵、革新、夢想家",
      'zh-CN': "大局观、创新、梦想家",
      'zh-TW': "大局觀、創新、夢想家",
      vi: "Bức tranh lớn, Đổi mới, Người mơ mộng",
      id: "Gambaran besar, Inovasi, Pemimpi"
    },
    goodMatch: {
      ko: "Type 5 (돌진하는 불도저)",
      en: "Type 5 (Charging Bulldozer)",
      ja: "Type 5 (突進するブルドーザー)",
      'zh-CN': "Type 5 (冲锋的推土机)",
      'zh-TW': "Type 5 (衝鋒的推土機)",
      vi: "Type 5 (Máy ủi lao tới)",
      id: "Type 5 (Bulldozer yang Menyerbu)"
    },
    badMatch: {
      ko: "Type 3 (현실적인 생활인)",
      en: "Type 3 (Realistic Life Person)",
      ja: "Type 3 (現実的な生活人)",
      'zh-CN': "Type 3 (现实的生活者)",
      'zh-TW': "Type 3 (現實的生活者)",
      vi: "Type 3 (Người sống thực tế)",
      id: "Type 3 (Orang Hidup Realistis)"
    }
  }
];

export function calculateTimePerspectiveResult(answers: number[]): string {
  const totalScore = answers.reduce((sum, score) => sum + score, 0);
  
  if (totalScore >= 0 && totalScore <= 1) {
    return "Type1";
  } else if (totalScore >= 2 && totalScore <= 3) {
    return "Type2";
  } else if (totalScore >= 4 && totalScore <= 5) {
    return "Type3";
  } else if (totalScore >= 6 && totalScore <= 7) {
    return "Type4";
  } else if (totalScore >= 8 && totalScore <= 9) {
    return "Type5";
  } else {
    return "Type6";
  }
}

