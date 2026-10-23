/** 쓸데없는 걱정 TOP3 — phase3-needless-worry-top3 · 12문항 4지선다 · 6항목 상위 3개 */

export type Phase3NeedlessWorryLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';

export type Phase3NeedlessWorryText = Record<Phase3NeedlessWorryLocaleKey, string>;

export type Phase3NeedlessWorryId = 1 | 2 | 3 | 4 | 5 | 6;

export type Phase3NeedlessWorryFamilyId = 'mind' | 'people' | 'reality' | 'balance';

function T(
  ko: string,
  en: string,
  ja: string,
  zhCN: string,
  zhTW: string,
  vi: string,
  id: string
): Phase3NeedlessWorryText {
  return { ko, en, ja, 'zh-CN': zhCN, 'zh-TW': zhTW, vi, id };
}

function pick(text: Phase3NeedlessWorryText, locale: string): string {
  const loc = locale as Phase3NeedlessWorryLocaleKey;
  return text[loc] || text.ko;
}

export interface Phase3NeedlessWorryOption {
  text: Phase3NeedlessWorryText;
  category: Phase3NeedlessWorryId;
}

export interface Phase3NeedlessWorryQuestion {
  id: number;
  question: Phase3NeedlessWorryText;
  options: Phase3NeedlessWorryOption[];
}

export interface Phase3NeedlessWorryCard {
  id: Phase3NeedlessWorryId;
  emoji: string;
  animal: Phase3NeedlessWorryText;
  name: Phase3NeedlessWorryText;
  family: Exclude<Phase3NeedlessWorryFamilyId, 'balance'>;
  /** 동점일 때 앞서는 순서. 작을수록 상위 */
  tieRank: number;
  protects: Phase3NeedlessWorryText;
  strength: Phase3NeedlessWorryText;
  grows: Phase3NeedlessWorryText;
  letGo: Phase3NeedlessWorryText;
  comfort: Phase3NeedlessWorryText;
  oneLiner: Phase3NeedlessWorryText;
  note: Phase3NeedlessWorryText;
  barColor: string;
}

export interface Phase3NeedlessWorryFamily {
  id: Phase3NeedlessWorryFamilyId;
  emoji: string;
  title: Phase3NeedlessWorryText;
  description: Phase3NeedlessWorryText;
  practice: Phase3NeedlessWorryText;
  shareLine: Phase3NeedlessWorryText;
}

export interface Phase3NeedlessWorryRanked {
  card: Phase3NeedlessWorryCard;
  score: number;
  rank: number;
}

export interface Phase3NeedlessWorryOutcome {
  ranked: Phase3NeedlessWorryRanked[];
  top3: Phase3NeedlessWorryRanked[];
  closeFourth: Phase3NeedlessWorryRanked | null;
  family: Phase3NeedlessWorryFamily;
  shareLine: string;
}

const STEM = T("더 자주 떠오르는 걱정은?", "Which worry shows up more often?", "よく浮かんでくる心配は？", "哪个担心更常冒出来？", "哪個擔心更常冒出來？", "Nỗi lo nào hay hiện ra hơn?", "Khawatir mana yang lebih sering muncul?");

function q(id: number, options: Array<[Phase3NeedlessWorryText, Phase3NeedlessWorryId]>): Phase3NeedlessWorryQuestion {
  return {
    id,
    question: STEM,
    options: options.map(([text, category]) => ({ text, category })),
  };
}

