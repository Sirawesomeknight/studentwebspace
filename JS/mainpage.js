function load(){
var getuser = window.localStorage.getItem("mySharedData");
document.getElementById("welback").innerHTML = "Welcome back "+getuser;
}
function about(){
alert("Made By: James Hulsizer in Affiliation with the Francis W. Parker School Version 1");
}