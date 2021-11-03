const form = document.querySelector('.content__form');
const input = document.querySelector('.form__input');

const errorIcon = document.querySelector('.form__errorIcon');
const errorMessage = document.querySelector('.form__errorMessage');

function validateEmail(email) 
    {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }


form.addEventListener('submit', (element) =>{
    if (validateEmail(input.value) == false){

        errorIcon.style.display = 'block';
        errorMessage.style.display = 'block';
        input.style.border = '2px solid var(--accent)';

        element.preventDefault();
    }
})