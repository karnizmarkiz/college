@extends('layouts/admin')

@section('title')
    Олейник Василий Михайлович
@endsection

@section('content')
    <form>
        <div class="form-group">
            <label for="exampleInputEmail1">Фамилия</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value="Олейник">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Имя</label>
            <input value="Василий" type="text" class="form-control" id="exampleInputPassword1">
        </div>
        <div class="form-group">
            <label for="patronymic">Отчество</label>
            <input value="Михайлович" type="text" class="form-control" id="patronymic">
        </div>

        <div class="form-group">
            <label for="exampleFormControlSelect2">Группа</label>
            <select class="form-control" id="exampleFormControlSelect2">
                <option>Право и организация социального обеспечения</option>
                <option>Банковское дело</option>
                <option>Финансы</option>
                <option>Экономика и бухгалтерский учет
                    (по отраслям)</option>
                <option>Правоохранительная деятельность</option>
            </select>
        </div>
        <div class="form-group">
            <label for="exampleFormControlFile1">Аттестат</label>
            <input type="file" class="form-control-file" id="exampleFormControlFile1">
        </div>
        <div class="form-group">
            <label for="snils">Снилс</label>
            <input value="111-353-308 96" type="text" class="form-control" id="snils">
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input value="oli@gmail.com" type="text" class="form-control" id="email">
        </div>
        <div class="form-group">
            <label for="email">Телефон</label>
            <input value="+7 (930) 674-88-21" type="text" class="form-control" id="email">
        </div>

        <button type="submit"  class="btn btn-primary">Созранить</button>
        <button type="submit" class="btn btn-danger">Удалить</button>
    </form>
@endsection