/*\===================================\*/
/*\== Created By <3 Cherif-Dev o-o* =\*/
/*\=================================\*/

function toggleSideNav() {
    var element = document.querySelector(".side-nav");
    var overlay = document.querySelector(".overlay");
    var overflowy = document.querySelector(".overflow");
    element.classList.toggle("open-nav");
    overlay.classList.toggle("overlay-active");
    overflowy.classList.toggle("overflow-y-hidden");
}
function openList(event) {
    var element = event.target.nextElementSibling;
    element.classList.toggle("nest-list-active");
    event.target.children[0].classList.toggle("fa-rotate-90");
}