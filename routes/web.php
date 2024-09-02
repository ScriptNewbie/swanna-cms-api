<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\FilesController;
use App\Http\Middleware\AdminMiddleware;
use Illuminate\Support\Facades\Auth;

Route::get('/', function () {
    if (Auth::check()) {
        return redirect()->route('news');
    } else {
        return redirect()->route('login');
    }
});



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware(['auth', 'verified', AdminMiddleware::class])->group(function () {
    Route::get('/news', [NewsController::class, 'index'])->name('news');
    Route::post('/news', [NewsController::class, 'store'])->name('news.store');
    Route::delete('/news/{id}', [NewsController::class, 'destroy'])->name('news.destroy');
    Route::get('/news/{id}', [NewsController::class, 'edit'])->name('news.edit');
    Route::put('/news/{id}', [NewsController::class, 'update'])->name('news.update');

    Route::get('/upload-files', [FilesController::class, 'index'])->name('files');
    Route::post('/upload-files', [FilesController::class, 'store'])->name('files.upload');
});

require __DIR__ . '/auth.php';
