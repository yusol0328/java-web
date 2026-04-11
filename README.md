# quarkus 프로젝트 시작! (학번 : 20250620 이름 : 유유솔)
매 주 수업 내용을 정리하자.

## 2, 3주차 수업 내용
실습 1 : 쿼크스 환경 구축 및 준비 완료!
실습 2 : HTML 기본 및 LOL 메인 화면 개발 완료!
<div align="center">
<img src="screenshots/2026-01-26 오전 9_51_43.png" width="45%" alt="실습 1 화면">
<img src="screenshots/파일명.png" width="45%" alt="실습 2 화면">
</div>
<br>

## 4주차 수업 내용
1. 부트스트랩 5 이해 및 활용하기 (기본 레이아웃)
2. 외부 링크 활용하기
    - `<a href="">`
    - 실습 : 링크 추가해가며 적용
    - target="_blank" (새 창으로 열기)
3. 이미지 삽입 방법 알기
    - `<img src="">`
    - 로컬로 이미지 로딩하기 
        - 이미지 폴더 생성
        - 상대경로, 절대경로 알아보기 
        - 실습 : 사일러스 수정
4. 콘솔창(F12, 개발자 모드) 로 코드 해석하기
5. 디자인&스타일의 우선 순위 배우기
    - 인라인 스타일보다도 부트스트랩 스타일 활용하기
6. 네비게이션 바 수정
    - 드랍다운, 서치창 등 부트스트랩의 코드로 실습 파일 편집하기 
    - 디자인 배경 DARK로 수정하기 
    <img src="screenshots/자바_4주차_6번.png" width="45%" alt="6번 실습 화면">
7. 챔피언 카드 추가하기, 그리드 수정
    - `<div class="row row-cols-auto g-4">`
    - 실습 : 열 너비 자동 지정 
    <img src="screenshots/자바_4주차_3, 7번.png" width="45%" alt="3번, 7번 실습 화면">
8. 서브 페이지 추가하기 
    - 모달창 구현하기(챔피언 세부 정보 출력)
    - 실습 : Aatrox 챔피언 
    <img src="screenshots/자바_4주차_8번.png" width="45%" alt="8번 실습 화면">
    - 이후 페이지를 완성해나갈 예정 

## 5주차 수업 내용
1. 카드-모달창 구현하기 
    - Aatrox.html을 삽입하여 상세 정보를 확인할 수 있게끔 함 
    - Aatrox라는 캐릭터의 그림 위치를 수정
        - Modals기준 경로로 상대 경로를 수정 및 추가(../)
        - (../)는 '현재 폴더에서 한 단계 위로 이동'이라는 뜻
    <img src="screenshots/자바_5주차_1번.png" width="45%">
2. 서브 페이지 추가하기 
    - main_page_sub 폴더를 생성하여 서브 페이지의 추가 기반을 다짐
    - '다운로드' 서브 페이지 구축
        - 용도 : 파일 다운로드 및 설치 상세 
        - index.html 네비게이션 바의 '다운로드'에 해당되는 href를 `<a class="nav-link" href="main_page_sub/download.html">다운로드</a>`로 수정함으로써 다운로드 서브 페이지 html을 연결 
3. 서브 페이지 구현하기 
    - 템플릿 레이아웃 코드 재사용(네비게이션 코드(네비바)까지는 동일)
    - 빈 서브 페이지 구현 구상 
        - tip: 참고하고자 하는 웹사이트에서 F12 개발자 모드를 통해 소스 코드&화면 구성을 분석하고 비슷하게 구현하면 된다. 
        - 화면 구성 : 네비바/배너/권장 시스템 사양 안내 표 
    - 본격적으로 download.html을 수정 
        - 히어로 배너 코드 추가 
            - 배경 이미지 삽입 
            - css 폴더 생성, download.css파일 이용 
                - download.html의 기존 style태그 삭제
                - `<link rel="stylesheet" href="../css/download.css">`를 download.html의 style란에 삽입 -> css파일을 download.html에 연결 
            - download.css 파일 살피기 
                - 세부 속성들로 컬러 수정 익히기 
                - 특정 영역에 적용됨을 알기 (ex: .hero 등)
        <img src="screenshots/자바_5주차_3번.png" width="45%">
        - 표 추가 (권장 시스템 사양 안내)
            - download_table.html 열람 후 이용
            - 코드 전체 추가 후 표 구조 파악
                - `<tr>`은 행, `<td>`는 내부 셀 
        <img src="screenshots/자바_5주차_3번.png" width="45%">

