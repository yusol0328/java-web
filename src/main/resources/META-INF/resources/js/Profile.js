// window.onload = function () {
//     fetch('/profile/info') // 서버에서 사용자 정보 요청, 비동기 i/o
//         .then(res => res.json()) // json 파싱
//         .then(data => {
//             document.getElementById('infoUsername').textContent
//                 = data.username; // DOM 조작 방지
//             document.getElementById('infoEmail').textContent
//                 = data.email;
//             document.getElementById('infoPhone').textContent
//                 = data.phone;
//             if (data.profileImage) { // null 체크
//                 document.getElementById('profileImg').src
//                     = '/uploads/profile/' + data.profileImage;
//             }


//         // 네비바의 사용자명 동적 표시를 위해 상단 주석처리 후 하단 수정 
//             const profileLink = document.getElementById('profileNavLink');
//             if (profileLink) {
//                 profileLink.setAttribute('data-bs-title', '👋' + data.username);
//                 new bootstrap.Tooltip(profileLink);
//             }
//         });

//         //URL 파라미터 오류 감지 추가
//         const params = new URLSearchParams(window.location.search);
//         const error = params.get('error');

//         if (error === 'invalid_type') {
//             const msg = document.getElementById('uploadErrorMsg');
//             msg.classList.remove('d-none');
//             msg.textContent = 'jpg, png, gif, webp 파일만 가능합니다.';
//         } else if (error === 'too_large') {
//             const msg = document.getElementById('uploadErrorMsg');
//             msg.classList.remove('d-none');
//             msg.textContent = '파일 크기는 5MB 이하여야 합니다.';
//         } else if (error === 'upload_fail') {
//             const msg = document.getElementById('uploadErrorMsg');
//             msg.classList.remove('d-none');
//             msg.textContent = '업로드 실패. 다시 시도해주세요.';
//         }
  
        
// }

window.onload = function () {
    fetch('/profile/info') // 서버에서 사용자 정보 요청, 비동기 i/o
        .then(res => res.json()) // json 파싱
        .then(data => {
            // null 체크 추가
            if (document.getElementById('infoUsername')) {
                document.getElementById('infoUsername').textContent = data.username;
                document.getElementById('infoEmail').textContent = data.email;
                document.getElementById('infoPhone').textContent = data.phone;
            }
            if (data.profileImage && document.getElementById('profileImg')) {
                document.getElementById('profileImg').src = '/uploads/profile/' + data.profileImage;
            }

            const profileLink = document.getElementById('profileNavLink');
            if (profileLink) {
                profileLink.setAttribute('data-bs-title', '👋' + data.username);
                new bootstrap.Tooltip(profileLink);
            }
        });

        //URL 파라미터 오류 감지 추가
        const params = new URLSearchParams(window.location.search);
        const error = params.get('error');

        if (error === 'invalid_type') {
            const msg = document.getElementById('uploadErrorMsg');
            msg.classList.remove('d-none');
            msg.textContent = 'jpg, png, gif, webp 파일만 가능합니다.';
        } else if (error === 'too_large') {
            const msg = document.getElementById('uploadErrorMsg');
            msg.classList.remove('d-none');
            msg.textContent = '파일 크기는 5MB 이하여야 합니다.';
        } else if (error === 'upload_fail') {
            const msg = document.getElementById('uploadErrorMsg');
            msg.classList.remove('d-none');
            msg.textContent = '업로드 실패. 다시 시도해주세요.';
        }
  
        
}