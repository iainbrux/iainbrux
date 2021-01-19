function contactUs() {
    let tabs = document.querySelector('.tabs');
    let tabDiv = document.createElement('div');

    tabDiv.classList.add('contact-us-tab');
    tabDiv.innerText = "CONTACT US";
    tabs.append(tabDiv);

    (function addContent() {

        tabDiv.addEventListener('click', () => {
            let container = document.querySelector('.container');
            container.innerHTML = "";
            
            let headerDiv = document.createElement('div');
            headerDiv.classList.add('contact-us-header');
            headerDiv.innerText = "Contact us!"

            let informationDiv = document.createElement('div');

            let p1 = document.createElement('p');
            p1.classList.add('p1');
            let p2 = document.createElement('p');
            p2.classList.add('p2');
            let p3 = document.createElement('p');
            p3.classList.add('p3');
            let p4 = document.createElement('p');
            p4.classList.add('p4');

            p1.innerText = `For reservations please ring: 0800-PIZZA-4-ME`;
            p2.innerText = `Or email us on: reservations@pizzaparlour.co.uk`;
            p3.innerText = `Alternatively you can stop on by at...`;
            p4.innerText = `Iain's Italian Pizza Parlour, 12 Food Place, Lancashire, LA1`

            container.append(headerDiv, informationDiv, p1, p2, p3, p4);
        })
    })();
}

export {
    contactUs
}