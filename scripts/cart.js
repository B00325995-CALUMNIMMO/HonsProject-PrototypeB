const openCart = document.querySelector('cart__icon')
const closeCart = document.querySelector('close__cart')
const productDOM = document.querySelector('product__center')
const cartDOM = document.querySelector('cart')

let cart = [];

let buttomDOM = [];

// UI Start
class UI {

}
// UI End

// Storage Start
class Storage {

}
// Storage End

// Products Start
class Products {
async getProducts() {
try {
    const results = await fetch('products.json')
    const data = results.json()
    console.log(data)
} catch (err) {
    console.log(err)
}
}
}
// Products End

document.addEventListener('DOMContentLoaded',async ()=> {
    const ui = new UI()
    const products = new Products()

    const productsObj = await products.getProducts()
})