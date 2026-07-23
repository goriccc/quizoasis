// 1분 '순발력' 테스트 — 데이터·채점·로컬 저장

export const PHASE3_ONE_MIN_REACTION_SPEED_SLUG = 'phase3-1min-reaction-speed';
export const PHASE3_ONE_MIN_REACTION_SPEED_DURATION_MS = 60_000;
export const PHASE3_ONE_MIN_REACTION_SPEED_PHASE_MS = 20_000;
export const PHASE3_ONE_MIN_REACTION_SPEED_MAX_RAW = 350;

export type Phase3LocaleMap = {
  ko: string;
  en: string;
  ja: string;
  zh: string;
  'zh-CN': string;
  'zh-TW': string;
  vi: string;
  id: string;
};

export interface Phase3OneMinReactionSpeedResult {
  type: string;
  emoji: string;
  grade: string;
  scoreRange: [number, number]; // normalized 0–100
  title: Phase3LocaleMap;
  description: Phase3LocaleMap;
  reactionSpeed: Phase3LocaleMap;
  rankHint: Phase3LocaleMap;
  retryTip: Phase3LocaleMap;
  oneLiner: Phase3LocaleMap;
  shareMessage: Phase3LocaleMap;
  commonTraits?: Phase3LocaleMap;
  caution?: Phase3LocaleMap;
  certify?: Phase3LocaleMap;
}

export interface Phase3OneMinReactionSpeedStats {
  rawScore: number;
  normalizedScore: number;
  avgMs: number;
  maxCombo: number;
  missCount: number;
  hitCount: number;
}

