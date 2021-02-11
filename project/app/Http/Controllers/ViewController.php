<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Group;
use App\Models\User;

class ViewController extends Controller
{
    public function renderIndex() {
        $groups = Group::all();
        $applicants = User::where('group_id', $groups[0]->id)->orderByDesc('score')->get();
        return view('index', [
            'groups' => $groups,
            'applicants' => $applicants
        ]);
    }
}
