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
var state = false;
function switchState(){
if(state == false){
document.getElementById("calendarpic").src = "Visuals/weekcal.jpg";
document.getElementById("switch").innerHTML = "Monthly";
state = true;
}else{
document.getElementById("calendarpic").src = "Visuals/testcal.png";
document.getElementById("switch").innerHTML = "Weekly";
state = false
}
}