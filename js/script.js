let cartBtn = document.querySelector(".cart-item");
let cart = document.querySelector(".cart");
cartBtn.addEventListener("click", function(){
    cart.classList.toggle("show-cart");
});

// search box 

const searchBar = document.querySelector("#search-box");


searchBar.addEventListener("keyup", function(e){
    const term = e.target.value.toLowerCase();
    const items = document.querySelectorAll(".sweets");

    Array.from(items).forEach(function(item){
        const title = item.querySelector(".cart-title").textContent.toLowerCase();
        if(title.indexOf(term) != -1 ){
            item.style.display = "block";
            console.log(item);
        } else {
            item.style.display = "none";
        }

    });


});