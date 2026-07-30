# -*- coding: utf-8 -*-
import zipfile
import xml.etree.ElementTree as ET
from pathlib import Path

out = Path(__file__).resolve().parent / "_competitiveness_dna_doc_extract.txt"
folder = Path(r"e:\수익형 사이트\심리테스트 컨텐츠_(3차)")

path = None
for f in folder.iterdir():
    if "경쟁" in f.name and f.suffix.lower() == ".docx":
        path = f
        break

lines: list[str] = []
if path is None:
    lines.append(f"No docx found in {folder}")
else:
    lines.append(f"SOURCE: {path.name}")
    with zipfile.ZipFile(path) as z:
        root = ET.fromstring(z.read("word/document.xml"))
    for p in root.iter("{http://schemas.openxmlformats.org/wordprocessingml/2006/main}p"):
        texts = [
            t.text
            for t in p.iter("{http://schemas.openxmlformats.org/wordprocessingml/2006/main}t")
            if t.text
        ]
        if texts:
            lines.append("".join(texts))

out.write_text("\n".join(lines), encoding="utf-8")
print(f"Wrote {len(lines)} lines to {out}")
