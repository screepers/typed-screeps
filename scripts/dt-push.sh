#!/usr/bin/env bash
# Build a ready-to-PR DefinitelyTyped branch from the current dist/ tree.
#
# Uses a local sparse clone of DefinitelyTyped (./DefinitelyTyped) so you
# do not need a full DT checkout. Pushing and opening the PR are left to the
# maintainer (DT may have its own PR template).
#
# Usage:
#   scripts/dt-push.sh
#   scripts/dt-push.sh --branch screeps-v3.5.0
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
# shellcheck source=dt-common.sh
source "$SCRIPT_DIR/dt-common.sh"

BRANCH=""
SKIP_BUILD=0

usage() {
  cat <<'EOF'
Usage: scripts/dt-push.sh [options]

Copy the current dist/ package into a branch on the local DefinitelyTyped clone
so it is ready to push/PR upstream. Does not push or open a PR.

Options:
  --branch <name>   Branch name (default: screeps-v<package.json version>)
  --skip-build      Do not run npm run build before copying
  -h, --help        Show this help

Environment:
  DT_CACHE_DIR      Override local DT clone path (default: ./DefinitelyTyped)
  DT_REMOTE_URL     Upstream DT clone URL
  DT_REF            Upstream branch to base on (default: master)
EOF
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    --branch)
      [[ $# -ge 2 ]] || die "--branch requires a value"
      BRANCH="$2"
      shift
      ;;
    --skip-build) SKIP_BUILD=1 ;;
    -h|--help) usage; exit 0 ;;
    *) die "unknown option: $1" ;;
  esac
  shift
done

cd "$ROOT"
require_clean_worktree

VERSION="$(package_version)"
if [[ -z "$BRANCH" ]]; then
  BRANCH="screeps-v${VERSION}"
fi

if [[ "$SKIP_BUILD" -eq 0 ]]; then
  info "Building dist/index.d.ts from src/..."
  npm run build
fi

[[ -f "$ROOT/dist/index.d.ts" ]] || die "dist/index.d.ts missing; run npm run build"
[[ -f "$ROOT/dist/package.json" ]] || die "dist/package.json missing"

ensure_dt_cache

info "Creating branch ${BRANCH} from origin/${DT_REF} in ${CACHE_DIR}"
git -C "$CACHE_DIR" checkout -q -B "$BRANCH" "origin/${DT_REF}"

TARGET="${CACHE_DIR}/${DT_PREFIX}"
mkdir -p "$TARGET"

# Mirror dist/ into types/screeps (package root in DT).
# Keep deletions so removed config/test files do not linger on the PR branch.
info "Syncing dist/ -> ${DT_PREFIX}/"
if command -v rsync >/dev/null 2>&1; then
  rsync -a --delete \
    --exclude '.DS_Store' \
    "${ROOT}/dist/" "${TARGET}/"
else
  rm -rf "${TARGET:?}/"*
  cp -R "${ROOT}/dist/." "${TARGET}/"
fi

# Ensure DT package version stays on the .9999 local form for the semver line.
TARGET_PKG="${TARGET}/package.json" VERSION="$VERSION" node <<'EOF'
const fs = require("fs");
const path = process.env.TARGET_PKG;
const version = process.env.VERSION;
const pkg = JSON.parse(fs.readFileSync(path, "utf8"));
const parts = version.split(".");
if (parts.length < 2) throw new Error("unexpected version: " + version);
pkg.version = parts[0] + "." + parts[1] + ".9999";
fs.writeFileSync(path, JSON.stringify(pkg, null, 4) + "\n");
EOF

git -C "$CACHE_DIR" add -- "$DT_PREFIX"

if git -C "$CACHE_DIR" diff --cached --quiet; then
  info "No changes versus DefinitelyTyped ${DT_REF}; branch ${BRANCH} is already up to date."
else
  git -C "$CACHE_DIR" commit -m "[screeps] Update to v${VERSION}"
  info "Committed on ${BRANCH} in local DT clone."
fi

info ""
info "Ready-to-PR branch: ${BRANCH}"
info "Local clone:        ${CACHE_DIR}"
info "Inspect with:       git -C ${CACHE_DIR} log -1 --stat"
info "Push this branch to your DefinitelyTyped fork and open the upstream PR yourself."
