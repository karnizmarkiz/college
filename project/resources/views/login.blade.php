@extends('layouts/empty')

@section('content')
    <div class="modal modal--size-l">
        <div class="modal__header">
            <img src="./assets/img/logo.png" alt="" class="modal__header-icon">
            <div class="modal__header-title">Вход</div>
        </div>
        <div class="modal__body">
            <input type="email" placeholder="Email" class="input email">
            <input type="password" placeholder="Пароль" class="input password">
        </div>
        <div class="modal__footer">
            <a href="./registration" class="link">Создать аккаунт</a>
            <button class="button js-login">Войти</button>
        </div>
    </div>
@endsection

@section('page-script')
    <script src="./assets/js/login.js?v12313232"></script>
@endsection
