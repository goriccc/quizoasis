"""Fill phase3GritIndexTest.startMessage for all non-Korean locales."""
from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MESSAGES = ROOT / "messages"

START_MESSAGES: dict[str, dict[str, str]] = {
    "en": {
        "line1": "What successful people have in common isn't talent.",
        "line2": "Psychologist Angela Duckworth studied who succeeds across diverse settings—from West Point to spelling bees to businesses. Her conclusion was clear: it wasn't the most talented who made it to the end, but those with the highest grit.",
        "line3": "Grit has two parts: passion—the ability to stay focused on one thing for years—and perseverance—the ability to keep going when things get hard. Together, they create a force that can beat talent.",
        "line4": "12 questions measure your grit index and type. You'll also see which side is stronger and which needs work.",
        "line5": "Measure My Grit Index 💪 Start Honestly",
        "note": "※ Choose the answer closest to how you actually are right now—not who you wish you were.",
    },
    "ja": {
        "line1": "成功者に共通していたのは、才能ではありませんでした。",
        "line2": "心理学者アンジェラ・ダックワースは、ウェストポイント士官学校、全国スペル大会、企業などさまざまな環境で誰が成功するのかを研究しました。結論は一つ。才能が優れた人ではなく、グリット（Grit）が高い人が最後まで残ったのです。",
        "line3": "グリットは2つの要素から成り立ちます。長期間一つのことに集中する情熱（Passion）と、困難でも止まらない粘り強さ（Perseverance）。この2つが合わさったとき、才能を凌駕する力が生まれます。",
        "line4": "12の質問であなたのグリット指数とタイプを測定します。どちらが強く、どちらが弱いかも一緒に分かります。",
        "line5": "自分のグリット指数を測る 💪 正直に始める",
        "note": "※ 今の自分に最も近いものを選んでください。理想の姿ではなく、実際の自分を基準に答えてください。",
    },
    "zh-CN": {
        "line1": "成功者的共同点不是天赋。",
        "line2": "心理学家Angela Duckworth在西点军校、全国拼字大赛、企业等多种环境中研究谁更容易成功。结论只有一个：走到最后的不是最有天赋的人，而是坚毅力（Grit）最高的人。",
        "line3": "坚毅力由两部分组成：长期专注一件事的热情（Passion），和遇到困难也不停止的毅力（Perseverance）。当这两者结合时，便产生了超越天赋的力量。",
        "line4": "通过12个问题测量你的坚毅指数和类型，同时也会显示哪一方面更强、哪一方面较弱。",
        "line5": "测量我的坚毅指数 💪 诚实地开始",
        "note": "※ 请选择最接近你当前状态的一项。请以真实的你为准作答，而不是理想中的你。",
    },
    "zh-TW": {
        "line1": "成功者的共同點不是天賦。",
        "line2": "心理學家Angela Duckworth在西點軍校、全國拼字大賽、企業等多種環境中研究誰更容易成功。結論只有一個：走到最後的不是最有天賦的人，而是堅毅力（Grit）最高的人。",
        "line3": "堅毅力由兩部分組成：長期專注一件事的熱情（Passion），和遇到困難也不停止的毅力（Perseverance）。當這兩者結合時，便產生了超越天賦的力量。",
        "line4": "透過12個問題測量你的堅毅指數和類型，同時也會顯示哪一方面更強、哪一方面較弱。",
        "line5": "測量我的堅毅指數 💪 誠實地開始",
        "note": "※ 請選擇最接近你目前狀態的一項。請以真實的你為準作答，而不是理想中的你。",
    },
    "vi": {
        "line1": "Điểm chung của những người thành công không phải là tài năng.",
        "line2": "Nhà tâm lý học Angela Duckworth đã nghiên cứu ai thành công trong nhiều môi trường khác nhau—từ West Point, cuộc thi đánh vần quốc gia đến doanh nghiệp. Kết luận chỉ có một: không phải người tài năng nhất mà là người có grit cao nhất đã đi đến cuối cùng.",
        "line3": "Grit gồm hai phần: đam mê (Passion)—khả năng tập trung vào một điều trong thời gian dài, và sự kiên trì (Perseverance)—khả năng không dừng lại khi gặp khó khăn. Khi kết hợp, chúng tạo ra sức mạnh vượt qua tài năng.",
        "line4": "12 câu hỏi đo chỉ số grit và loại hình của bạn. Bạn cũng sẽ thấy bên nào mạnh hơn và bên nào cần cải thiện.",
        "line5": "Đo Chỉ Số Grit Của Tôi 💪 Bắt Đầu Thành Thật",
        "note": "※ Hãy chọn đáp án gần với bản thân thực sự của bạn nhất. Hãy trả lời dựa trên con người thật, không phải hình ảnh lý tưởng.",
    },
    "id": {
        "line1": "Kesamaan orang sukses bukan bakat.",
        "line2": "Psikolog Angela Duckworth meneliti siapa yang sukses di berbagai lingkungan—dari West Point, spelling bee nasional, hingga perusahaan. Kesimpulannya satu: bukan yang paling berbakat yang bertahan sampai akhir, melainkan yang grit-nya tertinggi.",
        "line3": "Grit terdiri dari dua bagian: passion—kemampuan fokus pada satu hal dalam jangka panjang, dan perseverance—kemampuan terus maju saat sulit. Keduanya bersama menciptakan kekuatan yang mengalahkan bakat.",
        "line4": "12 pertanyaan mengukur indeks grit dan tipenya. Kamu juga akan melihat sisi mana yang lebih kuat dan mana yang perlu diperbaiki.",
        "line5": "Ukur Indeks Grit-ku 💪 Mulai dengan Jujur",
        "note": "※ Pilih jawaban yang paling dekat dengan dirimu saat ini. Jawab berdasarkan dirimu yang sebenarnya, bukan versi ideal.",
    },
}

UI_START_TEST: dict[str, str] = {
    "en": "Start the Grit Index Test 💪 Be honest",
    "ja": "グリット指数テストを始める 💪 正直に答える",
    "zh-CN": "开始坚毅指数测试 💪 诚实地作答",
    "zh-TW": "開始堅毅指數測試 💪 誠實地作答",
    "vi": "Bắt đầu bài test Grit 💪 Trả lời thành thật",
    "id": "Mulai Tes Indeks Grit 💪 Jawab dengan jujur",
}


def main() -> None:
    for loc, start_msg in START_MESSAGES.items():
        path = MESSAGES / f"{loc}.json"
        data = json.loads(path.read_text(encoding="utf-8"))
        block = data.get("phase3GritIndexTest")
        if not block:
            raise SystemExit(f"Missing phase3GritIndexTest in {path.name}")
        block["startMessage"] = start_msg
        block["ui"]["startTest"] = UI_START_TEST[loc]
        path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        print(f"Updated {path.name}")


if __name__ == "__main__":
    main()
