#!/bin/bash
# SessionStart hook — provisions the build/preview toolchain for Claude Code on the web.
# Idempotent and non-interactive. Container state is cached after this completes.
set -euo pipefail

cd "${CLAUDE_PROJECT_DIR:-$(pwd)}"

# Node deps (Puppeteer pulls a cached Chromium; Prettier for formatting).
if [ -f package.json ]; then
  npm install --no-audit --no-fund
fi

# Python: PDF text extraction for reading briefs. The cryptography rust binding
# needs a working cffi backend in this image, so ensure it before pdfminer.
python3 -m pip install --quiet --upgrade cffi >/dev/null 2>&1 || true
python3 -m pip install --quiet pdfminer.six >/dev/null 2>&1 || true

echo "session-start: toolchain ready (puppeteer/prettier + pdfminer)."
