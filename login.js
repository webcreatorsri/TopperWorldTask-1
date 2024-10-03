document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    const successMessage = document.getElementById('success-message');
    const loginFormSection = document.getElementById('login-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        loginFormSection.style.display = 'none';
        successMessage.style.display = 'block';
    });
});
