/**
 * Merges phase3TeamWorkChemistryTest UI strings (banner, start, progress labels via ui,
 * teamLink, alerts, recommendations, shareMessages) for locales where Korean was left in place.
 * Does not touch leaderShare, teamPreview, roleLabels, report (handled elsewhere).
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const messagesDir = path.join(__dirname, '..', 'messages');

function deepMerge(target, source) {
  for (const k of Object.keys(source)) {
    const v = source[k];
    if (v && typeof v === 'object' && !Array.isArray(v)) {
      if (!target[k]) target[k] = {};
      deepMerge(target[k], v);
    } else {
      target[k] = v;
    }
  }
}

const PATCH = {
  en: {
    teamLinkBanner:
      'This link already includes results from {count} teammate(s). When you finish, your result is merged into the team analysis below.',
    nicknameLabel: 'Display name for team analysis (optional)',
    nicknamePlaceholder: 'e.g. Alex',
    defaultNickname: 'Teammate',
    startMessage: {
      line1: 'Teams have chemistry too—and you can measure it.',
      line2:
        'Why does work flow with some teammates and keep missing with others, even on the same team?',
      line3:
        'It is not just personality—it is how team role types combine. Knowing the role you naturally take changes teamwork.',
      line4:
        'Answer 12 questions to find your team role type, then combine everyone’s results to analyze your team’s chemistry.',
      line5: 'Start the team chemistry test 🤝 Find my team role type',
    },
    ui: {
      adsenseTitle: 'AdSense ad area (Team work chemistry test)',
      goToTest: 'Take the test',
      linkCopy: 'Copy link',
      kakao: 'KakaoTalk',
      telegram: 'Telegram',
      wechat: 'WeChat',
      line: 'LINE',
      whatsapp: 'WhatsApp',
      similarTests: 'Similar tests',
      shareResult: 'Share result',
      scoreLine: 'Total score: {score} · out of 12 questions',
      keywords: 'Keywords',
      naturalRoles: 'Roles you naturally take',
      strength: 'Strengths',
      watchOut: 'Watch out',
      bestMatch: 'Best-matching type',
      conflictMatch: 'Types that can clash',
      shareOneLiner: 'One-line contribution to the team',
    },
    teamAnalysis: {
      title: '🤝 Our team work chemistry analysis',
      gradeLabel: 'Team chemistry grade: {grade}',
      barsTitle: 'Role mix (6 bars)',
      synergyTitle: 'Synergy by role mix',
      missingTitle: 'Warnings & tips for missing roles',
      prescription: 'Tip:',
      caution: 'Note:',
      none: '(none)',
    },
    teamLink: {
      title: 'Link to share with teammates',
      hint: 'Copy the link below and post it in your group chat. Teammates take the test in order, and results stack on the same link.',
      copy: 'Copy team link · update URL',
    },
    shareMessages: {
      startDefault: 'Team work chemistry test 🤝 12 questions · team role types',
      startKakao: 'Team work chemistry test 🤝 12 questions · team role types',
      startWechat: 'Team work chemistry test 🤝 12 questions · team role types',
      startWhatsapp: 'Team work chemistry test 🤝 12 questions · team role types',
      startTelegram: 'Team work chemistry test 🤝 12 questions · team role types',
      startLine: 'Team work chemistry test 🤝 12 questions · team role types',
      resultLine:
        'I got the 「{type}」 type 🤝 Open the link and take the test together to analyze our team chemistry',
    },
    alerts: {
      linkCopied: 'Link copied!',
      resultCopied: 'Result copied to clipboard!',
      shareFailed: 'Sharing is not available.',
      wechatCopy: 'Link copied! Paste it in WeChat to share.',
      kakaoInit: 'Initializing KakaoTalk share. Please try again in a moment.',
      kakaoError: 'Something went wrong while sharing to KakaoTalk.',
    },
    recommendations: {
      similarTestsTop5: '🎯 Top 5 similar test picks',
      popularTestsTop5: '🔥 Top 5 trending tests',
    },
  },
  ja: {
    teamLinkBanner:
      'このリンクにはすでに{count}人分の結果が含まれています。テストを終えると、下のチーム分析に自動で反映されます。',
    nicknameLabel: 'チーム分析に表示する名前（任意）',
    nicknamePlaceholder: '例: たろう',
    defaultNickname: 'メンバー',
    startMessage: {
      line1: 'チームにも相性があります。そしてそれは測れます。',
      line2:
        '同じチームなのに、なぜあるメンバーとは仕事がスムーズに進み、別のメンバーとはすれ違いが続くのでしょう？',
      line3:
        'それは性格だけの問題ではなく、チーム役割タイプの組み合わせの違いです。自分が自然に担う役割がわかるとチームワークが変わります。',
      line4:
        '12の質問で自分のチーム役割タイプを見つけ、メンバーの結果と合わせてチームの相性を分析してみましょう。',
      line5: 'チーム相性テスト開始 🤝 自分のチーム役割タイプを見つける',
    },
    ui: {
      adsenseTitle: 'AdSense 広告エリア（チームワーク相性テスト）',
      goToTest: 'テストを始める',
      linkCopy: 'リンクをコピー',
      kakao: 'KakaoTalk',
      telegram: 'Telegram',
      wechat: 'WeChat',
      line: 'LINE',
      whatsapp: 'WhatsApp',
      similarTests: '似たテスト',
      shareResult: '結果を共有',
      scoreLine: '合計 {score} 点 · 全12問',
      keywords: 'キーワード',
      naturalRoles: '自然に担う役割',
      strength: '強み',
      watchOut: '注意点',
      bestMatch: '相性の良いタイプ',
      conflictMatch: 'ぶつかりやすいタイプ',
      shareOneLiner: 'チームへの貢献を一言で',
    },
    teamAnalysis: {
      title: '🤝 わたしたちのチームワーク・ケミ分析',
      gradeLabel: 'チーム相性グレード: {grade}',
      barsTitle: '役割の混ざり具合（6マス）',
      synergyTitle: '構成タイプ別のケミ・シナジー',
      missingTitle: '不足タイプへの注意と処方箋',
      prescription: '処方:',
      caution: '注意:',
      none: '（なし）',
    },
    teamLink: {
      title: 'メンバーに共有するリンク',
      hint: '下のリンクをコピーしてグループチャットに投稿してください。順番に受けた結果が同じリンクに積み上がります。',
      copy: 'チームリンクをコピー · URLを更新',
    },
    shareMessages: {
      startDefault: 'チームワーク相性テスト 🤝 12問 · チーム役割タイプ',
      startKakao: 'チームワーク相性テスト 🤝 12問 · チーム役割タイプ',
      startWechat: 'チームワーク相性テスト 🤝 12問 · チーム役割タイプ',
      startWhatsapp: 'チームワーク相性テスト 🤝 12問 · チーム役割タイプ',
      startTelegram: 'チームワーク相性テスト 🤝 12問 · チーム役割タイプ',
      startLine: 'チームワーク相性テスト 🤝 12問 · チーム役割タイプ',
      resultLine:
        '私は「{type}」タイプでした 🤝 チーム相性を分析するにはリンクから一緒に受けてね',
    },
    alerts: {
      linkCopied: 'リンクをコピーしました！',
      resultCopied: '結果をクリップボードにコピーしました！',
      shareFailed: '共有を利用できません。',
      wechatCopy: 'リンクをコピーしました！WeChatに貼り付けて共有してください。',
      kakaoInit: 'KakaoTalk共有を初期化しています。少し待ってからもう一度お試しください。',
      kakaoError: 'KakaoTalk共有中にエラーが発生しました。',
    },
    recommendations: {
      similarTestsTop5: '🎯 似ているテストおすすめ Top5',
      popularTestsTop5: '🔥 人気テストおすすめ Top5',
    },
  },
  'zh-CN': {
    teamLinkBanner:
      '此链接已包含 {count} 人的结果。你完成测试后，结果会自动并入下方的团队分析。',
    nicknameLabel: '在团队分析中显示的名称（可选）',
    nicknamePlaceholder: '例：小明',
    defaultNickname: '成员',
    startMessage: {
      line1: '团队也有默契，而且可以测量。',
      line2: '同一团队，为什么和有些人合作顺畅，和另一些人却总是对不上？',
      line3: '这不只是性格问题，而是团队角色类型的组合不同。知道自己自然承担哪种角色，团队合作会不一样。',
      line4: '用12道题找到你的团队角色类型，再把大家的结果汇总，分析你们团队的默契。',
      line5: '开始团队默契测试 🤝 找到我的团队角色类型',
    },
    ui: {
      adsenseTitle: 'AdSense 广告区域（团队工作默契测试）',
      goToTest: '开始测试',
      linkCopy: '复制链接',
      kakao: 'KakaoTalk',
      telegram: 'Telegram',
      wechat: '微信',
      line: 'LINE',
      whatsapp: 'WhatsApp',
      similarTests: '相似测试',
      shareResult: '分享结果',
      scoreLine: '总分 {score} 分 · 共12题',
      keywords: '关键词',
      naturalRoles: '自然承担的角色',
      strength: '优势',
      watchOut: '注意点',
      bestMatch: '最合拍的类型',
      conflictMatch: '容易冲突的类型',
      shareOneLiner: '一句话团队贡献',
    },
    teamAnalysis: {
      title: '🤝 我们团队工作默契分析',
      gradeLabel: '团队默契等级：{grade}',
      barsTitle: '角色构成比例（6格）',
      synergyTitle: '构成类型的默契与协同',
      missingTitle: '缺失类型的提醒与建议',
      prescription: '建议：',
      caution: '注意：',
      none: '（无）',
    },
    teamLink: {
      title: '分享给成员的链接',
      hint: '复制下方链接发到群聊。成员按顺序完成测试，结果会叠在同一链接上。',
      copy: '复制团队链接 · 更新地址',
    },
    shareMessages: {
      startDefault: '团队工作默契测试 🤝 12题 · 团队角色类型',
      startKakao: '团队工作默契测试 🤝 12题 · 团队角色类型',
      startWechat: '团队工作默契测试 🤝 12题 · 团队角色类型',
      startWhatsapp: '团队工作默契测试 🤝 12题 · 团队角色类型',
      startTelegram: '团队工作默契测试 🤝 12题 · 团队角色类型',
      startLine: '团队工作默契测试 🤝 12题 · 团队角色类型',
      resultLine: '我是「{type}」类型 🤝 想分析团队默契就打开链接一起做吧',
    },
    alerts: {
      linkCopied: '链接已复制！',
      resultCopied: '结果已复制到剪贴板！',
      shareFailed: '无法使用分享功能。',
      wechatCopy: '链接已复制！在微信中粘贴即可分享。',
      kakaoInit: '正在初始化 KakaoTalk 分享，请稍后重试。',
      kakaoError: 'KakaoTalk 分享时出错。',
    },
    recommendations: {
      similarTestsTop5: '🎯 相似测试推荐 Top5',
      popularTestsTop5: '🔥 热门测试推荐 Top5',
    },
  },
  'zh-TW': {
    teamLinkBanner:
      '此連結已包含 {count} 人的結果。你完成測驗後，結果會自動併入下方的團隊分析。',
    nicknameLabel: '在團隊分析中顯示的名稱（選填）',
    nicknamePlaceholder: '例：小明',
    defaultNickname: '成員',
    startMessage: {
      line1: '團隊也有默契，而且可以測量。',
      line2: '同一團隊，為什麼和有些人合作順暢，和另一些人卻總是對不上？',
      line3: '這不只是性格問題，而是團隊角色類型的組合不同。知道自己自然承擔哪種角色，團隊合作會不一樣。',
      line4: '用12題找到你的團隊角色類型，再把大家的結果彙總，分析你們團隊的默契。',
      line5: '開始團隊默契測驗 🤝 找到我的團隊角色類型',
    },
    ui: {
      adsenseTitle: 'AdSense 廣告區域（團隊工作默契測驗）',
      goToTest: '開始測驗',
      linkCopy: '複製連結',
      kakao: 'KakaoTalk',
      telegram: 'Telegram',
      wechat: 'WeChat',
      line: 'LINE',
      whatsapp: 'WhatsApp',
      similarTests: '相似測驗',
      shareResult: '分享結果',
      scoreLine: '總分 {score} 分 · 共12題',
      keywords: '關鍵字',
      naturalRoles: '自然承擔的角色',
      strength: '優勢',
      watchOut: '注意點',
      bestMatch: '最合拍的類型',
      conflictMatch: '容易衝突的類型',
      shareOneLiner: '一句話團隊貢獻',
    },
    teamAnalysis: {
      title: '🤝 我們團隊工作默契分析',
      gradeLabel: '團隊默契等級：{grade}',
      barsTitle: '角色構成比例（6格）',
      synergyTitle: '構成類型的默契與協同',
      missingTitle: '缺失類型的提醒與建議',
      prescription: '建議：',
      caution: '注意：',
      none: '（無）',
    },
    teamLink: {
      title: '分享給成員的連結',
      hint: '複製下方連結貼到群組。成員依序完成測驗，結果會疊在同一連結上。',
      copy: '複製團隊連結 · 更新網址',
    },
    shareMessages: {
      startDefault: '團隊工作默契測驗 🤝 12題 · 團隊角色類型',
      startKakao: '團隊工作默契測驗 🤝 12題 · 團隊角色類型',
      startWechat: '團隊工作默契測驗 🤝 12題 · 團隊角色類型',
      startWhatsapp: '團隊工作默契測驗 🤝 12題 · 團隊角色類型',
      startTelegram: '團隊工作默契測驗 🤝 12題 · 團隊角色類型',
      startLine: '團隊工作默契測驗 🤝 12題 · 團隊角色類型',
      resultLine: '我是「{type}」類型 🤝 想分析團隊默契就打開連結一起做吧',
    },
    alerts: {
      linkCopied: '連結已複製！',
      resultCopied: '結果已複製到剪貼簿！',
      shareFailed: '無法使用分享功能。',
      wechatCopy: '連結已複製！在 WeChat 貼上即可分享。',
      kakaoInit: '正在初始化 KakaoTalk 分享，請稍後再試。',
      kakaoError: 'KakaoTalk 分享時發生錯誤。',
    },
    recommendations: {
      similarTestsTop5: '🎯 相似測驗推薦 Top5',
      popularTestsTop5: '🔥 熱門測驗推薦 Top5',
    },
  },
  vi: {
    teamLinkBanner:
      'Liên kết này đã gồm kết quả của {count} người. Khi bạn hoàn thành, kết quả sẽ được gộp vào phân tích nhóm bên dưới.',
    nicknameLabel: 'Tên hiển thị trong phân tích nhóm (tuỳ chọn)',
    nicknamePlaceholder: 'vd: Minh',
    defaultNickname: 'Thành viên',
    startMessage: {
      line1: 'Đội nhóm cũng có chemistry — và có thể đo được.',
      line2:
        'Cùng một nhóm, vì sao làm việc trôi chảy với người này mà cứ lệch với người kia?',
      line3:
        'Đó không chỉ là tính cách mà là cách các kiểu vai trò trong nhóm kết hợp. Biết mình tự nhiên đảm nhận vai nào sẽ thay đổi teamwork.',
      line4:
        '12 câu hỏi để tìm kiểu vai trò của bạn, rồi gom kết quả mọi người để phân tích chemistry nhóm.',
      line5: 'Bắt đầu test chemistry nhóm 🤝 Tìm kiểu vai trò của tôi',
    },
    ui: {
      adsenseTitle: 'Khu vực quảng cáo AdSense (Test chemistry làm việc nhóm)',
      goToTest: 'Làm test',
      linkCopy: 'Sao chép liên kết',
      kakao: 'KakaoTalk',
      telegram: 'Telegram',
      wechat: 'WeChat',
      line: 'LINE',
      whatsapp: 'WhatsApp',
      similarTests: 'Test tương tự',
      shareResult: 'Chia sẻ kết quả',
      scoreLine: 'Tổng điểm: {score} · 12 câu',
      keywords: 'Từ khoá',
      naturalRoles: 'Vai trò bạn tự nhiên đảm nhận',
      strength: 'Điểm mạnh',
      watchOut: 'Cần lưu ý',
      bestMatch: 'Kiểu hợp nhất',
      conflictMatch: 'Kiểu dễ xung đột',
      shareOneLiner: 'Một dòng về đóng góp cho nhóm',
    },
    teamAnalysis: {
      title: '🤝 Phân tích chemistry làm việc nhóm của chúng ta',
      gradeLabel: 'Điểm chemistry nhóm: {grade}',
      barsTitle: 'Tỷ lệ phối vai (6 ô)',
      synergyTitle: 'Hiệp lực theo cách phối vai',
      missingTitle: 'Cảnh báo & gợi ý khi thiếu vai',
      prescription: 'Gợi ý:',
      caution: 'Lưu ý:',
      none: '(không có)',
    },
    teamLink: {
      title: 'Liên kết chia sẻ với thành viên',
      hint: 'Sao chép liên kết bên dưới và gửi vào nhóm chat. Mọi người làm lần lượt, kết quả chồng trên cùng một liên kết.',
      copy: 'Sao chép liên kết nhóm · cập nhật URL',
    },
    shareMessages: {
      startDefault: 'Test chemistry làm việc nhóm 🤝 12 câu · kiểu vai trò',
      startKakao: 'Test chemistry làm việc nhóm 🤝 12 câu · kiểu vai trò',
      startWechat: 'Test chemistry làm việc nhóm 🤝 12 câu · kiểu vai trò',
      startWhatsapp: 'Test chemistry làm việc nhóm 🤝 12 câu · kiểu vai trò',
      startTelegram: 'Test chemistry làm việc nhóm 🤝 12 câu · kiểu vai trò',
      startLine: 'Test chemistry làm việc nhóm 🤝 12 câu · kiểu vai trò',
      resultLine:
        'Mình là kiểu 「{type}」 🤝 Mở link cùng làm để phân tích chemistry nhóm nhé',
    },
    alerts: {
      linkCopied: 'Đã sao chép liên kết!',
      resultCopied: 'Đã sao chép kết quả vào clipboard!',
      shareFailed: 'Không thể dùng tính năng chia sẻ.',
      wechatCopy: 'Đã sao chép liên kết! Dán vào WeChat để chia sẻ.',
      kakaoInit: 'Đang khởi tạo chia sẻ KakaoTalk. Thử lại sau giây lát.',
      kakaoError: 'Lỗi khi chia sẻ KakaoTalk.',
    },
    recommendations: {
      similarTestsTop5: '🎯 Top 5 test tương tự',
      popularTestsTop5: '🔥 Top 5 test đang hot',
    },
  },
  id: {
    teamLinkBanner:
      'Tautan ini sudah berisi hasil {count} orang. Setelah kamu selesai, hasilmu akan digabung ke analisis tim di bawah.',
    nicknameLabel: 'Nama tampilan untuk analisis tim (opsional)',
    nicknamePlaceholder: 'mis. Budi',
    defaultNickname: 'Anggota tim',
    startMessage: {
      line1: 'Tim juga punya chemistry — dan bisa diukur.',
      line2:
        'Tim yang sama, kenapa dengan sebagian orang kerjaannya lancar, dengan yang lain sering salah sasaran?',
      line3:
        'Bukan hanya soal kepribadian, tapi kombinasi tipe peran di tim. Mengetahui peran yang kamu naturally ambil akan mengubah teamwork.',
      line4:
        '12 pertanyaan untuk menemukan tipe peranmu, lalu gabungkan hasil semua orang untuk menganalisis chemistry tim.',
      line5: 'Mulai tes chemistry tim 🤝 Temukan tipe peran timku',
    },
    ui: {
      adsenseTitle: 'Area iklan AdSense (Tes chemistry kerja tim)',
      goToTest: 'Mulai tes',
      linkCopy: 'Salin tautan',
      kakao: 'KakaoTalk',
      telegram: 'Telegram',
      wechat: 'WeChat',
      line: 'LINE',
      whatsapp: 'WhatsApp',
      similarTests: 'Tes serupa',
      shareResult: 'Bagikan hasil',
      scoreLine: 'Skor total: {score} · dari 12 pertanyaan',
      keywords: 'Kata kunci',
      naturalRoles: 'Peran yang natural kamu ambil',
      strength: 'Kekuatan',
      watchOut: 'Perhatian',
      bestMatch: 'Tipe paling cocok',
      conflictMatch: 'Tipe yang bisa bentrok',
      shareOneLiner: 'Satu baris kontribusi ke tim',
    },
    teamAnalysis: {
      title: '🤝 Analisis chemistry kerja tim kami',
      gradeLabel: 'Nilai chemistry tim: {grade}',
      barsTitle: 'Komposisi peran (6 kotak)',
      synergyTitle: 'Sinergi menurut campuran peran',
      missingTitle: 'Peringatan & saran jika ada peran yang kurang',
      prescription: 'Saran:',
      caution: 'Catatan:',
      none: '(tidak ada)',
    },
    teamLink: {
      title: 'Tautan untuk dibagikan ke anggota',
      hint: 'Salin tautan di bawah dan kirim ke grup chat. Anggota mengerjakan bergiliran, hasil menumpuk di tautan yang sama.',
      copy: 'Salin tautan tim · perbarui URL',
    },
    shareMessages: {
      startDefault: 'Tes chemistry kerja tim 🤝 12 pertanyaan · tipe peran tim',
      startKakao: 'Tes chemistry kerja tim 🤝 12 pertanyaan · tipe peran tim',
      startWechat: 'Tes chemistry kerja tim 🤝 12 pertanyaan · tipe peran tim',
      startWhatsapp: 'Tes chemistry kerja tim 🤝 12 pertanyaan · tipe peran tim',
      startTelegram: 'Tes chemistry kerja tim 🤝 12 pertanyaan · tipe peran tim',
      startLine: 'Tes chemistry kerja tim 🤝 12 pertanyaan · tipe peran tim',
      resultLine:
        'Aku tipe 「{type}」 🤝 Buka tautannya dan ikut tes untuk analisis chemistry tim',
    },
    alerts: {
      linkCopied: 'Tautan disalin!',
      resultCopied: 'Hasil disalin ke clipboard!',
      shareFailed: 'Fitur berbagi tidak tersedia.',
      wechatCopy: 'Tautan disalin! Tempel di WeChat untuk membagikan.',
      kakaoInit: 'Menginisialisasi berbagi KakaoTalk. Coba lagi sebentar.',
      kakaoError: 'Terjadi kesalahan saat berbagi ke KakaoTalk.',
    },
    recommendations: {
      similarTestsTop5: '🎯 5 rekomendasi tes serupa',
      popularTestsTop5: '🔥 5 tes yang lagi ramai',
    },
  },
};

for (const loc of Object.keys(PATCH)) {
  const file = path.join(messagesDir, `${loc}.json`);
  const raw = fs.readFileSync(file, 'utf8');
  const j = JSON.parse(raw);
  if (!j.phase3TeamWorkChemistryTest) {
    console.warn('skip', loc, 'no phase3TeamWorkChemistryTest');
    continue;
  }
  deepMerge(j.phase3TeamWorkChemistryTest, PATCH[loc]);
  fs.writeFileSync(file, JSON.stringify(j, null, 2) + '\n', 'utf8');
  console.log('merged UI i18n', loc);
}
