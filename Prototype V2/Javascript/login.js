function login(){
var username = document.getElementById("usr").value;
var password = document.getElementById("pass").value;
if(username == "admin" && password == "password"){
location.href = "home.html";
}else if(username == "source" && password == "password"){
location.href = "source.html";
}else{
alert("Username or password was incorrect");
}
}