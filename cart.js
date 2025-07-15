// let carts = JSON.parse(localStorage.getItem('cart'));  

console.log("cart page")

function getCart() {
    debugger
    let products = JSON.parse(localStorage.getItem('cart'));
    console.log("carts", products);
    let container = document.getElementById("card-container1");
    let myRow = document.createElement("div");
    myRow.classList.add("row")




    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        // let productString = JSON.stringify(product).replace(/"/g, '&quot;');


        function createElement(tag, className, textContent, src) {
            let el = document.createElement(tag);
            if (className) el.className = className;
            if (textContent) el.textContent = textContent;

            if (tag == "img") {
                el.src = src
                el.alt = textContent
            }
            console.log(el)
            return el;
        }


        myRow.appendChild(createElement("div", "product-title", product.title));
        myRow.appendChild(createElement("div", "price", product.price));
        myRow.appendChild(createElement("div", "product-info", `Description: ${product.description}`));
        myRow.appendChild(createElement("img", "product-image", "abc", product.thumbnail));
        // productContainer.appendChild(products);
        container.appendChild(myRow);


    }








}


getCart();