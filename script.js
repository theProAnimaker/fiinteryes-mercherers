const cartButton = document.getElementById("cartButton");
const cart = document.getElementById("cartSidebar");
const closeCart = document.getElementById("closeCart");
const overlay = document.getElementById("overlay");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartCount = document.getElementById("cartCount");
const clearCart = document.getElementById("clearCart");

let items = [];

cartButton.addEventListener("click", () => {
cart.classList.add("open");
overlay.style.display = "block";
});

closeCart.addEventListener("click", close);
overlay.addEventListener("click", close);

function close(){
cart.classList.remove("open");
overlay.style.display = "none";
}

document.querySelectorAll(".add-cart").forEach(btn => {
btn.addEventListener("click", () => {

const name = btn.dataset.name;
const price = parseFloat(btn.dataset.price);

items.push({name, price});

render();

});
});

function render(){

cartItems.innerHTML = "";

let total = 0;

items.forEach((item, index) => {

total += item.price;

const div = document.createElement("div");

div.style.display = "flex";
div.style.justifyContent = "space-between";
div.style.margin = "10px 0";

div.innerHTML = `
<span>${item.name} - $${item.price}</span>
<button onclick="removeItem(${index})">X</button>
`;

cartItems.appendChild(div);

});

cartTotal.textContent = total;
cartCount.textContent = items.length;

}

function removeItem(index){
items.splice(index, 1);
render();
}

clearCart.addEventListener("click", () => {
items = [];
render();
});