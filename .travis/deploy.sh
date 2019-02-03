#!/bin/bash
set -e

git config --global push.default simple
git remote add production ssh://web@85.143.223.101//home/web/www/td-deploybot/
git push production master
