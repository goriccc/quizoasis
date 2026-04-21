/** 밸런스 게임 - 연애편 극한버전 — 10문항 이미지 2지선다, A=0 B=1, 총점 0~10 */

function M(
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

/** 진행 순서 라운드 재번호용 — 저장된 문장 앞의 「라운드 N.」접두 제거 */
export function stripLoveBalanceRoundPrefix(raw: string): string {
  return raw
    .replace(/^라운드\s*\d+\.\s*(?:최후의 라운드\.\s*)?/, '')
    .replace(/^Round\s*\d+\.\s*(?:Final round\.\s*)?/i, '')
    .replace(/^ラウンド\s*\d+\.\s*(?:最終ラウンド\.\s*)?/, '')
    .replace(/^第\s*\d+\s*轮\.\s*(?:最终回合\.\s*)?/, '')
    .replace(/^第\s*\d+\s*輪\.\s*(?:最終回合\.\s*)?/, '')
    .replace(/^Vòng\s*\d+\.\s*(?:Vòng cuối cùng\.\s*)?/i, '')
    .replace(/^Ronde\s*\d+\.\s*(?:Ronde terakhir\.\s*)?/i, '')
    .trim();
}

export interface Phase3GameLoveBalanceExtremeQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    image: string;
    label: Record<string, string>;
    score: number;
  }[];
}

export interface Phase3GameLoveBalanceExtremeResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  oneLiner: Record<string, string>;
  loveKeywords: Record<string, string>;
  happyLove: Record<string, string>;
  hardMoment: Record<string, string>;
  goodMatch: Record<string, string>;
  badMatch: Record<string, string>;
}

export function calculatePhase3GameLoveBalanceExtremeResult(scores: number[]): string {
  const total = scores.reduce((a, b) => a + (b ?? 0), 0);
  if (total <= 1) return 'Type1';
  if (total <= 3) return 'Type2';
  if (total <= 5) return 'Type3';
  if (total <= 7) return 'Type4';
  if (total <= 9) return 'Type5';
  return 'Type6';
}

const QPICK = (
  ko: string,
  en: string,
  ja: string,
  zhCN: string,
  zhTW: string,
  vi: string,
  id: string
) => M(ko, en, ja, zhCN, zhTW, vi, id);