export const PHASE3_ONE_MIN_REACTION_SPEED_RESULTS: Phase3OneMinReactionSpeedResult[] = [
  {
    type: 'Type1',
    emoji: '🐢',
    grade: 'F',
    scoreRange: [0, 15],
    title: {
      ko: '뇌가 아직 워밍업 중, 순발력 초보 단계',
      en: 'Brain still warming up — beginner reflexes',
      ja: '脳はまだウォーミングアップ中、瞬発力ビギナー',
      zh: '大脑还在热身，反应力新手阶段',
      'zh-CN': '大脑还在热身，反应力新手阶段',
      'zh-TW': '大腦還在熱身，反應力新手階段',
      vi: 'Não vẫn đang khởi động — phản xạ mới bắt đầu',
      id: 'Otak masih pemanasan — refleks pemula',
    },
    description: {
      ko: '오늘 피곤한 날이거나 평소 반응 속도가 느린 편입니다. 다시 한번 도전해보세요.\n단순 반응 구간에서부터 속도나 정확도가 낮은 패턴입니다. 컨디션 영향을 많이 받는 테스트이기 때문에 오늘 몸 상태가 안 좋거나 피곤한 날은 점수가 낮게 나올 수 있습니다.',
      en: 'You may be tired today or simply have a slower baseline. Try again.\nEven the simple-reaction stage shows low speed or accuracy. Condition matters a lot — a rough day can tank your score.',
      ja: '今日は疲れているか、普段から反応が遅めです。もう一度挑戦を。\n単純反応の段階から速度や正確さが低いパターンです。コンディションの影響が大きいテストなので、体調が悪い日は点が下がります。',
      zh: '今天可能疲惫，或平时反应偏慢。再试一次吧。\n从简单反应阶段起速度或准确度就偏低。这是受状态影响很大的测试，状态差时分数会偏低。',
      'zh-CN': '今天可能疲惫，或平时反应偏慢。再试一次吧。\n从简单反应阶段起速度或准确度就偏低。这是受状态影响很大的测试，状态差时分数会偏低。',
      'zh-TW': '今天可能疲憊，或平時反應偏慢。再試一次吧。\n從簡單反應階段起速度或準確度就偏低。這是受狀態影響很大的測試，狀態差時分數會偏低。',
      vi: 'Hôm nay bạn có thể mệt hoặc vốn phản ứng chậm. Hãy thử lại.\nNgay giai đoạn phản ứng đơn giản đã chậm hoặc kém chính xác. Test chịu ảnh hưởng trạng thái nhiều.',
      id: 'Hari ini kamu mungkin lelah atau memang lambat. Coba lagi.\nDari tahap reaksi sederhana sudah lambat/kurang akurat. Kondisi sangat memengaruhi skor.',
    },
    reactionSpeed: {
      ko: '추정 반응 속도: 500ms 이상',
      en: 'Est. reaction: 500ms+',
      ja: '推定反応速度: 500ms以上',
      zh: '预估反应速度：500ms以上',
      'zh-CN': '预估反应速度：500ms以上',
      'zh-TW': '預估反應速度：500ms以上',
      vi: 'Ước tính: ≥500ms',
      id: 'Perkiraan: ≥500ms',
    },
    rankHint: {
      ko: '하위 20%',
      en: 'Bottom 20%',
      ja: '下位20%',
      zh: '后20%',
      'zh-CN': '后20%',
      'zh-TW': '後20%',
      vi: '20% dưới',
      id: '20% terbawah',
    },
    retryTip: {
      ko: '화면을 눈에서 멀리 떨어뜨리지 말기·손가락 미리 화면 위에 올려두기',
      en: 'Keep the screen close and finger ready',
      ja: '画面を目から離さない・指を画面上に構える',
      zh: '屏幕别离眼睛太远，手指提前悬好',
      'zh-CN': '屏幕别离眼睛太远，手指提前悬好',
      'zh-TW': '螢幕別離眼睛太遠，手指提前懸好',
      vi: 'Giữ màn hình gần và tay sẵn sàng',
      id: 'Jaga layar dekat dan jari siap',
    },
    oneLiner: {
      ko: '오늘은 컨디션 관리가 먼저입니다. 내일 다시 도전하면 달라집니다',
      en: 'Manage your condition first. Tomorrow can feel different.',
      ja: 'まずはコンディション管理。明日また挑戦を。',
      zh: '先把状态养好。明天再战会不一样。',
      'zh-CN': '先把状态养好。明天再战会不一样。',
      'zh-TW': '先把狀態養好。明天再戰會不一樣。',
      vi: 'Hãy chăm sóc thể trạng trước. Ngày mai sẽ khác.',
      id: 'Urus kondisi dulu. Besok bisa beda.',
    },
    shareMessage: {
      ko: '1분 순발력 테스트: F등급 🐢 오늘 컨디션이 안 좋았던 거야... 분명히 → 내 점수 이겼어? 도전해봐',
      en: '1-Min Reflex Test: Grade F 🐢 Rough day... → Can you beat my score?',
      ja: '1分瞬発力テスト: Fランク 🐢 今日はコンディション悪かった… → 俺のスコア超えられる？',
      zh: '1分钟反应力测试：F级 🐢 今天状态不好… → 能赢我的分数吗？',
      'zh-CN': '1分钟反应力测试：F级 🐢 今天状态不好… → 能赢我的分数吗？',
      'zh-TW': '1分鐘反應力測試：F級 🐢 今天狀態不好… → 能贏我的分數嗎？',
      vi: 'Test phản xạ 1 phút: hạng F 🐢 Hôm nay kém phong độ… → Thắng được điểm tao không?',
      id: 'Tes Refleks 1 Menit: Grade F 🐢 Hari ini lagi jelek… → Bisa kalahkan skor aku?',
    },
  },
  {
    type: 'Type2',
    emoji: '🐌',
    grade: 'D',
    scoreRange: [16, 30],
    title: {
      ko: '반응하는 데 생각이 필요한 사람, 신중 처리형',
      en: 'Needs to think before reacting — careful processor',
      ja: '反応に思考が必要な人、慎重処理タイプ',
      zh: '反应前需要思考的人，谨慎处理型',
      'zh-CN': '反应前需要思考的人，谨慎处理型',
      'zh-TW': '反應前需要思考的人，謹慎處理型',
      vi: 'Cần nghĩ trước khi phản ứng — kiểu thận trọng',
      id: 'Perlu berpikir sebelum bereaksi — tipe hati-hati',
    },
    description: {
      ko: '반응은 하고 있는데 판단하는 데 시간이 조금 더 걸립니다.\n단순 클릭은 괜찮은데 색상 판단이나 방향 판단에서 속도가 느려지는 패턴입니다. 신중하게 확인하고 클릭하는 스타일이어서 오클릭이 적은 대신 속도가 낮습니다.',
      en: 'You do react, but judgment takes a bit longer.\nSimple clicks are fine, yet color/direction checks slow you down. Careful confirmation means fewer misses but lower speed.',
      ja: '反応はしているが判断に少し時間がかかります。\n単純クリックは大丈夫ですが色・方向判断で遅くなるパターンです。慎重に確認するのでミスは少ない代わりに速度が落ちます。',
      zh: '你有在反应，但判断稍慢。\n简单点击还行，颜色/方向判断时会变慢。仔细确认所以误点少，但速度偏低。',
      'zh-CN': '你有在反应，但判断稍慢。\n简单点击还行，颜色/方向判断时会变慢。仔细确认所以误点少，但速度偏低。',
      'zh-TW': '你有在反應，但判斷稍慢。\n簡單點擊還行，顏色／方向判斷時會變慢。仔細確認所以誤點少，但速度偏低。',
      vi: 'Bạn có phản ứng nhưng phán đoán hơi chậm.\nClick đơn giản ổn, nhưng màu/hướng làm chậm. Kiểm tra kỹ nên ít miss nhưng tốc độ thấp.',
      id: 'Kamu bereaksi, tapi penilaian agak lambat.\nKlik sederhana oke, tapi cek warna/arah memperlambat. Teliti jadi jarang miss tapi kecepatannya rendah.',
    },
    reactionSpeed: {
      ko: '추정 반응 속도: 400~500ms',
      en: 'Est. reaction: 400–500ms',
      ja: '推定反応速度: 400〜500ms',
      zh: '预估反应速度：400~500ms',
      'zh-CN': '预估反应速度：400~500ms',
      'zh-TW': '預估反應速度：400~500ms',
      vi: 'Ước tính: 400–500ms',
      id: 'Perkiraan: 400–500ms',
    },
    rankHint: {
      ko: '하위 40%',
      en: 'Bottom 40%',
      ja: '下位40%',
      zh: '后40%',
      'zh-CN': '后40%',
      'zh-TW': '後40%',
      vi: '40% dưới',
      id: '40% terbawah',
    },
    retryTip: {
      ko: '판단하지 말고 느낌으로 클릭하기. 생각이 오히려 느리게 만듦',
      en: 'Click by feel, not overthinking',
      ja: '判断せず感覚でクリック。考えすぎは遅くなる',
      zh: '别判断，凭感觉点。想太多反而慢',
      'zh-CN': '别判断，凭感觉点。想太多反而慢',
      'zh-TW': '別判斷，憑感覺點。想太多反而慢',
      vi: 'Bấm theo cảm giác, đừng nghĩ nhiều',
      id: 'Klik dengan feeling, jangan overthinking',
    },
    oneLiner: {
      ko: '정확도는 좋습니다. 속도를 조금만 올리면 등급이 확 달라집니다',
      en: 'Accuracy is good. A bit more speed changes your grade fast.',
      ja: '正確さは良い。速度を少し上げればランクが変わる',
      zh: '准确度不错。速度再快一点等级会明显提升',
      'zh-CN': '准确度不错。速度再快一点等级会明显提升',
      'zh-TW': '準確度不錯。速度再快一點等級會明顯提升',
      vi: 'Độ chính xác tốt. Nhanh hơn một chút là lên hạng',
      id: 'Akurasi bagus. Sedikit lebih cepat, grade naik',
    },
    shareMessage: {
      ko: '1분 순발력 테스트: D등급 🐌 신중하게 클릭하다가 속도에서 밀렸음... 빠르게 생각하는 거 어렵다 → 내 점수 이겼어?',
      en: '1-Min Reflex Test: Grade D 🐌 Too careful, lost on speed → Can you beat me?',
      ja: '1分瞬発力テスト: Dランク 🐌 慎重すぎて速度負け… → 超えられる？',
      zh: '1分钟反应力测试：D级 🐌 太谨慎速度输了… → 能赢我吗？',
      'zh-CN': '1分钟反应力测试：D级 🐌 太谨慎速度输了… → 能赢我吗？',
      'zh-TW': '1分鐘反應力測試：D級 🐌 太謹慎速度輸了… → 能贏我嗎？',
      vi: 'Test phản xạ 1 phút: hạng D 🐌 Quá thận trọng nên chậm… → Thắng được không?',
      id: 'Tes Refleks 1 Menit: Grade D 🐌 Terlalu hati-hati jadi lambat… → Bisa kalahkan?',
    },
  },
  {
    type: 'Type3',
    emoji: '🎯',
    grade: 'C',
    scoreRange: [31, 50],
    title: {
      ko: '평균 수준의 반응 속도, 일반 순발력형',
      en: 'Average reaction speed — standard reflexes',
      ja: '平均レベルの反応速度、一般瞬発力タイプ',
      zh: '平均反应速度，普通反应力型',
      'zh-CN': '平均反应速度，普通反应力型',
      'zh-TW': '平均反應速度，普通反應力型',
      vi: 'Tốc độ phản ứng trung bình — phản xạ tiêu chuẩn',
      id: 'Kecepatan reaksi rata-rata — refleks standar',
    },
    description: {
      ko: '평균 수준입니다. 대부분의 사람이 이 구간에 해당합니다.\n단순 반응과 판단 반응까지는 괜찮은데 극한 구간에서 복합 판단이 들어오면 정확도나 속도가 낮아지는 패턴입니다. 일상적인 반응 속도는 충분하지만 훈련을 통해 더 올릴 수 있습니다.',
      en: 'Average level — most people land here.\nSimple and judgment stages are fine, but complex extreme-stage decisions lower accuracy or speed. Daily life is fine; training can push you higher.',
      ja: '平均レベルです。多くの人がこの帯です。\n単純・判断までは良いですが極限の複合判断で精度や速度が落ちます。日常は十分ですが訓練で伸ばせます。',
      zh: '平均水平，多数人在这里。\n简单与判断阶段还行，极限复合判断时准确度或速度下降。日常够用，训练还能提升。',
      'zh-CN': '平均水平，多数人在这里。\n简单与判断阶段还行，极限复合判断时准确度或速度下降。日常够用，训练还能提升。',
      'zh-TW': '平均水平，多數人在這裡。\n簡單與判斷階段還行，極限複合判斷時準確度或速度下降。日常夠用，訓練還能提升。',
      vi: 'Mức trung bình — hầu hết rơi vào đây.\nĐơn giản/phán đoán ổn, nhưng cực hạn phức hợp làm chậm hoặc sai. Đủ dùng hàng ngày; luyện thêm sẽ lên.',
      id: 'Level rata-rata — kebanyakan di sini.\nSederhana/penilaian oke, tapi ekstrem kompleks menurunkan akurasi/kecepatan. Cukup untuk sehari-hari; latihan bisa naik.',
    },
    reactionSpeed: {
      ko: '추정 반응 속도: 300~400ms',
      en: 'Est. reaction: 300–400ms',
      ja: '推定反応速度: 300〜400ms',
      zh: '预估反应速度：300~400ms',
      'zh-CN': '预估反应速度：300~400ms',
      'zh-TW': '預估反應速度：300~400ms',
      vi: 'Ước tính: 300–400ms',
      id: 'Perkiraan: 300–400ms',
    },
    rankHint: {
      ko: '상위 60%',
      en: 'Top 60%',
      ja: '上位60%',
      zh: '前60%',
      'zh-CN': '前60%',
      'zh-TW': '前60%',
      vi: 'Top 60%',
      id: 'Top 60%',
    },
    retryTip: {
      ko: '극한 구간에서 반전 규칙 적응 빠르게 하기. 색상 대신 위치를 먼저 보기',
      en: 'Adapt to reverse rules faster. Read position before color.',
      ja: '極限で反転ルールへ素早く適応。色より位置を先に見る',
      zh: '极限阶段更快适应反转。先看位置再看颜色',
      'zh-CN': '极限阶段更快适应反转。先看位置再看颜色',
      'zh-TW': '極限階段更快適應反轉。先看位置再看顏色',
      vi: 'Thích nghi luật đảo nhanh hơn. Nhìn vị trí trước màu',
      id: 'Adapt aturan balik lebih cepat. Lihat posisi dulu',
    },
    oneLiner: {
      ko: '충분한 수준입니다. 연습하면 B까지는 금방 올라갑니다',
      en: 'Solid enough. Practice and B is close.',
      ja: '十分なレベル。練習すればBまですぐ',
      zh: '水平够用。练一练很快到B',
      'zh-CN': '水平够用。练一练很快到B',
      'zh-TW': '水平夠用。練一練很快到B',
      vi: 'Đủ tốt. Luyện thêm là lên B',
      id: 'Cukup bagus. Latihan sedikit naik ke B',
    },
    shareMessage: {
      ko: '1분 순발력 테스트: C등급 🎯 평균 수준이래... 반전 구간에서 멘붕 온 거 맞음 ㅋㅋ → 내 점수 이겼어? 1분만 해봐',
      en: '1-Min Reflex Test: Grade C 🎯 Average... reverse stage fried my brain → Beat me in 1 min?',
      ja: '1分瞬発力テスト: Cランク 🎯 平均らしい… 反転で混乱 → 1分で超えられる？',
      zh: '1分钟反应力测试：C级 🎯 平均水平… 反转段脑子炸了 → 1分钟赢我？',
      'zh-CN': '1分钟反应力测试：C级 🎯 平均水平… 反转段脑子炸了 → 1分钟赢我？',
      'zh-TW': '1分鐘反應力測試：C級 🎯 平均水平… 反轉段腦子炸了 → 1分鐘贏我？',
      vi: 'Test phản xạ 1 phút: hạng C 🎯 Trung bình… đảo luật làm tôi rối → 1 phút thắng được không?',
      id: 'Tes Refleks 1 Menit: Grade C 🎯 Rata-rata… mode balik bikin pusing → 1 menit kalahkan aku?',
    },
  },
  {
    type: 'Type4',
    emoji: '⚡',
    grade: 'B',
    scoreRange: [51, 70],
    title: {
      ko: '반응 속도 준수한 사람, 훈련된 순발력형',
      en: 'Solid reaction speed — trained reflexes',
      ja: '反応速度がしっかりした人、訓練された瞬発力タイプ',
      zh: '反应速度不错，训练有素型',
      'zh-CN': '反应速度不错，训练有素型',
      'zh-TW': '反應速度不錯，訓練有素型',
      vi: 'Phản ứng khá — phản xạ đã luyện',
      id: 'Reaksi bagus — refleks terlatih',
    },
    description: {
      ko: '판단 반응까지 빠르게 처리하는 수준입니다. 상위 40%에 해당합니다.\n단순 반응과 판단 반응 모두 빠르고 극한 구간에서도 일정 수준 이상의 정확도를 유지합니다. 게임을 자주 하거나 빠른 환경에서 훈련된 사람이 많이 나오는 구간입니다.',
      en: 'You handle judgment reactions quickly — top 40%.\nSimple and judgment stages are fast, and you keep decent accuracy in the extreme stage. Common among gamers and people trained in fast environments.',
      ja: '判断反応まで速く処理できます。上位40%。\n単純・判断とも速く、極限でも一定の正確さを維持。ゲーム勢や速い環境で鍛えた人に多い帯です。',
      zh: '判断反应也很快，属于前40%。\n简单与判断都快，极限阶段也能保持一定准确度。常见于常玩游戏或快节奏训练者。',
      'zh-CN': '判断反应也很快，属于前40%。\n简单与判断都快，极限阶段也能保持一定准确度。常见于常玩游戏或快节奏训练者。',
      'zh-TW': '判斷反應也很快，屬於前40%。\n簡單與判斷都快，極限階段也能保持一定準確度。常見於常玩遊戲或快節奏訓練者。',
      vi: 'Xử lý phán đoán nhanh — top 40%.\nĐơn giản/phán đoán đều nhanh, cực hạn vẫn giữ độ chính xác. Hay gặp ở gamer và môi trường nhanh.',
      id: 'Penilaian cepat — top 40%.\nSederhana/penilaian cepat, ekstrem tetap cukup akurat. Sering muncul pada gamer dan lingkungan cepat.',
    },
    reactionSpeed: {
      ko: '추정 반응 속도: 230~300ms',
      en: 'Est. reaction: 230–300ms',
      ja: '推定反応速度: 230〜300ms',
      zh: '预估反应速度：230~300ms',
      'zh-CN': '预估反应速度：230~300ms',
      'zh-TW': '預估反應速度：230~300ms',
      vi: 'Ước tính: 230–300ms',
      id: 'Perkiraan: 230–300ms',
    },
    rankHint: {
      ko: '상위 40%',
      en: 'Top 40%',
      ja: '上位40%',
      zh: '前40%',
      'zh-CN': '前40%',
      'zh-TW': '前40%',
      vi: 'Top 40%',
      id: 'Top 40%',
    },
    retryTip: {
      ko: '극한 구간 콤보 유지. 반전 구간에서 당황하지 않기',
      en: 'Keep extreme-stage combos. Stay calm in reverse.',
      ja: '極限コンボを維持。反転で慌てない',
      zh: '保持极限连击。反转时别慌',
      'zh-CN': '保持极限连击。反转时别慌',
      'zh-TW': '保持極限連擊。反轉時別慌',
      vi: 'Giữ combo cực hạn. Bình tĩnh khi đảo luật',
      id: 'Jaga combo ekstrem. Tenang saat mode balik',
    },
    oneLiner: {
      ko: '빠릅니다. A까지의 거리가 생각보다 가깝습니다',
      en: 'You are fast. A is closer than you think.',
      ja: '速い。Aまで意外と近い',
      zh: '很快。离A比你想的更近',
      'zh-CN': '很快。离A比你想的更近',
      'zh-TW': '很快。離A比你想的更近',
      vi: 'Bạn nhanh. A gần hơn bạn nghĩ',
      id: 'Kamu cepat. A lebih dekat dari dugaan',
    },
    shareMessage: {
      ko: '1분 순발력 테스트: B등급 ⚡ 상위 40%... 콤보 8연속까지 갔는데 끊겼음 ㅠ → 내 점수 이겼어? 도전해봐',
      en: '1-Min Reflex Test: Grade B ⚡ Top 40%... combo x8 then broke → Beat my score?',
      ja: '1分瞬発力テスト: Bランク ⚡ 上位40%… コンボ8で切れた → 超えられる？',
      zh: '1分钟反应力测试：B级 ⚡ 前40%… 连击8断了 → 能赢我吗？',
      'zh-CN': '1分钟反应力测试：B级 ⚡ 前40%… 连击8断了 → 能赢我吗？',
      'zh-TW': '1分鐘反應力測試：B級 ⚡ 前40%… 連擊8斷了 → 能贏我嗎？',
      vi: 'Test phản xạ 1 phút: hạng B ⚡ Top 40%… combo x8 đứt → Thắng được không?',
      id: 'Tes Refleks 1 Menit: Grade B ⚡ Top 40%… combo x8 putus → Bisa kalahkan?',
    },
  },
  {
    type: 'Type5',
    emoji: '🚀',
    grade: 'A',
    scoreRange: [71, 85],
    title: {
      ko: '반응 속도 탑티어, 고속 처리형',
      en: 'Top-tier reaction speed — high-speed processor',
      ja: '反応速度トップティア、高速処理タイプ',
      zh: '反应速度顶尖，高速处理型',
      'zh-CN': '反应速度顶尖，高速处理型',
      'zh-TW': '反應速度頂尖，高速處理型',
      vi: 'Phản ứng top-tier — xử lý tốc độ cao',
      id: 'Reaksi top-tier — prosesor kecepatan tinggi',
    },
    description: {
      ko: '복합 판단도 빠르게 처리합니다. 상위 15%에 해당합니다.\n극한 구간의 반전 규칙에서도 빠르게 적응하고 콤보를 연속으로 이어가는 패턴입니다. 게임·스포츠·빠른 업무 환경에서 훈련된 사람이 많은 구간입니다. 1분 내내 집중을 유지하는 것이 이 점수를 만들어냈습니다.',
      en: 'You process complex judgments quickly — top 15%.\nYou adapt fast to reverse rules and chain combos. Common among trained gamers, athletes, and fast-paced workers. Sustained focus for a full minute made this score.',
      ja: '複合判断も速い。上位15%。\n極限の反転にも素早く適応しコンボを繋ぐパターン。ゲーム・スポーツ・速い業務で鍛えた人に多い。1分の集中がこの点を生みました。',
      zh: '复合判断也很快，前15%。\n极限反转也能快速适应并连击。常见于游戏、运动、快节奏工作训练者。整分钟专注造就了这个分数。',
      'zh-CN': '复合判断也很快，前15%。\n极限反转也能快速适应并连击。常见于游戏、运动、快节奏工作训练者。整分钟专注造就了这个分数。',
      'zh-TW': '複合判斷也很快，前15%。\n極限反轉也能快速適應並連擊。常見於遊戲、運動、快節奏工作訓練者。整分鐘專注造就了這個分數。',
      vi: 'Xử lý phán đoán phức hợp nhanh — top 15%.\nThích nghi đảo luật nhanh và nối combo. Hay gặp ở gamer/thể thao/công việc nhanh. Tập trung cả phút tạo ra điểm này.',
      id: 'Penilaian kompleks cepat — top 15%.\nAdapt aturan balik cepat dan jaga combo. Sering pada gamer/olahraga/kerja cepat. Fokus 1 menit menghasilkan skor ini.',
    },
    reactionSpeed: {
      ko: '추정 반응 속도: 180~230ms',
      en: 'Est. reaction: 180–230ms',
      ja: '推定反応速度: 180〜230ms',
      zh: '预估反应速度：180~230ms',
      'zh-CN': '预估反应速度：180~230ms',
      'zh-TW': '預估反應速度：180~230ms',
      vi: 'Ước tính: 180–230ms',
      id: 'Perkiraan: 180–230ms',
    },
    rankHint: {
      ko: '상위 15%',
      en: 'Top 15%',
      ja: '上位15%',
      zh: '前15%',
      'zh-CN': '前15%',
      'zh-TW': '前15%',
      vi: 'Top 15%',
      id: 'Top 15%',
    },
    retryTip: {
      ko: '완벽 구간 보너스 +20점 챙기기. 오클릭을 최소화해서 S 등급 도전',
      en: 'Grab the +20 perfect-stage bonus. Minimize misses for S.',
      ja: '完璧区間ボーナス+20を取る。ミスを減らしてSへ',
      zh: '拿下完美阶段+20。减少误点冲S',
      'zh-CN': '拿下完美阶段+20。减少误点冲S',
      'zh-TW': '拿下完美階段+20。減少誤點衝S',
      vi: 'Lấy +20 perfect. Giảm miss để lên S',
      id: 'Ambil bonus +20 perfect. Kurangi miss ke S',
    },
    oneLiner: {
      ko: '인간 반응 속도의 상한에 가까워지고 있습니다',
      en: 'You are nearing the human reaction ceiling.',
      ja: '人間の反応速度の上限に近づいています',
      zh: '正在接近人类反应速度上限',
      'zh-CN': '正在接近人类反应速度上限',
      'zh-TW': '正在接近人類反應速度上限',
      vi: 'Bạn đang gần trần phản ứng của con người',
      id: 'Kamu mendekati batas reaksi manusia',
    },
    shareMessage: {
      ko: '1분 순발력 테스트: A등급 🚀 상위 15%... 반응 속도 {avgMs}ms 나왔음 → 내 점수 이겼어? 랭킹 도전해봐',
      en: '1-Min Reflex Test: Grade A 🚀 Top 15%... {avgMs}ms → Beat my score? Climb the ranking!',
      ja: '1分瞬発力テスト: Aランク 🚀 上位15%… {avgMs}ms → 超えられる？ランキング挑戦！',
      zh: '1分钟反应力测试：A级 🚀 前15%… {avgMs}ms → 能赢我吗？来冲榜！',
      'zh-CN': '1分钟反应力测试：A级 🚀 前15%… {avgMs}ms → 能赢我吗？来冲榜！',
      'zh-TW': '1分鐘反應力測試：A級 🚀 前15%… {avgMs}ms → 能贏我嗎？來衝榜！',
      vi: 'Test phản xạ 1 phút: hạng A 🚀 Top 15%… {avgMs}ms → Thắng được không? Leo ranking!',
      id: 'Tes Refleks 1 Menit: Grade A 🚀 Top 15%… {avgMs}ms → Bisa kalahkan? Naik ranking!',
    },
  },
  {
    type: 'Type6',
    emoji: '👑',
    grade: 'S',
    scoreRange: [86, 100],
    title: {
      ko: '인간 반응 속도 한계 도달, 순발력 끝판왕',
      en: 'Human reaction ceiling — reflex endgame',
      ja: '人間反応速度の限界到達、瞬発力エンドゲーム',
      zh: '触及人类反应极限，反应力终局王',
      'zh-CN': '触及人类反应极限，反应力终局王',
      'zh-TW': '觸及人類反應極限，反應力終局王',
      vi: 'Chạm trần phản ứng người — phản xạ tối thượng',
      id: 'Mencapai batas reaksi manusia — raja refleks',
    },
    description: {
      ko: '전체 사용자의 상위 5%. 판단과 실행이 거의 반사 수준으로 이뤄집니다.\n반전 규칙이 들어와도 즉각 적응하고 1분 내내 콤보를 연속으로 이어가며 극한 구간에서도 정확도를 유지하는 패턴입니다. 평균 반응 속도가 180ms 이하로 추정됩니다. 스포츠 선수 또는 오랜 게임 경험자 수준입니다.',
      en: 'Top 5% of all users. Judgment and action are nearly reflexive.\nYou adapt instantly to reverse rules, chain combos for a full minute, and stay accurate in the extreme stage. Estimated average under 180ms — athlete or long-time gamer level.',
      ja: '全ユーザー上位5%。判断と実行がほぼ反射。\n反転にも即適応し1分コンボを繋ぎ極限でも正確。平均180ms以下想定。アスリートや長年のゲーマー水準。',
      zh: '全体用户前5%。判断与执行近乎反射。\n反转也能即刻适应，整分钟连击并在极限保持准确。估计平均低于180ms——运动员或资深玩家水平。',
      'zh-CN': '全体用户前5%。判断与执行近乎反射。\n反转也能即刻适应，整分钟连击并在极限保持准确。估计平均低于180ms——运动员或资深玩家水平。',
      'zh-TW': '全體用戶前5%。判斷與執行近乎反射。\n反轉也能即刻適應，整分鐘連擊並在極限保持準確。估計平均低於180ms——運動員或資深玩家水平。',
      vi: 'Top 5% toàn bộ. Phán đoán và thực thi gần như phản xạ.\nThích nghi đảo luật tức thì, nối combo cả phút, cực hạn vẫn chính xác. TB dưới 180ms — mức VĐV/gamer lâu năm.',
      id: 'Top 5% semua user. Penilaian & aksi hampir refleks.\nAdapt aturan balik instan, combo 1 menit, ekstrem tetap akurat. Rata-rata di bawah 180ms — level atlet/gamer lama.',
    },
    reactionSpeed: {
      ko: '추정 반응 속도: 180ms 이하',
      en: 'Est. reaction: ≤180ms',
      ja: '推定反応速度: 180ms以下',
      zh: '预估反应速度：≤180ms',
      'zh-CN': '预估反应速度：≤180ms',
      'zh-TW': '預估反應速度：≤180ms',
      vi: 'Ước tính: ≤180ms',
      id: 'Perkiraan: ≤180ms',
    },
    rankHint: {
      ko: '상위 5%',
      en: 'Top 5%',
      ja: '上位5%',
      zh: '前5%',
      'zh-CN': '前5%',
      'zh-TW': '前5%',
      vi: 'Top 5%',
      id: 'Top 5%',
    },
    retryTip: {
      ko: '이 결과를 친구에게 자랑해도 됩니다',
      en: 'Feel free to show this off to friends.',
      ja: 'この結果は友達に自慢してOK',
      zh: '这个成绩可以拿去炫耀了',
      'zh-CN': '这个成绩可以拿去炫耀了',
      'zh-TW': '這個成績可以拿去炫耀了',
      vi: 'Cứ khoe với bạn bè đi',
      id: 'Silakan pamer ke teman',
    },
    oneLiner: {
      ko: '당신의 반응 속도는 이미 훈련된 수준입니다. 이 결과를 친구에게 자랑해도 됩니다',
      en: 'Your reaction speed is already trained-level. Brag away.',
      ja: '反応速度はすでに訓練済みレベル。自慢してOK',
      zh: '你的反应速度已是训练级。尽管炫耀。',
      'zh-CN': '你的反应速度已是训练级。尽管炫耀。',
      'zh-TW': '你的反應速度已是訓練級。儘管炫耀。',
      vi: 'Phản ứng của bạn đã mức luyện tập. Cứ khoe.',
      id: 'Reaksimu sudah level terlatih. Silakan pamer.',
    },
    shareMessage: {
      ko: '1분 순발력 테스트: S등급 끝판왕 ⚡👑 상위 5%·반응 속도 {avgMs}ms 이하... 인증 완료 → 내 점수 이겼어? 있으면 나와봐',
      en: '1-Min Reflex Test: Grade S Endgame ⚡👑 Top 5% · {avgMs}ms → Certified. Beat me if you can!',
      ja: '1分瞬発力テスト: Sランクエンドゲーム ⚡👑 上位5%・{avgMs}ms → 認証完了。超えられる？',
      zh: '1分钟反应力测试：S级终局王 ⚡👑 前5%·{avgMs}ms → 认证完成。有本事就来！',
      'zh-CN': '1分钟反应力测试：S级终局王 ⚡👑 前5%·{avgMs}ms → 认证完成。有本事就来！',
      'zh-TW': '1分鐘反應力測試：S級終局王 ⚡👑 前5%·{avgMs}ms → 認證完成。有本事就來！',
      vi: 'Test phản xạ 1 phút: hạng S tối thượng ⚡👑 Top 5% · {avgMs}ms → Chứng nhận xong. Có thì vào!',
      id: 'Tes Refleks 1 Menit: Grade S Endgame ⚡👑 Top 5% · {avgMs}ms → Tersertifikasi. Lawan kalau berani!',
    },
    commonTraits: {
      ko: '게임·스포츠·악기 연주·타자 훈련 등 빠른 피드백 루프 훈련 경험',
      en: 'Games, sports, instruments, typing — fast feedback-loop training',
      ja: 'ゲーム・スポーツ・楽器・タイピングなど速いフィードバック訓練',
      zh: '游戏、运动、乐器、打字等快速反馈训练经验',
      'zh-CN': '游戏、运动、乐器、打字等快速反馈训练经验',
      'zh-TW': '遊戲、運動、樂器、打字等快速回饋訓練經驗',
      vi: 'Game, thể thao, nhạc cụ, gõ phím — luyện feedback nhanh',
      id: 'Game, olahraga, musik, mengetik — latihan feedback cepat',
    },
    caution: {
      ko: '반응 속도가 빠른 대신 피로가 빨리 올 수 있음',
      en: 'Fast reflexes can also mean faster fatigue',
      ja: '反応が速い分、疲れも早く来ることがある',
      zh: '反应快也可能更快疲劳',
      'zh-CN': '反应快也可能更快疲劳',
      'zh-TW': '反應快也可能更快疲勞',
      vi: 'Phản xạ nhanh cũng có thể mệt nhanh hơn',
      id: 'Refleks cepat bisa juga cepat lelah',
    },
    certify: {
      ko: '순발력 끝판왕 달성 ⚡👑 상위 5% 인증',
      en: 'Reflex Endgame achieved ⚡👑 Top 5% certified',
      ja: '瞬発力エンドゲーム達成 ⚡👑 上位5%認証',
      zh: '反应力终局王达成 ⚡👑 前5%认证',
      'zh-CN': '反应力终局王达成 ⚡👑 前5%认证',
      'zh-TW': '反應力終局王達成 ⚡👑 前5%認證',
      vi: 'Đạt phản xạ tối thượng ⚡👑 Top 5%',
      id: 'Raja refleks tercapai ⚡👑 Top 5% tersertifikasi',
    },
  }
];

