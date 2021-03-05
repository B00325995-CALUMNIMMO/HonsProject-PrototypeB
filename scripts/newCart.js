let carts = document.querySelectorAll('.addToCart');

 let products = [
     {
         title: 'Arctic Silver 5 POLYSYNTH 12G',
         tag: 'Arctic Silver 5',
         price: 15.22,
         inCart: 0
     },
     {
        title: 'Corsair K95 RGB Platinum Keyboard',
        tag: 'Corsair K95 RGB Platinum Keyboard',
        price: 190.00,
        inCart: 0
     },
     {
        title: 'Thermal Grizzly Kryonaut',
        tag: 'Kryo_1g',
        price: 6.69,
        inCart: 0
     },
     {
         title: 'Logitech G502 HERO Wired Mouse',
         tag: 'Logitech G502 HERO Wired Mouse',
         price: 70.52,
         inCart: 0
     }
 ];

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartQty(products[i]);
        costTotal(products[i]);
    })
}

function cartQtyRefresh() { // checks if user has saved anything before to local storage 
    let prodNumbers = localStorage.getItem('cartNumbers');

    if(prodNumbers) {
        document.querySelector('cartIcon span').textContent = prodNumbers;
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

cartQtyRefresh();
