function home() {

    let tabs = document.querySelector('.tabs');
    let tabDiv = document.createElement('div');

    tabDiv.classList.add('home-tab');
    tabDiv.innerText = "HOME";
    tabs.append(tabDiv);

    (function addContent() {

        tabDiv.addEventListener('click', () => {
            let container = document.querySelector('.container');
            container.innerHTML = "";

            let img = document.createElement('img');
            img.src = 'imgs/pizza.jpg';

            container.append(img);
        })
    })();
}

export {
    home
}