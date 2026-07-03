/** 나는 어떤 밈 캐릭터 재질? — 12문항 이미지 2지선다, A=0 B=1, 총점 0~12 */

const L = (
  ko: string,
  en: string,
  ja: string,
  zhCN: string,
  zhTW: string,
  vi: string,
  id: string
): Record<string, string> => ({ ko, en, ja, 'zh-CN': zhCN, 'zh-TW': zhTW, vi, id });

export interface Phase3MemeCharacterTypeQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    image: string;
    label: Record<string, string>;
    score: number;
  }[];
}

export interface Phase3MemeCharacterTypeResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  memeCharacterName: Record<string, string>;
  memeLevel: Record<string, string>;
  memeTrigger: Record<string, string>;
  memeActivationRate: Record<string, string>;
  memeUltimate: Record<string, string>;
  memeCaution: Record<string, string>;
  goodMatch: Record<string, string>;
  badMatch: Record<string, string>;
  memeOneLiner: Record<string, string>;
  shareSnippet: Record<string, string>;
}

export function calculatePhase3MemeCharacterTypeResult(scores: number[]): string {
  const total = scores.reduce((a, b) => a + (b ?? 0), 0);
  if (total <= 1) return 'Type1';
  if (total <= 3) return 'Type2';
  if (total <= 6) return 'Type3';
  if (total <= 9) return 'Type4';
  if (total <= 11) return 'Type5';
  return 'Type6';
}

const IMG = (q: number, opt: 'a' | 'b') => `p3_test_meme_character_type_q${q}${opt}.webp`;

