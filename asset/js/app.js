/*===== MENU SHOW =====*/ 
const showMenu = (togglemenuID,navmenuID) => {
   const toggle = document.getElementById(togglemenuID),
         nav = document.getElementById(navmenuID);

   if(toggle && nav){
       toggle.addEventListener( "click" ,() =>{
           nav.classList.toggle("show")
       })
   }
}

showMenu( "nav_toggle" , "nav_menu")
/*==================== ACTIVE AND REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav-link")

function linkaction(){
    // active link
    navLink.forEach(n => n.classList.remove("active"))
    this.classList.add("active");

    // remove menu moblie
    const navMenu = document.querySelector('#nav_menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener("click",linkaction))
/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*===== SCROLL REVEAL ANIMATION =====*/
