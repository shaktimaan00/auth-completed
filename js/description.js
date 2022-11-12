import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";  
import { getFirestore, getDoc,query, limit, orderBy, setDoc, collection, onSnapshot, doc, addDoc, serverTimestamp, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBC6D0aZol-1AT5hfy59chfBEvfWzF03NY",
    authDomain: "do-test-1a7d0.firebaseapp.com",
    projectId: "do-test-1a7d0",
    storageBucket: "do-test-1a7d0.appspot.com",
    messagingSenderId: "285727750796",
    appId: "1:285727750796:web:94ed0bb10f9c0e755299a9"
};

initializeApp(firebaseConfig);
const db = getFirestore();

// let myDatato = JSON.parse(localStorage.getItem('myobj'));
const takedescript = collection(db , 'Descrip-db');

const q = query(takedescript, orderBy('createdAt', 'desc'), limit(1))

onSnapshot(q, (snapshot)=>{
    let oneitem=[];
    snapshot.docs.forEach((doc)=>{
      oneitem.push({ ...doc.data(), id: doc.id })
    })
    console.log(oneitem);
    getdataLocal(oneitem);
  })

    // 1. onSnapshot ko upar rakhna h.
    // 2. Uske baad function honge.
    // 3. fir saare createEventLinstner walo ko function me rakhke function ke baad rakhna h.

//
async function addtoCart(itemId){
  let cartItem = doc(db, 'Descrip-db', itemId);

  const docs = await getDoc(cartItem);
  if(docs.exists()){
    await setDoc(doc(db, 'Cart-db', itemId), {
        ...docs.data()
    })
    console.log(docs.data());
  }
//   getDoc(cartIt/em)
//     .then(async function(docu){
//       // seting data into new document with at the time it is inserting.
//       await setDoc(collection(db, 'Cart-db'), {
//         ...docu.data(),
//         createdAt : serverTimestamp()
//       });
//       console.log(docu.data());
//       // await addDoc(doc(db, 'Itemfordescrip', itemId), {
//       //   ...docu.data(),
//       //   createdAt : serverTimestamp()
//       // })
//       // let obj = JSON.stringify(doc.data());
//       // console.log(obj);
//       // localStorage.setItem("myobj", obj);
      
//       // let desreilobj = JSON.parse(localStorage.getItem("myobj"));
//       // console.log(desreilobj);

//       //going to des. page
      location.href = "http://127.0.0.1:5501/Cart.html";
//     })

}
//
// function decreaseCount(itemId){
//     let cartItem = doc(db, 'Descrip-db', itemId);
//     getDoc(cartItem)
//         .then(function(doc) {
//         if(doc.exists){
//             if(doc.data().quantity>1){
//                 updateDoc(cartItem, {
//                     quantity: doc.data().quantity - 1
//                 })
//             }
//         }
//     })
// }
// //
// function increaseCount(itemId){
//     let cartItem = doc(db, 'Descrip-db', itemId);
//     getDoc(cartItem)
//         .then(function(doc) {
//         if(doc.exists){
//             if(doc.data().quantity>0){
//                 updateDoc(cartItem, {
//                     quantity: doc.data().quantity + 1
//                 })
//             }
//         }
//     })
// }

