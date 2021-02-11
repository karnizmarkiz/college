'use strict';
import { request } from './utils/request';
import { emailRegExp } from './utils/regExp';

const password = document.querySelector('.password');
const email = document.querySelector('.email');
const btn = document.querySelector('.js-login');

btn.addEventListener('click', () => {
    if (
        email.length === 0 &&
        email.test(emailRegExp) &&
        password.length <= 8
    ) {
        alert('Неверно заполнен логин или пароль');
        return false;
    }

    request
        .post('/api/login', {
            email: email.value,
            password: password.value
        })
        .then(() => {
            // window.location = '/';
        });
});
