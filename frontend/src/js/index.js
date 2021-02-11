'use strict';
import { request } from "./utils/request";
const applicants = document.querySelector('.applicants');
const groupName = document.querySelector('.js-group-name');
const groupsItems = document.querySelectorAll('.js-group');
const originalCheckbox = document.querySelector('.js-original');

const filters = {
    group: groupsItems[0].getAttribute('data-id'),
    original: false
};


originalCheckbox.addEventListener('click', () => {
    filters.original = !filters.original;
    filter();
});

groupsItems.forEach((item) => {
   item.addEventListener('click', () => {
       filters.group = item.getAttribute('data-id');
       groupName.textContent = item.querySelector('.chip__dropdown-title').textContent;
       filter();
   });
});

const filter = () => {
    request
        .post('/api/applicants-filter', filters)
        .then(response => {
            let html = '';

            response.forEach((item) => {
                html += `
                    <div class="data-item">
                        <div class="data-item__info">
                            <div class="data-item__icon data-item__icon--success">${item.score}</div>
                            <div class="data-item__content">
                                <div class="data-item__title">
                                    ${item.surname} ${item.name} ${item.patronymic}
                                </div>
                                <div class="data-item__subtitle">
        
                                </div>
                            </div>
                        </div>
                        <div class="data-item__status">
                            ${item.original === '1' ? 'Оригинал' : 'Не оригинал'}
                        </div>
                    </div>
                `;
            });

            applicants.innerHTML = html;
        });
};
