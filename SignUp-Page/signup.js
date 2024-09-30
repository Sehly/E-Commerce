var submit = document.getElementById("submitData");
var total = document.getElementsByClassName("parag");
submit.addEventListener('click' , function () {
    validation () ;
} );
function validation () {
    var userName = document.getElementById("text1").value ;
    var email = document.getElementById("text2").value;
    var password = document.getElementById("password").value;
    var password1 = document.getElementById("password1").value;
    if(userName.length >=3 && /^\w+@\w+\.com$/ig.test(email) && password.length >= 8 && password === password1){
        localStorage.setItem('userName', userName);
        localStorage.setItem('userEmail', email);
        localStorage.setItem('password', password);
        window.location.href = '../Login-Page/login.html';
    }
    else{
    if(userName.length < 3 ){
            var p = document.getElementById("p");
            p.textContent = ("Name must be at least 3 characters");
            p.style = "display : block";
    } 
    if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ig.test(email)){
        var p1 = document.getElementById("p1");
        p1.textContent =("Invalid email");
        p1.style = "display : block";
    } 
     if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/ig.test(password) || password.length < 8){
        var p2 = document.getElementById("p2")
        p2.textContent =("Invalid password");
        p2.style = "display : block";
    }
    if(password !== password1){
        var p3 = document.getElementById("p3");
        p3.textContent = ("You entered two different values");
        p3.style = "display : block" ;
    }
    }
}
