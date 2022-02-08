// define products
let products = JSON.parse(localStorage.getItem('products'));
let productId = localStorage.getItem('productId');
let productDetails = products.find((item) => item.id == productId);
let items = document.querySelector('.item-details');

// products details
items.innerHTML = `
        <img src=${productDetails.imageUrl} alt=${productDetails.id}>
        <h2>${productDetails.title}</h2>
        <p>Lorem ipsum dolor sit amet, consecrated animistic elicit.</p>
        <span>Size: ${productDetails.size}</span>
    `;
