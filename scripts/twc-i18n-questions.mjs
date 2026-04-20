/** 7-locale strings for phase3 team work chemistry — questions only */
export function L(ko, en, ja, zhcn, zhtw, vi, id) {
  return { ko, en, ja, 'zh-CN': zhcn, 'zh-TW': zhtw, vi, id };
}

export const questions = [
  {
    id: 1,
    question: L(
      '팀 프로젝트 초반, 내가 자연스럽게 하는 것은?',
      'Early in a team project, what do you naturally do first?',
      'チームプロジェクトの初期、あなたが自然にやることは？',
      '团队项目初期，你最先自然会做的是？',
      '團隊專案初期，你最先自然會做的是？',
      'Đầu dự án nhóm, bạn tự nhiên làm gì trước?',
      'Di awal proyek tim, apa yang paling alami kamu lakukan dulu?'
    ),
    options: [
      L(
        '방향성을 먼저 제시한다. "이 프로젝트 궁극적 목표는 이거야"',
        'I set direction first: “The ultimate goal of this project is…”',
        '先に方向性を示す。「このプロジェクトの最終ゴールはこれ」',
        '先明确方向：“这个项目的最终目标是……”',
        '先講清楚方向：「這個專案的最終目標是……」',
        'Tôi nêu hướng trước: “Mục tiêu cuối của dự án này là…”',
        'Aku yang menetapkan arah dulu: “Tujuan akhir proyek ini adalah…”'
      ),
      L(
        '할 일 목록과 일정을 정리한다. 누가 뭘 언제까지 할지를 먼저 잡는다',
        'I organize the task list and schedule—who does what by when.',
        'やることリストとスケジュールを整理する。誰が何をいつまでに、を先に決める。',
        '整理任务清单和时间表，先定谁做什么、何时完成。',
        '整理任務清單與時程，先釐清誰做什麼、何時完成。',
        'Tôi sắp xếp danh việc và lịch—ai làm gì đến khi nào.',
        'Aku merapikan daftar tugas dan jadwal—siapa mengerjakan apa sampai kapan.'
      ),
      L(
        '팀 분위기를 살피고 의견을 조율한다. 모두가 납득할 수 있는 방향을 찾는다',
        'I read the room and mediate—finding a direction everyone can accept.',
        '空気を読み意見を調整する。みんなが納得できる方向を探す。',
        '观察团队气氛并协调意见，找出大家都能接受的方向。',
        '觀察團隊氣氛並協調意見，找出大家都能接受的方向。',
        'Tôi đọc không khí và điều phối—tìm hướng mọi người chấp nhận được.',
        'Aku membaca situasi dan menengahi—mencari arah yang bisa diterima semua orang.'
      ),
      L(
        '데이터와 자료를 먼저 수집한다. 근거 없이 방향을 정하는 게 불편하다',
        'I gather data and sources first—deciding without evidence feels wrong.',
        '先にデータと資料を集める。根拠なしに決めるのは苦手。',
        '先收集数据和资料，没有依据就做决定会让我不舒服。',
        '先蒐集資料與數據，沒有依據就做決定會讓我不安。',
        'Tôi thu thập dữ liệu trước—quyết định không có căn cứ rất khó chịu.',
        'Aku kumpulkan data dulu—memutuskan tanpa bukti terasa salah.'
      ),
    ],
  },
  {
    id: 2,
    question: L(
      '회의 중 의견 충돌이 생겼을 때 나는?',
      'When opinions clash in a meeting, I…',
      '会議で意見が対立したとき、私は？',
      '会议中意见冲突时，我会？',
      '會議中意見衝突時，我會？',
      'Khi ý kiến xung đột trong họp, tôi…',
      'Saat pendapat bentrok dalam rapat, aku…'
    ),
    options: [
      L(
        '내가 생각하는 더 나은 방향을 설득력 있게 제시한다',
        'I present the better direction I see, with conviction.',
        '自分が考えるより良い方向を、説得力を持って示す。',
        '有力地说出我认为更好的方向。',
        '有說服力地提出我認為更好的方向。',
        'Tôi trình bày hướng tốt hơn mình thấy, có thuyết phục.',
        'Aku menyampaikan arah yang menurutku lebih baik dengan meyakinkan.'
      ),
      L(
        '충돌보다 빠른 결론이 중요하다. 실행 가능한 방향으로 정리를 돕는다',
        'Speed over endless debate—I help land something we can execute.',
        '対立より結論の速さ。実行できる形にまとめるのを手伝う。',
        '比起僵持，更快有结论更重要，我帮忙整理成可执行方向。',
        '比起僵持，更快有結論更重要，我幫忙整理成可執行方向。',
        'Quan trọng là kết luận nhanh hơn là cãi lâu—giúp chốt hướng làm được.',
        'Yang penting cepat berkesimpulan, bukan berdebat—bantu arah yang bisa dieksekusi.'
      ),
      L(
        '양쪽 의견을 모두 들어보고 공통점을 찾아 중재한다',
        'I hear both sides and mediate by finding common ground.',
        '双方の意見を聞き、共通点を見つけて調整する。',
        '听完两边意见，找共同点来协调。',
        '聽完兩邊意見，找共同點來協調。',
        'Tôi nghe cả hai bên và hòa giải bằng điểm chung.',
        'Aku dengar kedua pihak dan menengahi lewat titik temu.'
      ),
      L(
        '어느 쪽이 더 논리적으로 타당한지를 데이터로 검증하자고 제안한다',
        'I suggest checking which side is more logical—with data.',
        'どちらが論理的に妥当か、データで検証しようと提案する。',
        '提议用数据验证哪一边更站得住脚。',
        '提議用資料驗證哪一邊更站得住腳。',
        'Tôi đề xuất kiểm chứng bằng dữ liệu xem phía nào hợp lý hơn.',
        'Aku usulkan verifikasi dengan data sisi mana yang lebih masuk akal.'
      ),
    ],
  },
  {
    id: 3,
    question: L(
      '새로운 아이디어를 낼 때 나는?',
      'When I come up with new ideas, I…',
      '新しいアイデアを出すとき、私は？',
      '提出新想法时，我会？',
      '提出新想法時，我會？',
      'Khi nảy ra ý tưởng mới, tôi…',
      'Saat memunculkan ide baru, aku…'
    ),
    options: [
      L(
        '큰 그림과 가능성 중심으로 생각한다. 실현 가능성은 나중에',
        'I think big picture and possibilities—feasibility comes later.',
        '大きな絵と可能性から考える。実現性はあとで。',
        '从大格局和可能性出发，可行性以后再说。',
        '從大格局與可能性出發，可行性以後再說。',
        'Tôi nghĩ theo bức tranh lớn và khả năng—khả thi để sau.',
        'Aku pikirkan gambar besar dan kemungkinan—kelayakan nanti.'
      ),
      L(
        '실제로 구현할 수 있는 아이디어를 선호한다. 현실적인 게 좋다',
        'I prefer ideas we can actually ship—realistic beats abstract.',
        '実際に実装できるアイデアを好む。現実的なほうがいい。',
        '更偏好能落地的想法，现实一点更好。',
        '更偏好能落地的想法，現實一點更好。',
        'Tôi thích ý tưởng làm được thực tế—thực tế hơn là mơ hồ.',
        'Aku pilih ide yang bisa dieksekusi—realistis lebih baik.'
      ),
      L(
        '팀원들의 아이디어를 이어받아 발전시키는 것이 더 자연스럽다',
        'Building on teammates’ ideas feels more natural to me.',
        'メンバーのアイデアを受けて発展させるほうが自然。',
        '顺着队友的想法往下发展，对我来说更自然。',
        '順著隊友的想法往下發展，對我來說更自然。',
        'Phát triển trên ý tưởng của đồng đội tự nhiên hơn với tôi.',
        'Mengembangkan ide rekan tim terasa lebih alami bagiku.'
      ),
      L(
        '비슷한 사례나 검증된 방식을 먼저 찾아본 뒤 아이디어를 낸다',
        'I look for similar cases or proven patterns first, then ideate.',
        '類似事例や検証されたやり方を先に探してからアイデアを出す。',
        '先找相似案例或已验证的做法，再提出想法。',
        '先找相似案例或已驗證的做法，再提出想法。',
        'Tôi tìm case tương tự hoặc cách đã kiểm chứng trước, rồi mới nảy ý.',
        'Aku cari contoh serupa atau pola yang terbukti dulu, baru beride.'
      ),
    ],
  },
  {
    id: 4,
    question: L(
      '팀에서 내가 가장 잘한다는 평가를 받는 것은?',
      'What do people say I’m best at on the team?',
      'チームで「一番得意」と言われるのは？',
      '在团队里，别人最常说擅长我的是？',
      '在團隊裡，別人最常說擅長我的是？',
      'Người khác nói tôi giỏi nhất ở điểm nào trong nhóm?',
      'Orang bilang aku paling jago di hal apa di tim?'
    ),
    options: [
      L(
        '방향을 잡아주는 것. 갈 길을 모를 때 큰 그림을 보여준다',
        'Setting direction—when we’re lost, I show the big picture.',
        '方向を示すこと。道に迷ったとき大きな絵を見せる。',
        '把握方向，迷路时带大家看大图景。',
        '把握方向，迷路時帶大家看大圖景。',
        'Chỉ hướng—khi lạc, tôi cho thấy bức tranh lớn.',
        'Menentukan arah—kalau bingung, aku tunjukkan gambar besar.'
      ),
      L(
        '실행력. 말로만 끝나지 않고 실제로 결과물을 만들어낸다',
        'Execution—I don’t stop at talk; I ship real outcomes.',
        '実行力。口だけで終わらず、実際に成果を出す。',
        '执行力，不只停留在嘴上，能做出结果。',
        '執行力，不只停留在嘴上，能做出結果。',
        'Thực thi—không chỉ nói, mà tạo ra kết quả thật.',
        'Eksekusi—tidak cuma bicara, menghasilkan output nyata.'
      ),
      L(
        '분위기 관리. 팀이 흔들릴 때 중심을 잡아준다',
        'Managing the vibe—I steady the team when it wobbles.',
        '雰囲気管理。チームが揺れたとき中心を保つ。',
        '稳住气氛，团队动摇时把大家拉回来。',
        '穩住氣氛，團隊動搖時把大家拉回來。',
        'Giữ nhịp cảm xúc—khi nhóm lung lay, tôi giữ trục.',
        'Mengatur suasana—saat tim goyah, aku menahan pusat.'
      ),
      L(
        '꼼꼼함. 놓친 부분이나 논리적 오류를 잡아낸다',
        'Thoroughness—I catch gaps and logical slips.',
        '細かさ。抜けや論理のミスを拾う。',
        '细致，能抓住遗漏和逻辑漏洞。',
        '細緻，能抓住遺漏與邏輯漏洞。',
        'Tỉ mỉ—bắt chỗ sót và lỗi logic.',
        'Teliti—menangkap celah dan kesalahan logika.'
      ),
    ],
  },
  {
    id: 5,
    question: L(
      '마감이 촉박할 때 나는?',
      'When the deadline is tight, I…',
      '締切が迫っているとき、私は？',
      '截止在即时，我会？',
      '截止在即時，我會？',
      'Khi sát deadline, tôi…',
      'Saat deadline mepet, aku…'
    ),
    options: [
      L(
        '우선순위를 재설정한다. 핵심만 남기고 나머지를 버린다',
        'I reset priorities—keep the core, drop the rest.',
        '優先順位を組み直す。核心だけ残し、あとは捨てる。',
        '重排优先级，只留核心，其余砍掉。',
        '重排優先級，只留核心，其餘砍掉。',
        'Tôi sắp xếp lại ưu tiên—giữ lõi, bỏ phần còn lại.',
        'Aku reset prioritas—inti tetap, sisanya buang.'
      ),
      L(
        '가장 먼저 TO-DO를 쪼개고 각자 역할을 재분배한다',
        'I break work into TODOs first and reassign roles.',
        'まずTODOに分解し、役割を振り直す。',
        '先把任务拆成待办并重新分工。',
        '先把任務拆成待辦並重新分工。',
        'Tôi chia TODO trước và phân lại vai trò.',
        'Aku pecah jadi TODO dulu dan bagi ulang peran.'
      ),
      L(
        '팀원들의 상태를 살피고 지친 사람을 먼저 챙긴다',
        'I check how people are doing and support whoever is drained.',
        'メンバーの状態を見て、疲れている人を先にケアする。',
        '关注大家状态，先照顾最累的人。',
        '關注大家狀態，先照顧最累的人。',
        'Tôi xem sức mọi người, ưu tiên người kiệt sức.',
        'Aku cek kondisi tim, urus dulu yang paling lelah.'
      ),
      L(
        '현재 진행 상황을 점검하고 리스크를 계산한다',
        'I review progress and calculate risks.',
        '進捗を点検し、リスクを計算する。',
        '检查进度并评估风险。',
        '檢查進度並評估風險。',
        'Tôi rà tiến độ và tính rủi ro.',
        'Aku tinjau progres dan hitung risiko.'
      ),
    ],
  },
  {
    id: 6,
    question: L(
      '팀에서 내가 가장 불편한 순간은?',
      'The team moment I find most uncomfortable is…',
      'チームで一番居心地が悪いのは？',
      '在团队里最让我不舒服的时刻是？',
      '在團隊裡最讓我不舒服的時刻是？',
      'Khoảnh khắc khiến tôi khó chịu nhất trong nhóm là…',
      'Momen paling tidak nyaman bagiku di tim adalah…'
    ),
    options: [
      L(
        '팀이 비전 없이 그냥 실행만 하고 있을 때',
        'We’re executing hard with no shared vision.',
        'ビジョンなしに走り続けているとき。',
        '没有共同愿景却一直在执行。',
        '沒有共同願景卻一直在執行。',
        'Cả nhóm chạy mà không có tầm nhìn chung.',
        'Tim jalan tanpa visi bersama.'
      ),
      L(
        '계획이 없거나 누가 뭘 해야 하는지 불명확할 때',
        'There’s no plan—or it’s unclear who owns what.',
        '計画がない、誰が何をするか不明なとき。',
        '没有计划，或不清楚谁负责什么。',
        '沒有計畫，或不清楚誰負責什麼。',
        'Không có kế hoạch hoặc không rõ ai làm gì.',
        'Tanpa rencana atau tidak jelas siapa kerjakan apa.'
      ),
      L(
        '팀 내 갈등이 방치되거나 분위기가 싸늘할 때',
        'Conflict is ignored or the mood turns icy.',
        '対立が放置される、空気が冷たいとき。',
        '冲突被晾着，或气氛变冷。',
        '衝突被晾著，或氣氛變冷。',
        'Mâu thuẫn bị bỏ mặc hoặc không khí lạnh ngắt.',
        'Konflik dibiarkan atau suasana dingin.'
      ),
      L(
        '충분한 검토 없이 감으로 결정이 내려질 때',
        'Decisions are made on gut feel without enough review.',
        '十分な検討なしに勘で決まるとき。',
        '没充分讨论就凭感觉拍板。',
        '沒充分討論就憑感覺拍板。',
        'Quyết định theo cảm tính mà không rà soát đủ.',
        'Keputusan pakai feeling tanpa review cukup.'
      ),
    ],
  },
  {
    id: 7,
    question: L(
      '팀 발표를 앞두고 나는?',
      'Before a team presentation, I…',
      'チーム発表の前、私は？',
      '团队展示前，我会？',
      '團隊展示前，我會？',
      'Trước buổi thuyết trình nhóm, tôi…',
      'Sebelum presentasi tim, aku…'
    ),
    options: [
      L(
        '발표의 스토리라인과 메시지를 구성한다',
        'I shape the storyline and core message.',
        '発表のストーリーラインとメッセージを組み立てる。',
        '搭建叙述主线和核心信息。',
        '搭建敘述主線與核心訊息。',
        'Tôi dựng cốt truyện và thông điệp chính.',
        'Aku susun alur cerita dan pesan inti.'
      ),
      L(
        '발표 자료와 리허설 일정을 챙긴다',
        'I handle decks and rehearsal timing.',
        '資料とリハのスケジュールを整える。',
        '负责材料和彩排时间安排。',
        '負責材料與彩排時間安排。',
        'Tôi lo slide và lịch tập dượt.',
        'Aku urus materi dan jadwal latihan.'
      ),
      L(
        '발표자가 긴장하지 않도록 분위기를 만든다',
        'I set a tone so the presenter feels less nervous.',
        '発表者が緊張しすぎないよう雰囲気を作る。',
        '营造气氛，让主讲人不那么紧张。',
        '營造氣氛，讓主講人不那麼緊張。',
        'Tôi tạo không khí để người trình bày đỡ căng.',
        'Aku ciptakan suasana agar presenter tidak terlalu tegang.'
      ),
      L(
        '예상 질문을 뽑고 논리적 빈틈을 보완한다',
        'I list likely questions and patch logical gaps.',
        '想定質問を出し、論理の穴を埋める。',
        '列出可能被问的问题，补上逻辑漏洞。',
        '列出可能被問的問題，補上邏輯漏洞。',
        'Tôi liệt kê câu hỏi dự kiến và lấp lỗ hổng logic.',
        'Aku daftar pertanyaan yang mungkin dan tutup celah logika.'
      ),
    ],
  },
  {
    id: 8,
    question: L(
      '팀원 중 한 명이 힘들어 보일 때 나는?',
      'When a teammate looks burned out, I…',
      'メンバーの一人がしんどそうなとき、私は？',
      '有队友看起来很累时，我会？',
      '有隊友看起來很累時，我會？',
      'Khi một đồng đội trông kiệt sức, tôi…',
      'Saat rekan tim terlihat kelelahan, aku…'
    ),
    options: [
      L(
        '업무 조율이 필요한지 확인하고 구조적으로 해결하려 한다',
        'I check if workload needs restructuring and fix it systematically.',
        '業務の組み替えが必要か確認し、構造的に直す。',
        '看是否需要调整分工，并系统性地解决。',
        '看是否需要調整分工，並系統性地解決。',
        'Tôi xem có cần sắp xếp lại việc và xử lý có hệ thống.',
        'Aku cek apakah perlu restruktur kerja dan perbaiki sistematis.'
      ),
      L(
        '그 사람 몫의 일을 대신 처리할 수 있는지 확인한다',
        'I see if I can take on part of their work.',
        'その人の分を肩代わりできるか確認する。',
        '看能不能分担一部分活。',
        '看能不能分擔一部分活。',
        'Tôi xem có thể gánh bớt phần việc của họ không.',
        'Aku cek bisa ambil alih sebagian tugas mereka tidak.'
      ),
      L(
        '먼저 말을 걸어 어떤 도움이 필요한지 들어준다',
        'I reach out first and listen to what help they need.',
        '先に声をかけ、どんな助けが必要か聞く。',
        '先开口问，听对方需要什么帮助。',
        '先開口問，聽對方需要什麼幫助。',
        'Tôi chủ động hỏi và lắng nghe họ cần gì.',
        'Aku ajak bicara dulu dan dengar bantuan apa yang dibutuhkan.'
      ),
      L(
        '힘들어진 원인이 무엇인지 파악하고 재발 방지를 생각한다',
        'I dig into causes and think how to prevent a repeat.',
        '原因を突き止め、再発防止を考える。',
        '弄清原因，并想怎么避免再发生。',
        '弄清原因，並想怎麼避免再發生。',
        'Tôi tìm nguyên nhân và nghĩ cách không để lặp lại.',
        'Aku cari penyebab dan cara mencegah terulang.'
      ),
    ],
  },
  {
    id: 9,
    question: L(
      '나는 팀에서 주로 어떤 역할을 맡게 되나요?',
      'What role do I usually take on the team?',
      'チームで主にどんな役割を担う？',
      '我在团队里通常承担什么角色？',
      '我在團隊裡通常承擔什麼角色？',
      'Tôi thường đảm nhận vai gì trong nhóm?',
      'Biasanya aku ambil peran apa di tim?'
    ),
    options: [
      L(
        '방향 제시, 기획 총괄, 비전 공유',
        'Direction, planning lead, sharing vision.',
        '方向提示、企画統括、ビジョン共有。',
        '定方向、统筹策划、分享愿景。',
        '定方向、統籌策劃、分享願景。',
        'Chỉ hướng, dẫn kế hoạch, chia sẻ tầm nhìn.',
        'Arah, memimpin perencanaan, berbagi visi.'
      ),
      L(
        '일정 관리, 업무 분배, 실행 점검',
        'Schedules, assignments, execution checks.',
        'スケジュール、タスク配分、実行確認。',
        '排期、分活、检查执行。',
        '排期、分活、檢查執行。',
        'Lịch trình, chia việc, kiểm tra thực thi.',
        'Jadwal, bagi tugas, cek eksekusi.'
      ),
      L(
        '의견 조율, 분위기 관리, 소통 연결',
        'Mediation, vibe, connecting communication.',
        '意見調整、雰囲気管理、コミュニケーションの橋渡し。',
        '协调意见、管气氛、串沟通。',
        '協調意見、管氣氛、串溝通。',
        'Điều phối ý kiến, giữ nhịp, kết nối giao tiếp.',
        'Menengahi, jaga suasana, sambungkan komunikasi.'
      ),
      L(
        '자료 조사, 논리 검증, 리스크 분석',
        'Research, logic checks, risk analysis.',
        'リサーチ、論理検証、リスク分析。',
        '查资料、验逻辑、做风险分析。',
        '查資料、驗邏輯、做風險分析。',
        'Nghiên cứu, kiểm logic, phân tích rủi ro.',
        'Riset, cek logika, analisis risiko.'
      ),
    ],
  },
  {
    id: 10,
    question: L(
      '회의가 끝난 후 나는?',
      'After a meeting, I…',
      '会議のあと、私は？',
      '会议结束后，我会？',
      '會議結束後，我會？',
      'Sau cuộc họp, tôi…',
      'Setelah rapat, aku…'
    ),
    options: [
      L(
        '이번 논의가 전체 방향성에 맞는지 다시 생각해본다',
        'I reflect on whether the discussion fits our overall direction.',
        '今回の議論が全体の方向に合っているか考え直す。',
        '回想这次讨论是否符合整体方向。',
        '回想這次討論是否符合整體方向。',
        'Tôi xem lại thảo luận có khớp hướng tổng thể không.',
        'Aku renungkan apakah diskusi selaras arah besar.'
      ),
      L(
        '결정된 내용을 정리하고 다음 할 일 목록을 만든다',
        'I summarize decisions and build the next task list.',
        '決定事項を整理し、次のToDoを作る。',
        '整理决议并列出下一步待办。',
        '整理決議並列出下一步待辦。',
        'Tôi tóm tắt quyết định và lập danh việc tiếp theo.',
        'Aku rangkum keputusan dan buat daftar tugas berikutnya.'
      ),
      L(
        '회의 분위기가 어땠는지, 불편한 사람은 없었는지 돌아본다',
        'I think back on the tone and whether anyone seemed uneasy.',
        '会議の空気は？誰かが居心地悪くなかったか振り返る。',
        '回想会议气氛，有没有人显得不自在。',
        '回想會議氣氛，有沒有人顯得不自在。',
        'Tôi nhớ lại không khí và xem ai có khó chịu không.',
        'Aku ingat suasana dan apakah ada yang tidak nyaman.'
      ),
      L(
        '결론이 논리적으로 타당한지, 빠진 변수는 없는지 검토한다',
        'I check if conclusions are sound and what variables we missed.',
        '結論は論理的か、抜けた変数はないか確認する。',
        '检查结论是否站得住脚，有没有漏变量。',
        '檢查結論是否站得住腳，有沒有漏變數。',
        'Tôi xem kết luận có logic và còn thiếu biến nào không.',
        'Aku cek apakah kesimpulan masuk akal dan variabel yang terlewat.'
      ),
    ],
  },
  {
    id: 11,
    question: L(
      '나와 가장 잘 맞는 팀원 유형은?',
      'Which teammate type fits me best?',
      '自分と一番相性がいいメンバータイプは？',
      '和哪种类型的队友最合拍？',
      '和哪種類型的隊友最合拍？',
      'Kiểu đồng đội nào hợp với tôi nhất?',
      'Tipe rekan tim mana yang paling cocok denganku?'
    ),
    options: [
      L(
        '내 아이디어를 실제로 구현해주는 실행력 있는 사람',
        'Someone with execution power who ships my ideas.',
        '自分のアイデアを現実にしてくれる実行力の人。',
        '能把我的想法落地、执行力强的人。',
        '能把我的想法落地、執行力強的人。',
        'Người có khả năng thực thi, biến ý tôi thành hiện thực.',
        'Orang berdaya eksekusi yang mewujudkan idemu.'
      ),
      L(
        '큰 방향을 제시해주는 사람. 나는 그 방향대로 빈틈없이 실행한다',
        'Someone who sets direction—I execute their plan thoroughly.',
        '大きな方向を示す人。私はその方向に隙なく実行する。',
        '给大方向的人，我按那个方向稳稳执行。',
        '給大方向的人，我依那個方向穩穩執行。',
        'Người chỉ hướng lớn—tôi thực thi kỹ theo hướng đó.',
        'Yang menentukan arah besar—aku eksekusi tanpa celah.'
      ),
      L(
        '논리와 감성 어느 쪽으로도 치우치지 않는 균형 잡힌 사람',
        'Someone balanced—not only logic, not only emotion.',
        '論理にも感情にも偏らないバランスの人。',
        '理性和感性都平衡的人。',
        '理性和感性都平衡的人。',
        'Người cân bằng, không lệch hẳn về lý hay cảm.',
        'Orang seimbang, tidak miring ke logika atau emosi saja.'
      ),
      L(
        '아이디어는 많지만 검증이 약한 사람. 내가 논리로 보완해준다',
        'Lots of ideas but weak validation—I shore it up with logic.',
        'アイデアは多いが検証が弱い人。私が論理で補う。',
        '想法多但验证弱的人，我用逻辑补上。',
        '想法多但驗證弱的人，我用邏輯補上。',
        'Nhiều ý nhưng kiểm chứng yếu—tôi bổ sung bằng lý.',
        'Banyak ide tapi validasi lemah—aku tambal dengan logika.'
      ),
    ],
  },
  {
    id: 12,
    question: L(
      '내가 팀에 기여할 수 있는 가장 큰 가치는?',
      'The biggest value I bring to the team is…',
      'チームに貢献できる最大の価値は？',
      '我能给团队带来的最大价值是？',
      '我能給團隊帶來的最大價值是？',
      'Giá trị lớn nhất tôi mang lại cho nhóm là…',
      'Nilai terbesar yang bisa kuberikan ke tim adalah…'
    ),
    options: [
      L(
        '팀이 나아갈 방향을 밝혀주는 것',
        'Lighting the direction we should go.',
        '進むべき方向を照らすこと。',
        '照亮团队要去的方向。',
        '照亮團隊要去的方向。',
        'Soi sáng hướng đi của nhóm.',
        'Menyoroti arah yang harus dituju tim.'
      ),
      L(
        '아이디어를 실제 결과물로 만들어내는 것',
        'Turning ideas into real deliverables.',
        'アイデアを実際の成果にすること。',
        '把想法变成实实在在的成果。',
        '把想法變成實實在在的成果。',
        'Biến ý tưởng thành sản phẩm thật.',
        'Mengubah ide menjadi hasil nyata.'
      ),
      L(
        '팀원들이 하나로 움직이도록 연결해주는 것',
        'Connecting people so we move as one.',
        'メンバーをつなぎ、一つに動かすこと。',
        '把大家连在一起，一起行动。',
        '把大家連在一起，一起行動。',
        'Kết nối mọi người để cùng một nhịp.',
        'Menyambungkan orang agar bergerak satu arah.'
      ),
      L(
        '빈틈없는 분석으로 팀의 판단을 정확하게 만드는 것',
        'Making team decisions sharper with solid analysis.',
        '抜けのない分析でチームの判断を正確にすること。',
        '用扎实的分析让团队判断更准。',
        '用紮實的分析讓團隊判斷更準。',
        'Phân tích chặt để quyết định nhóm chính xác hơn.',
        'Analisis teliti agar keputusan tim lebih tepat.'
      ),
    ],
  },
];
