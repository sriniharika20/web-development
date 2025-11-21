

let cartCount = 0;

function updateCartUI() {
    const cartBtn = document.querySelector(".btn.btn-warning");
    cartBtn.textContent = `Cart (${cartCount})`;
}


function disableProductLinks() {
    const productLinks = document.querySelectorAll(".product-card a");

    productLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();  // BLOCK navigation
        });
    });
}

function setupAddToCartButtons() {
    const buttons = document.querySelectorAll(".btn.btn-primary.w-100");

    buttons.forEach(btn => {
        btn.addEventListener("click", function (event) {

            event.preventDefault();  // Block external site open

            cartCount++;
            updateCartUI();

            showToast("Item added to cart!");
        });
    });
}


function showToast(message) {
    let toast = document.createElement("div");

    toast.textContent = message;
    toast.style.position = "fixed";
    toast.style.bottom = "20px";
    toast.style.right = "20px";
    toast.style.background = "#2874f0";
    toast.style.color = "white";
    toast.style.padding = "12px 20px";
    toast.style.borderRadius = "8px";
    toast.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
    toast.style.zIndex = "9999";
    toast.style.opacity = "1";
    toast.style.transition = "opacity 0.5s ease";

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = "0";
        setTimeout(() => toast.remove(), 500);
    }, 1500);
}


document.addEventListener("DOMContentLoaded", () => {
    disableProductLinks();   
    setupAddToCartButtons();
    updateCartUI();
});
