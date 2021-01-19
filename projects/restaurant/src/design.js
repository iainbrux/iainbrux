import { aboutUs } from './about-us';
import { home } from './home';
import { contactUs } from './contact-us';

function render() {
    const content = document.querySelector('#content');

    (function addHeader() {
        let header = document.createElement('header');
        let h1 = document.createElement('h1');
        let h2 = document.createElement('h2');
        content.append(header);
        header.append(h1);
        header.append(h2);
        h1.innerText = "Welcome to Iain's Pizza Parlour!";
        h2.innerText = "We make the finest craft pizzas, specifically to your taste."
    })();

    (function addTabs() {
        let nav = document.createElement('nav');

        nav.classList.add('tabs');
        content.append(nav);

        home();
        aboutUs();
        contactUs();
    })();

    (function addContainer() {
        let div = document.createElement('div');
        div.classList.add('container');
        content.append(div);
    })();

    const container = document.querySelector('.container'); //Add functions for container manipulation below only

    (function addImage() {
        let img = document.createElement('img');

        img.src = 'imgs/pizza.jpg';
        container.append(img);
        
    })();

}

export { render }