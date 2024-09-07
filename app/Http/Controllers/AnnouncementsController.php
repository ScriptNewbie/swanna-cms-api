<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class AnnouncementsController extends Controller
{

    private $uploadDirectory;
    private $historyDirectory;
    private $currentFile;
    private $nextFile;

    public function __construct()
    {
        $this->uploadDirectory = public_path('../private_html/ogloszenia');
        $this->historyDirectory = $this->uploadDirectory . '/historia';
        $this->currentFile = $this->uploadDirectory . '/ogloszenia.pdf';
        $this->nextFile = $this->uploadDirectory . '/next.pdf';
    }

    public function index()
    {
        return Inertia::render('Announcements/Index');
    }

    public function store(Request $request)
    {
        $this->archiveCurrent();
        $request->file('file')->move($this->uploadDirectory, "ogloszenia.pdf");
        return redirect()->back()->with('success', 'File uploaded and managed successfully!');
    }


    public function storeNext(Request $request)
    {
        $request->file('file')->move(public_path('../private_html/ogloszenia'), "next.pdf");
        return redirect()->back()->with('success', 'File uploaded successfully!');
    }

    public function nextAsCurrent()
    {
        if (!file_exists($this->nextFile)) {
            return redirect()->back()->with('error', 'Error! next.pdf does not exist!');
        }
        $this->archiveCurrent();
        rename($this->nextFile, $this->currentFile);
        return redirect()->back()->with('success', 'Files managed successfully!');
    }

    private function archiveCurrent()
    {
        $randomString = Str::random(5);
        $historyFile = $this->historyDirectory . '/' . date("d-m-Y") . '-' . $randomString . '.pdf';

        if (!file_exists($this->historyDirectory)) {
            mkdir($this->historyDirectory, 0755, true);
        }

        if (file_exists($this->currentFile)) {
            rename($this->currentFile, $historyFile);
        }
    }
}
