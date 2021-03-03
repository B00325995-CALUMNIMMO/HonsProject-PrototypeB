const carts = document.querySelectorAll('.addToCart');

let products = [
    {
        title: 'Arctic Silver 5 POLYSYNTH 12G',
        tag: 'Arctic Silver 5',
        price: 15,
        inCart: 0
    },
    {
        title: 'Thermal Grizzly Kryonaut',
        tag: 'Kryo_1g',
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
        cartNumbers();
    })
}

// function cartNumbers() {
//     let prodNumbers = localStorage.getItem('cartNumbers');
//     prodNumbers = parseInt(prodNumbers); // Converts to number from str
//     console.log(prodNumbers);
//     console.log(typeof prodNumbers);
//     if (prodNumbers) {
//         window.localStorage.setItem('cartNumbers', prodNumbers + 1);
//     } else {
//         window.localStorage.setItem('cartNumbers', 1);
//     }
// }

function cartNumbers() {
    localStorage.setItem("cartNumbers", 'yes');
}