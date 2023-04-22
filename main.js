//-------- abre e fecha menu pelos icones--------//

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}
//------fecha menu pelos nomes ----------------//
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}
//=================MUDAR A SOMBRA DO HEADER =======================//

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})
//=================SWIPER=====================================//
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})

//=============== SCROLL REVEAL=============================

/*const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})
scrollReveal.reveal(
  `
#home .image, #home .text,
#about .image, #about .text,
#services .title, #services .card, #services .text,
#testimonials .header, #testimonials .testimonials,
#contact .text, #contact .links,
footer .logo , footer .brand, footer social`,
  { interval: 100 } 
)*/
//=================== BACK TO TOP VISIBILITY===================//

const backTopButton = document.querySelector('.back-to-top')
window.addEventListener('scroll', function () {
  if (window.scrollY >= 560) {
    backTopButton.classList.add('show')
  } else {
    backTopButton.classList.remove('show')
  }
})