export const phase3NeedlessWorryTop3Questions: Phase3NeedlessWorryQuestion[] = [
  q(1, [
    [T("내가 한 말이 상대에게 어떻게 보였을지 곱씹는다", "I replay how what I said might have come across", "自分の言ったことが相手にどう見えたか、何度も思い返す", "反复想自己那句话在对方眼里是什么意思", "反覆想自己那句話在對方眼裡是什麼意思", "Mình cứ nghĩ lại câu mình nói trông thế nào với người kia", "Aku memutar ulang, ucapanku tadi kelihatan seperti apa"), 2],
    [T("이번 달 지출이 늘어난 건 아닌지 계산해 본다", "I run the numbers to see if I spent more this month", "今月の出費が増えてないか計算してみる", "算一算这个月是不是花多了", "算一算這個月是不是花多了", "Mình tính lại xem tháng này có tiêu nhiều hơn không", "Aku hitung lagi, pengeluaran bulan ini naik atau tidak"), 4],
    [T("별것 아닌 몸의 신호가 큰 병은 아닐까 검색해 본다", "I look up a tiny body signal in case it is something serious", "大したことない体のサインが大きな病気じゃないか検索する", "一点小症状也要搜会不会是大病", "一點小症狀也要搜會不會是大病", "Một tín hiệu nhỏ trên người cũng khiến mình tìm xem có phải bệnh nặng", "Sinyal kecil di tubuh langsung kucari, jangan-jangan penyakit besar"), 5],
    [T("보낸 메시지에 오타가 있었던 건 아닌지 다시 확인한다", "I reopen a sent message to check for a typo", "送ったメッセージに誤字がなかったか、もう一度確認する", "再打开已发送的消息，看有没有打错字", "再打開已傳送的訊息，看有沒有打錯字", "Mình mở lại tin đã gửi để xem có gõ nhầm không", "Aku buka lagi pesan yang sudah terkirim, takut ada salah ketik"), 6],
  ]),
  q(2, [
    [T("연인이 조금 조용하면 마음이 변한 건 아닌지 걱정한다", "When my partner goes quiet, I worry their feelings have changed", "恋人が少し静かだと、気持ちが変わったのではと心配する", "恋人安静一点，我就担心是不是变心了", "戀人安靜一點，我就擔心是不是變心了", "Người yêu im một chút là mình lo họ đổi ý", "Pacar sedikit diam, aku langsung khawatir perasaannya berubah"), 3],
    [T("잠을 설친 날이면 몸이 상할까 봐 걱정한다", "After a bad night of sleep, I worry I have worn my body out", "眠れなかった日は、体を壊すんじゃないかと心配する", "一夜没睡好，就担心身体会不会垮", "一夜沒睡好，就擔心身體會不會垮", "Mất ngủ một đêm là mình lo cơ thể hỏng", "Semalam susah tidur, aku khawatir badan rusak"), 5],
    [T("중요한 일정에서 실수하면 어쩌나 미리 걱정한다", "I worry ahead of time that I will mess up an important plan", "大事な予定で失敗したらどうしようと、先に心配する", "还没到重要日程，就先担心自己会出错", "還沒到重要日程，就先擔心自己會出錯", "Chưa tới lịch quan trọng đã lo mình làm hỏng", "Belum sampai jadwal penting, sudah khawatir salah"), 6],
    [T("처음 가는 모임에서 어색해 보일까 봐 걱정한다", "I worry I will look awkward at a gathering where I know no one", "初めての集まりで気まずく見えないか心配する", "担心第一次去的聚会里自己看起来很尴尬", "擔心第一次去的聚會裡自己看起來很尷尬", "Lo mình trông ngượng ở buổi gặp lần đầu", "Khawatir terlihat canggung di kumpul-kumpul yang baru pertama"), 2],
  ]),
  q(3, [
    [T("이미 지나간 말실수가 밤에 자꾸 생각난다", "A slip of the tongue from a while ago still visits me at night", "もう終わった言い間違いは、夜になるとまた浮かぶ", "早就过去的一句错话，夜里还是会冒出来", "早就過去的一句錯話，夜裡還是會冒出來", "Câu nói hớ đã qua vẫn hiện về lúc đêm", "Salah omong yang sudah lewat masih muncul lagi malam-malam"), 6],
    [T("사진 속 내 모습을 남들이 어떻게 볼지 신경 쓰인다", "I care how I look to other people in a photo", "写真の自分を、人がどう見るかが気になる", "在意别人怎么看照片里的自己", "在意別人怎麼看照片裡的自己", "Để ý người khác nhìn mình trong ảnh thế nào", "Peduli orang melihat diriku di foto seperti apa"), 2],
    [T("친구가 답이 늦으면 내가 뭔가 잘못했나 싶다", "When a friend is slow to reply, I wonder if I did something wrong", "友達の返信が遅いと、自分が何か悪かったのかと思う", "朋友回得慢，就觉得是不是自己做错了什么", "朋友回得慢，就覺得是不是自己做錯了什麼", "Bạn trả lời chậm là mình nghĩ mình làm gì sai", "Teman balas lambat, aku merasa salah sendiri"), 3],
    [T("갑자기 큰돈이 나갈 일이 생길까 봐 불안하다", "I get uneasy that a big unexpected bill could show up", "急に大きなお金が必要になるのではと不安になる", "不安会不会突然冒出一笔大开销", "不安會不會突然冒出一筆大開銷", "Lo bất ngờ có khoản tiền lớn phải chi", "Cemas tiba-tiba ada pengeluaran besar"), 4],
  ]),
  q(4, [
    [T("노후와 생활비를 미리 걱정하게 된다", "I start worrying early about living costs and later life", "老後や生活費を、先に心配してしまう", "会提前担心以后的生活费和老了怎么办", "會提前擔心以後的生活費和老了怎麼辦", "Hay lo trước tiền sinh hoạt và lúc về già", "Sudah khawatir duluan soal biaya hidup dan hari tua"), 4],
    [T("다툰 뒤 관계가 멀어지면 어쩌나 마음이 무겁다", "After a fight, I feel heavy wondering if we will drift apart", "ケンカのあと、関係が離れないか胸が重い", "吵完架就心沉，怕关系变远", "吵完架就心沉，怕關係變遠", "Sau cãi nhau, lòng nặng vì sợ mối quan hệ xa đi", "Setelah bertengkar, hati berat takut hubungannya menjauh"), 3],
    [T("내가 하는 선택을 주변이 이상하게 볼까 마음이 쓰인다", "I wonder if people around me will find my choices weird", "自分の選択を周りが変に見ないか、気になってしまう", "在意身边的人会不会觉得我的选择很怪", "在意身邊的人會不會覺得我的選擇很怪", "Để ý người xung quanh có thấy lựa chọn của mình kỳ không", "Khawatir orang sekitar menganggap pilihanku aneh"), 2],
    [T("건강검진 결과를 기다리는 동안 마음이 조마조마하다", "Waiting on a checkup result leaves me on edge", "健康診断の結果を待つあいだ、心が落ち着かない", "等体检结果的时候心里七上八下", "等健檢結果的時候心裡七上八下", "Chờ kết quả khám là lòng thấp thỏm", "Menunggu hasil pemeriksaan, hati tidak tenang"), 5],
  ]),
  q(5, [
    [T("피곤이 며칠 이어지면 몸에 문제가 있을까 걱정한다", "If I'm tired for a few days, I worry something is wrong with my body", "疲れが数日続くと、体に問題があるのではと心配する", "累了几天，就担心身体是不是出了问题", "累了幾天，就擔心身體是不是出了問題", "Mệt vài ngày là lo cơ thể có vấn đề", "Lelah beberapa hari, langsung khawatir badan ada masalah"), 5],
    [T("큰 결정을 하고 나서 잘못 고른 건 아닌지 걱정한다", "After a big decision, I worry I picked the wrong one", "大きな決断のあと、選び間違えたのではと心配する", "做了大决定之后，担心是不是选错了", "做了大決定之後，擔心是不是選錯了", "Quyết định lớn xong lại lo mình chọn sai", "Setelah keputusan besar, khawatir salah pilih"), 6],
    [T("월급 이후 통장이 금세 비는 게 마음에 걸린다", "It bothers me how fast my account empties after payday", "給料日のあと、口座があっという間に空になるのが気になる", "发薪之后账户很快见底，这件事挂在心上", "發薪之後帳戶很快見底，這件事掛在心上", "Khó chịu vì lương vừa về tài khoản đã vơi nhanh", "Terganggu karena setelah gajian saldo cepat habis"), 4],
    [T("5년 뒤에도 지금처럼 살고 있을까 막막해진다", "I feel lost wondering if I will still be living like this in five years", "5年後も今のまま暮らしているのか、先が見えなくなる", "一想到五年后是不是还这样过，就觉得茫然", "一想到五年後是不是還這樣過，就覺得茫然", "Thấy mông lung khi nghĩ năm năm nữa mình vẫn sống như thế này", "Terasa buntu membayangkan lima tahun lagi masih hidup seperti ini"), 1],
  ]),
  q(6, [
    [T("가족의 건강 소식이 들리면 마음이 먼저 내려앉는다", "News about a family member's health sinks my mood before anything else", "家族の健康の話を聞くと、気持ちが先に沈む", "一听到家人的健康消息，心情先沉下去", "一聽到家人的健康消息，心情先沉下去", "Nghe tin sức khỏe của gia đình là lòng chùng xuống trước", "Dengar kabar kesehatan keluarga, hati langsung turun"), 5],
    [T("일에서 작은 실수를 해도 크게 번질까 불안하다", "Even a small mistake at work makes me anxious it will snowball", "仕事で小さなミスをしても、大きく広がらないか不安になる", "工作里一个小失误，也怕会闹大", "工作裡一個小失誤，也怕會鬧大", "Sai một chút ở việc cũng lo nó lan thành chuyện lớn", "Salah kecil di kerjaan, cemas jangan-jangan membesar"), 6],
    [T("지금 하는 일이 앞으로도 괜찮을지 계속 생각한다", "I keep wondering if the work I do now will still be okay later", "今の仕事がこの先も大丈夫か、何度も考える", "一直想现在这份事以后还行不行", "一直想現在這份事以後還行不行", "Cứ nghĩ việc đang làm về sau còn ổn không", "Terus memikirkan, pekerjaan sekarang nanti masih aman atau tidak"), 1],
    [T("가까운 사람과의 약속이 틀어질까 봐 걱정한다", "I worry a plan with someone close will fall through", "近い人との約束がずれないか心配する", "担心和亲近的人的约定会泡汤", "擔心和親近的人的約定會泡湯", "Lo kế hoạch với người thân thiết bị hỏng", "Khawatir janji dengan orang dekat batal"), 3],
  ]),
  q(7, [
    [T("발표나 면접에서 말이 막힐까 봐 미리 걱정한다", "I worry ahead that I will freeze in a presentation or interview", "発表や面接で言葉に詰まるのではと、先に心配する", "还没上台或面试，就先担心自己会说不出来", "還沒上台或面試，就先擔心自己會說不出來", "Chưa thuyết trình hay phỏng vấn đã lo mình bí lời", "Belum presentasi atau wawancara, sudah khawatir lidah kelu"), 6],
    [T("새로 만난 사람과 잘 이어질 수 있을까 걱정한다", "I worry a new person and I won't really click", "新しく会った人と、うまくつながれるか心配する", "担心和新认识的人能不能处得下去", "擔心和新認識的人能不能處得下去", "Lo mình và người mới gặp có nối được với nhau không", "Khawatir tidak nyambung dengan orang yang baru dikenal"), 3],
    [T("좋아하는 일에 쓰는 돈이 과한 건 아닌지 신경 쓰인다", "I wonder if I'm spending too much on something I love", "好きなことに使うお金が多すぎないか気になる", "在意花在喜欢的事上的钱是不是太多", "在意花在喜歡的事上的錢是不是太多", "Để ý tiền cho việc mình thích có quá tay không", "Peduli, uang untuk hal yang disukai jangan-jangan kebanyakan"), 4],
    [T("이대로 괜찮은 선택을 하고 있는지 미래가 불안하다", "I feel uneasy about the future, wondering if these choices are really fine", "このままでいい選択なのか、未来が不安になる", "不安这样选下去，以后到底行不行", "不安這樣選下去，以後到底行不行", "Lo tương lai, không biết lựa chọn thế này có ổn không", "Cemas masa depan, pilihan seperti ini benar-benar oke atau tidak"), 1],
  ]),
  q(8, [
    [T("막연하게 앞날이 어떻게 될지 자주 궁금하고 불안하다", "I often feel curious and uneasy about the future, without a clear reason", "先がどうなるか、ぼんやり気になって不安になることが多い", "常常说不清为什么，就是对以后感到好奇又不安", "常常說不清為什麼，就是對以後感到好奇又不安", "Hay tò mò và bất an về phía trước, dù chưa rõ chuyện gì", "Sering penasaran sekaligus cemas soal nanti, tanpa alasan yang jelas"), 1],
    [T("갑작스러운 지출에 대비하지 못할까 마음이 쓰인다", "I worry I won't be ready for a sudden expense", "急な出費に備えられないのではと、気がかりだ", "担心自己扛不住一笔突然的开销", "擔心自己扛不住一筆突然的開銷", "Để tâm mình có xoay được khoản chi bất ngờ không", "Khawatir tidak siap menghadapi pengeluaran mendadak"), 4],
    [T("가까운 사람이 나에게 실망할까 봐 걱정한다", "I worry someone close will be disappointed in me", "近い人に失望されないか心配する", "担心亲近的人对自己失望", "擔心親近的人對自己失望", "Lo người thân thiết thất vọng về mình", "Khawatir orang dekat kecewa padaku"), 3],
    [T("몸이 조금만 이상해도 오래 신경 쓰인다", "The smallest odd feeling in my body stays on my mind", "体が少し変なだけでも、しばらく気にしてしまう", "身体有一点不对劲，也会惦记很久", "身體有一點不對勁，也會惦記很久", "Cơ thể hơi lạ một chút cũng để bụng lâu", "Badan sedikit aneh saja, lama menempel di pikiran"), 5],
  ]),
  q(9, [
    [T("필요한 때 쓸 돈이 있을지 가끔 불안하다", "I sometimes feel anxious that the money won't be there when I need it", "必要なときに使えるお金があるか、ときどき不安になる", "有时会不安，需要用钱的时候手里有没有", "有時會不安，需要用錢的時候手裡有沒有", "Thỉnh thoảng lo đến lúc cần thì có tiền để dùng không", "Kadang cemas, saat perlu uangnya ada atau tidak"), 4],
    [T("나이가 들수록 기회가 줄어들까 걱정이다", "I worry the chances will shrink as I get older", "年を取るほどチャンスが減るのではと心配だ", "担心年纪越大，机会越少", "擔心年紀越大，機會越少", "Lo càng lớn tuổi cơ hội càng ít", "Khawatir makin bertambah umur, kesempatan makin sedikit"), 1],
    [T("한 번의 실수가 평판을 흔들까 봐 마음이 쓰인다", "I worry one mistake could shake how people see me", "一度のミスで評価が揺らぎないか、気になる", "在意一次失误会不会动摇别人对自己的看法", "在意一次失誤會不會動搖別人對自己的看法", "Để tâm một lần sai có làm lung lay hình ảnh mình không", "Khawatir satu kesalahan menggoyahkan penilaian orang"), 6],
    [T("내 옷차림과 말투가 어떻게 보일지 신경 쓰인다", "I notice how my clothes and the way I talk might come across", "自分の服装や話し方がどう見えるか気になる", "在意自己的穿着和说话方式看起来怎么样", "在意自己的穿著和說話方式看起來怎麼樣", "Để ý trang phục và cách nói của mình trông thế nào", "Peduli pakaian dan cara bicaraku kelihatan seperti apa"), 2],
  ]),
  q(10, [
    [T("지금의 고민이 나중에 큰 문제가 될까 앞서 걱정한다", "I worry ahead that today's problem will turn into something big later", "今の悩みが後で大きな問題にならないか、先に心配する", "提前担心眼前的烦恼以后会变成大问题", "提前擔心眼前的煩惱以後會變成大問題", "Lo trước chuyện đang bận tâm sau này thành vấn đề lớn", "Khawatir duluan, masalah sekarang nanti jadi besar"), 1],
    [T("운동을 못 한 날엔 몸이 나빠질까 봐 걱정한다", "On days I skip moving, I worry my body will get worse", "運動できなかった日は、体が悪くならないか心配する", "没运动的日子，就担心身体会变差", "沒運動的日子，就擔心身體會變差", "Ngày không vận động là lo cơ thể xuống", "Hari tidak bergerak, khawatir badan memburuk"), 5],
    [T("사람들 앞에서 내가 평가받는 느낌이 부담스럽다", "Being sized up in front of people feels like a weight", "人の前で評価されている感じが負担だ", "在人面前被打量的感觉让我有压力", "在人面前被打量的感覺讓我有壓力", "Cảm giác bị đánh giá trước mặt mọi người làm mình nặng", "Rasanya dinilai di depan orang membuatku terbeban"), 2],
    [T("친구들과의 모임 비용이 은근히 신경 쓰인다", "The cost of seeing friends quietly gets to me", "友達との集まりにかかるお金が、なんとなく気になる", "和朋友聚会的花费，会悄悄挂在心上", "和朋友聚會的花費，會悄悄掛在心上", "Chi phí gặp bạn bè cứ lặng lẽ để tâm", "Biaya kumpul dengan teman diam-diam mengganggu"), 4],
  ]),
  q(11, [
    [T("오래된 친구와 소원해질까 봐 마음이 쓰인다", "I worry an old friend and I will grow distant", "古い友達と疎遠にならないか、気がかりだ", "担心和老朋友慢慢生疏", "擔心和老朋友慢慢生疏", "Để bụng sợ bạn lâu năm thành xa lạ", "Khawatir teman lama jadi menjauh"), 3],
    [T("칭찬을 받아도 사실은 그렇지 않을까 봐 신경 쓰인다", "Even when I'm praised, I worry they don't really mean it", "褒められても、本当は違うのではと気にしてしまう", "被夸了也在意，会不会其实不是那么回事", "被誇了也在意，會不會其實不是那麼回事", "Được khen vẫn để ý, liệu có phải thật không", "Dipuji pun tetap khawatir, jangan-jangan tidak sungguh"), 2],
    [T("지금의 선택이 훗날 후회로 남을까 걱정한다", "I worry today's choice will be something I regret later", "今の選択が、あとで後悔にならないか心配する", "担心现在的选择以后会变成后悔", "擔心現在的選擇以後會變成後悔", "Lo lựa chọn bây giờ sau này thành hối tiếc", "Khawatir pilihan sekarang nanti jadi penyesalan"), 1],
    [T("잘하려다 오히려 일을 그르칠까 봐 걱정한다", "I worry that trying too hard will make me mess it up", "うまくやろうとして、かえってしくじらないか心配する", "担心太想做好，反而把事情搞砸", "擔心太想做好，反而把事情搞砸", "Lo cố làm tốt lại thành làm hỏng", "Khawatir karena ingin bagus, malah merusak"), 6],
  ]),
  q(12, [
    [T("단체 사진에서 내가 어떻게 나올지 신경 쓰인다", "I care how I will turn out in a group photo", "集合写真で自分がどう写るか気になる", "在意合照里自己会是什么样", "在意合照裡自己會是什麼樣", "Để ý mình sẽ ra sao trong ảnh nhóm", "Peduli diriku akan terlihat seperti apa di foto grup"), 2],
    [T("연말이 되면 올해 뭘 이뤘나 불안해진다", "When the year winds down, I get anxious about what I actually did", "年末になると、今年なにができたのか不安になる", "一到年底，就不安今年到底做成了什么", "一到年底，就不安今年到底做成了什麼", "Cuối năm là bất an mình đã làm được gì", "Akhir tahun tiba, cemas apa yang sebenarnya kutuntaskan"), 1],
    [T("나이가 들며 체력이 떨어질까 걱정이다", "I worry my stamina will drop as I get older", "年を取って体力が落ちないか心配だ", "担心年纪上来体力会往下掉", "擔心年紀上來體力會往下掉", "Lo tuổi tăng thì sức cũng giảm", "Khawatir stamina turun seiring umur"), 5],
    [T("연인이 나를 오래 좋아해 줄지 가끔 걱정된다", "I sometimes worry my partner won't keep liking me", "恋人がこの先も自分を好きでいてくれるか、ときどき心配になる", "有时会担心恋人能不能一直喜欢自己", "有時會擔心戀人能不能一直喜歡自己", "Thỉnh thoảng lo người yêu còn thích mình lâu không", "Kadang khawatir pacar tidak akan suka lama-lama"), 3],
  ]),
];

