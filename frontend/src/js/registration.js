import { emailRegExp } from './utils/regExp';
import IMask from 'imask';

const phoneInput = document.querySelector('.js-phone');
const phoneMaskOptions = {
    mask: '+{7}(000)000-00-00'
};
const phoneMask = IMask(phoneInput, phoneMaskOptions);

const date = document.querySelector('.js-date');
const dateMaskOptions = {
    mask: Date
};
const dateMask = IMask(date, dateMaskOptions);

let step = 0;
const steps = document.querySelectorAll('.js-step');
const paginationItems = document.querySelectorAll('.pagination__item');
const values = {
    firstName: '',
    secondName: '',
    patronymic: ''
}
let errors = [];

function validation(name, value) {

    if (name === 'password' && length < 8 ) {
        errors.push(name);
        return false;
    }

    if (name === "date" && dateMask.unmaskedValue.length !== 10) {
        errors.push(name);
        return false;
    }

    if (name === 'email' && !emailRegExp.test(value)) {
        errors.push(name);
        return false;
    }

    if (name === 'phone' && phoneMask.unmaskedValue.length !== 11) {
        errors.push(name);
        return false
    }

    if (value === '') {
        errors.push(name);
        return false;
    }

    errors = errors.filter(errorField => errorField !== name);
}

function nextStep() {
    const inputs = steps[step].querySelectorAll('.input');

    Array.prototype.forEach.call(inputs, (input) => {
        validation(input.name, input.value);
        values[input.name] = input.value
    });

    if (errors.length === 0) {
        steps[step].style.display = "none";
        step += 1;
        steps[step].style.display = "";

        Array.prototype.forEach.call(paginationItems, (item, index) => {
            if (index === step) {
                item.classList.add('pagination__item--active');
            } else {
                item.classList.remove('pagination__item--active');
            }
        });
    } else {
        inputs.forEach(input => {
            if (errors.includes(input.name)) {
                input.classList.add('input--error')
            } else {
                input.classList.remove('input--error')
            }
        })
    }
}

const nextStepBtns = document.querySelectorAll('.js-next-step');

nextStepBtns.forEach((btn) => {
    btn.addEventListener('click', nextStep);
})
