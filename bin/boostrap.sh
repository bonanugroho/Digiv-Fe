#!/usr/bin/env bash
set -ev

# Script for bootstrapping the monorepo into a working state for development.
#
# Runs the following tasks in order:
#   - Install dependencies
#   - Build `@digiv.fe/react-component-libs`


ROOT_DIR="$(cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && cd .. && pwd)"
cd $ROOT_DIR

printf 'Installing dependencies...\n'
yarn install
printf '\n'

printf 'Building `lib-react-components`...\n'
yarn workspace @digiv.fe/react-component-libs build
printf '\n'

echo 'Done!'
