document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scroll for Navigation Links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Smooth Scroll to Discover More Button
    const discoverMoreBtn = document.getElementById('discover-more-btn');
    if (discoverMoreBtn) {
        discoverMoreBtn.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            window.scrollTo({
                top: target.offsetTop - document.querySelector('nav').offsetHeight, // Adjust for the nav height
                behavior: 'smooth'
            });
        });
    }

    // Header Background Change on Scroll
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Add Fade-In Animations for Sections
    const sections = document.querySelectorAll('section');
    const options = {
        root: null,
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            } else {
                entry.target.classList.remove('fade-in');
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});
