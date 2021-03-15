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
     },
     {
         title: 'Logitech G900 CHAOS Mouse',
         tag: 'Logitech G900 CHAOS Mouse',
         price: 99.99,
         inCart: 0
     },
     {
         title: 'Logitech G915 Lightspeed Keyboard',
         tag: 'Logitech G915 Lightspeed Keyboard',
         price: 252.27,
         inCart: 0
     },
     {
        title: 'Noctua F12',
        tag: 'Noctua F12',
        price: 17.87,
        inCart: 0
    },
    {
        title: 'NZXT AER RGB 2',
        tag: 'NZXT AER RGB 2',
        price: 24.59,
        inCart: 0
    },
    {
        title: 'I3 10320',
        tag: 'I3 10320',
        price: 160.00,
        inCart: 0
    },
    {
        title: 'I5 10600K',
        tag: 'I5 10600K',
        price: 243.24,
        inCart: 0
    },
    {
        title: 'I7 10700K',
        tag: 'I7 10700K',
        price: 160.00,
        inCart: 0
    },
    {
        title: 'I9 10900K',
        tag: 'I9 10900K',
        price: 160.00,
        inCart: 0
    },
    {
        title: 'R3 3300X',
        tag: 'R3 3300X',
        price: 160.00,
        inCart: 0
    },
    {
        title: 'R5 5600X',
        tag: 'R5 5600X',
        price: 160.00,
        inCart: 0
    },
    {
        title: 'R7 5800X',
        tag: 'R7 5800X',
        price: 381.60,
        inCart: 0
    },
    {
        title: 'R9 5950X',
        tag: 'R9 5950X',
        price: 160.00,
        inCart: 0
    },
    {
        title: 'C 750D',
        tag: 'C 750D',
        price: 150.00,
        inCart: 0
    },
    {
        title: 'CM MC H500',
        tag: 'CM MC H500',
        price: 190.80,
        inCart: 0
    },
    {
        title: 'Crystal 280X',
        tag: 'Crystal 280X',
        price: 107.80,
        inCart: 0
    },
    {
        title: 'Dynamic Razer',
        tag: 'Dynamic Razer',
        price: 254.40,
        inCart: 0
    },
    {
        title: 'H210i',
        tag: 'H210i',
        price: 110.00,
        inCart: 0
    },
    {
        title: 'Meshify-C-Solid_1',
        tag: 'Meshify-C-Solid_1',
        price: 100.00,
        inCart: 0
    },
    {
        title: 'Node 804',
        tag: 'Node 804',
        price: 139.92,
        inCart: 0
    },
    {
        title: 'NODE-304-BL_3',
        tag: 'NODE-304-BL_3',
        price: 76.95,
        inCart: 0
    },
    {
        title: 'Asus DUEL RTX 3070',
        tag: 'Asus DUEL RTX 3070',
        price: 575.90,
        inCart: 0
    },
    {
        title: 'Asus RTX 3060 TI TUF GAMING',
        tag: 'Asus RTX 3060 TI TUF GAMING',
        price: 498.73,
        inCart: 0
    },
    {
        title: 'ASUS TUF Gaming RTX 3080',
        tag: 'ASUS TUF Gaming RTX 3080',
        price: 800.00,
        inCart: 0
    },
    {
        title: 'EVGA XC3 RTX 3080',
        tag: 'EVGA XC3 RTX 3080',
        price: 708.51,
        inCart: 0
    },
    {
        title: 'MSI GAMING X RX 5700XT',
        tag: 'MSI GAMING X RX 5700XT',
        price: 581.94,
        inCart: 0
    },
    {
        title: 'MSI MECH OC RX 5700XT',
        tag: 'MSI MECH OC RX 5700XT',
        price: 572.95,
        inCart: 0
    },
    {
        title: 'MSI RTX 3060Ti TRIO',
        tag: 'MSI RTX 3060TI TRIO',
        price: 490.00,
        inCart: 0
    },
    {
        title: 'MSI Ventus 2x OC RTX 3070',
        tag: 'MSI Ventus 2x OC RTX 3070',
        price: 572.95,
        inCart: 0
    },
    {
        title: 'Corsair1',
        tag: 'Corsair1',
        price: 33.00,
        inCart: 0
    },
    {
        title: 'Corsair16',
        tag: 'Corsair16',
        price: 47.00,
        inCart: 0
    },
    {
        title: 'Corsair64',
        tag: 'Corsair64',
        price: 160.00,
        inCart: 0
    },
    {
        title: 'Fury16',
        tag: 'Fury16',
        price: 20.00,
        inCart: 0
    },
    {
        title: 'Fury8',
        tag: 'Fury8',
        price: 56.00,
        inCart: 0
    },
    {
        title: 'plat',
        tag: 'plat',
        price: 250.00,
        inCart: 0
    },
    {
        title: 'TridentZ16',
        tag: 'TridentZ16',
        price: 105.00,
        inCart: 0
    },
    {
        title: 'TridentZ32',
        tag: 'TridentZ32',
        price: 160.00,
        inCart: 0
    },
    {
        title: '27gl850_01',
        tag: '27gl850_01',
        price: 467.50,
        inCart: 0
    },
    {
        title: 'Acer SB220Qbi',
        tag: 'Acer SB220Qbi',
        price: 304.00,
        inCart: 0
    },
    {
        title: 'AOC C27G1',
        tag: 'AOC C27G1',
        price: 309.95,
        inCart: 0
    },
    {
        title: 'Asus PB277Q',
        tag: 'Asus PB277Q',
        price: 273.00,
        inCart: 0
    },
    {
        title: 'Dell P22178H',
        tag: 'Dell P22178H',
        price: 236.92,
        inCart: 0
    },
    {
        title: 'Dell S3220DGF',
        tag: 'Dell S3220DGF',
        price: 399.99,
        inCart: 0
    },
    {
        title: 'LG 27UD58-B',
        tag: 'LG 27UD58-B',
        price: 508.80,
        inCart: 0
    },
    {
        title: 'MSI Optix MAG321CURV',
        tag: 'MSI Optix MAG321CURV',
        price: 566.72,
        inCart: 0
    },
    {
        title: 'ASUS PRIME B450',
        tag: 'ASUS PRIME B450',
        price: 119.00,
        inCart: 0
    },
    {
        title: 'B460M_Pro4-2',
        tag: 'B460M_Pro4-2',
        price: 90.00,
        inCart: 0
    },
    {
        title: 'B550M PRO-VDH',
        tag: 'B550M PRO-VDH',
        price: 120.00,
        inCart: 0
    },
    {
        title: 'MEG UNITY',
        tag: 'MEG UNITY',
        price: 286.20,
        inCart: 0
    },
    {
        title: 'MEG Z490I',
        tag: 'MEG Z490I',
        price: 200.00,
        inCart: 0
    },
    {
        title: 'ROG STRIX X570 Mini',
        tag: 'ROG STRIX X570 Mini',
        price: 250.00,
        inCart: 0
    },
    {
        title: 'ROG STRIX Z490',
        tag: 'ROG STRIX Z490',
        price: 285.00,
        inCart: 0
    },
    {
        title: 'STRIX B550',
        tag: 'STRIX B550',
        price: 180.20,
        inCart: 0
    },
    {
        title: '750 P2',
        tag: '750 P2',
        price: 200.00,
        inCart: 0
    },
    {
        title: 'BR 500W',
        tag: 'BR 500W',
        price: 45.77,
        inCart: 0
    },
    {
        title: 'CX450M',
        tag: 'CX450M',
        price: 59.99,
        inCart: 0
    },
    {
        title: 'FOCUS 650W',
        tag: 'FOCUS 650W',
        price: 148.14,
        inCart: 0
    },
    {
        title: 'G3750W',
        tag: 'G3750W',
        price: 169.42,
        inCart: 0
    },
    {
        title: 'M12II',
        tag: 'M12II',
        price: 90.57,
        inCart: 0
    },
    {
        title: '17-139-207-Z90',
        tag: '17-139-207-Z90',
        price: 273.19,
        inCart: 0
    },
    {
        title: 'TXM 650W',
        tag: 'TXM 650W',
        price: 80.00,
        inCart: 0
    },
    {
        title: 'Adobe Cloud',
        tag: 'Adobe Cloud',
        price: 539.95,
        inCart: 0
    },
    {
        title: 'Bitdefender',
        tag: 'Bitdefender',
        price: 29.99,
        inCart: 0
    },
    {
        title: 'mcafee',
        tag: 'mcafee',
        price: 59.99,
        inCart: 0
    },
    {
        title: 'nord',
        tag: 'nord',
        price: 45.43,
        inCart: 0
    },
    {
        title: 'Office',
        tag: 'Office',
        price: 59.99,
        inCart: 0
    },
    {
        title: 'project2019pro',
        tag: 'project2019pro',
        price: 591.47,
        inCart: 0
    },
    {
        title: 'windows-10 pro',
        tag: 'windows-10 pro',
        price: 198.21,
        inCart: 0
    },
    {
        title: 'windows-10',
        tag: 'windows-10',
        price: 100.90,
        inCart: 0
    },
    {
        title: 'M.2 1TB',
        tag: 'M.2 1TB',
        price: 160.37,
        inCart: 0
    },
    {
        title: 'Samsung',
        tag: 'Samsung',
        price: 84.80,
        inCart: 0
    },
    {
        title: 'Seagate Barracuda 1TB',
        tag: 'Seagate Barracuda 1TB',
        price: 100.00,
        inCart: 0
    },
    {
        title: 'seagate-barracuda-2tb-left-3000x3000',
        tag: 'seagate-barracuda-2tb-left-3000x3000',
        price: 50.74,
        inCart: 0
    },
    {
        title: 'storage17-min',
        tag: 'storage17-min',
        price: 76.32,
        inCart: 0
    },
    {
        title: 'wd-black-desktop-4tb',
        tag: 'wd-black-desktop-4tb',
        price: 179.78,
        inCart: 0
    },
    {
        title: 'WDC-Caviar-Blue',
        tag: 'WDC-Caviar-Blue',
        price: 37.00,
        inCart: 0
    },
    {
        title: 'Samsung',
        tag: 'Samsung',
        price: 76.32,
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
                <img src="./images/products/${item.tag}.png">
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
