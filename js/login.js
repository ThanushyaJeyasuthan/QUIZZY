document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        localStorage.setItem('userStatus', 'logged-in');
        // go to category pag
        window.location.href = 'category.html';
    });

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        localStorage.setItem('userStatus', 'new-user');
        // go to category page
        window.location.href = 'category.html';
    });
});




// wait until the page to load 
document.addEventListener('DOMContentLoaded', () => {
    
    // selecting the login and registration forms
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    // Logic for Login 
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            
            if (!this.checkValidity()) {
                event.stopPropagation();
            } else {
                //user id 
                const userId = document.getElementById('loginUser').value;
                
                sessionStorage.setItem('currentUser', userId);
                localStorage.setItem('userStatus', 'logged-in');
                // go to category page
                window.location.href = 'category.html';
            }
            this.classList.add('was-validated');
        }, false);
    }

    // Logic for Registration 
    if (registerForm) {
        registerForm.addEventListener('submit', function (event) {
            event.preventDefault();
            
            if (!this.checkValidity()) {
                event.stopPropagation();
            } else {
                // Get new user's ID and Name
                const userId = document.getElementById('regUser').value;
                const userName = document.getElementById('regName').value;
                
               
                sessionStorage.setItem('currentUser', userId);
                localStorage.setItem('userStatus', 'new-user');
                
                
                // go to category page
                window.location.href = 'category.html';
            }
            this.classList.add('was-validated');
        }, false);
    }
});
