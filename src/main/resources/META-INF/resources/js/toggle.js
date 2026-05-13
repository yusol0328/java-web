// [추가] 다크/라이트 모드 토글 JavaScript
function toggleTheme() {
    const body = document.body;
    const btn = document.getElementById('themeToggleBtn');
    const navbar = document.querySelector('.navbar');

    body.classList.toggle('light-mode');

    if (body.classList.contains('light-mode')) {
        btn.textContent = 'LIGHT';
        navbar.classList.remove('navbar-dark', 'bg-dark');
        navbar.classList.add('navbar-light', 'bg-light');
    } else {
        btn.textContent = 'DARK';
        navbar.classList.remove('navbar-light', 'bg-light');
        navbar.classList.add('navbar-dark', 'bg-dark');
    }
}

//9주차 과제 - 자바스크립트 호출 방식 변경하기 (1) 
// 인라인 onclick 대신 여기서 이벤트를 붙임
document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('themeToggleBtn');
    if (btn) btn.addEventListener('click', toggleTheme);
});