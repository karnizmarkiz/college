<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class ApplicantsController extends Controller
{
    public function filter(Request $request)
    {
        $filtered = User::where('group_id', $request->input('group'));

        if ($request->input('original')) {
            $filtered = $filtered->where('original', '1');
        }

        return $filtered->orderByDesc('score')->get();
    }
}
