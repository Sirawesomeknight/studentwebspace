function load(){
var getuser = window.localStorage.getItem("mySharedData");
document.getElementById("welback").innerHTML = "Welcome back "+getuser;
}