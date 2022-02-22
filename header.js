const logo = document.querySelector('#logo');
const navItems = document.querySelectorAll('nav li');
const heroTitle = document.querySelector('#hero-title');
// const heroArrow = document.querySelector('#arrow img');

window.addEventListener('load', initAnim)

function initAnim() {
    const TLFADE = gsap.timeline();

    TLFADE
    .to(heroTitle,{autoAlpha: 1, y:0, delay:0.2})
    .to(logo,{autoAlpha: 1,scale:1, delay:0})
    .to(navItems, {autoAlpha: 1, y: 0, duration: 0.4, stagger: 0.1}, '-=0.2')
    
}

