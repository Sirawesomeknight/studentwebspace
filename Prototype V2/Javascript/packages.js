function load(){
document.getElementById("home").addEventListener("click",goHome);
document.getElementById("packages").addEventListener("click",goPackages);
document.getElementById("plugins").addEventListener("click",goPlugins);
document.getElementById("profile").addEventListener("click",goProfile);
document.getElementById("edu").addEventListener("click",goEdu);
//document.getElementById("news").addEventListener("click",goNews);
//document.getElementById("soc").addEventListener("click",goSoc);
}
function goHome(){
location.href = "home.html";
}
function goPackages(){
location.href = "packages.html";
}
function goPlugins(){
location.href = "plugins.html";
}
function goProfile(){
location.href = "profile.html";
}
function goEdu(){
var parent = document.getElementById("infodiv");
var child = document.getElementById("edu");
var child2 = document.getElementById("news");
var child3 = document.getElementById("soc");
var child4 = document.getElementById("subtitle");
parent.removeChild(child);
parent.removeChild(child2);
parent.removeChild(child3);
parent.removeChild(child4);
var list = document.createElement("ul");
var listcomp = document.createElement("li");
var titles = document.createElement("p");
var mainstring = ["Version 1.1","Gets Notifications","Gets Due Dates"];
titles.innerHTML = "EDMODO Features:";
titles.style.color = "white";
listcomp.style.color = "white";
parent.appendChild(titles);
parent.appendChild(list);
for(i = 0; i < mainstring.length; i++){
listcomp.innerHTML = mainstring[i];
list.appendChild(listcomp);
}
}
