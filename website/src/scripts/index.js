import { removeActiveClass, portfolioRender, homeRender } from './DOM'

(function renderTabs() {

    let home = document.querySelector('.home');
    let portfolio = document.querySelector('.portfolio');
    let about = document.querySelector('.about');
    let contact = document.querySelector('.contact');

    home.addEventListener('click', () => {
        homeRender();
        removeActiveClass();
        home.classList.add('active');
    })

    portfolio.addEventListener('click', () => {
        removeActiveClass();
        portfolio.classList.add('active');
        portfolioRender();
    })

    about.addEventListener('click', () => {
        removeActiveClass();
        about.classList.add('active');
    })

    contact.addEventListener('click', () => {
        removeActiveClass();
        contact.classList.add('active');
    })

})();

