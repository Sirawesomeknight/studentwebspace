function load(){
var getuser = window.localStorage.getItem("mySharedData");
document.getElementById("welback").innerHTML = "Welcome back "+getuser;

var getedmodo = window.localStorage.getItem("eddata");
var getGCclass = window.localStorage.getItem("GCdata");
var getSchl = window.localStorage.getItem("Scdata");
if(getedmodo == "true"){
var fED = document.createElement("iframe");
fED.src = "https://www.edmodo.com/home";
fED.width = "100%";
fED.height = "500px";
document.getElementById("iframes").appendChild(fED);
}
if(getGCclass == "true"){
var fGC = document.createElement("iframe");
fGC.src = "https://www.google.com/edu/classroom/";
fGC.width = "100%";
fGC.height = "500px";
document.getElementById("iframes").appendChild(fGC);
}
if(getSchl == "true"){
var fSC = document.createElement("iframe");
fSC.src = "https://www.schoology.com/home.php";
fSC.width = "100%";
fSC.height = "500px";
document.getElementById("iframes").appendChild(fSC);
}
}
function about(){
alert("Made By: James Hulsizer in Affiliation with the Francis W. Parker School Version 1");
}
function logout(){
location.href = "index.html";
}