export const phase3MemeCharacterTypeQuestions: Phase3MemeCharacterTypeQuestion[] = [
  {
    id: 1,
    question: L(
      '기대하던 음식이 딱 맛있게 나왔을 때 나의 반응은?',
      'When my long-awaited food comes out perfectly delicious, my reaction is?',
      '楽しみにしていた料理が完璧においしく出てきた時、私の反応は？',
      '期待已久的食物刚好超级好吃地端上来时，我的反应是？',
      '期待很久的食物剛好超好吃地端上來時，我的反應是？',
      'Khi món ăn mong chờ bấy lâu được mang ra ngon đúng ý, phản ứng của tôi là?',
      'Saat makanan yang aku tunggu-tunggu datang dengan rasa yang pas enak, reaksiku adalah?'
    ),
    options: [
      {
        image: IMG(1, 'a'),
        label: L(
          '눈을 감고 고개를 끄덕이며 조용히 음미하는 표정',
          'A face that closes eyes, nods, and quietly savors it',
          '目を閉じてうなずきながら静かに味わう表情',
          '闭上眼点点头，安静细细品味的表情',
          '閉上眼點點頭，安靜細細品味的表情',
          'Biểu cảm nhắm mắt, gật đầu và lặng lẽ thưởng thức',
          'Ekspresi menutup mata, mengangguk, dan menikmati dengan tenang'
        ),
        score: 0,
      },
      {
        image: IMG(1, 'b'),
        label: L(
          '양손을 번쩍 들고 "오!!!" 하며 크게 리액션하는 표정',
          'A face that throws both hands up and shouts "Oh!!!"',
          '両手を上げて「おお!!!」と大きくリアクションする表情',
          '双手举起大喊“哦!!!”的大反应表情',
          '雙手舉起大喊「喔!!!」的大反應表情',
          'Biểu cảm giơ cao hai tay và hét "Ồ!!!" thật to',
          'Ekspresi mengangkat kedua tangan sambil berteriak "Oh!!!"'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 2,
    question: L(
      '친구가 "이거 어떻게 생각해?"라고 의견을 물었을 때 나는?',
      'When a friend asks, "What do you think about this?", I?',
      '友達に「これどう思う？」と聞かれた時、私は？',
      '朋友问“你觉得这个怎么样？”时，我会？',
      '朋友問「你覺得這個怎麼樣？」時，我會？',
      'Khi bạn hỏi "Cậu nghĩ sao về cái này?", tôi sẽ?',
      'Saat teman bertanya, "Menurutmu ini gimana?", aku akan?'
    ),
    options: [
      {
        image: IMG(2, 'a'),
        label: L(
          '"솔직히 말해도 돼?" 하고 팩트를 정확하게 날리는 표정',
          'A face that says "Can I be honest?" and drops exact facts',
          '「正直に言っていい？」と言って事実を正確に伝える表情',
          '一脸“我能说实话吗？”然后精准输出事实的表情',
          '一臉「我可以說實話嗎？」然後精準輸出事實的表情',
          'Biểu cảm "Nói thật nhé?" rồi tung fact rất chuẩn',
          'Ekspresi "Boleh jujur?" lalu menembakkan fakta dengan tepat'
        ),
        score: 0,
      },
      {
        image: IMG(2, 'b'),
        label: L(
          '"좋은 것 같아~" 하고 분위기 맞춰주는 표정',
          'A face that says "Looks good~" to match the vibe',
          '「いいと思うよ〜」と空気を合わせる表情',
          '一脸“感觉不错呀~”配合气氛的表情',
          '一臉「感覺不錯呀~」配合氣氛的表情',
          'Biểu cảm "Thấy ổn đó~" để hòa không khí',
          'Ekspresi "Kayaknya bagus~" sambil menyesuaikan suasana'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 3,
    question: L(
      'SNS에서 감동적인 영상을 봤을 때 나는?',
      'When I watch a touching video on social media, I?',
      'SNSで感動的な動画を見た時、私は？',
      '在社交平台看到感人视频时，我会？',
      '在社群平台看到感人影片時，我會？',
      'Khi xem video cảm động trên mạng xã hội, tôi sẽ?',
      'Saat melihat video menyentuh di media sosial, aku akan?'
    ),
    options: [
      {
        image: IMG(3, 'a'),
        label: L(
          '눈물이 주르륵 흘러내리는데 멈추지 못하는 표정',
          'A face with tears streaming that cannot stop',
          '涙がポロポロ流れて止まらない表情',
          '眼泪哗啦啦流下来停不住的表情',
          '眼淚嘩啦啦流下來停不住的表情',
          'Biểu cảm nước mắt rơi liên tục không dừng lại được',
          'Ekspresi air mata mengalir deras dan tidak bisa berhenti'
        ),
        score: 0,
      },
      {
        image: IMG(3, 'b'),
        label: L(
          '약간 뭉클하지만 "이런 게 왜 눈물이 나?" 하는 표정',
          'A face that gets moved a bit but says "Why am I tearing up over this?"',
          '少しジーンとしつつ「なんでこれで泣くの？」という表情',
          '有点感动但一脸“这也会让我哭？”的表情',
          '有點感動但一臉「這也會讓我哭？」的表情',
          'Biểu cảm hơi xúc động nhưng kiểu "Sao cái này cũng rơi nước mắt nhỉ?"',
          'Ekspresi agak terharu tapi seperti, "Kok ini bikin nangis sih?"'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 4,
    question: L(
      '단체 사진 찍을 때 카메라를 인식하는 순간 나는?',
      'When taking a group photo, the moment I notice the camera, I?',
      '集合写真でカメラを認識した瞬間、私は？',
      '拍合照时意识到镜头的瞬间，我会？',
      '拍團體照時意識到鏡頭的瞬間，我會？',
      'Khi chụp ảnh nhóm, ngay khoảnh khắc nhận ra camera, tôi sẽ?',
      'Saat foto bareng, begitu sadar ada kamera, aku akan?'
    ),
    options: [
      {
        image: IMG(4, 'a'),
        label: L(
          '카메라를 보는 순간 자동으로 각도를 잡으며 포즈를 취하는 표정',
          'A face that instantly finds the angle and strikes a pose',
          'カメラを見た瞬間に自動で角度を決めてポーズする表情',
          '看到镜头瞬间自动找角度摆姿势的表情',
          '看到鏡頭瞬間自動找角度擺姿勢的表情',
          'Biểu cảm vừa thấy camera là tự động canh góc và tạo dáng',
          'Ekspresi yang langsung cari angle dan pose otomatis saat lihat kamera'
        ),
        score: 0,
      },
      {
        image: IMG(4, 'b'),
        label: L(
          '"어? 찍어요?" 하며 뒤늦게 반응하는 당황한 표정',
          'A flustered face that reacts late: "Huh? We are taking it now?"',
          '「え？今撮るの？」と遅れて反応する慌てた表情',
          '一脸“啊？现在拍吗？”后知后觉的慌张表情',
          '一臉「啊？現在拍嗎？」後知後覺的慌張表情',
          'Biểu cảm bối rối phản ứng chậm kiểu "Ơ? Chụp luôn à?"',
          'Ekspresi panik yang telat merespons, "Hah? Difoto sekarang?"'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 5,
    question: L(
      '모임에서 아무도 안 웃는 분위기인데 나는?',
      'In a gathering where no one is laughing, I?',
      '集まりで誰も笑っていない空気の時、私は？',
      '聚会里没人笑、气氛很冷时，我会？',
      '聚會裡沒人笑、氣氛很冷時，我會？',
      'Trong buổi tụ tập mà không ai cười, tôi sẽ?',
      'Di kumpul-kumpul saat tidak ada yang tertawa, aku akan?'
    ),
    options: [
      {
        image: IMG(5, 'a'),
        label: L(
          '혼자 속으로 참고 있다가 결국 터져 나오는 표정',
          'A face that holds it in alone, then finally bursts out',
          '一人でこらえていたけど結局吹き出す表情',
          '独自憋着最后还是笑喷出来的表情',
          '獨自憋著最後還是笑噴出來的表情',
          'Biểu cảm cố nhịn một mình rồi cuối cùng vẫn bật ra',
          'Ekspresi menahan sendiri lalu akhirnya meledak juga'
        ),
        score: 0,
      },
      {
        image: IMG(5, 'b'),
        label: L(
          '분위기 파악하고 굳은 표정 유지하는 표정',
          'A face that reads the room and keeps a firm expression',
          '空気を読んで真顔をキープする表情',
          '看懂气氛后维持严肃表情',
          '看懂氣氛後維持嚴肅表情',
          'Biểu cảm đọc không khí và giữ mặt nghiêm',
          'Ekspresi membaca suasana lalu mempertahankan wajah datar'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 6,
    question: L(
      '하기 싫은 일을 억지로 해야 할 때 나는?',
      'When I have to force myself to do something I hate, I?',
      'やりたくないことを無理やりやる時、私は？',
      '不得不硬着头皮做不想做的事时，我会？',
      '不得不硬著頭皮做不想做的事時，我會？',
      'Khi phải ép mình làm việc không muốn làm, tôi sẽ?',
      'Saat harus memaksa diri melakukan hal yang tidak disukai, aku akan?'
    ),
    options: [
      {
        image: IMG(6, 'a'),
        label: L(
          '표정에 모든 게 드러나는 억지 미소 표정',
          'A forced smile that reveals everything on the face',
          '表情に全部出てしまう作り笑いの顔',
          '勉强微笑但情绪全写在脸上的表情',
          '勉強微笑但情緒全寫在臉上的表情',
          'Biểu cảm cười gượng nhưng mọi thứ hiện hết trên mặt',
          'Ekspresi senyum terpaksa yang menunjukkan semuanya di wajah'
        ),
        score: 0,
      },
      {
        image: IMG(6, 'b'),
        label: L(
          '감정 없이 기계적으로 수행하는 무표정',
          'A blank face that executes it mechanically without emotion',
          '感情なしで機械的にこなす無表情',
          '毫无情绪、机械执行的无表情',
          '毫無情緒、機械執行的無表情',
          'Gương mặt vô cảm làm việc như máy',
          'Wajah tanpa ekspresi yang menjalankan tugas secara mekanis'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 7,
    question: L(
      '엄청나게 충격적인 소식을 들었을 때 나는?',
      'When I hear shocking news, I?',
      'とんでもなく衝撃的な知らせを聞いた時、私は？',
      '听到超级震惊的消息时，我会？',
      '聽到超級震驚的消息時，我會？',
      'Khi nghe tin cực sốc, tôi sẽ?',
      'Saat mendengar kabar yang sangat mengejutkan, aku akan?'
    ),
    options: [
      {
        image: IMG(7, 'a'),
        label: L(
          '표정이 굳고 눈이 커지며 5초 동안 말을 잃는 표정',
          'A face that freezes, eyes widen, and goes speechless for 5 seconds',
          '表情が固まり、目が大きくなって5秒間言葉を失う顔',
          '表情僵住、眼睛瞪大并失语5秒的表情',
          '表情僵住、眼睛瞪大並失語5秒的表情',
          'Biểu cảm đơ mặt, mắt mở to và câm nín 5 giây',
          'Ekspresi membeku, mata membesar, dan kehilangan kata-kata selama 5 detik'
        ),
        score: 0,
      },
      {
        image: IMG(7, 'b'),
        label: L(
          '바로 "진짜?!?!?!" 하며 반응이 폭발하는 표정',
          'A face that instantly explodes with "Seriously?!?!?!"',
          'すぐに「マジ?!?!?!」と反応が爆発する表情',
          '立刻“真的假的?!?!?!”反应爆炸的表情',
          '立刻「真的假的?!?!?!」反應爆炸的表情',
          'Biểu cảm bật ngay "Thật luôn hả?!?!?!"',
          'Ekspresi langsung meledak, "Serius?!?!?!"'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 8,
    question: L(
      '계획한 일이 완전히 틀어졌을 때 나는?',
      'When my plan completely falls apart, I?',
      '計画が完全に狂った時、私は？',
      '计划彻底乱掉时，我会？',
      '計畫徹底亂掉時，我會？',
      'Khi kế hoạch đổ bể hoàn toàn, tôi sẽ?',
      'Saat rencana benar-benar berantakan, aku akan?'
    ),
    options: [
      {
        image: IMG(8, 'a'),
        label: L(
          '"뭐 어때" 하고 바로 플랜 B로 전환하는 표정',
          'A face that says "So what" and instantly switches to plan B',
          '「まあいっか」とすぐにプランBへ切り替える表情',
          '一脸“那又怎样”马上切到B计划的表情',
          '一臉「那又怎樣」馬上切到B計畫的表情',
          'Biểu cảm "Kệ đi" rồi chuyển ngay sang kế hoạch B',
          'Ekspresi "Ya sudah" lalu langsung pindah ke rencana B'
        ),
        score: 0,
      },
      {
        image: IMG(8, 'b'),
        label: L(
          '허탈하게 웃으며 "이게 맞나?" 하는 표정',
          'A hollow laugh with "Is this for real?"',
          '虚しく笑いながら「これで合ってる？」という表情',
          '苦笑着“这真的是这样吗？”的表情',
          '苦笑著「這真的是這樣嗎？」的表情',
          'Biểu cảm cười bất lực kiểu "Ủa vậy đúng không ta?"',
          'Ekspresi tertawa hambar sambil berpikir, "Ini beneran?"'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 9,
    question: L(
      '분위기 싸한 상황에서 나는?',
      'In an awkward, tense atmosphere, I?',
      '空気が気まずい時、私は？',
      '气氛很尴尬发冷时，我会？',
      '氣氛很尷尬發冷時，我會？',
      'Trong tình huống không khí lạnh ngắt, tôi sẽ?',
      'Saat suasana menjadi dingin dan canggung, aku akan?'
    ),
    options: [
      {
        image: IMG(9, 'a'),
        label: L(
          '눈치 없이 계속 떠들다가 나중에 분위기 파악하는 표정',
          'A face that keeps talking without noticing, then realizes later',
          '空気を読まずに話し続け、後で気づく表情',
          '先不看眼色一直说，后来才察觉气氛的表情',
          '先不看眼色一直說，後來才察覺氣氛的表情',
          'Biểu cảm nói liên tục không để ý rồi mới nhận ra sau',
          'Ekspresi terus ngobrol tanpa peka lalu baru sadar belakangan'
        ),
        score: 0,
      },
      {
        image: IMG(9, 'b'),
        label: L(
          '이미 파악하고 조용히 있다가 결정적인 한마디를 날리는 표정',
          'A face that already reads the room, stays quiet, then drops one decisive line',
          'すでに空気を読んで静かにし、決定打の一言を放つ表情',
          '早已看懂气氛，先安静再抛出关键一句的表情',
          '早已看懂氣氛，先安靜再拋出關鍵一句的表情',
          'Biểu cảm đã hiểu tình hình, im lặng rồi tung một câu chốt hạ',
          'Ekspresi sudah paham suasana, diam dulu lalu melontarkan satu kalimat penentu'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 10,
    question: L(
      '유행하는 챌린지나 트렌드를 접했을 때 나는?',
      'When I see a trending challenge or trend, I?',
      '流行チャレンジやトレンドに触れた時、私は？',
      '接触到流行挑战或热梗时，我会？',
      '接觸到流行挑戰或熱門趨勢時，我會？',
      'Khi gặp thử thách hoặc trend đang hot, tôi sẽ?',
      'Saat melihat challenge atau tren yang sedang viral, aku akan?'
    ),
    options: [
      {
        image: IMG(10, 'a'),
        label: L(
          '"이게 뭐야" 하다가 어느새 같이 하고 있는 표정',
          'A face that says "What is this" then somehow joins in',
          '「何これ」と言いつつ気づいたら一緒にやっている表情',
          '嘴上“这啥啊”但不知不觉跟着做的表情',
          '嘴上「這啥啊」但不知不覺跟著做的表情',
          'Biểu cảm "Cái gì vậy trời" nhưng một lúc sau lại làm cùng',
          'Ekspresi "Ini apaan sih" tapi tahu-tahu ikut melakukannya'
        ),
        score: 0,
      },
      {
        image: IMG(10, 'b'),
        label: L(
          '"나는 이런 거 안 해" 하고 거리두는 표정',
          'A face that says "I do not do this stuff" and keeps distance',
          '「私はこういうのやらない」と距離を置く表情',
          '一脸“我不玩这个”并保持距离的表情',
          '一臉「我不玩這個」並保持距離的表情',
          'Biểu cảm "Mình không chơi mấy cái này" rồi giữ khoảng cách',
          'Ekspresi "Aku tidak ikut yang beginian" lalu menjaga jarak'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 11,
    question: L(
      '극도로 피곤한 상태에서 재미있는 일이 생겼을 때 나는?',
      'When something fun happens while I am extremely tired, I?',
      '極度に疲れている時に面白いことが起きたら、私は？',
      '在极度疲惫时遇到好玩的事，我会？',
      '在極度疲憊時遇到好玩的事，我會？',
      'Khi đang cực kỳ mệt mà có chuyện vui xảy ra, tôi sẽ?',
      'Saat sedang sangat capek lalu ada hal seru, aku akan?'
    ),
    options: [
      {
        image: IMG(11, 'a'),
        label: L(
          '피곤함 스위치가 꺼지고 즉각 에너지가 올라오는 표정',
          'A face where the tiredness switch turns off and energy shoots up',
          '疲れスイッチが切れて即エネルギーが上がる表情',
          '疲惫开关关掉、能量瞬间拉满的表情',
          '疲憊開關關掉、能量瞬間拉滿的表情',
          'Biểu cảm tắt công tắc mệt mỏi và năng lượng bật lên ngay',
          'Ekspresi sakelar lelah mati dan energi langsung naik'
        ),
        score: 0,
      },
      {
        image: IMG(11, 'b'),
        label: L(
          '재밌긴 한데 몸이 따라주지 않는 표정',
          'A face that says it is fun but the body cannot keep up',
          '楽しいけど体がついてこない表情',
          '虽然有趣但身体跟不上的表情',
          '雖然有趣但身體跟不上的表情',
          'Biểu cảm thấy vui đó nhưng cơ thể không theo kịp',
          'Ekspresi "seru sih, tapi badan tidak ngikut"'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 12,
    question: L(
      '내 일상을 한 장의 표정으로 표현한다면?',
      'If I had to express my daily life with one facial expression?',
      '私の日常を一つの表情で表すなら？',
      '如果用一个表情来概括我的日常？',
      '如果用一個表情來概括我的日常？',
      'Nếu diễn tả cuộc sống thường ngày của tôi bằng một nét mặt?',
      'Kalau harus menggambarkan keseharianku dengan satu ekspresi wajah?'
    ),
    options: [
      {
        image: IMG(12, 'a'),
        label: L(
          '뭐든 긍정적으로 받아들이는 활짝 웃는 표정',
          'A bright smile that takes everything positively',
          '何でも前向きに受け止める満面の笑み',
          '凡事都积极接收的灿烂笑容',
          '凡事都積極接收的燦爛笑容',
          'Nụ cười tươi đón nhận mọi thứ theo hướng tích cực',
          'Senyum lebar yang menerima semuanya secara positif'
        ),
        score: 0,
      },
      {
        image: IMG(12, 'b'),
        label: L(
          '모든 걸 관찰하고 있는 차분한 눈빛의 무표정',
          'A calm, expressionless look that observes everything',
          'すべてを観察している落ち着いた目の無表情',
          '冷静观察一切的平静无表情眼神',
          '冷靜觀察一切的平靜無表情眼神',
          'Ánh mắt điềm tĩnh vô cảm đang quan sát mọi thứ',
          'Tatapan tenang tanpa ekspresi yang mengamati semuanya'
        ),
        score: 1,
      },
    ],
  },
];

export const phase3MemeCharacterTypeResults: Phase3MemeCharacterTypeResult[] = [
  {
    type: 'Type1',
    emoji: '🌞',
    title: L(
      '에너지 자동 충전되는, 긍정 과부하 무야호형',
      'Auto-charged energy, positivity overload Woohoo type',
      'エネルギー自動充電、ポジティブ過負荷ウヤホ型',
      '能量自动充电的正能量过载 Woohoo 型',
      '能量自動充電的正能量過載 Woohoo 型',
      'Kiểu Woohoo tràn năng lượng tích cực tự sạc',
      'Tipe Woohoo dengan energi auto-charge dan positif overload'
    ),
    memeCharacterName: L(
      '무야호 | 밈 특기: 어디서든 에너지 폭발, 혼자 분위기 올리기, 흥 자동 감지',
      'Woohoo | Meme skill: explodes with energy anywhere, lifts the vibe solo, auto-detects hype',
      'ウヤホ | ミーム特技: どこでもエネルギー爆発、1人で空気を上げる、ノリ自動感知',
      'Woohoo | 梗角色特技：随时能量爆发，独自拉高气氛，自动感知嗨点',
      'Woohoo | 梗角色特技：隨時能量爆發，獨自拉高氣氛，自動感知嗨點',
      'Woohoo | Đặc kỹ: bùng nổ năng lượng mọi nơi, tự nâng mood, tự bắt sóng vui',
      'Woohoo | Skill meme: meledak energi di mana saja, bisa naikkan suasana sendiri, auto-detect seru'
    ),
    shortDescription: L(
      '"맑음 뒤 또 맑음. 흐린 날이 없는 사람입니다."',
      '"Clear after clear. A person with no cloudy days."',
      '「晴れのち晴れ。曇りの日がない人です。」',
      '“晴天之后还是晴天。你的人生几乎没有阴天。”',
      '「晴天之後還是晴天。你的人生幾乎沒有陰天。」',
      '"Trời quang rồi lại quang. Bạn là người hầu như không có ngày u ám."',
      '"Cerah lalu cerah lagi. Kamu tipe yang nyaris tidak punya hari mendung."'
    ),
    description: L(
      '당신의 반응은 항상 과하거나 딱 적당하게 긍정적입니다. 맛있는 걸 먹으면 양손 번쩍, 좋은 소식에는 소리 지르기, 별거 아닌 것에도 "오!!!" 가 자동으로 나옵니다. 주변 사람들이 당신의 에너지로 충전받는 경우가 많고, 당신이 있으면 분위기가 자동으로 살아납니다. 이 에너지가 과해서 가끔 민폐가 되기도 하지만 결국 모두가 좋아하게 됩니다.',
      'Your reactions are always boldly or perfectly positive. Delicious food makes both hands go up, good news makes you shout, and even small things trigger an automatic "Oh!!!". People around you get recharged by your energy, and the mood comes alive when you are there. This energy can be a bit too much sometimes, but in the end everyone likes you for it.',
      'あなたの反応はいつも大きめか、ちょうどいい前向きさです。おいしいものには両手を上げ、いい知らせには歓声を上げ、些細なことにも「おお!!!」が自動で出ます。周りの人はあなたのエネルギーで充電され、あなたがいるだけで場が明るくなります。たまに勢いが強すぎることもありますが、結局みんなに愛されます。',
      '你的反应总是夸张又刚好积极。吃到好吃的会双手高举，听到好消息会直接欢呼，连小事也会自动来一句“哦!!!”。你常常给周围人充电，只要你在，气氛就会自己热起来。偶尔能量过猛会有点扰民，但最后大家还是会喜欢你。',
      '你的反應總是誇張又剛好積極。吃到好吃的會雙手高舉，聽到好消息會直接歡呼，連小事也會自動來一句「喔!!!」。你常常幫周圍的人充電，只要你在，氣氛就會自己熱起來。偶爾能量太強會有點擾民，但最後大家還是會喜歡你。',
      'Phản ứng của bạn luôn tích cực theo kiểu bùng nổ hoặc vừa đủ. Ăn món ngon là giơ hai tay, nghe tin vui là hét lên, chuyện nhỏ cũng tự bật "Ồ!!!". Người xung quanh thường được nạp lại năng lượng từ bạn, và chỉ cần bạn có mặt là không khí tự sáng lên. Năng lượng này đôi khi hơi quá đà, nhưng cuối cùng ai cũng quý bạn.',
      'Reaksimu selalu positif, entah berlebihan atau pas banget. Makan enak langsung angkat dua tangan, dengar kabar baik langsung teriak, hal kecil pun otomatis keluar "Oh!!!". Orang-orang sering ikut terisi energinya dari kamu, dan suasana langsung hidup saat kamu hadir. Kadang energinya kebanyakan, tapi ujung-ujungnya semua orang tetap suka.'
    ),
    memeLevel: L(
      '☀️☀️☀️☀️☀️ 긍정 만렙',
      '☀️☀️☀️☀️☀️ Max positivity',
      '☀️☀️☀️☀️☀️ ポジティブMAX',
      '☀️☀️☀️☀️☀️ 正能量满级',
      '☀️☀️☀️☀️☀️ 正能量滿級',
      '☀️☀️☀️☀️☀️ Tích cực max level',
      '☀️☀️☀️☀️☀️ Positif level max'
    ),
    memeTrigger: L(
      '맛있는 거, 재밌는 거, 좋아하는 거 앞에서 즉각 발동',
      'Instantly activates in front of tasty, fun, or favorite things',
      'おいしい物、楽しい物、好きな物の前で即発動',
      '在好吃、好玩、喜欢的事物前瞬间触发',
      '在好吃、好玩、喜歡的事物前瞬間觸發',
      'Kích hoạt ngay khi gặp đồ ngon, thứ vui, thứ mình thích',
      'Langsung aktif saat ketemu hal enak, seru, atau yang disukai'
    ),
    memeActivationRate: L(
      '좋은 거 앞에서 99% / 싫은 거 앞에서도 50% (그래도 긍정)',
      '99% for good things / 50% even for disliked things (still positive)',
      'いいことの前で99% / 苦手なことでも50%（それでも前向き）',
      '遇到好事 99% / 遇到讨厌的事也有 50%（依然积极）',
      '遇到好事 99% / 遇到討厭的事也有 50%（依然積極）',
      'Trước điều tốt: 99% / Trước điều ghét: 50% (vẫn tích cực)',
      'Di depan hal baik: 99% / di depan hal tidak suka: 50% (tetap positif)'
    ),
    memeUltimate: L(
      '"오!!!" + 양손 번쩍 + 눈 반짝임 콤보',
      '"Oh!!!" + both hands up + sparkling eyes combo',
      '「おお!!!」+ 両手アップ + キラキラ目コンボ',
      '“哦!!!”+ 双手高举 + 眼神发光连招',
      '「喔!!!」+ 雙手高舉 + 眼神發光連招',
      'Combo "Ồ!!!" + giơ hai tay + mắt lấp lánh',
      'Combo "Oh!!!" + dua tangan terangkat + mata berbinar'
    ),
    memeCaution: L(
      '분위기 싸한 자리에서도 혼자 신나있을 수 있음. 주변 확인 필요',
      'May stay excited alone even in tense moments. Check the room first',
      '気まずい空気でも1人で盛り上がることあり。周囲確認が必要',
      '在冷场时也可能自己很嗨，记得先看氛围',
      '在冷場時也可能自己很嗨，記得先看氛圍',
      'Có thể vẫn hưng phấn dù không khí đang lạnh, nhớ quan sát xung quanh',
      'Bisa tetap heboh sendirian saat suasana dingin, jadi perlu cek sekitar dulu'
    ),
    goodMatch: L(
      'Type 3 눈물샘폭발형 (당신의 에너지가 그 눈물을 기쁨의 눈물로 바꿔줌)',
      'Type 3 Tear-Burst type (your energy turns those tears into happy tears)',
      'Type 3 涙腺爆発型（あなたのエネルギーが涙を喜びの涙に変える）',
      'Type 3 泪腺爆发型（你的能量会把眼泪变成开心的泪）',
      'Type 3 淚腺爆發型（你的能量會把眼淚變成開心的淚）',
      'Type 3 Bùng nổ tuyến lệ (năng lượng của bạn biến nước mắt thành niềm vui)',
      'Type 3 Tipe tangis meledak (energimu mengubah air mata jadi air mata bahagia)'
    ),
    badMatch: L(
      'Type 2 팩트폭격형 (당신의 긍정에 팩트로 찬물 끼얹힐 수 있음)',
      'Type 2 Fact-Bomb type (can splash cold facts on your positivity)',
      'Type 2 ファクト爆撃型（あなたの前向きさに事実で水を差すことがある）',
      'Type 2 事实暴击型（可能用事实给你的积极泼冷水）',
      'Type 2 事實暴擊型（可能用事實給你的積極潑冷水）',
      'Type 2 Ném fact mạnh (có thể dội gáo nước lạnh lên sự tích cực của bạn)',
      'Type 2 Fact-bomb (bisa menyiram semangat positifmu dengan fakta dingin)'
    ),
    memeOneLiner: L(
      '"당신이 있으면 흐린 날도 맑아집니다"',
      '"With you around, even cloudy days turn sunny"',
      '「あなたがいると曇りの日も晴れになります」',
      '“有你在，阴天也会放晴。”',
      '「有你在，陰天也會放晴。」',
      '"Có bạn ở đó, ngày âm u cũng thành nắng đẹp"',
      '"Kalau ada kamu, hari mendung pun jadi cerah"'
    ),
    shareSnippet: L(
      '내 밈 재질은 무야호형 🌞 에너지 자동 충전 긍정 과부하 ㅋㅋ 맞는 사람들아 → 너는 어떤 밈이야?',
      'My meme type is Woohoo 🌞 auto-charged energy positivity overload lol. Who relates? → What meme are you?',
      '私のミーム気質はウヤホ型 🌞 エネルギー自動充電のポジティブ過負荷w 共感する人？ → あなたはどのミーム？',
      '我的梗体质是 Woohoo 型 🌞 自动充能的正能量过载哈哈，谁懂？→ 你是哪种梗？',
      '我的梗體質是 Woohoo 型 🌞 自動充能的正能量過載哈哈，誰懂？→ 你是哪種梗？',
      'Chất meme của tôi là kiểu Woohoo 🌞 tự sạc năng lượng tích cực quá tải haha. Ai giống không? → Bạn là meme nào?',
      'Tipe meme-ku Woohoo 🌞 energi auto-charge positif overload wkwk. Ada yang sama? → Kamu meme yang mana?'
    ),
  },
  {
    type: 'Type2',
    emoji: '🧊',
    title: L(
      '팩트로 분위기 정리하는, 현실 직시 팩트폭격형',
      'Mood-resetting realist, fact-bomb type',
      '事実で空気を整える、現実直視ファクト爆撃型',
      '用事实整理气氛的现实直视型',
      '用事實整理氣氛的現實直視型',
      'Kiểu ném fact nhìn thẳng thực tế, dọn không khí',
      'Tipe fact-bomb yang menata suasana dengan realita'
    ),
    memeCharacterName: L(
      '팩폭머신 | 밈 특기: 부드럽게 팩트 투척, 아무도 안 할 말 조용히 하기, 현실 귀환 서비스',
      'Fact Cannon | Meme skill: gently throws facts, says what no one says, returns everyone to reality',
      'ファクトマシン | ミーム特技: やわらかく事実投下、誰も言わないことを言う、現実帰還サービス',
      '事实机 | 梗特技：温柔投放事实，说出没人敢说的话，提供现实回归服务',
      '事實機 | 梗特技：溫柔投放事實，說出沒人敢說的話，提供現實回歸服務',
      'Máy bắn fact | Đặc kỹ: ném fact nhẹ nhàng, nói điều không ai nói, kéo mọi người về thực tế',
      'Mesin Fact | Skill meme: lempar fakta halus, ngomong hal yang tidak ada yang berani, layanan balik ke realita'
    ),
    shortDescription: L(
      '"당신은 환상을 현실로 돌려보내는 서비스를 무료로 제공하고 있습니다."',
      '"You provide a free service that sends fantasies back to reality."',
      '「あなたは幻想を現実に戻すサービスを無料提供しています。」',
      '“你免费提供把幻想送回现实的服务。”',
      '「你免費提供把幻想送回現實的服務。」',
      '"Bạn đang cung cấp miễn phí dịch vụ đưa ảo tưởng trở lại thực tế."',
      '"Kamu menyediakan layanan gratis untuk mengembalikan khayalan ke dunia nyata."'
    ),
    description: L(
      '감정보다 팩트가 먼저 나옵니다. 친구가 의견을 물으면 포장 없이 정확하게 말하고, 분위기가 달아올라도 "근데 솔직히 말하면~" 으로 현실 귀환을 도와줍니다. 차갑게 느껴질 수 있지만 사실 당신 덕분에 팀이 실수를 피하는 경우가 많습니다. 친구들이 속으론 고마워하면서 겉으론 "야 좀..." 하는 타입입니다.',
      'Facts come before feelings for you. When friends ask for your opinion, you answer precisely without sugarcoating, and even in heated moments you reset things with "But honestly~". You may seem cold, but your honesty often helps teams avoid mistakes. Friends are grateful inside while saying "Hey, tone it down..." outside.',
      'あなたは感情より先に事実が出ます。友達に意見を求められると飾らず正確に伝え、場が盛り上がっていても「でも正直言うと〜」で現実に戻します。冷たく見えることもありますが、あなたのおかげでミスを避けられることが多いです。友達は内心感謝しつつ表では「ちょっとさ…」となるタイプです。',
      '你总是事实先行、情绪后置。朋友问意见时你会不包装地精准表达，即使气氛上头也会用“不过说实话~”把大家拉回现实。你看起来可能有点冷，但很多错误正是因为你而被避免。朋友通常是心里感谢、嘴上“你先别说了…”。',
      '你總是事實先行、情緒後置。朋友問意見時你會不包裝地精準表達，即使氣氛上頭也會用「不過說實話~」把大家拉回現實。你看起來可能有點冷，但很多錯誤正是因為你而被避免。朋友通常是心裡感謝、嘴上「你先別說了…」。',
      'Với bạn, fact luôn đi trước cảm xúc. Khi bạn bè hỏi ý kiến, bạn nói thẳng và chính xác, không bọc đường. Dù không khí có nóng lên, câu "Nhưng nói thật nhé~" của bạn vẫn kéo mọi người về thực tế. Bạn có thể bị xem là lạnh, nhưng nhờ bạn mà tập thể tránh được nhiều sai lầm. Bạn bè ngoài miệng thì "ôi thôi..." nhưng trong lòng lại biết ơn.',
      'Buat kamu, fakta selalu keluar lebih dulu daripada perasaan. Saat teman minta pendapat, kamu jawab tepat tanpa pemanis, dan saat suasana memanas kamu reset dengan "Tapi jujur ya~". Kamu mungkin terlihat dingin, tapi justru sering menyelamatkan tim dari kesalahan. Teman-teman diam-diam berterima kasih meski mulutnya bilang, "Ya ampun, santai dong..."'
    ),
    memeLevel: L(
      '🧊🧊🧊🧊🧊 팩트 만렙',
      '🧊🧊🧊🧊🧊 Max fact mode',
      '🧊🧊🧊🧊🧊 ファクトMAX',
      '🧊🧊🧊🧊🧊 事实满级',
      '🧊🧊🧊🧊🧊 事實滿級',
      '🧊🧊🧊🧊🧊 Fact max level',
      '🧊🧊🧊🧊🧊 Fact level max'
    ),
    memeTrigger: L(
      '누군가 현실과 다른 말을 할 때 자동 발동',
      'Auto-activates when someone says something unrealistic',
      '誰かが現実と違うことを言うと自動発動',
      '有人说出不符合现实的话时自动触发',
      '有人說出不符合現實的話時自動觸發',
      'Tự kích hoạt khi ai đó nói điều lệch khỏi thực tế',
      'Aktif otomatis saat ada yang bicara tidak sesuai realita'
    ),
    memeActivationRate: L(
      '팩트가 필요한 순간 100% / 불필요한 순간에도 가끔 발동',
      '100% when facts are needed / sometimes triggers even when not needed',
      '事実が必要な時100% / 不要な時にもたまに発動',
      '该上事实时 100% / 不该上时也偶尔触发',
      '該上事實時 100% / 不該上時也偶爾觸發',
      '100% khi cần fact / đôi lúc bật cả khi không cần',
      '100% saat butuh fakta / kadang aktif juga saat tidak perlu'
    ),
    memeUltimate: L(
      '"근데 솔직히 말하면~" 한마디로 분위기 리셋',
      '"But honestly~" resets the whole mood in one line',
      '「でも正直に言うと〜」の一言で空気リセット',
      '一句“不过说实话~”直接重置气氛',
      '一句「不過說實話~」直接重置氣氛',
      'Một câu "Nhưng nói thật nhé~" là reset cả không khí',
      'Satu kalimat "Tapi jujur ya~" langsung reset suasana'
    ),
    memeCaution: L(
      '타이밍 조절 필요. 위로가 필요한 순간에는 팩트보다 공감이 먼저',
      'Timing matters. In comfort-needed moments, empathy comes before facts',
      'タイミング調整が必要。慰めが必要な時は事実より共感を先に',
      '需要拿捏时机。对方需要安慰时，共情应先于事实',
      '需要拿捏時機。對方需要安慰時，共情應先於事實',
      'Cần canh thời điểm. Khi người khác cần được an ủi, đồng cảm nên đi trước fact',
      'Perlu atur timing. Saat orang butuh dukungan, empati harus lebih dulu daripada fakta'
    ),
    goodMatch: L(
      'Type 5 카오스형 (팩트가 카오스를 현실로 돌려놓는 최강 콤비)',
      'Type 5 Chaos type (facts pull chaos back to reality)',
      'Type 5 カオス型（事実がカオスを現実に戻す最強コンビ）',
      'Type 5 混沌型（事实能把混沌拉回现实）',
      'Type 5 混沌型（事實能把混沌拉回現實）',
      'Type 5 Hỗn loạn (fact kéo hỗn loạn về thực tế, cặp bài trùng mạnh)',
      'Type 5 Chaos (fakta menarik chaos kembali ke realita, duo terkuat)'
    ),
    badMatch: L(
      'Type 1 무야호형 (긍정에 팩트 투척 반복으로 서로 지칠 수 있음)',
      'Type 1 Woohoo type (constant fact-vs-positivity clashes can be tiring)',
      'Type 1 ウヤホ型（前向きさに事実投下の繰り返しでお互い疲れる）',
      'Type 1 Woohoo 型（积极与事实反复对撞，彼此会累）',
      'Type 1 Woohoo 型（積極與事實反覆對撞，彼此會累）',
      'Type 1 Woohoo (đấu giữa tích cực và fact lặp lại dễ mệt nhau)',
      'Type 1 Woohoo (benturan positif vs fakta berulang bisa bikin capek)'
    ),
    memeOneLiner: L(
      '"당신이 한마디 하면 방 온도가 3도 내려가고 정신이 돌아옵니다"',
      '"One line from you drops the room by 3 degrees and brings everyone back"',
      '「あなたが一言言うと部屋の温度が3度下がって正気に戻ります」',
      '“你一句话，房间温度降3度，大家瞬间清醒。”',
      '「你一句話，房間溫度降3度，大家瞬間清醒。」',
      '"Bạn nói một câu là nhiệt độ phòng giảm 3 độ và mọi người tỉnh táo lại"',
      '"Satu kalimat darimu bikin suhu ruangan turun 3 derajat dan semua orang sadar"'
    ),
    shareSnippet: L(
      '내 밈 재질은 팩트폭격형 🧊 분위기 싸하게 만드는 거 내 잘못 아님. 팩트임 → 너는 어떤 밈이야?',
      'My meme type is Fact-Bomb 🧊 If the vibe gets cold, not my fault. It is facts → What meme are you?',
      '私のミーム気質はファクト爆撃型 🧊 空気が冷えるのは私のせいじゃない。事実です → あなたはどのミーム？',
      '我的梗体质是事实暴击型 🧊 气氛变冷不是我的错，是事实 → 你是哪种梗？',
      '我的梗體質是事實暴擊型 🧊 氣氛變冷不是我的錯，是事實 → 你是哪種梗？',
      'Chất meme của tôi là ném fact 🧊 Không khí lạnh đi không phải lỗi tôi, đó là fact → Bạn là meme nào?',
      'Tipe meme-ku Fact-Bomb 🧊 Kalau suasana jadi dingin itu bukan salahku, itu fakta → Kamu meme yang mana?'
    ),
  },
  {
    type: 'Type3',
    emoji: '💧',
    title: L(
      '별것 아닌 것에도 터지는, 감성 눈물샘폭발형',
      'Emotionally explosive tear-duct burst type',
      '些細なことでも泣ける、感性涙腺爆発型',
      '连小事都能触发的感性泪腺爆发型',
      '連小事都能觸發的感性淚腺爆發型',
      'Kiểu cảm xúc bùng nổ tuyến lệ chỉ vì điều nhỏ',
      'Tipe ledakan emosi, kelenjar air mata gampang meledak'
    ),
    memeCharacterName: L(
      '눈물샘 | 밈 특기: 예고 없는 눈물 발사, 감동 포인트 어디서나 발견, 공감 능력 초과',
      'Tear Duct | Meme skill: surprise tears, finds touching points everywhere, overflowing empathy',
      '涙腺 | ミーム特技: 予告なしの涙、どこでも感動ポイント発見、共感力オーバー',
      '泪腺君 | 梗特技：无预警落泪，到处发现感动点，共情力超标',
      '淚腺君 | 梗特技：無預警落淚，到處發現感動點，共情力超標',
      'Tuyến lệ | Đặc kỹ: rơi nước mắt không báo trước, thấy điểm cảm động ở mọi nơi, đồng cảm quá mức',
      'Kelenjar Air Mata | Skill meme: nangis mendadak, menemukan momen menyentuh di mana-mana, empati berlebih'
    ),
    shortDescription: L(
      '"광고 보다가 울고, 노래 듣다가 울고, 잘 살고 있는데 갑자기 울고."',
      '"Crying over ads, crying over songs, suddenly crying while doing just fine."',
      '「CMで泣き、曲で泣き、元気なのに急に泣く。」',
      '“看广告会哭，听歌会哭，明明好好的也会突然想哭。”',
      '「看廣告會哭，聽歌會哭，明明好好的也會突然想哭。」',
      '"Xem quảng cáo cũng khóc, nghe nhạc cũng khóc, đang bình thường cũng tự dưng khóc."',
      '"Nonton iklan nangis, dengar lagu nangis, baik-baik saja pun tiba-tiba nangis."'
    ),
    description: L(
      '감정 수신 안테나가 남들보다 2배 이상 예민하게 세워져 있습니다. 감동적인 영상, 따뜻한 이야기, 심지어 맛있는 음식 앞에서도 눈물이 차오르는 경험이 있습니다. 주변에서 "너 왜 울어 ㅋㅋ"를 가장 많이 듣는 타입이지만 사실 그 감수성이 당신의 가장 큰 매력입니다.',
      'Your emotional antenna is tuned at least twice as sensitive as others. Touching videos, warm stories, and even delicious food can make your eyes water. You are the type who hears "Why are you crying lol" the most, but this sensitivity is actually your greatest charm.',
      'あなたの感情アンテナは人より2倍以上敏感です。感動動画、心温まる話、さらにはおいしい食べ物でも涙がこみ上げることがあります。「なんで泣いてるのw」と一番言われるタイプですが、その感受性こそ最大の魅力です。',
      '你的情绪接收天线比别人至少敏感两倍。感人视频、温暖故事，甚至好吃的食物都可能让你眼眶发热。你是最常被说“你怎么又哭了哈哈”的类型，但这份感受力正是你最大的魅力。',
      '你的情緒接收天線比別人至少敏感兩倍。感人影片、溫暖故事，甚至好吃的食物都可能讓你眼眶發熱。你是最常被說「你怎麼又哭了哈哈」的類型，但這份感受力正是你最大的魅力。',
      'Ăng-ten cảm xúc của bạn nhạy hơn người khác ít nhất gấp đôi. Video cảm động, câu chuyện ấm áp, thậm chí món ăn ngon cũng có thể làm mắt bạn cay. Bạn là kiểu người bị hỏi "Sao lại khóc nữa vậy haha" nhiều nhất, nhưng chính sự nhạy cảm ấy là điểm cuốn hút lớn nhất của bạn.',
      'Antena emosimu setidaknya dua kali lebih sensitif daripada orang lain. Video menyentuh, cerita hangat, bahkan makanan enak pun bisa bikin matamu berkaca-kaca. Kamu tipe yang paling sering dengar, "Kok nangis lagi sih wkwk", tapi justru kepekaan itu adalah pesona terbesarmu.'
    ),
    memeLevel: L(
      '💧💧💧💧💧 감성 만렙',
      '💧💧💧💧💧 Emotional max level',
      '💧💧💧💧💧 感性MAX',
      '💧💧💧💧💧 感性满级',
      '💧💧💧💧💧 感性滿級',
      '💧💧💧💧💧 Cảm xúc max level',
      '💧💧💧💧💧 Emosi level max'
    ),
    memeTrigger: L(
      '감동적인 모든 것 + 예상치 못한 순간 자동 발동',
      'Anything touching + unexpected moments trigger automatically',
      '感動するものすべて + 不意の瞬間で自動発動',
      '所有感动物 + 意外瞬间自动触发',
      '所有感動物 + 意外瞬間自動觸發',
      'Mọi thứ cảm động + khoảnh khắc bất ngờ đều tự kích hoạt',
      'Semua hal menyentuh + momen tak terduga aktif otomatis'
    ),
    memeActivationRate: L(
      '감성적 콘텐츠 앞에서 95% / 일상에서도 언제든 발동 가능',
      '95% with emotional content / can trigger anytime in daily life',
      '感情系コンテンツで95% / 日常でもいつでも発動可能',
      '情感内容前 95% / 日常中也随时可触发',
      '情感內容前 95% / 日常中也隨時可觸發',
      '95% trước nội dung cảm xúc / đời thường cũng có thể bật bất cứ lúc nào',
      '95% di konten emosional / di keseharian juga bisa aktif kapan saja'
    ),
    memeUltimate: L(
      '예고 없는 눈물 + "나 왜 우는 거야 ㅋㅋ" 셀프 당황 콤보',
      'Surprise tears + "Why am I crying lol" self-confused combo',
      '予告なしの涙 + 「なんで泣いてるのw」セルフ困惑コンボ',
      '无预警落泪 + “我为什么在哭哈哈”自我慌乱连招',
      '無預警落淚 + 「我為什麼在哭哈哈」自我慌亂連招',
      'Combo khóc bất ngờ + "Ủa sao mình khóc vậy haha" tự hoang mang',
      'Combo nangis mendadak + "Kok aku nangis sih wkwk" bingung sendiri'
    ),
    memeCaution: L(
      '중요한 발표나 회의 전 감동적인 콘텐츠 금지',
      'Avoid touching content before important presentations or meetings',
      '重要な発表や会議前は感動コンテンツ禁止',
      '重要汇报或会议前请避免感人内容',
      '重要簡報或會議前請避免感人內容',
      'Tránh nội dung cảm động trước thuyết trình hay họp quan trọng',
      'Hindari konten menyentuh sebelum presentasi atau rapat penting'
    ),
    goodMatch: L(
      'Type 1 무야호형 (당신의 감동 눈물이 긍정 에너지와 만나면 최고의 조합)',
      'Type 1 Woohoo type (your touching tears + their positive energy = best combo)',
      'Type 1 ウヤホ型（感動の涙と前向きエネルギーが合わさる最強コンボ）',
      'Type 1 Woohoo 型（你的感动眼泪遇上对方正能量就是神组合）',
      'Type 1 Woohoo 型（你的感動眼淚遇上對方正能量就是神組合）',
      'Type 1 Woohoo (nước mắt cảm động gặp năng lượng tích cực tạo combo đỉnh)',
      'Type 1 Woohoo (air mata haru + energi positif jadi kombinasi terbaik)'
    ),
    badMatch: L(
      'Type 2 팩트폭격형 (눈물 흘리는 순간 팩트 투척을 받으면 상처)',
      'Type 2 Fact-Bomb type (getting facts while crying can hurt)',
      'Type 2 ファクト爆撃型（泣いてる瞬間に事実投下されると刺さる）',
      'Type 2 事实暴击型（你哭的时候被上事实会更受伤）',
      'Type 2 事實暴擊型（你哭的時候被上事實會更受傷）',
      'Type 2 Ném fact (đang khóc mà bị ném fact thì dễ tổn thương)',
      'Type 2 Fact-Bomb (lagi nangis terus ditembak fakta bisa makin sakit)'
    ),
    memeOneLiner: L(
      '"당신의 눈물샘은 세상에서 가장 따뜻한 리액션입니다"',
      '"Your tear duct is the warmest reaction in the world"',
      '「あなたの涙腺は世界で一番あたたかいリアクションです」',
      '“你的泪点，是世界上最温暖的反应。”',
      '「你的淚點，是世界上最溫暖的反應。」',
      '"Tuyến lệ của bạn là phản ứng ấm áp nhất thế giới"',
      '"Kelenjar air matamu adalah reaksi paling hangat di dunia"'
    ),
    shareSnippet: L(
      '내 밈 재질은 눈물샘폭발형 💧 광고 보다 울고 노래 듣다 울고... 맞는 사람? → 너는 어떤 밈이야?',
      'My meme type is Tear-Burst 💧 Crying at ads and songs... who relates? → What meme are you?',
      '私のミーム気質は涙腺爆発型 💧 CMで泣いて曲で泣いて…共感する？ → あなたはどのミーム？',
      '我的梗体质是泪腺爆发型 💧 看广告哭、听歌也哭…谁懂？→ 你是哪种梗？',
      '我的梗體質是淚腺爆發型 💧 看廣告哭、聽歌也哭…誰懂？→ 你是哪種梗？',
      'Chất meme của tôi là bùng nổ tuyến lệ 💧 Xem quảng cáo cũng khóc, nghe nhạc cũng khóc... ai giống không? → Bạn là meme nào?',
      'Tipe meme-ku Tear-Burst 💧 Nonton iklan nangis, denger lagu nangis... ada yang sama? → Kamu meme yang mana?'
    ),
  },
  {
    type: 'Type4',
    emoji: '🎭',
    title: L(
      '관심없는척 제일 먼저 아는, 쿨내진동 초관심형',
      'Pretends to not care but knows first, ultra-interested cool-vibe type',
      '興味ないふりで一番早く知る、クール感振動超関心型',
      '装不在意却最先知道的高冷超关心型',
      '裝不在意卻最先知道的高冷超關心型',
      'Kiểu giả vờ không quan tâm nhưng biết đầu tiên',
      'Tipe terlihat cuek tapi paling dulu tahu'
    ),
    memeCharacterName: L(
      '쿨한척 | 밈 특기: 관심없다 하면서 제일 먼저 결과 확인, 쿨내 진동하며 몰래 참여, 겉과 속 다르기',
      'Cool Pretender | Meme skill: says not interested but checks first, secretly joins while acting cool, outside-inside gap',
      'クールぶり | ミーム特技: 興味ないと言いながら最初に結果確認、クール顔でこっそり参加、表と裏のギャップ',
      '假装高冷 | 梗特技：嘴上不关心却第一个看结果，表面高冷暗中参与，表里反差',
      '假裝高冷 | 梗特技：嘴上不關心卻第一個看結果，表面高冷暗中參與，表裡反差',
      'Giả vờ cool | Đặc kỹ: nói không quan tâm nhưng xem kết quả đầu tiên, tỏ ra cool mà vẫn âm thầm tham gia',
      'Sok Cool | Skill meme: bilang tidak tertarik tapi cek hasil paling dulu, pura-pura cool tapi diam-diam ikut'
    ),
    shortDescription: L(
      '"관심 없다고 했는데 왜 결과를 제일 먼저 알고 있어?"',
      '"You said you did not care, so why do you know the result first?"',
      '「興味ないって言ったのに、なんで結果を一番先に知ってるの？」',
      '“不是说不感兴趣吗，怎么你最先知道结果？”',
      '「不是說不感興趣嗎，怎麼你最先知道結果？」',
      '"Bảo không quan tâm mà sao kết quả lại biết đầu tiên?"',
      '"Katanya tidak tertarik, kok hasilnya kamu yang tahu duluan?"'
    ),
    description: L(
      '"나는 그런 거 안 해" 하고 가장 먼저 참여합니다. 유행 챌린지를 비웃다가 혼자 연습하고, 감동받지 않은 척하지만 눈가가 촉촉하고, 분위기 싸한 자리에서 조용히 있다가 결정적인 한마디를 날립니다. 이 갭이 당신의 시그니처 매력입니다. 주변에서 "너 사실 관심 있잖아 ㅋㅋ"를 가장 많이 듣는 타입.',
      'You say "I do not do that stuff" and then join first. You tease trending challenges but practice alone, act unmoved but your eyes get watery, and stay quiet in tense moments before dropping a decisive line. This contrast is your signature charm. You hear "You actually care lol" the most.',
      '「私はそういうのやらない」と言って一番先に参加します。流行チャレンジを笑いながら一人で練習し、感動してないふりなのに目はうるみ、気まずい空気では静かにして決定打を放ちます。このギャップこそあなたの魅力。周りから「本当は気になってるでしょw」と最も言われるタイプです。',
      '你嘴上说“我才不玩这个”，身体却第一个参加。会先吐槽流行挑战再偷偷练习，嘴上说没被感动但眼眶发湿，在冷场时先沉默再抛出关键一句。这种反差就是你的招牌魅力。你最常听到的话是“你明明超在意哈哈”。',
      '你嘴上說「我才不玩這個」，身體卻第一個參加。會先吐槽流行挑戰再偷偷練習，嘴上說沒被感動但眼眶發濕，在冷場時先沉默再拋出關鍵一句。這種反差就是你的招牌魅力。你最常聽到的話是「你明明超在意哈哈」。',
      'Bạn nói "Mình không chơi mấy cái đó" rồi lại là người tham gia đầu tiên. Bạn cười trend nhưng âm thầm tập một mình, giả vờ không cảm động nhưng mắt lại ươn ướt, và trong bầu không khí lạnh thì im lặng rồi tung một câu chốt. Chính độ trái ngược này là nét hút riêng của bạn. Câu bạn hay bị nói nhất là "Thật ra cậu quan tâm lắm mà haha".',
      'Kamu bilang, "Aku tidak main beginian," tapi justru ikut paling awal. Kamu ngeledek challenge viral lalu latihan diam-diam, pura-pura tidak terharu tapi mata berkaca-kaca, dan di suasana tegang kamu diam dulu lalu lempar kalimat pamungkas. Kontras ini adalah daya tarik khasmu. Kalimat yang paling sering kamu dengar: "Kamu sebenarnya peduli banget kan wkwk."'
    ),
    memeLevel: L(
      '🎭🎭🎭🎭🎭 쿨내 만렙',
      '🎭🎭🎭🎭🎭 Max cool-vibe level',
      '🎭🎭🎭🎭🎭 クール感MAX',
      '🎭🎭🎭🎭🎭 高冷气场满级',
      '🎭🎭🎭🎭🎭 高冷氣場滿級',
      '🎭🎭🎭🎭🎭 Cool vibe max level',
      '🎭🎭🎭🎭🎭 Aura cool level max'
    ),
    memeTrigger: L(
      '관심 없는 척해야 할 것들이 생겼을 때 즉각 발동',
      'Instantly activates when there is something to act uninterested in',
      '興味ないふりをすべきものが出ると即発動',
      '出现“必须装不在意”的对象时瞬间触发',
      '出現「必須裝不在意」的對象時瞬間觸發',
      'Kích hoạt ngay khi có thứ cần phải giả vờ không quan tâm',
      'Langsung aktif saat ada hal yang harus dipura-pura tidak peduli'
    ),
    memeActivationRate: L(
      '흥미로운 것 앞에서 관심없는척 100% / 실제 관심도 100%',
      'Acts uninterested 100% in front of interesting things / actual interest 100%',
      '面白いものの前で興味ないふり100% / 実際の興味度100%',
      '遇到有趣的事：装不在意 100% / 实际在意度 100%',
      '遇到有趣的事：裝不在意 100% / 實際在意度 100%',
      'Trước thứ thú vị: giả vờ không quan tâm 100% / mức quan tâm thật 100%',
      'Di depan hal menarik: pura-pura cuek 100% / minat asli 100%'
    ),
    memeUltimate: L(
      '"나는 그런 거 별로야" + 혼자 몰래 검색 콤보',
      '"I am not into that" + secretly searching alone combo',
      '「そういうの別に」+ 一人でこっそり検索コンボ',
      '“我对这个一般”+ 私下疯狂搜索连招',
      '「我對這個還好」+ 私下瘋狂搜尋連招',
      'Combo "Mình không thích lắm đâu" + âm thầm tự search',
      'Combo "Aku tidak terlalu suka begituan" + diam-diam cari sendiri'
    ),
    memeCaution: L(
      '쿨한 척이 너무 심하면 진짜 관심 없는 사람으로 오해받을 수 있음',
      'If overdone, people may misunderstand and think you really do not care',
      'クールぶりが強すぎると本当に興味がない人だと誤解される',
      '高冷过头会被误会成真的不在意',
      '高冷過頭會被誤會成真的不在意',
      'Nếu diễn quá đà sẽ bị hiểu lầm là thật sự không quan tâm',
      'Kalau berlebihan, orang bisa salah paham dan mengira kamu benar-benar tidak peduli'
    ),
    goodMatch: L(
      'Type 6 흑백스위치형 (둘 다 겉과 속이 달라서 서로 이해함)',
      'Type 6 Black-White Switch type (both have inside-outside gaps, so they understand each other)',
      'Type 6 白黒スイッチ型（どちらも表と裏があり理解し合える）',
      'Type 6 黑白开关型（都很有反差，所以能互相理解）',
      'Type 6 黑白開關型（都很有反差，所以能互相理解）',
      'Type 6 Công tắc đen trắng (cả hai đều có độ lệch ngoài-trong nên dễ hiểu nhau)',
      'Type 6 Sakelar hitam-putih (keduanya punya gap luar-dalam jadi saling paham)'
    ),
    badMatch: L(
      'Type 1 무야호형 (당신의 쿨함과 상대의 긍정 폭발이 계속 충돌)',
      'Type 1 Woohoo type (your cool facade clashes with their positivity burst)',
      'Type 1 ウヤホ型（あなたのクールさと相手のポジティブ爆発が衝突）',
      'Type 1 Woohoo 型（你的高冷和对方的高能正向持续碰撞）',
      'Type 1 Woohoo 型（你的高冷和對方的高能正向持續碰撞）',
      'Type 1 Woohoo (cool của bạn và năng lượng bùng nổ của họ dễ va chạm)',
      'Type 1 Woohoo (sikap cool-mu bentrok dengan ledakan positif mereka)'
    ),
    memeOneLiner: L(
      '"관심없는척 올림픽 있으면 금메달감입니다"',
      '"If there were an Olympics for pretending not to care, you would win gold"',
      '「興味ないふりオリンピックがあれば金メダル級です」',
      '“如果有装不在意奥运会，你是金牌候选。”',
      '「如果有裝不在意奧運會，你是金牌候選。」',
      '"Nếu có Olympic giả vờ không quan tâm, bạn chắc chắn giành vàng"',
      '"Kalau ada Olimpiade pura-pura cuek, kamu calon peraih emas"'
    ),
    shareSnippet: L(
      '내 밈 재질은 쿨내진동형 🎭 관심없는척 제일 먼저 아는 타입 맞음 ㅋㅋ → 너는 어떤 밈이야?',
      'My meme type is cool-vibe mode 🎭 Pretend not to care but know first lol → What meme are you?',
      '私のミーム気質はクール感振動型 🎭 興味ないふりで一番早く知るタイプw → あなたはどのミーム？',
      '我的梗体质是高冷震动型 🎭 装不在意但最先知道哈哈 → 你是哪种梗？',
      '我的梗體質是高冷震動型 🎭 裝不在意但最先知道哈哈 → 你是哪種梗？',
      'Chất meme của tôi là kiểu rung vibe cool 🎭 Giả vờ không quan tâm nhưng biết đầu tiên haha → Bạn là meme nào?',
      'Tipe meme-ku cool-vibe 🎭 pura-pura tidak peduli tapi paling cepat tahu wkwk → Kamu meme yang mana?'
    ),
  },
  {
    type: 'Type5',
    emoji: '🌀',
    title: L(
      '예측 불가 반응 폭발, 카오스 랜덤형',
      'Unpredictable reaction burst, chaotic random type',
      '予測不能リアクション爆発、カオスランダム型',
      '反应不可预测的混沌随机型',
      '反應不可預測的混沌隨機型',
      'Kiểu hỗn loạn ngẫu nhiên, phản ứng không thể đoán',
      'Tipe random chaos dengan ledakan reaksi tak terduga'
    ),
    memeCharacterName: L(
      '랜덤박스 | 밈 특기: 예측 불가 리액션, 아무 맥락 없는 돌발 행동, 주변을 당황시키는 타이밍',
      'Random Box | Meme skill: unpredictable reactions, sudden context-free actions, shocking timing',
      'ランダムボックス | ミーム特技: 予測不能リアクション、文脈なしの突発行動、周囲を戸惑わせるタイミング',
      '随机盒 | 梗特技：不可预测反应、无厘头突发行动、让人懵住的时机',
      '隨機盒 | 梗特技：不可預測反應、無厘頭突發行動、讓人懵住的時機',
      'Hộp ngẫu nhiên | Đặc kỹ: phản ứng khó đoán, hành động bất chợt không theo ngữ cảnh, timing làm người khác ngơ ngác',
      'Kotak Random | Skill meme: reaksi tak terduga, aksi tiba-tiba tanpa konteks, timing yang bikin orang bingung'
    ),
    shortDescription: L(
      '"이 사람 다음에 뭘 할지 아무도 모릅니다. 본인도 모릅니다."',
      '"No one knows what this person will do next. Not even this person."',
      '「この人が次に何をするか誰も分かりません。本人も分かりません。」',
      '“没人知道这个人下一秒会做什么，连本人也不知道。”',
      '「沒人知道這個人下一秒會做什麼，連本人也不知道。」',
      '"Không ai biết bạn sẽ làm gì tiếp theo. Kể cả chính bạn."',
      '"Tidak ada yang tahu kamu bakal ngapain berikutnya. Kamu sendiri juga tidak tahu."'
    ),
    description: L(
      '반응이 항상 예측 범위를 벗어납니다. 슬픈 상황에서 웃고, 웃긴 상황에서 진지하고, 아무 관련 없는 말을 갑자기 꺼내서 모두를 당황시킵니다. 분위기 싸한 자리에서 뜬금없는 한마디로 분위기를 환기시키거나 망치거나 하는 사람입니다. 카오스 그 자체이지만 이 예측 불가함이 가장 재밌는 사람으로 만들어줍니다.',
      'Your reactions always escape prediction. You laugh in sad moments, get serious in funny moments, and suddenly say unrelated things that leave everyone stunned. In tense rooms, your random one-liners either save the mood or break it further. You are chaos itself, but this unpredictability makes you one of the most entertaining people.',
      'あなたの反応は常に予測の範囲外です。悲しい場面で笑い、面白い場面で真面目になり、関係ない話を突然出してみんなを驚かせます。気まずい場では唐突な一言で空気を救うことも壊すこともあります。まさにカオスですが、その予測不能さがあなたを最も面白い人にしています。',
      '你的反应总在预期之外。难过时会笑，搞笑时却严肃，还会突然抛出不相关的话让全场愣住。在冷场里，你一句没来由的话要么救场要么炸场。你就是混沌本沌，但这种不可预测反而让你变成最有趣的人。',
      '你的反應總在預期之外。難過時會笑，搞笑時卻嚴肅，還會突然拋出不相關的話讓全場愣住。在冷場裡，你一句沒來由的話要嘛救場要嘛炸場。你就是混沌本沌，但這種不可預測反而讓你變成最有趣的人。',
      'Phản ứng của bạn luôn nằm ngoài dự đoán. Tình huống buồn thì bạn cười, lúc vui thì bạn lại nghiêm túc, rồi bất ngờ nói một câu chẳng liên quan khiến cả nhóm đứng hình. Ở những khoảnh khắc không khí lạnh, một câu "từ trên trời rơi xuống" của bạn có thể cứu mood hoặc phá hẳn mood. Bạn là hiện thân của hỗn loạn, nhưng chính sự khó đoán đó khiến bạn cực kỳ thú vị.',
      'Reaksimu selalu di luar perkiraan. Di situasi sedih kamu malah ketawa, di situasi lucu kamu jadi serius, lalu tiba-tiba ngomong hal tidak nyambung yang bikin semua orang bengong. Di suasana canggung, satu kalimat random darimu bisa menyelamatkan atau menghancurkan mood. Kamu adalah chaos itu sendiri, tapi ketidakterdugaan ini justru membuatmu paling seru.'
    ),
    memeLevel: L(
      '🌀🌀🌀🌀🌀 카오스 만렙',
      '🌀🌀🌀🌀🌀 Chaos max level',
      '🌀🌀🌀🌀🌀 カオスMAX',
      '🌀🌀🌀🌀🌀 混沌满级',
      '🌀🌀🌀🌀🌀 混沌滿級',
      '🌀🌀🌀🌀🌀 Hỗn loạn max level',
      '🌀🌀🌀🌀🌀 Chaos level max'
    ),
    memeTrigger: L(
      '모든 상황에서 랜덤하게 발동. 예측 불가',
      'Randomly activates in any situation. Unpredictable',
      'あらゆる状況でランダム発動。予測不能',
      '任何场景随机触发，无法预测',
      '任何場景隨機觸發，無法預測',
      'Kích hoạt ngẫu nhiên trong mọi tình huống, không thể đoán',
      'Aktif acak di semua situasi, tidak bisa diprediksi'
    ),
    memeActivationRate: L(
      '언제 어디서든 100%. 종류만 랜덤',
      '100% anytime, anywhere. Only the type is random',
      'いつでもどこでも100%。種類だけランダム',
      '随时随地 100%，只是类型随机',
      '隨時隨地 100%，只是類型隨機',
      '100% mọi lúc mọi nơi, chỉ có kiểu phản ứng là ngẫu nhiên',
      '100% kapan pun di mana pun, hanya jenisnya yang random'
    ),
    memeUltimate: L(
      '아무도 예상 못 한 타이밍의 뜬금없는 한마디',
      'An out-of-nowhere one-liner at a timing no one expected',
      '誰も予想しないタイミングで放つ唐突な一言',
      '在无人预料的时机来一句神来之笔',
      '在無人預料的時機來一句神來之筆',
      'Một câu bâng quơ xuất hiện đúng lúc không ai ngờ tới',
      'Satu kalimat nyeleneh di timing yang tidak ada yang duga'
    ),
    memeCaution: L(
      '중요한 자리에서 카오스 모드 자제 요청',
      'Please restrain chaos mode in important situations',
      '重要な場ではカオスモード自重推奨',
      '重要场合请克制混沌模式',
      '重要場合請克制混沌模式',
      'Ở tình huống quan trọng, nên tiết chế chế độ hỗn loạn',
      'Di situasi penting, mohon tahan mode chaos'
    ),
    goodMatch: L(
      'Type 2 팩트폭격형 (카오스를 현실로 돌려주는 균형자)',
      'Type 2 Fact-Bomb type (the balancer that pulls chaos back to reality)',
      'Type 2 ファクト爆撃型（カオスを現実に戻すバランサー）',
      'Type 2 事实暴击型（能把混沌拉回现实的平衡者）',
      'Type 2 事實暴擊型（能把混沌拉回現實的平衡者）',
      'Type 2 Ném fact (người cân bằng kéo hỗn loạn về thực tế)',
      'Type 2 Fact-Bomb (penyeimbang yang menarik chaos kembali ke realita)'
    ),
    badMatch: L(
      'Type 6 흑백스위치형 (예측 불가 vs 극단 스위치의 충돌로 서로 피곤)',
      'Type 6 Black-White Switch type (unpredictable vs extreme switch can exhaust each other)',
      'Type 6 白黒スイッチ型（予測不能と極端スイッチの衝突でお互い疲れる）',
      'Type 6 黑白开关型（不可预测遇上极端开关，容易互相耗损）',
      'Type 6 黑白開關型（不可預測遇上極端開關，容易互相耗損）',
      'Type 6 Công tắc đen trắng (khó đoán gặp cực đoan dễ làm nhau mệt)',
      'Type 6 Sakelar hitam-putih (tak terduga bertemu sakelar ekstrem bikin saling lelah)'
    ),
    memeOneLiner: L(
      '"당신이 있는 자리는 항상 예상 밖의 방향으로 흘러갑니다"',
      '"Any place with you always flows in an unexpected direction"',
      '「あなたがいる場はいつも予想外の方向へ流れます」',
      '“有你在的场子，永远会往意料之外发展。”',
      '「有你在的場子，永遠會往意料之外發展。」',
      '"Nơi nào có bạn, mọi thứ luôn rẽ sang hướng không ngờ tới"',
      '"Di mana ada kamu, arah suasana selalu bergerak ke hal tak terduga"'
    ),
    shareSnippet: L(
      '내 밈 재질은 카오스 랜덤형 🌀 맞는 사람들 손. 나도 내가 다음에 뭘 할지 몰라 → 너는?',
      'My meme type is Chaos Random 🌀 hands up if same. I also do not know what I will do next → You?',
      '私のミーム気質はカオスランダム型 🌀 同じ人は挙手。私も次何するか分からない → あなたは？',
      '我的梗体质是混沌随机型 🌀 同款举手，我也不知道下一秒我会干嘛 → 你呢？',
      '我的梗體質是混沌隨機型 🌀 同款舉手，我也不知道下一秒我會幹嘛 → 你呢？',
      'Chất meme của tôi là hỗn loạn ngẫu nhiên 🌀 Ai giống giơ tay, tôi cũng không biết mình sẽ làm gì tiếp → Còn bạn?',
      'Tipe meme-ku Chaos Random 🌀 yang sama angkat tangan. Aku juga tidak tahu habis ini bakal ngapain → Kamu?'
    ),
  },
  {
    type: 'Type6',
    emoji: '⚡',
    title: L(
      '극과 극을 달리는, 흑백 감정 스위치형',
      'All-or-nothing black-white emotion switch type',
      '両極端を走る、白黒感情スイッチ型',
      '走极端的黑白情绪开关型',
      '走極端的黑白情緒開關型',
      'Kiểu công tắc cảm xúc trắng đen cực đoan',
      'Tipe sakelar emosi hitam-putih, all-or-nothing'
    ),
    memeCharacterName: L(
      '스위치 | 밈 특기: 0과 100 사이에 50이 없음, 좋으면 최고 싫으면 최악, 스위치 전환 속도 세계 최강',
      'Switch | Meme skill: no 50 between 0 and 100, if liked then best, if hated then worst, world-class switching speed',
      'スイッチ | ミーム特技: 0と100の間に50がない、好きなら最高嫌いなら最悪、切替速度は世界最強',
      '开关君 | 梗特技：0和100之间没有50，喜欢就最爱讨厌就最烦，切换速度世界级',
      '開關君 | 梗特技：0和100之間沒有50，喜歡就最愛討厭就最煩，切換速度世界級',
      'Công tắc | Đặc kỹ: giữa 0 và 100 không có 50, thích là cực thích ghét là cực ghét, tốc độ chuyển trạng thái vô địch',
      'Sakelar | Skill meme: tidak ada angka 50 antara 0 dan 100, kalau suka jadi paling suka kalau tidak suka jadi paling tidak suka, kecepatan pindah mode kelas dunia'
    ),
    shortDescription: L(
      '"이 사람에게 중간은 없습니다. 스위치가 켜지거나 꺼지거나 둘 중 하나입니다."',
      '"This person has no middle. The switch is either on or off."',
      '「この人に中間はありません。スイッチはオンかオフのどちらかです。」',
      '“这个人没有中间值，开关只有开或关。”',
      '「這個人沒有中間值，開關只有開或關。」',
      '"Người này không có mức trung gian. Công tắc chỉ có bật hoặc tắt."',
      '"Orang ini tidak punya mode tengah. Sakelarnya cuma nyala atau mati."'
    ),
    description: L(
      '기분이 좋으면 세상 최고로 좋고, 기분이 나쁘면 세상 최악입니다. 좋아하면 완전 빠져들고 싫어하면 완전 무관심입니다. 피곤하다가도 재밌는 게 생기면 즉각 에너지 MAX, 에너지 넘치다가도 관심 없어지면 즉각 방전. 이 스위치 전환 속도가 주변 사람들을 때때로 당황하게 하지만, 그 솔직함이 오히려 매력이 되는 타입입니다.',
      'If you feel good, it is the best day ever. If you feel bad, it is the worst. If you like something, you dive all in; if not, you go fully indifferent. You can be exhausted, then instantly max out when something fun appears; you can be hyper, then instantly drained when interest fades. This rapid switching can surprise people, but your honesty is exactly what makes you charming.',
      '気分が良ければ世界最高、悪ければ世界最悪。好きなら全力でハマり、嫌いなら完全に無関心。疲れていても面白いことがあれば即エネルギーMAX、逆に興味がなくなると即放電。この切替スピードは周囲を驚かせますが、その率直さがむしろ魅力になります。',
      '你心情好时是世界第一开心，心情差时是世界第一低落。喜欢就全力投入，不喜欢就彻底无感。再累也能因有趣的事瞬间满电，刚刚很嗨也可能因失去兴趣瞬间断电。这样的切换速度会让人措手不及，但你的直率反而很有魅力。',
      '你心情好時是世界第一開心，心情差時是世界第一低落。喜歡就全力投入，不喜歡就徹底無感。再累也能因有趣的事瞬間滿電，剛剛很嗨也可能因失去興趣瞬間斷電。這樣的切換速度會讓人措手不及，但你的直率反而很有魅力。',
      'Khi vui, bạn vui hết cỡ; khi không vui, mọi thứ trở nên tệ nhất. Thích là lao vào 100%, không thích là lạnh tanh ngay lập tức. Đang mệt mà gặp chuyện vui thì năng lượng lên MAX ngay, đang tràn năng lượng mà mất hứng thì tụt pin tức thì. Tốc độ chuyển công tắc này đôi khi làm người xung quanh bối rối, nhưng sự thẳng thắn đó lại là sức hút của bạn.',
      'Kalau mood bagus, rasanya paling bagus sedunia; kalau mood jelek, jadi paling buruk sedunia. Suka sesuatu langsung total, tidak suka langsung cuek total. Lagi capek pun bisa langsung energi MAX saat ada hal seru, tapi saat minat hilang langsung drop seketika. Kecepatan pindah sakelar ini kadang bikin orang kaget, tapi kejujuranmu justru jadi pesona.'
    ),
    memeLevel: L(
      '⚡⚡⚡⚡⚡ 스위치 만렙',
      '⚡⚡⚡⚡⚡ Switch max level',
      '⚡⚡⚡⚡⚡ スイッチMAX',
      '⚡⚡⚡⚡⚡ 开关满级',
      '⚡⚡⚡⚡⚡ 開關滿級',
      '⚡⚡⚡⚡⚡ Công tắc max level',
      '⚡⚡⚡⚡⚡ Sakelar level max'
    ),
    memeTrigger: L(
      '관심이 생기거나 사라지는 순간 즉각 스위치 전환',
      'Switches instantly the moment interest appears or disappears',
      '興味が生まれる・消える瞬間に即スイッチ切替',
      '兴趣出现或消失的瞬间立刻切换',
      '興趣出現或消失的瞬間立刻切換',
      'Chuyển công tắc ngay khi hứng thú xuất hiện hoặc biến mất',
      'Langsung pindah sakelar saat minat muncul atau hilang'
    ),
    memeActivationRate: L(
      '스위치가 켜지면 200% / 꺼지면 0% / 중간 없음',
      '200% when on / 0% when off / no middle',
      'オンで200% / オフで0% / 中間なし',
      '开时 200% / 关时 0% / 没有中间值',
      '開時 200% / 關時 0% / 沒有中間值',
      'Bật thì 200% / tắt thì 0% / không có ở giữa',
      'Saat nyala 200% / saat mati 0% / tidak ada tengah'
    ),
    memeUltimate: L(
      '피곤함 → 재미 감지 → 0.1초 만에 에너지 MAX 전환',
      'Tired → detects fun → flips to energy MAX in 0.1s',
      '疲れ → 面白さ検知 → 0.1秒でエネルギーMAXへ',
      '疲惫 → 侦测到有趣 → 0.1秒切换满能量',
      '疲憊 → 偵測到有趣 → 0.1秒切換滿能量',
      'Mệt mỏi → phát hiện niềm vui → 0,1 giây lên năng lượng MAX',
      'Lelah → mendeteksi keseruan → 0,1 detik langsung energi MAX'
    ),
    memeCaution: L(
      '스위치가 너무 빠르면 주변이 따라가기 힘들 수 있음',
      'If your switch is too fast, others may struggle to keep up',
      '切替が速すぎると周囲がついていけないことがある',
      '开关切得太快，周围人可能跟不上',
      '開關切得太快，周圍人可能跟不上',
      'Nếu chuyển trạng thái quá nhanh, người xung quanh có thể không theo kịp',
      'Kalau pindah sakelar terlalu cepat, orang sekitar bisa kesulitan mengikuti'
    ),
    goodMatch: L(
      'Type 4 쿨내진동형 (둘 다 겉과 속의 갭이 있어서 서로 이해)',
      'Type 4 Cool-Vibe type (both have outside-inside contrast, so they understand each other)',
      'Type 4 クール感振動型（どちらも表裏ギャップがあり理解し合える）',
      'Type 4 高冷震动型（双方都表里反差大，彼此能懂）',
      'Type 4 高冷震動型（雙方都表裡反差大，彼此能懂）',
      'Type 4 Rung vibe cool (cả hai đều có độ lệch trong-ngoài nên hiểu nhau)',
      'Type 4 Cool-vibe (keduanya sama-sama punya kontras luar-dalam jadi saling paham)'
    ),
    badMatch: L(
      'Type 5 카오스형 (예측 불가와 극단 스위치의 만남으로 서로 피곤)',
      'Type 5 Chaos type (unpredictable + extreme switching can exhaust both)',
      'Type 5 カオス型（予測不能と極端スイッチの組み合わせでお互い疲れる）',
      'Type 5 混沌型（不可预测和极端开关组合容易互相消耗）',
      'Type 5 混沌型（不可預測和極端開關組合容易互相消耗）',
      'Type 5 Hỗn loạn (khó đoán gặp cực đoan, dễ làm nhau mệt)',
      'Type 5 Chaos (tak terduga bertemu sakelar ekstrem, bikin saling capek)'
    ),
    memeOneLiner: L(
      '"0 아니면 100. 당신에게 회색지대는 없습니다"',
      '"0 or 100. There is no gray zone for you"',
      '「0か100。あなたにグレーゾーンはありません」',
      '“不是0就是100，你没有灰色地带。”',
      '「不是0就是100，你沒有灰色地帶。」',
      '"0 hoặc 100. Với bạn không tồn tại vùng xám"',
      '"0 atau 100. Buat kamu tidak ada wilayah abu-abu"'
    ),
    shareSnippet: L(
      '내 밈 재질은 흑백 스위치형 ⚡ 0 아니면 100임. 중간이 없음 ㅋㅋ → 너는 어떤 밈이야?',
      'My meme type is Black-White Switch ⚡ It is either 0 or 100, no middle lol → What meme are you?',
      '私のミーム気質は白黒スイッチ型 ⚡ 0か100で中間なしw → あなたはどのミーム？',
      '我的梗体质是黑白开关型 ⚡ 不是0就是100，没有中间哈哈 → 你是哪种梗？',
      '我的梗體質是黑白開關型 ⚡ 不是0就是100，沒有中間哈哈 → 你是哪種梗？',
      'Chất meme của tôi là công tắc trắng đen ⚡ 0 hoặc 100, không có ở giữa haha → Bạn là meme nào?',
      'Tipe meme-ku sakelar hitam-putih ⚡ 0 atau 100, tidak ada tengah wkwk → Kamu meme yang mana?'
    ),
  },
];
