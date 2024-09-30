var cartCount = 0;
var cartItems = localStorage.getItem('cartItems');
if (cartItems) {
    cartCount = cartItems.split(',').length;
}
var cartElement = document.getElementById('cartItems');
if (cartElement) {
cartElement.innerHTML ='Cart <i class="fa-light fa-cart-shopping" style="color: white;"></i> ' + cartCount;
}
function displayProductDetails(product) {
    var productCard = document.createElement('div');
    var img = document.createElement('img');
    img.src = product.photo;
    productCard.appendChild(img);
    var name = document.createElement('h2');
    name.textContent = product.name;
    productCard.appendChild(name);
    var price = document.createElement('p');
    price.textContent = 'Price: ' + product.price;
    productCard.appendChild(price);
    var Desc = document.createElement('p');
    Desc.textContent ='Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, natus. Dolorum ipsa temporibus tenetur porro.';
    productCard.appendChild(Desc);
    document.getElementById('viewDetails').appendChild(productCard);
}
var productId = window.localStorage.getItem("productId");
window.onload = function() {
    var itemsCollection = JSON.parse(localStorage.getItem('arrItems'));
    var selectedItem = itemsCollection.find(item => item.id == productId);
    console.log(selectedItem)
    if (selectedItem) {
        displayProductDetails(selectedItem);
    }
};