export const PHASE3_NEEDLESS_WORRY_MAX = 8;

const EMPTY_NOTE = T('', '', '', '', '', '', '');

export const phase3NeedlessWorryCards: Phase3NeedlessWorryCard[] = [
  {
    id: 1,
    emoji: "🌫️",
    animal: T("올빼미", "Owl", "フクロウ", "猫头鹰", "貓頭鷹", "Cú", "Burung hantu"),
    name: T("미래", "The future", "未来", "未来", "未來", "Tương lai", "Masa depan"),
    family: "mind",
    tieRank: 1,
    protects: T("앞날을 잘 살고 싶은 마음, 준비하는 성실함", "Wanting a good life ahead, and the discipline to prepare", "これからをよく生きたい気持ちと、備えるまじめさ", "想把以后过好的心，和提前准备的认真", "想把以後過好的心，和提前準備的認真", "Muốn sống tốt phía trước, và sự chỉn chu để chuẩn bị", "Ingin hidup baik ke depan, dan kesungguhan untuk bersiap"),
    strength: T("멀리 보고 미리 대비하는 통찰", "You see far and get ready early", "遠くを見て、先に備える目", "看得远，也提前准备", "看得遠，也提前準備", "Nhìn xa và chuẩn bị trước", "Melihat jauh dan bersiap lebih dulu"),
    grows: T("아직 오지 않은 일을 단정하며 밤늦게까지 이어짐", "It runs late, treating something that hasn't happened as if it already has", "まだ来ていないことを決めつけて、夜遅くまで続く", "把还没发生的事说死，一直缠到深夜", "把還沒發生的事說死，一直纏到深夜", "Kết luận chuyện chưa tới, rồi kéo đến khuya", "Menganggap hal yang belum terjadi sudah pasti, sampai larut malam"),
    letGo: T("걱정을 오늘 할 수 있는 한 가지로 바꿔 적고, 나머지는 내일로 미루기", "Turn the worry into one thing you can do today. Leave the rest for tomorrow.", "心配を「今日できる一つ」に書き換えて、残りは明日に回す", "把担心写成今天能做的一件事，剩下的留给明天", "把擔心寫成今天能做的一件事，剩下的留給明天", "Đổi nỗi lo thành một việc làm được hôm nay, phần còn lại để ngày mai", "Ubah khawatir jadi satu hal yang bisa dikerjakan hari ini. Sisanya besok."),
    comfort: T("미래를 걱정하는 건 잘 살고 싶어서야. 오늘 한 가지만 하자", "You worry about the future because you want to live it well. Just do one thing today.", "未来を心配するのは、よく生きたいから。今日は一つだけでいい", "担心未来，是因为想过好。今天只做一件就好", "擔心未來，是因為想過好。今天只做一件就好", "Lo tương lai vì muốn sống tốt. Hôm nay làm một việc thôi.", "Khawatir masa depan karena ingin hidup baik. Hari ini satu hal saja."),
    oneLiner: T("멀리 보는 눈은 큰 자산입니다. 오늘의 한 걸음으로 걱정을 줄여 보세요", "Seeing far ahead is a real strength. Shrink the worry with one step today.", "遠くを見る目は大きな力です。今日の一歩で、心配を小さくしてみてください", "看得远是很大的本事。用今天的一步，把担心缩小一点", "看得遠是很大的本事。用今天的一步，把擔心縮小一點", "Nhìn xa là một vốn lớn. Bớt nỗi lo bằng một bước hôm nay.", "Mata yang melihat jauh itu modal besar. Kecilkan khawatir dengan satu langkah hari ini."),
    note: EMPTY_NOTE,
    barColor: "#6366f1",
  },
  {
    id: 2,
    emoji: "👀",
    animal: T("사슴", "Deer", "シカ", "鹿", "鹿", "Hươu", "Rusa"),
    name: T("남의 시선", "What people think", "人の目", "别人的眼光", "別人的眼光", "Ánh mắt người khác", "Pandangan orang"),
    family: "people",
    tieRank: 3,
    protects: T("관계 속 배려와 좋은 인상을 남기고 싶은 마음", "Care for the people around you, and wanting to leave a good impression", "関係のなかで気を配り、いい印象を残したい気持ち", "在关系里体贴别人，也想留下好印象", "在關係裡體貼別人，也想留下好印象", "Muốn để ý người khác và để lại ấn tượng tốt", "Peduli dalam hubungan, dan ingin meninggalkan kesan yang baik"),
    strength: T("상대를 존중하고 분위기를 살피는 섬세함", "You respect people and read the room", "相手を尊重し、空気を読む細かさ", "尊重对方，也看得出来气氛", "尊重對方，也看得出來氣氛", "Tôn trọng người khác và đọc được không khí", "Menghargai orang lain dan membaca suasana"),
    grows: T("남들이 나를 계속 평가한다고 느낌", "It feels like people keep grading you", "人がずっと自分を評価しているように感じる", "觉得别人一直在给自己打分", "覺得別人一直在給自己打分", "Cảm giác mọi người cứ chấm điểm mình", "Terasa orang terus menilai"),
    letGo: T("사람들은 생각보다 나를 오래 보지 않는다는 점을 떠올리고, 내가 편한 선택 한 가지 해 보기", "People look at you for less time than you think. Try one choice that feels easier for you.", "人は思ったほど自分を見ていない。自分が楽な選択を一つやってみる", "别人看你的时间比你想的短。选一件让自己舒服的事试试", "別人看你的時間比你想的短。選一件讓自己舒服的事試試", "Người ta nhìn mình ngắn hơn mình tưởng. Thử một lựa chọn khiến mình dễ chịu.", "Orang melihatmu lebih singkat dari yang kamu kira. Coba satu pilihan yang membuatmu lebih ringan."),
    comfort: T("남도 자기 일로 바빠. 내 기준으로 한 번 골라 보자", "Everyone else is busy with their own life. Pick once by your own standard.", "相手も自分のことで忙しい。自分の基準で一度選んでみよう", "别人也忙着自己的事。按自己的标准选一次", "別人也忙著自己的事。按自己的標準選一次", "Người khác cũng bận chuyện của họ. Chọn một lần theo tiêu chí của mình.", "Orang lain juga sibuk dengan urusannya. Sekali ini pilih menurut ukuranmu."),
    oneLiner: T("섬세한 배려는 장점입니다. 내 편안함도 기준에 넣어 주세요", "That careful attention is a strength. Let your own ease count too.", "細やかな気配りは長所です。自分の楽さも基準に入れてください", "细心体贴是优点。也把自己舒不舒服算进去", "細心體貼是優點。也把自己舒不舒服算進去", "Sự tinh tế ấy là điểm mạnh. Hãy tính cả sự dễ chịu của mình.", "Kepekaan itu kelebihan. Masukkan juga rasa nyamanmu ke dalam ukurannya."),
    note: EMPTY_NOTE,
    barColor: "#e11d48",
  },
  {
    id: 3,
    emoji: "🤝",
    animal: T("펭귄", "Penguin", "ペンギン", "企鹅", "企鵝", "Cánh cụt", "Pinguin"),
    name: T("관계", "Relationships", "関係", "关系", "關係", "Mối quan hệ", "Hubungan"),
    family: "people",
    tieRank: 2,
    protects: T("소중한 사람과의 연결과 신뢰", "The bond and trust with people who matter", "大切な人とのつながりと信頼", "和重要的人之间的连接与信任", "和重要的人之間的連結與信任", "Sự gắn bó và tin cậy với người quan trọng", "Ikatan dan kepercayaan dengan orang yang berarti"),
    strength: T("관계를 소중히 여기고 마음을 쓰는 따뜻함", "You treat relationships as precious and you put your heart into them", "関係を大切にし、心を配るあたたかさ", "把关系当回事，也肯为它花心思", "把關係當回事，也肯為它花心思", "Trân trọng mối quan hệ và bỏ công cho nó", "Menghargai hubungan dan sungguh-sungguh menjaganya"),
    grows: T("작은 침묵이나 지연을 거리감으로 해석함", "A short silence or a late reply starts to feel like distance", "少しの沈黙や遅れを、距離だと読んでしまう", "把短暂的沉默或晚回，读成疏远", "把短暫的沉默或晚回，讀成疏遠", "Im lặng ngắn hoặc trả lời muộn bị đọc thành xa cách", "Diam sebentar atau balasan telat terbaca sebagai jarak"),
    letGo: T("해석 대신 \"요즘 어때?\" 한 줄로 확인하기", "Skip the story in your head. Ask \"How have you been?\" in one line.", "解釈する前に「最近どう？」の一行で確かめる", "别先解释。用一句“最近怎么样？”去确认", "別先解釋。用一句「最近怎麼樣？」去確認", "Đừng đoán. Hỏi một câu \"Dạo này sao rồi?\"", "Jangan menafsir dulu. Tanyakan satu baris, \"Belakangan bagaimana?\""),
    comfort: T("답이 늦는 이유는 수십 가지야. 물어보면 돼", "There are dozens of reasons a reply is late. You can just ask.", "返信が遅い理由は何十もある。聞けばいい", "回得慢的理由有几十种。问一句就好", "回得慢的理由有幾十種。問一句就好", "Trả lời chậm có cả chục lý do. Hỏi là được.", "Alasan balas lambat ada puluhan. Tanya saja."),
    oneLiner: T("연결을 소중히 여기는 마음은 귀합니다. 추측 대신 질문으로 확인하세요", "Caring about the connection is rare and good. Check with a question, not a guess.", "つながりを大切にする気持ちは貴重です。想像ではなく質問で確かめてください", "珍惜连接的心很可贵。用问题确认，而不是用猜测", "珍惜連結的心很可貴。用問題確認，而不是用猜測", "Trân trọng sự gắn bó là điều quý. Hãy hỏi, đừng đoán.", "Menghargai ikatan itu berharga. Pastikan dengan bertanya, bukan menebak."),
    note: EMPTY_NOTE,
    barColor: "#d97706",
  },
  {
    id: 4,
    emoji: "💸",
    animal: T("다람쥐", "Squirrel", "リス", "松鼠", "松鼠", "Sóc", "Tupai"),
    name: T("돈", "Money", "お金", "钱", "錢", "Tiền", "Uang"),
    family: "reality",
    tieRank: 5,
    protects: T("안정된 생활과 미래의 선택지", "A steady life, and choices you will still have later", "安定した暮らしと、これからの選択肢", "稳一点的生活，和以后还留得住的选择", "穩一點的生活，和以後還留得住的選擇", "Một cuộc sống ổn, và những lựa chọn còn lại về sau", "Hidup yang tenang, dan pilihan yang masih ada nanti"),
    strength: T("계획적으로 모으고 대비하는 현실 감각", "You save with a plan and you see what is real", "計画して貯め、備える現実感覚", "有计划地攒，也看得到现实", "有計畫地攢，也看得到現實", "Biết dành dụm có kế hoạch và nhìn được thực tế", "Menabung dengan rencana dan melihat kenyataan"),
    grows: T("필요 이상으로 불안해 지금의 즐거움까지 아낌", "The worry gets bigger than it needs to, and even today's fun feels like too much", "必要以上に不安になって、今の楽しみまで惜しんでしまう", "不安超过了需要，连眼前的高兴也舍不得", "不安超過了需要，連眼前的高興也捨不得", "Lo nhiều hơn mức cần, đến niềm vui hiện tại cũng tiếc", "Cemas lebih dari yang perlu, sampai kesenangan sekarang ikut disayangkan"),
    letGo: T("월 고정 지출, 저축, 즐길 돈을 3칸으로 나눠 즐길 돈은 마음 편히 쓰기", "Split the month into bills, savings, and money for fun. Spend the fun part without a speech.", "固定費、貯金、楽しむお金の3つに分けて、楽しむ分は気にせず使う", "把月支出分成固定开销、储蓄和好玩的钱。好玩的那份，安心花", "把月支出分成固定開銷、儲蓄和好玩的錢。好玩的那份，安心花", "Chia tháng thành chi cố định, để dành, và tiền vui. Phần vui thì tiêu cho nhẹ.", "Bagi sebulan jadi tagihan, tabungan, dan uang untuk senang-senang. Bagian senang, pakai tanpa berdebat dengan diri sendiri."),
    comfort: T("준비하고 있어. 쓸 돈과 지킬 돈을 나눠 두면 돼", "You're already preparing. Just separate what you can spend from what you want to keep.", "備えてるよ。使うお金と守るお金を分けておけばいい", "你已经在准备了。把能花的和要留的分开就好", "你已經在準備了。把能花的和要留的分開就好", "Bạn đang chuẩn bị rồi. Tách tiền tiêu và tiền giữ là được.", "Kamu sudah bersiap. Pisahkan uang yang boleh dipakai dan yang ingin dijaga."),
    oneLiner: T("현실 감각은 큰 힘입니다. 즐길 몫도 계획에 넣어 주세요", "That practical sense is a real power. Put a share for enjoyment in the plan too.", "現実を見る力は大きいです。楽しむ分も計画に入れてください", "现实感是很大的力量。也给享受留一份在计划里", "現實感是很大的力量。也給享受留一份在計畫裡", "Cảm giác thực tế là sức mạnh. Hãy để một phần vui trong kế hoạch.", "Rasa nyata itu kekuatan. Sisakan juga bagian untuk menikmati di dalam rencana."),
    note: EMPTY_NOTE,
    barColor: "#059669",
  },
  {
    id: 5,
    emoji: "🍀",
    animal: T("고양이", "Cat", "ネコ", "猫", "貓", "Mèo", "Kucing"),
    name: T("건강", "Health", "健康", "健康", "健康", "Sức khỏe", "Kesehatan"),
    family: "reality",
    tieRank: 6,
    protects: T("몸을 아끼고 오래 건강하게 살고 싶은 마음", "Wanting to look after your body and stay well for a long time", "体をいたわり、長く元気でいたい気持ち", "想爱惜身体，也想长久地健康下去", "想愛惜身體，也想長久地健康下去", "Muốn giữ cơ thể và sống khỏe lâu dài", "Ingin menjaga tubuh dan tetap sehat lama"),
    strength: T("몸의 신호를 잘 알아채는 민감함", "You notice what your body is telling you", "体のサインに気づく敏感さ", "能察觉身体发出的信号", "能察覺身體發出的訊號", "Nhận ra tín hiệu cơ thể đang gửi", "Peka menangkap sinyal dari tubuh"),
    grows: T("작은 증상을 검색하며 최악을 상상함", "A small symptom gets searched, and the mind jumps to the worst", "小さな症状を検索して、最悪を想像してしまう", "一点小症状就去搜，脑子里已经是最坏的情况", "一點小症狀就去搜，腦子裡已經是最壞的情況", "Một triệu chứng nhỏ cũng bị tìm, rồi tưởng đến chuyện tệ nhất", "Gejala kecil langsung dicari, lalu pikiran meloncat ke yang terburuk"),
    letGo: T("검색 대신 수면·운동 루틴으로 몸을 돌보기", "Skip the search. Look after your body with sleep and movement.", "検索はやめて、睡眠と運動のルーティンで体をいたわる", "别再搜了，用睡眠和运动的习惯照顾身体", "別再搜了，用睡眠和運動的習慣照顧身體", "Đừng tìm nữa. Chăm cơ thể bằng ngủ đủ và vận động.", "Jangan mencari lagi. Jaga tubuh dengan tidur dan gerak."),
    comfort: T("몸을 챙기는 건 좋은 습관이야", "Looking after your body is a good habit.", "体を大事にするのはいい習慣だよ", "照顾身体是好习惯", "照顧身體是好習慣", "Chăm cơ thể là thói quen tốt.", "Merawat tubuh itu kebiasaan yang baik."),
    oneLiner: T("몸을 돌보는 마음은 귀합니다", "Caring for your body is something to keep.", "体をいたわる気持ちは、大切にしていい", "想照顾身体的心，值得留下", "想照顧身體的心，值得留下", "Muốn chăm cơ thể là điều đáng giữ.", "Ingin merawat tubuh itu patut dijaga."),
    note: EMPTY_NOTE,
    barColor: "#0284c7",
  },
  {
    id: 6,
    emoji: "⚠️",
    animal: T("거북이", "Turtle", "カメ", "乌龟", "烏龜", "Rùa", "Kura-kura"),
    name: T("실수", "Mistakes", "ミス", "失误", "失誤", "Sơ suất", "Kesalahan"),
    family: "mind",
    tieRank: 4,
    protects: T("책임감과 잘 해내고 싶은 성실함", "Responsibility, and wanting to do it well", "責任感と、きちんとやりたいまじめさ", "责任心，和想做好的认真", "責任心，和想做好的認真", "Trách nhiệm, và sự chỉn chu muốn làm tốt", "Rasa tanggung jawab, dan kesungguhan ingin melakukannya dengan baik"),
    strength: T("꼼꼼하게 확인하고 신뢰를 쌓는 힘", "You double-check, and that is how trust builds", "丁寧に確認して、信頼を積む力", "仔细核对，也因此攒下信任", "仔細核對，也因此攢下信任", "Kiểm tra kỹ, và đó là cách lòng tin được dựng", "Mengecek dengan teliti, dan dari situ kepercayaan terkumpul"),
    grows: T("작은 실수를 크게 확대하고 오래 곱씹음", "A small miss gets enlarged and replayed for a long time", "小さなミスを大きくして、長く反芻してしまう", "把小失误放大，还反复想很久", "把小失誤放大，還反覆想很久", "Một lỗi nhỏ bị phóng to và nhai đi nhai lại", "Kesalahan kecil dibesarkan dan diputar ulang lama"),
    letGo: T("실수를 사건과 나로 분리하고, 다음엔 이렇게를 한 줄만 적고 닫기", "Separate the mistake from who you are. Write one line for next time, then close it.", "ミスと自分を分けて、「次はこうする」を一行だけ書いて閉じる", "把失误和自己分开。写下“下次这样”，然后合上", "把失誤和自己分開。寫下「下次這樣」，然後合上", "Tách lỗi khỏi con người mình. Viết một dòng \"lần sau thì thế\", rồi đóng lại.", "Pisahkan kesalahan dari siapa kamu. Tulis satu baris \"lain kali begini\", lalu tutup."),
    comfort: T("실수는 일어난 일일 뿐 내가 누구인지 정하지 않아", "A mistake is something that happened. It doesn't decide who you are.", "ミスは起きた出来事で、自分が誰かを決めない", "失误只是发生过的事，不定你是谁", "失誤只是發生過的事，不定你是誰", "Sai sót chỉ là chuyện đã xảy ra, không quyết định bạn là ai.", "Kesalahan hanya kejadian yang sudah lewat. Itu tidak menentukan siapa kamu."),
    oneLiner: T("꼼꼼함은 큰 자산입니다. 한 줄 정리하고 놓아 주세요", "Being thorough is a real asset. Write one line, then let it go.", "丁寧さは大きな力です。一行にまとめて、手放してください", "细致是很大的本事。写成一行，然后放下", "細緻是很大的本事。寫成一行，然後放下", "Sự kỹ là vốn lớn. Gom một dòng rồi buông.", "Ketelitian itu modal besar. Rangkum satu baris, lalu lepaskan."),
    note: EMPTY_NOTE,
    barColor: "#7c3aed",
  },
];

