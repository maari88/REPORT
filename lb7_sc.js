function consoleMessage(){
    var inputText = document.getElementById('inputField').value;
    console.log(`Було введено: ${inputText}`);
}

function passwordMessage(){
    var inputText = document.getElementById('passwordField');
    var buttonText = document.getElementById('toggleButton');

    if(inputText.type === "text"){
    inputText.type = "password";
    buttonText.textContent = "Розкрити";} 
    else {
    inputText.type = "text";
    buttonText.textContent = "Приховати";
    }
}

window.addEventListener('click', (event) => {
    const clicked = event.target.id === 'place';
    console.log(clicked);
});


document.addEventListener('DOMContentLoaded', () => {
    const categoriesList = document.querySelectorAll('#categories > .item');
    console.log(`Кількість елементів у списку: ${categoriesList.length}`);

    categoriesList.forEach(category => {
        const title = category.querySelector('h2').textContent;
        const itemCount = category.querySelectorAll('ul > li').length;

        console.log(`Назва категорії: ${title}`);
        console.log(`Кількість елементів: ${itemCount}`);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.login-form');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const {email, password} = loginForm.elements;

        if(email.value.trim() === '' || password.value.trim() === ''){
            alert('All form fields must be filled in');
            return;
        }

        const formData = {
            email: email.value.trim(),
            password: password.value.trim()
        }

        console.log(formData);

        loginForm.reset();
    } );
});

document.addEventListener('DOMContentLoaded', () => {
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }


  const body = document.body;
  const colorSpan = document.querySelector('.color');
  const changeColorButton = document.querySelector('.change-color');

  changeColorButton.addEventListener('click', () => {
    const randomColor = getRandomHexColor();
    body.style.backgroundColor = randomColor;
    colorSpan.textContent = randomColor;

  });
});

document.addEventListener('DOMContentLoaded', () => {
const controls = document.getElementById('controls');
const input = controls.querySelector('input');
const createButton = controls.querySelector('[data-create]');
const destroyButton = controls.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }


function createBoxes(amount){
    boxesContainer.innerHTML = '';

    let size = 30;
    const fragment = document.createDocumentFragment();

    for(let i = 0; i < amount; i++){
        const box = document.createElement('div');
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomHexColor();
        box.style.margin = '5px';
        fragment.appendChild(box);
        size += 10 ;
    }
    boxesContainer.appendChild(fragment);
}

function destroyBoxes() {
    boxesContainer.innerHTML = '';
  }


createButton.addEventListener('click', () => {
    const amount = Number(input.value);

    if (amount >= 1 && amount <= 100){
        createBoxes(amount);
        input.value = '';
    }else {
        alert('Please enter a number between 1 and 100.');
      }
});

destroyButton.addEventListener('click', destroyBoxes);
});