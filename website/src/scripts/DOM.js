import { addPortfolioContent } from "./portfolio";

export function removeActiveClass() {
    let tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'))
}

function removeHeader() {
    let header = document.querySelector('header');
    header.style.display = "none";
}

function displayHeader() {
    let header = document.querySelector('header');
    header.style.display = "block";
}

export function portfolioRender() {

    removeHeader();
    
    let container = document.querySelector('.main-container');
    container.innerHTML = "";
    container.style.backgroundImage = "";
    container.style.backgroundColor = "rgba(0,0,0,0.4)";

    let div = document.createElement('div');
    div.classList.add('main-portfolio');
    container.append(div);

    addPortfolioContent();

}

export function homeRender() {

    displayHeader();

    let container = document.querySelector('.main-container');
    container.innerHTML = "";
    container.style.backgroundImage = "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0));";
    container.style.backgroundColor = "";

    let div = document.createElement('div');
    div.classList.add('home');
    div.innerText = "THIS IS INFO ABOUT THE HOME PAGE";
    container.append(div);
}