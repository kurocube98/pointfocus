# Point Focus

웹 퍼블리싱 실습 및 영상 포트폴리오 게시 및 보관을 위한 반응형 싱글 페이지 웹사이트입니다.  
배경 영상 인트로, About, Works(영상 슬라이더), Contact 섹션으로 구성되어 있으며  
PC, 태블릿, 모바일 환경에 따라 레이아웃과 인터랙션이 달라집니다.

-----

## 1. 개요

- 프로젝트 이름 : Point Focus  
- 목적  
  - 영상 편집 및 모션 그래픽 작업물 소개  
  - 웹 퍼블리싱 및 반응형 UI 구현 능력 검증
- 특징 요약  
  - 상단 고정 네비게이션 + 모바일 햄버거 메뉴  
  - 인트로 섹션에 16:9 비율 배경 영상 재생  
  - About 섹션 : 프로필 이미지 + 스킬 아이콘 리스트  
  - Works 섹션 : 3개의 영상 카드 슬라이더  
    - PC : 좌/우 화살표 + 인디케이터, hover 시 영상 재생  
    - 태블릿 이하 : 화살표 제거, 터치 슬라이드 지원, 카드 탭 시 영상 재생  
  - Contact 섹션 : 구글 폼으로 연결되는 외주 및 협업 신청 버튼

-----

## 2. 기술스택

- VSC
  - HTML5
  - CSS3
  - JavaScript
- Fonts
  - Pretendard Variable
- 배포
  - GitHub

-----

## 3. 폴더구조

 html/
  main.html            메인 페이지

 styles/
  main.css             메인 페이지 스타일

 javascript/
  main.js              nav, slider 등 주요 이벤트 구현 페이지

 images/
  logo.png             로고 이미지
  profile.png          프로필 이미지
  thumbnail1.png       Works 1 썸네일
  thumbnail2.png       Works 2 썸네일
  thumbnail3.png       Works 3 썸네일
  icons/               HTML, CSS, JS, Adobe, Figma 아이콘 등

 videos/
  main-video.mp4       인트로 배경 영상(임시 사용 중 추후 교체 예정)
  video1.mp4           Works 첫 번째 카드 영상
  video2.mp4           Works 두 번째 카드 영상
  video3.mp4           Works 세 번째 카드 영상 

-----

## 4. 추후 개선 사항

- 교체 예정 영상 제작 후 업로드
- 추가 작업물 관리 및 카테고리 확장
- 다국어 지원
