document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('success-message');
    const contactFormSection = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        contactFormSection.style.display = 'none';
        successMessage.style.display = 'block';
    });
});
