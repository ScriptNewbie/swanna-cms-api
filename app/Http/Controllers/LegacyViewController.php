<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;
use Parsedown;

class LegacyViewController extends Controller
{
    private function preparse($inputString)
    {
        $outputString = str_replace("/pdf", "https://api.swanna.net.pl/api/files", $inputString);

        // Regular expression to match Markdown links starting with "/"
        $pattern = '/\[(.*?)\]\((\/.*?)\)/';

        // Callback function to replace links starting with "/"
        $callback = function ($matches) {
            $text = $matches[1];
            $url = str_replace('/', '#', $matches[2]);
            return "[$text]($url)";
        };

        // Use preg_replace_callback to replace links in the modified outputString
        $outputString = preg_replace_callback($pattern, $callback, $outputString);

        return $outputString;
    }

    public function index()
    {
        $parsedown = new Parsedown();

        // Get the 10 most recent news items
        $newsItems = News::orderBy('id', 'desc')
            ->limit(10)
            ->get()
            ->map(function ($news) use ($parsedown) {
                return [
                    'title' => $news->title,
                    'date' => date('d/m/Y', strtotime($news->publicationDate)),
                    'content' => $parsedown->text($this->preparse($news->content))
                ];
            });

        return view('legacy', ['newsItems' => $newsItems]);
    }
}
