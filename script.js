let cart = [];
let total = 0;
let quantities = {};
let prices = {};

function addCart(button, item) {
    quantities[item] = (quantities[item] || 0) + 1;

    let price = button.parentElement.querySelector(".price").textContent;
    price = parseInt(price.replace("R",""));

    price[item] = price;
    total += price;

    displayCart();
}

function removeItem(item)
{
    total -= prices[item] * quantities[item];

    delete quantities[item];
    delete prices[item]

    displayCart();
}

function displayCart() {
    let cartItems = document.getElementById("cart-items");

    if
    (Object.keys(quantities).length === 0) {

        cartItems.textContent = "Your Cart is empty";
    } else {

        cartItems.innerHTML = Object.keys(quantities).map(name => name + " x " + quantities[name]).join("<br>");
    }

    document.getElementById("cart-total").textContent = "Total: R" + total;
}

function clearCart() {
    cart = [];
    total = 0;
    quantities = {};
    prices ={};

    displayCart();
}