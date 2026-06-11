# 아이폰에 직접 설치하기 (앱스토어 X, 서버 X)

무료 Apple ID만으로 내 아이폰에 설치하는 방법입니다.
웹앱 파일이 앱 안에 내장되므로 인터넷·서버가 전혀 필요 없습니다.

## 1회 준비 (처음 한 번만)

1. **Xcode 설치**: Mac App Store에서 "Xcode" 검색 → 설치 (무료, 용량 큼)
2. **아이폰 개발자 모드**: 아이폰에서 설정 → 개인정보 보호 및 보안 →
   개발자 모드 → 켬 (재부팅 필요). 이 메뉴는 아이폰을 Mac에 한 번
   연결한 뒤에 나타날 수 있습니다.

## 프로젝트 만들기 (5분)

1. Xcode 실행 → **Create New Project** → iOS → **App** 선택
   - Product Name: `UrbanWalk` (아무거나)
   - Interface: **SwiftUI**, Language: **Swift**
   - Team: 본인 Apple ID 선택 (Xcode → Settings → Accounts에서 추가)
2. 템플릿이 만든 `UrbanWalkApp.swift`와 `ContentView.swift`를 **삭제**하고,
   이 폴더의 **`UrbanApp.swift`** 를 프로젝트에 드래그해서 추가
   ("Copy items if needed" 체크)
3. 이 폴더의 **`web` 폴더**를 프로젝트 네비게이터에 드래그
   - 대화상자에서 **"Create folder references"** 선택 (파란 폴더 아이콘이어야 함!)
   - 노란 그룹(Create groups)으로 추가하면 경로를 못 찾으니 주의
4. 프로젝트 설정 → Signing & Capabilities →
   "Automatically manage signing" 체크 + Team 선택
5. (선택) 프로젝트 루트의 `icon-512.png`를 Assets → AppIcon에 드래그하면
   홈 화면 아이콘도 크레파스 아이콘이 됩니다

## 설치

1. 아이폰을 케이블로 연결 (또는 같은 와이파이 + 무선 페어링)
2. Xcode 상단 기기 목록에서 내 아이폰 선택 → **▶ Run**
3. 처음엔 아이폰에서 "신뢰하지 않는 개발자" 경고가 뜹니다:
   설정 → 일반 → VPN 및 기기 관리 → 내 Apple ID → 신뢰

## 알아둘 것

- **7일 규칙**: 무료 계정은 앱 서명이 7일 뒤 만료되어 실행이 안 됩니다.
  Mac에 연결해 ▶ Run 한 번이면 갱신됩니다. **리뷰·사진 데이터는
  지워지지 않고 그대로 유지**됩니다 (재서명이지 재설치가 아님).
  유료 개발자 계정($99/년)은 1년짜리 서명.
- **웹앱을 고친 경우**: 터미널에서 `ios/sync-web.sh` 실행 →
  Xcode에서 다시 Run (web 폴더가 파란 폴더 참조라 자동 반영됨)
- **사진 첨부**: 리뷰의 📷 버튼은 네이티브 사진 선택기/카메라가 그대로 뜹니다
- **데이터 위치**: 리뷰·편집 내용은 앱 전용 저장소(localStorage)에 저장.
  앱을 삭제하면 함께 삭제되니, 폰을 바꾸기 전엔 백업 기능을 쓰세요
- **제한**: 앱 안에서 "data.js 내보내기"(파일 다운로드)는 WKWebView
  특성상 동작하지 않을 수 있습니다. 지도 데이터 편집·내보내기는
  Mac 브라우저에서 하고 `sync-web.sh`로 반영하는 걸 권장합니다
