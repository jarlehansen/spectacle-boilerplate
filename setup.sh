#! /bin/bash
rm -rf .git
npm install
projectName="${PWD##*/}"
sed -i '' -e "s/spectacle-boilerplate/$projectName/g" package.json
sed -i '' -e "s/spectacle-boilerplate/$projectName/g" src/index.tmpl.html
echo "# $projectName" > README.md
rm -- "$0"
