"""Translation data for phase3 love language analysis test (imported by build script)."""
from __future__ import annotations

import json
from pathlib import Path

LOCALES = ("ko", "en", "ja", "zh-CN", "zh-TW", "vi", "id")
_OPT_KEYS = ("A", "B", "C", "D")
_I18N_DIR = Path(__file__).resolve().parent


def M(**kwargs: str) -> dict[str, str]:
    return {loc: kwargs[loc] for loc in LOCALES}


def q(question: dict[str, str], options: list[tuple[dict[str, str], int]]) -> dict:
    return {"question": question, "options": options}


def r(type_: str, emoji: str, **fields: dict[str, str]) -> dict:
    return {"type": type_, "emoji": emoji, **fields}


EMPTY = M(ko="", en="", ja="", **{"zh-CN": "", "zh-TW": ""}, vi="", id="")


_gen_path = Path(__file__).resolve().parent / "gen_phase3_love_language_analysis_data.py"
_gen_ns: dict = {"__file__": str(_gen_path)}
exec(_gen_path.read_text(encoding="utf-8").split("\nHEADER =")[0], _gen_ns)
KO_QUESTIONS = _gen_ns["QUESTIONS"]
KO_RESULTS = _gen_ns["RESULTS"]


def _ko_q(idx: int) -> str:
    return KO_QUESTIONS[idx]["q"]


def _ko_o(idx: int, opt_idx: int) -> str:
    return KO_QUESTIONS[idx][_OPT_KEYS[opt_idx]]


def _strip_quotes(s: str) -> str:
    s = s.strip()
    return s[1:-1] if len(s) >= 2 and s[0] == '"' and s[-1] == '"' else s


def _ko_r(type_idx: int, field: str) -> str:
    key_map = {
        "title": "title_ko",
        "languageSummary": "language_summary",
        "quote": "quote",
        "description": "description",
        "languageType": "language_type",
        "loveKeywords": "love_keywords",
        "strengths": "strengths",
        "lovePattern": "love_pattern",
        "compatiblePartner": "compatible_partner",
        "hardMoment": "hard_moment",
        "expressLoveMethod": "express_love",
        "cautions": "cautions",
        "certificationPhrase": "certification",
        "oneLiner": "one_liner",
        "shareLine": "share_line",
    }
    if field not in key_map:
        raise KeyError(field)
    value = KO_RESULTS[type_idx + 1].get(key_map[field], "")
    return _strip_quotes(value) if field == "oneLiner" else value


def _ml(ko: str, en: str, ja: str, zh_cn: str, zh_tw: str, vi: str, id_: str) -> dict[str, str]:
    return M(ko=ko, en=en, ja=ja, **{"zh-CN": zh_cn, "zh-TW": zh_tw}, vi=vi, id=id_)


def _with_ko(ko: str, i18n: dict[str, str]) -> dict[str, str]:
    return _ml(ko, i18n["en"], i18n["ja"], i18n["zh-CN"], i18n["zh-TW"], i18n["vi"], i18n["id"])


def _load_questions_i18n() -> list[dict]:
    data = json.loads((_I18N_DIR / "_love_language_i18n_payload.json").read_text(encoding="utf-8"))
    return data["questions"]


def _load_results_i18n() -> list[dict[str, dict[str, str]]]:
    return json.loads((_I18N_DIR / "_love_language_i18n_results.json").read_text(encoding="utf-8"))


_Q_I18N = _load_questions_i18n()
_R_I18N = _load_results_i18n()

_TYPE_META = [("Type1", "🌿"), ("Type2", "💬"), ("Type3", "⏰"), ("Type4", "🤲"), ("Type5", "💗"), ("Type6", "🌟")]
_RESULT_FIELDS = [
    "title",
    "languageSummary",
    "quote",
    "description",
    "languageType",
    "loveKeywords",
    "strengths",
    "lovePattern",
    "compatiblePartner",
    "hardMoment",
    "expressLoveMethod",
    "cautions",
    "certificationPhrase",
    "oneLiner",
    "shareLine",
]


def _build_questions() -> list[dict]:
    out: list[dict] = []
    for qi, item in enumerate(_Q_I18N):
        question = _with_ko(_ko_q(qi), item["q"])
        options = [(_with_ko(_ko_o(qi, oi), opt), oi) for oi, opt in enumerate(item["opts"])]
        out.append(q(question, options))
    return out


def _field_ml(type_idx: int, field: str, i18n: dict[str, str] | None) -> dict[str, str]:
    ko = _ko_r(type_idx, field)
    if not ko:
        return EMPTY
    if not i18n:
        raise ValueError(f"Missing i18n for result field {field!r} on Type{type_idx + 1}")
    return _with_ko(ko, i18n)


def _build_results() -> list[dict]:
    out: list[dict] = []
    for ti, (type_name, emoji) in enumerate(_TYPE_META):
        i18n = _R_I18N[ti]
        fields = {field: _field_ml(ti, field, i18n.get(field)) for field in _RESULT_FIELDS}
        out.append(r(type_name, emoji, **fields))
    return out


QUESTIONS = _build_questions()
RESULTS = _build_results()