## 6주차 수업 내용
1. 자바스크립트 구조 파악&외부 연결 링크를 로컬로 전환
    - js 폴더 생성 
    - `<script src="#"></script>` 와 같이 연결되어있던 링크를 `<script src="js/bootstrap.bundle.min.js"></script>`와 같이 js폴더를 만들어 내부 로컬에서 연동되도록 함 
    - 내부 스크립트 입력 
        - 메인 페이지 새로고침 시 '로딩 완료' 메시지가 뜨게 하고자 함
        - Html 파일 내에서 직접 js 삽입(index.html에 삽입)
        <img src="screenshots/자바_6주차_1번.png" width="45%">
    - 인라인 방식 삽입 
        - 메인 페이지의 무료플레이 버튼 클릭 시 '즐거운 플레이 되세요'가 뜨게 하고자 함
        - `<a href="#" class="btn btn-primary btn-lg" onclick="alert('즐거운 플레이 되세요')">무료 플레이</a>`와 같은 형식의 인라인 삽입
        <img src="screenshots/자바_6주차_1번(2).png.png" width="45%">
2. F12 개발자 모드를 이용한 js 로딩 확인
    - JS 출력 및 에러 확인 
    - 콘솔 출력 확인 
    - 자바스크립트 기본 문법
        - 스코프 : 변수가 살 수 있는 범위
        - 재선언 : 같은 이름으로 `변수`를 또 만드는 것
        - 재할당 : 기존 변수의 `값`만 바꾸는 것 
        - 구분
            - var : 함수 스코프, {}밖에서의 접근 가능, 재선언 가능, 재할당 가능 
            - let : 블록 스코프, {}밖에서의 접근 불가능, 재선언 불가능, 재할당 가능
            - const : 블록 스코프, {}밖에서의 접근 불가능, 재선언 불가능, 재할당 불가능
        - test.js를 이용한 기본 문법 익힘 과정 진행 
            - SyntaxError 에러 : 실행 전(파싱 단계) 발생, 예시-let y 중복선언
            <img src="screenshots/자바_6주차_2번(1).png" width="45%">
            - TypeError : 실행 중(런타임) 발생, 예시-const z 재할당 시도
            <img src="screenshots/자바_6주차_2번(2).png" width="45%">
            - ReferenceError 에러 : 실행 후(런타임) 발생, 예시-블록 밖에서 b접근
            <img src="screenshots/자바_6주차_2번(3).png" width="45%">
            - 에러 발생 시 해당 줄을 주석처리해야 후행 코드 확인 가능 (사유: 에러 발생 시점에서 실행이 멈추기 때문)
        - 호이스팅 : 변수/함수 선언이 코드 실행 전에 맨 위로 끌어올려지는 것
            - var : 선언만 끌어올려짐 → 선언 전에 접근해도 undefined 반환
            - let/const : 선언은 끌어올려지지만 초기화는 안 됨
                -> 선언 전에 접근하면 ReferenceError 발생 (이 구간을 TDZ, Temporal Dead Zone이라고 부름)
3. 자바스크립트 기능 구현 
    - 검색 기능 구현
        - 의도 : 검색 버튼 클릭 시 구글 외부 검색으로 연결
        - 구조
            - form 태그 : 웹사이트에서 이벤트를 구현하는 데 주로 사용
            - form 안에서 input(식별자: searchInput)과 button으로 구분
            - form의 현재 id : searchForm
        - 동작 원리
            - addEventListener : submit 이벤트 등록
            - getElementById : 키워드 인식 및 검색 수행
            - encodeURIComponent : 검색어를 URL 파라미터로 변환
            - 새 창(target=_blank)으로 구글 검색 결과 출력
        - search.js 코드를 이용
        - 확인 방법 : F12 개발자 모드 → 소스 탭
        <img src="screenshots/자바_6주차_3번.png" width="45%">
4. DOM(Document Object Model) 이란?
    - JS가 HTML 태그에 접근/변경할 수 있게 해주는 인터페이스
    - HTML을 트리 구조(DOM)로 변환하여 관리
    - 해당 프로젝트 활용 예시 :
        document.getElementById("searchInput") → input 태그 접근
        document.getElementById("searchForm")  → form 태그 접근
