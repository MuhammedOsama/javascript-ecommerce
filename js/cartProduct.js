// define products
let product = document.querySelector('.product');
let noProduct = document.querySelector('.no-product');

// display products from cart
function cartUI(allProducts = []) {
    if (JSON.parse(localStorage.getItem('cartProduct')).length === 0) noProduct.innerHTML = 'There is no product yet.';

    let products = JSON.parse(localStorage.getItem('cartProduct')) || allProducts;
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
                    <button class="add-to-cart" onclick="removeFromCart(${item.id})">Remove from cart</button>
                </div>
            </div>
        `
    );
}

cartUI();

// remove item from cart
function removeFromCart(id) {
    let cartProduct = localStorage.getItem('cartProduct');
    if (cartProduct) {
        let items = JSON.parse(cartProduct);
        let filteredItem = items.filter((item) => item.id !== id);
        localStorage.setItem('cartProduct', JSON.stringify(filteredItem));
        cartUI(filteredItem);
    }
}
