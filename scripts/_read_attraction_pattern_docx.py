# -*- coding: utf-8 -*-
import zipfile
import xml.etree.ElementTree as ET
from pathlib import Path

out = Path(__file__).resolve().parent / "_attraction_pattern_doc_extract.txt"
path = Path(r"e:\수익형 사이트\심리테스트 컨텐츠_(3차)") / "나는 왜 늘 비슷한 사람에게 끌릴까.docx"

W = "{http://schemas.openxmlformats.org/wordprocessingml/2006/main}"
with zipfile.ZipFile(path) as z:
    root = ET.fromstring(z.read("word/document.xml"))
lines = []
for p in root.iter(f"{W}p"):
    texts = [t.text for t in p.iter(f"{W}t") if t.text]
    if texts:
        lines.append("".join(texts))

out.write_text("\n".join(lines), encoding="utf-8")
print(f"Wrote {len(lines)} lines to {out}")
