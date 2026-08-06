"""Build Phase3DesertIslandSurvivalKitTestClient from friendship balance template."""
from __future__ import annotations

from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
src = (ROOT / "components/Phase3FriendshipBalanceGameTestClient.tsx").read_text(encoding="utf-8")

replacements = [
    ("Phase3FriendshipBalanceGameTestClient", "Phase3DesertIslandSurvivalKitTestClient"),
    ("Phase3FriendshipBalanceGameTestClientProps", "Phase3DesertIslandSurvivalKitTestClientProps"),
    ("Phase3FriendshipBalanceGameQuestion", "Phase3DesertIslandSurvivalKitQuestion"),
    ("Phase3FriendshipBalanceGameResult", "Phase3DesertIslandSurvivalKitResult"),
    ("calculatePhase3FriendshipBalanceGameResult", "calculatePhase3DesertIslandSurvivalKitResult"),
    ("phase3FriendshipBalanceGameQuestions", "phase3DesertIslandSurvivalKitQuestions"),
    ("phase3FriendshipBalanceGameResults", "phase3DesertIslandSurvivalKitResults"),
    ("phase3FriendshipBalanceGameTest", "phase3DesertIslandSurvivalKitTest"),
    ("phase3-friendship-balance-game", "phase3-desert-island-survival-kit"),
    ("@/lib/phase3FriendshipBalanceGameData", "@/lib/phase3DesertIslandSurvivalKitData"),
    ("FRIENDSHIP_BALANCE_ROUND_STRIP", "DESERT_ISLAND_KIT_ROUND_STRIP"),
    ("stripFriendshipBalanceRoundPrefix", "stripDesertIslandKitRoundPrefix"),
    ("formatFriendshipBalanceRoundQuestionText", "formatDesertIslandKitQuestionText"),
    ("parseFriendshipBalanceDescription", "parseDesertIslandKitDescription"),
    ("displayRound1Based === 12 && originalQuestionId === 12", "displayRound1Based === 5 && originalQuestionId === 5"),
    ("라운드 ${displayRound1Based}. 최후의 라운드", "Q${displayRound1Based}. 마지막 선택"),
    ("Round ${displayRound1Based}. Final round", "Q${displayRound1Based}. Final choice"),
    ("ラウンド${displayRound1Based}。最終ラウンド", "Q${displayRound1Based}。最後の選択"),
    ("第${displayRound1Based}轮。最后一轮", "Q${displayRound1Based}。最后一选"),
    ("第${displayRound1Based}輪。最後一輪", "Q${displayRound1Based}。最後一選"),
    ("Vòng ${displayRound1Based}. Vòng cuối cùng", "Q${displayRound1Based}. Lựa chọn cuối"),
    ("Ronde ${displayRound1Based}. Ronde terakhir", "Q${displayRound1Based}. Pilihan terakhir"),
    ("라운드 ${displayRound1Based}.", "Q${displayRound1Based}."),
    ("Round ${displayRound1Based}.", "Q${displayRound1Based}."),
    ("ラウンド${displayRound1Based}。", "Q${displayRound1Based}。"),
    ("第${displayRound1Based}轮。", "Q${displayRound1Based}。"),
    ("第${displayRound1Based}輪。", "Q${displayRound1Based}。"),
    ("Vòng ${displayRound1Based}.", "Q${displayRound1Based}."),
    ("Ronde ${displayRound1Based}.", "Q${displayRound1Based}."),
    ("from-rose-50 via-orange-50 to-violet-50", "from-cyan-50 via-amber-50 to-orange-50"),
    ("border-rose-100", "border-cyan-100"),
    ("text-rose-600", "text-teal-600"),
    ("from-rose-100 to-violet-100 text-rose-800", "from-cyan-100 to-amber-100 text-teal-800"),
    ("from-rose-500 to-violet-500", "from-teal-500 to-orange-500"),
    ("hover:from-rose-600 hover:to-violet-600", "hover:from-teal-600 hover:to-orange-600"),
    ("from-rose-100 to-violet-100", "from-cyan-100 to-amber-100"),
    ("text-rose-800", "text-teal-800"),
    ("t('ui.friendshipStyleType')", "t('ui.survivalStyleType')"),
    ("t('ui.friendshipKeywords')", "t('ui.survivalStrategy')"),
    ("t('ui.friendSays')", "t('ui.islandSays')"),
    ("t('ui.friendshipCautions')", "t('ui.survivalExtra')"),
    ("우정 극한 밸런스 결과", "무인도 생존 키트 결과"),
    ("📊", "🏝️"),
    ("⭐", "🧭"),
    ("💖", "💬"),
    ("⚠️", "📋"),
]

text = src
for old, new in replacements:
    text = text.replace(old, new)

# Round strip patterns -> Q prefix (unused when questions have no prefix in data)
text = text.replace(
    "DESERT_ISLAND_KIT_ROUND_STRIP: Record<string, RegExp[]> = {\n  ko: [/^라운드\\s*10\\s*\\.\\s*최후의 라운드\\.\\s*/, /^라운드\\s*\\d+\\s*\\.\\s*/]",
    "DESERT_ISLAND_KIT_ROUND_STRIP: Record<string, RegExp[]> = {\n  ko: [/^Q\\s*5\\s*\\.\\s*마지막\\s*선택\\.\\s*/i, /^Q\\s*\\d+\\s*\\.\\s*/i]",
)

out = ROOT / "components/Phase3DesertIslandSurvivalKitTestClient.tsx"
out.write_text(text, encoding="utf-8")
print(f"Wrote {out} ({len(text)} bytes)")
