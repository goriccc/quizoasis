"""Fill phase3EqSelfDiagnosisTest messages for all non-Korean locales."""
from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MESSAGES = ROOT / "messages"
LOCALES = ("en", "ja", "zh-CN", "zh-TW", "vi", "id")

START_MESSAGES = {
    "en": {"line1": "Having a high IQ does not always guarantee success.", "line2": "Daniel Goleman's research suggests emotional intelligence (EQ) accounts for up to 67% of professional success. Talent alone has limits when we cannot regulate emotions or understand others; people with strong EQ build relationships and move through crises in any environment.", "line3": "EQ has five elements: knowing your emotions (self-awareness), managing them (self-regulation), moving yourself forward (inner motivation), sensing others' emotions (empathy), and connecting them through relationships (social skills).", "line4": "Twelve questions analyze your EQ level and strengths and growth areas across all five elements.", "line5": "Start My EQ Self-Diagnosis 💜 Begin Honestly", "note": "※ Choose what is closest to your real behavior, not your ideal self."},
    "ja": {"line1": "IQが高い人がいつも成功するとは限りません。", "line2": "ダニエル・ゴールマンの研究では、職業的成功の最大67％をEQが左右するとされています。感情を調整できず他者を理解できなければ才能にも限界がありますが、EQが高い人はどんな環境でも関係を築き、危機を乗り越えます。", "line3": "EQは5つの要素から成ります。自分の感情を知る自己認識、扱う自己調整、自らを動かす内発的動機、他者の感情を感じる共感、それを関係につなぐ社会性です。", "line4": "12の質問で、EQの水準と5要素別の強み・課題を分析します。", "line5": "EQ自己診断を始める 💜 正直にスタート", "note": "※ 理想像ではなく、実際の行動パターンに最も近いものを選んでください。"},
    "zh-CN": {"line1": "IQ高并不总意味着一定成功。", "line2": "丹尼尔·戈尔曼的研究指出，职业成功最多有67%由情绪智力（EQ）决定。再有天赋，若无法调节情绪或理解他人，长期也会遇到限制；EQ高的人则能在任何环境中建立关系、度过危机。", "line3": "EQ由五部分组成：了解自己的情绪（自我觉察）、管理情绪（自我调节）、驱动自己前进（内在动机）、感受他人情绪（共情），以及将这些连接到关系中（社交能力）。", "line4": "通过12个问题，分析你的EQ水平，以及五项要素中的优势与成长点。", "line5": "开始我的EQ自我诊断 💜 诚实开始", "note": "※ 请选择最接近真实行为模式的答案，而不是理想中的自己。"},
    "zh-TW": {"line1": "IQ高並不總代表一定成功。", "line2": "丹尼爾·高曼的研究指出，職業成功最多有67%由情緒智力（EQ）決定。再有天賦，若無法調節情緒或理解他人，長期也會遇到限制；EQ高的人則能在任何環境中建立關係、度過危機。", "line3": "EQ由五部分組成：了解自己的情緒（自我覺察）、管理情緒（自我調節）、驅動自己前進（內在動機）、感受他人情緒（同理），以及將這些連結到關係中（社交能力）。", "line4": "透過12個問題，分析你的EQ水準，以及五項要素中的優勢與成長點。", "line5": "開始我的EQ自我診斷 💜 誠實開始", "note": "※ 請選擇最接近真實行為模式的答案，而不是理想中的自己。"},
    "vi": {"line1": "IQ cao không phải lúc nào cũng bảo đảm thành công.", "line2": "Nghiên cứu của Daniel Goleman cho thấy trí tuệ cảm xúc (EQ) quyết định tới 67% thành công nghề nghiệp. Tài năng cũng có giới hạn nếu không điều chỉnh được cảm xúc hay thấu hiểu người khác; người có EQ cao có thể xây dựng quan hệ và vượt qua khủng hoảng ở mọi môi trường.", "line3": "EQ gồm năm yếu tố: biết cảm xúc của mình (tự nhận thức), quản lý chúng (tự điều chỉnh), tự thúc đẩy (động lực nội tại), cảm nhận cảm xúc người khác (đồng cảm), và kết nối chúng trong quan hệ (kỹ năng xã hội).", "line4": "12 câu hỏi phân tích mức EQ cùng điểm mạnh và điểm cần phát triển ở cả năm yếu tố.", "line5": "Bắt Đầu Tự Chẩn Đoán EQ 💜 Thành Thật Bắt Đầu", "note": "※ Hãy chọn phương án gần nhất với hành vi thực tế, không phải bản thân lý tưởng."},
    "id": {"line1": "IQ tinggi tidak selalu menjamin keberhasilan.", "line2": "Riset Daniel Goleman menunjukkan kecerdasan emosional (EQ) dapat menentukan hingga 67% keberhasilan profesional. Bakat pun terbatas bila kita tidak dapat mengelola emosi atau memahami orang lain; orang dengan EQ tinggi mampu membangun relasi dan menghadapi krisis di lingkungan apa pun.", "line3": "EQ memiliki lima unsur: mengenali emosi diri (kesadaran diri), mengelolanya (pengaturan diri), menggerakkan diri (motivasi batin), merasakan emosi orang lain (empati), dan menghubungkannya dalam relasi (keterampilan sosial).", "line4": "Dua belas pertanyaan menganalisis tingkat EQ serta kekuatan dan area berkembang dalam lima unsur.", "line5": "Mulai Diagnosis Mandiri EQ-ku 💜 Mulai dengan Jujur", "note": "※ Pilih jawaban yang paling dekat dengan perilaku nyata, bukan dirimu yang ideal."},
}

