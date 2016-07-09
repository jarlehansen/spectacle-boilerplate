#! /bin/bash
rm -rf .git
npm install
projectName="${PWD##*/}"
sed -i '' -e "s/spectacle-boilerplate/$projectName/g" package.json
echo "# $projectName" > README.md
rm -- "$0"
