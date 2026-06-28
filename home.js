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
    element.classList.toggle('open'); 
    document.getElementById('navMenu').classList.toggle('active'); 
}

document.querySelector('.cart').addEventListener('click', () => {
    window.location.href = 'cart.html';
});

document.querySelector('.login').addEventListener('click', () => {
    window.location.href = 'login.html';
});