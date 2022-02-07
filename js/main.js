// define products
let product = document.querySelector('.product');
let cartProductMenu = document.querySelector('.cart-product');
let cartProduct = document.querySelector('.cart-product div');
let badge = document.querySelector('.badge');
let shoppingCart = document.querySelector('.shopping-cart');
let noProductCart = document.querySelector('.no-product-cart');

// open cart menu
shoppingCart.addEventListener('click', openCart);

// display products
(function () {
    product.innerHTML = products.map((item) =>
        `
            <div class="product-items">
                <img src=${item.imageUrl} alt=${item.id}>
                <div class="product-desc">
                    <h2>${item.title}</h2>
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
})();

// check items in localstorage
let addedItem = JSON.parse(localStorage.getItem('cartProduct'))
    ? JSON.parse(localStorage.getItem('cartProduct'))
    : [];

if (addedItem) {
    addedItem.map((item) => cartProduct.innerHTML += `
        <img src=${item.imageUrl} alt=${item.id} style="width: 60%">
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
