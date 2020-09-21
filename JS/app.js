let allPTags = document.querySelectorAll("p");
for(var index = 0; index < allPTags.length; index++) {
    allPTags[index].style.color = "red";
};

let firstPTag = document.querySelector("p");
firstPTag.style.fontSize = "30px";

var headerTitle = document.getElementById("headerTitle");
headerTitle.style.color = "blue";

let footerLinks = document.getElementsByClassName("links");

for(var index = 0; index<footerLinks.length; index++) {
    footerLinks[index].style.color = "red";
};

let h3Tags = document.getElementsByTagName("h3");
for(var index = 0; index < h3Tags.length; index ++) {
    h3Tags[index].style.fontSize = "40px";
};

let newPTag = document.createElement("p");
let newTextNode = document.createTextNode("Injected");
newPTag.appendChild(newTextNode);
document.getElementById("emptyDiv").append(newPTag);

var onlineStore = document.getElementById("onlineStore");

let onlineStoreContainer = document.getElementById("onlineStoreContainer");
onlineStoreContainer.removeChild("onlineStore");

let linksContainer = document.getElementById("linksContainer");
linksContainer.classList.add("background");
linksContainer.classList.remove("background");
linksContainer.classList.toggle("background");