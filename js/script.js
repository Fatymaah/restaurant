let menu = document.querySelector("#menu-btn");
let nav = document.querySelector(".navbar");

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    nav.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    nav.classList.remove('active');
}

document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('.search-form').classList.toggle('active');
}
document.querySelector('#close').onclick = () =>{
    document.querySelector('.search-form').classList.remove('active');
}




let loginForm = document.querySelector('.header .login-form');

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    
}
window.onscroll = () =>{
    loginForm.classList.remove('active');
}

// slides header
var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
   loop:true,
  });


  // slides reviews
  var swiper = new Swiper(".review-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
   loop:true,
   breakpoints: {
       0: {
           slidesPerView: 1,
       },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
    },
   },
  });


  function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
  }
  function fadeOut(){
    setInterval(loader,3000);
  }
  window.onload = fadeOut;
