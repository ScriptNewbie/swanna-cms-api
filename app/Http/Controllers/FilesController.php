<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class FilesController extends Controller
{
    public function index()
    {
        return Inertia::render('Files/Index');
    }

    public function store(Request $request)
    {
        $request->file('file')->move(public_path('../private_html/files'), $request->file('file')->getClientOriginalName());
        return redirect()->back()->with('success', 'File uploaded successfully!');
    }
}
