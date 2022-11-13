let productsInCart = JSON.parse(localStorage.getItem("shoppingCart"));
if (!productsInCart) {
  productsInCart = [];
}

updateItemCount();

console.log(productsInCart.length);

const parentElement = document.querySelector("#buyItems");
const cartSumPrice = document.querySelector("#sum-prices");
const products = document.querySelectorAll(".product-under");

// console.log(products);

const countTheSumPrice = function () { // 4
	let sum = 0;
	productsInCart.forEach(item => {
		sum += item.price;
	});
	return sum;
}

const updateShoppingCartHTML = function () {
  // 3
  localStorage.setItem("shoppingCart", JSON.stringify(productsInCart));
  if (productsInCart.length > 0) {
    let result = productsInCart.map((product) => {
        return `
            <li class="buyItem">
                <img src="${product.image}">
                <div>
                    <h5>${product.name}</h5>
                    <h6>$${product.price}</h6>
                    <div>
                        <button class="button-minus" data-id=${product.id}>-</button>
                        <span class="countOfProduct">${product.count}</span>
                        <button class="button-plus" data-id=${product.id}>+</button>
                    </div>
                    <i class="fa-solid fa-trash-can delete-icon" data-id=${product.id}></i>
                </div>
            </li>`;
    });
    parentElement.innerHTML = result.join("");
    document.querySelector(".cart-footer").style.display = "block";
    cartSumPrice.innerHTML = countTheSumPrice();
  } else {
    document.querySelector(".cart-footer").style.display = "none";
    parentElement.innerHTML = '<h4 class="empty">Your shopping cart is empty</h4>';
    cartSumPrice.innerHTML = "";
  }
};

function updateProductsInCart(product) {
  // 2
  for (let i = 0; i < productsInCart.length; i++) {
    if (productsInCart[i].id == product.id) {
      productsInCart[i].count += 1;
      productsInCart[i].price =
        productsInCart[i].basePrice * productsInCart[i].count;
      return;
    }
  }
  productsInCart.push(product);
//   console.log(productsInCart);
}

function updateItemCount(){
  document.getElementById("item-count").innerHTML = productsInCart.length;
  return;
}

products.forEach((item) => {
  // 1
  item.addEventListener("click", (e) => {
    if (e.target.classList.contains("AddToCart")) {
        // console.log("yes");    
        const productID = e.target.dataset.productId;
        // console.log(productID);
        const productName = item.querySelector(".product-name").innerHTML;
        const productPrice = item.querySelector(".price-value").innerHTML;
        const productImage = item.querySelector("img").src;
        let product = {
            name: productName,
            image: productImage,
            id: productID,
            count: 1,
            price: +productPrice,
            basePrice: +productPrice,
        };

        // console.log(product);
        updateProductsInCart(product);
        updateShoppingCartHTML();
        updateItemCount();
    }
  });
});

parentElement.addEventListener("click", (e) => {
  // Last
  const isPlusButton = e.target.classList.contains("button-plus");
  const isMinusButton = e.target.classList.contains("button-minus");
  const isdeleteicon = e.target.classList.contains("delete-icon");

  console.log("isdeleteicon");
  if (isdeleteicon) {
    for (let i = 0; i < productsInCart.length; i++) {
      if (productsInCart[i].id == e.target.dataset.id) {
        // productsInCart[i].count = 0;
        console.log("yes");
        productsInCart.splice(i, 1);
      }
      // if (productsInCart[i].count <= 0) {
      //   productsInCart.splice(i, 1);
      //   updateItemCount();
      // }
      updateItemCount();
    }
    updateShoppingCartHTML();
  }

  if (isPlusButton || isMinusButton) {
    for (let i = 0; i < productsInCart.length; i++) {
      if (productsInCart[i].id == e.target.dataset.id) {
        if (isPlusButton) {
          productsInCart[i].count += 1;
        } else if (isMinusButton && productsInCart[i].count > 1) {
          //   if(productsInCart[i].count >= 2){
          productsInCart[i].count -= 1;
          //   }
        }
        productsInCart[i].price =
          productsInCart[i].basePrice * productsInCart[i].count;
      }
      // if (productsInCart[i].count <= 0) {
      //   productsInCart.splice(i, 1);
      //   updateItemCount();
      // }
    }
    updateShoppingCartHTML();
  }
});

// parentElement.addEventListener("click", (e) => {
  
//   if(isdeleteicon){
//     for(let i=0; i<productsInCart.length; i++){
//       if (productsInCart[i].id == e.target.dataset.id) {
//         console.log(isdeleteicon);
//         console.log("yes");
//       }
//     }
//   }
// })

updateShoppingCartHTML();