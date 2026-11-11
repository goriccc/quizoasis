# -*- coding: utf-8 -*-
"""Generate zh-TW.json from zh-CN.json via OpenCC s2tw."""
import json
from pathlib import Path
from opencc import OpenCC

src_path = Path(__file__).with_name("zh-CN.json")
src = json.loads(src_path.read_text(encoding="utf-8"))
cc = OpenCC("s2tw")


def conv(o):
    if isinstance(o, str):
        return cc.convert(o)
    if isinstance(o, list):
        return [conv(x) for x in o]
    if isinstance(o, dict):
        return {k: conv(v) for k, v in o.items()}
    return o


tw = conv(src)
Path(__file__).with_name("zh-TW.json").write_text(
    json.dumps(tw, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
)
print("zh-TW written")
