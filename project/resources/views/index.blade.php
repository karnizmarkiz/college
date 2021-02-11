@extends('layouts/main')

@section('content')
    <div class="padding-top-20"></div>
    <div class="chips">
        <div class="chip chip--dropdown">
            <span class="chip__content js-group-name"><?=$groups[0]->code?></span>
            <div class="chip__dropdown">
                <?foreach ($groups as $group):?>
                    <div class="chip__dropdown-item js-group" data-id="<?=$group->id?>">
                        <div class="chip__dropdown-title"><?=$group->code?></div>
                        <div class="chip__dropdown-description"><?=$group->name?></div>
                    </div>
                <?endforeach;?>
            </div>

        </div>
        <div class="chip chip--checkbox js-original">Оригинал аттестата</div>
    </div>
    <div class="padding-top-40"></div>
    <div class="applicants">
        <?foreach ($applicants as $applicant):?>
            <div class="data-item">
                <div class="data-item__info">
                    <div class="data-item__icon data-item__icon--success"><?=$applicant->score?></div>
                    <div class="data-item__content">
                        <div class="data-item__title">
                            <?=$applicant->surname?> <?=$applicant->name?> <?=$applicant->patronymic?>
                        </div>
                        <div class="data-item__subtitle">

                        </div>
                    </div>
                </div>
                <div class="data-item__status">
                    <?=$applicant->original === '1' ? 'Оригинал' : 'Не оригинал'?>
                </div>
            </div>
        <?endforeach;?>
    </div>
@endsection

@section('page-script')
    <script src="./assets/js/index.js?v123122"></script>
@endsection
