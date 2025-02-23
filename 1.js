window.addEventListener('scroll', function () {
    var plansSection = document.querySelector('#plans');
    var plansRect = plansSection.getBoundingClientRect();

    // When the plans section is in view, add the background
    if (plansRect.top < window.innerHeight && plansRect.bottom >= 0) {
        plansSection.classList.add('plans-background');
    } else {
        plansSection.classList.remove('plans-background');
    }
});