UI_KEYS = ("adsenseTitle", "goToTest", "startTest", "shareResult", "retakeTest", "otherTests", "similarTests", "linkCopy", "kakao", "telegram", "wechat", "line", "whatsapp", "eqSummary", "eqType", "developFocusTitle", "fiveElementsAnalysisTitle", "domainAnalysisTitle", "totalScore", "scoreUnit", "selfAwarenessDomain", "selfRegulationDomain", "motivationDomain", "empathyDomain", "socialSkillsDomain", "strongestDomain", "boostDomain", "strengthsTitle", "cautionsTitle", "masterTraitsTitle", "tryNowTitle", "certificationPhrase", "oneLiner")
UI = {
    "en": ["AdSense Ad Area (My EQ Self-Diagnosis)", "Go to test", "Start My EQ Self-Diagnosis 💜 Begin Honestly", "Share result", "Retake", "Other tests", "Similar tests", "Copy link", "KakaoTalk", "Telegram", "WeChat", "Line", "WhatsApp", "EQ level", "EQ type", "Development focus", "Five-element analysis", "EQ scores by element", "Total EQ score", " pts", "Self-awareness", "Self-regulation", "Inner motivation", "Empathy", "Social skills", "Strongest EQ area", "Area to develop now", "Strengths", "Cautions", "Common traits at this EQ level", "Try this now", "Certification", "One-liner"],
    "ja": ["AdSense広告エリア（EQ自己診断）", "テストに進む", "EQ自己診断を始める 💜 正直にスタート", "結果をシェア", "もう一度", "他のテスト", "類似のテスト", "リンクをコピー", "カカオトーク", "Telegram", "WeChat", "LINE", "WhatsApp", "EQレベル", "EQタイプ", "開発フォーカス", "5要素分析", "EQ5要素別スコア", "総EQ指数", "点", "自己認識", "自己調整", "内発的動機", "共感", "社会性", "EQの強み領域", "今もっとも伸ばす領域", "強み", "注意点", "このEQレベルの共通点", "今すぐできること", "認定フレーズ", "一言"],
}
for loc in ("zh-CN", "zh-TW", "vi", "id"):
    # These values are overwritten from the Korean key order with locale-specific, user-facing labels.
    labels = {
        "zh-CN": ["AdSense广告区域（我的EQ自我诊断）", "前往测试", "开始我的EQ自我诊断 💜 诚实开始", "分享结果", "重新测试", "其他测试", "类似测试", "复制链接", "KakaoTalk", "Telegram", "微信", "LINE", "WhatsApp", "EQ水平", "EQ类型", "发展重点", "五要素分析", "EQ五要素得分", "总EQ指数", "分", "自我觉察", "自我调节", "内在动机", "共情", "社交能力", "EQ优势领域", "当前最需发展的领域", "优势", "注意点", "该EQ水平的共同特点", "现在就试试", "认证语", "一句话评价"],
        "zh-TW": ["AdSense廣告區域（我的EQ自我診斷）", "前往測試", "開始我的EQ自我診斷 💜 誠實開始", "分享結果", "重新測試", "其他測試", "類似測試", "複製連結", "KakaoTalk", "Telegram", "微信", "LINE", "WhatsApp", "EQ水準", "EQ類型", "發展重點", "五要素分析", "EQ五要素得分", "總EQ指數", "分", "自我覺察", "自我調節", "內在動機", "同理", "社交能力", "EQ優勢領域", "目前最需發展的領域", "優勢", "注意點", "該EQ水準的共同特點", "現在就試試", "認證語", "一句話評價"],
        "vi": ["Khu vực quảng cáo AdSense (Tự chẩn đoán EQ)", "Đi tới bài test", "Bắt Đầu Tự Chẩn Đoán EQ 💜 Thành Thật Bắt Đầu", "Chia sẻ kết quả", "Làm lại", "Bài test khác", "Bài test tương tự", "Sao chép liên kết", "KakaoTalk", "Telegram", "WeChat", "Line", "WhatsApp", "Mức EQ", "Loại EQ", "Trọng tâm phát triển", "Phân tích năm yếu tố", "Điểm EQ theo năm yếu tố", "Chỉ số EQ tổng", " điểm", "Tự nhận thức", "Tự điều chỉnh", "Động lực nội tại", "Đồng cảm", "Kỹ năng xã hội", "Lĩnh vực EQ mạnh nhất", "Lĩnh vực cần phát triển nhất", "Điểm mạnh", "Lưu ý", "Đặc điểm chung ở mức EQ này", "Thử ngay", "Câu chứng nhận", "Một câu đánh giá"],
        "id": ["Area Iklan AdSense (Diagnosis Mandiri EQ)", "Ke tes", "Mulai Diagnosis Mandiri EQ-ku 💜 Mulai dengan Jujur", "Bagikan hasil", "Ulangi", "Tes lain", "Tes serupa", "Salin tautan", "KakaoTalk", "Telegram", "WeChat", "Line", "WhatsApp", "Tingkat EQ", "Tipe EQ", "Fokus pengembangan", "Analisis lima unsur", "Skor lima unsur EQ", "Indeks EQ total", " poin", "Kesadaran diri", "Pengaturan diri", "Motivasi batin", "Empati", "Keterampilan sosial", "Area EQ terkuat", "Area yang paling perlu dikembangkan", "Kekuatan", "Perhatian", "Ciri umum pada tingkat EQ ini", "Coba sekarang", "Frasa sertifikasi", "Satu kalimat"],
    }
    UI[loc] = labels[loc]

