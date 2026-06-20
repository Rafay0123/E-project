function toggleMenu(element) {
    const navMenu = document.getElementById('navMenu');
    // Is line se Burger "X" banta hai
    element.classList.toggle('open'); 
    // Is line se menu show/hide hota hai
    navMenu.classList.toggle('active'); 
}




// Initialize or load cart from localStorage
let cart = JSON.parse(localStorage.getItem('crunchyCart')) || [];

// 1. ADD TO CART FUNCTION
function addToCart(productName) {
    const warningBox = document.getElementById('cart-warning-box');
    if (!warningBox) return; // Safety check
    
    warningBox.innerText = ""; 

    // Visual Animation on the card
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const titleElement = card.querySelector('.product-info h3');
        if (titleElement && titleElement.innerText.trim() === productName) {
            card.classList.add('added-animate');
            setTimeout(() => card.classList.remove('added-animate'), 400);
        }
    });

    // Cart Logic
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
    
    // Success Message
    warningBox.innerText = productName + " added to cart!";
    setTimeout(() => { warningBox.innerText = ""; }, 3000);
}

// 2. MOBILE MENU TOGGLE
function toggleMenu(element) {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
}

// 3. AUTO-SCROLL LOGIC (Category & Hash)
document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get('cat');
    
    // Hash check (.substring(1) removes the '#' symbol)
    const hash = window.location.hash ? window.location.hash.substring(1) : null; 

    const targetId = cat || hash; 

    if (targetId) {
        const element = document.getElementById(targetId);
        if (element) {
            setTimeout(() => {
                window.scrollTo({
                    top: element.offsetTop - 120, // Adjust for header
                    behavior: 'smooth'
                });
            }, 300); 
        }
    }
});