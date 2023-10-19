const primaryHeader = document.querySelector('.primary-header')

const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

// create event listener
navToggle.addEventListener('click', ()=> {
    primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true)

    // navToggle.classList.toggle("opened");
    primaryNav.toggleAttribute("data-visible");

    primaryHeader.toggleAttribute('data-overlay');
})
