#!/usr/bin/env bash
#
# release.sh — bump version + add a CHANGELOG entry in one step.
#
# Usage:
#   scripts/release.sh <version> "<changelog bullet>" ["<another bullet>" ...]
#
# Examples:
#   scripts/release.sh 0.6.0 "Add: full-text search in the viewer."
#   scripts/release.sh 0.5.2 "Fix: dropzone focus ring." "Change: tweak copy."
#
# What it does:
#   1. Updates "version" in package.json and src/lib/site.ts
#   2. Prepends a "## v<version>" section to CHANGELOG.md (English only)
#   3. Leaves everything staged-but-not-committed so you can review.
#      Add --commit to also create the commit.
#
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

COMMIT=0
ARGS=()
for a in "$@"; do
  if [ "$a" = "--commit" ]; then COMMIT=1; else ARGS+=("$a"); fi
done

if [ "${#ARGS[@]}" -lt 2 ]; then
  echo "Usage: scripts/release.sh <version> \"<changelog bullet>\" [more bullets...] [--commit]" >&2
  exit 1
fi

VERSION="${ARGS[0]}"
if ! echo "$VERSION" | grep -Eq '^[0-9]+\.[0-9]+\.[0-9]+$'; then
  echo "Error: version must be X.Y.Z (got '$VERSION')" >&2
  exit 1
fi
BULLETS=("${ARGS[@]:1}")

# 1) Bump version in package.json and src/lib/site.ts
perl -0pi -e "s/(\"version\":\\s*\")[0-9]+\\.[0-9]+\\.[0-9]+(\")/\${1}$VERSION\${2}/" package.json
perl -0pi -e "s/(version:\\s*\")[0-9]+\\.[0-9]+\\.[0-9]+(\")/\${1}$VERSION\${2}/" src/lib/site.ts

# 2) Build the CHANGELOG section
SECTION="## v$VERSION\n\n"
for b in "${BULLETS[@]}"; do
  SECTION="$SECTION- $b\n"
done

# Insert before the first existing "## v" heading
awk -v section="$SECTION" '
  !done && /^## v/ { printf section "\n"; done=1 }
  { print }
  END { if (!done) printf "\n" section }
' CHANGELOG.md > CHANGELOG.md.tmp && mv CHANGELOG.md.tmp CHANGELOG.md

echo "✓ version → $VERSION (package.json, src/lib/site.ts)"
echo "✓ CHANGELOG.md updated"
echo ""
echo "Top of CHANGELOG.md:"
grep -n "^## v" CHANGELOG.md | head -2

if [ "$COMMIT" = "1" ]; then
  git add package.json src/lib/site.ts CHANGELOG.md
  git commit -q -m "v$VERSION"
  echo ""
  echo "✓ committed as v$VERSION (run: git push)"
else
  echo ""
  echo "Review the changes, then: git add -A && git commit -m \"v$VERSION\" && git push"
fi
