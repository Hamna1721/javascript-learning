
let carts = []
let h1 = document.getElementById("loading");
// let button = document.getElementById("btn");
h1.style.display = "none";
// button.addEventListener("click", () => {
//     h1.style.display = "block";
//     getData();
// })
// function myFunction(abc) {

//     h1.style.display="none";
//  console.log("abc", abc)
//     console.log("abc", abc.products)
// }

function myFunction(abc) {
    h1.style.display = "none";
    let container = document.getElementById("card-container");
    // container.innerHTML = "";
    let myRow = document.createElement("div");
    myRow.classList.add("row")
    // myRow.classList


    // let col = document.createElement("div");
    // col.classList.add("col-3", "mb-4");
    // col.innerHTML = "";
    for (let i = 0; i < abc.products.length; i++) {
        let product = abc.products[i];
let productString = JSON.stringify(product).replace(/"/g, '&quot;');
        myRow.innerHTML += `<div class="col-3">
        <div class="card" style="width: 18rem;height: 580px;">
  <img src=${product.thumbnail} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${product.title}</h5>
    <p class="card-text">${product.description}</p>
    <a class="btn btn-primary rtt" onclick="navigateToProductDetail(${product.id})">Detail</a>
     <a class="btn btn-primary ttt" onclick="AddToCart(${productString})">Add to cart</a>
  </div>
</div></div>`;

        let doc1 = document.getElementsByClassName("rtt");

        // doc1[i].addEventListener("click", () => {
        //     h1.style.display = "block";
        //     document1();
        // })
    }

    // myRow.appendChild(col);

    // console.log(myRow)

    container.appendChild(myRow);
}

function getData() {

    fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(myFunction);
}


function navigateToProductDetail(productId){
 
    window.location.href = `productdetail.html?productId=${productId}`;
 
}
function AddToCart(product){
debugger
  carts.push(product);
      console.log("Cart:", carts);
      localStorage.setItem('cart', JSON.stringify(carts))
   // window.location.href = `productdetail.html?productId=${productId}`;
 
}

getData();


