/** 친구와 멀어지는 이유 테스트 — phase3-friend-drift-reason · 12문항 4지선다 · 유형 누적 */

export type Phase3FriendDriftLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';

export type Phase3FriendDriftText = Record<Phase3FriendDriftLocaleKey, string>;

export type Phase3FriendDriftTypeId = 1 | 2 | 3 | 4;

const LOCALE_KEYS: Phase3FriendDriftLocaleKey[] = ['ko', 'en', 'ja', 'zh-CN', 'zh-TW', 'vi', 'id'];

function T(ko: string, en: string, ja: string, zhCN: string, zhTW: string, vi: string, id: string): Phase3FriendDriftText {
  const values = [ko, en, ja, zhCN, zhTW, vi, id];
  const text = {} as Phase3FriendDriftText;
  LOCALE_KEYS.forEach((key, index) => {
    text[key] = values[index];
  });
  return text;
}

export function friendDriftText(text: Phase3FriendDriftText, locale: string): string {
  const loc = locale as Phase3FriendDriftLocaleKey;
  return text[loc] || text.ko;
}

export interface Phase3FriendDriftOption {
  text: Phase3FriendDriftText;
  typeId: Phase3FriendDriftTypeId;
}

export interface Phase3FriendDriftQuestion {
  id: number;
  question: Phase3FriendDriftText;
  options: Phase3FriendDriftOption[];
}

export interface Phase3FriendDriftCard {
  id: Phase3FriendDriftTypeId;
  emoji: string;
  barColor: string;
  name: Phase3FriendDriftText;
  title: Phase3FriendDriftText;
  pattern: Phase3FriendDriftText;
  quote: Phase3FriendDriftText;
  description: Phase3FriendDriftText;
  keywords: Phase3FriendDriftText;
  protects: Phase3FriendDriftText;
  friendSide: Phase3FriendDriftText;
  feelingName: Phase3FriendDriftText;
  closer: Phase3FriendDriftText;
  oneLine: Phase3FriendDriftText;
  oneLiner: Phase3FriendDriftText;
  shareLine: Phase3FriendDriftText;
}

export interface Phase3FriendDriftOutcome {
  winner: Phase3FriendDriftCard;
  scores: Record<Phase3FriendDriftTypeId, number>;
  ranked: Array<{ card: Phase3FriendDriftCard; score: number }>;
  second: Phase3FriendDriftCard | null;
  tied: boolean;
}

export const PHASE3_FRIEND_DRIFT_MAX = 12;

