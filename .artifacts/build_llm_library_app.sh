#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
APP_SRC="$REPO_ROOT/.artifacts/llm-library-app"
TMP_DIR="$(mktemp -d)"

cleanup() {
  rm -rf "$TMP_DIR"
}

trap cleanup EXIT

python3 "$REPO_ROOT/.artifacts/generate_llm_library_data.py"

mkdir -p "$TMP_DIR/app"
(cd "$APP_SRC" && tar --exclude=node_modules --exclude=dist -cf - .) | (cd "$TMP_DIR/app" && tar -xf -)

cd "$TMP_DIR/app"
pnpm install --frozen-lockfile=false
pnpm build

mkdir -p "$REPO_ROOT/assets/llm-library"
cp dist/llm-library.js "$REPO_ROOT/assets/llm-library/llm-library.js"

if [ -f dist/llm-library.css ]; then
  cp dist/llm-library.css "$REPO_ROOT/assets/llm-library/llm-library.css"
fi

echo "Built llm-library assets into $REPO_ROOT/assets/llm-library"
