function load(){
var getuser = window.localStorage.getItem("mySharedData");
document.getElementById("welback").innerHTML = "Welcome back "+getuser;
}
function about(){
alert("Made By: James Hulsizer in Affiliation with the Francis W. Parker School Version 1");
}
function logout(){
location.href = "index.html";
}
function IEdmodo(){
var b = true;
window.localStorage.setItem("eddata",b);
}
function IGClass(){
var c = true;
window.localStorage.setItem("GCdata",c);
}
function ISchlo(){
var d = true;
window.localStorage.setItem("Scdata",d);
}