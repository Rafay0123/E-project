function toggleMenu(element) {
    const navMenu = document.getElementById('navMenu');
    element.classList.toggle('open'); 
    navMenu.classList.toggle('active'); 
}




let cart = JSON.parse(localStorage.getItem('crunchyCart')) || [];

function addToCart(productName) {
    const warningBox = document.getElementById('cart-warning-box');
    if (!warningBox) return; 
    
    warningBox.innerText = ""; 

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const titleElement = card.querySelector('.product-info h3');
        if (titleElement && titleElement.innerText.trim() === productName) {
            card.classList.add('added-animate');
            setTimeout(() => card.classList.remove('added-animate'), 400);
        }
    });

    let existingProduct = cart.find(item => item.name === productName);

    if (existingProduct) {
        if (existingProduct.quantity >= 3) {
            warningBox.innerText = "You cannot add one item more than 3 times!";
            return;
        } else {
            existingProduct.quantity += 1;
        }
    } else {
        if (cart.length >= 8) {
            warningBox.innerText = "Cart is full, please place another order!";
            return;
        } else {
            cart.push({ name: productName, quantity: 1 });
        }
    }

    localStorage.setItem('crunchyCart', JSON.stringify(cart));
    
    warningBox.innerText = productName + " added to cart!";
    setTimeout(() => { warningBox.innerText = ""; }, 3000);
}

function toggleMenu(element) {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get('cat');
    
    const hash = window.location.hash ? window.location.hash.substring(1) : null; 

    const targetId = cat || hash; 

    if (targetId) {
        const element = document.getElementById(targetId);
        if (element) {
            setTimeout(() => {
                window.scrollTo({
                    top: element.offsetTop - 120, 
                    behavior: 'smooth'
                });
            }, 300); 
        }
    }
});

    function toggleMenu() {
        const nav = document.getElementById('navMenu');
        const mobileBtn = document.getElementById('mobileBtn');
        
        nav.classList.toggle('active');
        mobileBtn.classList.toggle('open');
    }