export const phase3NeedlessWorryFamilies: Phase3NeedlessWorryFamily[] = [
  {
    id: "mind",
    emoji: "🌫️",
    title: T("당신의 걱정은 앞서 대비하는 마음에 있습니다.", "Your worries come from wanting to be ready early.", "あなたの心配は、先に備えたい気持ちにあります。", "你的担心，来自想提前准备好的心。", "你的擔心，來自想提前準備好的心。", "Nỗi lo của bạn đến từ việc muốn chuẩn bị trước.", "Khawatirmu datang dari ingin siap lebih dulu."),
    description: T("미래와 실수는 모두 잘하고 싶은 성실함에서 나옵니다. 이미 지난 일은 한 줄로 정리하고, 아직 오지 않은 일은 오늘의 한 걸음으로 바꿔 보세요.", "The future and mistakes both come from wanting to do well. Put what already happened into one line, and turn what hasn't happened into one step today.", "未来もミスも、うまくやりたいまじめさから来ています。過ぎたことは一行にまとめ、まだ来ていないことは今日の一歩に変えてみてください。", "未来和失误，都来自想做好的认真。已经过去的写成一行，还没来的换成今天的一步。", "未來和失誤，都來自想做好的認真。已經過去的寫成一行，還沒來的換成今天的一步。", "Tương lai và sơ suất đều đến từ việc muốn làm tốt. Việc đã qua gom một dòng, việc chưa tới đổi thành một bước hôm nay.", "Masa depan dan kesalahan sama-sama datang dari ingin melakukannya dengan baik. Yang sudah lewat dirangkum satu baris, yang belum datang diubah jadi satu langkah hari ini."),
    practice: T("지금 할 수 있는 한 가지만 하자", "Just do the one thing I can do now.", "今できる一つだけやろう", "只做现在能做的一件", "只做現在能做的一件", "Chỉ làm một việc mình làm được lúc này.", "Kerjakan satu hal yang bisa kulakukan sekarang."),
    shareLine: T("쓸데없는 걱정 TOP3: 1위 {first} 2위 {second} 3위 {third}... 앞서 대비하는 마음 계열이래ㅋㅋ 내 걱정 동물은? 결과 이미지로 프로필 바꿈!", "Top 3 needless worries: 1 {first}, 2 {second}, 3 {third}. I'm the type who worries ahead. What's your worry animal?", "いらない心配トップ3は1位{first}、2位{second}、3位{third}。先回りして備えちゃうタイプだって。あなたの心配アニマルは？", "多余的担心TOP3：第1{first}，第2{second}，第3{third}。我是提前担心型。你的担心动物是什么？", "多餘的擔心TOP3：第1{first}，第2{second}，第3{third}。我是提前擔心型。你的擔心動物是什麼？", "Top 3 nỗi lo không đáng: 1 {first}, 2 {second}, 3 {third}. Mình thuộc kiểu lo trước. Con vật nỗi lo của bạn là gì?", "3 khawatir yang tidak perlu: 1 {first}, 2 {second}, 3 {third}. Aku tipe yang khawatir duluan. Hewan khawatirmu apa?"),
  },
  {
    id: "people",
    emoji: "🤝",
    title: T("당신의 걱정은 사람과의 연결에 있습니다.", "Your worries sit in the ties you have with people.", "あなたの心配は、人とのつながりにあります。", "你的担心，落在和人的连接上。", "你的擔心，落在和人的連結上。", "Nỗi lo của bạn nằm ở sự gắn với người khác.", "Khawatirmu ada pada ikatan dengan orang lain."),
    description: T("남의 시선과 관계는 소중한 사람과 잘 지내고 싶은 마음입니다. 추측은 줄이고 짧은 확인 질문을 늘려 보세요.", "What people think, and your relationships, both come from wanting to be good to the people who matter. Guess less. Ask a short question more often.", "人の目も関係も、大切な人とよくいたい気持ちです。想像は減らして、短い確認を増やしてみてください。", "别人的眼光和关系，都是想跟重要的人好好相处。少猜一点，多问一句短的。", "別人的眼光和關係，都是想跟重要的人好好相處。少猜一點，多問一句短的。", "Ánh mắt người khác và các mối quan hệ đều đến từ muốn ở tốt với người quan trọng. Bớt đoán, thêm một câu hỏi ngắn.", "Pandangan orang dan hubungan sama-sama datang dari ingin baik dengan orang yang berarti. Kurangi menebak, tambah satu pertanyaan pendek."),
    practice: T("내가 걱정한 건 이건데, 맞는지 물어봐도 돼?", "This is what I was worried about. Can I ask if that is right?", "心配してたのはこれなんだけど、合ってるか聞いてもいい？", "我担心的是这个，可以问你是不是这样吗？", "我擔心的是這個，可以問你是不是這樣嗎？", "Mình lo chuyện này, hỏi xem có đúng không được chứ?", "Yang kukawatirkan ini. Boleh kutanya, benar atau tidak?"),
    shareLine: T("쓸데없는 걱정 TOP3: 1위 {first} 2위 {second} 3위 {third}... 사람 계열이래ㅎㅎ 내 걱정 동물은? 결과 이미지로 프로필 바꿈!", "Top 3 needless worries: 1 {first}, 2 {second}, 3 {third}. I'm the people type. What's your worry animal?", "いらない心配トップ3は1位{first}、2位{second}、3位{third}。人とのつながりタイプだって。あなたの心配アニマルは？", "多余的担心TOP3：第1{first}，第2{second}，第3{third}。我是在意人的类型。你的担心动物是什么？", "多餘的擔心TOP3：第1{first}，第2{second}，第3{third}。我是在意人的類型。你的擔心動物是什麼？", "Top 3 nỗi lo không đáng: 1 {first}, 2 {second}, 3 {third}. Mình thuộc kiểu lo cho người khác. Con vật nỗi lo của bạn là gì?", "3 khawatir yang tidak perlu: 1 {first}, 2 {second}, 3 {third}. Aku tipe yang khawatir soal orang. Hewan khawatirmu apa?"),
  },
  {
    id: "reality",
    emoji: "🍀",
    title: T("당신의 걱정은 생활의 안정에 있습니다.", "Your worries are about keeping everyday life steady.", "あなたの心配は、暮らしの安定にあります。", "你的担心，在生活稳不稳上。", "你的擔心，在生活穩不穩上。", "Nỗi lo của bạn nằm ở việc giữ cuộc sống ổn.", "Khawatirmu ada pada hidup yang tetap tenang."),
    description: T("돈과 건강은 나를 오래 지키려는 현실 감각입니다. 걱정을 루틴과 계획으로 바꿔 보세요.", "Money and health worries are your sense of how to stay okay for the long run. Turn the worry into a routine or a plan.", "お金と健康の心配は、自分を長く守ろうとする現実感覚です。心配をルーティンや計画に変えてみてください。", "钱和健康的担心，是想把自己守得更久的现实感。试着把担心换成习惯和计划。", "錢和健康的擔心，是想把自己守得更久的現實感。試著把擔心換成習慣和計畫。", "Lo tiền và sức khỏe là cảm giác thực tế muốn giữ mình lâu dài. Đổi nỗi lo thành thói quen hoặc kế hoạch.", "Khawatir soal uang dan kesehatan adalah rasa nyata ingin menjaga diri lebih lama. Ubah khawatir itu jadi rutinitas atau rencana."),
    practice: T("걱정은 계획으로 바꾸자", "Turn the worry into a plan.", "心配は計画に変えよう", "把担心换成计划", "把擔心換成計畫", "Đổi nỗi lo thành kế hoạch.", "Ubah khawatir jadi rencana."),
    shareLine: T("쓸데없는 걱정 TOP3: 1위 {first} 2위 {second} 3위 {third}... 현실 계열이래ㅋㅋ 내 걱정 동물은? 결과 이미지로 프로필 바꿈!", "Top 3 needless worries: 1 {first}, 2 {second}, 3 {third}. I'm the everyday-stability type. What's your worry animal?", "いらない心配トップ3は1位{first}、2位{second}、3位{third}。暮らしを安定させたいタイプだって。あなたの心配アニマルは？", "多余的担心TOP3：第1{first}，第2{second}，第3{third}。我是在意生活安稳的类型。你的担心动物是什么？", "多餘的擔心TOP3：第1{first}，第2{second}，第3{third}。我是在意生活安穩的類型。你的擔心動物是什麼？", "Top 3 nỗi lo không đáng: 1 {first}, 2 {second}, 3 {third}. Mình thuộc kiểu lo cho cuộc sống ổn định. Con vật nỗi lo của bạn là gì?", "3 khawatir yang tidak perlu: 1 {first}, 2 {second}, 3 {third}. Aku tipe yang khawatir soal hidup yang tenang. Hewan khawatirmu apa?"),
  },
  {
    id: "balance",
    emoji: "🎛️",
    title: T("당신의 걱정은 한 곳에 몰려 있지 않고 여러 곳에 흩어져 있습니다.", "Your worries are not piled in one place. They are spread around.", "あなたの心配は一か所に固まらず、あちこちに散らばっています。", "你的担心没有堆在一处，而是散在好几处。", "你的擔心沒有堆在一處，而是散在好幾處。", "Nỗi lo của bạn không dồn một chỗ, mà rải ở nhiều nơi.", "Khawatirmu tidak menumpuk di satu tempat. Mereka tersebar."),
    description: T("앞날, 사람, 생활 각각에서 마음이 쓰이는 지점이 있어 상황마다 걱정이 달라 보입니다. 공통점은 소중한 것을 잃고 싶지 않은 마음입니다. 걱정이 올라올 때 한 단어로 이름을 붙여 보세요.", "Something about the future, about people, and about daily life each gets a piece of your attention, so the worry looks different depending on the moment. What they share is not wanting to lose what matters. When a worry shows up, give it a one-word name.", "先のこと、人、暮らしのそれぞれに気が向くところがあって、場面ごとに心配が違って見えます。共通しているのは、大切なものを失いたくない気持ちです。心配が来たら、一語で名前をつけてみてください。", "以后、人、生活各有一块让你在意，所以担心看起来每次都不一样。共同点是不想失去要紧的东西。担心冒出来时，用一个词给它起个名字。", "以後、人、生活各有一塊讓你在意，所以擔心看起來每次都不一樣。共同點是不想失去要緊的東西。擔心冒出來時，用一個詞給它起個名字。", "Phía trước, người khác, và cuộc sống mỗi thứ có một điểm khiến bạn để tâm, nên nỗi lo trông khác tùy lúc. Điểm chung là không muốn mất thứ quan trọng. Khi nỗi lo hiện ra, đặt cho nó một từ.", "Masa depan, orang, dan hidup sehari-hari masing-masing punya titik yang kamu pedulikan, jadi khawatirnya terlihat beda tiap situasi. Persamaannya: tidak ingin kehilangan yang berarti. Saat khawatir muncul, beri nama satu kata."),
    practice: T("지금 내 걱정은 ○○이구나, 소중해서 그래", "So this worry is about ___, because it matters to me.", "今の心配は○○なんだ。大切だからだ", "现在这份担心是○○，因为在乎", "現在這份擔心是○○，因為在乎", "Nỗi lo lúc này là ○○, vì nó quan trọng.", "Khawatir sekarang ini soal ○○, karena itu berarti."),
    shareLine: T("쓸데없는 걱정 TOP3: 1위 {first} 2위 {second} 3위 {third}... 여기저기 흩어진 균형형이래ㅋㅋ 내 걱정 동물은? 결과 이미지로 프로필 바꿈!", "Top 3 needless worries: 1 {first}, 2 {second}, 3 {third}. Mine are scattered all over. What's your worry animal?", "いらない心配トップ3は1位{first}、2位{second}、3位{third}。あちこち散らばったバランスタイプだって。あなたの心配アニマルは？", "多余的担心TOP3：第1{first}，第2{second}，第3{third}。我的担心散在各处，是均衡型。你的担心动物是什么？", "多餘的擔心TOP3：第1{first}，第2{second}，第3{third}。我的擔心散在各處，是均衡型。你的擔心動物是什麼？", "Top 3 nỗi lo không đáng: 1 {first}, 2 {second}, 3 {third}. Nỗi lo của mình rải khắp nơi. Con vật nỗi lo của bạn là gì?", "3 khawatir yang tidak perlu: 1 {first}, 2 {second}, 3 {third}. Khawatirku tersebar ke mana-mana. Hewan khawatirmu apa?"),
  },
];

