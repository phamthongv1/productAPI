
var productsAPI = "http://localhost:3000/products";

function start(){
    getProducts(function(products){
        renderProducts(products);
    })
}

start();

function getProducts(callback){
    fetch(productsAPI)
        .then(function(response){
            return response.json();
        })
        .then(callback);
}

function renderProducts(products){
    var productList = document.querySelector(".panel__list");
    var htmls = products.map(function(product){
        return `
            <div class="panel">
                <div class="panel__img"><img src="${product.src_img1}" /></div>
                <div class="panel__content">
                    <div class="panel__content--header item">
                        <h2>${product.name}</h2>
                        <p>${product.title}</p>
                </div>
                <div class="panel__content--options item">
                    <ul class="checkboxes">
                        <li><input type="checkbox" /><label>red</label></li>
                        <li><input type="checkbox" /><label>black</label></li>
                        <li><input type="checkbox" /><label>blue</label></li>
                    </ul>
                </div>
                <div class="panel__content--action">
                    <span class="price">${product.price}$</span>
                    <button class="btn__add-to-cart">ADD TO CART</button>
                </div>
            </div>
            </div>
        `;
    });
    productList.innerHTML = htmls.join('')
}