"""Verify the Cinqic Calculator release links used on the website are live.

This is deliberately separate from verify_site.py: local site structure
should always be checkable offline, but these checks depend on GitHub being
reachable and should not block normal local development.
"""

import sys
import urllib.error
import urllib.request

RELEASE_URLS = [
    "https://github.com/Cinqic/Cinqic-Calculator/releases/latest/download/Cinqic-Calculator-Windows-x64-Setup.exe",
    "https://github.com/Cinqic/Cinqic-Calculator/releases/latest/download/Cinqic-Calculator-Windows-x64-Portable.zip",
    "https://github.com/Cinqic/Cinqic-Calculator/releases/latest/download/SHA256SUMS.txt",
    "https://github.com/Cinqic/Cinqic-Calculator/releases/latest",
    "https://github.com/Cinqic/Cinqic-Calculator",
]


def check_url(url: str) -> tuple[bool, str]:
    request = urllib.request.Request(url, method="HEAD", headers={"User-Agent": "cinqic-site-verify"})
    try:
        with urllib.request.urlopen(request, timeout=15) as response:
            return True, f"{response.status}"
    except urllib.error.HTTPError as exc:
        return False, f"HTTP {exc.code}"
    except urllib.error.URLError as exc:
        return False, str(exc.reason)


def main():
    failures = []
    for url in RELEASE_URLS:
        ok, detail = check_url(url)
        status = "OK" if ok else "FAIL"
        print(f"{status}  {detail:<20}  {url}")
        if not ok:
            failures.append(url)

    if failures:
        print(f"\n{len(failures)} release link(s) failed.", file=sys.stderr)
        return 1
    print("\nAll release links are reachable.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
