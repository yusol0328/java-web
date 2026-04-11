// document.getElementById('searchForm').addEventListener('submit', function(e) {
//     e.preventDefault(); // 폼 기본 동작 차단(새로고침)
//     const query = document.getElementById('searchInput').value.trim();
//     if (!query) return;
//     window.open('https://www.google.com/search?q=' + encodeURIComponent(query), '_blank');
    
// });


// ============ 임시 과제 수행란 ============
// 메인화면으로 돌아가는 함수
function showMainScreen() {
    document.querySelectorAll('section').forEach(section => {
        section.style.display = '';  // 숨겼던 section 다시 보이게
    });
    document.getElementById('searchInput').value = ''; // 검색창 초기화
}

// 검색 실행 함수
function performSearch(q) {
    if (!q) {               // q가 없거나 빈 문자열이면
        showMainScreen();   // 메인화면으로 복귀
        return;
    }
    window.open('https://www.google.com/search?q=' + encodeURIComponent(q), '_blank');
}

// 기존 폼 submit 이벤트 (기존 코드 유지 + performSearch로 위임)
document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const query = document.getElementById('searchInput').value.trim();
    performSearch(query);  // 여기서 빈값 처리까지 담당
});