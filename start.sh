#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"

HOST="${HOST:-127.0.0.1}"
PORT="${PORT:-5757}"

if ! command -v npm >/dev/null 2>&1; then
  echo "npm is required to run this website. Install Node.js first."
  exit 1
fi

if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm install
fi

echo "Starting abutalha.co.uk at http://${HOST}:${PORT}"
exec npm run dev -- --host "${HOST}" --port "${PORT}"
