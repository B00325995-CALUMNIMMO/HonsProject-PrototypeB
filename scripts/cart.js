const openCart = document.querySelector('cart__icon');
const closeCart = document.querySelector('close__cart');
const productDOM = document.querySelector('product__center');
const cartDOM = document.querySelector('cart');

let cart = [];

let buttomDOM = [];

// UI Start
class UI {
    displayProducts(obj) {
        let results = '';
        /*
        Below code uses Template Literals which allows for embedded expressions. ${expression} are the placeholders, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
        Essentially, code allows us to use the JSON and import directly to the website
        */
        obj.forEach(({title, image, id, price}) => {
            results += `<div class="product">
            <div class="image__container">
              <img src=${image} alt="" />
            </div>
            <div class="product__footer">
              <h1>${title}</h1>
              <div class="rating">
                <span>
                  <svg>
                    <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                  </svg>
                </span>
                <span>
                  <svg>
                    <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                  </svg>
                </span>
                <span>
                  <svg>
                    <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                  </svg>
                </span>
                <span>
                  <svg>
                    <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                  </svg>
                </span>
                <span>
                  <svg>
                    <use xlink:href="./images/sprite.svg#icon-star-empty"></use>
                  </svg>
                </span>
              </div>
              <div class="bottom">
                <div class="btn__group">
                  <a href="#" class="btn addToCart" data-id=${id}>Add to Cart</a>
                  <a href="#" class="btn view">View</a>
                </div>
                <div class="price">$${price}</div>
              </div>
            </div>
          </div>`;
        });

        productDOM.innerHTML = results;
    }

}
// UI End

// Storage Start
class Storage {
    static saveProducts(obj){
        localStorage.setItem("products", JSON.stringify(obj));
    }
}
// Storage End

// Products Start
class Products {
async getProducts() {
try {
    // in try loop, fetch JSON, await the data to load from JSON, then declare var products as the data items
    const results = await fetch('products.json');
    const data = await results.json();
    const products = data.items;
    return products;
} catch (err) {
    console.log(err);
}
}
}
// Products End

document.addEventListener('DOMContentLoaded',async ()=> {
    const ui = new UI();
    const products = new Products();

    const productsObj = await products.getProducts();
    ui.displayProducts(productsObj);
    Storage.saveProducts(productsObj);
});