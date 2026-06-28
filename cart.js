let cart = JSON.parse(localStorage.getItem('crunchyCart')) || [];

const SHIPPING_FEE = 10000;
const LIVING_RENT = 50000;
const APTECH_FEE = 20000;

const productPrices = {
    'Premium California Almonds': 1899,
    'Royal Dry Fruit Mix': 1499,
    'Premium Saudi Dates': 890,
    'King Size Cashews': 1750,
    'Salted Iranian Pistachios': 1950,
    'Premium Chilean Walnuts': 1650,
    'Holy Ajwa Dates (Medina)': 2400,
    'Salt & Pepper Almonds': 1999,
    'Dried Turkish Apricots': 1150,
    'Premium Afghani Anjeer': 2100,
    'Premium Long Green Kishmish': 690,
    'Luxury Raw Macadamia Nuts': 3800,
    'Waziristan Roasted Chilgoza': 4900,
    'Premium American Pecans': 2650,
    'Organic Amazon Brazil Nuts': 2900,
    'Sliced Crimson Cranberries': 1250,
    'Whole Wild Dried Blueberries': 1950,
    'Jumbo King Medjool Dates': 2800,
    'Raw Organic Pumpkin Seeds': 850,
    'Spicy Peri Peri Cashews': 1850,
    'Premium Whole Hazelnuts': 2150,
    'Seedless Jumbo Black Raisins': 890,
    'Dehydrated Premium Kiwi Slices': 1350,
    'Saffron In-Shell Pistachios': 2250,
    'Luxury Piarom Maryami Dates': 2990,
    'Organic Sunflower Seeds': 750,
    'Premium Organic Chia Seeds': 990,
    'Sweet Dehydrated Mango Slices': 1450,
    'Raw Golden Flax Seeds': 600,
    'Premium Dried Sweet Prunes': 1380,
    'Organic Tibetan Goji Berries': 2450,
    'Gourmet Roasted Yellow Chana': 450,
    'Premium Mabroom Dates': 1950,
    'Royal Sukari Soft Dates': 1200
};

document.addEventListener("DOMContentLoaded", () => {
    renderCart();
});

function renderCart() {
    const container = document.getElementById('cart-items-container');
    if (!container) return;
    
    container.innerHTML = "";
    
    if (cart.length === 0) {
        container.innerHTML = `<p class="empty-msg">Your cart is currently empty.</p>`;
        calculateBill(0);
        return;
    }
    
    let subtotal = 0;
    
    cart.forEach((item, index) => {
        const itemPrice = productPrices[item.name] || 0;
        const totalItemCost = itemPrice * item.quantity;
        subtotal += totalItemCost;
        
        container.innerHTML += `
            <div class="cart-item">
                <div class="item-details">
                    <h4>${item.name}</h4>
                    <p class="unit-price">Rs. ${itemPrice.toLocaleString()} x ${item.quantity}</p>
                </div>
                <div class="item-total-price">
                    <span>Rs. ${totalItemCost.toLocaleString()}</span>
                    <button class="remove-btn" onclick="removeItem(${index})"><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>
        `;
    });
    
    calculateBill(subtotal);
}

function calculateBill(subtotal) {
    document.getElementById('subtotal-val').innerText = "Rs. " + subtotal.toLocaleString();
    
    let grandTotal = 0;
    if (subtotal > 0) {
        grandTotal = subtotal + SHIPPING_FEE + LIVING_RENT + APTECH_FEE;
    }
    
    document.getElementById('grand-total-val').innerText = "Rs. " + grandTotal.toLocaleString();
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem('crunchyCart', JSON.stringify(cart));
    renderCart();
}

function selectCardPayment() {
    document.getElementById('card').checked = true;
}

function processCheckout() {

    if (cart.length === 0) {
        alert("Please add items to your cart first!");
        return;
    }

    const cardName = document.getElementById('card-name').value.trim();
    const cardNumber = document.getElementById('card-number').value.trim();
    const cardExpiry = document.getElementById('card-expiry').value.trim();
    const cardCvv = document.getElementById('card-cvv').value.trim();

    if (cardName === "" || cardNumber === "" || cardExpiry === "" || cardCvv === "") {
        alert("Please fill out all Credit/Debit Card details before paying!");
        return; 
    }

    if (cardNumber.length < 12 || cardCvv.length < 3) {
        alert("Please enter valid card credentials!");
        return;
    }

    var duration = 3 * 1000;
    var end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());

    localStorage.removeItem('crunchyCart');
    cart = [];
    renderCart();

    document.getElementById('successModal').classList.add('show-modal');
}


    function toggleMenu() {
        const nav = document.getElementById('navMenu');
        const mobileBtn = document.getElementById('mobileBtn');
        
        nav.classList.toggle('active');
        mobileBtn.classList.toggle('open');
    }
