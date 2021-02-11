<?php
use Illuminate\Support\Facades\Auth;
$user = Auth::user();
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <title>Приемная комиссия</title>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./assets/css/style.css?v{{rand()}}">
</head>
<body>
<header class="header">
    <div class="header__user">
        <div class="header__user-icon">
            {{mb_substr($user->name, 0, 1).mb_substr($user->surname, 0, 1)}}
        </div>
        <div class="header__user-content">
            <div class="header__user-full-name">
                {{$user->name}} {{$user->surname}}
            </div>
            <div class="header__user-role">
                Абитуриент
            </div>
        </div>
    </div>
</header>
<div class="container">
    @yield('content')
</div>
<script src="./assets/js/vendor.js"></script>
<script src="./assets/js/ui-kit.js"></script>
@yield('page-script')
</body>
</html>
