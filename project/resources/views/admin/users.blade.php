@extends('layouts/admin')

@section('title')
    Активация пользователей
@endsection

@section('content')
    <?foreach ($newUsers as $newUser):?>
        <div class="card w-75">
            <form method="POST" class="card-body" action="/admin/new-users">
                @csrf
                <input type="hidden" name="id" value="<?=$newUser->id?>">
                <h5 class="card-title"><?=$newUser->surname?> <?=$newUser->name?> <?=$newUser->patronymic?></h5>
                <p class="card-text">Дата регистрации: 12.12.2020</p>
                <button type="submit" class="btn btn-primary">Активировать</button>
            </form>
        </div>
    <?endforeach;?>
@endsection
