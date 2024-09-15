<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Http\Controllers\Controller;

class UsersController extends Controller
{

    public function index()
    {
        $users = User::all();

        return Inertia::render('Users/Index', [
            'users' => $users,
        ]);
    }

    public function destroy($id)
    {
        $news = User::findOrFail($id);
        $news->delete();

        return redirect()->back()->with('success', 'User deleted successfully!');
    }


    public function makeAdmin($id)
    {
        $user = User::findOrFail($id);
        $user->update(["admin" => 1]);

        return redirect()->back()->with('success', 'User is admin now!');
    }

    public function makeSuperAdmin($id)
    {
        $user = User::findOrFail($id);
        $user->update(["admin" => 10]);

        return redirect()->back()->with('success', 'User is super admin now!');
    }

    public function makeUser($id)
    {
        $user = User::findOrFail($id);
        $user->update(["admin" => 0]);

        return redirect()->back()->with('success', 'User is standard user now!');
    }
}
