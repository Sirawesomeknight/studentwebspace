function load(){
document.getElementById("try").addEventListener("click",goTry);
document.getElementById("home").addEventListener("click",goHome);
document.getElementById("about").addEventListener("click",goAbout);
document.getElementById("news").addEventListener("click",goNews);
document.getElementById("register").addEventListener("click",goRegister);
}
function goHome(){
location.href = "index.html";
}
function goAbout(){
location.href = "about.html";
}
function goNews(){
location.href = "news.html";
}
function goRegister(){
location.href = "register.html";
}
function goTry(){
location.href = "../Prototype V1/index.html";
}