function load(){
/*
Schoology API https://developers.schoology.com/
Edmodo API https://www.google.com/edu/training/tools/more/apps/level2.html
Google Classroom API https://developers.edmodo.com/edmodo-connect/edmodo-connect-overview-getting-started/

-Make sure to add Contact Page in Profile
-Easily fix the out of alignment issue in profile by using a div for copyright
*/
var getuser = window.localStorage.getItem("mySharedData");
document.getElementById("welback").innerHTML = "Welcome back "+getuser;

var getedmodo = window.localStorage.getItem("eddata");
var getGCclass = window.localStorage.getItem("GCdata");
var getSchl = window.localStorage.getItem("Scdata");
var getFB = window.localStorage.getItem("FBdata");
var getGit = window.localStorage.getItem("Gitdata");

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
if(getFB == "true"){
var fFB = document.createElement("iframe");
fFB.src = "https://www.facebook.com/";
fFB.width = "100%";
fFB.height = "500px";
document.getElementById("iframes").appendChild(fFB);
}
if(getGit == "true"){
var fGT = document.createElement("iframe");
fGT.src = "https://github.com/";
fGT.width = "100%";
fGT.height = "500px";
document.getElementById("iframes").appendChild(fGT);
}
}
function about(){
alert("Made By: James Hulsizer in Affiliation with the Francis W. Parker School Version 1");
}
function logout(){
location.href = "index.html";
}