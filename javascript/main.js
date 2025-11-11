const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetSelector = link.getAttribute('href');
        const target = document.querySelector(targetSelector);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

const scrollButton = document.getElementById('scroll-to-about');

if (scrollButton) {
    scrollButton.addEventListener('click', () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

const menuIcon = document.getElementById('menuIcon');
const mobileMenu = document.getElementById('mobileMenu');

if (menuIcon && mobileMenu) {
    menuIcon.addEventListener('click', () => {
        mobileMenu.classList.toggle('show');
        menuIcon.classList.toggle('active');
    });

    document.querySelectorAll('.mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('show');
            menuIcon.classList.remove('active');
        });
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 460) {
            mobileMenu.classList.remove('show');
            menuIcon.classList.remove('active');
        }
    });
}

window.addEventListener('load', () => {
    const video = document.querySelector('.intro video');
    if (video) {
        video.play().catch(() => { });
    }
});

const track = document.querySelector('.slider-track');
const dots = document.querySelectorAll('.slider-indicators .dot');
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');
const slideCards = document.querySelectorAll('.slide-card');
const sliderContainer = document.querySelector('.slider-container');

let currentIndex = 0;

function resetAllVideos() {
    slideCards.forEach(card => {
        const video = card.querySelector('video');
        if (!video) return;
        video.pause();
        video.currentTime = 0;
        card.classList.remove('playing');
    });
}

function updateArrowVisibility() {
    if (!prevBtn || !nextBtn) return;

    if (currentIndex === 0) {
        prevBtn.style.visibility = 'hidden';
    } else {
        prevBtn.style.visibility = 'visible';
    }

    if (dots.length > 0 && currentIndex === dots.length - 1) {
        nextBtn.style.visibility = 'hidden';
    } else {
        nextBtn.style.visibility = 'visible';
    }
}

function updateSlider(index) {
    if (!track || dots.length === 0) return;
    if (index < 0 || index >= dots.length) return;

    currentIndex = index;

    const offset = -index * 100;
    track.style.transform = `translateX(${offset}%)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');

    resetAllVideos();
    updateArrowVisibility();
}

window.addEventListener('resize', updateArrowVisibility);

if (track && dots.length > 0 && prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            updateSlider(currentIndex - 1);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < dots.length - 1) {
            updateSlider(currentIndex + 1);
        }
    });
}

if (dots.length > 0) {
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            updateSlider(index);
        });
    });
}

if (track && dots.length > 0) {
    updateSlider(currentIndex);
}

if (sliderContainer && track && dots.length > 0) {
    let touchStartX = 0;
    let touchEndX = 0;
    let isTouching = false;

    sliderContainer.addEventListener('touchstart', event => {
        if (window.innerWidth > 1080) return;
        if (event.touches.length !== 1) return;

        isTouching = true;
        touchStartX = event.touches[0].clientX;
        touchEndX = touchStartX;
    }, { passive: true });

    sliderContainer.addEventListener('touchmove', event => {
        if (!isTouching) return;
        touchEndX = event.touches[0].clientX;
    }, { passive: true });

    const endTouch = () => {
        if (!isTouching) return;

        const deltaX = touchEndX - touchStartX;
        const threshold = 50;

        if (deltaX > threshold && currentIndex > 0) {
            updateSlider(currentIndex - 1);
        } else if (deltaX < -threshold && currentIndex < dots.length - 1) {
            updateSlider(currentIndex + 1);
        } else {
            updateSlider(currentIndex);
        }

        isTouching = false;
        touchStartX = 0;
        touchEndX = 0;
    };

    sliderContainer.addEventListener('touchend', endTouch);
    sliderContainer.addEventListener('touchcancel', endTouch);
}

slideCards.forEach(card => {
    const video = card.querySelector('video');
    if (!video) return;

    card.addEventListener('mouseenter', () => {
        if (window.innerWidth <= 1080) return;
        resetAllVideos();
        video.currentTime = 0;
        video.play().catch(() => { });
        card.classList.add('playing');
    });

    card.addEventListener('mouseleave', () => {
        if (window.innerWidth <= 1080) return;
        video.pause();
        video.currentTime = 0;
        card.classList.remove('playing');
    });

    card.addEventListener('click', () => {
        if (window.innerWidth > 1080) return;

        const isActive = card.classList.contains('playing');
        resetAllVideos();

        if (!isActive) {
            video.currentTime = 0;
            video.play().catch(() => { });
            card.classList.add('playing');
        }
    });
});