
function handleSignup(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPass', password);
    localStorage.setItem('isLoggedIn', 'false'); 

    alert("Account Created! Now please Login.");
    window.location.href = 'login.html';
}