export const phase3GameLoveBalanceExtremeQuestions: Phase3GameLoveBalanceExtremeQuestion[] = [
  {
    id: 1,
    question: QPICK(
      '라운드 1. 둘 중 하나를 반드시 골라야 한다면?',
      'Round 1. If you had to pick one?',
      'ラウンド1. どちらか一方は必ず選ぶなら？',
      '第 1 轮. 如果必须二选一？',
      '第 1 輪. 如果必須二選一？',
      'Vòng 1. Nếu bắt buộc phải chọn một?',
      'Ronde 1. Kalau harus memilih salah satu?'
    ),
    options: [
      {
        image: 'p3_game_love_balance_extreme_q1a.jpg',
        label: M(
          '연인이 내 동의 없이 내 폰을 몰래 본다',
          'Partner secretly checks my phone without consent',
          '恋人が同意なくこっそり私のスマホを見る',
          '恋人未经同意偷看我的手机',
          '戀人未經同意偷看我的手機',
          'Người yêu lén xem điện thoại của tôi mà không xin phép',
          'Pasangan diam-diam cek HP-ku tanpa izin'
        ),
        score: 0,
      },
      {
        image: 'p3_game_love_balance_extreme_q1b.jpg',
        label: M(
          '연인이 나에게 아무것도 공유하지 않고 완전한 비밀주의로 산다',
          'Partner shares nothing and lives in total secrecy',
          '恋人が何も共有せず、完全秘密主義で過ごす',
          '恋人什么都不分享，完全保密主义生活',
          '戀人什麼都不分享，完全保密主義生活',
          'Người yêu không chia sẻ gì và sống bí mật tuyệt đối',
          'Pasangan tidak berbagi apa pun dan hidup super rahasia'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 2,
    question: QPICK(
      '라운드 2. 둘 중 하나를 반드시 골라야 한다면?',
      'Round 2. If you had to pick one?',
      'ラウンド2. どちらか一方は必ず選ぶなら？',
      '第 2 轮. 如果必须二选一？',
      '第 2 輪. 如果必須二選一？',
      'Vòng 2. Nếu bắt buộc phải chọn một?',
      'Ronde 2. Kalau harus memilih salah satu?'
    ),
    options: [
      {
        image: 'p3_game_love_balance_extreme_q2a.jpg',
        label: M(
          '연인이 5분마다 내 위치를 확인하는 GPS 공유를 요구한다',
          'Partner demands GPS sharing with location checks every 5 minutes',
          '恋人が5分ごとに位置確認するGPS共有を求める',
          '恋人要求每 5 分钟查一次位置的实时共享',
          '戀人要求每 5 分鐘查一次位置的即時共享',
          'Người yêu bắt chia sẻ vị trí và kiểm tra mỗi 5 phút',
          'Pasangan minta share GPS dan cek lokasiku tiap 5 menit'
        ),
        score: 0,
      },
      {
        image: 'p3_game_love_balance_extreme_q2b.jpg',
        label: M(
          '연인이 어디 있는지 절대 말하지 않고 연락도 하루 1번만 된다',
          'Partner never says where they are and only texts once a day',
          '恋人がどこにいるか一切言わず、連絡も1日1回だけ',
          '恋人从不透露行踪，每天只联系一次',
          '戀人從不透露行蹤，每天只聯絡一次',
          'Người yêu không nói đang ở đâu và chỉ nhắn một lần/ngày',
          'Pasangan tak pernah bilang di mana dan hanya chat sekali sehari'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 3,
    question: QPICK(
      '라운드 3. 둘 중 하나를 반드시 골라야 한다면?',
      'Round 3. If you had to pick one?',
      'ラウンド3. どちらか一方は必ず選ぶなら？',
      '第 3 轮. 如果必须二选一？',
      '第 3 輪. 如果必須二選一？',
      'Vòng 3. Nếu bắt buộc phải chọn một?',
      'Ronde 3. Kalau harus memilih salah satu?'
    ),
    options: [
      {
        image: 'p3_game_love_balance_extreme_q3a.jpg',
        label: M(
          '연인이 나의 모든 이성 친구와 절교를 요구한다',
          'Partner demands I cut off every opposite-sex friend',
          '恋人が私の異性の友人全員と絶交しろと要求する',
          '恋人要求我和所有异性朋友绝交',
          '戀人要求我和所有異性朋友絕交',
          'Người yêu bắt tôi cắt đứt mọi bạn khác giới',
          'Pasangan minta aku putus hubungan dengan semua teman lawan jenis'
        ),
        score: 0,
      },
      {
        image: 'p3_game_love_balance_extreme_q3b.jpg',
        label: M(
          '연인의 전 남자친구/여자친구와 매주 셋이서 함께 밥을 먹어야 한다',
          'I must have weekly meals with my partner and their ex, the three of us',
          '恋人の元恋人と三人で毎週ご飯を食べなければならない',
          '每周必须和恋人及其前任三人一起吃饭',
          '每週必須和戀人及其前任三人一起吃飯',
          'Mỗi tuần phải ăn cùng người yêu và người yêu cũ của họ',
          'Setiap minggu makan bertiga: aku, pasangan, dan mantan pasangan'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 4,
    question: QPICK(
      '라운드 4. 둘 중 하나를 반드시 골라야 한다면?',
      'Round 4. If you had to pick one?',
      'ラウンド4. どちらか一方は必ず選ぶなら？',
      '第 4 轮. 如果必须二选一？',
      '第 4 輪. 如果必須二選一？',
      'Vòng 4. Nếu bắt buộc phải chọn một?',
      'Ronde 4. Kalau harus memilih salah satu?'
    ),
    options: [
      {
        image: 'p3_game_love_balance_extreme_q4a.jpg',
        label: M(
          '연인이 나의 모든 SNS 비밀번호를 요구하고 매일 확인한다',
          'Partner demands all my social passwords and checks them daily',
          '恋人がSNSのパスワード全てを要求し毎日確認する',
          '恋人要了我所有社交账号密码并每天检查',
          '戀人要了我所有社群帳號密碼並每天檢查',
          'Người yêu đòi mật khẩu mạng xã hội và kiểm tra mỗi ngày',
          'Pasangan minta semua password medsos dan cek setiap hari'
        ),
        score: 0,
      },
      {
        image: 'p3_game_love_balance_extreme_q4b.jpg',
        label: M(
          '연인이 SNS에서 나를 태그하지 않고 우리 관계를 완전히 비공개로 한다',
          'Partner never tags me and keeps our relationship fully private online',
          '恋人がSNSで私をタグせず、関係を完全非公開にする',
          '恋人在社交平台上从不标签我，关系完全保密',
          '戀人在社群上從不標註我，關係完全保密',
          'Người yêu không tag tôi và giấu hoàn toàn mối quan hệ trên mạng',
          'Pasangan tak pernah men-tag dan menyembunyikan hubungan di medsos'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 5,
    question: QPICK(
      '라운드 5. 둘 중 하나를 반드시 골라야 한다면?',
      'Round 5. If you had to pick one?',
      'ラウンド5. どちらか一方は必ず選ぶなら？',
      '第 5 轮. 如果必须二选一？',
      '第 5 輪. 如果必須二選一？',
      'Vòng 5. Nếu bắt buộc phải chọn một?',
      'Ronde 5. Kalau harus memilih salah satu?'
    ),
    options: [
      {
        image: 'p3_game_love_balance_extreme_q5a.jpg',
        label: M(
          '연인이 나의 모든 지출 내역을 보고받고 소비를 통제하려 한다',
          'Partner reviews all my spending and tries to control it',
          '恋人が全支出を報告させ、消費をコントロールしようとする',
          '恋人要汇报所有消费并试图控制我的开销',
          '戀人要匯報所有消費並試圖控制我的開銷',
          'Người yêu xem mọi chi tiêu và muốn kiểm soát',
          'Pasangan minta laporan semua pengeluaran dan ingin mengontrol'
        ),
        score: 0,
      },
      {
        image: 'p3_game_love_balance_extreme_q5b.jpg',
        label: M(
          '연인이 데이트 비용을 한 푼도 내지 않는다. 영원히 더치페이 없이 내가 전담한다',
          'Partner never pays on dates—I cover everything forever, no splitting',
          '恋人がデート代を一切払わない。割り勘なしでずっと私が全額負担',
          '约会费用恋人一分不出，永远没有 AA，全由我承担',
          '約會費用戀人一分不出，永遠沒有 AA，全由我承擔',
          'Người yêu không bao giờ trả tiền hẹn hò—mãi mãi tôi trả hết',
          'Pasangan tak pernah bayar kencan—selamanya aku yang tanggung semua'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 6,
    question: QPICK(
      '라운드 6. 둘 중 하나를 반드시 골라야 한다면?',
      'Round 6. If you had to pick one?',
      'ラウンド6. どちらか一方は必ず選ぶなら？',
      '第 6 轮. 如果必须二选一？',
      '第 6 輪. 如果必須二選一？',
      'Vòng 6. Nếu bắt buộc phải chọn một?',
      'Ronde 6. Kalau harus memilih salah satu?'
    ),
    options: [
      {
        image: 'p3_game_love_balance_extreme_q6a.jpg',
        label: M(
          '연인이 싸울 때마다 "헤어지자"를 습관처럼 말하지만 진심은 아니다',
          'Partner habitually says “let’s break up” in fights but doesn’t mean it',
          '恋人が喧嘩のたびに「別れよう」と習慣のように言うが本気ではない',
          '一吵架恋人就习惯性说「分手」但并不是真心',
          '一吵架戀人就習慣性說「分手」但並不是真心',
          'Mỗi lần cãi người yêu hay nói “chia tay” nhưng không thật lòng',
          'Tiap berantem pasangan kebiasaan bilang “putus” tapi tidak serius'
        ),
        score: 0,
      },
      {
        image: 'p3_game_love_balance_extreme_q6b.jpg',
        label: M(
          '연인이 싸울 때 아무 말도 하지 않고 며칠간 완전히 연락을 끊는다',
          'Partner goes silent and cuts contact completely for days after a fight',
          '恋人が喧嘩後、何も言わず数日間完全に連絡を断つ',
          '吵架后恋人一声不吭，断联好几天',
          '吵架後戀人一聲不吭，斷聯好幾天',
          'Sau cãi nhau người yêu im lặng và cắt liên lạc vài ngày',
          'Setelah berantem pasangan bungkam dan hilang kontak berhari-hari'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 7,
    question: QPICK(
      '라운드 7. 둘 중 하나를 반드시 골라야 한다면?',
      'Round 7. If you had to pick one?',
      'ラウンド7. どちらか一方は必ず選ぶなら？',
      '第 7 轮. 如果必须二选一？',
      '第 7 輪. 如果必須二選一？',
      'Vòng 7. Nếu bắt buộc phải chọn một?',
      'Ronde 7. Kalau harus memilih salah satu?'
    ),
    options: [
      {
        image: 'p3_game_love_balance_extreme_q7a.jpg',
        label: M(
          '연인이 내 친구들에게 나의 모든 흑역사를 털어놓는다',
          'Partner tells all my embarrassing stories to my friends',
          '恋人が友人たちに私の黒歴史を全部暴露する',
          '恋人向我的朋友们抖出我所有黑历史',
          '戀人向我的朋友們抖出我所有黑歷史',
          'Người yêu kể hết “phốt” của tôi cho bạn bè',
          'Pasangan cerita semua aibku ke teman-temanku'
        ),
        score: 0,
      },
      {
        image: 'p3_game_love_balance_extreme_q7b.jpg',
        label: M(
          '연인이 내 친구들을 싫어하고 만날 때마다 눈치를 준다',
          'Partner dislikes my friends and guilt-trips me every time I see them',
          '恋人が私の友人を嫌い、会うたびに難しい顔をする',
          '恋人讨厌我的朋友，每次见面都给我脸色',
          '戀人討厭我的朋友，每次見面都給我臉色',
          'Người yêu không thích bạn tôi và làm khó mỗi lần tôi đi gặp',
          'Pasangan tidak suka temanku dan ngambek tiap aku ketemu mereka'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 8,
    question: QPICK(
      '라운드 8. 둘 중 하나를 반드시 골라야 한다면?',
      'Round 8. If you had to pick one?',
      'ラウンド8. どちらか一方は必ず選ぶなら？',
      '第 8 轮. 如果必须二选一？',
      '第 8 輪. 如果必須二選一？',
      'Vòng 8. Nếu bắt buộc phải chọn một?',
      'Ronde 8. Kalau harus memilih salah satu?'
    ),
    options: [
      {
        image: 'p3_game_love_balance_extreme_q8a.jpg',
        label: M(
          '연인이 데이트할 때마다 지각을 30분 이상 한다. 영원히',
          'Partner is always 30+ minutes late to every date—forever',
          '恋人がデートのたびにいつも30分以上遅刻する。ずっと',
          '每次约会恋人都迟到 30 分钟以上，永远如此',
          '每次約會戀人都遲到 30 分鐘以上，永遠如此',
          'Mỗi buổi hẹn người yêu đều trễ từ 30 phút trở lên—mãi mãi',
          'Tiap kencan pasangan selalu telat 30+ menit—selamanya'
        ),
        score: 0,
      },
      {
        image: 'p3_game_love_balance_extreme_q8b.jpg',
        label: M(
          '연인이 약속 장소를 항상 혼자 정하고 내 의견을 묻지 않는다. 영원히',
          'Partner always picks the place alone and never asks my opinion—forever',
          '恋人がいつも一人で場所を決め、私の意見を聞かない。ずっと',
          '恋人总是独自决定约会地点，从不问我的意见，永远如此',
          '戀人總是獨自決定約會地點，從不問我的意見，永遠如此',
          'Người yêu luôn tự chọn chỗ và không hỏi ý tôi—mãi mãi',
          'Pasangan selalu tentukan tempat sendiri tanpa tanya aku—selamanya'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 9,
    question: QPICK(
      '라운드 9. 둘 중 하나를 반드시 골라야 한다면?',
      'Round 9. If you had to pick one?',
      'ラウンド9. どちらか一方は必ず選ぶなら？',
      '第 9 轮. 如果必须二选一？',
      '第 9 輪. 如果必須二選一？',
      'Vòng 9. Nếu bắt buộc phải chọn một?',
      'Ronde 9. Kalau harus memilih salah satu?'
    ),
    options: [
      {
        image: 'p3_game_love_balance_extreme_q9a.jpg',
        label: M(
          '연인의 부모님이 나를 마음에 들어하지 않고 노골적으로 티를 낸다',
          "Partner's parents clearly dislike me and show it openly",
          '恋人の両親が私を気に入らず、露骨に態度に出す',
          '恋人的父母明显不喜欢我，毫不掩饰',
          '戀人的父母明顯不喜歡我，毫不掩飾',
          'Bố mẹ người yêu không thích tôi và thể hiện rõ ràng',
          'Orang tua pasangan jelas tidak suka aku dan tunjukkan terang-terangan'
        ),
        score: 0,
      },
      {
        image: 'p3_game_love_balance_extreme_q9b.jpg',
        label: M(
          '내 부모님이 연인을 절대 인정하지 않는다. 영원히',
          'My parents will never accept my partner—ever',
          '私の両親が恋人を絶対に認めない。ずっと',
          '我的父母永远不会接受我的恋人',
          '我的父母永遠不會接受我的戀人',
          'Bố mẹ tôi không bao giờ chấp nhận người yêu—mãi mãi',
          'Orang tuaku tidak akan pernah menerima pasanganku—selamanya'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 10,
    question: QPICK(
      '라운드 10. 최후의 라운드. 둘 중 하나를 반드시 골라야 한다면?',
      'Round 10. Final round. If you had to pick one?',
      'ラウンド10. 最終ラウンド. どちらか一方は必ず選ぶなら？',
      '第 10 轮. 最终回合. 如果必须二选一？',
      '第 10 輪. 最終回合. 如果必須二選一？',
      'Vòng 10. Vòng cuối cùng. Nếu bắt buộc phải chọn một?',
      'Ronde 10. Ronde terakhir. Kalau harus memilih salah satu?'
    ),
    options: [
      {
        image: 'p3_game_love_balance_extreme_q10a.jpg',
        label: M(
          '연인이 나를 깊이 사랑하지만 표현을 전혀 하지 않는다. 영원히',
          'Partner loves me deeply but never shows it—forever',
          '恋人は私を深く愛しているが一切表現しない。ずっと',
          '恋人深爱我但从不表达，永远如此',
          '戀人深愛我但從不表達，永遠如此',
          'Người yêu yêu sâu đậm nhưng không bao giờ thể hiện—mãi mãi',
          'Pasangan sangat mencintaiku tapi tak pernah menunjukkannya—selamanya'
        ),
        score: 0,
      },
      {
        image: 'p3_game_love_balance_extreme_q10b.jpg',
        label: M(
          '연인이 표현은 매우 풍부하지만 사실 나를 별로 안 좋아한다',
          'Partner is very affectionate on the surface but doesn’t really like me',
          '恋人は表現は豊かだが、実はあまり好きではない',
          '恋人表达很丰富，其实并不怎么喜欢我',
          '戀人表達很豐富，其實並不怎麼喜歡我',
          'Người yêu thể hiện tình cảm rất nhiều nhưng thực ra không mấy thích tôi',
          'Pasangan penuh afeksi di luar tapi sebenarnya tidak terlalu menyukaiku'
        ),
        score: 1,
      },
    ],
  },
];

export const phase3GameLoveBalanceExtremeResults: Phase3GameLoveBalanceExtremeResult[] = [
  {
    type: 'Type1',
    emoji: '🦅',
    title: M(
      '신뢰와 자유를 최우선으로, 독립 자유형',
      'Freedom-first independent type',
      '信頼と自由を最優先、独立自由型',
      '把信任与自由放第一位，独立自由型',
      '把信任與自由放第一位，獨立自由型',
      'Ưu tiên tự do & tin cậy—kiểu độc lập tự do',
      'Utamakan kepercayaan & kebebasan—tipe independen'
    ),
    shortDescription: M(
      '당신의 연애관: 서로의 공간을 존중하는 독립적 사랑',
      'Your love style: independent love that respects space',
      'あなたの恋愛観：お互いの距離を尊重する独立した愛',
      '你的恋爱观：尊重彼此空间的独立之爱',
      '你的戀愛觀：尊重彼此空間的獨立之愛',
      'Phong cách yêu: tôn trọng không gian riêng, độc lập',
      'Gaya cinta: saling hormati ruang—cinta yang independen'
    ),
    description: M(
      '당신은 연애에서도 자유와 신뢰를 가장 중요하게 생각하는 사람입니다. 감시·통제·집착보다 서로에 대한 믿음을 바탕으로 각자의 삶을 존중하는 연애를 추구합니다. 불편하거나 상처받는 상황에서도 상대의 자유를 억압하는 방향보다는 불편함을 감수하는 쪽을 선택했습니다. 독립적인 연애관은 건강한 관계의 토대지만 때로는 표현과 헌신의 밸런스도 필요합니다.',
      'You value freedom and trust most in love. You’d rather tolerate discomfort than control your partner. You seek relationships built on faith in each other’s lives—not surveillance or possession. That independence is a healthy base, though warmth and devotion need balance too.',
      'あなたは恋愛でも自由と信頼を最重視します。監視や支配より互いの人生を信じて尊重する関係を求め、不快でも相手の自由を奪う選択は避けがちです。独立志向は健全な土台ですが、たまには表現や献身のバランスも大切です。',
      '你在恋爱中最看重自由与信任。比起监控与控制，你更愿相信并尊重彼此的生活；即使难受也不愿用束缚换安心。独立取向是健康基础，但表达与付出的平衡也值得留意。',
      '你在戀愛中最看重自由與信任。比起監控與控制，你更願相信並尊重彼此的生活；即使難受也不願用束縛換安心。獨立取向是健康基礎，但表達與付出的平衡也值得留意。',
      'Bạn coi trọng tự do và tin cậy trong tình yêu. Bạn chịu khó chịu hơn là kiểm soát đối phương. Nền tản độc lập lành mạnh, nhưng đừng quên cân bằng thể hiện và hy sinh.',
      'Kamu mengutamakan kebebasan dan kepercayaan. Lebih memilih menahan risih daripada mengontrol pasangan. Independensi itu sehat, tapi ekspresi dan pengorbanan juga perlu seimbang.'
    ),
    oneLiner: M(
      '"진짜 사랑은 잡는 게 아니라 자유롭게 두어도 옆에 있는 것"',
      '"Real love isn’t grabbing—it’s them staying when they’re free to go."',
      '「本当の愛は掴むことではなく、自由にしていても隣にいてくれること」',
      '「真正的爱不是抓紧，而是自由了也还在身边」',
      '「真正的愛不是抓緊，而是自由了也還在身邊」',
      '"Yêu thật không phải giữ chặt—là họ ở lại dù được tự do rời đi."',
      '"Cinta sejati bukan menahan—tapi dia tetap di sisi meski bebas pergi."'
    ),
    loveKeywords: M(
      '신뢰·자유·독립·존중·여백',
      'Trust · Freedom · Independence · Respect · Space',
      '信頼·自由·独立·尊重·余白',
      '信任·自由·独立·尊重·留白',
      '信任·自由·獨立·尊重·留白',
      'Tin cậy · Tự do · Độc lập · Tôn trọng · Khoảng trời riêng',
      'Kepercayaan · Kebebasan · Independen · Hormat · Ruang'
    ),
    happyLove: M(
      '각자의 공간이 있으면서 함께할 때 깊이 연결되는 관계',
      'Deep connection when together, with room to breathe apart',
      'それぞれに余白があり、一緒の時間は深くつながれる関係',
      '各自有空间，相聚时又能深度连接的关系',
      '各自有空間，相聚時又能深度連結的關係',
      'Có không gian riêng nhưng khi ở bên nhau thì gắn sâu',
      'Punya ruang masing-masing, tapi saat bersama terhubung dalam'
    ),
    hardMoment: M(
      '상대가 불안 애착형이거나 밀착을 원할 때',
      'When your partner is anxious-attached or wants constant closeness',
      '相手が不安型愛着やべったり密着を求めるとき',
      '对方是不安依恋或总想黏在一起时',
      '對方是不安依戀或總想黏在一起時',
      'Khi đối phương bám dính hoặc luôn cần sát cánh',
      'Saat pasangan terlalu menempel atau cemas berpisah'
    ),
    goodMatch: M(
      '비슷하게 독립적인 연애관을 가진 사람',
      'Someone with a similarly independent love style',
      '同じく独立志向の恋愛観を持つ人',
      '恋爱观同样独立的人',
      '戀愛觀同樣獨立的人',
      'Người cũng độc lập trong cách yêu',
      'Orang dengan gaya cinta independen serupa'
    ),
    badMatch: M(
      '통제욕이 강한 집착형 연인',
      'A controlling, possessive partner',
      'コントロール欲が強い執着型の恋人',
      '控制欲强、占有欲强的恋人',
      '控制欲強、占有欲強的戀人',
      'Người yêu kiểm soát và chiếm hữu mạnh',
      'Pasangan posesif dan suka mengontrol'
    ),
  },
  {
    type: 'Type2',
    emoji: '🏠',
    title: M(
      '불편해도 안정을 선택하는, 현실 안정 추구형',
      'Stability-first realistic type',
      '不快でも安定を選ぶ、現実安定志向型',
      '宁可不舒服也要稳定，现实求稳型',
      '寧可不舒服也要穩定，現實求穩型',
      'Chịu khó để giữ ổn định—kiểu thực tế',
      'Pilih stabilitas meski risih—tipe realistis'
    ),
    shortDescription: M(
      '당신의 연애관: 갈등보다 안정을 선택하는 현실적 사랑',
      'Your love style: you choose peace over conflict',
      'あなたの恋愛観：対立より安定を選ぶ現実的な愛',
      '你的恋爱观：比起冲突更选稳定',
      '你的戀愛觀：比起衝突更選穩定',
      'Bạn chọn yên bình hơn là đối đầu',
      'Kamu memilih damai daripada konflik'
    ),
    description: M(
      '당신은 불편함보다 관계의 안정과 평화를 더 중요하게 생각하는 사람입니다. 극단적인 선택 앞에서 감정적 폭발이나 자유보다 관계를 유지하고 안정을 찾는 방향을 선택했습니다. 참을 수 있는 불편함은 참고 함께하는 것을 선호합니다. 이 연애관은 장기 관계에서 강점이 되지만 자신의 감정을 너무 억누르지 않도록 주의가 필요합니다.',
      'You prioritize relationship stability over discomfort. In extreme either/or moments, you lean toward keeping the bond rather than emotional blow-ups or “freedom at all costs.” You’ll tolerate friction to stay together—a strength long-term, but don’t forget your own feelings.',
      'あなたは不快より関係の安定と平和を重視します。極端な二択では、感情爆発や自由より「続ける・落ち着く」方向を選びがちです。我慢できる不快は我慢して一緒にいたいタイプ。長期には強みですが、自分の感情を押し殺しすぎないで。',
      '你更看重关系的稳定与平静。在极端二选一中，你倾向维持关系而非情绪爆发或一味追求自由。能忍的不适你会忍以继续在一起——长期是优点，但别过度压抑自己的感受。',
      '你更看重關係的穩定與平靜。在極端二選一中，你傾向維持關係而非情緒爆發或一味追求自由。能忍的不適你會忍以繼續在一起——長期是優點，但別過度壓抑自己的感受。',
      'Bạn ưu tiên ổn định hơn khó chịu. Trong lựa cực đoan, bạn chọn giữ kết nối. Điểm mạnh cho lâu dài—nhưng đừng nén cảm xúc quá mức.',
      'Kamu utamakan stabilitas. Di pilihan ekstrem, kamu pilih mempertahankan hubungan. Bagus untuk jangka panjang—tapi jangan tekan perasaan sendiri terus.'
    ),
    oneLiner: M(
      '"완벽한 관계는 없다. 함께 있을 때 편안하면 그게 좋은 연애"',
      '"No relationship is perfect—if it feels easy together, that’s good love."',
      '「完璧な関係はない。一緒にいるとき落ち着けるなら、それがいい恋」',
      '「没有完美关系，在一起舒服就是好恋爱」',
      '「沒有完美關係，在一起舒服就是好戀愛」',
      '"Không có mối nào hoàn hảo—ở bên nhau mà nhẹ nhàng là yêu tốt."',
      '"Tak ada hubungan sempurna—nyaman bareng itu cinta yang baik."'
    ),
    loveKeywords: M(
      '안정·평화·인내·관계 유지·현실적',
      'Stability · Peace · Patience · Keeping the bond · Realistic',
      '安定·平和·忍耐·関係維持·現実的',
      '稳定·和平·忍耐·维持关系·现实',
      '穩定·和平·忍耐·維持關係·現實',
      'Ổn định · Yên bình · Kiên nhẫn · Giữ kết nối · Thực tế',
      'Stabilitas · Damai · Sabar · Pertahankan hubungan · Realistis'
    ),
    happyLove: M(
      '갈등이 적고 서로 배려하는 조용한 관계',
      'A calm relationship with few fights and mutual care',
      '対立が少なく、お互いに配慮し合える静かな関係',
      '争吵少、彼此体贴的安静关系',
      '爭吵少、彼此體貼的安靜關係',
      'Ít cãi vã, quan tâm lẫn nhau, yên ả',
      'Jarang berantem, saling perhatian, tenang'
    ),
    hardMoment: M(
      '참는 것이 습관이 되어 자신의 감정을 잃어버릴 때',
      'When swallowing feelings becomes a habit and you lose yourself',
      '我慢が癖になり、自分の感情を見失うとき',
      '忍让成习惯、渐渐不知道自己感受时',
      '忍讓成習慣、漸漸不知道自己感受時',
      'Khi nhịn quen đến mức quên cảm xúc mình',
      'Saat menelan terus sampai lupa perasaan sendiri'
    ),
    goodMatch: M(
      '마찬가지로 안정을 추구하는 차분한 연인',
      'A calm partner who also values stability',
      '同じく安定を求める落ち着いた恋人',
      '同样追求稳定的沉稳恋人',
      '同樣追求穩定的沉穩戀人',
      'Người yêu điềm tĩnh, cũng cần sự ổn định',
      'Pasangan tenang yang juga cari stabilitas'
    ),
    badMatch: M(
      '감정 기복이 심하고 예측 불가능한 연인',
      'A partner with volatile, unpredictable moods',
      '感情の起伏が激しく予測不能な恋人',
      '情绪波动大、难以预测的恋人',
      '情緒波動大、難以預測的戀人',
      'Người yêu cảm xúc thất thường, khó đoán',
      'Pasangan mood naik turun, sulit diprediksi'
    ),
  },
  {
    type: 'Type3',
    emoji: '⚖️',
    title: M(
      '감정보다 원칙을 따르는, 논리 균형형',
      'Balanced “context over rules” type',
      '感情より原則に従う、論理バランス型',
      '在感性与原则间找平衡的逻辑型',
      '在感性與原則間找平衡的邏輯型',
      'Cân bằng lý trí—bối cảnh quyết định',
      'Seimbang logis—konteks yang menentukan'
    ),
    shortDescription: M(
      '당신의 연애관: 감정과 이성 사이에서 균형을 찾는 사랑',
      'Your love style: balance between heart and head',
      'あなたの恋愛観：感情と理性の間でバランスを取る愛',
      '你的恋爱观：在感性与理性之间找平衡',
      '你的戀愛觀：在感性與理性之間找平衡',
      'Bạn cân bằng cảm xúc và lý trí',
      'Kamu menyeimbangkan hati dan pikiran'
    ),
    description: M(
      '당신은 어느 쪽도 극단적으로 치우치지 않으려는 균형 있는 연애관을 가진 사람입니다. 밸런스 게임의 선택이 일관된 방향 없이 상황에 따라 달라졌습니다. 어떤 문제는 자유를 선택하고 어떤 문제는 안정을 선택하는 유연함이 있습니다. 연애에서도 원칙보다 맥락을 중요하게 여기는 타입입니다. 상황 판단력이 좋지만 원칙이 없어 보일 수도 있습니다.',
      'You avoid extremes. Your picks shift with context—sometimes freedom, sometimes stability. In love you care about the situation more than rigid rules. Strong situational judgment, though it can look “inconsistent.”',
      'あなたは極端を避け、状況で選びが変わるバランス型です。自由を取る場面もあれば安定を取る場面もある。恋愛でも硬い原則より文脈を重視します。状況判断力は高いが、一貫性がないように見えることも。',
      '你不爱走极端，选择会随情境在变——有时偏自由，有时偏稳定。恋爱里你看重情境多于死板原则。判断力好，但可能显得“没定见”。',
      '你不愛走極端，選擇會隨情境在變——有時偏自由，有時偏穩定。戀愛裡你看重情境多於死板原則。判斷力好，但可能顯得「沒定見」。',
      'Bạn tránh cực đoan, chọn theo tình huống. Trong yêu, ngữ cảnh quan trọng hơn quy tắc cứng. Nhạy tình huống—đôi khi bị hiểu là thiếu nguyên tắc.',
      'Kamu hindari ekstrem, pilih sesuai konteks. Dalam cinta, konteks lebih penting dari aturan kaku. Cerdas baca situasi—kadang terlihat tidak konsisten.'
    ),
    oneLiner: M(
      '"완전한 정답은 없다. 함께 맥락에 맞게 풀어가는 게 연애"',
      '"There’s no perfect answer—love is solving it together, in context."',
      '「完璧な正解はない。一緒に文脈に合わせて解いていくのが恋」',
      '「没有标准答案，一起按情境解开才是恋爱」',
      '「沒有標準答案，一起按情境解開才是戀愛」',
      '"Không có đáp án tuyệt đối—yêu là cùng nhau xử lý theo bối cảnh."',
      '"Tak ada jawaban sempurna—cinta itu menyelesaikan bersama sesuai konteks."'
    ),
    loveKeywords: M(
      '균형·유연함·상황 판단·중도·현실적 이상주의',
      'Balance · Flexibility · Context · Middle path · Pragmatic idealism',
      'バランス·柔軟·状況判断·中庸·現実的理想主義',
      '平衡·灵活·情境判断·中庸·务实的理想主义',
      '平衡·靈活·情境判斷·中庸·務實的理想主義',
      'Cân bằng · Linh hoạt · Bối cảnh · Trung dung · Lý tưởng thực tế',
      'Seimbang · Fleksibel · Konteks · Jalan tengah · Idealisme pragmatis'
    ),
    happyLove: M(
      '대화로 모든 것을 풀어갈 수 있는 관계',
      'A relationship where you can talk anything through',
      '対話で何でも解いていける関係',
      '什么事都能聊开的关系',
      '什麼事都能聊開的關係',
      'Mối quan hệ nói chuyện là thông hết',
      'Hubungan yang bisa diselesaikan lewat obrolan'
    ),
    hardMoment: M(
      '상대가 극단적인 선택을 요구하는 상황',
      'When your partner demands all-or-nothing extremes',
      '相手が極端な二者択一を迫る場面',
      '对方逼你做极端二选一的时候',
      '對方逼你做極端二選一的時候',
      'Khi đối phương ép chọn cực đoan',
      'Saat pasangan memaksa pilihan ekstrem'
    ),
    goodMatch: M(
      '비슷하게 유연하고 대화가 되는 연인',
      'A flexible partner who communicates well',
      '同じく柔軟で話し合える恋人',
      '同样灵活、能沟通的恋人',
      '同樣靈活、能溝通的戀人',
      'Người linh hoạt và nói chuyện được',
      'Pasangan fleksibel dan bisa komunikasi'
    ),
    badMatch: M(
      '상대가 극단적으로 한 방향만 고집하는 유형',
      'Someone who insists on one extreme and never bends',
      '極端な一方向だけを押し通すタイプ',
      '只认一个极端、绝不妥协的类型',
      '只認一個極端、絕不妥協的類型',
      'Kiểu chỉ một cực đoan, không nhún nhường',
      'Tipe memaksakan satu kutub saja'
    ),
  },
  {
    type: 'Type4',
    emoji: '💓',
    title: M(
      '감정에 솔직하게 반응하는, 감성 직관형',
      'Heart-led intuitive type',
      '感情に素直に反応する、感性直観型',
      '跟着感觉走的感性直觉型',
      '跟著感覺走的感性直覺型',
      'Theo trực giác cảm xúc',
      'Mengikuti intuisi dan perasaan'
    ),
    shortDescription: M(
      '당신의 연애관: 논리보다 감정과 직관을 따르는 사랑',
      'Your love style: you follow feeling over logic',
      'あなたの恋愛観：論理より感情と直感に従う愛',
      '你的恋爱观：跟着情绪与直觉多于逻辑',
      '你的戀愛觀：跟著情緒與直覺多於邏輯',
      'Bạn theo cảm xúc và trực giác hơn lý trí',
      'Kamu mengikuti perasaan lebih dari logika'
    ),
    description: M(
      '당신은 연애에서 감정의 흐름을 가장 중요하게 생각하는 사람입니다. 밸런스 게임에서 이성적 판단보다 감정적으로 덜 상처받는 쪽, 더 따뜻하게 느껴지는 쪽을 선택했습니다. 논리적으로 맞지 않아도 마음이 더 편한 방향을 따라가는 직관적인 연애관입니다. 감성이 풍부하고 공감 능력이 좋지만 감정에 너무 의존하면 이성적 판단이 흐려질 수 있습니다.',
      'You lead with emotion. In tough trade-offs you pick what hurts less or feels warmer—even if it’s not “logical.” Rich empathy is your gift; just watch for decisions clouded by mood.',
      'あなたは感情の流れを最優先します。苦しい二択では、傷が浅い方・温かく感じる方を選びがち。論理とズレても心が楽な方へ。共感力は強いが、感情任せになりすぎると判断が曇ることも。',
      '你最在意感受。在两难里你常选不那么伤、或更暖的那边——哪怕不那么“合理”。共情是天赋，但别太让情绪独揽决定。',
      '你最在意感受。在兩難裡你常選不那麼傷、或更暖的那邊——哪怕不那么「合理」。共情是天賦，但別太讓情緒獨攬決定。',
      'Bạn đặt cảm xúc lên hàng đầu. Trong lựa chọn khó, bạn chọn phía ít đau hơn hoặc ấm hơn. Giàu đồng cảm—cẩn thận khi quyết định theo tâm trạng.',
      'Kamu utamakan alur perasaan. Di pilihan sulit, kamu pilih yang lebih ringan atau lebih hangat. Empati kuat—hati-hati jika mood mengaburkan penilaian.'
    ),
    oneLiner: M(
      '"사랑은 계산이 아니다. 느끼는 것이 맞으면 그게 맞는 연애"',
      '"Love isn’t math—if it feels right, that’s your kind of love."',
      '「恋は計算じゃない。感じた通りが正しい、それが恋」',
      '「爱不是算计，心里觉得对就是对」',
      '「愛不是算計，心裡覺得對就是對」',
      '"Yêu không phải tính toán—thấy đúng trong lòng là đúng."',
      '"Cinta bukan hitungan—kalau hati bilang benar, itu benar."'
    ),
    loveKeywords: M(
      '감성·직관·공감·진심·따뜻함',
      'Emotion · Intuition · Empathy · Sincerity · Warmth',
      '感性·直感·共感·真心·温かさ',
      '感性·直觉·共情·真心·温暖',
      '感性·直覺·共情·真心·溫暖',
      'Cảm xúc · Trực giác · Đồng cảm · Chân thành · Ấm áp',
      'Emosi · Intuisi · Empati · Tulus · Hangat'
    ),
    happyLove: M(
      '감정적으로 깊이 연결되고 표현이 풍부한 관계',
      'Deep emotional connection and lots of affection',
      '感情的に深くつながり、表現も豊かな関係',
      '情感连接深、表达丰富的关系',
      '情感連結深、表達豐富的關係',
      'Gắn kết cảm xúc sâu, thể hiện nhiều',
      'Terhubung emosional dalam, penuh ungkapan'
    ),
    hardMoment: M(
      '상대가 감정을 무시하고 논리로만 대응할 때',
      'When your partner dismisses feelings and only uses cold logic',
      '相手が感情を無視し論理だけで返すとき',
      '对方无视感受、只用冷冰冰逻辑回应时',
      '對方無視感受、只用冷冰冰邏輯回應時',
      'Khi đối phương phớt lờ cảm xúc, chỉ nói lý lẽ',
      'Saat pasangan abaikan perasaan, hanya logika dingin'
    ),
    goodMatch: M(
      '감성적으로 소통하고 공감해주는 연인',
      'A partner who meets you emotionally and empathizes',
      '感情的に通じ合い、共感してくれる恋人',
      '能感性沟通、会共情的恋人',
      '能感性溝通、會共情的戀人',
      'Người giao tiếp bằng cảm xúc và đồng cảm',
      'Pasangan yang komunikasi lewat perasaan dan empati'
    ),
    badMatch: M(
      '감정 표현이 없고 차가운 이성형 연인',
      'A cold, hyper-rational partner with little warmth',
      '感情表現がなく冷たい理性型の恋人',
      '几乎不表达感情、冷冰冰的理性型恋人',
      '幾乎不表達感情、冷冰冰的理性型戀人',
      'Người lý trí lạnh, ít thể hiện cảm xúc',
      'Pasangan rasional dingin, jarang tunjukkan afeksi'
    ),
  },
  {
    type: 'Type5',
    emoji: '🔥',
    title: M(
      '관계를 위해 감수하는, 헌신 몰입형',
      'All-in devoted type',
      '関係のために耐える、献身没入型',
      '为关系能忍、全心投入型',
      '為關係能忍、全心投入型',
      'Hy sinh vì mối quan hệ—kiểu “dấn” hết',
      'Rela berkorban demi hubungan—tipe all-in'
    ),
    shortDescription: M(
      '당신의 연애관: 사랑을 위해서라면 불편함을 감수하는 헌신적 사랑',
      'Your love style: you’ll endure discomfort for love',
      'あなたの恋愛観：愛のためなら不快も引き受ける献身的な愛',
      '你的恋爱观：为爱可以承受不舒服',
      '你的戀愛觀：為愛可以承受不舒服',
      'Bạn chịu khó vì tình yêu',
      'Kamu menelan risih demi cinta'
    ),
    description: M(
      '당신은 연애에서 자신보다 관계와 상대를 우선하는 경향이 있습니다. 밸런스 게임 전반에서 자유나 독립보다 관계를 유지하고 상대와 함께하기 위해 불편함을 감수하는 선택을 했습니다. 헌신적이고 깊이 빠져드는 연애를 합니다. 이 연애관은 상대에게 큰 안정감을 줄 수 있지만 자신을 너무 잃어버리지 않도록 주의해야 합니다.',
      'You tend to put the relationship and partner before yourself. Across the game you chose discomfort to stay close rather than protect independence. That devotion is reassuring—just don’t lose yourself.',
      'あなたは自分より関係と相手を優先しがちです。自由より一緒にいるための不快を選ぶ場面が多かったでしょう。献身的で相手に安心を与える一方、自分を見失わないように。',
      '你常把关系和对方放在自己前面。测试里你多次为在一起而选更难受的一边。付出让人安心，但别把自己弄丢了。',
      '你常把關係和對方放在自己前面。測驗裡你多次為在一起而選更難受的一邊。付出讓人安心，但別把自己弄丟了。',
      'Bạn hay đặt mối quan hệ lên trên bản thân. Bạn chọn chịu đựng để ở bên. An toàn cho đối phương—nhưng giữ ranh giới cho mình.',
      'Kamu sering utamakan hubungan. Kamu pilih menahan demi bersama. Menenangkan pasangan—tapi jaga diri sendiri.'
    ),
    oneLiner: M(
      '"사랑하면 그 사람이 전부가 된다. 불편함쯤은 감수할 수 있다"',
      '"When you love, they become your world—a little discomfort is nothing."',
      '「好きならその人がすべて。不快くらい耐えられる」',
      '「爱了那个人就是全部，一点不舒服算什么」',
      '「愛了那個人就是全部，一點不舒服算什麼」',
      '"Yêu là người đó là cả thế giới—chút khó chịu không sao."',
      '"Kalau cinta, dia segalanya—sedikit risih bisa ditahan."'
    ),
    loveKeywords: M(
      '헌신·몰입·희생·깊이·애착',
      'Devotion · Immersion · Sacrifice · Depth · Attachment',
      '献身·没入·犠牲·深さ·愛着',
      '投入·沉浸·牺牲·深度·依恋',
      '投入·沉浸·犧牲·深度·依戀',
      'Hy sinh · Đắm chìm · Tận tụy · Sâu · Gắn bó',
      'Pengabdian · Menyelam dalam · Berkorban · Dalam · Keterikatan'
    ),
    happyLove: M(
      '상대도 비슷하게 몰입하고 서로에게 전부인 관계',
      'Both of you all-in, each other’s whole world',
      '相手も同じように没入し、互いがすべての関係',
      '对方也同样投入、彼此是对方的全世界',
      '對方也同樣投入、彼此是對方的全世界',
      'Đối phương cũng dấn hết, hai người là cả thế giới của nhau',
      'Pasangan juga all-in, saling jadi segalanya'
    ),
    hardMoment: M(
      '내가 많이 헌신하는데 상대가 가볍게 대할 때',
      'When you give so much and they act casual',
      '自分は深く尽くすのに相手が軽い態度のとき',
      '你付出很多，对方却很轻飘时',
      '你付出很多，對方卻很輕飄時',
      'Khi mình cho nhiều mà đối phương thờ ơ',
      'Saat aku serius banget tapi pasangan santai saja'
    ),
    goodMatch: M(
      '마찬가지로 깊이 몰입하는 헌신적인 연인',
      'A partner who’s equally devoted and deep',
      '同じく深く没入する献身的な恋人',
      '同样深度投入、愿意付出的恋人',
      '同樣深度投入、願意付出的戀人',
      'Người yêu cũng tận tâm, đi sâu như bạn',
      'Pasangan yang sama-sama tulus dan dalam'
    ),
    badMatch: M(
      '자유를 최우선으로 하는 독립형 연인',
      'A fiercely independent partner who puts freedom first',
      '自由を最優先する独立型の恋人',
      '把自由放第一位的独立型恋人',
      '把自由放第一位的獨立型戀人',
      'Người độc lập, ưu tiên tự do tuyệt đối',
      'Pasangan independen yang utamakan kebebasan'
    ),
  },
  {
    type: 'Type6',
    emoji: '👑',
    title: M(
      '관계보다 자신을 지키는, 자존감 우선형',
      'Self-respect boundary type',
      '関係より自分を守る、自尊心優先型',
      '更守住自己、自尊优先型',
      '更守住自己、自尊優先型',
      'Giữ mình trước—ưu tiên lòng tự trọng',
      'Jaga diri dulu—harga diri di depan'
    ),
    shortDescription: M(
      '당신의 연애관: 사랑해도 나를 잃지 않는 단단한 사랑',
      'Your love style: you won’t lose yourself, even in love',
      'あなたの恋愛観：愛していても自分を失わない強い愛',
      '你的恋爱观：爱了也不丢了自己',
      '你的戀愛觀：愛了也不丟了自己',
      'Yêu nhưng không đánh mất bản thân',
      'Mencinta tanpa kehilangan diri'
    ),
    description: M(
      '당신은 어떤 상황에서도 자신의 자존감과 경계선을 지키는 사람입니다. 10문항 모두 자신에게 불쾌하거나 자존심이 상하는 방향을 피했습니다. 상대를 사랑하되 나를 잃지 않는 연애관입니다. 관계를 위해 자신을 희생하는 것에 저항감이 있고 명확한 경계선을 가지고 있습니다. 자존감이 높고 자신을 잘 알고 있지만 때로는 유연함도 필요합니다.',
      'You protect your dignity and boundaries. Across all ten questions you avoided choices that felt degrading. You can love without self-erasure. Clear limits are your strength—just leave room for softness sometimes.',
      'あなたは状況如何に関わらず自尊心と境界を守ります。10問すべて、不快や尊厳を傷つける方を避けたでしょう。愛しながら自分を失わない。犠牲に抵抗があり境界は明確。誇りは高いが、ときには柔軟さも。',
      '你重视自尊与边界。十题里你避开了让你难堪或伤自尊的选项。能爱而不自我消失。界限清晰是优点，有时也可多一点柔软。',
      '你重視自尊與邊界。十題裡你避開了讓你難堪或傷自尊的選項。能愛而不自我消失。界限清晰是優點，有時也可多一點柔軟。',
      'Bạn giữ lòng tự trọng và ranh giới. Tránh phương án làm tổn thương mình qua 10 câu. Yêu mà không xóa mình—đôi khi cần thêm mềm dẻo.',
      'Kamu jaga harga diri dan batas. Menghindari pilihan yang merendahkan. Bisa mencinta tanpa menghilangkan diri—kadang perlu fleksibel.'
    ),
    oneLiner: M(
      '"사랑해도 나는 나다. 나를 잃으면서 하는 사랑은 오래가지 않는다"',
      '"I’m still me in love—love that erases you doesn’t last."',
      '「愛していても私は私。自分を失う恋は続かない」',
      '「爱了我也还是我，把自己弄没的爱走不远」',
      '「愛了我也還是我，把自己弄沒的愛走不遠」',
      '"Yêu mà vẫn là mình—yêu mà mất mình thì không bền."',
      '"Cinta pun aku tetap aku—cinta yang menghapus diri tak bertahan lama."'
    ),
    loveKeywords: M(
      '자존감·경계선·자기보호·명확함·원칙',
      'Self-worth · Boundaries · Self-protection · Clarity · Principles',
      '自尊心·境界線·自己防衛·明確さ·原則',
      '自尊·边界·自我保护·清晰·原则',
      '自尊·邊界·自我保護·清晰·原則',
      'Lòng tự trọng · Ranh giới · Tự bảo vệ · Rõ ràng · Nguyên tắc',
      'Harga diri · Batas · Melindungi diri · Jelas · Prinsip'
    ),
    happyLove: M(
      '서로를 동등하게 존중하고 각자의 가치관을 인정하는 관계',
      'Mutual respect as equals, honoring each other’s values',
      '対等に尊重し、それぞれの価値観を認め合う関係',
      '平等尊重、彼此认可价值观的关系',
      '平等尊重、彼此認可價值觀的關係',
      'Tôn trọng ngang hàng, công nhận giá trị của nhau',
      'Saling hormat setara, menghargai nilai masing-masing'
    ),
    hardMoment: M(
      '상대가 헌신이나 희생을 당연하게 여길 때',
      'When your partner takes your devotion for granted',
      '相手が献身や犠牲を当然視するとき',
      '对方把你的付出当理所当然时',
      '對方把你的付出當理所當然時',
      'Khi đối phương coi sự hy sinh là hiển nhiên',
      'Saat pasangan anggap pengorbananmu wajar saja'
    ),
    goodMatch: M(
      '서로를 독립적으로 존중하면서 깊이 연결되는 연인',
      'A partner who respects independence yet connects deeply',
      '互いの独立を尊重しつつ深くつながる恋人',
      '尊重彼此独立、又能深度连接的恋人',
      '尊重彼此獨立、又能深度連接的戀人',
      'Người tôn trọng độc lập nhưng vẫn gắn sâu',
      'Pasangan hormati independensi tapi tetap dalam'
    ),
    badMatch: M(
      '통제욕·집착·헌신을 강요하는 연인',
      'A controlling, possessive partner who demands sacrifice',
      'コントロール欲·執着·献身を強要する恋人',
      '控制欲强、占有欲强、逼你牺牲型恋人',
      '控制欲強、占有欲強、逼你犧牲型戀人',
      'Người kiểm soát, chiếm hữu, ép hy sinh',
      'Pasangan kontrol, posesif, memaksa pengorbanan'
    ),
  },
];
