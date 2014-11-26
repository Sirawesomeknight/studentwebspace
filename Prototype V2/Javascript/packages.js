function load(){
document.getElementById("home").addEventListener("click",goHome);
document.getElementById("packages").addEventListener("click",goPackages);
document.getElementById("plugins").addEventListener("click",goPlugins);
document.getElementById("profile").addEventListener("click",goProfile);
document.getElementById("edu").addEventListener("click",org1);
document.getElementById("news").addEventListener("click",org2);
//document.getElementById("soc").addEventListener("click",goSoc());
}

//Navigation Functions
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

//Organization Functions
function org1(){
cleanup("a");
}
function org2(){
cleanup("b");
}
function org3(){
cleanup("c");
}

function cleanup(section){
//Remove Organization Elements
var parent = document.getElementById("infodiv");
var child = [document.getElementById("edu"),document.getElementById("news"),document.getElementById("soc"),document.getElementById("subtitle")];
for(i = 0; i < child.length; i++){
parent.removeChild(child[i]);
}
if(section == "a"){
goEdu(parent);
}else if(section == "b"){
goNews(parent);
}else if(section == "c"){

}else{

}
}

function goEdu(parent){

//Initialize New Elements
//3 Titles
var list = [];
var titles = [];
var buttons = [];
var breakline = [];
var num = 3;
for(i = 0; i < num; i++){
list[i] = document.createElement("p");
titles[i] = document.createElement("p");
buttons[i] = document.createElement("button");
breakline[i] = document.createElement("br");
if(i == num - 1){
buttons[num] = document.createElement("button");
breakline[num] = document.createElement("br");
}
}
//Initialize new content strings
var bstring = "-";
var edmodostring = ["Version 1.1","Gets Notifications","Gets Due Dates"];
var schlstring = ["Version 1.1","Gets Notifications","Gets Due Dates","Gets Tests"];
var googstring = ["Version 1.0","Displays IFrame"];

//Initialize properties for titles
titles[0].innerHTML = "EDMODO Features:";
titles[1].innerHTML = "SCHOOLOGY Features:";
titles[2].innerHTML = "GOOGLE CLASSROOM Features:";
for(i = 0; i < titles.length; i++){
titles[i].style.color = "white";
}
//Initialize properties for buttons
buttons[0].innerHTML = "Install Edmodo";
buttons[0].addEventListener("click",install('ed'));
buttons[0].style.width = "70px";
buttons[0].style.height = "40px";
buttons[1].innerHTML = "Install Schoology";
buttons[1].addEventListener("click",install('sch'));
buttons[1].style.width = "75px";
buttons[1].style.height = "40px";
buttons[2].innerHTML = "Install Google Classroom";
buttons[2].addEventListener("click",install('gc'));
buttons[2].style.width = "80px";
buttons[2].style.height = "50px";
buttons[3].innerHTML = "Back";
buttons[3].addEventListener("click",back);

//Draw to Document
for(x = 0; x < num; x++){
parent.appendChild(titles[x]);
for(i = 0; i < edmodostring.length; i++){
list[x].innerHTML += bstring + edmodostring[i] + "<br>";
}
parent.appendChild(list[x]);
parent.appendChild(buttons[x]);
parent.appendChild(breakline[x]);
if(x == num - 1){
parent.appendChild(breakline[num]);
parent.appendChild(buttons[num]);
}
}
}

function goNews(){
var list = [];
var titles = [];
var buttons = [];
var breakline = [];
var num = 3;
for(i = 0; i < num; i++){
list[i] = document.createElement("p");
titles[i] = document.createElement("p");
buttons[i] = document.createElement("button");
breakline[i] = document.createElement("br");
if(i == num - 1){
buttons[num] = document.createElement("button");
breakline[num] = document.createElement("br");
}
}
var bstring = "-"
var cnnstring = ["Version 1.0","Gets Random News Story"];
var nytimestring = ["Version 1.0","Gets Random News Story"];
var tribunestring = ["Version 1.0","Gets Random News Story"];
}

function install(name){
if(name == "ed"){
		//Install Edmodo REQUIRES SQL
}else if(name == "sch"){
		//Install Schoology REQUIRES SQL
}else if(name == "gc"){
		//Install Google Classroom REQUIRES SQL
}else{
	alert("ERROR INSTALLING PACKAGE");
}
}

function back(){

}