let menuBtn = document.querySelector(".menu-btn");
let aside = document.getElementsByTagName("aside")[0];
let overlay = document.querySelector(".overlay");
menuBtn.addEventListener("click", () => {
  aside.classList.remove("-translate-x-full");
  overlay.classList.remove("hidden");
});
let menuClose = document.querySelector(".menu-close");
menuClose.addEventListener("click", () => {
  aside.classList.add("-translate-x-full");
  overlay.classList.add("hidden");
});
overlay.addEventListener("click", () => {
  aside.classList.add("-translate-x-full");
  overlay.classList.add("hidden");
});
let exploreSlides = document.querySelectorAll(".change-slide div");
let changeSpan = document.querySelector(".change-span");
let slides = document.querySelectorAll(".slides .slide");
exploreSlides.forEach((slide, index) => {
  slide.addEventListener("click", (e) => {
    exploreSlides.forEach((el) => {
      el.classList.remove("active");
    });
    e.target.classList.add("active");
    let x = index;
    if (index == 0) {
      changeSpan.classList.add("first-slide");
      changeSpan.classList.remove("second-slide", "third-slide");
    } else if (index == 1) {
      changeSpan.classList.add("second-slide");
      changeSpan.classList.remove("first-slide", "third-slide");
    } else {
      changeSpan.classList.add("third-slide");
      changeSpan.classList.remove("first-slide", "second-slide");
    }
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    slides[x].classList.add("active");
  });
});
let scrollLeft = document.querySelector(".scroll-left");
let scrollRight = document.querySelector(".scroll-right");
scrollLeft.addEventListener("click", () => {
  handleScroll(350);
});
scrollRight.addEventListener("click", () => {
  handleScroll(-350);
});
function handleScroll(direction) {
  let slide = document.querySelector(".slide.active");
  slide.scrollLeft += direction;
}
let onetime = true;
window.addEventListener("scroll", () => {
  if (window.scrollY > 200 && onetime) {
    if (!window.matchMedia("(min-width: 1500px)").matches) {
      scrollLeft.style.cssText = "visibility:visible; opacity:0.7;";
      scrollRight.style.cssText = "visibility:visible; opacity:0.7;";
    }
    slides[0].classList.add("active");
    onetime = false;
  }
});
let office = 0;
let officeBtns = document.querySelectorAll(".office-btn");
officeBtns[0].addEventListener("click", () => {
  handleOffice(1);
});
officeBtns[1].addEventListener("click", () => {
  handleOffice(-1);
});
function handleOffice(change) {
  office += change;
  let slides = document.querySelectorAll(".office-slide");
  let officeslides = document.querySelector(".office-slides");
  if (office >= 3) {
    office = 3;
    officeBtns[0].classList.remove("max");
    officeBtns[1].classList.add("max");
  } else if (office <= 0) {
    office = 0;
    officeBtns[1].classList.remove("max");
    officeBtns[0].classList.add("max");
  } else {
    officeBtns.forEach((btn) => {
      btn.classList.remove("max");
    });
  }
  slides.forEach((slide, index) => {
    slide.classList.remove("active");
  });
  let x = 100
  if(window.matchMedia("(max-width:990px)").matches){
    x=85
  }
  if(window.matchMedia("(max-width:730px)").matches){
    x=46
  }
  console.log(slides[0].scrollWidth);
  officeslides.scrollLeft=office * slides[0].scrollWidth + x * office
  slides[office].classList.add("active");
}
