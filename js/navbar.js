burger = document.querySelector('.burger')
list = document.querySelector('.list')
navbar = document.querySelector('.navbar')



burger.addEventListener('click', ()=>{
  navbar.classList.toggle('nav-height');
  list.classList.toggle('nav-vis');
})
