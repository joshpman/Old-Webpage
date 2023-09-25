let startScrollPos = window.scrollY;

window.onscroll=function(){
    let currentScrollPos = window.scrollY;
    if(startScrollPos>currentScrollPos){
        document.getElementById("navHeader").style.top="0px";
    }else{
        document.getElementById("navHeader").style.top="-100px";
    }
    startScrollPos=currentScrollPos;
}