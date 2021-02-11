'use strict';
const chipsDropDown = document.querySelectorAll('.chip--dropdown');

chipsDropDown.forEach((item) => {
   item.addEventListener('click', () => {
       const dropdownContent = item.querySelector('.chip__dropdown');
       dropdownContent.classList.toggle('chip__dropdown--open');
   });
});

const chipsCheckbox = document.querySelectorAll('.chip--checkbox');

chipsCheckbox.forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.toggle('chip--open');
    });
});