export function normalizePhase3ReactionSpeedScore(rawScore: number): number {
  const safe = Math.max(0, rawScore);
  return Math.min(Math.floor((safe / PHASE3_ONE_MIN_REACTION_SPEED_MAX_RAW) * 100), 100);
}

export function calculatePhase3OneMinReactionSpeedResult(
  normalizedScore: number
): Phase3OneMinReactionSpeedResult {
  const score = Math.max(0, Math.min(100, Math.floor(normalizedScore)));
  const found = PHASE3_ONE_MIN_REACTION_SPEED_RESULTS.find(
    (r) => score >= r.scoreRange[0] && score <= r.scoreRange[1]
  );
  return found || PHASE3_ONE_MIN_REACTION_SPEED_RESULTS[2];
}

export function getPhase3ReactionSpeedLocaleText(
  map: Phase3LocaleMap,
  locale: string
): string {
  if (locale === 'zh-CN') return map['zh-CN'] || map.zh || map.ko;
  if (locale === 'zh-TW') return map['zh-TW'] || map.ko;
  return map[locale as keyof Phase3LocaleMap] || map.ko;
}

export function getPhase3ReactionSpeedShareMessage(
  result: Phase3OneMinReactionSpeedResult,
  locale: string,
  avgMs: number
): string {
  const raw = getPhase3ReactionSpeedLocaleText(result.shareMessage, locale);
  return raw.replace(/\{avgMs\}/g, String(avgMs));
}

