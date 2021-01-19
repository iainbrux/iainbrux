const content = document.querySelector('.content');
const container = document.querySelector('.container');
const cards = document.querySelectorAll('.card');
const bookButton = document.querySelector('.add-book-button')
const exitButton = document.querySelector('.exit');
const backgroundModal = document.querySelector('.bg-modal');
const submitButton = document.querySelector('.submit');
const removeButtons = document.querySelectorAll('.delete');
const sections = document.querySelectorAll('section');
const userSections = document.querySelectorAll('.user-section');

let library = [];

saveToLocalStorage = () => {
    localStorage.setItem('library', JSON.stringify(library));
}

restoreFromLocalStorage = () => {
    library = JSON.parse(localStorage.getItem('library'));
    if (library === null) {
        library = [];
    }
}

addToLibrary = (object) => {
    library.push(object);
    return saveToLocalStorage();
}

function Book(title, author, numOfPages, readStatus) {
    this.title = title,
        this.author = author,
        this.numOfPages = numOfPages,
        this.readStatus = readStatus;
}

const book1 = new Book('Lord of the Rings', 'J. R. R. Tolkien', 384, true);
const book2 = new Book('Cryptocurrency for Newbs', 'I. Brookes', 1066, true);
const book3 = new Book('ADA for Cardano', 'H. Cimen', 483, false);

addToLibrary(book1);
addToLibrary(book2);
addToLibrary(book3);

for (let i = 0; i < cards.length; i++) {
    let card = cards[i];
    const title = card.querySelector('.title');
    const author = card.querySelector('.author');
    const pages = card.querySelector('.pages');
    const checkbox = card.querySelector('.readbox');

    title.innerText = library[i].title;
    author.innerText = library[i].author;
    pages.innerText = library[i].numOfPages + " pages";
    checkbox.checked = library[i].readStatus;
    if (checkbox.checked) {
        card.classList.add('active');
    }
}

cards.forEach(card => {
    const checkbox = card.querySelector('.readbox');
    checkbox.addEventListener('click', () => {
        checkbox.checked ? card.classList.add('active') : card.classList.remove('active');
    });
});

bookButton.addEventListener('click', () => {
    backgroundModal.style.display = "flex";
})

exitButton.addEventListener('click', () => {
    backgroundModal.style.display = "none";
})


sections.forEach(section => {
    const thisNode = section.querySelector('.card');
    const thisRemoveButton = thisNode.querySelector('.delete');
    const thisTitle = thisNode.querySelector('.title');
    const thisBook = thisTitle.value;
    const findex = library.findIndex(book => book.title == thisBook);
    thisRemoveButton.addEventListener('click', () => {
        section.remove(thisNode);
        library.splice(findex, 1);
        saveToLocalStorage();
    })
})

submitButton.addEventListener('click', () => {
    const inputTitle = document.querySelector('#title');
    const inputAuthor = document.querySelector('#author');
    const inputPages = document.querySelector('#pages');
    const checkbox = backgroundModal.querySelector('.readbox');

    if (inputTitle.value !== "" && inputAuthor.value !== "" && inputPages.value !== "") {
        const newSection = document.createElement('section');
        newSection.classList.add('user-section');
        container.append(newSection);

        const newBook = new Book(inputTitle.value, inputAuthor.value, inputPages.value, checkbox.checked);
        addToLibrary(newBook);

        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card-design', 'card', 'user-card');
        newSection.append(cardDiv);

        const userCard = newSection.querySelector('.user-card');
        const titleDiv = document.createElement('div');
        titleDiv.classList.add('title');
        titleDiv.innerText = "Title: " + newBook.title;

        const authorDiv = document.createElement('div');
        authorDiv.classList.add('author');
        authorDiv.innerText = "Author: " + newBook.author;

        const pagesDiv = document.createElement('div');
        pagesDiv.classList.add('pages');
        pagesDiv.innerText = "Pages: " + newBook.numOfPages;

        const statusDiv = document.createElement('div');
        statusDiv.classList.add('status');

        cardDiv.append(titleDiv);
        cardDiv.append(authorDiv);
        cardDiv.append(pagesDiv);
        cardDiv.append(statusDiv);

        const readDiv = document.createElement('div');
        readDiv.innerText = "Read?";
        readDiv.classList.add("read");
        statusDiv.append(readDiv);

        const label = document.createElement('label');
        label.setAttribute('for', `readbox${library.length-1}`);
        label.classList.add('switch');
        readDiv.append(label);

        const input = document.createElement('input');
        input.type = "checkbox";
        input.setAttribute('id', `readbox${library.length-1}`);
        input.classList.add('readbox');
        input.checked = newBook.readStatus;
        label.append(input);

        const span = document.createElement('span');
        span.classList.add('slider', 'round');
        label.append(span);

        input.addEventListener('click', () => {
            input.checked ? cardDiv.classList.add('active') : cardDiv.classList.remove('active');
        });
        if (input.checked) {
            cardDiv.classList.add('active');
        }

        const removeButtonDiv = document.createElement('div');
        removeButtonDiv.innerText = "Remove";
        removeButtonDiv.classList.add('delete', 'user-delete');
        statusDiv.append(removeButtonDiv);

        const userSection = document.querySelectorAll('.user-section');
        userSection.forEach(section => {
            const thisNode = section.querySelector('.user-card');
            const thisRemoveButton = thisNode.querySelector('.user-delete');
            const thisBook = newBook.title;
            const findex = library.findIndex(book => book.title == thisBook);
            thisRemoveButton.addEventListener('click', () => {
                section.remove(thisNode);
                library.splice(findex, 1);
                saveToLocalStorage();
            })
        })

        backgroundModal.style.display = "none";

        saveToLocalStorage();
    }

    inputTitle.value = "";
    inputAuthor.value = "";
    inputPages.value = "";
    checkbox.checked = false;

});

restoreFromLocalStorage();