// let slideIndex = 0;
// showSlides();

// function showSlides() {
//     let i;
//     // HTML ki '.slide' class ko target kiya
//     let slides = document.getElementsByClassName("slide"); 
    
//     // Sabhi slides ko pehle chupao (hide)
//     for (i = 0; i < slides.length; i++) {
//         slides[i].classList.remove("active");  
//     }
    
//     slideIndex++;
//     if (slideIndex > slides.length) { slideIndex = 1 }    
    
//     // Current slide ko dikhao (active class add karo)
//     slides[slideIndex-1].classList.add("active");  
    
//     // Har 3 second baad image khud badal jayegi
//     setTimeout(showSlides, 3000); 
// }

function toggleMenu(x) {
    document.getElementById("navMenu").classList.toggle("active");
    x.classList.toggle("open");
}

  
    var swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    })