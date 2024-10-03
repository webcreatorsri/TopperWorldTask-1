
document.querySelector('.cta-button').addEventListener('click', function() {
    alert('Thank you for getting started!');
});

document.addEventListener("DOMContentLoaded", function() {
    const lazyImages = document.querySelectorAll("img[loading='lazy']");
    lazyImages.forEach(img => {
        img.src = img.dataset.src;
    });
});

function runABTest() {
    
    console.log("A/B test initiated");
}

runABTest();