ALERTS = {
    "en": ["Link copied!", "Result copied to clipboard!", "Sharing is not available.", "Link copied! Paste it in WeChat to share.", "Initializing KakaoTalk sharing. Please try again shortly.", "An error occurred while sharing to KakaoTalk."],
    "ja": ["リンクをコピーしました！", "結果をクリップボードにコピーしました！", "共有機能を使用できません。", "リンクをコピーしました！WeChatで貼り付けて共有してください。", "カカオトーク共有を初期化しています。少し待ってから再度お試しください。", "カカオトーク共有中にエラーが発生しました。"],
    "zh-CN": ["链接已复制！", "结果已复制到剪贴板！", "无法使用分享功能。", "链接已复制！请在微信中粘贴分享。", "正在初始化KakaoTalk分享，请稍后重试。", "KakaoTalk分享时发生错误。"],
    "zh-TW": ["連結已複製！", "結果已複製到剪貼簿！", "無法使用分享功能。", "連結已複製！請在微信中貼上分享。", "正在初始化KakaoTalk分享，請稍後再試。", "KakaoTalk分享時發生錯誤。"],
    "vi": ["Đã sao chép liên kết!", "Đã sao chép kết quả vào clipboard!", "Không thể sử dụng tính năng chia sẻ.", "Đã sao chép liên kết! Hãy dán vào WeChat để chia sẻ.", "Đang khởi tạo chia sẻ KakaoTalk. Vui lòng thử lại sau.", "Đã xảy ra lỗi khi chia sẻ lên KakaoTalk."],
    "id": ["Tautan disalin!", "Hasil disalin ke clipboard!", "Fitur berbagi tidak tersedia.", "Tautan disalin! Tempelkan di WeChat untuk berbagi.", "Menginisialisasi berbagi KakaoTalk. Coba lagi sebentar lagi.", "Terjadi kesalahan saat berbagi ke KakaoTalk."],
}
ALERT_KEYS = ("linkCopied", "resultCopied", "shareFailed", "wechatCopy", "kakaoInit", "kakaoError")

