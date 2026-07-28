# -*- coding: utf-8
"""Convert static @/lib/* data imports in test page to per-slug dynamic import()."""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PAGE = ROOT / "app" / "[locale]" / "test" / "[slug]" / "page.tsx"

MARKER = "// 동적 import로 JavaScript 번들 크기 최적화"

ESSENTIAL_HEADER = """import { getTestBySlug } from '@/lib/supabase';
import { SITE_URL } from '@/lib/siteUrl';
import { getTestData } from '@/lib/mbtiData';
import { getOgImageUrl, getThumbnailUrl } from '@/lib/utils';
import { getLatestTestSlugs } from '@/lib/latestTests';

"""

IMPORT_BLOCK_RE = re.compile(
    r"import\s+\{([^}]+)\}\s+from\s+'(@/lib/[^']+)';",
    re.MULTILINE,
)

SLUG_OPEN_RE = re.compile(
    r"^(\s*)(?:if\s*\(\s*(?:!\s*test\s*&&\s*)?slug\s*===\s*'([^']+)'\s*\)|"
    r"\}\s*else\s+if\s*\(\s*(?:!\s*test\s*&&\s*)?slug\s*===\s*'([^']+)'\s*\))\s*\{?\s*$"
)


def parse_lib_imports(header: str) -> tuple[dict[str, str], str]:
    export_to_module: dict[str, str] = {}
    for m in IMPORT_BLOCK_RE.finditer(header):
        module = m.group(2)
        if module in ("@/lib/supabase", "@/lib/siteUrl", "@/lib/utils", "@/lib/latestTests"):
            continue
        if module == "@/lib/mbtiData":
            continue
        names = [n.strip().split(" as ")[0].strip() for n in m.group(1).split(",") if n.strip()]
        for name in names:
            export_to_module[name] = module

    cleaned = IMPORT_BLOCK_RE.sub("", header)
    cleaned = re.sub(r"\n{3,}", "\n\n", cleaned)
    return export_to_module, cleaned


def find_slug_block_range(lines: list[str], start: int) -> tuple[int, int]:
    """Return [start, end) using brace depth from the opening if line."""
    depth = 0
    for i in range(start, len(lines)):
        line = lines[i]
        depth += line.count("{") - line.count("}")
        if i > start and depth <= 0:
            return start, i + 1
    return start, len(lines)


def symbols_in_text(text: str, export_names: set[str]) -> set[str]:
    found: set[str] = set()
    for name in export_names:
        if re.search(rf"\b{re.escape(name)}\b", text):
            found.add(name)
    return found


def import_lines_for_symbols(indent: str, symbols: set[str], export_to_module: dict[str, str]) -> list[str]:
    by_module: dict[str, list[str]] = {}
    for sym in sorted(symbols):
        mod = export_to_module.get(sym)
        if mod:
            by_module.setdefault(mod, []).append(sym)
    return [
        f"{indent}const {{ {', '.join(names)} }} = await import('{mod}');"
        for mod, names in sorted(by_module.items())
    ]


def main() -> None:
    content = PAGE.read_text(encoding="utf-8")
    marker_idx = content.find(MARKER)
    if marker_idx == -1:
        raise SystemExit(f"Marker not found: {MARKER}")

    header = content[:marker_idx]
    rest = content[marker_idx:]

    export_to_module, cleaned_header = parse_lib_imports(header)
    export_names = set(export_to_module.keys())
    print(f"Tracked {len(export_names)} exports from lib data imports")

    lines = rest.splitlines(keepends=True)
    out: list[str] = []
    i = 0
    injected_blocks = 0

    while i < len(lines):
        line = lines[i]
        m = SLUG_OPEN_RE.match(line.rstrip("\n"))
        if m and export_names:
            indent = m.group(1)
            start, end = find_slug_block_range(lines, i)
            block_text = "".join(lines[start:end])
            if "await import('@/lib/" not in block_text:
                used = symbols_in_text(block_text, export_names)
                if used:
                    out.append(line)
                    for imp in import_lines_for_symbols(indent + "  ", used, export_to_module):
                        out.append(imp + "\n")
                    injected_blocks += 1
                    i += 1
                    continue
        out.append(line)
        i += 1

    PAGE.write_text(cleaned_header + ESSENTIAL_HEADER + "".join(out), encoding="utf-8")
    print(f"Injected dynamic imports into {injected_blocks} slug blocks")
    print(f"Wrote {PAGE}")


if __name__ == "__main__":
    main()
