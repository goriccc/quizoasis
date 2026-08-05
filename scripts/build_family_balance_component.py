"""Build Phase3FamilyBalanceGameTestClient from office balance template."""
from __future__ import annotations

from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
src = (ROOT / "components/Phase3OfficeBalanceGameTestClient.tsx").read_text(encoding="utf-8")

replacements = [
    ("Phase3OfficeBalanceGameTestClient", "Phase3FamilyBalanceGameTestClient"),
    ("Phase3OfficeBalanceGameTestClientProps", "Phase3FamilyBalanceGameTestClientProps"),
    ("Phase3OfficeBalanceGameQuestion", "Phase3FamilyBalanceGameQuestion"),
    ("Phase3OfficeBalanceGameResult", "Phase3FamilyBalanceGameResult"),
    ("calculatePhase3OfficeBalanceGameResult", "calculatePhase3FamilyBalanceGameResult"),
    ("phase3OfficeBalanceGameQuestions", "phase3FamilyBalanceGameQuestions"),
    ("phase3OfficeBalanceGameResults", "phase3FamilyBalanceGameResults"),
    ("phase3OfficeBalanceGameTest", "phase3FamilyBalanceGameTest"),
    ("phase3-office-balance-game", "phase3-family-balance-game"),
    ("@/lib/phase3OfficeBalanceGameData", "@/lib/phase3FamilyBalanceGameData"),
    ("OFFICE_BALANCE_ROUND_STRIP", "FAMILY_BALANCE_ROUND_STRIP"),
    ("stripOfficeBalanceRoundPrefix", "stripFamilyBalanceRoundPrefix"),
    ("formatOfficeBalanceRoundQuestionText", "formatFamilyBalanceRoundQuestionText"),
    ("renderOfficeBalanceResultDescription", "renderFamilyBalanceResultDescription"),
    ("phase3OfficeBalanceGameTest", "phase3FamilyBalanceGameTest"),
    ("displayRound1Based === 10 && originalQuestionId === 10", "displayRound1Based === 12 && originalQuestionId === 12"),
    ("라운드 10. 최후의 라운드", "라운드 12. 최후의 라운드"),
    ("Round 10. Final round", "Round 12. Final round"),
    ("ラウンド10。最終ラウンド", "ラウンド12。最終ラウンド"),
    ("第10轮。最后一轮", "第12轮。最后一轮"),
    ("第10輪。最後一輪", "第12輪。最後一輪"),
    ("Vòng 10. Vòng cuối cùng", "Vòng 12. Vòng cuối cùng"),
    ("Ronde 10. Ronde terakhir", "Ronde 12. Ronde terakhir"),
    ("from-purple-50 via-pink-50 to-blue-50", "from-orange-50 via-amber-50 to-rose-50"),
    ("border-purple-100", "border-orange-100"),
    ("text-purple-600", "text-orange-600"),
    ("from-purple-100 to-pink-100 text-purple-800", "from-orange-100 to-amber-100 text-orange-800"),
    ("from-purple-600 to-pink-600", "from-orange-500 to-rose-500"),
    ("hover:from-purple-700 hover:to-pink-700", "hover:from-orange-600 hover:to-rose-600"),
    ("t('ui.empathyLevel')", "t('ui.familyStyleType')"),
    ("t('ui.characteristics')", "t('ui.familyKeywords')"),
    ("t('ui.goodMatch')", "t('ui.familySays')"),
    ("t('ui.badMatch')", "t('ui.familyCautions')"),
    ("직장 밸런스 게임 결과", "가족 극한 밸런스 결과"),
]

text = src
for old, new in replacements:
    text = text.replace(old, new)

cert_block = """
    const resultCertification =
      result.certificationPhrase[locale as keyof typeof result.certificationPhrase] || result.certificationPhrase.ko;
    const isType6 = result.type === 'Type6';
"""

text = text.replace(
    "    const resultBadMatch = result.badMatch[locale as keyof typeof result.badMatch] || result.badMatch.ko;\n\n    return (",
    "    const resultBadMatch = result.badMatch[locale as keyof typeof result.badMatch] || result.badMatch.ko;\n"
    + cert_block
    + "\n    return (",
)

cert_ui = """
            {isType6 && resultCertification && (
              <div className="bg-gradient-to-r from-orange-100 to-rose-100 rounded-xl shadow-lg p-4 mb-3">
                <h3 className="text-base font-bold text-gray-800 mb-2 text-left">
                  🏆 {t('ui.certificationPhrase')}
                </h3>
                <p className="text-sm font-semibold text-orange-800 leading-relaxed text-center">
                  {resultCertification}
                </p>
              </div>
            )}

            <div className="mt-8 mb-6 px-4">
"""

text = text.replace(
    '            <div className="mt-8 mb-6 px-4">\n              <button\n                onClick={handleShareResult}',
    cert_ui + '              <button\n                onClick={handleShareResult}',
)

# Hide badMatch section when empty
text = text.replace(
    '              <div className="bg-white rounded-xl shadow-lg p-4">\n                <h3 className="text-base font-bold text-gray-800 mb-3">\n                  💔 {t(\'ui.familyCautions\')}',
    '{resultBadMatch && (\n              <div className="bg-white rounded-xl shadow-lg p-4">\n                <h3 className="text-base font-bold text-gray-800 mb-3">\n                  ⚠️ {t(\'ui.familyCautions\')}',
)
text = text.replace(
    "                </div>\n              </div>\n            </div>\n\n            <div className=\"mt-8 mb-6 px-4\">",
    "                </div>\n              </div>\n            )}\n            </div>\n\n            <div className=\"mt-8 mb-6 px-4\">",
    1,
)

out = ROOT / "components/Phase3FamilyBalanceGameTestClient.tsx"
out.write_text(text, encoding="utf-8")
print(f"Wrote {out} ({len(text)} bytes)")
