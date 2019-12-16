let screenWidth = window.innerWidth;
const menuBurger = document.getElementById("menu-burger");
const navLinks = document.getElementById("nav-links");
const closeMenuButton = document.getElementById("close-burger-menu");

function handleScreenSize(){
    window.addEventListener("resize", ()=>{
        screenWidth = window.innerWidth;
    });
}

function handleMenuBurger(){
    menuBurger.addEventListener("click", ()=>{
        menuBurger.classList.toggle("hide-menu-burger");
        closeMenuButton.classList.toggle("show-close-menu");
        navLinks.classList.toggle("display-links");
    });
}

function closeBurgermenu(){
    closeMenuButton.addEventListener("click", ()=>{
        menuBurger.classList.toggle("hide-menu-burger");
        closeMenuButton.classList.toggle("show-close-menu");
        navLinks.classList.toggle("display-links");
    });
}

function navLinksScroll(){
    navLinks.addEventListener("touchmove", (e)=>{
        e.preventDefault();
    });
}

handleScreenSize();
handleMenuBurger();
closeBurgermenu();
navLinksScroll();
