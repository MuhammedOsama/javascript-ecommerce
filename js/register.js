// define products
let username = document.querySelector('#username');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let confirmPassword = document.querySelector('#confirmPassword');
let registerBtn = document.querySelector('#register');

// register validation
registerBtn.addEventListener('click', function (e) {
    e.preventDefault();

    if (username.value === '' || email.value === '' || password.value === '') {
        alert('Please, Enter your Data.');
    } else {
        localStorage.setItem('username', username.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('password', password.value);
        localStorage.setItem('confirmPassword', confirmPassword.value);

        setTimeout(() => window.location = 'login.html', 1500)
    }
});
