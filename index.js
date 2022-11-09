const menuIconEl = document.getElementById("menu-icon");

const menuIconCloseEl = document.getElementById("menu-icon-close");

const menu = document.getElementById("menu-list")

// if(window.screen.availWidth>375){
//     menu.style.display="inline"
//     menuIconCloseEl.style.display="none"
//     menuIconEl.style.display=
// }
menuIconEl.addEventListener('click', ()=>{
    menuIconEl.style.display="none";
    menuIconCloseEl.style.display = "block";
    menu.style.display="flex"

})
menuIconCloseEl.addEventListener('click', ()=>{
    menuIconEl.style.display="block";
    menuIconCloseEl.style.display = "none";
    menu.style.display="none"
})