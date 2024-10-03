document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('forgotPasswordForm');
    const successMessage = document.getElementById('reset-success');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        // For demonstration purposes, we'll just display the success message
        successMessage.style.display = 'block';

        // Hide the form after submission
        form.style.display = 'none';

        // In a real application, you would send the email address to the server here
        // e.g., using fetch() or XMLHttpRequest to post data to your server
    });
});

