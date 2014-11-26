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
var list = document.createElement("p");
var list2 = document.createElement("p");
var list3 = document.createElement("p");
var title1 = document.createElement("p");
var title2 = document.createElement("p");
var title3 = document.createElement("p");
var bstring = "-";
var edmodostring = ["Version 1.1","Gets Notifications","Gets Due Dates"];
var schlstring = ["Version 1.1","Gets Notifications","Gets Due Dates","Gets Tests"];
var googstring = ["Version 1.0","Displays IFrame"];
title1.innerHTML = "EDMODO Features:";
title2.innerHTML = "SCHOOLOGY Features:";
title3.innerHTML = "GOOGLE CLASSROOM Features:";
title1.style.color = "white";
title2.style.color = "white";
title3.style.color = "white";
parent.appendChild(title1);
for(i = 0; i < edmodostring.length; i++){
list.innerHTML += bstring + edmodostring[i] + "<br>";
}
parent.appendChild(list);
parent.appendChild(title2);
for(i = 0; i < schlstring.length; i++){
list2.innerHTML += bstring + schlstring[i] + "<br>";
}
parent.appendChild(list2);
parent.appendChild(title3);
for(i = 0; i < googstring.length; i++){
list3.innerHTML += bstring + googstring[i] + "<br>";
}
parent.appendChild(list3);
}
