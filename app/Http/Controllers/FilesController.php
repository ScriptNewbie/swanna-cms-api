<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class FilesController extends Controller
{
    private $fileDirectory;

    public function __construct()
    {
        $this->fileDirectory = public_path('../../private_html/files');
    }

    public function index()
    {
        $files = [];
        if (file_exists($this->fileDirectory)) {
            $files = scandir($this->fileDirectory);
            $files = array_values(array_filter($files, function ($file) {
                return !str_starts_with($file, ".");
            }));
        }
        return Inertia::render('Files/Index', ["files" => $files]);
    }

    public function destroy($name)
    {
        $file = $this->fileDirectory . "/" . $name;
        if (file_exists($file)) {
            unlink($file);
        }
        return redirect()->back()->with('success', 'File deleted successfully!');
    }

    public function store(Request $request)
    {
        $request->file('file')->move($this->fileDirectory, $request->file('file')->getClientOriginalName());
        return redirect()->back()->with('success', 'File uploaded successfully!');
    }
}
