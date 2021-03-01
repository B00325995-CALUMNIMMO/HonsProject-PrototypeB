let carts = document.querySelectorAll('.addToCart');

let products = [
    {
        title: 'Arctic Silver 5 POLYSYNTH 12G',
        tag: 'Arctic Silver 5 POLYSYNTH 12G',
        price: 15,
        inCart: 0
    },
    {
        title: 'Thermal Grizzly Kryonaut',
        tag: 'Thermal Grizzly Kryonaut',
        price: 7,
        inCart: 0
    },
    {
        title: 'Corsair K95 RGB Platinum Keyboard',
        tag: 'Corsair K95 RGB Platinum Keyboard',
        price: 190,
        inCart: 0
    },
    {
        title: 'Logitech G502 HERO Wired Mouse',
        tag: 'Logitech G502 HERO Wired Mouse',
        price: 71,
        inCart: 0
    }
];

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartQty();
    })
}

function cartQty() {
    let prodNumbers = localStorage.getItem('cartNumbers');
    prodNumbers = parseInt(prodNumbers); // Converts to number from str
    console.log(prodNumbers)
    if (prodNumbers) {
        localStorage.setItem('cartNumbers', prodNumbers + 1);
    } else {
        localStorage.setItem('cartNumbers', 1);
    }
}