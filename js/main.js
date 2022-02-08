// define products
let product = document.querySelector('.product');
let cartProductMenu = document.querySelector('.cart-product');
let cartProduct = document.querySelector('.cart-product div');
let badge = document.querySelector('.badge');
let shoppingCart = document.querySelector('.shopping-cart');
let noProductCart = document.querySelector('.no-product-cart');
let products = JSON.parse(localStorage.getItem('products'));
let searchInput = document.querySelector('#search');

// open cart menu
shoppingCart.addEventListener('click', openCart);

// display products
let productUI;
(productUI = function (products = []) {
    product.innerHTML = products.map((item) =>
        `
            <div class="product-items">
                <img src=${item.imageUrl} alt=${item.id}>
                <div class="product-desc">
                    <a onclick="saveItemData(${item.id})">${item.title}</a>
                    <p>Lorem ipsum dolor sit amet, consecrated animistic elicit.</p>
                    <span>Size: ${item.size}</span>
                </div>
                <div class="product-action">
                    <button class="add-to-cart" onclick="addToCart(${item.id})">Add to cart</button>
                    <i class="far fa-heart favorite"></i>
                </div>
            </div>
        `
    );
})(JSON.parse(localStorage.getItem('products')));

// check items in localstorage
let addedItem = JSON.parse(localStorage.getItem('cartProduct'))
    ? JSON.parse(localStorage.getItem('cartProduct'))
    : [];

if (addedItem) {
    addedItem.map((item) => cartProduct.innerHTML += `
        <img src=${item.imageUrl} alt=${item.id} style="width: 55%">
        <p style="display: inline; margin-left: 5px">${item.title}</p>
    `);
    badge.innerHTML = addedItem.length;
}

// add to cart
function addToCart(id) {
    if (localStorage.getItem('username')) {
        let product = products.find((item) => item.id === id);
        cartProduct.innerHTML += `<p>${product.title}</p>`;

        addedItem = [...addedItem, product];
        localStorage.setItem('cartProduct', JSON.stringify(addedItem));

        let cartItem = document.querySelectorAll('.cart-product div p');
        badge.style.display = 'block';
        badge.innerHTML = cartItem.length;
    } else {
        window.location = 'login.html';
    }
}

// check open cart menu
function openCart() {
    if (cartProductMenu.style.display === 'block') {
        cartProductMenu.style.display = 'none';
    } else {
        cartProductMenu.style.display = 'block';
    }

    if (addedItem.length === 0) {
        noProductCart.innerHTML = 'There is no product added.';
    } else {
        noProductCart.innerHTML = '';
    }
}

// save item data in localstorage
function saveItemData(id) {
    localStorage.setItem('productId', id);
    window.location = 'details.html';
}

// search by name
searchInput.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        search(e.target.value, JSON.parse(localStorage.getItem('products')));
    }

    if (e.target.value.trim() === '') {
        productUI(JSON.parse(localStorage.getItem('products')));
    }
});

function search(title, array) {
    let arr = array.filter((item) => item.title === title);
    productUI(arr);
}
