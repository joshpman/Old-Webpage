let startScrollPos = window.scrollY;
const hamMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("mobileMenuClose");
const header = document.getElementsByClassName("header")[0];
const homeWrapper = document.getElementById("home__wrapper");
const headerWrapper = document.getElementsByClassName("header__wrapper")[0];
const headerNav = document.getElementById("navHeader");
const projectButton = document.getElementById("projects__wrapper");
const resumeButton = document.getElementById("resume__wrapper");
const logoFooter = document.getElementsByClassName("logoFooter")[0];
const githubLogoFooter = document.getElementById("github__footer");
const linkedInFooter = document.getElementById("linkedin__footer");
const body = document.body;
let width = window.innerWidth;

window.onscroll=function(){
    let currentScrollPos = window.scrollY;
    if(currentScrollPos>10){
        if(startScrollPos>currentScrollPos){
                document.getElementById("navHeader").style.top="0px";
        }else{
                document.getElementById("navHeader").style.top="-175px";
        }
    }
    width=window.innerWidth;
    startScrollPos=currentScrollPos;
}

hamMenu.addEventListener('click', ()=>{
   header.style.height = "100%";
   headerWrapper.style.height= "100vh";
   projectButton.style.display = "block";
   resumeButton.style.display = "block";
   homeWrapper.style.display = "block";
   hamMenu.style.display = "none";
   closeMenu.style.display = "block";
    body.style.overflow="hidden";
    logoFooter.id="logoFooterNav";
    headerNav.classList.add("headerNav");
   

});
closeMenu.addEventListener('click', ()=>{
    header.style.height = "10%";
    headerWrapper.style.height= "10vh";
    projectButton.style.display = "none";
   resumeButton.style.display = "none";
   homeWrapper.style.display = "none";
    closeMenu.style.display = "none";
    hamMenu.style.display = "block";
    body.style.overflow="visible";
    logoFooter.id = "";
    githubLogoFooter.style.width = null;
    linkedInFooter.style.width = null;
    headerNav.classList.remove("headerNav");
 });
