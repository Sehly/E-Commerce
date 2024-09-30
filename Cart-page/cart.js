var cartItems = localStorage.getItem('cartItems') || ''; 
var cartCount = cartItems ? cartItems.split(',').length : 0;
var cartElement = document.getElementById('cartItems'); 
if (cartElement) { 
    cartElement.innerHTML = 'Cart <i class="fa-light fa-cart-shopping" style="color: white;"></i> ' + cartCount;
}
var itemsCollection = JSON.parse(localStorage.getItem('arrItems'));
var cartItems = localStorage.getItem('cartItems') ?localStorage.getItem('cartItems').split(',') : [];
function total() {
    var book = document.getElementById('book');
    book.innerHTML = '';
    if (cartItems.length === 0) {
        book.innerHTML = '<p>No products selected.</p>';
        return;
    }
    var totalPrice = 0;
    for (var i = 0; i < cartItems.length; i++) {
        var productId = cartItems[i];
        var product = itemsCollection.find(item => item.id == productId);
        if (product) {
        var productsCon = document.createElement('div');
        productsCon.className = 'product';
        var img = document.createElement('img');
        img.src = product.photo;
        productsCon.appendChild(img);
        var heading = document.createElement('h3');
        heading.textContent = product.name;
        productsCon.appendChild(heading);
        var price = document.createElement('p');
        price.textContent = 'Price: ' + product.price;
        productsCon.appendChild(price);
        totalPrice += parseInt(product.price.replace('$', ''));
        var removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.setAttribute('data-index', i);
        removeButton.onclick = function() {
            var index = this.getAttribute('data-index');
            removeProduct(index);
        };
        productsCon.appendChild(removeButton);
        book.appendChild(productsCon);
        }
    }
    var totalPriceElement = document.getElementById('total-price');
    if (totalPriceElement) {
        totalPriceElement.innerText = 'Total price: $' + totalPrice;
    }
}
function removeProduct(index) {
    cartItems.splice(index, 1); 
    localStorage.setItem('cartItems', cartItems.join(','));
    total();
    updateCartCount(cartItems.length); 
}
function updateCartCount(count) {
    var cartElement = document.getElementById('cartItems');
    if (cartElement) {
    cartElement.innerHTML = 'Cart <i class="fa-light fa-cart-shopping" style="color: white;"></i> ' + count;
    }
}
document.getElementById('buy-button').addEventListener('click', function() {
    var phoneNumber = document.getElementById('phone').value;
    if (phoneNumber.length !== 11 || isNaN(phoneNumber)) {
        alert('Please enter a valid 11-digit phone number.');
        return;
    }
    if (cartItems.length === 0) {
        alert('No products selected.');
        return;
    }
    cartItems = [];
    localStorage.setItem('cartItems', '');
    updateCartCount(0);
    window.location.href = '../Message-Page/message.html';
});
total();
