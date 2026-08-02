"""Dependency-free checks for the static Cinqic site."""
from __future__ import annotations

from html.parser import HTMLParser
from pathlib import Path
import re
import sys

ROOT = Path(__file__).resolve().parents[1]
PAGES = [ROOT / "index.html", ROOT / "juniper/index.html", ROOT / "independent-ai/index.html", ROOT / "about/index.html", ROOT / "privacy/index.html", ROOT / "terms/index.html", ROOT / "transparency/index.html", ROOT / "404.html"]
REQUIRED = [ROOT / "CNAME", ROOT / "robots.txt", ROOT / "sitemap.xml", ROOT / "site.webmanifest", ROOT / "assets/css/site.css", ROOT / "assets/js/company.js", ROOT / "assets/js/site.js"]

class Links(HTMLParser):
    def __init__(self): super().__init__(); self.hrefs=[]
    def handle_starttag(self, tag, attrs):
        if tag in {"a", "link", "script", "img"}:
            for key, value in attrs:
                if key in {"href", "src"} and value: self.hrefs.append(value)

def fail(message: str):
    print(f"FAIL: {message}"); return 1

def main() -> int:
    for path in PAGES + REQUIRED:
        if not path.is_file(): return fail(f"missing {path.relative_to(ROOT)}")
    if (ROOT / "CNAME").read_text(encoding="utf-8").strip() != "cinqic.com": return fail("CNAME must be cinqic.com")
    all_text = "\n".join(path.read_text(encoding="utf-8") for path in PAGES)
    banned = ["href=\"#\"", "Try now", "Download Juniper", "Founded August 27, 2026", "Google Fonts", "LAG", "Localized AI Generation", "Juniper-LAG"]
    for text in banned:
        if text in all_text: return fail(f"forbidden or inaccurate copy found: {text}")
    for page in PAGES:
        text = page.read_text(encoding="utf-8")
        if "<title>" not in text or "<main" not in text: return fail(f"missing title or main landmark: {page.relative_to(ROOT)}")
        if page.name != "404.html" and ("name=\"description\"" not in text or "rel=\"canonical\"" not in text): return fail(f"missing SEO metadata: {page.relative_to(ROOT)}")
        parser=Links(); parser.feed(text)
        for link in parser.hrefs:
            if link.startswith(("https://", "http://", "mailto:", "#")): continue
            target = ROOT / link.lstrip("/")
            if link.endswith("/"): target /= "index.html"
            if not target.is_file(): return fail(f"broken local asset/link {link} in {page.relative_to(ROOT)}")
    config = (ROOT / "assets/js/company.js").read_text(encoding="utf-8")
    if "publicLaunchDate:\"2026-08-27\"" not in config:
        return fail("central launch date missing")
    if "releaseReady" not in config or "launchState:\"pre-launch\"" not in config:
        return fail("safe central launch-state guard missing")
    print(f"PASS: checked {len(PAGES)} pages, {len(REQUIRED)} shared files, metadata, links, CNAME, release guardrails, and abandoned public terminology.")
    return 0

if __name__ == "__main__": sys.exit(main())
