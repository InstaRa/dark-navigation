// CREATE ACTIONS TO LINKS NAVIGATION
const navigationLinks = document.querySelectorAll('.main-navigation .link');

navigationLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.main-navigation .link.-active').classList.remove('-active')
        link.classList.add('-active')
    })
})