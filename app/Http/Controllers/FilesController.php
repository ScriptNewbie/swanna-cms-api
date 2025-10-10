<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class FilesController extends Controller
{
    private $disk = 'files';

    public function index()
    {
        $files = Storage::disk($this->disk)->files();
        // Get just the filenames without paths
        $files = array_map(function ($file) {
            return basename($file);
        }, $files);

        return Inertia::render('Files/Index', ["files" => array_values($files)]);
    }

    public function destroy($name)
    {
        Storage::disk($this->disk)->delete($name);
        return redirect()->back()->with('success', 'File deleted successfully!');
    }

    public function store(Request $request)
    {
        $request->validate([
            'file' => 'required|file'
        ]);

        $file = $request->file('file');
        $filename = $file->getClientOriginalName();

        Storage::disk($this->disk)->putFileAs('', $file, $filename);

        return redirect()->back()->with('success', 'File uploaded successfully!');
    }

    public function show($name)
    {
        if (!Storage::disk($this->disk)->exists($name)) {
            abort(404);
        }

        return response()->file(Storage::disk($this->disk)->path($name));
    }
}
