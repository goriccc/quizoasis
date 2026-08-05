"""Fill phase3FamilyBalanceGameTest messages for all non-Korean locales."""
from __future__ import annotations

import importlib.util
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MESSAGES = ROOT / "messages"
I18N_PATH = ROOT / "scripts" / "phase3_family_balance_game_i18n_data.py"
KEY = "phase3FamilyBalanceGameTest"

spec = importlib.util.spec_from_file_location("phase3_family_balance_game_i18n_data", I18N_PATH)
mod = importlib.util.module_from_spec(spec)
assert spec.loader is not None
spec.loader.exec_module(mod)

START_MESSAGES = mod.START_MESSAGES
UI_TRANSLATIONS = mod.UI_TRANSLATIONS
SHARE_MESSAGES = mod.SHARE_MESSAGES
ALERTS = {
    "en": {
        "linkCopied": "Link copied!",
        "resultCopied": "Result copied to clipboard!",
        "shareFailed": "Sharing is not available.",
        "wechatCopy": "Link copied! Paste it in WeChat to share.",
        "kakaoInit": "Initializing KakaoTalk sharing. Please try again shortly.",
        "kakaoError": "An error occurred while sharing to KakaoTalk.",
    },
    "ja": {
        "linkCopied": "リンクをコピーしました！",
        "resultCopied": "結果をクリップボードにコピーしました！",
        "shareFailed": "共有機能を使用できません。",
        "wechatCopy": "リンクをコピーしました！WeChatで貼り付けて共有してください。",
        "kakaoInit": "カカオトーク共有機能を初期化しています。しばらくしてからもう一度お試しください。",
        "kakaoError": "カカオトーク共有中にエラーが発生しました。",
    },
    "zh-CN": {
        "linkCopied": "链接已复制！",
        "resultCopied": "结果已复制到剪贴板！",
        "shareFailed": "无法使用分享功能。",
        "wechatCopy": "链接已复制！请在微信中粘贴分享。",
        "kakaoInit": "正在初始化KakaoTalk分享功能，请稍后再试。",
        "kakaoError": "KakaoTalk分享时发生错误。",
    },
    "zh-TW": {
        "linkCopied": "連結已複製！",
        "resultCopied": "結果已複製到剪貼簿！",
        "shareFailed": "無法使用分享功能。",
        "wechatCopy": "連結已複製！請在微信中貼上分享。",
        "kakaoInit": "正在初始化KakaoTalk分享功能，請稍後再試。",
        "kakaoError": "KakaoTalk分享時發生錯誤。",
    },
    "vi": {
        "linkCopied": "Đã sao chép liên kết!",
        "resultCopied": "Đã sao chép kết quả vào clipboard!",
        "shareFailed": "Không thể sử dụng tính năng chia sẻ.",
        "wechatCopy": "Đã sao chép liên kết! Dán vào WeChat để chia sẻ.",
        "kakaoInit": "Đang khởi tạo chia sẻ KakaoTalk. Vui lòng thử lại sau.",
        "kakaoError": "Đã xảy ra lỗi khi chia sẻ lên KakaoTalk.",
    },
    "id": {
        "linkCopied": "Tautan disalin!",
        "resultCopied": "Hasil disalin ke clipboard!",
        "shareFailed": "Fitur berbagi tidak tersedia.",
        "wechatCopy": "Tautan disalin! Tempel di WeChat untuk berbagi.",
        "kakaoInit": "Menginisialisasi berbagi KakaoTalk. Coba lagi sebentar lagi.",
        "kakaoError": "Terjadi kesalahan saat berbagi ke KakaoTalk.",
    },
}

RECOMMENDATIONS = {
    "en": {
        "similarTestsTop5": "🎯 Top 5 Similar Tests",
        "popularTestsTop5": "🔥 Top 5 Trending Tests",
    },
    "ja": {
        "similarTestsTop5": "🎯 おすすめ類似テスト TOP5",
        "popularTestsTop5": "🔥 今人気のテスト TOP5",
    },
    "zh-CN": {
        "similarTestsTop5": "🎯 相似测试推荐 TOP5",
        "popularTestsTop5": "🔥 热门测试 TOP5",
    },
    "zh-TW": {
        "similarTestsTop5": "🎯 相似測驗推薦 TOP5",
        "popularTestsTop5": "🔥 熱門測驗 TOP5",
    },
    "vi": {
        "similarTestsTop5": "🎯 Top 5 bài test tương tự",
        "popularTestsTop5": "🔥 Top 5 bài test đang hot",
    },
    "id": {
        "similarTestsTop5": "🎯 Top 5 Tes Serupa",
        "popularTestsTop5": "🔥 Top 5 Tes Populer",
    },
}


def main() -> None:
    for loc in ("en", "ja", "zh-CN", "zh-TW", "vi", "id"):
        path = MESSAGES / f"{loc}.json"
        data = json.loads(path.read_text(encoding="utf-8"))
        block = data.get(KEY)
        if not block:
            raise SystemExit(f"Missing {KEY} in {path.name}")

        block["startMessage"] = START_MESSAGES[loc]
        block["ui"] = UI_TRANSLATIONS[loc]
        block["shareMessages"] = SHARE_MESSAGES[loc]
        block["alerts"] = ALERTS[loc]
        block["recommendations"] = RECOMMENDATIONS[loc]

        path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        print(f"updated {loc}")


if __name__ == "__main__":
    main()