def _share(loc: str) -> dict[str, str]:
    names = {"en": "My EQ Self-Diagnosis", "ja": "私のEQ自己診断", "zh-CN": "我的EQ自我诊断", "zh-TW": "我的EQ自我診斷", "vi": "Tự chẩn đoán EQ của tôi", "id": "Diagnosis Mandiri EQ-ku"}[loc]
    invitation = {"en": "What's your EQ score?", "ja": "あなたのEQスコアは？", "zh-CN": "你的EQ得分是多少？", "zh-TW": "你的EQ得分是多少？", "vi": "Điểm EQ của bạn là bao nhiêu?", "id": "Berapa skor EQ-mu?"}[loc]
    start = {"en": "Start honestly!", "ja": "正直に始めよう！", "zh-CN": "诚实开始吧！", "zh-TW": "誠實開始吧！", "vi": "Hãy bắt đầu thật lòng!", "id": "Mulai dengan jujur!"}[loc]
    return {"default": f"{names}: {{type}}! 💜\n{invitation}", "kakao": f"{names}: {{type}}! 💜\n{invitation}", "wechat": f"{names}: {{type}}! 💜\n{invitation}", "whatsapp": f"{names}: {{type}}! 💜\n{invitation}", "telegram": f"{names}: {{type}}! 💜\n{invitation}", "line": f"{names}: {{type}}! 💜\n{invitation}", **{f"start{p}": f"{names} 💜 {start}" for p in ("Default", "Kakao", "Wechat", "Whatsapp", "Telegram", "Line")}}

def main() -> None:
    for loc in LOCALES:
        path = MESSAGES / f"{loc}.json"
        data = json.loads(path.read_text(encoding="utf-8"))
        block = data.get("phase3EqSelfDiagnosisTest")
        if not block:
            raise SystemExit(f"Missing phase3EqSelfDiagnosisTest in {path.name}")
        block["startMessage"] = START_MESSAGES[loc]
        block["ui"] = dict(zip(UI_KEYS, UI[loc], strict=True))
        block["shareMessages"] = _share(loc)
        block["alerts"] = dict(zip(ALERT_KEYS, ALERTS[loc], strict=True))
        block["recommendations"] = {"similarTestsTop5": "🎯 Top 5 Similar Tests", "popularTestsTop5": "🔥 Top 5 Trending Tests"}
        path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        print(f"Updated {path.name}")

if __name__ == "__main__":
    main()
