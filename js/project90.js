
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";  
import { getFirestore, getDoc, setDoc, query, serverTimestamp, collection, onSnapshot, doc, addDoc, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";


//add your credentials from firebase project
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

const colRef1 = collection(db , 'Product-bd');

// getDocs(colRef)
//   .then((snapshot)=>{
//     console.log(snapshot.docs);
//   })

//snapshot of the whole "main" document.
onSnapshot(colRef1, (snapshot)=>{
  let cartItems=[];
  snapshot.docs.forEach((doc)=>{
    cartItems.push({ 
      image: doc.data().image1,
      title: doc.data().title,
      price: doc.data().price,
      p_id: doc.id })
  })
  let section1=[];
  // section1 = cartItems.splice(0, 7);
  // console.log(section1);
  console.log(cartItems);
  generatecartItems(cartItems);
})



// import { collection, onSnapshot, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";
// import { db } from "../js/firebase";

// const colRef = collection(db, 'main');
// console.log(db);
// onSnapshot(colRef, (snapshot)=>{
//   let cartItems = [];
//   snapshot.docs.forEach((doc)=>{
//     console.log( ...doc.data());
//   })
  
//   // generateCartItems(cartItems);
// }

async function addingtoDescription(itemId){
  console.log(itemId);
  let cartItem = doc(db, 'Product-bd', itemId);
  // if(cartItem.size===0){
  //   cartItem = doc(db, 'main/5631yS3CtRRmD0dTLfw9/section2', itemId);
  // }
  // console.log(cartItem);
  const docu = await getDoc(cartItem);
  if (docu.exists()) {
    await addDoc(collection(db, 'Descrip-db'), {
      ...docu.data(),
      p_id: itemId,
      createdAt: serverTimestamp()
    });
    console.log(docu.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
      //going to des. page
      location.href = "https://127.0.0.1:5500/description.html";
   
}

function generatecartItems(cartItems){
  let itemsHTML="";
  let section_one="";
  
  cartItems.forEach(items=>{
    itemsHTML+=`
    <section class="swiper-slide arrival-cards clicktoCart" data-id="${items.p_id}">
      <div class="arrival-image">
          <img src="${items.image}" alt="">
      </div>
      <div class="arrivals-info">
          <h6>${items.title}</h6>
          <span>₹${items.price}</span>
          <a href="#" class="product-cart" data-id="${items.p_id}">Add To Cart</a>
      </div>
      <div class="arrival-cards-2 arrival-cards-3 arrival-cards-4 arrival-cards-5">
          -$20
      </div>
      <div class="arrival-cards-icon">
        <i class="fa-regular fa-heart"></i>
      </div>
    </section>
    `
  });

  // section1.forEach(items=>{
  //   section_one+=`
  //   <section class="swiper-slide arrival-cards clicktoCart" data-id="${items.id}">
  //     <div class="arrival-image">
  //         <img src="${items.image}" alt="">
  //     </div>
  //     <div class="arrivals-info">
  //         <h6>${items.title}</h6>
  //         <span>$${items.price}</span>
  //         <a href="#" class="product-cart" id="${items.id}">Add To Cart</a>
  //     </div>
  //     <div class="arrival-cards-2 arrival-cards-3 arrival-cards-4 arrival-cards-5">
  //         -$20
  //     </div>
  //     <div class="arrival-cards-icon">
  //       <i class="fa-regular fa-heart"></i>
  //     </div>
  //   </section>
  //   `
  // });

  document.querySelector(".getingdata").innerHTML=itemsHTML;
  // document.querySelector(".getdata").innerHTML=section_one;
  createEventLinstner();
}


function createEventLinstner(){
  let clicktoDescription = document.querySelectorAll(".clicktoCart");
  // let clicktoCart = document.querySelectorAll(".product-cart");
  // clicktoCart.forEach((button)=>{
  //   button.addEventListener("click", function(){
  //     addtoCart(button.dataset.id);
  //     console.log("ok");
  //   })
  // })

  clicktoDescription.forEach((button)=>{
    button.addEventListener("click", async function(){
      addingtoDescription(button.dataset.id);
      console.log(button.dataset.id);
    })
  })
}















let icon;
let searchbox;
let searchicon;
let hamburger;
let sidenav;
let search1;
let line1;
let line2;
let line3;
let dropmenu;
let content;
let dropdown_icon;
let icon2;
let icon3;
icon2=document.querySelector(".icon-3");
icon3=document.querySelector(".icon-3-content");
icon2.addEventListener("click",xyz4);
function xyz4()
{
  icon3.classList.toggle("active11");
}

dropdown_icon = document.querySelectorAll(".dropdown-icon");
dropmenu = document.getElementsByClassName("sidenav-item1");
for (let i = 0; i < dropmenu.length; i++) {
  dropmenu[i].addEventListener("click", () => {
    let result = dropmenu[i].classList.toggle("active6");
    if (result) {
      dropdown_icon[i].classList.add("active8");
    }
    else {
      dropdown_icon[i].classList.remove("active8");
    }
  })
}
hamburger = document.querySelector(".hamburger");
line1 = document.querySelector(".line-1");
line2 = document.querySelector(".line-2");
line3 = document.querySelector(".line-3")
sidenav = document.querySelector(".sidenav");
hamburger.addEventListener("click", xyz2);
function xyz() {
  let x;
  x = searchbox.classList.toggle("active");



}
function xyz2() {
  sidenav.classList.toggle("active3");
  line1.classList.toggle("active4");
  line2.classList.toggle("active5");
  line3.classList.toggle("active1");
}
function xyz3() {

}
/*swiper js starts here*/
var swiper = new Swiper(".home-slider", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    // dynamicBullets: true,
    loop: true,
    grabCursor: true,
  },
});
/*swiper js for second slider */
var swiper = new Swiper(".home-slider2", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    grabCursor: true
  },
});

var swiper = new Swiper(".card-slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 2000,
  }
  ,
  breakpoints: {
    550: {
      slidesPerView: 2,
      spaceBetween: 5,

    },
    768: {
      loop: true,
      slidesPerView: 2,
      spaceBetween: 20,

    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,


    },
  },
});


/*product-cards*/
var swiper = new Swiper(".arrivals-slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 0,
    },
  },
});
const countdown = () => {
  const countdate = new Date("Nov 29, 2022 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = countdate - now;
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const textday = Math.floor(gap / day);
  const texthour = Math.floor((gap % day) / hour);
  const textminute = Math.floor((gap % hour) / minute);
  const textsecond = Math.floor((gap % minute) / second);
  document.querySelector(".day").innerText = textday;
  document.querySelector(".hour").innerText = texthour;
  document.querySelector(".min").innerText = textminute;
  document.querySelector(".sec").innerText = textsecond;



};

setInterval(countdown, 1000);


/*seller section js*/
var swiper = new Swiper(".seller-slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 0,
    },
  },


});
