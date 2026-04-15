import { M } from './multilangM';
import type { Phase3SkincareRoutineRecommendationResult } from './phase3SkincareRoutineRecommendationTypes';

export const phase3SkincareRoutineRecommendationResults: Phase3SkincareRoutineRecommendationResult[] = [
  {
    type: 'Type1',
    emoji: '💧',
    title: M(
      '맑고 균일한 피부를 위한, 정상 피부 루틴',
      'Balanced “normal skin” routine for clear, even skin',
      '透明感と均一感を高める、ノーマル肌ルーティン',
      '打造清透均匀肤质的「中性肌」护理流程',
      '打造清透均勻膚質的「中性肌」保養流程',
      'Thói quen cho da thường—trong sáng, đều màu',
      'Rutinitas kulit normal—cerah dan merata'
    ),
    skinTypeDiagnosis: M(
      '정상 피부 (Normal Skin)',
      'Normal skin',
      'ノーマル肌',
      '中性肤质',
      '中性膚質',
      'Da thường (normal)',
      'Kulit normal'
    ),
    leadQuote: M(
      '"당신의 피부는 비교적 균형이 잘 잡혀 있습니다. 지금 상태를 유지하면서 더 밝고 맑은 피부로 업그레이드하는 것이 목표입니다."',
      '"Your skin is fairly balanced. The goal is to keep this baseline and upgrade to brighter, clearer skin."',
      '"肌のバランスは比較的取れています。今の土台を保ちつつ、より明るく澄んだ肌へアップデートしましょう。"',
      '"你的皮肤相对平衡。在维持现状的基础上，目标是更明亮、更清透。"',
      '"你的皮膚相對平衡。在維持現狀的基礎上，目標是更明亮、更清透。"',
      '"Da bạn khá cân bằng. Mục tiêu là giữ nền tốt và nâng cấp độ sáng, trong."',
      '"Kulitmu relatif seimbang. Tujuannya menjaga baseline dan upgrade ke kulit lebih cerah."'
    ),
    description: M('', '', '', '', '', '', ''),
    morningRoutine: M(
      `1단계 세안: 폼클렌저 또는 젤 클렌저로 부드럽게 세안
2단계 토너: 나이아신아마이드 또는 알파아부틴 함유 토너로 피부톤 정리
3단계 세럼: 비타민C 세럼으로 항산화 및 미백 케어
4단계 모이스처라이저: 가벼운 수분 크림
5단계 선크림: SPF50+ 자외선 차단제`,
      `Step 1 Cleansing: Foaming or gel cleanser, gently.
Step 2 Toner: Niacinamide or alpha-arbutin to even tone.
Step 3 Serum: Vitamin C for antioxidant + brightening.
Step 4 Moisturizer: Lightweight hydrating cream.
Step 5 Sunscreen: SPF50+ broad-spectrum.`,
      `①洗顔：泡洗顔またはジェルでやさしく
②化粧水：ナイアシンアミド／アルファアルブチンでトーン整える
③美容液：ビタミンCで抗酸化・透明感
④保湿：軽めのウォータークリーム
⑤日焼け止め：SPF50+`,
      `① 洁面：泡沫或啫喱洁面，轻柔洗净
② 化妆水：烟酰胺或α-熊果苷匀亮肤色
③ 精华：维生素 C 抗氧化、提亮
④ 保湿：清爽补水面霜
⑤ 防晒：SPF50+ 广谱`,
      `① 洗臉：泡沫或凝膠洗臉，輕柔洗净
② 化妝水：菸鹼醯胺或 α-熊果素調亮膚色
③ 精華：維生素 C 抗氧化、提亮
④ 保濕：清爽補水面霜
⑤ 防曬：SPF50+ 廣譜`,
      `Bước 1 Rửa mặt: sữa rửa dạng bọt/gel nhẹ nhàng.
Bước 2 Toner: niacinamide hoặc alpha-arbutin đều màu.
Bước 3 Serum: vitamin C chống oxy hóa, sáng da.
Bước 4 Kem dưỡng: ẩm nhẹ.
Bước 5 Kem chống nắng SPF50+.`,
      `Langkah 1 Pembersihan: busa atau gel, lembut.
Langkah 2 Toner: niacinamide atau alpha-arbutin meratakan warna.
Langkah 3 Serum: vitamin C antioksidan & cerah.
Langkah 4 Pelembap: ringan berbasis air.
Langkah 5 Tabir surya SPF50+.`
    ),
    eveningRoutine: M(
      `1단계 더블 클렌징: 클렌징 오일 → 폼 클렌저
2단계 토너: 히알루론산 토너로 수분 공급
3단계 세럼: 레티놀 또는 펩타이드 세럼 (주 2~3회)
4단계 크림: 세라마이드 함유 보습 크림`,
      `Step 1 Double cleanse: oil → foam cleanser
Step 2 Toner: hyaluronic acid for hydration
Step 3 Serum: retinol or peptide (2–3 nights/week)
Step 4 Cream: ceramide moisturizer`,
      `①ダブル洗顔：オイル→泡
②化粧水：ヒアルロン酸で保湿
③美容液：レチノール／ペプチド（週2〜3回）
④クリーム：セラミド保湿`,
      `① 双重清洁：卸妆油 → 洁面
② 化妆水：透明质酸补水
③ 精华：视黄醇或胜肽（每周 2～3 次）
④ 面霜：神经酰胺保湿`,
      `① 雙重清潔：卸妝油 → 洗臉
② 化妝水：透明質酸補水
③ 精華：A 醇或胜肽（每週 2～3 次）
④ 乳霜：神經醯胺保濕`,
      `Tối: tẩy trang dầu → sữa rửa; toner HA; serum retinol/peptide 2–3 lần/tuần; kem ceramide.`,
      `Malam: double cleanse; toner HA; serum retinol/peptide 2–3×/minggu; krim ceramide.`
    ),
    keyIngredients: M(
      '나이아신아마이드, 비타민C, 히알루론산, 레티놀, 세라마이드, 알파아부틴',
      'Niacinamide, vitamin C, hyaluronic acid, retinol, ceramide, alpha-arbutin',
      'ナイアシンアミド、ビタミンC、ヒアルロン酸、レチノール、セラミド、アルファアルブチン',
      '烟酰胺、维生素 C、透明质酸、视黄醇、神经酰胺、α-熊果苷',
      '菸鹼醯胺、維生素 C、透明質酸、A 醇、神經醯胺、α-熊果素',
      'Niacinamide, vitamin C, HA, retinol, ceramide, alpha-arbutin',
      'Niacinamide, vitamin C, asam hialuronat, retinol, ceramide, alpha-arbutin'
    ),
    avoidIngredients: M(
      '과한 알코올 함량 제품, 향료 과다 제품',
      'High alcohol formulas, heavy fragrance',
      'アルコール過多、香料が強すぎる製品',
      '酒精过高、香精过重的产品',
      '酒精過高、香精過重的產品',
      'Cồn quá cao, hương liệu quá nặng',
      'Alkohol tinggi, wewangian berlebihan'
    ),
    weeklySpecial: M(
      '주 1~2회 효소 또는 AHA 필링 토너로 각질 관리',
      '1–2×/week: enzyme or AHA peeling toner for gentle exfoliation',
      '週1〜2回：酵素またはAHAピーリングトナーで角質ケア',
      '每周 1～2 次：酵素或 AHA 角质调理化妆水',
      '每週 1～2 次：酵素或 AHA 角質調理化妝水',
      '1–2 lần/tuần: toner enzyme/AHA tẩy tế bào nhẹ',
      '1–2×/minggu: toner enzim/AHA eksfoliasi ringan'
    ),
    routineEssence: M(
      '지금 상태를 유지하면서 비타민C와 레티놀로 피부 퀄리티를 한 단계 높여보세요',
      'Keep your baseline, then level up with vitamin C (day) and retinol (night).',
      '土台は維持しつつ、朝はビタミンC・夜はレチノールでワンランク上の肌へ。',
      '在维稳的基础上，用维生素 C（白天）和视黄醇（晚间）把肤质再抬一档。',
      '在維穩的基礎上，用維生素 C（白天）和 A 醇（晚間）把膚質再抬一階。',
      'Giữ nền ổn, tăng chất lượng da với vitamin C (sáng) và retinol (tối).',
      'Pertahankan kondisi stabil, tingkatkan dengan vitamin C (pagi) dan retinol (malam).'
    ),
    addTodayIngredient: M(
      '비타민C 세럼. 아침에 선크림 전 단계에 넣어보세요',
      'Add a vitamin C serum before sunscreen in the morning.',
      '朝、日焼け止め前にビタミンC美容液を。',
      '早上防晒前加一步维生素 C 精华。',
      '早上防曬前加一步維生素 C 精華。',
      'Sáng: thêm serum vitamin C trước kem chống nắng.',
      'Pagi: tambahkan serum vitamin C sebelum tabir surya.'
    ),
    shareTypeName: M(
      '정상 피부 루틴',
      'Normal-skin routine',
      'ノーマル肌ルーティン',
      '中性肌护理流程',
      '中性肌保養流程',
      'Thói quen da thường',
      'Rutinitas kulit normal'
    ),
  },
  {
    type: 'Type2',
    emoji: '🧴',
    title: M(
      '촉촉하고 탱탱하게, 건성 피부 집중 보습 루틴',
      'Deep hydration routine for dry skin',
      'しっとりハリを目指す、乾燥肌集中保湿ルーティン',
      '干皮密集补水护理流程',
      '乾皮密集補水保養流程',
      'Thói quen cấp ẩm sâu cho da khô',
      'Rutinitas hidrasi intens untuk kulit kering'
    ),
    skinTypeDiagnosis: M(
      '건성 피부 (Dry Skin)',
      'Dry skin',
      '乾燥肌',
      '干性肤质',
      '乾性膚質',
      'Da khô',
      'Kulit kering'
    ),
    leadQuote: M(
      '"당신의 피부는 수분과 유분 모두 부족한 상태입니다. 보습 레이어링이 핵심이며, 성분 선택이 매우 중요합니다."',
      '"Your skin lacks both water and oil. Layering hydration and choosing the right ingredients are key."',
      '"水分も油分も不足しがちです。重ね保湿と成分選びがとても重要です。"',
      '"你的皮肤水油都偏少。叠加保湿与选对成分是关键。"',
      '"你的皮膚水油都偏少。疊加保濕與選對成分是關鍵。"',
      '"Da thiếu cả nước và dầu. Cần layering ẩm và chọn đúng thành phần."',
      '"Kulit kekurangan air dan minyak. Penting layering pelembap dan bahan yang tepat."'
    ),
    description: M('', '', '', '', '', '', ''),
    morningRoutine: M(
      `1단계 세안: 약산성 저자극 클렌저. 폼보다는 밀크 또는 젤리 타입
2단계 토너: 히알루론산 + 글리세린 함유 수분 토너. 손바닥으로 눌러 흡수
3단계 에센스: 페룰산 또는 마데카소사이드 에센스로 피부 장벽 강화
4단계 세럼: 히알루론산 고농축 세럼 또는 나이아신아마이드 세럼
5단계 아이크림: 수분 아이크림으로 눈가 건조 방지
6단계 크림: 세라마이드 + 시어버터 함유 영양 크림
7단계 선크림: 보습력 있는 크림 타입 선크림`,
      `Step 1 Cleansing: Mild acidic cleanser—milk or jelly over harsh foam.
Step 2 Toner: Hyaluronic acid + glycerin; pat in with palms.
Step 3 Essence: Ferulic or madecassoside to support the barrier.
Step 4 Serum: High-HA serum or niacinamide.
Step 5 Eye cream: Hydrating eye cream.
Step 6 Cream: Ceramide + shea butter.
Step 7 Sunscreen: Moisturizing cream-type SPF.`,
      `①洗顔：弱酸性・低刺激（ミルク／ゼリー系）
②化粧水：ヒアルロン酸＋グリセリンを手で押し込む
③エッセンス：フェルラ酸／マデカソサイドでバリア
④美容液：HA高濃度またはナイアシンアミド
⑤アイクリーム
⑥クリーム：セラミド＋シアバター
⑦日焼け止め：しっとりクリーム系`,
      `① 洁面：弱酸低刺激，优先乳液/凝露质地
② 化妆水：透明质酸+甘油，用手按压吸收
③ 精华：阿魏酸或积雪草苷修护屏障
④ 精华：高浓度透明质酸或烟酰胺
⑤ 眼霜：保湿型
⑥ 面霜：神经酰胺+乳木果
⑦ 防晒：偏滋润乳霜型`,
      `① 洗臉：弱酸低刺激，優先乳液／凝露質地
② 化妝水：透明質酸+甘油，用手按壓吸收
③ 精華：阿魏酸或積雪草苷修護屏障
④ 精華：高濃度透明質酸或菸鹼醯胺
⑤ 眼霜：保濕型
⑥ 乳霜：神經醯胺+乳木果
⑦ 防曬：偏滋潤乳霜型`,
      `Sáng: sữa rửa dịu; toner HA+glycerin vỗ tay; essence phục hồi; serum HA/niacinamide; kem mắt; kem ceramide+bơ hạt; kem chống nắng dưỡng ẩm.`,
      `Pagi: cleanser mild; toner HA+glycerin; essence barrier; serum HA/niacinamide; eye cream; krim ceramide+shea; tabir surya lembap.`
    ),
    eveningRoutine: M(
      `1단계 클렌징: 클렌징 밤 또는 오일로 부드럽게 녹여내기
2단계 세안: 저자극 약산성 클렌저로 2차 세안
3단계 토너: 수분 토너 2~3회 레이어링 (토너팩 주 1~2회 추천)
4단계 세럼: 스쿠알란 또는 아르간 오일 세럼
5단계 크림: 두꺼운 오일 함유 나이트 크림
6단계 마무리: 페이셜 오일 1~2방울로 마무리 (선택)`,
      `Step 1 Remove makeup: cleansing balm or oil.
Step 2 Second cleanse: mild acidic cleanser.
Step 3 Toner: layer 2–3× (toner mask 1–2×/week).
Step 4 Serum: squalane or argan oil serum.
Step 5 Cream: rich night cream with oils.
Step 6 Optional: 1–2 drops facial oil.`,
      `①メイク落とし：バーム／オイル
②洗顔：弱酸性で2次洗顔
③化粧水：2〜3回重ね（週1〜2回パックも）
④美容液：スクワラン／アルガンオイル
⑤ナイトクリーム：オイル配合の厚め
⑥仕上げ：フェイスオイル1〜2滴（任意）`,
      `① 卸妆：卸妆膏或卸妆油
② 洁面：弱酸二次清洁
③ 化妆水：叠涂 2～3 遍（每周 1～2 次湿敷）
④ 精华：角鲨烷或阿甘油
⑤ 晚霜：含油滋润型
⑥ 可选：1～2 滴面油`,
      `① 卸妝：卸妝膏或卸妝油
② 洗臉：弱酸二次清潔
③ 化妝水：疊擦 2～3 遍（每週 1～2 次濕敷）
④ 精華：角鯊烷或阿甘油
⑤ 晚霜：含油滋潤型
⑥ 可選：1～2 滴臉部油`,
      `Tối: tẩy trang dầu/bơm; rửa lại dịu; toner layer 2–3 lần; serum squalane/argan; kem đêm dày; có thể thêm vài giọt dầu.`,
      `Malam: cleansing balm/minyak; cuci kedua; toner layering; serum squalane/argan; night cream kaya; opsional minyak wajah.`
    ),
    keyIngredients: M(
      '히알루론산, 세라마이드, 글리세린, 스쿠알란, 시어버터, 판테놀, 마데카소사이드',
      'Hyaluronic acid, ceramide, glycerin, squalane, shea butter, panthenol, madecassoside',
      'ヒアルロン酸、セラミド、グリセリン、スクワラン、シアバター、パンテノール、マデカソサイド',
      '透明质酸、神经酰胺、甘油、角鲨烷、乳木果、泛醇、积雪草苷',
      '透明質酸、神經醯胺、甘油、角鯊烷、乳木果、泛醇、積雪草苷',
      'HA, ceramide, glycerin, squalane, bơ shea, panthenol, madecassoside',
      'Asam hialuronat, ceramide, gliserin, squalane, mentega shea, panthenol, madecassoside'
    ),
    avoidIngredients: M(
      '에탄올 고함량 제품, 살리실산, 강한 AHA/BHA',
      'High ethanol, salicylic acid, strong AHA/BHA',
      'エタノール過多、サリチル酸、強めのAHA/BHA',
      '高酒精、水杨酸、强 AHA/BHA',
      '高酒精、水楊酸、強 AHA/BHA',
      'Cồn cao, salicylic, AHA/BHA mạnh',
      'Alkohol tinggi, salisilat, AHA/BHA kuat'
    ),
    weeklySpecial: M(
      '주 1회 수분 시트마스크 또는 슬리핑 팩',
      '1×/week: hydrating sheet mask or sleeping pack',
      '週1回：保湿シートマスクまたはスリーピングパック',
      '每周一次：补水面膜或睡眠面膜',
      '每週一次：補水面膜或睡眠面膜',
      '1 lần/tuần: mặt nạ giấy ẩm hoặc sleeping pack',
      '1×/minggu: sheet mask atau sleeping pack lembap'
    ),
    routineEssence: M(
      '세안 후 30초 이내에 토너를 바르는 것이 건성 피부의 황금 룰입니다',
      'Golden rule for dry skin: apply toner within ~30 seconds after cleansing.',
      '乾燥肌の鉄則：洗顔後30秒以内に化粧水。',
      '干皮黄金法则：洁面后约 30 秒内上化妆水。',
      '乾皮黃金法則：洗臉後約 30 秒內上化妝水。',
      'Quy tắc vàng da khô: toner trong ~30 giây sau rửa mặt.',
      'Aturan emas kulit kering: toner dalam ~30 detik setelah cuci muka.'
    ),
    addTodayIngredient: M(
      '세라마이드 크림. 피부 장벽을 복구하는 가장 핵심 성분입니다',
      'A ceramide cream—core for repairing the skin barrier.',
      'セラミドクリーム—バリア修復の要です。',
      '神经酰胺面霜——修护屏障的核心。',
      '神經醯胺乳霜——修護屏障的核心。',
      'Kem ceramide—trụ cột phục hồi hàng rào da.',
      'Krim ceramide—inti memperbaiki skin barrier.'
    ),
    shareTypeName: M(
      '건성 집중 보습 루틴',
      'Dry-skin hydration routine',
      '乾燥肌・集中保湿',
      '干皮密集补水',
      '乾皮密集補水',
      'Tập trung ẩm cho da khô',
      'Hidrasi fokus kulit kering'
    ),
  },
  {
    type: 'Type3',
    emoji: '⚖️',
    title: M(
      '부위별 맞춤 케어로 균형 잡는, 복합성 피부 밸런싱 루틴',
      'Zone-by-zone balancing routine for combination skin',
      '部位別ケアで整える、混合肌バランシングルーティン',
      '分区护理平衡「混合肌」流程',
      '分區護理平衡「混合肌」流程',
      'Cân bằng da hỗn hợp theo từng vùng',
      'Rutinitas seimbang untuk kulit kombinasi'
    ),
    skinTypeDiagnosis: M(
      '복합성 피부 (Combination Skin)',
      'Combination skin',
      '混合肌',
      '混合性肤质',
      '混合性膚質',
      'Da hỗn hợp',
      'Kulit kombinasi'
    ),
    leadQuote: M(
      '"T존과 볼이 서로 다른 타입인 당신. 한 가지 제품으로 해결하려다가 오히려 악화되는 경우가 많습니다. 부위별 맞춤 케어가 핵심입니다."',
      '"Your T-zone and cheeks behave differently—one product for everything often makes it worse. Zone-specific care is the key."',
      '"Tゾーンと頬で悩みが違うあなた。一つの製品で済ませようとすると悪化しがち。部位別ケアが鍵です。"',
      '"T 区和脸颊需求不同，一味全脸用同款反而容易出问题。分区护理是关键。"',
      '"T 字與臉頰需求不同，一味全臉用同款反而容易出問題。分區護理是關鍵。"',
      '"Vùng chữ T và má khác nhau—một loại cho cả mặt thường làm tệ hơn. Chăm theo vùng là chính."',
      '"Area T dan pipi berbeda—satu produk untuk semua sering memperburuk. Perawatan per area penting."'
    ),
    description: M('', '', '', '', '', '', ''),
    morningRoutine: M(
      `1단계 세안: 약산성 젤 타입 클렌저. T존을 꼼꼼하게, 볼은 부드럽게
2단계 토너: 나이아신아마이드 + 히알루론산 함유 밸런싱 토너. 전체 사용
3단계 세럼: 가벼운 수분 세럼 전체 도포
4단계 모이스처라이저 (부위별)
• T존: 오일프리 젤 또는 가벼운 플루이드 타입
• 볼: 세라마이드 함유 크림
5단계 선크림: 가볍고 논코메도제닉 선크림`,
      `Step 1 Cleansing: Gel cleanser—thorough on T-zone, gentle on cheeks.
Step 2 Toner: Niacinamide + HA balancing toner all over.
Step 3 Serum: Lightweight hydrating serum all over.
Step 4 Moisturizer by zone:
• T-zone: oil-free gel or fluid
• Cheeks: ceramide cream
Step 5 Sunscreen: light, non-comedogenic.`,
      `①洗顔：ジェルでTゾーンは丁寧、頬はやさしく
②化粧水：ナイアシンアミド＋HAで全体
③美容液：軽い保湿を全体
④保湿：部位別
・Tゾーン：オイルフリージェル／フルイド
・頬：セラミドクリーム
⑤日焼け止め：軽めノンコメドジェニック`,
      `① 洁面：啫喱，T 区仔细、脸颊轻柔
② 化妆水：烟酰胺+透明质酸全脸
③ 精华：清爽补水全脸
④ 保湿分区：T 区无油啫喱/ fluid；脸颊神经酰胺霜
⑤ 防晒：轻薄不致痘`,
      `① 洗臉：凝膠，T 字仔細、臉頰輕柔
② 化妝水：菸鹼醯胺+透明質酸全臉
③ 精華：清爽補水全臉
④ 保濕分區：T 字無油凝膠；臉頰神經醯胺霜
⑤ 防曬：輕薄不致痘`,
      `Sáng: gel rửa—chữ T kỹ, má nhẹ; toner cân bằng; serum nước nhẹ; T: gel không dầu, má: kem ceramide; chống nắng nhẹ.`,
      `Pagi: gel—area T menyeluruh, pipi lembut; toner seimbang; serum ringan; T: gel bebas minyak, pipi: ceramide; tabir ringan.`
    ),
    eveningRoutine: M(
      `1단계 더블 클렌징: 클렌징 오일로 메이크업 제거 후 폼 클렌저
2단계 토너: 수분 토너 전체 도포
3단계 T존 집중 케어: 살리실산 2% 또는 나이아신아마이드 10% 트리트먼트를 T존에만
4단계 세럼: 히알루론산 세럼 전체 도포
5단계 크림 (부위별)
• T존: 생략 또는 아주 얇게
• 볼: 수분 크림 충분히`,
      `Step 1 Double cleanse: oil → foam.
Step 2 Toner: hydrating all over.
Step 3 T-zone only: 2% salicylic or 10% niacinamide treatment.
Step 4 Serum: hyaluronic acid all over.
Step 5 Cream by zone:
• T-zone: skip or very thin layer
• Cheeks: enough hydrating cream`,
      `①ダブル洗顔：オイル→泡
②化粧水：保湿を全体
③Tゾーンのみ：サリチル酸2％またはナイアシンアミド10％
④美容液：ヒアルロン酸を全体
⑤クリーム：部位別
・T：省略か極薄
・頬：しっかり保湿`,
      `① 双重清洁：油 → 洁面
② 化妆水：全脸补水
③ 仅 T 区：2% 水杨酸或 10% 烟酰胺
④ 精华：透明质酸全脸
⑤ 面霜分区：T 区省略或极薄；脸颊足量保湿`,
      `① 雙重清潔：油 → 洗臉
② 化妝水：全臉補水
③ 僅 T 字：2% 水楊酸或 10% 菸鹼醯胺
④ 精華：透明質酸全臉
⑤ 乳霜分區：T 字省略或極薄；臉頰足量保濕`,
      `Tối: tẩy trang kép; toner ẩm; chỉ chữ T: BHA 2%/niacinamide 10%; serum HA; kem: T mỏng/bỏ qua, má dày hơn.`,
      `Malam: double cleanse; toner; hanya area T: salicylat/niacinamide; serum HA; krim: T tipis atau skip, pipi tebal.`
    ),
    keyIngredients: M(
      '나이아신아마이드, 살리실산, 히알루론산, 세라마이드, 아연, BHA',
      'Niacinamide, salicylic acid, hyaluronic acid, ceramide, zinc, BHA',
      'ナイアシンアミド、サリチル酸、ヒアルロン酸、セラミド、亜鉛、BHA',
      '烟酰胺、水杨酸、透明质酸、神经酰胺、锌、BHA',
      '菸鹼醯胺、水楊酸、透明質酸、神經醯胺、鋅、BHA',
      'Niacinamide, acid salicylic, HA, ceramide, kẽm, BHA',
      'Niacinamide, asam salisilat, HA, ceramide, seng, BHA'
    ),
    avoidIngredients: M(
      '미네랄 오일, 라놀린 (코메도제닉 성분)',
      'Mineral oil, lanolin (comedogenic for many)',
      'ミネラルオイル、ラノリン（コメドgenicになりやすい）',
      '矿物油、羊毛脂（对许多人易致痘）',
      '礦物油、羊毛脂（對許多人易致痘）',
      'Dầu khoáng, lanolin (dễ bít tắc lỗ chân lông)',
      'Minyak mineral, lanolin (rawan comedogenic)'
    ),
    weeklySpecial: M(
      'T존 주 1~2회 클레이 마스크, 볼 주 1회 수분 마스크 별도 진행',
      '1–2×/week clay mask on T-zone; 1×/week hydrating mask on cheeks.',
      '週1〜2回：Tゾーンにクレイ、週1回：頬に保湿マスク。',
      '每周 T 区 1～2 次泥膜；脸颊每周 1 次补水面膜。',
      '每週 T 字 1～2 次泥膜；臉頰每週 1 次補水面膜。',
      '1–2 lần/tuần mặt nạ đất cho chữ T; 1 lần/tuần mặt nạ ẩm cho má.',
      '1–2×/minggu masker tanah di area T; 1×/minggu masker lembap di pipi.'
    ),
    routineEssence: M(
      'T존과 볼을 완전히 다른 피부처럼 관리하는 것이 복합성 피부의 정답입니다',
      'Treat your T-zone and cheeks like two different skin types—that’s the combo-skin answer.',
      'Tゾーンと頬を別の肌としてケアするのが混合肌の正解。',
      '把 T 区和脸颊当成两种肤质来护理，是混合肌的正解。',
      '把 T 字和臉頰當成兩種膚質來護理，是混合肌的正解。',
      'Coi chữ T và má như hai loại da khác nhau—đó là cách đúng cho da hỗn hợp.',
      'Perlakukan area T dan pipi seperti dua tipe kulit—itulah jawaban untuk kombinasi.'
    ),
    addTodayIngredient: M(
      '나이아신아마이드 10% 앰플. T존 피지 조절과 볼 피부톤 개선을 동시에 해결합니다',
      'Try a 10% niacinamide ampoule—oil control on the T-zone and tone on cheeks.',
      'ナイアシンアミド10％アンプル—Tゾーンの皮脂と頬のくすみ対策に。',
      '试试 10% 烟酰胺安瓶：同时照顾 T 区油脂与脸颊肤色。',
      '試試 10% 菸鹼醯胺安瓶：同時照顧 T 字油脂與臉頰膚色。',
      'Ampoule niacinamide 10%—kiểm dầu vùng T và sáng má.',
      'Ampul niacinamide 10%—kontrol minyak area T dan meratakan warna pipi.'
    ),
    shareTypeName: M(
      '복합성 밸런싱 루틴',
      'Combination balancing routine',
      '混合肌バランス',
      '混合肌平衡护理',
      '混合肌平衡保養',
      'Cân bằng da hỗn hợp',
      'Seimbang kulit kombinasi'
    ),
  },
  {
    type: 'Type4',
    emoji: '🫧',
    title: M(
      '피지 잡고 트러블 없애는, 지성 피부 오일 컨트롤 루틴',
      'Oil-control routine for oily, breakout-prone skin',
      '皮脂コントロール、脂性肌・トラブル向けルーティン',
      '控油抑痘「油性肌」护理流程',
      '控油抑痘「油性肌」保養流程',
      'Kiểm soát dầu cho da dầu, dễ mụn',
      'Kontrol minyak untuk kulit berminyak dan berjerawat'
    ),
    skinTypeDiagnosis: M(
      '지성 피부 (Oily Skin)',
      'Oily skin',
      '脂性肌',
      '油性肤质',
      '油性膚質',
      'Da dầu',
      'Kulit berminyak'
    ),
    leadQuote: M(
      '"당신의 피부는 피지 분비가 활발한 상태입니다. 수분은 충분히 공급하면서 유분을 조절하는 것이 핵심입니다. 과하게 건조시키면 오히려 피지가 더 분비됩니다."',
      '"Your skin produces plenty of sebum. Supply water while controlling oil—over-drying can trigger even more oil."',
      '"皮脂分泌が活発です。水分はしっかり、油分はコントロール。過度に乾かすと皮脂が増えがちです。"',
      '"皮脂分泌旺盛。要补水也要控油——过度脱脂反而会刺激更多出油。"',
      '"皮脂分泌旺盛。要補水也要控油——過度去脂反而會刺激更多出油。"',
      '"Da tiết nhiều dầu. Cần cấp nước và kiểm soát dầu—làm khô quá sẽ tiết thêm dầu."',
      '"Kulit banyak sebum. Beri air sekaligus kontrol minyak—mengeringkan berlebihan memicu lebih banyak minyak."'
    ),
    description: M('', '', '', '', '', '', ''),
    morningRoutine: M(
      `1단계 세안: 약산성 젤 또는 폼 클렌저. 단, 과하게 세게 세안하지 않기
2단계 토너: BHA (살리실산) 함유 토너로 모공 케어. 또는 나이아신아마이드 토너
3단계 세럼: 나이아신아마이드 10% + 아연 세럼으로 피지 조절
4단계 모이스처라이저: 오일프리 수분 젤 타입. 보습은 반드시 해야 함
5단계 선크림: 오일프리, 논코메도제닉 SPF50+ 선크림. 젤 또는 워터 타입`,
      `Step 1 Cleansing: Gel or foam—don’t scrub harshly.
Step 2 Toner: BHA (salicylic) for pores, or niacinamide toner.
Step 3 Serum: 10% niacinamide + zinc for sebum.
Step 4 Moisturizer: Oil-free gel—you still need hydration.
Step 5 Sunscreen: Oil-free, non-comedogenic SPF50+ (gel/water type).`,
      `①洗顔：ジェル／泡、ゴシゴシしない
②化粧水：BHA（サリチル酸）またはナイアシンアミド
③美容液：ナイアシンアミド10％＋亜鉛
④保湿：オイルフリージェル（保湿は必須）
⑤日焼け止め：オイルフリー、ノンコメド SPF50+`,
      `① 洁面：啫喱或泡沫，勿过度摩擦
② 化妆水：BHA 水杨酸或烟酰胺
③ 精华：10% 烟酰胺+锌控油
④ 保湿：无油啫喱（仍需保湿）
⑤ 防晒：无油不致痘 SPF50+ 啫喱/水感`,
      `① 洗臉：凝膠或泡沫，勿過度摩擦
② 化妝水：BHA 水楊酸或菸鹼醯胺
③ 精華：10% 菸鹼醯胺+鋅控油
④ 保濕：無油凝膠（仍需保濕）
⑤ 防曬：無油不致痘 SPF50+ 凝膠／水感`,
      `Sáng: gel/bọt nhẹ; toner BHA hoặc niacinamide; serum 10% niacinamide+kẽm; kem ẩm không dầu; chống nắng không dầu SPF50+.`,
      `Pagi: gel/busa lembut; toner BHA/niacinamide; serum niacinamide 10%+seng; pelembap bebas minyak; tabir bebas minyak SPF50+.`
    ),
    eveningRoutine: M(
      `1단계 더블 클렌징: 워터 타입 클렌징 오일 또는 미셀라 워터 → 젤 클렌저
2단계 토너: AHA/BHA 혼합 토너로 각질 및 모공 관리 (주 2~3회)
3단계 트리트먼트: 살리실산 2% 스팟 트리트먼트를 트러블 부위에
4단계 세럼: 히알루론산 세럼으로 수분 공급
5단계 크림: 오일프리 경량 로션 또는 젤 크림. 크림 생략 불가`,
      `Step 1 Double cleanse: watery cleansing oil or micellar → gel cleanser.
Step 2 Toner: AHA/BHA blend 2–3 nights/week for pores/exfoliation.
Step 3 Spot: 2% salicylic on breakout areas.
Step 4 Serum: hyaluronic acid for water.
Step 5 Cream: oil-free light lotion or gel cream—don’t skip.`,
      `①ダブル洗顔：水感オイル／ミセラー→ジェル
②化粧水：AHA/BHA混合（週2〜3回）
③スポット：サリチル酸2％
④美容液：ヒアルロン酸
⑤クリーム：オイルフリーの軽い乳液／ジェル（省略しない）`,
      `① 双重清洁：水感卸妆油或卸妆水 → 啫喱洁面
② 化妆水：AHA/BHA 混合（每周 2～3 晚）
③ 点涂：2% 水杨酸于痘痘区
④ 精华：透明质酸补水
⑤ 面霜：无油轻薄乳液或啫喱霜，不可省略`,
      `① 雙重清潔：水感卸妝油或卸妝水 → 凝膠洗臉
② 化妝水：AHA/BHA 混合（每週 2～3 晚）
③ 點涂：2% 水楊酸於痘痘區
④ 精華：透明質酸補水
⑤ 乳霜：無油輕乳液或凝膠霜，不可省略`,
      `Tối: tẩy trang dầu dạng nước/micellar → gel; toner AHA/BHA 2–3 đêm/tuần; spot BHA 2%; serum HA; kem không dầu.`,
      `Malam: minyak/micellar → gel; toner AHA/BHA 2–3×/minggu; spot 2% salisilat; serum HA; krim bebas minyak.`
    ),
    keyIngredients: M(
      '살리실산(BHA), 나이아신아마이드, 아연, AHA, 글리코산, 티트리, 카올린',
      'Salicylic acid (BHA), niacinamide, zinc, AHA, glycolic acid, tea tree, kaolin',
      'サリチル酸（BHA）、ナイアシンアミド、亜鉛、AHA、グリコール酸、ティーツリー、カオリン',
      '水杨酸（BHA）、烟酰胺、锌、AHA、乙醇酸、茶树、高岭土',
      '水楊酸（BHA）、菸鹼醯胺、鋅、AHA、乙醇酸、茶樹、高嶺土',
      'BHA, niacinamide, kẽm, AHA, acid glycolic, tea tree, kaolin',
      'BHA, niacinamide, seng, AHA, asam glikolat, tea tree, kaolin'
    ),
    avoidIngredients: M(
      '미네랄 오일, 코코넛 오일, 시어버터, 라놀린 (코메도제닉)',
      'Mineral oil, coconut oil, shea butter, lanolin (often comedogenic)',
      'ミネラルオイル、ココナッツオイル、シアバター、ラノリン',
      '矿物油、椰子油、乳木果、羊毛脂（易致痘）',
      '礦物油、椰子油、乳木果、羊毛脂（易致痘）',
      'Dầu khoáng, dừa, shea, lanolin',
      'Minyak mineral, kelapa, shea, lanolin'
    ),
    weeklySpecial: M(
      '주 1~2회 카올린 또는 벤토나이트 클레이 마스크로 모공 딥클렌징',
      '1–2×/week: kaolin or bentonite clay mask for deep pore cleansing',
      '週1〜2回：カオリン／ベントナイトクレイで毛穴スッキリ',
      '每周 1～2 次：高岭土或膨润土泥膜深层清洁毛孔',
      '每週 1～2 次：高嶺土或膨潤土泥膜深層清潔毛孔',
      '1–2 lần/tuần: mặt nạ đất sét kaolin/bentonit làm sạch sâu lỗ chân lông',
      '1–2×/minggu: masker tanah kaolin/bentonit untuk pori'
    ),
    routineEssence: M(
      '지성이라고 보습을 안 하면 피지가 더 많이 분비됩니다. 오일프리 보습은 반드시!',
      'Skipping moisturizer on oily skin can increase oil—use oil-free hydration.',
      '脂性だから保湿しないと、かえって皮脂が増えます。オイルフリー保湿を。',
      '油皮不保湿反而更油——无油保湿必须有。',
      '油皮不保濕反而更油——無油保濕必須有。',
      'Da dầu mà bỏ ẩm sẽ tiết thêm dầu—cần dưỡng không dầu.',
      'Kulit berminyak tanpa pelembap malah lebih berminyak—wajib pelembap bebas minyak.'
    ),
    addTodayIngredient: M(
      '살리실산 2% 토너. 모공 속 피지를 녹여내는 지성 피부 최강 성분입니다',
      'A 2% salicylic toner—strong ally for oily skin and clogged pores.',
      'サリチル酸2％トナー—毛穴の皮脂に効く定番成分。',
      '2% 水杨酸化妆水——溶解毛孔油脂的经典成分。',
      '2% 水楊酸化妝水——溶解毛孔油脂的經典成分。',
      'Toner BHA 2%—đồng minh cho da dầu, lỗ chân lông.',
      'Toner asam salisilat 2%—andalan kulit berminyak dan pori.'
    ),
    shareTypeName: M(
      '지성 오일 컨트롤 루틴',
      'Oily-skin oil control',
      '脂性肌・皮脂コントロール',
      '油性肌控油',
      '油性肌控油',
      'Kiểm soát dầu',
      'Kontrol minyak'
    ),
  },
  {
    type: 'Type5',
    emoji: '🌸',
    title: M(
      '예민한 피부 달래는, 민감성 피부 장벽 강화 루틴',
      'Barrier-first routine for sensitive skin',
      'ゆらぎ・敏感肌向け、バリア強化ルーティン',
      '敏感肌屏障修护流程',
      '敏感肌屏障修護流程',
      'Tăng cường hàng rào cho da nhạy cảm',
      'Memperkuat barrier untuk kulit sensitif'
    ),
    skinTypeDiagnosis: M(
      '민감성 피부 (Sensitive Skin)',
      'Sensitive skin',
      '敏感肌',
      '敏感肤质',
      '敏感膚質',
      'Da nhạy cảm',
      'Kulit sensitif'
    ),
    leadQuote: M(
      '"당신의 피부는 외부 자극에 쉽게 반응하고 피부 장벽이 약화된 상태일 가능성이 높습니다. 성분 수를 최소화하고 피부 장벽 복구에 집중하는 것이 최우선입니다."',
      '"Your skin likely reacts easily and the barrier may be weakened. Fewer ingredients and barrier repair come first."',
      '"外部刺激に反応しやすく、バリアが弱まっている可能性があります。成分を絞り、バリア修復を最優先に。"',
      '"皮肤容易受刺激，屏障可能偏弱。优先精简成分、修护屏障。"',
      '"皮膚容易受刺激，屏障可能偏弱。優先精簡成分、修護屏障。"',
      '"Da dễ kích ứng, hàng rào có thể yếu—ưu tiên ít thành phần và phục hồi."',
      '"Kulit mudah bereaksi—kurangi bahan, fokus perbaikan barrier."'
    ),
    description: M('', '', '', '', '', '', ''),
    morningRoutine: M(
      `1단계 세안: 무향, 무색소 약산성 클렌저. 미지근한 물로 부드럽게
2단계 토너: 판테놀 또는 마데카소사이드 함유 진정 토너. 알코올 성분 없는 것으로
3단계 세럼: 센텔라 아시아티카 또는 알로에베라 세럼으로 진정 케어
4단계 크림: 세라마이드 + 판테놀 함유 무향 크림으로 장벽 강화
5단계 선크림: 무기자차 (산화아연, 이산화티탄) 선크림 선택. 유기자차는 자극 가능성 있음`,
      `Step 1 Cleansing: Fragrance-free, dye-free mild cleanser; lukewarm water.
Step 2 Toner: Panthenol or madecassoside soothing toner—no alcohol.
Step 3 Serum: Centella asiatica or aloe to calm.
Step 4 Cream: Fragrance-free ceramide + panthenol barrier cream.
Step 5 Sunscreen: Mineral (zinc oxide, titanium dioxide); organic filters may irritate.`,
      `①洗顔：無香料・無着色の弱酸性、ぬるま湯
②化粧水：パンテノール／マデカソサイド、アルコールフリー
③美容液：センテラ／アロエで鎮静
④クリーム：無香料セラミド＋パンテノール
⑤日焼け止め：無機（酸化亜鉛・二酸化チタン）推奨`,
      `① 洁面：无香无色素弱酸，温水
② 化妆水：泛醇或积雪草苷舒缓，无酒精
③ 精华：积雪草或芦荟镇静
④ 面霜：无香神经酰胺+泛醇
⑤ 防晒：物理（氧化锌、二氧化钛）更稳妥`,
      `① 洗臉：無香無色素弱酸，溫水
② 化妝水：泛醇或積雪草苷舒緩，無酒精
③ 精華：積雪草或蘆薈鎮靜
④ 乳霜：無香神經醯胺+泛醇
⑤ 防曬：物理（氧化鋅、二氧化鈦）較穩妥`,
      `Sáng: sữa rửa không hương; toner panthenol/madecassoside không cồn; serum centella/nha đam; kem ceramide; chống nắng khoáng.`,
      `Pagi: cleanser tanpa wewangian; toner panthenol/madecassoside; serum centella/aloe; krim ceramide; tabir surya mineral.`
    ),
    eveningRoutine: M(
      `1단계 클렌징: 저자극 클렌징 밤 또는 미셀라 워터로 부드럽게 제거
2단계 세안: 약산성 무향 클렌저로 가볍게 2차 세안
3단계 토너: 진정 토너. 문지르지 말고 손바닥으로 살살 눌러 흡수
4단계 세럼: 마데카소사이드 + 판테놀 세럼으로 피부 재생 도움
5단계 크림: 무향 영양 크림으로 장벽 보호`,
      `Step 1 Remove makeup: mild cleansing balm or micellar.
Step 2 Second cleanse: fragrance-free mild cleanser.
Step 3 Toner: soothing—pat with palms, don’t rub.
Step 4 Serum: madecassoside + panthenol for repair.
Step 5 Cream: fragrance-free nourishing barrier cream.`,
      `①メイク落とし：低刺激バーム／ミセラー
②洗顔：無香料の弱酸性
③化粧水：なでず手で押し込む
④美容液：マデカソサイド＋パンテノール
⑤クリーム：無香料で保護`,
      `① 卸妆：温和卸妆膏或卸妆水
② 洁面：无香弱酸二次清洁
③ 化妆水：舒缓型，用手按压勿摩擦
④ 精华：积雪草苷+泛醇修护
⑤ 面霜：无香滋养锁水`,
      `① 卸妝：溫和卸妝膏或卸妝水
② 洗臉：無香弱酸二次清潔
③ 化妝水：舒緩型，用手按壓勿摩擦
④ 精華：積雪草苷+泛醇修護
⑤ 乳霜：無香滋養鎖水`,
      `Tối: tẩy trang dịu; rửa lại không mùi; toner vỗ tay; serum madecassoside+panthenol; kem không mùi.`,
      `Malam: balm/micellar; cuci tanpa wewangian; toner tepuk; serum madecassoside+panthenol; krim tanpa wewangian.`
    ),
    keyIngredients: M(
      '세라마이드, 판테놀, 마데카소사이드, 센텔라아시아티카, 알란토인, 베타글루칸, 산화아연',
      'Ceramide, panthenol, madecassoside, centella asiatica, allantoin, beta-glucan, zinc oxide',
      'セラミド、パンテノール、マデカソサイド、センテラ、アラントイン、β-グルカン、酸化亜鉛',
      '神经酰胺、泛醇、积雪草苷、积雪草、尿囊素、β-葡聚糖、氧化锌',
      '神經醯胺、泛醇、積雪草苷、積雪草、尿囊素、β-葡聚糖、氧化鋅',
      'Ceramide, panthenol, madecassoside, centella, allantoin, beta-glucan, ZnO',
      'Ceramide, panthenol, madecassoside, centella, allantoin, beta-glucan, seng oksida'
    ),
    avoidIngredients: M(
      '향료, 에탄올, 인공색소, 살리실산, 강한 레티놀, 멘톨, 유기자차',
      'Fragrance, ethanol, dyes, salicylic acid, strong retinol, menthol, some organic UV filters',
      '香料、エタノール、着色、サリチル酸、強いレチノール、メントール、有機系UV（刺激の場合）',
      '香精、酒精、人工色素、水杨酸、高浓度 A 醇、薄荷醇、部分化学防晒',
      '香精、酒精、人工色素、水楊酸、高濃度 A 醇、薄荷醇、部分化學防曬',
      'Hương liệu, cồn, màu, salicylic, retinol mạnh, bạc hà, một filter hóa học',
      'Wewangian, alkohol, pewarna, salisilat, retinol kuat, mentol, filter UV tertentu'
    ),
    weeklySpecial: M(
      '주 1회 무향 진정 마스크. 자극 강한 필링은 피하기',
      '1×/week: fragrance-free soothing mask; avoid harsh peels.',
      '週1回：無香料の鎮静マスク。強いピーリングは避ける。',
      '每周一次无香舒缓面膜；避免强去角质。',
      '每週一次無香舒緩面膜；避免強去角質。',
      '1 lần/tuần mặt nạ dịu không mùi; tránh peel mạnh.',
      '1×/minggu masker tanpa wewangian; hindari eksfoliasi keras.'
    ),
    routineEssence: M(
      '새 제품은 반드시 귀 뒤 패치 테스트 후 사용. 성분 수가 적은 제품이 민감성 피부에 유리합니다',
      'Patch-test new products behind the ear. Fewer ingredients usually suits sensitive skin better.',
      '新製品は必ずパッチテスト。成分が少ないほど敏感肌に有利なことが多いです。',
      '新品务必耳后试用；成分越精简往往越适合敏感肌。',
      '新品務必耳後試用；成分越精簡往往越適合敏感肌。',
      'Sản phẩm mới: test sau tai; càng ít thành phần càng an toàn cho da nhạy cảm.',
      'Produk baru: uji di belakang telinga; makin sedikit bahan makin aman untuk sensitif.'
    ),
    addTodayIngredient: M(
      '세라마이드 크림. 무너진 피부 장벽을 복구하는 민감성 피부의 구원 성분입니다',
      'A ceramide cream—go-to for rebuilding a compromised barrier.',
      'セラミドクリーム—バリアが乱れた敏感肌の味方。',
      '神经酰胺面霜——修护受损屏障的救星。',
      '神經醯胺乳霜——修護受損屏障的救星。',
      'Kem ceramide—để phục hồi hàng rào tổn thương.',
      'Krim ceramide—andalan memperbaiki barrier rusak.'
    ),
    shareTypeName: M(
      '민감성 장벽 강화 루틴',
      'Sensitive barrier routine',
      '敏感肌・バリア強化',
      '敏感肌屏障加强',
      '敏感肌屏障加強',
      'Tăng barrier da nhạy cảm',
      'Barrier kulit sensitif'
    ),
  },
  {
    type: 'Type6',
    emoji: '✨',
    title: M(
      '안티에이징과 수분 동시에, 건성 노화 피부 집중 케어 루틴',
      'Anti-aging + hydration for dry, aging skin',
      '乾燥・エイジング同時ケアの集中ルーティン',
      '干老肌：抗老与补水同步加强',
      '乾老肌：抗老與補水同步加強',
      'Chống lão hóa + cấp ẩm cho da khô, lão hóa',
      'Anti-aging + hidrasi untuk kulit kering dan menua'
    ),
    skinTypeDiagnosis: M(
      '건성 노화 피부 (Dry & Aging Skin)',
      'Dry & aging skin',
      '乾燥・エイジング肌',
      '干性初老/老化肤质',
      '乾性初老／老化膚質',
      'Da khô & lão hóa',
      'Kulit kering & penuaan'
    ),
    leadQuote: M(
      '"당신의 피부는 수분과 유분이 부족하면서 탄력 저하와 잔주름 고민이 함께 있는 상태입니다. 보습과 안티에이징을 동시에 공략하는 집중 루틴이 필요합니다."',
      '"Your skin lacks moisture and oil while showing fine lines and loss of firmness. You need a routine that pairs hydration with anti-aging."',
      '"水分・油分不足に加え、ハリ不足や小じわが気になる状態です。保湿とエイジングケアを同時に。"',
      '"缺水缺油同时有细纹、松弛困扰。需要保湿与抗老并行的加强护理。"',
      '"缺水缺油同時有細紋、鬆弛困擾。需要保濕與抗老並行的加強護理。"',
      '"Thiếu ẩm và dầu, kèm nếp nhăn và mất săn—cần routine vừa cấp ẩm vừa chống lão hóa."',
      '"Kurang air dan minyak, garis halus dan kendur—perlu rutinitas hidrasi + anti-aging."'
    ),
    description: M('', '', '', '', '', '', ''),
    morningRoutine: M(
      `1단계 세안: 밀크 또는 크림 타입 저자극 클렌저. 물 세안만 해도 충분한 날도 있음
2단계 토너: 히알루론산 + 글리세린 수분 토너를 3회 레이어링
3단계 에센스: 발효 성분 또는 갈락토미세스 에센스로 영양 공급
4단계 세럼: 비타민C 세럼으로 항산화 및 콜라겐 합성 도움
5단계 아이크림: 레티놀 또는 펩타이드 함유 아이크림으로 눈가 탄력
6단계 크림: 펩타이드 + 세라마이드 + 스쿠알란 함유 영양 크림
7단계 선크림: SPF50+ 영양 크림 타입 선크림. 자외선이 노화의 주범`,
      `Step 1 Cleansing: Milk or cream cleanser—some days water-only rinse is OK.
Step 2 Toner: Layer HA + glycerin toner 3×.
Step 3 Essence: Fermented or galactomyces for nutrients.
Step 4 Serum: Vitamin C for antioxidant/collagen support.
Step 5 Eye cream: Retinol or peptide for firmness.
Step 6 Cream: Peptide + ceramide + squalane.
Step 7 Sunscreen: SPF50+ rich cream type—UV is a major aging driver.`,
      `①洗顔：ミルク／クリーム系（日によっては水のみでも可）
②化粧水：HA＋グリセリンを3回重ね
③エッセンス：発酵／ガラクトミセス
④美容液：ビタミンC
⑤アイクリーム：レチノール／ペプチド
⑥クリーム：ペプチド＋セラミド＋スクワラン
⑦日焼け止め：SPF50+ クリーム系（紫外線は老化の大敵）`,
      `① 洁面：乳液或乳霜型（有时仅清水也可）
② 化妆水：透明质酸+甘油叠涂三遍
③ 精华：发酵或半乳糖酵母滋养
④ 精华：维生素 C 抗氧化
⑤ 眼霜：视黄醇或胜肽紧实眼周
⑥ 面霜：胜肽+神经酰胺+角鲨烷
⑦ 防晒：SPF50+ 偏滋润乳霜（光老化是主因之一）`,
      `① 洗臉：乳液或乳霜型（有時僅清水也可）
② 化妝水：透明質酸+甘油疊擦三遍
③ 精華：發酵或半乳糖酵母滋養
④ 精華：維生素 C 抗氧化
⑤ 眼霜：A 醇或胜肽緊實眼周
⑥ 乳霜：胜肽+神經醯胺+角鯊烷
⑦ 防曬：SPF50+ 偏滋潤乳霜`,
      `Sáng: sữa rửa dạng sữa/kem; toner HA+glycerin layer 3 lần; essence lên men; serum vitamin C; kem mắt retinol/peptide; kem peptide+ceramide+squalane; chống nắng SPF50+ dạng kem.`,
      `Pagi: milk/cream cleanser; toner HA+glycerin 3 lapis; essence fermentasi; serum vitamin C; eye retinol/peptide; krim peptide+ceramide+squalane; tabir SPF50+ kaya.`
    ),
    eveningRoutine: M(
      `1단계 클렌징: 클렌징 밤으로 천천히 마사지하며 제거
2단계 세안: 저자극 약산성 클렌저
3단계 토너: 수분 토너 듬뿍 레이어링
4단계 세럼: 레티놀 세럼 (주 2~3회, 저농도부터 시작)
5단계 오일: 로즈힙 오일 또는 아르간 오일 1~2방울
6단계 크림: 두꺼운 나이트 크림으로 피부 재생 지원
7단계 마무리: 페이셜 오일 또는 슬리핑 팩으로 마무리`,
      `Step 1 Cleansing: Massage with cleansing balm to remove makeup.
Step 2 Second cleanse: mild acidic cleanser.
Step 3 Toner: generous layers of hydrating toner.
Step 4 Serum: Retinol serum 2–3 nights/week, start low strength.
Step 5 Oil: 1–2 drops rosehip or argan oil.
Step 6 Cream: Rich night cream for overnight repair.
Step 7 Optional: facial oil or sleeping pack.`,
      `①クレンジング：バームでマッサージ落とし
②洗顔：弱酸性
③化粧水：たっぷり重ね
④美容液：レチノール（週2〜3回・低濃度から）
⑤オイル：ローズヒップ／アルガン1〜2滴
⑥ナイトクリーム：厚めに
⑦仕上げ：フェイスオイル／スリーピングパック`,
      `① 卸妆：卸妆膏按摩溶解
② 洁面：弱酸温和
③ 化妆水：大量叠涂补水
④ 精华：视黄醇每周 2～3 晚，从低浓度开始
⑤ 面油：玫瑰果油或阿甘油 1～2 滴
⑥ 晚霜：厚涂滋养修护
⑦ 可选：面油或睡眠面膜封层`,
      `① 卸妝：卸妝膏按摩溶解
② 洗臉：弱酸溫和
③ 化妝水：大量疊擦補水
④ 精華：A 醇每週 2～3 晚，從低濃度開始
⑤ 臉油：玫瑰果油或阿甘油 1～2 滴
⑥ 晚霜：厚塗滋養修護
⑦ 可選：臉油或睡眠面膜封層`,
      `Tối: balm massage; rửa dịu; toner layer nhiều; retinol 2–3 đêm/tuần từ nồng độ thấp; vài giọt rosehip/argan; kem đêm dày; có thể dầu/sleeping pack.`,
      `Malam: balm pijat; cuci lembut; toner banyak lapisan; retinol 2–3×/minggu mulai rendah; rosehip/argan; night cream tebal; opsional minyak/sleeping pack.`
    ),
    keyIngredients: M(
      '레티놀, 펩타이드, 히알루론산, 세라마이드, 비타민C, 스쿠알란, 로즈힙오일, 갈락토미세스, 코엔자임Q10',
      'Retinol, peptide, hyaluronic acid, ceramide, vitamin C, squalane, rosehip oil, galactomyces, coenzyme Q10',
      'レチノール、ペプチド、ヒアルロン酸、セラミド、ビタミンC、スクワラン、ローズヒップオイル、ガラクトミセス、コエンザイムQ10',
      '视黄醇、胜肽、透明质酸、神经酰胺、维生素 C、角鲨烷、玫瑰果油、半乳糖酵母、辅酶 Q10',
      'A 醇、胜肽、透明質酸、神經醯胺、維生素 C、角鯊烷、玫瑰果油、半乳糖酵母、輔酶 Q10',
      'Retinol, peptide, HA, ceramide, vitamin C, squalane, rosehip, galactomyces, CoQ10',
      'Retinol, peptida, HA, ceramide, vitamin C, squalane, rosehip, galactomyces, CoQ10'
    ),
    avoidIngredients: M(
      '강한 AHA (저자극 AHA는 가능), 에탄올 고함량 제품, 멘톨',
      'Strong AHA (mild AHA may be OK), high alcohol, menthol',
      '強いAHA（弱めのAHAは可）、高濃度アルコール、メントール',
      '强 AHA（低浓度 AHA 或可循序渐进）、高酒精、薄荷醇',
      '強 AHA（低濃度 A 醇或可循序漸進）、高酒精、薄荷醇',
      'AHA mạnh; cồn cao; bạc hà',
      'AHA kuat; alkohol tinggi; mentol'
    ),
    weeklySpecial: M(
      '주 1회 수분 시트마스크 + 주 1회 레티놀 집중 세럼 사용',
      '1×/week hydrating sheet mask + 1×/week focused retinol serum night.',
      '週1回：保湿シートマスク＋週1回：レチノール集中美容液の夜。',
      '每周一次补水面膜 + 每周一次视黄醇集中护理夜。',
      '每週一次補水面膜 + 每週一次 A 醇集中護理夜。',
      '1 lần/tuần mặt nạ ẩm + 1 lần/tuần đêm tập trung retinol.',
      '1×/minggu sheet mask + 1×/minggu malam fokus retinol.'
    ),
    routineEssence: M(
      '레티놀은 천천히 시작하세요. 0.025%부터 시작해서 피부가 적응하면 농도를 높여가는 것이 핵심입니다',
      'Start retinol slowly—e.g. 0.025%—and increase strength only as your skin adapts.',
      'レチノールはゆっくり。0.025％から始め、慣れたら濃度アップ。',
      '视黄醇请循序渐进：从约 0.025% 起，耐受后再提高浓度。',
      'A 醇請循序漸進：從約 0.025% 起，耐受後再提高濃度。',
      'Retinol: bắt đầu thấp (~0.025%), tăng dần khi da quen.',
      'Retinol: mulai rendah (~0.025%), naikkan jika kulit sudah adaptasi.'
    ),
    addTodayIngredient: M(
      '레티놀 저농도 세럼. 피부 턴오버를 촉진하는 안티에이징의 핵심 성분입니다',
      'A low-strength retinol serum—core for turnover and anti-aging.',
      '低濃度レチノール美容液—ターンオーバーとエイジングの要。',
      '低浓度视黄醇精华——促进角质代谢的抗老核心。',
      '低濃度 A 醇精華——促進角質代謝的抗老核心。',
      'Serum retinol nồng độ thấp—trụ cột chống lão hóa.',
      'Serum retinol konsentrasi rendah—inti anti-aging.'
    ),
    shareTypeName: M(
      '건성 노화 집중 케어 루틴',
      'Dry-aging intensive care',
      '乾燥・エイジング集中ケア',
      '干老肌加强护理',
      '乾老肌加強護理',
      'Tập trung da khô & lão hóa',
      'Perawatan fokus kering & penuaan'
    ),
  },
];
