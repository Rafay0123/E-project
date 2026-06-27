function toggleMenu(x) {
    const navMenu = document.getElementById("navMenu");

    navMenu.classList.toggle("active");
    x.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", () => {

    const swiper = new Swiper(".mySwiper", {
        loop: true,

        speed: 1200,

        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },

        effect: "fade",

        fadeEffect: {
            crossFade: true
        },

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        observer: true,
        observeParents: true
    });

});

function toggleMenu(element) {
    element.classList.toggle('open'); // Mobile icon ki animation
    document.getElementById('navMenu').classList.toggle('active'); // Menu show/hide
}

// Cart aur Login button ko click-able banane ke liye (Agar onclick nahi lagaya to ye zaroori hai)
document.querySelector('.cart').addEventListener('click', () => {
    window.location.href = 'cart.html';
});

document.querySelector('.login').addEventListener('click', () => {
    window.location.href = 'login.html';
});