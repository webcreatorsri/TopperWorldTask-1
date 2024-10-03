document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signupForm');
    const successMessage = document.getElementById('success-message');
    const signupFormSection = document.getElementById('signup-form');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        if (password !== confirmPassword) {
            alert('Password not matched');
        } else {
            
            signupFormSection.style.display = 'none';
            successMessage.textContent = 'Signed up successfully!';
            successMessage.style.display = 'block';
        }
    });
});
