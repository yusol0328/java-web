function validateAndLogin() {
    let valid = true;
    const username = document.getElementById('usernameInput').value.trim();
    const password = document.getElementById('passwordInput').value;

    // ① 아이디 : 4~20자 영문/숫자
    const usernameRegex = /^[a-zA-Z0-9]{4,20}$/;
    if (!usernameRegex.test(username)) {
        showError('usernameInput', 'usernameMsg', '아이디는 4~20자 영문/숫자만 가능합니다.');
        valid = false;
    } else {
        clearError('usernameInput');
    }
    // ② 패스워드 : 8자 이상, 영문+숫자+특수문자
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    if (!passwordRegex.test(password)) {
        showError('passwordInput', 'passwordMsg', '8자 이상, 영문+숫자+특수문자를 포함 필요.');
        valid = false;
    } else {
        clearError('passwordInput');
    }
    
    // 전체 통과 시, 로그인은 모달x 폼o 출력
    if (valid) submitLogin();
}
function showError(fieldId, msgId, message) {
    const field = document.getElementById(fieldId);
    field.classList.add('is-invalid');
    const msg = document.getElementById(msgId);
    if (msg) msg.textContent = message;
}
function clearError(fieldId) {
    const field = document.getElementById(fieldId);
    field.classList.remove('is-invalid');
    field.classList.add('is-valid');
}

function submitLogin() {
    document.querySelector('form[action="/login_check"]').submit();
}