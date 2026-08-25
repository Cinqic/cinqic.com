"""Dependency-free verification for the static Cinqic site."""
from html.parser import HTMLParser
from pathlib import Path
import sys

ROOT=Path(__file__).resolve().parents[1]
PAGES=[ROOT/"index.html",ROOT/"juniper-auto/index.html",ROOT/"privacy/index.html",ROOT/"calculator/index.html",ROOT/"404.html"]
REQUIRED=[ROOT/"CNAME",ROOT/"robots.txt",ROOT/"sitemap.xml",ROOT/"site.webmanifest",ROOT/"assets/css/site.css",ROOT/"assets/js/company.js",ROOT/"assets/js/site.js",ROOT/"assets/img/juniper-auto-social.svg"]
class Links(HTMLParser):
 def __init__(self):super().__init__();self.links=[]
 def handle_starttag(self,tag,attrs):
  for key,value in attrs:
   if tag in {"a","link","script","img"} and key in {"href","src"} and value:self.links.append(value)
def fail(message):print("FAIL: "+message);return 1
def main():
 for path in PAGES+REQUIRED:
  if not path.is_file():return fail("missing "+str(path.relative_to(ROOT)))
 if (ROOT/"CNAME").read_text().strip()!="cinqic.com":return fail("CNAME must be cinqic.com")
 text_assets=[ROOT/"CNAME",ROOT/"robots.txt",ROOT/"sitemap.xml",ROOT/"site.webmanifest",ROOT/"assets/css/site.css",ROOT/"assets/js/company.js",ROOT/"assets/js/site.js"]
 public="\n".join(p.read_text(encoding="utf-8") for p in PAGES+text_assets)
 forbidden=["http:"+"//cinqic.com","Coming"+" soon","lorem"+" ipsum","Anthro"+"pic","Constitu"+"tional"+" AI","Juniper"+" Baby","Juniper 1 "+"20"+"M","20"+" million","19"+",863,936","Juniper Math 1","/juniper-math-1/","Cinqic/juniper-math-1","juniper-math-social.svg"]
 for term in forbidden:
  if term.lower() in public.lower():return fail("obsolete or insecure public text: "+term)
 if "Juniper Auto" not in public:return fail("missing Juniper Auto migration")
 if "150,031,360" not in public:return fail("missing verified total parameter target")
 if "79,252,480" not in public:return fail("missing verified active parameter target")
 if "October 1, 2026" not in public:return fail("missing planned launch date")
 if "https://github.com/Cinqic/Juniper-Auto" not in public:return fail("missing canonical Juniper Auto repository")
 for page in PAGES:
  text=page.read_text(encoding="utf-8")
  if "<title>" not in text or "<main" not in text:return fail("missing title or main: "+str(page.relative_to(ROOT)))
  if page.name!="404.html" and ("name=\"description\"" not in text or "rel=\"canonical\"" not in text):return fail("missing SEO metadata: "+str(page.relative_to(ROOT)))
  parser=Links();parser.feed(text)
  for link in parser.links:
   if link.startswith(("https://","mailto:","#")):continue
   path=link.split("#",1)[0]
   if not path or path=="/":continue
   target=ROOT/path.lstrip("/");target=target/"index.html" if path.endswith("/") else target
   if not target.is_file():return fail("broken internal link "+link)
 print("PASS: pages, assets, HTTPS canonicals, metadata, links, and obsolete-content guardrails.")
 return 0
if __name__=="__main__":sys.exit(main())
