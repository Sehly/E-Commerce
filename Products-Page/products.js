var All = document.getElementById("btnA");
var laptop = document.getElementById("btnL");
var phone = document.getElementById("btnP");
var clothes = document.getElementById("btnC");
var Acc = document.getElementById("btnAcc");
var items = document.querySelector(".items");
var userName = localStorage.getItem('userName');
var arrItems = [
{ id: 1, photo: 'accessorie (1).jpg', name: 'Watch', price: '$350', category: 'Accessories' , Desc: '' },
{ id: 2, photo: 'accessorie (2).jpg', name: 'Watch', price: '$400', category: 'Accessories' , Desc: '' },
{ id: 3, photo: 'mask.jpg', name: 'Mask', price: '$50', category: 'Accessories' , Desc: ''},
{ id: 4, photo: 'accessorie (3).jpg', name: 'Necklace', price: '$250', category: 'Accessories' , Desc: ''},
{ id: 5, photo: 'accessorie (4).jpg', name: 'Ring', price: '$300', category: 'Accessories' , Desc: ''},
{ id: 6, photo: 'accessorie (5).jpg', name: 'Bracelet', price: '$350', category: 'Accessories' , Desc: ''},
{ id: 7, photo: 'accessorie (6).jpg', name: 'Bracelet', price: '$400', category: 'Accessories' , Desc: ''},
{ id: 8, photo: 'mobile1.jpg', name: 'New edition', price: '$100', category: 'phones' , Desc: ''},
{ id: 9, photo: 'mobile 2.jpg', name: 'Xiaomi ', price: '$200', category: 'phones' , Desc: ''},
{ id: 10, photo: 'mobile3.jpg', name: 'iphone', price: '$300', category: 'phones' , Desc: ''},
{ id: 11, photo: 'pexels-noah-erickson-97554-404280.jpg', name: 'iphone', price: '$250', category: 'phones' , Desc: ''},
{ id: 12, photo: 'laptop1.jpg', name: 'Lenovo', price: '$1000', category: 'laptops' , Desc: ''},
{ id: 13, photo: 'laptop2.jpg', name: 'hp', price: '$1500', category: 'laptops' , Desc: ''},
{ id: 14, photo: 'laptop3.jpg', name: 'dell', price: '$2000', category: 'laptops' , Desc: ''},
{ id: 15, photo: 'shirt1 (1).jpg', name: 'Slim', price: '$25', category: 'clothes' , Desc: ''},
{ id: 16, photo: 'shirt1 (2).jpg', name: 'Regular', price: '$30', category: 'clothes' , Desc: ''},
{ id: 17, photo: 'shirt1 (3).jpg', name: 'Over size', price: '$35', category: 'clothes' , Desc: ''},
{ id: 18, photo: 'shirt1 (4).jpg', name: 'Slim fit', price: '$40', category: 'clothes' , Desc: ''}
];
function displayItems(itemsArray) {
items.innerHTML ='';
    for (var i = 0; i < itemsArray.length; i++) {
    var item = itemsArray[i]; 
    var card = document.createElement('div');
    card.className = 'card';
    var img = document.createElement('img');
    img.src = item.photo;
    card.appendChild(img);
    var name = document.createElement('h2');
    name.textContent = item.name;
    card.appendChild(name);
    var price = document.createElement('p');
    price.textContent = item.price;
    card.appendChild(price);
    var viewButton = document.createElement('button');
    viewButton.className = 'viewBtn';
    viewButton.textContent = 'View';
    viewButton.setAttribute('data-id', item.id);
    viewButton.onclick = function() {
    var id = this.getAttribute('data-id');
    viewItemDetails(id);
    }; 
    card.appendChild(viewButton);
    var addToCartButton = document.createElement('button');
    addToCartButton.className = 'addToCartBtn';
    addToCartButton.textContent = 'Add to Cart';
    addToCartButton.setAttribute('cart-id', item.id);
    addToCartButton.onclick = function() {
    var id1 = this.getAttribute('cart-id');
    checkAccount(id1);
    }; 
    card.appendChild(addToCartButton);
    items.appendChild(card);
    }
}
displayItems(arrItems);


function displayedItems(category) {
    var itemSelection = [];
    for (var i = 0; i < arrItems.length; i++) {
        if (arrItems[i].category === category) {
            itemSelection.push(arrItems[i]);
        }
    }
    return itemSelection;
}
All.addEventListener('click', function () {
    displayItems(arrItems);
});

Acc.addEventListener('click', function () {
    var accItems = displayedItems('Accessories');
    displayItems(accItems);
});
laptop.addEventListener('click', function () {
    var laptopItems = displayedItems('laptops');
    displayItems(laptopItems);
});
phone.addEventListener('click', function () {
    var phoneItems = displayedItems('phones');
    displayItems(phoneItems);
});
clothes.addEventListener('click', function () {
    var clothesItems = displayedItems('clothes');
    displayItems(clothesItems);
});
function viewItemDetails(itemId) {
    window.location.href = `../Products-Details/details.html`;
    localStorage.setItem("productId",itemId);
}
function checkAccount (item){
    if(userName){
    addToCart(item);
    }else {
    alert("please login first");
    window.location.href = '../Login-Page/login.html' ;
    }
}
function addToCart(itemId) {
    var item = null;
    for (var i = 0; i < arrItems.length; i++) {
        if (arrItems[i].id === itemId) {
        item = arrItems[i];
        break;
        }
    }
    var cartItems = localStorage.getItem('cartItems');
    if (cartItems) {
        cartItems = cartItems.split(',');
    } else {
        cartItems = [];
    }
    cartItems.push(itemId);
    localStorage.setItem('cartItems', cartItems.join(','));
    updateCartCount(cartItems.length);
}
var cartCount = 0; 
var cartItems = localStorage.getItem('cartItems'); 
if (cartItems) {
    cartCount = cartItems.split(',').length; 
}
var cartElement = document.getElementById('cartItems'); 
if (cartElement) { 
    cartElement.innerHTML ='Cart <i class="fa-light fa-cart-shopping"  style="color: white;"></i> ' + cartCount; 
}
localStorage.setItem('cartCount', cartCount);
localStorage.setItem('arrItems', JSON.stringify(arrItems));
function updateCartCount(count) {
    var cartElement = document.getElementById('cartItems');
    if (cartElement) {
        cartElement.innerHTML = 'Cart <i class="fas fa-cart-shopping" style="color: white;"></i> ' + count;
    }
} 