export function calculatePhase3NeedlessWorryTop3(answers: number[], locale: string): Phase3NeedlessWorryOutcome {
  const scores = new Map<Phase3NeedlessWorryId, number>();
  phase3NeedlessWorryCards.forEach((card) => scores.set(card.id, 0));
  answers.forEach((category) => {
    const id = category as Phase3NeedlessWorryId;
    if (!scores.has(id)) return;
    scores.set(id, (scores.get(id) ?? 0) + 1);
  });

  const ranked: Phase3NeedlessWorryRanked[] = phase3NeedlessWorryCards
    .map((card) => ({ card, score: scores.get(card.id) ?? 0, rank: 0 }))
    .sort((a, b) => b.score - a.score || a.card.tieRank - b.card.tieRank)
    .map((item, index) => ({ ...item, rank: index + 1 }));

  const top3 = ranked.slice(0, 3);
  const fourth = ranked[3];
  const closeFourth = fourth && top3[2] && fourth.score === top3[2].score ? fourth : null;

  const familyCounts = new Map<Phase3NeedlessWorryCard['family'], number>();
  top3.forEach((item) => {
    familyCounts.set(item.card.family, (familyCounts.get(item.card.family) ?? 0) + 1);
  });
  const paired = [...familyCounts.entries()].find(([, count]) => count >= 2);
  const familyId: Phase3NeedlessWorryFamilyId = paired ? paired[0] : 'balance';
  const family = phase3NeedlessWorryFamilies.find((item) => item.id === familyId) ?? phase3NeedlessWorryFamilies[3];

  const names = top3.map((item) => pick(item.card.name, locale));
  const shareLine = pick(family.shareLine, locale)
    .replace('{first}', names[0] ?? '')
    .replace('{second}', names[1] ?? '')
    .replace('{third}', names[2] ?? '');

  return { ranked, top3, closeFourth, family, shareLine };
}

