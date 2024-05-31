document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); 

        const loginEmail = document.getElementById('lemail').value;
        const loginPassword = document.getElementById('lpassword').value;

        const users = JSON.parse(localStorage.getItem('users')) || [];

        const user = users.find(user => user.email === loginEmail && user.password === loginPassword);

        if (user) {
            alert('Login successful!');
            window.location.href = 'home.html'; 
        } else {
            alert('Invalid email or password!');
        }
    });
});
