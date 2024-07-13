let menuBtn = document.querySelector('.menu-btn');
let aside = document.getElementsByTagName("aside")[0];
let overlay = document.querySelector(".overlay")
menuBtn.addEventListener("click",()=>{
  aside.classList.remove("-translate-x-full")
  overlay.classList.remove("hidden")
})
let menuClose = document.querySelector(".menu-close");
menuClose.addEventListener("click",()=>{
  aside.classList.add("-translate-x-full")
  overlay.classList.add("hidden")
})
overlay.addEventListener("click",()=>{
  aside.classList.add("-translate-x-full")
  overlay.classList.add("hidden")
})