// define products
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let loginBtn = document.querySelector('#login');

// get data from localstorage
let getEmail = localStorage.getItem('email');
let getPassword = localStorage.getItem('password');

// login validation
loginBtn.addEventListener('click', function (e) {
    e.preventDefault();

    if (email.value === '' || password.value === '') {
        alert('Please, Enter your Data.');
    } else {
        if (getEmail && getEmail === email.value.trim() && getPassword && getPassword === password.value) {
            setTimeout(window.location = 'index.html', 1500);
        } else {
            alert('Sorry, Email Or Password is wrong.');
        }
    }
});
