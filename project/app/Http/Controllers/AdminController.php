<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class AdminController extends Controller
{
    public function acceptUser(Request $request) {
        $user = User::where('id', $request->input('id'))->first();

        $user->role = 2;

        $user->save();

        return redirect()->back();
    }

    public function renderNewUsersPage() {
        $newUsers = User::where('role', 1)->get();
        return view('admin.users',[
            'newUsers' => $newUsers
        ]);
    }
}
