function login(){
var user = document.getElementById("usr").value;
var pass = document.getElementById("pwd").value;
if(user == "Admin" && pass == "password"){
window.location.href = "mainpage.html";
window.localStorage.setItem("mySharedData",user);
}else{
alert("Username or Password was incorrect");
}
}