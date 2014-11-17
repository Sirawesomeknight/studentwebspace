function load(){
document.getElementById("home").addEventListener("click",goHome);
document.getElementById("packages").addEventListener("click",goPackages);
document.getElementById("plugins").addEventListener("click",goPlugins);
document.getElementById("profile").addEventListener("click",goProfile);
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