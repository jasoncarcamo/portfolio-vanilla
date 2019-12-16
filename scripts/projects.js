let screenWidth = window.innerWidth;
const menuBurger = document.getElementById("menu-burger");
const navLinks = document.getElementById("nav-links");
const closeMenuButton = document.getElementById("close-burger-menu");
const frontendProjects = document.getElementsByClassName("project-img");
const projects = document.getElementsByClassName("project");

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

function displayProjectSection(){
    const p = document.querySelectorAll("#projects-sections > p");
    const projects = document.querySelectorAll("#projects-sections > section");
    const arrow = document.getElementById("go-back-projects");

    arrow.addEventListener("click", ()=>{
        arrow.classList.toggle("show-project-arrow");
        
        Array.from(projects).forEach( ( pro, index) => {
            pro.classList.remove("display-project-section");
        });
        
        Array.from(p).forEach( ps => {
            ps.classList.toggle("hide");
        });
    });

    Array.from(p).forEach( (element, index) => {
        element.addEventListener("click", ()=>{
            arrow.classList.toggle("show-project-arrow");
            projects[index].classList.toggle("display-project-section");
            Array.from(p).forEach( ps => {
                ps.classList.toggle("hide");
            });
        });
    });
}

function displayProjectInfo(){
    const arrow = document.getElementById("go-back-projects");

    Array.from(frontendProjects).forEach( (project, index) => {
        project.addEventListener("click", (e)=>{

            arrow.classList.toggle("show-project-arrow");
            
            Array.from(projects).forEach( (prjs, index) => {
                prjs.classList.toggle("hide");                
            });

            projects[index].classList.toggle("hide");
            project.parentElement.classList.toggle("display-full-project");
            project.nextElementSibling.classList.toggle("show-project-info");
        })
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
displayProjectSection();
displayProjectInfo();
navLinksScroll();