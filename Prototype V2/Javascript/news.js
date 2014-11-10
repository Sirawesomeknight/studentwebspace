function load(){
document.getElementById("home").addEventListener("click",goHome);
document.getElementById("about").addEventListener("click",goAbout);
document.getElementById("news").addEventListener("click",goNews);
document.getElementById("register").addEventListener("click",goRegister);
document.getElementById("login").addEventListener("click",goL);
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
function goL(){
location.href = "login.html";
}