//main that gets data to HTML
function getdataLocal(oneitem){
    let itemsHTML=""; 
    // let mineobject = JSON.parse(localStorage.getItem("myobj"));
    // console.log(mineobject);

    oneitem.forEach(item=>{
        itemsHTML+=`
            <div class="history1">
                <p>Mens > Clothing > <span>Sweatshirts & Hoodies</span></p>
            </div>
            <div class="left">
                
                <div class="small-image-box">
                    <!-- <div class="small-image-box"> -->
                        <div class="small-image"><img src="./description/description_assets/hoodie.remove.bg-removebg-preview.png" alt=""></div>
                        <div class="small-image"><img src="./description/description_assets/hoodie.remove.bg-removebg-preview.png" alt=""></div>
                        <div class="small-image"><img src="./description/description_assets/hoodie.remove.bg-removebg-preview.png" alt=""></div>
                        <div class="small-image"><img src="./description/description_assets/hoodie.remove.bg-removebg-preview.png" alt=""></div>
                        <!-- <div class="small-image"></div> -->
                    <!-- </div> -->
                </div>
                <div class="big-image">
                    <img src="${item.image}" alt="">
                </div>
            </div>
            <div class="right">
                <div class="history2">
                    <p>Mens > Clothing > Sweatshirts & Hoodies</p>
                </div>
                <div class="product-name">
                    <p>${item.title}</p>
                </div>
                <div class="price-and-review">
                    <div class="price">
                        <p class="new-price">₹<span>${item.price}</span></p>
                        <p class="old-price">₹<span>1200</span></p>
                    </div>
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <p><span>4.9</span> (69 reviews)</p>
                    </div>
                </div>
                <div class="size">
                    <p class="heading">Select Size:</p>
                    <div class="size-box">
                        <div class="select-size"><span class="size-1">XS</span></div>
                        <div class="select-size"><span class="size-2">S</span></div>
                        <div class="select-size"><span class="size-3">M</span></div>
                        <div class="select-size"><span class="size-4">L</span></div>
                        <div class="select-size"><span class="size-5">XL</span></div>
                        <div class="select-size"><span class="size-6">XXL</span></div>
                    </div>
                </div>
                <div class="color">
                    <p class="heading">Select Color:</p>
                    <div class="color-box">
                        <div class="select-color color1"><i class="fas fa-check tick"></i></div>
                        <div class="select-color color2"><i class="fas fa-check tick"></i></div>
                        <div class="select-color color3"><i class="fas fa-check tick"></i></div>
                        <div class="select-color color4"><i class="fas fa-check tick"></i></div>
                        <div class="select-color color5"><i class="fas fa-check tick"></i></div>
                        <div class="select-color color6"><i class="fas fa-check tick"></i></div>
                    </div>
                </div>
                <div class="quantity">
                    <p class="heading">Quantity: </p>
                    <div class="q-box">
                        <div class="plus" id="${item.id}"><i class="fas fa-plus"></i></div>
                        <span class="q-value">${item.quantity}</span>
                        <div class="minus" id="${item.id}"><i class="fas fa-minus"></i></div>
                    </div>
                </div>
                <div class="promo-note">
                    <p><i class="fa-solid fa-tags"></i> Enjoy upto ₹300 off with Promo code: <span>#478294</span> Until 9/10/22</p>
                </div>
                <div class="btns">
                    <button class="btn btn-primary addcart" id="${item.id}">
                        <p>Add To Cart</p>
                        <i class="fas fa-bag-shopping"></i>
                    </button>
                    <button class="btn btn-secondary">
                        <p>Favroite</p>
                        <p class="fas fa-heart"></p>
                    </button>
                </div>
            </div>
        
        
        `
    });
    document.querySelector(".product").innerHTML = itemsHTML;
    createEventLinstner();
};

function createEventLinstner(){
    let addcart = document.querySelector(".addcart");
    let decreasebtn = document.querySelector(".minus");
    let increasebtn = document.querySelector(".plus");

    // console.log(decreasebtn.id);
    // console.log(increasebtn);
    let select_color = document.querySelectorAll(".select-color");
    let select_tick = document.querySelectorAll(".tick");
    let select_size = document.querySelectorAll(".select-size");


    let remove_size_active_effect = () => {
        Array.from(select_size).forEach((e) => {
            // console.log(e.classList)
            e.classList.remove("active");
        });
    }
    
    // console.log(select_size);
    Array.from(select_size).forEach((e) => {
        e.addEventListener('click', () => {
            remove_size_active_effect();
            e.classList.toggle("active");
        });
    });

    let remove_tick = () => {
        Array.from(select_tick).forEach((e) => {
            e.style.display = "none";
        });
    }
    //color wale item ko select karke , click event laga denge fir target.class list me jake check karenge ki active class h ki nhi agar h toh andar ka saman color ke key me vakue de dena.
    
    Array.from(select_color).forEach((e) => {
        e.addEventListener('click', () => {
            remove_tick();
            e.children[0].style.display = "block";
        });
    });
    //Cart me add karne ke liye
    addcart.addEventListener("click", ()=>{
        addtoCart(addcart.id);
        location.href = "http://127.0.0.1:5500/Cart.html"
    })

    // //quantity decrease 
    // decreasebtn.addEventListener('click', function(){
    //     decreaseCount(decreasebtn.id);

    // })

    // //quantity increase
    // increasebtn.addEventListener('click', ()=>{
    //     increaseCount(decreasebtn.id);
    // })
}




let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let q_value = document.querySelector(".q-value");
let select_size = document.querySelectorAll(".select-size");

plus.addEventListener('click', () => {
    let x = parseInt(q_value.innerHTML);
    x += 1;
    let y = x.toString();
    q_value.innerHTML = y;
});

minus.addEventListener("click", () => {
    let x = parseInt(q_value.innerHTML);
    if(x > 1){
        x -= 1;
        let y = x.toString();
        q_value.innerHTML = y;
    }
});

let remove_size_active_effect = () => {
    Array.from(select_size).forEach((e) => {
        // console.log(e.classList)
        e.classList.remove("active");
    });
}

