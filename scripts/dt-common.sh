#!/usr/bin/env bash
# Shared helpers for DefinitelyTyped <-> typed-screeps sync scripts.
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
CACHE_DIR="${DT_CACHE_DIR:-"$ROOT/DefinitelyTyped"}"
DT_REMOTE_URL="${DT_REMOTE_URL:-https://github.com/DefinitelyTyped/DefinitelyTyped.git}"
DT_REF="${DT_REF:-master}"
DT_PREFIX="types/screeps"

# Local ref: chain of imported DT types/screeps trees (merge base for pulls).
REF_DT_BASE="refs/dt/base"
# Plain file under .git: upstream DT commit SHA (object lives only in the clone).
DT_MASTER_FILE=""

die() {
  echo "error: $*" >&2
  exit 1
}

info() {
  echo "$*"
}

dt_master_file() {
  if [[ -z "$DT_MASTER_FILE" ]]; then
    DT_MASTER_FILE="$(git -C "$ROOT" rev-parse --git-dir)/dt/master"
  fi
  echo "$DT_MASTER_FILE"
}

require_clean_worktree() {
  # Only dist/ must be clean: these scripts merge/publish from dist/, while
  # unrelated edits (scripts, docs, package metadata) should not block sync.
  if ! git -C "$ROOT" diff --quiet -- dist/ || ! git -C "$ROOT" diff --cached --quiet -- dist/; then
    die "dist/ is dirty; commit/stash dist/ changes first so merges are reproducible"
  fi
}

ensure_dt_cache() {
  mkdir -p "$(dirname "$CACHE_DIR")"
  if [[ ! -d "$CACHE_DIR/.git" ]]; then
    info "Cloning DefinitelyTyped (sparse: $DT_PREFIX) into $CACHE_DIR"
    git clone --filter=blob:none --sparse "$DT_REMOTE_URL" "$CACHE_DIR"
    git -C "$CACHE_DIR" sparse-checkout set "$DT_PREFIX"
  fi

  # Keep the clone pointed at upstream DT.
  if ! git -C "$CACHE_DIR" remote get-url origin >/dev/null 2>&1; then
    git -C "$CACHE_DIR" remote add origin "$DT_REMOTE_URL"
  else
    git -C "$CACHE_DIR" remote set-url origin "$DT_REMOTE_URL"
  fi

  info "Fetching DefinitelyTyped $DT_REF..."
  # Do not pass --filter=blob:none here: GitHub's promisor path often fails on
  # re-fetch, and the sparse working tree already has the blobs we need.
  git -C "$CACHE_DIR" fetch --no-tags origin "$DT_REF"
  git -C "$CACHE_DIR" checkout -q -B "$DT_REF" "origin/$DT_REF"
}

# Import DT tip's types/screeps tree into typed-screeps object DB; print tree OID.
# Partial clones cannot be fetched wholesale into a normal repo (missing promisor
# objects), so path-limit a pack of the subtree only.
fetch_dt_tree() {
  local dt_sha tree_oid
  dt_sha="$(git -C "$CACHE_DIR" rev-parse "origin/${DT_REF}")"
  tree_oid="$(git -C "$CACHE_DIR" rev-parse "${dt_sha}:${DT_PREFIX}")"

  git -C "$CACHE_DIR" rev-list --objects "$tree_oid" \
    | awk '{print $1}' \
    | git -C "$CACHE_DIR" pack-objects --stdout \
    | git -C "$ROOT" unpack-objects -q

  mkdir -p "$(dirname "$(dt_master_file)")"
  printf '%s\n' "$dt_sha" >"$(dt_master_file)"

  echo "$tree_oid"
}

dt_master_short() {
  git -C "$CACHE_DIR" rev-parse --short "origin/${DT_REF}"
}

package_version() {
  node -p "require('${ROOT}/package.json').version"
}
