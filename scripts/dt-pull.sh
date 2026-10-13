#!/usr/bin/env bash
# Merge the current DefinitelyTyped types/screeps tree into dist/.
#
# Uses a 3-way merge against the last pulled DT snapshot (refs/dt/base) so
# DT-side tooling/config edits are preserved instead of being overwritten.
# Never commits: leaves dist/ changes in the worktree for the maintainer to
# port into src/ (when needed) and commit themselves.
#
# Usage:
#   scripts/dt-pull.sh
#   scripts/dt-pull.sh --reset-base   # set merge base to current DT; leave dist/ alone
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
# shellcheck source=dt-common.sh
source "$SCRIPT_DIR/dt-common.sh"

RESET_BASE=0

usage() {
  cat <<'EOF'
Usage: scripts/dt-pull.sh [options]

Fetch DefinitelyTyped and merge types/screeps into dist/ (3-way, subtree-style).
Does not create a git commit; review/port/commit the dist/ changes yourself.

Options:
  --reset-base   Point refs/dt/base at the current DT types/screeps tree without
                 changing dist/. Use once (or after a manual sync) to establish
                 the merge base.
  -h, --help     Show this help
EOF
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    --reset-base) RESET_BASE=1 ;;
    -h|--help) usage; exit 0 ;;
    *) die "unknown option: $1" ;;
  esac
  shift
done

cd "$ROOT"
require_clean_worktree
ensure_dt_cache
THEIRS_TREE="$(fetch_dt_tree)"
DT_SHORT="$(dt_master_short)"

set_base() {
  local tree="$1"
  local msg="$2"
  local new
  if git rev-parse -q --verify "$REF_DT_BASE" >/dev/null; then
    new="$(git commit-tree "$tree" -p "$REF_DT_BASE" -m "$msg")"
  else
    new="$(git commit-tree "$tree" -m "$msg")"
  fi
  git update-ref "$REF_DT_BASE" "$new"
  echo "$new"
}

if [[ "$RESET_BASE" -eq 1 ]]; then
  NEW_BASE="$(set_base "$THEIRS_TREE" "DT types/screeps at ${DT_SHORT} (reset-base)")"
  info "Reset $REF_DT_BASE -> $(git rev-parse --short "$NEW_BASE") (DT ${DT_SHORT})"
  info "dist/ left unchanged."
  exit 0
fi

if ! git rev-parse -q --verify "$REF_DT_BASE" >/dev/null; then
  NEW_BASE="$(set_base "$THEIRS_TREE" "DT types/screeps at ${DT_SHORT} (bootstrap)")"
  info "Bootstrapped $REF_DT_BASE -> $(git rev-parse --short "$NEW_BASE") at DT ${DT_SHORT}."
  info "dist/ left unchanged. Re-run after DT moves, or use --reset-base after a manual sync."
  exit 0
fi

BASE_COMMIT="$(git rev-parse "$REF_DT_BASE")"
BASE_TREE="$(git rev-parse "${BASE_COMMIT}^{tree}")"

if [[ "$BASE_TREE" == "$THEIRS_TREE" ]]; then
  info "Already up to date with DefinitelyTyped ${DT_SHORT}."
  exit 0
fi

OURS_TREE="$(git rev-parse HEAD:dist)"
OURS_COMMIT="$(git commit-tree "$OURS_TREE" -p "$BASE_COMMIT" -m "typed-screeps dist/ at $(git rev-parse --short HEAD)")"
THEIRS_COMMIT="$(git commit-tree "$THEIRS_TREE" -p "$BASE_COMMIT" -m "DT types/screeps at ${DT_SHORT}")"

set +e
MERGE_OUT="$(git merge-tree --write-tree "$OURS_COMMIT" "$THEIRS_COMMIT" 2>&1)"
MERGE_STATUS=$?
set -e

if [[ "$MERGE_STATUS" -ne 0 ]]; then
  cat >&2 <<EOF
error: conflict while merging DefinitelyTyped types/screeps@${DT_SHORT} into dist/.

${MERGE_OUT}

Resolve by inspecting DT at:
  ${CACHE_DIR}/${DT_PREFIX}
against local dist/, then either fix dist/ and --reset-base, or resolve files and
re-run. Tip: DT-only tooling edits usually land in package.json / tsconfig /
.eslintrc.json / .npmignore.
EOF
  exit 1
fi

MERGED_TREE="$(printf '%s\n' "$MERGE_OUT" | head -n1)"
if ! git cat-file -t "$MERGED_TREE" >/dev/null 2>&1; then
  die "merge-tree did not return a tree OID; output was:\n$MERGE_OUT"
fi

if [[ "$MERGED_TREE" == "$OURS_TREE" ]]; then
  set_base "$THEIRS_TREE" "DT types/screeps at ${DT_SHORT}" >/dev/null
  info "Merge produced no dist/ changes; advanced $REF_DT_BASE to DT ${DT_SHORT}."
  exit 0
fi

info "Applying merged tree to dist/ (worktree only; not committed)..."
# Replace tracked dist/ contents with the merged package tree.
if [[ -n "$(git ls-files -- dist)" ]]; then
  while IFS= read -r -d '' f; do
    git rm -q --cached -- "$f"
  done < <(git ls-files -z -- dist)
fi
rm -rf "${ROOT}/dist"
git read-tree --prefix=dist -u "$MERGED_TREE"
# Leave changes unstaged so the maintainer reviews a normal working-tree diff.
git reset -q HEAD -- dist

# Do not advance refs/dt/base yet: if the maintainer discards these changes,
# the next pull can redo the same merge. Base advances on a later pull once
# HEAD:dist already contains the merge (no further dist/ changes).

info "Merged DT ${DT_SHORT} into dist/. Review with git diff, port declaration"
info "fixes into src/ if needed, then commit. Re-run dt:pull after committing to"
info "advance the merge base."
