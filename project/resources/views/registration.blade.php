@extends('layouts/empty')

@section('content')
    <div class="modal modal--size-xl">
        <div class="modal__header">
            <img src="./assets/img/logo.png" alt="" class="modal__header-icon">
            <div class="modal__header-title">Регистрация</div>
        </div>
        <div class="js-step">
            <div class="modal__body">
                <input type="text" name="firstName" placeholder="Фамилия" class="input">
                <input type="text" name="secondName" placeholder="Имя" class="input">
                <input type="text" name="patronymic" placeholder="Отчество" class="input">
            </div>
            <div class="text text--center modal__text">
                Нажимая данную кнопку Вы даете согласие на обработку персоналных данных и соглашаетесь с
                <a href="" class="link">политикой конфиденциальности</a>
            </div>
            <div class="modal__footer">
                <a href="/" class="link">Войти</a>
                <button class="button js-next-step">Далее</button>
            </div>
        </div>
        <div class="js-step" style="display: none">
            <div class="modal__body">
                <input type="text" name="date" placeholder="Дата рождения" class="input js-date">
                <input type="text" name="email" placeholder="Email" class="input">
                <input type="text" name="phone" placeholder="Телефон" class="input js-phone">
            </div>
            <div class="modal__footer">
                <div class="link">Назад</div>
                <button class="button js-next-step">Далее</button>
            </div>
        </div>
        <div class="js-step" style="display: none">
            <div class="modal__body">
                <input type="password" name="password" placeholder="Пароль (не менее 8 символов)" class="input">
            </div>
            <div class="modal__footer">
                <div class="link">Назад</div>
                <button class="button js-finish">Завершить</button>
            </div>
        </div>
        <div class="pagination modal__pagination">
            <div class="pagination__item pagination__item--active"></div>
            <div class="pagination__item"></div>
            <div class="pagination__item"></div>
        </div>
    </div>
@endsection


@section('page-script')
    <script src="./assets/js/registration.js?v12312"></script>
@endsection

