<?php

namespace App\Http\Controllers;

use App\Models\News;
use Inertia\Inertia;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class NewsController extends Controller
{

    public function index()
    {
        $news = News::orderBy('id', 'desc')->get();

        return Inertia::render('News/Index', [
            'news' => $news,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|max:255',
            'content' => 'required',
            'author' => 'required|max:100',
        ]);

        News::create($validated);

        return redirect()->route('news')->with('success', 'News post created successfully!');
    }

    public function destroy($id)
    {
        $news = News::findOrFail($id);
        $news->delete();

        return redirect()->route('news')->with('success', 'News post deleted successfully!');
    }
}