/** ISO week Monday (local) as YYYY-MM-DD */
export function getPhase3ReactionSpeedWeekKey(date = new Date()): string {
  const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const day = d.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  d.setDate(d.getDate() + diff);
  const y = d.getFullYear();
  const mth = String(d.getMonth() + 1).padStart(2, '0');
  const dayNum = String(d.getDate()).padStart(2, '0');
  return `${y}-${mth}-${dayNum}`;
}

export type Phase3ReactionSpeedPhase = 'warmup' | 'accel' | 'extreme';

export const PHASE3_ONE_MIN_REACTION_SPEED_PHASE_ORDER: Phase3ReactionSpeedPhase[] = [
  'warmup',
  'accel',
  'extreme',
];

export function getPhase3ReactionSpeedPhase(elapsedMs: number): Phase3ReactionSpeedPhase {
  if (elapsedMs < 20_000) return 'warmup';
  if (elapsedMs < 40_000) return 'accel';
  return 'extreme';
}

export function getNextPhase3ReactionSpeedPhase(
  current: Phase3ReactionSpeedPhase
): Phase3ReactionSpeedPhase | null {
  const idx = PHASE3_ONE_MIN_REACTION_SPEED_PHASE_ORDER.indexOf(current);
  if (idx < 0 || idx >= PHASE3_ONE_MIN_REACTION_SPEED_PHASE_ORDER.length - 1) return null;
  return PHASE3_ONE_MIN_REACTION_SPEED_PHASE_ORDER[idx + 1];
}

