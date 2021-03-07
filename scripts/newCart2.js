let carts = document.querySelectorAll('.addToCart');

fetch("newProducts.json")
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log('nope'), err);
    

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartQty(products[i]);
        costTotal(products[i]);
    })
}

function cartQtyRefresh() { // checks if user has saved anything before to local storage 
    let prodNumbers = localStorage.getItem('cartNumbers');

    if(prodNumbers) {
        document.querySelector('.cartIcon span').textContent = prodNumbers;
    }
}

function cartQty(item) { // this method does not work on firefox
    let prodNumbers = localStorage.getItem('cartNumbers');
    prodNumbers = parseInt(prodNumbers); // Converts to number from str

    if (prodNumbers) { // Fixes undefined in case it's first time adding something to cart
        window.localStorage.setItem('cartNumbers', prodNumbers + 1);
        document.querySelector('.cartIcon span').textContent = prodNumbers + 1;
    } else {
        window.localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cartIcon span').textContent = 1;
    }

    setItems(item);
}

function setItems(item) {
    let cartItems = localStorage.getItem('itemsInCart');
    cartItems = JSON.parse(cartItems);
    

    if(cartItems != null) {
        if(cartItems[item.tag] == undefined) {
            cartItems = {
                ...cartItems, // called a spread operator, allows me to select any number of items, useful!
                [item.tag]: item
            }
        }
        cartItems[item.tag].inCart += 1;
    } else {
        item.inCart = 1
        cartItems = {
            [item.tag]: item
        }
    }

    
    localStorage.setItem("itemsInCart", JSON.stringify(cartItems));
    console.log("Cart item is: ", cartItems);
}

function costTotal(item) {
    let cartCost = localStorage.getItem('costTotal');

    if(cartCost != null) {
        cartCost = parseInt(cartCost); // Don't move this, otherwise funct will break
        localStorage.setItem("costTotal", cartCost + item.price);
    } else {
        localStorage.setItem("costTotal", item.price);
    }
    
}

function cartDisplay() {
    let cartItems = localStorage.getItem("itemsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".productsCart");
    let cartCost = localStorage.getItem('costTotal');

    console.log(cartItems);
        if(cartItems && productContainer) {
            productContainer.innerHTML = '';
            Object.values(cartItems).map(item => {
            productContainer.innerHTML += /* Finds "productsCart" within HTML and inserts it into HTML code */ 
            ` 
            <div class="product">
                <i class="fa fa-times-circle" aria-hidden="true"></i>
                <img src="./images/products/Accessories/${item.tag}.png">
                <span>${item.title}</span>
            </div>
            <div class="price">£${item.price}</div>
            <div class="qty">
                <i class="fas fa-arrow-alt-circle-up"></i>
                <span>${item.inCart}</span>
                <i class="fas fa-arrow-alt-circle-down"></i>
            </div>
            <div class="total">
                £${item.inCart * item.price}
            </div>
            `;
        });

        productContainer.innerHTML += `
        <div class="basketTotalContainer">
            <h4 class="basketTotalTitle">Basket Total</h4>
            <h4 class="basketTotal>£${cartCost}</h4>
        </div>
        `;
    }
}

cartQtyRefresh();
cartDisplay();