// console.log(select_size);
Array.from(select_size).forEach((e) => {
    e.addEventListener('click', () => {
        remove_size_active_effect();
        e.classList.toggle("active");
    });
});

let select_color = document.querySelectorAll(".select-color");
let select_tick = document.querySelectorAll(".tick");

// console.log(select_color.chil);
let remove_tick = () => {
    Array.from(select_tick).forEach((e) => {
        e.style.display = "none";
    });
}


Array.from(select_color).forEach((e) => {
    e.addEventListener('click', () => {
        remove_tick();
        e.children[0].style.display = "block";
    });
});

// let myDatato = JSON.parse(localStorage.getItem('myobj'));

// console.log(myDatato);
// function getdataLocal(){
//     let itemsHTML=""; 
//     let mineobject = JSON.parse(localStorage.getItem("myobj"));
//     // console.log(mineobject);
    
//         itemsHTML+=`
//             <div class="history1">
//                 <p>Mens > Clothing > <span>Sweatshirts & Hoodies</span></p>
//             </div>
//             <div class="left">
                
//                 <div class="small-image-box">
//                     <!-- <div class="small-image-box"> -->
//                         <div class="small-image"><img src="./description/description_assets/hoodie.remove.bg-removebg-preview.png" alt=""></div>
//                         <div class="small-image"><img src="./description/description_assets/hoodie.remove.bg-removebg-preview.png" alt=""></div>
//                         <div class="small-image"><img src="./description/description_assets/hoodie.remove.bg-removebg-preview.png" alt=""></div>
//                         <div class="small-image"><img src="./description/description_assets/hoodie.remove.bg-removebg-preview.png" alt=""></div>
//                         <!-- <div class="small-image"></div> -->
//                     <!-- </div> -->
//                 </div>
//                 <div class="big-image">
//                     <img src="${mineobject.image}" alt="">
//                 </div>
//             </div>
//             <div class="right">
//                 <div class="history2">
//                     <p>Mens > Clothing > Sweatshirts & Hoodies</p>
//                 </div>
//                 <div class="product-name">
//                     <p>${mineobject.title}</p>
//                 </div>
//                 <div class="price-and-review">
//                     <div class="price">
//                         <p class="new-price">₹<span>${mineobject.price}</span></p>
//                         <p class="old-price">₹<span>1200</span></p>
//                     </div>
//                     <div class="rating">
//                         <i class="fas fa-star"></i>
//                         <p><span>4.9</span> (69 reviews)</p>
//                     </div>
//                 </div>
//                 <div class="size">
//                     <p class="heading">Select Size:</p>
//                     <div class="size-box">
//                         <div class="select-size"><span class="size-1">XS</span></div>
//                         <div class="select-size"><span class="size-2">S</span></div>
//                         <div class="select-size"><span class="size-3">M</span></div>
//                         <div class="select-size"><span class="size-4">L</span></div>
//                         <div class="select-size"><span class="size-5">XL</span></div>
//                         <div class="select-size"><span class="size-6">XXL</span></div>
//                     </div>
//                 </div>
//                 <div class="color">
//                     <p class="heading">Select Color:</p>
//                     <div class="color-box">
//                         <div class="select-color color1"><i class="fas fa-check tick"></i></div>
//                         <div class="select-color color2"><i class="fas fa-check tick"></i></div>
//                         <div class="select-color color3"><i class="fas fa-check tick"></i></div>
//                         <div class="select-color color4"><i class="fas fa-check tick"></i></div>
//                         <div class="select-color color5"><i class="fas fa-check tick"></i></div>
//                         <div class="select-color color6"><i class="fas fa-check tick"></i></div>
//                     </div>
//                 </div>
//                 <div class="quantity">
//                     <p class="heading">Quantity: </p>
//                     <div class="q-box">
//                         <div class="plus"><i class="fas fa-plus"></i></div>
//                         <span class="q-value">1</span>
//                         <div class="minus"><i class="fas fa-minus"></i></div>
//                     </div>
//                 </div>
//                 <div class="promo-note">
//                     <p><i class="fa-solid fa-tags"></i> Enjoy upto ₹300 off with Promo code: <span>#478294</span> Until 9/10/22</p>
//                 </div>
//                 <div class="btns">
//                     <button class="btn btn-primary">
//                         <p>Add To Cart</p>
//                         <i class="fas fa-bag-shopping"></i>
//                     </button>
//                     <button class="btn btn-secondary">
//                         <p>Favroite</p>
//                         <p class="fas fa-heart"></p>
//                     </button>
//                 </div>
//             </div>
        
        
//         `
//     document.querySelector(".product").innerHTML = itemsHTML;
// };

// getdataLocal();
