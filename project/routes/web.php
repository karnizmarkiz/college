<?php

use App\Http\Controllers\AdminController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ViewController;
use App\Http\Controllers\ApplicantsController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::group(['prefix' => 'api'], function() {
    Route::post('/registration', [ UserController::class, 'postSignUp' ]);
    Route::post('/login', [ UserController::class, 'postSignIn' ]);

    Route::post('/applicants-filter', [ ApplicantsController::class, 'filter' ]);
});

Route::group(['middleware' => 'auth.user'], function() {
    Route::get('/', [ ViewController::class, 'renderIndex' ])->name('home');

    Route::group(['prefix' => 'admin'], function() {
        Route::get('/', function () {
            return view('admin.index');
        })->name('admin');
        Route::get('/new-users', [AdminController::class, 'renderNewUsersPage']);
        Route::post('/new-users', [AdminController::class, 'acceptUser']);
        Route::get('/user/{id}', function () {
            return view('admin.user');
        });
    });
});

Route::get('/not-accepted', function () {
    return view('not-accepted');
})->name('not-accepted');

Route::group(['middleware' => 'guest'], function() {
    Route::get('/registration', function () {
        return view('registration');
    })->name('registration');;

    Route::get('/login', function () {
        return view('login');
    })->name('login');
});