export const phase3FriendDriftReasonQuestions: Phase3FriendDriftQuestion[] = [
  {
    id: 1,
    question: T("친구의 안부 메시지를 확인했다. 나는?", "You saw a friend's check-in. What do you do?", "友達の近況メッセージを見た。自分は？", "看到朋友的问候。你会？", "看到朋友的問候。你會？", "Bạn thấy tin nhắn hỏi thăm. Bạn làm gì?", "Kamu lihat pesan kabar dari teman. Kamu?"),
    options: [
      { text: T("나중에 길게 답해야지 하고 미뤄 둔다", "You tell yourself you'll write a proper reply later, and leave it", "あとでちゃんと返そう、と後回しにする", "想着以后好好回，就先放着", "想說晚點好好回，就先放著", "Nghĩ lát nữa trả lời cho tử tế, rồi để đó", "Berniat membalas panjang nanti, lalu menundanya"), typeId: 1 },
      { text: T("예전 서운함이 떠올라 답할 마음이 줄어든다", "An old hurt comes back, and you feel less like answering", "昔のモヤモヤが浮かんで、返す気が薄れる", "想起以前的委屈，更不想回了", "想起以前的委屈，更不想回", "Nhớ chuyện ấm ức cũ, bớt muốn trả lời", "Rasa kecewa lama muncul, jadi makin enggan membalas"), typeId: 2 },
      { text: T("일이 바빠 답장할 여유를 못 낸다", "Work is too packed to get to a reply", "仕事が忙しくて、返す余裕がない", "事情太忙，抽不出空回", "事情太忙，抽不出空回", "Việc bận quá, không rảnh trả lời", "Kerjaan padat, tidak sempat membalas"), typeId: 3 },
      { text: T("대화할 기운이 없어 읽기만 한다", "You don't have the energy to talk, so you just read it", "話す気力がなくて、既読のままにする", "没力气聊天，只看不回", "沒力氣聊天，只看不回", "Không còn sức nói chuyện, chỉ đọc thôi", "Tidak ada tenaga untuk ngobrol, jadi cuma dibaca"), typeId: 4 },
    ],
  },
  {
    id: 2,
    question: T("친구가 \"한번 보자\"고 했다. 나는?", "A friend says, \"We should hang out.\" What do you do?", "友達に「今度会おう」と言われた。自分は？", "朋友说「找时间见一面」。你会？", "朋友說「找時間見一面」。你會？", "Bạn bảo \"lúc nào gặp nhau\". Bạn làm gì?", "Teman bilang \"kapan-kapan ketemu\". Kamu?"),
    options: [
      { text: T("반갑지만 마음 한쪽이 불편해 얼버무린다", "You're glad, but something feels off, so you dodge it", "うれしいけど、どこか気まずくてはぐらかす", "高兴，可心里别扭，就含糊过去", "開心，可心裡彆扭，就糊弄過去", "Vui, nhưng trong lòng hơi khó chịu nên nói lửng", "Senang, tapi ada yang mengganjal, jadi jawabnya mengambang"), typeId: 2 },
      { text: T("일정이 빡빡해 날짜를 못 정한다", "Your calendar is slammed, so you never pick a date", "予定が詰まっていて、日にちを決められない", "日程太满，定不下日子", "行程太滿，約不出日子", "Lịch kín, không chốt được ngày", "Jadwal padat, tanggalnya tidak jadi"), typeId: 3 },
      { text: T("사람 만날 힘이 없어 다음에 보자고 한다", "Seeing people takes more than you have, so you say another time", "人と会う力がなくて、また今度にする", "没力气见人，就说下次吧", "沒力氣見人，就說下次吧", "Không đủ sức gặp người, hẹn lần sau", "Tidak kuat ketemu orang, jadi bilang lain kali"), typeId: 4 },
      { text: T("\"조만간 연락할게\" 하고 날짜를 미룬다", "You say \"I'll text you soon\" and push the date", "「近いうちに連絡する」と言って、日をずらす", "说「回头联系」，把日子往后推", "說「回頭再聯絡」，把日子往後推", "Nói \"tí nữa mình nhắn\" rồi đẩy ngày", "Bilang \"nanti aku kabari\" dan menggeser tanggalnya"), typeId: 1 },
    ],
  },
  {
    id: 3,
    question: T("친구의 생일이 지나가 버렸다. 나는?", "A friend's birthday already passed. What do you do?", "友達の誕生日が過ぎてしまった。自分は？", "朋友的生日已经过了。你会？", "朋友的生日已經過了。你會？", "Sinh nhật bạn đã qua. Bạn làm gì?", "Ulang tahun teman sudah lewat. Kamu?"),
    options: [
      { text: T("바쁜 와중에 날짜를 아예 놓쳤다", "You were so busy you missed the date entirely", "忙しくて、日付自体を見逃した", "忙着忙着，日期直接错过了", "忙到連日期都錯過", "Bận đến mức quên luôn ngày", "Sibuk sampai tanggalnya terlewat sama sekali"), typeId: 3 },
      { text: T("축하할 마음의 여유가 없어 조용히 넘어갔다", "You didn't have it in you to celebrate, so you let it go quietly", "祝う余白がなくて、そっと流した", "没有祝贺的余力，就安静地过去了", "沒有力氣祝福，就安靜帶過", "Không còn lòng để chúc, nên lặng lẽ bỏ qua", "Tidak ada tenaga untuk ucapan, jadi dilewati diam-diam"), typeId: 4 },
      { text: T("늦었으니 지금 보내면 어색할까 봐 미룬다", "It's late now, and sending something feels awkward, so you wait", "遅れた今送ると気まずい気がして、先に延ばす", "觉得现在补一句会尴尬，就先拖着", "覺得現在補一句會尷尬，先拖著", "Muộn rồi, nhắn bây giờ ngại, nên cứ để đó", "Sudah telat, kirim sekarang rasanya canggung, jadi ditunda"), typeId: 1 },
      { text: T("서운했던 일이 있어 선뜻 연락이 안 간다", "Something still stings, so reaching out doesn't come easily", "引っかかったことがあって、連絡が素直に出ない", "心里还有别扭，不太想先开口", "心裡還有疙瘩，不太想先開口", "Còn chuyện ấm ức, không tiện nhắn trước", "Masih ada yang mengganjal, jadi sulit menyapa duluan"), typeId: 2 },
    ],
  },
  {
    id: 4,
    question: T("오랜만에 친구 SNS를 봤다. 나는?", "You open a friend's socials after a long time. What do you do?", "久しぶりに友達のSNSを見た。自分は？", "很久没看朋友的动态，刚刷到。你会？", "很久沒看朋友的動態，剛刷到。你會？", "Lâu rồi mới xem mạng xã hội của bạn. Bạn làm gì?", "Lama kemudian kamu lihat media sosial teman. Kamu?"),
    options: [
      { text: T("반갑지만 반응할 기운이 없다", "You're glad to see them, but you don't have the energy to react", "うれしいけど、反応する気力がない", "挺想他们，可没力气回应", "挺想他們，可沒力氣回應", "Mừng, nhưng không còn sức phản hồi", "Senang, tapi tidak ada tenaga untuk menanggapi"), typeId: 4 },
      { text: T("댓글을 달까 하다 나중으로 미룬다", "You almost comment, then save it for later", "コメントしようとして、あと回しにする", "想评论，又决定以后再说", "想留言，又決定以後再說", "Định bình luận rồi lại để lúc khác", "Hampir berkomentar, lalu ditunda"), typeId: 1 },
      { text: T("예전 일이 떠올라 조용히 닫는다", "An old moment comes back, and you close it quietly", "昔のことが浮かんで、静かに閉じる", "想起以前的事，默默关掉", "想起以前的事，默默關掉", "Nhớ chuyện cũ, lặng lẽ tắt", "Ingat kejadian lama, lalu ditutup pelan-pelan"), typeId: 2 },
      { text: T("요즘 챙기지 못해 미안한 마음만 든다", "You just feel bad that you haven't been around", "最近かまえていない申し訳なさだけが残る", "只觉得最近没顾上，有点愧疚", "只覺得最近沒顧到，有點愧疚", "Chỉ thấy có lỗi vì dạo này không để ý", "Cuma merasa bersalah karena akhir-akhir ini tidak memperhatikan"), typeId: 3 },
    ],
  },
  {
    id: 5,
    question: T("친구가 고민을 털어놓았다. 나는?", "A friend opens up about something hard. What do you do?", "友達が悩みを打ち明けた。自分は？", "朋友跟你倒苦水。你会？", "朋友跟你倒苦水。你會？", "Bạn kể chuyện đang lo. Bạn làm gì?", "Teman curhat. Kamu?"),
    options: [
      { text: T("제대로 답하고 싶어 시간 날 때로 미룬다", "You want to answer properly, so you wait until you have time", "ちゃんと返したいから、時間があるときまで延ばす", "想认真回，就等到有空再说", "想認真回，就等有空再說", "Muốn trả lời cho đàng hoàng, nên đợi lúc rảnh", "Ingin membalas dengan benar, jadi menunggu ada waktu"), typeId: 1 },
      { text: T("들어 줄 여유가 없어 짧게만 답한다", "You don't have the room to listen, so you keep it short", "聞く余白がなくて、短くだけ返す", "没余力听，只短短回一句", "沒餘力聽，只短短回一句", "Không còn sức nghe, chỉ trả lời ngắn", "Tidak kuat mendengarkan, jadi balasnya singkat"), typeId: 4 },
      { text: T("일에 쫓겨 대화를 이어 가지 못한다", "Work is chasing you, and the conversation drops", "仕事に追われて、会話が続かない", "被事情追着，聊不下去", "被事情追著，聊不下去", "Việc đuổi theo, không nối được câu chuyện", "Dikejar kerjaan, obrolan tidak berlanjut"), typeId: 3 },
      { text: T("내 얘기를 들어 준 적이 적었던 기억이 올라온다", "You remember they rarely sat with what you had to say", "自分の話を聞いてもらったことが少なかった記憶が浮かぶ", "想起对方很少听自己说话", "想起對方很少聽自己說話", "Nhớ ra họ ít khi nghe mình kể", "Teringat mereka jarang mendengarkan ceritamu"), typeId: 2 },
    ],
  },
  {
    id: 6,
    question: T("친구와의 단톡방 알림이 쌓였다. 나는?", "Notifications from the group chat are piling up. What do you do?", "友達とのグループの通知が溜まっている。自分は？", "和朋友的群消息堆了一堆。你会？", "和朋友的群組通知堆了一堆。你會？", "Thông báo nhóm chat với bạn chất đống. Bạn làm gì?", "Notifikasi grup dengan teman menumpuk. Kamu?"),
    options: [
      { text: T("불편한 대화가 있어 열어 보기 싫다", "A tense thread is in there, and you don't want to open it", "気まずいやり取りがあって、開きたくない", "里面有别扭的对话，不想打开", "裡面有彆扭的對話，不想打開", "Trong đó có đoạn khó chịu, không muốn mở", "Ada obrolan yang bikin tidak enak, jadi tidak mau dibuka"), typeId: 2 },
      { text: T("한꺼번에 답하려다 계속 쌓아 둔다", "You mean to answer everything at once, so it keeps stacking", "まとめて返そうとして、どんどん溜める", "想一次回完，结果越堆越多", "想一次回完，結果越堆越多", "Định trả lời một lượt, nên cứ để chất", "Mau membalas sekaligus, malah terus menumpuk"), typeId: 1 },
      { text: T("읽는 것도 피곤해 알림을 끈다", "Even reading feels tiring, so you mute it", "読むだけでも疲れて、通知を切る", "看都觉得累，干脆关通知", "看都覺得累，乾脆關通知", "Đọc cũng mệt, tắt thông báo", "Membaca saja sudah capek, notifikasinya dimatikan"), typeId: 4 },
      { text: T("정신없는 주간이 지나면 확인해야지 한다", "You'll check once this chaotic week is over", "このバタバタの週が終わったら見ようと思う", "等这混乱的一周过了再看", "等這混亂的一週過了再看", "Tuần này loạn xong rồi xem", "Nanti dicek kalau minggu yang kacau ini selesai"), typeId: 3 },
    ],
  },
  {
    id: 7,
    question: T("친구와의 약속이 다가온다. 나는?", "A plan with a friend is coming up. What do you do?", "友達との約束が近づいている。自分は？", "和朋友的约定快到了。你会？", "和朋友的約快到了。你會？", "Cuộc hẹn với bạn sắp tới. Bạn làm gì?", "Janji dengan teman semakin dekat. Kamu?"),
    options: [
      { text: T("일정이 겹쳐 시간 맞추기가 어렵다", "Schedules clash, and finding a time is hard", "予定が重なって、時間を合わせにくい", "日程撞车，很难对上时间", "行程撞在一起，很難對上時間", "Lịch trùng, khó khớp giờ", "Jadwal bentrok, susah cari waktu"), typeId: 3 },
      { text: T("만나면 서운했던 얘기가 나올까 부담스럽다", "You're uneasy that the old hurt might come up if you meet", "会うと、あのモヤモヤの話が出そうで気が重い", "怕见面又提起那件委屈的事", "怕見面又提起那件委屈的事", "Sợ gặp nhau lại khơi chuyện ấm ức", "Khawatir kalau ketemu, rasa kecewa itu ikut keluar"), typeId: 2 },
      { text: T("확정은 나중에 하자며 계속 미룬다", "You keep saying you'll lock it in later", "確定はあとで、と先延ばしにする", "一直说以后再定，不断往后拖", "一直說以後再定，不斷往後拖", "Cứ nói để lúc khác chốt, rồi hoãn mãi", "Terus bilang nanti saja dipastikan, dan menundanya"), typeId: 1 },
      { text: T("약속 자체가 에너지를 쓰는 일처럼 느껴진다", "The plan itself feels like it costs energy", "約束そのものが体力を使うことに感じる", "约定本身就像在消耗力气", "約定本身就像在耗力氣", "Bản thân cuộc hẹn đã ngốn năng lượng", "Janjiannya sendiri terasa menguras tenaga"), typeId: 4 },
    ],
  },
  {
    id: 8,
    question: T("친구가 \"요즘 바빠?\"라고 물었다. 나는?", "A friend asks, \"Busy lately?\" What do you do?", "友達に「最近忙しい？」と聞かれた。自分は？", "朋友问「最近忙吗？」你会？", "朋友問「最近忙嗎？」你會？", "Bạn hỏi \"dạo này bận không?\". Bạn làm gì?", "Teman bertanya \"akhir-akhir ini sibuk?\". Kamu?"),
    options: [
      { text: T("\"좀 지쳐서\"라고 짧게 답하고 만다", "You just say \"A bit worn out\" and stop there", "「ちょっと疲れてて」と短く済ませる", "只回「有点累」，就停住", "只回「有點累」，就停住", "Chỉ nói \"hơi mệt\" rồi thôi", "Cuma bilang \"agak capek\" lalu selesai"), typeId: 4 },
      { text: T("\"일이 너무 많아서\"라고 답한다", "You say \"Work is a lot\"", "「仕事が多すぎて」と答える", "回「事情太多了」", "回「事情太多了」", "Nói \"việc nhiều quá\"", "Bilang \"kerjaan kebanyakan\""), typeId: 3 },
      { text: T("\"그냥 그래\" 하고 속마음은 접어 둔다", "You say \"It's fine\" and fold the real feeling away", "「まあまあ」と言って、本音はしまう", "说「还行」，把真心收起来", "說「還好」，把真心收起來", "Nói \"cũng bình thường\" và giấu lòng thật", "Bilang \"biasa aja\" dan menyimpan isi hati"), typeId: 2 },
      { text: T("\"곧 연락할게\"라고 답하고 또 미룬다", "You say \"I'll text soon\" and put it off again", "「すぐ連絡する」と言って、また延ばす", "说「马上联系」，然后又拖", "說「馬上聯絡」，然後又拖", "Nói \"tí nữa nhắn\" rồi lại hoãn", "Bilang \"sebentar lagi aku kabari\" lalu menunda lagi"), typeId: 1 },
    ],
  },
  {
    id: 9,
    question: T("친구와 연락이 끊긴 지 몇 달이 됐다. 나는?", "It's been months since you and a friend talked. What do you do?", "友達と連絡が途絶えて数カ月。自分は？", "和朋友好几个月没联系。你会？", "和朋友好幾個月沒聯絡。你會？", "Đã vài tháng không liên lạc. Bạn làm gì?", "Sudah beberapa bulan tidak saling kabar. Kamu?"),
    options: [
      { text: T("이제 와서 연락하기엔 늦은 것 같아 미룬다", "It feels too late to reach out now, so you wait", "今さら連絡するのは遅すぎる気がして、延ばす", "觉得现在联系已经晚了，就拖着", "覺得現在聯絡已經晚了，就拖著", "Thấy giờ nhắn thì muộn, nên cứ để đó", "Rasanya sudah telat untuk menyapa, jadi ditunda"), typeId: 1 },
      { text: T("풀지 못한 마음이 남아 있어 먼저 못 한다", "Something unfinished is still there, so you can't go first", "解けていない気持ちが残っていて、先に出せない", "心里还有没解开的结，开不了口", "心裡還有沒解開的結，開不了口", "Còn chuyện chưa nguôi, không dám nhắn trước", "Masih ada yang belum selesai di hati, jadi tidak bisa menyapa duluan"), typeId: 2 },
      { text: T("관계에 쓸 에너지가 남아 있지 않다", "You don't have energy left for the friendship", "関係に回す気力が残っていない", "这段关系已经没有多余的力气", "這段關係已經沒有多餘的力氣", "Không còn năng lượng cho mối quan hệ này", "Tenaga untuk hubungan ini sudah habis"), typeId: 4 },
      { text: T("연락할 여유가 한 번도 나지 않았다", "There was never a spare moment to text", "連絡する余裕が一度もなかった", "一直抽不出空来联系", "一直抽不出空來聯絡", "Chưa lúc nào rảnh để nhắn", "Tidak pernah ada waktu luang untuk mengabari"), typeId: 3 },
    ],
  },
  {
    id: 10,
    question: T("친구와 마지막으로 만났던 날을 떠올린다. 나는?", "You think about the last time you saw them. What comes up?", "友達と最後に会った日を思い出す。自分は？", "想起最后一次见面。你会？", "想起最後一次見面。你會？", "Nhớ lần gặp cuối. Bạn nghĩ gì?", "Kamu ingat hari terakhir bertemu. Kamu?"),
    options: [
      { text: T("그날 서운했던 순간이 먼저 떠오른다", "The moment that stung that day comes first", "あの日引っかかった瞬間が先に浮かぶ", "那天委屈的瞬间先冒出来", "那天委屈的瞬間先冒出來", "Khoảnh khắc ấm ức hôm đó hiện lên trước", "Momen yang bikin kecewa hari itu muncul lebih dulu"), typeId: 2 },
      { text: T("다음엔 꼭 보자고 했던 약속이 마음에 걸린다", "The \"next time for sure\" promise is still on your mind", "次は絶対会おうと言った約束が気になる", "说好下次一定见的约定还挂在心上", "說好下次一定見的約定還掛在心上", "Lời hẹn \"lần sau nhất định gặp\" còn vướng", "Janji \"next time pasti ketemu\" masih mengganjal"), typeId: 1 },
      { text: T("바쁜 시기라 서둘러 헤어진 게 아쉽다", "You were in a rush because life was busy, and you wish you hadn't left so fast", "忙しい時期で急いで別れたのが惜しい", "那段太忙，匆匆分开有点可惜", "那段太忙，匆匆分開有點可惜", "Hồi đó bận, chia tay vội nên tiếc", "Waktu itu sibuk, jadi berpisah terburu-buru, dan itu sayang"), typeId: 3 },
      { text: T("만나고 나서 많이 지쳤던 기억이 난다", "You remember being wiped out after seeing them", "会ったあと、かなり消耗した記憶がある", "记得见完之后特别累", "記得見完之後特別累", "Nhớ sau buổi gặp mình kiệt sức", "Ingat setelah bertemu kamu sangat lelah"), typeId: 4 },
    ],
  },
  {
    id: 11,
    question: T("친구에게 연락하려고 폰을 열었다. 나는?", "You open your phone to text them. What do you do?", "友達に連絡しようとスマホを開いた。自分は？", "打开手机想给朋友发消息。你会？", "打開手機想傳訊息給朋友。你會？", "Mở điện thoại định nhắn cho bạn. Bạn làm gì?", "Kamu buka ponsel untuk mengabari teman. Kamu?"),
    options: [
      { text: T("급한 알림이 떠서 다른 일을 먼저 처리한다", "An urgent notification pops up, and you handle that first", "急ぎの通知が出て、別のことを先に片づける", "跳出紧急通知，先去处理别的", "跳出緊急通知，先去處理別的", "Có thông báo gấp, xử lý việc khác trước", "Ada notifikasi mendesak, urusan itu dikerjakan dulu"), typeId: 3 },
      { text: T("무슨 말을 꺼낼 기운이 안 나서 닫는다", "You can't find the energy to start, so you close it", "何を話す気力もなくて、閉じる", "不知道从哪句说起，没力气，就关掉", "不知道從哪句說起，沒力氣，就關掉", "Không còn sức mở lời, nên tắt", "Tidak ada tenaga untuk memulai, lalu ditutup"), typeId: 4 },
      { text: T("서운함이 올라와 보낼 말을 못 고른다", "The old hurt comes up, and you can't pick the words", "モヤモヤが上がって、送る言葉が決まらない", "委屈涌上来，选不出要发的话", "委屈湧上來，選不出要傳的話", "Ấm ức dâng lên, không chọn được câu", "Rasa kecewa naik, kata-katanya tidak ketemu"), typeId: 2 },
      { text: T("할 말을 고르다 \"내일 하자\"고 미룬다", "You draft it, then tell yourself tomorrow", "文面を考えて、「明日にしよう」と延ばす", "斟酌半天，告诉自己明天再说", "斟酌半天，告訴自己明天再說", "Soạn mãi rồi tự nhủ để mai", "Menyusun kalimat, lalu bilang \"besok saja\""), typeId: 1 },
    ],
  },
  {
    id: 12,
    question: T("지금 친구와 멀어진 이유에 가장 가까운 문장은?", "Which line is closest to why you've drifted?", "今、友達と離れた理由にいちばん近いのは？", "现在和朋友疏远，最接近的一句是？", "現在和朋友疏遠，最接近的一句是？", "Câu nào gần với lý do đang xa bạn nhất?", "Kalimat mana yang paling dekat dengan alasan kalian jarang?"),
    options: [
      { text: T("\"사람을 만날 마음의 힘이 부족했어\"", "\"I didn't have it in me to see people\"", "「人と会う心の余裕がなかった」", "「没力气见人」", "「沒力氣見人」", "\"Mình không còn sức gặp người\"", "\"Tenaga untuk ketemu orang sudah habis\""), typeId: 4 },
      { text: T("\"내 삶이 너무 바빠서 못 챙겼어\"", "\"My life was too full to keep up\"", "「自分の生活が忙しすぎて、かまえていなかった」", "「生活太满，顾不上」", "「生活太滿，顧不上」", "\"Cuộc sống quá bận, không chăm được\"", "\"Hidupku terlalu penuh, jadi tidak terurus\""), typeId: 3 },
      { text: T("\"연락해야지 하다가 때를 놓쳤어\"", "\"I kept meaning to text and missed the moment\"", "「連絡しなきゃと思っているうちに、タイミングを逃した」", "「一直想联系，时机错过了」", "「一直想聯絡，時機錯過了」", "\"Định nhắn hoài rồi lỡ mất lúc\"", "\"Terus berniat mengabari sampai kelewatan waktunya\""), typeId: 1 },
      { text: T("\"말 못 한 서운함이 남아 있어\"", "\"Something I never said is still sitting there\"", "「言えなかったモヤモヤが残っている」", "「有句没说出口的委屈还在」", "「有句沒說出口的委屈還在」", "\"Còn ấm ức chưa nói ra\"", "\"Masih ada kecewa yang belum terucap\""), typeId: 2 },
    ],
  },
];

