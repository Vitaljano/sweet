let cartBtn = document.querySelector(".cart-item");
let cart = document.querySelector(".cart");
cartBtn.addEventListener("click", function(){
    cart.classList.toggle("show-cart");
});