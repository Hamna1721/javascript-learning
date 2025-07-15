const params = new URLSearchParams(window.location.search);
console.log(params)
const productId = params.get('productId');

console.log('productId', productId)


function getProductById() {

  fetch(`https://dummyjson.com/products/${productId}`)
    .then(res => res.json())
    .then(myFunction1);
}


getProductById();

let product = {};

function myFunction1(product1) {

  // debugger
  // product.title = product.title;
  // product.image = product.thumbnail;
  // product.minOrder = product.minimumOrderQuantity;
  // product.price = product.price;
  // product.availability = product.availabilityStatus;
  // product.category = product.category;
  // product.brand = product.brand;
  // product.description = product.description;
  // product.shipping = product.shippingInformation;
  // product.warranty = product.warrantyInformation;
  // product.sku = product.sku;
  product = product1;



  const container = document.getElementById("product-detail");

  // Parent
  const productContainer = document.createElement("div");
  productContainer.className = "product-container";

  // Image
  // const img = document.createElement("img");
  // img.className = "product-image";
  // debugger
  // img.src = product.thumbnail;
  // img.alt = product.title;

  // Details container
  // const details = document.createElement("div");
  // details.className = "product-details";
  debugger

  let details = document.getElementById("details_id");  // Assuming this is already in HTML
 // details.innerHTML = ""; // Clear previous

  // Utility to create element with class and text
  function createElement(tag, className, textContent, src) {
    let el = document.createElement(tag);
    if (className) el.className = className;
    if (textContent) el.textContent = textContent;

    if(tag == "img"){
      el.src = src
      el.alt = textContent
    }
    console.log(el)
    return el;
  }

  // Title
  details.appendChild(createElement("div", "product-title", product.title));

  // Subtitle
  details.appendChild(createElement("div", "product-subtitle", product.minOrder));

  // Price
  details.appendChild(createElement("div", "price", product.price));

  // Info rows

  details.appendChild(createElement("div", "product-info", `Availability: ${product.availability}`));
  details.appendChild(createElement("div", "product-info", `Category: ${product.category}`));
  details.appendChild(createElement("div", "product-info", `Brand: ${product.brand}`));
  details.appendChild(createElement("div", "product-info", `Description: ${product.description}`));
  details.appendChild(createElement("div", "product-info", `Shipping: ${product.shipping}`));
  details.appendChild(createElement("div", "product-info", `Warranty: ${product.warranty}`));
  details.appendChild(createElement("div", "product-info", `SKU: ${product.sku}`));

  // Buttons container
  let buttonContainer = document.createElement("div");
  buttonContainer.className = "buttons";

  let btn1 = createElement("button", "btn", "Pre LC");
  let btn2 = createElement("button", "btn btn-outline", "Contact");
  let btn3 = createElement("button", "btn btn-outline", "Add Party");

  buttonContainer.appendChild(btn1);
  buttonContainer.appendChild(btn2);
  buttonContainer.appendChild(btn3);
  details.appendChild(buttonContainer);

  // Note
  details.appendChild(createElement("div", "note", "On Sending Pre-Advice You Will Be Charged For 30 Coins!"));






  // Assemble
  productContainer.appendChild(createElement("img", "product-image", "abc", product.thumbnail ));
  productContainer.appendChild(details);
  container.appendChild(productContainer);


}

// setTimeout(() => {

// }, 2000);