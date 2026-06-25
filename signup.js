// signup.html ke script tag mein ye likhein
function handleSignup(event) {
    event.preventDefault(); // Page ko refresh hone se roke
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Data ko browser ki memory mein save karein
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPass', password);
    localStorage.setItem('isLoggedIn', 'false'); // Abhi login nahi hai

    alert("Account Created! Now please Login.");
    window.location.href = 'login.html';
}