export const phase3FriendDriftReasonCards: Phase3FriendDriftCard[] = [
  {
    id: 1,
    emoji: "⏳",
    barColor: "#d97706",
    name: T("연락 미루기형", "I'll text later", "あとで連絡型", "晚点再回", "晚點再回", "Để lúc khác", "Nanti saja"),
    title: T("연락을 미루다 놓치는 사람", "You mean to write, then miss the moment", "連絡を後回しにして、タイミングを逃す人", "想好好回，结果错过了时机", "想好好回，結果錯過了時機", "Định nhắn đàng hoàng rồi lỡ mất lúc", "Mau membalas yang benar, sampai kelewatan"),
    pattern: T("\"나중에\"가 쌓여 시기를 놓친다", "\"Later\" piles up until the moment is gone", "「あとで」が溜まって、時期を逃す", "「以后再说」攒着攒着，时机过了", "「以後再說」累著累著，時機過了", "\"Lát nữa\" chất đến khi lỡ mất lúc", "\"Nanti\" menumpuk sampai waktunya lewat"),
    quote: T("당신은 친구를 잊은 게 아니라, 잘 챙기고 싶어서 연락을 미루는 사람입니다.", "You didn't forget your friend. You kept waiting for a reply that felt good enough.", "友達を忘れたのではなく、ちゃんと返したくて連絡を延ばしている人です。", "你不是忘了朋友，是想回得像样一点，所以一直拖。", "你不是忘了朋友，是想回得像樣一點，所以一直拖。", "Bạn không quên bạn bè. Bạn cứ đợi đến lúc trả lời cho tử tế.", "Kamu tidak lupa teman. Kamu menunggu sampai balasannya terasa cukup layak."),
    description: T("제대로 답하고 싶은 마음이 오히려 시작을 늦춥니다. 시간이 지날수록 \"이제 와서\"라는 부담이 커집니다.", "Wanting to answer properly is what delays the start. The longer you wait, the heavier \"it's too late now\" gets.", "ちゃんと返したい気持ちが、かえって始まりを遅らせます。時間がたつほど「今さら」が重くなります。", "想回得认真，反而让开头变晚。拖得越久，「现在才联系」就越沉。", "想回得認真，反而讓開頭變晚。拖得越久，「現在才聯絡」就越沉。", "Muốn trả lời cho đàng hoàng lại làm chậm lúc bắt đầu. Càng để lâu, \"giờ mới nhắn\" càng nặng.", "Ingin membalas dengan benar justru menunda awalnya. Makin lama, \"baru sekarang\" makin berat."),
    keywords: T("나중에, 완벽한 답장, 타이밍, 이제 와서", "later, the perfect reply, timing, too late now", "あとで、ちゃんとした返信、タイミング、今さら", "以后再说，完美回复，时机，现在才联系", "以後再說，完美回覆，時機，現在才聯絡", "lát nữa, câu trả lời hoàn hảo, thời điểm, giờ mới nhắn", "nanti, balasan yang pas, waktu, baru sekarang"),
    protects: T("친구에게 성의 있게 대하고 싶은 마음", "Wanting to show up for them properly", "友達にちゃんと向き合いたい気持ち", "想认真对待朋友的心", "想認真對待朋友的心", "Muốn đối xử với bạn cho tử tế", "Ingin hadir untuk teman dengan sungguh-sungguh"),
    friendSide: T("내가 바쁜 줄 알고 기다리거나 관심이 식었다고 오해했을 가능성", "They may have waited, thinking you were busy, or wondered if you had lost interest", "忙しいんだと思って待っていたか、興味が冷めたと勘違いしたかもしれない", "对方可能以为你忙，所以等着，也可能误会你没那么在意了", "對方可能以為你忙，所以等著，也可能誤會你沒那麼在意了", "Họ có thể đợi vì tưởng bạn bận, hoặc hiểu nhầm là bạn bớt quan tâm", "Mereka mungkin menunggu karena mengira kamu sibuk, atau mengira kamu sudah tidak begitu peduli"),
    feelingName: T("나는 지금 미안해서 더 연락하기 어렵구나", "I'm finding it harder to text because I already feel bad", "申し訳なくて、余計に連絡しにくくなっている", "因为已经觉得抱歉，更难开口了", "因為已經覺得抱歉，更難開口了", "Vì đã thấy có lỗi nên càng khó nhắn", "Karena sudah merasa bersalah, makin sulit mengabari"),
    closer: T("연락 시한을 24시간으로 정하고 한 줄만 먼저 보내기", "Give yourself 24 hours, and send one line first", "24時間以内と決めて、一行だけ先に送る", "给自己24小时，先发一行就好", "給自己24小時，先發一行就好", "Hẹn với mình trong 24 giờ, gửi một dòng trước", "Beri batas 24 jam, kirim satu baris dulu"),
    oneLine: T("연락이 늦어서 미안해, 계속 생각하고 있었어", "Sorry this is late. You've been on my mind.", "連絡が遅れてごめん。ずっと気になってた。", "联系晚了，对不起。我一直想着你。", "聯絡晚了，對不起。我一直想著你。", "Nhắn muộn, xin lỗi. Mình vẫn nhớ bạn.", "Maaf baru kabari. Kamu tetap ada di pikiranku."),
    oneLiner: T("챙기고 싶은 마음은 진짜입니다. 한 줄이면 충분하니 지금 보내 보세요", "The wish to stay close is real. One line is enough. Send it now.", "大切にしたい気持ちは本物です。一行で足ります。今送ってみてください。", "想顾着对方的心是真的。一行就够了，现在就发。", "想顧著對方的心是真的。一行就夠了，現在就發。", "Muốn giữ bạn là thật. Một dòng là đủ. Gửi ngay đi.", "Keinginan untuk tetap dekat itu nyata. Satu baris cukup. Kirim sekarang."),
    shareLine: T("친구와 멀어지는 이유: 연락 미루기형 ⏳ '나중에'가 쌓여서래ㅋㅋ 너희 회사 동료들은 뭐 나와? 유형만 비교해보자", "Why friends drift: the I'll-text-later type ⏳ Turns out \"later\" just piled up lol. What did your coworkers get? Compare types only.", "友達と疎遠になる理由：あとで連絡型 ⏳ 「あとで」が溜まったらしいwww 会社の人は何が出た？タイプだけ比べてみて", "和朋友变疏远的原因：晚点再回 ⏳ 说是「以后再说」攒多了哈哈。你们同事是哪种？只比类型就好", "和朋友變疏遠的原因：晚點再回 ⏳ 說是「以後再說」累積太多了哈哈。你們同事是哪一種？只比類型就好", "Vì sao bạn bè xa dần: kiểu để lúc khác ⏳ Hóa ra 'tí nữa' cứ chất đống. Đồng nghiệp các cậu ra kiểu gì? Chỉ so loại thôi", "Kenapa jadi jarang sama teman: tipe nanti saja ⏳ Katanya \"nanti\" numpuk terus. Teman kantor kamu dapat yang mana? Bandingin tipenya aja"),
  },
  {
    id: 2,
    emoji: "🌧️",
    barColor: "#6366f1",
    name: T("서운함 쌓기형", "Unsaid hurt", "モヤモヤため型", "委屈攒着", "委屈悶著", "Giữ ấm ức", "Simpan kecewa"),
    title: T("서운함이 쌓여 조용히 멀어지는 사람", "You drift quietly while the hurt stays unspoken", "言えなかったモヤモヤのまま、静かに離れる人", "委屈没说出口，就安静地远了", "委屈沒說出口，就安靜地遠了", "Ấm ức không nói, rồi lặng lẽ xa", "Kecewa tidak terucap, lalu menjauh diam-diam"),
    pattern: T("말하지 못한 서운함이 마음의 거리가 된다", "What you never said becomes the distance", "言えなかったモヤモヤが、心の距離になる", "没说出口的委屈，变成了心里的距离", "沒說出口的委屈，變成了心裡的距離", "Điều không nói thành khoảng cách", "Yang tidak terucap jadi jarak"),
    quote: T("당신의 거리두기는 차가워서가 아니라 상처받지 않으려는 보호입니다.", "The distance isn't coldness. It's you trying not to get hurt again.", "距離を置くのは冷たいからではなく、これ以上傷つきたくない守りです。", "你拉开距离不是因为冷淡，是不想再受伤。", "你拉開距離不是因為冷淡，是不想再受傷。", "Khoảng cách không phải vì lạnh. Bạn đang giữ mình khỏi bị tổn thương thêm.", "Jarak ini bukan karena kamu dingin. Kamu sedang menjaga diri agar tidak terluka lagi."),
    description: T("크게 다투지 않고 조용히 마음을 닫기 때문에 친구는 이유를 모를 수 있습니다.", "You close off quietly instead of fighting, so your friend may never know why.", "大きく争わず静かに心を閉じるので、友達は理由が分からないことがあります。", "你不大吵，只是悄悄把心关上，所以朋友可能不知道为什么。", "你不大吵，只是悄悄把心關上，所以朋友可能不知道為什麼。", "Bạn không cãi lớn, chỉ khép lòng, nên bạn có thể không biết vì sao.", "Kamu tidak bertengkar. Kamu menutup hati pelan-pelan, jadi teman mungkin tidak tahu kenapa."),
    keywords: T("삼킨 말, 조용한 거리, 쌓임, 보호", "swallowed words, quiet distance, buildup, protection", "飲み込んだ言葉、静かな距離、蓄積、守り", "咽回去的话，安静的距离，累积，保护", "咽回去的話，安靜的距離，累積，保護", "lời nuốt vào, khoảng cách lặng, chất chứa, che chở", "kata yang ditelan, jarak yang sunyi, menumpuk, melindungi"),
    protects: T("갈등을 피하고 관계를 해치지 않으려는 배려", "Wanting to avoid a fight and keep the friendship intact", "衝突を避けて、関係を壊したくない配慮", "想避开冲突，不想伤到这段关系", "想避開衝突，不想傷到這段關係", "Muốn tránh cãi và không làm hỏng mối quan hệ", "Ingin menghindari pertengkaran dan menjaga hubungan tetap utuh"),
    friendSide: T("서운하게 한 줄도 모르고 갑자기 멀어졌다고 느꼈을 가능성", "They may have felt you pulled away out of nowhere, with no idea they had hurt you", "自分が何をしたかも知らないまま、急に離れたと感じたかもしれない", "对方可能完全不知道自己伤到你，只觉得你忽然远了", "對方可能完全不知道自己傷到你，只覺得你忽然遠了", "Họ có thể không biết mình đã làm bạn buồn, chỉ thấy bạn đột nhiên xa", "Mereka mungkin tidak tahu sudah menyakiti kamu, dan hanya merasa kamu tiba-tiba menjauh"),
    feelingName: T("나는 지금 말하지 못한 서운함이 남아 있구나", "There's still something I never said", "言えなかったモヤモヤが、まだ残っている", "还有一句没说出口的委屈", "還有一句沒說出口的委屈", "Vẫn còn ấm ức mình chưa nói", "Masih ada kecewa yang belum aku ucapkan"),
    closer: T("서운함을 '사실 한 줄 + 마음 한 줄'로 정리해 필요하면 먼저 전하기", "If you want to, say it as one fact and one feeling", "必要なら、事実一行と気持ち一行にまとめて先に伝える", "如果想说，就用一句事实加一句感受，先讲出来", "如果想說，就用一句事實加一句感受，先講出來", "Nếu muốn, nói một câu sự việc và một câu cảm xúc", "Kalau mau, sampaikan satu kalimat fakta dan satu kalimat perasaan"),
    oneLine: T("그때 말 못 했는데, 사실 조금 서운했어. 풀고 싶어서 말해", "I never said this then, but it did sting a little. I'm telling you because I want to clear it.", "あのとき言えなかったんだけど、実は少し引っかかってた。ほどきたくて言うね。", "当时没说出口，其实有点委屈。我想解开，所以现在告诉你。", "當時沒說出口，其實有點委屈。我想解開，所以現在告訴你。", "Hồi đó mình không nói, thật ra hơi ấm ức. Mình nói vì muốn làm lành.", "Waktu itu aku tidak bilang, tapi sebenarnya agak kecewa. Aku bilang karena ingin bereskan."),
    oneLiner: T("조용한 배려도 소중합니다. 말로 꺼내면 거리가 가장 빨리 줄어듭니다", "Quiet care matters. Saying it out loud is what closes the gap fastest.", "静かな配慮も大切です。言葉にすると、距離がいちばん早く縮みます。", "安静的体贴也很珍贵。说出来，距离收得最快。", "安靜的體貼也很珍貴。說出來，距離收得最快。", "Sự tử tế lặng lẽ cũng đáng quý. Nói ra thì khoảng cách ngắn lại nhanh nhất.", "Kepedulian yang diam juga berharga. Mengatakannya yang paling cepat mendekatkan."),
    shareLine: T("친구와 멀어지는 이유: 서운함 쌓기형 🌧️ 말 못 한 서운함이 거리가 된대... 너희 회사 동료들은 뭐 나와? 유형만 비교해보자", "Why friends drift: the unsaid-hurt type 🌧️ The thing I never said became the distance... What did your coworkers get? Compare types only.", "友達と疎遠になる理由：モヤモヤため型 🌧️ 言えなかった気持ちが距離になったらしい… 会社の人は何が出た？タイプだけ比べてみて", "和朋友变疏远的原因：委屈攒着 🌧️ 没说出口的委屈变成了距离……你们同事是哪种？只比类型就好", "和朋友變疏遠的原因：委屈悶著 🌧️ 沒說出口的委屈變成了距離……你們同事是哪一種？只比類型就好", "Vì sao bạn bè xa dần: kiểu giữ ấm ức 🌧️ Điều không nói thành khoảng cách... Đồng nghiệp các cậu ra kiểu gì? Chỉ so loại thôi", "Kenapa jadi jarang sama teman: tipe simpan kecewa 🌧️ Yang tidak terucap jadi jarak... Teman kantor kamu dapat yang mana? Bandingin tipenya aja"),
  },
  {
    id: 3,
    emoji: "🏃",
    barColor: "#e11d48",
    name: T("바빠서 놓침형", "Too busy", "忙しさで後回し型", "忙到顾不上", "忙到顧不上", "Bận nên lỡ", "Terlalu sibuk"),
    title: T("바쁜 일상에 밀려 놓치는 사람", "A full life pushes the friendship back", "忙しい毎日に押されて、関係が後ろにずれる人", "生活太满，把朋友往后排的人", "生活太滿，把朋友往後排的人", "Cuộc sống đầy, tình bạn bị đẩy ra sau", "Hidup yang penuh mendorong pertemanan ke belakang"),
    pattern: T("일상에 몰두하다 관계가 뒤로 밀린다", "Life takes over, and the relationship waits", "日常に没頭しているうちに、関係が後ろにずれる", "一头扎进生活，关系就被往后放", "一頭扎進生活，關係就被往後放", "Mải cuộc sống, mối quan hệ bị xếp sau", "Sibuk dengan hidup, hubungan jadi menunggu"),
    quote: T("당신은 친구가 중요하지 않은 게 아니라, 지금 삶이 가득 차 있는 사람입니다.", "Your friend isn't unimportant. Your life is just full right now.", "友達が大事じゃないのではなく、今の生活がいっぱいな人です。", "不是朋友不重要，是你现在的生活已经满了。", "不是朋友不重要，是你現在的生活已經滿了。", "Không phải bạn không quan trọng. Cuộc sống của bạn đang đầy.", "Bukan temanmu tidak penting. Hidupmu sedang penuh."),
    description: T("책임감 있게 일과 삶을 꾸려 가는 만큼 관계에 쓸 시간이 남지 않습니다.", "You carry work and responsibilities carefully, so there isn't much time left for people.", "仕事と生活を責任をもって回しているぶん、関係に使う時間が残りません。", "你把工作和生活扛得很认真，留给关系的时间就所剩不多。", "你把工作和生活扛得很認真，留給關係的時間就所剩不多。", "Bạn gánh việc và cuộc sống khá chỉn chu, nên chẳng còn mấy thời gian cho mối quan hệ.", "Kamu menjalani kerja dan hidup dengan tanggung jawab, jadi waktu untuk hubungan tinggal sedikit."),
    keywords: T("일정 포화, 우선순위, 책임감, 시간 부족", "packed schedule, priorities, responsibility, no time", "予定でいっぱい、優先順位、責任感、時間不足", "日程饱和，优先级，责任感，时间不够", "日程飽和，優先順序，責任感，時間不夠", "lịch kín, ưu tiên, trách nhiệm, thiếu thời gian", "jadwal penuh, prioritas, tanggung jawab, waktu kurang"),
    protects: T("지금 맡은 일과 역할을 해내려는 성실함", "The wish to do right by what you're already carrying", "今引き受けている仕事と役割を果たそうとする真面目さ", "想把眼前的事和角色做好的认真", "想把眼前的事和角色做好的認真", "Sự chỉn chu muốn làm xong việc đang gánh", "Kesungguhan untuk menuntaskan apa yang sudah kamu tanggung"),
    friendSide: T("연락이 줄어든 이유를 몰라 서운해하거나 배려로 기다렸을 가능성", "They may have felt hurt not knowing why you went quiet, or waited out of care", "連絡が減った理由が分からず寂しがったか、配慮して待っていたかもしれない", "对方可能不知道你为什么少了联系，觉得委屈，也可能体贴地等着", "對方可能不知道你為什麼少了聯絡，覺得委屈，也可能體貼地等著", "Họ có thể buồn vì không biết vì sao bạn ít nhắn, hoặc chờ vì thương", "Mereka mungkin kecewa karena tidak tahu kenapa kamu jadi sepi, atau menunggu karena peduli"),
    feelingName: T("나는 지금 여유가 없어 미안하구나", "I feel bad because I don't have any room right now", "今は余裕がなくて、申し訳なくなっている", "现在没有余力，觉得抱歉", "現在沒有餘力，覺得抱歉", "Mình thấy có lỗi vì giờ không còn chỗ trống", "Aku merasa bersalah karena sekarang tidak ada ruang"),
    closer: T("한 달에 한 번 '친구 시간'을 일정에 미리 넣고 짧은 안부 루틴 만들기", "Put one friend slot on the calendar each month, and keep a short check-in", "月に一度「友達の時間」を予定に入れて、短い近況の習慣にする", "每个月先在日程里留一次朋友时间，再养成一句短问候", "每個月先在行程裡留一次朋友時間，再養成一句短問候", "Mỗi tháng để sẵn một ô 'giờ bạn bè', và giữ một lời hỏi thăm ngắn", "Setiap bulan masukkan satu slot teman di kalender, plus kabar singkat yang rutin"),
    oneLine: T("요즘 정신없이 바빴어. 마음은 그대로야, 이번 달에 보자", "I've been slammed. I still care. Let's see each other this month.", "最近バタバタしてた。気持ちは変わってない。今月会おう。", "最近忙得团团转。心还在，这个月见一面吧。", "最近忙得團團轉。心還在，這個月見一面吧。", "Dạo này loạn thật. Lòng vẫn vậy, tháng này gặp nhé.", "Belakangan ini kacau banget. Perasaanku sama. Bulan ini ketemu ya."),
    oneLiner: T("성실한 삶도 소중합니다. 작은 시간을 미리 비워 두면 인연이 이어집니다", "A full life is worth something too. Leave a small pocket of time, and the friendship can continue.", "真面目な生活も大切です。小さな時間を先に空けておくと、縁は続きます。", "认真过生活也珍贵。先空出一小段时间，缘分就能接着走。", "認真過生活也珍貴。先空出一小段時間，緣分就能接著走。", "Sống chỉn chu cũng đáng quý. Chừa sẵn một khoảng nhỏ, duyên vẫn nối được.", "Hidup yang sungguh-sungguh juga berharga. Sisakan sedikit waktu lebih dulu, hubungannya bisa lanjut."),
    shareLine: T("친구와 멀어지는 이유: 바빠서 놓침형 🏃 삶이 꽉 차서래ㅋㅋ 너희 회사 동료들은 뭐 나와? 유형만 비교해보자", "Why friends drift: the too-busy type 🏃 Turns out life was just packed lol. What did your coworkers get? Compare types only.", "友達と疎遠になる理由：忙しさで後回し型 🏃 生活がいっぱいだったらしいwww 会社の人は何が出た？タイプだけ比べてみて", "和朋友变疏远的原因：忙到顾不上 🏃 说是生活太满了哈哈。你们同事是哪种？只比类型就好", "和朋友變疏遠的原因：忙到顧不上 🏃 說是生活太滿了哈哈。你們同事是哪一種？只比類型就好", "Vì sao bạn bè xa dần: kiểu bận nên lỡ 🏃 Hóa ra cuộc sống đầy quá. Đồng nghiệp các cậu ra kiểu gì? Chỉ so loại thôi", "Kenapa jadi jarang sama teman: tipe terlalu sibuk 🏃 Katanya hidupnya penuh banget. Teman kantor kamu dapat yang mana? Bandingin tipenya aja"),
  },
  {
    id: 4,
    emoji: "🪫",
    barColor: "#0f766e",
    name: T("에너지 부족형", "Running low", "気力切れ型", "没力气见人", "沒力氣見人", "Hết năng lượng", "Tenaga habis"),
    title: T("마음의 기운이 부족한 사람", "You step back because you're running low", "心の元気が足りなくて、一歩引く人", "心里没力气，所以先退一步的人", "心裡沒力氣，所以先退一步的人", "Hết sức trong lòng nên lùi lại", "Kekurangan tenaga hati, jadi mundur dulu"),
    pattern: T("사람을 만날 마음의 힘이 바닥나 물러선다", "The energy for people runs out, so you pull back", "人と会う心の力が底をつき、下がる", "见人的力气见底，于是往后退", "見人的力氣見底，於是往後退", "Sức gặp người cạn, nên bạn lùi", "Tenaga untuk ketemu orang habis, jadi kamu mundur"),
    quote: T("당신의 거리두기는 관계가 싫어서가 아니라 회복이 필요하다는 신호입니다.", "The distance isn't that you dislike them. It's a sign you need to recover.", "距離を置くのは関係が嫌だからではなく、回復が必要だという合図です。", "你拉开距离不是讨厌这段关系，是在告诉自己该恢复了。", "你拉開距離不是討厭這段關係，是在告訴自己該恢復了。", "Khoảng cách không phải vì bạn ghét mối quan hệ. Đó là dấu hiệu bạn cần nghỉ.", "Jarak ini bukan karena kamu tidak suka hubungannya. Ini tanda kamu perlu pulih."),
    description: T("지금은 쉬어야 하는 시기라 작은 연락도 크게 느껴집니다. 이 시기가 지나면 다시 가까워질 수 있습니다.", "This is a season for rest, so even a small text feels big. When it passes, you can come closer again.", "今は休む時期なので、小さな連絡も大きく感じます。この時期が過ぎれば、また近づけます。", "现在是该休息的时候，一句短消息也显得很大。这段过去，还可以再靠近。", "現在是該休息的時候，一句短訊息也顯得很大。這段過去，還可以再靠近。", "Đây là lúc cần nghỉ, nên một tin ngắn cũng thấy lớn. Qua giai đoạn này, bạn có thể lại gần.", "Ini musim untuk istirahat, jadi kabar singkat pun terasa besar. Kalau musim ini lewat, kamu bisa dekat lagi."),
    keywords: T("피로, 회복, 사람 부담, 쉼 필요", "fatigue, recovery, people feel heavy, need for rest", "疲れ、回復、人の負担、休み", "疲劳，恢复，见人费劲，需要歇", "疲勞，恢復，見人費勁，需要歇", "mệt, hồi phục, gặp người nặng, cần nghỉ", "lelah, pulih, ketemu orang berat, perlu istirahat"),
    protects: T("소진된 나의 마음과 몸", "A mind and body that are already spent", "消耗した自分の心と体", "已经耗尽的心和身体", "已經耗盡的心和身體", "Tâm và thân đang cạn", "Hati dan tubuh yang sudah terkuras"),
    friendSide: T("거절당한 것처럼 느끼거나 걱정하며 지켜봤을 가능성", "They may have felt rejected, or watched with worry", "断られたように感じたか、心配しながら見ていたかもしれない", "对方可能觉得被拒绝了，也可能担心地看着", "對方可能覺得被拒絕了，也可能擔心地看著", "Họ có thể thấy như bị từ chối, hoặc nhìn với vẻ lo", "Mereka mungkin merasa ditolak, atau memperhatikan dengan khawatir"),
    feelingName: T("나는 지금 많이 지쳐 있구나", "I'm really worn out right now", "今、かなり疲れている", "我现在真的很累", "我現在真的很累", "Mình đang mệt thật", "Aku sedang benar-benar lelah"),
    closer: T("에너지 낮은 날도 가능한 '짧은 이모티콘 안부'부터 시작하기", "On low days, start with a short emoji check-in", "元気が低い日でもできる、短い絵文字の近況から始める", "力气少的日子，也先从一条短表情问候开始", "力氣少的日子，也先從一條短表情問候開始", "Ngày ít sức, bắt đầu bằng một emoji hỏi thăm ngắn", "Di hari tenaga rendah, mulai dari emoji singkat"),
    oneLine: T("요즘 많이 지쳐서 연락이 뜸했어. 회복되면 꼭 볼게", "I've been so tired that I've gone quiet. When I'm back, I want to see you.", "最近すごく疲れてて、連絡が減ってた。回復したら必ず会おう。", "最近太累了，联系少了。缓过来一定见。", "最近太累了，聯絡少了。緩過來一定見。", "Dạo này mệt quá nên ít nhắn. Hồi lại rồi mình gặp.", "Belakangan ini capek banget, jadi jarang kabar. Kalau sudah pulih, kita ketemu."),
    oneLiner: T("쉬어 가는 것도 나를 지키는 일입니다. 가벼운 안부 한 줄로 문은 열어 두세요", "Resting is also how you take care of yourself. One light hello keeps the door open.", "休むことも、自分を守ることです。軽い近況一行で、ドアは開けておいてください。", "休息也是在照顾自己。一句轻问候，把门留着就好。", "休息也是在照顧自己。一句輕問候，把門留著就好。", "Nghỉ cũng là giữ mình. Một lời hỏi thăm nhẹ là đủ để cửa vẫn mở.", "Istirahat juga cara menjaga diri. Satu sapaan ringan sudah cukup agar pintunya tetap terbuka."),
    shareLine: T("친구와 멀어지는 이유: 에너지 부족형 🪫 회복이 필요한 시기래... 너희 회사 동료들은 뭐 나와? 유형만 비교해보자", "Why friends drift: the running-low type 🪫 Turns out this is a season to recover... What did your coworkers get? Compare types only.", "友達と疎遠になる理由：気力切れ型 🪫 回復が必要な時期らしい… 会社の人は何が出た？タイプだけ比べてみて", "和朋友变疏远的原因：没力气见人 🪫 说是该恢复的时候……你们同事是哪种？只比类型就好", "和朋友變疏遠的原因：沒力氣見人 🪫 說是該恢復的時候……你們同事是哪一種？只比類型就好", "Vì sao bạn bè xa dần: kiểu hết năng lượng 🪫 Hóa ra đang là lúc cần hồi. Đồng nghiệp các cậu ra kiểu gì? Chỉ so loại thôi", "Kenapa jadi jarang sama teman: tipe tenaga habis 🪫 Katanya ini musim untuk pulih... Teman kantor kamu dapat yang mana? Bandingin tipenya aja"),
  },
];

