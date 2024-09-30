document.getElementById("loginSubmit").addEventListener("click", function() {
    loginValidation();
});
function loginValidation() {
    var email = document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPassword").value;
    var storedEmail = localStorage.getItem('userEmail');
    var storedPassword = localStorage.getItem('password');
    if (email === storedEmail && password === storedPassword) {
        window.location.href = '../Home-Page/home.html';
    } else {
        if (email !== storedEmail) {
            var loginP1 = document.getElementById("loginP1");
            loginP1.textContent = "Invalid email";
            loginP1.style = "display: block";
        }
        if (password !== storedPassword) {
            var loginP2 = document.getElementById("loginP2");
            loginP2.textContent = "Incorrect password";
            loginP2.style = "display: block";
        }
    }
}
