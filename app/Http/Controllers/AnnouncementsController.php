<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use App\Models\CustomButtonSetting;

class AnnouncementsController extends Controller
{
    private $disk = 'announcements';
    private $currentFile = 'ogloszenia.pdf';
    private $nextFile = 'next.pdf';
    private $historyDirectory = 'historia';

    public function index()
    {
        $customButtonSettings = CustomButtonSetting::getSettings();

        return Inertia::render('Announcements/Index', [
            "nextAvailable" => Storage::disk($this->disk)->exists($this->nextFile),
            "customButtonSettings" => $customButtonSettings
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'file' => 'required|file|mimes:pdf'
        ]);

        $this->archiveCurrent();

        $file = $request->file('file');
        Storage::disk($this->disk)->putFileAs('', $file, $this->currentFile);

        return redirect()->back()->with('success', 'File uploaded and managed successfully!');
    }

    public function storeNext(Request $request)
    {
        $request->validate([
            'file' => 'required|file|mimes:pdf'
        ]);

        $file = $request->file('file');
        Storage::disk($this->disk)->putFileAs('', $file, $this->nextFile);

        return redirect()->back()->with('success', 'File uploaded successfully!');
    }

    public function nextAsCurrent()
    {
        if (!Storage::disk($this->disk)->exists($this->nextFile)) {
            return redirect()->back()->withErrors(["next" => "Nie ma jeszcze ogłoszeń z następnego tygodnia!"]);
        }

        $this->archiveCurrent();

        // Move next file to current
        Storage::disk($this->disk)->move($this->nextFile, $this->currentFile);

        return redirect()->back()->with('success', 'Files managed successfully!');
    }

    private function archiveCurrent()
    {
        if (!Storage::disk($this->disk)->exists($this->currentFile)) {
            return;
        }

        $randomString = Str::random(5);
        $historyFilename = date("d-m-Y") . '-' . $randomString . '.pdf';
        $historyPath = $this->historyDirectory . '/' . $historyFilename;

        // Move current file to history
        Storage::disk($this->disk)->move($this->currentFile, $historyPath);
    }

    public function show($filename)
    {
        // Only allow specific filenames
        if (!in_array($filename, [$this->currentFile, $this->nextFile])) {
            abort(404);
        }

        if (!Storage::disk($this->disk)->exists($filename)) {
            abort(404);
        }

        return response()->file(
            Storage::disk($this->disk)->path($filename),
            ['Content-Type' => 'application/pdf']
        );
    }

    public function updateCustomButton(Request $request)
    {
        $validated = $request->validate([
            'enabled' => 'required|boolean',
            'name' => 'required|string|max:255',
            'url' => 'required|string|max:500',
        ]);

        $settings = CustomButtonSetting::getSettings();
        $settings->update($validated);

        return redirect()->back()->with('success', 'Custom button settings updated successfully!');
    }
}
