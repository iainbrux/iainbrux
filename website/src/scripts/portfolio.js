import Project from './Projects'

let projectsArray = [];

let project1 = new Project('./imgs/calculator.png', 'calculator', 'https://github.com/iainbrux/calculator', 'https://iainbrux.github.io/iainbrux/portfolio/calculator/', 'This is a calculator')
let project2 = new Project(null, 'library', 'https://github.com/iainbrux/iainbrux/tree/main/portfolio/library', 'https://iainbrux.github.io/iainbrux/portfolio/library/', 'This is a library')

function addToArray(obj) {
    return projectsArray.push(obj);
}

addToArray(project1);
addToArray(project2);

export function addPortfolioContent() {
    projectsArray.forEach(object => {

        let container = document.querySelector('.main-portfolio');
        let box = document.createElement('div');
        box.classList.add('box');

        let imgDiv = document.createElement('div');
        let img = document.createElement('img');
        let name = document.createElement('div');
        let status = document.createElement('div');
        let gitDiv = document.createElement('div');
        let source = document.createElement('div');
        let livepages = document.createElement('div');
        let desc = document.createElement('div');

        imgDiv.classList.add('img-div');

        img.src = object.img;

        name.classList.add('title');
        name.innerText = object.name;
        
        status.innerText = object.status;

        gitDiv.classList.add('git-div');

        source.classList.add('git-src');
        source.innerText = "SOURCE"

        livepages.classList.add('git-live');
        livepages.innerText = "LIVEPAGES"

        desc.innerText = object.desc;

        gitDiv.append(source, livepages)
        imgDiv.append(img);
        box.append(name, status, gitDiv, desc);
        container.append(box);
    });
}