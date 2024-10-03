document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('forgotPasswordForm');
    const successMessage = document.getElementById('success-message');
    const forgotPasswordFormSection = document.getElementById('forgot-password-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Hide the form and display the success message
        forgotPasswordFormSection.style.display = 'none';
        successMessage.style.display = 'block';
    });
});
