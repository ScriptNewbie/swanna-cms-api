<?php

namespace App\Http\Controllers\Api;

use App\Models\News;
use App\Http\Controllers\Controller;
use Illuminate\Support\Carbon;

class NewsController extends Controller
{

    public function index()
    {
        $news = News::orderBy('id', 'desc')
            ->take(10)
            ->get();

        $news->transform(function ($item) {
            $item->publicationDate = Carbon::parse($item->publicationDate)->format('d/m/Y');
            return $item;
        });

        return response()->json($news);
    }
}
