/*=============== SHOW MENU ===============*/
const navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close"),
  navMenu = document.getElementById("nav-menu");
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLinks = document.querySelectorAll(".nav__link");
const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", linkAction);
});
/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  // when scroll is greaterthan equalto 50 viewport the scroll-header class add to header
  this.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};
window.addEventListener("scroll", scrollHeader);
/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollup = document.querySelector("#scroll-up");
  // when the scroll is greater than 350 viewport the show scroll class will be added to scrollup
  this.scrollY >= 350
    ? scrollup.classList.add("show-scroll")
    : scrollup.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
const scrollActive = ()=>{
  const scrollY = window.pageYOffset
  sections.forEach((current)=>{
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58
    const sectionId = current.getAttribute('id')
    const sectionClass = document.querySelector(`.nav__menu a[href*="${sectionId}"]`)
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      sectionClass.classList.add('active-link')
    }else{
      sectionClass.classList.remove('active-link')
    }
  })
}

window.addEventListener('scroll',scrollActive)
/*=============== DARK LIGHT THEME ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
