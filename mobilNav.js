const menuResponsive = document.querySelector('.toggle-menu');
const iconeToggle = document.querySelector('.icone-toggle');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');

iconeToggle.addEventListener('click', () => {
    menuResponsive .classList.toggle('hidden');
})

function displayDesktopMenu() { 
    if(mobileMenu == mobileMenu.classList('hidden')) { 
        console.log(mobileMenu);
        desktopMenu.classList.remove('hidden')
    }
    
};