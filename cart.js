// let carts = JSON.parse(localStorage.getItem('cart'));  

console.log("cart page")

function getCart() {

    let products = JSON.parse(localStorage.getItem('cart'));
    console.log("carts", products);
    let container = document.getElementById("card-container1");
    //let myRow = document.createElement("div");
   // myRow.className = "cart-row";
   // myRow.classList.add("row")



    var total = 0;
    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        // let productString = JSON.stringify(product).replace(/"/g, '&quot;');
        let myRow = document.createElement("div");
         myRow.className = "cart-row";
        myRow.classList.add("row")

        const imageDiv = document.createElement("div");
        imageDiv.className = "image-column";
        const img = document.createElement("img");
        img.src = product.thumbnail;
        img.className = "cart-image";
        imageDiv.appendChild(img);
        const infoDiv = document.createElement("div");
        infoDiv.className = "info-column";
        // const Div = document.createElement("button");
        // btnDiv.className = "btn-column";

        const btnDiv = document.createElement("div");
        btnDiv.className = "btn-column";
        // const img = document.createElement("img");
        // img.src = product.thumbnail;
        // img.className = "cart-image";
        // btnDiv.appendChild(img);


        function createElement(tag, className, textContent, src) {
            let el = document.createElement(tag);
            if (className) el.className = className;
            if (textContent) el.textContent = textContent;

            if (tag == "img") {
                el.src = src
                el.style.width = '200px'
                el.style.height = '200px'
                el.alt = textContent
            }
            console.log(el)
            return el;
        }





        // Create parent row with flex
        // const myRow = document.createElement("div");
        // myRow.className = "cart-row"; // Apply flex styling via CSS

        // LEFT column for image
        // const imageDiv = document.createElement("div");
        // imageDiv.className = "image-column";
        // const img = document.createElement("img");
        // img.src = product.thumbnail;
        // img.className = "cart-image";
        // imageDiv.appendChild(img);

        // RIGHT column for info
        // const infoDiv = document.createElement("div");
        // infoDiv.className = "info-column";
        // infoDiv.appendChild(createElement("div", "cart-title", product.title));
        // infoDiv.appendChild(createElement("div", "price", product.price));
        // infoDiv.appendChild(createElement("div", "cart-info", `Description: ${product.description}`));

        // // Append both columns to the parent row
        // myRow.appendChild(imageDiv);
        // myRow.appendChild(infoDiv);

        // // Now you can append `myRow` to your container
        // document.getElementById("cart-items").appendChild(myRow);








        infoDiv.appendChild(createElement("div", "cart-title", product.title));
        infoDiv.appendChild(createElement("div", "price", '$ '+product.price));
        infoDiv.appendChild(createElement("div", "cart-info", `Description: ${product.description}`));

         btnDiv.appendChild(createElement("button", "btn-column", "Delete"));
         btnDiv.addEventListener('click', function () {
    // Yahan aapka delete ka logic aayega
   // alert(product.title);
   myRow.remove();

    // Remove item from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.title !== product.title); // match by title or unique ID
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update total
    let updatedTotal = 0;
    cart.forEach(p => updatedTotal += p.price);
    document.getElementById('TotalAmount').textContent = updatedTotal.toFixed(2);
});
         
//          deleteBtn.addEventListener("click", function () {
//     console.log("Delete button clicked!");
//     // Yahan aapka delete logic aayega
// });

        // imageDiv.appendChild(createElement("img", "cart-image", "abc", product.thumbnail));
        // productContainer.appendChild(products);
        // container.appendChild(myRow);
        myRow.appendChild(imageDiv);
        myRow.appendChild(infoDiv);
        // myRow.appendChild(btnDiv);
        myRow.appendChild(btnDiv);
        container.appendChild(myRow);

        // Now you can append `myRow` to your container
        // document.getElementById("cart-items").appendChild(myRow);


        total += product.price;

    }

    let totalAmount = 0;
    totalAmount = total;
    document.getElementById('TotalAmount').textContent = totalAmount.toFixed(2);

    //let tot =document.getElementById('TotalAmount');






}

getCart();




// let cart = [];

// function addToCart(name, price, image) {
//     cart.push({ name, price, image });
//     updateCartDisplay();
// }

// function updateCartDisplay() {
//     const cartItemsContainer = document.getElementById('cart-items');
//     const cartCount = document.getElementById('cart-count');
//     const cartTotal = document.getElementById('cart-total');

//     cartItemsContainer.innerHTML = '';
//     let total = 0;

//     cart.forEach((item) => {
//         total += item.price;

//         const itemDiv = document.createElement('div');
//         itemDiv.className = 'cart-item';
//         itemDiv.innerHTML = `
//       <img src="${item.image}" width="30" style="margin-right:10px;">
//       <span>${item.name}</span>
//       <span>$${item.price.toFixed(2)}</span>
//     `;
//         cartItemsContainer.appendChild(itemDiv);
//     });

//     cartCount.textContent = `(${cart.length})`;
//     cartTotal.textContent = total.toFixed(2);
// }


// function toggleCart() {
//     const panel = document.getElementById('cart-panel');
//     panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
// }




// const products = [
//     // { name: 'Red Lipstick', price: 12.99, image: 'lipstick.jpg' },
//     { name: 'Product B', price: 250, image: 'product-b.jpg' },
//     { name: 'Product C', price: 75, image: 'product-c.jpg' },
// ];


// function renderProducts() {
//     const container = document.getElementById('product-container');

//     products.forEach(product => {
//         const productDiv = document.createElement('div');
//         productDiv.className = 'product';

//         productDiv.innerHTML = `
//       <img src="${product.image}" width="50">
//       <div>
//         <h4>${product.name}</h4>
//         <p>$${product.price}</p>
//         <button>Add to Cart7</button>
//       </div>
//     `;

//         const button = productDiv.querySelector('button');
//         button.addEventListener('click', () => {
//             addToCart(product.name, product.price, product.image);
//         });

//         container.appendChild(productDiv);
//     });
// }
