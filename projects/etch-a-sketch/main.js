//Variables

let container = document.getElementById('container');

const rgbButton = document.getElementById('rgb-button');
const blueButton = document.getElementById('blue-button');
const redButton = document.getElementById('red-button');
const yellowButton = document.getElementById('yellow-button');
const clearButton = document.getElementById('reset-button');
const sixteenButton = document.getElementById('sixteen');
const thirtyTwoButton = document.getElementById('thirty-two');
const sixtyFourButton = document.getElementById('sixty-four');

let userInput = document.getElementById('size-slider');
const userInputDefault = 16;
let userInputColor = document.getElementById('color-picker');
let sizeValue = document.getElementById('size-value');
let colorValue = document.getElementById('color-value');
let getColor = 'rgba(128, 128, 128, 0.2)';

// Functions

function createDivs(userInput) {

    const numOfSquares = userInput * userInput;
    const size = (720 / userInput) - 2;

    for (let i = 1; i <= numOfSquares; i++) {
        let div = document.createElement('div');
        div.style.width = size + 'px';
        div.style.height = size + 'px';
        div.className = "sq";
        div.style.backgroundColor = 'rgba(255, 255, 255, 255)';
        container.appendChild(div);
        div.addEventListener("mouseover", function() {
            div.className = "sq mouseover active-button";
            div.style.backgroundColor = getColor;
        });
    }

}

function resetDivs() {

    let div = document.querySelectorAll('.mouseover');
    let rgbDiv = document.querySelectorAll('.rgb')

    for (let i = 0; i < div.length; i++) {
        div[i].classList.remove('mouseover', 'active-button');
        div[i].style.backgroundColor = 'rgba(255, 255, 255, 255)';
    }

    for (let i = 0; i < rgbDiv.length; i++) {
        rgbDiv[i].classList.remove('rgb');
        rgbDiv[i].style.backgroundColor = 'rgba(255, 255, 255, 255)';

    }

}

function removeDivs() {

    let div = document.querySelectorAll('.sq');

    if (container.children) {
        for (let i = 0; i < div.length; i++) {
            let square = div[i];
            container.removeChild(square);
        }
    }

}

function rgbAdd() {

    let square = document.querySelectorAll('.rgb');
    square.forEach(item => {
        item.addEventListener("mouseover", () => {
            let r = Math.floor(Math.random() * 255);
            let g = Math.floor(Math.random() * 255);
            let b = Math.floor(Math.random() * 255);

            item.style.backgroundColor = 'rgba(' + r + ', ' + g + ', ' + b + ', 255)';

        });
    });
}

function blueAdd() {
    let square = document.querySelectorAll('.blue');
    square.forEach(item => {
        item.addEventListener("mouseover", () => {
            item.style.backgroundColor = 'blue';
        });
    });
}

function redAdd() {
    let square = document.querySelectorAll('.red');
    square.forEach(item => {
        item.addEventListener("mouseover", () => {
            item.style.backgroundColor = 'red';
        });
    });
}

function yellowAdd() {
    let square = document.querySelectorAll('.yellow');
    square.forEach(item => {
        item.addEventListener("mouseover", () => {
            item.style.backgroundColor = 'yellow';
        });
    });
}

function userColorAdd() {
    let square = document.querySelectorAll('.user-color');
    square.forEach(item => {
        item.addEventListener("mouseover", () => {
            item.style.backgroundColor = userInputColor.value;
        });
    });
}

function start() {
    sizeButtonChecked();
    colorButtonChecked();
}

//Conditional Functions

function colorButtonChecked() {
    if (blueButton.checked) {
        let square = document.querySelectorAll('.sq');
        for (i = 0; i < square.length; i++) {
            square[i].classList.add("blue");
        }
        blueAdd();
    } else if (redButton.checked) {
        let square = document.querySelectorAll('.sq');
        for (i = 0; i < square.length; i++) {
            square[i].classList.add("red");
        }
        redAdd();
    } else if (yellowButton.checked) {
        let square = document.querySelectorAll('.sq');
        for (i = 0; i < square.length; i++) {
            square[i].classList.add("yellow");
        }
        yellowAdd();
    } else if (rgbButton.checked) {
        let square = document.querySelectorAll('.sq');
        for (i = 0; i < square.length; i++) {
            square[i].classList.add("rgb");
        }
        rgbAdd();
    }
}

function sizeButtonChecked() {
    if (sixteenButton.checked) {
        userInput = '16';
        removeDivs();
        createDivs(userInput);
    } else if (thirtyTwoButton.checked) {
        userInput = '32';
        removeDivs();
        createDivs(userInput);
    } else if (sixtyFourButton.checked) {
        userInput = '64';
        removeDivs();
        createDivs(userInput);
    } else {
        userInput = document.getElementById('size-slider');
        createDivs(userInput);
    }

}

//Events

rgbButton.addEventListener("click", function() {
    rgbButton.checked = "true";
    colorButtonChecked();
})

blueButton.addEventListener("click", function() {
    blueButton.checked = "true";
    colorButtonChecked();
})

redButton.addEventListener("click", function() {
    redButton.checked = "true";
    colorButtonChecked();
})

yellowButton.addEventListener("click", function() {
    yellowButton.checked = "true";
    colorButtonChecked();
})

clearButton.addEventListener("click", function() {
    resetDivs();
});

sixteenButton.addEventListener("click", function() {
    sixteenButton.checked = "true";
    sizeButtonChecked();
    colorButtonChecked();
});

thirtyTwoButton.addEventListener("click", function() {
    thirtyTwoButton.checked = "true";
    sizeButtonChecked();
    colorButtonChecked();
});

sixtyFourButton.addEventListener("click", function() {
    sixtyFourButton.checked = "true";
    sizeButtonChecked();
    colorButtonChecked();
});

//User defined functions

sizeValue.innerHTML = userInput.value;

userInput.oninput = function() {
    sizeValue.innerHTML = this.value;
    removeDivs();
    createDivs(this.value);
    colorButtonChecked();
}

colorValue.innerHTML = userInputColor.value;

userInputColor.oninput = function() {
    colorValue.innerHTML = this.value;
    let square = document.querySelectorAll('.sq');
    for (i = 0; i < square.length; i++) {
        square[i].classList.add("user-color");
    }
    userColorAdd();
}

//Calls

start();