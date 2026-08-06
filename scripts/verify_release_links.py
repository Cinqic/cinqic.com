"""Verify the Cinqic Calculator release links used on the website are live.

This is deliberately separate from verify_site.py: local site structure
should always be checkable offline, but these checks depend on GitHub being
reachable and should not block normal local development.
"""

import sys
import urllib.error
import urllib.request

WINDOWS_TAG = "v1.0.1"
ANDROID_TAG = "android-v1.0.0"

# Pinned to specific release tags, not /releases/latest/..., so publishing
# one platform's release can never break the other platform's download
# links (GitHub's "latest" always points at whichever tag was published
# most recently, regardless of which platform it's for).
RELEASE_URLS = [
    f"https://github.com/Cinqic/Cinqic-Calculator/releases/download/{WINDOWS_TAG}/Cinqic-Calculator-Windows-x64-Setup.exe",
    f"https://github.com/Cinqic/Cinqic-Calculator/releases/download/{WINDOWS_TAG}/Cinqic-Calculator-Windows-x64-Portable.zip",
    f"https://github.com/Cinqic/Cinqic-Calculator/releases/download/{WINDOWS_TAG}/SHA256SUMS.txt",
    f"https://github.com/Cinqic/Cinqic-Calculator/releases/tag/{WINDOWS_TAG}",
    "https://github.com/Cinqic/Cinqic-Calculator",
]

# Checked only if present in ANDROID_RELEASE_URLS at call time (see main());
# kept as a separate, optional list so this script still passes before the
# Android release exists.
ANDROID_RELEASE_URLS = [
    f"https://github.com/Cinqic/Cinqic-Calculator/releases/download/{ANDROID_TAG}/Cinqic-Calculator-Android.apk",
    f"https://github.com/Cinqic/Cinqic-Calculator/releases/download/{ANDROID_TAG}/SHA256SUMS-Android.txt",
    f"https://github.com/Cinqic/Cinqic-Calculator/releases/tag/{ANDROID_TAG}",
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
    urls = list(RELEASE_URLS)
    if "--include-android" in sys.argv:
        urls += ANDROID_RELEASE_URLS

    failures = []
    for url in urls:
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
