#!/bin/bash
# 웹앱 파일을 iOS 프로젝트용 web/ 폴더로 복사합니다.
# index.html이나 data.js를 고친 뒤 이 스크립트를 실행하고 Xcode에서 다시 Run.
cd "$(dirname "$0")"
mkdir -p web
cp ../index.html ../data.js web/
echo "✅ ios/web/ 에 복사 완료:"
ls -la web/
