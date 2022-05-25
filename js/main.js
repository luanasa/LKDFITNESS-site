function showBackToTopButtonOnScroll() {
    if (scrollY > 200) {
        backToTopButton.classList.add('show') //adding show class on html
    } else {
        backToTopButton.classList.remove('show') // removing show class on html
    }
}

window.addEventListener('scroll', onScroll) //correcting scroll error on body

onScroll()
function onScroll() {
   
   showNavOnScroll()
   showBackToTopButtonOnScroll()

    activeMenuAtCurrentSection(home)
    activeMenuAtCurrentSection(collection)
    activeMenuAtCurrentSection(whyUs)
    activeMenuAtCurrentSection(howTo)

}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal('#home, #home .intro-wrapper, #home .bt-div, #services, #services header, #services .card, #about, #about header, #about content');

