var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopbutton = document.getElementById("popup-button")

addpopbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})