const cardById = (id: Phase3FriendDriftTypeId) =>
  phase3FriendDriftReasonCards.find((card) => card.id === id) ?? phase3FriendDriftReasonCards[0];

export function calculatePhase3FriendDriftReason(answers: number[]): Phase3FriendDriftOutcome {
  const scores: Record<Phase3FriendDriftTypeId, number> = { 1: 0, 2: 0, 3: 0, 4: 0 };
  answers.forEach((typeId) => {
    if (typeId === 1 || typeId === 2 || typeId === 3 || typeId === 4) {
      scores[typeId] += 1;
    }
  });
  const ids: Phase3FriendDriftTypeId[] = [1, 2, 3, 4];
  const max = Math.max(scores[1], scores[2], scores[3], scores[4]);
  const tiedIds = ids.filter((id) => scores[id] === max);
  let winnerId = tiedIds[0];
  if (tiedIds.length > 1) {
    for (let i = 0; i < answers.length; i += 1) {
      const picked = answers[i];
      if (picked === 1 || picked === 2 || picked === 3 || picked === 4) {
        if (tiedIds.indexOf(picked) >= 0) {
          winnerId = picked;
          break;
        }
      }
    }
  }
  const ranked = ids
    .map((id) => ({ card: cardById(id), score: scores[id] }))
    .sort((a, b) => b.score - a.score || a.card.id - b.card.id);
  const second = ranked[1];
  const showSecond = tiedIds.length === 1 && second.score > 0 && second.score < max;
  return {
    winner: cardById(winnerId),
    scores,
    ranked,
    second: showSecond ? second.card : null,
    tied: tiedIds.length > 1,
  };
}