export function worryText(text: Phase3NeedlessWorryText, locale: string): string {
  return pick(text, locale);
}

export const PHASE3_NEEDLESS_WORRY_TOP3_META = {
  title: T("쓸데없는 걱정 TOP3", "Your top 3 needless worries", "いらない心配トップ3", "多余的担心TOP3", "多餘的擔心TOP3", "Top 3 nỗi lo không đáng", "3 khawatir yang sebenarnya tidak perlu"),
  description: T("12가지 장면에서 자주 하는 걱정을 골라, 나를 지키려는 걱정 TOP3와 내려놓는 법을 알려드립니다.", "Pick the worry that shows up in 12 moments, and see your top 3, what they are protecting, and how to set them down.", "12の場面でよくする心配を選ぶと、自分を守ろうとする心配トップ3と、手放し方がわかります。", "在12个场景里选出常出现的担心，看到在保护你的担心TOP3，以及怎么放下。", "在12個場景裡選出常出現的擔心，看到在保護你的擔心TOP3，以及怎麼放下。", "Chọn nỗi lo hay gặp trong 12 tình huống, xem top 3 đang bảo vệ bạn và cách buông.", "Pilih khawatir yang sering muncul di 12 situasi, lihat 3 teratas yang sedang menjagamu, dan cara melepasnya."),
  tags: {
    "ko": ["걱정", "자기이해", "연애테스트"],
    "en": ["needless worries", "self-discovery", "dating quiz"],
    "ja": ["いらない心配", "自己理解", "恋愛診断"],
    "zh-CN": ["多余的担心", "自我了解", "恋爱测试"],
    "zh-TW": ["多餘的擔心", "自我了解", "戀愛測驗"],
    "vi": ["lo không đáng", "hiểu mình", "test tình yêu"],
    "id": ["khawatir tidak perlu", "mengenal diri", "tes pacaran"],
  } as Record<Phase3NeedlessWorryLocaleKey, string[]>,
};
