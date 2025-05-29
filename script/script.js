let navbar =document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick =() =>{
  navbar.classList.toggle('show');
  // shoppingEl.classList.remove('show')
}

let swiper = new Swiper(".mySwiper", {
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
  });
  const shoppingEl = document.querySelector('.shopping-cart')
const cartEl = document.querySelector('#cart-btn')

cartEl.addEventListener('click', ()=>{
    shoppingEl.classList.toggle('show')
})

let swiperEl = new Swiper(".review-slider", {
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
});