export const PHASE3_FRIEND_DRIFT_REASON_META = {
  title: T("친구와 멀어지는 이유 테스트", "Why friends drift", "友達と疎遠になる理由", "和朋友变疏远的原因", "和朋友變疏遠的原因", "Vì sao bạn bè dần xa nhau", "Kenapa jadi jarang sama teman"),
  description: T("12가지 장면에서 나의 거리두기 패턴을 보고, 친구와 다시 가까워지는 한마디를 알려드립니다.", "Twelve everyday moments show how you create distance, and one line that can bring a friend closer.", "12の場面で、自分が距離を置くパターンと、もう一度近づくための一言が分かります。", "12个日常场面，看出你怎样拉开距离，并给你一句可以重新靠近的话。", "12個日常場面，看出你怎樣拉開距離，並給你一句可以重新靠近的話。", "12 tình huống cho thấy cách bạn tạo khoảng cách, và một câu để lại gần.", "12 momen sehari-hari menunjukkan cara kamu menciptakan jarak, plus satu kalimat untuk dekat lagi."),
  tags: {
    "ko": ["우정", "관계이해", "연애테스트"],
    "en": ["friendship", "why we drift", "relationships"],
    "ja": ["友情", "関係の理解", "人間関係"],
    "zh-CN": ["友情", "关系理解", "人际关系"],
    "zh-TW": ["友情", "關係理解", "人際關係"],
    "vi": ["tình bạn", "vì sao xa nhau", "mối quan hệ"],
    "id": ["persahabatan", "kenapa jarang", "hubungan"],
  } as Record<Phase3FriendDriftLocaleKey, string[]>,
};