export type Phase3ReactionSpeedTaskType =
  | 'circle'
  | 'color'
  | 'arrow'
  | 'oddEven'
  | 'colorDir'
  | 'reverse';

export function pickPhase3ReactionSpeedTaskType(
  phase: Phase3ReactionSpeedPhase
): Phase3ReactionSpeedTaskType {
  if (phase === 'warmup') return Math.random() < 0.5 ? 'circle' : 'color';
  if (phase === 'accel') return Math.random() < 0.5 ? 'arrow' : 'oddEven';
  return Math.random() < 0.5 ? 'colorDir' : 'reverse';
}

export function getPhase3ReactionSpeedSpawnGapMs(phase: Phase3ReactionSpeedPhase): number {
  if (phase === 'warmup') return 600 + Math.random() * 600;
  if (phase === 'accel') return 500 + Math.random() * 500;
  return 400 + Math.random() * 400;
}

export function getPhase3ReactionSpeedTargetWindowMs(phase: Phase3ReactionSpeedPhase): number {
  if (phase === 'warmup') return 1500;
  if (phase === 'accel') return 1000;
  return 800;
}

export interface Phase3ReactionSpeedHitResult {
  delta: number;
  comboBonus: number;
  isHit: boolean;
  isFast: boolean;
}

export function scorePhase3ReactionSpeedHit(
  phase: Phase3ReactionSpeedPhase,
  isHit: boolean,
  reactionMs: number,
  comboBefore: number
): Phase3ReactionSpeedHitResult {
  if (!isHit) {
    if (phase === 'warmup') return { delta: -2, comboBonus: 0, isHit: false, isFast: false };
    if (phase === 'accel') return { delta: -3, comboBonus: 0, isHit: false, isFast: false };
    return { delta: -4, comboBonus: 0, isHit: false, isFast: false };
  }

  let delta = 0;
  let fastThreshold = 250;
  let fastBonus = 2;

  if (phase === 'warmup') {
    delta = 5;
    fastBonus = 2;
    fastThreshold = 250;
  } else if (phase === 'accel') {
    delta = 7;
    fastBonus = 3;
    fastThreshold = 250;
  } else {
    delta = 10;
    fastBonus = 5;
    fastThreshold = 200;
  }

  const isFast = reactionMs > 0 && reactionMs <= fastThreshold;
  if (isFast) delta += fastBonus;

  let comboBonus = 0;
  const combo = comboBefore + 1;
  if (phase === 'accel') {
    if (combo === 3) comboBonus = 5;
    else if (combo === 5) comboBonus = 10;
  } else if (phase === 'extreme') {
    if (combo === 3) comboBonus = 8;
    else if (combo === 5) comboBonus = 15;
    else if (combo === 10) comboBonus = 25;
  }

  return { delta: delta + comboBonus, comboBonus, isHit: true, isFast };
}

