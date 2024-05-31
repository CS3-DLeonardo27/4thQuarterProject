function validation(){
    if(document.Formfill.Username.value==""){
        document.getElementById("result").innerHTML="*Enter Username";
        return false;
    }
    
    else if(document.Formfill.Email.value==""){
        document.getElementById("result").innerHTML="*Enter your email address";
        return false;
    }
    else if(document.Formfill.Password.value==""){
        document.getElementById("result").innerHTML="*Enter Password";
        return false;
    }
    
    else if(document.Formfill.cPassword.value==""){
        document.getElementById("result").innerHTML="*Enter Confirm Password";
        return false;
    }
    else if(document.Formfill.cPassword.value !== document.Formfill.Password.value){
        document.getElementById("result").innerHTML="*Password does not match";
        return false;
    }
    else if(document.Formfill.Password.value == document.Formfill.cPassword.value){
        popup.classList.add("open-slide")
        return false;
    }
    
}
var popup=document.getElementById('popup');
function CloseSlide(){
    popup.classList.remove('open-slide')
}

function toLogin(){
    window.location.href = 'login.html';
}

function toReg(){
    window.location.href = 'LogPage.html';
}
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registerForm').addEventListener('submit', function(event) {
        event.preventDefault(); 

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;


        let users = JSON.parse(localStorage.getItem('users')) || [];

        if (users.some(user => user.username === username)) {
            alert('Username already taken!');
            return;
        }

        users.push({ username: username, email: email, password: password });

        localStorage.setItem('users', JSON.stringify(users));

        alert('User registered successfully!');
    });
});


