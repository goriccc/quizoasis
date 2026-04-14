import re
import pathlib

ROOT = pathlib.Path(__file__).resolve().parents[1] / "components"
pat = re.compile(
    r'<p className="text-xs text-gray-500 text-center mb-3">\s*'
    r"\{t(?:Global)?\(['\"]footer\.disclaimer['\"]\)\}\s*</p>\s*\n?",
    re.MULTILINE,
)

for p in sorted(ROOT.glob("*TestClient.tsx")):
    t = p.read_text(encoding="utf-8")
    nt, c = pat.subn("", t)
    if c:
        p.write_text(nt, encoding="utf-8", newline="\n")
        print(p.name, c)
