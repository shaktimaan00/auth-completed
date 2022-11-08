let loginorsignup = document.getElementById("LoginOrSignUp");
let logOut = document.querySelector(".logout");

firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        // location.replace = "../login-page/Login.html";
        loginorsignup.style.display = "block";
        logOut.style.display = "none";
        document.getElementById("user").innerHTML = "User";
        // location.replace("../Sign Up/signUp.html");
    }else{
        loginorsignup.style.display = "none";
        // logOut.style.display = "none";
        document.getElementById("user").innerHTML = user.email;   
        // alert(user.);                
    }
})

// logOut.addEventListener('click', logout());

function logout(){
    alert("singout successful");
    firebase.auth().signOut()
}
