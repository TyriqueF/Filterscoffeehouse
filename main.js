let toggleBtn = document.getElementById('toggle-btn');
let body = document.body;
let darkMode = localStorage.getItem('dark-mode');

const enableDarkMode = () =>{
   toggleBtn.classList.replace('bxs-sun', 'bxs-moon');
   body.classList.add('dark');
   localStorage.setItem('dark-mode', 'enabled');
}

const disableDarkMode = () =>{
   toggleBtn.classList.replace('bxs-moon', 'bxs-sun');
   body.classList.remove('dark');
   localStorage.setItem('dark-mode', 'disabled');
}

if(darkMode === 'enabled'){
   enableDarkMode();
}

toggleBtn.onclick = (e) =>{
   darkMode = localStorage.getItem('dark-mode');
   if(darkMode === 'disabled'){
      enableDarkMode();
   }else{
      disableDarkMode();
   }
}

// Swiper
var swiper = new Swiper(".mySwiper", {
   spaceBetween: 30,
   centeredSlides: true,
   autoplay: {
     delay: 2500,
     disableOnInteraction: false,
   },
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
 });

 // Menu Open & Close

 let menu = document.querySelector(".menu-icon");
 let navbar = document.querySelector(".navbar");

 menu.onclick = () => {
   menu.classList.toggle("move");
   navbar.classList.toggle("open-menu");
 };

 // Menu Close On Scroll

 window.onscroll = () => {
   menu.classList.remove("move");
   navbar.classList.remove("open-menu");
 };

 // ScrollReveal Anim

 const animate = ScrollReveal({
   origin: "top",
   distance: "60px",
   duration: "2500",
   delay: "400",
 });

 animate.reveal("header");
 animate.reveal(".home-text", { origin: "left" });
 animate.reveal(".home-img", { origin: "bottom" });
 animate.reveal(".book-data, .product-box, .about", { interval: 100 });