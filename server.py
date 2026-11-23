#!/usr/bin/env python3
"""Local static server with SPA history-API fallback.

Clicking in-app links works without a fallback because JavaScript changes
the URL. Refreshing /initiatives (or any other route) asks the server for
that path as a file. This handler serves real files when they exist, and
otherwise returns index.html so the client router can render the page.
"""

from __future__ import annotations

import argparse
import os
import sys
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import unquote, urlparse

ROOT = os.path.dirname(os.path.abspath(__file__))
ASSET_EXTENSIONS = {
    ".css", ".js", ".json", ".map", ".png", ".jpg", ".jpeg", ".gif", ".webp",
    ".svg", ".ico", ".woff", ".woff2", ".ttf", ".eot", ".mp4", ".webm",
    ".pdf", ".txt", ".xml", ".webp",
}


class SPAHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def do_GET(self):
        parsed = urlparse(self.path)
        relative = unquote(parsed.path).lstrip("/")
        disk_path = os.path.normpath(os.path.join(ROOT, relative))

        if os.path.commonpath([ROOT, disk_path]) != ROOT:
            self.send_error(403)
            return

        if os.path.isdir(disk_path):
            index_in_dir = os.path.join(disk_path, "index.html")
            if os.path.isfile(index_in_dir):
                return super().do_GET()

        if os.path.isfile(disk_path):
            return super().do_GET()

        _, ext = os.path.splitext(parsed.path)
        if ext.lower() in ASSET_EXTENSIONS:
            return super().do_GET()

        self.path = "/index.html"
        return super().do_GET()

    def log_message(self, format, *args):
        sys.stdout.write("%s - %s\n" % (self.address_string(), format % args))
        sys.stdout.flush()


def main():
    parser = argparse.ArgumentParser(description="VVK Foundation SPA preview server")
    parser.add_argument("port", nargs="?", type=int, default=3002)
    args = parser.parse_args()

    httpd = ThreadingHTTPServer(("127.0.0.1", args.port), SPAHandler)
    print(f"Serving {ROOT} at http://127.0.0.1:{args.port}")
    print("SPA fallback enabled — refresh on /initiatives, /news, /gallery will work.")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nStopped.")


if __name__ == "__main__":
    main()