// —— localStorage ——
const LS_BEST = 'phase3_1min_reaction_speed_best';
const LS_TODAY_BEST = 'phase3_1min_reaction_speed_today_best';
const LS_STREAK = 'phase3_1min_reaction_speed_streak';
const LS_LAST_PLAY = 'phase3_1min_reaction_speed_last_play';

function todayKey(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

export function loadPhase3ReactionSpeedBestScores(): {
  allTimeBest: number;
  todayBest: number;
  streak: number;
} {
  if (typeof window === 'undefined') {
    return { allTimeBest: 0, todayBest: 0, streak: 0 };
  }
  const allTimeBest = Number(localStorage.getItem(LS_BEST) || '0') || 0;
  const todayRaw = localStorage.getItem(LS_TODAY_BEST);
  let todayBest = 0;
  if (todayRaw) {
    try {
      const parsed = JSON.parse(todayRaw) as { day: string; score: number };
      if (parsed.day === todayKey()) todayBest = parsed.score || 0;
    } catch {
      todayBest = 0;
    }
  }
  const streak = Number(localStorage.getItem(LS_STREAK) || '0') || 0;
  return { allTimeBest, todayBest, streak };
}

export function savePhase3ReactionSpeedPlay(normalizedScore: number): {
  allTimeBest: number;
  todayBest: number;
  streak: number;
  isSevenDay: boolean;
} {
  if (typeof window === 'undefined') {
    return { allTimeBest: normalizedScore, todayBest: normalizedScore, streak: 1, isSevenDay: false };
  }

  const prevBest = Number(localStorage.getItem(LS_BEST) || '0') || 0;
  const allTimeBest = Math.max(prevBest, normalizedScore);
  localStorage.setItem(LS_BEST, String(allTimeBest));

  const day = todayKey();
  let todayBest = normalizedScore;
  const todayRaw = localStorage.getItem(LS_TODAY_BEST);
  if (todayRaw) {
    try {
      const parsed = JSON.parse(todayRaw) as { day: string; score: number };
      if (parsed.day === day) todayBest = Math.max(parsed.score || 0, normalizedScore);
    } catch {
      /* ignore */
    }
  }
  localStorage.setItem(LS_TODAY_BEST, JSON.stringify({ day, score: todayBest }));

  const lastPlay = localStorage.getItem(LS_LAST_PLAY);
  let streak = Number(localStorage.getItem(LS_STREAK) || '0') || 0;
  if (lastPlay !== day) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yKey = `${yesterday.getFullYear()}-${String(yesterday.getMonth() + 1).padStart(2, '0')}-${String(yesterday.getDate()).padStart(2, '0')}`;
    streak = lastPlay === yKey ? streak + 1 : 1;
    localStorage.setItem(LS_STREAK, String(streak));
    localStorage.setItem(LS_LAST_PLAY, day);
  }

  return { allTimeBest, todayBest, streak, isSevenDay: streak >= 7 };
}

export function generatePhase3ReactionSpeedChallengeCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}
