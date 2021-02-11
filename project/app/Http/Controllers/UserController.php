<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class UserController extends Controller
{
    public function postSignUp(Request $request)
    {
        $currentUser = User::where('email', $request->input('email'))->first();

        if ($currentUser) {
            return response()->json([
                'message' => 'Поользователь с таким email уже существует'
            ], 400);
        }

        User::Create([
            'name' => $request->input('firstName'),
            'surname' => $request->input('secondName'),
            'patronymic' => $request->input('patronymic'),
            'phone' => $request->input('phone'),
            'date_of_birth' => $request->input('date'),
            'email' => $request->input('email'),
            'password' => bcrypt($request->input('password'))
        ]);

        return response()->json([
            'message' => 'Ok!'
        ]);
    }

    public function postSignIn(Request $request)
    {
        if (!Auth::attempt($request->only(['email', 'password']), $request->has('remember'))) {
            return response()->json([
                'message' => 'Неверный логин или пароль'
            ], 400);
        } else {
            return response()->json([
                'status' => Auth::check()
            ]);
        }
    }

}
