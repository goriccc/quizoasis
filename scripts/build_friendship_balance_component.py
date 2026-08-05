"""Build Phase3FriendshipBalanceGameTestClient from family balance template."""
from __future__ import annotations

from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
src = (ROOT / "components/Phase3FamilyBalanceGameTestClient.tsx").read_text(encoding="utf-8")

replacements = [
    ("Phase3FamilyBalanceGameTestClient", "Phase3FriendshipBalanceGameTestClient"),
    ("Phase3FamilyBalanceGameTestClientProps", "Phase3FriendshipBalanceGameTestClientProps"),
    ("Phase3FamilyBalanceGameQuestion", "Phase3FriendshipBalanceGameQuestion"),
    ("Phase3FamilyBalanceGameResult", "Phase3FriendshipBalanceGameResult"),
    ("calculatePhase3FamilyBalanceGameResult", "calculatePhase3FriendshipBalanceGameResult"),
    ("phase3FamilyBalanceGameQuestions", "phase3FriendshipBalanceGameQuestions"),
    ("phase3FamilyBalanceGameResults", "phase3FriendshipBalanceGameResults"),
    ("phase3FamilyBalanceGameTest", "phase3FriendshipBalanceGameTest"),
    ("phase3-family-balance-game", "phase3-friendship-balance-game"),
    ("@/lib/phase3FamilyBalanceGameData", "@/lib/phase3FriendshipBalanceGameData"),
    ("FAMILY_BALANCE_ROUND_STRIP", "FRIENDSHIP_BALANCE_ROUND_STRIP"),
    ("stripFamilyBalanceRoundPrefix", "stripFriendshipBalanceRoundPrefix"),
    ("formatFamilyBalanceRoundQuestionText", "formatFriendshipBalanceRoundQuestionText"),
    ("parseFamilyBalanceDescription", "parseFriendshipBalanceDescription"),
    ("renderFamilyBalanceResultDescription", "renderFriendshipBalanceResultDescription"),
    ("from-orange-50 via-amber-50 to-rose-50", "from-rose-50 via-orange-50 to-violet-50"),
    ("border-orange-100", "border-rose-100"),
    ("text-orange-600", "text-rose-600"),
    ("from-orange-100 to-amber-100 text-orange-800", "from-rose-100 to-violet-100 text-rose-800"),
    ("from-orange-500 to-rose-500", "from-rose-500 to-violet-500"),
    ("hover:from-orange-600 hover:to-rose-600", "hover:from-rose-600 hover:to-violet-600"),
    ("from-orange-100 to-rose-100", "from-rose-100 to-violet-100"),
    ("text-orange-800", "text-rose-800"),
    ("from-blue-500 to-cyan-500", "from-rose-500 to-violet-500"),
    ("hover:from-blue-600 hover:to-cyan-600", "hover:from-rose-600 hover:to-violet-600"),
    ("t('ui.familyStyleType')", "t('ui.friendshipStyleType')"),
    ("t('ui.familyKeywords')", "t('ui.friendshipKeywords')"),
    ("t('ui.familySays')", "t('ui.friendSays')"),
    ("t('ui.familyCautions')", "t('ui.friendshipCautions')"),
    ("가족 극한 밸런스 결과", "우정 극한 밸런스 결과"),
]

text = src
for old, new in replacements:
    text = text.replace(old, new)

out = ROOT / "components/Phase3FriendshipBalanceGameTestClient.tsx"
out.write_text(text, encoding="utf-8")
print(f"Wrote {out} ({len(text)} bytes)")
