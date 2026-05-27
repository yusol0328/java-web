window.onload = function () {
    fetch('/profile/info') // 서버에서 사용자 정보 요청, 비동기 i/o
        .then(res => res.json()) // json 파싱
        .then(data => {
        //     document.getElementById('infoUsername').textContent
        //         = data.username; // DOM 조작 방지
        //     document.getElementById('infoEmail').textContent
        //         = data.email;
        //     document.getElementById('infoPhone').textContent
        //         = data.phone;
        //     if (data.profileImage) { // null 체크
        //         document.getElementById('profileImg').src
        //             = '/uploads/profile/' + data.profileImage;
        //     }
            
        // });

        // 네비바의 사용자명 동적 표시를 위해 상단 주석처리 후 하단 수정 
            const profileLink = document.getElementById('profileNavLink');
            if (profileLink) {
                profileLink.setAttribute('data-bs-title', '👋' + data.username);
                new bootstrap.Tooltip(profileLink);
            }
        });
        
}