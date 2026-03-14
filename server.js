document.addEventListener('DOMContentLoaded', function() {
    // Loading Screen
    const loadingScreen = document.querySelector('.loading-screen');
    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 2000);

    // 3D Interactive Elements
    const interactiveElements = document.querySelectorAll('.interactive-element');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.transform = 'perspective(500px) rotateX(0deg) rotateY(0deg)';
        });
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'perspective(500px) rotateX(45deg) rotateY(45deg)';
        });
    });

    // Advanced Scrolling Animation
    const scrollAnimations = document.querySelectorAll('.scroll-animation');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    });

    scrollAnimations.forEach(animation => {
        observer.observe(animation);
    });
});
