function aboutUs() {
    let tabs = document.querySelector('.tabs');
    let tabDiv = document.createElement('div');

    tabDiv.classList.add('about-us-tab');
    tabDiv.innerText = "ABOUT US";
    tabs.append(tabDiv);

    (function addContent() {

        tabDiv.addEventListener('click', () => {
            let container = document.querySelector('.container');
            container.innerHTML = "";
            
            let headerDiv = document.createElement('div');
            headerDiv.classList.add('about-us-header');
            headerDiv.innerText = "About us..."

            let informationDiv = document.createElement('div');
            informationDiv.classList.add('about-us-info');
            let p1 = document.createElement('p');
            p1.classList.add('p1');
            let p2 = document.createElement('p');
            p2.classList.add('p2');
            let p3 = document.createElement('p');
            p3.classList.add('p3');
            let p4 = document.createElement('p');
            p4.classList.add('p4');

            p1.innerText = `We're a humble pizza company that started in 1996.`;
            p2.innerText = `Our aim was simple...`;
            p3.innerText = `To create the finest pizza in all of Lancashire!`;
            p4.innerText = `Head to the CONTACT US section to find out where we're located, and for reservations.`

            container.append(headerDiv, informationDiv, p1, p2, p3, p4);
        })
    })();
}

export {
    aboutUs
}