import type { Phase3SpendingDarkHistoryResult } from './phase3SpendingDarkHistoryTypes';

function tx(
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

export const phase3SpendingDarkHistoryTypeResults: Phase3SpendingDarkHistoryResult[] = [
  {
    type: 'Type1',
    emoji: '🏅',
    title: tx(
      '흑역사 없는 전설, 소비 우등생',
      'Legend with no slip-ups—model spender',
      '黒歴史ゼロの伝説・模範ワリキリ',
      '几乎没有黑历史的传说级理性消费者',
      '幾乎沒有黑歷史的傳說級理性消費者',
      'Huyền thoại không “hố đen”—tiêu có gương mẫu',
      'Legenda tanpa riwayat gelap—pola belanja teladan'
    ),
    shortDescription: tx(
      '「당신의 소비 흑역사 파일은 텅 비어 있습니다. 이게 진짜 가능한 건가요?」',
      '“Your spending slip-up file is empty—is that even real?”',
      '「あなたの消費ブラック履歴フォルダは空っぽ。本当に？」',
      '「你的消费黑历史文件夹是空的——这真的可能吗？」',
      '「你的消費黑歷史資料夾是空的——這真的可能嗎？」',
      '“Hồ sơ hố đen chi tiêu của bạn trống—có thật không?”',
      '“File riwayat belanja gelapmu kosong—memang bisa?”'
    ),
    description: tx(
      '계획하지 않은 지출이 거의 없고, 무료 체험 해지 일정을 캘린더에 등록하고, 세일에 흔들리지 않는 사람입니다. 충동구매가 있어도 반품을 완벽하게 처리하고, 포인트 소멸도 없습니다. 주변 친구들이 소비 흑역사를 털어놓을 때 「나는 그런 거 없는데?」 하는 그 사람이 바로 당신입니다.',
      'You rarely spend off-plan, you calendar free-trial cancellations, and sales do not sway you. If you impulse buy, you return cleanly, and points do not expire on your watch. When friends vent about money mistakes, you are the one saying, “I do not really have those.”',
      '計画外の支出がほぼなく、無料トライアルの解約はカレンダー管理。セールに流されない。衝動買いがあっても返品はきっちり。ポイント失効もない。友人が黒歴史を語るとき「私そういうのないけど？」な人。',
      '你很少计划外消费，会把试用取消记在日历，也不被促销带着跑。就算冲动也会退干净，积分也很少浪费。朋友吐槽时你就是「我好像没有那种」的人。',
      '你很少計畫外消費，會把試用取消記在日曆，也不被促銷帶著跑。就算衝動也會退乾淨，點數也很少浪費。朋友吐槽時你就是「我好像沒有那種」的人。',
      'Bạn hiếm khi chi ngoài kế hoạch, lên lịch hủy dùng thử, không bị sale dụ. Mua ngẫu hứng vẫn trả gọn, điểm không lỡ hạn. Khi bạn than thì bạn là người nói “mình không có kiểu đó”.',
      'Jarang keluar rencana, jadwalkan batalkan trial, tidak tergoda sale. Impuls pun bisa retur rapi, poin tidak hangus. Saat teman curhat, kamu yang bilang “aku tidak punya yang gitu.”'
    ),
    dangerLevel: tx('⭐☆☆☆☆ (거의 없음)', '⭐☆☆☆☆ (Almost none)', '⭐☆☆☆☆（ほぼなし）', '⭐☆☆☆☆（几乎没有）', '⭐☆☆☆☆（幾乎沒有）', '⭐☆☆☆☆ (Gần như không)', '⭐☆☆☆☆ (Hampir tidak ada)'),
    representativeHistory: tx(
      '딱히 없음, 가끔 과한 소비를 한 날',
      'None really—maybe a day of overspending',
      '特になし。たまに一日だけ使いすぎた日',
      '基本没有，偶尔某天花多了点',
      '基本沒有，偶爾某天花多了點',
      'Không có—thỉnh thoảng một ngày tiêu quá tay',
      'Tidak ada—mungkin sehari belanja kelebihan'
    ),
    futureRisk: tx(
      '과신으로 인한 방심. 가장 자신 있는 순간에 무너지는 경우가 있음',
      'Overconfidence: you slip when you feel safest.',
      '過信による油断。一番自信があるときに崩れることがある。',
      '过度自信会松懈，最自信时反而翻车。',
      '過度自信會鬆懈，最自信時反而翻車。',
      'Tự tin quá mức—trượt đúng lúc tưởng an toàn.',
      'Terlalu percaya diri—terpeleset saat merasa aman.'
    ),
    preventionBlock: tx(
      '현재 습관을 유지하되 6개월마다 정기결제 목록 점검 루틴을 추가하세요.',
      'Keep your habits—add a twice-yearly review of all recurring charges.',
      '今の習慣は維持しつつ、半年ごとに定期課金一覧を見直すルーティンを。',
      '保持习惯，但每半年检查一次自动扣款列表。',
      '保持習慣，但每半年檢查一次自動扣款列表。',
      'Giữ thói quen—cứ 6 tháng rà soát gói trừ tiền tự động.',
      'Pertahankan kebiasaan—tiap 6 bulan cek langganan otomatis.'
    ),
    todayTodo: tx(
      '구독 서비스 전체 목록 한 번만 조회하기. 완벽한 사람도 놓치는 게 있습니다',
      'Pull up every subscription once—even careful people miss one.',
      'サブスク一覧を一度だけ全部確認。完璧な人も見落とす。',
      '把所有订阅列出来查一遍，再细心也会漏。',
      '把所有訂閱列出來查一遍，再細心也會漏。',
      'Mở danh sách mọi gói đăng ký một lần—người cẩn thận cũng sót.',
      'Buka daftar semua langganan sekali—orang teliti pun bisa terlewat.'
    ),
  },
  {
    type: 'Type2',
    emoji: '📝',
    title: tx(
      '한 번 배우고 끝내는, 1회성 흑역사형',
      'One-and-done slip-up type',
      '一度きりの黒歴史タイプ',
      '一次就长记性型',
      '一次就長記性型',
      'Kiểu vấp một lần là nhớ',
      'Tipe salah sekali lalu belajar'
    ),
    shortDescription: tx(
      '「흑역사는 있지만 같은 실수를 두 번 하지 않는 사람입니다。」',
      '“You have slip-ups—but you do not repeat the same mistake twice.”',
      '「黒歴史はあるが、同じミスは二度としない人。」',
      '「有糗事，但不会重复同一种错。」',
      '「有糗事，但不會重複同一種錯。」',
      '“Có hố đen nhưng không lặp lại cùng một lỗi.”',
      '“Ada riwayat gelap tapi tidak mengulangi kesalahan yang sama.”'
    ),
    description: tx(
      '무료 체험 해지를 한 번 잊어버렸고, 세일에 한 번 과하게 샀고, 반품 기간을 한 번 놓쳤습니다. 그런데 그 이후로 같은 실수는 반복하지 않았습니다. 경험에서 빠르게 배우고 습관을 교정하는 능력이 탁월한 타입입니다. 흑역사는 있지만 성장의 재료로 만든 사람입니다.',
      'You forgot to cancel a trial once, overspent on a sale once, missed a return window once—and then you stopped repeating those mistakes. You learn fast and adjust habits. Slip-ups become growth fuel.',
      '無料解約を一度忘れた、セールで一度買いすぎた、返品期限を一度逃した。でもその後は同じミスを繰り返さない。学習が速く、黒歴史を成長に変えるタイプ。',
      '你忘过取消试用、大促买多过、错过退货期——但之后不再重复。学得很快，把糗事变成成长。',
      '你忘過取消試用、大促買多過、錯過退貨期——但之後不再重複。學得很快，把糗事變成成長。',
      'Bạn từng quên hủy trial, mua quá khi sale, lỡ hạn trả—nhưng sau đó không lặp lại. Học nhanh, biến hố đen thành bài học.',
      'Pernah lupa batalkan trial, belanja berlebihan saat sale, terlewat retur—lalu tidak mengulang. Cepat belajar, jadikan pelajaran.'
    ),
    dangerLevel: tx('⭐⭐☆☆☆ (있지만 반복 안 함)', '⭐⭐☆☆☆ (Yes, but not repeated)', '⭐⭐☆☆☆（あるが繰り返さない）', '⭐⭐☆☆☆（有但不重复）', '⭐⭐☆☆☆（有但不重複）', '⭐⭐☆☆☆ (Có nhưng không lặp)', '⭐⭐☆☆☆ (Ada tapi tidak berulang)'),
    representativeHistory: tx(
      '무료 체험 한 달 더 결제, 세일 과구매 1회, 반품 기간 한 번 놓침',
      'Extra month after a trial, one sale splurge, one missed return',
      'トライアルで1か月多課金、セールで一度買いすぎ、返品期限を一度逃した',
      '试用多付一个月、促销多买一次、错过一次退货期',
      '試用多付一個月、促銷多買一次、錯過一次退貨期',
      'Trial trả thêm một tháng, sale mua thừa một lần, lỡ hạn trả một lần',
      'Trial kena tagihan sebulan, sale belanja kelebihan sekali, terlewat retur sekali'
    ),
    futureRisk: tx(
      '비슷해 보이지만 조금 다른 패턴의 새로운 흑역사',
      'New slip-ups that look different but feel familiar',
      '似ているようで少し違う新しい黒歴史',
      '看起来不同但似曾相识的新坑',
      '看起來不同但似曾相識的新坑',
      '“Hố đen” mới trông khác nhưng quen quen',
      'Kesalahan baru yang terasa mirip tapi beda sedikit'
    ),
    preventionBlock: tx(
      '기존 교훈은 지키고 있으니 새로운 소비 방식(라이브커머스, 구독 서비스 등)에도 같은 원칙을 적용하세요.',
      'Your lessons still hold—apply the same rules to live commerce and new subscriptions.',
      '学びは活きている。ライブコマースや新サブスクにも同じ原則を。',
      '教训还在，把同样原则用在直播带货和新订阅上。',
      '教訓還在，把同樣原則用在直播帶貨和新訂閱上。',
      'Bài học vẫn đúng—áp dụng cho livestream và gói mới.',
      'Pelajaran tetap relevan—terapkan ke live commerce dan langganan baru.'
    ),
    todayTodo: tx(
      '지금까지 배운 교훈 3가지를 메모장에 적어두기. 잊지 않기 위한 기록',
      'Write down three lessons you have learned so you do not forget.',
      '今までの教訓を3つメモ。忘れないための記録。',
      '把学到的三条教训写下来，别忘。',
      '把學到的三條教訓寫下來，別忘。',
      'Ghi bài học đã rút để không quên.',
      'Tulis tiga pelajaran agar tidak lupa.'
    ),
  },
  {
    type: 'Type3',
    emoji: '🔄',
    title: tx('패턴이 반복되는, 만성 흑역사형', 'Chronic repeat pattern', '繰り返す慢性タイプ', '反复踩坑的慢性型', '反覆踩坑的慢性型', 'Kiểu lặp lại mãi', 'Tipe pola berulang'),
    shortDescription: tx(
      '「알면서도 또 합니다. 매번 후회하면서 매번 같은 패턴을 반복합니다。」',
      '“You know better—and still do it again. Same regret, same pattern.”',
      '「分かっているのにまたやる。毎回後悔しながら同じパターン。」',
      '「明知故犯，每次后悔还是老样子。」',
      '「明知故犯，每次後悔還是老樣子。」',
      '“Biết mà vẫn làm. Hối hận nhưng lặp lại.”',
      '“Tahu tapi tetap mengulang. Menyesal tapi pola sama.”'
    ),
    description: tx(
      '헬스장 등록 후 한 달 만에 뜸해지는 것, 세일 때 필요 이상으로 사는 것, 반품 기간을 놓치는 것이 연간 행사처럼 반복됩니다. 나쁜 소비 패턴임을 알고 있지만 그 순간의 충동과 분위기에 매번 무너집니다. 교훈은 얻는데 행동이 바뀌지 않는 상태입니다.',
      'Gym fade after month one, sale overspending, missed returns—like an annual tradition. You know the pattern, but impulse wins each time. Lessons do not turn into action yet.',
      'ジムは1か月で薄れる、セールで買いすぎ、返品逃しが毎年のように続く。分かっているのに衝動に負ける。学びはあるが行動が変わらない。',
      '健身办卡一个月就懒、促销买多、错过退货像每年重演。你知道问题，却总输给冲动。有教训没行动。',
      '健身辦卡一個月就懶、促銷買多、錯過退貨像每年重演。你知道問題，卻總輸給衝動。有教訓沒行動。',
      'Mỏng dần sau tháng đầu ở gym, sale mua quá, lỡ hạn trả—lặp như thường niên. Biết nhưng vẫn thua xung động. Có bài học chưa đổi hành động.',
      'Gym pudar setelah sebulan, overspend saat sale, terlewat retur—berulang tiap tahun. Tahu tapi kalah impuls. Ada pelajaran belum jadi tindakan.'
    ),
    dangerLevel: tx('⭐⭐⭐☆☆ (반복 패턴 주의)', '⭐⭐⭐☆☆ (Repeating pattern—watch out)', '⭐⭐⭐☆☆（繰り返し注意）', '⭐⭐⭐☆☆（重复模式需注意）', '⭐⭐⭐☆☆（重複模式需注意）', '⭐⭐⭐☆☆ (Lặp lại—cẩn thận)', '⭐⭐⭐☆☆ (Pola berulang—waspada)'),
    representativeHistory: tx(
      '헬스장 미사용, 세일 과구매 후 후회, 반품 기간 반복 실패',
      'Unused gym, regret after sale splurges, repeat missed returns',
      'ジム未使用、セール後悔、返品失敗の繰り返し',
      '健身不去、促销后悔、反复错过退货',
      '健身不去、促銷後悔、反覆錯過退貨',
      'Gym không đi, hối hận sale, lỡ hạn trả lặp lại',
      'Gym tidak dipakai, menyesal setelah sale, retur terlewat berulang'
    ),
    futureRisk: tx(
      '올해 연말 블랙프라이데이, 새해 운동 결심, 무료 체험 신청',
      'Year-end Black Friday, New Year fitness vows, new free trials',
      '年末ブラックフライデー、新年の運動決意、新しい無料トライアル',
      '年底黑五、新年健身决心、新的免费试用',
      '年底黑五、新年健身決心、新的免費試用',
      'Cuối năm Black Friday, quyết tâm gym năm mới, trial mới',
      'Black Friday akhir tahun, niat gym tahun baru, trial baru'
    ),
    preventionBlock: tx(
      '알고 있는 것과 행동의 갭을 줄이는 게 핵심입니다. 결심보다 시스템이 필요합니다.\n\n• 헬스장 대신 3개월 단기권으로 시작하기\n• 세일 전날 살 것 목록 미리 고정하기\n• 무료 체험 신청 즉시 캘린더 해지 알림 설정',
      'Shrink the gap between knowing and doing—systems beat willpower.\n\n• Start with a 3-month pass instead of a year\n• Lock your sale list the night before\n• Set a cancel reminder the moment you start a trial',
      '知識と行動のギャップを埋めるのが核心。根性より仕組み。\n\n• 年間ではなく3か月から\n• セール前夜に買うリストを固定\n• トライアル開始と同時に解約リマインド',
      '缩小「知道」和「做到」的差距，靠系统不靠决心。\n\n• 先试三个月卡别直接年卡\n• 大促前夜写好必买清单\n• 一点试用就设取消提醒',
      '縮小「知道」和「做到」的差距，靠系統不靠決心。\n\n• 先試三個月卡別直接年卡\n• 大促前夜寫好必買清單\n• 一點試用就設取消提醒',
      'Thu hẹp khoảng cách biết và làm—cần hệ thống hơn ý chí.\n\n• Thử vé 3 tháng thay vì cả năm\n• Khóa danh sách mua trước đêm sale\n• Bật nhắc hủy ngay khi bắt trial',
      'Perkecil jarak tahu dan lakukan—sistem mengalahkan tekad.\n\n• Mulai paket 3 bulan, bukan tahunan\n• Kunci daftar belanja malam sebelum sale\n• Set pengingat batal saat mulai trial'
    ),
    todayTodo: tx(
      '반복되는 흑역사 패턴 1가지만 골라서 구체적인 차단 시스템 만들기',
      'Pick one repeating slip-up and build a concrete block for it.',
      '繰り返す黒歴史パターンを1つだけ選び、具体的なブロックを作る。',
      '只选一个反复出现的坑，做一套具体拦截方案。',
      '只選一個反覆出現的坑，做一套具體攔截方案。',
      'Chọn một mô hình lặp lại và làm hệ thống chặn cụ thể.',
      'Pilih satu pola berulang dan buat sistem pemblokiran konkret.'
    ),
  },
  {
    type: 'Type4',
    emoji: '🔥',
    title: tx('분위기에 지는, 충동 과열형', 'Heat-of-the-moment impulse type', '雰囲気負け・衝動過熱タイプ', '氛围上头冲动型', '氛圍上頭衝動型', 'Kiểu bốc đồng theo vibe', 'Tipe impuls karena suasana'),
    shortDescription: tx(
      '「그 순간의 분위기와 감정이 지갑을 엽니다。」',
      '“Mood and emotion open your wallet in the moment.”',
      '「その瞬間の空気と感情が財布を開ける。」',
      '「当下气氛和情绪会替你刷卡。」',
      '「當下氣氛和情緒會替你刷卡。」',
      '“Không khí và cảm xúc lúc đó mở ví bạn.”',
      '“Suasana dan emosi di saat itu yang membuka dompet.”'
    ),
    description: tx(
      '홈쇼핑 「마감 3분 전」 카운트다운, 라이브커머스 호스트의 열정, 블랙프라이데이 타이머. 이런 긴박한 분위기에서 냉정함을 유지하는 게 유독 어렵습니다. 나중에 돌아보면 「내가 왜 이걸 샀지?」 싶은 물건들이 집 어딘가에 있습니다. 정보보다 분위기와 감정으로 구매 결정이 내려지는 타입입니다.',
      'TV countdowns, live hosts, Black Friday timers—pressure makes it hard to stay cool. Later you wonder why you bought things that sit in a corner. Decisions ride mood more than facts.',
      'テレビの「残り3分」、ライブの熱量、BFタイマー。緊迫感で冷静さが保てない。あとで「なぜ買った？」な物が家にある。情報より感情で買うタイプ。',
      '电视「最后三分钟」、直播热情、黑五倒计时——紧张氛围让人难冷静。事后家里堆着「为啥买这个」。做决定靠情绪多于信息。',
      '電視「最後三分鐘」、直播熱情、黑五倒計時——緊張氛圍讓人難冷靜。事後家裡堆著「為啥買這個」。做決定靠情緒多於資訊。',
      'Đếm ngược TV, host live, đồng hồ Black Friday—khó giữ lạnh. Sau đó thứ không hiểu sao mua nằm góc nhà. Quyết định theo cảm xúc hơn thông tin.',
      'Hitung mundur TV, host live, timer Black Friday—tekanan bikin susah tenang. Barang “kenapa beli ini” menganggur di rumah. Keputusan dari emosi bukan fakta.'
    ),
    dangerLevel: tx('⭐⭐⭐⭐☆ (충동 상황 노출 시 고위험)', '⭐⭐⭐⭐☆ (High risk when hype hits)', '⭐⭐⭐⭐☆（煽りに弱い）', '⭐⭐⭐⭐☆（容易被氛围带跑）', '⭐⭐⭐⭐☆（容易被氛圍帶跑）', '⭐⭐⭐⭐☆ (Rủi ro cao khi bị kích)', '⭐⭐⭐⭐☆ (Risiko tinggi saat panas)'),
    representativeHistory: tx(
      '홈쇼핑 충동구매, 라이브커머스 분위기에 휩쓸림, 블랙프라이데이 멘붕 명세서',
      'TV impulse buys, livestream hype, Black Friday bill shock',
      'テレビ通販の衝動、ライブに流される、BF明細でメンタル崩壊',
      '电视购物冲动、直播上头、黑五账单崩溃',
      '電視購物衝動、直播上頭、黑五帳單崩潰',
      'Mua ngẫu hình TV, theo livestream, shock bill Black Friday',
      'Belanja impuls TV, terbawa live, kaget tagihan Black Friday'
    ),
    futureRisk: tx(
      '다음 라이브커머스 방송, 다가오는 시즌 세일 이벤트',
      'The next live show, the next seasonal sale',
      '次のライブ、次のシーズンセール',
      '下一场直播、下一季大促',
      '下一場直播、下一季大促',
      'Buổi live tiếp, đợt sale mùa tới',
      'Live berikutnya, sale musim berikutnya'
    ),
    preventionBlock: tx(
      '충동 상황 자체를 차단하는 것이 가장 효과적입니다.\n\n• 홈쇼핑·라이브커머스 알림 전체 OFF\n• 구매 전 「24시간 대기」 규칙 적용\n• 카드 대신 계좌 이체만 허용하는 날 지정\n• 「마감 임박」 문구 보이면 자동으로 창 닫기',
      'Block the hype at the source.\n\n• Turn off TV/live alerts\n• 24-hour wait before buying\n• Pick days for bank transfer only—no card\n• Close tabs when you see “ending soon”',
      '煽り自体を断つのが効く。\n\n• TV/ライブ通知オフ\n• 購入前24時間ルール\n• カード禁止日を作る\n•「まもなく終了」は閉じる',
      '从源头挡住上头。\n\n• 关掉电视/直播通知\n• 购物前强制等24小时\n• 设「只转账不刷卡」日\n• 看到「即将结束」就关页面',
      '從源頭擋住上頭。\n\n• 關掉電視/直播通知\n• 購物前強制等24小時\n• 設「只轉帳不刷卡」日\n• 看到「即將結束」就關頁面',
      'Chặn cảm giác “nóng” từ gốc.\n\n• Tắt thông báo TV/live\n• Quy tắc chờ 24h trước mua\n• Ngày chỉ chuyển khoản, không thẻ\n• Thấy “sắp hết” là đóng tab',
      'Blokir suasana panas dari sumber.\n\n• Matikan notifikasi TV/live\n• Aturan tunggu 24 jam sebelum beli\n• Hari khusus transfer bank tanpa kartu\n• Tutup saat ada “segera berakhir”'
    ),
    todayTodo: tx(
      '쇼핑 앱 푸시 알림 전체 끄기 (5분이면 충분)',
      'Turn off all shopping app push alerts—five minutes.',
      'ショッピングアプリのプッシュ通知を全部オフ（5分）',
      '关掉所有购物 App 推送（五分钟就够）',
      '關掉所有購物 App 推播（五分鐘就夠）',
      'Tắt hết push app mua sắm—5 phút.',
      'Matikan semua push aplikasi belanja—5 menit.'
    ),
  },
  {
    type: 'Type5',
    emoji: '💨',
    title: tx(
      '시작은 야무지게 포기는 쿨하게, 작심삼일 소비형',
      'Big start, quiet quit—three-day motivation spender',
      '始まりは派手、続かない三日坊主タイプ',
      '开局很猛三天就凉型',
      '開局很猛三天就涼型',
      'Bắt đầu rầm rộ vài ngày là hết',
      'Mulai semangat, beberapa hari sudah berhenti'
    ),
    shortDescription: tx(
      '「준비물은 완벽한데 실행이 없는 사람입니다。」',
      '“Your gear is perfect—your follow-through is not.”',
      '「準備は完璧。実行がない人。」',
      '「装备齐全，行动缺席。」',
      '「裝備齊全，行動缺席。」',
      '“Đồ đầy đủ—hành động thì không.”',
      '“Perlengkapan lengkap—eksekusi tidak ada.”'
    ),
    description: tx(
      '연초 플래너 구매 후 3월 전에 그만두기, 자기계발 강의 결제 후 1강만 듣기, 운동 장비 사놓고 인테리어 소품 되기. 새로운 것을 시작하는 설렘에 돈을 쓰는데 그 설렘이 3일을 못 넘기는 패턴이 반복됩니다. 시작 비용은 항상 발생하고 결과물은 거의 없는 상태입니다.',
      'Planner in January, quit before March. Course paid, one lecture watched. Gear becomes decor. You spend on the thrill of starting, but the thrill dies in days. Startup costs show up; results rarely do.',
      '年始の手帳は3月前に挫折。講座は1講義だけ。器具はインテリア化。始める高揚にお金を使うが3日で切れる。コストだけ残る。',
      '年初手帐三月前放弃，课买了只听一节，器材变摆设。钱花在「开始」的兴奋上，兴奋撑不过三天。总有启动成本，少见结果。',
      '年初手帳三月前放棄，課買了只聽一節，器材變擺設。錢花在「開始」的興奮上，興奮撐不過三天。總有啟動成本，少見結果。',
      'Planner đầu năm bỏ trước tháng 3. Khóa học chỉ xem bài 1. Đồ tập thành trang trí. Tiền cho cảm giác bắt đầu—vài ngày là hết. Chi phí có, kết quả hiếm.',
      'Planner awal tahun berhenti sebelum Maret. Kursus cukup satu materi. Alat jadi dekor. Uang untuk sensasi memulai—tidak bertahan lama. Biaya ada, hasil jarang.'
    ),
    dangerLevel: tx('⭐⭐⭐⭐☆ (새 시작 결심 시 고위험)', '⭐⭐⭐⭐☆ (High risk on “fresh start” days)', '⭐⭐⭐⭐☆（新しい決意のとき高リスク）', '⭐⭐⭐⭐☆（下决心重新开始时高风险）', '⭐⭐⭐⭐☆（下決心重新開始時高風險）', '⭐⭐⭐⭐☆ (Rủi ro cao lúc “làm mới”)', '⭐⭐⭐⭐☆ (Risiko tinggi saat “mulai baru”)'),
    representativeHistory: tx(
      '연초 플래너 미사용, 강의 결제 후 1강, 운동 장비 인테리어 전락, 외국어 학습 앱 3일',
      'Unused New Year planner, one lecture in, gear as decor, language app for three days',
      '年始手帳未使用、講座は1回、器具は置物、語学アプリ3日',
      '年初手帐吃灰、课只听一节、器材当摆设、外语 App 三天',
      '年初手帳吃灰、課只聽一節、器材當擺設、外語 App 三天',
      'Sổ đầu năm không dùng, khóa 1 bài, đồ tập làm cảnh, app ngoại ngữ 3 ngày',
      'Planner tidak dipakai, kursus satu bab, alat jadi pajangan, app bahasa 3 hari'
    ),
    futureRisk: tx(
      '연초·계절 변화·생일 등 「새 시작」을 결심하는 모든 타이밍',
      'New Year, season changes, birthdays—any “fresh start” mood',
      '年始・季節の変わり目・誕生日など「新しい始まり」のタイミング全般',
      '年初、换季、生日等所有「重新开始」时刻',
      '年初、換季、生日等所有「重新開始」時刻',
      'Đầu năm, đổi mùa, sinh nhật—mọi lúc “bắt đầu mới”',
      'Tahun baru, ganti musim, ulang tahun—momen “mulai segar”'
    ),
    preventionBlock: tx(
      '시작 전 준비물 구매를 한 달 미루기. 진짜 필요하면 한 달 뒤에도 사게 됩니다.\n\n• 강의·책은 먼저 도서관이나 유튜브 무료 버전으로 3일 테스트\n• 플래너는 빈 노트로 1주일 먼저 써보기\n• 운동은 등록 전 2주 무료 체험 먼저\n• 「준비물 쇼핑 = 이미 한 것 같은 착각」 경계하기',
      'Delay gear shopping one month—if it still matters, you will still want it.\n\n• Try library or free YouTube for three days before paying for courses\n• Use a blank notebook for a week before a fancy planner\n• Two-week gym trial before you commit\n• Watch the illusion that shopping equals progress',
      '準備購入は1か月遅らせる。本当ならその後も買う。\n\n• 講座・本は図書館や無料動画で3日\n• 手帳の前に白紙ノート1週間\n• ジムは2週間トライアル\n•「買った＝やった」錯覚に注意',
      '装备先推迟一个月，真需要一个月后还会想买。\n\n• 课和书先用图书馆或免费视频试三天\n• 手帐前先空白本写一周\n• 健身先两周试用\n• 警惕「买装备＝已努力」的错觉',
      '裝備先推遲一個月，真需要一個月後還會想買。\n\n• 課和書先用圖書館或免費影片試三天\n• 手帳前先空白本寫一週\n• 健身先兩週試用\n• 警惕「買裝備＝已努力」的錯覺',
      'Hoãn mua đồ chuẩn bị một tháng—nếu cần thật sau đó vẫn mua.\n\n• Khóa/sách: thư viện hoặc YouTube miễn phí 3 ngày\n• Planner: sổ trắng một tuần trước\n• Gym: trial 2 tuần\n• Cảnh giác ảo giác “mua là đã làm”',
      'Tunda beli perlengkapan sebulan—jika masih perlu, nanti tetap beli.\n\n• Kursus/buku: perpustakaan atau YouTube gratis 3 hari\n• Planner: buku kosong dulu seminggu\n• Gym: trial 2 minggu\n• Waspada ilusi “beli = sudah beraksi”'
    ),
    todayTodo: tx(
      '집에 있는 안 쓴 자기계발 용품 목록 작성. 있으면 그것부터 쓰기 시작',
      'List unused self-improvement stuff at home—start with what you already own.',
      '家にある未使用の自己啓発グッズをリスト化。あるならそれから使う。',
      '列出家裡吃灰的自我提升用品，有就先用起来。',
      '列出家裡吃灰的自我提升用品，有就先用起來。',
      'Liệt kê đồ tự phát triển chưa dùng—dùng trước đã có.',
      'Daftar perlengkapan self-improvement yang menganggur—pakai yang ada dulu.'
    ),
  },
  {
    type: 'Type6',
    emoji: '💀',
    title: tx('흑역사가 곧 나인, 종합 흑역사 만렙', 'You are the slip-up—max-level dark history', '黒歴史そのもの・フルコンボタイプ', '黑历史本人，全能型踩坑王', '黑歷史本人，全能型踩坑王', 'Bạn là “hố đen”—full combo', 'Kamu adalah riwayat gelap—kombo penuh'),
    shortDescription: tx(
      '「이 테스트의 모든 흑역사를 최소 한 번씩은 겪어본 사람입니다。」',
      '“You have hit basically every slip-up in this quiz at least once.”',
      '「このテストの黒歴史をだいたい一通り経験した人。」',
      '「这测试里的坑你基本全踩过一遍。」',
      '「這測驗裡的坑你基本全踩過一遍。」',
      '“Các “hố đen” trong bài này bạn gần như đều gặp.”',
      '“Hampir semua jebakan di tes ini pernah kamu alami.”'
    ),
    description: tx(
      '헬스장 미사용, 구독료 방치, 홈쇼핑 충동구매, 반품 기간 실패, 세일 과구매, 대량 구매 후 폐기, 플래너 미사용이 전부 해당될 수 있습니다. 흑역사의 종류와 빈도가 모두 최상위 구간입니다. 그런데 사실 이 결과가 나온 사람들이 가장 솔직하게 답한 사람들입니다. 자기 인식이 정확하다는 뜻이고, 그게 변화의 시작입니다.',
      'Unused gym, neglected subs, TV impulse buys, missed returns, sale binges, bulk waste, dusty planners—you may have done it all. Frequency and variety sit at the top. People who get this result often answered most honestly. Clear self-awareness is where change starts.',
      'ジム放置、サブスク放置、テレビ衝動、返品失敗、セール買いすぎ、大量廃棄、手帳未使用…全部あり得る。種類も頻度もトップ帯。ただしこの結果は正直に答えた人に出やすい。自己認識が変化のスタート。',
      '健身吃灰、订阅忘关、电视冲动、错过退货、促销囤货、大量浪费、手帐吃灰——你可能全中。种类和频率都拉满。拿到这个结果的人往往答得最诚实，自知才是改变的起点。',
      '健身吃灰、訂閱忘關、電視衝動、錯過退貨、促銷囤貨、大量浪費、手帳吃灰——你可能全中。種類和頻率都拉滿。拿到這個結果的人往往答得最誠實，自知才是改變的起點。',
      'Gym bỏ hoang, bỏ quên sub, mua ngẫu hình TV, lỡ hạn trả, sale quá tay, vứt đồ, sổ không dùng—có thể đủ cả. Tần suất và loại đều cao. Kết quả này thường đến với người trả lời thật nhất—nhận ra bản thân là khởi đầu thay đổi.',
      'Gym tidak dipakai, langganan terbengkalai, impuls TV, retur terlewat, borong sale, buang stok, planner menganggur—mungkin semua kena. Variasi dan frekuensi puncak. Hasil ini sering untuk yang paling jujur—sadar diri adalah awal perubahan.'
    ),
    dangerLevel: tx('⭐⭐⭐⭐⭐ (전방위 고위험)', '⭐⭐⭐⭐⭐ (All-around high risk)', '⭐⭐⭐⭐⭐（全方位ハイリスク）', '⭐⭐⭐⭐⭐（全方位高风险）', '⭐⭐⭐⭐⭐（全方位高風險）', '⭐⭐⭐⭐⭐ (Rủi ro toàn diện)', '⭐⭐⭐⭐⭐ (Risiko menyeluruh)'),
    representativeHistory: tx(
      '위에 나온 것 전부 해당 가능. 본인만의 흑역사도 있을 수 있음',
      'Everything above may apply—plus your own greatest hits.',
      '上記は全部当てはまる可能性。自分だけの黒歴史もあるかも。',
      '上面都可能中招，你还可能有自己的独家糗事。',
      '上面都可能中招，你還可能有自己的獨家糗事。',
      'Có thể trúng hết trên—và còn “hố” riêng của bạn.',
      'Bisa semua di atas—plus cerita unikmu sendiri.'
    ),
    futureRisk: tx('사실상 모든 소비 상황이 잠재적 흑역사', 'Almost any spending moment can become a slip-up.', 'ほぼどの消費シーンも黒歴史の種になり得る。', '几乎任何消费场景都可能变坑。', '幾乎任何消費場景都可能變坑。', 'Hầu hết tình huống tiêu tiền đều có thể thành hố.', 'Hampir setiap momen belanja bisa jadi lubang.'),
    preventionBlock: tx(
      '한꺼번에 다 고치려 하면 오히려 포기하게 됩니다. 딱 하나만 먼저 시작하세요.\n\n• 이번 주: 자동결제 목록 조회 후 안 쓰는 구독 1개만 해지\n• 이번 달: 충동구매 전 24시간 대기 규칙 1번 성공하기\n• 이번 분기: 지출 기록 앱으로 소비 패턴 파악하기\n• 연간: 흑역사 하나씩 줄이기. 올해 안에 3개 제거 목표',
      'Fixing everything at once backfires—start with one win.\n\n• This week: review auto-pay; cancel one unused sub\n• This month: succeed once at the 24-hour wait rule before impulse buys\n• This quarter: track spending in an app to see patterns\n• This year: remove three recurring slip-ups',
      '全部いっぺんは挫折する。まず一つ。\n\n•今週：自動課金を見て不要サブを1つ解約\n•今月：衝動買い前24時間を一度成功\n•今四半期：家計アプリで傾向把握\n•今年：黒歴史を3つ減らす目標',
      '想一次全改容易放弃，先赢一个小目标。\n\n• 本周：查清自动扣款，取消一个不用的订阅\n• 本月：冲动购物前成功执行一次24小时等待\n• 本季：用记账 App 看清模式\n• 今年：目标减少三个反复出现的坑',
      '想一次全改容易放棄，先贏一個小目標。\n\n• 本週：查清自動扣款，取消一個不用的訂閱\n• 本月：衝動購物前成功執行一次24小時等待\n• 本季：用記帳 App 看清模式\n• 今年：目標減少三個反覆出現的坑',
      'Sửa hết một lúc dễ bỏ cuộc—bắt đầu một việc.\n\n• Tuần này: xem trừ tự động, hủy 1 gói không dùng\n• Tháng này: thành công 1 lần quy tắc chờ 24h trước mua ngẫu hứng\n• Quý này: dùng app chi tiêu để thấy mô hình\n• Năm nay: bớt 3 “hố” lặp lại',
      'Memperbaiki semua sekaligus sering gagal—mulai satu kemenangan.\n\n• Minggu ini: cek pembayaran otomatis, batalkan satu langganan tidak terpakai\n• Bulan ini: berhasil sekali aturan tunggu 24 jam sebelum impuls\n• Kuartal ini: catat pengeluaran untuk melihat pola\n• Tahun ini: kurangi tiga kesalahan berulang'
    ),
    todayTodo: tx(
      '지금 당장 구독 서비스 목록 조회. 단 한 개만 해지해도 이미 시작입니다',
      'Open your subscription list right now—canceling just one is a start.',
      '今すぐサブスク一覧を開く。1つ解約でもスタート。',
      '现在就打开订阅列表，只取消一个也算开始。',
      '現在就打開訂閱列表，只取消一個也算開始。',
      'Mở danh sách đăng ký ngay—hủy một cái cũng là bắt đầu.',
      'Buka daftar langganan sekarang—membatalkan satu pun sudah mulai.'
    ),
  },
];
