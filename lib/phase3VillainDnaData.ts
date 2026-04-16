/** 내 안의 흑염룡! 빌런 재질 테스트 — A=0 온화 / B=1 빌런, 총점 0~12 → 6유형. */

function ML(
  ko: string,
  en: string,
  ja: string,
  zhCN: string,
  zhTW: string,
  vi: string,
  id: string
): Record<string, string> {
  return { ko, en, ja, 'zh-CN': zhCN, 'zh-TW': zhTW, vi, id };
}

export interface Phase3VillainDnaQuestion {
  id: number;
  question: Record<string, string>;
  options: { text: Record<string, string>; score: number }[];
}

export interface Phase3VillainDnaResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  villainCodename: Record<string, string>;
  villainSpecialty: Record<string, string>;
  quoteLine: Record<string, string>;
  description: Record<string, string>;
  villainLevel: Record<string, string>;
  awakeningCondition: Record<string, string>;
  blackFlameProbability: Record<string, string>;
  ultimateMove: Record<string, string>;
  dangerIndex: Record<string, string>;
  oneLineEval: Record<string, string>;
  shareSnippet: Record<string, string>;
}

export const phase3VillainDnaQuestions: Phase3VillainDnaQuestion[] = [
  {
    id: 1,
    question: ML(
      '줄을 서 있는데 누군가 새치기를 했다. 나는?',
      "Someone cut in line while I was waiting. I…",
      '列に並んでいるのに割り込まれた。私は？',
      '排队时有人插队。我会？',
      '排隊時有人插隊。我會？',
      'Đang xếp hàng thì có người chen. Tôi sẽ…',
      'Antre, lalu ada yang nyelonong. Aku…'
    ),
    options: [
      {
        text: ML(
          '속으로 욕하면서 그냥 참는다. 직접 말하는 건 에너지 낭비다',
          'Swallow it and curse inside. Speaking up feels like a waste of energy.',
          '心の中で毒づきながら我慢。口に出すのはエネルギーの無駄。',
          '心里骂几句就算了，当面说太费精力。',
          '心裡罵幾句就算了，當面說太費精力。',
          'Nguyền rủa trong đầu rồi nhịn. Nói ra tốn sức.',
          'Mengumpat dalam hati lalu diam. Ngomong langsung buang energi.'
        ),
        score: 0,
      },
      {
        text: ML(
          '"저기요, 줄 서 계신 거 맞죠?" 바로 말한다. 참으면 내가 지는 거다',
          'Say, “Excuse me, you’re in line, right?” If I stay quiet, I lose.',
          '「あの、列に並んでますよね？」と言う。黙ったら負け。',
          '直接说：“请问您是在排队吗？”忍了等于我输。',
          '直接說：「請問您是在排隊嗎？」忍了等於我輸。',
          'Nói thẳng: “Xin lỗi, bạn đang xếp hàng đúng không?” Im là thua.',
          'Langsung bilang: “Maaf, lagi antre kan?” Diam berarti kalah.'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 2,
    question: ML(
      '단체 채팅방에서 내가 제안한 아이디어가 무시당했다. 그런데 나중에 비슷한 아이디어가 채택됐을 때 나는?',
      'In a group chat my idea was ignored—then a similar one got picked later. I…',
      'グループチャットで自分のアイデアが無視された。のちに似た案が採用されたとき、私は？',
      '群聊里我的想法被无视，后来却采纳了类似的点子。我会？',
      '群組裡我的想法被無視，後來卻採納了類似的點子。我會？',
      'Trong nhóm chat ý tưởng tôi bị phớt lờ, sau lại chọn ý gần giống. Tôi…',
      'Di grup chat ideku diabaikan—lalu ide mirip dipilih. Aku…'
    ),
    options: [
      {
        text: ML(
          '"그거 내가 먼저 얘기했는데..." 속으로만 생각한다',
          'Think, “I said that first…” only to myself.',
          '「あれ、私が先に言ったのに…」と心の中だけ。',
          '只在心里想：“那是我先说的……”',
          '只在心裡想：「那是我先說的……」',
          'Chỉ nghĩ trong đầu: “Tôi nói trước mà…”',
          'Cuma berpikir dalam hati: “Itu kan aku duluan…”'
        ),
        score: 0,
      },
      {
        text: ML(
          '조용히 스크롤을 올려서 내가 먼저 말했다는 증거를 스크린샷 찍어둔다',
          'Quietly scroll up and screenshot proof I said it first.',
          'こっそりスクロールして、先に言った証拠のスクショを取っておく。',
          '默默往上滑，截图留证证明自己先说过。',
          '默默往上滑，截圖留證證明自己先說過。',
          'Lặng lẽ kéo lên chụp màn hình làm chứng tôi nói trước.',
          'Diam-diam scroll ke atas, screenshot bukti aku bicara duluan.'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 3,
    question: ML(
      '나를 무시했던 사람이 나중에 나한테 도움을 요청해왔다. 나는?',
      'Someone who dismissed me later asks for help. I…',
      '自分を無視していた人が、あとで助けを求めてきた。私は？',
      '曾经轻视我的人后来向我求助。我会？',
      '曾經輕視我的人後來向我求助。我會？',
      'Người từng phớt lờ tôi sau đó nhờ giúp. Tôi…',
      'Yang dulu mengabaikanku minta bantuan. Aku…'
    ),
    options: [
      {
        text: ML(
          '그냥 도와준다. 예전 일을 굳이 언급하지 않는다',
          'Help anyway. I don’t bring up the past.',
          'とにかく手伝う。わざわざ過去の話はしない。',
          '还是帮。不特意翻旧账。',
          '還是幫。不特意翻舊帳。',
          'Vẫn giúp. Không cố nhắc chuyện cũ.',
          'Tetap bantu. Nggak sengaja umbar masa lalu.'
        ),
        score: 0,
      },
      {
        text: ML(
          '도와주긴 하는데 "예전에 그랬던 것 기억하시죠?" 한마디는 넣는다',
          'I help—but slip in, “You remember how it was before, right?”',
          '助けるけど「あのときのこと、覚えてますよね？」と一言入れる。',
          '会帮，但会带一句：“之前那事您还记得吧？”',
          '會幫，但會帶一句：「之前那事您還記得吧？」',
          'Có giúp nhưng nhẹ nhàng: “Anh/chị nhớ lúc trước chứ?”',
          'Bantu, tapi selipkan: “Ingat dulu gimana kan?”'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 4,
    question: ML(
      '회의에서 내 의견과 다른 사람이 있을 때 나는?',
      'In a meeting someone disagrees with me. I…',
      '会議で自分と意見が違う人がいる。私は？',
      '会议上有人和我想法不同。我会？',
      '會議上有人和我想法不同。我會？',
      'Trong họp có người bất đồng với tôi. Tôi…',
      'Di rapat ada yang beda pendapat. Aku…'
    ),
    options: [
      {
        text: ML(
          '"그렇게 생각할 수도 있죠" 하고 넘어간다',
          'Say, “I guess you could see it that way,” and move on.',
          '「そう考える人もいますよね」で流す。',
          '说句“也能这么理解吧”就带过。',
          '說句「也能這麼理解吧」就帶過。',
          'Bảo “cũng có thể nghĩ vậy” rồi cho qua.',
          'Bilang “ya bisa juga dipikir gitu” lalu lanjut.'
        ),
        score: 0,
      },
      {
        text: ML(
          '논리적으로 반박한다. 틀린 건 짚어줘야 한다',
          'Counter with logic. Wrong points need to be named.',
          '論理的に反論する。間違いははっきり指摘する。',
          '用逻辑反驳。错了就要点出来。',
          '用邏輯反駁。錯了就要點出來。',
          'Phản biện bằng lý. Sai thì phải nói thẳng.',
          'Bantah dengan logika. Yang salah harus dijelaskan.'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 5,
    question: ML(
      '친구가 나한테 솔직한 의견을 물어봤을 때 나는?',
      'When a friend asks for my honest opinion, I…',
      '友だちに正直な意見を求められたとき、私は？',
      '朋友来问我真实想法时，我会？',
      '朋友來問我真實想法時，我會？',
      'Bạn hỏi ý kiến thật lòng. Tôi…',
      'Teman minta pendapat jujur. Aku…'
    ),
    options: [
      {
        text: ML(
          '상처받을까봐 좋게 포장해서 말한다',
          'Soften it so they won’t get hurt.',
          '傷つけないように丸めて言う。',
          '怕伤人，说得委婉些。',
          '怕傷人，說得委婉些。',
          'Nói nhẹ để không làm tổn thương.',
          'Dibungkus biar nggak sakit hati.'
        ),
        score: 0,
      },
      {
        text: ML(
          '솔직하게 말한다. 그게 진짜 친구 아닌가',
          'Tell the truth. Isn’t that what friends are for?',
          'はっきり言う。それが本当の友だちでしょ。',
          '直说。真朋友不就该这样吗？',
          '直說。真朋友不就該這樣嗎？',
          'Nói thẳng. Bạn thật là thế mà.',
          'Jujur. Itu kan teman sejati.'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 6,
    question: ML(
      '경쟁 상황에서 나는?',
      'In a competitive situation, I…',
      '競争の場面で、私は？',
      '竞争场合下，我会？',
      '競爭場合下，我會？',
      'Trong tình huống cạnh tranh, tôi…',
      'Dalam situasi kompetitif, aku…'
    ),
    options: [
      {
        text: ML(
          '상대가 잘 되는 것도 같이 기뻐하려고 노력한다',
          'Try to be happy for the other person’s wins too.',
          '相手の成功も一緒に喜べるよう努力する。',
          '会努力也为对方的成功高兴。',
          '會努力也為對方的成功高興。',
          'Cố vui khi đối phương thành công.',
          'Berusaha ikut senang saat lawan sukses.'
        ),
        score: 0,
      },
      {
        text: ML(
          '이기고 싶다. 지는 게 기분 나쁜 건 사실이다',
          'I want to win. Losing honestly feels bad.',
          '勝ちたい。負けるのはやっぱり嫌。',
          '想赢。输了确实不爽。',
          '想贏。輸了確實不爽。',
          'Muốn thắng. Thua thật sự khó chịu.',
          'Pengen menang. Kalah emang nggak enak.'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 7,
    question: ML(
      '누군가 나에 대한 뒷담화를 했다는 걸 알게 됐을 때 나는?',
      'When I learn someone talked behind my back, I…',
      '自分の陰口を叩かれていたと分かったとき、私は？',
      '得知有人在背后说我时，我会？',
      '得知有人在背後說我時，我會？',
      'Biết ai đó nói xấu sau lưng, tôi…',
      'Tahu ada yang membicarakan di belakang, aku…'
    ),
    options: [
      {
        text: ML(
          '굳이 맞서지 않는다. 언젠가 알아주겠지',
          'I don’t confront them head-on. They’ll get it someday.',
          'わざわざ立ち向かわない。いつか分かるでしょ。',
          '不硬碰。总有一天会明白吧。',
          '不硬碰。總有一天會明白吧。',
          'Không cần đối đầu. Rồi họ sẽ hiểu.',
          'Nggak perlu konfrontasi. Nanti juga sadar.'
        ),
        score: 0,
      },
      {
        text: ML(
          '직접 확인하거나 그 사람이 신경 쓸 만한 방식으로 반응한다',
          'I check directly—or react in a way they’ll notice.',
          '直接確認するか、相手が気づく形で反応する。',
          '直接求证，或用对方会在意的方式回应。',
          '直接求證，或用對方會在意的方式回應。',
          'Hỏi thẳng hoặc phản ứng theo cách họ để ý.',
          'Konfirmasi langsung atau bereaksi supaya dia sadar.'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 8,
    question: ML(
      '오랫동안 준비한 것이 갑자기 취소됐을 때 나는?',
      'Something I prepared for ages gets canceled suddenly. I…',
      '長く準備していたものが突然キャンセルになった。私は？',
      '准备了很久的事突然被取消。我会？',
      '準備了很久的事突然被取消。我會？',
      'Việc chuẩn bị lâu bị hủy đột ngột. Tôi…',
      'Yang sudah lama disiapkan tiba-tiba dibatalkan. Aku…'
    ),
    options: [
      {
        text: ML(
          '화나지만 겉으로는 "그럴 수도 있죠" 하고 넘긴다',
          'I’m angry but say, “Well, it happens,” on the surface.',
          '腹は立つが表向きは「仕方ないですね」で流す。',
          '心里火大，表面说“也没办法啦”。',
          '心裡火大，表面說「也沒辦法啦」。',
          'Tức nhưng ngoài mặt bảo “thôi cũng được”.',
          'Kesel tapi di luar bilang “ya sudah, gitu aja”.'
        ),
        score: 0,
      },
      {
        text: ML(
          '이유라도 제대로 듣고 싶다. 이건 납득이 필요하다',
          'I need a real reason. I have to make sense of this.',
          '理由ははっきり聞きたい。納得が必要。',
          '至少想听清楚理由。这事得说得通。',
          '至少想聽清楚理由。這事要說得通。',
          'Cần lý do rõ ràng. Phải thuyết phục được.',
          'Perlu alasan yang jelas. Harus masuk akal.'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 9,
    question: ML(
      '내가 명백히 옳은데 상대가 인정하지 않을 때 나는?',
      'I’m clearly right but they won’t admit it. I…',
      '自分は明らかに正しいのに相手が認めない。私は？',
      '我明明对，对方却不认。我会？',
      '我明明對，對方卻不認。我會？',
      'Rõ ràng tôi đúng mà họ không chịu nhận. Tôi…',
      'Jelas aku benar tapi mereka nggak ngaku. Aku…'
    ),
    options: [
      {
        text: ML(
          '더 이상 얘기해봤자 소용없다 싶으면 그냥 넘어간다',
          'If arguing feels pointless, I drop it.',
          'これ以上話しても無駄なら、流す。',
          '觉得再说也没用就算了。',
          '覺得再說也沒用就算了。',
          'Nói thêm vô ích thì thôi cho qua.',
          'Kalau debatnya sia-sia, aku lepas.'
        ),
        score: 0,
      },
      {
        text: ML(
          '끝까지 간다. 내가 맞다는 걸 증명할 때까지',
          'I go all the way until I’ve proven I’m right.',
          '最後までやる。正しいと証明するまで。',
          '杠到底，直到证明自己没错。',
          '槓到底，直到證明自己沒錯。',
          'Theo đến cùng đến khi chứng minh mình đúng.',
          'Terus sampai bisa buktiin aku benar.'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 10,
    question: ML(
      '영화나 드라마에서 가장 공감되는 캐릭터는?',
      'In movies or dramas, which character do you relate to most?',
      '映画やドラマで一番共感するキャラは？',
      '电影或剧里你最共情哪种角色？',
      '電影或劇裡你最共情哪種角色？',
      'Trong phim/drama bạn đồng cảm nhất với kiểu nào?',
      'Di film/drama kamu paling relate karakter mana?'
    ),
    options: [
      {
        text: ML(
          '묵묵히 참고 결국 선하게 이기는 주인공',
          'The quiet hero who endures and wins the good way.',
          '黙って耐えて、最後は善く勝つ主人公。',
          '默默忍耐、最终善良取胜的主角。',
          '默默忍耐、最終善良取勝的主角。',
          'Nhân vật chịu đựng rồi thắng bằng lẽ phải.',
          'Protagonis yang sabar dan menang dengan baik.'
        ),
        score: 0,
      },
      {
        text: ML(
          '상처받아서 빌런이 됐는데 사실 이해가 되는 그 캐릭터',
          'The one who turns “villain” from hurt—but you get why.',
          '傷ついて悪役っぽくなるけど、実は分かるあのキャラ。',
          '受伤变“反派”但其实很能共情的那个。',
          '受傷變「反派」但其實很能共情的那個。',
          'Bị tổn thương rồi “ác” nhưng mình hiểu tại sao.',
          'Terluka jadi “jahat” tapi tetap bisa dimengerti.'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 11,
    question: ML(
      '나에게 부당한 일이 생겼을 때 주변 반응은?',
      'When something unfair happens to me, people around me usually…',
      '自分に不当なことが起きたとき、周りの反応は？',
      '遇到不公时，周围人的反应是？',
      '遇到不公時，周圍人的反應是？',
      'Khi tôi bị bất công, mọi người xung quanh thường…',
      'Saat aku kena unfair, orang sekitar biasanya…'
    ),
    options: [
      {
        text: ML(
          '"그 사람이 잘못한 거야, 네가 참았잖아" 위로를 받는다',
          'Comfort me: “They were wrong; you’ve been patient.”',
          '「相手が悪い、あなたは我慢したよね」と慰められる。',
          '安慰我说：“是对方的错，你已经很忍了。”',
          '安慰我說：「是對方的錯，你已經很忍了。」',
          'An ủi: “Lỗi người kia, bạn đã nhịn nhiều rồi.”',
          'Dihibur: “Salah mereka, kamu sudah sabar.”'
        ),
        score: 0,
      },
      {
        text: ML(
          '"너 그 사람한테 뭔가 했지?" 의심부터 받는다',
          'Suspect me first: “You must have done something to them.”',
          '「あなたが何かしたでしょ？」と疑われる。',
          '先怀疑我：“你对人家做什么了吧？”',
          '先懷疑我：「你對人家做了什麼吧？」',
          'Nghi tôi trước: “Chắc bạn làm gì họ rồi?”',
          'Curiga dulu: “Pasti kamu ngapain dia kan?”'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 12,
    question: ML(
      '지금 내 안의 빌런 DNA에 대해 솔직하게 말한다면?',
      'Honestly—how much “villain DNA” is in you right now?',
      '今の自分の中の「悪役DNA」について正直に言うと？',
      '说实话，你体内的“反派DNA”有多少？',
      '說實話，你體內的「反派DNA」有多少？',
      'Thật lòng thì “DNA phản diện” trong bạn thế nào?',
      'Jujur—seberapa besar “DNA villain” di kamu sekarang?'
    ),
    options: [
      {
        text: ML(
          '사실 별로 없는 것 같다. 나는 꽤 착한 편이다',
          'Not much, honestly. I’m pretty nice.',
          'あまりないと思う。わりといい人だ。',
          '好像不多。我人还挺善良的。',
          '好像不多。我人還挺善良的。',
          'Chắc không nhiều. Mình khá hiền.',
          'Kayaknya nggak banyak. Aku lumayan baik.'
        ),
        score: 0,
      },
      {
        text: ML(
          '있다. 상황만 맞으면 언제든 각성할 준비가 돼 있다',
          'It’s there. Given the right moment, I can go full mode anytime.',
          'ある。状況が揃えばいつでも覚醒できる。',
          '有。时机一到随时能觉醒。',
          '有。時機一到隨時能覺醒。',
          'Có đấy. Đúng lúc là “thức tỉnh” bất cứ lúc nào.',
          'Ada. Pas momennya, siap meledak kapan aja.'
        ),
        score: 1,
      },
    ],
  },
];

export const phase3VillainDnaResults: Phase3VillainDnaResult[] = [
  {
    type: 'Type1',
    emoji: '😇',
    title: ML(
      '참아도 너무 참는, 인내의 성자 빌런',
      'Too patient to be true — the “saint-mask” villain',
      '我慢しすぎる聖者系ヴィラン',
      '忍过头了——戴天使面具的反派',
      '忍過頭了——戴天使面具的反派',
      'Nhẫn quá mức — kiểu “phản diện đội mặt thánh”',
      'Terlalu sabar — villain bertopeng malaikat'
    ),
    villainCodename: ML(
      '천사탈 쓴 OO 빌런',
      'Angelic-mask [Name] Villain',
      '天使の仮面の〇〇ヴィラン',
      '戴天使面具的【名字】反派',
      '戴天使面具的【名字】反派',
      'Phản diện đội mặt thánh [Tên]',
      'Villain topeng malaikat [Nama]'
    ),
    villainSpecialty: ML(
      '속으로 저주하기, 겉으로는 웃기, 완벽한 이중생활 유지',
      'Curse inside, smile outside—perfect double life.',
      '心の中で呪い、外では笑う。完璧な二重生活。',
      '心里诅咒，表面微笑，双重生活满分。',
      '心裡詛咒，表面微笑，雙重生活滿分。',
      'Nguyền trong đầu, cười bên ngoài—sống hai mặt hoàn hảo.',
      'Kutuk di dalam, senyum di luar—doble hidup sempurna.'
    ),
    quoteLine: ML(
      '「저 빌런 아닌데요. 그냥 평화를 좋아하는 거예요.」',
      '“I’m not a villain—I just love peace.”',
      '「悪役じゃないです。平和が好きなだけです。」',
      '“我不是反派，我只是爱好和平。”',
      '「我不是反派，我只是愛好和平。」',
      '“Tôi không phải phản diện—chỉ thích yên bình thôi.”',
      '“Bukan villain kok—aku cuma suka damai.”'
    ),
    description: ML(
      '당신의 빌런 재질은 극히 낮습니다. 아니, 낮은 게 아니라 너무 꾹꾹 눌러 담고 있는 걸 수도 있습니다. 새치기하는 사람을 봐도 참고, 내 의견이 무시당해도 참고, 뒷담화를 들어도 참습니다. 속으로는 흑염룡이 몸부림치고 있는데 겉으로는 천사입니다. 어쩌면 당신이 가장 무서운 빌런일 수 있습니다. 아무도 모르게 혼자 삭이고 있으니까요.',
      'Your “villain energy” looks low—maybe it’s not low, just tightly bottled. You endure line-cutters, ignored ideas, and gossip. Inside, a black-flame dragon thrashes; outside, you’re an angel. You might be the scariest villain of all—because you swallow it alone where no one sees.',
      'あなたの悪役度は低そうに見えます。いや、低いのではなく、詰め込みすぎているのかも。割り込みも、無視も、陰口も耐える。内側では黒い炎が暴れているのに外側は天使。誰にも見えないところで一人で抱え込むから、いちばん怖い悪役かもしれません。',
      '你的“反派浓度”看似很低——也可能不是低，而是压得太狠。插队、被无视、闲话你都忍。内心黑炎龙在翻腾，表面却是天使。也许才是最可怕的反派，因为你在无人知晓处独自消化。',
      '你的「反派濃度」看似很低——也可能不是低，而是壓得太狠。插隊、被無視、閒話你都忍。內心黑炎龍在翻騰，表面卻是天使。也許才是最可怕的反派，因為你在無人知曉處獨自消化。',
      '“Độ phản diện” của bạn có vẻ thấp—hoặc không phải thấp mà đang nén quá chặt. Chen hàng, bị phớt lờ, nghe xấu sau lưng… bạn đều nhịn. Trong lòng rồng lửa đen giãy giụa, ngoài mặt lại hiền lành. Có thể bạn là phản diện đáng sợ nhất—vì một mình nuốt hết nơi không ai thấy.',
      '“Kadar villain”-mu kelihatan rendah—atau bukan rendah, tapi terlalu dipendam. Antrean dipotong, ide diabaikan, gosip… kamu tahan. Di dalam naga api hitam mengamuk, di luar seperti malaikat. Mungkin kamu villain paling menakutkan—karena menelan sendiri tanpa ada yang tahu.'
    ),
    villainLevel: ML(
      'Lv. 1 (봉인 상태)',
      'Lv. 1 (sealed)',
      'Lv.1（封印状態）',
      'Lv.1（封印状态）',
      'Lv.1（封印狀態）',
      'Lv.1 (đang phong ấn)',
      'Lv.1 (tersegel)'
    ),
    awakeningCondition: ML(
      '사실상 각성 불가. 그게 더 무서움',
      'Basically un-awakened—which is what’s scary.',
      '実質覚醒不可。それが怖い。',
      '基本觉醒不了——这才可怕。',
      '基本覺醒不了——這才可怕。',
      'Thực tế không “thức tỉnh”—đó mới đáng sợ.',
      'Secara praktis nggak “bangun”—itu yang serem.'
    ),
    blackFlameProbability: ML(
      '5% (극한 상황에서만)',
      '5% (only in extreme situations)',
      '5%（極限状況のみ）',
      '5%（仅极限情况）',
      '5%（僅極限情況）',
      '5% (chỉ khi cực đoan)',
      '5% (hanya situasi ekstrem)'
    ),
    ultimateMove: ML(
      '「...그래, 좋아.」(이 말에 담긴 감정의 무게를 아무도 모름)',
      '“…Fine. Okay.” (Nobody knows the weight behind it.)',
      '「…わかった、いいよ。」（この一言の重さを誰も知らない）',
      '「……行，好吧。」（没人知道这句话有多重。）',
      '「……行，好吧。」（沒人知道這句話有多重。）',
      '“…Được, okay.” (Chẳng ai biết câu đó nặng đến mức nào.)',
      '“…Ya, oke.” (Nggak ada yang tahu beratnya kata itu.)'
    ),
    dangerIndex: ML(
      '★★★★★ (참다 폭발하면 가장 무서운 유형)',
      '★★★★★ (if you finally snap, you’re the scariest type)',
      '★★★★★（我慢が爆発したらいちばん怖い）',
      '★★★★★（一旦爆发最吓人）',
      '★★★★★（一旦爆發最嚇人）',
      '★★★★★ (nổ sau khi nhịn lâu là đáng sợ nhất)',
      '★★★★★ (meledak setelah nahan = paling ngeri)'
    ),
    oneLineEval: ML(
      '평화주의자가 한번 뚜껑 열리면 가장 무섭습니다',
      'When a peacemaker’s lid comes off once, it’s terrifying.',
      '平和主義者が一度ふたを開けると、いちばん怖い。',
      '和平主义者一旦掀盖最可怕。',
      '和平主義者一旦掀蓋最可怕。',
      'Người thích yên bình mà “bật nắp” một lần là đáng sợ nhất.',
      'Orang yang suka damai kalau meledak sekali, paling menakutkan.'
    ),
    shareSnippet: ML(
      '내 빌런 재질은 천사탈 쓴 OO 😇 빌런 레벨 Lv.1. 맞아서 소름 → 너의 흑염룡은 몇 레벨이야?',
      'My villain type: Angelic-mask [Name] 😇 Lv.1. Too real—what level is your inner black-flame dragon?',
      '私の悪役タイプ：天使の仮面の〇〇😇 Lv.1。刺さる…あなたの黒い炎ドラゴンはレベルいくつ？',
      '我的反派体质：戴天使面具的【名】😇 Lv.1。准到起鸡皮——你的黑炎龙几级？',
      '我的反派體質：戴天使面具的【名】😇 Lv.1。準到起雞皮——你的黑炎龍幾級？',
      'Kiểu phản diện của tôi: mặt thánh [Tên] 😇 Lv.1. Chuẩn đến rợn—rồng lửa đen của bạn level mấy?',
      'Tipe villain-ku: topeng malaikat [Nama] 😇 Lv.1. Pas banget—naga api hitammu level berapa?'
    ),
  },
  {
    type: 'Type2',
    emoji: '🧊',
    title: ML(
      '논리로 압살하는, 냉철한 이성 빌런',
      'Cold-logic villain who crushes with reasoning',
      '論理で圧殺する冷徹ヴィラン',
      '用逻辑碾压的冷静理性反派',
      '用邏輯碾壓的冷靜理性反派',
      'Phản diện lý trí—nghiền bằng luận điểm',
      'Villain logis—hancurkan dengan argumen'
    ),
    villainCodename: ML(
      '논리 머신 OO 빌런',
      'Logic Machine [Name] Villain',
      '論理マシンの〇〇ヴィラン',
      '逻辑机器【名字】反派',
      '邏輯機器【名字】反派',
      'Máy logic [Tên]',
      'Mesin logika [Nama]'
    ),
    villainSpecialty: ML(
      '반박 불가 논리 전개, 상대의 허점 정확하게 찌르기, 팩트 폭격',
      'Unanswerable logic lines, precise weak-spot pokes, fact barrage.',
      '反論不能の論理展開、急所を正確に突く、ファクト連打。',
      '无法反驳的论证、精准戳弱点、事实连击。',
      '無法反駁的論證、精準戳弱點、事實連擊。',
      'Luận điểm không cãi lại được, chọc đúng điểm yếu, dồn fact.',
      'Argumen tak terbantah, tusuk titik lemah, serangan fakta.'
    ),
    quoteLine: ML(
      '「저는 그냥 틀린 걸 틀렸다고 하는 거예요. 빌런이 아니라 팩트입니다.」',
      '“I’m just saying wrong is wrong. That’s not villainy—that’s facts.”',
      '「間違いを間違いと言っているだけです。悪役じゃなくてファクトです。」',
      '“我只是说错就是错。不是反派，是事实。”',
      '「我只是說錯就是錯。不是反派，是事實。」',
      '“Tôi chỉ nói sai là sai. Không phải ác—là sự thật.”',
      '“Aku cuma bilang salah itu salah. Bukan jahat—fakta.”'
    ),
    description: ML(
      '당신의 빌런 재질은 감정이 아닌 논리에서 나옵니다. 화를 내지 않습니다. 대신 상대가 반박할 수 없는 논리로 조용히 압살합니다. 회의 자리에서 틀린 말을 하면 바로 짚어주고, 내가 옳을 때는 끝까지 증명합니다. 무서운 건 이게 나쁜 의도가 없다는 겁니다. 그냥 팩트를 말하는 건데 상대 입장에서는 빌런처럼 느껴집니다.',
      'Your villain energy comes from logic, not rage. You don’t yell—you quietly dismantle with arguments they can’t refute. In meetings you flag mistakes fast; when you’re right, you prove it to the end. What’s scary is there’s no malice—you’re just stating facts, yet it feels villainous on the receiving end.',
      'あなたの悪役度は感情ではなく論理から。怒鳴らない。代わりに反論できない論理で静かに圧殺。会議では誤りを即指摘し、正しいときは最後まで証明。怖いのは悪意がないこと。ただ事実を言っているだけなのに、相手には悪役に感じられる。',
      '你的反派感来自逻辑而非情绪。你不吼，只用对方无法反驳的论证安静碾压。会上错话立刻指出，自己有理就证到底。可怕的是没有恶意——只是在陈述事实，对方却觉得像反派。',
      '你的反派感來自邏輯而非情緒。你不吼，只用對方無法反駁的論證安靜碾壓。會上錯話立刻指出，自己有理就證到底。可怕的是沒有惡意——只是在陳述事實，對方卻覺得像反派。',
      '“Độ phản diện” của bạn đến từ lý trí, không phải cáu. Bạn không la—chỉ dỡ bỏ bằng luận điểm không cãi được. Trong họp chỉ sai ngay; khi đúng thì chứng minh tới cùng. Đáng sợ là không có ác ý—chỉ nói sự thật, nhưng người nghe lại thấy như phản diện.',
      'Energi villain-mu dari logika, bukan emosi. Nggak teriak—membongkar dengan argumen yang nggak bisa dibantah. Di rapat langsung tunjuk salah; kalau benar dibuktikan sampai habis. Seremnya nggak ada niat jahat—cuma fakta, tapi lawan rasanya kena villain.'
    ),
    villainLevel: ML(
      'Lv. 30 (냉철 모드)',
      'Lv. 30 (cold mode)',
      'Lv.30（冷徹モード）',
      'Lv.30（冷静模式）',
      'Lv.30（冷靜模式）',
      'Lv.30 (chế độ lạnh)',
      'Lv.30 (mode dingin)'
    ),
    awakeningCondition: ML(
      '논리적으로 말이 안 되는 상황 발생 시',
      'When something logically doesn’t add up.',
      '論理的におかしい状況が起きたとき。',
      '出现逻辑说不通的情况时。',
      '出現邏輯說不通的情況時。',
      'Khi chuyện không còn logic.',
      'Saat situasinya nggak masuk akal.'
    ),
    blackFlameProbability: ML(
      '40% (틀린 소리 들리면 자동 발동)',
      '40% (auto-triggers on hearing nonsense)',
      '40%（デタラメを聞いたら自動発動）',
      '40%（听到胡说自动触发）',
      '40%（聽到胡說自動觸發）',
      '40% (nghe nói bậy là kích hoạt)',
      '40% (dengar omong kosong langsung aktif)'
    ),
    ultimateMove: ML(
      '「그 근거가 뭔지 여쭤봐도 될까요?」(이 질문이 시작이면 끝)',
      '“May I ask what the evidence is?” (When this starts, it’s over.)',
      '「その根拠を伺ってもよろしいですか？」（この一言が始まったら終わり）',
      '“请问依据是什么？”（这句话一出就结束。）',
      '「請問依據是什麼？」（這句話一出就結束。）',
      '“Cho hỏi căn cứ là gì?” (Câu này mở đầu là hết.)',
      '“Boleh tahu buktinya apa?” (Kalau ini mulai, selesai.)'
    ),
    dangerIndex: ML(
      '★★★☆☆ (감정 없는 논리가 가장 차갑게 느껴짐)',
      '★★★☆☆ (emotionless logic feels coldest)',
      '★★★☆☆（感情のない論理がいちばん冷たい）',
      '★★★☆☆（没情绪的逻辑最冷）',
      '★★★☆☆（沒情緒的邏輯最冷）',
      '★★★☆☆ (lý trí vô cảm lạnh nhất)',
      '★★★☆☆ (logika tanpa emosi terasa paling dingin)'
    ),
    oneLineEval: ML(
      '악의 없이 상처 주는 것이 때로는 더 무섭습니다',
      'Harm without malice can be scarier.',
      '悪意なく傷つけるのが、ときにいちばん怖い。',
      '无恶意却伤人，有时更可怕。',
      '無惡意卻傷人，有時更可怕。',
      'Làm tổn thương không ác ý đôi khi đáng sợ hơn.',
      'Nyakiti tanpa niat jahat kadang lebih menakutkan.'
    ),
    shareSnippet: ML(
      '내 빌런 재질은 논리 머신 OO 🧊 빌런 레벨 Lv.30. 화 안 내고 논리로 압살 → 너의 흑염룡은 몇 레벨이야?',
      'My villain type: Logic Machine [Name] 🧊 Lv.30. No yelling—just logic crush. What level is your black-flame dragon?',
      '私の悪役タイプ：論理マシン〇〇🧊 Lv.30。怒らず論理で圧殺→あなたの黒い炎ドラゴンはレベルいくつ？',
      '我的反派体质：逻辑机器【名】🧊 Lv.30。不吼，用逻辑碾压——你的黑炎龙几级？',
      '我的反派體質：邏輯機器【名】🧊 Lv.30。不吼，用邏輯碾壓——你的黑炎龍幾級？',
      'Kiểu phản diện: Máy logic [Tên] 🧊 Lv.30. Không la—nghiền bằng lý. Rồng lửa đen của bạn level mấy?',
      'Tipe villain: Mesin logika [Nama] 🧊 Lv.30. Tanpa teriak—hancurkan logika. Naga api hitammu level berapa?'
    ),
  },
  {
    type: 'Type3',
    emoji: '📋',
    title: ML(
      '기억력으로 승부하는, 과거 기록 빌런',
      'Archive villain who wins with memory receipts',
      '記憶力で勝つ過去記録ヴィラン',
      '靠记忆力与黑历史的记录型反派',
      '靠記憶力與黑歷史的記錄型反派',
      'Phản diện hồ sơ—thắng bằng trí nhớ',
      'Villain arsip—menang dengan ingatan'
    ),
    villainCodename: ML(
      '전부 기억하는 OO 빌런',
      '“I Remember Everything” [Name] Villain',
      '全部覚えている〇〇ヴィラン',
      '全都记得的【名字】反派',
      '全都記得的【名字】反派',
      'Nhớ hết [Tên]',
      'Ingat semua [Nama]'
    ),
    villainSpecialty: ML(
      '잊을 만할 때 소환하는 과거 증거, 스크린샷 아카이브 운영, 결정적 타이밍에 꺼내기',
      'Summon past receipts when they’ve almost forgotten; screenshot archive; deploy at the perfect moment.',
      '忘れかけた頃に過去の証拠を召喚、スクショアーカイブ運営、決定的瞬間に出す。',
      '快忘了就掏出证据，截图存档，关键时刻亮牌。',
      '快忘了就掏出證據，截圖存檔，關鍵時刻亮牌。',
      'Gọi bằng chứng cũ khi sắp quên; lưu screenshot; bung đúng lúc.',
      'Keluarkan bukti lama saat hampir lupa; arsip screenshot; timing fatal.'
    ),
    quoteLine: ML(
      '「저 그때 그 말 기억하거든요.」',
      '“I remember what you said back then.”',
      '「あのとき、そう言いましたよね。」',
      '“我记得你当时那句话。”',
      '「我記得你當時那句話。」',
      '“Tôi nhớ lúc đó anh/chị nói gì.”',
      '“Aku ingat kamu bilang apa waktu itu.”'
    ),
    description: ML(
      '당신의 빌런 재질은 기억력에서 나옵니다. 그냥 넘어가는 척하지만 잊은 게 아닙니다. 언제 어디서 누가 뭐라고 했는지, 단톡방에서 내 의견이 무시당한 날짜까지 기억하고 있습니다. 결정적인 순간에 「저 그때 그거 기억하시죠?」 한마디로 상황을 뒤집는 것이 당신의 필살기입니다. 조용히 증거를 모으고 있는 타입.',
      'Your villain energy is memory. You pretend to move on—but you didn’t forget. Who said what, when, where—even the date your idea got ignored in the group chat. Your finisher is flipping the room with, “You remember that thing from back then?” You quietly collect evidence.',
      'あなたの悪役度は記憶力から。流したフリでも忘れていない。いつどこで誰が何と言ったか、グループチャットで意見が無視された日付まで覚えている。決定的な瞬間に「あのときのあれ、覚えてますよね？」でひっくり返すのが必殺。静かに証拠を集めるタイプ。',
      '你的反派感来自记忆力。表面翻篇，其实没忘。谁在哪说了什么，群里你意见被无视的日期都记得。绝杀是一句“那会儿那事您还记得吧？”你是安静攒证据型。',
      '你的反派感來自記憶力。表面翻篇，其實沒忘。誰在哪說了什麼，群裡你意見被無視的日期都記得。絕殺是一句「那會兒那事您還記得吧？」你是安靜攢證據型。',
      '“Độ phản diện” của bạn đến từ trí nhớ. Giả vờ cho qua nhưng không quên. Ai nói gì, khi nào, ở đâu—kể cả ngày ý kiến bị phớt trong nhóm. Đòn kết là “Anh/chị nhớ chuyện hồi đó chứ?” Bạn âm thầm thu thập bằng chứng.',
      'Energi villain dari memori. Pura-pura move on tapi nggak lupa. Siapa bilang apa, kapan, di mana—termasuk tanggal ide kamu diabaikan di grup. Finisher: “Ingat waktu itu kan?” Kamu kumpulkan bukti diam-diam.'
    ),
    villainLevel: ML(
      'Lv. 45 (은밀한 아카이브 운영 중)',
      'Lv. 45 (secret archive online)',
      'Lv.45（秘密アーカイブ運営中）',
      'Lv.45（秘密档案运营中）',
      'Lv.45（秘密檔案運營中）',
      'Lv.45 (kho bí mật đang chạy)',
      'Lv.45 (arsip rahasia aktif)'
    ),
    awakeningCondition: ML(
      '예전에 나한테 잘못했던 사람이 도움을 요청할 때',
      'When someone who wronged you before asks for help.',
      '昔こちらに悪いことをした人が助けを求めてきたとき。',
      '曾经亏待过你的人来求助时。',
      '曾經虧待過你的人來求助時。',
      'Khi người từng có lỗi với bạn nhờ giúp.',
      'Saat orang yang pernah menyakitimu minta bantuan.'
    ),
    blackFlameProbability: ML(
      '55% (때와 장소를 기다리는 스타일)',
      '55% (waits for the right time and place)',
      '55%（時と場所を待つスタイル）',
      '55%（等时机地点的风格）',
      '55%（等時機地點的風格）',
      '55% (chờ đúng thời điểm)',
      '55% (nunggu momen tepat)'
    ),
    ultimateMove: ML(
      '「혹시 (날짜)에 하셨던 말씀 기억하세요?」(이 한마디로 상황 종료)',
      '“Do you remember what you said on (date)?” (One line ends the scene.)',
      '「（日付）に言っていたこと、覚えてますか？」（この一言で終わり）',
      '“您还记得（日期）那天说的话吗？”（一句收场。）',
      '「您還記得（日期）那天說的話嗎？」（一句收場。）',
      '“Anh/chị nhớ hôm (ngày) đã nói gì không?” (Một câu là xong.)',
      '“Ingat nggak kamu bilang apa tanggal (…)?” (Satu kalimat selesai.)'
    ),
    dangerIndex: ML(
      '★★★★☆ (조용히 준비한 빌런이 가장 무서움)',
      '★★★★☆ (a quietly prepared villain is scariest)',
      '★★★★☆（静かに準備した悪役がいちばん怖い）',
      '★★★★☆（安静准备的反派最可怕）',
      '★★★★☆（安靜準備的反派最可怕）',
      '★★★★☆ (phản diện chuẩn bị âm thầm đáng sợ nhất)',
      '★★★★☆ (villain yang siap diam-diam paling menakutkan)'
    ),
    oneLineEval: ML(
      '기억하고 있다는 것 자체가 이미 반쯤은 승리입니다',
      'Remembering is already half the win.',
      '覚えているだけで、もう半分勝ち。',
      '记得本身就已经赢了一半。',
      '記得本身就已經贏了一半。',
      'Chỉ cần nhớ là đã thắng một nửa.',
      'Ingat saja sudah setengah menang.'
    ),
    shareSnippet: ML(
      '내 빌런 재질은 전부 기억하는 OO 📋 빌런 레벨 Lv.45. 잊은 척하지만 다 기억 → 너의 흑염룡은 몇 레벨이야?',
      'My villain type: “I Remember Everything” [Name] 📋 Lv.45. Pretends to forget—remembers all. Your black-flame dragon level?',
      '私の悪役タイプ：全部覚えてる〇〇📋 Lv.45。忘れたフリでも全部覚えてる→黒い炎ドラゴンはレベルいくつ？',
      '我的反派体质：全都记得的【名】📋 Lv.45。装忘全记得——黑炎龙几级？',
      '我的反派體質：全都記得的【名】📋 Lv.45。裝忘全記得——黑炎龍幾級？',
      'Kiểu phản diện: nhớ hết [Tên] 📋 Lv.45. Giả quên mà nhớ hết—rồng lửa đen level mấy?',
      'Tipe villain: ingat semua [Nama] 📋 Lv.45. Pura lupa tapi ingat—naga api hitam level berapa?'
    ),
  },
  {
    type: 'Type4',
    emoji: '⚡',
    title: ML(
      '직접 말하고 직접 받아내는, 정면 돌파 빌런',
      'Straight-shot villain who says it to your face',
      '正面突破の直球ヴィラン',
      '正面硬刚、有话直说的反派',
      '正面硬剛、有話直說的反派',
      'Phản diện nói thẳng—đối đầu trực diện',
      'Villain frontal—bilang langsung'
    ),
    villainCodename: ML(
      '직구 투척 OO 빌런',
      'Straight-Talk [Name] Villain',
      '直球投げ〇〇ヴィラン',
      '直球投掷【名字】反派',
      '直球投擲【名字】反派',
      'Nói thẳng [Tên]',
      'Tembak langsung [Nama]'
    ),
    villainSpecialty: ML(
      '할 말 바로 하기, 눈치 없이 핵심 찌르기, 돌려 말하는 법 모름',
      'Say it now, hit the core bluntly, no idea how to hint.',
      '言うべきことをすぐ言う、空気読まず核心を突く、遠回しができない。',
      '有话直说，不懂拐弯，一针见血。',
      '有話直說，不懂拐彎，一針見血。',
      'Nói ngay, chọc đúng lõi, không biết vòng vo.',
      'Langsung bicara, tusuk inti, nggak bisa muter.'
    ),
    quoteLine: ML(
      '「제가 빌런인가요? 저는 그냥 솔직한 거예요.」',
      '“Am I the villain? I’m just honest.”',
      '「私が悪役ですか？ただ正直なだけです。」',
      '“我是反派吗？我只是直说而已。”',
      '「我是反派嗎？我只是直說而已。」',
      '“Tôi là phản diện à? Tôi chỉ thật thà thôi.”',
      '“Aku villain? Aku cuma jujur.”'
    ),
    description: ML(
      '당신의 빌런 재질은 직진에서 나옵니다. 할 말이 있으면 참지 않고, 틀린 건 바로 말하고, 부당한 상황엔 정면으로 맞섭니다. 주변에서는 「저 사람 또 직접 말한다」고 할 수 있지만 당신은 억울합니다. 돌려 말하는 게 더 피곤하고 직접 말하는 게 서로에게 낫다고 생각하기 때문입니다. 빌런이라고 불리지만 사실은 가장 솔직한 사람입니다.',
      'Your villain energy is forward motion. You don’t hold back when something must be said; you call out mistakes; you meet unfairness head-on. People may say, “Here they go again,” but you feel misunderstood—because beating around the bush is more exhausting, and direct talk is kinder. Called a villain, you’re often the most honest one in the room.',
      'あなたの悪役度は直進から。言うべきなら我慢しない。間違いはその場で言う。不当には正面から向き合う。周りは「またストレートに言う」と言うかもしれないが、あなたは遠回しのほうがしんどいし、直接のほうが互いのためだと思っている。悪役と言われても、いちばん正直な人かもしれません。',
      '你的反派感来自直球。有话忍不住，错了当场说，不公就正面刚。别人会说“这人又直说”，但你觉得拐弯更累，直说才对彼此好。被叫反派，其实你往往最诚实。',
      '你的反派感來自直球。有話忍不住，錯了當場說，不公就正面剛。別人會說「這人又直說」，但你覺得拐彎更累，直說才對彼此好。被叫反派，其實你最誠實。',
      '“Độ phản diện” của bạn đến từ sự thẳng. Có điều phải nói là không nhịn; sai là nói ngay; bất công là đối đầu. Người ta bảo “lại nói thẳng rồi”, nhưng bạn thấy vòng vo mệt hơn—nói thẳng mới tốt cho cả hai. Bị gọi phản diện, bạn thường là người thật thà nhất.',
      'Energi villain dari frontal. Ada yang harus dikatakan nggak ditahan; salah langsung diomongin; unfair dihadapi. Orang bilang “lagi-lagi blak-blakan”, tapi kamu capek muter—langsung lebih baik. Disebut villain, kamu sering yang paling jujur.'
    ),
    villainLevel: ML(
      'Lv. 60 (항시 전투 준비 상태)',
      'Lv. 60 (always battle-ready)',
      'Lv.60（常時戦闘準備）',
      'Lv.60（随时战备）',
      'Lv.60（隨時戰備）',
      'Lv.60 (luôn sẵn sàng)',
      'Lv.60 (siap tempur)'
    ),
    awakeningCondition: ML(
      '부당한 상황 + 아무도 말 안 하는 분위기',
      'Unfair situation + nobody else will speak up.',
      '不当な状況＋誰も言わない空気。',
      '不公的场面＋没人敢开口的气氛。',
      '不公的場面＋沒人敢開口的氣氛。',
      'Bất công + không ai dám lên tiếng.',
      'Tidak adil + suasana di mana tak ada yang bicara.'
    ),
    blackFlameProbability: ML(
      '70% (어지간히 부당하면 자동 발동)',
      '70% (auto-triggers when it’s clearly unfair)',
      '70%（明らかに不当なら自動発動）',
      '70%（明显不公就触发）',
      '70%（明顯不公就觸發）',
      '70% (rõ ràng bất công là kích hoạt)',
      '70% (jelas unfair langsung aktif)'
    ),
    ultimateMove: ML(
      '「제가 직접 여쭤봐도 될까요?」(이 질문 이후 분위기 급변)',
      '“May I ask directly?” (After this, the vibe shifts fast.)',
      '「直接聞いてもいいですか？」（この質問のあと空気が変わる）',
      '“我能直接问吗？”（问完气氛骤变。）',
      '「我能直接問嗎？」（問完氣氛驟變。）',
      '“Cho tôi hỏi thẳng được không?” (Hỏi xong không khí đổi ngay.)',
      '“Boleh tanya langsung?” (Abis itu suasananya berubah.)'
    ),
    dangerIndex: ML(
      '★★★☆☆ (솔직함이 빌런처럼 보이는 아이러니)',
      '★★★☆☆ (irony: honesty looks villainous)',
      '★★★☆☆（正直さが悪役に見える皮肉）',
      '★★★☆☆（诚实反而像反派的讽刺）',
      '★★★☆☆（誠實反而像反派的諷刺）',
      '★★★☆☆ (thật thà lại giống phản diện—nghịch lý)',
      '★★★☆☆ (jujur malah kelihatan villain—ironis)'
    ),
    oneLineEval: ML(
      '직진하는 사람을 빌런이라고 부르는 세상이 문제입니다',
      'The problem is a world that calls straight shooters “villains.”',
      'ストレートな人を悪役呼ばわりする世界がおかしい。',
      '把直球的人叫成反派，才是问题。',
      '把直球的人叫成反派，才是問題。',
      'Thế giới gọi người thẳng là phản diện mới là vấn đề.',
      'Dunia yang juluki orang blak-blakan “villain” itu yang salah.'
    ),
    shareSnippet: ML(
      '내 빌런 재질은 직구 투척 OO ⚡ 빌런 레벨 Lv.60. 할 말 바로 하는 빌런 → 너의 흑염룡은 몇 레벨이야?',
      'My villain type: Straight-Talk [Name] ⚡ Lv.60. Says it straight—your black-flame dragon level?',
      '私の悪役タイプ：直球投げ〇〇⚡ Lv.60。言うべきことを言う→黒い炎ドラゴンはレベルいくつ？',
      '我的反派体质：直球【名】⚡ Lv.60。有话就说——黑炎龙几级？',
      '我的反派體質：直球【名】⚡ Lv.60。有話就說——黑炎龍幾級？',
      'Kiểu phản diện: nói thẳng [Tên] ⚡ Lv.60—rồng lửa đen level mấy?',
      'Tipe villain: tembak langsung [Nama] ⚡ Lv.60—naga api hitam level berapa?'
    ),
  },
  {
    type: 'Type5',
    emoji: '👁️',
    title: ML(
      '표정 하나로 상황 정리하는, 카리스마 압박 빌런',
      'Charisma-pressure villain who ends scenes with a look',
      '表情一つで場を制するカリスマ圧ヴィラン',
      '一个眼神收场的压迫感反派',
      '一個眼神收場的壓迫感反派',
      'Phản diện aura—một ánh mắt là xong',
      'Villain charisma—sekilas tatap selesai'
    ),
    villainCodename: ML(
      '눈빛 한 번 OO 빌런',
      'One-Glance [Name] Villain',
      '一瞥の〇〇ヴィラン',
      '一眼【名字】反派',
      '一眼【名字】反派',
      'Một ánh mắt [Tên]',
      'Sekilas tatap [Nama]'
    ),
    villainSpecialty: ML(
      '말 안 해도 전달되는 눈빛, 침묵으로 상대 자백 유도, 표정만으로 분위기 장악',
      'Eyes that speak without words; silence that pulls confessions; mood control with expression alone.',
      '言わなくても伝わる目つき、沈黙で相手に話させる、表情だけで空気を支配。',
      '不说话也有压迫的眼神，用沉默逼对方先开口，只靠表情控场。',
      '不說話也有壓迫的眼神，用沉默逼對方先開口，只靠表情控場。',
      'Ánh mắt không cần nói; im lặng khiến đối phương tự khai; chỉ biểu cảm đã cầm không khí.',
      'Mata bicara tanpa kata; diam bikin lawan ngaku; suasana dikontrol ekspresi.'
    ),
    quoteLine: ML(
      '「저 아무 말도 안 했는데요?」',
      '“I didn’t say anything, though?”',
      '「私、何も言ってないですけど？」',
      '“我什么也没说啊？”',
      '「我什麼也沒說啊？」',
      '“Tôi có nói gì đâu?”',
      '“Kan aku nggak ngomong apa-apa?”'
    ),
    description: ML(
      '당신의 빌런 재질은 말이 아닌 존재감에서 나옵니다. 직접 말하지 않아도 됩니다. 눈빛 하나, 표정 하나, 침묵 하나로 상대가 먼저 설명을 시작합니다. 드라마에서 빌런이 아무 말 없이 와인 잔을 내려놓는 장면처럼, 당신의 가장 무서운 순간은 가장 조용한 순간입니다. 말을 안 하는데 가장 강한 사람.',
      'Your villain energy is presence, not words. You don’t even need to speak. One glance, one face, one silence—and they start explaining first. Like a drama villain setting down a wine glass without a word, your scariest moments are your quietest. Strongest without saying a thing.',
      'あなたの悪役度は言葉ではなく存在感から。話さなくていい。一つの目つき、一つの表情、一つの沈黙で相手が先に説明を始める。ドラマで悪役が無言でワイングラスを置くシーンのように、いちばん怖いのはいちばん静かな瞬間。喋らないのにいちばん強い。',
      '你的反派感来自气场而非台词。甚至不必开口。一眼、一表情、一沉默，对方先解释。像剧里反派无声放下酒杯，你最可怕的时刻往往最安静。不说话却最强。',
      '你的反派感來自氣場而非台詞。甚至不必開口。一眼、一表情、一沉默，對方先解釋。像劇裡反派無聲放下酒杯，你最可怕的時刻往往最安靜。不說話卻最強。',
      '“Độ phản diện” của bạn là sự hiện diện, không phải lời nói. Không cần nói. Một ánh mắt, một biểu cảm, một sự im lặng—đối phương tự giải thích trước. Như phản diện đặt ly rượu không một lời, khoảnh khắc đáng sợ nhất lại yên lặng nhất. Mạnh nhất khi không nói.',
      'Energi villain dari presence, bukan kata. Bahkan nggak perlu bicara. Satu tatap, satu ekspresi, satu hening—mereka jelasin duluan. Kayak villain drama turunin gelas tanpa kata, momen paling menyeramkan paling sunyi. Terkuat tanpa ngomong.'
    ),
    villainLevel: ML(
      'Lv. 80 (각성 완료 상태)',
      'Lv. 80 (fully awakened)',
      'Lv.80（覚醒完了）',
      'Lv.80（觉醒完成）',
      'Lv.80（覺醒完成）',
      'Lv.80 (đã thức tỉnh)',
      'Lv.80 (bangun penuh)'
    ),
    awakeningCondition: ML(
      '나를 진짜 건드리는 상황 발생 시',
      'When someone truly crosses your line.',
      '本当にこちらを刺激する状況が起きたとき。',
      '真正踩到你底线时。',
      '真正踩到你底線時。',
      'Khi ai đó thật sự chạm giới hạn.',
      'Saat seseorang benar-benar ngelewatin batas.'
    ),
    blackFlameProbability: ML(
      '85% (이미 절반은 각성 중)',
      '85% (already half-awakened)',
      '85%（すでに半分覚醒）',
      '85%（半觉醒状态）',
      '85%（半覺醒狀態）',
      '85% (đã “thức” một nửa)',
      '85% (setengah sadar)'
    ),
    ultimateMove: ML(
      '「...그래서요?」(이 두 글자에 담긴 무게는 소설 한 권 분량)',
      '“…So?” (Two words, novel-length weight.)',
      '「…で？」（この二文字に小説一冊分の重み）',
      '“……所以呢？”（两个字像一整本小说。）',
      '「……所以呢？」（兩個字像一整本小說。）',
      '“…Thế?” (Hai chữ nặng cả quyển tiểu thuyết.)',
      '“…Jadi?” (Dua kata, beratnya se novel.)'
    ),
    dangerIndex: ML(
      '★★★★★ (말 안 하는 빌런이 제일 무서움)',
      '★★★★★ (the quiet villain is scariest)',
      '★★★★★（喋らない悪役がいちばん怖い）',
      '★★★★★（不说话的反派最可怕）',
      '★★★★★（不說話的反派最可怕）',
      '★★★★★ (phản diện im lặng đáng sợ nhất)',
      '★★★★★ (villain diam paling menakutkan)'
    ),
    oneLineEval: ML(
      '아무 말도 안 했는데 상대가 먼저 무너집니다',
      'You said nothing—and they broke first.',
      '何も言ってないのに、相手が先に崩れる。',
      '你什么也没说，对方先崩了。',
      '你什麼也沒說，對方先崩了。',
      'Chưa nói gì mà đối phương đã gục.',
      'Belum ngomong apa-apa, lawan sudah runtuh duluan.'
    ),
    shareSnippet: ML(
      '내 빌런 재질은 눈빛 한 번 OO 👁️ 빌런 레벨 Lv.80. 말 안 해도 카리스마 → 너의 흑염룡은 몇 레벨이야?',
      'My villain type: One-Glance [Name] 👁️ Lv.80. Charisma without words—your black-flame dragon level?',
      '私の悪役タイプ：一瞥〇〇👁️ Lv.80。喋らなくてもカリスマ→黒い炎ドラゴンはレベルいくつ？',
      '我的反派体质：一眼【名】👁️ Lv.80。不说话也有气场——黑炎龙几级？',
      '我的反派體質：一眼【名】👁️ Lv.80。不說話也有氣場——黑炎龍幾級？',
      'Kiểu phản diện: một ánh mắt [Tên] 👁️ Lv.80—rồng lửa đen level mấy?',
      'Tipe villain: sekilas tatap [Nama] 👁️ Lv.80—naga api hitam level berapa?'
    ),
  },
  {
    type: 'Type6',
    emoji: '🔥',
    title: ML(
      '이미 계획이 다 있는, 완전 각성 흑염룡',
      'Fully awakened black-flame dragon—plans already loaded',
      'すでに計画完備、完全覚醒の黒炎竜',
      '黑炎龙完全觉醒，套路已满',
      '黑炎龍完全覺醒，套路已滿',
      'Rồng lửa đen thức tỉnh hoàn toàn—kế đã sẵn',
      'Naga api hitam bangun penuh—rencana sudah ada'
    ),
    villainCodename: ML(
      '흑염룡 OO 빌런',
      'Black-Flame Dragon [Name] Villain',
      '黒炎竜〇〇ヴィラン',
      '黑炎龙【名字】反派',
      '黑炎龍【名字】反派',
      'Rồng lửa đen [Tên]',
      'Naga api hitam [Nama]'
    ),
    villainSpecialty: ML(
      '장기 플랜 운영, 결정적 순간 타이밍 완벽 포착, 반박 불가 상황 세팅',
      'Long-game planning, perfect timing at the clutch moment, setting unanswerable traps.',
      '長期プラン運用、決定的瞬間のタイミング完璧、反論不能の状況を作る。',
      '长线布局，关键时刻卡准节奏，布下无法反驳的局面。',
      '長線佈局，關鍵時刻卡準節奏，布下無法反駁的局面。',
      'Kế dài hơi, bắt đúng thời điểm then chốt, dựng tình huống không cãi được.',
      'Rencana jangka panjang, timing fatal pas, jebakan yang nggak bisa dibantah.'
    ),
    quoteLine: ML(
      '「저 사실 좀 많이 각성돼 있어요.」',
      '“Honestly… I’m pretty awakened already.”',
      '「実は、かなり覚醒してます。」',
      '“其实我已经觉醒得差不多了。”',
      '「其實我已經覺醒得差不多了。」',
      '“Thật ra tôi đã ‘thức’ khá nhiều rồi.”',
      '“Sebenarnya aku udah lumayan ‘bangun’.”'
    ),
    description: ML(
      '12문항 전부 빌런 선택을 하신 당신. 흑염룡은 이미 깨어 있습니다. 부당한 상황에 직접 맞서고, 과거는 기억하고, 논리는 준비됐고, 눈빛은 이미 장전됐습니다. 나쁜 의도가 있는 게 아닙니다. 다만 당신은 억울한 것을 못 참고, 옳은 것을 포기 못 하고, 정의롭지 않은 것에 침묵 못 하는 사람입니다. 어쩌면 가장 빌런 같지만 가장 정의로운 사람입니다.',
      'You picked the “villain” option on all 12—the black-flame dragon is already awake. You face unfairness head-on, remember the past, keep logic loaded, eyes already chambered. It’s not malice—you just can’t swallow injustice, can’t give up what’s right, can’t stay silent when something is wrong. Maybe the most “villain-like,” yet the most just.',
      '12問すべて“悪役寄り”を選んだあなた。黒炎竜はもう目覚めている。不当には正面から、過去は覚えていて、論理は装填済み、目つきも弾込め済み。悪意ではない。ただ不当を飲めず、正しいことを捨てられず、不正に黙れない人。いちばん悪役っぽいのに、いちばん正しいかもしれない。',
      '十二题全选“反派向”。黑炎龙已醒。不公就正面刚，过去记得清，逻辑上膛，眼神已瞄准。不是恶意——只是咽不下委屈、放不下对错、对不义无法沉默。也许最像反派，却也最正义。',
      '十二題全選「反派向」。黑炎龍已醒。不公就正面剛，過去記得清，邏輯上膛，眼神已瞄準。不是惡意——只是咽不下委屈、放不下對錯、對不義無法沉默。也许最像反派，卻也最正義。',
      'Bạn chọn hướng “phản diện” cả 12 câu—rồng lửa đen đã thức. Đối đầu bất công, nhớ quá khứ, lý trí đã lên đạn, ánh mắt đã lên nòng. Không phải ác ý—chỉ là không nuốt được oan, không buông điều đúng, không im trước sai. Có thể “phản diện” nhất, nhưng công bằng nhất.',
      'Kamu pilih opsi “villain” semua 12—naga api hitam sudah bangun. Hadapi ketidakadilan, ingat masa lalu, logika siap, mata siap tembak. Bukan niat jahat—cuma nggak telan ketidakadilan, nggak lepas yang benar, nggak bisa diam saat salah. Paling “villain”, tapi paling adil.'
    ),
    villainLevel: ML(
      'Lv. 99 (완전 각성)',
      'Lv. 99 (full awakening)',
      'Lv.99（完全覚醒）',
      'Lv.99（完全觉醒）',
      'Lv.99（完全覺醒）',
      'Lv.99 (thức tỉnh hoàn toàn)',
      'Lv.99 (bangun penuh)'
    ),
    awakeningCondition: ML(
      '이미 각성 완료. 언제든 준비됨',
      'Already awakened. Ready anytime.',
      'すでに覚醒完了。いつでも準備OK。',
      '已觉醒完毕，随时待命。',
      '已覺醒完畢，隨時待命。',
      'Đã thức tỉnh. Sẵn sàng bất cứ lúc nào.',
      'Sudah bangun. Siap kapan saja.'
    ),
    blackFlameProbability: ML(
      '99% (1%는 기분이 너무 좋은 날 한정)',
      '99% (the 1% is only on an unusually great day)',
      '99%（1%は気分が良すぎる日だけ）',
      '99%（1%留给心情好到离谱的那天）',
      '99%（1%留給心情好到離譜的那天）',
      '99% (1% chỉ khi mood quá đỉnh)',
      '99% (1% cuma hari mood luar biasa)'
    ),
    ultimateMove: ML(
      '상황별 맞춤 대응. 논리·침묵·직진·기억 중 최적 선택해서 사용',
      'Situational toolkit: pick the best of logic, silence, straight talk, or memory.',
      '状況に合わせて最適手を選択。論理・沈黙・直球・記憶。',
      '看情况出牌：逻辑、沉默、直球、记忆，选最优解。',
      '看情況出牌：邏輯、沉默、直球、記憶，選最優解。',
      'Tùy tình huống: logic, im lặng, nói thẳng, hoặc trí nhớ—chọn tối ưu.',
      'Sesuai situasi: logika, diam, frontal, atau memori—pilih yang paling pas.'
    ),
    dangerIndex: ML(
      '★★★★★ (모든 빌런 스킬 보유)',
      '★★★★★ (all villain skills equipped)',
      '★★★★★（全スキル装備）',
      '★★★★★（全技能点满）',
      '★★★★★（全技能點滿）',
      '★★★★★ (full skill villain)',
      '★★★★★ (skill villain lengkap)'
    ),
    oneLineEval: ML(
      '가장 강한 빌런은 악의 없이 가장 정의로운 사람입니다',
      'The strongest “villain” is often the most just—without malice.',
      'いちばん強い悪役は、悪意なくいちばん正しい人。',
      '最强的“反派”往往最正义，且没有恶意。',
      '最強的「反派」往往最正義，且沒有惡意。',
      '“Phản diện” mạnh nhất thường là người công bằng nhất—không ác ý.',
      '“Villain” terkuat sering yang paling adil—tanpa niat jahat.'
    ),
    shareSnippet: ML(
      '내 빌런 재질은 흑염룡 OO 🔥 빌런 레벨 Lv.99 완전 각성 → 너의 흑염룡은 몇 레벨이야?',
      'My villain type: Black-Flame Dragon [Name] 🔥 Lv.99 fully awakened—your black-flame dragon level?',
      '私の悪役タイプ：黒炎竜〇〇🔥 Lv.99 完全覚醒→黒い炎ドラゴンはレベルいくつ？',
      '我的反派体质：黑炎龙【名】🔥 Lv.99 完全觉醒——黑炎龙几级？',
      '我的反派體質：黑炎龍【名】🔥 Lv.99 完全覺醒——黑炎龍幾級？',
      'Kiểu phản diện: rồng lửa đen [Tên] 🔥 Lv.99—rồng của bạn level mấy?',
      'Tipe villain: naga api hitam [Nama] 🔥 Lv.99 bangun penuh—nagamu level berapa?'
    ),
  },
];

export function calculatePhase3VillainDnaResult(answers: number[]): string {
  const total = answers.reduce((sum, s) => sum + s, 0);
  if (total >= 0 && total <= 1) return 'Type1';
  if (total >= 2 && total <= 3) return 'Type2';
  if (total >= 4 && total <= 6) return 'Type3';
  if (total >= 7 && total <= 9) return 'Type4';
  if (total >= 10 && total <= 11) return 'Type5';
  if (total === 12) return 'Type6';
  return 'Type4';
}
