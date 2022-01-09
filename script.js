const navbarLinkEl = document.querySelectorAll('header nav li a')
const navbar = document.getElementById('mobile-menu')

navbarLinkEl.forEach((el) => {
  el.addEventListener('click', () => {
    navbar.classList.add('hidden')
  })
})