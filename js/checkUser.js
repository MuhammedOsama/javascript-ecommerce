// define products
let links = document.querySelector('#links');
let userInfo = document.querySelector('#user-info');
let user = document.querySelector('#user');
let logoutBtn = document.querySelector('#logout');

// get username from localstorage
let username = localStorage.getItem('username');

// check if user logged in
if (username) {
    links.remove();
    userInfo.style.display = 'flex';
    user.innerHTML = username;
}

// logout validation
logoutBtn.addEventListener('click', function () {
    localStorage.clear();
    setTimeout(() => window.location = 'login.html', 1500);
});
